/* Polymates — Bac pro Métiers du froid et des énergies renouvelables — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-froid"] = {
 "id": "bp-froid",
 "nom": "Métiers du froid et des énergies renouvelables",
 "icone": "🎓",
 "couleur": "#e6c27e",
 "intro": "Le baccalauréat professionnel Métiers du froid et des énergies renouvelables forme des techniciens qui installent, mettent en service et entretiennent les installations de froid commercial et industriel, de climatisation et de pompes à chaleur. Il mène aux métiers de technicien frigoriste, technicien en climatisation et génie climatique, ou technicien de maintenance de pompes à chaleur, et permet d'obtenir l'attestation d'aptitude à la manipulation des fluides frigorigènes de catégorie I. Ce cours couvre les savoirs associés de la première et de la terminale, en prolongement du cours de seconde de la famille des métiers des transitions numérique et énergétique. Il comprend un cours théorique (cadre professionnel et réglementation des fluides, thermodynamique et composants du circuit frigorifique, électricité, hydraulique, aéraulique et systèmes, installation, mise en service et maintenance) et un bloc d'analyse de documents consacré aux documents professionnels exploités à l'épreuve écrite de préparation d'une intervention.",
 "parties": [
  {
   "titre": "Partie 1 — Environnement professionnel, réglementation et sécurité",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmfer-cadre-intervention",
     "titre": "Le cadre d'une intervention frigorifique : acteurs, étapes et responsabilités",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Situer l'entreprise de froid et de climatisation parmi les acteurs d'un chantier ou d'un contrat de maintenance.",
      "Décrire les étapes d'une intervention, de la demande du client à la clôture du dossier.",
      "Identifier les documents administratifs qui encadrent chaque étape.",
      "Distinguer les garanties légales et les responsabilités de l'installateur.",
      "Relier la démarche qualité de l'entreprise aux gestes du technicien."
     ],
     "sections": [
      {
       "titre": "Les entreprises du froid et de la climatisation",
       "contenu": "\n<p>Le titulaire du bac pro Métiers du froid et des énergies renouvelables travaille comme <strong>technicien frigoriste</strong>, technicien en climatisation ou technicien de maintenance de pompes à chaleur. Il intervient sur trois grandes familles d'installations : le <strong>froid commercial</strong> (meubles frigorifiques de magasins, chambres froides de restaurants et de commerces), le <strong>froid industriel</strong> (entrepôts frigorifiques, industries agroalimentaires, process) et le <strong>conditionnement d'air</strong> (climatiseurs, pompes à chaleur, centrales de traitement d'air, production d'eau glacée).</p>\n<p>Les entreprises du secteur sont de tailles très variées :</p>\n<ul>\n<li>l'<strong>installateur frigoriste</strong> ou climaticien, souvent une PME de 5 à 50 salariés, qui conçoit en partie, pose et met en service les installations ;</li>\n<li>l'<strong>entreprise de maintenance</strong>, qui assure l'entretien préventif et le dépannage dans le cadre de contrats, souvent avec astreinte ;</li>\n<li>le <strong>service technique intégré</strong> d'un grand utilisateur (chaîne de supermarchés, hôpital, industriel) qui entretient ses propres équipements ;</li>\n<li>les <strong>constructeurs et distributeurs</strong> de matériel, qui emploient des techniciens d'assistance et de mise en service.</li>\n</ul>\n<p>Quelle que soit sa taille, une entreprise qui manipule des fluides frigorigènes fluorés doit détenir une <strong>attestation de capacité</strong> délivrée par un organisme agréé, et chacun de ses techniciens une <strong>attestation d'aptitude</strong> adaptée à sa catégorie d'activité. Ces deux documents sont détaillés avec la réglementation des fluides ; il suffit ici de retenir qu'aucune intervention sur un circuit frigorifique n'est possible sans eux.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le technicien est souvent seul chez le client. Il représente l'entreprise : sa tenue, sa ponctualité, la propreté du chantier et la qualité de ses explications comptent autant que la qualité technique de son travail pour la fidélisation du client.</div>"
      },
      {
       "titre": "Les intervenants d'une opération",
       "contenu": "\n<p>Une installation frigorifique ou de climatisation fait intervenir plusieurs acteurs dont les rôles doivent être clairement identifiés avant toute intervention.</p>\n<table>\n<thead><tr><th>Intervenant</th><th>Rôle</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Maître d'ouvrage</td><td>Commande et paie l'ouvrage, en devient propriétaire</td><td>Gérant d'un supermarché, syndic, collectivité</td></tr>\n<tr><td>Maître d'œuvre</td><td>Conçoit le projet, rédige les pièces écrites, dirige et contrôle les travaux</td><td>Architecte, bureau d'études fluides</td></tr>\n<tr><td>Bureau d'études</td><td>Dimensionne les installations (bilans, sélection, plans)</td><td>Bureau d'études thermiques et frigorifiques</td></tr>\n<tr><td>Entreprise titulaire du lot</td><td>Réalise les travaux de son lot</td><td>Lot « froid » ou lot « CVC » (chauffage, ventilation, climatisation)</td></tr>\n<tr><td>Autres corps d'état</td><td>Réalisent les lots voisins</td><td>Électricien, plombier, plaquiste, poseur de panneaux isothermes</td></tr>\n<tr><td>Coordonnateur SPS</td><td>Coordonne la sécurité et la protection de la santé sur le chantier</td><td>Obligatoire dès que plusieurs entreprises interviennent</td></tr>\n<tr><td>Exploitant</td><td>Utilise l'installation au quotidien</td><td>Chef de rayon, responsable technique d'un site</td></tr>\n<tr><td>Fournisseur, constructeur</td><td>Livre le matériel, assure l'assistance technique</td><td>Fabricant de groupes de condensation, grossiste</td></tr>\n</tbody>\n</table>\n<p>Dans la maintenance, la situation est plus simple : le <strong>client</strong> (souvent l'exploitant) a signé un <strong>contrat de maintenance</strong> qui précise les équipements couverts, la fréquence des visites préventives, les délais d'intervention en dépannage et ce qui est compris dans le prix (main-d'œuvre, déplacement, pièces, fluide).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'interlocuteur présent sur le site n'est pas toujours celui qui peut décider. Un employé peut signaler une panne mais n'a pas forcément le pouvoir d'accepter un devis de réparation. Avant d'engager des travaux non prévus au contrat, il faut obtenir l'accord écrit de la personne habilitée.</div>"
      },
      {
       "titre": "Les étapes d'une intervention",
       "contenu": "\n<p>Toute intervention, qu'il s'agisse d'une installation neuve ou d'un dépannage, suit une logique en cinq temps.</p>\n<ol>\n<li><strong>Prise en charge de la demande</strong> : recueil du besoin ou du symptôme (« la chambre froide ne descend plus en dessous de +8 °C »), identification de l'équipement, du lieu, de l'urgence. Un <strong>ordre de travail</strong> (ou bon d'intervention) est établi.</li>\n<li><strong>Préparation</strong> : consultation du dossier technique et de l'historique, choix des matériels et de l'outillage, vérification des approvisionnements, analyse des risques, organisation du déplacement.</li>\n<li><strong>Réalisation</strong> : installation, remplacement d'un composant, contrôle d'étanchéité, réglages, en respectant les procédures et les règles de sécurité.</li>\n<li><strong>Contrôle et mise en service</strong> : essais, relevés de fonctionnement, vérification que l'installation répond au besoin.</li>\n<li><strong>Clôture</strong> : rédaction du compte rendu ou de la fiche d'intervention, signature du client, mise à jour du registre de l'installation, retour des déchets et des fluides récupérés, facturation.</li>\n</ol>\n<p>Pour une installation neuve, la clôture comprend la <strong>réception</strong> des travaux : le maître d'ouvrage constate que l'ouvrage est conforme à la commande, avec ou sans <strong>réserves</strong> (défauts à corriger). La réception est formalisée par un <strong>procès-verbal de réception</strong>. Elle déclenche le transfert de la garde de l'ouvrage au client et le point de départ des garanties.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour préparer une intervention, se poser systématiquement six questions. Quoi ? (équipement, marque, modèle, fluide, charge). Où ? (adresse, accès, local technique, hauteur de travail). Quand ? (créneau imposé par le client, durée d'arrêt admissible des denrées). Comment ? (procédure, outillage, pièces). Avec quels risques ? (électrique, pression, fluide inflammable, travail en hauteur, coactivité). Quels documents produire ? (fiche d'intervention, compte rendu, devis complémentaire).</div>"
      },
      {
       "titre": "Les documents administratifs",
       "contenu": "\n<p>Chaque étape laisse une trace écrite. Ces documents protègent à la fois le client et l'entreprise.</p>\n<table>\n<thead><tr><th>Document</th><th>Émis par</th><th>Contenu essentiel</th></tr></thead>\n<tbody>\n<tr><td>Devis</td><td>Entreprise</td><td>Description des travaux, quantités, prix unitaires, total HT, TVA, TTC, durée de validité</td></tr>\n<tr><td>Bon de commande ou devis signé</td><td>Client</td><td>Accord sur le devis : il devient un engagement contractuel</td></tr>\n<tr><td>Ordre de travail</td><td>Entreprise (planning)</td><td>Client, adresse, équipement, nature de l'intervention, technicien désigné</td></tr>\n<tr><td>Bon de livraison</td><td>Fournisseur</td><td>Liste du matériel livré, à contrôler à la réception</td></tr>\n<tr><td>Fiche d'intervention fluides</td><td>Technicien</td><td>Obligatoire dès qu'on intervient sur le circuit d'un équipement contenant un fluide réglementé</td></tr>\n<tr><td>Compte rendu d'intervention</td><td>Technicien</td><td>Constat, travaux réalisés, pièces remplacées, mesures, préconisations</td></tr>\n<tr><td>Procès-verbal de réception</td><td>Maître d'ouvrage</td><td>Date, réserves éventuelles, signatures</td></tr>\n<tr><td>Dossier des ouvrages exécutés (DOE)</td><td>Entreprise</td><td>Plans conformes à l'exécution, notices, fiches techniques, PV d'essais</td></tr>\n</tbody>\n</table>\n<p>Le <strong>registre</strong> de l'installation (parfois appelé carnet d'entretien) regroupe l'historique : fiches d'intervention, contrôles d'étanchéité, quantités de fluide ajoutées et récupérées. Il est conservé par l'exploitant et doit être présenté lors des contrôles administratifs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un travail non tracé est, juridiquement, un travail non fait. Une charge de fluide non inscrite, un réglage non noté ou une réserve non signalée peuvent se retourner contre l'entreprise en cas de litige.</div>"
      },
      {
       "titre": "Garanties et responsabilités",
       "contenu": "\n<p>L'installateur engage sa responsabilité sur les travaux qu'il réalise. Pour les travaux de bâtiment, le Code civil prévoit trois garanties qui démarrent à la réception :</p>\n<ul>\n<li>la <strong>garantie de parfait achèvement</strong> (1 an) : l'entreprise doit réparer tous les désordres signalés à la réception ou apparus pendant l'année qui suit ;</li>\n<li>la <strong>garantie de bon fonctionnement</strong>, dite biennale (2 ans minimum) : elle couvre les éléments d'équipement dissociables de l'ouvrage, c'est-à-dire qui peuvent être enlevés sans détériorer le bâti (un climatiseur, un groupe de condensation, une pompe) ;</li>\n<li>la <strong>garantie décennale</strong> (10 ans) : elle couvre les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination, y compris par un équipement indissociable. L'entreprise doit être assurée pour cette garantie avant d'ouvrir un chantier.</li>\n</ul>\n<p>S'y ajoute la <strong>garantie du constructeur</strong> sur le matériel, souvent conditionnée à une mise en service conforme à la notice et à un entretien régulier attesté. Un compresseur remplacé sous garantie sera refusé par le fabricant si le technicien ne peut pas prouver que le circuit a été correctement tiré au vide et chargé.</p>\n<p>Le technicien a aussi une <strong>responsabilité personnelle</strong> : respecter les consignes de sécurité, ne pas réaliser une opération pour laquelle il n'est ni formé ni habilité, ne jamais relâcher volontairement de fluide frigorigène dans l'atmosphère. Ce dernier point constitue une infraction sanctionnée pénalement.</p>\n<p>Enfin, certaines aides publiques à la rénovation énergétique imposent que l'installateur d'une pompe à chaleur soit titulaire d'une qualification reconnue « RGE » (reconnu garant de l'environnement). Les conditions évoluent régulièrement et doivent être vérifiées au moment du chantier.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la garantie de parfait achèvement ne couvre pas l'usure normale ni les dégradations dues à un mauvais usage par le client. Inversement, un défaut d'étanchéité apparu trois mois après la mise en service relève bien de l'entreprise : d'où l'importance d'un contrôle d'étanchéité soigné dès l'installation.</div>"
      },
      {
       "titre": "La démarche qualité dans l'entreprise",
       "contenu": "\n<p>La <strong>qualité</strong> est l'aptitude d'un produit ou d'un service à satisfaire les besoins du client. Dans une entreprise de froid, elle se traduit par des installations qui atteignent les températures demandées, consomment peu, ne fuient pas et durent longtemps.</p>\n<p>De nombreuses entreprises appliquent une démarche inspirée de la norme ISO 9001, fondée sur l'amélioration continue résumée par la <strong>roue de Deming</strong> (PDCA) :</p>\n<table>\n<thead><tr><th>Étape</th><th>Signification</th><th>Exemple en froid</th></tr></thead>\n<tbody>\n<tr><td>P — Plan</td><td>Planifier</td><td>Rédiger une procédure de tirage au vide et de charge</td></tr>\n<tr><td>D — Do</td><td>Réaliser</td><td>Appliquer la procédure sur chaque chantier</td></tr>\n<tr><td>C — Check</td><td>Vérifier</td><td>Analyser les retours : fuites constatées dans l'année suivant la pose</td></tr>\n<tr><td>A — Act</td><td>Améliorer</td><td>Modifier la procédure (par exemple généraliser le sertissage sur certains diamètres)</td></tr>\n</tbody>\n</table>\n<p>Pour le technicien, la qualité passe par des gestes concrets : suivre les procédures écrites, utiliser des appareils de mesure étalonnés, renseigner complètement les documents, signaler les non-conformités. Une <strong>non-conformité</strong> est un écart par rapport à une exigence (température non atteinte, raccord qui fuit, document manquant). Elle doit être enregistrée, traitée, et sa cause analysée pour éviter qu'elle se reproduise.</p>\n<p>La communication fait partie de la qualité. À l'oral, le technicien explique au client ce qu'il a constaté et fait, avec un vocabulaire adapté. À l'écrit, il rédige des comptes rendus factuels : date, constat mesuré, action, résultat, préconisation. Les notices des fabricants sont souvent en anglais : savoir y repérer les termes essentiels (suction, discharge, superheat, subcooling, wiring diagram) fait partie du métier.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un compte rendu du type « dépannage effectué, RAS » n'apporte rien. Un bon compte rendu indique par exemple : « Chambre froide négative à −12 °C pour une consigne de −20 °C. Évaporateur pris en glace, résistance de dégivrage coupée (mesure : circuit ouvert). Résistance remplacée, dégivrage forcé, température à −19 °C après 2 h. Préconisation : contrôle des autres résistances lors de la prochaine visite. »</div>"
      }
     ],
     "points_cles": [
      "Le technicien frigoriste intervient en froid commercial, froid industriel et conditionnement d'air.",
      "Maître d'ouvrage, maître d'œuvre, entreprise, autres lots et exploitant ont des rôles distincts à identifier avant d'intervenir.",
      "Toute intervention suit cinq temps : demande, préparation, réalisation, contrôle et mise en service, clôture.",
      "Devis signé, ordre de travail, fiche d'intervention, compte rendu, PV de réception et DOE tracent l'intervention.",
      "Les garanties de parfait achèvement (1 an), de bon fonctionnement (2 ans) et décennale (10 ans) démarrent à la réception.",
      "Aucune intervention sur un circuit contenant un fluide fluoré n'est possible sans attestation de capacité de l'entreprise et attestation d'aptitude du technicien.",
      "La démarche qualité repose sur l'amélioration continue (PDCA) et sur le traitement des non-conformités.",
      "Un compte rendu utile est factuel et chiffré : constat mesuré, action, résultat, préconisation."
     ],
     "lexique": [
      {
       "terme": "Maître d'ouvrage",
       "def": "Personne ou organisme qui commande et finance l'ouvrage."
      },
      {
       "terme": "Maître d'œuvre",
       "def": "Personne chargée de concevoir le projet et de diriger l'exécution des travaux."
      },
      {
       "terme": "Ordre de travail",
       "def": "Document interne qui déclenche une intervention et en précise l'objet, le lieu et l'intervenant."
      },
      {
       "terme": "Réception",
       "def": "Acte par lequel le maître d'ouvrage accepte l'ouvrage, avec ou sans réserves ; point de départ des garanties."
      },
      {
       "terme": "Réserve",
       "def": "Défaut constaté lors de la réception que l'entreprise doit corriger."
      },
      {
       "terme": "DOE",
       "def": "Dossier des ouvrages exécutés : plans, notices et procès-verbaux remis au client en fin de chantier."
      },
      {
       "terme": "Garantie décennale",
       "def": "Responsabilité de dix ans pour les dommages compromettant la solidité ou l'usage de l'ouvrage."
      },
      {
       "terme": "Non-conformité",
       "def": "Écart constaté par rapport à une exigence définie."
      },
      {
       "terme": "Attestation de capacité",
       "def": "Autorisation délivrée à une entreprise pour manipuler des fluides frigorigènes réglementés."
      },
      {
       "terme": "Registre de l'installation",
       "def": "Historique des interventions, contrôles et mouvements de fluide d'un équipement."
      }
     ]
    },
    {
     "id": "bmfer-reglementation-fluides",
     "titre": "Réglementation des fluides frigorigènes et gestion des déchets",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Situer la réglementation des fluides dans les grands accords internationaux sur l'ozone et le climat.",
      "Calculer la charge d'un équipement en tonnes équivalent CO2 et en déduire la périodicité du contrôle d'étanchéité.",
      "Décrire les obligations de l'opérateur : attestations, fiche d'intervention, marquage, registre.",
      "Organiser la récupération, le transfert et la traçabilité des fluides usagés.",
      "Trier et faire éliminer les déchets d'un chantier de froid selon leur nature."
     ],
     "sections": [
      {
       "titre": "Des accords internationaux à la réglementation européenne",
       "contenu": "\n<p>Le cours de seconde a présenté les deux atteintes à l'environnement que peuvent causer les fluides frigorigènes : la destruction de la couche d'ozone (indicateur <strong>ODP</strong>) et le renforcement de l'effet de serre (indicateur <strong>PRP</strong>, potentiel de réchauffement planétaire, en anglais GWP). La réglementation actuelle découle de plusieurs étapes :</p>\n<table>\n<thead><tr><th>Texte</th><th>Objet</th><th>Conséquence pour le frigoriste</th></tr></thead>\n<tbody>\n<tr><td>Protocole de Montréal (1987)</td><td>Protection de la couche d'ozone</td><td>Disparition des CFC (R12, R502) puis des HCFC (R22)</td></tr>\n<tr><td>Protocole de Kyoto (1997), accord de Paris (2015)</td><td>Réduction des gaz à effet de serre</td><td>Les HFC sont visés comme gaz à effet de serre</td></tr>\n<tr><td>Amendement de Kigali (2016)</td><td>Réduction mondiale progressive des HFC</td><td>Généralisation des fluides à faible PRP</td></tr>\n<tr><td>Règlement européen F-Gas (UE) 2024/573</td><td>Gaz à effet de serre fluorés dans l'Union européenne</td><td>Contrôles d'étanchéité, certification, quotas, interdictions de mise sur le marché</td></tr>\n<tr><td>Code de l'environnement (France)</td><td>Transposition et compléments nationaux</td><td>Attestations de capacité et d'aptitude, fiche d'intervention, traçabilité des déchets</td></tr>\n</tbody>\n</table>\n<p>Le règlement F-Gas actuel, en vigueur depuis le 11 mars 2024, remplace le règlement (UE) n° 517/2014. Il poursuit la <strong>réduction progressive</strong> (phase-down) des quantités de HFC mises sur le marché européen grâce à un système de quotas, jusqu'à leur quasi-disparition vers 2050. Il interdit aussi, selon un calendrier qui s'étale sur plusieurs années, la mise sur le marché de certains équipements neufs utilisant des fluides à PRP élevé. Conséquence directe : les fluides comme le R404A deviennent rares et chers, et le parc évolue vers des HFO, des mélanges à faible PRP et des fluides naturels (CO<sub>2</sub>, propane, ammoniac).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le règlement F-Gas fixe trois types d'obligations : limiter les fuites (contrôles, réparations, récupération), former et certifier les personnes et les entreprises, réduire l'usage des fluides à fort PRP (quotas et interdictions).</div>"
      },
      {
       "titre": "La charge en tonnes équivalent CO2",
       "contenu": "\n<p>Les obligations ne dépendent pas de la masse de fluide mais de son impact climatique, exprimé en <strong>tonnes équivalent CO<sub>2</sub></strong> (t éq. CO<sub>2</sub>). On le calcule ainsi :</p>\n<p><strong>charge en t éq. CO<sub>2</sub> = charge en kg × PRP ÷ 1 000</strong></p>\n<p>Le PRP de chaque fluide figure sur la fiche technique du fluide, sur l'étiquette de l'équipement et dans les annexes du règlement. Quelques valeurs couramment utilisées :</p>\n<table>\n<thead><tr><th>Fluide</th><th>Type</th><th>PRP (valeur usuelle)</th><th>Usage typique</th></tr></thead>\n<tbody>\n<tr><td>R404A</td><td>Mélange HFC</td><td>3 922</td><td>Froid commercial ancien, en voie de disparition</td></tr>\n<tr><td>R410A</td><td>Mélange HFC</td><td>2 088</td><td>Climatisation et pompes à chaleur</td></tr>\n<tr><td>R134a</td><td>HFC pur</td><td>1 430</td><td>Froid positif, groupes d'eau glacée</td></tr>\n<tr><td>R449A</td><td>Mélange HFC/HFO</td><td>1 397</td><td>Remplacement du R404A</td></tr>\n<tr><td>R32</td><td>HFC pur</td><td>675</td><td>Climatisation et PAC récentes</td></tr>\n<tr><td>R744 (CO<sub>2</sub>)</td><td>Naturel</td><td>1</td><td>Froid commercial, PAC eau chaude</td></tr>\n<tr><td>R290 (propane)</td><td>Naturel</td><td>3</td><td>Petits équipements autonomes, PAC</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une chambre froide négative contient 12 kg de R404A. Charge = 12 × 3 922 ÷ 1 000 = 47,1 t éq. CO<sub>2</sub>. Un climatiseur de bureau contient 2,4 kg de R410A : 2,4 × 2 088 ÷ 1 000 = 5,0 t éq. CO<sub>2</sub>. Un groupe d'eau glacée contient 40 kg de R134a : 40 × 1 430 ÷ 1 000 = 57,2 t éq. CO<sub>2</sub>. On constate qu'une petite charge de fluide à fort PRP peut peser plus lourd qu'une grosse charge de fluide à faible PRP.</div>"
      },
      {
       "titre": "Le contrôle d'étanchéité périodique",
       "contenu": "\n<p>L'exploitant d'un équipement doit faire réaliser un <strong>contrôle d'étanchéité</strong> par une entreprise titulaire d'une attestation de capacité. Le premier contrôle a lieu à la mise en service, puis selon une périodicité qui dépend de la charge :</p>\n<table>\n<thead><tr><th>Charge en HFC</th><th>Périodicité sans détection permanente</th><th>Périodicité avec détection permanente de fuite</th></tr></thead>\n<tbody>\n<tr><td>de 5 à moins de 50 t éq. CO<sub>2</sub></td><td>12 mois</td><td>24 mois</td></tr>\n<tr><td>de 50 à moins de 500 t éq. CO<sub>2</sub></td><td>6 mois</td><td>12 mois</td></tr>\n<tr><td>500 t éq. CO<sub>2</sub> et plus</td><td>3 mois</td><td>6 mois (détection obligatoire)</td></tr>\n</tbody>\n</table>\n<p>Les équipements hermétiquement scellés bénéficient de seuils plus élevés, et le règlement de 2024 a étendu les contrôles aux équipements contenant certains HFO, avec des seuils exprimés en kilogrammes. Ces cas particuliers se vérifient dans le texte en vigueur au moment de l'intervention.</p>\n<p>Le contrôle comprend un examen visuel de l'installation, une recherche des fuites aux points sensibles (raccords, vannes, brasures, joints, capteurs) à l'aide d'un <strong>détecteur électronique</strong> d'une sensibilité suffisante ou d'un produit moussant, et l'analyse des paramètres de fonctionnement (pressions, températures, niveau au voyant). Une fuite détectée doit être réparée dans les meilleurs délais, puis un nouveau contrôle doit confirmer la réparation.</p>\n<p>Après le contrôle, l'opérateur appose une <strong>vignette</strong> sur l'équipement : bleue si l'équipement est étanche, avec la date du prochain contrôle ; rouge si une fuite n'a pas pu être réparée immédiatement. En France, si la réparation ne peut pas être faite rapidement, l'équipement doit être arrêté et vidangé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une charge complémentaire sur un équipement qui fuit, sans recherche ni réparation de la fuite, est interdite. « Refaire le plein » sans chercher la fuite est à la fois illégal, coûteux pour le client et nuisible pour le climat.</div>"
      },
      {
       "titre": "Les obligations de l'opérateur et la traçabilité",
       "contenu": "\n<p>L'<strong>opérateur</strong> est l'entreprise qui intervient sur l'équipement. Elle doit détenir une <strong>attestation de capacité</strong>, délivrée par un organisme agréé, qui prouve qu'elle dispose de personnel qualifié et d'outillage adapté (station de récupération, pompe à vide, détecteur, balance, bouteilles de récupération). Chaque technicien doit détenir une <strong>attestation d'aptitude</strong> correspondant aux opérations qu'il réalise. La catégorie I autorise toutes les opérations (contrôle d'étanchéité, maintenance, mise en service, récupération) sur tous les équipements de froid et de climatisation ; d'autres catégories sont plus restreintes. Le bac pro MFER permet d'obtenir l'attestation d'aptitude de catégorie I sans nouvelle évaluation, auprès d'un organisme évaluateur certifié.</p>\n<p>Toute opération sur le circuit d'un équipement qui contient au moins 2 kg de fluide (ou soumis au contrôle d'étanchéité) donne lieu à une <strong>fiche d'intervention</strong> (formulaire Cerfa n° 15497, version 04 depuis juillet 2024). Elle indique :</p>\n<ul>\n<li>l'opérateur (numéro d'attestation de capacité) et le détenteur de l'équipement ;</li>\n<li>l'équipement (identification, fluide, charge totale) ;</li>\n<li>la nature de l'intervention (assemblage, mise en service, modification, maintenance, contrôle d'étanchéité, démantèlement) ;</li>\n<li>le détecteur utilisé et sa date de contrôle ;</li>\n<li>les fuites constatées et leur localisation ;</li>\n<li>les quantités de fluide chargées (fluide vierge, recyclé ou régénéré) et récupérées, avec l'identification des bouteilles.</li>\n</ul>\n<p>Une copie est remise au détenteur, qui la conserve dans le registre de l'équipement pendant au moins cinq ans. L'opérateur tient de son côté un bilan annuel des quantités de fluide acquises, chargées, récupérées et cédées.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fluides récupérés sont des déchets dangereux. Depuis 2022, leur suivi se fait par voie numérique, au moyen d'un bordereau de suivi des fluides frigorigènes (BSFF) sur la plateforme nationale Trackdéchets. Le technicien qui récupère du fluide doit donc renseigner l'identifiant de la bouteille de transfert et la quantité, qui seront suivis jusqu'au centre de traitement.</div>"
      },
      {
       "titre": "Récupérer, recycler, régénérer, détruire",
       "contenu": "\n<p>Le dégazage volontaire est interdit. Avant toute ouverture du circuit, réparation, démantèlement ou changement de fluide, le fluide doit être <strong>récupéré</strong> dans une bouteille de récupération à l'aide d'une <strong>station de récupération</strong>. Quatre devenirs sont possibles :</p>\n<table>\n<thead><tr><th>Opération</th><th>Définition</th><th>Où ?</th></tr></thead>\n<tbody>\n<tr><td>Recyclage</td><td>Épuration sommaire (filtration, déshydratation) pour réutilisation</td><td>Sur place, sur le même équipement ou un équipement du même détenteur, selon les règles en vigueur</td></tr>\n<tr><td>Régénération</td><td>Traitement complet pour retrouver les spécifications d'un fluide neuf</td><td>Installation spécialisée</td></tr>\n<tr><td>Destruction</td><td>Décomposition à haute température</td><td>Installation autorisée</td></tr>\n<tr><td>Transfert</td><td>Remise au distributeur, qui a l'obligation de reprendre les fluides usagés</td><td>Distributeur, puis centre de traitement</td></tr>\n</tbody>\n</table>\n<p>Les bouteilles de récupération sont spécifiques : couleur ou étiquetage distinctif, robinet double (liquide et vapeur), pression de service adaptée au fluide. On ne remplit jamais une bouteille à plus de 80 % environ de sa capacité en liquide, car le liquide se dilate avec la température : la masse maximale autorisée est indiquée sur la bouteille et se contrôle à la balance. On ne mélange jamais deux fluides différents dans la même bouteille : le mélange ne peut plus être régénéré et doit être détruit, à un coût bien supérieur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> récupération du fluide d'une petite installation avant remplacement d'un compresseur. 1. Identifier le fluide (plaque signalétique) et choisir une bouteille de récupération vide ou contenant le même fluide. 2. Peser la bouteille et noter la masse. 3. Raccorder la station au circuit et à la bouteille (flexibles purgés). 4. Récupérer jusqu'à la dépression préconisée par le constructeur de la station. 5. Peser de nouveau : la différence donne la masse récupérée. 6. Reporter la masse et le numéro de bouteille sur la fiche d'intervention et le bordereau de suivi.</div>"
      },
      {
       "titre": "Les autres déchets du chantier",
       "contenu": "\n<p>Un chantier de froid produit d'autres déchets qu'il faut trier selon leur nature :</p>\n<ul>\n<li><strong>huile de compresseur usagée</strong> : déchet dangereux, car elle contient du fluide dissous et des produits de dégradation acides ; elle est collectée dans des bidons étiquetés et remise à un collecteur agréé ;</li>\n<li><strong>filtres déshydrateurs usagés</strong> : ils retiennent huile, humidité et acides ; ce sont des déchets dangereux ;</li>\n<li><strong>équipements électriques et électroniques</strong> (climatiseurs, cartes, régulateurs) : filière des DEEE, après récupération du fluide ;</li>\n<li><strong>métaux</strong> (chutes de cuivre, carcasses) : valorisés par un ferrailleur ;</li>\n<li><strong>emballages</strong>, isolants, déchets non dangereux : tri sur chantier ou déchetterie professionnelle ;</li>\n<li><strong>bouteilles de fluide</strong> : les bouteilles consignées sont rendues au distributeur ; les emballages non rechargeables sont interdits à la vente pour les fluides fluorés.</li>\n</ul>\n<p>La démarche écoresponsable dépasse le seul tri : limiter les chutes de tube en préparant les longueurs, préférer les fluides à faible PRP lorsque le choix est possible, réduire la charge des installations (circuits plus courts, échangeurs compacts), bien régler les installations pour qu'elles consomment moins, conseiller le client sur l'entretien qui prolonge la durée de vie du matériel.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> tout déchet dangereux est suivi par un bordereau, de son producteur jusqu'à son élimination. Le producteur du déchet (souvent l'entreprise d'intervention) reste responsable de son devenir, même après l'avoir confié à un collecteur.</div>"
      }
     ],
     "points_cles": [
      "Montréal a éliminé les CFC et HCFC ; Kigali et le règlement F-Gas organisent la réduction des HFC.",
      "Charge en t éq. CO2 = charge en kg × PRP ÷ 1 000.",
      "Contrôle d'étanchéité HFC : 12 mois de 5 à 50 t, 6 mois de 50 à 500 t, 3 mois au-delà ; périodicité doublée avec détection permanente.",
      "Une fuite doit être recherchée et réparée avant tout complément de charge.",
      "L'entreprise détient une attestation de capacité, le technicien une attestation d'aptitude ; le bac pro MFER ouvre droit à la catégorie I.",
      "La fiche d'intervention Cerfa 15497 trace chaque opération et se conserve dans le registre de l'équipement.",
      "Le fluide récupéré est recyclé, régénéré ou détruit ; son suivi se fait sur Trackdéchets par un BSFF.",
      "On ne mélange jamais deux fluides dans une bouteille de récupération et on respecte sa masse maximale de remplissage.",
      "Huiles et filtres usagés sont des déchets dangereux confiés à un collecteur agréé."
     ],
     "lexique": [
      {
       "terme": "PRP",
       "def": "Potentiel de réchauffement planétaire : effet de serre d'un kilogramme de gaz comparé à un kilogramme de CO2 sur 100 ans."
      },
      {
       "terme": "Tonne équivalent CO2",
       "def": "Unité qui exprime l'impact climatique d'une charge de fluide."
      },
      {
       "terme": "Phase-down",
       "def": "Réduction progressive, par quotas, des quantités de HFC mises sur le marché."
      },
      {
       "terme": "HFO",
       "def": "Hydrofluorooléfine : fluide fluoré à très faible PRP (exemple : R1234yf, R1234ze)."
      },
      {
       "terme": "Opérateur",
       "def": "Entreprise qui intervient sur le circuit frigorifique d'un équipement."
      },
      {
       "terme": "Détenteur",
       "def": "Propriétaire ou exploitant responsable de l'équipement et de son registre."
      },
      {
       "terme": "Fiche d'intervention",
       "def": "Formulaire réglementaire qui trace une intervention sur un circuit contenant un fluide réglementé."
      },
      {
       "terme": "Récupération",
       "def": "Transfert du fluide d'un circuit vers une bouteille, sans rejet à l'atmosphère."
      },
      {
       "terme": "Régénération",
       "def": "Traitement d'un fluide usagé pour lui redonner les caractéristiques d'un fluide neuf."
      },
      {
       "terme": "BSFF",
       "def": "Bordereau de suivi des fluides frigorigènes, établi sur la plateforme Trackdéchets."
      }
     ]
    },
    {
     "id": "bmfer-securite-fluides",
     "titre": "Santé, sécurité et classification des fluides frigorigènes",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Interpréter le groupe de sécurité d'un fluide frigorigène (toxicité et inflammabilité).",
      "Identifier les risques propres aux interventions frigorifiques : pression, froid, asphyxie, inflammabilité, décomposition.",
      "Choisir les mesures de prévention et les équipements de protection adaptés à une intervention.",
      "Appliquer la démarche de consignation électrique en fonction de son habilitation.",
      "Repérer les exigences liées aux équipements sous pression et aux fluides inflammables."
     ],
     "sections": [
      {
       "titre": "Le groupe de sécurité d'un fluide",
       "contenu": "\n<p>Chaque fluide frigorigène est classé selon deux critères dans les normes de sécurité des systèmes frigorifiques (norme NF EN 378 et norme ISO 817). Le <strong>groupe de sécurité</strong> s'écrit sous la forme d'une lettre suivie d'un chiffre.</p>\n<ul>\n<li>La lettre indique la <strong>toxicité</strong> : A pour une toxicité faible, B pour une toxicité plus élevée.</li>\n<li>Le chiffre indique l'<strong>inflammabilité</strong> : 1 pour un fluide sans propagation de flamme, 2L pour un fluide faiblement inflammable (combustion lente), 2 pour un fluide inflammable, 3 pour un fluide très inflammable.</li>\n</ul>\n<table>\n<thead><tr><th>Groupe</th><th>Exemples</th><th>Ce que cela implique</th></tr></thead>\n<tbody>\n<tr><td>A1</td><td>R134a, R410A, R404A, R449A, R744</td><td>Pas de risque de feu ; risque d'asphyxie en cas de fuite massive dans un local fermé</td></tr>\n<tr><td>A2L</td><td>R32, R1234yf, R1234ze, R454B</td><td>Inflammable dans certaines conditions : limitation des charges selon le volume du local, outillage adapté</td></tr>\n<tr><td>A3</td><td>R290 (propane), R600a (isobutane)</td><td>Très inflammable : charges très limitées, procédures strictes, aucune source d'inflammation</td></tr>\n<tr><td>B2L</td><td>R717 (ammoniac)</td><td>Toxique et faiblement inflammable : réservé à des installations industrielles et à du personnel spécialement formé</td></tr>\n</tbody>\n</table>\n<p>Pour un fluide inflammable, la grandeur clé est la <strong>limite inférieure d'inflammabilité</strong> (LII, en anglais LFL) : la concentration minimale dans l'air, en kg/m<sup>3</sup> ou en % volume, à partir de laquelle le mélange peut s'enflammer. Pour le propane, elle est d'environ 2 % en volume. La norme NF EN 378 et les normes produits fixent, à partir de la LII et du volume du local, la charge maximale autorisée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la transition vers les fluides à faible PRP fait entrer les fluides inflammables (A2L et A3) dans le quotidien du technicien. Les gestes qui étaient sans conséquence avec un fluide A1 (braser un circuit mal vidangé, utiliser un aspirateur ou une pompe à vide non adaptée près d'une fuite) peuvent devenir dangereux.</div>"
      },
      {
       "titre": "Les risques propres au métier",
       "contenu": "\n<p>Le technicien frigoriste cumule plusieurs risques spécifiques, en plus des risques communs à tous les chantiers (chute, manutention, coupure, bruit).</p>\n<table>\n<thead><tr><th>Risque</th><th>Origine</th><th>Conséquence</th></tr></thead>\n<tbody>\n<tr><td>Pression</td><td>Circuit en fonctionnement (plus de 40 bar sur un circuit HP au R410A ou au R32 ; plus de 100 bar sur certains circuits au CO<sub>2</sub>), bouteilles d'azote à 200 bar</td><td>Éclatement, projection, fouettement d'un flexible</td></tr>\n<tr><td>Froid</td><td>Projection de fluide liquide qui s'évapore instantanément</td><td>Brûlure par le froid de la peau et des yeux</td></tr>\n<tr><td>Asphyxie</td><td>Fluides plus lourds que l'air qui s'accumulent au sol, dans une fosse ou une chambre froide</td><td>Perte de connaissance par manque d'oxygène</td></tr>\n<tr><td>Incendie, explosion</td><td>Fluides A2L et A3, chalumeau de brasage, étincelles</td><td>Brûlures graves, incendie du local</td></tr>\n<tr><td>Décomposition thermique</td><td>Fluide fluoré au contact d'une flamme ou d'une surface très chaude</td><td>Formation de gaz toxiques et corrosifs (acide fluorhydrique)</td></tr>\n<tr><td>Électrique</td><td>Armoires, compresseurs, ventilateurs, condensateurs chargés</td><td>Électrisation, électrocution, brûlure par arc</td></tr>\n<tr><td>Ambiance froide</td><td>Travail en chambre froide négative</td><td>Hypothermie, engelures, risque d'enfermement</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un fluide frigorigène fluoré est inodore à faible concentration et sa fuite ne se voit pas. Ne jamais braser sur un circuit qui contient encore du fluide, même « presque vide » : le fluide résiduel se décompose dans la flamme et dégage des gaz toxiques. Le circuit doit être récupéré, puis balayé à l'azote avant tout brasage.</div>"
      },
      {
       "titre": "Prévention et équipements de protection",
       "contenu": "\n<p>La prévention suit la hiérarchie des principes généraux : supprimer le danger lorsque c'est possible, réduire le risque à la source par des protections collectives, puis protéger la personne par des <strong>équipements de protection individuelle</strong> (EPI).</p>\n<p>Mesures collectives courantes :</p>\n<ul>\n<li>ventiler le local avant et pendant l'intervention, surtout en sous-sol ou en local technique fermé ;</li>\n<li>utiliser un <strong>détecteur de gaz</strong> portatif lors d'une intervention sur un fluide inflammable, et vérifier l'absence de fluide avant de travailler ;</li>\n<li>baliser la zone, éloigner toute source d'inflammation, disposer d'un extincteur adapté à proximité lors du brasage ;</li>\n<li>utiliser un détendeur sur les bouteilles d'azote et ne jamais raccorder une bouteille d'azote directement au circuit ;</li>\n<li>vérifier la présence et le bon fonctionnement du dispositif d'ouverture de l'intérieur et de l'alarme « homme enfermé » d'une chambre froide.</li>\n</ul>\n<p>EPI de base pour une intervention sur circuit : lunettes de protection fermées, gants adaptés au froid et aux coupures, chaussures de sécurité, vêtements couvrants. Pour le brasage : lunettes teintées, gants de soudeur, vêtements en matière non inflammable. En chambre froide négative : vêtements isolants. Pour l'électricité : gants isolants, écran facial et outils isolés, selon l'opération.</p>\n<p>Le <strong>permis de feu</strong> est une autorisation écrite exigée par de nombreux exploitants avant un travail par point chaud (brasage) dans un local qui n'est pas prévu pour cela. Il précise les mesures à prendre avant, pendant et après le travail, notamment une surveillance après la fin du brasage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyse des risques avant une intervention sur un climatiseur au R32 en local technique. 1. Identifier les dangers : fluide A2L, pression, électricité, brasage prévu. 2. Évaluer : local de 15 m<sup>3</sup>, peu ventilé, donc risque d'accumulation en cas de fuite. 3. Prévenir : consigner électriquement, ouvrir et ventiler le local, contrôler l'atmosphère au détecteur, récupérer le fluide avec une station compatible A2L, balayer à l'azote, braser avec extincteur à portée. 4. Protéger : lunettes, gants, vêtements adaptés. 5. Contrôler : nouvelle mesure au détecteur avant remise en charge.</div>"
      },
      {
       "titre": "Le risque électrique et les habilitations",
       "contenu": "\n<p>Le cours de seconde a présenté le risque électrique et le principe de l'habilitation. Pour le frigoriste, les opérations électriques les plus fréquentes sont le dépannage (mesures sous tension, remplacement d'un composant), le raccordement de matériels et les essais. La norme NF C 18-510 définit les symboles d'habilitation correspondants.</p>\n<table>\n<thead><tr><th>Symbole</th><th>Opérations autorisées (basse tension)</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>B0 / H0V</td><td>Travaux non électriques en zone d'environnement électrique</td><td>Brasage près d'une armoire ouverte</td></tr>\n<tr><td>BS</td><td>Interventions élémentaires (remplacement à l'identique d'un fusible, d'une lampe)</td><td>Remplacement d'un fusible de commande</td></tr>\n<tr><td>BR</td><td>Dépannage, mesures, essais, remplacement de composants</td><td>Diagnostic d'un contacteur de compresseur</td></tr>\n<tr><td>BC</td><td>Consignation d'un ouvrage ou d'une installation</td><td>Consignation d'une armoire frigorifique</td></tr>\n<tr><td>BE essai, BE mesurage</td><td>Opérations spécifiques d'essai ou de mesure</td><td>Essais en plateforme</td></tr>\n<tr><td>B1V, B2V</td><td>Exécution et direction de travaux électriques</td><td>Câblage d'une armoire neuve</td></tr>\n</tbody>\n</table>\n<p>L'habilitation est délivrée par l'employeur, après une formation, pour un domaine précis. Un technicien frigoriste dépanneur est couramment habilité BR et BC.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> les étapes de la consignation en basse tension. 1. <strong>Séparer</strong> l'installation de toute source d'énergie (sectionneur, disjoncteur), en pensant aux alimentations multiples (secours, résistance de carter alimentée à part, condensateurs). 2. <strong>Condamner</strong> l'organe de séparation en position ouverte (cadenas personnel) et le signaler (pancarte). 3. <strong>Identifier</strong> l'installation sur laquelle on va travailler. 4. <strong>Vérifier l'absence de tension</strong> (VAT) avec un vérificateur adapté, contrôlé avant et après la mesure, sur tous les conducteurs actifs. 5. Mettre à la terre et en court-circuit si un risque de réalimentation existe.</div>"
      },
      {
       "titre": "Équipements sous pression et fluides inflammables",
       "contenu": "\n<p>Un circuit frigorifique est un ensemble d'<strong>équipements sous pression</strong>. Leur conception et leur fabrication relèvent de la directive européenne 2014/68/UE (dite DESP). Chaque élément porte une pression maximale admissible, notée <strong>PS</strong>, en bar relatif : par exemple PS = 45 bar côté haute pression d'un groupe au R410A. Aucune pression d'essai ou de fonctionnement ne doit dépasser la valeur prévue par le constructeur.</p>\n<p>Le suivi en service de certains équipements (réservoirs de liquide de grande taille, par exemple) est encadré par une réglementation française spécifique qui impose inspections périodiques et requalifications, selon le produit de la pression et du volume. Les seuils et périodicités se vérifient dans la réglementation en vigueur ; le technicien doit surtout savoir lire la plaque d'un réservoir (PS, volume, température admissible, date d'épreuve) et signaler toute corrosion ou déformation.</p>\n<p>Les organes de sécurité protègent contre la surpression : <strong>pressostat de sécurité haute pression</strong> qui arrête le compresseur, <strong>soupape de sécurité</strong> qui évacue le fluide si la pression dépasse son tarage. Ces organes ne doivent jamais être shuntés, déréglés au-delà de la PS ou retirés.</p>\n<p>Avec les fluides inflammables, la conception impose des précautions supplémentaires : charge limitée en fonction du local, matériel électrique sans source d'inflammation à proximité des points de fuite possibles, étiquetage spécifique (pictogramme de flamme). Le technicien utilise des outils compatibles (station de récupération, pompe à vide et détecteur annoncés compatibles A2L ou A3 par le fabricant) et suit la notice du constructeur, qui prime sur les habitudes d'atelier.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une pompe à chaleur au propane installée en extérieur, le constructeur définit une zone de sécurité autour de l'unité (pas de bouche d'aération, de regard ou de source d'inflammation à moins d'une certaine distance). Le technicien vérifie que cette zone est respectée avant la mise en service et à chaque visite.</div>"
      }
     ],
     "points_cles": [
      "Le groupe de sécurité combine toxicité (A ou B) et inflammabilité (1, 2L, 2, 3).",
      "R32 et HFO sont A2L, le propane est A3, l'ammoniac est B2L : chaque groupe impose ses précautions.",
      "Un fluide fluoré décomposé par une flamme dégage des gaz toxiques : on ne brase jamais un circuit qui contient du fluide.",
      "Les fluides plus lourds que l'air peuvent provoquer une asphyxie dans un local fermé ou en point bas.",
      "La prévention privilégie les mesures collectives (ventilation, détection, balisage) avant les EPI.",
      "Consignation : séparer, condamner, identifier, vérifier l'absence de tension, mettre à la terre si nécessaire.",
      "Un dépanneur frigoriste est couramment habilité BR et BC selon la norme NF C 18-510.",
      "Aucune pression d'essai ou de fonctionnement ne doit dépasser la PS indiquée par le constructeur.",
      "Les organes de sécurité (pressostat HP, soupape) ne doivent jamais être shuntés."
     ],
     "lexique": [
      {
       "terme": "Groupe de sécurité",
       "def": "Classement d'un fluide selon sa toxicité et son inflammabilité (A1, A2L, A3, B2L…)."
      },
      {
       "terme": "LII",
       "def": "Limite inférieure d'inflammabilité : concentration minimale dans l'air à partir de laquelle le mélange peut s'enflammer."
      },
      {
       "terme": "EPI",
       "def": "Équipement de protection individuelle : lunettes, gants, chaussures, vêtements adaptés."
      },
      {
       "terme": "Permis de feu",
       "def": "Autorisation écrite préalable à un travail par point chaud, avec mesures de prévention associées."
      },
      {
       "terme": "Consignation",
       "def": "Ensemble des opérations qui mettent et maintiennent une installation hors tension en sécurité."
      },
      {
       "terme": "VAT",
       "def": "Vérification d'absence de tension sur tous les conducteurs actifs."
      },
      {
       "terme": "Habilitation",
       "def": "Reconnaissance par l'employeur de la capacité d'une personne à réaliser des opérations électriques définies."
      },
      {
       "terme": "PS",
       "def": "Pression maximale admissible d'un équipement sous pression, fixée par le constructeur."
      },
      {
       "terme": "DESP",
       "def": "Directive européenne sur les équipements sous pression."
      },
      {
       "terme": "Soupape de sécurité",
       "def": "Organe qui s'ouvre automatiquement pour évacuer le fluide lorsque la pression dépasse son tarage."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Le circuit frigorifique : principes et composants",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmfer-diagramme-enthalpique",
     "titre": "Le cycle frigorifique sur le diagramme enthalpique",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire les axes, les zones et les familles de courbes d'un diagramme enthalpique log p-h.",
      "Placer les quatre points caractéristiques d'un cycle frigorifique à partir de relevés de pression et de température.",
      "Lire les enthalpies et calculer production frigorifique, travail de compression et chaleur rejetée par kilogramme de fluide.",
      "Calculer le débit massique et les puissances d'une installation, puis son coefficient de performance théorique.",
      "Tenir compte du glissement de température des mélanges zéotropes."
     ],
     "sections": [
      {
       "titre": "Pourquoi un diagramme enthalpique ?",
       "contenu": "\n<p>Le cours de seconde a montré qu'une machine frigorifique fonctionne grâce aux changements d'état d'un fluide : il s'évapore à basse pression en absorbant de la chaleur, puis se condense à haute pression en la rejetant. Pour aller plus loin, il faut chiffrer ces échanges. L'outil du frigoriste pour cela est le <strong>diagramme enthalpique</strong>, aussi appelé diagramme de Mollier ou diagramme <strong>log p-h</strong>.</p>\n<p>L'<strong>enthalpie massique</strong>, notée h et exprimée en kJ/kg, représente l'énergie contenue dans un kilogramme de fluide dans un état donné. Ce qui compte n'est pas sa valeur absolue mais ses variations : la différence d'enthalpie entre l'entrée et la sortie d'un composant donne directement l'énergie échangée par kilogramme de fluide qui le traverse.</p>\n<p>Chaque fluide a son propre diagramme, fourni par les fabricants de fluides ou intégré dans les logiciels et les manifolds électroniques. Les valeurs d'enthalpie dépendent d'une convention de référence : on ne compare donc jamais des enthalpies lues sur deux diagrammes de sources différentes sans vérifier qu'ils utilisent la même référence.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur le diagramme enthalpique, une énergie échangée se lit comme une longueur horizontale : la différence d'enthalpie entre deux points.</div>"
      },
      {
       "titre": "Lire le diagramme log p-h",
       "contenu": "\n<p>Le diagramme comporte :</p>\n<ul>\n<li>en abscisse, l'<strong>enthalpie massique</strong> h en kJ/kg, sur une échelle linéaire ;</li>\n<li>en ordonnée, la <strong>pression absolue</strong> p en bar ou en MPa, sur une échelle logarithmique (d'où le nom log p-h), qui permet de représenter à la fois les basses et les hautes pressions.</li>\n</ul>\n<p>Une courbe en cloche, la <strong>courbe de saturation</strong>, partage le diagramme en trois zones. Son sommet est le <strong>point critique</strong>, au-delà duquel le fluide ne peut plus se condenser.</p>\n<table>\n<thead><tr><th>Zone</th><th>Position</th><th>État du fluide</th></tr></thead>\n<tbody>\n<tr><td>Liquide sous-refroidi</td><td>À gauche de la cloche</td><td>Liquide plus froid que sa température de saturation</td></tr>\n<tr><td>Mélange liquide-vapeur</td><td>Sous la cloche</td><td>Liquide et vapeur coexistent à la température de saturation</td></tr>\n<tr><td>Vapeur surchauffée</td><td>À droite de la cloche</td><td>Vapeur plus chaude que sa température de saturation</td></tr>\n</tbody>\n</table>\n<p>La branche gauche de la cloche est la <strong>courbe de liquide saturé</strong> (titre 0), la branche droite la <strong>courbe de vapeur saturante</strong> (titre 1). Plusieurs familles de courbes permettent de situer un point :</p>\n<ul>\n<li>les <strong>isobares</strong> : droites horizontales (pression constante) ;</li>\n<li>les <strong>isenthalpes</strong> : droites verticales (enthalpie constante) ;</li>\n<li>les <strong>isothermes</strong> : quasi verticales dans le liquide, horizontales sous la cloche (pour un fluide pur), descendantes dans la vapeur ;</li>\n<li>les <strong>isotitres</strong> : courbes sous la cloche qui indiquent la proportion de vapeur (titre x de 0,1 à 0,9) ;</li>\n<li>les <strong>isentropes</strong> : courbes très inclinées dans la vapeur, qui représentent une compression idéale sans échange de chaleur ;</li>\n<li>les <strong>isochores</strong> : courbes de volume massique constant, en m<sup>3</sup>/kg, utiles pour le calcul du débit aspiré par le compresseur.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le diagramme se lit en pression absolue, alors que les manomètres affichent une pression relative. Pression absolue = pression relative + pression atmosphérique (environ 1 bar). Oublier cette correction décale tout le cycle et fausse toutes les températures lues.</div>"
      },
      {
       "titre": "Tracer le cycle frigorifique",
       "contenu": "\n<p>Un cycle frigorifique théorique simple se trace à partir de quatre points, en suivant le sens de circulation du fluide.</p>\n<table>\n<thead><tr><th>Point</th><th>Emplacement</th><th>Comment le placer</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Aspiration du compresseur</td><td>Sur l'isobare BP, à la température d'aspiration mesurée (zone vapeur surchauffée)</td></tr>\n<tr><td>2</td><td>Refoulement du compresseur</td><td>Sur l'isobare HP, à l'intersection avec l'isentrope passant par 1 (compression théorique) ou à la température de refoulement mesurée (compression réelle)</td></tr>\n<tr><td>3</td><td>Sortie du condenseur, entrée du détendeur</td><td>Sur l'isobare HP, à la température du liquide mesurée (zone liquide sous-refroidi)</td></tr>\n<tr><td>4</td><td>Sortie du détendeur, entrée de l'évaporateur</td><td>Sur l'isobare BP, à la verticale de 3 (détente isenthalpique : h4 = h3)</td></tr>\n</tbody>\n</table>\n<p>Les transformations sont les suivantes : de 4 à 1, <strong>évaporation</strong> puis <strong>surchauffe</strong> à pression constante ; de 1 à 2, <strong>compression</strong> ; de 2 à 3, <strong>désurchauffe</strong>, <strong>condensation</strong> puis <strong>sous-refroidissement</strong> à pression constante ; de 3 à 4, <strong>détente</strong> sans échange d'énergie, donc à enthalpie constante. La détente fait passer le fluide de l'état liquide à un mélange liquide-vapeur : une partie du liquide s'est vaporisée en refroidissant le reste. Le point 4 se situe donc sous la cloche, avec un titre souvent compris entre 0,2 et 0,4.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> placer le point 1 d'une installation au R134a. Relevés : BP manomètre 1,0 bar, température de la conduite d'aspiration −5 °C. 1. Pression absolue : 1,0 + 1,0 = 2,0 bar. 2. Tracer l'isobare 2,0 bar : elle coupe la cloche à la température de saturation, environ −10 °C. 3. Suivre cette isobare vers la droite jusqu'à l'isotherme −5 °C : c'est le point 1, dans la zone de vapeur surchauffée. 4. Lire à la verticale l'enthalpie : h1 ≈ 397 kJ/kg.</div>"
      },
      {
       "titre": "Le bilan énergétique par kilogramme",
       "contenu": "\n<p>Une fois le cycle tracé, trois différences d'enthalpie donnent les énergies échangées par kilogramme de fluide qui circule :</p>\n<ul>\n<li><strong>production frigorifique massique</strong> : q<sub>0</sub> = h1 − h4, en kJ/kg (chaleur absorbée à l'évaporateur, surchauffe comprise lorsqu'elle se fait dans l'évaporateur) ;</li>\n<li><strong>travail massique de compression</strong> : w = h2 − h1, en kJ/kg ;</li>\n<li><strong>chaleur massique rejetée au condenseur</strong> : q<sub>k</sub> = h2 − h3, en kJ/kg.</li>\n</ul>\n<p>Le bilan d'énergie se vérifie toujours : q<sub>k</sub> = q<sub>0</sub> + w. Le condenseur rejette la chaleur prise à l'évaporateur plus l'énergie apportée par le compresseur.</p>\n<p>Le <strong>coefficient de performance frigorifique</strong> théorique vaut COP = q<sub>0</sub> ÷ w. Pour une pompe à chaleur, on s'intéresse à la chaleur rejetée : COP chaud = q<sub>k</sub> ÷ w, qui vaut toujours COP froid + 1 pour un même cycle théorique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> cycle au R134a, évaporation −10 °C, condensation +40 °C, surchauffe 5 K, sous-refroidissement 5 K. Valeurs lues sur le diagramme (arrondies) : h1 = 397 kJ/kg ; h2 = 427 kJ/kg (compression isentropique jusqu'à 10,2 bar absolus) ; h3 = h4 = 249 kJ/kg (liquide à 35 °C). Production frigorifique massique : q<sub>0</sub> = 397 − 249 = 148 kJ/kg. Travail : w = 427 − 397 = 30 kJ/kg. Chaleur rejetée : q<sub>k</sub> = 427 − 249 = 178 kJ/kg, et l'on vérifie 148 + 30 = 178. COP théorique = 148 ÷ 30 ≈ 4,9.</div>"
      },
      {
       "titre": "Du kilogramme à l'installation : débits et puissances",
       "contenu": "\n<p>Les puissances s'obtiennent en multipliant les énergies massiques par le <strong>débit massique</strong> de fluide q<sub>m</sub>, en kg/s :</p>\n<ul>\n<li>puissance frigorifique : Φ<sub>0</sub> = q<sub>m</sub> × (h1 − h4), en kW si h est en kJ/kg ;</li>\n<li>puissance de compression théorique : P = q<sub>m</sub> × (h2 − h1) ;</li>\n<li>puissance rejetée au condenseur : Φ<sub>k</sub> = q<sub>m</sub> × (h2 − h3).</li>\n</ul>\n<p>Dans un problème de dimensionnement, on connaît généralement la puissance frigorifique demandée par le bilan de la chambre froide ou du local ; on en déduit le débit massique nécessaire, puis la puissance du compresseur et celle du condenseur.</p>\n<p>Le compresseur aspire un <strong>volume</strong> de vapeur. Le débit volumique aspiré vaut q<sub>v</sub> = q<sub>m</sub> × v<sub>1</sub>, où v<sub>1</sub> est le volume massique lu sur l'isochore passant par le point 1. Plus la pression d'aspiration est basse, plus v<sub>1</sub> est grand : pour une même cylindrée, le compresseur fait alors circuler moins de fluide et produit moins de froid.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> avec le cycle précédent, une chambre froide demande Φ<sub>0</sub> = 5 kW. Débit massique : q<sub>m</sub> = 5 ÷ 148 ≈ 0,034 kg/s, soit environ 122 kg/h. Puissance de compression théorique : 0,034 × 30 ≈ 1,0 kW. Puissance au condenseur : 0,034 × 178 ≈ 6,0 kW. Le condenseur doit donc évacuer environ 6 kW, soit 20 % de plus que la puissance frigorifique.</div>\n<p>Le cycle réel diffère du cycle théorique : la compression n'est pas isentropique (le point 2 réel est plus à droite, à une température de refoulement plus élevée), et les conduites provoquent des pertes de charge qui abaissent la pression à l'aspiration et l'augmentent au refoulement. Le COP réel est donc inférieur au COP théorique. Le rapport entre puissance isentropique et puissance réellement absorbée s'appelle le <strong>rendement isentropique</strong> du compresseur.</p>"
      },
      {
       "titre": "Le cas des mélanges zéotropes",
       "contenu": "\n<p>Un fluide pur (R134a, R32, R290) s'évapore à température constante pour une pression donnée : sous la cloche, isobare et isotherme sont confondues. Beaucoup de fluides actuels sont des <strong>mélanges</strong> de plusieurs corps purs. On distingue :</p>\n<ul>\n<li>les mélanges <strong>azéotropes</strong>, qui se comportent comme un corps pur (série R500, par exemple R507A) ;</li>\n<li>les mélanges <strong>quasi azéotropes</strong>, dont le comportement en est très proche (R410A, R404A) ;</li>\n<li>les mélanges <strong>zéotropes</strong>, dont la température varie pendant le changement d'état à pression constante (R407C, R449A, R448A, R454C).</li>\n</ul>\n<p>Cette variation s'appelle le <strong>glissement de température</strong> (glide). Elle est de plusieurs kelvins pour certains mélanges. Les tables pression-température donnent alors deux valeurs pour chaque pression : la <strong>température de bulle</strong> (début d'ébullition, côté liquide) et la <strong>température de rosée</strong> (fin d'ébullition, côté vapeur).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> avec un fluide zéotrope, on calcule la surchauffe à partir de la température de rosée et le sous-refroidissement à partir de la température de bulle. Utiliser la mauvaise valeur fausse les réglages de plusieurs kelvins. Par ailleurs, une fuite en phase vapeur modifie la composition du mélange restant : la charge des mélanges zéotropes se fait toujours en phase liquide.</div>"
      }
     ],
     "points_cles": [
      "Le diagramme log p-h porte l'enthalpie massique en abscisse et la pression absolue (échelle logarithmique) en ordonnée.",
      "La courbe de saturation sépare liquide sous-refroidi, mélange liquide-vapeur et vapeur surchauffée.",
      "Le cycle théorique se trace avec quatre points : aspiration, refoulement, sortie condenseur, sortie détendeur.",
      "La détente est isenthalpique : h4 = h3.",
      "q0 = h1 − h4, w = h2 − h1, qk = h2 − h3 et qk = q0 + w.",
      "COP frigorifique théorique = q0 ÷ w ; COP chaud = COP froid + 1 pour un même cycle.",
      "Les puissances s'obtiennent en multipliant les énergies massiques par le débit massique.",
      "Les mélanges zéotropes ont un glissement : surchauffe sur la température de rosée, sous-refroidissement sur la température de bulle."
     ],
     "lexique": [
      {
       "terme": "Enthalpie massique",
       "def": "Énergie contenue dans un kilogramme de fluide, en kJ/kg ; on en utilise les variations."
      },
      {
       "terme": "Diagramme log p-h",
       "def": "Diagramme d'un fluide portant l'enthalpie en abscisse et la pression absolue en échelle logarithmique en ordonnée."
      },
      {
       "terme": "Courbe de saturation",
       "def": "Courbe en cloche qui délimite la zone où liquide et vapeur coexistent."
      },
      {
       "terme": "Point critique",
       "def": "Sommet de la courbe de saturation, au-delà duquel la condensation est impossible."
      },
      {
       "terme": "Titre",
       "def": "Proportion massique de vapeur dans un mélange liquide-vapeur, de 0 à 1."
      },
      {
       "terme": "Isentrope",
       "def": "Courbe représentant une compression idéale, sans frottement ni échange de chaleur."
      },
      {
       "terme": "Débit massique",
       "def": "Masse de fluide qui circule par unité de temps, en kg/s."
      },
      {
       "terme": "Volume massique",
       "def": "Volume occupé par un kilogramme de fluide, en m3/kg."
      },
      {
       "terme": "Glissement de température",
       "def": "Variation de température pendant le changement d'état à pression constante d'un mélange zéotrope."
      },
      {
       "terme": "Température de rosée",
       "def": "Température à laquelle la dernière goutte de liquide d'un mélange s'évapore à une pression donnée."
      }
     ]
    },
    {
     "id": "bmfer-surchauffe-sous-refroidissement",
     "titre": "Surchauffe, sous-refroidissement et écarts de température",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Mesurer et calculer la surchauffe et le sous-refroidissement d'une installation.",
      "Expliquer le rôle de la surchauffe pour la protection du compresseur et le remplissage de l'évaporateur.",
      "Expliquer le rôle du sous-refroidissement pour l'alimentation du détendeur.",
      "Relier températures d'évaporation et de condensation aux températures des milieux grâce aux écarts de température.",
      "Calculer un taux de compression et interpréter une température de refoulement."
     ],
     "sections": [
      {
       "titre": "Les grandeurs relevées sur une installation",
       "contenu": "\n<p>Le diagramme enthalpique permet de comprendre un cycle. Sur le terrain, le technicien ne trace pas toujours le cycle : il relève quelques grandeurs avec un <strong>manifold</strong> (analyseur à manomètres, souvent électronique) et des sondes de température à pince, puis il calcule des écarts. Ces écarts sont le langage commun des frigoristes.</p>\n<table>\n<thead><tr><th>Grandeur relevée</th><th>Où ?</th><th>Instrument</th></tr></thead>\n<tbody>\n<tr><td>Pression d'évaporation (BP)</td><td>Vanne de service à l'aspiration</td><td>Manomètre BP du manifold</td></tr>\n<tr><td>Pression de condensation (HP)</td><td>Vanne de service au refoulement ou sur la ligne liquide</td><td>Manomètre HP</td></tr>\n<tr><td>Température d'aspiration</td><td>Conduite d'aspiration, près du compresseur ou à la sortie de l'évaporateur</td><td>Sonde à pince</td></tr>\n<tr><td>Température de refoulement</td><td>Conduite de refoulement, à environ 15 cm du compresseur</td><td>Sonde à pince ou de contact</td></tr>\n<tr><td>Température du liquide</td><td>Ligne liquide, avant le détendeur</td><td>Sonde à pince</td></tr>\n<tr><td>Températures des milieux</td><td>Air ou eau à l'entrée et à la sortie de l'évaporateur et du condenseur</td><td>Thermomètre d'ambiance ou sondes</td></tr>\n</tbody>\n</table>\n<p>À partir de chaque pression, la table ou le manifold donne la <strong>température de saturation</strong> correspondante : la <strong>température d'évaporation</strong> t<sub>0</sub> côté BP et la <strong>température de condensation</strong> t<sub>k</sub> côté HP.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une sonde à pince doit être posée sur un tube propre, bien serrée et isolée de l'air ambiant. Une sonde mal posée sur une aspiration froide en été peut afficher 3 ou 4 °C de trop, ce qui suffit à conclure à tort qu'il manque du fluide.</div>"
      },
      {
       "titre": "La surchauffe",
       "contenu": "\n<p>La <strong>surchauffe</strong> est l'écart entre la température réelle de la vapeur et sa température de saturation à la même pression. À la sortie de l'évaporateur :</p>\n<p><strong>surchauffe = température d'aspiration mesurée − température d'évaporation</strong> (en kelvins, K).</p>\n<p>Elle a deux fonctions :</p>\n<ul>\n<li><strong>protéger le compresseur</strong> : une vapeur surchauffée ne contient plus de gouttes de liquide. Or un compresseur est conçu pour comprimer un gaz ; du liquide aspiré provoque des <strong>coups de liquide</strong> qui détruisent clapets, bielles ou spirales, et dilue l'huile ;</li>\n<li><strong>indiquer le remplissage de l'évaporateur</strong> : une surchauffe faible signifie que l'évaporateur est bien alimenté en liquide sur presque toute sa longueur ; une surchauffe forte signifie qu'une partie importante de l'évaporateur ne contient plus que de la vapeur et produit peu de froid.</li>\n</ul>\n<p>On distingue la <strong>surchauffe utile</strong> (ou surchauffe de l'évaporateur), mesurée à la sortie de l'évaporateur, à l'endroit du bulbe du détendeur, et la <strong>surchauffe totale</strong>, mesurée à l'entrée du compresseur, qui inclut l'échauffement dans la conduite d'aspiration. Avec un détendeur thermostatique, la surchauffe utile est couramment réglée entre 4 et 8 K environ ; la valeur exacte est donnée par le constructeur de l'évaporateur ou du détendeur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> climatiseur au R410A. Lecture BP : 7,0 bar relatifs, soit 8,0 bar absolus. La table du R410A donne environ 0 °C pour 8,0 bar absolus : t<sub>0</sub> = 0 °C. Température mesurée sur l'aspiration à la sortie de l'évaporateur : 6 °C. Surchauffe = 6 − 0 = 6 K. La valeur est dans la plage normale : l'évaporateur est bien alimenté et le compresseur protégé.</div>"
      },
      {
       "titre": "Le sous-refroidissement",
       "contenu": "\n<p>Le <strong>sous-refroidissement</strong> est l'écart entre la température de condensation et la température réelle du liquide à la sortie du condenseur :</p>\n<p><strong>sous-refroidissement = température de condensation − température du liquide mesurée</strong> (en K).</p>\n<p>Il garantit que le détendeur reçoit du <strong>liquide sans bulles de vapeur</strong>. Les pertes de charge de la ligne liquide (longueur, filtre, montée verticale) font baisser la pression ; si le liquide est juste saturé, une partie se vaporise avant le détendeur (<strong>flash-gas</strong>), le détendeur est mal alimenté et la production frigorifique chute. Le sous-refroidissement augmente aussi la production frigorifique massique, puisqu'il décale le point 3, donc le point 4, vers la gauche du diagramme.</p>\n<p>Sur une installation à condenseur à air sans réservoir de liquide, le sous-refroidissement est un bon indicateur de la charge en fluide : il augmente avec la quantité de liquide stockée dans le condenseur. Sur une installation avec réservoir, le liquide sort du réservoir à saturation ; le sous-refroidissement est alors faible et ne renseigne pas sur la charge.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> même climatiseur. Lecture HP : 26,3 bar relatifs, soit 27,3 bar absolus, qui correspondent à environ 45 °C pour le R410A : t<sub>k</sub> = 45 °C. Température mesurée sur la ligne liquide : 40 °C. Sous-refroidissement = 45 − 40 = 5 K. Le voyant liquide, s'il existe, doit être plein, sans bulles.</div>"
      },
      {
       "titre": "Les écarts de température aux échangeurs",
       "contenu": "\n<p>La chaleur ne passe d'un milieu à un autre que s'il existe une différence de température. Le fluide doit donc s'évaporer à une température inférieure à celle de l'air ou de l'eau à refroidir, et se condenser à une température supérieure à celle du milieu qui reçoit la chaleur. Ces écarts se notent ΔT ou « pincement » selon les cas.</p>\n<table>\n<thead><tr><th>Échangeur</th><th>Écart utilisé</th><th>Ordre de grandeur courant</th></tr></thead>\n<tbody>\n<tr><td>Évaporateur à air de chambre froide positive</td><td>Température de l'air entrant − t<sub>0</sub></td><td>6 à 10 K</td></tr>\n<tr><td>Évaporateur de climatisation</td><td>Température de l'air repris − t<sub>0</sub></td><td>12 à 20 K</td></tr>\n<tr><td>Condenseur à air</td><td>t<sub>k</sub> − température de l'air entrant</td><td>10 à 20 K</td></tr>\n<tr><td>Échangeur à eau</td><td>t<sub>k</sub> − température de l'eau sortante, ou température de l'eau sortante − t<sub>0</sub></td><td>2 à 5 K</td></tr>\n</tbody>\n</table>\n<p>Ces ordres de grandeur sont indicatifs : chaque constructeur donne les valeurs de dimensionnement de son matériel. Ils permettent pourtant d'estimer rapidement les pressions attendues. Une chambre froide à +2 °C avec un évaporateur prévu pour un écart de 8 K doit fonctionner avec une température d'évaporation proche de −6 °C. Un condenseur à air dans un air extérieur à 30 °C, prévu pour un écart de 15 K, doit condenser vers 45 °C.</p>\n<p>Un écart trop faible au condenseur n'est pas forcément une bonne nouvelle : il peut traduire un compresseur qui ne travaille pas. Un écart trop important signale en général un échange difficile : échangeur encrassé, ventilateur arrêté, débit d'air ou d'eau insuffisant, présence d'incondensables.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque kelvin compte. Abaisser la température d'évaporation de 1 K ou élever la température de condensation de 1 K augmente la consommation du compresseur de quelques pour cent. Des échangeurs propres et une régulation bien réglée sont la première source d'économie d'énergie.</div>"
      },
      {
       "titre": "Taux de compression et température de refoulement",
       "contenu": "\n<p>Le <strong>taux de compression</strong> est le rapport entre la pression absolue de refoulement et la pression absolue d'aspiration :</p>\n<p><strong>τ = HP absolue ÷ BP absolue</strong> (sans unité).</p>\n<p>Avec les relevés précédents : τ = 27,3 ÷ 8,0 ≈ 3,4. Un taux de compression élevé dégrade le <strong>rendement volumétrique</strong> du compresseur (il aspire moins de vapeur à chaque tour), augmente la température de refoulement et la consommation électrique. Les constructeurs indiquent des limites d'utilisation dans une <strong>enveloppe de fonctionnement</strong> : un graphique qui borne les couples (t<sub>0</sub>, t<sub>k</sub>) admissibles.</p>\n<p>La <strong>température de refoulement</strong> résume l'état de la compression. Elle augmente avec le taux de compression et avec la surchauffe à l'aspiration. Une température trop élevée dégrade l'huile (carbonisation, formation d'acides) et use prématurément les clapets ou les spirales. La limite est fixée par le constructeur ; elle se situe souvent autour de 110 à 120 °C mesurés sur la conduite. Une température anormalement basse, proche de la température de condensation, peut au contraire révéler un retour de liquide.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la cohérence d'un relevé complet en quatre questions. 1. La température d'évaporation est-elle cohérente avec la température du milieu refroidi et l'écart prévu ? 2. La température de condensation est-elle cohérente avec la température du milieu extérieur et l'écart prévu ? 3. La surchauffe et le sous-refroidissement sont-ils dans les plages du constructeur ? 4. La température de refoulement et l'intensité absorbée par le compresseur sont-elles normales ? Un seul écart anormal oriente vers une famille de causes ; plusieurs écarts combinés permettent un diagnostic précis.</div>"
      },
      {
       "titre": "Interpréter les écarts : premières pistes",
       "contenu": "\n<p>Les écarts calculés ne prennent leur sens qu'ensemble. Le tableau suivant donne les grandes tendances, qui seront exploitées de manière systématique dans le diagnostic des pannes.</p>\n<table>\n<thead><tr><th>Observation</th><th>Interprétation la plus fréquente</th></tr></thead>\n<tbody>\n<tr><td>Surchauffe forte, BP basse, sous-refroidissement faible</td><td>Manque de fluide dans le circuit</td></tr>\n<tr><td>Surchauffe forte, BP basse, sous-refroidissement normal ou fort</td><td>Restriction côté liquide ou détendeur qui n'alimente pas assez</td></tr>\n<tr><td>Surchauffe très faible ou nulle, BP élevée</td><td>Détendeur qui alimente trop, ou charge excessive : risque de coups de liquide</td></tr>\n<tr><td>HP élevée, sous-refroidissement fort</td><td>Excès de fluide (installation sans réservoir)</td></tr>\n<tr><td>HP élevée, sous-refroidissement normal</td><td>Condenseur encrassé, ventilateur défaillant, air trop chaud ou incondensables</td></tr>\n<tr><td>BP élevée, HP basse, intensité faible</td><td>Compresseur qui ne comprime plus correctement</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les manifolds électroniques calculent automatiquement surchauffe et sous-refroidissement à condition de leur indiquer le bon fluide. Le technicien vérifie toujours le fluide sélectionné et garde un regard critique : une valeur affichée n'est juste que si les capteurs sont bien placés et les pressions bien raccordées.</div>"
      }
     ],
     "points_cles": [
      "Surchauffe = température d'aspiration − température d'évaporation ; elle protège le compresseur et renseigne sur le remplissage de l'évaporateur.",
      "Sous-refroidissement = température de condensation − température du liquide ; il assure une alimentation du détendeur en liquide pur.",
      "Les températures de saturation se lisent à partir des pressions absolues.",
      "L'évaporateur fonctionne quelques kelvins en dessous du milieu refroidi, le condenseur quelques kelvins au-dessus du milieu extérieur.",
      "Taux de compression = HP absolue ÷ BP absolue.",
      "Une température de refoulement trop élevée dégrade l'huile et le compresseur.",
      "Chaque kelvin gagné à l'évaporation ou à la condensation réduit la consommation.",
      "Les écarts s'interprètent ensemble, jamais isolément."
     ],
     "lexique": [
      {
       "terme": "Manifold",
       "def": "Appareil de mesure à deux manomètres (BP et HP) et vannes, souvent électronique, raccordé aux vannes de service."
      },
      {
       "terme": "Température d'évaporation",
       "def": "Température de saturation correspondant à la pression BP."
      },
      {
       "terme": "Température de condensation",
       "def": "Température de saturation correspondant à la pression HP."
      },
      {
       "terme": "Surchauffe",
       "def": "Écart entre la température de la vapeur et sa température de saturation à la même pression."
      },
      {
       "terme": "Sous-refroidissement",
       "def": "Écart entre la température de saturation et la température du liquide à la même pression."
      },
      {
       "terme": "Flash-gas",
       "def": "Vapeur formée dans la ligne liquide avant le détendeur, qui perturbe son alimentation."
      },
      {
       "terme": "Coup de liquide",
       "def": "Aspiration de liquide par le compresseur, destructrice pour ses organes mécaniques."
      },
      {
       "terme": "Taux de compression",
       "def": "Rapport entre pressions absolues de refoulement et d'aspiration."
      },
      {
       "terme": "Enveloppe de fonctionnement",
       "def": "Domaine des températures d'évaporation et de condensation admissibles pour un compresseur."
      },
      {
       "terme": "Incondensables",
       "def": "Gaz (air, azote) présents dans le circuit qui ne se condensent pas et font monter la HP."
      }
     ]
    },
    {
     "id": "bmfer-compresseurs",
     "titre": "Les compresseurs frigorifiques",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Classer les compresseurs selon leur principe et leur technologie de construction.",
      "Calculer un débit volumique balayé et utiliser le rendement volumétrique.",
      "Lire les performances d'un compresseur dans un catalogue en fonction des températures d'évaporation et de condensation.",
      "Expliquer le rôle de l'huile et les conditions d'un bon retour d'huile.",
      "Identifier les dispositifs de variation de puissance et de protection d'un compresseur."
     ],
     "sections": [
      {
       "titre": "Rôle et familles de compresseurs",
       "contenu": "\n<p>Le <strong>compresseur</strong> est le moteur du circuit frigorifique. Il aspire la vapeur produite dans l'évaporateur, ce qui maintient la basse pression, et la refoule à haute pression vers le condenseur. Il fixe le débit de fluide qui circule, donc la puissance frigorifique, et c'est lui qui consomme l'essentiel de l'énergie électrique de l'installation.</p>\n<p>On distingue deux grands principes :</p>\n<ul>\n<li>les compresseurs <strong>volumétriques</strong>, qui emprisonnent un volume de vapeur puis le réduisent : à piston, rotatif (à piston roulant), à spirales (<strong>scroll</strong>), à vis ;</li>\n<li>les compresseurs <strong>dynamiques</strong> (centrifuges), qui accélèrent la vapeur par une roue tournant très vite puis transforment cette vitesse en pression ; ils équipent les très grosses productions d'eau glacée.</li>\n</ul>\n<table>\n<thead><tr><th>Type</th><th>Plage de puissance indicative</th><th>Applications courantes</th><th>Points forts et faibles</th></tr></thead>\n<tbody>\n<tr><td>Piston</td><td>De quelques centaines de watts à quelques centaines de kW</td><td>Froid commercial, groupes de condensation, centrales</td><td>Robuste, réparable en semi-hermétique ; sensible aux coups de liquide</td></tr>\n<tr><td>Rotatif</td><td>Faible puissance</td><td>Climatiseurs individuels, petites PAC</td><td>Compact, silencieux</td></tr>\n<tr><td>Scroll</td><td>De quelques kW à quelques dizaines de kW par compresseur</td><td>Climatisation, PAC, froid commercial</td><td>Peu de pièces mobiles, bon rendement, tolère mieux le liquide</td></tr>\n<tr><td>Vis</td><td>De quelques dizaines à plusieurs centaines de kW</td><td>Froid industriel, groupes d'eau glacée</td><td>Variation de puissance progressive ; circuit d'huile important</td></tr>\n<tr><td>Centrifuge</td><td>Plusieurs centaines de kW et plus</td><td>Grosses productions d'eau glacée</td><td>Très bon rendement à forte puissance</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Hermétique, semi-hermétique ou ouvert",
       "contenu": "\n<p>La <strong>technologie de construction</strong> décrit la façon dont le moteur électrique et le compresseur sont assemblés.</p>\n<ul>\n<li><strong>Hermétique</strong> : moteur et compresseur sont enfermés dans une enveloppe en acier soudée. Le moteur est refroidi par les vapeurs aspirées. Aucune réparation interne n'est possible : en cas de défaillance, on remplace le compresseur complet. C'est le cas des compresseurs rotatifs, scroll et des petits compresseurs à piston.</li>\n<li><strong>Semi-hermétique</strong> (ou hermétique accessible) : l'enveloppe est assemblée par boulons et joints. On peut ouvrir le carter pour remplacer des clapets, un moteur ou des bielles. Il est réservé aux puissances moyennes et fortes.</li>\n<li><strong>Ouvert</strong> : le moteur est à l'extérieur et entraîne l'arbre du compresseur par un accouplement ou des courroies. Une <strong>garniture d'étanchéité</strong> empêche le fluide de fuir le long de l'arbre. C'est la solution des installations à l'ammoniac et de la climatisation automobile.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> lorsqu'un moteur de compresseur hermétique ou semi-hermétique grille, les produits de décomposition de l'isolant et de l'huile acidifient tout le circuit. Remplacer simplement le compresseur ne suffit pas : il faut tester l'acidité de l'huile, nettoyer le circuit, poser des filtres anti-acide et contrôler leur efficacité, sinon le compresseur neuf grillera à son tour.</div>"
      },
      {
       "titre": "Débit balayé et rendement volumétrique",
       "contenu": "\n<p>Un compresseur volumétrique déplace à chaque tour un volume appelé <strong>cylindrée</strong>. Multiplié par la vitesse de rotation, il donne le <strong>débit volumique balayé</strong>, noté V<sub>b</sub>, en m<sup>3</sup>/h. Pour un compresseur à piston :</p>\n<p>V<sub>b</sub> = nombre de cylindres × (π × D<sup>2</sup> ÷ 4) × course × vitesse de rotation.</p>\n<p>Le compresseur n'aspire pas réellement tout ce volume : la vapeur restée dans l'espace mort se détend avant que le clapet d'aspiration ne s'ouvre, la vapeur s'échauffe en entrant, et des fuites internes existent. Le rapport entre volume réellement aspiré et volume balayé s'appelle le <strong>rendement volumétrique</strong> η<sub>v</sub>. Il diminue quand le taux de compression augmente.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> compresseur à piston de 2 cylindres, alésage 50 mm, course 40 mm, 1 450 tr/min, rendement volumétrique 0,75, au R134a dans les conditions du cycle étudié avec le diagramme enthalpique (v<sub>1</sub> ≈ 0,102 m<sup>3</sup>/kg, q<sub>0</sub> = 148 kJ/kg). 1. Volume d'un cylindre : π × 0,05<sup>2</sup> ÷ 4 × 0,04 ≈ 7,85 × 10<sup>−5</sup> m<sup>3</sup>. 2. Cylindrée : 2 × 7,85 × 10<sup>−5</sup> ≈ 1,57 × 10<sup>−4</sup> m<sup>3</sup> (157 cm<sup>3</sup>). 3. Débit balayé : 1,57 × 10<sup>−4</sup> × 1 450 ÷ 60 ≈ 3,8 × 10<sup>−3</sup> m<sup>3</sup>/s, soit 13,7 m<sup>3</sup>/h. 4. Débit réellement aspiré : 3,8 × 10<sup>−3</sup> × 0,75 ≈ 2,85 × 10<sup>−3</sup> m<sup>3</sup>/s. 5. Débit massique : 2,85 × 10<sup>−3</sup> ÷ 0,102 ≈ 0,028 kg/s. 6. Puissance frigorifique : 0,028 × 148 ≈ 4,1 kW.</div>\n<p>Ce calcul montre pourquoi la puissance d'un compresseur dépend fortement des conditions : si la température d'évaporation baisse, le volume massique v<sub>1</sub> augmente et le rendement volumétrique diminue ; le débit massique, donc la puissance frigorifique, chute fortement.</p>"
      },
      {
       "titre": "Lire les performances dans un catalogue",
       "contenu": "\n<p>Les constructeurs publient les performances de chaque compresseur sous forme de tableaux ou de logiciels de sélection. Les performances sont données pour un fluide, une température d'évaporation t<sub>0</sub>, une température de condensation t<sub>k</sub> et des conditions de surchauffe et de sous-refroidissement précisées (conditions normalisées de la norme NF EN 12900 ou conditions propres au constructeur).</p>\n<table>\n<thead><tr><th>t<sub>0</sub> (°C)</th><th>Puissance frigorifique à t<sub>k</sub> = 35 °C (kW)</th><th>Puissance frigorifique à t<sub>k</sub> = 45 °C (kW)</th><th>Puissance absorbée à t<sub>k</sub> = 45 °C (kW)</th></tr></thead>\n<tbody>\n<tr><td>−15</td><td>3,1</td><td>2,6</td><td>1,35</td></tr>\n<tr><td>−10</td><td>3,9</td><td>3,3</td><td>1,45</td></tr>\n<tr><td>−5</td><td>4,8</td><td>4,1</td><td>1,55</td></tr>\n<tr><td>0</td><td>5,9</td><td>5,1</td><td>1,62</td></tr>\n</tbody>\n</table>\n<p>Ce tableau d'un compresseur fictif, typique d'un modèle de froid positif, illustre deux règles. Pour une même condensation, la puissance frigorifique augmente quand t<sub>0</sub> s'élève. Pour une même évaporation, elle diminue quand t<sub>k</sub> s'élève, tandis que la puissance absorbée augmente.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'un compresseur convient. Besoin : 4 kW à t<sub>0</sub> = −5 °C, condensation à 45 °C en été. 1. Lire la puissance frigorifique dans la case (−5 °C ; 45 °C) : 4,1 kW. 2. Comparer au besoin : 4,1 kW ≥ 4 kW, le compresseur convient, avec une faible marge. 3. Lire la puissance absorbée : 1,55 kW. 4. Calculer le COP réel dans ces conditions : 4,1 ÷ 1,55 ≈ 2,6. 5. Vérifier que le point (−5 °C ; 45 °C) est dans l'enveloppe de fonctionnement du compresseur.</div>"
      },
      {
       "titre": "L'huile et son retour au compresseur",
       "contenu": "\n<p>L'<strong>huile</strong> lubrifie les pièces en mouvement, assure l'étanchéité entre pièces (segments, spirales) et évacue une partie de la chaleur. Une petite quantité d'huile est toujours entraînée par le fluide dans le circuit : elle doit revenir au compresseur.</p>\n<p>L'huile doit être <strong>compatible</strong> avec le fluide (miscibilité, stabilité chimique) :</p>\n<table>\n<thead><tr><th>Huile</th><th>Fluides associés</th><th>Particularité</th></tr></thead>\n<tbody>\n<tr><td>Minérale, alkylbenzène</td><td>Anciens fluides (CFC, HCFC), hydrocarbures, ammoniac</td><td>Peu miscible avec les HFC</td></tr>\n<tr><td>POE (polyolester)</td><td>HFC, HFO et mélanges, CO<sub>2</sub> selon les constructeurs</td><td>Très hygroscopique : absorbe l'humidité de l'air</td></tr>\n<tr><td>PVE (polyvinyléther)</td><td>Certains climatiseurs au HFC</td><td>Hygroscopique, moins sensible à l'hydrolyse</td></tr>\n<tr><td>PAG (polyalkylène glycol)</td><td>Climatisation automobile</td><td>Très hygroscopique</td></tr>\n</tbody>\n</table>\n<p>Pour assurer le retour d'huile, la conduite d'aspiration est posée en pente vers le compresseur, les remontées verticales sont dimensionnées pour une vitesse suffisante et munies de <strong>siphons</strong> à leur base. Sur les installations importantes ou basse température, un <strong>séparateur d'huile</strong> au refoulement renvoie directement l'huile au carter.</p>\n<p>À l'arrêt, le fluide migre vers le point le plus froid, souvent le carter du compresseur, et se dissout dans l'huile. Au démarrage, ce mélange mousse et l'huile est entraînée. La <strong>résistance de carter</strong> maintient l'huile chaude pendant l'arrêt pour limiter cette migration.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un bidon d'huile POE ouvert absorbe rapidement l'humidité de l'air. On n'utilise que des bidons neufs et fermés, on les referme immédiatement, et on ne remet jamais dans le circuit une huile restée à l'air libre.</div>"
      },
      {
       "titre": "Variation de puissance et protections",
       "contenu": "\n<p>Les besoins en froid varient en permanence. Plusieurs solutions adaptent la puissance du compresseur :</p>\n<ul>\n<li>le <strong>tout-ou-rien</strong> : le compresseur démarre et s'arrête selon la température ; simple mais générateur de cycles et d'écarts de température ;</li>\n<li>l'<strong>étagement</strong> : plusieurs compresseurs en parallèle sur une même centrale, mis en route selon le besoin ;</li>\n<li>la <strong>mise hors service de cylindres</strong> ou le tiroir de régulation d'un compresseur à vis ;</li>\n<li>la <strong>variation de vitesse</strong> (technologie dite « inverter ») : un variateur de fréquence modifie la vitesse du moteur, donc le débit balayé ; c'est la solution des climatiseurs et PAC récents.</li>\n</ul>\n<p>Le compresseur est protégé par plusieurs dispositifs :</p>\n<ul>\n<li>une <strong>protection thermique du moteur</strong> : protecteur bilame intégré sur les petits compresseurs, sondes à thermistance (CTP) noyées dans le bobinage et reliées à un module électronique sur les plus gros ;</li>\n<li>une <strong>protection contre les surintensités</strong> : disjoncteur moteur ou relais thermique dans l'armoire ;</li>\n<li>les <strong>pressostats HP et BP</strong> et, sur certains modèles, un pressostat différentiel d'huile ;</li>\n<li>une <strong>temporisation anti-court-cycle</strong> qui impose un temps minimal entre deux démarrages, car les démarrages trop fréquents échauffent le moteur.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un compresseur qui « déclenche sur thermique » n'est pas forcément en défaut. Le technicien cherche la cause avant de réarmer : tension d'alimentation trop basse, surchauffe excessive qui refroidit mal le moteur, HP trop élevée, nombre de démarrages par heure trop important.</div>"
      }
     ],
     "points_cles": [
      "Le compresseur fixe le débit de fluide, donc la puissance frigorifique, et consomme l'essentiel de l'énergie.",
      "Piston, rotatif, scroll et vis sont volumétriques ; le centrifuge est dynamique.",
      "Un compresseur hermétique ne se répare pas ; un semi-hermétique peut être ouvert ; un ouvert a une garniture d'étanchéité.",
      "Débit balayé = cylindrée × vitesse ; débit aspiré = débit balayé × rendement volumétrique.",
      "La puissance frigorifique augmente quand t0 monte et diminue quand tk monte.",
      "L'huile doit être compatible avec le fluide ; les huiles POE sont très hygroscopiques.",
      "Pentes, siphons et vitesses suffisantes assurent le retour d'huile ; la résistance de carter limite la migration du fluide.",
      "La variation de vitesse (inverter) adapte finement la puissance au besoin."
     ],
     "lexique": [
      {
       "terme": "Compresseur volumétrique",
       "def": "Compresseur qui réduit un volume de vapeur emprisonné pour en élever la pression."
      },
      {
       "terme": "Scroll",
       "def": "Compresseur à deux spirales imbriquées, l'une fixe et l'autre en mouvement orbital."
      },
      {
       "terme": "Semi-hermétique",
       "def": "Compresseur dont le carter boulonné peut être ouvert pour réparation."
      },
      {
       "terme": "Cylindrée",
       "def": "Volume balayé par les pistons en un tour."
      },
      {
       "terme": "Débit balayé",
       "def": "Cylindrée multipliée par la vitesse de rotation."
      },
      {
       "terme": "Rendement volumétrique",
       "def": "Rapport entre le volume réellement aspiré et le volume balayé."
      },
      {
       "terme": "Huile POE",
       "def": "Huile synthétique polyolester utilisée avec les HFC et HFO, très sensible à l'humidité."
      },
      {
       "terme": "Résistance de carter",
       "def": "Élément chauffant qui limite la migration du fluide dans l'huile pendant l'arrêt."
      },
      {
       "terme": "Séparateur d'huile",
       "def": "Appareil placé au refoulement qui renvoie l'huile entraînée vers le carter."
      },
      {
       "terme": "Inverter",
       "def": "Technologie de variation de vitesse du compresseur par variateur de fréquence."
      }
     ]
    },
    {
     "id": "bmfer-echangeurs-detendeurs",
     "titre": "Évaporateurs, condenseurs et organes de détente",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire les principaux types d'évaporateurs et de condenseurs et leurs domaines d'emploi.",
      "Calculer la puissance échangée par un échangeur à partir du débit et de l'écart de température du fluide secondaire.",
      "Expliquer le fonctionnement d'un détendeur thermostatique à partir de l'équilibre des forces.",
      "Comparer tube capillaire, détendeur thermostatique et détendeur électronique.",
      "Identifier les modes de dégivrage d'un évaporateur à air."
     ],
     "sections": [
      {
       "titre": "Les évaporateurs",
       "contenu": "\n<p>L'<strong>évaporateur</strong> est l'échangeur dans lequel le fluide frigorigène s'évapore en prenant la chaleur du milieu à refroidir, appelé <strong>fluide secondaire</strong> (air, eau, eau glycolée) ou directement le produit.</p>\n<table>\n<thead><tr><th>Type</th><th>Description</th><th>Applications</th></tr></thead>\n<tbody>\n<tr><td>Évaporateur à air ventilé (plafonnier, cubique, double flux)</td><td>Batterie de tubes de cuivre et d'ailettes en aluminium traversée par un flux d'air forcé par un ou plusieurs ventilateurs</td><td>Chambres froides, meubles frigorifiques, unités intérieures de climatisation</td></tr>\n<tr><td>Évaporateur à air statique</td><td>Batterie sans ventilateur, convection naturelle</td><td>Petits meubles, vitrines à produits fragiles qui craignent le dessèchement</td></tr>\n<tr><td>Échangeur à plaques brasées</td><td>Plaques d'acier inoxydable empilées, fluide frigorigène et eau circulant dans des canaux alternés</td><td>Groupes d'eau glacée, pompes à chaleur eau-eau ou air-eau</td></tr>\n<tr><td>Échangeur multitubulaire</td><td>Faisceau de tubes dans une enveloppe (calandre)</td><td>Grosses productions d'eau glacée</td></tr>\n</tbody>\n</table>\n<p>Dans un évaporateur à <strong>détente sèche</strong>, le cas le plus courant, tout le liquide s'évapore et le fluide en sort surchauffé. Dans un évaporateur <strong>noyé</strong>, l'échangeur reste rempli de liquide et la vapeur est séparée dans une bouteille : cette solution, plus performante, se rencontre surtout en froid industriel.</p>\n<p>Les batteries à air de froid négatif ont des ailettes plus espacées (pas d'ailettes de 6 à 12 mm environ) que celles de froid positif ou de climatisation (2 à 4 mm), pour retarder le colmatage par le givre. Lorsqu'une batterie comporte plusieurs circuits en parallèle, un <strong>distributeur</strong> répartit le mélange liquide-vapeur sortant du détendeur de façon égale dans chaque circuit.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la puissance d'un évaporateur dépend de sa surface d'échange, de l'écart de température entre l'air et le fluide, et du débit d'air. Une batterie givrée ou encrassée perd ces trois qualités à la fois.</div>"
      },
      {
       "titre": "Le dégivrage des évaporateurs à air",
       "contenu": "\n<p>Lorsque la température de surface d'un évaporateur est inférieure à 0 °C, l'humidité de l'air s'y dépose sous forme de <strong>givre</strong>. Le givre isole la batterie et bouche le passage de l'air : la puissance chute, la température d'évaporation baisse, et la situation empire. Il faut donc <strong>dégivrer</strong> périodiquement.</p>\n<table>\n<thead><tr><th>Mode</th><th>Principe</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Naturel (par arrêt)</td><td>Arrêt de la production de froid, ventilateurs en marche, l'air de la chambre (au-dessus de 0 °C) fait fondre le givre</td><td>Froid positif, chambre à +2 °C ou plus</td></tr>\n<tr><td>Électrique</td><td>Résistances placées dans la batterie et dans le bac de récupération des eaux de fonte</td><td>Froid négatif, cas le plus courant</td></tr>\n<tr><td>Gaz chauds</td><td>Envoi de vapeur de refoulement dans l'évaporateur</td><td>Installations importantes, dégivrage rapide</td></tr>\n<tr><td>Inversion de cycle</td><td>La vanne 4 voies inverse le cycle : l'échangeur extérieur devient condenseur</td><td>Pompes à chaleur air-eau et air-air en hiver</td></tr>\n</tbody>\n</table>\n<p>Un dégivrage se déroule en séquence : arrêt de l'injection de fluide, arrêt des ventilateurs (en dégivrage électrique ou gaz chauds), chauffage jusqu'à une température de fin de dégivrage mesurée par une sonde sur la batterie, temps d'<strong>égouttage</strong> pour évacuer l'eau, remise en froid, puis redémarrage retardé des ventilateurs pour ne pas projeter de gouttes et laisser la batterie refroidir. Une durée maximale de sécurité limite chaque dégivrage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en froid négatif, la résistance du tuyau d'évacuation des condensats (cordon chauffant) est indispensable. Si elle est coupée, l'eau de fonte gèle dans le tuyau, le bac déborde, et un bloc de glace se forme sous l'évaporateur, au risque de casser des ailettes ou des tubes.</div>"
      },
      {
       "titre": "Les condenseurs",
       "contenu": "\n<p>Le <strong>condenseur</strong> évacue la chaleur prise à l'évaporateur plus l'énergie apportée par le compresseur. Le fluide y passe par trois phases : <strong>désurchauffe</strong> de la vapeur, <strong>condensation</strong> (l'essentiel de l'échange), puis <strong>sous-refroidissement</strong> du liquide.</p>\n<ul>\n<li>Le <strong>condenseur à air</strong> est une batterie à ailettes ventilée. Il est simple et ne consomme pas d'eau, mais sa température de condensation suit la température extérieure.</li>\n<li>Le <strong>condenseur à eau</strong> (plaques brasées, multitubulaire, coaxial) permet des températures de condensation plus basses et stables, mais nécessite un circuit d'eau, souvent relié à une tour de refroidissement ou à un aéroréfrigérant.</li>\n<li>Le <strong>condenseur évaporatif</strong> et le <strong>condenseur adiabatique</strong> utilisent l'évaporation d'eau pour refroidir l'air ou la batterie, ce qui abaisse la température de condensation en été. Les dispositifs qui pulvérisent de l'eau sont soumis à des règles d'entretien liées au risque de légionelles.</li>\n</ul>\n<p>La puissance échangée côté fluide secondaire se calcule avec la relation de la chaleur sensible :</p>\n<p><strong>Φ = q<sub>m</sub> × c × Δθ</strong>, avec q<sub>m</sub> le débit massique du fluide secondaire en kg/s, c sa capacité thermique massique en kJ/(kg·K) et Δθ son échauffement ou son refroidissement en K.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un condenseur à air est traversé par 4 000 m<sup>3</sup>/h d'air qui entre à 30 °C et sort à 38 °C. On prend ρ = 1,2 kg/m<sup>3</sup> et c = 1,006 kJ/(kg·K). 1. Débit volumique : 4 000 ÷ 3 600 ≈ 1,11 m<sup>3</sup>/s. 2. Débit massique : 1,11 × 1,2 ≈ 1,33 kg/s. 3. Puissance : 1,33 × 1,006 × 8 ≈ 10,7 kW. Le même calcul s'applique à l'eau avec c = 4,18 kJ/(kg·K) et ρ ≈ 1 000 kg/m<sup>3</sup>.</div>"
      },
      {
       "titre": "Le rôle de l'organe de détente",
       "contenu": "\n<p>L'<strong>organe de détente</strong> crée la chute de pression entre la HP et la BP et dose le débit de liquide envoyé à l'évaporateur. Trop de liquide, et du liquide non évaporé revient au compresseur ; pas assez, et une partie de l'évaporateur ne sert à rien.</p>\n<table>\n<thead><tr><th>Organe</th><th>Principe</th><th>Avantages</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Tube capillaire</td><td>Tube de très petit diamètre et de longueur calibrée ; la perte de charge crée la détente</td><td>Simple, sans pièce mobile, bon marché</td><td>Débit fixe, non réglable ; charge en fluide critique ; réservé aux petits équipements</td></tr>\n<tr><td>Détendeur thermostatique</td><td>Pointeau commandé par la surchauffe à la sortie de l'évaporateur</td><td>Régule la surchauffe, réglable, sans alimentation électrique</td><td>Réglage mécanique, réaction lente, plage de fonctionnement limitée</td></tr>\n<tr><td>Détendeur électronique</td><td>Vanne motorisée (moteur pas à pas) commandée par un régulateur à partir d'un capteur de pression et d'une sonde de température</td><td>Surchauffe faible et stable, s'adapte à toutes les conditions, économise l'énergie</td><td>Nécessite alimentation, régulateur et paramétrage</td></tr>\n</tbody>\n</table>\n<p>Les climatiseurs et pompes à chaleur récents utilisent presque tous un détendeur électronique, piloté par la carte électronique de l'appareil. En froid commercial, détendeurs thermostatiques et électroniques coexistent.</p>"
      },
      {
       "titre": "Le détendeur thermostatique",
       "contenu": "\n<p>Le <strong>détendeur thermostatique</strong> comporte un corps avec un orifice calibré et un pointeau, une membrane, un ressort de réglage et un <strong>bulbe</strong> relié à la tête par un tube capillaire. Le bulbe, fixé sur la conduite d'aspiration à la sortie de l'évaporateur, contient une charge de fluide dont la pression dépend de la température de la conduite.</p>\n<p>Trois forces agissent sur la membrane :</p>\n<ul>\n<li>la pression du bulbe <strong>P<sub>b</sub></strong>, au-dessus de la membrane, qui tend à <strong>ouvrir</strong> ;</li>\n<li>la pression d'évaporation <strong>P<sub>0</sub></strong>, sous la membrane, qui tend à fermer ;</li>\n<li>la force du <strong>ressort</strong>, exprimée en pression équivalente P<sub>r</sub>, qui tend à fermer.</li>\n</ul>\n<p>À l'équilibre : P<sub>b</sub> = P<sub>0</sub> + P<sub>r</sub>. Si la surchauffe augmente (évaporateur sous-alimenté), le bulbe se réchauffe, P<sub>b</sub> augmente, le détendeur s'ouvre et alimente davantage. Si la surchauffe diminue, il se referme. Le ressort fixe donc la <strong>surchauffe statique</strong> : serrer la vis de réglage augmente la surchauffe, la desserrer la diminue.</p>\n<p>Lorsque l'évaporateur provoque une perte de charge importante (batterie longue, distributeur), la pression sous la membrane doit être prise à la sortie de l'évaporateur et non à l'entrée : on utilise un détendeur à <strong>égalisation externe</strong>, relié à la conduite d'aspiration par un petit tube placé juste après le bulbe.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> régler la surchauffe d'un détendeur thermostatique. 1. Laisser l'installation se stabiliser en régime normal (chambre proche de sa consigne, au moins 15 à 20 minutes). 2. Mesurer la pression d'aspiration au plus près du bulbe et en déduire t<sub>0</sub>. 3. Mesurer la température de la conduite à l'endroit du bulbe. 4. Calculer la surchauffe. 5. Si elle est trop forte, desserrer la vis d'un quart de tour ; si elle est trop faible, la serrer d'un quart de tour. 6. Attendre la stabilisation (plusieurs minutes) avant toute nouvelle correction. 7. Noter la valeur finale sur le compte rendu.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un bulbe mal fixé, mal isolé ou placé sur un coude ou un siphon mesure une fausse température. Le détendeur réagit alors à une surchauffe erronée. Avant de toucher à la vis de réglage, on vérifie toujours la position et la fixation du bulbe (sur une conduite horizontale, en général entre 1 h et 4 h selon le diamètre).</div>"
      }
     ],
     "points_cles": [
      "L'évaporateur prend la chaleur du fluide secondaire ; le condenseur rejette la chaleur de l'évaporateur plus celle du compresseur.",
      "Les batteries de froid négatif ont des ailettes plus espacées et doivent être dégivrées.",
      "Dégivrages : naturel, électrique, gaz chauds, inversion de cycle ; séquence avec égouttage et redémarrage retardé des ventilateurs.",
      "Puissance échangée côté fluide secondaire : Φ = qm × c × Δθ.",
      "Le détendeur crée la chute de pression et dose le liquide envoyé à l'évaporateur.",
      "Détendeur thermostatique : équilibre Pb = P0 + Pr ; serrer le ressort augmente la surchauffe.",
      "L'égalisation externe corrige la perte de charge de l'évaporateur.",
      "Le détendeur électronique, piloté par capteur de pression et sonde de température, maintient une surchauffe faible et stable."
     ],
     "lexique": [
      {
       "terme": "Fluide secondaire",
       "def": "Fluide (air, eau, eau glycolée) qui échange de la chaleur avec le fluide frigorigène."
      },
      {
       "terme": "Détente sèche",
       "def": "Fonctionnement d'un évaporateur où tout le liquide s'évapore et sort surchauffé."
      },
      {
       "terme": "Distributeur",
       "def": "Pièce qui répartit le fluide détendu entre les circuits d'une batterie."
      },
      {
       "terme": "Givre",
       "def": "Dépôt de glace formé par l'humidité de l'air sur une surface à température négative."
      },
      {
       "terme": "Égouttage",
       "def": "Temps d'attente en fin de dégivrage pour évacuer l'eau de fonte."
      },
      {
       "terme": "Condenseur adiabatique",
       "def": "Condenseur à air dont l'air d'entrée est prérefroidi par évaporation d'eau."
      },
      {
       "terme": "Tube capillaire",
       "def": "Tube fin et calibré servant d'organe de détente à débit fixe."
      },
      {
       "terme": "Bulbe",
       "def": "Élément sensible du détendeur thermostatique fixé à la sortie de l'évaporateur."
      },
      {
       "terme": "Égalisation externe",
       "def": "Prise de pression à la sortie de l'évaporateur reliée sous la membrane du détendeur."
      },
      {
       "terme": "Détendeur électronique",
       "def": "Vanne de détente motorisée pilotée par un régulateur de surchauffe."
      }
     ]
    },
    {
     "id": "bmfer-accessoires-regulation",
     "titre": "Accessoires du circuit et régulation frigorifique",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Identifier le rôle et l'emplacement des accessoires d'un circuit frigorifique.",
      "Expliquer le fonctionnement d'une régulation de température par thermostat ou régulateur électronique.",
      "Décrire un cycle de fonctionnement avec arrêt par tirage au vide (pump-down).",
      "Régler un pressostat à partir des tables pression-température.",
      "Expliquer les régulations de pression de condensation et d'évaporation."
     ],
     "sections": [
      {
       "titre": "Les accessoires de la ligne liquide",
       "contenu": "\n<p>Entre le condenseur et le détendeur, la <strong>ligne liquide</strong> comporte plusieurs accessoires, dans un ordre logique.</p>\n<table>\n<thead><tr><th>Accessoire</th><th>Rôle</th><th>Point d'attention</th></tr></thead>\n<tbody>\n<tr><td>Réservoir de liquide (bouteille accumulatrice)</td><td>Stocke le fluide liquide, absorbe les variations de charge selon les conditions, permet de rassembler toute la charge lors d'une intervention</td><td>Équipement sous pression, souvent équipé d'une soupape ; le liquide en sort à saturation</td></tr>\n<tr><td>Vanne de sortie du réservoir</td><td>Isole le réservoir pour les interventions</td><td>Toujours repérer son état avant de manœuvrer</td></tr>\n<tr><td>Filtre déshydrateur</td><td>Retient l'humidité, les particules et, pour certains modèles, les acides</td><td>Remplacé à chaque ouverture du circuit ; une différence de température entre entrée et sortie signale son colmatage</td></tr>\n<tr><td>Voyant liquide avec indicateur d'humidité</td><td>Montre la présence de bulles et l'humidité du fluide par un changement de couleur de la pastille</td><td>Lire l'indicateur après plusieurs heures de fonctionnement</td></tr>\n<tr><td>Électrovanne liquide</td><td>Ferme l'arrivée de liquide à l'évaporateur à l'arrêt</td><td>Respecter le sens de passage (flèche sur le corps)</td></tr>\n<tr><td>Détendeur</td><td>Détente et dosage du liquide</td><td>Bulbe et égalisation correctement placés</td></tr>\n</tbody>\n</table>\n<p>La <strong>pastille</strong> de l'indicateur d'humidité est généralement verte lorsque le fluide est sec et jaune lorsqu'il est humide ; la notice du fabricant précise le code couleur exact. Des bulles au voyant peuvent signaler un manque de fluide, mais aussi un filtre partiellement colmaté juste en amont, ou un régime transitoire au démarrage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un filtre déshydrateur sortant d'emballage doit être monté immédiatement. Laissé ouvert à l'air, il se sature d'humidité en peu de temps et devient inutile. On retire les bouchons au dernier moment, juste avant le brasage ou le serrage.</div>"
      },
      {
       "titre": "Les accessoires des lignes d'aspiration et de refoulement",
       "contenu": "\n<p>D'autres accessoires protègent le compresseur ou rendent l'installation plus souple :</p>\n<ul>\n<li>la <strong>bouteille anti-coup de liquide</strong> (ou bouteille d'aspiration), placée avant le compresseur, retient le liquide qui pourrait revenir de l'évaporateur, notamment après un dégivrage ou dans une pompe à chaleur lors de l'inversion de cycle ; un orifice calibré y laisse remonter l'huile ;</li>\n<li>le <strong>filtre d'aspiration</strong>, posé lors d'un nettoyage de circuit après une casse de compresseur ;</li>\n<li>l'<strong>échangeur liquide-aspiration</strong>, qui sous-refroidit le liquide en surchauffant la vapeur aspirée ;</li>\n<li>le <strong>séparateur d'huile</strong> au refoulement ;</li>\n<li>le <strong>clapet anti-retour</strong>, qui empêche le fluide de revenir vers un compresseur à l'arrêt ou vers un condenseur froid ;</li>\n<li>la <strong>vanne 4 voies</strong> des pompes à chaleur réversibles, qui inverse le rôle des échangeurs pour passer du chauffage au rafraîchissement ou pour dégivrer ;</li>\n<li>les <strong>vannes de service</strong> du compresseur (vannes à trois positions avec prise de pression) et les <strong>valves Schrader</strong> qui permettent de raccorder le manifold.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un groupe de condensation, les vannes d'aspiration et de refoulement du compresseur ont trois positions. Tige sortie à fond (contre-siège arrière) : passage ouvert, prise de pression fermée. Tige en position intermédiaire : passage ouvert et prise de pression ouverte, pour la mesure. Tige rentrée à fond : passage fermé vers le circuit. Une erreur de manœuvre peut isoler le compresseur pendant qu'il tourne et provoquer une surpression ; chaque manœuvre se fait compresseur arrêté ou en connaissance de cause.</div>"
      },
      {
       "titre": "Réguler la température : thermostat et régulateur",
       "contenu": "\n<p>La <strong>régulation</strong> maintient la grandeur réglée (température de la chambre, de l'eau ou de l'air) proche d'une <strong>consigne</strong>, malgré les perturbations (ouvertures de porte, apport de marchandises chaudes, variations de la température extérieure).</p>\n<p>La forme la plus simple est la régulation <strong>tout-ou-rien</strong> par thermostat : le froid est produit lorsque la température dépasse la consigne augmentée du <strong>différentiel</strong>, et s'arrête lorsqu'elle redescend à la consigne. Exemple : consigne +2 °C, différentiel 2 K ; le compresseur démarre à +4 °C et s'arrête à +2 °C (selon le mode de réglage du régulateur, le différentiel peut être placé au-dessus ou autour de la consigne : la notice le précise).</p>\n<p>En froid commercial, un <strong>régulateur électronique</strong> regroupe plusieurs fonctions dans un même boîtier : régulation de température, gestion des dégivrages (fréquence, température de fin, durée maximale), commande des ventilateurs, alarmes de température haute et basse, enregistrement des températures et communication avec une supervision. Ses réglages sont des <strong>paramètres</strong>, codés par quelques lettres (consigne, différentiel, intervalle de dégivrage, etc.) dont la liste figure dans la notice.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un différentiel trop faible provoque des démarrages trop fréquents du compresseur (courts cycles), qui l'échauffent et l'usent. Un différentiel trop grand fait varier excessivement la température des denrées. Le réglage est un compromis guidé par le produit stocké et les recommandations du constructeur.</div>"
      },
      {
       "titre": "L'arrêt par tirage au vide (pump-down)",
       "contenu": "\n<p>Sur la plupart des installations de froid commercial à groupe de condensation, l'arrêt du compresseur ne se fait pas directement par le thermostat. On utilise le cycle de <strong>tirage au vide</strong> (pump-down) :</p>\n<ol>\n<li>la température de la chambre atteint la consigne : le régulateur ferme l'<strong>électrovanne liquide</strong> ;</li>\n<li>le compresseur continue de tourner et aspire le fluide contenu dans l'évaporateur, qui est stocké dans le condenseur et le réservoir ;</li>\n<li>la pression d'aspiration baisse jusqu'au seuil de coupure du <strong>pressostat BP de régulation</strong>, qui arrête le compresseur ;</li>\n<li>lorsque la température remonte, le régulateur rouvre l'électrovanne ; le liquide arrive à l'évaporateur, la pression BP remonte et le pressostat redémarre le compresseur.</li>\n</ol>\n<p>Ce cycle évite que du fluide liquide stagne dans l'évaporateur ou migre vers le carter du compresseur pendant l'arrêt, ce qui protège le compresseur au redémarrage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> régler un pressostat BP de pump-down sur une chambre positive au R134a (chambre à +2 °C, évaporation en marche vers −8 °C). 1. Choisir la coupure à une pression nettement inférieure à la BP de fonctionnement, mais positive pour éviter toute entrée d'air : par exemple 0,3 bar relatif (environ −20 °C de saturation). 2. Choisir le réenclenchement à une pression correspondant à une température de saturation inférieure à celle de la chambre, pour que le redémarrage ne se fasse qu'à l'ouverture de l'électrovanne : par exemple 1,5 bar relatif (environ −4 °C). 3. Régler sur le pressostat la valeur de réenclenchement (échelle « CUT IN » ou « RANGE ») et le différentiel (« DIFF ») : 1,5 − 0,3 = 1,2 bar. 4. Vérifier les valeurs réelles au manifold en faisant fonctionner le cycle, car les échelles des pressostats sont approximatives.</div>"
      },
      {
       "titre": "Pressostats de sécurité et chaîne de sécurité",
       "contenu": "\n<p>Les <strong>pressostats de sécurité</strong> arrêtent le compresseur lorsque la pression sort du domaine admissible :</p>\n<ul>\n<li>le <strong>pressostat HP de sécurité</strong> coupe en cas de pression de refoulement excessive (condenseur encrassé, ventilateur en panne, vanne fermée) ; il est réglé sous la PS de l'installation et il est souvent à <strong>réarmement manuel</strong>, pour obliger un technicien à chercher la cause ;</li>\n<li>le <strong>pressostat BP de sécurité</strong> coupe en cas de pression d'aspiration trop basse (manque de fluide, évaporateur bloqué par le givre) ;</li>\n<li>le <strong>pressostat différentiel d'huile</strong>, sur les compresseurs à pompe à huile, coupe si la pression d'huile est insuffisante après une temporisation.</li>\n</ul>\n<p>Ces contacts sont câblés en série dans la <strong>chaîne de sécurité</strong> qui autorise la marche du compresseur, avec les protections thermiques et les contacts des disjoncteurs moteurs. Sur les appareils de climatisation, les mêmes fonctions sont assurées par des capteurs de pression et de température lus par la carte électronique, qui affiche un <strong>code défaut</strong>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un pressostat de sécurité HP qui a déclenché ne se réarme qu'après avoir trouvé et corrigé la cause. Le réarmer plusieurs fois de suite sans recherche expose à une surpression, à un échauffement du compresseur et, à terme, à sa destruction.</div>"
      },
      {
       "titre": "Réguler les pressions de condensation et d'évaporation",
       "contenu": "\n<p>Un condenseur à air est dimensionné pour l'été. En hiver, l'air froid le rend surpuissant : la HP baisse trop, la différence de pression aux bornes du détendeur ne suffit plus pour l'alimenter correctement, et la production de froid chute. On <strong>régule la pression de condensation</strong> par :</p>\n<ul>\n<li>la mise en marche et l'arrêt des ventilateurs par pressostat ou par étages ;</li>\n<li>la <strong>variation de vitesse</strong> des ventilateurs en fonction de la HP, solution la plus économe ;</li>\n<li>une <strong>vanne de régulation de pression de condensation</strong> qui retient du liquide dans le condenseur pour réduire sa surface utile, associée à une vanne différentielle qui envoie des gaz chauds vers le réservoir.</li>\n</ul>\n<p>La tendance actuelle est la <strong>HP flottante</strong> : on laisse la pression de condensation descendre le plus bas possible, juste au-dessus du minimum nécessaire au détendeur. Avec un détendeur électronique, qui fonctionne avec une faible différence de pression, le gain d'énergie sur l'année est important.</p>\n<p>Côté basse pression, deux régulateurs mécaniques se rencontrent encore :</p>\n<ul>\n<li>le <strong>régulateur de pression d'évaporation</strong>, placé à la sortie d'un évaporateur, l'empêche de descendre sous une pression donnée (par exemple pour éviter le gel d'un échangeur à eau ou le dessèchement de produits frais lorsqu'une centrale alimente plusieurs meubles) ;</li>\n<li>le <strong>régulateur de pression de carter</strong>, placé avant le compresseur, limite la pression d'aspiration au démarrage ou après un dégivrage, pour ne pas surcharger le moteur.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une installation existante, abaisser la consigne de HP minimale et passer les ventilateurs du condenseur en variation de vitesse font partie des actions d'économie d'énergie souvent proposées au client lors d'une visite d'entretien, avec un retour sur investissement rapide.</div>"
      }
     ],
     "points_cles": [
      "Ligne liquide : réservoir, vanne, filtre déshydrateur, voyant, électrovanne, détendeur.",
      "Le filtre déshydrateur se remplace à chaque ouverture du circuit et se monte sans délai après déballage.",
      "La bouteille anti-coup de liquide, le clapet anti-retour et la vanne 4 voies protègent ou adaptent le circuit.",
      "La régulation tout-ou-rien repose sur une consigne et un différentiel ; un différentiel trop faible crée des courts cycles.",
      "Pump-down : l'électrovanne se ferme, le compresseur vide l'évaporateur, le pressostat BP l'arrête.",
      "Les pressostats de sécurité HP et BP sont câblés en série dans la chaîne de sécurité ; la HP est souvent à réarmement manuel.",
      "La HP flottante et la variation de vitesse des ventilateurs réduisent la consommation.",
      "Les échelles des pressostats sont approximatives : on vérifie toujours les seuils au manifold."
     ],
     "lexique": [
      {
       "terme": "Réservoir de liquide",
       "def": "Capacité qui stocke le fluide liquide à la sortie du condenseur."
      },
      {
       "terme": "Filtre déshydrateur",
       "def": "Filtre qui retient humidité, particules et acides du circuit."
      },
      {
       "terme": "Électrovanne",
       "def": "Vanne à commande électrique qui ouvre ou ferme le passage du fluide."
      },
      {
       "terme": "Bouteille anti-coup de liquide",
       "def": "Réservoir placé à l'aspiration qui empêche le liquide d'atteindre le compresseur."
      },
      {
       "terme": "Vanne 4 voies",
       "def": "Vanne qui inverse le cycle d'une pompe à chaleur réversible."
      },
      {
       "terme": "Consigne",
       "def": "Valeur souhaitée de la grandeur réglée."
      },
      {
       "terme": "Différentiel",
       "def": "Écart entre les seuils de mise en marche et d'arrêt d'une régulation tout-ou-rien."
      },
      {
       "terme": "Pump-down",
       "def": "Arrêt du compresseur après vidange de l'évaporateur, commandé par le pressostat BP."
      },
      {
       "terme": "Chaîne de sécurité",
       "def": "Contacts des organes de sécurité montés en série qui autorisent la marche du compresseur."
      },
      {
       "terme": "HP flottante",
       "def": "Stratégie qui laisse la pression de condensation baisser au minimum compatible avec le détendeur."
      }
     ]
    },
    {
     "id": "bmfer-chambres-froides",
     "titre": "Conservation des denrées, chambres froides et bilan frigorifique",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Expliquer l'action du froid sur les denrées et distinguer réfrigération, congélation et surgélation.",
      "Décrire la constitution d'une chambre froide positive et négative et ses équipements de sécurité.",
      "Calculer les apports de chaleur par les parois, le renouvellement d'air, les denrées et les charges internes.",
      "Déterminer la puissance frigorifique à installer à partir d'un bilan journalier et d'un temps de fonctionnement.",
      "Relier le bilan au choix de l'évaporateur et du groupe de condensation."
     ],
     "sections": [
      {
       "titre": "L'action du froid sur les denrées",
       "contenu": "\n<p>Les denrées alimentaires se dégradent sous l'effet des <strong>micro-organismes</strong> (bactéries, levures, moisissures), des <strong>enzymes</strong> présentes dans les produits et de réactions chimiques comme l'oxydation. Le froid ralentit tous ces phénomènes ; il ne les supprime pas et ne détruit pas les microbes. Un produit contaminé reste contaminé : le froid ne fait que freiner sa dégradation.</p>\n<table>\n<thead><tr><th>Technique</th><th>Plage de température</th><th>Principe</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>Réfrigération</td><td>Au-dessus du point de congélation du produit, souvent de 0 à +8 °C</td><td>Conservation de quelques jours à quelques semaines</td><td>Produits laitiers, viandes fraîches, fruits et légumes</td></tr>\n<tr><td>Congélation</td><td>Généralement −18 °C et en dessous</td><td>L'eau du produit se transforme en glace ; conservation de plusieurs mois</td><td>Stockage de viandes, pain précuit</td></tr>\n<tr><td>Surgélation</td><td>Abaissement très rapide jusqu'à −18 °C à cœur au moins</td><td>Cristaux de glace très fins qui préservent la texture</td><td>Produits surgelés du commerce</td></tr>\n</tbody>\n</table>\n<p>Les températures maximales de conservation des denrées sont fixées par la réglementation sanitaire (pour le commerce de détail, l'arrêté du 21 décembre 2009) ou par l'étiquetage du fabricant. Par exemple, les produits surgelés doivent être conservés à −18 °C ou moins. Le respect de la <strong>chaîne du froid</strong>, sans rupture de la production à la consommation, est une obligation des exploitants, qui l'intègrent dans leur plan de maîtrise sanitaire selon la méthode <strong>HACCP</strong>.</p>\n<p>L'<strong>humidité relative</strong> de l'air compte aussi : trop sèche, elle dessèche les produits non emballés (perte de poids, aspect) ; trop humide, elle favorise les moisissures. Les fruits et légumes demandent une humidité élevée, d'où des évaporateurs dimensionnés avec un faible écart de température.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une installation frigorifique de denrées est un outil de sécurité sanitaire. Une panne ou une dérive de température peut obliger le client à détruire sa marchandise : c'est pourquoi les alarmes de température, l'enregistrement et les délais de dépannage sont essentiels.</div>"
      },
      {
       "titre": "Constitution d'une chambre froide",
       "contenu": "\n<p>Une <strong>chambre froide</strong> est un local isolé, maintenu à température contrôlée. Elle est le plus souvent construite en <strong>panneaux sandwich</strong> : deux tôles d'acier laqué enserrant une âme isolante en mousse de polyuréthane (PUR) ou de polyisocyanurate (PIR). Les panneaux s'assemblent par emboîtement avec des crochets de serrage.</p>\n<table>\n<thead><tr><th>Élément</th><th>Chambre positive</th><th>Chambre négative</th></tr></thead>\n<tbody>\n<tr><td>Épaisseur courante des panneaux</td><td>60 à 100 mm</td><td>120 à 150 mm ou plus</td></tr>\n<tr><td>Sol</td><td>Isolé ou non selon le cas</td><td>Isolé, avec protection contre le gel du sol support (réchauffage ou vide sanitaire ventilé)</td></tr>\n<tr><td>Porte</td><td>Joint périphérique, ouverture intérieure</td><td>Cordon chauffant dans le cadre pour éviter le collage par le gel</td></tr>\n<tr><td>Soupape d'équilibrage</td><td>Rarement nécessaire</td><td>Indispensable : sans elle, la dépression créée par le refroidissement de l'air après une ouverture peut bloquer la porte ou déformer les panneaux</td></tr>\n</tbody>\n</table>\n<p>Les équipements de sécurité des personnes sont obligatoires : dispositif d'ouverture de la porte depuis l'intérieur, éclairage, et <strong>alarme « homme enfermé »</strong> (bouton intérieur relié à une sirène extérieure). Le technicien vérifie leur fonctionnement à chaque visite. Les accès fréquents sont équipés de rideaux à lanières ou de rideaux d'air qui limitent les entrées d'air chaud.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la jonction entre panneaux doit être parfaitement étanche à la vapeur d'eau, côté chaud. Une fuite d'air humide dans l'isolant d'une chambre négative y forme de la glace, détruit progressivement l'isolation et augmente fortement les apports de chaleur.</div>"
      },
      {
       "titre": "Les apports de chaleur",
       "contenu": "\n<p>Le <strong>bilan frigorifique</strong> recense toute la chaleur qui entre dans la chambre ou qui y est produite sur une journée. L'installation devra l'extraire.</p>\n<ul>\n<li><strong>Apports par les parois</strong> : Φ = U × S × Δθ, avec U le coefficient de transmission thermique de la paroi en W/(m<sup>2</sup>·K), S la surface en m<sup>2</sup> et Δθ l'écart entre l'extérieur et l'intérieur en K. Pour un panneau, U ≈ λ ÷ e, avec λ la conductivité de l'isolant (environ 0,022 W/(m·K) pour une mousse PUR) et e son épaisseur en mètres.</li>\n<li><strong>Apports par renouvellement d'air</strong> : à chaque ouverture, de l'air chaud et humide entre. On l'estime à partir du volume d'air renouvelé par jour et de la différence d'<strong>enthalpie</strong> (énergie contenue dans un kilogramme d'air, qui tient compte à la fois de sa température et de la vapeur d'eau qu'il contient) entre l'air extérieur et l'air intérieur, donnée par les tables ou le diagramme de l'air humide.</li>\n<li><strong>Apports par les denrées</strong> : Q = m × c × Δθ pour refroidir une masse m de produit de capacité thermique massique c. Si le produit est congelé, il faut ajouter la chaleur latente de congélation et le refroidissement sous le point de congélation, avec une capacité thermique plus faible.</li>\n<li><strong>Charges internes</strong> : éclairage, personnes, chariots, moteurs des ventilateurs de l'évaporateur, résistances de dégivrage.</li>\n<li>Pour certains produits vivants (fruits et légumes), la <strong>chaleur de respiration</strong>.</li>\n</ul>\n<p>Les données de calcul (conductivités, capacités thermiques des denrées, renouvellements d'air) proviennent des tables professionnelles et des fiches des fabricants de panneaux. On ajoute une <strong>majoration de sécurité</strong>, souvent de l'ordre de 10 %, pour couvrir les incertitudes.</p>"
      },
      {
       "titre": "Exemple de bilan d'une chambre positive",
       "contenu": "\n<p>On étudie une chambre de fruits et légumes de dimensions intérieures 4 m × 3 m × 2,5 m, maintenue à +2 °C dans un local à 25 °C. Panneaux de 80 mm en PUR sur les murs, le plafond et le sol (surface totale 59 m<sup>2</sup>). Entrée quotidienne de 500 kg de produits à 15 °C, de capacité thermique massique 3,8 kJ/(kg·K).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1. Parois : U ≈ 0,022 ÷ 0,08 ≈ 0,28 W/(m<sup>2</sup>·K) ; Φ = 0,28 × 59 × 23 ≈ 380 W, soit 380 × 24 ≈ 9,1 kWh par jour. 2. Denrées : Q = 500 × 3,8 × 13 = 24 700 kJ, soit 24 700 ÷ 3 600 ≈ 6,9 kWh par jour. 3. Renouvellement d'air : 300 m<sup>3</sup> d'air par jour (10 renouvellements du volume de 30 m<sup>3</sup>), masse ≈ 300 × 1,25 = 375 kg ; différence d'enthalpie entre l'air extérieur et l'air intérieur ≈ 38 kJ/kg ; Q ≈ 375 × 38 = 14 250 kJ ≈ 4,0 kWh par jour. 4. Charges internes : éclairage 100 W pendant 4 h = 0,4 kWh ; une personne 2 h à environ 270 W ≈ 0,5 kWh ; ventilateurs de l'évaporateur 100 W pendant 24 h = 2,4 kWh ; total ≈ 3,3 kWh par jour. 5. Total : 9,1 + 6,9 + 4,0 + 3,3 = 23,3 kWh par jour ; avec 10 % de majoration ≈ 25,6 kWh par jour. 6. Pour un fonctionnement de 18 h par jour (le reste du temps étant pris par les arrêts de régulation et les dégivrages) : puissance frigorifique = 25,6 ÷ 18 ≈ 1,4 kW.</div>\n<p>Ce résultat montre l'importance relative des postes : ici, les parois et les denrées pèsent le plus. Une porte laissée ouverte ou un rideau à lanières absent peut pourtant faire exploser le poste « renouvellement d'air ».</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne divise jamais le bilan journalier par 24 h pour obtenir la puissance à installer. L'installation doit avoir le temps de s'arrêter pour réguler et, en froid négatif, pour dégivrer. On retient couramment 16 à 18 h de fonctionnement par jour en froid positif, et souvent moins en froid négatif.</div>"
      },
      {
       "titre": "Du bilan au choix du matériel",
       "contenu": "\n<p>La puissance frigorifique obtenue permet de choisir l'<strong>évaporateur</strong> et le <strong>groupe de condensation</strong> dans les catalogues, en tenant compte de conditions cohérentes.</p>\n<ol>\n<li>Fixer la température d'évaporation à partir de la température de la chambre et de l'écart de température souhaité pour l'évaporateur : pour des fruits et légumes qui craignent le dessèchement, un écart faible, par exemple 6 K, d'où t<sub>0</sub> ≈ −4 °C.</li>\n<li>Choisir l'évaporateur dont la puissance, dans ces conditions, couvre le besoin, en vérifiant la portée de la ventilation (longueur de la chambre) et le pas d'ailettes.</li>\n<li>Choisir le groupe de condensation dont la puissance à t<sub>0</sub> et à la température extérieure maximale du site couvre aussi le besoin.</li>\n<li>Vérifier l'équilibre : la puissance réelle s'établit là où compresseur et évaporateur ont la même puissance. Un groupe très surdimensionné fait baisser t<sub>0</sub>, dessèche les produits et multiplie les courts cycles.</li>\n</ol>\n<p>En froid négatif, le bilan comprend en plus les résistances de dégivrage et de porte, et un temps de fonctionnement plus court. L'évaporateur est choisi avec un pas d'ailettes adapté au givrage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fabricants proposent des logiciels de bilan et de sélection. Ils accélèrent le travail, mais le technicien doit savoir vérifier un ordre de grandeur : pour une petite chambre positive bien isolée et normalement utilisée, quelques dizaines de watts par mètre cube est une valeur courante ; un résultat dix fois plus grand ou plus petit cache une erreur de saisie.</div>"
      }
     ],
     "points_cles": [
      "Le froid ralentit la dégradation des denrées mais ne détruit pas les micro-organismes.",
      "Réfrigération au-dessus du point de congélation ; congélation et surgélation à −18 °C ou moins.",
      "Les températures de conservation sont fixées par la réglementation sanitaire et l'étiquetage.",
      "Chambre négative : panneaux épais, sol protégé du gel, porte chauffée, soupape d'équilibrage.",
      "Dispositif d'ouverture intérieure et alarme homme enfermé sont obligatoires et vérifiés à chaque visite.",
      "Parois : Φ = U × S × Δθ ; denrées : Q = m × c × Δθ ; renouvellement d'air par différence d'enthalpie.",
      "Le bilan journalier se divise par un temps de fonctionnement de 16 à 18 h en froid positif, pas par 24 h.",
      "Évaporateur et groupe se choisissent à des conditions cohérentes ; un surdimensionnement dessèche les produits."
     ],
     "lexique": [
      {
       "terme": "Réfrigération",
       "def": "Conservation à une température positive, au-dessus du point de congélation du produit."
      },
      {
       "terme": "Surgélation",
       "def": "Congélation très rapide jusqu'à au moins −18 °C à cœur."
      },
      {
       "terme": "Chaîne du froid",
       "def": "Maintien sans interruption d'une denrée à sa température de conservation."
      },
      {
       "terme": "HACCP",
       "def": "Méthode d'analyse des dangers et de maîtrise des points critiques en hygiène alimentaire."
      },
      {
       "terme": "Panneau sandwich",
       "def": "Panneau composé de deux tôles et d'une âme isolante en mousse."
      },
      {
       "terme": "Soupape d'équilibrage",
       "def": "Dispositif qui égalise la pression entre l'intérieur d'une chambre négative et l'extérieur."
      },
      {
       "terme": "Coefficient U",
       "def": "Coefficient de transmission thermique d'une paroi, en W/(m2·K)."
      },
      {
       "terme": "Bilan frigorifique",
       "def": "Somme des apports de chaleur qu'une installation doit extraire sur une période."
      },
      {
       "terme": "Chaleur de respiration",
       "def": "Chaleur dégagée par les fruits et légumes qui continuent à vivre après récolte."
      },
      {
       "terme": "Majoration de sécurité",
       "def": "Pourcentage ajouté au bilan pour couvrir les incertitudes de calcul."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Réseaux électriques, hydrauliques et aérauliques, systèmes",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmfer-circuits-electriques",
     "titre": "Circuits électriques des installations frigorifiques",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Distinguer le circuit de puissance et le circuit de commande d'une armoire frigorifique.",
      "Identifier les appareillages de protection et de commande et leur repérage normalisé.",
      "Calculer l'intensité absorbée par un moteur triphasé et choisir sa protection.",
      "Suivre la logique de fonctionnement d'un schéma de commande de chambre froide.",
      "Réaliser les mesures électriques de contrôle d'un compresseur."
     ],
     "sections": [
      {
       "titre": "De l'alimentation au récepteur",
       "contenu": "\n<p>Le cours de seconde a posé les bases de l'électricité : grandeurs, loi d'Ohm, puissance, courants monophasé et triphasé. Une installation frigorifique met ces notions en œuvre dans une <strong>armoire électrique</strong> (ou coffret) qui alimente, commande et protège les récepteurs : compresseur, ventilateurs, résistances de dégivrage, électrovannes, éclairage.</p>\n<p>L'alimentation arrive depuis le tableau général du bâtiment par un câble protégé à son origine par un disjoncteur. Pour les appareils de puissance moyenne, elle est triphasée 400 V avec neutre (3P + N + PE) ; pour les petits appareils, monophasée 230 V (P + N + PE). Le conducteur de protection <strong>PE</strong> (vert-jaune) relie les masses métalliques à la terre. Associé à un dispositif <strong>différentiel</strong>, il protège les personnes contre les contacts indirects : en cas de défaut d'isolement, le différentiel coupe le circuit.</p>\n<p>Dans l'armoire, on distingue :</p>\n<ul>\n<li>le <strong>circuit de puissance</strong>, qui transporte l'énergie vers les récepteurs : sectionneur général, disjoncteurs, contacteurs, câbles de forte section ;</li>\n<li>le <strong>circuit de commande</strong>, qui décide quand alimenter chaque récepteur : régulateur, thermostat, pressostats, relais, bobines de contacteurs ; il est souvent alimenté en 230 V ou en très basse tension (24 V) par un transformateur.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le circuit de commande « décide », le circuit de puissance « exécute ». Le lien entre les deux est le contacteur : sa bobine appartient au circuit de commande, ses contacts principaux au circuit de puissance.</div>"
      },
      {
       "titre": "Appareillages et repérage",
       "contenu": "\n<p>Chaque appareil est représenté par un symbole normalisé et repéré par des lettres et un numéro. Les lettres usuelles en froid sont les suivantes (l'usage peut varier selon les constructeurs et l'édition des normes de repérage) :</p>\n<table>\n<thead><tr><th>Repère</th><th>Appareil</th><th>Fonction</th></tr></thead>\n<tbody>\n<tr><td>QS, Q</td><td>Sectionneur, interrupteur-sectionneur</td><td>Isoler l'installation pour intervenir, avec possibilité de cadenassage</td></tr>\n<tr><td>QF, Q</td><td>Disjoncteur, disjoncteur moteur</td><td>Protéger contre les courts-circuits et les surcharges</td></tr>\n<tr><td>F</td><td>Fusible, relais thermique</td><td>Protection contre les courts-circuits ou les surcharges</td></tr>\n<tr><td>KM</td><td>Contacteur</td><td>Établir et couper le courant d'un moteur ou d'une résistance sur ordre</td></tr>\n<tr><td>KA</td><td>Relais auxiliaire</td><td>Démultiplier ou adapter un ordre de commande</td></tr>\n<tr><td>BP, BH ou B</td><td>Pressostat, thermostat, capteur</td><td>Transformer une grandeur physique en information</td></tr>\n<tr><td>S</td><td>Bouton, interrupteur de commande</td><td>Ordre manuel</td></tr>\n<tr><td>Y</td><td>Électrovanne</td><td>Ouvrir ou fermer un passage de fluide</td></tr>\n<tr><td>M, R, H</td><td>Moteur, résistance, voyant</td><td>Récepteurs</td></tr>\n</tbody>\n</table>\n<p>Les contacts se lisent toujours dans l'état « repos » : appareil non alimenté, pressostat à la pression atmosphérique, thermostat à une température de référence. Un contact <strong>normalement ouvert</strong> (NO) se ferme quand l'appareil est actionné ; un contact <strong>normalement fermé</strong> (NF) s'ouvre. Sur un pressostat, on repère les bornes par la notice : le contact qui s'ouvre sur hausse de pression pour un pressostat HP, sur baisse de pression pour un pressostat BP.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un relais thermique ne coupe pas lui-même le courant du moteur. Il ouvre un contact dans le circuit de commande, qui fait retomber le contacteur. Si ce contact n'est pas câblé dans la commande, le moteur n'est plus protégé contre les surcharges.</div>"
      },
      {
       "titre": "Le moteur triphasé et sa protection",
       "contenu": "\n<p>Les compresseurs et les ventilateurs de puissance sont entraînés par des <strong>moteurs asynchrones</strong>. Leur plaque signalétique indique la puissance utile (mécanique) P<sub>u</sub>, la tension, l'intensité nominale I<sub>n</sub>, le facteur de puissance cos φ et parfois le rendement η. Sur un compresseur hermétique, la plaque indique plutôt l'intensité maximale de fonctionnement et l'intensité rotor bloqué (LRA), qui donne une idée du courant de démarrage.</p>\n<p>En triphasé, la puissance électrique absorbée vaut P<sub>a</sub> = √3 × U × I × cos φ, avec U la tension entre phases. La puissance utile vaut P<sub>u</sub> = η × P<sub>a</sub>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'intensité d'un moteur de 4 kW utiles, alimenté en 400 V triphasé, avec cos φ = 0,85 et η = 0,85. 1. Puissance absorbée : P<sub>a</sub> = 4 000 ÷ 0,85 ≈ 4 700 W. 2. Intensité : I = P<sub>a</sub> ÷ (√3 × U × cos φ) = 4 700 ÷ (1,732 × 400 × 0,85) ≈ 8,0 A. 3. Choix de la protection : un disjoncteur moteur dont la plage de réglage thermique encadre 8 A (par exemple 6 à 10 A), réglé à l'intensité nominale indiquée sur la plaque. 4. Vérifier que la section du câble et le pouvoir de coupure conviennent, selon les règles d'installation.</div>\n<p>Le moteur peut se brancher en <strong>étoile</strong> ou en <strong>triangle</strong> selon la tension du réseau et les indications de la plaque (par exemple « 230 V triangle / 400 V étoile » : sur un réseau 400 V entre phases, couplage étoile). Le sens de rotation d'un moteur triphasé s'inverse en permutant deux phases.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un compresseur scroll triphasé ne doit pas tourner à l'envers : il ne comprime pas, devient bruyant et peut être endommagé. Lors de la mise en service, on vérifie l'ordre des phases avec un contrôleur de rotation de phases ou l'on observe immédiatement les pressions (la HP doit monter, la BP baisser). Beaucoup de groupes sont équipés d'un relais de contrôle de phases.</div>"
      },
      {
       "titre": "Lire un schéma de commande de chambre froide",
       "contenu": "\n<p>Le schéma de commande se dessine sous forme <strong>développée</strong> : chaque circuit est tracé entre deux lignes horizontales (phase et neutre, ou 24 V et 0 V), et l'on suit le passage du courant de haut en bas, de gauche à droite. Prenons une chambre froide positive à pump-down :</p>\n<table>\n<thead><tr><th>Ligne</th><th>Éléments en série</th><th>Récepteur</th><th>Fonction</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Interrupteur marche S1, contact du régulateur (sortie froid)</td><td>Bobine de l'électrovanne liquide Y1</td><td>Ouverture du liquide quand la chambre demande du froid</td></tr>\n<tr><td>2</td><td>S1, contact NF du disjoncteur moteur QF1, pressostat HP de sécurité BH (réarmement manuel), pressostat BP de régulation BP, temporisation anti-court-cycle</td><td>Bobine du contacteur KM1</td><td>Marche du compresseur si toutes les sécurités sont fermées et si la BP est suffisante</td></tr>\n<tr><td>3</td><td>Contact du régulateur (sortie ventilateurs)</td><td>Bobine KM2</td><td>Marche des ventilateurs de l'évaporateur, arrêtés pendant le dégivrage</td></tr>\n<tr><td>4</td><td>Contact du régulateur (sortie dégivrage)</td><td>Bobine KM3</td><td>Alimentation des résistances de dégivrage (si dégivrage électrique)</td></tr>\n<tr><td>5</td><td>Contact auxiliaire de KM1</td><td>Voyant H1</td><td>Signalisation « compresseur en marche »</td></tr>\n</tbody>\n</table>\n<p>Pour comprendre un schéma, on se pose pour chaque récepteur la question : « quelles conditions doivent être remplies en même temps pour qu'il soit alimenté ? ». Des contacts en <strong>série</strong> traduisent un ET logique ; des contacts en <strong>parallèle</strong>, un OU.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> localiser une panne « compresseur ne démarre pas » sur ce schéma. 1. Vérifier la présence de tension en tête de la ligne 2. 2. Suivre la ligne contact par contact en mesurant la tension par rapport au neutre (ou au 0 V) après chaque contact, appareil sous tension et avec l'habilitation adaptée. 3. Le premier point sans tension se trouve juste après le contact ouvert. 4. Chercher pourquoi ce contact est ouvert (pression HP trop élevée, BP trop basse, déclenchement thermique) avant toute autre action. 5. Si la tension arrive à la bobine mais que le contacteur ne colle pas, contrôler la bobine hors tension à l'ohmmètre.</div>"
      },
      {
       "titre": "Les mesures électriques sur un compresseur",
       "contenu": "\n<p>Plusieurs mesures permettent de juger l'état électrique d'un compresseur.</p>\n<ul>\n<li><strong>Tension d'alimentation</strong> à ses bornes, en fonctionnement : elle doit rester dans la tolérance du constructeur (souvent ±10 % de la tension nominale). Une tension trop basse fait chauffer le moteur.</li>\n<li><strong>Intensité absorbée</strong>, à la pince ampèremétrique, sur chaque phase : les trois intensités d'un moteur triphasé doivent être proches. Un déséquilibre important signale un défaut d'alimentation ou de bobinage.</li>\n<li><strong>Résistance des enroulements</strong>, à l'ohmmètre, moteur consigné et bornes débranchées : en triphasé, les trois résistances entre bornes doivent être égales ; en monophasé, la résistance entre le commun et la borne de marche est plus faible qu'entre le commun et la borne de démarrage, et la somme des deux est égale à la résistance entre marche et démarrage.</li>\n<li><strong>Résistance d'isolement</strong>, au mégohmmètre (sous une tension d'essai continue, typiquement 500 V pour un moteur basse tension), entre chaque borne et la carcasse : la valeur doit être élevée, de l'ordre du mégohm ou bien plus ; la valeur minimale est donnée par la norme ou le constructeur.</li>\n</ul>\n<p>Les compresseurs monophasés utilisent un <strong>condensateur</strong> permanent ou un condensateur de démarrage associé à un relais. Un condensateur défectueux empêche le démarrage ou fait chauffer le moteur : on le contrôle au capacimètre, après l'avoir déchargé.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une mesure d'isolement faible sur un compresseur hermétique peut être due à du fluide liquide présent dans le carter après un long arrêt. Le technicien reproduit la mesure après avoir laissé chauffer la résistance de carter ; si la valeur reste basse, le moteur est à remplacer. Il note toujours les valeurs mesurées sur le compte rendu, ce qui permet de suivre leur évolution d'une visite à l'autre.</div>"
      }
     ],
     "points_cles": [
      "L'armoire comprend un circuit de puissance qui exécute et un circuit de commande qui décide ; le contacteur fait le lien.",
      "Le PE et le différentiel protègent les personnes contre les contacts indirects.",
      "Les contacts se lisent à l'état repos ; en série, ils forment un ET, en parallèle, un OU.",
      "Le relais thermique ouvre un contact de commande : il doit être câblé dans la ligne du contacteur.",
      "En triphasé : Pa = √3 × U × I × cos φ ; Pu = η × Pa.",
      "Un compresseur scroll triphasé ne doit pas tourner à l'envers : vérifier l'ordre des phases.",
      "Une panne de commande se localise en suivant la ligne contact par contact.",
      "Tension, intensité, résistance des enroulements et isolement sont les quatre contrôles électriques d'un compresseur."
     ],
     "lexique": [
      {
       "terme": "Circuit de puissance",
       "def": "Partie de l'installation qui alimente les récepteurs en énergie."
      },
      {
       "terme": "Circuit de commande",
       "def": "Partie de l'installation qui élabore les ordres de mise en marche et d'arrêt."
      },
      {
       "terme": "Contacteur",
       "def": "Appareil à commande électromagnétique qui établit et coupe le courant d'un récepteur."
      },
      {
       "terme": "Disjoncteur moteur",
       "def": "Appareil qui protège un moteur contre les courts-circuits et les surcharges."
      },
      {
       "terme": "Contact NO",
       "def": "Contact ouvert au repos, qui se ferme lorsque l'appareil est actionné."
      },
      {
       "terme": "Contact NF",
       "def": "Contact fermé au repos, qui s'ouvre lorsque l'appareil est actionné."
      },
      {
       "terme": "Schéma développé",
       "def": "Représentation des circuits en lignes successives entre deux potentiels d'alimentation."
      },
      {
       "terme": "Facteur de puissance",
       "def": "Rapport entre puissance active et puissance apparente, noté cos φ pour un courant sinusoïdal."
      },
      {
       "terme": "LRA",
       "def": "Intensité rotor bloqué : courant absorbé par le moteur au démarrage ou bloqué."
      },
      {
       "terme": "Mégohmmètre",
       "def": "Appareil de mesure de la résistance d'isolement sous une tension continue élevée."
      }
     ]
    },
    {
     "id": "bmfer-demarrage-variation",
     "titre": "Démarrage des moteurs, variation de vitesse et commande électronique",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Comparer les modes de démarrage des moteurs de compresseurs et de ventilateurs.",
      "Expliquer le principe d'un variateur de fréquence et calculer une vitesse de rotation.",
      "Évaluer l'économie d'énergie apportée par la variation de vitesse d'un ventilateur ou d'une pompe.",
      "Contrôler les capteurs et interpréter les codes défauts d'une carte électronique.",
      "Situer la télésurveillance et la gestion technique dans la maintenance des installations."
     ],
     "sections": [
      {
       "titre": "Le problème du démarrage",
       "contenu": "\n<p>Au démarrage, un moteur asynchrone absorbe un courant très supérieur à son courant nominal, souvent 5 à 8 fois plus, pendant une fraction de seconde à quelques secondes. Ce <strong>courant d'appel</strong> provoque une chute de tension sur le réseau (vacillement de l'éclairage, perturbation d'autres appareils), sollicite les protections et impose des contraintes mécaniques au compresseur.</p>\n<table>\n<thead><tr><th>Mode de démarrage</th><th>Principe</th><th>Courant d'appel</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Direct</td><td>Le moteur reçoit d'emblée la pleine tension</td><td>Maximal</td><td>Petites et moyennes puissances, cas le plus courant</td></tr>\n<tr><td>Étoile-triangle</td><td>Démarrage en couplage étoile puis basculement en triangle</td><td>Réduit à environ un tiers du direct</td><td>Moteurs dont la tension triangle est celle du réseau ; compresseurs ouverts, vis</td></tr>\n<tr><td>Bobinage partiel (part-winding)</td><td>Démarrage sur une moitié du bobinage, puis la seconde est ajoutée après un court délai</td><td>Réduit d'environ un tiers à la moitié</td><td>Compresseurs semi-hermétiques à piston</td></tr>\n<tr><td>Démarreur progressif électronique</td><td>Montée progressive de la tension par composants électroniques</td><td>Limité et réglable</td><td>Compresseurs et grosses pompes</td></tr>\n<tr><td>Variateur de fréquence</td><td>Montée progressive de la fréquence et de la tension</td><td>Proche du courant nominal</td><td>Compresseurs inverter, ventilateurs, pompes</td></tr>\n</tbody>\n</table>\n<p>Le démarrage d'un compresseur est facilité lorsque les pressions sont équilibrées entre HP et BP. C'est le cas des petits compresseurs à capillaire, dont les pressions s'égalisent pendant l'arrêt. Sinon, le moteur doit vaincre la différence de pression : c'est l'une des raisons de la temporisation anti-court-cycle.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un démarrage étoile-triangle ou part-winding, un mauvais câblage ou une temporisation mal réglée fait démarrer le moteur sur une partie de bobinage seulement ou en court-circuit. Le schéma du constructeur du compresseur doit être suivi strictement, notamment pour l'ordre de raccordement des bornes.</div>"
      },
      {
       "titre": "Le variateur de fréquence",
       "contenu": "\n<p>La vitesse de rotation d'un moteur asynchrone dépend de la fréquence du courant qui l'alimente. La <strong>vitesse de synchronisme</strong> vaut n<sub>s</sub> = 60 × f ÷ p, en tr/min, avec f la fréquence en Hz et p le nombre de paires de pôles. Le rotor tourne un peu moins vite : c'est le <strong>glissement</strong>, de quelques pour cent.</p>\n<p>Un <strong>variateur de fréquence</strong> transforme le courant du réseau (50 Hz) en un courant de fréquence variable. Il comprend trois étages :</p>\n<ol>\n<li>un <strong>redresseur</strong> qui transforme l'alternatif en continu ;</li>\n<li>un <strong>bus continu</strong> avec des condensateurs qui lissent la tension ;</li>\n<li>un <strong>onduleur</strong> à transistors qui reconstitue une tension alternative de fréquence et d'amplitude réglables, par découpage à haute fréquence (modulation de largeur d'impulsion).</li>\n</ol>\n<p>Les compresseurs « inverter » des climatiseurs et des PAC utilisent souvent un moteur synchrone à aimants permanents, piloté par une électronique de même principe, qui offre un meilleur rendement à charge partielle. Les ventilateurs récents sont fréquemment équipés de <strong>moteurs EC</strong> (à commutation électronique) qui intègrent leur propre électronique de variation et reçoivent une simple consigne (par exemple un signal 0-10 V).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vitesse d'un moteur à 2 paires de pôles. À 50 Hz : n<sub>s</sub> = 60 × 50 ÷ 2 = 1 500 tr/min ; avec un glissement de 4 %, le moteur tourne à environ 1 440 tr/min. Alimenté par un variateur à 35 Hz : n<sub>s</sub> = 60 × 35 ÷ 2 = 1 050 tr/min, soit environ 1 010 tr/min réels.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les condensateurs du bus continu d'un variateur restent chargés plusieurs minutes après la coupure de l'alimentation. Avant d'intervenir à l'intérieur, on attend le délai indiqué par le constructeur et on vérifie l'absence de tension sur le bus continu. Les variateurs perturbent aussi le réseau (harmoniques) : câbles blindés, filtres et type de dispositif différentiel doivent respecter la notice.</div>"
      },
      {
       "titre": "Les économies d'énergie de la variation de vitesse",
       "contenu": "\n<p>Pour un ventilateur ou une pompe centrifuge travaillant sur un même réseau, les <strong>lois de similitude</strong> relient vitesse, débit, pression et puissance :</p>\n<ul>\n<li>le débit est proportionnel à la vitesse ;</li>\n<li>la pression est proportionnelle au carré de la vitesse ;</li>\n<li>la puissance absorbée est proportionnelle au cube de la vitesse.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un ventilateur de condenseur absorbe 1,2 kW à pleine vitesse. En hiver, la régulation de HP le fait tourner à 60 % de sa vitesse. Débit : 60 % du débit nominal. Puissance : 1,2 × 0,6<sup>3</sup> = 1,2 × 0,216 ≈ 0,26 kW. Le ventilateur consomme environ cinq fois moins pour un débit réduit seulement de 40 %. Sur plusieurs milliers d'heures par an, l'économie justifie largement l'investissement.</div>\n<p>Pour le compresseur, la variation de vitesse permet de suivre exactement le besoin au lieu d'enchaîner marches et arrêts. À charge partielle, les échangeurs se trouvent surdimensionnés par rapport au débit de fluide : la température d'évaporation remonte et la température de condensation baisse, ce qui améliore le COP. C'est pourquoi les performances saisonnières (SEER en froid, SCOP en chaud) des appareils inverter sont nettement supérieures à celles des appareils tout-ou-rien.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la variation de vitesse réduit les courants d'appel, supprime les courts cycles, améliore la précision de température et diminue la consommation. En contrepartie, elle ajoute une électronique qui doit être protégée, ventilée et diagnostiquée.</div>"
      },
      {
       "titre": "Capteurs et cartes électroniques",
       "contenu": "\n<p>Les climatiseurs, PAC et régulateurs modernes s'appuient sur des capteurs reliés à une carte électronique :</p>\n<ul>\n<li>des <strong>sondes de température à thermistance</strong>, le plus souvent de type CTN (coefficient de température négatif : leur résistance diminue quand la température augmente), placées sur l'air repris, les tubes des échangeurs, le refoulement, l'aspiration ;</li>\n<li>des <strong>capteurs de pression</strong> qui délivrent un signal électrique (tension ou courant) proportionnel à la pression ;</li>\n<li>des capteurs de présence d'eau, de débit, de position de volets.</li>\n</ul>\n<p>Une sonde CTN se contrôle hors tension, débranchée, en mesurant sa résistance à l'ohmmètre et en la comparant à la table du constructeur pour la température réelle mesurée avec un thermomètre de référence. Par exemple, une sonde de 10 kΩ à 25 °C présente une résistance plus élevée au froid et plus faible au chaud ; un circuit ouvert ou un court-circuit est immédiatement détecté par la carte.</p>\n<p>En cas d'anomalie, la carte affiche un <strong>code défaut</strong> (sur l'afficheur de l'unité, par le clignotement d'une LED ou sur la télécommande). La notice de service du constructeur donne la signification de chaque code et la procédure de contrôle.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> traiter un code défaut « sonde échangeur intérieur ». 1. Relever le code et le noter avec la date et les conditions. 2. Lire dans la notice de service la signification et les causes possibles. 3. Couper l'alimentation, débrancher la sonde et mesurer sa résistance ; mesurer la température réelle du tube. 4. Comparer à la table : si la valeur est hors tolérance, remplacer la sonde ; si elle est correcte, contrôler le connecteur et le câble, puis la carte selon la procédure. 5. Remettre sous tension, vérifier la disparition du code et le fonctionnement.</div>"
      },
      {
       "titre": "Télésurveillance et gestion technique",
       "contenu": "\n<p>Les installations frigorifiques importantes sont reliées à une <strong>supervision</strong> ou à un système de <strong>gestion technique du bâtiment</strong> (GTB). Les régulateurs communiquent par un bus de terrain (Modbus, BACnet ou protocole propre au constructeur) et transmettent températures, états, alarmes et consommations.</p>\n<p>La supervision permet :</p>\n<ul>\n<li>d'enregistrer les températures des denrées, preuve du respect de la chaîne du froid lors d'un contrôle sanitaire ;</li>\n<li>de transmettre les alarmes au technicien d'astreinte, souvent avant que les denrées ne soient menacées ;</li>\n<li>de suivre l'évolution des paramètres (temps de fonctionnement, pressions, températures de refoulement) pour détecter une dérive et planifier une intervention, ce qui relève de la <strong>maintenance prévisionnelle</strong> ;</li>\n<li>de modifier certains réglages à distance.</li>\n</ul>\n<p>La réglementation française sur l'automatisation et le contrôle des bâtiments tertiaires (dite décret BACS) impose progressivement aux bâtiments tertiaires dont les systèmes de chauffage ou de climatisation dépassent un certain seuil de puissance d'être équipés de tels systèmes. Les seuils et échéances évoluent et se vérifient dans le texte en vigueur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de se déplacer sur une alarme reçue la nuit, le technicien d'astreinte consulte les courbes de la supervision : une température qui monte lentement depuis la veille n'appelle pas la même réponse qu'une coupure brutale. Sur place, il vérifie toujours la cohérence entre la valeur transmise et une mesure de contrôle.</div>"
      }
     ],
     "points_cles": [
      "Le courant d'appel d'un moteur asynchrone atteint couramment 5 à 8 fois l'intensité nominale.",
      "Étoile-triangle, part-winding, démarreur progressif et variateur réduisent le courant de démarrage.",
      "Vitesse de synchronisme : ns = 60 × f ÷ p.",
      "Un variateur comprend redresseur, bus continu et onduleur ; ses condensateurs restent chargés après la coupure.",
      "Pour un ventilateur ou une pompe, la puissance varie comme le cube de la vitesse.",
      "Les appareils inverter ont de meilleures performances saisonnières (SEER, SCOP).",
      "Une sonde CTN se contrôle hors tension en comparant sa résistance à la table du constructeur.",
      "La supervision enregistre, alerte et permet la maintenance prévisionnelle."
     ],
     "lexique": [
      {
       "terme": "Courant d'appel",
       "def": "Courant élevé absorbé par un moteur pendant son démarrage."
      },
      {
       "terme": "Part-winding",
       "def": "Démarrage d'un moteur sur une partie de son bobinage pour réduire le courant d'appel."
      },
      {
       "terme": "Démarreur progressif",
       "def": "Appareil électronique qui augmente progressivement la tension au démarrage."
      },
      {
       "terme": "Variateur de fréquence",
       "def": "Appareil qui alimente un moteur sous une fréquence et une tension réglables."
      },
      {
       "terme": "Glissement",
       "def": "Écart relatif entre la vitesse de synchronisme et la vitesse réelle du rotor."
      },
      {
       "terme": "Moteur EC",
       "def": "Moteur à commutation électronique intégrant sa propre électronique de pilotage."
      },
      {
       "terme": "CTN",
       "def": "Thermistance dont la résistance diminue quand la température augmente."
      },
      {
       "terme": "Code défaut",
       "def": "Code affiché par une carte électronique pour signaler une anomalie détectée."
      },
      {
       "terme": "GTB",
       "def": "Gestion technique du bâtiment : système de supervision des équipements techniques."
      },
      {
       "terme": "SCOP, SEER",
       "def": "Coefficients de performance saisonniers en chauffage et en refroidissement."
      }
     ]
    },
    {
     "id": "bmfer-reseaux-hydrauliques",
     "titre": "Réseaux hydrauliques des installations de froid et de pompes à chaleur",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Identifier les composants d'un réseau hydraulique et leur fonction.",
      "Calculer un débit d'eau à partir d'une puissance et d'un écart de température.",
      "Estimer les pertes de charge d'un réseau et déterminer le point de fonctionnement d'une pompe.",
      "Expliquer le principe de l'équilibrage et de la régulation par vannes 2 voies et 3 voies.",
      "Choisir et contrôler une protection antigel par eau glycolée."
     ],
     "sections": [
      {
       "titre": "Pourquoi un réseau hydraulique ?",
       "contenu": "\n<p>Dans beaucoup d'installations, le fluide frigorigène ne va pas jusqu'aux locaux ou aux équipements à refroidir ou à chauffer. Un <strong>fluide caloporteur</strong>, de l'eau ou de l'eau glycolée, transporte l'énergie entre la machine et les émetteurs. C'est le cas :</p>\n<ul>\n<li>des <strong>groupes de production d'eau glacée</strong> qui alimentent des ventilo-convecteurs ou des centrales de traitement d'air ;</li>\n<li>des <strong>pompes à chaleur air-eau ou eau-eau</strong> qui alimentent des radiateurs, un plancher chauffant ou un ballon d'eau chaude sanitaire ;</li>\n<li>des installations de froid commercial à <strong>boucle secondaire</strong> (eau glycolée distribuée aux meubles) qui limitent la charge en fluide frigorigène ;</li>\n<li>des condenseurs à eau reliés à un aéroréfrigérant.</li>\n</ul>\n<p>L'intérêt est double : la charge en fluide frigorigène reste confinée dans la machine, souvent en extérieur ou en local technique, et l'eau transporte beaucoup d'énergie dans des tuyauteries de petite section grâce à sa capacité thermique élevée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour l'eau, une relation pratique relie puissance, débit et écart de température : Φ (kW) = q<sub>v</sub> (m<sup>3</sup>/h) × 1,16 × Δθ (K). Le coefficient 1,16 kWh/(m<sup>3</sup>·K) vient de ρ × c ÷ 3 600 = 1 000 × 4,18 ÷ 3 600.</div>"
      },
      {
       "titre": "Les composants d'un circuit fermé",
       "contenu": "\n<table>\n<thead><tr><th>Composant</th><th>Fonction</th></tr></thead>\n<tbody>\n<tr><td>Circulateur ou pompe</td><td>Fait circuler l'eau en compensant les pertes de charge du réseau</td></tr>\n<tr><td>Vase d'expansion</td><td>Absorbe la dilatation de l'eau et maintient une pression minimale dans le réseau</td></tr>\n<tr><td>Soupape de sécurité</td><td>Évacue l'eau si la pression dépasse son tarage (par exemple 3 bar sur un petit circuit de chauffage)</td></tr>\n<tr><td>Manomètre, thermomètres</td><td>Contrôle de la pression de remplissage et des températures départ et retour</td></tr>\n<tr><td>Purgeurs d'air</td><td>Évacuent l'air aux points hauts ; l'air bloque la circulation et fait du bruit</td></tr>\n<tr><td>Filtre, pot à boues, séparateur magnétique</td><td>Retiennent particules et boues qui encrassent les échangeurs à plaques</td></tr>\n<tr><td>Vannes d'isolement</td><td>Permettent d'intervenir sur un appareil sans vidanger le réseau</td></tr>\n<tr><td>Vannes d'équilibrage</td><td>Règlent le débit de chaque circuit à sa valeur de calcul</td></tr>\n<tr><td>Vannes de régulation 2 voies ou 3 voies</td><td>Adaptent la puissance délivrée à chaque émetteur</td></tr>\n<tr><td>Ballon tampon</td><td>Augmente le volume d'eau pour limiter les courts cycles de la machine et assurer les dégivrages</td></tr>\n<tr><td>Contrôleur de débit</td><td>Interdit la marche de la machine sans circulation d'eau, pour éviter le gel de l'évaporateur</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un échangeur à plaques d'un groupe d'eau glacée peut geler et éclater en quelques minutes si l'eau ne circule plus alors que le compresseur fonctionne. Le contrôleur de débit et la sécurité antigel ne doivent jamais être shuntés, et les filtres doivent être nettoyés régulièrement, car leur colmatage réduit le débit.</div>"
      },
      {
       "titre": "Débit et puissance",
       "contenu": "\n<p>Le débit d'eau se déduit de la puissance à transporter et de l'écart de température choisi entre départ et retour, appelé <strong>régime de température</strong>. Les régimes courants sont 7/12 °C pour l'eau glacée de climatisation, 35/30 °C ou 45/40 °C pour une PAC sur plancher ou radiateurs basse température.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un groupe d'eau glacée de 50 kW fonctionne au régime 7/12 °C. 1. Écart : Δθ = 12 − 7 = 5 K. 2. Débit : q<sub>v</sub> = Φ ÷ (1,16 × Δθ) = 50 ÷ (1,16 × 5) ≈ 8,6 m<sup>3</sup>/h. 3. Vérification inverse sur site : on mesure départ 7,5 °C, retour 11,0 °C et un débit de 8,6 m<sup>3</sup>/h ; puissance réellement transportée : 8,6 × 1,16 × 3,5 ≈ 35 kW, soit environ 70 % de la puissance nominale, ce qui est normal en mi-saison.</div>\n<p>Si le débit est trop faible, l'écart de température augmente, la machine fonctionne dans de mauvaises conditions et les sécurités peuvent déclencher. S'il est trop fort, l'écart diminue, la pompe consomme davantage et certaines machines perdent en précision de régulation. Les constructeurs indiquent un débit minimal et un débit maximal pour leurs échangeurs.</p>"
      },
      {
       "titre": "Pertes de charge et point de fonctionnement",
       "contenu": "\n<p>L'eau perd de la pression en circulant à cause des frottements : ce sont les <strong>pertes de charge</strong>, en pascals (Pa), en kilopascals (kPa) ou en mètres de colonne d'eau (mCE ; 1 mCE ≈ 9,81 kPa). On distingue :</p>\n<ul>\n<li>les <strong>pertes de charge linéiques</strong>, proportionnelles à la longueur de tuyauterie, données en Pa/m par des abaques selon le diamètre et le débit ; on vise souvent 100 à 200 Pa/m en dimensionnement ;</li>\n<li>les <strong>pertes de charge singulières</strong>, dues aux coudes, tés, vannes et filtres, qu'on estime par des coefficients ou par un pourcentage forfaitaire des pertes linéiques ;</li>\n<li>les pertes de charge des <strong>appareils</strong> (échangeur de la machine, batteries, vannes de régulation), données par les fiches techniques.</li>\n</ul>\n<p>La pompe doit fournir une <strong>hauteur manométrique</strong> (HMT) égale à la somme des pertes de charge du circuit le plus défavorisé, au débit voulu. Sur un circuit fermé, la hauteur du bâtiment n'intervient pas : l'eau qui monte redescend.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour le groupe précédent : 80 m de tube aller et retour à 150 Pa/m = 12 kPa ; pertes singulières estimées à 30 % = 3,6 kPa ; évaporateur du groupe 30 kPa (fiche technique) ; vanne de régulation et batterie de l'émetteur le plus éloigné 15 kPa. Total ≈ 61 kPa, soit environ 6,2 mCE. On cherche sur les courbes du fabricant une pompe qui fournit 6,2 mCE à 8,6 m<sup>3</sup>/h, de préférence au voisinage de son meilleur rendement.</div>\n<p>Le <strong>point de fonctionnement</strong> est l'intersection de la courbe de la pompe (hauteur en fonction du débit, décroissante) et de la courbe du réseau (pertes de charge en fonction du débit, croissante, à peu près proportionnelle au carré du débit). Un filtre colmaté ou une vanne fermée raidit la courbe du réseau : le point de fonctionnement glisse vers un débit plus faible. Les circulateurs électroniques à vitesse variable peuvent maintenir une pression constante ou proportionnelle quand les vannes des émetteurs se ferment.</p>"
      },
      {
       "titre": "Équilibrage et régulation hydraulique",
       "contenu": "\n<p>Dans un réseau à plusieurs émetteurs, l'eau prend le chemin le plus facile : les émetteurs proches de la pompe reçoivent trop d'eau, les plus éloignés pas assez. L'<strong>équilibrage</strong> consiste à régler des vannes sur chaque circuit pour que chacun reçoive son débit de calcul. On utilise des vannes d'équilibrage à prises de pression, dont on mesure la pression différentielle avec un appareil dédié qui en déduit le débit, ou des vannes de régulation indépendantes de la pression qui limitent automatiquement le débit.</p>\n<p>Pour adapter la puissance d'un émetteur, on agit sur l'eau qu'il reçoit :</p>\n<ul>\n<li>la <strong>vanne 2 voies</strong> réduit le débit traversant l'émetteur ; le débit total du réseau varie, ce qui suppose une pompe à vitesse variable ou une soupape différentielle ;</li>\n<li>la <strong>vanne 3 voies</strong> mélangeuse ou répartitrice dévie une partie de l'eau dans un by-pass ; le débit total reste à peu près constant.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une plainte « bureau du fond trop chaud l'été » sur une installation à ventilo-convecteurs vient souvent d'un réseau jamais équilibré, et non d'un manque de puissance de la machine. Le technicien mesure les températures de départ et de retour de chaque branche avant de conclure.</div>"
      },
      {
       "titre": "Eau glycolée, remplissage et qualité de l'eau",
       "contenu": "\n<p>Lorsque le circuit peut être exposé au gel (PAC monobloc extérieure, aéroréfrigérant, boucle secondaire de froid négatif), on ajoute à l'eau un <strong>antigel</strong>, généralement du monopropylène glycol (non toxique, utilisé en agroalimentaire) ou du monoéthylène glycol (plus performant, mais toxique). La concentration se choisit selon la température minimale à supporter, à l'aide des tables du fabricant.</p>\n<p>L'eau glycolée a une capacité thermique plus faible et une viscosité plus élevée que l'eau : pour une même puissance, il faut un débit un peu plus grand, et les pertes de charge augmentent. Le coefficient 1,16 ne s'applique donc plus exactement : on utilise les caractéristiques données par le fabricant du glycol.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler la protection antigel d'un circuit. 1. Prélever un échantillon d'eau à une vanne de vidange après circulation. 2. Mesurer la concentration ou le point de congélation au réfractomètre, avec l'échelle correspondant au type de glycol. 3. Comparer à la température minimale exigée (par exemple −15 °C). 4. Si la protection est insuffisante, calculer l'appoint de glycol pur à partir des tables du fabricant et du volume du circuit. 5. Faire circuler puis remesurer.</div>\n<p>Le remplissage se fait à une pression adaptée à la hauteur de l'installation et au gonflage du vase d'expansion, en purgeant soigneusement l'air. La qualité de l'eau (dureté, pH, présence de boues) conditionne la durée de vie des échangeurs à plaques : un désembouage et un traitement adapté sont souvent nécessaires lors du raccordement d'une PAC sur un ancien réseau de chauffage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne rejette jamais l'eau glycolée à l'égout ou dans le milieu naturel lors d'une vidange. Elle est récupérée en bidons et confiée à une filière de traitement des déchets, comme les autres liquides souillés du chantier.</div>"
      }
     ],
     "points_cles": [
      "Un réseau hydraulique transporte l'énergie par eau ou eau glycolée et limite la charge en fluide frigorigène.",
      "Pour l'eau : Φ (kW) = qv (m3/h) × 1,16 × Δθ (K).",
      "Vase d'expansion, soupape, purgeurs, filtres, vannes d'équilibrage et contrôleur de débit sont indispensables.",
      "La pompe fournit une hauteur manométrique égale aux pertes de charge du circuit le plus défavorisé.",
      "Le point de fonctionnement est l'intersection des courbes de la pompe et du réseau.",
      "L'équilibrage donne à chaque circuit son débit de calcul.",
      "Vanne 2 voies : débit variable ; vanne 3 voies : débit total constant.",
      "L'eau glycolée protège du gel mais réduit la capacité thermique et augmente les pertes de charge ; elle ne se rejette jamais à l'égout."
     ],
     "lexique": [
      {
       "terme": "Fluide caloporteur",
       "def": "Fluide qui transporte la chaleur ou le froid entre une machine et des émetteurs."
      },
      {
       "terme": "Régime de température",
       "def": "Couple de températures de départ et de retour d'un réseau, par exemple 7/12 °C."
      },
      {
       "terme": "Vase d'expansion",
       "def": "Réservoir à membrane qui absorbe la dilatation de l'eau d'un circuit fermé."
      },
      {
       "terme": "Perte de charge",
       "def": "Perte de pression d'un fluide due aux frottements dans le réseau."
      },
      {
       "terme": "Hauteur manométrique",
       "def": "Énergie de pression fournie par une pompe, exprimée en mètres de colonne d'eau ou en kPa."
      },
      {
       "terme": "Point de fonctionnement",
       "def": "Débit et hauteur réels, à l'intersection des courbes de la pompe et du réseau."
      },
      {
       "terme": "Équilibrage",
       "def": "Réglage des débits de chaque circuit à leur valeur de calcul."
      },
      {
       "terme": "Vanne 3 voies",
       "def": "Vanne qui mélange ou répartit l'eau entre un émetteur et un by-pass."
      },
      {
       "terme": "Ballon tampon",
       "def": "Réservoir d'eau qui augmente l'inertie du circuit."
      },
      {
       "terme": "Réfractomètre",
       "def": "Instrument optique qui mesure la concentration d'un antigel."
      }
     ]
    },
    {
     "id": "bmfer-air-humide-aeraulique",
     "titre": "Air humide et réseaux aérauliques",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Définir les grandeurs de l'air humide et les lire sur le diagramme de l'air humide.",
      "Représenter les transformations de l'air dans une installation de climatisation.",
      "Calculer la puissance d'une batterie froide et la quantité d'eau condensée.",
      "Relier débit, vitesse et section dans un réseau de gaines.",
      "Identifier les composants d'un réseau aéraulique et les mesures associées."
     ],
     "sections": [
      {
       "titre": "Les grandeurs de l'air humide",
       "contenu": "\n<p>L'air atmosphérique est un mélange d'<strong>air sec</strong> et de <strong>vapeur d'eau</strong>. La quantité de vapeur qu'il peut contenir augmente fortement avec la température. En climatisation, on ne s'intéresse pas seulement à la température de l'air : son humidité conditionne le confort, la condensation sur les parois et le fonctionnement des batteries froides.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Symbole et unité</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Température sèche</td><td>θ en °C</td><td>Température mesurée par un thermomètre ordinaire</td></tr>\n<tr><td>Humidité relative</td><td>HR ou φ en %</td><td>Rapport entre la quantité de vapeur présente et la quantité maximale possible à cette température</td></tr>\n<tr><td>Teneur en eau (humidité absolue)</td><td>x en g d'eau par kg d'air sec</td><td>Masse de vapeur contenue dans 1 kg d'air sec</td></tr>\n<tr><td>Enthalpie massique</td><td>h en kJ par kg d'air sec</td><td>Énergie contenue dans l'air, chaleur sensible et latente</td></tr>\n<tr><td>Température de rosée</td><td>θ<sub>r</sub> en °C</td><td>Température à laquelle la vapeur commence à se condenser si on refroidit l'air sans changer sa teneur en eau</td></tr>\n<tr><td>Température humide</td><td>θ<sub>h</sub> en °C</td><td>Température d'un thermomètre dont le bulbe est entouré d'un tissu mouillé et ventilé</td></tr>\n</tbody>\n</table>\n<p>On distingue la <strong>chaleur sensible</strong>, qui fait varier la température, et la <strong>chaleur latente</strong>, liée à la condensation ou à l'évaporation de la vapeur d'eau, sans variation de température. Une batterie froide qui déshumidifie traite les deux.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'humidité relative dépend de la température. Un air à 28 °C et 50 % d'humidité relative refroidi à 20 °C sans perte d'eau atteint environ 80 % d'humidité relative ; refroidi en dessous d'environ 16,5 °C, son point de rosée, il commence à condenser.</div>"
      },
      {
       "titre": "Le diagramme de l'air humide",
       "contenu": "\n<p>Le <strong>diagramme de l'air humide</strong> (ou diagramme psychrométrique) rassemble ces grandeurs pour une pression atmosphérique donnée. Dans sa forme la plus courante en France :</p>\n<ul>\n<li>la température sèche se lit en abscisse, sur des droites presque verticales ;</li>\n<li>la teneur en eau se lit en ordonnée, à droite, sur des droites horizontales ;</li>\n<li>les courbes d'humidité relative partent du bas à gauche ; la courbe 100 % est la <strong>courbe de saturation</strong>, limite supérieure du diagramme ;</li>\n<li>les droites d'enthalpie sont obliques, avec une échelle graduée le long du diagramme.</li>\n</ul>\n<p>Deux grandeurs suffisent à placer un point ; toutes les autres se lisent ensuite. Le point de rosée se trouve en se déplaçant horizontalement (teneur en eau constante) vers la gauche jusqu'à la courbe de saturation.</p>\n<table>\n<thead><tr><th>Transformation</th><th>Tracé sur le diagramme</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Chauffage</td><td>Horizontale vers la droite (x constant)</td><td>Batterie chaude, PAC en mode chauffage</td></tr>\n<tr><td>Refroidissement sans condensation</td><td>Horizontale vers la gauche, au-dessus du point de rosée</td><td>Batterie froide à température de surface supérieure au point de rosée</td></tr>\n<tr><td>Refroidissement et déshumidification</td><td>Oblique vers le bas et la gauche</td><td>Batterie froide de climatisation</td></tr>\n<tr><td>Humidification</td><td>Vers le haut (par vapeur) ou le long d'une droite d'enthalpie (par pulvérisation d'eau)</td><td>Humidificateur de centrale de traitement d'air</td></tr>\n<tr><td>Mélange de deux airs</td><td>Point situé sur le segment joignant les deux airs, au prorata des débits</td><td>Mélange d'air neuf et d'air repris</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "La batterie froide de climatisation",
       "contenu": "\n<p>Dans un climatiseur ou une centrale de traitement d'air, l'air traverse une <strong>batterie froide</strong> (évaporateur à détente directe ou batterie à eau glacée) dont la surface est plus froide que le point de rosée de l'air. L'air se refroidit et une partie de sa vapeur se condense : ce sont les <strong>condensats</strong>, recueillis dans un bac et évacués.</p>\n<p>La puissance de la batterie se calcule par la différence d'enthalpie de l'air entre l'entrée et la sortie : Φ = q<sub>m,as</sub> × (h<sub>entrée</sub> − h<sub>sortie</sub>), avec q<sub>m,as</sub> le débit massique d'air sec. Elle comprend une part sensible et une part latente. Le débit d'eau condensée vaut q<sub>m,as</sub> × (x<sub>entrée</sub> − x<sub>sortie</sub>).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une unité traite 2 000 m<sup>3</sup>/h d'air entrant à 28 °C et 50 % HR, sortant à 14 °C et 95 % HR. Lectures sur le diagramme (arrondies) : entrée h ≈ 58,4 kJ/kg as, x ≈ 11,8 g/kg as ; sortie h ≈ 38,0 kJ/kg as, x ≈ 9,5 g/kg as. 1. Débit massique d'air sec, avec une masse volumique d'environ 1,18 kg/m<sup>3</sup> : 2 000 ÷ 3 600 × 1,18 ≈ 0,66 kg/s. 2. Puissance : 0,66 × (58,4 − 38,0) ≈ 13,5 kW. 3. Eau condensée : 0,66 × (11,8 − 9,5) ≈ 1,5 g/s, soit environ 5,5 kg/h, ou 5,5 litres par heure à évacuer.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'évacuation des condensats est une source fréquente de désordres : pente insuffisante, siphon absent sur une batterie en dépression, pompe de relevage en panne. Le résultat est un dégât des eaux dans un faux plafond. Le contrôle de l'écoulement fait partie de chaque mise en service et de chaque entretien.</div>"
      },
      {
       "titre": "Débits, vitesses et pressions dans les gaines",
       "contenu": "\n<p>Un <strong>réseau aéraulique</strong> transporte l'air entre les centrales et les locaux. Le débit d'air, la section et la vitesse sont liés par : <strong>q<sub>v</sub> = v × S</strong>, avec q<sub>v</sub> en m<sup>3</sup>/s, v en m/s et S en m<sup>2</sup>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 2 000 m<sup>3</sup>/h circulent dans une gaine circulaire de 315 mm de diamètre. 1. Débit : 2 000 ÷ 3 600 ≈ 0,556 m<sup>3</sup>/s. 2. Section : π × 0,315<sup>2</sup> ÷ 4 ≈ 0,078 m<sup>2</sup>. 3. Vitesse : 0,556 ÷ 0,078 ≈ 7,1 m/s. Cette vitesse convient pour une gaine principale ; près des locaux occupés, on la réduit pour limiter le bruit.</div>\n<p>Dans une gaine, l'air possède :</p>\n<ul>\n<li>une <strong>pression statique</strong>, qui s'exerce sur les parois ;</li>\n<li>une <strong>pression dynamique</strong>, liée à sa vitesse : p<sub>d</sub> = ρ × v<sup>2</sup> ÷ 2 ;</li>\n<li>une <strong>pression totale</strong>, somme des deux.</li>\n</ul>\n<p>Le ventilateur fournit l'augmentation de pression totale nécessaire pour vaincre les pertes de charge des gaines, des coudes, des filtres, des batteries et des bouches. Les ventilateurs <strong>hélicoïdes</strong> déplacent de grands débits sous faible pression (condenseurs, évaporateurs de chambre froide) ; les ventilateurs <strong>centrifuges</strong> fournissent des pressions plus élevées (centrales de traitement d'air, unités gainables).</p>"
      },
      {
       "titre": "Composants et mesures d'un réseau aéraulique",
       "contenu": "\n<p>Un réseau de climatisation ou de ventilation comprend, de l'extérieur vers le local :</p>\n<ul>\n<li>une prise d'air neuf protégée (grille, pare-pluie) ;</li>\n<li>des <strong>filtres</strong>, classés selon leur efficacité sur les particules fines ; leur colmatage se surveille par la perte de charge mesurée à leurs bornes ;</li>\n<li>la centrale ou l'unité avec ses batteries et son ventilateur ;</li>\n<li>des gaines rectangulaires ou circulaires, isolées si elles transportent de l'air froid, pour éviter la condensation extérieure ;</li>\n<li>des registres de réglage et des clapets coupe-feu à la traversée des parois qui l'exigent ;</li>\n<li>des <strong>bouches de soufflage</strong> (diffuseurs) et des <strong>grilles de reprise</strong>.</li>\n</ul>\n<p>La diffusion de l'air conditionne le confort : un soufflage mal orienté ou trop rapide crée des courants d'air gênants. Les fabricants de diffuseurs indiquent la <strong>portée</strong> du jet et le niveau sonore en fonction du débit.</p>\n<p>L'air neuf est indispensable à l'hygiène des locaux. Pour les locaux de travail, le Code du travail fixe des débits minimaux d'air neuf par occupant, par exemple 25 m<sup>3</sup>/h par personne dans un bureau ; d'autres textes s'appliquent aux logements et aux établissements recevant du public.</p>\n<table>\n<thead><tr><th>Mesure</th><th>Instrument</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Vitesse d'air</td><td>Anémomètre à hélice ou à fil chaud</td><td>Vitesse en gaine ou au droit d'une bouche</td></tr>\n<tr><td>Débit à une bouche</td><td>Cône ou balomètre</td><td>Réglage des débits de chaque bouche</td></tr>\n<tr><td>Pressions</td><td>Manomètre différentiel, tube de Pitot</td><td>Perte de charge des filtres, pression en gaine</td></tr>\n<tr><td>Température et humidité</td><td>Thermo-hygromètre</td><td>Contrôle des conditions de soufflage et d'ambiance</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un entretien de centrale de traitement d'air, le technicien relève la perte de charge des filtres, la compare à la valeur de remplacement indiquée par le fabricant, contrôle la propreté de la batterie et du bac à condensats, la tension des courroies éventuelles et le bon écoulement des condensats. Il note les températures et humidités d'entrée et de sortie, qui permettent de suivre la puissance réellement délivrée.</div>"
      }
     ],
     "points_cles": [
      "L'air humide se caractérise par sa température sèche, son humidité relative, sa teneur en eau, son enthalpie et son point de rosée.",
      "Deux grandeurs suffisent à placer un point sur le diagramme de l'air humide.",
      "Chauffage et refroidissement sensible sont horizontaux ; la déshumidification fait baisser la teneur en eau.",
      "Puissance d'une batterie : Φ = qm,as × Δh ; eau condensée = qm,as × Δx.",
      "Les condensats doivent être évacués par une pente et un siphon corrects.",
      "Dans une gaine : qv = v × S ; pression totale = pression statique + pression dynamique.",
      "Les ventilateurs hélicoïdes donnent du débit, les centrifuges de la pression.",
      "Filtres, débits d'air neuf et diffusion conditionnent l'hygiène et le confort."
     ],
     "lexique": [
      {
       "terme": "Humidité relative",
       "def": "Rapport, en %, entre la vapeur d'eau contenue dans l'air et le maximum possible à cette température."
      },
      {
       "terme": "Teneur en eau",
       "def": "Masse de vapeur d'eau contenue dans un kilogramme d'air sec."
      },
      {
       "terme": "Point de rosée",
       "def": "Température à partir de laquelle la vapeur d'eau de l'air se condense."
      },
      {
       "terme": "Chaleur latente",
       "def": "Chaleur échangée lors d'un changement d'état, sans variation de température."
      },
      {
       "terme": "Diagramme de l'air humide",
       "def": "Abaque reliant température, humidité, teneur en eau et enthalpie de l'air."
      },
      {
       "terme": "Condensats",
       "def": "Eau issue de la condensation de la vapeur de l'air sur une batterie froide."
      },
      {
       "terme": "Pression dynamique",
       "def": "Pression liée à la vitesse de l'air, égale à ρ × v2 ÷ 2."
      },
      {
       "terme": "Ventilateur centrifuge",
       "def": "Ventilateur à roue qui rejette l'air perpendiculairement à son axe et fournit une pression élevée."
      },
      {
       "terme": "Diffuseur",
       "def": "Bouche de soufflage qui répartit l'air dans un local."
      },
      {
       "terme": "Air neuf",
       "def": "Air extérieur introduit dans un local pour en assurer l'hygiène."
      }
     ]
    },
    {
     "id": "bmfer-climatisation-pac",
     "titre": "Systèmes de climatisation et pompes à chaleur",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Classer les systèmes de climatisation selon leur architecture et leur fluide de transport.",
      "Distinguer les différentes familles de pompes à chaleur et leurs sources d'énergie.",
      "Interpréter les indicateurs de performance EER, COP, SEER et SCOP.",
      "Expliquer l'influence des températures de source et d'émission sur le COP.",
      "Déterminer un point de bivalence et justifier un appoint."
     ],
     "sections": [
      {
       "titre": "Les grandes familles de systèmes",
       "contenu": "\n<p>Le cours de seconde a présenté le principe de la pompe à chaleur. Une même machine thermodynamique peut produire du froid, de la chaleur, ou les deux. On classe les systèmes selon le fluide qui transporte l'énergie jusqu'au local.</p>\n<table>\n<thead><tr><th>Système</th><th>Transport de l'énergie</th><th>Description</th><th>Applications</th></tr></thead>\n<tbody>\n<tr><td>Monobloc</td><td>Air</td><td>Tout le circuit dans un seul appareil (climatiseur mobile, de fenêtre, en allège)</td><td>Petits locaux</td></tr>\n<tr><td>Split, multisplit</td><td>Fluide frigorigène</td><td>Unité extérieure (compresseur, condenseur) reliée par des liaisons frigorifiques à une ou plusieurs unités intérieures (murales, cassettes, consoles, gainables)</td><td>Logements, commerces, petits bureaux</td></tr>\n<tr><td>DRV (débit de réfrigérant variable)</td><td>Fluide frigorigène</td><td>Une unité extérieure inverter alimente de nombreuses unités intérieures, chacune avec son détendeur électronique ; en version à récupération, certaines unités chauffent pendant que d'autres refroidissent</td><td>Bureaux, hôtels</td></tr>\n<tr><td>Rooftop</td><td>Air</td><td>Machine monobloc en toiture qui traite et souffle l'air par des gaines</td><td>Grandes surfaces commerciales, salles</td></tr>\n<tr><td>Groupe d'eau glacée</td><td>Eau</td><td>Production d'eau froide distribuée à des ventilo-convecteurs, poutres froides ou centrales de traitement d'air</td><td>Grands bâtiments tertiaires, hôpitaux, process</td></tr>\n</tbody>\n</table>\n<p>Les systèmes à détente directe (split, DRV) sont compacts et performants, mais ils font circuler du fluide frigorigène dans le bâtiment : la charge totale et les règles de sécurité liées au volume des locaux doivent être vérifiées, en particulier avec les fluides A2L. Les systèmes à eau limitent le fluide frigorigène à la machine, au prix d'un réseau hydraulique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le choix d'un système dépend de la taille du bâtiment, du nombre de zones à traiter, des besoins simultanés de chaud et de froid, de la place disponible, des contraintes acoustiques et de la réglementation des fluides.</div>"
      },
      {
       "titre": "Les pompes à chaleur",
       "contenu": "\n<p>Une <strong>pompe à chaleur</strong> (PAC) prélève de la chaleur dans une <strong>source froide</strong> gratuite (air extérieur, sol, eau de nappe) et la restitue à une température plus élevée dans le bâtiment. La part prélevée dans l'environnement est reconnue comme une énergie renouvelable. On nomme une PAC par sa source puis par son fluide d'émission.</p>\n<table>\n<thead><tr><th>Type</th><th>Source</th><th>Émission</th><th>Remarques</th></tr></thead>\n<tbody>\n<tr><td>Air-air</td><td>Air extérieur</td><td>Air intérieur (unités murales, gainables)</td><td>Souvent réversible, c'est un climatiseur réversible</td></tr>\n<tr><td>Air-eau</td><td>Air extérieur</td><td>Eau d'un plancher chauffant, de radiateurs, d'un ballon</td><td>Monobloc (circuit frigorifique complet à l'extérieur) ou split</td></tr>\n<tr><td>Eau-eau, sol-eau</td><td>Nappe phréatique, capteurs enterrés horizontaux ou sondes verticales</td><td>Eau</td><td>Source à température stable, très bon COP ; travaux de forage ou de terrassement</td></tr>\n<tr><td>Chauffe-eau thermodynamique</td><td>Air ambiant ou extérieur</td><td>Eau chaude sanitaire</td><td>Petite PAC intégrée à un ballon</td></tr>\n</tbody>\n</table>\n<p>Une PAC <strong>réversible</strong> utilise une vanne 4 voies pour inverser le cycle : l'échangeur intérieur devient évaporateur en été et condenseur en hiver. En mode chauffage, l'échangeur extérieur d'une PAC air-eau ou air-air peut givrer lorsque l'air extérieur est froid et humide (typiquement entre −5 et +5 °C) : la machine dégivre par inversion de cycle, ce qui consomme de l'énergie et prélève brièvement de la chaleur au bâtiment.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur une PAC monobloc air-eau, le circuit d'eau passe à l'extérieur. En cas de coupure de courant prolongée en hiver, il peut geler si aucune protection n'est prévue (eau glycolée, vannes de purge antigel, maintien de la circulation). Le choix de la protection fait partie de l'installation.</div>"
      },
      {
       "titre": "Les indicateurs de performance",
       "contenu": "\n<p>Plusieurs indicateurs, définis par des normes d'essai européennes, permettent de comparer les machines :</p>\n<ul>\n<li><strong>EER</strong> (coefficient d'efficacité frigorifique) : puissance frigorifique ÷ puissance électrique absorbée, dans des conditions d'essai données ;</li>\n<li><strong>COP</strong> (coefficient de performance en chauffage) : puissance calorifique ÷ puissance électrique absorbée, dans des conditions données, par exemple air extérieur à 7 °C et eau à 35 °C (notation A7/W35) ;</li>\n<li><strong>SEER</strong> et <strong>SCOP</strong> : performances saisonnières, calculées sur une année type en tenant compte de la charge partielle et des différentes températures extérieures ; ils reflètent mieux la consommation réelle ;</li>\n<li><strong>ETAS</strong> (η<sub>s</sub>) : efficacité énergétique saisonnière exprimée en énergie primaire, utilisée pour l'étiquette énergie et les exigences d'écoconception.</li>\n</ul>\n<p>Les appareils de chauffage et de climatisation de faible puissance portent une <strong>étiquette énergie</strong> européenne, et leurs performances minimales sont imposées par les règlements d'écoconception. Les fiches techniques indiquent aussi les performances à différentes températures : c'est celles-là qu'il faut utiliser pour un dimensionnement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer deux mesures. Une PAC fournit 8 kW en absorbant 1,9 kW à A7/W35 : COP = 8 ÷ 1,9 ≈ 4,2. À A−7/W55, elle fournit 6 kW en absorbant 2,6 kW : COP = 6 ÷ 2,6 ≈ 2,3. Une même machine peut donc avoir un COP presque divisé par deux selon les conditions : une PAC se compare toujours à conditions identiques.</div>"
      },
      {
       "titre": "Pourquoi les températures font tout",
       "contenu": "\n<p>Le COP d'une machine thermodynamique est limité par un maximum théorique, le <strong>COP de Carnot</strong>, qui ne dépend que des températures absolues de condensation T<sub>k</sub> et d'évaporation T<sub>0</sub>, en kelvins (T = θ + 273) :</p>\n<p>COP<sub>Carnot, chaud</sub> = T<sub>k</sub> ÷ (T<sub>k</sub> − T<sub>0</sub>).</p>\n<p>Plus l'écart entre la source et l'émission est faible, plus le COP est élevé. Les machines réelles atteignent typiquement 40 à 60 % du COP de Carnot.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> air extérieur à 7 °C, évaporation vers 0 °C (T<sub>0</sub> = 273 K). Cas 1 : plancher chauffant, eau à 35 °C, condensation vers 38 °C (T<sub>k</sub> = 311 K) : COP Carnot = 311 ÷ 38 ≈ 8,2 ; avec 50 % : COP réel ≈ 4,1. Cas 2 : radiateurs anciens, eau à 55 °C, condensation vers 58 °C (T<sub>k</sub> = 331 K) : COP Carnot = 331 ÷ 58 ≈ 5,7 ; COP réel ≈ 2,9. Le seul passage d'émetteurs « haute température » à des émetteurs « basse température » améliore le COP d'environ 40 %.</div>\n<p>Ce raisonnement explique les bonnes pratiques : choisir des émetteurs basse température, régler une <strong>loi d'eau</strong> (température de départ qui baisse quand la température extérieure monte), préférer une source stable (sol, eau) quand c'est possible, maintenir les échangeurs propres.</p>"
      },
      {
       "titre": "Dimensionner une PAC : le point de bivalence",
       "contenu": "\n<p>Les <strong>déperditions</strong> d'un bâtiment, c'est-à-dire la puissance de chauffage nécessaire, augmentent quand la température extérieure baisse. Elles sont calculées pour la <strong>température extérieure de base</strong> du lieu, fixée par département et altitude (par exemple −7 °C dans une grande partie du nord de la France). À l'inverse, la puissance d'une PAC air-eau diminue quand l'air extérieur se refroidit.</p>\n<p>Si l'on trace sur un même graphique la droite des déperditions et la courbe de puissance de la PAC en fonction de la température extérieure, les deux se croisent au <strong>point de bivalence</strong>. Au-dessus de cette température, la PAC couvre seule les besoins ; en dessous, un <strong>appoint</strong> (résistance électrique, chaudière existante) complète.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> maison de déperditions 9 kW à −7 °C (base) et nulles vers 17 °C. La PAC fournit 8 kW à +2 °C et 6,2 kW à −7 °C (d'après la fiche technique, au régime d'eau retenu). Déperditions à +2 °C : 9 × (17 − 2) ÷ (17 + 7) ≈ 5,6 kW, couvertes par la PAC. À −7 °C : besoin 9 kW, PAC 6,2 kW, il manque 2,8 kW. Les deux courbes se croisent vers −2 °C : c'est le point de bivalence. On prévoit un appoint d'environ 3 kW. Comme les journées sous −2 °C sont peu nombreuses, la PAC couvre l'essentiel de l'énergie annuelle.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une PAC fortement surdimensionnée fonctionne en courts cycles à mi-saison, s'use plus vite et coûte plus cher. Une PAC sous-dimensionnée sollicite l'appoint électrique et déçoit le client par sa facture. Le dimensionnement s'appuie sur une étude thermique sérieuse, et non sur l'ancienne puissance de la chaudière, souvent largement surdimensionnée.</div>"
      }
     ],
     "points_cles": [
      "Monobloc, split, multisplit, DRV et rooftop transportent l'énergie par fluide frigorigène ou par air ; le groupe d'eau glacée par eau.",
      "Une PAC se nomme par sa source puis son émission : air-air, air-eau, eau-eau, sol-eau.",
      "La vanne 4 voies rend une PAC réversible et permet le dégivrage par inversion de cycle.",
      "EER et COP sont des performances instantanées ; SEER et SCOP des performances saisonnières.",
      "On compare deux PAC à des conditions identiques, par exemple A7/W35.",
      "COP de Carnot = Tk ÷ (Tk − T0), en kelvins : plus l'écart de température est faible, meilleur est le COP.",
      "Émetteurs basse température et loi d'eau améliorent nettement le COP.",
      "Le point de bivalence sépare la plage où la PAC suffit seule de celle où un appoint est nécessaire."
     ],
     "lexique": [
      {
       "terme": "Split",
       "def": "Système à unité extérieure et unité intérieure reliées par des liaisons frigorifiques."
      },
      {
       "terme": "DRV",
       "def": "Système à débit de réfrigérant variable alimentant de nombreuses unités intérieures."
      },
      {
       "terme": "Ventilo-convecteur",
       "def": "Émetteur à ventilateur et batterie alimentée en eau chaude ou glacée."
      },
      {
       "terme": "Source froide",
       "def": "Milieu dans lequel une pompe à chaleur prélève la chaleur (air, sol, eau)."
      },
      {
       "terme": "EER",
       "def": "Rapport entre puissance frigorifique et puissance électrique absorbée."
      },
      {
       "terme": "SCOP",
       "def": "Coefficient de performance saisonnier en chauffage."
      },
      {
       "terme": "COP de Carnot",
       "def": "COP maximal théorique d'une machine fonctionnant entre deux températures."
      },
      {
       "terme": "Loi d'eau",
       "def": "Réglage qui fait varier la température de départ d'eau selon la température extérieure."
      },
      {
       "terme": "Température extérieure de base",
       "def": "Température de référence d'un lieu pour le calcul des déperditions."
      },
      {
       "terme": "Point de bivalence",
       "def": "Température extérieure en dessous de laquelle la PAC a besoin d'un appoint."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Installer, mettre en service et maintenir",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmfer-raccordements-fluidiques",
     "titre": "Réaliser les liaisons et raccordements fluidiques",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Choisir des tubes et des raccords adaptés au fluide et à la pression de l'installation.",
      "Préparer un tracé de liaisons frigorifiques à partir d'un relevé sur site.",
      "Décrire les étapes d'un brasage fort sous balayage d'azote.",
      "Réaliser un dudgeon et un raccord serti dans les règles de l'art.",
      "Supporter et isoler correctement les tuyauteries."
     ],
     "sections": [
      {
       "titre": "Les tubes de cuivre frigorifique",
       "contenu": "\n<p>Les circuits frigorifiques de petite et moyenne puissance sont réalisés en <strong>tube de cuivre frigorifique</strong> : cuivre désoxydé, intérieur propre et sec, livré bouché aux deux extrémités. Il se présente sous deux formes :</p>\n<ul>\n<li>en <strong>couronnes</strong>, à l'état recuit (souple), pour les petits diamètres, faciles à cintrer à la main ou à la cintreuse ;</li>\n<li>en <strong>barres</strong>, à l'état écroui (dur), pour les diamètres plus importants et les tracés rectilignes.</li>\n</ul>\n<p>Les diamètres sont désignés en pouces dans la profession, avec leur équivalent en millimètres : 1/4 de pouce (6,35 mm), 3/8 (9,52 mm), 1/2 (12,7 mm), 5/8 (15,88 mm), 3/4 (19,05 mm), 7/8 (22,22 mm), 1 1/8 (28,58 mm). L'<strong>épaisseur</strong> doit être compatible avec la pression maximale du fluide : les fluides haute pression comme le R410A, le R32 ou surtout le CO<sub>2</sub> imposent des épaisseurs plus fortes, voire des tubes en alliage spécifique pour le CO<sub>2</sub>. La notice du constructeur et les tableaux des fabricants de tubes donnent l'épaisseur minimale pour chaque diamètre.</p>\n<p>Le diamètre de chaque conduite est choisi par le constructeur (liaisons d'un split) ou calculé par le bureau d'études pour obtenir :</p>\n<ul>\n<li>une vitesse suffisante pour entraîner l'huile dans l'aspiration et le refoulement, en particulier dans les remontées ;</li>\n<li>une perte de charge limitée, souvent exprimée en équivalent de température de saturation (de l'ordre de 1 K à l'aspiration) ;</li>\n<li>une ligne liquide sans vaporisation avant le détendeur.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les extrémités d'un tube doivent rester bouchées jusqu'au dernier moment. Un tube laissé ouvert sur un chantier se charge d'humidité, de poussière, voire d'insectes. Un tube de plomberie sanitaire, même de même diamètre, n'est pas un tube frigorifique : il n'est ni déshydraté ni garanti propre.</div>"
      },
      {
       "titre": "Relevé sur site et tracé des liaisons",
       "contenu": "\n<p>Avant de poser une installation, le technicien réalise un <strong>relevé</strong> : il mesure les distances, repère les obstacles (poutres, gaines, chemins de câbles), les traversées de murs et de planchers, les emplacements possibles des unités et l'évacuation des condensats. Il en tire un croquis coté, puis un <strong>dessin d'exécution</strong> (plan ou isométrie) qui servira à la commande du matériel et à la pose.</p>\n<p>Le tracé doit respecter :</p>\n<ul>\n<li>les <strong>longueurs et dénivelés maximaux</strong> admis par le constructeur entre unités, et la charge complémentaire à prévoir au-delà de la longueur préchargée ;</li>\n<li>les <strong>pentes</strong> de la conduite d'aspiration vers le compresseur et les <strong>siphons</strong> en pied de remontée, vus avec le retour d'huile ;</li>\n<li>le minimum de raccords, de coudes et de brasures (chaque raccord est un point de fuite potentiel) ;</li>\n<li>l'accessibilité des vannes, filtres et points de mesure ;</li>\n<li>la protection mécanique des tubes dans les zones de passage et la sécurité incendie aux traversées de parois.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir la liste de matériel des liaisons d'un split à partir du relevé. 1. Mesurer le cheminement réel de l'unité intérieure à l'unité extérieure, en suivant les murs et non en ligne droite : par exemple 9 m. 2. Vérifier que 9 m et le dénivelé de 3 m sont dans les limites du constructeur. 3. Relever les diamètres imposés par la notice : liquide 1/4, gaz 3/8 par exemple. 4. Ajouter une marge de coupe d'environ 10 % : commander 10 m de chaque diamètre, isolés. 5. Compter les accessoires : fourreau de traversée, goulotte, colliers, pompe de relevage des condensats si l'écoulement gravitaire est impossible. 6. Calculer la charge complémentaire si la longueur dépasse la longueur préchargée indiquée par la notice.</div>"
      },
      {
       "titre": "Le brasage fort sous azote",
       "contenu": "\n<p>Le <strong>brasage fort</strong> assemble deux pièces métalliques au moyen d'un métal d'apport qui fond à plus de 450 °C, sans faire fondre les pièces. Le métal d'apport est aspiré par capillarité dans le faible jeu entre le tube et l'emboîture. Deux familles de brasures sont courantes :</p>\n<table>\n<thead><tr><th>Brasure</th><th>Usage</th><th>Flux</th></tr></thead>\n<tbody>\n<tr><td>Cuivre-phosphore (avec ou sans argent)</td><td>Cuivre sur cuivre</td><td>Inutile : le phosphore joue le rôle de désoxydant</td></tr>\n<tr><td>Argent (fort pourcentage)</td><td>Cuivre sur laiton, sur acier, sur acier inoxydable</td><td>Nécessaire ; résidus à éliminer après brasage</td></tr>\n</tbody>\n</table>\n<p>À haute température, l'intérieur du tube s'oxyde au contact de l'air et forme une couche noire, la <strong>calamine</strong>, qui se détache ensuite en paillettes et bouche filtres, détendeurs et capillaires. Pour l'éviter, on brase sous <strong>balayage d'azote</strong> : un faible débit d'azote circule dans le tube pendant le chauffage et le refroidissement et chasse l'oxygène.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> braser une emboîture cuivre-cuivre. 1. Couper le tube au coupe-tube, perpendiculairement, et l'ébavurer sans laisser tomber de copeaux à l'intérieur. 2. Calibrer si nécessaire et emboîter, ou réaliser l'emboîture à l'évaseur. 3. Nettoyer les surfaces à assembler (toile abrasive non tissée). 4. Raccorder l'azote par un détendeur et un débitmètre, et régler un faible débit ; ouvrir une sortie pour l'évacuer. 5. Protéger les composants sensibles proches (vannes, voyant, détendeur) avec un linge humide ou une pâte de protection thermique. 6. Chauffer uniformément l'emboîture jusqu'à la couleur adaptée, puis apporter la brasure à l'opposé de la flamme pour qu'elle soit aspirée sur toute la circonférence. 7. Maintenir l'azote pendant le refroidissement. 8. Contrôler visuellement : congé de brasure régulier, sans manque.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le brasage est un travail par point chaud. On s'assure qu'aucun fluide frigorigène ne reste dans le circuit, on éloigne les matériaux combustibles, on dispose d'un extincteur et on respecte l'éventuel permis de feu. On ne brase jamais un circuit fermé sous pression d'azote : on balaie, on ne pressurise pas.</div>"
      },
      {
       "titre": "Dudgeons et raccords sertis",
       "contenu": "\n<p>Le <strong>dudgeon</strong> (raccord flare) est un raccord mécanique : l'extrémité du tube est évasée en cône à 45° et serrée par un écrou contre un embout conique. Il est utilisé sur les liaisons des climatiseurs split et sur certains organes démontables.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser un dudgeon. 1. Couper le tube bien perpendiculairement, ébavurer en tenant l'extrémité vers le bas. 2. Enfiler l'écrou sur le tube avant de dudgeonner. 3. Serrer le tube dans la matrice de la dudgeonnière avec le dépassement prescrit (dudgeonnière excentrique de qualité frigorifique). 4. Former le cône. 5. Contrôler : surface lisse et brillante, sans fissure, diamètre de cône conforme. 6. Déposer une goutte d'huile frigorifique compatible sur la face arrière du cône. 7. Visser à la main, puis serrer à la clé dynamométrique au couple indiqué par la notice pour ce diamètre. 8. Contrôler l'étanchéité après la mise en pression.</div>\n<p>Un dudgeon trop serré se fissure, un dudgeon pas assez serré fuit : la clé dynamométrique est indispensable. Lorsque l'unité intérieure est installée dans un local avec un fluide inflammable, la réglementation produit peut imposer des raccords permanents (brasés ou sertis) à l'intérieur du local, ou des dudgeons de conception particulière : on suit la notice.</p>\n<p>Les <strong>raccords à sertir frigorifiques</strong> sont des manchons munis de joints, écrasés sur le tube par une pince à sertir avec des mâchoires adaptées. Ils évitent le point chaud du brasage, ce qui est précieux dans un local occupé ou en présence de fluide inflammable. Seuls des raccords conçus et certifiés pour le froid et pour la pression du fluide peuvent être utilisés, avec l'outillage du même fabricant.</p>"
      },
      {
       "titre": "Supportage, isolation et finitions",
       "contenu": "\n<p>Une tuyauterie frigorifique doit être <strong>supportée</strong> à intervalles réguliers par des colliers adaptés, d'autant plus rapprochés que le tube est petit et souple. Les vibrations du compresseur ne doivent pas se transmettre au réseau : on utilise des boucles de dilatation, des flexibles antivibratoires ou des colliers garnis de caoutchouc. Un tube qui frotte ou qui vibre finit par se percer.</p>\n<p>L'<strong>isolation</strong> thermique est obligatoire sur la conduite d'aspiration, et sur les deux conduites des splits réversibles, pour :</p>\n<ul>\n<li>éviter que la vapeur aspirée ne se réchauffe, ce qui augmenterait la surchauffe et la température de refoulement ;</li>\n<li>empêcher la <strong>condensation</strong> de l'humidité de l'air sur le tube froid, qui ruisselle et dégrade les faux plafonds ;</li>\n<li>en mode chauffage d'une PAC, limiter les pertes de chaleur.</li>\n</ul>\n<p>On utilise des manchons en mousse élastomère à cellules fermées, d'épaisseur suffisante, dont les joints sont collés, sans aucune discontinuité aux colliers et aux raccords. En extérieur, l'isolant est protégé contre les ultraviolets par un revêtement ou une goulotte.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la qualité visible d'une installation (tubes alignés, cintrages réguliers, colliers à intervalles constants, isolation continue, étiquetage des conduites) est souvent le premier critère par lequel le client et le contrôleur jugent l'entreprise. Elle traduit aussi une installation plus durable et plus facile à entretenir.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> propreté, sécheresse et étanchéité sont les trois exigences de tout raccordement frigorifique. Elles se jouent à chaque coupe, chaque brasure et chaque serrage.</div>"
      }
     ],
     "points_cles": [
      "Le tube de cuivre frigorifique est propre, déshydraté et livré bouché ; son épaisseur dépend de la pression du fluide.",
      "Les diamètres sont désignés en pouces : 1/4, 3/8, 1/2, 5/8, 3/4, 7/8, 1 1/8.",
      "Le relevé sur site permet un tracé respectant longueurs, dénivelés, pentes et accessibilité.",
      "Cuivre sur cuivre : brasure cuivre-phosphore sans flux ; cuivre sur laiton ou acier : brasure argent avec flux.",
      "Le balayage d'azote pendant le brasage évite la calamine qui bouche filtres et détendeurs.",
      "Un dudgeon se réalise avec une dudgeonnière excentrique et se serre à la clé dynamométrique.",
      "Les raccords sertis frigorifiques évitent le point chaud mais doivent être certifiés pour le fluide et la pression.",
      "L'isolation de l'aspiration évite surchauffe excessive et condensation ; elle doit être continue."
     ],
     "lexique": [
      {
       "terme": "Tube recuit",
       "def": "Tube de cuivre souple, livré en couronne, facile à cintrer."
      },
      {
       "terme": "Tube écroui",
       "def": "Tube de cuivre dur, livré en barres droites."
      },
      {
       "terme": "Brasage fort",
       "def": "Assemblage par métal d'apport fondant au-dessus de 450 °C, sans fusion des pièces."
      },
      {
       "terme": "Calamine",
       "def": "Couche d'oxyde formée à l'intérieur du tube chauffé à l'air."
      },
      {
       "terme": "Balayage d'azote",
       "def": "Circulation d'un faible débit d'azote dans le tube pendant le brasage."
      },
      {
       "terme": "Dudgeon",
       "def": "Raccord mécanique par évasement conique du tube serré par un écrou."
      },
      {
       "terme": "Clé dynamométrique",
       "def": "Clé qui permet d'appliquer un couple de serrage précis."
      },
      {
       "terme": "Raccord à sertir",
       "def": "Raccord à joint écrasé sur le tube par une pince à sertir."
      },
      {
       "terme": "Relevé",
       "def": "Ensemble des mesures et observations faites sur site pour préparer une installation."
      },
      {
       "terme": "Mousse élastomère",
       "def": "Isolant souple à cellules fermées utilisé sur les tuyauteries froides."
      }
     ]
    },
    {
     "id": "bmfer-etancheite-vide-charge",
     "titre": "Essais d'étanchéité, tirage au vide et charge en fluide",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Réaliser un essai de pression et d'étanchéité à l'azote en sécurité.",
      "Interpréter une variation de pression en tenant compte de la température.",
      "Conduire un tirage au vide et interpréter un test de remontée de pression.",
      "Charger une installation en fluide par pesée en respectant l'état physique du fluide.",
      "Calculer une charge complémentaire et renseigner l'étiquetage de l'équipement."
     ],
     "sections": [
      {
       "titre": "Pourquoi ces trois étapes ?",
       "contenu": "\n<p>Entre la fin du raccordement et la mise en service, tout circuit neuf ou ouvert pour réparation passe par trois étapes indissociables :</p>\n<ol>\n<li>l'<strong>essai de pression et d'étanchéité</strong>, qui prouve que les assemblages résistent à la pression et ne fuient pas ;</li>\n<li>le <strong>tirage au vide</strong>, qui retire l'air, l'azote et l'humidité du circuit ;</li>\n<li>la <strong>charge</strong> en fluide frigorigène, dans la quantité exacte prévue.</li>\n</ol>\n<p>Sauter ou bâcler l'une d'elles a des conséquences graves : une fuite qui vide l'installation en quelques semaines, de l'humidité qui forme des bouchons de glace dans le détendeur et des acides dans l'huile, des incondensables qui font monter la HP, une charge fausse qui dégrade les performances ou détruit le compresseur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'ordre est toujours le même : étanchéité, puis vide, puis charge. On ne cherche jamais une fuite avec le fluide frigorigène lui-même, et l'on ne tire jamais au vide un circuit dont on n'a pas vérifié l'étanchéité.</div>"
      },
      {
       "titre": "L'essai de pression et d'étanchéité",
       "contenu": "\n<p>L'essai se fait à l'<strong>azote sec</strong> (azote de qualité industrielle sans humidité) ou à l'<strong>azote hydrogéné</strong> (mélange d'environ 95 % d'azote et 5 % d'hydrogène, non inflammable), qui permet de localiser les fuites avec un détecteur électronique sensible à l'hydrogène. On n'utilise jamais d'oxygène ni d'air comprimé : l'oxygène au contact de l'huile sous pression peut provoquer une explosion, et l'air apporte de l'humidité.</p>\n<p>La <strong>pression d'essai</strong> est fixée par la norme NF EN 378 et par le constructeur ; elle ne dépasse jamais la pression maximale admissible PS du composant le plus faible du circuit. Certains composants (capteurs, détendeurs électroniques, pressostats basse pression) peuvent devoir être isolés pendant l'essai : la notice le précise.</p>\n<p>Les méthodes de recherche de fuite sont complémentaires :</p>\n<ul>\n<li>la <strong>chute de pression</strong> : on note pression et température au début et à la fin d'une période de maintien (souvent plusieurs heures, ou 24 h pour une installation importante) ;</li>\n<li>le <strong>produit moussant</strong> sur chaque assemblage : des bulles signalent la fuite ;</li>\n<li>le <strong>détecteur électronique</strong> à hydrogène avec l'azote hydrogéné.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> corriger une pression d'essai de l'effet de la température. Un circuit est mis sous 30 bar relatifs (31 bar absolus) d'azote à 25 °C (298 K) le soir. Le lendemain matin, il fait 15 °C (288 K) et l'on lit 28,9 bar relatifs. Pour un gaz à volume constant, la pression absolue est proportionnelle à la température absolue : pression attendue = 31 × 288 ÷ 298 ≈ 29,96 bar absolus, soit environ 29,0 bar relatifs. La lecture de 28,9 bar est compatible avec la seule baisse de température, compte tenu de la précision du manomètre : pas de fuite décelable. Une lecture de 27 bar aurait signalé une fuite.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une bouteille d'azote est à environ 200 bar. On la raccorde toujours par un détendeur réglé avant ouverture, on monte la pression progressivement par paliers en restant à distance des assemblages, et l'on ne dépasse jamais la pression d'essai. Une bouteille se transporte et se stocke attachée, chapeau de protection en place.</div>"
      },
      {
       "titre": "Le tirage au vide",
       "contenu": "\n<p>Le <strong>tirage au vide</strong> consiste à abaisser la pression dans le circuit très en dessous de la pression atmosphérique avec une <strong>pompe à vide</strong>. À basse pression, l'eau bout à basse température : à 20 °C, elle s'évapore dès que la pression descend sous environ 23 mbar absolus. La vapeur d'eau est alors aspirée par la pompe, de même que l'air et l'azote résiduel.</p>\n<p>Conditions d'un bon tirage au vide :</p>\n<ul>\n<li>pompe à vide à deux étages, huile propre (changée régulièrement, car elle se charge en humidité), adaptée au fluide (compatible A2L ou A3 si nécessaire) ;</li>\n<li>flexibles les plus courts et de plus gros diamètre possible, en bon état, sans obturateur des valves Schrader (on les retire avec un outil spécial pour libérer le passage) ;</li>\n<li>tirage par les côtés HP et BP à la fois ;</li>\n<li>mesure par un <strong>vacuomètre électronique</strong> placé de préférence au plus loin de la pompe ; le manomètre du manifold n'est pas assez précis dans cette plage.</li>\n</ul>\n<p>La valeur à atteindre est fixée par le constructeur de l'installation ou par la procédure de l'entreprise : couramment quelques millibars absolus, souvent moins de 1 mbar pour une installation neuve et bien étanche. La durée dépend du volume du circuit et de son humidité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> le test de remontée de pression. 1. Une fois la valeur cible atteinte, isoler la pompe à vide du circuit par une vanne. 2. Observer le vacuomètre pendant le temps prévu par la procédure (par exemple 15 à 30 minutes). 3. Si la pression reste stable : le circuit est sec et étanche. 4. Si la pression remonte puis se stabilise à une valeur basse : il reste de l'humidité qui s'évapore ; reprendre le tirage au vide (éventuellement en réchauffant le circuit ou en cassant le vide à l'azote sec). 5. Si la pression remonte régulièrement sans se stabiliser : il y a une fuite ; reprendre la recherche à l'azote.</div>"
      },
      {
       "titre": "La charge en fluide frigorigène",
       "contenu": "\n<p>La <strong>charge</strong> se fait de préférence par <strong>pesée</strong>, avec une balance électronique, à partir de la charge nominale indiquée par le constructeur (plaque signalétique et notice) ou calculée par le bureau d'études. On respecte l'état physique du fluide :</p>\n<ul>\n<li>un fluide pur ou azéotrope peut être chargé en phase vapeur ou liquide ;</li>\n<li>un <strong>mélange zéotrope</strong> (série R400 : R407C, R449A, R454B…) se charge toujours en <strong>phase liquide</strong>, pour conserver sa composition ; on charge le liquide côté haute pression à l'arrêt, ou côté basse pression en marche en le laminant progressivement pour qu'il arrive vaporisé au compresseur.</li>\n</ul>\n<p>Les bouteilles à tube plongeur délivrent du liquide en position debout ; les autres doivent être retournées. L'étiquette de la bouteille l'indique.</p>\n<p>Sur les splits, l'unité extérieure est préchargée pour une longueur de liaison donnée. Au-delà, on ajoute une <strong>charge complémentaire</strong> calculée selon la notice.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un split au R32 contient 1,20 kg, préchargé pour 7,5 m de liaison. La notice impose 20 g par mètre supplémentaire. Liaison réelle : 15 m. 1. Longueur supplémentaire : 15 − 7,5 = 7,5 m. 2. Charge complémentaire : 7,5 × 20 = 150 g. 3. Charge totale : 1,20 + 0,15 = 1,35 kg. 4. Charge en t éq. CO<sub>2</sub> : 1,35 × 675 ÷ 1 000 ≈ 0,91 t. 5. Peser la bouteille, charger 150 g en phase liquide, contrôler la masse finale. 6. Inscrire la charge complémentaire et la charge totale sur l'étiquette prévue sur l'unité extérieure.</div>\n<p>Lorsque la charge exacte n'est pas connue (installation ancienne sans documentation), on charge progressivement en contrôlant les paramètres : sous-refroidissement pour une installation sans réservoir, disparition des bulles au voyant et niveau du réservoir pour une installation avec réservoir, toujours avec une surchauffe correcte. Cette méthode exige des conditions stables et proches du régime nominal.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne remplit jamais une installation « au voyant » en pleine charge thermique d'un jour très chaud, ni « à la pression » : la pression dépend des températures et non de la quantité de fluide. Une surcharge fait monter la HP, augmente la consommation et peut renvoyer du liquide au compresseur.</div>"
      },
      {
       "titre": "Traçabilité de l'opération",
       "contenu": "\n<p>À l'issue des trois étapes, l'opération est consignée :</p>\n<ul>\n<li>sur la <strong>fiche d'intervention</strong> réglementaire : nature de l'opération (mise en service), charge totale, quantité de fluide chargée, type de fluide (vierge, recyclé, régénéré), résultat du contrôle d'étanchéité, détecteur utilisé ;</li>\n<li>sur le <strong>procès-verbal d'essais</strong> de l'entreprise : pression et durée de l'essai d'étanchéité, températures, niveau de vide atteint, résultat du test de remontée ;</li>\n<li>sur l'<strong>étiquette</strong> de l'équipement : nature du fluide, charge totale en kg, charge en t éq. CO<sub>2</sub>, mention « contient des gaz à effet de serre fluorés » le cas échéant.</li>\n</ul>\n<p>Ces documents rejoignent le DOE et le registre de l'équipement. Ils prouvent, en cas de fuite ou de casse ultérieure, que le travail a été réalisé dans les règles.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les manifolds et vacuomètres connectés enregistrent automatiquement la courbe de pression d'azote, la courbe de vide et les masses chargées, puis génèrent un rapport. Le technicien vérifie que les capteurs sont bien raccordés avant de lancer l'enregistrement et joint le rapport au dossier du client.</div>"
      }
     ],
     "points_cles": [
      "Ordre impératif : essai d'étanchéité, tirage au vide, charge.",
      "L'essai se fait à l'azote sec ou hydrogéné, jamais à l'oxygène ni à l'air, et sans dépasser la PS du composant le plus faible.",
      "La pression absolue d'un gaz à volume constant varie proportionnellement à sa température absolue.",
      "Le vide fait bouillir l'eau à basse température et l'évacue avec l'air et l'azote.",
      "Le vide se mesure au vacuomètre électronique ; le test de remontée distingue humidité et fuite.",
      "Les mélanges zéotropes se chargent en phase liquide.",
      "La charge se fait par pesée ; la charge complémentaire d'un split se calcule selon la longueur de liaison.",
      "Fiche d'intervention, PV d'essais et étiquette tracent l'opération."
     ],
     "lexique": [
      {
       "terme": "Azote hydrogéné",
       "def": "Mélange d'azote et de 5 % d'hydrogène utilisé pour localiser les fuites au détecteur."
      },
      {
       "terme": "Pression d'essai",
       "def": "Pression appliquée au circuit pour vérifier sa résistance et son étanchéité."
      },
      {
       "terme": "Chute de pression",
       "def": "Méthode qui détecte une fuite par baisse de pression sur une durée de maintien."
      },
      {
       "terme": "Pompe à vide",
       "def": "Pompe qui abaisse la pression d'un circuit très en dessous de la pression atmosphérique."
      },
      {
       "terme": "Vacuomètre",
       "def": "Instrument de mesure des très basses pressions absolues."
      },
      {
       "terme": "Test de remontée",
       "def": "Observation de la pression après isolement de la pompe à vide."
      },
      {
       "terme": "Obturateur Schrader",
       "def": "Clapet à ressort d'une valve de service, à retirer pour accélérer le vide."
      },
      {
       "terme": "Charge complémentaire",
       "def": "Fluide ajouté au-delà de la précharge selon la longueur des liaisons."
      },
      {
       "terme": "Tube plongeur",
       "def": "Tube intérieur d'une bouteille qui permet de soutirer du liquide en position debout."
      },
      {
       "terme": "Procès-verbal d'essais",
       "def": "Document qui consigne les conditions et les résultats des essais."
      }
     ]
    },
    {
     "id": "bmfer-mise-en-service-maintenance",
     "titre": "Mise en service, réglages et maintenance préventive",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Dérouler une procédure complète de mise en service d'une installation frigorifique.",
      "Régler les organes de régulation et de sécurité et vérifier leur action.",
      "Établir une fiche de relevés de fonctionnement et la comparer aux valeurs attendues.",
      "Construire et appliquer une gamme de maintenance préventive.",
      "Conseiller le client sur l'exploitation et l'efficacité énergétique de son installation."
     ],
     "sections": [
      {
       "titre": "Préparer la mise en service",
       "contenu": "\n<p>La <strong>mise en service</strong> est le moment où l'installation fonctionne pour la première fois dans ses conditions réelles. Le cours de seconde en a donné les principes ; on détaille ici la procédure appliquée à une installation de froid commercial, transposable aux autres systèmes.</p>\n<p>Avant tout démarrage, on vérifie que les étapes précédentes sont terminées et documentées : essai d'étanchéité, tirage au vide, charge pesée (ou prête à être complétée). Puis on réalise les <strong>contrôles hors tension</strong> :</p>\n<ul>\n<li>conformité du câblage au schéma, serrage des bornes de puissance, présence et continuité du conducteur de protection ;</li>\n<li>isolement du moteur du compresseur et des ventilateurs ;</li>\n<li>réglage des protections thermiques à l'intensité nominale des moteurs ;</li>\n<li>position des vannes de service et de la vanne du réservoir ;</li>\n<li>niveau d'huile au voyant du carter, si le compresseur en possède un ;</li>\n<li>évacuation des condensats, libre et en pente, avec son cordon chauffant en froid négatif.</li>\n</ul>\n<p>La <strong>résistance de carter</strong> doit être alimentée plusieurs heures avant le premier démarrage (souvent une douzaine d'heures, selon le constructeur) pour chasser le fluide dissous dans l'huile.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> démarrer un compresseur dont l'huile est chargée de fluide provoque un moussage brutal ; l'huile est entraînée, les paliers fonctionnent à sec et le compresseur peut être détruit dès les premières minutes. La consigne de préchauffage du carter n'est pas une formalité.</div>"
      },
      {
       "titre": "Démarrer, régler, essayer",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> procédure de mise en service d'une chambre froide à groupe de condensation. 1. Mettre sous tension la commande seule (disjoncteur du compresseur ouvert) et vérifier la logique : ouverture de l'électrovanne à la demande de froid, marche des ventilateurs, affichage du régulateur. 2. Paramétrer le régulateur : consigne, différentiel, intervalle et fin de dégivrage, temporisations, alarmes. 3. Contrôler l'ordre des phases et autoriser le compresseur ; vérifier immédiatement que la HP monte et que la BP baisse. 4. Mesurer les intensités sur chaque phase et les comparer aux valeurs de la plaque. 5. Compléter la charge si nécessaire, en surveillant voyant, sous-refroidissement et surchauffe. 6. Laisser descendre la chambre en température, puis régler la surchauffe du détendeur en régime stabilisé. 7. Régler et vérifier le pressostat BP de pump-down par un cycle complet. 8. Essayer chaque sécurité : déclenchement du pressostat HP (par arrêt des ventilateurs du condenseur, sous surveillance), du pressostat BP, du thermique moteur si un test est prévu. 9. Déclencher un dégivrage manuel et vérifier la séquence complète. 10. Contrôler l'alarme de température et l'alarme homme enfermé.</div>\n<p>Les réglages se font dans un ordre logique : d'abord la sécurité (protections, pressostats de sécurité), ensuite le fonctionnement (charge, détendeur), enfin la régulation fine (consignes, dégivrage). Chaque valeur réglée est notée.</p>\n<p>Pour un climatiseur ou une PAC, la carte électronique gère la plupart des réglages. La mise en service consiste alors à paramétrer les adresses des unités, les options (loi d'eau, appoints, priorités d'eau chaude sanitaire), à lancer un mode de test et à contrôler les grandeurs affichées par la carte avec ses propres instruments.</p>"
      },
      {
       "titre": "La fiche de relevés de fonctionnement",
       "contenu": "\n<p>À la fin de la mise en service, l'installation fonctionnant en régime stable, le technicien établit une <strong>fiche de relevés</strong>. Elle sert de référence pour toutes les interventions futures : une dérive se voit par comparaison.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Valeur relevée</th><th>Valeur attendue ou limite</th><th>Conclusion</th></tr></thead>\n<tbody>\n<tr><td>Température chambre</td><td>+2,4 °C</td><td>Consigne +2 °C</td><td>Conforme</td></tr>\n<tr><td>Air extérieur au condenseur</td><td>24 °C</td><td>—</td><td>Condition de l'essai</td></tr>\n<tr><td>BP convertie en t<sub>0</sub></td><td>t<sub>0</sub> (rosée, R449A) ≈ −6 °C</td><td>Écart chambre − t<sub>0</sub> de 6 à 10 K</td><td>Conforme</td></tr>\n<tr><td>HP convertie en t<sub>k</sub></td><td>t<sub>k</sub> (bulle) ≈ 36 °C</td><td>Écart t<sub>k</sub> − air de 10 à 15 K</td><td>Conforme</td></tr>\n<tr><td>Surchauffe utile</td><td>6 K</td><td>5 à 8 K</td><td>Conforme</td></tr>\n<tr><td>Sous-refroidissement</td><td>3 K</td><td>Faible (installation avec réservoir)</td><td>Conforme</td></tr>\n<tr><td>Température de refoulement</td><td>78 °C</td><td>Inférieure à la limite du constructeur</td><td>Conforme</td></tr>\n<tr><td>Intensités compresseur</td><td>5,8 / 5,9 / 5,8 A</td><td>Inférieures à 7,5 A (plaque), équilibrées</td><td>Conforme</td></tr>\n<tr><td>Voyant liquide</td><td>Plein, pastille couleur « sec »</td><td>—</td><td>Conforme</td></tr>\n</tbody>\n</table>\n<p>Sur la fiche réelle, on note aussi les pressions lues (en précisant relatives ou absolues) ; les températures de saturation se déduisent toujours des tables du fluide réellement utilisé, en distinguant rosée et bulle pour un mélange zéotrope comme le R449A.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une fiche de relevés n'a de valeur que si elle précise les conditions de l'essai : température du local, température extérieure, état de charge (descente en température ou régime stabilisé), heure du relevé.</div>"
      },
      {
       "titre": "Réception et prise en main par le client",
       "contenu": "\n<p>La mise en service se termine par la <strong>réception</strong> et la <strong>prise en main</strong> par l'exploitant. Le technicien :</p>\n<ul>\n<li>présente l'installation : emplacement des organes de coupure, signification des voyants et alarmes, réglages accessibles à l'utilisateur ;</li>\n<li>explique les gestes d'exploitation : ne pas obstruer l'évaporateur avec la marchandise, refermer les portes, ne pas introduire de grandes quantités de produits chauds d'un coup, nettoyer sans projeter d'eau sur les parties électriques ;</li>\n<li>remet les documents : notice d'utilisation, fiche d'intervention, relevés de mise en service, coordonnées pour le dépannage ;</li>\n<li>propose un contrat d'entretien adapté.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une part importante des appels de dépannage des premières semaines relève de l'exploitation : porte mal fermée, évaporateur masqué par des cartons, réglage modifié par un employé. Dix minutes d'explication à la livraison évitent souvent un déplacement facturé et un client mécontent.</div>"
      },
      {
       "titre": "La maintenance préventive",
       "contenu": "\n<p>La <strong>maintenance préventive</strong> réduit les pannes, maintient les performances et prolonge la vie de l'installation. Elle s'organise à partir d'une <strong>gamme de maintenance</strong> : liste ordonnée des opérations à réaliser, avec leur périodicité, la méthode, le matériel et les valeurs de référence.</p>\n<table>\n<thead><tr><th>Opération</th><th>Objectif</th><th>Périodicité indicative</th></tr></thead>\n<tbody>\n<tr><td>Contrôle d'étanchéité réglementaire</td><td>Détecter les fuites</td><td>Selon la charge en t éq. CO<sub>2</sub></td></tr>\n<tr><td>Nettoyage du condenseur à air</td><td>Maintenir une HP basse</td><td>1 à 4 fois par an selon l'environnement</td></tr>\n<tr><td>Contrôle et nettoyage de l'évaporateur, du bac et de l'évacuation des condensats</td><td>Échange thermique, hygiène, absence de débordement</td><td>À chaque visite</td></tr>\n<tr><td>Relevé complet des paramètres de fonctionnement</td><td>Détecter les dérives par rapport à la référence</td><td>À chaque visite</td></tr>\n<tr><td>Contrôle des intensités et serrage des connexions</td><td>Prévenir échauffements et casses</td><td>Annuelle</td></tr>\n<tr><td>Essai des sécurités et des alarmes</td><td>S'assurer qu'elles fonctionneraient en cas de besoin</td><td>Annuelle</td></tr>\n<tr><td>Contrôle de l'acidité de l'huile (installations importantes)</td><td>Détecter humidité, échauffement</td><td>Selon le constructeur</td></tr>\n<tr><td>Remplacement des filtres à air</td><td>Débit d'air, hygiène</td><td>Selon la perte de charge</td></tr>\n</tbody>\n</table>\n<p>Pour les pompes à chaleur et climatiseurs de puissance moyenne, la réglementation française impose en outre un <strong>entretien périodique</strong> (par exemple tous les deux ans pour les systèmes de 4 à 70 kW) avec remise d'une attestation, et les systèmes plus puissants font l'objet d'une <strong>inspection périodique</strong>. Les seuils et périodicités se vérifient dans le texte en vigueur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une visite préventive. 1. Relever les paramètres dans les mêmes conditions que la référence, si possible. 2. Comparer chaque valeur à la fiche de mise en service et à la visite précédente. 3. Repérer les dérives : par exemple un écart entre t<sub>k</sub> et l'air passé de 12 K à 18 K signale un condenseur qui s'encrasse. 4. Traiter ce qui peut l'être immédiatement (nettoyage). 5. Pour le reste, rédiger une préconisation chiffrée au client, avec le risque encouru s'il ne fait rien. 6. Mettre à jour le registre et la fiche d'intervention.</div>\n<p>Le conseil fait partie de la maintenance. Le technicien peut proposer des améliorations : variation de vitesse des ventilateurs, HP flottante, rideaux à lanières, remplacement d'un fluide à fort PRP par un fluide autorisé et plus durable, programmation des dégivrages selon l'activité. Il les présente avec leurs avantages (économie, fiabilité, conformité) et leurs contraintes (coût, arrêt nécessaire).</p>"
      }
     ],
     "points_cles": [
      "Une mise en service commence par les contrôles hors tension et le préchauffage du carter.",
      "Les réglages se font dans l'ordre : sécurités, puis fonctionnement, puis régulation fine.",
      "Chaque sécurité et chaque alarme est essayée lors de la mise en service.",
      "La fiche de relevés, avec ses conditions d'essai, sert de référence pour toute la vie de l'installation.",
      "La prise en main par le client réduit les appels de dépannage liés à l'exploitation.",
      "La gamme de maintenance fixe opérations, périodicités, méthodes et valeurs de référence.",
      "Une dérive se détecte en comparant les relevés à la référence, pas en lisant une valeur isolée.",
      "PAC et climatiseurs de 4 à 70 kW sont soumis à un entretien périodique obligatoire.",
      "Le conseil chiffré au client fait partie de la maintenance."
     ],
     "lexique": [
      {
       "terme": "Mise en service",
       "def": "Ensemble des opérations qui amènent une installation à fonctionner conformément au besoin."
      },
      {
       "terme": "Préchauffage du carter",
       "def": "Alimentation de la résistance de carter avant le premier démarrage."
      },
      {
       "terme": "Régime stabilisé",
       "def": "Fonctionnement où pressions et températures ne varient plus de façon notable."
      },
      {
       "terme": "Fiche de relevés",
       "def": "Document qui consigne les grandeurs de fonctionnement et leurs conditions de mesure."
      },
      {
       "terme": "Prise en main",
       "def": "Explication de l'installation et de son exploitation au client."
      },
      {
       "terme": "Maintenance préventive",
       "def": "Maintenance réalisée selon un échéancier ou un état, avant la défaillance."
      },
      {
       "terme": "Gamme de maintenance",
       "def": "Liste ordonnée des opérations de maintenance avec méthodes et périodicités."
      },
      {
       "terme": "Dérive",
       "def": "Évolution progressive d'un paramètre qui s'éloigne de sa valeur de référence."
      },
      {
       "terme": "Préconisation",
       "def": "Recommandation écrite au client d'une action à engager."
      },
      {
       "terme": "Inspection périodique",
       "def": "Contrôle réglementaire de l'efficacité des systèmes de chauffage ou de climatisation importants."
      }
     ]
    },
    {
     "id": "bmfer-diagnostic-pannes",
     "titre": "Diagnostic et maintenance corrective des installations frigorifiques",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Appliquer une démarche de diagnostic structurée, du constat à la vérification après réparation.",
      "Associer les combinaisons de symptômes frigorifiques aux défaillances les plus probables.",
      "Distinguer une panne d'origine frigorifique, électrique ou d'exploitation.",
      "Conduire le remplacement d'un compresseur en traitant la cause de la casse.",
      "Rédiger un compte rendu de dépannage exploitable."
     ],
     "sections": [
      {
       "titre": "La démarche de diagnostic",
       "contenu": "\n<p>La <strong>maintenance corrective</strong> intervient après une défaillance. Le dépanneur travaille souvent sous pression : marchandises menacées, client inquiet. C'est précisément pour cela qu'il applique une démarche rigoureuse plutôt que de remplacer des pièces au hasard.</p>\n<ol>\n<li><strong>Constater</strong> : écouter le client (« depuis quand ? », « qu'est-ce qui a changé ? »), observer l'installation (givre, bruits, voyants, codes défauts), relever les températures.</li>\n<li><strong>Mesurer</strong> : pressions, températures, intensités, tensions ; calculer surchauffe, sous-refroidissement et écarts aux échangeurs.</li>\n<li><strong>Formuler des hypothèses</strong> : à partir des combinaisons de symptômes, lister les causes possibles, de la plus probable à la moins probable, et de la plus simple à vérifier à la plus lourde.</li>\n<li><strong>Tester</strong> chaque hypothèse par une mesure ou une observation qui la confirme ou l'élimine.</li>\n<li><strong>Identifier</strong> l'élément défaillant et la <strong>cause</strong> de sa défaillance.</li>\n<li><strong>Réparer</strong> en sécurité, en respectant la réglementation des fluides.</li>\n<li><strong>Vérifier</strong> le fonctionnement et consigner.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> remplacer l'organe défaillant sans comprendre pourquoi il a lâché conduit souvent à une nouvelle panne identique. Un contacteur aux contacts soudés peut révéler un compresseur qui démarre trop souvent ; un compresseur grillé peut révéler un manque de fluide qui l'a mal refroidi.</div>"
      },
      {
       "titre": "Les grandes familles de défaillances frigorifiques",
       "contenu": "\n<p>Les écarts calculés lors des relevés orientent le diagnostic. Le tableau suivant rassemble les défaillances les plus fréquentes du circuit frigorifique d'une installation à détendeur thermostatique et condenseur à air.</p>\n<table>\n<thead><tr><th>Défaillance</th><th>BP</th><th>HP</th><th>Surchauffe</th><th>Sous-refroidissement</th><th>Autres indices</th></tr></thead>\n<tbody>\n<tr><td>Manque de fluide</td><td>Basse</td><td>Basse</td><td>Forte</td><td>Faible</td><td>Bulles au voyant, refoulement chaud, traces d'huile au point de fuite</td></tr>\n<tr><td>Excès de fluide (sans réservoir)</td><td>Normale à haute</td><td>Haute</td><td>Normale à faible</td><td>Fort</td><td>Intensité élevée</td></tr>\n<tr><td>Restriction ligne liquide (filtre colmaté)</td><td>Basse</td><td>Normale</td><td>Forte</td><td>Normal à fort</td><td>Filtre froid ou givré en sortie, différence de température entre entrée et sortie</td></tr>\n<tr><td>Détendeur qui alimente trop</td><td>Haute</td><td>Normale</td><td>Faible ou nulle</td><td>Normal</td><td>Aspiration froide jusqu'au compresseur, carter givré</td></tr>\n<tr><td>Bulbe de détendeur vide ou mal placé</td><td>Très basse</td><td>Basse</td><td>Très forte</td><td>Normal</td><td>Le réglage n'a aucun effet</td></tr>\n<tr><td>Condenseur encrassé ou ventilateur à l'arrêt</td><td>Haute</td><td>Très haute</td><td>Normale</td><td>Normal</td><td>Écart t<sub>k</sub> − air élevé, déclenchement HP</td></tr>\n<tr><td>Incondensables dans le circuit</td><td>Normale</td><td>Haute</td><td>Normale</td><td>Variable</td><td>À l'arrêt, la pression mesurée est supérieure à la pression de saturation correspondant à la température ambiante</td></tr>\n<tr><td>Évaporateur pris en glace ou ventilateur arrêté</td><td>Basse</td><td>Basse</td><td>Faible</td><td>Normal</td><td>Débit d'air faible, risque de retour de liquide</td></tr>\n<tr><td>Compresseur inefficace (clapets, spirales)</td><td>Haute</td><td>Basse</td><td>Variable</td><td>Variable</td><td>Intensité faible, faible écart de pression, la chambre ne descend pas</td></tr>\n</tbody>\n</table>\n<p>Ces tendances sont des points de départ. Une même combinaison peut avoir plusieurs causes, et deux défauts peuvent se superposer (par exemple un manque de fluide et un condenseur encrassé). Les tests complémentaires lèvent l'ambiguïté.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la présence d'incondensables. 1. Arrêter l'installation et laisser les pressions s'équilibrer, ventilateur du condenseur en marche, jusqu'à ce que le condenseur soit à la température ambiante. 2. Mesurer la pression au condenseur et la température de l'air. 3. Comparer à la pression de saturation du fluide à cette température. 4. Si la pression mesurée est nettement supérieure, le circuit contient des incondensables : récupérer le fluide, tirer au vide et recharger, puis rechercher comment l'air est entré.</div>"
      },
      {
       "titre": "Les pannes électriques et de régulation",
       "contenu": "\n<p>Beaucoup d'appels « ça ne fait plus de froid » ont une origine électrique ou de régulation. On les recherche en suivant le schéma, de l'alimentation au récepteur.</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Causes à vérifier</th></tr></thead>\n<tbody>\n<tr><td>Rien ne fonctionne, afficheur éteint</td><td>Alimentation générale, disjoncteur, fusible du circuit de commande, transformateur</td></tr>\n<tr><td>Le compresseur ne démarre pas, le contacteur ne colle pas</td><td>Contact ouvert dans la chaîne de sécurité (HP, BP, thermique), temporisation en cours, absence de demande du régulateur, bobine coupée</td></tr>\n<tr><td>Le contacteur colle mais le compresseur ne tourne pas</td><td>Contacts du contacteur usés, phase absente, protection interne du moteur ouverte, condensateur défectueux (monophasé), moteur grippé ou bobinage coupé</td></tr>\n<tr><td>Le compresseur démarre puis s'arrête rapidement</td><td>Thermique (tension basse, surintensité), pressostat BP (manque de fluide, électrovanne fermée), pressostat HP</td></tr>\n<tr><td>La chambre se réchauffe pendant que le groupe tourne</td><td>Ventilateurs de l'évaporateur à l'arrêt, dégivrage non effectué ou incomplet, sonde de régulation déplacée</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la protection interne d'un compresseur hermétique se réarme seule après refroidissement, ce qui peut prendre longtemps. Un compresseur très chaud qui ne démarre pas n'est pas forcément grillé : on mesure les résistances des enroulements ; un enroulement apparemment coupé alors que le carter est brûlant indique souvent une protection interne ouverte. On laisse refroidir et on cherche la cause de l'échauffement.</div>"
      },
      {
       "titre": "Exemple de diagnostic commenté",
       "contenu": "\n<p>Appel d'un restaurant : « la chambre froide positive est à +9 °C ce matin, consigne +3 °C ». Le groupe de condensation au R134a tourne en permanence.</p>\n<p>Relevés (air au condenseur 26 °C) : BP 0,4 bar relatif (t<sub>0</sub> ≈ −17 °C), HP 6,5 bar relatifs (t<sub>k</sub> ≈ 29 °C), aspiration à la sortie de l'évaporateur −3 °C, liquide à 27 °C, voyant plein, intensité un peu inférieure à la normale.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1. Calculs : surchauffe = −3 − (−17) = 14 K, forte ; sous-refroidissement = 29 − 27 = 2 K, normal pour une installation avec réservoir ; écart chambre − t<sub>0</sub> = 9 − (−17) = 26 K, très élevé ; écart t<sub>k</sub> − air = 3 K, faible. 2. Interprétation : BP basse et surchauffe forte, donc évaporateur sous-alimenté ; voyant plein, donc la charge et le réservoir semblent corrects. Hypothèses : restriction sur la ligne liquide, détendeur défaillant, électrovanne partiellement fermée. 3. Tests : température avant et après le filtre déshydrateur : 27 °C puis 26 °C, pas de restriction notable au filtre ; tension à la bobine de l'électrovanne présente et vanne qui claque à la commande ; le corps du détendeur est tiède en sortie au lieu d'être froid. On chauffe légèrement le bulbe à la main : aucune réaction de la BP. 4. Conclusion : le bulbe a perdu sa charge (capillaire fissuré par frottement). 5. Réparation : récupération du fluide (ou isolement de la partie concernée si l'installation le permet), remplacement de la tête thermostatique ou du détendeur, protection du nouveau capillaire, remplacement du filtre, essai d'étanchéité, tirage au vide, remise en charge. 6. Vérification : surchauffe réglée à 6 K, chambre revenue à +3 °C dans l'après-midi.</div>\n<p>On remarque que l'hypothèse « manque de fluide », souvent la première à laquelle on pense devant une BP basse, a été écartée grâce au voyant plein et au sous-refroidissement normal, ce qui a évité une charge inutile et interdite.</p>"
      },
      {
       "titre": "Remplacer un compresseur",
       "contenu": "\n<p>Le remplacement d'un compresseur est une opération lourde qui doit traiter à la fois la conséquence (compresseur hors service) et la cause.</p>\n<ol>\n<li>Confirmer le diagnostic : mesures électriques (enroulements, isolement) ou mécaniques (incapacité à créer un écart de pression).</li>\n<li>Récupérer le fluide, peser la quantité récupérée, la tracer.</li>\n<li>Prélever un échantillon d'huile et tester son <strong>acidité</strong> avec un kit de test. Une huile acide ou noire et une odeur âcre signalent un moteur grillé.</li>\n<li>Rechercher la cause : retours de liquide, manque de fluide, surchauffe excessive, HP trop élevée, tension anormale, courts cycles.</li>\n<li>Déposer l'ancien compresseur en obturant immédiatement ses orifices ; poser le nouveau, identique ou validé comme équivalent pour le fluide et les conditions.</li>\n<li>En cas de moteur grillé, poser un filtre anti-acide à la ligne liquide et un filtre d'aspiration, puis les remplacer après quelques heures ou jours de fonctionnement, selon les contrôles d'acidité.</li>\n<li>Effectuer l'essai d'étanchéité, le tirage au vide, la charge pesée.</li>\n<li>Mettre en service comme une installation neuve : préchauffage du carter, contrôle des intensités, réglages, relevés.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fabricants analysent les compresseurs retournés sous garantie. Si l'expertise révèle un défaut de lubrification lié à des retours de liquide ou une contamination par l'humidité, la garantie est refusée. Le compte rendu du technicien, avec les relevés avant et après intervention, est alors la seule défense de l'entreprise.</div>"
      },
      {
       "titre": "Le compte rendu de dépannage",
       "contenu": "\n<p>Le dépannage se termine par un <strong>compte rendu</strong> qui doit permettre à un collègue de comprendre l'intervention sans avoir été présent. Il comprend :</p>\n<ul>\n<li>le constat à l'arrivée, chiffré (températures, pressions, codes défauts) ;</li>\n<li>le diagnostic : élément défaillant et cause identifiée ;</li>\n<li>les travaux réalisés et les pièces remplacées, avec références ;</li>\n<li>les mouvements de fluide (quantités récupérées et chargées), reportés sur la fiche d'intervention réglementaire ;</li>\n<li>l'état au départ, chiffré ;</li>\n<li>les préconisations, avec leur degré d'urgence.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le diagnostic est une démarche de preuve : chaque conclusion s'appuie sur une mesure. Le compte rendu garde la trace de ces preuves.</div>"
      }
     ],
     "points_cles": [
      "Diagnostic : constater, mesurer, formuler des hypothèses, tester, identifier, réparer, vérifier.",
      "Remplacer une pièce sans chercher la cause de sa défaillance prépare la panne suivante.",
      "Manque de fluide : BP et HP basses, surchauffe forte, sous-refroidissement faible, bulles au voyant.",
      "Restriction liquide : BP basse, surchauffe forte, sous-refroidissement normal, différence de température aux bornes du filtre.",
      "Condenseur encrassé : HP très haute avec écart tk − air élevé.",
      "Incondensables : à l'arrêt, pression supérieure à la saturation à température ambiante.",
      "Les pannes électriques se localisent en suivant le schéma de l'alimentation au récepteur.",
      "Un compresseur grillé impose un contrôle d'acidité et des filtres anti-acide.",
      "Le compte rendu de dépannage est chiffré : constat, diagnostic, travaux, fluide, état final, préconisations."
     ],
     "lexique": [
      {
       "terme": "Maintenance corrective",
       "def": "Maintenance réalisée après la détection d'une défaillance."
      },
      {
       "terme": "Défaillance",
       "def": "Cessation de l'aptitude d'un bien à accomplir sa fonction."
      },
      {
       "terme": "Hypothèse de panne",
       "def": "Cause possible d'une défaillance, à confirmer ou éliminer par un test."
      },
      {
       "terme": "Restriction",
       "def": "Obstacle partiel au passage du fluide qui provoque une perte de charge anormale."
      },
      {
       "terme": "Protection interne",
       "def": "Protection thermique incorporée au moteur d'un compresseur hermétique."
      },
      {
       "terme": "Test d'acidité",
       "def": "Contrôle chimique de l'huile qui révèle une dégradation du circuit."
      },
      {
       "terme": "Filtre anti-acide",
       "def": "Filtre déshydrateur capable de retenir les acides du circuit."
      },
      {
       "terme": "Moteur grillé",
       "def": "Moteur dont l'isolant des bobinages a été détruit par échauffement."
      },
      {
       "terme": "Clapet",
       "def": "Lamelle qui ouvre et ferme l'aspiration ou le refoulement d'un cylindre de compresseur."
      },
      {
       "terme": "Compte rendu de dépannage",
       "def": "Document qui décrit le constat, le diagnostic, les travaux et l'état final d'une intervention."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Analyse des documents professionnels",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bmfer-doc-schema-fluidique",
     "titre": "Lire un schéma fluidique frigorifique",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Reconnaître la structure et les conventions d'un schéma de principe frigorifique.",
      "Identifier les symboles et les repères des composants d'un circuit.",
      "Suivre le circuit dans le sens du fluide et situer les zones HP, BP, liquide et vapeur.",
      "Localiser les points de mesure, de sécurité et d'intervention sur un schéma.",
      "Rédiger une analyse argumentée d'un schéma fluidique."
     ],
     "sections": [
      {
       "titre": "Le document et son rôle",
       "contenu": "\n<p>Le <strong>schéma fluidique</strong> (ou schéma de principe frigorifique) représente les composants d'un circuit et leurs liaisons, sans respecter les distances ni l'implantation réelle. Il montre <em>comment</em> l'installation fonctionne, alors que le plan d'implantation montre <em>où</em> se trouvent les éléments. Dans un dossier technique d'épreuve, il est presque toujours présent : il sert à identifier les composants, à comprendre un fonctionnement, à préparer une intervention ou à localiser une panne.</p>\n<p>On rencontre plusieurs niveaux de détail :</p>\n<ul>\n<li>le <strong>schéma de principe</strong> simplifié, avec les quatre organes principaux et quelques accessoires ;</li>\n<li>le <strong>schéma de tuyauterie et d'instrumentation</strong>, complet, avec toutes les vannes, les capteurs, les diamètres et les repères ; la norme NF EN 1861 en fixe les conventions pour les systèmes frigorifiques et les pompes à chaleur ;</li>\n<li>le schéma de la notice d'un appareil (climatiseur, PAC), qui suit les conventions du constructeur et comporte souvent une légende propre.</li>\n</ul>\n<p>Le schéma est accompagné d'une <strong>nomenclature</strong> (liste des repères avec désignation, marque, référence, caractéristiques) et d'un <strong>cartouche</strong> (titre, installation, indice de révision, date, auteur).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un schéma fluidique ne donne ni longueurs ni positions réelles. Pour une intervention, il se lit toujours avec le plan d'implantation et la nomenclature.</div>"
      },
      {
       "titre": "Conventions et vocabulaire",
       "contenu": "\n<table>\n<thead><tr><th>Élément</th><th>Représentation courante</th></tr></thead>\n<tbody>\n<tr><td>Compresseur</td><td>Cercle avec deux traits convergents ou trapèze indiquant le sens de compression</td></tr>\n<tr><td>Échangeur à air (évaporateur, condenseur)</td><td>Rectangle traversé par une ligne en zigzag, avec un symbole de ventilateur</td></tr>\n<tr><td>Échangeur à plaques</td><td>Rectangle avec deux circuits distincts</td></tr>\n<tr><td>Détendeur thermostatique</td><td>Symbole de vanne avec une ligne pointillée vers un petit cercle (bulbe), parfois une seconde ligne pour l'égalisation externe</td></tr>\n<tr><td>Électrovanne</td><td>Symbole de vanne surmonté d'un carré (bobine)</td></tr>\n<tr><td>Vanne manuelle, clapet anti-retour</td><td>Deux triangles opposés ; triangle avec trait pour le clapet</td></tr>\n<tr><td>Filtre déshydrateur, voyant</td><td>Losange ou rectangle avec trait ; cercle pour le voyant</td></tr>\n<tr><td>Réservoir, bouteille</td><td>Rectangle aux extrémités arrondies</td></tr>\n<tr><td>Pressostat, capteur de pression</td><td>Cercle avec lettres P, PS (pressostat), PZH (sécurité haute)</td></tr>\n<tr><td>Sonde de température</td><td>Cercle avec lettres T, TE, TIC (régulation)</td></tr>\n<tr><td>Soupape de sécurité</td><td>Vanne à ressort avec flèche vers l'échappement</td></tr>\n</tbody>\n</table>\n<p>Les lignes peuvent différer selon leur fonction : trait épais pour les conduites principales, trait fin pour les conduites d'égalisation ou de pilotage, pointillés pour les liaisons de mesure ou de commande. Les flèches indiquent le sens de circulation. Sur les schémas en couleur, l'usage fréquent est le rouge pour la HP vapeur, l'orange ou le jaune pour la ligne liquide, le bleu pour la BP ; ce n'est pas une règle universelle et la légende fait foi.</p>\n<p>Les instruments portent des <strong>codes de lettres</strong> : la première lettre désigne la grandeur (P pression, T température, L niveau, F débit), les suivantes la fonction (I indication, C régulation, S commutation, Z sécurité, H haut, L bas). Ainsi PZH signale un dispositif de sécurité sur pression haute.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les symboles varient d'un constructeur à l'autre, surtout dans les notices de climatiseurs et de PAC. Un même dessin peut désigner un capillaire chez l'un et un filtre chez l'autre. On lit toujours la légende avant d'interpréter.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un schéma fluidique en sept étapes. 1. Lire le cartouche : installation, fluide, indice et date ; vérifier qu'il s'agit de la bonne version. 2. Lire la légende et la nomenclature. 3. Repérer le compresseur, puis suivre le fluide dans le sens des flèches : refoulement, condenseur, ligne liquide, détendeur, évaporateur, aspiration. 4. Délimiter les quatre zones : HP vapeur (refoulement au condenseur), HP liquide (condenseur au détendeur), BP mélange (détendeur à l'évaporateur), BP vapeur (évaporateur au compresseur). 5. Placer chaque accessoire dans sa zone et en déduire sa fonction. 6. Repérer les organes de sécurité (pressostats, soupapes) et de régulation (sondes, électrovannes, vannes motorisées). 7. Repérer les points d'intervention : vannes de service, prises de pression, points de charge et de récupération, vannes d'isolement.</div>\n<p>Pour une installation à plusieurs évaporateurs ou à plusieurs compresseurs (centrale), on suit d'abord le circuit commun, puis chaque branche. Pour une PAC réversible, on suit le circuit deux fois, en mode chaud et en mode froid, en notant la position de la vanne 4 voies et le sens de passage dans chaque échangeur et chaque clapet.</p>\n<p>Les questions d'épreuve portent souvent sur : l'identification d'un composant par son repère, la justification de sa position, l'état du fluide en un point, la conséquence de sa défaillance, la procédure d'isolement d'une partie du circuit pour une intervention.</p>"
      },
      {
       "titre": "Exemple : le document",
       "contenu": "\n<p>Le dossier présente le schéma de principe d'une chambre froide négative à −20 °C, fluide R449A, groupe de condensation à air en toiture. Le schéma comporte, dans l'ordre du circuit :</p>\n<table>\n<thead><tr><th>Repère</th><th>Désignation</th><th>Position sur le schéma</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Compresseur semi-hermétique à piston avec résistance de carter</td><td>En bas à gauche du groupe</td></tr>\n<tr><td>2</td><td>Séparateur d'huile, avec retour vers le carter par un trait fin</td><td>Sur le refoulement</td></tr>\n<tr><td>3</td><td>Condenseur à air à deux ventilateurs</td><td>En haut du groupe</td></tr>\n<tr><td>4</td><td>Réservoir de liquide avec soupape (4a) et vanne de sortie (4b)</td><td>Sous le condenseur</td></tr>\n<tr><td>5</td><td>Filtre déshydrateur</td><td>Ligne liquide, après 4b</td></tr>\n<tr><td>6</td><td>Voyant avec indicateur d'humidité</td><td>Après 5</td></tr>\n<tr><td>7</td><td>Électrovanne liquide</td><td>Dans la chambre, avant le détendeur</td></tr>\n<tr><td>8</td><td>Détendeur thermostatique à égalisation externe, bulbe à la sortie de l'évaporateur</td><td>Entrée de l'évaporateur</td></tr>\n<tr><td>9</td><td>Évaporateur plafonnier, dégivrage électrique</td><td>Dans la chambre</td></tr>\n<tr><td>10</td><td>Bouteille anti-coup de liquide</td><td>Aspiration, avant le compresseur</td></tr>\n<tr><td>BP</td><td>Pressostat BP de régulation (pump-down)</td><td>Piquage sur l'aspiration du compresseur</td></tr>\n<tr><td>HP</td><td>Pressostat HP de sécurité à réarmement manuel</td><td>Piquage sur le refoulement</td></tr>\n<tr><td>V1, V2</td><td>Vannes de service aspiration et refoulement du compresseur</td><td>Sur le compresseur</td></tr>\n</tbody>\n</table>\n<p>Questions posées : identifier les zones de pression ; expliquer le rôle de 2, 8 et 10 ; indiquer comment isoler le fluide dans le groupe pour remplacer l'électrovanne 7.</p>"
      },
      {
       "titre": "Exemple : l'analyse modèle",
       "contenu": "\n<p><strong>Zones de pression.</strong> La zone HP s'étend du refoulement du compresseur 1 jusqu'à l'entrée du détendeur 8, en passant par 2, 3, 4, 5, 6 et 7 ; elle est en vapeur jusqu'au condenseur, puis en liquide à partir de la sortie du condenseur. La zone BP s'étend de la sortie du détendeur 8 à l'aspiration du compresseur : mélange liquide-vapeur dans l'évaporateur 9, vapeur surchauffée à sa sortie, dans la bouteille 10 et jusqu'à V1.</p>\n<p><strong>Rôle des composants.</strong> Le séparateur d'huile 2 retient l'huile entraînée au refoulement et la renvoie au carter : en froid négatif, l'huile devient très visqueuse dans l'évaporateur et reviendrait mal par l'aspiration. Le détendeur 8 dose le liquide envoyé à l'évaporateur pour maintenir une surchauffe constante ; l'égalisation externe compense la perte de charge de l'évaporateur plafonnier, sans quoi la surchauffe réelle serait trop forte. La bouteille 10 protège le compresseur des retours de liquide, notamment à la reprise du froid après un dégivrage électrique.</p>\n<p><strong>Isolement pour remplacer l'électrovanne 7.</strong> L'électrovanne étant sur la ligne liquide, on peut rassembler la charge dans le réservoir. Procédure : fermer la vanne 4b en sortie de réservoir en maintenant l'électrovanne 7 ouverte (demande de froid) ; le compresseur aspire le fluide de la ligne liquide et de l'évaporateur et le refoule vers le condenseur et le réservoir, jusqu'à ce que le pressostat BP l'arrête à une pression légèrement positive ; couper alors l'alimentation du compresseur pour qu'il ne redémarre pas, puis fermer V1 et V2 ; la portion entre 4b et V1 ne contient plus que de la vapeur à faible pression, que l'on récupère à la station avant ouverture. Après remplacement, on réalise essai d'étanchéité et tirage au vide de cette portion seulement, puis on rouvre les vannes.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une analyse qui se contente de nommer les composants est incomplète. Le correcteur attend la fonction, justifiée par la position sur le circuit et par les conditions de l'installation (ici, le froid négatif justifie séparateur d'huile, dégivrage et bouteille d'aspiration).</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant d'intervenir sur une installation inconnue, le technicien vérifie que le schéma correspond à la réalité : composants ajoutés ou supprimés lors de travaux successifs, vannes non représentées. Il annote le schéma et signale les écarts pour mettre à jour le DOE.</div>"
      }
     ],
     "points_cles": [
      "Le schéma fluidique montre le fonctionnement, pas l'implantation.",
      "Il se lit avec son cartouche, sa légende et sa nomenclature.",
      "Les codes d'instruments indiquent la grandeur puis la fonction : PZH, TIC, PS.",
      "On suit le fluide depuis le refoulement du compresseur, dans le sens des flèches.",
      "Quatre zones : HP vapeur, HP liquide, BP mélange, BP vapeur.",
      "Chaque composant s'analyse par sa fonction, justifiée par sa position et les conditions de l'installation.",
      "Les points d'intervention (vannes de service, prises, points de charge) se repèrent avant toute procédure.",
      "Les symboles varient selon les constructeurs : la légende fait foi."
     ],
     "lexique": [
      {
       "terme": "Schéma de principe",
       "def": "Représentation simplifiée du fonctionnement d'un circuit."
      },
      {
       "terme": "Schéma de tuyauterie et d'instrumentation",
       "def": "Schéma complet d'un circuit avec vannes, instruments et repères."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste des éléments repérés avec leur désignation et leurs caractéristiques."
      },
      {
       "terme": "Cartouche",
       "def": "Cadre d'identification d'un document technique : titre, indice, date, auteur."
      },
      {
       "terme": "Indice de révision",
       "def": "Lettre ou chiffre qui identifie la version d'un document."
      },
      {
       "terme": "Légende",
       "def": "Tableau qui explique les symboles utilisés sur un schéma."
      },
      {
       "terme": "Code d'instrument",
       "def": "Lettres indiquant la grandeur mesurée et la fonction d'un instrument."
      },
      {
       "terme": "Piquage",
       "def": "Raccordement d'un petit tube ou d'un instrument sur une conduite."
      },
      {
       "terme": "Isoler",
       "def": "Fermer des vannes pour séparer une partie du circuit du reste de l'installation."
      },
      {
       "terme": "Ligne liquide",
       "def": "Conduite qui transporte le liquide du condenseur ou du réservoir vers le détendeur."
      }
     ]
    },
    {
     "id": "bmfer-doc-schema-electrique",
     "titre": "Exploiter un dossier de schémas électriques",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Se repérer dans un dossier de schémas électriques organisé en folios.",
      "Exploiter les renvois, les références croisées et les borniers.",
      "Relier le schéma électrique au fonctionnement frigorifique de l'installation.",
      "Préparer une recherche de panne ou une modification à partir du dossier.",
      "Rédiger une analyse argumentée d'un extrait de schéma."
     ],
     "sections": [
      {
       "titre": "Le document et son organisation",
       "contenu": "\n<p>Une armoire frigorifique de chambre froide, de centrale ou de groupe d'eau glacée est livrée avec un <strong>dossier de schémas électriques</strong>. Il est découpé en pages numérotées appelées <strong>folios</strong>, chacune avec un cartouche (installation, numéro de folio, indice, date). On y trouve généralement :</p>\n<table>\n<thead><tr><th>Partie</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Page de garde et sommaire</td><td>Liste des folios et de leur contenu</td></tr>\n<tr><td>Schéma de puissance</td><td>Arrivée, sectionneur, protections, contacteurs, récepteurs (compresseurs, ventilateurs, résistances)</td></tr>\n<tr><td>Schéma de commande</td><td>Lignes de commande, chaînes de sécurité, temporisations</td></tr>\n<tr><td>Schéma de régulation</td><td>Raccordement du régulateur : entrées (sondes, contacts), sorties (relais), alimentation, communication</td></tr>\n<tr><td>Borniers</td><td>Liste des bornes de l'armoire et des câbles qui en partent vers le terrain</td></tr>\n<tr><td>Nomenclature</td><td>Liste des appareils avec repère, désignation, fabricant, référence, calibre</td></tr>\n<tr><td>Implantation</td><td>Disposition des appareils dans l'armoire et sur la porte</td></tr>\n</tbody>\n</table>\n<p>Chaque folio est divisé en <strong>colonnes</strong> numérotées (et parfois en lignes repérées par des lettres). La position d'un élément se note par le numéro de folio et de colonne, par exemple « 4.6 » pour le folio 4, colonne 6.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un dossier de schémas ne se lit pas comme un livre. On part d'un récepteur ou d'un défaut et l'on navigue de folio en folio grâce aux renvois.</div>"
      },
      {
       "titre": "Renvois, références croisées et bornes",
       "contenu": "\n<p>Trois outils permettent de naviguer :</p>\n<ul>\n<li>les <strong>renvois de potentiel</strong> : un conducteur qui quitte un folio porte une flèche avec l'indication du folio et de la colonne où il continue (par exemple « L1 vers 5.1 ») ;</li>\n<li>les <strong>références croisées</strong> : sous la bobine d'un contacteur ou d'un relais, un petit tableau indique où se trouvent ses contacts (contacts de puissance et contacts auxiliaires), avec leur nature (NO ou NF) et leur position folio-colonne ; inversement, à côté d'un contact, on trouve la position de la bobine qui le commande ;</li>\n<li>les <strong>repères de bornes</strong> : chaque fil qui sort de l'armoire passe par un bornier (par exemple X1, X2), et la borne porte un numéro. Le folio de borniers indique pour chaque borne le câble, sa destination et le numéro du conducteur.</li>\n</ul>\n<p>Les bornes des appareils sont normalisées : 1-2, 3-4, 5-6 pour les contacts de puissance d'un contacteur ; 13-14 pour un contact auxiliaire NO, 21-22 pour un contact NF ; A1-A2 pour une bobine ; 95-96 (NF) et 97-98 (NO) pour les contacts d'un relais thermique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'état représenté est l'état repos, armoire hors tension. Un contact NF de pressostat BP dessiné fermé sera en réalité ouvert si l'installation est à l'arrêt avec une BP trop basse. Pour interpréter un schéma en fonctionnement, il faut se demander pour chaque contact dans quel état il se trouve réellement.</div>"
      },
      {
       "titre": "Méthode d'exploitation pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un dossier de schémas pour une recherche de panne. 1. Identifier le récepteur qui ne fonctionne pas et le trouver dans le schéma de puissance (par le sommaire ou la nomenclature). 2. Noter l'appareil qui le commande (contacteur KM) et sa protection (QF). 3. Grâce à la référence croisée, aller à la bobine de KM dans le schéma de commande. 4. Lister tous les contacts en série dans la ligne de cette bobine et, pour chacun, l'appareil et le folio où il est commandé. 5. Pour chaque contact provenant du terrain (pressostat, thermostat), relever les bornes de l'armoire concernées dans le folio des borniers : c'est là qu'on mesure sans démonter. 6. Établir l'ordre des mesures, du plus simple au plus long. 7. Après intervention, annoter le dossier si une modification a été faite.</div>\n<p>La même démarche sert à préparer une <strong>modification</strong> : ajouter une alarme, remplacer un régulateur, raccorder une supervision. On identifie les bornes disponibles, les contacts libres des appareils (via les références croisées), la protection du circuit concerné, puis on dessine la modification sur le dossier avant de câbler.</p>\n<p>Dans une épreuve écrite, les questions types sont : identifier un appareil par son repère et sa fonction ; décrire les conditions de mise en marche d'un récepteur ; expliquer les conséquences d'un défaut (un contact qui ne se ferme plus) ; indiquer où mesurer pour vérifier une hypothèse ; choisir un calibre de protection à partir des données de la plaque d'un moteur.</p>"
      },
      {
       "titre": "Exemple : le document",
       "contenu": "\n<p>Le dossier d'une chambre froide positive comporte notamment les folios suivants, décrits ici en texte.</p>\n<p><strong>Folio 3, puissance compresseur.</strong> Colonnes 1 à 3 : arrivée 3 × 400 V + N + PE par l'interrupteur-sectionneur Q1. Colonne 4 : disjoncteur moteur QF1, réglage thermique 6,3 A. Colonne 5 : contacts de puissance 1-2, 3-4, 5-6 du contacteur KM1. Colonne 6 : compresseur M1 raccordé par les bornes X1:1, X1:2, X1:3, terre X1:PE. Sous KM1, une référence vers la bobine en 5.3.</p>\n<p><strong>Folio 5, commande.</strong> Ligne de la bobine KM1 (colonne 3), de haut en bas : fusible F2 (2 A), contact NO 13-14 de QF1 (fermé quand le disjoncteur est enclenché), bornes X2:5 et X2:6 vers le pressostat HP de sécurité BH (contact NF qui s'ouvre sur hausse de pression, réarmement manuel), bornes X2:7 et X2:8 vers le pressostat BP de régulation BL (contact qui se ferme quand la pression dépasse le seuil d'enclenchement), contact NF 21-22 d'un relais de contrôle de phases KA1, bobine A1-A2 de KM1. Colonne 1 : sortie relais « froid » du régulateur A1 (bornes 5-6 du régulateur) alimentant la bobine de l'électrovanne Y1 par X2:3 et X2:4.</p>\n<p><strong>Plaque du compresseur</strong> fournie en annexe : 400 V triphasé, intensité maximale de fonctionnement 5,6 A, intensité rotor bloqué 32 A.</p>\n<p>Questions posées : décrire les conditions de marche du compresseur ; expliquer pourquoi le compresseur peut rester à l'arrêt alors que le régulateur demande du froid ; indiquer où mesurer pour vérifier le pressostat HP ; justifier le réglage de QF1.</p>"
      },
      {
       "titre": "Exemple : l'analyse modèle",
       "contenu": "\n<p><strong>Conditions de marche.</strong> La bobine de KM1 est alimentée, donc le compresseur tourne, si et seulement si toutes les conditions suivantes sont réunies : fusible F2 intact ; disjoncteur moteur QF1 enclenché ; pression HP inférieure au seuil de sécurité et pressostat BH réarmé ; pression BP supérieure au seuil d'enclenchement du pressostat BL ; ordre et présence des phases corrects (KA1 au repos). Ces contacts sont en série : c'est un ET logique.</p>\n<p><strong>Compresseur à l'arrêt alors que le régulateur demande du froid.</strong> La demande de froid du régulateur ne commande pas directement le compresseur : elle ouvre l'électrovanne Y1. C'est la remontée de la BP qui ferme BL et démarre le compresseur (fonctionnement en pump-down). Si le compresseur reste arrêté, on peut suspecter : une électrovanne qui ne s'ouvre pas (bobine coupée, sortie du régulateur défaillante), donc une BP qui ne remonte pas ; un manque de fluide, avec une BP qui reste sous le seuil d'enclenchement ; un pressostat BH déclenché ; QF1 déclenché ; un défaut de phase signalé par KA1.</p>\n<p><strong>Mesure du pressostat HP.</strong> Le contact de BH est raccordé aux bornes X2:5 et X2:6. Sous tension, avec l'habilitation adaptée, on mesure la tension entre X2:5 et le neutre, puis entre X2:6 et le neutre : présence en X2:5 et absence en X2:6 signifient que le contact est ouvert. On contrôle alors le réarmement et la pression HP réelle au manifold avant toute autre action.</p>\n<p><strong>Réglage de QF1.</strong> Le réglage thermique se fait à l'intensité maximale de fonctionnement indiquée par le constructeur, ici 5,6 A, à l'intérieur de la plage du disjoncteur. Un réglage à 6,3 A, en butée haute, protège moins bien le moteur ; un réglage trop bas provoquerait des déclenchements intempestifs. La partie magnétique doit supporter le courant de démarrage (32 A rotor bloqué) sans déclencher, ce que permettent les disjoncteurs moteurs de calibre adapté.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un dossier de schémas à jour fait gagner un temps considérable en dépannage. Toute modification (ajout d'une sonde, d'une alarme, d'un shunt provisoire retiré) doit être reportée sur le dossier conservé dans l'armoire, daté et signé.</div>"
      }
     ],
     "points_cles": [
      "Le dossier électrique est découpé en folios et en colonnes ; une position se note folio.colonne.",
      "Renvois de potentiel, références croisées et borniers permettent de naviguer d'un folio à l'autre.",
      "Bornes normalisées : 1 à 6 puissance, 13-14 NO, 21-22 NF, A1-A2 bobine, 95-96 et 97-98 relais thermique.",
      "Le schéma représente l'état repos : il faut déterminer l'état réel de chaque contact en fonctionnement.",
      "Une recherche de panne part du récepteur, remonte à sa bobine, puis liste les contacts en série.",
      "Les borniers permettent de mesurer les contacts du terrain sans démonter.",
      "En pump-down, la demande de froid ouvre l'électrovanne ; c'est le pressostat BP qui démarre le compresseur.",
      "Toute modification est reportée sur le dossier conservé dans l'armoire."
     ],
     "lexique": [
      {
       "terme": "Folio",
       "def": "Page numérotée d'un dossier de schémas électriques."
      },
      {
       "terme": "Renvoi de potentiel",
       "def": "Indication de la page et de la colonne où se poursuit un conducteur."
      },
      {
       "terme": "Référence croisée",
       "def": "Indication de la position des contacts d'un appareil par rapport à sa bobine, et inversement."
      },
      {
       "terme": "Bornier",
       "def": "Ensemble de bornes de raccordement entre l'armoire et les équipements extérieurs."
      },
      {
       "terme": "Contact auxiliaire",
       "def": "Contact d'un contacteur ou d'un disjoncteur utilisé dans le circuit de commande."
      },
      {
       "terme": "Relais de contrôle de phases",
       "def": "Relais qui interdit la marche en cas d'absence ou d'inversion de phase."
      },
      {
       "terme": "Réglage thermique",
       "def": "Valeur d'intensité à partir de laquelle la protection contre les surcharges agit."
      },
      {
       "terme": "Déclenchement intempestif",
       "def": "Coupure d'une protection sans défaut réel, souvent due à un mauvais réglage."
      },
      {
       "terme": "Sortie relais",
       "def": "Contact d'un régulateur qui commande un équipement."
      },
      {
       "terme": "Implantation",
       "def": "Plan de disposition des appareils dans une armoire."
      }
     ]
    },
    {
     "id": "bmfer-doc-documentation-constructeur",
     "titre": "Exploiter une documentation constructeur pour sélectionner un matériel",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Repérer la structure d'une fiche technique et d'un tableau de performances.",
      "Identifier les conditions de référence d'une puissance catalogue.",
      "Appliquer des facteurs de correction et interpoler entre deux valeurs d'un tableau.",
      "Vérifier les données électriques, de raccordement et d'implantation d'un matériel.",
      "Extraire d'une fiche de données de sécurité les informations utiles à une intervention."
     ],
     "sections": [
      {
       "titre": "Les documents du constructeur",
       "contenu": "\n<p>Pour chaque matériel, le constructeur publie plusieurs documents complémentaires :</p>\n<table>\n<thead><tr><th>Document</th><th>Contenu</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Fiche technique (ou catalogue)</td><td>Gamme, performances, dimensions, poids, données électriques, raccordements, niveau sonore</td><td>Sélection, commande, étude d'implantation</td></tr>\n<tr><td>Notice d'installation</td><td>Règles de pose, distances de dégagement, longueurs de liaison, charge, mise en service</td><td>Installation</td></tr>\n<tr><td>Manuel de service</td><td>Schémas, codes défauts, tables de sondes, procédures de contrôle</td><td>Dépannage</td></tr>\n<tr><td>Notice d'utilisation</td><td>Fonctionnement pour l'usager</td><td>Prise en main par le client</td></tr>\n<tr><td>Déclaration de conformité, marquage</td><td>Directives et normes respectées</td><td>Réception, conformité</td></tr>\n</tbody>\n</table>\n<p>Ces documents sont souvent en anglais, ou multilingues. Les termes à connaître sont notamment : capacity (puissance), cooling (froid), heating (chaud), evaporating temperature (température d'évaporation), condensing temperature, ambient temperature (température de l'air extérieur), power input (puissance absorbée), running current (intensité de fonctionnement), sound pressure level (niveau de pression acoustique), connections (raccordements), weight (masse).</p>\n<p>Avant d'exploiter un document, on vérifie qu'il correspond bien au matériel concerné : référence complète (une lettre de suffixe peut changer la tension, le fluide ou les options), année de la documentation, version du logiciel de la carte électronique pour un manuel de service. Une documentation ancienne peut indiquer un fluide ou des réglages qui ne s'appliquent plus.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une puissance catalogue n'a de sens qu'avec ses conditions de référence. « 2,1 kW » ne veut rien dire sans le fluide, les températures et, pour un évaporateur, l'écart de température auquel elle est obtenue.</div>"
      },
      {
       "titre": "Lire un tableau de performances",
       "contenu": "\n<p>Les performances d'un évaporateur à air sont données à un écart <strong>ΔT1</strong> (température de l'air entrant − température d'évaporation) de référence, pour un fluide de référence, dans des conditions souvent normalisées (par exemple air entrant à 0 °C et évaporation à −8 °C, soit ΔT1 = 8 K). Pour d'autres conditions, le constructeur fournit des <strong>facteurs de correction</strong>. En première approximation, la puissance d'un évaporateur est proportionnelle à ΔT1.</p>\n<p>Les performances d'un groupe de condensation sont données dans un tableau à double entrée : température d'évaporation (ou d'aspiration) en lignes, température de l'air extérieur en colonnes. Lorsque la valeur cherchée tombe entre deux lignes, on <strong>interpole</strong> linéairement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> interpolation linéaire. Un groupe fournit 1,52 kW à t<sub>0</sub> = −10 °C et 1,95 kW à t<sub>0</sub> = −5 °C, pour un air à 32 °C. Puissance à −7 °C : 1,52 + (1,95 − 1,52) × (−7 − (−10)) ÷ (−5 − (−10)) = 1,52 + 0,43 × 3 ÷ 5 ≈ 1,78 kW.</div>\n<p>Les autres données à exploiter sont :</p>\n<ul>\n<li>le <strong>débit d'air</strong> et la <strong>portée</strong> du jet d'un évaporateur, à comparer à la longueur de la chambre ;</li>\n<li>le <strong>pas d'ailettes</strong>, adapté ou non au givrage ;</li>\n<li>la <strong>puissance des résistances de dégivrage</strong> et leur alimentation ;</li>\n<li>les <strong>données électriques</strong> : tension, intensités, protection recommandée ;</li>\n<li>les <strong>diamètres de raccordement</strong> liquide et aspiration, qui ne sont pas forcément ceux des conduites à poser ;</li>\n<li>les <strong>dimensions</strong>, la masse et les <strong>dégagements</strong> nécessaires à la circulation de l'air et à la maintenance ;</li>\n<li>le <strong>niveau sonore</strong>, à comparer aux contraintes du voisinage.</li>\n</ul>"
      },
      {
       "titre": "Méthode de sélection pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> sélectionner un matériel dans une documentation. 1. Rassembler les données du besoin : puissance frigorifique, température du local, température extérieure maximale, fluide imposé, contraintes (place, bruit, alimentation électrique). 2. Fixer les conditions de fonctionnement : t<sub>0</sub> à partir de la température du local et du ΔT1 choisi, température extérieure de dimensionnement. 3. Repérer dans la documentation les conditions de référence des tableaux. 4. Corriger les puissances catalogue (ΔT1, fluide) ou interpoler dans les tableaux. 5. Retenir le plus petit modèle dont la puissance corrigée couvre le besoin, sans surdimensionnement excessif. 6. Vérifier les critères secondaires : portée, dimensions, poids, alimentation, raccordements, bruit. 7. Noter la référence exacte, les options et les accessoires pour la commande.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les erreurs les plus fréquentes sont : prendre la puissance nominale sans vérifier ses conditions ; confondre puissance frigorifique et puissance électrique absorbée ; confondre température de l'air et température d'évaporation ; oublier qu'un groupe de condensation perd de la puissance quand la température extérieure monte ; choisir un évaporateur trop puissant qui assèche les produits ou un groupe trop puissant qui fait des courts cycles.</div>"
      },
      {
       "titre": "Exemple : le document et l'analyse modèle",
       "contenu": "\n<p>Besoin : chambre de fruits et légumes à +2 °C, puissance frigorifique 1,4 kW, fluide R449A, ΔT1 souhaité 6 K (produits sensibles au dessèchement), air extérieur maximal 32 °C. La documentation comporte les extraits suivants.</p>\n<table>\n<thead><tr><th>Évaporateur</th><th>Puissance à ΔT1 = 8 K, fluide de référence (kW)</th><th>Débit d'air (m<sup>3</sup>/h)</th><th>Portée (m)</th><th>Pas d'ailettes (mm)</th></tr></thead>\n<tbody>\n<tr><td>Modèle A</td><td>1,60</td><td>950</td><td>5</td><td>4,5</td></tr>\n<tr><td>Modèle B</td><td>2,10</td><td>1 300</td><td>7</td><td>4,5</td></tr>\n<tr><td>Modèle C</td><td>2,90</td><td>1 900</td><td>9</td><td>4,5</td></tr>\n</tbody>\n</table>\n<p>Note de la documentation : facteur de correction pour le R449A = 0,97 ; la puissance est proportionnelle à ΔT1.</p>\n<table>\n<thead><tr><th>Groupe de condensation (R449A)</th><th>t<sub>0</sub> = −10 °C, air 32 °C (kW)</th><th>t<sub>0</sub> = −5 °C, air 32 °C (kW)</th><th>Intensité max. (A)</th></tr></thead>\n<tbody>\n<tr><td>Groupe G1</td><td>1,10</td><td>1,40</td><td>4,1 (230 V mono)</td></tr>\n<tr><td>Groupe G2</td><td>1,52</td><td>1,95</td><td>5,9 (230 V mono)</td></tr>\n</tbody>\n</table>\n<p><strong>Analyse modèle.</strong> Température d'évaporation : t<sub>0</sub> = 2 − 6 = −4 °C. Évaporateur : puissance corrigée = puissance catalogue × (6 ÷ 8) × 0,97. Modèle A : 1,60 × 0,75 × 0,97 ≈ 1,16 kW, insuffisant. Modèle B : 2,10 × 0,75 × 0,97 ≈ 1,53 kW, suffisant. On retient le modèle B, en vérifiant que sa portée de 7 m couvre la longueur de la chambre (4 m). Groupe : à −4 °C, il faut extrapoler légèrement au-delà de −5 °C ou retenir la valeur à −5 °C, plus défavorable. G1 donne 1,40 kW à −5 °C : il couvre juste le besoin, sans aucune marge, et la perte de charge de la conduite d'aspiration abaissera un peu la température réelle à l'aspiration. G2 donne 1,95 kW, soit environ 40 % de marge, ce qui risque de faire baisser t<sub>0</sub> et de multiplier les cycles. Le choix argumenté est G1 si l'étude est confirmée et l'aspiration courte ; sinon G2 avec une régulation adaptée. La réponse attendue n'est pas un modèle « juste », mais un choix justifié par les chiffres et les conséquences.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les logiciels de sélection des fabricants font ces corrections automatiquement et tiennent compte de l'équilibre entre évaporateur et groupe. Le technicien sait néanmoins refaire le calcul à la main pour vérifier un ordre de grandeur ou comparer deux marques dont les conditions de référence diffèrent.</div>"
      },
      {
       "titre": "La fiche de données de sécurité d'un fluide",
       "contenu": "\n<p>Tout fluide frigorigène est accompagné d'une <strong>fiche de données de sécurité</strong> (FDS), rédigée en français, structurée en seize rubriques fixées par la réglementation européenne. Le technicien y cherche surtout :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Information utile</th></tr></thead>\n<tbody>\n<tr><td>2 — Identification des dangers</td><td>Pictogrammes et mentions de danger (gaz sous pression, gaz inflammable…)</td></tr>\n<tr><td>4 — Premiers secours</td><td>Conduite à tenir en cas d'inhalation, de contact avec la peau ou les yeux (gelures)</td></tr>\n<tr><td>5 — Lutte contre l'incendie</td><td>Moyens d'extinction, produits de décomposition dangereux</td></tr>\n<tr><td>6 — Rejet accidentel</td><td>Ventilation, évacuation, mesures en cas de fuite</td></tr>\n<tr><td>7 — Manipulation et stockage</td><td>Température maximale de stockage des bouteilles, aération</td></tr>\n<tr><td>8 — Protection individuelle</td><td>Valeurs limites d'exposition, EPI</td></tr>\n<tr><td>9 — Propriétés</td><td>Point d'ébullition, densité de vapeur par rapport à l'air, limites d'inflammabilité</td></tr>\n<tr><td>14 et 15 — Transport, réglementation</td><td>Numéro ONU, classement, règlement F-Gas, PRP</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on s'appuie sur la FDS du fournisseur réellement utilisé, dans sa version à jour. La FDS d'un autre fluide ou d'un autre fournisseur, même pour un mélange « équivalent », peut contenir des valeurs différentes.</div>"
      }
     ],
     "points_cles": [
      "Fiche technique, notice d'installation, manuel de service et notice d'utilisation ont des usages distincts.",
      "Une puissance catalogue se lit toujours avec ses conditions de référence.",
      "La puissance d'un évaporateur est corrigée selon ΔT1 et le fluide.",
      "Entre deux valeurs d'un tableau, on interpole linéairement.",
      "On retient le plus petit matériel dont la puissance corrigée couvre le besoin, puis on vérifie les critères secondaires.",
      "Un choix de matériel se justifie par les chiffres et par ses conséquences de fonctionnement.",
      "La FDS comporte seize rubriques ; dangers, secours, fuite, stockage, EPI et propriétés sont les plus utiles en intervention.",
      "Le vocabulaire anglais des fiches techniques fait partie du métier."
     ],
     "lexique": [
      {
       "terme": "Fiche technique",
       "def": "Document du constructeur décrivant les caractéristiques et performances d'un matériel."
      },
      {
       "terme": "Conditions de référence",
       "def": "Conditions de température et de fluide dans lesquelles une performance est donnée."
      },
      {
       "terme": "ΔT1",
       "def": "Écart entre la température de l'air entrant dans l'évaporateur et la température d'évaporation."
      },
      {
       "terme": "Facteur de correction",
       "def": "Coefficient qui adapte une performance catalogue à d'autres conditions."
      },
      {
       "terme": "Interpolation linéaire",
       "def": "Calcul d'une valeur intermédiaire entre deux valeurs connues d'un tableau."
      },
      {
       "terme": "Portée",
       "def": "Distance sur laquelle le jet d'air d'un évaporateur reste efficace."
      },
      {
       "terme": "Dégagement",
       "def": "Espace libre à prévoir autour d'un appareil pour l'air et la maintenance."
      },
      {
       "terme": "Running current",
       "def": "Intensité de fonctionnement indiquée dans une documentation en anglais."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité d'un produit chimique, en seize rubriques."
      },
      {
       "terme": "Numéro ONU",
       "def": "Numéro d'identification d'une matière dangereuse pour le transport."
      }
     ]
    },
    {
     "id": "bmfer-doc-fiche-intervention-registre",
     "titre": "Analyser une fiche d'intervention, un registre et un historique de relevés",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire la structure de la fiche d'intervention réglementaire et du registre d'un équipement.",
      "Vérifier la conformité et la cohérence d'une fiche d'intervention.",
      "Calculer une charge en t éq. CO2, une périodicité de contrôle et un taux de fuite annuel.",
      "Repérer une dérive dans un historique de relevés de fonctionnement.",
      "Rédiger un avis argumenté et des préconisations à partir de ces documents."
     ],
     "sections": [
      {
       "titre": "Les documents et leur rôle",
       "contenu": "\n<p>La maintenance d'une installation frigorifique laisse une trace écrite continue, que l'épreuve d'analyse exploite souvent :</p>\n<ul>\n<li>la <strong>fiche d'intervention</strong> réglementaire (formulaire Cerfa n° 15497), établie à chaque intervention sur le circuit d'un équipement concerné ;</li>\n<li>le <strong>registre</strong> de l'équipement, tenu par le détenteur, qui regroupe les fiches, les rapports de contrôle et les factures de fluide ;</li>\n<li>les <strong>rapports de visite</strong> de l'entreprise de maintenance, avec les relevés de fonctionnement ;</li>\n<li>les <strong>enregistrements</strong> de températures de la supervision ou du régulateur.</li>\n</ul>\n<p>Lire ces documents permet de répondre à trois questions : l'installation est-elle en règle ? Fuit-elle ? Son fonctionnement dérive-t-il ?</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> ces documents se lisent ensemble et dans le temps. Une fiche isolée peut paraître correcte alors que la série des fiches révèle une fuite chronique.</div>"
      },
      {
       "titre": "Structure de la fiche d'intervention",
       "contenu": "\n<p>La fiche d'intervention comporte plusieurs cadres, que l'on retrouve quelle que soit la version du formulaire :</p>\n<table>\n<thead><tr><th>Cadre</th><th>Contenu à vérifier</th></tr></thead>\n<tbody>\n<tr><td>Opérateur</td><td>Nom de l'entreprise, numéro d'attestation de capacité, nom du technicien</td></tr>\n<tr><td>Détenteur</td><td>Nom et adresse du site</td></tr>\n<tr><td>Équipement</td><td>Identification, type, fluide (désignation R…), charge totale en kg et en t éq. CO<sub>2</sub></td></tr>\n<tr><td>Nature de l'intervention</td><td>Assemblage, mise en service, modification, maintenance, contrôle d'étanchéité périodique ou non, démantèlement, autre</td></tr>\n<tr><td>Détecteur manuel de fuite</td><td>Identification et date de son dernier contrôle</td></tr>\n<tr><td>Système de détection permanent</td><td>Présence ou absence</td></tr>\n<tr><td>Fuites constatées</td><td>Présence, localisation, réparation réalisée ou non</td></tr>\n<tr><td>Quantité de fluide chargée</td><td>Totale, dont fluide vierge, recyclé ou régénéré</td></tr>\n<tr><td>Quantité de fluide récupérée</td><td>Totale, avec destination (traitement, réutilisation) et identification du contenant</td></tr>\n<tr><td>Signatures</td><td>Opérateur et détenteur</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler une fiche d'intervention en cinq points. 1. Complétude : tous les cadres utiles sont-ils renseignés et signés ? 2. Validité : l'attestation de capacité et le contrôle du détecteur sont-ils à jour à la date de l'intervention ? 3. Calcul : la charge en t éq. CO<sub>2</sub> est-elle juste (kg × PRP ÷ 1 000) et la périodicité indiquée cohérente ? 4. Cohérence : les quantités chargées sont-elles compatibles avec les fuites déclarées ? Une charge sans fuite constatée ni réparée est une alerte. 5. Suite donnée : la date du prochain contrôle est-elle indiquée et respectée ?</div>"
      },
      {
       "titre": "Taux de fuite et suivi des quantités",
       "contenu": "\n<p>Le <strong>taux de fuite annuel</strong> d'un équipement s'estime à partir des quantités de fluide rechargées sur douze mois, rapportées à la charge totale :</p>\n<p><strong>taux de fuite (%) = quantité rechargée sur 12 mois ÷ charge totale × 100</strong></p>\n<p>Ce calcul suppose que les recharges compensent des fuites. Une installation bien construite et bien entretenue a un taux de fuite très faible, de l'ordre de quelques pour cent par an ou moins. Un taux élevé traduit une fuite non localisée ou mal réparée, et un coût important pour le client : le fluide perdu, mais aussi la baisse de performance qui précède chaque recharge.</p>\n<p>Le bilan des quantités sert aussi à vérifier que le fluide récupéré lors des interventions a bien suivi la filière de traitement, et qu'aucune quantité ne « disparaît » entre récupération et remise au distributeur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne confond pas la quantité chargée lors d'une remise en service après réparation (le circuit avait été vidé et le fluide récupéré) avec un complément de charge lié à une fuite. Seul le second compte dans l'estimation des pertes ; le premier s'équilibre avec la quantité récupérée.</div>"
      },
      {
       "titre": "Lire un historique de relevés",
       "contenu": "\n<p>Les rapports de visite préventive contiennent des relevés de fonctionnement pris à intervalles réguliers. Présentés en tableau, ils permettent de repérer une <strong>dérive</strong>, c'est-à-dire l'évolution progressive d'un paramètre, bien avant la panne. Pour qu'une comparaison soit valable, les relevés doivent avoir été pris dans des conditions proches : même consigne, température extérieure voisine, installation en régime stabilisé et non en descente en température ou juste après un dégivrage.</p>\n<table>\n<thead><tr><th>Évolution observée au fil des visites</th><th>Piste à privilégier</th></tr></thead>\n<tbody>\n<tr><td>Surchauffe qui augmente, sous-refroidissement qui baisse, bulles au voyant</td><td>Fuite lente de fluide</td></tr>\n<tr><td>Écart entre température de condensation et air extérieur qui augmente</td><td>Encrassement progressif du condenseur</td></tr>\n<tr><td>Écart entre air de la chambre et température d'évaporation qui augmente</td><td>Encrassement ou givrage de l'évaporateur, ventilation défaillante</td></tr>\n<tr><td>Temps de fonctionnement du compresseur qui s'allonge</td><td>Perte de puissance ou augmentation des apports (porte, isolation)</td></tr>\n<tr><td>Intensité du compresseur qui diminue avec une BP qui monte</td><td>Usure interne du compresseur</td></tr>\n</tbody>\n</table>\n<p>Une dérive se décrit avec des chiffres : valeur de départ, valeur actuelle, vitesse d'évolution. Elle justifie une intervention programmée, moins coûteuse qu'un dépannage en urgence.</p>"
      },
      {
       "titre": "Exemple : le document",
       "contenu": "\n<p>Le dossier concerne une chambre froide négative d'un supermarché, au R449A (PRP 1 397), de charge totale 18 kg, sans détection permanente de fuite. Il contient un extrait du registre et un historique de relevés.</p>\n<table>\n<thead><tr><th>Date</th><th>Nature</th><th>Fuite constatée</th><th>Fluide chargé</th><th>Fluide récupéré</th><th>Observation</th></tr></thead>\n<tbody>\n<tr><td>Mars, année N</td><td>Contrôle périodique</td><td>Non</td><td>0 kg</td><td>0 kg</td><td>Vignette bleue</td></tr>\n<tr><td>Août, année N</td><td>Dépannage « température haute »</td><td>Non</td><td>2,0 kg</td><td>0 kg</td><td>« Complément de charge »</td></tr>\n<tr><td>Décembre, année N</td><td>Dépannage « température haute »</td><td>Non recherchée</td><td>3,0 kg</td><td>0 kg</td><td>Détecteur : contrôle de plus de 12 mois</td></tr>\n<tr><td>Mars, année N+1</td><td>Contrôle périodique</td><td>Oui, brasure sur l'évaporateur</td><td>0 kg</td><td>0 kg</td><td>Vignette rouge, réparation à programmer</td></tr>\n</tbody>\n</table>\n<table>\n<thead><tr><th>Relevés (visites préventives)</th><th>Mars N</th><th>Juin N</th><th>Oct. N</th><th>Mars N+1</th></tr></thead>\n<tbody>\n<tr><td>Température chambre (°C)</td><td>−20</td><td>−20</td><td>−18</td><td>−17</td></tr>\n<tr><td>Surchauffe (K)</td><td>6</td><td>7</td><td>11</td><td>14</td></tr>\n<tr><td>Sous-refroidissement (K)</td><td>4</td><td>3</td><td>1</td><td>0</td></tr>\n<tr><td>Voyant liquide</td><td>Plein</td><td>Plein</td><td>Quelques bulles</td><td>Bulles</td></tr>\n</tbody>\n</table>\n<p>Questions posées : vérifier la périodicité du contrôle ; estimer le taux de fuite ; relever les non-conformités ; proposer les actions.</p>"
      },
      {
       "titre": "Exemple : l'analyse modèle",
       "contenu": "\n<p><strong>Périodicité.</strong> Charge : 18 × 1 397 ÷ 1 000 ≈ 25,1 t éq. CO<sub>2</sub>, comprise entre 5 et 50 t, sans détection permanente : contrôle d'étanchéité tous les 12 mois. Les contrôles de mars N et mars N+1 respectent cette périodicité.</p>\n<p><strong>Taux de fuite.</strong> Entre mars N et mars N+1, 2,0 + 3,0 = 5,0 kg ont été rechargés sans récupération préalable : ce sont des compléments. Taux de fuite ≈ 5 ÷ 18 × 100 ≈ 28 % par an, soit environ 7 t éq. CO<sub>2</sub> rejetées dans l'atmosphère. C'est très élevé.</p>\n<p><strong>Non-conformités.</strong> 1. Des compléments de charge ont été faits en août et en décembre sans fuite localisée ni réparée ; en décembre, la fuite n'a même pas été recherchée. C'est contraire à l'obligation de rechercher et de réparer une fuite avant toute recharge. 2. En décembre, le détecteur utilisé n'avait plus de contrôle valide : le résultat d'une éventuelle recherche n'aurait pas été probant. 3. En mars N+1, la fuite est enfin localisée mais la réparation est seulement « à programmer » : en France, si elle ne peut être faite rapidement, l'équipement doit être arrêté et vidangé ; le délai doit donc être fixé et court.</p>\n<p><strong>Lecture des relevés.</strong> L'historique confirme une fuite lente commencée dès l'été N : la surchauffe augmente régulièrement (6 puis 14 K), le sous-refroidissement disparaît, des bulles apparaissent au voyant et la chambre ne tient plus sa consigne. Ces signes étaient visibles dès octobre N, avant la deuxième recharge.</p>\n<p><strong>Actions proposées.</strong> Réparer la brasure de l'évaporateur sans attendre, après récupération du fluide ; réaliser un essai d'étanchéité à l'azote de l'ensemble du circuit, la fuite trouvée n'étant peut-être pas la seule ; tirer au vide et recharger par pesée ; effectuer un nouveau contrôle d'étanchéité après la réparation, puis un suivi rapproché ; mettre à jour le registre ; proposer au client l'installation d'une détection permanente et, à moyen terme, l'étude d'un fluide à plus faible PRP.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un contrôle administratif, l'inspecteur demande le registre et recoupe les quantités. Un registre comme celui de l'exemple expose le détenteur et l'opérateur à des sanctions. Pour le technicien, la règle est simple : pas de recharge sans recherche de fuite, et chaque recherche avec un détecteur contrôlé.</div>"
      }
     ],
     "points_cles": [
      "Fiche d'intervention, registre, rapports et enregistrements se lisent ensemble et dans la durée.",
      "La fiche indique opérateur, détenteur, équipement, nature, détecteur, fuites, fluide chargé et récupéré.",
      "Un complément de charge sans fuite localisée ni réparée est une non-conformité.",
      "Le détecteur doit avoir un contrôle valide à la date de l'intervention.",
      "Taux de fuite annuel = quantité rechargée sur 12 mois ÷ charge totale × 100.",
      "La recharge après vidange et récupération ne compte pas comme une perte.",
      "Une surchauffe qui augmente et un sous-refroidissement qui disparaît signalent une fuite lente.",
      "L'analyse se conclut par des actions concrètes et hiérarchisées."
     ],
     "lexique": [
      {
       "terme": "Registre",
       "def": "Dossier tenu par le détenteur rassemblant l'historique réglementaire d'un équipement."
      },
      {
       "terme": "Taux de fuite",
       "def": "Part de la charge perdue sur une année, estimée par les recharges."
      },
      {
       "terme": "Complément de charge",
       "def": "Ajout de fluide sans vidange préalable, généralement pour compenser une fuite."
      },
      {
       "terme": "Détection permanente",
       "def": "Système fixe qui alerte en cas de présence de fluide dans l'air."
      },
      {
       "terme": "Vignette rouge",
       "def": "Marquage d'un équipement présentant une fuite non encore réparée."
      },
      {
       "terme": "Non-conformité réglementaire",
       "def": "Écart par rapport à une obligation légale."
      },
      {
       "terme": "Fuite lente",
       "def": "Perte progressive de fluide qui dégrade le fonctionnement sur plusieurs mois."
      },
      {
       "terme": "Historique de relevés",
       "def": "Suite chronologique des mesures de fonctionnement d'une installation."
      },
      {
       "terme": "Contrôle administratif",
       "def": "Vérification par les services de l'État du respect de la réglementation."
      },
      {
       "terme": "Préconisation",
       "def": "Action recommandée au client, avec son degré d'urgence."
      }
     ]
    },
    {
     "id": "bmfer-doc-cctp-commande",
     "titre": "Du CCTP à la commande : exploiter les pièces écrites d'un chantier",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les pièces écrites d'un marché de travaux et leur rôle.",
      "Extraire d'un CCTP les exigences techniques qui s'imposent à l'installateur.",
      "Vérifier la cohérence entre CCTP, plans, fiches techniques et quantitatif.",
      "Établir un bon de commande et contrôler un bon de livraison.",
      "Signaler par écrit une incohérence ou une non-conformité."
     ],
     "sections": [
      {
       "titre": "Les pièces écrites d'un marché",
       "contenu": "\n<p>Sur un chantier neuf ou de rénovation, les travaux du lot « froid » ou « CVC » sont définis par un ensemble de documents appelés <strong>pièces écrites</strong> du marché, complétées par les plans.</p>\n<table>\n<thead><tr><th>Document</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>CCAP (cahier des clauses administratives particulières)</td><td>Règles administratives et financières : délais, pénalités, paiements, réception</td></tr>\n<tr><td>CCTP (cahier des clauses techniques particulières)</td><td>Description technique des ouvrages à réaliser : matériels, performances, mise en œuvre, essais, documents à fournir</td></tr>\n<tr><td>DPGF (décomposition du prix global et forfaitaire) ou bordereau de prix</td><td>Liste des postes avec unités et quantités, que l'entreprise chiffre</td></tr>\n<tr><td>Plans</td><td>Implantation des équipements, cheminements, réservations</td></tr>\n<tr><td>Planning</td><td>Enchaînement des interventions des différents lots</td></tr>\n</tbody>\n</table>\n<p>Le CCTP s'organise généralement en deux parties : des <strong>généralités</strong> communes au lot (normes et règlements applicables, limites de prestations avec les autres lots, essais, documents à remettre) et une <strong>description des ouvrages</strong>, article par article. En cas de contradiction entre documents, le CCAP précise l'ordre de priorité ; à défaut, l'entreprise doit poser la question avant d'exécuter.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le CCTP est un engagement contractuel. Ce qui y est écrit est dû par l'entreprise, même si ce n'est pas repris dans le quantitatif ; ce qui n'y figure pas peut faire l'objet d'un devis complémentaire.</div>"
      },
      {
       "titre": "Vocabulaire et formulations",
       "contenu": "\n<p>Les CCTP utilisent des formulations à interpréter avec précision :</p>\n<ul>\n<li>« <strong>ou techniquement équivalent</strong> » : l'entreprise peut proposer un autre matériel que celui cité, à condition de prouver par les fiches techniques qu'il atteint les mêmes performances, et de le faire valider ;</li>\n<li>« <strong>y compris</strong> » : la prestation citée est incluse dans le prix de l'article (par exemple « y compris supports, isolation et raccordement des condensats ») ;</li>\n<li>« <strong>à la charge du lot…</strong> » : la prestation est réalisée par un autre corps d'état (par exemple l'alimentation électrique jusqu'à un interrupteur de proximité, à la charge du lot électricité) ;</li>\n<li>« <strong>suivant prescriptions du fabricant</strong> » : la notice du constructeur devient une exigence contractuelle ;</li>\n<li>« <strong>fourni-posé</strong> » : l'entreprise fournit le matériel et l'installe ; « posé seul » : le matériel est fourni par le client.</li>\n</ul>\n<p>Les <strong>limites de prestations</strong> sont essentielles : qui perce les murs, qui fournit le câble d'alimentation, qui réalise le socle de l'unité extérieure, qui raccorde l'évacuation des condensats au réseau d'eaux usées. Une limite mal lue se traduit par un oubli au chiffrage ou un conflit sur le chantier.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une exigence peut figurer dans les généralités et non dans l'article de l'ouvrage. Exemple : « tous les fluides frigorigènes mis en œuvre auront un PRP inférieur à 750 ». Un matériel conforme à son article mais pas aux généralités n'est pas conforme au marché.</div>"
      },
      {
       "titre": "Méthode : exploiter les pièces écrites",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1. Lire les généralités du CCTP et noter toutes les exigences transversales (fluide, normes, bruit, essais, documents à remettre, garanties). 2. Lire l'article de l'ouvrage et établir la liste des exigences : matériel, performances, accessoires, mise en œuvre. 3. Vérifier chaque exigence sur la fiche technique du matériel prévu. 4. Contrôler les quantités de la DPGF sur les plans (nombre d'unités, longueurs de liaisons). 5. Relever les limites de prestations et les interfaces avec les autres lots. 6. Lister les incohérences et les points à clarifier, et les transmettre par écrit au conducteur de travaux ou au maître d'œuvre. 7. Préparer la liste du matériel et le bon de commande.</div>\n<p>À la livraison, le contrôle du matériel est une étape à part entière : on compare le <strong>bon de livraison</strong> au <strong>bon de commande</strong> (références, quantités), on vérifie l'état des colis en présence du livreur et l'on note les réserves sur le bon avant de le signer. Un matériel endommagé ou non conforme ne doit pas être posé.</p>"
      },
      {
       "titre": "Exemple : le document",
       "contenu": "\n<p>Le dossier concerne la climatisation de trois bureaux d'une petite entreprise. Extraits du CCTP, lot « Climatisation » :</p>\n<ul>\n<li>Généralités : « Les fluides frigorigènes auront un PRP inférieur à 750. Niveau de pression acoustique des unités intérieures inférieur ou égal à 30 dB(A) en petite vitesse. Les essais d'étanchéité et de vide feront l'objet d'un procès-verbal remis au maître d'œuvre. L'alimentation électrique jusqu'à l'interrupteur de proximité de l'unité extérieure est à la charge du lot Électricité. »</li>\n<li>Article 3.1 : « Fourniture et pose d'un système multisplit réversible, 1 unité extérieure en terrasse sur plots antivibratiles, 3 unités murales de 2,5 kW froid chacune, marque X modèle Y ou techniquement équivalent, y compris liaisons frigorifiques isolées, supports, raccordement des condensats sur les attentes du lot Plomberie, mise en service. »</li>\n</ul>\n<table>\n<thead><tr><th>DPGF, article 3.1</th><th>Unité</th><th>Quantité</th></tr></thead>\n<tbody>\n<tr><td>Unité extérieure multisplit</td><td>U</td><td>1</td></tr>\n<tr><td>Unités intérieures murales 2,5 kW</td><td>U</td><td>3</td></tr>\n<tr><td>Liaisons frigorifiques isolées 1/4 - 3/8</td><td>ml</td><td>30</td></tr>\n</tbody>\n</table>\n<p>Fiche technique du modèle prévu : fluide R32 ; unité intérieure 2,5 kW, niveau sonore 21 dB(A) en petite vitesse ; liaisons 1/4 - 3/8 ; longueur totale maximale des liaisons 50 m, longueur maximale par unité 25 m. Sur le plan, les longueurs mesurées entre l'unité extérieure et chaque unité intérieure sont de 12 m, 15 m et 19 m. Le bon de livraison reçu mentionne : 1 unité extérieure, 3 unités intérieures, 3 couronnes de 15 m de liaisons isolées 1/4 - 3/8.</p>\n<p>Questions : vérifier la conformité du matériel au CCTP ; contrôler la quantité de liaisons ; contrôler la livraison ; identifier les interfaces avec les autres lots.</p>"
      },
      {
       "titre": "Exemple : l'analyse modèle",
       "contenu": "\n<p><strong>Conformité du matériel.</strong> Le R32 a un PRP de 675, inférieur à 750 : conforme aux généralités. Le niveau sonore de 21 dB(A) est inférieur à 30 dB(A) : conforme. La puissance de 2,5 kW par unité intérieure correspond à l'article. Le système est réversible : conforme.</p>\n<p><strong>Quantité de liaisons.</strong> Longueur totale mesurée : 12 + 15 + 19 = 46 m de chaque paire de liaisons, inférieure aux 50 m admis par le constructeur, et chaque liaison est inférieure à 25 m : l'installation est techniquement possible. En revanche, la DPGF ne prévoit que 30 ml : la quantité est sous-estimée de 16 m, sans compter les chutes. Il faut le signaler par écrit au maître d'œuvre, car la DPGF ne correspond pas aux plans ; l'écart a une incidence sur le prix et sur la charge complémentaire en fluide à prévoir selon la notice.</p>\n<p><strong>Contrôle de la livraison.</strong> Trois couronnes de 15 m font 45 m, alors que les longueurs nécessaires sont 12, 15 et 19 m : la liaison de 19 m ne peut pas être réalisée d'un seul tenant avec une couronne de 15 m, et un raccord intermédiaire ajouterait un point de fuite. La livraison n'est pas adaptée : il faut commander au moins une couronne de 20 ou 25 m, en vérifiant la marge de coupe. Le reste de la livraison est conforme en nombre, sous réserve du contrôle de l'état des colis et des références exactes.</p>\n<p><strong>Interfaces.</strong> Lot Électricité : alimentation jusqu'à l'interrupteur de proximité de l'unité extérieure ; il reste à notre charge le raccordement de l'unité et la liaison de communication entre unités. Lot Plomberie : attentes d'évacuation des condensats, dont il faut vérifier la position et la hauteur sur les plans pour garantir un écoulement gravitaire ; sinon prévoir une pompe de relevage. Lot Gros œuvre ou étanchéité : support en terrasse et traversée de toiture, à préciser.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> toute incohérence repérée est signalée par écrit (courriel, fiche de question ou compte rendu de chantier) avant l'exécution. Un oubli signalé en amont devient un avenant négocié ; découvert après coup, il devient une perte pour l'entreprise ou un litige.</div>"
      }
     ],
     "points_cles": [
      "CCAP, CCTP, DPGF, plans et planning forment les pièces du marché.",
      "Le CCTP comprend des généralités transversales et une description des ouvrages, toutes deux contractuelles.",
      "« Ou techniquement équivalent » impose de prouver l'équivalence par les fiches techniques.",
      "« Y compris » inclut la prestation dans le prix ; « à la charge du lot… » la confie à un autre corps d'état.",
      "Les quantités de la DPGF se vérifient toujours sur les plans.",
      "Chaque exigence du CCTP se vérifie sur la fiche technique du matériel prévu.",
      "Le bon de livraison se compare au bon de commande et les réserves s'écrivent avant signature.",
      "Toute incohérence se signale par écrit avant exécution."
     ],
     "lexique": [
      {
       "terme": "CCTP",
       "def": "Cahier des clauses techniques particulières : description technique des travaux d'un marché."
      },
      {
       "terme": "CCAP",
       "def": "Cahier des clauses administratives particulières : règles administratives et financières du marché."
      },
      {
       "terme": "DPGF",
       "def": "Décomposition du prix global et forfaitaire : liste chiffrée des postes de travaux."
      },
      {
       "terme": "Limite de prestations",
       "def": "Frontière entre les travaux de deux corps d'état."
      },
      {
       "terme": "Fourni-posé",
       "def": "Prestation comprenant la fourniture et l'installation du matériel."
      },
      {
       "terme": "Techniquement équivalent",
       "def": "Matériel différent de celui prescrit mais aux performances prouvées identiques."
      },
      {
       "terme": "Bon de commande",
       "def": "Document qui engage l'achat d'un matériel auprès d'un fournisseur."
      },
      {
       "terme": "Bon de livraison",
       "def": "Document qui accompagne la marchandise et liste ce qui est livré."
      },
      {
       "terme": "Réserve à la livraison",
       "def": "Mention écrite d'un manque ou d'un dommage constaté à la réception d'une livraison."
      },
      {
       "terme": "Avenant",
       "def": "Modification écrite d'un marché, par exemple pour des travaux supplémentaires."
      }
     ]
    }
   ]
  }
 ]
};
