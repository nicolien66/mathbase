/* Polymates — Bac pro Techniques d'interventions sur installations nucléaires — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-nucleaire"] = {
 "id": "bp-nucleaire",
 "nom": "Techniques d'interventions sur installations nucléaires",
 "icone": "🎓",
 "couleur": "#82b4d2",
 "intro": "Le bac pro Techniques d'interventions sur installations nucléaires forme des techniciens qui réalisent puis encadrent des interventions dans les centrales, les usines du cycle du combustible, les centres de recherche, les installations de gestion des déchets et les chantiers de démantèlement : logistique de maintenance, maintenance mécanique, décontamination, gestion des déchets, assistance à la radioprotection. Ce cours de première et de terminale commence par les bases du milieu (atome, rayonnements, installations), puis traite la radioprotection, la sûreté et la qualité, la maintenance et les interventions, la logistique, les déchets et le démantèlement, au niveau du référentiel du diplôme. Il est organisé en deux blocs : un cours théorique, puis un bloc d'analyse de documents qui montre, exemples commentés à l'appui, comment exploiter un dossier d'intervention, une cartographie radiologique, un régime de travail radiologique, une analyse de risques, un plan d'ensemble et des documents de suivi des déchets, comme à l'épreuve écrite de préparation d'un chantier en environnement nucléaire.",
 "parties": [
  {
   "titre": "Partie 1 — Les bases de l'environnement nucléaire",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btiin-metier-filiere",
     "titre": "Le technicien d'intervention et la filière nucléaire",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Situer les grandes familles d'installations nucléaires et leurs exploitants",
      "Distinguer exploitant, entreprise prestataire, sous-traitant et autorité de contrôle",
      "Décrire les six grandes activités du titulaire du bac pro TIIN",
      "Identifier les qualifications et formations exigées pour travailler en installation nucléaire",
      "Repérer le rôle de chacun dans une équipe d'intervention"
     ],
     "sections": [
      {
       "titre": "Un métier d'intervention dans un milieu particulier",
       "contenu": "<p>Le titulaire du baccalauréat professionnel <strong>Techniques d'interventions sur installations nucléaires</strong> (TIIN) est un technicien qui réalise, puis encadre, des interventions dans une <strong>installation nucléaire</strong>, c'est-à-dire un site où l'on fabrique, utilise, entrepose ou traite des matières radioactives. Il intervient sur des chantiers variés : logistique de maintenance, maintenance mécanique de premier niveau, décontamination, gestion des déchets, démantèlement, assistance à la radioprotection.</p>\n<p>Ce qui distingue ce métier d'un métier de maintenance industrielle classique, ce n'est pas d'abord la nature des gestes (démonter une vanne, monter un échafaudage, poser un confinement), mais l'<strong>environnement</strong> dans lequel ils sont réalisés. Trois exigences s'ajoutent à toutes les autres :</p>\n<ul>\n<li>la <strong>radioprotection</strong>, qui protège les personnes contre les effets des rayonnements ionisants ;</li>\n<li>la <strong>sûreté nucléaire</strong>, qui protège l'installation contre les accidents et donc protège la population et l'environnement ;</li>\n<li>la <strong>qualité</strong>, qui garantit que chaque opération est faite comme prévu, tracée et vérifiable.</li>\n</ul>\n<p>À ces exigences s'ajoutent les risques que l'on retrouve sur tout chantier industriel et que l'on appelle, dans la filière, les <strong>risques conventionnels</strong> : chute, levage, électricité, incendie, produits chimiques, chaleur, bruit. Sur un site nucléaire, la majorité des accidents du travail sont d'ailleurs dus à ces risques conventionnels et non aux rayonnements.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le technicien TIIN applique en permanence trois filtres à chacun de ses gestes : est-ce sûr pour moi et pour l'équipe (sécurité et radioprotection) ? Est-ce sûr pour l'installation (sûreté) ? Est-ce conforme à ce qui est écrit et vérifiable (qualité) ?</div>"
      },
      {
       "titre": "Les installations nucléaires en France",
       "contenu": "<p>La loi distingue les <strong>installations nucléaires de base</strong> (INB), les plus importantes, soumises à un régime d'autorisation particulier, des installations de plus petite taille qui détiennent des sources radioactives (hôpitaux, laboratoires, industries utilisant des sources scellées). Le titulaire du bac pro travaille surtout dans les INB, mais aussi dans les autres établissements.</p>\n<table><thead><tr><th>Famille d'installations</th><th>Exemples</th><th>Activités typiques du technicien</th></tr></thead><tbody>\n<tr><td>Production d'électricité</td><td>Centrales équipées de réacteurs à eau sous pression (REP)</td><td>Logistique et maintenance lors des arrêts de réacteur, propreté radiologique, gestion des déchets</td></tr>\n<tr><td>Cycle du combustible</td><td>Usines de conversion, d'enrichissement, de fabrication du combustible, de traitement du combustible usé</td><td>Maintenance d'équipements de procédé, interventions en boîte à gants, décontamination</td></tr>\n<tr><td>Recherche</td><td>Réacteurs de recherche, laboratoires</td><td>Assainissement, démantèlement d'installations anciennes, logistique</td></tr>\n<tr><td>Gestion des déchets</td><td>Centres de stockage et d'entreposage, installations de traitement</td><td>Conditionnement, contrôle et manutention des colis</td></tr>\n<tr><td>Médical et industriel</td><td>Services de médecine nucléaire, production de radiopharmaceutiques, irradiateurs</td><td>Contrôles radiologiques, gestion des sources et des déchets</td></tr>\n<tr><td>Installations en démantèlement</td><td>Anciens réacteurs, anciens ateliers</td><td>Découpe, décontamination, tri et évacuation des déchets</td></tr>\n</tbody></table>\n<p>Le parc électronucléaire français compte une cinquantaine de réacteurs répartis sur dix-huit sites, tous de type REP. Les arrêts de ces réacteurs pour rechargement du combustible et maintenance représentent une grande part des chantiers confiés aux entreprises prestataires.</p>"
      },
      {
       "titre": "Les acteurs : exploitant, prestataires, autorités",
       "contenu": "<p>Plusieurs acteurs se partagent les responsabilités. Il est indispensable de savoir qui fait quoi, car c'est à eux que le technicien rend compte ou demande une autorisation.</p>\n<ul>\n<li>L'<strong>exploitant</strong> est l'organisme qui détient l'autorisation d'exploiter l'installation (par exemple un producteur d'électricité, un industriel du cycle du combustible, un organisme de recherche). La loi lui confie la <strong>responsabilité première de la sûreté</strong> : il ne peut pas la déléguer, même s'il confie des travaux à des entreprises extérieures.</li>\n<li>L'<strong>entreprise prestataire</strong> (ou entreprise extérieure) réalise une prestation pour l'exploitant : logistique, maintenance, radioprotection, décontamination. Elle peut elle-même faire appel à un <strong>sous-traitant</strong>, dans des limites fixées par la réglementation et par le contrat.</li>\n<li>L'<strong>autorité de sûreté</strong> contrôle, au nom de l'État, la sûreté nucléaire et la radioprotection. Depuis le 1<sup>er</sup> janvier 2025, cette mission est assurée par l'<strong>Autorité de sûreté nucléaire et de radioprotection</strong> (ASNR), issue du regroupement de l'ancienne ASN et de l'IRSN. Elle délivre des autorisations, édicte des règles techniques, inspecte les installations et peut sanctionner.</li>\n<li>Les <strong>services de santé au travail</strong> assurent le suivi médical renforcé des travailleurs exposés.</li>\n<li>L'<strong>Andra</strong> (Agence nationale pour la gestion des déchets radioactifs) gère les centres de stockage des déchets radioactifs.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un site de production, le technicien d'une entreprise prestataire est accueilli par l'exploitant, reçoit son accès, suit les règles du site et travaille sous la surveillance d'un chargé de surveillance de l'exploitant. Son propre chef de chantier reste son responsable hiérarchique : c'est à lui qu'il rend compte en premier.</div>"
      },
      {
       "titre": "Les activités du titulaire du diplôme",
       "contenu": "<p>Le référentiel du diplôme décrit six grandes activités professionnelles. Elles structurent tout ce cours.</p>\n<table><thead><tr><th>Activité</th><th>Ce que cela recouvre</th></tr></thead><tbody>\n<tr><td>Fiabiliser les interventions et communiquer</td><td>Prendre connaissance du dossier, appliquer les pratiques de fiabilisation, rendre compte, signaler les écarts, gérer sa dosimétrie, arrêter un chantier en cas de danger</td></tr>\n<tr><td>Exécuter des opérations de logistique</td><td>Préparer et contrôler le matériel, installer les servitudes et les confinements, monter des protections, déplacer des charges, suivre le planning</td></tr>\n<tr><td>Participer à la gestion des déchets</td><td>Collecter, trier, conditionner, caractériser et évacuer les déchets ; conduire des installations de traitement</td></tr>\n<tr><td>Exécuter des opérations de démantèlement</td><td>Découper, décontaminer, assainir, conditionner les éléments démontés</td></tr>\n<tr><td>Participer à la sécurité et à la radioprotection</td><td>Réaliser des contrôles radiologiques, appliquer les mesures de sauvegarde, gérer les vestiaires et l'habillage</td></tr>\n<tr><td>Exécuter des opérations de maintenance</td><td>Préparer l'intervention, démonter, remplacer, remonter, réaliser les contrôles et les opérations de maintenance préventive</td></tr>\n</tbody></table>\n<p>Au début de sa carrière, le titulaire exécute ces activités au sein d'une équipe. Avec l'expérience, il devient <strong>chef d'équipe</strong> ou <strong>chargé de travaux</strong> : il organise alors le travail de quelques intervenants, prépare le chantier et rend compte à son encadrement. C'est pourquoi l'épreuve écrite du diplôme porte sur la <strong>préparation d'un chantier en environnement nucléaire</strong> : lire un dossier, évaluer les risques radiologiques et conventionnels, organiser l'intervention, prévoir la gestion des déchets.</p>"
      },
      {
       "titre": "Les formations et habilitations exigées",
       "contenu": "<p>Personne n'entre en zone nucléaire sans formation. Les exigences viennent du Code du travail (formation à la radioprotection des travailleurs exposés), de l'exploitant et des accords de la profession, qui ont mis en place des formations communes reconnues sur tous les sites.</p>\n<ul>\n<li>Une formation de base aux risques de l'environnement nucléaire et à la radioprotection, commune à tous les intervenants, souvent appelée <strong>prévention des risques de niveau 1</strong> ; elle est complétée par un niveau 2 pour ceux qui encadrent une équipe ou préparent un chantier.</li>\n<li>Une formation à la <strong>sûreté et à la qualité</strong>, qui présente les pratiques de fiabilisation et la culture de sûreté.</li>\n<li>Des <strong>habilitations</strong> pour les risques conventionnels : habilitation électrique, autorisation de conduite d'engins de levage, formation au travail en hauteur, au port d'appareils respiratoires.</li>\n<li>Un <strong>suivi médical renforcé</strong> et un <strong>classement</strong> du travailleur exposé, prononcés par l'employeur après avis du conseiller en radioprotection et du médecin du travail.</li>\n</ul>\n<p>Les entreprises qui emploient des travailleurs exposés sur les sites nucléaires sont en outre souvent certifiées par un organisme professionnel (le CEFRI) qui vérifie qu'elles forment et suivent correctement leur personnel. Les intitulés précis des formations et leurs durées de validité évoluent : ils sont précisés par l'employeur et par le site.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une formation périmée équivaut à une absence de formation. Le technicien vérifie lui-même que ses titres (formations, aptitude médicale, habilitations) sont valides avant chaque mission ; un accès refusé à l'entrée du site bloque toute l'équipe.</div>"
      },
      {
       "titre": "L'équipe d'intervention et la communication",
       "contenu": "<p>Une intervention type mobilise plusieurs fonctions, qui peuvent être tenues par des personnes différentes ou cumulées sur un petit chantier.</p>\n<table><thead><tr><th>Fonction</th><th>Rôle</th></tr></thead><tbody>\n<tr><td>Chargé d'affaires de l'entreprise</td><td>Responsable du contrat, des moyens et de la relation avec l'exploitant</td></tr>\n<tr><td>Chargé de travaux ou chef de chantier</td><td>Dirige l'intervention sur le terrain, fait le briefing, contrôle, rend compte</td></tr>\n<tr><td>Intervenant</td><td>Réalise les opérations selon le mode opératoire et applique les consignes</td></tr>\n<tr><td>Technicien en radioprotection</td><td>Réalise les mesures, établit les cartographies, conseille sur les protections</td></tr>\n<tr><td>Chargé de surveillance de l'exploitant</td><td>Vérifie que la prestation est réalisée conformément aux exigences</td></tr>\n</tbody></table>\n<p>La communication suit des règles strictes : consignes écrites, briefing avant l'intervention, compte rendu après, signalement immédiat de tout <strong>écart</strong> (différence entre ce qui est prévu et ce qui est constaté). Le technicien ne « s'arrange » jamais avec une situation imprévue : il s'arrête, met en sécurité et appelle son responsable.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour situer une intervention dès la première lecture d'un dossier, répondre à cinq questions dans l'ordre. 1) Quelle installation et quel exploitant ? 2) Quelle activité parmi les six (logistique, maintenance, déchets, démantèlement, radioprotection, fiabilisation) ? 3) Quels risques dominants : radiologiques, conventionnels, ou les deux ? 4) Qui fait quoi dans l'équipe et qui surveille pour l'exploitant ? 5) À qui rendre compte et comment ? Exemple : remplacement d'un joint de vanne en zone contrôlée d'un réacteur à l'arrêt : site de production, activité de maintenance, risques radiologique (exposition externe, contamination) et conventionnel (manutention, pression résiduelle), intervenant et chargé de travaux du prestataire, surveillance par l'exploitant, compte rendu au chargé de travaux puis dans le dossier.</div>"
      },
      {
       "titre": "Les qualités attendues du technicien",
       "contenu": "<p>Au-delà des savoir-faire techniques, les employeurs de la filière attendent des comportements précis, qui font partie intégrante de la compétence :</p>\n<ul>\n<li><strong>rigueur</strong> : suivre le mode opératoire pas à pas, sans sauter d'étape, et cocher au fur et à mesure ;</li>\n<li><strong>attitude interrogative</strong> : se poser des questions face à une situation inhabituelle plutôt que de supposer ;</li>\n<li><strong>transparence</strong> : déclarer ses erreurs et les écarts constatés, sans crainte, car c'est ainsi que l'on évite qu'ils se reproduisent ;</li>\n<li><strong>respect des règles d'accès</strong> : badges, dosimètres, vestiaires, tenues ;</li>\n<li><strong>mobilité</strong> : beaucoup de prestataires travaillent sur plusieurs sites et suivent les arrêts de réacteurs.</li>\n</ul>\n<p>Ces qualités sont regroupées dans la notion de <strong>culture de sûreté</strong>, que l'on retrouvera tout au long du cours. Elle signifie que la sûreté passe avant toute autre considération, y compris le respect du planning.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le droit et le devoir d'arrêter un travail en cas de doute ou de danger est reconnu à chaque intervenant. Arrêter un chantier pour une bonne raison n'est jamais une faute ; continuer malgré un doute peut en être une.</div>"
      }
     ],
     "points_cles": [
      "Le technicien TIIN réalise puis encadre des interventions de logistique, maintenance, déchets, démantèlement et radioprotection.",
      "Trois exigences propres au milieu : radioprotection, sûreté nucléaire, qualité, en plus des risques conventionnels.",
      "L'exploitant porte la responsabilité première de la sûreté et ne peut pas la déléguer.",
      "L'ASNR contrôle la sûreté nucléaire et la radioprotection depuis le 1er janvier 2025.",
      "L'entreprise prestataire réalise les travaux ; son chargé de travaux dirige le chantier.",
      "Formations nucléaires, habilitations conventionnelles, aptitude médicale et classement sont exigés avant tout accès.",
      "Tout écart est signalé immédiatement ; en cas de doute, on s'arrête et on rend compte.",
      "La culture de sûreté place la sûreté avant le planning."
     ],
     "lexique": [
      {
       "terme": "Installation nucléaire de base (INB)",
       "def": "Installation nucléaire importante soumise à un régime d'autorisation et de contrôle particulier."
      },
      {
       "terme": "Exploitant",
       "def": "Organisme titulaire de l'autorisation d'exploiter, responsable premier de la sûreté."
      },
      {
       "terme": "Prestataire",
       "def": "Entreprise extérieure réalisant des travaux ou services pour l'exploitant."
      },
      {
       "terme": "ASNR",
       "def": "Autorité de sûreté nucléaire et de radioprotection, chargée du contrôle de l'État depuis 2025."
      },
      {
       "terme": "Radioprotection",
       "def": "Ensemble des mesures destinées à protéger les personnes contre les rayonnements ionisants."
      },
      {
       "terme": "Sûreté nucléaire",
       "def": "Ensemble des dispositions visant à prévenir les accidents et à en limiter les effets."
      },
      {
       "terme": "Risque conventionnel",
       "def": "Risque présent sur tout chantier industriel : chute, levage, électricité, incendie, chimique."
      },
      {
       "terme": "Écart",
       "def": "Différence entre ce qui est prévu ou exigé et ce qui est constaté ou réalisé."
      },
      {
       "terme": "Culture de sûreté",
       "def": "Ensemble des attitudes qui placent la sûreté au premier rang des priorités."
      },
      {
       "terme": "Chargé de travaux",
       "def": "Personne qui dirige l'intervention sur le terrain et en rend compte."
      }
     ]
    },
    {
     "id": "btiin-atome-radioactivite",
     "titre": "L'atome et la radioactivité",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire la structure de l'atome et écrire la notation d'un noyau",
      "Définir isotope, radionucléide et désintégration",
      "Distinguer les désintégrations alpha, bêta et l'émission gamma",
      "Utiliser le becquerel et ses multiples",
      "Calculer une activité à l'aide de la période radioactive"
     ],
     "sections": [
      {
       "titre": "La structure de l'atome",
       "contenu": "<p>Toute matière est constituée d'<strong>atomes</strong>. Un atome comprend un <strong>noyau</strong> très petit et très dense, entouré d'un nuage d'<strong>électrons</strong> chargés négativement. Le noyau est formé de <strong>nucléons</strong> : les <strong>protons</strong>, chargés positivement, et les <strong>neutrons</strong>, sans charge électrique.</p>\n<ul>\n<li>Le <strong>numéro atomique</strong> Z est le nombre de protons. Il définit l'élément chimique : Z = 1 pour l'hydrogène, Z = 6 pour le carbone, Z = 27 pour le cobalt, Z = 92 pour l'uranium.</li>\n<li>Le <strong>nombre de masse</strong> A est le nombre total de nucléons (protons + neutrons). Le nombre de neutrons vaut donc N = A − Z.</li>\n</ul>\n<p>On note un noyau avec le symbole de l'élément, A en haut à gauche et Z en bas à gauche. Dans un texte, on écrit souvent simplement « cobalt 60 » ou « Co-60 » : le nombre indiqué est A.</p>\n<p>Le noyau a un diamètre environ cent mille fois plus petit que celui de l'atome : l'atome est essentiellement vide. Cette image aide à comprendre pourquoi certains rayonnements traversent la matière.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> composition d'un noyau. Exemple du césium 137, Z = 55. 1) A = 137 (le nombre qui suit le nom). 2) Nombre de protons = Z = 55. 3) Nombre de neutrons = A − Z = 137 − 55 = 82. 4) Dans l'atome neutre, nombre d'électrons = nombre de protons = 55. Même démarche pour le cobalt 60 (Z = 27) : 27 protons et 60 − 27 = 33 neutrons.</div>"
      },
      {
       "titre": "Isotopes et radionucléides",
       "contenu": "<p>Des <strong>isotopes</strong> sont des atomes du même élément (même Z) qui ont des nombres de neutrons différents (A différents). Ils ont les mêmes propriétés chimiques mais pas les mêmes propriétés nucléaires. Par exemple, le cobalt 59 est stable, alors que le cobalt 60 est radioactif.</p>\n<p>Un noyau qui possède trop ou trop peu de neutrons par rapport à ses protons, ou qui est trop lourd, est <strong>instable</strong>. Il finit par se transformer spontanément en un autre noyau en émettant un rayonnement : c'est la <strong>radioactivité</strong>. Un atome radioactif s'appelle un <strong>radionucléide</strong> (on dit aussi radio-isotope ou radioélément).</p>\n<table><thead><tr><th>Radionucléide</th><th>Origine ou usage courant</th><th>Intérêt pour le technicien</th></tr></thead><tbody>\n<tr><td>Cobalt 60</td><td>Produit par activation de l'acier dans les circuits des réacteurs ; sources industrielles</td><td>Principal contributeur au débit de dose lors de la maintenance des circuits</td></tr>\n<tr><td>Césium 137</td><td>Produit de fission</td><td>Contaminant fréquent, émetteur bêta et gamma</td></tr>\n<tr><td>Uranium 235 et 238</td><td>Combustible nucléaire, présent dans la nature</td><td>Contamination alpha dans les usines du cycle</td></tr>\n<tr><td>Plutonium 239</td><td>Formé dans le combustible en réacteur</td><td>Émetteur alpha très radiotoxique en cas d'incorporation</td></tr>\n<tr><td>Tritium (hydrogène 3)</td><td>Formé dans l'eau des réacteurs</td><td>Émetteur bêta de faible énergie, difficile à mesurer</td></tr>\n<tr><td>Potassium 40, radon 222</td><td>Radioactivité naturelle</td><td>Contribue au bruit de fond des mesures</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la radioactivité est un phénomène naturel et spontané. On ne peut ni l'accélérer ni l'arrêter par un traitement chimique ou thermique ; seul le temps la fait diminuer.</div>"
      },
      {
       "titre": "Les types de désintégration",
       "contenu": "<p>Lors d'une <strong>désintégration</strong>, le noyau instable (noyau père) se transforme en un autre noyau (noyau fils) en émettant une particule et souvent de l'énergie sous forme de rayonnement électromagnétique.</p>\n<ul>\n<li><strong>Désintégration alpha</strong> : le noyau émet une particule alpha, formée de 2 protons et 2 neutrons (un noyau d'hélium). A diminue de 4 et Z diminue de 2. Elle concerne les noyaux lourds : uranium, plutonium, américium, radon.</li>\n<li><strong>Désintégration bêta moins</strong> : un neutron du noyau se transforme en proton en émettant un électron. A ne change pas, Z augmente de 1. Exemples : cobalt 60, césium 137, strontium 90, tritium.</li>\n<li><strong>Désintégration bêta plus</strong> : un proton se transforme en neutron en émettant un positon (électron positif). Z diminue de 1. Elle est utilisée en imagerie médicale (fluor 18).</li>\n<li><strong>Émission gamma</strong> : après une désintégration, le noyau fils est souvent dans un état excité ; il libère cet excès d'énergie sous forme d'un photon gamma. Ni A ni Z ne changent.</li>\n</ul>\n<p>Les équations de désintégration respectent deux lois de conservation : la somme des A et la somme des Z sont les mêmes avant et après.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> écrire une désintégration. Le cobalt 60 (Z = 27) se désintègre en bêta moins. 1) A se conserve : le noyau fils a A = 60. 2) Z augmente de 1 : Z = 28, c'est le nickel. 3) Écriture : cobalt 60 donne nickel 60 + électron (+ antineutrino). 4) Le nickel 60 excité émet ensuite deux photons gamma d'environ 1,17 et 1,33 MeV : ce sont eux qui irradient les intervenants près des circuits.</div>"
      },
      {
       "titre": "L'activité et le becquerel",
       "contenu": "<p>L'<strong>activité</strong> A d'une source est le nombre de désintégrations qui se produisent par seconde. Son unité est le <strong>becquerel</strong> (Bq) : 1 Bq = 1 désintégration par seconde. C'est une unité très petite, on utilise donc des multiples.</p>\n<table><thead><tr><th>Préfixe</th><th>Symbole</th><th>Valeur</th><th>Exemple</th></tr></thead><tbody>\n<tr><td>kilo</td><td>kBq</td><td>10<sup>3</sup> Bq</td><td>Ordre de grandeur de la radioactivité naturelle du corps humain (quelques kBq)</td></tr>\n<tr><td>méga</td><td>MBq</td><td>10<sup>6</sup> Bq</td><td>Dose injectée lors d'un examen de médecine nucléaire (quelques centaines de MBq)</td></tr>\n<tr><td>giga</td><td>GBq</td><td>10<sup>9</sup> Bq</td><td>Sources industrielles de contrôle</td></tr>\n<tr><td>téra</td><td>TBq</td><td>10<sup>12</sup> Bq</td><td>Sources de gammagraphie, irradiateurs</td></tr>\n</tbody></table>\n<p>Pour décrire une contamination, on rapporte l'activité à une surface ou à un volume : <strong>Bq/cm²</strong> pour une contamination de surface, <strong>Bq/m³</strong> pour une contamination de l'air, <strong>Bq/g</strong> ou <strong>Bq/kg</strong> pour un déchet ou un matériau.</p>\n<p>L'activité ne dit pas à elle seule quel est le danger : une même activité n'a pas les mêmes conséquences selon le type de rayonnement, son énergie et le fait qu'elle soit à l'extérieur ou à l'intérieur du corps. Les grandeurs qui mesurent l'effet sur l'organisme (gray, sievert) sont présentées avec la radioprotection.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne pas confondre l'activité (Bq), propriété de la source, et la dose ou le débit de dose (Sv, Sv/h), qui décrivent ce que reçoit une personne. Une source de forte activité dans un château de plomb peut donner un débit de dose très faible à côté d'elle.</div>"
      },
      {
       "titre": "La décroissance radioactive et la période",
       "contenu": "<p>On ne peut pas prévoir quand un noyau donné va se désintégrer, mais pour un très grand nombre de noyaux le comportement est parfaitement régulier. La <strong>période radioactive</strong> T (on dit aussi demi-vie) est la durée au bout de laquelle la moitié des noyaux présents se sont désintégrés. L'activité est alors divisée par deux.</p>\n<table><thead><tr><th>Temps écoulé</th><th>Activité restante</th></tr></thead><tbody>\n<tr><td>0</td><td>A<sub>0</sub></td></tr>\n<tr><td>1 période</td><td>A<sub>0</sub>/2 (50 %)</td></tr>\n<tr><td>2 périodes</td><td>A<sub>0</sub>/4 (25 %)</td></tr>\n<tr><td>3 périodes</td><td>A<sub>0</sub>/8 (12,5 %)</td></tr>\n<tr><td>10 périodes</td><td>A<sub>0</sub>/1024 (environ 0,1 %)</td></tr>\n</tbody></table>\n<p>Après n périodes, l'activité vaut A = A<sub>0</sub> / 2<sup>n</sup>. Plus généralement, après une durée t : A = A<sub>0</sub> × 2<sup>−t/T</sup>. On retient qu'au bout de dix périodes, l'activité est devenue environ mille fois plus faible.</p>\n<p>Les périodes s'étendent de quelques fractions de seconde à des milliards d'années : environ 6 heures pour le technétium 99m utilisé en médecine, 8 jours pour l'iode 131, 5,3 ans pour le cobalt 60, 12,3 ans pour le tritium, 30 ans pour le césium 137, 24 000 ans environ pour le plutonium 239, 4,5 milliards d'années pour l'uranium 238.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul de décroissance. Une source de cobalt 60 avait une activité de 40 GBq lors de son étalonnage, il y a 10,6 ans. Période : 5,3 ans. 1) Nombre de périodes : n = 10,6 / 5,3 = 2. 2) A = 40 / 2<sup>2</sup> = 40 / 4 = 10 GBq. 3) Contrôle de vraisemblance : l'activité a bien diminué et reste du même ordre de grandeur après seulement deux périodes. Si la durée n'est pas un multiple entier, utiliser la calculatrice avec A = A<sub>0</sub> × 2 puissance (−t/T).</div>"
      },
      {
       "titre": "Fission et origine des produits radioactifs",
       "contenu": "<p>Dans un réacteur, l'énergie provient de la <strong>fission</strong> : un neutron frappe un noyau lourd fissile (uranium 235) qui se casse en deux noyaux plus légers, les <strong>produits de fission</strong>, en libérant de l'énergie et deux ou trois neutrons. Ces neutrons peuvent provoquer d'autres fissions : c'est la <strong>réaction en chaîne</strong>, que le réacteur maintient à un niveau constant et maîtrisé.</p>\n<p>Pour l'intervenant, il faut retenir trois origines de la radioactivité rencontrée sur les chantiers :</p>\n<ul>\n<li>les <strong>produits de fission</strong> (césium, iode, strontium…) restent normalement enfermés dans le combustible ; on ne les retrouve qu'en faible quantité si une gaine de combustible présente un défaut ;</li>\n<li>les <strong>produits d'activation</strong> : les neutrons rendent radioactifs certains atomes des matériaux qu'ils traversent ; l'acier des structures et les particules d'usure transportées par l'eau (cobalt 60, manganèse 54…) deviennent radioactifs. Ces particules se déposent dans les circuits et forment l'essentiel de la <strong>contamination</strong> et du débit de dose lors de la maintenance ;</li>\n<li>les <strong>actinides</strong> (uranium, plutonium, américium), émetteurs alpha, présents surtout dans les installations du cycle du combustible et dans certaines installations en démantèlement.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pendant un arrêt de réacteur, l'exploitant cherche à réduire la quantité de produits d'activation déposés dans les circuits par des opérations de chimie de l'eau avant l'ouverture. L'intervenant constate l'effet de ces opérations dans les cartographies : les débits de dose au contact des tuyauteries varient d'un arrêt à l'autre.</div>"
      }
     ],
     "points_cles": [
      "Le noyau contient Z protons et A − Z neutrons ; Z définit l'élément.",
      "Les isotopes d'un même élément ont le même Z mais des A différents.",
      "Un radionucléide est un noyau instable qui se transforme spontanément en émettant un rayonnement.",
      "Alpha : A − 4 et Z − 2 ; bêta moins : Z + 1 ; gamma : ni A ni Z ne changent.",
      "L'activité se mesure en becquerels : 1 Bq = 1 désintégration par seconde.",
      "La période est la durée au bout de laquelle l'activité est divisée par deux ; A = A0 / 2 puissance n.",
      "Dix périodes divisent l'activité par environ mille.",
      "Sur les chantiers de réacteur, le cobalt 60 issu de l'activation est le principal contributeur à la dose."
     ],
     "lexique": [
      {
       "terme": "Nucléon",
       "def": "Particule du noyau : proton ou neutron."
      },
      {
       "terme": "Numéro atomique (Z)",
       "def": "Nombre de protons du noyau, qui définit l'élément chimique."
      },
      {
       "terme": "Nombre de masse (A)",
       "def": "Nombre total de nucléons du noyau."
      },
      {
       "terme": "Isotope",
       "def": "Atome d'un même élément ayant un nombre de neutrons différent."
      },
      {
       "terme": "Radionucléide",
       "def": "Atome dont le noyau est instable et donc radioactif."
      },
      {
       "terme": "Activité",
       "def": "Nombre de désintégrations par seconde d'une source, exprimé en becquerels."
      },
      {
       "terme": "Période radioactive",
       "def": "Durée au bout de laquelle l'activité d'un radionucléide est divisée par deux."
      },
      {
       "terme": "Fission",
       "def": "Cassure d'un noyau lourd en deux noyaux plus légers avec libération d'énergie et de neutrons."
      },
      {
       "terme": "Produit d'activation",
       "def": "Atome rendu radioactif par l'absorption de neutrons, par exemple le cobalt 60 dans l'acier."
      },
      {
       "terme": "Actinide",
       "def": "Élément lourd (uranium, plutonium, américium) généralement émetteur alpha."
      }
     ]
    },
    {
     "id": "btiin-rayonnements-matiere",
     "titre": "Les rayonnements ionisants et leur interaction avec la matière",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Expliquer ce qu'est l'ionisation et pourquoi elle est dangereuse",
      "Comparer le parcours et le pouvoir de pénétration des rayonnements alpha, bêta, gamma, X et neutrons",
      "Choisir le type d'écran adapté à chaque rayonnement",
      "Distinguer irradiation externe, contamination externe et contamination interne",
      "Situer l'exposition professionnelle par rapport à l'exposition naturelle"
     ],
     "sections": [
      {
       "titre": "Qu'est-ce qu'un rayonnement ionisant ?",
       "contenu": "<p>Un <strong>rayonnement</strong> est un transport d'énergie, sous forme de particules (alpha, bêta, neutrons) ou d'ondes électromagnétiques (photons gamma et X). Il est dit <strong>ionisant</strong> lorsqu'il possède assez d'énergie pour arracher des électrons aux atomes de la matière qu'il traverse : il crée alors des <strong>ions</strong>, c'est-à-dire des atomes ou des molécules électriquement chargés.</p>\n<p>Dans un tissu vivant, ces ionisations peuvent casser des molécules, en particulier l'ADN qui porte l'information génétique de la cellule. C'est l'origine des effets biologiques des rayonnements. La lumière visible, les ondes radio ou les micro-ondes ne sont pas ionisantes.</p>\n<p>L'énergie d'un rayonnement s'exprime en <strong>électronvolts</strong> (eV) et surtout en kiloélectronvolts (keV) et mégaélectronvolts (MeV). Elle conditionne la capacité du rayonnement à traverser la matière et donc l'épaisseur des protections.</p>\n<p>Les rayonnements ionisants ont une caractéristique majeure pour la sécurité : ils sont <strong>imperceptibles</strong>. On ne les voit pas, on ne les sent pas, ils n'ont ni odeur ni chaleur perceptible aux niveaux rencontrés sur les chantiers. Seuls des <strong>appareils de mesure</strong> permettent de les détecter.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'absence de sensation ne signifie jamais l'absence de risque. Toute décision d'accès ou de travail repose sur une mesure récente et sur une cartographie, jamais sur une impression.</div>"
      },
      {
       "titre": "Les cinq rayonnements rencontrés",
       "contenu": "<table><thead><tr><th>Rayonnement</th><th>Nature</th><th>Parcours dans l'air</th><th>Arrêté par</th><th>Danger principal</th></tr></thead><tbody>\n<tr><td>Alpha</td><td>Noyau d'hélium, lourd et chargé</td><td>Quelques centimètres</td><td>Une feuille de papier, la couche superficielle de la peau</td><td>Interne : très dangereux s'il est inhalé ou ingéré</td></tr>\n<tr><td>Bêta</td><td>Électron rapide</td><td>Quelques mètres au plus</td><td>Quelques millimètres de plastique ou d'aluminium</td><td>Peau, cristallin, et interne</td></tr>\n<tr><td>Gamma</td><td>Photon de haute énergie, sans masse ni charge</td><td>Plusieurs centaines de mètres</td><td>Atténué, jamais totalement arrêté, par plomb, acier, béton, eau</td><td>Externe : traverse le corps entier</td></tr>\n<tr><td>X</td><td>Photon produit par un générateur électrique</td><td>Comme le gamma</td><td>Plomb, béton</td><td>Externe ; disparaît quand le générateur est coupé</td></tr>\n<tr><td>Neutrons</td><td>Particule sans charge</td><td>Très long</td><td>Matériaux riches en hydrogène (eau, polyéthylène, béton) puis absorbants</td><td>Externe, près d'un réacteur en fonctionnement ou de certaines sources</td></tr>\n</tbody></table>\n<p>Un même radionucléide peut émettre plusieurs rayonnements : le cobalt 60 émet du bêta et du gamma, le plutonium 239 surtout de l'alpha avec un peu de gamma de faible énergie, l'américium 241 de l'alpha et du gamma de faible énergie.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> plus un rayonnement est pénétrant, plus il est dangereux à distance (exposition externe) ; moins il est pénétrant, plus il est dangereux s'il entre dans le corps (exposition interne). L'alpha est le cas extrême de ce second danger.</div>"
      },
      {
       "titre": "L'atténuation par les écrans",
       "contenu": "<p>Un <strong>écran</strong> (ou protection biologique) est un matériau interposé entre la source et la personne pour réduire le rayonnement reçu. Le choix du matériau dépend du rayonnement :</p>\n<ul>\n<li>pour l'<strong>alpha</strong>, aucun écran n'est nécessaire contre l'exposition externe ; la protection consiste à empêcher la contamination (gants, tenue, confinement, protection respiratoire) ;</li>\n<li>pour le <strong>bêta</strong>, on utilise un matériau léger (plexiglas, aluminium) ; un matériau lourd comme le plomb, frappé par des bêta de forte énergie, produit lui-même des rayons X de freinage ; on place donc le matériau léger côté source ;</li>\n<li>pour le <strong>gamma</strong>, on utilise des matériaux denses : plomb, acier, béton, eau en grande épaisseur ;</li>\n<li>pour les <strong>neutrons</strong>, on utilise des matériaux riches en hydrogène qui les ralentissent, associés à des matériaux qui les absorbent.</li>\n</ul>\n<p>Pour les photons gamma, l'atténuation n'est jamais totale : chaque épaisseur supplémentaire divise le rayonnement par le même facteur. On caractérise un matériau par sa <strong>couche de demi-atténuation</strong> (CDA), épaisseur qui divise le débit de dose par deux, et parfois par sa couche de déci-atténuation, qui le divise par dix. Pour le rayonnement du cobalt 60, la CDA est de l'ordre de 1,2 cm pour le plomb et de plusieurs centimètres pour le béton ; ces valeurs sont données dans les documents de radioprotection et ne s'apprennent pas par cœur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer l'effet d'un écran gamma. Débit de dose sans écran : 800 µSv/h. Écran de plomb de 3,6 cm, CDA donnée de 1,2 cm. 1) Nombre de CDA : n = 3,6 / 1,2 = 3. 2) Facteur d'atténuation : 2<sup>3</sup> = 8. 3) Débit derrière l'écran : 800 / 8 = 100 µSv/h. 4) Vérification : l'écran réduit fortement mais n'annule pas le débit, ce qui est normal pour le gamma.</div>"
      },
      {
       "titre": "Irradiation externe et contamination",
       "contenu": "<p>Deux situations d'exposition doivent être soigneusement distinguées, car les parades sont différentes.</p>\n<p>L'<strong>irradiation externe</strong> (ou exposition externe) se produit lorsque la source reste à l'extérieur du corps : une tuyauterie contenant des dépôts de cobalt 60, un générateur X, une source scellée. La personne est exposée tant qu'elle se trouve dans le champ de rayonnement ; elle cesse de l'être dès qu'elle s'éloigne ou que la source est protégée. Elle ne devient pas elle-même radioactive.</p>\n<p>La <strong>contamination</strong> est la présence indésirable de substances radioactives à un endroit où elles ne devraient pas être : sur une surface, dans l'air, sur la peau ou les vêtements. On distingue :</p>\n<ul>\n<li>la <strong>contamination externe</strong> : dépôt sur la peau, les cheveux ou la tenue ;</li>\n<li>la <strong>contamination interne</strong> : entrée de substances radioactives dans l'organisme par <strong>inhalation</strong> (respiration), <strong>ingestion</strong> (bouche), ou par une <strong>plaie</strong>. Les substances continuent alors d'irradier les organes de l'intérieur jusqu'à leur élimination naturelle ou leur décroissance.</li>\n</ul>\n<p>La contamination peut se <strong>disperser</strong> : on l'emporte sur ses chaussures, on la transfère d'une surface à une autre en touchant. C'est pourquoi les règles de circulation, d'habillage et de contrôle de sortie sont aussi strictes.</p>\n<table><thead><tr><th>Situation</th><th>Protection principale</th></tr></thead><tbody>\n<tr><td>Irradiation externe</td><td>Temps, distance, écran</td></tr>\n<tr><td>Contamination externe</td><td>Tenues, gants, surbottes, confinement, contrôles de sortie</td></tr>\n<tr><td>Contamination interne</td><td>Confinement, ventilation, protection respiratoire, interdiction de boire, manger, fumer en zone, protection des plaies</td></tr>\n</tbody></table>"
      },
      {
       "titre": "Exposition naturelle et ordres de grandeur",
       "contenu": "<p>Tout être humain est exposé en permanence à une <strong>radioactivité naturelle</strong> : rayonnement cosmique, rayonnement des roches et des sols, radon dans les bâtiments, radionucléides naturels présents dans l'alimentation et dans le corps. À cela s'ajoutent les expositions médicales (radiographies, scanners).</p>\n<p>En France, l'exposition moyenne d'une personne, toutes sources confondues, est de l'ordre de quelques millisieverts par an, avec de fortes variations selon la région (le radon pèse beaucoup dans les régions granitiques) et selon les examens médicaux reçus. Cette valeur sert de référence pour comprendre les valeurs réglementaires présentées dans la suite du cours.</p>\n<p>Le sievert et ses sous-multiples (mSv, µSv) mesurent l'effet sur l'organisme ; leur définition précise est présentée avec les grandeurs de radioprotection. Retenir pour l'instant les correspondances : 1 Sv = 1 000 mSv et 1 mSv = 1 000 µSv.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en zone surveillée ou contrôlée, la plupart des travailleurs de la filière reçoivent sur l'année une dose professionnelle de l'ordre de la dose naturelle, voire moins, grâce à l'optimisation. Les doses les plus élevées concernent quelques métiers très exposés (calorifugeage, robinetterie, logistique au plus près des circuits), d'où l'importance des protections et de la préparation.</div>"
      },
      {
       "titre": "La détection : principe général",
       "contenu": "<p>Puisque les rayonnements ne sont pas perceptibles, on utilise leur propriété ionisante pour les détecter. Un <strong>détecteur</strong> transforme les ionisations ou excitations produites dans un matériau sensible en un signal électrique que l'appareil compte et affiche.</p>\n<ul>\n<li>Les détecteurs à <strong>gaz</strong> (chambre d'ionisation, compteur proportionnel, compteur Geiger-Müller) recueillent les charges créées dans un gaz.</li>\n<li>Les détecteurs à <strong>scintillation</strong> utilisent un matériau qui émet un éclair de lumière à chaque interaction, converti en signal électrique.</li>\n<li>Les détecteurs à <strong>semi-conducteur</strong> (silicium, germanium) sont utilisés dans les dosimètres électroniques et en laboratoire de mesure.</li>\n</ul>\n<p>Un appareil n'est adapté qu'aux rayonnements pour lesquels il a été conçu : une sonde gamma ne voit pas une contamination alpha ; une sonde alpha doit être tenue à quelques millimètres de la surface. Le choix et l'usage des appareils sont détaillés avec les mesures de contamination.</p>\n<p>Les appareils affichent soit un <strong>taux de comptage</strong> (coups par seconde, c/s), utile pour repérer une contamination, soit un <strong>débit de dose</strong> (µSv/h, mSv/h), utile pour évaluer l'exposition externe. Le <strong>bruit de fond</strong> est le signal mesuré en l'absence de la source étudiée, dû à la radioactivité naturelle ; il doit être connu pour interpréter une mesure.</p>"
      }
     ],
     "points_cles": [
      "Un rayonnement ionisant arrache des électrons aux atomes et peut léser l'ADN des cellules.",
      "Les rayonnements sont imperceptibles : seule la mesure permet de les détecter.",
      "Alpha arrêté par une feuille de papier, bêta par quelques millimètres de plastique, gamma seulement atténué par plomb, acier, béton.",
      "Une couche de demi-atténuation divise le débit de dose gamma par deux.",
      "L'irradiation externe cesse quand on s'éloigne ; la contamination suit la personne ou l'objet.",
      "La contamination interne se fait par inhalation, ingestion ou plaie.",
      "Les émetteurs alpha sont surtout dangereux en contamination interne.",
      "Un appareil de mesure n'est adapté qu'aux rayonnements pour lesquels il est conçu."
     ],
     "lexique": [
      {
       "terme": "Ionisation",
       "def": "Arrachement d'un électron à un atome, qui devient un ion."
      },
      {
       "terme": "Rayonnement gamma",
       "def": "Photon de haute énergie émis par un noyau, très pénétrant."
      },
      {
       "terme": "Écran",
       "def": "Matériau placé entre la source et la personne pour atténuer le rayonnement."
      },
      {
       "terme": "Couche de demi-atténuation (CDA)",
       "def": "Épaisseur d'un matériau qui divise le débit de dose par deux."
      },
      {
       "terme": "Irradiation externe",
       "def": "Exposition à une source située hors du corps."
      },
      {
       "terme": "Contamination",
       "def": "Présence indésirable de substances radioactives sur une surface, dans l'air ou dans l'organisme."
      },
      {
       "terme": "Contamination interne",
       "def": "Entrée de substances radioactives dans l'organisme par inhalation, ingestion ou plaie."
      },
      {
       "terme": "Bruit de fond",
       "def": "Signal mesuré en l'absence de la source étudiée, dû à la radioactivité naturelle."
      },
      {
       "terme": "Électronvolt (eV)",
       "def": "Unité d'énergie adaptée aux rayonnements ; 1 MeV = 1 million d'eV."
      }
     ]
    },
    {
     "id": "btiin-installations-cycle",
     "titre": "Les installations nucléaires : réacteurs, cycle du combustible et sources",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire le principe de fonctionnement d'un réacteur à eau sous pression",
      "Identifier les principaux circuits et bâtiments d'une centrale",
      "Situer les étapes du cycle du combustible",
      "Présenter les arrêts de réacteur et leur importance pour les prestataires",
      "Citer les usages des sources radioactives hors production d'électricité"
     ],
     "sections": [
      {
       "titre": "Le principe d'un réacteur à eau sous pression",
       "contenu": "<p>Une centrale nucléaire produit de l'électricité comme une centrale thermique classique : de la chaleur fait bouillir de l'eau, la vapeur fait tourner une turbine qui entraîne un alternateur. La différence est l'origine de la chaleur : la fission de l'uranium dans le <strong>cœur</strong> du réacteur.</p>\n<p>Dans un <strong>réacteur à eau sous pression</strong> (REP), le type utilisé en France pour la production d'électricité, l'eau joue deux rôles : elle évacue la chaleur du cœur (<strong>caloporteur</strong>) et elle ralentit les neutrons pour entretenir la réaction en chaîne (<strong>modérateur</strong>). Elle est maintenue sous une pression élevée, de l'ordre de 155 bar, pour rester liquide à environ 300 °C.</p>\n<p>Le combustible se présente sous forme de <strong>pastilles</strong> d'oxyde d'uranium empilées dans des <strong>gaines</strong> métalliques étanches ; ces crayons sont regroupés en <strong>assemblages</strong>. La puissance est réglée par des <strong>barres de commande</strong> qui absorbent des neutrons et par du bore dissous dans l'eau du circuit.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans un REP, l'eau qui traverse le cœur ne va jamais à la turbine. Les circuits sont séparés : c'est ce qui permet de limiter la radioactivité aux seules parties de l'installation situées en zone nucléaire.</div>"
      },
      {
       "titre": "Les trois circuits et les bâtiments",
       "contenu": "<table><thead><tr><th>Circuit</th><th>Rôle</th><th>Particularité radiologique</th></tr></thead><tbody>\n<tr><td>Circuit primaire</td><td>Eau sous pression qui traverse le cœur et transmet sa chaleur aux générateurs de vapeur ; mise en mouvement par les pompes primaires</td><td>Eau et parois porteuses des produits d'activation : source principale du débit de dose et de la contamination lors des interventions</td></tr>\n<tr><td>Circuit secondaire</td><td>L'eau, chauffée dans les générateurs de vapeur, se vaporise ; la vapeur entraîne la turbine puis est recondensée</td><td>Normalement non contaminé ; surveillé pour détecter une fuite depuis le primaire</td></tr>\n<tr><td>Circuit de refroidissement</td><td>Refroidit le condenseur avec l'eau d'un fleuve, de la mer, ou via des tours aéroréfrigérantes</td><td>Sans lien avec la radioactivité</td></tr>\n</tbody></table>\n<p>Une centrale comprend plusieurs bâtiments, que l'on retrouve dans les plans et dans le repérage des locaux :</p>\n<ul>\n<li>le <strong>bâtiment réacteur</strong> (BR), enceinte de béton qui abrite le circuit primaire ;</li>\n<li>le <strong>bâtiment combustible</strong>, où sont entreposés et manutentionnés les assemblages neufs et usés, en piscine ;</li>\n<li>le <strong>bâtiment des auxiliaires nucléaires</strong>, qui contient les circuits de traitement et de contrôle de l'eau primaire, la ventilation, les filtres ;</li>\n<li>la <strong>salle des machines</strong> (turbine, alternateur), hors zone nucléaire ;</li>\n<li>les bâtiments de servitudes : électricité de secours, traitement des effluents et des déchets, magasins, vestiaires d'accès.</li>\n</ul>\n<p>On appelle <strong>tranche</strong> l'ensemble formé par un réacteur et ses installations associées ; un site compte en général plusieurs tranches.</p>"
      },
      {
       "titre": "Les arrêts de réacteur",
       "contenu": "<p>Un réacteur fonctionne en continu pendant de longs mois. Il est ensuite arrêté pour <strong>renouveler une partie du combustible</strong> et réaliser la maintenance qu'on ne peut pas faire en fonctionnement. Ces <strong>arrêts de tranche</strong> sont des périodes de très forte activité pour les entreprises prestataires : plusieurs centaines, voire plus d'un millier d'intervenants supplémentaires sur le site.</p>\n<table><thead><tr><th>Type d'arrêt</th><th>Contenu</th><th>Durée</th></tr></thead><tbody>\n<tr><td>Arrêt pour simple rechargement</td><td>Rechargement du combustible, maintenance courante</td><td>Quelques semaines</td></tr>\n<tr><td>Visite partielle</td><td>Rechargement et programme de maintenance plus important</td><td>Plus long</td></tr>\n<tr><td>Visite décennale</td><td>Tous les dix ans : contrôles et épreuves approfondis, modifications, réexamen périodique de sûreté</td><td>Plusieurs mois</td></tr>\n</tbody></table>\n<p>Pendant l'arrêt, chaque activité est minutée dans un planning général très dense. Les activités de logistique (échafaudages, calorifuge, protections biologiques, servitudes, sas) conditionnent les activités de maintenance : un échafaudage en retard retarde la robinetterie, qui retarde les essais.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en période d'arrêt, le prestataire organise souvent ses équipes en postes successifs (matin, après-midi, nuit). La passation d'information entre équipes, par écrit dans le dossier et oralement à la relève, est un moment critique : c'est là que se perdent les informations sur un écart ou une activité non terminée.</div>"
      },
      {
       "titre": "Le cycle du combustible",
       "contenu": "<p>On appelle <strong>cycle du combustible</strong> l'ensemble des étapes que suit la matière nucléaire, de la mine aux déchets. Chaque étape correspond à des installations où le technicien peut intervenir.</p>\n<ol>\n<li><strong>Extraction</strong> du minerai d'uranium et concentration (hors de France aujourd'hui).</li>\n<li><strong>Conversion</strong> : transformation chimique du concentré en un composé adapté à l'enrichissement.</li>\n<li><strong>Enrichissement</strong> : augmentation de la proportion d'uranium 235 (naturellement environ 0,7 %) jusqu'à quelques pourcents pour les REP.</li>\n<li><strong>Fabrication du combustible</strong> : pastilles, crayons, assemblages.</li>\n<li><strong>Utilisation en réacteur</strong> pendant plusieurs années.</li>\n<li><strong>Entreposage</strong> du combustible usé en piscine pour laisser décroître sa radioactivité et sa chaleur.</li>\n<li><strong>Traitement</strong> : séparation des matières réutilisables (uranium, plutonium) et des déchets ultimes ; le plutonium peut être recyclé dans un combustible mixte (MOX).</li>\n<li><strong>Conditionnement et gestion des déchets</strong>.</li>\n</ol>\n<p>Les risques dominants varient selon l'étape : risque chimique et contamination alpha dans les usines amont, exposition externe forte et risques de contamination variés à l'aval. Le <strong>risque de criticité</strong>, c'est-à-dire le déclenchement accidentel d'une réaction en chaîne hors d'un réacteur, est maîtrisé par des règles strictes sur les quantités, les géométries et les matériaux dans les installations qui manipulent de la matière fissile. L'intervenant les applique sans les discuter : limites de masse, contenants autorisés, interdiction d'introduire certains matériaux.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans une installation où existe un risque de criticité, un geste anodin ailleurs (déplacer un récipient, poser un seau d'eau, rapprocher deux conteneurs) peut être interdit. Les consignes de criticité affichées et données au briefing sont impératives.</div>"
      },
      {
       "titre": "Les autres installations et les sources",
       "contenu": "<p>En dehors de la production d'électricité et du cycle du combustible, la radioactivité est utilisée dans de nombreux domaines :</p>\n<ul>\n<li><strong>recherche</strong> : réacteurs expérimentaux, laboratoires, accélérateurs ;</li>\n<li><strong>médecine</strong> : médecine nucléaire (diagnostic et traitement par radiopharmaceutiques), radiothérapie, production de radionucléides ;</li>\n<li><strong>industrie</strong> : contrôle des soudures par gammagraphie, jauges de niveau ou d'épaisseur, stérilisation par irradiation, détecteurs ;</li>\n<li><strong>propulsion navale</strong> et applications de défense, qui relèvent d'un régime particulier.</li>\n</ul>\n<p>On distingue deux formes de sources :</p>\n<table><thead><tr><th>Type</th><th>Description</th><th>Risque</th></tr></thead><tbody>\n<tr><td>Source scellée</td><td>Matière radioactive enfermée dans une enveloppe étanche et résistante</td><td>Irradiation externe ; contamination seulement si l'enveloppe est endommagée</td></tr>\n<tr><td>Source non scellée</td><td>Matière radioactive sous forme manipulable (liquide, poudre, gaz)</td><td>Irradiation et contamination</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> identifier les risques radiologiques dominants d'une installation à partir de sa description. 1) Repérer la nature des matières : combustible neuf, combustible usé, circuits activés, actinides, sources scellées. 2) En déduire les rayonnements : alpha pour uranium et plutonium, bêta et gamma pour produits d'activation et de fission. 3) En déduire le risque dominant : contamination interne pour l'alpha, irradiation externe pour le gamma. 4) Vérifier un éventuel risque particulier : criticité si de la matière fissile est présente, risque chimique dans les usines du cycle. Exemple : atelier de fabrication de combustible MOX : plutonium, donc alpha, donc risque dominant de contamination interne et risque de criticité ; travail en boîte à gants.</div>"
      },
      {
       "titre": "Le parc et l'organisation d'un site",
       "contenu": "<p>Le parc français de production d'électricité nucléaire compte une cinquantaine de réacteurs REP répartis sur dix-huit sites, de puissances de 900, 1 300, 1 450 et 1 600 MW électriques environ (ce dernier niveau correspondant au réacteur EPR de Flamanville). D'autres installations, en fonctionnement ou en démantèlement, sont exploitées par les organismes de recherche et les industriels du cycle.</p>\n<p>Un site nucléaire est organisé en <strong>zones d'accès réglementées</strong> concentriques : le périmètre du site (contrôle d'accès, badge), puis la <strong>zone nucléaire</strong> à laquelle on accède par des vestiaires et des contrôles, et à l'intérieur de celle-ci les zones délimitées au titre de la radioprotection (surveillées et contrôlées), présentées avec le zonage.</p>\n<p>Chaque local porte un <strong>repère géographique</strong> (bâtiment, niveau, numéro de local) et chaque matériel un <strong>repère fonctionnel</strong> (système, numéro, type de matériel). Savoir passer de l'un à l'autre est une compétence évaluée à l'épreuve écrite : on y revient avec la préparation de chantier et l'analyse des plans de locaux.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la zone nucléaire d'un site regroupe les bâtiments où des matières radioactives peuvent être présentes ; on n'y entre et n'en sort que par les vestiaires prévus, avec les contrôles associés.</div>"
      }
     ],
     "points_cles": [
      "Le REP utilise l'eau comme caloporteur et modérateur, sous environ 155 bar.",
      "Trois circuits séparés : primaire (radioactif), secondaire, refroidissement.",
      "Le circuit primaire, porteur des produits d'activation, est la source principale de dose en maintenance.",
      "Les arrêts de tranche concentrent l'essentiel de l'activité des prestataires.",
      "Le cycle du combustible va de la mine aux déchets en passant par l'enrichissement, la fabrication, le réacteur et le traitement.",
      "Le risque de criticité impose des règles strictes sur les quantités et les géométries de matière fissile.",
      "Une source scellée expose surtout à l'irradiation ; une source non scellée aussi à la contamination.",
      "Chaque local a un repère géographique, chaque matériel un repère fonctionnel."
     ],
     "lexique": [
      {
       "terme": "REP",
       "def": "Réacteur à eau sous pression, type utilisé pour la production d'électricité en France."
      },
      {
       "terme": "Circuit primaire",
       "def": "Circuit d'eau sous pression qui traverse le cœur et transporte la chaleur aux générateurs de vapeur."
      },
      {
       "terme": "Générateur de vapeur",
       "def": "Échangeur où l'eau primaire chauffe et vaporise l'eau secondaire sans contact entre elles."
      },
      {
       "terme": "Tranche",
       "def": "Ensemble constitué d'un réacteur et de ses installations associées."
      },
      {
       "terme": "Arrêt de tranche",
       "def": "Période d'arrêt du réacteur pour rechargement du combustible et maintenance."
      },
      {
       "terme": "Visite décennale",
       "def": "Arrêt approfondi réalisé tous les dix ans avec contrôles et réexamen de sûreté."
      },
      {
       "terme": "Cycle du combustible",
       "def": "Ensemble des étapes suivies par la matière nucléaire, de la mine aux déchets."
      },
      {
       "terme": "Criticité",
       "def": "Risque de déclenchement accidentel d'une réaction en chaîne hors d'un réacteur."
      },
      {
       "terme": "Source scellée",
       "def": "Matière radioactive enfermée dans une enveloppe étanche."
      },
      {
       "terme": "MOX",
       "def": "Combustible mixte d'oxydes d'uranium et de plutonium recyclé."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — La radioprotection",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btiin-effets-doses-limites",
     "titre": "Effets biologiques, grandeurs de dose et limites réglementaires",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Distinguer effets déterministes et effets stochastiques des rayonnements",
      "Définir dose absorbée, dose équivalente, dose efficace, débit de dose",
      "Calculer une dose à partir d'un débit de dose et d'une durée",
      "Citer les limites réglementaires d'exposition des travailleurs et du public",
      "Expliquer le classement des travailleurs en catégories A et B"
     ],
     "sections": [
      {
       "titre": "Des ionisations aux effets sur la santé",
       "contenu": "<p>Lorsqu'un rayonnement traverse une cellule, il peut endommager directement l'ADN ou créer dans l'eau de la cellule des espèces chimiques très réactives qui l'endommagent à leur tour. La cellule dispose de mécanismes de <strong>réparation</strong> efficaces. Trois issues sont possibles : la réparation correcte (aucun effet), la mort de la cellule, ou une réparation imparfaite qui laisse une modification du patrimoine génétique, une <strong>mutation</strong>.</p>\n<p>Les tissus dont les cellules se renouvellent rapidement sont les plus sensibles : moelle osseuse (fabrication du sang), muqueuse intestinale, organes reproducteurs, peau, cristallin de l'œil. L'<strong>embryon</strong> et le fœtus sont particulièrement sensibles, ce qui justifie une protection renforcée des femmes enceintes.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les rayonnements ne produisent pas de maladie spécifique : leurs effets à long terme (cancers) sont les mêmes que ceux d'autres causes. C'est pourquoi on ne peut les étudier qu'à l'échelle de grandes populations, et pourquoi la réglementation adopte une démarche prudente.</div>"
      },
      {
       "titre": "Effets déterministes et effets stochastiques",
       "contenu": "<table><thead><tr><th>Caractéristique</th><th>Effets déterministes (réactions tissulaires)</th><th>Effets stochastiques (aléatoires)</th></tr></thead><tbody>\n<tr><td>Mécanisme</td><td>Mort d'un grand nombre de cellules d'un tissu</td><td>Mutation d'une cellule qui survit</td></tr>\n<tr><td>Seuil</td><td>Oui : rien en dessous d'un seuil de dose</td><td>On considère par prudence qu'il n'y a pas de seuil</td></tr>\n<tr><td>Gravité</td><td>Augmente avec la dose</td><td>Ne dépend pas de la dose</td></tr>\n<tr><td>Probabilité</td><td>Certaine au-delà du seuil</td><td>Augmente avec la dose</td></tr>\n<tr><td>Délai d'apparition</td><td>Court : heures, jours, semaines</td><td>Long : plusieurs années à décennies</td></tr>\n<tr><td>Exemples</td><td>Brûlure radiologique, chute des globules, opacification du cristallin</td><td>Cancers, leucémies</td></tr>\n</tbody></table>\n<p>Les effets déterministes n'apparaissent qu'après des expositions fortes, de l'ordre de plusieurs centaines de millisieverts reçus en peu de temps pour les premières modifications de la formule sanguine. Ils ne se rencontrent qu'en situation accidentelle. La radioprotection a pour objectif de les <strong>éviter totalement</strong>.</p>\n<p>Pour les effets stochastiques, la réglementation retient l'hypothèse d'une relation <strong>linéaire sans seuil</strong> : toute dose, même faible, est supposée ajouter un petit risque, proportionnel à la dose. Cette hypothèse prudente justifie de réduire les doses <strong>autant que raisonnablement possible</strong>, même en dessous des limites. La radioprotection a pour objectif de <strong>limiter leur probabilité</strong>.</p>"
      },
      {
       "titre": "Les grandeurs de dose",
       "contenu": "<p>Plusieurs grandeurs permettent de quantifier l'exposition. Il faut savoir laquelle est utilisée dans un document.</p>\n<ul>\n<li>La <strong>dose absorbée</strong> D est l'énergie déposée par le rayonnement par unité de masse de matière. Unité : le <strong>gray</strong> (Gy) ; 1 Gy = 1 J/kg.</li>\n<li>La <strong>dose équivalente</strong> H tient compte de la nocivité du rayonnement : H = D × w<sub>R</sub>, où w<sub>R</sub> est le facteur de pondération du rayonnement (1 pour les photons et les électrons, 20 pour les alpha, une valeur variable selon l'énergie pour les neutrons). Unité : le <strong>sievert</strong> (Sv). Elle sert pour un organe ou un tissu : peau, extrémités, cristallin.</li>\n<li>La <strong>dose efficace</strong> E tient compte en plus de la sensibilité des différents organes, au moyen de facteurs de pondération tissulaires. Elle représente le risque global pour l'organisme entier. Unité : le sievert. C'est la grandeur des limites « corps entier ».</li>\n<li>Le <strong>débit de dose</strong> est la dose reçue par unité de temps : µSv/h ou mSv/h. C'est ce que mesure un radiamètre et ce que montre une cartographie.</li>\n</ul>\n<p>Dans la pratique des chantiers, on manipule surtout des <strong>µSv</strong> et des <strong>mSv</strong>, ainsi que des débits en µSv/h et mSv/h. Les appareils de terrain affichent des grandeurs opérationnelles conçues pour donner une estimation prudente des grandeurs réglementaires.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une dose prévisionnelle. Dose (µSv) = débit de dose (µSv/h) × durée (h). Exemple : un intervenant travaille 45 min à un poste où le débit est de 120 µSv/h. 1) Convertir la durée : 45 min = 0,75 h. 2) Dose = 120 × 0,75 = 90 µSv. 3) Pour 3 intervenants travaillant chacun 45 min : dose collective = 3 × 90 = 270 µSv, soit 0,27 H.mSv (homme-millisievert). 4) Toujours vérifier les unités : un débit en mSv/h multiplié par des minutes donne une erreur d'un facteur 60.</div>"
      },
      {
       "titre": "Les limites réglementaires d'exposition",
       "contenu": "<p>Le Code du travail fixe des <strong>valeurs limites</strong> d'exposition pour les travailleurs. Ce sont des plafonds à ne jamais dépasser, pas des objectifs : l'optimisation conduit à rester très en dessous.</p>\n<table><thead><tr><th>Personne</th><th>Dose efficace (corps entier)</th><th>Extrémités et peau</th><th>Cristallin</th></tr></thead><tbody>\n<tr><td>Travailleur de 18 ans et plus</td><td>20 mSv sur 12 mois consécutifs</td><td>500 mSv sur 12 mois</td><td>20 mSv sur 12 mois</td></tr>\n<tr><td>Jeune de 16 à 18 ans (apprenti, élève en formation)</td><td>6 mSv sur 12 mois</td><td>150 mSv</td><td>15 mSv</td></tr>\n<tr><td>Enfant à naître d'une travailleuse enceinte</td><td>Moins de 1 mSv entre la déclaration de grossesse et la naissance</td><td>Non concerné</td><td>Non concerné</td></tr>\n<tr><td>Public (Code de la santé publique)</td><td>1 mSv par an, hors exposition naturelle et médicale</td><td>Valeurs spécifiques, non utilisées sur chantier</td><td>Valeurs spécifiques, non utilisées sur chantier</td></tr>\n</tbody></table>\n<p>La limite est calculée sur <strong>12 mois consécutifs glissants</strong>, et non sur l'année civile : en août, on additionne les doses reçues depuis septembre de l'année précédente. La dose reçue chez tous les employeurs successifs s'additionne ; elle est centralisée dans un système national de suivi de la dosimétrie.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une femme travailleuse exposée qui est enceinte a tout intérêt à déclarer sa grossesse au plus tôt à son employeur, car c'est cette déclaration qui déclenche la protection renforcée de l'enfant à naître. Un élève mineur en période de formation en milieu professionnel est soumis aux limites des jeunes travailleurs.</div>"
      },
      {
       "titre": "Le classement des travailleurs",
       "contenu": "<p>L'employeur évalue, avec l'appui du <strong>conseiller en radioprotection</strong>, l'exposition prévisible de chaque travailleur. En fonction de cette évaluation, il le <strong>classe</strong> :</p>\n<table><thead><tr><th>Catégorie</th><th>Critère (exposition susceptible d'être reçue sur 12 mois)</th><th>Conséquences</th></tr></thead><tbody>\n<tr><td>Catégorie A</td><td>Plus de 6 mSv en dose efficace, ou plus de 15 mSv au cristallin, ou plus de 150 mSv aux extrémités ou à la peau</td><td>Suivi individuel renforcé, examen médical avant affectation puis périodique, dosimétrie individuelle</td></tr>\n<tr><td>Catégorie B</td><td>Exposé au-delà des niveaux du public sans atteindre les critères de la catégorie A</td><td>Suivi individuel renforcé, dosimétrie individuelle</td></tr>\n<tr><td>Non classé</td><td>Exposition inférieure aux niveaux justifiant un classement</td><td>Accès limité aux zones et aux conditions prévues pour les non-classés</td></tr>\n</tbody></table>\n<p>Le classement figure dans le dossier du salarié et conditionne les zones auxquelles il peut accéder. Les travailleurs des entreprises prestataires intervenant en arrêt de réacteur sont le plus souvent classés en catégorie A.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chaque entreprise fixe en plus des <strong>objectifs de dose</strong> internes, nettement inférieurs aux limites (par exemple une contrainte de dose annuelle par salarié et une dose prévisionnelle par chantier). Un intervenant qui approche de son objectif est réaffecté sur des activités moins exposées : c'est une mesure d'optimisation, pas une sanction.</div>"
      },
      {
       "titre": "Le suivi médical et la dosimétrie individuelle",
       "contenu": "<p>Tout travailleur classé bénéficie d'un <strong>suivi individuel renforcé</strong> par le service de santé au travail : visite médicale avant l'affectation, puis périodique. Le médecin du travail délivre un avis d'aptitude et a accès aux résultats dosimétriques du salarié.</p>\n<p>La dose reçue est mesurée par deux types de dosimètres, dont le fonctionnement est détaillé avec l'accès en zone :</p>\n<ul>\n<li>le <strong>dosimètre passif</strong> (ou dosimètre de référence), porté en permanence en zone, lu par un laboratoire agréé à la fin de chaque période ; c'est la dose « officielle » ;</li>\n<li>le <strong>dosimètre opérationnel</strong>, électronique, qui affiche la dose et le débit de dose en temps réel et déclenche des alarmes.</li>\n</ul>\n<p>Pour la contamination interne, on réalise si nécessaire des examens spécifiques : <strong>anthroporadiométrie</strong> (mesure directe du rayonnement émis par le corps), <strong>analyses radiotoxicologiques</strong> (urines, selles), qui permettent d'estimer la dose interne.</p>\n<p>Le travailleur a accès à ses résultats. Il connaît sa dose cumulée et la consulte pour savoir où il en est par rapport à ses objectifs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> effets déterministes : à éviter totalement par le respect des limites ; effets stochastiques : à rendre aussi peu probables que possible par l'optimisation. Les deux objectifs reposent sur une mesure fiable de la dose de chaque travailleur.</div>"
      }
     ],
     "points_cles": [
      "Les effets déterministes ont un seuil et apparaissent vite ; ils sont à éviter totalement.",
      "Les effets stochastiques (cancers) sont supposés sans seuil ; leur probabilité augmente avec la dose.",
      "Gray : énergie absorbée par kilogramme ; sievert : dose équivalente ou efficace.",
      "Dose = débit de dose × durée, en vérifiant la cohérence des unités.",
      "Limite des travailleurs : 20 mSv sur 12 mois consécutifs en dose efficace.",
      "Jeunes de 16 à 18 ans : 6 mSv sur 12 mois ; public : 1 mSv par an.",
      "Catégorie A : exposition susceptible de dépasser 6 mSv par an.",
      "Dosimètre passif pour la dose de référence, dosimètre opérationnel pour le suivi en temps réel."
     ],
     "lexique": [
      {
       "terme": "Gray (Gy)",
       "def": "Unité de dose absorbée : 1 joule déposé par kilogramme de matière."
      },
      {
       "terme": "Sievert (Sv)",
       "def": "Unité de dose équivalente et de dose efficace, qui traduit l'effet biologique."
      },
      {
       "terme": "Dose efficace",
       "def": "Dose représentant le risque global pour l'organisme, pondérée par la sensibilité des organes."
      },
      {
       "terme": "Débit de dose",
       "def": "Dose reçue par unité de temps, en µSv/h ou mSv/h."
      },
      {
       "terme": "Effet déterministe",
       "def": "Effet à seuil, dont la gravité croît avec la dose, apparaissant à court terme."
      },
      {
       "terme": "Effet stochastique",
       "def": "Effet aléatoire à long terme, dont la probabilité croît avec la dose."
      },
      {
       "terme": "Dose collective",
       "def": "Somme des doses individuelles d'un groupe, en homme-sievert ou homme-millisievert."
      },
      {
       "terme": "Catégorie A",
       "def": "Classement des travailleurs susceptibles de recevoir plus de 6 mSv par an."
      },
      {
       "terme": "Conseiller en radioprotection",
       "def": "Personne ou organisme désigné par l'employeur pour l'assister en radioprotection."
      },
      {
       "terme": "Anthroporadiométrie",
       "def": "Mesure directe des rayonnements émis par le corps pour détecter une contamination interne."
      }
     ]
    },
    {
     "id": "btiin-principes-radioprotection",
     "titre": "Les principes de radioprotection et l'optimisation des doses",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Énoncer les trois principes de la radioprotection : justification, optimisation, limitation",
      "Appliquer la démarche ALARA à une intervention",
      "Utiliser les paramètres temps, distance et écran pour réduire l'exposition externe",
      "Calculer l'effet d'un éloignement par la loi de l'inverse du carré de la distance",
      "Comparer plusieurs scénarios d'intervention selon la dose collective"
     ],
     "sections": [
      {
       "titre": "Les trois principes",
       "contenu": "<p>Toute la radioprotection repose sur trois principes, inscrits dans le Code de la santé publique et dans les recommandations internationales.</p>\n<table><thead><tr><th>Principe</th><th>Question posée</th><th>Application sur chantier</th></tr></thead><tbody>\n<tr><td><strong>Justification</strong></td><td>L'activité exposante apporte-t-elle un bénéfice supérieur au risque ?</td><td>L'intervention est-elle nécessaire maintenant ? Peut-on l'éviter, la reporter après décroissance, la faire à distance ?</td></tr>\n<tr><td><strong>Optimisation</strong></td><td>L'exposition est-elle aussi basse que raisonnablement possible ?</td><td>Choix des protections, des outils, de l'organisation, de l'effectif pour réduire les doses</td></tr>\n<tr><td><strong>Limitation</strong></td><td>Les doses individuelles restent-elles sous les limites ?</td><td>Respect des limites réglementaires et des objectifs de dose de l'entreprise</td></tr>\n</tbody></table>\n<p>Le principe d'optimisation est connu sous l'acronyme anglais <strong>ALARA</strong> : <em>As Low As Reasonably Achievable</em>, « aussi bas que raisonnablement possible ». « Raisonnablement » signifie que l'on tient compte des contraintes économiques, techniques et des autres risques : poser 2 tonnes de protections pour gagner quelques microsieverts peut générer davantage de dose (pendant la pose) et un risque de manutention supérieur au gain.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la limitation est une barrière, l'optimisation est une démarche permanente. Un chantier qui respecte les limites mais n'a pas été optimisé n'est pas conforme à l'esprit de la radioprotection.</div>"
      },
      {
       "titre": "Agir sur le temps",
       "contenu": "<p>La dose reçue est proportionnelle au temps passé dans le champ de rayonnement : diviser le temps par deux divise la dose par deux. On réduit le temps d'exposition en :</p>\n<ul>\n<li><strong>préparant</strong> hors zone tout ce qui peut l'être : pré-montage, réglage des outils, lecture du mode opératoire, repérage sur plan ou sur photo ;</li>\n<li>faisant des <strong>répétitions</strong> sur maquette ou sur un matériel identique hors zone pour les gestes délicats ;</li>\n<li>utilisant des <strong>outils adaptés</strong> : clés à choc, outillage spécifique, dispositifs de serrage rapide ;</li>\n<li>organisant les <strong>déplacements</strong> : ne pas attendre près d'une source, quitter le poste pendant les temps morts, choisir un lieu d'attente à faible débit de dose ;</li>\n<li><strong>répartissant</strong> la dose entre plusieurs intervenants, ce qui ne réduit pas la dose collective mais évite qu'une personne reçoive l'essentiel.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> se précipiter pour réduire le temps est une fausse bonne idée. Un geste raté par précipitation oblige à recommencer, augmente la dose et peut créer un écart de qualité ou un accident. On réduit le temps par la préparation, pas par la vitesse.</div>"
      },
      {
       "titre": "Agir sur la distance",
       "contenu": "<p>Pour une source de petites dimensions, assimilable à un point, le débit de dose diminue comme l'<strong>inverse du carré de la distance</strong> : quand on double la distance, le débit est divisé par quatre ; quand on la triple, il est divisé par neuf.</p>\n<p>Formule : D<sub>2</sub> = D<sub>1</sub> × (d<sub>1</sub> / d<sub>2</sub>)<sup>2</sup>, où D<sub>1</sub> est le débit mesuré à la distance d<sub>1</sub> et D<sub>2</sub> le débit à la distance d<sub>2</sub>.</p>\n<p>Cette loi explique l'utilité des <strong>outils à long manche</strong>, des pinces de préhension, de la télémanipulation et des caméras : quelques dizaines de centimètres de plus entre les mains et la source peuvent réduire fortement la dose aux extrémités. Elle explique aussi pourquoi on ne s'appuie jamais sur une tuyauterie active et pourquoi on choisit un <strong>point d'attente</strong> éloigné.</p>\n<p>Pour une source étendue (une longue tuyauterie, une paroi contaminée, un réservoir), la décroissance est moins rapide près de la source ; la loi ne s'applique alors qu'à une distance grande par rapport aux dimensions de la source. Dans tous les cas, s'éloigner réduit le débit.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul avec l'inverse du carré. Le débit mesuré à 0,5 m d'une source ponctuelle est de 2 mSv/h. Quel débit à 2 m ? 1) Rapport des distances : d<sub>1</sub>/d<sub>2</sub> = 0,5/2 = 0,25. 2) Au carré : 0,25<sup>2</sup> = 0,0625. 3) D<sub>2</sub> = 2 × 0,0625 = 0,125 mSv/h = 125 µSv/h. 4) Vérification rapide : la distance est multipliée par 4, le débit est divisé par 4<sup>2</sup> = 16, et 2 000 / 16 = 125 µSv/h. Pour trouver la distance donnant un débit visé : d<sub>2</sub> = d<sub>1</sub> × racine carrée de (D<sub>1</sub>/D<sub>2</sub>).</div>"
      },
      {
       "titre": "Agir sur les écrans",
       "contenu": "<p>Le troisième levier consiste à interposer des <strong>protections biologiques</strong> entre la source et les intervenants. Sur chantier, on utilise surtout :</p>\n<ul>\n<li>des <strong>matelas</strong> ou couvertures de plomb ou de matériaux chargés, posés sur les tuyauteries ;</li>\n<li>des <strong>briques</strong> de plomb ou des <strong>écrans mobiles</strong> sur roulettes ;</li>\n<li>des <strong>protections fixes</strong> en béton ou en acier prévues par la conception ;</li>\n<li>l'<strong>eau</strong> : maintenir un circuit plein ou travailler sous eau réduit fortement le débit ;</li>\n<li>des <strong>tabliers et lunettes</strong> plombés, plus rares, pour protéger une partie du corps.</li>\n</ul>\n<p>La pose de protections fait elle-même l'objet d'une étude : elle a un poids (le plomb est très lourd, une couverture peut peser plusieurs dizaines de kilos), elle exige un support capable de le supporter, elle expose l'équipe pendant la pose et la dépose. Les protections sont posées selon un <strong>plan de pose</strong>, repérées, et ne doivent jamais être déplacées sans accord.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un arrêt de réacteur, la pose des protections biologiques est confiée à des équipes de logistique spécialisées qui interviennent avant les équipes de maintenance. L'efficacité de la pose est vérifiée par une mesure après installation, qui alimente la cartographie utilisée par les équipes suivantes.</div>"
      },
      {
       "titre": "Les autres leviers d'optimisation",
       "contenu": "<p>Au-delà du triptyque temps, distance, écran, l'optimisation porte sur toute l'organisation :</p>\n<ul>\n<li><strong>réduire le terme source</strong> : décontaminer, rincer ou vidanger un circuit, retirer un déchet actif avant de commencer ;</li>\n<li><strong>attendre la décroissance</strong> lorsque le planning le permet ;</li>\n<li><strong>ajuster l'effectif</strong> : seules les personnes nécessaires entrent dans la zone, les autres restent en zone à faible débit ou hors zone ;</li>\n<li><strong>surveiller à distance</strong> : caméras, télédosimétrie (transmission des doses en temps réel à un poste de suivi) ;</li>\n<li><strong>retour d'expérience</strong> : comparer la dose réelle à la dose prévue pour améliorer la préparation suivante.</li>\n</ul>\n<p>L'optimisation doit aussi traiter la contamination : un chantier qui évite la dispersion de la contamination évite des doses internes et des opérations de décontamination ultérieures.</p>"
      },
      {
       "titre": "Comparer des scénarios",
       "contenu": "<p>À l'épreuve comme en entreprise, on demande souvent de comparer deux façons de réaliser une même tâche. L'outil de comparaison est la <strong>dose collective prévisionnelle</strong>, qui intègre toutes les phases, y compris la pose des protections.</p>\n<table><thead><tr><th>Phase</th><th>Scénario 1 : sans protection</th><th>Scénario 2 : avec protection</th></tr></thead><tbody>\n<tr><td>Pose des protections</td><td>Néant</td><td>2 personnes, 0,5 h, 400 µSv/h</td></tr>\n<tr><td>Intervention</td><td>2 personnes, 3 h, 400 µSv/h</td><td>2 personnes, 3 h, 100 µSv/h</td></tr>\n<tr><td>Dépose des protections</td><td>Néant</td><td>2 personnes, 0,5 h, 400 µSv/h</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul de dose collective par scénario. Scénario 1 : 2 × 3 × 400 = 2 400 µSv. Scénario 2 : pose 2 × 0,5 × 400 = 400 µSv ; intervention 2 × 3 × 100 = 600 µSv ; dépose 400 µSv ; total 1 400 µSv. Conclusion : le scénario 2 économise 1 000 µSv (1 H.mSv), soit environ 42 % de la dose ; il est retenu, sous réserve que la manutention des protections soit maîtrisée. Si l'intervention ne durait que 30 min, le scénario 1 donnerait 400 µSv et le scénario 2 : 400 + 100 + 400 = 900 µSv : la protection ne serait plus justifiée. Toujours conclure par une phrase qui argumente le choix.</div>"
      },
      {
       "titre": "De la prévision à l'intervention : objectifs et suivi de dose",
       "contenu": "<p>L'optimisation se traduit concrètement dans les documents du chantier. Avant l'intervention, la préparation établit une <strong>évaluation dosimétrique prévisionnelle</strong> (EDP) : pour chaque phase, effectif, durée, débit de dose au poste de travail, dose individuelle et collective prévues. Cette évaluation fixe la <strong>dose prévisionnelle</strong> du chantier et sert à régler les seuils d'alarme des dosimètres opérationnels.</p>\n<p>Plus la dose prévisionnelle est élevée, plus l'analyse d'optimisation doit être poussée : au-delà de seuils fixés par l'exploitant, une étude formalisée des solutions de réduction est exigée, avec validation par le service de radioprotection. Le document qui autorise le travail et rappelle les conditions radiologiques (zones, débits, tenues, seuils) est souvent appelé <strong>régime de travail radiologique</strong> ; son exploitation est détaillée dans le bloc d'analyse de documents.</p>\n<p>Pendant l'intervention, le chargé de travaux suit la dose reçue par rapport à la dose prévue. Un écart significatif (dose réelle qui dépasse nettement la prévision à mi-parcours) impose de s'arrêter et d'en comprendre la cause : débit plus élevé que prévu, durée sous-estimée, difficulté technique. On ne poursuit pas en espérant rattraper le retard.</p>\n<p>Après l'intervention, le <strong>bilan dosimétrique</strong> compare dose réelle et dose prévue. Les écarts et les bonnes pratiques sont consignés dans le retour d'expérience, qui alimente la préparation du prochain chantier identique, souvent lors de l'arrêt de réacteur suivant.</p>"
      }
     ],
     "points_cles": [
      "Trois principes : justification, optimisation (ALARA), limitation.",
      "ALARA : aussi bas que raisonnablement possible, en tenant compte des autres risques et des coûts.",
      "La dose est proportionnelle au temps : on réduit le temps par la préparation, pas par la précipitation.",
      "Pour une source ponctuelle, doubler la distance divise le débit par quatre.",
      "Les protections biologiques ont un poids et une dose de pose qu'il faut intégrer.",
      "Réduire le terme source (rinçage, décontamination) est souvent le levier le plus efficace.",
      "On compare des scénarios par leur dose collective prévisionnelle, toutes phases comprises.",
      "Le retour d'expérience compare dose réelle et dose prévue pour améliorer la préparation."
     ],
     "lexique": [
      {
       "terme": "Justification",
       "def": "Principe selon lequel une exposition doit apporter un bénéfice supérieur au risque."
      },
      {
       "terme": "Optimisation",
       "def": "Principe visant à maintenir les expositions aussi bas que raisonnablement possible."
      },
      {
       "terme": "Limitation",
       "def": "Principe imposant de ne pas dépasser les limites réglementaires de dose."
      },
      {
       "terme": "ALARA",
       "def": "As Low As Reasonably Achievable : aussi bas que raisonnablement possible."
      },
      {
       "terme": "Loi de l'inverse du carré",
       "def": "Pour une source ponctuelle, le débit varie comme l'inverse du carré de la distance."
      },
      {
       "terme": "Protection biologique",
       "def": "Écran destiné à atténuer les rayonnements : plomb, béton, acier, eau."
      },
      {
       "terme": "Terme source",
       "def": "Quantité et nature de la radioactivité à l'origine de l'exposition."
      },
      {
       "terme": "Point d'attente",
       "def": "Emplacement à faible débit de dose où l'on se tient pendant les temps morts."
      },
      {
       "terme": "Télédosimétrie",
       "def": "Transmission en temps réel des doses et débits des intervenants vers un poste de suivi."
      }
     ]
    },
    {
     "id": "btiin-zonage-acces-dosimetrie",
     "titre": "Zonage radiologique, accès en zone et dosimétrie",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Identifier les zones délimitées et leur signalisation",
      "Associer chaque zone aux valeurs de dose qui la définissent",
      "Décrire le parcours d'accès et de sortie d'une zone contrôlée",
      "Utiliser correctement dosimètre passif et dosimètre opérationnel",
      "Réagir à une alarme de dosimètre"
     ],
     "sections": [
      {
       "titre": "Pourquoi délimiter des zones",
       "contenu": "<p>L'employeur, avec le conseiller en radioprotection, évalue les niveaux d'exposition dans les locaux. Lorsque l'exposition peut dépasser certains niveaux, il délimite des <strong>zones</strong> dont l'accès est réglementé, signalé et contrôlé. Le but est simple : savoir avant d'entrer à quel niveau de risque on s'expose, et réserver l'accès aux personnes formées, classées et équipées.</p>\n<p>Le zonage relève du Code du travail. Il est complété par les règles propres à l'exploitant, notamment pour la <strong>propreté radiologique</strong> (risque de contamination), qui peut faire l'objet d'une signalisation supplémentaire.</p>\n<p>Une zone n'est pas forcément un local entier : elle peut être limitée à une partie de local, autour d'un équipement, et elle peut être <strong>intermittente</strong>, c'est-à-dire n'exister que pendant une opération (ouverture d'un circuit, utilisation d'un générateur X, tir de gammagraphie).</p>"
      },
      {
       "titre": "Les zones et leurs critères",
       "contenu": "<p>Les zones sont définies principalement par la <strong>dose efficace</strong> susceptible d'être reçue. La zone surveillée commence lorsque l'exposition peut dépasser 1 mSv par an.</p>\n<table><thead><tr><th>Zone</th><th>Couleur du trèfle</th><th>Critère de dose efficace (borne haute)</th><th>Conditions d'accès principales</th></tr></thead><tbody>\n<tr><td>Zone surveillée</td><td>Bleu</td><td>Moins de 1,25 mSv intégrée sur un mois</td><td>Travailleurs classés ou autorisés, informés</td></tr>\n<tr><td>Zone contrôlée verte</td><td>Vert</td><td>Moins de 4 mSv intégrée sur un mois</td><td>Travailleurs classés, dosimétrie passive et opérationnelle</td></tr>\n<tr><td>Zone contrôlée jaune</td><td>Jaune</td><td>Moins de 2 mSv intégrée sur une heure</td><td>Idem, avec mesures de radioprotection renforcées</td></tr>\n<tr><td>Zone contrôlée orange</td><td>Orange</td><td>Moins de 100 mSv intégrée sur une heure</td><td>Accès soumis à autorisation particulière, justifié et préparé</td></tr>\n<tr><td>Zone contrôlée rouge</td><td>Rouge</td><td>100 mSv ou plus intégrée sur une heure</td><td>Accès exceptionnel, autorisation spécifique</td></tr>\n</tbody></table>\n<p>D'autres zones existent : la <strong>zone d'extrémités</strong>, définie par la dose aux mains et aux pieds, et la <strong>zone radon</strong>. Chaque zone est signalée à ses accès par un panneau comportant le <strong>trèfle</strong> radioactif de la couleur de la zone, avec les informations utiles (nature du risque, consignes).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la couleur de la zone indique un niveau maximal possible, pas le débit au point où l'on travaille. À l'intérieur d'une zone verte, un <strong>point chaud</strong> (dépôt localisé, coude de tuyauterie) peut présenter un débit bien plus élevé : il est signalé par un balisage spécifique et indiqué sur la cartographie.</div>"
      },
      {
       "titre": "Le parcours d'accès en zone contrôlée",
       "contenu": "<p>L'entrée en zone contrôlée d'une installation suit un parcours obligatoire, dont l'ordre exact est affiché par l'exploitant. Le principe est toujours le même :</p>\n<ol>\n<li><strong>Vérification des droits</strong> : badge, formations, aptitude médicale, classement ; l'accès est refusé si l'un d'eux n'est pas valide.</li>\n<li><strong>Prise de connaissance</strong> du régime de travail ou du document de radioprotection du chantier : zones traversées, débits, dose prévisionnelle, seuils d'alarme, tenue requise.</li>\n<li><strong>Vestiaire froid</strong> : on retire ses vêtements personnels et on revêt la tenue de base fournie par le site (sous-vêtements, combinaison, chaussures de zone).</li>\n<li><strong>Prise des dosimètres</strong> : dosimètre passif porté sur la poitrine, dosimètre opérationnel activé avec les seuils d'alarme du chantier.</li>\n<li><strong>Entrée</strong> en zone ; en cours de route, passage éventuel par des sas d'habillage complémentaire (gants, surbottes, tenue étanche) selon le chantier.</li>\n</ol>\n<p>À la sortie, le parcours est inversé, avec des <strong>contrôles de non-contamination</strong> successifs : sortie de chantier, sortie de zone, sortie de site. On retire les tenues dans un ordre précis pour éviter de se contaminer, on dépose les équipements dans les bacs prévus, puis on passe aux portiques de contrôle. Ces contrôles sont détaillés avec la mesure de la contamination.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> interdiction absolue de boire, manger, fumer, vapoter, se maquiller ou mâcher en zone contrôlée. Les objets personnels (téléphone, montre, bijoux) n'y entrent pas, sauf autorisation, car ils pourraient être contaminés et ne plus pouvoir ressortir.</div>"
      },
      {
       "titre": "Le dosimètre passif",
       "contenu": "<p>Le <strong>dosimètre passif</strong> est le dosimètre de référence. Il ne comporte ni pile ni affichage : un matériau sensible enregistre la dose reçue, et un <strong>organisme de dosimétrie accrédité</strong> le lit à la fin de la période de port (mensuelle ou trimestrielle). Les résultats sont transmis au médecin du travail, au conseiller en radioprotection et au système national de suivi des expositions.</p>\n<ul>\n<li>Il se porte à la poitrine, sous la tenue de protection, côté exposé.</li>\n<li>Il est nominatif : on ne prête jamais son dosimètre et on n'utilise jamais celui d'un autre.</li>\n<li>Il reste sur le site, sur son tableau, en dehors des heures de travail ; il ne doit pas passer dans un contrôle de bagages à rayons X ni être laissé au soleil.</li>\n<li>Des dosimètres complémentaires peuvent être prescrits : <strong>bague</strong> ou bracelet pour les extrémités, dosimètre cristallin près des yeux, dosimètre neutrons.</li>\n</ul>\n<p>En cas de perte, de détérioration ou de suspicion d'exposition anormale, on prévient immédiatement le conseiller en radioprotection.</p>"
      },
      {
       "titre": "Le dosimètre opérationnel et ses alarmes",
       "contenu": "<p>Le <strong>dosimètre opérationnel</strong> (dosimètre électronique) est obligatoire en zone contrôlée. Il affiche en permanence la <strong>dose cumulée</strong> depuis l'entrée et le <strong>débit de dose</strong> instantané, et il comporte deux types d'alarme réglées pour chaque intervention :</p>\n<table><thead><tr><th>Alarme</th><th>Déclenchement</th><th>Signification</th></tr></thead><tbody>\n<tr><td>Alarme de dose</td><td>La dose cumulée atteint le seuil réglé (lié à la dose prévisionnelle)</td><td>L'intervenant a reçu la dose prévue pour cette entrée</td></tr>\n<tr><td>Alarme de débit de dose</td><td>Le débit instantané dépasse le seuil réglé</td><td>L'intervenant se trouve dans un champ plus intense que prévu</td></tr>\n</tbody></table>\n<p>À l'entrée, le dosimètre est activé à une borne de lecture qui enregistre l'entrée et charge les seuils ; à la sortie, la borne récupère les données. Les doses opérationnelles servent au suivi quotidien et à l'optimisation.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conduite à tenir en cas d'alarme de dosimètre. 1) Ne pas paniquer : l'alarme est réglée bien en dessous de toute dose dangereuse. 2) Mettre le chantier en sécurité si nécessaire (outil arrêté, matériel posé, circuit non laissé ouvert sans protection). 3) S'éloigner vers une zone à plus faible débit, en prévenant les autres intervenants. 4) Quitter la zone selon le parcours normal. 5) Informer immédiatement le chargé de travaux et le service de radioprotection. 6) Ne pas reprendre l'intervention avant l'analyse de l'événement et une nouvelle autorisation. Une alarme est un écart à déclarer : elle signale que la situation réelle diffère de la situation prévue.</div>"
      },
      {
       "titre": "Règles particulières selon les personnes",
       "contenu": "<p>Les règles d'accès tiennent compte de la situation de chacun :</p>\n<ul>\n<li>un travailleur <strong>non classé</strong> ne peut accéder qu'aux zones et dans les conditions prévues pour lui, en général accompagné et sans dépasser la zone surveillée ou des zones contrôlées de faible niveau, selon l'évaluation de l'employeur ;</li>\n<li>les <strong>jeunes de moins de 18 ans</strong> en formation sont soumis à des limites plus basses et à des interdictions d'accès aux zones les plus exposées ; leur présence en zone fait l'objet d'une autorisation et d'un encadrement spécifiques dans le cadre de la formation ;</li>\n<li>une <strong>femme enceinte</strong> ayant déclaré sa grossesse ne peut être affectée à des travaux qui exposeraient l'enfant à naître au-delà de la limite prévue ; elle ne peut pas être maintenue en zone où le risque de contamination interne existe, selon les règles du Code du travail ;</li>\n<li>les <strong>visiteurs</strong> sont accompagnés et munis d'un dosimètre opérationnel.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors des périodes de formation en milieu professionnel, l'élève de bac pro est accueilli selon un parcours défini avec le lycée et l'entreprise ; il porte sa propre dosimétrie, applique les mêmes règles que les salariés et ne réalise que les tâches autorisées pour son âge et son classement.</div>"
      },
      {
       "titre": "Balisage et signalisation sur le chantier",
       "contenu": "<p>Le zonage réglementaire des locaux est complété, sur le chantier, par un <strong>balisage</strong> que l'intervenant doit savoir lire, poser et respecter :</p>\n<ul>\n<li><strong>balisage de point chaud</strong> : panneau ou étiquette indiquant le débit au contact et à distance, avec la date de la mesure ;</li>\n<li><strong>balisage de zone à risque de contamination</strong> : délimitation au sol ou par chaîne, avec la tenue requise pour la franchir et le point de contrôle à la sortie ;</li>\n<li><strong>balisage de zone intermittente</strong> : rubalise et panneaux temporaires, avec gardiennage lorsqu'un tir radiographique est en cours ;</li>\n<li><strong>affichage du chantier</strong> : nom du chantier, responsable, document de radioprotection applicable, cartographie à jour, consignes en cas d'alarme.</li>\n</ul>\n<p>Le balisage est posé, contrôlé et retiré sous la responsabilité définie dans le dossier (souvent le service de radioprotection ou le chargé de travaux après mesure). Un balisage arraché, une étiquette illisible ou une cartographie périmée constituent des écarts à signaler.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne déplace jamais un balisage pour se faciliter le passage, même provisoirement. Si le balisage gêne l'intervention, on demande sa modification à la personne responsable, qui vérifie la situation radiologique avant de le changer.</div>"
      }
     ],
     "points_cles": [
      "La zone surveillée (bleue) commence au-delà de 1 mSv par an d'exposition possible.",
      "Zones contrôlées : verte (moins de 4 mSv par mois), jaune (moins de 2 mSv par heure), orange (moins de 100 mSv par heure), rouge (100 mSv par heure ou plus).",
      "La couleur indique un maximum possible ; les points chauds sont balisés à part.",
      "On entre par le vestiaire froid avec tenue de base et dosimètres ; on sort avec des contrôles de non-contamination successifs.",
      "Le dosimètre passif nominatif est la dose de référence ; il ne se prête jamais.",
      "Le dosimètre opérationnel affiche dose et débit et déclenche des alarmes réglées pour l'intervention.",
      "Alarme : mise en sécurité, repli, sortie, information immédiate, pas de reprise sans analyse.",
      "Il est interdit de boire, manger ou fumer en zone contrôlée."
     ],
     "lexique": [
      {
       "terme": "Zone surveillée",
       "def": "Zone bleue où la dose efficace peut dépasser 1 mSv par an mais reste inférieure à 1,25 mSv par mois."
      },
      {
       "terme": "Zone contrôlée",
       "def": "Zone verte, jaune, orange ou rouge, d'accès réservé aux travailleurs classés et équipés."
      },
      {
       "terme": "Zone intermittente",
       "def": "Zone délimitée seulement pendant une opération particulière."
      },
      {
       "terme": "Trèfle",
       "def": "Symbole du risque radioactif, dont la couleur indique la zone."
      },
      {
       "terme": "Point chaud",
       "def": "Endroit localisé où le débit de dose est nettement supérieur au reste du local."
      },
      {
       "terme": "Dosimètre passif",
       "def": "Dosimètre de référence, sans affichage, lu par un organisme accrédité."
      },
      {
       "terme": "Dosimètre opérationnel",
       "def": "Dosimètre électronique à lecture directe avec alarmes de dose et de débit."
      },
      {
       "terme": "Vestiaire froid",
       "def": "Vestiaire d'entrée où l'on quitte ses vêtements personnels pour la tenue de zone."
      },
      {
       "terme": "Zone d'extrémités",
       "def": "Zone délimitée au titre de la dose reçue aux mains, avant-bras, pieds et chevilles."
      }
     ]
    },
    {
     "id": "btiin-mesures-contamination",
     "titre": "Mesurer les rayonnements et contrôler la contamination",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Choisir un appareil de mesure adapté à la grandeur recherchée",
      "Vérifier un appareil avant usage",
      "Réaliser et interpréter une mesure directe et un frottis",
      "Calculer une contamination surfacique à partir d'un comptage",
      "Décrire les contrôles de non-contamination des personnes et des matériels"
     ],
     "sections": [
      {
       "titre": "Les familles d'appareils",
       "contenu": "<p>Le contrôle des paramètres radiologiques de l'environnement de travail est une compétence centrale du titulaire du diplôme. Il faut d'abord savoir quel appareil répond à quelle question.</p>\n<table><thead><tr><th>Question posée</th><th>Appareil</th><th>Unité affichée</th></tr></thead><tbody>\n<tr><td>Quel est le débit de dose à cet endroit ?</td><td><strong>Radiamètre</strong> (débitmètre), éventuellement avec sonde déportée ou télescopique</td><td>µSv/h, mSv/h</td></tr>\n<tr><td>Cette surface est-elle contaminée ?</td><td><strong>Contaminamètre</strong> avec sonde adaptée (alpha, bêta, ou mixte)</td><td>c/s (coups par seconde), parfois Bq/cm²</td></tr>\n<tr><td>La contamination est-elle fixée ou labile ?</td><td><strong>Frottis</strong> mesuré au contaminamètre ou en laboratoire</td><td>c/s puis Bq/cm²</td></tr>\n<tr><td>L'air est-il contaminé ?</td><td><strong>Balise</strong> ou <strong>préleveur d'aérosols</strong> avec filtre</td><td>Bq/m³</td></tr>\n<tr><td>Quelle dose ai-je reçue ?</td><td>Dosimètres passif et opérationnel</td><td>µSv, mSv</td></tr>\n<tr><td>Ma tenue, mes mains sont-elles propres ?</td><td>Contrôleurs mains-pieds, portiques de sortie</td><td>Voyant, comptage</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un radiamètre ne permet pas de vérifier une contamination de surface, en particulier alpha ; à l'inverse, un contaminamètre n'indique pas un débit de dose. Utiliser le mauvais appareil donne une fausse impression de sécurité.</div>"
      },
      {
       "titre": "Vérifier l'appareil avant de mesurer",
       "contenu": "<p>Une mesure fausse est plus dangereuse qu'une absence de mesure, car elle rassure à tort. Avant toute utilisation, on vérifie :</p>\n<ol>\n<li>que l'appareil est <strong>adapté</strong> au rayonnement recherché (alpha, bêta, gamma, neutrons) et à la gamme de mesure attendue ;</li>\n<li>la <strong>date de validité</strong> de la vérification périodique ou de l'étalonnage, indiquée sur une étiquette ;</li>\n<li>l'<strong>état physique</strong> : boîtier, câble, fenêtre de la sonde (une fenêtre alpha percée rend la sonde inutilisable) ;</li>\n<li>l'<strong>état des piles</strong> et le bon démarrage (test automatique) ;</li>\n<li>la <strong>réponse à une source de contrôle</strong> lorsque l'appareil le prévoit : le résultat doit se situer dans la plage indiquée ;</li>\n<li>le <strong>bruit de fond</strong> au lieu de mesure, à noter.</li>\n</ol>\n<p>On protège souvent la sonde par un film plastique fin pour éviter de la contaminer ; ce film doit être compatible avec le rayonnement recherché (il arrêterait les alpha si l'on mesurait de l'alpha).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un appareil dont la vérification est périmée, qui ne réagit pas à la source de contrôle ou dont la sonde est endommagée est retiré et signalé ; on ne l'utilise pas « en attendant ».</div>"
      },
      {
       "titre": "Mesurer un débit de dose et établir une cartographie",
       "contenu": "<p>La mesure du débit de dose se fait en tenant le radiamètre à la hauteur demandée (au contact, à 50 cm, à 1 m, ou à hauteur de poitrine pour l'ambiance) et en attendant la stabilisation de l'affichage. On note pour chaque point : sa position, la distance, la valeur et l'heure.</p>\n<p>Une <strong>cartographie radiologique</strong> regroupe ces mesures sur un plan du local : débits d'ambiance, débits au contact des points chauds, emplacements des protections, zones de balisage. Elle est datée et signée ; elle n'est valable que tant que les conditions ne changent pas. Elle est refaite après toute opération susceptible de modifier la situation : ouverture ou vidange d'un circuit, dépose de protections, déplacement d'un déchet actif.</p>\n<p>La lecture détaillée d'une cartographie et son exploitation pour calculer des doses font l'objet d'un chapitre du bloc d'analyse de documents.</p>"
      },
      {
       "titre": "Contamination fixée et labile : mesure directe et frottis",
       "contenu": "<p>Une contamination de surface peut être :</p>\n<ul>\n<li><strong>fixée</strong> : incrustée dans le matériau, elle ne se transfère pas au toucher mais contribue à l'irradiation ;</li>\n<li><strong>labile</strong> (ou non fixée) : elle peut se détacher, se transférer sur les gants, les chaussures, ou passer dans l'air. C'est la plus dangereuse pour la dispersion et la contamination interne.</li>\n</ul>\n<p>La <strong>mesure directe</strong> au contaminamètre, sonde à quelques millimètres de la surface et déplacée lentement, donne la contamination totale (fixée + labile). Le <strong>frottis</strong> consiste à frotter un papier filtre sur une surface définie (souvent 100 cm²), puis à mesurer ce papier loin de la surface : il donne la seule contamination labile, et permet de mesurer dans un endroit où le bruit de fond est trop élevé.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul d'une contamination surfacique labile à partir d'un frottis. Données : comptage du frottis 58 c/s, bruit de fond 3 c/s, rendement de la sonde pour le radionucléide 0,25 c/s par Bq, surface frottée 100 cm², coefficient de prélèvement retenu 0,1 (on considère que le frottis ne prélève que 10 % de la contamination labile). 1) Comptage net : 58 − 3 = 55 c/s. 2) Activité sur le frottis : 55 / 0,25 = 220 Bq. 3) Activité labile sur la surface : 220 / 0,1 = 2 200 Bq. 4) Contamination surfacique : 2 200 / 100 = 22 Bq/cm². 5) Comparer au seuil fixé par le site pour décider du classement de la surface et de la décontamination. Les coefficients sont toujours fournis par le site ou le sujet ; ne jamais les inventer.</div>"
      },
      {
       "titre": "La contamination atmosphérique",
       "contenu": "<p>La contamination de l'air apparaît lors des opérations qui mettent des particules en suspension : meulage, découpe, brossage, ouverture d'un circuit, manipulation de déchets secs, décontamination par jet. Elle provoque un risque de contamination interne par inhalation.</p>\n<p>On la surveille par :</p>\n<ul>\n<li>des <strong>balises</strong> fixes ou mobiles qui aspirent l'air à travers un filtre mesuré en continu et déclenchent une alarme au-delà d'un seuil ;</li>\n<li>des <strong>prélèvements</strong> sur filtre, mesurés ensuite au laboratoire ou sur un appareil de comptage.</li>\n</ul>\n<p>Une alarme de balise impose l'arrêt de l'activité, la mise en place ou la vérification de la protection respiratoire, et l'évacuation de la zone selon la consigne du chantier. Les personnes présentes font l'objet d'un contrôle de contamination interne si le service de radioprotection le demande.</p>"
      },
      {
       "titre": "Le contrôle des personnes et des matériels en sortie",
       "contenu": "<p>Le contrôle de sortie empêche la contamination de quitter la zone. Il est organisé en plusieurs niveaux successifs, de plus en plus sensibles :</p>\n<table><thead><tr><th>Lieu</th><th>Contrôle</th><th>Objectif</th></tr></thead><tbody>\n<tr><td>Sortie de chantier, au sas</td><td>Contrôle des mains et des pieds, de la tenue, des outils au contaminamètre</td><td>Ne pas emporter la contamination du chantier dans les couloirs</td></tr>\n<tr><td>Sortie de zone contrôlée</td><td>Portique corps entier après retrait de la tenue de zone</td><td>Garantir l'absence de contamination de la personne</td></tr>\n<tr><td>Sortie de site</td><td>Portique de sortie, plus sensible</td><td>Dernière barrière avant le domaine public</td></tr>\n</tbody></table>\n<p>Les <strong>matériels</strong> qui sortent de zone (outillage, appareils, déchets, pièces) sont contrôlés de la même façon ; ils sont emballés et étiquetés ; un matériel contaminé est décontaminé ou reste en zone dans un magasin dédié.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en cas de déclenchement d'un portique, l'intervenant ne force jamais le passage et ne recommence pas le contrôle plusieurs fois pour « tenter sa chance ». Il appelle le service de radioprotection, qui localise la contamination, procède à la décontamination (souvent un simple retrait de vêtement ou un lavage) et vérifie l'absence de contamination interne si nécessaire. L'événement est enregistré.</div>"
      },
      {
       "titre": "Interpréter et consigner une mesure",
       "contenu": "<p>Une mesure n'a de valeur que si elle est <strong>interprétable</strong> et <strong>traçable</strong>. Pour chaque mesure, on consigne sur la fiche prévue : la date et l'heure, le lieu précis (local, repère du matériel, point sur le plan), l'appareil utilisé et son numéro, le type de mesure (ambiance, contact, frottis), la valeur brute, le bruit de fond, la valeur nette et le nom de l'opérateur.</p>\n<p>Pour interpréter, on compare la valeur à une référence :</p>\n<ul>\n<li>au <strong>bruit de fond</strong> : une valeur proche du bruit de fond ne permet pas de conclure à une contamination ; une valeur nettement supérieure, confirmée par une seconde mesure, indique une contamination ;</li>\n<li>aux <strong>seuils du site</strong> : seuils de déclassement d'une surface, seuil de sortie d'un matériel, seuil de classement d'un déchet ;</li>\n<li>à la <strong>mesure précédente</strong> : une évolution brutale du débit ou de la contamination signale un changement de situation (ouverture de circuit, déchet oublié, protection déplacée).</li>\n</ul>\n<p>Les unités sont recopiées telles qu'affichées puis converties si nécessaire : un appareil peut basculer automatiquement de µSv/h en mSv/h, ce qui multiplie la valeur réelle par mille si l'on ne regarde que les chiffres. L'erreur de lecture d'unité est l'une des plus fréquentes, sur le terrain comme à l'examen.</p>\n<p>Enfin, toute mesure anormale est <strong>communiquée immédiatement</strong> au chargé de travaux et au service de radioprotection, avant même d'être consignée : la traçabilité ne doit jamais retarder l'alerte.</p>"
      }
     ],
     "points_cles": [
      "Radiamètre pour le débit de dose, contaminamètre pour la contamination de surface, balise pour l'air.",
      "Avant usage : adaptation au rayonnement, validité de la vérification, état, piles, source de contrôle, bruit de fond.",
      "Une cartographie est datée, signée et refaite dès que les conditions changent.",
      "Contamination fixée : ne se transfère pas ; contamination labile : se transfère et se disperse.",
      "Le frottis mesure la contamination labile sur une surface définie, souvent 100 cm².",
      "Contamination surfacique = comptage net / rendement / coefficient de prélèvement / surface.",
      "Les opérations qui créent des poussières génèrent un risque de contamination atmosphérique.",
      "Le contrôle de sortie est organisé en niveaux successifs : chantier, zone, site."
     ],
     "lexique": [
      {
       "terme": "Radiamètre",
       "def": "Appareil mesurant le débit de dose en µSv/h ou mSv/h."
      },
      {
       "terme": "Contaminamètre",
       "def": "Appareil mesurant la contamination de surface, souvent en coups par seconde."
      },
      {
       "terme": "Frottis",
       "def": "Prélèvement par essuyage d'une surface définie pour mesurer la contamination labile."
      },
      {
       "terme": "Contamination labile",
       "def": "Contamination non fixée, transférable par contact ou mise en suspension."
      },
      {
       "terme": "Contamination fixée",
       "def": "Contamination incrustée dans le matériau, non transférable par contact."
      },
      {
       "terme": "Rendement de mesure",
       "def": "Rapport entre le nombre de coups comptés et le nombre de désintégrations."
      },
      {
       "terme": "Balise aérosols",
       "def": "Appareil mesurant en continu la contamination de l'air."
      },
      {
       "terme": "Cartographie radiologique",
       "def": "Plan d'un local reportant les débits de dose et points particuliers mesurés."
      },
      {
       "terme": "Portique",
       "def": "Contrôleur de contamination corps entier placé aux sorties."
      },
      {
       "terme": "Coups par seconde (c/s)",
       "def": "Nombre d'événements détectés par seconde par un appareil de comptage."
      }
     ]
    },
    {
     "id": "btiin-confinement-tenues",
     "titre": "Confinement, ventilation et tenues de protection",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Distinguer confinement statique et confinement dynamique",
      "Décrire la constitution et la mise en service d'un sas de chantier",
      "Expliquer le rôle de la mise en dépression et des filtres à très haute efficacité",
      "Choisir une tenue et une protection respiratoire selon le risque",
      "Appliquer une séquence de déshabillage qui évite la contamination"
     ],
     "sections": [
      {
       "titre": "Le principe du confinement",
       "contenu": "<p>Le <strong>confinement</strong> consiste à maintenir les substances radioactives à l'intérieur d'un volume défini, pour protéger les personnes, les autres locaux et l'environnement contre la dispersion de la contamination. C'est l'une des <strong>fonctions de sûreté</strong> d'une installation nucléaire, assurée à grande échelle par la conception (gaines du combustible, circuits, enceinte, ventilation des bâtiments) et, à l'échelle du chantier, par les intervenants eux-mêmes.</p>\n<p>On combine deux types de confinement :</p>\n<ul>\n<li>le <strong>confinement statique</strong> : une barrière physique étanche sépare le volume contaminé de l'extérieur (paroi d'un sas, enveloppe vinyle, boîte à gants, emballage d'un déchet) ;</li>\n<li>le <strong>confinement dynamique</strong> : un mouvement d'air organisé, de la zone la moins contaminée vers la zone la plus contaminée, empêche les particules de sortir par les ouvertures inévitables. Il est obtenu en maintenant le volume contaminé en <strong>dépression</strong> par rapport à l'extérieur.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'air doit toujours circuler du propre vers le sale. Si l'on ouvre une porte de sas, c'est l'air extérieur qui doit entrer, jamais l'air du chantier qui doit sortir.</div>"
      },
      {
       "titre": "Le sas de chantier",
       "contenu": "<p>Lorsqu'une intervention risque de produire ou de libérer de la contamination (ouverture d'un circuit, démontage d'un matériel contaminé, découpe), on construit un <strong>sas</strong> autour de la zone de travail. Un sas type comprend :</p>\n<ul>\n<li>une <strong>ossature</strong> (tubes, raccords, panneaux) dimensionnée pour le volume de travail et les manutentions ;</li>\n<li>une <strong>enveloppe</strong> en film vinyle ou en panneaux rigides, assemblée avec des joints adhésifs étanches ;</li>\n<li>un ou plusieurs <strong>compartiments</strong> : zone de travail, puis sas de déshabillage, parfois sas intermédiaire, avec des niveaux de propreté décroissants vers la sortie ;</li>\n<li>des <strong>passages</strong> pour les câbles, flexibles et tuyaux, rendus étanches ;</li>\n<li>un <strong>extracteur</strong> équipé de filtres, qui aspire l'air du sas et le rejette dans le réseau de ventilation de l'installation ou dans le local ;</li>\n<li>un <strong>indicateur de dépression</strong> (manomètre différentiel) lisible de l'extérieur ;</li>\n<li>un <strong>éclairage</strong>, la signalisation, l'affichage des consignes et du point de contrôle de sortie.</li>\n</ul>\n<p>Le sas est construit selon un <strong>plan</strong> fourni dans le dossier de chantier. Avant la première utilisation, il fait l'objet d'une <strong>réception</strong> : contrôle visuel des parois et des joints, vérification de la dépression, essai éventuel avec un fumigène pour visualiser les fuites, contrôle radiologique de l'état initial.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réception d'un sas avant intervention. 1) Comparer le sas au plan : dimensions, compartiments, emplacement des portes et de l'extracteur. 2) Vérifier l'intégrité de l'enveloppe : pas de déchirure, joints continus, passages étanches. 3) Mettre l'extracteur en marche et lire la dépression sur le manomètre ; la comparer à la valeur requise par le dossier. 4) Ouvrir la porte et vérifier que l'air entre (fumigène ou ruban léger). 5) Vérifier la présence des équipements de sortie : contaminamètre, bacs à déchets, tenues de rechange. 6) Consigner le résultat et signer la fiche de réception ; toute non-conformité est corrigée avant l'ouverture du matériel.</div>"
      },
      {
       "titre": "Ventilation, dépression et filtration",
       "contenu": "<p>Dans une installation nucléaire, la ventilation est organisée en <strong>cascade de dépressions</strong> : les locaux les plus susceptibles d'être contaminés sont maintenus à la pression la plus basse, ce qui garantit des écoulements d'air dirigés vers eux. Le sas de chantier s'inscrit dans ce schéma en étant lui-même en dépression par rapport au local.</p>\n<p>L'air extrait traverse des <strong>filtres à très haute efficacité</strong> (filtres THE), capables d'arrêter la quasi-totalité des particules, avant d'être rejeté. Ces filtres se chargent progressivement ; leur colmatage se traduit par une augmentation de la perte de charge et une baisse du débit d'extraction. Un filtre usagé est un <strong>déchet radioactif</strong>, changé selon une procédure qui évite de libérer ce qu'il a retenu.</p>\n<table><thead><tr><th>Constat</th><th>Cause possible</th><th>Action</th></tr></thead><tbody>\n<tr><td>Dépression nulle ou très faible</td><td>Extracteur arrêté, déchirure importante, porte ouverte en permanence</td><td>Arrêter l'activité contaminante, alerter, rétablir avant reprise</td></tr>\n<tr><td>Dépression qui baisse progressivement</td><td>Colmatage des filtres</td><td>Signaler, faire remplacer selon procédure</td></tr>\n<tr><td>Parois du sas qui gonflent vers l'extérieur</td><td>Surpression : air soufflé dans le sas (outil pneumatique, tenue ventilée) supérieur à l'extraction</td><td>Arrêter, revoir l'équilibre des débits</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les outils pneumatiques et les tenues ventilées soufflent de l'air dans le sas. Si l'extracteur n'est pas dimensionné en conséquence, le sas passe en surpression et la contamination sort. C'est une cause classique de dispersion.</div>"
      },
      {
       "titre": "Les tenues de protection",
       "contenu": "<p>La tenue protège contre la <strong>contamination externe</strong> et facilite la décontamination : on retire la tenue contaminée au lieu de décontaminer la peau. Elle ne protège pas contre l'irradiation gamma.</p>\n<table><thead><tr><th>Niveau</th><th>Composition type</th><th>Usage</th></tr></thead><tbody>\n<tr><td>Tenue de base de zone</td><td>Sous-vêtements, combinaison en coton, chaussures de zone, gants de coton</td><td>Circulation et travail en zone sans risque particulier de contamination</td></tr>\n<tr><td>Tenue complémentaire</td><td>Surbottes, une ou deux paires de gants (coton et étanches), surcombinaison non tissée, calotte</td><td>Travail sur matériel contaminé ou dans un sas</td></tr>\n<tr><td>Tenue étanche</td><td>Combinaison étanche aux liquides, gants et bottes étanches, jonctions adhésives</td><td>Projections, décontamination par voie humide</td></tr>\n<tr><td>Tenue étanche ventilée</td><td>Combinaison étanche alimentée en air respirable par un flexible</td><td>Forte contamination atmosphérique ou surfacique ; protection respiratoire intégrée</td></tr>\n</tbody></table>\n<p>La <strong>protection respiratoire</strong> est choisie selon la contamination de l'air attendue : demi-masque ou masque complet filtrant avec filtre adapté aux particules, appareil à adduction d'air, tenue ventilée. Le port d'un appareil respiratoire exige une formation, une aptitude médicale et un essai d'ajustement ; il augmente la fatigue et la contrainte thermique, ce qui limite la durée de travail.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en tenue étanche ou ventilée, le risque de <strong>coup de chaleur</strong> est réel, surtout dans les locaux chauds des bâtiments réacteurs. Les durées de travail sont limitées, l'hydratation est organisée hors zone, et un surveillant extérieur suit les intervenants. Le risque thermique est intégré à l'analyse de risques au même titre que le risque radiologique.</div>"
      },
      {
       "titre": "Habillage et déshabillage",
       "contenu": "<p>L'<strong>habillage</strong> se fait en zone propre, dans l'ordre inverse du déshabillage, en vérifiant l'intégrité de chaque élément (gants non percés, combinaison non déchirée) et en réalisant les jonctions adhésives (poignets, chevilles) en laissant une languette repliée pour faciliter le retrait.</p>\n<p>Le <strong>déshabillage</strong> est le moment où le risque de se contaminer est le plus élevé : on manipule des vêtements dont l'extérieur est contaminé. La règle générale : <strong>retirer en retournant</strong> (l'extérieur sale vers l'intérieur), <strong>du haut vers le bas</strong>, <strong>sans toucher la peau ni la tenue intérieure avec un gant sale</strong>, en changeant de compartiment au bon moment.</p>\n<ol>\n<li>Dans le compartiment de travail ou à sa sortie : contrôler, retirer la première paire de gants et les surbottes extérieures en enjambant la limite.</li>\n<li>Dans le sas de déshabillage : retirer les adhésifs, la surcombinaison en la roulant vers l'extérieur, la calotte.</li>\n<li>Retirer la protection respiratoire en dernier parmi les équipements contaminés, en la tenant par les sangles.</li>\n<li>Retirer la dernière paire de gants en la retournant.</li>\n<li>Se contrôler mains et pieds, puis sortir vers la zone propre.</li>\n</ol>\n<p>Les séquences exactes sont affichées à l'entrée de chaque sas ; elles priment sur cet ordre général.</p>"
      },
      {
       "titre": "Les autres moyens de confinement",
       "contenu": "<p>Selon l'installation et l'opération, d'autres dispositifs remplacent ou complètent le sas :</p>\n<ul>\n<li>la <strong>boîte à gants</strong> : enceinte étanche en dépression, équipée de gants fixés sur des ronds de gant, permettant de manipuler des matières contaminantes, notamment alpha, sans contact direct ; le changement d'un gant ou l'introduction d'un objet suit une procédure stricte ;</li>\n<li>la <strong>manche vinyle</strong> ou le sac soudé, permettant de faire entrer ou sortir un objet d'une boîte à gants ou d'un sas sans rupture de confinement ;</li>\n<li>le <strong>confinement local</strong> : capot ou housse autour d'une bride, aspiration à la source avec filtration sur un outil de découpe ou de meulage ;</li>\n<li>les <strong>bouchons et obturateurs</strong> posés sur les tuyauteries ouvertes pour éviter les entrées de corps étrangers et les sorties de contamination.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un circuit ouvert ne reste jamais sans obturation ni surveillance, même pendant une pause. L'oubli d'un obturateur peut provoquer une dispersion de contamination et l'introduction d'un corps étranger dans le circuit, deux écarts aux conséquences importantes.</div>"
      }
     ],
     "points_cles": [
      "Le confinement empêche la dispersion de la contamination ; il est statique (barrière) et dynamique (dépression).",
      "L'air circule toujours du propre vers le sale.",
      "Un sas est construit selon un plan et réceptionné avant usage : intégrité, dépression, sens de l'air.",
      "Les filtres THE retiennent les particules ; usagés, ce sont des déchets radioactifs.",
      "Les outils pneumatiques et tenues ventilées peuvent mettre un sas en surpression.",
      "La tenue protège contre la contamination, pas contre l'irradiation gamma.",
      "On se déshabille en retournant les vêtements, du haut vers le bas, sans contact avec la peau.",
      "Un circuit ouvert est toujours obturé et surveillé."
     ],
     "lexique": [
      {
       "terme": "Confinement statique",
       "def": "Barrière physique étanche entre le volume contaminé et l'extérieur."
      },
      {
       "terme": "Confinement dynamique",
       "def": "Écoulement d'air dirigé vers la zone la plus contaminée grâce à une dépression."
      },
      {
       "terme": "Sas",
       "def": "Enceinte provisoire construite autour d'une zone de travail pour confiner la contamination."
      },
      {
       "terme": "Dépression",
       "def": "Pression inférieure à celle du milieu voisin, qui fait entrer l'air dans le volume confiné."
      },
      {
       "terme": "Filtre THE",
       "def": "Filtre à très haute efficacité retenant la quasi-totalité des particules."
      },
      {
       "terme": "Boîte à gants",
       "def": "Enceinte étanche en dépression permettant de manipuler des matières contaminantes."
      },
      {
       "terme": "Tenue ventilée",
       "def": "Combinaison étanche alimentée en air respirable par un flexible."
      },
      {
       "terme": "Protection respiratoire",
       "def": "Équipement protégeant contre l'inhalation de particules ou de gaz."
      },
      {
       "terme": "Obturateur",
       "def": "Bouchon posé sur une ouverture de circuit pour la fermer provisoirement."
      },
      {
       "terme": "Contrainte thermique",
       "def": "Charge due à la chaleur, aggravée par le port de tenues étanches."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Sûreté, qualité et prévention des risques",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btiin-surete-nucleaire",
     "titre": "La sûreté nucléaire et son organisation",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Définir la sûreté nucléaire et ses trois fonctions fondamentales",
      "Expliquer les barrières de confinement et la défense en profondeur",
      "Situer le cadre réglementaire et le rôle de l'autorité de sûreté",
      "Classer un événement sur l'échelle INES",
      "Décrire l'organisation de crise d'un site nucléaire"
     ],
     "sections": [
      {
       "titre": "Sûreté, sécurité, radioprotection : trois notions voisines",
       "contenu": "<p>Dans la filière, trois mots sont utilisés avec des sens précis :</p>\n<table><thead><tr><th>Notion</th><th>Objet</th><th>Exemple de mesure</th></tr></thead><tbody>\n<tr><td><strong>Sûreté nucléaire</strong></td><td>Prévenir les accidents liés au fonctionnement de l'installation et en limiter les effets</td><td>Respecter une condition de fonctionnement, ne pas créer de défaut sur un matériel important</td></tr>\n<tr><td><strong>Radioprotection</strong></td><td>Protéger les personnes contre les rayonnements</td><td>Zonage, dosimétrie, optimisation</td></tr>\n<tr><td><strong>Sécurité</strong></td><td>Selon le contexte : sécurité du travail (risques conventionnels) ou sécurité nucléaire au sens de la protection contre la malveillance</td><td>Port des EPI ; contrôles d'accès au site</td></tr>\n</tbody></table>\n<p>Le Code de l'environnement regroupe ces notions sous le terme de <strong>sécurité nucléaire</strong>, qui comprend la sûreté nucléaire, la radioprotection, la prévention et la lutte contre les actes de malveillance, ainsi que les actions de sécurité civile en cas d'accident.</p>\n<p>Le technicien agit directement sur la sûreté par la qualité de son travail : un joint mal monté, une vanne laissée dans une mauvaise position, un outil oublié dans un circuit, un matériel endommagé lors d'une manutention peuvent dégrader un matériel qui contribue à la sûreté.</p>"
      },
      {
       "titre": "Les trois fonctions de sûreté",
       "contenu": "<p>Quelle que soit l'installation, la sûreté repose sur trois <strong>fonctions fondamentales</strong> qu'il faut garantir en permanence, y compris pendant les arrêts et les travaux :</p>\n<ol>\n<li><strong>la maîtrise des réactions nucléaires</strong> (ou de la réactivité) : la réaction en chaîne doit rester contrôlée dans un réacteur, et ne jamais se déclencher ailleurs (risque de criticité) ;</li>\n<li><strong>l'évacuation de la chaleur</strong> : le combustible continue de produire de la chaleur après l'arrêt du réacteur, du fait de la radioactivité des produits de fission (puissance résiduelle) ; il faut donc toujours le refroidir, en réacteur comme en piscine ;</li>\n<li><strong>le confinement des substances radioactives</strong> : les matières radioactives doivent rester enfermées et ne pas se disperser dans l'installation ou dans l'environnement.</li>\n</ol>\n<p>À ces fonctions s'ajoute la protection des personnes contre les rayonnements. Pendant un arrêt de réacteur, de nombreux matériels sont en maintenance : l'exploitant organise les travaux pour que les matériels nécessaires à ces fonctions restent disponibles, ce qui explique certaines contraintes de planning imposées aux prestataires.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> maîtriser la réactivité, refroidir, confiner. Toute intervention doit être compatible avec ces trois fonctions ; en cas de doute sur l'effet d'une action, on ne la réalise pas sans l'accord de l'exploitant.</div>"
      },
      {
       "titre": "Les barrières et la défense en profondeur",
       "contenu": "<p>Dans un réacteur à eau sous pression, le confinement est assuré par trois <strong>barrières</strong> successives et indépendantes entre le combustible et l'environnement :</p>\n<ol>\n<li>la <strong>gaine</strong> métallique des crayons de combustible ;</li>\n<li>l'enveloppe du <strong>circuit primaire</strong> (cuve, tuyauteries, générateurs de vapeur, pompes) ;</li>\n<li>l'<strong>enceinte de confinement</strong> en béton du bâtiment réacteur.</li>\n</ol>\n<p>La <strong>défense en profondeur</strong> est le principe qui organise toute la sûreté : on ne compte jamais sur une seule mesure. On empile des lignes de défense successives, chacune devant être efficace même si la précédente a échoué.</p>\n<table><thead><tr><th>Niveau</th><th>Objectif</th><th>Exemples</th></tr></thead><tbody>\n<tr><td>1</td><td>Prévenir les anomalies</td><td>Conception robuste, qualité de fabrication et de maintenance, formation</td></tr>\n<tr><td>2</td><td>Détecter et corriger les anomalies</td><td>Surveillance, contrôles, alarmes, essais périodiques</td></tr>\n<tr><td>3</td><td>Maîtriser les accidents</td><td>Systèmes de sauvegarde, procédures accidentelles</td></tr>\n<tr><td>4</td><td>Limiter les conséquences d'un accident grave</td><td>Dispositifs ultimes, protection de l'enceinte</td></tr>\n<tr><td>5</td><td>Protéger la population</td><td>Plans d'urgence, mise à l'abri, distribution d'iode</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le travail du technicien de maintenance agit directement sur le premier niveau (qualité des interventions) et sur le deuxième (essais, contrôles, signalement des anomalies). Un défaut de montage non détecté supprime une ligne de défense, même si l'installation continue de fonctionner normalement.</div>"
      },
      {
       "titre": "Le cadre réglementaire et le contrôle",
       "contenu": "<p>Les INB sont régies par le <strong>Code de l'environnement</strong>, qui reprend la loi de 2006 relative à la transparence et à la sécurité en matière nucléaire. Les règles techniques générales applicables à toutes les INB sont fixées par un <strong>arrêté du 7 février 2012</strong>, dit « arrêté INB », complété par des décisions de l'autorité de sûreté. Les règles de radioprotection des travailleurs relèvent du Code du travail.</p>\n<p>Pour chaque installation, l'exploitant établit notamment :</p>\n<ul>\n<li>un <strong>rapport de sûreté</strong>, qui démontre que l'installation est sûre ;</li>\n<li>des <strong>règles générales d'exploitation</strong>, dont les <strong>spécifications techniques d'exploitation</strong> qui définissent les conditions de fonctionnement autorisées et les matériels qui doivent être disponibles ;</li>\n<li>un <strong>plan d'urgence interne</strong> ;</li>\n<li>un <strong>système de management intégré</strong> (qualité, sûreté, sécurité, environnement).</li>\n</ul>\n<p>L'<strong>ASNR</strong> contrôle le respect de ces règles par des inspections, programmées ou inopinées, y compris sur les chantiers des prestataires. Un inspecteur peut interroger un intervenant sur ses consignes, ses documents, sa formation. Elle peut prendre des mesures contraignantes et des sanctions.</p>"
      },
      {
       "titre": "Les événements et l'échelle INES",
       "contenu": "<p>L'exploitant doit déclarer à l'autorité de sûreté les <strong>événements significatifs</strong> pour la sûreté, la radioprotection ou l'environnement, selon des critères définis. Un écart constaté sur un chantier par un prestataire peut, après analyse par l'exploitant, devenir un événement significatif : c'est pourquoi tout écart doit être remonté.</p>\n<p>Pour informer le public, les événements sont classés sur l'<strong>échelle INES</strong> (échelle internationale des événements nucléaires et radiologiques), qui comporte 8 niveaux :</p>\n<table><thead><tr><th>Niveau</th><th>Désignation</th><th>Exemples</th></tr></thead><tbody>\n<tr><td>0</td><td>Écart</td><td>Aucune importance du point de vue de la sûreté ; la grande majorité des déclarations</td></tr>\n<tr><td>1</td><td>Anomalie</td><td>Sortie du domaine de fonctionnement autorisé sans conséquence</td></tr>\n<tr><td>2</td><td>Incident</td><td>Défaillance importante des dispositions de sûreté ou exposition d'un travailleur au-delà d'une limite annuelle</td></tr>\n<tr><td>3</td><td>Incident grave</td><td>Très faible rejet, exposition grave d'un travailleur</td></tr>\n<tr><td>4</td><td>Accident sans risque important hors du site</td><td>Saint-Laurent-des-Eaux, 1980 (fusion partielle de combustible)</td></tr>\n<tr><td>5</td><td>Accident avec risque hors du site</td><td>Three Mile Island, États-Unis, 1979</td></tr>\n<tr><td>6</td><td>Accident grave</td><td>Kychtym, URSS, 1957</td></tr>\n<tr><td>7</td><td>Accident majeur</td><td>Tchernobyl, 1986 ; Fukushima, 2011</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> présenter l'analyse d'un accident ou d'un incident (attendu à l'oral du diplôme). 1) Contexte : installation, date, activité en cours. 2) Faits : chronologie courte et factuelle. 3) Conséquences : sur les personnes, l'installation, l'environnement ; niveau INES. 4) Causes : techniques, organisationnelles, humaines, en distinguant cause immédiate et causes profondes. 5) Mesures prises et enseignements : ce qui a changé dans les règles ou les pratiques. 6) Lien avec son propre métier : quelle pratique de l'intervenant aurait pu éviter ou limiter l'événement. Exemple de lien : une erreur de repérage de matériel conduit à intervenir sur la mauvaise vanne ; enseignement : identification systématique du repère avant toute action.</div>"
      },
      {
       "titre": "L'organisation en cas d'urgence",
       "contenu": "<p>Chaque INB dispose d'un <strong>plan d'urgence interne</strong> (PUI), mis en œuvre par l'exploitant pour faire face à un événement grave sur le site : accident radiologique, incendie important, événement climatique, accident industriel. Il prévoit une organisation de crise, des moyens et des consignes. Hors du site, le préfet peut déclencher un <strong>plan particulier d'intervention</strong> (PPI) qui organise la protection de la population : alerte, mise à l'abri, prise de comprimés d'iode stable, évacuation.</p>\n<p>Pour l'intervenant, les consignes générales sont données lors de l'accueil sur le site et affichées :</p>\n<ul>\n<li>connaître les <strong>signaux d'alerte</strong> du site et leur signification (évacuation, mise à l'abri, alerte incendie) ;</li>\n<li>savoir où se trouvent les <strong>points de regroupement</strong> et les issues ;</li>\n<li>en cas d'alerte, <strong>mettre son chantier en sécurité</strong> si cela peut se faire sans danger (arrêter l'outil, refermer, obturer), puis rejoindre le point de regroupement par le chemin prévu ;</li>\n<li>se faire <strong>recenser</strong> par son responsable ; ne jamais quitter le site sans autorisation ;</li>\n<li>suivre les instructions des équipes de l'exploitant.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en cas de blessé en zone contrôlée, l'urgence médicale prime sur la radioprotection : on porte secours et on donne l'alerte selon la consigne du site ; la contamination éventuelle est gérée ensuite par les équipes compétentes. On ne retarde jamais un secours vital pour un contrôle de contamination.</div>"
      },
      {
       "titre": "Le rôle de l'intervenant dans la sûreté au quotidien",
       "contenu": "<p>La sûreté n'est pas seulement l'affaire des concepteurs et des opérateurs en salle de commande. Une part importante des événements déclarés chaque année trouve son origine dans des activités de maintenance ou de logistique : matériel mal remonté, erreur de repérage, oubli d'un obturateur, échafaudage posé contre un matériel de sûreté, câble provisoire coincé dans une porte coupe-feu, manutention au-dessus d'un matériel sensible.</p>\n<p>L'intervenant contribue à la sûreté par des réflexes simples :</p>\n<ul>\n<li>respecter strictement le <strong>périmètre</strong> de l'autorisation de travail : ne toucher qu'aux matériels autorisés ;</li>\n<li>ne jamais manœuvrer un organe (vanne, interrupteur, porte) qui n'est pas prévu dans son intervention, même pour « rendre service » ;</li>\n<li>ne pas s'appuyer, ne pas poser de charge, ne pas fixer d'échafaudage ou de sas sur un matériel non prévu pour cela (capteur, tuyauterie de petit diamètre, chemin de câbles, armoire) ;</li>\n<li>respecter les <strong>portes coupe-feu</strong> et les dispositifs de sectorisation : une porte calée ouverte pour faire passer des câbles supprime une protection contre l'incendie ;</li>\n<li>signaler toute anomalie observée, même hors de son chantier : fuite, alarme locale, étiquette manquante, matériel endommagé.</li>\n</ul>\n<p>Ces règles paraissent évidentes, mais elles sont mises à l'épreuve dans les conditions réelles : fatigue en fin de poste, pression du planning, coactivité, habitude. C'est précisément dans ces conditions que la culture de sûreté fait la différence.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en installation nucléaire, rendre service en manœuvrant un matériel qui n'est pas le sien est une erreur. La seule bonne action est de prévenir la personne responsable.</div>"
      }
     ],
     "points_cles": [
      "Sûreté : prévenir les accidents et limiter leurs effets ; radioprotection : protéger les personnes.",
      "Trois fonctions de sûreté : maîtriser la réactivité, évacuer la chaleur, confiner.",
      "Trois barrières dans un REP : gaine, circuit primaire, enceinte.",
      "La défense en profondeur empile cinq niveaux de protection successifs.",
      "L'arrêté INB du 7 février 2012 fixe les règles générales applicables aux INB ; l'ASNR contrôle.",
      "Tout écart est remonté : l'exploitant décide s'il s'agit d'un événement significatif à déclarer.",
      "L'échelle INES va de 0 (écart) à 7 (accident majeur).",
      "PUI pour l'organisation interne de crise, PPI préfectoral pour la population ; l'urgence médicale prime."
     ],
     "lexique": [
      {
       "terme": "Fonction de sûreté",
       "def": "Fonction à garantir en permanence : maîtrise de la réactivité, refroidissement, confinement."
      },
      {
       "terme": "Barrière",
       "def": "Enveloppe physique qui sépare les matières radioactives de l'environnement."
      },
      {
       "terme": "Défense en profondeur",
       "def": "Principe consistant à superposer plusieurs lignes de défense indépendantes."
      },
      {
       "terme": "Puissance résiduelle",
       "def": "Chaleur produite par le combustible après l'arrêt du réacteur."
      },
      {
       "terme": "Spécifications techniques d'exploitation",
       "def": "Règles fixant les conditions de fonctionnement autorisées d'une installation."
      },
      {
       "terme": "Événement significatif",
       "def": "Événement que l'exploitant doit déclarer à l'autorité de sûreté selon des critères définis."
      },
      {
       "terme": "Échelle INES",
       "def": "Échelle internationale de 0 à 7 classant la gravité des événements nucléaires."
      },
      {
       "terme": "PUI",
       "def": "Plan d'urgence interne de l'exploitant pour gérer une situation grave sur le site."
      },
      {
       "terme": "PPI",
       "def": "Plan particulier d'intervention du préfet pour protéger la population autour du site."
      },
      {
       "terme": "Arrêté INB",
       "def": "Arrêté du 7 février 2012 fixant les règles générales relatives aux installations nucléaires de base."
      }
     ]
    },
    {
     "id": "btiin-qualite-fiabilisation",
     "titre": "Qualité, fiabilisation des interventions et traitement des écarts",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Expliquer les exigences qualité propres aux installations nucléaires",
      "Utiliser un dossier de suivi d'intervention avec ses points d'arrêt",
      "Appliquer les pratiques de fiabilisation : briefing, autocontrôle, contrôle croisé, minute d'arrêt, communication sécurisée",
      "Prévenir l'introduction de corps étrangers dans les matériels",
      "Rédiger le signalement d'un écart et participer au retour d'expérience"
     ],
     "sections": [
      {
       "titre": "La qualité dans le nucléaire",
       "contenu": "<p>Dans toute industrie, la <strong>qualité</strong> consiste à satisfaire des exigences définies. Dans une installation nucléaire, ces exigences ont une dimension supplémentaire : certaines activités sont directement liées à la sûreté, à la radioprotection ou à la protection de l'environnement. L'arrêté INB les appelle des <strong>activités importantes pour la protection</strong> (AIP). Pour chacune, l'exploitant définit des <strong>exigences définies</strong> (ce qui doit être obtenu) et organise un <strong>contrôle technique</strong> par une personne différente de celle qui a réalisé l'activité.</p>\n<p>Quand l'exploitant confie une AIP à un prestataire, il reste responsable : il exerce une <strong>surveillance</strong> sur le prestataire, et le prestataire doit lui-même disposer d'une organisation qualité (souvent certifiée selon la norme ISO 9001, complétée par des exigences propres au nucléaire).</p>\n<p>Pour l'intervenant, la qualité se traduit par quatre exigences très concrètes :</p>\n<ul>\n<li><strong>faire ce qui est écrit</strong>, dans l'ordre écrit, avec les moyens prévus ;</li>\n<li><strong>écrire ce que l'on fait</strong> : renseigner les documents au fur et à mesure, avec les valeurs mesurées et sa signature ;</li>\n<li><strong>respecter les points d'arrêt</strong> ;</li>\n<li><strong>signaler tout ce qui sort du prévu</strong>.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> ce qui n'est pas tracé n'est pas fait. Une opération réalisée mais non enregistrée devra être justifiée, voire refaite, et constitue un écart.</div>"
      },
      {
       "titre": "Le dossier de suivi d'intervention",
       "contenu": "<p>Chaque intervention est accompagnée d'un <strong>dossier d'intervention</strong> qui rassemble les documents nécessaires : ordre de travail, analyse de risques, documents de radioprotection, mode opératoire ou gamme, plans, et un <strong>document de suivi</strong> sur lequel l'intervenant enregistre le déroulement.</p>\n<p>Le document de suivi découpe l'intervention en <strong>étapes</strong> numérotées. Pour chacune, il prévoit une case de signature (exécution), parfois une valeur à relever (couple de serrage, cote, résultat de mesure) et, pour les étapes sensibles, un <strong>point d'arrêt</strong> ou un <strong>point de notification</strong> :</p>\n<table><thead><tr><th>Type de point</th><th>Règle</th></tr></thead><tbody>\n<tr><td>Point d'arrêt</td><td>L'intervention s'arrête ; elle ne peut reprendre qu'après le contrôle et la signature de la personne désignée (contrôleur, chargé de surveillance de l'exploitant)</td></tr>\n<tr><td>Point de notification (ou de convocation)</td><td>La personne désignée est prévenue à l'avance ; si elle ne se présente pas dans le délai prévu, l'intervention peut se poursuivre</td></tr>\n</tbody></table>\n<p>Les points d'arrêt sont placés avant les étapes qui ne permettront plus de vérifier ce qui précède : fermeture d'un matériel, remontage d'un couvercle, remise en eau d'un circuit, requalification.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> franchir un point d'arrêt sans la levée signée est un écart grave, même si le travail est bien fait : la preuve du contrôle n'existe plus et l'exploitant peut exiger de tout démonter pour vérifier.</div>"
      },
      {
       "titre": "Les pratiques de fiabilisation",
       "contenu": "<p>Les erreurs humaines sont inévitables ; les <strong>pratiques de fiabilisation des interventions</strong> sont des gestes simples qui permettent de les éviter ou de les rattraper avant qu'elles n'aient des conséquences. Elles sont enseignées dans les formations communes de la filière.</p>\n<table><thead><tr><th>Pratique</th><th>En quoi elle consiste</th><th>Erreur évitée</th></tr></thead><tbody>\n<tr><td><strong>Pré-job briefing</strong></td><td>Réunion courte avant l'intervention : objectif, étapes clés, risques, parades, rôles, conditions d'arrêt</td><td>Méconnaissance des risques ou du rôle de chacun</td></tr>\n<tr><td><strong>Minute d'arrêt</strong></td><td>Courte pause sur le lieu de travail avant de commencer, pour vérifier que la situation réelle correspond à la situation prévue</td><td>Intervenir sur une situation différente de celle préparée</td></tr>\n<tr><td><strong>Autocontrôle</strong></td><td>Vérifier soi-même son action : repérer, réfléchir, agir, vérifier</td><td>Erreur d'inattention</td></tr>\n<tr><td><strong>Contrôle croisé</strong></td><td>Un second intervenant vérifie une action sensible avant ou après sa réalisation</td><td>Erreur non détectée par son auteur</td></tr>\n<tr><td><strong>Communication sécurisée</strong></td><td>L'émetteur donne le message, le récepteur le reformule, l'émetteur confirme</td><td>Message mal compris (repère, valeur, ordre)</td></tr>\n<tr><td><strong>Débriefing</strong></td><td>Retour en fin d'intervention sur ce qui s'est bien ou mal passé</td><td>Reproduction des difficultés</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mener un pré-job briefing en cinq minutes. 1) Objectif : « nous remplaçons le joint de la vanne repérée sur le dossier, dans le local indiqué ». 2) Étapes clés et points d'arrêt : consignation vérifiée, ouverture, remplacement, serrage au couple, point d'arrêt avant remise en service. 3) Risques et parades : débit de dose au contact de la vanne (protection posée, point d'attente identifié), contamination (sas, tenue), pression résiduelle (vérification de la vidange), manutention du chapeau (palan). 4) Rôles : qui agit, qui contrôle, qui surveille la dosimétrie. 5) Conditions d'arrêt : alarme de dosimètre, écart de repère, doute sur la consignation. Terminer en demandant à chacun s'il a une question.</div>"
      },
      {
       "titre": "L'autocontrôle et le repérage",
       "contenu": "<p>Beaucoup d'événements de la filière ont pour origine une <strong>erreur de repérage</strong> : intervention sur la mauvaise tranche, le mauvais train, le mauvais matériel d'une paire identique. Les sites comportent souvent plusieurs installations jumelles, avec des matériels redondants rigoureusement identiques.</p>\n<p>L'autocontrôle s'applique avec une démarche simple, parfois résumée par une suite de quatre mots :</p>\n<ol>\n<li><strong>Repérer</strong> : lire en entier l'étiquette du matériel (site, tranche, système, numéro, type) et la comparer au document ;</li>\n<li><strong>Réfléchir</strong> : prévoir le résultat attendu de l'action ;</li>\n<li><strong>Agir</strong> : réaliser l'action prévue, une seule ;</li>\n<li><strong>Vérifier</strong> : constater que le résultat obtenu est celui attendu.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un site à plusieurs tranches, les locaux d'une tranche peuvent être identifiés par une couleur ou un marquage distinct et chaque étiquette de matériel porte le numéro de tranche. L'intervenant pointe du doigt l'étiquette en la lisant à voix haute, puis le repère du document : ce geste simple, qui peut sembler excessif, réduit fortement les erreurs de matériel.</div>"
      },
      {
       "titre": "La maîtrise des corps étrangers",
       "contenu": "<p>Un <strong>corps étranger</strong> est tout objet ou débris qui pénètre dans un circuit ou un matériel alors qu'il ne devrait pas s'y trouver : écrou, outil, chiffon, morceau de joint, ruban adhésif, copeau, lunettes, stylo. Dans un circuit de réacteur, il peut bloquer une vanne, endommager une pompe, percer un tube de générateur de vapeur ou détériorer le combustible. Les conséquences peuvent être lourdes pour la sûreté et très coûteuses.</p>\n<p>Les règles de maîtrise des corps étrangers s'appliquent dès qu'un matériel est ouvert :</p>\n<ul>\n<li>délimitation d'une <strong>zone de propreté</strong> autour de l'ouverture, avec accès contrôlé ;</li>\n<li><strong>inventaire</strong> des outils et pièces entrant et sortant de la zone ;</li>\n<li>outils <strong>attachés</strong> (dragonnes) lorsqu'ils sont utilisés au-dessus d'une ouverture ;</li>\n<li><strong>obturation</strong> des ouvertures dès qu'on ne travaille pas dedans ;</li>\n<li>poches vidées, pas d'objet personnel au-dessus de l'ouverture ;</li>\n<li><strong>inspection</strong> de propreté avant fermeture, souvent associée à un point d'arrêt.</li>\n</ul>\n<p>Si un objet tombe dans un circuit, on le <strong>déclare immédiatement</strong>, même si l'on pense pouvoir le récupérer : sa recherche doit être organisée et tracée.</p>"
      },
      {
       "titre": "Signaler et traiter un écart",
       "contenu": "<p>Un <strong>écart</strong> est toute différence entre ce qui est prévu ou exigé et ce qui est constaté : document incomplet, matériel non conforme, valeur hors tolérance, consigne non respectée, situation radiologique différente de la cartographie. On parle de <strong>non-conformité</strong> lorsque le produit ou le résultat ne satisfait pas une exigence.</p>\n<p>Le traitement suit une logique constante :</p>\n<ol>\n<li><strong>arrêter et mettre en sécurité</strong> si l'écart peut avoir une conséquence ;</li>\n<li><strong>informer</strong> immédiatement le chargé de travaux, qui informe l'exploitant ;</li>\n<li><strong>décrire</strong> l'écart par écrit sur la fiche prévue : quoi, où, quand, comment il a été détecté, quelles actions immédiates ;</li>\n<li><strong>analyser</strong> les causes (avec l'encadrement) ;</li>\n<li>définir et réaliser les <strong>actions correctives</strong> (traiter le problème) et <strong>préventives</strong> (éviter qu'il se reproduise) ;</li>\n<li><strong>clôturer</strong> après vérification de l'efficacité.</li>\n</ol>\n<p>Les écarts, les presque-accidents et les bonnes pratiques alimentent le <strong>retour d'expérience</strong> (REX), partagé entre équipes et entre sites.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la filière valorise la déclaration des erreurs. Un intervenant qui déclare spontanément une erreur permet d'en limiter les conséquences ; dissimuler une erreur est en revanche une faute grave, contraire à la culture de sûreté.</div>"
      },
      {
       "titre": "Les documents qualité du prestataire",
       "contenu": "<p>Le système qualité du prestataire s'appuie sur plusieurs documents que le technicien rencontre au quotidien :</p>\n<table><thead><tr><th>Document</th><th>Contenu</th><th>Utilisation par l'intervenant</th></tr></thead><tbody>\n<tr><td>Plan qualité ou programme de surveillance</td><td>Organisation qualité propre à un contrat ou à un chantier : responsabilités, points de contrôle, documents applicables</td><td>Savoir qui contrôle quoi</td></tr>\n<tr><td>Mode opératoire ou gamme</td><td>Suite ordonnée des opérations, avec les valeurs à respecter</td><td>Suivre pas à pas</td></tr>\n<tr><td>Document de suivi d'intervention</td><td>Étapes à signer, valeurs à relever, points d'arrêt</td><td>Renseigner au fur et à mesure</td></tr>\n<tr><td>Fiche d'écart ou de non-conformité</td><td>Description d'un écart et de son traitement</td><td>Signaler</td></tr>\n<tr><td>Liste des instruments utilisés</td><td>Identification et validité des outils de mesure et de serrage</td><td>Tracer les moyens</td></tr>\n<tr><td>Fiches de qualification du personnel</td><td>Formations, habilitations, qualifications</td><td>Justifier sa compétence</td></tr>\n</tbody></table>\n<p>Lorsqu'un document est illisible, incomplet, ou ne correspond pas à la réalité du terrain (repère différent, matériel modifié, valeur manifestement erronée), on ne le corrige pas soi-même à la main : on s'arrête et on demande une mise à jour validée. Une modification manuscrite non validée d'un document opérationnel est un écart.</p>\n<p>Les documents du dossier sont rendus complets, propres et signés en fin d'intervention ; ils constituent la preuve de la qualité du travail et sont archivés, parfois pendant toute la durée de vie de l'installation.</p>"
      }
     ],
     "points_cles": [
      "Les activités importantes pour la protection font l'objet d'exigences définies et d'un contrôle technique.",
      "L'exploitant surveille ses prestataires et reste responsable.",
      "Ce qui n'est pas tracé n'est pas fait : on renseigne le document de suivi au fur et à mesure.",
      "Un point d'arrêt ne se franchit qu'après levée signée par la personne désignée.",
      "Pré-job briefing, minute d'arrêt, autocontrôle, contrôle croisé, communication sécurisée, débriefing.",
      "L'autocontrôle commence par la lecture complète du repère du matériel.",
      "Dès qu'un matériel est ouvert, on applique les règles de maîtrise des corps étrangers.",
      "Écart : arrêter, informer, décrire, analyser, corriger, prévenir, clôturer."
     ],
     "lexique": [
      {
       "terme": "Activité importante pour la protection (AIP)",
       "def": "Activité dont la qualité conditionne la sûreté, la radioprotection ou la protection de l'environnement."
      },
      {
       "terme": "Contrôle technique",
       "def": "Vérification d'une AIP par une personne différente de celle qui l'a réalisée."
      },
      {
       "terme": "Point d'arrêt",
       "def": "Étape où l'intervention s'arrête jusqu'à la levée signée par la personne désignée."
      },
      {
       "terme": "Point de notification",
       "def": "Étape dont une personne est prévenue, l'intervention pouvant continuer sans elle après le délai prévu."
      },
      {
       "terme": "Pré-job briefing",
       "def": "Réunion courte précédant l'intervention pour partager objectifs, risques et rôles."
      },
      {
       "terme": "Autocontrôle",
       "def": "Vérification par l'intervenant de sa propre action avant et après l'avoir réalisée."
      },
      {
       "terme": "Contrôle croisé",
       "def": "Vérification d'une action sensible par un second intervenant."
      },
      {
       "terme": "Communication sécurisée",
       "def": "Échange où le récepteur reformule le message et l'émetteur le confirme."
      },
      {
       "terme": "Corps étranger",
       "def": "Objet ou débris présent dans un matériel ou un circuit où il ne doit pas se trouver."
      },
      {
       "terme": "Retour d'expérience (REX)",
       "def": "Exploitation des écarts et bonnes pratiques pour améliorer les interventions futures."
      }
     ]
    },
    {
     "id": "btiin-risques-conventionnels",
     "titre": "Risques conventionnels et analyse de risques du chantier",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Appliquer la démarche danger, situation dangereuse, événement, dommage à un chantier nucléaire",
      "Identifier les risques conventionnels dominants des interventions",
      "Estimer un niveau de risque et hiérarchiser les mesures de prévention",
      "Expliquer le rôle du plan de prévention et des permis de travail",
      "Intégrer les interactions entre risques radiologiques et conventionnels"
     ],
     "sections": [
      {
       "titre": "Le vocabulaire de l'analyse de risques",
       "contenu": "<p>L'analyse de risques suit un vocabulaire normalisé, utilisé aussi bien pour les risques radiologiques que pour les risques conventionnels :</p>\n<ul>\n<li>un <strong>phénomène dangereux</strong> (ou danger) est une source potentielle de dommage : une charge suspendue, une tension électrique, un débit de dose, un produit corrosif, une hauteur ;</li>\n<li>une <strong>situation dangereuse</strong> est une situation où une personne est exposée à ce phénomène : un intervenant travaille sous une charge levée ;</li>\n<li>un <strong>événement dangereux</strong> est ce qui déclenche le dommage : l'élingue casse ;</li>\n<li>le <strong>dommage</strong> est la blessure ou l'atteinte à la santé : écrasement.</li>\n</ul>\n<p>Le <strong>risque</strong> combine la <strong>gravité</strong> du dommage possible et la <strong>probabilité</strong> qu'il se produise (qui dépend de la fréquence et de la durée d'exposition). L'analyse de risques consiste à identifier les situations dangereuses de chaque étape de l'intervention, à estimer les risques et à définir des mesures pour les réduire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pas de dommage sans exposition. Supprimer la situation dangereuse (personne sous la charge, personne dans le champ de rayonnement) est toujours plus efficace que de protéger la personne exposée.</div>"
      },
      {
       "titre": "Les risques conventionnels dominants",
       "contenu": "<table><thead><tr><th>Risque</th><th>Situations typiques en installation nucléaire</th><th>Mesures principales</th></tr></thead><tbody>\n<tr><td>Chute de hauteur</td><td>Échafaudages, accès aux vannes en hauteur, trémies ouvertes, travail au-dessus d'une piscine</td><td>Échafaudage réceptionné, garde-corps, protection des trémies, harnais en dernier recours</td></tr>\n<tr><td>Chute de plain-pied</td><td>Sols encombrés de flexibles et câbles, sols humides, surbottes glissantes</td><td>Rangement, cheminement dégagé, éclairage</td></tr>\n<tr><td>Levage et manutention</td><td>Ouverture de matériels lourds, protections biologiques, conteneurs de déchets</td><td>Appareils et accessoires vérifiés, élingueur et conducteur formés, balisage sous charge</td></tr>\n<tr><td>Manutention manuelle</td><td>Matelas de plomb, briques, outillage</td><td>Aides mécaniques, limitation des charges, gestes et postures</td></tr>\n<tr><td>Électrique</td><td>Matériels électriques, éclairages provisoires, consignation</td><td>Habilitation, consignation, matériel adapté</td></tr>\n<tr><td>Fluides sous pression et température</td><td>Ouverture d'un circuit mal vidangé, vapeur</td><td>Consignation mécanique, vérification de l'absence de pression, ouverture progressive</td></tr>\n<tr><td>Incendie</td><td>Travaux par points chauds (soudage, meulage), charges calorifiques (vinyle, déchets)</td><td>Permis de feu, limitation des matières combustibles, extincteurs</td></tr>\n<tr><td>Chimique</td><td>Produits de décontamination, réactifs du cycle du combustible</td><td>Fiche de données de sécurité, EPI, ventilation</td></tr>\n<tr><td>Thermique</td><td>Locaux chauds, tenues étanches</td><td>Limitation des durées, hydratation, surveillance</td></tr>\n<tr><td>Bruit, éclairage, coactivité</td><td>Plusieurs entreprises dans le même local en arrêt de tranche</td><td>Coordination, planning, balisage</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les statistiques des grands exploitants le confirment chaque année : les accidents du travail des intervenants en zone nucléaire sont dus surtout aux chutes, aux manutentions et aux heurts, beaucoup plus qu'aux rayonnements. Une analyse de risques qui ne traite que la radioprotection est incomplète.</div>"
      },
      {
       "titre": "Estimer et hiérarchiser les risques",
       "contenu": "<p>Pour décider où porter l'effort de prévention, on estime chaque risque à l'aide d'une <strong>grille</strong> qui croise gravité et probabilité, par exemple sur 4 niveaux chacun. Le produit (ou la case de la grille) donne une priorité.</p>\n<table><thead><tr><th>Gravité</th><th>Définition</th></tr></thead><tbody>\n<tr><td>1 - Faible</td><td>Blessure sans arrêt de travail</td></tr>\n<tr><td>2 - Moyenne</td><td>Accident avec arrêt de travail</td></tr>\n<tr><td>3 - Grave</td><td>Incapacité permanente</td></tr>\n<tr><td>4 - Très grave</td><td>Décès</td></tr>\n</tbody></table>\n<p>Les mesures de prévention se choisissent ensuite selon la hiérarchie des <strong>principes généraux de prévention</strong> du Code du travail : éviter le risque, l'évaluer, le combattre à la source, adapter le travail à l'homme, tenir compte de l'évolution de la technique, remplacer ce qui est dangereux par ce qui l'est moins, planifier la prévention, donner la priorité aux protections collectives sur les protections individuelles, donner les instructions appropriées.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser le risque d'une étape. Étape : dépose d'un couvercle de 300 kg au palan. 1) Phénomène dangereux : charge suspendue. 2) Situation dangereuse : l'intervenant guide la charge à la main sous le palan. 3) Événement : rupture d'élingue ou décrochage. 4) Dommage : écrasement, gravité 4. 5) Probabilité estimée : 2 (accessoires vérifiés mais manœuvre en espace restreint) ; niveau de risque 4 × 2 = 8, élevé. 6) Mesures : protection collective (zone balisée sous la charge, guidage par cordelette à distance), vérification des accessoires et de la charge maximale, élingueur formé, communication sécurisée avec le conducteur. 7) Risque résiduel : gravité inchangée, probabilité 1, niveau 4, acceptable. Toujours relier chaque mesure à la situation qu'elle supprime ou réduit.</div>"
      },
      {
       "titre": "Interactions entre risques radiologiques et conventionnels",
       "contenu": "<p>En environnement nucléaire, les risques ne s'additionnent pas simplement : les mesures prises contre l'un peuvent aggraver l'autre. L'analyse doit rechercher ces <strong>interactions</strong>.</p>\n<ul>\n<li>Une <strong>tenue étanche</strong> protège de la contamination mais aggrave la contrainte thermique, réduit la dextérité et la vision : le risque de chute ou d'erreur augmente.</li>\n<li>Des <strong>protections biologiques</strong> réduisent la dose mais créent un risque de manutention et une charge sur les supports.</li>\n<li>Un <strong>sas</strong> en vinyle confine la contamination mais ajoute une charge combustible et peut gêner l'évacuation.</li>\n<li>La volonté de <strong>réduire le temps</strong> d'exposition pousse à se précipiter, ce qui augmente les risques d'accident.</li>\n<li>Inversement, un <strong>accident conventionnel</strong> en zone contrôlée (plaie, chute) se complique d'un risque de contamination de la plaie et d'une évacuation plus difficile.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> à l'épreuve écrite comme sur le terrain, une mesure de prévention proposée sans en examiner les effets sur les autres risques est incomplète. Pour chaque mesure, se demander : « quel nouveau risque cette mesure crée-t-elle ? ».</div>"
      },
      {
       "titre": "Le plan de prévention et les permis",
       "contenu": "<p>Lorsqu'une <strong>entreprise extérieure</strong> intervient dans l'établissement d'une <strong>entreprise utilisatrice</strong> (l'exploitant), le Code du travail impose une coordination. Après une <strong>inspection commune préalable</strong> des lieux, les deux chefs d'entreprise analysent les risques liés à l'interférence des activités et arrêtent un <strong>plan de prévention</strong>. Il est obligatoirement écrit lorsque les travaux dépassent une durée fixée par la réglementation ou figurent sur la liste des travaux dangereux, qui comprend notamment les travaux exposant aux rayonnements ionisants.</p>\n<p>Le plan de prévention précise les risques, les mesures, la répartition des responsabilités, les consignes d'urgence, et la liste des intervenants informés. Il est complété, selon les travaux, par des <strong>autorisations de travail</strong> ou <strong>permis</strong> :</p>\n<ul>\n<li><strong>permis de feu</strong> pour les travaux par points chauds ;</li>\n<li><strong>autorisation de travail</strong> délivrée par l'exploitant après consignation des matériels ;</li>\n<li>autorisations pour l'utilisation de générateurs X ou de sources ;</li>\n<li>autorisation d'accès en zone orange ou rouge.</li>\n</ul>\n<p>Le chargé de travaux vérifie que ces documents sont valides, affichés si nécessaire, et que les intervenants en ont connaissance.</p>"
      },
      {
       "titre": "L'arrêt de chantier et la conduite à tenir",
       "contenu": "<p>Le titulaire du diplôme doit savoir <strong>arrêter un chantier</strong> en cas de danger, et réagir en cas d'incident ou d'accident. Les situations qui imposent l'arrêt sont précisées dans le dossier et rappelées au briefing ; elles comprennent toujours :</p>\n<ul>\n<li>une alarme (dosimètre, balise aérosols, incendie, évacuation) ;</li>\n<li>une situation réelle différente de la situation prévue (débit, contamination, état du matériel, repère) ;</li>\n<li>la perte d'une protection collective (garde-corps retiré, dépression du sas perdue, balisage détruit) ;</li>\n<li>un doute sur la consignation ;</li>\n<li>un blessé ou un malaise.</li>\n</ul>\n<p>En cas d'accident de personne, on applique la conduite de secours apprise : protéger, alerter selon le numéro et la consigne du site, secourir dans la limite de sa formation. En zone contrôlée, l'alerte précise qu'il s'agit d'une zone contrôlée pour que les secours viennent équipés ; la radioprotection prend en charge la contamination éventuelle.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le droit de retrait du salarié face à un danger grave et imminent s'applique pleinement ; dans la filière, il est complété par la consigne d'arrêt du chantier en cas de doute. Après un arrêt, on ne redémarre qu'avec l'accord du responsable, une fois la cause comprise et traitée.</div>"
      },
      {
       "titre": "Le document unique et l'évaluation des risques de l'entreprise",
       "contenu": "<p>Au-delà de chaque chantier, l'employeur doit évaluer l'ensemble des risques auxquels ses salariés sont exposés et transcrire cette évaluation dans le <strong>document unique d'évaluation des risques professionnels</strong>. Pour une entreprise prestataire du nucléaire, ce document recense les unités de travail (logistique, maintenance, radioprotection, déchets, encadrement), les risques identifiés pour chacune et le programme de prévention.</p>\n<p>L'évaluation des risques liés aux rayonnements ionisants fait partie de cette démarche : l'employeur, avec le conseiller en radioprotection, évalue les expositions, en déduit la délimitation des zones, le classement des travailleurs et les mesures de protection.</p>\n<p>L'<strong>analyse de risques du chantier</strong> rédigée dans le dossier d'intervention décline ces évaluations générales pour une intervention précise, dans un local précis, à un moment précis. Elle est construite étape par étape :</p>\n<table><thead><tr><th>Étape de l'intervention</th><th>Risque identifié</th><th>Mesures de prévention</th><th>Responsable</th></tr></thead><tbody>\n<tr><td>Accès au local</td><td>Exposition externe dans le couloir</td><td>Itinéraire défini, pas d'attente dans le couloir</td><td>Chargé de travaux</td></tr>\n<tr><td>Ouverture du matériel</td><td>Contamination, pression résiduelle</td><td>Sas réceptionné, vérification de la vidange, tenue complémentaire</td><td>Intervenants</td></tr>\n<tr><td>Dépose du couvercle</td><td>Chute de charge</td><td>Palan vérifié, zone balisée</td><td>Chef de manœuvre</td></tr>\n</tbody></table>\n<p>Elle est relue avec l'équipe au briefing et ajustée si la situation réelle diffère de la situation prévue.</p>"
      }
     ],
     "points_cles": [
      "Phénomène dangereux, situation dangereuse, événement dangereux, dommage : sans exposition, pas de dommage.",
      "Le risque combine gravité et probabilité ; une grille permet de hiérarchiser.",
      "Les chutes, manutentions et heurts dominent les accidents du travail en zone nucléaire.",
      "On applique les principes généraux de prévention et on privilégie les protections collectives.",
      "Les mesures contre un risque peuvent en aggraver un autre : chercher les interactions.",
      "Le plan de prévention coordonne entreprise utilisatrice et entreprise extérieure ; il est écrit pour les travaux sous rayonnements ionisants.",
      "Permis de feu, autorisation de travail et autorisations d'accès complètent le plan de prévention.",
      "Alarme, situation différente du prévu, perte de protection, doute ou blessé : on arrête le chantier."
     ],
     "lexique": [
      {
       "terme": "Phénomène dangereux",
       "def": "Source potentielle de dommage."
      },
      {
       "terme": "Situation dangereuse",
       "def": "Situation dans laquelle une personne est exposée à un phénomène dangereux."
      },
      {
       "terme": "Événement dangereux",
       "def": "Événement qui déclenche le dommage dans une situation dangereuse."
      },
      {
       "terme": "Risque",
       "def": "Combinaison de la gravité d'un dommage possible et de sa probabilité."
      },
      {
       "terme": "Risque résiduel",
       "def": "Risque qui subsiste après la mise en place des mesures de prévention."
      },
      {
       "terme": "Plan de prévention",
       "def": "Document arrêté entre entreprise utilisatrice et entreprise extérieure pour prévenir les risques d'interférence."
      },
      {
       "terme": "Entreprise utilisatrice",
       "def": "Entreprise dans laquelle intervient une entreprise extérieure."
      },
      {
       "terme": "Permis de feu",
       "def": "Autorisation écrite préalable à des travaux par points chauds."
      },
      {
       "terme": "Coactivité",
       "def": "Présence simultanée de plusieurs équipes ou entreprises sur un même lieu."
      },
      {
       "terme": "Droit de retrait",
       "def": "Droit du salarié de se retirer d'une situation présentant un danger grave et imminent."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Maintenance des matériels",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btiin-technologie-mecanique",
     "titre": "Technologie des matériels mécaniques : liaisons, assemblages, étanchéité, robinetterie",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Identifier les liaisons et les assemblages d'un matériel mécanique",
      "Réaliser un assemblage boulonné selon les exigences de serrage",
      "Distinguer les solutions d'étanchéité statique et dynamique",
      "Reconnaître les principaux types de robinets et leur fonction",
      "Décrire la constitution d'une pompe centrifuge et ses points de maintenance"
     ],
     "sections": [
      {
       "titre": "Analyser un matériel : fonctions et liaisons",
       "contenu": "<p>Avant d'intervenir sur un matériel, il faut comprendre <strong>à quoi il sert</strong> et <strong>comment il est construit</strong>. L'<strong>analyse fonctionnelle</strong> identifie la fonction principale (une vanne isole ou règle un débit, une pompe met un fluide en mouvement) et les fonctions techniques qui y contribuent (guider, étancher, transmettre un effort, assembler).</p>\n<p>Les pièces d'un mécanisme sont reliées par des <strong>liaisons</strong>. Une liaison se caractérise par les mouvements qu'elle autorise entre deux pièces : rotations et translations selon trois axes, soit six <strong>degrés de liberté</strong> possibles au total.</p>\n<table><thead><tr><th>Liaison</th><th>Mouvements autorisés</th><th>Exemple dans un matériel</th></tr></thead><tbody>\n<tr><td>Encastrement (liaison fixe)</td><td>Aucun</td><td>Chapeau boulonné sur le corps d'une vanne</td></tr>\n<tr><td>Pivot</td><td>Une rotation</td><td>Arbre de pompe dans ses roulements</td></tr>\n<tr><td>Glissière</td><td>Une translation</td><td>Opercule guidé dans le corps d'une vanne</td></tr>\n<tr><td>Hélicoïdale</td><td>Rotation et translation liées</td><td>Tige filetée de vanne dans son écrou de manœuvre</td></tr>\n<tr><td>Pivot glissant</td><td>Une rotation et une translation sur le même axe</td><td>Tige de vanne dans son presse-étoupe</td></tr>\n</tbody></table>\n<p>On distingue aussi les liaisons <strong>démontables</strong> (vis, écrous, goupilles) et <strong>non démontables</strong> (soudure, rivetage, collage). En maintenance, on ne démonte que les liaisons prévues par le mode opératoire.</p>"
      },
      {
       "titre": "Lire un plan d'ensemble et une nomenclature",
       "contenu": "<p>Le <strong>plan d'ensemble</strong> représente le matériel assemblé, généralement en coupe pour montrer l'intérieur. Chaque pièce porte un <strong>repère</strong> (numéro dans une bulle reliée à la pièce par une ligne de rappel). La <strong>nomenclature</strong>, tableau placé sur le plan ou dans un document séparé, donne pour chaque repère : la désignation, le nombre, le matériau, la référence ou la norme, et parfois la masse.</p>\n<p>Les conventions de représentation à connaître :</p>\n<ul>\n<li>les <strong>vues</strong> (face, dessus, gauche) sont disposées selon la méthode européenne : la vue de dessus est placée sous la vue de face ;</li>\n<li>une <strong>coupe</strong> montre l'intérieur ; les parties coupées sont <strong>hachurées</strong>, avec des hachures d'orientation différente pour deux pièces voisines ;</li>\n<li>les pièces pleines de révolution (vis, arbres, goujons) ne sont pas coupées dans le sens de la longueur ;</li>\n<li>les <strong>traits interrompus</strong> représentent les contours cachés, les <strong>traits mixtes</strong> les axes ;</li>\n<li>le <strong>cartouche</strong> indique le titre, l'échelle, le numéro et l'indice de révision du plan.</li>\n</ul>\n<p>Lire un plan avant l'intervention permet de prévoir l'ordre de démontage, les pièces lourdes, les pièces d'usure à remplacer (joints, tresses) et les points où la contamination peut s'accumuler. La méthode détaillée de lecture et un exemple commenté sont présentés dans le bloc d'analyse de documents.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> vérifier que l'indice de révision du plan est celui en vigueur. Un plan périmé peut décrire un matériel qui a été modifié depuis.</div>"
      },
      {
       "titre": "Les assemblages boulonnés et le serrage",
       "contenu": "<p>L'assemblage par <strong>vis</strong>, <strong>goujons</strong> et <strong>écrous</strong> est le plus courant sur les matériels des installations : brides de tuyauterie, chapeaux de vannes, corps de pompes. Sa qualité repose sur le <strong>serrage</strong> : un serrage insuffisant provoque une fuite ou un desserrage, un serrage excessif peut écraser le joint, déformer les brides ou rompre le goujon.</p>\n<p>Le mode opératoire précise :</p>\n<ul>\n<li>le <strong>couple de serrage</strong> en newtons-mètres (N.m), appliqué avec une clé dynamométrique étalonnée, ou un serrage par tension à l'aide d'un tendeur hydraulique pour les gros diamètres ;</li>\n<li>l'<strong>ordre de serrage</strong>, généralement en croix (en étoile), pour comprimer le joint uniformément ;</li>\n<li>le nombre de <strong>passes</strong> (par exemple 30 %, 60 %, 100 % du couple, puis une passe de vérification) ;</li>\n<li>le <strong>lubrifiant</strong> à utiliser sur les filets, qui modifie la relation entre couple et effort de serrage ;</li>\n<li>la <strong>classe de qualité</strong> de la visserie (par exemple 8.8 : résistance à la rupture de 800 MPa, limite élastique à 80 % de cette valeur).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> serrage d'une bride à 8 goujons. 1) Vérifier l'état des portées de joint, du joint neuf (référence conforme à la nomenclature) et des filetages. 2) Lubrifier avec le produit prescrit et approcher les écrous à la main. 3) Numéroter les goujons de 1 à 8 dans le sens horaire ; ordre en croix : 1, 5, 3, 7, 2, 6, 4, 8. 4) Passe 1 à 30 % du couple, passe 2 à 60 %, passe 3 à 100 %, dans le même ordre. 5) Passe de vérification circulaire à 100 % jusqu'à ce qu'aucun écrou ne tourne plus. 6) Relever sur le document de suivi la référence de la clé, sa date de validité et le couple appliqué ; signer. Pour un couple prescrit de 250 N.m : passes à 75, 150 et 250 N.m.</div>"
      },
      {
       "titre": "L'étanchéité",
       "contenu": "<p>L'<strong>étanchéité</strong> empêche le fluide de passer d'un espace à un autre. Dans une installation nucléaire, une fuite peut être aussi un problème radiologique (fluide contaminé) et de sûreté. On distingue :</p>\n<table><thead><tr><th>Type</th><th>Définition</th><th>Solutions courantes</th></tr></thead><tbody>\n<tr><td>Étanchéité statique</td><td>Entre deux pièces sans mouvement relatif</td><td>Joint plat, joint spiralé, joint torique, joint métallique</td></tr>\n<tr><td>Étanchéité dynamique</td><td>Entre deux pièces en mouvement relatif</td><td>Tresses de presse-étoupe, garniture mécanique, joints à lèvre</td></tr>\n</tbody></table>\n<p>Le <strong>presse-étoupe</strong> assure l'étanchéité autour de la tige d'une vanne : des anneaux de tresse sont comprimés par un fouloir serré par des goujons. La <strong>garniture mécanique</strong> assure l'étanchéité de l'arbre d'une pompe : deux faces très planes, l'une fixe, l'autre tournante, frottent l'une contre l'autre.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un joint démonté ne se réutilise pas, sauf mention contraire du mode opératoire. Un joint de mauvaise référence (matériau, dimension, classe de pression) peut tenir aux essais et fuir en service. La référence du joint posé est relevée et tracée.</div>"
      },
      {
       "titre": "La robinetterie",
       "contenu": "<p>La <strong>robinetterie</strong> regroupe les appareils qui isolent, règlent ou protègent les circuits. C'est l'un des principaux volumes de maintenance en arrêt de réacteur.</p>\n<table><thead><tr><th>Appareil</th><th>Principe</th><th>Fonction principale</th></tr></thead><tbody>\n<tr><td>Robinet à soupape</td><td>Un clapet se déplace perpendiculairement à son siège</td><td>Isolement et réglage</td></tr>\n<tr><td>Robinet-vanne (à opercule)</td><td>Un opercule coulisse en travers du passage</td><td>Isolement (ouvert ou fermé)</td></tr>\n<tr><td>Robinet à papillon</td><td>Un disque pivote d'un quart de tour</td><td>Isolement et réglage sur gros diamètres</td></tr>\n<tr><td>Robinet à tournant sphérique</td><td>Une sphère percée pivote d'un quart de tour</td><td>Isolement rapide</td></tr>\n<tr><td>Clapet anti-retour</td><td>Un clapet s'ouvre sous l'effet du débit et se ferme s'il s'inverse</td><td>Empêcher le retour du fluide</td></tr>\n<tr><td>Soupape de sûreté</td><td>S'ouvre automatiquement au-delà d'une pression de tarage</td><td>Protection contre la surpression</td></tr>\n</tbody></table>\n<p>Un robinet comprend un <strong>corps</strong>, un <strong>chapeau</strong>, un <strong>obturateur</strong> (clapet, opercule, papillon, sphère) qui vient en appui sur un <strong>siège</strong>, une <strong>tige</strong> avec son presse-étoupe, et un <strong>organe de manœuvre</strong> : volant manuel, ou <strong>actionneur</strong> électrique (servomoteur) ou pneumatique. Les opérations courantes sont la réfection du presse-étoupe, le remplacement du joint de chapeau, le rodage ou le contrôle des portées d'étanchéité, et le réglage des fins de course de l'actionneur.</p>"
      },
      {
       "titre": "Les pompes centrifuges",
       "contenu": "<p>La <strong>pompe centrifuge</strong> est la plus répandue. Un <strong>moteur</strong> entraîne, par l'intermédiaire d'un <strong>accouplement</strong>, un <strong>arbre</strong> qui porte une <strong>roue</strong> à aubes tournant dans un <strong>corps</strong> (volute). Le fluide entre au centre de la roue (aspiration), est mis en rotation et projeté vers la périphérie, d'où il sort sous pression (refoulement).</p>\n<p>Les points de maintenance courants :</p>\n<ul>\n<li>le <strong>lignage</strong> (alignement) entre l'arbre du moteur et celui de la pompe, réalisé au comparateur ou au laser ; un mauvais lignage use les roulements et la garniture ;</li>\n<li>les <strong>roulements</strong> et leur lubrification ;</li>\n<li>la <strong>garniture mécanique</strong> ou le presse-étoupe ;</li>\n<li>la surveillance des <strong>vibrations</strong> et des températures de paliers ;</li>\n<li>l'état de la roue et des bagues d'usure.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un technicien TIIN réalise surtout des opérations de maintenance de premier niveau et de logistique autour de ces matériels (préparation, accès, protections, démontage et remontage sous la conduite d'un spécialiste, contrôles simples). Comprendre la constitution du matériel lui permet de préparer correctement la zone, d'anticiper les pièces lourdes, les points de contamination probables (intérieur du corps, garniture) et les risques de corps étrangers.</div>"
      },
      {
       "titre": "Les tolérances, l'état de surface et les contrôles dimensionnels",
       "contenu": "<p>Une pièce n'est jamais fabriquée à une cote parfaite. La <strong>tolérance</strong> est l'écart admissible autour de la cote nominale : un arbre de 40 mm avec une tolérance de ± 0,02 mm est conforme entre 39,98 et 40,02 mm. Les ajustements entre pièces (arbre dans un alésage, roulement sur un arbre) sont définis par des tolérances normalisées.</p>\n<p>L'<strong>état de surface</strong> (rugosité) est essentiel pour les surfaces d'étanchéité : une portée de joint rayée ou piquée provoque une fuite. On le contrôle visuellement et, si nécessaire, par des moyens spécifiques.</p>\n<p>Les contrôles dimensionnels courants utilisent : le <strong>pied à coulisse</strong> (précision 0,02 ou 0,05 mm), le <strong>micromètre</strong> (0,01 mm), le <strong>comparateur</strong> (mesure de faux-rond, de jeu ou de lignage), le jeu de <strong>cales d'épaisseur</strong>. Chaque instrument a une date de validité d'étalonnage, relevée sur le document de suivi.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une mesure relevée sur un document de suivi indique toujours la valeur, l'unité, l'instrument utilisé et la conformité par rapport à la tolérance. Une valeur hors tolérance est un écart à signaler, pas une valeur à arrondir.</div>"
      }
     ],
     "points_cles": [
      "On analyse d'abord la fonction du matériel, puis les liaisons entre ses pièces.",
      "Un assemblage boulonné se serre au couple prescrit, en croix, en plusieurs passes, avec le lubrifiant prescrit.",
      "La clé dynamométrique utilisée doit être étalonnée et tracée.",
      "Étanchéité statique : joints ; étanchéité dynamique : presse-étoupe, garniture mécanique.",
      "Un joint démonté ne se réutilise pas ; sa référence est vérifiée et tracée.",
      "Robinets d'isolement, de réglage, anti-retour et de sûreté ; obturateur en appui sur un siège.",
      "Une pompe centrifuge exige un bon lignage, des roulements et une garniture en bon état.",
      "Toute valeur hors tolérance est un écart à signaler."
     ],
     "lexique": [
      {
       "terme": "Liaison",
       "def": "Relation entre deux pièces définie par les mouvements qu'elle autorise."
      },
      {
       "terme": "Degré de liberté",
       "def": "Mouvement élémentaire (rotation ou translation selon un axe) possible entre deux pièces."
      },
      {
       "terme": "Couple de serrage",
       "def": "Moment appliqué à un écrou ou une vis, en N.m, pour obtenir l'effort de serrage voulu."
      },
      {
       "terme": "Serrage en croix",
       "def": "Ordre de serrage alternant des goujons opposés pour comprimer le joint uniformément."
      },
      {
       "terme": "Presse-étoupe",
       "def": "Dispositif d'étanchéité autour d'une tige mobile par compression de tresses."
      },
      {
       "terme": "Garniture mécanique",
       "def": "Dispositif d'étanchéité d'un arbre tournant par deux faces frottantes."
      },
      {
       "terme": "Obturateur",
       "def": "Pièce mobile d'un robinet qui ferme le passage en appui sur un siège."
      },
      {
       "terme": "Soupape de sûreté",
       "def": "Appareil qui s'ouvre automatiquement au-delà d'une pression de tarage."
      },
      {
       "terme": "Lignage",
       "def": "Alignement des arbres d'un moteur et d'une machine entraînée."
      },
      {
       "terme": "Tolérance",
       "def": "Écart admissible autour d'une cote nominale."
      }
     ]
    },
    {
     "id": "btiin-chaines-energies-consignation",
     "titre": "Chaînes fonctionnelles, énergies et consignation",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Décrire la chaîne d'information et la chaîne d'action d'un système automatisé",
      "Identifier les énergies électrique, pneumatique et hydraulique et leurs composants",
      "Lire les symboles de base d'un schéma pneumatique ou hydraulique",
      "Expliquer les étapes d'une consignation électrique et mécanique",
      "Vérifier une consignation avant d'intervenir"
     ],
     "sections": [
      {
       "titre": "Le système automatisé et ses deux chaînes",
       "contenu": "<p>La plupart des matériels sur lesquels on intervient font partie de <strong>systèmes automatisés</strong> : une vanne motorisée commandée depuis la salle de commande, un pont roulant, un extracteur de ventilation, une installation de traitement de déchets. On les décrit par deux chaînes :</p>\n<ul>\n<li>la <strong>chaîne d'information</strong> : <strong>acquérir</strong> (capteurs, boutons), <strong>traiter</strong> (automate programmable, relais), <strong>communiquer</strong> (voyants, écrans, réseau) ;</li>\n<li>la <strong>chaîne d'action</strong> (ou chaîne d'énergie) : <strong>alimenter</strong> (réseau électrique, air comprimé, centrale hydraulique), <strong>distribuer</strong> (préactionneur : contacteur, variateur, distributeur), <strong>convertir</strong> (actionneur : moteur, vérin), <strong>transmettre</strong> (réducteur, accouplement, tige), pour <strong>agir</strong> sur la matière d'œuvre (effecteur).</li>\n</ul>\n<table><thead><tr><th>Élément</th><th>Exemple : vanne motorisée</th></tr></thead><tbody>\n<tr><td>Capteur</td><td>Contacts de fin de course ouvert et fermé, limiteur de couple</td></tr>\n<tr><td>Traitement</td><td>Automate ou logique de commande</td></tr>\n<tr><td>Préactionneur</td><td>Contacteurs d'ouverture et de fermeture</td></tr>\n<tr><td>Actionneur</td><td>Moteur électrique du servomoteur</td></tr>\n<tr><td>Transmission</td><td>Réducteur, écrou de manœuvre, tige</td></tr>\n<tr><td>Effecteur</td><td>Obturateur de la vanne</td></tr>\n</tbody></table>\n<p>Lors d'une panne, cette décomposition aide à localiser le défaut : l'ordre arrive-t-il ? L'énergie est-elle distribuée ? L'actionneur tourne-t-il ? La transmission fonctionne-t-elle ?</p>"
      },
      {
       "titre": "Les énergies et leurs composants",
       "contenu": "<table><thead><tr><th>Énergie</th><th>Production et distribution</th><th>Actionneurs</th><th>Dangers propres</th></tr></thead><tbody>\n<tr><td>Électrique</td><td>Réseau, tableaux, disjoncteurs, contacteurs, variateurs</td><td>Moteurs, électroaimants, résistances</td><td>Électrisation, électrocution, arc électrique, brûlure</td></tr>\n<tr><td>Pneumatique</td><td>Compresseur, réservoir, filtre-régulateur-lubrificateur, distributeurs</td><td>Vérins, moteurs pneumatiques, outils</td><td>Mouvement intempestif, projection, fouettement de flexible, bruit</td></tr>\n<tr><td>Hydraulique</td><td>Centrale (pompe, réservoir, limiteur de pression), distributeurs</td><td>Vérins, moteurs hydrauliques, tendeurs</td><td>Très hautes pressions, injection de fluide sous la peau, chute de charge</td></tr>\n</tbody></table>\n<p>Sur les schémas pneumatiques et hydrauliques, les composants sont représentés par des symboles normalisés : un <strong>distributeur</strong> par une suite de cases (une par position) avec des flèches indiquant le passage du fluide, un <strong>vérin</strong> par un rectangle avec un piston et une tige, une source de pression par un cercle avec un triangle (plein pour l'hydraulique, vide pour le pneumatique). Un distributeur se désigne par le nombre d'orifices et de positions : un « 5/2 » a 5 orifices et 2 positions.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> couper l'alimentation ne suffit pas toujours à supprimer l'énergie. Un réservoir d'air, un accumulateur hydraulique, un ressort comprimé, une charge suspendue, un condensateur conservent une <strong>énergie résiduelle</strong> qui peut provoquer un mouvement ou un choc après la coupure.</div>"
      },
      {
       "titre": "Le risque électrique et l'habilitation",
       "contenu": "<p>Le passage du courant dans le corps peut provoquer contractions, brûlures internes, arrêt cardiaque. Un <strong>arc électrique</strong> peut brûler gravement même sans contact. C'est pourquoi toute personne qui intervient sur ou au voisinage d'installations électriques doit être <strong>habilitée</strong> par son employeur, après une formation, selon la norme NF C 18-510.</p>\n<table><thead><tr><th>Symbole (exemples)</th><th>Signification</th></tr></thead><tbody>\n<tr><td>B0 / H0</td><td>Exécutant de travaux d'ordre non électrique dans un environnement électrique (basse ou haute tension)</td></tr>\n<tr><td>BS</td><td>Interventions élémentaires (remplacement d'un fusible, d'une lampe, raccordement simple)</td></tr>\n<tr><td>BE manœuvre</td><td>Manœuvres d'appareillage</td></tr>\n<tr><td>B1, B2, BR, BC</td><td>Travaux et interventions électriques, consignation : réservés au personnel électricien</td></tr>\n</tbody></table>\n<p>Le technicien TIIN détient en général une habilitation de base adaptée à ses tâches (ouvrir une armoire pour un relevé, travailler à proximité de câbles, brancher un extracteur de sas sur une prise de chantier). Il ne réalise que les opérations correspondant à son titre d'habilitation.</p>"
      },
      {
       "titre": "La consignation",
       "contenu": "<p>La <strong>consignation</strong> est l'ensemble des opérations qui mettent un matériel en sécurité pour qu'on puisse y travailler, en empêchant toute remise sous énergie intempestive. Elle porte sur toutes les énergies : électrique, mécanique, fluides (pression, température), et parfois chimique ou radiologique.</p>\n<p>Elle comprend toujours les mêmes étapes :</p>\n<ol>\n<li><strong>Séparation</strong> : couper l'énergie par un organe sûr (sectionneur, robinet d'isolement), de manière visible ou certaine ;</li>\n<li><strong>Condamnation</strong> : bloquer l'organe en position de séparation (cadenas, chaîne, verrou) et l'<strong>identifier</strong> par une étiquette ou une pancarte ;</li>\n<li><strong>Dissipation des énergies résiduelles</strong> : décharge, purge, vidange, mise à l'air, mise en position basse ;</li>\n<li><strong>Vérification</strong> de l'absence d'énergie au plus près du point de travail : vérification d'absence de tension avec un appareil adapté, vérification de l'absence de pression sur un manomètre ou par l'ouverture d'un évent ;</li>\n<li>pour l'électricité, <strong>mise à la terre et en court-circuit</strong> lorsque la réglementation l'exige.</li>\n</ol>\n<p>Dans une installation nucléaire, les consignations des matériels de l'installation sont réalisées par l'<strong>exploitant</strong>, qui remet ensuite au chargé de travaux du prestataire une <strong>autorisation de travail</strong> indiquant le matériel consigné et les limites de l'intervention. Le chargé de travaux peut poser ses propres cadenas sur les organes condamnés.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier une consignation avant de démonter une vanne. 1) Lire l'autorisation de travail : repère exact de la vanne, organes d'isolement amont et aval, purges prévues. 2) Se rendre sur place et identifier la vanne par son repère complet (autocontrôle). 3) Vérifier visuellement que les robinets d'isolement sont fermés, cadenassés et étiquetés au nom de la consignation. 4) Vérifier que l'actionneur électrique est consigné (étiquette au tableau ou sur l'actionneur). 5) Constater l'absence de pression : manomètre à zéro, ouverture de l'évent ou de la purge prévue sans écoulement sous pression. 6) Poser ses cadenas personnels si la procédure le prévoit. 7) En cas de doute (étiquette absente, repère différent, présence de pression) : ne pas intervenir, prévenir le chargé de travaux.</div>"
      },
      {
       "titre": "Fin d'intervention et requalification",
       "contenu": "<p>À la fin des travaux, la remise en service suit l'ordre inverse, sous la responsabilité de l'exploitant :</p>\n<ol>\n<li>le chargé de travaux vérifie que le matériel est remonté, que les outils et déchets sont retirés, que la zone est propre (maîtrise des corps étrangers) ;</li>\n<li>il retire ses cadenas et <strong>restitue l'autorisation de travail</strong> en indiquant que le matériel peut être remis sous énergie ;</li>\n<li>l'exploitant <strong>déconsigne</strong> et remet en service ;</li>\n<li>le matériel fait l'objet d'une <strong>requalification</strong> : essais qui démontrent qu'il remplit de nouveau sa fonction (essai d'étanchéité, manœuvre de la vanne, vérification des fins de course, essai de fonctionnement de la pompe).</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les intervenants du prestataire assistent souvent à la requalification pour constater le résultat et corriger immédiatement un défaut (fuite au presse-étoupe, fin de course mal réglée). Le résultat de la requalification est consigné dans le dossier : c'est la preuve finale de la qualité de l'intervention.</div>"
      },
      {
       "titre": "Diagnostic de premier niveau",
       "contenu": "<p>Le technicien peut être amené à constater une anomalie de fonctionnement et à aider au <strong>diagnostic</strong>. La démarche reste méthodique :</p>\n<ul>\n<li><strong>constater</strong> le symptôme précisément : ce qui se passe, depuis quand, dans quelles conditions ;</li>\n<li><strong>recueillir</strong> les informations disponibles : historique de maintenance, alarmes, témoignages ;</li>\n<li><strong>localiser</strong> en suivant les chaînes : commande reçue ? énergie présente ? actionneur fonctionnel ? transmission intacte ?</li>\n<li><strong>vérifier</strong> les hypothèses par des contrôles simples et sûrs (visuels, mesures autorisées), sans modifier le matériel ;</li>\n<li><strong>rendre compte</strong> par écrit pour que le spécialiste décide de l'action.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en installation nucléaire, on ne « tente » jamais une réparation non prévue. Toute action sur un matériel non couverte par l'autorisation de travail et le mode opératoire est interdite, même si elle paraît évidente.</div>"
      },
      {
       "titre": "Lire un schéma électrique ou fluidique simple",
       "contenu": "<p>Le technicien n'est pas électricien ni automaticien, mais il doit savoir lire un schéma simple pour comprendre une consignation, raccorder un équipement de chantier ou suivre le fonctionnement d'un matériel.</p>\n<p>Sur un <strong>schéma électrique</strong>, on distingue :</p>\n<ul>\n<li>le <strong>circuit de puissance</strong>, qui alimente l'actionneur : sectionneur, protection (fusibles ou disjoncteur), contacteur, relais thermique, moteur ;</li>\n<li>le <strong>circuit de commande</strong>, en basse tension, qui pilote le contacteur : boutons, contacts, bobine du contacteur, voyants.</li>\n</ul>\n<p>Chaque appareil porte un repère normalisé (Q pour les sectionneurs et disjoncteurs, K pour les contacteurs et relais, M pour les moteurs, S pour les boutons et capteurs de position, H pour les voyants, F pour les protections). Les schémas sont dessinés en position de repos, hors tension.</p>\n<p>Sur un <strong>schéma fluidique</strong> (pneumatique ou hydraulique), on suit le fluide de la source à l'actionneur : source, filtre ou régulateur, distributeur, éventuels réducteurs de débit, vérin ; les conduites de pilotage sont en traits interrompus.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour consigner, on cherche sur le schéma l'organe de séparation situé en amont de la partie sur laquelle on travaille, et l'on vérifie qu'aucune autre source (secours, alimentation de commande séparée, accumulateur) ne peut réalimenter cette partie.</div>"
      }
     ],
     "points_cles": [
      "Chaîne d'information : acquérir, traiter, communiquer ; chaîne d'action : alimenter, distribuer, convertir, transmettre.",
      "Préactionneur : contacteur ou distributeur ; actionneur : moteur ou vérin.",
      "Les énergies résiduelles (réservoir, accumulateur, ressort, charge) subsistent après la coupure.",
      "L'habilitation électrique selon la NF C 18-510 définit ce que chacun peut faire.",
      "Consignation : séparer, condamner et identifier, dissiper, vérifier l'absence d'énergie.",
      "En INB, l'exploitant consigne et délivre une autorisation de travail.",
      "En fin de travaux : restitution de l'autorisation, déconsignation, requalification.",
      "On ne réalise aucune action non couverte par l'autorisation de travail."
     ],
     "lexique": [
      {
       "terme": "Chaîne d'information",
       "def": "Partie d'un système qui acquiert, traite et communique les informations."
      },
      {
       "terme": "Chaîne d'action",
       "def": "Partie d'un système qui alimente, distribue, convertit et transmet l'énergie pour agir."
      },
      {
       "terme": "Préactionneur",
       "def": "Composant qui distribue l'énergie à l'actionneur sur ordre de la commande."
      },
      {
       "terme": "Actionneur",
       "def": "Composant qui convertit l'énergie en action mécanique : moteur, vérin."
      },
      {
       "terme": "Distributeur",
       "def": "Préactionneur pneumatique ou hydraulique qui oriente le fluide vers l'actionneur."
      },
      {
       "terme": "Énergie résiduelle",
       "def": "Énergie qui subsiste dans un équipement après la coupure de l'alimentation."
      },
      {
       "terme": "Habilitation électrique",
       "def": "Reconnaissance par l'employeur de la capacité d'une personne à effectuer des opérations d'ordre électrique."
      },
      {
       "terme": "Consignation",
       "def": "Opérations de mise en sécurité d'un matériel empêchant toute remise sous énergie intempestive."
      },
      {
       "terme": "Autorisation de travail",
       "def": "Document de l'exploitant autorisant une intervention sur un matériel consigné."
      },
      {
       "terme": "Requalification",
       "def": "Essais démontrant qu'un matériel remplit sa fonction après intervention."
      }
     ]
    },
    {
     "id": "btiin-methodes-maintenance",
     "titre": "Méthodes et organisation de la maintenance",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Distinguer les formes de maintenance corrective et préventive",
      "Situer une intervention dans les niveaux de maintenance",
      "Calculer et interpréter des indicateurs de fiabilité et de disponibilité",
      "Exploiter un historique et une analyse des défaillances simple",
      "Décrire le circuit d'un ordre de travail et le rôle de la GMAO"
     ],
     "sections": [
      {
       "titre": "Les formes de maintenance",
       "contenu": "<p>La <strong>maintenance</strong> regroupe toutes les actions destinées à maintenir ou rétablir un bien dans un état lui permettant d'accomplir sa fonction. La norme européenne de terminologie de la maintenance (NF EN 13306) distingue :</p>\n<table><thead><tr><th>Forme</th><th>Déclenchement</th><th>Exemple</th></tr></thead><tbody>\n<tr><td>Maintenance corrective palliative</td><td>Après défaillance, remise en état provisoire</td><td>Resserrage d'un presse-étoupe qui fuit en attendant sa réfection</td></tr>\n<tr><td>Maintenance corrective curative</td><td>Après défaillance, réparation définitive</td><td>Remplacement de la garniture mécanique défaillante</td></tr>\n<tr><td>Maintenance préventive systématique</td><td>Selon un échéancier (temps, nombre de cycles)</td><td>Remplacement des filtres tous les N mois, révision d'une vanne à chaque arrêt de réacteur de même type</td></tr>\n<tr><td>Maintenance préventive conditionnelle</td><td>Quand un paramètre surveillé atteint un seuil</td><td>Remplacement des filtres THE quand la perte de charge atteint la valeur limite</td></tr>\n<tr><td>Maintenance préventive prévisionnelle</td><td>Selon l'extrapolation de l'évolution d'un paramètre</td><td>Planification du changement de roulements d'après la tendance des vibrations</td></tr>\n</tbody></table>\n<p>Dans les installations nucléaires, une grande part de la maintenance des matériels importants est <strong>préventive</strong>, définie dans des programmes de maintenance établis par l'exploitant et réalisée lors des arrêts. Les <strong>essais périodiques</strong> vérifient régulièrement que les matériels de sûreté sont disponibles.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la maintenance préventive vise à intervenir avant la défaillance ; elle est planifiée et donc préparée, ce qui permet d'optimiser la dose et la sécurité. La maintenance corrective, imprévue, est plus difficile à optimiser.</div>"
      },
      {
       "titre": "Défaillance, panne et niveaux de maintenance",
       "contenu": "<p>La <strong>défaillance</strong> est la perte de l'aptitude d'un bien à accomplir sa fonction ; la <strong>panne</strong> est l'état du bien après la défaillance. Une défaillance peut être <strong>complète</strong> (le matériel ne fonctionne plus) ou <strong>partielle</strong> (il fonctionne avec des performances dégradées), <strong>soudaine</strong> ou <strong>progressive</strong> (usure, encrassement, corrosion).</p>\n<p>Les opérations de maintenance sont souvent classées en <strong>cinq niveaux</strong> de complexité croissante :</p>\n<table><thead><tr><th>Niveau</th><th>Nature des actions</th><th>Intervenant type</th></tr></thead><tbody>\n<tr><td>1</td><td>Actions simples : réglages prévus, remplacement d'éléments accessibles (voyant, filtre)</td><td>Exploitant du matériel</td></tr>\n<tr><td>2</td><td>Actions avec procédure simple et outillage courant : remplacement d'un sous-ensemble standard</td><td>Technicien habilité</td></tr>\n<tr><td>3</td><td>Diagnostic, réparation par remplacement de composants, réglages complexes</td><td>Technicien spécialisé</td></tr>\n<tr><td>4</td><td>Travaux importants avec outillage spécialisé</td><td>Équipe spécialisée</td></tr>\n<tr><td>5</td><td>Rénovation, reconstruction, travaux lourds</td><td>Constructeur ou atelier spécialisé</td></tr>\n</tbody></table>\n<p>Le titulaire du bac pro intervient principalement aux niveaux 1 à 3, en équipe, et participe à des travaux de niveau supérieur sous la conduite de spécialistes.</p>"
      },
      {
       "titre": "Les indicateurs de fiabilité et de disponibilité",
       "contenu": "<p>Pour suivre l'efficacité de la maintenance, on calcule des indicateurs à partir de l'historique :</p>\n<ul>\n<li>le <strong>MTBF</strong> (moyenne des temps de bon fonctionnement) : temps de fonctionnement total divisé par le nombre de défaillances ; il caractérise la <strong>fiabilité</strong> ;</li>\n<li>le <strong>MTTR</strong> (moyenne des temps techniques de réparation) : temps total de réparation divisé par le nombre de réparations ; il caractérise la <strong>maintenabilité</strong> ;</li>\n<li>la <strong>disponibilité</strong> : D = MTBF / (MTBF + MTTR), aptitude du bien à être en état de fonctionner quand on en a besoin.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul d'indicateurs. Un extracteur de ventilation de chantier a fonctionné 2 400 h sur une période, avec 4 défaillances ayant demandé respectivement 3 h, 5 h, 2 h et 6 h de réparation. 1) MTBF = 2 400 / 4 = 600 h. 2) MTTR = (3 + 5 + 2 + 6) / 4 = 16 / 4 = 4 h. 3) Disponibilité = 600 / (600 + 4) = 0,993, soit 99,3 %. 4) Interprétation : une défaillance toutes les 600 h environ ; pour un chantier de 1 000 h sous confinement dynamique, on doit s'attendre à au moins une panne, d'où la nécessité d'un extracteur de secours ou d'une consigne d'arrêt des activités contaminantes en cas de perte de dépression.</div>"
      },
      {
       "titre": "Exploiter un historique : la méthode de Pareto",
       "contenu": "<p>L'<strong>historique</strong> d'un matériel ou d'un parc de matériels recense les interventions : date, symptôme, cause, action, durée, pièces remplacées. Son analyse permet de repérer les défaillances les plus pénalisantes et d'orienter la maintenance préventive.</p>\n<p>La <strong>méthode de Pareto</strong> (ou méthode ABC) consiste à classer les causes par ordre décroissant de leur poids (nombre de pannes, durée d'arrêt, coût, dose), puis à calculer les pourcentages cumulés. Souvent, environ 20 % des causes expliquent environ 80 % du total : ce sont elles qu'il faut traiter en priorité.</p>\n<table><thead><tr><th>Cause de défaillance (pompes de transfert)</th><th>Heures d'arrêt</th><th>% cumulé</th></tr></thead><tbody>\n<tr><td>Garniture mécanique</td><td>120</td><td>48 %</td></tr>\n<tr><td>Roulements</td><td>70</td><td>76 %</td></tr>\n<tr><td>Accouplement</td><td>25</td><td>86 %</td></tr>\n<tr><td>Moteur électrique</td><td>20</td><td>94 %</td></tr>\n<tr><td>Divers</td><td>15</td><td>100 %</td></tr>\n</tbody></table>\n<p>Ici, garniture et roulements représentent 76 % des heures d'arrêt : on cherchera à améliorer leur maintenance (surveillance des vibrations, qualité du lignage, conditions de lubrification).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un historique mal renseigné (cause non indiquée, « réparé » sans précision) rend toute analyse impossible. Les comptes rendus d'intervention doivent indiquer le constat, la cause identifiée et l'action réalisée.</div>"
      },
      {
       "titre": "L'ordre de travail et la GMAO",
       "contenu": "<p>Une intervention de maintenance suit un circuit documentaire, géré le plus souvent dans un logiciel de <strong>gestion de maintenance assistée par ordinateur</strong> (GMAO) :</p>\n<ol>\n<li><strong>demande d'intervention</strong> : constat d'une anomalie ou échéance préventive ;</li>\n<li><strong>préparation</strong> : analyse, mode opératoire, pièces, outillage, analyse de risques, évaluation dosimétrique, planification ;</li>\n<li><strong>ordre de travail</strong> (OT) : document qui déclenche l'intervention et précise le matériel, la nature des travaux, les ressources ;</li>\n<li><strong>réalisation</strong> et renseignement des documents de suivi ;</li>\n<li><strong>compte rendu</strong> : constat, travaux réalisés, pièces consommées, temps passé, écarts ;</li>\n<li><strong>clôture</strong> et mise à jour de l'historique.</li>\n</ol>\n<p>La GMAO gère aussi les stocks de pièces de rechange, l'outillage et ses dates de vérification, le planning des interventions préventives et les indicateurs.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en arrêt de réacteur, chaque activité du planning correspond à un ou plusieurs ordres de travail de l'exploitant. Le prestataire reçoit un dossier par activité ; le compte rendu qu'il rédige et les valeurs qu'il relève alimentent directement l'historique du matériel, consulté lors des arrêts suivants.</div>"
      },
      {
       "titre": "Analyse des modes de défaillance",
       "contenu": "<p>Pour définir la maintenance préventive d'un matériel, on utilise des méthodes d'analyse comme l'<strong>AMDEC</strong> (analyse des modes de défaillance, de leurs effets et de leur criticité). Pour chaque composant, on recherche :</p>\n<ul>\n<li>le <strong>mode de défaillance</strong> (fuite, blocage, rupture, usure) ;</li>\n<li>sa <strong>cause</strong> ;</li>\n<li>son <strong>effet</strong> sur le matériel et sur l'installation ;</li>\n<li>sa <strong>criticité</strong>, produit de notes de fréquence, de gravité et de non-détection ;</li>\n<li>les <strong>actions</strong> pour réduire la criticité (maintenance préventive, surveillance, modification).</li>\n</ul>\n<p>Le technicien n'établit pas lui-même ces analyses, mais il y contribue par ses constats et il doit comprendre pourquoi un programme lui demande, par exemple, de contrôler un jeu ou de relever une valeur à chaque intervention : c'est la donnée qui permet de détecter une dégradation progressive avant la défaillance.</p>"
      },
      {
       "titre": "La maintenance en environnement nucléaire",
       "contenu": "<p>Les méthodes de maintenance sont les mêmes que dans toute industrie, mais l'environnement nucléaire leur impose des contraintes particulières :</p>\n<ul>\n<li><strong>accessibilité réduite</strong> : beaucoup de matériels ne sont accessibles qu'à l'arrêt du réacteur ; la maintenance est donc regroupée sur les périodes d'arrêt et doit être parfaitement planifiée ;</li>\n<li><strong>dose</strong> : chaque heure de maintenance en zone a un coût dosimétrique ; on cherche à réduire les durées par la conception (matériels faciles à démonter), l'outillage et la préparation ;</li>\n<li><strong>contamination</strong> : les pièces démontées peuvent être contaminées ; leur expertise, leur réparation en atelier ou leur mise au rebut suivent des circuits spécifiques ;</li>\n<li><strong>exigences qualité</strong> : les matériels importants pour la sûreté font l'objet d'exigences définies, de contrôles techniques et de requalifications ;</li>\n<li><strong>pièces de rechange qualifiées</strong> : on ne remplace une pièce que par une pièce de référence identique ou dont l'équivalence a été démontrée.</li>\n</ul>\n<p>C'est pourquoi on accorde une grande importance à la <strong>maintenance conditionnelle</strong> : surveiller l'état réel du matériel (vibrations, températures, analyses d'huile, fuites, résultats des essais périodiques) permet de n'ouvrir un matériel que lorsque c'est nécessaire, donc d'éviter des doses et des risques inutiles. À l'inverse, certains matériels de sûreté font l'objet de visites systématiques, car on ne peut pas attendre leur défaillance pour agir.</p>\n<p>Les <strong>programmes de maintenance</strong> sont régulièrement révisés à partir du retour d'expérience des sites, d'où l'importance des constats précis rédigés par les intervenants.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans le nucléaire, une intervention de maintenance inutile n'est pas sans conséquence : elle coûte de la dose, crée des déchets et introduit un risque d'erreur au remontage. L'objectif est d'intervenir juste quand il le faut.</div>"
      }
     ],
     "points_cles": [
      "Maintenance corrective (palliative, curative) après défaillance ; préventive (systématique, conditionnelle, prévisionnelle) avant.",
      "En installation nucléaire, la maintenance des matériels importants est surtout préventive et réalisée en arrêt.",
      "Cinq niveaux de maintenance, de l'action simple à la reconstruction.",
      "MTBF = temps de fonctionnement / nombre de défaillances ; MTTR = temps de réparation / nombre de réparations.",
      "Disponibilité = MTBF / (MTBF + MTTR).",
      "La méthode de Pareto identifie les causes qui pèsent le plus.",
      "Le circuit d'un ordre de travail va de la demande à la clôture avec mise à jour de l'historique.",
      "L'AMDEC définit la maintenance préventive à partir des modes de défaillance et de leur criticité."
     ],
     "lexique": [
      {
       "terme": "Maintenance préventive systématique",
       "def": "Maintenance réalisée selon un échéancier fixe."
      },
      {
       "terme": "Maintenance préventive conditionnelle",
       "def": "Maintenance déclenchée par l'atteinte d'un seuil d'un paramètre surveillé."
      },
      {
       "terme": "Maintenance corrective",
       "def": "Maintenance réalisée après la détection d'une défaillance."
      },
      {
       "terme": "Défaillance",
       "def": "Perte de l'aptitude d'un bien à accomplir sa fonction."
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
       "terme": "Disponibilité",
       "def": "Aptitude d'un bien à être en état de fonctionner au moment voulu."
      },
      {
       "terme": "GMAO",
       "def": "Gestion de maintenance assistée par ordinateur."
      },
      {
       "terme": "Ordre de travail",
       "def": "Document qui déclenche et décrit une intervention de maintenance."
      },
      {
       "terme": "AMDEC",
       "def": "Analyse des modes de défaillance, de leurs effets et de leur criticité."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Logistique, déchets et démantèlement",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btiin-logistique-preparation-chantier",
     "titre": "Logistique de maintenance et préparation d'un chantier",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Recenser les activités de logistique nucléaire et leur rôle dans un arrêt",
      "Se repérer dans une installation à partir des repères géographiques et fonctionnels",
      "Préparer matériellement un chantier : servitudes, échafaudages, protections, approvisionnements",
      "Planifier une intervention et identifier les tâches critiques",
      "Organiser une opération de manutention et de levage en sécurité"
     ],
     "sections": [
      {
       "titre": "Les activités de logistique nucléaire",
       "contenu": "<p>La <strong>logistique de maintenance</strong> regroupe les activités qui rendent possible l'intervention des spécialistes : sans elles, aucune maintenance ne peut commencer. En arrêt de réacteur, elle représente une part importante des heures travaillées et de la dose collective.</p>\n<table><thead><tr><th>Activité</th><th>Contenu</th></tr></thead><tbody>\n<tr><td>Échafaudages</td><td>Montage, réception, modification, démontage des accès en hauteur</td></tr>\n<tr><td>Calorifuge</td><td>Dépose et repose de l'isolation thermique des tuyauteries et matériels</td></tr>\n<tr><td>Protections biologiques</td><td>Pose et dépose de matelas et écrans selon le plan de pose</td></tr>\n<tr><td>Servitudes</td><td>Distribution provisoire d'électricité, d'air comprimé, d'eau, d'éclairage, de ventilation</td></tr>\n<tr><td>Confinements</td><td>Construction, réception, démontage des sas</td></tr>\n<tr><td>Assistance radioprotection</td><td>Mesures, cartographies, balisage, suivi des intervenants</td></tr>\n<tr><td>Gestion des déchets et propreté radiologique</td><td>Collecte, tri, évacuation, nettoyage, décontamination des locaux</td></tr>\n<tr><td>Gestion des vestiaires et du linge</td><td>Approvisionnement des tenues, collecte du linge contaminé</td></tr>\n<tr><td>Manutention</td><td>Transfert des matériels et pièces, levage</td></tr>\n<tr><td>Gestion des magasins de zone</td><td>Prêt et suivi de l'outillage contaminé, stockage</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la logistique conditionne le planning de tous les autres métiers : un échafaudage, un calorifuge ou une protection en retard décale toute la chaîne. C'est aussi une activité exposante, qui doit être optimisée comme les autres.</div>"
      },
      {
       "titre": "Se repérer dans l'installation",
       "contenu": "<p>Une compétence évaluée à l'épreuve écrite consiste à <strong>maîtriser les données géographiques</strong> et à se repérer dans l'espace professionnel. Deux systèmes de repérage coexistent :</p>\n<ul>\n<li>le <strong>repère géographique</strong> d'un local, composé en général du bâtiment, du niveau (souvent la cote altimétrique du plancher, en mètres) et du numéro de local ;</li>\n<li>le <strong>repère fonctionnel</strong> d'un matériel, composé de la tranche, du système élémentaire auquel il appartient (souvent un code de trois lettres), d'un numéro d'ordre et d'un code de type de matériel (vanne, pompe, capteur, réservoir).</li>\n</ul>\n<p>Pour trouver un matériel, on cherche dans la documentation (base de données de l'exploitant, liste de localisation) le local où il se trouve, puis on prépare l'itinéraire sur les plans : accès au bâtiment, escaliers ou ascenseurs, sas, zones traversées et leur couleur, points chauds connus.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer un itinéraire d'accès. 1) Relever le repère fonctionnel du matériel dans l'ordre de travail. 2) Trouver le local correspondant dans la liste de localisation : bâtiment, niveau, numéro. 3) Sur le plan du niveau, repérer l'accès depuis le vestiaire, les portes, les escaliers, et noter les locaux traversés. 4) Reporter les zones radiologiques de chaque local traversé et les éventuels points chauds. 5) Choisir l'itinéraire le plus court à débit faible, en évitant de traverser des zones plus classées que nécessaire. 6) Repérer le point de regroupement et les issues de secours. 7) Indiquer l'itinéraire sur le dossier pour l'équipe. Exemple de résultat : vestiaire, couloir niveau 0 (vert), escalier, niveau +4,60 (vert), local de la pompe (jaune), point d'attente dans le couloir.</div>"
      },
      {
       "titre": "Préparer matériellement l'intervention",
       "contenu": "<p>La préparation commence souvent par une <strong>visite préalable</strong> du lieu d'intervention, lorsqu'elle est possible : accès, encombrement, état du matériel, points d'ancrage, prises disponibles, emplacement du sas et des déchets. Elle permet ensuite d'établir la liste des moyens :</p>\n<ul>\n<li><strong>servitudes</strong> : puissance électrique nécessaire, prises de chantier, air comprimé, eau, éclairage ;</li>\n<li><strong>accès</strong> : échafaudage avec sa hauteur de plateau et sa charge admissible ;</li>\n<li><strong>confinement</strong> : sas, extracteur, filtres ;</li>\n<li><strong>protections</strong> : plan de pose des protections biologiques ;</li>\n<li><strong>outillage</strong> : outillage courant, spécifique, de levage, d'étalonnage ;</li>\n<li><strong>pièces et consommables</strong> : joints, visserie, lubrifiants, adhésifs, vinyle ;</li>\n<li><strong>équipements de radioprotection</strong> : appareils de mesure, tenues, dosimètres spéciaux ;</li>\n<li><strong>déchets</strong> : contenants adaptés aux catégories attendues.</li>\n</ul>\n<p>Le chargé de travaux vérifie la disponibilité de chaque élément avant le jour de l'intervention ; c'est la <strong>préparation matérielle</strong>. Un outil manquant découvert en zone oblige à sortir, se déshabiller, revenir : c'est de la dose et du temps perdus.</p>"
      },
      {
       "titre": "Planifier le chantier",
       "contenu": "<p>Le <strong>planning</strong> organise les tâches dans le temps. Le plus utilisé est le <strong>diagramme de Gantt</strong> : chaque tâche est représentée par une barre dont la longueur correspond à sa durée, placée selon sa date de début. On y fait apparaître les <strong>antériorités</strong> (une tâche ne peut commencer qu'après la fin d'une autre) et les jalons (points d'arrêt, requalification).</p>\n<p>Le <strong>chemin critique</strong> est la suite de tâches dont tout retard retarde la fin du chantier. Les autres tâches ont une <strong>marge</strong>.</p>\n<table><thead><tr><th>Tâche</th><th>Durée</th><th>Antériorité</th></tr></thead><tbody>\n<tr><td>A - Montage échafaudage</td><td>4 h</td><td>Aucune</td></tr>\n<tr><td>B - Dépose calorifuge</td><td>2 h</td><td>A</td></tr>\n<tr><td>C - Pose protections biologiques</td><td>2 h</td><td>B</td></tr>\n<tr><td>D - Construction du sas</td><td>3 h</td><td>A</td></tr>\n<tr><td>E - Intervention sur vanne</td><td>6 h</td><td>C et D</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul du chemin critique. 1) A commence à 0 h et finit à 4 h. 2) B : de 4 à 6 h ; C : de 6 à 8 h. 3) D peut commencer à 4 h et finit à 7 h. 4) E attend la fin de C (8 h) et de D (7 h) : elle commence à 8 h et finit à 14 h. 5) Durée totale : 14 h. 6) Chemin critique : A, B, C, E. D a une marge de 1 h (elle pourrait finir à 8 h sans retarder E). Conclusion : pour raccourcir le chantier, il faut agir sur A, B, C ou E ; renforcer l'équipe du sas ne sert à rien.</div>"
      },
      {
       "titre": "Les échafaudages et les accès en hauteur",
       "contenu": "<p>Les échafaudages sont l'un des premiers postes de logistique en arrêt de réacteur. Ils sont montés par du personnel formé, selon une notice ou un plan, et doivent être <strong>réceptionnés</strong> avant utilisation. La réception vérifie la conformité au besoin (hauteur de plancher, surface de travail, charge admissible), la stabilité (appuis, ancrages), la présence des protections collectives (garde-corps, lisses, plinthes) et des accès (échelles, trappes). Elle est attestée par une fiche ou une étiquette apposée à l'accès, indiquant la date et la charge admissible.</p>\n<p>En installation nucléaire, le montage tient compte de contraintes particulières :</p>\n<ul>\n<li>ne pas prendre appui sur des matériels non prévus pour cela et respecter des distances avec les matériels importants pour la sûreté ;</li>\n<li>protéger le sol et les matériels contre les chocs ;</li>\n<li>prévoir la contamination éventuelle des éléments, qui seront contrôlés au démontage ;</li>\n<li>respecter le planning, car l'échafaudage est souvent le premier maillon de la chaîne.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un utilisateur ne modifie jamais un échafaudage (retrait d'un garde-corps, déplacement d'un plancher) pour se faciliter le travail. Toute modification est faite par l'équipe de montage et suivie d'une nouvelle réception.</div>"
      },
      {
       "titre": "Manutention et levage",
       "contenu": "<p>Les opérations de manutention sont nombreuses : matériels démontés, protections, conteneurs de déchets, outillage lourd. Le levage se prépare comme une intervention à part entière.</p>\n<ul>\n<li>Connaître la <strong>masse</strong> de la charge (plan, nomenclature, plaque) et la position de son centre de gravité.</li>\n<li>Vérifier la <strong>charge maximale d'utilisation</strong> (CMU) de l'appareil (palan, pont) et des <strong>accessoires</strong> (élingues, manilles, anneaux), et la date de leur vérification périodique.</li>\n<li>Tenir compte de l'<strong>angle des élingues</strong> : plus les brins s'écartent de la verticale, plus l'effort dans chaque brin augmente. Les accessoires portent des tableaux de CMU selon le mode d'élingage et l'angle.</li>\n<li>Vérifier le <strong>point d'ancrage</strong> (sa charge admissible est indiquée par l'exploitant).</li>\n<li>Baliser la zone sous la charge et désigner un seul <strong>chef de manœuvre</strong> qui communique avec le conducteur par gestes codifiés ou radio.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une charge contaminée qui tombe peut se briser, disperser de la contamination et endommager un matériel de sûreté. En installation nucléaire, les trajets de levage au-dessus de matériels sensibles (piscine, circuits, armoires) sont réglementés et indiqués dans le dossier.</div>"
      },
      {
       "titre": "Repli et remise en état",
       "contenu": "<p>Un chantier n'est terminé que lorsque la zone est rendue dans l'état prévu. Le <strong>repli</strong> comprend :</p>\n<ul>\n<li>l'évacuation des déchets et des outillages, avec contrôle radiologique ;</li>\n<li>le démontage du sas après contrôle et, si nécessaire, décontamination des surfaces ;</li>\n<li>la dépose des protections biologiques et la repose du calorifuge ;</li>\n<li>le démontage de l'échafaudage ;</li>\n<li>le retrait des servitudes provisoires ;</li>\n<li>une <strong>cartographie</strong> et un contrôle de propreté finaux ;</li>\n<li>la réception de la zone par l'exploitant et le retour du dossier complet.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les équipes de logistique se relaient sur de nombreux chantiers simultanés. Un tableau de suivi partagé (souvent affiché au bureau de chantier) indique pour chaque activité l'état de chaque prérequis : échafaudage réceptionné, calorifuge déposé, protections posées, sas réceptionné. Le chargé de travaux de maintenance le consulte avant de mobiliser son équipe.</div>"
      }
     ],
     "points_cles": [
      "La logistique (échafaudages, calorifuge, protections, servitudes, sas, déchets) conditionne toute la maintenance.",
      "Repère géographique pour les locaux, repère fonctionnel pour les matériels.",
      "L'itinéraire d'accès se prépare sur plan en reportant zones et points chauds.",
      "La préparation matérielle évite les allers-retours en zone, donc de la dose.",
      "Le Gantt représente les tâches et leurs antériorités ; le chemin critique fixe la durée.",
      "Tout levage exige masse connue, CMU vérifiées, angle d'élingage pris en compte, zone balisée, un seul chef de manœuvre.",
      "Les trajets de levage au-dessus de matériels sensibles sont réglementés.",
      "Le repli se termine par une cartographie finale et la réception de la zone."
     ],
     "lexique": [
      {
       "terme": "Logistique de maintenance",
       "def": "Activités qui rendent possible l'intervention de maintenance : accès, servitudes, protections, déchets."
      },
      {
       "terme": "Calorifuge",
       "def": "Isolation thermique des tuyauteries et matériels."
      },
      {
       "terme": "Servitudes",
       "def": "Fluides et énergies distribués provisoirement sur un chantier : électricité, air, eau, éclairage."
      },
      {
       "terme": "Repère géographique",
       "def": "Identification d'un local par bâtiment, niveau et numéro."
      },
      {
       "terme": "Repère fonctionnel",
       "def": "Identification d'un matériel par tranche, système, numéro et type."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Planning où chaque tâche est représentée par une barre proportionnelle à sa durée."
      },
      {
       "terme": "Chemin critique",
       "def": "Suite de tâches dont tout retard retarde la fin du chantier."
      },
      {
       "terme": "CMU",
       "def": "Charge maximale d'utilisation d'un appareil ou d'un accessoire de levage."
      },
      {
       "terme": "Chef de manœuvre",
       "def": "Personne unique qui dirige une opération de levage et communique avec le conducteur."
      },
      {
       "terme": "Repli",
       "def": "Ensemble des opérations de fin de chantier jusqu'à la remise de la zone."
      }
     ]
    },
    {
     "id": "btiin-decontamination-dechets",
     "titre": "Décontamination et gestion des déchets radioactifs",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Choisir un procédé de décontamination selon la surface et la contamination",
      "Classer un déchet radioactif selon son activité et sa durée de vie",
      "Associer chaque catégorie de déchets à sa filière de gestion",
      "Appliquer les règles de tri, de conditionnement et de traçabilité sur chantier",
      "Réduire le volume de déchets produits par une intervention"
     ],
     "sections": [
      {
       "titre": "Pourquoi et comment décontaminer",
       "contenu": "<p>La <strong>décontamination</strong> consiste à retirer tout ou partie de la contamination d'une surface, d'un matériel ou d'une personne. Elle a plusieurs buts : réduire l'exposition des intervenants (moins de débit de dose, moins de risque de contamination interne), permettre la sortie d'un outillage ou d'un matériel, faciliter une intervention ultérieure, réduire la catégorie des déchets produits.</p>\n<p>On mesure son efficacité par le <strong>facteur de décontamination</strong> : FD = activité avant / activité après. Un FD de 10 signifie que l'activité a été divisée par 10.</p>\n<table><thead><tr><th>Famille de procédés</th><th>Exemples</th><th>Avantages</th><th>Inconvénients</th></tr></thead><tbody>\n<tr><td>Mécaniques doux</td><td>Essuyage humide, aspiration filtrée, adhésif pelable</td><td>Simples, peu de déchets</td><td>Efficaces sur la contamination labile seulement</td></tr>\n<tr><td>Mécaniques abrasifs</td><td>Brossage, ponçage, grenaillage, écroûtage du béton</td><td>Retirent la contamination fixée en surface</td><td>Poussières, risque de contamination atmosphérique, bruit</td></tr>\n<tr><td>Hydrauliques</td><td>Jet d'eau haute pression</td><td>Efficaces sur grandes surfaces</td><td>Effluents liquides, projections, aérosols</td></tr>\n<tr><td>Chimiques</td><td>Solutions acides ou basiques, gels, mousses</td><td>Atteignent des formes complexes, gels et mousses limitent les volumes</td><td>Risque chimique, effluents à traiter</td></tr>\n<tr><td>Électrochimiques</td><td>Électropolissage de pièces métalliques</td><td>Très efficaces sur métal</td><td>Réservés aux pièces démontées, en atelier</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> toute décontamination produit des <strong>déchets secondaires</strong> (chiffons, abrasifs, effluents, filtres) et peut mettre la contamination en suspension. On commence toujours par le procédé le plus doux, sous confinement adapté, en contrôlant l'air si le procédé est abrasif.</div>"
      },
      {
       "titre": "La notion de déchet radioactif et le zonage déchets",
       "contenu": "<p>Un <strong>déchet radioactif</strong> est une substance radioactive pour laquelle aucune utilisation ultérieure n'est prévue. En France, il n'existe pas de seuil de libération général en dessous duquel un déchet issu d'une zone nucléaire pourrait être traité comme un déchet ordinaire : la gestion repose sur un <strong>zonage déchets</strong> défini par l'exploitant.</p>\n<ul>\n<li>Les <strong>zones à déchets conventionnels</strong> produisent des déchets qui ne sont ni contaminés ni activés ; ils suivent les filières classiques.</li>\n<li>Les <strong>zones à production possible de déchets nucléaires</strong> produisent des déchets qui sont, par principe, gérés dans les filières de déchets radioactifs, même si leur radioactivité est très faible ou non mesurable.</li>\n</ul>\n<p>Conséquence directe pour l'intervenant : tout ce qui entre dans une zone à production possible de déchets nucléaires et qui n'en ressort pas comme matériel réutilisable deviendra un déchet nucléaire. D'où l'importance de limiter les emballages et objets inutiles introduits en zone.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le meilleur déchet est celui qu'on ne produit pas. On retire les emballages hors zone, on n'introduit que le nécessaire, on réutilise ce qui peut l'être après contrôle.</div>"
      },
      {
       "titre": "La classification des déchets radioactifs",
       "contenu": "<p>Les déchets sont classés selon deux critères : leur <strong>niveau d'activité</strong> et la <strong>période</strong> des radionucléides qu'ils contiennent. On parle de <strong>vie courte</strong> lorsque les principaux radionucléides ont une période inférieure ou égale à 31 ans, et de <strong>vie longue</strong> au-delà.</p>\n<table><thead><tr><th>Catégorie</th><th>Origine typique</th><th>Mode de gestion</th></tr></thead><tbody>\n<tr><td>Vie très courte (VTC), période inférieure à 100 jours</td><td>Médecine nucléaire, recherche</td><td>Entreposage pour décroissance, puis filière conventionnelle</td></tr>\n<tr><td>Très faible activité (TFA)</td><td>Démantèlement : gravats, terres, ferrailles faiblement contaminés</td><td>Stockage en surface au centre industriel de regroupement, d'entreposage et de stockage (Cires) de l'Andra, dans l'Aube</td></tr>\n<tr><td>Faible et moyenne activité à vie courte (FMA-VC)</td><td>Exploitation et maintenance : tenues, gants, filtres, outils, résines, pièces</td><td>Stockage en surface au centre de stockage de l'Aube (CSA)</td></tr>\n<tr><td>Faible activité à vie longue (FA-VL)</td><td>Graphite d'anciens réacteurs, déchets radifères</td><td>Solutions de stockage à l'étude ; entreposage</td></tr>\n<tr><td>Moyenne activité à vie longue (MA-VL)</td><td>Structures métalliques du combustible, déchets de procédés</td><td>Entreposage ; projet de stockage géologique profond Cigéo</td></tr>\n<tr><td>Haute activité (HA)</td><td>Résidus du traitement du combustible usé, vitrifiés</td><td>Entreposage ; projet Cigéo</td></tr>\n</tbody></table>\n<p>Les déchets produits sur les chantiers de maintenance des réacteurs sont, pour l'essentiel, des déchets FMA-VC et TFA. Les chantiers de démantèlement produisent de grandes quantités de TFA.</p>"
      },
      {
       "titre": "Tri et collecte sur le chantier",
       "contenu": "<p>Le <strong>tri à la source</strong> est la responsabilité de chaque intervenant. Il est organisé selon les consignes de l'exploitant, qui définissent des familles de déchets en fonction de leur traitement ultérieur. Les familles courantes sont :</p>\n<ul>\n<li>les déchets <strong>incinérables</strong> (textiles, papiers, plastiques sans chlore selon les filières) ;</li>\n<li>les déchets <strong>compactables</strong> non incinérables ;</li>\n<li>les déchets <strong>métalliques</strong> (pièces, visserie, outillage hors d'usage) ;</li>\n<li>les <strong>filtres</strong> et résines ;</li>\n<li>les déchets <strong>liquides</strong> et effluents, collectés séparément ;</li>\n<li>les déchets <strong>spéciaux</strong> : déchets chimiques contaminés, amiantés, piles, aérosols, objets coupants.</li>\n</ul>\n<p>Chaque famille a son contenant identifié (sac de couleur, fût, caisson) et son étiquette. Les contenants sont placés à proximité immédiate du chantier, en dehors des passages et à distance des points de travail pour ne pas ajouter de débit de dose.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conditionner un sac de déchets en sortie de sas. 1) Vérifier que le sac correspond à la famille du déchet (couleur, étiquette). 2) Ne pas le remplir au-delà de la limite (poids et volume indiqués), sans objet coupant non protégé ni liquide. 3) Fermer le sac selon la technique prévue (col de cygne, adhésif). 4) Mesurer le débit de dose au contact et, si demandé, à 1 m ; contrôler l'absence de contamination externe du sac. 5) Remplir l'étiquette : chantier, local, famille, date, débit de dose, nom ; ou la fiche de suivi associée. 6) Déposer le sac dans la zone d'entreposage tampon prévue. Un sac dont le débit dépasse la valeur fixée par la consigne est signalé au service de radioprotection avant tout déplacement.</div>"
      },
      {
       "titre": "Conditionnement, traçabilité et évacuation",
       "contenu": "<p>Le <strong>conditionnement</strong> consiste à placer les déchets dans un emballage adapté à leur transport, leur entreposage et leur stockage : fûts métalliques, caissons, coques en béton ; certains déchets sont compactés, enrobés ou bloqués dans un liant (béton, résine) pour les immobiliser. Les colis doivent respecter les <strong>spécifications d'acceptation</strong> du centre de destination : nature des déchets, activité maximale, absence de liquides libres, masse, débit de dose au contact.</p>\n<p>La <strong>traçabilité</strong> suit le déchet de sa production à son stockage : chaque contenant porte une identification ; une fiche ou un enregistrement informatique indique sa provenance, son contenu, ses mesures (débit de dose, contamination, éventuellement spectrométrie pour identifier les radionucléides), son poids. Cette <strong>caractérisation</strong> permet de classer le colis et d'en justifier l'acceptation.</p>\n<p>L'évacuation se fait par des circuits définis : zone d'entreposage tampon du chantier, puis aire d'entreposage du site, puis installation de traitement (incinération, fusion, compactage) ou d'expédition. Le transport sur la voie publique est soumis à la réglementation du transport de matières dangereuses (classe 7).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un déchet mal trié (un objet métallique dans un sac incinérable, une bombe aérosol dans un fût compactable) peut provoquer le refus d'un colis, un incident dans une installation de traitement ou une non-conformité déclarée. Les exploitants suivent la qualité du tri par chantier et par entreprise.</div>"
      },
      {
       "titre": "Réduire les volumes et les effluents",
       "contenu": "<p>La réduction des déchets est un objectif de l'exploitant et une obligation réglementaire. Sur un chantier, elle passe par des gestes simples :</p>\n<ul>\n<li>déballer hors zone et n'introduire que le nécessaire ;</li>\n<li>utiliser des outillages et protections <strong>réutilisables</strong>, décontaminables, gérés par le magasin de zone ;</li>\n<li>protéger les sols et matériels par des films pour éviter de devoir les décontaminer ;</li>\n<li>choisir des procédés de décontamination générant peu de déchets secondaires (gels, mousses, aspiration) ;</li>\n<li>trier finement pour orienter vers les filières de traitement qui réduisent les volumes (incinération, fusion des métaux, compactage).</li>\n</ul>\n<p>Les <strong>effluents liquides</strong> (eaux de décontamination, de rinçage, de douche) sont collectés dans des réseaux spécifiques et traités ; les rejets de l'installation dans l'environnement sont autorisés dans des limites fixées et surveillés. On ne vide jamais un seau d'eau de décontamination dans un évier ou un siphon de sol sans savoir à quel réseau il est raccordé.</p>"
      },
      {
       "titre": "Les déchets sur un chantier type : un exemple raisonné",
       "contenu": "<p>Prenons le remplacement d'un joint de chapeau de vanne dans un local en zone jaune, sous sas. Les déchets attendus peuvent être prévus dès la préparation :</p>\n<table><thead><tr><th>Déchet</th><th>Famille</th><th>Contenant</th><th>Remarque</th></tr></thead><tbody>\n<tr><td>Tenues, surbottes, gants, adhésifs</td><td>Incinérable</td><td>Sac de la couleur prévue</td><td>Production à chaque sortie de sas</td></tr>\n<tr><td>Vinyle du sas en fin de chantier</td><td>Incinérable ou compactable selon la consigne</td><td>Sac ou caisson</td><td>Volume important : découper et compacter</td></tr>\n<tr><td>Ancien joint métalloplastique</td><td>Selon composition (métallique ou spécial)</td><td>Fût dédié</td><td>Peut présenter un débit de dose au contact</td></tr>\n<tr><td>Chiffons de décontamination de la portée</td><td>Incinérable</td><td>Sac</td><td>Ne pas y mettre de solvant liquide</td></tr>\n<tr><td>Filtre de l'extracteur</td><td>Filtres</td><td>Emballage spécifique</td><td>Changement selon procédure</td></tr>\n</tbody></table>\n<p>Cette prévision permet d'apporter les bons contenants dès l'installation du chantier, d'organiser une aire tampon proche de la sortie du sas et d'anticiper l'évacuation. Pendant l'intervention, les contenants pleins sont évacués régulièrement pour ne pas accumuler de débit de dose dans la zone de travail.</p>"
      }
     ],
     "points_cles": [
      "La décontamination réduit l'exposition et les déchets ; son efficacité se mesure par le facteur de décontamination.",
      "On commence par le procédé le plus doux, sous confinement, en limitant les déchets secondaires.",
      "Il n'existe pas en France de seuil de libération général : le zonage déchets décide de la filière.",
      "Vie courte : période inférieure ou égale à 31 ans.",
      "TFA vers le Cires, FMA-VC vers le CSA ; HA et MA-VL en entreposage, projet Cigéo.",
      "Le tri à la source par familles est la responsabilité de chaque intervenant.",
      "Chaque contenant est mesuré, étiqueté et tracé jusqu'à son stockage.",
      "Les effluents liquides sont collectés dans des réseaux dédiés et traités."
     ],
     "lexique": [
      {
       "terme": "Décontamination",
       "def": "Retrait de tout ou partie de la contamination d'une surface, d'un objet ou d'une personne."
      },
      {
       "terme": "Facteur de décontamination",
       "def": "Rapport entre l'activité avant et l'activité après décontamination."
      },
      {
       "terme": "Déchet secondaire",
       "def": "Déchet produit par une opération de décontamination ou de traitement."
      },
      {
       "terme": "Zonage déchets",
       "def": "Découpage d'une installation entre zones à déchets conventionnels et zones à production possible de déchets nucléaires."
      },
      {
       "terme": "TFA",
       "def": "Déchets de très faible activité, stockés en surface au Cires."
      },
      {
       "terme": "FMA-VC",
       "def": "Déchets de faible et moyenne activité à vie courte, stockés au CSA."
      },
      {
       "terme": "Vie courte",
       "def": "Se dit d'un déchet dont les principaux radionucléides ont une période inférieure ou égale à 31 ans."
      },
      {
       "terme": "Conditionnement",
       "def": "Mise des déchets dans un emballage adapté au transport, à l'entreposage et au stockage."
      },
      {
       "terme": "Caractérisation",
       "def": "Mesures permettant de connaître le contenu radiologique d'un déchet ou d'un colis."
      },
      {
       "terme": "Andra",
       "def": "Agence nationale pour la gestion des déchets radioactifs."
      }
     ]
    },
    {
     "id": "btiin-demantelement-assainissement",
     "titre": "Démantèlement et assainissement des installations",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Décrire les étapes de la vie d'une installation jusqu'à son déclassement",
      "Expliquer la stratégie de démantèlement retenue en France",
      "Comparer les principales techniques de découpe et leurs risques",
      "Organiser un chantier de découpe sous confinement",
      "Expliquer l'assainissement des structures et la notion d'état final"
     ],
     "sections": [
      {
       "titre": "De l'arrêt définitif au déclassement",
       "contenu": "<p>Une installation nucléaire n'est pas éternelle : réacteurs anciens, ateliers du cycle remplacés par des installations plus modernes, laboratoires dont la mission est terminée. Le <strong>démantèlement</strong> est l'ensemble des opérations techniques et administratives qui permettent, après l'arrêt définitif, d'atteindre un <strong>état final</strong> défini, puis de retirer l'installation de la liste des INB : c'est le <strong>déclassement</strong>.</p>\n<ol>\n<li><strong>Arrêt définitif</strong> du fonctionnement, déclaré à l'autorité.</li>\n<li><strong>Préparation</strong> : évacuation du combustible et des matières, vidange et rinçage des circuits, état des lieux radiologique.</li>\n<li>Autorisation de démantèlement par <strong>décret</strong>, qui fixe les grandes étapes et l'état final visé.</li>\n<li><strong>Démontage</strong> des équipements : tuyauteries, réservoirs, structures internes, en commençant souvent par les moins actifs pour préparer l'accès aux plus actifs.</li>\n<li><strong>Assainissement</strong> des structures : retrait de la contamination et de l'activation résiduelles des murs, sols, plafonds.</li>\n<li><strong>Contrôles</strong> de l'état final, puis déclassement.</li>\n</ol>\n<p>La réglementation française impose que le démantèlement soit engagé dans un délai aussi court que possible après l'arrêt : c'est la stratégie de <strong>démantèlement immédiat</strong>, qui évite de reporter la charge sur les générations futures et permet de s'appuyer sur la connaissance des personnes qui ont exploité l'installation.</p>"
      },
      {
       "titre": "Des chantiers différents de la maintenance",
       "contenu": "<p>Les chantiers de démantèlement présentent des particularités :</p>\n<table><thead><tr><th>Aspect</th><th>Maintenance</th><th>Démantèlement</th></tr></thead><tbody>\n<tr><td>Objectif</td><td>Remettre le matériel en état</td><td>Découper, retirer, évacuer</td></tr>\n<tr><td>Durée</td><td>Heures à semaines</td><td>Mois à années</td></tr>\n<tr><td>Connaissance de l'installation</td><td>Bonne, documentation à jour</td><td>Parfois incomplète pour les installations anciennes ; découverte de situations imprévues</td></tr>\n<tr><td>Déchets</td><td>Volumes modérés</td><td>Volumes très importants, beaucoup de TFA</td></tr>\n<tr><td>Risques dominants</td><td>Exposition externe, contamination</td><td>Contamination atmosphérique (découpe), incendie, chute de charges, coactivité, parfois amiante ou plomb</td></tr>\n</tbody></table>\n<p>Les installations en démantèlement restent des INB soumises aux mêmes exigences de sûreté, de radioprotection et de qualité. Les fonctions de confinement et de maîtrise de la criticité (s'il reste de la matière fissile) restent essentielles.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans une installation ancienne, un réservoir « vide » ou une tuyauterie « rincée » sur les plans peut encore contenir des dépôts ou des liquides. Avant toute découpe, on vérifie l'état réel par des mesures et des contrôles de vidange ; on ne se fie jamais seulement aux documents.</div>"
      },
      {
       "titre": "Caractériser avant de démanteler",
       "contenu": "<p>Le démantèlement commence par la connaissance de l'état de l'installation. Cette étape, appelée <strong>caractérisation</strong> ou état des lieux radiologique, conditionne le choix des techniques, l'évaluation des doses et la prévision des déchets.</p>\n<ul>\n<li>L'<strong>historique</strong> de l'installation est reconstitué : procédés utilisés, incidents passés (fuites, débordements), modifications, matières manipulées.</li>\n<li>Des <strong>mesures</strong> sont réalisées : cartographies de débit de dose, frottis, prélèvements de matériaux (raclages, carottages), mesures par spectrométrie gamma pour identifier les radionucléides, recherche d'émetteurs alpha.</li>\n<li>Les résultats sont reportés sur des plans pour définir les zones par niveau de contamination et estimer les volumes de déchets par catégorie.</li>\n</ul>\n<p>Dans les installations anciennes, cette caractérisation doit aussi rechercher les <strong>risques conventionnels cachés</strong> : amiante dans les calorifuges ou les joints, peintures au plomb, produits chimiques résiduels, structures fragilisées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un démantèlement bien caractérisé est un démantèlement plus sûr, moins dosant et produisant moins de déchets mal classés. Les mesures de caractérisation sont tracées comme les mesures de contrôle final.</div>"
      },
      {
       "titre": "Les techniques de découpe",
       "contenu": "<table><thead><tr><th>Technique</th><th>Principe</th><th>Points forts</th><th>Contraintes et risques</th></tr></thead><tbody>\n<tr><td>Scie alternative ou à ruban</td><td>Découpe mécanique par enlèvement de copeaux</td><td>Peu d'aérosols, maîtrise facile</td><td>Lente, efforts importants</td></tr>\n<tr><td>Cisaille hydraulique, grignoteuse</td><td>Découpe par cisaillement</td><td>Pas de copeaux ni d'étincelles</td><td>Épaisseur limitée, déformation des bords</td></tr>\n<tr><td>Disqueuse (meuleuse)</td><td>Abrasion par disque</td><td>Polyvalente, légère</td><td>Étincelles (incendie), aérosols, risque de coupure</td></tr>\n<tr><td>Coupage plasma</td><td>Arc électrique et gaz ionisé qui fondent le métal</td><td>Rapide sur métaux épais</td><td>Fumées et aérosols abondants, rayonnement lumineux, incendie</td></tr>\n<tr><td>Oxycoupage</td><td>Combustion de l'acier dans un jet d'oxygène</td><td>Grandes épaisseurs d'acier au carbone</td><td>Ne convient pas à l'inox, incendie, fumées</td></tr>\n<tr><td>Jet d'eau abrasif</td><td>Jet d'eau très haute pression chargé d'abrasif</td><td>Pas d'échauffement, tous matériaux</td><td>Effluents et boues contaminés, bruit</td></tr>\n<tr><td>Découpe laser</td><td>Faisceau laser qui fond le matériau</td><td>Précise, pilotable à distance</td><td>Équipement spécialisé, aérosols</td></tr>\n</tbody></table>\n<p>Pour les éléments les plus irradiants (structures internes de cuve), la découpe est réalisée <strong>à distance</strong>, par télé-opération (bras robotisés, outils montés sur des porteurs), souvent sous eau pour bénéficier de la protection de l'eau et limiter les aérosols.</p>"
      },
      {
       "titre": "Organiser un chantier de découpe",
       "contenu": "<p>Un chantier de découpe combine tous les savoirs vus précédemment : confinement, radioprotection, risques conventionnels, déchets.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer la découpe d'une tuyauterie contaminée par une technique par points chauds. 1) Vérifier l'état de la tuyauterie : vidange constatée, mesure du débit de dose et de la contamination, absence de pression. 2) Choisir la technique en fonction du diamètre, de l'épaisseur, du matériau et des aérosols produits ; préférer une technique à froid si possible. 3) Définir le confinement : sas en dépression avec filtration adaptée aux fumées, aspiration à la source au point de coupe, balise aérosols. 4) Prévenir l'incendie : permis de feu, retrait ou protection des matières combustibles (vinyle protégé, déchets évacués), extincteurs, surveillance après travaux. 5) Prévoir les EPI : tenue adaptée, protection respiratoire, protection des yeux. 6) Prévoir le maintien des tronçons (élingage avant coupe) et leur conditionnement direct dans les contenants à déchets. 7) Définir les conditions d'arrêt : alarme balise, perte de dépression, départ de feu. Le résultat est formalisé dans l'analyse de risques et le mode opératoire du chantier.</div>\n<p>Le <strong>découpage en tronçons</strong> est dimensionné en fonction des contenants de déchets : on découpe aux dimensions qui permettent de remplir les colis sans vide inutile, ce qui réduit le nombre de colis.</p>"
      },
      {
       "titre": "Assainir les structures",
       "contenu": "<p>Une fois les équipements retirés, il reste les structures de génie civil : murs, sols, plafonds en béton. Leur contamination ou leur activation est en général limitée à une profondeur de quelques millimètres à quelques centimètres. L'<strong>assainissement</strong> vise à retirer cette couche.</p>\n<ul>\n<li>Une <strong>cartographie</strong> radiologique détaillée des surfaces identifie les zones à traiter et la profondeur de pénétration estimée (par carottages et mesures).</li>\n<li>Les techniques courantes sont l'<strong>écroûtage</strong> (retrait mécanique de la surface du béton par burinage, rabotage, fraisage), le <strong>grenaillage</strong>, l'hydrodémolition.</li>\n<li>Les déchets de béton et gravats sont majoritairement des déchets TFA.</li>\n<li>Après assainissement, des <strong>mesures de contrôle</strong> démontrent que l'état visé est atteint ; elles sont souvent vérifiées par un organisme indépendant et par l'exploitant.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'objectif de l'assainissement est d'atteindre l'état final défini dans le décret de démantèlement. Les mesures finales doivent être rigoureusement tracées : elles conditionnent le déclassement de l'installation.</div>"
      },
      {
       "titre": "Gérer les flux de déchets du démantèlement",
       "contenu": "<p>Un chantier de démantèlement produit en continu des quantités importantes de déchets : métaux découpés, gravats, équipements, consommables, effluents. Leur gestion devient souvent le facteur qui fixe le rythme du chantier : si les contenants ne sont pas évacués, la découpe doit s'arrêter.</p>\n<p>L'organisation repose sur quelques principes :</p>\n<ul>\n<li>prévoir dès la préparation les <strong>catégories</strong> attendues (TFA, FMA-VC, éventuellement vie longue) et les quantités par catégorie, d'après la caractérisation ;</li>\n<li>organiser des <strong>aires de transit</strong> proches du chantier, balisées, avec les contenants adaptés ;</li>\n<li><strong>séparer</strong> dès la découpe les éléments de catégories différentes, pour ne pas classer un grand volume peu actif dans une catégorie supérieure à cause d'un petit élément plus actif ;</li>\n<li>favoriser les filières de <strong>réduction de volume</strong> : fusion des métaux, compactage, incinération ;</li>\n<li>tenir à jour la <strong>traçabilité</strong> de chaque colis, qui sera contrôlée par le centre de destination.</li>\n</ul>\n<p>Le technicien TIIN joue un rôle direct dans ce tri à la source : une découpe bien pensée et un tri rigoureux réduisent à la fois les coûts, les volumes stockés et les doses liées aux manutentions.</p>"
      },
      {
       "titre": "Les métiers et l'avenir du démantèlement",
       "contenu": "<p>Plusieurs réacteurs de première génération, des réacteurs de recherche et d'anciennes installations du cycle sont en cours de démantèlement en France, et d'autres le seront dans les décennies à venir. Ces chantiers emploient de nombreux techniciens : découpe, décontamination, logistique, gestion des déchets, radioprotection, mesure.</p>\n<p>Ils favorisent le développement de techniques nouvelles : robotique et télé-opération, numérisation des installations (maquettes 3D, réalité virtuelle pour préparer les gestes), procédés de décontamination produisant moins de déchets, recyclage des métaux très faiblement radioactifs dans des conditions encadrées.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un chantier de démantèlement de longue durée, l'équipe est stable et les intervenants connaissent bien l'installation. Le risque est l'habitude : la répétition des mêmes gestes pendant des mois peut conduire à relâcher la vigilance. Les briefings quotidiens et la minute d'arrêt gardent toute leur importance, d'autant que chaque découpe modifie la situation radiologique du chantier.</div>"
      }
     ],
     "points_cles": [
      "Le démantèlement mène de l'arrêt définitif à un état final, puis au déclassement de l'INB.",
      "La France applique la stratégie de démantèlement immédiat, dans un délai aussi court que possible.",
      "Le démantèlement est autorisé par décret, qui fixe l'état final visé.",
      "Une installation ancienne peut réserver des surprises : on vérifie l'état réel avant toute découpe.",
      "Techniques à froid (scie, cisaille, jet d'eau) ou à chaud (plasma, oxycoupage, laser), chacune avec ses aérosols et risques.",
      "Une découpe par points chauds exige confinement, aspiration à la source, permis de feu et balise aérosols.",
      "L'assainissement retire la couche contaminée des structures, souvent par écroûtage.",
      "Les mesures finales tracées conditionnent le déclassement."
     ],
     "lexique": [
      {
       "terme": "Démantèlement",
       "def": "Ensemble des opérations qui suivent l'arrêt définitif d'une installation jusqu'à l'état final."
      },
      {
       "terme": "Déclassement",
       "def": "Décision qui retire une installation de la liste des INB après démantèlement."
      },
      {
       "terme": "État final",
       "def": "État de l'installation et du site visé à l'issue du démantèlement."
      },
      {
       "terme": "Assainissement",
       "def": "Retrait de la contamination ou de l'activation résiduelle des structures."
      },
      {
       "terme": "Écroûtage",
       "def": "Retrait mécanique de la couche superficielle d'un béton."
      },
      {
       "terme": "Télé-opération",
       "def": "Réalisation d'opérations à distance au moyen d'outils ou de robots pilotés."
      },
      {
       "terme": "Coupage plasma",
       "def": "Découpe des métaux par un arc électrique et un gaz ionisé."
      },
      {
       "terme": "Jet d'eau abrasif",
       "def": "Découpe par un jet d'eau à très haute pression chargé d'abrasif."
      },
      {
       "terme": "Démantèlement immédiat",
       "def": "Stratégie consistant à démanteler dans un délai aussi court que possible après l'arrêt."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Analyser les documents d'un chantier en environnement nucléaire",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "btiin-doc-dossier-intervention",
     "titre": "Le dossier d'intervention et le document de suivi",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les pièces d'un dossier d'intervention et leur rôle",
      "Extraire d'un ordre de travail les informations utiles à la préparation",
      "Lire un document de suivi : étapes, valeurs à relever, points d'arrêt",
      "Repérer les incohérences et les informations manquantes d'un dossier",
      "Rédiger une analyse structurée d'un dossier comme à l'épreuve écrite"
     ],
     "sections": [
      {
       "titre": "Le dossier d'intervention : à quoi il sert",
       "contenu": "<p>À l'épreuve écrite de préparation de chantier, comme sur le terrain, tout part du <strong>dossier d'intervention</strong> (on dit aussi dossier de travaux ou dossier de chantier). C'est l'ensemble des documents qui décrivent ce qu'il faut faire, où, quand, comment, avec quels moyens et sous quelles conditions de sécurité, de radioprotection et de qualité. Il accompagne l'équipe pendant toute l'intervention et revient complété à la fin : il devient alors la preuve de ce qui a été fait.</p>\n<p>Un dossier complet comprend généralement :</p>\n<table><thead><tr><th>Pièce</th><th>Ce qu'on y trouve</th></tr></thead><tbody>\n<tr><td>Page de garde et sommaire</td><td>Identification du chantier, liste des pièces et de leurs indices</td></tr>\n<tr><td>Ordre de travail</td><td>Matériel concerné (repère fonctionnel), nature des travaux, dates, entreprise, références</td></tr>\n<tr><td>Analyse de risques</td><td>Risques par étape et mesures de prévention</td></tr>\n<tr><td>Documents de radioprotection</td><td>Régime de travail radiologique, évaluation dosimétrique prévisionnelle, cartographie</td></tr>\n<tr><td>Mode opératoire ou gamme</td><td>Déroulement détaillé des opérations</td></tr>\n<tr><td>Document de suivi d'intervention</td><td>Étapes à signer, valeurs à relever, points d'arrêt</td></tr>\n<tr><td>Plans et schémas</td><td>Plan de localisation, plan d'ensemble du matériel, schéma du circuit</td></tr>\n<tr><td>Autorisations</td><td>Autorisation de travail (consignation), permis de feu</td></tr>\n<tr><td>Fiches annexes</td><td>Fiche de réception du sas, fiche de suivi des déchets, fiches d'écart vierges</td></tr>\n</tbody></table>"
      },
      {
       "titre": "Vocabulaire et repères à reconnaître",
       "contenu": "<ul>\n<li><strong>Indice</strong> (ou révision) : lettre ou numéro qui identifie la version d'un document ; toutes les pièces doivent être à l'indice en vigueur.</li>\n<li><strong>Repère fonctionnel</strong> : identification du matériel, par exemple « 2 TRE 104 VD » : tranche 2, système élémentaire TRE, numéro d'ordre 104, type de matériel VD (vanne). Les codes de système et de type sont propres à chaque exploitant.</li>\n<li><strong>Repère géographique</strong> : identification du local, par exemple « BAN – niveau +4,60 – local 0412 ».</li>\n<li><strong>Étape</strong> : opération élémentaire numérotée du document de suivi.</li>\n<li><strong>PA / PN</strong> : point d'arrêt, point de notification.</li>\n<li><strong>Visa</strong> : signature et date apposées par la personne qui a réalisé ou contrôlé une étape.</li>\n<li><strong>Requalification</strong> : essais qui valident la remise en service du matériel.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'exemple de repère ci-dessus est fictif, comme tous les documents de ce chapitre. Dans un sujet ou sur un site, les codes sont expliqués dans une légende ou un document ressource : il faut toujours s'y référer plutôt que deviner.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un dossier d'intervention en sept étapes. 1) <strong>Identifier</strong> : quel matériel (repère fonctionnel), quel local (repère géographique), quel type de travaux, quelles dates, quel indice de document. 2) <strong>Vérifier la cohérence</strong> : le même repère apparaît-il partout (ordre de travail, autorisation de travail, document de suivi, plan) ? Les indices sont-ils cohérents avec le sommaire ? 3) <strong>Parcourir le déroulement</strong> : lire toutes les étapes du document de suivi sans s'arrêter, pour avoir une vision d'ensemble. 4) <strong>Repérer les points sensibles</strong> : points d'arrêt, valeurs à relever, opérations sous confinement, levages, opérations par points chauds. 5) <strong>Relier aux risques</strong> : pour chaque étape sensible, trouver dans l'analyse de risques et les documents de radioprotection les parades prévues. 6) <strong>Lister les moyens</strong> : outillage, pièces, consommables, appareils de mesure, contenants à déchets, servitudes. 7) <strong>Noter les questions</strong> : informations manquantes, incohérences, ambiguïtés, à poser au chargé de travaux avant de commencer.</div>\n<p>À l'examen, la plupart des questions portent sur l'une de ces sept étapes : « relever le repère », « justifier la présence d'un point d'arrêt », « lister l'outillage », « identifier l'incohérence ».</p>"
      },
      {
       "titre": "Exemple : le document décrit",
       "contenu": "<p>On étudie un dossier fictif de remplacement du joint de chapeau d'une vanne manuelle. Extraits :</p>\n<p><strong>Ordre de travail</strong> : matériel 2 TRE 104 VD ; local BAN +4,60 0412 ; nature : remplacement du joint de chapeau suite à fuite constatée ; type : maintenance corrective ; entreprise prestataire : équipe robinetterie ; date prévue : J+3 ; mode opératoire MO-TRE-07 indice C.</p>\n<p><strong>Autorisation de travail</strong> : matériel consigné 2 TRE 104 VD ; isolements : 2 TRE 103 VD et 2 TRE 105 VD fermés et condamnés ; purge 2 TRE 210 VD ouverte ; circuit vidangé.</p>\n<p><strong>Document de suivi</strong> (mode opératoire MO-TRE-07 indice B) :</p>\n<table><thead><tr><th>Étape</th><th>Opération</th><th>Valeur / critère</th><th>Point</th><th>Visa</th></tr></thead><tbody>\n<tr><td>1</td><td>Vérifier la consignation sur place et l'absence de pression</td><td>Manomètre à 0 bar</td><td>-</td><td></td></tr>\n<tr><td>2</td><td>Mettre en place le sas et le faire réceptionner</td><td>Dépression conforme</td><td>PA radioprotection</td><td></td></tr>\n<tr><td>3</td><td>Desserrer les 8 écrous du chapeau, déposer le chapeau au palan</td><td>Masse du chapeau 45 kg</td><td>-</td><td></td></tr>\n<tr><td>4</td><td>Déposer l'ancien joint, nettoyer et contrôler les portées</td><td>Aucune rayure radiale</td><td>PA contrôle</td><td></td></tr>\n<tr><td>5</td><td>Poser le joint neuf réf. J-104-B, reposer le chapeau</td><td>Référence conforme</td><td>-</td><td></td></tr>\n<tr><td>6</td><td>Serrer en croix en 3 passes</td><td>Couple final 180 N.m</td><td>-</td><td></td></tr>\n<tr><td>7</td><td>Inspection de propreté, retrait des obturateurs</td><td>Absence de corps étranger</td><td>PN exploitant</td><td></td></tr>\n<tr><td>8</td><td>Restituer l'autorisation de travail, assister à la requalification</td><td>Absence de fuite à l'essai</td><td>PA exploitant</td><td></td></tr>\n</tbody></table>"
      },
      {
       "titre": "Exemple : l'analyse modèle",
       "contenu": "<p><strong>1. Identification.</strong> Le dossier concerne la vanne 2 TRE 104 VD, située dans le local 0412 du bâtiment BAN au niveau +4,60. Il s'agit de maintenance corrective : remplacement du joint de chapeau après une fuite.</p>\n<p><strong>2. Cohérence.</strong> Le repère est identique dans l'ordre de travail, l'autorisation de travail et le document de suivi. En revanche, l'ordre de travail cite le mode opératoire MO-TRE-07 à l'<strong>indice C</strong>, alors que le document de suivi est à l'<strong>indice B</strong>. C'est une incohérence : il faut obtenir le document à l'indice en vigueur avant toute intervention, car l'indice C peut contenir une modification (couple, référence de joint, étape supplémentaire).</p>\n<p><strong>3. Déroulement.</strong> Consignation vérifiée, confinement, ouverture, remplacement du joint, remontage, propreté, requalification.</p>\n<p><strong>4. Points sensibles.</strong> Le PA de l'étape 2 garantit que le confinement est efficace avant l'ouverture d'un matériel potentiellement contaminé. Le PA de l'étape 4 est placé avant la pose du joint neuf, car après remontage il serait impossible de vérifier l'état des portées. Le PN de l'étape 7 permet à l'exploitant de constater la propreté avant fermeture définitive. Le PA de l'étape 8 conditionne la clôture à une requalification réussie.</p>\n<p><strong>5. Risques et parades.</strong> Pression résiduelle (étape 1 : vérification au manomètre et purge ouverte) ; contamination (sas, tenue) ; manutention d'une charge de 45 kg (palan, point d'ancrage vérifié) ; corps étrangers (obturateurs, inspection à l'étape 7) ; exposition externe (à vérifier sur la cartographie, absente des extraits).</p>\n<p><strong>6. Moyens.</strong> Clé dynamométrique couvrant 180 N.m (étalonnée), outillage de desserrage, palan et élingues de CMU supérieure à 45 kg, joint neuf J-104-B, produits de nettoyage autorisés, obturateurs, sas complet et extracteur, contaminamètre, contenants à déchets.</p>\n<p><strong>7. Questions à poser.</strong> Indice du mode opératoire ; cartographie du local et dose prévisionnelle ; lubrifiant prescrit pour les filets (non précisé à l'étape 6) ; valeurs des passes intermédiaires (60, 120, 180 N.m si l'on applique un tiers par passe, à confirmer).</p>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "<ul>\n<li><strong>Repère presque identique</strong> : 2 TRE 104 VD et 2 TRE 140 VD, ou tranche 1 au lieu de 2. Lire les repères caractère par caractère.</li>\n<li><strong>Indice périmé</strong> d'une pièce du dossier.</li>\n<li><strong>Information absente</strong> : couple sans lubrifiant, levage sans masse, intervention en zone sans cartographie. À l'examen, une question « que manque-t-il ? » attend souvent une de ces informations.</li>\n<li><strong>Confusion PA / PN</strong> : on peut continuer après un PN si la personne prévenue ne vient pas dans le délai prévu ; jamais après un PA sans levée.</li>\n<li><strong>Autorisation de travail incomplète</strong> : un isolement manquant (par exemple une seule vanne d'isolement alors que le matériel est alimenté des deux côtés).</li>\n<li><strong>Réponse non justifiée</strong> : relever une information sans dire où on l'a trouvée. Citer le document source rend la réponse vérifiable.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne réponse sur un dossier est <strong>précise</strong> (repère, valeur, unité), <strong>sourcée</strong> (document et étape) et <strong>justifiée</strong> (pourquoi cela compte pour la sécurité, la radioprotection, la sûreté ou la qualité).</div>"
      },
      {
       "titre": "Du dossier au compte rendu",
       "contenu": "<p>En fin d'intervention, le dossier est complété et sert de base au <strong>compte rendu</strong> transmis à la hiérarchie et à l'exploitant. Un compte rendu efficace reprend la structure du dossier :</p>\n<ul>\n<li>rappel de l'identification (matériel, local, ordre de travail) ;</li>\n<li>travaux réalisés et constats (état des portées, état du joint déposé, cause probable de la fuite) ;</li>\n<li>valeurs relevées (couples, contrôles) et résultats des points d'arrêt ;</li>\n<li>dose collective réelle comparée à la dose prévisionnelle ;</li>\n<li>déchets produits ;</li>\n<li>écarts rencontrés et traitement ;</li>\n<li>propositions d'amélioration pour le retour d'expérience.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> à la relève d'équipe, le dossier passe de main en main. Un dossier où chaque étape réalisée est visée, et où l'étape en cours est clairement indiquée, permet à l'équipe suivante de reprendre sans erreur. Un dossier mal tenu oblige à refaire des vérifications, voire à rouvrir le matériel.</div>"
      }
     ],
     "points_cles": [
      "Le dossier d'intervention regroupe ordre de travail, analyse de risques, documents de radioprotection, mode opératoire, suivi, plans et autorisations.",
      "On commence par identifier matériel, local, travaux, dates et indices.",
      "Le même repère doit apparaître dans toutes les pièces ; toute différence est une incohérence.",
      "Chaque point d'arrêt se justifie par ce qu'il ne sera plus possible de vérifier ensuite.",
      "Pour chaque étape sensible, on relie la parade prévue au risque.",
      "Les informations manquantes (lubrifiant, masse, cartographie) sont des questions à poser avant d'intervenir.",
      "Une réponse est précise, sourcée et justifiée.",
      "Le dossier complété devient la preuve de l'intervention et la base du compte rendu."
     ],
     "lexique": [
      {
       "terme": "Dossier d'intervention",
       "def": "Ensemble des documents décrivant et traçant une intervention."
      },
      {
       "terme": "Ordre de travail",
       "def": "Document de l'exploitant qui déclenche l'intervention sur un matériel."
      },
      {
       "terme": "Indice",
       "def": "Repère de version d'un document."
      },
      {
       "terme": "Mode opératoire",
       "def": "Description détaillée et ordonnée des opérations à réaliser."
      },
      {
       "terme": "Document de suivi",
       "def": "Document où l'on vise les étapes réalisées et relève les valeurs."
      },
      {
       "terme": "Visa",
       "def": "Signature datée attestant la réalisation ou le contrôle d'une étape."
      },
      {
       "terme": "Incohérence",
       "def": "Contradiction entre deux informations d'un même dossier."
      },
      {
       "terme": "Compte rendu",
       "def": "Document qui rend compte des travaux réalisés, des constats et des écarts."
      }
     ]
    },
    {
     "id": "btiin-doc-cartographie",
     "titre": "La cartographie radiologique et le plan de local",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Décrire la structure et les conventions d'une cartographie radiologique",
      "Lire un plan de local : échelle, orientation, niveaux, accès",
      "Identifier sur une cartographie les zones, points chauds et protections",
      "Déterminer un itinéraire et un point d'attente optimisés",
      "Calculer des doses à partir des débits relevés"
     ],
     "sections": [
      {
       "titre": "Ce qu'est une cartographie radiologique",
       "contenu": "<p>Une <strong>cartographie radiologique</strong> est un plan d'un local ou d'une zone sur lequel le service de radioprotection a reporté les résultats de mesures : débits de dose d'ambiance, débits au contact des points chauds, contamination surfacique, éventuellement contamination atmosphérique. Elle est le document de base pour évaluer les doses, choisir les protections, fixer les seuils d'alarme et organiser les déplacements.</p>\n<p>Elle comporte généralement :</p>\n<ul>\n<li>un <strong>cartouche</strong> : site, bâtiment, niveau, local, date et heure des mesures, état de l'installation (réacteur à l'arrêt, circuit plein ou vidangé), nom de l'opérateur, appareil utilisé ;</li>\n<li>le <strong>plan</strong> du local avec les matériels principaux, les accès, l'orientation, parfois l'échelle ;</li>\n<li>les <strong>valeurs</strong> de débit de dose, placées à l'endroit de la mesure, avec leur unité et la hauteur ou la distance de mesure ;</li>\n<li>les <strong>symboles</strong> : points chauds, protections biologiques en place, limites de zones, sas, balisages ;</li>\n<li>une <strong>légende</strong> et des remarques.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une cartographie décrit une situation à un instant donné. Avant de l'utiliser, on vérifie sa date et l'état de l'installation au moment des mesures : si le circuit a été vidangé ou des protections déposées depuis, elle n'est plus valable.</div>"
      },
      {
       "titre": "Lire un plan de local",
       "contenu": "<p>Avant de lire les valeurs, il faut comprendre le plan :</p>\n<ul>\n<li><strong>Échelle</strong> : 1/50 signifie que 1 cm sur le plan représente 50 cm en réalité. Si aucune échelle n'est donnée, on utilise les cotes indiquées.</li>\n<li><strong>Orientation</strong> : une flèche indique le nord ou un repère de bâtiment ; elle permet de faire correspondre le plan et la réalité.</li>\n<li><strong>Niveau</strong> : la cote du plancher (par exemple +4,60 m) ; un local peut avoir des passerelles à des niveaux intermédiaires.</li>\n<li><strong>Accès</strong> : portes (avec leur sens d'ouverture), escaliers, trémies, échelles ; issues de secours.</li>\n<li><strong>Matériels</strong> : représentés en vue de dessus avec leur repère ; tuyauteries en traits épais.</li>\n</ul>\n<table><thead><tr><th>Symbole (convention fréquente)</th><th>Signification</th></tr></thead><tbody>\n<tr><td>Valeur seule (ex. 25)</td><td>Débit de dose d'ambiance en µSv/h, à environ 1 m du sol sauf mention</td></tr>\n<tr><td>Valeur avec « C » ou « contact »</td><td>Débit au contact du matériel</td></tr>\n<tr><td>Triangle ou étoile avec valeur</td><td>Point chaud, balisé sur place</td></tr>\n<tr><td>Hachures ou trait épais sur une tuyauterie</td><td>Protection biologique en place</td></tr>\n<tr><td>Contour de couleur</td><td>Limite de zone (verte, jaune, orange)</td></tr>\n</tbody></table>\n<p>Les conventions varient d'un site à l'autre ; la légende du document fait toujours foi.</p>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une cartographie en six étapes. 1) <strong>Valider</strong> : date, état de l'installation, cohérence avec le local de l'intervention. 2) <strong>Situer</strong> : repérer l'entrée, le matériel concerné, le poste de travail et l'itinéraire entre les deux. 3) <strong>Relever</strong> les débits utiles : au poste de travail, sur l'itinéraire, aux points d'attente possibles, et les points chauds proches. 4) <strong>Classer</strong> : déterminer la zone de chaque partie du local à partir de la légende. 5) <strong>Calculer</strong> les doses prévisibles : débit × durée pour chaque phase, en convertissant les unités. 6) <strong>Optimiser</strong> : proposer un itinéraire, un point d'attente, des protections, une organisation qui réduisent la dose, et chiffrer le gain.</div>\n<p>À l'épreuve, les questions suivent souvent cet ordre : « relever le débit au poste de travail », « indiquer le point d'attente le plus favorable », « calculer la dose de l'intervenant », « proposer une mesure d'optimisation et calculer son effet ».</p>"
      },
      {
       "titre": "Exemple : le document décrit",
       "contenu": "<p>Cartographie fictive du local 0412, bâtiment BAN, niveau +4,60, réalisée à J−1 à 14 h, circuit vidangé, appareil radiamètre n° 37. Le local est rectangulaire, 6 m (est-ouest) sur 4 m (nord-sud). La porte d'entrée est au milieu du mur ouest. La vanne 2 TRE 104 VD est au centre du local ; une tuyauterie horizontale traverse le local d'ouest en est le long du mur sud, à 1 m de hauteur.</p>\n<table><thead><tr><th>Point</th><th>Position</th><th>Mesure</th></tr></thead><tbody>\n<tr><td>A</td><td>Porte d'entrée, côté intérieur</td><td>8 µSv/h ambiance</td></tr>\n<tr><td>B</td><td>Angle nord-ouest</td><td>5 µSv/h ambiance</td></tr>\n<tr><td>C</td><td>Angle nord-est</td><td>12 µSv/h ambiance</td></tr>\n<tr><td>D</td><td>Poste de travail, à 50 cm de la vanne</td><td>150 µSv/h ambiance</td></tr>\n<tr><td>E</td><td>Contact du corps de vanne</td><td>0,9 mSv/h contact</td></tr>\n<tr><td>F</td><td>Point chaud : coude de la tuyauterie sud, angle sud-est</td><td>2,5 mSv/h contact ; 200 µSv/h à 50 cm</td></tr>\n<tr><td>G</td><td>Le long du mur sud, entre porte et vanne</td><td>60 µSv/h ambiance</td></tr>\n</tbody></table>\n<p>Légende : zone jaune autour du point F (rayon 1 m), le reste du local en zone verte. Aucune protection biologique en place. Contamination surfacique au sol inférieure au seuil du site sauf autour de la vanne (non mesurée sous le calorifuge).</p>\n<p>Intervention prévue : 2 intervenants, 2 h au poste de travail D ; 30 min de temps d'attente pendant la réception du sas et le point d'arrêt.</p>"
      },
      {
       "titre": "Exemple : l'analyse modèle",
       "contenu": "<p><strong>1. Validité.</strong> Cartographie réalisée la veille, circuit vidangé : elle est représentative si l'état du circuit n'a pas changé. À faire confirmer avant l'intervention, d'autant que la vidange peut faire évoluer les débits.</p>\n<p><strong>2. Situation.</strong> L'entrée est à l'ouest (A), la vanne au centre (poste D). Le point chaud F est dans l'angle sud-est, à environ 3 m de la vanne.</p>\n<p><strong>3. Itinéraire.</strong> Le trajet direct de A à D est court (environ 3 m). Il faut éviter de longer le mur sud (point G, 60 µSv/h) et ne jamais passer près de F. Itinéraire retenu : de la porte, avancer par le milieu ou légèrement côté nord jusqu'à la vanne.</p>\n<p><strong>4. Point d'attente.</strong> Le point B (angle nord-ouest, 5 µSv/h) est le plus favorable dans le local ; mieux encore, attendre hors du local si la réception du sas le permet. Le point C (12 µSv/h) est moins bon.</p>\n<p><strong>5. Calcul de dose.</strong> Travail : 150 µSv/h × 2 h = 300 µSv par intervenant. Attente en B : 5 × 0,5 = 2,5 µSv. Total par intervenant : environ 302,5 µSv ; dose collective : 605 µSv, soit environ 0,6 H.mSv. Si l'attente se faisait près de la vanne (150 µSv/h), elle coûterait 75 µSv par personne : le choix du point d'attente fait gagner environ 145 µSv collectifs.</p>\n<p><strong>6. Optimisation.</strong> Le débit au poste de travail vient surtout de la vanne elle-même (0,9 mSv/h au contact). Une protection biologique ne peut pas couvrir la partie sur laquelle on travaille, mais on peut protéger la tuyauterie sud et le coude F pour réduire le bruit de fond du local. Autres leviers : préparation hors zone, outillage adapté, organisation pour qu'un seul intervenant soit au poste pendant les phases qui ne nécessitent qu'une personne. Si cette organisation réduit la présence au poste à 2 h pour l'un et 1 h pour l'autre, la dose de travail passe de 600 à 450 µSv.</p>\n<p><strong>7. Remarques.</strong> La contamination sous le calorifuge n'a pas été mesurée : prévoir un contrôle après dépose du calorifuge, avant la construction du sas.</p>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "<ul>\n<li><strong>Unités mélangées</strong> : 0,9 mSv/h et 150 µSv/h sur le même plan ; convertir avant de comparer (0,9 mSv/h = 900 µSv/h).</li>\n<li><strong>Contact et ambiance confondus</strong> : le débit au contact n'est pas celui que reçoit le corps de l'intervenant ; il concerne surtout les mains (dose aux extrémités).</li>\n<li><strong>Cartographie périmée</strong> ou réalisée dans un état différent de l'installation.</li>\n<li><strong>Temps oubliés</strong> dans le calcul : trajets, attente, habillage dans le local, pose et dépose des protections.</li>\n<li><strong>Point d'attente mal choisi</strong> : le point le plus proche de la porte n'est pas toujours le plus faible.</li>\n<li><strong>Durées en minutes</strong> multipliées par un débit horaire sans conversion.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un point chaud au contact d'une valeur élevée (2,5 mSv/h) peut paraître dangereux à tout le local ; en réalité, son influence diminue vite avec la distance. Ce qui compte est le débit à l'endroit où se trouvent les personnes, et le temps qu'elles y passent.</div>"
      },
      {
       "titre": "Mettre à jour et communiquer la cartographie",
       "contenu": "<p>Sur un chantier, la cartographie est affichée à l'entrée et expliquée au briefing. Elle est mise à jour par le service de radioprotection après chaque opération susceptible de modifier la situation : ouverture du matériel, dépose du calorifuge, pose ou dépose de protections, évacuation d'un déchet actif.</p>\n<p>Le chargé de travaux vérifie, à chaque mise à jour, si les hypothèses de l'évaluation dosimétrique restent valables. Si un débit au poste de travail augmente nettement, il recalcule la dose prévisionnelle et, au besoin, fait ajuster les seuils d'alarme et les mesures de protection avant de poursuivre.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les intervenants sont encouragés à consulter le débit affiché par leur dosimètre opérationnel au poste de travail et à le comparer à la cartographie. Un écart important doit être signalé : il peut révéler un point chaud nouveau, une protection déplacée ou une erreur de cartographie.</div>"
      }
     ],
     "points_cles": [
      "Une cartographie reporte sur un plan les débits d'ambiance, les débits au contact, les points chauds et les protections.",
      "On vérifie d'abord sa date et l'état de l'installation lors des mesures.",
      "La légende fait foi pour les symboles et les unités.",
      "On distingue débit au contact (mains) et débit d'ambiance (corps entier).",
      "Itinéraire et point d'attente se choisissent sur les débits relevés, pas sur la distance à la porte.",
      "Dose = débit × durée, phase par phase, en convertissant les unités.",
      "Une proposition d'optimisation se chiffre en dose économisée.",
      "La cartographie est mise à jour après toute opération qui modifie la situation."
     ],
     "lexique": [
      {
       "terme": "Cartographie radiologique",
       "def": "Plan reportant les résultats de mesures radiologiques d'un local."
      },
      {
       "terme": "Débit d'ambiance",
       "def": "Débit de dose mesuré à environ 1 m du sol, représentatif de l'exposition du corps."
      },
      {
       "terme": "Débit au contact",
       "def": "Débit de dose mesuré au contact d'un matériel."
      },
      {
       "terme": "Échelle",
       "def": "Rapport entre une longueur sur le plan et la longueur réelle."
      },
      {
       "terme": "Cartouche",
       "def": "Cadre du document regroupant les informations d'identification."
      },
      {
       "terme": "Légende",
       "def": "Explication des symboles et conventions utilisés sur un plan."
      },
      {
       "terme": "Point d'attente",
       "def": "Emplacement à faible débit où l'on se tient pendant les temps morts."
      },
      {
       "terme": "Homme-millisievert (H.mSv)",
       "def": "Unité de dose collective."
      }
     ]
    },
    {
     "id": "btiin-doc-rtr-edp",
     "titre": "Le régime de travail radiologique et l'évaluation dosimétrique prévisionnelle",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les rubriques d'un régime de travail radiologique",
      "Construire ou vérifier une évaluation dosimétrique prévisionnelle phase par phase",
      "Contrôler la cohérence entre seuils d'alarme, dose prévisionnelle et cartographie",
      "Justifier les équipements de protection prescrits",
      "Comparer la dose réelle à la dose prévue et analyser l'écart"
     ],
     "sections": [
      {
       "titre": "Deux documents complémentaires",
       "contenu": "<p>Avant d'entrer en zone contrôlée pour un chantier, l'intervenant doit connaître les conditions radiologiques de son travail. Elles sont formalisées dans deux documents, dont les noms varient selon les exploitants :</p>\n<ul>\n<li>l'<strong>évaluation dosimétrique prévisionnelle</strong> (EDP), qui estime, phase par phase, la dose que recevra chaque intervenant et l'équipe ; elle sert à optimiser et à fixer les objectifs ;</li>\n<li>le <strong>régime de travail radiologique</strong> (RTR), ou document équivalent, qui fixe les conditions d'accès et de travail : zones, tenues, dosimétrie, seuils d'alarme, consignes particulières. C'est le document que l'intervenant présente ou consulte à l'entrée et dont il doit connaître le contenu.</li>\n</ul>\n<p>Ces documents sont établis par le chargé de travaux ou le préparateur, avec le service de radioprotection, qui les valide. Ils s'appuient sur la cartographie et sur le mode opératoire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'EDP répond à la question « combien de dose cette intervention va-t-elle coûter et comment la réduire ? » ; le RTR répond à « dans quelles conditions ai-je le droit d'entrer et de travailler ? ».</div>"
      },
      {
       "titre": "Structure d'un régime de travail radiologique",
       "contenu": "<table><thead><tr><th>Rubrique</th><th>Contenu type</th></tr></thead><tbody>\n<tr><td>Identification</td><td>Numéro, chantier, ordre de travail, local, dates de validité, entreprise</td></tr>\n<tr><td>Situation radiologique</td><td>Zone(s), débits d'ambiance et au poste, points chauds, contamination surfacique et atmosphérique attendue, référence de la cartographie</td></tr>\n<tr><td>Dosimétrie</td><td>Dosimètre passif et opérationnel ; dosimétrie complémentaire (extrémités, cristallin) si nécessaire ; seuil d'alarme de dose ; seuil d'alarme de débit de dose</td></tr>\n<tr><td>Dose prévisionnelle</td><td>Dose individuelle maximale prévue par entrée, dose collective du chantier</td></tr>\n<tr><td>Équipements</td><td>Tenue (de base, complémentaire, étanche, ventilée), gants, surbottes, protection respiratoire</td></tr>\n<tr><td>Confinement</td><td>Type de sas, dépression requise, balise aérosols</td></tr>\n<tr><td>Consignes particulières</td><td>Point d'attente, interdictions de passage, conduite à tenir en cas d'alarme, contrôles à la sortie</td></tr>\n<tr><td>Validation</td><td>Signatures du préparateur et du service de radioprotection</td></tr>\n</tbody></table>\n<p>Les intervenants signent souvent une liste attestant qu'ils ont pris connaissance du RTR. Le RTR n'est valable que dans les conditions qu'il décrit : si la situation change, il doit être révisé.</p>"
      },
      {
       "titre": "Construire une évaluation dosimétrique prévisionnelle",
       "contenu": "<p>L'EDP découpe l'intervention en <strong>phases</strong> qui se déroulent à des endroits ou dans des conditions différentes. Pour chaque phase, elle indique :</p>\n<ul>\n<li>l'<strong>effectif</strong> présent dans le champ de rayonnement ;</li>\n<li>la <strong>durée</strong> de présence de chacun ;</li>\n<li>le <strong>débit de dose</strong> au poste occupé (pris sur la cartographie, éventuellement corrigé de l'effet des protections) ;</li>\n<li>la <strong>dose individuelle</strong> (débit × durée) et la <strong>dose collective</strong> (somme sur l'effectif).</li>\n</ul>\n<p>On additionne ensuite les phases pour obtenir la dose individuelle maximale (celle de l'intervenant le plus exposé) et la dose collective totale.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir les seuils d'alarme à partir de l'EDP. 1) Calculer la dose individuelle prévue pour l'entrée la plus exposante. 2) Le seuil d'alarme de dose est en général fixé à une valeur proche, avec une marge définie par la règle du site (par exemple la dose prévue majorée d'un pourcentage). 3) Le seuil d'alarme de débit de dose est fixé au-dessus du débit maximal attendu aux postes occupés, pour ne pas sonner en fonctionnement normal mais détecter une situation anormale. 4) Vérifier la cohérence : un seuil de débit inférieur au débit du poste de travail déclencherait des alarmes en permanence ; un seuil de dose très supérieur à la dose prévue n'aurait aucun rôle d'alerte. Les règles précises de marge sont propres à chaque site et données dans le sujet ou le référentiel de l'exploitant.</div>"
      },
      {
       "titre": "Exemple : le document décrit",
       "contenu": "<p>EDP fictive pour le remplacement d'un joint de chapeau de vanne (local à 150 µSv/h au poste de travail, 5 µSv/h au point d'attente). Deux intervenants, notés I1 et I2.</p>\n<table><thead><tr><th>Phase</th><th>Effectif</th><th>Durée par personne</th><th>Débit</th><th>Dose individuelle</th><th>Dose collective</th></tr></thead><tbody>\n<tr><td>1. Pose protections sur tuyauterie sud</td><td>2</td><td>0,5 h</td><td>80 µSv/h</td><td>40 µSv</td><td>80 µSv</td></tr>\n<tr><td>2. Montage du sas</td><td>2</td><td>1 h</td><td>60 µSv/h</td><td>60 µSv</td><td>120 µSv</td></tr>\n<tr><td>3. Attente réception sas et PA</td><td>2</td><td>0,5 h</td><td>5 µSv/h</td><td>2,5 µSv</td><td>5 µSv</td></tr>\n<tr><td>4. Dépose chapeau et joint</td><td>2</td><td>1 h</td><td>120 µSv/h</td><td>120 µSv</td><td>240 µSv</td></tr>\n<tr><td>5. Pose joint et serrage</td><td>1 (I1)</td><td>1 h</td><td>120 µSv/h</td><td>120 µSv</td><td>120 µSv</td></tr>\n<tr><td>Total</td><td></td><td></td><td></td><td>I1 : ? ; I2 : ?</td><td>? </td></tr>\n</tbody></table>\n<p>Extrait du RTR associé : zone verte ; dosimétrie passive et opérationnelle ; seuil d'alarme de dose 250 µSv ; seuil d'alarme de débit 100 µSv/h ; tenue complémentaire et gants doubles dans le sas ; pas de protection respiratoire ; dose collective prévisionnelle 0,5 H.mSv.</p>"
      },
      {
       "titre": "Exemple : l'analyse modèle",
       "contenu": "<p><strong>1. Totaux.</strong> I1 participe à toutes les phases : 40 + 60 + 2,5 + 120 + 120 = 342,5 µSv. I2 ne participe pas à la phase 5 : 40 + 60 + 2,5 + 120 = 222,5 µSv. Dose collective : 80 + 120 + 5 + 240 + 120 = 565 µSv, soit 0,565 H.mSv, ce que l'on peut vérifier par 342,5 + 222,5 = 565 µSv.</p>\n<p><strong>2. Cohérence avec le RTR.</strong> Trois incohérences apparaissent :</p>\n<ul>\n<li>la dose collective inscrite au RTR (0,5 H.mSv) est inférieure au total de l'EDP (0,565 H.mSv) : le RTR doit être corrigé ;</li>\n<li>le seuil d'alarme de dose (250 µSv) est inférieur à la dose prévue pour I1 (342,5 µSv) : I1 déclenchera l'alarme en cours de phase 5. Il faut soit relever le seuil selon la règle du site, soit répartir la phase 5 entre I1 et I2 ;</li>\n<li>le seuil d'alarme de débit (100 µSv/h) est inférieur au débit des phases 4 et 5 (120 µSv/h) et au débit du poste de travail indiqué par la cartographie (150 µSv/h) : l'alarme sonnera en permanence au poste de travail ; le seuil doit être fixé au-dessus du débit maximal attendu.</li>\n</ul>\n<p><strong>3. Incohérence avec la cartographie.</strong> L'EDP retient 120 µSv/h au poste alors que la cartographie indique 150 µSv/h. Cette baisse peut s'expliquer par la pose des protections en phase 1, mais l'hypothèse doit être écrite et vérifiée par une mesure après pose.</p>\n<p><strong>4. Optimisation.</strong> Répartir la phase 5 : 0,5 h chacun. I1 : 342,5 − 60 = 282,5 µSv ; I2 : 222,5 + 60 = 282,5 µSv. La dose collective ne change pas (565 µSv) mais les doses individuelles sont équilibrées. Pour réduire la dose collective, il faut réduire les temps (préparation, outillage) ou les débits (protections).</p>\n<p><strong>5. Protections individuelles.</strong> L'absence de protection respiratoire est cohérente avec une ouverture de matériel sous sas en dépression, à condition que la balise ou les contrôles ne montrent pas de contamination atmosphérique ; la conduite à tenir en cas d'alarme de balise doit figurer au RTR.</p>"
      },
      {
       "titre": "Comparer prévu et réalisé",
       "contenu": "<p>Après l'intervention, on compare la dose réelle (lue sur les dosimètres opérationnels) à la dose prévue. L'écart relatif se calcule ainsi : écart (%) = (dose réelle − dose prévue) / dose prévue × 100.</p>\n<p>Si la dose réelle collective est de 690 µSv pour une prévision de 565 µSv, l'écart est de (690 − 565) / 565 × 100 ≈ 22 %. On recherche les causes : durée réelle plus longue (difficulté de démontage), débit réel supérieur (protection moins efficace que prévu), phase non prévue (nettoyage supplémentaire des portées). Chaque cause identifiée devient une donnée de retour d'expérience pour la prochaine EDP du même chantier.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les exploitants suivent la dose des chantiers en temps réel pendant les arrêts. Un chantier qui dépasse sa prévision au-delà d'un certain écart fait l'objet d'un point avec le service de radioprotection avant de poursuivre ; l'EDP est alors révisée.</div>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "<ul>\n<li>Oublier les phases sans travail productif : trajets, attente, montage du sas, pose des protections.</li>\n<li>Additionner les doses individuelles de personnes qui ne participent pas aux mêmes phases comme si elles étaient identiques.</li>\n<li>Confondre dose individuelle et dose collective dans les totaux.</li>\n<li>Recopier un seuil de débit sans le comparer au débit du poste.</li>\n<li>Utiliser un débit de cartographie « avant protection » pour une phase réalisée « après protection », ou l'inverse.</li>\n<li>Conclure sans proposer : une analyse attendue à l'examen se termine par une correction ou une optimisation chiffrée.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> répartir la dose entre plusieurs intervenants réduit la dose individuelle maximale mais pas la dose collective ; ajouter un intervenant inutile augmente même la dose collective. L'optimisation porte d'abord sur la dose collective, puis sur la répartition.</div>"
      }
     ],
     "points_cles": [
      "L'EDP estime la dose phase par phase ; le RTR fixe les conditions d'accès et de travail.",
      "Le RTR précise zones, débits, dosimétrie, seuils d'alarme, tenues, confinement et consignes.",
      "Dose individuelle = débit × durée ; dose collective = somme des doses individuelles.",
      "Le seuil de débit doit être supérieur au débit attendu aux postes occupés.",
      "Le seuil de dose doit être cohérent avec la dose individuelle prévue.",
      "Les hypothèses (effet des protections) sont écrites et vérifiées par mesure.",
      "Répartir la dose équilibre les individus sans réduire la dose collective.",
      "L'écart entre dose réelle et dose prévue s'analyse et alimente le retour d'expérience."
     ],
     "lexique": [
      {
       "terme": "Régime de travail radiologique (RTR)",
       "def": "Document fixant les conditions radiologiques d'accès et de travail sur un chantier."
      },
      {
       "terme": "Évaluation dosimétrique prévisionnelle (EDP)",
       "def": "Estimation phase par phase des doses individuelles et collectives d'une intervention."
      },
      {
       "terme": "Phase",
       "def": "Partie d'une intervention réalisée dans des conditions homogènes de lieu et de débit."
      },
      {
       "terme": "Seuil d'alarme de dose",
       "def": "Dose cumulée à laquelle le dosimètre opérationnel déclenche une alarme."
      },
      {
       "terme": "Seuil d'alarme de débit",
       "def": "Débit de dose instantané au-delà duquel le dosimètre déclenche une alarme."
      },
      {
       "terme": "Dose individuelle maximale",
       "def": "Dose prévue pour l'intervenant le plus exposé."
      },
      {
       "terme": "Écart relatif",
       "def": "Différence entre réalisé et prévu rapportée au prévu, en pourcentage."
      },
      {
       "terme": "Hypothèse de calcul",
       "def": "Condition supposée dans l'évaluation, comme l'atténuation par une protection."
      }
     ]
    },
    {
     "id": "btiin-doc-analyse-risques-pdp",
     "titre": "L'analyse de risques et le plan de prévention",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Reconnaître la structure d'une analyse de risques de chantier et d'un plan de prévention",
      "Vérifier qu'une analyse de risques couvre toutes les étapes et tous les risques",
      "Évaluer la pertinence des mesures de prévention proposées",
      "Identifier les risques d'interférence entre entreprises",
      "Compléter une analyse de risques de manière argumentée"
     ],
     "sections": [
      {
       "titre": "Deux documents, deux niveaux",
       "contenu": "<p>L'épreuve écrite demande d'<strong>évaluer les risques</strong> d'une intervention : risques radiologiques, risques conventionnels (dont les risques mécaniques), risques liés aux déchets. Deux documents professionnels servent de support :</p>\n<ul>\n<li>le <strong>plan de prévention</strong>, établi entre l'entreprise utilisatrice (l'exploitant) et l'entreprise extérieure, à l'issue d'une inspection commune préalable ; il traite surtout des <strong>risques d'interférence</strong> entre les activités, les installations et les matériels des différentes entreprises, et organise les secours ;</li>\n<li>l'<strong>analyse de risques du chantier</strong>, rédigée par le prestataire pour une intervention donnée ; elle suit le déroulement étape par étape et prévoit les parades.</li>\n</ul>\n<p>Le plan de prévention est un document de cadrage, souvent valable pour une période ou un ensemble de travaux ; l'analyse de risques est un document opérationnel, propre à un chantier.</p>"
      },
      {
       "titre": "Structure et vocabulaire",
       "contenu": "<table><thead><tr><th>Document</th><th>Rubriques habituelles</th></tr></thead><tbody>\n<tr><td>Plan de prévention</td><td>Identification des entreprises et des responsables ; description des travaux, lieux et dates ; date et participants de l'inspection commune ; risques d'interférence identifiés ; mesures et répartition (qui fait quoi) ; consignes de sécurité et d'urgence ; liste des intervenants informés ; signatures</td></tr>\n<tr><td>Analyse de risques</td><td>Étape ; situation dangereuse ; risque ; évaluation (gravité, probabilité) ; mesures de prévention ; risque résiduel ; responsable de la mesure</td></tr>\n</tbody></table>\n<p>Vocabulaire clé : <strong>risque d'interférence</strong> (créé par la présence simultanée de plusieurs activités ou par les installations de l'entreprise utilisatrice) ; <strong>mesure collective</strong> et <strong>mesure individuelle</strong> ; <strong>risque résiduel</strong> ; <strong>parade</strong> (mesure qui répond à un risque identifié).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une ligne d'analyse de risques bien construite se lit comme une phrase : « pendant telle étape, telle situation expose à tel risque, que l'on réduit par telle mesure, sous la responsabilité de telle personne ».</div>"
      },
      {
       "titre": "Méthode de lecture et de critique",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier une analyse de risques en six questions. 1) <strong>Couverture des étapes</strong> : chaque étape du mode opératoire apparaît-elle, y compris l'installation du chantier, le repli et l'évacuation des déchets ? 2) <strong>Couverture des risques</strong> : pour chaque étape, a-t-on examiné les familles de risques : radiologiques (exposition externe, contamination externe et interne), mécaniques (charges, pièces en mouvement, coupures, pression), chute, électrique, incendie, chimique, thermique, ergonomique, coactivité ? 3) <strong>Pertinence des mesures</strong> : chaque mesure répond-elle au risque de sa ligne ? Est-elle concrète et vérifiable ? 4) <strong>Hiérarchie</strong> : les mesures suivent-elles les principes de prévention (supprimer, réduire à la source, protection collective, puis individuelle) ? 5) <strong>Interactions</strong> : une mesure crée-t-elle un nouveau risque non traité ? 6) <strong>Responsabilités</strong> : chaque mesure a-t-elle un responsable ? Conclure par la liste des compléments à apporter, classés par priorité.</div>\n<p>Pour le plan de prévention, on vérifie en plus que les risques liés à l'environnement de l'exploitant (installations voisines, circulation d'engins, autres entreprises dans le local) sont identifiés et que les consignes d'urgence sont connues.</p>"
      },
      {
       "titre": "Exemple : le document décrit",
       "contenu": "<p>Analyse de risques fictive du chantier « remplacement du joint de chapeau d'une vanne en local de zone verte, sous sas, réacteur à l'arrêt ». Le local contient aussi une équipe de calorifugeurs d'une autre entreprise pendant la première demi-journée. Le chapeau pèse 45 kg ; la vanne est à 2,20 m du sol, accessible par un échafaudage.</p>\n<table><thead><tr><th>Étape</th><th>Risque</th><th>Mesure prévue</th><th>Responsable</th></tr></thead><tbody>\n<tr><td>Accès au local</td><td>Exposition externe</td><td>Itinéraire défini, point d'attente au nord-ouest</td><td>Chargé de travaux</td></tr>\n<tr><td>Montage du sas</td><td>Contamination</td><td>Gants et surbottes</td><td>Intervenants</td></tr>\n<tr><td>Dépose du chapeau</td><td>Chute du chapeau</td><td>Port des chaussures de sécurité</td><td>Intervenants</td></tr>\n<tr><td>Dépose du chapeau</td><td>Contamination atmosphérique</td><td>Port d'un masque filtrant</td><td>Intervenants</td></tr>\n<tr><td>Serrage</td><td>Exposition externe</td><td>Travailler vite</td><td>Intervenants</td></tr>\n<tr><td>Fin de chantier</td><td>Déchets</td><td>Évacuer les déchets</td><td>Intervenants</td></tr>\n</tbody></table>"
      },
      {
       "titre": "Exemple : l'analyse modèle",
       "contenu": "<p><strong>1. Étapes manquantes.</strong> L'analyse ne traite ni la vérification de la consignation (risque de pression résiduelle et de projection de fluide contaminé), ni l'installation des servitudes (risque électrique), ni l'inspection de propreté (corps étrangers), ni la requalification, ni le démontage du sas.</p>\n<p><strong>2. Risques non identifiés.</strong> Chute de hauteur : la vanne est à 2,20 m, l'échafaudage doit être réceptionné et non modifié. Coactivité : présence des calorifugeurs, poussières et déplacements dans le local ; ce risque relève aussi du plan de prévention. Thermique éventuel en tenue complémentaire. Manutention : 45 kg dépasse ce qu'on manipule à la main en hauteur, surtout sur un échafaudage.</p>\n<p><strong>3. Mesures inadaptées.</strong></p>\n<ul>\n<li>« Chaussures de sécurité » contre la chute du chapeau : mesure individuelle qui ne traite que les pieds ; il faut d'abord une mesure collective : levage par palan sur point d'ancrage vérifié, élingues de CMU adaptée, zone balisée sous la charge, personne hors de l'aplomb.</li>\n<li>« Masque filtrant » contre la contamination atmosphérique : la mesure prioritaire est le confinement à la source (sas en dépression réceptionné, ouverture progressive, contrôle par balise ou prélèvement) ; la protection respiratoire n'est qu'un complément décidé par le service de radioprotection.</li>\n<li>« Travailler vite » : ce n'est pas une mesure de prévention ; elle augmente le risque d'erreur et d'accident. Les vraies mesures sont la préparation hors zone, l'outillage adapté, la protection biologique, le point d'attente.</li>\n<li>« Gants et surbottes » au montage du sas : avant l'ouverture du matériel, le risque de contamination est faible ; la mesure clé est plutôt le contrôle radiologique de la zone et la protection du sol.</li>\n<li>« Évacuer les déchets » : trop vague ; il faut préciser le tri par famille, les contenants, la mesure et l'étiquetage, la zone tampon.</li>\n</ul>\n<p><strong>4. Responsabilités.</strong> Les mesures collectives (sas, levage, balisage) relèvent du chargé de travaux ; « intervenants » est trop général.</p>\n<p><strong>5. Conclusion.</strong> L'analyse doit être complétée en priorité sur le levage du chapeau (gravité élevée), le travail en hauteur, la consignation et la coactivité, avant tout démarrage.</p>"
      },
      {
       "titre": "Rédiger une ligne d'analyse complète",
       "contenu": "<p>À l'examen, on demande souvent de compléter ou de corriger une ligne d'analyse. Voici, pour l'étape « dépose du chapeau » de l'exemple, une rédaction attendue :</p>\n<table><thead><tr><th>Rubrique</th><th>Contenu rédigé</th></tr></thead><tbody>\n<tr><td>Étape</td><td>Dépose du chapeau de 45 kg depuis l'échafaudage, à 2,20 m</td></tr>\n<tr><td>Situation dangereuse</td><td>Intervenants à proximité et sous une charge en mouvement, sur un plancher en hauteur</td></tr>\n<tr><td>Risques</td><td>Chute de la charge (écrasement), chute de hauteur, troubles musculo-squelettiques, contamination lors de l'ouverture</td></tr>\n<tr><td>Évaluation</td><td>Gravité 4, probabilité 2 avant mesures</td></tr>\n<tr><td>Mesures</td><td>Levage au palan sur point d'ancrage vérifié, élingues de CMU adaptée et vérifiées, balisage de l'aplomb au sol, un chef de manœuvre ; échafaudage réceptionné avec garde-corps ; sas réceptionné en dépression ; contrôle radiologique à l'ouverture</td></tr>\n<tr><td>Risque résiduel</td><td>Gravité 4, probabilité 1 : acceptable sous réserve du respect des mesures</td></tr>\n<tr><td>Responsable</td><td>Chargé de travaux pour les mesures collectives ; chef de manœuvre pour le levage</td></tr>\n</tbody></table>\n<p>Cette rédaction est précise (masse, hauteur), vérifiable (réception, vérification, balisage) et attribuée (responsables nommés par leur fonction).</p>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "<ul>\n<li>Ne traiter que les risques radiologiques en oubliant les risques mécaniques et conventionnels, pourtant plus souvent à l'origine d'accidents.</li>\n<li>Proposer un EPI comme première mesure.</li>\n<li>Écrire des mesures vagues (« faire attention », « être prudent ») qui ne peuvent pas être vérifiées.</li>\n<li>Oublier les étapes de début et de fin de chantier.</li>\n<li>Ignorer les autres entreprises présentes et les installations de l'exploitant (matériels en fonctionnement à proximité, circulation).</li>\n<li>Ne pas relier les mesures aux documents existants (cartographie, RTR, autorisation de travail, permis de feu).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le plan de prévention ne remplace pas l'analyse de risques du chantier, et réciproquement. Un sujet peut demander d'identifier dans quel document doit figurer une mesure : les risques d'interférence et l'organisation des secours relèvent du plan de prévention ; les parades propres à chaque étape relèvent de l'analyse de risques.</div>"
      },
      {
       "titre": "Faire vivre l'analyse de risques",
       "contenu": "<p>L'analyse de risques n'est pas un document rempli une fois pour toutes. Elle est :</p>\n<ul>\n<li><strong>présentée</strong> au briefing de début de chantier, et chaque intervenant doit pouvoir dire quels sont les principaux risques de son poste ;</li>\n<li><strong>vérifiée</strong> sur le terrain lors de la minute d'arrêt : les mesures prévues sont-elles en place ?</li>\n<li><strong>révisée</strong> dès que la situation change : nouvel intervenant d'une autre entreprise dans le local, découverte d'un état du matériel non prévu, modification de mode opératoire ;</li>\n<li><strong>enrichie</strong> par le retour d'expérience en fin de chantier.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les inspecteurs de l'autorité de sûreté et les chargés de surveillance de l'exploitant interrogent souvent les intervenants sur les risques de leur chantier. Un intervenant qui connaît les trois risques principaux de son poste et leurs parades montre que l'analyse a réellement été partagée.</div>"
      }
     ],
     "points_cles": [
      "Le plan de prévention traite les risques d'interférence entre entreprises ; l'analyse de risques suit les étapes du chantier.",
      "Une ligne d'analyse : étape, situation, risque, mesure, responsable.",
      "On vérifie la couverture de toutes les étapes, y compris installation, repli et déchets.",
      "On examine toutes les familles de risques, radiologiques comme mécaniques et conventionnels.",
      "Les mesures collectives et à la source passent avant les EPI.",
      "« Travailler vite » ou « faire attention » ne sont pas des mesures de prévention.",
      "Chaque mesure a un responsable identifié.",
      "L'analyse est présentée, vérifiée, révisée et enrichie tout au long du chantier."
     ],
     "lexique": [
      {
       "terme": "Analyse de risques",
       "def": "Document identifiant les risques de chaque étape d'une intervention et leurs parades."
      },
      {
       "terme": "Inspection commune préalable",
       "def": "Visite des lieux par l'entreprise utilisatrice et l'entreprise extérieure avant les travaux."
      },
      {
       "terme": "Risque d'interférence",
       "def": "Risque créé par la présence simultanée d'activités ou d'installations de plusieurs entreprises."
      },
      {
       "terme": "Parade",
       "def": "Mesure qui répond à un risque identifié."
      },
      {
       "terme": "Mesure collective",
       "def": "Mesure qui protège toutes les personnes exposées : confinement, balisage, garde-corps."
      },
      {
       "terme": "Équipement de protection individuelle (EPI)",
       "def": "Équipement porté par une personne pour la protéger d'un risque."
      },
      {
       "terme": "Risque mécanique",
       "def": "Risque lié aux charges, pièces en mouvement, outils, pressions et énergies mécaniques."
      },
      {
       "terme": "Coactivité",
       "def": "Présence simultanée de plusieurs équipes ou entreprises sur un même lieu."
      }
     ]
    },
    {
     "id": "btiin-doc-plan-nomenclature-schema",
     "titre": "Le plan d'ensemble, la nomenclature et le schéma de circuit",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Exploiter un plan d'ensemble et sa nomenclature pour comprendre un matériel",
      "Établir un ordre de démontage et la liste des pièces à remplacer",
      "Déterminer les masses à manutentionner et les moyens associés",
      "Lire un schéma de circuit pour identifier les organes d'isolement et de purge",
      "Repérer les zones probables de contamination et de corps étrangers d'un matériel"
     ],
     "sections": [
      {
       "titre": "Les documents techniques d'un matériel",
       "contenu": "<p>Pour préparer une intervention sur un matériel, on dispose en général de trois documents techniques :</p>\n<ul>\n<li>le <strong>plan d'ensemble</strong>, souvent en coupe, qui montre toutes les pièces assemblées avec leurs repères ;</li>\n<li>la <strong>nomenclature</strong>, liste des pièces repérées : repère, nombre, désignation, matériau, référence, parfois masse et observation (pièce d'usure, pièce de rechange) ;</li>\n<li>le <strong>schéma du circuit</strong> (schéma mécanique ou fluidique), qui situe le matériel dans son circuit avec les matériels voisins : robinets d'isolement, purges, évents, capteurs, pompes, réservoirs.</li>\n</ul>\n<p>Le plan et la nomenclature disent <strong>comment est fait</strong> le matériel ; le schéma dit <strong>où il est</strong> dans le circuit et comment l'isoler. L'épreuve écrite fait souvent travailler sur ces trois documents en même temps.</p>"
      },
      {
       "titre": "Conventions à connaître",
       "contenu": "<table><thead><tr><th>Élément</th><th>Lecture</th></tr></thead><tbody>\n<tr><td>Repère dans une bulle</td><td>Numéro de la pièce, renvoyant à la ligne de même numéro dans la nomenclature</td></tr>\n<tr><td>Hachures</td><td>Pièce coupée ; orientation différente pour deux pièces voisines ; même orientation pour une même pièce dans plusieurs vues</td></tr>\n<tr><td>Nomenclature</td><td>Se lit de bas en haut lorsqu'elle est placée au-dessus du cartouche</td></tr>\n<tr><td>Cartouche</td><td>Titre, numéro de plan, indice, échelle, date</td></tr>\n<tr><td>Symbole de robinet sur un schéma</td><td>Deux triangles opposés par la pointe ; rempli en noir s'il est fermé, selon la convention de l'exploitant</td></tr>\n<tr><td>Symbole de clapet anti-retour</td><td>Triangle et trait indiquant le sens de passage autorisé</td></tr>\n<tr><td>Flèche sur une conduite</td><td>Sens normal d'écoulement</td></tr>\n<tr><td>Purge, évent</td><td>Petite dérivation en point bas (purge) ou en point haut (évent), avec un robinet</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les conventions de représentation des robinets ouverts et fermés ne sont pas universelles. Avant de conclure qu'un robinet est fermé sur un schéma, vérifier la légende.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter plan, nomenclature et schéma. 1) <strong>Identifier</strong> le matériel et vérifier l'indice du plan. 2) <strong>Comprendre la fonction</strong> : repérer l'entrée et la sortie du fluide, l'obturateur, la commande. 3) <strong>Repérer les liaisons</strong> : quelles pièces sont fixes, lesquelles bougent, comment elles sont assemblées. 4) <strong>Établir l'ordre de démontage</strong> : partir de l'extérieur (commande) vers l'intérieur, en s'arrêtant à ce qui est nécessaire pour l'intervention. 5) <strong>Lister les pièces à remplacer</strong> d'après la nomenclature (joints, tresses, visserie à usage unique) avec leurs références. 6) <strong>Relever les masses</strong> et en déduire les moyens de manutention. 7) <strong>Sur le schéma</strong>, identifier les organes d'isolement amont et aval, les purges et évents nécessaires à la vidange, et toutes les voies par lesquelles le fluide pourrait revenir. 8) <strong>Anticiper</strong> les zones de contamination (surfaces mouillées par le fluide) et les ouvertures à obturer.</div>"
      },
      {
       "titre": "Exemple : les documents décrits",
       "contenu": "<p>Plan d'ensemble fictif d'un robinet à soupape à commande manuelle, présenté en coupe longitudinale. Le fluide entre par la gauche, passe sous le siège et sort par la droite. Nomenclature :</p>\n<table><thead><tr><th>Rep.</th><th>Nb</th><th>Désignation</th><th>Matériau</th><th>Observations</th></tr></thead><tbody>\n<tr><td>1</td><td>1</td><td>Corps</td><td>Acier inoxydable moulé</td><td>Masse 60 kg, reste sur la tuyauterie</td></tr>\n<tr><td>2</td><td>1</td><td>Chapeau</td><td>Acier inoxydable</td><td>Masse 25 kg</td></tr>\n<tr><td>3</td><td>1</td><td>Joint de chapeau</td><td>Graphite armé</td><td>Pièce d'usure, réf. J-50</td></tr>\n<tr><td>4</td><td>8</td><td>Goujon M16</td><td>Acier allié</td><td>Classe 8.8</td></tr>\n<tr><td>5</td><td>8</td><td>Écrou M16</td><td>Acier allié</td><td></td></tr>\n<tr><td>6</td><td>1</td><td>Clapet</td><td>Inox avec portée rapportée</td><td>Portée à contrôler</td></tr>\n<tr><td>7</td><td>1</td><td>Tige</td><td>Inox</td><td>Liaison hélicoïdale avec l'écrou de manœuvre</td></tr>\n<tr><td>8</td><td>5</td><td>Anneaux de tresse</td><td>Graphite</td><td>Pièces d'usure, réf. T-22</td></tr>\n<tr><td>9</td><td>1</td><td>Fouloir</td><td>Inox</td><td>Comprime la tresse</td></tr>\n<tr><td>10</td><td>2</td><td>Goujon de fouloir M10</td><td>Inox</td><td></td></tr>\n<tr><td>11</td><td>1</td><td>Volant</td><td>Fonte</td><td>Masse 4 kg</td></tr>\n<tr><td>12</td><td>1</td><td>Siège</td><td>Inox, portée rapportée</td><td>Intégré au corps</td></tr>\n</tbody></table>\n<p>Schéma fictif : la tuyauterie arrive d'un réservoir R1 par le robinet d'isolement V1, traverse le robinet étudié V2, puis rejoint une pompe P1 par le robinet V3. Une purge V4 est placée en point bas entre V1 et V2 ; un évent V5 en point haut entre V2 et V3. Une ligne de dérivation avec le robinet V6 relie l'amont de V1 au tronçon compris entre V2 et V3.</p>"
      },
      {
       "titre": "Exemple : l'analyse modèle",
       "contenu": "<p><strong>1. Fonction.</strong> Le robinet à soupape isole ou règle le débit : en tournant le volant (11), la tige (7) se déplace grâce à la liaison hélicoïdale et appuie le clapet (6) sur le siège (12).</p>\n<p><strong>2. Ordre de démontage pour un remplacement du joint de chapeau.</strong> Après consignation : ouvrir légèrement le robinet pour décoller le clapet du siège (selon le mode opératoire), desserrer les 8 écrous (5), déposer l'ensemble chapeau (2), tige (7), clapet (6), volant (11) d'un seul bloc si le mode opératoire le prévoit, puis déposer le joint (3).</p>\n<p><strong>3. Pièces à prévoir.</strong> Joint de chapeau réf. J-50 (pièce d'usure). Si l'on refait aussi l'étanchéité de tige : 5 anneaux de tresse réf. T-22. Vérifier si la visserie (4, 5) doit être remplacée selon le mode opératoire.</p>\n<p><strong>4. Masses et manutention.</strong> Ensemble chapeau, tige, clapet et volant : au moins 25 + 4 = 29 kg, plus la tige et le clapet (masses non indiquées, à demander). Cette charge dépasse ce que l'on manipule sans aide dans de bonnes conditions, surtout en hauteur ou en tenue : prévoir un palan ou un moyen de levage avec point d'ancrage vérifié.</p>\n<p><strong>5. Isolement.</strong> Fermer V1 (amont) et V3 (aval). Mais la dérivation V6 relie l'amont de V1, qui reste sous pression, au tronçon compris entre V2 et V3 : si V6 reste ouvert, le fluide contourne V1 et réalimente le robinet par l'aval. V6 doit donc être fermé et condamné lui aussi ; s'il ne figure pas dans l'autorisation de travail, c'est un oubli à signaler avant toute intervention. Vidanger par la purge V4 et ouvrir l'évent V5 pour permettre l'entrée d'air et vérifier l'absence de pression.</p>\n<p><strong>6. Contamination et corps étrangers.</strong> L'intérieur du corps, le clapet, le siège et la face interne du chapeau ont été mouillés par le fluide : ce sont les surfaces les plus contaminées. Après dépose, l'ouverture du corps est obturée immédiatement ; l'ensemble déposé est posé sur une surface protégée dans le sas.</p>"
      },
      {
       "titre": "Exploiter l'échelle et les cotes",
       "contenu": "<p>Un plan d'ensemble permet aussi d'estimer des dimensions utiles à la préparation : encombrement du matériel démonté, hauteur de levage nécessaire, place à prévoir dans le sas. Si le plan est à l'échelle 1/5, une longueur de 8 cm mesurée sur le plan correspond à 8 × 5 = 40 cm en réalité. Lorsque des cotes sont inscrites, elles priment toujours sur la mesure faite sur le dessin, car un plan reproduit peut être agrandi ou réduit.</p>\n<p>Pour la dépose de l'ensemble chapeau et tige de l'exemple, il faut connaître la hauteur totale de l'ensemble et la course de levage nécessaire pour dégager le clapet du corps : ces valeurs déterminent la hauteur sous crochet du palan et la hauteur intérieure du sas. Une erreur sur ce point oblige à modifier le sas en cours d'intervention, avec une perte de temps et de dose.</p>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "<ul>\n<li>Lire la nomenclature de haut en bas quand elle est numérotée de bas en haut, et se tromper de pièce.</li>\n<li>Oublier qu'une même ligne de nomenclature peut correspondre à plusieurs pièces (colonne « Nb ») : 8 goujons, 5 anneaux.</li>\n<li>Ne retenir qu'un seul isolement alors qu'il faut isoler de part et d'autre du matériel, et chercher les dérivations.</li>\n<li>Oublier la purge et l'évent : un circuit isolé mais non vidangé peut rester sous pression.</li>\n<li>Additionner des masses partielles sans signaler celles qui manquent.</li>\n<li>Confondre pièce d'usure (remplacée systématiquement) et pièce de rechange (remplacée si nécessaire après contrôle).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un schéma, on cherche toujours toutes les voies par lesquelles du fluide ou de l'énergie peut atteindre le matériel : amont, aval, dérivations, lignes d'équilibrage, alimentation de secours. Une consignation qui oublie une voie n'est pas une consignation.</div>"
      },
      {
       "titre": "Utiliser ces documents sur le terrain",
       "contenu": "<p>Sur le chantier, le plan d'ensemble et la nomenclature servent aussi de support au <strong>contrôle des pièces</strong> : on compare la référence du joint neuf reçu à celle de la nomenclature, on compte les pièces déposées et remontées (aucune pièce ne doit manquer ni rester en trop), on vérifie l'orientation des pièces au remontage.</p>\n<p>Le schéma est utilisé pour vérifier la consignation sur place : on suit physiquement les tuyauteries pour identifier les robinets cités dans l'autorisation de travail et constater leur position et leur condamnation.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les intervenants photographient souvent le matériel avant démontage, lorsque c'est autorisé, pour faciliter le remontage. Les photos prises en zone contrôlée nécessitent un appareil autorisé par le site et dédié à la zone, car il ne pourra pas forcément en ressortir.</div>"
      }
     ],
     "points_cles": [
      "Le plan d'ensemble et la nomenclature décrivent le matériel ; le schéma le situe dans son circuit.",
      "Chaque repère de bulle renvoie à une ligne de nomenclature ; la colonne Nb donne le nombre de pièces.",
      "L'ordre de démontage va de l'extérieur vers l'intérieur, limité au nécessaire.",
      "Les pièces d'usure sont listées avec leurs références avant l'intervention.",
      "Les masses relevées déterminent les moyens de manutention ; les masses manquantes sont signalées.",
      "L'isolement se fait en amont et en aval, en recherchant les dérivations.",
      "Purge en point bas et évent en point haut permettent de vidanger et de vérifier l'absence de pression.",
      "Les surfaces mouillées par le fluide sont les plus contaminées."
     ],
     "lexique": [
      {
       "terme": "Plan d'ensemble",
       "def": "Dessin d'un matériel assemblé, souvent en coupe, avec les repères des pièces."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste des pièces d'un ensemble avec repère, nombre, désignation, matériau et référence."
      },
      {
       "terme": "Pièce d'usure",
       "def": "Pièce remplacée systématiquement lors de l'intervention : joint, tresse."
      },
      {
       "terme": "Schéma de circuit",
       "def": "Représentation symbolique d'un circuit et de ses matériels."
      },
      {
       "terme": "Purge",
       "def": "Robinet en point bas permettant de vidanger un circuit."
      },
      {
       "terme": "Évent",
       "def": "Robinet en point haut permettant l'entrée ou la sortie d'air."
      },
      {
       "terme": "Dérivation",
       "def": "Ligne parallèle qui contourne un ou plusieurs matériels d'un circuit."
      },
      {
       "terme": "Isolement",
       "def": "Fermeture des organes séparant un matériel du reste du circuit."
      }
     ]
    },
    {
     "id": "btiin-doc-suivi-dechets-fds",
     "titre": "Les documents de suivi des déchets et la fiche de données de sécurité",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire une consigne de tri et une fiche de suivi de déchets",
      "Vérifier la conformité d'un contenant de déchets à partir de son étiquette et de ses mesures",
      "Prévoir les déchets d'un chantier et les contenants nécessaires",
      "Extraire d'une fiche de données de sécurité les informations utiles à un chantier de décontamination",
      "Rédiger une analyse argumentée de documents liés aux déchets"
     ],
     "sections": [
      {
       "titre": "Les documents de la filière déchets",
       "contenu": "<p>La gestion des déchets sur un chantier nucléaire s'appuie sur plusieurs documents, dont la forme varie selon les exploitants :</p>\n<table><thead><tr><th>Document</th><th>Rôle</th></tr></thead><tbody>\n<tr><td>Consigne de tri du site</td><td>Définit les familles de déchets, les contenants (couleur, type), les interdits, les limites de remplissage</td></tr>\n<tr><td>Prévision de déchets du chantier</td><td>Liste les déchets attendus, leurs quantités et les contenants à approvisionner</td></tr>\n<tr><td>Étiquette de contenant</td><td>Identifie chaque sac, fût ou caisson : provenance, famille, date, mesures</td></tr>\n<tr><td>Fiche de suivi des déchets</td><td>Récapitule les contenants produits par le chantier, leurs mesures et leur destination</td></tr>\n<tr><td>Fiche de données de sécurité (FDS)</td><td>Décrit les dangers d'un produit chimique utilisé (décontamination, nettoyage) et les précautions, y compris pour les déchets qu'il génère</td></tr>\n</tbody></table>\n<p>À l'épreuve écrite, la partie consacrée aux déchets induits demande souvent d'identifier les déchets produits par l'intervention, de les classer, de choisir les contenants et de vérifier la conformité d'une fiche ou d'une étiquette.</p>"
      },
      {
       "titre": "Structure d'une fiche de suivi et d'une étiquette",
       "contenu": "<p>Une <strong>étiquette de contenant</strong> comporte en général : un identifiant unique (numéro ou code-barres), le site et le local de production, le chantier ou l'ordre de travail, la famille de déchet, la date de fermeture, le débit de dose au contact (et parfois à 1 m), le résultat du contrôle de contamination externe, la masse, le nom de l'opérateur.</p>\n<p>La <strong>fiche de suivi</strong> regroupe ces informations pour tous les contenants d'un chantier, avec une colonne de destination (aire d'entreposage, installation de traitement) et la validation du service compétent. Elle permet de vérifier que chaque contenant produit est bien arrivé à destination.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler une fiche de suivi de déchets. 1) Vérifier l'identification : chantier, local, dates, numéros des contenants uniques et lisibles. 2) Pour chaque contenant, vérifier que la famille indiquée correspond au contenu décrit et au type de contenant prévu par la consigne de tri. 3) Comparer les mesures aux seuils de la consigne : débit au contact, contamination externe, masse maximale. 4) Vérifier la cohérence des unités (µSv/h ou mSv/h). 5) Vérifier que les cases obligatoires sont remplies et signées. 6) Lister les non-conformités et l'action pour chacune : réétiqueter, retrier, décontaminer l'extérieur du contenant, faire mesurer par le service de radioprotection, isoler un contenant au débit élevé.</div>"
      },
      {
       "titre": "Exemple : les documents décrits",
       "contenu": "<p><strong>Extrait fictif de consigne de tri</strong> : sac jaune pour les déchets incinérables (textiles, papiers, plastiques autorisés) ; fût métallique pour les déchets métalliques ; emballage spécifique pour les filtres ; interdits dans les sacs : liquides, objets coupants non protégés, aérosols, piles, métaux. Limite de masse d'un sac : 10 kg. Tout contenant dont le débit au contact dépasse 0,5 mSv/h est signalé au service de radioprotection avant déplacement. Contamination externe : non détectable.</p>\n<p><strong>Extrait fictif de fiche de suivi du chantier de remplacement du joint de chapeau</strong> :</p>\n<table><thead><tr><th>N° contenant</th><th>Famille déclarée</th><th>Contenu décrit</th><th>Masse</th><th>Débit contact</th><th>Contamination externe</th></tr></thead><tbody>\n<tr><td>S-001</td><td>Incinérable, sac jaune</td><td>Surbottes, gants, adhésifs</td><td>6 kg</td><td>8 µSv/h</td><td>Non détectable</td></tr>\n<tr><td>S-002</td><td>Incinérable, sac jaune</td><td>Chiffons, ancien joint de chapeau graphite armé</td><td>7 kg</td><td>0,9 mSv/h</td><td>Non détectable</td></tr>\n<tr><td>S-003</td><td>Incinérable, sac jaune</td><td>Vinyle du sas</td><td>12 kg</td><td>15 µSv/h</td><td>Non détectable</td></tr>\n<tr><td>F-001</td><td>Métallique, fût</td><td>Écrous remplacés</td><td>3 kg</td><td>20 µSv/h</td><td>Non mesurée</td></tr>\n<tr><td>S-004</td><td>Incinérable, sac jaune</td><td>Chiffons imbibés de produit de décontamination, flacon vide</td><td>4 kg</td><td>10</td><td>Non détectable</td></tr>\n</tbody></table>"
      },
      {
       "titre": "Exemple : l'analyse modèle",
       "contenu": "<p><strong>S-001</strong> : conforme (famille, contenu, masse, mesures).</p>\n<p><strong>S-002</strong> : deux non-conformités. Le joint de chapeau en graphite armé contient une armature métallique : il ne relève pas de la famille incinérable ; il doit être retiré et orienté vers la famille prévue par la consigne (métallique ou spéciale, à confirmer). De plus, le débit au contact de 0,9 mSv/h dépasse le seuil de signalement de 0,5 mSv/h : le sac doit être signalé au service de radioprotection avant tout déplacement. Le retri doit être fait dans le sas, sous contrôle radiologique, car le joint est probablement à l'origine du débit.</p>\n<p><strong>S-003</strong> : la masse de 12 kg dépasse la limite de 10 kg : répartir le vinyle dans deux sacs.</p>\n<p><strong>F-001</strong> : contamination externe « non mesurée » : contrôle obligatoire avant sortie de la zone de chantier.</p>\n<p><strong>S-004</strong> : l'unité du débit est absente (« 10 ») : la valeur est inexploitable, elle peut signifier 10 µSv/h ou 10 mSv/h ; nouvelle mesure et correction nécessaires. Par ailleurs, des chiffons « imbibés » laissent supposer la présence de liquide, interdite dans les sacs, et le flacon de produit chimique vide doit suivre la filière indiquée par la fiche de données de sécurité du produit et par la consigne (déchet chimique contaminé possible) : à vérifier avant fermeture définitive.</p>\n<p><strong>Bilan</strong> : un contenant conforme sur cinq. Actions prioritaires : signaler S-002 (débit), retrier S-002 et S-004, répartir S-003, mesurer F-001, corriger l'unité de S-004. Pour le retour d'expérience : prévoir dès la préparation un contenant dédié aux joints usagés et rappeler au briefing la règle de l'unité obligatoire.</p>"
      },
      {
       "titre": "La fiche de données de sécurité",
       "contenu": "<p>Lorsqu'un chantier utilise un produit chimique (gel de décontamination, solvant de nettoyage, produit de dégraissage), sa <strong>fiche de données de sécurité</strong> (FDS) doit être disponible. Elle est fournie par le fabricant et comporte <strong>16 rubriques</strong> normalisées par la réglementation européenne (règlement REACH). Les plus utiles sur un chantier :</p>\n<table><thead><tr><th>Rubrique</th><th>Contenu</th><th>Utilisation</th></tr></thead><tbody>\n<tr><td>2 - Identification des dangers</td><td>Pictogrammes, mention d'avertissement, mentions de danger (H) et conseils de prudence (P)</td><td>Connaître les dangers</td></tr>\n<tr><td>4 - Premiers secours</td><td>Conduite à tenir en cas de contact, d'inhalation, d'ingestion</td><td>Réagir en cas d'accident</td></tr>\n<tr><td>7 - Manipulation et stockage</td><td>Précautions, incompatibilités</td><td>Organiser le stockage sur chantier</td></tr>\n<tr><td>8 - Contrôle de l'exposition, protection individuelle</td><td>Valeurs limites d'exposition, ventilation, type de gants, protection oculaire et respiratoire</td><td>Choisir les EPI</td></tr>\n<tr><td>10 - Stabilité et réactivité</td><td>Produits incompatibles, réactions dangereuses</td><td>Éviter les mélanges</td></tr>\n<tr><td>13 - Considérations relatives à l'élimination</td><td>Mode d'élimination du produit et des emballages</td><td>Orienter les déchets</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en zone nucléaire, un déchet chimique contaminé cumule les deux contraintes : il ne peut pas suivre une filière chimique ordinaire ni être mélangé aux déchets radioactifs courants. La rubrique 13 de la FDS et la consigne de tri du site doivent être lues ensemble, et le service déchets consulté en cas de doute.</div>"
      },
      {
       "titre": "Méthode : relier FDS et chantier",
       "contenu": "<p>Pour exploiter une FDS dans une préparation de chantier, on procède en quatre temps :</p>\n<ol>\n<li><strong>Dangers</strong> : relever les pictogrammes et mentions de danger (par exemple corrosif, irritant, inflammable) et les relier aux étapes où le produit est utilisé.</li>\n<li><strong>Protection</strong> : déduire de la rubrique 8 le type de gants (matériau et épaisseur), la protection des yeux, la ventilation ou protection respiratoire ; vérifier leur compatibilité avec les tenues de radioprotection (par exemple des gants résistants au produit portés sur ou sous les gants de zone selon la consigne).</li>\n<li><strong>Incompatibilités</strong> : rubrique 10 ; ne pas utiliser le produit avec un autre produit incompatible ni le stocker à proximité.</li>\n<li><strong>Déchets</strong> : rubrique 13 et consigne de tri : prévoir le contenant adapté pour les chiffons, le produit usagé et les flacons.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une analyse de documents sur les déchets se conclut toujours par des actions concrètes : quel contenant retrier, quelle mesure refaire, qui prévenir, quelle amélioration apporter à la préparation.</div>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "<ul>\n<li>Classer un déchet d'après son aspect principal sans regarder sa composition (joint armé, chiffon imbibé, flacon de produit).</li>\n<li>Ignorer une valeur sans unité ou une case « non mesurée ».</li>\n<li>Comparer un débit en mSv/h à un seuil en µSv/h sans conversion.</li>\n<li>Oublier la masse maximale des contenants.</li>\n<li>Traiter la FDS comme un document de sécurité seulement, en oubliant sa rubrique sur l'élimination.</li>\n<li>Déplacer un contenant au débit élevé avant d'avoir prévenu le service de radioprotection.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les erreurs de tri sont détectées lors des contrôles des centres de traitement ou d'entreposage et remontent à l'entreprise d'origine grâce à l'identifiant du contenant. Une étiquette bien remplie protège l'intervenant : elle prouve qu'il a appliqué la consigne et permet de corriger rapidement une erreur.</div>"
      }
     ],
     "points_cles": [
      "Consigne de tri, prévision de déchets, étiquette, fiche de suivi et FDS forment la chaîne documentaire des déchets.",
      "Chaque contenant porte un identifiant unique, sa famille, ses mesures et sa masse.",
      "On vérifie famille, contenu, masse, débit, contamination externe et unités.",
      "Un débit au-dessus du seuil de la consigne impose de prévenir le service de radioprotection avant déplacement.",
      "Un déchet se classe selon sa composition réelle, pas son aspect.",
      "La FDS compte 16 rubriques ; les rubriques 2, 4, 7, 8, 10 et 13 sont essentielles sur chantier.",
      "Un déchet chimique contaminé suit une filière spécifique.",
      "L'analyse se conclut par des actions concrètes et des améliorations de la préparation."
     ],
     "lexique": [
      {
       "terme": "Consigne de tri",
       "def": "Document du site définissant les familles de déchets, les contenants et les interdits."
      },
      {
       "terme": "Fiche de suivi des déchets",
       "def": "Document récapitulant les contenants produits par un chantier, leurs mesures et leur destination."
      },
      {
       "terme": "Étiquette de contenant",
       "def": "Identification d'un sac, fût ou caisson de déchets avec ses informations de traçabilité."
      },
      {
       "terme": "Fiche de données de sécurité (FDS)",
       "def": "Document en 16 rubriques décrivant les dangers d'un produit chimique et les précautions associées."
      },
      {
       "terme": "Mention de danger",
       "def": "Phrase normalisée (H) décrivant la nature d'un danger d'un produit."
      },
      {
       "terme": "Conseil de prudence",
       "def": "Phrase normalisée (P) décrivant une mesure de précaution."
      },
      {
       "terme": "Déchet chimique contaminé",
       "def": "Déchet présentant à la fois un danger chimique et une contamination radioactive."
      },
      {
       "terme": "Non-conformité",
       "def": "Écart d'un produit ou d'un document par rapport à une exigence."
      }
     ]
    }
   ]
  }
 ]
};
