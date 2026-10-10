/* Polymates — Bac pro Technicien d'études du bâtiment — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-etudes-batiment"] = {
 "id": "bp-etudes-batiment",
 "nom": "Technicien d'études du bâtiment",
 "icone": "🎓",
 "couleur": "#7ab4c8",
 "intro": "Le bac pro Technicien d'études du bâtiment forme des techniciens qui travaillent en bureau d'études, en cabinet d'économiste, en agence d'architecture ou en entreprise : métreur, assistant d'études de prix, dessinateur-projeteur, modeleur BIM, assistant en architecture. Ce cours couvre les savoirs de première et de terminale : enjeux énergétiques et réglementation, étude des constructions, représentation et pièces écrites, économie, préparation et suivi des travaux, avec des chapitres propres à chacune des deux options. Il est organisé en deux blocs : un cours théorique, puis une partie consacrée à l'analyse des documents professionnels tels qu'ils sont proposés à l'épreuve écrite.",
 "options": [
  {
   "id": "a",
   "nom": "Option A — Études et économie",
   "icone": "📐",
   "desc": "Quantifier les ouvrages, établir les prix et estimer les coûts d'un projet de construction, de l'avant-métré à l'analyse des offres."
  },
  {
   "id": "b",
   "nom": "Option B — Assistant en architecture",
   "icone": "🏛️",
   "desc": "Participer à la conception architecturale : analyse de programme, esquisse, dimensionnement des espaces et éléments de présentation du projet."
  }
 ],
 "parties": [
  {
   "titre": "Partie 1 — Contexte professionnel, énergie et environnement",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bteb-enjeux-energetiques",
     "titre": "Enjeux énergétiques et environnementaux du bâtiment",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Situer le poids du bâtiment dans les consommations d'énergie et les émissions de gaz à effet de serre",
      "Distinguer énergie primaire et énergie finale, énergies renouvelables et fossiles",
      "Expliquer la notion de cycle de vie et d'analyse du cycle de vie d'un bâtiment",
      "Identifier les grands impacts environnementaux d'une opération de construction",
      "Raisonner en coût global plutôt qu'en coût d'investissement seul"
     ],
     "sections": [
      {
       "titre": "Le bâtiment, un secteur clé de la transition énergétique",
       "contenu": "<p>En France, le secteur résidentiel et tertiaire est le <strong>premier consommateur d'énergie finale</strong> : il représente de l'ordre de 45 % de l'énergie consommée dans le pays et environ un quart des émissions de <strong>gaz à effet de serre</strong> (GES), si l'on ajoute aux consommations des bâtiments l'énergie nécessaire à la fabrication des matériaux. Ces ordres de grandeur expliquent pourquoi les pouvoirs publics ont fait du bâtiment une priorité de la politique climatique.</p>\n<p>Cette politique s'inscrit dans un cadre international et national. L'<strong>accord de Paris</strong> (2015) fixe l'objectif de contenir le réchauffement nettement en dessous de 2 °C. L'Union européenne s'est engagée à atteindre la <strong>neutralité carbone</strong> en 2050. En France, la <strong>stratégie nationale bas-carbone</strong> (SNBC) décline cet objectif par secteur, et plusieurs lois successives (transition énergétique pour la croissance verte en 2015, loi Climat et résilience en 2021) en tirent des obligations concrètes : réglementation environnementale des constructions neuves, rénovation des logements énergivores, obligations de réduction des consommations dans les bâtiments tertiaires.</p>\n<p>Pour le technicien d'études, ces enjeux ne sont pas abstraits. Ils se traduisent dans les pièces du dossier : épaisseurs d'isolant, choix des menuiseries, systèmes de chauffage et de ventilation, choix de matériaux biosourcés, études thermiques et environnementales jointes au permis de construire, quantités et coûts des solutions retenues.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le bâtiment agit sur le climat de deux façons : par l'énergie consommée pendant son utilisation (chauffage, eau chaude, refroidissement, éclairage, ventilation) et par le carbone « contenu » dans ses matériaux et son chantier. Les réglementations récentes prennent en compte les deux.</div>"
      },
      {
       "titre": "Énergie primaire, énergie finale et sources d'énergie",
       "contenu": "<p>L'<strong>énergie finale</strong> est l'énergie livrée à l'utilisateur et mesurée par ses compteurs : kilowattheures d'électricité, mètres cubes de gaz, litres de fioul, kilogrammes de granulés. L'<strong>énergie primaire</strong> est l'énergie contenue dans les ressources naturelles avant transformation (pétrole brut, gaz, uranium, vent, soleil). Entre les deux, il y a des pertes de production, de transformation et de transport.</p>\n<p>La réglementation passe de l'une à l'autre par un <strong>coefficient de conversion</strong>. Pour le gaz, le fioul ou le bois, il vaut 1 : le kWh livré est compté pour 1 kWh d'énergie primaire. Pour l'électricité, il est supérieur à 1, car une centrale perd une grande partie de l'énergie qu'elle consomme. La valeur de ce coefficient est fixée par les textes et a été révisée à plusieurs reprises : il faut toujours utiliser celle indiquée dans la méthode de calcul en vigueur.</p>\n<table><thead><tr><th>Source</th><th>Catégorie</th><th>Exemples d'usage dans le bâtiment</th></tr></thead><tbody>\n<tr><td>Gaz naturel, fioul, propane</td><td>Fossile</td><td>Chaudières, production d'eau chaude</td></tr>\n<tr><td>Électricité du réseau</td><td>Mixte (nucléaire, renouvelable, fossile)</td><td>Pompes à chaleur, éclairage, ventilation</td></tr>\n<tr><td>Bois (bûches, granulés, plaquettes)</td><td>Renouvelable (biomasse)</td><td>Poêles, chaudières bois</td></tr>\n<tr><td>Soleil</td><td>Renouvelable</td><td>Panneaux photovoltaïques, capteurs solaires thermiques</td></tr>\n<tr><td>Chaleur de l'air, du sol, de l'eau</td><td>Renouvelable (captée par une pompe à chaleur)</td><td>PAC air/eau, PAC géothermique</td></tr>\n<tr><td>Réseau de chaleur urbain</td><td>Variable selon le mix</td><td>Chauffage collectif</td></tr>\n</tbody></table>\n<p>La <strong>cogénération</strong> produit simultanément de l'électricité et de la chaleur à partir d'un même combustible ; elle améliore le rendement global. Une <strong>pompe à chaleur</strong> (PAC) transfère la chaleur d'un milieu froid vers un milieu chaud ; son efficacité se mesure par le <strong>coefficient de performance</strong> (COP), rapport entre la chaleur fournie et l'électricité consommée. Une PAC de COP 3 fournit 3 kWh de chaleur pour 1 kWh d'électricité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> convertir une consommation en énergie primaire. Un logement consomme 6 000 kWh d'électricité par an pour une PAC. Avec un coefficient de conversion pris égal à 2,3 (valeur longtemps utilisée, à remplacer par la valeur en vigueur), l'énergie primaire vaut 6 000 × 2,3 = 13 800 kWh<sub>ep</sub>. Rapportée à une surface de 100 m², la consommation est de 138 kWh<sub>ep</sub>/(m².an). La même démarche s'applique au gaz avec un coefficient de 1 : 9 000 kWh de gaz donnent 9 000 kWh<sub>ep</sub>, soit 90 kWh<sub>ep</sub>/(m².an).</div>"
      },
      {
       "titre": "Les impacts environnementaux d'une construction",
       "contenu": "<p>Un bâtiment produit des impacts tout au long de sa vie. On les regroupe généralement en cinq familles :</p>\n<ul>\n<li><strong>Changement climatique</strong> : émissions de GES, exprimées en <strong>kilogrammes équivalent CO<sub>2</sub></strong> (kg éq. CO<sub>2</sub>), une unité qui ramène tous les gaz (méthane, protoxyde d'azote, fluides frigorigènes) à l'effet du dioxyde de carbone.</li>\n<li><strong>Épuisement des ressources</strong> : granulats, sable, métaux, eau, énergie fossile.</li>\n<li><strong>Déchets</strong> : le secteur du bâtiment produit chaque année plusieurs dizaines de millions de tonnes de déchets, issus surtout de la démolition et de la réhabilitation.</li>\n<li><strong>Qualité de l'air et de l'eau</strong> : émissions de composés organiques volatils (COV) par les peintures, colles et revêtements ; rejets de chantier dans les réseaux.</li>\n<li><strong>Nuisances locales</strong> : bruit, poussières, trafic de camions, artificialisation des sols.</li>\n</ul>\n<p>Pour évaluer ces impacts, on utilise l'<strong>analyse du cycle de vie</strong> (ACV). Elle découpe la vie du bâtiment en étapes : production des matériaux (extraction, fabrication, transport), construction (chantier), exploitation (énergie, eau, entretien, remplacements) et fin de vie (démolition, tri, recyclage, mise en décharge). Les fabricants fournissent pour leurs produits des <strong>fiches de déclaration environnementale et sanitaire</strong> (FDES), regroupées dans une base de données publique (INIES). Pour les équipements, on parle de <strong>profils environnementaux produits</strong> (PEP).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un matériau « naturel » n'est pas forcément peu émetteur, et un matériau industriel n'est pas forcément mauvais. Il faut comparer des FDES rapportées à la même <strong>unité fonctionnelle</strong> (par exemple 1 m² de mur assurant une résistance thermique donnée pendant 50 ans), sinon la comparaison n'a aucun sens.</div>"
      },
      {
       "titre": "Le développement durable appliqué au bâtiment",
       "contenu": "<p>Le <strong>développement durable</strong> vise à répondre aux besoins présents sans compromettre ceux des générations futures. Il repose sur trois piliers : environnemental, social et économique. Dans le bâtiment, il se décline en domaines d'action concrets :</p>\n<table><thead><tr><th>Domaine</th><th>Exemples de choix de conception</th></tr></thead><tbody>\n<tr><td>Énergie</td><td>Orientation des baies au sud, compacité du volume, isolation renforcée, production renouvelable</td></tr>\n<tr><td>Matériaux</td><td>Matériaux biosourcés (bois, paille, chanvre, ouate de cellulose), réemploi, matériaux locaux</td></tr>\n<tr><td>Eau</td><td>Récupération des eaux pluviales, équipements hydro-économes, infiltration à la parcelle</td></tr>\n<tr><td>Chantier</td><td>Chantier à faibles nuisances, tri des déchets, préfabrication</td></tr>\n<tr><td>Santé et confort</td><td>Produits faiblement émissifs (étiquette A+), ventilation performante, lumière naturelle</td></tr>\n<tr><td>Usage</td><td>Bâtiment évolutif, facile à entretenir, accessible à tous</td></tr>\n</tbody></table>\n<p>Des démarches volontaires (labels et certifications) permettent d'aller au-delà des exigences réglementaires. Elles évoluent régulièrement : le technicien vérifie toujours le référentiel en vigueur cité dans le programme du maître d'ouvrage.</p>\n<p>La <strong>compacité</strong> mérite une attention particulière. Un volume compact (proche d'un cube) présente moins de surface d'enveloppe pour un même volume habitable, donc moins de déperditions et moins de matériaux. Un plan découpé, avec de nombreux décrochés, coûte plus cher à construire et à chauffer.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un bureau d'études ou un cabinet d'économiste, la demande « environnementale » d'un maître d'ouvrage arrive souvent sous forme d'un objectif chiffré (seuil carbone, niveau de label, part de matériaux biosourcés). Le technicien doit alors traduire cet objectif en choix constructifs, puis en quantités et en coûts.</div>"
      },
      {
       "titre": "Raisonner en coût global",
       "contenu": "<p>Le <strong>coût d'investissement</strong> (ou coût de construction) ne représente qu'une partie de ce que coûtera réellement un bâtiment. Le <strong>coût global</strong> additionne, sur une durée d'étude donnée (souvent 30 à 50 ans) :</p>\n<ul>\n<li>le coût d'investissement (études, travaux, honoraires) ;</li>\n<li>les coûts d'exploitation (énergie, eau, abonnements) ;</li>\n<li>les coûts de maintenance et d'entretien (contrats, petites réparations) ;</li>\n<li>les coûts de remplacement des composants dont la durée de vie est inférieure à la durée d'étude (chaudière, menuiseries, revêtements) ;</li>\n<li>éventuellement les coûts de fin de vie (déconstruction).</li>\n</ul>\n<p>Une solution plus chère à l'achat peut se révéler plus économique sur la durée. Le <strong>temps de retour sur investissement</strong> donne une première idée : surcoût initial divisé par l'économie annuelle.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer deux solutions de chauffage pour une maison. Solution 1 : chaudière gaz, investissement 6 000 € HT, dépense annuelle 1 400 €. Solution 2 : pompe à chaleur air/eau, investissement 12 000 € HT, dépense annuelle 800 €.<br>1. Surcoût initial : 12 000 − 6 000 = 6 000 €.<br>2. Économie annuelle : 1 400 − 800 = 600 €.<br>3. Temps de retour simple : 6 000 / 600 = 10 ans.<br>4. Sur 20 ans (sans actualisation ni remplacement) : solution 1 = 6 000 + 20 × 1 400 = 34 000 € ; solution 2 = 12 000 + 20 × 800 = 28 000 €.<br>Conclusion : la PAC est plus avantageuse au-delà de 10 ans. Une étude plus fine tiendrait compte de l'évolution du prix des énergies, des aides financières et de l'entretien.</div>\n<p>Les <strong>aides financières</strong> à la rénovation (aides de l'État, certificats d'économies d'énergie, prêts à taux zéro, taux de TVA réduits) modifient fortement ce calcul. Leurs conditions changent souvent : on les cite comme principe et on vérifie les montants au moment de l'étude.</p>"
      },
      {
       "titre": "Bâti neuf et bâti existant : deux enjeux différents",
       "contenu": "<p>Le parc de bâtiments se renouvelle lentement : chaque année, les constructions neuves ne représentent qu'environ 1 % du parc existant. La majorité des logements qui existeront en 2050 sont donc déjà construits. D'où deux stratégies complémentaires :</p>\n<ul>\n<li><strong>Pour le neuf</strong> : construire des bâtiments très peu consommateurs, confortables en été, et dont l'empreinte carbone de construction est limitée. C'est l'objet de la réglementation environnementale des constructions neuves.</li>\n<li><strong>Pour l'existant</strong> : diagnostiquer les performances, puis rénover par étapes ou de façon globale (isolation des parois, remplacement des menuiseries, traitement de la ventilation, changement du système de chauffage). C'est l'objet du diagnostic de performance énergétique, de l'audit énergétique et des exigences sur les éléments remplacés.</li>\n</ul>\n<p>Les niveaux de performance sont souvent désignés par des termes qu'il faut savoir distinguer : un <strong>bâtiment basse consommation</strong> (BBC) consomme peu d'énergie ; un <strong>bâtiment passif</strong> a des besoins de chauffage si faibles qu'il se passe presque de système de chauffage classique ; un <strong>bâtiment à énergie positive</strong> (BEPOS) produit sur l'année plus d'énergie qu'il n'en consomme, grâce à une production locale renouvelable.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> rénover « par petits bouts » sans vision d'ensemble peut créer des désordres. Remplacer des fenêtres anciennes très perméables par des menuiseries étanches sans traiter la ventilation conduit à de la condensation et des moisissures. Toute intervention sur l'enveloppe doit être pensée avec la ventilation.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sobriété (réduire les besoins), efficacité (bien utiliser l'énergie) et énergies renouvelables (produire proprement) : l'ordre de cette démarche est toujours le même. On commence par réduire les besoins grâce à l'enveloppe, puis on choisit des équipements performants, enfin on produit.</div>"
      }
     ],
     "points_cles": [
      "Le bâtiment est le premier consommateur d'énergie finale en France et un émetteur majeur de GES.",
      "L'énergie finale est mesurée au compteur ; l'énergie primaire inclut les pertes amont, via un coefficient de conversion.",
      "Les émissions de GES s'expriment en kg éq. CO2.",
      "L'analyse du cycle de vie couvre la production, la construction, l'exploitation et la fin de vie.",
      "Les FDES et PEP fournissent les données environnementales des produits et équipements.",
      "Le coût global intègre investissement, exploitation, maintenance, remplacements et fin de vie.",
      "La compacité réduit à la fois les déperditions et les quantités de matériaux.",
      "Démarche : sobriété, puis efficacité, puis énergies renouvelables."
     ],
     "lexique": [
      {
       "terme": "Énergie finale",
       "def": "Énergie livrée et facturée à l'utilisateur, mesurée par ses compteurs."
      },
      {
       "terme": "Énergie primaire",
       "def": "Énergie contenue dans les ressources naturelles avant toute transformation."
      },
      {
       "terme": "Gaz à effet de serre (GES)",
       "def": "Gaz qui retiennent la chaleur dans l'atmosphère (CO2, méthane, protoxyde d'azote, fluides frigorigènes)."
      },
      {
       "terme": "kg éq. CO2",
       "def": "Unité qui exprime l'effet de tous les GES en équivalent dioxyde de carbone."
      },
      {
       "terme": "ACV",
       "def": "Analyse du cycle de vie : évaluation des impacts environnementaux d'un produit ou d'un bâtiment de sa fabrication à sa fin de vie."
      },
      {
       "terme": "FDES",
       "def": "Fiche de déclaration environnementale et sanitaire d'un produit de construction."
      },
      {
       "terme": "COP",
       "def": "Coefficient de performance d'une pompe à chaleur : chaleur fournie divisée par électricité consommée."
      },
      {
       "terme": "Coût global",
       "def": "Somme des coûts d'un ouvrage sur une durée d'étude : investissement, exploitation, maintenance, remplacements, fin de vie."
      },
      {
       "terme": "Compacité",
       "def": "Rapport entre la surface de l'enveloppe et le volume (ou la surface) qu'elle enferme ; plus il est faible, plus le bâtiment est compact."
      },
      {
       "terme": "BEPOS",
       "def": "Bâtiment à énergie positive, qui produit sur l'année plus d'énergie qu'il n'en consomme."
      }
     ]
    },
    {
     "id": "bteb-thermique-bati",
     "titre": "Le fonctionnement thermique du bâti",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Identifier les modes de transfert de chaleur à travers une paroi",
      "Calculer la résistance thermique d'une paroi et son coefficient de transmission U",
      "Estimer les déperditions par les parois, par les ponts thermiques et par le renouvellement d'air",
      "Expliquer le rôle de l'inertie, des apports solaires et de l'étanchéité à l'air",
      "Repérer les risques de condensation et le rôle du pare-vapeur"
     ],
     "sections": [
      {
       "titre": "Les transferts de chaleur dans un bâtiment",
       "contenu": "<p>La chaleur se déplace toujours spontanément du milieu chaud vers le milieu froid. En hiver, elle s'échappe du logement vers l'extérieur ; en été, elle entre. Trois modes de transfert coexistent :</p>\n<ul>\n<li>la <strong>conduction</strong> : transfert à travers la matière, de proche en proche (la chaleur traverse un mur) ;</li>\n<li>la <strong>convection</strong> : transfert par un fluide en mouvement (l'air chaud monte le long d'un radiateur, l'air froid s'infiltre par un défaut d'étanchéité) ;</li>\n<li>le <strong>rayonnement</strong> : transfert par ondes électromagnétiques, sans support matériel (le soleil à travers une vitre, la sensation de froid près d'une paroi froide).</li>\n</ul>\n<p>Les <strong>déperditions</strong> d'un bâtiment sont les pertes de chaleur vers l'extérieur. Elles passent par les parois (murs, toiture, plancher bas, menuiseries), par les <strong>ponts thermiques</strong> (jonctions entre parois où l'isolation est interrompue) et par le <strong>renouvellement d'air</strong> (ventilation et infiltrations). Les <strong>apports</strong> sont les gains gratuits : soleil à travers les vitrages, chaleur dégagée par les occupants, l'éclairage et les appareils.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le besoin de chauffage d'un bâtiment est, en simplifiant, la différence entre ses déperditions et ses apports gratuits utilement récupérés. On agit donc sur les deux : réduire les déperditions (isolation, étanchéité) et valoriser les apports (orientation, vitrages, inertie).</div>"
      },
      {
       "titre": "Conductivité, résistance thermique et coefficient U",
       "contenu": "<p>La <strong>conductivité thermique</strong> λ (lambda) caractérise l'aptitude d'un matériau à conduire la chaleur. Elle s'exprime en W/(m·K). Plus λ est petit, plus le matériau est isolant. Un matériau est considéré comme isolant lorsque λ est inférieur à environ 0,065 W/(m·K).</p>\n<table><thead><tr><th>Matériau</th><th>λ indicatif en W/(m·K)</th></tr></thead><tbody>\n<tr><td>Béton armé</td><td>2,3</td></tr>\n<tr><td>Bloc béton creux (valeur équivalente)</td><td>0,9 à 1,1</td></tr>\n<tr><td>Brique terre cuite alvéolaire</td><td>0,10 à 0,15 (valeur équivalente)</td></tr>\n<tr><td>Bois résineux</td><td>0,13</td></tr>\n<tr><td>Plaque de plâtre</td><td>0,25</td></tr>\n<tr><td>Laine minérale</td><td>0,030 à 0,040</td></tr>\n<tr><td>Polystyrène expansé</td><td>0,030 à 0,038</td></tr>\n<tr><td>Polyuréthane</td><td>0,022 à 0,026</td></tr>\n<tr><td>Fibre de bois</td><td>0,036 à 0,045</td></tr>\n</tbody></table>\n<p>Ces valeurs sont indicatives : on utilise toujours la valeur certifiée du produit, indiquée sur sa fiche technique ou son certificat.</p>\n<p>La <strong>résistance thermique</strong> R d'une couche homogène vaut R = e / λ, avec e l'épaisseur en mètres. R s'exprime en m²·K/W. Plus R est grand, plus la couche freine le passage de la chaleur. Les résistances des couches successives s'additionnent. On ajoute les <strong>résistances superficielles</strong> intérieure R<sub>si</sub> et extérieure R<sub>se</sub>, qui représentent les échanges entre la paroi et l'air. Pour une paroi verticale avec flux horizontal, on prend couramment R<sub>si</sub> = 0,13 et R<sub>se</sub> = 0,04 m²·K/W.</p>\n<p>Le <strong>coefficient de transmission surfacique</strong> U est l'inverse de la résistance totale : U = 1 / R<sub>T</sub>, en W/(m²·K). Il indique le flux de chaleur qui traverse 1 m² de paroi pour 1 K d'écart de température. Plus U est faible, meilleure est la paroi.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul du U d'un mur. Composition de l'intérieur vers l'extérieur : plaque de plâtre 13 mm (λ = 0,25), laine minérale 120 mm (λ = 0,032), bloc béton creux 200 mm (R = 0,23 m²·K/W donné par le fabricant), enduit 15 mm négligé.<br>1. Plâtre : 0,013 / 0,25 = 0,05 m²·K/W.<br>2. Laine : 0,120 / 0,032 = 3,75 m²·K/W.<br>3. Bloc : 0,23 m²·K/W.<br>4. R<sub>T</sub> = 0,13 + 0,05 + 3,75 + 0,23 + 0,04 = 4,20 m²·K/W.<br>5. U = 1 / 4,20 ≈ 0,24 W/(m²·K).<br>On constate que l'isolant apporte à lui seul près de 90 % de la résistance totale.</div>"
      },
      {
       "titre": "Calculer les déperditions",
       "contenu": "<p>Le <strong>flux thermique</strong> Φ (phi) à travers une paroi, en watts, vaut Φ = U × A × ΔT, avec A la surface en m² et ΔT l'écart entre température intérieure et extérieure en K (un écart de 1 K est égal à un écart de 1 °C).</p>\n<p>Les <strong>ponts thermiques</strong> sont traités séparément. On distingue :</p>\n<ul>\n<li>les ponts thermiques <strong>linéiques</strong>, le long des liaisons (plancher intermédiaire/mur, refend/mur, tour des menuiseries), caractérisés par un coefficient ψ (psi) en W/(m·K) que l'on multiplie par la longueur de la liaison ;</li>\n<li>les ponts thermiques <strong>ponctuels</strong>, caractérisés par χ (khi) en W/K (fixation traversant l'isolant, par exemple).</li>\n</ul>\n<p>Les déperditions par <strong>renouvellement d'air</strong> se calculent avec Φ = 0,34 × q<sub>v</sub> × ΔT, où q<sub>v</sub> est le débit d'air renouvelé en m³/h et 0,34 Wh/(m³·K) la capacité thermique volumique de l'air.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déperditions d'une pièce à travers son mur extérieur et sa fenêtre, pour 20 °C intérieur et −5 °C extérieur (ΔT = 25 K).<br>1. Mur : surface brute 4,00 × 2,50 = 10,00 m² ; fenêtre 1,20 × 1,35 = 1,62 m² ; mur net 10,00 − 1,62 = 8,38 m². Avec U<sub>mur</sub> = 0,24 : Φ = 0,24 × 8,38 × 25 ≈ 50 W.<br>2. Fenêtre, U<sub>w</sub> = 1,3 W/(m²·K) : Φ = 1,3 × 1,62 × 25 ≈ 53 W.<br>3. Pont thermique plancher/mur, ψ = 0,5 W/(m·K) sur 4,00 m : Φ = 0,5 × 4,00 × 25 = 50 W.<br>4. Air renouvelé 30 m³/h : Φ = 0,34 × 30 × 25 = 255 W.<br>Total ≈ 408 W. Dans cette pièce bien isolée, la ventilation représente la plus grosse part des pertes, et le pont thermique pèse autant que tout le mur.</div>\n<p>Cet exemple montre qu'une fois les parois bien isolées, les gains se trouvent dans le traitement des ponts thermiques (isolation par l'extérieur, rupteurs) et dans la récupération de chaleur sur l'air extrait (ventilation double flux).</p>"
      },
      {
       "titre": "Étanchéité à l'air et renouvellement d'air",
       "contenu": "<p>Il ne faut pas confondre <strong>ventilation</strong> et <strong>infiltrations</strong>. La ventilation est un renouvellement d'air volontaire, maîtrisé, indispensable à la santé des occupants et à la durabilité du bâti (évacuation de l'humidité et des polluants). Les infiltrations sont des fuites d'air parasites à travers les défauts de l'enveloppe : jonctions menuiseries/maçonnerie, traversées de gaines, boîtiers électriques, trappes, coffres de volets roulants.</p>\n<p>L'<strong>étanchéité à l'air</strong> se mesure par un essai d'infiltrométrie (test de la porte soufflante) : un ventilateur met le bâtiment en dépression et l'on mesure le débit de fuite. Le résultat, appelé perméabilité à l'air, s'exprime notamment par l'indicateur Q<sub>4Pa-surf</sub>, en m³/(h·m²) de paroi déperditive, sous une différence de pression de 4 Pa. Pour les logements neufs, la réglementation impose un seuil et une mesure en fin de chantier.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la continuité de l'étanchéité à l'air se joue dans les détails : membrane raccordée avec un adhésif adapté, boîtiers électriques étanches, manchons autour des gaines, joints sous les seuils. Un électricien qui perce la membrane sans la reprendre peut ruiner le travail. Ces points doivent figurer dans le CCTP et être vérifiés avant fermeture des doublages.</div>\n<p>La <strong>ventilation mécanique contrôlée</strong> (VMC) organise un balayage de l'air : entrée d'air neuf dans les pièces principales (séjour, chambres), passage sous les portes, extraction dans les pièces de service (cuisine, salle de bains, WC). En <strong>simple flux</strong>, l'air entre par des bouches en menuiserie et sort par un caisson extracteur ; en <strong>double flux</strong>, l'air neuf est insufflé et préchauffé par l'air extrait dans un échangeur, ce qui récupère une grande partie de la chaleur.</p>"
      },
      {
       "titre": "Inertie, apports solaires et confort d'été",
       "contenu": "<p>L'<strong>inertie thermique</strong> est la capacité d'un bâtiment à stocker de la chaleur puis à la restituer lentement. Elle dépend de la masse des matériaux situés <em>à l'intérieur</em> de l'isolation : dalle béton, murs de refend maçonnés, chape. Une forte inertie amortit les variations de température : en hiver, elle stocke les apports solaires de la journée ; en été, elle retarde et atténue la surchauffe, surtout si l'on ventile la nuit pour décharger la chaleur accumulée.</p>\n<p>Le <strong>confort d'été</strong> est devenu un enjeu majeur avec la multiplication des vagues de chaleur. Les leviers de conception sont :</p>\n<ul>\n<li>les <strong>protections solaires</strong> extérieures : volets, brise-soleil, débords de toiture dimensionnés pour arrêter le soleil haut d'été tout en laissant passer le soleil bas d'hiver ;</li>\n<li>l'orientation et la surface des baies : les grandes baies à l'ouest sont les plus difficiles à protéger ;</li>\n<li>l'inertie et la <strong>ventilation nocturne</strong> (logement traversant, fenêtres ouvrables en sécurité) ;</li>\n<li>l'isolation de la toiture, qui reçoit le rayonnement le plus intense ;</li>\n<li>les teintes claires et la végétalisation des abords.</li>\n</ul>\n<p>Le <strong>facteur solaire</strong> d'un vitrage ou d'une baie (noté g ou S<sub>w</sub>) indique la part de l'énergie solaire incidente qui pénètre dans le local. Un facteur élevé est favorable en hiver au sud, défavorable en été sans protection.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les études thermiques réglementaires sont réalisées par un bureau d'études avec un logiciel agréé. Le technicien d'études leur fournit les données d'entrée (surfaces, compositions de parois, menuiseries, orientations) et exploite leurs résultats : épaisseurs d'isolant, performances minimales des menuiseries, système de ventilation, à reporter dans le CCTP et les quantitatifs.</div>"
      },
      {
       "titre": "Humidité, condensation et pare-vapeur",
       "contenu": "<p>L'air intérieur contient de la vapeur d'eau produite par les occupants (respiration, douches, cuisine). Cette vapeur migre à travers les parois de l'intérieur chaud vers l'extérieur froid. Si elle rencontre une zone dont la température est inférieure à son <strong>point de rosée</strong>, elle se condense : c'est la <strong>condensation</strong>, qui peut être superficielle (sur la face intérieure d'une paroi froide, typiquement au droit d'un pont thermique) ou interne (dans l'épaisseur de l'isolant).</p>\n<p>Pour l'éviter, on applique une règle simple : les couches doivent être de plus en plus ouvertes à la vapeur en allant de l'intérieur vers l'extérieur. Côté chaud, on place un <strong>pare-vapeur</strong> ou un <strong>frein-vapeur</strong> (membrane qui limite le passage de la vapeur) ; côté froid, des matériaux perméables à la vapeur (pare-pluie respirant en toiture, enduit ouvert à la diffusion). La résistance d'un matériau à la diffusion de vapeur est caractérisée par son épaisseur d'air équivalente S<sub>d</sub>, en mètres.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> placer une membrane étanche à la vapeur du côté froid de l'isolant (par exemple un film plastique sous la couverture sans lame d'air ventilée) piège l'humidité dans la paroi. Le bois et les isolants fibreux se dégradent alors en quelques saisons.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une paroi performante est à la fois isolée, étanche à l'air, protégée de la condensation et ventilée correctement. Ces quatre fonctions doivent être prévues dès la conception et décrites dans les pièces écrites.</div>"
      }
     ],
     "points_cles": [
      "La chaleur se transmet par conduction, convection et rayonnement.",
      "R = e / λ en m²·K/W ; les résistances des couches s'additionnent avec Rsi et Rse.",
      "U = 1 / RT en W/(m²·K) : plus U est faible, plus la paroi isole.",
      "Déperditions par paroi : Φ = U × A × ΔT ; par renouvellement d'air : Φ = 0,34 × qv × ΔT.",
      "Les ponts thermiques linéiques (ψ) et ponctuels (χ) peuvent peser autant qu'une paroi entière.",
      "L'étanchéité à l'air se vérifie par un test d'infiltrométrie ; ventilation et infiltrations sont deux choses distinctes.",
      "L'inertie intérieure, les protections solaires et la ventilation nocturne assurent le confort d'été.",
      "Pare-vapeur côté chaud, matériaux ouverts à la vapeur côté froid."
     ],
     "lexique": [
      {
       "terme": "Conductivité thermique λ",
       "def": "Aptitude d'un matériau à conduire la chaleur, en W/(m·K)."
      },
      {
       "terme": "Résistance thermique R",
       "def": "Aptitude d'une couche à freiner le flux de chaleur, en m²·K/W ; R = e / λ."
      },
      {
       "terme": "Coefficient U",
       "def": "Flux de chaleur traversant 1 m² de paroi pour 1 K d'écart de température, en W/(m²·K)."
      },
      {
       "terme": "Pont thermique",
       "def": "Zone de l'enveloppe où l'isolation est interrompue ou affaiblie, provoquant une déperdition localisée."
      },
      {
       "terme": "Déperditions",
       "def": "Pertes de chaleur d'un bâtiment vers l'extérieur."
      },
      {
       "terme": "Infiltrométrie",
       "def": "Essai de mesure de la perméabilité à l'air d'un bâtiment par mise en dépression."
      },
      {
       "terme": "Inertie thermique",
       "def": "Capacité d'un bâtiment à stocker la chaleur et à la restituer avec retard."
      },
      {
       "terme": "Facteur solaire",
       "def": "Part de l'énergie solaire incidente qui traverse une baie et pénètre dans le local."
      },
      {
       "terme": "Point de rosée",
       "def": "Température à laquelle la vapeur d'eau contenue dans l'air se condense."
      },
      {
       "terme": "Pare-vapeur",
       "def": "Membrane posée côté chaud de l'isolant pour limiter la migration de vapeur d'eau dans la paroi."
      },
      {
       "terme": "VMC double flux",
       "def": "Ventilation qui insuffle et extrait l'air mécaniquement en récupérant la chaleur de l'air extrait dans un échangeur."
      }
     ]
    },
    {
     "id": "bteb-reglementation-energetique",
     "titre": "Réglementation environnementale du neuf et performance de l'existant",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Citer les objectifs et les indicateurs de la réglementation environnementale des bâtiments neufs (RE2020)",
      "Interpréter un indicateur de besoin, de consommation, de carbone ou de confort d'été",
      "Expliquer le diagnostic de performance énergétique et ses étiquettes",
      "Distinguer les exigences applicables aux travaux sur l'existant",
      "Identifier les conséquences de ces règles sur la conception et la réalisation"
     ],
     "sections": [
      {
       "titre": "D'une réglementation thermique à une réglementation environnementale",
       "contenu": "<p>Depuis les années 1970, la France impose aux constructions neuves des performances thermiques minimales, renforcées à chaque nouvelle version (RT 2005, puis RT 2012). La <strong>RE2020</strong> (réglementation environnementale 2020) leur a succédé : elle s'applique aux logements dont le permis de construire est déposé depuis le 1er janvier 2022, puis, par étapes, aux bureaux, aux bâtiments d'enseignement et à d'autres bâtiments tertiaires.</p>\n<p>Le changement de nom n'est pas anodin. La RE2020 poursuit trois objectifs :</p>\n<ol>\n<li>continuer à améliorer la <strong>performance énergétique</strong> et à baisser les consommations ;</li>\n<li>diminuer l'<strong>impact carbone</strong> des bâtiments, en prenant en compte l'ensemble de leur cycle de vie, de la construction à la démolition ;</li>\n<li>garantir le <strong>confort en cas de forte chaleur</strong>.</li>\n</ol>\n<p>Elle est rédigée dans le code de la construction et de l'habitation, précisée par des décrets et arrêtés, et s'appuie sur un moteur de calcul officiel intégré aux logiciels des bureaux d'études. Les seuils évoluent dans le temps selon un calendrier connu à l'avance, pour laisser aux filières le temps de s'adapter.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la RE2020 ne prescrit pas de solution technique. Elle fixe des résultats à atteindre (des seuils maximaux d'indicateurs). Le concepteur reste libre de ses choix, à condition que le calcul démontre le respect de chaque seuil.</div>"
      },
      {
       "titre": "Les six indicateurs de la RE2020",
       "contenu": "<table><thead><tr><th>Indicateur</th><th>Ce qu'il mesure</th><th>Unité</th><th>Leviers principaux</th></tr></thead><tbody>\n<tr><td>Bbio</td><td>Besoin bioclimatique : besoins de chauffage, de refroidissement et d'éclairage, indépendamment des équipements</td><td>Points (sans unité)</td><td>Orientation, compacité, isolation, vitrages, inertie</td></tr>\n<tr><td>Cep</td><td>Consommation d'énergie primaire totale</td><td>kWh<sub>ep</sub>/(m².an)</td><td>Rendement des équipements, besoins réduits</td></tr>\n<tr><td>Cep,nr</td><td>Consommation d'énergie primaire non renouvelable</td><td>kWh<sub>ep</sub>/(m².an)</td><td>Recours aux énergies renouvelables</td></tr>\n<tr><td>Ic énergie</td><td>Impact carbone des consommations d'énergie sur 50 ans</td><td>kg éq. CO<sub>2</sub>/m²</td><td>Choix de l'énergie de chauffage et d'eau chaude</td></tr>\n<tr><td>Ic construction</td><td>Impact carbone des produits, équipements et du chantier</td><td>kg éq. CO<sub>2</sub>/m²</td><td>Matériaux biosourcés ou bas carbone, sobriété structurelle</td></tr>\n<tr><td>DH</td><td>Degrés-heures d'inconfort estival</td><td>°C·h</td><td>Protections solaires, inertie, ventilation nocturne</td></tr>\n</tbody></table>\n<p>Le <strong>Bbio</strong> est l'indicateur de la qualité de conception du bâti : on ne peut pas l'améliorer en changeant de chaudière, seulement en travaillant l'enveloppe et l'architecture. Le <strong>DH</strong> cumule, sur une année type, les écarts entre la température intérieure et une température de confort. Au-delà d'un seuil haut (1 250 °C·h pour les logements), le projet n'est pas conforme ; en dessous d'un seuil bas (350 °C·h), le confort est jugé satisfaisant ; entre les deux, le calcul tient compte d'une climatisation fictive qui pénalise la consommation.</p>\n<p>Pour l'<strong>Ic construction</strong>, le seuil maximal applicable aux maisons individuelles est descendu de 640 kg éq. CO<sub>2</sub>/m² (2022) à 530 (2025), puis doit passer à 415 (2028) et 300 (2031). Ce durcissement progressif pousse vers les structures bois, les bétons bas carbone et les isolants biosourcés.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les seuils exacts dépendent du type de bâtiment, de la zone climatique, de l'altitude, de la surface et de la date de dépôt du permis. On ne retient pas une valeur « par cœur » pour un projet : on lit les seuils (notés avec l'indice max, par exemple Bbio<sub>max</sub>) dans l'étude thermique et environnementale du projet.</div>"
      },
      {
       "titre": "Les justificatifs à fournir et la mesure de fin de chantier",
       "contenu": "<p>La conformité à la réglementation se démontre à deux moments :</p>\n<ul>\n<li><strong>Au dépôt du permis de construire</strong> : une attestation de prise en compte de la réglementation, établie par le maître d'ouvrage, est jointe au dossier. Elle s'appuie sur une première étude.</li>\n<li><strong>À l'achèvement des travaux</strong> : une attestation de respect de la réglementation est jointe à la déclaration attestant l'achèvement et la conformité des travaux. Elle est établie par un professionnel habilité (diagnostiqueur, contrôleur technique, architecte, organisme certificateur) et s'accompagne du résultat de la <strong>mesure de perméabilité à l'air</strong> et de la vérification des systèmes de ventilation.</li>\n</ul>\n<p>Pour les logements, la perméabilité à l'air maximale est de 0,6 m³/(h·m²) en maison individuelle et de 1,0 m³/(h·m²) en logement collectif (indicateur Q<sub>4Pa-surf</sub>). L'étude produit aussi un <strong>récapitulatif standardisé d'étude thermique et environnementale</strong> (RSET), document de synthèse qui reprend les données d'entrée et les résultats ; il est très utile au technicien pour vérifier que le CCTP est cohérent avec ce qui a été calculé.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le chef de chantier qui remplace un isolant par un autre « équivalent » sans le signaler peut rendre le bâtiment non conforme à l'étude. Toute variante sur un isolant, une menuiserie ou un équipement doit être soumise au bureau d'études thermiques pour vérifier qu'elle ne dégrade aucun indicateur.</div>"
      },
      {
       "titre": "Le diagnostic de performance énergétique",
       "contenu": "<p>Le <strong>diagnostic de performance énergétique</strong> (DPE) informe sur la performance d'un logement ou d'un bâtiment existant. Il est obligatoire lors de la vente ou de la location et valable dix ans (sous réserve des règles transitoires pour les anciens diagnostics). Depuis juillet 2021, il est <strong>opposable</strong> : l'acheteur ou le locataire peut se retourner contre le vendeur ou le bailleur en cas d'erreur.</p>\n<p>Le DPE classe le logement de <strong>A</strong> (très performant) à <strong>G</strong> (très énergivore) selon un <strong>double seuil</strong> : la consommation d'énergie primaire et les émissions de GES, exprimées par m² et par an. La classe retenue est la plus mauvaise des deux. Le DPE indique aussi une estimation des factures annuelles et des recommandations de travaux.</p>\n<p>La loi Climat et résilience (2021) a fait du DPE un outil de lutte contre les <strong>passoires thermiques</strong> : les logements les plus énergivores sont progressivement considérés comme non décents et ne peuvent plus être proposés à la location. Le calendrier fixé par la loi vise les logements classés G à partir de 2025, F à partir de 2028 et E à partir de 2034. Lors de la vente d'une maison ou d'un immeuble en monopropriété mal classé, un <strong>audit énergétique</strong> plus détaillé, proposant des scénarios de travaux, doit également être fourni.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la méthode de calcul du DPE (coefficients, seuils, cas des petites surfaces) a été ajustée plusieurs fois depuis 2021. Avant d'interpréter un DPE, on vérifie la date et la version de la méthode utilisée.</div>"
      },
      {
       "titre": "Les exigences pour les travaux sur l'existant",
       "contenu": "<p>Dans un bâtiment existant, on ne peut pas imposer d'atteindre les mêmes performances que dans le neuf. La réglementation thermique de l'existant fonctionne selon deux logiques :</p>\n<ul>\n<li>la réglementation <strong>élément par élément</strong> : lorsqu'on remplace ou installe un élément (isolant de toiture ou de mur, fenêtre, chaudière, VMC, éclairage), celui-ci doit présenter une performance minimale fixée par arrêté (par exemple une résistance thermique minimale pour un isolant ajouté, un U<sub>w</sub> maximal pour une fenêtre) ;</li>\n<li>la réglementation <strong>globale</strong> : pour les bâtiments importants faisant l'objet d'une rénovation lourde, un calcul de performance globale est exigé.</li>\n</ul>\n<p>Depuis la loi de transition énergétique, une obligation d'<strong>isolation embarquée</strong> s'applique aussi : lors d'un ravalement important ou d'une réfection de toiture, il faut en principe isoler en même temps, sauf impossibilité technique, juridique (secteur protégé) ou disproportion économique.</p>\n<p>Pour les bâtiments tertiaires d'au moins 1 000 m², le <strong>dispositif éco-énergie tertiaire</strong> impose une réduction progressive des consommations d'énergie finale : −40 % en 2030, −50 % en 2040 et −60 % en 2050 par rapport à une année de référence, ou l'atteinte d'une valeur absolue par type d'activité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la conformité d'un remplacement de fenêtres. Le CCTP d'une rénovation prévoit des fenêtres PVC double vitrage U<sub>w</sub> = 1,4 W/(m²·K). 1. Repérer la règle applicable (exigence élément par élément sur les fenêtres remplacées). 2. Lire dans l'arrêté en vigueur la valeur maximale de U<sub>w</sub> pour une fenêtre (de l'ordre de 1,3 W/(m²·K) dans la version actuelle). 3. Comparer : 1,4 &gt; 1,3, la prescription ne respecte pas l'exigence. 4. Corriger le CCTP (U<sub>w</sub> ≤ 1,3) et vérifier l'impact sur le prix. 5. Profiter de l'opération pour vérifier la présence d'entrées d'air, indispensables à la ventilation.</div>"
      },
      {
       "titre": "Conséquences sur la conception et le chantier",
       "contenu": "<p>Ces réglementations modifient le travail de tous les acteurs :</p>\n<table><thead><tr><th>Phase</th><th>Conséquences pour le technicien d'études</th></tr></thead><tbody>\n<tr><td>Esquisse et avant-projet</td><td>Optimiser l'orientation, la compacité, la proportion de vitrages ; choisir tôt le mode constructif car il pèse lourd dans l'Ic construction</td></tr>\n<tr><td>Projet et DCE</td><td>Reporter dans le CCTP les performances calculées (R des isolants, U<sub>w</sub>, facteurs solaires, rendement des équipements, perméabilité à l'air visée)</td></tr>\n<tr><td>Chiffrage</td><td>Intégrer les surcoûts : épaisseurs, rupteurs de ponts thermiques, membranes, adhésifs, test d'infiltrométrie</td></tr>\n<tr><td>Chantier</td><td>Organiser la continuité de l'étanchéité à l'air entre corps d'état ; contrôler les produits livrés par rapport aux fiches techniques</td></tr>\n<tr><td>Réception</td><td>Réaliser la mesure de perméabilité, rassembler les attestations et fiches produits dans le dossier des ouvrages exécutés</td></tr>\n</tbody></table>\n<p>Un projet est donc conçu en <strong>itérations</strong> : l'architecte propose, le bureau d'études calcule, l'économiste chiffre, et l'on ajuste jusqu'à trouver un équilibre entre performance, confort et budget.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour le neuf, on vise des résultats (indicateurs de la RE2020) ; pour l'existant, on respecte des performances minimales sur les éléments remplacés et l'on informe via le DPE. Dans les deux cas, les performances retenues doivent figurer noir sur blanc dans les pièces écrites du marché.</div>"
      }
     ],
     "points_cles": [
      "La RE2020 s'applique aux logements neufs dont le permis est déposé depuis le 1er janvier 2022, puis progressivement au tertiaire.",
      "Ses trois objectifs : sobriété énergétique, baisse de l'impact carbone, confort d'été.",
      "Six indicateurs : Bbio, Cep, Cep,nr, Ic énergie, Ic construction, DH, chacun limité par un seuil maximal.",
      "Le Bbio ne dépend que de la conception du bâti, pas des équipements.",
      "Le seuil d'Ic construction se durcit par étapes (2022, 2025, 2028, 2031).",
      "Le DPE classe les logements de A à G selon un double seuil énergie et GES ; il est opposable.",
      "Les logements les plus énergivores sont progressivement exclus de la location (G, puis F, puis E).",
      "Dans l'existant : exigences élément par élément, isolation embarquée, dispositif éco-énergie tertiaire."
     ],
     "lexique": [
      {
       "terme": "RE2020",
       "def": "Réglementation environnementale des bâtiments neufs, qui fixe des seuils de performance énergétique, carbone et de confort d'été."
      },
      {
       "terme": "Bbio",
       "def": "Indicateur du besoin bioclimatique du bâti (chauffage, refroidissement, éclairage), exprimé en points."
      },
      {
       "terme": "Cep",
       "def": "Consommation conventionnelle d'énergie primaire, en kWhep/(m².an)."
      },
      {
       "terme": "Ic construction",
       "def": "Impact carbone des produits, équipements et du chantier sur le cycle de vie, en kg éq. CO2/m²."
      },
      {
       "terme": "DH",
       "def": "Degrés-heures d'inconfort : indicateur de confort d'été de la RE2020."
      },
      {
       "terme": "RSET",
       "def": "Récapitulatif standardisé d'étude thermique et environnementale, synthèse des données et résultats d'un calcul réglementaire."
      },
      {
       "terme": "DPE",
       "def": "Diagnostic de performance énergétique d'un bâtiment existant, classé de A à G."
      },
      {
       "terme": "Passoire thermique",
       "def": "Logement très énergivore, classé F ou G au DPE."
      },
      {
       "terme": "Audit énergétique",
       "def": "Étude détaillée d'un logement proposant des scénarios de travaux de rénovation chiffrés."
      },
      {
       "terme": "Isolation embarquée",
       "def": "Obligation d'isoler lors de travaux importants de ravalement ou de toiture."
      }
     ]
    },
    {
     "id": "bteb-acteurs-marches",
     "titre": "Intervenants, contrats et marchés de travaux",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Situer le rôle et les responsabilités de chaque intervenant d'une opération de construction",
      "Distinguer marché public et marché privé, et les principales procédures de passation",
      "Identifier les modes de dévolution des travaux et les formes de prix",
      "Énumérer les pièces constitutives d'un marché et leur ordre de priorité",
      "Expliquer les garanties et assurances de la construction"
     ],
     "sections": [
      {
       "titre": "Les intervenants et leurs responsabilités",
       "contenu": "<p>Une opération de construction réunit des acteurs liés par des contrats. Leur rôle doit être parfaitement connu, car il détermine qui décide, qui conçoit, qui exécute et qui est responsable.</p>\n<table><thead><tr><th>Intervenant</th><th>Rôle</th></tr></thead><tbody>\n<tr><td><strong>Maître d'ouvrage</strong> (MOA)</td><td>Personne pour qui l'ouvrage est construit. Il définit le programme, fixe l'enveloppe financière, choisit les concepteurs et les entreprises, paie les travaux et réceptionne l'ouvrage.</td></tr>\n<tr><td>Assistant à maîtrise d'ouvrage (AMO)</td><td>Conseille le maître d'ouvrage non spécialiste (programmation, montage, suivi).</td></tr>\n<tr><td><strong>Maître d'œuvre</strong> (MOE)</td><td>Conçoit le projet et dirige l'exécution des travaux pour le compte du maître d'ouvrage. Souvent une équipe : architecte mandataire, bureaux d'études techniques (structure, fluides, thermique), économiste de la construction.</td></tr>\n<tr><td>Contrôleur technique</td><td>Donne un avis sur la solidité des ouvrages et la sécurité des personnes ; obligatoire pour certains bâtiments (établissements recevant du public importants, immeubles de grande hauteur…).</td></tr>\n<tr><td>Coordonnateur SPS</td><td>Coordonnateur en matière de sécurité et de protection de la santé : organise la prévention des risques liés à la coactivité des entreprises.</td></tr>\n<tr><td>Entreprises</td><td>Exécutent les travaux conformément au marché. Une entreprise peut confier une partie de ses travaux à un <strong>sous-traitant</strong>, qui doit être accepté par le maître d'ouvrage.</td></tr>\n<tr><td>OPC</td><td>Mission d'ordonnancement, de pilotage et de coordination : planifie et coordonne les entreprises.</td></tr>\n</tbody></table>\n<p>Les relations de sous-traitance sont encadrées par la loi du 31 décembre 1975 : l'entrepreneur principal doit faire accepter chaque sous-traitant et agréer ses conditions de paiement par le maître d'ouvrage. Dans les marchés publics, le sous-traitant accepté peut être payé directement.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le maître d'ouvrage décide et paie, le maître d'œuvre conçoit et dirige, l'entreprise exécute. Le technicien d'études peut travailler dans chacun de ces trois « camps » : chez un maître d'ouvrage (bailleur social, collectivité), chez un maître d'œuvre (agence d'architecture, bureau d'études, économiste) ou dans une entreprise (bureau d'études de prix, méthodes).</div>"
      },
      {
       "titre": "Marchés publics et marchés privés",
       "contenu": "<p>Un <strong>marché de travaux</strong> est un contrat par lequel une entreprise s'engage à réaliser un ouvrage moyennant un prix. On distingue :</p>\n<ul>\n<li>les <strong>marchés publics</strong>, passés par l'État, les collectivités territoriales, les établissements publics, les bailleurs sociaux publics… Ils sont régis par le <strong>code de la commande publique</strong> (en vigueur depuis le 1er avril 2019), qui impose la liberté d'accès, l'égalité de traitement des candidats et la transparence des procédures. Les conditions d'exécution sont souvent fixées par référence au <strong>cahier des clauses administratives générales</strong> applicable aux travaux (CCAG-Travaux) ;</li>\n<li>les <strong>marchés privés</strong>, passés par des particuliers, des entreprises, des promoteurs. La négociation y est libre. Les parties se réfèrent souvent à la norme NF P 03-001, qui sert de cahier des clauses administratives générales pour les travaux de bâtiment privés.</li>\n</ul>\n<p>Pour les marchés publics, la procédure dépend du montant estimé, comparé à des <strong>seuils</strong> révisés régulièrement :</p>\n<ul>\n<li>en dessous d'un premier seuil, un marché peut être passé sans publicité ni mise en concurrence préalables, en veillant au bon usage des deniers publics ;</li>\n<li>au-dessus, une <strong>procédure adaptée</strong> (MAPA), dont l'acheteur fixe les modalités de publicité et de mise en concurrence ;</li>\n<li>au-dessus des seuils européens, une <strong>procédure formalisée</strong> (appel d'offres ouvert ou restreint, procédure avec négociation, dialogue compétitif).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les montants des seuils changent (les seuils européens sont révisés tous les deux ans). Ne jamais les citer de mémoire dans un document professionnel : on consulte le code de la commande publique à jour.</div>"
      },
      {
       "titre": "Modes de dévolution et formes de prix",
       "contenu": "<p>Le maître d'ouvrage choisit comment il découpe les travaux entre entreprises : c'est le <strong>mode de dévolution</strong>.</p>\n<table><thead><tr><th>Mode</th><th>Principe</th><th>Avantages / inconvénients</th></tr></thead><tbody>\n<tr><td>Lots séparés</td><td>Un marché par corps d'état (gros œuvre, charpente, menuiseries…)</td><td>Accès des petites entreprises, prix optimisés ; coordination lourde. C'est la règle de principe en marché public (allotissement).</td></tr>\n<tr><td>Entreprise générale</td><td>Une seule entreprise titulaire de tous les lots, qui sous-traite une partie</td><td>Interlocuteur unique ; coût de coordination intégré dans le prix</td></tr>\n<tr><td>Groupement d'entreprises</td><td>Plusieurs entreprises répondent ensemble, avec un mandataire</td><td>Complémentarité des compétences ; solidarité éventuelle entre membres</td></tr>\n<tr><td>Conception-réalisation</td><td>Une même équipe conçoit et réalise</td><td>Délais réduits ; réservé à des cas particuliers en marché public</td></tr>\n</tbody></table>\n<p>Le <strong>prix</strong> peut prendre deux formes principales :</p>\n<ul>\n<li>le <strong>prix global et forfaitaire</strong> : l'entreprise s'engage sur un montant total pour l'ouvrage décrit, quelles que soient les quantités réellement mises en œuvre. Elle a donc intérêt à vérifier les quantités du dossier. Le document de prix est la <strong>décomposition du prix global et forfaitaire</strong> (DPGF) ;</li>\n<li>le <strong>prix unitaire</strong> : le marché fixe un prix par unité d'ouvrage (m³, m², ml, U) ; le montant payé dépend des quantités réellement exécutées et constatées. Les documents sont le <strong>bordereau des prix unitaires</strong> (BPU) et le <strong>détail quantitatif estimatif</strong> (DQE).</li>\n</ul>\n<p>Le prix peut être <strong>ferme</strong> (éventuellement actualisable si le démarrage tarde) ou <strong>révisable</strong> selon une formule liée à des index du bâtiment.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> forfait ou prix unitaire ? Un lot terrassement est prévu pour 850 m³ de déblais à 18 € HT/m³. On en exécute finalement 920 m³. 1. En prix unitaire : on paie 920 × 18 = 16 560 € HT. 2. En forfait : on paie le montant forfaitaire 850 × 18 = 15 300 € HT, sauf modification du programme demandée par le maître d'ouvrage. L'écart de 1 260 € reste à la charge de l'entreprise si l'erreur vient de son appréciation des quantités. Conclusion : en forfait, la vérification des quantités avant remise d'offre est vitale pour l'entreprise.</div>"
      },
      {
       "titre": "Les pièces constitutives d'un marché",
       "contenu": "<p>Un marché de travaux est formé de plusieurs documents. En cas de contradiction entre eux, un <strong>ordre de priorité</strong> fixé par le marché permet de savoir lequel s'applique. Un ordre usuel est le suivant :</p>\n<ol>\n<li>l'<strong>acte d'engagement</strong> (AE), signé par l'entreprise et le maître d'ouvrage : identité des parties, objet, montant, délai ;</li>\n<li>le <strong>cahier des clauses administratives particulières</strong> (CCAP) : délais, pénalités de retard, modalités de paiement, retenue de garantie, révision des prix, assurances ;</li>\n<li>le <strong>cahier des clauses techniques particulières</strong> (CCTP) : description des ouvrages, matériaux, performances, modes d'exécution ;</li>\n<li>les pièces graphiques (plans) ;</li>\n<li>la décomposition du prix (DPGF) ou le bordereau et le détail estimatif (BPU, DQE) ;</li>\n<li>les documents généraux : CCAG, normes et documents techniques unifiés (NF DTU).</li>\n</ol>\n<p>Le <strong>dossier de consultation des entreprises</strong> (DCE) regroupe ces pièces non signées, ainsi que le <strong>règlement de la consultation</strong> (RC), qui précise la date limite de remise des offres, les pièces à fournir et les critères de jugement (prix, valeur technique, délai, performances environnementales…).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'ordre de priorité varie d'un marché à l'autre ; dans certains marchés privés, les plans priment sur le CCTP, dans d'autres l'inverse. Il faut toujours lire la clause du CCAP qui le fixe avant de trancher une contradiction.</div>"
      },
      {
       "titre": "Garanties et assurances",
       "contenu": "<p>Le code civil organise des <strong>garanties légales</strong> qui démarrent à la <strong>réception</strong> des travaux, acte par lequel le maître d'ouvrage accepte l'ouvrage, avec ou sans réserves :</p>\n<table><thead><tr><th>Garantie</th><th>Durée</th><th>Ce qu'elle couvre</th></tr></thead><tbody>\n<tr><td>Garantie de parfait achèvement</td><td>1 an</td><td>Tous les désordres signalés à la réception (réserves) ou pendant l'année qui suit</td></tr>\n<tr><td>Garantie biennale de bon fonctionnement</td><td>2 ans minimum</td><td>Éléments d'équipement dissociables de l'ouvrage (robinetterie, volets, appareils)</td></tr>\n<tr><td>Garantie décennale</td><td>10 ans</td><td>Dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination</td></tr>\n</tbody></table>\n<p>Pour que ces garanties soient effectives, la loi impose deux assurances :</p>\n<ul>\n<li>l'<strong>assurance de responsabilité décennale</strong>, obligatoire pour tout constructeur (entreprise, architecte, bureau d'études) ; l'attestation doit être fournie avant le début des travaux ;</li>\n<li>l'<strong>assurance dommages-ouvrage</strong>, souscrite par le maître d'ouvrage avant l'ouverture du chantier ; elle préfinance rapidement les réparations des désordres de nature décennale, sans attendre de déterminer les responsabilités.</li>\n</ul>\n<p>Enfin, la <strong>retenue de garantie</strong>, plafonnée à 5 % du montant des travaux, est prélevée sur les paiements pour garantir la levée des réserves. Elle peut être remplacée par une caution bancaire et est libérée à l'issue du délai de garantie de parfait achèvement, sauf opposition motivée.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de signer un marché, le service administratif vérifie que l'attestation d'assurance décennale couvre bien les activités réellement exécutées (par exemple « charpente et structure bois »). Une activité non déclarée à l'assureur n'est pas couverte, même si l'entreprise est assurée pour d'autres travaux.</div>"
      },
      {
       "titre": "La programmation d'une opération",
       "contenu": "<p>Avant toute conception, le maître d'ouvrage formalise ses besoins dans un <strong>programme</strong>. C'est un document essentiel : il sert de base au concours ou à la consultation de maîtrise d'œuvre, et c'est par rapport à lui que l'on juge si le projet répond à la demande. Un programme comprend :</p>\n<ul>\n<li>le contexte et les objectifs de l'opération ;</li>\n<li>les données du site (terrain, accès, réseaux, contraintes d'urbanisme) ;</li>\n<li>le <strong>tableau des surfaces</strong> par local ou groupe de locaux, avec les liaisons fonctionnelles entre eux ;</li>\n<li>les exigences techniques (performances énergétiques, acoustiques, accessibilité, sécurité) et environnementales ;</li>\n<li>l'<strong>enveloppe financière prévisionnelle</strong> et le calendrier.</li>\n</ul>\n<p>En marché public, la maîtrise d'œuvre est découpée en <strong>éléments de mission</strong> codifiés : esquisse (ESQ), avant-projet sommaire (APS), avant-projet définitif (APD), études de projet (PRO), assistance pour la passation des contrats de travaux (ACT), visa des études d'exécution (VISA), direction de l'exécution des travaux (DET), assistance aux opérations de réception (AOR). À l'issue de l'APD, le maître d'œuvre s'engage sur un <strong>coût prévisionnel</strong> des travaux.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> programme, enveloppe financière et coût prévisionnel sont les trois repères économiques d'une opération. Le rôle de l'économiste est de vérifier, à chaque phase, que le projet reste compatible avec l'enveloppe.</div>"
      }
     ],
     "points_cles": [
      "Le maître d'ouvrage décide et paie, le maître d'œuvre conçoit et dirige, les entreprises exécutent.",
      "Le sous-traitant doit être accepté par le maître d'ouvrage (loi de 1975).",
      "Marchés publics : code de la commande publique, procédures selon des seuils révisés ; marchés privés : liberté contractuelle, souvent NF P 03-001.",
      "Dévolution en lots séparés, entreprise générale, groupement ou conception-réalisation.",
      "Prix global et forfaitaire (DPGF) ou prix unitaires (BPU + DQE) ; prix ferme ou révisable.",
      "Pièces du marché : AE, CCAP, CCTP, plans, décomposition de prix, documents généraux, selon un ordre de priorité.",
      "Garanties : parfait achèvement 1 an, biennale 2 ans, décennale 10 ans, à compter de la réception.",
      "Assurances obligatoires : décennale (constructeurs) et dommages-ouvrage (maître d'ouvrage) ; retenue de garantie au plus 5 %."
     ],
     "lexique": [
      {
       "terme": "Maître d'ouvrage",
       "def": "Personne physique ou morale pour le compte de laquelle l'ouvrage est réalisé."
      },
      {
       "terme": "Maître d'œuvre",
       "def": "Concepteur chargé par le maître d'ouvrage de concevoir le projet et de diriger les travaux."
      },
      {
       "terme": "Allotissement",
       "def": "Découpage des travaux en lots attribués séparément, principe des marchés publics."
      },
      {
       "terme": "DPGF",
       "def": "Décomposition du prix global et forfaitaire : détail par ouvrage d'un prix forfaitaire."
      },
      {
       "terme": "BPU",
       "def": "Bordereau des prix unitaires : liste des prix par unité d'ouvrage d'un marché à prix unitaires."
      },
      {
       "terme": "DQE",
       "def": "Détail quantitatif estimatif : quantités estimées multipliées par les prix du BPU."
      },
      {
       "terme": "CCAP",
       "def": "Cahier des clauses administratives particulières : règles administratives et financières du marché."
      },
      {
       "terme": "DCE",
       "def": "Dossier de consultation des entreprises, remis aux candidats pour établir leur offre."
      },
      {
       "terme": "Réception",
       "def": "Acte par lequel le maître d'ouvrage accepte l'ouvrage, avec ou sans réserves ; point de départ des garanties."
      },
      {
       "terme": "Dommages-ouvrage",
       "def": "Assurance souscrite par le maître d'ouvrage qui préfinance la réparation des désordres de nature décennale."
      },
      {
       "terme": "Retenue de garantie",
       "def": "Somme d'au plus 5 % prélevée sur les paiements pour garantir la levée des réserves."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Étude des constructions",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bteb-accessibilite-confort-securite",
     "titre": "Accessibilité, confort et sécurité des personnes",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Appliquer les principales règles dimensionnelles d'accessibilité aux personnes handicapées",
      "Définir les grandeurs du confort acoustique, visuel et hygrothermique",
      "Identifier le classement d'un bâtiment vis-à-vis du risque incendie",
      "Lire les classements de réaction et de résistance au feu",
      "Repérer les dispositifs de protection contre les chutes"
     ],
     "sections": [
      {
       "titre": "L'accessibilité : un principe général",
       "contenu": "<p>La loi du 11 février 2005 pose le principe de l'<strong>accessibilité</strong> du cadre bâti à toutes les personnes handicapées, quel que soit leur handicap : moteur, visuel, auditif, cognitif ou psychique. Les règles s'appliquent aux <strong>établissements recevant du public</strong> (ERP), aux installations ouvertes au public, aux bâtiments d'habitation collectifs et aux maisons individuelles construites pour être louées ou vendues. Elles sont détaillées dans le code de la construction et de l'habitation et dans des arrêtés propres à chaque catégorie de bâtiment (neuf ou existant).</p>\n<p>Concevoir accessible ne se limite pas au fauteuil roulant. Il s'agit aussi de contrastes visuels pour les malvoyants, de bandes d'éveil de vigilance en haut des escaliers, de mains courantes, de signalétique lisible, de dispositifs de commande à bonne hauteur, de boucles magnétiques pour les malentendants.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'accessibilité se pense dès l'esquisse. Une erreur d'altimétrie (marche à l'entrée, seuil trop haut) ou un local trop étroit est très coûteux à corriger une fois le gros œuvre réalisé.</div>"
      },
      {
       "titre": "Les principales règles dimensionnelles",
       "contenu": "<p>Les valeurs suivantes sont les repères les plus utilisés pour un ERP neuf. Elles doivent être vérifiées dans l'arrêté applicable au type de bâtiment étudié.</p>\n<table><thead><tr><th>Élément</th><th>Exigence usuelle</th></tr></thead><tbody>\n<tr><td>Largeur d'un cheminement extérieur</td><td>1,40 m minimum, rétrécissement ponctuel possible à 1,20 m</td></tr>\n<tr><td>Pente d'un cheminement</td><td>≤ 5 % ; tolérée jusqu'à 8 % sur 2 m et 10 % sur 0,50 m</td></tr>\n<tr><td>Palier de repos</td><td>En haut et en bas de chaque plan incliné, et tous les 10 m si la pente dépasse 4 % ; dimensions 1,20 × 1,40 m</td></tr>\n<tr><td>Ressaut</td><td>≤ 2 cm (4 cm s'il est chanfreiné à 1 pour 3)</td></tr>\n<tr><td>Porte d'un local recevant moins de 100 personnes</td><td>Largeur nominale 0,90 m, soit un passage utile d'au moins 0,83 m</td></tr>\n<tr><td>Espace de manœuvre avec possibilité de demi-tour</td><td>Cercle de 1,50 m de diamètre</td></tr>\n<tr><td>Espace d'usage devant un équipement</td><td>Rectangle de 0,80 × 1,30 m</td></tr>\n<tr><td>Commandes, interrupteurs</td><td>Entre 0,90 m et 1,30 m du sol</td></tr>\n<tr><td>Place de stationnement adaptée</td><td>Largeur 3,30 m (place de 2,50 m + bande latérale de 0,80 m)</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier une rampe d'accès. Une entrée d'ERP est surélevée de 0,30 m par rapport au trottoir. 1. Avec une pente de 5 %, la longueur nécessaire est 0,30 / 0,05 = 6,00 m. 2. La pente dépasse 4 %, il faut un palier de repos au moins tous les 10 m : ici la rampe fait 6 m, un palier en haut et un en bas suffisent. 3. Avec une pente de 8 %, la longueur serait 0,30 / 0,08 = 3,75 m, mais la pente de 8 % n'est tolérée que sur 2 m : cette solution est refusée. 4. Conclusion : rampe de 6,00 m à 5 % avec paliers de 1,20 × 1,40 m en haut et en bas, et garde-corps ou chasse-roue si une chute est possible.</div>"
      },
      {
       "titre": "Le confort acoustique",
       "contenu": "<p>Le bruit se mesure en <strong>décibels</strong> (dB), selon une échelle logarithmique : deux sources de 60 dB ne font pas 120 dB mais 63 dB. Une pondération A (dB(A)) adapte la mesure à la sensibilité de l'oreille. On distingue :</p>\n<ul>\n<li>les <strong>bruits aériens</strong>, transmis par l'air (voix, télévision, circulation) ;</li>\n<li>les <strong>bruits d'impact</strong> ou de choc, transmis par la structure (pas, chute d'objets) ;</li>\n<li>les <strong>bruits d'équipements</strong> (ascenseur, VMC, chaudière, chasse d'eau).</li>\n</ul>\n<p>La réglementation acoustique des logements neufs fixe des performances minimales : un isolement aux bruits aériens entre logements (indicateur D<sub>nT,A</sub>, de l'ordre de 53 dB entre pièces principales de deux logements), un niveau maximal de bruit de choc perçu (L'<sub>nT,w</sub>, de l'ordre de 58 dB), des niveaux maximaux pour les équipements, et un isolement de façade adapté au classement sonore des voies voisines.</p>\n<p>Deux principes physiques guident les solutions :</p>\n<ul>\n<li>la <strong>loi de masse</strong> : plus une paroi simple est lourde, mieux elle isole des bruits aériens (un voile béton de 18 à 20 cm est efficace) ;</li>\n<li>le principe <strong>masse-ressort-masse</strong> : deux parois légères séparées par un isolant fibreux (cloison à double parement de plaques de plâtre) isolent mieux qu'une seule paroi de même masse, à condition d'être désolidarisées.</li>\n</ul>\n<p>Contre les bruits de choc, on interpose une sous-couche résiliente sous la chape (chape flottante) ou sous le revêtement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un trou de quelques centimètres carrés (boîtier électrique dos à dos, gaine non calfeutrée, bas de cloison non jointoyé) suffit à ruiner l'isolement d'une paroi performante. Les points singuliers doivent être décrits dans le CCTP.</div>"
      },
      {
       "titre": "Le confort visuel et hygrothermique",
       "contenu": "<p>Le <strong>confort visuel</strong> repose sur une lumière naturelle suffisante, sans éblouissement, et un éclairage artificiel adapté à l'activité. L'<strong>éclairement</strong> se mesure en lux (lx) : quelques centaines de lux suffisent pour une pièce de vie, un poste de travail de bureau en demande davantage. La surface vitrée, sa position (une baie haute éclaire plus loin dans la pièce) et la profondeur des locaux déterminent l'accès à la lumière du jour.</p>\n<p>Le <strong>confort hygrothermique</strong> dépend de plusieurs paramètres combinés :</p>\n<ul>\n<li>la température de l'air ;</li>\n<li>la température des parois (une paroi froide donne une sensation de froid même si l'air est à 20 °C) ;</li>\n<li>l'humidité relative de l'air (zone de confort usuelle entre 40 et 60 %) ;</li>\n<li>la vitesse de l'air (courants d'air) ;</li>\n<li>l'activité et l'habillement des occupants.</li>\n</ul>\n<p>La <strong>température opérative</strong>, moyenne entre température de l'air et température moyenne des parois, rend mieux compte du ressenti. Elle explique pourquoi une bonne isolation améliore le confort même à température d'air égale.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les plaintes d'occupants concernent souvent des sensations : « froid près des fenêtres », « courant d'air », « bruit de la VMC », « surchauffe sous les toits ». Le technicien relie chaque sensation à une cause physique (paroi froide, infiltration, vitesse d'air excessive, manque de protection solaire) avant de proposer une solution.</div>"
      },
      {
       "titre": "La sécurité incendie",
       "contenu": "<p>La réglementation incendie vise à permettre l'évacuation des occupants, à limiter la propagation du feu et à faciliter l'intervention des secours. Elle diffère selon la nature du bâtiment :</p>\n<ul>\n<li>les <strong>bâtiments d'habitation</strong> sont classés en <strong>familles</strong> (1re à 4e) selon leur hauteur et leur organisation ; au-delà d'une certaine hauteur, on parle d'immeuble de grande hauteur ;</li>\n<li>les <strong>ERP</strong> sont classés par <strong>type</strong>, désigné par une lettre selon l'activité (par exemple J structures d'accueil pour personnes âgées ou handicapées, L salles de spectacles et de réunion, M magasins, N restaurants, R établissements d'enseignement, U établissements de soins, W bureaux), et par <strong>catégorie</strong> selon l'effectif admissible : de la 1re catégorie (plus de 1 500 personnes) à la 5e catégorie (petits établissements sous un seuil fixé par type) ;</li>\n<li>les lieux de travail relèvent du code du travail.</li>\n</ul>\n<p>Les produits et les éléments de construction sont caractérisés par deux classements européens :</p>\n<table><thead><tr><th>Classement</th><th>Ce qu'il exprime</th><th>Notation</th></tr></thead><tbody>\n<tr><td>Réaction au feu</td><td>Contribution d'un matériau au développement du feu</td><td>Euroclasses A1, A2, B, C, D, E, F (A1 = incombustible), complétées par s1 à s3 (fumées) et d0 à d2 (gouttelettes enflammées)</td></tr>\n<tr><td>Résistance au feu</td><td>Durée pendant laquelle un élément conserve ses fonctions</td><td>R (capacité portante), E (étanchéité aux flammes et gaz chauds), I (isolation thermique), suivis d'une durée en minutes : REI 60, EI 30…</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne pas confondre les deux classements. Une porte « EI 30 » est un élément qui coupe le feu 30 minutes ; un isolant « A2-s1, d0 » est un matériau très peu combustible. Le CCTP doit indiquer le bon classement au bon endroit.</div>"
      },
      {
       "titre": "La protection contre les chutes",
       "contenu": "<p>Les chutes de hauteur sont un risque majeur, pour les occupants comme pour les intervenants d'entretien. Le bâtiment doit comporter :</p>\n<ul>\n<li>des <strong>garde-corps</strong> partout où existe un risque de chute (balcons, terrasses, fenêtres basses, mezzanines, trémies). La norme NF P01-012 fixe leurs dimensions : hauteur de protection usuelle d'environ 1 m, prise depuis la zone de stationnement possible, et dispositions évitant l'escalade par un enfant (pas d'éléments horizontaux formant échelle, espacements limités) ;</li>\n<li>des <strong>escaliers</strong> conformes : marches régulières, mains courantes, nez de marche contrastés et antidérapants dans les ERP ;</li>\n<li>des dispositifs pour l'entretien des toitures : lignes de vie, points d'ancrage, accès sécurisés, crochets de service. Ces dispositifs sont décrits dans le dossier d'intervention ultérieure sur l'ouvrage.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> repérer sur un plan les besoins en garde-corps. 1. Lister toutes les différences de niveau supérieures à environ 1 m (balcons, terrasses, escaliers, rampes, fenêtres dont l'allège est basse). 2. Pour chaque fenêtre, comparer la hauteur d'allège à la hauteur de protection exigée : une allège de 0,60 m impose une barre d'appui ou un garde-corps. 3. Vérifier le côté vide des escaliers. 4. Reporter chaque garde-corps sur le plan et dans le CCTP (matériau, hauteur, remplissage). 5. Les compter en mètres linéaires pour le quantitatif.</div>\n<p>Dans un ERP, la sécurité des personnes comprend aussi l'éclairage de sécurité, le désenfumage, les issues de secours et le balisage, qui relèvent de prescriptions détaillées propres à chaque type d'établissement.</p>"
      }
     ],
     "points_cles": [
      "L'accessibilité concerne tous les handicaps et s'applique aux ERP et aux logements neufs collectifs ou destinés à la vente ou la location.",
      "Repères : cheminement 1,40 m, pente ≤ 5 %, ressaut ≤ 2 cm, porte de 0,90 m, cercle de rotation de 1,50 m.",
      "L'acoustique distingue bruits aériens, bruits de choc et bruits d'équipements.",
      "Loi de masse et principe masse-ressort-masse guident l'isolation acoustique.",
      "Le confort thermique dépend aussi de la température des parois et de l'humidité.",
      "ERP classés par type (lettre) et par catégorie (1 à 5 selon l'effectif).",
      "Réaction au feu : Euroclasses A1 à F ; résistance au feu : R, E, I avec une durée en minutes.",
      "Garde-corps selon la norme NF P01-012, partout où existe un risque de chute."
     ],
     "lexique": [
      {
       "terme": "ERP",
       "def": "Établissement recevant du public."
      },
      {
       "terme": "Ressaut",
       "def": "Petite différence de niveau brusque sur un cheminement."
      },
      {
       "terme": "Passage utile",
       "def": "Largeur réellement libre d'une porte ouverte, entre butées ou vantail ouvert."
      },
      {
       "terme": "Décibel (dB)",
       "def": "Unité logarithmique de mesure des niveaux sonores."
      },
      {
       "terme": "Loi de masse",
       "def": "Principe selon lequel une paroi simple isole d'autant mieux des bruits aériens qu'elle est lourde."
      },
      {
       "terme": "Chape flottante",
       "def": "Chape désolidarisée de la structure par une sous-couche résiliente, contre les bruits de choc."
      },
      {
       "terme": "Lux",
       "def": "Unité d'éclairement lumineux."
      },
      {
       "terme": "Température opérative",
       "def": "Moyenne de la température de l'air et de la température des parois, proche du ressenti."
      },
      {
       "terme": "Euroclasse",
       "def": "Classement européen de réaction au feu des produits, de A1 à F."
      },
      {
       "terme": "REI",
       "def": "Critères de résistance au feu : capacité portante, étanchéité, isolation thermique."
      },
      {
       "terme": "Garde-corps",
       "def": "Ouvrage de protection empêchant la chute des personnes dans le vide."
      }
     ]
    },
    {
     "id": "bteb-sol-fondations-structures",
     "titre": "Adaptation au sol, fondations et structures porteuses",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Exploiter les conclusions d'une étude géotechnique",
      "Choisir un type de fondation adapté au sol et aux charges",
      "Distinguer les systèmes porteurs : murs porteurs, ossature poteaux-poutres, ossature bois, ossature métallique",
      "Identifier les différents types de planchers et leur mise en œuvre",
      "Relier un choix structurel à ses conséquences sur le coût, le délai et l'impact carbone"
     ],
     "sections": [
      {
       "titre": "Connaître le sol : l'étude géotechnique",
       "contenu": "<p>Le sol est le premier « matériau » de la construction. Sa nature, sa portance et la présence d'eau conditionnent le choix des fondations. Les études géotechniques sont organisées par la norme NF P94-500 en <strong>missions</strong> successives :</p>\n<table><thead><tr><th>Mission</th><th>Moment</th><th>Contenu</th></tr></thead><tbody>\n<tr><td>G1</td><td>Étude préalable, avant l'esquisse</td><td>Identifier les risques géotechniques majeurs du site, premières hypothèses</td></tr>\n<tr><td>G2</td><td>Conception (avant-projet, projet)</td><td>Sondages et essais, définition des fondations et des ouvrages géotechniques, hypothèses de calcul</td></tr>\n<tr><td>G3</td><td>Exécution (entreprise)</td><td>Études et suivi géotechniques d'exécution</td></tr>\n<tr><td>G4</td><td>Exécution (maître d'ouvrage)</td><td>Supervision de la G3</td></tr>\n<tr><td>G5</td><td>Diagnostic</td><td>Étude d'un élément géotechnique spécifique (sinistre, existant)</td></tr>\n</tbody></table>\n<p>Le rapport géotechnique fournit la <strong>coupe des terrains</strong> rencontrés, le niveau de l'eau, la <strong>contrainte de calcul</strong> admissible pour des fondations superficielles (souvent exprimée en MPa ou en kPa), la profondeur d'ancrage minimale et les recommandations (drainage, terrassements, dallage).</p>\n<p>Dans les zones exposées au <strong>retrait-gonflement des argiles</strong>, les sols changent de volume selon leur teneur en eau et fissurent les maisons fondées trop superficiellement. Depuis la loi ELAN, une étude géotechnique préalable est obligatoire à la vente d'un terrain constructible situé en zone d'exposition moyenne ou forte, et le constructeur d'une maison doit suivre les recommandations d'une étude de conception ou appliquer des dispositions constructives forfaitaires (fondations plus profondes, chaînages renforcés, éloignement des arbres, gestion des eaux pluviales).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> fonder un bâtiment sans étude G2 est une source majeure de sinistres décennaux. Une économie de quelques milliers d'euros sur l'étude peut coûter des dizaines de milliers d'euros en reprises en sous-œuvre.</div>"
      },
      {
       "titre": "Les fondations",
       "contenu": "<p>Les <strong>fondations</strong> transmettent les charges du bâtiment au sol. Leur choix dépend de la profondeur du bon sol et de l'intensité des charges.</p>\n<table><thead><tr><th>Famille</th><th>Types</th><th>Domaine d'emploi</th></tr></thead><tbody>\n<tr><td>Superficielles</td><td>Semelles filantes sous murs, semelles isolées sous poteaux, radier général</td><td>Bon sol à faible profondeur ; le radier répartit les charges sur toute l'emprise quand le sol est médiocre et homogène</td></tr>\n<tr><td>Semi-profondes</td><td>Puits, massifs</td><td>Bon sol à quelques mètres</td></tr>\n<tr><td>Profondes</td><td>Pieux forés, battus, vissés, micropieux</td><td>Bon sol profond, fortes charges ; les pieux sont reliés par des longrines</td></tr>\n</tbody></table>\n<p>La mise en œuvre des fondations superficielles relève du NF DTU 13.11, celle des fondations profondes du NF DTU 13.2. Les points de vigilance sont la <strong>mise hors gel</strong> (profondeur d'ancrage suffisante, variable selon la région et l'altitude), le béton de propreté sous les semelles, l'enrobage des armatures et la continuité des chaînages.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> prédimensionner une semelle filante. Un mur transmet une charge de 80 kN par mètre linéaire (valeur déjà pondérée). Le rapport géotechnique donne une contrainte de calcul de 0,20 MPa, soit 200 kN/m².<br>1. Largeur nécessaire : B = 80 / 200 = 0,40 m.<br>2. On ajoute le poids propre de la semelle (environ 25 kN/m³ × 0,40 × 0,30 = 3 kN/m) : B = 83 / 200 ≈ 0,42 m.<br>3. On retient une largeur commerciale de 0,50 m, avec une hauteur au moins égale au débord augmenté de quelques centimètres (semelle rigide), par exemple 0,30 m.<br>Ce prédimensionnement ne remplace pas la note de calcul du bureau d'études structure.</div>"
      },
      {
       "titre": "Les systèmes porteurs verticaux",
       "contenu": "<p>La <strong>structure porteuse</strong> (ou ossature) reprend les charges et les descend jusqu'aux fondations. On distingue plusieurs systèmes :</p>\n<ul>\n<li><strong>Murs porteurs en maçonnerie</strong> (blocs béton, briques, pierre) : solution courante en maison individuelle ; les murs sont rigidifiés par des <strong>chaînages</strong> horizontaux et verticaux en béton armé (NF DTU 20.1) ;</li>\n<li><strong>Voiles en béton armé</strong> coulés en place ou préfabriqués : logements collectifs, sous-sols, cages d'escalier et d'ascenseur ; bonne performance acoustique et au feu (NF DTU 21 pour l'exécution) ;</li>\n<li><strong>Ossature poteaux-poutres</strong> en béton, en acier ou en bois : les façades ne sont plus porteuses, ce qui libère les plans et les ouvertures (bâtiments tertiaires, commerciaux, industriels) ;</li>\n<li><strong>Ossature bois</strong> : montants et traverses rapprochés, contreventés par des panneaux (NF DTU 31.2 pour les maisons) ; légère, rapide, faible impact carbone ;</li>\n<li><strong>Bois massif</strong> : panneaux de bois lamellé-croisé (CLT) formant murs et planchers, utilisés jusqu'en moyenne hauteur.</li>\n</ul>\n<p>Toute structure doit aussi être <strong>contreventée</strong>, c'est-à-dire stable sous les efforts horizontaux (vent, séisme) : voiles, palées de stabilité en croix de Saint-André, panneaux, noyau de béton. Dans les zones sismiques, des règles parasismiques s'ajoutent (Eurocode 8 ou règles simplifiées pour les maisons).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un plan de structure, les murs porteurs, voiles et poteaux sont généralement figurés par un remplissage ou une hachure particulière, les poutres en pointillés avec leur section (par exemple « P 20 × 40 »), et les planchers avec un symbole indiquant leur sens de portée. Ces repères permettent de vérifier qu'aucune démolition prévue n'atteint un élément porteur.</div>"
      },
      {
       "titre": "Les planchers",
       "contenu": "<p>Un <strong>plancher</strong> sépare deux niveaux, reprend les charges d'exploitation et les transmet aux porteurs verticaux. Il participe aussi au contreventement (effet de diaphragme), à l'isolation acoustique et à la sécurité incendie.</p>\n<table><thead><tr><th>Type</th><th>Description</th><th>Portées usuelles</th></tr></thead><tbody>\n<tr><td>Poutrelles et entrevous</td><td>Poutrelles précontraintes ou treillis posées entre appuis, entrevous (hourdis) en béton, polystyrène ou bois, dalle de compression armée d'un treillis soudé</td><td>Jusqu'à 6 à 7 m environ</td></tr>\n<tr><td>Dalle pleine coulée en place</td><td>Dalle béton armé de 16 à 25 cm, coffrée et étayée</td><td>4 à 7 m, plus avec des poutres</td></tr>\n<tr><td>Prédalles</td><td>Plaques préfabriquées servant de coffrage perdu et contenant les armatures inférieures, complétées par un béton coulé en place</td><td>Comparable à la dalle pleine, chantier plus rapide</td></tr>\n<tr><td>Dalles alvéolées</td><td>Éléments précontraints préfabriqués de grande longueur</td><td>Grandes portées (tertiaire, parkings)</td></tr>\n<tr><td>Plancher bois</td><td>Solives et panneaux, ou panneaux CLT</td><td>3 à 5 m en solivage courant</td></tr>\n</tbody></table>\n<p>Le plancher bas sur terre-plein peut être un <strong>dallage</strong> (posé sur le sol compacté, NF DTU 13.3) ou un plancher porté sur <strong>vide sanitaire</strong> (espace ventilé entre le sol et le plancher, qui protège de l'humidité et permet le passage des réseaux).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les trémies (escalier, gaines) réalisées après coup dans un plancher à poutrelles ne doivent jamais couper une poutrelle sans chevêtre prévu par le bureau d'études. Les réservations doivent être positionnées avant le coulage.</div>"
      },
      {
       "titre": "Le béton armé, matériau de référence",
       "contenu": "<p>Le <strong>béton</strong> résiste bien à la compression mais très mal à la traction. Le <strong>béton armé</strong> associe le béton à des armatures en acier, placées là où apparaissent les tractions (en partie basse d'une poutre sur deux appuis, par exemple). Quelques notions sont indispensables pour lire un dossier :</p>\n<ul>\n<li>la <strong>classe de résistance</strong> du béton, notée par exemple C25/30 : 25 MPa de résistance caractéristique en compression sur cylindre, 30 MPa sur cube ;</li>\n<li>la <strong>classe d'exposition</strong> (XC, XF, XD, XS…), qui décrit l'agressivité de l'environnement (carbonatation, gel, sels) et conditionne la composition du béton et l'enrobage ;</li>\n<li>l'<strong>enrobage</strong> : épaisseur de béton qui protège les aciers de la corrosion ;</li>\n<li>les aciers à haute adhérence, désignés par leur diamètre en mm (HA 8, HA 10, HA 12…), et les <strong>treillis soudés</strong> en panneaux.</li>\n</ul>\n<p>Le béton est aujourd'hui au cœur de l'enjeu carbone, car la fabrication du ciment émet beaucoup de CO<sub>2</sub>. Les bétons dits bas carbone utilisent des ciments à teneur réduite en clinker ; la sobriété structurelle (épaisseurs justes, portées raisonnables) reste le premier levier.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le choix d'un système structurel engage tout le projet : coût (le gros œuvre représente souvent une part importante du coût total), délai (préfabrication et filière sèche raccourcissent le chantier), acoustique, sécurité incendie et impact carbone.</div>"
      },
      {
       "titre": "Comparer des solutions constructives",
       "contenu": "<p>À l'avant-projet, le technicien est souvent amené à comparer deux ou trois systèmes pour un même bâtiment. On utilise une grille multicritère.</p>\n<table><thead><tr><th>Critère</th><th>Maçonnerie + plancher béton</th><th>Ossature bois + plancher bois</th></tr></thead><tbody>\n<tr><td>Délai de gros œuvre</td><td>Plus long (séchage, étaiement)</td><td>Plus court (préfabrication en atelier)</td></tr>\n<tr><td>Inertie thermique</td><td>Forte</td><td>Faible, à compenser (chape, cloisons lourdes)</td></tr>\n<tr><td>Acoustique entre logements</td><td>Bonne par la masse</td><td>Exige des complexes désolidarisés</td></tr>\n<tr><td>Impact carbone de construction</td><td>Plus élevé</td><td>Plus faible</td></tr>\n<tr><td>Filière locale et main-d'œuvre</td><td>Très répandue</td><td>Entreprises spécialisées</td></tr>\n<tr><td>Sensibilité à l'eau</td><td>Faible</td><td>Forte : protection du chantier et détails soignés</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conduire une comparaison. 1. Fixer les critères avec le maître d'ouvrage (coût, délai, carbone, confort). 2. Pondérer chaque critère (par exemple coût 40 %, délai 20 %, carbone 25 %, confort 15 %). 3. Noter chaque solution de 1 à 5 sur chaque critère, en justifiant la note. 4. Calculer la note pondérée de chaque solution. 5. Présenter le résultat avec ses limites : une note ne remplace pas l'analyse des risques propres à chaque solution.</div>\n<p>On peut aussi combiner les systèmes : rez-de-chaussée en béton et étages en bois, structure béton et façades à ossature bois, plancher mixte bois-béton.</p>"
      }
     ],
     "points_cles": [
      "Les missions géotechniques G1 à G5 de la norme NF P94-500 accompagnent le projet de l'esquisse à l'exécution.",
      "Le rapport G2 donne la contrainte de calcul du sol et la profondeur d'ancrage des fondations.",
      "Fondations superficielles (semelles, radier), semi-profondes (puits) ou profondes (pieux).",
      "Largeur d'une semelle filante ≈ charge linéique / contrainte de calcul du sol.",
      "Systèmes porteurs : murs maçonnés chaînés, voiles béton, poteaux-poutres, ossature bois, bois massif.",
      "Toute structure doit être contreventée contre le vent et le séisme.",
      "Planchers : poutrelles-entrevous, dalle pleine, prédalles, dalles alvéolées, bois.",
      "Le béton armé se décrit par sa classe de résistance, sa classe d'exposition et son enrobage."
     ],
     "lexique": [
      {
       "terme": "Mission G2",
       "def": "Étude géotechnique de conception qui définit les fondations et les hypothèses géotechniques du projet."
      },
      {
       "terme": "Contrainte de calcul",
       "def": "Pression maximale que l'on peut appliquer au sol par une fondation, donnée par le géotechnicien."
      },
      {
       "terme": "Semelle filante",
       "def": "Fondation superficielle continue sous un mur."
      },
      {
       "terme": "Radier",
       "def": "Dalle de fondation couvrant toute l'emprise du bâtiment."
      },
      {
       "terme": "Longrine",
       "def": "Poutre de fondation reliant des pieux ou des massifs et portant les murs."
      },
      {
       "terme": "Chaînage",
       "def": "Élément en béton armé ceinturant une maçonnerie horizontalement ou verticalement."
      },
      {
       "terme": "Contreventement",
       "def": "Ensemble des dispositifs assurant la stabilité d'une construction sous les efforts horizontaux."
      },
      {
       "terme": "Prédalle",
       "def": "Plaque préfabriquée en béton armé servant de coffrage perdu à une dalle."
      },
      {
       "terme": "Vide sanitaire",
       "def": "Espace ventilé entre le sol et le plancher bas d'un bâtiment."
      },
      {
       "terme": "Enrobage",
       "def": "Épaisseur de béton recouvrant les armatures et les protégeant de la corrosion."
      },
      {
       "terme": "CLT",
       "def": "Bois lamellé-croisé : panneaux massifs formés de couches de planches croisées et collées."
      }
     ]
    },
    {
     "id": "bteb-enveloppe",
     "titre": "L'enveloppe : façades, menuiseries et toitures",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire les fonctions de l'enveloppe d'un bâtiment",
      "Comparer les procédés d'isolation des murs : par l'intérieur, par l'extérieur, répartie",
      "Caractériser une menuiserie extérieure par ses performances",
      "Distinguer les toitures inclinées et les toitures-terrasses et leurs composants",
      "Identifier les documents techniques de référence de chaque ouvrage"
     ],
     "sections": [
      {
       "titre": "Les fonctions de l'enveloppe",
       "contenu": "<p>L'<strong>enveloppe</strong> est l'ensemble des parois qui séparent l'intérieur du bâtiment de l'extérieur ou de locaux non chauffés : murs de façade, menuiseries, toiture, plancher bas. Elle remplit simultanément plusieurs fonctions :</p>\n<ul>\n<li><strong>étanchéité à l'eau</strong> : arrêter la pluie, y compris battante, et évacuer les eaux ;</li>\n<li><strong>isolation thermique</strong> et <strong>étanchéité à l'air</strong> ;</li>\n<li><strong>isolation acoustique</strong> vis-à-vis des bruits extérieurs ;</li>\n<li><strong>gestion de la vapeur d'eau</strong>, pour éviter la condensation ;</li>\n<li><strong>apport de lumière</strong> et de vues, <strong>protection solaire</strong> ;</li>\n<li><strong>sécurité</strong> (effraction, chute, incendie) et <strong>esthétique</strong> (aspect, insertion dans le site).</li>\n</ul>\n<p>Chaque ouvrage de l'enveloppe est décrit par des règles de l'art : principalement les <strong>NF DTU</strong> (documents techniques unifiés, normes qui fixent les conditions d'exécution des techniques courantes) et, pour les procédés non traditionnels, des <strong>avis techniques</strong> ou documents techniques d'application délivrés après évaluation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un ouvrage « traditionnel » relève d'un NF DTU ; un procédé « non traditionnel » doit bénéficier d'un avis technique (ou d'une évaluation équivalente) en cours de validité pour être couramment assuré. Le CCTP doit mentionner l'un ou l'autre.</div>"
      },
      {
       "titre": "Isoler les murs : trois procédés",
       "contenu": "<table><thead><tr><th>Procédé</th><th>Principe</th><th>Points forts</th><th>Points faibles</th></tr></thead><tbody>\n<tr><td>Isolation thermique par l'intérieur (ITI)</td><td>Doublage collé ou sur ossature métallique avec isolant et plaque de plâtre, côté intérieur du mur</td><td>Coût modéré, ne modifie pas la façade</td><td>Ponts thermiques aux planchers et refends, perte de surface habitable, inertie isolée de l'intérieur</td></tr>\n<tr><td>Isolation thermique par l'extérieur (ITE)</td><td>Isolant fixé sur la face extérieure, protégé par un enduit mince ou un bardage ventilé</td><td>Traite la plupart des ponts thermiques, conserve l'inertie, travaux en site occupé</td><td>Coût plus élevé, modifie l'aspect, contraintes d'urbanisme, traitement des tableaux et des débords</td></tr>\n<tr><td>Isolation répartie (ITR)</td><td>Le matériau du mur est lui-même isolant : brique alvéolaire épaisse, béton cellulaire, blocs isolants</td><td>Un seul matériau, mur respirant</td><td>Performance limitée par l'épaisseur, ponts thermiques aux planchers à traiter</td></tr>\n</tbody></table>\n<p>En maison individuelle neuve, la solution courante reste le mur en blocs avec doublage intérieur. En logement collectif et en rénovation, l'ITE se développe : sous <strong>enduit</strong> (système d'isolation thermique extérieure à enduit, sur isolant collé ou chevillé) ou sous <strong>bardage</strong> (isolant entre ossature, lame d'air ventilée, parement bois, fibres-ciment, métal, terre cuite).</p>\n<p>L'enduit d'un mur maçonné non isolé par l'extérieur est réalisé selon le NF DTU 26.1. Il assure l'imperméabilité à la pluie tout en laissant migrer la vapeur d'eau.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en isolation par l'extérieur, la sécurité incendie impose des dispositions particulières (classement de réaction au feu de l'isolant, recoupements au droit des planchers selon les bâtiments). On ne remplace jamais un isolant prévu par un autre sans vérifier ces exigences.</div>"
      },
      {
       "titre": "Les menuiseries extérieures",
       "contenu": "<p>Les <strong>menuiseries extérieures</strong> (fenêtres, portes-fenêtres, portes d'entrée, baies coulissantes) sont des points faibles thermiques et acoustiques de l'enveloppe. Elles sont caractérisées par :</p>\n<table><thead><tr><th>Caractéristique</th><th>Notation</th><th>Signification</th></tr></thead><tbody>\n<tr><td>Coefficient de transmission de la fenêtre</td><td>U<sub>w</sub> en W/(m²·K)</td><td>Performance thermique de l'ensemble vitrage + menuiserie (w pour window)</td></tr>\n<tr><td>Coefficient du vitrage seul</td><td>U<sub>g</sub></td><td>Performance du vitrage (g pour glass)</td></tr>\n<tr><td>Facteur solaire</td><td>S<sub>w</sub> ou g</td><td>Part de l'énergie solaire transmise</td></tr>\n<tr><td>Transmission lumineuse</td><td>TL<sub>w</sub></td><td>Part de la lumière transmise</td></tr>\n<tr><td>Classement AEV</td><td>A*, E*, V*</td><td>Perméabilité à l'air, étanchéité à l'eau, résistance au vent</td></tr>\n<tr><td>Affaiblissement acoustique</td><td>R<sub>A,tr</sub> en dB</td><td>Isolement vis-à-vis du bruit routier</td></tr>\n</tbody></table>\n<p>Les matériaux de menuiserie sont le PVC, l'aluminium à rupture de pont thermique, le bois et le bois-aluminium. Le double vitrage à isolation renforcée (couche peu émissive, gaz argon) est la norme ; le triple vitrage améliore U<sub>g</sub> mais réduit les apports solaires et alourdit les ouvrants.</p>\n<p>La pose est encadrée par le NF DTU 36.5. On distingue la pose en <strong>applique</strong> intérieure (fenêtre fixée contre le doublage, cas courant avec ITI), en <strong>tunnel</strong> (dans l'épaisseur du mur), en <strong>feuillure</strong> et en <strong>rénovation</strong> (sur dormant existant conservé). Le choix doit assurer la continuité entre l'isolant du mur et la menuiserie.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire une désignation de menuiserie. « Fenêtre PVC 2 vantaux OF, 125 × 135 (H), U<sub>w</sub> ≤ 1,3, S<sub>w</sub> ≥ 0,40, A*3 E*7B V*A2, pose en applique, entrée d'air 30 m³/h ». 1. OF : ouvrant à la française. 2. Dimensions : largeur 1,25 m, hauteur 1,35 m (la convention largeur × hauteur doit être vérifiée dans le document). 3. Performances thermiques et solaires exigées. 4. Classement AEV à vérifier par rapport à l'exposition au vent du site. 5. Mode de pose. 6. Entrée d'air intégrée, cohérente avec le système de ventilation.</div>"
      },
      {
       "titre": "Les toitures inclinées",
       "contenu": "<p>Une <strong>toiture inclinée</strong> comprend une <strong>charpente</strong>, une <strong>couverture</strong> et des ouvrages d'évacuation des eaux.</p>\n<ul>\n<li>La <strong>charpente traditionnelle</strong> se compose de fermes, pannes (faîtière, intermédiaires, sablières) et chevrons ; elle permet d'aménager les combles. La <strong>charpente industrielle</strong> en fermettes (petites fermes assemblées par connecteurs métalliques, posées tous les 60 cm environ) est économique mais encombre les combles.</li>\n<li>La <strong>couverture</strong> assure l'étanchéité : tuiles terre cuite ou béton, ardoises naturelles ou fibres-ciment, bacs acier, zinc. Chaque matériau a une <strong>pente minimale</strong> qui dépend de la zone climatique, de l'exposition et de la longueur du rampant ; ces valeurs sont données dans le NF DTU de la série 40 correspondant au matériau et dans la documentation du fabricant.</li>\n<li>Un <strong>écran de sous-toiture</strong> sous les liteaux protège de la neige poudreuse et des infiltrations ; il doit être perméable à la vapeur d'eau (HPV) si l'isolant est posé directement dessous.</li>\n<li>Les eaux pluviales sont recueillies par des <strong>gouttières</strong> (ou chéneaux) et évacuées par des <strong>descentes</strong>.</li>\n</ul>\n<p>La pente d'un toit s'exprime en pourcentage ou en degrés. Une pente de 45° correspond à 100 % ; une pente de 30 % correspond à environ 16,7°.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour le quantitatif de couverture, on calcule la surface de rampant (projection horizontale divisée par le cosinus de l'angle de pente), on mesure faîtages, arêtiers, noues, rives et égouts en mètres linéaires, et l'on compte les accessoires (châssis de toit, sorties de ventilation, crochets de sécurité).</div>"
      },
      {
       "titre": "Les toitures-terrasses",
       "contenu": "<p>Une <strong>toiture-terrasse</strong> a une pente faible (en général de 0 à 5 %). Elle comprend, du support vers l'extérieur :</p>\n<ol>\n<li>l'<strong>élément porteur</strong> (dalle béton, bac acier, panneaux bois) ;</li>\n<li>le <strong>pare-vapeur</strong> ;</li>\n<li>l'<strong>isolant</strong> thermique, adapté aux charges et à l'usage ;</li>\n<li>le <strong>revêtement d'étanchéité</strong> (membranes bitumineuses, synthétiques) ;</li>\n<li>éventuellement une <strong>protection</strong> : gravillons, dalles sur plots, végétalisation.</li>\n</ol>\n<p>La mise en œuvre relève principalement du NF DTU 43.1 (sur élément porteur en maçonnerie) et d'autres DTU de la série 43 selon le support. On distingue les terrasses <strong>inaccessibles</strong>, <strong>techniques</strong> (équipements), <strong>accessibles aux piétons</strong>, <strong>végétalisées</strong> ou <strong>accessibles aux véhicules</strong>. Les <strong>relevés d'étanchéité</strong> remontent sur les acrotères et émergences sur une hauteur minimale réglementaire, et les eaux sont évacuées par des <strong>naissances</strong> complétées par des trop-pleins.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'oubli d'un trop-plein ou un relevé trop bas sont des causes fréquentes d'infiltrations. Sur les plans, chaque naissance doit avoir son trop-plein, et la hauteur des acrotères doit permettre les relevés.</div>"
      },
      {
       "titre": "Le plancher bas et les points singuliers",
       "contenu": "<p>Le <strong>plancher bas</strong> est souvent oublié alors qu'il peut représenter une part non négligeable des déperditions. Selon le cas, l'isolant est placé sous la dalle (sous-face de vide sanitaire, sous dallage), dans un plancher à entrevous isolants, ou sur la dalle sous une chape. Le traitement du pont thermique en pied de mur (jonction plancher bas, mur, fondation) est un point clé.</p>\n<p>Les <strong>points singuliers</strong> de l'enveloppe concentrent les désordres :</p>\n<ul>\n<li>appuis de fenêtres, seuils et tableaux ;</li>\n<li>jonctions toiture-façade et acrotères ;</li>\n<li>traversées de réseaux (ventilation, plomberie, électricité) ;</li>\n<li>balcons en porte-à-faux, qui créent un pont thermique important s'ils ne sont pas désolidarisés par un rupteur ;</li>\n<li>jonctions entre deux procédés (ITE et menuiserie, bardage et soubassement).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un détail d'enveloppe. 1. Repérer chaque couche et sa fonction (porteur, isolant, étanchéité à l'air, pare-pluie, parement). 2. Suivre au crayon la ligne de l'isolant : elle doit être continue. 3. Suivre la ligne d'étanchéité à l'air : elle doit être continue aussi, généralement côté intérieur. 4. Suivre le chemin de l'eau de pluie : elle doit toujours être renvoyée vers l'extérieur. 5. Noter chaque rupture et proposer une correction.</div>"
      }
     ],
     "points_cles": [
      "L'enveloppe assure étanchéité à l'eau et à l'air, isolation thermique et acoustique, gestion de la vapeur, lumière et sécurité.",
      "Ouvrages traditionnels : NF DTU ; procédés non traditionnels : avis technique.",
      "Trois procédés d'isolation des murs : ITI, ITE (sous enduit ou bardage), isolation répartie.",
      "Une fenêtre se caractérise par Uw, Sw, TLw, son classement AEV et son affaiblissement acoustique.",
      "La pose des menuiseries suit le NF DTU 36.5 : applique, tunnel, feuillure, rénovation.",
      "Toiture inclinée : charpente, écran de sous-toiture, couverture à pente minimale selon le DTU du matériau.",
      "Toiture-terrasse : porteur, pare-vapeur, isolant, étanchéité, protection ; relevés et trop-pleins.",
      "Les points singuliers (appuis, acrotères, balcons, traversées) concentrent les désordres."
     ],
     "lexique": [
      {
       "terme": "NF DTU",
       "def": "Norme fixant les règles d'exécution d'une technique courante de construction."
      },
      {
       "terme": "Avis technique",
       "def": "Évaluation de l'aptitude à l'emploi d'un procédé non traditionnel."
      },
      {
       "terme": "ITE",
       "def": "Isolation thermique par l'extérieur."
      },
      {
       "terme": "Bardage",
       "def": "Parement de façade fixé sur une ossature, avec lame d'air ventilée."
      },
      {
       "terme": "Uw",
       "def": "Coefficient de transmission thermique d'une fenêtre complète."
      },
      {
       "terme": "Classement AEV",
       "def": "Classement d'une menuiserie en perméabilité à l'air, étanchéité à l'eau et résistance au vent."
      },
      {
       "terme": "Fermette",
       "def": "Petite ferme industrielle assemblée par connecteurs, posée à entraxe réduit."
      },
      {
       "terme": "Écran de sous-toiture",
       "def": "Membrane posée sous la couverture pour protéger des infiltrations accidentelles."
      },
      {
       "terme": "Acrotère",
       "def": "Rebord en périphérie d'une toiture-terrasse, recevant le relevé d'étanchéité."
      },
      {
       "terme": "Relevé d'étanchéité",
       "def": "Remontée verticale du revêtement d'étanchéité sur un acrotère ou une émergence."
      },
      {
       "terme": "Rupteur de pont thermique",
       "def": "Élément isolant et porteur interrompant la continuité du béton entre un balcon ou un plancher et la façade."
      }
     ]
    },
    {
     "id": "bteb-amenagement-equipements",
     "titre": "Aménagements intérieurs, équipements techniques et finitions",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire les ouvrages d'aménagement intérieur : cloisons, doublages, plafonds, chapes",
      "Identifier les principaux équipements de chauffage, d'eau chaude et de ventilation",
      "Repérer les réseaux de plomberie, d'évacuation et d'électricité sur un dossier",
      "Choisir un revêtement de finition adapté au local",
      "Organiser l'enchaînement des corps d'état du second œuvre"
     ],
     "sections": [
      {
       "titre": "Cloisons, doublages et plafonds",
       "contenu": "<p>Le <strong>second œuvre</strong> regroupe les travaux réalisés une fois le bâtiment « hors d'eau, hors d'air » (gros œuvre, charpente, couverture et menuiseries extérieures terminés). Il commence par la distribution intérieure.</p>\n<ul>\n<li>Les <strong>cloisons</strong> séparent les pièces sans porter. La solution dominante est la cloison en <strong>plaques de plâtre sur ossature métallique</strong> (NF DTU 25.41) : rails et montants en acier galvanisé, une ou deux plaques par face, isolant fibreux dans le vide. On la désigne par son épaisseur totale et sa composition, par exemple « cloison 72/48 » : 72 mm d'épaisseur, ossature de 48 mm, une plaque de 12,5 mm par face. D'autres solutions existent : carreaux de plâtre, briques plâtrières, blocs béton.</li>\n<li>Les <strong>doublages</strong> habillent la face intérieure des murs de façade et portent l'isolation intérieure : complexes isolant + plaque collés, ou ossature métallique indépendante avec isolant.</li>\n<li>Les <strong>plafonds</strong> peuvent être en plaques de plâtre sur ossature suspendue (masquant les réseaux), en dalles démontables (tertiaire) ou simplement enduits sous dalle.</li>\n</ul>\n<p>Les plaques de plâtre existent en plusieurs types : standard, hydrofugée (locaux humides, souvent de couleur verte), à résistance au feu renforcée, à haute dureté, acoustique. Le CCTP précise le type selon le local.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans une salle d'eau, la plaque hydrofuge ne suffit pas : sous la douche, il faut un <strong>système de protection à l'eau sous carrelage</strong> (SPEC), conforme aux règles de mise en œuvre, sinon l'humidité finit par traverser les joints.</div>"
      },
      {
       "titre": "Sols : chapes et revêtements",
       "contenu": "<p>Entre la dalle brute et le revêtement de sol, on trouve souvent une <strong>chape</strong> : couche de mortier ou de liant (chape ciment, chape fluide à base de sulfate de calcium ou de ciment) qui rattrape les défauts de planéité et peut enrober un plancher chauffant. La chape peut être <strong>adhérente</strong>, <strong>désolidarisée</strong> ou <strong>flottante</strong> (sur isolant ou sous-couche acoustique).</p>\n<table><thead><tr><th>Revêtement</th><th>Usages courants</th><th>Points d'attention</th></tr></thead><tbody>\n<tr><td>Carrelage</td><td>Pièces humides, circulations, locaux à fort trafic</td><td>Classement de glissance, pose collée ou scellée, joints de fractionnement</td></tr>\n<tr><td>Revêtements souples (PVC, linoléum, caoutchouc)</td><td>Locaux d'enseignement, de santé, bureaux</td><td>Support parfaitement plan et sec, classement d'usage</td></tr>\n<tr><td>Parquet (massif, contrecollé)</td><td>Pièces de vie</td><td>Hygrométrie, compatibilité avec plancher chauffant</td></tr>\n<tr><td>Sols textiles (moquette)</td><td>Bureaux, chambres</td><td>Entretien, confort acoustique</td></tr>\n<tr><td>Résine</td><td>Locaux techniques, industriels, commerces</td><td>Préparation du support</td></tr>\n</tbody></table>\n<p>Le choix d'un revêtement s'appuie sur des <strong>classements d'usage</strong> (par exemple le classement UPEC pour les sols : usure, poinçonnement, eau, agents chimiques), qui permettent de faire correspondre la performance du produit aux sollicitations du local.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les murs reçoivent ensuite peinture, faïence ou revêtements muraux. Le peintre distingue les niveaux de finition (élémentaire, courante, soignée) qui conditionnent le nombre de couches et la préparation : ce choix a un effet direct sur le prix au m².</div>"
      },
      {
       "titre": "Plomberie et évacuations",
       "contenu": "<p>Les installations sanitaires comprennent deux réseaux bien distincts :</p>\n<ul>\n<li>l'<strong>alimentation</strong> en eau froide et eau chaude sanitaire, sous pression, en cuivre, multicouche ou PER, depuis le compteur jusqu'aux appareils (lavabo, évier, douche, WC) ;</li>\n<li>l'<strong>évacuation</strong>, gravitaire, en PVC : eaux usées (EU, provenant des lavabos, douches, éviers), eaux vannes (EV, provenant des WC) et eaux pluviales (EP). Les canalisations horizontales ont une pente (de l'ordre de 1 à 3 cm par mètre) et les chutes verticales sont ventilées en toiture.</li>\n</ul>\n<p>Hors du bâtiment, les eaux usées rejoignent le réseau public d'assainissement (tout-à-l'égout) ou, à défaut, un dispositif d'<strong>assainissement non collectif</strong>. Les eaux pluviales sont de plus en plus gérées à la parcelle (infiltration, stockage, récupération) selon les règles du PLU.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la faisabilité d'une évacuation. Un WC est implanté à 6,00 m de la chute verticale. La pente minimale retenue est de 1 cm/m. 1. Dénivelé nécessaire : 6,00 × 0,01 = 0,06 m. 2. On ajoute le diamètre du tuyau (100 mm) et la hauteur du raccordement : la canalisation occupe une épaisseur d'environ 0,20 m sous l'appareil au point le plus bas. 3. Si cette épaisseur n'est pas disponible dans la chape ou le faux plafond, il faut déplacer le WC, créer une chute supplémentaire ou prévoir un broyeur (solution de dernier recours). La position des appareils sanitaires se décide donc avec les gaines et les chutes, dès l'avant-projet.</div>"
      },
      {
       "titre": "Chauffage, eau chaude sanitaire et ventilation",
       "contenu": "<p>Une installation de chauffage comprend toujours trois fonctions : la <strong>production</strong> de chaleur, la <strong>distribution</strong> et l'<strong>émission</strong>, auxquelles s'ajoute la <strong>régulation</strong>.</p>\n<table><thead><tr><th>Fonction</th><th>Solutions courantes</th></tr></thead><tbody>\n<tr><td>Production</td><td>Pompe à chaleur air/eau ou air/air, chaudière gaz à condensation, chaudière ou poêle à bois, réseau de chaleur, effet Joule (convecteurs, panneaux rayonnants)</td></tr>\n<tr><td>Distribution</td><td>Réseau hydraulique (tubes, circulateur, collecteurs), réseau aéraulique (gaines)</td></tr>\n<tr><td>Émission</td><td>Radiateurs, plancher chauffant basse température, ventilo-convecteurs, unités intérieures</td></tr>\n<tr><td>Régulation</td><td>Thermostat d'ambiance, sonde extérieure, robinets thermostatiques, programmation</td></tr>\n</tbody></table>\n<p>L'<strong>eau chaude sanitaire</strong> (ECS) est produite par un ballon électrique, un chauffe-eau thermodynamique (pompe à chaleur dédiée), une chaudière mixte, des capteurs solaires thermiques ou un réseau collectif. En logement neuf, l'ECS représente une part importante de la consommation, car le chauffage a fortement baissé.</p>\n<p>La <strong>ventilation</strong> est obligatoire et permanente dans les logements. Les débits à extraire dépendent du nombre de pièces principales et des pièces de service. La VMC <strong>hygroréglable</strong> module les débits selon l'humidité, ce qui réduit les pertes de chaleur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les équipements techniques occupent de la place : chaufferie ou local technique, gaines verticales, faux plafonds, passages de réseaux. Ces réservations doivent apparaître sur les plans dès l'avant-projet, sinon elles seront « volées » sur des espaces prévus pour autre chose.</div>"
      },
      {
       "titre": "Électricité et production photovoltaïque",
       "contenu": "<p>Les installations électriques intérieures des bâtiments d'habitation sont régies par la norme <strong>NF C 15-100</strong>. Elle fixe notamment :</p>\n<ul>\n<li>l'organisation du <strong>tableau de répartition</strong> (protection différentielle 30 mA, disjoncteurs divisionnaires par circuit) ;</li>\n<li>le <strong>nombre minimal</strong> de prises et de points d'éclairage par pièce ;</li>\n<li>les <strong>volumes de sécurité</strong> autour des baignoires et douches, où les appareils autorisés sont limités ;</li>\n<li>la <strong>gaine technique logement</strong> (GTL), emplacement réservé au tableau électrique et aux équipements de communication.</li>\n</ul>\n<p>Les installations <strong>photovoltaïques</strong> se développent sur les toitures, en autoconsommation (l'électricité est consommée sur place) ou en revente. Leur puissance s'exprime en <strong>kilowatts-crête</strong> (kWc), puissance fournie dans des conditions standard d'ensoleillement. En France métropolitaine, un kilowatt-crête bien orienté produit de l'ordre de 1 000 à 1 400 kWh par an selon la région.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur les plans d'électricité, chaque appareil est représenté par un symbole normalisé (prise, interrupteur simple ou va-et-vient, point lumineux, prise de communication). Le métré d'électricité consiste souvent à compter ces symboles pièce par pièce et à les reporter dans la décomposition du prix.</div>"
      },
      {
       "titre": "Enchaîner les corps d'état du second œuvre",
       "contenu": "<p>Le second œuvre mobilise de nombreux corps d'état qui interviennent à tour de rôle et parfois simultanément. Un ordre type, pour un logement, est le suivant :</p>\n<ol>\n<li>réseaux en attente sous dalle et réservations (pendant le gros œuvre) ;</li>\n<li>menuiseries extérieures (mise hors d'air) ;</li>\n<li>doublages et ossatures de cloisons ;</li>\n<li>passage des réseaux électriques et de plomberie dans les cloisons (première phase, dite « incorporation » ou « rough ») ;</li>\n<li>fermeture des cloisons, bandes et enduits de joints ;</li>\n<li>chapes, puis sols durs ;</li>\n<li>menuiseries intérieures (huisseries, portes) ;</li>\n<li>faïence ;</li>\n<li>peinture ;</li>\n<li>appareillages électriques, appareils sanitaires (seconde phase, dite « finitions ») ;</li>\n<li>sols souples et parquets, nettoyage, réglages.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> anticiper un conflit d'interfaces. Dans un CCTP, le lot plâtrerie prévoit des cloisons sans mention des renforts pour les lavabos suspendus, et le lot plomberie ne les prévoit pas non plus. 1. Identifier l'interface : fixation d'un appareil lourd sur une cloison légère. 2. Chercher dans chaque lot qui fournit et pose le renfort. 3. Si aucun lot ne le prévoit, proposer une clause précise (« renforts bois ou métalliques fournis et posés par le lot plâtrerie, positionnés selon les plans du lot plomberie »). 4. Reporter l'ouvrage dans la décomposition de prix du lot concerné.</div>\n<p>Ces interfaces (qui fait quoi entre deux lots) sont une source fréquente de conflits et d'oublis ; leur traitement soigné dans les pièces écrites distingue un bon dossier de consultation.</p>"
      }
     ],
     "points_cles": [
      "Le second œuvre commence quand le bâtiment est hors d'eau et hors d'air.",
      "Cloisons et doublages en plaques de plâtre : NF DTU 25.41, type de plaque selon le local.",
      "Sous les douches, un système de protection à l'eau sous carrelage est nécessaire.",
      "Chape adhérente, désolidarisée ou flottante ; revêtements choisis selon un classement d'usage.",
      "Plomberie : alimentation sous pression, évacuations gravitaires EU, EV, EP avec pente.",
      "Chauffage : production, distribution, émission, régulation ; ECS et ventilation à prévoir ensemble.",
      "Électricité des logements : NF C 15-100 ; photovoltaïque exprimé en kWc.",
      "Les interfaces entre lots doivent être attribuées clairement dans les pièces écrites."
     ],
     "lexique": [
      {
       "terme": "Hors d'eau, hors d'air",
       "def": "Stade où la couverture et les menuiseries extérieures sont posées, protégeant l'intérieur des intempéries."
      },
      {
       "terme": "Cloison 72/48",
       "def": "Cloison en plaques de plâtre de 72 mm d'épaisseur totale sur ossature de 48 mm."
      },
      {
       "terme": "SPEC",
       "def": "Système de protection à l'eau sous carrelage pour les zones exposées aux projections d'eau."
      },
      {
       "terme": "Chape flottante",
       "def": "Chape posée sur un isolant ou une sous-couche, sans liaison avec le support ni les murs."
      },
      {
       "terme": "Classement UPEC",
       "def": "Classement des sols et des locaux selon l'usure, le poinçonnement, l'eau et les agents chimiques."
      },
      {
       "terme": "EU / EV / EP",
       "def": "Eaux usées, eaux vannes, eaux pluviales."
      },
      {
       "terme": "Chute",
       "def": "Canalisation verticale d'évacuation, ventilée en toiture."
      },
      {
       "terme": "ECS",
       "def": "Eau chaude sanitaire."
      },
      {
       "terme": "VMC hygroréglable",
       "def": "Ventilation dont les débits varient selon l'humidité de l'air."
      },
      {
       "terme": "GTL",
       "def": "Gaine technique logement, emplacement réservé au tableau électrique et aux réseaux de communication."
      },
      {
       "terme": "kWc",
       "def": "Kilowatt-crête : puissance d'une installation photovoltaïque dans des conditions standard."
      }
     ]
    },
    {
     "id": "bteb-charges-equilibre",
     "titre": "Charges, descente de charges et équilibre des structures",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Distinguer charges permanentes, charges d'exploitation et actions climatiques",
      "Calculer des charges surfaciques et linéiques à partir de poids volumiques",
      "Appliquer les combinaisons d'actions aux états limites ultimes et de service",
      "Réaliser une descente de charges simple jusqu'aux fondations",
      "Déterminer les actions d'appui d'une poutre par le principe fondamental de la statique"
     ],
     "sections": [
      {
       "titre": "Les actions qui s'exercent sur un bâtiment",
       "contenu": "<p>Le calcul des structures en Europe repose sur les <strong>Eurocodes</strong>, normes harmonisées complétées par des annexes nationales. L'Eurocode 0 (NF EN 1990) pose les bases du calcul, l'Eurocode 1 (NF EN 1991) définit les actions, les Eurocodes suivants traitent chacun d'un matériau (2 pour le béton, 3 pour l'acier, 5 pour le bois) ou d'un domaine (7 pour la géotechnique, 8 pour le séisme).</p>\n<p>On classe les actions en trois familles :</p>\n<ul>\n<li>les <strong>actions permanentes</strong>, notées G : poids propre de la structure, des revêtements, des cloisons fixes, des équipements fixes. Elles s'appliquent en permanence avec une intensité peu variable ;</li>\n<li>les <strong>actions variables</strong>, notées Q : charges d'exploitation (personnes, mobilier, stockage), neige (S), vent (W), température ;</li>\n<li>les <strong>actions accidentelles</strong> : choc, explosion, incendie, et le séisme qui fait l'objet d'un traitement spécifique.</li>\n</ul>\n<p>Les charges s'expriment selon leur répartition : <strong>ponctuelles</strong> en kN, <strong>linéiques</strong> (réparties sur une longueur) en kN/m, <strong>surfaciques</strong> (réparties sur une surface) en kN/m². Rappel : 1 kN = 1 000 N, soit environ le poids d'une masse de 100 kg ; 1 kN/m² correspond à environ 100 kg par m².</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> G est permanent et connu avec précision ; Q varie et est défini par la réglementation selon l'usage des locaux. On ne mélange jamais les deux avant d'appliquer les coefficients de combinaison.</div>"
      },
      {
       "titre": "Évaluer les charges permanentes et d'exploitation",
       "contenu": "<p>Les charges permanentes se calculent à partir des <strong>poids volumiques</strong> des matériaux (en kN/m³) multipliés par les épaisseurs.</p>\n<table><thead><tr><th>Matériau</th><th>Poids volumique indicatif</th></tr></thead><tbody>\n<tr><td>Béton armé</td><td>25 kN/m³</td></tr>\n<tr><td>Mortier, chape ciment</td><td>20 à 22 kN/m³</td></tr>\n<tr><td>Maçonnerie de blocs creux</td><td>selon le produit, souvent exprimée en kN/m² de mur</td></tr>\n<tr><td>Bois résineux de structure</td><td>4 à 5 kN/m³</td></tr>\n<tr><td>Acier</td><td>78,5 kN/m³</td></tr>\n</tbody></table>\n<p>Les <strong>charges d'exploitation</strong> sont données par l'Eurocode 1 et son annexe nationale selon la catégorie d'usage. Pour les planchers de logements (catégorie A), on retient 1,5 kN/m² ; pour les bureaux et les lieux de réunion ou les commerces, les valeurs sont plus élevées. Les cloisons légères mobiles peuvent être prises en compte par une charge répartie forfaitaire ajoutée à Q.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> charges d'un plancher de logement. Composition : dalle béton armé 20 cm, chape 5 cm (22 kN/m³), carrelage et colle 0,6 kN/m², faux plafond 0,2 kN/m².<br>1. Dalle : 0,20 × 25 = 5,00 kN/m².<br>2. Chape : 0,05 × 22 = 1,10 kN/m².<br>3. Revêtement : 0,60 kN/m².<br>4. Faux plafond : 0,20 kN/m².<br>5. G = 5,00 + 1,10 + 0,60 + 0,20 = 6,90 kN/m².<br>6. Q (logement) = 1,5 kN/m².<br>On présente toujours ces résultats sous forme de tableau, couche par couche, pour que le calcul soit vérifiable.</div>"
      },
      {
       "titre": "Combinaisons d'actions : ELU et ELS",
       "contenu": "<p>Les actions ne sont pas connues exactement et les matériaux ont des résistances variables. Pour couvrir ces incertitudes, on vérifie la structure à deux types d'<strong>états limites</strong> :</p>\n<ul>\n<li>l'<strong>état limite ultime</strong> (ELU) concerne la sécurité : rupture, perte d'équilibre, instabilité. On majore les actions par des coefficients partiels. La combinaison fondamentale la plus courante, pour une seule action variable, est <strong>1,35 G + 1,5 Q</strong> ;</li>\n<li>l'<strong>état limite de service</strong> (ELS) concerne l'usage normal : déformations (flèches), fissuration, vibrations. La combinaison caractéristique simple est <strong>G + Q</strong>.</li>\n</ul>\n<p>Lorsque plusieurs actions variables agissent (exploitation, neige, vent), une seule est prise comme action dominante avec son coefficient plein ; les autres sont réduites par des coefficients d'accompagnement définis par l'Eurocode 0. Ces combinaisons multiples sont traitées par les logiciels du bureau d'études.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> combinaisons pour le plancher précédent. G = 6,90 kN/m² ; Q = 1,5 kN/m².<br>ELU : p<sub>u</sub> = 1,35 × 6,90 + 1,5 × 1,5 = 9,32 + 2,25 = 11,57 kN/m².<br>ELS : p<sub>ser</sub> = 6,90 + 1,5 = 8,40 kN/m².<br>On remarque que dans un plancher béton de logement, la charge permanente représente plus des trois quarts de la charge totale : alléger la structure est donc un levier efficace.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on n'utilise pas la même combinaison pour toutes les vérifications. Le dimensionnement des aciers d'une poutre ou la largeur d'une semelle se font à l'ELU ; la vérification de la flèche se fait à l'ELS. Confondre les deux conduit à sous-dimensionner ou à surdimensionner.</div>"
      },
      {
       "titre": "La descente de charges",
       "contenu": "<p>La <strong>descente de charges</strong> consiste à suivre le cheminement des charges depuis la toiture jusqu'aux fondations, élément porteur par élément porteur. Elle permet de dimensionner les poteaux, les murs et les fondations.</p>\n<p>La notion clé est la <strong>surface d'influence</strong> (ou largeur de reprise) : chaque élément porteur reprend les charges d'une zone de plancher délimitée par la moitié des portées voisines. Pour un mur qui porte un plancher sur une portée de 5,00 m (appuyé sur un autre mur à l'autre extrémité), la largeur reprise est 5,00 / 2 = 2,50 m.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> descente de charges sur un mètre de mur de refend intérieur, dans une maison à un étage. Le refend porte de chaque côté un plancher de portée 4,00 m (largeur reprise : 2,00 + 2,00 = 4,00 m).<br>1. Plancher haut de l'étage (toiture-terrasse simplifiée) : G = 6,0 kN/m², Q = 1,0 kN/m² ; par mètre de mur : G = 24,0 kN/m ; Q = 4,0 kN/m.<br>2. Mur d'étage, 2,50 m de haut, 2,5 kN/m² de mur : G = 6,25 kN/m.<br>3. Plancher intermédiaire : G = 6,9 kN/m², Q = 1,5 kN/m² ; par mètre : G = 27,6 kN/m ; Q = 6,0 kN/m.<br>4. Mur de rez-de-chaussée : G = 6,25 kN/m.<br>5. Cumul en pied de mur : G = 24,0 + 6,25 + 27,6 + 6,25 = 64,1 kN/m ; Q = 4,0 + 6,0 = 10,0 kN/m.<br>6. ELU : 1,35 × 64,1 + 1,5 × 10,0 = 86,5 + 15,0 = 101,5 kN/m.<br>Cette valeur sert ensuite à dimensionner la semelle filante sous le refend.</div>\n<p>On présente une descente de charges dans un tableau, niveau par niveau, avec une colonne G, une colonne Q et un cumul. Cette présentation évite les oublis et facilite le contrôle.</p>"
      },
      {
       "titre": "Équilibre d'un système : le principe fondamental de la statique",
       "contenu": "<p>Une structure au repos est en <strong>équilibre</strong>. Le <strong>principe fondamental de la statique</strong> (PFS) traduit cet équilibre dans le plan par trois équations :</p>\n<ul>\n<li>la somme des forces horizontales est nulle : ΣF<sub>x</sub> = 0 ;</li>\n<li>la somme des forces verticales est nulle : ΣF<sub>y</sub> = 0 ;</li>\n<li>la somme des <strong>moments</strong> par rapport à n'importe quel point est nulle : ΣM = 0.</li>\n</ul>\n<p>Le <strong>moment</strong> d'une force par rapport à un point est le produit de l'intensité de la force par la distance perpendiculaire entre le point et la ligne d'action de la force ; il s'exprime en kN·m. Par convention, on choisit un sens positif (par exemple le sens trigonométrique).</p>\n<p>Les <strong>appuis</strong> sont modélisés : un <strong>appui simple</strong> (ou à rouleau) donne une seule réaction perpendiculaire ; une <strong>articulation</strong> donne deux réactions (horizontale et verticale) ; un <strong>encastrement</strong> donne deux réactions et un moment.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> actions d'appui d'une poutre. Une poutre de 6,00 m, sur appui A (articulation) et B (appui simple), supporte une charge répartie de 10 kN/m sur toute sa longueur et une charge ponctuelle de 30 kN à 2,00 m de A.<br>1. Charge répartie équivalente : 10 × 6,00 = 60 kN, appliquée au milieu (3,00 m de A).<br>2. ΣM<sub>A</sub> = 0 : R<sub>B</sub> × 6,00 − 60 × 3,00 − 30 × 2,00 = 0, donc R<sub>B</sub> = (180 + 60) / 6,00 = 40 kN.<br>3. ΣF<sub>y</sub> = 0 : R<sub>A</sub> + R<sub>B</sub> − 60 − 30 = 0, donc R<sub>A</sub> = 90 − 40 = 50 kN.<br>4. Vérification : ΣM<sub>B</sub> = −R<sub>A</sub> × 6,00 + 60 × 3,00 + 30 × 4,00 = −300 + 180 + 120 = 0. Le calcul est juste.</div>"
      },
      {
       "titre": "Neige, vent et stabilité d'ensemble",
       "contenu": "<p>Les <strong>actions climatiques</strong> dépendent de la localisation du bâtiment :</p>\n<ul>\n<li>la <strong>neige</strong> (NF EN 1991-1-3) : la France est découpée en régions de neige ; la charge au sol augmente avec l'altitude, puis elle est convertie en charge sur la toiture par un coefficient de forme qui dépend de la pente et des accumulations possibles (noues, acrotères, toitures à niveaux différents) ;</li>\n<li>le <strong>vent</strong> (NF EN 1991-1-4) : la France est découpée en régions de vent ; la pression dépend aussi de la rugosité du terrain (mer, campagne, ville), de la hauteur du bâtiment et de la forme des parois. Le vent crée des pressions sur les façades au vent et des dépressions (succions) sur les autres faces et en toiture.</li>\n</ul>\n<p>Le vent produit deux types de risques : l'<strong>arrachement</strong> des éléments légers (couvertures, bardages, toitures-terrasses en bac acier) et le <strong>renversement</strong> ou le glissement de l'ensemble si le contreventement et l'ancrage sont insuffisants. Pour une structure légère (hangar, ossature bois), le soulèvement par le vent peut dépasser le poids propre : les ancrages en fondation doivent alors travailler à la traction.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le technicien d'études ne réalise pas les calculs réglementaires complets de neige et de vent, mais il doit savoir lire les hypothèses d'une note de calcul (région, altitude, catégorie de terrain) et vérifier qu'elles correspondent bien au site du projet. Une erreur de commune ou d'altitude fausse toute la note.</div>"
      }
     ],
     "points_cles": [
      "Les Eurocodes encadrent le calcul : EN 1990 (bases), EN 1991 (actions), puis un Eurocode par matériau.",
      "Actions permanentes G, variables Q (exploitation, neige, vent), accidentelles.",
      "Charges ponctuelles en kN, linéiques en kN/m, surfaciques en kN/m².",
      "G se calcule avec les poids volumiques (béton armé 25 kN/m³) ; Q dépend de l'usage (logement 1,5 kN/m²).",
      "ELU : 1,35 G + 1,5 Q pour la résistance ; ELS : G + Q pour les déformations.",
      "La descente de charges suit les charges de la toiture aux fondations grâce aux surfaces d'influence.",
      "PFS dans le plan : ΣFx = 0, ΣFy = 0, ΣM = 0.",
      "Neige et vent dépendent de la région, de l'altitude, du terrain et de la forme du bâtiment."
     ],
     "lexique": [
      {
       "terme": "Eurocodes",
       "def": "Normes européennes de conception et de calcul des structures."
      },
      {
       "terme": "Charge permanente G",
       "def": "Action de poids propre et d'éléments fixes, d'intensité quasi constante."
      },
      {
       "terme": "Charge d'exploitation Q",
       "def": "Action variable liée à l'usage des locaux (personnes, mobilier, stockage)."
      },
      {
       "terme": "État limite ultime",
       "def": "État au-delà duquel la structure risque la ruine ; vérifié avec des actions majorées."
      },
      {
       "terme": "État limite de service",
       "def": "État au-delà duquel l'usage normal n'est plus assuré (flèche, fissures)."
      },
      {
       "terme": "Descente de charges",
       "def": "Calcul du cheminement des charges de la toiture jusqu'aux fondations."
      },
      {
       "terme": "Surface d'influence",
       "def": "Zone de plancher dont un élément porteur reprend les charges."
      },
      {
       "terme": "Moment",
       "def": "Effet de rotation d'une force par rapport à un point, en kN·m."
      },
      {
       "terme": "Appui simple",
       "def": "Liaison qui ne transmet qu'une réaction perpendiculaire à l'appui."
      },
      {
       "terme": "Encastrement",
       "def": "Liaison qui empêche tout déplacement et toute rotation, et transmet un moment."
      }
     ]
    },
    {
     "id": "bteb-etude-mecanique",
     "titre": "Étude mécanique et choix d'une solution technique",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Identifier les sollicitations simples : compression, traction, flexion, cisaillement",
      "Calculer une contrainte normale et la comparer à une résistance",
      "Déterminer l'effort tranchant et le moment fléchissant d'une poutre isostatique",
      "Prédimensionner une poutre, un poteau ou une semelle avec des règles simples",
      "Justifier un choix technique à partir de critères mécaniques et économiques"
     ],
     "sections": [
      {
       "titre": "Les sollicitations simples",
       "contenu": "<p>Sous l'effet des charges, chaque élément de structure subit des <strong>sollicitations</strong> internes. On en distingue quatre principales :</p>\n<table><thead><tr><th>Sollicitation</th><th>Effet</th><th>Exemples</th></tr></thead><tbody>\n<tr><td>Compression</td><td>L'élément est écrasé, il se raccourcit</td><td>Poteaux, murs porteurs, fondations</td></tr>\n<tr><td>Traction</td><td>L'élément est tiré, il s'allonge</td><td>Tirants, entraits de fermes, suspentes</td></tr>\n<tr><td>Flexion</td><td>L'élément se courbe : une face est comprimée, l'autre tendue</td><td>Poutres, linteaux, dalles, solives</td></tr>\n<tr><td>Cisaillement</td><td>Deux parties voisines tendent à glisser l'une par rapport à l'autre</td><td>Zones proches des appuis d'une poutre, assemblages boulonnés</td></tr>\n</tbody></table>\n<p>Un élément élancé comprimé peut aussi subir le <strong>flambement</strong> : il se dérobe latéralement bien avant que le matériau ne soit écrasé. C'est le phénomène qui limite l'élancement des poteaux et des montants.</p>\n<p>La <strong>contrainte</strong> est la force rapportée à la surface qui la reprend : σ = N / S. Elle s'exprime en MPa (1 MPa = 1 N/mm²). Un élément résiste si la contrainte qu'il subit reste inférieure à la résistance de calcul du matériau.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un poteau en compression simple (calcul simplifié sans flambement). Un poteau béton de 25 × 25 cm reçoit un effort ELU de 900 kN. 1. Section : S = 250 × 250 = 62 500 mm². 2. Contrainte : σ = 900 000 / 62 500 = 14,4 MPa. 3. Pour un béton C25/30, la résistance de calcul en compression est de l'ordre de 25 / 1,5 ≈ 16,7 MPa. 4. 14,4 &lt; 16,7 : la section de béton seule suffirait en compression simple, mais l'élancement et les armatures minimales doivent être vérifiés par le bureau d'études.</div>"
      },
      {
       "titre": "Effort tranchant et moment fléchissant",
       "contenu": "<p>Dans une poutre fléchie, on étudie deux grandeurs internes le long de sa longueur :</p>\n<ul>\n<li>l'<strong>effort tranchant</strong> V (en kN), maximal près des appuis, qui provoque le cisaillement ;</li>\n<li>le <strong>moment fléchissant</strong> M (en kN·m), maximal en général vers le milieu de la portée pour une poutre sur deux appuis, qui provoque la flexion.</li>\n</ul>\n<p>Pour les cas courants, on utilise des <strong>formulaires</strong> :</p>\n<table><thead><tr><th>Cas de charge (poutre sur deux appuis, portée L)</th><th>Réactions</th><th>Moment maximal</th><th>Flèche maximale</th></tr></thead><tbody>\n<tr><td>Charge répartie p sur toute la longueur</td><td>pL / 2 à chaque appui</td><td>pL² / 8 au milieu</td><td>5pL⁴ / (384 EI)</td></tr>\n<tr><td>Charge ponctuelle F au milieu</td><td>F / 2 à chaque appui</td><td>FL / 4 au milieu</td><td>FL³ / (48 EI)</td></tr>\n</tbody></table>\n<p>Dans ces formules, E est le <strong>module d'élasticité</strong> du matériau (environ 210 000 MPa pour l'acier, de l'ordre de 30 000 MPa pour le béton, 10 000 à 12 000 MPa pour un bois résineux) et I le <strong>moment quadratique</strong> de la section (b × h³ / 12 pour un rectangle de base b et de hauteur h). On remarque que la hauteur intervient au cube : doubler la hauteur d'une poutre divise sa flèche par huit.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> moment maximal d'une poutre de plancher. Portée 5,00 m, charge ELU p<sub>u</sub> = 28 kN/m. 1. Réactions : 28 × 5,00 / 2 = 70 kN. 2. Effort tranchant maximal : 70 kN aux appuis. 3. Moment maximal : 28 × 5,00² / 8 = 28 × 25 / 8 = 87,5 kN·m au milieu. Ces valeurs permettent au bureau d'études de calculer les armatures (béton armé) ou de choisir un profilé (acier) ou une section (bois).</div>"
      },
      {
       "titre": "Prédimensionner les éléments courants",
       "contenu": "<p>Aux phases d'esquisse et d'avant-projet, on a besoin de dimensions approximatives pour dessiner les plans et chiffrer, bien avant la note de calcul. On utilise des <strong>règles de prédimensionnement</strong> issues de l'expérience :</p>\n<table><thead><tr><th>Élément</th><th>Règle indicative de hauteur ou d'épaisseur</th></tr></thead><tbody>\n<tr><td>Dalle pleine béton armé portant dans un sens</td><td>L / 25 à L / 30</td></tr>\n<tr><td>Poutre béton armé sur deux appuis</td><td>L / 10 à L / 12</td></tr>\n<tr><td>Poutre béton armé continue</td><td>L / 12 à L / 15</td></tr>\n<tr><td>Solive bois</td><td>environ L / 20</td></tr>\n<tr><td>Poutre lamellé-collé</td><td>L / 15 à L / 17</td></tr>\n<tr><td>Profilé acier (IPE) en plancher</td><td>L / 20 à L / 25</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> prédimensionner une poutre béton armé de 6,00 m de portée sur deux appuis. 1. Hauteur : entre 6,00 / 12 = 0,50 m et 6,00 / 10 = 0,60 m ; on retient 0,50 m si la charge est modérée. 2. Largeur : de l'ordre du tiers à la moitié de la hauteur, soit 0,20 à 0,25 m ; on retient 0,20 m pour s'aligner sur l'épaisseur du mur. 3. Désignation sur plan : « poutre 20 × 50 ». 4. Conséquence architecturale : sous une dalle de 20 cm, la retombée visible est de 30 cm ; il faut vérifier la hauteur sous poutre dans le passage (au moins 2,00 m sous retombée en circulation courante).</div>\n<p>Ces règles ne valent que pour des charges courantes. Elles ne remplacent jamais une note de calcul, mais évitent de dessiner des sections irréalistes.</p>"
      },
      {
       "titre": "Les matériaux de structure et leurs propriétés",
       "contenu": "<table><thead><tr><th>Matériau</th><th>Compression</th><th>Traction</th><th>Atouts</th><th>Limites</th></tr></thead><tbody>\n<tr><td>Béton (non armé)</td><td>Bonne</td><td>Très faible</td><td>Moulable, masse, feu</td><td>Lourd, carbone du ciment</td></tr>\n<tr><td>Béton armé</td><td>Bonne</td><td>Reprise par les aciers</td><td>Polyvalent, monolithique</td><td>Temps de séchage, étaiement</td></tr>\n<tr><td>Acier</td><td>Très bonne</td><td>Très bonne</td><td>Grandes portées, légèreté, rapidité</td><td>Corrosion, perte de résistance au feu sans protection</td></tr>\n<tr><td>Bois massif, lamellé-collé</td><td>Bonne</td><td>Bonne (dans le sens des fibres)</td><td>Léger, stocke du carbone, préfabrication</td><td>Sensible à l'eau et aux insectes, déformations différées</td></tr>\n<tr><td>Maçonnerie</td><td>Bonne</td><td>Très faible</td><td>Économique, inertie</td><td>Chaînages nécessaires, portées faibles</td></tr>\n</tbody></table>\n<p>La loi de comportement de base est la <strong>loi de Hooke</strong> : dans le domaine élastique, la contrainte est proportionnelle à la déformation relative, σ = E × ε. Au-delà de la limite d'élasticité, les déformations deviennent permanentes ; c'est pourquoi on reste toujours avec une marge de sécurité.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le bois et le béton se déforment encore longtemps sous charge permanente (phénomène de <strong>fluage</strong>). Une poutre bois qui respecte la flèche à la pose peut fléchir davantage au bout de quelques années. Les règles de calcul en tiennent compte ; les règles de prédimensionnement intègrent cette marge.</div>"
      },
      {
       "titre": "Lire une note de calcul et des plans de structure",
       "contenu": "<p>Le bureau d'études structure produit une <strong>note de calcul</strong> et des <strong>plans de structure</strong> (coffrage et ferraillage pour le béton armé). Le technicien d'études doit savoir y retrouver les informations utiles au chiffrage et à la coordination :</p>\n<ul>\n<li>les <strong>hypothèses</strong> : règlements utilisés, classes de béton et d'exposition, nuance d'acier, charges d'exploitation retenues, contrainte de sol, région de neige et de vent, zone sismique ;</li>\n<li>les <strong>sections</strong> des éléments : épaisseur des dalles et des voiles, dimensions des poutres et poteaux ;</li>\n<li>les <strong>réservations</strong> : trémies, passages de gaines, incorporations ;</li>\n<li>pour le ferraillage : nomenclature des aciers, longueurs, façonnages, poids d'acier.</li>\n</ul>\n<p>Sur un <strong>plan de coffrage</strong>, chaque élément est repéré et coté ; les niveaux sont exprimés en NGF ou en relatif par rapport au niveau zéro du projet. Sur un plan d'<strong>armatures</strong>, chaque barre est désignée par un repère, un nombre, un diamètre et un façonnage (par exemple « 4 HA 12 filants » ou « cadres HA 6 esp. 20 cm »).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les économistes utilisent souvent des <strong>ratios d'armatures</strong> (kilogrammes d'acier par m³ de béton) pour estimer les aciers avant que les plans de ferraillage existent. Ces ratios varient beaucoup selon l'élément (dalle, voile, poutre, fondation) et doivent être remplacés par les quantités réelles dès que les plans d'exécution sont disponibles.</div>"
      },
      {
       "titre": "Justifier un choix technique",
       "contenu": "<p>Choisir une solution structurelle, ce n'est pas seulement vérifier qu'elle résiste. Il faut comparer des solutions qui résistent toutes et retenir la plus pertinente selon les objectifs du projet. Les critères habituels sont :</p>\n<ul>\n<li>la <strong>faisabilité technique</strong> : portée, charges, hauteur disponible, accès du chantier, levage ;</li>\n<li>le <strong>coût</strong> : fourniture, main-d'œuvre, matériel (grue, étaiement), finitions induites ;</li>\n<li>le <strong>délai</strong> : préfabrication, temps de séchage ;</li>\n<li>l'<strong>impact environnemental</strong> : carbone, recyclabilité ;</li>\n<li>les <strong>performances induites</strong> : acoustique, feu, inertie, flexibilité future des espaces.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger une justification de choix. Question : franchir une ouverture de 4,00 m dans un mur porteur en rénovation. 1. Données : charge transmise par le mur supérieur, hauteur disponible sous plafond, accès. 2. Solutions : linteau béton armé coulé en place, profilé acier (IPN, IPE ou HEA) moisé, poutre en lamellé-collé. 3. Analyse : le béton exige un coffrage, un étaiement prolongé et un séchage ; l'acier se pose en une journée, avec une faible hauteur, mais doit être protégé contre le feu si nécessaire ; le bois demande une hauteur plus importante. 4. Conclusion argumentée : en rénovation occupée avec peu de hauteur, deux profilés acier moisés sur des appuis en béton ou en maçonnerie renforcée sont pertinents, sous réserve de la note de calcul et de l'étaiement provisoire.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une justification de choix technique suit toujours le même plan : besoin, contraintes, solutions possibles, comparaison selon des critères explicites, choix argumenté et réserves.</div>"
      }
     ],
     "points_cles": [
      "Sollicitations simples : compression, traction, flexion, cisaillement ; le flambement menace les éléments élancés comprimés.",
      "Contrainte σ = N / S en MPa, à comparer à la résistance de calcul du matériau.",
      "Poutre sur deux appuis avec charge répartie : réactions pL/2, moment maximal pL²/8.",
      "La flèche dépend de E et de I ; la hauteur de section intervient au cube dans I.",
      "Règles de prédimensionnement : poutre BA isostatique L/10 à L/12, dalle L/25 à L/30.",
      "Loi de Hooke : σ = E × ε dans le domaine élastique ; fluage du bois et du béton à long terme.",
      "La note de calcul fixe les hypothèses : charges, matériaux, sol, neige, vent, séisme.",
      "Un choix technique se justifie par une comparaison multicritère argumentée."
     ],
     "lexique": [
      {
       "terme": "Contrainte",
       "def": "Force rapportée à la surface qui la reprend, en MPa."
      },
      {
       "terme": "Flexion",
       "def": "Sollicitation qui courbe un élément, comprimant une face et tendant l'autre."
      },
      {
       "terme": "Flambement",
       "def": "Instabilité d'un élément élancé comprimé qui se dérobe latéralement."
      },
      {
       "terme": "Effort tranchant",
       "def": "Effort interne perpendiculaire à la fibre moyenne d'une poutre, maximal près des appuis."
      },
      {
       "terme": "Moment fléchissant",
       "def": "Effort interne de flexion dans une poutre, en kN·m."
      },
      {
       "terme": "Flèche",
       "def": "Déplacement vertical maximal d'une poutre ou d'une dalle sous charge."
      },
      {
       "terme": "Module d'élasticité E",
       "def": "Rigidité d'un matériau : rapport entre contrainte et déformation en domaine élastique."
      },
      {
       "terme": "Moment quadratique I",
       "def": "Caractéristique géométrique d'une section qui traduit sa résistance à la flexion (b × h³ / 12 pour un rectangle)."
      },
      {
       "terme": "Fluage",
       "def": "Déformation qui augmente lentement sous charge permanente."
      },
      {
       "terme": "Note de calcul",
       "def": "Document du bureau d'études qui justifie le dimensionnement de la structure."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Représenter, concevoir et décrire le projet",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bteb-documents-phases-bim",
     "titre": "Les documents graphiques selon les phases et le travail collaboratif en BIM",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Associer à chaque phase d'un projet les documents graphiques attendus et leur niveau de détail",
      "Choisir une échelle adaptée à un document",
      "Identifier les pièces graphiques d'un dossier de permis de construire",
      "Expliquer les principes du travail collaboratif en BIM : convention, formats ouverts, niveaux de détail",
      "Appliquer les règles de cartouche, d'indice et de diffusion des documents"
     ],
     "sections": [
      {
       "titre": "Un niveau de détail qui augmente à chaque phase",
       "contenu": "<p>Un projet se précise progressivement. À chaque <strong>phase</strong>, les documents graphiques changent d'échelle et de contenu. Le tableau suivant donne les repères usuels pour un bâtiment de taille moyenne.</p>\n<table><thead><tr><th>Phase</th><th>Objectif</th><th>Documents graphiques</th><th>Échelles usuelles</th></tr></thead><tbody>\n<tr><td>Esquisse (ESQ)</td><td>Proposer une ou plusieurs réponses au programme</td><td>Plan masse, schémas de principe, plans et volumes simplifiés</td><td>1/500, 1/200</td></tr>\n<tr><td>Avant-projet sommaire (APS)</td><td>Arrêter la composition générale</td><td>Plans, coupes et façades simplifiés, tableau des surfaces</td><td>1/200, 1/100</td></tr>\n<tr><td>Avant-projet définitif (APD)</td><td>Arrêter les dimensions, l'aspect, les principes constructifs</td><td>Plans cotés, coupes, façades, premiers détails, notice descriptive</td><td>1/100</td></tr>\n<tr><td>Projet (PRO) / DCE</td><td>Décrire précisément les ouvrages pour consulter les entreprises</td><td>Plans par niveau, coupes, façades, carnets de détails, plans techniques</td><td>1/50, détails au 1/20, 1/10, 1/5</td></tr>\n<tr><td>Exécution (EXE)</td><td>Permettre la réalisation</td><td>Plans de coffrage, de ferraillage, de fabrication, plans de réservation</td><td>1/50 à 1/1</td></tr>\n<tr><td>Dossier des ouvrages exécutés (DOE)</td><td>Décrire ce qui a été réellement construit</td><td>Plans conformes à l'exécution</td><td>1/50, 1/100</td></tr>\n</tbody></table>\n<p>Le dossier de <strong>permis de construire</strong> s'insère en général après l'APS ou l'APD.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> plus on avance, plus l'échelle est grande (1/50 est une échelle plus grande que 1/200) et plus le dessin est détaillé. Un document trop détaillé trop tôt fait perdre du temps ; un document trop pauvre trop tard provoque des erreurs de chantier.</div>"
      },
      {
       "titre": "Choisir et utiliser les échelles",
       "contenu": "<p>L'<strong>échelle</strong> est le rapport entre une dimension sur le dessin et la dimension réelle. À l'échelle 1/50, 1 cm sur le papier représente 50 cm en réalité. Le choix de l'échelle dépend de ce que l'on veut montrer :</p>\n<ul>\n<li>1/2 000 à 1/500 : situation, plan masse d'un grand terrain ;</li>\n<li>1/200 : plan masse d'une parcelle, plans d'ensemble ;</li>\n<li>1/100 : plans, coupes et façades de permis de construire et d'avant-projet ;</li>\n<li>1/50 : plans de projet et d'exécution, montrant les épaisseurs détaillées des parois ;</li>\n<li>1/20 à 1/1 : détails techniques (jonction, appui de fenêtre, acrotère).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'un document entre sur un format. Un bâtiment mesure 32 m × 14 m. On veut le représenter en plan au 1/100 sur un format A1 (841 × 594 mm), en laissant 40 mm de marge et 60 mm pour le cartouche. 1. Dimensions dessinées : 32 m / 100 = 320 mm ; 14 m / 100 = 140 mm. 2. Avec cotation et légende autour, prévoir environ 60 mm de plus de chaque côté : 440 × 260 mm. 3. Place disponible : environ 760 × 490 mm. 4. Conclusion : le plan tient largement au 1/100 ; on peut même placer deux niveaux sur la même planche ou passer au 1/50 (640 × 280 mm dessinés, encore possible).</div>\n<p>Avec un logiciel de dessin ou de modélisation, on travaille en vraie grandeur dans l'espace « modèle » ; l'échelle n'est fixée qu'à la mise en page. Les épaisseurs de traits, les textes et les hachures doivent alors être adaptés à l'échelle d'impression pour rester lisibles.</p>"
      },
      {
       "titre": "Les pièces graphiques du permis de construire",
       "contenu": "<p>Le dossier de permis de construire d'une maison individuelle (formulaire et bordereau des pièces) comprend des pièces numérotées, désignées par le préfixe PCMI. Les pièces graphiques principales sont :</p>\n<table><thead><tr><th>Pièce</th><th>Contenu</th></tr></thead><tbody>\n<tr><td>PCMI 1 — plan de situation</td><td>Situe le terrain dans la commune</td></tr>\n<tr><td>PCMI 2 — plan de masse</td><td>Construction dans le terrain, avec cotes en trois dimensions, accès, raccordements aux réseaux, plantations</td></tr>\n<tr><td>PCMI 3 — plan en coupe</td><td>Implantation de la construction par rapport au profil du terrain naturel et fini</td></tr>\n<tr><td>PCMI 5 — plans des façades et des toitures</td><td>Aspect extérieur, matériaux, couleurs</td></tr>\n<tr><td>PCMI 6 — document graphique d'insertion</td><td>Insertion du projet dans son environnement, souvent par photomontage</td></tr>\n<tr><td>PCMI 7 et 8 — photographies</td><td>Terrain dans son environnement proche et lointain</td></tr>\n</tbody></table>\n<p>Le PCMI 4, <strong>notice descriptive</strong>, est une pièce écrite qui décrit le terrain et le projet (implantation, matériaux, traitement des accès et des espaces libres). D'autres pièces s'ajoutent selon les cas (attestations thermiques, étude géotechnique, accessibilité pour un ERP). Pour les autres constructions, les pièces portent le préfixe PC et une numérotation proche.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le permis de construire ne demande pas de plans intérieurs détaillés pour une maison, mais les plans de façades, de coupe et de masse doivent être <strong>cohérents</strong> entre eux et avec le règlement d'urbanisme. Une hauteur de faîtage différente entre la coupe et la façade suffit à faire refuser ou contester le permis.</div>"
      },
      {
       "titre": "Le BIM : une méthode de travail collaboratif",
       "contenu": "<p>Le <strong>BIM</strong> (modélisation des informations du bâtiment) désigne une méthode de travail fondée sur une <strong>maquette numérique</strong> renseignée : chaque objet (mur, dalle, fenêtre, équipement) porte une géométrie et des informations (matériau, performance, fabricant, coût, phase). Au-delà de l'outil, le BIM est une organisation du travail entre les acteurs.</p>\n<p>On distingue souvent plusieurs façons de travailler :</p>\n<ul>\n<li>chaque intervenant produit sa propre maquette (architecture, structure, fluides) ; les maquettes sont ensuite superposées pour détecter les conflits : c'est la <strong>synthèse</strong> ;</li>\n<li>les maquettes sont échangées dans un format ouvert, l'<strong>IFC</strong> (Industry Foundation Classes, normalisé ISO 16739), lisible par des logiciels différents ;</li>\n<li>les remarques et conflits sont échangés dans un format dédié, le <strong>BCF</strong>, qui pointe directement l'objet concerné dans la maquette.</li>\n</ul>\n<p>Les règles du jeu sont écrites dans une <strong>convention BIM</strong> (ou protocole BIM) : rôles de chacun, logiciels et formats, découpage des maquettes, système de coordonnées et niveau zéro communs, nommage des fichiers et des objets, <strong>niveaux de développement</strong> attendus à chaque phase, fréquence des échanges. Le maître d'ouvrage exprime ses attentes dans un <strong>cahier des charges BIM</strong>.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le rôle de <strong>coordinateur BIM</strong> ou de modeleur est un débouché fréquent pour les titulaires d'un bac pro du secteur, souvent après un BTS. Les tâches concrètes : modéliser, vérifier les maquettes reçues, extraire des quantités, produire les plans à partir de la maquette, mettre à jour la maquette à chaque modification.</div>"
      },
      {
       "titre": "Niveaux de développement et usages de la maquette",
       "contenu": "<p>Le <strong>niveau de développement</strong> (souvent noté LOD) exprime le degré de précision géométrique et d'information des objets. Il est défini par la convention BIM pour chaque phase. Une échelle simplifiée est la suivante :</p>\n<table><thead><tr><th>Niveau</th><th>Exemple pour un mur extérieur</th></tr></thead><tbody>\n<tr><td>Faible (esquisse)</td><td>Volume générique d'épaisseur approximative</td></tr>\n<tr><td>Moyen (avant-projet)</td><td>Épaisseur réelle, composition globale, performance thermique</td></tr>\n<tr><td>Élevé (projet)</td><td>Couches détaillées (structure, isolant, parement), matériaux, références normatives</td></tr>\n<tr><td>Exécution / exploitation</td><td>Produit réellement posé, fabricant, date de pose, données d'entretien</td></tr>\n</tbody></table>\n<p>Les <strong>usages</strong> de la maquette se multiplient : production des plans, visualisation 3D pour le maître d'ouvrage, extraction des quantités, simulation thermique, synthèse des réseaux, planification (4D), suivi du coût (5D), puis exploitation et maintenance de l'ouvrage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler une maquette reçue avant d'en extraire des quantités. 1. Vérifier le point d'origine et les niveaux. 2. Vérifier que chaque objet est modélisé avec le bon outil (un mur avec l'outil mur, pas avec une dalle verticale), sinon il sera mal classé. 3. Vérifier les jonctions (murs qui se chevauchent, doublons). 4. Comparer quelques quantités-témoins à un calcul manuel (une surface de façade, un volume de dalle). 5. Signaler chaque anomalie par une remarque au format BCF et attendre la correction avant de chiffrer.</div>"
      },
      {
       "titre": "Cartouche, indices et diffusion des documents",
       "contenu": "<p>Chaque document graphique comporte un <strong>cartouche</strong> qui permet de l'identifier sans ambiguïté :</p>\n<ul>\n<li>nom de l'opération et adresse ;</li>\n<li>maître d'ouvrage et auteur du document (avec ses coordonnées) ;</li>\n<li>phase (APS, APD, PRO, EXE…) et lot éventuel ;</li>\n<li>titre du document (« Plan du R+1 », « Coupe AA ») ;</li>\n<li>échelle(s) et format ;</li>\n<li>numéro ou code du document ;</li>\n<li><strong>indice</strong> de révision, date et nature de la modification.</li>\n</ul>\n<p>Chaque modification d'un document diffusé entraîne un nouvel <strong>indice</strong> (A, B, C…) et une ligne dans le tableau des révisions, en précisant ce qui a changé. Les modifications peuvent être signalées sur le plan par un nuage et un repère.</p>\n<p>La <strong>diffusion</strong> se fait aujourd'hui par une <strong>plateforme collaborative</strong> (gestion électronique des documents) qui conserve les versions, envoie les notifications et trace qui a reçu quoi. Une liste des documents (bordereau de diffusion) récapitule pour chaque document son indice en vigueur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> construire d'après un plan à l'indice périmé est une erreur fréquente et coûteuse. Avant d'exploiter un plan, on vérifie son indice dans la liste des documents à jour.</div>"
      }
     ],
     "points_cles": [
      "De l'esquisse à l'exécution, l'échelle grandit et le niveau de détail augmente.",
      "Échelles usuelles : 1/200 plans d'ensemble, 1/100 permis et APD, 1/50 projet et exécution, 1/20 à 1/1 détails.",
      "Pièces graphiques du permis de maison : PCMI 1, 2, 3, 5, 6, 7, 8 ; la notice PCMI 4 est écrite.",
      "Les plans du permis doivent être cohérents entre eux et avec le règlement d'urbanisme.",
      "Le BIM est une méthode collaborative fondée sur une maquette numérique renseignée.",
      "Échanges en formats ouverts : IFC pour les maquettes, BCF pour les remarques.",
      "La convention BIM fixe rôles, formats, nommage, coordonnées et niveaux de développement.",
      "Cartouche complet et indice de révision à jour sur chaque document diffusé."
     ],
     "lexique": [
      {
       "terme": "APS / APD",
       "def": "Avant-projet sommaire et avant-projet définitif, phases de mise au point de la conception."
      },
      {
       "terme": "DCE",
       "def": "Dossier de consultation des entreprises, établi à l'issue de la phase projet."
      },
      {
       "terme": "Échelle",
       "def": "Rapport entre une dimension dessinée et la dimension réelle correspondante."
      },
      {
       "terme": "Plan de masse",
       "def": "Plan représentant la construction dans son terrain avec ses accès et ses abords."
      },
      {
       "terme": "Document graphique d'insertion",
       "def": "Pièce du permis montrant le projet dans son environnement."
      },
      {
       "terme": "BIM",
       "def": "Méthode de travail collaboratif fondée sur une maquette numérique renseignée."
      },
      {
       "terme": "IFC",
       "def": "Format ouvert et normalisé d'échange de maquettes numériques."
      },
      {
       "terme": "BCF",
       "def": "Format d'échange des remarques et conflits liés à des objets d'une maquette."
      },
      {
       "terme": "Convention BIM",
       "def": "Document fixant les règles de travail collaboratif en BIM sur une opération."
      },
      {
       "terme": "Synthèse",
       "def": "Superposition des maquettes ou plans des différents lots pour détecter et résoudre les conflits."
      },
      {
       "terme": "Indice",
       "def": "Lettre ou numéro identifiant la version d'un document après modification."
      }
     ]
    },
    {
     "id": "bteb-pieces-ecrites",
     "titre": "Rédiger les pièces écrites techniques",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Distinguer notice descriptive, descriptif sommaire, CCTP et documents de prix",
      "Identifier les textes de référence d'un ouvrage : normes, NF DTU, avis techniques, Eurocodes",
      "Structurer un CCTP par lot, par chapitre et par article",
      "Rédiger un article de CCTP clair, complet et vérifiable",
      "Assurer la cohérence entre plans, CCTP et décomposition des prix"
     ],
     "sections": [
      {
       "titre": "Les différentes pièces écrites d'un projet",
       "contenu": "<p>Les plans montrent la géométrie ; les <strong>pièces écrites</strong> disent avec quoi et comment construire. Elles évoluent avec les phases du projet :</p>\n<table><thead><tr><th>Document</th><th>Phase</th><th>Contenu</th></tr></thead><tbody>\n<tr><td>Notice descriptive sommaire</td><td>Esquisse, APS</td><td>Principes constructifs et grandes options, en quelques pages</td></tr>\n<tr><td>Descriptif sommaire</td><td>APD</td><td>Description par lot des ouvrages et des matériaux, sans détail d'exécution</td></tr>\n<tr><td>CCTP</td><td>PRO, DCE</td><td>Description complète et précise des ouvrages de chaque lot, contractuelle</td></tr>\n<tr><td>Cadre de DPGF ou de DQE</td><td>PRO, DCE</td><td>Liste des ouvrages, unités et quantités (DQE) à chiffrer par les entreprises</td></tr>\n<tr><td>Notice de sécurité, notice d'accessibilité</td><td>Permis, autorisation de travaux</td><td>Justification des dispositions prises pour un ERP</td></tr>\n<tr><td>Notice descriptive de vente</td><td>Vente en l'état futur d'achèvement</td><td>Description des prestations vendues à l'acquéreur, selon un modèle réglementaire</td></tr>\n</tbody></table>\n<p>Le <strong>cahier des clauses techniques particulières</strong> (CCTP) est le document central du dossier de consultation. Il est rédigé par le maître d'œuvre, souvent par l'économiste de la construction, qui coordonne les apports des bureaux d'études techniques.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le CCTP est une pièce contractuelle. Ce qui n'y est pas écrit ou dessiné n'est en principe pas dû par l'entreprise dans un marché forfaitaire, sauf si l'ouvrage est indispensable au parfait achèvement et que l'entreprise pouvait le déceler.</div>"
      },
      {
       "titre": "Le référentiel normatif et technique",
       "contenu": "<p>Un CCTP ne réécrit pas toutes les règles de l'art : il renvoie à des textes de référence et ne précise que ce qui est particulier au projet. Les principaux textes sont :</p>\n<ul>\n<li>les <strong>textes réglementaires</strong> (lois, décrets, arrêtés), obligatoires : code de la construction et de l'habitation, code du travail, code de l'urbanisme, réglementations thermique, acoustique, incendie, accessibilité ;</li>\n<li>les <strong>normes</strong> (NF, EN, ISO), d'application volontaire sauf si un texte les rend obligatoires ou si le marché y fait référence, ce qui les rend alors contractuelles ;</li>\n<li>les <strong>NF DTU</strong>, normes qui décrivent l'exécution des techniques courantes, avec en général un cahier des clauses techniques types, des critères de choix des matériaux et un cahier des clauses administratives spéciales types ;</li>\n<li>les <strong>Eurocodes</strong>, normes de calcul des structures ;</li>\n<li>les <strong>avis techniques</strong> et documents techniques d'application, pour les procédés innovants ;</li>\n<li>les <strong>règles professionnelles</strong> et recommandations des organismes professionnels.</li>\n</ul>\n<p>Les produits eux-mêmes sont caractérisés par leur <strong>marquage CE</strong> (fondé sur une déclaration des performances du fabricant) et, éventuellement, par des <strong>certifications</strong> volontaires qui garantissent par un contrôle extérieur les performances annoncées.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> citer une norme ou un DTU sans indiquer sa version, ou citer un document remplacé, crée une ambiguïté. Le CCTP précise que s'appliquent les textes en vigueur à la date de remise des offres (ou à une date fixée), et le rédacteur vérifie que les références citées existent toujours.</div>"
      },
      {
       "titre": "Structure d'un CCTP",
       "contenu": "<p>Un CCTP est organisé par <strong>lots</strong>, chacun correspondant en général à un corps d'état (terrassement, gros œuvre, charpente, couverture, menuiseries extérieures, plâtrerie, électricité…). Chaque lot comporte :</p>\n<ol>\n<li>des <strong>généralités</strong> : objet du lot, limites de prestations et interfaces avec les autres lots, textes de référence, documents à fournir par l'entreprise (plans d'exécution, fiches techniques, échantillons), essais et contrôles, nettoyage et gestion des déchets ;</li>\n<li>la <strong>description des matériaux</strong> et de leurs performances ;</li>\n<li>la <strong>description des ouvrages</strong>, article par article, dans un ordre logique (souvent l'ordre d'exécution) ;</li>\n<li>éventuellement des <strong>variantes</strong> ou options demandées.</li>\n</ol>\n<p>La <strong>numérotation</strong> des articles du CCTP doit être identique à celle du cadre de décomposition des prix. Ainsi, l'article « 3.4.2 Doublage thermique des murs de façade » se retrouve sous le même numéro dans la DPGF, avec son unité et sa quantité. Cette correspondance permet aux entreprises de chiffrer sans oubli et au maître d'œuvre de comparer les offres ligne à ligne.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les économistes utilisent des bibliothèques d'articles types (logiciels de rédaction de CCTP ou bases internes) qu'ils adaptent au projet. Le risque est de laisser dans le document des articles sans objet (« ascenseur » dans une maison sans ascenseur) ou d'oublier d'adapter une performance : toute bibliothèque doit être relue ligne par ligne.</div>"
      },
      {
       "titre": "Rédiger un article de CCTP",
       "contenu": "<p>Un article de CCTP bien rédigé répond aux questions : <strong>quoi, avec quoi, comment, où, combien de fois et jusqu'où</strong>. On y trouve généralement :</p>\n<ul>\n<li>l'intitulé de l'ouvrage ;</li>\n<li>la nature et les caractéristiques des matériaux (type, dimensions, performances, classement) ;</li>\n<li>le mode de mise en œuvre, par renvoi au DTU et précisions particulières ;</li>\n<li>les prestations comprises (accessoires, fixations, finitions, raccords, protections) ;</li>\n<li>la localisation précise (niveaux, locaux, repères des plans) ;</li>\n<li>éventuellement le mode de métré ou l'unité de compte.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger un article de doublage. Intitulé : « Doublage thermique des murs de façade ». Matériaux : complexe isolant collé composé d'une plaque de plâtre de 13 mm et d'un isolant en polystyrène expansé d'épaisseur 120 mm, résistance thermique R ≥ 3,75 m²·K/W, sous certification. Mise en œuvre : selon le NF DTU 25.42 et l'avis technique éventuel du procédé, collage par plots de mortier adhésif, joints traités par bande et enduit. Prestations comprises : traitement des angles par cornières, retours en tableaux de baies avec isolant d'épaisseur adaptée, calfeutrement en pied et en tête, réservations pour les boîtiers électriques étanches à l'air fournis par le lot électricité. Localisation : face intérieure de tous les murs de façade, du rez-de-chaussée au R+1, selon les plans indice B. Unité : m², surfaces mesurées baies déduites.</div>\n<p>On emploie des formulations <strong>impératives et vérifiables</strong> : « l'isolant aura une résistance thermique R ≥ 3,75 m²·K/W » plutôt que « un isolant performant sera posé ». On évite les mots vagues (« soigné », « de qualité », « suivant les règles de l'art ») s'ils ne sont pas précisés par une référence.</p>"
      },
      {
       "titre": "La clause d'équivalence et les marques",
       "contenu": "<p>En marché public, le principe d'égalité de traitement interdit en règle générale de faire référence à une marque ou à un produit particulier, sauf si l'objet du marché le justifie ou s'il est impossible de décrire autrement le produit attendu. Dans ce cas, la référence est obligatoirement accompagnée de la mention « <strong>ou équivalent</strong> ».</p>\n<p>Pour que l'équivalence soit vérifiable, le CCTP doit décrire les <strong>performances</strong> attendues (résistance thermique, classement au feu, classement d'usage, durabilité, aspect) plutôt qu'un produit. L'entreprise qui propose un produit équivalent doit alors en apporter la preuve (fiche technique, déclaration des performances, certificat).</p>\n<p>Dans les marchés privés, la référence à des marques est libre, mais la logique de performance reste la meilleure pratique : elle facilite la mise en concurrence et le remplacement d'un produit indisponible.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> accepter un produit présenté comme « équivalent » sans comparer ses performances une à une peut faire perdre la conformité réglementaire (thermique, incendie, acoustique). La vérification se fait par écrit, au moyen d'un tableau comparatif signé.</div>"
      },
      {
       "titre": "Assurer la cohérence du dossier",
       "contenu": "<p>Les incohérences entre pièces écrites et pièces graphiques sont la principale source de litiges. Avant la diffusion du DCE, un contrôle croisé s'impose :</p>\n<table><thead><tr><th>Vérification</th><th>Question à se poser</th></tr></thead><tbody>\n<tr><td>Plans / CCTP</td><td>Chaque ouvrage dessiné est-il décrit ? Chaque ouvrage décrit est-il localisable sur un plan ?</td></tr>\n<tr><td>CCTP / DPGF</td><td>Même numérotation, mêmes intitulés, unités cohérentes, aucun article sans ligne de prix ?</td></tr>\n<tr><td>CCTP / études techniques</td><td>Performances thermiques, acoustiques, au feu conformes aux études ?</td></tr>\n<tr><td>Entre lots</td><td>Chaque interface est-elle attribuée à un seul lot, sans doublon ni oubli ?</td></tr>\n<tr><td>CCTP / CCAP</td><td>Pas de clause administrative (pénalités, délais) cachée dans le CCTP en contradiction avec le CCAP ?</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> organiser la relecture croisée. 1. Imprimer ou afficher le plan d'un niveau. 2. Surligner chaque ouvrage du plan au fur et à mesure qu'on retrouve son article dans le CCTP. 3. Noter dans un tableau les ouvrages non trouvés et les articles sans localisation. 4. Recommencer pour chaque lot et chaque niveau. 5. Corriger, puis faire relire par une autre personne : on voit moins bien ses propres erreurs.</div>\n<p>Pendant la consultation, les questions des entreprises révèlent souvent des imprécisions. Les réponses sont transmises à tous les candidats, pour respecter l'égalité de traitement, sous forme de compléments au dossier.</p>"
      }
     ],
     "points_cles": [
      "Les pièces écrites se précisent avec les phases : notice, descriptif sommaire, puis CCTP.",
      "Le CCTP est contractuel ; il renvoie aux textes de référence et précise ce qui est propre au projet.",
      "Références : textes réglementaires, normes, NF DTU, Eurocodes, avis techniques, règles professionnelles.",
      "Un CCTP s'organise par lots : généralités, matériaux, ouvrages, variantes.",
      "La numérotation du CCTP et de la décomposition des prix est identique.",
      "Un article précise matériau, performance, mise en œuvre, prestations comprises, localisation, unité.",
      "En marché public, une référence de marque s'accompagne de « ou équivalent » ; on décrit des performances.",
      "Un contrôle croisé plans, CCTP, DPGF et études évite oublis, doublons et contradictions."
     ],
     "lexique": [
      {
       "terme": "CCTP",
       "def": "Cahier des clauses techniques particulières : description contractuelle des ouvrages d'un marché."
      },
      {
       "terme": "Lot",
       "def": "Partie des travaux confiée à une entreprise, correspondant en général à un corps d'état."
      },
      {
       "terme": "Descriptif sommaire",
       "def": "Description des ouvrages par lot en phase avant-projet, sans détail d'exécution."
      },
      {
       "terme": "Marquage CE",
       "def": "Marquage réglementaire attestant que le fabricant a déclaré les performances de son produit selon une norme harmonisée."
      },
      {
       "terme": "Déclaration des performances",
       "def": "Document du fabricant indiquant les performances essentielles d'un produit marqué CE."
      },
      {
       "terme": "Certification",
       "def": "Attestation par un organisme tiers que les performances d'un produit sont conformes et contrôlées."
      },
      {
       "terme": "Ou équivalent",
       "def": "Mention obligatoire accompagnant une référence de marque dans un marché public."
      },
      {
       "terme": "Interface",
       "def": "Limite de prestation entre deux lots, à attribuer clairement."
      },
      {
       "terme": "Bibliothèque d'articles",
       "def": "Ensemble d'articles types de CCTP réutilisés et adaptés d'un projet à l'autre."
      },
      {
       "terme": "Relecture croisée",
       "def": "Contrôle de cohérence entre plans, CCTP, décomposition des prix et études."
      }
     ]
    },
    {
     "id": "bteb-b-culture-architecturale",
     "titre": "Repères de culture architecturale et urbaine",
     "niveau": "1re",
     "options": [
      "b"
     ],
     "duree": 40,
     "objectifs": [
      "Situer les grandes périodes de l'architecture en France et leurs caractéristiques constructives",
      "Reconnaître les éléments de vocabulaire d'une façade et d'un édifice",
      "Relier les formes architecturales aux techniques et aux matériaux de leur époque",
      "Identifier les grands principes de l'architecture moderne et contemporaine",
      "Analyser un bâtiment existant pour concevoir une intervention respectueuse"
     ],
     "sections": [
      {
       "titre": "Pourquoi une culture architecturale ?",
       "contenu": "<p>L'assistant en architecture travaille rarement sur un terrain vierge. Il intervient dans des villes et des villages déjà construits, sur des bâtiments existants à transformer, à côté de monuments protégés. Comprendre l'architecture du passé permet de :</p>\n<ul>\n<li>dater approximativement un bâtiment et en déduire ses modes constructifs probables (murs en pierre, pans de bois, planchers bois, béton) ;</li>\n<li>concevoir une extension ou une surélévation qui dialogue avec l'existant ;</li>\n<li>dialoguer avec l'<strong>architecte des Bâtiments de France</strong> (ABF) dans les secteurs protégés ;</li>\n<li>enrichir ses propres propositions par des références.</li>\n</ul>\n<p>L'architecture répond toujours à trois exigences que l'on attribue traditionnellement à l'architecte romain Vitruve : la <strong>solidité</strong> (firmitas), l'<strong>utilité</strong> (utilitas) et la <strong>beauté</strong> (venustas). Chaque époque les a interprétées avec ses matériaux, ses techniques et ses valeurs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une forme architecturale n'est jamais gratuite : elle découle d'un usage, d'une technique constructive, d'un climat et d'une culture. Analyser un bâtiment, c'est retrouver ces raisons.</div>"
      },
      {
       "titre": "De l'Antiquité au gothique",
       "contenu": "<table><thead><tr><th>Période</th><th>Caractéristiques</th><th>Exemples en France</th></tr></thead><tbody>\n<tr><td>Antiquité gallo-romaine</td><td>Ordres d'architecture (colonnes, chapiteaux, entablements), arc en plein cintre, voûte, béton romain, grands équipements publics</td><td>Maison Carrée de Nîmes, pont du Gard, arènes d'Arles</td></tr>\n<tr><td>Roman (XIe-XIIe siècles)</td><td>Murs épais, petites ouvertures, voûtes en berceau, arcs en plein cintre, contreforts massifs</td><td>Basilique Sainte-Madeleine de Vézelay, abbatiale de Conques</td></tr>\n<tr><td>Gothique (XIIe-XVe siècles)</td><td>Arc brisé, voûte sur croisée d'ogives, arcs-boutants, murs allégés, grandes verrières</td><td>Cathédrales de Chartres, Amiens, Reims, Sainte-Chapelle</td></tr>\n</tbody></table>\n<p>Le passage du roman au gothique est un exemple parfait de lien entre technique et forme. La <strong>croisée d'ogives</strong> concentre les poussées de la voûte en quelques points ; les <strong>arcs-boutants</strong> reportent ces poussées vers l'extérieur ; les murs, déchargés de leur rôle porteur, peuvent s'ouvrir sur de vastes vitraux. La lumière devient l'élément majeur de l'édifice.</p>\n<p>L'architecture domestique de ces périodes utilise la pierre, la terre et surtout le <strong>pan de bois</strong> : ossature en bois remplie de torchis, de briques ou de plâtre, encore très présente dans de nombreuses villes (Rouen, Strasbourg, Troyes).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans la rénovation d'une maison à pans de bois, l'ossature est porteuse. Un projet qui prévoit d'ouvrir largement une façade doit d'abord faire analyser la structure, et le choix des enduits et isolants doit respecter le fonctionnement hygrométrique du bois (matériaux ouverts à la vapeur).</div>"
      },
      {
       "titre": "De la Renaissance au XIXe siècle",
       "contenu": "<p>À la <strong>Renaissance</strong> (XVIe siècle), les architectes redécouvrent l'Antiquité : symétrie, proportions, ordres superposés. Les châteaux de la Loire (Chambord) mêlent encore silhouettes médiévales et décor italien. L'architecture <strong>classique</strong> (XVIIe-XVIIIe siècles) impose ordre, symétrie et grandeur : château de Versailles, places royales (place des Vosges, place Vendôme), hôtels particuliers organisés entre cour et jardin.</p>\n<p>Le <strong>XIXe siècle</strong> est marqué par trois mouvements :</p>\n<ul>\n<li>l'<strong>éclectisme</strong>, qui reprend et mélange les styles du passé (néo-gothique, néo-renaissance) ;</li>\n<li>les <strong>transformations haussmanniennes</strong> de Paris (années 1850-1870) : percées rectilignes, immeubles alignés en pierre de taille, hauteur réglementée en fonction de la largeur de la rue, balcons filants aux 2e et 5e étages, combles mansardés. Ce modèle d'immeuble s'est diffusé dans de nombreuses villes ;</li>\n<li>l'<strong>architecture du fer et du verre</strong>, née de l'industrie : gares, halles, marchés couverts, grands magasins, tour Eiffel (1889).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> décrire une façade d'immeuble ancien. 1. Compter les niveaux et les travées (rangées verticales d'ouvertures). 2. Identifier la composition : soubassement (rez-de-chaussée, souvent commercial), corps (étages courants), couronnement (corniche, combles). 3. Relever les éléments de modénature : bandeaux, corniches, encadrements de baies, appuis, garde-corps. 4. Noter les matériaux (pierre, brique, enduit) et les couleurs. 5. Repérer les éléments répétitifs et les exceptions (balcon central, porte cochère). Cette analyse guide toute intervention : nouvelle baie alignée sur les travées existantes, devanture respectant le soubassement.</div>"
      },
      {
       "titre": "L'architecture moderne",
       "contenu": "<p>Au tournant du XXe siècle, l'<strong>Art nouveau</strong> (vers 1890-1910) cherche un style nouveau inspiré des formes végétales : entrées du métro parisien d'Hector Guimard, école de Nancy. L'<strong>Art déco</strong> (années 1920-1930) privilégie des formes géométriques et des ornements stylisés.</p>\n<p>Le <strong>mouvement moderne</strong> rompt avec l'ornement et revendique l'adéquation entre forme, fonction et technique. Le béton armé, mis au point au XIXe siècle et développé notamment par François Hennebique puis Auguste Perret, libère les façades. <strong>Le Corbusier</strong> formule en 1927 les « cinq points d'une architecture nouvelle » :</p>\n<ol>\n<li>les <strong>pilotis</strong>, qui soulèvent le bâtiment et libèrent le sol ;</li>\n<li>le <strong>toit-terrasse</strong> (toit-jardin) ;</li>\n<li>le <strong>plan libre</strong>, rendu possible par l'ossature poteaux-dalles ;</li>\n<li>la <strong>fenêtre en longueur</strong> ;</li>\n<li>la <strong>façade libre</strong>, indépendante de la structure.</li>\n</ol>\n<p>La villa Savoye à Poissy en est l'illustration. Après la Seconde Guerre mondiale, la <strong>reconstruction</strong> (Le Havre d'Auguste Perret, inscrit au patrimoine mondial) puis la construction massive des <strong>grands ensembles</strong> (années 1950-1970) appliquent les principes modernes à grande échelle, avec préfabrication lourde. Leurs limites (monofonctionnalité, isolement urbain, faible isolation) expliquent les vastes programmes de renouvellement urbain actuels.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les bâtiments des années 1950 à 1970 ont souvent des façades porteuses en béton, des balcons formant ponts thermiques et peuvent contenir de l'amiante. Leur rénovation énergétique demande un diagnostic préalable approfondi.</div>"
      },
      {
       "titre": "Tendances contemporaines",
       "contenu": "<p>L'architecture contemporaine est diverse, mais plusieurs tendances se dégagent, en lien avec les enjeux actuels :</p>\n<ul>\n<li>l'<strong>architecture bioclimatique</strong>, qui tire parti du climat local (orientation, inertie, ventilation naturelle, protections solaires) — en réalité une redécouverte de principes de l'architecture vernaculaire ;</li>\n<li>le retour des <strong>matériaux biosourcés et géosourcés</strong> : bois, paille, chanvre, terre crue, pierre massive ;</li>\n<li>la <strong>réhabilitation</strong> et la <strong>transformation</strong> plutôt que la démolition-reconstruction, pour préserver le carbone déjà investi dans les bâtiments ;</li>\n<li>la <strong>densification</strong> raisonnée des tissus existants (surélévations, extensions, comblement de dents creuses) pour limiter l'étalement urbain et l'artificialisation des sols ;</li>\n<li>la <strong>conception numérique</strong> et paramétrique, qui permet des formes complexes et une fabrication précise.</li>\n</ul>\n<p>Des architectes français ont reçu la plus haute distinction internationale, le prix Pritzker : Christian de Portzamparc (1994), Jean Nouvel (2008), et le duo Anne Lacaton et Jean-Philippe Vassal (2021), récompensé notamment pour ses transformations de grands ensembles sans démolition, en agrandissant les logements par des jardins d'hiver.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> constituer un carnet de références (photos, plans, coupes de projets intéressants classés par thème : extension bois, logement intermédiaire, réhabilitation) est une habitude professionnelle utile. On y puise des idées de dispositifs et l'on peut les montrer au client pour illustrer une intention.</div>"
      },
      {
       "titre": "Ville, tissu urbain et patrimoine protégé",
       "contenu": "<p>L'architecture s'inscrit dans un <strong>tissu urbain</strong> : organisation des rues, des îlots, des parcelles et des bâtiments. On distingue par exemple le tissu de centre ancien (parcelles étroites et profondes, bâti continu à l'alignement), le tissu pavillonnaire (maisons isolées au milieu de leur parcelle), les grands ensembles (barres et tours sur de vastes espaces ouverts), les zones d'activités.</p>\n<p>Les éléments les plus remarquables du patrimoine sont protégés :</p>\n<ul>\n<li>les <strong>monuments historiques</strong>, classés ou inscrits, dont les travaux sont strictement encadrés ;</li>\n<li>leurs <strong>abords</strong> : dans un périmètre délimité ou, à défaut, dans un rayon de 500 m et en covisibilité, les projets sont soumis à l'avis de l'ABF ;</li>\n<li>les <strong>sites patrimoniaux remarquables</strong>, qui couvrent des quartiers ou des villes entières, avec un plan de sauvegarde ou un plan de valorisation de l'architecture et du patrimoine.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser le contexte d'un projet d'extension en centre ancien. 1. Relever sur place ou sur photos les hauteurs, les rythmes de façades, les pentes et matériaux de toitures des constructions voisines. 2. Identifier les protections (périmètre de monument, site patrimonial) dans les documents d'urbanisme. 3. Repérer les règles propres au secteur (matériaux, couleurs, menuiseries). 4. Formuler un parti : s'inscrire dans la continuité (matériaux et proportions similaires) ou affirmer un contraste maîtrisé (matériau contemporain, volume simple). 5. Préparer les documents d'insertion qui permettront à l'ABF d'apprécier le projet.</div>"
      }
     ],
     "points_cles": [
      "Solidité, utilité, beauté : trois exigences constantes de l'architecture.",
      "Roman : murs épais et plein cintre ; gothique : croisée d'ogives, arcs-boutants, grandes verrières.",
      "Classicisme : symétrie et proportions ; XIXe : éclectisme, immeuble haussmannien, fer et verre.",
      "Les cinq points de Le Corbusier : pilotis, toit-terrasse, plan libre, fenêtre en longueur, façade libre.",
      "Les grands ensembles d'après-guerre font aujourd'hui l'objet de renouvellement urbain.",
      "Tendances contemporaines : bioclimatisme, biosourcés, réhabilitation, densification.",
      "Monuments historiques, abords et sites patrimoniaux remarquables impliquent l'avis de l'ABF.",
      "Analyser une façade : niveaux, travées, composition, modénature, matériaux."
     ],
     "lexique": [
      {
       "terme": "Croisée d'ogives",
       "def": "Voûte formée de deux arcs diagonaux qui se croisent, caractéristique du gothique."
      },
      {
       "terme": "Arc-boutant",
       "def": "Arc extérieur qui reporte la poussée d'une voûte vers un contrefort."
      },
      {
       "terme": "Pan de bois",
       "def": "Mur à ossature de bois dont les vides sont remplis de torchis, briques ou plâtre."
      },
      {
       "terme": "Travée",
       "def": "Rangée verticale d'ouvertures dans une façade, ou espace entre deux supports."
      },
      {
       "terme": "Modénature",
       "def": "Ensemble des moulures et éléments en relief qui animent une façade."
      },
      {
       "terme": "Comble mansardé",
       "def": "Comble à deux pentes par versant, la partie basse étant presque verticale."
      },
      {
       "terme": "Plan libre",
       "def": "Organisation intérieure indépendante de la structure porteuse, rendue possible par l'ossature."
      },
      {
       "terme": "Architecture vernaculaire",
       "def": "Architecture traditionnelle locale, adaptée au climat et aux matériaux disponibles."
      },
      {
       "terme": "ABF",
       "def": "Architecte des Bâtiments de France, chargé de veiller à la qualité des projets dans les espaces protégés."
      },
      {
       "terme": "Site patrimonial remarquable",
       "def": "Ville ou quartier dont la conservation présente un intérêt public, soumis à des règles spécifiques."
      }
     ]
    },
    {
     "id": "bteb-b-programme-esquisse",
     "titre": "Du programme à l'esquisse : concevoir un projet architectural",
     "niveau": "1re-Tle",
     "options": [
      "b"
     ],
     "duree": 45,
     "objectifs": [
      "Analyser un programme de construction et en extraire besoins, surfaces et liaisons",
      "Traduire un programme en organigramme fonctionnel et en schémas d'organisation",
      "Prendre en compte le site : orientation, accès, topographie, vues, règles d'urbanisme",
      "Formuler un parti architectural et le développer en esquisse",
      "Vérifier une esquisse par rapport au programme et à la réglementation"
     ],
     "sections": [
      {
       "titre": "La démarche de conception",
       "contenu": "<p>La <strong>conception architecturale</strong> n'est pas une suite linéaire d'étapes : c'est un va-et-vient entre analyse et proposition, entre le plan et le volume, entre le tout et le détail. On peut cependant la décrire en grandes étapes :</p>\n<ol>\n<li><strong>analyser</strong> le programme et le site ;</li>\n<li><strong>organiser</strong> les fonctions (organigramme, schémas) ;</li>\n<li><strong>formuler un parti</strong> : l'idée directrice du projet ;</li>\n<li><strong>développer</strong> l'esquisse en plans, coupes, volumes ;</li>\n<li><strong>vérifier</strong> la réponse au programme, à la réglementation et au budget ;</li>\n<li><strong>présenter</strong> le projet au maître d'ouvrage.</li>\n</ol>\n<p>En France, le <strong>recours à un architecte</strong> est obligatoire pour établir le projet architectural faisant l'objet d'une demande de permis de construire, sauf exceptions, dont la principale concerne les personnes physiques qui construisent pour elles-mêmes une construction dont la surface de plancher ne dépasse pas 150 m². L'assistant en architecture travaille sous la responsabilité de l'architecte, qui signe le projet.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'esquisse n'est pas un dessin approximatif : c'est une proposition cohérente qui répond déjà au programme, au site et aux règles. Elle sera précisée ensuite, mais ses choix fondamentaux (implantation, organisation, volumes) seront difficiles à remettre en cause.</div>"
      },
      {
       "titre": "Analyser le programme",
       "contenu": "<p>Le <strong>programme</strong> exprime les besoins du maître d'ouvrage. Pour une maison individuelle, il peut tenir en une conversation et une liste ; pour un équipement public, c'est un document de plusieurs dizaines de pages. Dans tous les cas, l'analyse consiste à extraire :</p>\n<ul>\n<li>la liste des <strong>espaces</strong> demandés et leurs <strong>surfaces</strong> ;</li>\n<li>les <strong>liaisons</strong> entre espaces : directes (porte commune), proches, à éloigner (chambre et séjour bruyant, cuisine et local poubelles) ;</li>\n<li>les exigences particulières de chaque espace : lumière naturelle, orientation souhaitée, hauteur, acoustique, accessibilité ;</li>\n<li>les <strong>contraintes</strong> générales : budget, délai, performance énergétique, image souhaitée, évolutivité.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> tableau d'analyse d'un programme de maison. 1. Lister chaque espace : entrée 6 m², séjour-cuisine 40 m², cellier 5 m², 3 chambres de 11 à 13 m², salle d'eau 6 m², WC 2 m², garage 18 m². 2. Ajouter une ligne « circulations », souvent estimée à 10 à 15 % des surfaces utiles. 3. Calculer le total : surfaces des pièces + circulations, puis majorer de l'épaisseur des murs et cloisons (de l'ordre de 10 à 15 % pour passer à une surface de plancher). 4. Comparer à la surface constructible et au budget. 5. Pour chaque espace, noter dans une colonne l'orientation souhaitée (séjour au sud, cellier au nord) et dans une autre les liaisons. Ce tableau devient l'outil de vérification de toutes les étapes suivantes.</div>"
      },
      {
       "titre": "De l'organigramme au schéma d'organisation",
       "contenu": "<p>L'<strong>organigramme fonctionnel</strong> représente les espaces par des cercles ou des rectangles proportionnels à leur surface, et leurs liaisons par des traits (trait épais pour une liaison directe, trait fin pour une proximité, trait barré pour une séparation souhaitée). Il ne s'occupe pas encore de la forme du bâtiment.</p>\n<p>On regroupe ensuite les espaces en <strong>zones</strong> :</p>\n<ul>\n<li>zone <strong>jour</strong> (accueil, séjour, cuisine), ouverte et accessible ;</li>\n<li>zone <strong>nuit</strong> (chambres, salles d'eau), plus intime et calme ;</li>\n<li>zone de <strong>service</strong> (cellier, garage, local technique) ;</li>\n<li>pour un équipement : zone publique, zone réservée au personnel, zone technique, avec des circulations distinctes si nécessaire.</li>\n</ul>\n<p>Le <strong>schéma d'organisation</strong> place ces zones sur le terrain, en tenant compte de l'accès, de l'orientation et des vues. On teste plusieurs schémas (plan en L, en longueur, compact, sur deux niveaux) avant d'en retenir un.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une erreur fréquente est de dessiner trop vite un plan détaillé à partir d'une seule idée. Tester au moins deux ou trois organisations différentes à petite échelle, en quelques traits, permet souvent de trouver une solution bien meilleure que la première intuition.</div>"
      },
      {
       "titre": "Prendre en compte le site",
       "contenu": "<p>L'analyse du <strong>site</strong> complète celle du programme. Elle porte sur :</p>\n<table><thead><tr><th>Élément</th><th>Questions</th></tr></thead><tbody>\n<tr><td>Orientation et ensoleillement</td><td>Où est le sud ? Quels masques (bâtiments, arbres, relief) font de l'ombre et à quelle saison ?</td></tr>\n<tr><td>Vents dominants, bruit</td><td>D'où viennent les vents froids, les nuisances sonores (route, voie ferrée) ?</td></tr>\n<tr><td>Topographie</td><td>Le terrain est-il en pente ? Où sont les points haut et bas ? Comment s'écoulent les eaux ?</td></tr>\n<tr><td>Accès et réseaux</td><td>Par où entrent piétons et véhicules ? Où sont les réseaux (eau, électricité, assainissement) ?</td></tr>\n<tr><td>Vues et vis-à-vis</td><td>Quelles vues valoriser ? Quels vis-à-vis éviter ?</td></tr>\n<tr><td>Végétation et sol</td><td>Arbres à conserver, nature du sol (étude géotechnique) ?</td></tr>\n<tr><td>Règles d'urbanisme</td><td>Zone du PLU, reculs, hauteurs, emprise, aspect extérieur, stationnement, servitudes, risques naturels</td></tr>\n</tbody></table>\n<p>Ces informations sont synthétisées sur un <strong>plan d'analyse du site</strong> au 1/200 ou au 1/500, annoté : flèche du nord, course du soleil, vents, accès, zones constructibles après application des reculs, vues.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant la première esquisse, l'agence rassemble les documents de base : plan cadastral, relevé topographique du géomètre, extraits du PLU, servitudes, photos du terrain et de ses abords. Une visite sur place reste irremplaçable pour sentir la lumière, le bruit et les vues.</div>"
      },
      {
       "titre": "Le parti architectural et l'esquisse",
       "contenu": "<p>Le <strong>parti architectural</strong> est l'idée directrice du projet, qui répond de façon synthétique au programme et au site. Il peut s'exprimer en une phrase : « une maison en longueur, adossée à la limite nord, toutes les pièces de vie ouvertes au sud sur le jardin » ; « deux volumes reliés par une entrée vitrée, l'un pour le jour, l'autre pour la nuit » ; « un bâtiment compact sur deux niveaux pour préserver les arbres existants ».</p>\n<p>L'<strong>esquisse</strong> développe ce parti en documents :</p>\n<ul>\n<li>un plan masse montrant l'implantation, les accès, les espaces extérieurs ;</li>\n<li>des plans de niveaux au 1/100 ou au 1/200, avec les surfaces ;</li>\n<li>au moins une coupe, qui montre le rapport au sol, les hauteurs et la lumière ;</li>\n<li>des volumes ou croquis d'ambiance pour faire comprendre l'aspect extérieur.</li>\n</ul>\n<p>Le parti doit rester lisible à toutes les étapes suivantes. Lorsqu'une contrainte nouvelle apparaît (étude de sol défavorable, demande supplémentaire du client, remarque du service instructeur), on cherche d'abord une solution qui préserve l'idée directrice, plutôt que de la remettre en cause pièce par pièce. Un projet qui perd son parti au fil des modifications devient confus, plus cher et moins agréable à vivre. Il est donc utile de noter le parti en une phrase dans le dossier du projet, pour pouvoir s'y référer.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> passer du schéma au plan d'esquisse. 1. Choisir une trame de dimensionnement (par exemple des portées de 4 à 5 m, compatibles avec des planchers courants). 2. Placer d'abord les grands espaces (séjour) selon l'orientation choisie. 3. Regrouper les pièces humides (cuisine, salle d'eau, WC, cellier) pour simplifier les réseaux. 4. Dessiner les circulations les plus courtes possibles. 5. Superposer les niveaux : murs porteurs, gaines et escalier doivent se correspondre d'un étage à l'autre. 6. Calculer les surfaces et les comparer au tableau du programme.</div>"
      },
      {
       "titre": "Vérifier l'esquisse",
       "contenu": "<p>Avant de présenter l'esquisse, on vérifie systématiquement :</p>\n<ul>\n<li><strong>le programme</strong> : tous les espaces sont présents, avec des surfaces conformes (tolérance à fixer avec le client), les liaisons demandées sont respectées ;</li>\n<li><strong>l'urbanisme</strong> : implantation par rapport aux limites et aux voies, hauteur, emprise au sol, aspect, stationnement, surface de plancher et choix de l'autorisation (déclaration préalable ou permis de construire) ;</li>\n<li><strong>l'accessibilité</strong> : cheminement depuis la voie, largeurs de passage, espaces de manœuvre, selon le type de bâtiment ;</li>\n<li><strong>la faisabilité constructive</strong> : portées raisonnables, descente des porteurs, escaliers réalistes, hauteurs suffisantes ;</li>\n<li><strong>la performance</strong> : compacité, orientation des baies, protections solaires possibles ;</li>\n<li><strong>le budget</strong> : une estimation au ratio, réalisée avec l'économiste.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la surface de plancher calculée sur l'esquisse détermine des seuils importants (recours à l'architecte, type d'autorisation, taxes). Elle doit être calculée selon la définition du code de l'urbanisme et non estimée « à la louche ».</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne esquisse se reconnaît à sa clarté : on peut l'expliquer en une phrase (le parti), elle répond au programme, elle tire parti du site, elle respecte les règles et elle est constructible dans le budget.</div>"
      }
     ],
     "points_cles": [
      "Conception : analyser, organiser, formuler un parti, développer, vérifier, présenter.",
      "Le recours à l'architecte est obligatoire pour un permis, sauf notamment pour une personne physique construisant au plus 150 m² de surface de plancher.",
      "Le tableau d'analyse du programme liste espaces, surfaces, liaisons, orientations et exigences.",
      "L'organigramme fonctionnel représente espaces et liaisons sans encore de forme.",
      "Zonage jour, nuit, service ; tester plusieurs schémas d'organisation.",
      "L'analyse du site couvre orientation, vents, bruit, topographie, accès, vues, sol et urbanisme.",
      "Le parti architectural s'énonce en une phrase et guide l'esquisse.",
      "L'esquisse se vérifie : programme, urbanisme, accessibilité, constructibilité, performance, budget."
     ],
     "lexique": [
      {
       "terme": "Programme",
       "def": "Document exprimant les besoins, les surfaces, les exigences et le budget du maître d'ouvrage."
      },
      {
       "terme": "Organigramme fonctionnel",
       "def": "Schéma représentant les espaces d'un programme et leurs liaisons."
      },
      {
       "terme": "Zonage",
       "def": "Regroupement des espaces par grandes fonctions (jour, nuit, service)."
      },
      {
       "terme": "Schéma d'organisation",
       "def": "Placement des zones du programme sur le terrain, avant le dessin du plan."
      },
      {
       "terme": "Parti architectural",
       "def": "Idée directrice qui structure la réponse au programme et au site."
      },
      {
       "terme": "Esquisse",
       "def": "Première phase de conception aboutissant à une proposition cohérente d'implantation, d'organisation et de volumes."
      },
      {
       "terme": "Masque solaire",
       "def": "Obstacle (bâtiment, relief, végétation) qui porte ombre sur le projet."
      },
      {
       "terme": "Trame",
       "def": "Grille de dimensionnement qui ordonne les porteurs et les espaces."
      },
      {
       "terme": "Circulations",
       "def": "Espaces servant à se déplacer entre les pièces (couloirs, dégagements, escaliers)."
      },
      {
       "terme": "Plan d'analyse du site",
       "def": "Plan annoté synthétisant les données du terrain et de son environnement."
      }
     ]
    },
    {
     "id": "bteb-b-dimensionner-espaces",
     "titre": "Dimensionner les espaces, les escaliers et les circulations",
     "niveau": "1re-Tle",
     "options": [
      "b"
     ],
     "duree": 45,
     "objectifs": [
      "Dimensionner une pièce à partir de son mobilier et de ses usages",
      "Appliquer les règles d'ergonomie et d'accessibilité aux espaces de vie",
      "Calculer un escalier : hauteur et giron des marches, loi de Blondel, échappée, trémie",
      "Dimensionner les circulations et les dégagements",
      "Établir un tableau des surfaces conforme au programme"
     ],
     "sections": [
      {
       "titre": "Partir du corps et du mobilier",
       "contenu": "<p>Une pièce ne se dimensionne pas au hasard : elle doit accueillir le <strong>mobilier</strong> nécessaire à son usage et les <strong>espaces de dégagement</strong> qui permettent de l'utiliser (ouvrir une porte d'armoire, passer autour d'un lit, s'asseoir à table). Cette approche s'appelle l'<strong>ergonomie</strong> des espaces.</p>\n<table><thead><tr><th>Élément</th><th>Dimensions courantes</th><th>Dégagement utile</th></tr></thead><tbody>\n<tr><td>Lit double</td><td>1,40 × 1,90 m ou 1,60 × 2,00 m</td><td>Passage de 0,60 à 0,90 m sur les côtés et au pied</td></tr>\n<tr><td>Lit simple</td><td>0,90 × 1,90 m</td><td>Passage de 0,60 m minimum</td></tr>\n<tr><td>Table pour 4 personnes</td><td>environ 0,80 × 1,20 m</td><td>0,70 à 0,90 m autour pour reculer les chaises</td></tr>\n<tr><td>Canapé 3 places</td><td>environ 0,90 × 2,00 m</td><td>Circulation de 0,80 à 0,90 m devant</td></tr>\n<tr><td>Plan de travail de cuisine</td><td>Profondeur 0,60 m, hauteur 0,85 à 0,95 m</td><td>1,20 m entre deux rangées de meubles</td></tr>\n<tr><td>Armoire, placard</td><td>Profondeur 0,60 m</td><td>Dégagement égal à la largeur des portes battantes</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dimensionner une chambre double. 1. Lit 1,60 × 2,00 m placé tête contre un mur. 2. Passages de 0,70 m de chaque côté et de 0,90 m au pied (ce dernier dimensionné pour circuler devant un placard). 3. Largeur minimale : 0,70 + 1,60 + 0,70 = 3,00 m. 4. Longueur : 2,00 + 0,90 + 0,60 (placard) = 3,50 m. 5. Surface : 3,00 × 3,50 = 10,50 m², conforme à une chambre de 10 à 12 m². Si la chambre doit être adaptée à une personne en fauteuil roulant, on prévoit les espaces de manœuvre réglementaires, ce qui augmente la surface.</div>"
      },
      {
       "titre": "Les exigences réglementaires des logements",
       "contenu": "<p>Le dimensionnement des logements doit respecter plusieurs textes :</p>\n<ul>\n<li>les <strong>caractéristiques de décence</strong> d'un logement mis en location : au moins une pièce principale de 9 m² avec une hauteur sous plafond d'au moins 2,20 m, ou un volume habitable d'au moins 20 m³ ;</li>\n<li>les règles de construction du code de la construction et de l'habitation (hauteur sous plafond, éclairement naturel des pièces principales, ventilation) ;</li>\n<li>les règles d'<strong>accessibilité</strong> des logements neufs (selon le type d'opération), qui imposent notamment :\n<ul>\n<li>dans chaque logement accessible, une chambre et un cabinet d'aisances (ou une salle d'eau) permettant les espaces de manœuvre et d'usage requis ;</li>\n<li>des portes avec un passage suffisant (de l'ordre de 0,83 m pour la porte d'entrée et 0,77 m pour les portes intérieures) ;</li>\n<li>un cercle de rotation de 1,50 m dans certaines pièces, et des espaces d'usage de 0,80 × 1,30 m devant les équipements ;</li>\n</ul></li>\n<li>les règles de <strong>sécurité incendie</strong> pour les immeubles collectifs (dégagements, distances aux escaliers).</li>\n</ul>\n<p>Depuis les évolutions récentes de la réglementation, certaines salles d'eau peuvent être rendues adaptables par des travaux simples ultérieurs : le plan doit alors montrer à la fois l'état livré et l'état adapté.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les valeurs d'accessibilité dépendent du type de bâtiment (maison individuelle, logement collectif, ERP), du caractère neuf ou existant, et ont été modifiées à plusieurs reprises. Pour un projet réel, on lit l'arrêté en vigueur pour le type d'opération concerné.</div>"
      },
      {
       "titre": "Calculer un escalier",
       "contenu": "<p>Un escalier se caractérise par :</p>\n<ul>\n<li>la <strong>hauteur à franchir</strong> H, de sol fini à sol fini ;</li>\n<li>la <strong>hauteur de marche</strong> h (ou contremarche) ;</li>\n<li>le <strong>giron</strong> g : profondeur utile de la marche, mesurée sur la ligne de foulée (à environ 0,50 m de la main courante pour un escalier tournant) ;</li>\n<li>l'<strong>emmarchement</strong> : largeur de l'escalier ;</li>\n<li>l'<strong>échappée</strong> : hauteur libre au-dessus des marches, mesurée verticalement depuis le nez de marche jusqu'au plafond ou à la trémie.</li>\n</ul>\n<p>Le confort de marche est donné par la <strong>loi de Blondel</strong> : 2h + g doit être compris entre 60 et 64 cm (valeur correspondant à la longueur moyenne d'un pas). Les valeurs courantes en habitation sont une hauteur de marche de 16 à 18 cm et un giron de 25 à 30 cm ; les escaliers d'ERP sont plus doux et soumis à des règles spécifiques d'accessibilité et de sécurité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un escalier droit pour un étage de 2,72 m (sol fini à sol fini).<br>1. Nombre de hauteurs de marche avec h ≈ 17 cm : 272 / 17 = 16. On retient 16 hauteurs : h = 272 / 16 = 17,0 cm.<br>2. Blondel : g = 63 − 2 × 17 = 29 cm, soit 2h + g = 63 cm.<br>3. Nombre de girons : 16 − 1 = 15 (la dernière marche est le palier d'arrivée).<br>4. Longueur de reculement : 15 × 0,29 = 4,35 m.<br>5. Échappée : le plancher haut a 0,25 m d'épaisseur totale, sa sous-face est donc à 2,72 − 0,25 = 2,47 m au-dessus du sol bas. Au-dessus de la marche n (nez à n × 0,17 m), la hauteur libre sous dalle vaut 2,47 − n × 0,17. Pour une échappée de 2,00 m, il faut 2,47 − n × 0,17 ≥ 2,00, soit n ≤ 2,7 : seules les deux premières marches peuvent rester sous la dalle.<br>6. Longueur de trémie : le bord de trémie se place au droit du nez de la 3e marche, à 2 × 0,29 = 0,58 m du premier nez ; l'arrivée est à 4,35 m. Trémie ≈ 4,35 − 0,58 = 3,77 m, arrondie à 3,80 m.</div>\n<p>On vérifie toujours l'escalier en <strong>coupe</strong> : c'est le seul dessin qui montre l'échappée réelle et les conflits avec les planchers et les ouvertures.</p>"
      },
      {
       "titre": "Escaliers tournants et implantation",
       "contenu": "<p>Lorsque la place manque, on utilise des escaliers <strong>quart tournant</strong>, <strong>demi-tournant</strong> ou <strong>hélicoïdaux</strong>. Les marches de la partie tournante sont <strong>balancées</strong> : leur giron est réparti progressivement pour que le giron reste constant sur la ligne de foulée et que les marches ne soient pas trop étroites côté intérieur. Le balancement se trace graphiquement, par une méthode de répartition des girons sur la ligne de foulée.</p>\n<p>L'implantation d'un escalier conditionne tout le plan :</p>\n<ul>\n<li>l'arrivée doit déboucher sur une circulation, pas au milieu d'une pièce ;</li>\n<li>le départ doit être visible depuis l'entrée ;</li>\n<li>la trémie doit respecter la structure (ne pas couper une poutre ni un mur porteur sans le prévoir) ;</li>\n<li>l'espace sous l'escalier peut être valorisé (placard, WC si l'échappée le permet).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un plan, l'escalier est dessiné avec ses marches numérotées depuis le départ, une flèche indiquant le sens de la montée, et une ligne de coupe conventionnelle qui l'interrompt à environ 1 m de hauteur au niveau inférieur. Au niveau supérieur, on dessine la partie vue au-dessous et la trémie.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une erreur d'un seul centimètre multipliée par seize marches devient une erreur de seize centimètres en haut. On calcule la hauteur de marche à partir de la hauteur réelle de sol fini à sol fini, épaisseurs de revêtements comprises, jamais à partir des niveaux bruts.</div>"
      },
      {
       "titre": "Circulations, dégagements et hauteurs",
       "contenu": "<p>Les <strong>circulations</strong> sont souvent vues comme des surfaces perdues ; bien dimensionnées, elles structurent le plan. Repères usuels :</p>\n<table><thead><tr><th>Circulation</th><th>Largeur indicative</th></tr></thead><tbody>\n<tr><td>Couloir de logement</td><td>0,90 m minimum ; 1,20 m pour le confort et l'accessibilité au droit des portes</td></tr>\n<tr><td>Circulation commune de logement collectif</td><td>Largeur réglementaire selon accessibilité et sécurité incendie, souvent 1,20 à 1,40 m</td></tr>\n<tr><td>Dégagement d'ERP</td><td>Calculé en unités de passage selon l'effectif (une unité de passage correspond à 0,60 m, avec des règles particulières pour une et deux unités)</td></tr>\n</tbody></table>\n<p>Les <strong>hauteurs</strong> se pensent en coupe : hauteur sous plafond des pièces (souvent 2,50 m en logement neuf), épaisseur des planchers et des faux plafonds techniques, hauteur des allèges et des linteaux. Une hauteur d'étage brute de l'ordre de 2,70 à 2,90 m en logement doit intégrer la dalle, la chape, le revêtement et la hauteur sous plafond.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier une hauteur d'étage. Hauteur sous plafond voulue : 2,50 m. Dalle béton : 0,20 m. Chape et isolant phonique : 0,07 m. Revêtement : 0,01 m. Faux plafond : non prévu. 1. Hauteur d'étage = 2,50 + 0,20 + 0,07 + 0,01 = 2,78 m. 2. Si le PLU limite la hauteur totale du bâtiment, on multiplie par le nombre de niveaux et on ajoute la toiture pour vérifier le respect de la règle. 3. Si une gaine de ventilation doit passer en faux plafond dans le couloir, on réduit localement la hauteur sous plafond à 2,20 ou 2,30 m dans cette circulation uniquement.</div>"
      },
      {
       "titre": "Le tableau des surfaces",
       "contenu": "<p>Le <strong>tableau des surfaces</strong> accompagne tous les plans de conception. Il compare les surfaces projetées aux surfaces du programme et calcule les surfaces réglementaires.</p>\n<table><thead><tr><th>Local</th><th>Programme (m²)</th><th>Projet (m²)</th><th>Écart (m²)</th></tr></thead><tbody>\n<tr><td>Entrée</td><td>6,0</td><td>5,6</td><td>−0,4</td></tr>\n<tr><td>Séjour-cuisine</td><td>40,0</td><td>41,8</td><td>+1,8</td></tr>\n<tr><td>Chambre 1</td><td>13,0</td><td>12,6</td><td>−0,4</td></tr>\n<tr><td>Chambre 2</td><td>11,0</td><td>11,2</td><td>+0,2</td></tr>\n<tr><td>Chambre 3</td><td>11,0</td><td>10,9</td><td>−0,1</td></tr>\n<tr><td>Salle d'eau</td><td>6,0</td><td>6,4</td><td>+0,4</td></tr>\n<tr><td>WC</td><td>2,0</td><td>1,8</td><td>−0,2</td></tr>\n<tr><td>Cellier</td><td>5,0</td><td>4,8</td><td>−0,2</td></tr>\n<tr><td>Dégagements</td><td>8,0</td><td>7,1</td><td>−0,9</td></tr>\n<tr><td><strong>Total surface habitable</strong></td><td><strong>102,0</strong></td><td><strong>102,2</strong></td><td><strong>+0,2</strong></td></tr>\n</tbody></table>\n<p>Le tableau indique ensuite séparément les surfaces annexes (garage, terrasses, balcons), l'emprise au sol et la surface de plancher calculée selon la définition réglementaire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les surfaces d'un projet se calculent à partir des cotes intérieures, pièce par pièce, et non à l'échelle sur le plan. Le tableau de surfaces, tenu à jour à chaque version des plans, est l'outil de dialogue avec le maître d'ouvrage : c'est souvent la première chose qu'il regarde.</div>"
      }
     ],
     "points_cles": [
      "Une pièce se dimensionne à partir du mobilier et des dégagements nécessaires à l'usage.",
      "Un logement loué doit comporter au moins une pièce principale de 9 m² et 2,20 m sous plafond (ou 20 m³).",
      "L'accessibilité impose largeurs de portes, cercle de rotation de 1,50 m et espaces d'usage.",
      "Loi de Blondel : 2h + g compris entre 60 et 64 cm ; h de 16 à 18 cm et g de 25 à 30 cm en habitation.",
      "Nombre de girons = nombre de hauteurs − 1 ; l'échappée se vérifie en coupe.",
      "Les marches balancées gardent un giron constant sur la ligne de foulée.",
      "Hauteur d'étage = hauteur sous plafond + dalle + chape + revêtement (+ faux plafond).",
      "Le tableau des surfaces compare projet et programme et donne les surfaces réglementaires."
     ],
     "lexique": [
      {
       "terme": "Ergonomie",
       "def": "Adaptation des espaces et des équipements aux dimensions et aux gestes humains."
      },
      {
       "terme": "Hauteur de marche",
       "def": "Différence de niveau entre deux marches successives."
      },
      {
       "terme": "Giron",
       "def": "Profondeur utile d'une marche, mesurée sur la ligne de foulée."
      },
      {
       "terme": "Loi de Blondel",
       "def": "Règle de confort des escaliers : 2h + g compris entre 60 et 64 cm."
      },
      {
       "terme": "Emmarchement",
       "def": "Largeur d'un escalier."
      },
      {
       "terme": "Échappée",
       "def": "Hauteur libre au-dessus d'un escalier, mesurée à l'aplomb des nez de marches."
      },
      {
       "terme": "Ligne de foulée",
       "def": "Trajet théorique suivi par une personne qui emprunte l'escalier."
      },
      {
       "terme": "Marches balancées",
       "def": "Marches de la partie tournante d'un escalier dont les girons sont répartis progressivement."
      },
      {
       "terme": "Trémie",
       "def": "Ouverture ménagée dans un plancher pour le passage d'un escalier ou d'une gaine."
      },
      {
       "terme": "Unité de passage",
       "def": "Largeur de référence pour le calcul des dégagements des ERP."
      }
     ]
    },
    {
     "id": "bteb-b-elements-presentation",
     "titre": "Élaborer des éléments de présentation d'un projet",
     "niveau": "Tle",
     "options": [
      "b"
     ],
     "duree": 45,
     "objectifs": [
      "Choisir le mode de représentation adapté à un public et à un message",
      "Construire une perspective axonométrique et comprendre les règles de la perspective conique",
      "Réaliser un rendu graphique : ombres, matériaux, couleurs, ambiances",
      "Composer une planche de présentation lisible et hiérarchisée",
      "Concevoir une maquette physique ou numérique de présentation"
     ],
     "sections": [
      {
       "titre": "Présenter : pour qui et pour quoi ?",
       "contenu": "<p>Les <strong>éléments de présentation</strong> servent à faire comprendre un projet à des personnes qui ne lisent pas forcément les plans techniques : maître d'ouvrage, élus, jury de concours, futurs usagers, voisins, architecte des Bâtiments de France. Ils accompagnent aussi le permis de construire (document graphique d'insertion).</p>\n<p>Avant de dessiner, on se pose trois questions :</p>\n<ul>\n<li><strong>Qui</strong> va regarder ? Un particulier comprend mieux une image en perspective qu'un plan coté ; un jury de professionnels attend aussi des plans et des coupes.</li>\n<li><strong>Quel message</strong> faire passer ? L'insertion dans le paysage, la qualité des espaces intérieurs, la lumière, les matériaux, le fonctionnement ?</li>\n<li><strong>Sur quel support</strong> ? Planche imprimée grand format, diaporama projeté, document numérique, maquette physique.</li>\n</ul>\n<table><thead><tr><th>Mode de représentation</th><th>Ce qu'il montre le mieux</th></tr></thead><tbody>\n<tr><td>Plan masse rendu</td><td>Implantation, rapport au terrain, espaces extérieurs</td></tr>\n<tr><td>Plans et coupes rendus</td><td>Organisation, rapport intérieur-extérieur, lumière (en coupe)</td></tr>\n<tr><td>Façades rendues</td><td>Composition, matériaux, couleurs</td></tr>\n<tr><td>Axonométrie</td><td>Volumes, fonctionnement, principe constructif (éclatée)</td></tr>\n<tr><td>Perspective conique</td><td>Perception réelle d'un espace, ambiance</td></tr>\n<tr><td>Photomontage</td><td>Insertion dans le site existant</td></tr>\n<tr><td>Maquette</td><td>Volumes, relief, rapport au contexte</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une présentation efficace sélectionne. Mieux vaut quatre documents choisis qui racontent clairement le projet que quinze images qui se répètent.</div>"
      },
      {
       "titre": "Les perspectives axonométriques",
       "contenu": "<p>Une <strong>axonométrie</strong> représente un objet en trois dimensions avec des lignes parallèles qui restent parallèles : il n'y a pas de point de fuite. Les dimensions sont mesurables le long des axes, ce qui en fait un outil à la fois explicatif et technique.</p>\n<ul>\n<li>L'<strong>axonométrie isométrique</strong> : les trois axes font entre eux des angles de 120° ; les deux axes horizontaux sont inclinés de 30° sur l'horizontale. Les longueurs sont portées à la même échelle sur les trois axes (en convention simplifiée).</li>\n<li>L'<strong>axonométrie cavalière</strong> : une face est vue de face, en vraie grandeur ; les fuyantes sont tracées à 30° ou 45°, avec une réduction (souvent 0,5 ou 0,7).</li>\n<li>L'<strong>axonométrie plongeante</strong> (ou militaire) : le plan est tracé en vraie grandeur, pivoté (souvent à 30°/60° ou 45°/45°), et les hauteurs sont élevées verticalement. Très utilisée en architecture, car elle se construit directement à partir du plan.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> construire une axonométrie plongeante d'une maison simple. 1. Tracer le plan de la maison à l'échelle (par exemple 1/100). 2. Le faire pivoter de 30° par rapport à l'horizontale de la feuille. 3. À partir de chaque angle du plan, élever des verticales à l'échelle de la hauteur des murs (2,70 m, soit 27 mm au 1/100). 4. Relier les sommets pour obtenir le haut des murs. 5. Placer le faîtage à sa hauteur, au-dessus de l'axe du plan, et tracer les pans de toiture. 6. Effacer les lignes cachées, puis rendre les faces (une face claire, une face plus sombre) pour donner le volume.</div>\n<p>L'<strong>axonométrie éclatée</strong> sépare les couches (fondations, structure, enveloppe, toiture) le long d'un axe vertical pour expliquer le principe constructif : c'est un excellent document de présentation technique.</p>"
      },
      {
       "titre": "La perspective conique",
       "contenu": "<p>La <strong>perspective conique</strong> reproduit la vision humaine : les objets éloignés paraissent plus petits et les lignes parallèles convergent vers des <strong>points de fuite</strong> situés sur la <strong>ligne d'horizon</strong>. La ligne d'horizon se trouve toujours à la hauteur des yeux de l'observateur (environ 1,60 m pour une personne debout).</p>\n<ul>\n<li>Perspective à <strong>un point de fuite</strong> (frontale) : une face de l'objet est parallèle au tableau ; les lignes de profondeur convergent vers un seul point. Idéale pour représenter une pièce vue de face, une rue, une galerie.</li>\n<li>Perspective à <strong>deux points de fuite</strong> (oblique) : l'objet est vu par un angle ; les horizontales de chacune des deux faces fuient vers un point de fuite à gauche et un à droite. Idéale pour une vue extérieure d'un bâtiment.</li>\n<li>Perspective à <strong>trois points de fuite</strong> : les verticales convergent aussi (vue plongeante ou contre-plongeante d'un immeuble).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> placer la ligne d'horizon trop haut donne une vue d'avion qui écrase le bâtiment ; placer les points de fuite trop près l'un de l'autre déforme fortement les angles. Pour une vue réaliste à hauteur de piéton, l'horizon est à 1,60 m et les points de fuite sont éloignés, souvent hors de la feuille.</div>\n<p>Les logiciels de modélisation produisent ces perspectives automatiquement à partir de la maquette numérique : il suffit de placer une caméra. Le savoir-faire consiste alors à choisir le point de vue (hauteur, angle, focale), le cadrage et la lumière, comme un photographe. Une focale trop courte (grand-angle exagéré) donne une impression d'espace trompeuse : le client doit pouvoir faire confiance à l'image.</p>"
      },
      {
       "titre": "Le rendu : ombres, matériaux et ambiances",
       "contenu": "<p>Le <strong>rendu</strong> transforme un dessin au trait en image expressive. Il peut être manuel (crayons, feutres, aquarelle), numérique en deux dimensions (logiciels de retouche et de dessin) ou numérique en trois dimensions (moteurs de rendu réaliste). Ses ingrédients :</p>\n<ul>\n<li>les <strong>ombres</strong> : en façade et en plan masse, elles révèlent les reliefs et les volumes. Par convention, en façade, on suppose souvent une lumière venant de la gauche à 45° : un débord de profondeur p projette une ombre de hauteur p ;</li>\n<li>les <strong>matériaux</strong> : textures (calepinage des bardages, joints des pierres, tuiles), couleurs réalistes ;</li>\n<li>la <strong>végétation</strong>, les personnages et les véhicules, qui donnent l'échelle et la vie ;</li>\n<li>l'<strong>ambiance</strong> : heure du jour, saison, lumière intérieure en soirée.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rendre une façade en trois passes. 1. Hiérarchiser les traits : traits forts pour les contours principaux et les éléments au premier plan, traits fins pour les détails et les éléments en retrait. 2. Poser les ombres portées à 45° (débords de toit, balcons, embrasures de fenêtres) en gris moyen uniforme. 3. Ajouter les matériaux et couleurs en aplats légers, puis la végétation et quelques personnages à l'échelle. Vérifier à distance (à 2 m de la planche) que la lecture reste claire.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour le document graphique d'insertion du permis de construire, le photomontage doit être honnête : bon point de vue, bonne échelle, végétation existante représentée telle qu'elle est. Une image flatteuse mais fausse peut être contestée par des tiers et fragiliser l'autorisation.</div>"
      },
      {
       "titre": "Composer une planche de présentation",
       "contenu": "<p>Une <strong>planche</strong> est une page grand format (A1 ou A0 en concours, A3 pour un dossier client) qui réunit plusieurs documents. Sa composition obéit à des règles de mise en page :</p>\n<ul>\n<li>une <strong>grille</strong> de mise en page (colonnes et marges régulières) sur laquelle on aligne les documents ;</li>\n<li>une <strong>hiérarchie</strong> : un document principal plus grand (souvent une perspective), des documents secondaires ;</li>\n<li>un <strong>sens de lecture</strong> logique : du site au bâtiment, de l'extérieur à l'intérieur, du général au détail ;</li>\n<li>des <strong>textes courts</strong> : titre du projet, intentions en quelques lignes, légendes ;</li>\n<li>une <strong>typographie</strong> limitée (une ou deux polices, trois tailles maximum) et une palette de couleurs cohérente ;</li>\n<li>des <strong>éléments d'orientation</strong> systématiques : nord, échelle graphique, repères de coupes sur les plans.</li>\n</ul>\n<table><thead><tr><th>Zone de la planche</th><th>Contenu possible</th></tr></thead><tbody>\n<tr><td>Bandeau supérieur</td><td>Titre, maître d'ouvrage, phase, logo de l'agence</td></tr>\n<tr><td>Grande zone principale</td><td>Perspective d'ambiance ou photomontage</td></tr>\n<tr><td>Colonne latérale</td><td>Plan masse, texte d'intentions, schémas de principe</td></tr>\n<tr><td>Bande inférieure</td><td>Plans, coupe, façades à la même échelle, alignés</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une échelle numérique (« 1/100 ») devient fausse dès que la planche est réduite ou agrandie à l'impression. Sur les documents de présentation, on place toujours une <strong>échelle graphique</strong> (barre graduée en mètres), qui reste juste quel que soit le format.</div>"
      },
      {
       "titre": "Les maquettes de présentation",
       "contenu": "<p>La <strong>maquette</strong> reste un outil de présentation très parlant, notamment pour les publics non spécialistes. On distingue :</p>\n<ul>\n<li>la <strong>maquette d'étude</strong>, rapide, en carton gris ou en mousse, pour tester des volumes pendant la conception ;</li>\n<li>la <strong>maquette de site</strong>, au 1/500 ou au 1/200, qui montre le projet dans son contexte (bâtiments voisins en blanc, relief en courbes de niveau superposées) ;</li>\n<li>la <strong>maquette de présentation</strong>, au 1/100 ou au 1/50, plus détaillée (ouvertures, toitures, parfois matériaux).</li>\n</ul>\n<p>Les matériaux courants sont le carton plume, le carton gris, le bois de balsa, le plexiglas ; les découpes peuvent être faites à la main ou par <strong>découpe laser</strong> à partir des fichiers de dessin. L'<strong>impression 3D</strong> permet de produire des maquettes directement depuis la maquette numérique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une maquette de site au 1/500 d'un terrain en pente. 1. Récupérer le relevé topographique avec les courbes de niveau espacées de 1 m. 2. Choisir l'épaisseur du carton : au 1/500, 1 m réel = 2 mm ; un carton de 2 mm représente donc exactement une courbe de niveau. 3. Découper chaque courbe dans une plaque et les empiler. 4. Ajouter les bâtiments voisins en volumes simples et blancs. 5. Réaliser le projet en matériau contrasté (bois, couleur) pour qu'il ressorte. 6. Indiquer le nord et la voirie.</div>\n<p>Les maquettes numériques peuvent également être présentées en <strong>visite virtuelle</strong> ou en réalité virtuelle, qui permettent au client de se déplacer dans le projet. Elles demandent une maquette propre et des textures soignées, mais offrent une compréhension immédiate des espaces.</p>"
      }
     ],
     "points_cles": [
      "Une présentation se construit en fonction du public, du message et du support.",
      "Axonométries : isométrique, cavalière, plongeante ; les parallèles restent parallèles et les dimensions sont mesurables.",
      "Perspective conique : ligne d'horizon à hauteur des yeux, un, deux ou trois points de fuite.",
      "Le rendu combine ombres (lumière conventionnelle à 45°), matériaux, végétation, personnages et ambiance.",
      "Le document d'insertion du permis doit être fidèle à la réalité.",
      "Une planche suit une grille, une hiérarchie et un sens de lecture ; textes courts.",
      "Toujours une échelle graphique et le nord sur les documents de présentation.",
      "Maquettes d'étude, de site et de présentation ; découpe laser et impression 3D facilitent leur fabrication."
     ],
     "lexique": [
      {
       "terme": "Axonométrie",
       "def": "Représentation en trois dimensions sans point de fuite, où les parallèles restent parallèles."
      },
      {
       "terme": "Axonométrie plongeante",
       "def": "Axonométrie construite à partir du plan en vraie grandeur pivoté, les hauteurs étant élevées verticalement."
      },
      {
       "terme": "Perspective conique",
       "def": "Représentation reproduisant la vision humaine, avec convergence des lignes vers des points de fuite."
      },
      {
       "terme": "Ligne d'horizon",
       "def": "Ligne horizontale située à la hauteur des yeux de l'observateur, sur laquelle se trouvent les points de fuite."
      },
      {
       "terme": "Point de fuite",
       "def": "Point vers lequel convergent les lignes parallèles en perspective conique."
      },
      {
       "terme": "Rendu",
       "def": "Traitement graphique donnant à un dessin matière, lumière et ambiance."
      },
      {
       "terme": "Ombre portée",
       "def": "Ombre projetée par un élément sur une autre surface."
      },
      {
       "terme": "Planche",
       "def": "Document grand format réunissant plusieurs vues d'un projet selon une mise en page."
      },
      {
       "terme": "Échelle graphique",
       "def": "Barre graduée indiquant les dimensions réelles, valable quel que soit le format d'impression."
      },
      {
       "terme": "Maquette de site",
       "def": "Maquette montrant le projet dans son contexte bâti et topographique."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Économie, préparation et suivi des travaux",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bteb-preparation-planification",
     "titre": "Préparer un chantier : démarches, sécurité et planification",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Énumérer les démarches administratives préalables à l'ouverture d'un chantier",
      "Situer les documents de coordination de la sécurité : PGC, PPSPS, DIUO",
      "Concevoir une installation de chantier",
      "Calculer des durées de tâches à partir de quantités et de cadences",
      "Construire et exploiter un planning (Gantt, réseau, chemin critique)"
     ],
     "sections": [
      {
       "titre": "Les démarches administratives d'ouverture de chantier",
       "contenu": "<p>Avant le premier coup de pelle, plusieurs démarches sont obligatoires :</p>\n<table><thead><tr><th>Démarche</th><th>Qui ?</th><th>Objet</th></tr></thead><tbody>\n<tr><td>Affichage de l'autorisation d'urbanisme</td><td>Bénéficiaire du permis</td><td>Panneau visible depuis la voie publique pendant toute la durée du chantier ; il fait courir le délai de recours des tiers (deux mois)</td></tr>\n<tr><td>Déclaration d'ouverture de chantier (DOC)</td><td>Bénéficiaire du permis</td><td>Informer la mairie du démarrage des travaux</td></tr>\n<tr><td>Déclaration de projet de travaux (DT)</td><td>Maître d'ouvrage</td><td>Interroger les exploitants des réseaux enterrés ou aériens au voisinage, via le guichet unique national</td></tr>\n<tr><td>Déclaration d'intention de commencement de travaux (DICT)</td><td>Entreprise exécutante</td><td>Obtenir des exploitants les plans des réseaux et les consignes de sécurité avant d'intervenir</td></tr>\n<tr><td>Arrêtés de voirie</td><td>Entreprise ou maître d'ouvrage</td><td>Occupation du domaine public (échafaudage, benne, emprise), restrictions de circulation</td></tr>\n<tr><td>Déclaration préalable à l'inspection du travail</td><td>Maître d'ouvrage</td><td>Pour les chantiers importants, en fonction de la durée, de l'effectif et du volume de travail</td></tr>\n</tbody></table>\n<p>À la fin des travaux, la <strong>déclaration attestant l'achèvement et la conformité des travaux</strong> (DAACT) est déposée en mairie, accompagnée des attestations requises (thermique, accessibilité, parasismique selon les cas).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> travailler à proximité d'un réseau sans DT et DICT, ou sans respecter les plans et consignes reçus, expose à des accidents graves (électrocution, explosion de gaz) et engage la responsabilité pénale de l'entreprise et du maître d'ouvrage.</div>"
      },
      {
       "titre": "La coordination de la sécurité et de la santé",
       "contenu": "<p>Lorsque plusieurs entreprises, y compris sous-traitantes, interviennent sur un même chantier, le maître d'ouvrage désigne un <strong>coordonnateur SPS</strong>. Sa mission commence dès la conception, pour éviter les risques à la source, et se poursuit pendant les travaux.</p>\n<ul>\n<li>Le <strong>plan général de coordination</strong> (PGC), rédigé par le coordonnateur pour les chantiers d'une certaine importance, fixe les règles communes : installations collectives, accès, circulations, protections collectives, mesures contre les risques de coactivité.</li>\n<li>Chaque entreprise rédige un <strong>plan particulier de sécurité et de protection de la santé</strong> (PPSPS), qui décrit ses propres travaux, leurs risques et les mesures de prévention qu'elle met en œuvre.</li>\n<li>Le coordonnateur tient un <strong>registre-journal</strong> de la coordination et constitue le <strong>dossier d'intervention ultérieure sur l'ouvrage</strong> (DIUO), remis au maître d'ouvrage à la réception, qui rassemble les informations utiles à la sécurité des interventions futures (entretien des toitures, accès aux équipements).</li>\n</ul>\n<p>Les <strong>principes généraux de prévention</strong> du code du travail guident ces documents : éviter les risques, évaluer ceux qui ne peuvent être évités, combattre les risques à la source, adapter le travail à l'homme, tenir compte de l'évolution de la technique, remplacer ce qui est dangereux, planifier la prévention, donner la priorité aux protections collectives sur les protections individuelles, donner les instructions appropriées.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le technicien de bureau d'études peut contribuer à la sécurité dès la conception : prévoir des acrotères assez hauts pour servir de protection en toiture, des points d'ancrage, un accès sécurisé aux équipements en terrasse, des menuiseries nettoyables de l'intérieur. Ces choix évitent des risques pendant toute la vie du bâtiment.</div>"
      },
      {
       "titre": "L'installation de chantier",
       "contenu": "<p>Le <strong>plan d'installation de chantier</strong> (PIC) représente, sur le plan de masse, l'organisation du chantier :</p>\n<ul>\n<li>clôture, accès des véhicules et des piétons, portail, panneau de chantier ;</li>\n<li>cantonnements (bureaux, vestiaires, réfectoire, sanitaires), dimensionnés selon l'effectif ;</li>\n<li>grue (position, rayon d'action, zone de survol interdite au-dessus du domaine public ou des voisins), ou autres moyens de levage ;</li>\n<li>aires de stockage des matériaux, de préfabrication, de ferraillage ;</li>\n<li>bennes de tri des déchets ;</li>\n<li>branchements provisoires d'eau, d'électricité et d'évacuation ;</li>\n<li>circulations internes, aire de lavage des roues.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> positionner une grue à tour. 1. Tracer sur le plan de masse l'emprise du bâtiment et les zones de stockage. 2. Chercher une position d'où un cercle de rayon égal à la flèche couvre tout le bâtiment et les stockages. 3. Vérifier la charge admissible en bout de flèche (diagramme de charge du constructeur) pour l'élément le plus lourd à lever au point le plus éloigné, par exemple une benne à béton pleine ou une prédalle. 4. Vérifier les interférences : lignes électriques, bâtiments voisins, autres grues. 5. Prévoir l'accès du camion de montage et le massif de fondation de la grue.</div>\n<p>Le coût de l'installation de chantier n'est pas négligeable : il est généralement chiffré dans un article spécifique (installation, repli) ou réparti dans les frais de chantier de l'entreprise.</p>"
      },
      {
       "titre": "Calculer les durées des tâches",
       "contenu": "<p>La planification commence par la décomposition du chantier en <strong>tâches</strong>, puis par l'estimation de la durée de chacune. La durée se déduit de la quantité à réaliser, de la <strong>cadence</strong> (ou rendement) de l'équipe, et de l'effectif.</p>\n<p>Deux formulations équivalentes sont utilisées :</p>\n<ul>\n<li>avec un <strong>temps unitaire</strong> (en heures par unité) : durée en heures = quantité × temps unitaire / effectif ;</li>\n<li>avec une <strong>cadence</strong> d'équipe (unités par jour) : durée en jours = quantité / cadence.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> durée de montage de cloisons. Quantité : 420 m² de cloisons en plaques de plâtre. Temps unitaire : 0,45 h/m² (ossature, plaques, sans bandes). Équipe : 2 plaquistes, 7 h de travail par jour.<br>1. Temps total : 420 × 0,45 = 189 h.<br>2. Heures disponibles par jour pour l'équipe : 2 × 7 = 14 h.<br>3. Durée : 189 / 14 = 13,5 jours, arrondie à 14 jours ouvrés.<br>4. Si le planning n'accorde que 10 jours, l'effectif nécessaire est 189 / (10 × 7) = 2,7, donc 3 plaquistes, à condition que le travail puisse être réparti sans gêne (plusieurs logements ou niveaux).</div>\n<p>Les temps unitaires proviennent de l'historique de l'entreprise, de bases de données professionnelles ou de l'expérience des chefs d'équipe. Ils doivent être adaptés aux conditions réelles : hauteur, accès, répétitivité, météo, saison.</p>"
      },
      {
       "titre": "Construire un planning",
       "contenu": "<p>Une fois les durées connues, on définit les <strong>liens d'antériorité</strong> entre tâches : une tâche ne peut commencer que lorsque certaines autres sont terminées (on ne coule pas une dalle avant d'avoir posé ses armatures). Le lien le plus courant est « fin-début » ; il existe aussi des liens avec recouvrement ou décalage (par exemple démarrage des cloisons à l'étage 1 deux jours après le début au rez-de-chaussée).</p>\n<p>Deux représentations sont utilisées :</p>\n<ul>\n<li>le <strong>diagramme de Gantt</strong> : chaque tâche est une barre horizontale sur une échelle de temps ; il est très lisible et sert au suivi sur le chantier ;</li>\n<li>le <strong>réseau</strong> (méthode des potentiels ou PERT) : les tâches et leurs liens forment un graphe qui permet de calculer les dates au plus tôt, au plus tard et les marges.</li>\n</ul>\n<p>Le <strong>chemin critique</strong> est la suite de tâches dont la marge est nulle : tout retard sur l'une d'elles retarde la fin du chantier. La <strong>marge totale</strong> d'une tâche est le retard maximal qu'elle peut prendre sans retarder la fin ; la <strong>marge libre</strong> est le retard maximal qu'elle peut prendre sans retarder le début d'aucune tâche suivante.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> trouver le chemin critique. Tâches : A terrassement (3 j) ; B fondations (5 j, après A) ; C réseaux sous dallage (4 j, après A) ; D dallage (2 j, après B et C) ; E murs (10 j, après D).<br>1. Dates au plus tôt : A de 0 à 3 ; B de 3 à 8 ; C de 3 à 7 ; D commence à 8 (fin de B, la plus tardive) et finit à 10 ; E de 10 à 20.<br>2. Durée totale : 20 jours.<br>3. Dates au plus tard en remontant : E 10 à 20 ; D 8 à 10 ; B 3 à 8 ; C doit finir au plus tard à 8, donc commencer au plus tard à 4.<br>4. Marge de C : 4 − 3 = 1 jour. Les autres marges sont nulles.<br>Chemin critique : A, B, D, E.</div>"
      },
      {
       "titre": "Organiser les cadences et suivre l'avancement",
       "contenu": "<p>Sur les bâtiments répétitifs (logements collectifs, niveaux identiques), on organise le travail en <strong>cycles</strong> : chaque équipe passe d'un niveau ou d'une zone à la suivante, à cadence régulière. Le <strong>planning chemin de fer</strong> (ou diagramme espace-temps) représente cette progression : en abscisse le temps, en ordonnée les zones ou niveaux, chaque tâche formant une ligne inclinée. Si deux lignes se croisent, deux équipes se gênent au même endroit au même moment : il faut décaler.</p>\n<p>Pendant le chantier, le planning est un outil de <strong>suivi</strong> :</p>\n<ul>\n<li>on compare chaque semaine l'avancement réel à l'avancement prévu ;</li>\n<li>on identifie les retards, leurs causes (intempéries, retard de livraison, retard d'une autre entreprise, modification demandée) et leur impact sur le chemin critique ;</li>\n<li>on décide de mesures de rattrapage (renfort d'effectif, travail en parallèle, changement de méthode) ;</li>\n<li>on consigne tout dans les comptes rendus de chantier, car les retards ont des conséquences contractuelles (pénalités, prolongations de délai).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un planning n'est pas un document figé. Il est construit avant le chantier pour vérifier que le délai est tenable, puis mis à jour en continu ; les décisions se prennent en priorité sur les tâches du chemin critique.</div>"
      }
     ],
     "points_cles": [
      "Avant le chantier : affichage du permis, DOC, DT et DICT, arrêtés de voirie, déclaration préalable si nécessaire.",
      "À la fin : DAACT avec les attestations requises.",
      "Coordination SPS : PGC du coordonnateur, PPSPS de chaque entreprise, DIUO remis à la réception.",
      "Les principes généraux de prévention privilégient l'évitement du risque et les protections collectives.",
      "Le plan d'installation de chantier organise accès, cantonnements, levage, stockages et déchets.",
      "Durée = quantité × temps unitaire / (effectif × heures par jour).",
      "Le chemin critique regroupe les tâches de marge nulle ; tout retard y décale la fin du chantier.",
      "Le planning se met à jour en continu et sert au suivi de l'avancement."
     ],
     "lexique": [
      {
       "terme": "DOC",
       "def": "Déclaration d'ouverture de chantier adressée à la mairie."
      },
      {
       "terme": "DT / DICT",
       "def": "Déclarations préalables aux travaux à proximité des réseaux, faites respectivement par le maître d'ouvrage et par l'exécutant."
      },
      {
       "terme": "DAACT",
       "def": "Déclaration attestant l'achèvement et la conformité des travaux."
      },
      {
       "terme": "PGC",
       "def": "Plan général de coordination en matière de sécurité, rédigé par le coordonnateur SPS."
      },
      {
       "terme": "PPSPS",
       "def": "Plan particulier de sécurité et de protection de la santé, rédigé par chaque entreprise."
      },
      {
       "terme": "DIUO",
       "def": "Dossier d'intervention ultérieure sur l'ouvrage, utile à la sécurité des interventions futures."
      },
      {
       "terme": "PIC",
       "def": "Plan d'installation de chantier."
      },
      {
       "terme": "Cadence",
       "def": "Quantité d'ouvrage réalisée par une équipe en une unité de temps."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Planning représentant chaque tâche par une barre sur une échelle de temps."
      },
      {
       "terme": "Chemin critique",
       "def": "Suite de tâches sans marge déterminant la durée totale du chantier."
      },
      {
       "terme": "Marge totale",
       "def": "Retard maximal qu'une tâche peut subir sans retarder la fin du projet."
      }
     ]
    },
    {
     "id": "bteb-facturation-bilan",
     "titre": "Situations de travaux, révision des prix et bilan de chantier",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Établir une situation de travaux mensuelle à partir d'un avancement",
      "Appliquer avance, retenue de garantie et TVA dans un décompte",
      "Distinguer actualisation et révision des prix et calculer un coefficient de révision",
      "Traiter les travaux modificatifs et supplémentaires",
      "Construire un bilan économique de chantier et analyser les écarts"
     ],
     "sections": [
      {
       "titre": "Le principe des paiements en cours de chantier",
       "contenu": "<p>Un chantier dure souvent plusieurs mois. L'entreprise ne peut pas attendre la fin pour être payée : elle avance les salaires, les matériaux et le matériel. Le marché prévoit donc des <strong>paiements partiels</strong>, en général mensuels, appelés <strong>acomptes</strong>, calculés à partir de l'avancement réel des travaux.</p>\n<p>Le document par lequel l'entreprise présente l'état d'avancement et le montant demandé est la <strong>situation de travaux</strong> (ou projet de décompte mensuel en marché public). Le maître d'œuvre la vérifie, la corrige si nécessaire et la transmet au maître d'ouvrage pour paiement. Les délais de vérification et de paiement sont fixés par le marché ; en marché public, le délai global de paiement est encadré par le code de la commande publique et des intérêts moratoires sont dus en cas de retard.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque situation est cumulative. On indique l'avancement total depuis le début du chantier, puis on déduit ce qui a déjà été payé. Cette méthode évite les erreurs qui s'accumuleraient si l'on facturait seulement le travail du mois.</div>"
      },
      {
       "titre": "Établir une situation de travaux",
       "contenu": "<p>La situation reprend la décomposition du prix du marché, ligne par ligne. Pour chaque ouvrage, on indique le pourcentage d'avancement cumulé (en forfait) ou la quantité exécutée cumulée (en prix unitaires).</p>\n<table><thead><tr><th>N°</th><th>Ouvrage</th><th>Montant marché HT</th><th>Avancement cumulé</th><th>Montant cumulé HT</th></tr></thead><tbody>\n<tr><td>2.1</td><td>Terrassements</td><td>18 000 €</td><td>100 %</td><td>18 000 €</td></tr>\n<tr><td>2.2</td><td>Fondations</td><td>32 000 €</td><td>100 %</td><td>32 000 €</td></tr>\n<tr><td>2.3</td><td>Dallage</td><td>14 000 €</td><td>100 %</td><td>14 000 €</td></tr>\n<tr><td>2.4</td><td>Murs rez-de-chaussée</td><td>46 000 €</td><td>60 %</td><td>27 600 €</td></tr>\n<tr><td>2.5</td><td>Plancher haut rez-de-chaussée</td><td>38 000 €</td><td>0 %</td><td>0 €</td></tr>\n<tr><td></td><td><strong>Total</strong></td><td><strong>148 000 €</strong></td><td></td><td><strong>91 600 €</strong></td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul du montant à payer pour cette situation n° 3. Retenue de garantie : 5 %. Montant déjà payé HT au titre des situations 1 et 2 (après retenue) : 52 250 €. TVA : 20 %.<br>1. Montant cumulé des travaux HT : 91 600 €.<br>2. Retenue de garantie cumulée : 91 600 × 5 % = 4 580 €.<br>3. Montant cumulé net HT : 91 600 − 4 580 = 87 020 €.<br>4. À déduire, déjà payé HT : 52 250 €.<br>5. Montant HT de la situation : 87 020 − 52 250 = 34 770 €.<br>6. TVA : 34 770 × 20 % = 6 954 €.<br>7. Montant TTC à payer : 41 724 €.<br>En pratique, une éventuelle révision de prix et le remboursement d'une avance s'intercalent entre les étapes 3 et 4.</div>"
      },
      {
       "titre": "Avance, retenue de garantie et TVA",
       "contenu": "<p>Plusieurs mécanismes financiers modifient le montant payé :</p>\n<ul>\n<li>l'<strong>avance</strong> : somme versée à l'entreprise au démarrage, avant tout travail, pour l'aider à financer le chantier. En marché public, elle est obligatoire au-dessus d'un certain montant et de certaines durées, sauf refus de l'entreprise ; elle est ensuite <strong>remboursée</strong> progressivement par précompte sur les acomptes ;</li>\n<li>la <strong>retenue de garantie</strong> : au plus 5 %, prélevée sur chaque acompte, restituée après la levée des réserves et l'expiration du délai de garantie, ou remplacée par une caution bancaire ;</li>\n<li>la <strong>TVA</strong> : son taux dépend de la nature des travaux et du bâtiment. Le taux normal est de 20 %. Des taux réduits existent pour certains travaux dans les logements achevés depuis plus de deux ans (amélioration, transformation, entretien, et taux plus réduit pour certains travaux de rénovation énergétique), sous conditions et avec une attestation du client.</li>\n</ul>\n<p>Dans les relations de sous-traitance, des règles particulières d'<strong>autoliquidation</strong> de la TVA s'appliquent : le sous-traitant facture hors taxes et c'est l'entreprise principale qui déclare la TVA.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les taux réduits de TVA et leurs conditions d'application ont souvent évolué. Avant de facturer à taux réduit, on vérifie l'âge du logement, la nature exacte des travaux, la présence de l'attestation et les règles fiscales en vigueur.</div>"
      },
      {
       "titre": "Actualisation et révision des prix",
       "contenu": "<p>Entre la remise de l'offre et l'exécution, les coûts (salaires, matériaux, énergie) évoluent. Le marché précise comment le prix en tient compte :</p>\n<ul>\n<li>un <strong>prix ferme</strong> ne varie pas pendant l'exécution, mais peut être <strong>actualisé</strong> si le démarrage intervient longtemps après la date de l'offre (la règle d'actualisation est prévue au marché) ;</li>\n<li>un <strong>prix révisable</strong> est ajusté pendant toute la durée du chantier, en général à chaque situation, selon une <strong>formule de révision</strong>.</li>\n</ul>\n<p>Les formules utilisent des <strong>index</strong> publiés mensuellement pour le bâtiment : l'index BT01 (tous corps d'état) et des index par corps d'état (BT02, BT03…). Une formule courante a la forme : P = P<sub>0</sub> × (a + b × I / I<sub>0</sub>), où P<sub>0</sub> est le prix initial, I<sub>0</sub> l'index du mois de référence (mois de l'offre ou mois fixé au marché), I l'index du mois d'exécution, a une <strong>partie fixe</strong> non révisable et b la partie révisable (a + b = 1).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> révision d'une situation. Travaux du mois : 34 770 € HT (montant hors retenue pour simplifier). Formule : C = 0,15 + 0,85 × BT / BT<sub>0</sub>. Index de référence BT<sub>0</sub> = 130,0 ; index du mois BT = 133,9 (valeurs fictives pour l'exemple).<br>1. Rapport des index : 133,9 / 130,0 = 1,030.<br>2. Coefficient : C = 0,15 + 0,85 × 1,030 = 0,15 + 0,8755 = 1,0255.<br>3. Montant révisé : 34 770 × 1,0255 ≈ 35 657 € HT.<br>4. Montant de la révision : 35 657 − 34 770 = 887 € HT, ajouté à la situation.<br>On arrondit le coefficient selon la règle du marché (souvent quatre décimales).</div>"
      },
      {
       "titre": "Travaux modificatifs et décompte final",
       "contenu": "<p>Au cours d'un chantier, le maître d'ouvrage peut demander des modifications, et des imprévus peuvent apparaître (sol de moins bonne qualité, ouvrage existant différent de ce qui était connu). Ces <strong>travaux modificatifs</strong> (en plus ou en moins) doivent être formalisés :</p>\n<ol>\n<li>l'entreprise remet un <strong>devis</strong> fondé sur les prix du marché ou sur des prix nouveaux justifiés ;</li>\n<li>le maître d'œuvre le vérifie ;</li>\n<li>le maître d'ouvrage le valide par écrit : <strong>ordre de service</strong> en marché public, avenant si le montant du marché change de façon significative, ou accord écrit en marché privé ;</li>\n<li>les travaux sont exécutés puis facturés dans une situation.</li>\n</ol>\n<p>À la fin du chantier, l'entreprise établit un <strong>projet de décompte final</strong> qui récapitule tous les travaux exécutés, y compris les modificatifs et les révisions. Le maître d'œuvre le vérifie et le maître d'ouvrage établit le <strong>décompte général</strong>. Une fois signé par les deux parties, il devient le <strong>décompte général et définitif</strong> (DGD), qui arrête définitivement les comptes du marché.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> exécuter des travaux supplémentaires sur simple demande orale est risqué : sans ordre écrit, l'entreprise aura du mal à se faire payer, surtout dans un marché forfaitaire. La règle professionnelle est « pas d'ordre écrit, pas de travaux ».</div>"
      },
      {
       "titre": "Le bilan économique de chantier",
       "contenu": "<p>Pour l'entreprise, le <strong>bilan de chantier</strong> compare ce qui avait été prévu dans l'étude de prix (le budget) avec ce qui a réellement été dépensé. On compare poste par poste les <strong>déboursés</strong> :</p>\n<table><thead><tr><th>Poste</th><th>Prévu</th><th>Réel</th><th>Écart</th><th>Écart en %</th></tr></thead><tbody>\n<tr><td>Main-d'œuvre (heures × coût horaire)</td><td>42 000 €</td><td>46 200 €</td><td>+4 200 €</td><td>+10,0 %</td></tr>\n<tr><td>Matériaux</td><td>51 000 €</td><td>49 470 €</td><td>−1 530 €</td><td>−3,0 %</td></tr>\n<tr><td>Matériel</td><td>12 000 €</td><td>12 600 €</td><td>+600 €</td><td>+5,0 %</td></tr>\n<tr><td>Sous-traitance</td><td>18 000 €</td><td>18 000 €</td><td>0 €</td><td>0,0 %</td></tr>\n<tr><td><strong>Total déboursés</strong></td><td><strong>123 000 €</strong></td><td><strong>126 270 €</strong></td><td><strong>+3 270 €</strong></td><td><strong>+2,7 %</strong></td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un écart de main-d'œuvre. Prévu : 1 200 h à 35 €/h = 42 000 €. Réel : 1 320 h à 35 €/h = 46 200 €. 1. Écart total : +4 200 €. 2. L'écart porte sur les heures (+120 h), pas sur le coût horaire. 3. Rechercher les causes dans les rapports journaliers : intempéries, attentes de livraison, reprises de malfaçons, temps unitaires sous-estimés. 4. Mettre à jour la base de temps unitaires de l'entreprise si les temps prévus étaient irréalistes. 5. Si l'écart vient d'une modification non facturée, régulariser par un devis complémentaire.</div>\n<p>Le bilan s'achève par la comparaison entre le <strong>chiffre d'affaires</strong> facturé et le <strong>prix de revient</strong> réel (déboursés + frais de chantier + part de frais généraux), qui donne le résultat réel du chantier. C'est l'outil d'amélioration continue des études de prix.</p>"
      }
     ],
     "points_cles": [
      "Les acomptes mensuels sont calculés sur l'avancement réel, de façon cumulative.",
      "Situation : montant cumulé, moins retenue de garantie, moins déjà payé, plus TVA.",
      "L'avance de démarrage est remboursée par précompte sur les acomptes.",
      "Retenue de garantie au plus 5 % ; TVA à 20 % ou taux réduits sous conditions.",
      "Prix ferme (éventuellement actualisé) ou révisable selon une formule à index BT.",
      "Formule type P = P0 × (a + b × I / I0) avec une partie fixe a.",
      "Pas de travaux modificatifs sans ordre écrit ; le DGD clôt les comptes du marché.",
      "Le bilan de chantier compare déboursés prévus et réels pour expliquer les écarts."
     ],
     "lexique": [
      {
       "terme": "Acompte",
       "def": "Paiement partiel en cours de chantier, correspondant aux travaux exécutés."
      },
      {
       "terme": "Situation de travaux",
       "def": "Document cumulatif présentant l'avancement des travaux et le montant demandé."
      },
      {
       "terme": "Avance",
       "def": "Somme versée au démarrage du marché et remboursée sur les acomptes suivants."
      },
      {
       "terme": "Index BT",
       "def": "Indice mensuel d'évolution des coûts du bâtiment, utilisé pour réviser les prix."
      },
      {
       "terme": "Révision des prix",
       "def": "Ajustement du prix pendant l'exécution selon une formule à index."
      },
      {
       "terme": "Actualisation",
       "def": "Ajustement d'un prix ferme lorsque le démarrage intervient tardivement."
      },
      {
       "terme": "Ordre de service",
       "def": "Décision écrite du maître d'ouvrage ou du maître d'œuvre notifiée à l'entreprise."
      },
      {
       "terme": "DGD",
       "def": "Décompte général et définitif : arrêté final des comptes d'un marché."
      },
      {
       "terme": "Déboursé",
       "def": "Dépense directe engagée pour réaliser un ouvrage : main-d'œuvre, matériaux, matériel."
      },
      {
       "terme": "Autoliquidation",
       "def": "Mécanisme par lequel l'entreprise principale déclare la TVA sur les travaux de son sous-traitant."
      }
     ]
    },
    {
     "id": "bteb-qualite-reception",
     "titre": "Qualité, environnement de chantier et réception des ouvrages",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Expliquer la démarche qualité appliquée à un chantier : autocontrôle, contrôle extérieur, traitement des non-conformités",
      "Organiser la gestion des déchets de chantier",
      "Contrôler les consommations de matériaux et d'énergie d'un chantier",
      "Décrire le déroulement des opérations préalables à la réception et de la réception",
      "Identifier le contenu du dossier des ouvrages exécutés"
     ],
     "sections": [
      {
       "titre": "La qualité sur un chantier",
       "contenu": "<p>La <strong>qualité</strong> d'un ouvrage est son aptitude à satisfaire les exigences du marché : conformité aux plans et au CCTP, respect des règles de l'art, des délais et du budget. Sur un chantier, elle ne se constate pas à la fin : elle se construit à chaque étape.</p>\n<p>La démarche repose sur trois niveaux de contrôle :</p>\n<ul>\n<li>l'<strong>autocontrôle</strong>, réalisé par l'opérateur ou le chef d'équipe sur son propre travail (aplomb, niveau, cotes, enrobage des aciers avant coulage) ;</li>\n<li>le <strong>contrôle interne</strong> de l'entreprise (conducteur de travaux, service qualité), par sondage ou à des points d'arrêt ;</li>\n<li>le <strong>contrôle extérieur</strong> : maître d'œuvre, contrôleur technique, laboratoire d'essais.</li>\n</ul>\n<p>Sur les opérations importantes, l'entreprise rédige un <strong>plan d'assurance qualité</strong> (PAQ) qui décrit son organisation, ses procédures et ses <strong>points critiques</strong> et <strong>points d'arrêt</strong>. Un point d'arrêt est une étape au-delà de laquelle on ne peut pas continuer sans accord écrit (par exemple réception des fonds de fouille par le géotechnicien, ou contrôle du ferraillage avant bétonnage).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger une fiche d'autocontrôle pour un doublage isolant. 1. Lister les exigences du CCTP : référence et épaisseur de l'isolant, R certifié, planéité, traitement des tableaux, étanchéité à l'air des traversées. 2. Pour chaque exigence, définir la vérification (contrôle visuel, règle de 2 m, lecture de l'étiquette produit) et le critère d'acceptation. 3. Prévoir une case date, nom et visa par zone (logement, niveau). 4. Prévoir une colonne « non-conformité constatée / action corrective ». 5. Archiver les fiches pour le dossier qualité.</div>"
      },
      {
       "titre": "Traiter les non-conformités",
       "contenu": "<p>Une <strong>non-conformité</strong> est l'écart entre ce qui est réalisé et ce qui est exigé. Elle peut concerner un matériau (produit livré différent de celui prévu), une exécution (cote fausse, défaut d'aplomb), un document (plan non conforme). Son traitement suit toujours le même cycle :</p>\n<ol>\n<li><strong>constater</strong> et décrire précisément l'écart (lieu, nature, photographie, mesure) ;</li>\n<li><strong>analyser</strong> les conséquences (esthétiques, techniques, réglementaires) ;</li>\n<li><strong>décider</strong> d'un traitement : acceptation en l'état (avec accord du maître d'œuvre, éventuellement moins-value), réparation, ou démolition et réfection ;</li>\n<li><strong>corriger</strong> et vérifier ;</li>\n<li><strong>rechercher la cause</strong> et mettre en place une action préventive pour que cela ne se reproduise pas.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les outils numériques de suivi de chantier (applications sur tablette) permettent de localiser une non-conformité sur le plan, d'y joindre une photo, de l'affecter à une entreprise avec une date limite et de suivre sa levée. Le même outil sert ensuite pour les réserves de réception.</div>\n<p>Le coût de la non-qualité est élevé : reprises, retards, pénalités, sinistres après réception. Il est toujours moins cher de prévenir (préparation, autocontrôle, points d'arrêt) que de réparer.</p>"
      },
      {
       "titre": "Gérer les déchets de chantier",
       "contenu": "<p>Les déchets du bâtiment sont classés en trois catégories :</p>\n<table><thead><tr><th>Catégorie</th><th>Exemples</th><th>Filières</th></tr></thead><tbody>\n<tr><td>Déchets inertes</td><td>Béton, briques, tuiles, carrelage, terres et gravats non pollués</td><td>Recyclage en granulats, remblais, installations de stockage de déchets inertes</td></tr>\n<tr><td>Déchets non dangereux non inertes</td><td>Bois non traité, plâtre, métaux, plastiques, emballages, isolants</td><td>Recyclage par matériau, valorisation énergétique, stockage</td></tr>\n<tr><td>Déchets dangereux</td><td>Bois traités, peintures et solvants, déchets amiantés, emballages souillés</td><td>Filières spécialisées, traçabilité obligatoire</td></tr>\n</tbody></table>\n<p>Le producteur des déchets (l'entreprise, et le maître d'ouvrage pour les déchets de démolition) en est responsable jusqu'à leur élimination ou leur valorisation finale. Il doit pouvoir prouver la bonne destination des déchets par des <strong>bordereaux de suivi</strong> (obligatoires et dématérialisés pour les déchets dangereux et amiantés).</p>\n<p>Avant une démolition ou une réhabilitation lourde, un <strong>diagnostic</strong> portant sur les produits, équipements, matériaux et déchets doit être réalisé pour les bâtiments concernés ; il identifie ce qui peut être réemployé, recyclé ou doit être éliminé. Une <strong>filière à responsabilité élargie du producteur</strong> (REP) pour les produits et matériaux de construction du bâtiment organise progressivement la reprise des déchets triés.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans un bâtiment construit avant juillet 1997, des matériaux contenant de l'amiante peuvent être présents (dalles de sol, colles, enduits, conduits en fibres-ciment, flocages). Tout travaux doit être précédé d'un repérage amiante avant travaux ; l'intervention sur ces matériaux est réservée à des entreprises formées et, pour le retrait, certifiées.</div>"
      },
      {
       "titre": "Contrôler les consommations du chantier",
       "contenu": "<p>Un chantier consomme des matériaux, de l'eau et de l'énergie. Le contrôle des consommations a un double intérêt : <strong>économique</strong> (repérer les pertes qui dégradent le résultat) et <strong>environnemental</strong> (réduire les gaspillages).</p>\n<ul>\n<li>Pour les <strong>matériaux</strong>, on compare les quantités livrées (bons de livraison) aux quantités théoriques du métré, majorées des pertes normales. Un écart important révèle des pertes, des vols, des erreurs de commande ou un métré faux.</li>\n<li>Pour le <strong>béton</strong>, on compare les volumes commandés et les volumes théoriques des ouvrages coulés : un surplus régulier signale des coffrages déformés, des surépaisseurs ou des retours de toupie.</li>\n<li>Pour l'<strong>eau et l'énergie</strong>, on relève les compteurs de chantier et on suit les consommations des cantonnements, des engins, du chauffage et du séchage en hiver.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> taux de perte sur un poste de carrelage. Surface posée selon métré : 380 m². Quantité livrée : 425 m². Retour de surplus au fournisseur : 12 m². 1. Consommation réelle : 425 − 12 = 413 m². 2. Pertes : 413 − 380 = 33 m². 3. Taux de perte : 33 / 380 ≈ 8,7 %. 4. Comparer au taux prévu dans l'étude de prix (par exemple 7 % pour une pose droite). 5. Rechercher la cause de l'écart (pose en diagonale non prévue, casse au stockage, coupes nombreuses dans les petites pièces) et ajuster la base de prix.</div>"
      },
      {
       "titre": "Les opérations préalables à la réception et la réception",
       "contenu": "<p>La <strong>réception</strong> est l'acte juridique, prévu par le code civil, par lequel le maître d'ouvrage déclare accepter l'ouvrage avec ou sans réserves. Elle est contradictoire (en présence de l'entreprise) et donne lieu à un <strong>procès-verbal</strong>. Ses effets sont importants :</p>\n<ul>\n<li>transfert de la garde de l'ouvrage au maître d'ouvrage ;</li>\n<li>point de départ des garanties de parfait achèvement, biennale et décennale ;</li>\n<li>point de départ du délai de restitution de la retenue de garantie.</li>\n</ul>\n<p>Elle est préparée par les <strong>opérations préalables à la réception</strong> (OPR) : le maître d'œuvre visite l'ouvrage avec chaque entreprise, vérifie l'exécution, réalise les essais de fonctionnement (chauffage, ventilation, électricité, menuiseries) et dresse la liste des défauts. Le maître d'ouvrage décide ensuite de prononcer la réception, avec des <strong>réserves</strong> pour les défauts constatés, assorties d'un délai de levée. Il peut refuser la réception si l'ouvrage n'est pas en état d'être reçu.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un défaut apparent à la réception et non réservé est, en principe, considéré comme accepté : il ne pourra plus être réclamé au titre des garanties. Les OPR doivent donc être méthodiques, local par local, lot par lot.</div>"
      },
      {
       "titre": "Le dossier des ouvrages exécutés et la fin de l'opération",
       "contenu": "<p>Chaque entreprise remet au maître d'ouvrage, par l'intermédiaire du maître d'œuvre, son <strong>dossier des ouvrages exécutés</strong> (DOE). Il décrit l'ouvrage tel qu'il a été réellement construit et permet de l'exploiter et de l'entretenir. Il contient :</p>\n<ul>\n<li>les plans conformes à l'exécution (implantation réelle des réseaux, des réservations, des équipements) ;</li>\n<li>les fiches techniques et déclarations de performances des produits mis en œuvre ;</li>\n<li>les notices de fonctionnement et d'entretien des équipements ;</li>\n<li>les procès-verbaux d'essais et de mise en service ;</li>\n<li>les garanties des fabricants.</li>\n</ul>\n<p>Avec le DIUO du coordonnateur SPS et, de plus en plus, une maquette numérique mise à jour, il constitue la mémoire de l'ouvrage.</p>\n<table><thead><tr><th>Étape</th><th>Document</th><th>Émetteur</th></tr></thead><tbody>\n<tr><td>Fin de travaux</td><td>Comptes rendus d'OPR</td><td>Maître d'œuvre</td></tr>\n<tr><td>Réception</td><td>Procès-verbal de réception et liste des réserves</td><td>Maître d'ouvrage, signé par les parties</td></tr>\n<tr><td>Levée des réserves</td><td>Procès-verbal de levée des réserves</td><td>Maître d'œuvre, maître d'ouvrage</td></tr>\n<tr><td>Remise des dossiers</td><td>DOE, DIUO</td><td>Entreprises, coordonnateur SPS</td></tr>\n<tr><td>Achèvement administratif</td><td>DAACT, attestations</td><td>Maître d'ouvrage</td></tr>\n<tr><td>Clôture financière</td><td>Décompte général et définitif</td><td>Maître d'ouvrage et entreprise</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> qualité, environnement et réception forment une continuité : ce qui est contrôlé et tracé pendant le chantier se retrouve dans les PV, le DOE et le DIUO, qui protègent ensuite tous les acteurs.</div>"
      }
     ],
     "points_cles": [
      "Trois niveaux de contrôle : autocontrôle, contrôle interne, contrôle extérieur.",
      "Le PAQ définit points critiques et points d'arrêt.",
      "Une non-conformité se constate, s'analyse, se traite, se corrige et sa cause se supprime.",
      "Déchets inertes, non dangereux non inertes et dangereux ; traçabilité par bordereaux.",
      "Repérage amiante avant travaux dans les bâtiments construits avant juillet 1997.",
      "Le contrôle des consommations compare quantités livrées et quantités théoriques.",
      "La réception, avec ou sans réserves, fait courir les garanties ; elle est préparée par les OPR.",
      "Le DOE décrit l'ouvrage réellement construit pour son exploitation et son entretien."
     ],
     "lexique": [
      {
       "terme": "Autocontrôle",
       "def": "Contrôle réalisé par l'exécutant sur son propre travail."
      },
      {
       "terme": "PAQ",
       "def": "Plan d'assurance qualité décrivant l'organisation qualité de l'entreprise sur un chantier."
      },
      {
       "terme": "Point d'arrêt",
       "def": "Étape qui ne peut être dépassée sans accord écrit préalable."
      },
      {
       "terme": "Non-conformité",
       "def": "Écart entre ce qui est réalisé et ce qui est exigé."
      },
      {
       "terme": "Déchet inerte",
       "def": "Déchet qui ne subit aucune modification physique, chimique ou biologique importante (béton, briques, tuiles)."
      },
      {
       "terme": "Bordereau de suivi",
       "def": "Document assurant la traçabilité d'un déchet jusqu'à son traitement."
      },
      {
       "terme": "OPR",
       "def": "Opérations préalables à la réception : visites et essais destinés à constater l'état de l'ouvrage."
      },
      {
       "terme": "Réserve",
       "def": "Défaut constaté à la réception que l'entreprise doit corriger dans un délai fixé."
      },
      {
       "terme": "DOE",
       "def": "Dossier des ouvrages exécutés : plans conformes, fiches produits, notices, procès-verbaux."
      },
      {
       "terme": "Repérage amiante avant travaux",
       "def": "Recherche des matériaux contenant de l'amiante dans les zones concernées par des travaux."
      }
     ]
    },
    {
     "id": "bteb-a-metre-gros-oeuvre",
     "titre": "Avant-métré du gros œuvre : terrassements, fondations, béton armé",
     "niveau": "1re",
     "options": [
      "a"
     ],
     "duree": 45,
     "objectifs": [
      "Organiser un avant-métré de gros œuvre par ouvrages élémentaires et par niveaux",
      "Calculer des volumes de terrassement en tenant compte du foisonnement et des talus",
      "Métrer les fondations, les murs, les planchers et les éléments en béton armé",
      "Évaluer coffrages et armatures, y compris par ratios",
      "Contrôler un avant-métré par des vérifications indépendantes"
     ],
     "sections": [
      {
       "titre": "Organiser l'avant-métré du gros œuvre",
       "contenu": "<p>L'<strong>avant-métré</strong> est le calcul détaillé et justifié des quantités, réalisé à partir des plans, avant les travaux. Il se distingue du <strong>métré</strong> proprement dit, qui mesure les quantités réellement exécutées. Le gros œuvre est souvent le lot le plus lourd à métrer, car il comporte de nombreux ouvrages et des unités variées.</p>\n<p>On l'organise selon un ordre logique, proche de l'ordre d'exécution :</p>\n<ol>\n<li>installation de chantier, implantation ;</li>\n<li>terrassements généraux et en rigoles ou puits ;</li>\n<li>fondations (béton de propreté, semelles, longrines, armatures) ;</li>\n<li>soubassements, vide sanitaire ou dallage ;</li>\n<li>élévations par niveau : murs, poteaux, poutres, linteaux, chaînages ;</li>\n<li>planchers par niveau ;</li>\n<li>ouvrages divers : escaliers, acrotères, appuis, réservations, enduits.</li>\n</ol>\n<p>Chaque calcul est présenté dans une <strong>feuille d'avant-métré</strong> : numéro d'article identique au CCTP, désignation, localisation, nombre de parties semblables, dimensions (longueur, largeur, hauteur), quantités partielles, déductions, quantité totale et unité. La règle d'or : un tiers doit pouvoir retrouver d'où vient chaque nombre.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on mesure des ouvrages finis, dans les unités prévues au CCTP et à la décomposition des prix (m³, m², ml, kg, U, ensemble). Les pertes, foisonnements et chutes ne sont pas intégrés dans les quantités de l'avant-métré : ils le sont dans les prix unitaires ou dans un quantitatif de commande séparé.</div>"
      },
      {
       "titre": "Terrassements : volumes, talus et foisonnement",
       "contenu": "<p>Les terrassements se mesurent en volume <strong>en place</strong> (sol non remanié), en m³. On distingue le <strong>décapage</strong> de la terre végétale (souvent en m² pour une épaisseur donnée), les <strong>terrassements en pleine masse</strong> (plateforme, sous-sol), les <strong>fouilles en rigoles</strong> (semelles filantes) et <strong>en puits</strong> (semelles isolées), le <strong>remblaiement</strong> et l'<strong>évacuation</strong> des terres excédentaires.</p>\n<p>Lorsque le sol est extrait, il augmente de volume : c'est le <strong>foisonnement</strong>. Le coefficient de foisonnement dépend du terrain (de l'ordre de 1,10 à 1,40 pour des terres courantes, davantage pour des roches). Il sert à calculer le nombre de rotations de camions et le volume de stockage, pas la quantité à facturer au m³ en place.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> fouille en pleine masse avec talus. Sous-sol de 12,00 × 8,00 m en fond de fouille, profondeur 2,50 m, talus à 1 de base pour 1 de hauteur (45°) sur les quatre côtés.<br>1. Dimensions en tête : 12,00 + 2 × 2,50 = 17,00 m ; 8,00 + 2 × 2,50 = 13,00 m.<br>2. Surfaces : fond S<sub>1</sub> = 96,00 m² ; tête S<sub>2</sub> = 221,00 m² ; section à mi-hauteur S<sub>m</sub> = 14,50 × 10,50 = 152,25 m².<br>3. Formule des trois niveaux : V = h / 6 × (S<sub>1</sub> + S<sub>2</sub> + 4 S<sub>m</sub>) = 2,50 / 6 × (96,00 + 221,00 + 609,00) = 2,50 / 6 × 926,00 ≈ 385,8 m³ en place.<br>4. Volume foisonné à transporter, avec un coefficient de 1,25 : 385,8 × 1,25 ≈ 482 m³, soit avec des camions de 12 m³ environ 41 rotations.</div>\n<p>Le <strong>remblai</strong> autour des ouvrages enterrés se calcule par différence : volume de fouille moins volume des ouvrages enterrés. Les terres réutilisées en remblai ne sont pas évacuées ; seules les terres excédentaires le sont.</p>"
      },
      {
       "titre": "Fondations et soubassements",
       "contenu": "<p>Pour les semelles filantes, on travaille avec les <strong>longueurs développées</strong> mesurées à l'axe des semelles, en traitant les angles et les croisements pour ne pas compter deux fois les mêmes volumes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> béton de semelles filantes d'un rectangle. Bâtiment de 10,00 × 8,00 m hors œuvre, murs de 20 cm, semelles de 50 cm de large et 25 cm de haut centrées sous les murs, plus un refend central dans le sens de la largeur.<br>1. Axes des murs extérieurs : 10,00 − 0,20 = 9,80 m et 8,00 − 0,20 = 7,80 m. Périmètre à l'axe : 2 × (9,80 + 7,80) = 35,20 m.<br>2. Refend : longueur entre les nus intérieurs des semelles extérieures = 7,80 − 0,50 = 7,30 m (on retire deux demi-largeurs de semelles pour ne pas compter les croisements deux fois).<br>3. Longueur totale : 35,20 + 7,30 = 42,50 m.<br>4. Béton de semelles : 42,50 × 0,50 × 0,25 ≈ 5,31 m³.<br>5. Béton de propreté (5 cm sous semelles) : 42,50 × 0,50 × 0,05 ≈ 1,06 m³.<br>Cette méthode « à l'axe » donne un résultat exact pour un rectangle : ce que l'on compte en trop aux angles extérieurs compense ce que l'on ne compte pas aux angles intérieurs.</div>\n<p>Les <strong>murs de soubassement</strong> (entre semelles et plancher bas) se métrent en m² de mur (ou en m³ s'ils sont en béton banché) ; les <strong>longrines</strong> et <strong>poutres</strong> en m³ de béton, en m² de coffrage et en kg d'armatures. Le <strong>dallage</strong> se mesure en m² en précisant son épaisseur, avec ses couches de forme, son film polyéthylène et son isolant éventuel.</p>"
      },
      {
       "titre": "Élévations, planchers et déductions",
       "contenu": "<p>Les <strong>murs maçonnés</strong> se métrent en m², en précisant la nature et l'épaisseur des blocs. On mesure la longueur à l'axe ou au nu selon la convention retenue, multipliée par la hauteur entre planchers, puis on déduit les ouvertures selon les règles du marché.</p>\n<p>Les règles de <strong>déduction des vides</strong> sont fixées par les conventions de métré du marché ou de l'entreprise. Une pratique courante, pour les maçonneries, consiste à ne pas déduire les petites ouvertures (en dessous d'une surface seuil, par exemple 0,50 m²) car leur exécution demande autant de travail que le mur plein, et à déduire les grandes. Il faut toujours lire la convention applicable avant de déduire.</p>\n<table><thead><tr><th>Ouvrage</th><th>Unité usuelle</th><th>Points d'attention</th></tr></thead><tbody>\n<tr><td>Mur en blocs</td><td>m² (par épaisseur)</td><td>Déduction des baies selon convention ; chaînages comptés à part ou inclus</td></tr>\n<tr><td>Voile béton</td><td>m³ ou m² par épaisseur, coffrage en m² (deux faces)</td><td>Ne pas oublier les abouts et tableaux</td></tr>\n<tr><td>Linteau, chaînage</td><td>ml ou m³</td><td>Longueur d'appui de part et d'autre de la baie</td></tr>\n<tr><td>Poteau</td><td>m³ ou U, coffrage en m²</td><td>Hauteur entre dalle et sous-face de poutre ou de dalle</td></tr>\n<tr><td>Plancher poutrelles-entrevous</td><td>m² par type</td><td>Mesure entre appuis ou hors tout selon convention ; trémies déduites</td></tr>\n<tr><td>Dalle pleine</td><td>m³ ou m² par épaisseur</td><td>Retombées de poutres comptées à part</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les intersections entre éléments sont le piège principal : le volume commun entre une poutre et une dalle, ou entre un chaînage et un plancher, ne doit être compté qu'une fois. On fixe une règle (par exemple la dalle passe, la poutre ne compte que sa retombée sous dalle) et on l'applique partout.</div>"
      },
      {
       "titre": "Coffrages et armatures",
       "contenu": "<p>Le <strong>coffrage</strong> est le moule provisoire du béton. Il se mesure en m² de surface de béton en contact avec le coffrage. Pour une poutre, on compte les deux joues et le fond ; pour un poteau, le périmètre multiplié par la hauteur ; pour un voile, les deux faces et les abouts. On distingue parfois les coffrages ordinaires et les coffrages soignés pour les parements restant visibles.</p>\n<p>Les <strong>armatures</strong> se mesurent en kg. Deux approches existent :</p>\n<ul>\n<li>à partir des plans de ferraillage et de la <strong>nomenclature des aciers</strong> : longueur de chaque barre × nombre × masse linéique du diamètre (par exemple environ 0,395 kg/m pour un HA 8, 0,617 kg/m pour un HA 10, 0,888 kg/m pour un HA 12) ;</li>\n<li>par <strong>ratio</strong>, en phase d'étude, quand les plans de ferraillage n'existent pas encore : kg d'acier par m³ de béton, propre à chaque type d'ouvrage.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> quantités d'une poutre de 20 × 50 cm, longueur 6,40 m (dont appuis), retombée sous dalle de 30 cm. 1. Béton de la retombée : 0,20 × 0,30 × 6,40 = 0,384 m³ (la partie dans l'épaisseur de la dalle est comptée avec la dalle). 2. Coffrage entre appuis (portée libre 6,00 m) : fond 0,20 × 6,00 = 1,20 m² ; joues 2 × 0,30 × 6,00 = 3,60 m² ; total 4,80 m². 3. Aciers par ratio, avec un ratio indicatif de 120 kg/m³ pour une poutre (à remplacer par la valeur du bureau d'études) : volume total de poutre 0,20 × 0,50 × 6,40 = 0,64 m³, soit 0,64 × 120 ≈ 77 kg.</div>"
      },
      {
       "titre": "Contrôler et présenter l'avant-métré",
       "contenu": "<p>Un avant-métré contient presque toujours des erreurs s'il n'est pas contrôlé. Les vérifications indépendantes les plus efficaces sont :</p>\n<ul>\n<li>les <strong>contrôles d'ordre de grandeur</strong> : ratio de béton par m² de surface de plancher, ratio de surface de murs par m² de plancher, comparés à des opérations similaires ;</li>\n<li>les <strong>contrôles croisés</strong> : la surface de dalle d'un niveau doit être proche de l'emprise du bâtiment moins les trémies ; la longueur des chaînages horizontaux doit correspondre à la longueur des murs porteurs ;</li>\n<li>la <strong>comparaison</strong> avec un quantitatif extrait de la maquette numérique, lorsqu'elle existe : les écarts importants signalent soit une erreur de calcul, soit une erreur de modélisation ;</li>\n<li>le <strong>pointage des plans</strong> : surligner chaque élément métré.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les économistes travaillent de plus en plus avec des logiciels de métré sur plan numérique (on clique les longueurs et surfaces directement sur le PDF ou le fichier de dessin) ou avec des extractions de maquette. Le savoir-faire manuel reste indispensable pour vérifier ces outils et pour les ouvrages qu'ils traitent mal (intersections, éléments dessinés en ligne simple).</div>\n<p>La présentation finale reprend les numéros d'articles du CCTP et récapitule les quantités dans le cadre de décomposition du prix. Les quantités sont arrondies selon une règle constante (par exemple deux décimales pour les m² et m³) et l'unité figure à chaque ligne.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une erreur de quelques pour cent sur le béton ou les aciers d'un bâtiment collectif peut représenter des dizaines de milliers d'euros. En marché forfaitaire, c'est l'entreprise qui en supporte le risque si elle ne l'a pas vérifiée.</div>"
      }
     ],
     "points_cles": [
      "L'avant-métré calcule des quantités d'ouvrages finis, justifiées ligne par ligne, avant travaux.",
      "Ordre logique : installation, terrassements, fondations, soubassements, élévations, planchers, ouvrages divers.",
      "Terrassements mesurés en place ; le foisonnement sert à calculer transports et stockages.",
      "Formule des trois niveaux : V = h/6 × (S1 + S2 + 4 Sm).",
      "Semelles filantes métrées à l'axe en traitant les croisements.",
      "Les règles de déduction des vides dépendent de la convention de métré du marché.",
      "Coffrage en m² de surface coffrée ; armatures en kg par nomenclature ou par ratio.",
      "Contrôles : ordres de grandeur, contrôles croisés, comparaison avec la maquette, pointage des plans."
     ],
     "lexique": [
      {
       "terme": "Avant-métré",
       "def": "Calcul justifié des quantités d'ouvrages à partir des plans, avant exécution."
      },
      {
       "terme": "Métré",
       "def": "Mesure des quantités réellement exécutées, servant notamment au paiement en prix unitaires."
      },
      {
       "terme": "Foisonnement",
       "def": "Augmentation de volume d'un sol après extraction."
      },
      {
       "terme": "Fouille en rigole",
       "def": "Tranchée creusée pour recevoir une semelle filante."
      },
      {
       "terme": "Volume en place",
       "def": "Volume du sol avant extraction, base de mesure des terrassements."
      },
      {
       "terme": "Longueur développée",
       "def": "Longueur totale d'un ouvrage linéaire mesurée selon son tracé."
      },
      {
       "terme": "Coffrage",
       "def": "Moule provisoire dans lequel le béton est coulé, mesuré en m² de surface coffrée."
      },
      {
       "terme": "Nomenclature des aciers",
       "def": "Liste détaillée des barres d'armature d'un ouvrage avec leurs diamètres, formes et longueurs."
      },
      {
       "terme": "Ratio d'armatures",
       "def": "Masse d'acier par m³ de béton pour un type d'ouvrage, utilisée en phase d'étude."
      },
      {
       "terme": "Convention de métré",
       "def": "Ensemble des règles de mesure (unités, déductions, intersections) applicables à un marché."
      }
     ]
    },
    {
     "id": "bteb-a-quantitatif-second-oeuvre",
     "titre": "Quantitatifs du second œuvre et extraction depuis la maquette numérique",
     "niveau": "1re-Tle",
     "options": [
      "a"
     ],
     "duree": 40,
     "objectifs": [
      "Métrer les ouvrages de second œuvre selon leurs unités propres",
      "Utiliser des tableaux de surfaces par local pour organiser les quantitatifs",
      "Établir un quantitatif de commande intégrant les pertes et conditionnements",
      "Extraire des quantités d'une maquette numérique et en connaître les limites",
      "Détecter les incohérences entre quantitatifs de lots différents"
     ],
     "sections": [
      {
       "titre": "Le tableau des surfaces, base du second œuvre",
       "contenu": "<p>En second œuvre, la plupart des quantités se déduisent des dimensions des <strong>locaux</strong>. On commence donc par établir un <strong>tableau des locaux</strong> qui donne, pour chaque pièce : sa désignation, sa surface au sol, son périmètre, sa hauteur sous plafond, les ouvertures (portes et fenêtres) qui la bordent, et les revêtements prévus au CCTP (sol, murs, plafond).</p>\n<table><thead><tr><th>Local</th><th>Surface (m²)</th><th>Périmètre (m)</th><th>HSP (m)</th><th>Sol</th><th>Murs</th><th>Plafond</th></tr></thead><tbody>\n<tr><td>Séjour</td><td>28,40</td><td>22,10</td><td>2,50</td><td>Parquet contrecollé</td><td>Peinture velours</td><td>Peinture mate</td></tr>\n<tr><td>Cuisine</td><td>9,60</td><td>12,60</td><td>2,50</td><td>Carrelage 45 × 45</td><td>Peinture lessivable + faïence</td><td>Peinture mate</td></tr>\n<tr><td>Salle d'eau</td><td>5,20</td><td>9,20</td><td>2,50</td><td>Carrelage antidérapant</td><td>Faïence toute hauteur douche</td><td>Peinture pièces humides</td></tr>\n<tr><td>Chambre 1</td><td>11,80</td><td>13,80</td><td>2,50</td><td>Parquet contrecollé</td><td>Peinture velours</td><td>Peinture mate</td></tr>\n</tbody></table>\n<p>Ce tableau, rempli une fois, alimente plusieurs lots : revêtements de sols, peinture, faïence, plinthes, plafonds, électricité (nombre d'équipements par pièce), chauffage (émetteurs par pièce). Il garantit que tous les lots sont calculés sur les mêmes bases.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en second œuvre, on raisonne « par local » puis on regroupe « par ouvrage ». Cette double entrée permet de vérifier qu'aucune pièce n'est oubliée et qu'aucun ouvrage n'est compté deux fois.</div>"
      },
      {
       "titre": "Unités et règles de mesure par corps d'état",
       "contenu": "<table><thead><tr><th>Lot</th><th>Ouvrages et unités usuelles</th><th>Points de vigilance</th></tr></thead><tbody>\n<tr><td>Plâtrerie, isolation</td><td>Cloisons et doublages en m² par type ; plafonds en m² ; bandes, cornières, renforts en ml ou U</td><td>Hauteur de cloison jusqu'à la dalle ou jusqu'au plafond ; déduction des portes selon convention</td></tr>\n<tr><td>Menuiseries intérieures</td><td>Blocs-portes en U par type ; placards en U ou ml ; plinthes en ml ; escaliers en U</td><td>Sens d'ouverture et dimensions de passage</td></tr>\n<tr><td>Revêtements de sols</td><td>m² par type ; plinthes en ml ; seuils et barres de transition en U</td><td>Déduction des emprises d'appareils fixes (receveur, baignoire)</td></tr>\n<tr><td>Faïence</td><td>m² ; profilés d'angle en ml</td><td>Hauteur de pose précisée au CCTP</td></tr>\n<tr><td>Peinture</td><td>m² de murs et de plafonds par type de finition ; boiseries et métalleries en m² ou U</td><td>Ouvertures déduites ou non selon convention ; tableaux de baies</td></tr>\n<tr><td>Plomberie, sanitaires</td><td>Appareils en U ; réseaux en ml ou en ensemble par logement</td><td>Distinction fourniture et pose, robinetterie comprise ou non</td></tr>\n<tr><td>Électricité</td><td>Points (prises, interrupteurs, points lumineux) en U ; tableau en U ; parfois en ensemble par logement type</td><td>Comptage par symbole sur plan</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> surface de peinture des murs du séjour. Périmètre 22,10 m, HSP 2,50 m. Ouvertures : une baie de 2,40 × 2,15 m, une fenêtre de 1,20 × 1,35 m, deux portes de 0,83 × 2,04 m. La convention du marché déduit les vides supérieurs à 1 m² et ajoute les tableaux de baies (profondeur 0,20 m).<br>1. Surface brute : 22,10 × 2,50 = 55,25 m².<br>2. Déductions (toutes supérieures à 1 m²) : 5,16 + 1,62 + 2 × 1,69 = 10,16 m².<br>3. Tableaux : baie (2 × 2,15 + 2,40) × 0,20 = 1,34 m² ; fenêtre (2 × 1,35 + 1,20) × 0,20 = 0,78 m² ; total 2,12 m².<br>4. Surface nette : 55,25 − 10,16 + 2,12 = 47,21 m².</div>"
      },
      {
       "titre": "Du quantitatif d'ouvrage au quantitatif de commande",
       "contenu": "<p>Le <strong>quantitatif d'ouvrage</strong> mesure l'ouvrage fini ; le <strong>quantitatif de commande</strong> (ou quantitatif de matériaux) indique ce qu'il faut acheter. Le passage de l'un à l'autre fait intervenir :</p>\n<ul>\n<li>des <strong>consommations unitaires</strong> : nombre de plaques, de montants, de vis, de kilos d'enduit par m² de cloison ; litres de peinture par m² et par couche ;</li>\n<li>des <strong>pertes</strong> : chutes de coupe, casse, ratés, exprimées en pourcentage ;</li>\n<li>des <strong>conditionnements</strong> : on achète des plaques entières, des boîtes de carrelage, des pots de peinture, des longueurs standard de rails.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> commande de carrelage pour 42,60 m² de sol en 45 × 45 cm, pose droite. Perte retenue : 7 %. Conditionnement : boîtes de 1,62 m² (8 carreaux).<br>1. Quantité à commander avant arrondi : 42,60 × 1,07 = 45,58 m².<br>2. Nombre de boîtes : 45,58 / 1,62 = 28,1, arrondi au supérieur, soit 29 boîtes.<br>3. Quantité commandée : 29 × 1,62 = 46,98 m².<br>4. Colle : avec une consommation de 5 kg/m² (double encollage, valeur fabricant à vérifier), 42,60 × 5 = 213 kg, soit 9 sacs de 25 kg (225 kg).<br>On commande aussi quelques carreaux de réserve pour le maître d'ouvrage si le CCTP le prévoit.</div>\n<p>Les taux de pertes varient selon le matériau, le format, la forme des pièces et le mode de pose : une pose en diagonale ou un grand format dans de petites pièces augmente fortement les chutes.</p>"
      },
      {
       "titre": "Extraire des quantités de la maquette numérique",
       "contenu": "<p>Une maquette numérique bien construite fournit automatiquement des <strong>nomenclatures</strong> : tableaux qui listent les objets d'une catégorie avec leurs propriétés (longueur, surface, volume, type, niveau, local). On peut ainsi obtenir en quelques minutes la surface de chaque type de cloison, le volume de béton par niveau ou le nombre de portes par type.</p>\n<p>Ces quantités ne sont fiables que si la maquette respecte des règles de modélisation :</p>\n<ul>\n<li>chaque objet est créé avec l'outil adapté et classé dans la bonne catégorie (un mur n'est pas modélisé comme une dalle verticale) ;</li>\n<li>les types d'objets correspondent aux articles du CCTP (un type de cloison par article) ;</li>\n<li>les jonctions sont propres (pas de doublons ni de chevauchements) ;</li>\n<li>les hauteurs vont bien jusqu'aux niveaux prévus (dalle ou plafond) ;</li>\n<li>les propriétés utiles au chiffrage (code d'article, lot) sont renseignées.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un logiciel mesure ce qui est modélisé, selon ses propres règles de calcul (par exemple surface d'un mur côté intérieur, côté extérieur ou à l'axe ; ouvertures toutes déduites). Ces règles ne correspondent pas forcément à la convention de métré du marché. Il faut connaître le paramétrage des nomenclatures et corriger si nécessaire.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> beaucoup d'économistes associent un code d'article de la décomposition des prix à chaque type d'objet de la maquette. L'export de la nomenclature alimente directement le cadre de DPGF. Le temps gagné sur la saisie est réinvesti dans le contrôle et l'analyse.</div>"
      },
      {
       "titre": "Ce que la maquette ne donne pas",
       "contenu": "<p>Même une maquette détaillée ne contient pas tout ce qu'il faut chiffrer. Restent généralement à métrer manuellement ou à compléter :</p>\n<ul>\n<li>les ouvrages <strong>non modélisés</strong> à ce niveau de développement : calfeutrements, bandes de joints, renforts, trappes, protections provisoires, nettoyage ;</li>\n<li>les ouvrages <strong>forfaitaires</strong> : installation de chantier, études d'exécution, essais, dossier des ouvrages exécutés ;</li>\n<li>les <strong>accessoires</strong> et petites fournitures, souvent intégrés aux prix unitaires ;</li>\n<li>les <strong>sujétions</strong> particulières : travail en hauteur, accès difficile, site occupé, phasage.</li>\n</ul>\n<p>Le technicien établit donc une liste de contrôle par lot, qui recense les articles du CCTP et indique pour chacun la source de la quantité : nomenclature de la maquette, métré manuel, forfait, ou quantité « pour mémoire » (PM) lorsqu'un ouvrage est décrit mais non chiffré dans ce lot.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> construire la liste de contrôle d'un lot. 1. Reprendre tous les articles du CCTP du lot dans l'ordre. 2. Pour chacun, indiquer l'unité et la source de la quantité. 3. Comparer la quantité de la maquette avec un calcul rapide (par exemple surface de doublage ≈ périmètre des façades × hauteur − baies). 4. Marquer les articles validés, à corriger, ou à compléter. 5. Ne transmettre le quantitatif que lorsque toutes les lignes sont validées.</div>"
      },
      {
       "titre": "Cohérence entre lots et ratios de contrôle",
       "contenu": "<p>Plusieurs lots mesurent des ouvrages liés entre eux : leurs quantités doivent être cohérentes.</p>\n<table><thead><tr><th>Lien</th><th>Contrôle</th></tr></thead><tbody>\n<tr><td>Plâtrerie et peinture</td><td>Surface de cloisons × 2 faces + doublages + plafonds ≈ base de la surface de peinture (avant faïence et déductions)</td></tr>\n<tr><td>Revêtements de sol et chapes</td><td>Surface de chape ≈ somme des surfaces de sols durs et souples posés sur chape</td></tr>\n<tr><td>Menuiseries intérieures et plâtrerie</td><td>Nombre de blocs-portes = nombre de baies dans les cloisons</td></tr>\n<tr><td>Plinthes et périmètres</td><td>Longueur de plinthes ≈ périmètres des locaux − largeurs des portes</td></tr>\n<tr><td>Électricité et tableau des locaux</td><td>Nombre de points conforme aux minima normatifs pièce par pièce</td></tr>\n</tbody></table>\n<p>Les <strong>ratios</strong> complètent ces contrôles : surface de cloisons par m² de surface habitable, nombre de portes par logement, surface de peinture par m² de plancher. Ils sont calculés sur les opérations précédentes de l'entreprise ou du cabinet et permettent de repérer immédiatement une valeur aberrante.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un quantitatif de second œuvre fiable repose sur une base commune (le tableau des locaux ou la maquette contrôlée), des unités conformes au CCTP, des conventions de métré respectées et des contrôles croisés entre lots.</div>"
      }
     ],
     "points_cles": [
      "Le tableau des locaux est la base commune des quantitatifs de second œuvre.",
      "Chaque corps d'état a ses unités : m² par type, ml, U, ensemble.",
      "Les conventions de métré fixent les déductions et l'ajout des tableaux de baies.",
      "Le quantitatif de commande intègre consommations, pertes et conditionnements.",
      "La maquette fournit des nomenclatures fiables si la modélisation respecte des règles strictes.",
      "Les règles de calcul du logiciel peuvent différer de la convention du marché.",
      "Certains ouvrages restent à métrer manuellement ou à chiffrer au forfait.",
      "Contrôles croisés entre lots et ratios d'opérations antérieures repèrent les erreurs."
     ],
     "lexique": [
      {
       "terme": "Tableau des locaux",
       "def": "Tableau listant pour chaque pièce ses dimensions et ses revêtements."
      },
      {
       "terme": "HSP",
       "def": "Hauteur sous plafond."
      },
      {
       "terme": "Tableau de baie",
       "def": "Face latérale ou supérieure de l'embrasure d'une ouverture dans un mur."
      },
      {
       "terme": "Quantitatif de commande",
       "def": "Quantités de matériaux à acheter, pertes et conditionnements compris."
      },
      {
       "terme": "Consommation unitaire",
       "def": "Quantité de matériau nécessaire par unité d'ouvrage."
      },
      {
       "terme": "Taux de perte",
       "def": "Pourcentage de matériau perdu en chutes, casse ou ratés."
      },
      {
       "terme": "Nomenclature (maquette)",
       "def": "Tableau extrait d'une maquette listant des objets et leurs propriétés."
      },
      {
       "terme": "Pour mémoire (PM)",
       "def": "Mention d'un ouvrage décrit mais non chiffré dans une ligne de prix."
      },
      {
       "terme": "Sujétion",
       "def": "Contrainte particulière d'exécution qui influence le coût d'un ouvrage."
      },
      {
       "terme": "Ratio de contrôle",
       "def": "Rapport entre deux quantités, servant à repérer une valeur aberrante."
      }
     ]
    },
    {
     "id": "bteb-a-prix-unitaires",
     "titre": "Établir un prix unitaire : déboursé sec, frais et coefficient de vente",
     "niveau": "Tle",
     "options": [
      "a"
     ],
     "duree": 45,
     "objectifs": [
      "Décomposer un prix unitaire en déboursé sec, frais de chantier, frais généraux, bénéfice et aléas",
      "Calculer le coût horaire de la main-d'œuvre et le déboursé d'un ouvrage élémentaire",
      "Établir un sous-détail de prix complet",
      "Calculer et utiliser un coefficient de vente",
      "Analyser la sensibilité d'un prix aux temps unitaires et aux coûts des matériaux"
     ],
     "sections": [
      {
       "titre": "La structure d'un prix de vente",
       "contenu": "<p>Le prix de vente hors taxes d'un ouvrage se construit par étapes successives. Le vocabulaire est précis et doit être employé sans confusion :</p>\n<table><thead><tr><th>Niveau</th><th>Contenu</th></tr></thead><tbody>\n<tr><td><strong>Déboursé sec</strong> (DS)</td><td>Coûts directement liés à l'ouvrage : main-d'œuvre d'exécution, matériaux, matériel spécifique, éventuellement sous-traitance</td></tr>\n<tr><td><strong>Frais de chantier</strong> (FC)</td><td>Coûts propres au chantier mais non affectables à un ouvrage précis : encadrement de chantier, installation, grue, cantonnements, nettoyage, consommations, essais</td></tr>\n<tr><td>Coût de production</td><td>DS + FC</td></tr>\n<tr><td><strong>Frais généraux</strong> (FG)</td><td>Coûts de structure de l'entreprise : direction, bureau d'études, comptabilité, locaux, assurances, véhicules de direction</td></tr>\n<tr><td>Prix de revient</td><td>DS + FC + FG</td></tr>\n<tr><td><strong>Bénéfice et aléas</strong> (B&amp;A)</td><td>Rémunération de l'entreprise et couverture des risques</td></tr>\n<tr><td>Prix de vente HT</td><td>Prix de revient + B&amp;A</td></tr>\n</tbody></table>\n<p>Les frais de chantier peuvent être chiffrés de façon détaillée dans une étude spécifique, ou intégrés en pourcentage du déboursé sec. Les frais généraux et le bénéfice sont le plus souvent exprimés en <strong>pourcentage du prix de vente</strong>, car c'est ainsi que l'entreprise les suit dans sa comptabilité (part du chiffre d'affaires).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> déboursé sec, prix de revient et prix de vente sont trois niveaux différents. Comparer un déboursé sec d'une entreprise au prix de vente d'une autre conduit à des conclusions fausses.</div>"
      },
      {
       "titre": "Le coût horaire de la main-d'œuvre",
       "contenu": "<p>Le coût de la main-d'œuvre n'est pas le salaire horaire versé à l'ouvrier. Pour l'entreprise, une heure productive coûte beaucoup plus, car il faut ajouter :</p>\n<ul>\n<li>les <strong>charges sociales</strong> patronales (sécurité sociale, retraite complémentaire, assurance chômage, caisses de congés payés et d'intempéries propres au bâtiment, formation) ;</li>\n<li>les <strong>indemnités</strong> : petits déplacements (repas, transport, trajet), selon des barèmes conventionnels ;</li>\n<li>la prise en compte des <strong>heures non productives</strong> payées (déplacements, intempéries, formation).</li>\n</ul>\n<p>Les entreprises calculent un <strong>déboursé horaire moyen</strong> par équipe ou par qualification, ou un coût horaire moyen de l'entreprise. Il s'exprime en €/h.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déboursé horaire d'une équipe de maçonnerie (valeurs d'exemple). Composition : 1 chef d'équipe (salaire horaire brut 18,00 €), 2 maçons (15,50 €), 1 aide (13,00 €). Taux de charges sociales retenu : 70 % du salaire brut. Indemnités de petit déplacement : 15,00 € par jour et par personne, pour 7 h de travail par jour.<br>1. Salaire brut moyen de l'équipe : (18,00 + 2 × 15,50 + 13,00) / 4 = 62,00 / 4 = 15,50 €/h.<br>2. Avec charges : 15,50 × 1,70 = 26,35 €/h.<br>3. Indemnités ramenées à l'heure : 15,00 / 7 ≈ 2,14 €/h.<br>4. Déboursé horaire moyen : 26,35 + 2,14 ≈ 28,49 €/h, arrondi à 28,50 €/h.<br>Le taux de charges réel dépend de l'entreprise et de la législation en vigueur : il est fourni par le service comptable.</div>"
      },
      {
       "titre": "Le sous-détail de prix",
       "contenu": "<p>Le <strong>sous-détail de prix</strong> est la décomposition d'un prix unitaire en ses composantes, pour une unité d'ouvrage. Il fait apparaître les quantités de chaque ressource consommée par unité, leur coût unitaire et leur montant.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> sous-détail d'un m² de mur en blocs béton creux de 20 cm (valeurs d'exemple).<br><strong>Matériaux</strong> : blocs 20 × 20 × 50 : 10 blocs/m² + 5 % de pertes = 10,5 blocs à 1,60 € = 16,80 € ; mortier : 0,015 m³/m² à 140 €/m³ = 2,10 €. Total matériaux : 18,90 €.<br><strong>Main-d'œuvre</strong> : temps unitaire 0,80 h/m² à 28,50 €/h = 22,80 €.<br><strong>Matériel</strong> : bétonnière, échafaudage, petit outillage, forfait 1,50 €/m².<br><strong>Déboursé sec</strong> : 18,90 + 22,80 + 1,50 = 43,20 €/m².<br>Ce déboursé sera ensuite multiplié par le coefficient de vente de l'entreprise.</div>\n<p>Le sous-détail peut être présenté sous forme de tableau à colonnes : ressource, unité, quantité par unité d'ouvrage, prix unitaire de la ressource, montant. On y distingue souvent les temps de main-d'œuvre (heures) et les montants (euros), pour pouvoir mettre à jour l'un sans l'autre.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'unité doit être identique dans tout le sous-détail. Un temps unitaire exprimé en heures par m² ne s'applique pas à un ouvrage chiffré en m³ ; le nombre de blocs par m² dépend du format (un bloc de 20 × 50 cm de face fait 0,10 m², donc 10 blocs au m²).</div>"
      },
      {
       "titre": "Le coefficient de vente",
       "contenu": "<p>Pour passer rapidement du déboursé sec au prix de vente, l'entreprise utilise un <strong>coefficient de vente</strong> K (ou coefficient de frais) : PV HT = DS × K.</p>\n<p>Lorsque les frais de chantier sont exprimés en pourcentage du déboursé sec, et que les frais généraux et le bénéfice-aléas sont exprimés en pourcentage du prix de vente, on a :</p>\n<p><strong>PV = DS × (1 + fc) / (1 − fg − b)</strong>, où fc est le taux de frais de chantier rapporté au DS, fg le taux de frais généraux rapporté au PV, et b le taux de bénéfice et aléas rapporté au PV. Donc K = (1 + fc) / (1 − fg − b).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul de K et du prix de vente du mur. Données : frais de chantier 12 % du DS ; frais généraux 15 % du PV ; bénéfice et aléas 5 % du PV.<br>1. K = (1 + 0,12) / (1 − 0,15 − 0,05) = 1,12 / 0,80 = 1,40.<br>2. Prix de vente HT : 43,20 × 1,40 = 60,48 €/m².<br>3. Vérification : FC = 43,20 × 0,12 = 5,18 € ; coût de production = 48,38 € ; FG = 60,48 × 0,15 = 9,07 € ; B&amp;A = 60,48 × 0,05 = 3,02 € ; total 48,38 + 9,07 + 3,02 = 60,47 € (écart d'arrondi). Le calcul est cohérent.</div>\n<p>Beaucoup d'entreprises appliquent des coefficients différents selon la nature des déboursés (un coefficient sur la main-d'œuvre, un autre sur les matériaux, un autre sur la sous-traitance), pour mieux refléter la répartition réelle de leurs frais.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> si l'on applique les pourcentages de frais généraux et de bénéfice au déboursé (et non au prix de vente), on obtient un prix trop faible : 43,20 × 1,12 × 1,15 × 1,05 ≈ 58,42 € au lieu de 60,48 €. L'entreprise croit gagner 5 % et en gagne moins.</div>"
      },
      {
       "titre": "Sources de prix et mise à jour",
       "contenu": "<p>Les éléments d'un sous-détail proviennent de plusieurs sources :</p>\n<ul>\n<li>les <strong>tarifs fournisseurs</strong> et négociations (remises sur prix public, prix franco chantier ou départ dépôt) ;</li>\n<li>les <strong>temps unitaires</strong> de l'entreprise, issus des bilans de chantiers ;</li>\n<li>des <strong>bases de prix</strong> et bordereaux professionnels, utiles pour les ouvrages peu courants et pour l'économiste qui n'a pas d'historique d'entreprise ;</li>\n<li>les <strong>devis de sous-traitants</strong> et de fournisseurs spécialisés (location de matériel, béton prêt à l'emploi).</li>\n</ul>\n<p>Les prix changent : coût des matériaux (acier, bois, isolants, énergie), salaires conventionnels, charges sociales. Un sous-détail doit être <strong>daté</strong> et mis à jour régulièrement. Les index du bâtiment (BT) aident à apprécier les évolutions générales, mais ne remplacent pas la consultation des fournisseurs pour les postes importants.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un bureau d'études de prix, on consulte systématiquement plusieurs fournisseurs pour les postes représentant une part importante du montant (béton, aciers, menuiseries, équipements). Les petits postes sont chiffrés avec la base de prix interne. Cette règle « des gros postes » concentre l'effort là où l'erreur coûte le plus cher.</div>"
      },
      {
       "titre": "Analyser la sensibilité d'un prix",
       "contenu": "<p>Un prix est construit sur des hypothèses (temps unitaires, pertes, coûts des ressources). Analyser sa <strong>sensibilité</strong>, c'est mesurer l'effet sur le prix d'une variation de chaque hypothèse. Cela permet d'identifier les postes à fiabiliser en priorité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> sensibilité du prix du mur précédent (DS = 43,20 €/m², K = 1,40).<br>1. Temps unitaire +10 % : 0,88 h × 28,50 = 25,08 € au lieu de 22,80 €, soit +2,28 € de DS ; PV = (43,20 + 2,28) × 1,40 = 63,67 €, soit +5,3 %.<br>2. Prix des blocs +10 % : 10,5 × 1,76 = 18,48 € au lieu de 16,80 €, soit +1,68 € de DS ; PV = 44,88 × 1,40 = 62,83 €, soit +3,9 %.<br>3. Conclusion : dans cet ouvrage, le prix est plus sensible au temps de main-d'œuvre qu'au prix des blocs. L'effort doit porter sur la fiabilité du temps unitaire (organisation, cadences réelles de l'équipe).</div>\n<p>Cette analyse est aussi utile en phase de négociation : l'entreprise sait sur quels postes elle a de la marge et lesquels sont risqués. Pour le maître d'œuvre qui analyse les offres, connaître la structure d'un prix permet de repérer un prix anormalement bas (déboursé sec manifestement sous-estimé) et d'en demander la justification.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un prix unitaire juste repose sur trois piliers : des quantités de ressources réalistes, des coûts de ressources à jour et un coefficient de vente correctement calculé à partir des frais réels de l'entreprise.</div>"
      }
     ],
     "points_cles": [
      "Déboursé sec, puis frais de chantier, puis frais généraux, puis bénéfice et aléas donnent le prix de vente HT.",
      "Le coût horaire de main-d'œuvre inclut charges sociales, indemnités et heures non productives.",
      "Le sous-détail décompose une unité d'ouvrage en matériaux, main-d'œuvre et matériel.",
      "Coefficient de vente : K = (1 + fc) / (1 − fg − b) quand fg et b sont rapportés au prix de vente.",
      "Appliquer fg et b au déboursé au lieu du prix de vente sous-estime le prix.",
      "Les sous-détails sont datés et mis à jour avec les tarifs fournisseurs et les bilans de chantier.",
      "Les gros postes justifient une consultation de plusieurs fournisseurs.",
      "L'analyse de sensibilité repère les hypothèses qui pèsent le plus sur le prix."
     ],
     "lexique": [
      {
       "terme": "Déboursé sec",
       "def": "Coût direct d'un ouvrage : main-d'œuvre, matériaux, matériel."
      },
      {
       "terme": "Frais de chantier",
       "def": "Coûts propres à un chantier non affectables à un ouvrage particulier."
      },
      {
       "terme": "Frais généraux",
       "def": "Coûts de fonctionnement de l'entreprise répartis sur l'ensemble des chantiers."
      },
      {
       "terme": "Prix de revient",
       "def": "Somme du déboursé sec, des frais de chantier et des frais généraux."
      },
      {
       "terme": "Bénéfice et aléas",
       "def": "Part du prix couvrant la rémunération de l'entreprise et les risques."
      },
      {
       "terme": "Déboursé horaire",
       "def": "Coût complet d'une heure de main-d'œuvre pour l'entreprise."
      },
      {
       "terme": "Temps unitaire",
       "def": "Temps de main-d'œuvre nécessaire pour réaliser une unité d'ouvrage."
      },
      {
       "terme": "Sous-détail de prix",
       "def": "Décomposition d'un prix unitaire en ressources consommées par unité d'ouvrage."
      },
      {
       "terme": "Coefficient de vente K",
       "def": "Coefficient multiplicateur permettant de passer du déboursé sec au prix de vente HT."
      },
      {
       "terme": "Prix anormalement bas",
       "def": "Prix qui ne permet manifestement pas d'exécuter correctement l'ouvrage et doit être justifié."
      }
     ]
    },
    {
     "id": "bteb-a-estimation-phases-offres",
     "titre": "Estimer un projet à chaque phase et analyser les offres",
     "niveau": "Tle",
     "options": [
      "a"
     ],
     "duree": 45,
     "objectifs": [
      "Calculer les surfaces de référence d'un projet : surface de plancher, surface habitable, surface utile",
      "Choisir une méthode d'estimation adaptée à la phase : ratios, éléments fonctionnels, ouvrages élémentaires",
      "Établir le coût d'une opération au-delà du seul coût des travaux",
      "Suivre l'écart entre estimation et enveloppe financière au fil des phases",
      "Analyser et comparer les offres des entreprises"
     ],
     "sections": [
      {
       "titre": "Les surfaces de référence",
       "contenu": "<p>Une estimation par ratio se rapporte toujours à une surface. Il faut donc savoir laquelle, car elles diffèrent fortement :</p>\n<table><thead><tr><th>Surface</th><th>Définition simplifiée</th><th>Usage</th></tr></thead><tbody>\n<tr><td><strong>Surface de plancher</strong> (SDP)</td><td>Somme des surfaces de plancher closes et couvertes, sous une hauteur de plafond supérieure à 1,80 m, mesurées au nu intérieur des façades, après certaines déductions (vides, trémies, stationnement, combles non aménageables, caves et celliers en collectif…)</td><td>Autorisations d'urbanisme, seuil de recours à l'architecte, taxes</td></tr>\n<tr><td><strong>Emprise au sol</strong></td><td>Projection verticale du volume de la construction, débords et surplombs inclus (sauf ornements et petits débords de toiture)</td><td>Règlement d'urbanisme (coefficient d'emprise au sol), seuils des autorisations</td></tr>\n<tr><td><strong>Surface habitable</strong> (SHAB)</td><td>Surface de plancher construite des logements, après déduction des murs, cloisons, gaines, embrasures, marches, et des parties de hauteur inférieure à 1,80 m ; hors caves, garages, balcons, loggias</td><td>Location, vente, logement social, ratios de coût par logement</td></tr>\n<tr><td><strong>Surface utile</strong> (SU)</td><td>Surface réellement utilisable pour l'activité (définitions variables selon le contexte)</td><td>Programmes tertiaires et équipements publics</td></tr>\n</tbody></table>\n<p>Pour un même logement, la surface habitable est inférieure à la surface de plancher, elle-même inférieure à la surface hors œuvre construite. Un ratio exprimé en €/m² de SHAB n'est donc pas comparable à un ratio en €/m² de SDP.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la définition exacte de la surface de plancher figure dans le code de l'urbanisme, avec une liste précise de déductions. On s'y réfère pour tout calcul destiné à une autorisation d'urbanisme ; une erreur peut faire basculer un projet au-dessus d'un seuil (recours obligatoire à l'architecte au-delà de 150 m² pour une personne physique, choix entre déclaration préalable et permis).</div>"
      },
      {
       "titre": "Des méthodes d'estimation adaptées à chaque phase",
       "contenu": "<p>Plus le projet est défini, plus l'estimation peut être fine. On utilise des méthodes différentes selon les phases :</p>\n<table><thead><tr><th>Phase</th><th>Méthode</th><th>Précision indicative</th></tr></thead><tbody>\n<tr><td>Programme, faisabilité</td><td>Ratio global en €/m² de SDP ou de SHAB, ou coût par place, par logement, par élève</td><td>De l'ordre de ±15 à 20 %</td></tr>\n<tr><td>Esquisse, APS</td><td>Estimation par <strong>éléments fonctionnels</strong> : prix au m² de façade, de toiture, de plancher, de cloisons… multipliés par les surfaces mesurées sur les plans</td><td>De l'ordre de ±10 %</td></tr>\n<tr><td>APD</td><td>Estimation par lots et par ouvrages principaux, avec des prix moyens par ouvrage</td><td>De l'ordre de ±5 à 10 %</td></tr>\n<tr><td>PRO, DCE</td><td>Estimation détaillée par <strong>ouvrages élémentaires</strong> : quantités de l'avant-métré × prix unitaires, lot par lot</td><td>De l'ordre de ±5 %</td></tr>\n</tbody></table>\n<p>Les précisions indiquées sont des ordres de grandeur couramment admis ; elles dépendent de la qualité des données et de la conjoncture.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimation par éléments fonctionnels d'une maison de 110 m² de SDP en APS (prix d'exemple, HT). Mesures sur plans : fondations et plancher bas 95 m² d'emprise ; murs de façade 160 m² ; toiture 120 m² ; cloisons 90 m² ; menuiseries extérieures 22 m².<br>1. Infrastructure : 95 × 260 € = 24 700 €.<br>2. Façades (structure, isolation, enduit) : 160 × 210 € = 33 600 €.<br>3. Toiture (charpente, couverture, isolation) : 120 × 190 € = 22 800 €.<br>4. Cloisons et doublages intérieurs : 90 × 70 € = 6 300 €.<br>5. Menuiseries extérieures : 22 × 650 € = 14 300 €.<br>6. Équipements techniques et finitions, au m² de SDP : 110 × 520 € = 57 200 €.<br>Total : 158 900 € HT, soit environ 1 445 € HT/m² de SDP, à comparer aux ratios d'opérations similaires.</div>"
      },
      {
       "titre": "Le coût d'une opération",
       "contenu": "<p>Le coût des travaux n'est qu'une partie de ce que paie le maître d'ouvrage. Le <strong>coût d'opération</strong> (ou prix de revient de l'opération) comprend :</p>\n<ul>\n<li>la <strong>charge foncière</strong> : terrain, frais d'acquisition, démolitions et dépollution éventuelles, viabilisation ;</li>\n<li>le <strong>coût des travaux</strong> : bâtiment, VRD (voirie et réseaux divers), aménagements extérieurs ;</li>\n<li>les <strong>honoraires</strong> : maîtrise d'œuvre, bureau de contrôle, coordonnateur SPS, géotechnicien, géomètre, assistance à maîtrise d'ouvrage ;</li>\n<li>les <strong>frais annexes</strong> : assurance dommages-ouvrage, taxes d'urbanisme, branchements aux réseaux, frais de consultation, sondages ;</li>\n<li>les <strong>aléas et révisions</strong> : provision pour imprévus, actualisation et révision des prix pendant la durée de l'opération ;</li>\n<li>le cas échéant, les frais financiers et de commercialisation (promotion immobilière).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un bailleur social ou une collectivité raisonne en coût d'opération TTC, car c'est ce montant qu'il doit financer. L'économiste présente donc ses estimations en distinguant clairement HT et TTC, travaux et opération, valeur à date et valeur révisée à la date prévisionnelle des travaux.</div>"
      },
      {
       "titre": "Suivre l'enveloppe financière au fil des phases",
       "contenu": "<p>Le maître d'ouvrage fixe une <strong>enveloppe financière prévisionnelle</strong> pour les travaux. À chaque phase, l'économiste compare l'estimation du projet à cette enveloppe. Si l'estimation dépasse, plusieurs actions sont possibles :</p>\n<ul>\n<li>optimiser le projet (compacité, rationalisation de la structure, répétitivité) ;</li>\n<li>revoir certaines prestations (matériaux de finition, équipements) ;</li>\n<li>proposer des <strong>options</strong> ou des tranches pour étaler la dépense ;</li>\n<li>en dernier recours, demander au maître d'ouvrage de réviser son programme ou son enveloppe.</li>\n</ul>\n<p>Cette démarche d'ajustement s'appelle parfois <strong>conception à coût objectif</strong>. Elle exige de connaître la répartition du coût par lot pour agir là où c'est le plus efficace.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> tableau de suivi de l'enveloppe. Enveloppe : 1 800 000 € HT. Estimation APS : 1 850 000 € (+2,8 %). Estimation APD : 1 930 000 € (+7,2 %). 1. Calculer l'écart en valeur et en pourcentage à chaque phase. 2. Analyser par lot l'origine de la hausse (par exemple +60 000 € en gros œuvre du fait d'un sol médiocre révélé par l'étude G2, +20 000 € en menuiseries suite à un changement de matériau demandé). 3. Classer les causes : demande du maître d'ouvrage, contrainte technique nouvelle, erreur d'estimation antérieure. 4. Proposer des économies chiffrées pour revenir dans l'enveloppe, ou une décision explicite du maître d'ouvrage d'accepter le dépassement.</div>"
      },
      {
       "titre": "Analyser les offres des entreprises",
       "contenu": "<p>Après la consultation, le maître d'œuvre (mission ACT en marché public) analyse les offres et propose un classement au maître d'ouvrage. L'analyse comporte plusieurs étapes :</p>\n<ol>\n<li><strong>Vérification de recevabilité</strong> : offre complète, signée si nécessaire, remise dans les délais, pièces demandées présentes.</li>\n<li><strong>Vérification arithmétique</strong> : produits quantités × prix, totaux par chapitre, cohérence entre DPGF et acte d'engagement. Les erreurs sont signalées et rectifiées selon les règles de la consultation.</li>\n<li><strong>Analyse comparative des prix</strong> : tableau ligne à ligne de toutes les offres et de l'estimation du maître d'œuvre ; repérage des écarts importants, des lignes non chiffrées, des quantités modifiées.</li>\n<li><strong>Analyse technique</strong> : mémoire technique, méthodes, moyens humains et matériels, produits proposés, planning, démarche environnementale.</li>\n<li><strong>Notation</strong> selon les critères et pondérations annoncés dans le règlement de la consultation.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> note prix avec la formule « offre la plus basse sur offre analysée ». Critères : prix 60 %, valeur technique 40 %. Offres : A = 412 000 €, B = 386 000 €, C = 455 000 €. Notes techniques sur 10 : A = 8, B = 6, C = 9.<br>1. Notes prix sur 10 : A = 10 × 386 000 / 412 000 ≈ 9,37 ; B = 10 ; C = 10 × 386 000 / 455 000 ≈ 8,48.<br>2. Notes globales : A = 0,6 × 9,37 + 0,4 × 8 = 8,82 ; B = 0,6 × 10 + 0,4 × 6 = 8,40 ; C = 0,6 × 8,48 + 0,4 × 9 = 8,69.<br>3. Classement : A, puis C, puis B. L'offre la moins chère n'est pas forcément l'offre retenue.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la formule de notation du prix et les sous-critères techniques doivent être annoncés ou au moins cohérents avec ce qui est annoncé dans le règlement de la consultation. On ne change pas de méthode après ouverture des offres. Une offre qui paraît anormalement basse doit faire l'objet d'une demande de justification avant d'être, le cas échéant, rejetée.</div>"
      },
      {
       "titre": "La mise au point et le rapport d'analyse",
       "contenu": "<p>Le résultat de l'analyse est présenté dans un <strong>rapport d'analyse des offres</strong>, qui doit permettre au maître d'ouvrage de décider en connaissance de cause et, en marché public, de justifier son choix auprès des candidats non retenus. Il contient :</p>\n<ul>\n<li>le rappel de la procédure et des critères ;</li>\n<li>la liste des offres reçues et leur recevabilité ;</li>\n<li>les tableaux comparatifs des prix, commentés ;</li>\n<li>l'analyse technique par sous-critère, argumentée ;</li>\n<li>la notation et le classement ;</li>\n<li>la comparaison du montant total avec l'estimation et l'enveloppe ;</li>\n<li>une proposition d'attribution.</li>\n</ul>\n<p>Dans les procédures qui le permettent, une phase de <strong>négociation</strong> ou de mise au point peut précéder l'attribution : clarification des ambiguïtés, corrections d'erreurs, ajustement de prestations, sans modifier les caractéristiques essentielles du marché.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'économiste accompagne le projet du premier ratio au contrat signé. Ses outils changent avec les phases (ratios, éléments fonctionnels, ouvrages élémentaires, comparaison d'offres), mais son rôle reste le même : éclairer les décisions du maître d'ouvrage par des chiffres fiables et justifiés.</div>"
      }
     ],
     "points_cles": [
      "Surface de plancher, emprise au sol, surface habitable et surface utile ne sont pas comparables entre elles.",
      "Le seuil de 150 m² de surface de plancher rend l'architecte obligatoire pour une personne physique.",
      "Ratios globaux en faisabilité, éléments fonctionnels en esquisse, ouvrages élémentaires au DCE.",
      "Le coût d'opération ajoute au coût des travaux le foncier, les honoraires, les frais annexes et les aléas.",
      "L'estimation est comparée à l'enveloppe à chaque phase ; les écarts sont expliqués par lot.",
      "L'analyse des offres : recevabilité, arithmétique, comparaison des prix, analyse technique, notation.",
      "Les critères et pondérations du règlement de la consultation s'imposent à l'analyse.",
      "Le rapport d'analyse justifie le classement et la proposition d'attribution."
     ],
     "lexique": [
      {
       "terme": "Surface de plancher",
       "def": "Surface de référence du code de l'urbanisme, mesurée au nu intérieur des façades, après déductions."
      },
      {
       "terme": "Emprise au sol",
       "def": "Projection verticale du volume d'une construction."
      },
      {
       "terme": "Surface habitable",
       "def": "Surface utile d'un logement après déduction des murs, cloisons, gaines et parties basses."
      },
      {
       "terme": "Ratio de coût",
       "def": "Coût rapporté à une unité caractéristique (m² de surface, logement, place)."
      },
      {
       "terme": "Élément fonctionnel",
       "def": "Partie d'ouvrage remplissant une fonction (façade, toiture, plancher), chiffrée au m² en phase amont."
      },
      {
       "terme": "Coût d'opération",
       "def": "Ensemble des dépenses d'une opération : foncier, travaux, honoraires, frais annexes, aléas."
      },
      {
       "terme": "VRD",
       "def": "Voirie et réseaux divers."
      },
      {
       "terme": "Enveloppe financière",
       "def": "Montant maximal fixé par le maître d'ouvrage pour les travaux."
      },
      {
       "terme": "Conception à coût objectif",
       "def": "Démarche consistant à ajuster le projet pour respecter un coût fixé."
      },
      {
       "terme": "Rapport d'analyse des offres",
       "def": "Document présentant l'examen, la notation et le classement des offres."
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
     "id": "bteb-doc-dossier-plans",
     "titre": "Analyser un dossier de plans d'un projet",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les pièces d'un dossier graphique et leurs relations",
      "Extraire méthodiquement des dimensions, niveaux et surfaces d'un jeu de plans",
      "Croiser plans, coupes et façades pour reconstituer le bâtiment",
      "Détecter les incohérences entre documents",
      "Rédiger une réponse d'analyse structurée et justifiée"
     ],
     "sections": [
      {
       "titre": "Le dossier de plans à l'épreuve",
       "contenu": "<p>À l'épreuve écrite d'analyse, le candidat reçoit un <strong>dossier technique</strong> qui comprend en général : un plan de situation, un plan de masse, les plans des niveaux, une ou deux coupes, les façades, parfois des détails et des extraits de pièces écrites. Il doit répondre à des questions qui demandent de <strong>prélever</strong> des informations, de les <strong>croiser</strong> et de les <strong>exploiter</strong> (calcul, vérification réglementaire, justification d'un choix).</p>\n<p>Chaque document du dossier a un rôle :</p>\n<table><thead><tr><th>Document</th><th>Informations principales</th></tr></thead><tbody>\n<tr><td>Plan de situation</td><td>Localisation du terrain, orientation générale</td></tr>\n<tr><td>Plan de masse</td><td>Implantation, distances aux limites, accès, niveaux du terrain et du rez-de-chaussée, réseaux</td></tr>\n<tr><td>Plans de niveaux</td><td>Distribution, dimensions des pièces, épaisseurs des murs, ouvertures, surfaces, repères de coupe</td></tr>\n<tr><td>Coupes</td><td>Hauteurs, niveaux altimétriques, composition des planchers et de la toiture, fondations</td></tr>\n<tr><td>Façades</td><td>Aspect, matériaux, dimensions et position des baies en hauteur, hauteur totale</td></tr>\n<tr><td>Détails</td><td>Composition des parois et des jonctions, à grande échelle</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> aucune vue ne suffit seule. Une hauteur se lit en coupe ou en façade, une largeur en plan ; la position d'un élément se confirme en le retrouvant sur au moins deux vues.</div>"
      },
      {
       "titre": "Vocabulaire et conventions à maîtriser",
       "contenu": "<ul>\n<li><strong>Cotes</strong> : les cotes de plan sont en général en mètres ou en centimètres (l'unité est indiquée dans le cartouche ou déduite des valeurs). On distingue les cotes intérieures (entre parements finis ou bruts), les cotes extérieures (hors tout) et les cotes de baies (largeur × hauteur, parfois notées avec la hauteur d'allège).</li>\n<li><strong>Niveaux</strong> : exprimés en mètres, soit en altitude NGF (nivellement général de la France), soit en relatif par rapport au niveau ±0,00 du projet (souvent le sol fini du rez-de-chaussée). Un triangle ou une flèche indique le point concerné.</li>\n<li><strong>Repères de coupe</strong> : sur le plan, un trait mixte avec des flèches indiquant le sens d'observation et une lettre (coupe AA).</li>\n<li><strong>Nord</strong> : flèche sur le plan de masse et les plans de niveaux, indispensable pour les questions d'orientation.</li>\n<li><strong>Hachures et remplissages</strong> : distinguent les matériaux coupés (béton, maçonnerie, isolant, bois) selon une légende.</li>\n<li><strong>Abréviations</strong> : HSP (hauteur sous plafond), RDC, R+1, NGF, TN (terrain naturel), PH (plancher haut), PB (plancher bas), SDP, SHAB, VMC, EP (eaux pluviales).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne jamais mesurer une dimension à la règle sur un plan photocopié ou réduit si une cote existe ; et si l'on doit mesurer, vérifier d'abord l'échelle réelle du document en mesurant une cote connue.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un dossier de plans en six étapes.<br>1. <strong>Inventaire</strong> : lister les documents, leurs échelles, leurs indices et dates. Repérer la légende et le nord.<br>2. <strong>Vue d'ensemble</strong> : sur le plan de masse et les façades, comprendre le volume général (nombre de niveaux, forme de la toiture, implantation, accès).<br>3. <strong>Lecture des niveaux</strong> : pour chaque plan, identifier les pièces, les murs porteurs (épaisseurs, hachures), les circulations, l'escalier, les pièces humides.<br>4. <strong>Lecture altimétrique</strong> : sur la coupe, relever les niveaux de chaque plancher, la hauteur sous plafond, l'épaisseur des planchers, le niveau du terrain naturel et fini, la hauteur au faîtage ou à l'acrotère.<br>5. <strong>Croisement</strong> : reporter le trait de coupe sur le plan pour savoir quelles pièces sont coupées ; vérifier que les baies des façades correspondent aux baies des plans.<br>6. <strong>Exploitation</strong> : répondre aux questions en citant à chaque fois le document et la cote utilisés.</div>\n<p>Pour les questions de calcul (surface, volume, longueur), on présente : la formule, les valeurs avec leur origine (« cote 4,20 lue sur le plan du RDC »), le calcul, le résultat arrondi avec son unité, puis une phrase de conclusion.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les professionnels annotent les plans au surligneur de couleur : une couleur pour les porteurs, une pour les réseaux, une pour les éléments à vérifier. À l'examen, la même habitude, au crayon sur le dossier, aide à ne rien oublier.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le dossier décrit une <strong>maison individuelle</strong> à un niveau sur vide sanitaire, avec combles perdus. Les informations utiles sont les suivantes.</p>\n<h4>Plan de masse (1/200)</h4>\n<p>Terrain rectangulaire de 20,00 × 32,00 m, accès au nord par une voie publique. Maison implantée à 5,00 m de l'alignement sur voie et à 3,00 m de la limite séparative est. Emprise hors tout de la maison : 12,40 × 9,20 m. Terrain naturel au droit de la maison : 102,35 NGF. Niveau ±0,00 (sol fini RDC) = 102,80 NGF.</p>\n<h4>Plan du RDC (1/50)</h4>\n<p>Murs extérieurs en blocs de 20 cm + doublage isolant de 13 cm (épaisseur totale finie 0,33 m + enduit 0,02 m, soit 0,35 m). Séjour-cuisine orienté au sud, dimensions intérieures 7,30 × 5,10 m. Baie vitrée sud repérée B1 : 2,40 × 2,15 m. Trois chambres au nord. Trait de coupe AA traversant le séjour du nord au sud.</p>\n<h4>Coupe AA (1/50)</h4>\n<p>Plancher bas sur vide sanitaire : poutrelles-entrevous isolants, dalle de compression 5 cm, chape 6 cm, revêtement 1 cm. Hauteur sous plafond : 2,50 m. Plafond en plaques de plâtre sous fermettes. Faîtage à +5,85 m. Pente de toiture : 40 %.</p>\n<h4>Façade sud (1/100)</h4>\n<p>Deux baies : la baie B1 et une fenêtre de 1,20 × 1,35 m. Hauteur d'égout : +2,80 m.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Question 1 — Hauteur du rez-de-chaussée fini au-dessus du terrain naturel.</strong> Le niveau ±0,00 est à 102,80 NGF et le terrain naturel à 102,35 NGF (plan de masse). Différence : 102,80 − 102,35 = 0,45 m. Le sol fini est 45 cm au-dessus du terrain naturel. Conséquence : l'accès à la porte d'entrée nécessite des marches ou une rampe ; si la maison doit être accessible, une rampe à 5 % aurait une longueur de 0,45 / 0,05 = 9,00 m, ou il faut remodeler le terrain devant l'entrée.</p>\n<p><strong>Question 2 — Surface habitable du séjour.</strong> Cotes intérieures lues sur le plan du RDC : 7,30 × 5,10 = 37,23 m². Aucune partie n'est sous 1,80 m de hauteur (HSP 2,50 m en coupe). Surface du séjour : 37,23 m².</p>\n<p><strong>Question 3 — Rapport entre surface vitrée et surface du séjour.</strong> Baie B1 : 2,40 × 2,15 = 5,16 m². Fenêtre : 1,20 × 1,35 = 1,62 m². Total : 6,78 m² (dimensions de baies en tableau, lues en façade et vérifiées en plan). Rapport : 6,78 / 37,23 ≈ 18 %. Le séjour est bien éclairé ; les deux baies étant au sud, il faudra vérifier la présence de protections solaires pour le confort d'été (débord de toit, volets).</p>\n<p><strong>Question 4 — Cohérence du faîtage.</strong> L'emprise fait 9,20 m dans le sens de la pente (nord-sud, déduit de la coupe AA qui traverse la maison dans ce sens). Avec un faîtage au milieu, la demi-largeur horizontale vaut 4,60 m. À 40 %, la montée de la toiture vaut 4,60 × 0,40 = 1,84 m. Égout à +2,80 m, donc faîtage théorique à 2,80 + 1,84 = 4,64 m, si l'égout était à l'aplomb du nu extérieur. La coupe indique +5,85 m : l'écart de 1,21 m est trop important pour s'expliquer par les débords de toit. Il y a une incohérence entre la pente annoncée, la hauteur d'égout et la hauteur de faîtage : à signaler et à faire préciser (une pente d'environ 66 %, soit environ 33°, correspondrait à 5,85 m).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> à l'examen, une incohérence détectée doit être signalée clairement, avec le calcul qui la prouve et les documents concernés. On ne « corrige » pas un document de soi-même : on indique ce qui ne concorde pas et l'hypothèse retenue pour continuer.</div>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<ul>\n<li><strong>Confondre cotes brutes et cotes finies</strong> : une cote prise au nu brut de la maçonnerie n'est pas la dimension de la pièce finie après doublage.</li>\n<li><strong>Oublier les épaisseurs</strong> de planchers entre deux niveaux, ou confondre hauteur sous plafond et hauteur d'étage.</li>\n<li><strong>Mélanger niveaux NGF et niveaux relatifs</strong> dans un même calcul.</li>\n<li><strong>Lire la coupe dans le mauvais sens</strong> : vérifier sur le plan le sens des flèches du trait de coupe (ce que l'on regarde).</li>\n<li><strong>Utiliser un plan à l'indice périmé</strong> quand le dossier contient plusieurs versions.</li>\n<li><strong>Répondre sans unité</strong> ou sans citer la source de la donnée.</li>\n<li><strong>Arrondir trop tôt</strong> : garder au moins deux décimales dans les calculs intermédiaires.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne réponse d'analyse comporte toujours trois éléments : la donnée et son origine, le raisonnement ou le calcul, une conclusion qui répond exactement à la question posée.</div>"
      }
     ],
     "points_cles": [
      "Le dossier graphique comprend situation, masse, plans de niveaux, coupes, façades et détails.",
      "Une information se confirme sur au moins deux vues.",
      "Niveaux NGF ou relatifs au ±0,00 : ne jamais les mélanger.",
      "Le trait de coupe et ses flèches indiquent ce que montre la coupe.",
      "Méthode : inventaire, vue d'ensemble, lecture des niveaux, lecture altimétrique, croisement, exploitation.",
      "Chaque calcul cite la donnée, son document d'origine, le résultat avec unité et une conclusion.",
      "Les incohérences se signalent avec le calcul qui les démontre.",
      "Attention aux cotes brutes ou finies et aux épaisseurs de planchers."
     ],
     "lexique": [
      {
       "terme": "NGF",
       "def": "Nivellement général de la France : référence officielle des altitudes."
      },
      {
       "terme": "Niveau ±0,00",
       "def": "Niveau de référence d'un projet, souvent le sol fini du rez-de-chaussée."
      },
      {
       "terme": "Terrain naturel (TN)",
       "def": "Niveau du sol avant travaux."
      },
      {
       "terme": "Trait de coupe",
       "def": "Ligne repérée sur un plan indiquant l'emplacement et le sens d'observation d'une coupe."
      },
      {
       "terme": "Égout",
       "def": "Partie basse d'un versant de toiture, où l'eau est recueillie."
      },
      {
       "terme": "Faîtage",
       "def": "Ligne de rencontre haute de deux versants de toiture."
      },
      {
       "terme": "Cote hors tout",
       "def": "Dimension extérieure totale d'un ouvrage."
      },
      {
       "terme": "Nu",
       "def": "Surface plane d'un mur, servant de référence aux cotes (nu intérieur, nu extérieur)."
      },
      {
       "terme": "Hauteur d'allège",
       "def": "Hauteur entre le sol fini et le bas d'une fenêtre."
      },
      {
       "terme": "Indice",
       "def": "Repère de version d'un plan."
      }
     ]
    },
    {
     "id": "bteb-doc-cctp-dpgf",
     "titre": "Exploiter un extrait de CCTP et sa décomposition de prix",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Repérer la structure d'un extrait de CCTP et de la DPGF associée",
      "Extraire d'un article les caractéristiques techniques et les prestations comprises",
      "Vérifier la conformité d'une prescription à une exigence réglementaire ou à une étude",
      "Contrôler la cohérence entre CCTP, plans et DPGF",
      "Formuler une observation ou une correction argumentée"
     ],
     "sections": [
      {
       "titre": "Le document et sa structure",
       "contenu": "<p>À l'épreuve, le dossier contient fréquemment un <strong>extrait de CCTP</strong> (un lot, ou quelques articles) et la <strong>DPGF</strong> correspondante, parfois partiellement remplie. On rappelle leur structure :</p>\n<table><thead><tr><th>Partie</th><th>Contenu à repérer</th></tr></thead><tbody>\n<tr><td>En-tête du CCTP</td><td>Opération, maître d'ouvrage, maître d'œuvre, lot, phase, date, indice</td></tr>\n<tr><td>Généralités du lot</td><td>Limites de prestations, interfaces, textes de référence (NF DTU, normes, avis techniques), documents à fournir, essais</td></tr>\n<tr><td>Articles d'ouvrages</td><td>Numéro, intitulé, matériaux et performances, mise en œuvre, prestations comprises, localisation, unité</td></tr>\n<tr><td>DPGF</td><td>Colonnes : numéro, désignation, unité, quantité, prix unitaire, montant ; sous-totaux par chapitre ; total HT, TVA, total TTC</td></tr>\n</tbody></table>\n<p>Dans une DPGF remise par le maître d'œuvre, les quantités sont souvent indiquées à titre indicatif : en marché forfaitaire, l'entreprise doit les vérifier et peut les modifier dans son offre, car elle s'engage sur un prix global.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le CCTP dit « quoi et comment » ; la DPGF dit « combien ». Les deux sont reliés par la même numérotation. Toute question d'analyse sur un ouvrage commence par retrouver son article dans les deux documents.</div>"
      },
      {
       "titre": "Méthode de lecture d'un article",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> décortiquer un article de CCTP.<br>1. <strong>Identifier</strong> l'ouvrage : numéro, intitulé, lot.<br>2. <strong>Relever les caractéristiques</strong> : matériau, dimensions, épaisseurs, classes et performances chiffrées (R, U<sub>w</sub>, classement au feu, classement d'usage, classe de résistance du béton…).<br>3. <strong>Relever les références</strong> : NF DTU, normes, avis techniques cités.<br>4. <strong>Lister les prestations comprises</strong> : accessoires, fixations, finitions, raccords, protections, nettoyage.<br>5. <strong>Repérer la localisation</strong> : niveaux, locaux, repères de plan.<br>6. <strong>Noter l'unité</strong> et le mode de métré éventuel.<br>7. <strong>Comparer</strong> avec les plans, avec les études (thermique, acoustique, structure) et avec la réglementation demandée par la question.</div>\n<p>Pour la DPGF, la lecture est différente : on vérifie d'abord que chaque article du CCTP possède une ligne de prix (et réciproquement), puis que les unités correspondent, puis que les quantités sont plausibles au regard des plans, enfin que les produits et les totaux sont justes. Une ligne marquée « PM » (pour mémoire) ou « compris » renvoie à un autre article : il faut retrouver lequel pour s'assurer que l'ouvrage est bien chiffré quelque part.</p>\n<p>On peut organiser ces informations dans un tableau à deux colonnes (« élément de l'article » / « contenu relevé »), qui sert ensuite de base à la réponse écrite.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une performance peut être exprimée de plusieurs façons. Une résistance thermique « R ≥ 4 » n'est pas un lambda ; une épaisseur seule ne garantit pas une performance si le lambda n'est pas précisé. Il faut vérifier que la grandeur citée correspond à celle qui est exigée.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Opération : construction de 6 logements collectifs en R+2. Exigence de l'étude thermique (extrait du RSET) : isolation des murs de façade par l'intérieur avec R ≥ 3,70 m²·K/W ; isolant des combles R ≥ 8,00 m²·K/W.</p>\n<h4>Extrait du CCTP — Lot 06 Plâtrerie, isolation</h4>\n<p><strong>6.2.1 Doublage thermique des murs de façade.</strong> Complexe de doublage collé, plaque de plâtre 13 mm associée à un panneau de polystyrène expansé de 100 mm, λ = 0,032 W/(m·K), sous certification. Mise en œuvre selon le NF DTU 25.42. Compris : traitement des joints, cornières d'angle, retours en tableaux. Localisation : toutes les façades des niveaux RDC à R+2. Unité : m².</p>\n<p><strong>6.2.2 Doublage thermique des murs sur cage d'escalier non chauffée.</strong> Même complexe en 80 mm. Localisation : murs séparatifs logements / cage d'escalier. Unité : m².</p>\n<p><strong>6.4.1 Isolation des combles perdus.</strong> Laine minérale soufflée, épaisseur 300 mm, λ = 0,045 W/(m·K). Compris : pare-vapeur, piges de repérage, rehausse de trappe. Unité : m².</p>\n<h4>Extrait de la DPGF — Lot 06</h4>\n<table><thead><tr><th>N°</th><th>Désignation</th><th>U</th><th>Qté</th><th>PU HT</th><th>Montant HT</th></tr></thead><tbody>\n<tr><td>6.2.1</td><td>Doublage thermique façades</td><td>m²</td><td>612,00</td><td>38,50</td><td>23 562,00</td></tr>\n<tr><td>6.2.2</td><td>Doublage sur cage d'escalier</td><td>m²</td><td>148,00</td><td>34,00</td><td>5 032,00</td></tr>\n<tr><td>6.4.1</td><td>Isolation combles perdus</td><td>m²</td><td>215,00</td><td>24,00</td><td>5 610,00</td></tr>\n</tbody></table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Question 1 — Le doublage des façades est-il conforme à l'étude thermique ?</strong> Résistance de l'isolant : R = e / λ = 0,100 / 0,032 = 3,125 m²·K/W (la plaque de plâtre apporte environ 0,05 m²·K/W, généralement non comptée dans l'exigence portant sur l'isolant). L'étude exige R ≥ 3,70. 3,125 &lt; 3,70 : la prescription n'est <strong>pas conforme</strong>. Épaisseur nécessaire avec le même isolant : e = R × λ = 3,70 × 0,032 = 0,118 m, soit une épaisseur commerciale de 120 mm (R = 3,75). Correction proposée : « panneau de 120 mm, R ≥ 3,75 m²·K/W ». Le prix unitaire de l'article 6.2.1 sera à revoir à la hausse.</p>\n<p><strong>Question 2 — L'isolation des combles est-elle conforme ?</strong> R = 0,300 / 0,045 = 6,67 m²·K/W &lt; 8,00 : non conforme. Épaisseur nécessaire : 8,00 × 0,045 = 0,36 m. Pour un isolant soufflé, il faut en outre tenir compte du <strong>tassement</strong> : le CCTP doit préciser l'épaisseur après tassement et la masse surfacique minimale indiquée par le certificat du produit. Correction : « épaisseur installée permettant d'obtenir R ≥ 8,00 m²·K/W après tassement, soit environ 360 mm utiles selon certificat ».</p>\n<p><strong>Question 3 — Vérification arithmétique de la DPGF.</strong> 612,00 × 38,50 = 23 562,00 € ; 148,00 × 34,00 = 5 032,00 € ; 215,00 × 24,00 = 5 160,00 € et non 5 610,00 €. Il y a une erreur de 450 € sur la ligne 6.4.1 (inversion de chiffres). Total corrigé de l'extrait : 23 562,00 + 5 032,00 + 5 160,00 = 33 754,00 € HT.</p>\n<p><strong>Question 4 — Observation sur l'article 6.2.1.</strong> Le pare-vapeur et le traitement de l'étanchéité à l'air (boîtiers électriques, traversées) ne sont pas mentionnés. Il serait utile de préciser à quel lot revient la fourniture des boîtiers étanches et le calfeutrement des traversées, pour éviter un oubli à l'interface entre les lots plâtrerie et électricité.</p>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<ul>\n<li><strong>Confondre performance de l'isolant et performance de la paroi</strong> : l'exigence peut porter sur R de l'isolant seul, sur R de la paroi ou sur U de la paroi. Lire précisément l'énoncé.</li>\n<li><strong>Oublier les unités</strong> : épaisseur en mètres dans R = e / λ.</li>\n<li><strong>Lire une seule ligne de DPGF</strong> sans vérifier les sous-totaux et le report des montants.</li>\n<li><strong>Ignorer les prestations comprises</strong> : un prix qui paraît élevé peut s'expliquer par des prestations incluses (retours de tableaux, cornières).</li>\n<li><strong>Proposer une correction sans chiffrer son effet</strong> : une modification technique a toujours un impact sur le prix, à signaler au minimum.</li>\n<li><strong>Négliger les références</strong> : un NF DTU ou un avis technique cité conditionne la mise en œuvre et l'assurabilité.</li>\n<li><strong>Oublier la localisation</strong> : un article correct sur le plan technique mais mal localisé (un niveau ou un type de local oublié) conduit à des quantités fausses dans la DPGF et à des litiges sur le chantier.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pendant la période de consultation, l'entreprise qui relève une non-conformité ou une erreur dans le DCE pose une question écrite au maître d'œuvre. La réponse est communiquée à tous les candidats. Ne rien dire et chiffrer la solution non conforme expose l'entreprise à devoir refaire l'ouvrage à ses frais, car elle est censée connaître les règles de l'art.</div>"
      },
      {
       "titre": "Rédiger la réponse",
       "contenu": "<p>Une réponse d'analyse de CCTP ou de DPGF se rédige en quatre temps :</p>\n<ol>\n<li><strong>Citer</strong> la prescription (numéro d'article, valeur relevée) ;</li>\n<li><strong>Citer</strong> l'exigence de référence (étude, réglementation, plan) ;</li>\n<li><strong>Comparer</strong> par un calcul ou un raisonnement explicite ;</li>\n<li><strong>Conclure</strong> (conforme ou non conforme) et, si nécessaire, <strong>proposer</strong> une correction rédigée comme un article de CCTP, avec ses conséquences (prix, délai, autres lots).</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> modèle de phrase de conclusion. « L'article 6.2.1 prévoit un isolant de R = 3,125 m²·K/W, inférieur à la valeur de 3,70 m²·K/W exigée par l'étude thermique. La prescription n'est pas conforme. Il convient de prévoir un panneau de 120 mm (R = 3,75 m²·K/W), ce qui augmente le prix unitaire de l'article et réduit légèrement la surface habitable (environ 2 cm sur chaque mur de façade). »</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'analyse d'un CCTP ne consiste pas à recopier le texte : elle consiste à vérifier qu'il dit la bonne chose, au bon endroit, avec la bonne valeur, et qu'il est cohérent avec les plans, les études et le document de prix.</div>"
      }
     ],
     "points_cles": [
      "CCTP et DPGF sont reliés par une numérotation commune.",
      "Un article se décompose en caractéristiques, références, prestations comprises, localisation, unité.",
      "R = e / λ avec e en mètres ; vérifier si l'exigence porte sur l'isolant ou sur la paroi.",
      "Les isolants soufflés se prescrivent avec une épaisseur après tassement.",
      "Toujours refaire les produits quantité × prix unitaire et les totaux d'une DPGF.",
      "Une correction technique s'accompagne de ses conséquences (prix, surfaces, interfaces).",
      "Les interfaces entre lots (étanchéité à l'air, renforts) sont des zones d'oubli fréquentes.",
      "Réponse en quatre temps : prescription, exigence, comparaison, conclusion et proposition."
     ],
     "lexique": [
      {
       "terme": "Article",
       "def": "Paragraphe numéroté du CCTP décrivant un ouvrage."
      },
      {
       "terme": "Prestations comprises",
       "def": "Fournitures et travaux inclus dans le prix d'un ouvrage même s'ils ne font pas l'objet d'une ligne séparée."
      },
      {
       "terme": "Localisation",
       "def": "Indication des endroits où un ouvrage doit être réalisé."
      },
      {
       "terme": "Sous-total",
       "def": "Somme des montants d'un chapitre de la DPGF."
      },
      {
       "terme": "Tassement",
       "def": "Diminution d'épaisseur d'un isolant en vrac après sa mise en œuvre."
      },
      {
       "terme": "Certification produit",
       "def": "Garantie par un organisme tiers des performances déclarées d'un produit."
      },
      {
       "terme": "RSET",
       "def": "Récapitulatif standardisé de l'étude thermique et environnementale, qui fixe les performances à respecter."
      },
      {
       "terme": "Erreur arithmétique",
       "def": "Erreur de calcul dans un produit ou une somme d'un document de prix."
      },
      {
       "terme": "Question écrite",
       "def": "Demande de précision adressée au maître d'œuvre par un candidat pendant la consultation."
      },
      {
       "terme": "Interface",
       "def": "Limite entre les prestations de deux lots."
      }
     ]
    },
    {
     "id": "bteb-doc-fiches-techniques",
     "titre": "Lire une fiche technique, une déclaration des performances et un avis technique",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Identifier les différents documents qui décrivent un produit de construction",
      "Extraire d'une fiche technique les caractéristiques utiles à une vérification",
      "Interpréter une déclaration des performances et un certificat",
      "Repérer le domaine d'emploi et les limites d'un avis technique",
      "Comparer deux produits pour vérifier une équivalence"
     ],
     "sections": [
      {
       "titre": "Les documents qui décrivent un produit",
       "contenu": "<p>Un produit de construction est accompagné de plusieurs documents, d'origine et de valeur différentes :</p>\n<table><thead><tr><th>Document</th><th>Émetteur</th><th>Valeur</th></tr></thead><tbody>\n<tr><td><strong>Fiche technique</strong> (ou fiche produit)</td><td>Fabricant</td><td>Commerciale et technique : caractéristiques, dimensions, conditionnements, mise en œuvre conseillée</td></tr>\n<tr><td><strong>Déclaration des performances</strong> (DoP)</td><td>Fabricant</td><td>Réglementaire pour les produits couverts par une norme harmonisée ou une évaluation technique européenne ; elle accompagne le marquage CE et engage le fabricant</td></tr>\n<tr><td><strong>Certificat</strong> de produit</td><td>Organisme certificateur indépendant</td><td>Garantit, par des contrôles réguliers, que les performances annoncées sont respectées</td></tr>\n<tr><td><strong>Avis technique</strong> ou document technique d'application</td><td>Commission d'experts</td><td>Donne un avis sur l'aptitude à l'emploi d'un procédé non traditionnel, dans un domaine d'emploi défini</td></tr>\n<tr><td><strong>Fiche de données de sécurité</strong> (FDS)</td><td>Fabricant</td><td>Informations sur les dangers des produits chimiques (colles, résines, solvants) et les précautions</td></tr>\n<tr><td><strong>FDES</strong></td><td>Fabricant, vérifiée par un tiers</td><td>Données environnementales et sanitaires du produit</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour justifier une performance réglementaire, on s'appuie de préférence sur un document qui engage (déclaration des performances) ou qui est contrôlé par un tiers (certificat), plutôt que sur une simple documentation commerciale.</div>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "<p>Une <strong>fiche technique</strong> d'isolant, de menuiserie ou de revêtement contient en général :</p>\n<ul>\n<li>la désignation commerciale et la description du produit ;</li>\n<li>le domaine d'emploi (où et comment l'utiliser) ;</li>\n<li>les <strong>caractéristiques</strong> : dimensions, épaisseurs, masse, performances thermiques (λ, R), acoustiques, réaction au feu, résistance mécanique, comportement à l'eau ;</li>\n<li>les références normatives et les numéros de certificats ou d'avis techniques ;</li>\n<li>les conditionnements (nombre de panneaux par paquet, m² par palette) ;</li>\n<li>des recommandations de mise en œuvre, de stockage et d'entretien.</li>\n</ul>\n<p>Une <strong>déclaration des performances</strong> est un document normalisé : numéro unique, code d'identification du produit, usage prévu, fabricant, système d'évaluation, organisme notifié, puis un tableau des <strong>caractéristiques essentielles</strong> avec, pour chacune, la performance déclarée et la norme de référence. La mention « NPD » (performance non déterminée) signifie que le fabricant ne déclare pas cette caractéristique.</p>\n<p>Un <strong>avis technique</strong> précise le <strong>domaine d'emploi</strong> accepté (types de bâtiments, hauteurs, zones de vent, supports), les conditions de conception et de mise en œuvre, et une <strong>date de fin de validité</strong>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la mention « NPD » pour une caractéristique exigée par le CCTP signifie que le produit ne peut pas justifier cette exigence. Un produit sans déclaration pour la réaction au feu, par exemple, ne peut pas être accepté là où un classement est imposé.</div>"
      },
      {
       "titre": "Méthode d'exploitation",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'un produit convient à un emploi.<br>1. <strong>Identifier l'exigence</strong> : relever dans le CCTP, l'étude ou la réglementation la liste des performances exigées (par exemple R ≥ 3,70 m²·K/W, Euroclasse au moins B-s3, d0, compatibilité avec un mode de pose).<br>2. <strong>Identifier le produit</strong> précisément : référence exacte, épaisseur, version (une gamme comporte souvent plusieurs produits voisins).<br>3. <strong>Relever les performances</strong> dans la déclaration des performances ou le certificat, pour la bonne épaisseur.<br>4. <strong>Vérifier le domaine d'emploi</strong> : fiche technique et, s'il s'agit d'un procédé non traditionnel, avis technique en cours de validité.<br>5. <strong>Comparer</strong> point par point dans un tableau exigence / produit / conformité.<br>6. <strong>Conclure</strong> et signaler les réserves (validité, conditions de mise en œuvre particulières).</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fiches techniques évoluent : un fabricant peut modifier une formulation, retirer une épaisseur de sa gamme ou faire évoluer un classement. On télécharge donc la version en vigueur au moment de l'étude et on la date. Pour un chantier, les documents fournis doivent correspondre aux lots réellement livrés : le conducteur de travaux compare l'étiquette des colis avec la référence acceptée.</div>\n<p>Les documents de produits sont souvent en plusieurs langues et utilisent des notations européennes : λ<sub>D</sub> (lambda déclaré), R<sub>D</sub> (résistance déclarée), classes de tolérance dimensionnelle, codes de désignation normalisés (par exemple pour les isolants manufacturés, une chaîne de codes résumant les caractéristiques). Il faut savoir retrouver la bonne ligne dans ces tableaux.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le CCTP d'un lot d'isolation par l'extérieur sous enduit prescrit : « isolant en polystyrène expansé blanc, R ≥ 4,00 m²·K/W, Euroclasse E au minimum, système d'ITE sous enduit bénéficiant d'un document d'évaluation en cours de validité ». L'entreprise propose un panneau « Façade 32 » et fournit les extraits suivants.</p>\n<h4>Fiche technique « Façade 32 »</h4>\n<p>Panneau de polystyrène expansé gris graphité pour ITE sous enduit. λ = 0,032 W/(m·K). Épaisseurs disponibles : 100, 120, 140, 160 mm. Dimensions : 1 200 × 600 mm. Conditionnement : en 140 mm, 6 panneaux par paquet, soit 4,32 m².</p>\n<h4>Déclaration des performances (extrait)</h4>\n<table><thead><tr><th>Caractéristique essentielle</th><th>Performance déclarée</th></tr></thead><tbody>\n<tr><td>Conductivité thermique λ<sub>D</sub></td><td>0,032 W/(m·K)</td></tr>\n<tr><td>Résistance thermique R<sub>D</sub></td><td>3,10 (100 mm) ; 3,75 (120 mm) ; 4,35 (140 mm) ; 5,00 (160 mm) m²·K/W</td></tr>\n<tr><td>Réaction au feu</td><td>Euroclasse E</td></tr>\n<tr><td>Résistance à la traction perpendiculaire</td><td>TR100</td></tr>\n<tr><td>Absorption d'eau à long terme</td><td>NPD</td></tr>\n</tbody></table>\n<h4>Document d'évaluation du système d'ITE (extrait)</h4>\n<p>Système « Enduit X sur PSE », isolants admis : PSE blanc ou gris, λ ≤ 0,038, épaisseur 60 à 200 mm, TR ≥ 100 kPa. Fin de validité : 30 juin de l'année suivant celle de l'étude.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<table><thead><tr><th>Exigence</th><th>Produit proposé</th><th>Conformité</th></tr></thead><tbody>\n<tr><td>R ≥ 4,00 m²·K/W</td><td>Pour atteindre 4,00, il faut l'épaisseur 140 mm (R<sub>D</sub> = 4,35) ; 120 mm (3,75) est insuffisant</td><td>Conforme en 140 mm uniquement</td></tr>\n<tr><td>PSE « blanc »</td><td>PSE gris graphité</td><td>Non conforme à la lettre du CCTP</td></tr>\n<tr><td>Euroclasse E au minimum</td><td>E</td><td>Conforme</td></tr>\n<tr><td>Système sous évaluation valide</td><td>Le document admet le PSE gris, λ ≤ 0,038, TR ≥ 100 : TR100 et λ 0,032</td><td>Conforme, validité à vérifier à la date de pose</td></tr>\n</tbody></table>\n<p><strong>Commentaire.</strong> Le produit peut convenir techniquement en épaisseur 140 mm : il atteint la résistance exigée et entre dans le domaine du système évalué. En revanche, le CCTP prescrit un PSE blanc. Le PSE graphité est plus performant (λ plus faible), mais il absorbe davantage le rayonnement solaire : il doit être protégé du soleil pendant le chantier pour éviter les déformations. L'entreprise doit donc présenter ce produit comme une <strong>variante</strong> ou une équivalence, soumise à l'accord écrit du maître d'œuvre, en joignant les documents.</p>\n<p><strong>Quantité à commander</strong> pour 380 m² de façade avec 5 % de pertes : 380 × 1,05 = 399 m² ; 399 / 4,32 = 92,4, soit 93 paquets de 140 mm.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant l'exécution, l'entreprise transmet au maître d'œuvre une fiche de demande d'agrément de matériaux avec fiches techniques, déclarations des performances et certificats. Le visa du maître d'œuvre est conservé ; les documents rejoindront le DOE.</div>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<ul>\n<li><strong>Lire la performance d'une autre épaisseur</strong> : les tableaux donnent souvent plusieurs épaisseurs sur une même ligne.</li>\n<li><strong>Recalculer R avec un λ arrondi</strong> au lieu de prendre le R<sub>D</sub> déclaré : la valeur déclarée prime.</li>\n<li><strong>Ignorer la date de validité</strong> d'un avis technique ou d'un certificat.</li>\n<li><strong>Confondre produit et système</strong> : un isolant peut être bon en lui-même mais ne pas faire partie du système évalué (colle, chevilles, enduit).</li>\n<li><strong>Prendre la fiche commerciale pour une preuve</strong> réglementaire.</li>\n<li><strong>Négliger les conditions de mise en œuvre</strong> (température minimale d'application d'un enduit, protection contre les UV, temps de séchage) qui deviennent des obligations contractuelles.</li>\n</ul>\n<p>À l'épreuve écrite, les questions portant sur une fiche technique demandent le plus souvent de relever une performance pour la bonne épaisseur, de calculer une épaisseur nécessaire, une quantité à commander à partir du conditionnement, ou de justifier l'acceptation ou le refus d'un produit. Dans tous les cas, on cite la ligne exacte du document utilisé et l'on termine par une conclusion nette : produit conforme, non conforme, ou conforme sous réserve d'une condition précisée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> vérifier un produit, c'est comparer point par point une liste d'exigences et une liste de performances prouvées, pour la bonne référence et la bonne épaisseur, dans le bon domaine d'emploi et à la bonne date.</div>"
      }
     ],
     "points_cles": [
      "Fiche technique (fabricant), déclaration des performances (réglementaire), certificat (tiers), avis technique (procédé non traditionnel).",
      "La déclaration des performances accompagne le marquage CE et liste les caractéristiques essentielles.",
      "NPD signifie que la performance n'est pas déclarée : elle ne peut pas être justifiée.",
      "L'avis technique fixe un domaine d'emploi et une date de fin de validité.",
      "On retient la valeur déclarée RD pour l'épaisseur exacte du produit proposé.",
      "Un produit doit appartenir au système évalué lorsqu'un procédé complet est exigé.",
      "Un produit différent de la prescription est présenté comme variante soumise à accord écrit.",
      "Tableau exigence / produit / conformité pour toute vérification."
     ],
     "lexique": [
      {
       "terme": "Fiche technique",
       "def": "Document du fabricant décrivant les caractéristiques et l'emploi d'un produit."
      },
      {
       "terme": "Déclaration des performances (DoP)",
       "def": "Document réglementaire du fabricant listant les performances déclarées des caractéristiques essentielles."
      },
      {
       "terme": "NPD",
       "def": "Performance non déterminée : caractéristique non déclarée par le fabricant."
      },
      {
       "terme": "λD / RD",
       "def": "Conductivité et résistance thermiques déclarées d'un isolant."
      },
      {
       "terme": "Domaine d'emploi",
       "def": "Ensemble des conditions dans lesquelles un produit ou un procédé peut être utilisé."
      },
      {
       "terme": "Système d'ITE",
       "def": "Ensemble cohérent de produits (colle, isolant, fixations, enduit) évalué globalement."
      },
      {
       "terme": "Variante",
       "def": "Solution différente de celle prescrite, proposée par l'entreprise et soumise à acceptation."
      },
      {
       "terme": "Demande d'agrément",
       "def": "Soumission d'un produit au visa du maître d'œuvre avant sa mise en œuvre."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité d'un produit chimique."
      },
      {
       "terme": "PSE graphité",
       "def": "Polystyrène expansé contenant du graphite, plus isolant que le PSE blanc mais sensible au soleil."
      }
     ]
    },
    {
     "id": "bteb-doc-planning-compte-rendu",
     "titre": "Analyser un planning, un compte rendu de chantier et un procès-verbal",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire un planning de travaux : tâches, durées, liens, jalons, chemin critique",
      "Mesurer l'impact d'un retard sur la date de fin",
      "Extraire d'un compte rendu de chantier les décisions, les actions et les responsables",
      "Exploiter un procès-verbal de réception et la liste des réserves",
      "Rédiger une synthèse ou une proposition à partir de ces documents"
     ],
     "sections": [
      {
       "titre": "Trois documents de suivi",
       "contenu": "<p>Pendant le chantier, trois types de documents permettent de suivre l'opération et sont souvent proposés à l'analyse :</p>\n<table><thead><tr><th>Document</th><th>Auteur</th><th>Rôle</th></tr></thead><tbody>\n<tr><td><strong>Planning</strong> (calendrier d'exécution)</td><td>OPC, maître d'œuvre ou entreprise</td><td>Prévoir et suivre l'enchaînement des tâches et les dates clés</td></tr>\n<tr><td><strong>Compte rendu de chantier</strong> (CR)</td><td>Maître d'œuvre, après chaque réunion hebdomadaire</td><td>Tracer l'avancement, les décisions, les demandes, les retards ; il a une valeur contractuelle s'il n'est pas contesté</td></tr>\n<tr><td><strong>Procès-verbal</strong> (PV) de réception</td><td>Maître d'ouvrage, sur proposition du maître d'œuvre</td><td>Acter la réception de l'ouvrage, avec ou sans réserves</td></tr>\n</tbody></table>\n<p>Le vocabulaire du planning est celui de la planification : tâche, durée (en jours ouvrés ou calendaires), lien d'antériorité, <strong>jalon</strong> (événement de durée nulle, représenté par un losange : hors d'eau, hors d'air, réception), marge, chemin critique, avancement réel, ligne d'état (trait vertical à la date du jour).</p>\n<p>Le compte rendu suit une organisation stable d'une réunion à l'autre : en-tête (numéro, date, lieu, liste des présents, absents et excusés), observations générales (sécurité, hygiène, propreté, planning, documents), puis observations lot par lot, et enfin la date de la prochaine réunion. Chaque observation est numérotée et souvent suivie d'une colonne « action » indiquant qui doit agir et avant quelle date. Les points non soldés sont repris d'un compte rendu au suivant jusqu'à leur résolution.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le planning dit ce qui devait se passer, le compte rendu dit ce qui s'est passé et ce qui a été décidé, le procès-verbal acte l'état final. Les trois se lisent ensemble pour reconstituer l'histoire d'un chantier.</div>"
      },
      {
       "titre": "Méthodes de lecture",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un planning de Gantt.<br>1. Repérer l'échelle de temps (jours, semaines), les jours non travaillés (week-ends, congés de fin d'année grisés) et la date de démarrage.<br>2. Lister les jalons et leurs dates.<br>3. Pour chaque tâche : début, fin, durée, prédécesseurs (flèches de liaison ou colonne dédiée).<br>4. Identifier le chemin critique (souvent en rouge) ou le reconstituer par les liens et les marges.<br>5. Comparer avancement réel et prévu à la date de la ligne d'état.<br>6. Pour un retard : vérifier si la tâche est critique ; si oui, la fin est décalée d'autant, sauf mesure de rattrapage ; si non, comparer le retard à la marge disponible.</div>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un compte rendu de chantier.<br>1. Relever l'en-tête : numéro, date, présents, absents, diffusion.<br>2. Lire les observations générales (sécurité, propreté, planning).<br>3. Lire lot par lot les observations, en notant pour chaque point : constat, décision ou demande, <strong>responsable</strong> de l'action, <strong>délai</strong>.<br>4. Repérer les points qui reviennent d'un compte rendu à l'autre (non résolus).<br>5. Vérifier la cohérence avec le planning (retards annoncés, dates de livraison).</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Opération : réhabilitation d'une école (6 classes). Date de la réunion : semaine 14.</p>\n<h4>Extrait du planning (durées en jours ouvrés)</h4>\n<table><thead><tr><th>Tâche</th><th>Durée</th><th>Prédécesseurs</th><th>Début prévu</th><th>Fin prévue</th></tr></thead><tbody>\n<tr><td>A Démolitions intérieures</td><td>10</td><td>—</td><td>J0</td><td>J10</td></tr>\n<tr><td>B Reprise de structure (linteaux)</td><td>8</td><td>A</td><td>J10</td><td>J18</td></tr>\n<tr><td>C Menuiseries extérieures</td><td>12</td><td>A</td><td>J10</td><td>J22</td></tr>\n<tr><td>D Cloisons et doublages</td><td>15</td><td>B, C</td><td>J22</td><td>J37</td></tr>\n<tr><td>E Électricité (incorporations)</td><td>10</td><td>D (début + 5 j)</td><td>J27</td><td>J37</td></tr>\n<tr><td>F Peinture et sols</td><td>12</td><td>D, E</td><td>J37</td><td>J49</td></tr>\n<tr><td>Jalon Réception</td><td>0</td><td>F</td><td>J49</td><td>J49</td></tr>\n</tbody></table>\n<h4>Extrait du compte rendu n° 6</h4>\n<p><strong>Généralités</strong> : la réception est prévue impérativement avant la rentrée scolaire ; aucun report possible.</p>\n<p><strong>Lot 03 Menuiseries extérieures</strong> : le fabricant annonce un retard de livraison de 6 jours ouvrés sur les fenêtres. L'entreprise propose de poser d'abord les fenêtres du rez-de-chaussée déjà livrées. Action : entreprise du lot 03, confirmer la date de livraison avant la prochaine réunion.</p>\n<p><strong>Lot 02 Structure</strong> : travaux de linteaux terminés avec 2 jours d'avance.</p>\n<p><strong>Lot 05 Électricité</strong> : demande la fourniture des plans de cloisons à jour (indice C). Action : maître d'œuvre, diffusion sous 48 h.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Question 1 — Chemin critique et marges.</strong> D ne peut commencer qu'après B (fin J18) et C (fin J22). C est donc plus contraignant : le chemin A, C, D, F est critique, avec E en parallèle (E finit en même temps que D, à J37, donc E est aussi critique pour F). B a une marge de 22 − 18 = 4 jours.</p>\n<p><strong>Question 2 — Conséquence du retard de livraison des menuiseries.</strong> Si les menuiseries ne peuvent être posées qu'avec 6 jours de retard, C se termine à J28 au lieu de J22. C étant critique, D commence à J28, se termine à J43 ; E (début D + 5 j) va de J33 à J43 ; F va de J43 à J55. La réception glisse de J49 à J55 : 6 jours ouvrés de retard, inacceptable puisque la date de réception est impérative.</p>\n<p><strong>Question 3 — Mesures possibles.</strong> 1. Exploiter la proposition de l'entreprise : poser d'abord les menuiseries du RDC, ce qui permet de démarrer les cloisons au RDC sans attendre la totalité de C (lien fin-début transformé en lien partiel par zone). 2. Renforcer l'équipe de cloisons (D) pour réduire sa durée de 15 à 11 jours. 3. Organiser peinture et sols par zones dès qu'une zone est terminée. La combinaison de ces mesures doit permettre de récupérer les 6 jours. L'avance de 2 jours du lot structure ne change rien, car B n'est pas critique.</p>\n<p><strong>Question 4 — Action à suivre.</strong> La demande du lot électricité (plans indice C) est une action du maître d'œuvre sous 48 h ; si elle n'est pas faite, l'incorporation (E) risque de se faire sur des plans périmés, alors qu'E est critique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une avance sur une tâche non critique ne compense pas un retard sur une tâche critique. On ne raisonne jamais en « totalisant » avances et retards de tâches différentes.</div>"
      },
      {
       "titre": "Le procès-verbal de réception et la liste des réserves",
       "contenu": "<p>Un <strong>PV de réception</strong> comprend : l'identification de l'opération, du marché et de l'entreprise ; la date des opérations préalables ; la décision du maître d'ouvrage (réception sans réserve, avec réserves, ou refus) ; la date d'effet de la réception ; la liste des réserves annexée, avec pour chacune la localisation, la description, le lot concerné et le délai de levée ; les signatures.</p>\n<table><thead><tr><th>N°</th><th>Localisation</th><th>Réserve</th><th>Lot</th><th>Délai</th></tr></thead><tbody>\n<tr><td>1</td><td>Classe 2</td><td>Fenêtre F4 : ouvrant frotte en partie basse, réglage à reprendre</td><td>03</td><td>15 jours</td></tr>\n<tr><td>2</td><td>Couloir RDC</td><td>Fissure d'enduit au droit de la jonction cloison / plafond</td><td>06</td><td>15 jours</td></tr>\n<tr><td>3</td><td>Sanitaires</td><td>Absence de fixation d'un lave-mains</td><td>07</td><td>8 jours</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour chaque réserve, l'entreprise intervient, puis le maître d'œuvre constate la levée et la consigne dans un procès-verbal de levée des réserves. Si une réserve n'est pas levée dans le délai, le maître d'ouvrage peut, après mise en demeure, faire exécuter les travaux par une autre entreprise aux frais de l'entreprise défaillante, notamment en utilisant la retenue de garantie.</div>\n<p>À l'analyse, on vérifie que chaque réserve est précise (localisée, décrite, attribuée à un lot, avec un délai), on classe les réserves par lot pour la levée, et on explique leurs conséquences : la réception fait courir les garanties, et les défauts réservés relèvent de la garantie de parfait achèvement.</p>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<ul>\n<li><strong>Confondre jours ouvrés et jours calendaires</strong> : 10 jours ouvrés font deux semaines calendaires.</li>\n<li><strong>Oublier les liens partiels</strong> (début + 5 jours) et les décalages dans le calcul des dates.</li>\n<li><strong>Considérer qu'un retard décale toujours la fin</strong> : seulement s'il dépasse la marge de la tâche.</li>\n<li><strong>Lire un compte rendu sans repérer les responsables et délais</strong> des actions.</li>\n<li><strong>Accepter une réserve vague</strong> (« finitions à reprendre ») : elle sera impossible à lever ou à contester.</li>\n<li><strong>Oublier la valeur des documents</strong> : un compte rendu non contesté dans le délai prévu est réputé accepté par les participants.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'analyse de ces documents vise toujours une décision : faut-il agir, qui doit agir, avant quand, avec quelle conséquence sur le délai ou le coût ? Une bonne réponse se termine par une proposition concrète.</div>"
      }
     ],
     "points_cles": [
      "Planning = prévu ; compte rendu = constaté et décidé ; PV = état final acté.",
      "Jalons de durée nulle, liens d'antériorité, chemin critique, ligne d'état.",
      "Un retard sur une tâche critique décale la fin ; sur une tâche non critique, seulement au-delà de la marge.",
      "Une avance sur une tâche non critique ne compense pas un retard critique.",
      "Un compte rendu se lit en relevant constat, décision, responsable et délai pour chaque point.",
      "Mesures de rattrapage : travail par zones, renfort d'effectif, chevauchement de tâches.",
      "Le PV de réception liste des réserves précises, attribuées et assorties d'un délai.",
      "La levée des réserves est constatée par procès-verbal."
     ],
     "lexique": [
      {
       "terme": "Jalon",
       "def": "Événement de durée nulle marquant une étape clé du planning."
      },
      {
       "terme": "Jours ouvrés",
       "def": "Jours effectivement travaillés, hors week-ends et jours fériés."
      },
      {
       "terme": "Ligne d'état",
       "def": "Repère vertical sur un planning indiquant la date d'analyse de l'avancement."
      },
      {
       "terme": "Lien partiel",
       "def": "Lien d'antériorité permettant de démarrer une tâche avant la fin d'une autre."
      },
      {
       "terme": "Compte rendu de chantier",
       "def": "Document rédigé après chaque réunion de chantier, traçant avancement, décisions et actions."
      },
      {
       "terme": "OPC",
       "def": "Ordonnancement, pilotage et coordination du chantier."
      },
      {
       "terme": "Mise en demeure",
       "def": "Demande formelle d'exécuter une obligation dans un délai, préalable à des sanctions."
      },
      {
       "terme": "Levée des réserves",
       "def": "Correction des défauts réservés à la réception, constatée par procès-verbal."
      },
      {
       "terme": "Mesure de rattrapage",
       "def": "Action destinée à résorber un retard sur le planning."
      },
      {
       "terme": "Diffusion",
       "def": "Liste des destinataires d'un document de chantier."
      }
     ]
    },
    {
     "id": "bteb-doc-a-devis-sous-detail",
     "titre": "Analyser un devis, un bordereau de prix et un sous-détail",
     "niveau": "Tle",
     "options": [
      "a"
     ],
     "duree": 45,
     "objectifs": [
      "Identifier la structure d'un devis, d'un BPU et d'un DQE",
      "Vérifier les mentions, les calculs et la cohérence d'un document de prix",
      "Reconstituer un prix unitaire à partir d'un sous-détail et d'un coefficient de vente",
      "Comparer un prix à une estimation ou à d'autres offres et justifier un écart",
      "Rédiger une note d'analyse économique"
     ],
     "sections": [
      {
       "titre": "Les documents de prix",
       "contenu": "<p>Selon le type de marché et le moment, le technicien de l'option études et économie analyse différents documents :</p>\n<table><thead><tr><th>Document</th><th>Contexte</th><th>Contenu</th></tr></thead><tbody>\n<tr><td><strong>Devis</strong></td><td>Marché privé, travaux modificatifs</td><td>Identification des parties, description des travaux, quantités, prix unitaires, montants HT, taux et montant de TVA, total TTC, conditions de paiement, durée de validité</td></tr>\n<tr><td><strong>BPU</strong></td><td>Marché à prix unitaires</td><td>Liste des prix unitaires en chiffres et en lettres, par numéro de prix</td></tr>\n<tr><td><strong>DQE</strong></td><td>Marché à prix unitaires</td><td>Quantités estimées × prix du BPU, permettant de comparer les offres</td></tr>\n<tr><td><strong>DPGF</strong></td><td>Marché forfaitaire</td><td>Décomposition d'un prix global</td></tr>\n<tr><td><strong>Sous-détail de prix</strong></td><td>Justification d'un prix</td><td>Ressources par unité d'ouvrage et coefficient de vente</td></tr>\n</tbody></table>\n<p>Dans un BPU, le prix écrit <strong>en lettres</strong> fait généralement foi en cas de discordance avec le prix en chiffres. Dans un DQE, c'est le prix du BPU qui prime sur le montant calculé : une erreur de multiplication dans le DQE est rectifiée à partir du prix unitaire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un document de prix s'analyse à trois niveaux : la forme (mentions et unités), l'arithmétique (produits et totaux), le fond (réalisme des prix et des quantités par rapport à l'ouvrage décrit).</div>"
      },
      {
       "titre": "Méthode d'analyse",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un document de prix en cinq passes.<br>1. <strong>Forme</strong> : identification de l'entreprise et du client, date, durée de validité, désignation claire de chaque ouvrage, unités cohérentes avec le CCTP, taux de TVA adapté.<br>2. <strong>Arithmétique</strong> : refaire chaque produit quantité × prix, chaque sous-total, le total HT, la TVA et le total TTC.<br>3. <strong>Quantités</strong> : comparer aux quantités de l'avant-métré ou du DQE ; repérer les quantités modifiées par l'entreprise.<br>4. <strong>Prix</strong> : comparer chaque prix unitaire à l'estimation et aux autres offres ; calculer les écarts en valeur et en pourcentage ; repérer les prix anormalement bas ou élevés.<br>5. <strong>Justification</strong> : pour un prix douteux, reconstituer ou analyser le sous-détail (temps, matériaux, coefficient) et formuler une demande de précision.</div>\n<p>Pour un <strong>devis</strong> de marché privé, on vérifie en plus les mentions attendues : coordonnées et numéro d'identification de l'entreprise, date et durée de validité, décompte détaillé des travaux, taux de TVA appliqué et justification d'un taux réduit, conditions de paiement (acompte à la commande, échéancier), délai d'exécution, références de l'assurance décennale. Un devis signé par le client vaut contrat : son contenu doit donc être précis et sans ambiguïté.</p>\n<p>Les écarts se calculent toujours par rapport à une référence explicite : écart = (prix analysé − prix de référence) / prix de référence × 100. On fixe un seuil d'alerte (par exemple ±20 % sur un prix unitaire, ±10 % sur un total de lot) au-delà duquel l'écart doit être expliqué.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un total d'offre proche de l'estimation peut cacher des écarts importants qui se compensent ligne à ligne. En prix unitaires, un prix très élevé sur un ouvrage dont la quantité risque d'augmenter, et très bas sur un ouvrage dont la quantité risque de diminuer, est une stratégie d'offre déséquilibrée à repérer.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Marché à prix unitaires de VRD et de gros œuvre pour un petit équipement. Le DCE comporte un DQE ; l'estimation du maître d'œuvre et l'offre de l'entreprise Bâti-Est sont les suivantes (valeurs fictives).</p>\n<table><thead><tr><th>N° prix</th><th>Désignation</th><th>U</th><th>Qté DQE</th><th>PU estimation</th><th>PU Bâti-Est</th><th>Montant Bâti-Est</th></tr></thead><tbody>\n<tr><td>1</td><td>Terrassement en pleine masse</td><td>m³</td><td>420</td><td>14,00</td><td>12,50</td><td>5 250,00</td></tr>\n<tr><td>2</td><td>Évacuation des terres en décharge</td><td>m³</td><td>380</td><td>22,00</td><td>9,00</td><td>3 420,00</td></tr>\n<tr><td>3</td><td>Béton de semelles C25/30</td><td>m³</td><td>36</td><td>185,00</td><td>192,00</td><td>6 912,00</td></tr>\n<tr><td>4</td><td>Maçonnerie de blocs 20 cm</td><td>m²</td><td>540</td><td>62,00</td><td>61,00</td><td>3 294,00</td></tr>\n<tr><td>5</td><td>Purge de sol de mauvaise qualité et substitution</td><td>m³</td><td>30</td><td>48,00</td><td>95,00</td><td>2 850,00</td></tr>\n</tbody></table>\n<p>Total de l'offre annoncé par l'entreprise : 21 726,00 € HT. Prix n° 4 du BPU de l'entreprise écrit en lettres : « soixante et un euros ».</p>\n<p>Sous-détail fourni par l'entreprise pour le prix n° 4 : blocs et mortier 19,80 €/m² ; main-d'œuvre 0,75 h/m² à 30,00 €/h ; matériel 1,70 €/m² ; coefficient de vente 1,35.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Vérification arithmétique.</strong> Ligne 4 : 540 × 61,00 = 32 940,00 € et non 3 294,00 € (erreur de virgule). Le prix en lettres confirme 61 €/m² : c'est le montant qui est rectifié. Les autres lignes sont justes. Total rectifié : 5 250,00 + 3 420,00 + 6 912,00 + 32 940,00 + 2 850,00 = <strong>51 372,00 € HT</strong> au lieu de 21 726,00 €. Le classement de l'offre doit être établi sur ce montant rectifié.</p>\n<p><strong>2. Comparaison à l'estimation.</strong> Montant de l'estimation : 5 880 + 8 360 + 6 660 + 33 480 + 1 440 = 55 820 € HT. Écart global : (51 372 − 55 820) / 55 820 ≈ −8,0 %. L'offre est globalement plus basse que l'estimation.</p>\n<p><strong>3. Écarts ligne à ligne.</strong> Prix 2 (évacuation) : (9,00 − 22,00) / 22,00 ≈ −59 % ; prix 5 (purge) : (95,00 − 48,00) / 48,00 ≈ +98 %. Les autres écarts sont inférieurs à 10 %.</p>\n<p><strong>4. Interprétation.</strong> Le prix d'évacuation paraît <strong>anormalement bas</strong> : il ne couvre vraisemblablement pas le transport et les frais de décharge. Il faut en demander la justification (décharge proche, réemploi des terres sur un autre chantier ?). Le prix de purge est très élevé : si, en cours de chantier, la quantité de purge augmente (sol médiocre fréquent), le coût final augmentera fortement. L'offre présente donc un <strong>déséquilibre</strong> : prix bas sur une quantité qui risque de baisser, prix haut sur une quantité incertaine qui risque d'augmenter.</p>\n<p><strong>5. Contrôle du sous-détail du prix 4.</strong> Déboursé sec : 19,80 + 0,75 × 30,00 + 1,70 = 19,80 + 22,50 + 1,70 = 44,00 €/m². Prix de vente : 44,00 × 1,35 = 59,40 €/m². L'entreprise propose 61,00 € : écart de 1,60 € (+2,7 %), qui peut correspondre à un arrondi ou à des frais non détaillés ; à faire préciser, sans caractère anormal.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le rapport d'analyse mentionne les rectifications d'erreurs matérielles, les demandes de précisions envoyées aux candidats et leurs réponses. En marché public, une offre dont le prix reste anormalement bas après justification peut être rejetée ; cette décision doit être motivée.</div>"
      },
      {
       "titre": "Rédiger la note d'analyse",
       "contenu": "<p>La note d'analyse économique est un document court et structuré :</p>\n<ol>\n<li><strong>Objet</strong> : quelle offre ou quel devis, pour quel lot, à quelle date.</li>\n<li><strong>Vérification formelle et arithmétique</strong> : erreurs relevées et montants rectifiés.</li>\n<li><strong>Comparaison</strong> : tableau des écarts par rapport à l'estimation et aux autres offres, en valeur et en pourcentage.</li>\n<li><strong>Points d'attention</strong> : prix anormaux, quantités modifiées, ouvrages non chiffrés ou « compris dans un autre prix ».</li>\n<li><strong>Conclusion et proposition</strong> : offre recevable ou non, demandes de précisions, éventuelle négociation.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger une conclusion. « Après rectification d'une erreur de calcul sur le prix n° 4, l'offre de l'entreprise Bâti-Est s'élève à 51 372,00 € HT, soit 8,0 % de moins que l'estimation. Elle présente deux prix atypiques : l'évacuation des terres (−59 %) et la purge de sol (+98 %). Il est proposé de demander à l'entreprise de justifier le prix n° 2 et de préciser les conditions du prix n° 5 avant toute décision d'attribution. »</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une note d'analyse ne contient pas d'opinion non justifiée (« ce prix est trop cher ») : chaque appréciation s'appuie sur une référence chiffrée (estimation, autres offres, sous-détail, base de prix).</div>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<ul>\n<li><strong>Ne pas refaire les calculs</strong> : les erreurs de virgule ou d'inversion de chiffres sont fréquentes et peuvent modifier le classement.</li>\n<li><strong>Corriger le prix unitaire au lieu du montant</strong> : en principe, c'est le prix unitaire (et le prix en lettres) qui prévaut, sauf disposition contraire du règlement de la consultation.</li>\n<li><strong>Comparer des montants HT et TTC</strong>, ou des prix de dates différentes sans actualisation.</li>\n<li><strong>Calculer un écart par rapport à la mauvaise référence</strong> : préciser toujours « par rapport à l'estimation » ou « par rapport à la moyenne des offres ».</li>\n<li><strong>Oublier l'effet des quantités</strong> : un prix unitaire anormal a d'autant plus d'impact que la quantité est grande ou incertaine.</li>\n<li><strong>Confondre déboursé sec et prix de vente</strong> lors de l'analyse d'un sous-détail.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> analyser un document de prix, c'est vérifier, comparer, expliquer et proposer. Le résultat est une décision éclairée du maître d'ouvrage, fondée sur des chiffres exacts.</div>"
      }
     ],
     "points_cles": [
      "Devis, BPU, DQE, DPGF et sous-détail répondent à des contextes différents.",
      "Dans un BPU, le prix en lettres fait généralement foi ; dans un DQE, le prix unitaire prime sur le montant.",
      "Analyse en trois niveaux : forme, arithmétique, fond.",
      "Écart = (prix analysé − référence) / référence × 100, avec une référence toujours précisée.",
      "Un total proche de l'estimation peut masquer des écarts qui se compensent.",
      "Une offre déséquilibrée combine prix bas sur quantités sûres et prix hauts sur quantités incertaines.",
      "Un sous-détail se contrôle : DS = matériaux + main-d'œuvre + matériel, puis PV = DS × K.",
      "La note d'analyse conclut par une proposition argumentée et chiffrée."
     ],
     "lexique": [
      {
       "terme": "Devis",
       "def": "Document décrivant et chiffrant des travaux, valant offre pendant sa durée de validité."
      },
      {
       "terme": "BPU",
       "def": "Bordereau des prix unitaires, en chiffres et en lettres."
      },
      {
       "terme": "DQE",
       "def": "Détail quantitatif estimatif : quantités estimées multipliées par les prix unitaires."
      },
      {
       "terme": "Erreur matérielle",
       "def": "Erreur de calcul ou d'écriture dans une offre, rectifiable selon les règles de la consultation."
      },
      {
       "terme": "Écart relatif",
       "def": "Différence entre deux valeurs rapportée à la valeur de référence, en pourcentage."
      },
      {
       "terme": "Offre déséquilibrée",
       "def": "Offre dont la répartition des prix unitaires exploite les incertitudes sur les quantités."
      },
      {
       "terme": "Purge",
       "def": "Enlèvement d'un sol de mauvaise qualité remplacé par un matériau d'apport."
      },
      {
       "terme": "Demande de précision",
       "def": "Question écrite adressée à un candidat pour éclaircir son offre."
      },
      {
       "terme": "Note d'analyse",
       "def": "Document synthétique présentant l'examen économique d'une offre."
      },
      {
       "terme": "Montant rectifié",
       "def": "Montant d'une offre après correction des erreurs matérielles."
      }
     ]
    },
    {
     "id": "bteb-doc-b-programme-plu",
     "titre": "Analyser un programme de construction et un règlement de PLU",
     "niveau": "Tle",
     "options": [
      "b"
     ],
     "duree": 45,
     "objectifs": [
      "Repérer la structure d'un programme de construction et d'un règlement de zone de PLU",
      "Traduire les règles d'implantation, de hauteur, d'emprise et d'aspect en contraintes graphiques",
      "Déterminer l'enveloppe constructible d'un terrain",
      "Vérifier la compatibilité d'un programme avec les règles d'urbanisme",
      "Rédiger une analyse argumentée préalable à l'esquisse"
     ],
     "sections": [
      {
       "titre": "Deux documents complémentaires",
       "contenu": "<p>L'épreuve d'analyse de l'option assistant en architecture porte souvent sur un <strong>programme de construction</strong> et sur les <strong>règles d'urbanisme</strong> applicables au terrain. Le premier dit ce que veut le maître d'ouvrage ; le second dit ce que la collectivité autorise.</p>\n<p>Le <strong>plan local d'urbanisme</strong> (PLU, ou PLUi lorsqu'il est intercommunal) comprend notamment un rapport de présentation, un projet d'aménagement et de développement durables, des orientations d'aménagement et de programmation (OAP), un <strong>règlement</strong> écrit et graphique, et des annexes (servitudes d'utilité publique, réseaux, risques). Le règlement graphique découpe le territoire en <strong>zones</strong> :</p>\n<ul>\n<li><strong>U</strong> : zones urbaines, déjà équipées ;</li>\n<li><strong>AU</strong> : zones à urbaniser ;</li>\n<li><strong>A</strong> : zones agricoles ;</li>\n<li><strong>N</strong> : zones naturelles et forestières.</li>\n</ul>\n<p>Le règlement écrit de chaque zone est organisé par thèmes : destination des constructions et usages des sols ; caractéristiques urbaine, architecturale, environnementale et paysagère (implantation, hauteur, emprise, aspect extérieur, espaces verts) ; équipements et réseaux (accès, voirie, eau, assainissement), auxquels s'ajoutent les règles de stationnement.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> avant toute esquisse, on doit savoir dans quelle zone se trouve le terrain, quelles règles s'appliquent, et s'il est concerné par des servitudes ou des protections (monument historique, risques naturels, plan de prévention).</div>"
      },
      {
       "titre": "Traduire les règles en contraintes graphiques",
       "contenu": "<table><thead><tr><th>Règle</th><th>Formulation type</th><th>Traduction graphique</th></tr></thead><tbody>\n<tr><td>Implantation par rapport aux voies</td><td>« à l'alignement » ou « en retrait d'au moins 5 m »</td><td>Ligne de recul parallèle à la voie sur le plan de masse</td></tr>\n<tr><td>Implantation par rapport aux limites séparatives</td><td>« en limite ou à une distance au moins égale à la moitié de la hauteur, avec un minimum de 3 m » (L ≥ H/2, minimum 3 m)</td><td>Bande inconstructible variable selon la hauteur prévue ; vérification en coupe</td></tr>\n<tr><td>Emprise au sol</td><td>« limitée à 40 % de la surface du terrain »</td><td>Surface maximale de l'emprise du projet</td></tr>\n<tr><td>Hauteur</td><td>« 7 m à l'égout, 10 m au faîtage, mesurée à partir du terrain naturel »</td><td>Gabarit en coupe et en façade</td></tr>\n<tr><td>Aspect extérieur</td><td>Pentes, matériaux, couleurs de toiture et de façade, clôtures</td><td>Choix de la toiture et des matériaux</td></tr>\n<tr><td>Espaces verts</td><td>« au moins 30 % du terrain en pleine terre »</td><td>Surface minimale non construite et non imperméabilisée</td></tr>\n<tr><td>Stationnement</td><td>« 2 places par logement, dont une couverte »</td><td>Nombre et dimensions des places (souvent 2,50 × 5,00 m)</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déterminer l'enveloppe constructible. 1. Tracer le terrain à l'échelle avec ses limites et la voie. 2. Reporter les reculs par rapport aux voies et aux limites séparatives. 3. Hachurer la zone constructible restante. 4. Calculer l'emprise maximale autorisée et la comparer à la zone hachurée : la plus petite des deux contraintes s'applique. 5. En coupe, tracer le gabarit de hauteur (égout, faîtage) et les règles de distance liées à la hauteur. 6. Déduire la surface de plancher possible en multipliant l'emprise par le nombre de niveaux compatibles avec la hauteur, puis vérifier les espaces verts et le stationnement.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<h4>Programme (extrait)</h4>\n<p>Une commune souhaite construire une <strong>maison de santé</strong> sur un terrain lui appartenant. Programme : 6 cabinets médicaux de 16 m², une salle d'attente de 40 m², un secrétariat-accueil de 20 m², des sanitaires accessibles (2 × 5 m²), un local du personnel de 15 m², des locaux techniques et de rangement de 12 m², circulations estimées à 20 % des surfaces utiles. Bâtiment de plain-pied souhaité pour l'accessibilité. Stationnement : 12 places, dont au moins une place adaptée.</p>\n<h4>Terrain</h4>\n<p>Parcelle rectangulaire de 30,00 m de façade sur rue (au sud) et 40,00 m de profondeur, soit 1 200 m². Terrain plat. Zone UB du PLU.</p>\n<h4>Règlement de la zone UB (extrait)</h4>\n<ul>\n<li>Implantation : recul d'au moins 5,00 m par rapport à l'alignement de la voie.</li>\n<li>Limites séparatives : en limite, ou à une distance au moins égale à la moitié de la hauteur à l'égout, sans être inférieure à 3,00 m.</li>\n<li>Emprise au sol maximale : 30 % de la surface du terrain.</li>\n<li>Hauteur maximale : 6,00 m à l'égout ou à l'acrotère.</li>\n<li>Espaces verts de pleine terre : au moins 25 % du terrain.</li>\n<li>Stationnement pour les activités de services : selon le programme, avec au moins une place adaptée par tranche de 50 places.</li>\n</ul>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Surface du programme.</strong> Surfaces utiles : 6 × 16 + 40 + 20 + 2 × 5 + 15 + 12 = 96 + 40 + 20 + 10 + 15 + 12 = 193 m². Circulations : 193 × 0,20 = 38,6 m². Total des surfaces intérieures : 231,6 m². En ajoutant l'épaisseur des murs et cloisons (de l'ordre de 12 %), l'emprise du bâtiment de plain-pied serait d'environ 231,6 × 1,12 ≈ 259 m².</p>\n<p><strong>2. Emprise autorisée.</strong> 30 % × 1 200 = 360 m². 259 &lt; 360 : le programme tient en plain-pied, avec une marge d'environ 100 m² (extension future, auvents, local vélos).</p>\n<p><strong>3. Zone constructible.</strong> Hauteur à l'égout pour un plain-pied : environ 3,50 m. Distance aux limites : H/2 = 1,75 m, mais minimum 3,00 m, donc 3,00 m (ou implantation en limite). Avec un recul de 5,00 m sur rue et 3,00 m sur les deux côtés, la bande constructible fait 30,00 − 2 × 3,00 = 24,00 m de large. Un bâtiment de 24,00 × 11,00 m ≈ 264 m² est envisageable.</p>\n<p><strong>4. Stationnement et espaces verts.</strong> 12 places de 2,50 × 5,00 m = 150 m², plus une voie de desserte d'environ 5,50 m × 30 m = 165 m², soit environ 315 m². Espaces verts exigés : 25 % × 1 200 = 300 m². Total des surfaces : bâtiment 259 + stationnement 315 + pleine terre 300 = 874 m², il reste environ 326 m² pour les cheminements, le parvis et les plantations supplémentaires. Le programme est <strong>compatible</strong> avec le règlement.</p>\n<p><strong>5. Points d'attention.</strong> La place adaptée doit mesurer 3,30 m de large et être située près de l'entrée ; le cheminement depuis le trottoir doit respecter les pentes et largeurs d'accessibilité ; un établissement de santé recevant du public relève aussi de la réglementation ERP (type et catégorie à déterminer selon l'effectif). L'orientation sud sur rue invite à placer la salle d'attente et l'accueil côté rue, protégés du soleil, et les cabinets plutôt à l'est ou au nord pour un éclairage régulier.</p>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<ul>\n<li><strong>Appliquer une règle d'une autre zone</strong> : toujours vérifier la zone du terrain sur le règlement graphique.</li>\n<li><strong>Oublier le minimum</strong> dans les règles du type « L ≥ H/2 avec un minimum de 3 m ».</li>\n<li><strong>Confondre emprise au sol et surface de plancher</strong> : l'emprise est une projection, la surface de plancher se cumule sur les niveaux.</li>\n<li><strong>Mesurer la hauteur depuis le mauvais point</strong> : terrain naturel ou terrain fini, égout ou faîtage, selon la définition du règlement.</li>\n<li><strong>Négliger les servitudes et les risques</strong> (zone inondable, périmètre de monument historique) qui s'ajoutent au règlement de zone.</li>\n<li><strong>Ignorer les surfaces extérieures</strong> : stationnements, voies, espaces verts consomment beaucoup de terrain.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le lexique du règlement (définitions de la hauteur, de l'emprise, des limites séparatives, de l'alignement) figure souvent dans les dispositions générales du PLU, et non dans le chapitre de la zone. Il faut le lire avant d'interpréter une règle.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en cas de doute sur l'interprétation d'une règle, l'agence peut demander un <strong>certificat d'urbanisme</strong> opérationnel ou consulter le service instructeur avant de déposer le permis. Une interprétation hasardeuse découverte lors de l'instruction fait perdre des mois.</div>"
      },
      {
       "titre": "Rédiger l'analyse préalable",
       "contenu": "<p>L'analyse préalable à l'esquisse prend la forme d'une note illustrée, structurée ainsi :</p>\n<ol>\n<li><strong>Le programme</strong> : besoins, surfaces calculées, contraintes fonctionnelles (accessibilité, plain-pied, relations entre locaux).</li>\n<li><strong>Le site</strong> : dimensions, orientation, accès, environnement.</li>\n<li><strong>Les règles</strong> : zone, tableau des règles applicables et de leur traduction chiffrée.</li>\n<li><strong>La compatibilité</strong> : bilan des surfaces (bâti, stationnement, espaces verts), enveloppe constructible, marges disponibles.</li>\n<li><strong>Les recommandations</strong> pour l'esquisse : implantation conseillée, orientation des locaux, points de vigilance réglementaires.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> présenter un tableau de conformité. Colonnes : règle, valeur exigée, valeur du projet ou de l'hypothèse, conformité, observation. Par exemple : « Emprise au sol — 360 m² maximum — 259 m² — conforme — marge de 101 m² pour une extension ». Ce tableau sera réutilisé et mis à jour à chaque étape, jusqu'à la notice du permis de construire.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> analyser un programme et un règlement, c'est transformer des textes en surfaces, en distances et en hauteurs, puis vérifier qu'elles sont compatibles. Le résultat oriente directement l'esquisse.</div>"
      }
     ],
     "points_cles": [
      "Le PLU découpe le territoire en zones U, AU, A et N, chacune avec son règlement.",
      "Règles clés : implantation sur voie et limites, emprise, hauteur, aspect, espaces verts, stationnement.",
      "Les règles du type L ≥ H/2 comportent souvent un minimum à respecter.",
      "L'enveloppe constructible résulte de la plus contraignante des règles.",
      "Le programme se convertit en surface utile, circulations et emprise approximative.",
      "Le bilan des surfaces inclut bâti, stationnement, voies et espaces verts.",
      "Les définitions du lexique du PLU et les servitudes doivent être lues avant d'interpréter une règle.",
      "Un tableau de conformité suit le projet de l'analyse au permis de construire."
     ],
     "lexique": [
      {
       "terme": "PLU",
       "def": "Plan local d'urbanisme, document qui fixe les règles d'utilisation des sols d'une commune."
      },
      {
       "terme": "Zone U",
       "def": "Zone urbaine déjà équipée, constructible selon le règlement."
      },
      {
       "terme": "OAP",
       "def": "Orientations d'aménagement et de programmation, qui encadrent l'aménagement de certains secteurs."
      },
      {
       "terme": "Alignement",
       "def": "Limite entre le domaine public de la voie et la propriété privée."
      },
      {
       "terme": "Limite séparative",
       "def": "Limite entre deux propriétés privées voisines."
      },
      {
       "terme": "Recul",
       "def": "Distance minimale imposée entre une construction et une voie ou une limite."
      },
      {
       "terme": "Emprise au sol",
       "def": "Projection verticale du volume de la construction sur le terrain."
      },
      {
       "terme": "Pleine terre",
       "def": "Espace non construit et non imperméabilisé, permettant l'infiltration des eaux."
      },
      {
       "terme": "Servitude d'utilité publique",
       "def": "Limitation administrative du droit de propriété au profit d'un intérêt public."
      },
      {
       "terme": "Certificat d'urbanisme",
       "def": "Document indiquant les règles applicables à un terrain et, s'il est opérationnel, la faisabilité d'un projet."
      }
     ]
    }
   ]
  }
 ]
};
