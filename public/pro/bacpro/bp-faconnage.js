/* Polymates — Bac pro Façonnage de produits imprimés, routage — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-faconnage"] = {
 "id": "bp-faconnage",
 "nom": "Façonnage de produits imprimés, routage",
 "icone": "🎓",
 "couleur": "#b48ad8",
 "intro": "Le baccalauréat professionnel Façonnage de produits imprimés, routage forme des conducteurs de machines de façonnage et de routage capables de préparer, régler et conduire les installations de coupe, de pliage, d'assemblage, de brochage, de reliure, d'ennoblissement et de mise sous pli, puis de contrôler la qualité des produits et de suivre la production. Il mène aux métiers de conducteur de massicot, de plieuse, de chaîne de brochage ou de ligne de routage, puis de chef d'équipe en atelier de finition, chez un façonnier ou chez un routeur. Ce cours couvre les savoirs de la première et de la terminale, en prolongement du cours de seconde de la famille des métiers des industries graphiques et de la communication. Il comprend un bloc de cours théorique (organisation de la production, matières d'œuvre, matériels, qualité, maintenance, santé-sécurité-environnement) et un bloc d'analyse de documents qui montre comment exploiter les documents professionnels rencontrés à l'épreuve écrite.",
 "parties": [
  {
   "titre": "Partie 1 — Communication technique et organisation de la production",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bfpi-flux-cahier-charges",
     "titre": "Flux numérique, cahier des charges et contrôles systématiques",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Situer l'atelier de façonnage et de routage dans le flux de production numérique de l'entreprise graphique.",
      "Exploiter un cahier des charges client pour en extraire les exigences qui concernent le façonnage et le routage.",
      "Distinguer les bons de contrôle successifs (BàG, BàT, BàR, BàF) et leur rôle contractuel.",
      "Repérer les informations transmises par le flux numérique (JDF, fiche d'ordre de fabrication) utiles au poste de façonnage."
     ],
     "sections": [
      {
       "titre": "Le façonnage, dernier maillon avant le client",
       "contenu": "\n<p>En seconde, la chaîne graphique a été présentée comme une suite d'étapes : prépresse, impression, façonnage, routage. En première, on regarde cette chaîne depuis l'atelier de façonnage. Ce poste reçoit des feuilles imprimées qui ont déjà coûté du papier, de l'encre, du temps machine et du temps de prépresse. Une erreur commise ici détruit toute la valeur accumulée en amont. C'est pourquoi l'opérateur de façonnage doit connaître ce qui a été décidé avant lui et ce qui sera fait après lui.</p>\n<p>Le <strong>façonnage</strong> regroupe toutes les opérations qui transforment des feuilles imprimées en produit fini : coupe, pliage, assemblage, piqûre, brochage, reliure, découpe, ennoblissement, conditionnement. Le <strong>routage</strong> regroupe les opérations qui préparent l'envoi des produits finis à leurs destinataires : mise sous film ou sous enveloppe, adressage, tri, conditionnement par destination, dépôt chez l'opérateur postal ou le transporteur.</p>\n<p>Dans une entreprise, le façonnage peut être intégré à une imprimerie (atelier de finition) ou constituer une entreprise à part entière, appelée <strong>façonnier</strong> ou <strong>brocheur-relieur</strong>, qui travaille en sous-traitance pour plusieurs imprimeurs. Le routage est souvent assuré par un <strong>routeur</strong>, entreprise spécialisée qui reçoit des produits finis et des fichiers d'adresses. Dans tous les cas, l'opérateur doit pouvoir lire les documents produits par les autres services.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un façonnier reçoit des palettes de feuilles imprimées accompagnées d'un bon de livraison et d'une fiche de fabrication émise par l'imprimeur donneur d'ordre. Avant de couper la première rame, le conducteur vérifie que le nombre de feuilles reçues correspond à la quantité annoncée, augmentée de la passe prévue pour le façonnage.</div>\n"
      },
      {
       "titre": "Le flux numérique de production",
       "contenu": "\n<p>Les entreprises graphiques fonctionnent aujourd'hui avec un <strong>flux numérique</strong> (en anglais <em>workflow</em>) : un ensemble de logiciels reliés entre eux qui fait circuler les fichiers et les informations de fabrication du devis jusqu'à la facturation. On y distingue deux flux qui avancent en parallèle :</p>\n<ul>\n<li>le <strong>flux de contenu</strong> : les fichiers PDF des pages, les fichiers d'imposition, les fichiers d'adresses pour le routage ;</li>\n<li>le <strong>flux d'informations</strong> : les données de fabrication (formats, quantités, papiers, opérations, délais) et les retours de production (quantités produites, temps passés, incidents).</li>\n</ul>\n<p>Le flux d'informations est géré par un logiciel de <strong>gestion de production assistée par ordinateur</strong> (GPAO), appelé aussi <strong>MIS</strong> (<em>Management Information System</em>) dans les entreprises graphiques. Ce logiciel établit le devis, crée l'ordre de fabrication, planifie les machines et récupère les temps réels pour calculer le prix de revient.</p>\n<p>Pour échanger ces données entre logiciels et machines, la profession utilise un format standard appelé <strong>JDF</strong> (<em>Job Definition Format</em>), complété par le <strong>JMF</strong> (<em>Job Messaging Format</em>) qui transmet les messages d'état des machines. Le consortium CIP4, qui regroupe des fabricants et des imprimeurs, maintient ces formats. Grâce au JDF, le logiciel d'imposition peut par exemple transmettre au massicot programmable les cotes de coupe, ou à la plieuse les formats et le schéma de pliage, ce qui réduit le temps de calage.</p>\n<table>\n<thead><tr><th>Étape</th><th>Document ou fichier produit</th><th>Ce qui intéresse le façonnage</th></tr></thead>\n<tbody>\n<tr><td>Devis</td><td>Proposition chiffrée</td><td>Opérations prévues, temps alloués, quantités</td></tr>\n<tr><td>Commande</td><td>Bon de commande, cahier des charges</td><td>Format fini, type de reliure, délais, conditionnement</td></tr>\n<tr><td>Prépresse</td><td>Imposition, BàT</td><td>Sens de pliage, poses, marques de coupe et de collationnement</td></tr>\n<tr><td>Impression</td><td>Feuilles imprimées, fiche de suivi</td><td>Quantité réelle, sens des fibres, séchage</td></tr>\n<tr><td>Façonnage</td><td>Fiche de suivi, BàF</td><td>Cadences, gâche, incidents</td></tr>\n<tr><td>Routage</td><td>Fichier d'adresses, bordereau de dépôt</td><td>Nombre de plis, tri, poids, date de dépôt</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le flux numérique ne supprime pas la vérification humaine. Une donnée fausse saisie au devis se propage jusqu'au massicot si personne ne la contrôle. L'opérateur reste responsable de vérifier la cohérence entre la fiche, le BàT et les feuilles réellement reçues.</div>\n"
      },
      {
       "titre": "Le cahier des charges client",
       "contenu": "\n<p>Le <strong>cahier des charges</strong> est le document par lequel le client exprime son besoin. Il peut être très détaillé (catalogue d'un grand distributeur, magazine périodique) ou se limiter à quelques lignes sur un bon de commande. Le service commercial et le service fabrication le traduisent en données techniques. Pour le façonnage et le routage, on y cherche principalement :</p>\n<ul>\n<li>la <strong>définition du produit</strong> : format fini, nombre de pages, type de reliure, couverture, finitions (pelliculage, vernis sélectif, dorure, découpe) ;</li>\n<li>la <strong>quantité</strong> et la tolérance admise (une livraison peut être acceptée avec un écart en plus ou en moins fixé par le contrat ou par les usages de la profession) ;</li>\n<li>les <strong>exigences de qualité</strong> : résistance de la reliure, aspect, absence de marques, régularité de la coupe ;</li>\n<li>le <strong>conditionnement</strong> : nombre d'exemplaires par paquet, mise sous film, cartons, palettes, étiquetage ;</li>\n<li>les <strong>conditions de distribution</strong> : livraison en un lieu unique ou routage vers des milliers d'adresses, date de dépôt postal, poids maximal du pli ;</li>\n<li>les <strong>délais</strong> : date de remise des fichiers, date du BàT, date de livraison ou de dépôt.</li>\n</ul>\n<p>Certaines exigences sont implicites : un client qui commande un catalogue routé par voie postale attend que l'envoi respecte les conditions de l'offre postale choisie, même s'il ne les détaille pas. L'entreprise doit donc compléter le cahier des charges par sa connaissance du métier.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour extraire d'un cahier des charges les exigences du façonnage, procéder en quatre passes. 1) Surligner tout ce qui décrit le produit fini (format, pagination, reliure, finitions). 2) Relever les quantités et les tolérances. 3) Relever ce qui concerne l'emballage et la distribution. 4) Lister les points flous ou contradictoires à faire préciser (par exemple un format fini de 210 x 297 mm annoncé avec une reliure à la française, mais un fichier monté à l'italienne). Chaque point flou devient une question écrite au commercial avant le lancement.</div>\n"
      },
      {
       "titre": "Les bons de contrôle successifs",
       "contenu": "\n<p>Tout au long de la fabrication, des <strong>bons</strong> marquent les étapes où le produit est vérifié et validé. Un bon signé engage la personne qui le signe : il fixe la référence à laquelle la production devra être conforme.</p>\n<table>\n<thead><tr><th>Sigle</th><th>Nom</th><th>Qui valide</th><th>Objet</th></tr></thead>\n<tbody>\n<tr><td>BàG</td><td>Bon à graver (ou à flasher)</td><td>Prépresse, parfois client</td><td>Autorise la fabrication des plaques ou le lancement en numérique à partir des fichiers imposés</td></tr>\n<tr><td>BàT</td><td>Bon à tirer</td><td>Client</td><td>Épreuve validée qui sert de référence pour le contenu et les couleurs</td></tr>\n<tr><td>BàR</td><td>Bon à rouler</td><td>Conducteur, chef d'équipe, parfois client</td><td>Premier exemplaire conforme sorti de la machine en début de production, à partir duquel la production en série est lancée</td></tr>\n<tr><td>BàF</td><td>Bon à façonner</td><td>Chef d'atelier, client pour les travaux sensibles</td><td>Premier exemplaire façonné conforme (pliage, assemblage, coupe, finition) qui autorise la série</td></tr>\n</tbody>\n</table>\n<p>Pour le façonnage, deux documents comptent particulièrement. Le <strong>BàT</strong> indique ce que le client a validé : un défaut présent sur le BàT signé (une page à l'envers, par exemple) n'est pas imputable à l'imprimeur, mais il faut le signaler. Le <strong>BàF</strong> sert de référence pendant toute la série : l'opérateur le conserve au poste et compare régulièrement les prélèvements à ce modèle.</p>\n<p>On rencontre aussi la <strong>maquette en blanc</strong> : un exemplaire réalisé avec le papier réel mais sans impression. Elle permet de vérifier l'épaisseur du dos, la tenue de la reliure, le poids d'un envoi postal ou l'encombrement d'un conditionnement avant de lancer l'impression.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> lancer une série sans BàF signé, même pour gagner quelques minutes, transfère la responsabilité de tout défaut à l'opérateur. Si la série entière doit être refaite, la perte porte sur le papier, l'impression et le façonnage.</div>\n"
      },
      {
       "titre": "La fiche d'ordre de fabrication vue du façonnage",
       "contenu": "\n<p>L'<strong>ordre de fabrication</strong> (OF), appelé aussi fiche de fabrication ou dossier de fabrication, est le document interne qui décrit le travail à réaliser. Il porte un numéro unique qui suit le travail jusqu'à la facturation. La lecture générale de ce document a été vue en seconde ; au poste de façonnage, on y cherche des informations plus fines :</p>\n<ul>\n<li>la <strong>passe</strong> (ou gâche prévue) : nombre de feuilles supplémentaires prévues pour les calages et les incidents, souvent distinguée entre impression et façonnage ;</li>\n<li>la <strong>composition du produit</strong> : nombre de cahiers, pagination de chaque cahier, ordre d'assemblage, couverture ;</li>\n<li>les <strong>formats</strong> : format de la feuille imprimée, format à plat, format fini, rognes ;</li>\n<li>les <strong>opérations</strong> et la machine affectée à chacune, avec le temps alloué ;</li>\n<li>les <strong>consignes particulières</strong> : sens des fibres, encre fragile, pelliculage à laisser reposer, échantillons à prélever pour le client.</li>\n</ul>\n<p>La fiche est souvent accompagnée d'un <strong>chemin de fer</strong> (représentation de toutes les pages dans l'ordre), d'un <strong>schéma de pliage</strong> et d'un <strong>plan de coupe</strong>. Ces documents sont étudiés en détail dans le bloc d'analyse de documents.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la quantité utile d'une fabrication n'est jamais le nombre de feuilles reçues. Il faut retirer la passe de calage de chaque machine du façonnage. Un écart important entre les feuilles reçues et les feuilles prévues doit être signalé avant le démarrage.</div>\n"
      },
      {
       "titre": "Communiquer les informations de production",
       "contenu": "\n<p>L'opérateur de façonnage ne se contente pas de lire des informations : il en produit. Ses relevés alimentent le MIS et servent à facturer le client, à calculer le prix de revient et à améliorer les devis suivants. Les informations à transmettre sont :</p>\n<ul>\n<li>les <strong>quantités</strong> : exemplaires bons, exemplaires rebutés, feuilles de gâche ;</li>\n<li>les <strong>temps</strong> : temps de calage, temps de production, arrêts avec leur cause ;</li>\n<li>les <strong>incidents</strong> : panne, défaut de matière, défaut d'impression découvert au façonnage ;</li>\n<li>les <strong>non-conformités</strong> et les décisions prises (tri, reprise, accord du client).</li>\n</ul>\n<p>Ces informations sont saisies sur une borne d'atelier (terminal de saisie des temps), sur une tablette ou sur une fiche papier selon l'équipement de l'entreprise. Elles doivent être exactes et saisies au fil de l'eau, pas reconstituées en fin de poste.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exemple de bilan de quantités. La fiche annonce 10 000 brochures avec une passe façonnage de 3 %. Les feuilles reçues permettent de produire 10 300 exemplaires. Le calage de l'assembleuse-piqueuse consomme 120 exemplaires, celui du trilame 60. Il reste 10 300 - 120 - 60 = 10 120 exemplaires possibles. Si le contrôle en cours de production écarte 85 exemplaires défectueux, on livre 10 120 - 85 = 10 035 exemplaires, soit une quantité supérieure à la commande : la passe a été suffisante. Le bilan se saisit avec ces quatre nombres (reçus, calage, rebut, livrés).</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les chefs de fabrication comparent chaque semaine les temps réels aux temps du devis. Un écart répété sur un même type de travail conduit à corriger les barèmes de chiffrage, ce qui n'est possible que si les opérateurs saisissent des temps fiables.</div>\n"
      }
     ],
     "points_cles": [
      "Le façonnage transforme des feuilles imprimées en produit fini ; le routage prépare son envoi aux destinataires.",
      "Le flux numérique transporte à la fois les fichiers (contenu) et les données de fabrication (informations).",
      "La GPAO, ou MIS, gère devis, ordres de fabrication, planning et retours de production.",
      "Le format JDF permet de transmettre aux machines de façonnage des réglages préparés en amont.",
      "Le cahier des charges fixe le produit, la quantité, la qualité, le conditionnement, la distribution et les délais.",
      "BàG, BàT, BàR et BàF marquent les validations successives ; le BàF sert de référence pendant toute la série de façonnage.",
      "La maquette en blanc vérifie épaisseur, poids et tenue avant impression.",
      "Les relevés de quantités, de temps et d'incidents saisis par l'opérateur servent à facturer et à améliorer les devis."
     ],
     "lexique": [
      {
       "terme": "Façonnier",
       "def": "Entreprise spécialisée dans le façonnage, travaillant le plus souvent en sous-traitance pour des imprimeurs."
      },
      {
       "terme": "Routeur",
       "def": "Entreprise ou service qui prépare l'expédition des imprimés vers leurs destinataires (mise sous pli, adressage, tri, dépôt)."
      },
      {
       "terme": "Flux numérique",
       "def": "Ensemble de logiciels reliés qui font circuler fichiers et données de fabrication du devis à la facturation."
      },
      {
       "terme": "MIS / GPAO",
       "def": "Logiciel de gestion de production qui établit devis, ordres de fabrication, planning et suivi des temps."
      },
      {
       "terme": "JDF",
       "def": "Format standard d'échange des données de fabrication entre logiciels et machines des industries graphiques."
      },
      {
       "terme": "Cahier des charges",
       "def": "Document qui exprime le besoin du client : produit, quantité, qualité, conditionnement, distribution, délais."
      },
      {
       "terme": "BàF",
       "def": "Bon à façonner : premier exemplaire façonné conforme, validé, qui autorise la production en série."
      },
      {
       "terme": "BàR",
       "def": "Bon à rouler : premier exemplaire conforme validé en début de production sur une machine."
      },
      {
       "terme": "Maquette en blanc",
       "def": "Exemplaire réalisé avec les vrais supports mais sans impression, pour vérifier épaisseur, poids et tenue."
      },
      {
       "terme": "Passe",
       "def": "Quantité supplémentaire de feuilles prévue pour couvrir les calages et les rebuts."
      }
     ]
    },
    {
     "id": "bfpi-cadre-juridique-organisation",
     "titre": "Cadre juridique de l'imprimé et organisation de l'entreprise",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Identifier les mentions légales et les identifiants qui doivent figurer sur un imprimé et vérifier leur présence avant façonnage.",
      "Expliquer le principe du dépôt légal et du droit d'auteur et leurs conséquences pour l'entreprise graphique.",
      "Respecter la confidentialité des documents et des fichiers d'adresses confiés par le client.",
      "Lire l'organigramme d'une entreprise de façonnage-routage et identifier le bon interlocuteur selon le problème rencontré."
     ],
     "sections": [
      {
       "titre": "Pourquoi le droit concerne l'atelier",
       "contenu": "\n<p>Un imprimé est un objet public : il circule, il est lu, il engage la responsabilité de ceux qui l'ont fabriqué et diffusé. Plusieurs textes encadrent donc sa fabrication et sa diffusion. L'opérateur de façonnage n'est pas juriste, mais il intervient au moment où le produit devient définitif. S'il constate l'absence d'une mention obligatoire ou une anomalie dans un identifiant, il doit savoir que ce n'est pas un détail de présentation : le produit pourrait être non conforme à la loi ou aux exigences du distributeur.</p>\n<p>Les règles abordées ici relèvent de quatre domaines :</p>\n<ul>\n<li>les <strong>mentions obligatoires</strong> qui identifient l'imprimeur et, selon le produit, l'éditeur ;</li>\n<li>les <strong>identifiants normalisés</strong> qui permettent de référencer et de vendre un livre ou une revue ;</li>\n<li>le <strong>dépôt légal</strong>, qui organise la conservation des documents publiés ;</li>\n<li>le <strong>droit d'auteur</strong> et la <strong>confidentialité</strong>, qui protègent les créateurs et les clients.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la vérification du contenu relève d'abord du client et du prépresse, qui ont validé le BàT. Mais tout opérateur qui repère une anomalie juridique visible (mention absente, code-barres illisible) doit la signaler avant de poursuivre, car après façonnage la correction coûte beaucoup plus cher.</div>\n"
      },
      {
       "titre": "Les mentions obligatoires",
       "contenu": "\n<p>La loi du 29 juillet 1881 sur la liberté de la presse impose que tout écrit rendu public porte l'indication du <strong>nom et du domicile de l'imprimeur</strong>. Cette mention, appelée souvent <strong>mention d'imprimeur</strong> ou <em>achevé d'imprimer</em> dans le livre, permet d'identifier qui a fabriqué le document. La loi prévoit une exception pour les petits travaux courants appelés <strong>travaux de ville</strong> (cartes de visite, faire-part, papier à en-tête, formulaires), qui ne sont pas destinés à une diffusion publique.</p>\n<p>Selon le type de produit, d'autres mentions s'ajoutent :</p>\n<table>\n<thead><tr><th>Produit</th><th>Mentions habituelles à repérer</th></tr></thead>\n<tbody>\n<tr><td>Livre</td><td>Nom de l'éditeur, ISBN, prix de vente au public, mention d'imprimeur, date de dépôt légal</td></tr>\n<tr><td>Journal, magazine</td><td>Nom du directeur de la publication, ISSN, mention d'imprimeur, numéro de commission paritaire si le titre en bénéficie</td></tr>\n<tr><td>Prospectus, catalogue commercial</td><td>Identité de l'annonceur, mention d'imprimeur, mentions environnementales de tri lorsque le produit y est soumis</td></tr>\n<tr><td>Emballage imprimé</td><td>Mentions propres au produit emballé (composition, dates, logos réglementaires), fixées par le donneur d'ordre</td></tr>\n</tbody>\n</table>\n<p>Le <strong>numéro de commission paritaire</strong> est attribué par la Commission paritaire des publications et agences de presse (CPPAP) aux publications de presse qui remplissent certaines conditions. Il ouvre droit à un régime postal et fiscal particulier ; il intéresse donc directement le routage, car il conditionne le tarif d'envoi.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les mentions évoluent avec la réglementation (en particulier les mentions environnementales de tri). L'atelier ne les invente pas et ne les corrige pas de lui-même : il signale l'anomalie au chef de fabrication, qui consulte le client.</div>\n"
      },
      {
       "titre": "Les identifiants normalisés : ISBN, ISSN, EAN",
       "contenu": "\n<p>L'<strong>ISBN</strong> (<em>International Standard Book Number</em>) identifie de manière unique une édition d'un livre. Il comporte 13 chiffres et commence par le préfixe 978 ou 979. En France, les numéros sont attribués aux éditeurs par l'AFNIL (Agence francophone pour la numérotation internationale du livre). Une nouvelle édition (changement de format, de reliure ou de contenu significatif) reçoit un nouvel ISBN : une version brochée et une version reliée d'un même titre ont donc deux ISBN différents.</p>\n<p>L'<strong>ISSN</strong> (<em>International Standard Serial Number</em>) identifie une publication en série (journal, revue, magazine). Il comporte 8 chiffres, écrits en deux groupes de quatre séparés par un tiret. Il est attribué en France par le centre ISSN placé auprès de la Bibliothèque nationale de France.</p>\n<p>Pour la vente, ces numéros sont traduits en <strong>code-barres EAN-13</strong>, imprimé généralement en quatrième de couverture. Le dernier chiffre est une <strong>clé de contrôle</strong> calculée à partir des douze premiers : un lecteur de caisse refuse un code dont la clé est fausse.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul de la clé d'un code EAN-13 à partir des 12 premiers chiffres 978229000123. 1) Multiplier les chiffres de rang impair par 1 et ceux de rang pair par 3 : 9x1 + 7x3 + 8x1 + 2x3 + 2x1 + 9x3 + 0x1 + 0x3 + 0x1 + 1x3 + 2x1 + 3x3. 2) Additionner : 9 + 21 + 8 + 6 + 2 + 27 + 0 + 0 + 0 + 3 + 2 + 9 = 87. 3) Chercher ce qu'il faut ajouter pour atteindre la dizaine supérieure : 90 - 87 = 3. La clé est 3 et le code complet est 9782290001233. Si la somme est déjà un multiple de 10, la clé vaut 0.</div>\n<p>Au façonnage, le code-barres pose surtout des problèmes physiques : il ne doit pas être coupé par une rogne mal réglée, masqué par un rabat, déformé par un rainage ou rendu brillant au point d'éblouir le lecteur par un pelliculage. Un contrôle au lecteur de code-barres fait partie des vérifications du BàF pour les produits vendus en librairie ou en grande surface.</p>\n"
      },
      {
       "titre": "Le dépôt légal",
       "contenu": "\n<p>Le <strong>dépôt légal</strong> est l'obligation de remettre un ou plusieurs exemplaires de tout document publié à un organisme chargé de le conserver. Il est organisé par le Code du patrimoine. Son but est de constituer la mémoire de tout ce qui est publié en France et de permettre la consultation de ces documents par les chercheurs.</p>\n<p>Pour les imprimés, l'organisme principal est la <strong>Bibliothèque nationale de France</strong> (BnF). L'obligation pèse d'abord sur l'<strong>éditeur</strong> ; la réglementation prévoit aussi une obligation pour l'<strong>imprimeur</strong>, qui remet des exemplaires à une bibliothèque habilitée. La mention du dépôt légal (mois et année) figure dans le livre, souvent sur la page de copyright.</p>\n<p>Le nombre d'exemplaires, les délais et les organismes destinataires sont fixés par des textes qui ont été modifiés plusieurs fois. En entreprise, le service administratif ou le chef de fabrication tient ces informations à jour ; l'atelier doit simplement prévoir de mettre de côté les exemplaires demandés, dans un état parfait, lorsqu'une consigne le précise.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur la fiche de fabrication d'un livre, une ligne « exemplaires dépôt légal » ou « exemplaires de collection » indique combien d'exemplaires prélever dans la production. Ils sont choisis parmi les meilleurs, emballés à part et transmis au service concerné, jamais pris dans les gâches de calage.</div>\n"
      },
      {
       "titre": "Droit d'auteur, droit de reproduction et confidentialité",
       "contenu": "\n<p>Le <strong>droit d'auteur</strong>, défini par le Code de la propriété intellectuelle, protège les œuvres de l'esprit : textes, photographies, illustrations, créations graphiques. L'auteur, ou celui à qui il a cédé ses droits (souvent l'éditeur), est seul à pouvoir autoriser la <strong>reproduction</strong> de l'œuvre. Une entreprise graphique qui reproduit une œuvre sans autorisation peut être poursuivie pour <strong>contrefaçon</strong>, même si elle a agi sur commande d'un client.</p>\n<p>En pratique, le contrat ou les conditions générales de vente prévoient que le client garantit détenir les droits sur les éléments qu'il fournit. L'imprimeur reste vigilant devant des demandes inhabituelles : réimpression d'un livre par une personne qui n'en est pas l'éditeur, reproduction d'un logo de marque connue, quantités qui ne correspondent pas au marché annoncé.</p>\n<p>La <strong>confidentialité</strong> est une autre obligation, souvent prévue par contrat. Un atelier de façonnage manipule des documents sensibles : sujets d'examen, résultats financiers d'entreprises avant leur publication, relevés bancaires, courriers personnalisés. Le routage manipule des <strong>fichiers d'adresses</strong> qui contiennent des données personnelles, protégées par le Règlement général sur la protection des données (RGPD). Le routeur agit comme <strong>sous-traitant</strong> du client : il ne peut utiliser le fichier que pour l'envoi commandé, doit le protéger et le supprimer ou le restituer à la fin de la prestation selon le contrat.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> emporter un exemplaire d'un document confidentiel, photographier une page ou conserver une copie d'un fichier d'adresses est une faute grave. Les gâches de documents sensibles sont détruites selon une procédure contrôlée (broyage), et non jetées avec les déchets de papier ordinaires.</div>\n"
      },
      {
       "titre": "L'organisation de l'entreprise et ses interlocuteurs",
       "contenu": "\n<p>L'<strong>organigramme</strong> représente la structure de l'entreprise : les services, les fonctions et les liens hiérarchiques. Dans une entreprise de façonnage-routage de taille moyenne, on trouve généralement :</p>\n<table>\n<thead><tr><th>Service</th><th>Rôle</th><th>Quand l'opérateur s'adresse à lui</th></tr></thead>\n<tbody>\n<tr><td>Direction</td><td>Stratégie, investissements, relations avec les grands clients</td><td>Rarement directement</td></tr>\n<tr><td>Commercial</td><td>Relation client, devis, prise de commande</td><td>Par l'intermédiaire de la fabrication</td></tr>\n<tr><td>Fabrication / ordonnancement</td><td>Traduction de la commande en ordres de fabrication, planning</td><td>Question sur une fiche, changement de priorité, quantité insuffisante</td></tr>\n<tr><td>Production (ateliers)</td><td>Réalisation : coupe, pliage, brochage, routage</td><td>Chef d'atelier ou chef d'équipe : consignes, BàF, incidents</td></tr>\n<tr><td>Maintenance</td><td>Entretien et dépannage des machines</td><td>Panne dépassant le premier niveau</td></tr>\n<tr><td>Qualité, sécurité, environnement</td><td>Procédures, audits, traitement des non-conformités</td><td>Non-conformité, accident, presque-accident</td></tr>\n<tr><td>Logistique / expédition</td><td>Réception des matières, stockage, chargement</td><td>Matière manquante, palette endommagée, départ camion</td></tr>\n</tbody>\n</table>\n<p>On distingue les <strong>liens hiérarchiques</strong> (qui donne les ordres) et les <strong>liens fonctionnels</strong> (qui apporte une expertise sans être le supérieur). Le service qualité, par exemple, peut demander d'arrêter une production non conforme sans être le chef de l'opérateur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour choisir le bon interlocuteur, se poser trois questions. 1) Le problème concerne-t-il la définition du produit (format, quantité, contenu) ? Alors fabrication. 2) Concerne-t-il la machine ? Alors chef d'équipe puis maintenance. 3) Concerne-t-il la sécurité d'une personne ? Alors arrêt immédiat et chef d'équipe, quel que soit le reste. Dans tous les cas, l'information remonte d'abord au responsable direct, qui décide de la suite.</div>\n"
      }
     ],
     "points_cles": [
      "Tout écrit rendu public porte le nom et le domicile de l'imprimeur, sauf les travaux de ville.",
      "L'ISBN (13 chiffres) identifie une édition d'un livre ; l'ISSN (8 chiffres) identifie une publication en série.",
      "Le code EAN-13 se termine par une clé de contrôle ; il ne doit être ni coupé, ni masqué, ni rendu illisible au façonnage.",
      "Le dépôt légal, organisé par le Code du patrimoine, concerne l'éditeur et l'imprimeur ; l'atelier prélève les exemplaires demandés.",
      "Reproduire une œuvre sans autorisation est une contrefaçon ; le client garantit détenir les droits.",
      "Le routeur traite des données personnelles comme sous-traitant, dans le cadre du RGPD.",
      "Les gâches de documents confidentiels suivent une procédure de destruction contrôlée.",
      "L'organigramme distingue liens hiérarchiques et liens fonctionnels et guide le choix de l'interlocuteur."
     ],
     "lexique": [
      {
       "terme": "Mention d'imprimeur",
       "def": "Indication du nom et du domicile de l'imprimeur, obligatoire sur les écrits rendus publics."
      },
      {
       "terme": "Travaux de ville",
       "def": "Petits imprimés courants non destinés à une diffusion publique (cartes, formulaires, papier à en-tête)."
      },
      {
       "terme": "ISBN",
       "def": "Numéro international normalisé à 13 chiffres identifiant une édition d'un livre."
      },
      {
       "terme": "ISSN",
       "def": "Numéro international normalisé à 8 chiffres identifiant une publication en série."
      },
      {
       "terme": "EAN-13",
       "def": "Code-barres à 13 chiffres dont le dernier est une clé de contrôle."
      },
      {
       "terme": "Dépôt légal",
       "def": "Obligation de remettre des exemplaires de tout document publié à un organisme de conservation."
      },
      {
       "terme": "Contrefaçon",
       "def": "Reproduction d'une œuvre protégée sans l'autorisation du titulaire des droits."
      },
      {
       "terme": "CPPAP",
       "def": "Commission paritaire des publications et agences de presse, qui attribue un numéro ouvrant droit au régime de la presse."
      },
      {
       "terme": "Organigramme",
       "def": "Représentation graphique des services d'une entreprise et des liens entre eux."
      },
      {
       "terme": "Lien fonctionnel",
       "def": "Relation d'expertise entre services, sans autorité hiérarchique."
      }
     ]
    },
    {
     "id": "bfpi-processus-planification",
     "titre": "Processus de fabrication, temps et planification",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Établir la gamme de fabrication d'un produit façonné en ordonnant les opérations et en choisissant les machines.",
      "Calculer un temps de fabrication à partir des temps de calage, des quantités et des cadences.",
      "Construire et lire un planning de Gantt et un plan de charge d'atelier.",
      "Identifier les documents de lancement : fiche journalière, mode opératoire, bon de sortie matière."
     ],
     "sections": [
      {
       "titre": "Du produit au processus : la gamme de fabrication",
       "contenu": "\n<p>Un <strong>processus de fabrication</strong> est l'enchaînement des opérations qui transforment les matières d'œuvre en produit fini. Pour un même produit, plusieurs processus sont souvent possibles : un dépliant peut être plié sur une plieuse à poches ou sur une plieuse mixte, une brochure de 48 pages peut être piquée à cheval ou collée en dos carré. Le choix dépend du produit demandé, du parc machines, de la quantité, des délais et du coût.</p>\n<p>Le processus retenu est décrit par la <strong>gamme de fabrication</strong> : un tableau qui liste, dans l'ordre, chaque opération, la machine utilisée, les réglages principaux et le temps alloué. On la représente aussi par un <strong>synoptique</strong>, schéma où chaque opération est une case et chaque flèche un passage de produit d'un poste à l'autre.</p>\n<table>\n<thead><tr><th>N°</th><th>Opération</th><th>Machine</th><th>Données principales</th></tr></thead>\n<tbody>\n<tr><td>10</td><td>Coupe des feuilles en deux</td><td>Massicot programmable</td><td>Feuille 640 x 880 mm coupée en 2 x 440 x 640 mm</td></tr>\n<tr><td>20</td><td>Pliage des cahiers de 16 pages</td><td>Plieuse mixte</td><td>2 plis parallèles en poches, 1 pli croisé au couteau</td></tr>\n<tr><td>30</td><td>Pliage de la couverture</td><td>Plieuse à poches avec rainage</td><td>1 pli parallèle, molette de rainage</td></tr>\n<tr><td>40</td><td>Encartage, piqûre, coupe trois côtés</td><td>Encarteuse-piqueuse</td><td>2 cahiers + couverture, 2 piqûres</td></tr>\n<tr><td>50</td><td>Mise en paquets, palettisation</td><td>Compteur-empileur, poste manuel</td><td>Paquets de 50 ex, film étirable</td></tr>\n</tbody>\n</table>\n<p>Les opérations sont numérotées de dix en dix pour pouvoir insérer une opération oubliée (une opération 25 de contrôle, par exemple) sans renuméroter toute la gamme.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'ordre des opérations n'est pas libre. On ne peut pas piquer avant d'avoir plié, ni rogner un livre en dos carré collé avant que la colle ait suffisamment pris. Chaque opération a des <strong>antériorités</strong> : les opérations qui doivent être terminées, au moins en partie, avant qu'elle puisse commencer.</div>\n"
      },
      {
       "titre": "Les temps de fabrication",
       "contenu": "\n<p>Le temps passé sur une machine se décompose en plusieurs parties :</p>\n<ul>\n<li>le <strong>temps de calage</strong> (ou de mise en train) : préparation et réglage de la machine pour un nouveau travail, jusqu'à l'obtention du BàF ;</li>\n<li>le <strong>temps de production</strong> (ou de roulage) : temps pendant lequel la machine produit des exemplaires bons ;</li>\n<li>les <strong>temps d'arrêt</strong> : bourrages, changement de palette, approvisionnement en matière, pannes ;</li>\n<li>le <strong>temps de nettoyage</strong> et de remise en état en fin de travail.</li>\n</ul>\n<p>La <strong>cadence</strong> est le nombre d'unités produites par unité de temps (feuilles par heure, cycles par heure, exemplaires par heure). On distingue la <strong>cadence nominale</strong>, maximale annoncée par le constructeur, et la <strong>cadence pratique</strong>, réellement tenue en production compte tenu de la matière, du produit et des petits arrêts. Un devis réaliste utilise toujours la cadence pratique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul du temps de pliage. Une brochure de 32 pages est composée de 2 cahiers de 16 pages ; on en commande 20 000 avec une passe façonnage de 2 %. 1) Nombre de feuilles à plier : 20 000 x 1,02 = 20 400 feuilles par cahier, soit 2 x 20 400 = 40 800 feuilles. 2) Cadence pratique de la plieuse : 9 000 feuilles par heure. Temps de production : 40 800 / 9 000 = 4,53 h. 3) Conversion : 0,53 h x 60 = 32 min, soit 4 h 32 min. 4) Calage : 30 min par cahier, soit 1 h. 5) Temps total de pliage : 4 h 32 min + 1 h = 5 h 32 min. On procède de la même façon pour chaque poste de la gamme.</div>\n<p>Pour l'encarteuse-piqueuse de la même gamme, avec une cadence pratique de 8 000 cycles par heure : 20 400 / 8 000 = 2,55 h, soit 2 h 33 min, auxquelles s'ajoutent 45 min de calage. On constate que la piqûre est plus rapide que le pliage : le pliage est ici le <strong>goulot d'étranglement</strong>, le poste qui limite le rythme de toute la fabrication.</p>\n"
      },
      {
       "titre": "Ordonnancer : choisir l'ordre et les dates",
       "contenu": "\n<p>L'<strong>ordonnancement</strong> consiste à décider quand et sur quelle machine chaque opération de chaque travail sera réalisée. C'est le rôle du service fabrication, aidé par le module de planification du MIS. Deux logiques sont utilisées :</p>\n<ul>\n<li>le <strong>jalonnement au plus tôt</strong> : on place chaque opération dès que ses antériorités sont terminées et que la machine est libre ; on obtient la date de fin la plus proche possible ;</li>\n<li>le <strong>jalonnement au plus tard</strong> : on part de la date de livraison et on remonte le temps ; on obtient la date à laquelle chaque opération doit commencer au plus tard pour respecter le délai.</li>\n</ul>\n<p>La différence entre les deux dates de début d'une opération est sa <strong>marge</strong>. Une opération sans marge est <strong>critique</strong> : tout retard sur elle retarde la livraison.</p>\n<p>Dans le façonnage, on pratique souvent le <strong>chevauchement</strong> : l'opération suivante commence avant la fin de la précédente, dès qu'un lot suffisant est disponible. Par exemple, l'encarteuse-piqueuse peut démarrer lorsque les premières palettes de cahiers pliés sont prêtes, sans attendre la fin complète du pliage. Le chevauchement raccourcit le délai, mais il exige que la cadence du poste amont reste supérieure ou égale à celle du poste aval, faute de quoi le poste aval tombe en manque.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> certaines opérations imposent un temps d'attente incompressible. Une couverture pelliculée doit se stabiliser avant d'être rainée, une colle polyuréthane réactive doit polymériser avant certaines manipulations, des feuilles imprimées doivent sécher avant d'être pliées. Ces temps de séchage ou de repos doivent apparaître dans le planning comme des tâches à part entière.</div>\n"
      },
      {
       "titre": "Le planning de Gantt",
       "contenu": "\n<p>Le <strong>diagramme de Gantt</strong> représente les opérations par des barres horizontales sur une échelle de temps. Chaque ligne correspond à une opération (ou à une machine), la longueur de la barre à sa durée, et sa position à ses dates de début et de fin.</p>\n<p>Exemple de planning pour la brochure précédente, en heures depuis le début du poste (06 h 00) :</p>\n<table>\n<thead><tr><th>Opération</th><th>Machine</th><th>Début</th><th>Fin</th><th>Antériorité</th></tr></thead>\n<tbody>\n<tr><td>Pliage cahier 1</td><td>Plieuse mixte</td><td>06 h 00</td><td>08 h 46</td><td>Feuilles reçues et coupées</td></tr>\n<tr><td>Pliage cahier 2</td><td>Plieuse mixte</td><td>08 h 46</td><td>11 h 32</td><td>Pliage cahier 1 (même machine)</td></tr>\n<tr><td>Pliage couverture</td><td>Plieuse à poches</td><td>06 h 00</td><td>07 h 30</td><td>Couvertures pelliculées stabilisées</td></tr>\n<tr><td>Encartage-piqûre</td><td>Encarteuse-piqueuse</td><td>09 h 30</td><td>12 h 48</td><td>Premières palettes du cahier 2 pliées</td></tr>\n<tr><td>Palettisation, départ</td><td>Poste expédition</td><td>12 h 48</td><td>13 h 30</td><td>Fin de la piqûre</td></tr>\n</tbody>\n</table>\n<p>On lit dans ce tableau que l'encarteuse-piqueuse démarre en chevauchement à 09 h 30 alors que le pliage du cahier 2 n'est pas fini : il faut que le pliage, qui produit des cahiers 2 au rythme de 9 000 par heure, reste en avance sur la piqûre qui en consomme 8 000 par heure. C'est le cas ici.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour construire un Gantt à la main. 1) Lister les opérations avec leur durée et leurs antériorités. 2) Placer d'abord les opérations sans antériorité. 3) Placer chaque opération suivante après la fin de ses antériorités, en vérifiant que la machine est libre. 4) Repérer le chemin le plus long : c'est le chemin critique, qui fixe la date de fin. 5) Vérifier que la date de fin respecte la date de livraison ; sinon, chercher un chevauchement, une autre machine ou une équipe supplémentaire.</div>\n"
      },
      {
       "titre": "Le plan de charge",
       "contenu": "\n<p>Le planning d'un travail ne suffit pas : un atelier traite simultanément des dizaines de commandes. Le <strong>plan de charge</strong> compare, pour chaque machine ou chaque atelier et pour chaque période (jour, semaine), la <strong>charge</strong> (heures de travail nécessaires pour les commandes prévues) à la <strong>capacité</strong> (heures disponibles compte tenu des équipes, des congés et de la maintenance programmée).</p>\n<p>Le <strong>taux de charge</strong> se calcule par : taux de charge = charge / capacité x 100. Un taux supérieur à 100 % signifie que l'atelier ne pourra pas tout faire dans la période : il faut lisser (déplacer certains travaux), augmenter la capacité (heures supplémentaires, équipe de nuit) ou sous-traiter. Un taux très faible signale une sous-activité coûteuse.</p>\n<table>\n<thead><tr><th>Semaine</th><th>Capacité chaîne dos carré collé (h)</th><th>Charge prévue (h)</th><th>Taux de charge</th></tr></thead>\n<tbody>\n<tr><td>S40</td><td>70</td><td>56</td><td>80 %</td></tr>\n<tr><td>S41</td><td>70</td><td>84</td><td>120 %</td></tr>\n<tr><td>S42</td><td>56 (maintenance 14 h)</td><td>42</td><td>75 %</td></tr>\n</tbody>\n</table>\n<p>Dans cet exemple, la semaine 41 est surchargée de 14 h. Si les délais le permettent, on avance une partie des travaux en semaine 40, où il reste 14 h libres. Le plan de charge sert ainsi à tenir les délais promis par le service commercial.</p>\n<p>D'autres plannings complètent le dispositif : le <strong>planning d'approvisionnement</strong> (dates de réception du papier, des colles, des films, des cartons), le <strong>planning de maintenance</strong> (arrêts programmés) et le <strong>planning du personnel</strong> (équipes, formations, congés).</p>\n"
      },
      {
       "titre": "Les documents de lancement au poste",
       "contenu": "\n<p>Le <strong>lancement</strong> est le moment où un travail planifié devient un travail réel à un poste. Il s'accompagne de plusieurs documents :</p>\n<ul>\n<li>la <strong>fiche journalière</strong> (ou feuille de route) : liste ordonnée des travaux à réaliser sur la machine pendant le poste, avec leur numéro d'OF et leur priorité ;</li>\n<li>le <strong>dossier de fabrication</strong> du travail, avec le BàT et, selon les cas, la maquette en blanc ;</li>\n<li>le <strong>mode opératoire</strong> : description pas à pas d'une opération (calage d'un type de pli, changement de format sur le trilame), avec les points de sécurité ;</li>\n<li>le <strong>bon de sortie matière</strong> : autorisation de prélever en magasin la colle, le fil, les films, les cartons nécessaires ;</li>\n<li>la <strong>fiche de suivi de production</strong>, que l'opérateur remplit pendant le travail.</li>\n</ul>\n<p>Dans les ateliers équipés, ces documents sont consultés sur un écran au poste, et la saisie des temps se fait directement en début et en fin de chaque phase (début calage, début production, arrêt, fin de travail).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'ordre de la fiche journalière n'est pas arbitraire. L'ordonnanceur regroupe les travaux de même format ou de même type de pli pour réduire les calages : passer d'un dépliant 3 volets au format A4 fermé à un autre dépliant 3 volets de même format ne demande que quelques minutes, alors qu'alterner avec un cahier croisé de 16 pages impose un recalage complet.</div>\n"
      }
     ],
     "points_cles": [
      "La gamme de fabrication liste les opérations dans l'ordre, avec machine, réglages et temps alloué.",
      "Le temps d'une opération comprend le calage, la production, les arrêts et le nettoyage.",
      "Les calculs de temps utilisent la cadence pratique, plus faible que la cadence nominale.",
      "Le poste le plus lent d'un processus est le goulot d'étranglement qui fixe le rythme global.",
      "Le jalonnement au plus tôt et au plus tard permet de calculer les marges et le chemin critique.",
      "Le chevauchement raccourcit les délais si le poste amont reste plus rapide que le poste aval.",
      "Le plan de charge compare charge et capacité ; un taux de charge supérieur à 100 % impose une action.",
      "Les temps de séchage ou de repos sont des tâches à part entière dans un planning."
     ],
     "lexique": [
      {
       "terme": "Gamme de fabrication",
       "def": "Liste ordonnée des opérations d'un produit avec machines, réglages et temps alloués."
      },
      {
       "terme": "Antériorité",
       "def": "Opération qui doit être terminée, au moins en partie, avant qu'une autre puisse commencer."
      },
      {
       "terme": "Temps de calage",
       "def": "Temps de préparation et de réglage d'une machine jusqu'à l'obtention du bon à façonner."
      },
      {
       "terme": "Cadence pratique",
       "def": "Nombre d'unités réellement produites par heure en conditions normales de production."
      },
      {
       "terme": "Goulot d'étranglement",
       "def": "Poste le plus lent d'un processus, qui limite la production de l'ensemble."
      },
      {
       "terme": "Ordonnancement",
       "def": "Organisation dans le temps des opérations sur les machines pour respecter les délais."
      },
      {
       "terme": "Chevauchement",
       "def": "Démarrage d'une opération avant la fin complète de l'opération précédente."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Planning où chaque opération est représentée par une barre sur une échelle de temps."
      },
      {
       "terme": "Plan de charge",
       "def": "Comparaison, par période et par poste, des heures nécessaires et des heures disponibles."
      },
      {
       "terme": "Chemin critique",
       "def": "Suite d'opérations sans marge dont la durée totale fixe la date de fin."
      }
     ]
    },
    {
     "id": "bfpi-contraintes-techniques",
     "titre": "Les contraintes techniques du façonnage : marges, rognes et imposition",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Identifier l'angle de marge d'une feuille imprimée et l'utiliser comme référence au façonnage.",
      "Expliquer les conséquences du mode de retiration sur les références de coupe et de pliage.",
      "Calculer les rognes, les doubles coupes et les blancs de fraisage à prévoir dans une imposition.",
      "Évaluer et compenser la chasse d'un produit piqué à cheval.",
      "Repérer les marques techniques d'une feuille imposée : coupe, pli, collationnement, signature."
     ],
     "sections": [
      {
       "titre": "L'angle de marge, référence commune de l'impression et du façonnage",
       "contenu": "\n<p>Sur une presse à feuilles, chaque feuille est positionnée avant impression contre deux butées : les <strong>taquets frontaux</strong>, du côté où les pinces saisissent la feuille, et le <strong>taquet latéral</strong> (ou équerre), sur l'un des petits côtés. Le coin formé par le bord de pinces et le bord de taquet latéral s'appelle l'<strong>angle de marge</strong>. C'est le seul coin dont la position par rapport à l'image imprimée est garantie : les deux autres bords de la feuille peuvent présenter des écarts de coupe de la papeterie, de l'ordre du millimètre.</p>\n<p>Au façonnage, cet angle doit rester la référence. Le conducteur de massicot place l'angle de marge contre le taquet arrière et la règle latérale pour les premières coupes ; le conducteur de plieuse marge la feuille contre l'équerre du même côté que le taquet latéral de l'impression. Si l'on prend un autre coin, les écarts de coupe du papier se reportent sur la position des plis et des coupes, et l'image se décale de feuille en feuille.</p>\n<p>L'imprimeur repère l'angle de marge par un trait ou un petit symbole imprimé dans la marge, ou par une marque au crayon sur le flanc de la pile. Le façonnier doit le chercher avant toute opération.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> angle de marge = bord de pinces + bord de taquet latéral de l'impression. C'est le coin à mettre en butée pour la première coupe et pour le pliage. Une palette sans repère d'angle de marge doit faire l'objet d'une question à l'imprimeur.</div>\n"
      },
      {
       "titre": "Retiration : basculage et culbutage revisités",
       "contenu": "\n<p>La <strong>retiration</strong> est l'impression du verso d'une feuille déjà imprimée au recto. En seconde, on a vu les deux manières de retourner la feuille : le <strong>basculage</strong> (retournement autour d'un axe parallèle aux pinces, on garde le même bord de pinces et on change de côté de taquet latéral) et le <strong>culbutage</strong> (retournement autour d'un axe perpendiculaire aux pinces, on garde le même côté de taquet et on change de bord de pinces).</p>\n<p>Pour le façonnage, la conséquence est importante :</p>\n<table>\n<thead><tr><th>Mode de retiration</th><th>Bord commun au recto et au verso</th><th>Référence fiable au façonnage</th></tr></thead>\n<tbody>\n<tr><td>Basculage</td><td>Bord de pinces</td><td>Le bord de pinces ; le taquet latéral du recto, car le verso a été taqué de l'autre côté</td></tr>\n<tr><td>Culbutage</td><td>Bord du taquet latéral</td><td>Le côté du taquet latéral ; le bord de pinces du recto</td></tr>\n<tr><td>Machine recto verso en un passage</td><td>Défini par la machine</td><td>Celui indiqué par l'imprimeur</td></tr>\n</tbody>\n</table>\n<p>Le culbutage est plus délicat pour le façonnage : le verso a été pincé par le bord opposé, de sorte que le repérage recto-verso dépend de la régularité de la longueur des feuilles. C'est pourquoi on évite généralement le culbutage pour les travaux à plis précis.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur une feuille basculée, prendre comme taquet le côté qui a servi pour le verso fait coïncider le pliage avec le verso, mais décale le recto de la valeur de l'écart de coupe du papier. Le défaut n'apparaît pas sur les premières feuilles si la pile est régulière, puis surgit d'une rame à l'autre.</div>\n"
      },
      {
       "titre": "Rognes, fonds perdus et doubles coupes",
       "contenu": "\n<p>Le format fini d'un produit est obtenu en enlevant des bandes de papier appelées <strong>rognes</strong>. Elles ont trois fonctions : faire disparaître les <strong>fonds perdus</strong> (zone où l'image déborde volontairement au-delà du format fini, en général 3 mm en offset feuilles), ouvrir les plis fermés en tête et en pied des cahiers, et égaliser les bords d'un produit assemblé dont les feuilles ne sont jamais parfaitement superposées.</p>\n<p>Quand plusieurs exemplaires à fonds perdus sont imposés côte à côte (les <strong>poses</strong>), on ne peut pas les couper d'un seul trait : il faut éliminer les deux bandes de fond perdu. On réalise une <strong>double coupe</strong> : deux coupes successives séparées par l'écart prévu entre les poses, par exemple 6 mm pour deux fonds perdus de 3 mm. La bande intermédiaire tombe en déchet.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'une imposition de flyers tient sur la feuille. Format fini 100 x 210 mm, fonds perdus 3 mm sur chaque bord, double coupe entre poses, feuille 450 x 320 mm, marge de pinces 10 mm et marge de bord 5 mm pour les repères. 1) Dans la largeur de 450 mm, on veut 4 poses de 100 mm : 4 x 100 + 3 doubles coupes de 6 mm + 2 fonds perdus extérieurs de 3 mm = 400 + 18 + 6 = 424 mm. 2) Espace disponible : 450 - 2 x 5 = 440 mm, donc 424 mm tient. 3) Dans la hauteur, 1 pose de 210 mm + 2 x 3 mm = 216 mm, contre 320 - 10 - 5 = 305 mm disponibles. On peut donc imposer 4 poses de 210 mm en hauteur sur une rangée, avec une chute importante : en tournant les poses (210 mm dans la largeur, 100 mm dans la hauteur), on aurait 2 x 210 + 6 + 6 = 432 mm en largeur et 3 x 100 + 2 x 6 + 6 = 318 mm en hauteur, ce qui dépasse 305 mm. On garde donc la première solution, ou l'on choisit une feuille plus grande.</div>\n<p>Les rognes d'un produit relié ne sont pas égales sur les trois côtés. En tête, la rogne doit ouvrir le pli de tête des cahiers ; en pied, elle égalise ; au devant, elle ouvre les plis croisés et absorbe la chasse. Des valeurs de 3 à 5 mm par côté sont courantes, mais c'est la fiche de fabrication qui fait foi.</p>\n"
      },
      {
       "titre": "Les blancs de fraisage et de grecquage",
       "contenu": "\n<p>Pour une reliure en <strong>dos carré collé</strong>, le dos des cahiers assemblés est enlevé par <strong>fraisage</strong> : un outil rotatif arase le pli de dos pour que chaque feuillet soit en contact direct avec la colle. Le fraisage enlève une épaisseur de 2 à 3 mm environ. Le <strong>grecquage</strong>, souvent réalisé en plus, crée de petites encoches régulières dans le dos pour augmenter la surface de collage.</p>\n<p>Cette matière enlevée doit être prévue dès l'imposition : on ajoute au petit fond (marge côté dos) un <strong>blanc de fraisage</strong> égal à la profondeur fraisée. Sinon, le texte et les images du petit fond se rapprochent trop de la reliure, voire disparaissent dans le collage. De même, les images qui traversent la double page (une photo à cheval sur deux pages) doivent tenir compte de la matière perdue au dos, faute de quoi l'image paraît coupée ou décalée.</p>\n<p>Le blanc de fraisage s'ajoute au format à plat de chaque page côté dos. Pour une brochure au format fini 150 x 200 mm avec un fraisage de 2 mm et des rognes de 3 mm en tête, en pied et au devant, chaque page occupe dans l'imposition : en largeur, 150 + 2 (fraisage) + 3 (rogne devant) = 155 mm ; en hauteur, 200 + 3 + 3 = 206 mm.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une imposition prévue pour une piqûre à cheval ne convient pas pour un dos carré collé. Les cahiers piqués n'ont pas de blanc de fraisage et sont encartés les uns dans les autres, alors que les cahiers collés sont juxtaposés. Changer de mode de reliure en cours de route impose de refaire l'imposition.</div>\n"
      },
      {
       "titre": "La chasse des produits piqués à cheval",
       "contenu": "\n<p>Dans un produit <strong>piqué à cheval</strong>, les cahiers sont emboîtés les uns dans les autres (encartés). Chaque feuille pliée enveloppe les suivantes, et son pli doit faire le tour de leur épaisseur. Résultat : les pages du centre dépassent vers le devant par rapport aux pages extérieures. Ce phénomène s'appelle la <strong>chasse</strong> (en anglais <em>creep</em>). Après la coupe au devant, les pages centrales sont plus étroites et leur texte est plus proche du bord.</p>\n<p>On estime la chasse maximale, au centre, en multipliant l'épaisseur d'une feuille par le nombre de feuilles pliées qui l'entourent. Pour un magazine de 64 pages piqué à cheval, imprimé sur un papier de 0,08 mm d'épaisseur, il y a 16 feuilles pliées en deux (64 / 4). La feuille centrale est entourée de 15 feuilles : chasse estimée 15 x 0,08 = 1,2 mm. Le logiciel d'imposition compense en décalant progressivement les pages vers le dos : chaque page intérieure est rapprochée du pli d'une fraction de cette valeur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour vérifier qu'une compensation de chasse est nécessaire. 1) Calculer le nombre de feuilles pliées : pagination / 4. 2) Multiplier (nombre de feuilles - 1) par l'épaisseur d'une feuille. 3) Comparer le résultat à la marge de devant prévue dans la maquette. Si la chasse dépasse environ le tiers de la marge, ou si des éléments sont proches du bord (folios, filets, images à fond perdu ajustées), demander une compensation au prépresse. Pour la couverture, plus épaisse, ajouter son épaisseur au calcul.</div>\n"
      },
      {
       "titre": "Les marques techniques de la feuille imposée",
       "contenu": "\n<p>La feuille imposée porte, hors du format fini, des marques destinées au façonnage :</p>\n<table>\n<thead><tr><th>Marque</th><th>Aspect habituel</th><th>Usage au façonnage</th></tr></thead>\n<tbody>\n<tr><td>Traits de coupe</td><td>Traits fins dans les marges, dans le prolongement des bords du format fini</td><td>Programmer et vérifier les coupes</td></tr>\n<tr><td>Traits de pli</td><td>Traits en pointillés ou plus courts dans le prolongement des plis</td><td>Contrôler la position des plis au calage</td></tr>\n<tr><td>Marque de collationnement</td><td>Petit rectangle noir imprimé sur le dos du cahier, décalé d'un cahier à l'autre</td><td>Vérifier l'ordre des cahiers assemblés</td></tr>\n<tr><td>Signature</td><td>Numéro du cahier et titre abrégé, en pied de la première page du cahier</td><td>Identifier le cahier et son rang</td></tr>\n<tr><td>Repère d'angle de marge</td><td>Trait ou symbole près du coin de référence</td><td>Margeage au massicot et à la plieuse</td></tr>\n</tbody>\n</table>\n<p>Les <strong>marques de collationnement</strong> sont placées sur le dos plié de chaque cahier, à une hauteur qui augmente d'un cahier au suivant. Lorsque les cahiers sont assemblés dans le bon ordre, les marques forment un escalier régulier sur le dos du bloc. Un cahier manquant crée un trou dans l'escalier, un cahier en double un palier, un cahier inversé une marche à contre-sens. Ce contrôle visuel est rapide et se fait sur les prélèvements avant le collage.</p>\n<p>L'<strong>amalgame</strong> est l'impression sur une même feuille de plusieurs travaux différents, pour un même client ou pour plusieurs clients. Il réduit le coût d'impression, mais il complique le façonnage : chaque travail peut avoir son propre format, ses propres finitions et sa propre destination. Le plan de coupe d'un amalgame doit donc séparer d'abord les travaux, puis traiter chacun selon sa fiche.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les imprimeries en ligne pratiquent massivement l'amalgame. Un poste de coupe y reçoit des feuilles portant une dizaine de commandes différentes ; un code imprimé à côté de chaque travail permet de l'identifier et de l'orienter après la coupe vers le bon poste de finition.</div>\n"
      }
     ],
     "points_cles": [
      "L'angle de marge (bord de pinces et taquet latéral) est la référence de coupe et de pliage.",
      "En basculage, le bord de pinces est commun au recto et au verso ; en culbutage, c'est le côté du taquet latéral.",
      "Les rognes éliminent les fonds perdus, ouvrent les plis et égalisent les bords.",
      "Deux poses à fonds perdus sont séparées par une double coupe égale à deux fonds perdus.",
      "Le dos carré collé impose un blanc de fraisage au petit fond, prévu dès l'imposition.",
      "La chasse d'un produit piqué à cheval se calcule à partir du nombre de feuilles pliées et de l'épaisseur du papier.",
      "Les marques de collationnement forment un escalier régulier sur le dos d'un bloc correctement assemblé.",
      "L'amalgame réduit le coût d'impression mais complique le plan de coupe et l'orientation des travaux."
     ],
     "lexique": [
      {
       "terme": "Angle de marge",
       "def": "Coin de la feuille formé par le bord de pinces et le bord de taquet latéral, référence de position de l'image."
      },
      {
       "terme": "Retiration",
       "def": "Impression du verso d'une feuille déjà imprimée au recto."
      },
      {
       "terme": "Rogne",
       "def": "Bande de papier enlevée par coupe pour obtenir le format fini."
      },
      {
       "terme": "Fond perdu",
       "def": "Partie de l'image qui déborde du format fini pour éviter un liseré blanc après coupe."
      },
      {
       "terme": "Double coupe",
       "def": "Deux coupes successives séparant deux poses à fonds perdus, la bande intermédiaire étant perdue."
      },
      {
       "terme": "Blanc de fraisage",
       "def": "Marge supplémentaire prévue côté dos pour compenser la matière enlevée par le fraisage."
      },
      {
       "terme": "Chasse",
       "def": "Débordement des pages centrales vers le devant dans un produit encarté, à compenser à l'imposition."
      },
      {
       "terme": "Marque de collationnement",
       "def": "Repère imprimé sur le dos de chaque cahier, en escalier, pour contrôler l'ordre d'assemblage."
      },
      {
       "terme": "Signature",
       "def": "Numéro d'ordre du cahier imprimé en pied de sa première page."
      },
      {
       "terme": "Amalgame",
       "def": "Regroupement de plusieurs travaux différents sur une même feuille imprimée."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Matières d'œuvre, coupe et pliage",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bfpi-supports-comportement",
     "titre": "Le comportement des supports imprimés au façonnage",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Prévoir l'effet du sens des fibres sur le pliage, la reliure et la tenue du produit fini.",
      "Expliquer l'influence de l'humidité et de la température sur la stabilité du papier et organiser son acclimatation.",
      "Reconnaître les problèmes liés à l'électricité statique et au séchage des encres et proposer des remèdes.",
      "Choisir le traitement préparatoire adapté (rainage, perforation) selon le support et le grammage.",
      "Calculer l'épaisseur d'un bloc et d'un dos à partir des caractéristiques du papier."
     ],
     "sections": [
      {
       "titre": "Le papier, un matériau qui vit",
       "contenu": "\n<p>En seconde, le papier a été décrit par ses caractéristiques de base : format, grammage, épaisseur, main, papier couché ou non couché, sens des fibres. Au façonnage, ces caractéristiques ne sont plus des données de catalogue : elles déterminent si un pli sera net, si une brochure restera plate, si une reliure tiendra. Le papier est un enchevêtrement de <strong>fibres de cellulose</strong>, plus ou moins chargé de minéraux et recouvert ou non d'une couche. Ces fibres absorbent et rejettent l'eau, s'allongent et se rétractent, se cassent quand on les plie trop fort. Le façonnier doit donc comprendre comment le papier réagit.</p>\n<p>Les supports rencontrés en façonnage et routage sont variés :</p>\n<table>\n<thead><tr><th>Support</th><th>Main habituelle (cm³/g)</th><th>Comportement au façonnage</th></tr></thead>\n<tbody>\n<tr><td>Couché brillant ou demi-mat</td><td>environ 0,8 à 1,0</td><td>Surface fragile au pli, risque de cassure au-delà de 150 g/m², glisse, électricité statique</td></tr>\n<tr><td>Offset (non couché)</td><td>environ 1,2 à 1,3</td><td>Plie bien, absorbe l'humidité rapidement</td></tr>\n<tr><td>Bouffant</td><td>environ 1,5 à 2,0 et plus</td><td>Épais pour un grammage faible, bloc volumineux, compressible au massicot</td></tr>\n<tr><td>Papier journal</td><td>environ 1,3 à 1,5</td><td>Léger, peu résistant, très sensible à l'humidité</td></tr>\n<tr><td>Carte et carton compact</td><td>variable</td><td>Rainage obligatoire, découpe à la forme</td></tr>\n</tbody>\n</table>\n<p>Rappel : la <strong>main</strong> est le rapport entre l'épaisseur (en µm) et le grammage (en g/m²) ; elle s'exprime en cm³/g. Les valeurs du tableau sont des ordres de grandeur ; la fiche technique du fournisseur donne la valeur exacte de chaque référence.</p>\n"
      },
      {
       "titre": "Le sens des fibres et ses conséquences",
       "contenu": "\n<p>Pendant la fabrication du papier, les fibres s'orientent majoritairement dans le sens de défilement de la machine : c'est le <strong>sens machine</strong>, ou sens des fibres. Le sens perpendiculaire est le <strong>sens travers</strong>. Le papier se plie plus facilement et plus proprement parallèlement aux fibres ; il est plus rigide dans le sens des fibres ; il se dilate beaucoup plus dans le sens travers que dans le sens machine quand il absorbe de l'humidité.</p>\n<p>Conséquences pour le façonnage :</p>\n<ul>\n<li><strong>Pliage</strong> : un pli parallèle aux fibres est net ; un pli perpendiculaire est plus résistant à faire, plus épais et peut casser sur un papier couché.</li>\n<li><strong>Reliure et brochage</strong> : les fibres doivent être parallèles au dos. Sinon, les pages ondulent près du dos lorsque la colle humide les fait gonfler, le livre s'ouvre mal et la couverture se tuile.</li>\n<li><strong>Cartes et couvertures</strong> : pour une carte qui doit tenir debout, on place le sens des fibres verticalement ; pour une couverture, parallèlement au dos.</li>\n</ul>\n<p>Dans un cahier à plis croisés, il est impossible que tous les plis soient parallèles aux fibres. On choisit alors de privilégier le <strong>dernier pli</strong>, qui devient le dos du cahier : c'est lui qui doit être parallèle aux fibres.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> trois tests pour trouver le sens des fibres d'une feuille sans documentation. 1) Test de flexion : découper deux bandes de même taille, l'une dans la longueur, l'autre dans la largeur ; tenues par une extrémité, la bande la plus rigide est coupée dans le sens des fibres. 2) Test de déchirure : on déchire dans un sens puis dans l'autre ; la déchirure la plus droite et la plus facile suit les fibres. 3) Test d'humidification : on mouille légèrement un bord ; la feuille s'enroule autour d'un axe parallèle aux fibres. Les fournisseurs indiquent aussi le sens sur l'étiquette de la palette ou dans la désignation du format, selon des conventions qui varient (dimension soulignée, mention sens long ou sens court) : il faut vérifier la convention utilisée.</div>\n"
      },
      {
       "titre": "Humidité, température et acclimatation",
       "contenu": "\n<p>Le papier est <strong>hygroscopique</strong> : il échange de l'eau avec l'air jusqu'à se mettre en équilibre avec l'<strong>humidité relative</strong> (HR) ambiante. Un papier plus humide que l'air sèche et se rétracte ; un papier plus sec absorbe de l'eau et s'allonge, surtout dans le sens travers. Ces variations se produisent d'abord sur les bords de la pile, ce qui crée des déformations :</p>\n<ul>\n<li><strong>bords ondulés</strong> (bords qui gondolent) : les bords ont absorbé de l'humidité et se sont allongés ;</li>\n<li><strong>bords tendus</strong> (le centre de la feuille fait ventre) : les bords ont séché et se sont rétractés ;</li>\n<li><strong>tuilage</strong> : la feuille s'incurve parce qu'une face a pris ou perdu plus d'eau que l'autre, par exemple après une impression à forte charge d'encre sur une seule face.</li>\n</ul>\n<p>Ces défauts perturbent le margeage, provoquent des plis de travers, des doubles feuilles et des bourrages. C'est pourquoi les ateliers maintiennent si possible une atmosphère régulée, souvent autour de 20 à 23 °C et de 50 à 55 % d'humidité relative, et pourquoi le papier doit être <strong>acclimaté</strong> : laissé dans son emballage étanche dans l'atelier jusqu'à atteindre la température de la salle avant d'être déballé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> déballer une palette froide (livrée en hiver ou sortie d'un entrepôt non chauffé) dans un atelier chaud provoque de la condensation et des bords ondulés immédiats. La durée d'acclimatation dépend de l'écart de température et de la taille de la palette ; elle peut atteindre plusieurs jours pour une palette très froide. Le fournisseur de papier publie généralement un tableau de durées.</div>\n<p>Le contrôle se fait avec un <strong>hygromètre</strong> d'atelier et, pour la pile elle-même, avec un hygromètre à sabre (sonde plate glissée dans la pile) qui mesure l'humidité relative d'équilibre du papier. Si la différence avec l'air de l'atelier est faible, le papier est stable.</p>\n"
      },
      {
       "titre": "Électricité statique et séchage des encres",
       "contenu": "\n<p>Le frottement des feuilles entre elles et sur les organes des machines charge le papier en <strong>électricité statique</strong>, surtout lorsque l'air est sec (HR inférieure à 40 % environ) et que le papier est couché ou pelliculé. Les feuilles collent les unes aux autres : doubles feuilles au margeur, mauvaise réception, taquage difficile. Les remèdes sont le maintien d'une humidité suffisante, l'aération de la pile, et les <strong>barres antistatiques</strong> (ioniseurs) installées aux points sensibles des machines.</p>\n<p>Le façonnage intervient sur des feuilles dont l'encre doit être suffisamment sèche. En offset conventionnel, l'encre sèche d'abord par pénétration de ses huiles dans le papier, puis par <strong>oxydation</strong> de ses résines au contact de l'air ; ce second séchage demande plusieurs heures. Façonner trop tôt provoque du <strong>maculage</strong> (encre transférée sur la feuille voisine) ou des marques de frottement au pli. Les encres séchant aux ultraviolets (UV ou LED-UV) sont sèches dès la sortie de la presse, mais leur film plus dur peut casser au pli.</p>\n<p>Pour éviter le maculage en pile, l'imprimeur projette parfois une <strong>poudre anti-maculage</strong>. Elle facilite l'empilage mais peut gêner certaines finitions : pelliculage moins adhérent, colle moins efficace, dépôts sur les rouleaux de la plieuse.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de lancer le pliage d'un travail offset, le conducteur frotte une zone d'aplat avec un papier blanc ou passe l'ongle sur un pli d'essai. Si l'encre se transfère, il signale le travail au chef d'équipe et passe à un autre travail du planning en attendant le séchage.</div>\n"
      },
      {
       "titre": "Rainage et perforation : préparer le pli",
       "contenu": "\n<p>Au-delà d'un certain grammage, ou sur un papier couché, un pli direct casse la couche et les fibres : des craquelures blanches apparaissent sur les aplats, surtout sur les fonds foncés. On prépare alors le pli par un <strong>rainage</strong> : une gorge est formée dans le papier par compression entre un outil mâle (filet ou molette) et une contrepartie femelle. Le papier se plie ensuite le long de cette gorge, dans le sens qui place le bourrelet de rainage à l'intérieur du pli.</p>\n<table>\n<thead><tr><th>Situation</th><th>Préparation habituelle</th></tr></thead>\n<tbody>\n<tr><td>Papier offset jusqu'à 135 g/m² environ</td><td>Pli direct</td></tr>\n<tr><td>Couché au-delà de 150 g/m² environ, ou pli contre les fibres</td><td>Rainage recommandé</td></tr>\n<tr><td>Carte, couverture, impression numérique toner sur couché</td><td>Rainage nécessaire</td></tr>\n<tr><td>Pli croisé sur cahier de 16 ou 32 pages</td><td>Perforation au pli pour évacuer l'air</td></tr>\n</tbody>\n</table>\n<p>La <strong>perforation au pli</strong>, réalisée par une molette à dents sur les arbres de la plieuse, laisse s'échapper l'air emprisonné dans les cahiers à plis croisés. Sans elle, les cahiers gonflent et se froissent en tête (formation de « pattes d'oie »). La perforation disparaît ensuite à la rogne ou reste au dos, où elle facilite aussi la pénétration de la colle.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les seuils de grammage sont des repères, pas des règles. Le bon critère est l'essai : on plie une feuille d'essai à la main ou à la machine et on observe le pli à la loupe sur l'aplat le plus foncé. S'il blanchit, on raine.</div>\n"
      },
      {
       "titre": "Calculer l'épaisseur d'un bloc et d'un dos",
       "contenu": "\n<p>L'épaisseur du bloc conditionne de nombreux réglages : ouverture des poches, réglage du fraisage, largeur du dos de couverture, écartement des rainures, hauteur de pile au massicot, épaisseur de l'enveloppe ou du film en routage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> épaisseur d'une brochure en dos carré collé de 60 pages intérieures sur papier de 0,12 mm, avec une couverture de 0,25 mm. 1) Une feuille porte 2 pages : 60 / 2 = 30 feuilles. 2) Épaisseur du bloc : 30 x 0,12 = 3,6 mm. 3) La couverture enveloppe le bloc et ajoute 2 épaisseurs au total : 2 x 0,25 = 0,5 mm. 4) Épaisseur totale théorique : 3,6 + 0,5 = 4,1 mm. 5) La largeur du dos de couverture, entre les deux rainures de dos, est égale à l'épaisseur du bloc augmentée d'une petite tolérance pour la colle, que l'on fixe par une maquette en blanc. Si l'on connaît le grammage et la main au lieu de l'épaisseur : épaisseur d'une feuille en µm = main x grammage, par exemple 1,0 x 115 = 115 µm = 0,115 mm.</div>\n<p>Ce calcul donne une valeur théorique. En pratique, le pliage emprisonne de l'air, la pression du massicot ou du serrage comprime le bloc, et l'humidité fait varier l'épaisseur. C'est pourquoi la largeur définitive du dos est validée sur une <strong>maquette en blanc</strong> réalisée avec le papier réel, avant que la couverture soit imprimée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> confondre nombre de pages et nombre de feuilles est l'erreur la plus fréquente : une feuille compte toujours deux pages (recto et verso). Un dos calculé avec 60 feuilles au lieu de 30 serait deux fois trop large, et toute la série de couvertures serait inutilisable.</div>\n"
      }
     ],
     "points_cles": [
      "La main (épaisseur en µm divisée par le grammage) permet de comparer le volume des papiers.",
      "Les plis parallèles aux fibres sont nets ; dans une reliure, les fibres doivent être parallèles au dos.",
      "Dans un cahier à plis croisés, c'est le dernier pli, futur dos, qui doit suivre les fibres.",
      "Le papier hygroscopique se déforme (bords ondulés, bords tendus, tuilage) quand il n'est pas en équilibre avec l'air.",
      "Une palette froide s'acclimate dans son emballage avant d'être ouverte.",
      "L'électricité statique se combat par l'humidité de l'air et les barres antistatiques.",
      "Façonner une encre offset insuffisamment sèche provoque maculage et frottements.",
      "Le rainage évite la cassure au pli des papiers couchés épais ; la perforation évacue l'air des plis croisés.",
      "Épaisseur d'un bloc = nombre de pages / 2 x épaisseur d'une feuille."
     ],
     "lexique": [
      {
       "terme": "Sens machine",
       "def": "Direction d'orientation principale des fibres, parallèle au défilement sur la machine à papier."
      },
      {
       "terme": "Hygroscopique",
       "def": "Qui absorbe ou rejette l'eau pour se mettre en équilibre avec l'humidité de l'air."
      },
      {
       "terme": "Humidité relative",
       "def": "Rapport entre la quantité de vapeur d'eau contenue dans l'air et la quantité maximale possible à cette température, en %."
      },
      {
       "terme": "Acclimatation",
       "def": "Mise à température d'une palette de papier dans son emballage avant ouverture."
      },
      {
       "terme": "Tuilage",
       "def": "Courbure d'une feuille due à une différence d'humidité entre ses deux faces."
      },
      {
       "terme": "Maculage",
       "def": "Transfert d'encre insuffisamment sèche sur une feuille voisine ou sur un organe de machine."
      },
      {
       "terme": "Poudre anti-maculage",
       "def": "Fine poudre projetée sur les feuilles imprimées pour les séparer légèrement en pile."
      },
      {
       "terme": "Rainage",
       "def": "Formation d'une gorge par compression pour préparer un pli net sans cassure."
      },
      {
       "terme": "Perforation au pli",
       "def": "Ligne de petites entailles qui laisse échapper l'air d'un cahier à plis croisés."
      },
      {
       "terme": "Barre antistatique",
       "def": "Ioniseur qui neutralise les charges électriques des feuilles sur une machine."
      }
     ]
    },
    {
     "id": "bfpi-colles-fils-expedition",
     "titre": "Colles, fils, garnitures et matières d'expédition",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Distinguer les familles de colles du façonnage et choisir celle qui convient à un produit.",
      "Interpréter les caractéristiques d'une colle : viscosité, température d'application, temps ouvert, temps de prise.",
      "Identifier les fils et éléments de garniture utilisés en piqûre, couture et reliure.",
      "Choisir les matières de conditionnement et d'expédition adaptées à un envoi.",
      "Calculer une consommation de matière et un seuil de réapprovisionnement."
     ],
     "sections": [
      {
       "titre": "Les matières d'œuvre consommables",
       "contenu": "\n<p>Les <strong>matières d'œuvre</strong> du façonnage ne se limitent pas aux feuilles imprimées. Chaque produit consomme des colles, des fils, des agrafes, des films, des cartons, parfois des éléments décoratifs. Ces matières représentent une part non négligeable du prix de revient et, surtout, elles conditionnent la qualité : un livre peut être parfaitement imprimé et se désagréger parce que la colle était mal choisie ou mal appliquée.</p>\n<p>On les classe en trois groupes :</p>\n<ul>\n<li>les matières d'<strong>assemblage</strong> : colles, fils d'acier, fils textiles ;</li>\n<li>les matières de <strong>garniture</strong> et d'ennoblissement : cartons et papiers de reliure, toiles, tranchefiles, signets, films de dorure, films de pelliculage ;</li>\n<li>les matières de <strong>conditionnement et d'expédition</strong> : films, enveloppes, cartons, palettes, feuillards.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une matière d'œuvre se choisit selon trois critères : la compatibilité avec le support (papier couché, pelliculé, vernis), la compatibilité avec la machine (température, viscosité, diamètre de bobine) et l'usage du produit fini (durée de vie, exposition à la chaleur, recyclage).</div>\n"
      },
      {
       "titre": "Les familles de colles",
       "contenu": "\n<p>Une colle agit en deux temps : elle doit d'abord <strong>mouiller</strong> les surfaces (s'étaler et pénétrer entre les fibres), puis <strong>durcir</strong> pour transmettre les efforts. La manière dont elle durcit définit sa famille.</p>\n<table>\n<thead><tr><th>Famille</th><th>Mode de prise</th><th>Application</th><th>Usages</th><th>Points forts et limites</th></tr></thead>\n<tbody>\n<tr><td>Thermofusible EVA (hotmelt)</td><td>Refroidissement</td><td>À chaud, environ 150 à 180 °C</td><td>Dos carré collé courant, encollage de couverture</td><td>Prise en quelques secondes ; souple au froid limité, ramollit à la chaleur ; ouverture à plat médiocre</td></tr>\n<tr><td>Polyuréthane réactif (PUR)</td><td>Refroidissement puis réaction chimique avec l'humidité</td><td>À chaud, environ 110 à 140 °C</td><td>Livres durables, papiers couchés difficiles, livres qui doivent s'ouvrir à plat</td><td>Très résistant, film fin ; prise complète en 24 h ou plus ; nettoyage et stockage contraignants</td></tr>\n<tr><td>Vinylique en dispersion (colle blanche)</td><td>Évaporation et absorption de l'eau</td><td>À froid</td><td>Collage latéral, gardes, emboîtage, encollage du dos avant hotmelt (collage en deux temps)</td><td>Bonne pénétration, souple ; séchage lent, fait gonfler le papier</td></tr>\n<tr><td>Colles d'origine naturelle (animale, amidon)</td><td>Refroidissement (animale) ou séchage (amidon)</td><td>À chaud ou à froid</td><td>Reliure traditionnelle, couvrure, cartonnage</td><td>Réversibles, utiles en restauration ; sensibles à l'humidité</td></tr>\n</tbody>\n</table>\n<p>Les températures indiquées sont des ordres de grandeur : seule la <strong>fiche technique</strong> de la colle utilisée fait foi. Les plages varient selon les formulations.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les colles PUR contiennent des isocyanates, substances sensibilisantes pour les voies respiratoires. Leur mise en œuvre impose les mesures prévues par la fiche de données de sécurité : captage des vapeurs à la source, gants adaptés, fondoir fermé, procédure de purge et de nettoyage. On ne mélange jamais une colle PUR avec une colle EVA dans un même fondoir.</div>\n"
      },
      {
       "titre": "Lire les caractéristiques d'une colle",
       "contenu": "\n<p>La fiche technique d'une colle donne plusieurs grandeurs qu'il faut savoir interpréter :</p>\n<ul>\n<li>la <strong>viscosité</strong>, en millipascals-seconde (mPa·s), mesurée à une température donnée : elle exprime la résistance de la colle à l'écoulement. Une colle trop visqueuse pénètre mal entre les feuillets ; trop fluide, elle coule et forme des bavures ;</li>\n<li>le <strong>temps ouvert</strong> : durée pendant laquelle la colle appliquée reste capable de coller. Si la couverture arrive après la fin du temps ouvert, elle n'adhère pas ;</li>\n<li>le <strong>temps de prise</strong> : durée au bout de laquelle le collage résiste suffisamment pour être manipulé (rogné, empilé) ;</li>\n<li>la <strong>résistance thermique</strong> : températures haute et basse au-delà desquelles le collage se ramollit ou devient cassant ;</li>\n<li>la <strong>résistance au vieillissement</strong> : tenue dans le temps, jaunissement ;</li>\n<li>la <strong>durée de conservation</strong> et les conditions de stockage.</li>\n</ul>\n<p>Ces grandeurs sont liées entre elles et à la vitesse de la machine. Plus la chaîne de brochage va vite, plus le temps entre l'encollage et la pose de la couverture est court, et plus on peut utiliser une colle à temps ouvert court. À l'inverse, une machine lente impose une colle à temps ouvert plus long, ou une température plus élevée dans la plage admise.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer la consommation de colle d'une série. Brochure de 200 mm de hauteur, dos de 4 mm, film de colle de 0,6 mm d'épaisseur au dos, masse volumique de la colle voisine de 1 g/cm³. 1) Surface du dos : 200 x 4 = 800 mm² = 8 cm². 2) Volume de colle : 8 x 0,06 = 0,48 cm³, soit environ 0,5 g par brochure. 3) Pour 10 000 brochures : 0,5 x 10 000 = 5 000 g = 5 kg pour le dos. 4) On ajoute le collage latéral et les pertes de purge (souvent évaluées en pourcentage dans l'entreprise). Ce calcul permet de préparer la bonne quantité au fondoir et de vérifier le stock.</div>\n"
      },
      {
       "titre": "Fils et éléments de garniture",
       "contenu": "\n<p>La <strong>piqûre</strong> utilise un <strong>fil d'acier</strong>, généralement galvanisé ou cuivré pour résister à la corrosion, livré en bobines. La tête de piqûre coupe une longueur de fil, la forme en agrafe et la plie à travers le produit. Le fil est choisi selon l'épaisseur à piquer : rond ou plat, de diamètre ou de section adaptés. Un fil trop fin traverse mal un bloc épais et se tord ; un fil trop gros marque les pages extérieures.</p>\n<p>La <strong>couture</strong> utilise des <strong>fils textiles</strong> (coton, polyester, polyamide ou fils mixtes), choisis selon leur résistance et leur grosseur. On rencontre aussi le <strong>fil thermocollant</strong> : de petites agrafes de fil textile enduit de plastique traversent le pli de chaque cahier dès la plieuse et sont ensuite fondues pour solidariser les feuillets. Ce procédé, appelé couture thermique ou thermocollage de fil, donne des cahiers plus solides sans couture traditionnelle.</p>\n<p>La reliure emploie d'autres matières :</p>\n<table>\n<thead><tr><th>Élément</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Carton de reliure (carton gris compact)</td><td>Rigidité des plats ; épaisseur de l'ordre de 2 à 3 mm, sens des fibres parallèle au dos</td></tr>\n<tr><td>Papier ou toile de couvrure</td><td>Recouvre les cartons ; imprimé, pelliculé ou toilé</td></tr>\n<tr><td>Gardes</td><td>Feuillets qui relient le bloc à la couverture cartonnée</td></tr>\n<tr><td>Tranchefile</td><td>Petit bourrelet textile collé en tête et en pied du dos, décoratif et protecteur</td></tr>\n<tr><td>Signet</td><td>Ruban marque-page fixé au dos</td></tr>\n<tr><td>Film de dorure</td><td>Feuille mince portant une couche métallisée ou pigmentée transférée à chaud</td></tr>\n</tbody>\n</table>\n<p>Le <strong>film de dorure</strong> est constitué d'un support polyester, d'une couche de détachement, d'un vernis coloré, d'une couche métallisée (aluminium déposé sous vide pour les ors et argents) et d'une couche adhésive activée par la chaleur. Son choix dépend du support (papier, pelliculage, vernis) et de la finesse du motif.</p>\n"
      },
      {
       "titre": "Les matières de conditionnement et d'expédition",
       "contenu": "\n<p>Le produit fini doit arriver chez le client ou chez le destinataire final sans dommage. On choisit le conditionnement selon la fragilité du produit, le mode de transport, les exigences du client et les règles de l'opérateur postal ou du transporteur.</p>\n<table>\n<thead><tr><th>Matière</th><th>Caractéristiques</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Film rétractable</td><td>Polyéthylène qui se resserre au passage dans un tunnel chaud</td><td>Paquets d'exemplaires, mise sous film d'un magazine et de ses suppléments</td></tr>\n<tr><td>Film étirable</td><td>Film tendu par étirement, sans chauffage</td><td>Banderolage des palettes</td></tr>\n<tr><td>Film perforé</td><td>Micro-perforations qui laissent l'air s'échapper</td><td>Évite l'effet ballon lors de la rétraction</td></tr>\n<tr><td>Films et enveloppes papier ou biosourcés</td><td>Alternatives aux plastiques d'origine fossile</td><td>Routage de magazines, demandes environnementales du client</td></tr>\n<tr><td>Enveloppes</td><td>Formats normalisés (C4, C5, DL…), à fenêtre ou non</td><td>Courriers, publipostage</td></tr>\n<tr><td>Cartons</td><td>Ondulé simple ou double cannelure, compact</td><td>Livres, petites quantités, protection des angles</td></tr>\n<tr><td>Palettes</td><td>Palette Europe 1 200 x 800 mm, palettes perdues</td><td>Transport et stockage</td></tr>\n<tr><td>Feuillards de cerclage</td><td>Bandes polypropylène ou polyester</td><td>Maintien des paquets ou des colis sur palette</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> de nombreux éditeurs de magazines remplacent progressivement le film plastique de routage par des films papier ou par l'envoi sans emballage avec adressage direct sur la couverture. Ces choix modifient les réglages des machines de routage et doivent être validés par des essais (résistance au tri mécanisé, lisibilité de l'adresse).</div>\n"
      },
      {
       "titre": "Gérer les stocks de matières",
       "contenu": "\n<p>Les matières consommables sont stockées en magasin et sorties sur <strong>bon de sortie</strong>. Une bonne gestion évite deux écueils : la <strong>rupture</strong>, qui arrête une machine faute de colle ou de film, et le <strong>surstock</strong>, qui immobilise de l'argent et expose les matières au vieillissement.</p>\n<p>Plusieurs règles s'appliquent :</p>\n<ul>\n<li>la règle <strong>premier entré, premier sorti</strong> (PEPS, ou FIFO en anglais) : on consomme d'abord les lots les plus anciens, ce qui est indispensable pour les colles, dont la durée de conservation est limitée ;</li>\n<li>le respect des <strong>conditions de stockage</strong> : température, humidité, emballage fermé (une colle PUR entamée réagit avec l'humidité de l'air) ;</li>\n<li>le <strong>suivi des lots</strong> : on note sur la fiche de suivi le numéro de lot de la colle utilisée, pour pouvoir remonter à la cause d'un défaut de collage découvert plus tard ;</li>\n<li>l'<strong>inventaire</strong> régulier, qui compare stock réel et stock informatique.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul d'un seuil de réapprovisionnement. L'atelier consomme en moyenne 40 kg de hotmelt par jour ouvré. Le fournisseur livre en 5 jours ouvrés après commande. On garde un stock de sécurité de 3 jours. 1) Consommation pendant le délai : 40 x 5 = 200 kg. 2) Stock de sécurité : 40 x 3 = 120 kg. 3) Seuil de commande : 200 + 120 = 320 kg. Dès que le stock descend à 320 kg, on passe commande ; la livraison arrive alors que le stock est encore de 120 kg, ce qui absorbe un retard ou une hausse de consommation.</div>\n"
      }
     ],
     "points_cles": [
      "Les matières d'œuvre se répartissent en matières d'assemblage, de garniture et d'expédition.",
      "Le hotmelt EVA prend par refroidissement ; le PUR prend par refroidissement puis par réaction avec l'humidité.",
      "Viscosité, temps ouvert et temps de prise doivent être adaptés à la vitesse de la machine.",
      "Les colles PUR imposent des précautions liées aux isocyanates, définies par la fiche de données de sécurité.",
      "Le fil d'acier de piqûre se choisit selon l'épaisseur à piquer ; le fil textile sert à la couture des cahiers.",
      "Le film de dorure est un empilement de couches dont la couche adhésive est activée par la chaleur.",
      "Le conditionnement dépend du produit, du transport, du client et des règles de l'opérateur postal.",
      "Les stocks se gèrent selon la règle premier entré, premier sorti, avec un seuil de réapprovisionnement."
     ],
     "lexique": [
      {
       "terme": "Hotmelt",
       "def": "Colle thermofusible appliquée à l'état fondu, qui prend en refroidissant."
      },
      {
       "terme": "PUR",
       "def": "Colle polyuréthane réactive, appliquée à chaud, qui achève sa prise par réaction avec l'humidité."
      },
      {
       "terme": "Viscosité",
       "def": "Résistance d'un liquide à l'écoulement, exprimée en mPa·s."
      },
      {
       "terme": "Temps ouvert",
       "def": "Durée pendant laquelle une colle appliquée reste capable d'adhérer."
      },
      {
       "terme": "Temps de prise",
       "def": "Durée après laquelle le collage est assez résistant pour être manipulé."
      },
      {
       "terme": "Fil thermocollant",
       "def": "Fil textile enduit de plastique utilisé pour solidariser les feuillets d'un cahier dès le pliage."
      },
      {
       "terme": "Tranchefile",
       "def": "Bourrelet textile collé en tête et en pied du dos d'un livre relié."
      },
      {
       "terme": "Film rétractable",
       "def": "Film plastique qui se resserre autour du produit sous l'effet de la chaleur."
      },
      {
       "terme": "Feuillard",
       "def": "Bande de plastique ou d'acier utilisée pour cercler des paquets ou des colis."
      },
      {
       "terme": "Seuil de réapprovisionnement",
       "def": "Niveau de stock qui déclenche une commande pour éviter la rupture."
      }
     ]
    },
    {
     "id": "bfpi-massicot-coupe",
     "titre": "Le massicot programmable et la conduite de la coupe",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Décrire les organes d'un massicot programmable et de ses périphériques.",
      "Expliquer le rôle de l'angle de biseau, de la nature de la lame et de la pression sur la qualité de coupe.",
      "Établir une séquence de coupe et la programmer en cotes à partir du taquet arrière.",
      "Diagnostiquer les principaux défauts de coupe et proposer une action corrective.",
      "Appliquer les règles de sécurité spécifiques au massicot, notamment lors du changement de lame."
     ],
     "sections": [
      {
       "titre": "Architecture d'un massicot programmable",
       "contenu": "\n<p>Le <strong>massicot</strong> (ou coupeuse à lame droite) coupe une pile de feuilles d'un seul mouvement. Son principe a été vu en seconde ; on étudie ici le massicot <strong>programmable</strong>, standard dans les ateliers de façonnage, et la manière d'en tirer une coupe précise et productive.</p>\n<table>\n<thead><tr><th>Organe</th><th>Fonction</th></tr></thead>\n<tbody>\n<tr><td>Table</td><td>Surface de travail, souvent à coussin d'air (petits trous soufflant de l'air) pour déplacer la pile sans effort</td></tr>\n<tr><td>Taquet arrière (pousseur)</td><td>Butée motorisée qui positionne la pile ; sa distance à la lame est la cote de coupe</td></tr>\n<tr><td>Règles latérales</td><td>Butées fixes à gauche et à droite qui assurent l'équerrage de la pile</td></tr>\n<tr><td>Presse (ou presseur)</td><td>Barre qui descend avant la lame et immobilise la pile en la comprimant</td></tr>\n<tr><td>Lame</td><td>Outil de coupe en acier, à biseau, animé d'un mouvement oblique (coupe en tirant)</td></tr>\n<tr><td>Réglette</td><td>Barre de plastique encastrée dans la table, sur laquelle la lame termine sa course</td></tr>\n<tr><td>Ligne de coupe optique</td><td>Trait lumineux qui matérialise la position de la lame sur la pile</td></tr>\n<tr><td>Pupitre de commande</td><td>Écran de programmation, mémoire des programmes, réglage de pression</td></tr>\n</tbody>\n</table>\n<p>Les caractéristiques d'un massicot sont la <strong>largeur de coupe</strong> (ouverture, par exemple 92 cm ou 115 cm), la <strong>hauteur de pile</strong> maximale (souvent entre 12 et 17 cm), la précision de positionnement du taquet arrière et la <strong>force de pression</strong> réglable.</p>\n<p>Autour du massicot, un <strong>système de coupe</strong> peut comprendre une <strong>taqueuse</strong> (table vibrante avec soufflage d'air qui aligne les feuilles et chasse l'air de la pile), un <strong>élévateur de pile</strong> qui amène les feuilles à hauteur de travail, une <strong>table de transfert</strong> et un <strong>déchargeur</strong> qui dépose les paquets coupés sur palette. Ces périphériques réduisent les manutentions et la fatigue.</p>\n"
      },
      {
       "titre": "La lame, la réglette et la pression",
       "contenu": "\n<p>La lame coupe par l'association d'une pénétration verticale et d'un glissement latéral. Sa partie active est le <strong>biseau</strong>, dont l'<strong>angle</strong> est choisi selon la matière : un angle faible (environ 19 à 21°) pénètre mieux les matières tendres mais s'émousse plus vite ; un angle plus ouvert (environ 24 à 26°) résiste mieux aux matières dures et abrasives comme les cartons et les papiers fortement chargés. Les valeurs exactes sont données par le constructeur du massicot et l'affûteur.</p>\n<p>Les lames sont en <strong>acier rapide</strong> (HSS) pour un usage courant, ou munies d'une partie active en <strong>carbure</strong>, plus dure, qui reste coupante beaucoup plus longtemps sur les papiers abrasifs mais supporte mal les chocs. Une lame émoussée est envoyée à l'affûtage ; une lame ébréchée par un corps étranger (agrafe, trombone) doit être changée immédiatement.</p>\n<p>La <strong>réglette</strong> reçoit la lame en fin de course. À chaque coupe, la lame l'entame légèrement. Quand la marque est trop profonde, les dernières feuilles du bas ne sont plus coupées nettement. On fait alors tourner la réglette pour présenter une face neuve (elle en possède plusieurs) ou on la remplace. Simultanément, la profondeur de descente de la lame est réglée pour qu'elle pénètre de quelques dixièmes de millimètre dans la réglette, pas davantage.</p>\n<p>La <strong>pression</strong> du presseur doit chasser l'air et immobiliser la pile sans la marquer. Une pression insuffisante laisse les feuilles se déplacer sous l'effet de la lame ; une pression excessive imprime la trace du presseur sur les papiers couchés, pelliculés ou imprimés en aplat, et comprime certains papiers bouffants qui reprennent ensuite leur épaisseur, faussant la cote.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une coupe de qualité repose sur trois réglages cohérents : angle et état de la lame, état et réglage de la réglette, pression adaptée au support. Changer de matière (passer d'un offset à un carton) doit faire réexaminer les trois.</div>\n"
      },
      {
       "titre": "Programmer une séquence de coupe",
       "contenu": "\n<p>Le massicot programmable mémorise une suite de <strong>cotes</strong> : à chaque cote correspond une position du taquet arrière, donc une distance entre le taquet et la lame. La partie de la pile située entre la lame et l'opérateur est séparée ; la partie située entre la lame et le taquet arrière reste en place. Les programmes peuvent être saisis au pupitre, rappelés depuis la mémoire, ou reçus du flux numérique (données d'imposition au format JDF ou format propre au constructeur).</p>\n<p>Une séquence de coupe respecte trois principes : partir de l'<strong>angle de marge</strong> pour les premières coupes ; s'appuyer ensuite sur un <strong>bord déjà coupé</strong> pour les coupes suivantes ; limiter les rotations de pile, qui coûtent du temps et des risques de décalage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> séquence pour 4 flyers 100 x 210 mm à fonds perdus de 3 mm, sur une feuille 450 x 320 mm. Côté pinces : marge 10 mm. Côté taquet latéral : marge 5 mm. Les poses sont alignées dans la largeur avec doubles coupes de 6 mm. 1) Bord de pinces contre le taquet arrière, côté taquet latéral contre la règle de gauche. Le format fini commence à 10 + 3 = 13 mm et finit à 13 + 210 = 223 mm du bord de pinces. Cote 223 : on retire la chute avant. 2) Rotation de 180° : le bord fraîchement coupé est contre le taquet. Cote 210 : on retire la chute côté pinces. On obtient une bande de 210 mm de haut. 3) Rotation de 90° : côté taquet latéral contre le taquet arrière. Les poses sont à 8-108, 114-214, 220-320 et 326-426 mm de ce bord. Cotes successives : 426 (chute), 326 (on retire la pose 4), 320 (double coupe), 220 (pose 3), 214 (double coupe), 114 (pose 2), 108 (double coupe). 4) Il reste la pose 1 avec 8 mm de marge au dos : rotation de 180°, cote 100. Total : 10 coupes et 3 rotations.</div>\n<p>Le programme est vérifié sur une <strong>pile d'essai</strong> de quelques feuilles : on contrôle les formats au réglet ou au pied à coulisse et la position des traits de coupe. On corrige si nécessaire par une valeur de décalage (offset de programme) plutôt qu'en modifiant chaque cote.</p>\n"
      },
      {
       "titre": "Taquer et préparer la pile",
       "contenu": "\n<p>La meilleure programmation ne sert à rien si la pile est mal préparée. Le <strong>taquage</strong> consiste à aligner parfaitement les feuilles sur deux bords perpendiculaires (en principe ceux de l'angle de marge) et à chasser l'air emprisonné. On l'effectue à la taqueuse ou, à défaut, à la main par petites quantités.</p>\n<p>La <strong>hauteur de levée</strong> (épaisseur de pile coupée en une fois) est un compromis : une levée haute réduit le nombre de coupes, mais augmente la dérive des feuilles et la force nécessaire. Sur des papiers glissants (couchés brillants, pelliculés) ou des formats étroits, on coupe des levées plus basses. Un format très étroit (moins de quelques centimètres) se coupe avec une <strong>cale</strong> ou une fausse pile, car le presseur ne tient pas une bande trop fine.</p>\n<p>On évite de couper des piles contenant des corps étrangers : agrafes, intercalaires plastique, étiquettes de palette. Un contrôle visuel de chaque levée fait partie des gestes de base.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur les travaux à forte valeur (couvertures pelliculées, cartes de vœux dorées), on place une plaque de protection sous le presseur ou on réduit la pression pour éviter toute marque. Le BàF est alors examiné en lumière rasante, qui révèle les empreintes invisibles en lumière directe.</div>\n"
      },
      {
       "titre": "Diagnostiquer les défauts de coupe",
       "contenu": "\n<table>\n<thead><tr><th>Défaut constaté</th><th>Causes probables</th><th>Actions</th></tr></thead>\n<tbody>\n<tr><td>Feuilles du haut plus longues que celles du bas (dérive en escalier)</td><td>Lame émoussée, angle de biseau trop ouvert pour la matière, pression insuffisante, levée trop haute</td><td>Changer ou affûter la lame, augmenter la pression, réduire la levée</td></tr>\n<tr><td>Dernières feuilles du bas mal coupées ou arrachées</td><td>Réglette marquée, profondeur de lame insuffisante</td><td>Tourner ou changer la réglette, régler la descente de lame</td></tr>\n<tr><td>Coupe hors d'équerre</td><td>Pile mal taquée, taquet arrière non parallèle à la lame, règle latérale déréglée</td><td>Retaquer, contrôler l'équerrage au réglet d'équerre, faire régler le taquet</td></tr>\n<tr><td>Cotes variables d'une levée à l'autre</td><td>Air dans la pile, papier compressible, pile qui rebondit au retrait du presseur</td><td>Mieux chasser l'air, augmenter le temps de pression, adapter la levée</td></tr>\n<tr><td>Marques de presseur</td><td>Pression trop forte sur support sensible</td><td>Réduire la pression, plaque de protection</td></tr>\n<tr><td>Bords fibreux, poussière, feuilles soudées</td><td>Lame émoussée, ébréchée, matière abrasive ou pelliculée</td><td>Changer la lame, choisir une lame carbure</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour diagnostiquer une dérive, mesurer le format sur la première feuille et sur la dernière feuille de la levée. Un écart supérieur à la tolérance de la fiche (souvent quelques dixièmes de millimètre pour un travail soigné) confirme le défaut. On modifie alors un seul paramètre à la fois (d'abord la pression, puis la levée, puis la lame) et on refait une coupe d'essai, pour savoir lequel était en cause.</div>\n"
      },
      {
       "titre": "Sécurité au massicot",
       "contenu": "\n<p>Le massicot reste l'une des machines les plus dangereuses de l'atelier : la lame et le presseur peuvent sectionner ou écraser une main. Les massicots modernes sont conçus selon les exigences de la norme européenne de sécurité des machines d'impression et de transformation du papier (série NF EN 1010, dont une partie traite des machines de coupe). On y trouve notamment :</p>\n<ul>\n<li>la <strong>commande bimanuelle</strong> : la coupe ne se déclenche que si l'opérateur appuie simultanément sur deux boutons éloignés, ce qui garantit que ses deux mains sont hors de la zone ;</li>\n<li>la <strong>barrière immatérielle</strong> (rideau lumineux) devant la zone de coupe : toute interruption du faisceau arrête ou empêche le mouvement ;</li>\n<li>les <strong>carters</strong> fixes ou verrouillés à l'arrière et sur les côtés ;</li>\n<li>la descente du presseur en <strong>pression réduite</strong> tant que la coupe n'est pas validée, pour positionner la pile sans risque d'écrasement grave.</li>\n</ul>\n<p>Le <strong>changement de lame</strong> est une opération à haut risque. Il se fait machine consignée, avec l'outillage spécifique fourni par le constructeur (vis de manutention, porte-lame ou coffret de transport), des gants anti-coupure et en suivant pas à pas la procédure. La lame est toujours transportée dans son coffret, jamais à la main nue ni posée sur une table.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> neutraliser un dispositif de sécurité (bloquer un bouton de la commande bimanuelle, masquer une cellule) pour aller plus vite est interdit et constitue une faute grave. Tout dysfonctionnement d'une sécurité impose l'arrêt de la machine et l'intervention de la maintenance.</div>\n"
      }
     ],
     "points_cles": [
      "La cote de coupe est la distance entre le taquet arrière et la lame ; la partie côté opérateur est séparée.",
      "L'angle de biseau se choisit selon la dureté de la matière ; les lames carbure durent plus longtemps sur papiers abrasifs.",
      "La réglette se tourne ou se change quand les dernières feuilles ne sont plus coupées nettement.",
      "La pression doit immobiliser la pile sans marquer le support.",
      "Une séquence de coupe part de l'angle de marge puis s'appuie sur des bords déjà coupés.",
      "Un programme se valide sur une pile d'essai avant la série.",
      "La dérive en escalier signale le plus souvent une lame émoussée, une pression faible ou une levée trop haute.",
      "Commande bimanuelle, barrière immatérielle et carters protègent l'opérateur ; les neutraliser est interdit.",
      "Le changement de lame se fait machine consignée, avec l'outillage dédié et des gants anti-coupure."
     ],
     "lexique": [
      {
       "terme": "Taquet arrière",
       "def": "Butée motorisée du massicot qui positionne la pile à la cote programmée."
      },
      {
       "terme": "Presseur",
       "def": "Barre qui immobilise la pile en la comprimant avant la descente de la lame."
      },
      {
       "terme": "Biseau",
       "def": "Partie affûtée de la lame, caractérisée par son angle."
      },
      {
       "terme": "Réglette",
       "def": "Barre de plastique sur laquelle la lame termine sa course."
      },
      {
       "terme": "Levée",
       "def": "Épaisseur de pile coupée en une seule fois."
      },
      {
       "terme": "Taqueuse",
       "def": "Table vibrante avec soufflage d'air qui aligne les feuilles et chasse l'air de la pile."
      },
      {
       "terme": "Cote",
       "def": "Valeur programmée de la position du taquet arrière par rapport à la lame."
      },
      {
       "terme": "Dérive",
       "def": "Défaut de coupe où les feuilles d'une même levée n'ont pas la même dimension."
      },
      {
       "terme": "Commande bimanuelle",
       "def": "Dispositif qui exige l'action simultanée des deux mains pour déclencher un mouvement dangereux."
      },
      {
       "terme": "Barrière immatérielle",
       "def": "Rideau de faisceaux lumineux dont l'interruption arrête la machine."
      }
     ]
    },
    {
     "id": "bfpi-plieuses",
     "titre": "Les plieuses : principes, réglages et types de plis",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Expliquer le principe du pli à poche et du pli à couteau et les associer dans une plieuse mixte.",
      "Identifier les organes d'une plieuse à feuilles : margeur, table de marge, groupes de pliage, arbres porte-outils, sortie.",
      "Régler les butées de poches et l'écartement des rouleaux à partir du schéma de pliage et de l'épaisseur du papier.",
      "Relier le nombre de plis croisés au nombre de pages d'un cahier.",
      "Distinguer le pliage sur plieuse à feuilles et le pliage en ligne sur rotative."
     ],
     "sections": [
      {
       "titre": "Deux principes de pliage",
       "contenu": "\n<p>Toutes les plieuses à feuilles utilisent l'un ou l'autre de deux principes, ou les deux.</p>\n<p>Dans le <strong>pli à poche</strong>, deux rouleaux entraînent la feuille dans une <strong>poche</strong> : un couloir plat formé de deux tôles, fermé par une <strong>butée</strong> réglable. Quand le bord avant touche la butée, la feuille continue d'avancer par l'arrière : elle forme une <strong>boucle</strong> à l'entrée de la poche. Cette boucle est happée par un troisième rouleau, qui forme le pli avec le rouleau commun. La distance entre l'entrée de la poche et la butée fixe donc la position du pli.</p>\n<p>Dans le <strong>pli à couteau</strong>, la feuille avance à plat sur une table jusqu'à des butées. Une lame non coupante, le <strong>couteau</strong>, descend au-dessus de la ligne de pli et enfonce la feuille entre deux rouleaux qui tournent en sens inverse ; ceux-ci saisissent et marquent le pli. Le couteau fait un pli à 90° par rapport à la direction d'avance précédente : il sert surtout aux <strong>plis croisés</strong>.</p>\n<table>\n<thead><tr><th>Critère</th><th>Pli à poche</th><th>Pli à couteau</th></tr></thead>\n<tbody>\n<tr><td>Vitesse</td><td>Élevée</td><td>Plus faible</td></tr>\n<tr><td>Précision sur papiers fins et cahiers épais</td><td>Moyenne, risque de froissage</td><td>Bonne, pli plus contrôlé</td></tr>\n<tr><td>Plis parallèles multiples (accordéon, roulé)</td><td>Très adapté</td><td>Peu adapté</td></tr>\n<tr><td>Plis croisés</td><td>Possible avec un second groupe à 90°</td><td>Usage principal</td></tr>\n</tbody>\n</table>\n<p>La <strong>plieuse mixte</strong> combine un groupe de poches pour les plis parallèles et une ou plusieurs stations à couteau pour les plis croisés. C'est la machine habituelle pour les cahiers de 16 et 32 pages.</p>\n"
      },
      {
       "titre": "Les organes d'une plieuse à feuilles",
       "contenu": "\n<ul>\n<li>Le <strong>margeur</strong> sépare les feuilles de la pile et les envoie une à une. On distingue le margeur à pile plate (feuille prise par des ventouses en haut de pile) et le margeur rotatif ou à recouvrement (les feuilles se chevauchent en nappe), qui permet des cadences élevées à vitesse de bande plus faible.</li>\n<li>La <strong>table de marge</strong> transporte la feuille et l'aligne contre l'<strong>équerre</strong> grâce à des billes ou des courroies obliques. C'est là que se joue la précision : la feuille doit être alignée contre le même bord que le taquet latéral de l'impression.</li>\n<li>Le <strong>contrôle de double feuille</strong> (mécanique, ultrasonique ou optique) arrête la machine si deux feuilles passent ensemble.</li>\n<li>Les <strong>groupes de pliage</strong> (poches et couteaux) forment les plis. Un <strong>déflecteur</strong> placé à l'entrée d'une poche la ferme lorsqu'on ne veut pas l'utiliser : la feuille passe alors directement aux rouleaux suivants.</li>\n<li>Les <strong>arbres porte-outils</strong>, en sortie de chaque groupe, reçoivent des <strong>molettes</strong> : molettes de rainage, de perforation (pour évacuer l'air avant le pli suivant), de coupe (pour séparer deux poses ou enlever une bande), parfois des molettes de collage.</li>\n<li>La <strong>sortie</strong> dépose les produits pliés en nappe sur une bande ; une <strong>presse de sortie</strong> (rouleaux presseurs) marque les plis et réduit le gonflement.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une plieuse récente, les butées de poches, l'écartement des rouleaux et la position de l'équerre sont motorisés. Le conducteur choisit un schéma de pliage à l'écran et saisit le format et le grammage ; la machine propose les réglages, qu'il affine ensuite sur quelques feuilles. Les réglages fins restent un savoir-faire du conducteur.</div>\n"
      },
      {
       "titre": "Les types de plis et le nombre de pages",
       "contenu": "\n<p>On distingue les <strong>plis parallèles</strong>, tous dans la même direction, et les <strong>plis croisés</strong>, perpendiculaires au pli précédent.</p>\n<table>\n<thead><tr><th>Pli</th><th>Description</th><th>Volets</th><th>Point de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Pli simple</td><td>Un pli au milieu</td><td>2</td><td>Aucun particulier</td></tr>\n<tr><td>Pli roulé</td><td>Les volets s'enroulent les uns dans les autres</td><td>3 ou plus</td><td>Volets intérieurs plus courts de 1 à 2 mm chacun</td></tr>\n<tr><td>Pli accordéon (zigzag)</td><td>Plis alternés, comme un soufflet</td><td>3 ou plus</td><td>Volets égaux</td></tr>\n<tr><td>Pli fenêtre</td><td>Deux volets extérieurs se rabattent vers le centre</td><td>3 (ou 4 en fenêtre fermée)</td><td>Volets rabattus légèrement plus courts</td></tr>\n<tr><td>Pli portefeuille (double parallèle)</td><td>Pli au milieu, puis repli au milieu</td><td>4</td><td>Volets intérieurs légèrement plus courts</td></tr>\n<tr><td>Pli croisé</td><td>Chaque pli perpendiculaire au précédent</td><td>-</td><td>Évacuation de l'air, sens des fibres pour le dernier pli</td></tr>\n</tbody>\n</table>\n<p>Avec des plis croisés successifs, chaque pli double le nombre de feuillets. Une feuille pliée une fois donne 4 pages ; deux plis croisés donnent 8 pages ; trois plis croisés, 16 pages ; quatre plis croisés, 32 pages. En formule : nombre de pages = 2 puissance (nombre de plis + 1). Les plieuses mixtes réalisent aussi des combinaisons, par exemple un cahier de 16 pages obtenu par deux plis parallèles en poches et un pli croisé au couteau, sur une feuille au format allongé.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans les plis roulés et fenêtre, un volet qui se replie à l'intérieur d'un autre doit être plus court pour ne pas buter dans le pli. L'écart est prévu dès la maquette et l'imposition ; la plieuse ne peut pas le créer.</div>\n"
      },
      {
       "titre": "Régler un groupe de poches",
       "contenu": "\n<p>Deux réglages principaux conditionnent la qualité d'un pli à poche : la <strong>position de la butée</strong> et l'<strong>écartement des rouleaux</strong>.</p>\n<p>La butée se règle à la longueur du volet qui entre dans la poche, mesurée depuis le point de pinçage des rouleaux. Les échelles graduées des poches donnent une position approximative, que l'on affine en mesurant les volets sur les premières feuilles pliées.</p>\n<p>L'écartement des rouleaux se règle selon le <strong>nombre d'épaisseurs</strong> de papier qui passent entre eux. Avant le premier pli, une seule épaisseur passe ; après le premier pli, deux ; après le deuxième pli parallèle, trois dans le cas d'un pli roulé ou accordéon de trois volets, quatre dans le cas d'un portefeuille. On règle chaque paire de rouleaux avec des bandes de papier du travail (jauges), pliées pour représenter le bon nombre d'épaisseurs, en cherchant un léger frottement régulier sur toute la longueur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dépliant de 3 volets en pli accordéon, format ouvert 297 x 210 mm, format fermé 99 x 210 mm, papier couché 135 g/m². 1) Volets : 297 / 3 = 99 mm chacun (accordéon, volets égaux). 2) Poche 1 : butée à 99 mm, déflecteur ouvert. Poche 2 : butée à 99 mm (le volet suivant), déflecteur ouvert. Poches 3 et suivantes : fermées par déflecteur. 3) Écartement des rouleaux : entrée 1 épaisseur, après la poche 1 : 2 épaisseurs, après la poche 2 : 3 épaisseurs. 4) Avant de lancer, plier 5 feuilles, mesurer chaque volet au réglet (tolérance de la fiche, par exemple plus ou moins 0,5 mm), vérifier que les plis sont parallèles au bord et que les volets sont d'équerre. 5) Faire signer le BàF, puis lancer.</div>\n<p>Si les plis sont de travers, on vérifie d'abord le margeage contre l'équerre, puis le parallélisme des butées. Si le pli dérive en cours de production, on vérifie le glissement des rouleaux (rouleaux encrassés par la poudre ou l'encre, usure du revêtement) et la régularité de la pile.</p>\n"
      },
      {
       "titre": "Les plis croisés et les cahiers",
       "contenu": "\n<p>Pour un cahier, l'opérateur part d'un <strong>schéma de pliage</strong> qui indique l'ordre des plis, leur type (poche ou couteau), et l'orientation de la feuille au margeur. Le schéma est cohérent avec l'imposition : si l'on plie dans un ordre différent ou si l'on présente la feuille à l'envers, les pages ne se suivent plus. Le contrôle de pagination d'un cahier plié est donc un passage obligé du BàF : on vérifie la succession des folios (numéros de page) de la page 1 à la dernière.</p>\n<p>Les difficultés propres aux plis croisés sont :</p>\n<ul>\n<li>l'<strong>air emprisonné</strong>, qui fait gonfler et froisser le cahier au troisième ou quatrième pli : on le traite par des molettes de perforation placées avant chaque pli croisé ;</li>\n<li>les <strong>plis en tête</strong> fermés (le cahier est fermé en tête et au devant), qui seront ouverts par la rogne de tête et de devant ;</li>\n<li>le <strong>sens des fibres</strong>, qui ne peut être favorable qu'à certains plis : on le choisit parallèle au dernier pli, celui qui forme le dos ;</li>\n<li>les <strong>pattes d'oie</strong> : petits plis parasites en forme de triangle au croisement des plis, dus à l'air ou à un mauvais réglage du couteau.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les rouleaux et les couteaux sont des zones de happement. Toute intervention dans la zone de pliage (dégagement d'un bourrage, réglage d'une molette) se fait machine arrêtée, en utilisant le mode de marche par impulsion avec les carters prévus. Ne jamais tirer une feuille coincée entre des rouleaux en mouvement.</div>\n"
      },
      {
       "titre": "Le pliage en ligne sur rotative",
       "contenu": "\n<p>Les rotatives offset et les rotatives numériques à bobine plient le produit en ligne, à la suite de l'impression. Ce pliage repose sur d'autres principes :</p>\n<ul>\n<li>le <strong>pli d'étrave</strong> (ou pli de cône, pli triangle) : la bande de papier continue glisse sur une étrave triangulaire qui la plie en deux dans le sens de défilement ;</li>\n<li>la <strong>coupe transversale</strong> : un cylindre à lame sépare les produits ;</li>\n<li>le <strong>pli à mâchoires</strong> : une lame de cylindre pousse le produit dans les mâchoires d'un autre cylindre, qui forment un pli perpendiculaire au défilement ;</li>\n<li>parfois un ou deux <strong>plis à couteau</strong> supplémentaires (pli d'équerre) dans la plieuse de la rotative.</li>\n</ul>\n<p>Ces plieuses produisent à très grande vitesse des cahiers prêts à être assemblés, piqués ou collés. Le façonnier qui reçoit des cahiers de rotative doit vérifier les plis (régularité, absence de froissage), la coupe, et le sens des fibres, qui, sur une rotative, est toujours dans le sens de défilement de la bande.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur rotative, le pli d'étrave est forcément parallèle aux fibres, car la bande défile dans le sens machine. Le pli à mâchoires, perpendiculaire, est contre les fibres : c'est lui qui pose le plus de problèmes de cassure sur les papiers couchés épais.</div>\n"
      }
     ],
     "points_cles": [
      "Le pli à poche se forme par une boucle à l'entrée de la poche ; la butée fixe la position du pli.",
      "Le pli à couteau enfonce la feuille entre deux rouleaux ; il sert surtout aux plis croisés.",
      "La plieuse mixte associe poches et couteaux pour réaliser les cahiers de 16 et 32 pages.",
      "Nombre de pages d'un cahier croisé = 2 puissance (nombre de plis + 1).",
      "Dans les plis roulés et fenêtre, les volets intérieurs sont plus courts de 1 à 2 mm.",
      "L'écartement des rouleaux se règle au nombre d'épaisseurs de papier qui passent entre eux.",
      "Les molettes de perforation évacuent l'air des plis croisés et évitent les pattes d'oie.",
      "Le contrôle de la succession des folios est obligatoire sur le BàF d'un cahier.",
      "Sur rotative, le pli d'étrave est dans le sens des fibres, le pli à mâchoires contre les fibres."
     ],
     "lexique": [
      {
       "terme": "Poche",
       "def": "Couloir plat fermé par une butée réglable, dans lequel se forme un pli par boucle."
      },
      {
       "terme": "Couteau",
       "def": "Lame non coupante qui enfonce la feuille entre deux rouleaux pour former un pli."
      },
      {
       "terme": "Déflecteur",
       "def": "Pièce qui ferme l'entrée d'une poche pour la mettre hors service."
      },
      {
       "terme": "Équerre",
       "def": "Butée latérale de la table de marge contre laquelle la feuille est alignée."
      },
      {
       "terme": "Molette",
       "def": "Outil circulaire monté sur un arbre de la plieuse pour rainer, perforer ou couper."
      },
      {
       "terme": "Pli roulé",
       "def": "Pli parallèle où les volets s'enroulent les uns dans les autres."
      },
      {
       "terme": "Pli accordéon",
       "def": "Pli parallèle à plis alternés, formant un soufflet."
      },
      {
       "terme": "Pli croisé",
       "def": "Pli perpendiculaire au pli précédent."
      },
      {
       "terme": "Patte d'oie",
       "def": "Pli parasite en triangle au croisement de deux plis, dû à l'air ou à un mauvais réglage."
      },
      {
       "terme": "Pli d'étrave",
       "def": "Pli longitudinal formé sur rotative par passage de la bande sur une pièce triangulaire."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Assemblage, brochage, reliure, ennoblissement et routage",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bfpi-assemblage-piqure",
     "titre": "Assemblage, encartage et piqûre",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Distinguer assemblage par juxtaposition et assemblage par encartage, et les associer aux modes de reliure.",
      "Décrire le fonctionnement d'une encarteuse-piqueuse et de ses stations.",
      "Déterminer l'ordre des margeurs et la composition des cahiers d'un produit piqué à cheval.",
      "Régler et contrôler une tête de piqûre et un massicot trilame.",
      "Identifier les contrôles automatiques et manuels d'une ligne d'assemblage."
     ],
     "sections": [
      {
       "titre": "Juxtaposer ou encarter",
       "contenu": "\n<p>Un produit de plusieurs cahiers est d'abord <strong>assemblé</strong> : on réunit ses éléments dans le bon ordre. Deux logiques existent.</p>\n<ul>\n<li>L'<strong>assemblage par juxtaposition</strong> (ou assemblage en pile) : les cahiers sont posés les uns sur les autres, comme les feuilles d'un paquet. Le premier cahier contient les premières pages, le suivant les pages suivantes. C'est la logique du dos carré collé, du dos carré cousu et de la reliure.</li>\n<li>L'<strong>assemblage par encartage</strong> : les cahiers ouverts sont placés à cheval les uns dans les autres. Le cahier extérieur contient à la fois les premières et les dernières pages ; le cahier central contient les pages du milieu. C'est la logique de la piqûre à cheval.</li>\n</ul>\n<p>Le mot <strong>encartage</strong> désigne aussi l'insertion d'un document supplémentaire dans un produit : on parle d'<strong>encart broché</strong> quand il est fixé par la piqûre ou la colle, et d'<strong>encart jeté</strong> quand il est simplement glissé, libre, entre les pages ou sous le film.</p>\n<p>La <strong>piqûre</strong> fixe un produit par des agrafes de fil d'acier. La <strong>piqûre à cheval</strong> traverse le pli central : le produit s'ouvre bien à plat, mais la pagination est limitée et doit être un multiple de 4. La <strong>piqûre à plat</strong> (ou latérale) traverse le bloc près du dos, depuis la première de couverture : elle tient des épaisseurs plus grandes mais empêche le produit de s'ouvrir complètement. La <strong>piqûre à œillets</strong> forme des agrafes en boucle qui permettent de ranger le document dans un classeur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en piqûre à cheval, le nombre total de pages, couverture comprise, est toujours un multiple de 4, puisque chaque feuille pliée au centre porte 4 pages. Au-delà d'une certaine épaisseur, qui dépend du papier, la chasse et la tenue des agrafes deviennent problématiques : on passe alors au dos carré collé.</div>\n"
      },
      {
       "titre": "L'encarteuse-piqueuse",
       "contenu": "\n<p>L'<strong>encarteuse-piqueuse</strong> est une ligne qui assemble, pique et coupe en un seul passage. Elle comprend :</p>\n<ol>\n<li>des <strong>margeurs de cahiers</strong> disposés le long d'une chaîne : chacun prend un cahier, l'ouvre en son milieu et le dépose à cheval sur la chaîne ;</li>\n<li>un <strong>margeur de couverture</strong>, souvent équipé d'un poste de rainage, puisque la couverture est plus épaisse ;</li>\n<li>la <strong>chaîne d'encartage</strong> (ou chaîne à selle) qui transporte le produit en formation ;</li>\n<li>un <strong>contrôle d'épaisseur</strong> qui détecte un cahier manquant ou en double ;</li>\n<li>les <strong>têtes de piqûre</strong>, qui forment et posent les agrafes ;</li>\n<li>un <strong>trilame</strong> qui coupe les trois côtés ouverts ;</li>\n<li>une <strong>éjection</strong> des produits défectueux et un <strong>compteur-empileur</strong> en sortie.</li>\n</ol>\n<p>Pour que le margeur ouvre le cahier au bon endroit, le cahier comporte un <strong>talon</strong> (ou recouvrement) : un des deux côtés dépasse l'autre de quelques millimètres, grâce à un pli décalé. Le margeur saisit ce côté plus long pour séparer les deux moitiés, soit par des pinces, soit par des ventouses. Sans talon, ou avec un talon du mauvais côté, le cahier est mal ouvert et se pose de travers.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la présence et le côté du talon se décident à l'imposition. Un façonnier qui reçoit des cahiers sans talon doit utiliser des margeurs à ouverture par ventouses, plus lents et plus délicats à régler. C'est pourquoi la fiche de fabrication d'un travail piqué précise toujours « talon côté recto » ou « talon côté verso », avec sa valeur.</div>\n"
      },
      {
       "titre": "Ordre des margeurs et composition des cahiers",
       "contenu": "\n<p>Sur une encarteuse-piqueuse, le produit se construit de l'extérieur vers l'intérieur : le premier élément posé sur la chaîne est l'élément extérieur, les suivants viennent se placer à l'intérieur. La couverture est donc posée en premier, et le cahier central en dernier.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> magazine de 68 pages piqué à cheval, composé d'une couverture de 4 pages (C1 à C4) et de 64 pages intérieures en 4 cahiers de 16 pages. 1) Nombre de feuillets intérieurs : 64 / 4 = 16 feuilles pliées, réparties en 4 cahiers de 4 feuilles. 2) Composition des cahiers, de l'extérieur vers l'intérieur : cahier A, pages 1 à 8 et 57 à 64 ; cahier B, pages 9 à 16 et 49 à 56 ; cahier C, pages 17 à 24 et 41 à 48 ; cahier D (central), pages 25 à 40. 3) Vérification : chaque cahier totalise 16 pages, et dans chaque cahier, la première page et la dernière page ont une somme égale à 65 (pagination + 1) : 1 + 64, 9 + 56, 17 + 48, 25 + 40. 4) Ordre des margeurs sur la chaîne : margeur 1 couverture, margeur 2 cahier A, margeur 3 cahier B, margeur 4 cahier C, margeur 5 cahier D. 5) Margeurs disponibles en plus : ils restent vides ou servent à un encart broché.</div>\n<p>La règle de la somme constante est un outil de contrôle très efficace : dans un produit encarté de N pages, deux pages placées en vis-à-vis sur une même feuille ont toujours une somme égale à N + 1. Si ce n'est pas le cas, une feuille a été mal imposée ou un cahier est mal placé.</p>\n<p>On applique un raisonnement voisin au chemin de fer (représentation des pages dans l'ordre) pour savoir à quel cahier appartient chaque page, ce qui permet par exemple de placer une page à forte charge d'encre ou un encart sur le bon cahier.</p>\n"
      },
      {
       "titre": "La tête de piqûre",
       "contenu": "\n<p>À chaque cycle, la <strong>tête de piqûre</strong> réalise quatre opérations : elle entraîne une longueur de fil depuis la bobine, la coupe, la plie en forme de U (formation de l'agrafe), puis l'enfonce à travers le produit posé sur la selle. Sous la selle, un <strong>dispositif de fermeture</strong> (le contre-piqueur, ou fermoir) replie les deux jambes de l'agrafe à plat à l'intérieur du pli central.</p>\n<p>Les réglages principaux sont :</p>\n<ul>\n<li>la <strong>longueur de fil</strong>, adaptée à l'épaisseur du produit : des jambes trop courtes ne se referment pas, des jambes trop longues se chevauchent ou ressortent ;</li>\n<li>la <strong>position des têtes</strong> le long du dos : symétriques, à la distance de la tête et du pied fixée par la fiche ; deux agrafes pour les formats courants, davantage pour les grands formats ;</li>\n<li>la <strong>hauteur de la tête</strong> et du fermoir, qui conditionnent la force et la planéité de la fermeture ;</li>\n<li>le <strong>centrage</strong> de l'agrafe sur le pli : une agrafe décentrée traverse une seule moitié du pli central.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un changement de lot de fil ou de diamètre de fil modifie la formation de l'agrafe. Après tout changement de bobine, contrôler les premières agrafes : jambes repliées à plat, absence de pointe sortante. Une pointe saillante peut blesser le lecteur et constitue un défaut grave.</div>\n"
      },
      {
       "titre": "Le trilame et la coupe en ligne",
       "contenu": "\n<p>Le produit piqué sort fermé sur trois côtés par les plis. Le <strong>trilame</strong> (massicot trois lames) rogne d'abord le <strong>devant</strong> avec un couteau frontal, puis la <strong>tête</strong> et le <strong>pied</strong> avec deux couteaux latéraux. Sur les lignes à double production (deux produits imprimés tête-bêche sur le même cahier), un couteau supplémentaire réalise une <strong>coupe de séparation</strong> au milieu.</p>\n<p>Les produits sont coupés en <strong>pile</strong> de quelques exemplaires ou à l'unité selon les machines. Comme au massicot, on surveille l'état des lames, des réglettes (contre-lames), la pression du presseur et le format obtenu. La particularité du trilame en piqûre est la <strong>chasse</strong> : la rogne de devant doit être assez large pour que les pages centrales, qui dépassent, soient coupées sans que les pages extérieures soient trop rognées.</p>\n<p>On rencontre aussi des lignes plus simples : une <strong>assembleuse verticale à tours</strong> (des cases superposées contenant chacune une pile de feuilles) prend une feuille dans chaque case, les réunit, puis un module en ligne pique à cheval, plie et rogne le devant (<strong>massicot de chasse</strong>). Ces lignes, appelées souvent « bookletmakers », servent aux petites séries, notamment en impression numérique, où les feuilles arrivent déjà dans l'ordre.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôle de format d'un produit piqué. 1) Prélever un exemplaire en début de série et toutes les N piles selon la fiche. 2) Mesurer hauteur et largeur au réglet ou au pied à coulisse, en plusieurs points. 3) Vérifier l'équerrage avec une équerre de contrôle. 4) Ouvrir le produit au centre et vérifier la marge de devant des pages centrales (effet de la chasse) et la position des agrafes. 5) Noter les valeurs sur la fiche de suivi. Un écart progressif du format au fil des contrôles indique une usure de lame ou un desserrage, à corriger avant de sortir de la tolérance.</div>\n"
      },
      {
       "titre": "Les contrôles de la ligne d'assemblage",
       "contenu": "\n<p>Les lignes modernes intègrent des <strong>contrôles automatiques</strong> :</p>\n<table>\n<thead><tr><th>Contrôle</th><th>Principe</th><th>Défaut détecté</th></tr></thead>\n<tbody>\n<tr><td>Contrôle d'épaisseur (calibre)</td><td>Palpeur mécanique ou capteur qui mesure l'épaisseur au passage</td><td>Cahier manquant, double cahier</td></tr>\n<tr><td>Contrôle de présence au margeur</td><td>Cellule qui vérifie qu'un cahier a été pris</td><td>Margeur vide, prise manquée</td></tr>\n<tr><td>Lecture de code imprimé</td><td>Caméra qui lit un code ou une image sur chaque cahier</td><td>Cahier d'un autre travail ou d'une autre version</td></tr>\n<tr><td>Contrôle d'agrafe</td><td>Détection de la présence du fil ou du bon cycle de la tête</td><td>Agrafe manquante</td></tr>\n</tbody>\n</table>\n<p>Les produits défectueux sont <strong>éjectés</strong> automatiquement avant l'empileur. L'opérateur doit vérifier régulièrement que ces systèmes fonctionnent, par exemple en retirant volontairement un cahier pour voir si l'éjection se déclenche : un contrôle qui ne fonctionne plus donne une fausse sécurité.</p>\n<p>Les <strong>contrôles manuels</strong> restent indispensables : collationnement (ordre des cahiers, folios), sens des cahiers (aucun cahier retourné), qualité des agrafes, propreté (absence de traces de chaîne ou de doigts), format. Ils se font sur des <strong>prélèvements</strong> à fréquence définie et sont consignés sur la fiche de suivi.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les versions multiples sont un risque majeur. Quand un même magazine existe en plusieurs éditions régionales qui ne diffèrent que par un cahier, les cahiers se ressemblent : la lecture de code et la séparation physique des palettes au poste de marge évitent les mélanges.</div>\n"
      }
     ],
     "points_cles": [
      "La juxtaposition sert au dos carré et à la reliure ; l'encartage sert à la piqûre à cheval.",
      "Un produit piqué à cheval compte un nombre de pages multiple de 4.",
      "Le talon permet au margeur d'ouvrir le cahier ; sa présence et son côté se décident à l'imposition.",
      "Sur l'encarteuse, le produit se construit de l'extérieur vers l'intérieur : couverture d'abord, cahier central en dernier.",
      "Dans un produit encarté de N pages, deux pages en vis-à-vis sur une feuille ont une somme égale à N + 1.",
      "La tête de piqûre entraîne, coupe, forme et pose l'agrafe ; le fermoir replie les jambes.",
      "Le trilame rogne le devant puis la tête et le pied ; la rogne de devant absorbe la chasse.",
      "Les contrôles automatiques (épaisseur, présence, code) doivent eux-mêmes être vérifiés régulièrement."
     ],
     "lexique": [
      {
       "terme": "Assemblage",
       "def": "Réunion des éléments d'un produit (cahiers, couverture, encarts) dans le bon ordre."
      },
      {
       "terme": "Encartage",
       "def": "Placement de cahiers les uns dans les autres, ou insertion d'un document supplémentaire dans un produit."
      },
      {
       "terme": "Encart jeté",
       "def": "Document glissé librement dans un produit, sans être fixé."
      },
      {
       "terme": "Piqûre à cheval",
       "def": "Fixation par agrafes traversant le pli central d'un produit encarté."
      },
      {
       "terme": "Piqûre à plat",
       "def": "Fixation par agrafes traversant tout le bloc près du dos."
      },
      {
       "terme": "Talon",
       "def": "Débord d'un côté du cahier sur l'autre, qui permet au margeur de l'ouvrir."
      },
      {
       "terme": "Tête de piqûre",
       "def": "Organe qui forme une agrafe à partir du fil d'acier et l'enfonce dans le produit."
      },
      {
       "terme": "Trilame",
       "def": "Massicot à trois lames qui rogne la tête, le pied et le devant d'un produit."
      },
      {
       "terme": "Contrôle d'épaisseur",
       "def": "Dispositif qui mesure chaque produit pour détecter un cahier manquant ou en double."
      },
      {
       "terme": "Folio",
       "def": "Numéro imprimé d'une page."
      }
     ]
    },
    {
     "id": "bfpi-dos-carre-colle",
     "titre": "Le brochage en dos carré collé et cousu",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Décrire les stations d'une chaîne de brochage en dos carré collé, de l'assemblage au trilame.",
      "Expliquer le rôle du fraisage, du grecquage, de l'encollage du dos et du collage latéral.",
      "Calculer la position des rainures d'une couverture à partir de l'épaisseur du bloc.",
      "Comparer dos carré collé, dos carré cousu collé et collage PUR selon la tenue et l'usage.",
      "Analyser les causes d'un défaut de tenue de la reliure et proposer des actions correctives."
     ],
     "sections": [
      {
       "titre": "Le dos carré collé : principe et usages",
       "contenu": "\n<p>Le <strong>dos carré collé</strong> (DCC) est la reliure souple la plus répandue pour les livres de poche, les catalogues, les magazines épais et les rapports annuels. Les cahiers sont <strong>juxtaposés</strong> (assemblés en pile), le dos du bloc est <strong>fraisé</strong> pour que chaque feuillet soit libre, puis il est <strong>encollé</strong> et recouvert d'une <strong>couverture</strong> souple, généralement en carte de 200 à 300 g/m², rainée pour former le dos et les charnières. Le produit est enfin rogné sur trois côtés.</p>\n<p>Le DCC tient des paginations bien supérieures à la piqûre à cheval et offre un dos plat sur lequel on peut imprimer le titre. En revanche, chaque feuillet n'est tenu que par une mince bande de colle : la qualité du collage conditionne toute la durée de vie du produit. Les variantes sont :</p>\n<ul>\n<li>le <strong>dos carré collé PUR</strong>, avec une colle polyuréthane réactive : plus résistant, film plus fin, meilleure ouverture ;</li>\n<li>le <strong>dos carré cousu collé</strong> : les cahiers sont d'abord cousus au fil textile, le dos n'est pas fraisé (ou très peu), puis la couverture est collée. Chaque feuillet est tenu par le fil, ce qui donne la meilleure tenue ;</li>\n<li>le <strong>collage par fil thermocollant</strong> : les cahiers sont maintenus par des points de fil dès la plieuse, puis collés sans fraisage profond.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en dos carré, les cahiers sont juxtaposés et non encartés. L'imposition doit donc prévoir des cahiers dont les pages se suivent (pages 1 à 16, puis 17 à 32...) et un blanc de fraisage au petit fond, sauf en cousu.</div>\n"
      },
      {
       "titre": "La chaîne de brochage, station par station",
       "contenu": "\n<p>Une chaîne de brochage associe une <strong>assembleuse</strong> et une <strong>brocheuse</strong>, suivies d'une section de refroidissement et d'un trilame.</p>\n<table>\n<thead><tr><th>Station</th><th>Rôle</th><th>Points de réglage</th></tr></thead>\n<tbody>\n<tr><td>Margeurs de l'assembleuse</td><td>Déposer chaque cahier, dans l'ordre, sur la chaîne de transport</td><td>Ordre des cahiers, contrôle de présence et d'épaisseur</td></tr>\n<tr><td>Transfert et étaux</td><td>Saisir le bloc dans un étau (ou pince) qui le transporte dos en bas</td><td>Ouverture des étaux selon l'épaisseur du bloc, hauteur de bloc</td></tr>\n<tr><td>Fraisage</td><td>Araser le dos pour libérer chaque feuillet</td><td>Profondeur (souvent 2 à 3 mm), état de la fraise, aspiration des poussières</td></tr>\n<tr><td>Grecquage</td><td>Entailler le dos de petites encoches pour augmenter la surface collée</td><td>Profondeur et pas des encoches</td></tr>\n<tr><td>Encollage du dos</td><td>Déposer un film de colle régulier</td><td>Température, épaisseur de film, rouleau de lissage</td></tr>\n<tr><td>Collage latéral</td><td>Déposer une fine bande de colle sur les côtés du bloc, près du dos</td><td>Largeur de bande (quelques millimètres), position</td></tr>\n<tr><td>Margeur de couverture et rainage</td><td>Amener la couverture et la rainer aux bonnes cotes</td><td>Position des rainures selon l'épaisseur du dos</td></tr>\n<tr><td>Mise en couverture et serrage</td><td>Plaquer la couverture contre le dos puis serrer les côtés</td><td>Pression et durée du serrage</td></tr>\n<tr><td>Refroidissement</td><td>Laisser la colle prendre avant la coupe</td><td>Longueur du convoyeur, temps</td></tr>\n<tr><td>Trilame</td><td>Rogner tête, pied et devant</td><td>Format, état des lames</td></tr>\n</tbody>\n</table>\n<p>Pour certains papiers difficiles, on pratique le <strong>collage en deux temps</strong> : une première colle en dispersion, très pénétrante, est appliquée au dos, puis un hotmelt assure la prise rapide et la fixation de la couverture. Dans les installations PUR, la colle est souvent appliquée par une <strong>buse</strong> dans un système fermé, ce qui limite son contact avec l'humidité de l'air.</p>\n"
      },
      {
       "titre": "Fraisage, grecquage et pénétration de la colle",
       "contenu": "\n<p>Le <strong>fraisage</strong> doit être assez profond pour couper tous les plis de dos, y compris ceux des plis croisés intérieurs du cahier, sinon certains feuillets restent pliés par paires et ne sont collés que sur un bord. Mais un fraisage trop profond enlève de la marge utile et rapproche le texte de la reliure. La valeur est fixée sur la fiche de fabrication et prévue dans l'imposition.</p>\n<p>Une fraise usée <strong>arrache</strong> les fibres au lieu de les couper net, laisse des feuillets mal séparés et produit beaucoup de poussière. Cette poussière, si l'aspiration fonctionne mal, se dépose sur le dos et empêche la colle d'adhérer. L'état de la fraise et l'aspiration se contrôlent à chaque prise de poste.</p>\n<p>Le <strong>grecquage</strong> crée des encoches de faible profondeur à intervalles réguliers. La colle y pénètre et forme de petites chevilles qui ancrent mieux chaque feuillet. Il est particulièrement utile sur les papiers couchés, dont la couche fermée limite l'absorption de la colle. Certaines brocheuses réalisent aussi un <strong>brossage</strong> du dos pour ouvrir les fibres et dégager la poussière.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant chaque BàF, le conducteur ouvre un exemplaire fraîchement collé au centre et en plusieurs endroits, puis tire doucement sur une page : elle doit résister et, si elle cède, arracher des fibres de papier plutôt que se décoller proprement de la colle. Un décollement propre, sans fibres, signale un défaut d'adhérence.</div>\n"
      },
      {
       "titre": "La couverture et ses rainures",
       "contenu": "\n<p>La couverture d'un DCC est rainée à quatre endroits : deux <strong>rainures de dos</strong>, qui délimitent le dos et doivent coïncider avec les arêtes du bloc, et deux <strong>rainures de charnière</strong>, placées à quelques millimètres du dos sur chaque plat. Les rainures de charnière permettent d'ouvrir la couverture sans tirer sur le premier et le dernier feuillet ; c'est là que s'arrête le collage latéral.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul des cotes de rainage. Brochure au format fini 150 x 200 mm, épaisseur du bloc 4,0 mm, rogne de devant 3 mm, rainures de charnière à 7 mm du dos (valeur de l'atelier). Les cotes sont mesurées depuis le bord gauche de la couverture à plat, qui correspond au devant de la quatrième de couverture avant rogne. 1) Largeur d'un plat avant rogne : 150 + 3 = 153 mm. 2) Première rainure de dos : 153 mm. 3) Seconde rainure de dos : 153 + 4 = 157 mm. 4) Rainures de charnière : 153 - 7 = 146 mm et 157 + 7 = 164 mm. 5) Largeur totale de la couverture à plat : 153 + 4 + 153 = 310 mm. On vérifie ensuite sur une maquette en blanc que le dos ne baille pas (rainures trop écartées) et que la couverture ne tire pas (rainures trop serrées).</div>\n<p>Le <strong>sens des fibres</strong> de la couverture doit être parallèle au dos, comme celui du bloc. Une couverture pelliculée ou vernie demande une attention particulière : le film ou le vernis peut gêner l'adhérence de la colle au dos, ce qui impose de laisser une <strong>réserve</strong> sans vernis ni pelliculage sur le dos et les charnières, ou d'utiliser une colle adaptée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'épaisseur du bloc dépend du papier réellement livré. Un changement de papier en cours de production (autre lot, autre main) modifie le dos de quelques dixièmes de millimètre, assez pour que les rainures ne tombent plus sur les arêtes. Il faut alors refaire le réglage du rainage, et parfois réimprimer les couvertures si le titre de dos ne tombe plus au centre.</div>\n"
      },
      {
       "titre": "Le dos carré cousu",
       "contenu": "\n<p>Dans le <strong>dos carré cousu</strong>, chaque cahier est cousu dans son pli central à l'aide d'une <strong>couseuse</strong>. La machine ouvre le cahier sur une selle, perce le pli avec des <strong>alênes</strong> (poinçons), fait passer le fil avec des <strong>aiguilles</strong> et forme les points à l'intérieur du cahier avec des <strong>crochets</strong>. Le fil relie aussi chaque cahier au précédent, de sorte que le bloc forme un tout avant même le collage.</p>\n<p>Les réglages portent sur le nombre et la position des points de couture (fonction de la hauteur du bloc), la tension du fil, le choix du fil (grosseur et matière selon le papier et l'épaisseur des cahiers) et la synchronisation des aiguilles et des crochets. Les cahiers cousus sont ensuite encollés au dos, sans fraisage, et reçoivent leur couverture comme en DCC, ou passent en reliure cartonnée.</p>\n<table>\n<thead><tr><th>Critère</th><th>DCC hotmelt EVA</th><th>DCC PUR</th><th>Dos carré cousu collé</th></tr></thead>\n<tbody>\n<tr><td>Tenue des pages</td><td>Correcte</td><td>Très bonne</td><td>Excellente</td></tr>\n<tr><td>Ouverture à plat</td><td>Médiocre</td><td>Bonne</td><td>Très bonne</td></tr>\n<tr><td>Vitesse de production</td><td>Élevée</td><td>Élevée, mais délai avant usage complet</td><td>Plus faible (couture)</td></tr>\n<tr><td>Coût</td><td>Faible</td><td>Moyen</td><td>Plus élevé</td></tr>\n<tr><td>Usages typiques</td><td>Catalogues, magazines, livres de poche</td><td>Livres sur couché, guides, livres pratiques</td><td>Livres de valeur, ouvrages scolaires, beaux livres</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Défauts de tenue : analyser les causes",
       "contenu": "\n<p>Quand des pages se détachent, on recherche méthodiquement les causes en passant en revue les grandes familles de causes : <strong>matière</strong>, <strong>machine</strong>, <strong>méthode</strong>, <strong>main-d'œuvre</strong> et <strong>milieu</strong> (méthode des 5 M, ou diagramme d'Ishikawa).</p>\n<table>\n<thead><tr><th>Famille</th><th>Causes possibles</th></tr></thead>\n<tbody>\n<tr><td>Matière</td><td>Sens des fibres perpendiculaire au dos ; papier couché très fermé ; encre ou vernis sur la zone de collage ; poudre anti-maculage ; colle inadaptée au papier ou périmée</td></tr>\n<tr><td>Machine</td><td>Fraise usée ou fraisage trop faible ; aspiration insuffisante ; température de colle hors plage ; film de colle trop mince ; serrage insuffisant</td></tr>\n<tr><td>Méthode</td><td>Vitesse trop élevée par rapport au temps ouvert ; coupe au trilame avant prise suffisante ; manipulation trop précoce des produits PUR</td></tr>\n<tr><td>Main-d'œuvre</td><td>Réglage non vérifié après changement de lot ; contrôle d'arrachement non réalisé</td></tr>\n<tr><td>Milieu</td><td>Atelier ou papier trop froid ; humidité excessive ou insuffisante ; stockage des produits finis au chaud</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conduite à tenir face à 40 % de brochures dont des pages se détachent. 1) Isoler la production concernée et prélever des exemplaires défectueux et conformes. 2) Observer le dos : feuillets restés pliés par paires (fraisage insuffisant), décollement sans fibres (adhérence), colle cassante (température ou colle inadaptée). 3) Vérifier le sens des fibres du bloc par un test de flexion. 4) Relever les paramètres machine (température, profondeur de fraisage, vitesse) et les comparer à la fiche. 5) Modifier un paramètre à la fois et réaliser un essai d'arrachement. 6) Consigner les causes et les actions sur une fiche de non-conformité.</div>\n<p>La <strong>tenue des pages</strong> se mesure par un <strong>essai d'arrachement</strong> (en anglais <em>pull test</em>) : un appareil saisit une page et la tire jusqu'à rupture ; la force rapportée à la hauteur de la page s'exprime en newtons par centimètre (N/cm). Le seuil minimal est fixé par le client ou par les recommandations de la profession. On complète par un <strong>essai de flexion</strong> (ouverture et fermeture répétées) qui simule l'usage. Pour les colles PUR, l'essai définitif se fait après la durée de polymérisation indiquée par le fabricant.</p>\n"
      }
     ],
     "points_cles": [
      "En dos carré collé, les cahiers sont juxtaposés, fraisés au dos, encollés et recouverts d'une couverture rainée.",
      "Le fraisage doit couper tous les plis de dos ; une fraise usée arrache les fibres et produit de la poussière.",
      "Le grecquage crée des encoches qui ancrent la colle, utile sur papiers couchés.",
      "Le collage latéral fixe la couverture sur les côtés du bloc jusqu'aux rainures de charnière.",
      "Les rainures de dos sont écartées de l'épaisseur du bloc ; les rainures de charnière sont à quelques millimètres du dos.",
      "Le PUR offre une meilleure tenue et une meilleure ouverture, mais impose un délai de polymérisation.",
      "Le dos carré cousu donne la meilleure tenue : chaque cahier est cousu dans son pli.",
      "Les causes d'un défaut de tenue s'analysent avec les 5 M.",
      "La tenue se mesure par un essai d'arrachement en N/cm, complété par un essai de flexion."
     ],
     "lexique": [
      {
       "terme": "Dos carré collé",
       "def": "Reliure souple où les cahiers juxtaposés sont fraisés et collés au dos d'une couverture."
      },
      {
       "terme": "Fraisage",
       "def": "Arasement du dos du bloc pour séparer tous les feuillets avant collage."
      },
      {
       "terme": "Grecquage",
       "def": "Entailles régulières pratiquées dans le dos pour améliorer l'ancrage de la colle."
      },
      {
       "terme": "Collage latéral",
       "def": "Bande de colle déposée sur les côtés du bloc près du dos pour fixer la couverture."
      },
      {
       "terme": "Rainure de charnière",
       "def": "Rainure de couverture placée à quelques millimètres du dos pour faciliter l'ouverture."
      },
      {
       "terme": "Étau",
       "def": "Pince de la brocheuse qui transporte le bloc dos en bas à travers les stations."
      },
      {
       "terme": "Couseuse",
       "def": "Machine qui coud chaque cahier dans son pli et le relie aux autres par le fil."
      },
      {
       "terme": "Alêne",
       "def": "Poinçon qui perce le pli du cahier avant le passage de l'aiguille."
      },
      {
       "terme": "Essai d'arrachement",
       "def": "Mesure de la force nécessaire pour arracher une page d'un produit relié, en N/cm."
      },
      {
       "terme": "5 M",
       "def": "Méthode d'analyse des causes : matière, machine, méthode, main-d'œuvre, milieu."
      }
     ]
    },
    {
     "id": "bfpi-reliure",
     "titre": "La reliure industrielle et la reliure métallique",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Nommer les parties d'un livre relié et les éléments qui le composent.",
      "Décrire les étapes de la reliure industrielle : préparation du bloc, fabrication de la couverture, emboîtage.",
      "Calculer les dimensions des cartons et de la couvrure d'une couverture cartonnée.",
      "Décrire les reliures métalliques et plastiques, leurs pas et leurs usages.",
      "Identifier les contrôles spécifiques d'un livre relié."
     ],
     "sections": [
      {
       "titre": "Anatomie d'un livre relié",
       "contenu": "\n<p>La <strong>reliure</strong> (ou reliure cartonnée, couverture rigide) associe un <strong>bloc</strong> de pages, le plus souvent cousu, et une <strong>couverture rigide</strong> fabriquée séparément, appelée <strong>caisse</strong> dans l'industrie. Les deux sont réunis par l'<strong>emboîtage</strong>. Ce vocabulaire est indispensable pour lire une fiche de fabrication de livre relié.</p>\n<table>\n<thead><tr><th>Partie</th><th>Définition</th></tr></thead>\n<tbody>\n<tr><td>Plats</td><td>Les deux faces rigides de la couverture (premier plat et second plat)</td></tr>\n<tr><td>Dos</td><td>Partie de la couverture qui recouvre le dos du bloc ; carré (plat) ou rond (arrondi)</td></tr>\n<tr><td>Mors</td><td>Articulation entre le dos et chaque plat, marquée par une gorge</td></tr>\n<tr><td>Coiffes</td><td>Parties de la couverture au-dessus et au-dessous du dos (en tête et en pied)</td></tr>\n<tr><td>Débords (chasses)</td><td>Partie de la couverture qui dépasse du bloc en tête, en pied et au devant, généralement de 2 à 3 mm</td></tr>\n<tr><td>Gardes</td><td>Feuillets doubles qui unissent le bloc à la couverture ; la contre-garde est collée sur le plat</td></tr>\n<tr><td>Tranchefiles</td><td>Bourrelets textiles collés en tête et en pied du dos du bloc</td></tr>\n<tr><td>Signet</td><td>Ruban marque-page fixé en tête du dos</td></tr>\n<tr><td>Mousseline (tarlatane)</td><td>Toile légère collée sur le dos du bloc et débordant sur les gardes, qui renforce la liaison</td></tr>\n<tr><td>Jaquette</td><td>Feuille imprimée amovible qui entoure la couverture</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en reliure, on appelle traditionnellement « chasses » les débords de la couverture sur le bloc. Ce mot désigne autre chose en piqûre à cheval (le débordement des pages centrales). Pour éviter les confusions, ce cours parle de <strong>débords</strong> en reliure ; sur une fiche, le contexte indique toujours le sens.</div>\n"
      },
      {
       "titre": "Préparer le bloc",
       "contenu": "\n<p>Le bloc d'un livre relié suit une suite d'opérations dont l'ordre peut varier selon les lignes, mais dont la logique est constante :</p>\n<ol>\n<li><strong>Pose des gardes</strong> : une garde est collée sur le premier et sur le dernier cahier par un mince filet de colle le long du pli (quelques millimètres).</li>\n<li><strong>Assemblage et couture</strong> des cahiers (ou collage PUR pour certains livres économiques).</li>\n<li><strong>Encollage du dos</strong> et séchage, pour stabiliser le bloc.</li>\n<li><strong>Rognage</strong> du bloc sur trois côtés au trilame.</li>\n<li><strong>Arrondissure</strong> (si le dos est rond) : des rouleaux ou des plaques donnent au dos une forme arrondie et au devant une forme creuse ; l'arrondi répartit l'épaisseur des fils et évite que le dos se creuse avec le temps.</li>\n<li><strong>Endossure</strong> : le dos est écrasé latéralement pour former de part et d'autre un petit épaulement, le <strong>mors du bloc</strong>, dans lequel viendra s'appuyer le carton.</li>\n<li><strong>Garnissage du dos</strong> : pose de la mousseline, d'un papier de dos (kraft), des tranchefiles et éventuellement du signet.</li>\n</ol>\n<p>Sur les lignes industrielles, ces opérations sont enchaînées dans une <strong>ligne de reliure</strong>, le bloc passant d'une station à l'autre par des pinces de reprise. Les mêmes contrôles que pour le dos carré s'appliquent à l'assemblage (collationnement, ordre des cahiers), avec en plus le contrôle de la couture : chaque cahier doit être cousu, sans point sauté.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le choix entre dos carré et dos rond est une décision du client (souvent l'éditeur). Le dos carré donne un aspect moderne et permet un titre de dos bien lisible ; le dos rond, plus traditionnel, est apprécié pour les livres épais et ceux qui doivent durer.</div>\n"
      },
      {
       "titre": "Fabriquer la couverture rigide",
       "contenu": "\n<p>La couverture rigide est produite sur une <strong>machine à caisses</strong>. Elle assemble :</p>\n<ul>\n<li>deux <strong>cartons</strong> de plats, en carton gris compact, d'une épaisseur de l'ordre de 2 à 3 mm, coupés avec les fibres parallèles au dos ;</li>\n<li>une <strong>carte de dos</strong>, bande de carton plus mince (ou de papier fort pour un dos rond) ;</li>\n<li>une <strong>couvrure</strong> : papier imprimé et pelliculé, toile ou matière synthétique, encollée sur son envers.</li>\n</ul>\n<p>La machine encolle la couvrure, y positionne les cartons et la carte de dos en laissant entre eux une <strong>gorge</strong> qui formera les mors, puis replie les <strong>remplis</strong> (bords de la couvrure, souvent 15 mm environ) sur l'envers des cartons, avec un pliage particulier des coins.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dimensions de couverture pour un livre à dos carré. Bloc rogné 150 x 200 mm, épaisseur 20 mm ; carton de 2,5 mm ; débords 3 mm ; retrait du carton au mors 3 mm, gorge 7 mm et remplis 15 mm (valeurs de l'atelier). 1) Hauteur des cartons : 200 + 2 x 3 = 206 mm. 2) Largeur des cartons : 150 + 3 (débord de devant) - 3 (retrait au mors) = 150 mm. 3) Largeur de la carte de dos : épaisseur du bloc + 2 épaisseurs de carton = 20 + 2 x 2,5 = 25 mm. 4) Largeur de la couvrure : 2 x 150 (cartons) + 25 (dos) + 2 x 7 (gorges) + 2 x 15 (remplis) = 369 mm. 5) Hauteur de la couvrure : 206 + 2 x 15 = 236 mm. Ces valeurs sont confirmées par une maquette avant la commande de la couvrure imprimée.</div>\n<p>Les formules précises (retrait, gorge, largeur de dos) varient selon les machines, l'épaisseur des cartons et le type de dos. Chaque atelier possède ses tableaux de calcul, que l'opérateur doit savoir appliquer et vérifier.</p>\n"
      },
      {
       "titre": "L'emboîtage et la finition",
       "contenu": "\n<p>L'<strong>emboîtage</strong> réunit le bloc et la couverture. Sur une emboîteuse, le bloc est placé à cheval sur une <strong>selle</strong> ; des rouleaux encollent les deux gardes ; la couverture est descendue et centrée sur le bloc, puis plaquée sur les gardes. La contre-garde se colle ainsi sur l'intérieur de chaque plat, et la mousseline, prise entre la garde et le carton, renforce la liaison.</p>\n<p>Le livre passe ensuite à la <strong>presse à mors</strong> : des barres chauffées marquent la gorge des mors, puis le livre est pressé à plat pendant le temps nécessaire au séchage de la colle des gardes (colle à base d'eau le plus souvent). Un pressage insuffisant laisse des gardes gondolées ou des plats voilés ; un pressage trop long ou trop chaud marque la couvrure.</p>\n<p>Viennent enfin la pose de la <strong>jaquette</strong> (si elle est prévue), parfois la mise sous film individuelle, puis la mise en cartons. Les livres reliés sont sensibles aux chocs sur les coins et sur les coiffes ; on les conditionne dos alternés ou avec des intercalaires.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les gardes collées à la colle à eau font travailler le carton. Le sens des fibres des cartons, des gardes et de la couvrure doit être parallèle au dos ; sinon, les plats se voilent en séchant. C'est le défaut le plus fréquent et le plus difficile à rattraper en reliure.</div>\n"
      },
      {
       "titre": "Reliures métalliques et plastiques",
       "contenu": "\n<p>Les <strong>reliures mécaniques</strong> maintiennent des feuilles séparées perforées le long d'un bord. Elles conviennent aux documents qui doivent s'ouvrir complètement à plat ou se plier à 360° : calendriers, carnets, manuels techniques, livres de recettes, rapports.</p>\n<table>\n<thead><tr><th>Type</th><th>Description</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Reliure à double boucle métallique (souvent appelée Wire-O)</td><td>Fil métallique formé en boucles doubles, refermées par pressage après insertion</td><td>Calendriers, carnets, présentations</td></tr>\n<tr><td>Spirale (métal ou plastique)</td><td>Hélice continue vissée dans les trous</td><td>Cahiers, manuels</td></tr>\n<tr><td>Reliure à peigne plastique</td><td>Peigne à anneaux ouverts puis refermés</td><td>Documents de bureau, petites séries</td></tr>\n</tbody>\n</table>\n<p>Le <strong>pas</strong> est la distance entre deux trous successifs. Il est souvent exprimé en nombre de boucles par pouce (25,4 mm) : un pas <strong>3:1</strong> (trois boucles par pouce, soit environ 8,5 mm entre trous) convient aux faibles épaisseurs, un pas <strong>2:1</strong> (deux boucles par pouce, soit 12,7 mm) aux plus fortes. Le diamètre de la boucle se choisit selon l'épaisseur du bloc, en laissant du jeu pour que les pages tournent librement.</p>\n<p>La ligne de reliure métallique comprend une <strong>perforatrice</strong> (trous ronds ou carrés selon le système), un poste d'<strong>insertion</strong> du fil formé, et une <strong>presse de fermeture</strong> qui referme les boucles au bon diamètre. Pour un calendrier, on ajoute souvent une <strong>encoche</strong> au centre du bord relié et un crochet de suspension.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la distance entre les trous et le bord (marge de perforation) doit être compatible avec la mise en page : un texte trop proche du bord est percé. Elle est vérifiée sur le BàT, avant la perforation de la série, car une feuille percée ne se récupère pas.</div>\n"
      },
      {
       "titre": "Contrôler un livre relié",
       "contenu": "\n<p>Le contrôle d'un livre relié porte sur plusieurs points, à vérifier au BàF puis sur les prélèvements :</p>\n<ul>\n<li><strong>Bloc</strong> : collationnement, couture complète, folios dans l'ordre, rognes régulières ;</li>\n<li><strong>Couverture</strong> : dimensions, centrage de l'impression, remplis bien tendus, coins nets, absence de bulles sous la couvrure ;</li>\n<li><strong>Emboîtage</strong> : débords égaux en tête et en pied, bloc centré, mors bien marqués, gardes collées sans plis ni bulles ;</li>\n<li><strong>Planéité</strong> : plats non voilés après séchage complet ;</li>\n<li><strong>Ouverture</strong> : le livre s'ouvre sans craquement, le dos se forme normalement ;</li>\n<li><strong>Éléments</strong> : tranchefiles, signet présents et bien positionnés, jaquette ajustée.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôle des débords. 1) Poser le livre fermé à plat. 2) Mesurer au réglet le débord en tête et en pied, au devant, sur le premier plat puis sur le second. 3) Comparer à la valeur de la fiche (par exemple 3 mm avec une tolérance de plus ou moins 0,5 mm). 4) Un débord plus grand en tête qu'en pied signale un bloc mal centré à l'emboîtage ; un débord de devant inégal entre les plats signale un décalage latéral de la couverture. 5) Corriger le centrage de l'emboîteuse avant de poursuivre.</div>\n<p>Le livre relié est un produit cher, réalisé souvent pour des clients exigeants (éditeurs d'art, institutions). Un défaut systématique découvert après emboîtage oblige parfois à démonter les livres, opération longue et rarement parfaite. C'est pourquoi les contrôles se concentrent en amont : couture, rognage, maquette de couverture.</p>\n"
      }
     ],
     "points_cles": [
      "Un livre relié associe un bloc souvent cousu et une couverture rigide (caisse) réunis par l'emboîtage.",
      "Plats, dos, mors, coiffes, débords, gardes, tranchefiles et mousseline forment le vocabulaire de base.",
      "Arrondissure et endossure donnent au dos sa forme et créent le mors du bloc.",
      "La machine à caisses assemble cartons, carte de dos et couvrure, puis replie les remplis.",
      "Les dimensions de la couverture se calculent à partir du bloc, des débords, des cartons, des gorges et des remplis.",
      "La presse à mors marque les mors et maintient le livre le temps du séchage des gardes.",
      "Les fibres des cartons, des gardes et de la couvrure doivent être parallèles au dos pour éviter le voilage.",
      "Les reliures mécaniques se caractérisent par leur pas (3:1 ou 2:1) et le diamètre de leurs boucles."
     ],
     "lexique": [
      {
       "terme": "Caisse",
       "def": "Couverture rigide d'un livre relié, fabriquée séparément du bloc."
      },
      {
       "terme": "Emboîtage",
       "def": "Opération qui réunit le bloc et la couverture rigide par collage des gardes."
      },
      {
       "terme": "Mors",
       "def": "Articulation entre le dos et un plat de la couverture."
      },
      {
       "terme": "Débord",
       "def": "Partie de la couverture qui dépasse du bloc en tête, en pied et au devant."
      },
      {
       "terme": "Garde",
       "def": "Feuillet double qui relie le bloc à la couverture."
      },
      {
       "terme": "Arrondissure",
       "def": "Mise en forme arrondie du dos du bloc."
      },
      {
       "terme": "Endossure",
       "def": "Écrasement latéral du dos qui forme les épaulements du mors du bloc."
      },
      {
       "terme": "Couvrure",
       "def": "Matière (papier, toile) qui recouvre les cartons de la couverture."
      },
      {
       "terme": "Rempli",
       "def": "Bord de la couvrure replié sur l'envers des cartons."
      },
      {
       "terme": "Pas",
       "def": "Distance entre deux trous d'une reliure mécanique, souvent exprimée en boucles par pouce."
      }
     ]
    },
    {
     "id": "bfpi-ennoblissement-decoupe",
     "titre": "Ennoblissement : pelliculage, vernis, dorure, gaufrage et découpe",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Décrire les procédés de pelliculage et de vernis sélectif et leurs contraintes pour le façonnage.",
      "Expliquer le principe de la dorure à chaud et régler ses trois paramètres : température, pression, temps.",
      "Distinguer gaufrage et débossage, à sec ou repéré, et les outils associés.",
      "Décrire une forme de découpe et le fonctionnement d'une platine de découpe.",
      "Identifier les défauts courants de ces procédés et leurs causes."
     ],
     "sections": [
      {
       "titre": "L'ennoblissement : valoriser et protéger",
       "contenu": "\n<p>L'<strong>ennoblissement</strong> regroupe les opérations qui donnent au produit imprimé un aspect, un toucher ou une forme particuliers : pelliculage, vernis, dorure, gaufrage, découpe. Ces opérations sont fréquentes sur les couvertures de livres, les emballages de luxe, les cartes de vœux, les chemises à rabats, les étiquettes de vins. Elles interviennent entre l'impression et le façonnage final, et chacune impose des contraintes aux opérations suivantes.</p>\n<p>Les techniques d'ennoblissement ont deux fonctions qui se combinent :</p>\n<ul>\n<li>une fonction <strong>esthétique</strong> : brillance, contraste mat et brillant, éclat métallique, relief, forme non rectangulaire ;</li>\n<li>une fonction <strong>technique</strong> : protection contre le frottement, l'humidité et les salissures (pelliculage, vernis), facilité de pliage et de montage (rainage, découpe).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un ennoblissement se prévoit dès la conception. Il demande des fichiers spécifiques (une couche ou une couleur d'accompagnement qui définit la zone de vernis, de dorure ou le tracé de découpe), des outils fabriqués à l'avance (clichés, formes de découpe) et du temps de séchage ou de stabilisation dans le planning.</div>\n"
      },
      {
       "titre": "Le pelliculage et le vernis sélectif",
       "contenu": "\n<p>Le <strong>pelliculage</strong> consiste à coller un film plastique transparent sur une face (parfois les deux) de la feuille imprimée. Les films les plus courants sont en <strong>polypropylène bi-orienté</strong> (BOPP), brillants, mats ou à effet toucher velours (souvent appelé soft touch). La pelliculeuse marge les feuilles en léger recouvrement, applique le film encollé à chaud par une <strong>calandre</strong> chauffée, puis sépare les feuilles en rompant le film entre elles. On distingue le pelliculage avec film pré-encollé thermoactivable et le pelliculage avec encollage en ligne.</p>\n<p>Le pelliculage protège très bien le produit, mais il a des conséquences en aval : la feuille tend à <strong>tuiler</strong> (le film se rétracte en refroidissant), la surface devient lisse et glissante (réglages de margeurs), le rainage peut faire apparaître des <strong>cloques</strong> au pli si le film n'adhère pas bien, et la colle de reliure accroche mal sur le film. Le produit pelliculé est aussi plus difficile à recycler qu'un papier non pelliculé.</p>\n<p>Le <strong>vernis sélectif</strong> est un vernis appliqué seulement sur certaines zones (un titre, une photo) pour créer un contraste de brillance. On l'applique en sérigraphie, en offset avec une plaque dédiée, ou par jet d'encre numérique, qui permet aussi des vernis épais en relief. Les vernis sont le plus souvent séchés aux UV : ils sont durs et peuvent casser au pli si l'on ne raine pas ou si l'on n'a pas laissé de <strong>réserve</strong> (zone sans vernis) sur les plis et les rainures.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un pelliculage réalisé sur une encre offset insuffisamment sèche, ou sur une feuille chargée en poudre anti-maculage, adhère mal : des zones argentées (petites bulles d'air sous le film) apparaissent, et le film se décolle au rainage ou à la découpe. On vérifie le séchage avant de pelliculer et on observe les premières feuilles en lumière rasante.</div>\n"
      },
      {
       "titre": "La dorure à chaud",
       "contenu": "\n<p>La <strong>dorure à chaud</strong> transfère sur le support la couche colorée ou métallisée d'un <strong>film de dorure</strong>, sous l'action d'un <strong>cliché</strong> chauffé qui porte le motif en relief. Le cliché presse le film contre le support : là où il appuie, la couche adhésive du film fond et colle la couche décorative sur le support ; ailleurs, le film reste intact et repart avec son support polyester.</p>\n<p>Les clichés sont en <strong>magnésium</strong> (gravure chimique, économique, pour les séries courtes et moyennes), en <strong>cuivre</strong> (plus résistant, détails plus fins) ou en <strong>laiton</strong> (gravé mécaniquement, très durable, permet les reliefs sculptés pour la dorure-gaufrage combinée). La machine est une presse à platine (plan contre plan) ou à cylindre, munie d'une plaque chauffante sur laquelle est fixé le cliché et d'un dispositif de déroulement du film qui avance de la longueur nécessaire à chaque coup.</p>\n<p>Trois paramètres se règlent ensemble :</p>\n<table>\n<thead><tr><th>Paramètre</th><th>Trop faible</th><th>Trop fort</th></tr></thead>\n<tbody>\n<tr><td>Température</td><td>Manques, dorure qui s'écaille</td><td>Bavures, contours empâtés, film terne</td></tr>\n<tr><td>Pression</td><td>Manques dans les grandes surfaces</td><td>Empreinte marquée au verso, bavures</td></tr>\n<tr><td>Temps de contact (lié à la vitesse)</td><td>Adhérence insuffisante</td><td>Bavures, surchauffe du support</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calage d'une dorure. 1) Vérifier que le film choisi est compatible avec le support (papier, pelliculage, vernis) d'après sa fiche technique. 2) Fixer le cliché et chauffer à la température recommandée par le fournisseur du film, en début de plage. 3) Régler la mise en hauteur (habillage sous la contrepartie) pour obtenir une pression uniforme : faire un coup sur papier carbone ou sur une feuille test et corriger les zones faibles par des calages de papier fin. 4) Faire des essais en augmentant progressivement la température ou en réduisant la vitesse jusqu'à obtenir une dorure nette, couvrante et sans bavure. 5) Tester l'adhérence au ruban adhésif et au frottement. 6) Faire valider le BàF et noter les réglages.</div>\n<p>Il existe aussi la <strong>dorure à froid</strong> : une colle est imprimée en offset à l'endroit du motif, puis un film est appliqué et arraché ; la couche métallisée reste sur la colle. Ce procédé, rapide et sans cliché, permet de surimprimer le métal en couleurs, mais donne un rendu moins brillant et moins net que la dorure à chaud.</p>\n"
      },
      {
       "titre": "Le gaufrage",
       "contenu": "\n<p>Le <strong>gaufrage</strong> déforme le support pour créer un relief durable. On utilise un cliché <strong>mâle</strong> et une <strong>contrepartie femelle</strong> dont les formes s'emboîtent : le support est pressé entre les deux. On distingue :</p>\n<ul>\n<li>le <strong>gaufrage en relief</strong> (ou embossage), où le motif ressort côté recto ;</li>\n<li>le <strong>débossage</strong>, où le motif est en creux côté recto ;</li>\n<li>le <strong>gaufrage à sec</strong> (ou aveugle), sans impression ni dorure, qui ne joue que sur la lumière ;</li>\n<li>le <strong>gaufrage repéré</strong>, qui met en relief un élément déjà imprimé ou doré ; il demande un repérage précis entre l'impression et l'outil.</li>\n</ul>\n<p>Le gaufrage se fait sur les mêmes presses que la dorure, souvent avec un cliché chauffé qui assouplit les fibres et fixe le relief. Le support doit avoir assez d'épaisseur et d'allongement : les papiers non couchés épais et les cartes à fibres longues gaufrent bien, alors que les papiers couchés très fins se déchirent. Le relief se voit au verso, ce qui doit être prévu (par exemple sur une carte double, où le verso du gaufrage est caché par le second volet).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour les coffrets et les étiquettes de spiritueux, on réalise souvent dorure et gaufrage en un seul passage avec un cliché en laiton sculpté. L'outil est coûteux et sa fabrication demande plusieurs jours : il est commandé dès la validation du fichier, bien avant l'impression.</div>\n"
      },
      {
       "titre": "La découpe à la forme",
       "contenu": "\n<p>La <strong>découpe</strong> donne au produit un contour non rectangulaire (étui, chemise à rabats, carte à fenêtre, étiquette) et, en même temps, réalise les rainages nécessaires au pliage. Elle utilise une <strong>forme de découpe</strong> :</p>\n<ul>\n<li>une plaque de <strong>contreplaqué</strong> épais, dans laquelle on a découpé au laser des fentes suivant le tracé ;</li>\n<li>des <strong>filets d'acier</strong> insérés dans ces fentes : <strong>filets coupants</strong> (tranchants), <strong>filets rainants</strong> (arrondis), filets perforants ou mixtes ; la hauteur standard des filets en Europe est de 23,80 mm, les filets rainants étant plus bas que les coupants d'une valeur liée à l'épaisseur du support ;</li>\n<li>des <strong>caoutchoucs d'éjection</strong> collés le long des filets, qui repoussent le support après la coupe pour qu'il ne reste pas coincé.</li>\n</ul>\n<p>En face de la forme, une <strong>contrepartie</strong> (matrice de rainage) collée sur la plaque d'appui crée le canal dans lequel le filet rainant enfonce le support. Ses dimensions dépendent de l'épaisseur du support et du filet ; on les choisit dans les tableaux du fournisseur.</p>\n<p>Les poses découpées doivent rester attachées à la feuille pour être évacuées en pile : on prévoit de petites <strong>attaches</strong> (encoches dans le filet coupant) qui laissent un point de liaison. Après découpe, les poses sont séparées des déchets par <strong>éjection</strong> (déchiquetage manuel ou station d'éjection automatique) puis, sur les machines les plus équipées, par une station de séparation des poses.</p>\n<table>\n<thead><tr><th>Machine</th><th>Principe</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Platine manuelle ou semi-automatique</td><td>Plan contre plan, margeage manuel ou assisté</td><td>Petites séries, prototypes</td></tr>\n<tr><td>Autoplatine</td><td>Plan contre plan, margeur automatique, barres à pinces, éjection et réception automatiques</td><td>Séries moyennes et longues d'étuis et de cartes</td></tr>\n<tr><td>Découpe rotative</td><td>Outil cylindrique</td><td>Très grandes séries, étiquettes</td></tr>\n<tr><td>Table de découpe numérique</td><td>Lame ou laser piloté sans forme</td><td>Prototypes, très petites séries</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la fermeture d'une platine développe des efforts considérables. La zone entre la forme et la plaque d'appui est une zone d'écrasement : toute intervention (habillage, retrait d'une feuille) se fait machine arrêtée et consignée, jamais en se fiant à un arrêt temporaire. Les filets coupants imposent des gants anti-coupure lors de la manipulation des formes.</div>\n"
      },
      {
       "titre": "Mettre en train une découpe et contrôler",
       "contenu": "\n<p>La <strong>mise en train</strong> (ou habillage) d'une forme de découpe consiste à égaliser la pression sur tout le tracé. Les filets ne coupent jamais parfaitement de manière uniforme du premier coup : la plaque, la forme et la machine présentent de petits écarts. On fait un coup d'essai, on repère les zones où le support n'est pas coupé, et on colle sous la forme (ou sur la plaque) de fines bandes de papier de calage à ces endroits. On recommence jusqu'à une coupe nette partout avec la pression la plus faible possible, ce qui ménage les filets.</p>\n<p>Le contrôle porte sur :</p>\n<ul>\n<li>le <strong>repérage</strong> de la découpe par rapport à l'impression (marques de repérage, tolérance de la fiche) ;</li>\n<li>la <strong>netteté de coupe</strong> : bords francs, sans barbes ni fibres arrachées ;</li>\n<li>la <strong>qualité des rainages</strong> : pli facile, sans éclatement de la surface ;</li>\n<li>la <strong>tenue des attaches</strong> : suffisante pour le transport en pile, mais facile à rompre à l'éjection ;</li>\n<li>le <strong>montage</strong> : sur un étui, on monte un exemplaire pour vérifier que les volets se ferment correctement.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul des feuilles à passer en découpe. Commande de 12 000 chemises à rabats, 2 poses par feuille, passe de découpe 4 %. 1) Feuilles nettes : 12 000 / 2 = 6 000 feuilles. 2) Passe : 6 000 x 0,04 = 240 feuilles. 3) Feuilles à prévoir à l'entrée de la découpe : 6 000 + 240 = 6 240. 4) Si la dorure, faite avant, a aussi une passe de 3 %, il faut 6 240 x 1,03 = 6 427,2, arrondi à 6 428 feuilles à l'entrée de la dorure. On remonte ainsi la chaîne depuis la dernière opération jusqu'à l'impression.</div>\n"
      }
     ],
     "points_cles": [
      "L'ennoblissement a une fonction esthétique et une fonction technique ; il se prévoit dès la conception.",
      "Le pelliculage protège mais provoque tuilage, surfaces glissantes et difficultés de collage et de recyclage.",
      "Le vernis sélectif UV doit être réservé sur les zones de pli et de rainage.",
      "La dorure à chaud se règle par la température, la pression et le temps de contact.",
      "Les clichés de dorure sont en magnésium, cuivre ou laiton selon la série et la finesse.",
      "Le gaufrage utilise un cliché mâle et une contrepartie femelle ; le relief se voit au verso.",
      "Une forme de découpe associe contreplaqué, filets coupants et rainants, caoutchoucs d'éjection.",
      "La mise en train égalise la pression par des calages ; on cherche la pression minimale.",
      "Les passes de chaque opération se cumulent en remontant de la dernière opération à l'impression."
     ],
     "lexique": [
      {
       "terme": "Ennoblissement",
       "def": "Ensemble des opérations qui valorisent l'aspect, le toucher ou la forme d'un imprimé."
      },
      {
       "terme": "Pelliculage",
       "def": "Collage d'un film plastique transparent sur la surface d'un imprimé."
      },
      {
       "terme": "Vernis sélectif",
       "def": "Vernis appliqué uniquement sur certaines zones pour créer un contraste."
      },
      {
       "terme": "Cliché",
       "def": "Plaque métallique portant le motif en relief pour la dorure ou le gaufrage."
      },
      {
       "terme": "Film de dorure",
       "def": "Film multicouche dont la couche décorative est transférée à chaud sur le support."
      },
      {
       "terme": "Gaufrage",
       "def": "Mise en relief durable du support entre un outil mâle et une contrepartie femelle."
      },
      {
       "terme": "Forme de découpe",
       "def": "Plaque de contreplaqué munie de filets d'acier pour découper et rainer."
      },
      {
       "terme": "Filet rainant",
       "def": "Filet à bord arrondi qui marque un pli sans couper."
      },
      {
       "terme": "Autoplatine",
       "def": "Machine de découpe plan contre plan entièrement automatique."
      },
      {
       "terme": "Mise en train",
       "def": "Réglage de la pression d'une forme ou d'un cliché par des calages de papier."
      }
     ]
    },
    {
     "id": "bfpi-routage",
     "titre": "Le routage : mise sous pli, adressage, tri et dépôt",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Décrire la chaîne de routage, de la réception du produit et du fichier jusqu'au dépôt chez l'opérateur postal.",
      "Appliquer les règles de rédaction d'une adresse postale selon la norme NF Z10-011.",
      "Décrire le fonctionnement d'une filmeuse et d'une machine de mise sous enveloppe.",
      "Préparer un tri et un conditionnement conformes au cahier des charges de l'offre postale choisie.",
      "Calculer le poids d'un pli et d'un envoi et renseigner un bordereau de dépôt."
     ],
     "sections": [
      {
       "titre": "La chaîne de routage",
       "contenu": "\n<p>Le <strong>routage</strong> transforme une production de produits finis identiques en une multitude d'envois individuels, chacun destiné à une adresse. Il concerne les journaux et magazines diffusés par abonnement, les catalogues et la publicité adressée, les courriers de gestion (relevés, factures, convocations), ainsi que la distribution d'imprimés non adressés dans les boîtes aux lettres.</p>\n<p>La chaîne comprend deux flux qui se rejoignent :</p>\n<ul>\n<li>le <strong>flux physique</strong> : produits finis, encarts, enveloppes, films, livrés par l'imprimeur et le façonnier ;</li>\n<li>le <strong>flux de données</strong> : le fichier d'adresses transmis par le client, traité puis imprimé sur chaque pli.</li>\n</ul>\n<table>\n<thead><tr><th>Étape</th><th>Opérations</th></tr></thead>\n<tbody>\n<tr><td>Réception</td><td>Contrôle des quantités et de l'état des produits et des encarts ; réception et contrôle du fichier</td></tr>\n<tr><td>Traitement du fichier</td><td>Normalisation des adresses, suppression des doublons, tri selon le plan de tri de l'offre postale</td></tr>\n<tr><td>Mise sous pli</td><td>Mise sous film ou sous enveloppe, avec les encarts prévus</td></tr>\n<tr><td>Adressage</td><td>Impression de l'adresse par jet d'encre ou pose d'étiquette ; marque d'affranchissement</td></tr>\n<tr><td>Tri et conditionnement</td><td>Constitution de liasses, bacs, conteneurs ou palettes par destination</td></tr>\n<tr><td>Dépôt</td><td>Bordereau de dépôt, remise à l'opérateur postal ou au transporteur à la date prévue</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en routage, la date de dépôt est souvent impérative (parution d'un magazine, début d'une opération commerciale). Un retard d'une journée peut faire perdre au client l'intérêt de l'envoi. Le planning de routage est donc construit à rebours depuis la date de dépôt.</div>\n"
      },
      {
       "titre": "Le fichier d'adresses et la norme d'adressage",
       "contenu": "\n<p>Le fichier d'adresses est fourni par le client sous forme de fichier informatique (tableur ou fichier texte structuré). Avant utilisation, il subit un <strong>traitement</strong> :</p>\n<ul>\n<li>la <strong>normalisation</strong> : mise en forme selon la norme d'adressage, correction des codes postaux et des noms de communes et de voies à partir des référentiels de l'opérateur postal (traitement souvent désigné par le sigle RNVP, pour restructuration, normalisation et validation postale) ;</li>\n<li>le <strong>dédoublonnage</strong> : suppression des adresses présentes plusieurs fois ;</li>\n<li>le <strong>tri</strong> : classement des adresses dans l'ordre qui permettra de constituer directement les liasses et les bacs par destination.</li>\n</ul>\n<p>La norme <strong>NF Z10-011</strong> fixe la présentation des adresses postales en France. Une adresse comporte au maximum <strong>6 lignes</strong> de <strong>38 caractères</strong> au plus (espaces compris), alignées à gauche, sans ligne blanche intermédiaire :</p>\n<table>\n<thead><tr><th>Ligne</th><th>Contenu</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Identité du destinataire (civilité, prénom, nom ou raison sociale)</td><td>Madame Claire MARTIN</td></tr>\n<tr><td>2</td><td>Complément d'identification du destinataire ou point de remise (appartement, étage, chez...)</td><td>Appartement 12 Escalier B</td></tr>\n<tr><td>3</td><td>Complément d'identification du point géographique (bâtiment, résidence, entrée)</td><td>Résidence Les Tilleuls</td></tr>\n<tr><td>4</td><td>Numéro et libellé de la voie</td><td>25 rue des Lilas</td></tr>\n<tr><td>5</td><td>Lieu-dit ou service particulier de distribution (boîte postale...)</td><td>(vide si sans objet)</td></tr>\n<tr><td>6</td><td>Code postal et localité de destination, en majuscules</td><td>69003 LYON</td></tr>\n</tbody>\n</table>\n<p>Les lignes sans objet sont supprimées, et non laissées vides. La dernière ligne s'écrit sans ponctuation ni soulignement, avec la localité en majuscules non accentuées ; on n'écrit pas « FRANCE » pour un envoi national.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un fichier d'adresses contient des données personnelles. Il ne doit être ni copié sur un support personnel, ni utilisé pour un autre envoi, ni conservé au-delà de la durée prévue par le contrat. Les erreurs d'adressage (décalage de colonnes à l'import, codes postaux tronqués quand un tableur supprime le zéro initial) sont fréquentes : on contrôle un échantillon d'adresses imprimées dès le début de la production.</div>\n"
      },
      {
       "titre": "La mise sous film",
       "contenu": "\n<p>La <strong>mise sous film</strong> regroupe le produit principal (un magazine, un catalogue) et ses éventuels encarts (lettre d'accompagnement, supplément, échantillon) dans une enveloppe de film soudée. La <strong>filmeuse</strong> comprend :</p>\n<ul>\n<li>une chaîne de transport le long de laquelle sont placés des <strong>margeurs</strong> : le premier dépose le produit principal, les suivants déposent les encarts dessus, à des positions réglées ;</li>\n<li>une station de <strong>formation du film</strong> qui enveloppe le lot dans un film dévidé d'une bobine ;</li>\n<li>des <strong>barres de soudure</strong> longitudinale et transversale, chauffées, qui ferment l'enveloppe et séparent les plis ;</li>\n<li>éventuellement un <strong>tunnel de rétraction</strong>, four qui resserre le film autour du produit ;</li>\n<li>une tête d'<strong>impression jet d'encre</strong> ou une étiqueteuse pour l'adresse, puis un empileur ou un convoyeur vers le tri.</li>\n</ul>\n<p>Les réglages portent sur la longueur de pli, la température et le temps de soudure, la tension du film, la position des encarts et de l'adresse (l'adresse doit être lisible à travers le film, ou imprimée sur un porte-adresse). Les films en polyéthylène sont de plus en plus remplacés par des films biosourcés ou par du papier, qui demandent d'autres réglages de soudure ou de collage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour un magazine avec des encarts différents selon les abonnés (offre de réabonnement pour certains, supplément régional pour d'autres), les margeurs d'encarts sont pilotés par le fichier : chaque margeur dépose ou non son encart selon la ligne d'adresse traitée. Un défaut de synchronisation entre fichier et machine produit des plis faux, d'où des contrôles par caméra et des prélèvements réguliers.</div>\n"
      },
      {
       "titre": "La mise sous enveloppe",
       "contenu": "\n<p>La <strong>mise sous enveloppe</strong> (ou mise sous pli) est réalisée par une <strong>machine de mise sous pli</strong>. Elle associe :</p>\n<ul>\n<li>souvent une <strong>plieuse en ligne</strong> qui plie les lettres au format de l'enveloppe ;</li>\n<li>des <strong>stations d'encarts</strong> (margeurs à navette ou à tambour rotatif) qui prélèvent chacune un document et le déposent sur une piste de collecte ;</li>\n<li>un <strong>margeur d'enveloppes</strong> qui ouvre le rabat et maintient l'enveloppe ouverte ;</li>\n<li>un poste d'<strong>insertion</strong> où des poussoirs font entrer le paquet de documents dans l'enveloppe ;</li>\n<li>un poste de <strong>fermeture</strong> (humectage de la gomme du rabat puis pressage) ;</li>\n<li>un poste d'<strong>impression</strong> de l'adresse ou de la marque d'affranchissement, si l'enveloppe n'est pas à fenêtre.</li>\n</ul>\n<p>Pour les courriers <strong>personnalisés</strong> (factures, relevés), il est essentiel que chaque destinataire reçoive ses propres documents et uniquement les siens. Les documents portent des <strong>codes de pilotage</strong> (marques optiques ou codes 2D) lus par la machine : ils indiquent le nombre de pages du pli, l'ordre, les encarts à ajouter. La machine vérifie la cohérence et éjecte tout pli douteux. On parle de contrôle d'<strong>intégrité</strong> des plis.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'une lettre pliée entre dans une enveloppe. Lettre A4 (210 x 297 mm) pliée en trois volets roulés : format plié 210 x 99 mm environ. Enveloppe DL : 110 x 220 mm. 1) Largeur : 220 - 210 = 10 mm de jeu. 2) Hauteur : 110 - 99 = 11 mm de jeu. 3) Le jeu doit être suffisant pour l'insertion mécanique (la notice de la machine indique les jeux minimaux) et l'adresse imprimée sur la lettre doit tomber dans la fenêtre quelle que soit sa position dans l'enveloppe : on vérifie en faisant glisser le document vers les quatre bords de l'enveloppe.</div>\n"
      },
      {
       "titre": "Tri, conditionnement et offres postales",
       "contenu": "\n<p>L'opérateur postal propose des <strong>offres</strong> différentes selon la nature de l'envoi : presse (pour les publications qui bénéficient d'un numéro de commission paritaire), publicité adressée, courrier de gestion, imprimés non adressés. Chaque offre a son <strong>cahier des charges</strong> : formats et poids admis, conditions pour que le pli soit <strong>mécanisable</strong> (traité par les machines de tri), quantités minimales, niveau de <strong>pré-tri</strong> à réaliser par le routeur, présentation des liasses et des contenants, délais de distribution. Plus le routeur trie finement, plus le tarif est avantageux, car il épargne ce travail à l'opérateur postal.</p>\n<p>Ces offres, leurs noms, leurs seuils et leurs tarifs évoluent régulièrement. Le routeur travaille toujours avec la <strong>version en vigueur</strong> des conditions de l'opérateur, et non de mémoire.</p>\n<p>Le conditionnement suit une logique emboîtée :</p>\n<ul>\n<li>la <strong>liasse</strong> : paquet de plis de même destination, maintenu par un lien ou un film, identifié par une étiquette ;</li>\n<li>le <strong>bac</strong> ou la caissette : contenant normalisé regroupant des liasses ;</li>\n<li>le <strong>conteneur</strong> ou la <strong>palette</strong> : regroupant des bacs ou des liasses pour un même centre de traitement.</li>\n</ul>\n<p>Chaque contenant porte une <strong>étiquette</strong> qui indique sa destination et son contenu, selon le modèle fourni par l'opérateur. Les plis portent une <strong>marque d'affranchissement</strong> conforme à l'offre (empreinte imprimée, mention de port payé, logo), au lieu d'un timbre.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'ordre de tri du fichier conditionne tout le reste. Si le fichier est trié dans l'ordre du plan de tri, les plis sortent de la machine dans l'ordre des liasses et des bacs ; il suffit de les séparer aux changements de destination signalés par la machine (marque de séparation, pli décalé, étiquette de liasse imprimée).</div>\n"
      },
      {
       "titre": "Contrôler, peser et déposer",
       "contenu": "\n<p>Les contrôles de routage portent sur :</p>\n<ul>\n<li>la <strong>conformité du pli</strong> : présence et ordre des encarts, lisibilité de l'adresse, position dans la fenêtre, qualité de la soudure ou de la fermeture ;</li>\n<li>le <strong>poids unitaire</strong>, mesuré sur balance de précision, qui détermine le tarif et doit respecter les limites de l'offre ;</li>\n<li>les <strong>quantités</strong> : nombre de plis produits comparé au nombre d'adresses du fichier, plis éjectés et retraités ;</li>\n<li>le <strong>conditionnement</strong> : liasses, bacs, étiquettes, palettes stables et banderolées.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> poids d'un pli et d'un envoi. Magazine A4 (210 x 297 mm) de 64 pages intérieures sur papier de 80 g/m² et couverture de 4 pages sur 170 g/m², sous film de 3 g. 1) Surface d'une feuille A4 : 0,210 x 0,297 = 0,06237 m². 2) Intérieur : 64 pages = 32 feuilles, soit 32 x 0,06237 x 80 = 159,7 g. 3) Couverture : 4 pages = 2 feuilles, soit 2 x 0,06237 x 170 = 21,2 g. 4) Pli complet : 159,7 + 21,2 + 3 = 183,9 g, soit environ 184 g (les agrafes sont négligeables). 5) Envoi de 25 000 exemplaires : 25 000 x 0,184 = 4 600 kg, soit 4,6 tonnes. 6) Si une palette est limitée à 600 kg de produits, il faut 4 600 / 600 = 7,7, donc 8 palettes. On vérifie le résultat par une pesée réelle de 10 plis.</div>\n<p>Le <strong>bordereau de dépôt</strong> récapitule l'envoi : client, offre choisie, nombre de plis par catégorie de poids et de destination, poids total, nombre de contenants, date et lieu de dépôt. Il sert de base à la facturation par l'opérateur postal et doit correspondre exactement à ce qui est remis. Le routeur établit aussi un <strong>rapport de routage</strong> pour son client : quantités traitées, plis non distribuables (adresses invalides écartées au traitement du fichier), incidents.</p>\n"
      }
     ],
     "points_cles": [
      "Le routage associe un flux physique (produits, encarts) et un flux de données (fichier d'adresses).",
      "Le fichier est normalisé, dédoublonné et trié selon le plan de tri de l'offre postale.",
      "La norme NF Z10-011 limite l'adresse à 6 lignes de 38 caractères, la dernière portant code postal et localité en majuscules.",
      "La filmeuse regroupe produit et encarts sous un film soudé, puis adresse chaque pli.",
      "La machine de mise sous pli vérifie l'intégrité des plis personnalisés grâce à des codes de pilotage.",
      "Les offres postales fixent formats, poids, mécanisabilité, niveau de pré-tri et présentation ; elles évoluent et se consultent dans leur version en vigueur.",
      "Le conditionnement s'organise en liasses, bacs, conteneurs ou palettes étiquetés.",
      "Le poids d'un pli se calcule à partir des surfaces et des grammages, puis se vérifie par pesée.",
      "Le bordereau de dépôt récapitule l'envoi et sert de base à la facturation postale."
     ],
     "lexique": [
      {
       "terme": "Routage",
       "def": "Ensemble des opérations qui préparent l'envoi d'imprimés à leurs destinataires."
      },
      {
       "terme": "RNVP",
       "def": "Traitement de restructuration, normalisation et validation postale d'un fichier d'adresses."
      },
      {
       "terme": "Dédoublonnage",
       "def": "Suppression des adresses présentes plusieurs fois dans un fichier."
      },
      {
       "terme": "NF Z10-011",
       "def": "Norme française de présentation des adresses postales."
      },
      {
       "terme": "Filmeuse",
       "def": "Machine qui enveloppe un produit et ses encarts dans un film soudé."
      },
      {
       "terme": "Machine de mise sous pli",
       "def": "Machine qui assemble des documents et les insère dans une enveloppe fermée."
      },
      {
       "terme": "Pli mécanisable",
       "def": "Envoi dont le format, le poids et la présentation permettent le tri automatique."
      },
      {
       "terme": "Liasse",
       "def": "Paquet de plis de même destination, lié et étiqueté."
      },
      {
       "terme": "Marque d'affranchissement",
       "def": "Empreinte ou mention imprimée qui remplace le timbre selon l'offre postale."
      },
      {
       "terme": "Bordereau de dépôt",
       "def": "Document qui récapitule un envoi remis à l'opérateur postal."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Qualité, maintenance, santé, sécurité et environnement",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bfpi-demarche-qualite",
     "titre": "La démarche qualité en façonnage et routage",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Situer le contrôle de production dans une démarche qualité d'entreprise (processus, amélioration continue).",
      "Évaluer les coûts de la non-qualité et justifier les actions de prévention.",
      "Lire et appliquer un plan de contrôle : quoi, quand, comment, critère, réaction.",
      "Exploiter une carte de contrôle et un diagramme de Pareto.",
      "Traiter une non-conformité : décision immédiate, recherche de causes, action corrective."
     ],
     "sections": [
      {
       "titre": "De la vérification à la démarche qualité",
       "contenu": "\n<p>En seconde, la qualité a été abordée par le produit : reconnaître les défauts, mesurer, prélever, renseigner une fiche de suivi. En première et en terminale, on l'aborde par l'<strong>organisation</strong>. La <strong>qualité</strong> est l'aptitude d'un produit ou d'un service à satisfaire les exigences du client, exprimées (cahier des charges) ou implicites (usages du métier). Une entreprise qui se contente de trier les produits défectueux en fin de chaîne paie deux fois : la fabrication du défaut et son tri. La <strong>démarche qualité</strong> cherche au contraire à empêcher le défaut d'apparaître.</p>\n<p>Beaucoup d'entreprises graphiques organisent cette démarche selon la norme internationale <strong>ISO 9001</strong> (systèmes de management de la qualité). Elle repose sur quelques principes : orientation client, approche par <strong>processus</strong> (chaque activité a des entrées, des sorties, un responsable et des indicateurs), décisions fondées sur des faits mesurés, et <strong>amélioration continue</strong>.</p>\n<p>L'amélioration continue suit le cycle <strong>PDCA</strong>, appelé aussi roue de Deming :</p>\n<ul>\n<li><strong>Plan</strong> (planifier) : définir l'objectif et les actions ;</li>\n<li><strong>Do</strong> (réaliser) : mettre en œuvre ;</li>\n<li><strong>Check</strong> (vérifier) : mesurer les résultats ;</li>\n<li><strong>Act</strong> (agir) : corriger, puis standardiser ce qui fonctionne, avant de repartir pour un nouveau cycle.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les grands donneurs d'ordre (éditeurs, distributeurs) imposent souvent à leurs fournisseurs une <strong>charte qualité</strong> : liste des exigences, tolérances, méthodes de contrôle, conditions de livraison, pénalités en cas de non-conformité. Le façonnier doit l'intégrer dans ses fiches de fabrication et ses plans de contrôle.</div>\n"
      },
      {
       "titre": "Les coûts de la non-qualité",
       "contenu": "\n<p>La <strong>non-qualité</strong> coûte cher, et souvent plus qu'on ne le croit, car une partie de ses coûts est cachée. On distingue :</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Exemples en façonnage et routage</th></tr></thead>\n<tbody>\n<tr><td>Coûts de défaillance interne (défaut découvert avant livraison)</td><td>Gâche supplémentaire, tri manuel d'une palette, retouche, réimpression d'un cahier, heures supplémentaires</td></tr>\n<tr><td>Coûts de défaillance externe (défaut découvert par le client)</td><td>Remise accordée, reprise des produits, pénalités, réexpédition, perte du client</td></tr>\n<tr><td>Coûts de détection</td><td>Temps de contrôle, équipements de mesure, contrôles automatiques</td></tr>\n<tr><td>Coûts de prévention</td><td>Formation, maintenance préventive, maquettes en blanc, modes opératoires</td></tr>\n</tbody>\n</table>\n<p>Les deux premières catégories sont les coûts de la <strong>non-qualité</strong> proprement dite ; les deux dernières sont les coûts d'<strong>obtention de la qualité</strong>. Investir en prévention réduit fortement les défaillances, surtout externes, qui sont les plus coûteuses.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> chiffrer une non-conformité. Une série de 8 000 brochures est livrée avec un cahier inversé dans 5 % des exemplaires. Le client exige un tri et le remplacement. 1) Exemplaires défectueux : 8 000 x 0,05 = 400. 2) Tri : 2 personnes pendant 6 h à 35 euros de l'heure (coût chargé) = 2 x 6 x 35 = 420 euros. 3) Refabrication de 400 brochures : 650 euros (devis interne). 4) Transport aller-retour : 280 euros. 5) Total : 420 + 650 + 280 = 1 350 euros, sans compter le risque de perdre le client. Un contrôle des marques de collationnement toutes les 15 minutes aurait pris quelques minutes par heure.</div>\n"
      },
      {
       "titre": "Le plan de contrôle",
       "contenu": "\n<p>Le <strong>plan de contrôle</strong> décrit, pour un produit ou un poste, tous les contrôles à réaliser. Il répond à six questions :</p>\n<table>\n<thead><tr><th>Question</th><th>Exemple pour une encarteuse-piqueuse</th></tr></thead>\n<tbody>\n<tr><td>Quoi ?</td><td>Format fini, collationnement, position et fermeture des agrafes</td></tr>\n<tr><td>Qui ?</td><td>Le conducteur (autocontrôle), l'aide-conducteur pour le collationnement</td></tr>\n<tr><td>Quand ?</td><td>Au BàF, puis toutes les 1 000 brochures, et après tout arrêt ou changement de bobine de fil</td></tr>\n<tr><td>Comment ?</td><td>Réglet ou pied à coulisse, contrôle visuel des marques de collationnement, ouverture au centre</td></tr>\n<tr><td>Critère ?</td><td>Format 210 x 297 mm plus ou moins 0,5 mm, ordre des cahiers conforme au BàF, agrafes fermées à plat</td></tr>\n<tr><td>Réaction ?</td><td>Hors tolérance : arrêt, isolement de la production depuis le dernier contrôle bon, information du chef d'équipe</td></tr>\n</tbody>\n</table>\n<p>On distingue le <strong>contrôle par attributs</strong> (conforme ou non conforme : présence d'un encart, ordre des cahiers) et le <strong>contrôle par mesure</strong> (une valeur chiffrée : format, poids, épaisseur, force d'arrachement). Le second donne plus d'informations : il montre une dérive avant qu'elle ne sorte de la tolérance.</p>\n<p>Le contrôle intervient à trois moments : à la <strong>réception</strong> des matières (quantité, état des feuilles, séchage, sens des fibres, lot de colle), <strong>en cours de production</strong> (autocontrôle et contrôles automatiques) et en <strong>fin de production</strong> (contrôle final avant expédition, sur échantillon). Pour les grandes séries, la taille des échantillons et les critères d'acceptation sont définis par des plans d'échantillonnage, souvent fixés par le client.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la règle de réaction est essentielle. Quand un défaut est trouvé, tout ce qui a été produit depuis le dernier contrôle conforme est suspect et doit être isolé et vérifié. Plus les contrôles sont espacés, plus la quantité à trier est grande.</div>\n"
      },
      {
       "titre": "La carte de contrôle",
       "contenu": "\n<p>La <strong>carte de contrôle</strong> est un graphique sur lequel on reporte, dans l'ordre chronologique, les mesures d'une caractéristique (par exemple la hauteur d'une brochure). Elle comporte une ligne <strong>nominale</strong> (la valeur visée), des <strong>limites de tolérance</strong> (au-delà, le produit est non conforme) et souvent des <strong>limites de surveillance</strong>, plus serrées, qui déclenchent une action avant d'atteindre la tolérance.</p>\n<table>\n<thead><tr><th>Heure</th><th>Hauteur mesurée (mm)</th><th>Position</th></tr></thead>\n<tbody>\n<tr><td>08 h 00</td><td>297,0</td><td>Nominal</td></tr>\n<tr><td>08 h 30</td><td>297,1</td><td>Zone normale</td></tr>\n<tr><td>09 h 00</td><td>297,1</td><td>Zone normale</td></tr>\n<tr><td>09 h 30</td><td>297,2</td><td>Zone normale</td></tr>\n<tr><td>10 h 00</td><td>297,3</td><td>Limite de surveillance atteinte (297,3)</td></tr>\n<tr><td>10 h 30</td><td>297,4</td><td>Entre surveillance et tolérance (297,5)</td></tr>\n</tbody>\n</table>\n<p>Chaque mesure est conforme, mais la carte révèle une <strong>tendance</strong> : la hauteur augmente régulièrement. Il faut agir avant 297,5 mm. Une telle dérive progressive évoque une cause qui s'aggrave : usure d'une lame, desserrage d'une butée, échauffement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire une carte de contrôle. 1) Vérifier que tous les points sont dans les tolérances. 2) Chercher un point au-delà des limites de surveillance : il impose une vérification immédiate. 3) Chercher une tendance (plusieurs points successifs qui montent ou descendent) ou une série de points tous du même côté du nominal : la machine dérive ou est décentrée. 4) Agir sur la cause (réglage, outil), puis noter l'action sur la carte pour qu'on puisse en voir l'effet sur les points suivants.</div>\n"
      },
      {
       "titre": "Le diagramme de Pareto",
       "contenu": "\n<p>Le <strong>diagramme de Pareto</strong> classe les causes ou les types de défauts par ordre d'importance décroissante, pour concentrer les efforts sur ceux qui pèsent le plus. Il s'appuie sur l'observation que, souvent, une petite partie des causes explique la plus grande partie des problèmes.</p>\n<p>Exemple : relevé des rebuts d'une chaîne de brochage sur un mois.</p>\n<table>\n<thead><tr><th>Type de défaut</th><th>Nombre</th><th>%</th><th>% cumulé</th></tr></thead>\n<tbody>\n<tr><td>Couverture mal centrée</td><td>1 260</td><td>42 %</td><td>42 %</td></tr>\n<tr><td>Cahier manquant ou en double</td><td>840</td><td>28 %</td><td>70 %</td></tr>\n<tr><td>Bavure de colle</td><td>420</td><td>14 %</td><td>84 %</td></tr>\n<tr><td>Coupe trilame hors format</td><td>270</td><td>9 %</td><td>93 %</td></tr>\n<tr><td>Autres</td><td>210</td><td>7 %</td><td>100 %</td></tr>\n<tr><td>Total</td><td>3 000</td><td>100 %</td><td>-</td></tr>\n</tbody>\n</table>\n<p>Les deux premiers défauts représentent 70 % des rebuts : ce sont eux qu'il faut traiter en priorité. On représente ces données par des barres décroissantes et une courbe des pourcentages cumulés.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un Pareto n'est valable que si les relevés sont complets et classés avec les mêmes catégories par tous les opérateurs. Si chacun nomme les défauts à sa façon, ou si les rebuts d'une équipe ne sont pas notés, le classement est faux et les efforts portent sur le mauvais problème.</div>\n"
      },
      {
       "titre": "Traiter une non-conformité",
       "contenu": "\n<p>Une <strong>non-conformité</strong> est le non-respect d'une exigence. Son traitement suit deux temps.</p>\n<p><strong>Dans l'immédiat</strong>, on protège le client : arrêt de la production, <strong>isolement</strong> et identification des produits suspects (étiquette rouge, zone dédiée), puis décision sur leur sort :</p>\n<ul>\n<li><strong>tri</strong> pour séparer bons et mauvais ;</li>\n<li><strong>retouche</strong> lorsque le défaut est rattrapable (recoupe, remise sous film) ;</li>\n<li><strong>dérogation</strong> : livraison acceptée par le client malgré l'écart, après accord écrit ;</li>\n<li><strong>rebut</strong> et refabrication.</li>\n</ul>\n<p><strong>Ensuite</strong>, on empêche le retour du problème : recherche de la cause racine, <strong>action corrective</strong> qui supprime cette cause, vérification de l'efficacité. Si l'analyse révèle un risque similaire ailleurs (sur une autre machine, un autre produit), on engage une <strong>action préventive</strong>.</p>\n<p>Pour trouver la cause racine, on utilise les <strong>5 M</strong> pour lister les causes possibles, puis la méthode des <strong>5 pourquoi</strong> : on se demande « pourquoi ? » de manière répétée jusqu'à atteindre une cause sur laquelle on peut agir. Exemple : des brochures ont un cahier manquant. Pourquoi ? Le contrôle d'épaisseur n'a pas éjecté le produit. Pourquoi ? Son seuil avait été élargi. Pourquoi ? Il provoquait des éjections intempestives. Pourquoi ? Le palpeur était encrassé. Pourquoi ? Son nettoyage ne figurait pas dans les opérations de début de poste. Action corrective : nettoyer le palpeur et ajouter son nettoyage à la liste de contrôle de début de poste, en remettant le seuil à sa valeur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque non-conformité est enregistrée sur une <strong>fiche de non-conformité</strong> : description, quantité, décision, cause, action, responsable, date de vérification. Ces fiches alimentent les indicateurs qualité et les revues d'amélioration de l'entreprise.</div>\n"
      }
     ],
     "points_cles": [
      "La démarche qualité vise à empêcher les défauts plutôt qu'à les trier.",
      "L'ISO 9001 repose sur l'approche processus, les faits mesurés et l'amélioration continue (PDCA).",
      "Les coûts de défaillance externe sont les plus élevés ; la prévention les réduit.",
      "Un plan de contrôle précise quoi, qui, quand, comment, le critère et la réaction.",
      "Après un défaut, tout ce qui a été produit depuis le dernier contrôle conforme est isolé.",
      "La carte de contrôle révèle une dérive avant la sortie de tolérance.",
      "Le diagramme de Pareto hiérarchise les défauts pour traiter d'abord les plus fréquents.",
      "Une non-conformité se traite par une décision immédiate (tri, retouche, dérogation, rebut) puis par une action corrective.",
      "Les 5 M et les 5 pourquoi aident à remonter à la cause racine."
     ],
     "lexique": [
      {
       "terme": "Qualité",
       "def": "Aptitude d'un produit à satisfaire les exigences exprimées et implicites du client."
      },
      {
       "terme": "ISO 9001",
       "def": "Norme internationale qui définit les exigences d'un système de management de la qualité."
      },
      {
       "terme": "PDCA",
       "def": "Cycle d'amélioration continue : planifier, réaliser, vérifier, agir."
      },
      {
       "terme": "Charte qualité",
       "def": "Document du client qui fixe ses exigences, tolérances et méthodes de contrôle."
      },
      {
       "terme": "Plan de contrôle",
       "def": "Document qui définit les contrôles d'un produit ou d'un poste et la réaction en cas d'écart."
      },
      {
       "terme": "Carte de contrôle",
       "def": "Graphique chronologique des mesures avec nominal, limites de surveillance et de tolérance."
      },
      {
       "terme": "Diagramme de Pareto",
       "def": "Classement des défauts ou des causes par importance décroissante avec pourcentages cumulés."
      },
      {
       "terme": "Non-conformité",
       "def": "Non-respect d'une exigence spécifiée."
      },
      {
       "terme": "Dérogation",
       "def": "Accord du client pour accepter un produit présentant un écart."
      },
      {
       "terme": "Action corrective",
       "def": "Action qui supprime la cause d'une non-conformité pour éviter qu'elle se reproduise."
      }
     ]
    },
    {
     "id": "bfpi-maintenance",
     "titre": "Maintenance des matériels de façonnage et de routage",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Distinguer les types de maintenance et situer les interventions de l'opérateur dans les niveaux de maintenance.",
      "Calculer et interpréter les indicateurs MTBF, MTTR et disponibilité.",
      "Expliquer le comportement d'un matériel dans le temps (courbe en baignoire, modes de défaillance, usure).",
      "Identifier les composants pneumatiques, électriques et les capteurs d'une machine de façonnage.",
      "Conduire un prédiagnostic et rédiger un compte rendu d'intervention."
     ],
     "sections": [
      {
       "titre": "Pourquoi et comment maintenir",
       "contenu": "\n<p>La <strong>maintenance</strong> est l'ensemble des actions qui permettent de maintenir ou de rétablir un bien dans un état où il peut accomplir sa fonction. Dans un atelier de façonnage, où une seule chaîne de brochage ou une seule filmeuse peut conditionner la livraison de dizaines de clients, une panne coûte la réparation, la production perdue et parfois le non-respect d'une date de dépôt. En seconde, on a vu les opérations systématiques de début et de fin de poste ; on étudie ici l'organisation de la maintenance et la participation de l'opérateur au diagnostic.</p>\n<p>Les définitions de la maintenance sont normalisées (norme européenne NF EN 13306, terminologie de la maintenance). On distingue :</p>\n<table>\n<thead><tr><th>Type</th><th>Déclenchement</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Corrective palliative</td><td>Après une défaillance, dépannage provisoire</td><td>Remplacer une ventouse percée par une ventouse récupérée en attendant la pièce neuve</td></tr>\n<tr><td>Corrective curative</td><td>Après une défaillance, réparation durable</td><td>Remplacer le roulement défectueux d'un arbre de plieuse</td></tr>\n<tr><td>Préventive systématique</td><td>Selon un échéancier (temps ou nombre de cycles)</td><td>Vidange du groupe hydraulique du massicot toutes les N heures</td></tr>\n<tr><td>Préventive conditionnelle</td><td>Selon l'état mesuré du bien, quand un seuil est atteint</td><td>Changer la fraise quand l'aspect du dos fraisé se dégrade</td></tr>\n<tr><td>Préventive prévisionnelle</td><td>Selon l'évolution mesurée d'un paramètre, pour anticiper</td><td>Suivi des vibrations d'un moteur pour planifier son remplacement</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la maintenance préventive coûte du temps d'arrêt programmé, mais elle évite les arrêts imprévus, plus longs et plus coûteux. Le planning de maintenance est intégré au plan de charge de l'atelier.</div>\n"
      },
      {
       "titre": "Les niveaux de maintenance et le rôle de l'opérateur",
       "contenu": "\n<p>Les interventions de maintenance sont classées en <strong>niveaux</strong>, selon leur complexité, les compétences et les moyens nécessaires. La documentation normative française (fascicule de documentation FD X60-000) en distingue cinq. Les deux premiers concernent directement l'opérateur de production :</p>\n<ul>\n<li><strong>Niveau 1</strong> : actions simples, réalisées avec des moyens intégrés à la machine ou décrites dans la notice : nettoyage, graissage aux points prévus, purge d'un filtre à air, remplacement d'éléments consommables accessibles (ventouses, courroies de transport simples, réglette du massicot), vérification de niveaux.</li>\n<li><strong>Niveau 2</strong> : actions qui demandent des procédures détaillées et des équipements de soutien simples, par un personnel formé : remplacement d'un capteur par un échange standard, réglage d'une tension de courroie, changement de lame selon procédure.</li>\n<li>Les <strong>niveaux 3 à 5</strong> relèvent du technicien de maintenance, du service maintenance spécialisé ou du constructeur : diagnostics complexes, réparations importantes, révisions générales, rénovations.</li>\n</ul>\n<p>Dans beaucoup d'entreprises, la <strong>maintenance autonome</strong> (issue de la démarche TPM, maintenance productive totale) confie aux opérateurs le nettoyage, l'inspection, la lubrification et les petits réglages, et leur demande de signaler toute anomalie : bruit inhabituel, fuite, échauffement, jeu.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> chaque niveau a ses limites. Un opérateur n'intervient pas sur une armoire électrique ni sur un organe de sécurité sans l'<strong>habilitation électrique</strong> et l'autorisation correspondantes. En cas de doute sur la limite de son intervention, il arrête la machine, la met en sécurité et appelle la maintenance.</div>\n"
      },
      {
       "titre": "Comportement des matériels et indicateurs",
       "contenu": "\n<p>Une <strong>défaillance</strong> est la perte de l'aptitude d'un bien à accomplir sa fonction ; la <strong>panne</strong> est l'état du bien après la défaillance. On observe que le taux de défaillance d'un matériel suit souvent la <strong>courbe en baignoire</strong> :</p>\n<ul>\n<li>une période de <strong>jeunesse</strong>, où les défaillances sont assez fréquentes mais diminuent (défauts de montage, rodage) ;</li>\n<li>une période de <strong>maturité</strong>, où le taux est faible et à peu près constant (défaillances aléatoires) ;</li>\n<li>une période de <strong>vieillesse</strong>, où les défaillances augmentent à cause de l'<strong>usure</strong>, de la <strong>fatigue</strong> et de la <strong>corrosion</strong>.</li>\n</ul>\n<p>Trois indicateurs suivent la fiabilité et la maintenabilité :</p>\n<ul>\n<li>le <strong>MTBF</strong> (moyenne des temps de bon fonctionnement) = temps de bon fonctionnement total / nombre de défaillances ;</li>\n<li>le <strong>MTTR</strong> (moyenne des temps de réparation) = temps total d'arrêt pour réparation / nombre de défaillances ;</li>\n<li>la <strong>disponibilité</strong> D = MTBF / (MTBF + MTTR), exprimée en pourcentage.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> sur un mois, une filmeuse a été requise 320 h. Elle a connu 8 pannes, qui ont causé au total 16 h d'arrêt. 1) Temps de bon fonctionnement : 320 - 16 = 304 h. 2) MTBF = 304 / 8 = 38 h. 3) MTTR = 16 / 8 = 2 h. 4) D = 38 / (38 + 2) = 0,95, soit 95 %. Interprétation : la machine tombe en panne en moyenne toutes les 38 h, et chaque panne dure en moyenne 2 h. Pour améliorer D, on peut augmenter le MTBF (prévention) ou réduire le MTTR (pièces en stock, procédures de dépannage, formation).</div>\n<p>Un diagramme de Pareto des pannes, classées par organe (soudure, margeur d'encarts, jet d'encre...), indique ensuite où concentrer la maintenance préventive.</p>\n"
      },
      {
       "titre": "Les composants à connaître",
       "contenu": "\n<p>Les machines de façonnage et de routage associent mécanique, pneumatique, électricité et électronique. L'opérateur doit savoir identifier les principaux composants pour décrire une anomalie avec précision.</p>\n<table>\n<thead><tr><th>Domaine</th><th>Composants</th><th>Exemples d'usage</th></tr></thead>\n<tbody>\n<tr><td>Mécanique</td><td>Courroies, chaînes, engrenages, cames, roulements, embrayages</td><td>Transport des feuilles, entraînement des rouleaux, synchronisation des stations</td></tr>\n<tr><td>Pneumatique</td><td>Compresseur, groupe de conditionnement (filtre, régulateur, parfois lubrificateur), distributeurs, vérins, pompes à vide, ventouses</td><td>Prise des feuilles au margeur, soufflage, presseurs, éjection</td></tr>\n<tr><td>Hydraulique</td><td>Pompe, réservoir, vérins, limiteurs de pression</td><td>Presseur et lame du massicot, presses de dorure</td></tr>\n<tr><td>Électrique</td><td>Moteurs, variateurs de vitesse, contacteurs, résistances chauffantes, thermostats</td><td>Entraînements, fondoirs de colle, barres de soudure</td></tr>\n<tr><td>Capteurs</td><td>Détecteurs inductifs (métal), capacitifs, photoélectriques (cellules), ultrasons, codeurs</td><td>Présence de feuille, double feuille, position, comptage, vitesse</td></tr>\n<tr><td>Commande</td><td>Automate programmable, écran de dialogue, arrêts d'urgence, modules de sécurité</td><td>Séquence de la machine, messages d'alarme</td></tr>\n</tbody>\n</table>\n<p>La logique d'une machine automatisée peut être décrite par un <strong>GRAFCET</strong> : un graphe d'étapes (ce que fait la machine) et de transitions (conditions pour passer à l'étape suivante, souvent l'état d'un capteur). Savoir lire un GRAFCET simple permet de comprendre pourquoi une machine reste bloquée : elle attend une condition qui n'arrive pas, par exemple le signal d'une cellule masquée par la poussière.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une grande partie des « pannes » signalées sur les lignes de façonnage sont des capteurs encrassés ou déréglés : poussière de papier sur une cellule, palpeur collant, ventouse bouchée. Le nettoyage des capteurs fait partie de la maintenance de niveau 1 et réduit fortement les arrêts.</div>\n"
      },
      {
       "titre": "Les modes de défaillance courants",
       "contenu": "\n<p>Connaître les modes de défaillance aide à repérer les signes avant-coureurs :</p>\n<ul>\n<li><strong>Usure</strong> par frottement : rouleaux de plieuse lisses ou ovalisés, courroies effilochées, lames émoussées, fraise usée. Signes : glissement, perte de précision, bruit.</li>\n<li><strong>Fatigue</strong> : rupture d'une pièce soumise à des efforts répétés (ressort, came, soudure de châssis). Signes : fissures, jeu croissant.</li>\n<li><strong>Corrosion</strong> : attaque des métaux par l'humidité ou des produits chimiques (corrosion chimique, électrochimique quand deux métaux différents sont en contact en milieu humide). Signes : rouille, piqûres.</li>\n<li><strong>Encrassement</strong> : poussière de papier, colle, poudre anti-maculage. Signes : capteurs qui donnent de faux signaux, ventouses qui prennent mal, échauffement des moteurs.</li>\n<li><strong>Défaillances électriques</strong> : connexion desserrée, câble pincé, résistance chauffante coupée. Signes : fonctionnement intermittent, température qui n'est plus atteinte.</li>\n<li><strong>Fuites</strong> pneumatiques ou hydrauliques : sifflement, baisse de pression, présence d'huile.</li>\n</ul>\n<p>Le <strong>graissage</strong> se fait aux points et avec les lubrifiants indiqués par le constructeur, aux fréquences du planning. Un excès de graisse attire la poussière de papier et peut tacher les produits ; un défaut de graissage accélère l'usure. Les huiles et graisses usagées, chiffons souillés et filtres sont des déchets à trier selon les consignes.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'air comprimé n'est pas inoffensif. Une soufflette dirigée vers la peau ou les yeux peut provoquer des blessures graves, et nettoyer ses vêtements à la soufflette est interdit. On ne débranche jamais un raccord pneumatique sous pression : on coupe l'arrivée d'air et on purge le circuit avant toute intervention.</div>\n"
      },
      {
       "titre": "Prédiagnostic et compte rendu",
       "contenu": "\n<p>Face à un dysfonctionnement, l'opérateur réalise un <strong>prédiagnostic</strong> : il collecte les informations qui aideront le technicien à trouver rapidement la cause. Il consulte le <strong>message d'alarme</strong> de la machine, le <strong>carnet de bord</strong> (cahier ou journal électronique où sont notés les incidents et interventions), la notice et le schéma de principe.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> démarche de prédiagnostic. 1) Mettre la machine en sécurité. 2) Décrire le symptôme précisément : quoi, où, quand, depuis quand, à quelle fréquence (exemple : « double feuille détectée à tort au margeur de la plieuse, une fois sur dix, depuis le changement de papier »). 3) Noter le message d'alarme exact. 4) Vérifier les causes simples de niveau 1 : propreté du capteur, réglage de seuil après changement de papier, état des ventouses, pression d'air. 5) Si le problème persiste, appeler la maintenance avec ces informations. 6) Après intervention, renseigner le carnet de bord : symptôme, cause trouvée, action réalisée, pièces changées, durée d'arrêt.</div>\n<p>Le <strong>compte rendu d'intervention</strong> ou la <strong>fiche d'intervention</strong> alimente l'historique de la machine. C'est grâce à cet historique qu'on calcule MTBF et MTTR, qu'on repère les pannes répétitives et qu'on ajuste le plan de maintenance préventive. Un historique mal tenu rend toutes ces analyses impossibles.</p>\n<p>Avant toute intervention à l'intérieur d'une machine, la <strong>consignation</strong> s'impose : séparation de toutes les énergies (électrique, pneumatique, hydraulique, mécanique par gravité ou ressorts), condamnation par cadenas personnel, signalisation, vérification de l'absence d'énergie. La déconsignation suit la procédure inverse, après avoir vérifié que personne ne se trouve dans la zone dangereuse et que les protecteurs ont été remis en place.</p>\n"
      }
     ],
     "points_cles": [
      "La maintenance corrective intervient après la défaillance ; la préventive, avant, selon un échéancier, un état ou une prévision.",
      "Les niveaux 1 et 2 concernent l'opérateur ; les niveaux supérieurs relèvent de la maintenance spécialisée.",
      "La courbe en baignoire distingue jeunesse, maturité et vieillesse d'un matériel.",
      "MTBF = temps de bon fonctionnement / nombre de pannes ; MTTR = temps de réparation / nombre de pannes.",
      "Disponibilité = MTBF / (MTBF + MTTR).",
      "Beaucoup d'arrêts proviennent de capteurs encrassés, d'où l'importance du nettoyage.",
      "Un GRAFCET montre les étapes d'une machine et les conditions qui les enchaînent.",
      "Le prédiagnostic décrit précisément le symptôme et vérifie les causes simples avant d'appeler la maintenance.",
      "La consignation sépare et condamne toutes les énergies avant d'intervenir."
     ],
     "lexique": [
      {
       "terme": "Maintenance préventive conditionnelle",
       "def": "Maintenance déclenchée par l'atteinte d'un seuil mesuré sur l'état du bien."
      },
      {
       "terme": "Défaillance",
       "def": "Perte de l'aptitude d'un bien à accomplir sa fonction."
      },
      {
       "terme": "MTBF",
       "def": "Moyenne des temps de bon fonctionnement entre deux défaillances."
      },
      {
       "terme": "MTTR",
       "def": "Moyenne des temps de réparation."
      },
      {
       "terme": "Disponibilité",
       "def": "Aptitude d'un bien à être en état de fonctionner, calculée par MTBF / (MTBF + MTTR)."
      },
      {
       "terme": "Courbe en baignoire",
       "def": "Évolution typique du taux de défaillance : jeunesse, maturité, vieillesse."
      },
      {
       "terme": "Capteur",
       "def": "Composant qui transforme une grandeur physique (présence, position) en signal pour la commande."
      },
      {
       "terme": "GRAFCET",
       "def": "Représentation graphique du fonctionnement séquentiel d'un automatisme en étapes et transitions."
      },
      {
       "terme": "Carnet de bord",
       "def": "Registre des incidents et interventions d'une machine."
      },
      {
       "terme": "Consignation",
       "def": "Procédure de séparation et de condamnation des énergies avant intervention."
      }
     ]
    },
    {
     "id": "bfpi-sante-securite-environnement",
     "titre": "Santé, sécurité et environnement dans l'atelier de façonnage",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Distinguer accident du travail, accident de trajet et maladie professionnelle, et calculer les indicateurs de sinistralité.",
      "Identifier les acteurs internes et externes de la prévention et le rôle du document unique.",
      "Analyser un accident par la méthode de l'arbre des causes et proposer des mesures de prévention.",
      "Appliquer les règles de prévention des risques spécifiques : machines, bruit, produits chimiques, manutention.",
      "Gérer les déchets et les consommations de l'atelier dans une démarche environnementale et de certification."
     ],
     "sections": [
      {
       "titre": "Accidents, maladies et indicateurs",
       "contenu": "\n<p>En seconde, on a distingué danger et risque et repéré les dangers des machines et des produits. On s'intéresse maintenant à la manière dont l'entreprise mesure et analyse les atteintes à la santé pour les prévenir.</p>\n<ul>\n<li>Un <strong>accident du travail</strong> (AT) est un accident survenu par le fait ou à l'occasion du travail, quelle qu'en soit la cause.</li>\n<li>Un <strong>accident de trajet</strong> survient sur le parcours normal entre le domicile et le lieu de travail (ou le lieu de restauration habituel).</li>\n<li>Une <strong>maladie professionnelle</strong> (MP) résulte de l'exposition prolongée à un risque lié au travail ; beaucoup sont reconnues au moyen de tableaux de maladies professionnelles (par exemple les troubles musculo-squelettiques, les atteintes auditives dues au bruit, certaines affections respiratoires).</li>\n</ul>\n<p>Pour comparer la sinistralité d'une entreprise d'une année à l'autre ou avec son secteur, on utilise des indicateurs :</p>\n<table>\n<thead><tr><th>Indicateur</th><th>Formule</th><th>Ce qu'il mesure</th></tr></thead>\n<tbody>\n<tr><td>Taux de fréquence (TF)</td><td>Nombre d'AT avec arrêt x 1 000 000 / nombre d'heures travaillées</td><td>Nombre d'accidents par million d'heures</td></tr>\n<tr><td>Taux de gravité (TG)</td><td>Nombre de journées perdues x 1 000 / nombre d'heures travaillées</td><td>Journées perdues pour 1 000 heures travaillées</td></tr>\n<tr><td>Indice de fréquence (IF)</td><td>Nombre d'AT avec arrêt x 1 000 / effectif salarié</td><td>Accidents pour 1 000 salariés</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une entreprise de façonnage de 60 salariés a totalisé 96 000 heures travaillées dans l'année ; elle a connu 4 accidents avec arrêt, qui ont entraîné 130 journées perdues. 1) TF = 4 x 1 000 000 / 96 000 = 41,7. 2) TG = 130 x 1 000 / 96 000 = 1,35. 3) IF = 4 x 1 000 / 60 = 66,7. On compare ces valeurs à celles de l'année précédente et aux statistiques du secteur publiées par l'Assurance maladie - risques professionnels.</div>\n<p>Les accidents ont des <strong>coûts directs</strong> (cotisations AT-MP de l'entreprise, qui dépendent de sa sinistralité) et des <strong>coûts indirects</strong>, souvent plus élevés : remplacement du salarié, formation d'un remplaçant, production perdue, matériel endommagé, dégradation du climat social.</p>\n"
      },
      {
       "titre": "Les acteurs et l'organisation de la prévention",
       "contenu": "\n<p>L'<strong>employeur</strong> a une obligation de sécurité : il doit évaluer les risques et prendre les mesures nécessaires pour protéger la santé physique et mentale des salariés. Il consigne l'évaluation des risques dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP), qui recense les risques par unité de travail et le programme d'actions de prévention.</p>\n<table>\n<thead><tr><th>Acteurs internes</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Employeur et encadrement</td><td>Évaluer, organiser, former, faire appliquer</td></tr>\n<tr><td>Salariés</td><td>Respecter les consignes, prendre soin de leur sécurité et de celle des autres, signaler les dangers ; droit d'alerte et de retrait en cas de danger grave et imminent</td></tr>\n<tr><td>Comité social et économique (CSE)</td><td>Représentants du personnel, consultés sur la santé et la sécurité, enquêtes après accident</td></tr>\n<tr><td>Salariés désignés compétents en prévention, sauveteurs secouristes du travail (SST)</td><td>Appui à la prévention, premiers secours</td></tr>\n</tbody>\n</table>\n<table>\n<thead><tr><th>Acteurs externes</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Service de prévention et de santé au travail (médecin du travail, infirmiers, préventeurs)</td><td>Suivi médical, conseil sur les postes</td></tr>\n<tr><td>Inspection du travail</td><td>Contrôle du respect de la réglementation</td></tr>\n<tr><td>Caisses régionales de l'Assurance maladie (service prévention)</td><td>Conseil, aides financières, statistiques</td></tr>\n<tr><td>INRS</td><td>Études, guides et brochures de prévention</td></tr>\n</tbody>\n</table>\n<p>Les formations de prévention utiles au métier sont notamment la formation <strong>PRAP</strong> (prévention des risques liés à l'activité physique), la formation de <strong>sauveteur secouriste du travail</strong>, l'<strong>habilitation électrique</strong> pour les interventions de maintenance et l'autorisation de conduite des chariots automoteurs.</p>\n"
      },
      {
       "titre": "Analyser un accident : l'arbre des causes",
       "contenu": "\n<p>L'<strong>arbre des causes</strong> est une méthode d'analyse qui part de l'accident (le fait ultime) et remonte, en posant pour chaque fait la question « qu'a-t-il fallu pour que ce fait se produise ? », jusqu'aux faits initiaux. Elle ne cherche pas un coupable mais l'ensemble des faits qui se sont combinés. Elle commence par le <strong>recueil des faits</strong>, objectifs et précis, sans interprétation, sur les lieux et rapidement après l'accident.</p>\n<p>Exemple. Un conducteur de plieuse s'est écrasé deux doigts entre deux rouleaux en retirant une feuille coincée. Faits recueillis : les bourrages étaient fréquents depuis le matin ; le papier, livré la veille d'un entrepôt froid, présentait des bords ondulés ; le carter qui protège l'entrée des rouleaux avait été retiré par l'équipe précédente pour faciliter les dégagements ; le conducteur, intérimaire depuis deux jours, n'avait pas été formé à la procédure de dégagement ; la machine tournait en marche lente au moment de l'accident ; le travail était urgent.</p>\n<table>\n<thead><tr><th>Fait</th><th>Ce qu'il a fallu (antécédents)</th></tr></thead>\n<tbody>\n<tr><td>Doigts écrasés (fait ultime)</td><td>Main dans la zone de happement et rouleaux en mouvement</td></tr>\n<tr><td>Main dans la zone de happement</td><td>Feuille coincée à retirer, carter retiré, conducteur non formé à la procédure</td></tr>\n<tr><td>Rouleaux en mouvement</td><td>Dégagement tenté en marche lente au lieu de machine arrêtée, urgence du travail</td></tr>\n<tr><td>Feuille coincée</td><td>Bords ondulés du papier</td></tr>\n<tr><td>Bords ondulés</td><td>Papier non acclimaté après un stockage au froid</td></tr>\n<tr><td>Carter retiré</td><td>Carter jugé gênant, absence de vérification à la prise de poste</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter l'arbre des causes. 1) Repérer les faits sur lesquels on peut agir. 2) Proposer pour chacun une mesure, en privilégiant celles qui agissent à la source et collectivement : procédure d'acclimatation du papier, carter verrouillé et associé à un interrupteur de sécurité (la machine ne démarre pas sans lui), formation au poste de tout nouvel arrivant, procédure de dégagement des bourrages machine arrêtée, vérification des protecteurs à la prise de poste. 3) Choisir les mesures, désigner un responsable et une échéance. 4) Mettre à jour le DUERP.</div>\n"
      },
      {
       "titre": "Les risques spécifiques et leur prévention",
       "contenu": "\n<p><strong>Machines.</strong> Massicots, plieuses, brocheuses, platines et filmeuses présentent des risques de coupure, d'écrasement, de happement et de brûlure (fondoirs, barres de soudure, plaques de dorure). La prévention repose sur des protecteurs fixes ou mobiles verrouillés, des dispositifs de protection (barrières immatérielles, commandes bimanuelles), des arrêts d'urgence accessibles, des procédures de consignation et la formation.</p>\n<p><strong>Bruit.</strong> Les chaînes de brochage, les compresseurs et les plieuses à grande vitesse sont bruyants. Le Code du travail fixe des valeurs d'exposition quotidienne sur 8 heures : à partir de 80 dB(A), l'employeur met des protections auditives à disposition et informe ; à partir de 85 dB(A), leur port est obligatoire et la zone est signalée ; 87 dB(A) est une valeur limite à ne jamais dépasser, compte tenu des protections portées. La priorité reste la réduction à la source (capotages, entretien, éloignement des compresseurs).</p>\n<p><strong>Produits chimiques.</strong> Colles (en particulier PUR à isocyanates), solvants de nettoyage, lubrifiants, encres de jet d'encre. On lit l'étiquette et la <strong>fiche de données de sécurité</strong> (FDS), on utilise le captage à la source et les équipements de protection indiqués, on stocke les produits dans des armoires adaptées avec bacs de rétention, et on remplace les produits dangereux par des produits moins dangereux quand c'est possible.</p>\n<p><strong>Manutention et postures.</strong> Les rames et paquets de papier, les bobines de film et les cartons sont lourds ; les gestes de margeage et de réception sont répétitifs. Le Code du travail limite les charges portées et impose d'organiser le travail pour les réduire. Les moyens de prévention sont les tables élévatrices, les retourneurs de pile, les élévateurs de margeurs, les palettiseurs, et l'organisation du poste pour travailler entre hanches et épaules.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la circulation des chariots et transpalettes électriques dans l'atelier, au milieu des piétons et des palettes, est une source importante d'accidents. Seules les personnes autorisées par l'employeur conduisent un chariot automoteur, et les allées piétonnes doivent rester dégagées.</div>\n"
      },
      {
       "titre": "Déchets et consommations de l'atelier",
       "contenu": "\n<p>L'atelier de façonnage produit beaucoup de déchets, dont la majorité est valorisable si elle est bien triée :</p>\n<table>\n<thead><tr><th>Déchet</th><th>Filière habituelle</th><th>Précaution</th></tr></thead>\n<tbody>\n<tr><td>Rognures et gâches de papier</td><td>Aspiration centralisée, mise en balles, recyclage en papeterie</td><td>Séparer papier non imprimé, imprimé, pelliculé, collé : leur valeur et leur recyclabilité diffèrent</td></tr>\n<tr><td>Cartons, mandrins, palettes bois</td><td>Recyclage, réemploi des palettes</td><td>Ne pas mélanger avec les gâches de papier</td></tr>\n<tr><td>Films plastiques d'emballage</td><td>Collecte séparée pour recyclage</td><td>Films propres, sans étiquettes ni papier</td></tr>\n<tr><td>Restes de colles, chiffons souillés, solvants, aérosols, huiles usagées, cartouches de jet d'encre</td><td>Déchets dangereux, collecteur agréé</td><td>Conteneurs identifiés, suivi par bordereau, traçabilité</td></tr>\n</tbody>\n</table>\n<p>Les consommations d'<strong>énergie</strong> sont aussi un enjeu : l'air comprimé est une énergie chère dont une part importante est souvent perdue en fuites ; les fondoirs de colle, tunnels de rétraction et barres de soudure consomment beaucoup lorsqu'ils restent en chauffe pendant les arrêts. Des gestes simples (mise en veille, signalement des fuites, extinction en fin de poste selon les consignes) réduisent ces pertes.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une aspiration centralisée des rognures, reliée à une presse à balles, permet de vendre le papier trié à un recycleur. Un pelliculé jeté dans la benne du papier blanc non imprimé fait baisser la qualité et le prix de toute la balle : le tri à la source au poste de travail a une valeur économique directe.</div>\n"
      },
      {
       "titre": "Labels et certifications environnementales",
       "contenu": "\n<p>Plusieurs démarches permettent aux entreprises graphiques de prouver leurs engagements environnementaux :</p>\n<ul>\n<li>la marque <strong>Imprim'Vert</strong>, créée par le réseau des chambres de métiers, engage l'entreprise sur des critères comme l'élimination conforme des déchets dangereux, la sécurisation du stockage des liquides dangereux, la non-utilisation de produits étiquetés toxiques, la sensibilisation des salariés et des clients et le suivi des consommations d'énergie ;</li>\n<li>les certifications de <strong>gestion forestière</strong> <strong>FSC</strong> et <strong>PEFC</strong> garantissent que le bois utilisé pour fabriquer le papier provient de forêts gérées durablement. Pour qu'un produit fini porte leur logo, chaque entreprise qui le transforme (imprimeur, façonnier) doit être certifiée pour la <strong>chaîne de contrôle</strong> : elle identifie les lots certifiés, les sépare et les trace dans ses documents ;</li>\n<li>la norme <strong>ISO 14001</strong> définit les exigences d'un système de management environnemental, sur le modèle de l'ISO 9001.</li>\n</ul>\n<p>Enfin, l'<strong>écoconception</strong> des imprimés concerne directement le façonnage : choisir une reliure sans pelliculage, un vernis plutôt qu'un film, un film de routage en papier ou l'absence de film, un format qui réduit les chutes, des colles compatibles avec le recyclage. Le façonnier peut conseiller le client sur ces choix.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une certification FSC ou PEFC se perd en un instant si un lot certifié est mélangé avec un lot non certifié sans traçabilité. Au poste, cela signifie : respecter l'identification des palettes, ne pas compléter une production certifiée avec un papier d'un autre lot sans accord, et reporter les numéros de lot sur la fiche de suivi.</div>\n"
      }
     ],
     "points_cles": [
      "AT, accident de trajet et maladie professionnelle sont définis et indemnisés différemment.",
      "TF = AT avec arrêt x 1 000 000 / heures travaillées ; TG = journées perdues x 1 000 / heures travaillées.",
      "Le DUERP recense les risques par unité de travail et le programme de prévention.",
      "L'arbre des causes remonte de l'accident aux faits initiaux, sans chercher de coupable.",
      "Les mesures de prévention privilégient l'action à la source et la protection collective.",
      "Bruit : 80 dB(A) protections à disposition, 85 dB(A) port obligatoire, 87 dB(A) valeur limite.",
      "Les colles PUR, solvants et lubrifiants se manipulent selon leur fiche de données de sécurité.",
      "Le tri des rognures et des déchets dangereux a une valeur économique et réglementaire.",
      "FSC et PEFC exigent une chaîne de contrôle certifiée chez chaque transformateur."
     ],
     "lexique": [
      {
       "terme": "Accident du travail",
       "def": "Accident survenu par le fait ou à l'occasion du travail."
      },
      {
       "terme": "Maladie professionnelle",
       "def": "Maladie résultant d'une exposition prolongée à un risque professionnel."
      },
      {
       "terme": "Taux de fréquence",
       "def": "Nombre d'accidents avec arrêt par million d'heures travaillées."
      },
      {
       "terme": "Taux de gravité",
       "def": "Nombre de journées perdues pour 1 000 heures travaillées."
      },
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels."
      },
      {
       "terme": "Arbre des causes",
       "def": "Méthode d'analyse d'accident qui relie le fait ultime aux faits qui l'ont rendu possible."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité d'un produit chimique, en 16 rubriques."
      },
      {
       "terme": "Imprim'Vert",
       "def": "Marque environnementale des entreprises de l'impression et des industries graphiques."
      },
      {
       "terme": "Chaîne de contrôle",
       "def": "Système de traçabilité qui permet d'apposer un logo FSC ou PEFC sur un produit."
      },
      {
       "terme": "Écoconception",
       "def": "Prise en compte de l'environnement dès la conception du produit."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Analyser les documents de fabrication",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bfpi-doc-dossier-fabrication",
     "titre": "Analyser un dossier de fabrication et un descriptif d'atelier",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les documents qui composent un dossier de fabrication de façonnage et l'information portée par chacun.",
      "Extraire les données techniques utiles et contrôler leur cohérence (pagination, formats, épaisseurs, sens des fibres).",
      "Confronter le produit demandé aux capacités des machines décrites dans un descriptif d'atelier.",
      "Rédiger une analyse structurée : processus retenu, données calculées, points de vigilance."
     ],
     "sections": [
      {
       "titre": "Le document et sa place à l'épreuve",
       "contenu": "\n<p>À l'épreuve écrite d'étude d'une situation de production, comme en entreprise, le point de départ est presque toujours un <strong>dossier de fabrication</strong>. Il réunit plusieurs pièces, désignées dans un sujet par des références (DT1, DT2... pour documents techniques, DR pour documents réponses) :</p>\n<ul>\n<li>la <strong>fiche de fabrication</strong> ou <strong>descriptif technique du produit</strong> : définition du produit et données de fabrication ;</li>\n<li>le <strong>descriptif de l'atelier</strong> : liste des machines disponibles avec leurs caractéristiques principales ;</li>\n<li>éventuellement des <strong>fiches techniques de machines</strong>, des extraits de notices, des plannings, des relevés de production.</li>\n</ul>\n<p>Le travail demandé consiste à exploiter ces pièces pour prendre des décisions de production : choisir les machines et l'ordre des opérations, calculer des quantités et des réglages, repérer les risques de non-conformité. Ce chapitre présente une méthode générale de lecture ; les chapitres suivants détaillent les documents spécialisés (schéma de pliage, plan de coupe, planning, FDS, routage).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un dossier de fabrication se lit d'abord en entier, rapidement, avant de répondre à quoi que ce soit. Beaucoup d'informations nécessaires à une question se trouvent dans un autre document que celui cité par la question.</div>\n"
      },
      {
       "titre": "Structure et vocabulaire d'un descriptif technique",
       "contenu": "\n<p>Un descriptif technique de produit façonné est généralement organisé en rubriques :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th><th>Vocabulaire à maîtriser</th></tr></thead>\n<tbody>\n<tr><td>Identification</td><td>Client, titre du travail, référence de commande, numéro d'OF, délais</td><td>OF, BàT, BàF, date de livraison ou de dépôt</td></tr>\n<tr><td>Produit fini</td><td>Format fini, pagination, type de reliure, quantité</td><td>Format fini, format à plat, pagination, DCC, piqûre à cheval, reliure</td></tr>\n<tr><td>Intérieur</td><td>Composition en cahiers, papier, impression, format de feuille</td><td>Cahier, signature, grammage, main, sens des fibres</td></tr>\n<tr><td>Couverture</td><td>Papier, impression, finitions</td><td>Pelliculage, vernis sélectif, rainage, réserve</td></tr>\n<tr><td>Façonnage</td><td>Opérations, rognes, fraisage, collage, conditionnement</td><td>Rogne, blanc de fraisage, grecquage, trilame</td></tr>\n<tr><td>Livraison</td><td>Conditionnement, adresses, transport</td><td>Paquet, carton, palette, routage</td></tr>\n</tbody>\n</table>\n<p>Le <strong>descriptif d'atelier</strong> donne pour chaque machine les caractéristiques limitantes : formats minimal et maximal, grammages admissibles, nombre de poches, de couteaux ou de margeurs, épaisseur maximale de bloc, cadence nominale, équipements particuliers (rainage, colle PUR, trilame en ligne).</p>\n"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un dossier de fabrication en six étapes. 1) <strong>Identifier le produit</strong> : en une phrase, dire ce qu'est le produit (par exemple « brochure de 96 pages en dos carré collé sous couverture pelliculée »). 2) <strong>Relever les données chiffrées</strong> dans un tableau personnel : formats, pagination, cahiers, papiers (grammage, épaisseur), quantité, rognes, fraisage. 3) <strong>Contrôler la cohérence</strong> : la pagination correspond-elle aux cahiers ? Le format à plat correspond-il au format fini augmenté des rognes et du fraisage ? Le sens des fibres est-il parallèle au dos ? 4) <strong>Construire le processus</strong> : liste ordonnée des opérations, de la réception des feuilles à l'expédition. 5) <strong>Affecter les machines</strong> en vérifiant pour chacune format, grammage, nombre de postes et équipements. 6) <strong>Lister les points de vigilance</strong> : contraintes de séchage, de sens des fibres, de pelliculage, de délai, de sécurité.</div>\n<p>À chaque étape, on note la source de chaque donnée (par exemple « DT1, rubrique couverture ») : cela évite les erreurs de recopie et permet de justifier les réponses.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les pièges classiques d'un dossier sont la confusion entre pages et feuilles, entre format fini et format à plat, l'oubli de la couverture dans la pagination ou dans l'épaisseur, l'oubli du fraisage dans le format à plat des cahiers, et la confusion entre cadence nominale et cadence pratique. Une donnée qui semble manquer est souvent calculable à partir de deux autres.</div>\n"
      },
      {
       "titre": "Exemple commenté : le dossier",
       "contenu": "\n<p>Document DT1 : descriptif technique du produit.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Données</th></tr></thead>\n<tbody>\n<tr><td>Produit</td><td>Guide de randonnée, 96 pages intérieures et couverture 4 pages, dos carré collé PUR</td></tr>\n<tr><td>Quantité</td><td>6 000 exemplaires ; passe façonnage 4 %</td></tr>\n<tr><td>Format fini</td><td>135 x 210 mm (largeur x hauteur), à la française</td></tr>\n<tr><td>Intérieur</td><td>6 cahiers de 16 pages, couché mat 90 g/m², épaisseur 0,075 mm, quadri recto verso</td></tr>\n<tr><td>Feuilles imprimées</td><td>640 x 900 mm, sens des fibres parallèle au côté de 900 mm ; chaque feuille porte 2 cahiers différents</td></tr>\n<tr><td>Façonnage intérieur</td><td>Rognes 3 mm en tête, en pied et au devant ; fraisage 3 mm et grecquage</td></tr>\n<tr><td>Couverture</td><td>Couché 300 g/m², épaisseur 0,32 mm, pelliculage mat recto, réserve de pelliculage sur le dos ; 4 rainures</td></tr>\n<tr><td>Conditionnement</td><td>Paquets de 20 sous film, cartons de 4 paquets, palette Europe</td></tr>\n</tbody>\n</table>\n<p>Document DT2 : extrait du descriptif d'atelier.</p>\n<table>\n<thead><tr><th>Machine</th><th>Caractéristiques</th></tr></thead>\n<tbody>\n<tr><td>Massicot programmable</td><td>Largeur de coupe 115 cm</td></tr>\n<tr><td>Plieuse mixte</td><td>4 poches, 2 couteaux ; format de feuille maximal 52 x 74 cm ; molettes de perforation</td></tr>\n<tr><td>Plieuse à poches</td><td>6 poches ; format maximal 54 x 78 cm ; arbres de rainage</td></tr>\n<tr><td>Chaîne de brochage</td><td>24 margeurs ; fondoirs EVA et PUR ; épaisseur de bloc 2 à 50 mm ; trilame en ligne</td></tr>\n<tr><td>Encarteuse-piqueuse</td><td>8 margeurs, trilame</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1) Identification.</strong> Il s'agit d'une brochure de 96 pages intérieures en dos carré collé PUR, sous couverture souple pelliculée mat, tirée à 6 000 exemplaires.</p>\n<p><strong>2) Cohérence de la pagination.</strong> 6 cahiers x 16 pages = 96 pages : cohérent. Les cahiers sont juxtaposés (DCC), donc paginés 1-16, 17-32... jusqu'à 81-96.</p>\n<p><strong>3) Format à plat d'un cahier.</strong> Chaque page occupe dans l'imposition 135 + 3 (rogne de devant) + 3 (fraisage) = 141 mm de large et 210 + 3 + 3 = 216 mm de haut. Un cahier de 16 pages présente 8 pages par face, en 4 colonnes et 2 rangées : 4 x 141 = 564 mm et 2 x 216 = 432 mm. Deux cahiers tiennent sur la feuille de 640 x 900 mm (2 x 432 = 864 mm sur 900 ; 564 mm sur 640). Après une coupe en deux au massicot, chaque demi-feuille mesure 640 x 450 mm.</p>\n<p><strong>4) Compatibilité avec la plieuse mixte.</strong> 640 x 450 mm entre dans le format maximal de 74 x 52 cm. Le cahier se plie en trois plis croisés (un pli en poche puis deux plis au couteau), avec perforation pour évacuer l'air.</p>\n<p><strong>5) Sens des fibres.</strong> Les fibres sont parallèles au côté de 900 mm, donc au côté de 450 mm de la demi-feuille, donc à la dimension de 432 mm du cahier à plat, c'est-à-dire à la hauteur des pages. Le dos étant parallèle à la hauteur, les fibres sont parallèles au dos : conforme.</p>\n<p><strong>6) Quantités.</strong> 6 000 x 1,04 = 6 240 exemplaires de chaque cahier, donc 6 240 feuilles par forme imprimée. Les 6 cahiers étant répartis par 2 sur 3 formes, l'atelier doit recevoir 3 x 6 240 = 18 720 feuilles de 640 x 900 mm.</p>\n<p><strong>7) Épaisseur du dos.</strong> 96 pages = 48 feuilles ; 48 x 0,075 = 3,6 mm. Avec la couverture : 3,6 + 2 x 0,32 = 4,24 mm. Rainures de dos écartées de 3,6 mm (plus une légère tolérance validée par maquette). L'épaisseur est dans la plage de la chaîne (2 à 50 mm).</p>\n<p><strong>8) Processus.</strong> Coupe des feuilles en deux (massicot) ; pliage des 6 cahiers (plieuse mixte) ; assemblage, fraisage, grecquage, collage PUR, mise en couverture et rogne trois côtés (chaîne de brochage avec 6 margeurs de cahiers) ; temps de polymérisation avant contrôle d'arrachement définitif ; mise en paquets, cartons et palette.</p>\n<p><strong>9) Points de vigilance.</strong> Papier couché mat : grecquage indispensable, aspiration du fraisage. Colle PUR : mesures de la FDS, purge du fondoir. Couverture pelliculée : vérifier la réserve au dos et le comportement du pelliculage au rainage. Pliage : encre sèche avant pliage, contrôle des folios.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> cette analyse est exactement celle que fait un chef d'atelier en recevant un nouvel OF. Elle se termine par une liste de questions au service fabrication s'il reste des doutes : ici, par exemple, la durée de stockage avant livraison compatible avec la polymérisation de la colle PUR.</div>\n"
      }
     ],
     "points_cles": [
      "Un dossier de fabrication réunit descriptif du produit, descriptif d'atelier et documents complémentaires.",
      "On lit tout le dossier avant de répondre, car les données utiles sont réparties entre les documents.",
      "La méthode suit six étapes : identifier, relever, contrôler la cohérence, construire le processus, affecter les machines, lister les vigilances.",
      "Le format à plat d'un cahier se calcule à partir du format fini, des rognes et du fraisage.",
      "La compatibilité machine se vérifie sur le format, le grammage, le nombre de postes et l'épaisseur.",
      "Le sens des fibres se suit de la feuille au cahier jusqu'au dos du produit.",
      "Les quantités tiennent compte de la passe et du nombre de cahiers par feuille.",
      "Chaque donnée utilisée est rattachée à sa source pour justifier la réponse."
     ],
     "lexique": [
      {
       "terme": "Dossier de fabrication",
       "def": "Ensemble des documents qui définissent un travail et les moyens de le réaliser."
      },
      {
       "terme": "Descriptif technique",
       "def": "Document qui définit le produit : formats, pagination, matières, finitions, quantité."
      },
      {
       "terme": "Descriptif d'atelier",
       "def": "Liste des machines disponibles avec leurs caractéristiques limitantes."
      },
      {
       "terme": "DT",
       "def": "Document technique fourni dans un sujet ou un dossier."
      },
      {
       "terme": "Forme imprimée",
       "def": "Ensemble des pages imprimées ensemble sur une même feuille."
      },
      {
       "terme": "À la française",
       "def": "Orientation d'un document dont la hauteur est supérieure à la largeur, relié sur le grand côté."
      },
      {
       "terme": "Demi-feuille",
       "def": "Feuille d'impression coupée en deux avant pliage."
      },
      {
       "terme": "Format maximal",
       "def": "Plus grand format de feuille qu'une machine accepte."
      }
     ]
    },
    {
     "id": "bfpi-doc-imposition-pliage",
     "titre": "Lire une imposition et un schéma de pliage",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Lire une feuille d'imposition décrite page par page et vérifier sa cohérence.",
      "Interpréter un schéma de pliage (pliogramme) : ordre, type et sens des plis.",
      "Déterminer les organes de pliage à utiliser et le nombre d'épaisseurs à chaque pli.",
      "Situer sur la feuille les marques de collationnement, la signature et l'angle de marge."
     ],
     "sections": [
      {
       "titre": "Les documents et leur rôle",
       "contenu": "\n<p>Deux documents décrivent comment une feuille imprimée devient un cahier :</p>\n<ul>\n<li>la <strong>feuille d'imposition</strong> (ou schéma d'imposition) indique, pour le recto et le verso de la feuille, la position de chaque page, son numéro (folio) et son orientation (tête en haut ou tête en bas) ;</li>\n<li>le <strong>schéma de pliage</strong> (ou pliogramme) indique l'ordre des plis, leur position, leur sens et la manière de présenter la feuille à la machine.</li>\n</ul>\n<p>Ces deux documents sont indissociables : une imposition n'est correcte que pour un schéma de pliage donné. Le <strong>chemin de fer</strong>, troisième document, représente toutes les pages du produit dans l'ordre de lecture et indique leur répartition en cahiers ; il sert à vérifier que chaque page est imposée une fois et une seule.</p>\n<p>Dans un sujet ou un dossier, l'imposition est représentée par un tableau ou un dessin de la feuille divisée en cases ; les pages tête en bas sont signalées par un numéro inversé, une flèche ou la mention « tête en bas ». Le schéma de pliage est un dessin en plusieurs vignettes successives, ou une liste de plis numérotés avec leur type (parallèle, croisé) et leur organe (poche, couteau).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> deux pages qui se touchent tête contre tête sur une feuille sont séparées après pliage par le pli de tête, qui sera ouvert par la rogne de tête. Deux pages qui se touchent par leur petit fond sont séparées par un pli de dos.</div>\n"
      },
      {
       "titre": "Méthode de lecture d'une imposition",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier une imposition de cahier en cinq étapes. 1) Compter les cases de chaque face : pour un cahier de N pages, il y a N / 2 pages par face. 2) Vérifier que chaque numéro de 1 à N apparaît une fois et une seule (recto et verso réunis). 3) Vérifier les vis-à-vis : dans un cahier de N pages, deux pages adjacentes de part et d'autre d'un pli de dos ont une somme égale à N + 1 (pour un cahier de 16 pages, 17). 4) Vérifier le recto-verso : la page au dos d'une page impaire est la page suivante (au dos de la page 1 se trouve la page 2) ; comme la feuille est retournée, elle apparaît dans la colonne symétrique. 5) Vérifier les orientations : les pages d'une même rangée ont la même orientation ; les rangées qui se font face par la tête sont tête-bêche.</div>\n<p>Cette vérification ne prend que quelques minutes et détecte des erreurs qui, sinon, ne seraient visibles qu'après pliage : page à l'envers, pages interverties, numérotation fausse. En production, on la complète par le pliage à la main d'une feuille imprimée (la <strong>maquette de pliage</strong>) avant de lancer la machine.</p>\n<p>Pour un produit de plusieurs cahiers en dos carré, la somme constante s'applique cahier par cahier en ramenant les folios au cahier : pour le deuxième cahier (pages 17 à 32), on soustrait 16 à chaque folio avant de faire la somme, ou l'on vérifie que les vis-à-vis valent 17 + 32 = 49.</p>\n"
      },
      {
       "titre": "Méthode de lecture d'un schéma de pliage",
       "contenu": "\n<p>Pour chaque pli, on relève :</p>\n<ul>\n<li>sa <strong>position</strong> (au milieu, ou à une cote donnée depuis un bord) ;</li>\n<li>son <strong>type</strong> : parallèle au pli précédent ou croisé (perpendiculaire) ;</li>\n<li>son <strong>sens</strong> : le volet passe-t-il devant ou derrière ? Sur un dessin, cela se voit au sens de la flèche ;</li>\n<li>l'<strong>organe</strong> qui le réalise : poche ou couteau, et le numéro de la station.</li>\n</ul>\n<p>On en déduit ensuite les réglages : butées de poches, nombre de poches ouvertes et fermées, couteaux en service, écartement des rouleaux (nombre d'épaisseurs), position des molettes de perforation et de rainage, et la position de la feuille au margeur (quel bord en avant, quelle face dessus, quel côté contre l'équerre).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un schéma de pliage dessiné depuis le recto peut se lire à l'envers si on le regarde depuis le verso. Il faut toujours repérer sur le schéma la page de référence (en général la page 1 et sa position finale) et l'angle de marge, puis les retrouver sur la feuille réelle avant de marger. Sinon, on obtient un cahier plié en sens inverse, aux pages dans le désordre.</div>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Document : imposition d'un cahier de 16 pages, format à plat 564 x 432 mm, 4 colonnes de 141 mm et 2 rangées de 216 mm. Les pages de la rangée du haut sont tête en bas. Angle de marge : coin inférieur gauche du recto (bord de pinces en bas, taquet latéral à gauche).</p>\n<table>\n<thead><tr><th>Recto</th><th>Colonne 1</th><th>Colonne 2</th><th>Colonne 3</th><th>Colonne 4</th></tr></thead>\n<tbody>\n<tr><td>Rangée haute (tête en bas)</td><td>5</td><td>12</td><td>9</td><td>8</td></tr>\n<tr><td>Rangée basse (tête en haut)</td><td>4</td><td>13</td><td>16</td><td>1</td></tr>\n</tbody>\n</table>\n<table>\n<thead><tr><th>Verso</th><th>Colonne 1</th><th>Colonne 2</th><th>Colonne 3</th><th>Colonne 4</th></tr></thead>\n<tbody>\n<tr><td>Rangée haute (tête en bas)</td><td>7</td><td>10</td><td>11</td><td>6</td></tr>\n<tr><td>Rangée basse (tête en haut)</td><td>2</td><td>15</td><td>14</td><td>3</td></tr>\n</tbody>\n</table>\n<p>Schéma de pliage, feuille vue côté recto :</p>\n<table>\n<thead><tr><th>Pli</th><th>Position</th><th>Type</th><th>Sens</th><th>Organe</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Verticale, entre colonnes 2 et 3 (milieu de la feuille)</td><td>Pli simple</td><td>La moitié gauche passe derrière</td><td>Poche 1</td></tr>\n<tr><td>2</td><td>Horizontale, entre les deux rangées</td><td>Croisé</td><td>La rangée haute passe derrière</td><td>Couteau 1</td></tr>\n<tr><td>3</td><td>Verticale, entre les pages 16 et 1</td><td>Croisé</td><td>La page 16 passe derrière</td><td>Couteau 2</td></tr>\n</tbody>\n</table>\n<p>Une marque de collationnement est imprimée au recto, à cheval sur la ligne du pli 3 entre les pages 16 et 1 ; la signature « 1 » figure en pied de la page 1.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1) Nombre de pages.</strong> 8 pages au recto et 8 au verso : 16 pages, et les numéros 1 à 16 apparaissent chacun une fois. Conforme.</p>\n<p><strong>2) Vis-à-vis.</strong> Recto, rangée basse : 4 + 13 = 17 et 16 + 1 = 17 ; rangée haute : 5 + 12 = 17 et 9 + 8 = 17. Verso : 2 + 15, 14 + 3, 7 + 10, 11 + 6 font tous 17. Conforme pour un cahier de 16 pages.</p>\n<p><strong>3) Recto-verso.</strong> La page 1 est en colonne 4 au recto ; la feuille retournée, la colonne 4 devient la colonne 1 : on y trouve la page 2. De même, au dos de 16 (colonne 3) se trouve 15 (colonne 2), au dos de 8 (colonne 4, haut) se trouve 7 (colonne 1, haut). Conforme.</p>\n<p><strong>4) Résultat du pliage.</strong> Après le pli 1, on voit au recto les colonnes 3 et 4. Après le pli 2, on voit 16 et 1. Après le pli 3, on voit la page 1 en couverture du cahier. Le pli 3 forme le dos (à gauche de la page 1, reliure à la française) ; le pli 2 forme la tête fermée ; le pli 1 se retrouve au devant, fermé. Il faut donc rogner tête et devant pour ouvrir le cahier, ce qui est prévu par les rognes de 3 mm.</p>\n<p><strong>5) Organes et épaisseurs.</strong> Pli 1 en poche : une seule poche ouverte, butée à 282 mm (moitié de 564 mm), rouleaux réglés à 1 épaisseur à l'entrée et 2 épaisseurs après le pli. Pli 2 au couteau 1 : 4 épaisseurs après le pli. Pli 3 au couteau 2 : 8 épaisseurs. Des molettes de perforation sont à placer avant les plis 2 et 3 pour évacuer l'air.</p>\n<p><strong>6) Sens des fibres et marques.</strong> Le dos (pli 3) est vertical, parallèle à la hauteur des pages : les fibres doivent être verticales sur ce schéma, ce que confirme le descriptif. La marque de collationnement est sur la ligne du pli 3, côté extérieur : elle apparaîtra sur le dos du cahier, visible après assemblage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant le BàF, le conducteur ouvre le premier cahier plié machine et vérifie la succession des folios de 1 à 16, puis compare la position des pages à la maquette de pliage réalisée à la main. Ce double contrôle évite de plier des milliers de feuilles avec une poche ou un couteau mal choisi.</div>\n"
      }
     ],
     "points_cles": [
      "L'imposition donne la position et l'orientation de chaque page ; le schéma de pliage, l'ordre et le sens des plis.",
      "Une imposition n'est correcte que pour un schéma de pliage donné.",
      "Dans un cahier de N pages, deux pages en vis-à-vis de part et d'autre d'un pli de dos ont une somme de N + 1.",
      "Au dos d'une page impaire se trouve la page suivante, dans la colonne symétrique.",
      "Chaque pli se caractérise par sa position, son type, son sens et l'organe qui le réalise.",
      "Le nombre d'épaisseurs double à chaque pli simple : 2, 4, 8.",
      "La page de référence et l'angle de marge permettent de présenter correctement la feuille au margeur.",
      "Une maquette de pliage à la main valide l'imposition avant la production."
     ],
     "lexique": [
      {
       "terme": "Feuille d'imposition",
       "def": "Plan de la feuille indiquant la position, le numéro et l'orientation de chaque page."
      },
      {
       "terme": "Schéma de pliage",
       "def": "Représentation de l'ordre, de la position et du sens des plis d'une feuille."
      },
      {
       "terme": "Pliogramme",
       "def": "Autre nom du schéma de pliage."
      },
      {
       "terme": "Chemin de fer",
       "def": "Représentation de toutes les pages d'un produit dans l'ordre de lecture."
      },
      {
       "terme": "Tête-bêche",
       "def": "Disposition de deux pages ou rangées orientées en sens opposés."
      },
      {
       "terme": "Maquette de pliage",
       "def": "Feuille pliée à la main pour vérifier l'imposition et le schéma de pliage."
      },
      {
       "terme": "Petit fond",
       "def": "Marge d'une page du côté du dos."
      },
      {
       "terme": "Pli de tête",
       "def": "Pli fermé situé en tête du cahier, ouvert par la rogne de tête."
      }
     ]
    },
    {
     "id": "bfpi-doc-plan-coupe",
     "titre": "Lire et vérifier un plan de coupe et un programme de massicot",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Lire un plan de coupe : position des poses, fonds perdus, doubles coupes, marges et chutes.",
      "Vérifier un programme de massicot en recalculant les cotes depuis l'angle de marge.",
      "Détecter une erreur de cote et en prévoir les conséquences.",
      "Estimer le nombre de levées, de coupes et le temps de coupe d'un travail."
     ],
     "sections": [
      {
       "titre": "Le plan de coupe et ses informations",
       "contenu": "\n<p>Le <strong>plan de coupe</strong> est le dessin coté de la feuille imprimée qui montre la position de chaque pose, les traits de coupe et l'ordre des coupes. Il est établi par le prépresse à partir de l'imposition, ou par le conducteur de massicot lui-même. Il est souvent accompagné d'un <strong>programme de coupe</strong> : la liste des cotes successives à programmer, avec les rotations de pile entre les séries de coupes.</p>\n<p>On y trouve :</p>\n<ul>\n<li>le <strong>format de la feuille</strong> et la position de l'<strong>angle de marge</strong> (bord de pinces, côté du taquet latéral) ;</li>\n<li>le <strong>format fini</strong> des poses et leur nombre en largeur et en hauteur ;</li>\n<li>les <strong>fonds perdus</strong> et les <strong>doubles coupes</strong> entre poses ;</li>\n<li>les <strong>marges</strong> de pinces et de bord, et les <strong>chutes</strong> ;</li>\n<li>les <strong>cotes</strong>, mesurées depuis un bord de référence.</li>\n</ul>\n<p>Les cotes du plan sont mesurées depuis les bords de l'angle de marge. Or, au massicot, une cote est la distance entre le taquet arrière et la lame. Si le bord de référence est contre le taquet arrière, les cotes du plan sont directement les cotes du programme ; après une rotation de 180°, il faut les recalculer depuis le nouveau bord en butée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une cote de programme se vérifie toujours par différence. La différence entre deux cotes qui encadrent une pose doit être égale au format fini ; la différence entre deux cotes qui encadrent une double coupe doit être égale à la double coupe prévue.</div>\n"
      },
      {
       "titre": "Méthode de vérification d'un programme",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un programme de coupe en cinq étapes. 1) Repérer sur le plan l'angle de marge et le bord mis contre le taquet arrière à chaque phase. 2) Calculer, depuis ce bord, la position de début et de fin de chaque pose : marge + fond perdu pour la première, puis ajouter format fini, double coupe, format fini... 3) Écrire la liste des cotes attendues dans l'ordre décroissant (on coupe d'abord le plus loin du taquet, les morceaux se détachant côté opérateur). 4) Comparer ligne par ligne avec le programme fourni, et calculer les différences entre cotes successives. 5) Contrôler la dernière phase : après rotation de 180°, la cote est égale au format fini de la pose qui reste.</div>\n<p>Ce contrôle se fait sur le papier avant la première coupe, puis sur une <strong>pile d'essai</strong> : on mesure chaque pose obtenue au réglet et on vérifie la position des traits de coupe, qui doivent disparaître exactement dans la rogne.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une erreur d'un millimètre sur une double coupe se reporte sur deux poses : l'une est trop grande et garde un liseré de fond perdu du voisin, l'autre est trop petite. Comme le défaut est le même sur toute la levée, il peut concerner des milliers d'exemplaires si la pile d'essai n'est pas mesurée.</div>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Travail : 32 000 cartes postales au format fini 148 x 105 mm, carte couchée 300 g/m² d'épaisseur 0,30 mm, fonds perdus de 3 mm. Feuille imprimée : 720 x 520 mm, 16 poses (4 en largeur, 4 en hauteur), soit 2 000 feuilles nettes.</p>\n<p>Plan de coupe : bord de pinces sur le grand côté de 720 mm, marge de pinces 12 mm. Taquet latéral sur le petit côté gauche, marge de bord 10 mm. Doubles coupes de 6 mm entre poses.</p>\n<p>Programme de coupe fourni par le prépresse :</p>\n<table>\n<thead><tr><th>Phase</th><th>Bord contre le taquet arrière</th><th>Cotes successives (mm)</th></tr></thead>\n<tbody>\n<tr><td>A</td><td>Bord de pinces</td><td>453 - 348 - 342 - 237 - 232 - 126 - 120</td></tr>\n<tr><td>B</td><td>Rotation 180° de la bande restante</td><td>105</td></tr>\n<tr><td>C</td><td>Bandes de 105 mm, côté taquet latéral contre le taquet arrière</td><td>623 - 475 - 469 - 321 - 315 - 167 - 161</td></tr>\n<tr><td>D</td><td>Rotation 180° du dernier morceau</td><td>148</td></tr>\n</tbody>\n</table>\n<p>Consigne : levées de 100 mm de hauteur au maximum.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1) Positions attendues en hauteur</strong> (depuis le bord de pinces). Première rangée : 12 + 3 = 15 mm, fin à 15 + 105 = 120 mm. Puis doubles coupes de 6 mm : rangée 2 de 126 à 231 mm, rangée 3 de 237 à 342 mm, rangée 4 de 348 à 453 mm. Cotes attendues pour la phase A : 453 - 348 - 342 - 237 - 231 - 126 - 120.</p>\n<p><strong>2) Comparaison.</strong> Le programme indique 232 au lieu de 231. Conséquence : après la coupe à 237 (qui libère la rangée 3), la coupe à 232 ne retire que 5 mm de chute, et la rangée 2 mesure 232 - 126 = 106 mm au lieu de 105 mm. Toutes les cartes de la rangée 2, soit un quart de la production (8 000 cartes), auraient 1 mm de trop et un liseré de fond perdu en tête. La cote doit être corrigée à 231.</p>\n<p><strong>3) Phase B.</strong> La rangée 1 (de 15 à 120 mm) reste avec 15 mm de marge côté taquet. Après rotation de 180°, le bord coupé à 120 est contre le taquet ; une coupe à 105 retire la marge. Conforme.</p>\n<p><strong>4) Positions attendues en largeur</strong> (depuis le bord du taquet latéral). Colonne 1 : 10 + 3 = 13 à 161 mm ; colonne 2 : 167 à 315 ; colonne 3 : 321 à 469 ; colonne 4 : 475 à 623. Cotes attendues : 623 - 475 - 469 - 321 - 315 - 167 - 161, puis 148 après rotation. Le programme est conforme pour les phases C et D. Vérification par différences : 623 - 475 = 148, 469 - 321 = 148, 315 - 167 = 148 (poses) ; 475 - 469 = 6, 321 - 315 = 6, 167 - 161 = 6 (doubles coupes).</p>\n<p><strong>5) Levées.</strong> Épaisseur de la pile de 2 000 feuilles (plus la passe) : 2 000 x 0,30 = 600 mm. Avec des levées de 100 mm, il faut 600 / 100 = 6 levées d'environ 333 feuilles.</p>\n<p><strong>6) Nombre de coupes.</strong> Pour une levée : 8 coupes en hauteur (phases A et B), qui donnent 4 bandes. Chaque bande se coupe séparément en largeur (8 coupes), soit 4 x 8 = 32 coupes. Total par levée : 8 + 32 = 40 coupes ; pour 6 levées : 240 coupes.</p>\n<p><strong>7) Temps estimé.</strong> Si l'atelier compte en moyenne 3 coupes par minute manipulations comprises (valeur de l'entreprise), le temps de coupe est 240 / 3 = 80 min, soit 1 h 20 min, auxquelles s'ajoutent le taquage et la mise en paquets.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> quand le programme vient du flux numérique, une erreur de cote provient presque toujours d'une modification manuelle ou d'une mauvaise saisie de la double coupe dans le logiciel d'imposition. Le conducteur qui détecte l'erreur la signale au prépresse pour que le modèle soit corrigé, et pas seulement sur sa machine.</div>\n"
      },
      {
       "titre": "Ce qu'il faut savoir rédiger",
       "contenu": "\n<p>Dans une analyse écrite de plan de coupe, on attend généralement :</p>\n<ul>\n<li>la <strong>liste ordonnée des coupes</strong>, avec le bord en butée et les rotations, présentée dans un tableau ;</li>\n<li>le <strong>calcul justifié</strong> de chaque cote à partir des données du plan (marges, fonds perdus, formats, doubles coupes) ;</li>\n<li>la <strong>détection des anomalies</strong> éventuelles et leurs conséquences chiffrées (nombre de poses concernées, défaut visible) ;</li>\n<li>le <strong>nombre de levées et de coupes</strong>, et éventuellement le temps de coupe ;</li>\n<li>les <strong>consignes de sécurité</strong> propres à l'opération (commande bimanuelle, manipulation des chutes, changement de lame si nécessaire).</li>\n</ul>\n<p>Pour une feuille portant un amalgame (plusieurs travaux différents), on commence par des coupes de <strong>séparation</strong> des travaux, puis on traite chaque travail comme une feuille indépendante. On veille alors à identifier chaque pile séparée par son numéro de travail, pour ne pas confondre des formats proches.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une réponse ne se limite jamais à une liste de cotes. Chaque cote doit pouvoir être justifiée par un calcul simple depuis l'angle de marge, et le résultat se contrôle par les différences entre cotes successives.</div>\n"
      }
     ],
     "points_cles": [
      "Le plan de coupe donne poses, fonds perdus, doubles coupes, marges, chutes et cotes depuis l'angle de marge.",
      "Au massicot, une cote est la distance taquet-lame ; elle doit être recalculée après une rotation de 180°.",
      "On coupe d'abord le plus loin du taquet ; les morceaux se détachent côté opérateur.",
      "La différence entre deux cotes encadrant une pose est égale au format fini.",
      "Une erreur sur une double coupe affecte deux poses et toute la levée.",
      "Le nombre de levées se déduit de l'épaisseur totale de la pile et de la hauteur de levée admise.",
      "Le nombre total de coupes tient compte des bandes coupées séparément.",
      "Une anomalie détectée se signale au prépresse pour corriger la source."
     ],
     "lexique": [
      {
       "terme": "Plan de coupe",
       "def": "Dessin coté de la feuille indiquant poses, traits de coupe et ordre des coupes."
      },
      {
       "terme": "Programme de coupe",
       "def": "Liste ordonnée des cotes et rotations à réaliser au massicot."
      },
      {
       "terme": "Pose",
       "def": "Exemplaire d'un produit imposé sur une feuille qui en porte plusieurs."
      },
      {
       "terme": "Chute",
       "def": "Bande de papier hors format éliminée par la coupe."
      },
      {
       "terme": "Pile d'essai",
       "def": "Petite pile coupée pour vérifier le programme avant la série."
      },
      {
       "terme": "Bande",
       "def": "Partie de feuille obtenue après les coupes dans un sens, portant une rangée de poses."
      },
      {
       "terme": "Liseré",
       "def": "Fine bande indésirable d'une autre couleur ou de blanc sur le bord d'une pose."
      },
      {
       "terme": "Coupe de séparation",
       "def": "Coupe qui sépare les travaux différents d'un amalgame."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Analyser les documents de production, de sécurité et de routage",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bfpi-doc-suivi-production",
     "titre": "Exploiter un planning et une fiche de suivi de production",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Lire un planning d'atelier et une fiche de suivi de production et en extraire les temps et les quantités.",
      "Calculer les indicateurs de performance : cadence réelle, taux de gâche, disponibilité, performance, qualité, TRS.",
      "Comparer le réalisé au prévu (devis, planning) et analyser les écarts.",
      "Rédiger des propositions d'amélioration argumentées à partir des chiffres."
     ],
     "sections": [
      {
       "titre": "Les documents de suivi",
       "contenu": "\n<p>Après la fabrication, l'entreprise compare ce qui a été réalisé à ce qui était prévu. Deux documents servent à cette comparaison :</p>\n<ul>\n<li>le <strong>planning d'atelier</strong> (souvent un diagramme de Gantt par machine) qui donne les heures prévues de début et de fin de chaque travail ;</li>\n<li>la <strong>fiche de suivi de production</strong> (ou relevé de production), remplie par le conducteur, qui donne les heures réelles, les arrêts avec leurs causes, les quantités produites et rebutées, les incidents.</li>\n</ul>\n<p>Le devis ou la fiche de fabrication fournit en plus les <strong>temps alloués</strong> (temps de calage et cadence pratique prévus), à partir desquels on calcule l'écart entre le temps prévu et le temps réel.</p>\n<p>Une fiche de suivi type comprend : l'identification (machine, date, équipe, conducteur, numéro d'OF) ; une ligne par phase avec heure de début, heure de fin et code d'activité (calage, production, arrêt par type) ; les compteurs de début et de fin ; les quantités bonnes et rebutées ; les observations ; la signature.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une fiche de suivi n'a de valeur que si les temps sont notés au moment où ils se produisent et si chaque arrêt est rattaché à une cause précise. Une fiche reconstituée de mémoire en fin de poste rend l'analyse des écarts impossible.</div>\n"
      },
      {
       "titre": "Les indicateurs de performance",
       "contenu": "\n<p>Le <strong>taux de rendement synthétique</strong> (TRS) mesure l'efficacité d'une machine pendant le temps où elle aurait dû produire. Il se calcule par :</p>\n<p>TRS = temps utile / temps requis</p>\n<p>où le <strong>temps requis</strong> est le temps pendant lequel la machine est prévue pour fonctionner (temps d'ouverture du poste moins les pauses et arrêts programmés), et le <strong>temps utile</strong> est le temps qu'il aurait fallu, à la cadence nominale, pour produire uniquement les exemplaires bons.</p>\n<p>Le TRS se décompose en trois taux, dont il est le produit :</p>\n<table>\n<thead><tr><th>Taux</th><th>Formule</th><th>Pertes mesurées</th></tr></thead>\n<tbody>\n<tr><td>Disponibilité (D)</td><td>Temps de fonctionnement / temps requis</td><td>Calages, pannes, attentes, réglages</td></tr>\n<tr><td>Performance (P)</td><td>Quantité produite / (temps de fonctionnement x cadence nominale)</td><td>Marche à vitesse réduite, micro-arrêts</td></tr>\n<tr><td>Qualité (Q)</td><td>Quantité bonne / quantité produite</td><td>Rebuts, retouches</td></tr>\n</tbody>\n</table>\n<p>TRS = D x P x Q. Cette décomposition dit où se trouvent les pertes : un TRS faible avec une bonne disponibilité indique une machine qui tourne lentement ; un TRS faible avec une bonne performance indique trop d'arrêts.</p>\n<p>D'autres indicateurs sont courants : la <strong>cadence réelle</strong> (quantité produite / temps de fonctionnement), le <strong>taux de gâche</strong> (quantité rebutée / quantité produite, ou feuilles gâchées / feuilles engagées) et l'<strong>écart de temps</strong> par rapport au devis.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne pas confondre cadence nominale (constructeur, maximale) et cadence pratique (prévue au devis). Le TRS se calcule avec la cadence nominale ; l'écart au devis se calcule avec la cadence pratique. Mélanger les deux fausse toutes les conclusions.</div>\n"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "\n<p>Fiche de suivi, chaîne de brochage DCC, OF 24-0317 (guide de randonnée, 6 000 exemplaires avec passe de 4 %, soit 6 240 exemplaires bons attendus). Poste de 06 h 00 à 14 h 00, pause de 30 min. Cadence nominale de la chaîne : 1 500 cycles par heure.</p>\n<table>\n<thead><tr><th>Début</th><th>Fin</th><th>Activité</th><th>Durée</th></tr></thead>\n<tbody>\n<tr><td>06 h 00</td><td>06 h 50</td><td>Calage (fondoir PUR, margeurs, rainage, trilame) jusqu'au BàF</td><td>50 min</td></tr>\n<tr><td>06 h 50</td><td>09 h 30</td><td>Production</td><td>160 min</td></tr>\n<tr><td>09 h 30</td><td>09 h 45</td><td>Arrêt : bourrages répétés au margeur du cahier 4</td><td>15 min</td></tr>\n<tr><td>09 h 45</td><td>10 h 15</td><td>Pause</td><td>30 min</td></tr>\n<tr><td>10 h 15</td><td>11 h 40</td><td>Production</td><td>85 min</td></tr>\n<tr><td>11 h 40</td><td>11 h 55</td><td>Arrêt : attente de la palette du cahier 6</td><td>15 min</td></tr>\n<tr><td>11 h 55</td><td>12 h 05</td><td>Arrêt : défaut de température du fondoir</td><td>10 min</td></tr>\n<tr><td>12 h 05</td><td>14 h 00</td><td>Production</td><td>115 min</td></tr>\n</tbody>\n</table>\n<p>Compteurs : 6 380 cycles produits ; 140 exemplaires éjectés ou rebutés au contrôle ; 6 240 exemplaires bons.</p>\n<p>Devis : calage alloué 40 min ; cadence pratique prévue 1 200 exemplaires par heure. Planning : travail prévu de 06 h 00 à 11 h 52 ; travail suivant prévu sur la chaîne à 12 h 00.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1) Temps.</strong> Temps d'ouverture : 8 h = 480 min. Temps requis : 480 - 30 (pause) = 450 min. Arrêts : calage 50 + bourrages 15 + attente 15 + fondoir 10 = 90 min. Temps de fonctionnement : 450 - 90 = 360 min = 6 h (on retrouve bien 160 + 85 + 115 = 360 min de production).</p>\n<p><strong>2) Taux.</strong> D = 360 / 450 = 0,80, soit 80 %. Quantité théorique en 6 h à la cadence nominale : 6 x 1 500 = 9 000 ; P = 6 380 / 9 000 = 0,709, soit 70,9 %. Q = 6 240 / 6 380 = 0,978, soit 97,8 %. TRS = 0,80 x 0,709 x 0,978 = 0,555, soit 55,5 %.</p>\n<p><strong>3) Vérification par le temps utile.</strong> Temps pour produire 6 240 bons à 1 500 par heure : 6 240 / 1 500 = 4,16 h = 249,6 min. TRS = 249,6 / 450 = 0,555. Les deux calculs concordent.</p>\n<p><strong>4) Cadence réelle et gâche.</strong> Cadence réelle : 6 380 / 6 = 1 063 cycles par heure, inférieure à la cadence pratique prévue de 1 200. Taux de gâche : 140 / 6 380 = 2,2 %, compatible avec la passe de 4 % puisque l'objectif de 6 240 bons est atteint.</p>\n<p><strong>5) Écart au devis.</strong> Temps prévu : 40 min de calage + 6 240 / 1 200 = 5,2 h = 312 min, soit 352 min (5 h 52 min, d'où la fin prévue à 11 h 52). Temps réel consommé hors pause : 450 min. Écart : 450 - 352 = 98 min. Décomposition : calage + 10 min ; arrêts non prévus 40 min (bourrages, attente, fondoir) ; production plus lente : 360 min réelles contre 312 prévues, soit + 48 min. Total : 10 + 40 + 48 = 98 min. Conforme.</p>\n<p><strong>6) Conséquence sur le planning.</strong> Le travail suivant, prévu à 12 h 00, n'a pu démarrer qu'après 14 h 00 : retard de plus de deux heures à répercuter sur l'équipe d'après-midi et, si nécessaire, sur le client.</p>\n<p><strong>7) Propositions.</strong> Les bourrages au margeur du cahier 4 et la cadence réduite suggèrent un problème de cahiers (gonflement, plis irréguliers) à faire vérifier au pliage ; l'attente de palette relève de l'organisation (approvisionnement du poste anticipé) ; le défaut de fondoir relève de la maintenance (contrôle de la sonde de température, à inscrire au carnet de bord). Le Pareto des pertes montre que la performance (vitesse) pèse plus que les arrêts : c'est la priorité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour rédiger l'analyse d'une fiche de suivi, suivre toujours le même ordre : temps (requis, arrêts, fonctionnement), quantités (produites, bonnes, rebutées), taux (D, P, Q, TRS), comparaison au prévu (devis, planning), causes des écarts classées par importance, propositions rattachées chacune à une cause et à un service responsable.</div>\n"
      },
      {
       "titre": "Interpréter avec prudence",
       "contenu": "\n<p>Un indicateur isolé ne suffit pas à juger une équipe ou une machine. Plusieurs précautions s'imposent :</p>\n<ul>\n<li><strong>Comparer des situations comparables</strong> : le TRS d'une chaîne de brochage sur des petites séries avec de nombreux calages est structurellement plus faible que sur une longue série.</li>\n<li><strong>Vérifier la cohérence des données</strong> : la somme des durées doit égaler le temps d'ouverture ; la quantité bonne plus les rebuts doit égaler la quantité produite ; un écart signale une erreur de saisie.</li>\n<li><strong>Rechercher les causes plutôt que les responsables</strong> : une cadence faible peut venir de la matière (cahiers mal pliés en amont), de la machine, de la méthode ou du milieu, pas seulement de l'opérateur.</li>\n<li><strong>Suivre l'évolution dans le temps</strong> : c'est la tendance d'un indicateur sur plusieurs semaines qui permet de mesurer l'effet d'une amélioration.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> de plus en plus de machines transmettent automatiquement leurs compteurs et leurs états (marche, arrêt, calage) au logiciel de gestion de production. L'opérateur n'a plus à noter les heures, mais il doit toujours qualifier les arrêts en choisissant une cause dans une liste : c'est cette information humaine qui rend l'analyse possible.</div>\n"
      }
     ],
     "points_cles": [
      "Le planning donne le prévu ; la fiche de suivi donne le réalisé ; le devis donne les temps alloués.",
      "TRS = temps utile / temps requis = disponibilité x performance x qualité.",
      "La disponibilité mesure les arrêts, la performance la vitesse, la qualité les rebuts.",
      "Le TRS utilise la cadence nominale ; l'écart au devis utilise la cadence pratique.",
      "Un écart de temps se décompose en écart de calage, arrêts imprévus et écart de vitesse.",
      "Les données se vérifient par cohérence : somme des durées, somme des quantités.",
      "Chaque proposition d'amélioration se rattache à une cause et à un responsable.",
      "Un retard sur un travail se répercute sur le planning des travaux suivants."
     ],
     "lexique": [
      {
       "terme": "Fiche de suivi de production",
       "def": "Relevé des temps, arrêts, quantités et incidents d'un travail sur une machine."
      },
      {
       "terme": "Temps requis",
       "def": "Temps pendant lequel la machine est prévue pour produire, pauses et arrêts programmés déduits."
      },
      {
       "terme": "Temps de fonctionnement",
       "def": "Temps requis diminué des arrêts (calages, pannes, attentes)."
      },
      {
       "terme": "Temps utile",
       "def": "Temps nécessaire pour produire les seuls exemplaires bons à la cadence nominale."
      },
      {
       "terme": "TRS",
       "def": "Taux de rendement synthétique, rapport du temps utile au temps requis."
      },
      {
       "terme": "Taux de gâche",
       "def": "Part des exemplaires ou des feuilles perdus par rapport à la quantité engagée ou produite."
      },
      {
       "terme": "Cadence réelle",
       "def": "Quantité produite divisée par le temps de fonctionnement."
      },
      {
       "terme": "Écart au devis",
       "def": "Différence entre le temps réellement passé et le temps alloué au devis."
      }
     ]
    },
    {
     "id": "bfpi-doc-fds-etiquette",
     "titre": "Exploiter une fiche de données de sécurité et une étiquette de produit",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Connaître la structure en 16 rubriques d'une fiche de données de sécurité et l'utilité de chacune au poste.",
      "Décoder une étiquette de danger : pictogrammes, mention d'avertissement, mentions de danger et conseils de prudence.",
      "Extraire d'une FDS les mesures de prévention, de protection, de stockage et d'urgence pour un produit du façonnage.",
      "Rédiger une consigne de poste à partir d'une FDS."
     ],
     "sections": [
      {
       "titre": "Le document et son cadre",
       "contenu": "\n<p>La <strong>fiche de données de sécurité</strong> (FDS) accompagne tout produit chimique dangereux mis sur le marché. Elle est rédigée par le fournisseur selon le règlement européen REACH, qui fixe son plan en <strong>16 rubriques</strong>, et elle doit être fournie en français. L'<strong>étiquette</strong> du produit, définie par le règlement européen CLP, en résume les informations essentielles.</p>\n<p>Dans l'atelier de façonnage et de routage, les produits concernés sont notamment les colles (hotmelt EVA, PUR, colles en dispersion), les produits de nettoyage et solvants, les lubrifiants, les encres et fluides de jet d'encre, les produits de purge des fondoirs. L'employeur doit tenir les FDS à disposition et s'en servir pour évaluer le risque chimique et former les salariés ; l'opérateur doit savoir y trouver rapidement l'information utile.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Titre</th><th>Utilité au poste</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Identification du produit et du fournisseur</td><td>Vérifier qu'on a la bonne fiche ; numéro d'urgence</td></tr>\n<tr><td>2</td><td>Identification des dangers</td><td>Classification, éléments d'étiquetage</td></tr>\n<tr><td>3</td><td>Composition</td><td>Substances dangereuses présentes</td></tr>\n<tr><td>4</td><td>Premiers secours</td><td>Gestes en cas d'inhalation, contact, projection, ingestion</td></tr>\n<tr><td>5</td><td>Mesures de lutte contre l'incendie</td><td>Moyens d'extinction adaptés</td></tr>\n<tr><td>6</td><td>Mesures en cas de dispersion accidentelle</td><td>Conduite à tenir en cas de fuite ou de renversement</td></tr>\n<tr><td>7</td><td>Manipulation et stockage</td><td>Précautions d'emploi, conditions de stockage</td></tr>\n<tr><td>8</td><td>Contrôles de l'exposition / protection individuelle</td><td>Valeurs limites, ventilation, équipements de protection</td></tr>\n<tr><td>9</td><td>Propriétés physiques et chimiques</td><td>État, températures, viscosité</td></tr>\n<tr><td>10</td><td>Stabilité et réactivité</td><td>Conditions et matières à éviter</td></tr>\n<tr><td>11</td><td>Informations toxicologiques</td><td>Effets sur la santé</td></tr>\n<tr><td>12</td><td>Informations écologiques</td><td>Effets sur l'environnement</td></tr>\n<tr><td>13</td><td>Considérations relatives à l'élimination</td><td>Filière des déchets</td></tr>\n<tr><td>14</td><td>Informations relatives au transport</td><td>Classement transport</td></tr>\n<tr><td>15</td><td>Informations réglementaires</td><td>Restrictions, obligations particulières</td></tr>\n<tr><td>16</td><td>Autres informations</td><td>Date de révision, texte complet des mentions</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Décoder une étiquette",
       "contenu": "\n<p>L'étiquette CLP comporte :</p>\n<ul>\n<li>des <strong>pictogrammes de danger</strong> : losanges à bord rouge sur fond blanc, avec un symbole noir (flamme, tête de mort, point d'exclamation, silhouette humaine avec une étoile sur le thorax pour les dangers graves pour la santé, corrosion, environnement...) ;</li>\n<li>une <strong>mention d'avertissement</strong> : « Danger » pour les dangers les plus graves, « Attention » pour les moins graves ;</li>\n<li>des <strong>mentions de danger</strong>, codées H suivi de trois chiffres (H2.. dangers physiques, H3.. dangers pour la santé, H4.. dangers pour l'environnement), et éventuellement des mentions EUH propres à l'Union européenne ;</li>\n<li>des <strong>conseils de prudence</strong>, codés P suivi de trois chiffres (prévention, intervention, stockage, élimination) ;</li>\n<li>l'identité du produit et du fournisseur.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la silhouette avec une étoile sur le thorax signale un danger grave pour la santé, parfois à long terme et sans effet immédiat ressenti (sensibilisation respiratoire, effets cancérogènes suspectés, toxicité pour certains organes). L'absence de gêne immédiate ne signifie pas l'absence de risque.</div>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire une FDS au poste en six questions, dans cet ordre de rubriques. 1) Quels sont les dangers ? (rubrique 2). 2) Comment me protéger en travaillant ? (rubriques 7 et 8 : ventilation, captage, gants, lunettes, protection respiratoire). 3) Que faire en cas d'accident sur une personne ? (rubrique 4). 4) Que faire en cas de fuite ou d'incendie ? (rubriques 6 et 5). 5) Comment stocker ? (rubrique 7). 6) Comment éliminer les déchets ? (rubrique 13). Vérifier enfin la date de révision (rubrique 16) : une FDS ancienne doit être remplacée par la version à jour du fournisseur.</div>\n"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Extrait de FDS d'une colle thermofusible polyuréthane réactive pour dos carré collé (produit fictif, données représentatives de ce type de produit).</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Extrait</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Colle PUR « exemple », thermofusible réactive pour reliure ; numéro d'appel d'urgence du fournisseur</td></tr>\n<tr><td>2</td><td>Mention d'avertissement : Danger. Pictogrammes : silhouette avec étoile (danger pour la santé), point d'exclamation. H334 : peut provoquer des symptômes allergiques ou d'asthme ou des difficultés respiratoires par inhalation. H317 : peut provoquer une allergie cutanée. H351 : susceptible de provoquer le cancer. H373 : risque présumé d'effets graves pour les organes à la suite d'expositions répétées ou d'une exposition prolongée. EUH204 : contient des isocyanates, peut produire une réaction allergique.</td></tr>\n<tr><td>3</td><td>Contient du diisocyanate de diphénylméthane (MDI) monomère</td></tr>\n<tr><td>4</td><td>Inhalation : amener la personne à l'air frais, consulter un médecin en cas de troubles respiratoires. Contact avec la colle fondue : refroidir immédiatement à l'eau froide, ne pas retirer la colle solidifiée de la peau, consulter un médecin.</td></tr>\n<tr><td>7</td><td>Mettre en œuvre dans un fondoir fermé ; éviter de respirer les vapeurs ; stocker dans l'emballage d'origine hermétiquement fermé, à l'abri de l'humidité, entre 10 et 30 °C</td></tr>\n<tr><td>8</td><td>Captage des vapeurs aux points d'application ; gants résistant à la chaleur et aux produits chimiques, lunettes de protection ; protection respiratoire si le captage est insuffisant</td></tr>\n<tr><td>9</td><td>Solide à température ambiante ; température d'application 120 à 140 °C</td></tr>\n<tr><td>10</td><td>Réagit avec l'eau et l'humidité ; éviter la surchauffe</td></tr>\n<tr><td>13</td><td>Résidus non durcis : déchets dangereux, collecteur agréé ; produit totalement durci : selon la réglementation locale</td></tr>\n<tr><td>15</td><td>Restriction européenne sur les diisocyanates : une formation adéquate est requise avant toute utilisation industrielle ou professionnelle</td></tr>\n</tbody>\n</table>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1) Dangers.</strong> Le produit est classé « Danger ». Le danger principal est la <strong>sensibilisation respiratoire</strong> (H334) par les vapeurs d'isocyanates émises à chaud, à laquelle s'ajoutent la sensibilisation cutanée (H317), un effet cancérogène suspecté (H351) et des effets en cas d'exposition répétée (H373). S'y ajoute le risque de <strong>brûlure</strong> par la colle à 120-140 °C (rubrique 9). Une personne sensibilisée peut réagir ensuite à de très faibles doses : la prévention doit éviter toute exposition, pas seulement les fortes expositions.</p>\n<p><strong>2) Prévention collective.</strong> Fondoir fermé, captage des vapeurs aux points d'application (buse, rouleau), température maintenue dans la plage recommandée car la surchauffe augmente les émissions (rubrique 10).</p>\n<p><strong>3) Protection individuelle.</strong> Gants résistant à la chaleur et aux produits chimiques et lunettes lors du chargement, de la purge et du nettoyage ; protection respiratoire si le captage ne suffit pas (rubrique 8).</p>\n<p><strong>4) Formation.</strong> La rubrique 15 rappelle l'obligation de formation des utilisateurs professionnels de produits contenant des diisocyanates : seuls les opérateurs formés manipulent cette colle.</p>\n<p><strong>5) Stockage.</strong> Emballages fermés, à l'abri de l'humidité, entre 10 et 30 °C ; ne pas ouvrir à l'avance les cartouches ou les fûts, puisque la colle réagit avec l'humidité (rubriques 7 et 10).</p>\n<p><strong>6) Urgence.</strong> Brûlure : eau froide immédiate, ne pas arracher la colle ; troubles respiratoires : air frais et avis médical (rubrique 4). Le numéro d'urgence de la rubrique 1 est affiché au poste.</p>\n<p><strong>7) Déchets.</strong> Purges et résidus non durcis en déchets dangereux, dans un conteneur identifié (rubrique 13).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> ces éléments sont repris dans une <strong>notice de poste</strong> affichée près de la chaîne de brochage : une page avec les pictogrammes, les équipements à porter, les gestes interdits, la conduite à tenir en cas d'accident et le contact à prévenir. La FDS complète reste consultable, mais c'est la notice de poste que l'opérateur lit chaque jour.</div>\n"
      },
      {
       "titre": "Pièges et bonnes pratiques",
       "contenu": "\n<ul>\n<li><strong>Confondre la fiche technique et la FDS</strong> : la fiche technique décrit les performances du produit (viscosité, temps ouvert, température d'application) pour bien l'utiliser ; la FDS décrit ses dangers et les mesures de sécurité. Les deux sont nécessaires et ne se remplacent pas.</li>\n<li><strong>Utiliser une FDS d'un autre produit de la même gamme</strong> : deux colles d'aspect identique peuvent avoir des compositions et des classements différents, par exemple une version à faible teneur en monomère d'isocyanate qui n'est pas classée pour la sensibilisation respiratoire. On vérifie le nom exact et la référence.</li>\n<li><strong>Transvaser sans étiqueter</strong> : tout récipient secondaire (bidon de solvant de nettoyage, flacon) doit porter l'identification du produit et ses dangers.</li>\n<li><strong>Négliger les produits « banals »</strong> : un solvant de nettoyage inflammable ou une graisse en aérosol présente aussi des dangers (incendie, irritation) décrits dans leur FDS.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne jamais chauffer une colle au-delà de la plage indiquée pour « gagner du temps » ou la rendre plus fluide : les émissions de vapeurs augmentent, la colle se dégrade et le risque de brûlure s'aggrave. Un fondoir qui ne tient pas sa température est signalé à la maintenance.</div>\n<p>À l'écrit, une bonne réponse à une question sur une FDS cite toujours la <strong>rubrique</strong> d'où provient l'information, distingue clairement les <strong>mesures collectives</strong> des <strong>protections individuelles</strong>, et formule des consignes concrètes applicables au poste décrit dans le sujet.</p>\n"
      }
     ],
     "points_cles": [
      "La FDS, en 16 rubriques fixées par REACH, accompagne tout produit chimique dangereux.",
      "L'étiquette CLP comprend pictogrammes, mention d'avertissement, mentions H et EUH, conseils P.",
      "Au poste, on lit d'abord les rubriques 2, 7, 8, 4, 6, 5 et 13.",
      "Les colles PUR contenant des isocyanates sont des sensibilisants respiratoires ; leur emploi impose captage, protections et formation.",
      "La colle fondue provoque des brûlures : refroidir à l'eau sans arracher la colle.",
      "Fiche technique (performances) et FDS (sécurité) ne se remplacent pas.",
      "Chaque récipient de transvasement doit être étiqueté.",
      "Une consigne de poste résume la FDS en mesures concrètes et cite les rubriques sources."
     ],
     "lexique": [
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité, document en 16 rubriques décrivant dangers et mesures de sécurité d'un produit."
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
       "terme": "Mention de danger",
       "def": "Phrase codée H qui décrit la nature d'un danger."
      },
      {
       "terme": "Conseil de prudence",
       "def": "Phrase codée P qui indique une mesure de prévention ou de conduite à tenir."
      },
      {
       "terme": "Sensibilisant respiratoire",
       "def": "Substance qui peut provoquer une allergie respiratoire, puis des réactions à très faible dose."
      },
      {
       "terme": "Isocyanate",
       "def": "Composé réactif présent dans les colles PUR, sensibilisant pour les voies respiratoires et la peau."
      },
      {
       "terme": "Notice de poste",
       "def": "Document affiché au poste qui résume risques, protections et conduite à tenir."
      }
     ]
    },
    {
     "id": "bfpi-doc-cahier-routage",
     "titre": "Analyser un cahier des charges de routage, un fichier d'adresses et un bordereau de dépôt",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Extraire d'un cahier des charges de routage les données de production : versions, encarts, conditionnement, dépôt.",
      "Contrôler un extrait de fichier d'adresses au regard de la norme NF Z10-011 et repérer les anomalies.",
      "Calculer les quantités d'encarts, les poids par version et le poids total d'un envoi.",
      "Vérifier la cohérence d'un bordereau de dépôt avec la production réalisée."
     ],
     "sections": [
      {
       "titre": "Les documents d'une opération de routage",
       "contenu": "\n<p>Une opération de routage s'appuie sur trois documents principaux :</p>\n<ul>\n<li>le <strong>cahier des charges de routage</strong>, rédigé par le client ou établi avec lui : produit à router, encarts, versions, mode de mise sous pli, fichier, offre postale, conditionnement, date de dépôt ;</li>\n<li>le <strong>fichier d'adresses</strong> et sa <strong>description</strong> (nombre d'enregistrements, colonnes, codes de versions ou d'encarts) ;</li>\n<li>le <strong>bordereau de dépôt</strong>, établi par le routeur à la fin de la production, qui déclare à l'opérateur postal ce qui est remis.</li>\n</ul>\n<p>S'y ajoutent les <strong>conditions de l'offre postale</strong> retenue, dans leur version en vigueur, qui fixent les limites de poids et de format, le niveau de tri et la présentation des contenants.</p>\n<p>Le vocabulaire propre à ces documents est celui vu en cours de routage : pli, version, encart jeté ou encart piloté, mise sous film, liasse, bac, palette, marque d'affranchissement, dépôt. On y ajoute la notion d'<strong>enregistrement</strong> : une ligne du fichier, correspondant à un destinataire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans un routage avec encarts pilotés, il n'y a pas un produit mais plusieurs <strong>versions</strong> de pli, de contenu et de poids différents. Toutes les quantités (encarts, poids, contenants) se calculent version par version.</div>\n"
      },
      {
       "titre": "Méthode d'analyse",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une opération de routage en six étapes. 1) Résumer l'opération en une phrase (produit, nombre de plis, mode de mise sous pli, date de dépôt). 2) Lister les versions de pli à partir des règles d'encartage, et calculer le nombre de plis de chaque version, en tenant compte des destinataires qui reçoivent plusieurs encarts. 3) Calculer les quantités d'encarts à prévoir, passe comprise. 4) Calculer le poids de chaque version et le poids total, et vérifier les limites de l'offre. 5) Contrôler un échantillon du fichier selon la norme d'adressage. 6) Confronter le bordereau de dépôt aux quantités et aux poids calculés.</div>\n<p>Pour l'étape 2, on utilise un raisonnement d'ensembles. Si A destinataires reçoivent l'encart 1, B l'encart 2, et C reçoivent les deux, alors : plis avec les deux encarts = C ; avec l'encart 1 seul = A - C ; avec l'encart 2 seul = B - C ; sans encart = total - A - B + C. La somme des quatre versions doit redonner le total.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'erreur classique consiste à additionner A et B sans retirer les destinataires communs, ce qui compte deux fois ces plis et fausse les quantités par version, donc les poids et le bordereau.</div>\n"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "\n<p>Cahier des charges de routage (extrait).</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Données</th></tr></thead>\n<tbody>\n<tr><td>Produit</td><td>Magazine mensuel A4, 68 pages, piqué à cheval ; poids unitaire sous film : 184 g</td></tr>\n<tr><td>Destinataires</td><td>25 000 abonnés (fichier de 25 000 enregistrements)</td></tr>\n<tr><td>Encart 1</td><td>Lettre de réabonnement, 5 g, pour les 3 000 abonnés dont l'abonnement expire dans les deux mois (code R dans le fichier)</td></tr>\n<tr><td>Encart 2</td><td>Supplément régional de 40 g pour les 8 000 abonnés de la région concernée (code S)</td></tr>\n<tr><td>Recoupement</td><td>900 abonnés ont à la fois le code R et le code S</td></tr>\n<tr><td>Mise sous pli</td><td>Sous film, adresse imprimée par jet d'encre sur porte-adresse</td></tr>\n<tr><td>Passe encarts</td><td>2 %</td></tr>\n<tr><td>Dépôt</td><td>Offre presse de l'opérateur postal ; palettes de 600 kg maximum ; dépôt le jeudi avant 18 h</td></tr>\n</tbody>\n</table>\n<p>Extrait du fichier d'adresses tel qu'il apparaît après import (5 enregistrements).</p>\n<table>\n<thead><tr><th>N°</th><th>Adresse imprimée telle qu'elle sortirait (lignes séparées par /)</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Monsieur Paul DURAND / 12 avenue Jean Jaurès / 1000 BOURG EN BRESSE</td></tr>\n<tr><td>2</td><td>Madame Léa PETIT / (ligne vide) / 3 rue du Port / 25000 Besançon</td></tr>\n<tr><td>3</td><td>Monsieur Karim BENALI / Bâtiment C Résidence du Parc des Grands Chênes Verts / 8 allée des Pins / 44300 NANTES</td></tr>\n<tr><td>4</td><td>Madame Léa PETIT / 3 rue du Port / 25000 BESANCON</td></tr>\n<tr><td>5</td><td>Madame Anne ROUX / 5 place de la Mairie / 13100 AIX EN PROVENCE</td></tr>\n</tbody>\n</table>\n<p>Bordereau de dépôt préparé par l'équipe de jour : 25 000 plis, poids unitaire déclaré 184 g, poids total 4 600 kg, 8 palettes.</p>\n"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1) Résumé.</strong> Routage sous film de 25 000 magazines avec deux encarts pilotés par le fichier, en offre presse, dépôt jeudi avant 18 h.</p>\n<p><strong>2) Versions.</strong> Codes R et S : 900 plis. R seul : 3 000 - 900 = 2 100. S seul : 8 000 - 900 = 7 100. Sans encart : 25 000 - 3 000 - 8 000 + 900 = 14 900. Contrôle : 900 + 2 100 + 7 100 + 14 900 = 25 000. Conforme.</p>\n<p><strong>3) Encarts à prévoir.</strong> Lettres de réabonnement : 3 000 x 1,02 = 3 060. Suppléments : 8 000 x 1,02 = 8 160.</p>\n<table>\n<thead><tr><th>Version</th><th>Plis</th><th>Poids unitaire</th><th>Poids total</th></tr></thead>\n<tbody>\n<tr><td>Magazine seul</td><td>14 900</td><td>184 g</td><td>2 741,6 kg</td></tr>\n<tr><td>Magazine + réabonnement</td><td>2 100</td><td>189 g</td><td>396,9 kg</td></tr>\n<tr><td>Magazine + supplément</td><td>7 100</td><td>224 g</td><td>1 590,4 kg</td></tr>\n<tr><td>Magazine + réabonnement + supplément</td><td>900</td><td>229 g</td><td>206,1 kg</td></tr>\n<tr><td>Total</td><td>25 000</td><td>-</td><td>4 935,0 kg</td></tr>\n</tbody>\n</table>\n<p><strong>4) Palettes.</strong> 4 935 / 600 = 8,2 : il faut 9 palettes, et non 8.</p>\n<p><strong>5) Bordereau.</strong> Le bordereau déclare un poids unitaire unique de 184 g et 4 600 kg : il ignore les encarts. L'écart est de 4 935 - 4 600 = 335 kg. Le bordereau doit être refait en déclarant les plis par catégorie de poids selon les règles de l'offre, avec le poids total réel et 9 palettes. Un bordereau faux expose à un refus du dépôt ou à une régularisation tarifaire.</p>\n<p><strong>6) Fichier.</strong> Enregistrement 1 : code postal à 4 chiffres, le zéro initial a été supprimé à l'import (01000 BOURG EN BRESSE) ; erreur probablement systématique pour tous les départements 01 à 09, à corriger dans tout le fichier. Enregistrement 2 : ligne vide à supprimer ; localité en minuscules accentuées, à écrire BESANCON. Enregistrement 3 : la ligne « Bâtiment C Résidence du Parc des Grands Chênes Verts » dépasse 38 caractères ; elle doit être abrégée selon les règles de normalisation. Enregistrement 4 : doublon probable de l'enregistrement 2 (même nom, même adresse) ; à signaler au client avant suppression, car le dédoublonnage modifie le nombre de plis. Enregistrement 5 : conforme.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les erreurs de fichier se traitent avant la production, avec l'accord du client, et sont consignées dans le rapport de routage : nombre d'adresses corrigées, de doublons supprimés, d'adresses non distribuables écartées. Ces chiffres expliquent l'écart éventuel entre le nombre d'enregistrements reçus et le nombre de plis déposés.</div>\n"
      },
      {
       "titre": "Rédiger les conclusions",
       "contenu": "\n<p>Une analyse de routage se conclut par une synthèse opérationnelle destinée au chef d'équipe :</p>\n<ul>\n<li>le <strong>nombre de plis par version</strong> et les réglages correspondants de la filmeuse (margeurs d'encarts pilotés par les codes R et S) ;</li>\n<li>les <strong>quantités d'encarts</strong> à approvisionner et à vérifier à la réception ;</li>\n<li>les <strong>poids</strong> et le nombre de <strong>contenants</strong>, à reporter sur le bordereau ;</li>\n<li>les <strong>corrections de fichier</strong> à faire valider par le client, et leur effet sur les quantités ;</li>\n<li>les <strong>contrôles en production</strong> : pesée d'un pli de chaque version au démarrage, vérification de la correspondance code-encart par prélèvement, lecture de quelques adresses par palette ;</li>\n<li>le <strong>planning</strong> à rebours depuis l'heure limite de dépôt.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> planning à rebours. Dépôt jeudi 18 h ; transport vers le site de dépôt 1 h 30 ; chargement 30 min : les palettes doivent être prêtes jeudi à 16 h. Cadence pratique de la filmeuse 6 000 plis par heure : 25 000 / 6 000 = 4,2 h, soit environ 4 h 10 min, plus 1 h de calage et de contrôle des versions : la production doit démarrer au plus tard jeudi vers 10 h 50. On prévoit en pratique un démarrage le mercredi ou le jeudi tôt, pour absorber un incident.</div>\n<p>Comme pour toute analyse de document, chaque chiffre est justifié par un calcul visible et rattaché à sa source (cahier des charges, fichier, bordereau), et chaque anomalie est accompagnée de sa conséquence et de l'action proposée.</p>\n"
      }
     ],
     "points_cles": [
      "Le cahier des charges de routage définit produit, encarts, versions, mise sous pli, offre postale et dépôt.",
      "Avec des encarts pilotés, quantités et poids se calculent version par version.",
      "Les destinataires communs à deux encarts ne doivent pas être comptés deux fois.",
      "Les quantités d'encarts incluent la passe prévue.",
      "Le nombre de palettes se déduit du poids total et du poids maximal admis, arrondi à l'unité supérieure.",
      "Le contrôle du fichier repère codes postaux tronqués, lignes vides, lignes trop longues, localités mal écrites et doublons.",
      "Le bordereau de dépôt doit correspondre exactement aux plis et aux poids réels.",
      "Le planning de routage se construit à rebours depuis l'heure limite de dépôt."
     ],
     "lexique": [
      {
       "terme": "Cahier des charges de routage",
       "def": "Document qui définit toutes les exigences d'une opération de routage."
      },
      {
       "terme": "Enregistrement",
       "def": "Ligne d'un fichier d'adresses correspondant à un destinataire."
      },
      {
       "terme": "Version",
       "def": "Variante d'un pli qui se distingue par ses encarts, donc par son contenu et son poids."
      },
      {
       "terme": "Encart piloté",
       "def": "Encart inséré seulement dans les plis désignés par un code du fichier."
      },
      {
       "terme": "Recoupement",
       "def": "Ensemble des destinataires concernés par plusieurs critères à la fois."
      },
      {
       "terme": "Doublon",
       "def": "Destinataire présent plusieurs fois dans un fichier."
      },
      {
       "terme": "Planning à rebours",
       "def": "Planning construit en partant de la date ou de l'heure limite et en remontant le temps."
      },
      {
       "terme": "Rapport de routage",
       "def": "Compte rendu au client des quantités traitées, corrections et incidents d'une opération."
      }
     ]
    }
   ]
  }
 ]
};
