/* Polymates — Bac pro Technicien du bâtiment : organisation et réalisation du gros œuvre — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-gros-oeuvre"] = {
 "id": "bp-gros-oeuvre",
 "nom": "Technicien du bâtiment : organisation et réalisation du gros œuvre",
 "icone": "🎓",
 "couleur": "#c8a07a",
 "intro": "Le bac pro Technicien du bâtiment : organisation et réalisation du gros œuvre forme des professionnels capables de réaliser fondations, maçonneries, ouvrages en béton armé et éléments préfabriqués, puis d'encadrer une petite équipe : maçon, coffreur-bancheur, chef d'équipe, et à terme chef de chantier. Ce cours couvre les savoirs de première et de terminale, en approfondissant le tronc commun de seconde. Il comprend deux blocs : un cours théorique (cadre de l'acte de construire, mécanique et matériaux, techniques de réalisation, préparation et conduite du chantier) et un bloc d'analyse de documents qui montre comment exploiter plans, CCTP, plannings et fiches produits tels qu'ils sont fournis aux épreuves écrites.",
 "parties": [
  {
   "titre": "Partie 1 — Cadre de l'acte de construire et performances de l'ouvrage",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bgo-cadre-juridique",
     "titre": "Marchés, autorisations et responsabilités du constructeur",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Distinguer marché public et marché privé, et repérer les pièces contractuelles qui engagent l'entreprise de gros œuvre",
      "Situer les démarches administratives avant, pendant et après le chantier (permis, déclarations, DT-DICT)",
      "Expliquer le rôle de la réception et le point de départ des garanties légales",
      "Relier une malfaçon de gros œuvre à la garantie et à l'assurance concernées",
      "Identifier les qualifications et les obligations liées à la sous-traitance"
     ],
     "sections": [
      {
       "titre": "Le marché de travaux : un contrat et ses pièces",
       "contenu": "<p>Une entreprise de gros œuvre ne travaille jamais « sur parole » : elle exécute un <strong>marché de travaux</strong>, c'est-à-dire un contrat par lequel elle s'engage à réaliser un ouvrage défini, dans un délai et pour un prix, au profit d'un maître d'ouvrage. On distingue deux grandes familles.</p>\n<ul>\n<li>Le <strong>marché public</strong> est passé par une personne publique (État, commune, département, hôpital, bailleur social public…). Il est soumis au <strong>Code de la commande publique</strong> : publicité, mise en concurrence, égalité de traitement des candidats. Le document de référence pour les clauses administratives est souvent le <strong>CCAG Travaux</strong> (cahier des clauses administratives générales).</li>\n<li>Le <strong>marché privé</strong> est passé par un particulier, une entreprise ou une société de promotion immobilière. Les parties sont plus libres, mais se réfèrent souvent à la norme <strong>NF P 03-001</strong>, qui joue pour le privé un rôle comparable au CCAG.</li>\n</ul>\n<p>Le marché est composé de <strong>pièces contractuelles</strong> classées par ordre de priorité : en cas de contradiction entre deux pièces, c'est la pièce la mieux classée qui l'emporte. L'ordre habituel est le suivant.</p>\n<table>\n<thead><tr><th>Pièce</th><th>Contenu</th><th>Intérêt pour le chef d'équipe</th></tr></thead>\n<tbody>\n<tr><td>Acte d'engagement (AE)</td><td>Identité des parties, montant, délai global</td><td>Connaître le délai contractuel</td></tr>\n<tr><td>CCAP (cahier des clauses administratives particulières)</td><td>Pénalités de retard, modalités de paiement, retenue de garantie, réception</td><td>Mesurer les conséquences d'un retard</td></tr>\n<tr><td>CCTP (cahier des clauses techniques particulières)</td><td>Description technique des ouvrages, matériaux, normes et DTU à respecter</td><td>Savoir ce qu'il faut réaliser et comment</td></tr>\n<tr><td>Plans et pièces graphiques</td><td>Plans d'architecte, plans de structure</td><td>Dimensions et positions des ouvrages</td></tr>\n<tr><td>DPGF ou bordereau des prix</td><td>Quantités et prix unitaires</td><td>Quantités prévues, base des situations de travaux</td></tr>\n</tbody>\n</table>\n<p>Un marché peut être à <strong>prix global et forfaitaire</strong> (le prix couvre l'ouvrage entier, même si les quantités réelles diffèrent un peu) ou à <strong>prix unitaires</strong> (on paie les quantités réellement exécutées, multipliées par les prix du bordereau). Cette différence est importante pour l'équipe : dans un marché forfaitaire, une erreur de quantité est à la charge de l'entreprise ; dans un marché à prix unitaires, il faut <strong>mesurer contradictoirement</strong> ce qui a été fait.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le CCTP dit ce qu'il faut construire, le CCAP dit dans quelles conditions administratives et financières ; tout travail non prévu doit faire l'objet d'un ordre de service ou d'un avenant écrit avant d'être réalisé.</div>"
      },
      {
       "titre": "Les autorisations et déclarations administratives",
       "contenu": "<p>Avant que la première pelle ne creuse, plusieurs démarches ont été faites, la plupart par le maître d'ouvrage, certaines par l'entreprise.</p>\n<h4>Côté maître d'ouvrage</h4>\n<ul>\n<li>Le <strong>permis de construire</strong> (ou la déclaration préalable pour les petits projets) est délivré par la mairie au titre du <strong>Code de l'urbanisme</strong>. Il doit être affiché sur le terrain, sur un <strong>panneau de chantier</strong> visible de la voie publique, pendant toute la durée des travaux.</li>\n<li>La <strong>déclaration d'ouverture de chantier (DOC)</strong> informe la mairie du démarrage des travaux.</li>\n<li>À la fin, la <strong>déclaration attestant l'achèvement et la conformité des travaux (DAACT)</strong> est déposée ; pour les bâtiments neufs, elle s'accompagne d'attestations, notamment celle de prise en compte de la réglementation environnementale et, selon les cas, de l'accessibilité et des règles parasismiques.</li>\n<li>Le maître d'ouvrage adresse la <strong>déclaration de projet de travaux (DT)</strong> aux exploitants de réseaux enterrés ou aériens, après consultation du <strong>guichet unique</strong> national des réseaux.</li>\n</ul>\n<h4>Côté entreprise</h4>\n<ul>\n<li>L'entreprise qui exécute adresse la <strong>déclaration d'intention de commencement de travaux (DICT)</strong> aux mêmes exploitants. Leurs réponses (récépissés) indiquent la position des réseaux, leur classe de précision et les recommandations à respecter. Le personnel qui encadre ou réalise des travaux à proximité des réseaux doit détenir une <strong>AIPR</strong> (autorisation d'intervention à proximité des réseaux).</li>\n<li>Pour l'occupation du domaine public (benne sur trottoir, emprise de grue sur la voirie, échafaudage sur le trottoir), une <strong>autorisation de voirie</strong> ou un <strong>arrêté de circulation</strong> est demandé à la commune ou au gestionnaire de la voie.</li>\n<li>Pour les chantiers importants, une <strong>déclaration préalable</strong> est adressée à l'inspection du travail et à la caisse régionale d'assurance maladie par le maître d'ouvrage ; l'entreprise, elle, remet son <strong>PPSPS</strong> (plan particulier de sécurité et de protection de la santé) lorsque le chantier est soumis à coordination.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> commencer à terrasser sans avoir reçu et lu les récépissés de DICT est une faute grave. Un câble électrique ou une conduite de gaz arrachés peuvent tuer ; l'entreprise engage alors sa responsabilité pénale. Si les récépissés manquent ou si un réseau découvert ne figure pas sur les plans, on arrête et on prévient la hiérarchie.</div>"
      },
      {
       "titre": "La réception : un acte juridique décisif",
       "contenu": "<p>La <strong>réception</strong> est l'acte par lequel le maître d'ouvrage déclare accepter l'ouvrage, avec ou sans réserves (article 1792-6 du Code civil). Elle est généralement préparée par les <strong>OPR</strong> (opérations préalables à la réception) menées par le maître d'œuvre en présence des entreprises.</p>\n<p>La réception a trois effets majeurs :</p>\n<ol>\n<li>elle <strong>transfère la garde</strong> de l'ouvrage au maître d'ouvrage : à partir de cette date, l'entreprise n'est plus responsable des dégradations ordinaires (vol, vandalisme) ;</li>\n<li>elle <strong>fait partir les délais des garanties légales</strong> ;</li>\n<li>elle permet de solder financièrement le marché, sous réserve de la <strong>retenue de garantie</strong> (une part du prix, plafonnée par la loi à 5 %, conservée jusqu'à la levée des réserves, ou remplacée par une caution bancaire).</li>\n</ol>\n<p>Les <strong>réserves</strong> sont les défauts constatés lors de la réception : fissure d'un enduit, seuil hors tolérance, tache sur un béton apparent. Elles sont inscrites au <strong>procès-verbal de réception</strong>, avec un délai pour les lever. Un défaut visible non réservé à la réception est en principe considéré comme accepté.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le chef de chantier de gros œuvre participe souvent aux OPR. Il prépare la visite en réalisant lui-même un tour de contrôle quelques jours avant : nettoyage des réservations, ragréage des nids de cailloux, vérification des cotes de seuils. Chaque réserve évitée, c'est une intervention de reprise en moins, souvent coûteuse une fois les autres corps d'état passés.</div>"
      },
      {
       "titre": "Les garanties légales des constructeurs",
       "contenu": "<p>Le Code civil (articles 1792 et suivants) institue trois garanties qui pèsent sur les <strong>constructeurs</strong> (entreprises, architectes, bureaux d'études liés au maître d'ouvrage par un contrat de louage d'ouvrage). Elles sont d'ordre public : un contrat ne peut pas les supprimer.</p>\n<table>\n<thead><tr><th>Garantie</th><th>Durée après réception</th><th>Ce qu'elle couvre</th><th>Exemple en gros œuvre</th></tr></thead>\n<tbody>\n<tr><td>Garantie de parfait achèvement</td><td>1 an</td><td>Tous les désordres signalés à la réception (réserves) ou notifiés dans l'année</td><td>Fissure d'enduit apparue au 6e mois</td></tr>\n<tr><td>Garantie de bon fonctionnement (biennale)</td><td>2 ans minimum</td><td>Éléments d'équipement dissociables de l'ouvrage</td><td>Rarement le gros œuvre ; concerne plutôt les équipements (volets, robinetterie)</td></tr>\n<tr><td>Garantie décennale</td><td>10 ans</td><td>Dommages qui compromettent la <strong>solidité</strong> de l'ouvrage ou le rendent <strong>impropre à sa destination</strong></td><td>Tassement de fondation fissurant les murs, infiltrations massives par un mur enterré, effondrement d'un balcon</td></tr>\n</tbody>\n</table>\n<p>La garantie décennale repose sur une <strong>présomption de responsabilité</strong> : le maître d'ouvrage n'a pas à prouver une faute de l'entreprise, il suffit que le dommage relève de la garantie. L'entreprise ne s'exonère qu'en prouvant une <strong>cause étrangère</strong> (force majeure, fait d'un tiers, faute du maître d'ouvrage).</p>\n<p>Deux assurances accompagnent ce dispositif :</p>\n<ul>\n<li>l'<strong>assurance de responsabilité décennale</strong>, obligatoire pour toute entreprise de construction, qui doit pouvoir présenter son attestation avant l'ouverture du chantier ;</li>\n<li>l'<strong>assurance dommages-ouvrage</strong>, obligatoire pour le maître d'ouvrage, qui préfinance rapidement les réparations relevant de la décennale, puis se retourne contre les constructeurs responsables et leurs assureurs.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour rattacher un désordre à une garantie, posez trois questions dans l'ordre. 1) Le désordre est-il apparu avant la réception ? Si oui, c'est la responsabilité contractuelle de l'entreprise, à reprendre avant réception. 2) Sinon, combien de temps après ? Moins d'un an : parfait achèvement, quel qu'il soit. 3) Le désordre touche-t-il la solidité ou rend-il le bâtiment inutilisable pour son usage ? Si oui et dans les 10 ans : décennale. Exemple : 3 ans après réception, l'eau entre dans le sous-sol par un voile mal traité ; le local devient inutilisable comme cave : garantie décennale.</div>"
      },
      {
       "titre": "Qualifications, sous-traitance et responsabilités du personnel",
       "contenu": "<p>Pour prouver ses compétences aux maîtres d'ouvrage, une entreprise peut obtenir des <strong>qualifications professionnelles</strong> délivrées par un organisme indépendant, comme <strong>Qualibat</strong> dans le bâtiment. Une qualification indique un domaine (maçonnerie et béton armé, par exemple) et un niveau de technicité ; certaines mentions, comme <strong>RGE</strong> (reconnu garant de l'environnement), conditionnent les aides publiques à la rénovation énergétique pour le client.</p>\n<p>La <strong>sous-traitance</strong> est encadrée par la <strong>loi du 31 décembre 1975</strong>. L'entreprise principale doit faire <strong>accepter</strong> chaque sous-traitant par le maître d'ouvrage et faire agréer ses conditions de paiement. Dans les marchés publics, le sous-traitant accepté peut bénéficier du <strong>paiement direct</strong> par le maître d'ouvrage au-delà d'un certain montant. Un sous-traitant non déclaré expose l'entreprise principale à des sanctions, et un chef d'équipe qui voit arriver sur son chantier une équipe inconnue doit en informer son conducteur de travaux.</p>\n<p>Sur le chantier, la responsabilité ne s'arrête pas à l'entreprise : elle concerne aussi les personnes.</p>\n<ul>\n<li>La <strong>responsabilité civile</strong> oblige à réparer un dommage causé à autrui (voisin dont le mur est fissuré par un terrassement). Elle est en général prise en charge par l'assurance de l'entreprise.</li>\n<li>La <strong>responsabilité pénale</strong> sanctionne une infraction (blessures involontaires, mise en danger d'autrui, non-respect des règles de sécurité). Elle est personnelle : un chef d'équipe titulaire d'une <strong>délégation de pouvoir</strong> en matière de sécurité peut être poursuivi si un accident résulte d'un manquement qu'il aurait dû empêcher.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une délégation de pouvoir n'est valable que si le délégataire a la compétence, l'autorité et les moyens nécessaires. Le chef d'équipe qui l'accepte doit pouvoir arrêter un poste dangereux et exiger le matériel de protection.</div>"
      },
      {
       "titre": "Le suivi administratif du chantier au quotidien",
       "contenu": "<p>Pendant les travaux, l'entreprise produit et reçoit de nombreux documents qui ont une valeur juridique. Le chef d'équipe ou de chantier en est souvent le premier rédacteur.</p>\n<ul>\n<li>L'<strong>ordre de service (OS)</strong> est un document écrit, signé par le maître d'œuvre ou le maître d'ouvrage, qui notifie une décision : date de démarrage, arrêt de chantier, travaux supplémentaires. Un travail supplémentaire exécuté sans OS risque de ne jamais être payé.</li>\n<li>Le <strong>compte rendu de réunion de chantier</strong>, rédigé par le maître d'œuvre, fixe les décisions et les délais. Les entreprises doivent le lire et contester par écrit toute erreur, sinon elles sont réputées l'avoir accepté.</li>\n<li>Le <strong>journal de chantier</strong> ou <strong>rapport journalier</strong> de l'entreprise consigne les effectifs, les intempéries, les livraisons, les incidents, les visites. Il constitue une preuve en cas de litige sur un retard.</li>\n<li>Les <strong>situations de travaux</strong> sont les demandes de paiement mensuelles, établies à partir de l'avancement réel ; elles s'appuient sur les quantités relevées sur le chantier.</li>\n<li>Les <strong>constats contradictoires</strong> sont rédigés à plusieurs entreprises ou avec le maître d'œuvre lorsqu'un problème est découvert : support non conforme, réseau non signalé, dégradation par un autre corps d'état.</li>\n</ul>\n<p>Enfin, les <strong>intempéries</strong> (gel, pluie persistante, vent fort) peuvent justifier un arrêt de chantier indemnisé pour les salariés par la caisse des congés intempéries du BTP, et parfois une prolongation de délai si le marché le prévoit. Il faut pour cela les consigner jour par jour.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une modification demandée oralement par l'architecte lors d'une visite (déplacer une baie, ajouter une réservation) doit être confirmée par écrit avant exécution. En cas de désordre ultérieur, l'entreprise qui ne peut pas prouver la demande portera seule la responsabilité de l'écart avec les plans.</div>"
      }
     ],
     "points_cles": [
      "Le marché de travaux est un contrat ; ses pièces sont hiérarchisées (AE, CCAP, CCTP, plans, DPGF).",
      "Marché public : Code de la commande publique et CCAG Travaux ; marché privé : souvent norme NF P 03-001.",
      "Le maître d'ouvrage dépose permis, DOC, DAACT et DT ; l'entreprise adresse la DICT et doit lire les récépissés avant de terrasser.",
      "La réception transfère la garde de l'ouvrage et fait courir les garanties ; les réserves sont inscrites au procès-verbal.",
      "Parfait achèvement 1 an, bon fonctionnement 2 ans, décennale 10 ans pour la solidité et l'impropriété à destination.",
      "Assurance décennale obligatoire pour l'entreprise ; assurance dommages-ouvrage obligatoire pour le maître d'ouvrage.",
      "La sous-traitance doit être déclarée et acceptée (loi de 1975).",
      "Tout travail modificatif ou supplémentaire doit être couvert par un écrit (ordre de service, avenant)."
     ],
     "lexique": [
      {
       "terme": "Marché à prix global et forfaitaire",
       "def": "Contrat dont le prix couvre l'ouvrage entier, indépendamment des petites variations de quantités."
      },
      {
       "terme": "CCAP",
       "def": "Cahier des clauses administratives particulières : délais, pénalités, paiements, réception."
      },
      {
       "terme": "DICT",
       "def": "Déclaration d'intention de commencement de travaux adressée par l'exécutant aux exploitants de réseaux."
      },
      {
       "terme": "AIPR",
       "def": "Autorisation d'intervention à proximité des réseaux, exigée des personnes qui encadrent ou exécutent ces travaux."
      },
      {
       "terme": "Réception",
       "def": "Acte par lequel le maître d'ouvrage accepte l'ouvrage, avec ou sans réserves ; point de départ des garanties."
      },
      {
       "terme": "Réserve",
       "def": "Défaut constaté et inscrit au procès-verbal de réception, que l'entreprise doit reprendre."
      },
      {
       "terme": "Garantie décennale",
       "def": "Responsabilité de 10 ans des constructeurs pour les dommages touchant la solidité ou rendant l'ouvrage impropre à sa destination."
      },
      {
       "terme": "Dommages-ouvrage",
       "def": "Assurance souscrite par le maître d'ouvrage qui préfinance les réparations de nature décennale."
      },
      {
       "terme": "Retenue de garantie",
       "def": "Part du prix (5 % au plus) conservée jusqu'à la levée des réserves."
      },
      {
       "terme": "Ordre de service",
       "def": "Document écrit par lequel le maître d'œuvre ou d'ouvrage notifie une décision à l'entreprise."
      },
      {
       "terme": "Délégation de pouvoir",
       "def": "Transfert à un salarié compétent, doté de l'autorité et des moyens, d'une partie des responsabilités du chef d'entreprise."
      }
     ]
    },
    {
     "id": "bgo-confort-performance",
     "titre": "Confort et performances de l'enveloppe : thermique, acoustique, étanchéité, accessibilité",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Calculer le coefficient de transmission surfacique U d'une paroi composée de plusieurs couches",
      "Repérer les ponts thermiques propres au gros œuvre et les solutions pour les traiter",
      "Expliquer les principes de l'isolation acoustique (loi de masse, désolidarisation)",
      "Identifier les dispositions de gros œuvre qui assurent l'étanchéité à l'eau et à l'air",
      "Appliquer les principales cotes d'accessibilité dans les ouvrages réalisés par le gros œuvre"
     ],
     "sections": [
      {
       "titre": "Le gros œuvre, premier responsable des performances",
       "contenu": "<p>On pense souvent que le confort d'un logement dépend du chauffagiste ou du plaquiste. En réalité, une grande partie des performances se joue dès le gros œuvre : l'épaisseur et la nature des murs, la continuité des isolants au droit des planchers, la qualité des liaisons avec les menuiseries, la planéité des seuils. Une erreur à ce stade est presque impossible à corriger ensuite.</p>\n<p>Les bâtiments neufs sont soumis à la <strong>réglementation environnementale RE2020</strong>, applicable aux logements depuis 2022 puis progressivement aux autres bâtiments. Elle fixe des exigences sur trois points : la sobriété énergétique (besoin bioclimatique, indicateur <strong>Bbio</strong>), la consommation d'énergie et l'impact carbone (analyse du cycle de vie des matériaux et de l'énergie), le confort d'été (indicateur de degrés-heures d'inconfort). Le gros œuvre, gros consommateur de béton et d'acier, pèse lourd dans l'impact carbone, ce qui pousse à des bétons bas carbone et à des systèmes mixtes (béton et bois, béton et matériaux biosourcés).</p>\n<p>Par ailleurs, l'<strong>attestation de fin de travaux</strong> au titre de la RE2020 exige un test d'étanchéité à l'air mesuré : un défaut de calfeutrement laissé par le gros œuvre peut faire échouer la livraison.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la performance d'un bâtiment est une chaîne : une seule maille faible (pont thermique, fuite d'air, liaison rigide qui transmet le bruit) suffit à dégrader l'ensemble.</div>"
      },
      {
       "titre": "Calculer la performance thermique d'une paroi",
       "contenu": "<p>Chaque couche d'une paroi oppose une <strong>résistance thermique</strong> R = e / λ, avec e l'épaisseur en mètres et λ (lambda) la <strong>conductivité thermique</strong> du matériau en W/(m·K). Les résistances des couches successives s'additionnent. Il faut ajouter les <strong>résistances superficielles</strong> intérieure R<sub>si</sub> et extérieure R<sub>se</sub>, qui traduisent les échanges entre la paroi et l'air ; pour un mur vertical, on retient couramment R<sub>si</sub> = 0,13 et R<sub>se</sub> = 0,04 m²·K/W.</p>\n<p>Le <strong>coefficient de transmission surfacique</strong> U, en W/(m²·K), est l'inverse de la résistance totale : U = 1 / R<sub>T</sub>. Plus U est petit, meilleure est la paroi.</p>\n<table>\n<thead><tr><th>Matériau</th><th>λ en W/(m·K), ordre de grandeur</th></tr></thead>\n<tbody>\n<tr><td>Béton armé</td><td>2,3</td></tr>\n<tr><td>Mortier, enduit ciment</td><td>1,0 à 1,3</td></tr>\n<tr><td>Polystyrène expansé (PSE)</td><td>0,030 à 0,038</td></tr>\n<tr><td>Laine minérale</td><td>0,030 à 0,040</td></tr>\n<tr><td>Polyuréthane (PU)</td><td>0,022 à 0,026</td></tr>\n<tr><td>Fibre de bois</td><td>0,036 à 0,045</td></tr>\n</tbody>\n</table>\n<p>Pour les blocs creux en béton, en terre cuite ou en béton cellulaire, on n'utilise pas un λ mais directement la <strong>résistance thermique certifiée</strong> donnée par le fabricant pour l'épaisseur considérée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mur en béton armé de 20 cm, isolé par l'extérieur avec 14 cm de PSE (λ = 0,032), enduit mince négligé. 1) R béton = 0,20 / 2,3 ≈ 0,087 m²·K/W. 2) R isolant = 0,14 / 0,032 = 4,375 m²·K/W. 3) R superficielles = 0,13 + 0,04 = 0,17. 4) R<sub>T</sub> = 0,087 + 4,375 + 0,17 ≈ 4,63 m²·K/W. 5) U = 1 / 4,63 ≈ 0,22 W/(m²·K). On constate que le béton ne pèse presque rien : c'est l'isolant qui fait la performance, le béton apporte la résistance mécanique et l'inertie thermique.</div>\n<p>L'<strong>inertie thermique</strong> est la capacité d'une paroi lourde à stocker la chaleur et à la restituer lentement. Un mur en béton placé du côté intérieur de l'isolant (isolation par l'extérieur) amortit les surchauffes d'été : c'est un atout du gros œuvre pour le confort d'été exigé par la RE2020.</p>"
      },
      {
       "titre": "Les ponts thermiques du gros œuvre",
       "contenu": "<p>Un <strong>pont thermique</strong> est une zone où l'isolant est interrompu ou affaibli et où la chaleur s'échappe plus vite. On le caractérise par un coefficient linéique ψ (psi), en W/(m·K), pour une liaison sur une longueur donnée. Outre les pertes d'énergie, il refroidit localement la paroi intérieure, ce qui provoque <strong>condensation</strong>, moisissures et traces noires dans les angles.</p>\n<table>\n<thead><tr><th>Liaison</th><th>Cause</th><th>Solutions courantes</th></tr></thead>\n<tbody>\n<tr><td>Plancher intermédiaire / mur extérieur (isolation par l'intérieur)</td><td>La dalle traverse l'isolant</td><td>Isolation par l'extérieur, ou <strong>rupteurs de ponts thermiques</strong> posés entre dalle et voile</td></tr>\n<tr><td>Balcon en console</td><td>Dalle continue de l'intérieur vers l'extérieur</td><td>Rupteur structurel porteur, balcon rapporté sur poteaux</td></tr>\n<tr><td>Plancher bas / mur de soubassement</td><td>Contact avec le sol froid</td><td>Isolant en sous-face ou en périphérie (relevé), isolation du soubassement</td></tr>\n<tr><td>Tableaux, linteaux et appuis de baies</td><td>Retour d'isolant oublié</td><td>Retours d'isolant en tableau, appuis à rupture thermique</td></tr>\n<tr><td>Acrotère</td><td>Béton continu au-dessus de la toiture</td><td>Isolation enveloppante de l'acrotère</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un rupteur de ponts thermiques posé à l'envers, décalé ou percé pour faire passer une gaine perd son efficacité et parfois sa fonction structurelle. Le sens de pose, la position des aciers et le calepinage indiqués sur le plan du fabricant sont impératifs.</div>"
      },
      {
       "titre": "Étanchéité à l'eau, à l'humidité et à l'air",
       "contenu": "<p>Le gros œuvre protège le bâtiment contre l'eau sous plusieurs formes.</p>\n<ul>\n<li>Les <strong>remontées capillaires</strong> : l'eau du sol monte dans les maçonneries poreuses. On les bloque par une <strong>coupure de capillarité</strong> (arase étanche en mortier hydrofugé ou membrane) placée en pied de mur, au-dessus du niveau du sol fini extérieur.</li>\n<li>L'eau des terres contre les murs enterrés : on applique un <strong>enduit d'imperméabilisation</strong> ou un revêtement bitumineux, protégé par une <strong>nappe à excroissances</strong> et complété par un <strong>drain</strong> périphérique entouré de gravier et de géotextile, qui évacue l'eau vers un exutoire.</li>\n<li>La pluie battante sur les façades : les enduits extérieurs, choisis selon l'exposition, assurent l'imperméabilité tout en laissant la paroi respirer.</li>\n<li>Les points singuliers : appuis de baies avec <strong>pente</strong> et <strong>goutte d'eau</strong>, seuils avec <strong>rejingot</strong>, couvertines sur acrotères.</li>\n</ul>\n<p>L'<strong>étanchéité à l'air</strong> limite les infiltrations d'air non maîtrisées. La RE2020 impose une mesure de la perméabilité à l'air, exprimée par l'indicateur Q<sub>4Pa-surf</sub> en m³/(h·m²), avec une valeur maximale de 0,6 pour les maisons individuelles et de 1,0 pour les logements collectifs. Le béton coulé est naturellement étanche à l'air ; les maçonneries de blocs creux ne le sont pas sans enduit ou doublage soigné. Les fuites typiques laissées par le gros œuvre sont les traversées de réseaux non rebouchées, les jonctions entre maçonnerie et dalle, et les tableaux de baies non dressés.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur les opérations de logements, les chefs de chantier organisent un <strong>test d'étanchéité intermédiaire</strong> avant la pose des doublages. L'équipe de gros œuvre est alors appelée pour reboucher au mortier les réservations inutilisées et les trous de banches : un travail rapide à ce stade, très coûteux après les finitions.</div>"
      },
      {
       "titre": "Le confort acoustique",
       "contenu": "<p>Le bruit est une vibration de l'air caractérisée par son niveau en <strong>décibels (dB)</strong> et sa fréquence. On distingue deux types de bruits dans un bâtiment.</p>\n<ul>\n<li>Les <strong>bruits aériens</strong> (voix, télévision, circulation) se propagent dans l'air puis font vibrer les parois. Leur isolation se mesure par l'<strong>isolement acoustique</strong> D<sub>nT,A</sub> : plus il est élevé, mieux c'est. Entre deux logements, la réglementation demande au moins 53 dB.</li>\n<li>Les <strong>bruits d'impact</strong> (pas, chute d'objets) sont créés directement dans la structure. Ils se mesurent par le niveau de bruit de choc L'<sub>nT,w</sub> : plus il est faible, mieux c'est ; il ne doit pas dépasser 58 dB dans les pièces principales d'un logement.</li>\n</ul>\n<p>Deux principes guident les choix du gros œuvre :</p>\n<ol>\n<li>La <strong>loi de masse</strong> : plus une paroi simple est lourde, mieux elle isole des bruits aériens. En théorie, doubler la masse surfacique gagne environ 6 dB ; c'est pourquoi les murs séparatifs entre logements sont souvent en béton plein de 18 à 20 cm.</li>\n<li>La <strong>désolidarisation</strong> : pour les bruits d'impact, il faut interrompre la transmission solide. On coule une <strong>chape flottante</strong> sur une sous-couche résiliente, en veillant à ne laisser aucun contact rigide avec les murs (bande périphérique).</li>\n</ol>\n<p>Les <strong>transmissions latérales</strong> (par les planchers ou les façades qui relient les deux locaux) et les fuites (gaine non calfeutrée, boîtier électrique dos à dos) peuvent ruiner l'isolement d'un mur pourtant épais.</p>"
      },
      {
       "titre": "L'accessibilité dans les ouvrages de gros œuvre",
       "contenu": "<p>Les bâtiments d'habitation collectifs neufs et les établissements recevant du public doivent être <strong>accessibles aux personnes handicapées</strong>, quel que soit leur handicap. Plusieurs exigences concernent directement le gros œuvre, car elles touchent aux niveaux, aux pentes et aux largeurs.</p>\n<table>\n<thead><tr><th>Élément</th><th>Exigences usuelles (à vérifier dans les textes applicables au projet)</th></tr></thead>\n<tbody>\n<tr><td>Rampe d'accès</td><td>Pente de 5 % au plus ; tolérée jusqu'à 8 % sur 2 m et 10 % sur 0,50 m ; palier de repos en haut et en bas</td></tr>\n<tr><td>Ressaut (marche isolée)</td><td>2 cm au plus, 4 cm s'il est chanfreiné à 33 %</td></tr>\n<tr><td>Portes</td><td>Largeur de passage utile d'au moins 0,83 m pour une porte de 0,90 m</td></tr>\n<tr><td>Cheminements</td><td>Largeur minimale de 1,20 m, dévers limité à 2 %</td></tr>\n<tr><td>Escaliers</td><td>Hauteur et giron de marches réguliers, mains courantes, nez de marche contrastés</td></tr>\n</tbody>\n</table>\n<p>Pour le gros œuvre, l'enjeu est la <strong>précision des niveaux</strong> : un seuil de porte d'entrée réalisé 3 cm trop haut par rapport au palier extérieur crée un ressaut non réglementaire. Il faut donc reporter les niveaux finis (épaisseur des chapes et revêtements comprise) dès le coulage des dalles et des seuils, et tenir compte des <strong>réservations</strong> pour les siphons de douches de plain-pied.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier une rampe. Une rampe doit racheter une dénivelée de 0,40 m. Longueur horizontale minimale à 5 % : 0,40 / 0,05 = 8,00 m, sans compter les paliers. Si le plan ne prévoit que 6,00 m, la pente serait de 0,40 / 6,00 ≈ 6,7 %, hors des tolérances (au-delà de 5 % sur plus de 2 m) : le problème doit être signalé avant de couler.</div>"
      }
     ],
     "points_cles": [
      "R = e / λ ; les résistances des couches et les résistances superficielles s'additionnent ; U = 1 / R total.",
      "Dans une paroi isolée, c'est l'isolant qui donne la performance ; le béton apporte résistance et inertie.",
      "Les ponts thermiques (planchers, balcons, appuis, acrotères) se traitent par isolation extérieure, rupteurs ou retours d'isolant.",
      "La RE2020 impose une mesure d'étanchéité à l'air : 0,6 m³/(h·m²) en maison individuelle, 1,0 en collectif.",
      "Murs enterrés : imperméabilisation, nappe de protection et drain périphérique ; pieds de murs : coupure de capillarité.",
      "Bruits aériens : loi de masse ; bruits d'impact : désolidarisation par chape flottante.",
      "Accessibilité : rampes à 5 %, ressauts de 2 cm, passages de portes de 0,83 m, d'où l'importance des niveaux finis."
     ],
     "lexique": [
      {
       "terme": "Conductivité thermique λ",
       "def": "Aptitude d'un matériau à conduire la chaleur, en W/(m·K) ; plus elle est faible, plus le matériau est isolant."
      },
      {
       "terme": "Coefficient U",
       "def": "Flux de chaleur traversant 1 m² de paroi pour 1 K d'écart de température, en W/(m²·K)."
      },
      {
       "terme": "Pont thermique",
       "def": "Zone de l'enveloppe où l'isolation est interrompue ou affaiblie, provoquant pertes et risque de condensation."
      },
      {
       "terme": "Rupteur de ponts thermiques",
       "def": "Élément isolant, souvent porteur, placé à la jonction d'un plancher et d'un mur extérieur."
      },
      {
       "terme": "Inertie thermique",
       "def": "Capacité d'un matériau lourd à stocker et restituer lentement la chaleur."
      },
      {
       "terme": "Coupure de capillarité",
       "def": "Couche étanche placée en pied de mur pour empêcher l'eau du sol de remonter dans la maçonnerie."
      },
      {
       "terme": "Loi de masse",
       "def": "Principe selon lequel une paroi simple isole d'autant mieux des bruits aériens qu'elle est lourde."
      },
      {
       "terme": "Chape flottante",
       "def": "Chape coulée sur une sous-couche résiliente, sans contact rigide avec la structure, pour réduire les bruits d'impact."
      },
      {
       "terme": "Ressaut",
       "def": "Petite différence de niveau isolée sur un cheminement, limitée pour l'accessibilité."
      },
      {
       "terme": "Rejingot",
       "def": "Relief sur un seuil ou un appui qui empêche l'eau de passer sous la menuiserie."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Approche scientifique et technique des ouvrages",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bgo-charges-descente",
     "titre": "Actions sur les ouvrages et descente de charges",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Classer les actions qui s'exercent sur un bâtiment : permanentes, d'exploitation, climatiques, accidentelles",
      "Calculer le poids propre d'un élément à partir de son volume et de son poids volumique",
      "Déterminer la surface d'influence reprise par une poutre, un poteau ou un mur",
      "Conduire une descente de charges simple jusqu'à la fondation",
      "Appliquer les combinaisons ELU et ELS et dimensionner la largeur d'une semelle filante"
     ],
     "sections": [
      {
       "titre": "Pourquoi étudier les charges quand on réalise",
       "contenu": "<p>Le dimensionnement des structures est le travail du <strong>bureau d'études structure</strong>. Pourtant, le technicien de gros œuvre doit comprendre le cheminement des charges : c'est lui qui décide où stocker une palette de blocs sur un plancher frais, combien d'étais placer sous une dalle en cours de coulage, ou s'il peut supprimer un étai pour faire passer une brouette. Il doit aussi savoir lire une note de calcul simplifiée et repérer une incohérence sur un plan.</p>\n<p>Les charges s'expriment en <strong>newtons (N)</strong> et le plus souvent en <strong>kilonewtons (kN)</strong>. On retient l'équivalence pratique : une masse de 100 kg exerce un poids d'environ 1 kN (avec g ≈ 10 N/kg, la valeur exacte de g étant 9,81 N/kg). Selon la forme de l'élément, une charge s'exprime :</p>\n<ul>\n<li>en kN pour une <strong>charge ponctuelle</strong> (réaction d'un poteau, d'une poutre) ;</li>\n<li>en kN/m pour une <strong>charge linéique</strong> (mur posé sur une poutre, charge sur une semelle filante) ;</li>\n<li>en kN/m² pour une <strong>charge surfacique</strong> (plancher, toiture) ;</li>\n<li>en kN/m³ pour un <strong>poids volumique</strong> (matériau).</li>\n</ul>\n<p>Le cadre normatif européen est celui des <strong>Eurocodes</strong> : l'Eurocode 0 (bases de calcul), l'Eurocode 1 (actions sur les structures), l'Eurocode 2 (béton), l'Eurocode 6 (maçonnerie), l'Eurocode 7 (géotechnique) et l'Eurocode 8 (séismes), chacun complété par une annexe nationale française.</p>"
      },
      {
       "titre": "Les différentes actions",
       "contenu": "<table>\n<thead><tr><th>Famille</th><th>Symbole</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>Actions permanentes</td><td>G</td><td>Poids propre de la structure (dalles, voiles, poutres), cloisons, chapes, revêtements, isolants, enduits, couverture</td></tr>\n<tr><td>Actions variables d'exploitation</td><td>Q</td><td>Personnes, mobilier, stockage, véhicules ; dépendent de l'usage du local</td></tr>\n<tr><td>Actions climatiques</td><td>S, W</td><td>Neige (S), vent (W) ; dépendent de la région et de l'altitude</td></tr>\n<tr><td>Actions accidentelles</td><td>A</td><td>Séisme, choc de véhicule, explosion</td></tr>\n</tbody>\n</table>\n<p>Pour les charges permanentes, on utilise les <strong>poids volumiques</strong> des matériaux : béton armé 25 kN/m³, béton non armé environ 24 kN/m³, mortier et chape de l'ordre de 20 à 22 kN/m³, maçonnerie de blocs creux selon le fabricant (souvent exprimée directement en kN/m² de mur).</p>\n<p>Pour les charges d'exploitation, l'Eurocode 1 donne des valeurs selon les catégories d'usage. Ordres de grandeur couramment retenus en France : 1,5 kN/m² pour les planchers de logements, 2,5 kN/m² pour les bureaux, 2,5 kN/m² pour les escaliers et balcons de logements, davantage pour les lieux de réunion et les commerces. Ces valeurs figurent toujours dans les hypothèses de la note de calcul du projet, qui fait foi.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une palette de 60 blocs de 20 cm pèse environ 1 200 kg, soit 12 kN, posée sur environ 1 m². Cela représente 12 kN/m² concentrés, huit fois la charge d'exploitation d'un plancher de logement. Stocker une telle palette sur une dalle jeune ou sur une travée de prédalles non encore clavetée peut provoquer une rupture.</div>"
      },
      {
       "titre": "Surfaces d'influence et cheminement des charges",
       "contenu": "<p>La <strong>descente de charges</strong> consiste à suivre le chemin des efforts depuis la toiture jusqu'au sol : toiture, planchers, poutres, murs et poteaux, fondations, sol d'assise. Chaque élément porteur reprend la part de charge correspondant à sa <strong>surface d'influence</strong> (ou zone de chargement).</p>\n<p>Pour une dalle portant dans une seule direction entre deux appuis parallèles (dalle sur deux voiles, plancher à poutrelles), on admet que chaque appui reprend la moitié de la portée. Par exemple, un plancher à poutrelles de 4,80 m de portée posé sur deux murs transmet à chaque mur une bande de 2,40 m de large par mètre de mur.</p>\n<p>Pour un poteau intérieur d'une trame régulière, la surface d'influence est le rectangle limité par les mi-portées autour du poteau. Avec des portées de 5,00 m dans un sens et 6,00 m dans l'autre, un poteau central reprend 5,00 × 6,00 = 30 m² par niveau. Un poteau de rive ne reprend que la moitié, un poteau d'angle le quart (en première approche, hors effets de continuité qui majorent légèrement les appuis intermédiaires).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la charge d'un élément porteur s'obtient en multipliant la charge surfacique du plancher (kN/m²) par la largeur ou la surface qu'il reprend, puis en ajoutant son propre poids et ce qu'il porte au-dessus.</div>"
      },
      {
       "titre": "Combinaisons d'actions : ELU et ELS",
       "contenu": "<p>Les ingénieurs ne vérifient pas un ouvrage avec les charges « brutes » : ils les pondèrent pour se placer en sécurité. On distingue deux familles de vérifications, appelées <strong>états limites</strong>.</p>\n<ul>\n<li>L'<strong>état limite ultime (ELU)</strong> concerne la sécurité : rupture, renversement, perte d'équilibre. La combinaison fondamentale la plus simple, pour une charge permanente et une seule charge d'exploitation, est : <strong>1,35 G + 1,5 Q</strong>.</li>\n<li>L'<strong>état limite de service (ELS)</strong> concerne le bon usage : flèches, fissuration, vibrations. La combinaison caractéristique est : <strong>G + Q</strong>.</li>\n</ul>\n<p>Les coefficients 1,35 et 1,5 sont des <strong>coefficients partiels de sécurité</strong> : ils couvrent les incertitudes sur les charges réelles. Les charges variables, plus incertaines, ont un coefficient plus élevé. Lorsque plusieurs actions variables agissent ensemble (exploitation et neige, par exemple), l'Eurocode 0 introduit des coefficients de combinaison réduisant les actions d'accompagnement ; ces cas relèvent du bureau d'études.</p>\n<p>Le sol de fondation est caractérisé par une <strong>contrainte admissible</strong> ou une capacité portante issue de l'<strong>étude géotechnique</strong> (mission G2 en phase de conception). Pour une semelle filante de largeur B portant une charge linéique N, la condition simplifiée est : N / B inférieur ou égal à la contrainte de calcul du sol, d'où B supérieur ou égal à N / q.</p>"
      },
      {
       "titre": "Exemple complet de descente de charges",
       "contenu": "<p>On étudie le mur de façade d'une maison à un étage. Hypothèses simplifiées :</p>\n<ul>\n<li>toiture-terrasse en dalle béton : G = 7,0 kN/m² (dalle, isolant, étanchéité, protection), Q = 1,0 kN/m² (terrasse inaccessible, entretien), neige négligée pour l'exemple ;</li>\n<li>plancher d'étage en dalle pleine de 20 cm : poids propre 0,20 × 25 = 5,0 kN/m², chape et revêtement 1,5 kN/m², cloisons 0,5 kN/m², soit G = 7,0 kN/m², et Q = 1,5 kN/m² ;</li>\n<li>portée des dalles perpendiculaire à la façade : 4,60 m, donc largeur reprise par le mur de façade : 2,30 m ;</li>\n<li>mur en blocs béton de 20 cm enduits : 2,8 kN/m² de mur, hauteur 2,70 m par niveau, deux niveaux ;</li>\n<li>contrainte de calcul du sol à l'ELU : 0,25 MPa = 250 kN/m².</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul par mètre de mur. 1) Toiture : G = 7,0 × 2,30 = 16,1 kN/m ; Q = 1,0 × 2,30 = 2,3 kN/m. 2) Plancher d'étage : G = 7,0 × 2,30 = 16,1 kN/m ; Q = 1,5 × 2,30 = 3,45 kN/m. 3) Murs : 2 niveaux × 2,70 m × 2,8 = 15,1 kN/m (G). 4) Semelle supposée 0,50 × 0,30 m : 0,50 × 0,30 × 25 = 3,75 kN/m (G). 5) Totaux : G = 16,1 + 16,1 + 15,1 + 3,75 ≈ 51,1 kN/m ; Q = 2,3 + 3,45 = 5,75 kN/m. 6) ELU : 1,35 × 51,1 + 1,5 × 5,75 ≈ 69,0 + 8,6 = 77,6 kN/m. 7) Largeur nécessaire : B = 77,6 / 250 ≈ 0,31 m. La semelle de 0,50 m convient largement ; en pratique, la largeur est aussi gouvernée par des minimums constructifs et par les recommandations de l'étude de sol.</div>\n<p>On remarque que les charges permanentes représentent ici près de 90 % du total : dans les bâtiments en béton, le poids propre domine. C'est pour cette raison qu'un ajout non prévu (chape plus épaisse pour rattraper un défaut de niveau, par exemple) n'est jamais anodin.</p>"
      },
      {
       "titre": "Les charges en phase chantier",
       "contenu": "<p>Une structure est souvent plus sollicitée pendant sa construction que pendant sa vie : le béton n'a pas encore atteint sa résistance, les éléments ne sont pas encore solidaires, et des charges importantes s'appliquent localement.</p>\n<ul>\n<li>Le <strong>béton frais</strong> d'une dalle de 20 cm pèse 5 kN/m² ; il faut y ajouter le poids du coffrage, des ouvriers et du matériel, et un effet dynamique lors du déversement. Les étais et le coffrage sont dimensionnés pour cette phase.</li>\n<li>Les étages supérieurs coulés sur des dalles encore jeunes nécessitent souvent un <strong>étaiement de reprise</strong> sur plusieurs niveaux, dont le plan est fourni par la méthode ou le bureau d'études de l'entreprise.</li>\n<li>Les stockages de matériaux (palettes, paquets d'armatures, banches) doivent être répartis et placés près des appuis, jamais au milieu d'une travée.</li>\n<li>Le vent agit sur les banches et les prémurs non encore stabilisés : ils doivent être tenus par leurs <strong>étais tire-pousse</strong> dès leur mise en place.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les entreprises de gros œuvre établissent un <strong>plan d'étaiement</strong> et un <strong>plan de rotation des coffrages</strong> par niveau. Le chef d'équipe vérifie avant chaque coulage que le nombre et l'espacement des étais correspondent au plan, que les têtes sont bien calées et que le sol d'appui (terre-plein, dalle inférieure) est capable de reprendre les charges, au besoin avec des madriers de répartition.</div>"
      }
     ],
     "points_cles": [
      "Une masse de 100 kg exerce un poids d'environ 1 kN.",
      "G : actions permanentes ; Q : actions d'exploitation ; S et W : neige et vent ; A : accidentelles.",
      "Poids volumique du béton armé : 25 kN/m³.",
      "Une dalle portant entre deux appuis transmet à chacun la moitié de sa portée.",
      "ELU (sécurité) : 1,35 G + 1,5 Q ; ELS (usage) : G + Q.",
      "Largeur de semelle filante : B supérieur ou égal à N / q, avec N la charge linéique et q la contrainte de calcul du sol.",
      "Dans un bâtiment en béton, le poids propre représente l'essentiel des charges.",
      "En phase chantier, le béton jeune, le béton frais et les stockages imposent étaiement et répartition des charges."
     ],
     "lexique": [
      {
       "terme": "Charge permanente G",
       "def": "Action qui s'exerce en permanence avec une intensité constante : poids propre, revêtements, cloisons."
      },
      {
       "terme": "Charge d'exploitation Q",
       "def": "Action variable liée à l'usage du local : personnes, mobilier, stockage."
      },
      {
       "terme": "Poids volumique",
       "def": "Poids d'un mètre cube de matériau, en kN/m³."
      },
      {
       "terme": "Surface d'influence",
       "def": "Partie de plancher dont la charge est reprise par un élément porteur donné."
      },
      {
       "terme": "Descente de charges",
       "def": "Calcul des charges cumulées sur chaque élément porteur, de la toiture jusqu'aux fondations."
      },
      {
       "terme": "État limite ultime (ELU)",
       "def": "Situation au-delà de laquelle l'ouvrage risque la ruine ; combinaison 1,35 G + 1,5 Q."
      },
      {
       "terme": "État limite de service (ELS)",
       "def": "Situation au-delà de laquelle l'usage normal n'est plus assuré (flèche, fissures) ; combinaison G + Q."
      },
      {
       "terme": "Contrainte admissible du sol",
       "def": "Pression maximale que le sol d'assise peut supporter, issue de l'étude géotechnique."
      },
      {
       "terme": "Étaiement de reprise",
       "def": "Étais maintenus sous des planchers jeunes pour transmettre les charges des niveaux coulés au-dessus."
      },
      {
       "terme": "Eurocodes",
       "def": "Normes européennes de conception et de calcul des structures, complétées par des annexes nationales."
      }
     ]
    },
    {
     "id": "bgo-equilibre-statique",
     "titre": "Équilibre des éléments porteurs : appuis, réactions, flexion",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Modéliser une poutre ou une dalle par un schéma mécanique avec ses appuis et ses charges",
      "Appliquer le principe fondamental de la statique pour calculer des réactions d'appui",
      "Calculer l'effort tranchant et le moment fléchissant maximaux dans les cas usuels",
      "Repérer les zones tendues et comprimées d'un élément fléchi, et en déduire la position des armatures",
      "Comprendre le fonctionnement d'une console et les risques liés au décoffrage prématuré"
     ],
     "sections": [
      {
       "titre": "Modéliser un élément de structure",
       "contenu": "<p>Pour étudier une poutre, une dalle ou un linteau, on le remplace par un <strong>modèle mécanique</strong> : une ligne qui représente son axe, des symboles pour ses appuis, des flèches pour les charges. Cette simplification permet de calculer les efforts internes et de comprendre où l'élément travaille le plus.</p>\n<table>\n<thead><tr><th>Type d'appui</th><th>Ce qu'il empêche</th><th>Inconnues de réaction</th><th>Exemple réel</th></tr></thead>\n<tbody>\n<tr><td>Appui simple (rouleau)</td><td>Le déplacement vertical</td><td>1 (force verticale)</td><td>Poutrelle posée sur un mur avec simple appui</td></tr>\n<tr><td>Articulation</td><td>Les déplacements vertical et horizontal</td><td>2 (deux forces)</td><td>Poutre reposant sur un poteau, sans continuité d'aciers</td></tr>\n<tr><td>Encastrement</td><td>Les déplacements et la rotation</td><td>3 (deux forces et un moment)</td><td>Balcon en console ancré dans la dalle, poteau ancré dans sa semelle</td></tr>\n</tbody>\n</table>\n<p>Une poutre posée sur deux appuis (un appui simple et une articulation) est dite <strong>isostatique</strong> : les trois équations de la statique suffisent à calculer ses réactions. Une poutre continue sur trois appuis ou plus est <strong>hyperstatique</strong> ; son calcul demande des méthodes plus élaborées, mais les principes restent les mêmes.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le modèle n'est valable que si la réalisation lui correspond. Une poutre calculée comme encastrée mais réalisée sans les aciers de continuité dans l'appui fonctionnera comme une poutre sur appuis simples, avec un moment en travée plus fort que prévu.</div>"
      },
      {
       "titre": "Le principe fondamental de la statique",
       "contenu": "<p>Un solide au repos est en <strong>équilibre</strong>. Le <strong>principe fondamental de la statique (PFS)</strong> traduit cet équilibre dans le plan par trois équations :</p>\n<ol>\n<li>la somme des forces horizontales est nulle ;</li>\n<li>la somme des forces verticales est nulle ;</li>\n<li>la somme des <strong>moments</strong> par rapport à n'importe quel point est nulle.</li>\n</ol>\n<p>Le <strong>moment</strong> d'une force par rapport à un point est égal à l'intensité de la force multipliée par sa distance perpendiculaire au point (son <strong>bras de levier</strong>) ; il s'exprime en kN·m. Par convention, on choisit un sens de rotation positif (par exemple le sens horaire) et on s'y tient.</p>\n<p>Pour une <strong>charge répartie</strong>, on la remplace dans les équations par une force unique égale à la charge totale (charge linéique × longueur), appliquée au milieu de la zone chargée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> poutre de 6,00 m sur deux appuis A (à gauche) et B (à droite), portant une charge ponctuelle de 30 kN à 2,00 m de A. 1) Moments par rapport à A : R<sub>B</sub> × 6,00 − 30 × 2,00 = 0, d'où R<sub>B</sub> = 60 / 6 = 10 kN. 2) Forces verticales : R<sub>A</sub> + R<sub>B</sub> − 30 = 0, d'où R<sub>A</sub> = 20 kN. 3) Vérification par rapport à B : 30 × 4,00 − R<sub>A</sub> × 6,00 = 120 − 120 = 0. L'appui le plus proche de la charge reprend la plus grande part : c'est logique et cela permet de contrôler son résultat.</div>"
      },
      {
       "titre": "Efforts internes : effort tranchant et moment fléchissant",
       "contenu": "<p>À l'intérieur d'une poutre chargée, chaque section transmet des efforts d'une partie à l'autre. On s'intéresse surtout à deux d'entre eux.</p>\n<ul>\n<li>L'<strong>effort tranchant</strong> V (en kN) tend à faire glisser une partie de la poutre par rapport à l'autre, comme une paire de ciseaux. Il est maximal près des appuis.</li>\n<li>Le <strong>moment fléchissant</strong> M (en kN·m) tend à courber la poutre. Il est en général maximal en travée, là où l'effort tranchant s'annule.</li>\n</ul>\n<p>Pour les cas les plus fréquents, des formules connues donnent directement les valeurs maximales.</p>\n<table>\n<thead><tr><th>Cas</th><th>Réactions</th><th>Effort tranchant maximal</th><th>Moment maximal</th></tr></thead>\n<tbody>\n<tr><td>Poutre sur deux appuis, charge répartie p (kN/m), portée L</td><td>pL / 2 à chaque appui</td><td>pL / 2 (aux appuis)</td><td>pL² / 8 (à mi-portée)</td></tr>\n<tr><td>Poutre sur deux appuis, charge ponctuelle P au milieu</td><td>P / 2 à chaque appui</td><td>P / 2</td><td>PL / 4 (à mi-portée)</td></tr>\n<tr><td>Console de longueur L, charge répartie p</td><td>pL et moment pL² / 2 à l'encastrement</td><td>pL (à l'encastrement)</td><td>pL² / 2 (à l'encastrement)</td></tr>\n</tbody>\n</table>\n<p>Exemple : un linteau de 2,40 m de portée porte 20 kN/m (ELU). M max = 20 × 2,40² / 8 = 14,4 kN·m ; V max = 20 × 2,40 / 2 = 24 kN. Si la portée double, le moment est multiplié par quatre : c'est pourquoi les grandes portées demandent des sections et des armatures nettement plus fortes.</p>"
      },
      {
       "titre": "Zones tendues, zones comprimées et place des aciers",
       "contenu": "<p>Sous l'effet du moment fléchissant, une poutre se courbe : une face s'allonge (elle est <strong>tendue</strong>), l'autre se raccourcit (elle est <strong>comprimée</strong>). Entre les deux, une ligne ne change pas de longueur : c'est l'<strong>axe neutre</strong>.</p>\n<ul>\n<li>Pour une poutre ou une dalle <strong>sur deux appuis</strong> chargée vers le bas, la fibre inférieure est tendue en travée : les aciers principaux sont placés <strong>en partie basse</strong>.</li>\n<li>Pour une <strong>console</strong> (balcon, auvent), la fibre supérieure est tendue à l'encastrement : les aciers principaux sont placés <strong>en partie haute</strong> et doivent être ancrés loin dans la dalle intérieure.</li>\n<li>Pour une poutre <strong>continue</strong>, la partie basse est tendue en travée et la partie haute est tendue au-dessus des appuis intermédiaires : on trouve des <strong>chapeaux</strong> (aciers hauts) sur les appuis.</li>\n</ul>\n<p>L'effort tranchant, maximal près des appuis, provoque des fissures inclinées à environ 45°. Les <strong>cadres</strong>, <strong>étriers</strong> et <strong>épingles</strong> les reprennent : c'est pourquoi ils sont plus serrés près des appuis qu'à mi-portée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> inverser les nappes d'un balcon (aciers principaux placés en bas) est une erreur grave qui conduit à l'effondrement au décoffrage. Avant de couler une console, on vérifie que les aciers principaux sont en haut, que leur ancrage dans la dalle intérieure respecte la longueur prévue et que les chaises qui les maintiennent ne s'écrasent pas sous les pas.</div>"
      },
      {
       "titre": "Contraintes et résistance des matériaux",
       "contenu": "<p>Un effort réparti sur une surface crée une <strong>contrainte</strong>, notée σ (sigma), égale à la force divisée par la surface. L'unité est le pascal ; on utilise surtout le <strong>mégapascal</strong> : 1 MPa = 1 N/mm² = 1 000 kN/m².</p>\n<p>Les matériaux du gros œuvre ont des comportements très différents :</p>\n<table>\n<thead><tr><th>Matériau</th><th>Compression</th><th>Traction</th></tr></thead>\n<tbody>\n<tr><td>Béton C25/30</td><td>Résistance caractéristique de 25 MPa (sur cylindre)</td><td>Environ 2,5 MPa, soit environ un dixième, et on la néglige dans les calculs courants</td></tr>\n<tr><td>Acier B500</td><td>Bonne</td><td>Limite d'élasticité caractéristique de 500 MPa</td></tr>\n<tr><td>Maçonnerie de blocs</td><td>Quelques MPa selon le bloc et le mortier</td><td>Quasi nulle</td></tr>\n</tbody>\n</table>\n<p>Exemple de contrainte : un poteau de 20 × 20 cm reçoit 400 kN. La surface vaut 200 × 200 = 40 000 mm² ; σ = 400 000 / 40 000 = 10 MPa. Un béton C25/30 supporte cette compression, avec les coefficients de sécurité appliqués par le calcul.</p>\n<p>Les pressions sur le sol s'expriment de la même façon : une semelle de 1,00 × 1,00 m sous un poteau de 300 kN transmet 300 kN/m², soit 0,30 MPa, à comparer à la capacité du sol.</p>"
      },
      {
       "titre": "Applications au chantier : décoffrage, ouvertures, reprises",
       "contenu": "<p>Les notions de statique éclairent de nombreuses décisions de chantier.</p>\n<ul>\n<li><strong>Décoffrage et désétaiement</strong> : retirer les étais d'une dalle revient à lui appliquer brusquement son poids propre. Si le béton n'a pas atteint la résistance nécessaire, la flèche sera excessive, voire la dalle fissurera. Les délais de décoffrage sont fixés par l'entreprise en fonction du béton, de la température et de la portée ; les consoles et grandes portées demandent plus de temps.</li>\n<li><strong>Percements</strong> : une réservation oubliée percée après coup dans une poutre, au mauvais endroit, peut couper des aciers tendus ou réduire la zone comprimée. Toute ouverture non prévue dans un élément porteur doit être validée par le bureau d'études.</li>\n<li><strong>Création d'ouverture dans un mur porteur existant</strong> : avant de démolir, on reprend les charges par un étaiement provisoire (chevalements), puis on pose un linteau ou une poutre dimensionnée, avec des appuis suffisants à chaque extrémité.</li>\n<li><strong>Charges ponctuelles sur prédalles ou poutrelles</strong> : avant clavetage et durcissement de la dalle de compression, ces éléments ne travaillent que dans un sens et reposent sur les étais de chantier ; il faut respecter les entraxes d'étaiement du fabricant.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un chantier de bureaux, un compagnon souhaite enlever un étai sous une poutre de 7 m pour passer avec un chariot. Le chef d'équipe refuse : la poutre a été coulée cinq jours plus tôt et la note de méthode prévoit un désétaiement à 28 jours pour cette portée. Il fait déplacer le cheminement. Ce réflexe, fondé sur la compréhension du moment en travée, évite un accident et une reprise coûteuse.</div>"
      }
     ],
     "points_cles": [
      "Un appui simple a 1 inconnue, une articulation 2, un encastrement 3.",
      "PFS : somme des forces horizontales nulle, somme des forces verticales nulle, somme des moments nulle.",
      "Moment d'une force = force × bras de levier, en kN·m.",
      "Poutre sur deux appuis sous charge répartie : M max = pL²/8 à mi-portée, V max = pL/2 aux appuis.",
      "Console sous charge répartie : M max = pL²/2 à l'encastrement.",
      "Aciers principaux en bas en travée, en haut sur appuis intermédiaires et dans les consoles.",
      "Les cadres et étriers reprennent l'effort tranchant ; ils sont resserrés près des appuis.",
      "1 MPa = 1 N/mm² ; le béton résiste bien en compression et mal en traction."
     ],
     "lexique": [
      {
       "terme": "Isostatique",
       "def": "Se dit d'une structure dont les réactions se calculent avec les seules équations de la statique."
      },
      {
       "terme": "Encastrement",
       "def": "Liaison qui empêche tout déplacement et toute rotation de l'extrémité d'un élément."
      },
      {
       "terme": "Moment",
       "def": "Effet de rotation d'une force, égal à son intensité multipliée par son bras de levier, en kN·m."
      },
      {
       "terme": "Effort tranchant",
       "def": "Effort interne qui tend à faire glisser deux parties adjacentes d'une poutre, maximal près des appuis."
      },
      {
       "terme": "Moment fléchissant",
       "def": "Effort interne qui courbe la poutre, maximal en travée pour une poutre sur deux appuis."
      },
      {
       "terme": "Axe neutre",
       "def": "Ligne d'une section fléchie qui n'est ni tendue ni comprimée."
      },
      {
       "terme": "Console",
       "def": "Élément encastré à une extrémité et libre à l'autre, comme un balcon."
      },
      {
       "terme": "Chapeau",
       "def": "Acier placé en partie haute au-dessus d'un appui pour reprendre le moment négatif."
      },
      {
       "terme": "Contrainte",
       "def": "Effort rapporté à une surface, en MPa (N/mm²)."
      },
      {
       "terme": "Flèche",
       "def": "Déformation verticale d'un élément fléchi, mesurée au point le plus bas."
      }
     ]
    },
    {
     "id": "bgo-physico-chimie-beton",
     "titre": "Phénomènes physico-chimiques : prise, durcissement, retrait et cure",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Décrire l'hydratation du ciment, la prise et le durcissement, et leur dépendance à la température",
      "Expliquer l'influence du rapport eau/ciment sur la résistance et la porosité",
      "Distinguer les différentes formes de retrait et les moyens de les limiter",
      "Choisir des dispositions de bétonnage par temps froid et par temps chaud",
      "Mettre en œuvre une cure adaptée et justifier les joints dans les ouvrages"
     ],
     "sections": [
      {
       "titre": "De la poudre à la pierre : l'hydratation du ciment",
       "contenu": "<p>Le ciment est un <strong>liant hydraulique</strong> : il durcit en réagissant avec l'eau, et une fois durci il reste stable sous l'eau. Le <strong>clinker</strong>, constituant principal du ciment Portland, contient des silicates et des aluminates de calcium. Au contact de l'eau, ils forment des <strong>hydrates</strong>, surtout des silicates de calcium hydratés, qui s'enchevêtrent et collent les granulats entre eux. La réaction libère aussi de la <strong>chaux</strong> (portlandite), responsable du caractère très basique du béton.</p>\n<p>On distingue trois phases :</p>\n<ol>\n<li>la <strong>période dormante</strong>, de quelques dizaines de minutes à quelques heures, pendant laquelle le béton reste maniable : c'est le temps disponible pour transporter, couler et vibrer ;</li>\n<li>la <strong>prise</strong>, pendant laquelle le béton se raidit et perd sa plasticité : on ne peut plus le vibrer ni le reprendre ;</li>\n<li>le <strong>durcissement</strong>, qui se poursuit pendant des semaines et des mois. Par convention, la résistance de référence est celle à <strong>28 jours</strong>, mais un béton courant atteint souvent 60 à 70 % de cette valeur à 7 jours.</li>\n</ol>\n<p>L'hydratation est <strong>exothermique</strong> : elle dégage de la chaleur. Dans un élément massif (radier épais, grosse semelle), le cœur peut s'échauffer de plusieurs dizaines de degrés pendant que la surface se refroidit, ce qui crée des fissures. On utilise alors des ciments à faible chaleur d'hydratation et on protège les surfaces.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'eau sert d'abord à hydrater le ciment ; ce n'est pas en séchant que le béton durcit. Un béton qui sèche trop tôt arrête de durcir.</div>"
      },
      {
       "titre": "Le rapport eau/ciment, clé de la qualité",
       "contenu": "<p>Pour s'hydrater complètement, le ciment n'a besoin que d'environ 25 % de sa masse en eau. Pourtant, les bétons courants en contiennent davantage, pour être maniables. L'eau en excès s'évapore ensuite et laisse des <strong>pores capillaires</strong>.</p>\n<p>Le rapport <strong>E/C</strong> (masse d'eau efficace sur masse de ciment) est le paramètre qui pilote la qualité :</p>\n<table>\n<thead><tr><th>Quand E/C augmente</th><th>Conséquence</th></tr></thead>\n<tbody>\n<tr><td>Porosité</td><td>Augmente</td></tr>\n<tr><td>Résistance mécanique</td><td>Diminue</td></tr>\n<tr><td>Perméabilité à l'eau, au gaz carbonique, aux chlorures</td><td>Augmente, la durabilité baisse</td></tr>\n<tr><td>Retrait</td><td>Augmente</td></tr>\n<tr><td>Maniabilité</td><td>Augmente</td></tr>\n</tbody>\n</table>\n<p>Pour concilier maniabilité et faible E/C, les centrales utilisent des <strong>adjuvants</strong> normalisés (NF EN 934-2) : <strong>plastifiants</strong> et <strong>superplastifiants</strong> (réducteurs d'eau), <strong>accélérateurs</strong> et <strong>retardateurs</strong> de prise, <strong>entraîneurs d'air</strong> (qui créent de minuscules bulles améliorant la résistance au gel), <strong>hydrofuges</strong> de masse.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer l'effet d'un ajout d'eau. Un béton contient 350 kg de ciment et 175 L d'eau efficace par m³, soit E/C = 175 / 350 = 0,50. Sur chantier, on ajoute 20 L par m³ pour le fluidifier. Nouveau rapport : 195 / 350 ≈ 0,56. En première approche, on admet couramment que la résistance diminue d'environ 10 à 15 % pour une telle hausse ; la classe de résistance commandée n'est plus garantie et la classe d'exposition peut ne plus être respectée. La bonne solution est de commander un béton de consistance adaptée ou de faire ajouter un superplastifiant par le fournisseur.</div>"
      },
      {
       "titre": "Les retraits et leurs conséquences",
       "contenu": "<p>Le <strong>retrait</strong> est la diminution de volume du béton au cours du temps, en l'absence de charge. Comme le béton est retenu par ses appuis, ses armatures et le sol, ce raccourcissement empêché crée des tractions, donc des fissures.</p>\n<table>\n<thead><tr><th>Type de retrait</th><th>Moment</th><th>Cause</th><th>Prévention</th></tr></thead>\n<tbody>\n<tr><td>Retrait plastique</td><td>Dans les premières heures, avant la prise</td><td>Évaporation rapide de l'eau de surface (vent, soleil)</td><td>Protéger la surface dès la fin du coulage, éviter le coulage par vent sec</td></tr>\n<tr><td>Retrait thermique</td><td>Premiers jours</td><td>Refroidissement après l'échauffement d'hydratation</td><td>Ciment adapté, bétonnage par plots, protection thermique</td></tr>\n<tr><td>Retrait endogène</td><td>Premières semaines</td><td>Consommation de l'eau par l'hydratation</td><td>Formulation adaptée</td></tr>\n<tr><td>Retrait de dessiccation</td><td>Mois et années</td><td>Séchage progressif du béton</td><td>E/C faible, cure, joints de retrait</td></tr>\n</tbody>\n</table>\n<p>À ces retraits s'ajoutent les variations dimensionnelles dues à la <strong>température</strong> : un élément de 30 m de long subissant 30 °C d'écart varie d'environ 30 × 30 × 0,000 01 = 0,009 m, soit 9 mm. C'est pourquoi les bâtiments longs sont recoupés par des <strong>joints de dilatation</strong> qui traversent toute la structure hors fondations, et les dallages par des <strong>joints de retrait</strong> sciés ou préformés.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un joint de dilatation rempli de mortier, de gravats ou de bois oubliés ne joue plus son rôle. La structure se fissure alors ailleurs. Le joint doit être garni du matériau compressible prévu sur toute sa hauteur, et rester propre.</div>"
      },
      {
       "titre": "La cure du béton",
       "contenu": "<p>La <strong>cure</strong> regroupe les mesures qui maintiennent le béton jeune humide et à température favorable pour qu'il s'hydrate correctement, surtout en surface. Une surface mal curée devient poreuse, poussiéreuse, fissurée et moins durable : c'est justement la zone qui protège les aciers.</p>\n<p>Les procédés courants sont :</p>\n<ul>\n<li>le maintien dans le <strong>coffrage</strong>, qui protège les faces coffrées ;</li>\n<li>la pulvérisation d'un <strong>produit de cure</strong> qui forme un film limitant l'évaporation, sur les surfaces libres (dalles, dallages) ; il faut vérifier sa compatibilité avec le revêtement prévu ensuite (carrelage collé, peinture, étanchéité) ;</li>\n<li>le recouvrement par une <strong>bâche</strong> ou un géotextile maintenu humide ;</li>\n<li>l'<strong>arrosage</strong> régulier, en évitant l'eau très froide sur un béton chaud.</li>\n</ul>\n<p>La durée de cure dépend de la température, du ciment et de l'exposition ; la norme d'exécution NF EN 13670 la relie au développement de la résistance du béton en surface. En pratique, quelques jours suffisent par temps doux pour un béton intérieur courant ; il faut davantage par temps froid ou pour un ouvrage exposé.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un dallage de bâtiment industriel coulé en été, l'entreprise prévoit dans son mode opératoire la pulvérisation du produit de cure immédiatement après le talochage mécanique, puis le sciage des joints dans les 24 heures. Un oubli de cure se traduit dans les semaines suivantes par un faïençage de surface et des fissures hors joints, souvent réservées à la réception.</div>"
      },
      {
       "titre": "Bétonner par temps froid ou par temps chaud",
       "contenu": "<p>La vitesse d'hydratation dépend fortement de la température : elle ralentit nettement en dessous de 10 °C et devient très faible vers 0 °C. Un béton frais qui gèle avant d'avoir atteint une résistance suffisante (de l'ordre de 5 MPa) est endommagé de façon irréversible par l'expansion de l'eau qui se transforme en glace.</p>\n<h4>Par temps froid</h4>\n<ul>\n<li>consulter la météo et les températures prévues pour les jours suivant le coulage ;</li>\n<li>commander un béton adapté (ciment plus rapide, accélérateur de prise, béton livré chaud) ;</li>\n<li>ne jamais couler sur un support ou dans un coffrage gelé, ni contre des aciers givrés ;</li>\n<li>protéger le béton coulé par des bâches isolantes, des couvertures ou un chauffage d'enceinte ;</li>\n<li>allonger les délais de décoffrage et de désétaiement.</li>\n</ul>\n<h4>Par temps chaud et sec</h4>\n<ul>\n<li>couler tôt le matin, réduire les délais entre la centrale et la mise en place ;</li>\n<li>humidifier les coffrages et les supports absorbants ;</li>\n<li>utiliser si nécessaire un retardateur de prise prévu par le fournisseur ;</li>\n<li>protéger immédiatement les surfaces et renforcer la cure.</li>\n</ul>\n<p>La température du béton frais et la température ambiante au moment du coulage doivent être relevées et notées dans le rapport journalier : en cas de défaut, elles permettent d'en établir la cause.</p>"
      },
      {
       "titre": "Humidité, gel et eau dans les maçonneries",
       "contenu": "<p>Les matériaux poreux du gros œuvre (béton, mortier, blocs, briques, pierres) échangent de l'eau avec leur environnement. Trois phénomènes sont à connaître.</p>\n<ul>\n<li>La <strong>capillarité</strong> : l'eau monte dans les pores fins, d'autant plus haut que les pores sont fins. Elle explique les remontées en pied de mur et justifie les coupures de capillarité.</li>\n<li>La <strong>condensation</strong> : l'air chaud intérieur contient de la vapeur d'eau ; au contact d'une paroi froide, cette vapeur se condense. Elle se produit en surface (sur un pont thermique) ou dans l'épaisseur de la paroi si la vapeur traverse un isolant sans <strong>pare-vapeur</strong> côté chaud.</li>\n<li>Le <strong>gel</strong> : l'eau qui gèle augmente de volume d'environ 9 %. Un matériau gorgé d'eau subissant des cycles de gel et dégel se désagrège en surface (écaillage, éclatement). On choisit pour les parties exposées des matériaux et bétons de classe adaptée (XF pour le béton) et on évite les surfaces où l'eau stagne (pentes, gouttes d'eau).</li>\n</ul>\n<p>Les <strong>efflorescences</strong>, dépôts blancs sur les maçonneries et les bétons, sont des sels transportés par l'eau qui cristallisent en surface en séchant. Elles sont souvent sans gravité mais signalent une circulation d'eau qu'il faut rechercher.</p>\n<p>Enfin, les mortiers et bétons exposés à des eaux ou des sols agressifs (eaux séléniteuses riches en sulfates, eaux acides) demandent des ciments résistants : c'est le rôle de la classe d'exposition XA et des ciments dits <strong>PM</strong> (prise mer) ou <strong>ES</strong> (eaux sulfatées) en France.</p>"
      }
     ],
     "points_cles": [
      "Le ciment durcit par hydratation, une réaction chimique exothermique, et non par séchage.",
      "Résistance de référence à 28 jours ; environ 60 à 70 % atteints à 7 jours pour un béton courant.",
      "Plus le rapport E/C est élevé, plus le béton est poreux, moins il est résistant et durable.",
      "Les adjuvants (plastifiants, accélérateurs, retardateurs, entraîneurs d'air) adaptent le béton sans ajouter d'eau.",
      "Retraits plastique, thermique, endogène et de dessiccation provoquent des fissures si le béton est bridé.",
      "Les joints de dilatation et de retrait doivent rester libres et propres.",
      "La cure (coffrage, produit de cure, bâche humide, arrosage) protège la qualité du béton de surface.",
      "Par temps froid, ne pas couler sur support gelé et protéger le béton jusqu'à environ 5 MPa."
     ],
     "lexique": [
      {
       "terme": "Liant hydraulique",
       "def": "Liant qui durcit par réaction avec l'eau et reste stable sous l'eau."
      },
      {
       "terme": "Hydratation",
       "def": "Réaction chimique entre le ciment et l'eau qui forme les hydrates responsables du durcissement."
      },
      {
       "terme": "Prise",
       "def": "Moment où le béton perd sa plasticité et commence à se raidir."
      },
      {
       "terme": "Rapport E/C",
       "def": "Rapport entre la masse d'eau efficace et la masse de ciment d'un béton."
      },
      {
       "terme": "Adjuvant",
       "def": "Produit ajouté en faible quantité au béton pour modifier ses propriétés (maniabilité, prise, résistance au gel)."
      },
      {
       "terme": "Retrait",
       "def": "Diminution de volume du béton au cours du temps, source de fissures s'il est empêché."
      },
      {
       "terme": "Cure",
       "def": "Ensemble des protections qui maintiennent le béton jeune humide pour une hydratation complète."
      },
      {
       "terme": "Joint de dilatation",
       "def": "Coupure traversant la structure pour absorber les variations de longueur dues à la température."
      },
      {
       "terme": "Efflorescence",
       "def": "Dépôt blanc de sels cristallisés à la surface d'une maçonnerie ou d'un béton."
      },
      {
       "terme": "Condensation",
       "def": "Passage de la vapeur d'eau à l'état liquide au contact d'une surface froide."
      }
     ]
    },
    {
     "id": "bgo-beton-arme",
     "titre": "Le béton armé : principes et dispositions constructives",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Expliquer pourquoi l'association béton-acier fonctionne et ce qui la rend durable",
      "Interpréter la désignation d'un béton selon la norme NF EN 206/CN (classe de résistance, d'exposition, de consistance)",
      "Déterminer un enrobage et justifier son rôle",
      "Appliquer les règles d'ancrage, de recouvrement et de façonnage des armatures",
      "Calculer la masse d'acier d'un élément à partir de sa nomenclature"
     ],
     "sections": [
      {
       "titre": "Pourquoi associer béton et acier",
       "contenu": "<p>Le béton résiste bien à la compression mais très mal à la traction. Dès qu'une poutre fléchit, sa partie tendue fissure. L'idée du <strong>béton armé</strong> est de placer des barres d'acier là où le béton est tendu : l'acier reprend la traction, le béton reprend la compression et protège l'acier.</p>\n<p>Cette association fonctionne grâce à trois propriétés :</p>\n<ol>\n<li>l'<strong>adhérence</strong> entre l'acier et le béton, renforcée par les nervures des barres <strong>haute adhérence (HA)</strong>, qui permet aux deux matériaux de se déformer ensemble ;</li>\n<li>des <strong>coefficients de dilatation thermique</strong> très proches (environ 10 à 12 millionièmes par degré), qui évitent que les variations de température ne décollent l'acier ;</li>\n<li>la <strong>protection chimique</strong> de l'acier par le béton : la pâte de ciment est très basique (pH voisin de 13), ce qui empêche la corrosion tant que l'enrobage est sain.</li>\n</ol>\n<p>Le calcul du béton armé suit l'<strong>Eurocode 2</strong> (NF EN 1992-1-1 et son annexe nationale). La mise en œuvre des ouvrages courants est décrite dans le <strong>NF DTU 21</strong> (exécution des ouvrages en béton) et, pour l'exécution, dans la norme <strong>NF EN 13670</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le béton armé est un matériau composite. Sa solidité dépend autant de la position exacte des aciers et de la qualité de l'enrobage que du dosage du béton.</div>"
      },
      {
       "titre": "Désigner et commander un béton",
       "contenu": "<p>Les bétons sont spécifiés selon la norme <strong>NF EN 206/CN</strong>. Un <strong>béton à propriétés spécifiées (BPS)</strong> livré par une centrale de <strong>béton prêt à l'emploi (BPE)</strong> se désigne par plusieurs classes :</p>\n<table>\n<thead><tr><th>Classe</th><th>Exemple</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Résistance à la compression</td><td>C25/30</td><td>25 MPa sur cylindre et 30 MPa sur cube, valeurs caractéristiques à 28 jours</td></tr>\n<tr><td>Exposition</td><td>XC1, XC4, XF1, XA1…</td><td>Agressions de l'environnement : carbonatation (XC), gel (XF), chlorures (XD, XS), attaques chimiques (XA)</td></tr>\n<tr><td>Consistance</td><td>S3</td><td>Affaissement au cône d'Abrams de 100 à 150 mm</td></tr>\n<tr><td>Dimension maximale des granulats</td><td>D<sub>max</sub> 20</td><td>Plus gros granulat de 20 mm, à choisir selon l'espacement des aciers et l'enrobage</td></tr>\n<tr><td>Teneur en chlorures</td><td>Cl 0,40</td><td>Limite de chlorures admise pour le béton armé</td></tr>\n</tbody>\n</table>\n<p>Les classes de consistance par affaissement vont de S1 (10 à 40 mm, béton ferme) à S5 (220 mm et plus, béton très fluide). Les voiles fortement ferraillés et les poteaux étroits demandent un béton plus fluide (S4) ou un <strong>béton autoplaçant (BAP)</strong>, qui se met en place sans vibration.</p>\n<p>La classe d'exposition impose, selon la norme, une résistance minimale, un dosage minimal en liant et un rapport eau/liant maximal : c'est elle qui garantit la durabilité. Exemples : un voile intérieur sec relève de XC1 ; une façade exposée à la pluie de XC4 ; un ouvrage soumis au gel et aux sels de déverglaçage de XF2 à XF4.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ajouter de l'eau dans le camion toupie pour rendre le béton plus maniable est interdit hors des quantités prévues par le fournisseur et notées sur le bon de livraison. Chaque litre ajouté augmente le rapport eau/ciment, diminue la résistance et la durabilité, et fait perdre à l'entreprise la garantie de conformité du béton.</div>"
      },
      {
       "titre": "L'enrobage : protéger les aciers",
       "contenu": "<p>L'<strong>enrobage</strong> est la distance entre la surface d'une armature (y compris les cadres et étriers) et la paroi de béton la plus proche. Il remplit trois fonctions : protéger l'acier de la corrosion, assurer la transmission des efforts par adhérence, et retarder l'échauffement de l'acier en cas d'incendie.</p>\n<p>L'Eurocode 2 définit un <strong>enrobage minimal</strong> c<sub>min</sub> qui dépend de la classe d'exposition, de la classe structurale de l'ouvrage et du diamètre des barres. On lui ajoute une marge de tolérance d'exécution pour obtenir l'<strong>enrobage nominal</strong> c<sub>nom</sub>, celui qui figure sur les plans. Pour un bâtiment courant, les valeurs nominales sont de l'ordre de 2,5 à 3 cm à l'intérieur et de 3 à 4 cm en extérieur exposé, davantage en milieu agressif ou au contact du sol. Les plans de ferraillage donnent toujours la valeur à respecter.</p>\n<p>L'enrobage est obtenu par des <strong>cales d'enrobage</strong> (en béton, en fibre-ciment ou en plastique) fixées sur les aciers à intervalle régulier, et par des <strong>distanciers</strong> (chaises) pour la nappe supérieure des dalles.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler un enrobage avant coulage. 1) Lire sur le plan c<sub>nom</sub>, par exemple 30 mm. 2) Mesurer au mètre ou au réglet la distance entre le cadre (et non la barre principale) et la face du coffrage, en plusieurs points. 3) Vérifier la présence de cales tous les 50 cm à 1 m environ selon le diamètre et la rigidité de la cage. 4) En fond de poutre, appuyer sur la cage : elle ne doit pas descendre au contact du coffrage. 5) Consigner le contrôle sur la fiche d'autocontrôle avant d'autoriser le coulage.</div>"
      },
      {
       "titre": "Ancrages, recouvrements et façonnage",
       "contenu": "<p>Pour qu'une barre transmette son effort au béton, elle doit être prolongée sur une longueur suffisante : c'est la <strong>longueur d'ancrage</strong>. Lorsqu'elle est insuffisante, la barre glisse et l'élément se rompt brutalement. L'ancrage peut être <strong>droit</strong> ou réalisé avec un <strong>crochet</strong> ou un <strong>retour d'équerre</strong> qui le raccourcit.</p>\n<p>Quand une barre est trop courte (les barres sont livrées en longueurs de 12 m environ), on la prolonge par une autre en les faisant se chevaucher : c'est le <strong>recouvrement</strong>. Sa longueur est calculée selon l'Eurocode 2 ; les plans l'indiquent, souvent exprimée en multiple du diamètre Ø (l'ordre de grandeur de 40 à 60 Ø est fréquent). Les recouvrements sont <strong>décalés</strong> d'une barre à l'autre et placés de préférence dans les zones peu sollicitées.</p>\n<p>Le <strong>façonnage</strong> (cintrage) des aciers respecte un <strong>diamètre minimal de mandrin</strong> pour ne pas fissurer la barre : de l'ordre de 4 Ø pour les petits diamètres (16 mm et moins) et de 7 Ø au-delà, valeurs à confirmer selon le cas. Un acier façonné ne doit jamais être déplié puis replié à froid, ni chauffé au chalumeau.</p>\n<table>\n<thead><tr><th>Armature</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Barres longitudinales (filantes)</td><td>Reprendre la traction (ou la compression dans les poteaux)</td></tr>\n<tr><td>Cadres, étriers, épingles</td><td>Reprendre l'effort tranchant, maintenir les barres, empêcher le flambement des barres comprimées</td></tr>\n<tr><td>Chapeaux</td><td>Reprendre le moment négatif sur appuis</td></tr>\n<tr><td>Treillis soudés</td><td>Armer les dalles, dallages et voiles en nappes</td></tr>\n<tr><td>Aciers en attente</td><td>Assurer la continuité avec l'élément coulé ensuite (poteau sur semelle, voile sur dalle)</td></tr>\n<tr><td>Armatures de peau, renforts d'angle de baies</td><td>Limiter la fissuration</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Calculer une masse d'acier",
       "contenu": "<p>La masse linéique d'une barre d'acier se calcule à partir de sa section et de la masse volumique de l'acier (7 850 kg/m³). On retient le tableau suivant, utilisé dans toutes les nomenclatures.</p>\n<table>\n<thead><tr><th>Diamètre (mm)</th><th>6</th><th>8</th><th>10</th><th>12</th><th>14</th><th>16</th><th>20</th><th>25</th></tr></thead>\n<tbody>\n<tr><td>Masse linéique (kg/m)</td><td>0,222</td><td>0,395</td><td>0,617</td><td>0,888</td><td>1,208</td><td>1,578</td><td>2,466</td><td>3,853</td></tr>\n</tbody>\n</table>\n<p>Une formule pratique la retrouve : masse (kg/m) ≈ 0,00617 × Ø², avec Ø en mm.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> poutre de 5,00 m armée de 3 HA 14 en partie basse, 2 HA 10 en partie haute, et de 26 cadres HA 6 de 1,20 m de développé. 1) HA 14 : 3 × 5,00 = 15,00 m × 1,208 = 18,12 kg. 2) HA 10 : 2 × 5,00 = 10,00 m × 0,617 = 6,17 kg. 3) HA 6 : 26 × 1,20 = 31,20 m × 0,222 = 6,93 kg. 4) Total : 18,12 + 6,17 + 6,93 = 31,22 kg. 5) Ratio : si le volume de béton de la poutre est de 0,20 × 0,40 × 5,00 = 0,40 m³, le ratio vaut 31,22 / 0,40 ≈ 78 kg/m³, valeur plausible pour une poutre. Ce ratio permet de vérifier rapidement une commande ou un métré.</div>\n<p>Les ordres de grandeur de ratios d'armatures (en kg d'acier par m³ de béton) aident à repérer une erreur : environ 30 à 50 kg/m³ pour des semelles filantes, 60 à 100 pour des dalles et des poutres, 100 à 150 voire plus pour des poteaux fortement chargés. Ils varient beaucoup selon les projets et ne remplacent pas la nomenclature.</p>"
      },
      {
       "titre": "Fissuration et pathologies du béton armé",
       "contenu": "<p>Un béton armé fissure normalement dans ses zones tendues : des fissures très fines (quelques dixièmes de millimètre) sont admises et prises en compte par le calcul. Ce qui pose problème, ce sont les fissures trop ouvertes, qui laissent pénétrer l'eau et l'air jusqu'aux aciers.</p>\n<ul>\n<li>La <strong>carbonatation</strong> : le gaz carbonique de l'air pénètre lentement dans le béton et fait baisser son pH. Quand le front de carbonatation atteint les aciers, ceux-ci peuvent rouiller. La rouille occupe plus de volume que l'acier : elle fait éclater le béton d'enrobage (épaufrures, aciers apparents). Un enrobage insuffisant accélère fortement ce processus.</li>\n<li>Les <strong>chlorures</strong> (bord de mer, sels de déverglaçage) provoquent une corrosion localisée rapide, d'où les classes XS et XD.</li>\n<li>Les <strong>nids de cailloux</strong> (zones où la laitance a manqué) laissent des vides autour des aciers ; ils résultent d'une vibration insuffisante, d'un béton trop ferme ou d'un coffrage non étanche.</li>\n<li>Les fissures de <strong>retrait</strong> apparaissent sur les dalles et les voiles mal curés ou trop longs sans joint.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les réparations de bétons dégradés (purge du béton non adhérent, brossage et passivation des aciers, reconstitution au mortier de réparation) relèvent de techniques spécifiques et de produits normalisés. Le meilleur traitement reste la prévention : cales en nombre suffisant, vibration soignée, cure dès la fin du coulage.</div>"
      }
     ],
     "points_cles": [
      "L'acier reprend la traction, le béton la compression ; l'adhérence les fait travailler ensemble.",
      "Désignation d'un béton : classe de résistance (C25/30), d'exposition (XC, XF, XD, XS, XA), de consistance (S1 à S5), Dmax, chlorures.",
      "La classe d'exposition conditionne la durabilité et l'enrobage.",
      "L'enrobage se mesure depuis l'armature la plus proche de la paroi, en général le cadre.",
      "Recouvrements décalés, longueurs indiquées sur les plans ; jamais d'acier déplié-replié ou chauffé.",
      "Masse linéique : environ 0,00617 × Ø² kg/m (HA 10 : 0,617 ; HA 12 : 0,888 ; HA 16 : 1,578).",
      "Ajouter de l'eau au béton sur chantier diminue résistance et durabilité.",
      "Carbonatation et chlorures corrodent les aciers mal protégés ; la rouille fait éclater l'enrobage."
     ],
     "lexique": [
      {
       "terme": "Haute adhérence (HA)",
       "def": "Barre d'acier à nervures qui améliore l'accrochage au béton."
      },
      {
       "terme": "BPE",
       "def": "Béton prêt à l'emploi, fabriqué en centrale et livré en camion malaxeur."
      },
      {
       "terme": "Classe d'exposition",
       "def": "Désignation des agressions de l'environnement subies par le béton (XC, XF, XD, XS, XA…)."
      },
      {
       "terme": "Affaissement",
       "def": "Mesure de la consistance du béton frais au cône d'Abrams, classée de S1 à S5."
      },
      {
       "terme": "Enrobage nominal",
       "def": "Distance minimale entre l'armature la plus proche et la paroi, majorée d'une tolérance, indiquée sur les plans."
      },
      {
       "terme": "Longueur d'ancrage",
       "def": "Longueur nécessaire pour qu'une barre transmette son effort au béton sans glisser."
      },
      {
       "terme": "Recouvrement",
       "def": "Chevauchement de deux barres permettant de transmettre l'effort de l'une à l'autre."
      },
      {
       "terme": "Mandrin",
       "def": "Pièce cylindrique autour de laquelle on cintre une barre ; son diamètre minimal est réglementé."
      },
      {
       "terme": "Carbonatation",
       "def": "Réaction du gaz carbonique de l'air avec le béton, qui abaisse son pH et expose les aciers à la corrosion."
      },
      {
       "terme": "Béton autoplaçant (BAP)",
       "def": "Béton très fluide qui se met en place et se serre sous son seul poids, sans vibration."
      },
      {
       "terme": "Ratio d'armatures",
       "def": "Masse d'acier par mètre cube de béton d'un élément, en kg/m³."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Technologie et techniques de réalisation",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bgo-systemes-constructifs",
     "titre": "Systèmes constructifs et choix techniques du gros œuvre",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Comparer les principaux systèmes porteurs (murs porteurs, voiles, ossature poteaux-poutres)",
      "Choisir un type de fondation à partir des conclusions d'une étude géotechnique",
      "Comparer les différents planchers selon la portée, le coût, la rapidité et les contraintes de chantier",
      "Expliquer le rôle du contreventement et des dispositions parasismiques",
      "Justifier un choix technique par des critères techniques, économiques et environnementaux"
     ],
     "sections": [
      {
       "titre": "Les grands systèmes porteurs",
       "contenu": "<p>Un <strong>système constructif</strong> est la manière dont la structure d'un bâtiment reprend et transmet les charges. Le choix est fait par le maître d'œuvre et le bureau d'études, mais l'entreprise propose souvent des <strong>variantes</strong> mieux adaptées à ses moyens. Le technicien de gros œuvre doit donc connaître les avantages et les contraintes de chaque système.</p>\n<table>\n<thead><tr><th>Système</th><th>Principe</th><th>Usages typiques</th><th>Points forts</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Murs porteurs en maçonnerie</td><td>Murs en blocs ou briques chaînés, planchers posés dessus</td><td>Maisons individuelles, petits collectifs</td><td>Économique, savoir-faire répandu, peu de matériel</td><td>Hauteur limitée, portées et ouvertures limitées</td></tr>\n<tr><td>Voiles en béton banché</td><td>Murs en béton coulé dans des banches</td><td>Logements collectifs, parkings, ouvrages enterrés</td><td>Rigidité, isolement acoustique, rapidité par rotation de banches</td><td>Grue et banches nécessaires, cloisonnement figé</td></tr>\n<tr><td>Ossature poteaux-poutres</td><td>Poteaux et poutres portent les planchers, façades non porteuses</td><td>Bureaux, commerces, bâtiments industriels</td><td>Grands plateaux libres, évolutivité</td><td>Contreventement à prévoir, coffrages plus complexes</td></tr>\n<tr><td>Préfabrication lourde</td><td>Éléments fabriqués en usine et assemblés</td><td>Bâtiments répétitifs, industriels, parkings</td><td>Qualité, vitesse, moins de main-d'œuvre sur site</td><td>Transport, levage lourd, liaisons délicates</td></tr>\n<tr><td>Systèmes mixtes</td><td>Béton et bois, béton et acier</td><td>Bâtiments bas carbone, surélévations</td><td>Légèreté, impact carbone réduit</td><td>Interfaces entre corps d'état, tolérances serrées</td></tr>\n</tbody>\n</table>\n<p>Dans un même bâtiment, plusieurs systèmes coexistent souvent : un sous-sol en voiles banchés, des étages en maçonnerie porteuse, un rez-de-chaussée commercial sur poteaux.</p>"
      },
      {
       "titre": "Choisir les fondations à partir de l'étude de sol",
       "contenu": "<p>Le choix des fondations dépend du terrain. Il s'appuie sur l'<strong>étude géotechnique</strong>, réalisée par un bureau spécialisé selon la norme NF P 94-500, qui définit des missions successives : <strong>G1</strong> (étude préalable, site et principes généraux), <strong>G2</strong> (étude de conception : hypothèses, type et niveau d'assise des fondations), <strong>G3</strong> (suivi géotechnique d'exécution pour l'entreprise), <strong>G4</strong> (supervision pour le maître d'ouvrage) et <strong>G5</strong> (diagnostic d'un ouvrage existant). Dans les zones exposées au retrait-gonflement des argiles, une étude de sol est exigée par la loi pour la vente de terrains et la construction de maisons.</p>\n<table>\n<thead><tr><th>Famille</th><th>Exemples</th><th>Quand l'utiliser</th></tr></thead>\n<tbody>\n<tr><td>Fondations superficielles</td><td>Semelles filantes sous murs, semelles isolées sous poteaux, radier général</td><td>Bon sol à faible profondeur ; radier si le sol est médiocre mais homogène ou en présence d'eau</td></tr>\n<tr><td>Fondations semi-profondes</td><td>Puits en gros béton, longrines sur puits</td><td>Bon sol entre 2 et 5 m environ</td></tr>\n<tr><td>Fondations profondes</td><td>Pieux forés, pieux battus, micropieux</td><td>Bon sol à grande profondeur, charges importantes, sols compressibles</td></tr>\n</tbody>\n</table>\n<p>Les règles de mise en œuvre des fondations superficielles sont données par le <strong>NF DTU 13.11</strong>. Quelle que soit la solution, la base des fondations doit être placée <strong>hors gel</strong> (la profondeur dépend de la région et de l'altitude, souvent entre 0,50 et 0,90 m en plaine) et sur un sol homogène.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> fonder une partie d'un bâtiment sur le bon sol et une autre sur un remblai ou une ancienne fosse provoque des <strong>tassements différentiels</strong> : les murs se fissurent en escalier. Si le fond de fouille ne correspond pas à ce que décrit l'étude de sol (poche d'argile molle, venue d'eau, remblai), on arrête et on fait venir le géotechnicien ou le bureau d'études avant de couler.</div>"
      },
      {
       "titre": "Les planchers : comparer pour choisir",
       "contenu": "<p>Le plancher est l'élément le plus répétitif d'un bâtiment ; son choix pèse sur le coût et le délai.</p>\n<table>\n<thead><tr><th>Plancher</th><th>Composition</th><th>Portées courantes</th><th>Contraintes de chantier</th></tr></thead>\n<tbody>\n<tr><td>Poutrelles et entrevous (hourdis)</td><td>Poutrelles précontraintes ou treillis, entrevous béton ou isolants, dalle de compression armée d'un treillis</td><td>Jusqu'à 6 m environ en logement</td><td>Léger, posé à la main ou à la petite grue, étaiement réduit selon le fabricant</td></tr>\n<tr><td>Prédalles</td><td>Plaques préfabriquées de 5 à 6 cm armées, servant de coffrage perdu, complétées par une dalle coulée en place</td><td>5 à 8 m environ</td><td>Grue nécessaire, étaiement provisoire, sous-face lisse prête à peindre</td></tr>\n<tr><td>Dalle pleine coulée en place</td><td>Béton armé coulé sur coffrage (tables coffrantes ou étais et panneaux)</td><td>4 à 7 m environ selon l'épaisseur</td><td>Coffrage important, grande liberté de forme, bon acoustique</td></tr>\n<tr><td>Dalles alvéolées précontraintes</td><td>Grandes dalles préfabriquées évidées</td><td>Jusqu'à 15 m et plus</td><td>Levage lourd, très rapide, adaptées aux bureaux et parkings</td></tr>\n</tbody>\n</table>\n<p>L'épaisseur d'un plancher s'exprime souvent par la somme de ses composants : un plancher « 16 + 4 » est formé d'entrevous de 16 cm et d'une dalle de compression de 4 cm. Une dalle pleine a en première approche une épaisseur de l'ordre de la portée divisée par 25 à 30.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer deux solutions pour une maison de 100 m² de plancher d'étage, portée 4,50 m. 1) Lister les critères : coût des fournitures, main-d'œuvre, matériel de levage, étaiement, délai, performance acoustique, réservations. 2) Plancher poutrelles-entrevous : pas de grue à tour, pose à deux compagnons, étaiement limité, coulage de la dalle de compression en une demi-journée. 3) Dalle pleine : coffrage complet, étaiement dense, plus de béton et d'acier, mais meilleure isolation acoustique et réservations faciles. 4) Conclure en fonction des priorités : pour une maison individuelle, la solution poutrelles-entrevous est généralement retenue ; pour des logements superposés exigeants en acoustique, la dalle pleine ou la prédalle l'emporte.</div>"
      },
      {
       "titre": "Le contreventement",
       "contenu": "<p>Une structure doit résister aux charges verticales, mais aussi aux <strong>efforts horizontaux</strong> : vent, séisme, poussée des terres, chocs. Le <strong>contreventement</strong> est l'ensemble des éléments qui assurent cette stabilité horizontale et empêchent le bâtiment de se déformer comme un château de cartes.</p>\n<ul>\n<li>Les <strong>planchers</strong> jouent le rôle de <strong>diaphragmes</strong> horizontaux : ils collectent les efforts de chaque niveau et les répartissent vers les éléments verticaux. Leurs chaînages périphériques sont indispensables.</li>\n<li>Les <strong>voiles de contreventement</strong> (murs en béton, cages d'escaliers et d'ascenseurs) ou les murs de maçonnerie chaînés reprennent ces efforts et les descendent aux fondations.</li>\n<li>Dans les ossatures, des <strong>portiques</strong> à nœuds rigides ou des <strong>palées de stabilité</strong> (croix de Saint-André) jouent ce rôle.</li>\n</ul>\n<p>Un bon contreventement suppose des éléments répartis dans les deux directions et disposés de façon à peu près symétrique ; sinon, le bâtiment tourne sur lui-même sous l'effort horizontal.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> supprimer ou percer largement un mur ou un voile de contreventement, même s'il porte peu de charges verticales, peut compromettre la stabilité de tout le bâtiment.</div>"
      },
      {
       "titre": "Construire en zone sismique",
       "contenu": "<p>Le territoire français est découpé en cinq <strong>zones de sismicité</strong>, de 1 (très faible) à 5 (forte, aux Antilles). Selon la zone et la <strong>catégorie d'importance</strong> du bâtiment (de I à IV, d'un hangar agricole à un hôpital), les règles parasismiques s'appliquent : <strong>Eurocode 8</strong> en général, ou des règles simplifiées pour les maisons individuelles (référentiel de construction parasismique des maisons individuelles).</p>\n<p>Pour le gros œuvre, les dispositions parasismiques se traduisent principalement par :</p>\n<ul>\n<li>des <strong>chaînages</strong> horizontaux et verticaux continus, bien liaisonnés entre eux aux angles et aux jonctions, avec des sections et des recouvrements renforcés ;</li>\n<li>l'encadrement des grandes ouvertures par des chaînages ;</li>\n<li>des cadres et étriers plus serrés dans les <strong>zones critiques</strong> (extrémités des poteaux et poutres), avec des crochets refermés à 135° ;</li>\n<li>des fondations liées entre elles par des longrines ou des semelles continues ;</li>\n<li>des formes de bâtiment simples et régulières, avec des joints parasismiques entre volumes différents.</li>\n</ul>\n<p>Le maître d'ouvrage doit fournir, au dépôt du permis puis à l'achèvement, des attestations de prise en compte des règles parasismiques pour les bâtiments concernés. Le chef d'équipe, lui, veille à la réalisation exacte des détails d'armatures : en zone sismique, un crochet mal refermé ou un recouvrement trop court n'est pas un détail.</p>"
      },
      {
       "titre": "Critères de choix et approche environnementale",
       "contenu": "<p>Un choix technique se justifie toujours par plusieurs critères, qu'il faut savoir énoncer.</p>\n<table>\n<thead><tr><th>Critère</th><th>Questions à se poser</th></tr></thead>\n<tbody>\n<tr><td>Technique</td><td>La solution reprend-elle les charges et les portées ? Est-elle compatible avec le sol, l'exposition, les règles parasismiques ?</td></tr>\n<tr><td>Réglementaire</td><td>Respecte-t-elle les DTU, les règles d'accessibilité, de sécurité incendie, la RE2020 ?</td></tr>\n<tr><td>Économique</td><td>Quel est le coût global (fournitures, main-d'œuvre, matériel, étaiement) et pas seulement le prix des matériaux ?</td></tr>\n<tr><td>Organisationnel</td><td>La grue, les accès, les délais, l'équipe disponible permettent-ils la mise en œuvre ?</td></tr>\n<tr><td>Environnemental</td><td>Quel impact carbone, quels déchets, quelles nuisances pour les riverains ?</td></tr>\n</tbody>\n</table>\n<p>Sur le plan environnemental, la RE2020 calcule l'impact carbone des matériaux à partir des <strong>fiches de déclaration environnementale et sanitaire (FDES)</strong> fournies par les fabricants. Les leviers du gros œuvre sont : des bétons bas carbone (ciments à base de laitier ou d'autres constituants remplaçant une partie du clinker), l'optimisation des quantités de béton et d'acier, l'emploi de matériaux biosourcés ou géosourcés (bois, blocs de chanvre, terre crue) dans les parties qui s'y prêtent, et le réemploi des coffrages.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les bétons bas carbone ont souvent une montée en résistance plus lente au jeune âge. L'entreprise doit en tenir compte dans ses cycles : décoffrage des voiles décalé, rotation des banches revue, protection renforcée en hiver. Le choix environnemental a donc des conséquences directes sur l'organisation du chantier.</div>"
      }
     ],
     "points_cles": [
      "Systèmes porteurs : murs maçonnés, voiles banchés, ossature poteaux-poutres, préfabrication, systèmes mixtes.",
      "L'étude géotechnique (missions G1 à G5, norme NF P 94-500) conditionne le choix des fondations.",
      "Fondations superficielles (NF DTU 13.11), semi-profondes (puits) ou profondes (pieux) selon la profondeur du bon sol.",
      "Fonder hors gel et sur un sol homogène pour éviter les tassements différentiels.",
      "Planchers : poutrelles-entrevous, prédalles, dalle pleine, dalles alvéolées, choisis selon portée, coût, délai et acoustique.",
      "Le contreventement (diaphragmes, voiles, portiques) reprend les efforts horizontaux dans les deux directions.",
      "En zone sismique : chaînages continus, cadres resserrés en zones critiques, crochets à 135°.",
      "Un choix technique se justifie par des critères techniques, réglementaires, économiques, organisationnels et environnementaux."
     ],
     "lexique": [
      {
       "terme": "Système constructif",
       "def": "Manière dont la structure d'un bâtiment reprend et transmet les charges."
      },
      {
       "terme": "Voile",
       "def": "Mur en béton armé coulé en place, porteur ou de contreventement."
      },
      {
       "terme": "Étude géotechnique",
       "def": "Étude du sol qui définit, entre autres, le type et le niveau des fondations."
      },
      {
       "terme": "Tassement différentiel",
       "def": "Enfoncement inégal des fondations, qui fissure la structure."
      },
      {
       "terme": "Radier",
       "def": "Fondation constituée d'une dalle continue sous tout le bâtiment."
      },
      {
       "terme": "Prédalle",
       "def": "Plaque de béton armé préfabriquée servant de coffrage perdu à une dalle coulée en place."
      },
      {
       "terme": "Contreventement",
       "def": "Ensemble des éléments qui assurent la stabilité d'un bâtiment sous les efforts horizontaux."
      },
      {
       "terme": "Diaphragme",
       "def": "Plancher rigide qui répartit les efforts horizontaux vers les éléments verticaux."
      },
      {
       "terme": "Zone critique",
       "def": "Partie d'un poteau ou d'une poutre où les règles parasismiques imposent des armatures transversales renforcées."
      },
      {
       "terme": "FDES",
       "def": "Fiche de déclaration environnementale et sanitaire d'un produit de construction."
      },
      {
       "terme": "Variante",
       "def": "Solution technique proposée par l'entreprise à la place de celle prévue au marché."
      }
     ]
    },
    {
     "id": "bgo-terrassements-reseaux",
     "titre": "Terrassements, ouvrages enterrés et réseaux",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Identifier les différents types de terrassements et les engins adaptés",
      "Calculer des volumes de déblai et de remblai en tenant compte du foisonnement",
      "Appliquer les règles de sécurité des fouilles : talutage et blindage",
      "Décrire la réalisation des fondations, soubassements et planchers bas",
      "Mettre en œuvre des réseaux d'assainissement enterrés en respectant pentes et règles de pose"
     ],
     "sections": [
      {
       "titre": "Les terrassements du bâtiment",
       "contenu": "<p>Les <strong>terrassements</strong> regroupent tous les travaux de mouvement de terre. Dans un chantier de bâtiment, l'entreprise de gros œuvre les réalise elle-même ou les sous-traite à un terrassier, mais elle en reste responsable vis-à-vis du planning.</p>\n<table>\n<thead><tr><th>Opération</th><th>Description</th></tr></thead>\n<tbody>\n<tr><td>Décapage</td><td>Enlèvement de la terre végétale (20 à 30 cm), stockée à part pour être réutilisée en espaces verts</td></tr>\n<tr><td>Fouille en pleine masse</td><td>Excavation sur toute l'emprise, pour un sous-sol ou un parking</td></tr>\n<tr><td>Fouille en rigole</td><td>Tranchée étroite pour les semelles filantes</td></tr>\n<tr><td>Fouille en puits</td><td>Excavation ponctuelle pour une semelle isolée ou un puits de fondation</td></tr>\n<tr><td>Fouille en tranchée</td><td>Tranchée pour réseaux (assainissement, eau, électricité)</td></tr>\n<tr><td>Remblai</td><td>Apport de terre ou de matériaux pour remonter un niveau, compacté par couches</td></tr>\n<tr><td>Évacuation</td><td>Chargement et transport des déblais excédentaires</td></tr>\n</tbody>\n</table>\n<p>Les engins usuels sont la <strong>pelle hydraulique</strong> (sur chenilles ou pneus), la <strong>mini-pelle</strong> pour les fouilles en rigole et les réseaux, la <strong>chargeuse</strong>, le <strong>tombereau</strong> ou le camion pour l'évacuation, le <strong>compacteur</strong> (plaque vibrante, rouleau) pour les remblais. Leur conduite exige une <strong>autorisation de conduite</strong> délivrée par l'employeur, généralement sur la base d'un <strong>CACES</strong> de la recommandation R482 pour les engins de chantier.</p>"
      },
      {
       "titre": "Volumes, foisonnement et mouvement des terres",
       "contenu": "<p>Une terre extraite occupe un volume plus grand qu'en place : c'est le <strong>foisonnement</strong>. Le <strong>coefficient de foisonnement</strong> est le rapport du volume foisonné au volume en place. Après compactage, le volume diminue à nouveau, sans revenir toujours exactement au volume initial (on parle de foisonnement résiduel).</p>\n<table>\n<thead><tr><th>Nature du sol</th><th>Coefficient de foisonnement (ordre de grandeur)</th></tr></thead>\n<tbody>\n<tr><td>Sable, gravier</td><td>1,10 à 1,15</td></tr>\n<tr><td>Terre végétale, terre ordinaire</td><td>1,20 à 1,30</td></tr>\n<tr><td>Argile</td><td>1,30 à 1,40</td></tr>\n<tr><td>Roche fragmentée</td><td>1,50 et plus</td></tr>\n</tbody>\n</table>\n<p>Les coefficients du projet sont donnés par l'étude de sol ou par l'expérience de l'entreprise ; ceux ci-dessus ne servent qu'à fixer les idées.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> fouille en rigole pour semelles filantes de 0,50 m de large et 0,80 m de profondeur, sur une longueur totale de 46 m, dans une terre ordinaire (coefficient 1,25). 1) Volume en place : 0,50 × 0,80 × 46 = 18,4 m³. 2) Volume foisonné à évacuer ou stocker : 18,4 × 1,25 = 23,0 m³. 3) Nombre de rotations d'un camion de 8 m³ : 23,0 / 8 ≈ 2,9, soit 3 rotations. 4) Si une partie est réutilisée en remblai contre les soubassements, on la déduit avant de commander les camions.</div>\n<p>Sur les chantiers importants, on établit un <strong>bilan déblais-remblais</strong> afin de réutiliser au maximum les terres sur place : moins de camions, moins de coûts, moins d'émissions. Les terres évacuées sont des déchets inertes à diriger vers une installation autorisée, avec traçabilité.</p>"
      },
      {
       "titre": "Sécurité des fouilles",
       "contenu": "<p>L'<strong>ensevelissement</strong> est l'un des accidents les plus graves du BTP : un mètre cube de terre pèse environ 1,8 à 2 tonnes, et une personne prise jusqu'à la poitrine ne peut plus respirer. Les parois d'une fouille peuvent s'effondrer sans signe avant-coureur, notamment après la pluie, sous l'effet de vibrations ou de charges en bord de fouille.</p>\n<p>Le Code du travail impose que les <strong>fouilles en tranchée</strong> de plus de 1,30 m de profondeur, dont la largeur est inférieure ou égale aux deux tiers de la profondeur, soient <strong>blindées</strong> lorsque leurs parois sont verticales ou presque. Deux solutions s'offrent à l'entreprise :</p>\n<ul>\n<li>le <strong>talutage</strong> : donner aux parois une pente compatible avec la tenue du terrain (déterminée selon la nature du sol, et en l'absence d'étude, avec une marge prudente) ;</li>\n<li>le <strong>blindage</strong> : soutenir les parois par des caissons ou panneaux métalliques avec vérins (blindage par caissons, par glissières), mis en place au fur et à mesure du terrassement, sans que personne ne descende dans la partie non blindée.</li>\n</ul>\n<p>Autres règles essentielles : laisser une <strong>berme</strong> libre (aucun dépôt de déblais ni de matériaux, aucun engin) en bord de fouille, sur une largeur fixée par le mode opératoire en fonction de la profondeur, du terrain et des charges ; prévoir des <strong>accès</strong> sûrs (échelles dépassant d'un mètre) ; baliser et protéger la fouille contre les chutes (garde-corps ou barrières) ; vérifier l'absence de réseaux grâce aux récépissés de DICT et au marquage-piquetage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> descendre « juste une minute » dans une tranchée non blindée pour régler un tuyau est la situation typique des accidents mortels. Aucune intervention humaine ne doit avoir lieu dans la zone non protégée, même pour une tâche courte.</div>"
      },
      {
       "titre": "Fondations, soubassements et planchers bas",
       "contenu": "<p>Après les terrassements, l'équipe réalise l'infrastructure, partie du bâtiment située sous le plancher bas.</p>\n<ol>\n<li><strong>Réception du fond de fouille</strong> : contrôle du niveau, de la nature du sol par rapport à l'étude, de l'absence d'eau stagnante et de terre remaniée. On coule ensuite un <strong>béton de propreté</strong> (5 cm environ) qui protège le fond et sert de support au ferraillage.</li>\n<li><strong>Semelles</strong> : mise en place des armatures avec cales, des <strong>attentes</strong> pour les chaînages verticaux et poteaux, et des fourreaux de traversée de réseaux ; bétonnage.</li>\n<li><strong>Soubassement</strong> : murs entre la semelle et le plancher bas, en blocs pleins ou à bancher, ou en béton banché. On y intègre la <strong>coupure de capillarité</strong> et, côté terres, la protection contre l'humidité.</li>\n<li><strong>Plancher bas</strong> : selon le terrain et le projet, <strong>dallage sur terre-plein</strong> (NF DTU 13.3), plancher sur <strong>vide sanitaire</strong> ventilé, ou plancher sur sous-sol.</li>\n</ol>\n<table>\n<thead><tr><th>Plancher bas</th><th>Avantages</th><th>Précautions</th></tr></thead>\n<tbody>\n<tr><td>Dallage sur terre-plein</td><td>Économique, simple</td><td>Forme compactée, isolant et film polyéthylène, terrain sans risque de gonflement</td></tr>\n<tr><td>Plancher sur vide sanitaire</td><td>Désolidarisé du sol, réseaux accessibles, adapté aux sols argileux</td><td>Ventilation par grilles, hauteur suffisante, isolation du plancher</td></tr>\n<tr><td>Plancher sur sous-sol</td><td>Surface utile supplémentaire</td><td>Murs enterrés traités contre l'eau, drainage</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Les réseaux d'assainissement enterrés",
       "contenu": "<p>Les réseaux d'assainissement collectent deux types d'eaux qu'on sépare en général : les <strong>eaux usées (EU)</strong>, issues des sanitaires et cuisines (eaux vannes et eaux ménagères), et les <strong>eaux pluviales (EP)</strong>, issues des toitures et surfaces imperméables. En <strong>réseau séparatif</strong>, chaque type d'eau rejoint un collecteur public distinct ; les eaux pluviales peuvent aussi être infiltrées ou stockées sur la parcelle, comme l'imposent de plus en plus les règlements locaux. Les maisons non raccordables au réseau public relèvent de l'<strong>assainissement non collectif</strong>, réalisé selon le NF DTU 64.1.</p>\n<p>Règles de mise en œuvre d'un réseau gravitaire :</p>\n<ul>\n<li>respecter la <strong>pente</strong> indiquée sur les plans, régulière, sans contre-pente ; une pente minimale de l'ordre de 1 à 2 cm/m est courante pour les collecteurs de bâtiment, à confirmer selon le diamètre et le projet ;</li>\n<li>poser les canalisations (PVC, fonte, grès, béton) sur un <strong>lit de pose</strong> en sable ou gravillons, avec un <strong>enrobage</strong> soigné, puis remblayer par couches compactées, avec un <strong>grillage avertisseur</strong> de couleur (marron pour l'assainissement) au-dessus ;</li>\n<li>placer des <strong>regards</strong> de visite aux changements de direction et de pente, aux jonctions et à intervalles réguliers, pour permettre le curage ;</li>\n<li>éviter les coudes à 90° en enterré, préférer deux coudes à 45° ;</li>\n<li>réaliser un <strong>essai d'étanchéité</strong> avant remblaiement complet lorsqu'il est prévu.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer les fils d'eau. Un collecteur EU part d'un regard dont le fil d'eau (niveau du fond intérieur du tuyau) est à 98,60 m NGF et rejoint le regard de branchement situé à 18,00 m, avec une pente de 2 %. 1) Dénivelée : 18,00 × 0,02 = 0,36 m. 2) Fil d'eau d'arrivée : 98,60 − 0,36 = 98,24 m. 3) On vérifie que ce niveau est au-dessus du fil d'eau du branchement public indiqué par le concessionnaire ; sinon, il faut revoir la pente ou prévoir un poste de relevage. 4) Sur le terrain, on règle la pente à la nivelle laser à faisceau incliné ou avec une règle et un niveau de chantier.</div>"
      },
      {
       "titre": "Drainage et autres réseaux",
       "contenu": "<p>Le <strong>drainage</strong> périphérique protège les sous-sols et les soubassements : un tuyau perforé ou fendu, posé en pied de fondation avec une légère pente, entouré de gravier lavé et enveloppé d'un géotextile filtrant, recueille l'eau des terres. Il comporte des regards de visite aux angles et se rejette dans un exutoire (réseau EP, puits d'infiltration), jamais dans le réseau d'eaux usées. Un drain ne doit pas être placé sous le niveau des fondations au risque de déstabiliser le sol d'assise.</p>\n<p>D'autres réseaux traversent l'infrastructure : alimentation en eau potable, électricité, télécommunications, gaz. L'entreprise de gros œuvre réalise souvent les <strong>fourreaux</strong> et les tranchées communes. Chaque réseau a sa <strong>couleur de grillage avertisseur</strong> normalisée : rouge pour l'électricité, jaune pour le gaz, bleu pour l'eau potable, vert pour les télécommunications, marron pour l'assainissement.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de couler un dallage, le chef d'équipe organise une visite des réservations avec les plombiers et électriciens : diamètre et position des fourreaux de traversée, attentes d'évacuation des sanitaires, réservations pour les siphons de sol. Une évacuation oubliée sous un dallage coulé oblige à carotter ou à démolir, avec à la clé des fissures et des retards.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en terrassement et réseaux, les erreurs sont enterrées : il faut contrôler (niveaux, pentes, positions, essais) avant de remblayer, et garder une trace écrite et photographique des réseaux posés pour le récolement.</div>"
      }
     ],
     "points_cles": [
      "Terrassements : décapage, fouilles en pleine masse, en rigole, en puits, en tranchée, remblais compactés par couches.",
      "Volume foisonné = volume en place × coefficient de foisonnement (environ 1,25 pour une terre ordinaire).",
      "Tranchée de plus de 1,30 m de profondeur et de largeur au plus égale aux deux tiers de la profondeur, à parois verticales : blindage obligatoire, sinon talutage.",
      "Aucun dépôt ni engin en bord de fouille ; jamais d'intervention dans une zone non blindée.",
      "Fond de fouille réceptionné, béton de propreté, semelles avec attentes, soubassement avec coupure de capillarité.",
      "Planchers bas : dallage sur terre-plein, vide sanitaire ventilé, sous-sol.",
      "Réseaux gravitaires : pente régulière, lit de pose, regards, grillage avertisseur, essai avant remblai.",
      "Couleurs des grillages : rouge électricité, jaune gaz, bleu eau, vert télécoms, marron assainissement."
     ],
     "lexique": [
      {
       "terme": "Foisonnement",
       "def": "Augmentation de volume d'un sol après extraction."
      },
      {
       "terme": "Fouille en rigole",
       "def": "Tranchée étroite destinée à recevoir une semelle filante."
      },
      {
       "terme": "Blindage",
       "def": "Soutènement provisoire des parois d'une fouille par panneaux ou caissons."
      },
      {
       "terme": "Talutage",
       "def": "Inclinaison des parois d'une fouille selon une pente stable pour le terrain."
      },
      {
       "terme": "Berme",
       "def": "Bande de terrain laissée libre au bord d'une fouille."
      },
      {
       "terme": "Béton de propreté",
       "def": "Couche mince de béton maigre coulée en fond de fouille pour protéger le sol et supporter les armatures."
      },
      {
       "terme": "Vide sanitaire",
       "def": "Espace ventilé entre le sol et le plancher bas d'un bâtiment."
      },
      {
       "terme": "Fil d'eau",
       "def": "Niveau du point bas intérieur d'une canalisation ou d'un regard."
      },
      {
       "terme": "Regard",
       "def": "Ouvrage d'accès à un réseau enterré, placé aux changements de direction ou de pente."
      },
      {
       "terme": "Réseau séparatif",
       "def": "Système d'assainissement dans lequel eaux usées et eaux pluviales circulent dans des canalisations distinctes."
      },
      {
       "terme": "Drain",
       "def": "Tuyau perforé entouré de gravier et de géotextile qui recueille l'eau des terres."
      }
     ]
    },
    {
     "id": "bgo-maconnerie",
     "titre": "Maçonneries de petits éléments : règles de l'art",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Choisir un élément de maçonnerie et un mortier adaptés à l'usage du mur",
      "Appliquer les règles d'appareillage, de calepinage et de jointoiement",
      "Disposer les chaînages horizontaux et verticaux et les linteaux selon les règles",
      "Traiter les points singuliers : angles, jonctions, baies, appuis, seuils",
      "Contrôler une maçonnerie selon les tolérances de planéité, d'aplomb et de rectitude"
     ],
     "sections": [
      {
       "titre": "Le cadre : NF DTU 20.1 et Eurocode 6",
       "contenu": "<p>Les murs en <strong>maçonnerie de petits éléments</strong> (blocs béton, briques de terre cuite, blocs de béton cellulaire, pierres) sont régis par le <strong>NF DTU 20.1</strong>, qui décrit les matériaux admis, les règles de conception courantes et les règles de mise en œuvre. Le dimensionnement relève de l'<strong>Eurocode 6</strong>. Les murs sont classés selon leur exposition à la pluie et le type de revêtement extérieur, ce qui détermine l'épaisseur minimale et le type de mur admis.</p>\n<p>On distingue plusieurs types de murs selon leur constitution :</p>\n<ul>\n<li>le mur à <strong>simple paroi</strong>, le plus courant, enduit à l'extérieur et doublé ou enduit à l'intérieur ;</li>\n<li>le mur à <strong>double paroi</strong>, avec une lame d'air ou un isolant entre deux parois liées par des attaches ;</li>\n<li>le mur de <strong>doublage</strong> ou de <strong>remplissage</strong>, non porteur, dans une ossature.</li>\n</ul>\n<p>Les éléments de maçonnerie sont normalisés (série NF EN 771) et classés par <strong>catégorie</strong> et par <strong>résistance</strong> à la compression. On retrouve couramment des blocs creux de béton B40 ou B60 (résistance indicative en bars sur l'ancienne désignation française), des briques creuses de terre cuite à joints minces ou épais, et des blocs de béton cellulaire posés à la colle.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un mur de maçonnerie ne tient correctement que s'il forme un ensemble monolithique : éléments croisés, joints remplis, chaînages continus. La qualité d'exécution compte autant que la qualité des produits.</div>"
      },
      {
       "titre": "Mortiers et joints",
       "contenu": "<p>Le <strong>mortier de montage</strong> lie les éléments, répartit les charges et assure l'étanchéité du joint. Il peut être fabriqué sur chantier ou, de plus en plus, livré en sacs de <strong>mortier industriel</strong> prêt à gâcher, de composition constante.</p>\n<table>\n<thead><tr><th>Type de pose</th><th>Épaisseur de joint</th><th>Éléments concernés</th></tr></thead>\n<tbody>\n<tr><td>Joints épais (traditionnels)</td><td>Environ 10 mm (de l'ordre de 8 à 15 mm)</td><td>Blocs béton creux ou pleins, briques à joints épais</td></tr>\n<tr><td>Joints minces</td><td>Environ 1 à 3 mm, au mortier-colle</td><td>Briques et blocs rectifiés, béton cellulaire</td></tr>\n</tbody>\n</table>\n<p>Les blocs rectifiés posés à joints minces offrent une grande précision et une meilleure productivité, mais exigent une première assise parfaitement de niveau, réglée au mortier sur l'arase.</p>\n<p>Les <strong>joints verticaux</strong> peuvent être remplis ou non selon les éléments : certains blocs et briques à emboîtement sont conçus pour être posés sans mortier vertical. Les <strong>joints horizontaux</strong> sont toujours continus. Le <strong>harpage</strong> des joints verticaux (leur décalage d'un rang à l'autre) est obligatoire ; on recherche un décalage d'environ une demi-longueur d'élément, le DTU fixant un recouvrement minimal.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remouiller un mortier qui a commencé sa prise pour le « rattraper » détruit sa résistance. Un mortier gâché se met en œuvre dans le temps indiqué par le fabricant ; au-delà, il est jeté. Par temps chaud, on humidifie les éléments très absorbants pour éviter que le mortier ne grille.</div>"
      },
      {
       "titre": "Calepinage, hauteurs et ouvertures",
       "contenu": "<p>Le <strong>calepinage</strong> consiste à prévoir la disposition des éléments avant la pose, afin de limiter les coupes et de faire coïncider les assises avec les niveaux imposés (appuis de baies, linteaux, dessous de plancher).</p>\n<p>Un bloc béton courant mesure 50 cm de long et 20 cm de haut ; avec un joint de 1 cm, le <strong>module</strong> est de 20 cm en hauteur (19 cm de bloc plus 1 cm de joint) et de 50 cm en longueur. Les dimensions des murs, des baies et des trumeaux gagnent à être des multiples du module.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calepiner la hauteur d'un mur de rez-de-chaussée. Arase de soubassement à 0,00 ; dessous de plancher à + 2,50 m ; hauteur du chaînage-plancher (bloc en U ou coffrage) 0,20 m. 1) Hauteur de maçonnerie courante : 2,50 − 0,20 = 2,30 m. 2) Nombre d'assises de 0,20 m : 2,30 / 0,20 = 11,5. 3) On ne peut pas poser une demi-assise de bloc de 20 : on choisit 11 assises (2,20 m) et une assise de rattrapage de 0,10 m en bloc de 10 cm de haut, ou on ajuste l'arase de départ. 4) On vérifie de la même façon que l'appui de fenêtre prévu à + 1,00 m tombe sur une assise : 1,00 / 0,20 = 5 assises exactement.</div>\n<p>Les <strong>baies</strong> sont réservées avec des <strong>tableaux</strong> dressés d'aplomb, des <strong>appuis</strong> avec pente vers l'extérieur et goutte d'eau, et des <strong>linteaux</strong> (préfabriqués ou coulés en place dans des blocs en U ou un coffrage) qui reportent les charges sur les trumeaux. Les linteaux doivent reposer sur une longueur d'appui suffisante de part et d'autre de la baie, fixée par le fabricant ou le DTU (de l'ordre de 20 cm au minimum dans les cas courants).</p>"
      },
      {
       "titre": "Les chaînages",
       "contenu": "<p>Les <strong>chaînages</strong> sont des éléments en béton armé incorporés à la maçonnerie qui ceinturent le bâtiment, solidarisent les murs entre eux et avec les planchers, et limitent la fissuration. Ils sont obligatoires selon le NF DTU 20.1 et renforcés en zone sismique.</p>\n<ul>\n<li>Les <strong>chaînages horizontaux</strong> sont placés au niveau de chaque plancher et en couronnement des murs (sous la charpente, en tête de pignon par un chaînage rampant). Ils forment une ceinture continue, y compris au droit des baies.</li>\n<li>Les <strong>chaînages verticaux</strong> sont placés aux angles, aux jonctions de murs, de part et d'autre des joints de dilatation et, selon les règles applicables, en bordure des grandes ouvertures et à intervalles réguliers dans les murs longs.</li>\n</ul>\n<p>Les chaînages verticaux sont coulés dans des blocs d'angle ou des blocs à bancher, ou dans un coffrage. Leurs armatures sont ancrées dans la semelle (par les attentes) et dans le chaînage horizontal supérieur. La section minimale d'acier et le diamètre des cadres sont fixés par le DTU, et augmentés par les règles parasismiques ; les plans d'exécution les précisent.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> à chaque jonction entre chaînage horizontal et chaînage vertical, le chef d'équipe vérifie que les aciers sont <strong>retournés</strong> et liés, et non simplement aboutés. Un angle de chaînage où les filants s'arrêtent au nu du mur sans retour est un point faible : c'est là que les fissures apparaissent en cas de tassement ou de séisme.</div>"
      },
      {
       "titre": "Liaisons et points singuliers",
       "contenu": "<p>Les défauts des maçonneries se concentrent sur les points singuliers. Voici les principales règles.</p>\n<table>\n<thead><tr><th>Point singulier</th><th>Règle de mise en œuvre</th></tr></thead>\n<tbody>\n<tr><td>Angle de murs</td><td>Croisement des éléments d'un rang à l'autre ou bloc d'angle et chaînage vertical</td></tr>\n<tr><td>Jonction mur porteur / refend</td><td>Harpage par éléments alternés ou liaison par armatures et chaînage vertical</td></tr>\n<tr><td>Arase de soubassement</td><td>Coupure de capillarité au-dessus du sol extérieur fini, sur toute l'épaisseur du mur</td></tr>\n<tr><td>Appui de baie</td><td>Pente vers l'extérieur, goutte d'eau, débord sur le nu de façade</td></tr>\n<tr><td>Seuil de porte</td><td>Rejingot, niveau compatible avec l'accessibilité</td></tr>\n<tr><td>Réservations et saignées</td><td>Prévues au calepinage ; saignées limitées en profondeur et en longueur, jamais horizontales dans les murs porteurs sans accord</td></tr>\n<tr><td>Pignon</td><td>Chaînage rampant en tête, liaison avec la charpente</td></tr>\n</tbody>\n</table>\n<p>Les murs en maçonnerie ne doivent pas être montés trop haut en une journée lorsque le mortier est frais, surtout par vent fort : sans chaînage ni plancher, un mur isolé de grande hauteur est instable. On l'étaye provisoirement si nécessaire.</p>"
      },
      {
       "titre": "Contrôler une maçonnerie",
       "contenu": "<p>Les tolérances d'exécution des maçonneries sont définies par le NF DTU 20.1 ; les plus utilisées sur chantier sont les suivantes (valeurs indicatives à vérifier dans le DTU et le CCTP du projet) :</p>\n<ul>\n<li><strong>aplomb</strong> : écart limité par hauteur d'étage, de l'ordre du centimètre pour un mur courant ;</li>\n<li><strong>planéité</strong> : contrôlée à la règle de 2 m, avec un désaffleurement local limité entre deux éléments voisins ;</li>\n<li><strong>rectitude</strong> des arêtes et des tableaux ;</li>\n<li><strong>niveaux</strong> des arases, des appuis et des linteaux par rapport au trait de niveau.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> autocontrôle d'un pan de mur. 1) Aplomb : poser la règle de 2 m munie d'un niveau à bulle contre le mur à trois endroits (extrémités et milieu), ou mesurer l'écart au fil à plomb en haut et en bas. 2) Planéité : promener la règle de 2 m dans plusieurs directions et mesurer le plus grand jour sous la règle avec un réglet ou des cales graduées. 3) Niveau des arases : relever au niveau laser ou au niveau de chantier depuis le trait de niveau de référence. 4) Dimensions des baies : mesurer largeur et hauteur en deux points, vérifier les diagonales pour l'équerrage. 5) Noter les mesures sur la fiche d'autocontrôle et corriger immédiatement tout écart hors tolérance.</div>\n<p>L'enduit ou le doublage ne rattrapent pas une maçonnerie mal dressée : les surépaisseurs d'enduit coûtent cher, fissurent et peuvent dépasser les épaisseurs admises.</p>"
      }
     ],
     "points_cles": [
      "La maçonnerie de petits éléments est régie par le NF DTU 20.1 et dimensionnée selon l'Eurocode 6.",
      "Joints épais d'environ 10 mm au mortier, joints minces de 1 à 3 mm au mortier-colle pour éléments rectifiés.",
      "Les joints verticaux sont harpés d'un rang à l'autre ; les joints horizontaux sont continus.",
      "Le calepinage fait coïncider les assises avec les niveaux imposés ; module courant de 20 cm en hauteur.",
      "Chaînages horizontaux à chaque plancher et en couronnement ; verticaux aux angles, jonctions et joints, renforcés en zone sismique.",
      "Les aciers de chaînage sont retournés et liés aux angles et jonctions.",
      "Les linteaux reposent sur une longueur d'appui suffisante de part et d'autre de la baie.",
      "Aplomb, planéité, rectitude et niveaux se contrôlent pendant la pose, pas après."
     ],
     "lexique": [
      {
       "terme": "Petits éléments",
       "def": "Blocs, briques ou pierres maniables à la main, assemblés au mortier."
      },
      {
       "terme": "Assise",
       "def": "Rang horizontal d'éléments de maçonnerie."
      },
      {
       "terme": "Harpage",
       "def": "Décalage des joints verticaux d'une assise à l'autre, ou imbrication de deux murs à leur jonction."
      },
      {
       "terme": "Calepinage",
       "def": "Plan ou étude de la disposition des éléments, destiné à limiter les coupes et à respecter les niveaux."
      },
      {
       "terme": "Chaînage",
       "def": "Élément en béton armé incorporé à la maçonnerie pour la ceinturer et la solidariser."
      },
      {
       "terme": "Linteau",
       "def": "Élément qui franchit le haut d'une baie et reporte les charges sur les trumeaux."
      },
      {
       "terme": "Trumeau",
       "def": "Partie de mur comprise entre deux baies."
      },
      {
       "terme": "Tableau",
       "def": "Face latérale d'une baie, perpendiculaire au mur."
      },
      {
       "terme": "Mortier-colle",
       "def": "Mortier fin utilisé pour la pose à joints minces d'éléments rectifiés."
      },
      {
       "terme": "Aplomb",
       "def": "Verticalité d'un ouvrage."
      }
     ]
    },
    {
     "id": "bgo-coffrage-betonnage",
     "titre": "Coffrages, armatures et bétonnage des ouvrages coulés en place",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Choisir un type de coffrage selon l'ouvrage, la répétitivité et les moyens de levage",
      "Calculer la poussée du béton frais sur un coffrage vertical et en tirer des conséquences",
      "Organiser la mise en place des armatures, des réservations et des inserts",
      "Préparer et conduire un bétonnage : réception du béton, mise en place, vibration, reprises",
      "Fixer les conditions de décoffrage et de désétaiement"
     ],
     "sections": [
      {
       "titre": "Les familles de coffrages",
       "contenu": "<p>Le <strong>coffrage</strong> est le moule provisoire qui donne sa forme au béton frais. Il doit être résistant, indéformable, étanche à la laitance, sûr pour les ouvriers et facile à démonter. Son coût représente une part importante du prix d'un ouvrage en béton : c'est pourquoi on cherche à le réutiliser le plus possible.</p>\n<table>\n<thead><tr><th>Coffrage</th><th>Description</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Coffrage traditionnel</td><td>Planches, contreplaqué et bois de charpente assemblés sur place</td><td>Petits ouvrages, formes particulières, rattrapages</td></tr>\n<tr><td>Coffrage manuportable modulaire</td><td>Panneaux légers métalliques ou composites assemblés par clés ou serre-joints</td><td>Semelles, poteaux, voiles de petite hauteur, maisons individuelles</td></tr>\n<tr><td>Banches</td><td>Grands panneaux métalliques auto-stables, avec passerelle, garde-corps et étais tire-pousse, manutentionnés à la grue</td><td>Voiles de logements collectifs et d'ouvrages enterrés</td></tr>\n<tr><td>Coffrages de poteaux</td><td>Coffrages métalliques réglables, cartons perdus pour poteaux circulaires</td><td>Poteaux carrés, rectangulaires, ronds</td></tr>\n<tr><td>Coffrages de dalles</td><td>Étais et poutrelles avec panneaux, ou tables coffrantes manutentionnées à la grue</td><td>Dalles pleines, poutres</td></tr>\n<tr><td>Coffrages perdus</td><td>Prédalles, blocs à bancher, coffrages en carton ou en polystyrène</td><td>Dalles, murs, réservations</td></tr>\n</tbody>\n</table>\n<p>Les coffrages manutentionnés par la grue et leurs accessoires (banches, tables, consoles de travail) doivent être conformes aux normes de sécurité de leur famille et utilisés selon la <strong>notice du fabricant</strong>, qui précise les charges admissibles, la stabilité au vent et les points d'élingage.</p>"
      },
      {
       "titre": "La poussée du béton frais",
       "contenu": "<p>Le béton frais se comporte presque comme un liquide lourd : il pousse sur les parois du coffrage avec une pression qui augmente avec la hauteur de béton frais. Dans l'hypothèse la plus défavorable (béton très fluide, coulage rapide, prise lente), la pression est <strong>hydrostatique</strong> : p = γ × h, avec γ le poids volumique du béton frais (environ 25 kN/m³) et h la hauteur de béton encore frais au-dessus du point considéré.</p>\n<p>En réalité, si la vitesse de remplissage est modérée, le béton du bas commence à se raidir et la pression maximale est plafonnée ; la norme et les notices de banches donnent une <strong>vitesse de bétonnage</strong> maximale ou une pression admissible. Les bétons très fluides et les BAP imposent souvent de dimensionner pour la pression hydrostatique complète.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> voile de 2,80 m de hauteur coulé en BAP. 1) Pression maximale au pied : p = 25 × 2,80 = 70 kN/m², soit 70 kPa. 2) Résultante de la poussée par mètre de longueur de banche : surface du triangle de pression = 70 × 2,80 / 2 = 98 kN/m. 3) Comparer à la pression admissible de la banche donnée par le fabricant (par exemple 60 ou 80 kN/m² selon le modèle). 4) Si la pression admissible est de 60 kN/m², il faut couler en plusieurs passes, attendre un début de raidissement entre elles ou choisir un béton moins fluide. Cette vérification évite l'ouverture ou la rupture de la banche, avec projection de béton.</div>\n<p>Les <strong>tiges de serrage</strong> (entretoises) qui relient les deux faces de la banche reprennent cette poussée. Elles passent dans des fourreaux (tubes plastiques et cônes) laissés dans le béton, puis rebouchés. Leur nombre et leur position sont imposés par le fabricant : en retirer une est dangereux.</p>"
      },
      {
       "titre": "Armatures, réservations et inserts",
       "contenu": "<p>Avant la fermeture d'un coffrage ou le coulage d'une dalle, de nombreux éléments doivent être en place et contrôlés.</p>\n<ul>\n<li>Les <strong>armatures</strong> sont livrées façonnées et étiquetées par repère (selon la nomenclature) ou en barres à façonner sur place. Les cages de poutres et poteaux sont souvent préassemblées au sol. Les <strong>ligatures</strong> en fil recuit les maintiennent pendant le coulage ; les <strong>cales</strong> assurent l'enrobage.</li>\n<li>Les <strong>réservations</strong> (trémies, passages de gaines, feuillures, engravures) sont matérialisées par des mannequins en bois, polystyrène ou carton, fixés solidement pour ne pas flotter ni bouger. Elles proviennent des <strong>plans de réservations</strong> établis à partir des besoins des autres corps d'état (plomberie, ventilation, électricité).</li>\n<li>Les <strong>inserts</strong> sont des pièces noyées dans le béton : douilles de levage, rails d'ancrage, platines, boîtiers électriques, fourreaux, boîtes d'attentes (aciers repliés à redresser après décoffrage), rupteurs thermiques.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> écarter des aciers pour faire passer une gaine, couper une barre pour placer une réservation ou décaler un cadre sans accord modifie le fonctionnement prévu par le calcul. Le plan de ferraillage prévoit généralement des aciers de renfort autour des trémies ; tout conflit entre réservation et armatures doit être signalé au conducteur de travaux, qui interroge le bureau d'études.</div>\n<p>Le contrôle avant coulage porte sur : la conformité des diamètres et du nombre de barres, les espacements, les enrobages, les longueurs de recouvrement et d'ancrage, la position des attentes, la présence et la fixation des réservations et inserts, la propreté du fond de coffrage, l'huilage, l'étanchéité des jonctions de panneaux et l'aplomb. Ce contrôle est consigné sur une <strong>fiche d'autocontrôle</strong> ou un <strong>bon à couler</strong> signé par le chef d'équipe.</p>"
      },
      {
       "titre": "Préparer et réceptionner le béton",
       "contenu": "<p>La commande du béton se prépare à l'avance : classe de résistance, classe d'exposition, consistance, D<sub>max</sub>, volume, cadence de livraison (nombre de toupies par heure), mode de mise en place (benne à la grue, pompe, goulotte directe), heure de début. On commande un peu plus que le volume théorique pour tenir compte des pertes et des tolérances, en ajustant la dernière toupie.</p>\n<p>À chaque livraison, le chef d'équipe vérifie le <strong>bon de livraison</strong> : il doit correspondre à la commande (désignation complète), et l'heure de chargement permet de vérifier le délai de mise en œuvre. En cas de doute sur la consistance, on réalise un <strong>essai d'affaissement</strong> au cône d'Abrams. Pour les ouvrages qui le prévoient, un laboratoire ou l'entreprise confectionne des <strong>éprouvettes</strong> pour vérifier la résistance à 28 jours.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un bon de livraison indique un béton C25/30 XC1 alors que la commande était un C30/37 XF1 pour un mur extérieur exposé au gel. Le chef d'équipe refuse la toupie avant tout déchargement et appelle la centrale. Une fois coulé, un béton non conforme ne peut plus être retiré qu'en démolissant l'ouvrage.</div>"
      },
      {
       "titre": "Mettre en place et serrer le béton",
       "contenu": "<p>La mise en place doit remplir complètement le coffrage, enrober toutes les armatures et chasser l'air, sans <strong>ségrégation</strong> (séparation des gros granulats et de la pâte).</p>\n<ul>\n<li>Limiter la <strong>hauteur de chute libre</strong> : au-delà d'environ 1,5 à 2 m selon le béton et la densité des armatures, on utilise une goulotte, un tube plongeur ou les trappes de bétonnage du coffrage.</li>\n<li>Couler par <strong>couches</strong> régulières (de l'ordre de 30 à 50 cm pour un béton vibré), en répartissant le béton sur toute la longueur ; ne jamais déplacer le béton horizontalement à l'aiguille vibrante.</li>\n<li><strong>Vibrer</strong> chaque couche avec l'<strong>aiguille vibrante</strong> introduite verticalement, à intervalles réguliers, en pénétrant de quelques centimètres dans la couche précédente encore fraîche, puis en la retirant lentement. On arrête lorsque la surface devient brillante et que les bulles ne remontent plus. Éviter de toucher les armatures et le coffrage.</li>\n<li>Les dalles sont <strong>tirées à la règle</strong> (vibrante ou non) entre des repères de niveau, puis surfacées (talochées ou lissées) selon la finition demandée.</li>\n</ul>\n<p>Une <strong>reprise de bétonnage</strong> est la surface de contact entre deux bétons coulés à des moments différents. Prévue sur les plans (pied de voile, bord de dalle), elle est préparée pour assurer l'adhérence : surface rugueuse, nettoyée, débarrassée de la laitance, humidifiée sans eau stagnante. Une reprise non prévue (panne de pompe, retard de toupie) doit être traitée de la même façon et signalée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une vibration insuffisante laisse des nids de cailloux et des bullages ; une vibration excessive provoque ségrégation et remontée de laitance. Le bon geste est régulier et méthodique.</div>"
      },
      {
       "titre": "Décoffrer et désétayer",
       "contenu": "<p>Le <strong>décoffrage</strong> intervient lorsque le béton a une résistance suffisante pour supporter son propre poids et les charges éventuelles sans dommage, et pour que ses arêtes ne s'épaufrent pas.</p>\n<ul>\n<li>Pour les <strong>faces verticales</strong> non porteuses (voiles, poteaux), on décoffre souvent le lendemain du coulage, voire le jour même avec des bétons rapides en rotation de banches, si la température le permet.</li>\n<li>Pour les <strong>faces porteuses</strong> (sous-faces de dalles et de poutres), le délai est plus long et dépend de la portée, de la température, du type de ciment et des charges ; les étais restent en place ou sont reposés (<strong>réétaiement</strong>) jusqu'à ce que le béton puisse porter les charges qui lui sont appliquées, notamment celles des niveaux supérieurs.</li>\n</ul>\n<p>Les délais sont fixés dans les modes opératoires de l'entreprise ; on peut les justifier par la mesure de la résistance du béton en place (éprouvettes conservées dans les mêmes conditions que l'ouvrage, capteurs de maturométrie).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> décoffrer une banche en sécurité. 1) Vérifier l'heure de coulage et la température pour s'assurer que le délai prévu est respecté. 2) Élinguer la banche au crochet de la grue, élingues légèrement tendues, avant de toucher aux tiges. 3) Retirer les tiges de serrage et les accessoires. 4) Décoller la banche par ses vérins ou béquilles, jamais en tirant à la grue sur une banche collée. 5) Lever, déposer sur une aire de stockage stable ou directement à la position suivante, béquilles réglées pour la stabilité au vent. 6) Nettoyer et huiler la peau coffrante pour le prochain cycle.</div>"
      }
     ],
     "points_cles": [
      "Coffrages : traditionnels, modulaires manuportables, banches, coffrages de poteaux et de dalles, coffrages perdus.",
      "Poussée hydrostatique du béton frais : p = 25 × h (kN/m²) ; à comparer à la pression admissible du coffrage.",
      "Les tiges de serrage reprennent la poussée ; leur nombre et leur position ne se modifient pas.",
      "Avant coulage : armatures, enrobages, réservations, inserts, propreté et huilage vérifiés et consignés.",
      "Le bon de livraison doit correspondre à la commande ; un béton non conforme est refusé avant déchargement.",
      "Limiter la hauteur de chute, couler par couches, vibrer méthodiquement.",
      "Une reprise de bétonnage se prépare : surface rugueuse, propre, humidifiée.",
      "Décoffrage des faces porteuses et désétaiement selon les délais du mode opératoire ; réétaiement si nécessaire."
     ],
     "lexique": [
      {
       "terme": "Banche",
       "def": "Grand panneau de coffrage métallique auto-stable, manutentionné à la grue, pour voiles en béton."
      },
      {
       "terme": "Peau coffrante",
       "def": "Face du coffrage en contact avec le béton, qui détermine l'aspect du parement."
      },
      {
       "terme": "Tige de serrage",
       "def": "Tige qui relie les deux faces d'un coffrage de voile et reprend la poussée du béton."
      },
      {
       "terme": "Pression hydrostatique",
       "def": "Pression exercée par un fluide, proportionnelle à la hauteur de fluide au-dessus du point considéré."
      },
      {
       "terme": "Réservation",
       "def": "Vide ménagé dans un ouvrage en béton pour le passage de réseaux ou d'équipements."
      },
      {
       "terme": "Insert",
       "def": "Pièce noyée dans le béton lors du coulage (douille, rail, platine, fourreau)."
      },
      {
       "terme": "Ségrégation",
       "def": "Séparation des constituants du béton frais, qui crée des zones hétérogènes."
      },
      {
       "terme": "Aiguille vibrante",
       "def": "Vibreur interne plongé dans le béton frais pour le serrer et chasser l'air."
      },
      {
       "terme": "Reprise de bétonnage",
       "def": "Surface de contact entre deux bétons coulés à des moments différents."
      },
      {
       "terme": "Réétaiement",
       "def": "Remise en place d'étais sous un élément décoffré pour le soulager pendant son durcissement."
      }
     ]
    },
    {
     "id": "bgo-prefabrication-levage",
     "titre": "Préfabrication, manutention et levage",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Identifier les éléments préfabriqués du gros œuvre et leurs règles de pose",
      "Lire les caractéristiques d'une grue (charge maximale, flèche, courbe de charge) et vérifier une levée",
      "Choisir et contrôler les accessoires de levage et calculer l'effort dans les brins d'une élingue",
      "Organiser une opération de levage en sécurité : rôles, communication, conditions météorologiques",
      "Réaliser les liaisons entre éléments préfabriqués et éléments coulés en place"
     ],
     "sections": [
      {
       "titre": "Les éléments préfabriqués du gros œuvre",
       "contenu": "<p>La <strong>préfabrication</strong> consiste à fabriquer des éléments en usine ou sur une aire du chantier, puis à les mettre en place par levage. Elle améliore la qualité, réduit les délais et la pénibilité, mais impose une organisation rigoureuse : les éléments doivent arriver dans le bon ordre, être posés avec précision et liaisonnés correctement.</p>\n<table>\n<thead><tr><th>Élément</th><th>Description</th><th>Points de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Prédalles</td><td>Plaques de 5 à 6 cm armées, coffrage perdu des dalles</td><td>Étaiement provisoire, appuis, sens de pose, aciers de couture et chapeaux ajoutés</td></tr>\n<tr><td>Poutrelles et entrevous</td><td>Planchers posés à la main ou à la petite grue</td><td>Entraxe, appuis, étaiement selon fabricant</td></tr>\n<tr><td>Prémurs (murs à coffrage intégré)</td><td>Deux parois minces reliées par des raidisseurs, remplies de béton sur place</td><td>Stabilisation par étais tire-pousse, vitesse de remplissage limitée, liaisons verticales</td></tr>\n<tr><td>Escaliers préfabriqués</td><td>Volées livrées complètes</td><td>Appuis, désolidarisation acoustique, protection des marches</td></tr>\n<tr><td>Linteaux, appuis, poutres</td><td>Éléments linéaires</td><td>Longueur d'appui, sens de pose (marquage haut et bas)</td></tr>\n<tr><td>Balcons, acrotères, éléments de façade</td><td>Éléments architectoniques</td><td>Fixations, rupteurs, réglages, protection des arêtes</td></tr>\n</tbody>\n</table>\n<p>Chaque élément est accompagné d'un <strong>plan de pose</strong> ou de calepinage, d'une étiquette d'identification (repère, poids, sens) et d'une notice de manutention précisant les points de levage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un linteau ou une poutre précontrainte posés à l'envers peuvent se rompre sous leur propre charge, car leurs armatures ne sont pas dans la zone tendue. On respecte le marquage « haut » ou le repère de pose, et on refuse un élément sans marquage clair.</div>"
      },
      {
       "titre": "Les appareils de levage",
       "contenu": "<p>Sur un chantier de gros œuvre, le levage est principalement assuré par :</p>\n<ul>\n<li>la <strong>grue à tour</strong>, fixe ou à montage automatisé (GMA), qui dessert toute la zone de travail ;</li>\n<li>la <strong>grue mobile</strong> (sur pneus ou chenilles), pour des levées ponctuelles lourdes ;</li>\n<li>la <strong>grue auxiliaire</strong> de camion, pour le déchargement ;</li>\n<li>le chariot télescopique et le monte-matériaux pour les levées légères.</li>\n</ul>\n<p>La conduite de ces appareils exige une <strong>autorisation de conduite</strong> délivrée par l'employeur, sur la base d'une formation, en pratique d'un <strong>CACES</strong> selon les recommandations de l'Assurance maladie : R487 pour les grues à tour, R483 pour les grues mobiles, R490 pour les grues auxiliaires, R482 pour les engins de chantier.</p>\n<p>La capacité d'une grue n'est pas une valeur unique : la <strong>charge maximale</strong> diminue quand la <strong>portée</strong> (distance entre l'axe de rotation et le crochet) augmente. Le constructeur fournit une <strong>courbe de charge</strong> ou un tableau, affiché dans la cabine. Les grues modernes sont équipées de <strong>limiteurs de charge et de moment</strong> qui bloquent les mouvements dangereux, mais ces dispositifs ne dispensent pas de préparer la levée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'une prédalle peut être posée. Dimensions 6,00 × 2,40 m, épaisseur 0,06 m. 1) Volume : 6,00 × 2,40 × 0,06 = 0,864 m³. 2) Masse : 0,864 × 2 500 ≈ 2 160 kg, soit environ 2,2 t. 3) Ajouter la masse des accessoires (palonnier, élingues), par exemple 0,15 t : 2,35 t. 4) Repérer sur le plan d'installation de chantier la portée de la zone de pose : 32 m. 5) Lire la courbe de charge : à 32 m, la grue lève par exemple 2,6 t. 6) Conclusion : la levée est possible, avec une faible marge ; on vérifie aussi le point de chargement sur le camion, qui peut être plus éloigné.</div>"
      },
      {
       "titre": "Accessoires de levage et calcul d'élingage",
       "contenu": "<p>Les <strong>accessoires de levage</strong> relient la charge au crochet : élingues en câble, en chaîne ou textiles, manilles, crochets, palonniers, pinces, fourches à palettes, bennes à béton. Chacun porte une <strong>CMU</strong> (charge maximale d'utilisation) marquée, et doit faire l'objet de vérifications périodiques. On écarte immédiatement un accessoire endommagé : câble avec torons cassés ou écrasé, chaîne déformée, sangle coupée ou sans étiquette, crochet sans linguet.</p>\n<p>Quand on élingue avec plusieurs brins inclinés, l'effort dans chaque brin augmente avec l'angle d'ouverture. Pour une charge de poids P soulevée par n brins porteurs symétriques faisant chacun un angle β avec la verticale, l'effort dans chaque brin vaut T = P / (n × cos β).</p>\n<table>\n<thead><tr><th>Angle au sommet entre deux brins</th><th>Angle β de chaque brin avec la verticale</th><th>Coefficient 1 / cos β</th></tr></thead>\n<tbody>\n<tr><td>0°</td><td>0°</td><td>1,00</td></tr>\n<tr><td>60°</td><td>30°</td><td>1,15</td></tr>\n<tr><td>90°</td><td>45°</td><td>1,41</td></tr>\n<tr><td>120°</td><td>60°</td><td>2,00</td></tr>\n</tbody>\n</table>\n<p>On limite l'angle au sommet à 90° dans la pratique courante, 120° étant un maximum absolu. Les fabricants d'élingues indiquent d'ailleurs la CMU selon l'angle.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lever un linteau de 1,6 t avec une élingue à deux brins, angle au sommet de 90°. 1) β = 45°, cos 45° ≈ 0,707. 2) Effort par brin : 1,6 / (2 × 0,707) ≈ 1,13 t. 3) Choisir une élingue dont chaque brin a une CMU d'au moins 1,13 t pour cet angle (en pratique une élingue de CMU 1,5 t par brin). 4) Si l'on réduisait l'angle à 60° (brins plus longs), l'effort tomberait à 1,6 / (2 × 0,866) ≈ 0,92 t.</div>"
      },
      {
       "titre": "Organiser une opération de levage",
       "contenu": "<p>Une levée réussie repose sur une répartition claire des rôles :</p>\n<ul>\n<li>le <strong>grutier</strong> conduit l'appareil et refuse une levée dangereuse ;</li>\n<li>l'<strong>élingueur</strong> choisit et pose les accessoires, vérifie l'équilibre de la charge ;</li>\n<li>le <strong>chef de manœuvre</strong> (ou signaleur) guide le grutier lorsqu'il ne voit pas la charge, par <strong>gestes de commandement</strong> normalisés ou par radio, sur un canal dédié.</li>\n</ul>\n<p>Règles de base :</p>\n<ul>\n<li>ne jamais stationner ni circuler sous une charge suspendue ; baliser la zone d'évolution ;</li>\n<li>lever de quelques centimètres, contrôler l'équilibre et l'élingage, puis poursuivre ;</li>\n<li>guider la charge par une <strong>corde de guidage</strong> et non à la main, jamais en se plaçant entre la charge et un obstacle ;</li>\n<li>respecter la <strong>vitesse de vent</strong> maximale en service fixée par le constructeur de la grue et suivre l'<strong>anémomètre</strong> ; les charges à grande surface (banches, panneaux, prémurs) sont particulièrement sensibles au vent et peuvent imposer une limite plus basse ;</li>\n<li>respecter les zones d'interdiction de survol (voies publiques, établissements voisins, lignes électriques) définies dans le plan d'installation de chantier, avec un dispositif de limitation de zone si nécessaire ;</li>\n<li>ne pas laisser une charge suspendue sans surveillance.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chaque matin, le grutier réalise les vérifications de prise de poste (essais des fins de course, des freins, du limiteur) et les consigne. Le chef d'équipe organise les levées de la journée en tenant compte de la météo : les poses de prémurs ou de banches sont programmées le matin quand un coup de vent est annoncé l'après-midi.</div>"
      },
      {
       "titre": "Poser et liaisonner les éléments préfabriqués",
       "contenu": "<p>La pose d'un élément préfabriqué suit une séquence constante : préparation des appuis (niveaux, cales, mortier de pose), réception de l'élément au crochet, guidage, pose sur les appuis ou contre les cales, réglage (aplomb, alignement, niveau), <strong>stabilisation provisoire</strong> (étais tire-pousse, étaiement), puis décrochage. On ne décroche jamais un élément tant qu'il n'est pas stabilisé.</p>\n<p>Les <strong>liaisons</strong> rendent ensuite la structure monolithique :</p>\n<ul>\n<li>pour les prédalles : aciers de couture entre plaques, chapeaux sur appuis, chaînages périphériques, puis coulage de la dalle de compression qui enrobe le tout ;</li>\n<li>pour les prémurs : aciers de liaison verticaux entre panneaux et en angle, attentes en pied, remplissage de béton par passes successives à la vitesse prévue par le fabricant pour ne pas faire éclater les parois ;</li>\n<li>pour les escaliers et paliers : appuis sur corbeaux ou réservations, avec des appuis résilients si une désolidarisation acoustique est demandée ;</li>\n<li>pour les poutres et poteaux : clavetages au mortier ou béton de liaison, platines, goujons.</li>\n</ul>\n<p>Les tolérances de pose sont serrées (quelques millimètres sur les alignements) car les écarts se cumulent et gênent les corps d'état suivants.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un élément préfabriqué n'apporte sa résistance qu'une fois ses liaisons réalisées. Pendant la phase provisoire, la stabilité repose entièrement sur l'étaiement prévu par le plan de pose.</div>"
      }
     ],
     "points_cles": [
      "Préfabriqués courants : prédalles, poutrelles, prémurs, escaliers, linteaux, balcons, éléments de façade.",
      "Respecter le plan de pose, le repère et le marquage de sens de chaque élément.",
      "La charge admissible d'une grue diminue avec la portée : lire la courbe de charge.",
      "Conduite des grues et engins : autorisation de conduite de l'employeur, en pratique CACES (R487 grue à tour, R483 grue mobile, R490 grue auxiliaire, R482 engins).",
      "Effort par brin : T = P / (n × cos β) ; angle au sommet limité à 90° en pratique, 120° au maximum.",
      "Accessoires marqués de leur CMU, vérifiés, écartés s'ils sont endommagés.",
      "Rôles : grutier, élingueur, chef de manœuvre ; jamais personne sous une charge.",
      "Vitesse de vent maximale fixée par le constructeur, plus basse pour les charges à grande surface."
     ],
     "lexique": [
      {
       "terme": "Préfabrication",
       "def": "Fabrication d'éléments de construction hors de leur emplacement définitif, puis mise en place par levage."
      },
      {
       "terme": "Prémur",
       "def": "Mur préfabriqué composé de deux parois minces reliées par des raidisseurs, rempli de béton sur place."
      },
      {
       "terme": "Courbe de charge",
       "def": "Graphique ou tableau donnant la charge maximale d'une grue selon la portée."
      },
      {
       "terme": "Limiteur de moment",
       "def": "Dispositif de sécurité qui empêche de dépasser la capacité de la grue."
      },
      {
       "terme": "CMU",
       "def": "Charge maximale d'utilisation d'un accessoire de levage."
      },
      {
       "terme": "Élingue",
       "def": "Accessoire en câble, chaîne ou textile reliant la charge au crochet."
      },
      {
       "terme": "Palonnier",
       "def": "Poutre de levage qui répartit la charge sur plusieurs points d'accrochage."
      },
      {
       "terme": "Chef de manœuvre",
       "def": "Personne qui guide le grutier par gestes ou radio quand il ne voit pas la charge."
      },
      {
       "terme": "Étai tire-pousse",
       "def": "Étai réglable qui stabilise un élément vertical en traction comme en compression."
      },
      {
       "terme": "Clavetage",
       "def": "Remplissage au mortier ou au béton d'un joint entre éléments préfabriqués pour les solidariser."
      }
     ]
    },
    {
     "id": "bgo-finitions",
     "titre": "Ouvrages de finition du gros œuvre : enduits, chapes et dallages",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Choisir un enduit extérieur selon le support et l'exposition, et en connaître les règles d'application",
      "Distinguer chape adhérente, désolidarisée et flottante, et leurs usages",
      "Décrire la réalisation d'un dallage sur terre-plein et de ses joints",
      "Préparer un support et respecter les délais avant revêtement",
      "Contrôler la planéité et les niveaux d'un ouvrage de finition"
     ],
     "sections": [
      {
       "titre": "Le rôle des ouvrages de finition",
       "contenu": "<p>Le gros œuvre ne s'arrête pas à la structure. L'entreprise réalise aussi des ouvrages qui donnent au bâtiment son aspect et préparent les supports des corps d'état suivants : <strong>enduits</strong> de façade, <strong>chapes</strong> et <strong>dallages</strong>, appuis et seuils, ragréages et reprises de parements de béton. Ces ouvrages sont visibles et contrôlés à la réception : ils engagent l'image de l'entreprise.</p>\n<p>Les textes de référence sont principalement le <strong>NF DTU 26.1</strong> (enduits aux mortiers de ciments, de chaux et de mélange plâtre et chaux aérienne), le <strong>NF DTU 26.2</strong> (chapes et dalles à base de liants hydrauliques) et le <strong>NF DTU 13.3</strong> (dallages). Pour les parements de béton, la norme <strong>NF P 18-503</strong> définit des catégories de parements et des critères de défauts admissibles.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une finition ne vaut que par son support. Un enduit sur une maçonnerie hors d'aplomb ou une chape sur un plancher mal arasé en hériteront les défauts, aggravés par les surépaisseurs.</div>"
      },
      {
       "titre": "Les enduits extérieurs",
       "contenu": "<p>L'enduit extérieur assure l'<strong>imperméabilisation</strong> de la façade, protège la maçonnerie et lui donne son aspect (couleur, texture). On distingue :</p>\n<ul>\n<li>les <strong>enduits traditionnels</strong> en trois couches : le <strong>gobetis</strong> (couche d'accrochage très fluide), le <strong>corps d'enduit</strong> (qui assure l'imperméabilité et le dressage), la <strong>couche de finition</strong> (aspect) ;</li>\n<li>les <strong>enduits monocouches</strong> industriels, appliqués en une seule couche en deux passes « frais dans frais », très répandus sur les maisons et les petits collectifs. Ils sont certifiés et classés selon leurs caractéristiques (désignation OC1, OC2, OC3 de la plus faible à la plus forte résistance, choisie en fonction du support) ;</li>\n<li>les <strong>enduits à la chaux</strong>, perméables à la vapeur d'eau, utilisés notamment sur les maçonneries anciennes.</li>\n</ul>\n<p>Les supports sont classés par le DTU selon leur résistance et leur capacité d'absorption ; le classement du support détermine le type d'enduit admis. On applique un enduit plus « faible » (plus souple) que son support, jamais l'inverse.</p>\n<table>\n<thead><tr><th>Règle d'application courante</th><th>Raison</th></tr></thead>\n<tbody>\n<tr><td>Température entre environ 5 °C et 30 °C, pas d'application sur support gelé ou en plein soleil ou par vent desséchant</td><td>Éviter le gel ou le grillage du mortier</td></tr>\n<tr><td>Support propre, dépoussiéré, humidifié s'il est très absorbant</td><td>Assurer l'adhérence</td></tr>\n<tr><td>Épaisseur conforme à l'avis technique ou au DTU (pour un monocouche, de l'ordre de 10 mm au minimum en tout point, 15 mm en moyenne)</td><td>Garantir l'imperméabilité</td></tr>\n<tr><td>Traitement des points singuliers : arrêts sur profilés, baguettes d'angle, renforts par treillis aux jonctions de matériaux différents et aux angles de baies</td><td>Prévenir la fissuration</td></tr>\n<tr><td>Arrêt en pied de façade au-dessus du sol, avec un profilé</td><td>Éviter les remontées d'eau dans l'enduit</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un enduit appliqué sans traitement à la jonction entre maçonnerie et béton (linteau, chaînage, about de plancher) fissure presque toujours à cet endroit, car les deux matériaux ne bougent pas de la même façon. Un treillis de renfort noyé dans l'enduit, débordant largement de part et d'autre, limite ce risque.</div>"
      },
      {
       "titre": "Les chapes",
       "contenu": "<p>Une <strong>chape</strong> est une couche de mortier ou de micro-béton coulée sur un plancher pour obtenir une surface plane et au bon niveau, prête à recevoir un revêtement de sol (carrelage, parquet, sol souple). Selon sa liaison avec le support, on distingue :</p>\n<table>\n<thead><tr><th>Type</th><th>Principe</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Chape adhérente</td><td>Collée au support par une barbotine ou un primaire d'accrochage</td><td>Faibles épaisseurs, supports sains et rugueux</td></tr>\n<tr><td>Chape désolidarisée</td><td>Séparée du support par une couche de désolidarisation (film polyéthylène)</td><td>Support fissuré ou incompatible, recherche d'indépendance</td></tr>\n<tr><td>Chape flottante</td><td>Posée sur une sous-couche isolante thermique ou acoustique, sans contact avec les murs</td><td>Isolation sous chape, bruits d'impact, planchers chauffants</td></tr>\n</tbody>\n</table>\n<p>Les épaisseurs minimales et l'éventuel armement (treillis) dépendent du type de chape et de son support ; elles sont fixées par le NF DTU 26.2 et, pour les chapes fluides (à base de ciment ou de sulfate de calcium, dites anhydrite), par leurs avis techniques.</p>\n<p>La chape flottante exige une <strong>bande périphérique</strong> compressible sur tout le pourtour et autour des canalisations et huisseries : un seul pont rigide entre la chape et le mur suffit à transmettre les bruits d'impact.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déterminer l'épaisseur moyenne et le volume d'une chape. Pièce de 5,20 × 4,00 m. Niveau fini du revêtement : + 0,00 (trait de niveau à + 1,00 m). Revêtement : carrelage de 1 cm, colle comprise. Relevés sur la dalle brute, depuis le trait de niveau : 1,065 m ; 1,070 m ; 1,060 m ; 1,075 m ; 1,070 m. 1) Niveau du dessus de chape : − 0,01 m, soit 1,010 m sous le trait. 2) Épaisseurs locales : 5,5 ; 6,0 ; 5,0 ; 6,5 ; 6,0 cm. 3) Moyenne : 29 / 5 = 5,8 cm. 4) Volume : 5,20 × 4,00 × 0,058 ≈ 1,21 m³, majoré de quelques pour cent pour les pertes. 5) Vérifier que l'épaisseur minimale relevée (5,0 cm) respecte le minimum du type de chape prévu.</div>"
      },
      {
       "titre": "Les dallages sur terre-plein",
       "contenu": "<p>Un <strong>dallage</strong> est un ouvrage en béton coulé directement sur le sol support, par l'intermédiaire d'une <strong>forme</strong>. Il porte les charges en les répartissant sur le sol. Le NF DTU 13.3 traite les dallages à usage industriel ou assimilé, les dallages de bâtiments d'habitation et les dallages de locaux commerciaux, de bureaux et de stockage.</p>\n<p>Étapes de réalisation :</p>\n<ol>\n<li>préparation de la <strong>plate-forme</strong> : décapage, purge des mauvais sols, compactage ;</li>\n<li>mise en œuvre de la <strong>forme</strong> en matériaux granulaires (grave, tout-venant), compactée par couches, avec contrôle de portance si prévu ;</li>\n<li>pose de l'isolant éventuel et d'un <strong>film polyéthylène</strong> qui évite la perte de laitance et limite les remontées d'humidité ;</li>\n<li>mise en place des armatures (treillis soudés sur cales) ou béton renforcé de fibres selon le projet ;</li>\n<li>bétonnage, tirage à la règle, <strong>surfaçage</strong> (talochage ou lissage à l'hélicoptère pour les dallages industriels), éventuellement <strong>saupoudrage</strong> d'un durcisseur de surface ;</li>\n<li>cure immédiate ;</li>\n<li>réalisation des <strong>joints</strong> : joints de retrait sciés à une profondeur d'environ un tiers de l'épaisseur dans les heures suivant le coulage, joints de construction aux arrêts de coulage, joints d'isolement autour des poteaux et le long des murs.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un entrepôt, le sciage des joints de retrait est programmé dès que le béton supporte le passage de la scie sans arrachement des granulats, souvent le lendemain matin. Un sciage trop tardif laisse le dallage fissurer de lui-même, de manière aléatoire : la fissuration n'est plus maîtrisée et les réparations sont coûteuses.</div>"
      },
      {
       "titre": "Préparer les supports et respecter les délais",
       "contenu": "<p>Les ouvrages de finition et les revêtements qui suivent exigent des supports secs, propres et stables. Les délais d'attente sont fixés par les DTU ou les avis techniques et ne se raccourcissent pas sans précautions.</p>\n<ul>\n<li>Avant l'enduit : la maçonnerie doit être <strong>sèche en surface et stabilisée</strong> (délai de quelques semaines après montage en général), les menuiseries extérieures ou leurs précadres posés, les appuis réalisés.</li>\n<li>Avant la chape : le plancher doit être propre, débarrassé des plâtres et gravats, les réseaux encastrés posés et fixés, et le trait de niveau reporté dans chaque pièce.</li>\n<li>Avant les revêtements de sol : la chape doit avoir atteint un <strong>taux d'humidité résiduelle</strong> compatible avec le revêtement (mesuré à l'humidimètre ou à la bombe à carbure), surtout pour le parquet et les sols souples ; les chapes fluides à base de sulfate de calcium demandent un ponçage de la pellicule de surface.</li>\n</ul>\n<p>Les <strong>ragréages</strong> (enduits de lissage de sol) et les <strong>reprises de parements</strong> (rebouchage des trous de banches, ragréage des nids de cailloux, ponçage des balèvres) complètent les finitions du gros œuvre. Ils se réalisent avec des produits adaptés au support et à leur destination.</p>"
      },
      {
       "titre": "Contrôler les finitions",
       "contenu": "<p>Les contrôles de planéité et de niveau sont les plus importants pour les ouvrages de finition. On distingue :</p>\n<ul>\n<li>la <strong>planéité générale</strong>, mesurée sous une règle de 2 m déplacée dans toutes les directions (écart maximal sous la règle) ;</li>\n<li>la <strong>planéité locale</strong>, mesurée sous un réglet de 20 cm (désaffleurements, bosses) ;</li>\n<li>le <strong>niveau</strong> par rapport au trait de niveau ou au niveau de référence du projet ;</li>\n<li>pour les enduits : l'épaisseur (par sondage ou à la jauge pendant l'application), l'aspect, l'absence de fissures et de faïençage.</li>\n</ul>\n<p>Les valeurs admissibles dépendent de l'ouvrage et du revêtement qu'il recevra : elles sont données par les DTU (par exemple, une chape destinée à un revêtement collé a des exigences plus serrées qu'une chape destinée à un carrelage scellé). Le CCTP peut renforcer ces exigences, par exemple pour un dallage industriel parcouru par des chariots élévateurs.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réception d'une chape avant carrelage collé. 1) Vérifier la propreté et l'absence de fissures. 2) Mesurer la planéité sous la règle de 2 m en croisant les directions, noter l'écart maximal. 3) Mesurer sous le réglet de 20 cm sur les zones suspectes. 4) Vérifier le niveau en cinq points au moins par pièce et au droit des seuils. 5) Comparer aux tolérances du DTU et du CCTP. 6) Si une zone est hors tolérance, la signaler par écrit et prévoir un ragréage ou un ponçage avant l'intervention du carreleur, qui peut refuser un support non conforme.</div>"
      }
     ],
     "points_cles": [
      "Enduits : NF DTU 26.1 ; chapes : NF DTU 26.2 ; dallages : NF DTU 13.3 ; parements de béton : NF P 18-503.",
      "Enduit traditionnel en trois couches (gobetis, corps d'enduit, finition) ou monocouche en deux passes.",
      "Un enduit doit être moins résistant que son support ; renforts par treillis aux jonctions de matériaux.",
      "Application des enduits entre environ 5 et 30 °C, sur support propre, sans gel ni soleil direct.",
      "Chapes adhérente, désolidarisée ou flottante ; bande périphérique continue pour une chape flottante.",
      "Dallage : plate-forme, forme compactée, film, armatures, béton, surfaçage, cure, joints sciés rapidement.",
      "Respecter les délais de séchage et l'humidité résiduelle avant revêtement.",
      "Planéité contrôlée sous la règle de 2 m et sous le réglet de 20 cm, niveaux depuis le trait de niveau."
     ],
     "lexique": [
      {
       "terme": "Gobetis",
       "def": "Première couche d'un enduit traditionnel, très fluide, qui assure l'accrochage."
      },
      {
       "terme": "Enduit monocouche",
       "def": "Enduit industriel appliqué en une seule couche, en deux passes, qui assure imperméabilité et décoration."
      },
      {
       "terme": "Faïençage",
       "def": "Réseau de fines fissures superficielles sur un enduit ou un béton."
      },
      {
       "terme": "Chape",
       "def": "Couche de mortier destinée à niveler un plancher avant revêtement."
      },
      {
       "terme": "Chape flottante",
       "def": "Chape posée sur une sous-couche isolante, sans contact rigide avec la structure."
      },
      {
       "terme": "Bande périphérique",
       "def": "Bande compressible posée le long des murs pour désolidariser la chape."
      },
      {
       "terme": "Dallage",
       "def": "Ouvrage en béton coulé sur le sol par l'intermédiaire d'une forme et reposant sur lui."
      },
      {
       "terme": "Forme",
       "def": "Couche de matériaux granulaires compactés sous un dallage."
      },
      {
       "terme": "Joint de retrait scié",
       "def": "Entaille pratiquée dans un dallage jeune pour localiser la fissuration de retrait."
      },
      {
       "terme": "Ragréage",
       "def": "Enduit de lissage qui corrige les petits défauts de planéité d'un sol ou d'un parement."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Préparer, organiser et encadrer le chantier",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bgo-preparation-chantier",
     "titre": "Préparer le chantier et concevoir son installation",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Recenser les informations et les démarches nécessaires à l'ouverture d'un chantier de gros œuvre",
      "Situer le rôle du coordonnateur SPS, du PGC et du PPSPS dans la préparation",
      "Concevoir les éléments d'un plan d'installation de chantier (PIC)",
      "Implanter une grue à tour en tenant compte des charges, des zones de survol et des contraintes du site",
      "Dimensionner les installations d'hygiène et les réseaux provisoires"
     ],
     "sections": [
      {
       "titre": "La période de préparation",
       "contenu": "<p>Entre la signature du marché et le démarrage effectif des travaux, l'entreprise dispose d'une <strong>période de préparation</strong>, généralement fixée par le CCAP (souvent un à deux mois). C'est le moment où se décident la plupart des choix qui feront réussir ou échouer le chantier : méthodes, moyens de levage, coffrages, planning, approvisionnements.</p>\n<p>Le conducteur de travaux pilote la préparation, mais le chef de chantier et le chef d'équipe y participent de plus en plus. Les tâches principales sont :</p>\n<ul>\n<li>l'<strong>étude du dossier</strong> : plans, CCTP, étude de sol, rapport initial du bureau de contrôle, PGC ;</li>\n<li>la <strong>visite du site</strong> : accès, voisinage, réseaux existants, nature du terrain, contraintes (école, voie ferrée, arbres protégés) ;</li>\n<li>l'<strong>étude des méthodes</strong> : choix des coffrages, des moyens de levage, du phasage, des rotations ;</li>\n<li>le <strong>plan d'installation de chantier</strong> ;</li>\n<li>le <strong>planning</strong> d'exécution et les plannings de détail ;</li>\n<li>la consultation et la commande des <strong>fournisseurs et sous-traitants</strong> (béton, aciers, préfabriqués, location de grue) ;</li>\n<li>la rédaction du <strong>PPSPS</strong> et les démarches administratives (DICT, autorisations de voirie).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une heure passée en préparation en économise beaucoup sur le chantier. Les aléas les plus coûteux (grue mal placée, accès impossible pour les toupies, réseau découvert) se détectent sur plan et en visite.</div>"
      },
      {
       "titre": "La coordination sécurité : PGC et PPSPS",
       "contenu": "<p>Lorsque plusieurs entreprises (y compris sous-traitants et travailleurs indépendants) interviennent sur un chantier, le maître d'ouvrage doit désigner un <strong>coordonnateur en matière de sécurité et de protection de la santé (coordonnateur SPS)</strong>. Les chantiers sont classés en trois catégories (de la catégorie 1, la plus importante, à la catégorie 3) selon leur volume de travail et le nombre d'intervenants.</p>\n<table>\n<thead><tr><th>Document</th><th>Rédacteur</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>PGC (plan général de coordination)</td><td>Coordonnateur SPS</td><td>Règles communes du chantier : accès, circulation, installations communes, levage, protections collectives, mesures de coordination entre entreprises</td></tr>\n<tr><td>PPSPS (plan particulier de sécurité et de protection de la santé)</td><td>Chaque entreprise</td><td>Analyse des risques propres à ses travaux et mesures de prévention, organisation des secours, installations d'hygiène</td></tr>\n<tr><td>Registre-journal de la coordination</td><td>Coordonnateur SPS</td><td>Observations, visites, décisions</td></tr>\n<tr><td>DIUO (dossier d'interventions ultérieures sur l'ouvrage)</td><td>Coordonnateur SPS</td><td>Informations utiles pour l'entretien futur de l'ouvrage en sécurité</td></tr>\n</tbody>\n</table>\n<p>Le coordonnateur organise une <strong>inspection commune</strong> avec chaque entreprise avant son intervention. Pour le gros œuvre, souvent titulaire des installations communes (base vie, grue, clôtures, protections de bord de dalle), les responsabilités sont lourdes : ces équipements servent ensuite à tous les corps d'état.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le PPSPS n'est pas un document type à recopier. Il doit décrire le chantier réel : son adresse, son hôpital de référence, ses risques particuliers (talus, ligne électrique, voisinage, amiante dans un bâtiment à démolir). Un PPSPS générique est inutile en cas d'accident et peut être refusé par le coordonnateur.</div>"
      },
      {
       "titre": "Le plan d'installation de chantier",
       "contenu": "<p>Le <strong>plan d'installation de chantier (PIC)</strong> est un plan de masse du terrain, à une échelle de l'ordre du 1/200 ou du 1/500, sur lequel on représente toutes les installations provisoires. Il évolue selon les phases du chantier (terrassement, gros œuvre, second œuvre).</p>\n<table>\n<thead><tr><th>Élément</th><th>Règles de placement</th></tr></thead>\n<tbody>\n<tr><td>Clôture et accès</td><td>Clôture continue, portails pour véhicules et piétons séparés, panneau de chantier visible de la voie publique</td></tr>\n<tr><td>Voies de circulation</td><td>Largeur et portance suffisantes pour les toupies et camions, aire de retournement, pente limitée, séparation des piétons</td></tr>\n<tr><td>Grue</td><td>Couvrir les zones de pose et de stockage, éviter le survol interdit, distance de sécurité aux fouilles et aux lignes électriques</td></tr>\n<tr><td>Aires de stockage</td><td>Dans le rayon de la grue, sur sol stabilisé, par type de matériau (aciers, coffrages, préfabriqués)</td></tr>\n<tr><td>Aire de façonnage des armatures, centrale de malaxage éventuelle</td><td>À proximité du stockage et sous la grue</td></tr>\n<tr><td>Base vie</td><td>Hors du rayon de chute des charges, près de l'entrée, raccordée aux réseaux</td></tr>\n<tr><td>Bennes à déchets</td><td>Accessibles aux camions, bien identifiées par type de déchet</td></tr>\n<tr><td>Réseaux provisoires</td><td>Tracé de l'alimentation électrique (armoires), de l'eau, des évacuations</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un chantier urbain, la parcelle est entièrement occupée par le bâtiment. Le PIC prévoit alors des livraisons en flux tendu depuis la rue (autorisation de voirie avec horaires), une base vie installée dans des bungalows superposés, puis déplacée dans le sous-sol dès qu'il est couvert, et des bennes remplacées par des big-bags enlevés quotidiennement.</div>"
      },
      {
       "titre": "Implanter la grue à tour",
       "contenu": "<p>Le choix et l'emplacement de la grue sont des décisions majeures. On choisit la grue en fonction de la <strong>portée</strong> nécessaire, de la <strong>charge la plus lourde</strong> à poser à la portée la plus défavorable (banche, benne pleine, prémur), de la <strong>hauteur sous crochet</strong> et des contraintes de montage.</p>\n<p>L'implantation tient compte :</p>\n<ul>\n<li>de la <strong>couverture</strong> de toutes les zones de travail, de stockage et de déchargement ;</li>\n<li>des <strong>interférences</strong> avec d'autres grues (chantiers voisins) qui imposent des hauteurs différentes et des dispositifs anticollision ;</li>\n<li>des <strong>zones interdites au survol</strong> (établissements recevant du public, voies ferrées, propriétés voisines sans accord), gérées par un limiteur de zone ;</li>\n<li>de la distance aux <strong>lignes électriques</strong> aériennes, réglementée selon leur tension ;</li>\n<li>du <strong>sol d'appui</strong> : la grue repose sur un massif ou sur un lest posé sur un sol dont la portance a été vérifiée, à distance des fouilles et talus ;</li>\n<li>du démontage final : la grue doit pouvoir être démontée lorsque le bâtiment est construit autour d'elle.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la couverture sur un PIC au 1/200. 1) Tracer au compas, depuis l'axe de la grue, le cercle de la flèche (par exemple 40 m, soit 20 cm sur le plan). 2) Vérifier que tous les angles du bâtiment, l'aire de stockage et la zone de déchargement des camions sont à l'intérieur. 3) Tracer le cercle correspondant à la portée où la grue lève la charge la plus lourde (par exemple 2,9 t jusqu'à 30 m) et vérifier que les zones de pose de ces charges s'y trouvent. 4) Hachurer les zones interdites au survol et vérifier qu'aucune trajectoire nécessaire ne les traverse. 5) Si un point n'est pas couvert, déplacer la grue, choisir une flèche plus longue ou prévoir une grue mobile ponctuelle.</div>"
      },
      {
       "titre": "Base vie et réseaux provisoires",
       "contenu": "<p>L'employeur doit mettre à disposition des travailleurs des <strong>installations d'hygiène</strong> conformes au Code du travail : vestiaires, lavabos avec eau chaude et froide, sanitaires, local de restauration ou réfectoire, local permettant de s'abriter en cas d'intempéries, eau potable. Le nombre d'équipements dépend de l'effectif présent. Sur les chantiers d'une certaine importance, ces installations sont souvent communes et prévues au PGC.</p>\n<p>Les besoins en réseaux provisoires se déterminent à partir des matériels prévus :</p>\n<ul>\n<li><strong>électricité</strong> : puissance de la grue, des bungalows (chauffage, eau chaude), de l'éclairage, des outils (vibreurs, scies, bétonnière), avec un coffret de chantier et des armoires divisionnaires équipées de protections différentielles ;</li>\n<li><strong>eau</strong> : consommation des installations d'hygiène, du nettoyage des outils, de l'arrosage du béton ;</li>\n<li><strong>évacuations</strong> : eaux usées des sanitaires raccordées ou cabines autonomes vidangées, bac de décantation pour les eaux de lavage des bennes et toupies, qui ne doivent pas être rejetées dans le réseau d'eaux pluviales.</li>\n</ul>\n<p>Les installations électriques provisoires sont vérifiées par un organisme ou une personne qualifiée à leur mise en service, et les interventions sur ces installations sont réservées aux personnes habilitées.</p>"
      },
      {
       "titre": "Préparer les approvisionnements et le matériel",
       "contenu": "<p>La dernière étape de la préparation consiste à établir la liste des <strong>matériels</strong> (grue, banches, étais, coffrages de dalles, échafaudages, protections collectives, petit outillage) et des <strong>approvisionnements</strong> (béton, aciers, blocs, préfabriqués) avec leurs dates de besoin. On s'appuie sur le planning et sur les délais des fournisseurs : les préfabriqués et les aciers façonnés demandent plusieurs semaines, alors que le béton se commande la veille.</p>\n<p>Le chef de chantier vérifie aussi les conditions de <strong>réception</strong> sur le site : horaires autorisés de livraison, poids et gabarit des camions admissibles, moyens de déchargement disponibles, lieu de stockage prévu sur le PIC.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir une fiche de besoins pour la semaine. 1) Lire sur le planning les tâches de la semaine (exemple : voiles du niveau R+1, coffrage de dalle). 2) Pour chaque tâche, extraire les quantités du métré : 42 m³ de béton pour les voiles, 2,1 t d'aciers façonnés, 120 m² de coffrage de dalle. 3) Traduire en besoins : nombre de toupies et créneaux, livraison des aciers deux jours avant le ferraillage, nombre d'étais et de panneaux disponibles en rotation. 4) Vérifier la disponibilité du matériel (banches libérées du niveau inférieur). 5) Passer les commandes avec dates et heures, et les noter dans le rapport hebdomadaire.</div>"
      }
     ],
     "points_cles": [
      "La période de préparation fixe méthodes, moyens, planning, approvisionnements et documents de sécurité.",
      "Le coordonnateur SPS rédige le PGC ; chaque entreprise rédige son PPSPS adapté au chantier réel.",
      "Le DIUO rassemble les informations pour les interventions ultérieures sur l'ouvrage.",
      "Le PIC représente clôture, accès, voies, grue, stockages, base vie, bennes et réseaux provisoires, par phase.",
      "La grue se choisit selon la portée, la charge la plus lourde à la portée la plus défavorable, la hauteur et le démontage.",
      "Zones interdites au survol, lignes électriques et portance du sol conditionnent l'implantation de la grue.",
      "Installations d'hygiène obligatoires : vestiaires, lavabos, sanitaires, réfectoire, eau potable.",
      "Les approvisionnements se planifient selon les délais des fournisseurs et les conditions de livraison du site."
     ],
     "lexique": [
      {
       "terme": "Période de préparation",
       "def": "Temps prévu au marché entre la notification et le démarrage des travaux pour organiser le chantier."
      },
      {
       "terme": "Coordonnateur SPS",
       "def": "Personne désignée par le maître d'ouvrage pour coordonner la prévention entre les entreprises."
      },
      {
       "terme": "PGC",
       "def": "Plan général de coordination rédigé par le coordonnateur SPS."
      },
      {
       "terme": "PPSPS",
       "def": "Plan particulier de sécurité et de protection de la santé rédigé par chaque entreprise."
      },
      {
       "terme": "DIUO",
       "def": "Dossier d'interventions ultérieures sur l'ouvrage."
      },
      {
       "terme": "PIC",
       "def": "Plan d'installation de chantier représentant les installations provisoires."
      },
      {
       "terme": "Base vie",
       "def": "Ensemble des installations d'hygiène et de bureau du chantier."
      },
      {
       "terme": "Flèche",
       "def": "Partie horizontale d'une grue à tour le long de laquelle se déplace le chariot porte-crochet."
      },
      {
       "terme": "Limiteur de zone",
       "def": "Dispositif qui empêche la grue de survoler une zone interdite."
      },
      {
       "terme": "Bac de décantation",
       "def": "Bassin qui retient les fines et la laitance des eaux de lavage avant rejet."
      }
     ]
    },
    {
     "id": "bgo-prevention-risques",
     "titre": "Prévention des risques propres au gros œuvre",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Conduire une analyse des risques d'un mode opératoire de gros œuvre",
      "Choisir des protections collectives adaptées aux bords de dalle, trémies et banches",
      "Identifier les risques chimiques du métier (ciment, silice, produits de décoffrage) et les mesures associées",
      "Repérer les situations de co-activité et d'intervention sur existant qui imposent des précautions particulières",
      "Analyser un accident par la méthode de l'arbre des causes"
     ],
     "sections": [
      {
       "titre": "Évaluer les risques avant d'agir",
       "contenu": "<p>L'employeur doit <strong>évaluer les risques</strong> auxquels ses salariés sont exposés et transcrire cette évaluation dans le <strong>document unique d'évaluation des risques professionnels (DUERP)</strong>. Sur un chantier, cette évaluation se décline concrètement dans le PPSPS et dans les <strong>modes opératoires</strong> de chaque tâche.</p>\n<p>Les <strong>principes généraux de prévention</strong> du Code du travail fixent l'ordre des priorités : éviter le risque, évaluer ceux qui ne peuvent pas être évités, les combattre à la source, adapter le travail à l'homme, tenir compte de l'évolution de la technique, remplacer ce qui est dangereux par ce qui l'est moins, planifier la prévention, donner la priorité aux <strong>protections collectives</strong> sur les <strong>protections individuelles</strong>, et donner les instructions appropriées.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser les risques d'une tâche en cinq étapes. Exemple : coulage d'un voile à la benne. 1) Décomposer la tâche en opérations : accès à la passerelle de banche, réception de la benne, ouverture de la trappe, vibration, nettoyage. 2) Pour chaque opération, identifier le danger et la situation dangereuse : chute de hauteur depuis la passerelle, heurt par la benne, projection de béton dans les yeux, vibrations transmises au corps, contact du ciment avec la peau. 3) Estimer la gravité et la probabilité. 4) Définir les mesures dans l'ordre des principes : passerelle avec garde-corps sur les deux faces et accès par échelle intégrée ; guidage de la benne par le chef de manœuvre, personne sous la charge ; lunettes et gants ; alternance des tâches pour le vibreur. 5) Intégrer ces mesures au mode opératoire et les expliquer à l'équipe lors du quart d'heure sécurité.</div>"
      },
      {
       "titre": "Chutes de hauteur sur la structure",
       "contenu": "<p>Les chutes de hauteur sont la première cause d'accidents graves et mortels dans le BTP. Au-delà des échafaudages et des moyens d'accès, le gros œuvre crée lui-même des situations de risque permanentes : bords de dalle, trémies d'escaliers et d'ascenseurs, réservations, passerelles de banches, têtes de murs.</p>\n<table>\n<thead><tr><th>Situation</th><th>Protection collective adaptée</th></tr></thead>\n<tbody>\n<tr><td>Bord de dalle en cours de coffrage</td><td>Garde-corps périphériques fixés sur le coffrage ou sur des consoles, montés avant l'accès des compagnons</td></tr>\n<tr><td>Bord de dalle coulée</td><td>Garde-corps à fixation par serre-dalle ou par douilles prévues dans le béton</td></tr>\n<tr><td>Trémie de petites dimensions</td><td>Platelage cloué ou fixé, résistant, signalé, ou treillis soudé laissé dans la dalle jusqu'à la pose des équipements</td></tr>\n<tr><td>Trémie de grandes dimensions (escalier, ascenseur)</td><td>Garde-corps sur tout le périmètre</td></tr>\n<tr><td>Coffrage de voile</td><td>Passerelle de banche avec garde-corps, travail depuis la plate-forme, jamais en équilibre sur les tiges</td></tr>\n<tr><td>Montage de maçonneries en étage</td><td>Plate-forme de travail ou échafaudage de pied, protections en rive</td></tr>\n</tbody>\n</table>\n<p>Un garde-corps de chantier comporte une <strong>lisse</strong> supérieure à une hauteur comprise entre 1,00 m et 1,10 m environ, une <strong>sous-lisse</strong> intermédiaire et une <strong>plinthe</strong> ; il doit résister à la poussée d'une personne qui chute contre lui. Les protections individuelles (harnais antichute) ne sont utilisées qu'en complément ou lorsque la protection collective est techniquement impossible, avec un point d'ancrage vérifié et une formation.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> retirer un garde-corps ou un platelage de trémie « pour passer une charge » et ne pas le remettre est l'origine de nombreuses chutes. Toute protection enlevée doit être remplacée immédiatement par celui qui l'a enlevée, et la zone balisée pendant l'opération.</div>"
      },
      {
       "titre": "Risques chimiques du métier",
       "contenu": "<p>Le gros œuvre expose à plusieurs agents chimiques souvent sous-estimés.</p>\n<ul>\n<li><strong>Le ciment frais</strong> est très alcalin : il provoque des <strong>brûlures</strong> en cas de contact prolongé (genoux dans le béton, ciment dans les bottes) et des <strong>dermatoses</strong> (eczéma), en partie dues aux sels de chrome. La réglementation européenne limite la teneur en chrome VI soluble des ciments, ce qui a réduit les allergies sans les supprimer. Prévention : gants adaptés (nitrile), manches longues, bottes, lavage immédiat, crèmes de soin, ne jamais s'agenouiller dans le béton frais sans protection.</li>\n<li><strong>La silice cristalline</strong> est présente dans le béton, les mortiers, les granulats et les pierres. Les opérations de sciage, carottage, ponçage, rainurage et démolition produisent des poussières <strong>alvéolaires</strong> qui atteignent le fond des poumons et peuvent provoquer une <strong>silicose</strong> et des cancers. Les travaux exposant à ces poussières sont classés cancérogènes par la réglementation française. Prévention : outils avec <strong>aspiration à la source</strong> ou <strong>arrosage</strong>, travail à l'humide, nettoyage par aspiration et non au balai, protection respiratoire adaptée (filtre de type P3) en complément.</li>\n<li><strong>Les huiles de décoffrage</strong>, les adjuvants, les résines et mortiers de réparation, les produits de cure et les durcisseurs peuvent être irritants, sensibilisants ou nocifs. Leur <strong>fiche de données de sécurité</strong> (FDS) indique les dangers et les protections ; on privilégie les huiles végétales et les produits les moins dangereux.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour carotter une centaine de réservations oubliées dans des voiles, une entreprise équipe sa carotteuse d'un dispositif d'arrosage et organise la récupération des boues. Le compagnon porte un masque P3 lors des carottages à sec inévitables. Ce choix est justifié dans la mise à jour du DUERP et expliqué à l'équipe.</div>"
      },
      {
       "titre": "Bruit, vibrations et contraintes physiques",
       "contenu": "<p>Le gros œuvre cumule les contraintes physiques : manutentions de blocs, de sacs, d'aciers et de banches, postures penchées pour le ferraillage des dalles, bruit des banches et des vibreurs, vibrations des marteaux-piqueurs et aiguilles vibrantes.</p>\n<ul>\n<li><strong>Bruit</strong> : au-delà de 80 dB(A) d'exposition quotidienne moyenne, l'employeur doit mettre à disposition des protections auditives ; au-delà de 85 dB(A), leur port est obligatoire et des mesures de réduction s'imposent. La priorité reste la réduction à la source (outils moins bruyants, banches équipées d'amortisseurs, éloignement des compresseurs).</li>\n<li><strong>Vibrations</strong> : les vibrations transmises aux mains et aux bras (marteau-piqueur, burineur, vibreur) provoquent des troubles vasculaires et articulaires ; on limite les durées d'exposition, on choisit des outils à faibles vibrations et on les entretient.</li>\n<li><strong>Troubles musculo-squelettiques (TMS)</strong> : on réduit les manutentions par la mécanisation (grue, chariot, palettisation au plus près du poste), le choix d'éléments plus légers, des postes de travail à bonne hauteur (ferraillage sur tréteaux, échafaudage réglable en hauteur pour la maçonnerie).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en prévention, on agit d'abord sur l'organisation et le matériel ; l'équipement individuel vient en dernier, en complément.</div>"
      },
      {
       "titre": "Co-activité et intervention sur l'existant",
       "contenu": "<p>La <strong>co-activité</strong> désigne la présence simultanée de plusieurs entreprises ou équipes dans une même zone. Elle crée des risques que chacun ne voit pas : charges levées au-dessus d'une équipe d'électriciens, protections retirées par un autre corps d'état, circulations croisées d'engins et de piétons. Le PGC et les réunions de coordination organisent les zones et les horaires ; le chef d'équipe signale toute situation non prévue.</p>\n<p>Les travaux sur des bâtiments existants (réhabilitation, extension, démolition partielle) exposent à des risques particuliers :</p>\n<ul>\n<li><strong>Amiante</strong> : avant tous travaux sur un immeuble bâti avant le 1er juillet 1997, le donneur d'ordre doit faire réaliser un <strong>repérage de l'amiante avant travaux</strong>. Les interventions sur des matériaux susceptibles de libérer des fibres relèvent de règles strictes (formation spécifique, modes opératoires, mesures d'empoussièrement), et le retrait d'amiante est réservé à des entreprises certifiées.</li>\n<li><strong>Plomb</strong> dans les peintures anciennes, à ne pas poncer à sec.</li>\n<li><strong>Stabilité</strong> : percer une ouverture dans un mur porteur, démolir un plancher ou reprendre une fondation en sous-œuvre impose un étaiement préalable étudié.</li>\n<li><strong>Réseaux en service</strong> non repérés, encastrés dans les murs ou les sols.</li>\n</ul>"
      },
      {
       "titre": "Analyser un accident : l'arbre des causes",
       "contenu": "<p>Après un accident ou un presque-accident, on cherche à comprendre pour éviter qu'il se reproduise, et non à désigner un coupable. La méthode de l'<strong>arbre des causes</strong> consiste à recueillir des <strong>faits</strong> (et non des opinions), puis à remonter de l'accident vers ses causes en posant pour chaque fait trois questions : qu'a-t-il fallu pour que ce fait se produise ? Est-ce nécessaire ? Est-ce suffisant ?</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exemple simplifié. Fait final : un compagnon chute de 2,70 m par une trémie. Faits nécessaires : il marchait à reculons en tirant un paquet de treillis soudés ; la trémie n'était pas protégée ; il ne voyait pas la trémie. Pourquoi la trémie n'était-elle pas protégée ? Le platelage avait été retiré le matin pour descendre un étai ; il n'avait pas été remis. Pourquoi tirait-il le paquet à la main ? La grue était occupée par le bétonnage. Mesures retenues : protections de trémies par treillis soudé noyé dans la dalle et découpé uniquement à la pose des équipements ; consigne de remise en place immédiate ; planning de levage prévoyant les approvisionnements de treillis. On agit sur plusieurs causes, pas seulement sur le comportement de la victime.</div>\n<p>Les <strong>presque-accidents</strong> (une charge qui frôle quelqu'un, un étai qui glisse sans blesser) doivent être signalés et analysés de la même façon : ils annoncent les accidents de demain. Les entreprises organisent pour cela des <strong>quarts d'heure sécurité</strong> réguliers où l'équipe échange sur les situations vécues.</p>"
      }
     ],
     "points_cles": [
      "L'évaluation des risques est transcrite dans le DUERP et déclinée dans le PPSPS et les modes opératoires.",
      "Les principes généraux de prévention donnent la priorité à la suppression du risque et aux protections collectives.",
      "Bords de dalle, trémies et passerelles de banches doivent être protégés avant l'accès ; toute protection retirée est remise aussitôt.",
      "Le ciment frais provoque brûlures et eczéma : gants nitrile, manches longues, lavage immédiat.",
      "Poussières de silice cristalline : aspiration à la source, travail à l'humide, masque P3 en complément.",
      "Bruit : protections à disposition dès 80 dB(A), port obligatoire à 85 dB(A).",
      "Avant travaux sur un bâtiment antérieur au 1er juillet 1997 : repérage de l'amiante obligatoire.",
      "L'arbre des causes part des faits et recherche toutes les causes, techniques et organisationnelles."
     ],
     "lexique": [
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels tenu par l'employeur."
      },
      {
       "terme": "Mode opératoire",
       "def": "Description de la manière d'exécuter une tâche, intégrant les mesures de prévention."
      },
      {
       "terme": "Protection collective",
       "def": "Dispositif qui protège toutes les personnes exposées sans action de leur part (garde-corps, filet, platelage)."
      },
      {
       "terme": "Trémie",
       "def": "Ouverture ménagée dans un plancher pour un escalier, un ascenseur ou des gaines."
      },
      {
       "terme": "Silice cristalline alvéolaire",
       "def": "Fraction très fine des poussières de silice qui atteint les alvéoles pulmonaires."
      },
      {
       "terme": "Dermatose",
       "def": "Maladie de la peau, comme l'eczéma au ciment."
      },
      {
       "terme": "Co-activité",
       "def": "Intervention simultanée de plusieurs entreprises ou équipes dans une même zone."
      },
      {
       "terme": "Repérage amiante avant travaux",
       "def": "Recherche des matériaux contenant de l'amiante avant toute intervention sur un bâtiment ancien."
      },
      {
       "terme": "Arbre des causes",
       "def": "Méthode d'analyse d'accident qui remonte des faits vers l'ensemble de leurs causes."
      },
      {
       "terme": "Presque-accident",
       "def": "Événement qui aurait pu provoquer un dommage, sans conséquence cette fois."
      }
     ]
    },
    {
     "id": "bgo-planification",
     "titre": "Planifier les travaux : durées, ressources et enchaînements",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Calculer la durée d'une tâche à partir des quantités, des temps unitaires et de l'effectif",
      "Identifier les liens d'antériorité entre tâches et construire un réseau simple",
      "Déterminer le chemin critique et les marges d'un ensemble de tâches",
      "Établir un planning à barres (Gantt) et un planning de rotation de coffrages",
      "Suivre l'avancement et réagir à un retard"
     ],
     "sections": [
      {
       "titre": "Du métré aux durées : les temps unitaires",
       "contenu": "<p>Planifier, c'est prévoir <strong>quoi</strong> faire, <strong>quand</strong>, <strong>avec qui</strong> et <strong>avec quoi</strong>. La base de tout planning est la durée des tâches, qui se calcule à partir de trois données :</p>\n<ul>\n<li>la <strong>quantité</strong> d'ouvrage, issue du métré (m², m³, ml, unités) ;</li>\n<li>le <strong>temps unitaire</strong>, c'est-à-dire le temps de main-d'œuvre nécessaire pour réaliser une unité d'ouvrage, exprimé en heures par unité (h/m², h/m³…). Il provient des statistiques de l'entreprise, de ses chantiers précédents ou de bases de données professionnelles ;</li>\n<li>l'<strong>effectif</strong> affecté à la tâche et la <strong>durée de travail journalière</strong>.</li>\n</ul>\n<p>La relation est : temps total (en heures) = quantité × temps unitaire ; durée (en jours) = temps total / (effectif × heures par jour). On peut aussi raisonner en <strong>cadence</strong> ou <strong>rendement</strong> : quantité réalisée par une équipe en une journée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> maçonnerie de blocs de 20 cm, 186 m², temps unitaire de l'entreprise 0,75 h/m² (pose, chaînages verticaux non compris), équipe de 3 compagnons travaillant 7 h par jour. 1) Temps total : 186 × 0,75 = 139,5 h. 2) Capacité journalière de l'équipe : 3 × 7 = 21 h. 3) Durée : 139,5 / 21 ≈ 6,6 jours, arrondie à 7 jours. 4) Vérification par la cadence : 21 / 0,75 = 28 m² par jour ; 186 / 28 ≈ 6,6 jours. 5) Si le planning n'accorde que 5 jours, il faut 139,5 / (5 × 7) ≈ 4 compagnons, à condition que le poste de travail permette de les faire travailler sans se gêner.</div>\n<p>Les temps unitaires varient selon la répétitivité, la hauteur de travail, les conditions climatiques et l'expérience de l'équipe. Ceux utilisés ici sont des exemples ; seuls les temps propres à l'entreprise sont fiables.</p>"
      },
      {
       "titre": "Les liens entre les tâches",
       "contenu": "<p>Les tâches d'un chantier ne sont pas indépendantes. Certaines ne peuvent commencer que lorsqu'une autre est terminée : ce sont des <strong>liens d'antériorité</strong>. On distingue :</p>\n<ul>\n<li>les <strong>contraintes techniques</strong> : on ne coule pas une semelle avant d'avoir terrassé ; on ne décoffre pas avant que le béton ait durci ;</li>\n<li>les <strong>contraintes de ressources</strong> : une seule grue, un seul jeu de banches, une seule équipe de ferrailleurs ;</li>\n<li>les <strong>contraintes extérieures</strong> : délai de livraison des préfabriqués, visite du bureau de contrôle, intervention du plombier avant le dallage.</li>\n</ul>\n<p>Le lien le plus courant est de type <strong>fin-début</strong> : B commence quand A finit. On utilise aussi des liens avec <strong>décalage</strong> (B commence deux jours après le début de A, parce que A avance suffisamment pour libérer une zone) et des <strong>délais d'attente</strong> sans main-d'œuvre (durcissement du béton avant décoffrage).</p>\n<table>\n<thead><tr><th>Tâche</th><th>Désignation</th><th>Durée (jours)</th><th>Antériorités</th></tr></thead>\n<tbody>\n<tr><td>A</td><td>Fouilles en rigole</td><td>2</td><td>Aucune</td></tr>\n<tr><td>B</td><td>Semelles (ferraillage et béton)</td><td>3</td><td>A</td></tr>\n<tr><td>C</td><td>Réseaux sous dallage</td><td>2</td><td>A</td></tr>\n<tr><td>D</td><td>Soubassements</td><td>4</td><td>B</td></tr>\n<tr><td>E</td><td>Remblais et forme</td><td>2</td><td>C, D</td></tr>\n<tr><td>F</td><td>Dallage</td><td>2</td><td>E</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Réseau, chemin critique et marges",
       "contenu": "<p>Pour visualiser les enchaînements, on construit un <strong>réseau</strong> (méthode des potentiels ou PERT) : chaque tâche est représentée par une case, reliée par des flèches à ses suivantes. On calcule ensuite pour chaque tâche :</p>\n<ul>\n<li>la <strong>date de début au plus tôt</strong> : la plus grande des dates de fin au plus tôt de ses prédécesseurs ;</li>\n<li>la <strong>date de fin au plus tard</strong>, en partant de la fin du projet et en remontant ;</li>\n<li>la <strong>marge totale</strong> : retard qu'une tâche peut prendre sans retarder la fin du projet.</li>\n</ul>\n<p>Les tâches dont la marge totale est nulle forment le <strong>chemin critique</strong> : tout retard sur l'une d'elles retarde le chantier entier. C'est là que le chef de chantier concentre sa vigilance et ses moyens.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> avec le tableau des tâches A à F (jours comptés à partir de 0). 1) Dates au plus tôt : A de 0 à 2 ; B de 2 à 5 ; C de 2 à 4 ; D de 5 à 9 ; E commence au maximum de (fin C = 4, fin D = 9), soit 9, et finit à 11 ; F de 11 à 13. Durée totale : 13 jours. 2) Dates au plus tard en remontant : F doit finir à 13, donc commencer à 11 ; E finir à 11, commencer à 9 ; D finir à 9, commencer à 5 ; C finir au plus tard à 9, donc commencer au plus tard à 7 ; B finir à 5, commencer à 2 ; A finir à 2. 3) Marges : C a une marge totale de 7 − 2 = 5 jours ; toutes les autres ont une marge nulle. 4) Chemin critique : A, B, D, E, F. Conclusion : les réseaux (C) peuvent être réalisés par une équipe disponible à n'importe quel moment entre le jour 2 et le jour 7 ; renforcer l'équipe des soubassements (D) raccourcirait le chantier, pas renforcer celle des réseaux.</div>"
      },
      {
       "titre": "Le planning à barres et le planning de rotation",
       "contenu": "<p>Le <strong>planning à barres</strong> (ou diagramme de <strong>Gantt</strong>) est la forme la plus utilisée sur les chantiers : les tâches sont listées en lignes, le temps est porté en colonnes (jours, semaines), et chaque tâche est représentée par une barre de longueur proportionnelle à sa durée. On y fait apparaître les jalons (dates clés), les congés et jours fériés, les liens principaux et, sous le planning, l'<strong>histogramme des effectifs</strong> (nombre de personnes présentes chaque jour), qui doit être aussi régulier que possible.</p>\n<p>Pour les bâtiments à étages, on utilise aussi le <strong>planning chemin de fer</strong> (ou planning de cadencement), où l'on porte en ordonnée les niveaux ou les zones, et en abscisse le temps : chaque corps d'état apparaît comme une ligne oblique qui monte d'étage en étage. Les lignes ne doivent pas se croiser, sinon deux équipes se trouveraient au même endroit en même temps.</p>\n<p>Le gros œuvre organise ses voiles et ses dalles selon un <strong>cycle</strong> de rotation. Exemple : un niveau courant de logements est divisé en deux zones (plots) ; chaque jour, l'équipe coffre, ferraille et coule une zone de voiles avec un seul jeu de banches, puis décoffre le lendemain matin ; les dalles suivent avec leur propre matériel.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une résidence de 5 niveaux, l'entreprise vise un cycle de 8 jours ouvrés par niveau. Les métrés donnent 85 m² de voiles et 310 m² de dalle par niveau. Le chef de chantier découpe le niveau en 4 zones de voiles d'environ 21 m², une par jour pendant 4 jours, puis 2 zones de dalles coulées les jours 7 et 8 ; le ferraillage de la dalle commence pendant les derniers voiles. Ce découpage permet de garder une équipe stable et un matériel réduit, en rotation continue.</div>"
      },
      {
       "titre": "Ressources humaines et matérielles",
       "contenu": "<p>Un planning n'est réaliste que si les <strong>ressources</strong> sont disponibles au bon moment. Le technicien de gros œuvre vérifie :</p>\n<ul>\n<li>la <strong>composition de l'équipe</strong> : nombre de compagnons, qualifications (coffreur-bancheur, ferrailleur, maçon, grutier), habilitations et CACES ;</li>\n<li>la <strong>charge de la grue</strong> : une seule grue ne peut pas servir simultanément le décoffrage des banches, la pose des prédalles et le bétonnage à la benne. On établit un planning de levage journalier quand la grue est saturée, et on envisage une pompe à béton pour la soulager ;</li>\n<li>le <strong>matériel en rotation</strong> : nombre de banches, d'étais et de panneaux de coffrage, en tenant compte des délais de décoffrage et de réétaiement ;</li>\n<li>les <strong>approvisionnements</strong> : aciers façonnés, préfabriqués, béton.</li>\n</ul>\n<p>Le <strong>lissage</strong> des ressources consiste à utiliser les marges des tâches non critiques pour éviter les pointes d'effectif ou de matériel. Dans l'exemple précédent, la tâche C (réseaux) peut être décalée pour ne pas tomber en même temps qu'une autre tâche demandant la mini-pelle.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un planning tendu sans marge sur les ressources est fragile : une panne de grue, un jour de pluie ou une absence se répercutent immédiatement sur toutes les tâches suivantes.</div>"
      },
      {
       "titre": "Suivre l'avancement et réagir aux écarts",
       "contenu": "<p>Un planning ne sert à rien s'il n'est pas suivi. Chaque jour ou chaque semaine, le chef de chantier compare le <strong>réalisé</strong> au <strong>prévu</strong> :</p>\n<ul>\n<li>en <strong>quantités</strong> : mètres carrés de voiles coulés, mètres cubes de béton, nombre de prédalles posées ;</li>\n<li>en <strong>heures</strong> : heures réellement passées, relevées sur les fiches de pointage, comparées aux heures prévues (on parle de <strong>suivi de rendement</strong>) ;</li>\n<li>en <strong>dates</strong> : tâches commencées et terminées, report sur le planning par un trait de couleur ou une ligne d'avancement.</li>\n</ul>\n<p>Face à un retard, les leviers sont limités et doivent être choisis selon leur coût : renforcer l'équipe (si le poste le permet), travailler en horaires décalés ou le samedi (dans le respect du Code du travail et des autorisations), changer de méthode (béton plus rapide, préfabrication, pompe), réorganiser l'ordre des tâches non critiques, ou négocier un décalage avec les corps d'état suivants. Tout retard dû à une cause extérieure (intempéries, plans tardifs, modification du maître d'ouvrage) doit être <strong>consigné par écrit</strong> pour pouvoir justifier une prolongation de délai.</p>\n<p>Exemple de suivi de rendement : pour les voiles d'un niveau, 85 m² prévus à 1,2 h/m², soit 102 h ; l'équipe a passé 118 h. Écart : + 16 h, soit environ + 16 %. L'analyse montre que 10 h ont été perdues à attendre une toupie : c'est un problème d'approvisionnement, pas de productivité de l'équipe, et la solution est dans la commande du béton.</p>"
      }
     ],
     "points_cles": [
      "Temps total = quantité × temps unitaire ; durée = temps total / (effectif × heures par jour).",
      "Les temps unitaires fiables sont ceux de l'entreprise, issus de ses chantiers.",
      "Liens d'antériorité techniques, de ressources et extérieurs ; délais d'attente sans main-d'œuvre (durcissement).",
      "Chemin critique : suite des tâches de marge totale nulle ; tout retard y retarde le projet.",
      "Gantt pour les tâches dans le temps, histogramme pour les effectifs, chemin de fer pour les bâtiments à étages.",
      "Le cycle de rotation des banches et des coffrages structure le planning du gros œuvre.",
      "La grue est souvent la ressource critique ; le lissage utilise les marges pour éviter les pointes.",
      "Suivre quantités, heures et dates ; consigner par écrit les causes extérieures de retard."
     ],
     "lexique": [
      {
       "terme": "Temps unitaire",
       "def": "Temps de main-d'œuvre nécessaire pour réaliser une unité d'ouvrage, en h/m², h/m³…"
      },
      {
       "terme": "Cadence",
       "def": "Quantité d'ouvrage réalisée par une équipe en une unité de temps."
      },
      {
       "terme": "Antériorité",
       "def": "Tâche qui doit être terminée (ou avancée) avant qu'une autre puisse commencer."
      },
      {
       "terme": "Chemin critique",
       "def": "Suite de tâches sans marge qui détermine la durée totale du projet."
      },
      {
       "terme": "Marge totale",
       "def": "Retard qu'une tâche peut subir sans retarder la fin du projet."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Planning à barres représentant les tâches en fonction du temps."
      },
      {
       "terme": "Planning chemin de fer",
       "def": "Planning représentant l'avancement des équipes de niveau en niveau ou de zone en zone."
      },
      {
       "terme": "Histogramme des effectifs",
       "def": "Graphique du nombre de personnes présentes sur le chantier chaque jour ou chaque semaine."
      },
      {
       "terme": "Cycle de rotation",
       "def": "Enchaînement répétitif des opérations de coffrage, ferraillage, coulage et décoffrage sur un niveau ou une zone."
      },
      {
       "terme": "Lissage",
       "def": "Réorganisation des tâches non critiques pour régulariser l'emploi des ressources."
      }
     ]
    },
    {
     "id": "bgo-encadrement-suivi",
     "titre": "Animer une équipe et suivre le chantier : qualité, coûts, environnement",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Situer le rôle du chef d'équipe dans l'organisation d'une entreprise de gros œuvre",
      "Transmettre des consignes claires et rendre compte à sa hiérarchie",
      "Mettre en place un plan de contrôle et traiter une non-conformité",
      "Suivre les heures, les consommations et l'avancement d'un ouvrage pour en vérifier la rentabilité",
      "Organiser la gestion des déchets et la limitation des nuisances du chantier"
     ],
     "sections": [
      {
       "titre": "Le chef d'équipe dans l'organisation du chantier",
       "contenu": "<p>Le titulaire du bac pro est destiné à devenir rapidement <strong>chef d'équipe</strong>, puis à évoluer vers des fonctions de <strong>chef de chantier</strong>. Il se situe dans une chaîne hiérarchique bien définie :</p>\n<table>\n<thead><tr><th>Fonction</th><th>Rôle principal</th></tr></thead>\n<tbody>\n<tr><td>Conducteur de travaux</td><td>Gère un ou plusieurs chantiers : budget, planning général, relation avec le maître d'œuvre, commandes importantes</td></tr>\n<tr><td>Chef de chantier</td><td>Organise et dirige l'ensemble des équipes d'un chantier au quotidien</td></tr>\n<tr><td>Chef d'équipe</td><td>Encadre une équipe de quelques compagnons sur une partie de l'ouvrage, travaille avec elle, contrôle et rend compte</td></tr>\n<tr><td>Compagnons (ouvriers professionnels, maçons, coffreurs, ferrailleurs)</td><td>Réalisent les ouvrages selon les consignes</td></tr>\n</tbody>\n</table>\n<p>Les qualifications des ouvriers du bâtiment sont définies par la convention collective nationale (niveaux de I à IV, avec des positions et coefficients), et celles des ETAM (employés, techniciens et agents de maîtrise) par une autre convention. Le chef d'équipe se situe en haut de la grille ouvrière ou au début de la grille ETAM selon l'entreprise.</p>\n<p>Ses missions combinent technique et encadrement : répartir le travail, expliquer les modes opératoires, veiller à la sécurité, contrôler la qualité, suivre l'avancement, accueillir les nouveaux arrivants, intérimaires et apprentis, et faire remonter l'information.</p>"
      },
      {
       "titre": "Communiquer : consignes, accueil, compte rendu",
       "contenu": "<p>Une bonne communication évite la plupart des erreurs d'exécution. Le chef d'équipe utilise plusieurs formes de communication :</p>\n<ul>\n<li>la <strong>consigne orale</strong> au démarrage d'une tâche : objectif, mode opératoire, points de vigilance, matériel, sécurité, délai. Une consigne efficace est courte, précise, appuyée sur le plan, et vérifiée par une reformulation de l'interlocuteur ;</li>\n<li>le <strong>quart d'heure sécurité</strong> ou le <strong>briefing</strong> de début de journée, qui présente l'organisation du jour et les risques particuliers ;</li>\n<li>l'<strong>accueil sécurité</strong> de tout nouvel arrivant : présentation du chantier, des règles du PPSPS, des zones dangereuses, des installations d'hygiène, des numéros d'urgence. Les intérimaires et les jeunes sont particulièrement exposés aux accidents durant leurs premiers jours ;</li>\n<li>le <strong>compte rendu</strong> écrit à la hiérarchie : rapport journalier, fiche d'autocontrôle, fiche de non-conformité, demande de matériel.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> transmettre une consigne de ferraillage d'une dalle. 1) Situer : montrer la zone sur le plan et sur place. 2) Expliquer l'objectif : nappe inférieure en treillis ST 25 C, chapeaux HA 10 sur les voiles, renforts de trémies. 3) Préciser les exigences : recouvrement des panneaux de treillis conforme au plan, cales de 25 mm, chaises pour les chapeaux. 4) Indiquer les contraintes : fin du ferraillage avant 15 h pour le contrôle, coulage prévu le lendemain à 7 h 30. 5) Rappeler la sécurité : garde-corps en rive en place, gants, attention aux extrémités des aciers en attente (capuchons). 6) Faire reformuler au compagnon et convenir d'un point de contrôle à mi-parcours.</div>"
      },
      {
       "titre": "Organiser la qualité : plan de contrôle et non-conformités",
       "contenu": "<p>La <strong>qualité</strong> d'un ouvrage est son aptitude à satisfaire les exigences du marché (CCTP, plans, normes et DTU). Elle se construit par la prévention et le contrôle, pas par la reprise des défauts.</p>\n<p>Le <strong>plan d'assurance qualité (PAQ)</strong>, demandé sur de nombreux marchés, décrit l'organisation de l'entreprise pour garantir la qualité : responsabilités, procédures, points de contrôle. Il s'appuie sur un <strong>plan de contrôle</strong> qui liste, pour chaque ouvrage, ce qu'on contrôle, quand, comment, avec quelle tolérance, par qui, et où l'on enregistre le résultat.</p>\n<p>On distingue :</p>\n<ul>\n<li>l'<strong>autocontrôle</strong>, réalisé par l'équipe qui exécute ;</li>\n<li>le <strong>contrôle interne</strong>, réalisé par le chef de chantier ou le service qualité de l'entreprise ;</li>\n<li>le <strong>contrôle externe</strong>, réalisé par le maître d'œuvre, le bureau de contrôle ou un laboratoire ;</li>\n<li>les <strong>points d'arrêt</strong> : étapes où l'on ne peut pas continuer sans l'accord écrit d'un tiers (par exemple, contrôle des armatures par le maître d'œuvre avant coulage d'un ouvrage important).</li>\n</ul>\n<p>Une <strong>non-conformité</strong> est un écart par rapport à une exigence. Elle se traite selon une démarche constante : identifier et enregistrer l'écart (fiche de non-conformité, photos), isoler et informer, analyser la cause, décider du traitement (reprise, acceptation en l'état avec accord du maître d'œuvre, démolition), vérifier le résultat, et mettre en place une action pour éviter qu'elle se reproduise.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dissimuler un défaut (ragréer un nid de cailloux important sans le signaler, masquer un acier apparent) est une faute professionnelle. Le défaut caché resurgira, et l'entreprise perdra toute possibilité de choisir une réparation adaptée et moins coûteuse.</div>"
      },
      {
       "titre": "Suivre les coûts de l'équipe",
       "contenu": "<p>Le prix d'un ouvrage a été calculé lors de l'étude de prix à partir de <strong>déboursés secs</strong> : main-d'œuvre, matériaux, matériel. Le chef d'équipe agit directement sur une grande partie de ces coûts : les heures passées, les pertes de matériaux, l'utilisation du matériel. Le suivi consiste à comparer le prévu et le réel.</p>\n<table>\n<thead><tr><th>Poste</th><th>Prévu (étude)</th><th>Réalisé</th><th>Écart</th></tr></thead>\n<tbody>\n<tr><td>Main-d'œuvre voiles R+1 (h)</td><td>85 m² × 1,2 h/m² = 102 h</td><td>118 h</td><td>+ 16 h</td></tr>\n<tr><td>Béton voiles (m³)</td><td>17,0 m³</td><td>17,9 m³</td><td>+ 0,9 m³ (+ 5,3 %)</td></tr>\n<tr><td>Aciers (kg)</td><td>1 350 kg</td><td>1 350 kg</td><td>0</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser les écarts du tableau. 1) Calculer chaque écart en valeur et en pourcentage : main-d'œuvre + 16 h soit + 15,7 % ; béton + 5,3 %. 2) Chiffrer : si l'heure coûte 38 € à l'entreprise (salaire et charges, valeur d'exemple) et le béton 140 € le m³, l'écart vaut 16 × 38 + 0,9 × 140 = 608 + 126 = 734 €. 3) Rechercher les causes : attente de toupie (10 h), réglage d'une banche défectueuse (4 h), surconsommation de béton due à des coffrages qui s'écartent (déformation, fuites). 4) Proposer des actions : commande du béton avec créneaux mieux espacés, réparation de la banche, contrôle du serrage. 5) Rendre compte au conducteur de travaux avec ces éléments chiffrés.</div>\n<p>Les <strong>pertes</strong> de matériaux (casse de blocs, béton en excès, chutes d'aciers) ont aussi un coût environnemental. Une commande ajustée de la dernière toupie et un stockage soigné réduisent fortement ces pertes.</p>"
      },
      {
       "titre": "Gérer les déchets et les nuisances",
       "contenu": "<p>Le BTP produit la majeure partie des déchets en France, dont une grande part de déchets <strong>inertes</strong> issus du gros œuvre (béton, briques, terres, gravats). La réglementation impose au producteur de déchets d'en assurer la gestion jusqu'à leur élimination ou valorisation, avec traçabilité.</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Exemples en gros œuvre</th><th>Filière</th></tr></thead>\n<tbody>\n<tr><td>Déchets inertes</td><td>Béton, gravats, blocs cassés, terres non polluées</td><td>Recyclage en granulats, remblais, installations de stockage de déchets inertes</td></tr>\n<tr><td>Déchets non dangereux non inertes</td><td>Bois de coffrage, emballages, plastiques, ferrailles, polystyrène</td><td>Tri et recyclage, valorisation</td></tr>\n<tr><td>Déchets dangereux</td><td>Pots d'huile de décoffrage, produits chimiques, matériaux amiantés, terres polluées</td><td>Filières spécialisées avec bordereau de suivi des déchets</td></tr>\n</tbody>\n</table>\n<p>Une <strong>filière de responsabilité élargie du producteur</strong> pour les produits et matériaux de construction du bâtiment se déploie depuis 2023 : elle organise la reprise des déchets triés, avec des points de collecte. Pour les démolitions et réhabilitations importantes, un <strong>diagnostic produits-équipements-matériaux-déchets (PEMD)</strong> doit être réalisé avant travaux.</p>\n<p>Les <strong>nuisances</strong> pour les riverains (bruit, poussières, boue sur la chaussée, circulation des camions) se réduisent par des horaires adaptés, l'arrosage des pistes, le nettoyage des roues à la sortie, le choix de matériels moins bruyants et l'information des voisins. Les eaux de lavage chargées de laitance, très basiques, ne doivent jamais être déversées dans le réseau d'eaux pluviales ou dans le milieu naturel.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur les chantiers à faibles nuisances, l'entreprise signe une charte avec le maître d'ouvrage. Le chef de chantier tient un registre des déchets, organise des bennes séparées pour le bois, les inertes, les métaux et les déchets dangereux, et fait recycler les chutes d'acier par le fournisseur. Les bons d'enlèvement sont conservés pour justifier la traçabilité.</div>"
      },
      {
       "titre": "Réceptionner son ouvrage et clore le chantier",
       "contenu": "<p>À la fin de sa mission, l'équipe de gros œuvre <strong>livre</strong> ses ouvrages aux corps d'état suivants : planchers, murs, réservations, supports d'enduits ou de chapes. Cette transmission se fait idéalement par une visite commune et un <strong>procès-verbal de réception de support</strong> ou de transfert de zone, qui fixe l'état des ouvrages à cette date.</p>\n<p>La clôture du chantier comprend :</p>\n<ul>\n<li>la levée des <strong>réserves</strong> éventuelles ;</li>\n<li>le <strong>repli</strong> des installations, du matériel et des déchets, la remise en état des abords ;</li>\n<li>la transmission des documents : plans d'exécution conformes, fiches techniques des produits, procès-verbaux d'essais, plans de récolement des réseaux, éléments pour le DIUO et le dossier des ouvrages exécutés (DOE) ;</li>\n<li>le <strong>bilan</strong> du chantier : heures réelles par ouvrage, consommations, incidents, retours d'expérience, qui alimenteront les temps unitaires des prochaines études de prix.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le retour d'expérience transforme chaque chantier en source d'amélioration. Des temps unitaires mis à jour, des modes opératoires corrigés et des incidents analysés rendent les chantiers suivants plus sûrs et plus rentables.</div>"
      }
     ],
     "points_cles": [
      "Chaîne hiérarchique : conducteur de travaux, chef de chantier, chef d'équipe, compagnons.",
      "Une consigne efficace est courte, appuyée sur le plan, et vérifiée par reformulation.",
      "Accueil sécurité obligatoire pour tout nouvel arrivant, intérimaire ou apprenti.",
      "Plan de contrôle : quoi, quand, comment, tolérance, qui, enregistrement ; autocontrôle, contrôle interne, externe, points d'arrêt.",
      "Une non-conformité s'enregistre, s'analyse et se traite ; elle ne se dissimule jamais.",
      "Le suivi des coûts compare heures et consommations prévues et réelles, puis analyse les causes des écarts.",
      "Déchets inertes, non dangereux et dangereux : tri, filières adaptées, traçabilité.",
      "En fin de chantier : levée des réserves, repli, documents (DOE, récolement) et bilan des temps unitaires."
     ],
     "lexique": [
      {
       "terme": "Chef d'équipe",
       "def": "Ouvrier qualifié qui encadre et anime une petite équipe tout en participant à la réalisation."
      },
      {
       "terme": "Briefing",
       "def": "Courte réunion de début de journée pour présenter l'organisation et les risques."
      },
      {
       "terme": "PAQ",
       "def": "Plan d'assurance qualité décrivant l'organisation de l'entreprise pour garantir la qualité d'un marché."
      },
      {
       "terme": "Point d'arrêt",
       "def": "Étape de contrôle nécessitant l'accord écrit d'un tiers avant de poursuivre."
      },
      {
       "terme": "Non-conformité",
       "def": "Écart constaté par rapport à une exigence du marché, d'une norme ou d'un DTU."
      },
      {
       "terme": "Déboursé sec",
       "def": "Coût direct d'un ouvrage : main-d'œuvre, matériaux et matériel, sans frais généraux ni bénéfice."
      },
      {
       "terme": "Déchet inerte",
       "def": "Déchet qui ne subit aucune modification physique, chimique ou biologique importante (béton, gravats)."
      },
      {
       "terme": "Bordereau de suivi des déchets",
       "def": "Document qui assure la traçabilité des déchets dangereux jusqu'à leur traitement."
      },
      {
       "terme": "DOE",
       "def": "Dossier des ouvrages exécutés, remis au maître d'ouvrage à la fin des travaux."
      },
      {
       "terme": "Retour d'expérience",
       "def": "Analyse d'un chantier terminé pour en tirer des enseignements utiles aux suivants."
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
     "id": "bgo-doc-dossier-architecte",
     "titre": "Exploiter un dossier de plans et une maquette numérique",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Situer les documents graphiques d'un dossier technique d'épreuve et leur rôle respectif",
      "Croiser plans, coupes et façades pour reconstituer un ouvrage en trois dimensions",
      "Exploiter les niveaux altimétriques et les cotes pour calculer des hauteurs et des épaisseurs",
      "Interroger une maquette numérique (fichier IFC) pour extraire des informations",
      "Rédiger une réponse argumentée qui cite le document source"
     ],
     "sections": [
      {
       "titre": "Le dossier technique à l'épreuve écrite",
       "contenu": "<p>Les épreuves écrites de la spécialité (analyse technique d'un ouvrage, puis préparation et organisation de travaux) s'appuient sur un <strong>dossier technique</strong> réel ou adapté d'une opération : maison, petit collectif, bâtiment d'activité. Ce dossier est fourni en partie ou en totalité sous forme numérique : fichiers PDF des plans et pièces écrites, et souvent une <strong>maquette numérique</strong> au format <strong>IFC</strong>, consultée avec une visionneuse.</p>\n<p>Les documents sont repérés par des codes : <strong>DT</strong> (dossier technique, documents de référence), <strong>DR</strong> (documents réponses, à compléter), parfois <strong>DB</strong> ou dossier de base commun aux deux épreuves. Le sujet pose des questions numérotées qui renvoient explicitement à ces documents.</p>\n<table>\n<thead><tr><th>Document</th><th>Échelle courante</th><th>Ce qu'on y trouve</th></tr></thead>\n<tbody>\n<tr><td>Plan de situation</td><td>1/5000 à 1/25000</td><td>Localisation, accès</td></tr>\n<tr><td>Plan de masse</td><td>1/200 à 1/500</td><td>Emprise, limites, niveaux du terrain, réseaux, accès, orientation</td></tr>\n<tr><td>Plans de niveaux (vues en plan)</td><td>1/50 ou 1/100</td><td>Murs, cloisons, baies, cotes, surfaces des pièces, niveaux des sols finis</td></tr>\n<tr><td>Coupes</td><td>1/50 ou 1/100</td><td>Hauteurs, épaisseurs des planchers, fondations, toiture, niveaux</td></tr>\n<tr><td>Façades (élévations)</td><td>1/100</td><td>Aspect extérieur, baies, matériaux, niveaux d'égout et de faîtage</td></tr>\n<tr><td>Détails</td><td>1/5 à 1/20</td><td>Points singuliers : appuis, seuils, acrotères, liaisons</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> à l'épreuve, chaque réponse doit pouvoir être justifiée par un document. Citer la source (« d'après le DT3, coupe AA ») montre au correcteur la démarche et permet d'obtenir des points même en cas d'erreur de calcul.</div>"
      },
      {
       "titre": "Les niveaux : la colonne vertébrale du dossier",
       "contenu": "<p>Les niveaux sont indiqués de deux façons, qu'il faut savoir convertir :</p>\n<ul>\n<li>en <strong>niveau relatif</strong>, par rapport à un niveau de référence du projet, généralement le niveau fini du rez-de-chaussée noté <strong>± 0,00</strong> ;</li>\n<li>en <strong>altitude NGF</strong> (nivellement général de la France), par rapport au niveau moyen de la mer, utilisée sur le plan de masse et pour les réseaux.</li>\n</ul>\n<p>La correspondance est donnée sur le plan de masse ou dans le cartouche, par exemple : ± 0,00 = 112,45 NGF. Un niveau relatif de − 0,90 correspond alors à 112,45 − 0,90 = 111,55 NGF.</p>\n<p>Il faut aussi distinguer :</p>\n<ul>\n<li>le <strong>niveau fini</strong> (NF ou NSF, niveau du sol fini), dessus du revêtement de sol ;</li>\n<li>le <strong>niveau brut</strong> ou <strong>arase</strong> (dessus de la dalle brute, AS ou NB selon les conventions), qui intéresse le gros œuvre ;</li>\n<li>le <strong>niveau sous-face</strong> de plancher ou de poutre ;</li>\n<li>le <strong>fond de fouille</strong> et le <strong>dessous de semelle</strong>.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'erreur la plus fréquente consiste à confondre niveau fini et niveau brut. Si le plan d'architecte indique un sol fini à + 2,80 et que la chape avec revêtement fait 7 cm, la dalle brute doit être arasée à + 2,73. Couler la dalle à + 2,80 ferait perdre 7 cm de hauteur sous plafond à l'étage et décalerait tous les seuils.</div>"
      },
      {
       "titre": "Méthode de lecture d'un dossier de plans",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un dossier en six étapes. 1) <strong>Inventorier</strong> : lister les documents fournis (numéro, titre, échelle, date et indice de révision dans le cartouche). 2) <strong>Situer</strong> l'ouvrage sur le plan de masse : orientation (flèche du nord), accès, pente du terrain, niveaux NGF, correspondance avec le ± 0,00. 3) <strong>Repérer les coupes</strong> sur les plans : position et sens de regard des traits de coupe (AA, BB). 4) <strong>Reconstituer le volume</strong> : pour un élément donné (mur, baie, poutre), le retrouver sur le plan, sur la coupe et sur la façade. 5) <strong>Extraire</strong> les données utiles à la question posée (cotes, niveaux, matériaux, épaisseurs) en notant à chaque fois le document source. 6) <strong>Contrôler la cohérence</strong> : une cote calculée par addition doit correspondre à la cote totale indiquée ; une hauteur lue sur la coupe doit correspondre aux niveaux du plan.</div>\n<p>Pour les cotes, on se rappelle que les <strong>cotes de baies</strong> en plan indiquent généralement la largeur de l'ouverture brute dans le gros œuvre (ou le tableau), et que la hauteur peut être portée sous la forme largeur / hauteur ou en élévation. La légende du dossier précise les conventions retenues ; il faut la lire avant de calculer.</p>\n<p>Les <strong>indices de révision</strong> (A, B, C…) indiquent les modifications successives d'un plan. Sur un vrai chantier, on travaille toujours avec le dernier indice diffusé ; à l'épreuve, on utilise les documents fournis, mais une incohérence entre deux plans peut faire l'objet d'une question.</p>"
      },
      {
       "titre": "Exploiter la maquette numérique",
       "contenu": "<p>La <strong>maquette numérique</strong> (démarche <strong>BIM</strong>, modélisation des informations du bâtiment) représente l'ouvrage en trois dimensions sous forme d'<strong>objets</strong> (murs, dalles, poteaux, baies) qui portent des <strong>propriétés</strong> : matériau, dimensions, niveau, volume, surface, résistance au feu, etc. Le format <strong>IFC</strong> est un format ouvert qui permet d'échanger la maquette entre logiciels.</p>\n<p>Avec une visionneuse IFC, on peut :</p>\n<ul>\n<li>naviguer en 3D, masquer des catégories d'objets (par exemple masquer les cloisons pour voir la structure), isoler un niveau ;</li>\n<li>réaliser des <strong>coupes dynamiques</strong> pour comprendre un détail ;</li>\n<li>sélectionner un objet et lire ses <strong>propriétés</strong> : épaisseur d'un voile, volume de béton d'une dalle, référence d'une menuiserie ;</li>\n<li><strong>mesurer</strong> des distances entre objets ;</li>\n<li>extraire des <strong>quantités</strong> par type d'objet.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> de plus en plus d'entreprises de gros œuvre utilisent la maquette pour les métrés, la préparation des rotations de banches et la détection des conflits (une gaine de ventilation qui traverse une poutre). Mais la maquette n'est fiable que si elle a été bien construite : une quantité extraite automatiquement doit toujours être vérifiée par un ordre de grandeur, car un objet mal modélisé (dalle comptée deux fois, voile classé en cloison) fausse le résultat.</div>"
      },
      {
       "titre": "Exemple commenté : coupe et plan d'une maison à étage",
       "contenu": "<p>Le dossier fournit les informations suivantes (extraits décrits) :</p>\n<table>\n<thead><tr><th>Document</th><th>Information</th></tr></thead>\n<tbody>\n<tr><td>Plan de masse, cartouche</td><td>± 0,00 = 87,60 NGF ; terrain naturel moyen au droit de la maison : 87,30 NGF</td></tr>\n<tr><td>Coupe AA, 1/50</td><td>Sol fini RDC ± 0,00 ; plancher bas sur vide sanitaire, dalle de 20 cm ; chape et revêtement RDC : 6 cm ; sol fini étage + 2,75 ; plancher d'étage poutrelles-entrevous 16 + 4 avec plafond en plaque de plâtre sur fourrures (épaisseur totale du plafond 4 cm) ; dessous de semelle − 1,10</td></tr>\n<tr><td>Plan RDC, 1/50</td><td>Baie séjour : 2,40 / 2,15 ; murs extérieurs en blocs de 20 cm, doublage isolant de 12 cm</td></tr>\n<tr><td>Légende</td><td>Les cotes de baies sont des cotes de tableaux finis (largeur / hauteur sous linteau finie)</td></tr>\n</tbody>\n</table>\n<p><strong>Question type 1 : à quelle altitude NGF se situe le dessous des semelles, et quelle est la profondeur de fouille par rapport au terrain naturel ?</strong></p>\n<p>Analyse modèle : d'après la coupe AA, le dessous de semelle est à − 1,10 ; d'après le cartouche du plan de masse, ± 0,00 = 87,60 NGF. Altitude : 87,60 − 1,10 = 86,50 NGF. Le terrain naturel moyen étant à 87,30 NGF, la profondeur de fouille est de 87,30 − 86,50 = 0,80 m, valeur cohérente avec une mise hors gel en plaine.</p>\n<p><strong>Question type 2 : quel est le niveau brut de la dalle du plancher bas, et quelle est la hauteur sous plafond finie du RDC ?</strong></p>\n<p>Analyse modèle : niveau brut du plancher bas = niveau fini − épaisseur chape et revêtement = 0,00 − 0,06 = − 0,06. Pour la hauteur sous plafond : le sol fini de l'étage est à + 2,75 ; il faut retrancher l'épaisseur de l'étage. Le plancher 16 + 4 mesure 20 cm ; on suppose une chape et un revêtement de 6 cm à l'étage comme au RDC (hypothèse à vérifier sur la coupe) et un plafond de 4 cm. Sous-face du plafond fini : 2,75 − 0,06 − 0,20 − 0,04 = 2,45. Hauteur sous plafond finie : 2,45 − 0,00 = 2,45 m. On indique clairement l'hypothèse faite sur la chape d'étage.</p>\n<p><strong>Question type 3 : quelles sont les dimensions de la baie brute à réserver dans la maçonnerie ?</strong></p>\n<p>Analyse modèle : la légende précise que 2,40 / 2,15 sont des cotes de tableaux finis. Si les tableaux reçoivent un enduit intérieur et extérieur de 1,5 cm environ de chaque côté, la largeur brute serait de 2,40 + 2 × 0,015 = 2,43 m. Pour la hauteur, il faut ajouter l'épaisseur du revêtement de sol et de la finition sous linteau, et tenir compte du seuil. Sans détail fourni, on répond en signalant les hypothèses : ce type de question évalue autant la démarche que le résultat.</p>"
      },
      {
       "titre": "Pièges fréquents et rédaction des réponses",
       "contenu": "<ul>\n<li><strong>Mesurer à la règle sur le plan</strong> au lieu de lire ou calculer les cotes : les plans imprimés ou affichés à l'écran ne sont plus à l'échelle. On ne mesure que lorsqu'aucune cote n'existe, en le signalant.</li>\n<li><strong>Oublier l'unité</strong> ou mélanger mètres et centimètres : les plans d'architecte cotent souvent en mètres et centimètres (2,40), les plans de structure en centimètres ou millimètres.</li>\n<li><strong>Lire une coupe dans le mauvais sens</strong> : le trait de coupe porte des flèches qui indiquent le sens de regard.</li>\n<li><strong>Prendre une cote intérieure pour une cote extérieure</strong> : les cotes intérieures (entre murs finis) et extérieures (hors tout) ne se confondent pas ; on vérifie avec les épaisseurs des murs et doublages.</li>\n<li><strong>Répondre sans justification</strong> : un résultat sans source ni calcul détaillé rapporte peu de points.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> structure d'une réponse écrite. 1) Rappeler la donnée et sa source (document, vue). 2) Écrire la relation utilisée. 3) Poser le calcul avec les valeurs et les unités. 4) Donner le résultat avec son unité, arrondi de façon raisonnable (au centimètre pour une cote, au dixième pour un volume en m³). 5) Commenter en une phrase : cohérence, conséquence pour la réalisation, hypothèse faite.</div>"
      }
     ],
     "points_cles": [
      "Le dossier d'épreuve comprend des DT (documents techniques) et des DR (documents réponses), souvent avec une maquette IFC.",
      "Plan de masse : niveaux NGF, correspondance avec le ± 0,00, orientation, réseaux.",
      "Niveau NGF = altitude du ± 0,00 + niveau relatif (avec son signe).",
      "Niveau brut = niveau fini − épaisseur de chape et revêtement.",
      "Lire la légende pour savoir si les cotes de baies sont brutes ou finies.",
      "La maquette numérique permet d'isoler, couper, mesurer et lire les propriétés des objets ; ses quantités se vérifient.",
      "Ne jamais mesurer à la règle quand une cote existe.",
      "Toute réponse cite sa source, pose le calcul avec unités et énonce les hypothèses."
     ],
     "lexique": [
      {
       "terme": "Dossier technique (DT)",
       "def": "Ensemble des documents de référence fournis avec le sujet."
      },
      {
       "terme": "Document réponse (DR)",
       "def": "Document du sujet à compléter par le candidat."
      },
      {
       "terme": "NGF",
       "def": "Nivellement général de la France, système d'altitudes rapportées au niveau moyen de la mer."
      },
      {
       "terme": "Niveau fini",
       "def": "Niveau du dessus du revêtement de sol."
      },
      {
       "terme": "Arase",
       "def": "Niveau supérieur brut d'un ouvrage de gros œuvre (dalle, mur)."
      },
      {
       "terme": "Trait de coupe",
       "def": "Ligne repérée sur un plan indiquant la position et le sens de regard d'une coupe."
      },
      {
       "terme": "Indice de révision",
       "def": "Lettre ou numéro indiquant la version d'un plan modifié."
      },
      {
       "terme": "BIM",
       "def": "Démarche de modélisation des informations du bâtiment autour d'une maquette numérique partagée."
      },
      {
       "terme": "IFC",
       "def": "Format ouvert d'échange de maquettes numériques entre logiciels."
      },
      {
       "terme": "Hauteur sous plafond",
       "def": "Distance entre le sol fini et le plafond fini d'un local."
      }
     ]
    },
    {
     "id": "bgo-doc-coffrage-ferraillage",
     "titre": "Lire les plans de coffrage et de ferraillage",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Distinguer plan d'architecte, plan de coffrage et plan de ferraillage et leurs conventions",
      "Extraire d'un plan de coffrage les dimensions, niveaux et réservations d'un ouvrage en béton",
      "Décoder la désignation et le repérage des armatures sur un plan de ferraillage",
      "Exploiter une nomenclature d'aciers pour calculer longueurs développées et masses",
      "Contrôler la cohérence entre plan de ferraillage, coupe et nomenclature"
     ],
     "sections": [
      {
       "titre": "Les plans d'exécution de la structure",
       "contenu": "<p>Les plans d'architecte décrivent l'ouvrage fini ; ils ne suffisent pas pour construire la structure. Le <strong>bureau d'études structure</strong> (BET), mandaté par le maître d'ouvrage ou par l'entreprise, établit les <strong>plans d'exécution</strong> après calcul, et le bureau de contrôle les examine.</p>\n<table>\n<thead><tr><th>Plan</th><th>Contenu</th><th>Échelles courantes</th></tr></thead>\n<tbody>\n<tr><td>Plan de fondations</td><td>Semelles, longrines, puits ou pieux, avec dimensions, niveaux d'assise, attentes</td><td>1/50</td></tr>\n<tr><td>Plan de coffrage (par niveau)</td><td>Toute la structure en béton du niveau : voiles, poteaux, poutres, dalles, avec dimensions, niveaux, réservations, retombées, sens de portée des planchers</td><td>1/50</td></tr>\n<tr><td>Plan de ferraillage</td><td>Armatures d'un élément ou d'un ensemble : position, nombre, diamètre, forme, espacements</td><td>1/20 à 1/50, coupes 1/10 à 1/20</td></tr>\n<tr><td>Plan de réservations</td><td>Trémies, fourreaux, engravures demandés par les autres corps d'état</td><td>1/50</td></tr>\n<tr><td>Plan de calepinage de préfabriqués</td><td>Disposition des prédalles, poutrelles, prémurs, avec repères</td><td>1/50</td></tr>\n</tbody>\n</table>\n<p>Une convention importante : le plan de coffrage d'un niveau est une <strong>vue en plan de dessous</strong> ou une vue de dessus selon les usages du bureau d'études (la légende le précise). On y représente en général ce qui se trouve sous le plancher (voiles et poteaux coupés) et la dalle vue de dessus avec ses retombées en pointillés.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur le chantier, ce sont les plans d'exécution visés « bon pour exécution » qui font foi pour la structure, pas les plans d'architecte. En cas de divergence, on interroge le conducteur de travaux avant de réaliser.</div>"
      },
      {
       "titre": "Lire un plan de coffrage",
       "contenu": "<p>Un plan de coffrage utilise des codes que l'on retrouve dans la plupart des bureaux d'études :</p>\n<ul>\n<li>les <strong>voiles</strong> et <strong>poteaux</strong> sont repérés (V1, V2, P1…) avec leur épaisseur ou leur section (P1 20 × 40) ;</li>\n<li>les <strong>poutres</strong> sont repérées avec leur largeur et leur hauteur totale (B1 20 × 50), et parfois la <strong>retombée</strong> (hauteur sous la dalle) ;</li>\n<li>la <strong>dalle</strong> porte une épaisseur (ép. 20) et son niveau d'<strong>arase</strong> ; une flèche à double pointe indique le <strong>sens de portée</strong> des planchers à poutrelles ou à prédalles ;</li>\n<li>les <strong>trémies</strong> sont représentées par un rectangle barré d'une croix, avec leurs dimensions ;</li>\n<li>les <strong>niveaux</strong> d'arase et de sous-face sont indiqués dans des repères spécifiques ;</li>\n<li>les <strong>réservations</strong> dans les voiles sont cotées en position et en dimensions, avec le niveau de leur base ou de leur axe.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> extraire les données d'un voile. 1) Repérer le voile (V3) et lire son épaisseur sur le plan de coffrage. 2) Lire sa longueur par les cotes d'axes ou de nus. 3) Déterminer sa hauteur : arase de la dalle supérieure moins arase de la dalle inférieure, moins l'épaisseur de la dalle supérieure si le voile s'arrête sous elle. 4) Relever les réservations (portes, trémies de gaines) et leurs dimensions. 5) Calculer le volume net : longueur × hauteur × épaisseur, moins les vides des réservations importantes. 6) Vérifier la cohérence avec la coupe et avec le plan d'architecte (position des baies).</div>"
      },
      {
       "titre": "Lire un plan de ferraillage et une nomenclature",
       "contenu": "<p>Sur un plan de ferraillage, chaque armature ou groupe d'armatures identiques porte un <strong>repère</strong> (numéro entouré). La désignation suit la forme : <strong>nombre, type, diamètre, (longueur), espacement</strong>. Exemples :</p>\n<ul>\n<li>« 3 HA 12 » : trois barres haute adhérence de 12 mm ;</li>\n<li>« HA 8 e = 15 » ou « HA 8 / 15 » : barres de 8 mm espacées de 15 cm ;</li>\n<li>« 26 cad. HA 6 » : 26 cadres en HA 6 ;</li>\n<li>« TS ST 25 C » : treillis soudé de type ST 25 C (références de panneaux standards).</li>\n</ul>\n<p>La <strong>nomenclature des aciers</strong> est un tableau qui récapitule chaque repère : nombre, diamètre, forme (croquis avec les cotes de chaque branche), longueur développée unitaire, longueur totale, masse. Elle sert à la commande des aciers façonnés et au contrôle sur chantier.</p>\n<p>La <strong>longueur développée</strong> d'une barre façonnée est la somme des longueurs de ses branches, cotées en général à l'extérieur des aciers. Les bureaux d'études et façonniers appliquent des conventions (prise en compte ou non des rayons de cintrage) ; pour l'épreuve et le contrôle courant, on additionne les cotes indiquées sur le croquis.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un cadre se dessine avec ses cotes extérieures, qui correspondent à la section de béton moins deux fois l'enrobage. Pour une poutre de 20 × 50 avec un enrobage de 3 cm, le cadre mesure 14 × 44 cm hors tout. Calculer le cadre avec les dimensions du béton conduit à des cadres trop grands qui ne rentrent pas dans le coffrage.</div>"
      },
      {
       "titre": "Exemple commenté : poutre B4",
       "contenu": "<p>Le plan de ferraillage décrit la poutre B4, de section 20 × 45 cm, portée libre 4,60 m, posée sur deux poteaux de 20 × 20 cm (longueur totale de la poutre entre nus extérieurs des poteaux : 5,00 m). Enrobage nominal : 30 mm. La nomenclature est la suivante.</p>\n<table>\n<thead><tr><th>Repère</th><th>Nombre</th><th>Ø (mm)</th><th>Forme et cotes (cm)</th><th>Longueur développée unitaire (m)</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>3</td><td>14</td><td>Barre droite avec deux retours d'équerre de 15 cm à chaque extrémité : 15 + 494 + 15</td><td>5,24</td></tr>\n<tr><td>2</td><td>2</td><td>10</td><td>Barre droite : 494</td><td>4,94</td></tr>\n<tr><td>3</td><td>24</td><td>6</td><td>Cadre rectangulaire 14 × 39, avec deux crochets de 8 cm</td><td>?</td></tr>\n</tbody>\n</table>\n<p>Une coupe transversale montre les repères 1 en partie basse, les repères 2 en partie haute et les cadres 3. Sur l'élévation, les cadres sont espacés de 10 cm sur les 60 premiers centimètres à chaque extrémité, puis de 25 cm en partie centrale.</p>\n<p><strong>Analyse modèle.</strong></p>\n<ol>\n<li><strong>Rôle des aciers</strong> : la poutre est sur deux appuis ; la fibre inférieure est tendue en travée. Les 3 HA 14 (repère 1) sont les aciers principaux, en partie basse. Les 2 HA 10 (repère 2) en partie haute sont des aciers de montage qui tiennent les cadres (ils reprennent aussi un éventuel moment sur appui). Les cadres HA 6 (repère 3) reprennent l'effort tranchant, d'où leur resserrement près des appuis.</li>\n<li><strong>Vérification des cotes</strong> : longueur de poutre 500 cm moins deux enrobages de 3 cm : 500 − 6 = 494 cm, ce qui correspond à la partie droite des barres. La section 20 × 45 moins deux enrobages donne 14 × 39 cm hors tout pour les cadres : cohérent.</li>\n<li><strong>Longueur développée du cadre</strong> : périmètre 2 × (14 + 39) = 106 cm, plus deux crochets de 8 cm : 106 + 16 = 122 cm, soit 1,22 m.</li>\n<li><strong>Nombre de cadres</strong> : zones d'extrémité de 60 cm à 10 cm d'espacement, soit 6 espaces et 7 cadres par zone (en comptant le premier cadre au départ), soit 14 cadres pour les deux zones. Partie centrale : 500 − 2 × 60 = 380 cm, à 25 cm : 380 / 25 = 15,2, arrondi à 16 espaces pour ne pas dépasser l'espacement maximal, soit 15 cadres intermédiaires (les cadres situés aux limites de zones étant déjà comptés). Total : 14 + 15 = 29 cadres, contre 24 indiqués par la nomenclature. L'écart doit être signalé : soit la nomenclature est erronée, soit les premiers cadres sont placés en retrait (les cadres situés dans les poteaux appartiennent parfois au ferraillage du poteau). On interroge le bureau d'études avant de commander.</li>\n<li><strong>Masses</strong> (avec 24 cadres, valeur de la nomenclature) : repère 1 : 3 × 5,24 = 15,72 m × 1,208 = 18,99 kg ; repère 2 : 2 × 4,94 = 9,88 m × 0,617 = 6,10 kg ; repère 3 : 24 × 1,22 = 29,28 m × 0,222 = 6,50 kg. Total : 31,59 kg, soit environ 32 kg. Ratio : volume de béton 0,20 × 0,45 × 4,60 (hors poteaux) = 0,414 m³ ; 31,6 / 0,414 ≈ 76 kg/m³, plausible pour une poutre.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le chef d'équipe qui réceptionne les aciers façonnés compare les étiquettes des paquets (repère, nombre, diamètre) avec la nomenclature, et contrôle par sondage les cotes de quelques cadres au mètre. Une erreur détectée à la livraison se règle par un appel au façonnier ; détectée au moment du coulage, elle bloque l'équipe et la toupie.</div>"
      },
      {
       "titre": "Méthode générale et pièges",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un plan de ferraillage en six étapes. 1) Identifier l'élément, son repère sur le plan de coffrage, ses dimensions, son enrobage. 2) Lire les coupes transversales pour situer chaque repère (haut, bas, faces). 3) Associer chaque repère à son rôle mécanique (traction, montage, effort tranchant, chapeau, attente). 4) Vérifier les cotes des aciers par rapport aux dimensions du béton et à l'enrobage. 5) Compter les cadres et les barres réparties à partir des espacements et des zones. 6) Calculer longueurs et masses, et comparer à la nomenclature ; signaler tout écart.</div>\n<ul>\n<li>Pour les barres réparties (dalles, voiles), le nombre de barres sur une longueur L avec un espacement e vaut en général L / e + 1, en retranchant les enrobages aux extrémités ; on arrondit à l'entier supérieur.</li>\n<li>Les longueurs de recouvrement et d'ancrage sont parfois données dans un tableau général du plan plutôt que sur chaque barre.</li>\n<li>Les <strong>attentes</strong> dessinées sur le plan d'un élément appartiennent souvent à la nomenclature de l'élément inférieur (les attentes de poteaux figurent sur le plan des semelles).</li>\n<li>Les aciers de renfort de trémies et d'angles de baies sont faciles à oublier : ils sont souvent représentés sur une vue de détail séparée.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> à l'épreuve comme sur le chantier, une incohérence relevée et justifiée est une bonne réponse. On ne corrige pas un plan de structure soi-même : on signale l'écart au bureau d'études par l'intermédiaire de sa hiérarchie.</div>"
      }
     ],
     "points_cles": [
      "Les plans d'exécution du BET (fondations, coffrage, ferraillage, réservations) font foi pour la structure.",
      "Plan de coffrage : repères des voiles, poteaux, poutres, épaisseurs, arases, trémies, sens de portée.",
      "Désignation des aciers : nombre, type, diamètre, espacement (exemple : 3 HA 12, HA 8 / 15).",
      "La nomenclature donne pour chaque repère : nombre, diamètre, forme, longueur développée, masse.",
      "Cotes d'un cadre = section du béton moins deux enrobages.",
      "Nombre de barres réparties sur une longueur : environ L / e + 1, arrondi à l'entier supérieur.",
      "Les aciers principaux d'une poutre sur deux appuis sont en bas ; les cadres sont resserrés près des appuis.",
      "Toute incohérence entre plan, coupe et nomenclature est signalée, jamais corrigée seul."
     ],
     "lexique": [
      {
       "terme": "Plan d'exécution",
       "def": "Plan établi par le bureau d'études pour la réalisation, après calcul."
      },
      {
       "terme": "Plan de coffrage",
       "def": "Plan donnant la forme et les dimensions de tous les éléments en béton d'un niveau."
      },
      {
       "terme": "Retombée",
       "def": "Partie d'une poutre qui dépasse sous la sous-face de la dalle."
      },
      {
       "terme": "Repère",
       "def": "Numéro identifiant un groupe d'armatures identiques sur un plan de ferraillage."
      },
      {
       "terme": "Nomenclature des aciers",
       "def": "Tableau récapitulant les armatures d'un ouvrage : nombre, diamètre, forme, longueur, masse."
      },
      {
       "terme": "Longueur développée",
       "def": "Longueur totale d'une barre façonnée, somme de ses branches."
      },
      {
       "terme": "Acier de montage",
       "def": "Barre qui sert principalement à maintenir les cadres en place."
      },
      {
       "terme": "Cadre",
       "def": "Armature transversale fermée entourant les barres longitudinales."
      },
      {
       "terme": "Attente",
       "def": "Partie d'armature laissée en saillie pour assurer la continuité avec l'élément coulé ensuite."
      },
      {
       "terme": "Treillis soudé",
       "def": "Panneau ou rouleau de barres croisées soudées, utilisé pour armer dalles et voiles."
      }
     ]
    },
    {
     "id": "bgo-doc-cctp-dpgf",
     "titre": "Analyser un CCTP et un cadre de décomposition des prix",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Repérer la structure d'un CCTP de lot gros œuvre et y retrouver rapidement une prescription",
      "Extraire d'un article de CCTP les exigences sur les matériaux, la mise en œuvre et les contrôles",
      "Lire une DPGF et relier chaque ligne à un ouvrage et à un article du CCTP",
      "Vérifier une quantité de DPGF à partir des plans",
      "Repérer les contradictions entre pièces et savoir laquelle prévaut"
     ],
     "sections": [
      {
       "titre": "Le CCTP : structure et vocabulaire",
       "contenu": "<p>Le <strong>cahier des clauses techniques particulières (CCTP)</strong> décrit, lot par lot, les ouvrages à réaliser et les exigences techniques. Pour le lot gros œuvre, il compte souvent plusieurs dizaines de pages. Sa structure est presque toujours la même :</p>\n<ol>\n<li><strong>Généralités</strong> : objet du lot, limites de prestations avec les autres lots, documents de référence (DTU, normes, Eurocodes, avis techniques), études à la charge de l'entreprise (plans d'exécution, notes de calcul), prescriptions sur les matériaux en général, essais et contrôles, nettoyage, gestion des déchets.</li>\n<li><strong>Description des ouvrages</strong>, article par article, dans l'ordre de la construction : installation de chantier, terrassements, fondations, réseaux enterrés, dallages, élévations (voiles, poteaux, poutres, maçonneries), planchers, escaliers, ouvrages divers (appuis, seuils, acrotères), enduits, réservations et rebouchages.</li>\n</ol>\n<p>Chaque article précise généralement : la <strong>localisation</strong> (où se trouve l'ouvrage), la <strong>nature</strong> et les <strong>caractéristiques</strong> des matériaux, le <strong>mode d'exécution</strong>, les <strong>tolérances</strong> et la <strong>finition</strong>, et le <strong>mode de métré</strong> (unité de mesure et ce qui est compris dans le prix).</p>\n<p>Formules courantes à comprendre précisément :</p>\n<ul>\n<li>« <strong>compris</strong> » ou « y compris » : la prestation citée est incluse dans le prix de l'ouvrage, sans paiement séparé ;</li>\n<li>« <strong>suivant plans du BET</strong> » : les dimensions et armatures sont celles des plans d'exécution ;</li>\n<li>« <strong>ou techniquement équivalent</strong> » : un autre produit peut être proposé s'il présente des performances au moins égales, avec accord du maître d'œuvre ;</li>\n<li>« <strong>à la charge du présent lot</strong> » : l'entreprise de gros œuvre doit le faire, même si cela concerne un autre corps d'état.</li>\n</ul>"
      },
      {
       "titre": "La DPGF et le bordereau de prix",
       "contenu": "<p>La <strong>décomposition du prix global et forfaitaire (DPGF)</strong> est un tableau qui reprend les articles du CCTP avec, pour chacun, l'<strong>unité</strong>, la <strong>quantité</strong>, le <strong>prix unitaire</strong> et le <strong>montant</strong>. Dans un marché forfaitaire, les quantités sont indicatives et c'est l'entreprise qui en est responsable ; dans un marché à prix unitaires, un <strong>bordereau des prix unitaires (BPU)</strong> et un <strong>détail estimatif</strong> jouent ce rôle et ce sont les quantités réellement exécutées qui sont payées.</p>\n<table>\n<thead><tr><th>Unité</th><th>Ouvrages concernés</th></tr></thead>\n<tbody>\n<tr><td>ens. ou forfait (ft)</td><td>Installation de chantier, études d'exécution</td></tr>\n<tr><td>m³</td><td>Terrassements, béton de fondations, béton de voiles (parfois)</td></tr>\n<tr><td>m²</td><td>Voiles (parfois), dallages, planchers, maçonneries, enduits</td></tr>\n<tr><td>ml (mètre linéaire)</td><td>Chaînages, linteaux, appuis, réseaux, drains, joints</td></tr>\n<tr><td>u (unité)</td><td>Regards, réservations particulières, trappes</td></tr>\n<tr><td>kg</td><td>Armatures, si elles sont payées séparément</td></tr>\n</tbody>\n</table>\n<p>Le <strong>mode de métré</strong> précisé dans le CCTP est capital : un voile peut être payé au m² de surface « vides déduits » ou « vides de moins de 1 m² non déduits », avec armatures comprises ou payées au kilogramme. Deux entreprises qui ne mesurent pas de la même façon obtiennent des quantités différentes pour le même ouvrage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en marché forfaitaire, une quantité de DPGF sous-estimée ne sera pas payée en plus. L'entreprise qui signe sans vérifier les quantités supporte l'écart. C'est pourquoi le métré de contrôle à partir des plans est une compétence clé du technicien.</div>"
      },
      {
       "titre": "Méthode d'analyse d'un article de CCTP",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un article en sept points. 1) <strong>Localiser</strong> l'ouvrage dans le bâtiment et sur les plans. 2) Relever les <strong>matériaux</strong> et leurs caractéristiques (classes de béton, type de blocs, aciers, adjuvants). 3) Relever les <strong>documents de référence</strong> cités (DTU, normes, avis techniques). 4) Relever les exigences de <strong>mise en œuvre</strong> (coffrage, parement, cure, joints). 5) Relever les <strong>tolérances</strong> et les <strong>contrôles</strong> demandés (essais, points d'arrêt). 6) Noter ce qui est <strong>compris</strong> dans le prix et le <strong>mode de métré</strong>. 7) Repérer les <strong>interfaces</strong> avec les autres lots (réservations, supports à livrer, protections). Présenter le tout dans un tableau clair, une ligne par exigence, avec la référence de l'article.</div>\n<p>Cette méthode correspond aux compétences évaluées à l'épreuve d'analyse technique : <strong>collecter et classer</strong> des informations, <strong>décoder</strong> des documents, puis produire des documents préparatoires (fiche de tâche, liste de matériels, fiche de contrôle).</p>"
      },
      {
       "titre": "Exemple commenté : article « Voiles en béton armé »",
       "contenu": "<p>Extrait du CCTP du lot 02 Gros œuvre d'un immeuble de logements (texte adapté) :</p>\n<table>\n<thead><tr><th>Article 02.6.1 — Voiles en béton armé</th></tr></thead>\n<tbody>\n<tr><td>Localisation : voiles de façade et de refend du RDC au R+3, suivant plans du BET.</td></tr>\n<tr><td>Béton : C25/30, classe d'exposition XC1 pour les voiles intérieurs, XC4 et XF1 pour les voiles de façade ; consistance S4 ; ciment au choix de l'entreprise conforme à la NF EN 206/CN.</td></tr>\n<tr><td>Épaisseurs : 18 cm pour les refends séparatifs de logements, 20 cm pour les façades.</td></tr>\n<tr><td>Coffrage : banches métalliques ; parement de catégorie courante pour les faces recevant un doublage, parement soigné pour les faces destinées à être peintes directement selon la norme NF P 18-503.</td></tr>\n<tr><td>Armatures : HA B500 et treillis soudés suivant plans du BET ; enrobage conforme aux plans.</td></tr>\n<tr><td>Compris : réservations suivant plans de synthèse, rebouchage des trous de banches au mortier sans retrait, ragréage des balèvres, mannequins de baies, chanfreins sur arêtes vives des baies, cure par produit compatible avec les finitions.</td></tr>\n<tr><td>Tolérances : conformes au NF DTU 21 ; aplomb et planéité renforcés pour les parements soignés.</td></tr>\n<tr><td>Mode de métré : au m² de voile, mesuré sur une face, vides de plus de 1 m² déduits, armatures comprises.</td></tr>\n</tbody>\n</table>\n<p>Extrait de la DPGF : « 02.6.1 Voiles BA ép. 18 — m² — 1 240 » ; « 02.6.1 Voiles BA ép. 20 — m² — 860 ».</p>\n<p><strong>Analyse modèle.</strong></p>\n<ul>\n<li><strong>Béton</strong> : deux bétons différents sont à commander selon la localisation : XC1 pour l'intérieur, XC4 et XF1 pour les façades (pluie et gel modéré). La commande doit porter la désignation complète, par exemple « C25/30 XC4 XF1 S4 D<sub>max</sub> 20 Cl 0,40 », la norme pouvant imposer une résistance supérieure pour certaines classes d'exposition ; l'entreprise le vérifie avec son fournisseur.</li>\n<li><strong>Parements</strong> : deux niveaux de finition ; les faces peintes directement exigent des banches propres et en bon état, une huile appliquée régulièrement et un soin particulier aux reprises. Cela influe sur le temps unitaire.</li>\n<li><strong>Prestations comprises</strong> : rebouchage des trous de banches, ragréage des balèvres, chanfreins et cure ne sont pas payés à part ; ils doivent être intégrés au temps et au coût de l'ouvrage et ne pas être oubliés en fin de chantier.</li>\n<li><strong>Interfaces</strong> : les réservations proviennent des « plans de synthèse » ; il faut donc s'assurer de les avoir avant chaque coulage.</li>\n<li><strong>Vérification de quantité</strong> : un refend de 18 cm mesure 9,40 m de long et 2,52 m de haut par niveau, avec une porte de 0,93 × 2,10 m. Surface brute : 9,40 × 2,52 = 23,69 m². La porte fait 0,93 × 2,10 = 1,95 m², supérieure à 1 m² : elle est déduite. Surface payée : 23,69 − 1,95 = 21,74 m² par niveau, soit 86,96 m² pour les quatre niveaux. On cumule ainsi tous les refends pour comparer au total de 1 240 m².</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> au démarrage d'un chantier, le chef de chantier surligne dans le CCTP toutes les mentions « compris » de son lot et en fait une liste de contrôle de fin de travaux. Les petites prestations comprises (rebouchages, ragréages, nettoyages) sont celles qui génèrent le plus de réserves à la réception lorsqu'elles sont oubliées.</div>"
      },
      {
       "titre": "Contradictions entre pièces et pièges",
       "contenu": "<p>Il arrive que les pièces du marché se contredisent : le CCTP prévoit une épaisseur de 20 cm et le plan d'architecte 18 cm ; la DPGF oublie un ouvrage décrit au CCTP. La règle est donnée par le CCAP, qui fixe l'<strong>ordre de priorité des pièces</strong>. Dans la plupart des marchés, les pièces écrites particulières (CCTP) priment sur les pièces graphiques, et les documents particuliers sur les documents généraux. Mais la bonne attitude reste de <strong>signaler</strong> la contradiction par écrit et de demander une confirmation au maître d'œuvre.</p>\n<ul>\n<li>Ne pas confondre l'article générique (« les bétons seront conformes à… ») et l'article particulier qui peut le compléter ou y déroger.</li>\n<li>Lire jusqu'au bout : la mention « compris » ou une exception figure souvent en fin d'article.</li>\n<li>Repérer les ouvrages « en option » ou « en variante » qui ne seront réalisés que sur décision du maître d'ouvrage.</li>\n<li>Vérifier les <strong>limites de prestations</strong> : qui réalise les réservations, qui rebouche les trémies après passage des gaines, qui fournit les fourreaux.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le CCTP se lit avec un crayon : on y repère ce qu'il faut faire, avec quoi, selon quelles règles, ce qui est compris, et ce qui dépend des autres. La DPGF se contrôle avec les plans, ligne par ligne, en respectant le mode de métré.</div>"
      }
     ],
     "points_cles": [
      "Le CCTP comprend des généralités (références, études, contrôles) et une description article par article des ouvrages.",
      "Un article précise localisation, matériaux, mise en œuvre, tolérances, finitions, prestations comprises et mode de métré.",
      "« Compris » signifie inclus dans le prix ; « à la charge du présent lot » désigne une obligation de l'entreprise.",
      "La DPGF associe à chaque article une unité, une quantité, un prix unitaire et un montant.",
      "En marché forfaitaire, l'entreprise est responsable des quantités ; il faut les contrôler sur plans.",
      "Le mode de métré (vides déduits ou non, armatures comprises ou non) change les quantités.",
      "L'ordre de priorité des pièces est fixé par le CCAP ; toute contradiction se signale par écrit.",
      "Les prestations comprises oubliées sont une source fréquente de réserves."
     ],
     "lexique": [
      {
       "terme": "CCTP",
       "def": "Cahier des clauses techniques particulières décrivant les ouvrages et leurs exigences techniques."
      },
      {
       "terme": "DPGF",
       "def": "Décomposition du prix global et forfaitaire : tableau des ouvrages avec unités, quantités, prix unitaires et montants."
      },
      {
       "terme": "BPU",
       "def": "Bordereau des prix unitaires d'un marché à prix unitaires."
      },
      {
       "terme": "Mode de métré",
       "def": "Règles de mesure d'un ouvrage pour son paiement (unité, déductions, prestations incluses)."
      },
      {
       "terme": "Limite de prestations",
       "def": "Frontière entre ce que réalise un lot et ce que réalisent les autres."
      },
      {
       "terme": "Plan de synthèse",
       "def": "Plan qui regroupe les besoins de tous les lots (réseaux, réservations) pour éviter les conflits."
      },
      {
       "terme": "Parement",
       "def": "Face visible d'un ouvrage, classée selon son niveau de finition."
      },
      {
       "terme": "Balèvre",
       "def": "Petit ressaut de béton à la jonction de deux panneaux de coffrage."
      },
      {
       "terme": "Variante",
       "def": "Solution différente de la solution de base, proposée ou demandée au marché."
      },
      {
       "terme": "Avis technique",
       "def": "Document qui évalue l'aptitude à l'emploi d'un produit ou procédé non traditionnel."
      }
     ]
    },
    {
     "id": "bgo-doc-planning-pic",
     "titre": "Exploiter un planning et un plan d'installation de chantier",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Lire un planning de travaux tous corps d'état et en extraire les informations relatives au gros œuvre",
      "Identifier sur un planning les enchaînements, les jalons et les tâches critiques",
      "Lire un plan d'installation de chantier et en vérifier la pertinence",
      "Produire à partir de ces documents une fiche de préparation de tâche",
      "Argumenter une proposition de modification d'organisation"
     ],
     "sections": [
      {
       "titre": "Les documents d'organisation dans le dossier",
       "contenu": "<p>L'épreuve de préparation et d'organisation de travaux fournit, en plus des plans et du CCTP, des documents qui décrivent l'organisation du chantier : <strong>planning</strong> général ou de détail, <strong>plan d'installation de chantier</strong>, extraits du <strong>PGC</strong> ou du <strong>PPSPS</strong>, caractéristiques des matériels (grue, banches, étais), temps unitaires de l'entreprise, composition des équipes. Les questions demandent de lire ces documents, d'en tirer des conséquences et de produire des documents de préparation : quantitatifs, besoins en matériel, fiches de tâches, plannings de détail, schémas d'organisation de poste.</p>\n<table>\n<thead><tr><th>Document</th><th>Questions typiques</th></tr></thead>\n<tbody>\n<tr><td>Planning général</td><td>Quand commence et finit telle tâche ? Quelles tâches la précèdent ? Quelle est la marge ?</td></tr>\n<tr><td>Planning de détail à compléter</td><td>Placer des tâches calculées, respecter les antériorités, tracer le chemin critique</td></tr>\n<tr><td>PIC</td><td>La grue couvre-t-elle la zone ? Où stocker ? Quel circuit pour les toupies ? Quelles protections ?</td></tr>\n<tr><td>Fiche matériel</td><td>Ce matériel convient-il à la charge, à la portée, à la hauteur ?</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Lire un planning tous corps d'état",
       "contenu": "<p>Un planning de chantier se présente le plus souvent sous forme de <strong>diagramme de Gantt</strong>. Sa lecture suit un ordre précis.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un planning en six étapes. 1) Lire l'<strong>en-tête</strong> : nom de l'opération, date d'édition et indice (un planning périmé est une source d'erreurs), unité de temps (jours, semaines), calendrier (jours ouvrés, congés, jours fériés). 2) Repérer les <strong>jalons</strong> (losanges) : démarrage, hors d'eau, hors d'air, réception. 3) Identifier les <strong>lots</strong> et leurs tâches : souvent regroupées par lot puis par niveau ou par zone. 4) Lire les <strong>liens</strong> (flèches) entre tâches, en particulier entre le gros œuvre et les lots suivants. 5) Repérer le <strong>chemin critique</strong>, souvent en rouge, et les marges éventuelles. 6) Extraire les <strong>dates</strong> et <strong>durées</strong> utiles à la question posée, en citant la ligne du planning.</div>\n<p>Vocabulaire des jalons courants :</p>\n<ul>\n<li><strong>hors d'eau</strong> : la couverture ou l'étanchéité de toiture est réalisée, la pluie ne pénètre plus par le haut ;</li>\n<li><strong>hors d'air</strong> : les menuiseries extérieures sont posées, le bâtiment est fermé ;</li>\n<li><strong>clos-couvert</strong> : ensemble des deux, à partir duquel le second œuvre intérieur peut se développer.</li>\n</ul>\n<p>Le gros œuvre est presque toujours sur le chemin critique jusqu'au hors d'eau : tout retard de structure retarde l'ensemble des corps d'état.</p>"
      },
      {
       "titre": "Lire un plan d'installation de chantier",
       "contenu": "<p>Le PIC se lit comme un plan de masse, avec une légende propre aux installations. On y vérifie systématiquement :</p>\n<ul>\n<li>l'<strong>échelle</strong> et l'<strong>orientation</strong>, indispensables pour mesurer des portées ;</li>\n<li>la <strong>position de la grue</strong>, son rayon d'action (cercle de flèche) et éventuellement les zones de charge particulières ;</li>\n<li>les <strong>accès</strong> (portails véhicules et piétons), la <strong>voie de circulation</strong> et l'aire de retournement ou de stationnement des toupies et camions ;</li>\n<li>les <strong>aires de stockage</strong> (aciers, banches, préfabriqués, blocs) et leur position par rapport à la grue ;</li>\n<li>la <strong>base vie</strong> et son éloignement des zones de levage ;</li>\n<li>les <strong>bennes</strong>, l'aire de lavage des toupies, le bac de décantation ;</li>\n<li>les <strong>réseaux provisoires</strong> et l'armoire électrique de chantier ;</li>\n<li>les contraintes extérieures : bâtiments voisins, voie publique, lignes électriques, arbres conservés, zones interdites au survol.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un PIC, la portée utile n'est pas seulement la distance entre la grue et le bâtiment : c'est la distance entre l'axe de la grue et le point le plus éloigné où une charge lourde doit être prise ou posée. Le point de déchargement des camions, souvent en limite de parcelle, est fréquemment le plus défavorable.</div>"
      },
      {
       "titre": "Exemple commenté : planning et PIC d'un petit collectif",
       "contenu": "<p>Le dossier présente un immeuble R+2 de 12 logements. Extrait du planning (en semaines, S1 = semaine de démarrage) :</p>\n<table>\n<thead><tr><th>Tâche</th><th>Lot</th><th>Début</th><th>Durée</th><th>Prédécesseurs</th></tr></thead>\n<tbody>\n<tr><td>Installation de chantier, terrassements</td><td>GO</td><td>S1</td><td>2 sem.</td><td>—</td></tr>\n<tr><td>Fondations, réseaux sous dallage, dallage</td><td>GO</td><td>S3</td><td>3 sem.</td><td>Terrassements</td></tr>\n<tr><td>Élévation RDC (voiles et dalle haute)</td><td>GO</td><td>S6</td><td>3 sem.</td><td>Dallage</td></tr>\n<tr><td>Élévation R+1</td><td>GO</td><td>S9</td><td>3 sem.</td><td>Élévation RDC</td></tr>\n<tr><td>Élévation R+2 et acrotères</td><td>GO</td><td>S12</td><td>3 sem.</td><td>Élévation R+1</td></tr>\n<tr><td>Étanchéité toiture-terrasse</td><td>Étanchéité</td><td>S15</td><td>2 sem.</td><td>Élévation R+2</td></tr>\n<tr><td>Menuiseries extérieures RDC</td><td>Menuiseries</td><td>S11</td><td>1 sem.</td><td>Élévation R+1 commencée depuis 2 semaines</td></tr>\n</tbody>\n</table>\n<p>Jalon « hors d'eau » en fin de S16. Le PIC, au 1/200, montre une grue à tour de 40 m de flèche placée à 6 m de la façade nord ; le bâtiment mesure 32 m × 12 m ; l'aire de déchargement est au portail sud-ouest, à 38 m de l'axe de la grue. La fiche de la grue indique : 6,0 t jusqu'à 18 m, 2,5 t à 30 m, 1,8 t à 40 m. Le CCTP prévoit des prémurs de 2,2 t maximum pour les façades sud.</p>\n<p><strong>Analyse modèle.</strong></p>\n<ol>\n<li><strong>Chemin critique</strong> : terrassements, fondations, élévations RDC, R+1, R+2, puis étanchéité forment une chaîne sans marge jusqu'au hors d'eau (S16). Le gros œuvre est entièrement critique : un retard d'une semaine sur le RDC décale le hors d'eau d'une semaine.</li>\n<li><strong>Lien avec un décalage</strong> : les menuiseries du RDC commencent en S11, deux semaines après le début de l'élévation du R+1 (S9). Ce lien suppose que le RDC soit débarrassé des étais et que les tableaux de baies soient conformes ; le gros œuvre doit donc avoir réalisé ses autocontrôles de baies du RDC avant S11.</li>\n<li><strong>Vérification de la grue pour les prémurs</strong> : la façade sud est située à 6 + 12 = 18 m de l'axe de la grue au plus près, mais les angles sud du bâtiment sont plus éloignés. Avec la grue placée au milieu de la façade nord, l'angle sud le plus éloigné est à une distance d'environ √(16² + 18²) = √(256 + 324) = √580 ≈ 24,1 m. À cette portée, la charge admissible se situe entre 6,0 t (18 m) et 2,5 t (30 m) ; la courbe complète doit être consultée, mais elle est supérieure à 2,5 t, donc supérieure aux 2,2 t d'un prémur augmentées des accessoires (environ 0,1 t) si la valeur réelle à 24 m le confirme.</li>\n<li><strong>Point de déchargement</strong> : à 38 m, la grue lève entre 2,5 t et 1,8 t, probablement un peu plus de 1,8 t. Un prémur de 2,2 t ne peut pas être pris directement sur le camion à cet endroit. Solutions à proposer : rapprocher l'aire de déchargement à moins de 30 m (par exemple le long de la façade est, si l'accès le permet), décharger avec la grue auxiliaire du camion vers une aire de stockage plus proche, ou programmer une grue mobile pour les jours de livraison des prémurs.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> c'est exactement ce type d'analyse que mène un chef de chantier en période de préparation. Un problème de portée découvert le jour de la première livraison de prémurs immobilise le camion, l'équipe et la grue, et peut coûter plusieurs milliers d'euros en attente et en frais de grue mobile.</div>"
      },
      {
       "titre": "Produire une fiche de préparation de tâche",
       "contenu": "<p>À partir du planning, du PIC, des plans et du CCTP, on rédige une <strong>fiche de préparation de tâche</strong> (ou fiche de tâche, ou mode opératoire simplifié) qui donne à l'équipe tout ce dont elle a besoin. Sa structure type :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu pour « voiles du R+1, zone 1 »</th></tr></thead>\n<tbody>\n<tr><td>Ouvrage et localisation</td><td>Voiles V12 à V16, R+1, zone 1, plans de coffrage indice C</td></tr>\n<tr><td>Dates et durée</td><td>Lundi S9, 1 jour</td></tr>\n<tr><td>Quantités</td><td>21 m² de voiles ép. 18, soit 3,8 m³ de béton ; 290 kg d'aciers</td></tr>\n<tr><td>Équipe</td><td>1 chef d'équipe, 3 coffreurs-bancheurs, 1 grutier</td></tr>\n<tr><td>Matériel</td><td>Banches de 2,70 m, 2 passerelles, aiguille vibrante, benne de 1 m³</td></tr>\n<tr><td>Matériaux</td><td>BPE C25/30 XC1 S4, 2 toupies (8 h et 13 h 30) ; aciers façonnés livrés le vendredi précédent</td></tr>\n<tr><td>Mode opératoire</td><td>Huilage, mise en place des banches face 1, ferraillage et réservations, fermeture, contrôle, coulage par couches, décoffrage le lendemain</td></tr>\n<tr><td>Sécurité</td><td>Passerelles avec garde-corps, élingage par l'élingueur désigné, gants et lunettes, zone de levage balisée</td></tr>\n<tr><td>Contrôles</td><td>Implantation, aplomb des banches, enrobages, réservations, bon de livraison béton, fiche d'autocontrôle</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une fiche de tâche répond aux questions qui, quoi, où, quand, comment, avec quoi, en sécurité, et comment contrôler. Chaque donnée doit provenir d'un document identifié ou d'un calcul présenté.</div>"
      }
     ],
     "points_cles": [
      "Lire l'en-tête d'un planning : date d'édition, indice, unité de temps, calendrier.",
      "Jalons : hors d'eau, hors d'air, clos-couvert, réception.",
      "Le gros œuvre est généralement sur le chemin critique jusqu'au hors d'eau.",
      "Les liens avec décalage imposent au gros œuvre de livrer des zones contrôlées à date.",
      "Sur le PIC, la portée utile est la distance au point le plus éloigné où une charge lourde est prise ou posée.",
      "Vérifier la grue pour la charge la plus lourde, y compris au point de déchargement.",
      "Proposer des solutions argumentées : déplacer une aire, changer de moyen de levage, modifier le phasage.",
      "La fiche de tâche répond à qui, quoi, où, quand, comment, avec quoi, en sécurité, et avec quels contrôles."
     ],
     "lexique": [
      {
       "terme": "Jalon",
       "def": "Événement ponctuel marquant une étape du planning, sans durée."
      },
      {
       "terme": "Hors d'eau",
       "def": "Étape où la toiture ou l'étanchéité protège le bâtiment de la pluie."
      },
      {
       "terme": "Hors d'air",
       "def": "Étape où les menuiseries extérieures ferment le bâtiment."
      },
      {
       "terme": "Clos-couvert",
       "def": "État d'un bâtiment hors d'eau et hors d'air."
      },
      {
       "terme": "Tous corps d'état (TCE)",
       "def": "Qui concerne l'ensemble des lots d'un chantier."
      },
      {
       "terme": "Portée utile",
       "def": "Distance horizontale entre l'axe de la grue et le point de prise ou de pose d'une charge."
      },
      {
       "terme": "Aire de déchargement",
       "def": "Zone du chantier où les camions déposent les matériaux."
      },
      {
       "terme": "Fiche de tâche",
       "def": "Document qui rassemble pour une équipe toutes les informations nécessaires à une tâche."
      },
      {
       "terme": "Phasage",
       "def": "Découpage d'un ouvrage en zones ou en étapes successives de réalisation."
      },
      {
       "terme": "Grue mobile",
       "def": "Grue sur porteur routier, utilisée pour des levées ponctuelles ou lourdes."
      }
     ]
    },
    {
     "id": "bgo-doc-fiches-produits",
     "titre": "Fiches techniques, fiches de données de sécurité et bons de livraison",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Exploiter une fiche technique de produit pour en extraire performances, conditions d'emploi et consommations",
      "Retrouver dans une fiche de données de sécurité les dangers, les protections et les conduites à tenir",
      "Interpréter les pictogrammes et mentions de danger du règlement CLP",
      "Contrôler un bon de livraison de béton prêt à l'emploi par rapport à la commande et au CCTP",
      "Calculer une quantité de produit à commander à partir d'une consommation donnée"
     ],
     "sections": [
      {
       "titre": "Trois documents, trois usages",
       "contenu": "<p>Chaque produit qui entre sur le chantier est accompagné ou documenté par des pièces que le technicien doit savoir exploiter rapidement.</p>\n<table>\n<thead><tr><th>Document</th><th>Émis par</th><th>Sert à</th></tr></thead>\n<tbody>\n<tr><td>Fiche technique (FT)</td><td>Fabricant</td><td>Connaître les performances, le domaine d'emploi, la mise en œuvre, les consommations</td></tr>\n<tr><td>Fiche de données de sécurité (FDS)</td><td>Fournisseur d'un produit chimique dangereux</td><td>Connaître les dangers, les protections, les premiers secours, le stockage, l'élimination</td></tr>\n<tr><td>Bon de livraison (BL)</td><td>Fournisseur, à chaque livraison</td><td>Vérifier que la livraison correspond à la commande ; preuve de la livraison</td></tr>\n<tr><td>Déclaration des performances (DoP)</td><td>Fabricant d'un produit marqué CE</td><td>Attester les performances déclarées selon la norme harmonisée</td></tr>\n<tr><td>Avis technique ou document technique d'application</td><td>Commission placée auprès du CSTB</td><td>Valider l'emploi d'un procédé non traditionnel dans des conditions définies</td></tr>\n</tbody>\n</table>\n<p>À l'épreuve écrite, ces documents sont fournis en extraits dans le dossier technique ; les questions demandent d'en extraire une donnée, de la confronter au CCTP ou aux conditions du chantier, et d'en déduire une décision (accepter, refuser, adapter, commander).</p>"
      },
      {
       "titre": "Lire une fiche technique de produit",
       "contenu": "<p>Une fiche technique présente généralement les rubriques suivantes : description et domaine d'emploi, caractéristiques (performances mesurées, normes et certifications), supports admissibles, préparation des supports, mise en œuvre (gâchage, application, épaisseurs, températures), consommation, conditionnement et stockage (durée de conservation), précautions et limites d'emploi.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une fiche technique en cinq questions. 1) Le produit est-il <strong>adapté</strong> à l'usage prévu et au support du chantier (domaine d'emploi, supports admis) ? 2) Ses <strong>performances</strong> satisfont-elles les exigences du CCTP (classe, résistance, certification) ? 3) Les <strong>conditions de mise en œuvre</strong> sont-elles compatibles avec le chantier (températures, délais, épaisseurs, outillage) ? 4) Quelle <strong>quantité</strong> commander (consommation × surface ou volume, plus pertes) ? 5) Quelles <strong>précautions</strong> de stockage et de sécurité prendre ?</div>\n<p>Exemple de calcul : un mortier de réparation est donné pour une consommation de 1,9 kg de poudre par m² et par mm d'épaisseur. Pour ragréer 14 m² de parements sur 5 mm d'épaisseur moyenne : 1,9 × 5 × 14 = 133 kg. Avec 10 % de pertes : 146,3 kg, soit 6 sacs de 25 kg (150 kg).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la consommation indiquée sur une fiche technique est une valeur théorique sur un support plan. Sur un support irrégulier ou très absorbant, la consommation réelle est supérieure. On ajoute toujours une marge de pertes et on vérifie l'épaisseur réelle à appliquer.</div>"
      },
      {
       "titre": "Lire une fiche de données de sécurité",
       "contenu": "<p>La <strong>fiche de données de sécurité (FDS)</strong> est obligatoire pour les produits chimiques dangereux, selon le règlement européen <strong>REACH</strong>. Elle comporte toujours <strong>16 rubriques</strong> dans un ordre fixe. Les plus utiles sur le chantier sont :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>1. Identification</td><td>Nom du produit, usage, fournisseur, numéro d'appel d'urgence</td></tr>\n<tr><td>2. Identification des dangers</td><td>Classification, pictogrammes, mentions de danger (H) et conseils de prudence (P)</td></tr>\n<tr><td>4. Premiers secours</td><td>Conduite à tenir en cas de contact avec la peau, les yeux, d'inhalation, d'ingestion</td></tr>\n<tr><td>7. Manipulation et stockage</td><td>Précautions, conditions de stockage, incompatibilités</td></tr>\n<tr><td>8. Contrôle de l'exposition, protection individuelle</td><td>Valeurs limites d'exposition, EPI : gants (matériau), lunettes, protection respiratoire</td></tr>\n<tr><td>13. Considérations relatives à l'élimination</td><td>Filière d'élimination du produit et des emballages</td></tr>\n</tbody>\n</table>\n<p>L'étiquetage des produits suit le <strong>règlement CLP</strong> : des <strong>pictogrammes</strong> en losange à bordure rouge, une <strong>mention d'avertissement</strong> (« Danger » ou « Attention »), des <strong>mentions de danger</strong> codées H (par exemple H315 provoque une irritation cutanée, H317 peut provoquer une allergie cutanée, H318 provoque des lésions oculaires graves) et des <strong>conseils de prudence</strong> codés P (par exemple porter des gants de protection, en cas de contact avec les yeux rincer avec précaution à l'eau pendant plusieurs minutes).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la FDS doit être disponible sur le chantier pour chaque produit dangereux utilisé, et les compagnons doivent être informés de son contenu. Elle sert aussi aux secours : en cas d'accident, on la remet au médecin ou on l'utilise pour renseigner le centre antipoison.</div>"
      },
      {
       "titre": "Exemple commenté : FDS d'un ciment et d'une huile de décoffrage",
       "contenu": "<p>Le dossier fournit des extraits de deux FDS.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Ciment CEM II/A-LL 42,5 R (extrait)</th><th>Huile de décoffrage végétale (extrait)</th></tr></thead>\n<tbody>\n<tr><td>2. Dangers</td><td>Pictogrammes : corrosion, point d'exclamation. Mention : Danger. H315, H317, H318, H335 (peut irriter les voies respiratoires)</td><td>Non classé dangereux ; peut former un film glissant</td></tr>\n<tr><td>4. Premiers secours</td><td>Yeux : rincer immédiatement et abondamment à l'eau pendant au moins 20 minutes, consulter un médecin. Peau : laver à l'eau, retirer les vêtements imprégnés</td><td>Yeux : rincer à l'eau</td></tr>\n<tr><td>7. Stockage</td><td>Au sec, sacs fermés ; teneur en chrome VI soluble garantie pendant la durée indiquée sur l'emballage</td><td>À l'abri du gel et de la chaleur</td></tr>\n<tr><td>8. Protections</td><td>Gants imperméables résistant aux alcalis (nitrile) doublés coton, lunettes étanches, masque en cas d'empoussièrement, vêtements à manches longues</td><td>Gants recommandés, lunettes lors de la pulvérisation</td></tr>\n<tr><td>13. Élimination</td><td>Ciment durci : déchet inerte ; sacs vides : déchets non dangereux</td><td>Emballages souillés : selon la réglementation locale</td></tr>\n</tbody>\n</table>\n<p><strong>Question type : définir les mesures de prévention pour le gâchage de mortier à la bétonnière et la pulvérisation de l'huile sur les banches.</strong></p>\n<p>Analyse modèle :</p>\n<ul>\n<li><strong>Dangers identifiés</strong> (rubrique 2 de la FDS du ciment) : irritation cutanée (H315), allergie cutanée (H317), lésions oculaires graves (H318), irritation respiratoire (H335). Le danger le plus grave est la projection dans les yeux.</li>\n<li><strong>Mesures</strong> (rubriques 7 et 8) : gâcher en ouvrant les sacs avec précaution, en se plaçant dos au vent, ou utiliser des sacs hydrosolubles ou un silo avec dosage automatique ; porter des lunettes étanches et des gants nitrile ; manches longues ; masque en cas de poussière. Prévoir sur le poste un <strong>flacon de rinçage oculaire</strong> et un point d'eau.</li>\n<li><strong>Premiers secours</strong> (rubrique 4) : rinçage immédiat et prolongé des yeux, consultation médicale ; ces consignes sont rappelées lors du briefing.</li>\n<li><strong>Huile</strong> : produit non classé, mais lunettes pour la pulvérisation et vigilance au film glissant sur les passerelles de banches : pulvériser avant de mettre les banches en position verticale ou nettoyer les passerelles.</li>\n<li><strong>Déchets</strong> (rubrique 13) : ciment durci en benne inertes, sacs vides en benne non dangereux.</li>\n</ul>"
      },
      {
       "titre": "Contrôler un bon de livraison de béton",
       "contenu": "<p>Le <strong>bon de livraison</strong> de béton prêt à l'emploi comporte, selon la norme NF EN 206/CN, au minimum : le nom de la centrale, le numéro du bon, la date et l'heure de chargement, l'identification du camion, le nom du client et du chantier, le volume livré, la désignation du béton (type, classes de résistance, d'exposition, de consistance, D<sub>max</sub>, teneur en chlorures), le type de ciment, les adjuvants éventuels, et des cases pour l'heure d'arrivée, de début et de fin de déchargement et les ajouts éventuels autorisés.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôle d'une toupie. Commande : 7 m³ de BPS C30/37 XC4 XF1 S4 D<sub>max</sub> 20 Cl 0,40 pour les voiles de façade. Bon reçu : « BPS NF EN 206/CN C30/37 XC4 XF1 S3 D<sub>max</sub> 20 Cl 0,40, CEM II/A-LL 42,5, 7,0 m³, chargement 9 h 05 ». Arrivée sur chantier : 10 h 50. 1) Comparer la désignation ligne par ligne : la classe de consistance livrée est S3 au lieu de S4. 2) Vérifier le délai : 1 h 45 entre chargement et arrivée ; la norme et les conditions du fournisseur limitent la durée de transport et de mise en œuvre (on se réfère au délai indiqué sur le bon ou au contrat). 3) Décision : prévenir immédiatement la centrale ; un S3 dans un voile fortement armé risque de mal se mettre en place. Un ajout de superplastifiant peut être autorisé par la centrale et noté sur le bon ; un ajout d'eau ne l'est pas. Si aucune solution conforme n'est validée, refuser la toupie. 4) Noter les heures et la décision sur le bon et sur le rapport journalier, et le faire signer.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les bons de livraison signés sont archivés avec le chantier. Ils servent à la facturation, au suivi des consommations (comparaison au métré), et en cas de litige sur la qualité du béton, à identifier précisément le béton coulé dans chaque élément, en lien avec le numéro de la toupie et l'heure de coulage notés dans le rapport journalier.</div>"
      }
     ],
     "points_cles": [
      "Fiche technique : domaine d'emploi, performances, supports, mise en œuvre, consommation, stockage.",
      "Quantité à commander = consommation × surface (ou volume) × épaisseur éventuelle, plus une marge de pertes.",
      "La FDS compte 16 rubriques ; les rubriques 2, 4, 7, 8 et 13 sont les plus utiles sur chantier.",
      "Étiquetage CLP : pictogrammes, mention d'avertissement, mentions H et conseils P.",
      "Le ciment frais : irritation et allergie cutanées, lésions oculaires graves ; lunettes et gants nitrile.",
      "Le bon de livraison de BPE se compare ligne par ligne à la commande et au CCTP.",
      "Un béton non conforme se signale avant déchargement ; aucun ajout d'eau non prévu.",
      "Heures, décisions et ajouts autorisés sont notés sur le bon et dans le rapport journalier."
     ],
     "lexique": [
      {
       "terme": "Fiche technique",
       "def": "Document du fabricant décrivant les caractéristiques et la mise en œuvre d'un produit."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité en 16 rubriques, obligatoire pour les produits chimiques dangereux."
      },
      {
       "terme": "REACH",
       "def": "Règlement européen sur l'enregistrement, l'évaluation et l'autorisation des substances chimiques."
      },
      {
       "terme": "CLP",
       "def": "Règlement européen sur la classification, l'étiquetage et l'emballage des produits chimiques."
      },
      {
       "terme": "Mention de danger (H)",
       "def": "Phrase codée décrivant la nature d'un danger, par exemple H318."
      },
      {
       "terme": "Conseil de prudence (P)",
       "def": "Phrase codée décrivant une mesure de prévention ou de premiers secours."
      },
      {
       "terme": "Déclaration des performances",
       "def": "Document du fabricant attestant les performances d'un produit marqué CE."
      },
      {
       "terme": "Bon de livraison",
       "def": "Document accompagnant une livraison, décrivant le produit, la quantité et les heures."
      },
      {
       "terme": "Consommation",
       "def": "Quantité de produit nécessaire par unité de surface ou de volume d'ouvrage."
      },
      {
       "terme": "Rinçage oculaire",
       "def": "Dispositif de lavage des yeux à disposer près des postes exposés aux projections."
      }
     ]
    }
   ]
  }
 ]
};
