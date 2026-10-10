/* Polymates — Bac pro Maintenance des véhicules — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-maintenance-vehicules"] = {
 "id": "bp-maintenance-vehicules",
 "nom": "Maintenance des véhicules",
 "icone": "🎓",
 "couleur": "#c8887a",
 "intro": "Le bac pro Maintenance des véhicules forme des techniciens d'atelier capables de réaliser l'entretien périodique, la maintenance corrective et le diagnostic des véhicules à motorisation thermique, hybride ou électrique : mécanicien et technicien automobile, technicien en véhicules industriels, mécanicien motocycles. Ce cours de première et de terminale, fondé sur le référentiel rénové (première session d'examen en 2028), approfondit le cours de seconde de la famille des métiers de la maintenance des matériels et des véhicules : organisation, qualité et sécurité de l'intervention, chaînes d'énergie thermiques et électriques, transmissions et liaison au sol, chaînes d'information, mesure et diagnostic, puis savoirs propres à chacune des trois options. Il est organisé en deux blocs : un cours théorique, puis un bloc d'analyse de documents qui montre, exemples commentés à l'appui, comment exploiter ordres de réparation, méthodes constructeur, schémas électriques et hydrauliques, rapports de diagnostic et procès-verbaux de contrôle technique.",
 "options": [
  {
   "id": "vl",
   "nom": "Option VL — Véhicules légers",
   "icone": "🚗",
   "desc": "Entretien, réparation et diagnostic des voitures particulières et utilitaires légers, dont l'électrification, les aides à la conduite et la programmation."
  },
  {
   "id": "tr",
   "nom": "Option TR — Véhicules de transport routier",
   "icone": "🚛",
   "desc": "Maintenance des poids lourds, autocars, autobus et remorques : freinage pneumatique, chaînes cinématiques lourdes, attelages et réglementation du transport."
  },
  {
   "id": "moto",
   "nom": "Option Motocycles",
   "icone": "🏍️",
   "desc": "Maintenance des motos et scooters : moteurs à haut régime, transmissions secondaires, partie cycle, électronique et réglementation des deux-roues."
  }
 ],
 "parties": [
  {
   "titre": "Partie 1 — Organiser l'intervention en qualité et en sécurité",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmv-apres-vente-qualite",
     "titre": "L'entreprise d'après-vente : organisation et démarche qualité",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Situer l'atelier dans l'organisation d'une entreprise d'après-vente et identifier les acteurs",
      "Suivre le circuit d'un ordre de réparation, de la prise de rendez-vous à la restitution",
      "Expliquer les enjeux de la qualité dans l'après-vente : satisfaction, fidélisation, retours atelier",
      "Décrire les principes d'une démarche qualité et d'une certification",
      "Réaliser et tracer le contrôle qualité d'une intervention"
     ],
     "sections": [
      {
       "titre": "Les différents types d'entreprises d'après-vente",
       "contenu": "<p>Le titulaire du bac pro Maintenance des véhicules travaille dans une entreprise d'<strong>après-vente</strong>, c'est-à-dire une entreprise qui entretient et répare des véhicules déjà vendus. Ces entreprises sont de plusieurs types et leur organisation dépend de leur taille et de leur lien avec les constructeurs.</p>\n<table>\n<thead><tr><th>Type d'entreprise</th><th>Lien avec le constructeur</th><th>Caractéristiques</th></tr></thead>\n<tbody>\n<tr><td>Concession (réseau primaire)</td><td>Contrat direct avec la marque</td><td>Vente de véhicules neufs, atelier, magasin de pièces, garantie constructeur, outils de diagnostic de la marque</td></tr>\n<tr><td>Agent (réseau secondaire)</td><td>Contrat avec une concession</td><td>Garage de proximité qui représente la marque, souvent plus petit</td></tr>\n<tr><td>Réparateur indépendant ou sous enseigne</td><td>Aucun contrat de marque (enseigne multimarque possible)</td><td>Toutes marques, outils de diagnostic multimarques, accès aux informations techniques des constructeurs</td></tr>\n<tr><td>Centre d'entretien rapide et pneumaticien</td><td>Enseigne nationale le plus souvent</td><td>Interventions courtes sans rendez-vous : vidange, pneumatiques, freinage, échappement, batterie</td></tr>\n<tr><td>Atelier de flotte</td><td>Atelier intégré à une entreprise de transport, une collectivité, un loueur</td><td>Maintenance de ses propres véhicules, planification forte</td></tr>\n</tbody>\n</table>\n<p>Depuis la réglementation européenne sur la distribution automobile, un réparateur indépendant peut réaliser l'entretien d'un véhicule sous garantie sans faire perdre cette garantie, à condition de respecter le plan d'entretien du constructeur et d'utiliser des pièces de qualité équivalente. Le constructeur doit également donner accès aux informations techniques de réparation. Ce point explique pourquoi un même technicien peut travailler aussi bien sur des documentations de marque que sur des bases de données multimarques.</p>"
      },
      {
       "titre": "L'organisation interne : services et acteurs",
       "contenu": "<p>Dans une entreprise d'après-vente de taille moyenne, l'activité se répartit entre plusieurs services qui échangent en permanence.</p>\n<ul>\n<li>La <strong>réception après-vente</strong> : le <strong>réceptionnaire</strong> (ou conseiller service) accueille le client, réalise le constat contradictoire du véhicule, ouvre l'ordre de réparation et restitue le véhicule.</li>\n<li>L'<strong>atelier</strong> : sous la responsabilité du <strong>chef d'atelier</strong>, les mécaniciens et techniciens réalisent les interventions. Le chef d'atelier planifie, affecte les travaux et contrôle.</li>\n<li>Le <strong>magasin de pièces de rechange</strong> : le magasinier commande, réceptionne et délivre les pièces sur la base des références fournies par l'atelier.</li>\n<li>Le <strong>service garantie</strong> : il constitue les dossiers de prise en charge auprès du constructeur ou de l'assureur.</li>\n<li>La direction après-vente : elle suit les indicateurs (heures facturées, productivité, satisfaction).</li>\n</ul>\n<p>Dans un petit garage, une même personne cumule souvent plusieurs rôles : le chef d'entreprise reçoit les clients, commande les pièces et répare. Le technicien doit donc connaître l'ensemble du circuit, même s'il ne réalise qu'une partie des tâches.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un technicien qui découvre en cours d'intervention un travail supplémentaire (par exemple des plaquettes usées lors d'une vidange) ne le réalise jamais de sa propre initiative. Il informe le réceptionnaire ou le chef d'atelier, qui obtient l'accord du client et met à jour l'ordre de réparation.</div>"
      },
      {
       "titre": "Le circuit de l'ordre de réparation",
       "contenu": "<p>L'<strong>ordre de réparation</strong> (OR) est le document contractuel qui autorise l'intervention. Il porte l'identification du client et du véhicule, le kilométrage, la date et l'heure de restitution prévues, la liste des travaux demandés et la signature du client. Il circule entre tous les services et suit le véhicule tout au long de son séjour.</p>\n<ol>\n<li><strong>Prise de rendez-vous</strong> : le besoin du client est noté, le temps est réservé au planning, les pièces sont éventuellement commandées à l'avance.</li>\n<li><strong>Réception</strong> : constat de l'état du véhicule (rayures, niveau de carburant, objets de valeur), précision de la demande, ouverture de l'OR et signature.</li>\n<li><strong>Affectation</strong> : le chef d'atelier confie l'OR à un technicien selon ses compétences et ses habilitations (par exemple une intervention sur la batterie de traction d'un véhicule électrique exige une habilitation adaptée).</li>\n<li><strong>Intervention</strong> : le technicien prépare, réalise les travaux, note les pièces utilisées et les temps passés, signale les anomalies.</li>\n<li><strong>Contrôle qualité</strong> : vérification du travail, essai éventuel, propreté du véhicule.</li>\n<li><strong>Facturation et restitution</strong> : la facture reprend pièces et main-d'œuvre, le réceptionnaire explique les travaux et les conseils au client.</li>\n</ol>\n<p>La main-d'œuvre est le plus souvent facturée selon un <strong>temps barème</strong> fourni par le constructeur ou par un éditeur de données : c'est le temps prévu pour l'opération dans des conditions normales. Le temps réellement passé par le technicien est appelé <strong>temps pointé</strong>. Le rapport entre les deux mesure l'efficacité de l'atelier.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'efficacité d'un technicien sur une journée. Données : temps barèmes facturés = 7,2 h ; temps pointés sur les OR = 6,4 h ; temps de présence = 7,5 h.<br>1. Efficacité (ou productivité) = temps facturés / temps pointés = 7,2 / 6,4 = 1,125, soit 112,5 %.<br>2. Taux d'occupation = temps pointés / temps de présence = 6,4 / 7,5 ≈ 0,853, soit 85,3 %.<br>3. Interprétation : le technicien travaille plus vite que le barème, mais 1,1 h de sa journée n'a été affectée à aucun OR (attente de pièces, rangement, formation). C'est sur ce temps que l'organisation peut progresser.</div>"
      },
      {
       "titre": "La qualité dans l'après-vente : de quoi parle-t-on ?",
       "contenu": "<p>La <strong>qualité</strong> est l'aptitude d'un service à satisfaire les besoins exprimés et implicites du client. Dans l'après-vente, le client attend que le véhicule soit réparé du premier coup, rendu à l'heure annoncée, propre, pour le prix convenu, avec des explications claires. Un défaut sur l'un de ces points est vécu comme une non-qualité, même si la réparation technique est parfaite.</p>\n<p>On distingue plusieurs coûts de la non-qualité :</p>\n<ul>\n<li>le <strong>retour atelier</strong> (ou « retour client ») : le véhicule revient pour le même problème, l'entreprise refait le travail sans pouvoir le facturer ;</li>\n<li>la réclamation et la perte de confiance : un client mécontent ne revient pas et le fait savoir, notamment par les avis en ligne ;</li>\n<li>les dommages causés au véhicule : rayure, siège taché, roue mal serrée, avec des conséquences qui peuvent aller jusqu'à l'accident.</li>\n</ul>\n<p>Les constructeurs mesurent la satisfaction par des enquêtes envoyées aux clients après chaque passage à l'atelier. Les résultats conditionnent une partie de la rémunération des concessions. L'indicateur le plus suivi est souvent le taux de <strong>réparation du premier coup</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la qualité ne se limite pas au geste technique. Elle comprend le respect des délais, la propreté, la transparence sur les travaux et les prix, et la traçabilité de ce qui a été fait.</div>"
      },
      {
       "titre": "Démarche qualité et certification",
       "contenu": "<p>Une <strong>démarche qualité</strong> est une organisation qui permet de fournir de façon régulière un service conforme et de l'améliorer en continu. Elle repose sur la roue de Deming, ou cycle <strong>PDCA</strong> : <em>Plan</em> (planifier : définir les objectifs et les procédures), <em>Do</em> (réaliser), <em>Check</em> (vérifier par des contrôles et des indicateurs), <em>Act</em> (agir : corriger les écarts et améliorer les procédures).</p>\n<p>Une entreprise peut faire reconnaître sa démarche par une <strong>certification</strong> délivrée par un organisme indépendant après un audit. La norme internationale de référence pour les systèmes de management de la qualité est l'<strong>ISO 9001</strong>. Les constructeurs imposent aussi à leurs réseaux leurs propres standards, vérifiés lors d'audits périodiques : présentation de la réception, propreté de l'atelier, outillage, formation des techniciens. D'autres démarches existent dans le secteur, par exemple pour la gestion environnementale (ISO 14001) ou pour certains métiers (centres de contrôle technique agréés).</p>\n<p>Concrètement, pour le technicien, la démarche qualité se traduit par :</p>\n<ul>\n<li>des <strong>procédures</strong> écrites à appliquer (méthodes constructeur, check-lists, fiches de contrôle) ;</li>\n<li>des <strong>enregistrements</strong> : OR complété, valeurs mesurées notées, couples de serrage cochés, pièces remplacées conservées si le client le demande ;</li>\n<li>la remontée des <strong>non-conformités</strong> : un outil défectueux, une procédure inapplicable, une pièce livrée erronée doivent être signalés pour être traités.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une certification ne garantit pas que chaque réparation soit parfaite ; elle garantit qu'une organisation existe pour détecter les défauts et les corriger. Si les enregistrements sont remplis sans que les contrôles soient réellement faits, le système perd tout son sens et l'entreprise s'expose en cas de litige.</div>"
      },
      {
       "titre": "Le contrôle qualité d'une intervention",
       "contenu": "<p>Le contrôle qualité est réalisé à la fin de chaque intervention, d'abord par le technicien lui-même (<strong>autocontrôle</strong>), puis éventuellement par le chef d'atelier ou un contrôleur désigné pour les opérations sensibles (freinage, direction, liaison au sol, roues). Il porte sur trois aspects.</p>\n<table>\n<thead><tr><th>Aspect contrôlé</th><th>Exemples de vérifications</th></tr></thead>\n<tbody>\n<tr><td>Conformité technique</td><td>Couples de serrage appliqués, niveaux faits, absence de fuite, absence de code défaut après effacement, réinitialisation de l'indicateur d'entretien, essai routier concluant</td></tr>\n<tr><td>Conformité à la commande</td><td>Tous les travaux de l'OR réalisés et seulement ceux-là, pièces conformes aux références, travaux complémentaires validés par le client</td></tr>\n<tr><td>Présentation du véhicule</td><td>Protections retirées (housse, tapis, couvre-ailes), traces de mains nettoyées, réglages de siège et de rétroviseurs remis, outils récupérés</td></tr>\n</tbody>\n</table>\n<p>Le résultat du contrôle est noté sur l'OR ou sur une fiche spécifique, daté et signé. En cas de litige ultérieur, ce document prouve ce qui a été fait.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser l'autocontrôle après remplacement des disques et plaquettes avant.<br>1. Vérifier le serrage des vis d'étrier et des roues au couple prescrit (clé dynamométrique, ordre en croix).<br>2. Pomper à la pédale jusqu'à retrouver une course normale avant tout déplacement.<br>3. Contrôler le niveau de liquide de frein.<br>4. Vérifier l'absence de fuite et le passage des flexibles.<br>5. Réaliser un essai routier avec freinages progressifs pour le rodage, en respectant les consignes du fabricant.<br>6. Noter sur l'OR les couples appliqués et le résultat de l'essai, puis signer.</div>"
      },
      {
       "titre": "Restituer le véhicule et fidéliser le client",
       "contenu": "<p>La restitution est le dernier contact avec le client et pèse beaucoup dans sa perception de la qualité. Le technicien n'est pas toujours présent, mais il prépare les éléments qui permettront au réceptionnaire d'expliquer les travaux : anomalies constatées non traitées, conseils d'usage, prochaine échéance d'entretien.</p>\n<p>La <strong>fidélisation</strong> consiste à faire revenir le client pour ses entretiens suivants. Elle passe par la confiance : un technicien qui signale honnêtement qu'une pièce peut encore attendre le prochain entretien gagne souvent davantage la confiance du client qu'un vendeur insistant. Les préconisations doivent toujours être hiérarchisées : sécurité immédiate, puis risque de panne à court terme, puis confort et anticipation.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une préconisation écrite sur l'OR, par exemple « pneumatiques arrière : 2,5 mm de profondeur restante, remplacement à prévoir avant l'hiver », protège à la fois le client et l'entreprise : le client est informé, et l'entreprise peut prouver qu'elle a fait son devoir de conseil.</div>"
      }
     ],
     "points_cles": [
      "Concessions, agents, indépendants, centres rapides et ateliers de flotte n'ont ni la même organisation ni les mêmes outils",
      "L'ordre de réparation est le document contractuel qui autorise et trace toute l'intervention",
      "Aucun travail supplémentaire n'est réalisé sans l'accord du client transmis par la réception",
      "Le temps barème sert à facturer ; le temps pointé mesure le temps réellement passé",
      "La qualité perçue par le client comprend délai, prix, propreté et explications, pas seulement la réparation",
      "Le retour atelier est le principal coût de la non-qualité",
      "La démarche qualité suit le cycle PDCA ; l'ISO 9001 est la norme de référence du management de la qualité",
      "L'autocontrôle est noté, daté et signé : il fait preuve en cas de litige"
     ],
     "lexique": [
      {
       "terme": "Après-vente",
       "def": "Ensemble des services rendus au client après la vente d'un véhicule : entretien, réparation, pièces, garantie."
      },
      {
       "terme": "Ordre de réparation (OR)",
       "def": "Document signé par le client qui décrit et autorise les travaux à réaliser sur son véhicule."
      },
      {
       "terme": "Temps barème",
       "def": "Temps de référence prévu pour une opération, utilisé pour facturer la main-d'œuvre."
      },
      {
       "terme": "Temps pointé",
       "def": "Temps réellement passé par le technicien sur un ordre de réparation."
      },
      {
       "terme": "Retour atelier",
       "def": "Retour d'un véhicule pour un défaut qui aurait dû être corrigé lors de l'intervention précédente."
      },
      {
       "terme": "Démarche qualité",
       "def": "Organisation qui vise à fournir de façon régulière un service conforme et à l'améliorer en continu."
      },
      {
       "terme": "Cycle PDCA",
       "def": "Cycle d'amélioration continue : planifier, réaliser, vérifier, agir."
      },
      {
       "terme": "Certification",
       "def": "Reconnaissance par un organisme indépendant, après audit, de la conformité d'une organisation à une norme."
      },
      {
       "terme": "Autocontrôle",
       "def": "Contrôle de son propre travail réalisé par le technicien avant de déclarer l'intervention terminée."
      },
      {
       "terme": "Non-conformité",
       "def": "Écart constaté par rapport à une exigence : procédure, référence, valeur, délai."
      }
     ]
    },
    {
     "id": "bmv-prevention-atelier",
     "titre": "Prévenir les risques professionnels et protéger l'environnement à l'atelier",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Analyser une situation de travail pour identifier dangers, situations dangereuses et dommages possibles",
      "Hiérarchiser les mesures de prévention selon les principes généraux de prévention",
      "Exploiter une fiche de données de sécurité pour choisir protections et conduite à tenir",
      "Appliquer les règles de levage et de manutention des véhicules et des organes lourds",
      "Gérer les déchets de l'atelier conformément à la réglementation et assurer leur traçabilité"
     ],
     "sections": [
      {
       "titre": "Du danger au dommage : analyser une situation de travail",
       "contenu": "<p>Le cours de seconde a présenté les notions de danger et de risque, les EPI et les pictogrammes. En première, il s'agit d'<strong>analyser</strong> une situation réelle d'intervention et de choisir des mesures adaptées. On utilise pour cela un enchaînement simple : un <strong>danger</strong> (propriété capable de causer un dommage : une charge suspendue, une tension électrique, un produit corrosif) ne devient dangereux que lorsqu'une personne y est exposée. La <strong>situation dangereuse</strong> décrit cette exposition. Un <strong>événement déclencheur</strong> (rupture, glissement, oubli) transforme alors la situation dangereuse en <strong>dommage</strong> (blessure, maladie).</p>\n<table>\n<thead><tr><th>Danger</th><th>Situation dangereuse</th><th>Événement déclencheur</th><th>Dommage possible</th></tr></thead>\n<tbody>\n<tr><td>Véhicule levé (masse en hauteur)</td><td>Le technicien travaille sous un véhicule sur pont</td><td>Bras de levage mal positionné, véhicule déséquilibré après dépose d'un organe lourd</td><td>Écrasement</td></tr>\n<tr><td>Gaz d'échappement (monoxyde de carbone, particules)</td><td>Moteur tournant dans l'atelier</td><td>Absence d'aspiration branchée</td><td>Intoxication aiguë, maladie respiratoire</td></tr>\n<tr><td>Liquide de refroidissement chaud sous pression</td><td>Ouverture du vase d'expansion moteur chaud</td><td>Dépressurisation brutale</td><td>Brûlure</td></tr>\n<tr><td>Ressort comprimé</td><td>Dépose d'un combiné ressort-amortisseur</td><td>Compresseur mal positionné, griffe qui glisse</td><td>Choc violent, fracture</td></tr>\n</tbody>\n</table>\n<p>Le <strong>risque</strong> s'évalue en combinant la gravité du dommage et la probabilité qu'il se produise (fréquence d'exposition, probabilité de l'événement). L'employeur consigne cette évaluation dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP), qui est obligatoire et doit être mis à jour.</p>"
      },
      {
       "titre": "Hiérarchiser les mesures de prévention",
       "contenu": "<p>Le Code du travail fixe neuf <strong>principes généraux de prévention</strong>. Ils imposent un ordre : on cherche d'abord à supprimer le danger, puis à le réduire à la source, ensuite à protéger collectivement, et seulement en dernier lieu à protéger individuellement. En pratique, à l'atelier, cet ordre se traduit ainsi :</p>\n<ol>\n<li><strong>Supprimer</strong> ou <strong>remplacer</strong> : utiliser un nettoyant de freins sans solvant chloré, remplacer une opération manuelle par un outil adapté.</li>\n<li><strong>Protection collective</strong> : aspiration des gaz d'échappement à la source, ventilation, garde-corps de fosse, éclairage suffisant, balisage d'une zone d'intervention sur véhicule électrique.</li>\n<li><strong>Organisation</strong> : procédures, consignes affichées, formation, habilitations, vérification des équipements.</li>\n<li><strong>Protection individuelle</strong> : gants adaptés au produit, lunettes, chaussures de sécurité, protections auditives.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'EPI est la dernière barrière, jamais la première. Porter des gants ne dispense pas de brancher l'aspiration ou de choisir un produit moins dangereux.</div>"
      },
      {
       "titre": "Le risque chimique et la fiche de données de sécurité",
       "contenu": "<p>L'atelier utilise de nombreux produits dangereux : huiles neuves et usagées, liquides de frein (toxiques, absorbant l'humidité), liquides de refroidissement à base d'éthylène glycol (nocif par ingestion), carburants (inflammables, cancérogènes pour certains composants comme le benzène de l'essence), dégraissants, colles et mastics, électrolyte des batteries au plomb (acide sulfurique, corrosif). Les fumées de moteur diesel sont classées cancérogènes pour l'homme par le Centre international de recherche sur le cancer.</p>\n<p>Chaque produit dangereux est accompagné d'une <strong>fiche de données de sécurité</strong> (FDS) fournie par le fabricant. Elle comprend 16 rubriques normalisées. Le technicien consulte en priorité :</p>\n<ul>\n<li>la rubrique 2 (identification des dangers : pictogrammes, mentions de danger H, conseils de prudence P) ;</li>\n<li>la rubrique 4 (premiers secours) ;</li>\n<li>la rubrique 7 (manipulation et stockage) ;</li>\n<li>la rubrique 8 (contrôle de l'exposition et protection individuelle : type de gants, protection respiratoire) ;</li>\n<li>la rubrique 13 (élimination).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir ses protections pour une vidange de liquide de frein.<br>1. Lire la rubrique 2 de la FDS : relever les mentions de danger (par exemple nocif en cas d'ingestion, risque pour certains organes en cas d'exposition prolongée).<br>2. Lire la rubrique 8 : noter le matériau de gant recommandé (souvent nitrile) et la nécessité de lunettes contre les projections.<br>3. Lire la rubrique 7 : récipient fermé, éloigné des sources d'humidité.<br>4. Lire la rubrique 13 : le liquide usagé est un déchet dangereux à collecter dans un bidon identifié.<br>5. Vérifier la disponibilité d'une fontaine ou d'un flacon rince-œil avant de commencer.</div>"
      },
      {
       "titre": "Levage, calage et manutention",
       "contenu": "<p>Le levage est la première cause d'accidents graves à l'atelier. Les <strong>ponts élévateurs</strong> sont des appareils de levage soumis à des <strong>vérifications générales périodiques</strong> réglementaires réalisées par une personne compétente ; le résultat est consigné dans un registre. Un pont dont la vérification est dépassée ou qui présente une anomalie ne doit pas être utilisé.</p>\n<p>Les règles d'utilisation à appliquer à chaque levage :</p>\n<ul>\n<li>respecter la capacité du pont et les <strong>points de levage</strong> indiqués par le constructeur (sur un véhicule électrique, la batterie de traction occupe le plancher et ne doit jamais servir d'appui) ;</li>\n<li>soulever de quelques centimètres, secouer légèrement le véhicule pour vérifier sa stabilité, puis monter à hauteur de travail ;</li>\n<li>enclencher le verrouillage mécanique (crans) avant d'intervenir sous le véhicule ;</li>\n<li>anticiper le déplacement du centre de gravité lors de la dépose d'organes lourds (boîte de vitesses, essieu, batterie) : utiliser des chandelles de soutien ou une table élévatrice adaptée.</li>\n</ul>\n<p>Le cric rouleur ne sert qu'à lever : on ne travaille jamais sous une charge supportée uniquement par un cric. On place des chandelles de capacité suffisante sous les points prévus.</p>\n<p>Pour la manutention manuelle, les organes lourds (roues de poids lourd, boîtes de vitesses, batteries) sont manipulés avec des aides mécaniques : lève-roue, cric de boîte, potence d'atelier. La posture correcte (dos droit, charge près du corps, jambes fléchies) limite les troubles musculosquelettiques mais ne remplace pas l'aide mécanique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un véhicule de transport routier, une roue complète peut dépasser 100 kg. Sur une moto, le levage se fait sur béquille d'atelier ou lève-moto avec sangles : une moto mal sanglée bascule facilement lors du desserrage d'un écrou de roue.</div>"
      },
      {
       "titre": "Bruit, poussières et ambiances de travail",
       "contenu": "<p>D'autres risques, moins spectaculaires, provoquent des maladies professionnelles.</p>\n<ul>\n<li>Le <strong>bruit</strong> : clés à chocs, compresseur, martelage. Au-delà d'une exposition moyenne de 80 dB(A) sur 8 heures, l'employeur doit mettre des protections auditives à disposition ; à partir de 85 dB(A), leur port est obligatoire.</li>\n<li>Les <strong>poussières de freins et d'embrayage</strong> : elles ne doivent jamais être soufflées à l'air comprimé. On utilise un nettoyant liquide avec bac de récupération ou un aspirateur adapté. Sur des véhicules très anciens, des garnitures contenant de l'amiante peuvent encore se rencontrer.</li>\n<li>Les <strong>fumées de soudage</strong> et de découpe : aspiration à la source obligatoire.</li>\n<li>Le <strong>travail en fosse</strong> : risque de chute, d'accumulation de vapeurs lourdes (carburant), d'éclairage insuffisant.</li>\n</ul>"
      },
      {
       "titre": "Gérer les déchets de l'atelier",
       "contenu": "<p>Le garage est un <strong>producteur de déchets</strong> au sens du Code de l'environnement : il est responsable de ses déchets jusqu'à leur élimination finale. On distingue les <strong>déchets dangereux</strong> (huiles usagées, filtres à huile et à carburant, liquides de frein et de refroidissement, batteries au plomb, chiffons et absorbants souillés, aérosols, boues du séparateur d'hydrocarbures) et les <strong>déchets non dangereux</strong> (pneumatiques usagés, ferrailles, cartons, plastiques non souillés).</p>\n<table>\n<thead><tr><th>Déchet</th><th>Stockage à l'atelier</th><th>Filière</th></tr></thead>\n<tbody>\n<tr><td>Huile moteur usagée</td><td>Cuve dédiée sur rétention, sans mélange avec d'autres liquides</td><td>Ramasseur agréé, régénération ou valorisation</td></tr>\n<tr><td>Batterie au plomb</td><td>Bac étanche résistant aux acides, à l'abri</td><td>Collecte spécifique, recyclage du plomb</td></tr>\n<tr><td>Pneumatiques</td><td>Zone abritée</td><td>Filière de responsabilité élargie du producteur</td></tr>\n<tr><td>Batterie de traction</td><td>Zone dédiée, procédure du constructeur (risque d'emballement thermique)</td><td>Reprise par le constructeur ou un organisme agréé</td></tr>\n<tr><td>Fluide frigorigène récupéré</td><td>Bouteille de récupération identifiée</td><td>Retour au distributeur pour régénération ou destruction</td></tr>\n</tbody>\n</table>\n<p>L'enlèvement des déchets dangereux s'accompagne d'un <strong>bordereau de suivi de déchets</strong> (BSD), aujourd'hui dématérialisé sur la plateforme nationale prévue à cet effet. Il prouve que le déchet a été remis à une filière autorisée. L'entreprise tient également un registre chronologique de ses déchets.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> mélanger du liquide de frein ou de l'eau dans la cuve d'huile usagée peut rendre tout le contenu impropre à la régénération ; le collecteur peut alors refuser l'enlèvement ou le facturer plus cher. Chaque fluide a son bidon, étiqueté.</div>\n<p>Les eaux de lavage des sols et des aires de travail ne doivent pas rejoindre directement le réseau d'eaux pluviales. Elles passent par un <strong>séparateur d'hydrocarbures</strong>, qui retient les huiles et carburants flottants et les boues. Cet équipement est vidangé et entretenu régulièrement par une entreprise spécialisée ; ses boues sont elles-mêmes des déchets dangereux. Enfin, les absorbants utilisés pour une fuite au sol (granulés, boudins) sont collectés comme déchets souillés, jamais balayés vers une grille.</p>"
      },
      {
       "titre": "Réagir en cas d'accident ou d'incident",
       "contenu": "<p>Malgré la prévention, un incident peut survenir : projection de produit dans l'œil, coupure, brûlure, départ de feu, déversement de liquide. L'atelier dispose d'équipements de premier recours dont chaque salarié doit connaître l'emplacement : trousse de secours, rince-œil, extincteurs adaptés (à poudre ou à CO<sub>2</sub> selon les classes de feu), kit anti-pollution, numéros d'urgence affichés. Le salarié formé au secourisme applique la démarche protéger, examiner, alerter, secourir.</p>\n<p>Tout accident, même sans arrêt de travail, doit être signalé. L'analyse des accidents et des <strong>presque-accidents</strong> (situations où le dommage a été évité de justesse) permet de corriger l'organisation avant qu'un accident grave ne survienne. Le technicien qui constate une anomalie sur un équipement (flexible de pont qui suinte, câble de rallonge abîmé, extincteur déplacé) la signale immédiatement à sa hiérarchie.</p>"
      }
     ],
     "points_cles": [
      "Un danger ne produit un dommage que s'il y a situation dangereuse et événement déclencheur",
      "Le risque combine gravité et probabilité ; il est consigné dans le DUERP",
      "Prévention dans l'ordre : supprimer, protéger collectivement, organiser, puis protéger individuellement",
      "La FDS se lit en priorité aux rubriques 2, 4, 7, 8 et 13",
      "On ne travaille jamais sous une charge tenue uniquement par un cric",
      "Les points de levage du constructeur sont impératifs, surtout sur véhicule électrique",
      "Les poussières de freins ne se soufflent jamais à l'air comprimé",
      "Le producteur reste responsable de ses déchets ; le bordereau de suivi en assure la traçabilité"
     ],
     "lexique": [
      {
       "terme": "Danger",
       "def": "Propriété d'un équipement, d'un produit ou d'une situation capable de causer un dommage."
      },
      {
       "terme": "Situation dangereuse",
       "def": "Situation dans laquelle une personne est exposée à un danger."
      },
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels, obligatoire dans toute entreprise employant des salariés."
      },
      {
       "terme": "Principes généraux de prévention",
       "def": "Neuf principes du Code du travail qui hiérarchisent les actions de prévention."
      },
      {
       "terme": "Fiche de données de sécurité (FDS)",
       "def": "Document en 16 rubriques qui décrit les dangers d'un produit et les précautions associées."
      },
      {
       "terme": "Vérification générale périodique",
       "def": "Contrôle réglementaire régulier d'un appareil de levage par une personne compétente."
      },
      {
       "terme": "Déchet dangereux",
       "def": "Déchet présentant une propriété de danger (toxique, inflammable, corrosif, écotoxique…)."
      },
      {
       "terme": "Bordereau de suivi de déchets (BSD)",
       "def": "Document, aujourd'hui dématérialisé, qui trace un déchet dangereux du producteur à l'installation de traitement."
      },
      {
       "terme": "Rétention",
       "def": "Bac ou zone étanche placé sous un stockage de liquide pour recueillir une fuite."
      }
     ]
    },
    {
     "id": "bmv-risque-electrique",
     "titre": "Prévenir le risque électrique sur véhicules électrifiés",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Expliquer les effets du courant électrique sur le corps humain et les facteurs de gravité",
      "Situer une installation embarquée dans les domaines de tension",
      "Identifier les symboles d'habilitation de la norme NF C 18-550 et les opérations autorisées",
      "Décrire les étapes d'une mise hors tension et d'une consignation de la batterie de traction",
      "Choisir les équipements de protection et d'outillage adaptés aux travaux sous tension réduite"
     ],
     "sections": [
      {
       "titre": "Pourquoi un nouveau risque à l'atelier",
       "contenu": "<p>Les véhicules hybrides et électriques embarquent une <strong>batterie de traction</strong> dont la tension nominale est le plus souvent comprise entre environ 200 V et 800 V en courant continu. Les poids lourds et autobus électriques utilisent des tensions comparables, et certaines motos électriques dépassent aussi plusieurs centaines de volts. Le circuit de bord classique 12 V (24 V sur les véhicules de transport routier) ne présente pas de risque d'électrisation, mais peut provoquer des brûlures par court-circuit. Le réseau de traction, lui, peut tuer.</p>\n<p>Le passage du courant dans le corps provoque une <strong>électrisation</strong> ; si elle entraîne la mort, on parle d'<strong>électrocution</strong>. Les effets dépendent de l'intensité qui traverse le corps, de la durée de passage, du trajet (main-main ou main-pieds passent par le cœur) et de la nature du courant. À titre d'ordre de grandeur, quelques dizaines de milliampères suffisent à provoquer une tétanisation des muscles empêchant de lâcher la pièce, puis une fibrillation ventriculaire. L'arc électrique, lors d'un court-circuit sur une batterie de forte énergie, provoque en outre des brûlures graves et des projections de métal fondu.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer le courant traversant le corps. Une personne touche les deux pôles d'une batterie de 400 V ; on prend une résistance du corps de l'ordre de 1 000 Ω (peau sèche, valeur indicative).<br>1. Loi d'Ohm : I = U / R = 400 / 1 000 = 0,4 A, soit 400 mA.<br>2. Comparaison : cette valeur est très supérieure aux seuils de fibrillation (quelques dizaines de mA).<br>3. Conclusion : le contact direct est mortel ; seule la mise hors tension contrôlée permet de travailler sans danger.</div>"
      },
      {
       "titre": "Les domaines de tension",
       "contenu": "<p>La réglementation classe les installations selon leur tension nominale. Les valeurs ne sont pas les mêmes en courant alternatif (AC) et en courant continu (DC), car le corps humain supporte un peu mieux le continu.</p>\n<table>\n<thead><tr><th>Domaine</th><th>Courant alternatif</th><th>Courant continu</th><th>Exemples dans un véhicule</th></tr></thead>\n<tbody>\n<tr><td>Très basse tension (TBT)</td><td>U ≤ 50 V</td><td>U ≤ 120 V</td><td>Réseau de bord 12 V et 24 V, réseau 48 V des hybrides légers</td></tr>\n<tr><td>Basse tension (BT)</td><td>50 V &lt; U ≤ 1 000 V</td><td>120 V &lt; U ≤ 1 500 V</td><td>Batterie de traction, onduleur, moteur électrique, compresseur de climatisation électrique, chargeur embarqué</td></tr>\n</tbody>\n</table>\n<p>Les constructeurs repèrent les câbles de la partie basse tension de traction par une <strong>gaine de couleur orange</strong> et les composants par une étiquette portant le symbole de danger électrique (triangle jaune avec un éclair). Le terme « haute tension », souvent employé dans les ateliers et les documentations, désigne en réalité ce domaine BT de la réglementation.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un véhicule « éteint » n'est pas un véhicule hors tension. La batterie de traction reste chargée, et les condensateurs de l'onduleur peuvent conserver une tension dangereuse pendant plusieurs minutes après l'ouverture des relais. Le temps d'attente indiqué par le constructeur doit être respecté avant toute vérification.</div>"
      },
      {
       "titre": "L'habilitation électrique selon la NF C 18-550",
       "contenu": "<p>L'<strong>habilitation électrique</strong> est la reconnaissance, par l'employeur, de la capacité d'une personne à accomplir en sécurité des tâches fixées vis-à-vis du risque électrique. Elle est délivrée après une formation théorique et pratique, et formalisée par un <strong>titre d'habilitation</strong> signé de l'employeur et du salarié. Elle n'est pas un diplôme : elle est liée à un poste et doit être recyclée périodiquement. Pour les véhicules, la norme de référence est la <strong>NF C 18-550</strong>, qui utilise des symboles terminés par la lettre <strong>L</strong> (pour les opérations sur véhicules et engins).</p>\n<table>\n<thead><tr><th>Symbole</th><th>Personne visée</th><th>Ce qu'elle peut faire</th></tr></thead>\n<tbody>\n<tr><td>B0L</td><td>Exécutant d'opérations d'ordre non électrique</td><td>Intervenir sur un véhicule électrifié sans toucher aux organes de traction (pneumatiques, carrosserie, entretien courant), en respectant les zones et consignes</td></tr>\n<tr><td>B1VL</td><td>Exécutant d'opérations d'ordre électrique</td><td>Réaliser des travaux hors tension sur la partie BT de traction, sous la direction d'un chargé de travaux</td></tr>\n<tr><td>B2VL</td><td>Chargé de travaux d'ordre électrique</td><td>Diriger et réaliser des travaux hors tension et au voisinage sur les organes de traction</td></tr>\n<tr><td>B2VL Essai</td><td>Chargé de travaux habilité aux essais</td><td>Réaliser des essais et mesures sous tension prévus par le constructeur</td></tr>\n<tr><td>BCL</td><td>Chargé de consignation</td><td>Réaliser la consignation électrique du véhicule (mise hors tension sécurisée et vérifiée)</td></tr>\n</tbody>\n</table>\n<p>Le référentiel du bac pro Maintenance des véhicules vise le niveau <strong>B2VL – BCL</strong>. La formation au lycée prépare à l'habilitation, mais c'est l'employeur qui la délivre.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la lettre B signifie basse tension, le chiffre ou la lettre qui suit indique le rôle (0 non électricien, 1 exécutant, 2 chargé de travaux, C consignation), V indique le travail au voisinage, L indique le domaine des véhicules et engins.</div>"
      },
      {
       "titre": "Mise hors tension et consignation : la procédure",
       "contenu": "<p>La <strong>consignation</strong> est l'ensemble des opérations qui mettent la partie de traction hors tension et garantissent qu'elle le reste pendant toute l'intervention. Elle suit les étapes prévues par le constructeur, qui s'organisent toujours selon la même logique.</p>\n<ol>\n<li><strong>Préparer</strong> : identifier le véhicule et sa documentation, baliser la zone de travail, vérifier les EPI et l'outillage isolé, vérifier le bon fonctionnement du vérificateur d'absence de tension (VAT).</li>\n<li><strong>Séparer</strong> : couper le contact, éloigner la clé ou la carte (au moins à la distance prévue), débrancher le chargeur, débrancher la batterie 12 V, puis retirer le <strong>connecteur de service</strong> (ou fusible de maintenance) qui ouvre le circuit de la batterie de traction.</li>\n<li><strong>Condamner</strong> : placer le connecteur de service dans un endroit sous la garde du chargé de consignation, poser un cadenas ou un dispositif de condamnation, apposer une pancarte « ne pas manœuvrer ».</li>\n<li><strong>Attendre</strong> la décharge des condensateurs pendant le temps prescrit.</li>\n<li><strong>Vérifier l'absence de tension</strong> (VAT) aux points indiqués par le constructeur, entre chaque polarité et la masse et entre les deux polarités, après avoir contrôlé le VAT sur une source connue avant et après la mesure.</li>\n<li><strong>Identifier</strong> et signaler l'état consigné sur le véhicule et sur l'ordre de réparation.</li>\n</ol>\n<p>La remise sous tension (<strong>déconsignation</strong>) se fait dans l'ordre inverse, après vérification que tous les connecteurs sont verrouillés, que les capots isolants sont reposés et que personne n'intervient sur le véhicule.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier l'absence de tension sur un connecteur d'onduleur.<br>1. Tester le VAT sur une source de tension connue : il doit indiquer la tension.<br>2. Mesurer entre la borne positive et la borne négative : la valeur doit être inférieure au seuil indiqué par le constructeur (souvent quelques volts).<br>3. Mesurer entre la borne positive et la masse du véhicule, puis entre la borne négative et la masse.<br>4. Retester le VAT sur la source connue pour vérifier qu'il n'est pas tombé en panne pendant la mesure.<br>5. Seulement alors, déclarer l'absence de tension.</div>"
      },
      {
       "titre": "Équipements de protection et outillage",
       "contenu": "<p>Les opérations au voisinage ou sur la partie de traction nécessitent des équipements spécifiques, vérifiés avant chaque utilisation :</p>\n<ul>\n<li><strong>gants isolants</strong> de classe adaptée à la tension (la classe 0 couvre jusqu'à 1 000 V en alternatif), vérifiés par gonflage avant usage pour détecter une perforation, portés avec des surgants de protection mécanique ;</li>\n<li><strong>écran facial</strong> anti-UV contre l'arc électrique ;</li>\n<li><strong>vêtements</strong> sans parties métalliques apparentes, retrait des bijoux, montres et objets conducteurs ;</li>\n<li><strong>outillage isolé</strong> (marquage double triangle et tension d'isolement 1 000 V) ;</li>\n<li><strong>tapis isolant</strong> selon la procédure ;</li>\n<li><strong>VAT</strong> ou multimètre de catégorie de mesure adaptée (CAT III 1 000 V couramment) avec cordons protégés ;</li>\n<li>balisage et <strong>perche de sauvetage</strong> isolante pour dégager une victime sans la toucher.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans la plupart des ateliers, un véhicule électrifié en attente d'intervention sur la traction est identifié par une pancarte et stationné sur un emplacement dédié. Un technicien habilité B0L peut changer les pneumatiques de ce véhicule, mais pas déposer un câble orange, même « juste pour passer ».</div>"
      },
      {
       "titre": "Batteries endommagées et conduite à tenir",
       "contenu": "<p>Une batterie de traction lithium-ion ayant subi un choc, une immersion ou une surchauffe peut entrer en <strong>emballement thermique</strong> : réaction chimique auto-entretenue qui dégage chaleur, gaz toxiques et inflammables, et peut se déclencher plusieurs heures ou jours après l'événement. Les signes d'alerte sont un dégagement de fumée, une odeur âcre, un gonflement du pack, un bruit de crépitement ou une élévation de température.</p>\n<p>La conduite à tenir est fixée par le constructeur et par les consignes de l'entreprise : ne pas intervenir, éloigner les personnes, alerter, placer le véhicule à l'extérieur dans une zone de quarantaine si cela est possible sans danger. En cas d'accident d'électrisation, on coupe ou on fait couper l'alimentation avant de toucher la victime, on dégage la victime avec un objet isolant si nécessaire, on alerte les secours et on pratique les gestes de premiers secours si l'on est formé.</p>"
      }
     ],
     "points_cles": [
      "Le réseau de traction des véhicules électrifiés est classé basse tension : 120 V à 1 500 V en continu",
      "Un véhicule à l'arrêt reste sous tension : batterie chargée et condensateurs",
      "L'habilitation est délivrée par l'employeur, selon la NF C 18-550 pour les véhicules",
      "Le référentiel vise le niveau B2VL – BCL",
      "Consigner : préparer, séparer, condamner, attendre, vérifier l'absence de tension, identifier",
      "Le VAT est contrôlé sur une source connue avant et après la mesure",
      "Gants isolants vérifiés avant chaque usage, écran facial et outillage isolé 1 000 V",
      "Une batterie endommagée peut s'emballer thermiquement longtemps après le choc"
     ],
     "lexique": [
      {
       "terme": "Électrisation",
       "def": "Passage d'un courant électrique dans le corps humain, avec ou sans lésions."
      },
      {
       "terme": "Électrocution",
       "def": "Électrisation entraînant la mort."
      },
      {
       "terme": "Habilitation électrique",
       "def": "Reconnaissance par l'employeur de la capacité d'une personne à effectuer en sécurité des opérations définies vis-à-vis du risque électrique."
      },
      {
       "terme": "NF C 18-550",
       "def": "Norme qui définit les opérations sur véhicules et engins à motorisation électrique et les habilitations correspondantes."
      },
      {
       "terme": "Consignation",
       "def": "Ensemble d'opérations qui mettent et maintiennent un circuit hors tension en sécurité."
      },
      {
       "terme": "Connecteur de service",
       "def": "Dispositif amovible permettant d'ouvrir manuellement le circuit de la batterie de traction."
      },
      {
       "terme": "VAT",
       "def": "Vérificateur d'absence de tension, appareil dédié à la vérification avant intervention."
      },
      {
       "terme": "Emballement thermique",
       "def": "Réaction auto-entretenue d'une cellule lithium-ion qui s'échauffe et peut se propager aux cellules voisines."
      },
      {
       "terme": "Outillage isolé",
       "def": "Outil revêtu d'un isolant garanti pour une tension donnée, identifié par un double triangle."
      }
     ]
    },
    {
     "id": "bmv-climatisation-fluides",
     "titre": "Climatisation et fluides frigorigènes",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Décrire le cycle frigorifique et le rôle de chaque composant d'une boucle de climatisation",
      "Relier pressions et températures du fluide pour interpréter un relevé",
      "Identifier les fluides frigorigènes utilisés et leurs contraintes réglementaires",
      "Décrire la procédure de récupération, de tirage au vide et de charge d'un circuit",
      "Situer l'attestation d'aptitude exigée pour manipuler les fluides"
     ],
     "sections": [
      {
       "titre": "Le principe : transporter de la chaleur",
       "contenu": "<p>Une climatisation ne « fabrique » pas de froid : elle <strong>transporte de la chaleur</strong> de l'habitacle vers l'extérieur. Elle utilise pour cela un <strong>fluide frigorigène</strong> qui change d'état. Lorsqu'un liquide s'évapore, il absorbe de la chaleur (chaleur latente de vaporisation) ; lorsqu'une vapeur se condense, elle en restitue. La température à laquelle se produit ce changement d'état dépend de la pression : à basse pression, le fluide s'évapore à basse température ; à haute pression, il se condense à haute température.</p>\n<p>Le circuit comporte donc deux zones : une zone <strong>basse pression</strong> (BP), froide, où le fluide s'évapore en prenant la chaleur de l'air de l'habitacle, et une zone <strong>haute pression</strong> (HP), chaude, où il se condense en cédant la chaleur à l'air extérieur. Le compresseur et le détendeur font passer le fluide d'une zone à l'autre.</p>"
      },
      {
       "titre": "Les composants de la boucle",
       "contenu": "<table>\n<thead><tr><th>Composant</th><th>Zone</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Compresseur</td><td>Sépare BP et HP</td><td>Aspire la vapeur BP et la refoule en vapeur HP surchauffée. Entraîné par courroie (embrayage électromagnétique ou cylindrée variable) ou électrique sur les véhicules électrifiés</td></tr>\n<tr><td>Condenseur</td><td>HP</td><td>Échangeur placé en face avant : la vapeur se refroidit, se condense en liquide</td></tr>\n<tr><td>Bouteille déshydratante ou filtre déshydrateur</td><td>HP liquide</td><td>Retient l'humidité et les impuretés, sert de réserve de liquide</td></tr>\n<tr><td>Détendeur thermostatique ou orifice calibré</td><td>Sépare HP et BP</td><td>Fait chuter la pression et dose le débit envoyé à l'évaporateur</td></tr>\n<tr><td>Évaporateur</td><td>BP</td><td>Échangeur dans le bloc de chauffage-ventilation : le fluide s'évapore en refroidissant et déshumidifiant l'air soufflé</td></tr>\n<tr><td>Capteurs</td><td>HP et BP</td><td>Capteur de pression HP (protection, gestion du motoventilateur), sonde de température d'évaporateur (anti-givrage)</td></tr>\n</tbody>\n</table>\n<p>Une petite quantité d'<strong>huile</strong> circule avec le fluide pour lubrifier le compresseur. Son type est imposé (PAG pour les compresseurs entraînés par courroie, huile POE ou huile spécifique non conductrice pour les compresseurs électriques). Une erreur d'huile sur un compresseur électrique peut dégrader l'isolement électrique du circuit de traction.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une station de charge utilisée pour un véhicule à compresseur mécanique peut contenir des traces d'huile PAG. Les constructeurs prescrivent des précautions particulières (station dédiée ou procédure de rinçage) pour les véhicules à compresseur électrique.</div>"
      },
      {
       "titre": "Pressions et températures : interpréter un relevé",
       "contenu": "<p>Chaque fluide possède une relation pression-température de saturation donnée par des tables ou par les manomètres de la station. En fonctionnement normal, par une température extérieure modérée, on observe typiquement une pression BP de l'ordre de 1,5 à 3 bar et une pression HP de l'ordre de 10 à 20 bar pour les fluides R134a et R1234yf ; ces valeurs varient fortement avec la température extérieure, le régime moteur et la ventilation. On se réfère toujours aux valeurs du constructeur.</p>\n<table>\n<thead><tr><th>Constat</th><th>BP</th><th>HP</th><th>Hypothèses principales</th></tr></thead>\n<tbody>\n<tr><td>Manque de fluide</td><td>Basse</td><td>Basse</td><td>Fuite, charge insuffisante</td></tr>\n<tr><td>Excès de fluide ou condenseur mal ventilé</td><td>Haute</td><td>Haute</td><td>Surcharge, motoventilateur défaillant, condenseur encrassé</td></tr>\n<tr><td>Compresseur inefficace</td><td>Haute</td><td>Basse</td><td>Usure interne, régulation de cylindrée défaillante, embrayage qui patine</td></tr>\n<tr><td>Restriction (bouchage)</td><td>Très basse, voire en dépression</td><td>Normale ou basse</td><td>Détendeur bloqué, déshydrateur colmaté, humidité gelée</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir un premier diagnostic de climatisation.<br>1. Vérifier les conditions : moteur à régime stabilisé (souvent 1 500 à 2 000 tr/min), climatisation au maximum, recyclage, portes fermées.<br>2. Relever la température extérieure et la température d'air soufflé à la buse centrale.<br>3. Relever BP et HP sur la station ou les manomètres.<br>4. Comparer aux valeurs constructeur pour la température extérieure relevée.<br>5. Croiser avec le tableau des symptômes et les données du calculateur (pression HP lue par le capteur, état de commande du compresseur).<br>6. Si fuite suspectée : contrôle d'étanchéité au détecteur électronique ou par gaz traceur, jamais en ajoutant du fluide « pour voir ».</div>"
      },
      {
       "titre": "Les fluides frigorigènes et leur impact",
       "contenu": "<p>Les fluides frigorigènes sont des gaz fluorés ou des fluides naturels. Leur impact sur le climat est mesuré par le <strong>PRP</strong> (potentiel de réchauffement planétaire, en anglais GWP), qui compare l'effet d'1 kg du gaz à celui d'1 kg de CO<sub>2</sub>.</p>\n<table>\n<thead><tr><th>Fluide</th><th>Usage</th><th>PRP (ordre de grandeur)</th><th>Particularité</th></tr></thead>\n<tbody>\n<tr><td>R134a</td><td>Véhicules anciens, encore en circulation ; certains poids lourds et engins</td><td>Environ 1 430</td><td>Interdit dans les climatisations des voitures particulières neuves dans l'Union européenne</td></tr>\n<tr><td>R1234yf</td><td>Majorité des voitures particulières récentes</td><td>Inférieur à 1 (selon les références)</td><td>Légèrement inflammable (classe A2L), raccords de service spécifiques</td></tr>\n<tr><td>R744 (CO<sub>2</sub>)</td><td>Certaines pompes à chaleur de véhicules électriques</td><td>1</td><td>Pressions de fonctionnement très élevées, plus de 100 bar possibles, outillage dédié</td></tr>\n</tbody>\n</table>\n<p>La directive européenne relative aux climatisations des véhicules à moteur interdit, pour les voitures particulières et utilitaires légers neufs, les fluides de PRP supérieur à 150. Les raccords de service sont différents d'un fluide à l'autre pour éviter les mélanges. L'étiquette sous le capot indique le fluide et la quantité de charge.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on ne mélange jamais deux fluides et on ne « complète » jamais un circuit sans avoir récupéré et pesé la charge. La quantité se charge en masse, en grammes, à la valeur indiquée par le constructeur.</div>"
      },
      {
       "titre": "Récupération, tirage au vide et charge",
       "contenu": "<p>Toute intervention qui ouvre le circuit se fait avec une <strong>station de récupération et de recharge</strong> adaptée au fluide. La procédure type est la suivante :</p>\n<ol>\n<li><strong>Récupération</strong> : la station aspire le fluide, sépare l'huile entraînée (dont elle mesure la quantité) et stocke le fluide dans sa bouteille. La masse récupérée est comparée à la charge nominale : un écart important confirme une fuite.</li>\n<li><strong>Intervention</strong> : remplacement du composant, avec les joints neufs lubrifiés à l'huile prescrite ; le déshydrateur est remplacé selon les préconisations (souvent à chaque ouverture prolongée du circuit).</li>\n<li><strong>Tirage au vide</strong> : la station abaisse la pression du circuit pendant une durée prescrite (souvent 20 à 30 minutes) pour évaporer l'humidité, puis surveille la remontée de pression : une remontée signale une fuite.</li>\n<li><strong>Injection d'huile</strong> : la quantité récupérée plus celle des composants remplacés.</li>\n<li><strong>Charge</strong> : injection de la masse de fluide prescrite, puis contrôle de fonctionnement et des pressions.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les interventions sont tracées. Sur certains équipements contenant une charge importante, des contrôles d'étanchéité périodiques et un registre sont obligatoires. Le fluide récupéré, s'il est contaminé, est rendu au fournisseur pour traitement.</div>"
      },
      {
       "titre": "Le cadre réglementaire de la manipulation",
       "contenu": "<p>Le dégazage volontaire de fluide frigorigène dans l'atmosphère est interdit. La manipulation des fluides est réservée aux personnes titulaires d'une <strong>attestation d'aptitude</strong> prévue par le Code de l'environnement (article R.543-106) ; la <strong>catégorie V</strong> concerne les équipements de climatisation des véhicules. Le référentiel du bac pro vise ce niveau. Par ailleurs, l'entreprise doit disposer d'une attestation de capacité ou d'une organisation conforme pour acheter et manipuler ces fluides, et utiliser des équipements de récupération adaptés.</p>\n<p>Pour le R1234yf, légèrement inflammable, des précautions supplémentaires s'appliquent : atelier ventilé, absence de flamme ou de point chaud, détecteurs de fuite compatibles.</p>"
      },
      {
       "titre": "La pompe à chaleur des véhicules électriques",
       "contenu": "<p>Un véhicule électrique ne dispose pas de la chaleur perdue d'un moteur thermique pour chauffer l'habitacle. Une résistance électrique (chauffage CTP) consomme beaucoup d'énergie et réduit l'autonomie. Une <strong>pompe à chaleur</strong> utilise la même boucle frigorifique, mais en inversant le sens du transfert grâce à des vannes : l'échangeur avant prend de la chaleur à l'air extérieur, l'échangeur intérieur la restitue à l'habitacle. Son rendement s'exprime par le <strong>coefficient de performance</strong> (COP) : un COP de 2,5 signifie que 1 kW électrique consommé fournit 2,5 kW de chaleur. La boucle est souvent couplée à la gestion thermique de la batterie de traction.</p>\n<p>Sur ces véhicules, un même échangeur, appelé <strong>refroidisseur</strong> ou <em>chiller</em>, permet au fluide frigorigène de refroidir le liquide qui circule dans la batterie lors d'une recharge rapide ou d'une forte sollicitation. La climatisation devient alors un organe de la chaîne de traction : une panne de climatisation peut limiter la puissance de recharge. Le diagnostic doit donc intégrer les vannes pilotées, les capteurs de pression et de température supplémentaires, et les stratégies du calculateur de gestion thermique décrites par le constructeur.</p>\n<h4>Le confort thermique et la régulation</h4>\n<p>Sur une climatisation automatique, le calculateur règle en permanence la température de l'air soufflé, le débit du pulseur et la répartition de l'air (pare-brise, aérateurs, pieds) à partir de plusieurs informations : température intérieure, température extérieure, ensoleillement, consigne choisie par les occupants, température de l'évaporateur. Des volets motorisés mélangent l'air refroidi et l'air réchauffé. Un symptôme de type « air pas assez froid côté passager » peut donc venir d'un volet de mixage bloqué alors que la boucle frigorifique fonctionne parfaitement. Le relevé des pressions ne suffit pas : il faut aussi lire les paramètres et tester les actionneurs avec l'outil de diagnostic.</p>"
      }
     ],
     "points_cles": [
      "La climatisation transporte de la chaleur grâce aux changements d'état du fluide",
      "Le compresseur et le détendeur séparent la zone basse pression de la zone haute pression",
      "La pression de saturation d'un fluide est liée à sa température",
      "BP et HP basses ensemble évoquent un manque de fluide",
      "Le R1234yf remplace le R134a sur les voitures particulières neuves ; le R744 travaille à très haute pression",
      "Récupérer, tirer au vide, injecter l'huile, charger en masse : jamais de complément à l'aveugle",
      "La manipulation des fluides exige l'attestation d'aptitude, catégorie V pour les véhicules",
      "La pompe à chaleur améliore l'autonomie des véhicules électriques en hiver"
     ],
     "lexique": [
      {
       "terme": "Fluide frigorigène",
       "def": "Fluide qui transporte la chaleur dans une boucle frigorifique en changeant d'état."
      },
      {
       "terme": "Chaleur latente",
       "def": "Chaleur absorbée ou restituée lors d'un changement d'état, sans variation de température."
      },
      {
       "terme": "Évaporateur",
       "def": "Échangeur dans lequel le fluide s'évapore en prenant la chaleur de l'air de l'habitacle."
      },
      {
       "terme": "Condenseur",
       "def": "Échangeur dans lequel le fluide se condense en cédant sa chaleur à l'air extérieur."
      },
      {
       "terme": "Détendeur",
       "def": "Organe qui abaisse la pression du fluide liquide et dose son débit vers l'évaporateur."
      },
      {
       "terme": "PRP",
       "def": "Potentiel de réchauffement planétaire : impact climatique d'un gaz comparé au CO2."
      },
      {
       "terme": "Tirage au vide",
       "def": "Mise en dépression du circuit pour éliminer l'humidité et vérifier l'étanchéité."
      },
      {
       "terme": "Attestation d'aptitude",
       "def": "Document qui autorise une personne à manipuler les fluides frigorigènes, par catégorie d'équipement."
      },
      {
       "terme": "Pompe à chaleur",
       "def": "Boucle frigorifique utilisée pour chauffer l'habitacle en prélevant de la chaleur à l'extérieur."
      },
      {
       "terme": "COP",
       "def": "Coefficient de performance : chaleur fournie divisée par énergie électrique consommée."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Chaînes d'énergie : motorisations thermiques, hybrides et électriques",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmv-architectures-chaine-energie",
     "titre": "Architectures des véhicules thermiques, hybrides et électriques",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire un véhicule comme une chaîne d'énergie : alimenter, distribuer, convertir, transmettre",
      "Distinguer les architectures thermique, hybride légère, hybride, hybride rechargeable et électrique",
      "Identifier les modes de fonctionnement d'un véhicule hybride",
      "Calculer puissances, énergies et rendements le long d'une chaîne de traction",
      "Situer les composants d'un véhicule électrifié et leurs flux d'énergie"
     ],
     "sections": [
      {
       "titre": "Le véhicule vu comme une chaîne d'énergie",
       "contenu": "<p>Tout véhicule, quelle que soit sa motorisation, peut se décrire par une <strong>chaîne d'énergie</strong> organisée en fonctions : <strong>alimenter</strong> (stocker l'énergie à bord : réservoir de carburant, batterie), <strong>distribuer</strong> (doser l'énergie envoyée : injection, onduleur), <strong>convertir</strong> (transformer l'énergie en énergie mécanique : moteur thermique ou machine électrique), <strong>transmettre</strong> (adapter et conduire l'énergie mécanique jusqu'aux roues : embrayage, boîte, différentiel, transmissions). La <strong>chaîne d'information</strong>, étudiée plus loin, pilote cette chaîne d'énergie à partir des consignes du conducteur et des mesures des capteurs.</p>\n<table>\n<thead><tr><th>Fonction</th><th>Véhicule thermique</th><th>Véhicule électrique à batterie</th></tr></thead>\n<tbody>\n<tr><td>Alimenter</td><td>Réservoir de carburant (énergie chimique)</td><td>Batterie de traction (énergie électrochimique)</td></tr>\n<tr><td>Distribuer</td><td>Pompe, injecteurs, papillon</td><td>Onduleur (électronique de puissance)</td></tr>\n<tr><td>Convertir</td><td>Moteur à combustion interne</td><td>Machine électrique</td></tr>\n<tr><td>Transmettre</td><td>Embrayage, boîte de vitesses, pont</td><td>Réducteur à rapport fixe, différentiel</td></tr>\n</tbody>\n</table>\n<p>Cette lecture fonctionnelle est très utile au diagnostic : un manque de puissance se recherche fonction par fonction, en suivant le flux d'énergie depuis la source jusqu'aux roues.</p>"
      },
      {
       "titre": "Puissance, énergie et rendement",
       "contenu": "<p>La <strong>puissance</strong> P, en watts (W), est la quantité d'énergie transférée par seconde. L'<strong>énergie</strong> E, en joules (J), est la puissance multipliée par la durée : E = P × t. Dans l'automobile, on exprime souvent l'énergie électrique en <strong>kilowattheures</strong> (kWh) : 1 kWh = 3 600 000 J. Une batterie de 60 kWh peut fournir 60 kW pendant une heure, ou 15 kW pendant quatre heures.</p>\n<p>Chaque conversion entraîne des pertes, principalement sous forme de chaleur. Le <strong>rendement</strong> η d'un composant est le rapport de la puissance utile sortante à la puissance absorbée entrante. Le rendement global d'une chaîne est le produit des rendements de ses composants.</p>\n<table>\n<thead><tr><th>Composant</th><th>Rendement typique (ordre de grandeur)</th></tr></thead>\n<tbody>\n<tr><td>Moteur essence en usage routier</td><td>20 à 35 % selon le point de fonctionnement, maximum un peu au-delà de 40 % sur les moteurs les plus récents</td></tr>\n<tr><td>Moteur diesel</td><td>30 à 40 %, maximum supérieur à 40 % sur les moteurs de poids lourds</td></tr>\n<tr><td>Machine électrique</td><td>85 à 95 %</td></tr>\n<tr><td>Onduleur</td><td>95 à 98 %</td></tr>\n<tr><td>Boîte de vitesses, réducteur</td><td>90 à 97 %</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le rendement global d'une chaîne de traction électrique et la puissance prélevée sur la batterie.<br>Données : puissance demandée aux roues 40 kW ; rendements : réducteur 0,96, machine électrique 0,93, onduleur 0,97, batterie (pertes internes) 0,97.<br>1. Rendement global : η = 0,96 × 0,93 × 0,97 × 0,97 ≈ 0,84.<br>2. Puissance chimique sortie batterie : P = 40 / 0,84 ≈ 47,6 kW.<br>3. Pertes : 47,6 − 40 = 7,6 kW, évacués sous forme de chaleur par le circuit de refroidissement.<br>4. Comparaison : pour la même puissance aux roues, un moteur thermique au rendement de 30 % devrait recevoir environ 133 kW de puissance carburant.</div>"
      },
      {
       "titre": "Les familles d'architectures",
       "contenu": "<p>On classe les véhicules selon la place de l'électricité dans la traction.</p>\n<table>\n<thead><tr><th>Architecture</th><th>Tension de traction</th><th>Ce que fait la partie électrique</th><th>Recharge sur le réseau</th></tr></thead>\n<tbody>\n<tr><td>Thermique avec arrêt-démarrage</td><td>12 V</td><td>Arrêt du moteur à l'arrêt du véhicule, alterno-démarreur ou démarreur renforcé</td><td>Non</td></tr>\n<tr><td>Hybride légère (<em>mild hybrid</em>, souvent 48 V)</td><td>48 V (TBT)</td><td>Alterno-démarreur qui assiste le moteur et récupère l'énergie au freinage ; pas ou très peu de roulage électrique</td><td>Non</td></tr>\n<tr><td>Hybride (<em>full hybrid</em>, HEV)</td><td>Environ 200 à 300 V et plus</td><td>Roulage électrique sur de courtes distances, assistance, récupération</td><td>Non</td></tr>\n<tr><td>Hybride rechargeable (PHEV)</td><td>Environ 300 à 400 V</td><td>Batterie plus grosse, autonomie électrique de quelques dizaines de kilomètres</td><td>Oui</td></tr>\n<tr><td>Électrique à batterie (BEV)</td><td>Environ 400 V ou 800 V</td><td>Traction exclusivement électrique</td><td>Oui</td></tr>\n<tr><td>Électrique à pile à combustible (FCEV)</td><td>Plusieurs centaines de volts</td><td>Une pile transforme l'hydrogène en électricité, avec batterie tampon</td><td>Plein d'hydrogène</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'hybride léger 48 V reste en très basse tension, mais il peut délivrer des courants très élevés ; un court-circuit provoque des arcs et des brûlures. Les autres architectures électrifiées comportent une partie de traction dans le domaine basse tension et imposent les procédures de consignation.</div>"
      },
      {
       "titre": "Les architectures hybrides : série, parallèle, combinée",
       "contenu": "<p>Dans un hybride, deux convertisseurs (moteur thermique et machine électrique) peuvent entraîner les roues. Leur agencement détermine les modes possibles.</p>\n<ul>\n<li><strong>Hybride série</strong> : le moteur thermique n'entraîne pas les roues. Il fait tourner une génératrice qui recharge la batterie ou alimente la machine électrique de traction. C'est le principe des prolongateurs d'autonomie et de certains autobus.</li>\n<li><strong>Hybride parallèle</strong> : moteur thermique et machine électrique sont reliés mécaniquement à la transmission et peuvent additionner leurs couples. La machine électrique est souvent placée entre le moteur et la boîte (position appelée P2), parfois sur l'essieu arrière (P4), ce qui crée une transmission intégrale.</li>\n<li><strong>Hybride combiné (série-parallèle)</strong> : un <strong>train épicycloïdal</strong> répartit la puissance du moteur thermique entre les roues et une génératrice. Deux machines électriques permettent de faire varier en continu le rapport de démultiplication, sans boîte de vitesses classique.</li>\n</ul>\n<p>Les modes de fonctionnement sont pilotés par le calculateur de gestion hybride : démarrage et roulage à faible vitesse en électrique, assistance électrique lors des accélérations, recharge de la batterie par le moteur thermique, <strong>freinage récupératif</strong> où la machine électrique fonctionne en génératrice, arrêt complet du moteur thermique à l'arrêt.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un véhicule hybride, le moteur thermique peut démarrer seul à tout moment lorsque le système est actif (état « prêt » ou « READY »), par exemple pour recharger la batterie. On n'intervient jamais dans le compartiment moteur d'un hybride sans avoir vérifié que le système est désactivé.</div>"
      },
      {
       "titre": "Les composants d'un véhicule électrique à batterie",
       "contenu": "<p>Un véhicule électrique à batterie comporte un nombre limité de grands ensembles, reliés par des câbles orange de forte section :</p>\n<ul>\n<li>la <strong>batterie de traction</strong>, avec son calculateur de gestion (BMS) et ses relais principaux ;</li>\n<li>l'<strong>onduleur</strong>, qui transforme le courant continu de la batterie en courant alternatif triphasé de fréquence variable pour la machine ;</li>\n<li>la <strong>machine électrique</strong> de traction, souvent intégrée avec l'onduleur et le réducteur dans un même ensemble appelé groupe motopropulseur électrique ;</li>\n<li>le <strong>chargeur embarqué</strong>, qui convertit le courant alternatif du réseau en courant continu pour la recharge lente et accélérée ;</li>\n<li>le <strong>convertisseur continu-continu</strong> (DC/DC), qui alimente le réseau 12 V à partir de la batterie de traction et remplace l'alternateur ;</li>\n<li>les auxiliaires électriques de forte puissance : compresseur de climatisation, chauffage, pompe à chaleur ;</li>\n<li>le <strong>circuit de gestion thermique</strong>, qui refroidit ou réchauffe batterie, onduleur et machine.</li>\n</ul>\n<p>Le flux d'énergie s'inverse lors de la récupération au freinage : la machine fonctionne en génératrice, l'onduleur redresse le courant, la batterie se recharge.</p>"
      },
      {
       "titre": "Particularités selon les types de véhicules",
       "contenu": "<p>Les mêmes architectures se retrouvent sur toutes les catégories de véhicules, avec des contraintes différentes :</p>\n<ul>\n<li>les <strong>voitures particulières</strong> utilisent toutes les architectures ; l'électrique à batterie et l'hybride progressent fortement dans les ventes ;</li>\n<li>les <strong>véhicules de transport routier</strong> électrifiés (autobus urbains, porteurs de distribution, tracteurs régionaux) embarquent des batteries de plusieurs centaines de kilowattheures ; les autocars et tracteurs longue distance restent majoritairement diesel, avec des solutions au gaz naturel, au biocarburant ou à l'hydrogène ;</li>\n<li>les <strong>motocycles</strong> électriques se développent surtout pour les scooters urbains et les motos légères ; la batterie est parfois amovible pour être rechargée au domicile.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant d'accepter un véhicule à l'atelier, le réceptionnaire identifie son type de motorisation à partir de la carte grise (rubrique P.3, type de carburant ou source d'énergie) et des logos. Cette identification conditionne l'affectation à un technicien habilité et l'emplacement de travail.</div>"
      },
      {
       "titre": "Lire un flux d'énergie pour raisonner en atelier",
       "contenu": "<p>La lecture en chaîne d'énergie n'est pas un exercice théorique : elle structure le raisonnement devant une panne. Prenons un véhicule hybride rechargeable dont le client signale une autonomie électrique devenue très faible. En suivant la chaîne depuis la source, on se pose successivement les questions suivantes : la batterie est-elle réellement chargée à 100 % à la fin de la recharge (fonction alimenter) ? Le chargeur embarqué délivre-t-il la puissance attendue ? L'onduleur et la machine signalent-ils des limitations de puissance (fonction distribuer et convertir) ? Les consommateurs auxiliaires, notamment le chauffage électrique par temps froid, prélèvent-ils une part importante de l'énergie ?</p>\n<p>Chaque question renvoie à une mesure ou à un paramètre lisible avec l'outil de diagnostic : état de charge, état de santé de la batterie, puissance de recharge, températures, historique des limitations. On évite ainsi de remplacer un composant coûteux sans avoir localisé la fonction défaillante.</p>\n<p>Le même raisonnement s'applique à un véhicule thermique : un manque de puissance peut venir de l'alimentation (pression de carburant), de la distribution de l'énergie (injecteurs, papillon), de la conversion (compression, combustion) ou de la transmission (embrayage qui patine). La chaîne d'énergie fournit un plan de recherche ordonné, que la méthodologie du diagnostic viendra compléter.</p>"
      }
     ],
     "points_cles": [
      "Une chaîne d'énergie comprend les fonctions alimenter, distribuer, convertir et transmettre",
      "Énergie = puissance × durée ; 1 kWh = 3,6 MJ",
      "Le rendement global d'une chaîne est le produit des rendements de ses composants",
      "La traction électrique a un rendement global bien supérieur à celui d'un moteur thermique",
      "Hybride léger 48 V, hybride, hybride rechargeable et électrique se distinguent par la tension et le rôle de la partie électrique",
      "Hybride série, parallèle et combiné diffèrent par la liaison mécanique entre moteur thermique et roues",
      "Le convertisseur DC/DC remplace l'alternateur sur un véhicule électrique",
      "Un hybride en état « prêt » peut démarrer son moteur thermique sans action du conducteur"
     ],
     "lexique": [
      {
       "terme": "Chaîne d'énergie",
       "def": "Ensemble des fonctions qui stockent, distribuent, convertissent et transmettent l'énergie jusqu'à l'effecteur."
      },
      {
       "terme": "Rendement",
       "def": "Rapport entre la puissance utile fournie et la puissance absorbée par un composant."
      },
      {
       "terme": "Kilowattheure (kWh)",
       "def": "Unité d'énergie égale à l'énergie fournie par une puissance de 1 kW pendant une heure."
      },
      {
       "terme": "Hybride léger",
       "def": "Véhicule thermique assisté par un alterno-démarreur en 48 V, sans roulage électrique prolongé."
      },
      {
       "terme": "Hybride rechargeable (PHEV)",
       "def": "Hybride dont la batterie se recharge sur le réseau électrique et autorise une autonomie électrique notable."
      },
      {
       "terme": "Freinage récupératif",
       "def": "Freinage pendant lequel la machine électrique fonctionne en génératrice et recharge la batterie."
      },
      {
       "terme": "Onduleur",
       "def": "Convertisseur qui transforme le courant continu de la batterie en courant alternatif pour la machine de traction."
      },
      {
       "terme": "Convertisseur DC/DC",
       "def": "Convertisseur qui abaisse la tension de traction pour alimenter le réseau de bord 12 V ou 24 V."
      },
      {
       "terme": "Train épicycloïdal",
       "def": "Engrenage à trois arbres (planétaire, porte-satellites, couronne) qui répartit ou combine des puissances."
      }
     ]
    },
    {
     "id": "bmv-moteur-performances",
     "titre": "Moteur thermique : combustion, performances et technologies",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Exploiter les courbes caractéristiques d'un moteur : couple, puissance, consommation spécifique",
      "Calculer une puissance à partir du couple et du régime",
      "Expliquer les principes de la combustion en essence et en diesel et leurs anomalies",
      "Décrire le fonctionnement de la distribution variable et de la suralimentation",
      "Relier une mesure de compression ou d'étanchéité à l'état mécanique du moteur"
     ],
     "sections": [
      {
       "titre": "Rappels et caractéristiques du moteur",
       "contenu": "<p>Le cours de seconde a présenté les organes du moteur, le cycle à quatre temps et les notions de cylindrée, de couple et de puissance. On approfondit ici les grandeurs qui caractérisent les performances du moteur et les technologies qui les améliorent.</p>\n<p>Le <strong>rapport volumétrique</strong> ε est le rapport entre le volume du cylindre lorsque le piston est au point mort bas (cylindrée unitaire plus volume de la chambre) et le volume de la chambre de combustion au point mort haut : ε = (V + v) / v. Plus il est élevé, meilleur est le rendement théorique. Il est typiquement compris entre 10 et 14 pour un moteur essence (limité par le risque de cliquetis) et entre 15 et 18 pour un diesel actuel.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un rapport volumétrique.<br>Données : alésage 75 mm, course 84,8 mm, volume de chambre v = 36 cm<sup>3</sup>.<br>1. Cylindrée unitaire : V = π × D<sup>2</sup> / 4 × C = 3,1416 × 7,5<sup>2</sup> / 4 × 8,48 ≈ 374,6 cm<sup>3</sup> (dimensions converties en cm).<br>2. Rapport volumétrique : ε = (374,6 + 36) / 36 ≈ 11,4.<br>3. Contrôle de cohérence : valeur habituelle pour un moteur essence à injection directe.</div>"
      },
      {
       "titre": "Les courbes caractéristiques",
       "contenu": "<p>Le constructeur mesure le moteur au banc à pleine charge et trace, en fonction du régime N (tr/min), trois courbes :</p>\n<ul>\n<li>la courbe de <strong>couple</strong> C (N·m), qui traduit l'effort de rotation disponible au vilebrequin ; elle présente un maximum ou un plateau, souvent large sur les moteurs suralimentés ;</li>\n<li>la courbe de <strong>puissance</strong> P (kW), qui croît avec le régime jusqu'à un maximum situé à haut régime ;</li>\n<li>la courbe de <strong>consommation spécifique</strong> Cs (g/kWh), qui indique la masse de carburant consommée pour produire 1 kWh. Son minimum correspond au meilleur rendement.</li>\n</ul>\n<p>La puissance se calcule à partir du couple et de la vitesse angulaire ω (rad/s) : P = C × ω, avec ω = 2π × N / 60. En pratique : P (kW) = C (N·m) × N (tr/min) / 9 549.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un point d'une courbe.<br>Données : couple de 250 N·m à 2 000 tr/min ; consommation spécifique à ce point 240 g/kWh.<br>1. ω = 2π × 2 000 / 60 ≈ 209,4 rad/s.<br>2. P = 250 × 209,4 ≈ 52 360 W, soit environ 52,4 kW.<br>3. Débit de carburant : 52,4 kW × 240 g/kWh ≈ 12 570 g/h, soit environ 12,6 kg/h.<br>4. Rendement : le gazole fournit environ 42,6 MJ/kg, soit 11,8 kWh/kg ; énergie consommée par kWh produit = 0,240 × 11,8 ≈ 2,84 kWh ; rendement ≈ 1 / 2,84 ≈ 35 %.</div>\n<p>Les moteurs suralimentés modernes privilégient un couple élevé à bas régime, ce qui permet d'utiliser des rapports de boîte longs et de faire fonctionner le moteur dans sa zone de faible consommation spécifique : c'est le principe du <strong>downsizing</strong> (petite cylindrée suralimentée).</p>"
      },
      {
       "titre": "La combustion en essence et en diesel",
       "contenu": "<p>Dans un moteur à <strong>allumage commandé</strong> (essence), le mélange air-carburant est enflammé par l'étincelle de la bougie. Le dosage est proche du <strong>mélange stœchiométrique</strong>, environ 14,7 kg d'air pour 1 kg d'essence, noté λ = 1 (λ est le rapport entre la quantité d'air réelle et la quantité stœchiométrique). Cette condition est indispensable au fonctionnement du catalyseur trois voies.</p>\n<p>Dans un moteur à <strong>allumage par compression</strong> (diesel), l'air est comprimé jusqu'à une température suffisante pour enflammer spontanément le gazole injecté sous très haute pression. Le moteur fonctionne toujours en excès d'air (λ supérieur à 1) ; la charge est réglée par la quantité de carburant injectée, et non par un papillon.</p>\n<table>\n<thead><tr><th>Anomalie de combustion</th><th>Moteur concerné</th><th>Description et conséquences</th></tr></thead>\n<tbody>\n<tr><td>Cliquetis</td><td>Essence</td><td>Auto-inflammation d'une partie du mélange avant l'arrivée du front de flamme ; bruit métallique, risque de destruction des pistons. Le calculateur le détecte par un capteur de cliquetis et retarde l'avance</td></tr>\n<tr><td>Pré-allumage</td><td>Essence</td><td>Inflammation avant l'étincelle par un point chaud ; très destructeur, notamment à bas régime et forte charge sur les petits moteurs suralimentés</td></tr>\n<tr><td>Raté de combustion</td><td>Tous</td><td>Absence de combustion dans un cylindre ; à-coups, surconsommation, surchauffe du catalyseur</td></tr>\n<tr><td>Fumées noires</td><td>Diesel</td><td>Manque d'air ou excès de carburant : turbocompresseur défaillant, filtre à air colmaté, injecteur qui fuit</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "La distribution variable",
       "contenu": "<p>Le cours de seconde a décrit le rôle de la distribution : ouvrir et fermer les soupapes au bon moment. Le moment optimal d'ouverture dépend en réalité du régime et de la charge. Les systèmes de <strong>distribution variable</strong> modifient ce calage en fonctionnement :</p>\n<ul>\n<li>le <strong>déphaseur d'arbre à cames</strong> fait tourner l'arbre à cames de quelques dizaines de degrés par rapport à sa poulie, grâce à la pression d'huile pilotée par une électrovanne ;</li>\n<li>la <strong>levée variable</strong> modifie la hauteur d'ouverture des soupapes, par commutation entre deux profils de cames ou de façon continue.</li>\n</ul>\n<p>Ces systèmes améliorent le couple à bas régime, la puissance à haut régime, la consommation et les émissions. Ils dépendent fortement de la qualité et du niveau de l'huile : une huile non conforme ou une vidange tardive provoque des défauts de calage enregistrés par le calculateur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> lors du remplacement d'une courroie ou d'une chaîne de distribution, le calage se fait avec les piges et l'outillage du constructeur, en respectant les positions de référence des déphaseurs. Un décalage d'une seule dent peut provoquer un contact entre soupapes et pistons sur un moteur dit « à interférence ».</div>"
      },
      {
       "titre": "La suralimentation",
       "contenu": "<p>La puissance d'un moteur dépend de la masse d'air qu'il peut brûler. La <strong>suralimentation</strong> augmente la pression, donc la masse d'air admise dans un même volume. Le <strong>turbocompresseur</strong> est constitué d'une turbine entraînée par les gaz d'échappement et d'un compresseur monté sur le même arbre, qui tourne à des vitesses de l'ordre de 100 000 à 200 000 tr/min. La pression de suralimentation est régulée par une <strong>soupape de décharge</strong> (<em>wastegate</em>) ou par une turbine à <strong>géométrie variable</strong> dont les ailettes orientables modifient la vitesse des gaz.</p>\n<p>L'air comprimé s'échauffe ; un <strong>échangeur air-air</strong> (ou air-eau) le refroidit pour augmenter sa densité et réduire le risque de cliquetis. Le turbocompresseur est lubrifié et souvent refroidi par l'huile moteur : il est très sensible à l'encrassement de l'huile et aux arrêts brutaux après un fonctionnement en forte charge.</p>"
      },
      {
       "titre": "Évaluer l'état mécanique du moteur",
       "contenu": "<p>Avant de chercher une cause électronique à un manque de puissance ou à un fonctionnement irrégulier, on vérifie que l'état mécanique du moteur est correct. Plusieurs contrôles sont disponibles :</p>\n<table>\n<thead><tr><th>Contrôle</th><th>Principe</th><th>Interprétation</th></tr></thead>\n<tbody>\n<tr><td>Compression</td><td>Mesure au compressiomètre de la pression maximale dans chaque cylindre, moteur entraîné au démarreur</td><td>Comparer aux valeurs constructeur et surtout entre cylindres ; un écart important signale une perte d'étanchéité</td></tr>\n<tr><td>Test de fuite</td><td>Le cylindre au point mort haut est mis sous pression d'air ; on mesure le pourcentage de fuite</td><td>Écouter où sort l'air : admission (soupape d'admission), échappement (soupape d'échappement), reniflard (segmentation), vase d'expansion (joint de culasse)</td></tr>\n<tr><td>Compression relative</td><td>Mesure du courant du démarreur à l'oscilloscope pendant l'entraînement</td><td>Un pic de courant plus faible sur un cylindre indique une compression plus faible</td></tr>\n<tr><td>Analyse des gaz</td><td>Mesure de CO, CO<sub>2</sub>, HC, O<sub>2</sub> et λ à l'échappement</td><td>Renseigne sur la qualité de la combustion et du dosage</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un compressiomètre donne une valeur, un test de fuite localise le défaut. Les deux contrôles se complètent.</div>"
      },
      {
       "titre": "Lubrification et refroidissement : des circuits pilotés",
       "contenu": "<p>Les circuits de lubrification et de refroidissement présentés en seconde ont eux aussi évolué vers une gestion électronique. Sur de nombreux moteurs récents, la <strong>pompe à huile à débit variable</strong> adapte la pression au besoin réel : basse pression à faible charge pour réduire la puissance absorbée, haute pression lorsque le déphaseur ou les gicleurs de fond de piston en ont besoin. Un capteur de pression d'huile informe le calculateur, qui peut allumer le voyant ou limiter le régime en cas d'anomalie.</p>\n<p>Le refroidissement utilise de plus en plus une <strong>pompe à eau pilotée</strong> (débrayable ou électrique) et un <strong>thermostat piloté</strong> chauffé électriquement. À froid, la circulation est volontairement limitée pour que le moteur atteigne vite sa température de fonctionnement, ce qui réduit l'usure et les émissions. En forte charge, le calculateur ouvre davantage le thermostat pour abaisser la température et éloigner le cliquetis.</p>\n<p>Ces évolutions ont deux conséquences pour le technicien. D'une part, les huiles et liquides doivent respecter strictement les normes du constructeur (viscosité, homologation), car le calculateur s'appuie sur leurs propriétés. D'autre part, une remise à niveau ou un remplacement peut exiger une procédure de purge pilotée par l'outil de diagnostic, faute de quoi des poches d'air provoquent des surchauffes locales.</p>"
      }
     ],
     "points_cles": [
      "Le rapport volumétrique compare le volume au point mort bas au volume de la chambre",
      "P (kW) = C (N·m) × N (tr/min) / 9 549",
      "Le minimum de consommation spécifique correspond au meilleur rendement du moteur",
      "Le moteur essence fonctionne près de λ = 1 ; le diesel toujours en excès d'air",
      "Le cliquetis est détecté par un capteur et corrigé par réduction de l'avance",
      "La distribution variable dépend de la pression et de la qualité de l'huile",
      "Le turbocompresseur augmente la masse d'air admise ; l'échangeur refroidit l'air comprimé",
      "Compressiomètre et test de fuite permettent de vérifier l'état mécanique avant tout diagnostic électronique"
     ],
     "lexique": [
      {
       "terme": "Rapport volumétrique",
       "def": "Rapport entre le volume total du cylindre au point mort bas et le volume de la chambre de combustion."
      },
      {
       "terme": "Consommation spécifique",
       "def": "Masse de carburant consommée par le moteur pour produire une énergie de 1 kWh."
      },
      {
       "terme": "Mélange stœchiométrique",
       "def": "Dosage air-carburant permettant une combustion théoriquement complète, noté λ = 1."
      },
      {
       "terme": "Cliquetis",
       "def": "Auto-inflammation anormale d'une partie du mélange dans un moteur essence."
      },
      {
       "terme": "Downsizing",
       "def": "Réduction de la cylindrée compensée par la suralimentation pour diminuer la consommation."
      },
      {
       "terme": "Déphaseur",
       "def": "Dispositif qui modifie en fonctionnement le calage angulaire d'un arbre à cames."
      },
      {
       "terme": "Turbocompresseur",
       "def": "Ensemble turbine-compresseur entraîné par les gaz d'échappement pour suralimenter le moteur."
      },
      {
       "terme": "Géométrie variable",
       "def": "Turbine à ailettes orientables qui adapte la vitesse des gaz pour réguler la suralimentation."
      },
      {
       "terme": "Test de fuite",
       "def": "Mise en pression d'un cylindre au point mort haut pour localiser une perte d'étanchéité."
      }
     ]
    },
    {
     "id": "bmv-gestion-moteur-depollution",
     "titre": "Gestion moteur, injection et dépollution",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Décrire l'architecture d'un système de gestion moteur : capteurs, calculateur, actionneurs",
      "Expliquer le fonctionnement de l'injection directe essence et de l'injection diesel à rampe commune",
      "Identifier les polluants réglementés et leur origine",
      "Décrire le rôle des systèmes de post-traitement : catalyseur, filtre à particules, recirculation des gaz, réduction catalytique sélective",
      "Interpréter les paramètres de régulation de richesse et de régénération"
     ],
     "sections": [
      {
       "titre": "L'architecture d'une gestion moteur",
       "contenu": "<p>Le <strong>calculateur de gestion moteur</strong> (ECU, ou contrôle moteur) pilote l'injection, l'allumage, la suralimentation, la distribution variable et la dépollution. Il fonctionne selon une boucle permanente : il <strong>acquiert</strong> les informations des capteurs, les <strong>traite</strong> à partir de cartographies enregistrées, puis <strong>commande</strong> les actionneurs.</p>\n<table>\n<thead><tr><th>Capteur</th><th>Grandeur mesurée</th><th>Utilisation principale</th></tr></thead>\n<tbody>\n<tr><td>Capteur de régime et de position vilebrequin</td><td>Vitesse et position angulaire</td><td>Calcul du régime, synchronisation de l'injection et de l'allumage</td></tr>\n<tr><td>Capteur de position d'arbre à cames</td><td>Phase du cycle</td><td>Identification du cylindre en compression</td></tr>\n<tr><td>Débitmètre d'air ou capteur de pression collecteur</td><td>Masse ou pression d'air admis</td><td>Calcul de la charge moteur</td></tr>\n<tr><td>Capteur de pédale d'accélérateur</td><td>Volonté du conducteur</td><td>Calcul du couple demandé</td></tr>\n<tr><td>Sonde de température de liquide de refroidissement</td><td>Température moteur</td><td>Correction à froid, gestion du motoventilateur</td></tr>\n<tr><td>Sonde lambda (ou sonde à oxygène)</td><td>Teneur en oxygène des gaz</td><td>Régulation de richesse, surveillance du catalyseur</td></tr>\n<tr><td>Capteur de pression de rampe</td><td>Pression de carburant</td><td>Régulation de la pression d'injection</td></tr>\n</tbody>\n</table>\n<p>Les actionneurs principaux sont les injecteurs, les bobines d'allumage, le boîtier papillon motorisé, l'électrovanne de régulation de pression, l'électrovanne de déphaseur, l'actionneur de turbocompresseur et la vanne de recirculation des gaz. La plupart sont commandés par un signal en <strong>rapport cyclique</strong> variable (signal carré dont la durée à l'état actif varie).</p>"
      },
      {
       "titre": "L'injection directe essence et l'injection diesel à rampe commune",
       "contenu": "<p>En <strong>injection directe essence</strong>, une pompe haute pression entraînée par l'arbre à cames alimente une rampe ; les injecteurs pulvérisent l'essence directement dans la chambre, à des pressions de l'ordre de 100 à 350 bar selon les générations. L'injection directe améliore le rendement mais favorise la formation de particules fines et l'encrassement des soupapes d'admission, qui ne sont plus lavées par le carburant.</p>\n<p>En <strong>injection diesel à rampe commune</strong> (<em>common rail</em>), une pompe haute pression maintient dans la rampe une pression pouvant dépasser 2 000 bar. Le calculateur commande des injecteurs électromagnétiques ou piézoélectriques capables de plusieurs injections par cycle : une ou plusieurs <strong>pré-injections</strong> réduisent le bruit de combustion, l'<strong>injection principale</strong> produit le couple, des <strong>post-injections</strong> servent notamment à la régénération du filtre à particules.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on n'ouvre jamais un raccord de circuit haute pression moteur tournant ou juste après l'arrêt : un jet de gazole à plusieurs centaines de bar traverse la peau. Le constructeur indique le temps d'attente et la méthode de dépressurisation. Les raccords haute pression démontés sont généralement remplacés, et la propreté est absolue : une particule suffit à détruire un injecteur.</div>"
      },
      {
       "titre": "Polluants et normes",
       "contenu": "<p>La combustion produit de l'eau et du dioxyde de carbone (CO<sub>2</sub>), gaz à effet de serre directement lié à la consommation, mais aussi des polluants réglementés :</p>\n<ul>\n<li>le <strong>monoxyde de carbone</strong> (CO), toxique, issu d'une combustion incomplète par manque d'oxygène ;</li>\n<li>les <strong>hydrocarbures imbrûlés</strong> (HC), carburant qui n'a pas brûlé ;</li>\n<li>les <strong>oxydes d'azote</strong> (NO<sub>x</sub>), formés à haute température en présence d'excès d'oxygène, surtout en diesel ;</li>\n<li>les <strong>particules</strong>, mesurées en masse et en nombre, émises surtout par les diesels et les moteurs essence à injection directe.</li>\n</ul>\n<p>Les limites d'émissions sont fixées par les normes européennes : normes <strong>Euro</strong> (chiffres arabes, Euro 6 actuellement) pour les véhicules légers et normes <strong>Euro</strong> en chiffres romains (Euro VI) pour les poids lourds ; les motocycles relèvent de normes spécifiques (Euro 5 et suivantes). Une nouvelle étape, Euro 7, a été adoptée et s'appliquera progressivement. Le respect de ces normes impose la présence de systèmes de <strong>post-traitement</strong> dont l'efficacité est surveillée en permanence par le système de diagnostic embarqué.</p>"
      },
      {
       "titre": "Catalyseur et régulation de richesse",
       "contenu": "<p>Le <strong>catalyseur trois voies</strong> des moteurs essence traite simultanément CO, HC et NO<sub>x</sub>, à condition que le mélange oscille autour de λ = 1. Une sonde lambda placée en amont mesure l'oxygène des gaz et permet au calculateur de corriger en permanence le temps d'injection : c'est la <strong>régulation de richesse en boucle fermée</strong>. Une seconde sonde en aval surveille l'efficacité du catalyseur : un catalyseur efficace stocke et restitue l'oxygène, si bien que le signal aval est stable alors que le signal amont oscille.</p>\n<p>Sur les moteurs diesel, un <strong>catalyseur d'oxydation</strong> traite CO et HC, en excès d'oxygène, et prépare la régénération du filtre à particules.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> interpréter les corrections de richesse lues à l'outil de diagnostic.<br>1. Relever la correction à court terme (rapide) et la correction à long terme (adaptative), exprimées en pourcentage autour de 0.<br>2. Une correction positive importante (par exemple +15 %) signifie que le calculateur ajoute du carburant : le mélange était trop pauvre (prise d'air après le débitmètre, pression de carburant faible, injecteur partiellement bouché).<br>3. Une correction négative importante signifie un mélange trop riche (injecteur qui fuit, pression excessive, purge canister bloquée ouverte).<br>4. Observer si l'écart existe au ralenti seulement (prise d'air probable) ou en charge (débit de carburant insuffisant probable).<br>5. Confirmer par une mesure physique : test de fumée, pression de carburant.</div>"
      },
      {
       "titre": "Filtre à particules et recirculation des gaz",
       "contenu": "<p>Le <strong>filtre à particules</strong> (FAP) est une céramique poreuse dont les canaux sont alternativement bouchés : les gaz traversent les parois, les particules restent piégées. Le filtre se colmate progressivement ; le calculateur estime son chargement à partir de la <strong>pression différentielle</strong> mesurée entre l'entrée et la sortie et d'un modèle de calcul. Il déclenche une <strong>régénération</strong> : élévation de la température des gaz à plus de 550 °C environ par post-injection, pour brûler les suies. Les trajets courts répétés empêchent les régénérations d'aboutir. Les cendres non combustibles (issues de l'huile) restent dans le filtre et imposent un remplacement ou un nettoyage à très long terme.</p>\n<p>La <strong>recirculation des gaz d'échappement</strong> (EGR) réinjecte une partie des gaz à l'admission. Ces gaz inertes abaissent la température de combustion et donc la formation de NO<sub>x</sub>. La vanne EGR et son refroidisseur s'encrassent, ce qui peut provoquer manque de puissance, fumées et codes défaut de débit.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> devant un voyant de colmatage du FAP, on recherche d'abord pourquoi la régénération n'a pas eu lieu (usage du véhicule, capteur de pression différentielle, sonde de température, huile non conforme) avant de lancer une régénération forcée à l'outil de diagnostic. Supprimer ou neutraliser un système de dépollution est interdit et sanctionné.</div>"
      },
      {
       "titre": "La réduction catalytique sélective",
       "contenu": "<p>Pour atteindre les limites de NO<sub>x</sub> des normes récentes, la plupart des diesels utilisent la <strong>réduction catalytique sélective</strong> (SCR). Un doseur injecte dans l'échappement une solution aqueuse d'urée à 32,5 %, commercialisée sous le nom d'AdBlue (désignation normalisée AUS 32). Sous l'effet de la chaleur, l'urée se transforme en ammoniac qui réduit les NO<sub>x</sub> en azote et en eau dans un catalyseur spécifique. Des capteurs de NO<sub>x</sub> en amont et en aval surveillent l'efficacité.</p>\n<p>Le système est réglementairement surveillé : si le réservoir d'AdBlue est vide ou si un dysfonctionnement est détecté, le conducteur est averti, puis le redémarrage du véhicule est empêché ou les performances sont limitées après un certain kilométrage. L'AdBlue cristallise en séchant et gèle vers −11 °C ; le circuit comporte des réchauffeurs.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'AdBlue ne se mélange à rien et ne se remplace par rien. Un AdBlue pollué (eau, gazole, liquide de refroidissement) détruit le doseur et le catalyseur SCR ; le réservoir et le circuit doivent alors être vidangés et nettoyés selon la procédure du constructeur.</div>"
      },
      {
       "titre": "Le diagnostic embarqué de la dépollution",
       "contenu": "<p>La réglementation impose que les véhicules surveillent eux-mêmes le bon fonctionnement de leurs systèmes antipollution : c'est le <strong>diagnostic embarqué</strong> (OBD, pour <em>On-Board Diagnostics</em>), obligatoire en Europe sur les véhicules légers à essence depuis le début des années 2000 puis sur les diesels. Le calculateur exécute des tests appelés <strong>moniteurs</strong> : efficacité du catalyseur, fonctionnement des sondes lambda, ratés de combustion, système d'évaporation des vapeurs d'essence, EGR, FAP, SCR.</p>\n<p>Lorsqu'un défaut susceptible d'augmenter les émissions est confirmé, le calculateur enregistre un code défaut normalisé et allume le <strong>voyant de défaut moteur</strong> (MIL, symbole orange en forme de moteur). Un voyant clignotant signale des ratés de combustion graves qui risquent de détruire le catalyseur : le conducteur doit réduire la charge et faire contrôler le véhicule rapidement.</p>\n<p>Après une réparation, l'effacement des codes remet à zéro l'état des moniteurs. Ceux-ci doivent ensuite s'exécuter lors de cycles de conduite précis pour confirmer la réparation. Le contrôle technique lit cet état : un véhicule présenté juste après un effacement peut apparaître avec des moniteurs non prêts. La méthodologie complète d'exploitation de l'OBD est approfondie avec le diagnostic.</p>"
      }
     ],
     "points_cles": [
      "Le calculateur acquiert, traite selon des cartographies et commande les actionneurs",
      "L'injection directe essence et le common rail diesel travaillent à très haute pression : danger et propreté absolue",
      "CO, HC, NOx et particules sont les polluants réglementés ; le CO2 dépend de la consommation",
      "Le catalyseur trois voies exige une richesse oscillant autour de λ = 1",
      "Des corrections de richesse fortement positives signalent un mélange trop pauvre",
      "Le FAP se régénère en brûlant les suies vers 550 °C et plus",
      "L'EGR réduit les NOx en abaissant la température de combustion",
      "La SCR réduit les NOx grâce à une solution d'urée à 32,5 %"
     ],
     "lexique": [
      {
       "terme": "Cartographie",
       "def": "Tableau de valeurs enregistré dans le calculateur qui fixe une commande en fonction de plusieurs paramètres."
      },
      {
       "terme": "Rapport cyclique",
       "def": "Proportion du temps pendant laquelle un signal carré est actif sur une période."
      },
      {
       "terme": "Rampe commune",
       "def": "Accumulateur de carburant sous haute pression qui alimente tous les injecteurs d'un moteur."
      },
      {
       "terme": "Sonde lambda",
       "def": "Capteur qui mesure la teneur en oxygène des gaz d'échappement pour réguler la richesse."
      },
      {
       "terme": "Catalyseur trois voies",
       "def": "Catalyseur qui traite simultanément CO, HC et NOx sur un moteur essence."
      },
      {
       "terme": "Filtre à particules (FAP)",
       "def": "Filtre céramique qui retient les particules et se régénère en les brûlant."
      },
      {
       "terme": "Régénération",
       "def": "Combustion des suies accumulées dans le FAP par élévation de la température des gaz."
      },
      {
       "terme": "EGR",
       "def": "Recirculation d'une partie des gaz d'échappement vers l'admission pour limiter les NOx."
      },
      {
       "terme": "SCR",
       "def": "Réduction catalytique sélective des NOx par injection d'une solution d'urée."
      },
      {
       "terme": "Post-traitement",
       "def": "Ensemble des dispositifs qui traitent les gaz après leur sortie du moteur."
      }
     ]
    },
    {
     "id": "bmv-batterie-traction-recharge",
     "titre": "Batterie de traction et recharge",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Décrire la constitution d'une batterie de traction : cellules, modules, pack, BMS, relais",
      "Calculer tension, capacité et énergie d'un assemblage de cellules",
      "Expliquer les notions d'état de charge et d'état de santé et les facteurs de vieillissement",
      "Distinguer les modes de recharge en courant alternatif et en courant continu",
      "Réaliser les contrôles de base d'une batterie de traction et d'un système de recharge"
     ],
     "sections": [
      {
       "titre": "De la cellule au pack",
       "contenu": "<p>La batterie de traction est un assemblage de <strong>cellules</strong> élémentaires, regroupées en <strong>modules</strong>, eux-mêmes assemblés dans un <strong>pack</strong> étanche fixé sous le plancher (voitures), dans le châssis ou sur le toit (autobus), ou dans le cadre (motos). Les cellules sont aujourd'hui presque toutes de technologie <strong>lithium-ion</strong>, sous trois formats : cylindriques, prismatiques (boîtier rigide) ou sachets souples (<em>pouch</em>).</p>\n<p>La chimie de l'électrode positive détermine la tension nominale de la cellule et ses propriétés :</p>\n<table>\n<thead><tr><th>Chimie</th><th>Tension nominale d'une cellule</th><th>Points forts</th><th>Points faibles</th></tr></thead>\n<tbody>\n<tr><td>NMC (nickel-manganèse-cobalt)</td><td>Environ 3,6 à 3,7 V</td><td>Forte énergie massique, bonne autonomie</td><td>Coût, sensibilité thermique</td></tr>\n<tr><td>LFP (lithium-fer-phosphate)</td><td>Environ 3,2 V</td><td>Durée de vie, sécurité thermique, coût</td><td>Énergie massique plus faible, estimation de l'état de charge plus délicate</td></tr>\n</tbody>\n</table>\n<p>Les cellules sont branchées en <strong>série</strong> pour additionner les tensions et en <strong>parallèle</strong> pour additionner les capacités. Une configuration notée 96s2p comporte 96 groupes en série de 2 cellules en parallèle.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> caractériser un pack 96s2p de cellules NMC de 3,65 V et 60 Ah.<br>1. Tension nominale : U = 96 × 3,65 ≈ 350 V (les cellules en parallèle n'augmentent pas la tension).<br>2. Capacité : Q = 2 × 60 = 120 Ah (les cellules en série n'augmentent pas la capacité).<br>3. Énergie : E = U × Q = 350 × 120 = 42 000 Wh, soit 42 kWh.<br>4. Nombre de cellules : 96 × 2 = 192.<br>5. Énergie utilisable : le constructeur réserve une marge haute et basse ; l'énergie utile annoncée est donc un peu inférieure à la valeur brute.</div>"
      },
      {
       "titre": "Le système de gestion de la batterie (BMS)",
       "contenu": "<p>Le <strong>BMS</strong> (<em>Battery Management System</em>) est le calculateur qui surveille et protège la batterie. Il mesure en permanence la tension de chaque groupe de cellules, les températures en plusieurs points et le courant entrant ou sortant. À partir de ces mesures, il :</p>\n<ul>\n<li>calcule l'<strong>état de charge</strong> (SOC, en %) et la puissance disponible en charge et en décharge ;</li>\n<li>réalise l'<strong>équilibrage</strong> des cellules, pour que toutes atteignent la même tension en fin de charge ;</li>\n<li>pilote les <strong>relais principaux</strong> (contacteurs) et le circuit de <strong>précharge</strong>, qui limite le courant d'appel lors de la mise sous tension de l'onduleur ;</li>\n<li>surveille l'<strong>isolement</strong> entre le circuit de traction et la masse du véhicule ;</li>\n<li>commande la gestion thermique (refroidissement, réchauffage) ;</li>\n<li>enregistre les défauts et l'historique d'utilisation.</li>\n</ul>\n<p>Le circuit de traction est <strong>isolé de la masse</strong> du véhicule : ni le pôle positif ni le pôle négatif ne sont reliés à la carrosserie. Un premier défaut d'isolement ne provoque donc pas de courant dangereux, mais il est détecté par le contrôleur d'isolement qui alerte le conducteur et peut interdire le démarrage. Un second défaut sur l'autre polarité créerait un court-circuit par la masse.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un message de défaut d'isolement doit être traité comme une situation dangereuse. On applique strictement la procédure constructeur et la consignation avant toute recherche, et l'on ne remet pas le véhicule au client tant que le défaut n'est pas localisé.</div>"
      },
      {
       "titre": "État de charge, état de santé et vieillissement",
       "contenu": "<p>L'<strong>état de charge</strong> (SOC, <em>State of Charge</em>) indique la proportion d'énergie restante par rapport à la capacité actuelle. L'<strong>état de santé</strong> (SOH, <em>State of Health</em>) compare la capacité actuelle de la batterie à sa capacité neuve : un SOH de 90 % signifie qu'une recharge complète ne stocke plus que 90 % de l'énergie d'origine. Les constructeurs garantissent souvent un SOH minimal (par exemple 70 %) pendant un nombre d'années ou de kilomètres défini dans le contrat de garantie.</p>\n<p>Le vieillissement résulte de deux phénomènes : le <strong>vieillissement calendaire</strong>, qui se produit même au repos et augmente avec la température et le maintien à un état de charge élevé, et le <strong>vieillissement en cyclage</strong>, lié au nombre et à la profondeur des cycles de charge et de décharge, aggravé par les recharges rapides répétées à forte puissance et par les températures extrêmes.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le conseil au client fait partie de la mission du technicien. Pour un usage quotidien, il est généralement conseillé de limiter la charge habituelle à la valeur recommandée par le constructeur (souvent 80 % pour les chimies NMC), d'éviter de laisser le véhicule longtemps à 0 % ou à 100 % et de réserver la recharge rapide aux longs trajets. Les certificats d'état de santé de batterie sont de plus en plus demandés lors de la revente des véhicules d'occasion.</div>"
      },
      {
       "titre": "Les modes de recharge",
       "contenu": "<p>Le réseau électrique fournit du courant alternatif, alors que la batterie se charge en courant continu. La conversion se fait soit dans le véhicule (chargeur embarqué), soit dans la borne.</p>\n<table>\n<thead><tr><th>Mode</th><th>Équipement</th><th>Courant</th><th>Puissance typique</th></tr></thead>\n<tbody>\n<tr><td>Mode 2</td><td>Prise domestique avec câble à boîtier de contrôle intégré</td><td>Alternatif monophasé</td><td>Environ 1,8 à 2,3 kW</td></tr>\n<tr><td>Mode 3</td><td>Borne murale ou publique avec câble à connecteur Type 2</td><td>Alternatif monophasé ou triphasé</td><td>7,4 kW (monophasé 32 A), 11 kW (triphasé 16 A), 22 kW (triphasé 32 A)</td></tr>\n<tr><td>Mode 4</td><td>Borne de recharge rapide à câble attaché, connecteur Combo CCS</td><td>Continu</td><td>De quelques dizaines à plusieurs centaines de kilowatts</td></tr>\n</tbody>\n</table>\n<p>En recharge alternative, la puissance réelle est limitée par le plus faible des trois maillons : l'installation, le câble et le <strong>chargeur embarqué</strong>. Un véhicule équipé d'un chargeur de 7,4 kW ne chargera pas plus vite sur une borne de 22 kW. En recharge continue, la borne dialogue avec le BMS qui fixe à chaque instant le courant accepté : la puissance diminue fortement au-delà d'environ 80 % de charge et lorsque la batterie est froide.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer une durée de recharge.<br>Données : batterie de 60 kWh utiles, recharge de 20 % à 80 %, borne triphasée 11 kW, rendement de recharge 0,9.<br>1. Énergie à stocker : 60 × (0,80 − 0,20) = 36 kWh.<br>2. Énergie prélevée au réseau : 36 / 0,9 = 40 kWh.<br>3. Durée : 40 / 11 ≈ 3,6 h, soit environ 3 h 40 min.<br>4. Vérification : si le chargeur embarqué n'accepte que 7,4 kW en monophasé, la durée devient 40 / 7,4 ≈ 5,4 h.</div>"
      },
      {
       "titre": "La gestion thermique de la batterie",
       "contenu": "<p>Une batterie lithium-ion fonctionne de manière optimale dans une plage de température modérée, de l'ordre de 20 à 40 °C. Trop froide, elle accepte mal la charge et délivre moins de puissance ; trop chaude, elle vieillit plus vite et le risque d'emballement thermique augmente. Selon les véhicules, la régulation est assurée par l'air, par un liquide de refroidissement circulant dans des plaques sous les modules, ou par le fluide frigorigène via un échangeur.</p>\n<p>Le <strong>préconditionnement</strong> consiste à amener la batterie à bonne température avant une recharge rapide ou un départ, en utilisant de préférence l'énergie du réseau pendant que le véhicule est branché. Les défauts de gestion thermique (pompe, vanne, capteur, fuite de liquide) se traduisent par une limitation de puissance ou de recharge et doivent être recherchés avec les paramètres de température du BMS.</p>"
      },
      {
       "titre": "Contrôles de base sur batterie et recharge",
       "contenu": "<p>Les opérations sur l'intérieur du pack (remplacement de module, de BMS) relèvent de techniciens spécialisés et de l'habilitation adéquate. Le titulaire du bac pro réalise en revanche des contrôles de premier niveau, toujours selon la procédure du constructeur :</p>\n<ul>\n<li>inspection visuelle du pack : chocs, déformations, traces de corrosion ou de liquide, état des fixations et des connecteurs ;</li>\n<li>lecture des paramètres du BMS : SOC, SOH, tensions minimale et maximale des groupes de cellules, écart de tension entre cellules, températures, résistance d'isolement ;</li>\n<li>contrôle de la prise de recharge : propreté, échauffement, verrouillage du connecteur, état des broches ;</li>\n<li>essai de recharge sur une borne connue et lecture de la puissance négociée ;</li>\n<li>contrôle de la batterie 12 V et du convertisseur DC/DC, souvent responsables de refus de démarrage sur véhicule électrique.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un écart de tension important entre groupes de cellules, même avec un SOC correct, signale un déséquilibre ou une cellule faible ; c'est souvent la cellule la plus faible qui limite l'autonomie de tout le pack.</div>"
      },
      {
       "titre": "Seconde vie et recyclage",
       "contenu": "<p>Une batterie dont l'état de santé ne permet plus un usage automobile satisfaisant peut connaître une <strong>seconde vie</strong> en stockage stationnaire d'énergie, où la masse et le volume comptent moins. En fin de vie, elle est recyclée dans des filières spécialisées qui récupèrent notamment le lithium, le nickel, le cobalt et le cuivre. La réglementation européenne sur les batteries renforce progressivement les obligations de collecte, de traçabilité (passeport de batterie) et de taux de recyclage. Une batterie déposée est stockée selon les consignes du constructeur, dans une zone dédiée, à un état de charge souvent réduit, et transportée comme marchandise dangereuse selon les règles applicables.</p>"
      }
     ],
     "points_cles": [
      "Une batterie de traction assemble des cellules en série (tension) et en parallèle (capacité)",
      "Énergie (Wh) = tension (V) × capacité (Ah)",
      "Le BMS mesure tensions, courants et températures, calcule le SOC, équilibre et protège",
      "Le circuit de traction est isolé de la masse ; un défaut d'isolement est une alerte de sécurité",
      "Le SOH compare la capacité actuelle à la capacité neuve",
      "Le vieillissement dépend de la température, de l'état de charge et des recharges rapides",
      "En recharge AC, le chargeur embarqué limite souvent la puissance ; en DC, c'est le BMS qui pilote",
      "La gestion thermique conditionne puissance, recharge rapide et durée de vie"
     ],
     "lexique": [
      {
       "terme": "Cellule",
       "def": "Élément électrochimique de base d'une batterie, de tension nominale fixée par sa chimie."
      },
      {
       "terme": "Module",
       "def": "Groupe de cellules assemblées mécaniquement et électriquement, constituant un sous-ensemble du pack."
      },
      {
       "terme": "BMS",
       "def": "Système de gestion qui surveille, protège et équilibre la batterie de traction."
      },
      {
       "terme": "SOC",
       "def": "État de charge : énergie restante en pourcentage de la capacité actuelle."
      },
      {
       "terme": "SOH",
       "def": "État de santé : capacité actuelle en pourcentage de la capacité à l'état neuf."
      },
      {
       "terme": "Équilibrage",
       "def": "Opération qui égalise la tension des cellules d'un pack."
      },
      {
       "terme": "Précharge",
       "def": "Mise sous tension progressive à travers une résistance pour limiter le courant d'appel des condensateurs."
      },
      {
       "terme": "Chargeur embarqué",
       "def": "Convertisseur du véhicule qui transforme le courant alternatif du réseau en courant continu pour la batterie."
      },
      {
       "terme": "Défaut d'isolement",
       "def": "Liaison électrique anormale entre le circuit de traction et la masse du véhicule."
      },
      {
       "terme": "Préconditionnement",
       "def": "Mise en température de la batterie ou de l'habitacle avant utilisation ou recharge."
      }
     ]
    },
    {
     "id": "bmv-machines-electriques",
     "titre": "Machines électriques de traction et électronique de puissance",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Expliquer le principe de fonctionnement d'une machine électrique tournante",
      "Distinguer machine synchrone à aimants, machine asynchrone et machine à rotor bobiné",
      "Exploiter les caractéristiques couple-vitesse d'une machine de traction",
      "Décrire le rôle de l'onduleur, du convertisseur DC/DC et du chargeur",
      "Réaliser des contrôles de base sur une machine et ses liaisons"
     ],
     "sections": [
      {
       "titre": "Le principe : un champ magnétique tournant",
       "contenu": "<p>Une machine électrique tournante comporte une partie fixe, le <strong>stator</strong>, et une partie mobile, le <strong>rotor</strong>. Le stator porte trois enroulements (bobinages) décalés de 120°. Alimentés par trois courants alternatifs décalés dans le temps (courant <strong>triphasé</strong>), ces enroulements créent un <strong>champ magnétique tournant</strong> dont la vitesse dépend de la fréquence des courants. Le rotor est entraîné par ce champ tournant et produit un couple sur l'arbre.</p>\n<p>La même machine est <strong>réversible</strong> : lorsque les roues entraînent le rotor plus vite que le champ, elle fonctionne en <strong>génératrice</strong> et renvoie de l'énergie vers la batterie. C'est le principe du freinage récupératif. On parle donc de « machine » électrique plutôt que de « moteur ».</p>\n<p>La vitesse de synchronisme du champ tournant s'exprime par n<sub>s</sub> = 60 × f / p, avec f la fréquence (Hz) et p le nombre de paires de pôles. Pour atteindre une vitesse de rotor de 12 000 tr/min avec une machine à 4 paires de pôles, l'onduleur doit fournir une fréquence de 12 000 × 4 / 60 = 800 Hz. La fréquence du réseau domestique (50 Hz) ne permettrait pas de faire varier la vitesse du véhicule : c'est l'onduleur qui crée une fréquence variable.</p>"
      },
      {
       "titre": "Les types de machines de traction",
       "contenu": "<table>\n<thead><tr><th>Type</th><th>Constitution du rotor</th><th>Avantages</th><th>Inconvénients</th></tr></thead>\n<tbody>\n<tr><td>Synchrone à aimants permanents (MSAP)</td><td>Aimants permanents, souvent en terres rares</td><td>Excellent rendement, forte densité de puissance, compacité</td><td>Coût et approvisionnement des aimants, tension induite dès que le rotor tourne</td></tr>\n<tr><td>Asynchrone (à induction)</td><td>Cage en cuivre ou aluminium, sans aimant</td><td>Robustesse, coût, pas de tension induite à l'arrêt de l'alimentation</td><td>Rendement un peu inférieur, échauffement du rotor</td></tr>\n<tr><td>Synchrone à rotor bobiné</td><td>Bobinage alimenté par des balais ou par induction</td><td>Pas de terres rares, champ réglable</td><td>Complexité, usure possible des balais</td></tr>\n</tbody>\n</table>\n<p>Les petites machines (pompes, ventilateurs, compresseurs) utilisent souvent des moteurs <strong>sans balais</strong> (<em>brushless</em>), qui sont aussi des machines synchrones à aimants pilotées électroniquement. Les motocycles électriques utilisent soit un moteur central entraînant la roue par courroie ou chaîne, soit un moteur-roue intégré au moyeu.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une machine synchrone à aimants produit une tension sur ses bornes dès que son rotor tourne, même si la batterie est déconnectée. Remorquer un véhicule électrique roues motrices au sol, ou faire tourner une roue motrice d'une moto électrique avec les câbles débranchés, peut générer une tension dangereuse et endommager l'onduleur. On respecte les consignes de remorquage du constructeur (plateau, roues motrices soulevées).</div>"
      },
      {
       "titre": "Caractéristique couple-vitesse",
       "contenu": "<p>Une machine électrique de traction délivre son <strong>couple maximal dès l'arrêt</strong> et le maintient jusqu'à une vitesse appelée vitesse de base : c'est la zone à <strong>couple constant</strong>. Au-delà, la tension disponible limite le courant ; la machine fonctionne alors à <strong>puissance constante</strong>, le couple diminuant quand la vitesse augmente. Cette caractéristique explique pourquoi un véhicule électrique se contente d'un réducteur à rapport unique, là où un moteur thermique a besoin d'une boîte de vitesses.</p>\n<p>On distingue la <strong>puissance maximale</strong>, disponible pendant quelques secondes ou dizaines de secondes, et la <strong>puissance continue</strong> (ou nominale), que la machine peut fournir sans surchauffer. Pour un motocycle électrique, la puissance continue sert à classer le véhicule dans une catégorie de permis ; pour un véhicule de transport routier, elle conditionne la capacité à tenir une longue montée chargée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le couple aux roues d'un véhicule électrique.<br>Données : couple machine 300 N·m, rapport de réduction total 9,7 (réducteur et différentiel), rendement de transmission 0,96, rayon sous charge de la roue 0,32 m.<br>1. Couple aux roues (total sur l'essieu) : C<sub>roues</sub> = 300 × 9,7 × 0,96 ≈ 2 794 N·m.<br>2. Effort de traction au sol : F = C<sub>roues</sub> / r = 2 794 / 0,32 ≈ 8 730 N.<br>3. Vitesse : si la machine tourne à 12 000 tr/min, les roues tournent à 12 000 / 9,7 ≈ 1 237 tr/min ; circonférence 2π × 0,32 ≈ 2,01 m ; vitesse ≈ 1 237 × 2,01 × 60 / 1 000 ≈ 149 km/h.</div>"
      },
      {
       "titre": "L'onduleur et la commande de la machine",
       "contenu": "<p>L'<strong>onduleur</strong> est constitué de six interrupteurs électroniques de puissance (transistors IGBT ou MOSFET, de plus en plus en carbure de silicium), associés à un condensateur de filtrage côté batterie. En ouvrant et fermant ces interrupteurs des milliers de fois par seconde selon une <strong>modulation de largeur d'impulsion</strong> (MLI), il fabrique trois tensions alternatives dont il règle l'amplitude et la fréquence. Le calculateur de l'onduleur reçoit la consigne de couple du calculateur de supervision et mesure les courants de phase et la position exacte du rotor grâce à un <strong>capteur de position</strong> (résolveur ou capteur à effet Hall).</p>\n<p>Lors du freinage récupératif, l'onduleur fonctionne en redresseur : il transforme le courant alternatif produit par la machine en courant continu pour la batterie. La quantité d'énergie récupérée est limitée par l'état de charge et la température de la batterie : batterie pleine ou froide, le frein hydraulique prend le relais.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'onduleur décide de la vitesse (par la fréquence) et du couple (par l'amplitude des courants) de la machine. Un défaut de résolveur ou de capteur de position empêche la commande correcte et entraîne un mode dégradé ou un refus de démarrage.</div>"
      },
      {
       "titre": "Les autres convertisseurs",
       "contenu": "<p>Un véhicule électrifié comporte d'autres convertisseurs de puissance, souvent regroupés dans un même boîtier :</p>\n<ul>\n<li>le <strong>convertisseur DC/DC</strong> abaisse la tension de traction (plusieurs centaines de volts) vers 12 V ou 24 V pour alimenter le réseau de bord et recharger la batterie de servitude ; sur un véhicule thermique hybride léger, il relie le réseau 48 V au réseau 12 V ;</li>\n<li>le <strong>chargeur embarqué</strong> redresse et adapte le courant alternatif du réseau électrique ;</li>\n<li>les <strong>convertisseurs d'auxiliaires</strong> alimentent le compresseur de climatisation électrique, les pompes, le chauffage.</li>\n</ul>\n<p>Tous ces convertisseurs dissipent de la chaleur et sont reliés au circuit de refroidissement. Ils contiennent des condensateurs qui restent chargés après la coupure : le temps de décharge prescrit s'applique à chacun.</p>"
      },
      {
       "titre": "Contrôles sur machine et liaisons",
       "contenu": "<p>Après consignation, plusieurs contrôles permettent de vérifier l'état d'une machine et de ses liaisons, selon les valeurs et les appareils prescrits par le constructeur :</p>\n<table>\n<thead><tr><th>Contrôle</th><th>Appareil</th><th>Résultat attendu</th></tr></thead>\n<tbody>\n<tr><td>Résistance des enroulements entre phases (U-V, V-W, W-U)</td><td>Milliohmmètre</td><td>Valeurs très faibles (de l'ordre du milliohm à quelques dizaines de milliohms) et égales entre elles</td></tr>\n<tr><td>Isolement de chaque phase par rapport à la carcasse</td><td>Mégohmmètre (contrôleur d'isolement) sous la tension d'essai prescrite</td><td>Résistance très élevée, supérieure au minimum constructeur (souvent plusieurs mégohms)</td></tr>\n<tr><td>Continuité des câbles de puissance et de la liaison équipotentielle</td><td>Milliohmmètre</td><td>Résistance très faible entre carcasse de chaque composant et masse du véhicule</td></tr>\n<tr><td>Capteur de position</td><td>Multimètre ou oscilloscope</td><td>Résistances des bobinages du résolveur conformes, signaux cohérents en rotation lente</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un ohmmètre classique de multimètre ne permet pas de mesurer correctement des résistances de quelques milliohms, ni de vérifier un isolement sous tension d'essai. L'atelier dispose d'appareils spécifiques ; leur emploi est réservé aux personnes habilitées et suit la procédure, car le mégohmmètre génère lui-même une tension élevée.</div>"
      },
      {
       "titre": "Bruits, vibrations et usure mécanique",
       "contenu": "<p>Une machine électrique comporte peu de pièces d'usure : roulements, joints d'étanchéité et, pour certains rotors bobinés, balais. Les défauts les plus fréquents en atelier sont des bruits de roulement, des fuites de liquide de refroidissement ou d'huile du réducteur, et des défauts de connectique (corrosion, mauvais serrage des cosses de puissance provoquant échauffement). Le couple de serrage des connexions de puissance est imposé et souvent vérifié par marquage. Le silence de fonctionnement des véhicules électriques rend audibles des bruits habituellement masqués par le moteur thermique : sifflement d'engrenage du réducteur, bruits de roulement de roues, ce qui modifie la façon d'interpréter une réclamation client.</p>"
      }
     ],
     "points_cles": [
      "Le stator triphasé crée un champ tournant dont la vitesse dépend de la fréquence",
      "La machine est réversible : moteur en traction, génératrice en récupération",
      "La machine synchrone à aimants produit une tension dès que le rotor tourne",
      "Couple maximal dès l'arrêt, puis fonctionnement à puissance constante : un réducteur unique suffit",
      "L'onduleur règle fréquence et amplitude par modulation de largeur d'impulsion",
      "Le capteur de position du rotor est indispensable à la commande",
      "Les enroulements se contrôlent au milliohmmètre, l'isolement au mégohmmètre",
      "Les convertisseurs gardent des condensateurs chargés après coupure"
     ],
     "lexique": [
      {
       "terme": "Stator",
       "def": "Partie fixe d'une machine électrique, portant généralement les enroulements alimentés."
      },
      {
       "terme": "Rotor",
       "def": "Partie tournante d'une machine électrique, liée à l'arbre de sortie."
      },
      {
       "terme": "Courant triphasé",
       "def": "Système de trois courants alternatifs de même fréquence décalés d'un tiers de période."
      },
      {
       "terme": "Machine synchrone à aimants",
       "def": "Machine dont le rotor à aimants tourne exactement à la vitesse du champ tournant."
      },
      {
       "terme": "Machine asynchrone",
       "def": "Machine dont le rotor en cage tourne légèrement moins vite que le champ tournant en fonctionnement moteur."
      },
      {
       "terme": "Modulation de largeur d'impulsion (MLI)",
       "def": "Technique de commande qui fabrique une tension moyenne variable par découpage rapide."
      },
      {
       "terme": "Résolveur",
       "def": "Capteur inductif qui mesure la position angulaire précise du rotor."
      },
      {
       "terme": "Mégohmmètre",
       "def": "Appareil qui mesure une résistance d'isolement en appliquant une tension d'essai élevée."
      },
      {
       "terme": "Liaison équipotentielle",
       "def": "Liaison électrique de faible résistance entre la carcasse d'un composant et la masse du véhicule."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Transmission, liaison au sol et assemblages",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmv-transmissions",
     "titre": "Transmissions : embrayages, boîtes de vitesses et différentiels",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Calculer rapports de transmission, vitesses et couples à travers une chaîne cinématique",
      "Expliquer le fonctionnement d'un embrayage et d'un volant moteur bi-masse",
      "Distinguer boîte manuelle, robotisée, à double embrayage, automatique à trains épicycloïdaux et à variation continue",
      "Décrire le rôle du différentiel et des dispositifs de blocage",
      "Identifier les contrôles et opérations d'entretien d'une transmission"
     ],
     "sections": [
      {
       "titre": "Pourquoi une transmission",
       "contenu": "<p>Le cours de seconde a présenté la chaîne de transmission et la notion de rapport. On approfondit ici la technologie des organes. Un moteur thermique ne fournit un couple utile que dans une plage de régime limitée, entre le ralenti et le régime maximal ; il ne peut pas démarrer en charge depuis l'arrêt. La transmission doit donc : permettre le démarrage progressif (embrayage ou convertisseur), adapter le couple et la vitesse aux conditions de roulage (boîte de vitesses), répartir le couple entre les roues qui tournent à des vitesses différentes en virage (différentiel) et transmettre le mouvement malgré les débattements de suspension (arbres de transmission à joints homocinétiques ou à cardans).</p>\n<p>Le <strong>rapport de transmission</strong> k d'un engrenage est le rapport de la vitesse de sortie à la vitesse d'entrée : k = N<sub>sortie</sub> / N<sub>entrée</sub> = Z<sub>menant</sub> / Z<sub>mené</sub> (Z : nombre de dents). Le rapport global d'une chaîne est le produit des rapports successifs. En négligeant les pertes, le couple varie en sens inverse : C<sub>sortie</sub> = C<sub>entrée</sub> / k ; avec le rendement η : C<sub>sortie</sub> = C<sub>entrée</sub> × η / k.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la vitesse du véhicule et le couple aux roues en 3e.<br>Données : 3e : Z menant 37, Z mené 47 ; couple final : Z menant 17, Z mené 69 ; régime moteur 3 000 tr/min ; couple moteur 200 N·m ; rendement 0,92 ; circonférence de roulement 1,95 m.<br>1. k<sub>3</sub> = 37 / 47 ≈ 0,787 ; k<sub>pont</sub> = 17 / 69 ≈ 0,246 ; k<sub>global</sub> ≈ 0,787 × 0,246 ≈ 0,194.<br>2. Vitesse de roue : 3 000 × 0,194 ≈ 582 tr/min.<br>3. Vitesse du véhicule : 582 × 1,95 × 60 / 1 000 ≈ 68 km/h.<br>4. Couple total aux roues : 200 × 0,92 / 0,194 ≈ 948 N·m, partagé entre les deux roues motrices.</div>"
      },
      {
       "titre": "L'embrayage et le volant bi-masse",
       "contenu": "<p>L'<strong>embrayage</strong> à friction sèche transmet le couple par adhérence entre le volant moteur, le disque garni et le plateau de pression, serrés par un diaphragme. Le couple transmissible dépend de l'effort presseur, du coefficient de frottement des garnitures, du rayon moyen de friction et du nombre de faces de frottement. Un embrayage qui patine (régime moteur qui monte sans accélération du véhicule) signale des garnitures usées, huilées, ou un effort presseur insuffisant.</p>\n<p>La commande est hydraulique (émetteur à la pédale, récepteur concentrique ou externe) ou pilotée par un actionneur électrique ou électrohydraulique sur les boîtes robotisées. Le <strong>volant moteur bi-masse</strong> comporte deux masses reliées par des ressorts : il filtre les acyclismes du moteur (irrégularités de rotation) et réduit les vibrations et bruits de la transmission, notamment sur les diesels et les moteurs suralimentés à bas régime. Son usure se manifeste par un jeu angulaire excessif ou un débattement anormal, des bruits au démarrage et à l'arrêt du moteur, des vibrations à bas régime. Le constructeur fournit les valeurs limites de jeu et de débattement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> lors du remplacement d'un embrayage, le volant bi-masse doit être contrôlé selon la méthode prescrite, et la butée, le récepteur concentrique et le kit complet sont souvent remplacés ensemble. Les poussières de garniture ne se soufflent jamais à l'air comprimé.</div>"
      },
      {
       "titre": "Les boîtes de vitesses",
       "contenu": "<table>\n<thead><tr><th>Type</th><th>Principe</th><th>Points d'attention en maintenance</th></tr></thead>\n<tbody>\n<tr><td>Manuelle</td><td>Pignons toujours en prise sur deux arbres ; synchroniseurs à cônes qui égalisent les vitesses avant crabotage</td><td>Huile de boîte prescrite, craquements au passage (synchroniseurs), fuites aux joints</td></tr>\n<tr><td>Robotisée (manuelle pilotée)</td><td>Boîte manuelle dont l'embrayage et la sélection sont pilotés par actionneurs</td><td>Apprentissages des points d'embrayage et de sélection après intervention</td></tr>\n<tr><td>À double embrayage</td><td>Deux embrayages, l'un pour les rapports pairs, l'autre pour les impairs ; le rapport suivant est présélectionné</td><td>Embrayages à sec ou à bain d'huile, vidanges périodiques, apprentissages, mise à jour logicielle</td></tr>\n<tr><td>Automatique à trains épicycloïdaux</td><td>Convertisseur de couple, trains épicycloïdaux, embrayages et freins multidisques pilotés hydrauliquement</td><td>Huile spécifique, niveau contrôlé à température précise, adaptation après vidange</td></tr>\n<tr><td>À variation continue (CVT)</td><td>Courroie ou chaîne métallique entre deux poulies à diamètre variable</td><td>Huile spécifique, contrôle des glissements</td></tr>\n</tbody>\n</table>\n<p>Le <strong>convertisseur de couple</strong> est un coupleur hydraulique (pompe, turbine, réacteur) qui permet le démarrage sans embrayage et multiplie le couple à basse vitesse ; un embrayage de pontage le verrouille en roulage pour supprimer le glissement. Sur les véhicules hybrides, la boîte intègre souvent la machine électrique ; sur les véhicules électriques, un réducteur à rapport fixe remplace la boîte.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler le niveau d'une boîte automatique sans jauge.<br>1. Vérifier dans la méthode le type d'huile et la procédure exacte.<br>2. Mettre le véhicule à plat sur le pont, moteur tournant, levier en position prescrite.<br>3. Lire la température d'huile à l'outil de diagnostic et attendre la plage prescrite (par exemple entre 35 et 45 °C selon le constructeur).<br>4. Déposer le bouchon de niveau : l'huile doit s'écouler en filet ; compléter si nécessaire jusqu'à écoulement.<br>5. Reposer le bouchon avec un joint neuf au couple ; réaliser la procédure d'adaptation si elle est demandée.</div>"
      },
      {
       "titre": "Le différentiel et ses variantes",
       "contenu": "<p>En virage, la roue extérieure parcourt une distance plus grande que la roue intérieure. Le <strong>différentiel</strong>, placé dans le pont, permet aux deux roues de tourner à des vitesses différentes tout en recevant le même couple. Il comporte une couronne entraînée par le pignon d'attaque, un boîtier, des satellites et deux planétaires reliés aux arbres de roue. La relation de base est : N<sub>boîtier</sub> = (N<sub>roue gauche</sub> + N<sub>roue droite</sub>) / 2.</p>\n<p>L'inconvénient du différentiel simple est qu'il transmet le même couple aux deux roues : si une roue patine sur un sol glissant, l'autre ne reçoit presque rien. Les solutions sont le <strong>différentiel à glissement limité</strong> (autobloquant mécanique), le <strong>blocage de différentiel</strong> commandé (fréquent sur les véhicules de transport routier et les tout-terrain) et le blocage électronique qui freine la roue qui patine grâce au système antipatinage.</p>\n<p>Les véhicules à <strong>transmission intégrale</strong> répartissent le couple entre les essieux par un différentiel central, un coupleur multidisque piloté ou, sur les hybrides et électriques, une machine électrique par essieu.</p>"
      },
      {
       "titre": "Arbres de transmission et joints",
       "contenu": "<p>Entre la boîte et les roues, le mouvement est transmis malgré les variations d'angle et de longueur dues à la suspension et à la direction. Les <strong>joints homocinétiques</strong> (à billes côté roue, tripodes côté boîte) transmettent une vitesse régulière quel que soit l'angle ; ils sont protégés par des <strong>soufflets</strong> remplis de graisse spécifique. Un soufflet déchiré laisse entrer eau et poussière : le joint s'use rapidement et produit un claquement en braquage à l'accélération. Les véhicules à propulsion et les véhicules de transport routier utilisent des arbres longitudinaux à <strong>joints de cardan</strong>, qui exigent un montage en phase des fourches pour éviter les vibrations.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un soufflet de transmission endommagé est un défaut à signaler au client et un point relevé au contrôle technique ; le remplacer tôt évite de remplacer le joint.</div>"
      },
      {
       "titre": "Entretien et diagnostic de la transmission",
       "contenu": "<p>Les opérations d'entretien périodique portent sur les vidanges prescrites (certaines boîtes sont annoncées « graissées à vie », mais des vidanges sont parfois préconisées en usage sévère), le contrôle des fuites, des soufflets et des supports. En maintenance corrective, l'analyse du symptôme oriente la recherche :</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Hypothèses à hiérarchiser</th></tr></thead>\n<tbody>\n<tr><td>Bruit qui varie avec la vitesse du véhicule, pas avec le régime moteur</td><td>Roulement de roue, différentiel, réducteur, pneumatique</td></tr>\n<tr><td>Bruit qui varie avec le régime moteur, véhicule à l'arrêt</td><td>Moteur, accessoires, volant bi-masse, butée</td></tr>\n<tr><td>Bruit qui disparaît en appuyant sur la pédale d'embrayage</td><td>Arbre primaire de boîte, roulement de boîte</td></tr>\n<tr><td>Saccades au démarrage</td><td>Garnitures, volant bi-masse, supports moteur, apprentissage d'embrayage</td></tr>\n<tr><td>Passages brutaux ou retardés en boîte automatique</td><td>Niveau et qualité d'huile, adaptations, électrovannes, logiciel</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'essai routier en présence du client, ou au moins avec une description très précise des conditions d'apparition du bruit (vitesse, rapport engagé, accélération ou décélération, virage), fait gagner beaucoup de temps et évite de démonter un organe sain.</div>"
      }
     ],
     "points_cles": [
      "Le rapport global d'une chaîne est le produit des rapports successifs",
      "Le couple varie en sens inverse de la vitesse, aux pertes près",
      "Le volant bi-masse filtre les acyclismes et se contrôle par son jeu angulaire",
      "Boîtes robotisées, à double embrayage et automatiques exigent des apprentissages après intervention",
      "Le niveau d'une boîte automatique se contrôle à température précise",
      "Le différentiel simple transmet le même couple aux deux roues",
      "Un soufflet déchiré condamne rapidement le joint homocinétique",
      "L'analyse des conditions d'apparition d'un bruit oriente le diagnostic"
     ],
     "lexique": [
      {
       "terme": "Rapport de transmission",
       "def": "Rapport entre la vitesse de sortie et la vitesse d'entrée d'un mécanisme."
      },
      {
       "terme": "Synchroniseur",
       "def": "Dispositif à cônes qui égalise les vitesses d'un pignon et de son arbre avant engagement."
      },
      {
       "terme": "Volant bi-masse",
       "def": "Volant moteur en deux parties reliées par des ressorts qui amortissent les acyclismes."
      },
      {
       "terme": "Convertisseur de couple",
       "def": "Coupleur hydraulique qui permet le démarrage et multiplie le couple à basse vitesse."
      },
      {
       "terme": "Boîte à double embrayage",
       "def": "Boîte dont deux embrayages alternent pour changer de rapport sans interruption de couple."
      },
      {
       "terme": "Différentiel",
       "def": "Mécanisme qui permet à deux roues d'un même essieu de tourner à des vitesses différentes."
      },
      {
       "terme": "Joint homocinétique",
       "def": "Joint qui transmet une vitesse de rotation constante quel que soit l'angle de fonctionnement."
      },
      {
       "terme": "Apprentissage",
       "def": "Procédure par laquelle un calculateur enregistre les positions ou caractéristiques réelles d'un organe."
      },
      {
       "terme": "Acyclisme",
       "def": "Irrégularité de la vitesse de rotation du vilebrequin due aux combustions successives."
      }
     ]
    },
    {
     "id": "bmv-freinage-pilote",
     "titre": "Freinage piloté : assistance, ABS et contrôle de stabilité",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Calculer les efforts dans un circuit de freinage hydraulique assisté",
      "Expliquer la notion de glissement et le principe de l'antiblocage",
      "Décrire l'architecture d'un système ABS et de contrôle de stabilité",
      "Décrire le fonctionnement du frein de stationnement électrique et du freinage combiné avec la récupération",
      "Réaliser les contrôles et opérations de maintenance d'un circuit de freinage piloté"
     ],
     "sections": [
      {
       "titre": "Du freinage hydraulique au freinage piloté",
       "contenu": "<p>Le cours de seconde a présenté le circuit hydraulique de base : la pédale pousse le piston du maître-cylindre, la pression se transmet par le liquide aux étriers ou aux cylindres de roue. On approfondit ici le calcul des efforts et les systèmes électroniques qui pilotent ce circuit.</p>\n<p>La pression hydraulique est la même en tout point du circuit fermé (principe de Pascal) : p = F / S. L'effort exercé par un piston est donc proportionnel à sa surface. Un <strong>servofrein</strong> (à dépression sur la plupart des véhicules thermiques essence, à pompe à vide sur les diesels, électromécanique sur de nombreux hybrides et électriques) multiplie l'effort du pied.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'effort de serrage d'un étrier.<br>Données : effort du pied 150 N ; rapport de levier de pédale 4 ; coefficient d'assistance 5 ; diamètre du maître-cylindre 22 mm ; étrier à un piston de 54 mm.<br>1. Effort sur le maître-cylindre : 150 × 4 × 5 = 3 000 N.<br>2. Surface du maître-cylindre : π × 0,011<sup>2</sup> ≈ 3,80 × 10<sup>−4</sup> m<sup>2</sup>.<br>3. Pression : p = 3 000 / 3,80 × 10<sup>−4</sup> ≈ 7,9 × 10<sup>6</sup> Pa, soit environ 79 bar.<br>4. Surface du piston d'étrier : π × 0,027<sup>2</sup> ≈ 2,29 × 10<sup>−3</sup> m<sup>2</sup>.<br>5. Effort du piston : 7,9 × 10<sup>6</sup> × 2,29 × 10<sup>−3</sup> ≈ 18 100 N, appliqué de chaque côté du disque par l'étrier flottant.</div>"
      },
      {
       "titre": "Adhérence et glissement",
       "contenu": "<p>L'effort de freinage maximal qu'un pneumatique peut transmettre au sol dépend de l'<strong>adhérence</strong> : F<sub>max</sub> = μ × charge sur la roue, où μ est le coefficient d'adhérence (de l'ordre de 0,8 à 1 sur route sèche, de 0,4 à 0,6 sur route mouillée, beaucoup moins sur neige ou verglas). Pour transmettre un effort, le pneumatique tourne légèrement moins vite que ne le voudrait la vitesse du véhicule : c'est le <strong>glissement</strong>, exprimé en pourcentage. Glissement = (vitesse du véhicule − vitesse de la roue) / vitesse du véhicule.</p>\n<p>L'adhérence est maximale pour un glissement de l'ordre de 10 à 30 % selon le sol. Au-delà, la roue se bloque (glissement de 100 %) : l'adhérence longitudinale diminue et, surtout, l'adhérence latérale disparaît presque. Une roue avant bloquée ne permet plus de diriger le véhicule ; des roues arrière bloquées le font partir en tête-à-queue.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'ABS ne raccourcit pas toujours la distance de freinage (sur gravier ou neige fraîche, elle peut même être plus longue), mais il conserve la possibilité de diriger le véhicule et sa stabilité.</div>"
      },
      {
       "titre": "L'antiblocage des roues (ABS)",
       "contenu": "<p>Le système <strong>ABS</strong> comprend :</p>\n<ul>\n<li>un <strong>capteur de vitesse</strong> par roue, actif à effet Hall ou magnétorésistif dans la majorité des véhicules récents, qui lit une cible magnétique intégrée au roulement ou une couronne dentée ;</li>\n<li>un <strong>groupe hydraulique</strong> comportant, pour chaque circuit de roue, une électrovanne d'admission (normalement ouverte) et une électrovanne d'échappement (normalement fermée), un accumulateur basse pression et une pompe de retour entraînée par un moteur électrique ;</li>\n<li>un <strong>calculateur</strong>, souvent intégré au groupe hydraulique.</li>\n</ul>\n<p>Lorsque le calculateur détecte qu'une roue décélère trop vite par rapport aux autres et que son glissement augmente, il module la pression de cette roue en trois phases répétées plusieurs fois par seconde : <strong>maintien</strong> (admission fermée), <strong>baisse</strong> (échappement ouvert, la pompe renvoie le liquide vers le maître-cylindre), <strong>remontée</strong> (admission rouverte). Le conducteur ressent des pulsations à la pédale.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur de nombreux groupes ABS, la purge du circuit secondaire du groupe hydraulique nécessite l'outil de diagnostic pour piloter les électrovannes et la pompe. Une purge incomplète laisse de l'air qui peut revenir dans le circuit principal lors d'une régulation et allonger brutalement la course de pédale.</div>"
      },
      {
       "titre": "Les fonctions dérivées : antipatinage, répartition, stabilité",
       "contenu": "<p>Sur la base du même matériel, le calculateur réalise d'autres fonctions :</p>\n<table>\n<thead><tr><th>Fonction</th><th>Principe</th></tr></thead>\n<tbody>\n<tr><td>Répartiteur électronique de freinage</td><td>Limite la pression arrière en fonction de la charge et du transfert de masse, remplace le répartiteur mécanique</td></tr>\n<tr><td>Antipatinage (ASR, TCS)</td><td>Freine la roue motrice qui patine et demande au calculateur moteur une réduction de couple</td></tr>\n<tr><td>Contrôle de stabilité (ESP, ESC)</td><td>Compare la trajectoire voulue (angle volant) et la trajectoire réelle (capteur de lacet et d'accélération transversale) ; freine une roue précise pour corriger un survirage ou un sous-virage</td></tr>\n<tr><td>Aide au freinage d'urgence</td><td>Détecte un appui très rapide sur la pédale et applique la pression maximale</td></tr>\n<tr><td>Aide au démarrage en côte</td><td>Maintient la pression quelques instants après le relâchement de la pédale</td></tr>\n</tbody>\n</table>\n<p>Le contrôle de stabilité est obligatoire sur les véhicules neufs légers et lourds dans l'Union européenne depuis plusieurs années. Il utilise un <strong>capteur d'angle de volant</strong> et un <strong>capteur de vitesse de lacet</strong> (rotation autour de l'axe vertical), souvent intégré au calculateur. Après une intervention sur la direction ou la géométrie, ou après le remplacement de ces capteurs, une procédure d'<strong>initialisation</strong> (mise à zéro de l'angle volant) est nécessaire.</p>"
      },
      {
       "titre": "Frein de stationnement électrique et freinage des véhicules électrifiés",
       "contenu": "<p>Le <strong>frein de stationnement électrique</strong> remplace le levier et les câbles par des moteurs électriques montés sur les étriers arrière (moteur-réducteur qui pousse le piston par une vis) ou par un actionneur central à câbles. Le remplacement des plaquettes arrière exige de placer le système en <strong>mode maintenance</strong> à l'outil de diagnostic (ou selon une procédure manuelle prescrite) pour rentrer les pistons, puis de réaliser un réapprentissage.</p>\n<p>Sur les véhicules hybrides et électriques, le freinage est <strong>combiné</strong> : à la pression de la pédale, le calculateur utilise en priorité la machine électrique en récupération, puis complète avec le frein hydraulique. Des systèmes de freinage dits « découplés » (<em>brake-by-wire</em>) mesurent la course de pédale et génèrent la pression par un moteur électrique, la pédale ne commandant directement le circuit qu'en cas de défaillance.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les disques des véhicules électriques sont peu sollicités et se corrodent. On rencontre des disques arrière très oxydés sur des véhicules peu kilométrés, avec bruits et vibrations ; le conseil au client (freinages appuyés occasionnels) et le contrôle visuel attentif font partie de l'entretien.</div>"
      },
      {
       "titre": "Le liquide de frein et la maintenance du circuit",
       "contenu": "<p>Le liquide de frein à base de glycol est <strong>hygroscopique</strong> : il absorbe l'humidité de l'air au fil du temps, ce qui abaisse son point d'ébullition. Lors de freinages répétés, la vapeur formée dans les étriers rend la pédale spongieuse et peut faire perdre le freinage. Les liquides sont classés DOT 3, DOT 4 et DOT 5.1 (glycols, miscibles entre eux mais à ne pas mélanger sans nécessité) et DOT 5 (silicone, non miscible avec les autres). On respecte strictement la spécification du constructeur et la périodicité de remplacement, souvent de deux ans.</p>\n<p>Les contrôles courants sont : épaisseur des disques et plaquettes comparée aux cotes minimales, voile et faux-rond des disques au comparateur, état des flexibles, mesure du point d'ébullition ou de la teneur en eau du liquide, contrôle au banc de freinage (efficacité et déséquilibre entre roues d'un même essieu).</p>"
      },
      {
       "titre": "Diagnostiquer un défaut de capteur de roue",
       "contenu": "<p>Le défaut le plus fréquent sur un système ABS est un défaut de <strong>capteur de vitesse de roue</strong> : voyants ABS et ESP allumés, parfois avec perte de l'aide au démarrage en côte et du régulateur de vitesse, car ces fonctions utilisent la même information. Le calculateur enregistre un code indiquant la roue concernée et la nature du défaut (circuit ouvert, court-circuit, signal non plausible).</p>\n<p>La démarche consiste à lire le code et les valeurs de vitesse des quatre roues en roulant lentement : la roue défaillante affiche zéro ou une valeur incohérente. On vérifie ensuite le connecteur et le faisceau, souvent fragilisés par les mouvements de suspension, puis l'alimentation du capteur actif au connecteur (sa tension est fournie par le calculateur) et enfin l'état de la cible. Une cible magnétique de roulement endommagée par un outil, ou un roulement monté à l'envers lorsque la cible est sur une seule face, donne un signal absent. Une couronne dentée corrodée ou fissurée donne un signal irrégulier, visible à l'oscilloscope sous forme d'impulsions manquantes.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un capteur actif ne se contrôle pas par une simple mesure de résistance comme un ancien capteur inductif ; on contrôle son alimentation et la forme de son signal, en suivant la méthode du constructeur.</div>"
      }
     ],
     "points_cles": [
      "La pression est identique dans tout le circuit : l'effort d'un piston est proportionnel à sa surface",
      "L'adhérence est maximale pour un glissement modéré ; roue bloquée signifie perte de direction",
      "L'ABS module la pression en maintien, baisse et remontée grâce à des électrovannes et une pompe",
      "Le contrôle de stabilité compare trajectoire voulue et trajectoire réelle",
      "Le capteur d'angle volant doit être initialisé après intervention sur direction ou géométrie",
      "Le frein de parking électrique impose un mode maintenance pour changer les plaquettes",
      "Sur véhicule électrifié, récupération et frein hydraulique se combinent",
      "Le liquide de frein absorbe l'humidité et se remplace périodiquement"
     ],
     "lexique": [
      {
       "terme": "Servofrein",
       "def": "Dispositif qui multiplie l'effort exercé par le conducteur sur la pédale de frein."
      },
      {
       "terme": "Coefficient d'adhérence",
       "def": "Rapport entre l'effort maximal transmissible par le pneumatique et la charge sur la roue."
      },
      {
       "terme": "Glissement",
       "def": "Écart relatif entre la vitesse du véhicule et la vitesse périphérique de la roue."
      },
      {
       "terme": "ABS",
       "def": "Système d'antiblocage des roues qui module la pression de freinage roue par roue."
      },
      {
       "terme": "ESP",
       "def": "Contrôle électronique de stabilité qui corrige la trajectoire en freinant sélectivement une roue."
      },
      {
       "terme": "Vitesse de lacet",
       "def": "Vitesse de rotation du véhicule autour de son axe vertical."
      },
      {
       "terme": "Hygroscopique",
       "def": "Qui absorbe l'humidité de l'air."
      },
      {
       "terme": "Mode maintenance",
       "def": "État dans lequel un système piloté est placé pour permettre une intervention mécanique en sécurité."
      },
      {
       "terme": "Freinage combiné",
       "def": "Répartition du freinage entre récupération électrique et frein hydraulique."
      }
     ]
    },
    {
     "id": "bmv-trains-roulants-pneumatiques",
     "titre": "Trains roulants, géométrie et pneumatiques",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Décrire les types de suspensions et le rôle des ressorts et amortisseurs",
      "Définir les angles de géométrie et leurs effets sur le comportement du véhicule",
      "Exploiter un rapport de contrôle de géométrie et choisir les réglages",
      "Décoder le marquage d'un pneumatique et vérifier sa conformité",
      "Expliquer le fonctionnement d'un système de surveillance de pression des pneumatiques"
     ],
     "sections": [
      {
       "titre": "Le rôle de la liaison au sol",
       "contenu": "<p>La <strong>liaison au sol</strong> regroupe les pneumatiques, les roues, les éléments de guidage (bras, triangles, essieux), la suspension et la direction. Elle doit maintenir le contact des pneumatiques avec la route, guider les roues selon une géométrie précise, filtrer les irrégularités pour le confort, et transmettre les efforts de traction, de freinage et de virage. Le cours de seconde en a présenté les éléments ; on étudie ici leurs principes de fonctionnement et leur réglage.</p>\n<p>On distingue les <strong>masses suspendues</strong> (caisse, moteur, passagers) et les <strong>masses non suspendues</strong> (roues, freins, une partie des bras). Plus les masses non suspendues sont faibles, mieux la roue suit les irrégularités : c'est l'une des raisons de l'emploi de jantes et de bras en alliage d'aluminium.</p>"
      },
      {
       "titre": "Suspensions : ressorts et amortisseurs",
       "contenu": "<p>Le <strong>ressort</strong> supporte la charge et stocke l'énergie lors d'un choc. Sa caractéristique est la <strong>raideur</strong> k (N/mm) : F = k × x, où x est la flèche. Les ressorts sont hélicoïdaux (voitures, motos), à lames (utilitaires, porteurs), à barre de torsion, ou pneumatiques (autobus, tracteurs routiers, certaines voitures haut de gamme), ces derniers permettant de régler la hauteur quelle que soit la charge.</p>\n<p>L'<strong>amortisseur</strong> hydraulique freine les oscillations du ressort en faisant passer de l'huile à travers des clapets calibrés. Il dissipe l'énergie en chaleur. Un amortisseur usé ne se voit pas forcément : la caisse rebondit, la roue décolle sur les bosses, la distance de freinage augmente, les pneumatiques s'usent par plaques. Les amortisseurs pilotés modifient leur loi d'amortissement par électrovanne en fonction des conditions de route.</p>\n<p>La <strong>barre stabilisatrice</strong> (ou antiroulis) relie les deux roues d'un même essieu et limite l'inclinaison de la caisse en virage ; ses biellettes et silentblocs sont des sources fréquentes de claquements.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'affaissement d'un ressort sous une charge supplémentaire.<br>Données : raideur 30 N/mm à la roue ; charge supplémentaire de 80 kg sur cette roue ; g = 9,81 m/s<sup>2</sup>.<br>1. Effort supplémentaire : F = 80 × 9,81 ≈ 785 N.<br>2. Affaissement : x = F / k = 785 / 30 ≈ 26 mm.<br>3. Interprétation : cet affaissement modifie le carrossage et le parallélisme selon le type de train ; c'est pourquoi la géométrie se contrôle à la charge et à la hauteur de référence prescrites.</div>"
      },
      {
       "titre": "Les angles de géométrie",
       "contenu": "<table>\n<thead><tr><th>Angle</th><th>Définition</th><th>Effet principal</th><th>Symptôme d'un déréglage</th></tr></thead>\n<tbody>\n<tr><td>Parallélisme (pincement ou ouverture)</td><td>Différence d'écartement entre l'avant et l'arrière des roues d'un même essieu, vue de dessus</td><td>Stabilité en ligne droite, usure</td><td>Usure en biseau (en « dents de scie ») des pneumatiques, véhicule qui tire</td></tr>\n<tr><td>Carrossage</td><td>Inclinaison de la roue par rapport à la verticale, vue de face (négatif si le haut rentre vers le véhicule)</td><td>Tenue en virage, usure</td><td>Usure d'un seul côté de la bande de roulement, tirage</td></tr>\n<tr><td>Chasse</td><td>Inclinaison de l'axe de pivot vue de côté</td><td>Rappel du volant en ligne droite, stabilité</td><td>Volant qui ne revient pas, tirage si différence gauche-droite</td></tr>\n<tr><td>Inclinaison de pivot</td><td>Inclinaison de l'axe de pivot vue de face</td><td>Rappel, réduction des efforts de braquage</td><td>Révèle souvent un élément déformé après choc</td></tr>\n<tr><td>Angle de poussée</td><td>Angle entre l'axe de symétrie du véhicule et la direction de poussée du train arrière</td><td>Trajectoire du véhicule</td><td>Volant de travers en ligne droite, véhicule qui « crabe »</td></tr>\n</tbody>\n</table>\n<p>En général, seul le parallélisme est réglable sur la plupart des voitures (par les biellettes de direction) ; le carrossage et la chasse le sont parfois par excentriques. Un angle non réglable hors tolérance signale une pièce déformée ou usée.</p>"
      },
      {
       "titre": "Réaliser et interpréter un contrôle de géométrie",
       "contenu": "<p>Un banc de géométrie (à caméras et cibles ou à capteurs) mesure les angles et les compare aux valeurs du constructeur. Le rapport imprimé présente, pour chaque roue, la valeur mesurée avant et après réglage et la plage de tolérance, avec un code couleur (vert conforme, rouge hors tolérance).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conduire un contrôle de géométrie.<br>1. Conditions préalables : pressions des pneumatiques conformes, pneumatiques de même dimension et usure comparable, véhicule à vide avec plein de carburant ou charge prescrite, absence de jeu dans les rotules, roulements et silentblocs.<br>2. Installer les cibles, réaliser la compensation du voile de jante si le banc le demande.<br>3. Relever toutes les valeurs initiales et les imprimer.<br>4. Régler dans l'ordre prescrit : en général l'arrière d'abord (s'il est réglable), puis le carrossage et la chasse avant, enfin le parallélisme avant, volant maintenu droit par un bloque-volant.<br>5. Initialiser le capteur d'angle de volant et, si le véhicule en est équipé, recalibrer les caméras et radars d'aide à la conduite selon la procédure.<br>6. Imprimer le rapport final et réaliser un essai routier.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> régler un parallélisme sur un train qui présente un jeu de rotule ou un bras déformé masque le défaut sans le corriger. Le contrôle des jeux est toujours fait avant la mesure.</div>"
      },
      {
       "titre": "Les pneumatiques : constitution et marquage",
       "contenu": "<p>Un pneumatique radial comprend une carcasse à câbles disposés radialement, des nappes sommet métalliques sous la bande de roulement, des flancs souples et des tringles qui assurent l'accrochage sur la jante. Son marquage normalisé donne ses caractéristiques. Exemple : <strong>205/55 R16 91V</strong>.</p>\n<table>\n<thead><tr><th>Élément</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>205</td><td>Largeur de section en millimètres</td></tr>\n<tr><td>55</td><td>Série : hauteur du flanc égale à 55 % de la largeur (205 × 0,55 ≈ 113 mm)</td></tr>\n<tr><td>R</td><td>Structure radiale</td></tr>\n<tr><td>16</td><td>Diamètre de la jante en pouces</td></tr>\n<tr><td>91</td><td>Indice de charge : 615 kg maximum par pneumatique</td></tr>\n<tr><td>V</td><td>Indice de vitesse : 240 km/h maximum</td></tr>\n</tbody>\n</table>\n<p>Le flanc porte aussi la date de fabrication (quatre chiffres : semaine puis année, par exemple 2324 pour la 23e semaine de 2024), le marquage d'homologation européenne, éventuellement les marquages hiver (symbole montagne à trois pics avec flocon) et le sens de rotation. Les pneumatiques montés doivent avoir des indices de charge et de vitesse au moins égaux à ceux prévus par le constructeur. Sur un même essieu, ils doivent être de même dimension, de même structure et de même catégorie d'utilisation.</p>\n<p>La profondeur minimale des sculptures est fixée par le Code de la route : 1,6 mm pour les voitures particulières, contrôlée grâce aux témoins d'usure. Les poids lourds et les motocycles ont des règles propres.</p>"
      },
      {
       "titre": "Surveillance de pression et entretien des roues",
       "contenu": "<p>Le <strong>système de surveillance de la pression des pneumatiques</strong> (TPMS), obligatoire sur les voitures particulières neuves, existe en deux versions. Le système <strong>direct</strong> utilise une valve-capteur dans chaque roue qui transmet pression et température par radio ; après permutation ou remplacement, les capteurs doivent être réappris ou programmés. Le système <strong>indirect</strong> détecte un sous-gonflage par la variation de vitesse de rotation d'une roue mesurée par les capteurs ABS ; il doit être réinitialisé après tout réglage de pression ou changement de pneumatique.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le resserrage des roues se fait à la clé dynamométrique au couple prescrit, en croix, jamais uniquement à la clé à chocs. On conseille au client de faire vérifier le serrage après quelques dizaines de kilomètres, surtout pour les jantes en alliage et les véhicules de transport routier, et on note cette préconisation sur la facture.</div>\n<p>L'<strong>équilibrage</strong> des roues complète l'entretien : une roue déséquilibrée de quelques dizaines de grammes provoque des vibrations au volant à partir d'une certaine vitesse et une usure irrégulière. L'équilibreuse indique la masse et la position des masselottes à placer sur chaque bord de jante ; on utilise des masses adhésives sur les jantes en alliage. Une vibration qui persiste après équilibrage oriente vers un pneumatique déformé, un voile de jante ou un défaut de centrage sur le moyeu.</p>"
      },
      {
       "titre": "La direction assistée électrique",
       "contenu": "<p>Les directions assistées hydrauliques ont presque disparu des voitures récentes au profit de la <strong>direction assistée électrique</strong>. Un moteur électrique, monté sur la colonne, sur le pignon ou sur la crémaillère, fournit un couple d'assistance calculé à partir du <strong>capteur de couple</strong> de la colonne (effort du conducteur), de la vitesse du véhicule et de l'angle de braquage. L'assistance est forte en manœuvre et réduite à vitesse élevée. Ce moteur sert aussi d'actionneur aux aides à la conduite : maintien dans la voie, aide au stationnement.</p>\n<p>Après remplacement de la crémaillère, du capteur d'angle ou du calculateur, des procédures d'initialisation des butées et de la position centrale sont nécessaires. Les véhicules de transport routier conservent le plus souvent une direction hydraulique, parfois complétée par une assistance électrique. Les motocycles n'ont pas d'assistance mais un amortisseur de direction sur certains modèles sportifs.</p>"
      }
     ],
     "points_cles": [
      "Le ressort supporte et stocke, l'amortisseur dissipe l'énergie des oscillations",
      "F = k × x : la raideur relie effort et flèche d'un ressort",
      "Parallélisme, carrossage, chasse, inclinaison de pivot et angle de poussée définissent la géométrie",
      "On contrôle les jeux et les pressions avant toute mesure de géométrie",
      "Un angle non réglable hors tolérance révèle une pièce déformée ou usée",
      "Le marquage 205/55 R16 91V donne largeur, série, structure, diamètre, charge et vitesse",
      "Profondeur minimale de sculpture des voitures particulières : 1,6 mm",
      "Le TPMS direct impose un réapprentissage des capteurs, l'indirect une réinitialisation"
     ],
     "lexique": [
      {
       "terme": "Masses non suspendues",
       "def": "Éléments situés entre le sol et la suspension : roues, freins, une partie des bras."
      },
      {
       "terme": "Raideur",
       "def": "Effort nécessaire pour comprimer un ressort d'une unité de longueur, en N/mm."
      },
      {
       "terme": "Amortisseur",
       "def": "Organe hydraulique qui freine les oscillations de la suspension."
      },
      {
       "terme": "Parallélisme",
       "def": "Différence d'écartement entre l'avant et l'arrière des roues d'un même essieu."
      },
      {
       "terme": "Carrossage",
       "def": "Inclinaison de la roue par rapport à la verticale, vue de face."
      },
      {
       "terme": "Chasse",
       "def": "Inclinaison de l'axe de pivot vue de côté, qui assure le rappel de la direction."
      },
      {
       "terme": "Angle de poussée",
       "def": "Angle entre l'axe de symétrie du véhicule et la direction imposée par le train arrière."
      },
      {
       "terme": "Indice de charge",
       "def": "Code du marquage d'un pneumatique qui indique la charge maximale qu'il peut porter."
      },
      {
       "terme": "Indice de vitesse",
       "def": "Lettre du marquage d'un pneumatique qui indique la vitesse maximale autorisée."
      },
      {
       "terme": "TPMS",
       "def": "Système de surveillance de la pression des pneumatiques."
      }
     ]
    },
    {
     "id": "bmv-assemblages-materiaux",
     "titre": "Assemblages, comportement mécanique et matériaux",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Identifier les solutions d'assemblage démontables et non démontables d'un véhicule",
      "Décoder la classe de qualité d'une vis et choisir une méthode de serrage",
      "Expliquer les sollicitations simples subies par une pièce et la notion de contrainte",
      "Identifier les principaux matériaux des véhicules et leurs propriétés",
      "Choisir les précautions de démontage et de remontage selon les matériaux et assemblages"
     ],
     "sections": [
      {
       "titre": "Les familles d'assemblages",
       "contenu": "<p>Un véhicule est un assemblage de milliers de pièces. Le technicien doit reconnaître le type de liaison pour savoir comment démonter sans détériorer et remonter conformément. On distingue :</p>\n<ul>\n<li>les assemblages <strong>démontables</strong> : vis et écrous, goujons, clavettes, cannelures, agrafes et clips, colliers, emmanchements légers ;</li>\n<li>les assemblages <strong>non démontables</strong> (ou démontables avec destruction) : soudage par points, rivetage, collage structural, sertissage, emmanchement serré.</li>\n</ul>\n<p>Les caisses modernes associent plusieurs procédés : points de soudure, rivets auto-poinçonneurs, colles structurales. Les réparations de carrosserie relèvent d'un autre métier, mais le mécanicien rencontre ces assemblages lorsqu'il dépose des éléments (berceaux, traverses, supports de batterie de traction) et doit respecter les consignes de remplacement des fixations.</p>"
      },
      {
       "titre": "Les vis : désignation et classes de qualité",
       "contenu": "<p>Une vis métrique est désignée par son diamètre nominal, son pas et sa longueur : M10 × 1,25 × 40 signifie diamètre 10 mm, pas fin de 1,25 mm, longueur 40 mm. La tête porte la <strong>classe de qualité</strong>, sous la forme de deux nombres séparés par un point, par exemple 8.8, 10.9 ou 12.9.</p>\n<table>\n<thead><tr><th>Classe</th><th>Résistance à la rupture R<sub>m</sub></th><th>Limite d'élasticité R<sub>e</sub></th><th>Exemples d'emploi</th></tr></thead>\n<tbody>\n<tr><td>8.8</td><td>800 MPa</td><td>0,8 × 800 = 640 MPa</td><td>Fixations courantes d'accessoires et de carters</td></tr>\n<tr><td>10.9</td><td>1 000 MPa</td><td>900 MPa</td><td>Fixations de trains roulants, de culasse, de volant</td></tr>\n<tr><td>12.9</td><td>1 200 MPa</td><td>1 080 MPa</td><td>Fixations très sollicitées</td></tr>\n</tbody>\n</table>\n<p>Le premier nombre multiplié par 100 donne R<sub>m</sub> en MPa ; le produit des deux nombres multiplié par 10 donne R<sub>e</sub>. Remplacer une vis par une vis de classe inférieure peut provoquer une rupture.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'effort maximal avant déformation permanente d'une vis M10 de classe 10.9.<br>1. Section résistante d'une vis M10 à pas standard (valeur de table) : environ 58 mm<sup>2</sup>.<br>2. Limite d'élasticité : R<sub>e</sub> = 10 × 9 × 10 = 900 MPa, soit 900 N/mm<sup>2</sup>.<br>3. Effort limite : F = R<sub>e</sub> × S = 900 × 58 ≈ 52 200 N, soit environ 5,3 tonnes-force.<br>4. Interprétation : le serrage prescrit vise une fraction importante de cette valeur ; la vis travaille comme un ressort très raide qui plaque les pièces.</div>"
      },
      {
       "titre": "Méthodes de serrage",
       "contenu": "<p>Le but d'un serrage n'est pas d'atteindre un couple, mais d'obtenir une <strong>tension</strong> (précharge) dans la vis qui maintient les pièces plaquées malgré les efforts de fonctionnement. Le couple n'est qu'un moyen indirect : une grande partie sert à vaincre les frottements sous tête et dans le filetage. Un filetage sale, sec ou au contraire graissé alors que la méthode ne le prévoit pas modifie fortement la tension obtenue.</p>\n<table>\n<thead><tr><th>Méthode</th><th>Principe</th><th>Emploi typique</th></tr></thead>\n<tbody>\n<tr><td>Serrage au couple</td><td>Clé dynamométrique réglée sur la valeur prescrite</td><td>Majorité des fixations</td></tr>\n<tr><td>Serrage au couple puis à l'angle</td><td>Pré-serrage au couple, puis rotation d'un angle défini au rapporteur d'angle</td><td>Vis de culasse, de palier, de trains roulants ; tension précise quel que soit le frottement</td></tr>\n<tr><td>Serrage dans la zone plastique</td><td>La vis est volontairement amenée au-delà de sa limite élastique</td><td>Vis de culasse ou de bielle « à usage unique »</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une vis serrée dans sa zone plastique s'est allongée de façon permanente : sa réutilisation est interdite. La méthode du constructeur précise les vis à remplacer systématiquement, souvent aussi les écrous autofreinés et les vis enduites de frein-filet microencapsulé.</div>\n<p>Le <strong>freinage</strong> des assemblages filetés évite le desserrage par vibrations : écrou autofreiné à insert, frein-filet liquide anaérobie (de résistance faible, moyenne ou forte selon la couleur et la référence du fabricant), rondelles spécifiques, goupilles. L'ordre de serrage (en spirale du centre vers l'extérieur pour une culasse, en croix pour une roue) est aussi important que la valeur.</p>"
      },
      {
       "titre": "Comportement mécanique : sollicitations et contraintes",
       "contenu": "<p>Une pièce soumise à des efforts se déforme. On distingue des sollicitations simples :</p>\n<ul>\n<li>la <strong>traction</strong> (vis serrée, câble) et la <strong>compression</strong> (bielle lors de la combustion) ;</li>\n<li>le <strong>cisaillement</strong> (goupille, rivet, clavette) ;</li>\n<li>la <strong>flexion</strong> (essieu, bras de suspension, lame de ressort) ;</li>\n<li>la <strong>torsion</strong> (arbre de transmission, barre stabilisatrice, ressort hélicoïdal).</li>\n</ul>\n<p>La <strong>contrainte</strong> σ est l'effort rapporté à la section : en traction, σ = F / S, en MPa (N/mm<sup>2</sup>). Tant que la contrainte reste inférieure à la limite d'élasticité, la pièce reprend sa forme quand l'effort cesse (déformation élastique). Au-delà, elle reste déformée (déformation plastique), puis rompt si l'effort augmente encore.</p>\n<p>La plupart des ruptures de pièces de véhicule sont des ruptures par <strong>fatigue</strong> : des efforts répétés des millions de fois, même inférieurs à la limite d'élasticité, finissent par créer une fissure qui progresse. Une cassure de fatigue présente une zone lisse avec des lignes concentriques (progression lente) et une zone grenue (rupture finale brutale). Une rayure, une corrosion ou un choc d'outil sur une pièce sollicitée (ressort, bras, arbre) amorce ce type de fissure.</p>"
      },
      {
       "titre": "Les matériaux des véhicules",
       "contenu": "<table>\n<thead><tr><th>Famille</th><th>Exemples d'emploi</th><th>Propriétés et précautions</th></tr></thead>\n<tbody>\n<tr><td>Aciers (dont aciers à haute et très haute limite élastique)</td><td>Structure de caisse, vilebrequin, engrenages, ressorts, disques</td><td>Résistants, se corrodent ; les aciers à très haute limite élastique ne se redressent pas et ne se chauffent pas</td></tr>\n<tr><td>Fontes</td><td>Disques et tambours, blocs-cylindres, carters de différentiel</td><td>Bonne tenue à l'usure et à la chaleur, fragiles aux chocs</td></tr>\n<tr><td>Alliages d'aluminium</td><td>Culasses, blocs-cylindres, jantes, bras de suspension, carters de batterie</td><td>Légers, bons conducteurs thermiques, filetages fragiles, corrosion galvanique au contact de l'acier</td></tr>\n<tr><td>Alliages de magnésium</td><td>Carters, supports, pièces de moto</td><td>Très légers, sensibles à la corrosion, inflammables sous forme de copeaux</td></tr>\n<tr><td>Polymères et composites</td><td>Pare-chocs, collecteurs d'admission, réservoirs, carénages de moto, pièces en fibres de carbone</td><td>Légers, isolants, sensibles à la chaleur et aux solvants ; réparation spécifique</td></tr>\n<tr><td>Cuivre</td><td>Faisceaux, enroulements de machines électriques, barres de connexion de batterie</td><td>Excellent conducteur électrique</td></tr>\n<tr><td>Élastomères</td><td>Joints, durites, silentblocs, pneumatiques</td><td>Vieillissent (chaleur, ozone), compatibilité avec les fluides à respecter</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un filetage dans une culasse en aluminium arraché par un serrage excessif se répare par un filet rapporté (insert hélicoïdal), mais ce travail aurait été évité par l'usage systématique de la clé dynamométrique. Sur l'aluminium, on évite aussi les grattoirs métalliques et disques abrasifs pour nettoyer les plans de joint.</div>"
      },
      {
       "titre": "Guidage en rotation et étanchéité",
       "contenu": "<p>Les arbres et roues sont guidés par des <strong>roulements</strong> (à billes, à rouleaux cylindriques ou coniques, à aiguilles) ou par des <strong>coussinets</strong> lisses lubrifiés sous pression (paliers de vilebrequin et de bielle). Les roulements de roue récents sont des ensembles préréglés, souvent intégrés au moyeu, qui ne se règlent pas ; les roulements coniques de certains véhicules de transport routier et motocycles demandent un réglage de jeu ou de précharge.</p>\n<p>L'étanchéité est assurée par des joints statiques (joints plats, toriques, pâtes d'étanchéité) et dynamiques (bagues d'étanchéité à lèvre sur les arbres tournants). Une bague à lèvre se monte avec un mandrin adapté, lèvre lubrifiée, sans dépasser la cote d'enfoncement prévue.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> au remontage, on remplace systématiquement les joints démontés, les vis à usage unique et les écrous autofreinés, sauf indication contraire du constructeur. Une économie de quelques euros peut coûter une fuite ou un retour atelier.</div>"
      },
      {
       "titre": "Démonter sans détériorer : les bonnes pratiques",
       "contenu": "<p>La connaissance des assemblages et des matériaux se traduit par des gestes professionnels précis au démontage :</p>\n<ul>\n<li>identifier avant de forcer : une pièce qui résiste est souvent maintenue par une fixation cachée, un clip ou une colle ; la méthode du constructeur indique l'ordre de dépose ;</li>\n<li>utiliser l'outil adapté à l'empreinte (six pans, Torx, Torx à téton, douze pans) et l'engager à fond : une empreinte arrondie transforme un démontage de cinq minutes en une heure d'extraction ;</li>\n<li>sur une vis grippée par la corrosion, appliquer un dégrippant et laisser agir, frapper légèrement la tête pour rompre l'oxydation ; ne chauffer que si la méthode l'autorise et jamais à proximité de canalisations de carburant, de faisceaux ou d'une batterie ;</li>\n<li>repérer la position des pièces avant dépose (marquage au feutre, photographies) lorsqu'un remontage dans la même position est nécessaire, par exemple pour un arbre de transmission longitudinal équilibré ou un excentrique de réglage de géométrie ;</li>\n<li>nettoyer les filetages taraudés à l'aide d'un taraud de reprise et souffler les trous borgnes, car un liquide ou un résidu au fond d'un trou peut fendre la pièce au serrage ;</li>\n<li>protéger les pièces déposées de la poussière et des chocs, en particulier les pièces usinées et les connecteurs.</li>\n</ul>\n<p>Ces règles s'appliquent quelle que soit l'option : les fixations d'un tracteur routier ou d'une moto sportive obéissent aux mêmes lois de la mécanique, avec des dimensions et des matériaux différents.</p>"
      }
     ],
     "points_cles": [
      "Reconnaître le type d'assemblage conditionne la méthode de démontage",
      "Classe 10.9 : Rm = 1 000 MPa et Re = 900 MPa",
      "Le serrage vise une tension dans la vis ; le couple n'en est qu'une mesure indirecte",
      "Le serrage couple plus angle donne une tension plus précise",
      "Une vis serrée dans sa zone plastique ne se réutilise pas",
      "Contrainte σ = F / S ; au-delà de Re la déformation devient permanente",
      "La plupart des ruptures en service sont des ruptures par fatigue",
      "L'aluminium est léger mais ses filetages sont fragiles et il se corrode au contact de l'acier"
     ],
     "lexique": [
      {
       "terme": "Classe de qualité",
       "def": "Marquage d'une vis indiquant sa résistance à la rupture et sa limite d'élasticité."
      },
      {
       "terme": "Précharge",
       "def": "Tension créée dans une vis par le serrage, qui plaque les pièces assemblées."
      },
      {
       "terme": "Serrage angulaire",
       "def": "Serrage complété par une rotation d'un angle défini après un pré-serrage au couple."
      },
      {
       "terme": "Limite d'élasticité",
       "def": "Contrainte au-delà de laquelle un matériau garde une déformation permanente."
      },
      {
       "terme": "Contrainte",
       "def": "Effort intérieur rapporté à la surface de la section, exprimé en MPa."
      },
      {
       "terme": "Fatigue",
       "def": "Endommagement progressif d'une pièce sous l'effet d'efforts répétés, menant à la rupture."
      },
      {
       "terme": "Corrosion galvanique",
       "def": "Corrosion accélérée d'un métal au contact d'un autre métal en présence d'humidité."
      },
      {
       "terme": "Frein-filet",
       "def": "Produit anaérobie qui durcit dans le filetage pour empêcher le desserrage."
      },
      {
       "terme": "Bague d'étanchéité à lèvre",
       "def": "Joint dynamique qui assure l'étanchéité autour d'un arbre en rotation."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Entretenir, mesurer et diagnostiquer",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmv-entretien-controle-technique",
     "titre": "Entretien périodique, pré-contrôle technique et conseil au client",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Déterminer les opérations d'entretien à partir d'un plan d'entretien fixe ou variable",
      "Choisir les produits conformes aux normes et homologations exigées",
      "Réaliser les opérations préparatoires au contrôle technique et identifier les défaillances",
      "Hiérarchiser et formuler des préconisations au client",
      "Tracer l'entretien et réinitialiser les indicateurs"
     ],
     "sections": [
      {
       "titre": "L'entretien périodique : finalité et méthodologie",
       "contenu": "<p>L'<strong>entretien périodique</strong> regroupe les opérations planifiées qui maintiennent le véhicule en état de sécurité, de fiabilité et de conformité réglementaire : remplacement des fluides et filtres, remplacement des pièces d'usure à échéance, contrôles visuels et fonctionnels. C'est le premier pôle d'activité du titulaire du bac pro. Le cours de seconde a présenté le plan d'entretien ; on étudie ici la méthodologie complète d'une intervention.</p>\n<p>La méthodologie se déroule en quatre temps :</p>\n<ol>\n<li><strong>Préparer</strong> : identifier le véhicule (numéro VIN, motorisation, équipements), consulter son historique, rechercher dans la documentation les opérations dues à ce kilométrage ou cette date, préparer les pièces, produits et outillages.</li>\n<li><strong>Contrôler</strong> : réaliser les vérifications de la check-list (niveaux, fuites, pneumatiques, freins, éclairage, liaisons au sol, échappement, batterie, balais d'essuie-glace, etc.).</li>\n<li><strong>Remplacer et ajuster</strong> : vidanges, filtres, pièces d'usure, compléments de niveaux, pressions des pneumatiques.</li>\n<li><strong>Clôturer</strong> : réinitialiser l'indicateur d'entretien, renseigner le carnet ou le carnet numérique, noter les anomalies et préconisations sur l'OR.</li>\n</ol>"
      },
      {
       "titre": "Plans d'entretien fixes et variables",
       "contenu": "<p>Les constructeurs définissent l'entretien selon deux logiques. Le <strong>plan fixe</strong> indique des échéances en kilomètres et en temps (par exemple tous les 20 000 km ou tous les ans, au premier des deux termes atteint). Le <strong>plan variable</strong> (ou entretien flexible) laisse le calculateur calculer l'échéance à partir de l'usage réel : nombre de démarrages à froid, régimes, températures, durée de fonctionnement, qualité estimée de l'huile. Le véhicule affiche alors le nombre de kilomètres ou de jours restant.</p>\n<p>Le plan précise souvent des conditions d'<strong>usage sévère</strong> (trajets courts répétés, zones poussiéreuses, remorquage, taxi, véhicules de livraison) qui raccourcissent les échéances. Le technicien interroge le client sur son usage pour appliquer le bon plan.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déterminer les opérations dues sur un véhicule.<br>Données : plan fixe ; vidange et filtre à huile tous les 20 000 km ou 1 an ; filtre d'habitacle tous les 20 000 km ou 1 an ; filtre à air tous les 60 000 km ; liquide de frein tous les 2 ans ; bougies tous les 60 000 km ou 4 ans ; véhicule de 3 ans et 41 500 km, dernier entretien à 2 ans et 20 300 km.<br>1. Vidange et filtre à huile : 1 an écoulé depuis le dernier entretien, donc dus.<br>2. Filtre d'habitacle : dû pour la même raison.<br>3. Filtre à air : 60 000 km non atteints, contrôle visuel seulement.<br>4. Liquide de frein : remplacé à 2 ans selon l'historique ? À vérifier ; s'il ne l'a jamais été, il est dû (3 ans).<br>5. Bougies : ni 60 000 km ni 4 ans, non dues.<br>6. Conclusion : vérifier l'historique avant de valider la liste, et la présenter au client avec le devis.</div>"
      },
      {
       "titre": "Choisir les bons produits",
       "contenu": "<p>Les huiles moteur sont caractérisées par leur <strong>grade de viscosité</strong> SAE, par exemple 0W-20 ou 5W-30 : le premier nombre suivi de W (winter) caractérise le comportement à froid (plus il est petit, plus l'huile circule facilement au démarrage), le second la viscosité à chaud. Elles doivent surtout respecter les <strong>normes de performance</strong> exigées : normes ACEA (par exemple C2, C3 pour les huiles compatibles avec les filtres à particules, à faible teneur en cendres) et <strong>homologations constructeurs</strong>, indiquées par un code sur le bidon. Une huile de bonne viscosité mais sans l'homologation requise peut endommager le filtre à particules, la distribution variable ou la courroie de distribution baignée dans l'huile.</p>\n<p>Les autres fluides suivent la même logique : liquide de refroidissement de la technologie prescrite (ne pas mélanger des technologies différentes sans rinçage), liquide de frein DOT exigé, huile de boîte spécifique, AdBlue conforme, fluide frigorigène. Sur un véhicule électrique, le liquide de refroidissement de la batterie a souvent des exigences de faible conductivité électrique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'entretien d'un véhicule sous garantie réalisé avec un produit non homologué peut entraîner un refus de prise en charge en cas d'avarie. Le bidon ou la référence utilisée est noté sur l'OR.</div>"
      },
      {
       "titre": "Le contrôle technique des véhicules",
       "contenu": "<p>Le <strong>contrôle technique</strong> est un examen réglementaire réalisé par un centre agréé, indépendant de l'activité de réparation. Pour les voitures particulières, il intervient dans les six mois précédant le 4e anniversaire de la première mise en circulation, puis tous les deux ans. Les véhicules lourds (poids lourds, autobus, autocars) sont contrôlés tous les ans, avec des règles propres. Les motocycles et autres véhicules de la catégorie L y sont soumis depuis 2024 selon un calendrier progressif.</p>\n<p>Le contrôleur vérifie de nombreux points regroupés par fonctions (identification, freinage, direction, visibilité, éclairage et signalisation, liaisons au sol, structure et carrosserie, équipements, nuisances dont émissions polluantes et bruit). Les défaillances sont classées en trois niveaux pour les voitures particulières :</p>\n<table>\n<thead><tr><th>Niveau</th><th>Conséquence</th></tr></thead>\n<tbody>\n<tr><td>Défaillance mineure</td><td>Pas de contre-visite, réparation conseillée</td></tr>\n<tr><td>Défaillance majeure</td><td>Contre-visite obligatoire dans un délai de deux mois</td></tr>\n<tr><td>Défaillance critique</td><td>Contre-visite obligatoire ; le véhicule ne peut circuler que le jour du contrôle pour être réparé</td></tr>\n</tbody>\n</table>\n<p>Le contrôle comprend la lecture des données du diagnostic embarqué sur les véhicules récents : voyant de défaut moteur allumé, codes défaut liés à la dépollution, moniteurs non prêts peuvent entraîner une défaillance.</p>"
      },
      {
       "titre": "Les opérations préparatoires au contrôle technique",
       "contenu": "<p>De nombreux clients demandent un <strong>pré-contrôle</strong> avant le passage au centre. Le technicien réalise alors une inspection organisée selon les mêmes fonctions que le contrôle réglementaire, afin de détecter les défauts qui entraîneraient une contre-visite :</p>\n<ul>\n<li>éclairage et signalisation (fonctionnement, réglage des projecteurs, état des optiques) ;</li>\n<li>pneumatiques (profondeur, état des flancs, conformité des dimensions sur un même essieu) ;</li>\n<li>freinage (efficacité et déséquilibre au banc, état des disques, flexibles, fuites, frein de stationnement) ;</li>\n<li>direction et trains (jeux de rotules et de roulements, soufflets de crémaillère et de transmission) ;</li>\n<li>visibilité (pare-brise : impacts dans le champ de vision, essuie-glaces, lave-glace) ;</li>\n<li>pollution (absence de voyant, fuites d'huile, état de l'échappement, opacité des fumées pour un diesel) ;</li>\n<li>équipements obligatoires (ceintures, plaques d'immatriculation, avertisseur sonore).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un code défaut effacé juste avant le contrôle technique laisse les moniteurs non prêts, ce qui peut être relevé par le centre. Il faut réparer la cause, puis laisser le véhicule rouler dans les conditions prévues par le constructeur pour que les tests de diagnostic embarqué se réalisent.</div>"
      },
      {
       "titre": "Formuler et hiérarchiser les préconisations",
       "contenu": "<p>À l'issue de l'entretien, le technicien transmet par écrit les anomalies constatées non traitées. Une préconisation utile est <strong>précise</strong> (organe, côté, valeur mesurée, valeur limite), <strong>hiérarchisée</strong> et <strong>compréhensible</strong> par le client.</p>\n<table>\n<thead><tr><th>Priorité</th><th>Critère</th><th>Exemple de formulation</th></tr></thead>\n<tbody>\n<tr><td>1 — Sécurité immédiate</td><td>Risque pour la sécurité ou défaillance critique au contrôle technique</td><td>Flexible de frein arrière gauche fissuré : remplacement indispensable avant de reprendre la route</td></tr>\n<tr><td>2 — À prévoir rapidement</td><td>Usure proche de la limite, risque de panne</td><td>Plaquettes avant : 3 mm restants pour une limite de 2 mm, à remplacer dans les 3 000 km environ</td></tr>\n<tr><td>3 — À surveiller</td><td>Évolution lente, confort</td><td>Léger suintement au joint de couvre-culasse, sans perte de niveau : à contrôler au prochain entretien</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le devoir de conseil du professionnel l'oblige à informer le client des défauts constatés ; la trace écrite sur l'OR et la facture protège le client comme l'entreprise.</div>"
      },
      {
       "titre": "Clôturer l'intervention : réinitialisations et traçabilité",
       "contenu": "<p>Un entretien n'est terminé que lorsque le véhicule « sait » qu'il a été entretenu. Selon les modèles, plusieurs opérations de clôture sont nécessaires, à l'aide du combiné d'instruments ou de l'outil de diagnostic :</p>\n<ul>\n<li><strong>remise à zéro de l'indicateur d'entretien</strong>, en précisant parfois le type d'entretien réalisé (petit ou grand entretien) ou la qualité d'huile utilisée sur les plans variables ;</li>\n<li>réinitialisation du système de surveillance des pneumatiques indirect ou apprentissage des capteurs de pression ;</li>\n<li>enregistrement d'une batterie 12 V neuve dans le calculateur de gestion de l'énergie (capacité et technologie), faute de quoi la charge sera mal adaptée et la batterie vieillira prématurément ;</li>\n<li>apprentissage du papillon motorisé ou des lève-vitres après débranchement de la batterie, si la méthode le prévoit ;</li>\n<li>remise à zéro de l'additif du filtre à particules sur les systèmes qui en utilisent un.</li>\n</ul>\n<p>L'entretien est ensuite <strong>tracé</strong> : de nombreux constructeurs ont remplacé le carnet papier par un carnet numérique alimenté depuis leur portail en ligne ; les réparateurs indépendants y ont accès selon les conditions prévues par la réglementation. Cette traçabilité conditionne la garantie et la valeur de revente du véhicule. Enfin, l'OR est complété avec les références des pièces et produits, les valeurs relevées (pressions, épaisseurs, niveau de charge de batterie) et les préconisations.</p>"
      }
     ],
     "points_cles": [
      "L'entretien se déroule en quatre temps : préparer, contrôler, remplacer et ajuster, clôturer",
      "Un plan fixe s'applique au premier terme atteint ; un plan variable est calculé par le véhicule",
      "L'usage sévère raccourcit les échéances",
      "Le grade SAE ne suffit pas : normes ACEA et homologations constructeurs sont impératives",
      "Défaillances mineures, majeures et critiques déterminent l'obligation de contre-visite",
      "Le pré-contrôle suit les fonctions du contrôle technique",
      "Effacer un code juste avant le contrôle technique laisse les moniteurs non prêts",
      "Une préconisation est précise, hiérarchisée, compréhensible et écrite"
     ],
     "lexique": [
      {
       "terme": "Entretien périodique",
       "def": "Ensemble des opérations planifiées par le constructeur pour maintenir le véhicule en bon état."
      },
      {
       "terme": "Plan d'entretien variable",
       "def": "Plan dont les échéances sont calculées par le véhicule selon son usage réel."
      },
      {
       "terme": "Usage sévère",
       "def": "Conditions d'utilisation contraignantes qui imposent des échéances d'entretien plus courtes."
      },
      {
       "terme": "Grade SAE",
       "def": "Classification de la viscosité d'une huile à froid et à chaud."
      },
      {
       "terme": "Homologation constructeur",
       "def": "Agrément d'un produit par un constructeur pour ses moteurs ou organes."
      },
      {
       "terme": "Contre-visite",
       "def": "Nouveau passage obligatoire au contrôle technique après réparation des défaillances majeures ou critiques."
      },
      {
       "terme": "Défaillance critique",
       "def": "Défaut présentant un danger direct et immédiat pour la sécurité routière ou l'environnement."
      },
      {
       "terme": "Pré-contrôle",
       "def": "Inspection réalisée par l'atelier avant le contrôle technique pour détecter les défauts."
      },
      {
       "terme": "Préconisation",
       "def": "Conseil écrit au client sur une intervention à prévoir, avec son degré d'urgence."
      }
     ]
    },
    {
     "id": "bmv-mesures-interpretation",
     "titre": "Mesurer et interpréter : instruments et signaux",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Choisir l'instrument de mesure adapté à la grandeur et à la précision recherchée",
      "Réaliser des mesures de tension, de chute de tension, d'intensité et de résistance sur un circuit de véhicule",
      "Régler un oscilloscope et lire un signal : amplitude, période, fréquence, rapport cyclique",
      "Interpréter une mesure en la comparant à une valeur de référence et à sa tolérance",
      "Utiliser les instruments de mesure mécanique et de pression"
     ],
     "sections": [
      {
       "titre": "Mesurer pour décider",
       "contenu": "<p>Une mesure n'a de valeur que si elle permet de prendre une décision : remplacer ou conserver une pièce, confirmer ou écarter une hypothèse de panne. Toute mesure suit donc une logique en trois temps : <strong>prévoir</strong> la valeur attendue (documentation, raisonnement), <strong>mesurer</strong> dans les conditions prescrites (température, régime, état du circuit), <strong>comparer</strong> à la valeur de référence et à sa tolérance pour conclure.</p>\n<p>Le cours de seconde a présenté le multimètre et le pied à coulisse. On approfondit ici les mesures électriques en situation de diagnostic, l'oscilloscope et les mesures mécaniques de précision.</p>\n<p>Le choix de l'appareil dépend de la grandeur, de l'ordre de grandeur attendu et de la sécurité. Un multimètre est conçu pour une <strong>catégorie de mesure</strong> (CAT II, CAT III, CAT IV) et une tension maximale indiquées près des bornes ; sur le réseau de traction d'un véhicule électrifié, seuls les appareils et cordons prévus par la procédure sont autorisés. Sur le réseau 12 V ou 24 V, le risque principal est d'endommager l'appareil ou le calculateur : on ne mesure jamais une intensité avec les cordons branchés en parallèle sur une source, et l'on évite de piquer l'isolant des fils avec des pointes, ce qui ouvre la voie à la corrosion. On utilise de préférence des adaptateurs de connecteurs (boîtiers de dérivation ou cordons d'adaptation) qui permettent de mesurer sans abîmer les contacts.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> mesurer sans connaître la valeur attendue ne permet pas de conclure. Avant de brancher un appareil, on se demande toujours : quelle valeur dois-je trouver si le circuit est bon ?</div>"
      },
      {
       "titre": "Les mesures électriques en diagnostic",
       "contenu": "<table>\n<thead><tr><th>Mesure</th><th>Branchement</th><th>Ce qu'elle révèle</th></tr></thead>\n<tbody>\n<tr><td>Tension d'alimentation</td><td>En parallèle, entre la borne d'alimentation du composant et la masse, circuit en fonctionnement</td><td>Présence de l'alimentation</td></tr>\n<tr><td>Chute de tension</td><td>En parallèle aux bornes d'un fil, d'un connecteur ou d'un contact, <strong>circuit traversé par le courant</strong></td><td>Résistance parasite (oxydation, brin coupé, mauvais serrage)</td></tr>\n<tr><td>Intensité</td><td>En série avec le multimètre, ou autour du fil avec une pince ampèremétrique</td><td>Consommation d'un récepteur, courant de fuite</td></tr>\n<tr><td>Résistance</td><td>Composant isolé du circuit et hors tension</td><td>Continuité, valeur d'une bobine ou d'une sonde</td></tr>\n</tbody>\n</table>\n<p>La <strong>mesure de chute de tension</strong> est la plus efficace pour trouver une mauvaise connexion. Un fil peut présenter une continuité parfaite à l'ohmmètre (quelques brins suffisent à faire passer le très faible courant de mesure) mais chauffer et faire chuter la tension lorsqu'un courant important le traverse.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler le circuit de démarrage par chutes de tension.<br>1. Brancher le multimètre entre la borne positive de la batterie (sur la borne elle-même, pas sur la cosse) et la borne d'alimentation du démarreur.<br>2. Actionner le démarreur en empêchant le moteur de démarrer selon la procédure (injection désactivée).<br>3. Lire la chute de tension : elle doit rester faible, typiquement inférieure à 0,5 V selon la référence constructeur.<br>4. Recommencer côté masse, entre la borne négative de la batterie et le carter du démarreur.<br>5. Une valeur trop élevée localise la résistance parasite ; déplacer la pointe de touche le long du circuit pour la situer précisément (cosse, tresse de masse).</div>"
      },
      {
       "titre": "La consommation au repos",
       "contenu": "<p>Un véhicule moderne consomme un faible courant même à l'arrêt (mémoires, alarme, récepteur de clé). Après la mise en veille des calculateurs, qui peut demander plusieurs dizaines de minutes, ce <strong>courant de repos</strong> doit redescendre à une valeur faible, typiquement de l'ordre de quelques dizaines de milliampères selon les véhicules. Un calculateur qui ne s'endort pas, un éclairage de coffre resté allumé ou un accessoire mal branché décharge la batterie en quelques jours.</p>\n<p>On mesure ce courant avec une pince ampèremétrique de faible calibre placée sur le câble de masse de la batterie, ou avec un multimètre en série en utilisant un dispositif qui évite de couper le circuit (sinon les calculateurs se réveillent). On retire ensuite les fusibles un par un, ou mieux on mesure la chute de tension aux bornes de chaque fusible pour identifier le circuit consommateur sans perturber le système.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ouvrir une porte, le coffre ou brancher l'outil de diagnostic réveille le réseau et fausse la mesure. Les portes sont verrouillées avec les serrures en position fermée selon la procédure, et l'on attend la mise en veille complète avant de lire la valeur.</div>"
      },
      {
       "titre": "L'oscilloscope : régler et lire",
       "contenu": "<p>Le multimètre affiche une valeur moyenne ; l'<strong>oscilloscope</strong> affiche l'évolution de la tension en fonction du temps. Il est indispensable pour contrôler les signaux rapides : capteurs de régime et de position, commandes d'injecteurs et de bobines, signaux en rapport cyclique, réseaux multiplexés.</p>\n<p>L'écran comporte un axe vertical gradué en volts par division (sensibilité) et un axe horizontal gradué en temps par division (base de temps). Le <strong>déclenchement</strong> (<em>trigger</em>) fixe le niveau de tension à partir duquel l'oscilloscope commence l'affichage, pour stabiliser l'image d'un signal répétitif.</p>\n<p>On lit sur un signal périodique : l'<strong>amplitude</strong> (tension crête), la <strong>période</strong> T (durée d'un motif complet), la <strong>fréquence</strong> f = 1 / T, et pour un signal carré le <strong>rapport cyclique</strong> α = durée à l'état actif / période.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter l'oscillogramme de commande d'une électrovanne.<br>Réglages : 5 V/div ; 1 ms/div. Le signal est carré : niveau haut 12 V, niveau bas proche de 0 V. Un motif complet occupe 4 divisions, l'état bas (électrovanne commandée par la masse) occupe 1 division.<br>1. Période : T = 4 × 1 ms = 4 ms.<br>2. Fréquence : f = 1 / 0,004 = 250 Hz.<br>3. Rapport cyclique de commande (état actif bas) : α = 1 / 4 = 25 %.<br>4. Comparaison : si l'outil de diagnostic affiche une consigne de 25 %, le calculateur et le câblage de commande sont cohérents ; la recherche se poursuit vers l'électrovanne ou le circuit hydraulique.</div>"
      },
      {
       "titre": "Formes de signaux à connaître",
       "contenu": "<table>\n<thead><tr><th>Composant</th><th>Forme du signal</th><th>Défauts visibles</th></tr></thead>\n<tbody>\n<tr><td>Capteur de régime inductif</td><td>Sinusoïde dont l'amplitude et la fréquence augmentent avec la vitesse ; repère de dents manquantes</td><td>Amplitude trop faible (entrefer trop grand), parasites, dents endommagées</td></tr>\n<tr><td>Capteur à effet Hall</td><td>Signal carré d'amplitude constante (souvent 5 V ou 12 V)</td><td>Fronts arrondis, niveau bas trop haut (mauvaise masse)</td></tr>\n<tr><td>Sonde lambda à saut de tension</td><td>Oscillation lente entre environ 0,1 V et 0,9 V en régulation</td><td>Signal figé, oscillations trop lentes (sonde vieillie)</td></tr>\n<tr><td>Injecteur électromagnétique</td><td>Mise à la masse pendant le temps d'injection, puis pic de tension de coupure</td><td>Absence de pic (bobinage coupé ou en court-circuit)</td></tr>\n<tr><td>Réseau CAN</td><td>Deux signaux en opposition (CAN-H et CAN-L) autour de 2,5 V</td><td>Un signal figé, signaux identiques (court-circuit entre fils)</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Les mesures mécaniques et de pression",
       "contenu": "<p>Les instruments mécaniques de précision complètent les mesures électriques :</p>\n<ul>\n<li>le <strong>micromètre</strong> (palmer), au centième de millimètre, pour mesurer le diamètre d'un tourillon ou l'épaisseur d'un disque de frein ;</li>\n<li>le <strong>comparateur</strong> sur support magnétique, pour mesurer un voile de disque, un jeu axial de vilebrequin, un faux-rond ;</li>\n<li>les <strong>jauges d'épaisseur</strong> (cales), pour un jeu aux soupapes ou à la coupe de segment ;</li>\n<li>le <strong>fil calibré déformable</strong>, pour un jeu de palier ;</li>\n<li>les <strong>manomètres</strong> : pression d'huile, de carburant, de suralimentation, de circuit de refroidissement (test d'étanchéité), de freinage pneumatique ;</li>\n<li>le <strong>dépressiomètre</strong>, pour l'admission ou la pompe à vide.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les instruments de mesure et les clés dynamométriques sont étalonnés ou vérifiés périodiquement, avec une étiquette indiquant la date de validité. Un instrument dont la validité est dépassée ne doit pas servir à une mesure qui engage une décision de sécurité.</div>"
      },
      {
       "titre": "Interpréter : tolérance et incertitude",
       "contenu": "<p>Toute valeur de référence est donnée avec une <strong>tolérance</strong> : par exemple, résistance d'une sonde de température à 20 °C : 2,5 kΩ ± 10 %, soit une plage de 2,25 à 2,75 kΩ. Toute mesure comporte aussi une <strong>incertitude</strong> liée à l'instrument (précision indiquée par le fabricant), à la méthode et aux conditions (température du composant, résistance des cordons). Une mesure de 2,78 kΩ à 25 °C n'indique pas forcément une sonde défaillante : la résistance d'une sonde à coefficient de température négatif diminue quand la température augmente, et la valeur de référence doit être lue sur la courbe à la bonne température.</p>\n<p>En pratique, on conclut avec prudence lorsque la mesure est proche d'une limite : on vérifie les conditions, on refait la mesure, on croise avec une autre information (paramètre lu à l'outil de diagnostic, comparaison avec un composant identique). On consigne les valeurs mesurées sur l'OR ou la fiche de diagnostic.</p>"
      }
     ],
     "points_cles": [
      "Prévoir, mesurer, comparer : une mesure sans valeur attendue ne permet pas de conclure",
      "La chute de tension se mesure circuit traversé par le courant",
      "Un fil peut sonner bon à l'ohmmètre et être défaillant en charge",
      "Le courant de repos se mesure après la mise en veille complète des calculateurs",
      "Sur l'oscilloscope : amplitude, période, fréquence f = 1/T et rapport cyclique",
      "Chaque type de capteur a une forme de signal caractéristique",
      "Micromètre, comparateur et jauges mesurent jeux, voiles et diamètres",
      "Toute valeur de référence a une tolérance et toute mesure une incertitude"
     ],
     "lexique": [
      {
       "terme": "Chute de tension",
       "def": "Différence de tension aux bornes d'un élément traversé par un courant, révélatrice de sa résistance."
      },
      {
       "terme": "Pince ampèremétrique",
       "def": "Instrument qui mesure un courant sans couper le circuit, en entourant le conducteur."
      },
      {
       "terme": "Courant de repos",
       "def": "Courant consommé par le véhicule à l'arrêt après la mise en veille des calculateurs."
      },
      {
       "terme": "Oscilloscope",
       "def": "Appareil qui affiche l'évolution d'une tension en fonction du temps."
      },
      {
       "terme": "Base de temps",
       "def": "Réglage de l'oscilloscope qui fixe la durée représentée par une division horizontale."
      },
      {
       "terme": "Déclenchement",
       "def": "Réglage qui stabilise l'affichage d'un signal en fixant le niveau de départ du balayage."
      },
      {
       "terme": "Période",
       "def": "Durée d'un motif complet d'un signal répétitif, en secondes."
      },
      {
       "terme": "Fréquence",
       "def": "Nombre de périodes par seconde, en hertz : f = 1/T."
      },
      {
       "terme": "Tolérance",
       "def": "Écart admis autour d'une valeur de référence."
      },
      {
       "terme": "Comparateur",
       "def": "Instrument à palpeur qui mesure de faibles déplacements, par exemple un voile."
      }
     ]
    },
    {
     "id": "bmv-chaine-information-reseaux",
     "titre": "Chaîne d'information : capteurs, calculateurs et réseaux multiplexés",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Décrire une chaîne d'information : acquérir, traiter, communiquer",
      "Identifier les principaux types de capteurs et la nature de leur signal",
      "Expliquer le principe du multiplexage et l'architecture d'un réseau de véhicule",
      "Décrire les caractéristiques électriques des réseaux CAN et LIN",
      "Réaliser les contrôles de base d'un réseau multiplexé"
     ],
     "sections": [
      {
       "titre": "Acquérir, traiter, communiquer",
       "contenu": "<p>La chaîne d'énergie d'un véhicule est pilotée par une <strong>chaîne d'information</strong> organisée en trois fonctions : <strong>acquérir</strong> les informations (capteurs, interrupteurs, consignes du conducteur), <strong>traiter</strong> ces informations (calculateurs qui exécutent des programmes et des cartographies), <strong>communiquer</strong> (échanger des données entre calculateurs par les réseaux, informer le conducteur par le combiné, transmettre des ordres aux actionneurs). Un véhicule récent compte plusieurs dizaines de calculateurs, voire davantage sur les modèles haut de gamme.</p>\n<p>Le cours de seconde a présenté le schéma électrique de base et l'existence du multiplexage. On étudie ici le fonctionnement des capteurs et des réseaux, indispensable au diagnostic.</p>"
      },
      {
       "titre": "Les capteurs et leurs signaux",
       "contenu": "<p>Un <strong>capteur</strong> transforme une grandeur physique (température, pression, position, vitesse) en un signal électrique exploitable par le calculateur. On distingue :</p>\n<ul>\n<li>les capteurs <strong>passifs</strong>, qui n'ont pas besoin d'alimentation : capteur inductif de régime (il produit lui-même une tension alternative), sonde de température à résistance variable (alimentée à travers une résistance interne au calculateur) ;</li>\n<li>les capteurs <strong>actifs</strong>, alimentés par le calculateur (souvent en 5 V) et qui contiennent une électronique : capteurs à effet Hall, capteurs de pression piézorésistifs, débitmètres d'air, capteurs de position sans contact.</li>\n</ul>\n<p>La nature du signal dépend du capteur : <strong>analogique</strong> (tension variant continûment, par exemple de 0,5 V à 4,5 V pour un capteur de pression), <strong>numérique</strong> tout-ou-rien ou en fréquence (capteur Hall), ou <strong>trame numérique</strong> (capteurs intelligents qui transmettent leur valeur sous forme de message, par exemple selon le protocole SENT).</p>\n<table>\n<thead><tr><th>Broche typique d'un capteur actif à trois fils</th><th>Valeur attendue</th></tr></thead>\n<tbody>\n<tr><td>Alimentation</td><td>5 V fournis par le calculateur</td></tr>\n<tr><td>Masse capteur</td><td>Masse électronique du calculateur, proche de 0 V</td></tr>\n<tr><td>Signal</td><td>Valeur variable comprise entre des limites de plausibilité (par exemple 0,5 à 4,5 V)</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les plages de signal excluent volontairement 0 V et 5 V. Un signal à 0 V ou à 5 V est reconnu par le calculateur comme un court-circuit ou un circuit ouvert, ce qui lui permet de distinguer une panne de câblage d'une valeur physique extrême.</div>"
      },
      {
       "titre": "Le principe du multiplexage",
       "contenu": "<p>Sans multiplexage, chaque information demanderait un fil entre chaque capteur et chaque calculateur qui l'utilise. Le <strong>multiplexage</strong> consiste à faire circuler de nombreuses informations sur un même support (deux fils pour le CAN), sous forme de <strong>trames</strong> numériques. Une trame contient un identifiant (qui indique la nature du message et sa priorité), les données, un contrôle d'erreur et un accusé de réception. Chaque calculateur lit les trames qui l'intéressent.</p>\n<p>Les avantages sont la réduction du câblage (masse, coût, fiabilité), le partage des informations (la vitesse du véhicule est utilisée par le contrôle moteur, la boîte, l'ABS, la direction, le combiné, l'autoradio) et la possibilité de diagnostiquer tous les calculateurs depuis une seule prise.</p>\n<p>Les calculateurs sont répartis sur plusieurs réseaux selon les besoins de débit et de sécurité. Un <strong>calculateur passerelle</strong> (<em>gateway</em>), souvent intégré au boîtier de servitude intelligent, relie ces réseaux, filtre les messages et isole les réseaux critiques de la prise de diagnostic.</p>"
      },
      {
       "titre": "Les principaux réseaux",
       "contenu": "<table>\n<thead><tr><th>Réseau</th><th>Support</th><th>Débit (ordre de grandeur)</th><th>Utilisations</th></tr></thead>\n<tbody>\n<tr><td>CAN grande vitesse</td><td>Paire torsadée (CAN-H, CAN-L)</td><td>500 kbit/s couramment</td><td>Groupe motopropulseur, châssis, freinage</td></tr>\n<tr><td>CAN FD</td><td>Paire torsadée</td><td>Jusqu'à plusieurs Mbit/s pour la phase de données</td><td>Calculateurs récents à fort volume de données</td></tr>\n<tr><td>CAN basse vitesse (tolérant aux pannes)</td><td>Paire torsadée</td><td>Jusqu'à 125 kbit/s</td><td>Confort, habitacle (véhicules plus anciens)</td></tr>\n<tr><td>LIN</td><td>Un seul fil</td><td>Jusqu'à 20 kbit/s</td><td>Sous-réseaux simples : rétroviseurs, capteur de pluie, alternateur piloté, essuie-glace</td></tr>\n<tr><td>FlexRay</td><td>Paire torsadée</td><td>10 Mbit/s</td><td>Châssis piloté sur certains véhicules</td></tr>\n<tr><td>Ethernet automobile</td><td>Paire torsadée</td><td>100 Mbit/s à plusieurs Gbit/s</td><td>Caméras, aides à la conduite, multimédia, mises à jour logicielles</td></tr>\n</tbody>\n</table>\n<p>Les véhicules de transport routier utilisent des réseaux CAN selon des normes propres au secteur (notamment la norme SAE J1939 pour l'échange de données moteur, boîte, freinage), et un réseau spécifique vers la remorque. Les motocycles récents utilisent aussi le CAN entre contrôle moteur, ABS, combiné et centrale inertielle.</p>"
      },
      {
       "titre": "Le réseau CAN : caractéristiques électriques",
       "contenu": "<p>Le CAN grande vitesse transmet l'information par la <strong>différence de tension</strong> entre ses deux fils, ce qui le rend peu sensible aux parasites. Au repos (bit récessif), les deux fils sont à environ 2,5 V. Pour un bit dominant, CAN-H monte vers 3,5 V et CAN-L descend vers 1,5 V. Le réseau est fermé à chaque extrémité par une <strong>résistance de terminaison</strong> de 120 Ω, souvent intégrée à deux calculateurs. Vues depuis la prise de diagnostic, ces deux résistances en parallèle donnent 60 Ω.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler un réseau CAN grande vitesse depuis la prise de diagnostic.<br>1. Couper le contact, débrancher la batterie si la méthode le prévoit et attendre la mise en veille.<br>2. Mesurer la résistance entre les broches CAN-H et CAN-L de la prise : environ 60 Ω attendus.<br>3. Interpréter : environ 120 Ω, une terminaison est absente ou une branche du réseau est coupée ; une valeur très faible, proche de 0 Ω, signale un court-circuit entre CAN-H et CAN-L.<br>4. Contact mis, mesurer chaque fil par rapport à la masse : environ 2,5 à 3,5 V pour CAN-H, 1,5 à 2,5 V pour CAN-L en valeur moyenne au multimètre.<br>5. Observer à l'oscilloscope deux voies : les signaux doivent être symétriques et en opposition.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne réalise jamais de réparation de câble CAN en dédoublant ou en détorsadant la paire sur une grande longueur ; on respecte la méthode de réparation du constructeur (manchons, longueur maximale non torsadée). Un réseau perturbé peut faire apparaître des défauts sur des calculateurs sans lien apparent avec la zone réparée.</div>"
      },
      {
       "titre": "Diagnostiquer un défaut de communication",
       "contenu": "<p>Les défauts de réseau se manifestent par des codes de type « absence de communication avec le calculateur X » (codes commençant souvent par U dans la norme OBD), par plusieurs voyants allumés simultanément, ou par des fonctions perdues. La démarche suit l'architecture :</p>\n<ol>\n<li>lancer un test global à l'outil de diagnostic pour identifier les calculateurs qui répondent et ceux qui sont muets ;</li>\n<li>repérer sur le schéma de réseau si les calculateurs muets ont un point commun : même réseau, même alimentation, même fusible, même connecteur intermédiaire ;</li>\n<li>contrôler alimentation et masse du calculateur suspect avant de mettre en cause le réseau ;</li>\n<li>contrôler le réseau (résistance, tensions, oscillogramme), puis débrancher un à un les calculateurs pour trouver celui qui perturbe la ligne.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une batterie 12 V faible provoque fréquemment des défauts de communication multiples, enregistrés lors du démarrage quand la tension chute. Avant tout diagnostic de réseau, on contrôle l'état de la batterie et on branche un maintien de charge pendant les opérations de diagnostic et de programmation.</div>"
      },
      {
       "titre": "Les calculateurs et leur logiciel",
       "contenu": "<p>Un calculateur contient un microcontrôleur, des mémoires (programme, données d'apprentissage, codes défaut), des circuits d'entrée pour conditionner les signaux des capteurs et des étages de puissance pour commander les actionneurs. Son logiciel peut être mis à jour par <strong>téléchargement</strong> à l'atelier ou, sur de nombreux véhicules récents, à distance (mises à jour dites <em>over the air</em>). Le remplacement d'un calculateur exige presque toujours une configuration (codage des équipements du véhicule), un apprentissage et parfois un appairage avec l'antidémarrage, réalisés avec l'outil du constructeur ou un outil compatible.</p>\n<p>Les calculateurs commandent les actionneurs par des <strong>étages de sortie</strong> de deux types : commande par le positif (le calculateur fournit l'alimentation, l'actionneur est relié à la masse) ou commande par la masse (l'actionneur est alimenté en permanence, le calculateur ferme le circuit vers la masse). Savoir lequel est utilisé est indispensable pour interpréter une mesure : sur une électrovanne commandée par la masse, on mesure 12 V sur les deux bornes lorsqu'elle n'est pas commandée, ce qui est normal. Beaucoup d'étages de sortie surveillent eux-mêmes leur circuit et enregistrent un code de court-circuit ou de circuit ouvert. Enfin, la prise de diagnostic normalisée à 16 broches, située dans l'habitacle, donne accès à l'ensemble des calculateurs à travers la passerelle ; ses broches d'alimentation et de masse se contrôlent en premier lorsqu'un outil ne communique avec aucun calculateur.</p>"
      }
     ],
     "points_cles": [
      "La chaîne d'information acquiert, traite et communique pour piloter la chaîne d'énergie",
      "Les capteurs actifs sont alimentés, souvent en 5 V, et contiennent une électronique",
      "Les plages de signal excluent 0 V et 5 V pour détecter les défauts de câblage",
      "Le multiplexage fait circuler de nombreuses informations sur un même support",
      "La passerelle relie les réseaux et protège les réseaux critiques",
      "CAN-H et CAN-L : 2,5 V au repos, 3,5 V et 1,5 V en dominant",
      "Deux terminaisons de 120 Ω donnent 60 Ω entre CAN-H et CAN-L",
      "Avant un diagnostic réseau, on vérifie la batterie, l'alimentation et la masse des calculateurs"
     ],
     "lexique": [
      {
       "terme": "Chaîne d'information",
       "def": "Ensemble des fonctions qui acquièrent, traitent et communiquent les informations pour piloter un système."
      },
      {
       "terme": "Capteur actif",
       "def": "Capteur alimenté par le calculateur, qui contient une électronique de traitement."
      },
      {
       "terme": "Signal analogique",
       "def": "Signal dont la tension varie de façon continue avec la grandeur mesurée."
      },
      {
       "terme": "Multiplexage",
       "def": "Transmission de plusieurs informations sur un même support sous forme de messages numériques."
      },
      {
       "terme": "Trame",
       "def": "Message numérique circulant sur un réseau, comprenant identifiant, données et contrôle."
      },
      {
       "terme": "Passerelle",
       "def": "Calculateur qui relie plusieurs réseaux et filtre les messages échangés."
      },
      {
       "terme": "CAN",
       "def": "Réseau multiplexé à paire torsadée, très utilisé dans les véhicules."
      },
      {
       "terme": "LIN",
       "def": "Réseau multiplexé simple à un fil pour des fonctions peu exigeantes."
      },
      {
       "terme": "Résistance de terminaison",
       "def": "Résistance de 120 Ω placée à chaque extrémité d'un réseau CAN."
      },
      {
       "terme": "Codage",
       "def": "Paramétrage d'un calculateur pour l'adapter aux équipements du véhicule."
      }
     ]
    },
    {
     "id": "bmv-methodologie-diagnostic",
     "titre": "Méthodologie du diagnostic des systèmes",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Recueillir et confirmer un symptôme de façon objective",
      "Formuler des hypothèses à partir de l'analyse fonctionnelle et les hiérarchiser",
      "Exploiter l'outil de diagnostic : codes défaut, données figées, paramètres, tests d'actionneurs",
      "Mettre en œuvre un protocole d'intervention existant ou construit",
      "Identifier l'élément défaillant, proposer une solution corrective et valider la réparation"
     ],
     "sections": [
      {
       "titre": "Ce que le référentiel attend du diagnostic",
       "contenu": "<p>Le diagnostic constitue le troisième pôle d'activité du titulaire du bac pro. Le cours de seconde a présenté la notion de diagnostic et les étapes d'une démarche simple. En terminale, on attend une démarche structurée en quatre compétences : <strong>constater</strong> le dysfonctionnement, <strong>hiérarchiser</strong> les hypothèses, <strong>mettre en œuvre un protocole</strong> d'intervention (existant ou construit par le technicien), <strong>identifier les solutions correctives</strong>. Le niveau d'autonomie attendu est total pour le pré-diagnostic et partiel pour la recherche de panne : le technicien sait demander l'appui d'un technicien expert ou de l'assistance technique du constructeur lorsque la démarche l'exige.</p>\n<p>Un bon diagnostic se juge à deux critères : il trouve la <strong>cause</strong> et non seulement l'élément qui a cédé (un fusible grillé est une conséquence ; la cause est le court-circuit qui l'a fait griller), et il est <strong>économique</strong> : il ne remplace pas de pièces au hasard.</p>"
      },
      {
       "titre": "Constater et caractériser le symptôme",
       "contenu": "<p>Le diagnostic commence par un recueil précis d'informations auprès du client, directement ou par l'intermédiaire de la réception. Un questionnement structuré évite les malentendus :</p>\n<table>\n<thead><tr><th>Question</th><th>Intérêt</th></tr></thead>\n<tbody>\n<tr><td>Quoi ? Quel est le symptôme exact (bruit, voyant, perte de puissance, refus de démarrage) ?</td><td>Nommer le phénomène</td></tr>\n<tr><td>Quand ? À froid, à chaud, au démarrage, à vitesse stabilisée, en accélération, en freinage ?</td><td>Conditions d'apparition, indispensables pour le reproduire</td></tr>\n<tr><td>Depuis quand ? Brutalement ou progressivement ? Après une intervention, un plein, un choc ?</td><td>Orientation vers une cause récente</td></tr>\n<tr><td>Combien de fois ? Permanent ou intermittent ?</td><td>Choix de la méthode : mesure directe ou enregistrement</td></tr>\n</tbody>\n</table>\n<p>Sur les motocycles, ce recueil auprès du client est particulièrement important car de nombreux défauts sont ressentis par le pilote (comportement, vibrations, réactions de la poignée de gaz) et ne laissent pas de trace dans les calculateurs.</p>\n<p>Le technicien <strong>confirme</strong> ensuite le symptôme lui-même : essai routier dans les conditions décrites, observation, lecture des voyants. Un défaut non reproduit et non enregistré ne doit pas conduire à remplacer une pièce ; on peut proposer au client un enregistrement des paramètres en roulage. Le symptôme confirmé est formulé objectivement sur la fiche de diagnostic.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le client décrit souvent une interprétation plutôt qu'un symptôme (« c'est l'embrayage »). Le technicien reformule en faits observables (« le régime moteur augmente sans accélération du véhicule en 4e à pleine charge ») avant toute hypothèse.</div>"
      },
      {
       "titre": "Formuler et hiérarchiser les hypothèses",
       "contenu": "<p>Une <strong>hypothèse</strong> est une cause possible du symptôme. On les formule en s'appuyant sur l'analyse fonctionnelle du système : quelles fonctions interviennent dans le comportement observé, quels éléments réalisent ces fonctions ? Le schéma fonctionnel ou le schéma électrique sert de support.</p>\n<p>On <strong>hiérarchise</strong> ensuite les hypothèses selon plusieurs critères :</p>\n<ul>\n<li>la <strong>probabilité</strong> : fréquence connue de la panne sur ce modèle (notes techniques, expérience, bases de données de pannes), cohérence avec toutes les observations ;</li>\n<li>la <strong>facilité et le coût de vérification</strong> : un contrôle visuel ou une lecture de paramètre passe avant un démontage ;</li>\n<li>la <strong>sécurité</strong> : une hypothèse qui met en jeu la sécurité est vérifiée en priorité.</li>\n</ul>\n<p>Une hypothèse doit expliquer <strong>tous</strong> les symptômes. Si un véhicule présente à la fois un défaut de communication avec l'ABS et un voyant de direction assistée, une hypothèse portant uniquement sur le capteur de roue n'explique pas tout ; une alimentation ou une masse commune devient plus probable.</p>"
      },
      {
       "titre": "Exploiter l'outil de diagnostic",
       "contenu": "<p>L'outil de diagnostic (constructeur ou multimarque) dialogue avec les calculateurs par la prise normalisée. Ses fonctions principales :</p>\n<table>\n<thead><tr><th>Fonction</th><th>Utilisation</th></tr></thead>\n<tbody>\n<tr><td>Lecture des codes défaut</td><td>Code, libellé, statut (présent, intermittent, mémorisé), compteur d'occurrences</td></tr>\n<tr><td>Données figées (<em>freeze frame</em>)</td><td>Valeurs des paramètres au moment de l'apparition du défaut : régime, température, vitesse, tension batterie ; permettent de reproduire les conditions</td></tr>\n<tr><td>Paramètres en temps réel</td><td>Valeurs lues par le calculateur, à comparer aux valeurs attendues</td></tr>\n<tr><td>Tests d'actionneurs</td><td>Commande d'un actionneur par le calculateur pour vérifier la chaîne commande-câblage-actionneur</td></tr>\n<tr><td>Fonctions spéciales</td><td>Apprentissages, initialisations, codages, régénérations, purges</td></tr>\n</tbody>\n</table>\n<p>Les codes OBD normalisés comportent une lettre et quatre caractères : P (groupe motopropulseur), C (châssis), B (carrosserie), U (réseau). Le deuxième caractère indique si le code est générique (0) ou propre au constructeur (1). Exemple : P0300 signale des ratés de combustion aléatoires, P0301 des ratés sur le cylindre 1.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un code défaut désigne un <em>circuit</em> ou une <em>fonction</em> en défaut, pas une pièce à remplacer. « Signal du capteur de pression trop bas » peut venir du capteur, de son câblage, de son alimentation, ou d'une pression réellement trop basse.</div>"
      },
      {
       "titre": "Mettre en œuvre un protocole d'intervention",
       "contenu": "<p>Le constructeur fournit souvent des <strong>arbres de diagnostic</strong> (ou protocoles guidés) associés aux codes défaut : une succession de contrôles avec, à chaque étape, la valeur attendue et l'étape suivante selon le résultat. Lorsqu'aucun protocole n'existe, le technicien construit le sien en appliquant la logique « du plus simple au plus complexe » et en séparant le système en zones.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> protocole pour un code « tension du capteur de pression de rampe trop basse » (capteur actif trois fils).<br>1. Lire le paramètre de pression : valeur figée à une valeur minimale incohérente moteur tournant ?<br>2. Contrôle visuel : connecteur branché, verrouillé, broches non corrodées, faisceau non frotté.<br>3. Connecteur débranché, contact mis : mesurer l'alimentation (environ 5 V attendus) entre broche alimentation et masse capteur.<br>4. Si 0 V : rechercher la coupure de l'alimentation entre calculateur et capteur, ou un court-circuit à la masse d'un autre capteur partageant la même alimentation 5 V (débrancher les autres capteurs un à un).<br>5. Si 5 V présents : contrôler la continuité et l'isolement du fil de signal jusqu'au calculateur.<br>6. Si le câblage est bon : mettre en cause le capteur ; confirmer par comparaison avec un manomètre si la méthode le permet.<br>7. Noter chaque résultat sur la fiche de diagnostic.</div>\n<p>Pour les défauts <strong>intermittents</strong>, on utilise des tests de sollicitation (secouer le faisceau, chauffer ou refroidir un composant) en observant les paramètres ou l'oscilloscope, et des enregistrements en roulage.</p>"
      },
      {
       "titre": "Identifier la solution corrective et valider",
       "contenu": "<p>Une fois l'élément défaillant identifié, on recherche la <strong>cause première</strong> : pourquoi ce capteur s'est-il détérioré ? Un connecteur oxydé peut venir d'une infiltration d'eau ; une bobine d'allumage défaillante peut avoir été détruite par une bougie trop usée. Remplacer l'élément sans traiter la cause conduit au retour atelier.</p>\n<p>La solution corrective est proposée au client par la réception avec un devis : réparation (connecteur, câblage), remplacement, mise à jour logicielle prévue par une note technique du constructeur. Après réparation, la <strong>validation</strong> comprend : effacement des codes, essai dans les conditions d'apparition du défaut, nouvelle lecture des codes, vérification que les tests de diagnostic embarqué se sont exécutés, contrôle que la réparation n'a pas créé d'autre défaut.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les constructeurs disposent de services d'assistance technique et publient des notes techniques sur les pannes connues. Consulter ces sources avant de démonter fait souvent gagner des heures. Les véhicules récents disposent aussi de fonctions de <strong>diagnostic prédictif embarqué</strong> qui signalent une dérive (usure de batterie, colmatage progressif) avant la panne : l'atelier peut alors proposer une intervention anticipée.</div>"
      },
      {
       "titre": "Rendre compte du diagnostic",
       "contenu": "<p>Le diagnostic se conclut par un compte rendu écrit, souvent sur une fiche de diagnostic jointe à l'OR. Il comprend : le symptôme confirmé et ses conditions d'apparition, les codes défaut relevés avec leur statut, les contrôles réalisés et leurs résultats (valeurs mesurées et valeurs attendues), l'élément défaillant et la cause identifiée, la solution proposée, le temps passé. Ce document justifie la facturation du temps de diagnostic, sert en cas de demande de garantie et permet à un collègue de reprendre le travail. Il doit être compréhensible par le réceptionnaire, qui l'expliquera au client.</p>\n<p>Un compte rendu bien rédigé distingue clairement les <strong>faits</strong> (valeurs mesurées, codes lus, observations) des <strong>conclusions</strong> (élément défaillant, cause). Par exemple : « Code P0301 présent, ratés de combustion comptés sur le cylindre 1 uniquement. Permutation des bobines 1 et 2 : les ratés passent sur le cylindre 2. Conclusion : bobine d'origine du cylindre 1 défaillante. Bougies à 58 000 km, usure des électrodes importante : remplacement des bougies préconisé pour éviter la récidive. » Cette rédaction montre au lecteur le raisonnement suivi et permet de vérifier qu'aucune étape n'a été oubliée.</p>"
      }
     ],
     "points_cles": [
      "Le diagnostic suit quatre étapes : constater, hiérarchiser, mettre en œuvre un protocole, identifier la solution",
      "Le symptôme est recueilli par un questionnement structuré puis confirmé par le technicien",
      "Une hypothèse valable explique tous les symptômes observés",
      "On hiérarchise selon la probabilité, la facilité de vérification et la sécurité",
      "Un code défaut désigne un circuit ou une fonction, pas une pièce",
      "Les données figées permettent de reproduire les conditions d'apparition",
      "Traiter la cause première évite le retour atelier",
      "La réparation est validée par un essai dans les conditions du défaut et une relecture des codes"
     ],
     "lexique": [
      {
       "terme": "Symptôme",
       "def": "Manifestation observable d'un dysfonctionnement."
      },
      {
       "terme": "Hypothèse",
       "def": "Cause possible d'un symptôme, à vérifier par un contrôle."
      },
      {
       "terme": "Code défaut",
       "def": "Code enregistré par un calculateur lorsqu'il détecte une anomalie sur un circuit ou une fonction."
      },
      {
       "terme": "Données figées",
       "def": "Valeurs des paramètres enregistrées par le calculateur à l'apparition d'un défaut."
      },
      {
       "terme": "Test d'actionneur",
       "def": "Commande d'un actionneur depuis l'outil de diagnostic pour vérifier son fonctionnement."
      },
      {
       "terme": "Arbre de diagnostic",
       "def": "Protocole de contrôles successifs avec valeurs attendues et suite selon le résultat."
      },
      {
       "terme": "Défaut intermittent",
       "def": "Défaut qui apparaît et disparaît selon les conditions de fonctionnement."
      },
      {
       "terme": "Cause première",
       "def": "Origine réelle d'une défaillance, au-delà de l'élément qui a cédé."
      },
      {
       "terme": "Diagnostic prédictif",
       "def": "Surveillance qui détecte une dérive avant qu'elle ne provoque une panne."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Option véhicules légers",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmv-vl-entretien-electrifies",
     "titre": "Entretenir et réparer les voitures hybrides et électriques",
     "niveau": "1re-Tle",
     "options": [
      "vl"
     ],
     "duree": 40,
     "objectifs": [
      "Organiser l'accueil et le stationnement d'une voiture électrifiée à l'atelier",
      "Identifier les opérations d'entretien spécifiques aux voitures hybrides et électriques",
      "Réaliser les opérations courantes en respectant les états du véhicule et les zones à risque",
      "Traiter les pannes fréquentes du réseau 12 V et de la recharge",
      "Conseiller le client sur l'usage, la recharge et l'entretien de son véhicule"
     ],
     "sections": [
      {
       "titre": "Un parc en pleine transformation",
       "contenu": "<p>Les voitures particulières et utilitaires légers hybrides et électriques représentent une part croissante des ventes et donc des entrées à l'atelier. Pour le technicien de l'option véhicules légers, ces véhicules ne sont plus des cas particuliers : ils font partie du travail quotidien. Leur entretien est en partie identique à celui d'une voiture thermique (pneumatiques, freins, trains roulants, climatisation, éclairage, essuyage) et en partie spécifique (batterie de traction, gestion thermique, recharge, logiciels).</p>\n<p>Ce chapitre s'appuie sur les notions de risque électrique, d'architecture, de batterie et de machine électrique déjà étudiées, et les met en situation dans l'atelier de voitures particulières.</p>"
      },
      {
       "titre": "Accueillir et installer le véhicule",
       "contenu": "<p>Dès la réception, le véhicule électrifié est identifié comme tel (logos, carte grise, prise de recharge, indication « READY » au combiné). L'OR mentionne le type de motorisation pour que le chef d'atelier affecte un technicien disposant de l'habilitation adaptée. Plusieurs précautions s'appliquent :</p>\n<ul>\n<li>déplacer le véhicule en mode « prêt » silencieusement : il n'émet qu'un faible bruit d'avertissement à basse vitesse, les collègues ne l'entendent pas arriver ;</li>\n<li>stationner sur un emplacement identifié, si possible équipé d'une borne de recharge et éloigné des zones de soudage ou de stockage de produits inflammables ;</li>\n<li>éloigner la clé ou la carte du véhicule (au-delà de la distance de détection) et couper le système avant toute intervention ;</li>\n<li>repérer sur la documentation les points de levage, les zones de passage des câbles orange et l'emplacement du connecteur de service.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur certains modèles, ouvrir une porte ou brancher un chargeur réveille les calculateurs et peut fermer les relais de batterie de traction (préconditionnement programmé, recharge différée). On désactive les recharges et préconditionnements programmés avant intervention, selon la méthode.</div>"
      },
      {
       "titre": "L'entretien périodique spécifique",
       "contenu": "<p>Le plan d'entretien d'une voiture électrique est allégé (pas de vidange moteur, pas de bougies, pas de courroie de distribution, embrayage absent), mais il comporte des contrôles propres. Celui d'un hybride cumule l'entretien du moteur thermique et celui de la partie électrique.</p>\n<table>\n<thead><tr><th>Opération</th><th>Électrique</th><th>Hybride</th></tr></thead>\n<tbody>\n<tr><td>Vidange et filtre à huile moteur</td><td>Non</td><td>Oui, parfois avec une huile très fluide prescrite (0W-16, 0W-20)</td></tr>\n<tr><td>Contrôle visuel de la batterie de traction (chocs, fixations, corrosion, étanchéité)</td><td>Oui</td><td>Oui</td></tr>\n<tr><td>Liquide de refroidissement de batterie et d'électronique</td><td>Contrôle et remplacement selon échéance, liquide spécifique à faible conductivité selon les constructeurs</td><td>Circuit séparé du moteur thermique, avec procédure de purge pilotée</td></tr>\n<tr><td>Huile du réducteur</td><td>Selon préconisation, parfois « à vie »</td><td>Huile de transmission hybride selon échéance</td></tr>\n<tr><td>Filtre d'habitacle, liquide de frein, balais</td><td>Oui</td><td>Oui</td></tr>\n<tr><td>Filtre de ventilation de batterie (refroidissement par air)</td><td>Selon modèle</td><td>Fréquent sur les hybrides refroidis par air : un filtre colmaté provoque des limitations de puissance</td></tr>\n<tr><td>Lecture des codes et des paramètres de batterie, mises à jour logicielles</td><td>Oui</td><td>Oui</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un hybride, le moteur thermique tourne peu et à faible température, ce qui favorise la condensation et la dilution de l'huile. Respecter l'échéance de temps du plan d'entretien, même si le kilométrage est faible, est particulièrement important.</div>"
      },
      {
       "titre": "Freins, pneumatiques et trains roulants",
       "contenu": "<p>La masse élevée des voitures électriques (souvent plusieurs centaines de kilogrammes de plus qu'un modèle thermique équivalent) et le couple disponible dès l'arrêt modifient l'usure. Les pneumatiques s'usent plus vite et sont souvent spécifiques : indice de charge renforcé (marquage XL ou HL), faible résistance au roulement, parfois mousse acoustique intérieure pour réduire le bruit. Le remplacement par un pneumatique de mêmes dimensions mais d'indice de charge insuffisant est une non-conformité.</p>\n<p>Les freins, au contraire, travaillent peu grâce au freinage récupératif : plaquettes durables, mais disques corrodés, étriers grippés et bruits. On contrôle l'état réel des surfaces de friction et non seulement l'épaisseur. Les plaquettes arrière se remplacent en mode maintenance du frein de stationnement électrique ; sur les systèmes de freinage découplés, une procédure particulière empêche la génération de pression intempestive pendant l'intervention.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la conformité d'un pneumatique de remplacement.<br>Données : préconisation constructeur 235/45 R19 99W XL ; pneumatique proposé 235/45 R19 95W.<br>1. Dimensions : identiques, conformes.<br>2. Indice de vitesse : W pour W, conforme.<br>3. Indice de charge : 95 (690 kg) inférieur à 99 (775 kg), non conforme.<br>4. Conclusion : le pneumatique proposé est refusé ; on choisit une référence d'indice 99 au moins, en privilégiant la gamme recommandée pour véhicule électrique si le constructeur l'indique.</div>"
      },
      {
       "titre": "Le réseau 12 V, cause de pannes fréquentes",
       "contenu": "<p>Paradoxalement, une grande partie des immobilisations de voitures électrifiées vient de la <strong>batterie 12 V</strong>. Elle alimente les calculateurs qui ferment les relais de la batterie de traction : si elle est déchargée, le véhicule ne passe pas en mode « prêt », même avec une batterie de traction pleine. Elle est rechargée par le convertisseur DC/DC uniquement lorsque le système est actif ou en charge ; un véhicule immobilisé longtemps, ou dont les calculateurs restent réveillés (application connectée interrogée souvent, accessoire), peut la décharger.</p>\n<p>Les contrôles à réaliser sont ceux d'un véhicule thermique (état de charge, test de batterie adapté à sa technologie, courant de repos), complétés par le contrôle du convertisseur DC/DC : système actif, la tension du réseau 12 V doit monter à une valeur de charge, généralement entre 13,5 et 14,5 V selon la stratégie du constructeur. Après remplacement, la batterie neuve est enregistrée dans le calculateur de gestion d'énergie.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> devant une voiture électrique qui « ne démarre pas », on commence par la batterie 12 V et le convertisseur DC/DC avant de suspecter la batterie de traction.</div>"
      },
      {
       "titre": "Les défauts de recharge",
       "contenu": "<p>Les réclamations concernant la recharge sont fréquentes : recharge impossible, puissance inférieure à l'attendu, recharge qui s'interrompt. La démarche consiste à distinguer l'infrastructure, le câble et le véhicule :</p>\n<ol>\n<li>reproduire le défaut sur une borne de l'atelier connue pour fonctionner, avec le câble du client puis avec un câble de l'atelier ;</li>\n<li>contrôler visuellement la prise du véhicule (broches, corps étrangers, traces d'échauffement) et le verrouillage du connecteur, actionneur souvent en cause ;</li>\n<li>lire les codes défaut du chargeur embarqué et du BMS, ainsi que la puissance négociée et les températures pendant la recharge ;</li>\n<li>vérifier les réglages du véhicule : limite de courant ou d'état de charge, programmation horaire.</li>\n</ol>\n<p>Un défaut de recharge sur la seule installation domestique du client relève de l'installateur électrique qualifié, pas de l'atelier ; le technicien l'indique au client.</p>"
      },
      {
       "titre": "Conseiller le client",
       "contenu": "<p>Le conseil technique au client est une compétence du référentiel. Pour un véhicule électrifié, il porte notamment sur : la recharge quotidienne (niveau de charge recommandé, usage de la recharge rapide), l'utilisation du préconditionnement par temps froid branché sur le réseau, l'impact de la température et de la vitesse sur l'autonomie, le contrôle régulier de la pression des pneumatiques, l'usage du freinage récupératif et l'intérêt de freinages appuyés occasionnels pour entretenir les disques, la conduite à tenir en cas d'alerte (voyant de défaut d'isolement, de température de batterie). Le conseil doit rester factuel, s'appuyer sur la notice du constructeur, et ne jamais promettre une durée de vie de batterie.</p>"
      },
      {
       "titre": "Remorquage, dépannage et immobilisation prolongée",
       "contenu": "<p>Une voiture électrique ou hybride en panne ne se déplace pas comme une voiture thermique. La plupart des constructeurs interdisent le remorquage roues motrices au sol, sauf sur une très courte distance et à très faible vitesse, car la machine électrique entraînée par les roues produit une tension et l'huile du réducteur peut ne pas circuler. On privilégie le transport sur plateau. À l'atelier, le déplacement d'un véhicule dont le système ne passe pas en mode prêt se fait avec un mode de déblocage de la position parking, décrit dans la notice, et avec des chariots rouleurs si nécessaire.</p>\n<p>Lorsqu'un véhicule reste immobilisé plusieurs semaines (attente de pièce, stockage), on suit les recommandations du constructeur : niveau de charge de la batterie de traction intermédiaire, maintien de charge de la batterie 12 V ou déconnexion selon la procédure, recharge périodique. Un véhicule accidenté, dont la batterie de traction a pu être touchée, est stocké à l'extérieur, éloigné des bâtiments et des autres véhicules, jusqu'à évaluation par un technicien qualifié.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer un véhicule électrique pour une immobilisation de quatre semaines.<br>1. Lire dans la documentation l'état de charge recommandé pour le stockage (souvent entre 30 et 70 % selon les constructeurs) et ajuster la charge.<br>2. Désactiver les recharges et préconditionnements programmés.<br>3. Brancher un mainteneur de charge adapté sur la batterie 12 V ou appliquer la procédure de déconnexion prévue.<br>4. Noter sur l'OR la date et l'état de charge, puis contrôler chaque semaine.<br>5. Avant restitution, vérifier l'absence de code défaut et réaliser un essai.</div>"
      }
     ],
     "points_cles": [
      "Le type de motorisation figure sur l'OR pour affecter un technicien habilité",
      "Recharges et préconditionnements programmés sont désactivés avant intervention",
      "L'électrique supprime vidange et distribution mais ajoute des contrôles de batterie et de refroidissement",
      "L'huile d'un hybride se remplace aussi à échéance de temps",
      "Les pneumatiques de voitures électriques exigent souvent un indice de charge renforcé",
      "Freins peu sollicités : corrosion des disques et grippage plutôt qu'usure",
      "Une batterie 12 V faible empêche le passage en mode prêt",
      "Un défaut de recharge se teste sur une borne et un câble connus"
     ],
     "lexique": [
      {
       "terme": "Mode prêt (READY)",
       "def": "État du véhicule électrifié dans lequel les relais de traction sont fermés et le véhicule peut rouler."
      },
      {
       "terme": "Préconditionnement",
       "def": "Mise en température programmée de la batterie ou de l'habitacle."
      },
      {
       "terme": "Indice de charge renforcé (XL)",
       "def": "Version d'un pneumatique supportant une charge supérieure à la version standard de même dimension."
      },
      {
       "terme": "Mousse acoustique",
       "def": "Garniture intérieure de certains pneumatiques destinée à réduire le bruit de roulement."
      },
      {
       "terme": "Convertisseur DC/DC",
       "def": "Convertisseur qui recharge la batterie 12 V à partir de la batterie de traction."
      },
      {
       "terme": "Gestion d'énergie",
       "def": "Fonction du calculateur qui surveille et pilote la charge de la batterie 12 V."
      },
      {
       "terme": "Verrouillage de connecteur",
       "def": "Actionneur qui bloque le câble de recharge dans la prise du véhicule pendant la charge."
      },
      {
       "terme": "Freinage découplé",
       "def": "Système où la pédale ne commande pas directement la pression, générée par un actionneur électrique."
      }
     ]
    },
    {
     "id": "bmv-vl-aides-conduite",
     "titre": "Aides à la conduite et calibrage des capteurs",
     "niveau": "Tle",
     "options": [
      "vl"
     ],
     "duree": 40,
     "objectifs": [
      "Identifier les principales aides à la conduite et les capteurs qu'elles utilisent",
      "Expliquer le principe de fonctionnement des caméras, radars, lidars et capteurs à ultrasons",
      "Repérer les interventions qui imposent un calibrage",
      "Décrire une procédure de calibrage statique et dynamique",
      "Informer le client sur les limites des systèmes et tracer l'intervention"
     ],
     "sections": [
      {
       "titre": "Des aides à la conduite devenues obligatoires",
       "contenu": "<p>Les <strong>aides à la conduite</strong> (en anglais ADAS, <em>Advanced Driver Assistance Systems</em>) assistent le conducteur ou interviennent à sa place dans certaines situations. La réglementation européenne sur la sécurité générale des véhicules a rendu plusieurs d'entre elles obligatoires sur les voitures neuves, de façon progressive depuis 2022 : freinage d'urgence automatique, maintien dans la voie d'urgence, adaptation intelligente de la vitesse (information sur la limitation), détection de somnolence et d'inattention, signal d'arrêt d'urgence, aide au recul, enregistreur de données d'événement.</p>\n<table>\n<thead><tr><th>Fonction</th><th>Capteurs principaux</th><th>Actionneurs</th></tr></thead>\n<tbody>\n<tr><td>Freinage d'urgence automatique</td><td>Caméra frontale, radar avant</td><td>Groupe ABS-ESP, contrôle moteur</td></tr>\n<tr><td>Régulateur de vitesse adaptatif</td><td>Radar avant, caméra</td><td>Contrôle moteur, freinage, boîte</td></tr>\n<tr><td>Alerte et maintien dans la voie</td><td>Caméra frontale</td><td>Direction assistée électrique, vibration du volant</td></tr>\n<tr><td>Surveillance d'angle mort, alerte de trafic arrière</td><td>Radars arrière latéraux</td><td>Voyants dans les rétroviseurs, freinage</td></tr>\n<tr><td>Aide au stationnement, stationnement automatique</td><td>Capteurs à ultrasons, caméras panoramiques</td><td>Direction, freinage, motorisation</td></tr>\n<tr><td>Reconnaissance des panneaux</td><td>Caméra frontale, cartographie</td><td>Combiné, limiteur de vitesse</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Les technologies de capteurs",
       "contenu": "<ul>\n<li>La <strong>caméra frontale</strong>, fixée derrière le pare-brise près du rétroviseur, reconnaît les marquages, les véhicules, les piétons et les panneaux par traitement d'image. Elle dépend de la propreté et de la qualité optique du pare-brise dans sa zone de vision.</li>\n<li>Le <strong>radar</strong> émet des ondes radio (bande des 77 GHz pour les radars récents) et mesure la distance et la vitesse relative des objets par le temps de retour et l'effet Doppler. Il fonctionne par mauvais temps mais doit être parfaitement orienté : un écart d'un degré décale la zone surveillée de près de 2 m à 100 m de distance.</li>\n<li>Le <strong>lidar</strong> mesure les distances par impulsions laser ; il équipe encore peu de véhicules de série.</li>\n<li>Les <strong>capteurs à ultrasons</strong>, dans les boucliers, mesurent les distances courtes pour le stationnement.</li>\n<li>Les <strong>caméras panoramiques</strong> (rétroviseurs, calandre, hayon) reconstituent une vue de dessus.</li>\n</ul>\n<p>Un calculateur fusionne souvent les informations de plusieurs capteurs : c'est la <strong>fusion de données</strong>, qui améliore la fiabilité de la détection.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> évaluer l'effet d'un défaut d'orientation du radar.<br>Données : défaut d'orientation latérale de 1° ; distance de l'objet 100 m.<br>1. Décalage latéral : d = 100 × tan(1°) ≈ 100 × 0,0175 ≈ 1,75 m.<br>2. Interprétation : le radar considère dans la voie voisine un véhicule réellement situé dans la voie du véhicule, ou inversement.<br>3. Conséquence : régulateur adaptatif ou freinage d'urgence qui réagissent à tort ou ne réagissent pas. D'où la précision exigée lors du calibrage, souvent de quelques dixièmes de degré.</div>"
      },
      {
       "titre": "Quand faut-il calibrer ?",
       "contenu": "<p>Le <strong>calibrage</strong> (ou étalonnage) consiste à apprendre au calculateur la position et l'orientation exactes du capteur par rapport au véhicule et à son axe de déplacement. Il est imposé par le constructeur après de nombreuses interventions :</p>\n<ul>\n<li>remplacement ou dépose du pare-brise portant la caméra ;</li>\n<li>remplacement, dépose ou choc sur un radar, un bouclier ou son support ;</li>\n<li>contrôle et réglage de la géométrie des trains roulants, en particulier du train arrière qui détermine l'angle de poussée ;</li>\n<li>modification de la hauteur de caisse (ressorts, suspension pneumatique), changement de dimension de roues ;</li>\n<li>remplacement du calculateur concerné ;</li>\n<li>réparation de carrosserie dans la zone des capteurs.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un véhicule restitué sans calibrage après un remplacement de pare-brise ou une géométrie peut ne présenter aucun voyant, tout en ayant des aides à la conduite qui fonctionnent mal. La responsabilité de l'atelier peut être engagée en cas d'accident. La méthode constructeur est la seule référence.</div>"
      },
      {
       "titre": "Le calibrage statique",
       "contenu": "<p>Le <strong>calibrage statique</strong> se réalise à l'atelier, véhicule à l'arrêt, devant des <strong>cibles</strong> (panneaux à motifs pour les caméras, réflecteurs pour les radars) placées à une distance, une hauteur et un alignement précis fixés par le constructeur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déroulement type d'un calibrage statique de caméra frontale.<br>1. Préparer le véhicule : pneumatiques à la pression, réservoir plein ou charge prescrite, véhicule à vide, coffre vide, géométrie conforme.<br>2. Préparer l'aire : sol plan et horizontal, éclairage homogène sans reflet, absence d'objets réfléchissants dans le champ.<br>3. Positionner le support de cible : mesurer la distance depuis le centre de roue ou l'emblème, aligner sur l'axe de symétrie (ou sur l'axe de poussée) à l'aide de lasers ou de cibles de roue, régler la hauteur.<br>4. Saisir dans l'outil de diagnostic les mesures demandées (hauteur des passages de roue, par exemple).<br>5. Lancer la procédure : le calculateur détecte la cible et calcule les corrections.<br>6. Lire le résultat (procédure réussie, angles enregistrés), effacer les codes, imprimer ou enregistrer le rapport.</div>"
      },
      {
       "titre": "Le calibrage dynamique et la vérification",
       "contenu": "<p>Le <strong>calibrage dynamique</strong> se fait en roulant : l'outil de diagnostic lance la procédure, puis le technicien conduit sur une route aux marquages nets, à vitesse et durée définies, jusqu'à ce que le calculateur ait accumulé assez d'informations. Les conditions (météo, trafic, marquages) influencent la réussite. Certains constructeurs imposent un calibrage statique, d'autres dynamique, d'autres les deux successivement.</p>\n<p>Après calibrage, on vérifie le fonctionnement par un essai : affichage des lignes détectées, reconnaissance des panneaux, réaction du régulateur adaptatif. Le rapport de calibrage, avec date, kilométrage, valeurs et opérateur, est joint à l'OR. Il sert de preuve que l'intervention a été réalisée selon la procédure.</p>"
      },
      {
       "titre": "Diagnostiquer un défaut d'aide à la conduite",
       "contenu": "<p>Les messages « système indisponible » ou « capteur obstrué » ne signifient pas forcément une panne. La démarche commence par les causes externes : salissure, neige, autocollant ou accessoire devant un capteur, pare-brise de remplacement non conforme (zone optique, teinte), éblouissement. On lit ensuite les codes défaut des calculateurs concernés et les codes associés : un défaut de capteur d'angle volant, de capteur de vitesse de roue ou un défaut de communication désactive aussi les aides qui utilisent ces informations.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'investissement dans une aire de calibrage (sol plan, supports de cibles, cibles spécifiques par marque) est important. Certains ateliers sous-traitent le calibrage à des spécialistes ; le technicien doit alors identifier le besoin et le noter sur l'OR pour ne pas restituer un véhicule non calibré.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les aides à la conduite assistent le conducteur sans le remplacer. Le technicien rappelle au client que leurs performances dépendent de l'état des capteurs, de la propreté et des conditions météorologiques.</div>"
      },
      {
       "titre": "Vers la conduite automatisée",
       "contenu": "<p>On classe les systèmes selon des <strong>niveaux d'automatisation</strong> de 0 (aucune automatisation) à 5 (conduite entièrement automatisée en toutes circonstances). La plupart des voitures récentes atteignent le niveau 2 : le système agit à la fois sur la direction et la vitesse, mais le conducteur surveille en permanence. Quelques systèmes de niveau 3, autorisés dans des conditions limitées (autoroute, vitesse réduite), permettent au conducteur de détourner son attention tant que le système le lui permet. Pour l'atelier, la progression de l'automatisation accroît le nombre de capteurs, l'exigence de précision des calibrages et l'importance des mises à jour logicielles.</p>\n<h4>Les données enregistrées par le véhicule</h4>\n<p>Les voitures neuves embarquent désormais un <strong>enregistreur de données d'événement</strong> qui conserve, autour d'un choc, des informations comme la vitesse, le freinage, l'état des ceintures et l'activation des aides à la conduite. Ces données ne sont accessibles qu'à des personnes autorisées dans un cadre défini. Pour l'atelier, deux conséquences pratiques : ne jamais tenter d'effacer ou de modifier ces données, et considérer que toute intervention sur les capteurs d'aide à la conduite doit être documentée avec rigueur, car elle peut être examinée après un accident.</p>\n<p>Enfin, les aides à la conduite dépendent d'un équipement de base en bon état. Un pare-brise rayé dans la zone de la caméra, un projecteur mal réglé, des balais d'essuie-glace usés qui laissent des traînées, un bouclier repeint avec une épaisseur de peinture excessive devant un radar dégradent la détection. Lors de l'entretien périodique d'une voiture équipée, le contrôle de ces éléments prend donc une importance nouvelle et fait l'objet de préconisations précises au client.</p>"
      }
     ],
     "points_cles": [
      "Plusieurs aides à la conduite sont obligatoires sur les voitures neuves dans l'Union européenne",
      "Caméra, radar, ultrasons et caméras panoramiques sont les capteurs les plus courants",
      "Un écart d'orientation de 1° du radar décale la zone surveillée de près de 2 m à 100 m",
      "Pare-brise, géométrie, hauteur de caisse, bouclier : autant d'interventions qui imposent un calibrage",
      "Le calibrage statique exige un véhicule préparé et une aire plane, éclairée, dégagée",
      "Le calibrage dynamique se réalise en roulant dans des conditions définies",
      "Le rapport de calibrage est joint à l'OR comme preuve",
      "Les aides assistent le conducteur sans le remplacer"
     ],
     "lexique": [
      {
       "terme": "ADAS",
       "def": "Systèmes avancés d'aide à la conduite."
      },
      {
       "terme": "Radar",
       "def": "Capteur qui mesure distance et vitesse relative des objets par ondes radio."
      },
      {
       "terme": "Effet Doppler",
       "def": "Variation de fréquence d'une onde réfléchie par un objet en mouvement, utilisée pour mesurer sa vitesse."
      },
      {
       "terme": "Fusion de données",
       "def": "Combinaison des informations de plusieurs capteurs pour fiabiliser la détection."
      },
      {
       "terme": "Calibrage",
       "def": "Apprentissage par le calculateur de la position et de l'orientation exactes d'un capteur."
      },
      {
       "terme": "Calibrage statique",
       "def": "Calibrage réalisé à l'arrêt devant des cibles positionnées précisément."
      },
      {
       "terme": "Calibrage dynamique",
       "def": "Calibrage réalisé en roulant selon une procédure définie."
      },
      {
       "terme": "Axe de poussée",
       "def": "Direction de déplacement imposée par le train arrière, référence de certains calibrages."
      },
      {
       "terme": "Niveau d'automatisation",
       "def": "Classement de 0 à 5 du degré de délégation de la conduite au système."
      }
     ]
    },
    {
     "id": "bmv-vl-securite-passive-habitacle",
     "titre": "Sécurité passive, éclairage et systèmes d'habitacle",
     "niveau": "1re-Tle",
     "options": [
      "vl"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire le fonctionnement des coussins gonflables et des prétensionneurs de ceinture",
      "Appliquer les règles de sécurité pour intervenir sur les systèmes pyrotechniques",
      "Expliquer le fonctionnement de l'accès et du démarrage sans clé et de l'antidémarrage",
      "Contrôler et régler un éclairage moderne",
      "Diagnostiquer un dysfonctionnement d'équipement d'habitacle"
     ],
     "sections": [
      {
       "titre": "Sécurité active et sécurité passive",
       "contenu": "<p>On distingue la <strong>sécurité active</strong>, qui aide à éviter l'accident (freinage, ABS, contrôle de stabilité, éclairage, aides à la conduite), et la <strong>sécurité passive</strong>, qui limite les conséquences d'un accident pour les occupants et les autres usagers : structure de caisse à déformation programmée, ceintures de sécurité, coussins gonflables, appuie-tête, colonne de direction rétractable, capot actif de protection des piétons sur certains modèles. Dans l'option véhicules légers, ces systèmes sont omniprésents et font l'objet d'interventions régulières : remplacement d'un volant, d'un siège, d'une planche de bord, diagnostic d'un voyant d'airbag.</p>"
      },
      {
       "titre": "Coussins gonflables et prétensionneurs",
       "contenu": "<p>Le système de retenue comprend :</p>\n<ul>\n<li>un <strong>calculateur d'airbag</strong>, placé au centre du véhicule, qui contient des capteurs d'accélération et reçoit les informations de capteurs de choc périphériques (avant, latéraux) ;</li>\n<li>des <strong>coussins gonflables</strong> (frontaux conducteur et passager, latéraux, rideaux, genoux, parfois central) ;</li>\n<li>des <strong>prétensionneurs</strong> de ceinture, qui rétractent la sangle en quelques millisecondes au début du choc, et des limiteurs d'effort ;</li>\n<li>un <strong>contacteur tournant</strong> sous le volant, qui assure la liaison électrique avec le coussin du volant malgré la rotation ;</li>\n<li>des capteurs de présence et de bouclage, et un dispositif de neutralisation de l'airbag passager pour installer un siège enfant dos à la route.</li>\n</ul>\n<p>En cas de choc, le calculateur analyse la décélération et déclenche, en quelques millisecondes, les <strong>initiateurs pyrotechniques</strong> (allumeurs) adaptés à la violence et à la direction du choc. Le gonflage est réalisé par un générateur de gaz pyrotechnique ou hybride. Le coussin se gonfle en quelques dizaines de millisecondes puis se dégonfle par des évents.</p>"
      },
      {
       "titre": "Intervenir en sécurité sur les systèmes pyrotechniques",
       "contenu": "<p>Les éléments pyrotechniques sont des articles explosifs. Un déclenchement accidentel pendant une intervention peut provoquer des blessures graves. Les règles suivantes s'appliquent, complétées par la méthode du constructeur :</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déposer un module d'airbag de volant.<br>1. Couper le contact, débrancher la batterie 12 V et isoler la cosse.<br>2. Attendre le temps prescrit (souvent une à quelques minutes) pour que la réserve d'énergie du calculateur se décharge.<br>3. Se décharger de l'électricité statique (toucher une masse métallique) avant de manipuler le connecteur.<br>4. Déposer le module et le poser immédiatement face matelassée vers le haut, sur un plan de travail, à l'écart des zones de passage.<br>5. Ne jamais mesurer la résistance d'un initiateur avec un ohmmètre : utiliser uniquement les résistances de substitution et l'outil de diagnostic.<br>6. Au remontage, rebrancher le connecteur, vérifier qu'aucune personne n'est dans l'habitacle, rebrancher la batterie, lire et effacer les codes, vérifier l'extinction du voyant.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un module d'airbag ne se transporte pas face matelassée contre le corps, ne se chauffe pas, ne se démonte pas. Après déclenchement, le calculateur d'airbag et les éléments déclenchés sont remplacés selon les prescriptions ; les éléments non déclenchés destinés à être éliminés suivent une filière spécifique de neutralisation.</div>"
      },
      {
       "titre": "Diagnostiquer un voyant d'airbag",
       "contenu": "<p>Le calculateur surveille en permanence la résistance de chaque ligne d'initiateur, l'état des capteurs et sa propre alimentation. Un défaut allume le voyant d'airbag, ce qui signifie qu'un ou plusieurs éléments peuvent ne pas se déclencher en cas de choc ; c'est aussi une défaillance relevée au contrôle technique.</p>\n<p>Les causes fréquentes sont : un connecteur de siège débranché ou oxydé (sièges réglés, déplacés ou déposés), un contacteur tournant usé, un défaut d'alimentation à cause d'une batterie faible au démarrage, un capteur de choc endommagé. La démarche suit les codes et les protocoles du constructeur, avec résistances de substitution pour isoler un initiateur. Certains codes, liés à un choc enregistré, ne s'effacent pas et imposent le remplacement du calculateur.</p>\n<p>La lecture du code oriente vers une ligne précise, par exemple « résistance trop élevée, ligne prétensionneur avant gauche ». On contrôle alors visuellement le connecteur sous le siège, on vérifie qu'il est bien verrouillé, puis on remplace temporairement l'initiateur par une résistance de substitution de la valeur indiquée : si le code disparaît, l'élément pyrotechnique est en cause ; s'il persiste, le défaut se situe dans le câblage ou le calculateur. Les connecteurs des lignes pyrotechniques comportent un court-circuiteur interne qui relie les deux bornes de l'initiateur lorsqu'ils sont débranchés, ce qui évite un déclenchement par électricité statique ; ce dispositif peut lui-même être à l'origine d'un code s'il reste fermé après rebranchement.</p>"
      },
      {
       "titre": "Accès, démarrage sans clé et antidémarrage",
       "contenu": "<p>L'<strong>antidémarrage</strong> électronique empêche le démarrage par une clé non reconnue : un transpondeur dans la clé dialogue avec le véhicule par une antenne, et le calculateur de gestion moteur (ou de traction) n'autorise le démarrage qu'après un échange de codes cryptés. Les systèmes d'<strong>accès et de démarrage sans clé</strong> utilisent des antennes basse fréquence dans les portes et l'habitacle pour localiser la clé, et un récepteur radio haute fréquence. De nombreux véhicules acceptent aussi une clé numérique sur téléphone.</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Hypothèses à vérifier en priorité</th></tr></thead>\n<tbody>\n<tr><td>Ouverture à distance impossible, démarrage possible en plaçant la clé à l'emplacement de secours</td><td>Pile de la clé, perturbation radio locale</td></tr>\n<tr><td>Clé non détectée dans l'habitacle</td><td>Antenne intérieure, pile, clé hors zone (objet métallique)</td></tr>\n<tr><td>Voyant d'antidémarrage, moteur qui ne démarre pas</td><td>Clé non appairée, défaut de communication entre calculateurs, batterie faible</td></tr>\n</tbody>\n</table>\n<p>L'appairage d'une nouvelle clé ou le remplacement d'un calculateur lié à l'antidémarrage sont des opérations sensibles, encadrées par l'accès sécurisé aux informations du constructeur.</p>"
      },
      {
       "titre": "L'éclairage moderne : LED, adaptatif, matriciel",
       "contenu": "<p>Les lampes à incandescence et halogènes ont laissé la place aux <strong>diodes électroluminescentes</strong> (LED), plus efficaces et durables. Les projecteurs à LED sont souvent indissociables : on remplace le module ou le bloc complet, pas une ampoule. Les projecteurs <strong>adaptatifs</strong> orientent le faisceau dans les virages ; les projecteurs <strong>matriciels</strong> éteignent sélectivement des segments du feu de route pour ne pas éblouir les véhicules détectés par la caméra. Le <strong>correcteur de portée</strong> automatique, obligatoire avec certaines sources lumineuses puissantes, utilise des capteurs de hauteur de caisse.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler le réglage d'un feu de croisement au régloscope.<br>1. Véhicule sur sol plan, pneumatiques à la pression, charge prescrite (souvent conducteur ou masse équivalente).<br>2. Pour un correcteur automatique, réaliser l'initialisation de la position de référence à l'outil de diagnostic si la méthode le demande.<br>3. Aligner le régloscope sur l'axe du projecteur, à la distance prévue.<br>4. Lire la position de la coupure : son inclinaison est indiquée sur le projecteur en pourcentage (par exemple 1 %, soit 1 cm par mètre).<br>5. Régler par les vis prévues ou par la fonction de l'outil, puis contrôler le second projecteur.</div>"
      },
      {
       "titre": "Les équipements de confort et le boîtier de servitude",
       "contenu": "<p>Lève-vitres, verrouillage, rétroviseurs, sièges électriques, essuyage automatique, éclairage intérieur sont gérés par un <strong>boîtier de servitude intelligent</strong> (ou calculateur d'habitacle) et des calculateurs de porte, reliés par CAN et LIN. Beaucoup de fonctions sont paramétrables (verrouillage automatique en roulant, durée d'éclairage d'accompagnement) par le client depuis l'écran ou par l'atelier à l'outil de diagnostic.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> après un débranchement de batterie, des fonctions comme la remontée séquentielle des vitres ou l'anti-pincement peuvent être désactivées tant que les butées n'ont pas été réapprises. La procédure (souvent quelques manipulations du bouton) est réalisée avant de restituer le véhicule, sinon le client revient pour un « défaut » inexistant.</div>"
      },
      {
       "titre": "Le multimédia et la connectivité",
       "contenu": "<p>Les voitures récentes intègrent un système multimédia avec écran tactile, navigation, téléphonie, et souvent un <strong>module télématique</strong> doté d'une carte SIM. Ce module assure l'appel d'urgence automatique en cas d'accident (système eCall, obligatoire sur les voitures neuves homologuées depuis 2018 dans l'Union européenne), les services connectés et parfois les mises à jour à distance. En diagnostic, un défaut de l'eCall allume un voyant spécifique ; il dépend notamment d'une batterie de secours interne, d'une antenne et d'un micro. Le technicien informe le client lorsqu'un service connecté nécessite un abonnement ou un compte, sans intervenir sur ses données personnelles.</p>"
      }
     ],
     "points_cles": [
      "La sécurité passive limite les conséquences d'un accident pour les occupants",
      "Le calculateur d'airbag déclenche coussins et prétensionneurs en quelques millisecondes",
      "Avant de toucher un élément pyrotechnique : batterie débranchée et temps d'attente respecté",
      "On ne mesure jamais un initiateur à l'ohmmètre ; on utilise les résistances de substitution",
      "Un voyant d'airbag allumé est une défaillance de sécurité et de contrôle technique",
      "L'antidémarrage autorise le démarrage après un échange de codes cryptés avec la clé",
      "Les projecteurs à LED se remplacent souvent en bloc et se règlent au régloscope",
      "Après débranchement de batterie, certaines fonctions de confort doivent être réapprises"
     ],
     "lexique": [
      {
       "terme": "Sécurité passive",
       "def": "Ensemble des dispositifs qui réduisent les conséquences d'un accident."
      },
      {
       "terme": "Prétensionneur",
       "def": "Dispositif qui retend la ceinture de sécurité au début d'un choc."
      },
      {
       "terme": "Initiateur pyrotechnique",
       "def": "Composant qui déclenche la charge d'un airbag ou d'un prétensionneur."
      },
      {
       "terme": "Contacteur tournant",
       "def": "Liaison électrique sous le volant qui suit sa rotation."
      },
      {
       "terme": "Résistance de substitution",
       "def": "Résistance qui remplace un initiateur pour le diagnostic sans risque de déclenchement."
      },
      {
       "terme": "Transpondeur",
       "def": "Puce de la clé qui dialogue avec l'antidémarrage."
      },
      {
       "terme": "Projecteur matriciel",
       "def": "Projecteur à segments LED pilotés pour éviter l'éblouissement."
      },
      {
       "terme": "Correcteur de portée",
       "def": "Dispositif qui ajuste la hauteur du faisceau selon l'assiette du véhicule."
      },
      {
       "terme": "eCall",
       "def": "Système d'appel d'urgence automatique déclenché en cas d'accident grave."
      }
     ]
    },
    {
     "id": "bmv-vl-programmation-codage",
     "titre": "Programmation, codage et accès aux informations techniques",
     "niveau": "Tle",
     "options": [
      "vl"
     ],
     "duree": 35,
     "objectifs": [
      "Distinguer téléchargement, configuration, codage, apprentissage et initialisation",
      "Préparer et réaliser une programmation de calculateur en sécurité",
      "Situer les règles d'accès des réparateurs aux informations techniques et aux fonctions de sécurité",
      "Identifier les risques liés à la cybersécurité des véhicules",
      "Tracer et justifier une opération logicielle auprès du client"
     ],
     "sections": [
      {
       "titre": "Le logiciel, une pièce du véhicule",
       "contenu": "<p>Une voiture récente contient des dizaines de calculateurs dont le logiciel détermine le comportement : passages de rapports, stratégie de régénération, gestion de la batterie, réglages des aides à la conduite. Le constructeur corrige des défauts ou améliore des fonctions en publiant de nouvelles versions de logiciel. Pour le technicien de l'option véhicules légers, intervenir sur le logiciel est devenu aussi courant que remplacer une pièce mécanique.</p>\n<table>\n<thead><tr><th>Opération</th><th>Définition</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Téléchargement (flashage, reprogrammation)</td><td>Remplacement du logiciel d'un calculateur par une nouvelle version</td><td>Mise à jour de la boîte automatique pour corriger des à-coups</td></tr>\n<tr><td>Configuration ou codage</td><td>Paramétrage du calculateur selon les équipements du véhicule</td><td>Déclarer la présence d'un attelage ou d'une option d'éclairage</td></tr>\n<tr><td>Apprentissage</td><td>Enregistrement de caractéristiques réelles d'un organe</td><td>Point de léchage d'un embrayage piloté, débit des injecteurs</td></tr>\n<tr><td>Initialisation</td><td>Mise à une position ou valeur de référence</td><td>Capteur d'angle volant, butées de lève-vitre</td></tr>\n<tr><td>Appairage</td><td>Association sécurisée de deux éléments</td><td>Nouvelle clé, nouveau calculateur d'antidémarrage</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Préparer une programmation",
       "contenu": "<p>Une programmation interrompue peut rendre un calculateur inutilisable. La préparation est donc rigoureuse :</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser une mise à jour logicielle de calculateur.<br>1. Vérifier sur le portail du constructeur que la mise à jour concerne bien ce véhicule (numéro VIN, version actuelle du logiciel relevée à l'outil) et lire la note technique associée.<br>2. Brancher un <strong>chargeur-mainteneur de tension</strong> capable de fournir un courant suffisant et stable (souvent plusieurs dizaines d'ampères), car la tension doit rester dans une plage étroite pendant toute l'opération.<br>3. Couper tous les consommateurs, fermer les portes si la méthode le demande, s'assurer d'une connexion stable de l'outil (câble plutôt que liaison sans fil si recommandé) et d'un accès internet fiable.<br>4. Lancer la programmation et ne pas intervenir sur le véhicule pendant son déroulement.<br>5. Réaliser les opérations de fin : effacement des codes de tous les calculateurs, apprentissages ou initialisations demandés, essai routier.<br>6. Noter sur l'OR les versions avant et après et le motif de l'intervention.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une chute de tension de la batterie pendant un téléchargement est la première cause d'échec. Une batterie seule, même chargée, ne suffit pas : les calculateurs restent éveillés et consomment plusieurs dizaines d'ampères pendant parfois plus d'une heure.</div>"
      },
      {
       "titre": "Remplacer un calculateur",
       "contenu": "<p>Un calculateur de remplacement est livré vierge ou avec un logiciel de base. Selon les cas, il faut le programmer avec le logiciel correspondant au véhicule, le configurer, transférer des données de l'ancien calculateur (valeurs d'apprentissage, compteur kilométrique, codes de l'antidémarrage), puis réaliser les apprentissages. Si l'ancien calculateur est illisible, certaines données doivent être reconstituées à partir des informations du constructeur. Le compteur kilométrique fait l'objet de règles strictes : il est inscrit dans plusieurs calculateurs, et sa valeur doit être conservée à l'identique lors d'un remplacement de combiné. Avant de commander un calculateur, il faut donc s'assurer que le diagnostic est certain (alimentations, masses et réseau contrôlés) et que l'atelier dispose des moyens et des droits pour le mettre en service.</p>"
      },
      {
       "titre": "L'accès des réparateurs aux informations",
       "contenu": "<p>La réglementation européenne sur la réception des véhicules oblige les constructeurs à donner aux opérateurs indépendants un accès aux <strong>informations sur la réparation et l'entretien</strong> (RMI) : méthodes, schémas, valeurs, mises à jour logicielles, diagnostics, dans des conditions non discriminatoires, généralement via des portails en ligne payants à l'usage (à l'heure, au jour, à l'année). Cet accès permet à un réparateur indépendant de travailler sur toutes les marques avec un niveau d'information comparable à celui du réseau.</p>\n<p>Les fonctions liées à la <strong>sécurité du véhicule</strong> (antidémarrage, clés, calculateurs liés au vol) sont plus protégées. L'Union européenne a mis en place un dispositif d'accréditation appelé SERMI : le professionnel et son entreprise sont contrôlés et reçoivent un certificat numérique personnel qui leur ouvre l'accès à ces fonctions sur les portails des constructeurs. Chaque opération est tracée et rattachée à la personne qui l'a réalisée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'accès aux fonctions de sécurité est personnel et tracé. Il ne se prête pas et ne se partage pas, comme un code de carte bancaire.</div>"
      },
      {
       "titre": "Outils de diagnostic constructeur et multimarques",
       "contenu": "<p>L'atelier dispose d'outils de deux familles. L'<strong>outil constructeur</strong> couvre toutes les fonctions d'une marque, y compris les programmations, avec des protocoles guidés ; il est la référence dans le réseau. L'<strong>outil multimarque</strong> couvre de nombreuses marques avec une profondeur variable : lecture et effacement des codes, paramètres, tests d'actionneurs, principales fonctions d'entretien. Pour les programmations, les ateliers indépendants utilisent souvent une interface normalisée (appelée interface « pass-thru ») qui relie le véhicule au portail du constructeur depuis un ordinateur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un véhicule récent, le simple fait de lire des codes ou d'effacer des défauts peut nécessiter que l'outil s'authentifie auprès du serveur du constructeur, en raison de la passerelle de sécurité du véhicule. L'atelier doit disposer des comptes et des licences correspondants, sinon l'outil reste en lecture partielle.</div>"
      },
      {
       "titre": "Cybersécurité du véhicule",
       "contenu": "<p>Un véhicule connecté peut être la cible d'attaques informatiques. Depuis 2022 puis 2024 selon les cas, la réglementation impose aux constructeurs de disposer d'un système de management de la cybersécurité et de sécuriser les mises à jour logicielles pour les véhicules neufs homologués. Pour l'atelier, cela se traduit par :</p>\n<ul>\n<li>des accès authentifiés aux calculateurs, via passerelle sécurisée ;</li>\n<li>l'interdiction d'utiliser des logiciels ou des boîtiers non autorisés qui modifient le comportement du véhicule (augmentation de puissance non homologuée, suppression de dépollution, modification du compteur kilométrique, qui est un délit) ;</li>\n<li>la vigilance sur les clés USB et appareils connectés au véhicule ;</li>\n<li>la protection des données personnelles présentes dans le véhicule (contacts, trajets, comptes) : on n'accède pas à ces données et on propose au client, lors d'une revente, de réinitialiser les réglages personnels.</li>\n</ul>"
      },
      {
       "titre": "Expliquer une intervention logicielle au client",
       "contenu": "<p>Une mise à jour ne se « voit » pas. Le client doit comprendre pourquoi elle a été faite et ce qu'elle change. Le compte rendu indique : le motif (rappel du constructeur, campagne de mise à jour, correction d'un symptôme), la version installée, les effets attendus et les éventuels effets ressentis (comportement de la boîte légèrement différent, apprentissage pendant les premiers kilomètres). Les campagnes de rappel liées à la sécurité sont gratuites pour le client et réalisées dans le réseau du constructeur ; l'atelier qui identifie une campagne non réalisée en informe le client.</p>\n<p>Il est utile d'expliquer également que certaines fonctions ou réglages personnels peuvent être réinitialisés par une mise à jour (stations de radio, préférences d'affichage), afin que le client ne prenne pas cela pour un défaut. Pour les mises à jour réalisées à distance par le constructeur, le client peut demander à l'atelier de vérifier la version installée et l'absence de code défaut après coup.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger la ligne d'OR d'une mise à jour.<br>1. Motif : « Client signale des à-coups au passage de la 1re à la 2e à froid ; note technique constructeur applicable. »<br>2. Opération : « Mise à jour du calculateur de boîte, version avant / version après, apprentissage des embrayages réalisé. »<br>3. Vérification : « Essai routier 15 km, à-coups disparus, aucun code défaut. »<br>4. Conseil : « Comportement de la boîte susceptible d'évoluer légèrement pendant les 100 premiers kilomètres (adaptation). »</div>"
      },
      {
       "titre": "Un métier qui évolue",
       "contenu": "<p>La part du logiciel dans les interventions augmente avec chaque génération de véhicules. Certaines fonctions peuvent même être activées à distance après la vente, par abonnement ou achat. Le technicien de l'option véhicules légers doit donc entretenir ses compétences par la formation continue proposée par les constructeurs et les équipementiers, consulter régulièrement les notes techniques, et considérer l'outil de diagnostic et l'ordinateur comme des outils aussi essentiels que la clé dynamométrique. Les compétences mécaniques restent cependant indispensables : une mise à jour ne répare ni un embrayage usé, ni un connecteur oxydé.</p>"
      }
     ],
     "points_cles": [
      "Téléchargement, codage, apprentissage, initialisation et appairage sont des opérations distinctes",
      "Une programmation exige un mainteneur de tension stable et une connexion fiable",
      "Versions avant et après et motif de la mise à jour sont notés sur l'OR",
      "Remplacer un calculateur suppose un diagnostic certain et les droits de mise en service",
      "Les constructeurs doivent donner accès aux informations de réparation aux indépendants",
      "Les fonctions liées à la sécurité du véhicule exigent une accréditation personnelle et tracée",
      "Modifier un compteur kilométrique ou supprimer la dépollution est interdit",
      "Les campagnes de rappel de sécurité sont gratuites pour le client"
     ],
     "lexique": [
      {
       "terme": "Téléchargement",
       "def": "Remplacement du logiciel d'un calculateur par une nouvelle version."
      },
      {
       "terme": "Codage",
       "def": "Paramétrage d'un calculateur selon les équipements du véhicule."
      },
      {
       "terme": "Appairage",
       "def": "Association sécurisée de deux éléments, par exemple une clé et l'antidémarrage."
      },
      {
       "terme": "Mainteneur de tension",
       "def": "Chargeur stabilisé qui maintient la tension du réseau de bord pendant une programmation."
      },
      {
       "terme": "RMI",
       "def": "Informations sur la réparation et l'entretien des véhicules que le constructeur doit rendre accessibles."
      },
      {
       "terme": "SERMI",
       "def": "Dispositif européen d'accréditation des professionnels pour l'accès aux fonctions liées à la sécurité du véhicule."
      },
      {
       "terme": "Interface pass-thru",
       "def": "Interface normalisée qui relie le véhicule à un logiciel constructeur via un ordinateur."
      },
      {
       "terme": "Campagne de rappel",
       "def": "Opération organisée par le constructeur pour corriger un défaut sur une série de véhicules."
      },
      {
       "terme": "Cybersécurité",
       "def": "Protection des systèmes informatiques du véhicule contre les accès et modifications malveillants."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Option véhicules de transport routier",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmv-tr-freinage-pneumatique",
     "titre": "Freinage pneumatique des véhicules industriels",
     "niveau": "1re-Tle",
     "options": [
      "tr"
     ],
     "duree": 45,
     "objectifs": [
      "Décrire la production, le traitement et le stockage de l'air comprimé",
      "Identifier les circuits de freinage de service, de secours et de stationnement",
      "Expliquer le fonctionnement des cylindres de frein à diaphragme et à ressort",
      "Décrire le freinage électronique et les ralentisseurs",
      "Réaliser les contrôles de pression, d'étanchéité et d'efficacité d'un circuit pneumatique"
     ],
     "sections": [
      {
       "titre": "Pourquoi l'air comprimé",
       "contenu": "<p>Un véhicule de transport routier peut atteindre 44 tonnes en ensemble articulé. Les efforts de freinage nécessaires dépassent largement ce que permettrait un circuit hydraulique commandé au pied. Les poids lourds, autocars, autobus et leurs remorques utilisent donc l'<strong>air comprimé</strong> comme énergie de freinage : un compresseur entraîné par le moteur produit l'air, des réservoirs le stockent, et la pédale ne fait que commander des valves qui envoient l'air aux cylindres de frein. L'air a un autre avantage décisif : une fuite ne fait pas perdre de liquide, et l'architecture est conçue pour que la perte d'air serre les freins plutôt que de les libérer.</p>\n<p>Les pressions de travail sont de l'ordre de 8 à 12 bar dans les réservoirs selon les véhicules. Les composants sont représentés sur les schémas par des symboles normalisés et repérés par des numéros d'orifices : 1 pour l'alimentation, 2 pour la sortie vers l'utilisation, 3 pour l'échappement, 4 pour la commande.</p>"
      },
      {
       "titre": "Production et traitement de l'air",
       "contenu": "<table>\n<thead><tr><th>Composant</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Compresseur</td><td>Comprime l'air aspiré (souvent après le filtre à air ou le turbocompresseur) ; entraîné en permanence ou débrayable pour économiser l'énergie</td></tr>\n<tr><td>Régulateur de pression</td><td>Met le compresseur à vide ou à l'échappement lorsque la pression de coupure est atteinte, le remet en charge à la pression d'enclenchement</td></tr>\n<tr><td>Dessiccateur (sécheur d'air)</td><td>Retient l'humidité et l'huile grâce à une cartouche déshydratante, régénérée par un flux d'air sec inverse à chaque coupure</td></tr>\n<tr><td>Valve de protection à quatre circuits</td><td>Répartit l'air entre les circuits (frein avant, frein arrière, remorque et stationnement, auxiliaires) et isole un circuit défaillant pour préserver les autres</td></tr>\n<tr><td>Réservoirs</td><td>Stockent l'air de chaque circuit, munis de purgeurs</td></tr>\n</tbody>\n</table>\n<p>Sur les véhicules récents, régulateur, dessiccateur et valve de protection sont réunis dans une <strong>unité de traitement d'air électronique</strong> pilotée par un calculateur, qui optimise les phases de compression et de régénération et transmet les pressions et défauts sur le réseau.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> de l'eau qui s'écoule en quantité à la purge des réservoirs signale une cartouche de dessiccateur saturée. Son remplacement à l'échéance prescrite évite la corrosion des valves, le gel en hiver et les défaillances de freinage.</div>"
      },
      {
       "titre": "Les circuits et la commande",
       "contenu": "<p>Le <strong>robinet de frein</strong> (ou valve de frein de service), actionné par la pédale, comporte deux parties indépendantes qui commandent les circuits avant et arrière à une pression proportionnelle à l'enfoncement. La pression de freinage arrière est adaptée à la charge par un <strong>correcteur de freinage</strong> mécanique (relié à la suspension) ou, sur les véhicules à freinage électronique, par le calculateur à partir de la pression de suspension pneumatique. Des <strong>valves relais</strong> placées près des essieux reçoivent la pression de commande et alimentent rapidement les cylindres à partir d'un réservoir proche, ce qui réduit le temps de réponse.</p>\n<p>On distingue trois fonctions réglementaires : le <strong>freinage de service</strong> (pédale), le <strong>freinage de secours</strong> (capacité de freiner en cas de défaillance d'un circuit, souvent assurée par l'autre circuit ou par la commande progressive du frein de stationnement) et le <strong>freinage de stationnement</strong> (maintien à l'arrêt, assuré mécaniquement par des ressorts).</p>"
      },
      {
       "titre": "Cylindres à diaphragme et cylindres à ressort",
       "contenu": "<p>Les freins (à tambours ou à disques) sont actionnés par des <strong>cylindres de frein</strong>. Le cylindre à <strong>diaphragme</strong> pousse une tige lorsque de l'air entre ; l'effort est égal à la pression multipliée par la surface utile du diaphragme. Les essieux qui assurent le stationnement sont équipés de <strong>cylindres combinés</strong> : une partie à diaphragme pour le frein de service et une partie à <strong>ressort accumulateur</strong>. Le ressort serre le frein en permanence ; l'air comprimé le maintient comprimé pour libérer le frein. Lorsque le conducteur serre le frein de stationnement, la valve vide l'air de la chambre à ressort, qui serre les freins. En cas de perte d'air, les freins se serrent automatiquement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'effort d'un cylindre à diaphragme.<br>Données : cylindre de type 24, c'est-à-dire surface utile de 24 pouces carrés ; pression de freinage 6 bar.<br>1. Conversion : 1 pouce carré ≈ 6,45 cm<sup>2</sup>, donc S ≈ 24 × 6,45 ≈ 155 cm<sup>2</sup> = 0,0155 m<sup>2</sup>.<br>2. Pression : 6 bar = 6 × 10<sup>5</sup> Pa.<br>3. Effort : F = p × S = 6 × 10<sup>5</sup> × 0,0155 ≈ 9 300 N.<br>4. Cet effort est ensuite multiplié par le levier du régleur de frein (sur tambours) ou par le mécanisme de l'étrier (sur disques).</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le ressort d'un cylindre combiné stocke une énergie considérable. Avant toute dépose, il doit être mécaniquement comprimé et bloqué à l'aide de la vis de desserrage manuel (vis de sécurité) selon la méthode. On ne démonte jamais le corps d'un cylindre à ressort : il se remplace complet. Un véhicule dont les freins à ressort ont été desserrés mécaniquement est immobilisé par des cales.</div>"
      },
      {
       "titre": "Le freinage électronique (EBS) et l'ABS",
       "contenu": "<p>Le <strong>freinage à commande électronique</strong> (EBS, <em>Electronic Braking System</em>) remplace la commande pneumatique des valves par une commande électrique : le robinet de frein comporte des capteurs de course, le calculateur calcule la pression nécessaire pour chaque essieu et pilote des <strong>modulateurs</strong> électropneumatiques. La commande pneumatique classique est conservée en secours. L'EBS intègre l'antiblocage, l'antipatinage, la répartition selon la charge, l'harmonisation entre tracteur et remorque, le contrôle de stabilité et l'aide au freinage d'urgence automatique, obligatoire sur les véhicules lourds neufs.</p>\n<p>Les remorques possèdent leur propre système de freinage électronique, alimenté et informé par le tracteur via une prise normalisée.</p>"
      },
      {
       "titre": "Ralentisseurs et frein moteur",
       "contenu": "<p>Dans les longues descentes, les freins à friction surchaufferaient et perdraient leur efficacité. Les véhicules lourds disposent donc de dispositifs d'<strong>endurance</strong> :</p>\n<ul>\n<li>le <strong>frein moteur</strong> (volet à l'échappement, frein sur soupapes de décompression), qui augmente le couple résistant du moteur ;</li>\n<li>le <strong>ralentisseur hydraulique</strong> (intarder), monté sur la boîte, où un rotor brasse de l'huile ; la chaleur est évacuée par le circuit de refroidissement ;</li>\n<li>le <strong>ralentisseur électromagnétique</strong>, où des disques tournent dans un champ magnétique créé par des bobines (courants de Foucault) ;</li>\n<li>sur les véhicules électriques, la récupération par la machine de traction.</li>\n</ul>\n<p>Ces dispositifs sont commandés par une manette ou intégrés à la pédale et au régulateur de vitesse. Leur défaillance se traduit par une sollicitation excessive des freins de service, visible par l'usure et le bleuissement des surfaces de friction.</p>"
      },
      {
       "titre": "Contrôles et maintenance du circuit",
       "contenu": "<p>Les contrôles s'appuient sur des <strong>prises de pression</strong> (raccords de contrôle) réparties sur le circuit et sur un manomètre ou un appareil de mesure électronique :</p>\n<table>\n<thead><tr><th>Contrôle</th><th>Méthode</th></tr></thead>\n<tbody>\n<tr><td>Pressions d'enclenchement et de coupure du régulateur</td><td>Lecture au manomètre ou à l'outil de diagnostic pendant le remplissage et la consommation</td></tr>\n<tr><td>Temps de remplissage</td><td>Durée pour passer de 0 à la pression de fonctionnement au régime prescrit ; un temps trop long signale un compresseur usé ou une fuite</td></tr>\n<tr><td>Étanchéité</td><td>Chute de pression sur une durée définie, moteur arrêté, freins desserrés puis freins serrés ; recherche des fuites au produit moussant ou au détecteur à ultrasons</td></tr>\n<tr><td>Pressions de freinage</td><td>Pression aux cylindres pour une commande donnée, comparée aux valeurs de la plaque de réglage du freinage</td></tr>\n<tr><td>Course des tiges et régleurs</td><td>Contrôle de la course des tiges de cylindre sur freins à tambours ; les régleurs automatiques doivent rattraper le jeu</td></tr>\n<tr><td>Efficacité</td><td>Banc de freinage à rouleaux avec mesure des forces par roue et déséquilibres</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la plaque de réglage du freinage, apposée dans la cabine ou sur le châssis, donne les pressions de référence selon la charge. Toute intervention qui modifie le freinage est suivie d'un contrôle de ces valeurs.</div>"
      },
      {
       "titre": "Sécurité spécifique aux interventions",
       "contenu": "<p>Avant toute intervention, on cale les roues, on vidange l'air des circuits concernés, on bloque les cylindres à ressort si nécessaire, et l'on ne déconnecte jamais une conduite sous pression : un raccord qui se libère peut fouetter violemment. Les conduites plastiques se coupent à angle droit avec l'outil adapté et se raccordent avec des raccords neufs, à la longueur et au rayon de courbure prévus, à distance des sources de chaleur. Après intervention, on vérifie l'étanchéité, on purge les réservoirs et on réalise un essai de freinage à faible vitesse avant tout essai routier.</p>"
      }
     ],
     "points_cles": [
      "L'air comprimé fournit l'énergie de freinage ; la pédale ne fait que commander des valves",
      "Le dessiccateur sèche l'air ; une purge humide signale une cartouche saturée",
      "La valve de protection isole un circuit défaillant pour préserver les autres",
      "Effort d'un cylindre = pression × surface utile du diaphragme",
      "Le cylindre à ressort serre le frein par manque d'air : sécurité en cas de fuite",
      "Un cylindre à ressort se désarme mécaniquement avant dépose et ne se démonte jamais",
      "L'EBS pilote les pressions électroniquement, avec secours pneumatique",
      "Ralentisseurs et frein moteur préservent les freins dans les longues descentes"
     ],
     "lexique": [
      {
       "terme": "Dessiccateur",
       "def": "Sécheur d'air qui retient l'humidité et l'huile avant stockage dans les réservoirs."
      },
      {
       "terme": "Régulateur de pression",
       "def": "Valve qui met le compresseur en charge ou à vide selon la pression des réservoirs."
      },
      {
       "terme": "Valve de protection à quatre circuits",
       "def": "Valve qui répartit l'air et isole un circuit en cas de fuite."
      },
      {
       "terme": "Valve relais",
       "def": "Valve qui alimente rapidement les cylindres à partir d'un réservoir proche sur ordre d'une pression de commande."
      },
      {
       "terme": "Cylindre à ressort",
       "def": "Cylindre dont le ressort serre le frein lorsque l'air est évacué."
      },
      {
       "terme": "EBS",
       "def": "Système de freinage à commande électronique des véhicules lourds."
      },
      {
       "terme": "Modulateur",
       "def": "Valve électropneumatique qui règle la pression de freinage d'un essieu ou d'une roue."
      },
      {
       "terme": "Ralentisseur",
       "def": "Dispositif de freinage d'endurance sans friction."
      },
      {
       "terme": "Plaque de réglage du freinage",
       "def": "Plaque indiquant les pressions de référence du freinage selon la charge."
      }
     ]
    },
    {
     "id": "bmv-tr-chaine-cinematique-suspension",
     "titre": "Chaîne cinématique et suspension des véhicules industriels",
     "niveau": "1re-Tle",
     "options": [
      "tr"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire les configurations d'essieux et de chaînes cinématiques des véhicules de transport routier",
      "Expliquer le fonctionnement des boîtes de vitesses robotisées et des ponts moteurs",
      "Décrire le rôle et le fonctionnement d'une prise de force",
      "Expliquer le fonctionnement d'une suspension pneumatique à régulation électronique",
      "Réaliser les contrôles de la chaîne cinématique et de la suspension"
     ],
     "sections": [
      {
       "titre": "Les configurations de véhicules",
       "contenu": "<p>Les véhicules de transport routier sont désignés par une formule qui indique le nombre de roues (en comptant les roues jumelées comme une seule) et le nombre de roues motrices : un porteur 4×2 a quatre roues dont deux motrices, un 6×4 six roues dont quatre motrices, un 6×2 possède souvent un essieu suiveur ou poussé relevable. Les tracteurs routiers sont majoritairement en 4×2 ; les véhicules de chantier en 6×4, 6×6 ou 8×4.</p>\n<p>L'<strong>essieu relevable</strong> se soulève lorsque le véhicule est vide, pour réduire l'usure des pneumatiques et la consommation, et redescend automatiquement lorsque la charge augmente. Un essieu directeur arrière améliore la maniabilité des porteurs longs.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Définition</th></tr></thead>\n<tbody>\n<tr><td>PTAC</td><td>Poids total autorisé en charge du véhicule seul</td></tr>\n<tr><td>PTRA</td><td>Poids total roulant autorisé de l'ensemble véhicule tracteur et remorque</td></tr>\n<tr><td>Charge par essieu</td><td>Charge maximale autorisée sur chaque essieu, fixée par le constructeur et par la réglementation</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Embrayage et boîtes de vitesses",
       "contenu": "<p>Les moteurs des poids lourds délivrent des couples de 2 000 à plus de 3 000 N·m à bas régime. La plage de régime utile est étroite, d'où des boîtes à <strong>12 rapports</strong> ou plus. Elles sont souvent construites avec une boîte principale de quelques rapports associée à un <strong>doubleur de gamme</strong> (train épicycloïdal arrière qui double le nombre de rapports) et à un <strong>relais</strong> (demi-rapports intermédiaires).</p>\n<p>La quasi-totalité des tracteurs routiers récents utilise des <strong>boîtes robotisées</strong> : l'embrayage à sec et la sélection des rapports sont pilotés par des actionneurs pneumatiques ou électropneumatiques commandés par un calculateur, qui choisit le rapport en fonction de la charge, de la pente (parfois anticipée grâce à la cartographie et au GPS) et de la demande du conducteur. Les autobus urbains utilisent plutôt des boîtes automatiques à convertisseur, adaptées aux arrêts fréquents.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> après remplacement d'un embrayage ou d'un actionneur de boîte robotisée, la procédure d'apprentissage à l'outil de diagnostic est indispensable. Un point d'embrayage mal appris provoque des démarrages brutaux, une usure rapide et des messages de défaut.</div>"
      },
      {
       "titre": "Ponts moteurs et réduction",
       "contenu": "<p>Le <strong>pont moteur</strong> transmet le couple aux roues avec une forte démultiplication. On rencontre deux conceptions : le pont à <strong>simple réduction</strong> (couple conique seul, rapport de l'ordre de 2,5 à 4), adapté aux routes, et le pont à <strong>réduction dans les moyeux</strong> (couple conique plus un train épicycloïdal dans chaque moyeu), qui permet un rapport global élevé et une meilleure garde au sol, utilisé sur les véhicules de chantier.</p>\n<p>Les véhicules à deux ponts moteurs (6×4) comportent un <strong>différentiel inter-ponts</strong> qui répartit le couple entre les deux essieux, avec un blocage commandé. Les blocages de différentiels (inter-ponts et inter-roues) ne doivent être enclenchés qu'à basse vitesse et en ligne droite sur sol glissant.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la vitesse d'un tracteur à un régime donné.<br>Données : régime moteur 1 200 tr/min ; rapport de boîte en 12e : 1 (prise directe) ; rapport de pont : 1 / 2,64 ; circonférence de roulement des pneumatiques 3,25 m.<br>1. Vitesse de roue : 1 200 × 1 / 2,64 ≈ 455 tr/min.<br>2. Vitesse : 455 × 3,25 × 60 / 1 000 ≈ 88,7 km/h.<br>3. Interprétation : le moteur tourne dans sa zone de couple maximal et de faible consommation à la vitesse de croisière réglementaire.</div>"
      },
      {
       "titre": "Les prises de force",
       "contenu": "<p>De nombreux véhicules industriels entraînent des équipements : benne basculante (pompe hydraulique), grue de chargement, bras de levage de bennes, pompe de citerne, compresseur de transport de pulvérulents, groupe frigorifique. L'énergie est prélevée par une <strong>prise de force</strong> (PDF), montée sur la boîte de vitesses (entraînée par l'arbre intermédiaire, utilisable véhicule à l'arrêt), sur le moteur (indépendante de l'embrayage) ou sur la transmission.</p>\n<p>La prise de force est engagée par un actionneur pneumatique ou électrique, avec des sécurités : vitesse nulle ou limitée, frein de stationnement serré, régime moteur régulé. Le carrossier-constructeur raccorde son équipement au réseau du véhicule par une interface électronique prévue par le constructeur du châssis.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une prise de force engagée entraîne des organes en rotation (arbres à cardans, pompes) souvent situés sous le châssis. On ne s'approche jamais d'un arbre de prise de force en rotation ; les protecteurs doivent être en place. La consignation de l'équipement s'impose avant toute intervention.</div>"
      },
      {
       "titre": "La suspension pneumatique",
       "contenu": "<p>Les autobus, autocars, tracteurs routiers et la plupart des semi-remorques utilisent une <strong>suspension pneumatique</strong> : les ressorts sont des coussins en élastomère gonflés d'air, alimentés par le circuit auxiliaire. La pression dans les coussins s'adapte à la charge pour conserver une hauteur constante. Les avantages sont un confort constant quelle que soit la charge, la protection des marchandises et de la chaussée, la possibilité de faire varier la hauteur pour l'attelage ou le quai de chargement, et l'information de charge utilisée par le freinage.</p>\n<p>Les systèmes à <strong>régulation électronique</strong> (souvent appelés ECAS) utilisent des capteurs de hauteur reliés aux essieux et un calculateur qui pilote des électrovannes de remplissage et de vidange. Le conducteur peut lever ou abaisser le châssis par une télécommande. Sur les autobus, la fonction d'<strong>agenouillement</strong> abaisse le côté de la porte pour faciliter l'accès.</p>"
      },
      {
       "titre": "Contrôler la suspension pneumatique",
       "contenu": "<p>Les défauts fréquents sont les fuites (coussins craquelés, raccords), les capteurs de hauteur endommagés ou déréglés, les amortisseurs usés. Les contrôles portent sur :</p>\n<ul>\n<li>la recherche de fuites, véhicule à l'arrêt, au produit moussant ;</li>\n<li>la mesure de la hauteur de référence aux points définis par le constructeur, comparée aux valeurs ;</li>\n<li>le calibrage des capteurs de hauteur à l'outil de diagnostic après remplacement ou après réglage ;</li>\n<li>la lecture de la pression des coussins, qui renseigne sur la charge par essieu.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> avant toute intervention sous un véhicule à suspension pneumatique, on le place sur chandelles ou supports adaptés : une vidange accidentelle des coussins abaisse brutalement le châssis de plusieurs centimètres.</div>"
      },
      {
       "titre": "Pneumatiques et roues des véhicules lourds",
       "contenu": "<p>Les pneumatiques de poids lourds sont marqués selon le même principe que ceux des voitures, avec des particularités : double indice de charge (montage simple et jumelé, par exemple 154/150), catégorie d'usage (directeur, moteur, remorque), possibilité de <strong>recreusage</strong> (si le flanc porte la mention correspondante) et de <strong>rechapage</strong>. Les roues jumelées doivent avoir des pneumatiques de même dimension et d'usure comparable, et une pression identique, faute de quoi l'un des deux supporte une charge excessive.</p>\n<p>Le serrage des écrous de roue se fait au couple prescrit, de l'ordre de plusieurs centaines de newtons-mètres, avec un multiplicateur de couple ou une clé calibrée, suivi d'un resserrage après une courte distance. Des indicateurs de desserrage (flèches plastiques) peuvent être posés sur les écrous.</p>"
      },
      {
       "titre": "Diagnostiquer bruits et vibrations de la chaîne cinématique",
       "contenu": "<p>Sur un véhicule lourd, la chaîne cinématique est longue : boîte, ralentisseur, arbres à cardans avec paliers intermédiaires, ponts. Une vibration qui apparaît à une vitesse donnée oriente vers un arbre à cardans déséquilibré, un croisillon usé ou un palier intermédiaire détérioré. Un bruit en charge qui disparaît en décélération oriente vers le couple conique du pont. Le contrôle des jeux se fait véhicule calé, en faisant tourner l'arbre à la main dans les deux sens et en observant les croisillons. On contrôle aussi le niveau et l'état de l'huile des ponts et des moyeux à réduction : des particules métalliques sur le bouchon magnétique signalent une usure interne. Le remontage d'un arbre à cardans respecte les repères de phasage et d'équilibrage.</p>\n<p>Enfin, la chaîne cinématique des véhicules lourds évolue avec l'électrification. Sur les autobus et porteurs électriques, la machine de traction attaque directement un pont moteur ou est intégrée à l'essieu (essieu électrique), ce qui supprime la boîte de vitesses et l'arbre à cardans long. Sur les tracteurs électriques, une boîte à quelques rapports peut subsister pour couvrir à la fois le démarrage à pleine charge en côte et la vitesse de croisière. Les principes de contrôle restent les mêmes : niveaux, jeux, étanchéité, bruits, auxquels s'ajoutent les contrôles électriques liés à la traction.</p>"
      }
     ],
     "points_cles": [
      "La formule 6×4 indique six roues dont quatre motrices",
      "PTAC concerne le véhicule seul, PTRA l'ensemble roulant",
      "Les boîtes robotisées des tracteurs exigent des apprentissages après intervention",
      "Les ponts à réduction dans les moyeux équipent les véhicules de chantier",
      "Les blocages de différentiels ne s'utilisent qu'à basse vitesse sur sol glissant",
      "La prise de force entraîne les équipements ; ses organes en rotation sont dangereux",
      "La suspension pneumatique maintient une hauteur constante et informe le freinage de la charge",
      "Les roues jumelées exigent pneumatiques identiques et pressions égales"
     ],
     "lexique": [
      {
       "terme": "PTAC",
       "def": "Poids total autorisé en charge d'un véhicule."
      },
      {
       "terme": "PTRA",
       "def": "Poids total roulant autorisé d'un ensemble de véhicules."
      },
      {
       "terme": "Essieu relevable",
       "def": "Essieu qui se soulève lorsque la charge est faible."
      },
      {
       "terme": "Doubleur de gamme",
       "def": "Train épicycloïdal qui double le nombre de rapports d'une boîte."
      },
      {
       "terme": "Réduction dans les moyeux",
       "def": "Train épicycloïdal logé dans chaque moyeu pour démultiplier le mouvement."
      },
      {
       "terme": "Différentiel inter-ponts",
       "def": "Différentiel qui répartit le couple entre deux ponts moteurs."
      },
      {
       "terme": "Prise de force",
       "def": "Dispositif qui prélève l'énergie mécanique du véhicule pour entraîner un équipement."
      },
      {
       "terme": "Coussin pneumatique",
       "def": "Ressort de suspension en élastomère gonflé d'air."
      },
      {
       "terme": "Agenouillement",
       "def": "Abaissement d'un côté d'un autobus pour faciliter l'accès des passagers."
      },
      {
       "terme": "Recreusage",
       "def": "Approfondissement des sculptures d'un pneumatique prévu pour cette opération."
      }
     ]
    },
    {
     "id": "bmv-tr-attelage-remorques",
     "titre": "Ensembles articulés : attelage, remorques et liaisons",
     "niveau": "Tle",
     "options": [
      "tr"
     ],
     "duree": 40,
     "objectifs": [
      "Identifier les dispositifs d'attelage des ensembles articulés et des trains routiers",
      "Contrôler une sellette d'attelage et un crochet",
      "Identifier les liaisons pneumatiques et électriques entre tracteur et remorque",
      "Expliquer le freinage de la remorque et son harmonisation avec le tracteur",
      "Réaliser l'entretien et le diagnostic de base d'une semi-remorque"
     ],
     "sections": [
      {
       "titre": "Les types d'ensembles",
       "contenu": "<p>Le transport routier de marchandises utilise principalement deux types d'ensembles. L'<strong>ensemble articulé</strong> associe un <strong>tracteur routier</strong> et une <strong>semi-remorque</strong> : l'avant de la semi-remorque repose sur le tracteur par l'intermédiaire de la <strong>sellette d'attelage</strong>, qui transmet une partie importante de la charge. Le <strong>train routier</strong> associe un porteur et une remorque à timon, attelée par un crochet ou une mâchoire ; la remorque porte toute sa charge sur ses propres essieux. Le transport de voyageurs utilise aussi des autobus articulés, dont l'articulation est intégrée au véhicule.</p>\n<p>La réglementation fixe les dimensions et masses maximales des ensembles (en France, 44 tonnes de PTRA pour un ensemble à cinq essieux ou plus dans le cas général, avec des cas particuliers) ; on se réfère au certificat d'immatriculation et aux plaques du constructeur pour chaque véhicule.</p>\n<p>Les remorques et semi-remorques appartiennent à la catégorie O : O1 et O2 pour les plus légères, O3 et O4 pour les remorques lourdes. Les catégories O3 et O4 doivent être équipées d'un freinage à air comprimé avec antiblocage et, pour la plupart des remorques récentes, d'un freinage électronique.</p>"
      },
      {
       "titre": "La sellette d'attelage",
       "contenu": "<p>La sellette est une plaque d'appui inclinable fixée sur le châssis du tracteur, munie d'une ouverture en V qui guide le <strong>pivot d'attelage</strong> (ou king-pin) de la semi-remorque jusqu'au verrou. Un mécanisme de <strong>verrouillage</strong> à mâchoire ou à crochet emprisonne le pivot ; une poignée et un dispositif de sécurité empêchent l'ouverture involontaire. La position de la sellette sur le châssis (avancée ou reculée) détermine la répartition de charge entre les essieux du tracteur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler une sellette d'attelage lors de l'entretien.<br>1. Nettoyer la plaque et vérifier l'absence de fissures sur la plaque, les supports et les soudures.<br>2. Contrôler l'état de la graisse ou des plaques de glissement sans graissage, selon le modèle.<br>3. Mesurer le jeu du verrouillage avec la jauge de contrôle du fabricant, qui simule un pivot ; régler ou remplacer selon les valeurs.<br>4. Vérifier le fonctionnement de la poignée, du dispositif de sécurité et du capteur d'attelage s'il existe.<br>5. Contrôler le couple de serrage des fixations sur le châssis.<br>6. Contrôler l'usure du pivot de la semi-remorque au calibre prévu, car un pivot usé crée du jeu même avec une sellette neuve.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un dételage involontaire de semi-remorque provoque des accidents très graves. Après tout attelage, le verrouillage se vérifie visuellement et par un essai de traction, frein de la semi-remorque serré. L'atelier ne restitue jamais un tracteur dont la sellette présente un jeu hors tolérance.</div>"
      },
      {
       "titre": "Les liaisons pneumatiques",
       "contenu": "<p>Le tracteur alimente et commande le freinage de la remorque par deux conduites munies de têtes d'accouplement à détrompeur et de couleurs normalisées :</p>\n<table>\n<thead><tr><th>Conduite</th><th>Couleur de la tête</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Conduite d'alimentation (dite automatique)</td><td>Rouge</td><td>Remplit les réservoirs de la remorque en permanence</td></tr>\n<tr><td>Conduite de commande (dite de frein)</td><td>Jaune</td><td>Transmet la pression de commande du freinage de service</td></tr>\n</tbody>\n</table>\n<p>Sur la remorque, une <strong>valve de commande de remorque</strong> (ou valve relais d'urgence) assure la sécurité : si la conduite d'alimentation est rompue ou débranchée, la chute de pression provoque un freinage automatique de la remorque. Une valve de desserrage permet de manœuvrer une remorque dételée, réservoirs pleins.</p>\n<p>Sur le tracteur, la <strong>valve de commande de remorque</strong> du tracteur fournit la pression de commande et protège le tracteur en cas de rupture de la conduite de commande.</p>"
      },
      {
       "titre": "Les liaisons électriques",
       "contenu": "<p>Plusieurs prises normalisées relient le tracteur à la remorque :</p>\n<ul>\n<li>une prise d'<strong>éclairage et signalisation</strong> en 24 V (prise à 15 broches, ou deux prises à 7 broches selon les véhicules) ;</li>\n<li>une prise d'<strong>alimentation et de communication du freinage électronique</strong> (prise normalisée à 7 broches ISO 7638), qui alimente le calculateur ABS ou EBS de la remorque et transporte le réseau CAN de freinage ;</li>\n<li>éventuellement des prises pour les équipements (hayon élévateur, groupe frigorifique, essieu suiveur).</li>\n</ul>\n<p>Le calculateur de la remorque transmet au tracteur ses défauts, qui s'affichent au tableau de bord ; un voyant de freinage remorque allumé impose une vérification avant de prendre la route.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une grande partie des défauts électriques de remorque viennent des prises et des spirales de liaison : broches oxydées, câbles écrasés, connecteurs mal enfichés. Le contrôle visuel et le nettoyage avec un produit adapté résolvent de nombreuses pannes. Un boîtier de test de prise permet de vérifier chaque fonction côté tracteur et côté remorque.</div>"
      },
      {
       "titre": "Le freinage de la remorque et l'harmonisation",
       "contenu": "<p>Un ensemble articulé doit freiner de façon équilibrée : si la remorque freine trop peu, elle pousse le tracteur et peut provoquer une mise en portefeuille ; si elle freine trop, ses garnitures s'usent prématurément et elle tire l'ensemble. L'<strong>harmonisation</strong> du freinage consiste à ajuster la pression transmise à la remorque pour que chaque véhicule assure sa part du freinage. Les systèmes électroniques réalisent une harmonisation automatique à partir des mesures de décélération et des efforts dans l'attelage ; sinon, elle se règle à partir des mesures au banc et de la plaque de réglage.</p>\n<p>Le calculateur de freinage de la remorque gère aussi l'antiblocage roue par roue, la répartition selon la charge (à partir de la pression de suspension), et souvent des fonctions de <strong>stabilité antiretournement</strong> qui freinent la remorque lorsque le risque de basculement en virage est détecté.</p>"
      },
      {
       "titre": "Entretien d'une semi-remorque",
       "contenu": "<p>Une semi-remorque n'a pas de moteur, mais elle comporte des organes de sécurité qui s'entretiennent :</p>\n<table>\n<thead><tr><th>Organe</th><th>Opérations</th></tr></thead>\n<tbody>\n<tr><td>Freins (disques ou tambours)</td><td>Usure, régleurs, cylindres, flexibles, fonctionnement de la valve d'urgence</td></tr>\n<tr><td>Moyeux et roulements</td><td>Jeu, étanchéité, graissage ou unités sans entretien selon les essieux</td></tr>\n<tr><td>Suspension</td><td>Coussins, amortisseurs, bras, silentblocs, hauteur</td></tr>\n<tr><td>Pivot et plateau d'attelage</td><td>Usure du pivot, fixations, graissage</td></tr>\n<tr><td>Béquilles</td><td>Fonctionnement, graissage, fixations</td></tr>\n<tr><td>Signalisation et dispositifs réglementaires</td><td>Feux, catadioptres, bandes réfléchissantes, protections latérales et arrière</td></tr>\n<tr><td>Pneumatiques</td><td>Pressions, usure, dommages, appariement</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les remorques et semi-remorques lourdes sont soumises à un contrôle technique annuel au même titre que les véhicules à moteur. Leur entretien est planifié par le transporteur et tracé.</div>"
      },
      {
       "titre": "Diagnostiquer un défaut de freinage de remorque",
       "contenu": "<p>Prenons un voyant de défaut de freinage remorque allumé au tableau de bord d'un tracteur attelé. La démarche suit la logique des chapitres de diagnostic : lecture des codes du calculateur de la remorque avec l'outil de diagnostic (par la prise du tracteur ou directement sur la remorque), contrôle de l'alimentation de la prise ISO 7638 (tension sous charge), contrôle des capteurs de roue de la remorque, contrôle des modulateurs. Si la remorque est attelée à un autre tracteur sans défaut, on peut séparer la cause entre tracteur et remorque. Les codes de la remorque sont aussi enregistrés dans son propre calculateur avec l'odomètre de la remorque, ce qui aide à dater les défauts.</p>\n<p>Les causes les plus fréquentes, dans l'ordre où on les vérifie, sont : une prise ISO 7638 mal enfichée ou oxydée, un câble spiralé endommagé, un capteur de roue dont l'entrefer a augmenté à cause du jeu de roulement (le capteur est repoussé par la cible, ce qui se corrige en le renfonçant dans sa douille après contrôle du roulement), un connecteur de modulateur corrodé par les projections de sel. Après réparation, on efface les codes, on réalise un essai roulant au-delà de la vitesse à partir de laquelle le calculateur teste les capteurs, puis on vérifie l'extinction du voyant.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un défaut de freinage électronique de remorque laisse en général fonctionner le freinage pneumatique de base, mais sans antiblocage ni stabilité. Le véhicule peut freiner, mais il n'est plus conforme et sa sécurité est réduite : la réparation est prioritaire.</div>"
      }
     ],
     "points_cles": [
      "Ensemble articulé : tracteur et semi-remorque reliés par sellette et pivot",
      "Le jeu de la sellette se contrôle à la jauge et le pivot au calibre",
      "Le verrouillage s'assure visuellement et par un essai de traction",
      "Tête rouge : alimentation ; tête jaune : commande du freinage",
      "Rupture de la conduite d'alimentation : la remorque freine automatiquement",
      "La prise ISO 7638 alimente et relie le freinage électronique de la remorque",
      "L'harmonisation répartit le freinage entre tracteur et remorque",
      "Les remorques lourdes passent un contrôle technique annuel"
     ],
     "lexique": [
      {
       "terme": "Semi-remorque",
       "def": "Remorque dont l'avant repose sur le tracteur par l'intermédiaire de la sellette."
      },
      {
       "terme": "Sellette d'attelage",
       "def": "Dispositif du tracteur qui reçoit et verrouille le pivot de la semi-remorque."
      },
      {
       "terme": "Pivot d'attelage",
       "def": "Axe fixé sous la semi-remorque, verrouillé dans la sellette."
      },
      {
       "terme": "Train routier",
       "def": "Ensemble formé d'un porteur et d'une remorque à timon."
      },
      {
       "terme": "Conduite d'alimentation",
       "def": "Conduite pneumatique à tête rouge qui alimente les réservoirs de la remorque."
      },
      {
       "terme": "Conduite de commande",
       "def": "Conduite pneumatique à tête jaune qui transmet la commande de freinage."
      },
      {
       "terme": "Valve d'urgence de remorque",
       "def": "Valve qui freine la remorque en cas de chute de pression d'alimentation."
      },
      {
       "terme": "Harmonisation",
       "def": "Réglage de la répartition du freinage entre véhicule tracteur et remorque."
      },
      {
       "terme": "Mise en portefeuille",
       "def": "Pliage de l'ensemble articulé lorsque la remorque pousse et fait pivoter le tracteur."
      }
     ]
    },
    {
     "id": "bmv-tr-reglementation-equipements",
     "titre": "Réglementation et équipements réglementaires du transport routier",
     "niveau": "Tle",
     "options": [
      "tr"
     ],
     "duree": 40,
     "objectifs": [
      "Identifier les catégories de véhicules de transport et les documents qui les décrivent",
      "Expliquer le rôle du chronotachygraphe et du limiteur de vitesse et leurs obligations de contrôle",
      "Situer le contrôle technique des véhicules lourds et les points spécifiques contrôlés",
      "Identifier les équipements réglementaires des véhicules de transport de personnes et de marchandises",
      "Organiser la maintenance préventive d'une flotte de véhicules"
     ],
     "sections": [
      {
       "titre": "Les catégories de véhicules",
       "contenu": "<p>La réglementation européenne classe les véhicules en catégories qui déterminent leurs exigences techniques :</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Définition</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>M2</td><td>Transport de personnes, plus de 8 places assises en plus du conducteur, masse maximale jusqu'à 5 t</td><td>Minibus</td></tr>\n<tr><td>M3</td><td>Transport de personnes, plus de 8 places assises en plus du conducteur, masse maximale supérieure à 5 t</td><td>Autobus, autocars</td></tr>\n<tr><td>N2</td><td>Transport de marchandises, masse maximale de plus de 3,5 t à 12 t</td><td>Porteurs de distribution</td></tr>\n<tr><td>N3</td><td>Transport de marchandises, masse maximale supérieure à 12 t</td><td>Porteurs lourds, tracteurs routiers</td></tr>\n<tr><td>O3, O4</td><td>Remorques de masse maximale supérieure à 3,5 t (O3 jusqu'à 10 t, O4 au-delà)</td><td>Semi-remorques, remorques lourdes</td></tr>\n</tbody>\n</table>\n<p>Le <strong>certificat d'immatriculation</strong> indique la catégorie (rubrique J), les masses (F.1, F.2, F.3, G), le nombre de places et d'autres caractéristiques. Les <strong>plaques constructeur</strong> rivées sur le châssis donnent le numéro d'identification et les masses techniques maximales par essieu.</p>"
      },
      {
       "titre": "Le chronotachygraphe",
       "contenu": "<p>Le <strong>chronotachygraphe</strong> enregistre la vitesse, la distance parcourue et les activités du conducteur (conduite, autre travail, disponibilité, repos). Il est obligatoire sur la plupart des véhicules de transport de marchandises de plus de 3,5 t et des véhicules de transport de personnes de plus de 9 places, sous réserve d'exemptions définies. Il permet de contrôler le respect des temps de conduite et de repos fixés par la réglementation sociale européenne.</p>\n<p>Les appareils actuels sont <strong>numériques</strong> : ils fonctionnent avec des cartes à puce (carte conducteur, carte entreprise, carte de contrôle, carte d'atelier). Les générations les plus récentes, dites <strong>intelligentes</strong>, enregistrent aussi automatiquement la position du véhicule par satellite et les passages de frontières, et peuvent être interrogées à distance par les contrôleurs. Le chronotachygraphe reçoit l'information de vitesse d'un <strong>capteur de mouvement</strong> sécurisé monté sur la boîte de vitesses, apparié à l'appareil.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'installation, l'étalonnage et la vérification périodique du chronotachygraphe (au moins tous les deux ans) sont réservés aux ateliers agréés et à leurs techniciens titulaires d'une carte d'atelier. Toute intervention qui coupe l'alimentation de l'appareil ou débranche le capteur de mouvement est enregistrée comme un événement ; toute manipulation frauduleuse (aimant, dispositif de coupure) est un délit lourdement sanctionné.</div>"
      },
      {
       "titre": "Le limiteur de vitesse et l'étalonnage",
       "contenu": "<p>Les véhicules lourds sont équipés d'un <strong>limiteur de vitesse</strong> réglé à une vitesse maximale réglementaire : 90 km/h pour les véhicules de transport de marchandises de catégories N2 et N3, 100 km/h pour les véhicules de transport de personnes de catégories M2 et M3. Le réglage est intégré à la gestion moteur et vérifié par l'atelier agréé ; une plaquette de vérification est apposée dans la cabine.</p>\n<p>L'<strong>étalonnage</strong> du chronotachygraphe repose sur trois grandeurs : le coefficient caractéristique du véhicule (w, nombre d'impulsions du capteur par kilomètre), la constante de l'appareil (k, réglée égale à w) et la circonférence effective des roues (l). Lorsque l'on change la dimension des pneumatiques motrices ou le rapport de pont, la mesure de vitesse et de distance est faussée : un nouvel étalonnage est obligatoire.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> évaluer l'erreur de vitesse due à un changement de pneumatiques non suivi d'étalonnage.<br>Données : circonférence effective enregistrée 3 250 mm ; nouveaux pneumatiques de circonférence effective 3 330 mm ; vitesse affichée 90 km/h.<br>1. Pour un même nombre de tours de roue, la distance réelle est plus grande dans le rapport 3 330 / 3 250 ≈ 1,0246.<br>2. Vitesse réelle : 90 × 1,0246 ≈ 92,2 km/h.<br>3. Conséquence : le véhicule roule au-delà de la vitesse réglementaire sans que l'appareil le détecte, et les distances enregistrées sont sous-estimées d'environ 2,5 %.<br>4. Conclusion : nouvel étalonnage obligatoire par un atelier agréé.</div>"
      },
      {
       "titre": "Le contrôle technique des véhicules lourds",
       "contenu": "<p>Les véhicules lourds de transport de marchandises et de personnes ainsi que les remorques lourdes passent un contrôle technique <strong>annuel</strong> dans des centres agréés spécifiques. Les autocars et autobus font en outre l'objet de visites complémentaires selon les cas. Le contrôle porte sur les mêmes grandes fonctions que pour les voitures, avec des points propres : freinage pneumatique (mesures au banc avec simulation de charge par la pression de suspension, temps de remplissage, étanchéité), attelages, dispositifs de protection latérale et arrière, chronotachygraphe et limiteur (présence et validité des vérifications), émissions polluantes, et pour le transport de personnes les issues de secours et équipements de sécurité.</p>\n<p>Un transporteur prépare ses véhicules avant le passage, souvent avec l'atelier : c'est l'occasion d'une visite préventive complète.</p>"
      },
      {
       "titre": "Équipements réglementaires spécifiques",
       "contenu": "<ul>\n<li><strong>Dispositifs de protection latérale et arrière</strong> (anti-encastrement), dont les dimensions et la résistance sont réglementées.</li>\n<li><strong>Signalisation</strong> : feux de gabarit, catadioptres, marquage à grande visibilité (bandes réfléchissantes) sur les véhicules lourds et remorques, plaques « angles morts » sur les véhicules de plus de 3,5 t en France.</li>\n<li><strong>Rétroviseurs</strong> grand-angle et d'accostage, ou systèmes de caméras qui les remplacent.</li>\n<li>Pour le transport de personnes : issues et marteaux de secours, extincteurs, ceintures de sécurité, <strong>éthylotest antidémarrage</strong> dans les autocars selon la réglementation française, dispositifs d'accessibilité aux personnes à mobilité réduite (rampe, palette, agenouillement).</li>\n<li>Pour le transport de marchandises dangereuses : équipements spécifiques imposés par l'accord européen relatif au transport international des marchandises dangereuses par route (ADR), avec contrôle annuel d'agrément pour certains véhicules.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le titulaire du bac pro est souvent le premier à constater qu'un équipement réglementaire manque ou est endommagé (bande réfléchissante arrachée, protection latérale tordue, marteau de secours absent). Il le note sur l'OR pour que le transporteur régularise, car le véhicule peut être immobilisé lors d'un contrôle routier.</div>"
      },
      {
       "titre": "La maintenance d'une flotte",
       "contenu": "<p>Dans le transport routier, un véhicule immobilisé ne rapporte rien et peut faire perdre un client. Les transporteurs organisent donc une <strong>maintenance préventive</strong> rigoureuse, souvent avec des contrats d'entretien conclus avec les constructeurs ou les ateliers. Les véhicules connectés transmettent leurs données (kilométrage, consommation, codes défaut, usure estimée des freins, état de l'huile) à des plateformes de gestion de flotte, ce qui permet de planifier l'entretien au plus juste et d'anticiper les pannes.</p>\n<table>\n<thead><tr><th>Indicateur de flotte</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Taux de disponibilité</td><td>Part du temps où le véhicule est apte à rouler</td></tr>\n<tr><td>Coût de maintenance au kilomètre</td><td>Somme des coûts d'entretien et réparation rapportée aux kilomètres parcourus</td></tr>\n<tr><td>Consommation moyenne (L/100 km ou kWh/km)</td><td>Révèle aussi des défauts techniques (freins qui frottent, pression des pneumatiques, injection)</td></tr>\n<tr><td>Nombre de pannes sur route</td><td>Mesure l'efficacité de la maintenance préventive</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour un véhicule de transport, l'organisation de l'intervention compte autant que sa qualité : pièces commandées à l'avance, intervention planifiée pendant les temps d'arrêt du véhicule (nuit, week-end), respect strict du délai annoncé.</div>"
      },
      {
       "titre": "Les énergies alternatives dans le transport",
       "contenu": "<p>Le transport routier diversifie ses énergies : biocarburants de type huile végétale hydrotraitée (HVO) compatibles avec certains moteurs diesel selon l'homologation du constructeur, gaz naturel comprimé ou liquéfié (GNC, GNL) et biométhane, électricité pour les autobus urbains et la distribution, hydrogène pour quelques flottes. Chaque énergie impose ses procédures de sécurité : les véhicules au gaz exigent des ateliers adaptés (ventilation, détection, interdiction de points chauds) et des contrôles périodiques des réservoirs ; les véhicules électriques lourds exigent les habilitations électriques et des postes de recharge de forte puissance. Le technicien vérifie toujours l'énergie du véhicule avant de l'accepter dans un atelier.</p>\n<h4>Les obligations de l'atelier qui intervient</h4>\n<p>Intervenir sur un véhicule de transport engage aussi l'atelier. Lorsqu'une intervention touche un élément soumis à vérification réglementaire (chronotachygraphe, limiteur, freinage, éthylotest antidémarrage, équipements ADR), le technicien vérifie si une nouvelle vérification ou un nouvel agrément est nécessaire, et l'indique au client. Il ne remet jamais en circulation un véhicule dont le freinage n'a pas été contrôlé après intervention. Les documents remis au transporteur (facture détaillée, rapports de contrôle, attestations de vérification) sont conservés par celui-ci et peuvent être demandés lors des contrôles routiers ou des audits de son entreprise. La rigueur administrative fait donc partie intégrante de la qualité de service dans cette option.</p>"
      }
     ],
     "points_cles": [
      "Catégories M2, M3 pour les personnes, N2, N3 pour les marchandises, O3, O4 pour les remorques lourdes",
      "Le chronotachygraphe enregistre vitesse, distance et activités du conducteur",
      "Installation, étalonnage et vérification du chronotachygraphe sont réservés aux ateliers agréés",
      "Limiteur de vitesse : 90 km/h pour N2 et N3, 100 km/h pour M2 et M3",
      "Un changement de pneumatiques moteurs ou de rapport de pont impose un nouvel étalonnage",
      "Les véhicules lourds et remorques lourdes passent un contrôle technique annuel",
      "Les équipements réglementaires manquants sont signalés sur l'OR",
      "La maintenance de flotte vise la disponibilité et anticipe les pannes"
     ],
     "lexique": [
      {
       "terme": "Catégorie de véhicule",
       "def": "Classement réglementaire européen qui fixe les exigences techniques d'un véhicule."
      },
      {
       "terme": "Chronotachygraphe",
       "def": "Appareil qui enregistre vitesse, distance et temps d'activité du conducteur."
      },
      {
       "terme": "Carte d'atelier",
       "def": "Carte à puce personnelle qui permet à un technicien agréé d'intervenir sur le chronotachygraphe."
      },
      {
       "terme": "Capteur de mouvement",
       "def": "Capteur sécurisé qui transmet la vitesse au chronotachygraphe."
      },
      {
       "terme": "Limiteur de vitesse",
       "def": "Dispositif qui empêche le véhicule de dépasser la vitesse réglementaire."
      },
      {
       "terme": "Coefficient caractéristique (w)",
       "def": "Nombre d'impulsions émises par le capteur pour un kilomètre parcouru."
      },
      {
       "terme": "Dispositif anti-encastrement",
       "def": "Protection latérale ou arrière qui empêche un véhicule léger de passer sous un véhicule lourd."
      },
      {
       "terme": "ADR",
       "def": "Accord européen relatif au transport international des marchandises dangereuses par route."
      },
      {
       "terme": "Taux de disponibilité",
       "def": "Part du temps pendant laquelle un véhicule est apte à rouler."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 7 — Option motocycles",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bmv-moto-moteurs",
     "titre": "Moteurs de motocycles : architectures et réglages",
     "niveau": "1re-Tle",
     "options": [
      "moto"
     ],
     "duree": 40,
     "objectifs": [
      "Identifier les architectures de moteurs de motocycles et leurs caractéristiques",
      "Expliquer les particularités des moteurs à deux temps et à quatre temps de deux-roues",
      "Contrôler et régler le jeu aux soupapes",
      "Réaliser la synchronisation des corps de papillon",
      "Entretenir les circuits de refroidissement et de lubrification d'un moteur de moto"
     ],
     "sections": [
      {
       "titre": "Des moteurs compacts à haut régime",
       "contenu": "<p>Le moteur d'une moto doit être léger, compact et puissant, car il fait souvent partie de la structure du cadre et sa masse influence directement la maniabilité. Les moteurs de motocycles tournent donc à des régimes élevés : 10 000 à 14 000 tr/min, voire davantage pour certaines sportives, contre 6 000 à 7 000 tr/min environ pour une voiture. La puissance spécifique (puissance rapportée à la cylindrée) est très élevée. Ces régimes imposent des pièces mobiles légères, des soupapes nombreuses (quatre par cylindre en général) et une distribution précise.</p>\n<p>Une particularité importante : sur la plupart des motos, le moteur, l'embrayage et la boîte de vitesses partagent le <strong>même carter et la même huile</strong>. L'huile doit donc convenir à la fois à la lubrification du moteur et au fonctionnement de l'embrayage à bain d'huile, ce qui impose des huiles spécifiques (norme JASO MA ou MA2), sans certains additifs réducteurs de frottement qui feraient patiner l'embrayage.</p>"
      },
      {
       "titre": "Les architectures moteur",
       "contenu": "<table>\n<thead><tr><th>Architecture</th><th>Caractéristiques</th><th>Usages typiques</th></tr></thead>\n<tbody>\n<tr><td>Monocylindre</td><td>Simple, léger, couple à bas régime, vibrations importantes (arbre d'équilibrage fréquent)</td><td>Scooters, trails, motos légères, tout-terrain</td></tr>\n<tr><td>Bicylindre en ligne (parallèle)</td><td>Compact, économique ; calage du vilebrequin variable selon le caractère recherché</td><td>Roadsters et routières de moyenne cylindrée</td></tr>\n<tr><td>Bicylindre en V</td><td>Étroit, couple important, sonorité caractéristique</td><td>Customs, sportives, trails</td></tr>\n<tr><td>Bicylindre à plat (boxer)</td><td>Centre de gravité bas, refroidissement des cylindres exposés</td><td>Routières, trails de certaines marques</td></tr>\n<tr><td>Trois cylindres en ligne</td><td>Compromis entre couple et puissance</td><td>Roadsters, trails</td></tr>\n<tr><td>Quatre cylindres en ligne</td><td>Haut régime, puissance élevée, souplesse</td><td>Sportives, routières</td></tr>\n</tbody>\n</table>\n<p>Le <strong>moteur à deux temps</strong>, qui réalise un cycle complet en un tour de vilebrequin, a presque disparu des motos routières en raison des normes antipollution, mais on le rencontre encore sur des cyclomoteurs anciens et des motos de compétition tout-terrain. Sa lubrification est assurée par de l'huile mélangée à l'essence ou injectée par une pompe ; les transferts et la lumière d'échappement remplacent les soupapes.</p>"
      },
      {
       "titre": "La distribution et le jeu aux soupapes",
       "contenu": "<p>Les moteurs de motos utilisent presque tous une distribution à <strong>deux arbres à cames en tête</strong>, entraînés par chaîne (parfois par engrenages ou courroie). La chaîne de distribution est tendue par un <strong>tendeur</strong> automatique hydraulique ou mécanique. Sur la plupart des moteurs, les soupapes sont actionnées par des poussoirs à pastilles ou par des linguets, et le <strong>jeu aux soupapes</strong> doit être contrôlé périodiquement (tous les 12 000 à 40 000 km selon les modèles). Un jeu trop faible empêche la soupape de se fermer complètement : perte de compression, brûlure de la soupape et de son siège. Un jeu trop grand provoque bruit et usure.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler et régler le jeu aux soupapes sur un moteur à pastilles.<br>1. Moteur froid, déposer les éléments d'accès et le couvre-culasse ; déposer les bougies pour faciliter la rotation.<br>2. Amener le piston du cylindre 1 au point mort haut fin de compression (repères du constructeur sur l'alternateur ou le vilebrequin, cames tournées vers l'extérieur).<br>3. Mesurer le jeu à la jauge d'épaisseur entre came et poussoir pour chaque soupape concernée ; noter les valeurs (par exemple admission prescrite 0,10 à 0,19 mm, échappement 0,20 à 0,29 mm, valeurs indicatives).<br>4. Tourner le moteur dans le sens de rotation pour mesurer les autres cylindres selon l'ordre indiqué.<br>5. Pour une soupape hors tolérance : calculer l'épaisseur de pastille nécessaire. Nouvelle pastille = pastille actuelle + jeu mesuré − jeu visé. Exemple : pastille de 2,10 mm, jeu mesuré 0,07 mm, jeu visé 0,15 mm : 2,10 + 0,07 − 0,15 = 2,02 mm, on choisit la pastille disponible la plus proche dans la tolérance.<br>6. Déposer les arbres à cames selon la méthode (calage), remplacer les pastilles, reposer, vérifier le calage et remesurer tous les jeux.</div>"
      },
      {
       "titre": "Alimentation et synchronisation des papillons",
       "contenu": "<p>Les motos récentes utilisent l'injection électronique indirecte avec un <strong>corps de papillon par cylindre</strong>. Sur un moteur multicylindre, les papillons doivent s'ouvrir de façon parfaitement identique, faute de quoi le ralenti est irrégulier, des vibrations et des à-coups apparaissent à faible ouverture. La <strong>synchronisation</strong> consiste à égaliser les dépressions d'admission des différents cylindres.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> synchroniser les corps de papillon d'un quatre cylindres.<br>1. Moteur à température de fonctionnement, ventilateur en état de marche.<br>2. Brancher le dépressiomètre à quatre colonnes ou électronique sur les prises de dépression de chaque pipe, en retirant les bouchons.<br>3. Régler le régime de ralenti prescrit.<br>4. Le cylindre de référence (souvent un cylindre central, sans vis de réglage) sert de base ; ajuster les vis de synchronisation des autres pour obtenir des dépressions égales, dans la tolérance du constructeur.<br>5. Donner quelques coups d'accélérateur et vérifier que les dépressions reviennent égales.<br>6. Reposer les bouchons, effacer les éventuels codes, réaliser un essai.</div>\n<p>Sur les motos à <strong>accélérateur électronique</strong> (commande des gaz sans câble, dite ride-by-wire), certaines synchronisations se font par une procédure à l'outil de diagnostic.</p>"
      },
      {
       "titre": "Refroidissement et lubrification",
       "contenu": "<p>Les motos sont refroidies par air (ailettes), par air et huile, ou par liquide. Le refroidissement liquide permet une température plus stable et des puissances plus élevées ; il comprend un radiateur souvent compact, un motoventilateur commandé par sonde, un vase d'expansion. Le liquide doit être adapté aux alliages légers du moteur, et les purges sont délicates en raison des points hauts du circuit.</p>\n<p>La lubrification est à <strong>carter humide</strong> (huile dans le carter inférieur) ou à <strong>carter sec</strong> (réservoir séparé, souvent dans le cadre, sur certaines motos tout-terrain et custom). Le contrôle du niveau se fait selon une procédure précise : moto à la verticale sur béquille d'atelier ou tenue droite, après avoir laissé tourner le moteur puis attendu quelques minutes, par hublot ou jauge. Sur béquille latérale, la lecture est fausse.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une huile automobile de type « économie d'énergie » dans un moteur de moto à embrayage à bain d'huile peut provoquer un patinage de l'embrayage. On utilise exclusivement l'huile répondant à la viscosité et à la norme JASO prescrites.</div>"
      },
      {
       "titre": "Échappement, dépollution et bruit",
       "contenu": "<p>Les motos récentes respectent des normes antipollution européennes spécifiques (Euro 5 puis Euro 5+), qui imposent un catalyseur, une ou plusieurs sondes lambda et un diagnostic embarqué. Le système d'échappement comporte souvent une <strong>valve d'échappement</strong> pilotée qui modifie le passage des gaz selon le régime, pour concilier performance et limites de bruit. Le remplacement du silencieux par un modèle non homologué est interdit sur route : le niveau sonore et les émissions doivent rester conformes à l'homologation, et les forces de l'ordre peuvent contrôler le bruit des deux-roues.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les clients demandent fréquemment des échappements « plus sonores » ou la suppression de la valve d'échappement. Le technicien rappelle que seuls les échappements homologués pour le modèle, portant le marquage correspondant, peuvent être montés, et refuse les modifications interdites.</div>"
      },
      {
       "titre": "Contrôler l'état mécanique d'un moteur de moto",
       "contenu": "<p>Les méthodes vues pour les moteurs d'automobiles s'appliquent : compression au compressiomètre (accès souvent difficile aux bougies, sous les radiateurs ou le réservoir), test de fuite, analyse des gaz. Le régime élevé rend les moteurs de motos sensibles aux sur-régimes ; certains calculateurs enregistrent les dépassements, utiles en expertise. Une consommation d'huile élevée sur un moteur sportif peut être normale dans une certaine mesure : le constructeur indique une consommation admissible. Avant de conclure à une usure, on vérifie le mode de contrôle du niveau et les conditions d'utilisation du client.</p>"
      },
      {
       "titre": "Particularités des scooters",
       "contenu": "<p>Les scooters utilisent souvent un moteur monocylindre intégré à un <strong>bras oscillant moteur</strong> : le moteur, la transmission par variateur et la roue arrière forment un ensemble qui pivote avec la suspension. Ce montage réduit l'encombrement mais augmente la masse non suspendue. L'entretien porte sur la vidange du moteur et du réducteur (huile séparée), le filtre à air du moteur et celui du carter de transmission, la courroie et les galets du variateur, les bougies et le jeu aux soupapes. Les petits scooters de 50 cm<sup>3</sup> sont des cyclomoteurs bridés réglementairement à 45 km/h ; toute modification de ce bridage est interdite.</p>"
      }
     ],
     "points_cles": [
      "Les moteurs de motos tournent à haut régime et ont une puissance spécifique élevée",
      "Moteur, embrayage et boîte partagent souvent la même huile : norme JASO MA exigée",
      "Monocylindre, bicylindre parallèle, en V, à plat, trois et quatre cylindres ont des caractères distincts",
      "Le jeu aux soupapes se contrôle moteur froid, au point mort haut fin de compression",
      "Nouvelle pastille = pastille actuelle + jeu mesuré − jeu visé",
      "La synchronisation égalise les dépressions d'admission des cylindres",
      "Le niveau d'huile se lit moto verticale, jamais sur béquille latérale",
      "Seuls les échappements homologués pour le modèle peuvent être montés"
     ],
     "lexique": [
      {
       "terme": "Puissance spécifique",
       "def": "Puissance d'un moteur rapportée à sa cylindrée, en kW par litre."
      },
      {
       "terme": "JASO MA",
       "def": "Norme d'huile pour moteurs de motos à embrayage à bain d'huile."
      },
      {
       "terme": "Pastille de réglage",
       "def": "Cale calibrée placée sur le poussoir pour régler le jeu aux soupapes."
      },
      {
       "terme": "Point mort haut fin de compression",
       "def": "Position du piston en haut de course, soupapes fermées, avant l'explosion."
      },
      {
       "terme": "Synchronisation",
       "def": "Réglage qui égalise l'ouverture des papillons des différents cylindres."
      },
      {
       "terme": "Ride-by-wire",
       "def": "Commande électronique des gaz sans câble entre poignée et papillons."
      },
      {
       "terme": "Carter sec",
       "def": "Lubrification avec réservoir d'huile séparé du carter moteur."
      },
      {
       "terme": "Valve d'échappement",
       "def": "Volet piloté qui modifie le passage des gaz dans l'échappement selon le régime."
      },
      {
       "terme": "Bras oscillant moteur",
       "def": "Ensemble moteur et transmission de scooter qui pivote avec la suspension arrière."
      }
     ]
    },
    {
     "id": "bmv-moto-transmissions",
     "titre": "Transmissions des motocycles",
     "niveau": "1re-Tle",
     "options": [
      "moto"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire le fonctionnement d'un embrayage multidisque à bain d'huile et de ses dispositifs annexes",
      "Expliquer le fonctionnement d'une boîte de vitesses séquentielle à crabots",
      "Comparer les transmissions secondaires par chaîne, courroie et cardan",
      "Calculer un rapport de transmission secondaire et ses effets",
      "Entretenir et régler une transmission secondaire et un variateur de scooter"
     ],
     "sections": [
      {
       "titre": "La chaîne de transmission d'une moto",
       "contenu": "<p>La transmission d'une moto comporte trois étages de démultiplication : la <strong>transmission primaire</strong> (du vilebrequin à l'embrayage, par engrenages ou chaîne), la <strong>boîte de vitesses</strong>, et la <strong>transmission secondaire</strong> (de la sortie de boîte à la roue arrière). Le rapport global est le produit des trois rapports. Il n'y a pas de différentiel : une seule roue est motrice.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la vitesse d'une moto en 6e.<br>Données : primaire 1 / 1,85 ; 6e : 1 / 0,96 ; secondaire : pignon de sortie 16 dents, couronne 44 dents ; régime 8 000 tr/min ; circonférence de roulement du pneumatique arrière 1,98 m.<br>1. Rapport secondaire : 16 / 44 ≈ 0,364.<br>2. Rapport global : (1 / 1,85) × (1 / 0,96) × 0,364 ≈ 0,540 × 1,042 × 0,364 ≈ 0,205.<br>3. Vitesse de roue : 8 000 × 0,205 ≈ 1 640 tr/min.<br>4. Vitesse : 1 640 × 1,98 × 60 / 1 000 ≈ 195 km/h.</div>"
      },
      {
       "titre": "L'embrayage multidisque à bain d'huile",
       "contenu": "<p>La plupart des motos utilisent un <strong>embrayage multidisque</strong> fonctionnant dans l'huile moteur. Il comporte une cloche liée à la transmission primaire, des <strong>disques garnis</strong> entraînés par la cloche, des <strong>disques lisses</strong> en acier entraînés par la noix (moyeu) liée à l'arbre primaire de boîte, et des ressorts (hélicoïdaux ou à diaphragme) qui serrent l'empilage. Le grand nombre de faces de frottement permet de transmettre un couple élevé avec un faible diamètre. La commande se fait par câble ou par circuit hydraulique.</p>\n<p>Deux dispositifs se sont généralisés :</p>\n<ul>\n<li>l'embrayage <strong>anti-dribble</strong> (ou à glissement limité) : en rétrogradage brutal, le couple inverse fait glisser des rampes qui desserrent partiellement l'embrayage, ce qui évite le blocage ou le dribble de la roue arrière ;</li>\n<li>l'embrayage <strong>assisté</strong> : des rampes augmentent l'effort presseur en accélération, ce qui permet d'utiliser des ressorts plus souples et donc un levier plus doux.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler un embrayage multidisque.<br>1. Mesurer l'épaisseur des disques garnis au pied à coulisse et comparer à la limite d'usure.<br>2. Contrôler la planéité des disques lisses sur un marbre avec une jauge d'épaisseur (voile maximal prescrit).<br>3. Mesurer la longueur libre des ressorts et comparer à la longueur minimale.<br>4. Examiner les encoches de la cloche et les cannelures de la noix : des marques d'escalier empêchent les disques de coulisser et provoquent un débrayage difficile.<br>5. Au remontage, huiler les disques garnis avec l'huile moteur prescrite et respecter l'ordre d'empilage.</div>"
      },
      {
       "titre": "La boîte de vitesses séquentielle",
       "contenu": "<p>La boîte de moto est une boîte à <strong>pignons toujours en prise</strong> et à <strong>crabots</strong>, sans synchroniseurs. Les rapports se sélectionnent dans un ordre imposé (séquentiel) par le sélecteur au pied : un tambour de sélection à rainures déplace des fourchettes qui font coulisser des pignons baladeurs. Les crabots (dents latérales) des pignons s'engagent les uns dans les autres. Le schéma de sélection courant est : première en bas, point mort, puis les rapports supérieurs vers le haut.</p>\n<p>De nombreuses motos sont équipées d'un <strong>shifter</strong> (assistant de changement de rapport) qui coupe brièvement l'injection ou l'allumage pour permettre de monter, voire de descendre les rapports sans débrayer. Un capteur de position du tambour indique le rapport engagé au calculateur et au combiné.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> des sauts de vitesse (le rapport se désengage seul en charge) signalent des crabots arrondis ou une fourchette usée. Continuer à rouler aggrave rapidement l'usure et peut provoquer une casse. Le diagnostic nécessite l'ouverture du carter.</div>"
      },
      {
       "titre": "Transmissions secondaires : chaîne, courroie, cardan",
       "contenu": "<table>\n<thead><tr><th>Type</th><th>Avantages</th><th>Inconvénients</th><th>Entretien</th></tr></thead>\n<tbody>\n<tr><td>Chaîne à joints toriques ou à X</td><td>Rendement élevé, légère, rapport facile à modifier</td><td>Usure, entretien fréquent, projections</td><td>Nettoyage, graissage, réglage de tension, remplacement du kit</td></tr>\n<tr><td>Courroie crantée</td><td>Propre, silencieuse, peu d'entretien</td><td>Sensible aux cailloux, largeur importante</td><td>Contrôle de tension et d'état</td></tr>\n<tr><td>Cardan</td><td>Quasi sans entretien, durable</td><td>Masse, effet de réaction sur la suspension à l'accélération, coût</td><td>Vidange du couple conique, graissage des cannelures selon modèle</td></tr>\n</tbody>\n</table>\n<p>Une chaîne s'allonge par usure des articulations ; on la remplace toujours avec le pignon et la couronne (le <strong>kit chaîne</strong>), car une chaîne neuve sur des dents usées s'use très vite et inversement.</p>\n<p>Les chaînes modernes à joints toriques (ou à joints en X) emprisonnent la graisse dans les articulations ; l'entretien consiste à nettoyer l'extérieur avec un produit compatible avec les joints (jamais de solvant agressif ni de nettoyeur haute pression dirigé sur la chaîne) puis à lubrifier, de préférence chaîne chaude, après un roulage sous la pluie et à intervalles réguliers. Une chaîne neuve se ferme soit par une attache rapide (clip, réservée en général aux petites cylindrées), soit par un maillon à <strong>river</strong> avec l'outil adapté, en contrôlant l'écrasement des têtes de rivet à la cote prescrite. Un maillon mal riveté est une cause de rupture de chaîne, avec risque de blocage de la roue arrière et de chute.</p>\n<p>Le cardan, de son côté, s'accompagne d'un couple conique en sortie, logé dans un carter rempli d'huile, et d'un ou deux joints de cardan protégés par un soufflet. Sa maintenance se limite à la vidange périodique et au contrôle des jeux et de l'étanchéité, mais une fuite au joint de sortie de couple conique peut souiller le pneumatique et le frein arrière : c'est alors un défaut de sécurité.</p>"
      },
      {
       "titre": "Régler la tension de chaîne",
       "contenu": "<p>Une chaîne trop tendue surcharge les roulements de sortie de boîte et de roue et s'use vite ; trop détendue, elle claque, peut sauter des dents et endommager le carter. La tension se mesure par la <strong>flèche</strong> à mi-distance entre pignon et couronne, sur le brin inférieur, dans les conditions prescrites (moto sur béquille latérale ou sur béquille d'atelier, sans pilote, selon le constructeur).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> régler la tension de chaîne.<br>1. Placer la moto dans la position prescrite et faire tourner la roue pour trouver le point le plus tendu de la chaîne (une chaîne usée s'allonge de façon irrégulière).<br>2. Mesurer la flèche totale au réglet et comparer à la valeur prescrite (souvent de l'ordre de 25 à 40 mm selon les modèles).<br>3. Desserrer l'écrou d'axe de roue, agir sur les tendeurs de façon identique des deux côtés en s'aidant des repères gravés pour conserver l'alignement de la roue.<br>4. Serrer l'axe au couple prescrit, revérifier la flèche et l'alignement.<br>5. Vérifier la limite d'usure : si les repères du tendeur atteignent la zone rouge, ou si la longueur mesurée sur un nombre défini de maillons dépasse la limite, remplacer le kit.</div>"
      },
      {
       "titre": "Le variateur des scooters",
       "contenu": "<p>Les scooters utilisent une <strong>transmission à variation continue</strong> par courroie trapézoïdale entre deux poulies à flasques mobiles. La poulie menante (variateur) contient des <strong>galets</strong> qui, sous l'effet de la force centrifuge, écartent vers l'extérieur et rapprochent les flasques : la courroie monte sur un plus grand diamètre quand le régime augmente. La poulie menée est rappelée par un ressort de contre-poulie et comprend un <strong>embrayage centrifuge</strong> qui accouple la roue au-dessus d'un certain régime. Le rapport varie ainsi en continu sans intervention du pilote.</p>\n<p>L'entretien comprend le remplacement de la courroie et des galets à échéance, le contrôle des glissières, de la cloche d'embrayage et des garnitures. Des galets usés (méplats) ou une courroie trop étroite provoquent une baisse des performances et des à-coups au démarrage.</p>"
      },
      {
       "titre": "Effet d'une modification de rapport secondaire",
       "contenu": "<p>Modifier le nombre de dents du pignon ou de la couronne change le rapport secondaire. Un pignon plus petit ou une couronne plus grande donnent des accélérations plus vives mais un régime plus élevé à vitesse égale. Une telle modification fausse l'indication du compteur si le capteur de vitesse est placé sur la boîte, et elle peut modifier les émissions sonores et polluantes mesurées à l'homologation : sur une moto homologuée, elle n'est admise que dans le cadre des préconisations du constructeur. Le technicien en informe le client avant toute intervention et note la configuration montée sur l'OR.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque dent compte : passer de 16 à 15 dents au pignon modifie le rapport secondaire d'environ 6 %, ce qui fait varier d'autant le régime à vitesse donnée et l'indication de vitesse si le capteur est en sortie de boîte.</div>"
      }
     ],
     "points_cles": [
      "Transmission primaire, boîte et secondaire : le rapport global est leur produit",
      "L'embrayage multidisque fonctionne dans l'huile moteur",
      "L'anti-dribble limite le blocage de la roue arrière au rétrogradage",
      "La boîte de moto est séquentielle, à crabots, sans synchroniseurs",
      "Une chaîne se remplace toujours avec pignon et couronne",
      "La flèche de chaîne se mesure au point le plus tendu, dans la position prescrite",
      "Le variateur de scooter fait varier le rapport grâce aux galets centrifuges",
      "Modifier le rapport secondaire change régime, accélérations et indication de vitesse"
     ],
     "lexique": [
      {
       "terme": "Transmission primaire",
       "def": "Liaison entre le vilebrequin et l'embrayage d'une moto."
      },
      {
       "terme": "Transmission secondaire",
       "def": "Liaison entre la sortie de boîte et la roue arrière : chaîne, courroie ou cardan."
      },
      {
       "terme": "Embrayage multidisque",
       "def": "Embrayage à empilage de disques garnis et lisses, souvent à bain d'huile."
      },
      {
       "terme": "Anti-dribble",
       "def": "Dispositif d'embrayage qui limite le couple inverse lors des rétrogradages."
      },
      {
       "terme": "Crabot",
       "def": "Dent latérale qui accouple un pignon baladeur à un pignon voisin."
      },
      {
       "terme": "Tambour de sélection",
       "def": "Tambour rainuré qui déplace les fourchettes de la boîte séquentielle."
      },
      {
       "terme": "Shifter",
       "def": "Assistant qui permet de changer de rapport sans débrayer."
      },
      {
       "terme": "Kit chaîne",
       "def": "Ensemble chaîne, pignon et couronne remplacés ensemble."
      },
      {
       "terme": "Variateur",
       "def": "Poulie à flasques mobiles qui fait varier en continu le rapport d'un scooter."
      },
      {
       "terme": "Flèche de chaîne",
       "def": "Débattement vertical de la chaîne à mi-distance entre pignon et couronne."
      }
     ]
    },
    {
     "id": "bmv-moto-partie-cycle",
     "titre": "Partie cycle des motocycles : cadre, suspensions, freinage et pneumatiques",
     "niveau": "1re-Tle",
     "options": [
      "moto"
     ],
     "duree": 45,
     "objectifs": [
      "Décrire les types de cadres et la géométrie de direction d'une moto",
      "Expliquer le fonctionnement des fourches et amortisseurs et le rôle de chaque réglage",
      "Réaliser un réglage de base de suspension à partir de l'enfoncement statique",
      "Décrire les systèmes de freinage des motos, ABS et freinage couplé",
      "Contrôler les pneumatiques et les liaisons de la partie cycle"
     ],
     "sections": [
      {
       "titre": "La partie cycle et la stabilité d'une moto",
       "contenu": "<p>On appelle <strong>partie cycle</strong> l'ensemble cadre, direction, suspensions, roues, pneumatiques et freins. Une moto est un véhicule instable à l'arrêt qui se stabilise en mouvement grâce à l'effet gyroscopique des roues et à la géométrie de la direction ; elle s'incline en virage et la surface de contact de chaque pneumatique ne dépasse pas celle d'une carte de crédit. La moindre anomalie de la partie cycle (jeu de direction, pression des pneumatiques, réglage de suspension) se ressent directement dans le comportement et la sécurité du pilote.</p>"
      },
      {
       "titre": "Cadres et géométrie de direction",
       "contenu": "<p>Le <strong>cadre</strong> relie la colonne de direction au pivot du bras oscillant. Les principaux types sont le cadre <strong>double berceau</strong> en tubes d'acier, le cadre <strong>périmétrique</strong> en aluminium (deux longerons qui entourent le moteur), le cadre <strong>treillis</strong> en tubes d'acier soudés et les cadres où le moteur est <strong>porteur</strong>. La géométrie de direction se caractérise par :</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Définition</th><th>Effet</th></tr></thead>\n<tbody>\n<tr><td>Angle de chasse</td><td>Inclinaison de l'axe de direction par rapport à la verticale (souvent 23 à 30°)</td><td>Faible : direction vive ; important : stabilité</td></tr>\n<tr><td>Chasse</td><td>Distance au sol entre le point où l'axe de direction coupe le sol et le centre de contact du pneumatique avant (souvent 90 à 120 mm)</td><td>Effet de rappel en ligne droite, stabilité</td></tr>\n<tr><td>Empattement</td><td>Distance entre les axes de roue</td><td>Long : stabilité ; court : maniabilité</td></tr>\n</tbody>\n</table>\n<p>Ces valeurs dépendent de l'assiette : une fourche qui s'enfonce au freinage réduit l'angle de chasse et la chasse, rendant la direction plus vive. Un réglage de suspension ou une hauteur de fourche dans les tés modifie donc le comportement. Après une chute, le contrôle du cadre (alignement des roues, déformation de la colonne) peut nécessiter un banc de mesure.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un jeu dans les roulements de direction provoque un guidonnage (oscillation du guidon) qui peut entraîner une chute. On le contrôle roue avant décollée, en tirant la fourche d'avant en arrière, et l'on vérifie aussi que la direction tourne sans point dur.</div>"
      },
      {
       "titre": "Fourches et amortisseurs",
       "contenu": "<p>La <strong>fourche télescopique</strong> comporte deux tubes qui coulissent dans des fourreaux, avec ressort et cartouche d'amortissement hydraulique. Elle est dite <strong>inversée</strong> lorsque les fourreaux sont en haut et les tubes en bas, ce qui augmente la rigidité. À l'arrière, un <strong>monoamortisseur</strong> ou deux combinés ressort-amortisseur relient le bras oscillant au cadre, souvent par l'intermédiaire de biellettes qui rendent l'amortissement progressif.</p>\n<p>Les réglages possibles selon les modèles sont :</p>\n<ul>\n<li>la <strong>précharge</strong> du ressort, qui modifie l'assiette (hauteur) sans changer la raideur ;</li>\n<li>l'amortissement en <strong>compression</strong>, qui freine l'enfoncement ;</li>\n<li>l'amortissement en <strong>détente</strong>, qui freine le retour ;</li>\n<li>sur les motos haut de gamme, des suspensions <strong>pilotées électroniquement</strong>, qui ajustent l'amortissement en continu et parfois la précharge selon la charge.</li>\n</ul>\n<p>L'entretien comprend la vidange de l'huile de fourche à échéance (niveau ou volume prescrit), le remplacement des joints spi lorsqu'ils fuient (l'huile peut souiller le disque et les plaquettes avant) et le contrôle de l'amortisseur arrière.</p>"
      },
      {
       "titre": "Régler l'enfoncement statique",
       "contenu": "<p>Le premier réglage d'une suspension est celui de l'<strong>enfoncement</strong> (en anglais <em>sag</em>), qui place la suspension au bon point de sa course selon le poids du pilote et de son équipement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mesurer et régler l'enfoncement arrière.<br>1. Moto sur béquille d'atelier, roue arrière décollée : mesurer la cote L1 entre l'axe de roue et un repère fixe sur la selle ou le cadre, à la verticale.<br>2. Moto posée sur ses roues, sans pilote : mesurer L2. Enfoncement à vide = L1 − L2.<br>3. Pilote équipé en position de conduite, pieds sur les repose-pieds, un aide maintenant la moto droite : mesurer L3. Enfoncement avec pilote = L1 − L3.<br>4. Exemple : L1 = 620 mm, L3 = 585 mm, enfoncement = 35 mm. Pour une course totale de 130 mm, l'enfoncement visé est souvent d'environ un quart à un tiers de la course, selon les préconisations : ici entre 33 et 43 mm, réglage conforme.<br>5. Si l'enfoncement est trop grand, augmenter la précharge ; s'il reste hors plage avec précharge maximale ou minimale, le ressort n'est pas adapté au poids du pilote.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de modifier les réglages, on note les réglages d'origine (nombre de clics ou de tours depuis la position fermée) et ceux trouvés à la réception. Beaucoup de réclamations de comportement viennent d'une précharge oubliée après un voyage en duo ou de réglages modifiés sans méthode.</div>"
      },
      {
       "titre": "Le freinage des motos",
       "contenu": "<p>Le freinage d'une moto est principalement assuré par l'<strong>avant</strong> : en freinage appuyé, le transfert de charge vers l'avant peut délester presque complètement la roue arrière. Les motos utilisent des disques de grand diamètre, souvent doubles à l'avant, et des étriers à plusieurs pistons, fréquemment à fixation <strong>radiale</strong> pour plus de rigidité. Les disques sont souvent <strong>flottants</strong> (piste de freinage reliée au moyeu par des pions) pour autoriser la dilatation.</p>\n<p>L'<strong>ABS</strong> est obligatoire sur les motos neuves de plus de 125 cm<sup>3</sup> dans l'Union européenne ; les plus petites cylindrées doivent disposer soit de l'ABS, soit d'un freinage <strong>combiné</strong> (une commande agit sur les deux roues). Les systèmes récents prennent en compte l'angle d'inclinaison mesuré par une <strong>centrale inertielle</strong> pour adapter le freinage en courbe. Un capteur de soulèvement de la roue arrière limite le risque de basculement vers l'avant (stoppie).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le liquide de frein d'une moto se remplace selon l'échéance du constructeur ; les maîtres-cylindres au guidon contiennent peu de liquide et chauffent beaucoup, ce qui rend l'absorption d'humidité particulièrement pénalisante. La purge d'un système ABS peut nécessiter l'outil de diagnostic.</div>"
      },
      {
       "titre": "Pneumatiques de moto",
       "contenu": "<p>Les pneumatiques de moto ont un profil arrondi qui permet l'inclinaison. Leur marquage suit le même principe que pour les voitures, par exemple 180/55 ZR17 M/C (73W) : largeur 180 mm, série 55, radial à vitesse élevée, jante de 17 pouces, M/C pour motocycle, indice de charge 73, indice de vitesse W. Les pneumatiques avant et arrière doivent être de la référence et de la dimension homologuées pour le modèle, souvent de la même gamme ; certains constructeurs imposent des montes spécifiques. Le sens de rotation indiqué sur le flanc est impératif.</p>\n<p>La profondeur minimale de sculpture des motocycles est fixée par la réglementation, plus faible que celle des voitures ; en pratique, l'adhérence se dégrade bien avant cette limite, en particulier sur sol mouillé. La pression se contrôle à froid, et le pneumatique neuf demande quelques dizaines de kilomètres de rodage prudent, car un agent de démoulage peut subsister en surface.</p>"
      },
      {
       "titre": "Roues et liaisons à contrôler",
       "contenu": "<p>Les contrôles de la partie cycle lors d'un entretien portent sur : le jeu des roulements de roue et de direction, le jeu et le graissage du pivot de bras oscillant et des biellettes, l'état des jantes (fissures, voile, rayons détendus sur les roues à rayons), les fixations des étriers et des disques, les flexibles de frein, le serrage des axes de roue au couple et la présence des goupilles ou dispositifs de sécurité. Sur les roues à rayons, la tension se contrôle au son ou au tensiomètre ; un rayon détendu fragilise la roue.</p>\n<p>L'<strong>alignement des roues</strong> se vérifie à la règle ou au cordeau tendu le long des flancs des deux pneumatiques, en tenant compte de leur différence de largeur, ou avec un outil laser. Un défaut d'alignement provient souvent d'un réglage de chaîne dissymétrique ; il donne une moto qui tire d'un côté et use la chaîne et les pneumatiques. Le <strong>voile</strong> et le <strong>faux-rond</strong> des jantes se mesurent au comparateur, roue en rotation lente sur son axe, et se comparent aux limites prescrites. Enfin, l'équilibrage des roues se fait sur équilibreuse ou sur axe d'équilibrage statique ; les masses adhésives sont placées au centre de la jante, à l'endroit indiqué.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conduire le contrôle de la partie cycle avant restitution.<br>1. Roue avant décollée : direction libre sans point dur ni jeu.<br>2. Roue arrière décollée : pas de jeu au bras oscillant en le secouant latéralement.<br>3. Roues : rotation libre, pas de jeu de roulement, voile visuellement nul.<br>4. Freins : fixations au couple, niveau de liquide, garde au levier et à la pédale.<br>5. Pneumatiques : pressions à froid, état, profondeur, sens de rotation.<br>6. Essai routier avec freinages progressifs et vérification de la tenue de cap.</div>"
      }
     ],
     "points_cles": [
      "La partie cycle conditionne directement la stabilité et la sécurité du pilote",
      "Angle de chasse, chasse et empattement déterminent stabilité et maniabilité",
      "Un jeu de direction peut provoquer un guidonnage dangereux",
      "Précharge, compression et détente sont les trois réglages de suspension",
      "L'enfoncement avec pilote se mesure par différence de cotes L1 − L3",
      "Le freinage d'une moto est assuré principalement par l'avant",
      "ABS obligatoire au-delà de 125 cm3, ABS ou freinage combiné en dessous",
      "Pneumatiques de la dimension et de la référence homologuées, sens de rotation respecté"
     ],
     "lexique": [
      {
       "terme": "Partie cycle",
       "def": "Ensemble du cadre, de la direction, des suspensions, des roues et des freins d'une moto."
      },
      {
       "terme": "Angle de chasse",
       "def": "Inclinaison de l'axe de direction par rapport à la verticale."
      },
      {
       "terme": "Chasse",
       "def": "Distance au sol entre l'axe de direction prolongé et le contact du pneumatique avant."
      },
      {
       "terme": "Fourche inversée",
       "def": "Fourche dont les fourreaux sont en haut et les tubes coulissants en bas."
      },
      {
       "terme": "Précharge",
       "def": "Compression initiale du ressort qui règle l'assiette de la moto."
      },
      {
       "terme": "Détente",
       "def": "Phase de retour de la suspension après compression, freinée par l'amortisseur."
      },
      {
       "terme": "Enfoncement statique",
       "def": "Enfoncement de la suspension sous le poids de la moto et du pilote."
      },
      {
       "terme": "Disque flottant",
       "def": "Disque dont la piste est reliée au moyeu par des pions qui autorisent la dilatation."
      },
      {
       "terme": "Centrale inertielle",
       "def": "Capteur qui mesure angles et accélérations de la moto dans les trois axes."
      },
      {
       "terme": "Guidonnage",
       "def": "Oscillation rapide du guidon autour de l'axe de direction."
      }
     ]
    },
    {
     "id": "bmv-moto-electronique-reglementation",
     "titre": "Électronique, réglementation et conseil au motard",
     "niveau": "Tle",
     "options": [
      "moto"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire les aides au pilotage électroniques et leurs capteurs",
      "Identifier les catégories de deux-roues motorisés et les règles de bridage",
      "Situer le contrôle technique des deux-roues et les points contrôlés",
      "Mener un questionnement client pour diagnostiquer un défaut ressenti",
      "Conseiller le client sur l'usage, l'entretien et l'équipement de sa moto"
     ],
     "sections": [
      {
       "titre": "L'électronique embarquée des motos",
       "contenu": "<p>Les motos récentes, en particulier les routières, trails et sportives de moyenne et grosse cylindrée, embarquent une électronique comparable à celle des voitures. Les fonctions s'appuient sur une <strong>centrale inertielle</strong> (IMU) qui mesure en permanence l'inclinaison, le tangage et les accélérations, et sur les capteurs de vitesse des deux roues.</p>\n<table>\n<thead><tr><th>Fonction</th><th>Principe</th></tr></thead>\n<tbody>\n<tr><td>Accélérateur électronique</td><td>La poignée envoie une consigne ; le calculateur ouvre les papillons selon le mode choisi</td></tr>\n<tr><td>Modes de conduite</td><td>Cartographies de puissance, d'antipatinage et d'ABS adaptées (pluie, route, sport, tout-terrain)</td></tr>\n<tr><td>Antipatinage</td><td>Compare les vitesses des roues et réduit le couple si la roue arrière patine, en tenant compte de l'inclinaison</td></tr>\n<tr><td>ABS en courbe</td><td>Adapte la pression de freinage à l'angle d'inclinaison</td></tr>\n<tr><td>Antisoulèvement</td><td>Limite le cabrage de la roue avant à l'accélération</td></tr>\n<tr><td>Régulateur de vitesse, parfois adaptatif</td><td>Maintien de la vitesse, avec radar sur certains modèles</td></tr>\n<tr><td>Éclairage en virage</td><td>Feux additionnels activés selon l'inclinaison</td></tr>\n</tbody>\n</table>\n<p>Ces calculateurs communiquent par un réseau CAN. Le diagnostic se fait par une prise de diagnostic propre au constructeur (souvent sous la selle), avec l'outil de la marque ou un outil multimarque adapté aux deux-roues.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> après le remplacement d'un pneumatique d'une dimension légèrement différente (autorisée par le constructeur) ou après une modification de rapport secondaire, certaines motos demandent un étalonnage des paramètres de roue pour que l'antipatinage et l'ABS interprètent correctement les vitesses de roue.</div>"
      },
      {
       "titre": "Le circuit de charge d'une moto",
       "contenu": "<p>La plupart des motos utilisent un <strong>alternateur à aimants permanents</strong> monté en bout de vilebrequin : le rotor porte les aimants, le stator triphasé produit une tension alternative qui augmente avec le régime. Un <strong>régulateur-redresseur</strong> transforme cette tension en continu et la limite à une valeur de charge d'environ 14 à 14,5 V. Ce composant dissipe beaucoup de chaleur ; il est souvent placé dans un flux d'air. Les pannes de charge sont fréquentes : connecteur du stator brûlé, bobinage du stator en court-circuit, régulateur défaillant.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler un circuit de charge à alternateur à aimants.<br>1. Batterie chargée, moteur au ralenti puis vers 5 000 tr/min : mesurer la tension aux bornes de la batterie ; elle doit atteindre la plage prescrite sans la dépasser.<br>2. Si la tension est insuffisante : débrancher le connecteur du stator et mesurer, moteur tournant, la tension alternative entre chaque paire de phases ; les trois valeurs doivent être égales et augmenter avec le régime.<br>3. Moteur arrêté, mesurer la résistance entre phases (faible et égale) et l'isolement de chaque phase par rapport à la masse (infini).<br>4. Si le stator est bon, mettre en cause le régulateur-redresseur ou son câblage ; contrôler l'état du connecteur, souvent noirci par l'échauffement.</div>"
      },
      {
       "titre": "Les catégories de deux-roues et les permis",
       "contenu": "<p>Les deux-roues motorisés appartiennent à la catégorie européenne <strong>L</strong> :</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Caractéristiques principales</th><th>Permis</th></tr></thead>\n<tbody>\n<tr><td>L1e (cyclomoteur)</td><td>Vitesse maximale par construction 45 km/h, cylindrée jusqu'à 50 cm<sup>3</sup> en thermique, puissance limitée</td><td>Permis AM (ancien BSR) selon l'âge</td></tr>\n<tr><td>L3e A1</td><td>Cylindrée jusqu'à 125 cm<sup>3</sup>, puissance jusqu'à 11 kW, rapport puissance-poids limité</td><td>A1 ou permis B avec formation selon conditions</td></tr>\n<tr><td>L3e A2</td><td>Puissance jusqu'à 35 kW, rapport puissance-poids jusqu'à 0,2 kW/kg ; si bridée, puissance d'origine au plus double</td><td>A2</td></tr>\n<tr><td>L3e A3</td><td>Sans limitation de puissance</td><td>A</td></tr>\n<tr><td>L2e, L4e à L7e</td><td>Cyclomoteurs à trois roues, motos avec side-car, tricycles, quadricycles</td><td>Selon le véhicule</td></tr>\n</tbody>\n</table>\n<p>Le <strong>bridage</strong> d'une moto pour le permis A2 se fait uniquement avec un kit homologué par le constructeur ou un organisme habilité, qui fait l'objet d'une attestation ; la limitation figure sur le certificat d'immatriculation. Le débridage, à l'obtention du permis A, suit la même logique d'attestation.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier l'éligibilité d'une moto au bridage A2.<br>Données : puissance d'origine 68 kW ; masse en ordre de marche 210 kg ; puissance bridée visée 35 kW.<br>1. Puissance d'origine au plus double de la puissance bridée : 2 × 35 = 70 kW ; 68 kW ≤ 70 kW, condition remplie.<br>2. Rapport puissance-poids après bridage : 35 / 210 ≈ 0,167 kW/kg ≤ 0,2 kW/kg, condition remplie.<br>3. Conclusion : bridage possible avec le kit homologué pour ce modèle, attestation remise au client pour la mise à jour du certificat d'immatriculation.</div>"
      },
      {
       "titre": "Conformité et modifications interdites",
       "contenu": "<p>Une moto est homologuée dans une configuration donnée. Les modifications qui changent les performances, le bruit ou les émissions sans homologation sont interdites : débridage d'un cyclomoteur, échappement non homologué, suppression de la valve d'échappement ou du catalyseur, modification du calculateur augmentant la puissance d'une moto bridée. Le professionnel qui réalise une telle modification engage sa responsabilité, et le client risque l'immobilisation du véhicule et le refus d'indemnisation par son assureur en cas d'accident.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remplacer un clignotant, un rétroviseur ou un support de plaque par un accessoire est courant, mais l'accessoire doit porter un marquage d'homologation et respecter les règles de position et de visibilité. Un éclairage non conforme est relevé au contrôle technique et lors des contrôles routiers.</div>"
      },
      {
       "titre": "Le contrôle technique des deux-roues",
       "contenu": "<p>En France, le contrôle technique des véhicules de la catégorie L (cyclomoteurs, motos, tricycles, quadricycles) est entré en vigueur en 2024, avec un calendrier progressif selon l'ancienneté des véhicules, puis une périodicité de quelques années. Il porte sur l'identification, le freinage, la direction, la visibilité, l'éclairage et la signalisation, les liaisons au sol (roues, pneumatiques, suspensions), la structure, les équipements, et les nuisances (bruit et émissions). Les défaillances sont classées en mineures, majeures et critiques, sur le même principe que pour les voitures.</p>\n<p>L'atelier propose naturellement un pré-contrôle : jeux de direction et de roues, état des pneumatiques, freins, éclairage, conformité de l'échappement et du niveau sonore, plaque d'immatriculation conforme.</p>"
      },
      {
       "titre": "Recueillir les symptômes auprès du motard",
       "contenu": "<p>Le référentiel souligne une particularité de l'option : le recueil des symptômes par <strong>questionnement direct du client</strong>. Une moto « qui tire », « qui guidonne », « qui manque de frein » ou « qui vibre » présente souvent des défauts ressentis, sans code défaut. Le questionnement porte sur :</p>\n<ul>\n<li>les conditions : vitesse, régime, accélération ou décélération, ligne droite ou virage, solo ou duo, chargée ou non ;</li>\n<li>l'historique : changement récent de pneumatiques, de réglages, chute, transport sur remorque sanglée ;</li>\n<li>l'usage : trajets quotidiens, voyages, circuit, tout-terrain ;</li>\n<li>l'équipement : bagagerie (top-case chargé), bulle haute, accessoires montés.</li>\n</ul>\n<p>Le technicien reformule et, si possible, réalise un essai avec le client ou reproduit les conditions décrites.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur une moto, un top-case chargé, une pression de pneumatique incorrecte ou une précharge non adaptée expliquent une grande part des réclamations de comportement. On les vérifie avant d'envisager une cause mécanique.</div>"
      },
      {
       "titre": "Conseiller le client",
       "contenu": "<p>Le conseil d'usage fait partie de la mission du technicien de l'option motocycles. Il porte notamment sur :</p>\n<ul>\n<li>le contrôle régulier de la pression des pneumatiques à froid, et son adaptation en duo ou chargé selon la notice ;</li>\n<li>l'entretien de la chaîne (nettoyage, graissage, contrôle de tension) entre deux passages à l'atelier ;</li>\n<li>le rodage d'une moto neuve ou de pièces neuves (pneumatiques, plaquettes) ;</li>\n<li>le remisage hivernal : batterie sur mainteneur de charge adapté à sa technologie (certaines batteries lithium exigent un chargeur spécifique), plein de carburant ou traitement selon les préconisations, pneumatiques soulagés, protection contre la corrosion ;</li>\n<li>l'équipement du pilote : port obligatoire du casque homologué et des gants certifiés, intérêt des protections et des équipements visibles.</li>\n</ul>"
      },
      {
       "titre": "Les deux-roues électriques",
       "contenu": "<p>Les scooters et motos électriques se développent, surtout en ville. Ils comportent une batterie lithium-ion (parfois amovible), un moteur central ou un moteur-roue, un contrôleur (onduleur) et un chargeur, souvent intégré. Leurs tensions de batterie vont de quelques dizaines de volts pour les petits scooters à plusieurs centaines de volts pour les motos performantes ; la prévention du risque électrique et l'habilitation s'appliquent dès que la partie de traction relève du domaine basse tension. L'entretien porte sur la transmission (courroie ou chaîne), les freins, les pneumatiques, les connecteurs de batterie et les mises à jour logicielles. Les catégories et permis restent fondés sur la puissance continue et la vitesse maximale.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une batterie amovible stockée par le client dans un local chaud, ou rechargée avec un chargeur non d'origine, peut perdre rapidement de sa capacité ou présenter un risque. Le conseil porte sur le chargeur d'origine, la température de stockage et l'état de charge en cas d'inutilisation prolongée.</div>"
      }
     ],
     "points_cles": [
      "La centrale inertielle mesure l'inclinaison et alimente antipatinage et ABS en courbe",
      "Les modes de conduite modifient puissance, antipatinage et ABS",
      "Les deux-roues relèvent de la catégorie L ; L1e limité à 45 km/h",
      "A2 : 35 kW maximum, 0,2 kW/kg, puissance d'origine au plus double",
      "Le bridage se fait avec un kit homologué et une attestation",
      "Le contrôle technique des deux-roues existe en France depuis 2024",
      "Les défauts ressentis se diagnostiquent d'abord par un questionnement précis du client",
      "Pression des pneumatiques, chargement et précharge expliquent beaucoup de réclamations"
     ],
     "lexique": [
      {
       "terme": "Centrale inertielle (IMU)",
       "def": "Capteur qui mesure les inclinaisons et accélérations de la moto dans les trois axes."
      },
      {
       "terme": "Antipatinage",
       "def": "Fonction qui réduit le couple lorsque la roue arrière perd de l'adhérence."
      },
      {
       "terme": "Mode de conduite",
       "def": "Ensemble de réglages électroniques adaptés à un type d'usage."
      },
      {
       "terme": "Catégorie L",
       "def": "Catégorie européenne des véhicules à deux ou trois roues et quadricycles."
      },
      {
       "terme": "Bridage",
       "def": "Limitation homologuée de la puissance d'une moto."
      },
      {
       "terme": "Rapport puissance-poids",
       "def": "Puissance divisée par la masse du véhicule, en kW/kg."
      },
      {
       "terme": "Homologation",
       "def": "Reconnaissance de la conformité d'un véhicule ou d'un équipement à la réglementation."
      },
      {
       "terme": "Remisage",
       "def": "Préparation d'un véhicule pour une période prolongée sans utilisation."
      },
      {
       "terme": "Moteur-roue",
       "def": "Moteur électrique intégré au moyeu de la roue motrice."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 8 — Analyser les documents professionnels",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bmv-doc-ordre-reparation",
     "titre": "L'ordre de réparation et le dossier du véhicule",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Repérer les rubriques d'un ordre de réparation et en extraire les informations utiles à l'intervention",
      "Exploiter le certificat d'immatriculation et le numéro d'identification du véhicule",
      "Croiser l'OR avec l'historique d'entretien et le plan du constructeur",
      "Identifier les informations manquantes ou incohérentes avant d'intervenir",
      "Rédiger une analyse préparatoire structurée à partir d'un dossier"
     ],
     "sections": [
      {
       "titre": "Pourquoi apprendre à lire un dossier",
       "contenu": "<p>Toute intervention commence par la lecture de documents : l'ordre de réparation, le certificat d'immatriculation, l'historique, la documentation du constructeur. Savoir en extraire rapidement les informations utiles est une compétence professionnelle à part entière. C'est aussi le support des épreuves : pour les élèves qui passent l'examen selon l'ancien référentiel, l'épreuve écrite d'analyse préparatoire à une intervention repose sur un dossier technique de ce type ; dans le référentiel rénové, les situations d'évaluation pratiques s'appuient sur les mêmes documents, et la préparation de l'intervention y est évaluée.</p>\n<p>Ce bloc présente les principaux documents un par un, avec une méthode de lecture et un exemple commenté. On commence par le document qui ouvre toute intervention : l'OR, accompagné des documents d'identification du véhicule.</p>"
      },
      {
       "titre": "Structure d'un ordre de réparation",
       "contenu": "<p>Chaque entreprise a sa présentation, souvent produite par son logiciel de gestion d'atelier, mais on y retrouve toujours les mêmes zones :</p>\n<table>\n<thead><tr><th>Zone</th><th>Contenu</th><th>Utilité pour le technicien</th></tr></thead>\n<tbody>\n<tr><td>En-tête</td><td>Numéro d'OR, date et heure d'entrée, date et heure de restitution promises, réceptionnaire</td><td>Délai disponible, interlocuteur</td></tr>\n<tr><td>Client</td><td>Nom, coordonnées, mode de contact préféré</td><td>Joindre le client en cas de travaux supplémentaires (via la réception)</td></tr>\n<tr><td>Véhicule</td><td>Immatriculation, VIN, marque, modèle, motorisation, date de première mise en circulation, kilométrage, niveau de carburant ou de charge</td><td>Identifier la bonne documentation et les bonnes pièces</td></tr>\n<tr><td>Travaux demandés</td><td>Lignes numérotées : forfaits, opérations, symptômes décrits par le client</td><td>Ce qui est autorisé, et seulement cela</td></tr>\n<tr><td>Constat de réception</td><td>Dommages visibles, objets laissés, état des pneumatiques</td><td>Protéger l'entreprise et le client</td></tr>\n<tr><td>Pièces et main-d'œuvre</td><td>Références, quantités, temps barèmes</td><td>Préparer les pièces, mesurer son temps</td></tr>\n<tr><td>Observations du technicien</td><td>Anomalies, mesures, préconisations</td><td>Zone à remplir par le technicien</td></tr>\n<tr><td>Signature et accord</td><td>Signature du client, montant maximal autorisé éventuel</td><td>Cadre contractuel</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Le certificat d'immatriculation et le VIN",
       "contenu": "<p>Le <strong>certificat d'immatriculation</strong> (ancienne carte grise) comporte des rubriques codées par des lettres. Les plus utiles à l'atelier sont :</p>\n<ul>\n<li>A : numéro d'immatriculation ; B : date de première immatriculation ;</li>\n<li>D.1 : marque ; D.2 : type, variante, version ; D.3 : dénomination commerciale ;</li>\n<li><strong>E : numéro d'identification du véhicule (VIN)</strong> ;</li>\n<li>F.1 et F.2 : masses en charge maximales ; G : masse en service ;</li>\n<li>J : catégorie (M1, N1, L3e…) ; P.1 : cylindrée ; P.2 : puissance nette maximale en kW ; <strong>P.3 : type de carburant ou source d'énergie</strong> ;</li>\n<li>V.7 : émissions de CO<sub>2</sub> ; V.9 : classe environnementale (norme Euro).</li>\n</ul>\n<p>Le <strong>VIN</strong> comporte 17 caractères (sans les lettres I, O et Q pour éviter les confusions) : les trois premiers identifient le constructeur, les six suivants décrivent le véhicule selon le codage du constructeur, les huit derniers identifient le véhicule, le dixième caractère indiquant souvent l'année modèle. C'est la clé de recherche la plus fiable dans les catalogues de pièces et les documentations, car un même modèle commercial peut cacher plusieurs motorisations et équipements.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> chercher une pièce avec la seule immatriculation ou le seul nom commercial conduit souvent à une erreur de référence (deux systèmes de freinage, deux types de boîte pour le même modèle). On utilise le VIN, et l'on vérifie, si nécessaire, sur la pièce déposée.</div>"
      },
      {
       "titre": "Méthode de lecture d'un dossier d'intervention",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un OR avant d'intervenir.<br>1. <strong>Identifier</strong> le véhicule : VIN, motorisation (rubrique P.3), kilométrage, âge. En déduire la documentation à consulter, les habilitations nécessaires (véhicule électrifié ?) et les particularités (boîte automatique, transmission intégrale).<br>2. <strong>Lister</strong> les travaux demandés et les classer : entretien, réparation définie, diagnostic d'un symptôme.<br>3. <strong>Croiser</strong> avec l'historique et le plan d'entretien : opérations dues non commandées, opérations commandées déjà faites récemment.<br>4. <strong>Repérer</strong> les incohérences et les manques : kilométrage incohérent avec l'historique, symptôme décrit de façon vague, pièce commandée ne correspondant pas à la motorisation.<br>5. <strong>Préparer</strong> : liste des pièces et produits, outillages spécifiques, temps estimé, poste de travail adapté (pont, aire de calibrage, zone véhicule électrique).<br>6. <strong>Formuler</strong> les questions à poser à la réception avant de commencer.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'analyse d'un dossier ne consiste pas à recopier ses informations, mais à en tirer des décisions : quoi faire, avec quoi, dans quel ordre, et quelles questions poser.</div>"
      },
      {
       "titre": "Exemple commenté : le dossier",
       "contenu": "<p>Le dossier présenté ci-dessous est un exemple construit pour l'apprentissage.</p>\n<h4>Extrait de l'ordre de réparation</h4>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Entrée / restitution</td><td>Mardi 8 h 15 / mardi 17 h 30</td></tr>\n<tr><td>Véhicule</td><td>Citadine, première mise en circulation il y a 4 ans et 2 mois, 61 870 km</td></tr>\n<tr><td>Rubrique P.3 relevée</td><td>EE (hybride essence-électricité non rechargeable)</td></tr>\n<tr><td>Ligne 1</td><td>Entretien selon préconisation constructeur</td></tr>\n<tr><td>Ligne 2</td><td>Client signale un bruit de frottement à l'arrière droit en roulant, surtout au freinage</td></tr>\n<tr><td>Ligne 3</td><td>Contrôle avant contrôle technique (à passer dans 15 jours)</td></tr>\n<tr><td>Montant maximal autorisé</td><td>350 € TTC sans nouvel accord</td></tr>\n</tbody>\n</table>\n<h4>Extrait de l'historique et du plan</h4>\n<table>\n<thead><tr><th>Date (âge du véhicule)</th><th>Kilométrage</th><th>Opérations</th></tr></thead>\n<tbody>\n<tr><td>1 an</td><td>15 200 km</td><td>Vidange, filtre à huile</td></tr>\n<tr><td>2 ans</td><td>29 800 km</td><td>Vidange, filtre à huile, filtre d'habitacle</td></tr>\n<tr><td>3 ans</td><td>45 100 km</td><td>Vidange, filtre à huile, filtre d'habitacle, liquide de frein</td></tr>\n</tbody>\n</table>\n<p>Plan constructeur (extrait) : vidange et filtre à huile tous les 15 000 km ou 1 an ; filtre d'habitacle tous les 15 000 km ou 1 an ; filtre à air tous les 60 000 km ; liquide de frein tous les 3 ans ; filtre de ventilation de batterie hybride : contrôle tous les 15 000 km ; bougies : 90 000 km.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Identification et conséquences.</strong> Le code EE indique un véhicule hybride non rechargeable : il comporte une batterie de traction dans le domaine basse tension. L'intervention doit être confiée à un technicien habilité au minimum B0L pour les opérations prévues, qui ne touchent pas aux organes de traction, et le véhicule doit être placé hors état « prêt », clé éloignée, avant toute intervention, car le moteur thermique peut démarrer seul. Le véhicule a plus de 4 ans : il est bien dans la période de son premier contrôle technique, ce qui est cohérent avec la ligne 3.</p>\n<p><strong>2. Opérations d'entretien dues.</strong> Depuis le dernier entretien (45 100 km, 3 ans), le véhicule a parcouru 16 770 km et un an s'est écoulé : vidange, filtre à huile et filtre d'habitacle sont dus. Le filtre à air atteint 60 000 km : il est dû (il n'apparaît pas dans l'historique). Le liquide de frein a été remplacé il y a un an : non dû. Le filtre de ventilation de la batterie hybride est à contrôler et n'apparaît jamais dans l'historique : contrôle indispensable, remplacement à proposer s'il est encrassé.</p>\n<p><strong>3. Le symptôme de la ligne 2.</strong> Un bruit de frottement arrière droit, accentué au freinage, oriente vers le freinage arrière : plaquette usée jusqu'au support ou témoin d'usure, disque corrodé (fréquent sur un hybride dont les freins travaillent peu), corps étranger entre disque et tôle de protection, étrier grippé. Le roulement de roue est une hypothèse secondaire (bruit plutôt lié à la vitesse qu'au freinage). La vérification commence par un contrôle visuel roue déposée.</p>\n<p><strong>4. Le pré-contrôle.</strong> Il est réalisé selon les fonctions du contrôle technique, avec une attention particulière aux points cohérents avec le symptôme (freinage arrière) et aux éléments d'un véhicule de 4 ans : pneumatiques, éclairage, balais, soufflets, absence de voyant et de code défaut.</p>\n<p><strong>5. Budget et accord.</strong> Le montant maximal de 350 € TTC risque d'être dépassé si le filtre à air, le filtre de batterie et une réparation de freins s'ajoutent à l'entretien. Toute opération non comprise dans la ligne « entretien selon préconisation » qui ferait dépasser ce montant (disques et plaquettes, par exemple) nécessite un devis et un nouvel accord du client, obtenu par la réception.</p>\n<p><strong>6. Questions à poser à la réception avant de commencer.</strong> Le client accepte-t-il le remplacement du filtre à air dans l'enveloppe ? Le bruit a-t-il été entendu à froid seulement ou en permanence ? Le véhicule a-t-il été immobilisé longtemps récemment (corrosion des disques) ?</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> cette analyse prend quelques minutes et évite les erreurs coûteuses : pièce manquante découverte à 16 h, dépassement de budget non autorisé, oubli d'un filtre spécifique à l'hybride qui provoquera plus tard une limitation de puissance.</div>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "<ul>\n<li>Confondre « travaux demandés » et « travaux à faire » : on ne réalise que ce qui est autorisé ; le reste est proposé.</li>\n<li>Oublier l'échéance de temps et ne regarder que le kilométrage.</li>\n<li>Ne pas exploiter la rubrique P.3 et découvrir l'électrification du véhicule sous le capot.</li>\n<li>Recopier le symptôme du client sans le reformuler en hypothèses vérifiables.</li>\n<li>Ignorer le délai de restitution promis : un travail long doit être signalé dès l'analyse.</li>\n</ul>"
      }
     ],
     "points_cles": [
      "L'OR fixe ce qui est autorisé, le délai et parfois un montant maximal",
      "Le VIN de 17 caractères est la clé de recherche fiable des pièces et documentations",
      "La rubrique P.3 du certificat d'immatriculation indique l'énergie du véhicule",
      "On croise toujours l'OR avec l'historique et le plan d'entretien",
      "Un symptôme se reformule en hypothèses vérifiables",
      "Un dépassement de budget impose un devis et un nouvel accord",
      "L'analyse aboutit à des décisions : quoi, avec quoi, dans quel ordre, quelles questions",
      "Les mêmes documents servent à l'atelier et aux épreuves"
     ],
     "lexique": [
      {
       "terme": "Ordre de réparation",
       "def": "Document signé par le client qui autorise et décrit l'intervention."
      },
      {
       "terme": "VIN",
       "def": "Numéro d'identification du véhicule à 17 caractères."
      },
      {
       "terme": "Certificat d'immatriculation",
       "def": "Titre administratif du véhicule, dont les rubriques codées décrivent ses caractéristiques."
      },
      {
       "terme": "Rubrique P.3",
       "def": "Rubrique du certificat d'immatriculation qui indique le carburant ou la source d'énergie."
      },
      {
       "terme": "Historique d'entretien",
       "def": "Liste datée des interventions réalisées sur le véhicule."
      },
      {
       "terme": "Montant maximal autorisé",
       "def": "Plafond de dépense accepté par le client sans nouvel accord."
      },
      {
       "terme": "Analyse préparatoire",
       "def": "Étude du dossier qui permet de planifier et sécuriser une intervention."
      },
      {
       "terme": "Constat de réception",
       "def": "Relevé de l'état du véhicule au moment de son entrée à l'atelier."
      }
     ]
    },
    {
     "id": "bmv-doc-methode-constructeur",
     "titre": "La documentation de méthode et les données techniques",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Identifier les différents documents de la documentation technique d'un constructeur",
      "Lire une méthode de dépose-repose : prérequis, outillages, étapes, couples, consignes",
      "Exploiter une vue éclatée et sa nomenclature",
      "Extraire et convertir les données techniques nécessaires",
      "Établir une chronologie d'intervention et une liste de préparation à partir d'une méthode"
     ],
     "sections": [
      {
       "titre": "Les documents de la documentation technique",
       "contenu": "<p>La documentation d'un constructeur (ou d'un éditeur de bases de données multimarques) est aujourd'hui presque toujours électronique, consultée sur un portail ou intégrée à l'outil de diagnostic. Elle regroupe plusieurs familles de documents :</p>\n<table>\n<thead><tr><th>Document</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Méthode de réparation (dépose-repose, remplacement, réglage)</td><td>Étapes d'une opération, outillages, consignes, couples</td></tr>\n<tr><td>Données techniques (valeurs de réglage, capacités, couples)</td><td>Tableaux de valeurs de référence</td></tr>\n<tr><td>Catalogue de pièces (vues éclatées et nomenclatures)</td><td>Références des pièces, quantités, positions</td></tr>\n<tr><td>Schémas électriques et fonctionnels</td><td>Circuits, connecteurs, implantations</td></tr>\n<tr><td>Notes techniques et bulletins de service</td><td>Pannes connues, modifications, mises à jour</td></tr>\n<tr><td>Plans d'entretien</td><td>Opérations et échéances</td></tr>\n<tr><td>Temps barèmes</td><td>Durées de référence des opérations</td></tr>\n</tbody>\n</table>\n<p>Ces documents sont liés : une méthode renvoie aux couples des données techniques, à l'outillage, aux pièces à remplacer systématiquement du catalogue.</p>"
      },
      {
       "titre": "Structure d'une méthode de réparation",
       "contenu": "<p>Une méthode se présente presque toujours de la même façon :</p>\n<ol>\n<li><strong>Titre et domaine d'application</strong> : opération, motorisation, numéros de série ou dates de fabrication concernés.</li>\n<li><strong>Consignes de sécurité</strong> : risques particuliers, consignation, temps d'attente.</li>\n<li><strong>Outillage spécifique</strong> : références des outils du constructeur (piges de calage, extracteurs, adaptateurs).</li>\n<li><strong>Ingrédients et pièces</strong> : produits (pâte d'étanchéité, frein-filet, graisse), pièces à remplacer systématiquement.</li>\n<li><strong>Opérations préliminaires</strong> : déposes préalables, souvent renvoyées vers d'autres méthodes.</li>\n<li><strong>Dépose</strong> : étapes numérotées, souvent illustrées.</li>\n<li><strong>Repose</strong> : étapes, valeurs de serrage, contrôles.</li>\n<li><strong>Opérations de fin</strong> : remplissages, purges, apprentissages, contrôles, essai.</li>\n</ol>\n<p>Le vocabulaire est codifié : « déposer » (retirer), « reposer » (remettre en place), « débrancher », « dégrafer », « écarter » (déplacer sans débrancher), « vérifier » ou « contrôler » (comparer à une valeur), « remplacer systématiquement ».</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le domaine d'application est essentiel. Une méthode valable « jusqu'au numéro de fabrication X » peut décrire un calage différent de celui du véhicule présent. On vérifie toujours la correspondance avec le VIN.</div>"
      },
      {
       "titre": "Vues éclatées et nomenclatures",
       "contenu": "<p>Une <strong>vue éclatée</strong> représente un ensemble avec ses pièces séparées le long de leurs axes de montage, chacune portant un <strong>repère</strong> (numéro dans une bulle). La <strong>nomenclature</strong> associée est un tableau qui donne, pour chaque repère, la désignation, la quantité, la référence et des remarques (pièce à usage unique, couple, produit). Les repères peuvent aussi renvoyer à des valeurs de serrage indiquées sur la vue.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une vue éclatée.<br>1. Repérer l'ensemble et son orientation (avant du véhicule, côté distribution).<br>2. Suivre l'ordre de montage le long des axes : ce qui est le plus à l'extérieur se dépose en premier.<br>3. Lire la nomenclature pour chaque repère concerné par l'intervention et relever les pièces marquées « à remplacer » (joints, vis à usage unique, écrous autofreinés).<br>4. Relever les quantités : quatre vis identiques sous un même repère signifie quatre pièces à commander.<br>5. Vérifier la cohérence avec la méthode : une pièce citée dans la méthode doit figurer dans la nomenclature.</div>"
      },
      {
       "titre": "Données techniques et unités",
       "contenu": "<p>Les données techniques sont présentées en tableaux. Les unités doivent être lues avec soin : couples en N·m (parfois en daN·m dans des documents anciens : 1 daN·m = 10 N·m), pressions en bar ou en kPa (1 bar = 100 kPa), capacités en litres, jeux en millimètres, angles en degrés. Les couples sont souvent donnés en plusieurs phases : « Pré-serrage 20 N·m, serrage 40 N·m, puis serrage angulaire 90° », avec un ordre de serrage repéré sur une figure.</p>\n<p>Les tolérances sont exprimées sous plusieurs formes : « 25 ± 2 N·m », « 0,20 à 0,30 mm », « minimum 22,0 mm » (limite d'usure), « maximum 0,05 mm » (voile). On distingue la <strong>valeur nominale</strong> (à neuf) et la <strong>limite de service</strong> (au-delà de laquelle la pièce est remplacée).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une valeur sans son unité et sans ses conditions (moteur froid, à 20 °C, filetage huilé) ne peut pas être appliquée correctement.</div>"
      },
      {
       "titre": "Exemple commenté : un extrait de méthode",
       "contenu": "<p>Exemple construit pour l'apprentissage : remplacement de la pompe à eau d'un moteur essence trois cylindres, entraînée par la courroie de distribution.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu de la méthode</th></tr></thead>\n<tbody>\n<tr><td>Outillage spécifique</td><td>Pige de calage de vilebrequin (réf. A) ; outil de blocage des poulies d'arbres à cames (réf. B) ; clé de tension du galet (réf. C)</td></tr>\n<tr><td>Pièces à remplacer systématiquement</td><td>Courroie de distribution, galet tendeur, joint de pompe à eau, vis de poulie de vilebrequin</td></tr>\n<tr><td>Ingrédients</td><td>Liquide de refroidissement, 4,8 L, technologie prescrite</td></tr>\n<tr><td>Opérations préliminaires</td><td>Débrancher la batterie ; vidanger le circuit de refroidissement ; déposer la roue avant droite, le pare-boue, la courroie d'accessoires ; soutenir le moteur ; déposer le support moteur droit</td></tr>\n<tr><td>Dépose (extrait)</td><td>Amener le cylindre 1 au point mort haut ; poser la pige A et l'outil B ; déposer la poulie de vilebrequin ; déposer le carter de distribution ; détendre le galet ; déposer la courroie ; déposer la pompe à eau (5 vis)</td></tr>\n<tr><td>Repose (extrait)</td><td>Pompe : vis 10 N·m ; courroie posée en respectant le sens de rotation ; tension au repère du galet ; déposer les outils ; effectuer deux tours de vilebrequin ; vérifier le calage (pose des outils sans effort) et la tension ; poulie de vilebrequin : 40 N·m + 180°</td></tr>\n<tr><td>Opérations de fin</td><td>Remplissage et purge du circuit selon la méthode ; contrôle d'étanchéité ; essai</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Préparation matérielle.</strong> Avant d'immobiliser le véhicule, on vérifie la disponibilité des outils A, B et C et l'on commande le kit comprenant courroie, galet, pompe et joint, la vis de poulie de vilebrequin (vis serrée à l'angle, donc à usage unique) et 5 litres de liquide de la technologie prescrite (4,8 L nécessaires, la marge couvre la purge).</p>\n<p><strong>2. Chronologie.</strong> La méthode impose un ordre logique qui commence par la sécurité (batterie) et le fluide (vidange), puis l'accès (roue, pare-boue, courroie d'accessoires, support moteur avec moteur soutenu). Le calage au point mort haut et la pose des outils précèdent toute dépose de la courroie : c'est le point critique de l'intervention.</p>\n<p><strong>3. Points de contrôle.</strong> Les deux tours de vilebrequin après repose et le contrôle de pose des outils sans effort constituent l'autocontrôle du calage. Ils se réalisent à la main, jamais au démarreur. La tension se vérifie à nouveau après ces deux tours.</p>\n<p><strong>4. Serrages.</strong> Deux types de serrage apparaissent : au couple simple (pompe à eau 10 N·m, faible valeur sur un carter en aluminium) et au couple plus angle (poulie 40 N·m + 180°), qui nécessite un rapporteur d'angle et le maintien du vilebrequin par l'outil prévu.</p>\n<p><strong>5. Fin d'intervention.</strong> La purge du circuit selon la méthode est indispensable : une poche d'air peut provoquer une surchauffe locale. On contrôle l'étanchéité à chaud et le niveau après refroidissement, puis on note sur l'OR les pièces remplacées et le kilométrage pour le prochain remplacement.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la pompe à eau entraînée par la courroie de distribution est presque toujours remplacée avec celle-ci, car son remplacement isolé ultérieur exigerait de refaire toute la dépose. La méthode et le kit du fabricant reflètent cette logique économique.</div>"
      },
      {
       "titre": "Les pièges de lecture",
       "contenu": "<ul>\n<li>Lire la repose sans avoir lu la dépose : certains repères ou positions doivent être relevés avant de démonter.</li>\n<li>Ignorer les renvois vers d'autres méthodes (opérations préliminaires) et sous-estimer le temps.</li>\n<li>Confondre deux valeurs proches dans un tableau (couple de la vis M8 et de la vis M10 d'un même ensemble).</li>\n<li>Appliquer un couple en daN·m comme s'il était en N·m.</li>\n<li>Négliger les mentions « remplacer systématiquement » parce que la pièce semble en bon état.</li>\n<li>Oublier les opérations de fin, notamment les apprentissages et purges.</li>\n</ul>\n<h4>Relier la méthode au temps barème et au devis</h4>\n<p>La documentation fournit aussi le <strong>temps barème</strong> de l'opération, souvent décomposé : temps de l'opération principale, temps des opérations complémentaires (par exemple « remplacement de la pompe à eau lors du remplacement de la courroie : + 0,2 h »), temps de diagnostic. Le réceptionnaire bâtit le devis à partir de ces temps et des références de pièces. Le technicien qui lit la méthode peut repérer des éléments oubliés dans le devis : un outillage à louer, un ingrédient, une opération liée (remplacement de la courroie d'accessoires déposée, conseillé si elle est usée). Signaler ces écarts avant l'intervention évite une facturation contestée ou une perte pour l'entreprise. Sur les véhicules de transport routier et les motocycles, la logique est identique, avec des temps et des outillages propres à chaque constructeur.</p>"
      }
     ],
     "points_cles": [
      "Méthodes, données, catalogue, schémas, notes techniques et plans forment un ensemble lié",
      "Le domaine d'application d'une méthode se vérifie avec le VIN",
      "Une méthode suit l'ordre : sécurité, outillage, pièces, préliminaires, dépose, repose, fin",
      "La vue éclatée se lit avec sa nomenclature et ses repères",
      "1 daN·m = 10 N·m ; 1 bar = 100 kPa",
      "Valeur nominale et limite de service sont deux notions distinctes",
      "Le calage se contrôle après deux tours de vilebrequin à la main",
      "Les pièces à remplacer systématiquement se commandent avant l'intervention"
     ],
     "lexique": [
      {
       "terme": "Méthode de réparation",
       "def": "Document qui décrit pas à pas une opération de dépose, repose ou réglage."
      },
      {
       "terme": "Domaine d'application",
       "def": "Ensemble des véhicules ou numéros de série auxquels un document s'applique."
      },
      {
       "terme": "Vue éclatée",
       "def": "Dessin d'un ensemble dont les pièces sont séparées le long de leurs axes de montage."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste des pièces d'un ensemble avec repères, désignations, quantités et références."
      },
      {
       "terme": "Limite de service",
       "def": "Valeur au-delà de laquelle une pièce usée doit être remplacée."
      },
      {
       "terme": "Outillage spécifique",
       "def": "Outil conçu par le constructeur pour une opération donnée."
      },
      {
       "terme": "Opérations préliminaires",
       "def": "Déposes ou préparations nécessaires avant l'opération principale."
      },
      {
       "terme": "Note technique",
       "def": "Document du constructeur qui signale une panne connue ou une modification et sa solution."
      }
     ]
    },
    {
     "id": "bmv-doc-schema-electrique",
     "titre": "Le schéma électrique constructeur",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Identifier les différents types de schémas électriques et leurs usages",
      "Décoder les repérages des composants, fils, connecteurs, masses et alimentations",
      "Suivre un circuit depuis son alimentation jusqu'à sa masse",
      "Prévoir les valeurs de tension attendues en différents points d'un circuit",
      "Construire un plan de mesures à partir d'un schéma"
     ],
     "sections": [
      {
       "titre": "Les types de schémas",
       "contenu": "<p>La documentation électrique d'un véhicule se compose de plusieurs représentations complémentaires :</p>\n<table>\n<thead><tr><th>Représentation</th><th>Ce qu'elle montre</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Schéma de principe (ou fonctionnel)</td><td>Le fonctionnement d'un système, simplifié</td><td>Comprendre avant de diagnostiquer</td></tr>\n<tr><td>Schéma électrique de câblage</td><td>Tous les fils, connecteurs, épissures, masses d'un circuit avec leurs repères</td><td>Mesurer, localiser un défaut</td></tr>\n<tr><td>Schéma de réseau multiplexé</td><td>Les calculateurs et leurs liaisons CAN, LIN, Ethernet</td><td>Diagnostiquer la communication</td></tr>\n<tr><td>Plan d'implantation</td><td>La position des composants, connecteurs, masses et épissures dans le véhicule</td><td>Trouver physiquement l'élément</td></tr>\n<tr><td>Vue de connecteur</td><td>La numérotation des voies d'un connecteur, vu côté fils ou côté composant</td><td>Piquer la bonne broche</td></tr>\n</tbody>\n</table>\n<p>Les constructeurs utilisent des présentations différentes, mais les principes restent les mêmes : symboles normalisés des composants, alimentations en haut ou à gauche, masses en bas, flux du courant de haut en bas.</p>"
      },
      {
       "titre": "Les repérages",
       "contenu": "<p>Chaque élément du schéma est identifié :</p>\n<ul>\n<li>les <strong>composants</strong> par un code (numéro ou lettres) renvoyant à une liste, par exemple « 1320 : calculateur moteur » ;</li>\n<li>les <strong>fils</strong> par leur couleur (souvent abrégée : RG rouge, NR noir, BA blanc, VE vert, JN jaune, BE bleu, selon le code du constructeur), leur section en mm<sup>2</sup> et parfois un numéro de fonction ;</li>\n<li>les <strong>connecteurs</strong> par un code, le nombre de voies et une couleur de boîtier, et chaque broche par son numéro de voie ;</li>\n<li>les <strong>masses</strong> par un repère renvoyant à leur emplacement (masse caisse, masse moteur, masse électronique) ;</li>\n<li>les <strong>alimentations</strong> par leur nature : permanent (directement depuis la batterie, protégé par fusible), après contact, alimentation commandée par un relais ou un calculateur ;</li>\n<li>les <strong>épissures</strong> (raccordements de plusieurs fils dans le faisceau) par un repère ;</li>\n<li>les <strong>fusibles</strong> par leur numéro dans le boîtier et leur calibre en ampères.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une vue de connecteur peut être dessinée côté fils (vue arrière, celle que l'on voit en piquant) ou côté composant (vue de face). Une erreur de lecture fait mesurer la broche symétrique. La légende de la vue l'indique toujours ; on la lit avant de piquer.</div>"
      },
      {
       "titre": "Méthode de lecture",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un circuit sur un schéma de câblage.<br>1. Identifier le composant qui ne fonctionne pas et le repérer sur le schéma.<br>2. Remonter le circuit vers son <strong>alimentation</strong> : fil, connecteurs intermédiaires, épissures, fusible, relais ou sortie de calculateur, jusqu'à la batterie.<br>3. Descendre le circuit vers la <strong>masse</strong> : fil, connecteurs, point de masse.<br>4. Identifier la <strong>commande</strong> : qui décide que le composant est alimenté (interrupteur, relais, calculateur) et de quelles informations dépend cette décision.<br>5. Repérer les éléments <strong>communs</strong> à d'autres circuits (fusible, masse, épissure), utiles si plusieurs fonctions sont en panne.<br>6. Prévoir les valeurs attendues en chaque point, composant commandé et non commandé.<br>7. Choisir les points de mesure les plus accessibles qui coupent le circuit en deux (recherche par dichotomie).</div>"
      },
      {
       "titre": "Prévoir les tensions attendues",
       "contenu": "<p>Dans un circuit en série alimenté en 12 V, la tension se répartit entre les éléments selon leur résistance. Si les fils et contacts sont en bon état, leur résistance est quasi nulle et toute la tension se retrouve aux bornes du récepteur. On en déduit des règles très utiles :</p>\n<table>\n<thead><tr><th>Situation</th><th>Tension avant le récepteur (côté +)</th><th>Tension après le récepteur (côté masse)</th></tr></thead>\n<tbody>\n<tr><td>Circuit bon, récepteur commandé</td><td>Environ 12 V</td><td>Environ 0 V</td></tr>\n<tr><td>Coupure côté alimentation</td><td>0 V</td><td>0 V</td></tr>\n<tr><td>Coupure côté masse (masse ouverte)</td><td>12 V</td><td>12 V (la tension « remonte » à travers le récepteur)</td></tr>\n<tr><td>Résistance parasite côté masse</td><td>12 V</td><td>Quelques volts au lieu de 0 V</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> mesurer 12 V des deux côtés d'un récepteur commandé qui ne fonctionne pas désigne presque toujours une masse coupée. Mesurer 0 V des deux côtés désigne un défaut d'alimentation.</div>"
      },
      {
       "titre": "Exemple commenté : le schéma",
       "contenu": "<p>Exemple construit pour l'apprentissage. Le schéma décrit l'alimentation du motoventilateur de refroidissement d'un moteur, en petite vitesse.</p>\n<table>\n<thead><tr><th>Élément</th><th>Description sur le schéma</th></tr></thead>\n<tbody>\n<tr><td>F12</td><td>Fusible 30 A, boîtier compartiment moteur, alimenté en permanent par la batterie</td></tr>\n<tr><td>R5</td><td>Relais de petite vitesse : bobine entre voie 1 (alimentation après contact par F3, 5 A) et voie 2 (fil vers le calculateur moteur, broche 47) ; contact de puissance entre voie 3 (venant de F12) et voie 5</td></tr>\n<tr><td>Fil 5-A</td><td>Fil RG 4 mm<sup>2</sup> de la voie 5 du relais à la résistance de petite vitesse RV, en passant par le connecteur intermédiaire C24 voie 2</td></tr>\n<tr><td>RV</td><td>Résistance de petite vitesse, 0,4 Ω, sortie vers le motoventilateur M1 voie 1</td></tr>\n<tr><td>M1</td><td>Motoventilateur, voie 1 alimentation, voie 2 masse par fil NR 4 mm<sup>2</sup> vers la masse MC3 (longeron avant gauche)</td></tr>\n<tr><td>Calculateur moteur, broche 47</td><td>Commande la bobine du relais par la masse lorsque la température dépasse le seuil</td></tr>\n</tbody>\n</table>\n<p>Symptôme : le motoventilateur ne tourne pas en petite vitesse ; la grande vitesse (circuit séparé, autre relais, même moteur et même masse) fonctionne. Le test d'actionneur de petite vitesse à l'outil de diagnostic fait entendre le relais coller.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Ce que le symptôme élimine.</strong> La grande vitesse fonctionne : le moteur M1, son fil de masse et la masse MC3 sont bons, puisqu'ils sont communs aux deux vitesses. Le relais colle lors du test : la commande par le calculateur (broche 47) et l'alimentation de la bobine (F3) sont bonnes. Restent possibles : le fusible F12 s'il n'alimente que la petite vitesse, le contact de puissance du relais (voies 3 et 5), le fil 5-A et le connecteur C24, la résistance RV.</p>\n<p><strong>2. Valeurs attendues.</strong> Petite vitesse commandée : 12 V environ à la voie 3 du relais ; 12 V environ à la voie 5 ; la résistance RV de 0,4 Ω en série avec le moteur provoque une chute de tension, si bien qu'on attend à l'entrée de M1 une tension nettement inférieure à 12 V mais non nulle (de l'ordre de 6 à 8 V selon le courant consommé).</p>\n<p><strong>3. Plan de mesures par dichotomie.</strong> Commande active par test d'actionneur : mesurer d'abord à la sortie de RV (entrée de M1, voie 1), point accessible. Si la tension est nulle, mesurer en amont de RV, au connecteur C24 : si 12 V sont présents, RV est coupée ; sinon, mesurer à la voie 5 du relais pour départager le fil 5-A et le contact du relais. Puis, hors tension, contrôler la résistance de RV à l'ohmmètre (0,4 Ω attendus, un circuit ouvert confirme sa coupure).</p>\n<p><strong>4. Conclusion attendue de l'analyse.</strong> La résistance de petite vitesse est une cause fréquente de ce symptôme (elle chauffe et peut se couper), mais seule la mesure permet de conclure. Le technicien recherche aussi la cause première : une résistance coupée par surchauffe peut résulter d'un moteur qui force (roulement grippé) ; le courant consommé par le motoventilateur en grande vitesse se contrôle à la pince ampèremétrique et se compare à la valeur prescrite.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> ce raisonnement sur papier, réalisé avant de toucher le véhicule, réduit à trois ou quatre mesures une recherche qui, sans schéma, conduirait à déposer le bouclier pour accéder au motoventilateur.</div>"
      },
      {
       "titre": "Les pièges de lecture",
       "contenu": "<ul>\n<li>Confondre continuité d'un fil et capacité à transmettre le courant : un fil peut sonner bon et présenter une résistance parasite en charge.</li>\n<li>Oublier les éléments communs à plusieurs circuits (masse, fusible, épissure).</li>\n<li>Lire une vue de connecteur du mauvais côté.</li>\n<li>Piquer la broche d'un connecteur avec une pointe trop grosse, qui élargit le contact femelle et crée un faux contact ultérieur.</li>\n<li>Mesurer une alimentation sans que le circuit soit commandé, et conclure à tort à un défaut.</li>\n<li>Négliger la section des fils : un fil de 0,35 mm<sup>2</sup> n'est pas un fil de puissance.</li>\n</ul>\n<p>Sur les véhicules de transport routier, le réseau de bord est en 24 V (deux batteries de 12 V en série) : les valeurs attendues sont à adapter, et un coupe-batterie général s'ajoute au circuit. Sur les motocycles, les schémas sont plus courts mais les connecteurs sont exposés aux intempéries et aux vibrations : le contrôle visuel des connecteurs (oxydation, broches repoussées) fait partie de la lecture du schéma sur le véhicule.</p>"
      }
     ],
     "points_cles": [
      "Schéma de principe pour comprendre, schéma de câblage pour mesurer, plan d'implantation pour trouver",
      "Chaque composant, fil, connecteur, masse et fusible porte un repère",
      "La vue de connecteur se lit côté fils ou côté composant selon la légende",
      "On suit le circuit de l'alimentation à la masse en identifiant la commande",
      "12 V des deux côtés d'un récepteur commandé : masse coupée",
      "0 V des deux côtés : défaut d'alimentation",
      "Les mesures se placent pour couper le circuit en deux à chaque étape",
      "Les éléments communs orientent le diagnostic quand plusieurs fonctions sont en panne"
     ],
     "lexique": [
      {
       "terme": "Schéma de câblage",
       "def": "Représentation des fils, connecteurs et composants d'un circuit avec leurs repères."
      },
      {
       "terme": "Plan d'implantation",
       "def": "Document qui situe composants, connecteurs et masses dans le véhicule."
      },
      {
       "terme": "Épissure",
       "def": "Raccordement de plusieurs fils dans un faisceau."
      },
      {
       "terme": "Alimentation permanente",
       "def": "Alimentation présente même contact coupé, directement depuis la batterie par un fusible."
      },
      {
       "terme": "Alimentation après contact",
       "def": "Alimentation présente seulement lorsque le contact est mis."
      },
      {
       "terme": "Voie",
       "def": "Emplacement numéroté d'une broche dans un connecteur."
      },
      {
       "terme": "Dichotomie",
       "def": "Méthode de recherche qui consiste à couper le circuit en deux à chaque mesure."
      },
      {
       "terme": "Relais",
       "def": "Interrupteur commandé électriquement, qui permet à un faible courant d'en commander un fort."
      }
     ]
    },
    {
     "id": "bmv-doc-schemas-fluides",
     "titre": "Les schémas hydrauliques, pneumatiques et fonctionnels",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Reconnaître les symboles normalisés des composants hydrauliques et pneumatiques",
      "Lire un schéma de circuit de freinage et identifier ses circuits et ses états",
      "Exploiter un schéma fonctionnel ou un schéma bloc d'un système piloté",
      "Prévoir l'effet d'une défaillance de composant à partir d'un schéma",
      "Choisir les points de contrôle de pression à partir d'un schéma"
     ],
     "sections": [
      {
       "titre": "Des schémas pour les fluides et pour les fonctions",
       "contenu": "<p>Au-delà de l'électricité, le technicien lit des schémas qui représentent la circulation des fluides (liquide de frein, huile de boîte automatique, air comprimé, carburant, fluide frigorigène, liquide de refroidissement) et des schémas qui représentent l'organisation des fonctions d'un système. Le cours de seconde a présenté les composants de base d'un circuit hydraulique ou pneumatique. On apprend ici à exploiter ces schémas pour comprendre un fonctionnement et prévoir l'effet d'une panne.</p>\n<p>Les schémas hydrauliques et pneumatiques utilisent des <strong>symboles normalisés</strong> (norme internationale ISO 1219). Un symbole représente la <strong>fonction</strong> du composant, pas sa forme réelle : une électrovanne se dessine de la même façon quelle que soit sa taille ou sa marque.</p>"
      },
      {
       "titre": "Les symboles à connaître",
       "contenu": "<table>\n<thead><tr><th>Composant</th><th>Description du symbole</th></tr></thead>\n<tbody>\n<tr><td>Pompe ou compresseur</td><td>Cercle avec un triangle plein (hydraulique) ou vide (pneumatique) pointé vers la sortie</td></tr>\n<tr><td>Réservoir (à l'air libre)</td><td>Rectangle ouvert vers le haut</td></tr>\n<tr><td>Accumulateur, réservoir sous pression</td><td>Forme ovale allongée</td></tr>\n<tr><td>Distributeur</td><td>Suite de cases accolées, une par position ; des flèches dans chaque case indiquent les passages, des traits en T les orifices fermés ; la case reliée aux conduites représente la position de repos</td></tr>\n<tr><td>Commande de distributeur</td><td>Symbole sur le côté : bobine (rectangle avec trait oblique) pour une électrovanne, ressort (zigzag) pour un rappel, pédale ou bouton pour une commande manuelle</td></tr>\n<tr><td>Clapet anti-retour</td><td>Bille dans un siège en V : le passage n'est possible que dans un sens</td></tr>\n<tr><td>Limiteur ou régulateur de pression</td><td>Case avec une flèche décalée et un ressort réglable</td></tr>\n<tr><td>Vérin ou cylindre</td><td>Rectangle avec piston et tige ; ressort dessiné à l'intérieur pour un simple effet à rappel</td></tr>\n<tr><td>Filtre</td><td>Losange avec un trait en pointillés</td></tr>\n<tr><td>Échappement (pneumatique)</td><td>Triangle à l'extrémité d'un orifice</td></tr>\n</tbody>\n</table>\n<p>Un distributeur se désigne par son nombre d'orifices et de positions : un distributeur 2/2 a deux orifices et deux positions ; un 3/2 en a trois et deux. Les électrovannes d'un groupe ABS sont des 2/2 : l'électrovanne d'admission est <strong>normalement ouverte</strong> (passage au repos), l'électrovanne d'échappement est <strong>normalement fermée</strong>.</p>"
      },
      {
       "titre": "Méthode de lecture d'un schéma de fluide",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un schéma hydraulique ou pneumatique.<br>1. Repérer la <strong>source</strong> d'énergie (pompe, compresseur, maître-cylindre) et le <strong>retour</strong> ou l'échappement.<br>2. Repérer les <strong>récepteurs</strong> (cylindres de roue, étriers, vérins, embrayages de boîte).<br>3. Identifier les <strong>composants de commande</strong> entre les deux et leur état au repos (case dessinée au contact des conduites).<br>4. Suivre le fluide pour un état donné : repos, puis chaque commande possible ; pour chaque état, noter quels récepteurs sont sous pression.<br>5. Repérer les <strong>prises de pression</strong> et les points de contrôle prévus.<br>6. Pour une panne supposée, rejouer le circuit avec le composant défaillant (bloqué ouvert, bloqué fermé, fuyard) et comparer l'effet prévu au symptôme.</div>"
      },
      {
       "titre": "Exemple commenté : le schéma",
       "contenu": "<p>Exemple construit pour l'apprentissage. On décrit le schéma hydraulique simplifié du circuit de la roue avant gauche d'un véhicule équipé d'ABS, circuit de freinage en X (avant gauche et arrière droit sur le même circuit).</p>\n<table>\n<thead><tr><th>Repère</th><th>Composant et liaisons</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Maître-cylindre tandem, chambre primaire reliée au circuit avant gauche et arrière droit</td></tr>\n<tr><td>2</td><td>Électrovanne d'admission avant gauche : distributeur 2/2 normalement ouvert, commandé par bobine, rappel par ressort ; clapet anti-retour en parallèle permettant le retour vers le maître-cylindre au relâchement de la pédale</td></tr>\n<tr><td>3</td><td>Électrovanne d'échappement avant gauche : distributeur 2/2 normalement fermé, commandé par bobine, rappel par ressort ; elle relie l'étrier à l'accumulateur basse pression 5</td></tr>\n<tr><td>4</td><td>Étrier avant gauche</td></tr>\n<tr><td>5</td><td>Accumulateur basse pression</td></tr>\n<tr><td>6</td><td>Pompe de retour entraînée par moteur électrique, aspirant dans 5 et refoulant entre 1 et 2 à travers un clapet anti-retour</td></tr>\n</tbody>\n</table>\n<p>Symptôme proposé : à basse vitesse, sans régulation ABS, le véhicule tire légèrement à droite au freinage ; à l'atelier, au banc de freinage, l'effort de la roue avant gauche est très inférieur à celui de la roue avant droite. Aucun code défaut n'est enregistré.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Fonctionnement normal.</strong> Au repos électrique (pas de régulation), l'électrovanne 2 est ouverte et l'électrovanne 3 fermée : la pression du maître-cylindre arrive directement à l'étrier 4. En régulation, le calculateur ferme 2 (maintien), ouvre 3 (baisse, le liquide part vers 5 et la pompe 6 le renvoie vers le maître-cylindre), puis rouvre 2 et ferme 3 (remontée).</p>\n<p><strong>2. Hypothèses compatibles avec le symptôme.</strong> Le freinage avant gauche est faible hors régulation et le véhicule tire du côté opposé, vers la roue qui freine le mieux. Peuvent l'expliquer : une électrovanne d'admission 2 partiellement obstruée (passage réduit) ; une électrovanne d'échappement 3 qui fuit (une partie de la pression part vers l'accumulateur) ; un flexible avant gauche obstrué intérieurement ; un étrier grippé ou des plaquettes souillées par de l'huile ou du liquide. Un défaut électrique de bobine provoquerait plutôt un code défaut, ce qui n'est pas le cas.</p>\n<p><strong>3. Hiérarchisation.</strong> On commence par le plus probable et le plus simple : contrôle visuel de l'étrier, des plaquettes et du flexible, test de libre coulissement ; puis mesure de pression à l'étrier avant gauche comparée à l'avant droit, pédale appuyée avec un effort constant. Une pression normale à l'étrier oriente vers l'étrier ou les garnitures ; une pression faible oriente vers le flexible ou le groupe hydraulique. L'outil de diagnostic permet ensuite de commander les électrovannes en test pour confirmer leur comportement.</p>\n<p><strong>4. Un indice supplémentaire.</strong> Une électrovanne d'échappement qui fuit remplit progressivement l'accumulateur 5 ; lors du test du groupe, la pompe débite du liquide sans qu'aucune régulation n'ait eu lieu, ce que certaines procédures de diagnostic permettent d'observer. Cette prévision n'est possible que si l'on a compris le schéma.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un schéma de fluide, on raisonne toujours à partir de l'état au repos, puis on « fait fonctionner » le circuit état par état. La panne supposée est validée si elle explique exactement le symptôme observé.</div>"
      },
      {
       "titre": "Les schémas fonctionnels et schémas blocs",
       "contenu": "<p>Pour les systèmes pilotés, les constructeurs fournissent aussi des <strong>schémas fonctionnels</strong> ou <strong>schémas blocs</strong> : des rectangles représentant capteurs, calculateurs et actionneurs, reliés par des flèches qui indiquent les informations échangées (nature du signal, réseau utilisé). On y repère les entrées du calculateur, ses sorties, et les informations venant d'autres calculateurs par le réseau.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> devant un régulateur de vitesse inopérant, le schéma fonctionnel montre que le calculateur moteur a besoin de la vitesse du véhicule (venant de l'ABS par le CAN), de l'information de pédale de frein et d'embrayage, et de l'état des commandes au volant. Un capteur de roue défaillant, un contacteur de stop déréglé ou un défaut de commande au volant peuvent donc produire le même symptôme : le schéma fonctionnel fournit la liste des hypothèses.</div>"
      },
      {
       "titre": "Les pièges de lecture",
       "contenu": "<ul>\n<li>Lire la case d'un distributeur qui n'est pas la position de repos.</li>\n<li>Oublier le clapet anti-retour en parallèle qui modifie le trajet du fluide au relâchement.</li>\n<li>Confondre symbole hydraulique (triangle plein) et pneumatique (triangle vide).</li>\n<li>Raisonner sur un seul état de fonctionnement alors que le symptôme apparaît dans un autre.</li>\n<li>Prendre un schéma simplifié pour un plan d'implantation : la position sur le schéma ne dit rien de la position dans le véhicule.</li>\n</ul>\n<h4>Le cas des schémas pneumatiques de véhicules lourds</h4>\n<p>Les schémas de freinage pneumatique des véhicules de transport routier appliquent les mêmes principes, avec les repères d'orifices propres au secteur (1 alimentation, 2 utilisation, 3 échappement, 4 commande, avec des indices pour les circuits : 11, 12, 21, 22…). Chaque composant porte un numéro de position renvoyant à une nomenclature, et les réservoirs, prises de contrôle et têtes d'accouplement (rouge et jaune) y sont représentés. Lire ce schéma permet par exemple de prévoir qu'une fuite sur le circuit des cylindres à ressort, isolée par la valve de protection, n'empêche pas le freinage de service mais peut provoquer le serrage du frein de stationnement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un schéma de circuit sous pression, un composant dessiné au repos n'est pas pour autant sans pression dans le véhicule. Avant de déconnecter une conduite, on vérifie sur le schéma quels réservoirs ou accumulateurs alimentent ce point, et on les vide selon la méthode.</div>"
      }
     ],
     "points_cles": [
      "Les symboles ISO 1219 représentent la fonction d'un composant, pas sa forme",
      "Un distributeur se désigne par son nombre d'orifices et de positions",
      "La case reliée aux conduites représente la position de repos",
      "Admission ABS normalement ouverte, échappement normalement fermé",
      "On fait fonctionner le circuit état par état à partir du repos",
      "Une panne supposée doit expliquer exactement le symptôme",
      "La mesure de pression départage récepteur et circuit de commande",
      "Le schéma fonctionnel liste les informations dont dépend une fonction"
     ],
     "lexique": [
      {
       "terme": "ISO 1219",
       "def": "Norme internationale des symboles graphiques des circuits hydrauliques et pneumatiques."
      },
      {
       "terme": "Distributeur",
       "def": "Composant qui oriente le fluide entre ses orifices selon sa position."
      },
      {
       "terme": "Normalement ouvert",
       "def": "Se dit d'un distributeur qui laisse passer le fluide lorsqu'il n'est pas commandé."
      },
      {
       "terme": "Normalement fermé",
       "def": "Se dit d'un distributeur qui bloque le fluide lorsqu'il n'est pas commandé."
      },
      {
       "terme": "Clapet anti-retour",
       "def": "Composant qui n'autorise le passage du fluide que dans un sens."
      },
      {
       "terme": "Accumulateur",
       "def": "Réservoir qui stocke temporairement un fluide sous pression."
      },
      {
       "terme": "Circuit en X",
       "def": "Freinage à deux circuits reliant chacun une roue avant et la roue arrière opposée."
      },
      {
       "terme": "Schéma bloc",
       "def": "Représentation des éléments d'un système et des informations qu'ils échangent."
      }
     ]
    },
    {
     "id": "bmv-doc-rapports-diagnostic",
     "titre": "Rapports d'outil de diagnostic, relevés de paramètres et oscillogrammes",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Lire un rapport de lecture de codes défaut et en extraire les informations exploitables",
      "Interpréter un tableau de paramètres en le comparant aux valeurs attendues",
      "Exploiter un oscillogramme imprimé ou décrit",
      "Suivre un arbre de diagnostic constructeur",
      "Rédiger une conclusion argumentée à partir de plusieurs documents de diagnostic"
     ],
     "sections": [
      {
       "titre": "Les documents produits par le diagnostic",
       "contenu": "<p>L'outil de diagnostic et les appareils de mesure produisent des documents que le technicien doit savoir lire, et qu'il retrouve dans les dossiers d'examen : rapport de <strong>test global</strong> (liste des calculateurs et de leurs codes), détail d'un <strong>code défaut</strong> avec ses données figées, <strong>tableau de paramètres</strong> relevés à un instant ou enregistrés dans le temps, <strong>oscillogramme</strong>, <strong>arbre de diagnostic</strong> du constructeur. Ces documents sont des faits ; l'analyse consiste à les confronter au fonctionnement attendu pour en tirer des hypothèses, puis une conclusion.</p>"
      },
      {
       "titre": "Lire un rapport de codes défaut",
       "contenu": "<p>Un rapport de test global présente, pour chaque calculateur, son état de communication et la liste de ses codes. Pour chaque code, on relève :</p>\n<ul>\n<li>le <strong>code</strong> et son <strong>libellé</strong> (par exemple P0101 : plage ou performance du débitmètre d'air) ;</li>\n<li>le <strong>statut</strong> : présent (actif), intermittent, mémorisé (passé) ;</li>\n<li>le <strong>compteur d'occurrences</strong> et le kilométrage de première et de dernière apparition, s'ils sont disponibles ;</li>\n<li>les <strong>données figées</strong> : régime, température, charge, vitesse, tension batterie au moment de l'apparition.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> trier un rapport de codes.<br>1. Repérer les calculateurs muets et les codes de communication (codes U) : ils peuvent expliquer d'autres codes.<br>2. Repérer les codes liés à la tension d'alimentation (tension trop basse) : une batterie faible au démarrage génère des codes multiples sans rapport avec le symptôme.<br>3. Isoler les codes présents liés au symptôme du client.<br>4. Chercher les codes qui partagent un élément commun (même alimentation 5 V, même masse, même connecteur).<br>5. Lire les données figées pour connaître les conditions d'apparition.<br>6. Noter tous les codes avant tout effacement.</div>"
      },
      {
       "titre": "Interpréter un tableau de paramètres",
       "contenu": "<p>Les paramètres sont les valeurs que le calculateur lit ou calcule. On les compare à des <strong>valeurs attendues</strong> issues de la documentation, de la physique (une température moteur ne peut pas être inférieure à la température extérieure après une nuit) ou de la comparaison entre paramètres liés (la masse d'air mesurée doit être cohérente avec la cylindrée et le régime). La comparaison avec un véhicule identique en bon état est aussi une référence utile.</p>\n<p>Les paramètres se lisent par groupes cohérents : température d'air et de liquide de refroidissement moteur froid (elles doivent être proches), position de la pédale et ouverture du papillon, consigne et mesure de pression de rampe, consigne et mesure de pression de suralimentation. Un écart entre une <strong>consigne</strong> et une <strong>mesure</strong> est un indice fort : il montre que le calculateur demande quelque chose que le système ne réalise pas.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un paramètre est la valeur « vue » par le calculateur. Si elle est fausse, il reste à savoir si la grandeur physique est réellement anormale ou si c'est la mesure (capteur, câblage) qui est fausse. Une mesure indépendante (manomètre, thermomètre) permet de trancher.</div>"
      },
      {
       "titre": "Exploiter un oscillogramme",
       "contenu": "<p>Un oscillogramme imprimé porte ses réglages (volts par division, temps par division, voie et point de mesure). On commence par vérifier qu'il a été pris au bon endroit et dans les bonnes conditions, puis on mesure amplitude, période et rapport cyclique, et l'on compare la forme à celle attendue. Les défauts typiques sont : signal absent, amplitude trop faible, niveau bas qui ne descend pas à 0 V (mauvaise masse), fronts déformés, impulsions manquantes, parasites.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un oscillogramme « joli » ne prouve rien s'il n'a pas été comparé à une référence. Et un signal correct au connecteur du capteur peut ne pas arriver correct au calculateur : on mesure aux deux extrémités si nécessaire.</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "<p>Exemple construit pour l'apprentissage. Véhicule diesel à rampe commune, 148 000 km. Le client se plaint d'un manque de puissance en accélération franche, surtout en côte, avec allumage du voyant de défaut moteur.</p>\n<h4>Document 1 : extrait du rapport de codes, calculateur moteur</h4>\n<table>\n<thead><tr><th>Code</th><th>Libellé</th><th>Statut</th><th>Occurrences</th></tr></thead>\n<tbody>\n<tr><td>P0299</td><td>Pression de suralimentation insuffisante</td><td>Présent</td><td>14</td></tr>\n<tr><td>P0562</td><td>Tension système basse</td><td>Mémorisé</td><td>1</td></tr>\n</tbody>\n</table>\n<p>Données figées du P0299 : régime 2 450 tr/min ; charge 92 % ; température liquide 88 °C ; vitesse 74 km/h ; tension 14,1 V.</p>\n<h4>Document 2 : paramètres relevés en essai, pleine charge, en 3e</h4>\n<table>\n<thead><tr><th>Régime (tr/min)</th><th>Pression de suralimentation consigne (mbar absolus)</th><th>Pression mesurée (mbar absolus)</th><th>Commande de l'actionneur de turbo (%)</th></tr></thead>\n<tbody>\n<tr><td>1 500</td><td>1 650</td><td>1 600</td><td>78</td></tr>\n<tr><td>2 000</td><td>2 200</td><td>1 820</td><td>92</td></tr>\n<tr><td>2 500</td><td>2 350</td><td>1 850</td><td>95</td></tr>\n<tr><td>3 000</td><td>2 300</td><td>1 840</td><td>95</td></tr>\n</tbody>\n</table>\n<h4>Document 3 : extrait de l'arbre de diagnostic constructeur pour P0299</h4>\n<p>Étape 1 : contrôler l'étanchéité du circuit d'air entre turbocompresseur et collecteur d'admission (durites, échangeur, colliers) ; si fuite, réparer. Étape 2 : contrôler le fonctionnement de l'actionneur du turbocompresseur (débattement complet, commande, alimentation en dépression ou électrique) ; si défaut, réparer. Étape 3 : contrôler la cohérence du capteur de pression de suralimentation, moteur arrêté, avec la pression atmosphérique ; si écart supérieur à la tolérance, remplacer le capteur. Étape 4 : contrôler le turbocompresseur (jeu, état des aubes, encrassement de la géométrie variable).</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Tri des codes.</strong> Le P0562 est mémorisé, avec une seule occurrence : probablement une chute de tension ponctuelle (démarrage par temps froid). Il ne peut pas expliquer le manque de puissance, mais l'état de la batterie sera contrôlé. Le P0299 est présent, répété 14 fois, et correspond exactement au symptôme : forte charge, régime moyen.</p>\n<p><strong>2. Lecture des paramètres.</strong> À 1 500 tr/min, consigne et mesure sont proches. À partir de 2 000 tr/min, la pression mesurée plafonne vers 1 850 mbar alors que la consigne monte à 2 350 mbar, et le calculateur commande l'actionneur presque au maximum (92 à 95 %). Le calculateur « demande » donc toute la suralimentation possible, et le système ne la fournit pas : il ne s'agit pas d'une erreur de consigne.</p>\n<p><strong>3. Hypothèses compatibles.</strong> Fuite d'air sous pression après le turbocompresseur (la pression ne peut pas monter), actionneur ou mécanisme de géométrie variable qui n'atteint pas sa position (encrassement, grippage), capteur de pression qui sous-évalue la pression réelle, turbocompresseur détérioré. Un capteur défaillant donnerait souvent un écart dès le régime bas et à l'arrêt ; ici la cohérence à 1 500 tr/min le rend moins probable, sans l'exclure.</p>\n<p><strong>4. Protocole proposé.</strong> Suivre l'arbre du constructeur, dans l'ordre, car il va du plus simple au plus complexe : contrôle visuel et test de fuite du circuit d'air (traces d'huile sur une durite, collier desserré, échangeur percé), contrôle du débattement de l'actionneur par test d'actionneur et observation de la tige, contrôle du capteur moteur arrêté (il doit indiquer la pression atmosphérique, environ 1 000 mbar selon l'altitude et la météo), puis contrôle du turbocompresseur.</p>\n<p><strong>5. Conclusion rédigée.</strong> « Défaut de suralimentation confirmé en charge au-delà de 2 000 tr/min, avec actionneur commandé à 95 %. Contrôles à réaliser dans l'ordre de l'arbre constructeur ; ne pas remplacer le turbocompresseur avant d'avoir exclu une fuite du circuit d'air et un défaut d'actionneur. Contrôler aussi la batterie (code de tension basse mémorisé). »</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le remplacement d'un turbocompresseur coûte cher ; un turbocompresseur neuf monté sur un circuit qui fuit ou avec un actionneur grippé ne résoudra rien et sera contesté par le client. L'analyse documentaire est ce qui permet d'éviter ce retour atelier.</div>"
      },
      {
       "titre": "Rédiger à partir de documents de diagnostic",
       "contenu": "<p>À l'atelier comme à l'examen, la réponse attendue n'est pas une liste de valeurs recopiées, mais un raisonnement : <strong>constat</strong> (ce que montrent les documents, avec les valeurs clés), <strong>interprétation</strong> (ce que cela signifie au regard du fonctionnement), <strong>hypothèses</strong> classées, <strong>contrôles</strong> proposés avec les résultats attendus, puis <strong>conclusion</strong> prudente si les éléments ne suffisent pas. Les valeurs citées doivent toujours être accompagnées de leur unité et de la référence à laquelle on les compare.</p>\n<p>Les enregistrements en roulage, de plus en plus utilisés, se présentent sous forme de courbes superposées en fonction du temps. Leur lecture suit la même logique : repérer l'instant où le symptôme apparaît, puis observer quels paramètres changent juste avant. Une chute de la pression de rampe qui précède la perte de puissance oriente vers l'alimentation en carburant ; une montée normale de la pression suivie d'une coupure oriente vers une protection déclenchée par le calculateur.</p>"
      }
     ],
     "points_cles": [
      "Rapport de codes, données figées, paramètres, oscillogrammes et arbres de diagnostic sont des faits à interpréter",
      "On trie les codes : communication, tension d'alimentation, codes liés au symptôme",
      "Les données figées donnent les conditions d'apparition",
      "Un écart entre consigne et mesure est un indice fort",
      "Un paramètre est la valeur vue par le calculateur ; une mesure indépendante permet de trancher",
      "Un oscillogramme se compare toujours à une référence",
      "L'arbre de diagnostic se suit dans l'ordre, du plus simple au plus complexe",
      "Constat, interprétation, hypothèses, contrôles, conclusion : la structure d'une analyse"
     ],
     "lexique": [
      {
       "terme": "Test global",
       "def": "Interrogation de tous les calculateurs du véhicule pour lister leur état et leurs codes."
      },
      {
       "terme": "Statut d'un code",
       "def": "Indication du caractère présent, intermittent ou mémorisé d'un défaut."
      },
      {
       "terme": "Paramètre",
       "def": "Valeur lue ou calculée par un calculateur et affichée par l'outil de diagnostic."
      },
      {
       "terme": "Consigne",
       "def": "Valeur que le calculateur cherche à obtenir."
      },
      {
       "terme": "Mesure",
       "def": "Valeur effectivement relevée par un capteur."
      },
      {
       "terme": "Pression absolue",
       "def": "Pression mesurée par rapport au vide, incluant la pression atmosphérique."
      },
      {
       "terme": "Actionneur de turbocompresseur",
       "def": "Organe qui commande la soupape de décharge ou la géométrie variable."
      },
      {
       "terme": "Arbre de diagnostic",
       "def": "Protocole de contrôles successifs fourni par le constructeur pour un code ou un symptôme."
      }
     ]
    },
    {
     "id": "bmv-doc-proces-verbal-notes",
     "titre": "Procès-verbal de contrôle technique, notes techniques et fiches de données de sécurité",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Lire un procès-verbal de contrôle technique et classer les défaillances relevées",
      "Transformer un procès-verbal en plan d'intervention chiffrable",
      "Exploiter une note technique ou une campagne de rappel du constructeur",
      "Extraire d'une fiche de données de sécurité les informations nécessaires au poste de travail",
      "Hiérarchiser des documents de sources différentes pour préparer une intervention"
     ],
     "sections": [
      {
       "titre": "Des documents venus d'ailleurs",
       "contenu": "<p>Certains documents qui arrivent à l'atelier ne sont pas produits par l'entreprise : le <strong>procès-verbal de contrôle technique</strong> remis par le centre agréé, les <strong>notes techniques</strong> et campagnes publiées par le constructeur, les <strong>fiches de données de sécurité</strong> des fournisseurs de produits. Ils ont chacun une structure codifiée et une portée précise : le premier constate, le deuxième prescrit, le troisième protège. Savoir les lire rapidement est indispensable pour préparer une intervention complète et sûre.</p>"
      },
      {
       "titre": "Structure d'un procès-verbal de contrôle technique",
       "contenu": "<p>Le procès-verbal comporte : l'identification du centre et du contrôleur, l'identification du véhicule (immatriculation, VIN, kilométrage relevé), la nature de la visite (périodique, contre-visite), le résultat (favorable, défavorable pour défaillance majeure, défavorable pour défaillance critique), la date limite de la contre-visite le cas échéant, puis la liste des défaillances. Chaque défaillance est désignée par un <strong>code</strong> qui renvoie à la fonction contrôlée et au point de contrôle, un libellé, une localisation (avant, arrière, gauche, droite) et un niveau (mineure, majeure, critique). Le procès-verbal mentionne aussi les mesures réalisées : efficacité et déséquilibre de freinage, opacité des fumées ou teneurs en gaz, résultat de la lecture du diagnostic embarqué.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le contrôleur constate, il ne répare pas et ne désigne pas la pièce à remplacer. « Déséquilibre important du freinage de l'essieu arrière » est un constat ; c'est à l'atelier d'en trouver la cause.</div>"
      },
      {
       "titre": "Méthode : du procès-verbal au plan d'intervention",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un procès-verbal défavorable.<br>1. Relever le résultat et la date limite de contre-visite : elle fixe le délai.<br>2. Classer les défaillances par niveau : critiques et majeures d'abord (obligatoires pour la contre-visite), mineures ensuite (à proposer).<br>3. Pour chaque défaillance, reformuler le constat en hypothèses de causes et en contrôles à réaliser.<br>4. Repérer les défaillances qui peuvent avoir une cause commune (feu stop et feu arrière éteints du même côté : masse commune possible).<br>5. Établir la liste des pièces probables et des temps pour le devis, en séparant ce qui est certain et ce qui dépend d'un contrôle.<br>6. Prévoir le contrôle final dans les conditions du contrôle technique (banc de freinage, régloscope, lecture des codes).</div>"
      },
      {
       "titre": "Exemple commenté : le procès-verbal",
       "contenu": "<p>Exemple construit pour l'apprentissage. Utilitaire léger diesel, 7 ans, 186 400 km. Résultat : défavorable pour défaillances majeures, contre-visite avant deux mois.</p>\n<table>\n<thead><tr><th>Fonction</th><th>Défaillance constatée</th><th>Niveau</th></tr></thead>\n<tbody>\n<tr><td>Freinage</td><td>Frein de service : déséquilibre important entre les roues d'un même essieu, arrière</td><td>Majeure</td></tr>\n<tr><td>Freinage</td><td>Disque de frein légèrement usé, AVG et AVD</td><td>Mineure</td></tr>\n<tr><td>Éclairage et signalisation</td><td>Feu stop arrière droit : ne fonctionne pas</td><td>Majeure</td></tr>\n<tr><td>Liaisons au sol</td><td>Soufflet de transmission : détérioré, AVG</td><td>Mineure</td></tr>\n<tr><td>Nuisances</td><td>Fuite d'huile moteur : suintement sans goutte</td><td>Mineure</td></tr>\n<tr><td>Identification et OBD</td><td>Lecture OBD : voyant non allumé, aucun code</td><td>Sans défaillance</td></tr>\n</tbody>\n</table>\n<p>Mesures du banc (extrait) : essieu arrière, effort gauche 1,15 kN, effort droit 0,62 kN.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Délai et priorité.</strong> Deux défaillances majeures conditionnent la contre-visite : le déséquilibre du freinage arrière et le feu stop arrière droit. L'intervention doit être planifiée dans le délai de deux mois, et le client informé que le véhicule doit être réparé rapidement.</p>\n<p><strong>2. Déséquilibre arrière.</strong> Calcul du déséquilibre : (1,15 − 0,62) / 1,15 ≈ 0,46, soit environ 46 % par rapport à la roue la plus efficace, valeur très supérieure à ce qui est admis. La roue droite freine peu. Hypothèses pour un frein arrière (à tambour ou à disque selon le véhicule) : cylindre de roue ou piston d'étrier grippé, garnitures souillées par une fuite de liquide ou de graisse de roulement, régleur automatique bloqué, câble de frein de stationnement grippé qui maintient mal le réglage. Contrôles : dépose du tambour ou contrôle de l'étrier, recherche de fuite, contrôle du coulissement, mesure des épaisseurs. On remplace les garnitures des deux côtés de l'essieu si elles sont souillées, jamais d'un seul côté.</p>\n<p><strong>3. Feu stop arrière droit.</strong> Le feu stop gauche fonctionne (sinon il serait relevé) : le contacteur de stop et l'alimentation commune sont donc a priori bons. Hypothèses : lampe ou module à LED défaillant, connecteur oxydé du feu arrière droit, masse du feu arrière droit. Le procès-verbal ne signale pas le feu de position arrière droit : s'il partage la même masse et fonctionne, la masse est probablement bonne. Contrôle par mesure au connecteur du feu, pédale appuyée.</p>\n<p><strong>4. Défaillances mineures.</strong> Elles n'empêchent pas la contre-visite favorable mais doivent être proposées : soufflet de transmission avant gauche (à remplacer rapidement pour préserver le joint), disques avant à mesurer (une usure « légère » relevée par le contrôleur peut déjà approcher la cote minimale), suintement d'huile à localiser et surveiller.</p>\n<p><strong>5. Plan d'intervention.</strong> Certain : recherche et réparation du déséquilibre arrière, réparation du feu stop. À chiffrer après contrôle : pièces de frein arrière selon constat. À proposer : soufflet de transmission, disques et plaquettes avant si les cotes l'imposent. Contrôle final : banc de freinage et fonctionnement de l'éclairage, puis remise du compte rendu au client pour la contre-visite.</p>"
      },
      {
       "titre": "Les notes techniques et campagnes",
       "contenu": "<p>Une <strong>note technique</strong> (ou bulletin de service) du constructeur décrit une panne connue, ses symptômes, les véhicules concernés (plages de VIN ou de dates de fabrication) et la solution : nouvelle pièce, modification, mise à jour logicielle, procédure de réparation. Une <strong>campagne de rappel</strong> impose une intervention sur tous les véhicules d'une série, généralement pour un motif de sécurité, gratuitement pour le client. Ces documents se lisent en vérifiant d'abord le domaine d'application, puis le symptôme décrit, puis la solution et ses conditions (garantie, prise en charge).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de démonter un organe pour une panne inhabituelle, le réflexe est de consulter les notes techniques du constructeur avec le VIN. Une panne qui demanderait des heures de recherche peut y être décrite avec sa solution, parfois une simple mise à jour.</div>"
      },
      {
       "titre": "La fiche de données de sécurité au poste de travail",
       "contenu": "<p>La FDS, dont les rubriques ont été présentées dans le cours sur la prévention, s'exploite aussi comme document d'analyse : face à un produit nouveau (nettoyant pour circuit d'admission, additif, colle de vitrage), on en extrait en quelques minutes ce qui conditionne le poste de travail. Les pictogrammes de la rubrique 2 indiquent les dangers ; la rubrique 8 donne les protections ; la rubrique 7 et la rubrique 10 (stabilité et réactivité) disent ce qui ne doit pas être mélangé ou chauffé ; la rubrique 13 indique la filière d'élimination.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un produit en aérosol porte souvent la mention « aérosol extrêmement inflammable ». Son usage près d'un échappement chaud, d'un poste de soudage ou d'une baladeuse non protégée peut provoquer un incendie. L'étiquette du flacon reprend les éléments essentiels de la FDS ; la lire avant usage n'est pas facultatif.</div>"
      },
      {
       "titre": "Croiser des documents de sources différentes",
       "contenu": "<p>Dans la réalité de l'atelier, ces documents arrivent ensemble. Reprenons l'utilitaire de l'exemple : en saisissant son VIN sur le portail du constructeur, le technicien découvre une note technique relative à des grippages de pistons d'étriers arrière sur une série de fabrication, avec un nouveau kit de réparation comprenant une graisse spécifique. Le kit est accompagné de la FDS de cette graisse et de celle du nettoyant de freins utilisé pour dégraisser les pièces. Le plan d'intervention s'enrichit alors : la cause probable du déséquilibre est connue, la pièce à commander est la référence modifiée, et les produits à manipuler imposent gants en nitrile, lunettes et aspiration, sans soufflage à l'air comprimé.</p>\n<p>La hiérarchie entre documents est simple : la <strong>réglementation</strong> (contrôle technique) fixe ce qui doit être obtenu, le <strong>constructeur</strong> (méthodes, notes techniques) fixe comment l'obtenir sur ce véhicule, le <strong>fournisseur</strong> (FDS) fixe comment manipuler ses produits en sécurité. En cas de contradiction apparente, par exemple une note technique plus récente qu'une méthode, on applique le document le plus récent dont le domaine d'application couvre le véhicule, et l'on interroge l'assistance technique du constructeur en cas de doute.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un dossier d'intervention complet réunit le constat (procès-verbal ou symptôme), la solution prescrite (méthode et note technique) et les conditions de sécurité (FDS, consignation). Il manque une dimension à l'analyse si l'un de ces trois éléments est absent.</div>"
      }
     ],
     "points_cles": [
      "Le procès-verbal constate ; l'atelier recherche les causes et répare",
      "Défaillances majeures et critiques conditionnent la contre-visite",
      "Le déséquilibre se calcule par rapport à la roue la plus efficace",
      "Les garnitures souillées se remplacent sur les deux côtés d'un essieu",
      "On cherche les causes communes entre plusieurs défaillances",
      "Une note technique se lit en vérifiant d'abord son domaine d'application",
      "Les campagnes de rappel sont gratuites pour le client",
      "La FDS conditionne protections, stockage, incompatibilités et élimination"
     ],
     "lexique": [
      {
       "terme": "Procès-verbal de contrôle technique",
       "def": "Document remis à l'issue du contrôle qui liste les défaillances constatées et le résultat."
      },
      {
       "terme": "Défaillance majeure",
       "def": "Défaut susceptible de compromettre la sécurité ou l'environnement, imposant une contre-visite."
      },
      {
       "terme": "Déséquilibre de freinage",
       "def": "Écart d'effort de freinage entre les deux roues d'un même essieu."
      },
      {
       "terme": "Contre-visite",
       "def": "Nouveau contrôle limité aux défaillances ayant motivé le résultat défavorable."
      },
      {
       "terme": "Note technique",
       "def": "Document du constructeur décrivant une panne connue et sa solution."
      },
      {
       "terme": "Campagne de rappel",
       "def": "Intervention imposée par le constructeur sur une série de véhicules, en général pour la sécurité."
      },
      {
       "terme": "Fiche de données de sécurité",
       "def": "Document en 16 rubriques décrivant les dangers d'un produit et les précautions."
      },
      {
       "terme": "Plan d'intervention",
       "def": "Liste ordonnée et chiffrable des opérations à réaliser sur un véhicule."
      }
     ]
    }
   ]
  }
 ]
};
