/* Polymates — Bac pro Aviation générale — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-aviation-generale"] = {
 "id": "bp-aviation-generale",
 "nom": "Aviation générale",
 "icone": "🎓",
 "couleur": "#7aa0d8",
 "intro": "Le baccalauréat professionnel Aviation générale forme des mécaniciens et techniciens de maintenance des aéronefs légers (avions non pressurisés à moteur à pistons de moins de deux tonnes) ; il couvre le contenu de formation de la licence de maintenance Part-66 B3 et mène aux métiers de mécanicien avion en aéroclub, en atelier d'entretien d'aviation générale ou en entreprise de travail aérien. Ce cours rassemble les savoirs associés de la première et de la terminale, en prolongement du cours de seconde de la famille des métiers de l'aéronautique. Il comprend un cours théorique (réglementation, qualité et facteurs humains, sciences appliquées à l'aéronef, technologie de l'avion léger, matériaux et pratiques de maintenance) et un bloc d'analyse de documents consacré aux documents techniques et de navigabilité exploités à l'épreuve écrite d'analyse de systèmes d'aéronef.",
 "parties": [
  {
   "titre": "Partie 1 — Réglementation, qualité et facteurs humains",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bavg-reglementation-navigabilite",
     "titre": "Le cadre réglementaire du maintien de la navigabilité en aviation générale",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Situer les textes européens qui encadrent l'entretien d'un avion léger, du règlement de base aux annexes techniques.",
      "Identifier les aéronefs relevant de la Part-ML et les acteurs responsables de leur navigabilité.",
      "Distinguer les rôles du propriétaire, de l'organisme de gestion de navigabilité, de l'organisme d'entretien et du personnel de certification.",
      "Décrire les catégories de licence Part-66 utiles en aviation générale, en particulier la licence B3.",
      "Relier une intervention d'atelier à l'obligation réglementaire qui la justifie."
     ],
     "sections": [
      {
       "titre": "Une chaîne de textes, du règlement européen à l'atelier",
       "contenu": "\n<p>Un avion léger ne vole pas seulement parce qu'il est en bon état : il vole parce qu'il est <strong>navigable</strong>, c'est-à-dire conforme à une définition approuvée et en état d'être utilisé en sécurité. La navigabilité se prouve par des documents, et les règles qui fixent ces documents sont européennes. Le mécanicien d'aviation générale doit connaître cette chaîne de textes, car chaque geste d'atelier (une inspection, un remplacement de pièce, une signature) répond à une exigence précise.</p>\n<p>La chaîne s'organise en trois niveaux :</p>\n<ul>\n<li>le <strong>règlement de base</strong>, le règlement (UE) 2018/1139, fixe les grands principes de la sécurité aérienne en Europe et crée l'<strong>Agence de l'Union européenne pour la sécurité aérienne</strong> (AESA, en anglais EASA) ;</li>\n<li>les <strong>règlements d'application</strong> détaillent les exigences par domaine. Pour l'entretien, il s'agit du règlement (UE) n° 1321/2014 relatif au <strong>maintien de la navigabilité</strong>, découpé en annexes appelées « Parts » ;</li>\n<li>les <strong>moyens acceptables de conformité</strong> (AMC) et les <strong>documents d'orientation</strong> (GM), publiés par l'AESA, expliquent comment satisfaire chaque exigence.</li>\n</ul>\n<p>En France, l'autorité nationale est la <strong>Direction générale de l'aviation civile</strong> (DGAC), dont la Direction de la sécurité de l'aviation civile (DSAC) assure la surveillance des organismes et la délivrance des licences ; une partie des tâches de surveillance est confiée à l'<strong>OSAC</strong> (Organisme pour la sécurité de l'aviation civile).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le règlement fixe l'obligation (le « quoi »), les AMC proposent une manière reconnue de s'y conformer (le « comment »). Un organisme qui choisit une autre méthode que l'AMC doit la faire accepter par l'autorité.</div>\n"
      },
      {
       "titre": "Les annexes du règlement sur le maintien de la navigabilité",
       "contenu": "\n<p>Le règlement (UE) n° 1321/2014 rassemble plusieurs annexes, chacune visant un public différent. Le tableau ci-dessous présente celles qu'un technicien d'aviation générale rencontre.</p>\n<table>\n<thead><tr><th>Annexe</th><th>Nom usuel</th><th>Objet</th></tr></thead>\n<tbody>\n<tr><td>Annexe I</td><td>Part-M</td><td>Maintien de la navigabilité des aéronefs qui ne relèvent pas de la Part-ML (avions plus lourds ou complexes)</td></tr>\n<tr><td>Annexe II</td><td>Part-145</td><td>Agrément des organismes d'entretien, surtout pour le transport aérien commercial et les aéronefs complexes</td></tr>\n<tr><td>Annexe III</td><td>Part-66</td><td>Licences du personnel de certification</td></tr>\n<tr><td>Annexe IV</td><td>Part-147</td><td>Agrément des organismes de formation à l'entretien</td></tr>\n<tr><td>Annexe Vb</td><td>Part-ML</td><td>Maintien de la navigabilité allégé pour les aéronefs légers</td></tr>\n<tr><td>Annexe Vc</td><td>Part-CAMO</td><td>Organismes de gestion du maintien de la navigabilité (aéronefs complexes ou exploitation commerciale)</td></tr>\n<tr><td>Annexe Vd</td><td>Part-CAO</td><td>Organismes combinés de navigabilité, pouvant à la fois entretenir et gérer la navigabilité d'aéronefs légers</td></tr>\n</tbody>\n</table>\n<p>La conception et la fabrication des aéronefs et des pièces relèvent d'un autre texte, la <strong>Part-21</strong> (règlement (UE) n° 748/2012). Elle intéresse le mécanicien parce que c'est elle qui définit le <strong>certificat de type</strong> de l'avion, les <strong>modifications</strong> et <strong>réparations</strong> approuvées et le certificat libératoire des pièces neuves, le formulaire <strong>EASA Form 1</strong>.</p>\n"
      },
      {
       "titre": "La Part-ML : un régime adapté aux avions légers",
       "contenu": "\n<p>La <strong>Part-ML</strong> s'applique, en simplifiant, aux avions dont la masse maximale au décollage ne dépasse pas 2 730 kg, aux hélicoptères légers de quatre places au plus, aux planeurs, motoplaneurs et ballons, lorsqu'ils ne sont pas exploités par un transporteur aérien titulaire d'une licence d'exploitation. C'est le cœur de l'aviation générale : avions d'aéroclub, avions de propriétaires privés, remorqueurs de planeurs, avions d'école.</p>\n<p>Ses principales caractéristiques sont les suivantes :</p>\n<ul>\n<li>un <strong>programme d'entretien de l'aéronef</strong> (AMP) peut être établi et déclaré par le propriétaire lui-même, à partir des recommandations du constructeur ou d'un <strong>programme d'inspection minimal</strong> (MIP) défini par la Part-ML ;</li>\n<li>le pilote-propriétaire peut réaliser une liste limitée de tâches simples, définie dans un appendice de la Part-ML (remplacement d'une ampoule, d'un pneu, regarnissage en huile…) ; il ne peut pas réaliser de tâche critique ni de tâche exigeant un outillage spécial ;</li>\n<li>l'entretien peut être effectué par un organisme agréé (Part-CAO ou Part-145) ou par un <strong>personnel de certification indépendant</strong> titulaire d'une licence Part-66 adaptée ;</li>\n<li>la navigabilité est attestée chaque année par un <strong>certificat d'examen de navigabilité</strong> (ARC, Airworthiness Review Certificate).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> Part-ML ne veut pas dire « absence de règles ». Les consignes de navigabilité, les pièces à durée de vie limitée et les réparations restent obligatoires, et chaque intervention doit être tracée et signée. Un avion dont une consigne n'est pas appliquée n'est pas navigable, même s'il paraît en parfait état.</div>\n"
      },
      {
       "titre": "Qui est responsable de quoi ?",
       "contenu": "\n<p>La sécurité d'un avion léger repose sur une répartition claire des responsabilités. Confondre les rôles est une source classique d'erreur, par exemple lorsqu'un mécanicien croit qu'une consigne a été suivie « par quelqu'un d'autre ».</p>\n<table>\n<thead><tr><th>Acteur</th><th>Responsabilité principale</th><th>Exemple concret</th></tr></thead>\n<tbody>\n<tr><td>Propriétaire (ou exploitant)</td><td>Responsable du maintien de la navigabilité, sauf s'il l'a confié par contrat à un organisme</td><td>Un aéroclub doit s'assurer que chacun de ses avions a un programme d'entretien et un ARC valide</td></tr>\n<tr><td>Organisme CAO ou CAMO</td><td>Gestion de la navigabilité : suivi du programme, des consignes, des potentiels, examen de navigabilité</td><td>Le gestionnaire prévoit la visite des 100 h et la consigne applicable à l'hélice</td></tr>\n<tr><td>Organisme d'entretien (CAO ou Part-145)</td><td>Réaliser les travaux commandés selon des données approuvées</td><td>L'atelier remplace un démarreur selon le manuel de maintenance</td></tr>\n<tr><td>Personnel de certification</td><td>Attester que le travail a été correctement réalisé en signant le certificat de remise en service</td><td>Le technicien titulaire d'une licence B3 signe le CRS après la visite</td></tr>\n<tr><td>Pilote commandant de bord</td><td>Visite prévol et vérification que l'avion est apte au vol</td><td>Il refuse l'avion si un défaut est noté sans action corrective</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un petit atelier d'aviation générale, les rôles se cumulent souvent : la même structure, agréée Part-CAO, gère la navigabilité d'une vingtaine d'avions d'aéroclub, réalise leur entretien et effectue leur examen annuel. Les procédures de l'organisme (son « exposé ») précisent alors qui signe quoi, et un mécanicien non habilité ne signe jamais un CRS, même pour une tâche simple.</div>\n"
      },
      {
       "titre": "La licence Part-66 et le personnel de certification",
       "contenu": "\n<p>La <strong>Part-66</strong> définit des licences de maintenance aéronautique par catégories. Celles qui concernent l'aviation générale sont présentées ci-dessous.</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Aéronefs couverts</th><th>Remarque</th></tr></thead>\n<tbody>\n<tr><td>B1.2</td><td>Avions à moteur à pistons</td><td>Licence complète « mécanique et structure », sans limite de masse</td></tr>\n<tr><td>B3</td><td>Avions à moteur à pistons, non pressurisés, de masse maximale au décollage inférieure ou égale à 2 000 kg</td><td>Licence visée par le bac pro Aviation générale</td></tr>\n<tr><td>L</td><td>Planeurs, motoplaneurs, ballons, dirigeables et certains avions très légers, selon des sous-catégories</td><td>Licence dédiée aux aéronefs les plus simples</td></tr>\n<tr><td>B2 / B2L</td><td>Avionique et systèmes électriques</td><td>B2L : version limitée à certains systèmes</td></tr>\n</tbody>\n</table>\n<p>Obtenir une licence suppose de réussir des <strong>examens de modules</strong> (mathématiques, physique, électricité, matériaux, pratiques de maintenance, aérodynamique, facteurs humains, législation, structures et systèmes, moteur à pistons, hélice) et de justifier d'une <strong>expérience pratique</strong> dont la durée est fixée par la Part-66 et peut être réduite après une formation technique reconnue. Le référentiel du bac pro Aviation générale couvre le contenu de formation de la licence B3, ce qui facilite ensuite le passage des modules.</p>\n<p>La licence seule ne suffit pas pour signer dans un organisme : il faut aussi une <strong>autorisation de certification</strong> délivrée par l'organisme, après vérification de la formation au type d'avion, de l'expérience récente et de la connaissance des procédures internes.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> licence (délivrée par l'autorité) + autorisation (délivrée par l'organisme) + expérience récente = droit de signer un certificat de remise en service. Il manque un seul de ces éléments : la signature n'a aucune valeur.</div>\n"
      },
      {
       "titre": "L'examen de navigabilité et le cycle annuel d'un avion léger",
       "contenu": "\n<p>Un avion de la Part-ML possède un <strong>certificat de navigabilité</strong> (CDN) délivré une fois pour toutes, sans date d'expiration. Sa validité est entretenue par le <strong>certificat d'examen de navigabilité</strong> (ARC), valable un an. L'examen de navigabilité comprend une revue documentaire et une inspection physique de l'avion :</p>\n<ul>\n<li>revue documentaire : programme d'entretien à jour, travaux réalisés, consignes de navigabilité appliquées, pièces à durée de vie limitée dans leurs limites, modifications et réparations approuvées, devis de masse et centrage valide, manuel de vol à jour ;</li>\n<li>inspection physique : conformité de l'avion à sa configuration documentée (plaques, marquages, équipements installés, absence de défaut évident).</li>\n</ul>\n<p>L'examen est réalisé par un organisme CAO ou CAMO habilité ou, sous conditions, par un personnel de certification indépendant disposant du privilège correspondant. Il est souvent combiné avec la visite annuelle pour limiter l'immobilisation.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour justifier réglementairement une intervention, remonter la chaîne en quatre questions.<br>1. Quel document a déclenché la tâche ? (programme d'entretien, consigne de navigabilité, compte rendu de défaut du pilote)<br>2. Quelles données approuvées décrivent la tâche ? (manuel de maintenance du constructeur, bulletin, réparation approuvée)<br>3. Qui peut la réaliser ? (pilote-propriétaire si elle figure dans la liste autorisée, sinon un organisme ou un personnel de certification)<br>4. Où est-elle enregistrée ? (carte de travail, livret de l'avion, du moteur ou de l'hélice, certificat de remise en service)<br>Exemple : le remplacement d'un pneu de roulette de nez déclenché par une usure constatée en prévol relève des données du manuel de maintenance, peut être fait par le pilote-propriétaire si la tâche figure dans sa liste, et doit être porté au livret de l'avion avec la référence de la pièce.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les textes réglementaires sont régulièrement amendés. Toujours consulter la version consolidée en vigueur sur le site de l'AESA ou la documentation à jour de l'organisme, jamais un ancien support de cours ou une photocopie.</div>\n"
      }
     ],
     "points_cles": [
      "Le règlement de base (UE) 2018/1139 crée l'AESA ; le règlement (UE) n° 1321/2014 fixe les règles de maintien de la navigabilité.",
      "La Part-ML est le régime allégé des avions légers (jusqu'à 2 730 kg) non exploités par un transporteur aérien.",
      "Le propriétaire est responsable de la navigabilité, sauf s'il la confie par contrat à un organisme CAO ou CAMO.",
      "Les travaux sont réalisés selon des données approuvées et certifiés par un personnel habilité.",
      "La licence B3 couvre les avions à pistons non pressurisés de 2 000 kg au plus.",
      "Signer un CRS exige licence, autorisation de l'organisme et expérience récente.",
      "Le CDN n'expire pas ; l'ARC, renouvelé chaque année, en maintient la validité.",
      "Les consignes de navigabilité restent obligatoires en Part-ML."
     ],
     "lexique": [
      {
       "terme": "Navigabilité",
       "def": "Aptitude d'un aéronef à voler en sécurité, conforme à sa définition approuvée et correctement entretenu."
      },
      {
       "terme": "AESA (EASA)",
       "def": "Agence de l'Union européenne pour la sécurité aérienne, qui rédige les règles techniques communes."
      },
      {
       "terme": "Part-ML",
       "def": "Annexe Vb du règlement (UE) n° 1321/2014, règles allégées de maintien de la navigabilité pour les aéronefs légers."
      },
      {
       "terme": "Part-CAO",
       "def": "Annexe définissant les organismes combinés de navigabilité, qui peuvent entretenir et gérer la navigabilité d'aéronefs légers."
      },
      {
       "terme": "Part-66",
       "def": "Annexe définissant les licences de maintenance aéronautique du personnel de certification."
      },
      {
       "terme": "AMP",
       "def": "Programme d'entretien de l'aéronef : liste des tâches et intervalles applicables à un avion donné."
      },
      {
       "terme": "ARC",
       "def": "Certificat d'examen de navigabilité, valable un an, qui atteste la navigabilité après une revue documentaire et physique."
      },
      {
       "terme": "CRS",
       "def": "Certificat de remise en service signé par un personnel habilité à l'issue d'une intervention."
      },
      {
       "terme": "EASA Form 1",
       "def": "Certificat libératoire autorisé qui accompagne une pièce neuve ou révisée et prouve son origine."
      },
      {
       "terme": "AMC / GM",
       "def": "Moyens acceptables de conformité et documents d'orientation publiés par l'AESA pour appliquer les règlements."
      }
     ]
    },
    {
     "id": "bavg-qualite-tracabilite-crs",
     "titre": "Qualité, pièces, enregistrements et remise en service",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Expliquer le rôle du système qualité d'un organisme d'entretien et la boucle non-conformité, action corrective.",
      "Vérifier l'acceptabilité d'une pièce avant montage (pièce certifiée, pièce standard, pièce suspecte).",
      "Suivre les potentiels et les pièces à durée de vie limitée d'un avion léger.",
      "Identifier les enregistrements obligatoires et les mentions d'un certificat de remise en service.",
      "Distinguer défaut à corriger immédiatement et défaut reporté selon des règles approuvées."
     ],
     "sections": [
      {
       "titre": "Le système qualité d'un organisme d'entretien",
       "contenu": "\n<p>Un organisme d'entretien agréé ne se contente pas de mécaniciens compétents : il doit démontrer, de façon organisée et vérifiable, que chaque travail est fait correctement. C'est le rôle du <strong>système qualité</strong>, décrit dans l'<strong>exposé de l'organisme</strong>, le document qui présente l'organisation, les moyens, les responsables et les procédures approuvées par l'autorité.</p>\n<p>Le système qualité repose sur quatre mécanismes :</p>\n<ul>\n<li>des <strong>procédures écrites</strong> pour toutes les activités (réception des pièces, étalonnage des outils, relève de poste, signature des travaux) ;</li>\n<li>des <strong>audits internes</strong> planifiés, qui vérifient que les procédures sont appliquées ;</li>\n<li>le traitement des <strong>non-conformités</strong> : chaque écart constaté donne lieu à une analyse de cause et à une <strong>action corrective</strong>, dont l'efficacité est vérifiée ;</li>\n<li>le <strong>retour d'expérience</strong> : les événements de sécurité sont signalés (règlement (UE) n° 376/2014 sur les comptes rendus d'événements), analysés et partagés.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en qualité aéronautique, ce qui n'est pas écrit n'a pas été fait. Une inspection réalisée mais non tracée est considérée comme non réalisée par un auditeur, et l'avion n'est pas remis en service.</div>\n"
      },
      {
       "titre": "Accepter une pièce avant de la monter",
       "contenu": "\n<p>Une pièce montée sur un aéronef doit être <strong>acceptable</strong> : on doit pouvoir prouver son origine et son état. Le mécanicien vérifie systématiquement, à la réception ou au moment du montage, les éléments suivants.</p>\n<table>\n<thead><tr><th>Catégorie de pièce</th><th>Preuve attendue</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Pièce neuve ou révisée</td><td>Certificat libératoire EASA Form 1 (ou équivalent reconnu, par exemple formulaire 8130-3 de la FAA dans le cadre des accords bilatéraux)</td><td>Magnéto révisée, démarreur, cylindre</td></tr>\n<tr><td>Pièce standard</td><td>Conformité à une norme reconnue (AN, MS, NAS…) et certificat de conformité du fournisseur</td><td>Boulon AN3, écrou MS21042, rondelle AN960</td></tr>\n<tr><td>Matière première et consommable</td><td>Certificat de conformité et respect de la spécification demandée par les données du constructeur</td><td>Tôle 2024-T3, mastic d'interposition, huile moteur agréée</td></tr>\n<tr><td>Pièce déposée d'un autre aéronef</td><td>Historique connu, état vérifié et certifié par un personnel habilité</td><td>Instrument récupéré lors d'un échange standard</td></tr>\n</tbody>\n</table>\n<p>Une <strong>pièce suspecte</strong> est une pièce dont l'origine ou la conformité est douteuse : marquage effacé ou incohérent, certificat photocopié ou raturé, prix anormalement bas, emballage non d'origine. Elle est mise en <strong>quarantaine</strong> dans une zone identifiée, étiquetée, et signalée selon la procédure de l'organisme.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôle de réception d'une pièce en cinq vérifications.<br>1. Référence : la référence et l'indice sur la pièce correspondent-ils à ceux du catalogue illustré des pièces pour ce numéro de série d'avion ?<br>2. Document : le Form 1 est-il un original, complet, signé, et porte-t-il la même référence et le même numéro de série que la pièce ?<br>3. Statut : neuve, révisée, réparée, inspectée ? Le statut convient-il à l'usage prévu ?<br>4. Potentiel : pour une pièce à durée de vie limitée, les heures ou cycles consommés sont-ils indiqués ?<br>5. État : emballage intact, pas de choc, pas de corrosion, bouchons de protection en place.<br>Une seule réponse négative suffit pour refuser la pièce et la placer en quarantaine.</div>\n"
      },
      {
       "titre": "Potentiels et pièces à durée de vie limitée",
       "contenu": "\n<p>Certains éléments doivent être déposés pour révision ou remplacés après une durée d'utilisation fixée. On parle de <strong>potentiel</strong>, exprimé en heures de fonctionnement, en cycles, en temps calendaire, ou par la première échéance atteinte parmi plusieurs critères.</p>\n<ul>\n<li>Le <strong>TBO</strong> (Time Between Overhaul) d'un moteur à pistons est la durée recommandée par le motoriste entre deux révisions générales. Pour de nombreux moteurs quatre cylindres d'avion léger, il est de l'ordre de 2 000 heures, avec en plus une limite calendaire ; la valeur exacte dépend du modèle et des documents du motoriste.</li>\n<li>Les <strong>pièces à durée de vie limitée</strong> (en anglais Life Limited Parts) ne peuvent pas dépasser leur limite : elles sont retirées définitivement du service.</li>\n<li>Certains équipements ont des échéances calendaires : batterie de la balise de détresse, extincteur, harnais de sécurité, flexibles selon le constructeur.</li>\n</ul>\n<p>Le suivi se fait sur le <strong>livret de l'aéronef</strong>, le <strong>livret moteur</strong> et le <strong>livret hélice</strong>, ainsi que sur une fiche de suivi des potentiels tenue par le gestionnaire de navigabilité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul du potentiel restant.<br>Données : moteur révisé à 3 412 h cellule ; heures cellule actuelles 4 987 h ; TBO du constructeur 2 000 h ; limite calendaire 12 ans ; révision effectuée en mars 2016.<br>1. Heures depuis révision : 4 987 − 3 412 = 1 575 h.<br>2. Potentiel horaire restant : 2 000 − 1 575 = 425 h.<br>3. Échéance calendaire : mars 2016 + 12 ans = mars 2028.<br>4. Conclusion : l'échéance retenue est la première atteinte. Avec 150 h de vol par an, 425 h représentent près de 3 ans : la limite calendaire de mars 2028 sera atteinte la première.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sous le régime Part-ML, le dépassement d'un TBO recommandé peut être autorisé par le programme d'entretien sous conditions d'inspections supplémentaires, mais une limite de vie d'une pièce à durée limitée ou une consigne de navigabilité ne se « prolonge » jamais. Ne jamais confondre recommandation et obligation : vérifier ce que dit le programme d'entretien de l'avion.</div>\n"
      },
      {
       "titre": "Les enregistrements de maintenance",
       "contenu": "\n<p>Chaque intervention laisse une trace écrite qui permet, des années plus tard, de reconstituer l'histoire de l'avion. Les enregistrements comprennent :</p>\n<ul>\n<li>le <strong>compte rendu matériel</strong> ou carnet de route, sur lequel le pilote signale les anomalies constatées en vol ou au sol ;</li>\n<li>les <strong>cartes de travail</strong>, sur lesquelles chaque tâche est décrite, réalisée, signée par l'exécutant et, pour les tâches critiques, contrôlée par un second intervenant ;</li>\n<li>les <strong>livrets</strong> de l'aéronef, du moteur et de l'hélice, qui récapitulent les visites, remplacements, consignes appliquées et réparations ;</li>\n<li>les certificats des pièces montées (Form 1, certificats de conformité) ;</li>\n<li>les rapports de pesée et le devis de masse et centrage en vigueur.</li>\n</ul>\n<p>Une <strong>inspection indépendante</strong> (double contrôle) est exigée après toute intervention sur un système dont une erreur de montage pourrait avoir des conséquences catastrophiques, typiquement les commandes de vol et les commandes moteur. Une seconde personne compétente vérifie, après coup, le montage, le freinage, le sens de débattement et la liberté de mouvement.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les enregistrements sont souvent informatisés, mais la logique ne change pas : une carte de travail clôturée sans le numéro de lot du mastic utilisé ou sans le numéro de la clé dynamométrique empêche de retrouver toutes les pièces concernées le jour où un fournisseur signale un lot défectueux.</div>\n"
      },
      {
       "titre": "Défauts, reports et certificat de remise en service",
       "contenu": "\n<p>Un défaut constaté doit être corrigé avant le vol suivant, sauf s'il peut être <strong>reporté</strong>. Le report n'est possible que si le défaut n'affecte pas la sécurité, dans les limites prévues par les données approuvées (par exemple une liste d'équipements minimaux lorsqu'elle existe), et il est toujours inscrit dans le compte rendu matériel avec une échéance de correction. Un défaut affectant la structure primaire, les commandes de vol ou le moteur n'est pas reportable sans données approuvées.</p>\n<p>À la fin des travaux, le <strong>certificat de remise en service</strong> (CRS) atteste que les travaux commandés ont été réalisés conformément aux données applicables et que l'aéronef est apte à voler sur ce point. Il comporte au minimum :</p>\n<ul>\n<li>l'identification de l'aéronef (immatriculation) et la description des travaux réalisés ;</li>\n<li>les références des données utilisées (manuel, révision, consigne, bulletin) ;</li>\n<li>la date d'achèvement ;</li>\n<li>l'identité, la signature et la référence de licence ou d'autorisation du signataire ;</li>\n<li>la liste des travaux non réalisés ou des défauts reportés, le cas échéant.</li>\n</ul>\n<table>\n<thead><tr><th>Situation</th><th>Action correcte</th></tr></thead>\n<tbody>\n<tr><td>Feu de navigation gauche hors service, vol de jour prévu</td><td>Vérifier si le report est autorisé par les données et la réglementation d'exploitation, inscrire le défaut, poser une étiquette « inopérant », fixer l'échéance</td></tr>\n<tr><td>Fissure sur une ferrure de bâti moteur</td><td>Avion immobilisé ; évaluation selon les données du constructeur ; pas de report</td></tr>\n<tr><td>Tâche non terminée en fin de journée</td><td>Renseigner la carte de travail (étapes faites, étapes restantes), étiqueter l'avion, relève écrite au collègue</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> signer un CRS, c'est engager sa responsabilité personnelle. On ne signe jamais pour un travail que l'on n'a ni réalisé ni supervisé ni contrôlé, et jamais sous la pression d'un horaire de vol.</div>\n"
      }
     ],
     "points_cles": [
      "Le système qualité repose sur des procédures écrites, des audits, le traitement des non-conformités et le retour d'expérience.",
      "Toute pièce montée doit être acceptable : Form 1 pour les pièces certifiées, conformité normalisée pour les pièces standard.",
      "Une pièce suspecte est mise en quarantaine et signalée.",
      "Le potentiel restant est le premier atteint entre limite horaire et limite calendaire.",
      "Une limite de vie ou une consigne de navigabilité ne se prolonge pas.",
      "Les tâches critiques sur commandes de vol et commandes moteur exigent une inspection indépendante.",
      "Un défaut n'est reporté que dans les limites des données approuvées, avec inscription et échéance.",
      "Le CRS mentionne les travaux, les données utilisées, la date, le signataire et les reports."
     ],
     "lexique": [
      {
       "terme": "Exposé de l'organisme",
       "def": "Document approuvé décrivant l'organisation, les moyens et les procédures d'un organisme d'entretien ou de gestion."
      },
      {
       "terme": "Non-conformité",
       "def": "Écart entre ce qui est exigé et ce qui est constaté, qui déclenche une analyse et une action corrective."
      },
      {
       "terme": "Pièce suspecte",
       "def": "Pièce dont l'origine ou la conformité ne peut pas être démontrée ; elle est isolée en quarantaine."
      },
      {
       "terme": "Pièce standard",
       "def": "Pièce fabriquée selon une norme reconnue (AN, MS, NAS…) et acceptée sans Form 1 lorsque les données le prévoient."
      },
      {
       "terme": "TBO",
       "def": "Time Between Overhaul : durée d'utilisation recommandée entre deux révisions générales d'un moteur ou d'une hélice."
      },
      {
       "terme": "Potentiel",
       "def": "Durée d'utilisation restante avant une échéance (révision, remplacement), en heures, cycles ou temps calendaire."
      },
      {
       "terme": "Inspection indépendante",
       "def": "Contrôle par une seconde personne d'une tâche critique, après sa réalisation et avant remise en service."
      },
      {
       "terme": "Défaut reporté",
       "def": "Défaut dont la correction est différée dans les limites prévues, avec inscription et échéance."
      },
      {
       "terme": "Compte rendu matériel",
       "def": "Document de bord où le pilote note les anomalies et où l'atelier inscrit les actions correctives."
      },
      {
       "terme": "Quarantaine",
       "def": "Zone ou statut d'isolement d'une pièce ou d'un produit en attente de décision."
      }
     ]
    },
    {
     "id": "bavg-facteurs-humains",
     "titre": "Facteurs humains en maintenance : comprendre et prévenir l'erreur",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Utiliser le modèle SHELL pour décrire les interactions d'un mécanicien avec son environnement de travail.",
      "Expliquer le modèle de Reason et la notion de défenses successives.",
      "Classer une erreur humaine : raté, lapsus, faute, violation.",
      "Identifier les douze facteurs classiques d'erreur en maintenance et les parades associées.",
      "Mettre en œuvre une relève de poste et une communication fiables."
     ],
     "sections": [
      {
       "titre": "Pourquoi étudier l'erreur humaine en maintenance ?",
       "contenu": "\n<p>Les études de sécurité aérienne montrent qu'une part importante des événements liés à l'entretien ne vient pas d'une pièce défaillante mais d'une <strong>erreur humaine</strong> : capot mal verrouillé, bouchon de réservoir oublié, câble de commande croisé, outil laissé dans un compartiment. Les <strong>facteurs humains</strong> sont l'étude de tout ce qui, chez l'être humain et dans son environnement, influence la performance au travail. Ils constituent un module obligatoire des licences Part-66 et font l'objet de formations régulières dans les organismes d'entretien.</p>\n<p>L'objectif n'est pas de chercher un coupable mais de comprendre comment une erreur a été possible, pour que le système l'empêche ou la détecte la fois suivante. Un cas d'école souvent cité est celui d'un biréacteur britannique en 1990 : un pare-brise avait été remonté la veille avec des vis d'un diamètre légèrement trop faible, choisies à vue dans un tiroir ; en montée, le pare-brise a été arraché par la pression cabine. Fatigue de nuit, absence de vérification de la référence au catalogue, travail effectué seul : plusieurs facteurs se sont additionnés.</p>\n"
      },
      {
       "titre": "Le modèle SHELL",
       "contenu": "\n<p>Le <strong>modèle SHELL</strong> place l'opérateur humain au centre (le L central, pour Liveware) et décrit ses interfaces avec quatre éléments.</p>\n<table>\n<thead><tr><th>Lettre</th><th>Élément</th><th>Exemples en atelier d'aviation générale</th><th>Exemple de problème d'interface</th></tr></thead>\n<tbody>\n<tr><td>S</td><td>Software : procédures, documentation, logiciels</td><td>Manuel de maintenance, carte de travail, logiciel de suivi</td><td>Procédure ambiguë, révision non à jour, traduction approximative</td></tr>\n<tr><td>H</td><td>Hardware : machines, outils, aéronef</td><td>Clé dynamométrique, vérin, accès dans un capot</td><td>Accès difficile qui empêche de voir le freinage</td></tr>\n<tr><td>E</td><td>Environment : environnement physique et organisationnel</td><td>Bruit, éclairage, froid du hangar, pression commerciale</td><td>Inspection de nuit avec un éclairage insuffisant</td></tr>\n<tr><td>L</td><td>Liveware : les autres personnes</td><td>Collègues, chef d'atelier, pilote, client</td><td>Consigne orale mal comprise lors d'une relève</td></tr>\n</tbody>\n</table>\n<p>Le modèle montre qu'une erreur naît souvent à une interface mal adaptée : le mécanicien n'est pas « mauvais », c'est l'outil, la procédure ou l'organisation qui ne lui permet pas de bien faire.</p>\n"
      },
      {
       "titre": "Le modèle de Reason et les types d'erreurs",
       "contenu": "\n<p>Le psychologue James Reason a proposé de représenter les protections d'un système par des tranches de fromage à trous superposées : formation, procédures, outillage, inspection indépendante, essais fonctionnels. Chaque tranche comporte des faiblesses. Un accident survient lorsque les trous s'alignent et qu'aucune défense n'arrête l'erreur. Reason distingue les <strong>erreurs actives</strong>, commises par l'opérateur au contact de l'avion, et les <strong>conditions latentes</strong>, installées en amont par l'organisation (effectifs insuffisants, procédure mal rédigée, outillage manquant).</p>\n<p>Il classe aussi les actions dangereuses :</p>\n<ul>\n<li><strong>raté</strong> : l'intention est bonne mais l'exécution déraille par inattention (serrer le mauvais écrou) ;</li>\n<li><strong>lapsus</strong> : oubli d'une étape par défaut de mémoire (ne pas reposer le fil-frein après une interruption) ;</li>\n<li><strong>faute</strong> : le plan d'action lui-même est erroné, par méconnaissance ou mauvaise règle (appliquer un couple prévu pour un autre type d'écrou) ;</li>\n<li><strong>violation</strong> : écart volontaire à une règle connue, souvent pour gagner du temps (ne pas consulter le manuel « parce qu'on connaît par cœur »).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les ratés et lapsus se combattent par l'organisation du poste et les listes de vérification ; les fautes par la formation et des procédures claires ; les violations par l'encadrement, l'exemplarité et une culture où signaler une difficulté est valorisé.</div>\n"
      },
      {
       "titre": "Les douze facteurs d'erreur en maintenance",
       "contenu": "\n<p>Gordon Dupont, de l'autorité canadienne, a recensé douze facteurs récurrents, connus sous le nom anglais de « dirty dozen ». Les connaître permet de se surveiller soi-même.</p>\n<table>\n<thead><tr><th>Facteur</th><th>Manifestation</th><th>Parade</th></tr></thead>\n<tbody>\n<tr><td>Manque de communication</td><td>Information non transmise lors d'une relève</td><td>Relève écrite et orale, carte de travail à jour</td></tr>\n<tr><td>Complaisance</td><td>« J'en ai fait cent, celui-ci est forcément bon »</td><td>Inspecter comme si un défaut était présent</td></tr>\n<tr><td>Manque de connaissances</td><td>Intervention sur un type d'avion inconnu</td><td>Formation au type, demander de l'aide</td></tr>\n<tr><td>Distraction</td><td>Appel téléphonique au milieu d'un freinage</td><td>Marquer l'étape atteinte, reprendre trois étapes avant</td></tr>\n<tr><td>Manque de travail d'équipe</td><td>Chacun croit que l'autre a vérifié</td><td>Rôles clairs, double contrôle formalisé</td></tr>\n<tr><td>Fatigue</td><td>Baisse de vigilance en fin de nuit</td><td>Pauses, tâches critiques planifiées hors creux de vigilance</td></tr>\n<tr><td>Manque de ressources</td><td>Pièce ou outil absent, on improvise</td><td>Préparer avant de démonter, refuser l'improvisation</td></tr>\n<tr><td>Pression</td><td>L'avion est réservé à 14 h</td><td>Annoncer tôt les retards, ne jamais sauter une étape</td></tr>\n<tr><td>Manque d'affirmation</td><td>Ne pas oser signaler un doute</td><td>Exprimer clairement une réserve</td></tr>\n<tr><td>Stress</td><td>Accumulation de difficultés</td><td>Prendre du recul, prioriser</td></tr>\n<tr><td>Manque de vigilance</td><td>Ne pas anticiper les conséquences d'une action</td><td>Se demander « que se passe-t-il si… »</td></tr>\n<tr><td>Normes implicites</td><td>« Ici on a toujours fait comme ça »</td><td>Revenir à la donnée approuvée</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la fatigue agit comme l'alcool sur la vigilance. Les études de référence indiquent qu'après environ 17 heures d'éveil continu, la performance se dégrade de façon comparable à celle d'une personne présentant une alcoolémie de l'ordre de 0,5 g/L. Un mécanicien fatigué ne s'en rend généralement pas compte lui-même.</div>\n"
      },
      {
       "titre": "Relève de poste, interruptions et communication",
       "contenu": "\n<p>Les moments les plus risqués sont les <strong>transitions</strong> : changement d'équipe, interruption de tâche, transfert d'un avion d'une zone à l'autre. Une relève fiable combine l'écrit et l'oral, en face à face et devant l'avion si possible.</p>\n<ul>\n<li>La carte de travail indique précisément les étapes réalisées et celles qui restent (par exemple « écrous serrés au couple, freinage NON réalisé »).</li>\n<li>Les éléments démontés ou non freinés sont signalés par des <strong>étiquettes</strong> visibles sur l'avion et dans le poste de pilotage.</li>\n<li>L'oral sert à transmettre ce que l'écrit transmet mal : un doute, une difficulté d'accès, une pièce en attente.</li>\n<li>Le receveur reformule ce qu'il a compris (communication en boucle fermée).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un événement avec le modèle SHELL et les douze facteurs.<br>Situation : après une visite, un pilote signale au point d'arrêt que le capot supérieur se soulève. Le capot avait été déposé pour une inspection ; deux mécaniciens se sont relayés.<br>1. Décrire les faits sans jugement : capot reposé, deux attaches quart de tour non verrouillées, relève orale au téléphone.<br>2. Interfaces SHELL : L-L (relève téléphonique incomplète), L-S (carte de travail ne prévoyant pas d'étape « vérification fermeture capots »), L-E (fin de journée, avion réservé).<br>3. Facteurs : manque de communication, pression, complaisance.<br>4. Parades : étape de vérification des capots ajoutée à la carte, relève en face à face, contrôle final « tour avion » avant remise en service.<br>5. Vérifier l'efficacité : suivi des événements similaires sur les mois suivants.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les organismes encouragent une <strong>culture juste</strong> : un mécanicien qui signale spontanément sa propre erreur n'est pas sanctionné, sauf négligence grave ou violation délibérée. Ce signalement permet de corriger le système avant qu'un autre ne commette la même erreur.</div>\n"
      },
      {
       "titre": "Aptitude, santé et environnement de travail",
       "contenu": "\n<p>Les performances humaines dépendent aussi de l'état physique du mécanicien et de son environnement. Plusieurs facteurs, souvent sous-estimés, méritent une vigilance personnelle :</p>\n<ul>\n<li><strong>médicaments, alcool et substances</strong> : certains médicaments courants (antihistaminiques contre les allergies, sirops contre la toux) provoquent somnolence et baisse d'attention ; l'alcool reste présent dans l'organisme plusieurs heures après la consommation. Un mécanicien dont l'aptitude est diminuée le signale et ne réalise pas de tâche critique ;</li>\n<li><strong>vision</strong> : l'inspection exige une bonne acuité visuelle de près et, pour le câblage, une perception correcte des couleurs ; le port des corrections prescrites est indispensable ;</li>\n<li><strong>bruit</strong> : l'exposition répétée au bruit des moteurs et des outils pneumatiques entraîne une perte d'audition irréversible ; protections auditives obligatoires ; le bruit gêne aussi la communication et favorise les malentendus ;</li>\n<li><strong>éclairage et température</strong> : une inspection dans un compartiment sombre ou par grand froid est moins fiable ; une lampe adaptée et des pauses régulières améliorent la détection des défauts ;</li>\n<li><strong>espaces confinés et postures</strong> : travailler longtemps à genoux sous une aile ou tête en bas dans un poste de pilotage fatigue et réduit l'attention.</li>\n</ul>\n<p>L'organisation de l'atelier participe aussi à la prévention : planification réaliste, effectifs suffisants, outillage disponible, procédures claires. Ce sont les « défenses » du modèle de Reason que l'organisme doit entretenir.</p>\n"
      }
     ],
     "points_cles": [
      "La plupart des événements liés à l'entretien ont une composante humaine.",
      "Le modèle SHELL analyse les interfaces entre l'opérateur et les procédures, le matériel, l'environnement et les autres personnes.",
      "Le modèle de Reason montre que l'accident naît de l'alignement de défaillances dans plusieurs défenses.",
      "Raté, lapsus, faute et violation se préviennent par des moyens différents.",
      "Les douze facteurs (dirty dozen) servent de grille d'auto-surveillance.",
      "La fatigue dégrade fortement la vigilance sans que la personne s'en rende compte.",
      "Une relève de poste fiable combine écrit, oral, étiquetage et reformulation.",
      "La culture juste encourage le signalement des erreurs pour améliorer le système."
     ],
     "lexique": [
      {
       "terme": "Facteurs humains",
       "def": "Étude des capacités et limites humaines et de leur interaction avec le travail, les outils et l'organisation."
      },
      {
       "terme": "Modèle SHELL",
       "def": "Représentation des interfaces entre l'humain et les procédures, le matériel, l'environnement et les autres personnes."
      },
      {
       "terme": "Condition latente",
       "def": "Faiblesse installée en amont par l'organisation, qui favorise l'erreur sans la provoquer directement."
      },
      {
       "terme": "Erreur active",
       "def": "Erreur commise par l'opérateur au contact direct du système, aux effets immédiats."
      },
      {
       "terme": "Lapsus",
       "def": "Oubli d'une étape ou d'une intention par défaillance de mémoire."
      },
      {
       "terme": "Violation",
       "def": "Écart volontaire à une règle ou une procédure connue."
      },
      {
       "terme": "Complaisance",
       "def": "Excès de confiance qui conduit à relâcher la vigilance sur une tâche familière."
      },
      {
       "terme": "Relève de poste",
       "def": "Transmission d'un travail en cours d'une personne ou d'une équipe à une autre."
      },
      {
       "terme": "Culture juste",
       "def": "Culture d'entreprise qui encourage le signalement des erreurs tout en sanctionnant les violations délibérées."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Sciences appliquées à l'aéronef",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bavg-mecanique-appliquee",
     "titre": "Mécanique appliquée : efforts, mouvements et résistance des pièces",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Modéliser les actions mécaniques sur un élément d'aéronef (forces, moments, couples).",
      "Appliquer le principe fondamental de la statique à un levier ou un guignol de commande.",
      "Calculer un rapport de réduction, une vitesse de rotation et une puissance mécanique.",
      "Calculer une contrainte de traction ou de cisaillement et la comparer à une limite.",
      "Expliquer la fatigue, le flambage et le fluage et leurs conséquences en maintenance."
     ],
     "sections": [
      {
       "titre": "Modéliser une action mécanique",
       "contenu": "\n<p>Toute pièce d'un avion subit des <strong>actions mécaniques</strong> : poids, effort d'un câble, pression de l'air sur une gouverne, réaction du sol sur une roue. On les modélise par des <strong>forces</strong>, caractérisées par un point d'application, une direction, un sens et une intensité exprimée en newtons (N). Le poids d'une masse m vaut P = m × g, avec g ≈ 9,81 m/s².</p>\n<p>Une force qui tend à faire tourner une pièce autour d'un axe crée un <strong>moment</strong>. Le moment d'une force F par rapport à un point O vaut M = F × d, où d est le <strong>bras de levier</strong>, distance perpendiculaire entre la ligne d'action de la force et le point O. Il s'exprime en newtons-mètres (N·m). Deux forces égales, opposées et non alignées forment un <strong>couple</strong>, qui fait tourner sans déplacer.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Symbole</th><th>Unité SI</th><th>Unité anglo-saxonne fréquente</th></tr></thead>\n<tbody>\n<tr><td>Force</td><td>F</td><td>newton (N)</td><td>livre-force (lbf), 1 lbf ≈ 4,448 N</td></tr>\n<tr><td>Moment, couple</td><td>M, C</td><td>newton-mètre (N·m)</td><td>pound-inch (lbf·in), 1 lbf·in ≈ 0,113 N·m</td></tr>\n<tr><td>Pression, contrainte</td><td>p, σ</td><td>pascal (Pa), mégapascal (MPa)</td><td>psi, 1 psi ≈ 6 895 Pa</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Équilibre d'un solide : le principe fondamental de la statique",
       "contenu": "\n<p>Un solide immobile (ou en mouvement uniforme) est en <strong>équilibre</strong>. Le <strong>principe fondamental de la statique</strong> (PFS) impose alors deux conditions :</p>\n<ul>\n<li>la somme vectorielle des forces extérieures est nulle (théorème de la résultante) ;</li>\n<li>la somme des moments de ces forces par rapport à n'importe quel point est nulle (théorème du moment).</li>\n</ul>\n<p>Dans une chaîne de commande de vol, le pilote applique un effort sur le manche ; cet effort est transmis par des câbles, des poulies, des guignols et des bielles jusqu'à la gouverne. Chaque guignol est un levier : l'effort transmis dépend du rapport des bras de levier.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> effort dans une bielle de commande de gouverne de profondeur.<br>Données : la charge aérodynamique sur la gouverne produit un moment de 45 N·m autour de son axe d'articulation ; la bielle de commande est attachée sur le guignol de gouverne à 90 mm de l'axe, perpendiculairement au bras.<br>1. Isoler la gouverne : elle subit le moment aérodynamique et l'effort de la bielle.<br>2. Écrire l'équilibre des moments autour de l'axe : F × d = 45 N·m.<br>3. Convertir : d = 90 mm = 0,090 m.<br>4. Calculer : F = 45 / 0,090 = 500 N.<br>5. Vérifier l'ordre de grandeur : 500 N, soit l'équivalent du poids d'environ 51 kg, plausible pour une bielle de commande en vol rapide.<br>Conséquence pratique : si le point d'attache est déplacé plus près de l'axe, l'effort augmente ; c'est pourquoi le montage doit respecter exactement le trou prévu par le constructeur.</div>\n"
      },
      {
       "titre": "Cinématique : rotations, réductions et puissance",
       "contenu": "\n<p>La <strong>cinématique</strong> étudie les mouvements sans s'occuper de leurs causes. En aviation légère, on rencontre surtout des rotations (vilebrequin, hélice, démarreur, roues) et des translations (vérin d'amortisseur, tige de commande).</p>\n<p>Pour une rotation, la vitesse s'exprime en tours par minute (tr/min) ou en radians par seconde : ω = 2π × N / 60, avec N en tr/min. Un point situé à une distance R de l'axe a une vitesse linéaire v = ω × R. En bout de pale d'une hélice de 1,88 m de diamètre tournant à 2 700 tr/min : ω = 2π × 2 700 / 60 ≈ 283 rad/s, et v = 283 × 0,94 ≈ 266 m/s. On approche de la vitesse du son (environ 340 m/s au niveau de la mer), ce qui explique les limites de diamètre et de régime des hélices.</p>\n<p>Un <strong>réducteur</strong> modifie la vitesse et le couple. Son <strong>rapport de réduction</strong> vaut r = N sortie / N entrée. Si le rendement est η, la puissance de sortie vaut P sortie = η × P entrée, et la puissance mécanique d'un arbre en rotation vaut P = C × ω.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un réducteur diminue la vitesse et augmente le couple dans le même rapport (aux pertes près). Les moteurs d'avion léger à prise directe entraînent l'hélice à la vitesse du vilebrequin ; certains moteurs plus récents, tournant plus vite, utilisent un réducteur pour garder une vitesse de bout de pale acceptable.</div>\n"
      },
      {
       "titre": "Contraintes et résistance des matériaux",
       "contenu": "\n<p>La <strong>résistance des matériaux</strong> (RDM) permet de vérifier qu'une pièce supporte les efforts sans se rompre ni se déformer de façon permanente. On calcule une <strong>contrainte</strong>, effort ramené à une surface, exprimée en mégapascals (1 MPa = 1 N/mm²).</p>\n<table>\n<thead><tr><th>Sollicitation</th><th>Formule</th><th>Exemple aéronautique</th></tr></thead>\n<tbody>\n<tr><td>Traction, compression</td><td>σ = F / S (S : section perpendiculaire à l'effort)</td><td>Tige de bielle, câble, longeron d'aile (semelles)</td></tr>\n<tr><td>Cisaillement</td><td>τ = F / S (S : section cisaillée)</td><td>Rivet ou boulon d'une éclisse</td></tr>\n<tr><td>Flexion</td><td>Contrainte maximale sur les fibres extrêmes</td><td>Longeron d'aile chargé par la portance</td></tr>\n<tr><td>Torsion</td><td>Contrainte maximale en périphérie</td><td>Tube de torsion d'aileron, vilebrequin</td></tr>\n</tbody>\n</table>\n<p>On compare la contrainte calculée à une contrainte limite du matériau : la <strong>limite élastique</strong> Re au-delà de laquelle la déformation devient permanente, et la <strong>résistance à la rupture</strong> Rm. Les règles de certification imposent un <strong>coefficient de sécurité</strong> : la structure doit supporter sans rupture 1,5 fois la charge maximale prévue en service (charge limite).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un boulon en cisaillement simple.<br>Données : effort transmis 6 000 N ; boulon de diamètre 6,35 mm (1/4 in) ; résistance au cisaillement admissible de l'acier du boulon retenue pour l'exercice : 400 MPa.<br>1. Section cisaillée : S = π × d² / 4 = 3,1416 × 6,35² / 4 ≈ 31,7 mm².<br>2. Contrainte : τ = 6 000 / 31,7 ≈ 189 MPa.<br>3. Comparaison : 189 MPa est inférieur à 400 MPa ; le rapport 400 / 189 ≈ 2,1 donne la marge.<br>4. Si l'assemblage travaillait en cisaillement double (le boulon traverse une chape à deux flasques), la section cisaillée serait doublée et la contrainte divisée par deux.<br>En maintenance, ce raisonnement explique pourquoi on ne remplace jamais un boulon par un boulon de diamètre ou de matériau différent sans donnée approuvée.</div>\n"
      },
      {
       "titre": "Fatigue, flambage, fluage",
       "contenu": "\n<p>Une pièce peut se rompre sous des efforts bien inférieurs à sa résistance à la rupture si ces efforts se répètent : c'est la <strong>fatigue</strong>. Chaque vol, chaque rafale, chaque atterrissage et chaque tour de moteur constitue un cycle de chargement. Une fissure s'amorce sur un défaut ou un concentrateur de contrainte (trou, rayure, angle vif, piqûre de corrosion), progresse lentement, puis la section restante cède brutalement. La surface de rupture présente des <strong>stries de fatigue</strong> concentriques autour de l'amorce, puis une zone d'arrachement.</p>\n<p>Le <strong>flambage</strong> touche les pièces longues et minces comprimées (bielles, raidisseurs, tubes de treillis) : elles se dérobent latéralement bien avant que la contrainte de compression n'atteigne la limite du matériau. Une bielle légèrement voilée perd une grande partie de sa résistance au flambage : toute bielle déformée est rebutée.</p>\n<p>Le <strong>fluage</strong> est une déformation lente sous charge constante, accélérée par la température (pièces chaudes du moteur, échappement). La <strong>relaxation</strong> est la perte progressive de tension d'un élément maintenu à déformation constante, par exemple la perte de précharge d'un boulon serré ou de tension d'un câble.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une rayure faite avec un tournevis sur une pièce de structure, un ébavurage oublié dans un trou ou une marque de pointe à tracer sont des amorces de fissure de fatigue. Ces défauts paraissent anodins mais réduisent fortement la durée de vie de la pièce.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les inspections ciblées du programme d'entretien (ferrures d'attache d'aile, bâti moteur, longeron) visent précisément les zones où la fatigue est attendue. Le mécanicien nettoie la zone, utilise une lampe et une loupe, et, si nécessaire, un contrôle par ressuage ou courants de Foucault.</div>\n"
      }
     ],
     "points_cles": [
      "Une force se caractérise par point d'application, direction, sens et intensité en newtons.",
      "Moment = force × bras de levier perpendiculaire, en N·m.",
      "À l'équilibre, la somme des forces et la somme des moments sont nulles.",
      "Puissance mécanique d'un arbre : P = C × ω, avec ω = 2πN/60.",
      "Contrainte = effort / section, en MPa (N/mm²).",
      "La structure doit tenir 1,5 fois la charge limite sans rupture.",
      "La fatigue rompt les pièces sous efforts répétés à partir d'amorces souvent minuscules.",
      "Une bielle déformée a perdu sa résistance au flambage : elle est rebutée."
     ],
     "lexique": [
      {
       "terme": "Moment d'une force",
       "def": "Effet de rotation d'une force, produit de son intensité par son bras de levier."
      },
      {
       "terme": "Couple",
       "def": "Ensemble de deux forces égales et opposées non alignées, qui crée une rotation pure."
      },
      {
       "terme": "Principe fondamental de la statique",
       "def": "Pour un solide en équilibre, somme des forces et somme des moments extérieurs sont nulles."
      },
      {
       "terme": "Rapport de réduction",
       "def": "Rapport entre la vitesse de sortie et la vitesse d'entrée d'une transmission."
      },
      {
       "terme": "Contrainte",
       "def": "Effort intérieur rapporté à la surface sur laquelle il s'exerce, en MPa."
      },
      {
       "terme": "Limite élastique",
       "def": "Contrainte au-delà de laquelle la déformation d'un matériau devient permanente."
      },
      {
       "terme": "Fatigue",
       "def": "Endommagement progressif sous chargements répétés, menant à la rupture sous une contrainte inférieure à la résistance statique."
      },
      {
       "terme": "Flambage",
       "def": "Instabilité d'une pièce élancée comprimée, qui fléchit latéralement brusquement."
      },
      {
       "terme": "Fluage",
       "def": "Déformation lente et continue d'un matériau sous charge constante, favorisée par la chaleur."
      },
      {
       "terme": "Charge limite",
       "def": "Charge maximale attendue en service ; la structure doit supporter 1,5 fois cette charge sans rupture."
      }
     ]
    },
    {
     "id": "bavg-aerodynamique-atmosphere",
     "titre": "Atmosphère standard et aérodynamique de l'aile",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire l'atmosphère type internationale et calculer la température standard à une altitude donnée.",
      "Appliquer le théorème de Bernoulli au tube de Pitot et à l'écoulement autour d'un profil.",
      "Définir les caractéristiques géométriques d'une aile et d'un profil.",
      "Interpréter une polaire, la finesse et le phénomène de décrochage.",
      "Expliquer le rôle des dispositifs hypersustentateurs et de la couche limite."
     ],
     "sections": [
      {
       "titre": "L'atmosphère type internationale (ISA)",
       "contenu": "\n<p>Les performances d'un avion et les indications de ses instruments dépendent de l'air dans lequel il vole. Pour comparer les mesures, l'aviation utilise un modèle conventionnel : l'<strong>atmosphère type internationale</strong>, notée ISA (International Standard Atmosphere), définie par l'OACI.</p>\n<table>\n<thead><tr><th>Paramètre au niveau de la mer (ISA)</th><th>Valeur</th></tr></thead>\n<tbody>\n<tr><td>Pression</td><td>1 013,25 hPa (29,92 inHg)</td></tr>\n<tr><td>Température</td><td>15 °C (288,15 K)</td></tr>\n<tr><td>Masse volumique</td><td>1,225 kg/m³</td></tr>\n<tr><td>Gradient de température jusqu'à la tropopause</td><td>− 6,5 °C par 1 000 m (environ − 2 °C par 1 000 ft)</td></tr>\n<tr><td>Tropopause</td><td>11 000 m, température − 56,5 °C</td></tr>\n</tbody>\n</table>\n<p>La pression diminue avec l'altitude : environ 1 hPa tous les 8,5 m près du sol (soit environ 1 hPa pour 28 ft). La <strong>masse volumique</strong> de l'air diminue aussi, ce qui réduit la portance, la traction de l'hélice et la puissance d'un moteur atmosphérique. On parle d'<strong>altitude densité</strong> pour désigner l'altitude ISA qui aurait la même masse volumique que l'air réel : par forte chaleur, un terrain situé à 500 m peut se comporter comme s'il était à plus de 1 500 m.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> température ISA et écart ISA.<br>Données : altitude 1 800 m ; température extérieure mesurée 10 °C.<br>1. Température ISA : 15 − 6,5 × 1,8 = 15 − 11,7 = 3,3 °C.<br>2. Écart ISA : 10 − 3,3 = + 6,7 °C, noté « ISA + 7 » environ.<br>3. Interprétation : l'air est plus chaud que le standard, donc moins dense ; les performances de décollage et de montée seront dégradées par rapport aux valeurs ISA du manuel de vol.</div>\n"
      },
      {
       "titre": "Bernoulli, pression dynamique et tube de Pitot",
       "contenu": "\n<p>Pour un écoulement d'air à faible vitesse (on néglige la compressibilité en dessous d'environ 0,3 fois la vitesse du son), le <strong>théorème de Bernoulli</strong> s'écrit le long d'une ligne de courant :</p>\n<p><strong>p + ½ ρ V² = constante</strong></p>\n<p>où p est la <strong>pression statique</strong>, ρ la masse volumique et ½ ρ V² la <strong>pression dynamique</strong> q. Leur somme est la <strong>pression totale</strong>. Quand l'air accélère, sa pression statique diminue ; quand il ralentit, elle augmente.</p>\n<p>Le <strong>tube de Pitot</strong> utilise cette relation. Son orifice frontal arrête l'air et mesure la pression totale ; des <strong>prises statiques</strong>, sur le flanc du fuselage ou du tube, mesurent la pression statique. L'anémomètre mesure la différence, c'est-à-dire la pression dynamique, et l'affiche sous forme de vitesse. Il est étalonné en conditions ISA au niveau de la mer : il affiche la <strong>vitesse indiquée</strong> (IAS). En altitude, la vitesse vraie (TAS) est supérieure à la vitesse indiquée, d'environ 2 % par tranche de 1 000 ft en première approximation.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> retrouver une vitesse à partir de la pression dynamique.<br>Données : pression dynamique mesurée q = 1 200 Pa ; air ISA au niveau de la mer, ρ = 1,225 kg/m³.<br>1. Relation : q = ½ ρ V², donc V = racine de (2q / ρ).<br>2. Calcul : 2 × 1 200 / 1,225 ≈ 1 959 ; racine de 1 959 ≈ 44,3 m/s.<br>3. Conversion : 44,3 × 3,6 ≈ 159 km/h, soit 159 / 1,852 ≈ 86 kt.<br>4. Cohérence : vitesse typique d'approche ou de montée d'un avion léger.</div>\n"
      },
      {
       "titre": "Géométrie de l'aile et du profil",
       "contenu": "\n<p>Le <strong>profil</strong> est la coupe de l'aile parallèlement à l'axe longitudinal. On y distingue le <strong>bord d'attaque</strong>, le <strong>bord de fuite</strong>, la <strong>corde</strong> (segment qui les joint), l'<strong>extrados</strong> (face supérieure), l'<strong>intrados</strong> (face inférieure), l'<strong>épaisseur relative</strong> (épaisseur maximale rapportée à la corde, souvent 12 à 15 % sur un avion léger) et la <strong>cambrure</strong>.</p>\n<p>L'<strong>incidence</strong> (ou angle d'attaque) α est l'angle entre la corde et la direction du vent relatif. Il ne faut pas la confondre avec le <strong>calage</strong>, angle fixe entre la corde et l'axe longitudinal de l'avion, défini à la construction et vérifié lors des contrôles de symétrie.</p>\n<table>\n<thead><tr><th>Caractéristique de l'aile</th><th>Définition</th><th>Effet</th></tr></thead>\n<tbody>\n<tr><td>Envergure b</td><td>Distance d'un saumon à l'autre</td><td>Avec la surface, fixe l'allongement</td></tr>\n<tr><td>Allongement λ</td><td>λ = b² / S</td><td>Plus il est grand, plus la traînée induite est faible (planeurs : 20 et plus ; avions légers : 6 à 8 environ)</td></tr>\n<tr><td>Flèche</td><td>Angle de recul de l'aile</td><td>Faible ou nulle en aviation légère</td></tr>\n<tr><td>Dièdre</td><td>Angle des ailes relevées vers le haut</td><td>Améliore la stabilité en roulis</td></tr>\n<tr><td>Vrillage</td><td>Calage décroissant de l'emplanture au saumon</td><td>Le décrochage commence à l'emplanture, les ailerons restent efficaces</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Portance, traînée et polaire",
       "contenu": "\n<p>La <strong>portance</strong> et la <strong>traînée</strong> s'écrivent sous la même forme : Rz = q × S × Cz et Rx = q × S × Cx, où Cz et Cx sont des coefficients sans dimension qui dépendent du profil et de l'incidence. Lorsque l'incidence augmente, Cz augmente presque linéairement jusqu'à une valeur maximale, puis chute brutalement : c'est le <strong>décrochage</strong>, dû au décollement de l'écoulement sur l'extrados. Pour un profil d'avion léger sans volets, l'incidence de décrochage est de l'ordre de 15 à 18°.</p>\n<p>La traînée totale comprend :</p>\n<ul>\n<li>la <strong>traînée de profil</strong> (frottement et forme), qui augmente avec la vitesse ;</li>\n<li>la <strong>traînée induite</strong>, conséquence de la portance : la surpression d'intrados contourne le saumon vers l'extrados et crée des <strong>tourbillons marginaux</strong>. Elle est maximale aux faibles vitesses et grandes incidences ;</li>\n<li>la <strong>traînée parasite</strong> des éléments non porteurs (train fixe, antennes, interstices), sur laquelle la maintenance agit directement.</li>\n</ul>\n<p>La <strong>polaire</strong> est la courbe Cz en fonction de Cx. La <strong>finesse</strong> f = Cz / Cx = Rz / Rx ; sa valeur maximale, lue à la tangente à la polaire issue de l'origine, est d'environ 8 à 12 pour un avion léger et peut dépasser 40 pour un planeur de performance. Elle correspond à la distance parcourue en plané par mètre d'altitude perdu.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une carénage de roue manquant, un joint de capot décollé, un bord d'attaque bosselé ou une peinture écaillée augmentent la traînée parasite et dégradent l'écoulement. Les pilotes le constatent en perte de vitesse de croisière ; le mécanicien y répond en restaurant l'état de surface prévu par le constructeur.</div>\n"
      },
      {
       "titre": "Couche limite et dispositifs hypersustentateurs",
       "contenu": "\n<p>Au contact de l'aile, l'air est freiné par frottement : la vitesse passe de zéro sur la peau à la vitesse de l'écoulement extérieur dans une mince <strong>couche limite</strong>. Elle est d'abord <strong>laminaire</strong> (filets d'air parallèles, faible frottement), puis devient <strong>turbulente</strong> (mélange intense, frottement plus élevé mais meilleure résistance au décollement). Quand la couche limite n'arrive plus à suivre la courbure de l'extrados, elle décolle : c'est l'origine du décrochage.</p>\n<p>Pour voler lentement au décollage et à l'atterrissage, il faut augmenter Cz max ou la surface : c'est le rôle des <strong>dispositifs hypersustentateurs</strong>.</p>\n<ul>\n<li><strong>Volets de courbure</strong> au bord de fuite (simples, à fente, Fowler qui reculent en augmentant aussi la surface) : ils augmentent la cambrure, donc la portance et la traînée.</li>\n<li><strong>Becs</strong> et <strong>fentes</strong> de bord d'attaque : ils réénergisent la couche limite et retardent le décollement.</li>\n<li><strong>Générateurs de tourbillons</strong> : petites ailettes collées sur l'extrados ou la dérive, qui mélangent la couche limite ; ils sont parfois installés par une modification approuvée.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> du givre, même en couche très fine, ou un dépôt d'insectes sur le bord d'attaque modifient la couche limite et peuvent réduire nettement la portance maximale. Un avion stationné dehors en hiver doit être totalement dégivré avant le vol ; le mécanicien ne remet pas en piste un avion dont les surfaces portantes sont contaminées.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'avion décroche toujours à la même incidence (pour une configuration donnée), mais pas toujours à la même vitesse : la vitesse de décrochage augmente avec la masse, le facteur de charge et la contamination des surfaces.</div>\n"
      }
     ],
     "points_cles": [
      "ISA au niveau de la mer : 1 013,25 hPa, 15 °C, 1,225 kg/m³ ; − 6,5 °C par 1 000 m.",
      "Bernoulli : pression statique + pression dynamique = pression totale.",
      "L'anémomètre mesure la pression dynamique (totale moins statique) et affiche la vitesse indiquée.",
      "Allongement λ = b² / S ; un grand allongement réduit la traînée induite.",
      "Portance Rz = q S Cz et traînée Rx = q S Cx.",
      "Le décrochage survient à une incidence critique, par décollement de la couche limite.",
      "La finesse est le rapport portance sur traînée ; elle se lit sur la polaire.",
      "Volets, becs et générateurs de tourbillons augmentent la portance maximale ; givre et salissures la réduisent."
     ],
     "lexique": [
      {
       "terme": "ISA",
       "def": "Atmosphère type internationale, modèle conventionnel de pression, température et masse volumique selon l'altitude."
      },
      {
       "terme": "Pression dynamique",
       "def": "Terme ½ ρ V² de l'équation de Bernoulli, lié à la vitesse de l'écoulement."
      },
      {
       "terme": "Tube de Pitot",
       "def": "Sonde qui mesure la pression totale de l'écoulement."
      },
      {
       "terme": "Incidence",
       "def": "Angle entre la corde du profil et le vent relatif."
      },
      {
       "terme": "Calage",
       "def": "Angle fixe entre la corde de l'aile et l'axe longitudinal de l'avion."
      },
      {
       "terme": "Allongement",
       "def": "Rapport du carré de l'envergure à la surface alaire."
      },
      {
       "terme": "Traînée induite",
       "def": "Traînée liée à la production de portance et aux tourbillons marginaux."
      },
      {
       "terme": "Polaire",
       "def": "Courbe du coefficient de portance en fonction du coefficient de traînée."
      },
      {
       "terme": "Finesse",
       "def": "Rapport portance sur traînée, égal au rapport distance sur hauteur en plané."
      },
      {
       "terme": "Couche limite",
       "def": "Mince couche d'air freinée au contact d'une paroi, laminaire puis turbulente."
      },
      {
       "terme": "Hypersustentateur",
       "def": "Dispositif (volet, bec, fente) qui augmente la portance maximale de l'aile."
      }
     ]
    },
    {
     "id": "bavg-mecanique-vol-centrage",
     "titre": "Mécanique du vol, domaine de vol, masse et centrage",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Écrire l'équilibre des forces en palier, en montée et en virage.",
      "Calculer un facteur de charge et la vitesse de décrochage correspondante.",
      "Lire le domaine de vol et les repères de vitesse de l'anémomètre.",
      "Expliquer la stabilité longitudinale et l'influence du centrage.",
      "Calculer la position du centre de gravité d'un avion chargé et la comparer aux limites."
     ],
     "sections": [
      {
       "titre": "L'équilibre en palier, en montée et en descente",
       "contenu": "\n<p>En <strong>vol en palier stabilisé</strong>, l'avion avance à vitesse et altitude constantes : la portance équilibre le poids (Rz = P) et la traction de l'hélice équilibre la traînée (T = Rx). Comme Rz = ½ ρ V² S Cz, à masse donnée, voler plus lentement oblige à augmenter Cz, donc l'incidence.</p>\n<p>En <strong>montée stabilisée</strong> sous une pente γ, le poids se décompose : une partie (P cos γ) est équilibrée par la portance, l'autre (P sin γ) s'ajoute à la traînée. La traction doit donc vaincre Rx + P sin γ ; la capacité de montée dépend de l'<strong>excédent de puissance</strong> disponible, qui diminue avec l'altitude densité. En <strong>descente</strong>, la composante P sin γ joue le rôle de force motrice ; moteur réduit, la pente de plané est fixée par la finesse.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en mécanique du vol, la portance est perpendiculaire à la trajectoire et la traînée lui est parallèle. Ce n'est pas l'hélice qui « fait monter » l'avion mais l'excédent de puissance qui permet de vaincre la composante du poids le long de la trajectoire.</div>\n"
      },
      {
       "titre": "Le virage et le facteur de charge",
       "contenu": "\n<p>En virage, l'avion s'incline d'un angle φ. La portance, perpendiculaire aux ailes, s'incline aussi : sa composante verticale équilibre le poids, sa composante horizontale fournit la force centripète qui courbe la trajectoire. Pour tenir l'altitude, la portance doit être supérieure au poids.</p>\n<p>Le <strong>facteur de charge</strong> n est le rapport de la portance au poids : n = Rz / P. En virage en palier, n = 1 / cos φ. La structure, les sièges et les passagers subissent n fois leur poids.</p>\n<table>\n<thead><tr><th>Inclinaison φ</th><th>Facteur de charge n</th><th>Augmentation de la vitesse de décrochage (√n)</th></tr></thead>\n<tbody>\n<tr><td>0°</td><td>1,00</td><td>× 1,00</td></tr>\n<tr><td>30°</td><td>1,15</td><td>× 1,07</td></tr>\n<tr><td>45°</td><td>1,41</td><td>× 1,19</td></tr>\n<tr><td>60°</td><td>2,00</td><td>× 1,41</td></tr>\n</tbody>\n</table>\n<p>Les avions légers sont certifiés dans des catégories qui fixent les facteurs de charge limites de calcul : de l'ordre de + 3,8 / − 1,52 pour la catégorie normale, + 4,4 / − 1,76 pour la catégorie utilitaire et + 6 / − 3 pour la catégorie acrobatique. Le manuel de vol indique les limites applicables à l'avion et, pour certains, des limites différentes selon la masse ou la configuration.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vitesse de décrochage en virage.<br>Données : vitesse de décrochage en ligne droite, volets rentrés, 50 kt ; virage à 60° d'inclinaison en palier.<br>1. Facteur de charge : n = 1 / cos 60° = 1 / 0,5 = 2.<br>2. Vitesse de décrochage en virage : 50 × √2 ≈ 50 × 1,414 ≈ 71 kt.<br>3. Conclusion : à 65 kt, vitesse confortable en ligne droite, l'avion décrocherait dans ce virage.</div>\n"
      },
      {
       "titre": "Le domaine de vol et les repères de l'anémomètre",
       "contenu": "\n<p>Le <strong>domaine de vol</strong> est l'ensemble des combinaisons vitesse et facteur de charge autorisées. On le représente par le <strong>diagramme V-n</strong> : en abscisse la vitesse, en ordonnée le facteur de charge. À gauche, il est limité par la courbe de décrochage ; en haut et en bas par les facteurs de charge limites ; à droite par la vitesse à ne jamais dépasser.</p>\n<table>\n<thead><tr><th>Repère sur l'anémomètre</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Début de l'arc blanc</td><td>VS0 : vitesse de décrochage en configuration d'atterrissage, à la masse maximale</td></tr>\n<tr><td>Fin de l'arc blanc</td><td>VFE : vitesse maximale volets sortis</td></tr>\n<tr><td>Début de l'arc vert</td><td>VS1 : vitesse de décrochage en configuration lisse</td></tr>\n<tr><td>Fin de l'arc vert, début de l'arc jaune</td><td>VNO : vitesse maximale en croisière normale ; au-delà, vol en air calme seulement</td></tr>\n<tr><td>Trait rouge</td><td>VNE : vitesse à ne jamais dépasser</td></tr>\n</tbody>\n</table>\n<p>La <strong>vitesse de manœuvre</strong> VA, indiquée dans le manuel de vol, est la vitesse au-dessous de laquelle un braquage complet d'une gouverne ne peut pas dépasser le facteur de charge limite, parce que l'avion décroche avant.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> lors du remplacement ou de la révision d'un anémomètre, les arcs et traits doivent correspondre exactement aux valeurs du manuel de vol de l'avion concerné, dans l'unité affichée (nœuds, km/h ou mph). Un instrument provenant d'un autre type d'avion peut porter des repères faux et conduire un pilote à dépasser une limite structurale.</div>\n"
      },
      {
       "titre": "Stabilité longitudinale et rôle du centrage",
       "contenu": "\n<p>Un avion est <strong>stable</strong> s'il tend à revenir de lui-même à son équilibre après une perturbation. En tangage, la stabilité dépend de la position du <strong>centre de gravité</strong> (CG) par rapport au <strong>foyer</strong>, point où s'appliquent les variations de portance quand l'incidence change. L'avion est stable si le CG est en avant du foyer : une rafale qui augmente l'incidence crée un supplément de portance en arrière du CG, qui fait piquer l'avion et le ramène.</p>\n<ul>\n<li><strong>Centrage trop avant</strong> : avion très stable mais lourd aux commandes ; la gouverne de profondeur peut manquer d'efficacité pour arrondir à l'atterrissage ; vitesse de décrochage et consommation légèrement plus élevées.</li>\n<li><strong>Centrage trop arrière</strong> : avion instable, sensible, difficile voire impossible à récupérer en cas de décrochage ou de vrille. C'est la situation la plus dangereuse.</li>\n</ul>\n<p>Le constructeur définit une <strong>plage de centrage</strong> : une limite avant et une limite arrière, parfois variables avec la masse (enveloppe de centrage). La position du CG s'exprime en distance par rapport à un <strong>plan de référence</strong> (datum) choisi par le constructeur, ou en pourcentage de la <strong>corde aérodynamique moyenne</strong>.</p>\n"
      },
      {
       "titre": "Calculer la masse et le centrage d'un avion chargé",
       "contenu": "\n<p>Le principe est celui des moments : chaque masse produit un moment égal à sa masse multipliée par son <strong>bras de levier</strong> (distance au plan de référence). Le CG de l'ensemble est la somme des moments divisée par la masse totale. La masse à vide et son bras sont issus du dernier <strong>rapport de pesée</strong> ; les bras des sièges, des bagages et du carburant sont donnés par le manuel de vol.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> centrage d'un quadriplace léger (valeurs d'exemple).<br>Données : masse à vide 680 kg, bras 0,95 m ; pilote et passager avant 160 kg, bras 0,95 m ; passagers arrière 70 kg, bras 1,85 m ; bagages 20 kg, bras 2,40 m ; carburant 100 L d'AVGAS (masse volumique retenue 0,72 kg/L), bras 1,22 m. Limites : masse maximale 1 043 kg ; centrage entre 0,89 m et 1,20 m.<br>1. Carburant : 100 × 0,72 = 72 kg.<br>2. Moments (kg·m) : 680 × 0,95 = 646 ; 160 × 0,95 = 152 ; 70 × 1,85 = 129,5 ; 20 × 2,40 = 48 ; 72 × 1,22 = 87,84.<br>3. Masse totale : 680 + 160 + 70 + 20 + 72 = 1 002 kg, inférieure à 1 043 kg.<br>4. Moment total : 646 + 152 + 129,5 + 48 + 87,84 = 1 063,34 kg·m.<br>5. Centrage : 1 063,34 / 1 002 ≈ 1,061 m, compris entre 0,89 et 1,20 m.<br>6. Contrôle à l'atterrissage : refaire le calcul avec le carburant restant ; si le réservoir est en arrière du CG, le CG avance en consommant.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chaque fois que le mécanicien ajoute, retire ou déplace un équipement (radio, batterie, siège, réparation importante, peinture complète), il doit mettre à jour le devis de masse et centrage, par calcul ou par une nouvelle pesée selon les règles applicables. Un devis non à jour rend les calculs du pilote faux.</div>\n"
      },
      {
       "titre": "Ce que la maintenance change aux performances",
       "contenu": "\n<p>Les performances publiées dans le manuel de vol (distances de décollage, vitesses de montée, consommation) supposent un avion en état conforme. Plusieurs défauts d'entretien les dégradent directement :</p>\n<table>\n<thead><tr><th>Défaut</th><th>Effet sur le vol</th></tr></thead>\n<tbody>\n<tr><td>Calage d'aile ou vrillage modifié après une réparation</td><td>Avion qui penche ou dérape en vol, décrochage dissymétrique</td></tr>\n<tr><td>Débattements de gouvernes hors tolérance</td><td>Efficacité réduite des commandes, arrondi difficile à l'atterrissage</td></tr>\n<tr><td>Anémomètre ou circuit statique défectueux</td><td>Vitesses affichées fausses, risque de décrochage ou de dépassement de VNE</td></tr>\n<tr><td>Moteur ou hélice n'atteignant pas le régime statique</td><td>Distances de décollage allongées, montée dégradée</td></tr>\n<tr><td>Masse à vide sous-estimée dans le devis</td><td>Avion réellement plus lourd que calculé, centrage faux</td></tr>\n</tbody>\n</table>\n<p>Le mécanicien relie donc ses contrôles aux conséquences en vol : un essai, une mesure ou une mise à jour du devis n'est pas une formalité, mais une condition pour que les chiffres utilisés par le pilote restent vrais.</p>\n"
      }
     ],
     "points_cles": [
      "En palier stabilisé : portance = poids et traction = traînée.",
      "En montée, la traction doit vaincre la traînée plus la composante du poids sur la trajectoire.",
      "En virage en palier, n = 1 / cos φ ; à 60°, n = 2.",
      "La vitesse de décrochage est multipliée par la racine du facteur de charge.",
      "Arcs de l'anémomètre : blanc (VS0 à VFE), vert (VS1 à VNO), jaune (VNO à VNE), trait rouge VNE.",
      "L'avion est stable en tangage si le CG est en avant du foyer ; un centrage arrière est dangereux.",
      "Centrage = somme des moments / masse totale, par rapport au plan de référence.",
      "Toute modification d'équipement impose la mise à jour du devis de masse et centrage."
     ],
     "lexique": [
      {
       "terme": "Facteur de charge",
       "def": "Rapport de la portance au poids ; il mesure la charge supportée par la structure."
      },
      {
       "terme": "Domaine de vol",
       "def": "Ensemble des vitesses et facteurs de charge autorisés, représenté par le diagramme V-n."
      },
      {
       "terme": "VNE",
       "def": "Vitesse à ne jamais dépasser, matérialisée par un trait rouge sur l'anémomètre."
      },
      {
       "terme": "VNO",
       "def": "Vitesse maximale de croisière normale, fin de l'arc vert."
      },
      {
       "terme": "VA",
       "def": "Vitesse de manœuvre, au-dessous de laquelle un braquage complet ne peut pas dépasser le facteur de charge limite."
      },
      {
       "terme": "Foyer",
       "def": "Point d'application des variations de portance dues aux variations d'incidence."
      },
      {
       "terme": "Centrage",
       "def": "Position du centre de gravité de l'avion par rapport à une référence."
      },
      {
       "terme": "Plan de référence (datum)",
       "def": "Plan choisi par le constructeur à partir duquel sont mesurés tous les bras de levier."
      },
      {
       "terme": "Corde aérodynamique moyenne",
       "def": "Corde d'une aile rectangulaire équivalente, servant à exprimer le centrage en pourcentage."
      },
      {
       "terme": "Bras de levier",
       "def": "Distance horizontale entre une masse et le plan de référence."
      }
     ]
    },
    {
     "id": "bavg-electrotechnique-bord",
     "titre": "Électrotechnique de bord : batteries, génération et protection",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Appliquer les lois de Kirchhoff et le calcul de puissance à un circuit de bord.",
      "Comparer les batteries au plomb et au nickel-cadmium et en assurer l'entretien.",
      "Expliquer la production d'électricité par induction et le fonctionnement d'un alternateur à redresseur.",
      "Décrire la régulation de tension, le démarreur et les contacteurs.",
      "Choisir et contrôler les protections d'un circuit : fusibles et disjoncteurs."
     ],
     "sections": [
      {
       "titre": "Lois des circuits et bilan électrique",
       "contenu": "\n<p>Le réseau de bord d'un avion léger fonctionne en <strong>courant continu</strong>, sous 14 V nominal (avions équipés d'une batterie de 12 V) ou 28 V nominal (batterie de 24 V). Pour l'analyser, on utilise, en plus de la loi d'Ohm U = R × I et de la puissance P = U × I, les deux <strong>lois de Kirchhoff</strong> :</p>\n<ul>\n<li><strong>loi des nœuds</strong> : la somme des intensités qui arrivent à un nœud est égale à la somme de celles qui en partent. La barre bus qui alimente dix équipements reçoit la somme de leurs courants ;</li>\n<li><strong>loi des mailles</strong> : dans une boucle fermée, la somme algébrique des tensions est nulle. La tension disponible aux bornes d'un équipement est la tension du bus moins les chutes de tension dans les câbles et les connexions.</li>\n</ul>\n<p>Un <strong>bilan électrique</strong> recense la consommation de chaque équipement dans chaque phase de vol. Il permet de vérifier que l'alternateur suffit et de calculer l'autonomie de la batterie en cas de panne de génération.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> autonomie sur batterie après une panne d'alternateur.<br>Données : réseau 14 V, batterie 12 V de capacité 35 Ah ; consommations maintenues après délestage : radio en veille 1,5 A, transpondeur 1,5 A, GPS 1,2 A, éclairage instruments 0,8 A.<br>1. Courant total (loi des nœuds) : 1,5 + 1,5 + 1,2 + 0,8 = 5 A.<br>2. Capacité réellement utilisable : on ne compte pas sur 100 % de la capacité nominale ; avec 75 % (batterie en bon état, température douce), on dispose d'environ 26 Ah.<br>3. Autonomie : 26 / 5 ≈ 5,2 h théoriques ; une émission radio (environ 5 A de plus) réduit nettement ce temps.<br>4. Interprétation : un délestage rapide est déterminant ; une batterie vieillie peut ne fournir que la moitié de sa capacité.</div>\n"
      },
      {
       "titre": "Les batteries d'aviation",
       "contenu": "\n<p>La batterie assure le démarrage du moteur, alimente le réseau en secours et stabilise la tension du bus. Deux technologies dominent en aviation légère.</p>\n<table>\n<thead><tr><th>Critère</th><th>Plomb-acide</th><th>Nickel-cadmium (NiCd)</th></tr></thead>\n<tbody>\n<tr><td>Tension nominale par élément</td><td>2 V (6 éléments pour 12 V, 12 pour 24 V)</td><td>1,2 V (environ 20 éléments pour 24 V)</td></tr>\n<tr><td>Électrolyte</td><td>Acide sulfurique dilué ; libre ou immobilisé (batteries étanches à recombinaison)</td><td>Hydroxyde de potassium (base forte)</td></tr>\n<tr><td>Contrôle de charge</td><td>Tension à vide ; densité de l'électrolyte pour les batteries ouvertes (environ 1,26 à 1,28 chargée)</td><td>La densité ne renseigne pas sur la charge ; contrôle par cycle de décharge et recharge en atelier</td></tr>\n<tr><td>Points forts</td><td>Simple, peu coûteuse</td><td>Fort courant de démarrage, bonne tenue au froid, longue durée de vie</td></tr>\n<tr><td>Risque particulier</td><td>Dégagement d'hydrogène en charge, corrosion acide</td><td>Emballement thermique en cas de surcharge</td></tr>\n</tbody>\n</table>\n<p>La <strong>capacité</strong> d'une batterie, en ampères-heures (Ah), indique la quantité d'électricité qu'elle peut fournir dans des conditions normalisées. Un <strong>test de capacité</strong> périodique, selon les données du fabricant, vérifie qu'elle reste au-dessus du seuil minimal (souvent 80 % de la valeur nominale) exigé pour l'usage de secours.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'électrolyte d'une batterie au plomb (acide) et celui d'une batterie NiCd (base) neutralisent mutuellement leurs effets. Une batterie NiCd ne doit jamais être entretenue dans un local, avec des outils ou des bacs ayant servi aux batteries au plomb : la contamination la détruit. Port de lunettes, gants et tablier obligatoire ; ventilation du local pour évacuer l'hydrogène.</div>\n"
      },
      {
       "titre": "Magnétisme, induction et production d'électricité",
       "contenu": "\n<p>Un courant électrique crée un <strong>champ magnétique</strong> ; c'est le principe des électroaimants, des relais et des moteurs. Inversement, la <strong>loi de Faraday</strong> indique qu'un conducteur soumis à un flux magnétique variable devient le siège d'une force électromotrice induite. La <strong>loi de Lenz</strong> précise que le courant induit s'oppose à la cause qui lui donne naissance : c'est pourquoi il faut un couple mécanique pour faire tourner une génératrice en charge.</p>\n<p>Les avions légers récents utilisent un <strong>alternateur</strong> entraîné par le moteur, par courroie ou par engrenage :</p>\n<ul>\n<li>un <strong>rotor</strong> (inducteur) parcouru par un courant d'excitation crée un champ magnétique tournant ;</li>\n<li>un <strong>stator</strong> à trois enroulements (induit) produit un courant alternatif triphasé ;</li>\n<li>un <strong>pont de diodes</strong> intégré redresse ce courant en continu pour alimenter le bus.</li>\n</ul>\n<p>Les avions plus anciens utilisent une <strong>génératrice à courant continu</strong> à collecteur et balais, qui ne débite correctement qu'à régime moteur assez élevé ; l'alternateur, lui, fournit du courant dès le ralenti, ce qui explique son adoption.</p>\n<p>Le <strong>régulateur de tension</strong> ajuste le courant d'excitation pour maintenir la tension du bus à une valeur fixée (de l'ordre de 14 V sur un réseau 12 V et de 28 V sur un réseau 24 V, valeur exacte selon le manuel). Il est associé à une <strong>protection contre les surtensions</strong> qui coupe l'excitation si la tension dépasse un seuil, et à un indicateur (ampèremètre ou voyant « ALT ») qui informe le pilote.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en régime normal, c'est l'alternateur qui alimente le réseau et recharge la batterie. Un ampèremètre de batterie qui indique une décharge permanente en croisière signale une panne de génération : courroie, excitation, régulateur ou diodes.</div>\n"
      },
      {
       "titre": "Démarreur, relais et contacteurs",
       "contenu": "\n<p>Le <strong>démarreur</strong> est un moteur à courant continu à excitation série, choisi pour son couple très élevé au démarrage. Il absorbe un courant de plusieurs centaines d'ampères pendant quelques secondes, d'où des câbles de forte section et une commande par <strong>contacteur</strong> (relais de puissance) : le pilote actionne un petit courant de commande, le contacteur ferme le circuit de puissance.</p>\n<p>On rencontre principalement :</p>\n<ul>\n<li>le <strong>contacteur de batterie</strong>, commandé par l'interrupteur « Master », qui relie la batterie au bus ;</li>\n<li>le <strong>contacteur de démarreur</strong>, commandé par la clé de contact en position « Start » ;</li>\n<li>le <strong>relais d'avionique</strong>, qui isole les équipements électroniques pendant le démarrage pour les protéger des pointes de tension.</li>\n</ul>\n<p>Les bobines de relais sont souvent équipées d'une <strong>diode de roue libre</strong>, montée en inverse, qui absorbe la surtension créée par la bobine à l'ouverture du circuit (loi de Lenz).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un « clic » au tournage de la clé sans rotation du démarreur oriente vers une batterie faible, une mauvaise masse ou des contacts de puissance du contacteur usés. Le mécanicien mesure la tension aux bornes du démarreur pendant l'essai : une tension très basse avec une batterie chargée révèle une chute de tension dans une connexion.</div>\n"
      },
      {
       "titre": "Protéger les circuits",
       "contenu": "\n<p>Chaque circuit est protégé contre les surintensités pour éviter l'échauffement des câbles et l'incendie. La protection protège d'abord le <strong>câble</strong>, pas l'équipement : son calibre est choisi en fonction de la section et de la longueur du câble, selon les données du constructeur et les pratiques standard.</p>\n<table>\n<thead><tr><th>Dispositif</th><th>Principe</th><th>Après déclenchement</th></tr></thead>\n<tbody>\n<tr><td>Fusible</td><td>Lame qui fond au-delà d'une intensité donnée</td><td>Remplacement par un fusible de même calibre et même type</td></tr>\n<tr><td>Disjoncteur thermique</td><td>Bilame qui se déforme sous l'échauffement et ouvre le circuit ; bouton qui ressort</td><td>Réarmable manuellement, après un délai de refroidissement</td></tr>\n<tr><td>Interrupteur-disjoncteur</td><td>Combine commande et protection</td><td>Réarmable</td></tr>\n</tbody>\n</table>\n<p>Un disjoncteur qui déclenche signale un défaut. La règle courante en exploitation est de ne le réarmer qu'une fois, après refroidissement ; s'il déclenche à nouveau, le circuit doit être inspecté au sol.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remplacer un fusible ou un disjoncteur par un calibre supérieur « parce qu'il saute tout le temps » est une faute grave : le câble n'est plus protégé et peut s'échauffer jusqu'à l'incendie. La cause du déclenchement (court-circuit, frottement de câble, équipement défaillant) doit être trouvée.</div>\n"
      },
      {
       "titre": "Notions de courant alternatif",
       "contenu": "\n<p>Même si le réseau principal est continu, le mécanicien rencontre le courant alternatif à l'intérieur de l'alternateur, dans certains instruments et dans les alimentations au sol. Une tension sinusoïdale est caractérisée par sa <strong>fréquence</strong> f (en hertz), sa <strong>valeur de crête</strong> Umax et sa <strong>valeur efficace</strong> U = Umax / √2, qui est la valeur affichée par un multimètre en position alternative. Dans un circuit comportant des bobines et des condensateurs, le courant est déphasé par rapport à la tension ; l'opposition au passage du courant s'appelle l'<strong>impédance</strong>, en ohms.</p>\n<p>Un <strong>transformateur</strong> modifie la valeur d'une tension alternative : le rapport des tensions est égal au rapport des nombres de spires. Il ne fonctionne pas en courant continu. Les réseaux triphasés, que l'on retrouve sur les avions plus gros, utilisent trois tensions déphasées de 120°, couplées en étoile ou en triangle.</p>\n"
      }
     ],
     "points_cles": [
      "Réseau de bord en continu : 14 V nominal (batterie 12 V) ou 28 V nominal (batterie 24 V).",
      "Loi des nœuds pour les courants, loi des mailles pour les tensions et chutes de tension.",
      "Élément plomb : 2 V ; élément NiCd : 1,2 V ; ne jamais mélanger leurs lieux et outils d'entretien.",
      "La capacité en Ah conditionne l'autonomie en secours ; elle se vérifie par un test périodique.",
      "L'alternateur produit du triphasé, redressé par des diodes et régulé par action sur l'excitation.",
      "Le démarreur, moteur série à fort couple, est commandé par un contacteur.",
      "La protection est dimensionnée pour le câble ; on ne surcalibre jamais un fusible ou un disjoncteur.",
      "Valeur efficace = valeur de crête / √2 en sinusoïdal."
     ],
     "lexique": [
      {
       "terme": "Barre bus",
       "def": "Conducteur commun qui distribue l'énergie électrique vers plusieurs circuits."
      },
      {
       "terme": "Capacité d'une batterie",
       "def": "Quantité d'électricité qu'elle peut fournir, en ampères-heures."
      },
      {
       "terme": "Emballement thermique",
       "def": "Échauffement auto-entretenu d'une batterie, notamment NiCd, en cas de surcharge."
      },
      {
       "terme": "Loi de Faraday",
       "def": "Une variation de flux magnétique induit une force électromotrice dans un conducteur."
      },
      {
       "terme": "Excitation",
       "def": "Courant qui crée le champ magnétique d'un alternateur ; le régulateur agit sur lui."
      },
      {
       "terme": "Pont de diodes",
       "def": "Ensemble de diodes qui redresse un courant alternatif en courant continu."
      },
      {
       "terme": "Contacteur",
       "def": "Relais de puissance qui ferme un circuit de fort courant sur commande d'un faible courant."
      },
      {
       "terme": "Disjoncteur thermique",
       "def": "Protection réarmable qui ouvre le circuit par échauffement d'un bilame."
      },
      {
       "terme": "Valeur efficace",
       "def": "Valeur d'une tension continue qui produirait le même échauffement dans une résistance."
      },
      {
       "terme": "Impédance",
       "def": "Opposition d'un circuit au passage d'un courant alternatif, en ohms."
      }
     ]
    },
    {
     "id": "bavg-electronique-avionique",
     "titre": "Électronique, numérique et avionique de l'avion léger",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Identifier les composants électroniques de base et les capteurs d'un avion léger.",
      "Convertir des nombres entre les bases décimale, binaire, octale et hexadécimale.",
      "Lire une table de vérité et un schéma logique simple.",
      "Décrire les équipements d'avionique courants et leur rôle (communication, navigation, surveillance).",
      "Appliquer les précautions liées à la compatibilité électromagnétique lors d'une intervention."
     ],
     "sections": [
      {
       "titre": "Composants et capteurs",
       "contenu": "\n<p>Les équipements électroniques reposent sur quelques composants de base. La <strong>résistance</strong> limite le courant ; le <strong>condensateur</strong> stocke une charge et filtre les variations de tension ; la <strong>bobine</strong> (inductance) s'oppose aux variations de courant ; la <strong>diode</strong> ne laisse passer le courant que dans un sens (redressement, protection contre les inversions de polarité) ; le <strong>transistor</strong> amplifie un signal ou fonctionne en interrupteur commandé.</p>\n<p>Les informations moteur et carburant proviennent de <strong>capteurs</strong> qui transforment une grandeur physique en signal électrique.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Capteur courant</th><th>Principe</th></tr></thead>\n<tbody>\n<tr><td>Température des culasses (CHT), des gaz d'échappement (EGT)</td><td>Thermocouple</td><td>Deux métaux différents soudés produisent une petite tension fonction de la température</td></tr>\n<tr><td>Température d'huile</td><td>Sonde résistive</td><td>La résistance varie avec la température</td></tr>\n<tr><td>Pression d'huile, de carburant, d'admission</td><td>Capteur de pression</td><td>Une membrane déforme un élément sensible (jauge de contrainte, piézorésistance)</td></tr>\n<tr><td>Quantité de carburant</td><td>Flotteur et potentiomètre, ou sonde capacitive</td><td>Le niveau modifie une résistance ou une capacité</td></tr>\n<tr><td>Régime moteur</td><td>Capteur magnétique ou prise sur la magnéto</td><td>Impulsions comptées par tour</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un thermocouple fonctionne avec des fils de compensation d'un alliage précis, d'une longueur parfois imposée par le constructeur. Raccourcir ces fils, les remplacer par du cuivre ou les épisser sans respecter le type modifie l'indication de température.</div>\n"
      },
      {
       "titre": "Les systèmes de numération",
       "contenu": "\n<p>Un calculateur ne manipule que deux états : 0 et 1, appelés <strong>bits</strong>. Il faut donc savoir passer d'une base à l'autre.</p>\n<ul>\n<li><strong>Binaire</strong> (base 2) : chaque rang vaut une puissance de 2. 1011 en binaire vaut 1×8 + 0×4 + 1×2 + 1×1 = 11 en décimal.</li>\n<li><strong>Octal</strong> (base 8) : chiffres de 0 à 7 ; chaque chiffre octal correspond à 3 bits. Les <strong>codes transpondeur</strong> sont octaux, ce qui explique qu'aucun code ne comporte de 8 ou de 9.</li>\n<li><strong>Hexadécimal</strong> (base 16) : chiffres de 0 à 9 puis A à F ; chaque chiffre correspond à 4 bits. Il sert à écrire de façon compacte des adresses et des données, par exemple l'adresse mode S unique de 24 bits d'un avion, écrite en 6 chiffres hexadécimaux.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conversions autour du code transpondeur 7 600.<br>1. Chaque chiffre octal donne 3 bits : 7 = 111 ; 6 = 110 ; 0 = 000 ; 0 = 000.<br>2. Code binaire transmis : 111 110 000 000, soit 12 bits.<br>3. Valeur décimale : 7 × 8³ + 6 × 8² + 0 + 0 = 3 584 + 384 = 3 968.<br>4. Conversion d'un octet binaire en hexadécimal : 1011 0110 se découpe en deux groupes de 4 bits, 1011 = B et 0110 = 6, d'où B6 ; en décimal 11 × 16 + 6 = 182.<br>Rappel d'exploitation : 7 500 signale une intervention illicite, 7 600 une panne radio, 7 700 une situation de détresse ; un mécanicien qui teste un transpondeur au sol évite ces codes.</div>\n"
      },
      {
       "titre": "Logique combinatoire et afficheurs",
       "contenu": "\n<p>Les fonctions logiques combinent des états binaires selon les règles de l'<strong>algèbre de Boole</strong>. On les décrit par une <strong>table de vérité</strong>, qui donne la sortie pour toutes les combinaisons d'entrées.</p>\n<table>\n<thead><tr><th>A</th><th>B</th><th>ET (A·B)</th><th>OU (A+B)</th><th>NON A</th><th>NON-ET</th></tr></thead>\n<tbody>\n<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>\n<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>\n<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>\n<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>\n</tbody>\n</table>\n<p>Exemple : l'alarme de train non sorti d'un avion à train rentrant s'allume si les gaz sont réduits ET le train n'est pas verrouillé bas ; une autre logique peut ajouter « OU volets en position atterrissage ». Le mécanicien qui recherche une panne d'alarme vérifie chaque entrée (contacteur de manette, contacteurs de train) avant de mettre en cause l'avertisseur.</p>\n<p>Les informations sont restituées par des <strong>afficheurs</strong> : diodes électroluminescentes (LED) pour les voyants et certains afficheurs numériques, écrans à <strong>cristaux liquides</strong> (LCD) rétroéclairés pour les écrans de navigation et les planches de bord intégrées. Les écrans à tube cathodique ont disparu de l'aviation légère récente.</p>\n"
      },
      {
       "titre": "L'avionique d'un avion léger",
       "contenu": "\n<p>L'<strong>avionique</strong> regroupe les équipements électroniques de communication, de navigation, de surveillance et d'affichage.</p>\n<table>\n<thead><tr><th>Fonction</th><th>Équipement</th><th>Repère technique</th></tr></thead>\n<tbody>\n<tr><td>Communication</td><td>Émetteur-récepteur VHF</td><td>Bande 118 à 136,975 MHz, espacement 8,33 kHz exigé en Europe</td></tr>\n<tr><td>Radionavigation</td><td>Récepteur VOR / ILS</td><td>VOR et localiseur dans la bande 108 à 117,95 MHz</td></tr>\n<tr><td>Navigation satellitaire</td><td>Récepteur GNSS (GPS)</td><td>Base de données à mettre à jour selon le cycle aéronautique de 28 jours</td></tr>\n<tr><td>Surveillance</td><td>Transpondeur mode S</td><td>Répond aux interrogations radar ; transmet code, altitude et adresse unique</td></tr>\n<tr><td>Recherche et sauvetage</td><td>Balise de détresse ELT</td><td>Émission sur 406 MHz (et 121,5 MHz pour le radioguidage final), déclenchement automatique au choc</td></tr>\n<tr><td>Affichage intégré</td><td>Écrans de vol primaire et de navigation</td><td>Associent une centrale d'attitude et de cap (AHRS) et un calculateur anémobarométrique (ADC)</td></tr>\n</tbody>\n</table>\n<p>Ces équipements échangent des données par des <strong>liaisons numériques</strong> (bus série) : un calculateur émet, plusieurs récepteurs écoutent. Une panne affichée « absence de donnée » sur un écran oriente vers la source, le câblage ou la configuration, plutôt que vers l'écran lui-même.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une planche de bord intégrée, de nombreuses pannes se règlent par la vérification de la configuration logicielle, des versions et des bases de données, selon le manuel d'installation de l'équipementier. Le mécanicien d'aviation générale travaille souvent en lien avec un atelier avionique spécialisé pour les tâches qui dépassent son habilitation.</div>\n"
      },
      {
       "titre": "Compatibilité électromagnétique et précautions",
       "contenu": "\n<p>La <strong>compatibilité électromagnétique</strong> (CEM) est la capacité d'un équipement à fonctionner correctement dans son environnement électromagnétique sans perturber les autres. Les menaces sont les <strong>interférences électromagnétiques</strong> entre équipements de bord, les champs rayonnés de forte intensité émis par des radars ou émetteurs puissants au sol (en anglais HIRF) et la <strong>foudre</strong>.</p>\n<p>Les protections reposent sur la <strong>métallisation</strong> (continuité électrique de la structure), le <strong>blindage</strong> des câbles et sa reprise correcte aux connecteurs, la séparation des faisceaux sensibles et de puissance, et le bon état des antennes et de leur plan de masse.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler les entrées et sorties d'un équipement avant de le déposer.<br>1. Vérifier l'alimentation au connecteur de l'équipement (tension présente, polarité, masse) avec un multimètre, connecteur débranché puis rebranché selon le manuel.<br>2. Vérifier les signaux d'entrée attendus (par exemple présence de l'information d'altitude venant de l'encodeur pour le transpondeur).<br>3. Vérifier la continuité et l'isolement des câbles jusqu'à la source, selon le manuel de câblage.<br>4. Seulement si alimentation et entrées sont correctes et que la sortie est absente, conclure à l'équipement et le déposer.<br>Cette démarche évite de déposer à tort un équipement coûteux dont la seule faute est un connecteur oxydé.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le transpondeur, l'altimètre et l'encodeur d'altitude forment une chaîne soumise à des contrôles périodiques réglementaires. Après une intervention sur le circuit statique ou sur l'un de ces équipements, des essais de corrélation sont nécessaires selon les données applicables.</div>\n"
      },
      {
       "titre": "Contrôler une chaîne de mesure moteur",
       "contenu": "\n<p>Une indication moteur anormale (température de culasse trop basse sur un cylindre, pression d'huile qui oscille) peut venir du moteur lui-même ou de la <strong>chaîne de mesure</strong> : capteur, câblage, connecteur, indicateur. Avant de déposer un cylindre ou une pompe, on contrôle la chaîne.</p>\n<ul>\n<li>On compare l'indication suspecte aux autres paramètres : une CHT basse sur un seul cylindre avec une EGT normale sur ce même cylindre oriente vers la sonde ou son câblage plutôt que vers la combustion.</li>\n<li>On contrôle la continuité et l'isolement des fils de capteur, l'état des connecteurs et des points de masse.</li>\n<li>On simule le capteur avec un <strong>calibrateur</strong> (générateur de tension pour un thermocouple, résistance étalon pour une sonde résistive) : si l'indicateur affiche la valeur correspondant au signal injecté, l'indicateur et le câblage sont bons et le capteur est en cause.</li>\n<li>On permute éventuellement deux sondes de même type entre cylindres, si la procédure l'admet, pour voir si le défaut suit la sonde.</li>\n</ul>\n<p>Cette démarche, appliquée à tous les capteurs, évite des démontages coûteux et respecte la logique de recherche de panne : vérifier d'abord la mesure avant de mettre en cause ce qui est mesuré.</p>\n"
      }
     ],
     "points_cles": [
      "Diode : passage du courant dans un seul sens ; transistor : amplification ou commutation.",
      "Thermocouples pour CHT et EGT, sondes résistives pour la température d'huile.",
      "Un chiffre octal = 3 bits ; un chiffre hexadécimal = 4 bits ; les codes transpondeur sont octaux.",
      "La table de vérité décrit complètement une fonction logique.",
      "VHF COM : 118 à 136,975 MHz ; VOR : 108 à 117,95 MHz ; ELT : 406 MHz.",
      "Une base de données de navigation suit le cycle aéronautique de 28 jours.",
      "Avant de déposer un équipement, contrôler alimentation, entrées et câblage.",
      "Métallisation, blindage et séparation des faisceaux protègent contre les perturbations électromagnétiques."
     ],
     "lexique": [
      {
       "terme": "Thermocouple",
       "def": "Capteur formé de deux métaux différents produisant une tension fonction de la température."
      },
      {
       "terme": "Bit",
       "def": "Unité d'information binaire, valant 0 ou 1."
      },
      {
       "terme": "Octal",
       "def": "Système de numération en base 8, utilisé notamment pour les codes transpondeur."
      },
      {
       "terme": "Hexadécimal",
       "def": "Système de numération en base 16, chiffres 0 à 9 et A à F."
      },
      {
       "terme": "Table de vérité",
       "def": "Tableau donnant la sortie d'une fonction logique pour toutes les combinaisons d'entrées."
      },
      {
       "terme": "Transpondeur",
       "def": "Équipement qui répond aux interrogations radar en transmettant un code et l'altitude."
      },
      {
       "terme": "ELT",
       "def": "Balise de détresse qui émet automatiquement un signal de localisation après un choc."
      },
      {
       "terme": "AHRS",
       "def": "Centrale qui fournit attitude et cap à partir de capteurs électroniques."
      },
      {
       "terme": "ADC",
       "def": "Calculateur anémobarométrique qui élabore vitesse, altitude et vitesse verticale."
      },
      {
       "terme": "CEM",
       "def": "Compatibilité électromagnétique : fonctionner sans perturber ni être perturbé."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Technologie de l'avion léger",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bavg-structures-cellule",
     "titre": "Structures d'avions légers : conception, repérage et technologies",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Distinguer structure primaire et secondaire et les philosophies de conception (vie sûre, intégrité, tolérance aux dommages).",
      "Identifier les éléments d'une structure semi-monocoque et leur rôle.",
      "Localiser un point de l'avion par stations, lignes de flottaison, lignes de référence et zones.",
      "Comparer les technologies de structure : tubes entoilés, bois, métal, composite.",
      "Associer chaque partie de la structure à son chapitre ATA."
     ],
     "sections": [
      {
       "titre": "Structure primaire, structure secondaire et philosophies de conception",
       "contenu": "\n<p>La <strong>structure primaire</strong> regroupe les éléments qui transmettent les charges de vol, d'atterrissage ou de pressurisation et dont la rupture compromettrait la sécurité de l'avion : longerons d'aile, ferrures d'attache, cadres principaux, bâti moteur. La <strong>structure secondaire</strong> transmet peu d'efforts et sa défaillance n'entraîne pas de catastrophe immédiate : carénages, capots, portes d'accès non travaillantes. Cette distinction commande la sévérité des limites de dommages et des réparations.</p>\n<p>Les constructeurs appliquent trois philosophies de conception :</p>\n<table>\n<thead><tr><th>Philosophie</th><th>Principe</th><th>Conséquence en maintenance</th></tr></thead>\n<tbody>\n<tr><td>Vie sûre (safe life)</td><td>La pièce est dimensionnée pour une durée d'utilisation sans fissure ; elle est remplacée à échéance</td><td>Suivi d'une limite de vie (heures, cycles) ; remplacement obligatoire</td></tr>\n<tr><td>Intégrité (fail safe)</td><td>La structure possède des chemins d'efforts redondants : si un élément cède, les autres reprennent la charge</td><td>Inspections pour détecter l'élément rompu avant la défaillance du second</td></tr>\n<tr><td>Tolérance aux dommages (damage tolerance)</td><td>On admet l'existence de fissures et on calcule leur vitesse de propagation</td><td>Intervalles d'inspection calculés pour détecter une fissure avant qu'elle n'atteigne une longueur critique</td></tr>\n</tbody>\n</table>\n<p>Beaucoup d'avions légers anciens ont été conçus en vie sûre ou sans philosophie formalisée ; avec leur vieillissement, les autorités et constructeurs ont ajouté des inspections spécifiques des zones sensibles à la fatigue et à la corrosion, parfois par consignes de navigabilité.</p>\n"
      },
      {
       "titre": "Les éléments d'une structure semi-monocoque",
       "contenu": "\n<p>La plupart des avions légers métalliques sont de construction <strong>semi-monocoque</strong> : un revêtement mince travaillant, rigidifié par une ossature.</p>\n<ul>\n<li>Dans le <strong>fuselage</strong> : les <strong>cadres</strong> (couples) donnent la forme de la section ; les <strong>lisses</strong> longitudinales raidissent le revêtement ; les <strong>longerons de fuselage</strong> reprennent la flexion ; les <strong>cloisons</strong> séparent les compartiments (la cloison pare-feu isole le moteur).</li>\n<li>Dans l'<strong>aile</strong> : le <strong>longeron</strong> principal, formé de semelles et d'une âme, reprend la flexion ; les <strong>nervures</strong> donnent le profil et transmettent les efforts du revêtement au longeron ; un longeron arrière porte les volets et ailerons ; le <strong>revêtement</strong> forme avec les longerons un caisson qui résiste à la torsion.</li>\n<li>Les <strong>ferrures</strong>, pièces usinées ou forgées, concentrent les efforts aux attaches (aile-fuselage, train, moteur).</li>\n</ul>\n<p>Une structure <strong>monocoque</strong> pure (sans ossature, le revêtement épais porte tout) se rencontre surtout en composite. Une structure en <strong>treillis</strong> (tubes soudés triangulés) porte les efforts par ses tubes ; le revêtement en toile ne donne que la forme.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans une structure semi-monocoque, le revêtement est un élément porteur. Une tôle bosselée, découpée ou percée n'est pas un simple défaut d'aspect : elle peut affaiblir le caisson et doit être évaluée selon les limites de dommages du constructeur.</div>\n"
      },
      {
       "titre": "Se repérer sur l'avion : stations, lignes et zones",
       "contenu": "\n<p>Pour décrire précisément l'emplacement d'un dommage ou d'une réparation, le constructeur définit un système de coordonnées.</p>\n<table>\n<thead><tr><th>Repère</th><th>Abréviation usuelle</th><th>Direction mesurée</th></tr></thead>\n<tbody>\n<tr><td>Station de fuselage</td><td>FS (Fuselage Station)</td><td>Distance longitudinale depuis un plan de référence situé souvent en avant du nez</td></tr>\n<tr><td>Ligne de flottaison</td><td>WL (Water Line)</td><td>Hauteur au-dessus d'un plan horizontal de référence</td></tr>\n<tr><td>Ligne de référence latérale</td><td>BL (Buttock Line)</td><td>Distance à gauche ou à droite du plan de symétrie</td></tr>\n<tr><td>Station de voilure</td><td>WS (Wing Station)</td><td>Distance le long de l'envergure depuis l'axe ou l'emplanture</td></tr>\n</tbody>\n</table>\n<p>Les valeurs sont souvent en pouces sur les avions d'origine américaine. Le <strong>zonage</strong> (zoning) découpe l'avion en zones numérotées, utilisées pour organiser les inspections : par convention ATA, la centaine désigne une grande zone (par exemple 100 pour le fuselage inférieur, 400 pour les groupes motopropulseurs, 500 et 600 pour les ailes gauche et droite), les dizaines et unités des sous-zones. Chaque constructeur adapte ce principe : on se réfère toujours au chapitre ATA 06 de sa documentation.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> localiser et décrire un dommage.<br>Situation : une bosse est découverte sur le revêtement inférieur de l'aile droite.<br>1. Identifier la nervure la plus proche et lire sa station sur le plan du manuel (par exemple WS 100).<br>2. Mesurer la distance du centre du dommage à cette nervure et au longeron le plus proche.<br>3. Mesurer les dimensions du dommage : longueur, largeur, profondeur, présence de pli vif ou de fissure.<br>4. Rédiger : « Bosse de 35 mm × 20 mm, profondeur 2 mm, sans fissure, revêtement inférieur aile droite, à 60 mm extérieur de la nervure WS 100 et 40 mm en arrière du longeron avant, zone 6xx ».<br>5. Comparer ensuite aux limites de dommages admissibles du manuel de réparation structurale.</div>\n"
      },
      {
       "titre": "Les technologies de structure en aviation générale",
       "contenu": "\n<p>L'aviation générale conserve en service des avions de toutes les époques, ce qui oblige le mécanicien à connaître plusieurs technologies.</p>\n<table>\n<thead><tr><th>Technologie</th><th>Matériaux</th><th>Points d'inspection typiques</th></tr></thead>\n<tbody>\n<tr><td>Tubes soudés entoilés</td><td>Tubes d'acier au chrome-molybdène, toile polyester ou coton enduite</td><td>Corrosion interne des tubes (surtout en partie basse), état et tension de la toile, coutures</td></tr>\n<tr><td>Bois</td><td>Épicéa, pin d'Orégon, contreplaqué aviation, colles</td><td>Décollement des joints de colle, pourriture, humidité, fissures de compression</td></tr>\n<tr><td>Métallique riveté</td><td>Alliages d'aluminium plaqués, rivets</td><td>Corrosion, fissures autour des fixations, rivets desserrés (traces noires)</td></tr>\n<tr><td>Composite</td><td>Fibres de verre ou carbone, résine époxy, nids d'abeille ou mousse</td><td>Délaminage, décollement, impacts, dégradation par les rayons ultraviolets et la chaleur</td></tr>\n</tbody>\n</table>\n<p>Sur les <strong>structures en bois</strong>, l'humidité est l'ennemi principal : elle fait gonfler le bois, affaiblit certaines colles et favorise les champignons. On contrôle les joints au tapotement et en insérant une lame mince ; un bois sain sonne clair et ne se laisse pas pénétrer par une pointe. Les colles anciennes à la caséine sont sensibles à l'humidité ; les colles modernes (résorcine, époxy) y résistent mieux.</p>\n<p>Sur les <strong>revêtements en toile</strong>, la résistance du tissu se contrôle à l'aide d'un <strong>poinçon de test</strong> agréé : une toile dont la résistance est descendue sous la valeur minimale doit être remplacée. Les procédés d'entoilage (tissu, enduits, finitions) sont des systèmes approuvés : on ne mélange pas les produits de deux procédés différents.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une traînée noire autour d'un rivet sur une tôle d'aluminium (en anglais « smoking rivet ») trahit un rivet qui bouge : le frottement produit une fine poudre d'oxyde. Ce signe doit conduire à une inspection de la zone et, le plus souvent, au remplacement des rivets concernés.</div>\n"
      },
      {
       "titre": "La structure dans la documentation : chapitres ATA 51 à 57",
       "contenu": "\n<p>La structure est décrite dans la documentation constructeur selon les chapitres de la norme ATA, organisés comme suit.</p>\n<table>\n<thead><tr><th>Chapitre</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>51</td><td>Pratiques standard et généralités sur la structure : matériaux, fixations, traitements, réparations types</td></tr>\n<tr><td>52</td><td>Portes : porte passager, portes de bagages, trappes</td></tr>\n<tr><td>53</td><td>Fuselage</td></tr>\n<tr><td>54</td><td>Nacelles et mâts (capots et bâti des moteurs)</td></tr>\n<tr><td>55</td><td>Stabilisateurs : empennages horizontal et vertical, gouvernes de profondeur et de direction</td></tr>\n<tr><td>56</td><td>Fenêtres : pare-brise, verrières, hublots</td></tr>\n<tr><td>57</td><td>Ailes, y compris ailerons et volets en tant qu'éléments de structure</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les verrières et pare-brise en acrylique (chapitre ATA 56) se rayent facilement. On les nettoie uniquement avec les produits et chiffons recommandés, jamais avec un solvant non approuvé ou un chiffon sec poussiéreux ; les fissures partant des trous de fixation sont un défaut fréquent à surveiller, notamment après un serrage excessif.</div>\n"
      },
      {
       "titre": "Le vieillissement des avions légers",
       "contenu": "\n<p>L'âge moyen de la flotte d'aviation générale est élevé : de nombreux avions en service ont plus de quarante ans. Le vieillissement de la structure tient à trois causes qui se combinent :</p>\n<ul>\n<li>la <strong>fatigue</strong> accumulée, particulièrement sur les avions d'école qui font de nombreux décollages et atterrissages et des manœuvres répétées ;</li>\n<li>la <strong>corrosion</strong>, favorisée par le stationnement extérieur, l'humidité, la proximité de la mer, les produits de nettoyage inadaptés ;</li>\n<li>les <strong>réparations anciennes</strong>, parfois mal documentées, qui peuvent cacher des dommages ou créer des concentrations de contraintes.</li>\n</ul>\n<p>Les zones à surveiller en priorité sont les attaches d'aile et d'empennage, les longerons, le bâti moteur et sa cloison pare-feu, les fonds de fuselage où l'eau stagne, les ferrures de train, et les zones proches des batteries (acide). Les constructeurs et les autorités publient des documents dédiés aux avions vieillissants, avec des inspections supplémentaires.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un avion ancien, l'examen de l'historique des réparations et des dommages fait partie de l'inspection : une réparation non documentée découverte sur la structure doit être évaluée comme un dommage.</div>\n"
      }
     ],
     "points_cles": [
      "La structure primaire transmet les charges principales ; sa défaillance compromet la sécurité.",
      "Vie sûre : remplacement à échéance ; intégrité : redondance ; tolérance aux dommages : inspections calculées.",
      "En semi-monocoque, le revêtement travaille avec cadres, lisses, longerons et nervures.",
      "On localise un point par FS, WL, BL, WS et par numéro de zone.",
      "Bois : surveiller humidité, joints de colle et pourriture ; toile : tester la résistance au poinçon.",
      "Une traînée noire autour d'un rivet signale un rivet qui travaille.",
      "Chapitres ATA de structure : 51 généralités, 52 portes, 53 fuselage, 54 nacelles, 55 empennages, 56 fenêtres, 57 ailes.",
      "On ne mélange pas les produits de deux procédés d'entoilage différents."
     ],
     "lexique": [
      {
       "terme": "Structure primaire",
       "def": "Partie de la structure qui transmet les charges principales et dont la rupture compromet la sécurité."
      },
      {
       "terme": "Semi-monocoque",
       "def": "Structure à revêtement travaillant rigidifié par une ossature de cadres et de lisses."
      },
      {
       "terme": "Longeron",
       "def": "Poutre principale d'une aile, formée de semelles et d'une âme, qui reprend la flexion."
      },
      {
       "terme": "Nervure",
       "def": "Élément transversal de l'aile qui donne le profil et répartit les efforts."
      },
      {
       "terme": "Lisse",
       "def": "Raidisseur longitudinal fixé sur le revêtement."
      },
      {
       "terme": "Cadre (couple)",
       "def": "Élément transversal du fuselage qui donne la forme de la section."
      },
      {
       "terme": "Ferrure",
       "def": "Pièce massive d'attache qui concentre et transmet des efforts importants."
      },
      {
       "terme": "Station",
       "def": "Coordonnée de position mesurée depuis un plan de référence du constructeur."
      },
      {
       "terme": "Zonage",
       "def": "Découpage de l'avion en zones numérotées pour organiser les inspections."
      },
      {
       "terme": "Tolérance aux dommages",
       "def": "Conception admettant des fissures dont la propagation est maîtrisée par des inspections."
      }
     ]
    },
    {
     "id": "bavg-commandes-vol-reglages",
     "titre": "Commandes de vol : transmissions, compensateurs et réglages",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Décrire les éléments d'une chaîne de commande à câbles et à bielles.",
      "Expliquer le rôle des compensateurs et de l'équilibrage des gouvernes.",
      "Conduire un réglage : neutres, butées, débattements, tension des câbles.",
      "Inspecter câbles, poulies, tendeurs et freinages selon les critères d'acceptation.",
      "Appliquer les vérifications obligatoires après intervention sur une commande de vol."
     ],
     "sections": [
      {
       "titre": "La chaîne de commande d'un avion léger",
       "contenu": "\n<p>Les <strong>commandes de vol</strong> (chapitre ATA 27) transmettent les ordres du pilote aux gouvernes : ailerons (roulis), gouverne de profondeur ou plan horizontal monobloc (tangage), gouverne de direction (lacet), ainsi que les volets et les compensateurs. Sur un avion léger, la transmission est entièrement <strong>mécanique</strong>.</p>\n<table>\n<thead><tr><th>Élément</th><th>Rôle</th><th>Points de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Câble en acier (souvent 7 × 19 fils)</td><td>Transmet un effort de traction ; fonctionne par paire (aller et retour)</td><td>Fils cassés, corrosion, usure aux poulies</td></tr>\n<tr><td>Poulie</td><td>Change la direction du câble</td><td>Rotation libre, usure de la gorge, alignement</td></tr>\n<tr><td>Guide-câble (fairlead)</td><td>Guide le câble à travers une cloison, déviation limitée</td><td>Usure du câble par frottement</td></tr>\n<tr><td>Tendeur (ridoir)</td><td>Règle la tension du câble</td><td>Engagement des filets, freinage</td></tr>\n<tr><td>Bielle ou tube de commande</td><td>Transmet traction et compression</td><td>Rectitude, jeu dans les rotules, freinage des contre-écrous</td></tr>\n<tr><td>Guignol (renvoi)</td><td>Levier qui change la direction et le rapport du mouvement</td><td>Fissures, jeu sur l'axe</td></tr>\n<tr><td>Butée</td><td>Limite le débattement</td><td>Réglage, freinage</td></tr>\n</tbody>\n</table>\n<p>Le câble de commande ne travaille qu'en traction : une gouverne est donc commandée par deux câbles, l'un tirant pour braquer vers le haut, l'autre pour braquer vers le bas. Une <strong>tension</strong> préalable supprime le jeu et assure une réponse immédiate.</p>\n"
      },
      {
       "titre": "Compensateurs et équilibrage des gouvernes",
       "contenu": "\n<p>Un <strong>compensateur</strong> (tab) est une petite surface articulée au bord de fuite d'une gouverne. Il crée un effort aérodynamique qui maintient la gouverne braquée et soulage le pilote.</p>\n<ul>\n<li><strong>Compensateur fixe</strong> : languette métallique réglable au sol par pliage, pour corriger une tendance permanente (par exemple un avion qui penche d'une aile).</li>\n<li><strong>Compensateur réglable en vol</strong> : commandé depuis le poste (roulette de trim), par câbles ou par vérin électrique.</li>\n<li><strong>Tab anti-compensateur</strong> : sur un plan horizontal monobloc (stabilator), il braque dans le même sens que la surface pour augmenter l'effort ressenti et éviter une commande trop légère.</li>\n</ul>\n<p>Les gouvernes sont <strong>équilibrées statiquement</strong> : une masse d'équilibrage, en avant de l'axe d'articulation, ramène le centre de gravité de la gouverne vers l'axe. Cet équilibrage protège contre le <strong>flottement</strong> (en anglais flutter), une vibration aéroélastique auto-entretenue qui peut détruire une gouverne ou un empennage en quelques secondes.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> repeindre une gouverne, la réparer ou remplacer son revêtement ajoute de la masse en arrière de l'axe. Le constructeur impose alors de contrôler l'équilibrage statique (valeur de déséquilibre maximale admissible) avant remise en service. Une gouverne non contrôlée après peinture est une cause connue de flottement.</div>\n"
      },
      {
       "titre": "Régler une chaîne de commande",
       "contenu": "\n<p>Le réglage, appelé <strong>gréement</strong> (rigging), suit toujours l'ordre défini par le manuel de maintenance. Le principe général est le suivant :</p>\n<ol>\n<li>bloquer la commande dans le poste au <strong>neutre</strong> à l'aide d'un outil de calage prévu par le constructeur (broche, gabarit) ;</li>\n<li>régler les tendeurs pour amener la gouverne au neutre (alignée sur le profil ou sur un gabarit) avec la <strong>tension</strong> prescrite ;</li>\n<li>retirer le calage et régler les <strong>butées</strong> pour obtenir les <strong>débattements</strong> maximaux prescrits, avec leur tolérance ;</li>\n<li>vérifier que la butée de la gouverne est atteinte avant la butée de la commande dans le poste, si le manuel le prévoit ;</li>\n<li>freiner tous les tendeurs et contre-écrous, puis réaliser les vérifications de fonctionnement.</li>\n</ol>\n<p>Les débattements se mesurent avec un <strong>rapporteur à niveau</strong> ou un <strong>inclinomètre</strong> posé sur la gouverne, ou en millimètres au bord de fuite à l'aide d'une règle et d'un gabarit.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> convertir un déplacement de bord de fuite en angle de débattement.<br>Données : corde de la gouverne de direction mesurée de l'axe d'articulation au bord de fuite : 280 mm ; déplacement mesuré du bord de fuite perpendiculairement au plan neutre : 105 mm ; débattement prescrit 24° ± 1°.<br>1. Dans le triangle rectangle formé par la corde (hypoténuse) et le déplacement (côté opposé) : sin α = 105 / 280 = 0,375.<br>2. α = arcsin 0,375 ≈ 22,0°.<br>3. Comparaison : 22,0° est en dehors de la tolérance 23° à 25°.<br>4. Action : régler la butée pour augmenter le débattement, puis remesurer ; il faudrait un déplacement d'environ 280 × sin 24° ≈ 114 mm.</div>\n"
      },
      {
       "titre": "La tension des câbles et l'effet de la température",
       "contenu": "\n<p>La tension se mesure avec un <strong>tensiomètre</strong> : l'appareil est placé sur le câble, loin des tendeurs et des poulies ; il fait fléchir le câble entre deux appuis et une table de conversion, propre à l'appareil et au diamètre du câble, donne la tension en newtons ou en livres-force.</p>\n<p>La tension varie avec la température : la structure en aluminium se dilate davantage que le câble en acier (coefficient de dilatation de l'aluminium environ deux fois plus élevé). Quand il fait chaud, la structure s'allonge plus que le câble, et la tension augmente ; quand il fait froid, elle diminue. Le manuel fournit donc une <strong>courbe de tension en fonction de la température ambiante</strong>, avec une plage minimale et maximale.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la tension d'un câble se règle toujours en tenant compte de la température du hangar, en utilisant la courbe du constructeur. Une tension juste à 25 °C dans un atelier chauffé peut devenir insuffisante par un matin d'hiver sur le parking.</div>\n"
      },
      {
       "titre": "Inspecter câbles, tendeurs et freinages",
       "contenu": "\n<p>L'inspection d'une chaîne de commande se fait sur toute sa longueur, gouvernes manœuvrées pour faire défiler les zones de câble cachées dans les poulies et les guides.</p>\n<ul>\n<li><strong>Fils cassés</strong> : on fait glisser un chiffon le long du câble ; les brins cassés accrochent les fibres. Ne jamais passer la main nue. Le manuel fixe le nombre de fils cassés admissibles par longueur de câble ; aucun fil cassé n'est admis dans la zone d'une poulie ou d'un guide.</li>\n<li><strong>Corrosion</strong> : particulièrement dans les zones humides (soute arrière, passages de roues) ; un câble corrodé intérieurement se reconnaît en le pliant légèrement, les brins internes apparaissent ternes ou poudreux.</li>\n<li><strong>Poulies</strong> : rotation libre, gorge non usée, câble bien centré, garde-câble en place empêchant le déraillement.</li>\n<li><strong>Tendeurs</strong> : filets engagés suffisamment (selon les pratiques standard, pas plus de trois filets visibles à l'extérieur du corps de chaque côté), freinage par fil-frein ou par agrafes de sécurité.</li>\n<li><strong>Bielles et guignols</strong> : jeu dans les rotules, fissures, contre-écrous freinés, trou témoin de vissage de l'embout (le manuel impose souvent qu'une tige fine ne puisse pas passer dans ce trou, preuve d'un engagement suffisant).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'erreur la plus grave sur une commande de vol est l'<strong>inversion</strong> : câbles croisés, guignol monté à l'envers. L'avion paraît normal au sol. Après toute intervention, on vérifie le <strong>sens de débattement</strong> (manche à gauche : aileron gauche monte, aileron droit descend ; manche arrière : gouverne de profondeur vers le haut ; palonnier droit enfoncé : gouverne de direction à droite), la liberté de mouvement sur toute la course et le freinage. Cette vérification est faite par le mécanicien puis par une seconde personne (inspection indépendante).</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de refermer les trappes de visite après un réglage, le mécanicien et le contrôleur parcourent ensemble la chaîne, gouverne par gouverne, avec la carte de travail : chaque tendeur, chaque goupille, chaque écrou freiné est vu et coché. L'opération prend du temps ; elle est pourtant considérée comme non négociable.</div>\n"
      },
      {
       "titre": "Volets et commandes électriques",
       "contenu": "\n<p>Les <strong>volets</strong> d'un avion léger sont commandés soit mécaniquement (levier et câbles), soit électriquement (moteur, réducteur, vis ou câbles d'entraînement, contacteurs de fin de course). Ils roulent souvent sur des <strong>rails</strong> avec des galets, ou pivotent sur des charnières.</p>\n<p>L'entretien porte sur plusieurs points :</p>\n<ul>\n<li>la <strong>symétrie</strong> : les deux volets doivent sortir du même angle ; une dissymétrie provoque un roulis difficile à contrer à basse vitesse. On mesure le braquage de chaque volet aux positions prévues ;</li>\n<li>les <strong>contacteurs de fin de course</strong>, qui arrêtent le moteur électrique en butée ; un contacteur déréglé fait forcer le mécanisme ;</li>\n<li>l'usure des galets, rails et charnières, et le jeu en position rentrée (vibrations) ;</li>\n<li>la cohérence de l'indicateur de position avec la position réelle.</li>\n</ul>\n<p>Les <strong>compensateurs électriques</strong> (trims) et les servo-moteurs de pilote automatique sont reliés à la chaîne de commande : une intervention sur eux est une intervention sur une commande de vol, avec les mêmes exigences de vérification du sens, de la course et d'inspection indépendante.</p>\n"
      }
     ],
     "points_cles": [
      "Une gouverne à câbles est commandée par une paire de câbles prétendus.",
      "Le compensateur soulage le pilote ; l'anti-compensateur d'un plan monobloc augmente l'effort ressenti.",
      "L'équilibrage statique des gouvernes protège du flottement ; il se contrôle après peinture ou réparation.",
      "Réglage : calage au neutre, tension, butées, débattements, freinage, essais.",
      "La tension se lit au tensiomètre et se corrige selon la température ambiante.",
      "Câbles inspectés avec un chiffon, jamais à main nue ; aucun fil cassé admis au droit d'une poulie.",
      "Pas plus de trois filets visibles hors du corps d'un tendeur, selon les pratiques standard.",
      "Après intervention : sens de débattement, liberté de mouvement, freinage et inspection indépendante."
     ],
     "lexique": [
      {
       "terme": "Gréement (rigging)",
       "def": "Ensemble des opérations de réglage d'une chaîne de commande : neutres, tensions, butées, débattements."
      },
      {
       "terme": "Débattement",
       "def": "Angle de braquage maximal d'une gouverne de part et d'autre du neutre."
      },
      {
       "terme": "Tendeur (ridoir)",
       "def": "Manchon fileté à pas inversés qui permet de régler la tension d'un câble."
      },
      {
       "terme": "Tensiomètre",
       "def": "Appareil mesurant la tension d'un câble par la force nécessaire pour le faire fléchir."
      },
      {
       "terme": "Guignol",
       "def": "Levier de renvoi fixé sur une gouverne ou dans la chaîne de commande."
      },
      {
       "terme": "Compensateur (tab)",
       "def": "Petite surface au bord de fuite d'une gouverne qui la maintient braquée par effet aérodynamique."
      },
      {
       "terme": "Flottement (flutter)",
       "def": "Vibration aéroélastique auto-entretenue d'une surface, potentiellement destructrice."
      },
      {
       "terme": "Équilibrage statique",
       "def": "Ajustement de la position du centre de gravité d'une gouverne par rapport à son axe d'articulation."
      },
      {
       "terme": "Butée",
       "def": "Élément réglable qui limite la course d'une commande ou d'une gouverne."
      },
      {
       "terme": "Inversion de commande",
       "def": "Montage erroné faisant braquer une gouverne dans le sens opposé à l'ordre du pilote."
      }
     ]
    },
    {
     "id": "bavg-moteur-pistons",
     "titre": "Le groupe motopropulseur à pistons : fonctionnement et maintenance",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Décrire le cycle à quatre temps et calculer une cylindrée.",
      "Identifier l'architecture d'un moteur d'avion léger à cylindres opposés refroidi par air.",
      "Expliquer les circuits de lubrification, d'allumage par magnétos et d'alimentation.",
      "Interpréter les paramètres de surveillance moteur.",
      "Réaliser et interpréter un essai de compression différentielle."
     ],
     "sections": [
      {
       "titre": "Le cycle à quatre temps et la thermodynamique du moteur",
       "contenu": "\n<p>La plupart des avions légers sont propulsés par un <strong>moteur à pistons à allumage commandé</strong> fonctionnant selon le <strong>cycle à quatre temps</strong> (cycle de Beau de Rochas, ou cycle d'Otto) : <strong>admission</strong> du mélange air-carburant, <strong>compression</strong>, <strong>combustion-détente</strong> (seul temps moteur), <strong>échappement</strong>. Un cycle complet demande deux tours de vilebrequin. Certains moteurs plus récents fonctionnent au gazole ou au carburéacteur selon un cycle Diesel, avec allumage par compression.</p>\n<p>La <strong>cylindrée</strong> est le volume balayé par les pistons : V = n × (π × D² / 4) × C, avec n le nombre de cylindres, D l'alésage et C la course. Le <strong>rapport volumétrique</strong> est le rapport entre le volume du cylindre au point mort bas et celui au point mort haut ; il est de l'ordre de 7 à 9 pour les moteurs d'avion légers à essence, limité par le risque de <strong>détonation</strong> (combustion anormale et brutale).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> cylindrée d'un moteur quatre cylindres courant.<br>Données : alésage 5,125 in, course 3,875 in, 4 cylindres.<br>1. Conversion : D = 5,125 × 25,4 = 130,2 mm = 13,02 cm ; C = 3,875 × 25,4 = 98,4 mm = 9,84 cm.<br>2. Section du piston : π × 13,02² / 4 ≈ 133,1 cm².<br>3. Cylindrée unitaire : 133,1 × 9,84 ≈ 1 310 cm³.<br>4. Cylindrée totale : 4 × 1 310 ≈ 5 240 cm³, soit environ 5,2 L (environ 320 pouces cubes).<br>5. Puissance : si le moteur délivre un couple de 400 N·m à 2 700 tr/min, P = C × ω = 400 × 2π × 2 700 / 60 ≈ 113 000 W, soit 113 kW ou environ 154 ch.</div>\n"
      },
      {
       "titre": "Architecture d'un moteur d'avion léger",
       "contenu": "\n<p>Les moteurs d'aviation légère les plus répandus ont quatre ou six cylindres <strong>horizontaux opposés</strong> (moteur « à plat »), refroidis par air. Cette architecture donne un moteur compact, bas, bien équilibré, qui s'insère derrière l'hélice.</p>\n<ul>\n<li>Le <strong>carter</strong> en alliage d'aluminium, en deux demi-carters, porte le vilebrequin et l'arbre à cames.</li>\n<li>Les <strong>cylindres</strong> en acier, à ailettes, portent des <strong>culasses</strong> en aluminium avec deux soupapes et deux bougies chacune.</li>\n<li>La <strong>distribution</strong> se fait par arbre à cames central, poussoirs (souvent hydrauliques), tiges et culbuteurs.</li>\n<li>Le <strong>refroidissement</strong> est assuré par l'air dynamique canalisé par des <strong>déflecteurs</strong> (baffles) et des joints souples : l'air entre au-dessus des cylindres, traverse les ailettes et sort par le bas du capot.</li>\n<li>L'hélice est généralement fixée directement sur le flasque du vilebrequin (prise directe).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un déflecteur fendu, mal reposé ou un joint de capot retourné détourne l'air de refroidissement : la culasse concernée surchauffe, ce qui peut provoquer détonation, usure des soupapes ou fissure de culasse. Après toute dépose de capot, vérifier la position de chaque déflecteur et de chaque joint.</div>\n"
      },
      {
       "titre": "Lubrification et huiles",
       "contenu": "\n<p>L'huile lubrifie, refroidit (elle évacue une part importante de la chaleur des pistons et des paliers), nettoie et protège contre la corrosion. La plupart des moteurs d'avion légers ont un <strong>carter humide</strong> : l'huile est stockée dans le carter inférieur, aspirée par une pompe à engrenages, envoyée sous pression aux paliers après passage dans un filtre et, souvent, un radiateur régulé par un thermostat.</p>\n<table>\n<thead><tr><th>Type d'huile</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Huile minérale sans additif dispersant</td><td>Rodage d'un moteur neuf ou d'un cylindre neuf, selon les instructions du motoriste</td></tr>\n<tr><td>Huile à additifs dispersants (sans cendres)</td><td>Utilisation courante après rodage ; maintient les impuretés en suspension jusqu'au filtre</td></tr>\n<tr><td>Huile multigrade ou monograde</td><td>Choix selon la température ambiante et les recommandations du motoriste</td></tr>\n</tbody>\n</table>\n<p>À chaque vidange, on <strong>découpe le filtre</strong> et on examine l'élément filtrant à la recherche de particules métalliques ; on peut aussi faire réaliser une <strong>analyse spectrométrique</strong> de l'huile. Une augmentation soudaine du fer, du chrome, de l'aluminium ou du cuivre oriente vers l'usure d'un composant précis (cylindres, segments, pistons, paliers).</p>\n"
      },
      {
       "titre": "Allumage par magnétos",
       "contenu": "\n<p>L'allumage est assuré par deux <strong>magnétos</strong> indépendantes, chacune alimentant une bougie par cylindre. Cette <strong>redondance</strong> rend l'allumage indépendant du réseau électrique de bord et améliore la combustion. Une magnéto est un générateur autonome : un aimant tournant, entraîné par le moteur, induit un courant dans un enroulement primaire ; l'ouverture d'un rupteur (ou d'un circuit électronique) provoque une haute tension dans l'enroulement secondaire, distribuée aux bougies.</p>\n<p>L'interrupteur de magnéto fonctionne à l'inverse d'un interrupteur ordinaire : en position « OFF », il <strong>met à la masse</strong> le primaire de la magnéto par un fil appelé « P-lead », ce qui l'empêche de produire des étincelles. Le <strong>calage</strong> de l'allumage (avance, souvent de l'ordre de 20 à 25° avant le point mort haut selon le modèle) est fixé par le motoriste et vérifié avec un outillage de calage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> si le fil de masse d'une magnéto est coupé ou débranché, la magnéto reste « chaude » même contact coupé : tourner l'hélice à la main peut faire démarrer le moteur. Toujours considérer une hélice comme dangereuse, se tenir hors de son plan de rotation, et vérifier au point fixe, par un essai de coupure rapide selon le manuel, que chaque magnéto se coupe bien.</div>\n<p>Au point fixe, l'<strong>essai des magnétos</strong> consiste à faire tourner le moteur sur une seule magnéto puis sur l'autre, au régime prescrit : la chute de régime doit rester inférieure à une valeur maximale et l'écart entre les deux magnétos limité (valeurs du manuel de vol). Une chute excessive oriente vers des bougies encrassées, un faisceau d'allumage défectueux ou un calage incorrect ; l'absence totale de chute peut révéler un fil de masse coupé.</p>\n"
      },
      {
       "titre": "Alimentation, mélange et surveillance",
       "contenu": "\n<p>Le mélange air-carburant est préparé par un <strong>carburateur</strong> ou par un système d'<strong>injection</strong>. Le carburateur expose au <strong>givrage</strong> : la détente de l'air dans le venturi et la vaporisation de l'essence refroidissent fortement le mélange, et l'humidité peut geler même par une température extérieure positive. Le pilote dispose d'un <strong>réchauffage carburateur</strong> qui prélève de l'air chaud autour de l'échappement. L'injection supprime ce risque mais impose un circuit plus précis (servo-régulateur, distributeur, injecteurs calibrés).</p>\n<p>La <strong>richesse</strong> du mélange est réglée par le pilote avec la manette de mélange, notamment en altitude où l'air moins dense rend le mélange trop riche. La température des gaz d'échappement (EGT) sert de référence pour ce réglage.</p>\n<table>\n<thead><tr><th>Paramètre</th><th>Instrument</th><th>Ce qu'il révèle</th></tr></thead>\n<tbody>\n<tr><td>Régime</td><td>Compte-tours</td><td>Puissance (hélice à pas fixe), plages interdites éventuelles</td></tr>\n<tr><td>Pression d'admission</td><td>Manomètre en inHg</td><td>Charge du moteur (hélice à vitesse constante)</td></tr>\n<tr><td>Pression et température d'huile</td><td>Manomètre, thermomètre</td><td>Lubrification, refroidissement</td></tr>\n<tr><td>Température culasse (CHT)</td><td>Thermocouple sous la bougie</td><td>Refroidissement, risque de détonation</td></tr>\n<tr><td>Température gaz d'échappement (EGT)</td><td>Thermocouple dans le collecteur</td><td>Richesse du mélange, combustion par cylindre</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les moniteurs moteur numériques enregistrent CHT et EGT cylindre par cylindre. L'atelier télécharge ces données : une EGT anormalement basse sur un seul cylindre oriente vers une bougie défaillante ou un injecteur partiellement bouché, avant même que le pilote ne ressente une anomalie.</div>\n"
      },
      {
       "titre": "L'essai de compression différentielle",
       "contenu": "\n<p>L'<strong>essai de compression différentielle</strong> évalue l'étanchéité de chaque cylindre. Le piston est placé au point mort haut en fin de compression (soupapes fermées), puis on injecte de l'air comprimé à une pression réglée (couramment 80 psi) par le trou de bougie, à travers un orifice calibré. Un second manomètre lit la pression qui se maintient dans le cylindre. Plus le cylindre fuit, plus la pression lue est basse. La valeur minimale acceptable est déterminée avec un <strong>orifice étalon</strong> (master orifice) selon la procédure du motoriste, ou donnée par le manuel.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser et interpréter l'essai.<br>1. Moteur chaud (juste après un vol ou un point fixe), contact coupé, magnétos à la masse, clé retirée, une personne tient l'hélice de façon sûre.<br>2. Déposer une bougie par cylindre, amener le piston au point mort haut compression, brancher l'appareil et régler 80 psi.<br>3. Lire la pression maintenue : par exemple 74/80 sur le cylindre 1, 52/80 sur le cylindre 3, avec une limite étalon de 60.<br>4. Écouter où l'air s'échappe pour le cylindre 3 : par l'échappement, fuite de soupape d'échappement ; par l'entrée d'air ou le carburateur, fuite de soupape d'admission ; par le reniflard ou le bouchon de remplissage d'huile, fuite aux segments ; par le cylindre voisin, joint de culasse ou fissure.<br>5. Décider selon le manuel : nouvel essai après avoir fait tourner le moteur, inspection au boroscope, ou dépose du cylindre.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un résultat isolé ne suffit pas toujours ; on compare les cylindres entre eux et à l'historique des essais précédents. Une baisse progressive et régulière est une information aussi utile qu'une valeur sous la limite.</div>\n"
      }
     ],
     "points_cles": [
      "Cycle à quatre temps : admission, compression, combustion-détente, échappement, sur deux tours.",
      "Cylindrée = nombre de cylindres × section du piston × course.",
      "Moteur d'avion léger typique : cylindres opposés à plat, refroidis par air, déflecteurs indispensables.",
      "L'huile lubrifie, refroidit et nettoie ; le filtre est découpé et examiné à chaque vidange.",
      "Deux magnétos indépendantes ; position OFF = magnéto mise à la masse par le P-lead.",
      "Un P-lead coupé rend l'hélice dangereuse même contact coupé.",
      "Le carburateur expose au givrage ; le réchauffage carburateur le prévient.",
      "Compression différentielle à 80 psi, comparée à l'orifice étalon ; l'origine de la fuite s'identifie à l'écoute."
     ],
     "lexique": [
      {
       "terme": "Cylindrée",
       "def": "Volume total balayé par les pistons entre point mort bas et point mort haut."
      },
      {
       "terme": "Rapport volumétrique",
       "def": "Rapport entre volume maximal et volume minimal de la chambre d'un cylindre."
      },
      {
       "terme": "Détonation",
       "def": "Combustion anormale et brutale du mélange, destructrice pour les pistons et les culasses."
      },
      {
       "terme": "Déflecteur (baffle)",
       "def": "Tôle qui canalise l'air de refroidissement autour des cylindres."
      },
      {
       "terme": "Carter humide",
       "def": "Système de lubrification où l'huile est stockée dans le carter du moteur."
      },
      {
       "terme": "Magnéto",
       "def": "Générateur autonome de haute tension d'allumage entraîné par le moteur."
      },
      {
       "terme": "P-lead",
       "def": "Fil reliant la magnéto à l'interrupteur, qui la met à la masse en position OFF."
      },
      {
       "terme": "Givrage carburateur",
       "def": "Formation de glace dans le carburateur par refroidissement du mélange."
      },
      {
       "terme": "EGT",
       "def": "Température des gaz d'échappement, utilisée pour régler la richesse du mélange."
      },
      {
       "terme": "CHT",
       "def": "Température des culasses, indicateur du refroidissement du moteur."
      },
      {
       "terme": "Compression différentielle",
       "def": "Essai d'étanchéité d'un cylindre par mesure de la pression maintenue sous injection d'air."
      }
     ]
    },
    {
     "id": "bavg-helices",
     "titre": "Les hélices : théorie, technologies et maintenance",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Expliquer le fonctionnement d'une pale par la théorie de l'élément de pale.",
      "Calculer un pas géométrique et relier calage, incidence et vitesse.",
      "Distinguer hélice à pas fixe, à pas variable et à vitesse constante, et le rôle du régulateur.",
      "Décrire les effets secondaires de l'hélice sur le vol.",
      "Conduire les inspections et contrôles d'une hélice : dommages, voilage, serrage, équilibrage."
     ],
     "sections": [
      {
       "titre": "La pale, une aile qui tourne",
       "contenu": "\n<p>Chaque section de pale est un <strong>profil aérodynamique</strong>. La <strong>théorie de l'élément de pale</strong> découpe la pale en tranches et étudie chacune comme une petite aile. Une tranche située à la distance r de l'axe reçoit un vent relatif résultant de deux vitesses : la <strong>vitesse de rotation</strong> (2π × r × n, avec n en tours par seconde) et la <strong>vitesse d'avancement</strong> de l'avion. La force aérodynamique de la tranche se décompose en <strong>traction</strong> (le long de l'axe) et en <strong>traînée de rotation</strong>, qui crée un couple résistant absorbé par le moteur.</p>\n<p>L'<strong>angle de calage</strong> β est l'angle entre la corde de la section et le plan de rotation. L'<strong>incidence</strong> de la pale est l'angle entre la corde et le vent relatif résultant. À calage constant, l'incidence diminue quand la vitesse de l'avion augmente : une hélice optimisée pour la croisière est peu efficace au décollage, et inversement.</p>\n<p>Comme la vitesse de rotation augmente avec le rayon, la pale est <strong>vrillée</strong> : le calage est fort près du moyeu et faible en bout de pale, de façon à garder une incidence voisine sur toute la longueur. C'est pourquoi le calage d'une hélice est toujours donné à une <strong>station de référence</strong> précise, mesurée depuis l'axe.</p>\n"
      },
      {
       "titre": "Pas géométrique, pas effectif et rendement",
       "contenu": "\n<p>Le <strong>pas géométrique</strong> est la distance dont l'hélice avancerait en un tour si elle se vissait dans un solide : p = 2π × r × tan β. Le <strong>pas effectif</strong> est la distance réellement parcourue par l'avion pendant un tour ; la différence s'appelle le <strong>recul</strong>. Le <strong>rendement</strong> de l'hélice, rapport de la puissance utile (traction × vitesse) à la puissance absorbée, atteint environ 80 à 85 % dans les meilleures conditions et tombe à zéro à l'arrêt (traction sans avancement).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pas géométrique et marquage d'une hélice à pas fixe.<br>Données : calage mesuré à la station de référence r = 0,60 m : β = 20°.<br>1. tan 20° ≈ 0,364.<br>2. p = 2π × 0,60 × 0,364 ≈ 1,37 m.<br>3. En pouces : 1,37 / 0,0254 ≈ 54 in.<br>4. Lecture d'un marquage : une hélice désignée par un diamètre de 74 in et un pas de 54 in correspond à 1,88 m de diamètre et environ 1,37 m de pas.<br>5. Contrôle : pour vérifier qu'une hélice montée est bien celle prévue, on lit sa désignation complète sur le moyeu et on la compare à la fiche de navigabilité de type ou au manuel ; on ne monte jamais une hélice « qui se ressemble ».</div>\n"
      },
      {
       "titre": "Pas fixe, pas variable, vitesse constante",
       "contenu": "\n<table>\n<thead><tr><th>Type</th><th>Principe</th><th>Avantages et limites</th></tr></thead>\n<tbody>\n<tr><td>Pas fixe</td><td>Calage fixé à la fabrication</td><td>Simple, léger, peu coûteux ; compromis entre décollage (petit pas) et croisière (grand pas)</td></tr>\n<tr><td>Pas réglable au sol</td><td>Calage modifiable à l'arrêt, selon des valeurs approuvées</td><td>Adaptation à l'usage (remorquage, voyage) ; réglage figé en vol</td></tr>\n<tr><td>Pas variable commandé</td><td>Le pilote choisit le calage en vol</td><td>Meilleur rendement ; charge de travail pour le pilote</td></tr>\n<tr><td>Vitesse constante</td><td>Un régulateur ajuste automatiquement le calage pour maintenir le régime choisi</td><td>Rendement optimal dans toutes les phases ; système plus complexe à entretenir</td></tr>\n</tbody>\n</table>\n<p>Sur une hélice à <strong>vitesse constante</strong> d'avion monomoteur léger, le <strong>régulateur</strong> (governor) est entraîné par le moteur. Il contient des <strong>masselottes</strong> centrifuges qui s'écartent quand le régime augmente, et un tiroir qui dose l'huile moteur, surpressée par une petite pompe, envoyée vers le moyeu. Sur un montage courant, la pression d'huile pousse les pales vers le petit pas, et des forces de rappel (ressort, contrepoids ou moment aérodynamique) les ramènent vers le grand pas. Si le régime dépasse la consigne, le régulateur augmente le calage, ce qui charge le moteur et ramène le régime. Le pilote règle la consigne avec la manette d'hélice et la charge avec la manette des gaz (lue en pression d'admission).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le sens d'action de la pression d'huile et la position de repli en cas de perte de pression (petit pas sur la plupart des monomoteurs, drapeau sur les bimoteurs) dépendent de la conception de l'hélice. On se réfère toujours au manuel de l'hélicier.</div>\n"
      },
      {
       "titre": "Les effets secondaires de l'hélice",
       "contenu": "\n<p>L'hélice produit, en plus de la traction, des effets que le pilote compense et que le constructeur prend en compte (calage de dérive, désaxage du moteur).</p>\n<ul>\n<li><strong>Couple de renversement</strong> : par réaction à la rotation de l'hélice, l'avion tend à tourner en roulis dans le sens opposé.</li>\n<li><strong>Souffle hélicoïdal</strong> : l'air brassé par l'hélice s'enroule autour du fuselage et frappe la dérive d'un côté, ce qui provoque un lacet, surtout à forte puissance et faible vitesse.</li>\n<li><strong>Effet gyroscopique</strong> : l'hélice en rotation se comporte comme un gyroscope ; un changement d'assiette provoque une réaction décalée de 90° dans le sens de rotation (précession), sensible à la levée de queue d'un avion à train classique.</li>\n<li><strong>Dissymétrie de traction</strong> (effet de pale descendante) : à forte incidence, la pale descendante attaque l'air avec une incidence plus grande que la pale montante et tire davantage.</li>\n</ul>\n"
      },
      {
       "titre": "Technologies et inspection des hélices",
       "contenu": "\n<p>Les hélices d'avion léger sont en <strong>bois</strong> (lamelles collées, bord d'attaque protégé par une bande de laiton ou un revêtement), en <strong>alliage d'aluminium</strong> forgé, ou en <strong>composite</strong>. Chaque technologie a ses défauts caractéristiques.</p>\n<table>\n<thead><tr><th>Technologie</th><th>Défauts à rechercher</th></tr></thead>\n<tbody>\n<tr><td>Bois</td><td>Fissures, décollement des lamelles, décollement ou fissure de la protection de bord d'attaque, jeu au moyeu par retrait du bois</td></tr>\n<tr><td>Métallique</td><td>Entailles et piqûres au bord d'attaque par projection de gravillons, criques, corrosion, pales tordues</td></tr>\n<tr><td>Composite</td><td>Délaminage, impacts, érosion de la protection de bord d'attaque, décollement</td></tr>\n</tbody>\n</table>\n<p>Une <strong>entaille</strong> sur une pale métallique est une amorce de fatigue redoutable car la pale subit une force centrifuge énorme et des vibrations permanentes. Le constructeur fixe les limites de réparation au sol par <strong>ragréage</strong> (dressing) : l'entaille est éliminée à la lime et à la toile abrasive en un creux arrondi aux bords adoucis, puis contrôlée par ressuage si demandé, dans les limites de profondeur et de longueur admises. Au-delà, l'hélice part en atelier d'hélices agréé.</p>\n<p>Les hélices en bois sont fixées par des boulons dont le serrage diminue avec les variations d'humidité : leur <strong>couple de serrage</strong> est vérifié périodiquement, selon le manuel, puis les boulons sont freinés.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôle du voilage (tracking) d'une hélice.<br>1. Moteur coupé, magnétos à la masse, avion calé.<br>2. Placer un repère fixe (bloc ou règle sur un support) contre le bord d'une pale, près de l'extrémité.<br>3. Tourner l'hélice à la main pour amener l'autre pale au même endroit et mesurer l'écart avec le repère.<br>4. Comparer à la tolérance du constructeur (souvent de l'ordre de 1,5 mm entre pales, valeur à vérifier dans le manuel).<br>5. Un écart excessif signale une pale tordue, un mauvais serrage ou un défaut de montage sur le flasque ; il provoque des vibrations.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une hélice ayant subi un choc (contact avec le sol, un obstacle, un arrêt brutal du moteur) doit être inspectée selon les instructions du motoriste et de l'hélicier, qui imposent souvent une inspection du vilebrequin. Redresser une pale à froid « pour dépanner » est interdit.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un <strong>équilibrage dynamique</strong> de l'ensemble hélice et cône, réalisé moteur tournant avec un capteur de vibrations et une cellule optique, réduit nettement les vibrations transmises à la cellule et aux instruments. Il est souvent proposé après un remplacement d'hélice ou de cône.</div>\n"
      }
     ],
     "points_cles": [
      "La pale est un profil ; sa force se décompose en traction et en traînée de rotation.",
      "Le calage est l'angle corde et plan de rotation, donné à une station de référence.",
      "La pale est vrillée pour garder une incidence voisine sur toute sa longueur.",
      "Pas géométrique p = 2π r tan β ; le recul est l'écart avec le pas effectif.",
      "Hélice à vitesse constante : le régulateur à masselottes ajuste le calage avec l'huile moteur.",
      "Couple de renversement, souffle hélicoïdal, effet gyroscopique et dissymétrie de traction affectent le vol.",
      "Une entaille de bord d'attaque est une amorce de fatigue ; ragréage seulement dans les limites.",
      "Voilage, serrage (hélice bois), équilibrage et inspection après choc font partie de l'entretien."
     ],
     "lexique": [
      {
       "terme": "Angle de calage",
       "def": "Angle entre la corde d'une section de pale et le plan de rotation de l'hélice."
      },
      {
       "terme": "Pas géométrique",
       "def": "Avance théorique de l'hélice en un tour, calculée à partir du calage."
      },
      {
       "terme": "Recul",
       "def": "Différence entre pas géométrique et avance réelle de l'avion par tour."
      },
      {
       "terme": "Hélice à vitesse constante",
       "def": "Hélice dont le calage varie automatiquement pour maintenir le régime choisi."
      },
      {
       "terme": "Régulateur (governor)",
       "def": "Dispositif à masselottes qui commande le calage des pales par la pression d'huile."
      },
      {
       "terme": "Mise en drapeau",
       "def": "Calage des pales parallèlement au vent relatif pour réduire la traînée d'un moteur arrêté."
      },
      {
       "terme": "Voilage (tracking)",
       "def": "Écart de trajectoire entre les extrémités des pales."
      },
      {
       "terme": "Ragréage (dressing)",
       "def": "Élimination d'une entaille de pale par limage en un creux arrondi dans les limites autorisées."
      },
      {
       "terme": "Souffle hélicoïdal",
       "def": "Écoulement en spirale autour du fuselage créé par l'hélice."
      },
      {
       "terme": "Précession gyroscopique",
       "def": "Réaction d'un corps en rotation décalée de 90° par rapport à l'effort appliqué."
      }
     ]
    },
    {
     "id": "bavg-train-freins-carburant",
     "titre": "Train d'atterrissage, freins et circuit carburant",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Distinguer les architectures de train et les types d'amortisseurs d'un avion léger.",
      "Entretenir roues et pneumatiques en sécurité.",
      "Expliquer le fonctionnement d'un circuit de freinage hydraulique et en réaliser la purge.",
      "Décrire un circuit carburant d'avion léger et ses points de contrôle.",
      "Identifier les carburants aéronautiques et appliquer les règles d'avitaillement."
     ],
     "sections": [
      {
       "titre": "Architectures de train et amortisseurs",
       "contenu": "\n<p>Le <strong>train d'atterrissage</strong> (chapitre ATA 32) supporte l'avion au sol, absorbe l'énergie de l'atterrissage et permet de rouler et de freiner. On distingue le <strong>train tricycle</strong> (roulette de nez, deux roues principales en arrière du centre de gravité), stable au roulage, et le <strong>train classique</strong> (deux roues principales en avant du centre de gravité, roulette ou patin de queue), plus exigeant pour le pilote. Le train peut être <strong>fixe</strong>, souvent caréné, ou <strong>rentrant</strong>, pour réduire la traînée.</p>\n<table>\n<thead><tr><th>Type d'amortisseur</th><th>Principe</th><th>Entretien typique</th></tr></thead>\n<tbody>\n<tr><td>Lame ressort en acier ou en composite</td><td>La lame fléchit et restitue l'énergie</td><td>Inspection des fissures, de la corrosion, des fixations au fuselage</td></tr>\n<tr><td>Sandows ou blocs élastomères</td><td>Éléments élastiques comprimés ou tendus</td><td>Remplacement à échéance ou selon l'état (vieillissement)</td></tr>\n<tr><td>Oléopneumatique</td><td>Un gaz (azote ou air sec) fait ressort ; l'huile, laminée à travers un orifice, dissipe l'énergie</td><td>Contrôle de l'extension sous charge, niveau d'huile, pression de gaz, propreté et état de la tige chromée</td></tr>\n</tbody>\n</table>\n<p>La roulette de nez orientable est souvent équipée d'un <strong>amortisseur de shimmy</strong>, petit vérin hydraulique qui freine les oscillations rapides de la roulette au roulage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un amortisseur oléopneumatique contient un gaz sous pression. Avant de démonter une valve ou un bouchon, la pression doit être entièrement libérée, avion soulevé ou amortisseur détendu selon la procédure. Un bouchon qui cède sous pression devient un projectile.</div>\n"
      },
      {
       "titre": "Train rentrant : fonctionnement et essais",
       "contenu": "\n<p>Un train rentrant est manœuvré par un système <strong>électrique</strong> (moteur et réducteur), <strong>électro-hydraulique</strong> (groupe de puissance comprenant moteur électrique, pompe et réservoir) ou plus rarement manuel. Il comporte des <strong>verrous</strong> train bas et train haut, des <strong>contacteurs de position</strong> qui alimentent les voyants (trois verts train verrouillé bas), une <strong>alarme</strong> de train non sorti et un système de <strong>sortie de secours</strong> (par gravité, par pompe manuelle ou par manivelle). Un contacteur de sécurité, actionné par l'écrasement de l'amortisseur au sol, empêche la rentrée accidentelle du train lorsque l'avion repose sur ses roues.</p>\n<p>Les <strong>essais de rétraction</strong> sont réalisés avec l'avion soulevé sur vérins, roues dégagées du sol, selon le manuel : manœuvres normales, contrôle des temps de manœuvre, des verrouillages, des voyants et de l'alarme, puis sortie de secours.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pendant un essai de rétraction, une zone de sécurité est délimitée autour des trains, chacun annonce à voix haute avant de manœuvrer, et personne ne passe la main dans un logement de train. Les efforts en jeu suffisent à sectionner un doigt.</div>\n"
      },
      {
       "titre": "Roues et pneumatiques",
       "contenu": "\n<p>Les roues d'avion léger sont généralement en deux <strong>demi-jantes</strong> assemblées par des boulons serrés au couple. Le pneumatique, avec ou sans chambre à air, porte des marquages (dimensions, nombre de plis ou indice de charge, vitesse maximale). L'entretien courant comprend :</p>\n<ul>\n<li>la <strong>pression</strong>, contrôlée pneu froid avec un manomètre étalonné ; un pneu sous-gonflé s'échauffe et s'use sur les épaulements, un pneu surgonflé s'use au centre ;</li>\n<li>l'<strong>usure</strong> : remplacement lorsque la bande de roulement atteint la limite fixée (fond de rainure, toile apparente) ;</li>\n<li>les <strong>dommages</strong> : coupures, hernies, plats de freinage, craquelures de vieillissement ;</li>\n<li>le <strong>repère de glissement</strong> (trait peint sur le pneu et la jante) qui révèle une rotation du pneu sur la jante, susceptible d'arracher la valve d'une chambre à air.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une roue doit toujours être <strong>complètement dégonflée</strong> avant de desserrer les boulons de demi-jantes ou de déposer la valve. Une roue démontée sous pression peut exploser. Le gonflage d'un pneu fraîchement monté se fait, quand l'atelier en dispose, dans une cage de gonflage, à l'aide d'un manodétendeur réglé.</div>\n"
      },
      {
       "titre": "Le freinage hydraulique",
       "contenu": "\n<p>Les avions légers utilisent des <strong>freins à disque</strong> à commande hydraulique indépendante pour chaque roue principale : le pilote appuie sur la partie haute du palonnier, ce qui actionne un <strong>maître-cylindre</strong> ; le liquide sous pression pousse les pistons de l'<strong>étrier</strong>, qui serrent les <strong>garnitures</strong> contre le disque. Le freinage différentiel (une roue plus que l'autre) sert aussi à diriger l'avion au sol. Un <strong>frein de parc</strong> maintient la pression dans le circuit.</p>\n<p>Le circuit utilise un liquide hydraulique spécifié par le constructeur, souvent une huile minérale rouge (spécification de type MIL-PRF-5606). Les liquides de natures différentes (minéral, synthétique ester phosphate, liquide automobile) sont incompatibles : ils détruisent les joints d'un circuit qui n'est pas prévu pour eux.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> purger un circuit de freins par le bas (pression de remplissage).<br>1. Identifier le liquide spécifié et préparer un pot de purge propre, des chiffons et les protections (lunettes, gants).<br>2. Brancher la pompe de remplissage sous pression sur la vis de purge de l'étrier, au point bas du circuit.<br>3. Ouvrir le réservoir ou le point haut du circuit pour laisser sortir l'air, avec un tuyau vers un récipient.<br>4. Ouvrir la vis de purge et pousser le liquide propre de bas en haut : l'air, plus léger, est chassé vers le point haut.<br>5. Arrêter lorsque le liquide sort sans bulles au point haut ; fermer la vis de purge au couple, puis ajuster le niveau.<br>6. Contrôler : pédale ferme, pas d'enfoncement progressif sous pression maintenue, absence de fuite ; renouveler pour l'autre roue.<br>Pourquoi par le bas : l'air remonte naturellement et ne reste pas piégé dans l'étrier.</div>\n<p>L'usure des garnitures se contrôle selon le manuel, par mesure d'épaisseur ou par la longueur dépassante de goupilles témoins. Le disque est remplacé s'il est trop mince, voilé, fissuré ou fortement rayé.</p>\n"
      },
      {
       "titre": "Le circuit carburant",
       "contenu": "\n<p>Sur un avion léger à aile haute, le carburant descend souvent par gravité depuis les réservoirs d'ailes ; sur un avion à aile basse, une <strong>pompe mécanique</strong> entraînée par le moteur aspire le carburant, secondée par une <strong>pompe électrique</strong> utilisée au décollage, à l'atterrissage et en secours. Le circuit (chapitre ATA 28) comprend :</p>\n<ul>\n<li>des <strong>réservoirs</strong> métalliques intégrés, des réservoirs souples ou des réservoirs en composite, avec une <strong>mise à l'air libre</strong> qui évite la dépression lors de la consommation ;</li>\n<li>des <strong>points de purge</strong> au point bas de chaque réservoir et du filtre principal (décanteur) ;</li>\n<li>un <strong>robinet sélecteur</strong> (gauche, droit, les deux, fermé) ;</li>\n<li>un <strong>filtre</strong>, des tuyauteries et un <strong>jaugeage</strong> (flotteurs ou sondes) relié aux indicateurs.</li>\n</ul>\n<table>\n<thead><tr><th>Carburant</th><th>Couleur</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>AVGAS 100LL</td><td>Bleue</td><td>Essence aviation au plomb, la plus répandue pour les moteurs à pistons</td></tr>\n<tr><td>UL91</td><td>Incolore ou très légèrement jaune</td><td>Essence aviation sans plomb, utilisable seulement par les moteurs approuvés</td></tr>\n<tr><td>Jet A-1</td><td>Incolore à paille</td><td>Carburéacteur, utilisé par les turbines et les moteurs Diesel d'aviation approuvés</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une erreur de carburant (carburéacteur dans un moteur à essence) provoque une détonation destructrice et une panne moteur peu après le décollage. L'avitaillement se fait après <strong>mise à la terre</strong> de l'avion et liaison équipotentielle avec la source, moteur arrêté, sans source d'ignition à proximité, extincteur disponible. Le carburant se vérifie par sa couleur et son odeur lors de la purge.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la purge recherche l'eau (gouttes ou couche au fond du godet, l'eau étant plus dense que l'essence), les particules et un carburant de mauvaise couleur. Après de fortes pluies, un lavage ou une longue immobilisation, on purge jusqu'à obtenir un échantillon propre. Les joints de bouchons de réservoir usés sont une cause fréquente d'entrée d'eau.</div>\n"
      },
      {
       "titre": "Entretenir le circuit carburant",
       "contenu": "\n<p>En plus des purges quotidiennes faites par le pilote, l'atelier réalise des contrôles périodiques du circuit carburant :</p>\n<ul>\n<li>nettoyage ou remplacement du <strong>filtre</strong> principal et des crépines de réservoir, avec examen des dépôts recueillis ;</li>\n<li>vérification des <strong>mises à l'air libre</strong> : non obstruées (insectes, nids, glace), correctement orientées ;</li>\n<li>état des <strong>bouchons</strong> de remplissage et de leurs joints ;</li>\n<li>recherche de fuites aux raccords, aux points de purge et sur les réservoirs (traces bleues de 100LL séché, odeur) ;</li>\n<li>contrôle de l'<strong>étalonnage du jaugeage</strong> lorsque le manuel le prévoit, en remplissant le réservoir par quantités connues et en relevant l'indication ;</li>\n<li>essai du <strong>sélecteur</strong> sur chaque position, y compris « fermé », et du fonctionnement de la pompe électrique (pression, absence de fuite).</li>\n</ul>\n<p>Les <strong>réservoirs souples</strong> (en caoutchouc ou matériau composite, logés dans l'aile) vieillissent : ils se rigidifient, se fissurent et finissent par fuir ; leur remplacement suit une procédure précise d'accès et de fixation. Toute intervention à l'intérieur d'un réservoir se fait après vidange, ventilation et contrôle de l'atmosphère, en raison du risque d'explosion et d'intoxication.</p>\n"
      }
     ],
     "points_cles": [
      "Train tricycle : stable au sol ; train classique : roues principales en avant du CG.",
      "Amortisseur oléopneumatique : le gaz fait ressort, l'huile dissipe ; toujours libérer la pression avant démontage.",
      "Train rentrant : verrous, contacteurs, alarme, sortie de secours ; essais sur vérins.",
      "Pression des pneus contrôlée à froid ; roue toujours dégonflée avant démontage.",
      "Freins à disque à maître-cylindres aux palonniers ; purge de bas en haut avec le liquide spécifié.",
      "Les liquides hydrauliques de natures différentes sont incompatibles.",
      "AVGAS 100LL bleue, Jet A-1 incolore à paille ; une erreur de carburant détruit le moteur.",
      "Avitaillement : mise à la terre et liaison équipotentielle ; purge pour détecter l'eau."
     ],
     "lexique": [
      {
       "terme": "Train tricycle",
       "def": "Train comportant une roulette de nez et deux roues principales en arrière du centre de gravité."
      },
      {
       "terme": "Amortisseur oléopneumatique",
       "def": "Amortisseur utilisant un gaz comme ressort et de l'huile laminée pour dissiper l'énergie."
      },
      {
       "terme": "Shimmy",
       "def": "Oscillation rapide et auto-entretenue d'une roulette orientable au roulage."
      },
      {
       "terme": "Contacteur de sécurité train",
       "def": "Contact actionné par l'amortisseur au sol qui interdit la rentrée du train."
      },
      {
       "terme": "Repère de glissement",
       "def": "Trait peint sur le pneu et la jante pour détecter la rotation du pneu."
      },
      {
       "terme": "Maître-cylindre",
       "def": "Cylindre actionné par la pédale qui met sous pression le liquide de frein."
      },
      {
       "terme": "Purge",
       "def": "Opération qui chasse l'air d'un circuit hydraulique ou l'eau et les impuretés d'un réservoir de carburant."
      },
      {
       "terme": "Mise à l'air libre",
       "def": "Orifice qui maintient la pression atmosphérique dans un réservoir."
      },
      {
       "terme": "AVGAS 100LL",
       "def": "Essence aviation à faible teneur en plomb, colorée en bleu."
      },
      {
       "terme": "Liaison équipotentielle",
       "def": "Connexion électrique qui égalise les potentiels de l'avion et de l'avitailleur."
      }
     ]
    },
    {
     "id": "bavg-instruments-circuits",
     "titre": "Instruments de bord, circuits anémobarométrique et dépression",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Décrire le circuit anémobarométrique et le principe des trois instruments qu'il alimente.",
      "Prévoir les erreurs d'indication dues à l'obstruction d'une prise de pression.",
      "Expliquer les propriétés gyroscopiques et le fonctionnement des instruments gyroscopiques.",
      "Entretenir un circuit de dépression.",
      "Conduire la compensation d'un compas magnétique et établir la carte de déviation."
     ],
     "sections": [
      {
       "titre": "Le circuit anémobarométrique",
       "contenu": "\n<p>Le <strong>circuit anémobarométrique</strong> (en anglais pitot-static, chapitre ATA 34) relie deux sources de pression aux instruments de vol de base :</p>\n<ul>\n<li>la <strong>pression totale</strong>, captée par le tube de Pitot, souvent sous l'aile, chauffé électriquement sur les avions équipés pour le vol aux instruments ;</li>\n<li>la <strong>pression statique</strong>, captée par des prises affleurantes, souvent une de chaque côté du fuselage pour compenser les effets de dérapage, ou sur le tube lui-même. Une <strong>prise statique de secours</strong>, dans le poste, peut être sélectionnée en cas d'obstruction.</li>\n</ul>\n<table>\n<thead><tr><th>Instrument</th><th>Pressions utilisées</th><th>Principe</th></tr></thead>\n<tbody>\n<tr><td>Anémomètre</td><td>Totale et statique</td><td>Une capsule reçoit la pression totale, le boîtier la statique ; la déformation mesure la pression dynamique</td></tr>\n<tr><td>Altimètre</td><td>Statique seule</td><td>Une capsule anéroïde (vide d'air) se dilate quand la pression diminue ; graduation selon l'atmosphère standard ; molette de calage de la pression de référence</td></tr>\n<tr><td>Variomètre</td><td>Statique seule</td><td>Compare la pression statique actuelle à celle, retardée, d'un boîtier relié par une fuite calibrée</td></tr>\n</tbody>\n</table>\n<p>Des <strong>purges</strong> aux points bas des canalisations permettent d'évacuer l'eau de condensation.</p>\n"
      },
      {
       "titre": "Erreurs et contrôles du circuit",
       "contenu": "\n<p>Une obstruction (insecte, eau gelée, ruban adhésif de protection oublié après lavage ou peinture) fausse les indications de façon caractéristique.</p>\n<table>\n<thead><tr><th>Défaut</th><th>Anémomètre</th><th>Altimètre</th><th>Variomètre</th></tr></thead>\n<tbody>\n<tr><td>Pitot bouché (orifice et purge)</td><td>Se comporte comme un altimètre : la vitesse indiquée augmente en montée, diminue en descente</td><td>Normal</td><td>Normal</td></tr>\n<tr><td>Prise statique bouchée</td><td>Indication fausse : trop faible en montée, trop forte en descente</td><td>Figé sur l'altitude de l'obstruction</td><td>Bloqué à zéro</td></tr>\n<tr><td>Fuite dans le circuit statique à l'intérieur de la cabine</td><td>Erreur selon la pression cabine</td><td>Erreur</td><td>Erreur</td></tr>\n</tbody>\n</table>\n<p>Après toute intervention sur le circuit (dépose d'un instrument, d'une tuyauterie, d'une prise), un <strong>essai d'étanchéité</strong> est obligatoire. Il se fait avec un banc anémobarométrique qui applique, lentement et de façon contrôlée, une pression ou une dépression, puis on mesure la variation d'indication sur une durée donnée ; les limites sont fixées par le manuel de maintenance.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne souffle jamais dans un tube de Pitot ni dans une prise statique, et on ne raccorde jamais un instrument à de l'air comprimé d'atelier : une surpression ou une variation brutale détruit les capsules. Les essais se font avec un banc adapté, en respectant l'ordre de mise en pression (circuit total, puis statique, de façon à ne jamais inverser la pression sur la capsule de l'anémomètre) et en revenant progressivement à la pression ambiante. Les caches de protection, signalés par des flammes rouges « remove before flight », sont retirés et comptés avant la remise en service.</div>\n"
      },
      {
       "titre": "Les instruments gyroscopiques",
       "contenu": "\n<p>Un <strong>gyroscope</strong> est un rotor tournant à grande vitesse. Il possède deux propriétés :</p>\n<ul>\n<li>la <strong>fixité</strong> (rigidité dans l'espace) : son axe garde une direction fixe tant qu'aucun couple ne lui est appliqué ;</li>\n<li>la <strong>précession</strong> : un couple appliqué au rotor produit un mouvement de l'axe décalé de 90° dans le sens de rotation.</li>\n</ul>\n<table>\n<thead><tr><th>Instrument</th><th>Propriété utilisée</th><th>Indication</th></tr></thead>\n<tbody>\n<tr><td>Horizon artificiel</td><td>Fixité, axe vertical</td><td>Assiette en tangage et inclinaison</td></tr>\n<tr><td>Conservateur de cap (directionnel)</td><td>Fixité, axe horizontal</td><td>Cap, à recaler périodiquement sur le compas à cause de la dérive</td></tr>\n<tr><td>Indicateur de virage (bille-aiguille) ou coordinateur de virage</td><td>Précession</td><td>Taux de virage ; la bille indique la symétrie du vol</td></tr>\n</tbody>\n</table>\n<p>Les rotors sont entraînés par un flux d'air (circuit dépression) ou par un moteur électrique. On rencontre souvent une <strong>répartition des sources</strong> : horizon et directionnel pneumatiques, coordinateur de virage électrique, afin qu'une seule panne ne prive pas le pilote de toute information d'attitude. Sur les planches de bord récentes, ces instruments sont remplacés par une centrale électronique d'attitude et de cap.</p>\n"
      },
      {
       "titre": "Le circuit de dépression",
       "contenu": "\n<p>Le <strong>circuit de dépression</strong> (chapitre ATA 37) aspire l'air de la cabine à travers les instruments gyroscopiques ; le flux d'air fait tourner les rotors. Il comprend :</p>\n<ul>\n<li>une <strong>pompe à vide</strong> entraînée par le moteur, aujourd'hui généralement une pompe sèche à palettes en carbone ;</li>\n<li>un <strong>filtre central</strong> qui protège les instruments de la poussière et des particules ;</li>\n<li>un <strong>régulateur</strong> qui maintient la dépression dans la plage prescrite ;</li>\n<li>un <strong>indicateur de dépression</strong>, gradué en pouces de mercure, avec une plage verte (souvent autour de 4,5 à 5,5 inHg, selon le manuel).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une pompe sèche tombe en panne souvent sans signe précurseur, par rupture des palettes. Certains constructeurs de pompes recommandent un remplacement préventif à échéance. Lors du remplacement, on vérifie l'absence de débris dans les canalisations et on remplace les filtres ; on ne lubrifie jamais une pompe sèche, et on n'utilise pas de produit d'étanchéité sur ses raccords en dehors des instructions, car les débris détruisent la nouvelle pompe.</div>\n"
      },
      {
       "titre": "Le compas magnétique et sa compensation",
       "contenu": "\n<p>Le <strong>compas magnétique</strong> est l'instrument de cap de secours, indépendant de toute énergie. Il indique le cap compas, différent du cap magnétique à cause de la <strong>déviation</strong>, due aux masses métalliques et aux champs électriques de l'avion. La déviation est réduite par des aimants compensateurs réglables dans le boîtier, puis la déviation résiduelle est notée sur une <strong>carte de déviation</strong> placée près du compas.</p>\n<p>La <strong>compensation</strong> est réalisée périodiquement selon le programme d'entretien, et après tout événement susceptible de modifier le champ magnétique de bord : remplacement d'un équipement électrique ou radio proche, d'une pièce de structure en acier, foudroiement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> compensation simplifiée d'un compas sur une aire de compensation.<br>1. Placer l'avion sur une aire repérée, loin des masses métalliques et des lignes électriques, en configuration de vol (moteur tournant si possible, équipements électriques et radios en marche).<br>2. Aligner l'avion au cap magnétique nord (000°) ; lire le compas, par exemple 006°. Déviation : 000 − 006 = − 6°. Corriger la moitié ou la totalité avec la vis de compensation nord-sud, selon la procédure de l'instrument.<br>3. Aligner au cap est (090°), lire, corriger avec la vis est-ouest.<br>4. Aligner au sud et à l'ouest et répartir l'erreur résiduelle entre les caps opposés.<br>5. Relever ensuite le compas tous les 30° (ou 45°) et inscrire, pour chaque cap magnétique, le cap compas à suivre sur la carte de déviation.<br>6. Vérifier que la déviation résiduelle maximale reste dans la limite fixée par les données applicables ; dater et signer la carte.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> cap magnétique = cap compas + déviation (avec son signe). Un compas dont le liquide présente une bulle, dont la carte est décolorée ou qui oscille anormalement doit être inspecté ; le liquide de compas ne se complète qu'avec le produit et la procédure du fabricant.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un outil aimanté, un tournevis ou une lampe posés sur la planche de bord pendant la compensation faussent complètement les mesures. On vide la zone de tout objet métallique, y compris les téléphones.</div>\n"
      },
      {
       "titre": "Repères des instruments et remplacement",
       "contenu": "\n<p>Les instruments moteur et de vol portent des <strong>repères de limitation</strong> dont les valeurs sont celles du manuel de vol, dans le même ordre d'idée que les arcs de l'anémomètre :</p>\n<table>\n<thead><tr><th>Couleur</th><th>Signification usuelle</th></tr></thead>\n<tbody>\n<tr><td>Arc vert</td><td>Plage d'utilisation normale</td></tr>\n<tr><td>Arc jaune</td><td>Plage de précaution ou d'utilisation limitée</td></tr>\n<tr><td>Trait rouge</td><td>Limite à ne pas dépasser (minimum ou maximum)</td></tr>\n<tr><td>Arc rouge</td><td>Plage interdite, par exemple une plage de régime à ne pas utiliser en continu à cause des vibrations de l'hélice</td></tr>\n</tbody>\n</table>\n<p>Lorsque les repères sont peints sur la glace de l'instrument, un <strong>repère de glissement</strong> blanc, à cheval entre la glace et le boîtier, permet de détecter une rotation de la glace qui décalerait les arcs.</p>\n<p>Lors du remplacement d'un instrument, le mécanicien vérifie : la référence (et donc la plage, l'unité et les repères) par rapport au catalogue et au manuel de vol, le certificat libératoire, l'absence de contrainte sur les raccords (on ne fait pas tourner l'instrument pour serrer un raccord), puis réalise l'essai d'étanchéité et l'essai fonctionnel adaptés.</p>\n"
      }
     ],
     "points_cles": [
      "Le Pitot capte la pression totale, les prises statiques la pression statique.",
      "Anémomètre : totale et statique ; altimètre et variomètre : statique seule.",
      "Pitot bouché : l'anémomètre se comporte comme un altimètre ; statique bouchée : altimètre figé, vario à zéro.",
      "Essai d'étanchéité obligatoire après intervention sur le circuit, au banc, jamais à l'air comprimé.",
      "Gyroscope : fixité dans l'espace et précession à 90°.",
      "Horizon et directionnel utilisent la fixité ; l'indicateur de virage utilise la précession.",
      "Le circuit dépression comprend pompe sèche, filtre, régulateur et indicateur en inHg.",
      "La compensation du compas réduit la déviation ; la déviation résiduelle figure sur la carte de déviation."
     ],
     "lexique": [
      {
       "terme": "Pression statique",
       "def": "Pression de l'air ambiant non perturbé, mesurée par des prises affleurantes."
      },
      {
       "terme": "Capsule anéroïde",
       "def": "Capsule métallique vide d'air qui se déforme selon la pression extérieure."
      },
      {
       "terme": "Calage altimétrique",
       "def": "Pression de référence affichée sur l'altimètre (QNH, QFE ou 1013,25 hPa)."
      },
      {
       "terme": "Variomètre",
       "def": "Instrument indiquant la vitesse verticale à partir de la variation de pression statique."
      },
      {
       "terme": "Fixité gyroscopique",
       "def": "Tendance d'un rotor en rotation à garder la direction de son axe dans l'espace."
      },
      {
       "terme": "Précession",
       "def": "Déplacement de l'axe d'un gyroscope décalé de 90° par rapport au couple appliqué."
      },
      {
       "terme": "Pompe sèche",
       "def": "Pompe à palettes en carbone, sans lubrification, qui crée la dépression des instruments."
      },
      {
       "terme": "Déviation",
       "def": "Écart entre cap magnétique et cap compas dû aux champs magnétiques de l'avion."
      },
      {
       "terme": "Carte de déviation",
       "def": "Tableau placé près du compas indiquant le cap compas à suivre pour chaque cap magnétique."
      },
      {
       "terme": "Banc anémobarométrique",
       "def": "Appareil de test qui applique des pressions contrôlées au circuit Pitot et statique."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Matériaux et pratiques de maintenance",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bavg-materiaux-traitements-corrosion",
     "titre": "Matériaux métalliques : désignations, traitements, essais et corrosion",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Lire la désignation d'un alliage d'aluminium et de son état métallurgique, et d'un acier aéronautique.",
      "Expliquer les traitements thermiques et de surface et leur intérêt.",
      "Interpréter les résultats d'essais mécaniques usuels (traction, dureté, résilience).",
      "Reconnaître les principales formes de corrosion et leurs causes.",
      "Conduire le traitement d'une zone corrodée dans le respect des limites du constructeur."
     ],
     "sections": [
      {
       "titre": "Désigner les alliages d'aluminium et leurs états",
       "contenu": "\n<p>Les alliages d'aluminium corroyés sont désignés par un <strong>numéro à quatre chiffres</strong> (système international repris dans la norme européenne EN 573). Le premier chiffre indique l'élément d'addition principal.</p>\n<table>\n<thead><tr><th>Série</th><th>Élément principal</th><th>Exemple et usage aéronautique</th></tr></thead>\n<tbody>\n<tr><td>1xxx</td><td>Aluminium quasi pur (99 % et plus)</td><td>Couche de placage, pièces peu chargées</td></tr>\n<tr><td>2xxx</td><td>Cuivre</td><td>2024 : revêtements de fuselage et intrados, bonne tenue en fatigue ; 2117 : rivets courants</td></tr>\n<tr><td>5xxx</td><td>Magnésium</td><td>Réservoirs, tuyauteries basse pression, bonne résistance à la corrosion</td></tr>\n<tr><td>6xxx</td><td>Magnésium et silicium</td><td>6061 : profilés, tubes, pièces soudables</td></tr>\n<tr><td>7xxx</td><td>Zinc</td><td>7075 : pièces très chargées (longerons, ferrures), plus sensible à la corrosion sous contrainte</td></tr>\n</tbody>\n</table>\n<p>Le nombre est suivi de l'<strong>état métallurgique</strong> : O (recuit, le plus mou), H (écroui, pour les alliages non trempants), T suivi d'un chiffre pour les alliages traités thermiquement. Les plus fréquents sont T3 (mise en solution, trempe, écrouissage, maturation naturelle), T4 (mise en solution, trempe, maturation naturelle) et T6 (mise en solution, trempe, revenu artificiel). Ainsi, <strong>2024-T3</strong> désigne la tôle de revêtement la plus courante des avions légers métalliques.</p>\n<p>Le <strong>placage</strong> (alliage plaqué, souvent appelé « Alclad ») consiste à recouvrir chaque face d'une fine couche d'aluminium pur, qui protège l'alliage par effet sacrificiel. Un polissage agressif ou un ponçage qui supprime cette couche réduit la protection.</p>\n"
      },
      {
       "titre": "Aciers et autres métaux",
       "contenu": "\n<p>Les <strong>aciers</strong> aéronautiques sont souvent désignés selon le système américain SAE-AISI à quatre chiffres : les deux premiers indiquent la famille d'alliage, les deux derniers la teneur en carbone en centièmes de pour-cent. L'acier <strong>4130</strong> (chrome-molybdène, environ 0,30 % de carbone) est l'acier des tubes de fuselages et de bâtis moteurs soudés. Les <strong>aciers inoxydables</strong> servent pour les cloisons pare-feu, les collecteurs d'échappement, certaines fixations. Les boulons standard sont en acier allié traité, protégé par un revêtement (cadmiage ou autre selon la norme).</p>\n<p>D'autres métaux sont rencontrés : le <strong>titane</strong>, léger et très résistant à la chaleur et à la corrosion ; le <strong>magnésium</strong>, très léger mais très sensible à la corrosion et inflammable sous forme de copeaux ou de poudre (carters de certains équipements, roues anciennes) ; le <strong>cuivre</strong> et ses alliages pour les conducteurs, bagues et joints.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les copeaux et la poussière de magnésium peuvent s'enflammer et brûler très violemment ; l'eau aggrave le feu. On utilise un outil bien affûté, on évacue les copeaux, et on dispose de l'agent extincteur adapté aux feux de métaux (classe D) lorsque l'atelier usine ce métal.</div>\n"
      },
      {
       "titre": "Traitements thermiques et traitements de surface",
       "contenu": "\n<p>Les alliages d'aluminium des séries 2xxx, 6xxx et 7xxx sont <strong>durcissables par traitement thermique</strong>. Le traitement comprend une <strong>mise en solution</strong> (chauffage vers 490 à 530 °C selon l'alliage), une <strong>trempe</strong> rapide à l'eau, puis une <strong>maturation</strong> à température ambiante ou un <strong>revenu</strong> au four, pendant lesquels l'alliage durcit.</p>\n<p>Ce phénomène explique une pratique d'atelier : certains rivets en alliage 2024 (rivets dits « DD ») et 2017 (« D ») sont trop durs pour être posés à l'état mûri. On les met en solution et on les trempe, puis on les conserve au congélateur pour retarder la maturation ; une fois sortis, ils doivent être posés dans un délai court. Les rivets 2117 (« AD »), plus doux, se posent directement.</p>\n<table>\n<thead><tr><th>Traitement de surface</th><th>Matériau</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Anodisation</td><td>Alliages d'aluminium</td><td>Couche d'oxyde dure et isolante créée par électrolyse ; bonne base d'accrochage pour la peinture</td></tr>\n<tr><td>Conversion chimique</td><td>Alliages d'aluminium</td><td>Film mince appliqué au pinceau ou par trempage, utilisé en retouche après réparation</td></tr>\n<tr><td>Primaire anticorrosion</td><td>Tous métaux</td><td>Inhibe la corrosion et assure l'adhérence de la finition</td></tr>\n<tr><td>Dépôts métalliques (cadmium, zinc-nickel)</td><td>Aciers (fixations)</td><td>Protection sacrificielle de l'acier</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> de nombreux primaires et produits de conversion contenaient du chrome hexavalent, cancérogène. Les règles européennes sur les substances chimiques conduisent à les remplacer par des produits sans chrome lorsque les données du constructeur le permettent. Leur usage impose protections respiratoires et cutanées, et la fiche de données de sécurité doit être consultée avant emploi.</div>\n"
      },
      {
       "titre": "Les essais des matériaux",
       "contenu": "\n<p>Les essais caractérisent les matériaux et contrôlent un traitement.</p>\n<ul>\n<li>L'<strong>essai de traction</strong> étire une éprouvette normalisée jusqu'à rupture. La courbe effort-allongement donne le <strong>module d'élasticité</strong> E (environ 70 000 MPa pour l'aluminium, 210 000 MPa pour l'acier), la limite élastique, la résistance à la rupture et l'allongement à la rupture (ductilité).</li>\n<li>L'<strong>essai de dureté</strong> mesure la résistance à la pénétration d'un indenteur : bille (Brinell), cône ou bille sous charge normalisée (Rockwell), pyramide en diamant (Vickers). Il permet de vérifier rapidement, sans détruire la pièce, qu'un traitement thermique a été réussi.</li>\n<li>L'<strong>essai de résilience</strong> (Charpy) mesure l'énergie absorbée par la rupture d'une éprouvette entaillée sous un choc ; il caractérise la fragilité.</li>\n<li>L'<strong>essai de fatigue</strong> soumet des éprouvettes à des cycles répétés pour tracer la courbe de durée de vie en fonction de l'amplitude de contrainte.</li>\n</ul>\n<p>Pour les collages et composites, on réalise des <strong>éprouvettes témoins</strong> en même temps que la réparation, avec les mêmes produits et le même cycle de polymérisation, puis on les teste en cisaillement ou en pelage selon les données.</p>\n"
      },
      {
       "titre": "Les formes de corrosion",
       "contenu": "\n<table>\n<thead><tr><th>Forme</th><th>Mécanisme</th><th>Aspect et lieux typiques</th></tr></thead>\n<tbody>\n<tr><td>Uniforme</td><td>Attaque chimique régulière de la surface</td><td>Ternissement, poudre blanche sur l'aluminium, rouille sur l'acier</td></tr>\n<tr><td>Par piqûres</td><td>Attaque localisée qui progresse en profondeur</td><td>Petits points blancs ou gris ; dangereux car profonds sous une surface peu marquée</td></tr>\n<tr><td>Galvanique</td><td>Deux métaux différents en contact en présence d'un électrolyte ; le métal le moins noble se corrode</td><td>Fixation en acier ou cuivre sur aluminium sans produit d'interposition</td></tr>\n<tr><td>Intergranulaire</td><td>Attaque le long des joints de grains, souvent après un traitement thermique incorrect</td><td>Peu visible en surface</td></tr>\n<tr><td>Exfoliante</td><td>Forme intergranulaire qui soulève le métal en feuillets</td><td>Bords de pièces extrudées, autour des fixations</td></tr>\n<tr><td>Filiforme</td><td>Filaments sous la peinture</td><td>Peinture soulevée en fils sinueux, souvent autour des rivets</td></tr>\n<tr><td>Sous contrainte</td><td>Fissuration sous l'action combinée d'une contrainte et d'un milieu corrosif</td><td>Ferrures très serrées, pièces 7xxx</td></tr>\n<tr><td>Par frottement (fretting)</td><td>Micro-mouvements entre surfaces en contact</td><td>Traînées sombres autour des rivets qui travaillent</td></tr>\n<tr><td>Microbiologique</td><td>Développement de micro-organismes à l'interface eau-carburant</td><td>Dépôts bruns ou noirs au fond des réservoirs</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la corrosion galvanique se prévient en isolant les métaux différents (primaire, mastic d'interposition, rondelles adaptées) et en respectant les fixations spécifiées. Dans la série galvanique, le magnésium et l'aluminium sont moins nobles que l'acier, l'inox et le cuivre : ce sont eux qui se corrodent.</div>\n"
      },
      {
       "titre": "Traiter une zone corrodée",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> traitement d'une corrosion par piqûres sur un revêtement en 2024-T3, selon les données du constructeur.<br>1. Identifier la zone, la photographier et la décrire (position, étendue, forme de corrosion).<br>2. Décaper localement la peinture avec le produit ou la méthode autorisés, en protégeant les zones voisines (joints, plastiques, entrées de structure).<br>3. Éliminer entièrement les produits de corrosion avec un abrasif non métallique adapté à l'aluminium (jamais de brosse en acier ni de laine d'acier, dont les particules provoqueraient une corrosion galvanique), en formant une cuvette aux bords adoucis.<br>4. Mesurer la profondeur de matière enlevée (comparateur sur support, jauge de profondeur) et la comparer à la limite du manuel, souvent exprimée en pourcentage de l'épaisseur.<br>5. Si nécessaire, confirmer l'élimination complète par un contrôle (loupe, ressuage si demandé).<br>6. Reprotéger : nettoyage, conversion chimique, primaire, finition, dans les délais d'application des produits.<br>7. Enregistrer : description, profondeur mesurée, référence des données et des produits, et signaler la zone pour un suivi aux visites suivantes.<br>Si la profondeur dépasse la limite, la zone devient une réparation structurale ou nécessite l'avis du constructeur.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> peindre par-dessus une corrosion non éliminée ne fait que la masquer : elle continue sous la peinture. Une corrosion découverte sur un élément de structure primaire est toujours évaluée avant toute remise en vol.</div>\n"
      }
     ],
     "points_cles": [
      "Alliages d'aluminium : 2xxx cuivre, 6xxx magnésium-silicium, 7xxx zinc ; 2024-T3 pour les revêtements.",
      "L'état T indique un traitement thermique ; O = recuit ; H = écroui.",
      "Le placage en aluminium pur protège l'alliage par effet sacrificiel.",
      "Acier 4130 : chrome-molybdène, tubes et bâtis soudés.",
      "Rivets DD et D conservés au froid après trempe ; rivets AD posés directement.",
      "Traction, dureté et résilience caractérisent un matériau ; la dureté contrôle un traitement thermique.",
      "Corrosion galvanique : le métal le moins noble se corrode ; isoler les métaux différents.",
      "Corrosion : éliminer totalement, mesurer, comparer aux limites, reprotéger, enregistrer."
     ],
     "lexique": [
      {
       "terme": "État métallurgique",
       "def": "Suffixe (O, H, T…) qui indique les traitements subis par un alliage."
      },
      {
       "terme": "Mise en solution",
       "def": "Chauffage d'un alliage pour dissoudre les éléments d'addition avant trempe."
      },
      {
       "terme": "Maturation",
       "def": "Durcissement progressif d'un alliage trempé à température ambiante."
      },
      {
       "terme": "Revenu artificiel",
       "def": "Maintien au four à température modérée pour durcir un alliage trempé."
      },
      {
       "terme": "Placage",
       "def": "Couche d'aluminium pur laminée sur un alliage pour le protéger de la corrosion."
      },
      {
       "terme": "Anodisation",
       "def": "Création électrolytique d'une couche d'oxyde protectrice sur l'aluminium."
      },
      {
       "terme": "Dureté",
       "def": "Résistance d'un matériau à la pénétration d'un indenteur."
      },
      {
       "terme": "Corrosion galvanique",
       "def": "Corrosion du métal le moins noble de deux métaux en contact dans un électrolyte."
      },
      {
       "terme": "Corrosion exfoliante",
       "def": "Corrosion intergranulaire qui soulève le métal en feuillets."
      },
      {
       "terme": "Produit d'interposition",
       "def": "Mastic ou primaire placé entre deux pièces pour les isoler et assurer l'étanchéité."
      }
     ]
    },
    {
     "id": "bavg-reparation-structurale",
     "titre": "Réparation structurale métallique et composite",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Classer un dommage de structure selon les catégories du manuel de réparation.",
      "Appliquer les règles de conception d'une réparation rivetée : matériau, épaisseur, pas, distance au bord.",
      "Calculer le nombre et la longueur des rivets d'un doubleur.",
      "Conduire un dérivetage, un arrêt de fissure et une pose de rivets conformes.",
      "Décrire les étapes d'une réparation de composite stratifié par biseautage."
     ],
     "sections": [
      {
       "titre": "Évaluer un dommage : les trois catégories",
       "contenu": "\n<p>Avant toute réparation, le dommage est <strong>nettoyé</strong>, <strong>délimité</strong> et <strong>mesuré</strong> (longueur, largeur, profondeur, distance aux fixations et aux bords d'éléments). Le <strong>manuel de réparation structurale</strong> (ou le chapitre structure du manuel de maintenance pour beaucoup d'avions légers) classe alors le dommage :</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Définition</th><th>Action</th></tr></thead>\n<tbody>\n<tr><td>Dommage admissible (négligeable)</td><td>Dommage dans les limites, sans effet sur la résistance</td><td>Ragréage éventuel, reprotection, enregistrement</td></tr>\n<tr><td>Dommage réparable</td><td>Dépasse les limites admissibles mais une réparation type est décrite</td><td>Réparation selon le schéma du manuel</td></tr>\n<tr><td>Dommage nécessitant remplacement ou avis du constructeur</td><td>Hors des réparations décrites</td><td>Remplacement de la pièce ou réparation approuvée spécifique</td></tr>\n</tbody>\n</table>\n<p>Lorsque le constructeur ne fournit pas de donnée, certaines pratiques reconnues (par exemple la circulaire consultative américaine AC 43.13-1B, souvent utilisée en aviation légère) peuvent servir de base, dans les conditions prévues par la réglementation applicable. Une réparation importante doit être approuvée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une réparation ne doit jamais être plus faible que la structure d'origine, mais elle ne doit pas non plus être exagérément plus rigide : un doubleur trop épais concentre les efforts à ses extrémités et déplace le problème en créant une nouvelle zone de fatigue.</div>\n"
      },
      {
       "titre": "Règles de conception d'une réparation rivetée",
       "contenu": "\n<p>Une réparation type sur revêtement consiste à découper la zone endommagée en une forme régulière aux angles arrondis, à poser un <strong>doubleur</strong> à l'intérieur (et parfois une pièce de remplissage affleurante), puis à le riveter. Les règles générales, à confirmer toujours dans les données applicables, sont :</p>\n<ul>\n<li><strong>matériau</strong> du doubleur identique ou de caractéristiques au moins égales, avec le même traitement ;</li>\n<li><strong>épaisseur</strong> égale ou immédiatement supérieure à celle du revêtement ;</li>\n<li><strong>distance au bord</strong> (centre du rivet au bord de la tôle) d'au moins 2 diamètres de rivet, et 2,5 diamètres pour les rivets à tête fraisée ;</li>\n<li><strong>pas</strong> (distance entre rivets d'une même rangée) d'au moins 3 diamètres, avec un maximum fixé par les données (souvent de l'ordre de 8 à 10 diamètres) ;</li>\n<li><strong>pas transversal</strong> (entre deux rangées) d'environ 75 % du pas, rangées décalées en quinconce ;</li>\n<li>découpe aux <strong>angles arrondis</strong> (rayon minimal donné par les données) pour éviter les concentrations de contraintes.</li>\n</ul>\n<table>\n<thead><tr><th>Diamètre de rivet</th><th>Distance au bord mini (2D)</th><th>Pas mini (3D)</th></tr></thead>\n<tbody>\n<tr><td>3/32 in (2,4 mm)</td><td>4,8 mm</td><td>7,1 mm</td></tr>\n<tr><td>1/8 in (3,2 mm)</td><td>6,4 mm</td><td>9,5 mm</td></tr>\n<tr><td>5/32 in (4,0 mm)</td><td>7,9 mm</td><td>11,9 mm</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Calculer le nombre et la longueur des rivets",
       "contenu": "\n<p>Le nombre de rivets doit permettre de transmettre, de part et d'autre de la zone réparée, l'effort que la tôle intacte pouvait supporter. Chaque rivet peut céder de deux façons : par <strong>cisaillement</strong> du rivet ou par <strong>matage</strong> (écrasement du bord du trou dans la tôle). On retient la plus faible des deux valeurs. Les manuels fournissent des tableaux de résistance ; le calcul ci-dessous en montre la logique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dimensionner un doubleur (valeurs d'exemple, à remplacer par les données du constructeur).<br>Données : revêtement 2024-T3 de 0,8 mm ; largeur de la zone coupée perpendiculairement à l'effort 40 mm ; résistance retenue de la tôle 430 MPa ; rivets 2117-T4 de 3,2 mm ; résistance d'un rivet en cisaillement simple retenue 1 700 N ; résistance au matage de la tôle de 0,8 mm pour ce diamètre retenue 1 650 N.<br>1. Effort à transmettre : F = R × e × l = 430 × 0,8 × 40 = 13 760 N.<br>2. Résistance d'un rivet : la plus faible entre 1 700 N (cisaillement) et 1 650 N (matage), soit 1 650 N.<br>3. Nombre de rivets de chaque côté : 13 760 / 1 650 ≈ 8,3, arrondi au nombre supérieur : 9 rivets de chaque côté de la zone.<br>4. Disposition : deux rangées en quinconce de 5 et 4 rivets au pas de 4 diamètres (12,8 mm), avec 6,4 mm de distance au bord au moins.<br>5. Longueur des rivets : épaisseur totale à assembler (0,8 mm de revêtement + 1,0 mm de doubleur = 1,8 mm) + 1,5 × D (4,8 mm) = 6,6 mm ; on choisit la longueur normalisée immédiatement adaptée dans le tableau du fournisseur.<br>6. Contrôle de la tête formée : diamètre environ 1,5 D (4,8 mm) et hauteur environ 0,5 D (1,6 mm), vérifiés avec une jauge de rivets.</div>\n"
      },
      {
       "titre": "Gestes de tôlerie : dérivetage, arrêt de fissure, pose",
       "contenu": "\n<p>Le <strong>dérivetage</strong> d'un rivet plein se fait sans agrandir le trou : on pointe le centre de la tête manufacturée, on perce avec un foret d'un diamètre légèrement inférieur à celui du fût, juste sur la hauteur de la tête, on décolle la tête avec un chasse-goupille engagé dans le trou, puis on chasse le fût en soutenant la tôle par l'arrière. Un trou agrandi ou ovalisé impose un rivet de diamètre supérieur (rivet de réparation), si les données l'autorisent et si la distance au bord le permet.</p>\n<p>Une petite fissure dans une zone non critique peut parfois être stoppée par un <strong>trou d'arrêt</strong> percé à son extrémité exacte, préalablement localisée à la loupe ou par ressuage : le trou arrondit le fond de fissure et diminue la concentration de contrainte. Ce n'est pas une réparation définitive en soi et la méthode n'est appliquée que si les données le prévoient.</p>\n<p>La <strong>pose</strong> d'un rivet plein se fait au marteau pneumatique et à la contre-bouterolle (tas), ou à la presse. Les trous sont percés au diamètre prescrit, ébavurés, les tôles maintenues serrées par des agrafes (clecos), et un produit d'interposition appliqué si demandé. Les défauts à rechercher sont : tête formée trop plate ou trop haute, tête décentrée, tête manufacturée marquée par la bouterolle, tôle déformée autour du rivet, jour entre les tôles.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de percer une pièce d'avion, le tôlier s'entraîne sur une éprouvette de même épaisseur pour régler la pression du marteau et vérifier ses têtes formées. Ce réglage évite de multiplier les dérivetages sur l'avion, chacun risquant d'abîmer le trou.</div>\n"
      },
      {
       "titre": "Réparer un composite stratifié",
       "contenu": "\n<p>Les structures composites (fibres de verre ou de carbone imprégnées de résine époxy, parfois avec une âme en nid d'abeille ou en mousse) se réparent selon des procédés très encadrés, car la résistance dépend de l'orientation des fibres et de la qualité du collage.</p>\n<ol>\n<li><strong>Évaluation</strong> : inspection visuelle, test au marteau léger (son mat d'une zone délaminée), parfois ultrasons. On délimite la zone saine.</li>\n<li><strong>Élimination</strong> du matériau endommagé et <strong>biseautage</strong> (scarfing) : on ponce en pente douce autour de la zone, de façon à mettre à nu chaque pli. La pente est fixée par le manuel (souvent de l'ordre de 1 pour 20 à 1 pour 50 selon le matériau).</li>\n<li><strong>Préparation</strong> : séchage de la zone (l'humidité empêche l'adhésion), nettoyage au solvant autorisé, aucune contamination par les doigts.</li>\n<li><strong>Drapage</strong> des plis de réparation, découpés à la taille de chaque palier, avec la même orientation que les plis d'origine, plus un ou plusieurs plis de renfort si demandé.</li>\n<li><strong>Polymérisation</strong> sous vide (sac à vide, tissu d'arrachage, feutre de drainage), à la température et pendant la durée prescrites, avec enregistrement de la température par thermocouples.</li>\n<li><strong>Contrôle</strong> : aspect, test au marteau, éprouvette témoin, puis finition et reprotection contre les ultraviolets.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les résines et adhésifs ont une durée de conservation et une durée d'utilisation après mélange (durée pratique d'emploi). Un produit périmé ou mal dosé ne polymérise pas correctement : vérifier les dates, peser les composants avec une balance, noter les numéros de lot sur la carte de travail.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la poussière de ponçage de composites, surtout de carbone, est irritante et conductrice. Aspiration à la source, masque filtrant, gants et lunettes sont obligatoires ; les équipements électriques voisins sont protégés.</div>\n"
      }
     ],
     "points_cles": [
      "Tout dommage est mesuré puis classé : admissible, réparable, à remplacer ou soumis au constructeur.",
      "Une réparation doit égaler la résistance d'origine sans rigidité excessive.",
      "Distance au bord mini 2D (2,5D en fraisé), pas mini 3D, rangées en quinconce.",
      "Nombre de rivets = effort à transmettre / résistance du rivet (le plus faible entre cisaillement et matage).",
      "Longueur de rivet ≈ épaisseur assemblée + 1,5 D ; tête formée ≈ 1,5 D de diamètre et 0,5 D de hauteur.",
      "Dérivetage sans agrandir le trou : percer la tête avec un foret plus petit que le fût.",
      "Composite : évaluer, biseauter, sécher, draper dans l'orientation d'origine, polymériser sous vide, contrôler.",
      "Produits de collage : dates de péremption, dosage pesé, numéros de lot enregistrés."
     ],
     "lexique": [
      {
       "terme": "Doubleur",
       "def": "Pièce de tôle rivetée derrière une zone réparée pour transmettre les efforts."
      },
      {
       "terme": "Distance au bord",
       "def": "Distance du centre d'une fixation au bord de la tôle."
      },
      {
       "terme": "Pas de rivetage",
       "def": "Distance entre les centres de deux rivets voisins d'une même rangée."
      },
      {
       "terme": "Matage",
       "def": "Écrasement du bord d'un trou par la fixation qui transmet l'effort."
      },
      {
       "terme": "Tête formée",
       "def": "Tête du rivet créée par écrasement du fût lors de la pose."
      },
      {
       "terme": "Trou d'arrêt",
       "def": "Trou percé à l'extrémité d'une fissure pour en stopper la propagation."
      },
      {
       "terme": "Cleco",
       "def": "Agrafe temporaire qui maintient les tôles en position avant rivetage."
      },
      {
       "terme": "Biseautage (scarfing)",
       "def": "Ponçage en pente douce d'un stratifié pour mettre chaque pli à nu avant réparation."
      },
      {
       "terme": "Polymérisation",
       "def": "Durcissement chimique d'une résine, souvent accéléré par la chaleur."
      },
      {
       "terme": "Sac à vide",
       "def": "Film étanche sous lequel on fait le vide pour compacter une réparation composite."
      }
     ]
    },
    {
     "id": "bavg-tuyauteries-harnais-metallisation",
     "titre": "Tuyauteries, raccords, harnais électriques et métallisation",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Façonner et inspecter une tuyauterie rigide à évasement aéronautique.",
      "Installer et contrôler une tuyauterie flexible et ses raccords.",
      "Réaliser un sertissage de contact ou de cosse avec un outillage contrôlé.",
      "Appliquer les règles d'installation des faisceaux électriques.",
      "Réaliser et contrôler une liaison de métallisation."
     ],
     "sections": [
      {
       "titre": "Les tuyauteries rigides",
       "contenu": "\n<p>Les circuits de carburant, d'huile, de freins et d'instruments utilisent des <strong>tuyauteries rigides</strong> en alliage d'aluminium (souvent 5052-O ou 6061, faciles à cintrer et à évaser) ou en acier inoxydable pour les zones chaudes et les hautes pressions. Le tube est désigné par son <strong>diamètre extérieur</strong>, généralement en seizièmes de pouce (un tube « -4 » mesure 4/16 = 1/4 in de diamètre extérieur), et son épaisseur de paroi.</p>\n<p>Le <strong>cintrage</strong> se fait à la cintreuse, sans écraser le tube : le constructeur fixe un rayon de cintrage minimal et un aplatissement maximal (ovalisation) admissible. L'<strong>évasement</strong> de l'extrémité permet le raccordement par écrou et manchon :</p>\n<ul>\n<li>les raccords aéronautiques de la norme AN utilisent un <strong>évasement à 37°</strong> ;</li>\n<li>les raccords automobiles utilisent un évasement à 45°, <strong>incompatible</strong> : un mélange des deux fuit ou se rompt sous vibration ;</li>\n<li>l'<strong>évasement double</strong> (repli de la paroi) est utilisé sur les tubes en aluminium tendre de petit diamètre pour renforcer l'extrémité ;</li>\n<li>certains raccords sans évasement utilisent une bague sertie sur le tube.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un écrou de raccord trop serré écrase et fissure l'évasement, un écrou insuffisamment serré fuit. On serre au couple prescrit ou, à défaut de valeur, selon la méthode des pratiques standard (serrage à la main puis rotation d'un angle défini). Une tuyauterie qui fuit n'est jamais « resserrée en force » : on démonte et on inspecte l'évasement.</div>\n"
      },
      {
       "titre": "Les tuyauteries flexibles et les raccords",
       "contenu": "\n<p>Les <strong>flexibles</strong> relient des éléments qui bougent l'un par rapport à l'autre (moteur et cellule, freins sur jambe de train) ou absorbent les vibrations. Ils comportent un tube intérieur en élastomère ou en PTFE, une ou plusieurs tresses de renfort (acier inoxydable ou textile) et parfois une gaine pare-feu orange ou rouge dans le compartiment moteur.</p>\n<p>Leur installation obéit à des règles précises :</p>\n<ul>\n<li>respecter le <strong>rayon de courbure minimal</strong> et laisser une légère <strong>longueur de mou</strong> (le flexible se raccourcit sous pression) ;</li>\n<li>ne pas <strong>vriller</strong> le flexible : la <strong>ligne de repère</strong> longitudinale imprimée doit rester droite après serrage ;</li>\n<li>éviter tout frottement ; utiliser des colliers garnis et des gaines de protection ;</li>\n<li>vérifier les marquages : référence, date de fabrication, et l'échéance de remplacement si le constructeur en impose une.</li>\n</ul>\n<p>Les <strong>raccords</strong> normalisés (AN, MS) sont identifiés par leur forme (droit, coudé, en T, union de cloison) et leur matériau ; les raccords en alliage d'aluminium sont couramment anodisés en bleu. Les filetages sont protégés par des bouchons dès qu'un circuit est ouvert, pour éviter l'entrée d'impuretés.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans une zone où cohabitent fluides et électricité, les faisceaux électriques sont placés au-dessus des tuyauteries de fluides inflammables, jamais en dessous : une fuite ne doit pas couler sur un câble susceptible de produire un arc.</div>\n"
      },
      {
       "titre": "Le sertissage des contacts et des cosses",
       "contenu": "\n<p>En aéronautique, les liaisons électriques sont réalisées principalement par <strong>sertissage</strong>, qui donne une connexion mécaniquement solide et résistante aux vibrations, plus fiable que la soudure à l'étain dans les zones vibrantes. Chaque contact ou cosse est associé à une plage de sections de fil et à un <strong>outil de sertissage</strong> défini, avec son <strong>positionneur</strong> ou sa matrice.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> sertir une cosse sur un fil de calibre AWG 20 (section d'environ 0,5 mm²) selon le manuel de câblage.<br>1. Identifier dans le manuel la référence de cosse, l'outil, la matrice et la longueur de dénudage prescrites.<br>2. Vérifier que l'outil est étalonné (étiquette en cours de validité) et, si la procédure le demande, contrôler la matrice avec la jauge go/no-go.<br>3. Dénuder à la longueur exacte avec une pince à dénuder adaptée, sans couper ni entailler les brins ; refuser un fil dont un brin est coupé.<br>4. Introduire le fil jusqu'à ce que les brins soient visibles dans la fenêtre d'inspection de la cosse, sans que l'isolant entre dans le fût.<br>5. Sertir en un seul cycle complet : la pince à cliquet ne s'ouvre qu'en fin de course.<br>6. Contrôler : position du sertissage, absence de brins hors du fût, isolant intact, marquage de l'outil visible ; essai de traction manuelle ou, selon la procédure, au dynamomètre.<br>7. Repérer le fil selon son identification (marquage d'origine ou manchon) et enregistrer la réparation.</div>\n<p>Les <strong>connecteurs</strong> circulaires ou rectangulaires reçoivent des contacts sertis (broches ou douilles) insérés et extraits avec des outils spécifiques. Les alvéoles non utilisées sont fermées par des bouchons d'étanchéité. Les <strong>épissures</strong> (raccordement de deux fils) se font avec des manchons approuvés, décalées les unes des autres dans un faisceau et jamais dans une zone de flexion.</p>\n"
      },
      {
       "titre": "Règles d'installation des faisceaux",
       "contenu": "\n<p>L'ensemble des fils, connecteurs, protections et supports forme le <strong>système d'interconnexion électrique</strong> (en anglais EWIS). Son vieillissement est une préoccupation de sécurité : isolants fissurés, frottements, contamination par les fluides peuvent provoquer arcs électriques et incendies.</p>\n<table>\n<thead><tr><th>Règle</th><th>Raison</th></tr></thead>\n<tbody>\n<tr><td>Fixer les faisceaux par des colliers garnis à intervalles réguliers</td><td>Éviter vibrations et frottements</td></tr>\n<tr><td>Utiliser des passe-fils ou gaines dans les traversées de cloison</td><td>Protéger l'isolant des bords vifs</td></tr>\n<tr><td>Respecter un rayon de courbure minimal (de l'ordre de 10 fois le diamètre du faisceau, valeur selon les données)</td><td>Ne pas endommager les isolants et conducteurs</td></tr>\n<tr><td>Ménager une boucle de goutte avant un connecteur</td><td>L'eau s'égoutte au point bas au lieu de couler dans le connecteur</td></tr>\n<tr><td>Séparer faisceaux de puissance et faisceaux sensibles (radio, capteurs)</td><td>Limiter les perturbations électromagnétiques</td></tr>\n<tr><td>Laisser un mou de maintenance près des connecteurs</td><td>Permettre de refaire un sertissage sans tirer sur le fil</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors des visites, une inspection de zone recherche systématiquement les défauts de câblage : isolant brûlé ou fondu près de l'échappement, collier cassé, faisceau en appui sur une tuyauterie, copeaux de perçage tombés dans un faisceau après une réparation de structure. Un faisceau est toujours protégé (bâche, ruban) avant tout perçage à proximité.</div>\n"
      },
      {
       "titre": "La métallisation",
       "contenu": "\n<p>La <strong>métallisation</strong> assure la continuité électrique entre les éléments métalliques de l'avion. Elle a plusieurs rôles : écouler les charges électrostatiques, offrir un retour de courant pour les équipements dont la masse est la structure, assurer le plan de masse des antennes, limiter les perturbations radio, et canaliser le courant de foudre sans arc entre pièces mobiles.</p>\n<p>Les éléments mobiles (gouvernes, moteur sur silentblocs, train) sont reliés à la structure par des <strong>tresses de métallisation</strong> souples. Les équipements sont montés sur des surfaces préparées : peinture et anodisation retirées localement sur la zone de contact, puis protection après assemblage.</p>\n<p>La qualité d'une métallisation se vérifie par une mesure de <strong>résistance de contact</strong> avec un micro-ohmmètre (ou milliohmmètre) à quatre fils, entre l'équipement et la structure de référence. La valeur maximale admissible, de l'ordre de quelques milliohms, est fixée par le constructeur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un multimètre ordinaire ne convient pas pour mesurer une métallisation : la résistance de ses cordons et de ses pointes est du même ordre ou supérieure à la valeur à mesurer. Seul un appareil à quatre fils adapté donne une mesure exploitable.</div>\n"
      },
      {
       "titre": "Soudage, brasage et collage",
       "contenu": "\n<p>Le référentiel mentionne aussi des techniques d'assemblage moins courantes en atelier d'aviation légère, mais qu'il faut savoir reconnaître :</p>\n<ul>\n<li>le <strong>soudage</strong> des tubes d'acier au chrome-molybdène (bâtis moteurs, fuselages en treillis) se fait au chalumeau oxyacétylénique ou à l'arc sous gaz inerte (TIG), par un soudeur qualifié, selon des données approuvées ; une soudure sur structure n'est jamais improvisée, et le bâti réparé est contrôlé (visuel, ressuage ou magnétoscopie) ;</li>\n<li>le <strong>brasage</strong> à l'étain sert pour certaines connexions électriques hors zones vibrantes et pour les blindages ; il exige un fer à température adaptée, un flux non corrosif et un nettoyage après opération ;</li>\n<li>le <strong>collage structural</strong> (métal sur métal, composite) suit des procédés approuvés : préparation de surface, produits identifiés, durées et températures, éprouvettes témoins.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le soudage et le brasage près d'un circuit carburant ou dans un hangar contenant des avions avitaillés exigent un permis de feu, l'éloignement des produits inflammables, un extincteur à portée et une surveillance après la fin des travaux.</div>\n"
      }
     ],
     "points_cles": [
      "Le diamètre d'un tube rigide s'exprime souvent en seizièmes de pouce (« -4 » = 1/4 in).",
      "Évasement aéronautique AN à 37°, incompatible avec l'évasement automobile à 45°.",
      "Un flexible ne doit pas être vrillé : la ligne de repère reste droite.",
      "Câbles électriques au-dessus des tuyauteries de fluides inflammables.",
      "Sertissage avec outil étalonné, longueur de dénudage exacte, brins visibles dans la fenêtre.",
      "Épissures décalées, jamais en zone de flexion ; alvéoles libres bouchées.",
      "Faisceaux : colliers garnis, passe-fils, rayon de courbure, boucle de goutte, séparation.",
      "Métallisation mesurée en milliohms avec un appareil à quatre fils."
     ],
     "lexique": [
      {
       "terme": "Évasement",
       "def": "Mise en forme conique de l'extrémité d'un tube pour le raccorder par écrou et manchon."
      },
      {
       "terme": "Flexible",
       "def": "Tuyauterie souple renforcée par une tresse, reliant des éléments mobiles ou vibrants."
      },
      {
       "terme": "Ligne de repère",
       "def": "Trait longitudinal imprimé sur un flexible pour détecter une torsion."
      },
      {
       "terme": "Raccord AN",
       "def": "Raccord normalisé aéronautique américain, à évasement de 37°."
      },
      {
       "terme": "Sertissage",
       "def": "Liaison mécanique et électrique d'un fil dans un contact par déformation contrôlée."
      },
      {
       "terme": "Épissure",
       "def": "Raccordement de deux conducteurs par un manchon serti."
      },
      {
       "terme": "EWIS",
       "def": "Ensemble des fils, connecteurs, protections et supports qui forment le système d'interconnexion électrique."
      },
      {
       "terme": "Boucle de goutte",
       "def": "Point bas laissé dans un faisceau avant un connecteur pour évacuer l'eau."
      },
      {
       "terme": "Métallisation",
       "def": "Continuité électrique entre éléments métalliques de l'avion."
      },
      {
       "terme": "Tresse de métallisation",
       "def": "Conducteur souple tressé qui relie un élément mobile à la structure."
      }
     ]
    },
    {
     "id": "bavg-visites-cnd-diagnostic",
     "titre": "Visites programmées, contrôles non destructifs, diagnostic et essais",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Organiser une visite programmée (50 h, 100 h, annuelle) à partir des listes d'inspection du constructeur.",
      "Choisir la méthode de contrôle non destructif adaptée à un matériau et à un défaut recherché.",
      "Décrire les étapes et les limites du ressuage, de la magnétoscopie, des courants de Foucault, des ultrasons et de l'endoscopie.",
      "Conduire une recherche de panne méthodique et en rédiger le compte rendu.",
      "Préparer et réaliser un point fixe en sécurité et en exploiter les relevés."
     ],
     "sections": [
      {
       "titre": "Organiser une visite programmée",
       "contenu": "\n<p>Le programme d'entretien d'un avion léger prévoit des <strong>visites périodiques</strong> à intervalles fixés en heures de vol et en temps calendaire : par exemple une visite de 50 heures, une visite de 100 heures et une visite annuelle, avec des tâches spécifiques à des échéances plus longues (500 h, 1 000 h, 2 ans, 6 ans…). Le constructeur fournit une <strong>liste d'inspection</strong> organisée par zones ou par systèmes : moteur, hélice, cellule, train, commandes, cabine, systèmes électriques et avionique.</p>\n<p>Une visite se déroule en quatre temps :</p>\n<ol>\n<li><strong>préparation</strong> : lecture du compte rendu matériel (défauts signalés par les pilotes), consultation de la situation des consignes de navigabilité et des potentiels, commande des pièces et consommables prévisibles (filtres, joints, bougies) ;</li>\n<li><strong>ouverture et inspection</strong> : dépose des capots et trappes, nettoyage, inspection zone par zone, chaque point de la liste étant coché et signé ;</li>\n<li><strong>travaux</strong> : vidange, remplacements, corrections des défauts trouvés, chaque défaut faisant l'objet d'une carte de travail complémentaire ;</li>\n<li><strong>fermeture et essais</strong> : remontage, inspection des zones avant fermeture, essais fonctionnels, point fixe, rédaction des enregistrements et certificat de remise en service.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le chef d'atelier remet au client, avant d'engager les réparations importantes découvertes pendant la visite, une liste des défauts avec une estimation : l'avion appartient au client, qui décide des travaux non obligatoires. Les travaux qui conditionnent la navigabilité, en revanche, ne sont pas négociables : sans eux, l'avion ne sera pas remis en service.</div>\n"
      },
      {
       "titre": "Choisir une méthode de contrôle non destructif",
       "contenu": "\n<p>Les <strong>contrôles non destructifs</strong> (CND) détectent des défauts invisibles à l'œil sans endommager la pièce. La plupart exigent une qualification spécifique de l'opérateur (selon la norme EN 4179 dans l'aéronautique) ; le mécanicien d'aviation générale doit cependant comprendre leur principe, préparer les pièces et interpréter un rapport.</p>\n<table>\n<thead><tr><th>Méthode</th><th>Matériaux</th><th>Défauts détectés</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Ressuage</td><td>Tous matériaux non poreux</td><td>Fissures débouchant en surface</td><td>Ne voit pas les défauts internes ; surface parfaitement propre et sans peinture</td></tr>\n<tr><td>Magnétoscopie</td><td>Matériaux ferromagnétiques (aciers non inoxydables austénitiques)</td><td>Fissures en surface et juste sous la surface</td><td>Inutilisable sur aluminium ; démagnétisation obligatoire après contrôle</td></tr>\n<tr><td>Courants de Foucault</td><td>Matériaux conducteurs</td><td>Fissures de surface et proches de la surface, notamment autour des fixations ; mesure d'épaisseur de revêtement</td><td>Étalonnage sur une pièce étalon ; interprétation délicate</td></tr>\n<tr><td>Ultrasons</td><td>Métaux et composites</td><td>Défauts internes, délaminages, mesure d'épaisseur résiduelle après corrosion</td><td>Couplant nécessaire ; formation poussée</td></tr>\n<tr><td>Radiographie</td><td>Tous</td><td>Défauts internes, corps étrangers, eau dans les nids d'abeille</td><td>Rayonnements ionisants : zone balisée, personnel qualifié</td></tr>\n<tr><td>Endoscopie (boroscope)</td><td>Cavités inaccessibles</td><td>État des cylindres, soupapes, intérieur des longerons et tubes</td><td>Examen visuel uniquement</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Le ressuage pas à pas",
       "contenu": "\n<p>Le <strong>ressuage</strong> est la méthode la plus accessible en atelier d'aviation légère, notamment pour confirmer une fissure soupçonnée ou contrôler une zone après élimination de corrosion.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôle par ressuage coloré en bombes aérosol, selon la procédure applicable.<br>1. Préparation : décaper la peinture, dégraisser au nettoyant de la gamme, laisser sécher. La surface doit être propre ; un ponçage ou un sablage récent peut refermer les fissures en écrasant le métal.<br>2. Imprégnation : appliquer le pénétrant rouge sur toute la zone et respecter le temps d'imprégnation prescrit (souvent de l'ordre de 10 à 30 minutes), pendant lequel le liquide pénètre dans les fissures par capillarité.<br>3. Élimination de l'excès : essuyer avec un chiffon sec, puis avec un chiffon légèrement imbibé de nettoyant ; ne jamais pulvériser le nettoyant directement sur la pièce, qui viderait les fissures.<br>4. Révélation : pulvériser une couche fine et uniforme de révélateur blanc ; il aspire le pénétrant resté dans les défauts.<br>5. Examen : après le temps de révélation, observer sous bon éclairage : une ligne rouge nette signale une fissure, des points isolés une porosité.<br>6. Nettoyage final et reprotection de la pièce ; enregistrement du résultat (localisation, longueur de l'indication).</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les produits de ressuage, de la même gamme du même fabricant, ne se mélangent pas avec ceux d'une autre gamme. Les aérosols sont inflammables : ventilation, absence de source d'ignition, port de gants et de lunettes.</div>\n"
      },
      {
       "titre": "La recherche de panne méthodique",
       "contenu": "\n<p>La <strong>recherche de panne</strong> vise à trouver la cause d'un dysfonctionnement avec le minimum de démontages et sans remplacer de pièces au hasard. Elle s'appuie sur le manuel de dépannage lorsqu'il existe, sur les schémas et sur une démarche logique.</p>\n<ol>\n<li><strong>Recueillir les symptômes</strong> : ce que le pilote a constaté, dans quelles conditions (phase de vol, température, permanente ou intermittente).</li>\n<li><strong>Reproduire</strong> le défaut au sol si possible.</li>\n<li><strong>Analyser</strong> le fonctionnement du système sur le schéma et lister les causes possibles.</li>\n<li><strong>Tester</strong> d'abord ce qui est simple et probable, puis découper le circuit en deux (méthode de la <strong>demi-division</strong>) pour localiser la zone défaillante.</li>\n<li><strong>Réparer</strong>, puis <strong>vérifier</strong> par un essai fonctionnel que le symptôme a disparu.</li>\n<li><strong>Rendre compte</strong> : symptôme, cause trouvée, action réalisée, essais.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la demi-division consiste à mesurer au milieu de la chaîne : si le signal y est correct, le défaut est en aval ; sinon, il est en amont. On divise ainsi à chaque mesure la zone suspecte par deux. Exemple : feu anticollision inopérant, disjoncteur armé. Tension présente à l'interrupteur ? Oui. Tension au connecteur du feu ? Non. Le défaut est entre l'interrupteur et le feu : fil ou connecteur intermédiaire, que l'on teste alors en continuité.</div>\n"
      },
      {
       "titre": "Essais fonctionnels et point fixe",
       "contenu": "\n<p>Après une intervention, les <strong>essais fonctionnels</strong> prévus par le manuel vérifient que le système remplit sa fonction : sens et amplitude de débattement des commandes, fonctionnement des volets et des feux, indications des instruments, freinage. Le <strong>point fixe</strong> est un essai moteur au sol, avion immobile, qui vérifie le démarrage, les pressions et températures, la chute des magnétos, le réchauffage carburateur, le ralenti, le régime plein gaz statique, la génération électrique et, pour une hélice à vitesse constante, le fonctionnement du régulateur.</p>\n<p>Le point fixe se prépare avec rigueur :</p>\n<ul>\n<li>aire de point fixe dégagée, avion orienté face au vent, souffle dirigé vers une zone libre (pas de hangar ouvert, de véhicule ou de personne derrière) ;</li>\n<li>cales en place, freins serrés, capots fermés ou, si le moteur tourne capots ouverts pour une recherche de fuite, durée limitée et surveillance des températures ;</li>\n<li>extincteur et personne de surveillance à l'extérieur, communication par signes convenus ;</li>\n<li>personne qualifiée et autorisée aux commandes, liste de vérifications du manuel.</li>\n</ul>\n<table>\n<thead><tr><th>Relevé de point fixe (exemple)</th><th>Valeur mesurée</th><th>Valeur attendue (manuel)</th><th>Conclusion</th></tr></thead>\n<tbody>\n<tr><td>Régime plein gaz statique</td><td>2 280 tr/min</td><td>2 300 à 2 400 tr/min</td><td>Légèrement bas : vérifier mélange, échappement, calage, prise d'air</td></tr>\n<tr><td>Chute magnéto gauche / droite</td><td>100 / 125 tr/min</td><td>Maxi 150, écart maxi 50</td><td>Conforme</td></tr>\n<tr><td>Pression d'huile</td><td>Dans l'arc vert</td><td>Arc vert</td><td>Conforme</td></tr>\n<tr><td>Ralenti</td><td>650 tr/min, moteur régulier</td><td>Selon manuel</td><td>Conforme</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'hélice en rotation est quasiment invisible. Personne ne s'approche de l'avion moteur tournant sans y être invité par un signe du pilote d'essai, et l'approche se fait toujours par l'arrière de l'aile, jamais par l'avant.</div>\n"
      },
      {
       "titre": "Rédiger un compte rendu d'inspection ou de panne",
       "contenu": "\n<p>Le compte rendu est la trace utile de tout le travail de diagnostic. Il est rédigé pour être compris par un collègue, le client et un auditeur. Il suit une structure simple :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Symptôme signalé</td><td>« Feu anticollision inopérant, signalé par le pilote le 12/04 à 3 215 h »</td></tr>\n<tr><td>Constat</td><td>« Défaut reproduit au sol ; disjoncteur armé ; 14 V présents à l'interrupteur, 0 V au connecteur du feu »</td></tr>\n<tr><td>Cause</td><td>« Fil coupé par frottement au passage de la nervure de l'emplanture, passe-fil manquant »</td></tr>\n<tr><td>Action</td><td>« Épissure selon le manuel de câblage, chapitre et révision ; pose d'un passe-fil ; fixation du faisceau »</td></tr>\n<tr><td>Essais</td><td>« Feu fonctionnel ; continuité et isolement contrôlés ; inspection de la zone sans autre défaut »</td></tr>\n<tr><td>Référence et signature</td><td>Carte de travail, nom, date, signature</td></tr>\n</tbody>\n</table>\n<p>Le compte rendu distingue les faits constatés (mesures, observations) des hypothèses. Il emploie le vocabulaire de la documentation (désignation exacte des pièces et des zones) et des unités explicites. Un bon compte rendu permet aussi de repérer les défauts répétitifs sur un même avion ou une même flotte.</p>\n"
      }
     ],
     "points_cles": [
      "Une visite suit la liste d'inspection du constructeur : préparation, inspection, travaux, fermeture et essais.",
      "Le ressuage détecte les fissures débouchantes, sur surface propre et sans peinture.",
      "La magnétoscopie ne s'applique qu'aux matériaux ferromagnétiques et impose une démagnétisation.",
      "Les courants de Foucault détectent les fissures autour des fixations dans les matériaux conducteurs.",
      "Les ultrasons détectent défauts internes et délaminages et mesurent les épaisseurs.",
      "Recherche de panne : symptômes, reproduction, analyse, tests par demi-division, réparation, vérification, compte rendu.",
      "Le point fixe se fait avion calé, face au vent, souffle dégagé, extincteur et surveillant présents.",
      "Les relevés de point fixe sont comparés aux valeurs du manuel et enregistrés."
     ],
     "lexique": [
      {
       "terme": "Visite programmée",
       "def": "Ensemble de tâches d'entretien déclenchées par une échéance d'heures ou de temps calendaire."
      },
      {
       "terme": "Contrôle non destructif",
       "def": "Méthode de détection de défauts qui n'altère pas la pièce contrôlée."
      },
      {
       "terme": "Ressuage",
       "def": "CND par pénétrant et révélateur qui fait apparaître les fissures débouchantes."
      },
      {
       "terme": "Magnétoscopie",
       "def": "CND par aimantation et particules magnétiques sur matériaux ferromagnétiques."
      },
      {
       "terme": "Courants de Foucault",
       "def": "CND par induction électromagnétique détectant les défauts proches de la surface."
      },
      {
       "terme": "Endoscope (boroscope)",
       "def": "Appareil optique ou vidéo permettant d'examiner l'intérieur d'une cavité."
      },
      {
       "terme": "Demi-division",
       "def": "Méthode de recherche de panne qui divise la zone suspecte par deux à chaque test."
      },
      {
       "terme": "Essai fonctionnel",
       "def": "Vérification qu'un système remplit sa fonction après intervention."
      },
      {
       "terme": "Point fixe",
       "def": "Essai du moteur au sol, avion immobilisé, avec relevé des paramètres."
      },
      {
       "terme": "Régime statique",
       "def": "Régime atteint plein gaz avion immobile, indicateur de l'état du moteur et de l'hélice."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Documentation technique du constructeur",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bavg-doc-tache-manuel-maintenance",
     "titre": "Exploiter une tâche du manuel de maintenance",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Repérer l'organisation d'un manuel de maintenance : chapitres, sections, blocs de pages, applicabilité.",
      "Vérifier qu'une tâche est à jour et applicable à l'avion concerné.",
      "Distinguer avertissement, mise en garde et note, et en tirer les mesures de sécurité.",
      "Extraire d'une tâche les moyens, consommables, couples et contrôles nécessaires.",
      "Rédiger une analyse structurée d'une tâche, telle qu'elle est demandée à l'épreuve écrite."
     ],
     "sections": [
      {
       "titre": "Le document et sa structure",
       "contenu": "\n<p>Le <strong>manuel de maintenance</strong> (en anglais Maintenance Manual ou Aircraft Maintenance Manual, AMM) est la donnée approuvée de référence pour tous les travaux courants. Sur les avions conçus selon la spécification ATA, il est découpé en <strong>chapitres</strong> (par exemple 32 pour le train), <strong>sections</strong> (32-40 freins et roues) et <strong>sujets</strong> (32-40-01). Dans chaque sujet, les pages sont regroupées en <strong>blocs</strong> selon la nature de l'information :</p>\n<table>\n<thead><tr><th>Bloc de pages</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>1 à 99</td><td>Description et fonctionnement</td></tr>\n<tr><td>101 à 199</td><td>Recherche de pannes</td></tr>\n<tr><td>201 à 299</td><td>Pratiques de maintenance (regroupe parfois tout le reste sur les manuels simples)</td></tr>\n<tr><td>301 à 399</td><td>Entretien courant (pleins, graissage)</td></tr>\n<tr><td>401 à 499</td><td>Dépose et repose</td></tr>\n<tr><td>501 à 599</td><td>Réglages et essais</td></tr>\n<tr><td>601 à 699</td><td>Inspection et contrôle</td></tr>\n<tr><td>701 à 799</td><td>Nettoyage et peinture</td></tr>\n<tr><td>801 à 899</td><td>Réparations approuvées</td></tr>\n</tbody>\n</table>\n<p>Beaucoup d'avions légers anciens ont un manuel organisé selon une logique propre au constructeur (sections numérotées par système), souvent proche de l'ordre ATA. Le principe d'exploitation reste le même.</p>\n<p>En tête du manuel figurent la <strong>liste des pages en vigueur</strong> (LEP), qui donne pour chaque page sa date ou son numéro de révision, et le <strong>tableau des révisions</strong>. Chaque page porte en pied son numéro, sa date et l'identification du chapitre.</p>\n"
      },
      {
       "titre": "Le vocabulaire d'une tâche",
       "contenu": "\n<p>Une tâche suit généralement la même trame : titre et référence, applicabilité (en anglais « effectivity », numéros de série concernés), conditions préalables, outillage et équipements, consommables, pièces, références croisées vers d'autres tâches, puis la procédure numérotée et les vérifications finales.</p>\n<table>\n<thead><tr><th>Terme</th><th>Signification</th><th>Conséquence pour le mécanicien</th></tr></thead>\n<tbody>\n<tr><td>WARNING (avertissement)</td><td>Risque de blessure ou de mort</td><td>Appliquer la mesure de protection avant de commencer l'étape</td></tr>\n<tr><td>CAUTION (mise en garde)</td><td>Risque de dommage au matériel</td><td>Adapter le geste ou l'outillage</td></tr>\n<tr><td>NOTE</td><td>Information utile</td><td>Lire, sans obligation de sécurité</td></tr>\n<tr><td>Effectivity</td><td>Numéros de série auxquels la tâche ou la figure s'applique</td><td>Comparer au numéro de série de l'avion</td></tr>\n<tr><td>Torque</td><td>Couple de serrage, souvent en lbf·in, parfois en N·m</td><td>Convertir si la clé est graduée dans une autre unité</td></tr>\n<tr><td>Safety / lockwire</td><td>Freinage (fil-frein, goupille)</td><td>Ne pas oublier l'étape et la faire contrôler si critique</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Méthode de lecture d'une tâche",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une tâche en six étapes.<br>1. Identifier : référence de la tâche, chapitre ATA, titre ; vérifier dans la liste des pages en vigueur que la révision est la dernière.<br>2. Contrôler l'applicabilité : le numéro de série et la configuration de l'avion (moteur, équipement installé, modifications) sont-ils couverts ?<br>3. Relever les avertissements et mises en garde : en déduire les mesures de sécurité (mise hors tension, consignation, protections individuelles).<br>4. Lister les moyens : outillage (dont outillage spécial et outillage étalonné), consommables avec leur spécification, pièces avec leur référence, documents liés.<br>5. Découper la procédure : phases (préparation, dépose, repose, contrôles), étapes critiques (couples, freinages, essais), points de double contrôle.<br>6. Préparer la traçabilité : ce qui devra être noté sur la carte de travail (numéros de série des pièces, numéro de clé dynamométrique, résultats d'essais).</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une valeur de couple lue dans une figure dont l'applicabilité ne concerne pas l'avion, une révision ancienne imprimée et conservée dans un tiroir, ou une conversion d'unités inversée sont les erreurs classiques d'exploitation. Sur une copie papier, la date d'impression doit être vérifiée par rapport à la révision en vigueur.</div>\n"
      },
      {
       "titre": "Pièges fréquents et réflexes de lecture",
       "contenu": "\n<table>\n<thead><tr><th>Piège</th><th>Réflexe</th></tr></thead>\n<tbody>\n<tr><td>Lire la procédure de dépose et oublier que la repose renvoie à une autre tâche (réglage, essai)</td><td>Relever toutes les références croisées avant de commencer et les intégrer à la préparation</td></tr>\n<tr><td>Confondre deux figures proches, l'une pour une configuration ancienne, l'autre pour la nouvelle</td><td>Lire l'applicabilité de chaque figure, pas seulement celle de la tâche</td></tr>\n<tr><td>Appliquer un couple « à sec » alors que le manuel demande un filetage lubrifié, ou l'inverse</td><td>Lire les notes associées aux couples : lubrifiant, couple de freinage de l'écrou à ajouter ou non</td></tr>\n<tr><td>Prendre un consommable « équivalent » non listé</td><td>Utiliser la spécification citée ; toute équivalence doit être prévue par les données</td></tr>\n<tr><td>Interpréter une étape ambiguë à sa façon</td><td>Demander à l'encadrement ; signaler l'ambiguïté au constructeur par la procédure de l'organisme</td></tr>\n</tbody>\n</table>\n<p>À l'épreuve écrite, les questions portent typiquement sur ces points : justifier une mesure de sécurité à partir d'un avertissement, convertir une valeur, lister les moyens, ordonner des étapes, ou préciser ce qui doit être enregistré.</p>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Le document fourni est une tâche d'un manuel de maintenance de quadriplace léger, chapitre ATA 80 (démarrage), intitulée « Démarreur : dépose et repose », pages 401 à 403, révision 14. La liste des pages en vigueur jointe indique révision 14 pour ces pages. Applicabilité : numéros de série 1450 et suivants équipés du démarreur léger installé par la modification de série 112. Les éléments principaux sont reproduits ci-dessous.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu du document</th></tr></thead>\n<tbody>\n<tr><td>Avertissement</td><td>« Débrancher le câble négatif de la batterie avant toute intervention sur le circuit de démarrage. »</td></tr>\n<tr><td>Mise en garde</td><td>« Ne pas laisser le démarreur pendre par son câble d'alimentation. »</td></tr>\n<tr><td>Outillage</td><td>Clé dynamométrique 30 à 150 lbf·in ; jeu de clés ; fil-frein 0,032 in</td></tr>\n<tr><td>Consommables</td><td>Joint de bride neuf, référence indiquée ; graisse spécifiée pour les cannelures</td></tr>\n<tr><td>Dépose</td><td>1. Déposer le capot inférieur. 2. Débrancher le câble d'alimentation de la borne du démarreur, isoler la cosse. 3. Déposer les quatre écrous de fixation et les rondelles. 4. Dégager le démarreur et le joint.</td></tr>\n<tr><td>Repose</td><td>1. Nettoyer la bride, poser un joint neuf. 2. Engager le démarreur, cannelures graissées. 3. Poser rondelles et écrous, serrer en croix à 96 à 108 lbf·in. 4. Rebrancher le câble, serrer l'écrou de borne à 40 lbf·in, poser le capuchon isolant. 5. Rebrancher la batterie. 6. Effectuer un essai de démarrage et vérifier l'absence de bruit anormal.</td></tr>\n</tbody>\n</table>\n<p>L'avion à traiter porte le numéro de série 1612, la modification de série 112 est inscrite à son livret. La clé dynamométrique disponible à l'atelier est graduée en N·m.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>Validité et applicabilité.</strong> La liste des pages en vigueur et les pages fournies portent la même révision 14 : le document est à jour. Le numéro de série 1612 est supérieur à 1450 et la modification 112 est enregistrée : la tâche s'applique à l'avion.</p>\n<p><strong>Sécurité.</strong> L'avertissement impose de débrancher le câble négatif de la batterie : le démarreur est relié directement à la batterie par un câble de forte section, non protégé par un disjoncteur ; un outil en contact avec la borne et la masse provoquerait un arc et des brûlures. La cosse débranchée est isolée pour éviter un contact accidentel. La mise en garde protège le câble et sa cosse, qui ne sont pas prévus pour porter le poids du démarreur : celui-ci est soutenu pendant toute la dépose.</p>\n<p><strong>Moyens.</strong> Outillage courant, clé dynamométrique étalonnée, fil-frein (non utilisé dans les étapes reproduites, à vérifier dans la suite de la tâche) ; consommables : joint neuf obligatoire, graisse spécifiée.</p>\n<p><strong>Conversion des couples.</strong> 1 lbf·in ≈ 0,113 N·m. Écrous de fixation : 96 × 0,113 ≈ 10,8 N·m et 108 × 0,113 ≈ 12,2 N·m, soit une plage de 10,8 à 12,2 N·m ; on vise le milieu, environ 11,5 N·m. Écrou de borne : 40 × 0,113 ≈ 4,5 N·m. La clé de 30 à 150 lbf·in correspond à environ 3,4 à 17 N·m : elle convient pour les deux serrages.</p>\n<p><strong>Étapes critiques.</strong> Le serrage en croix assure une compression uniforme du joint ; le capuchon isolant de borne évite un court-circuit avec le capot ; l'essai de démarrage valide l'intervention.</p>\n<p><strong>Traçabilité.</strong> Sur la carte de travail : référence et numéro de série du démarreur déposé et du démarreur posé, référence du certificat libératoire de ce dernier, référence de la tâche et révision, numéro de la clé dynamométrique, couples appliqués, résultat de l'essai.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne analyse de tâche suit toujours l'ordre validité, applicabilité, sécurité, moyens, procédure, contrôles, traçabilité. Chaque affirmation s'appuie sur un élément précis du document cité entre guillemets ou par sa rubrique.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les manuels sont de plus en plus consultés sur tablette ou par abonnement en ligne. L'organisme définit dans ses procédures comment s'assurer que la version consultée est la dernière et comment conserver la référence exacte de la révision utilisée pour chaque travail.</div>\n"
      }
     ],
     "points_cles": [
      "Le manuel de maintenance est la donnée approuvée de référence pour les travaux courants.",
      "Organisation ATA : chapitre, section, sujet ; blocs de pages 1, 101, 201, 401, 501, 601…",
      "La liste des pages en vigueur permet de vérifier que la révision est à jour.",
      "L'applicabilité se vérifie par le numéro de série et la configuration de l'avion.",
      "WARNING = danger pour les personnes ; CAUTION = risque pour le matériel ; NOTE = information.",
      "Les couples sont souvent en lbf·in : 1 lbf·in ≈ 0,113 N·m.",
      "Une analyse suit l'ordre : validité, applicabilité, sécurité, moyens, procédure, contrôles, traçabilité.",
      "Les éléments à tracer sont identifiés avant de commencer le travail."
     ],
     "lexique": [
      {
       "terme": "AMM",
       "def": "Manuel de maintenance de l'aéronef, donnée approuvée pour les travaux courants."
      },
      {
       "terme": "Bloc de pages",
       "def": "Groupe de pages d'un sujet ATA consacré à un type d'information (description, dépose, essais…)."
      },
      {
       "terme": "LEP",
       "def": "Liste des pages en vigueur, avec leur révision, placée en tête du manuel."
      },
      {
       "terme": "Effectivity (applicabilité)",
       "def": "Indication des numéros de série ou configurations auxquels une information s'applique."
      },
      {
       "terme": "WARNING",
       "def": "Avertissement signalant un risque de blessure ou de mort."
      },
      {
       "terme": "CAUTION",
       "def": "Mise en garde signalant un risque de dommage au matériel."
      },
      {
       "terme": "Référence croisée",
       "def": "Renvoi d'une tâche vers une autre tâche nécessaire à sa réalisation."
      },
      {
       "terme": "Révision",
       "def": "Mise à jour officielle d'un manuel, identifiée par un numéro et une date."
      }
     ]
    },
    {
     "id": "bavg-doc-schema-electrique",
     "titre": "Lire un schéma électrique du manuel de câblage",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Identifier les types de schémas électriques et leur usage.",
      "Reconnaître les symboles, repères d'équipements et codes d'identification des fils.",
      "Suivre un circuit de la source à la masse en nommant chaque élément traversé.",
      "Vérifier le dimensionnement d'une protection et estimer une chute de tension.",
      "Établir un plan de contrôle pour une recherche de panne à partir du schéma."
     ],
     "sections": [
      {
       "titre": "Les documents électriques et leur structure",
       "contenu": "\n<p>Les circuits électriques d'un avion sont décrits dans le <strong>manuel de câblage</strong> (en anglais Wiring Diagram Manual, WDM) ou dans un chapitre dédié du manuel de maintenance. On y trouve plusieurs niveaux de représentation :</p>\n<table>\n<thead><tr><th>Document</th><th>Ce qu'il montre</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Schéma de principe</td><td>Le fonctionnement du système, sans détail de câblage</td><td>Comprendre la logique, préparer une recherche de panne</td></tr>\n<tr><td>Schéma de câblage</td><td>Chaque fil, son identification, ses connecteurs, broches et masses</td><td>Suivre physiquement un circuit, faire des mesures</td></tr>\n<tr><td>Liste des fils</td><td>Pour chaque fil : identification, calibre, longueur, extrémités</td><td>Fabrication et réparation de faisceaux</td></tr>\n<tr><td>Liste des équipements et connecteurs</td><td>Repère, référence, emplacement (station, zone)</td><td>Localiser un élément sur l'avion</td></tr>\n</tbody>\n</table>\n<p>Le schéma est dessiné <strong>hors tension</strong>, interrupteurs et relais au repos, sauf indication contraire. Il ne respecte pas l'implantation réelle : deux éléments voisins sur le dessin peuvent être éloignés de plusieurs mètres sur l'avion.</p>\n"
      },
      {
       "titre": "Symboles, repères et codes de fils",
       "contenu": "\n<p>Les symboles suivent des normes (ISO, et souvent des normes américaines pour les avions de cette origine). On reconnaît notamment : la batterie, le disjoncteur (souvent avec son calibre en ampères), le fusible, l'interrupteur, le relais (bobine et contacts), la diode, la lampe, le moteur, la masse (structure) et le connecteur.</p>\n<p>Les connecteurs sont repérés par une lettre et un numéro : selon une convention répandue, <strong>P</strong> (plug) désigne la partie mobile, côté faisceau, et <strong>J</strong> (jack) la partie fixe, côté équipement ou cloison ; le numéro de broche est indiqué à chaque passage.</p>\n<p>Chaque fil porte une <strong>identification</strong>, imprimée sur l'isolant à intervalles réguliers. Une convention répandue (issue de normes militaires américaines) code successivement :</p>\n<ul>\n<li>une lettre de <strong>fonction</strong> (par exemple L pour l'éclairage, P pour la puissance, R pour la radio) ;</li>\n<li>un <strong>numéro</strong> de circuit ;</li>\n<li>une lettre de <strong>segment</strong> qui change à chaque connecteur ou borne (A, B, C…) ;</li>\n<li>le <strong>calibre</strong> du fil selon la jauge américaine AWG (plus le nombre est grand, plus le fil est fin) ;</li>\n<li>un suffixe éventuel, par exemple N pour un fil de masse.</li>\n</ul>\n<p>Ainsi « L1B16 » se lirait : éclairage, circuit 1, deuxième segment, calibre 16. Chaque constructeur précise sa propre convention en tête du manuel ; c'est elle qui fait foi.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le calibre AWG varie en sens inverse de la section : un fil AWG 12 est plus gros qu'un AWG 20. Remplacer un fil par un calibre de nombre supérieur, donc plus fin, peut le faire chauffer et rend la protection inadaptée.</div>\n"
      },
      {
       "titre": "Méthode de lecture d'un schéma",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire et exploiter un schéma de câblage.<br>1. Identifier le schéma : titre, chapitre, révision, applicabilité (numéros de série, options installées).<br>2. Repérer la source (barre bus) et la protection du circuit (disjoncteur ou fusible, calibre).<br>3. Suivre le courant de la source vers le récepteur, puis du récepteur vers la masse, en notant dans l'ordre chaque fil, chaque connecteur avec ses broches, chaque contact.<br>4. Identifier les éléments de commande (interrupteurs, relais) et leur position au repos.<br>5. Calculer si besoin : courant consommé, adéquation de la protection, chute de tension dans les fils.<br>6. Définir les points de mesure utiles pour une recherche de panne, en commençant au milieu du circuit (demi-division).<br>7. Localiser physiquement ces points grâce à la liste des équipements et connecteurs (zone, station).</div>\n"
      },
      {
       "titre": "Pièges fréquents et règles de mesure",
       "contenu": "\n<p>Le schéma est un outil de mesure autant que de compréhension. Quelques règles évitent les erreurs et les dégâts :</p>\n<ul>\n<li>une mesure de <strong>tension</strong> se fait circuit sous tension, en parallèle, par rapport à une masse sûre ; une mesure de <strong>continuité</strong> ou de <strong>résistance</strong> se fait circuit hors tension, disjoncteur tiré et repéré par une étiquette ;</li>\n<li>on ne pique jamais l'isolant d'un fil avec une pointe de touche : le trou laisse entrer l'humidité et crée un point de corrosion ; on mesure aux bornes, aux connecteurs avec les adaptateurs prévus, ou à l'arrière des contacts selon la procédure ;</li>\n<li>on n'introduit pas une pointe de multimètre dans une douille de connecteur : elle l'élargit et provoque des faux contacts ultérieurs ;</li>\n<li>une continuité mesurée faible ne garantit pas qu'un fil supporte le courant : un seul brin intact donne une continuité correcte mais chauffe sous charge ; un essai sous charge ou une mesure de chute de tension complète le diagnostic ;</li>\n<li>un relais représenté au repos peut être alimenté en fonctionnement normal : on raisonne sur l'état réel au moment de la mesure.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> avant de débrancher un connecteur d'équipement électronique, on coupe l'alimentation et on respecte les précautions contre les décharges électrostatiques (bracelet relié à la masse, capuchons de protection sur les connecteurs ouverts).</div>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Le document fourni est un extrait de schéma de câblage, chapitre ATA 33 (éclairage), « Phare d'atterrissage », révision 9, applicable à l'avion étudié. Il est décrit ci-dessous dans l'ordre du circuit.</p>\n<table>\n<thead><tr><th>Ordre</th><th>Élément sur le schéma</th><th>Indication portée</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Barre bus principale 14 V</td><td>« MAIN BUS »</td></tr>\n<tr><td>2</td><td>Disjoncteur CB12</td><td>« LDG LT 15 A »</td></tr>\n<tr><td>3</td><td>Fil L4A14</td><td>Du disjoncteur à l'interrupteur S8</td></tr>\n<tr><td>4</td><td>Interrupteur S8</td><td>« LANDING LIGHT », représenté ouvert</td></tr>\n<tr><td>5</td><td>Fil L4B14</td><td>De S8 au connecteur P/J 22, broche 4 (cloison de l'aile gauche, emplanture)</td></tr>\n<tr><td>6</td><td>Fil L4C14</td><td>De J22 broche 4 au phare DS3 (bord d'attaque aile gauche)</td></tr>\n<tr><td>7</td><td>Phare DS3</td><td>« 14 V, 100 W »</td></tr>\n<tr><td>8</td><td>Fil L4D14N</td><td>Du phare au point de masse GND 7 (nervure de l'aile gauche)</td></tr>\n</tbody>\n</table>\n<p>Données complémentaires : longueur totale des fils L4A à L4C, environ 5,5 m ; résistance linéique d'un fil de cuivre AWG 14 retenue : 8,3 mΩ/m. Symptôme signalé par le pilote : phare inopérant, disjoncteur non déclenché.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>Lecture du circuit.</strong> Le courant part de la barre bus principale, traverse le disjoncteur CB12 de 15 A, le fil L4A14 jusqu'à l'interrupteur S8, puis, interrupteur fermé, les fils L4B14 et L4C14 en passant par la broche 4 du connecteur P/J 22, alimente le phare DS3 et revient à la structure par le fil de masse L4D14N et le point GND 7. Les lettres A, B, C, D montrent que le fil change de segment à chaque élément.</p>\n<p><strong>Courant et protection.</strong> I = P / U = 100 / 14 ≈ 7,1 A. Le disjoncteur de 15 A n'est pas déclenché par ce courant normal et protège le fil AWG 14, dont l'intensité admissible dans ces conditions est supérieure à 15 A d'après les tables des pratiques standard : la protection est cohérente.</p>\n<p><strong>Chute de tension.</strong> Résistance des fils d'alimentation : 5,5 × 0,0083 ≈ 0,046 Ω. Chute : 7,1 × 0,046 ≈ 0,33 V, soit environ 2,3 % de 14 V : valeur faible, acceptable. Une chute nettement supérieure mesurée sur l'avion révélerait une mauvaise connexion.</p>\n<p><strong>Recherche de panne.</strong> Le disjoncteur n'ayant pas déclenché, il ne s'agit pas d'un court-circuit franc mais d'une coupure ou d'une lampe défectueuse. Plan de contrôle, interrupteur fermé, multimètre en voltmètre par rapport à la masse :</p>\n<ol>\n<li>au connecteur J22 broche 4, point milieu du circuit : présence d'environ 14 V ? Si non, le défaut est en amont (disjoncteur, L4A, S8, L4B) ;</li>\n<li>si oui, tension au connecteur du phare DS3 : si présente, contrôler la masse (continuité entre DS3 et la structure par L4D14N et GND 7) puis la lampe ;</li>\n<li>en dernier, après mise hors tension, contrôle de la lampe à l'ohmmètre (filament).</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un circuit électrique se lit toujours comme une boucle complète, de la source à la masse. Un défaut de masse (point corrodé, cosse desserrée) donne exactement les mêmes symptômes qu'une coupure d'alimentation ; on ne l'oublie jamais dans le plan de contrôle.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les points de masse des ailes et des feux sont exposés à l'humidité. Une remise en état consiste à déposer la cosse, nettoyer la surface jusqu'au métal sain, reposer avec la visserie et le produit prévus, puis contrôler la résistance de contact. Le schéma permet d'identifier tous les circuits qui partagent ce point de masse.</div>\n"
      }
     ],
     "points_cles": [
      "Schéma de principe pour comprendre, schéma de câblage pour mesurer, listes pour localiser.",
      "Le schéma est dessiné hors tension, éléments au repos, sans respecter l'implantation.",
      "P = partie mobile du connecteur, J = partie fixe, selon la convention courante.",
      "Code de fil : fonction, numéro de circuit, segment, calibre AWG, suffixe de masse.",
      "Plus le calibre AWG est grand, plus le fil est fin.",
      "On suit toujours la boucle complète : source, protection, commande, récepteur, masse.",
      "Courant I = P / U ; chute de tension = I × R des fils.",
      "Disjoncteur non déclenché : rechercher une coupure ou un défaut de masse, en commençant au milieu du circuit."
     ],
     "lexique": [
      {
       "terme": "WDM",
       "def": "Manuel de câblage : schémas, listes de fils et d'équipements d'un aéronef."
      },
      {
       "terme": "Schéma de principe",
       "def": "Représentation fonctionnelle d'un système sans détail de câblage."
      },
      {
       "terme": "Schéma de câblage",
       "def": "Représentation de chaque fil avec son identification, ses connecteurs et broches."
      },
      {
       "terme": "AWG",
       "def": "Jauge américaine de calibre des fils ; le nombre augmente quand la section diminue."
      },
      {
       "terme": "Segment de fil",
       "def": "Portion d'un circuit entre deux connexions, repérée par une lettre."
      },
      {
       "terme": "Point de masse",
       "def": "Liaison d'un ou plusieurs fils de retour à la structure de l'avion."
      },
      {
       "terme": "Connecteur P/J",
       "def": "Ensemble fiche mobile (P) et embase fixe (J) assurant une liaison démontable."
      },
      {
       "terme": "Chute de tension",
       "def": "Tension perdue dans les conducteurs et connexions, égale au produit du courant par leur résistance."
      }
     ]
    },
    {
     "id": "bavg-doc-limites-dommages-reparation",
     "titre": "Exploiter les limites de dommages et une réparation type",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Repérer dans la documentation de structure les tableaux de limites de dommages et les réparations types.",
      "Identifier la zone, le matériau et l'épaisseur concernés par un dommage.",
      "Comparer un dommage mesuré aux critères d'acceptation et conclure sur sa catégorie.",
      "Extraire d'un schéma de réparation type les informations de fabrication et de pose.",
      "Rédiger une conclusion argumentée et la liste des enregistrements à produire."
     ],
     "sections": [
      {
       "titre": "Le document et sa structure",
       "contenu": "\n<p>Sur les avions de transport, les dommages et réparations sont traités dans un manuel dédié, le <strong>manuel de réparation structurale</strong> (en anglais Structural Repair Manual, SRM). Sur la plupart des avions légers, on trouve l'équivalent dans le chapitre structure du manuel de maintenance ou dans un manuel de réparation spécifique du constructeur. Il est organisé ainsi :</p>\n<ul>\n<li>le <strong>chapitre ATA 51</strong> : généralités, identification des matériaux, fixations et leurs équivalences, méthodes de réparation communes, traitements de protection, règles de rivetage ;</li>\n<li>les <strong>chapitres ATA 52 à 57</strong> : pour chaque grande partie (portes, fuselage, nacelles, empennages, fenêtres, ailes), l'<strong>identification des pièces</strong> (matériau, épaisseur, état), les <strong>dommages admissibles</strong> et les <strong>réparations types</strong>.</li>\n</ul>\n<p>Un tableau d'identification indique, pour chaque élément (revêtement, nervure, longeron), le matériau et l'épaisseur. Un tableau de <strong>limites de dommages admissibles</strong> fixe, par type de dommage (bosse, rayure, entaille, corrosion, fissure, trou), les dimensions maximales et les conditions (distance aux fixations, aux bords, aux autres dommages). Un <strong>schéma de réparation type</strong> donne la géométrie de la découpe, du doubleur, le nombre, le type et la disposition des fixations.</p>\n"
      },
      {
       "titre": "Le vocabulaire des limites de dommages",
       "contenu": "\n<table>\n<thead><tr><th>Terme</th><th>Définition</th></tr></thead>\n<tbody>\n<tr><td>Bosse (dent)</td><td>Enfoncement aux bords arrondis, sans perte de matière</td></tr>\n<tr><td>Pli vif (crease)</td><td>Déformation avec arête marquée, assimilée à une amorce de fissure</td></tr>\n<tr><td>Rayure (scratch)</td><td>Sillon fin et peu profond</td></tr>\n<tr><td>Entaille (nick, gouge)</td><td>Enlèvement localisé de matière aux bords nets</td></tr>\n<tr><td>Fissure (crack)</td><td>Séparation de la matière, quelle que soit sa longueur</td></tr>\n<tr><td>Ragréage (blend-out)</td><td>Élimination d'une rayure ou d'une entaille par un creux aux bords adoucis</td></tr>\n<tr><td>Distance entre dommages</td><td>Distance minimale exigée entre deux dommages voisins pour qu'ils soient traités séparément</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une bosse qui contient un pli vif, une fissure ou qui touche une fixation n'est plus une simple bosse : la plupart des tableaux l'excluent des dommages admissibles. Le premier réflexe est donc de nettoyer la zone et de rechercher une fissure, à la loupe ou par ressuage, avant de mesurer.</div>\n"
      },
      {
       "titre": "Méthode d'exploitation",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> évaluer un dommage de structure avec la documentation.<br>1. Localiser le dommage (zone, stations, éléments voisins) et identifier l'élément endommagé.<br>2. Dans le tableau d'identification, relever le matériau, l'épaisseur et la nature de l'élément (structure primaire ou secondaire).<br>3. Caractériser le dommage : type, dimensions (longueur, largeur, profondeur), distances aux fixations, aux bords, aux raidisseurs et aux autres dommages ; rechercher fissure et pli vif.<br>4. Comparer chaque critère du tableau des dommages admissibles ; un seul critère dépassé suffit à sortir de la catégorie.<br>5. Si le dommage n'est pas admissible, chercher la réparation type applicable et vérifier ses conditions d'emploi (dimension maximale du dommage, zone).<br>6. Si aucune réparation type ne convient, conclure à une demande de données au constructeur ou au remplacement.<br>7. Lister les enregistrements : description du dommage, données utilisées, travaux, contrôles.</div>\n"
      },
      {
       "titre": "Mesurer un dommage correctement",
       "contenu": "\n<p>La qualité de la décision dépend de la qualité de la mesure. Les règles suivantes s'appliquent à la plupart des dommages de revêtement.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Moyen de mesure</th><th>Précaution</th></tr></thead>\n<tbody>\n<tr><td>Profondeur d'une bosse</td><td>Règle droite posée de part et d'autre de la bosse et jauge de profondeur, ou comparateur sur pont</td><td>La règle s'appuie sur le profil sain, pas sur une zone elle-même déformée ; sur une surface courbe, utiliser un gabarit</td></tr>\n<tr><td>Profondeur d'une rayure ou d'une entaille</td><td>Comparateur à pointe fine, profilomètre, ou empreinte en pâte de moulage mesurée ensuite</td><td>Mesurer au point le plus profond, après nettoyage</td></tr>\n<tr><td>Dimensions en surface</td><td>Réglet, pied à coulisse</td><td>Mesurer la zone affectée réelle, y compris la peinture fissurée qui peut masquer l'étendue</td></tr>\n<tr><td>Épaisseur résiduelle</td><td>Mesure par ultrasons</td><td>Étalonner l'appareil sur une cale du même matériau</td></tr>\n<tr><td>Distance aux fixations</td><td>Réglet</td><td>Mesurer du bord du dommage au bord de la tête de fixation ou à son axe, selon la définition du tableau</td></tr>\n</tbody>\n</table>\n<p>Le tableau des dommages admissibles précise toujours comment la mesure est définie : un écart de convention (bord ou axe de fixation, diamètre ou rayon) peut faire basculer la décision.</p>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Le dossier fourni concerne un monomoteur léger métallique. Un chariot de piste a heurté l'aile gauche. Le mécanicien relève sur le revêtement inférieur de l'aile gauche, entre deux nervures, une bosse de 30 mm de diamètre et de 1,6 mm de profondeur, sans pli vif, dont le bord est à 22 mm de la rangée de rivets la plus proche. Le ressuage ne révèle aucune fissure. Une rayure de 18 mm de longueur, d'une profondeur de 0,06 mm, est située à 60 mm de la bosse.</p>\n<p>Tableau d'identification : revêtement inférieur de voilure, alliage 2024-T3, épaisseur 0,64 mm (0,025 in), structure primaire.</p>\n<table>\n<thead><tr><th>Type de dommage (revêtement inférieur de voilure)</th><th>Limite admissible sans réparation</th></tr></thead>\n<tbody>\n<tr><td>Bosse sans pli vif ni fissure</td><td>Profondeur maximale égale à 2 fois l'épaisseur du revêtement ; diamètre maximal 50 mm ; bord à 25 mm au moins de toute fixation</td></tr>\n<tr><td>Rayure</td><td>Profondeur maximale 10 % de l'épaisseur après ragréage ; longueur maximale 50 mm</td></tr>\n<tr><td>Distance entre deux dommages</td><td>Au moins 4 fois la plus grande dimension du plus grand dommage</td></tr>\n<tr><td>Fissure</td><td>Aucune admise</td></tr>\n</tbody>\n</table>\n<p>Réparation type n° 3 (extrait) : bosse ou trou de diamètre maximal 60 mm sur revêtement de voilure ; découpe circulaire du dommage ; doubleur circulaire intérieur en 2024-T3 d'épaisseur 0,81 mm ; deux rangées de rivets universels de 3,2 mm (2117-T4), pas de 19 mm, distance au bord 6,4 mm ; pièce de remplissage affleurante ; mastic d'interposition et primaire selon le chapitre ATA 51.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>Identification.</strong> L'élément est le revêtement inférieur de voilure, en 2024-T3 de 0,64 mm, appartenant à la structure primaire : les limites doivent être appliquées strictement.</p>\n<p><strong>Bosse.</strong> Profondeur admissible : 2 × 0,64 = 1,28 mm ; profondeur mesurée 1,6 mm, donc supérieure : critère non respecté. Diamètre 30 mm inférieur à 50 mm : respecté. Distance aux fixations 22 mm, inférieure aux 25 mm exigés : critère non respecté. La bosse n'est pas un dommage admissible, pour deux raisons indépendantes.</p>\n<p><strong>Rayure.</strong> Profondeur admissible : 10 % de 0,64 = 0,064 mm ; la rayure mesure 0,06 mm, elle est donc juste dans la limite, à condition de rester dans cette valeur après ragréage ; longueur 18 mm inférieure à 50 mm. Elle est admissible si le ragréage n'augmente pas la profondeur au-delà de la limite ; une mesure après ragréage est obligatoire.</p>\n<p><strong>Interaction des dommages.</strong> La plus grande dimension du plus grand dommage est 30 mm (la bosse) ; la distance minimale exigée est 4 × 30 = 120 mm. Les deux dommages sont à 60 mm : ils doivent être considérés ensemble. Cependant, la réparation de la bosse supprimera cette zone ; la rayure, ragréée, restera à vérifier par rapport aux bords du doubleur.</p>\n<p><strong>Réparation.</strong> La réparation type n° 3 couvre les dommages jusqu'à 60 mm sur revêtement de voilure : la bosse de 30 mm entre dans ses conditions d'emploi. Le doubleur de 0,81 mm est de l'épaisseur immédiatement supérieure à celle du revêtement (0,64 mm), conformément aux règles générales. Avec des rivets de 3,2 mm, la distance au bord de 6,4 mm correspond à 2 D et le pas de 19 mm à environ 6 D.</p>\n<p><strong>Conclusion.</strong> Avion immobilisé ; réparation selon la réparation type n° 3 ; ragréage de la rayure et contrôle de sa profondeur ; reprotection. À enregistrer : description et dimensions des dommages, référence des données (chapitre, révision, réparation type n° 3), matériaux et numéros de lot, contrôles réalisés, signature et certificat de remise en service.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une conclusion d'analyse de dommage doit pouvoir être vérifiée par un contrôleur : chaque critère est cité, chaque calcul est posé, et la décision découle du critère le plus défavorable.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les réparations réalisées sont reportées sur une cartographie des réparations de l'avion, utile lors des inspections suivantes et lors d'une vente, car l'acheteur et son expert examinent l'historique des dommages.</div>\n"
      }
     ],
     "points_cles": [
      "Le chapitre ATA 51 donne les généralités ; les chapitres ATA 52 à 57 les limites et réparations par partie d'avion.",
      "Le tableau d'identification fournit matériau, épaisseur et nature de l'élément.",
      "Avant toute mesure, rechercher fissure et pli vif.",
      "Un seul critère dépassé fait sortir le dommage de la catégorie admissible.",
      "La distance entre dommages voisins doit être vérifiée.",
      "Une réparation type a des conditions d'emploi : dimension maximale, zone.",
      "Les rayures sont mesurées après ragréage.",
      "La conclusion cite chaque critère et liste les enregistrements."
     ],
     "lexique": [
      {
       "terme": "SRM",
       "def": "Manuel de réparation structurale : limites de dommages et réparations approuvées."
      },
      {
       "terme": "Dommage admissible",
       "def": "Dommage dans les limites du constructeur, sans réparation structurale nécessaire."
      },
      {
       "terme": "Réparation type",
       "def": "Réparation décrite par le constructeur pour une catégorie de dommage et une zone données."
      },
      {
       "terme": "Pli vif",
       "def": "Déformation à arête marquée, assimilée à une amorce de fissure."
      },
      {
       "terme": "Entaille",
       "def": "Enlèvement localisé de matière aux bords nets."
      },
      {
       "terme": "Ragréage",
       "def": "Élimination d'un défaut superficiel par un creux aux bords adoucis."
      },
      {
       "terme": "Pièce de remplissage",
       "def": "Pièce affleurante qui comble la découpe pour restaurer le profil aérodynamique."
      },
      {
       "terme": "Tableau d'identification",
       "def": "Tableau du constructeur donnant matériau, épaisseur et état de chaque élément de structure."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Documents de navigabilité et de suivi",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bavg-doc-consigne-bulletin",
     "titre": "Analyser une consigne de navigabilité et un bulletin service",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Distinguer consigne de navigabilité, bulletin service et lettre de service.",
      "Repérer les rubriques d'une consigne : applicabilité, motif, actions, délais, référence.",
      "Déterminer si une consigne s'applique à un avion, un moteur, une hélice ou un équipement donné.",
      "Calculer les échéances d'application, initiales et répétitives.",
      "Rédiger l'enregistrement de l'application et mettre à jour la situation des consignes."
     ],
     "sections": [
      {
       "titre": "Les documents et leur statut",
       "contenu": "\n<p>Lorsqu'un défaut susceptible de compromettre la sécurité est découvert sur un type d'aéronef, de moteur, d'hélice ou d'équipement, deux familles de documents circulent :</p>\n<table>\n<thead><tr><th>Document</th><th>Émetteur</th><th>Statut</th></tr></thead>\n<tbody>\n<tr><td>Consigne de navigabilité (CN, en anglais Airworthiness Directive, AD)</td><td>L'autorité : l'AESA pour les produits dont elle assure la certification ; les consignes de l'autorité de l'État de conception (par exemple la FAA pour un avion conçu aux États-Unis) sont en principe reprises par l'AESA</td><td><strong>Obligatoire</strong> : un aéronef concerné qui ne la respecte pas n'est pas navigable</td></tr>\n<tr><td>Bulletin service (BS, en anglais Service Bulletin, SB)</td><td>Le constructeur (avionneur, motoriste, hélicier, équipementier)</td><td>Recommandation, classée par le constructeur (par exemple obligatoire, recommandé, optionnel) ; il devient obligatoire lorsqu'une CN l'impose ou que le programme d'entretien le rend applicable</td></tr>\n<tr><td>Lettre ou instruction de service</td><td>Le constructeur</td><td>Information ou conseil technique</td></tr>\n</tbody>\n</table>\n<p>Les CN de l'AESA sont publiées et consultables en ligne. La personne responsable du maintien de la navigabilité tient à jour une <strong>situation des consignes</strong> pour chaque avion, moteur, hélice et équipement : liste des CN applicables, mode d'application, date et heures d'application, prochaine échéance pour les CN répétitives.</p>\n"
      },
      {
       "titre": "Les rubriques d'une consigne",
       "contenu": "\n<p>Une consigne de navigabilité de l'AESA suit une présentation standard.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th><th>Question à se poser</th></tr></thead>\n<tbody>\n<tr><td>Numéro, date d'émission, date d'effet</td><td>Identification ; la date d'effet sert de point de départ des délais</td><td>Quelle est la version en vigueur (une CN peut être révisée ou remplacée) ?</td></tr>\n<tr><td>Applicabilité</td><td>Type, modèles, numéros de série, références de pièces concernés, exclusions</td><td>Mon avion, mon moteur ou ma pièce sont-ils concernés ?</td></tr>\n<tr><td>Motif</td><td>Description du défaut et de ses conséquences</td><td>Quel risque, sur quel système ?</td></tr>\n<tr><td>Actions requises et délais</td><td>Inspections, remplacements, modifications ; délais initiaux et répétitifs</td><td>Que faire, et avant quand ?</td></tr>\n<tr><td>Action terminale</td><td>Modification qui met fin aux inspections répétitives</td><td>Puis-je supprimer la répétition ?</td></tr>\n<tr><td>Publications de référence</td><td>Bulletin service décrivant la méthode</td><td>Quelle donnée utiliser pour réaliser le travail ?</td></tr>\n<tr><td>Remarques</td><td>Méthodes alternatives possibles, contact</td><td>Existe-t-il une alternative approuvée ?</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une CN peut viser une <strong>pièce</strong> et non un type d'avion : par exemple une magnéto, un filtre, un harnais de siège, un démarreur, installés sur de nombreux modèles différents. L'analyse d'applicabilité doit donc porter aussi sur les références et numéros de série des équipements montés, relevés dans les livrets et sur les pièces elles-mêmes.</div>\n"
      },
      {
       "titre": "Méthode d'analyse",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> traiter une consigne pour un avion donné.<br>1. Vérifier que l'on dispose de la dernière version de la consigne (révision, remplacement).<br>2. Comparer l'applicabilité aux données de l'avion : modèle, numéro de série, équipements installés (référence et numéro de série), modifications et bulletins déjà appliqués (qui peuvent exclure l'avion).<br>3. Si la consigne est applicable, identifier les actions et leurs délais ; calculer l'échéance à partir de la date d'effet et des heures de vol, en retenant la première atteinte quand la consigne dit « au premier des deux termes atteint ».<br>4. Vérifier si la consigne a déjà été appliquée (situation des consignes, livrets), y compris par une méthode équivalente admise.<br>5. Préparer le travail avec la publication de référence (bulletin service) et commander les pièces.<br>6. Après application, enregistrer : numéro et révision de la CN, méthode utilisée, date, heures, résultats, prochaine échéance si répétitive, signature ; mettre à jour la situation des consignes.</div>\n"
      },
      {
       "titre": "Lire un bulletin service",
       "contenu": "\n<p>Le bulletin service cité par une consigne fournit la méthode de travail. Sa structure habituelle est la suivante :</p>\n<ul>\n<li><strong>planification</strong> : produits concernés (modèles, numéros de série, références de pièces), motif, catégorie de conformité recommandée par le constructeur, temps de main-d'œuvre estimé, pièces et outillage nécessaires, incidence éventuelle sur la masse et le centrage, documents à réviser ;</li>\n<li><strong>instructions</strong> : étapes numérotées, figures, critères d'acceptation (par exemple longueur de fissure admissible ou aucune fissure admise) ;</li>\n<li><strong>enregistrement</strong> : mentions à porter dans les livrets ou fiche de compte rendu à retourner au constructeur.</li>\n</ul>\n<p>Le bulletin peut avoir une <strong>révision</strong> plus récente que celle citée par la consigne. Sauf si la consigne l'autorise expressément (« ou révision ultérieure approuvée »), on applique la révision citée par la consigne, ou l'on vérifie que la nouvelle révision est acceptée comme méthode de conformité.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la catégorie « obligatoire » inscrite par un constructeur sur son bulletin ne crée pas à elle seule une obligation réglementaire pour un propriétaire privé ; c'est la consigne de navigabilité ou le programme d'entretien qui la crée. À l'inverse, un bulletin seulement « recommandé » peut devenir obligatoire s'il est repris par une consigne. Il faut toujours vérifier le statut réel.</div>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Le dossier contient une consigne de navigabilité <strong>fictive</strong>, construite pour l'exercice, et un bulletin service associé.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu de la consigne fictive</th></tr></thead>\n<tbody>\n<tr><td>Identification</td><td>CN fictive n° EX-2026-01, date d'effet : 15 mars 2026</td></tr>\n<tr><td>Applicabilité</td><td>Avions du modèle « X-160 », numéros de série 100 à 450 inclus, équipés du robinet sélecteur de carburant de référence 4521-1 ; sont exclus les avions sur lesquels le bulletin service BS-X-07 a été appliqué</td></tr>\n<tr><td>Motif</td><td>Des fissures ont été découvertes sur le corps du robinet sélecteur, pouvant provoquer une fuite de carburant dans la cabine et un risque d'incendie</td></tr>\n<tr><td>Actions</td><td>(1) Dans les 50 heures de vol ou 3 mois suivant la date d'effet, au premier des deux termes atteint : inspecter le corps du robinet selon BS-X-06. (2) En cas de fissure : remplacer avant le vol suivant par un robinet de référence 4521-3. (3) Répéter l'inspection toutes les 100 heures de vol. (4) Le remplacement par un robinet 4521-3 selon BS-X-07 constitue une action terminale.</td></tr>\n</tbody>\n</table>\n<p>Données de l'avion : modèle X-160, numéro de série 312, robinet installé de référence 4521-1. Le livret ne mentionne pas le BS-X-07. Au 15 mars 2026, l'avion totalisait 2 860 heures. Aujourd'hui, 2 mai 2026, il totalise 2 897 heures ; il vole environ 30 heures par mois en ce moment.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>Applicabilité.</strong> Le modèle (X-160) correspond, le numéro de série 312 est compris entre 100 et 450, le robinet installé porte la référence 4521-1 et le bulletin d'exclusion BS-X-07 n'a pas été appliqué : la consigne est <strong>applicable</strong>.</p>\n<p><strong>Échéance initiale.</strong> Critère horaire : 2 860 + 50 = 2 910 heures. Critère calendaire : 15 mars 2026 + 3 mois = 15 juin 2026. Avec 2 897 heures aujourd'hui, il reste 13 heures avant 2 910 heures ; à 30 heures par mois, ce seuil sera atteint vers la mi-mai, bien avant le 15 juin. L'échéance qui s'applique est donc <strong>2 910 heures</strong>, première atteinte.</p>\n<p><strong>Décision.</strong> Planifier l'inspection selon BS-X-06 immédiatement, avant que l'avion n'atteigne 2 910 heures ; informer le gestionnaire de navigabilité et le responsable de l'exploitation pour éviter qu'un vol ne fasse dépasser l'échéance.</p>\n<p><strong>Suite.</strong> Si aucune fissure n'est trouvée à 2 905 heures par exemple, la prochaine inspection sera due à 2 905 + 100 = 3 005 heures. Il est judicieux de proposer au propriétaire l'action terminale (remplacement par un robinet 4521-3 selon BS-X-07), qui supprime les inspections répétitives et le risque.</p>\n<p><strong>Enregistrement.</strong> Dans le livret de l'avion et la situation des consignes : « CN EX-2026-01 appliquée par inspection selon BS-X-06, à 2 905 h le jj/mm/2026, aucune fissure constatée ; prochaine échéance 3 005 h », avec signature et référence de l'autorisation du signataire. En cas d'action terminale : « CN EX-2026-01 soldée par application du BS-X-07, robinet 4521-3 n° de série … installé ».</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans une analyse de consigne, on écrit toujours les deux échéances (horaire et calendaire), on désigne la première atteinte et on justifie. Une CN répétitive n'est jamais « faite une fois pour toutes » : la situation des consignes doit montrer la prochaine échéance.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les gestionnaires de navigabilité consultent régulièrement les nouvelles consignes publiées pour tous les types et équipements qu'ils suivent. Lors de l'examen de navigabilité annuel, la cohérence entre la situation des consignes et l'avion réel (références des pièces installées) est vérifiée en détail.</div>\n"
      }
     ],
     "points_cles": [
      "La CN émane de l'autorité et est obligatoire ; le bulletin service émane du constructeur.",
      "Un bulletin devient obligatoire lorsqu'une CN l'impose ou que le programme d'entretien le prévoit.",
      "Applicabilité : modèle, numéro de série, références de pièces, exclusions.",
      "Une CN peut viser un équipement monté sur de nombreux types d'avions.",
      "Les délais partent de la date d'effet ; on retient la première échéance atteinte.",
      "Une action terminale met fin aux inspections répétitives.",
      "L'enregistrement mentionne CN, révision, méthode, date, heures, résultat et prochaine échéance.",
      "La situation des consignes de chaque avion est tenue à jour et vérifiée à l'examen de navigabilité."
     ],
     "lexique": [
      {
       "terme": "Consigne de navigabilité",
       "def": "Document obligatoire de l'autorité imposant des actions pour corriger une condition dangereuse."
      },
      {
       "terme": "Bulletin service",
       "def": "Document du constructeur décrivant une inspection, une modification ou une méthode de travail."
      },
      {
       "terme": "Date d'effet",
       "def": "Date à partir de laquelle une consigne s'applique et à partir de laquelle on calcule les délais."
      },
      {
       "terme": "Applicabilité",
       "def": "Ensemble des modèles, numéros de série et pièces concernés par un document."
      },
      {
       "terme": "Action répétitive",
       "def": "Action à renouveler à intervalle fixé jusqu'à une action terminale."
      },
      {
       "terme": "Action terminale",
       "def": "Modification qui supprime la condition dangereuse et met fin aux répétitions."
      },
      {
       "terme": "Situation des consignes",
       "def": "État à jour des consignes applicables à un aéronef et de leur application."
      },
      {
       "terme": "Méthode alternative de conformité",
       "def": "Moyen différent de celui de la consigne, approuvé par l'autorité pour y satisfaire."
      }
     ]
    },
    {
     "id": "bavg-doc-pesee-devis-centrage",
     "titre": "Exploiter un rapport de pesée et un devis de masse et centrage",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Identifier les rubriques d'un rapport de pesée et les conditions de la pesée.",
      "Calculer la masse à vide et la position de son centre de gravité à partir des réactions aux points d'appui.",
      "Appliquer les corrections (tares, carburant inutilisable, équipements).",
      "Mettre à jour un devis de masse et centrage après modification d'équipement.",
      "Vérifier la cohérence d'un document de masse et centrage."
     ],
     "sections": [
      {
       "titre": "Les documents de masse et centrage",
       "contenu": "\n<p>La masse et le centrage d'un avion sont établis par une <strong>pesée</strong>, réalisée à la construction puis à des occasions définies (réparation ou modification importante, peinture complète, doute sur l'exactitude du devis, ou périodicité prévue par la réglementation applicable à l'exploitation). Trois documents sont liés :</p>\n<ul>\n<li>le <strong>rapport de pesée</strong> : conditions de la pesée, mesures aux points d'appui, calculs, signature ;</li>\n<li>le <strong>devis de masse et centrage</strong> (ou fiche de masse et centrage) : masse à vide, bras et moment en vigueur, mis à jour à chaque modification ;</li>\n<li>la <strong>liste d'équipements</strong> installés au moment de la pesée, qui définit précisément ce que contient la masse à vide.</li>\n</ul>\n<p>Le pilote utilise les valeurs en vigueur pour calculer le centrage de chaque vol. Une erreur dans ces documents se répercute donc sur tous les vols.</p>\n"
      },
      {
       "titre": "Vocabulaire et conditions de pesée",
       "contenu": "\n<table>\n<thead><tr><th>Terme</th><th>Définition</th></tr></thead>\n<tbody>\n<tr><td>Plan de référence (datum)</td><td>Plan vertical choisi par le constructeur, à partir duquel sont mesurés les bras ; il peut être à l'avant du nez, sur la cloison pare-feu ou ailleurs</td></tr>\n<tr><td>Bras</td><td>Distance horizontale entre le plan de référence et un point (roue, siège, réservoir) ; positif en arrière du plan de référence selon la convention habituelle</td></tr>\n<tr><td>Moment</td><td>Produit de la masse par son bras, en kg·m (ou lb·in)</td></tr>\n<tr><td>Tare</td><td>Masse des cales, supports ou blocs posés sur la balance avec la roue, à soustraire</td></tr>\n<tr><td>Carburant inutilisable</td><td>Carburant restant dans le circuit qui ne peut pas alimenter le moteur ; il fait partie de la masse à vide</td></tr>\n<tr><td>Masse à vide</td><td>Masse de l'avion avec les équipements de la liste, les fluides définis par le constructeur (carburant inutilisable, huile selon sa définition, liquides hydrauliques)</td></tr>\n</tbody>\n</table>\n<p>La pesée se fait dans un hangar fermé (sans courant d'air), sur des <strong>balances étalonnées</strong>, l'avion <strong>mis de niveau</strong> en utilisant les repères prévus par le constructeur (points de nivellement, niveau posé sur une partie désignée de la structure), réservoirs vidangés jusqu'au carburant inutilisable ou corrigés par calcul, huile au niveau prévu, portes fermées, sièges et volets dans la position indiquée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> oublier de soustraire les tares, peser un avion qui n'est pas de niveau ou mesurer les bras des roues avec un mètre posé en biais sont les erreurs les plus courantes. Les bras se mesurent horizontalement, à partir de fils à plomb descendus des repères de structure et des axes de roues.</div>\n"
      },
      {
       "titre": "Méthode de calcul",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter les mesures d'une pesée sur trois balances.<br>1. Pour chaque balance, calculer la masse nette : lecture brute moins tare.<br>2. Relever le bras de chaque point d'appui (roulette de nez, roues principales) par rapport au plan de référence.<br>3. Calculer le moment de chaque point : masse nette × bras.<br>4. Additionner masses et moments ; le centre de gravité est le moment total divisé par la masse totale.<br>5. Appliquer les corrections : ajouter le carburant inutilisable s'il a été vidangé, retirer les éléments présents à la pesée mais ne faisant pas partie de la masse à vide, ajouter ceux qui manquaient.<br>6. Comparer au rapport précédent : un écart important doit être expliqué (modifications enregistrées, erreur de mesure).<br>7. Mettre à jour le devis et signer.</div>\n"
      },
      {
       "titre": "Pesée d'un avion à train classique et cas particuliers",
       "contenu": "\n<p>Sur un avion à <strong>train classique</strong>, la troisième balance se trouve sous la roulette ou le patin de queue, en arrière des roues principales. Le calcul est identique, mais deux points demandent de l'attention :</p>\n<ul>\n<li>l'avion doit être mis en <strong>ligne de vol</strong> (assiette de référence) en soulevant la queue, sur un support posé sur la balance arrière ; la masse de ce support est une tare importante, à peser séparément ;</li>\n<li>le bras de la roulette de queue est grand : une petite erreur sur la lecture arrière influe fortement sur le centrage.</li>\n</ul>\n<p>Certains constructeurs prévoient une pesée sur <strong>points de levage</strong> (vérins posés sur des pesons) plutôt que sur les roues : les bras sont alors ceux des points de levage, donnés par le manuel, ce qui supprime l'incertitude sur la position des roues.</p>\n<p>Les unités demandent aussi une grande vigilance : beaucoup de manuels d'origine américaine expriment masses en livres (1 lb ≈ 0,4536 kg), bras en pouces et moments en livres-pouces, parfois divisés par 1 000 pour simplifier (« moment/1000 »). On ne mélange jamais dans un même tableau des valeurs en unités différentes : on convertit tout avant de calculer.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un bras négatif (masse située en avant du plan de référence) donne un moment négatif. Oublier le signe fausse le centrage, parfois de plusieurs centimètres.</div>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Le dossier contient le rapport de pesée d'un biplace d'école à train tricycle, réalisé après peinture complète, et une demande de modification ultérieure.</p>\n<table>\n<thead><tr><th>Point d'appui</th><th>Lecture brute (kg)</th><th>Tare (kg)</th><th>Bras (m)</th></tr></thead>\n<tbody>\n<tr><td>Roulette de nez</td><td>170</td><td>4</td><td>0,32</td></tr>\n<tr><td>Roue principale gauche</td><td>262</td><td>2</td><td>1,52</td></tr>\n<tr><td>Roue principale droite</td><td>258</td><td>2</td><td>1,52</td></tr>\n</tbody>\n</table>\n<p>Conditions notées : avion de niveau, huile au plein, réservoirs vidangés complètement ; carburant inutilisable déclaré par le constructeur : 8 L d'AVGAS, bras 1,10 m, masse volumique retenue 0,72 kg/L. Ancien devis : masse à vide 676 kg, centrage 1,218 m.</p>\n<p>Modification demandée après la pesée : dépose d'une ancienne radio de 3,4 kg et pose d'une radio neuve de 1,9 kg avec un boîtier d'interface de 0,6 kg, l'ensemble au bras 0,85 m.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>Masses nettes.</strong> Nez : 170 − 4 = 166 kg ; gauche : 262 − 2 = 260 kg ; droite : 258 − 2 = 256 kg. Total : 682 kg.</p>\n<p><strong>Moments.</strong> Nez : 166 × 0,32 = 53,12 kg·m ; roues principales : (260 + 256) × 1,52 = 516 × 1,52 = 784,32 kg·m. Total : 837,44 kg·m.</p>\n<p><strong>Centrage brut.</strong> 837,44 / 682 ≈ 1,228 m.</p>\n<p><strong>Correction du carburant inutilisable.</strong> Masse : 8 × 0,72 = 5,76 kg ; moment : 5,76 × 1,10 ≈ 6,34 kg·m. Masse à vide : 682 + 5,76 = 687,76 kg ; moment : 837,44 + 6,34 = 843,78 kg·m ; centrage : 843,78 / 687,76 ≈ 1,227 m.</p>\n<p><strong>Comparaison.</strong> Par rapport à l'ancien devis (676 kg), la masse à vide a augmenté d'environ 11,8 kg, ce qui est plausible pour une peinture complète (couches de primaire et de finition, parfois appliquées sur l'ancienne peinture non décapée). Le centrage a très peu varié (1,218 à 1,227 m), la peinture étant répartie sur tout l'avion avec une part plus importante sur l'empennage, ce qui explique un léger recul.</p>\n<table>\n<thead><tr><th>Mise à jour après modification</th><th>Masse (kg)</th><th>Bras (m)</th><th>Moment (kg·m)</th></tr></thead>\n<tbody>\n<tr><td>Masse à vide après pesée</td><td>687,76</td><td>1,227</td><td>843,78</td></tr>\n<tr><td>Dépose ancienne radio</td><td>− 3,40</td><td>0,85</td><td>− 2,89</td></tr>\n<tr><td>Pose radio neuve et boîtier</td><td>+ 2,50</td><td>0,85</td><td>+ 2,13</td></tr>\n<tr><td>Nouvelle masse à vide</td><td>686,86</td><td>1,227</td><td>843,02</td></tr>\n</tbody>\n</table>\n<p>Nouveau centrage : 843,02 / 686,86 ≈ 1,2274 m, soit 1,227 m arrondi au millième : la masse diminue de 0,9 kg et le centrage recule de façon négligeable, car on a retiré de la masse en avant du centre de gravité.</p>\n<p><strong>Documents à produire.</strong> Rapport de pesée signé (conditions, mesures, calculs), devis de masse et centrage mis à jour avec la date et la référence de la modification, liste d'équipements corrigée (ancienne radio retirée, nouvelle radio et boîtier ajoutés), information du propriétaire pour la mise à jour des documents du pilote.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> retirer une masse en avant du centre de gravité le fait reculer ; retirer une masse en arrière le fait avancer. Un raisonnement qualitatif rapide permet de détecter une erreur de signe dans le calcul.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les ateliers conservent un historique des devis successifs de chaque avion. Un tableau qui récapitule chaque modification avec masse, bras et moment permet de retrouver à tout moment comment on est passé de la dernière pesée au devis en vigueur.</div>\n"
      }
     ],
     "points_cles": [
      "Rapport de pesée, devis de masse et centrage et liste d'équipements sont indissociables.",
      "Pesée en hangar fermé, balances étalonnées, avion de niveau selon les repères du constructeur.",
      "Masse nette = lecture brute − tare.",
      "Centrage = moment total / masse totale, bras mesurés horizontalement depuis le plan de référence.",
      "Le carburant inutilisable fait partie de la masse à vide.",
      "Chaque modification d'équipement donne lieu à une ligne masse, bras, moment dans le devis.",
      "Un écart avec la pesée précédente doit être expliqué.",
      "Retirer une masse en avant du CG le fait reculer : contrôle qualitatif du signe."
     ],
     "lexique": [
      {
       "terme": "Rapport de pesée",
       "def": "Document qui consigne les conditions, mesures et calculs d'une pesée d'aéronef."
      },
      {
       "terme": "Devis de masse et centrage",
       "def": "Document en vigueur indiquant masse à vide, bras et moment de l'avion."
      },
      {
       "terme": "Tare",
       "def": "Masse des supports posés sur la balance, à déduire de la lecture brute."
      },
      {
       "terme": "Masse à vide",
       "def": "Masse de l'avion équipé selon la liste d'équipements avec les fluides définis par le constructeur."
      },
      {
       "terme": "Carburant inutilisable",
       "def": "Carburant qui reste dans le circuit et ne peut pas être consommé par le moteur."
      },
      {
       "terme": "Mise de niveau",
       "def": "Réglage de l'assiette de l'avion sur les repères prévus avant la pesée."
      },
      {
       "terme": "Moment",
       "def": "Produit d'une masse par son bras de levier, en kg·m."
      },
      {
       "terme": "Liste d'équipements",
       "def": "Inventaire des équipements installés inclus dans la masse à vide."
      }
     ]
    },
    {
     "id": "bavg-doc-dossier-travaux-crs",
     "titre": "Analyser un dossier de travaux : compte rendu matériel, cartes de travail et CRS",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Relier un défaut signalé au compte rendu matériel à l'ordre de travail et aux cartes de travail.",
      "Contrôler qu'une carte de travail est complète et exploitable pour la traçabilité.",
      "Identifier les tâches exigeant une inspection indépendante.",
      "Vérifier la conformité d'un certificat de remise en service et des inscriptions aux livrets.",
      "Rédiger une liste argumentée d'écarts et d'actions correctives."
     ],
     "sections": [
      {
       "titre": "Les documents du dossier de travaux",
       "contenu": "\n<p>Toute intervention sur un avion léger produit un <strong>dossier de travaux</strong>, dont les pièces s'enchaînent :</p>\n<table>\n<thead><tr><th>Document</th><th>Rédacteur</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Compte rendu matériel (carnet de route, section technique)</td><td>Pilote, puis atelier</td><td>Défaut constaté, date, heures ; en retour, action corrective et signature</td></tr>\n<tr><td>Ordre de travail (ou bon de lancement)</td><td>Organisme, à la demande du client</td><td>Travaux commandés : visite, correction de défauts, consignes à appliquer</td></tr>\n<tr><td>Cartes de travail</td><td>Mécanicien, contrôleur</td><td>Chaque tâche, données utilisées, résultats, pièces, outillage, signatures</td></tr>\n<tr><td>Certificats des pièces</td><td>Fournisseur</td><td>Form 1 ou certificat de conformité</td></tr>\n<tr><td>Certificat de remise en service</td><td>Personnel de certification</td><td>Attestation que les travaux commandés ont été réalisés conformément aux données</td></tr>\n<tr><td>Livrets (avion, moteur, hélice)</td><td>Organisme</td><td>Récapitulatif des travaux, consignes, remplacements</td></tr>\n</tbody>\n</table>\n<p>À l'épreuve comme en entreprise, analyser un dossier, c'est vérifier que l'on peut suivre sans trou le fil qui va du défaut signalé à la remise en service, et que chaque document contient les informations exigées.</p>\n"
      },
      {
       "titre": "Ce que doit contenir une carte de travail",
       "contenu": "\n<ul>\n<li>l'identification de l'avion (immatriculation, numéro de série) et de l'ordre de travail ;</li>\n<li>la description de la tâche et la référence des <strong>données utilisées</strong> (manuel, chapitre, révision ; consigne ; bulletin) ;</li>\n<li>les <strong>résultats</strong> : valeurs mesurées (couples, tensions, pressions, jeux), constats ;</li>\n<li>les <strong>pièces</strong> posées (référence, numéro de série ou de lot, certificat) et déposées ;</li>\n<li>l'<strong>outillage étalonné</strong> utilisé (numéro d'identification) ;</li>\n<li>la <strong>signature</strong> de l'exécutant à chaque étape significative et, si la tâche est critique, celle de l'<strong>inspecteur indépendant</strong> ;</li>\n<li>la date et, si la tâche est interrompue, l'état d'avancement.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une carte de travail doit permettre à une personne qui n'était pas présente de savoir exactement ce qui a été fait, avec quoi, selon quelle donnée, par qui et avec quel résultat. Une mention vague comme « RAS » ou « fait » sans valeur mesurée ne répond pas à cette exigence quand une mesure était demandée.</div>\n"
      },
      {
       "titre": "Méthode d'analyse d'un dossier",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler un dossier de travaux en cinq passages.<br>1. Fil conducteur : chaque défaut du compte rendu matériel a-t-il une carte de travail et une action corrective, ou un report justifié ?<br>2. Contenu des cartes : données référencées avec révision, résultats chiffrés, pièces et certificats, outillage, signatures, dates.<br>3. Tâches critiques : toute intervention sur commandes de vol ou commandes moteur a-t-elle une inspection indépendante signée par une seconde personne ?<br>4. Pièces : chaque pièce posée a-t-elle un certificat conforme (référence, numéro de série identiques) et est-elle applicable selon le catalogue ?<br>5. Clôture : le certificat de remise en service mentionne-t-il les travaux, les données, la date, le signataire et sa référence, les éventuels reports ? Les livrets sont-ils mis à jour ?<br>Pour chaque écart trouvé : citer le document et la rubrique, expliquer le risque, proposer l'action.</div>\n"
      },
      {
       "titre": "Les inscriptions aux livrets",
       "contenu": "\n<p>Les livrets récapitulent l'histoire de l'avion, du moteur et de l'hélice. Chaque inscription doit être lisible, datée, signée et permettre de retrouver le dossier détaillé. Pour une visite, on y trouve typiquement : la nature de la visite et la référence du programme d'entretien, les heures cellule (et les heures moteur depuis neuf et depuis révision), les principaux remplacements avec références et numéros de série, les consignes appliquées et la référence du certificat de remise en service.</p>\n<table>\n<thead><tr><th>Livret</th><th>Exemples d'inscriptions</th></tr></thead>\n<tbody>\n<tr><td>Avion</td><td>Visites, réparations de structure, modifications, pesées, consignes cellule</td></tr>\n<tr><td>Moteur</td><td>Vidanges, remplacement de cylindres ou de magnétos, essais de compression, consignes moteur, heures depuis révision</td></tr>\n<tr><td>Hélice</td><td>Pose et dépose, inspections, réparations, consignes hélice, heures depuis révision</td></tr>\n</tbody>\n</table>\n<p>Une erreur dans un livret ne s'efface jamais au correcteur : on la barre d'un trait qui laisse lire le texte d'origine, on écrit la correction, on date et on signe.</p>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Le dossier concerne un quadriplace d'aéroclub, après une visite de 100 heures à 3 210 heures cellule. Le compte rendu matériel contient deux défauts signalés par les pilotes : « Trim de profondeur dur en fin de course à piquer » et « Pneu droit usé ». Les documents sont résumés ci-dessous.</p>\n<table>\n<thead><tr><th>Document</th><th>Contenu relevé</th></tr></thead>\n<tbody>\n<tr><td>Carte n° 1 : visite 100 h</td><td>Liste d'inspection du constructeur, révision indiquée, toutes les lignes cochées et signées par le mécanicien A ; ligne « compression des cylindres » cochée « RAS » sans valeur</td></tr>\n<tr><td>Carte n° 2 : trim de profondeur</td><td>« Câble de trim retendu, tension réglée, butées vérifiées. » Signature mécanicien A. Aucune valeur de tension, aucun numéro de tensiomètre, pas de seconde signature. Référence : « manuel de maintenance »</td></tr>\n<tr><td>Carte n° 3 : pneu droit</td><td>Pneu remplacé, référence du pneu indiquée, certificat de conformité joint ; boulons de demi-jantes serrés au couple « selon manuel » ; clé dynamométrique n° 07 ; pression 30 psi ; signature mécanicien B</td></tr>\n<tr><td>Carte n° 4 : vidange</td><td>Huile de la spécification prévue, numéro de lot, filtre neuf avec certificat ; filtre déposé découpé : « quelques particules non magnétiques brillantes »</td></tr>\n<tr><td>CRS</td><td>« Visite 100 h effectuée, avion apte au vol », date, signature du mécanicien A ; pas de référence de licence ni d'autorisation ; aucune mention des défauts corrigés</td></tr>\n</tbody>\n</table>\n<p>Information complémentaire : l'étiquette d'étalonnage de la clé n° 07 indique une échéance dépassée de deux semaines.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>Fil conducteur.</strong> Les deux défauts du compte rendu matériel ont une carte (n° 2 et n° 3) : le fil est assuré, mais le compte rendu matériel lui-même doit porter l'action corrective en face de chaque défaut, avec la référence des cartes.</p>\n<p><strong>Écarts relevés et actions :</strong></p>\n<table>\n<thead><tr><th>Écart</th><th>Risque</th><th>Action</th></tr></thead>\n<tbody>\n<tr><td>Carte 1 : compression « RAS » sans valeur</td><td>Impossible de suivre l'évolution des cylindres ; pas de preuve du résultat</td><td>Reporter les valeurs mesurées par cylindre et la valeur de l'orifice étalon ; si elles n'ont pas été relevées, refaire l'essai</td></tr>\n<tr><td>Carte 2 : intervention sur une commande de vol sans inspection indépendante</td><td>Erreur de montage ou d'inversion non détectée ; tâche critique</td><td>Inspection indépendante par une seconde personne habilitée avant remise en service</td></tr>\n<tr><td>Carte 2 : pas de valeur de tension, pas de tensiomètre, référence vague</td><td>Réglage non vérifiable ; tension peut-être hors plage</td><td>Indiquer le chapitre et la révision, la température ambiante, la tension mesurée, le numéro du tensiomètre</td></tr>\n<tr><td>Carte 3 : clé dynamométrique hors validité d'étalonnage</td><td>Couple réel inconnu ; risque de rupture ou de desserrage des boulons de jante</td><td>Refaire le serrage avec une clé valide, ouvrir un rapport de non-conformité sur l'outillage, rechercher les autres travaux faits avec cette clé</td></tr>\n<tr><td>Carte 3 : couple « selon manuel » sans valeur</td><td>Traçabilité incomplète</td><td>Inscrire la valeur de couple appliquée et la référence du manuel</td></tr>\n<tr><td>Carte 4 : particules non magnétiques brillantes</td><td>Usure possible d'une pièce en aluminium ou en bronze (piston, palier, bague)</td><td>Comparer aux critères du motoriste, envisager une analyse d'huile et un contrôle rapproché ; ne pas se contenter de les noter</td></tr>\n<tr><td>CRS : pas de référence d'autorisation, pas de défauts corrigés, données non citées</td><td>Certificat non conforme ; signataire non identifiable</td><td>Établir un CRS complet par un personnel autorisé, après correction de tous les écarts</td></tr>\n</tbody>\n</table>\n<p><strong>Conclusion.</strong> En l'état, l'avion ne peut pas être remis en service : l'inspection indépendante des commandes de vol manque, un serrage critique a été fait avec un outil non valide et le certificat est incomplet. Après les actions correctives, les livrets de l'avion et du moteur seront mis à jour (visite 100 h à 3 210 h, remplacement du pneu, vidange) et la prochaine échéance de visite reportée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le mécanicien qui a réalisé une tâche critique ne peut pas être son propre inspecteur indépendant. Une signature de la même personne dans les deux cases n'a pas de valeur, même si elle est habilitée.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant la remise de l'avion au client, le responsable relit le dossier complet. Cette relecture finale, appelée parfois « revue de dossier », est l'une des dernières défenses contre l'oubli : elle s'appuie sur une liste de vérification identique à la méthode ci-dessus.</div>\n"
      }
     ],
     "points_cles": [
      "Le dossier relie défaut signalé, ordre de travail, cartes, pièces, CRS et livrets.",
      "Une carte de travail mentionne données et révision, résultats chiffrés, pièces, outillage, signatures.",
      "« RAS » ne remplace pas une valeur quand une mesure est demandée.",
      "Toute intervention sur commandes de vol ou moteur exige une inspection indépendante par une autre personne.",
      "Un outil hors validité d'étalonnage rend la mesure nulle et déclenche une non-conformité.",
      "Le CRS cite les travaux, les données, la date et l'identification du signataire autorisé.",
      "Chaque écart est présenté avec le document concerné, le risque et l'action corrective.",
      "Un avion n'est pas remis en service tant que des écarts touchant la navigabilité subsistent."
     ],
     "lexique": [
      {
       "terme": "Dossier de travaux",
       "def": "Ensemble des documents produits lors d'une intervention, de la demande à la remise en service."
      },
      {
       "terme": "Ordre de travail",
       "def": "Document qui définit les travaux commandés par le client à l'organisme."
      },
      {
       "terme": "Carte de travail",
       "def": "Document décrivant une tâche et recueillant résultats, pièces, outillage et signatures."
      },
      {
       "terme": "Inspection indépendante",
       "def": "Contrôle d'une tâche critique par une personne différente de l'exécutant."
      },
      {
       "terme": "Étalonnage",
       "def": "Comparaison périodique d'un instrument à une référence, avec échéance de validité."
      },
      {
       "terme": "Livret",
       "def": "Registre permanent de l'avion, du moteur ou de l'hélice récapitulant les travaux."
      },
      {
       "terme": "Revue de dossier",
       "def": "Relecture finale des documents avant remise en service."
      },
      {
       "terme": "Rapport de non-conformité",
       "def": "Document qui enregistre un écart et déclenche son analyse et son traitement."
      }
     ]
    }
   ]
  }
 ]
};
