/* Polymates — Bac pro Réalisation de produits imprimés et plurimédia — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-rpip"] = {
 "id": "bp-rpip",
 "nom": "Réalisation de produits imprimés et plurimédia",
 "icone": "🎓",
 "couleur": "#b48ad8",
 "intro": "Le bac pro Réalisation de produits imprimés et plurimédia forme les opérateurs de la chaîne graphique : opérateurs prépresse, maquettistes et opérateurs plurimédia en option productions graphiques, conducteurs de machines d'impression offset, numérique ou flexographique en option productions imprimées. Ce cours de première et de terminale approfondit le cours de seconde de la famille des métiers des industries graphiques et de la communication : flux et données numériques, couleur et qualité, matières, procédés et façonnage, imposition et forme imprimante, organisation, maintenance et prévention, puis savoirs propres à chaque option. Il est organisé en deux blocs : un cours théorique, puis un bloc d'analyse de documents qui montre, exemples commentés à l'appui, comment exploiter dossiers de fabrication, devis, rapports de contrôle, relevés de presse, fiches de données de sécurité et plannings, tels qu'on les rencontre à l'épreuve écrite d'étude d'un dossier de fabrication.",
 "options": [
  {
   "id": "a",
   "nom": "Option A — Productions graphiques",
   "icone": "🖥️",
   "desc": "Préparation des données et des fichiers selon le support de diffusion : traitement d'images, mise en page, dessin vectoriel, PDF, épreuves et déclinaisons pour l'écran."
  },
  {
   "id": "b",
   "nom": "Option B — Productions imprimées",
   "icone": "🖨️",
   "desc": "Préparation, réglage et conduite de la production en atelier d'impression offset et numérique, contrôle de la conformité et correction des défauts."
  }
 ],
 "parties": [
  {
   "titre": "Partie 1 — La chaîne graphique, ses flux et ses données",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "brpip-entreprise-flux",
     "titre": "L'entreprise graphique et ses flux de production",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Situer les services d'une entreprise graphique et le rôle de chacun dans le traitement d'une commande",
      "Distinguer flux de matière, flux d'information et flux de données numériques",
      "Expliquer le rôle d'un logiciel de gestion de production et d'un workflow prépresse",
      "Décrire le principe d'un ticket de travail numérique (JDF) et son intérêt",
      "Identifier les points de validation d'une commande, du devis à la livraison"
     ],
     "sections": [
      {
       "titre": "Les services d'une entreprise graphique",
       "contenu": "<p>Une imprimerie ou un studio graphique n'est pas seulement un atelier rempli de machines. C'est une organisation où chaque commande traverse plusieurs services, chacun ayant une mission précise. Connaître ces services permet de savoir à qui transmettre une information, à qui poser une question et qui valide quoi.</p>\n<table><thead><tr><th>Service</th><th>Missions principales</th><th>Documents produits ou reçus</th></tr></thead><tbody>\n<tr><td>Commercial</td><td>Recueillir le besoin du client, conseiller, négocier, transmettre la commande</td><td>Demande de prix, devis, bon de commande</td></tr>\n<tr><td>Bureau d'études ou de devis</td><td>Chiffrer les solutions techniques, choisir procédé et support</td><td>Fiche d'étude, devis détaillé</td></tr>\n<tr><td>Ordonnancement, planning</td><td>Programmer les travaux sur les postes, gérer les priorités et les délais</td><td>Planning, dossier de fabrication</td></tr>\n<tr><td>Prépresse ou studio</td><td>Réceptionner, contrôler et préparer les fichiers, réaliser les épreuves et l'imposition</td><td>Rapport de contrôle, épreuve, BAT, formes imprimantes</td></tr>\n<tr><td>Impression</td><td>Caler et conduire les presses, contrôler la conformité</td><td>Fiche de suivi, relevés de mesure</td></tr>\n<tr><td>Façonnage, finition</td><td>Couper, plier, assembler, relier, ennoblir</td><td>Fiche de façonnage, bon à façonner</td></tr>\n<tr><td>Expédition, logistique</td><td>Conditionner, étiqueter, livrer ou router</td><td>Bon de livraison, bordereau</td></tr>\n<tr><td>Qualité, maintenance, achats</td><td>Fonctions support : contrôler, entretenir, approvisionner</td><td>Fiches de non-conformité, carnets de maintenance, commandes fournisseurs</td></tr>\n</tbody></table>\n<p>Dans une petite entreprise, une même personne cumule plusieurs fonctions : le dirigeant fait les devis, l'opérateur prépresse réalise aussi les épreuves et parfois l'impression numérique. Dans un grand groupe, chaque service est séparé et la circulation de l'information devient l'enjeu principal. Le titulaire du bac pro travaille en prépresse (option productions graphiques) ou en impression et finition (option productions imprimées), mais il doit comprendre toute la chaîne, car ses choix ont des conséquences en amont et en aval.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans la plupart des imprimeries, on appelle « chargé de fabrication » ou « technico-commercial » la personne qui suit une commande de bout en bout. C'est l'interlocuteur à prévenir dès qu'un fichier pose problème : c'est lui qui contacte le client, jamais l'opérateur directement, sauf consigne contraire.</div>"
      },
      {
       "titre": "Trois flux qui circulent en parallèle",
       "contenu": "<p>Pour analyser l'organisation d'une production, on distingue trois <strong>flux</strong>, c'est-à-dire trois circulations qui accompagnent une commande.</p>\n<ul>\n<li>Le <strong>flux de matière</strong> : papiers, cartons, encres, plaques, colles, films, emballages. Il part du magasin, passe par les machines et finit chez le client ou en déchets.</li>\n<li>Le <strong>flux d'information</strong> : la commande, les consignes, les délais, les validations, les quantités produites, les temps passés. Il remonte aussi de l'atelier vers la gestion (temps réels, gâche, incidents).</li>\n<li>Le <strong>flux de données numériques</strong> : les fichiers du client, transformés au fil du prépresse (contrôle, normalisation, imposition, tramage) jusqu'à la forme imprimante ou jusqu'au fichier de diffusion numérique.</li>\n</ul>\n<p>Un retard ou une erreur dans un flux bloque les autres. Exemple : le papier est livré (flux de matière correct) mais le BAT n'est pas signé (flux d'information bloqué) ; la presse attend et le créneau de planning est perdu.</p>\n<p>Les flux se représentent par un <strong>logigramme</strong> ou un <strong>synoptique</strong> : une suite de cases (opérations) reliées par des flèches, avec des losanges pour les décisions (le fichier est-il conforme ? le BAT est-il signé ?). Savoir lire et compléter ce type de schéma est attendu à l'épreuve écrite d'étude d'un dossier de fabrication.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une commande, c'est toujours trois flux à synchroniser : la matière, l'information et les données. L'opérateur agit sur les trois : il consomme de la matière, il produit des données et il renseigne l'information de suivi.</div>"
      },
      {
       "titre": "Le logiciel de gestion de production",
       "contenu": "<p>Les entreprises graphiques utilisent un <strong>logiciel de gestion de production</strong>, souvent appelé <strong>MIS</strong> (de l'anglais <em>Management Information System</em>) ou <strong>ERP</strong> (progiciel de gestion intégré). Il centralise toutes les informations d'une commande à partir d'un numéro unique : le <strong>numéro de dossier</strong> ou numéro d'affaire.</p>\n<p>Ses fonctions habituelles sont :</p>\n<ul>\n<li>le chiffrage des devis à partir de barèmes (taux horaires des machines, prix des papiers, temps de calage) ;</li>\n<li>l'édition du dossier de fabrication et du planning ;</li>\n<li>la gestion des stocks de papier et de consommables ;</li>\n<li>la saisie des temps et des quantités en atelier, appelée <strong>suivi de production</strong> ou <strong>saisie des données de production</strong> ;</li>\n<li>la comparaison entre le prévu et le réalisé, puis la facturation.</li>\n</ul>\n<p>Dans l'atelier, l'opérateur interagit avec ce logiciel au moyen d'un terminal : il « pointe » le début et la fin de chaque opération (calage, tirage, nettoyage, attente, panne), déclare les quantités bonnes et la gâche. Ces données permettent ensuite au service de gestion de calculer la rentabilité réelle de la commande.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un pointage oublié ou approximatif fausse le coût de revient. Si un calage a duré 45 minutes au lieu des 20 prévues, il faut le déclarer et indiquer la cause : c'est cette information qui permet de corriger les barèmes ou de résoudre un problème récurrent.</div>"
      },
      {
       "titre": "Le workflow prépresse",
       "contenu": "<p>Le <strong>workflow</strong> (flux de travail) prépresse est un logiciel serveur qui automatise le traitement des fichiers. Au lieu de lancer à la main chaque opération, l'opérateur dépose les fichiers dans une <strong>file d'attente</strong> ou un <strong>dossier surveillé</strong> (<em>hot folder</em>) ; le serveur enchaîne alors des traitements définis à l'avance :</p>\n<ol>\n<li>réception et normalisation du fichier (conversion en PDF conforme) ;</li>\n<li>contrôle en amont automatique et production d'un rapport ;</li>\n<li>conversion des couleurs selon le profil de sortie ;</li>\n<li>génération d'une épreuve écran ou papier pour le client ;</li>\n<li>imposition selon un gabarit ;</li>\n<li>tramage par le <strong>RIP</strong> (processeur d'image tramée) et envoi vers le CtP ou la presse numérique.</li>\n</ol>\n<p>Chaque étape est paramétrée par un <strong>ticket</strong> ou une <strong>séquence de traitement</strong>. L'avantage est la répétabilité : deux travaux traités avec la même séquence reçoivent exactement les mêmes réglages. Le risque est l'automatisme aveugle : une séquence mal choisie applique la même erreur à toute la production.</p>\n<p>Beaucoup de workflows proposent aussi un <strong>portail web client</strong> : le client y dépose ses fichiers, voit le rapport de contrôle, valide les pages une à une et signe le BAT en ligne. La date et l'heure de chaque validation sont enregistrées, ce qui a une valeur de preuve en cas de litige.</p>"
      },
      {
       "titre": "Le ticket de travail numérique : JDF et JMF",
       "contenu": "<p>Pour que le logiciel de gestion, le workflow prépresse, les presses et les machines de façonnage se comprennent, l'industrie graphique a défini un format d'échange commun : le <strong>JDF</strong> (<em>Job Definition Format</em>), développé par l'organisation internationale <strong>CIP4</strong>. Il s'agit d'un fichier au format XML qui décrit un travail : produit à fabriquer, quantités, format, support, couleurs, imposition, façonnage, délais.</p>\n<p>Le JDF est accompagné du <strong>JMF</strong> (<em>Job Messaging Format</em>), qui sert aux messages en temps réel : une presse signale qu'elle a commencé le tirage, qu'elle a produit 3 000 feuilles, qu'elle est à l'arrêt. Une version simplifiée, le XJDF, est apparue pour faciliter les échanges.</p>\n<table><thead><tr><th>Exemple d'information JDF</th><th>Utilisée par</th><th>Effet concret</th></tr></thead><tbody>\n<tr><td>Format et grammage du papier</td><td>Presse</td><td>Préréglage du margeur et de la réception</td></tr>\n<tr><td>Couverture d'encre par zone</td><td>Presse offset</td><td>Préréglage des vis d'encrier</td></tr>\n<tr><td>Schéma de pliage</td><td>Plieuse</td><td>Préréglage des poches et des butées</td></tr>\n<tr><td>Programme de coupe</td><td>Massicot</td><td>Chargement automatique des cotes</td></tr>\n<tr><td>Temps et quantités réalisés</td><td>Logiciel de gestion</td><td>Suivi automatique sans saisie manuelle</td></tr>\n</tbody></table>\n<p>Le gain le plus visible est le <strong>préréglage d'encrage</strong> : le workflow calcule, à partir des formes imprimantes, la quantité d'encre nécessaire dans chaque zone de la presse. Le calage démarre alors beaucoup plus près de la bonne densité, ce qui réduit le temps de calage et la gâche.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le JDF est le « dossier de fabrication numérique » lisible par les machines ; le JMF transporte les messages d'état. Ils remplacent de nombreuses saisies manuelles mais ne dispensent pas de vérifier les préréglages.</div>"
      },
      {
       "titre": "Les points de validation d'une commande",
       "contenu": "<p>Une commande passe par une série de validations. Chacune engage une personne et fige un élément ; revenir en arrière après une validation coûte du temps et de l'argent.</p>\n<table><thead><tr><th>Étape</th><th>Document</th><th>Qui valide</th><th>Ce qui est figé</th></tr></thead><tbody>\n<tr><td>Accord commercial</td><td>Devis signé ou bon de commande</td><td>Client</td><td>Prix, quantité, caractéristiques, délai</td></tr>\n<tr><td>Réception des fichiers</td><td>Rapport de contrôle en amont</td><td>Prépresse</td><td>Conformité technique des données</td></tr>\n<tr><td>Validation du contenu</td><td>Bon à tirer (BAT)</td><td>Client</td><td>Textes, images, mise en page, couleurs de référence</td></tr>\n<tr><td>Validation en machine</td><td>Bon à rouler (BAR)</td><td>Conducteur, parfois client présent</td><td>Feuille de référence pour tout le tirage</td></tr>\n<tr><td>Validation du façonnage</td><td>Bon à façonner</td><td>Responsable de finition</td><td>Exemplaire de référence plié, coupé, assemblé</td></tr>\n<tr><td>Livraison</td><td>Bon de livraison signé</td><td>Client</td><td>Quantité reçue, réserves éventuelles</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour reconstituer le parcours d'une commande à partir d'un dossier, procéder ainsi. 1. Relever le numéro de dossier, le client et la date de livraison. 2. Lister les opérations dans l'ordre (prépresse, forme imprimante, impression, façonnage, expédition). 3. Pour chaque opération, noter le poste, le document d'entrée et le document de sortie. 4. Placer les validations (BAT, BAR, bon à façonner) entre les opérations concernées. 5. Repérer l'étape critique, celle dont le retard décale toutes les suivantes, généralement le retour du BAT. Le résultat se présente sous forme de logigramme ou de tableau à quatre colonnes : opération, poste, entrée, sortie.</div>\n<p>Ce raisonnement en étapes, avec entrées, sorties et validations, est celui que l'on retrouve dans tout le cours : il sert aussi bien à organiser une production qu'à analyser un document professionnel.</p>"
      }
     ],
     "points_cles": [
      "Une commande traverse plusieurs services : commercial, devis, planning, prépresse, impression, façonnage, expédition",
      "Trois flux circulent en parallèle : matière, information et données numériques",
      "Le logiciel de gestion (MIS ou ERP) centralise le devis, le dossier, les stocks, le suivi et la facturation",
      "Le pointage des temps et des quantités en atelier alimente le calcul du coût réel",
      "Le workflow prépresse automatise normalisation, contrôle, conversion, épreuve, imposition et tramage",
      "Le JDF est un ticket de travail au format XML ; le JMF transporte les messages d'état des machines",
      "Le préréglage d'encrage issu des formes imprimantes réduit le temps de calage et la gâche",
      "Chaque validation (BAT, BAR, bon à façonner) fige un élément de la production"
     ],
     "lexique": [
      {
       "terme": "MIS / ERP",
       "def": "Logiciel de gestion de l'entreprise graphique qui centralise devis, dossiers, stocks, suivi et facturation."
      },
      {
       "terme": "Numéro de dossier",
       "def": "Identifiant unique d'une commande, repris sur tous les documents de fabrication."
      },
      {
       "terme": "Workflow",
       "def": "Logiciel serveur qui enchaîne automatiquement les traitements des fichiers en prépresse."
      },
      {
       "terme": "Dossier surveillé",
       "def": "Dossier dont le contenu est traité automatiquement par le workflow dès qu'un fichier y est déposé."
      },
      {
       "terme": "RIP",
       "def": "Processeur d'image tramée : il interprète le fichier et calcule les points de trame pour la sortie."
      },
      {
       "terme": "JDF",
       "def": "Job Definition Format : format XML décrivant un travail graphique pour les logiciels et les machines."
      },
      {
       "terme": "JMF",
       "def": "Job Messaging Format : format des messages en temps réel entre machines et logiciels."
      },
      {
       "terme": "Logigramme",
       "def": "Schéma représentant une suite d'opérations et de décisions reliées par des flèches."
      },
      {
       "terme": "Suivi de production",
       "def": "Enregistrement des temps, quantités, gâche et incidents de chaque opération."
      }
     ]
    },
    {
     "id": "brpip-donnees-numeriques",
     "titre": "Données numériques : codage, formats et polices",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Expliquer comment une image et un texte sont codés en bits et en octets",
      "Calculer le poids d'une image matricielle non compressée",
      "Distinguer compression sans perte et compression avec perte et choisir selon l'usage",
      "Identifier les formats de polices et les risques liés à leur gestion",
      "Organiser, nommer, sauvegarder et transférer les fichiers d'un dossier"
     ],
     "sections": [
      {
       "titre": "Du bit à l'octet : comment l'ordinateur code l'information",
       "contenu": "<p>Un ordinateur ne manipule que deux états, notés 0 et 1. Chacun de ces chiffres binaires est un <strong>bit</strong>. Un groupe de 8 bits forme un <strong>octet</strong>, qui peut prendre 2<sup>8</sup> = 256 valeurs différentes, de 0 à 255. Toutes les données d'un studio graphique, textes, images, polices, mises en page, sont finalement des suites d'octets.</p>\n<p>Les multiples utilisés pour exprimer le poids des fichiers posent souvent problème. Deux systèmes coexistent :</p>\n<table><thead><tr><th>Préfixe décimal (SI)</th><th>Valeur</th><th>Préfixe binaire (CEI)</th><th>Valeur</th></tr></thead><tbody>\n<tr><td>kilooctet (ko)</td><td>1 000 octets</td><td>kibioctet (Kio)</td><td>1 024 octets</td></tr>\n<tr><td>mégaoctet (Mo)</td><td>10<sup>6</sup> octets</td><td>mébioctet (Mio)</td><td>1 048 576 octets</td></tr>\n<tr><td>gigaoctet (Go)</td><td>10<sup>9</sup> octets</td><td>gibioctet (Gio)</td><td>1 073 741 824 octets</td></tr>\n</tbody></table>\n<p>Les fabricants de disques utilisent les multiples décimaux, certains systèmes d'exploitation affichent des valeurs binaires en les notant « Go ». C'est pourquoi un disque vendu « 1 To » apparaît avec environ 931 « Go » disponibles. Dans un calcul d'examen, il faut indiquer quel système est utilisé ; à défaut de consigne, on emploie les multiples décimaux.</p>\n<p>Le texte est codé selon une table de correspondance entre caractères et nombres. La norme actuelle est <strong>Unicode</strong>, généralement enregistrée en <strong>UTF-8</strong> : chaque caractère occupe de 1 à 4 octets. Unicode permet d'écrire toutes les langues et les symboles typographiques (espaces insécables, guillemets français, tirets). Un texte importé avec un mauvais codage fait apparaître des caractères parasites à la place des lettres accentuées : c'est un défaut à repérer dès la réception des textes.</p>"
      },
      {
       "titre": "Le poids d'une image matricielle",
       "contenu": "<p>Une image matricielle est une grille de pixels. Chaque pixel est décrit par une ou plusieurs <strong>couches</strong> (ou canaux) : une seule en niveaux de gris, trois en RVB, quatre en CMJN. La <strong>profondeur</strong> indique le nombre de bits par couche : 8 bits par couche donnent 256 niveaux, 16 bits par couche donnent 65 536 niveaux.</p>\n<p>Le poids d'une image non compressée se calcule ainsi :</p>\n<p><strong>Poids (octets) = nombre de pixels en largeur × nombre de pixels en hauteur × nombre de couches × (bits par couche ÷ 8)</strong></p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul du poids d'une image destinée à une page A4 pleine page avec fonds perdus. Données : format avec fonds perdus 216 × 303 mm, résolution 300 ppp, CMJN 8 bits. 1. Convertir les dimensions en pouces : 216 ÷ 25,4 = 8,50 pouces ; 303 ÷ 25,4 = 11,93 pouces. 2. Calculer le nombre de pixels : 8,50 × 300 = 2 551 pixels ; 11,93 × 300 = 3 579 pixels. 3. Nombre total de pixels : 2 551 × 3 579 = 9 130 029 pixels. 4. Multiplier par 4 couches et 1 octet par couche : 9 130 029 × 4 = 36 520 116 octets. 5. Exprimer le résultat : environ 36,5 Mo (décimal), soit environ 34,8 Mio. En RVB, le même fichier pèserait les trois quarts, soit environ 27,4 Mo.</div>\n<p>Ce calcul montre pourquoi une conversion RVB vers CMJN augmente le poids d'un tiers et pourquoi le passage en 16 bits par couche le double. Il sert aussi à estimer l'espace de stockage d'un catalogue de plusieurs centaines d'images ou la durée d'un transfert.</p>\n<p>Les images en mode <strong>bitmap</strong> (1 bit par pixel, noir ou blanc), utilisées pour les traits et les logos au trait, sont très légères malgré une résolution élevée, souvent 1 200 ppp ou plus.</p>"
      },
      {
       "titre": "Compresser les données",
       "contenu": "<p>La <strong>compression</strong> réduit le poids d'un fichier en codant l'information de manière plus économe. On distingue deux familles.</p>\n<ul>\n<li>La <strong>compression sans perte</strong> : le fichier décompressé est strictement identique à l'original. Exemples : LZW et ZIP dans le format TIFF, compression du format PNG, archives ZIP. Le gain dépend du contenu : une image avec de grands aplats se compresse beaucoup, une photo très détaillée peu.</li>\n<li>La <strong>compression avec perte</strong> : une partie de l'information jugée peu visible est supprimée. Exemple : JPEG, qui découpe l'image en blocs de 8 × 8 pixels et simplifie les détails fins. Le gain est fort, mais les défauts (blocs, halos autour des contours nets, bavures des couleurs) s'aggravent à chaque nouvel enregistrement.</li>\n</ul>\n<table><thead><tr><th>Usage</th><th>Compression conseillée</th><th>Raison</th></tr></thead><tbody>\n<tr><td>Image de travail en cours de retouche</td><td>Aucune ou sans perte</td><td>Préserver la qualité à chaque enregistrement</td></tr>\n<tr><td>Photo dans un PDF d'impression</td><td>JPEG qualité maximale ou sans perte</td><td>Défauts invisibles à l'impression</td></tr>\n<tr><td>Logo, texte en image, capture d'écran</td><td>Sans perte (PNG, ZIP)</td><td>Le JPEG crée des halos autour des contours nets</td></tr>\n<tr><td>Image pour le web</td><td>JPEG ou WebP qualité moyenne</td><td>Rapidité d'affichage</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ouvrir un JPEG, le modifier puis l'enregistrer de nouveau en JPEG recompresse toute l'image. Après plusieurs cycles, la qualité se dégrade visiblement. On travaille sur une copie au format natif ou TIFF et on n'exporte en JPEG qu'à la fin.</div>"
      },
      {
       "titre": "Les polices de caractères numériques",
       "contenu": "<p>Une <strong>police numérique</strong> est un fichier contenant le dessin vectoriel de chaque caractère (les <strong>glyphes</strong>), leurs approches et les tables de crénage. Trois formats coexistent dans les studios :</p>\n<ul>\n<li><strong>PostScript Type 1</strong> : format ancien en deux fichiers (écran et imprimante), limité à 256 glyphes. Les principaux logiciels de mise en page ont cessé de le prendre en charge ; un document ancien qui l'utilise doit être recomposé avec une police actuelle.</li>\n<li><strong>TrueType</strong> : un seul fichier, contours décrits par des courbes quadratiques.</li>\n<li><strong>OpenType</strong> : format actuel, un seul fichier multiplateforme, codage Unicode, jusqu'à 65 536 glyphes, fonctions typographiques avancées (ligatures, chiffres elzéviriens, petites capitales, variantes contextuelles).</li>\n</ul>\n<p>La police est une œuvre protégée : son utilisation est encadrée par une <strong>licence</strong> qui précise le nombre de postes, l'usage autorisé (impression, web, application) et la possibilité de l'incorporer dans un PDF. Un studio doit pouvoir justifier de ses licences.</p>\n<p>Les problèmes courants sont la police manquante (le logiciel la remplace par une police par défaut et la mise en page change), le conflit entre deux versions d'une même police portant le même nom, et la <strong>police non incorporée</strong> dans un PDF. Un gestionnaire de polices permet d'activer seulement les polices utiles à un dossier et de repérer les doublons.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans un PDF destiné à l'impression, toutes les polices doivent être incorporées, au moins sous forme de sous-ensemble des glyphes utilisés. C'est une exigence des normes PDF/X.</div>"
      },
      {
       "titre": "Organiser, nommer et protéger les fichiers",
       "contenu": "<p>Un dossier de production réunit de nombreux fichiers : textes du client, images originales, images retouchées, mise en page, PDF, épreuves, rapports. Une organisation rigoureuse évite de perdre du temps et surtout d'imprimer une mauvaise version.</p>\n<p>Une <strong>arborescence</strong> type pour un dossier comprend : un dossier « 01_client » (fichiers reçus, jamais modifiés), « 02_images », « 03_mise_en_page », « 04_pdf », « 05_epreuves_bat », « 06_archives ». Les fichiers d'origine sont conservés intacts : on travaille toujours sur une copie.</p>\n<p>Les règles de <strong>nommage</strong> évitent les erreurs de transfert entre systèmes :</p>\n<ul>\n<li>pas d'accents, d'espaces ni de caractères spéciaux (slash, deux-points, astérisque) ;</li>\n<li>un nom qui contient le numéro de dossier, l'objet et la version, par exemple 24518_depliant_v03.pdf ;</li>\n<li>une date au format année-mois-jour pour que le tri alphabétique soit chronologique ;</li>\n<li>jamais de mention « final » ou « definitif », toujours un numéro de version.</li>\n</ul>\n<p>La <strong>sauvegarde</strong> suit souvent la règle dite « 3-2-1 » : trois copies des données, sur deux supports différents, dont une hors du site. Le serveur de production est complété par un système de sauvegarde automatique et par un stockage distant.</p>\n<p>Pour transférer des fichiers lourds, on utilise un serveur FTP sécurisé (SFTP), le portail du workflow ou un service de transfert. Le fichier est généralement compressé en archive ZIP, ce qui regroupe les éléments et permet de vérifier leur intégrité à l'arrivée. La messagerie électronique est limitée en taille et ne convient qu'aux petits fichiers.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fichiers clients peuvent contenir des données personnelles (fichiers d'adresses pour un publipostage) ou confidentielles (rapport annuel avant publication). Le règlement général sur la protection des données (RGPD) impose de les protéger, de ne les utiliser que pour la commande et de les supprimer ensuite selon la politique de l'entreprise.</div>"
      },
      {
       "titre": "Les métadonnées et l'archivage",
       "contenu": "<p>Les <strong>métadonnées</strong> sont des données qui décrivent un fichier : auteur, date de création, logiciel, dimensions, résolution, profil colorimétrique, mots-clés, droits d'auteur. Pour les images, on rencontre les métadonnées <strong>EXIF</strong> (enregistrées par l'appareil photo : date, ouverture, vitesse, sensibilité) et <strong>XMP</strong> (format ouvert d'Adobe, utilisé par la plupart des logiciels graphiques). Un PDF/X contient lui aussi des métadonnées qui indiquent la norme respectée et les conditions d'impression visées.</p>\n<p>Elles servent à retrouver un fichier dans une <strong>photothèque</strong> ou un système de gestion des ressources numériques (souvent appelé DAM), à vérifier les droits d'utilisation d'une image et à contrôler automatiquement des paramètres techniques.</p>\n<p>Un dossier terminé est <strong>archivé</strong> : on conserve la mise en page assemblée (avec ses images et polices), le PDF imprimé, le BAT signé et le rapport de contrôle. Une réimpression doit pouvoir être relancée à l'identique plusieurs années après. On choisit pour cela des formats pérennes et documentés, comme le PDF/X pour la sortie et le TIFF pour les images.</p>"
      }
     ],
     "points_cles": [
      "Un octet vaut 8 bits et code 256 valeurs ; le texte est codé en Unicode, généralement en UTF-8",
      "Poids d'une image = pixels en largeur × pixels en hauteur × nombre de couches × octets par couche",
      "Une image CMJN pèse un tiers de plus que la même image en RVB",
      "La compression sans perte conserve tout ; la compression JPEG supprime des détails et se dégrade à chaque réenregistrement",
      "OpenType est le format de police actuel ; le Type 1 n'est plus pris en charge par les logiciels récents",
      "Toutes les polices doivent être incorporées dans un PDF d'impression",
      "Nommage sans accent ni espace, avec numéro de dossier et numéro de version",
      "Les fichiers d'origine du client sont conservés intacts ; on travaille sur des copies"
     ],
     "lexique": [
      {
       "terme": "Bit",
       "def": "Plus petite unité d'information, valant 0 ou 1."
      },
      {
       "terme": "Octet",
       "def": "Groupe de 8 bits pouvant coder 256 valeurs."
      },
      {
       "terme": "Profondeur",
       "def": "Nombre de bits utilisés pour coder chaque couche d'un pixel."
      },
      {
       "terme": "Compression sans perte",
       "def": "Réduction du poids d'un fichier permettant de retrouver exactement les données d'origine."
      },
      {
       "terme": "Compression avec perte",
       "def": "Réduction du poids par suppression d'informations jugées peu visibles, de façon irréversible."
      },
      {
       "terme": "Glyphe",
       "def": "Dessin d'un caractère dans une police donnée."
      },
      {
       "terme": "OpenType",
       "def": "Format de police multiplateforme fondé sur Unicode, avec fonctions typographiques avancées."
      },
      {
       "terme": "Unicode",
       "def": "Norme qui attribue un numéro unique à chaque caractère de toutes les écritures."
      },
      {
       "terme": "Métadonnées",
       "def": "Informations décrivant un fichier : auteur, date, dimensions, profil, droits."
      },
      {
       "terme": "Arborescence",
       "def": "Organisation hiérarchique des dossiers et sous-dossiers."
      }
     ]
    },
    {
     "id": "brpip-pdf-normalise",
     "titre": "Le PDF normalisé et le contrôle en amont approfondi",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Distinguer les principales variantes de la norme PDF/X et choisir celle qui convient",
      "Expliquer les notions de boîtes de page, de transparence et de surimpression dans un PDF",
      "Paramétrer et interpréter un contrôle en amont selon un profil",
      "Classer les anomalies détectées en erreurs bloquantes, avertissements et informations",
      "Décider d'une correction en prépresse ou d'un retour au client"
     ],
     "sections": [
      {
       "titre": "Pourquoi normaliser le PDF",
       "contenu": "<p>Le <strong>PDF</strong> (<em>Portable Document Format</em>) est devenu le format d'échange de toute la chaîne graphique. Mais un PDF « ordinaire » peut contenir des éléments incompatibles avec l'impression : polices absentes, images en RVB, fichiers liés externes, scripts, annotations, vidéos. Pour garantir un échange fiable, des normes internationales définissent des sous-ensembles du PDF destinés à l'impression : la famille <strong>PDF/X</strong> (le X pour <em>exchange</em>), publiée sous la référence ISO 15930.</p>\n<p>Un fichier PDF/X doit notamment :</p>\n<ul>\n<li>contenir toutes ses polices incorporées ;</li>\n<li>contenir toutes ses images (aucun fichier lié à l'extérieur, sauf cas particuliers prévus par certaines variantes) ;</li>\n<li>déclarer les <strong>conditions d'impression visées</strong> par un <strong>OutputIntent</strong>, c'est-à-dire un profil ou une référence de caractérisation (par exemple une condition d'impression offset sur papier couché) ;</li>\n<li>définir les boîtes de page, en particulier le format fini ;</li>\n<li>indiquer s'il a été recouvert (<em>trapping</em>) ou non ;</li>\n<li>exclure les éléments interactifs, le chiffrement et les annotations dans la zone imprimable.</li>\n</ul>\n<p>La conformité est indiquée dans les métadonnées du fichier. Elle ne garantit pas que le document est « bon » : un PDF/X peut contenir une image à 72 ppp ou une faute d'orthographe. La norme assure seulement que le fichier est techniquement exploitable de manière prévisible.</p>"
      },
      {
       "titre": "Les variantes PDF/X",
       "contenu": "<table><thead><tr><th>Variante</th><th>Couleurs autorisées</th><th>Transparence</th><th>Usage typique</th></tr></thead><tbody>\n<tr><td>PDF/X-1a</td><td>CMJN et tons directs uniquement</td><td>Interdite (doit être aplatie)</td><td>Annonces presse, flux où l'imprimeur ne veut aucune conversion</td></tr>\n<tr><td>PDF/X-3</td><td>CMJN, tons directs et couleurs gérées par profil (RVB, Lab)</td><td>Interdite</td><td>Flux gérés en couleur ; aujourd'hui peu utilisé</td></tr>\n<tr><td>PDF/X-4</td><td>CMJN, tons directs et couleurs gérées par profil</td><td>Autorisée (transparence native)</td><td>Norme recommandée pour les flux actuels avec workflow récent</td></tr>\n</tbody></table>\n<p>Le <strong>PDF/X-1a</strong> est le plus « fermé » : tout est déjà converti en CMJN pour la condition d'impression prévue. L'imprimeur reçoit un fichier prêt, mais il ne peut plus l'adapter à une autre condition (autre papier, autre procédé) sans dégradation.</p>\n<p>Le <strong>PDF/X-4</strong> conserve la transparence et les calques optionnels, et accepte des images en RVB accompagnées de leur profil. La conversion en CMJN se fait alors au RIP, au dernier moment, selon le support réellement utilisé. C'est l'approche dite de <strong>flux tardif</strong> ou de conversion tardive, plus souple, mais qui exige un workflow capable d'interpréter correctement la transparence (moteur d'interprétation natif PDF).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> PDF/X-1a = tout en CMJN, transparence aplatie, aucune surprise mais aucune souplesse. PDF/X-4 = transparence et couleurs gérées conservées, conversion au dernier moment. Le choix est fixé par le cahier des charges de l'imprimeur ou du support de presse.</div>"
      },
      {
       "titre": "Boîtes de page, transparence et surimpression",
       "contenu": "<p>Un PDF décrit plusieurs <strong>boîtes</strong> imbriquées qui délimitent des zones de la page :</p>\n<table><thead><tr><th>Boîte</th><th>Définition</th><th>Exemple pour un A4</th></tr></thead><tbody>\n<tr><td>MediaBox</td><td>Taille totale de la page PDF, marques comprises</td><td>240 × 327 mm</td></tr>\n<tr><td>BleedBox</td><td>Format avec fonds perdus</td><td>216 × 303 mm</td></tr>\n<tr><td>TrimBox</td><td>Format fini après coupe</td><td>210 × 297 mm</td></tr>\n<tr><td>ArtBox</td><td>Zone utile définie par le créateur (facultative)</td><td>Selon le document</td></tr>\n</tbody></table>\n<p>La <strong>TrimBox</strong> est essentielle : c'est elle que le logiciel d'imposition utilise pour placer les pages. Une TrimBox absente ou fausse provoque un décalage de toutes les poses.</p>\n<p>La <strong>transparence</strong> regroupe les effets d'opacité, d'ombre portée, de contour progressif et de modes de fusion (produit, superposition…). En PDF/X-1a, ces effets doivent être <strong>aplatis</strong> : le logiciel découpe les zones concernées en morceaux opaques équivalents. Un aplatissement mal paramétré peut produire des filets blancs visibles, des textes vectoriels transformés en images floues ou des différences de couleur entre zones voisines.</p>\n<p>La <strong>surimpression</strong> indique qu'un objet s'imprime par-dessus les couleurs déjà présentes au lieu de les effacer (la <strong>défonce</strong>). Le texte noir est en général mis en surimpression pour éviter un liseré blanc en cas de léger défaut de repérage. En revanche, un objet blanc en surimpression disparaît totalement à l'impression, et un texte de couleur claire en surimpression change de teinte. Ces erreurs ne sont visibles qu'avec l'<strong>aperçu de la surimpression</strong> activé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un logo blanc réglé par erreur en surimpression est invisible à l'impression, alors qu'il apparaît normalement à l'écran si l'aperçu de surimpression est désactivé. C'est une cause classique de réimpression à la charge de l'imprimeur s'il n'a pas été détecté au contrôle.</div>"
      },
      {
       "titre": "Le profil de contrôle en amont",
       "contenu": "<p>Le <strong>contrôle en amont</strong> (<em>preflight</em>) consiste à vérifier automatiquement un fichier selon une liste de règles appelée <strong>profil de contrôle</strong>. Le logiciel de contrôle peut être intégré au logiciel de mise en page, à un outil spécialisé ou au workflow.</p>\n<p>Un profil associe à chaque règle un niveau de gravité :</p>\n<ul>\n<li><strong>erreur</strong> : le fichier ne peut pas être produit en l'état (police manquante, image RVB dans un flux PDF/X-1a, TrimBox absente) ;</li>\n<li><strong>avertissement</strong> : point à examiner, qui peut être acceptable (image à 200 ppp, filet très fin, taux d'encrage légèrement élevé) ;</li>\n<li><strong>information</strong> : simple constat (présence de tons directs, nombre de pages).</li>\n</ul>\n<table><thead><tr><th>Contrôle</th><th>Seuil fréquent pour l'offset sur papier couché</th></tr></thead><tbody>\n<tr><td>Résolution des images en couleur ou en niveaux de gris</td><td>Avertissement en dessous d'environ 225 ppp, erreur en dessous d'environ 150 ppp</td></tr>\n<tr><td>Résolution des images au trait (bitmap)</td><td>Avertissement en dessous d'environ 800 ppp</td></tr>\n<tr><td>Taux d'encrage maximal</td><td>Selon la condition d'impression, par exemple 300 % à 330 %</td></tr>\n<tr><td>Épaisseur minimale des filets</td><td>Environ 0,1 mm (0,25 pt), davantage pour un filet en défonce ou en plusieurs couleurs</td></tr>\n<tr><td>Corps minimal des textes en plusieurs couleurs</td><td>Environ 6 à 8 pt selon la graisse</td></tr>\n<tr><td>Fonds perdus</td><td>3 mm au moins, souvent 5 mm pour certains produits</td></tr>\n</tbody></table>\n<p>Ces valeurs sont indicatives : chaque imprimeur fixe les siennes dans un cahier des charges technique. Le groupe international <strong>Ghent Workgroup</strong> publie des spécifications et des profils de contrôle partagés par de nombreux acteurs ; les utiliser facilite les échanges.</p>"
      },
      {
       "titre": "Corriger ou renvoyer : la décision de l'opérateur",
       "contenu": "<p>Face à un rapport de contrôle, l'opérateur ne corrige pas tout automatiquement. Il distingue trois cas :</p>\n<ol>\n<li><strong>Correction technique sans effet sur le contenu</strong>, que le prépresse peut faire : conversion d'un ton direct en quadrichromie quand le devis ne prévoit que 4 couleurs, ajout d'une TrimBox manquante, réduction du taux d'encrage par conversion de profil. Ces corrections sont <strong>tracées</strong> et signalées au client par l'épreuve.</li>\n<li><strong>Correction qui modifie le contenu</strong> : remplacer une image, agrandir un fond perdu en étirant un visuel, changer une police. Elle demande l'accord du client ou un nouveau fichier.</li>\n<li><strong>Défaut non corrigible</strong> : image trop basse résolution, texte coupé au massicot. Le fichier est renvoyé avec une explication claire.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> traiter un rapport de contrôle en cinq étapes. 1. Vérifier que le bon profil a été utilisé (procédé, support, norme PDF/X demandée). 2. Lire d'abord les erreurs, puis les avertissements, et noter pour chacun la page et l'objet concernés. 3. Ouvrir le fichier et confirmer chaque anomalie visuellement (aperçu de séparation, de surimpression, de taux d'encrage). 4. Classer chaque anomalie : correction prépresse, accord client, renvoi. 5. Rédiger une fiche de retour avec, pour chaque point, la page, le problème, sa conséquence à l'impression et la solution proposée. Exemple de rédaction : « Page 3 : photo de couverture à 118 ppp effectifs. Conséquence : image floue et pixelisée à l'impression. Solution : fournir l'original en plus haute définition ou réduire son format d'affichage d'environ 50 %. »</div>\n<p>Le dernier contrôle reste humain : un logiciel ne voit pas qu'un texte est coupé par un pli, qu'un numéro de page est faux ou qu'un logo est déformé.</p>"
      },
      {
       "titre": "Les aperçus de sortie",
       "contenu": "<p>Les logiciels de contrôle offrent des <strong>aperçus</strong> qui simulent le résultat imprimé :</p>\n<ul>\n<li>l'<strong>aperçu des séparations</strong> affiche chaque encre séparément et indique, sous le curseur, le pourcentage de chaque couleur ; il révèle un noir composé en quadrichromie dans un petit texte ou un ton direct inattendu ;</li>\n<li>l'<strong>aperçu du taux d'encrage</strong> colore les zones qui dépassent un seuil choisi ;</li>\n<li>l'<strong>aperçu de la surimpression</strong> montre le rendu réel des objets en surimpression ;</li>\n<li>l'<strong>aperçu de l'aplatissement</strong> repère les zones touchées par la transparence ;</li>\n<li>l'aperçu des <strong>boîtes</strong> affiche TrimBox et BleedBox pour vérifier les fonds perdus.</li>\n</ul>\n<p>Un réflexe utile consiste à vérifier les petits textes et les filets noirs : ils doivent être en noir seul (0-0-0-100) pour éviter les problèmes de repérage. À l'inverse, un grand aplat noir gagne à être composé en <strong>noir riche</strong> (par exemple 40 % de cyan ajouté au noir) pour paraître plus profond, à condition que le taux d'encrage reste dans les limites.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les imprimeurs en ligne qui reçoivent des milliers de fichiers par jour appliquent un contrôle automatique strict à la commande. Les petites imprimeries contrôlent souvent à la main. Dans les deux cas, le rapport de contrôle est archivé avec le dossier comme preuve de l'état du fichier reçu.</div>"
      }
     ],
     "points_cles": [
      "Le PDF/X (ISO 15930) est un sous-ensemble du PDF garantissant un échange fiable pour l'impression",
      "Un PDF/X impose polices incorporées, images incluses, boîtes de page et conditions d'impression visées",
      "PDF/X-1a : CMJN et tons directs, transparence aplatie ; PDF/X-4 : transparence et couleurs gérées conservées",
      "La TrimBox définit le format fini utilisé par l'imposition ; la BleedBox inclut les fonds perdus",
      "Un objet blanc en surimpression disparaît à l'impression",
      "Un profil de contrôle classe les anomalies en erreurs, avertissements et informations",
      "Une correction qui modifie le contenu exige l'accord du client",
      "Petits textes et filets en noir seul ; grands aplats noirs en noir riche dans la limite du taux d'encrage"
     ],
     "lexique": [
      {
       "terme": "PDF/X",
       "def": "Famille de normes ISO 15930 définissant des PDF destinés à l'échange pour l'impression."
      },
      {
       "terme": "OutputIntent",
       "def": "Déclaration, dans un PDF/X, des conditions d'impression pour lesquelles le fichier est préparé."
      },
      {
       "terme": "TrimBox",
       "def": "Boîte de page correspondant au format fini après coupe."
      },
      {
       "terme": "BleedBox",
       "def": "Boîte de page correspondant au format avec fonds perdus."
      },
      {
       "terme": "Aplatissement",
       "def": "Transformation des effets de transparence en objets opaques équivalents."
      },
      {
       "terme": "Surimpression",
       "def": "Impression d'un objet par-dessus les couleurs sous-jacentes sans les effacer."
      },
      {
       "terme": "Défonce",
       "def": "Suppression des couleurs sous-jacentes à l'emplacement d'un objet."
      },
      {
       "terme": "Profil de contrôle",
       "def": "Ensemble de règles et de seuils utilisés pour vérifier automatiquement un fichier."
      },
      {
       "terme": "Noir riche",
       "def": "Noir composé du noir et d'une ou plusieurs autres encres pour un rendu plus dense."
      },
      {
       "terme": "Flux tardif",
       "def": "Organisation où la conversion des couleurs est faite au moment de la sortie, selon le support réel."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Couleur, mesure et qualité",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "brpip-colorimetrie",
     "titre": "Colorimétrie et densitométrie : mesurer la couleur",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Expliquer pourquoi une couleur dépend de la source lumineuse, de l'objet et de l'observateur",
      "Situer une couleur dans l'espace CIE L*a*b* et interpréter ses coordonnées",
      "Calculer et interpréter un écart de couleur ΔE*ab",
      "Distinguer densitomètre et spectrophotomètre et leurs usages",
      "Appliquer les conditions normalisées d'observation des épreuves et des imprimés"
     ],
     "sections": [
      {
       "titre": "Les trois facteurs de la couleur perçue",
       "contenu": "<p>La couleur n'est pas une propriété de l'objet seul. Elle résulte de la rencontre de trois facteurs :</p>\n<ul>\n<li>la <strong>source lumineuse</strong>, décrite par sa répartition spectrale, c'est-à-dire la quantité d'énergie émise pour chaque longueur d'onde du visible (environ 380 à 780 nm) ;</li>\n<li>l'<strong>objet</strong>, décrit par sa <strong>courbe de réflexion spectrale</strong> : pour chaque longueur d'onde, la proportion de lumière qu'il renvoie ;</li>\n<li>l'<strong>observateur</strong>, dont l'œil possède trois types de cônes sensibles à des zones différentes du spectre.</li>\n</ul>\n<p>Changer l'un de ces facteurs change la couleur perçue. C'est pourquoi un imprimé contrôlé sous les néons de l'atelier peut sembler différent dans la vitrine du client. Deux échantillons qui paraissent identiques sous un éclairage et différents sous un autre présentent un <strong>métamérisme</strong> : leurs courbes spectrales sont différentes, mais elles donnent la même impression colorée sous une lumière donnée. Le phénomène est fréquent entre une épreuve jet d'encre et un imprimé offset, ou entre deux papiers dont l'un contient des azurants optiques.</p>\n<p>Pour pouvoir comparer des couleurs de manière objective, la <strong>CIE</strong> (Commission internationale de l'éclairage) a défini des <strong>illuminants</strong> normalisés (répartitions spectrales de référence) et des <strong>observateurs de référence</strong>. En arts graphiques, la référence est l'illuminant <strong>D50</strong>, qui correspond à une lumière du jour de température de couleur proche de 5 000 K, et l'observateur à 2°.</p>"
      },
      {
       "titre": "L'espace CIE L*a*b*",
       "contenu": "<p>L'espace <strong>CIE L*a*b*</strong> (souvent écrit Lab) décrit une couleur par trois coordonnées, de manière indépendante de tout procédé d'impression ou de tout écran :</p>\n<table><thead><tr><th>Coordonnée</th><th>Signification</th><th>Étendue</th></tr></thead><tbody>\n<tr><td>L*</td><td>Clarté, du noir au blanc</td><td>0 (noir absolu) à 100 (blanc parfait)</td></tr>\n<tr><td>a*</td><td>Axe vert-rouge</td><td>Négatif = vert, positif = rouge</td></tr>\n<tr><td>b*</td><td>Axe bleu-jaune</td><td>Négatif = bleu, positif = jaune</td></tr>\n</tbody></table>\n<p>Une couleur neutre (gris) a des valeurs a* et b* proches de 0. Plus on s'éloigne de l'axe central, plus la couleur est saturée. On en déduit deux grandeurs utiles :</p>\n<ul>\n<li>la <strong>saturation</strong> ou chroma C*, distance à l'axe neutre : C* = √(a*² + b*²) ;</li>\n<li>la <strong>teinte</strong> h, angle mesuré à partir de l'axe a* positif.</li>\n</ul>\n<p>À titre d'ordre de grandeur, un papier couché blanc mesure environ L* = 95, a* = 0 à 2, b* = -2 à -6 (légèrement bleuté s'il contient des azurants optiques). Un aplat de cyan offset sur papier couché se situe vers L* = 55, a* = -37, b* = -50. Les valeurs exactes de référence sont fixées par la norme ISO 12647-2 selon le type de papier.</p>\n<p>L'avantage de Lab est de pouvoir décrire n'importe quelle couleur, qu'elle vienne d'un écran, d'une épreuve ou d'une presse, avec les mêmes nombres. C'est l'espace de connexion utilisé par la gestion de la couleur.</p>"
      },
      {
       "titre": "L'écart de couleur ΔE",
       "contenu": "<p>Pour comparer une couleur mesurée à une couleur de référence, on calcule l'<strong>écart colorimétrique</strong> ΔE. La formule historique, ΔE*ab (dite ΔE 1976), est la distance géométrique entre deux points de l'espace Lab :</p>\n<p><strong>ΔE*ab = √(ΔL*² + Δa*² + Δb*²)</strong></p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôle d'un aplat magenta. Référence : L* = 48, a* = 74, b* = -3. Mesure sur la feuille : L* = 50, a* = 71, b* = -1. 1. Calculer les différences : ΔL* = 50 - 48 = 2 ; Δa* = 71 - 74 = -3 ; Δb* = -1 - (-3) = 2. 2. Élever au carré : 4 ; 9 ; 4. 3. Additionner : 17. 4. Prendre la racine carrée : ΔE*ab = √17 ≈ 4,1. 5. Interpréter : ΔL* positif signifie que l'aplat est trop clair, Δa* négatif qu'il est moins rouge. L'écart est visible pour un œil exercé ; une cause probable est une densité d'encrage trop faible. On augmente légèrement l'encrage et on mesure de nouveau.</div>\n<p>Repères usuels pour interpréter un ΔE*ab (à adapter selon la tolérance fixée par la norme ou par le client) :</p>\n<table><thead><tr><th>ΔE*ab</th><th>Perception habituelle</th></tr></thead><tbody>\n<tr><td>Inférieur à 1</td><td>Différence imperceptible</td></tr>\n<tr><td>Entre 1 et 2</td><td>Perceptible par un œil exercé en comparaison directe</td></tr>\n<tr><td>Entre 2 et 4</td><td>Perceptible, souvent toléré en production</td></tr>\n<tr><td>Au-delà de 5</td><td>Couleurs nettement différentes</td></tr>\n</tbody></table>\n<p>La formule ΔE*ab a un défaut : elle traite de la même manière tous les écarts, alors que l'œil est plus sensible aux écarts dans les couleurs peu saturées (gris, tons chair) que dans les couleurs vives. Une formule plus récente, le <strong>ΔE00</strong> (CIEDE2000), corrige cette différence. Les normes récentes l'utilisent de plus en plus ; il faut toujours vérifier quelle formule est demandée avant de comparer à une tolérance.</p>"
      },
      {
       "titre": "La densitométrie",
       "contenu": "<p>La <strong>densité optique</strong> D mesure le pouvoir absorbant d'une couche d'encre. Elle se calcule à partir du <strong>facteur de réflexion</strong> R (part de lumière renvoyée, entre 0 et 1) :</p>\n<p><strong>D = log<sub>10</sub>(1 / R)</strong></p>\n<p>Un aplat qui renvoie 10 % de la lumière (R = 0,1) a une densité de 1 ; s'il en renvoie 1 % (R = 0,01), sa densité est de 2. Plus la couche d'encre est épaisse, plus la densité augmente, jusqu'à une saturation.</p>\n<p>Le <strong>densitomètre</strong> mesure la lumière réfléchie à travers un filtre complémentaire de l'encre : filtre rouge pour le cyan, vert pour le magenta, bleu pour le jaune, filtre visuel pour le noir. Les filtres sont normalisés par des <strong>status</strong> (status E en Europe, status T aux États-Unis) : il faut comparer des mesures prises avec le même status.</p>\n<p>La densitométrie permet de suivre l'<strong>épaisseur d'encre</strong> en cours de tirage, mais elle ne dit pas si la couleur est juste : deux encres de teintes différentes peuvent avoir la même densité. Elle permet aussi de calculer la <strong>valeur tonale apparente</strong> d'une plage tramée par la formule de Murray-Davies, et donc l'<strong>engraissement</strong> (augmentation de la valeur tonale entre le fichier et l'imprimé).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le densitomètre mesure une quantité d'encre (épaisseur), le spectrophotomètre mesure une couleur (Lab). En production, on utilise de plus en plus le spectrophotomètre, qui fournit les deux informations.</div>"
      },
      {
       "titre": "Le spectrophotomètre et les conditions de mesure",
       "contenu": "<p>Le <strong>spectrophotomètre</strong> mesure la courbe de réflexion spectrale de l'échantillon, généralement par pas de 10 nm, puis calcule les coordonnées Lab pour l'illuminant et l'observateur choisis. Il peut aussi calculer la densité, ce qui en fait l'instrument polyvalent du contrôle qualité. Il existe en version portative, sur table de lecture automatique de la barre de contrôle, ou intégré à la presse.</p>\n<p>Les mesures doivent être faites dans des conditions identiques pour être comparables :</p>\n<ul>\n<li><strong>géométrie de mesure</strong> : en arts graphiques, éclairage à 45° et lecture à 0° (notée 45/0 ou 0/45) ;</li>\n<li><strong>condition de mesure</strong> M0, M1 ou M2 : elle précise la part d'ultraviolet dans l'éclairage de l'instrument ; la condition <strong>M1</strong>, qui inclut une part normalisée d'UV, tient compte de l'effet des azurants optiques du papier et est demandée par les normes récentes ;</li>\n<li><strong>fond de mesure</strong> : fond noir ou pile de feuilles blanches du même papier, selon la consigne, pour éviter que la couleur du support placé dessous influence la mesure.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> comparer une mesure M1 à une référence établie en M0, ou une mesure sur fond noir à une référence sur fond blanc, crée des écarts qui ne viennent pas de l'impression. Avant d'accuser la presse, vérifier les conditions de mesure inscrites sur la fiche de référence.</div>"
      },
      {
       "titre": "Observer dans des conditions normalisées",
       "contenu": "<p>La mesure ne remplace pas totalement l'œil : le client valide un BAT en le regardant. Pour que cette observation soit fiable, la norme <strong>ISO 3664</strong> fixe les conditions de comparaison des épreuves et des imprimés : éclairage proche de D50, éclairement élevé pour la comparaison critique (de l'ordre de 2 000 lux), environnement gris neutre et mat, absence de lumière parasite. On utilise pour cela une <strong>cabine</strong> ou un <strong>pupitre de contrôle</strong> normalisé, installé près de la presse et en prépresse.</p>\n<p>Les tubes ou lampes d'un pupitre vieillissent : leur spectre dérive et ils doivent être contrôlés et remplacés selon les préconisations du fabricant. Un compteur d'heures ou un contrôle périodique avec un instrument permet de suivre cette dérive.</p>\n<p>Enfin, l'opérateur lui-même est un « instrument » : une partie de la population masculine présente une anomalie de la vision des couleurs. Des tests simples permettent de la dépister ; elle n'empêche pas d'exercer, mais incite à s'appuyer davantage sur la mesure.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lorsqu'un client vient assister au calage, on le reçoit au pupitre normalisé, jamais près d'une fenêtre ou sous l'éclairage général de l'atelier. Le BAT signé et la feuille de calage sont comparés côte à côte sous le même éclairage.</div>"
      }
     ],
     "points_cles": [
      "La couleur perçue dépend de la source lumineuse, de l'objet et de l'observateur",
      "Le métamérisme : deux couleurs identiques sous une lumière peuvent différer sous une autre",
      "En arts graphiques, la référence est l'illuminant D50 et l'observateur 2°",
      "Lab : L* clarté de 0 à 100, a* vert-rouge, b* bleu-jaune",
      "ΔE*ab = racine de (ΔL*² + Δa*² + Δb*²) ; vérifier si la tolérance est exprimée en ΔE*ab ou en ΔE00",
      "Densité D = log(1/R) : elle traduit l'épaisseur d'encre, pas la justesse de la couleur",
      "Le spectrophotomètre fournit Lab et densités ; préciser la condition de mesure (M0, M1, M2) et le fond",
      "Observation normalisée des épreuves et imprimés selon ISO 3664, en cabine D50"
     ],
     "lexique": [
      {
       "terme": "Illuminant D50",
       "def": "Répartition spectrale normalisée correspondant à une lumière du jour d'environ 5 000 K, référence des arts graphiques."
      },
      {
       "terme": "Métamérisme",
       "def": "Phénomène par lequel deux couleurs paraissent identiques sous un éclairage et différentes sous un autre."
      },
      {
       "terme": "CIE L*a*b*",
       "def": "Espace colorimétrique décrivant une couleur par sa clarté et deux axes de chromaticité."
      },
      {
       "terme": "ΔE",
       "def": "Écart colorimétrique entre deux couleurs, calculé dans l'espace Lab."
      },
      {
       "terme": "Densité optique",
       "def": "Logarithme décimal de l'inverse du facteur de réflexion ; elle traduit l'épaisseur d'encre."
      },
      {
       "terme": "Densitomètre",
       "def": "Instrument mesurant la densité d'une encre à travers un filtre complémentaire."
      },
      {
       "terme": "Spectrophotomètre",
       "def": "Instrument mesurant la courbe de réflexion spectrale et calculant les coordonnées Lab."
      },
      {
       "terme": "Azurant optique",
       "def": "Additif du papier qui absorbe les UV et réémet de la lumière bleue, rendant le blanc plus éclatant."
      },
      {
       "terme": "Condition de mesure M1",
       "def": "Condition normalisée d'éclairage de l'instrument incluant une part d'UV définie."
      },
      {
       "terme": "Chroma",
       "def": "Saturation d'une couleur, distance à l'axe neutre dans l'espace Lab."
      }
     ]
    },
    {
     "id": "brpip-gestion-couleur",
     "titre": "La gestion de la couleur et les profils ICC",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Expliquer le principe d'un système de gestion de la couleur fondé sur les profils ICC",
      "Distinguer profils d'entrée, d'affichage et de sortie, et caractériser un périphérique",
      "Choisir une intention de rendu adaptée à une conversion",
      "Identifier les conditions d'impression de référence et leurs profils",
      "Étalonner et caractériser un écran de travail et un système d'épreuvage"
     ],
     "sections": [
      {
       "titre": "Le problème : chaque appareil a ses propres couleurs",
       "contenu": "<p>Une valeur numérique comme R = 200, V = 30, B = 40 ne désigne pas une couleur précise : elle désigne une commande envoyée à un appareil. Deux écrans affichent deux rouges différents avec ces mêmes valeurs ; deux presses impriment deux teintes différentes avec la même valeur CMJN 0-100-100-0, selon l'encre, le papier et l'engraissement. On dit que RVB et CMJN sont des espaces <strong>dépendants du périphérique</strong>.</p>\n<p>Chaque appareil possède aussi un <strong>gamut</strong> (gamme de couleurs reproductibles) différent. Le gamut d'un écran récent est en général plus étendu que celui d'une impression offset dans les verts et les bleus saturés ; le gamut d'un offset sur papier non couché est plus restreint que sur papier couché.</p>\n<p>La <strong>gestion de la couleur</strong> a pour but d'obtenir une apparence aussi proche que possible d'un appareil à l'autre, malgré ces différences. Elle repose sur un passage systématique par un espace indépendant du périphérique, le Lab ou l'espace XYZ, appelé <strong>espace de connexion des profils</strong> (PCS).</p>"
      },
      {
       "titre": "Les profils ICC",
       "contenu": "<p>L'<strong>ICC</strong> (International Color Consortium) a normalisé un format de fichier, le <strong>profil ICC</strong>, qui décrit le comportement colorimétrique d'un appareil : pour chaque combinaison de valeurs RVB ou CMJN, la couleur Lab obtenue, et inversement. Le logiciel qui effectue les conversions s'appelle le <strong>moteur de couleur</strong> (CMM, <em>Color Management Module</em>).</p>\n<table><thead><tr><th>Type de profil</th><th>Appareil décrit</th><th>Exemple</th></tr></thead><tbody>\n<tr><td>Profil d'entrée</td><td>Scanner, appareil photo</td><td>Profil créé avec une mire photographiée</td></tr>\n<tr><td>Profil d'affichage</td><td>Écran</td><td>Profil créé par la sonde lors de l'étalonnage</td></tr>\n<tr><td>Profil de sortie</td><td>Presse, imprimante d'épreuve</td><td>Profil d'une condition d'impression offset de référence</td></tr>\n<tr><td>Profil d'espace de travail</td><td>Espace théorique non lié à un appareil</td><td>sRGB, Adobe RGB (1998), eciRGB v2</td></tr>\n</tbody></table>\n<p>Une conversion utilise toujours deux profils : le <strong>profil source</strong> (d'où vient la couleur) et le <strong>profil de destination</strong> (où elle va). Par exemple, pour convertir une photo en vue de l'impression : profil source Adobe RGB, profil de destination correspondant au papier couché offset prévu.</p>\n<p>Un fichier qui contient son profil est dit <strong>balisé</strong> (ou « avec profil incorporé »). Un fichier sans profil oblige le logiciel à en supposer un : la couleur devient alors imprévisible.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un profil décrit un appareil ; une conversion va d'un profil source vers un profil de destination en passant par Lab. Sans profil source connu, aucune conversion fiable n'est possible.</div>"
      },
      {
       "titre": "Étalonner et caractériser",
       "contenu": "<p>Deux opérations distinctes sont souvent confondues :</p>\n<ul>\n<li>l'<strong>étalonnage</strong> (ou calibrage) ramène l'appareil dans un état stable et connu : régler la luminance et le point blanc d'un écran, linéariser une imprimante d'épreuve, normaliser une presse sur des densités et des engraissements cibles ;</li>\n<li>la <strong>caractérisation</strong> (ou profilage) mesure le comportement de l'appareil ainsi étalonné et en tire un profil ICC.</li>\n</ul>\n<p>Un profil n'est valable que si l'appareil reste dans l'état où il a été caractérisé. Un écran qui a dérivé, une presse dont l'engraissement a changé rendent le profil faux.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> étalonner et caractériser un écran de prépresse. 1. Laisser chauffer l'écran au moins trente minutes et neutraliser l'éclairage de la pièce (lumière tamisée, pas de reflet). 2. Lancer le logiciel de la sonde et choisir les cibles : point blanc D50 ou D65 selon la procédure de l'entreprise, luminance autour de 120 à 160 cd/m² pour une comparaison avec un pupitre normalisé atténué, gamma 2,2 ou courbe L*. 3. Poser la sonde sur l'écran et laisser défiler les plages de mesure. 4. Enregistrer le profil avec un nom contenant la date. 5. Vérifier le résultat par une validation (mesure de plages de contrôle et calcul des écarts ΔE) et noter la date du prochain étalonnage, en général toutes les deux à quatre semaines.</div>\n<p>Pour la presse, la démarche est la même mais plus lourde : on normalise la presse (densités, engraissement, repérage stables), on imprime une mire de plusieurs centaines de plages (par exemple une mire de type IT8.7/4 ou ECI 2002), on la mesure au spectrophotomètre, puis un logiciel de profilage calcule le profil. Dans la pratique, la plupart des imprimeurs ne créent pas leur propre profil offset : ils règlent leur presse pour atteindre une <strong>condition d'impression de référence</strong> et utilisent le profil public correspondant.</p>"
      },
      {
       "titre": "Les intentions de rendu",
       "contenu": "<p>Quand une couleur source est hors du gamut de destination, le moteur de couleur doit la remplacer. La règle de remplacement est l'<strong>intention de rendu</strong>. L'ICC en définit quatre :</p>\n<table><thead><tr><th>Intention</th><th>Principe</th><th>Usage conseillé</th></tr></thead><tbody>\n<tr><td>Perceptive</td><td>Compresse l'ensemble du gamut source pour conserver les relations entre les couleurs ; toutes les couleurs bougent un peu</td><td>Photographies très saturées (RVB vers CMJN)</td></tr>\n<tr><td>Colorimétrie relative</td><td>Conserve exactement les couleurs dans le gamut, ramène les autres à la limite ; adapte le blanc du papier source au blanc du papier de destination</td><td>Conversion la plus courante en prépresse, souvent avec compensation du point noir</td></tr>\n<tr><td>Colorimétrie absolue</td><td>Comme la relative, mais simule aussi la teinte du papier de destination</td><td>Épreuvage : simuler sur papier blanc d'épreuve la teinte d'un papier journal ou recyclé</td></tr>\n<tr><td>Saturation</td><td>Privilégie l'éclat des couleurs au détriment de leur exactitude</td><td>Graphiques de bureautique, rarement en arts graphiques</td></tr>\n</tbody></table>\n<p>La <strong>compensation du point noir</strong> ajuste les ombres pour que le noir le plus profond de la source corresponde au noir le plus profond de la destination ; sans elle, les détails dans les ombres peuvent se boucher.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> convertir plusieurs fois successivement (RVB vers CMJN couché, puis vers CMJN non couché, puis de nouveau vers CMJN couché) dégrade l'image à chaque étape et ne permet jamais de revenir à l'original. On conserve l'image source et on refait une seule conversion directe vers la nouvelle destination.</div>"
      },
      {
       "titre": "Les conditions d'impression de référence",
       "contenu": "<p>La norme <strong>ISO 12647-2</strong> définit, pour l'offset feuille et rotative, des valeurs cibles : couleurs Lab des papiers et des aplats, engraissements, tolérances. L'organisme allemand <strong>Fogra</strong> publie les <strong>données de caractérisation</strong> correspondantes, désignées par un numéro, et des associations comme l'ECI diffusent les profils ICC qui en sont tirés.</p>\n<table><thead><tr><th>Données de caractérisation</th><th>Condition décrite</th><th>Profil ICC usuel</th></tr></thead><tbody>\n<tr><td>FOGRA39</td><td>Offset feuille, papier couché, version 2004 de la norme</td><td>ISO Coated v2 (ECI)</td></tr>\n<tr><td>FOGRA51</td><td>Offset, papier couché premium, version 2013 de la norme, mesure M1</td><td>PSO Coated v3</td></tr>\n<tr><td>FOGRA52</td><td>Offset, papier non couché blanc, version 2013, mesure M1</td><td>PSO Uncoated v3 (FOGRA52)</td></tr>\n</tbody></table>\n<p>Le profil choisi fixe aussi le <strong>taux d'encrage maximal</strong> (somme des pourcentages C + M + J + N), la génération du noir et le traitement des gris. Par exemple, les profils récents pour papier couché limitent ce taux à 300 %, alors que des profils plus anciens autorisaient 330 % à 350 %.</p>\n<p>Le choix du profil doit correspondre au papier et au procédé réellement utilisés, et figurer au dossier de fabrication. Un fichier converti avec un profil couché et imprimé sur un papier non couché paraîtra trop sombre et empâté, car le papier non couché absorbe davantage l'encre et engraisse plus.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la démarche <strong>PSO</strong> (<em>Process Standard Offset</em>), développée par Fogra, permet à une imprimerie de faire certifier qu'elle maîtrise toute sa chaîne selon l'ISO 12647, de la réception des fichiers à l'impression. Un client peut alors exiger que ses travaux soient imprimés « au standard », avec un rapport de mesure à l'appui.</div>"
      },
      {
       "titre": "Une chaîne couleur cohérente du fichier à la feuille",
       "contenu": "<p>Les réglages de couleur des logiciels de création et de mise en page doivent être <strong>synchronisés</strong> : même espace de travail RVB, même profil CMJN de destination, mêmes règles de conservation ou de conversion des profils à l'ouverture d'un fichier. Une suite de logiciels mal synchronisée provoque des conversions invisibles et incohérentes.</p>\n<p>La chaîne complète, dans une entreprise maîtrisée, se résume ainsi :</p>\n<ol>\n<li>images reçues avec leur profil, conservées en RVB tant que possible ;</li>\n<li>écran étalonné et caractérisé, avec épreuvage à l'écran (<strong>soft proof</strong>) qui simule la condition d'impression ;</li>\n<li>conversion vers le profil de sortie, au moment de l'export PDF/X-1a ou au RIP en PDF/X-4 ;</li>\n<li>épreuve contractuelle sur imprimante étalonnée, contrôlée par une barre de contrôle mesurée ;</li>\n<li>presse normalisée sur les valeurs cibles de la condition de référence ;</li>\n<li>observation sous lumière normalisée et mesure des plages de contrôle.</li>\n</ol>\n<p>À chaque maillon, un écart non maîtrisé se répercute sur les suivants. C'est la raison pour laquelle la gestion de la couleur concerne aussi bien l'opérateur prépresse que le conducteur de presse.</p>"
      }
     ],
     "points_cles": [
      "RVB et CMJN dépendent du périphérique ; Lab et XYZ sont indépendants du périphérique",
      "Un profil ICC décrit le comportement colorimétrique d'un appareil",
      "Une conversion utilise un profil source et un profil de destination, via l'espace de connexion",
      "Étalonner = stabiliser l'appareil ; caractériser = mesurer et créer le profil",
      "Intention perceptive pour les photos saturées, colorimétrique relative pour la plupart des conversions, absolue pour l'épreuvage",
      "ISO 12647-2 fixe les valeurs cibles de l'offset ; FOGRA39, FOGRA51 et FOGRA52 en sont des caractérisations",
      "Le profil fixe le taux d'encrage maximal et doit correspondre au papier réel",
      "Les réglages couleur de tous les logiciels doivent être synchronisés"
     ],
     "lexique": [
      {
       "terme": "Gamut",
       "def": "Ensemble des couleurs qu'un appareil ou un procédé peut reproduire."
      },
      {
       "terme": "Profil ICC",
       "def": "Fichier normalisé décrivant la relation entre les valeurs d'un appareil et les couleurs Lab."
      },
      {
       "terme": "Moteur de couleur (CMM)",
       "def": "Module logiciel qui effectue les conversions entre profils."
      },
      {
       "terme": "Espace de connexion (PCS)",
       "def": "Espace indépendant (Lab ou XYZ) par lequel passent toutes les conversions."
      },
      {
       "terme": "Étalonnage",
       "def": "Réglage d'un appareil pour le ramener dans un état stable et connu."
      },
      {
       "terme": "Caractérisation",
       "def": "Mesure du comportement d'un appareil étalonné en vue de créer son profil."
      },
      {
       "terme": "Intention de rendu",
       "def": "Règle de conversion des couleurs hors gamut et de traitement du blanc."
      },
      {
       "terme": "Compensation du point noir",
       "def": "Ajustement qui fait correspondre les noirs les plus profonds de la source et de la destination."
      },
      {
       "terme": "Données de caractérisation",
       "def": "Jeu de mesures de référence d'une condition d'impression, publié par exemple par Fogra."
      },
      {
       "terme": "Soft proof",
       "def": "Simulation à l'écran du rendu d'un document dans une condition d'impression donnée."
      },
      {
       "terme": "PSO",
       "def": "Process Standard Offset : démarche de certification d'une imprimerie selon l'ISO 12647-2."
      }
     ]
    },
    {
     "id": "brpip-tramage-tons-directs",
     "titre": "Tramage, engraissement et tons directs",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Comparer trame classique (AM), trame stochastique (FM) et trames hybrides",
      "Relier linéature, résolution de sortie et nombre de niveaux de gris",
      "Expliquer le moiré et le rôle des angles de trame",
      "Calculer une valeur tonale apparente et un engraissement",
      "Choisir entre quadrichromie, ton direct et impression à gamut étendu"
     ],
     "sections": [
      {
       "titre": "Trame AM, trame FM, trames hybrides",
       "contenu": "<p>Un procédé d'impression ne dépose pas de « demi-encre » : il dépose de l'encre ou rien. Pour reproduire les nuances, le RIP transforme chaque couche en une <strong>trame</strong>, un ensemble de points dont la surface couverte crée l'illusion d'un ton plus ou moins foncé.</p>\n<table><thead><tr><th>Trame</th><th>Principe</th><th>Avantages</th><th>Limites</th></tr></thead><tbody>\n<tr><td>AM (modulation d'amplitude), dite classique</td><td>Points disposés sur une grille régulière ; leur taille varie</td><td>Stable, bien maîtrisée, tolérante en offset et flexo</td><td>Rosette visible, risque de moiré, détails fins limités par la linéature</td></tr>\n<tr><td>FM (modulation de fréquence), dite stochastique</td><td>Micro-points de taille fixe (souvent 20 à 30 µm) répartis de façon pseudo-aléatoire ; leur nombre varie</td><td>Pas de moiré ni de rosette, détails très fins, aplats tramés plus lisses</td><td>Engraissement plus fort, plaques et presse exigeantes, grain visible dans les tons moyens</td></tr>\n<tr><td>Hybride</td><td>FM dans les hautes lumières et les ombres, AM dans les tons moyens</td><td>Combine la finesse de la FM et la stabilité de l'AM</td><td>Réglages spécifiques au RIP, transition à surveiller</td></tr>\n</tbody></table>\n<p>Les presses numériques utilisent leurs propres algorithmes de tramage, souvent proches de la FM pour le jet d'encre, et parfois plusieurs tailles de gouttes (jet d'encre à niveaux de gris).</p>"
      },
      {
       "titre": "Linéature, résolution de sortie et niveaux de gris",
       "contenu": "<p>La <strong>linéature</strong> est le nombre de lignes de points par unité de longueur. Elle s'exprime en lignes par centimètre (l/cm) ou en lignes par pouce (lpi). On passe de l'une à l'autre en multipliant ou divisant par 2,54.</p>\n<table><thead><tr><th>Produit</th><th>Linéature courante</th></tr></thead><tbody>\n<tr><td>Journal, papier journal en rotative</td><td>40 à 48 l/cm (100 à 120 lpi)</td></tr>\n<tr><td>Offset sur papier non couché</td><td>48 à 60 l/cm (120 à 150 lpi)</td></tr>\n<tr><td>Offset sur papier couché</td><td>60 à 70 l/cm (150 à 175 lpi)</td></tr>\n<tr><td>Travaux de luxe</td><td>80 l/cm (200 lpi) et plus</td></tr>\n</tbody></table>\n<p>Le CtP grave la plaque avec une <strong>résolution de sortie</strong> fixe, par exemple 2 400 ppp. Chaque point de trame est construit dans une cellule de pixels. Le nombre de niveaux de gris reproductibles vaut :</p>\n<p><strong>Niveaux = (résolution de sortie ÷ linéature)² + 1</strong></p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'une combinaison de sortie permet un dégradé sans palier. Données : CtP à 2 400 ppp, linéature 175 lpi. 1. Diviser : 2 400 ÷ 175 = 13,7 pixels par côté de cellule. 2. Élever au carré : 13,7² ≈ 188. 3. Ajouter 1 : environ 189 niveaux. 4. Comparer aux 256 niveaux d'une image 8 bits : 189 est inférieur, mais les RIP actuels utilisent des supercellules qui répartissent les niveaux sur plusieurs points, ce qui améliore le résultat ; un dégradé sur une grande longueur reste toutefois à surveiller. 5. Si l'on montait à 250 lpi à la même résolution, on n'obtiendrait que (2 400 ÷ 250)² + 1 ≈ 93 niveaux : des paliers deviendraient visibles.</div>\n<p>On retient aussi la règle de résolution des images : la résolution utile d'une photo est environ 1,5 à 2 fois la linéature d'impression. Pour 150 lpi, on vise 225 à 300 ppp à la taille d'impression. Ce facteur, appelé <strong>facteur de qualité</strong>, explique les seuils utilisés au contrôle en amont.</p>"
      },
      {
       "titre": "Angles de trame et moiré",
       "contenu": "<p>En quadrichromie AM, les quatre trames sont superposées. Si elles avaient le même angle, le moindre défaut de repérage ferait varier la couleur. On les oriente donc avec des <strong>angles</strong> différents, séparés de 30° pour les trois couleurs les plus visibles. Une disposition fréquente est : jaune 0°, cyan 15°, noir 45°, magenta 75° (d'autres combinaisons existent selon les RIP et les usages, l'essentiel étant de placer la couleur la plus foncée à 45°, angle le moins visible pour l'œil, et le jaune, la moins visible, sur l'angle restant).</p>\n<p>Avec ces angles, les points forment une petite figure régulière, la <strong>rosette</strong>, invisible à distance normale. Si les angles sont mal réglés, ou si une trame interfère avec un motif régulier de l'image, il se forme un <strong>moiré</strong> : un motif parasite en ondulations ou en damier.</p>\n<p>Causes typiques de moiré :</p>\n<ul>\n<li>image numérisée à partir d'un document déjà imprimé (la trame d'origine interfère avec la nouvelle) ; on applique alors un <strong>détramage</strong> au scanner ;</li>\n<li>motif textile, grille, store vénitien photographiés ;</li>\n<li>angle erroné sur une couche, ou ton direct imprimé avec le même angle qu'une couleur quadri qu'il recouvre.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un ton direct qui se superpose à une image quadri doit recevoir l'angle d'une couleur absente ou peu présente à cet endroit, souvent celui du jaune. Sinon un moiré apparaît, alors que chaque séparation paraît parfaite isolément.</div>"
      },
      {
       "titre": "La valeur tonale et l'engraissement",
       "contenu": "<p>Entre le fichier et l'imprimé, les points de trame grossissent : l'encre s'écrase sous la pression, s'étale dans le papier, et la lumière diffuse dans le papier autour du point (effet optique). On appelle <strong>engraissement</strong> (ou augmentation de la valeur tonale, TVI) la différence entre la valeur tonale mesurée sur l'imprimé et la valeur du fichier.</p>\n<p>La valeur tonale apparente se calcule à partir des densités par la <strong>formule de Murray-Davies</strong> :</p>\n<p><strong>A = (1 - 10<sup>-Dt</sup>) ÷ (1 - 10<sup>-Dp</sup>)</strong>, où Dt est la densité de la plage tramée et Dp la densité de l'aplat, toutes deux mesurées par rapport au papier.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'engraissement d'une plage cyan à 50 %. Mesures : densité de l'aplat Dp = 1,45 ; densité de la plage 50 % Dt = 0,52. 1. Calculer 10<sup>-0,52</sup> ≈ 0,302, donc 1 - 0,302 = 0,698. 2. Calculer 10<sup>-1,45</sup> ≈ 0,035, donc 1 - 0,035 = 0,965. 3. Diviser : 0,698 ÷ 0,965 ≈ 0,723, soit une valeur tonale de 72 %. 4. Engraissement = 72 - 50 = 22 points. 5. Comparer à la cible de la condition d'impression : pour un offset sur papier couché, la cible au 50 % est de l'ordre de 13 à 16 points avec une tolérance de quelques points. Un engraissement de 22 points est trop élevé : vérifier l'excès d'encre, les pressions, l'état du blanchet et la courbe de la plaque.</div>\n<p>L'engraissement n'est pas un défaut en soi : il est prévu dans les profils et les conditions de référence. Ce qui compte, c'est qu'il corresponde à la cible et reste stable. Pour l'ajuster, le prépresse applique au RIP des <strong>courbes de compensation</strong> qui réduisent ou augmentent les valeurs envoyées à la plaque.</p>"
      },
      {
       "titre": "Les tons directs",
       "contenu": "<p>Un <strong>ton direct</strong> est une encre préparée à la teinte exacte voulue, imprimée par un groupe à part, au lieu d'être reconstituée par la quadrichromie. On l'utilise :</p>\n<ul>\n<li>pour une couleur de marque qui doit être identique sur tous les supports ;</li>\n<li>pour une couleur hors du gamut CMJN (orange vif, vert franc, bleu électrique) ;</li>\n<li>pour les encres spéciales : métallisées, fluorescentes, blanc couvrant, vernis ;</li>\n<li>pour réduire le nombre de passages sur un travail simple en une ou deux couleurs.</li>\n</ul>\n<p>Les tons directs sont désignés par un nuancier, le plus répandu étant le système <strong>Pantone</strong> (Pantone Matching System) : chaque teinte a un numéro, suivi d'un suffixe qui indique le papier de référence (C pour couché, U pour non couché). La même référence ne donne pas la même apparence sur les deux papiers. Les valeurs Lab des teintes sont publiées ; les encres sont soit achetées prêtes, soit préparées par l'imprimeur avec un système de formulation et une balance.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'équivalent CMJN d'un ton direct affiché par le logiciel n'est qu'une approximation. Pour une couleur de marque critique, le client fournit souvent sa référence en ton direct et une tolérance en ΔE ; l'imprimeur valide la teinte au spectrophotomètre sur le papier réel avant le tirage.</div>"
      },
      {
       "titre": "Quadri, ton direct ou gamut étendu : choisir",
       "contenu": "<p>L'<strong>impression à gamut étendu</strong> (ECG, <em>Extended Color Gamut</em>) ajoute à la quadrichromie un jeu fixe de deux ou trois encres, généralement orange, vert et violet (CMJN + OVV). Le RIP reconstitue la plupart des tons directs d'un catalogue sans changer d'encre entre deux travaux. Elle se développe en emballage et en étiquette (flexographie, numérique), où les tons directs sont nombreux.</p>\n<table><thead><tr><th>Critère</th><th>Quadrichromie seule</th><th>Quadri + tons directs</th><th>Gamut étendu</th></tr></thead><tbody>\n<tr><td>Fidélité d'une couleur de marque</td><td>Approximative</td><td>Excellente</td><td>Très bonne pour la plupart des teintes</td></tr>\n<tr><td>Changement d'encre entre travaux</td><td>Aucun</td><td>Lavage du groupe à chaque nouvelle teinte</td><td>Aucun</td></tr>\n<tr><td>Nombre de groupes nécessaires</td><td>4</td><td>4 + nombre de tons directs</td><td>6 ou 7</td></tr>\n<tr><td>Préparation prépresse</td><td>Standard</td><td>Standard, gestion des tons directs</td><td>Profils multicanaux, séparation spécifique</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le choix dépend de la fidélité exigée, du nombre de groupes disponibles, de la fréquence des changements de travaux et du coût des encres. Il se décide au devis et figure au dossier de fabrication sous la forme de la notation des couleurs, par exemple 4 + 1 / 4.</div>"
      }
     ],
     "points_cles": [
      "Trame AM : points de taille variable sur grille régulière ; FM : micro-points fixes en nombre variable",
      "Linéature courante : 60 à 70 l/cm (150 à 175 lpi) sur couché, moins sur non couché et journal",
      "Niveaux de gris = (résolution de sortie ÷ linéature)² + 1",
      "Résolution utile d'une image : environ 1,5 à 2 fois la linéature",
      "Angles séparés de 30° pour C, M, N ; le noir à 45° ; un mauvais angle provoque un moiré",
      "Engraissement = valeur tonale mesurée - valeur du fichier ; formule de Murray-Davies",
      "Un ton direct est désigné par un nuancier ; sa référence diffère selon le papier couché ou non couché",
      "Le gamut étendu (CMJN + OVV) reproduit de nombreux tons directs sans changer d'encre"
     ],
     "lexique": [
      {
       "terme": "Trame AM",
       "def": "Trame à points de taille variable disposés sur une grille régulière."
      },
      {
       "terme": "Trame FM",
       "def": "Trame stochastique à micro-points de taille fixe dont la densité de répartition varie."
      },
      {
       "terme": "Linéature",
       "def": "Nombre de lignes de points de trame par centimètre ou par pouce."
      },
      {
       "terme": "Rosette",
       "def": "Motif régulier formé par la superposition des trames de quadrichromie correctement orientées."
      },
      {
       "terme": "Moiré",
       "def": "Motif parasite dû à l'interférence de trames ou de structures régulières."
      },
      {
       "terme": "Engraissement",
       "def": "Augmentation de la valeur tonale entre le fichier et l'imprimé."
      },
      {
       "terme": "Murray-Davies",
       "def": "Formule calculant la valeur tonale apparente à partir des densités de la plage tramée et de l'aplat."
      },
      {
       "terme": "Courbe de compensation",
       "def": "Correction appliquée au RIP pour obtenir l'engraissement cible."
      },
      {
       "terme": "Ton direct",
       "def": "Encre préparée à la teinte voulue, imprimée par un groupe séparé."
      },
      {
       "terme": "Gamut étendu",
       "def": "Impression avec un jeu fixe d'encres supplémentaires pour élargir la gamme de couleurs."
      }
     ]
    },
    {
     "id": "brpip-demarche-qualite",
     "titre": "Démarche qualité, normalisation et maîtrise statistique",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Expliquer les principes d'un système de management de la qualité et le rôle de l'opérateur",
      "Distinguer norme, certification, label et cahier des charges client",
      "Construire et interpréter une carte de contrôle simple",
      "Traiter une non-conformité avec une méthode de résolution de problème",
      "Mettre en œuvre un autocontrôle et en assurer la traçabilité"
     ],
     "sections": [
      {
       "titre": "La qualité, une démarche d'entreprise",
       "contenu": "<p>La <strong>qualité</strong> d'un produit est son aptitude à satisfaire les exigences du client, exprimées (bon de commande, BAT, cahier des charges) ou implicites (absence de taches, coupe d'équerre, comptage juste). Elle ne s'obtient pas en triant les produits à la fin, mais en <strong>maîtrisant le processus</strong> à chaque étape.</p>\n<p>La norme internationale <strong>ISO 9001</strong> définit les exigences d'un <strong>système de management de la qualité</strong> (SMQ). Elle n'impose pas un niveau de qualité, mais une organisation : processus décrits, responsabilités définies, enregistrements conservés, écoute du client, amélioration continue. Une entreprise peut faire <strong>certifier</strong> son système par un organisme indépendant, qui l'audite régulièrement.</p>\n<p>Le principe d'amélioration continue est souvent représenté par la <strong>roue de Deming</strong> ou cycle <strong>PDCA</strong> :</p>\n<table><thead><tr><th>Étape</th><th>Signification</th><th>Exemple en impression</th></tr></thead><tbody>\n<tr><td>P (Plan)</td><td>Planifier : fixer un objectif et un plan d'action</td><td>Réduire la gâche de calage de 20 %</td></tr>\n<tr><td>D (Do)</td><td>Réaliser le plan</td><td>Utiliser les préréglages d'encrage et une procédure de calage écrite</td></tr>\n<tr><td>C (Check)</td><td>Vérifier les résultats</td><td>Comparer la gâche mesurée sur un mois à la période précédente</td></tr>\n<tr><td>A (Act)</td><td>Ajuster et généraliser</td><td>Étendre la procédure à toutes les équipes, ou corriger le plan</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'opérateur participe au système qualité par trois gestes quotidiens : appliquer les modes opératoires, enregistrer ses contrôles et signaler toute anomalie. Lors d'un audit, l'auditeur peut lui demander de montrer la fiche de suivi d'un travail et d'expliquer ce qu'il fait si un contrôle est hors tolérance.</div>"
      },
      {
       "titre": "Normes, certifications, labels et exigences client",
       "contenu": "<p>Ces notions sont souvent confondues :</p>\n<ul>\n<li>une <strong>norme</strong> est un document de référence établi par consensus et approuvé par un organisme reconnu (ISO au niveau international, CEN au niveau européen, AFNOR en France) ; son application est en général volontaire, sauf si un texte réglementaire la rend obligatoire ;</li>\n<li>une <strong>certification</strong> atteste, après audit par un tiers, qu'une entreprise, un produit ou un processus est conforme à un référentiel ;</li>\n<li>un <strong>label</strong> est une marque attribuée selon un cahier des charges, souvent par une organisation professionnelle ;</li>\n<li>le <strong>cahier des charges client</strong> fixe des exigences propres à une commande, qui peuvent être plus strictes que les normes.</li>\n</ul>\n<table><thead><tr><th>Référence</th><th>Nature</th><th>Objet</th></tr></thead><tbody>\n<tr><td>ISO 9001</td><td>Norme certifiable</td><td>Système de management de la qualité</td></tr>\n<tr><td>ISO 12647 (séries -2 à -8)</td><td>Normes techniques</td><td>Contrôle des procédés d'impression et de l'épreuvage</td></tr>\n<tr><td>ISO 14001</td><td>Norme certifiable</td><td>Système de management environnemental</td></tr>\n<tr><td>PSO</td><td>Certification de procédé</td><td>Maîtrise de la chaîne offset selon l'ISO 12647-2</td></tr>\n<tr><td>Imprim'Vert</td><td>Label professionnel</td><td>Pratiques environnementales des imprimeries</td></tr>\n<tr><td>FSC, PEFC</td><td>Certifications de chaîne de contrôle</td><td>Origine des fibres de bois issues de forêts gérées durablement</td></tr>\n</tbody></table>"
      },
      {
       "titre": "Variabilité et maîtrise statistique des procédés",
       "contenu": "<p>Aucune production n'est parfaitement constante : la densité d'un aplat varie légèrement d'une feuille à l'autre, la cote de coupe de quelques dixièmes de millimètre. On distingue :</p>\n<ul>\n<li>les <strong>causes communes</strong> : petites variations aléatoires et permanentes, inhérentes au procédé ;</li>\n<li>les <strong>causes spéciales</strong> : événements ponctuels identifiables (encrier presque vide, blanchet endommagé, changement de lot de papier) qui provoquent une dérive.</li>\n</ul>\n<p>La <strong>maîtrise statistique des procédés</strong> (MSP, ou SPC en anglais) a pour but de détecter les causes spéciales avant qu'elles ne produisent des non-conformités. Son outil principal est la <strong>carte de contrôle</strong> : un graphique où l'on reporte, dans l'ordre chronologique, une mesure prélevée régulièrement. Il comporte une ligne centrale (la valeur cible ou la moyenne), des <strong>limites de surveillance</strong> et des <strong>limites de contrôle</strong>.</p>\n<p>On distingue aussi les <strong>tolérances</strong>, qui sont les limites acceptables pour le client, et les limites de contrôle, qui décrivent le comportement normal du procédé. Un procédé est dit <strong>capable</strong> lorsque sa variation naturelle reste bien à l'intérieur des tolérances.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> interpréter une carte de contrôle de densité du noir. Cible 1,80, tolérance ± 0,10, limites de surveillance à ± 0,05. Relevés toutes les 1 000 feuilles : 1,79 ; 1,81 ; 1,80 ; 1,82 ; 1,83 ; 1,84 ; 1,85 ; 1,86. 1. Placer les points sur la carte. 2. Vérifier les limites : aucun point hors tolérance, le dernier dépasse la limite de surveillance (1,85). 3. Rechercher une tendance : six valeurs successives en hausse, ce qui signale une cause spéciale même si la tolérance n'est pas encore atteinte. 4. Agir : réduire l'encrage sur les zones concernées, rechercher la cause (température des rouleaux, émulsion). 5. Enregistrer l'action sur la fiche de suivi et refaire une mesure après correction. Règle générale : on réagit à un point hors limite, à une série de points tous du même côté de la cible, ou à une tendance régulière.</div>"
      },
      {
       "titre": "Autocontrôle et plan de contrôle",
       "contenu": "<p>Dans une organisation moderne, c'est l'opérateur lui-même qui contrôle sa production : c'est l'<strong>autocontrôle</strong>. Il s'appuie sur un <strong>plan de contrôle</strong> qui précise, pour chaque poste :</p>\n<table><thead><tr><th>Élément du plan</th><th>Exemple en impression offset</th><th>Exemple en façonnage</th></tr></thead><tbody>\n<tr><td>Caractéristique à contrôler</td><td>Densités, repérage, aspect</td><td>Cotes de coupe, position du pli, ordre des cahiers</td></tr>\n<tr><td>Moyen de contrôle</td><td>Spectrophotomètre, compte-fils</td><td>Réglet, gabarit, contrôle visuel</td></tr>\n<tr><td>Fréquence</td><td>Toutes les 500 ou 1 000 feuilles</td><td>Toutes les 15 minutes ou à chaque palette</td></tr>\n<tr><td>Valeur cible et tolérance</td><td>Selon la condition d'impression</td><td>Selon la fiche de fabrication, souvent ± 0,5 mm</td></tr>\n<tr><td>Enregistrement</td><td>Rapport de mesure, fiche de suivi</td><td>Fiche de suivi</td></tr>\n<tr><td>Réaction en cas d'écart</td><td>Corriger, isoler les feuilles depuis le dernier contrôle conforme</td><td>Arrêter, corriger, trier</td></tr>\n</tbody></table>\n<p>Le plan de contrôle fixe aussi la conservation des <strong>feuilles témoins</strong> ou exemplaires témoins, prélevés régulièrement et marqués (numéro de palette, heure). Ils permettent, en cas de réclamation, de montrer ce qui a été produit.</p>\n<p>La <strong>traçabilité</strong> consiste à pouvoir retrouver, pour un produit livré, les matières utilisées (lot de papier, lot d'encre), le poste, l'opérateur, la date et les contrôles effectués. Elle est indispensable dans certains secteurs comme l'emballage pharmaceutique ou alimentaire.</p>"
      },
      {
       "titre": "Traiter une non-conformité",
       "contenu": "<p>Une <strong>non-conformité</strong> est le non-respect d'une exigence. Elle peut être détectée en interne (au contrôle) ou par le client (réclamation). Son traitement suit trois niveaux :</p>\n<ol>\n<li><strong>Action immédiate</strong> (ou curative) : arrêter, isoler et identifier les produits douteux, trier, corriger ce qui peut l'être.</li>\n<li><strong>Analyse des causes</strong> : rechercher pourquoi le problème s'est produit.</li>\n<li><strong>Action corrective</strong> : supprimer la cause pour éviter qu'il se reproduise ; puis vérifier l'efficacité de l'action.</li>\n</ol>\n<p>Plusieurs outils structurent l'analyse :</p>\n<ul>\n<li>le <strong>QQOQCP</strong> (qui, quoi, où, quand, comment, pourquoi) pour décrire le problème sans l'interpréter ;</li>\n<li>le <strong>diagramme d'Ishikawa</strong> (ou diagramme causes-effet, en arête de poisson), qui classe les causes possibles en familles appelées les « 5 M » : Matière, Matériel (machine), Méthode, Main-d'œuvre, Milieu ;</li>\n<li>les <strong>5 pourquoi</strong>, qui consistent à demander « pourquoi ? » plusieurs fois de suite pour remonter à la cause racine ;</li>\n<li>le <strong>diagramme de Pareto</strong>, qui classe les défauts par fréquence pour traiter d'abord ceux qui en causent le plus.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> corriger le produit ne suffit pas, il faut supprimer la cause. Exemple de cause racine trouvée par les 5 pourquoi : des traces sur les feuilles viennent du maculage, dû à un empilage trop haut, parce que la consigne de hauteur de pile n'était pas affichée au poste. L'action corrective est l'affichage de la consigne et sa prise en compte dans la formation.</div>"
      },
      {
       "titre": "Les coûts de la non-qualité",
       "contenu": "<p>La non-qualité coûte cher, souvent bien plus que le prix du papier gâché. Il faut compter :</p>\n<ul>\n<li>la matière perdue (papier, encre, plaques refaites) ;</li>\n<li>le temps machine et le temps des opérateurs pour refaire ou trier ;</li>\n<li>les retards et les pénalités prévues au contrat ;</li>\n<li>la perte de confiance du client et parfois du client lui-même.</li>\n</ul>\n<p>On distingue les coûts de non-qualité internes (défaut détecté avant livraison) et externes (défaut détecté par le client), ces derniers étant de loin les plus coûteux. À l'inverse, les dépenses de prévention (formation, maintenance, étalonnage des instruments) et de détection (contrôles) sont des investissements qui réduisent la non-qualité.</p>\n<p>Un indicateur simple, le <strong>taux de gâche</strong>, rapporte la quantité de feuilles non vendables à la quantité totale passée en machine. Suivi par poste et par type de travail, il permet de repérer les dérives et de mesurer l'effet des actions d'amélioration.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> cacher une erreur ou glisser des feuilles douteuses au milieu d'une palette conforme aggrave toujours la situation : la non-conformité devient externe, plus coûteuse, et la confiance est rompue. Une anomalie signalée tôt est une anomalie à moindre coût.</div>"
      }
     ],
     "points_cles": [
      "La qualité se construit par la maîtrise du processus, pas par un tri final",
      "ISO 9001 définit un système de management de la qualité certifiable ; amélioration continue selon le PDCA",
      "Norme, certification, label et cahier des charges client sont des notions distinctes",
      "Causes communes : variation normale ; causes spéciales : dérive à détecter et corriger",
      "Une carte de contrôle alerte sur un point hors limite, une série d'un même côté ou une tendance",
      "Le plan de contrôle fixe quoi, comment, à quelle fréquence, avec quelle tolérance et quelle réaction",
      "Traitement d'une non-conformité : action immédiate, analyse des causes, action corrective, vérification",
      "Outils d'analyse : QQOQCP, Ishikawa (5 M), 5 pourquoi, Pareto"
     ],
     "lexique": [
      {
       "terme": "Système de management de la qualité",
       "def": "Organisation de l'entreprise visant à satisfaire le client et à s'améliorer en continu."
      },
      {
       "terme": "Certification",
       "def": "Attestation par un organisme tiers de la conformité à un référentiel."
      },
      {
       "terme": "PDCA",
       "def": "Cycle d'amélioration continue : planifier, réaliser, vérifier, ajuster."
      },
      {
       "terme": "Carte de contrôle",
       "def": "Graphique chronologique de mesures avec limites, servant à détecter les dérives."
      },
      {
       "terme": "Tolérance",
       "def": "Écart maximal admis par rapport à la valeur cible."
      },
      {
       "terme": "Autocontrôle",
       "def": "Contrôle effectué par l'opérateur sur sa propre production selon un plan défini."
      },
      {
       "terme": "Non-conformité",
       "def": "Non-respect d'une exigence spécifiée."
      },
      {
       "terme": "Action corrective",
       "def": "Action visant à supprimer la cause d'une non-conformité pour éviter sa répétition."
      },
      {
       "terme": "Diagramme d'Ishikawa",
       "def": "Représentation des causes possibles d'un effet, classées par familles (5 M)."
      },
      {
       "terme": "Traçabilité",
       "def": "Capacité à retrouver l'historique, les matières et les contrôles d'un produit."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Matières, procédés et façonnage",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "brpip-papiers-cartons",
     "titre": "Fabrication et propriétés des papiers, cartons et supports spéciaux",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire les étapes de fabrication d'un papier, de la pâte à la bobine",
      "Relier la composition et le couchage d'un papier à son comportement à l'impression",
      "Interpréter les propriétés d'imprimabilité d'une fiche technique de papier",
      "Expliquer l'influence de l'humidité et organiser la conservation des supports",
      "Distinguer cartons plats, cartons ondulés et supports synthétiques ou adhésifs"
     ],
     "sections": [
      {
       "titre": "De la fibre à la bobine",
       "contenu": "<p>Le papier est une feuille formée de <strong>fibres de cellulose</strong> enchevêtrées et liées entre elles. Ces fibres proviennent du bois (résineux pour les fibres longues, résistantes ; feuillus pour les fibres courtes, qui donnent un bon lissé et une bonne opacité), de papiers récupérés ou, plus rarement, d'autres végétaux (coton, lin).</p>\n<p>On distingue deux grandes familles de pâtes :</p>\n<ul>\n<li>la <strong>pâte mécanique</strong>, obtenue en défibrant le bois par meulage ou raffinage ; le rendement est élevé, mais la pâte conserve la lignine, qui jaunit à la lumière ; elle est utilisée pour le papier journal et certains papiers de magazine ;</li>\n<li>la <strong>pâte chimique</strong>, obtenue en dissolvant la lignine par cuisson ; les fibres sont plus pures et plus résistantes ; après blanchiment, elle donne les papiers dits <strong>sans bois</strong>, qui ne jaunissent pas.</li>\n</ul>\n<p>La pâte recyclée est obtenue en remettant en suspension des vieux papiers puis en les <strong>désencrant</strong>. Les fibres raccourcissent à chaque cycle : elles ne peuvent être recyclées qu'un nombre limité de fois, d'où la nécessité d'un apport régulier de fibres vierges.</p>\n<p>Sur la <strong>machine à papier</strong>, la suspension très diluée (à plus de 99 % d'eau) est répartie sur une toile en mouvement. L'eau s'égoutte, la feuille se forme, puis elle est pressée et séchée sur des cylindres chauffés. Comme les fibres s'orientent majoritairement dans le sens de défilement de la toile, la feuille possède un <strong>sens machine</strong> (sens des fibres) et un <strong>sens travers</strong>. La feuille a aussi deux faces : le <strong>côté toile</strong> et le <strong>côté feutre</strong>, qui peuvent présenter un aspect légèrement différent.</p>\n<p>On ajoute à la pâte des <strong>charges minérales</strong> (carbonate de calcium, kaolin) pour améliorer l'opacité, la blancheur et le lissé, ainsi qu'un <strong>collage</strong> qui limite la pénétration des liquides.</p>"
      },
      {
       "titre": "Le couchage et les finitions de surface",
       "contenu": "<p>Le <strong>couchage</strong> consiste à déposer à la surface du papier une ou plusieurs couches d'une sauce composée de pigments minéraux et de liants. La surface devient fermée, lisse et uniforme : l'encre reste en surface au lieu de pénétrer dans les fibres, ce qui donne des points de trame nets, des couleurs saturées et un meilleur rendu des images.</p>\n<table><thead><tr><th>Type</th><th>Dépôt de couchage</th><th>Usage typique</th></tr></thead><tbody>\n<tr><td>Non couché (offset, bouffant)</td><td>Aucun ou simple surfaçage</td><td>Papier à lettres, livres de texte, formulaires</td></tr>\n<tr><td>Couché léger (LWC)</td><td>Faible</td><td>Magazines à fort tirage en rotative</td></tr>\n<tr><td>Couché moyen ou classique</td><td>Moyen, une ou deux couches</td><td>Brochures, catalogues, dépliants</td></tr>\n<tr><td>Couché de haute qualité</td><td>Important, plusieurs couches</td><td>Rapports annuels, livres d'art</td></tr>\n</tbody></table>\n<p>Après couchage, le papier peut être <strong>calandré</strong> (passé entre des cylindres sous pression) pour devenir brillant. On obtient ainsi trois finitions principales : <strong>brillant</strong>, <strong>satiné</strong> (ou demi-mat, « silk ») et <strong>mat</strong>. Un papier couché mat sèche souvent plus lentement et marque davantage au frottement qu'un brillant, ce qui peut imposer un vernis de protection.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le choix entre papier couché et non couché change toute la préparation : profil de couleur, engraissement, taux d'encrage maximal, parfois linéature. Le papier inscrit au dossier de fabrication doit donc être connu dès le prépresse, et toute substitution de papier en dernière minute doit être signalée au prépresse.</div>"
      },
      {
       "titre": "Les propriétés d'imprimabilité",
       "contenu": "<p>La <strong>fiche technique</strong> d'un papier, fournie par le fabricant, indique des caractéristiques mesurées selon des normes. Les principales sont :</p>\n<table><thead><tr><th>Propriété</th><th>Unité ou mesure</th><th>Influence à l'impression ou au façonnage</th></tr></thead><tbody>\n<tr><td>Grammage</td><td>g/m²</td><td>Rigidité, poids d'envoi, réglages machine</td></tr>\n<tr><td>Épaisseur et main</td><td>µm ; cm³/g</td><td>Épaisseur du dos d'un livre, passage en machine</td></tr>\n<tr><td>Blancheur (indice CIE)</td><td>Valeur sans unité</td><td>Éclat perçu ; un indice élevé signale souvent des azurants optiques</td></tr>\n<tr><td>Teinte (coordonnées Lab)</td><td>L*, a*, b*</td><td>Choix de la condition d'impression et du profil</td></tr>\n<tr><td>Opacité</td><td>%</td><td>Transparence du verso (« transparence » ou « montée » de l'impression verso)</td></tr>\n<tr><td>Lissé ou rugosité</td><td>Selon la méthode (par exemple Bendtsen, PPS)</td><td>Netteté des points, contact avec le blanchet</td></tr>\n<tr><td>Brillant</td><td>Unités de brillant à un angle donné</td><td>Aspect visuel, contraste avec un vernis sélectif</td></tr>\n<tr><td>Résistance à l'arrachage</td><td>Vitesse ou valeur critique</td><td>Risque d'arrachage de fibres ou de couchage avec des encres tirantes</td></tr>\n<tr><td>Humidité</td><td>%</td><td>Stabilité dimensionnelle, électricité statique, tuilage</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une fiche technique pour choisir un papier de brochure imprimée recto verso avec de grands aplats foncés. 1. Repérer l'usage et les contraintes : recto verso et aplats foncés, donc risque de transparence. 2. Lire l'opacité : écarter les références en dessous d'environ 90 % pour ce type de travail. 3. Lire grammage et main : un papier bouffant à grammage égal est plus épais et souvent plus opaque, mais alourdit l'épaisseur du dos. 4. Lire le type de surface : couché satiné si les images doivent être riches, avec vernis si les aplats risquent de marquer. 5. Vérifier la compatibilité avec le procédé (offset feuille, numérique : certains papiers portent la mention de compatibilité avec une technologie). 6. Rédiger le choix en une phrase argumentée : « Couché satiné 135 g/m², opacité 94 %, adapté au recto verso avec aplats ; vernis acrylique de protection recommandé. »</div>"
      },
      {
       "titre": "Papier et humidité",
       "contenu": "<p>Le papier est <strong>hygroscopique</strong> : ses fibres absorbent ou rejettent l'humidité de l'air jusqu'à se mettre en équilibre. En absorbant de l'eau, les fibres gonflent surtout en largeur ; la feuille s'allonge alors davantage dans le sens travers que dans le sens machine. Ces variations de dimensions provoquent :</p>\n<ul>\n<li>des <strong>défauts de repérage</strong> entre couleurs ou entre recto et verso ;</li>\n<li>des <strong>tuilages</strong> (bords qui se relèvent) et des <strong>gondolements</strong> (bords ondulés) qui perturbent le margeur ;</li>\n<li>de l'<strong>électricité statique</strong> lorsque l'air est trop sec, qui colle les feuilles entre elles ;</li>\n<li>des difficultés de pliage et des cassures au pli sur papier trop sec.</li>\n</ul>\n<p>Les ateliers sont donc climatisés et humidifiés : on vise couramment une température d'environ 20 à 23 °C et une humidité relative d'environ 50 à 55 %. Le papier arrive emballé dans un film étanche ; il doit être <strong>acclimaté</strong>, c'est-à-dire laissé dans son emballage dans l'atelier le temps que sa température s'aligne sur celle de la pièce, avant d'être déballé. Ce délai dépend de l'écart de température et du volume de la palette ; il peut aller de quelques heures à plus d'une journée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> déballer une palette froide venue d'un entrepôt non chauffé fait condenser l'humidité de l'air sur les bords des feuilles, qui ondulent aussitôt. Le défaut est souvent irréversible pour le tirage en cours.</div>"
      },
      {
       "titre": "Cartons et supports spéciaux",
       "contenu": "<p>Au-delà d'environ 225 à 250 g/m², on parle généralement de <strong>carte</strong> ou de <strong>carton</strong>, la frontière variant selon les usages. On distingue :</p>\n<ul>\n<li>le <strong>carton plat</strong> (ou compact), formé de plusieurs jets de pâte : carton couché à dos gris ou blanc, carton blanchi massif ; il sert aux étuis pliants, aux couvertures, aux PLV ;</li>\n<li>le <strong>carton ondulé</strong>, composé de papiers de couverture collés de part et d'autre d'une ou plusieurs <strong>cannelures</strong> ondulées ; il sert à l'emballage de transport et aux présentoirs ; on l'imprime en flexographie directe, en numérique ou en contre-collant une feuille déjà imprimée en offset.</li>\n</ul>\n<p>Les <strong>supports synthétiques</strong> (polypropylène, polyester, PVC) résistent à l'eau et à la déchirure ; ils servent aux étiquettes, aux cartes, à l'affichage. Ils n'absorbent pas l'encre : il faut des encres adaptées (séchage UV, encres oxydatives spéciales) et souvent un traitement de surface qui améliore l'adhérence.</p>\n<p>Les <strong>supports adhésifs</strong> associent un frontal imprimable, un adhésif (permanent, repositionnable, enlevable) et un support siliconé (le dorsal). Ils sont imprimés en bobine pour les étiquettes ou en feuille pour les autocollants.</p>"
      },
      {
       "titre": "Papier et environnement",
       "contenu": "<p>Le papier est une matière renouvelable et recyclable, mais sa fabrication consomme de l'eau, de l'énergie et du bois. Plusieurs repères permettent au client et à l'imprimeur de faire des choix responsables :</p>\n<ul>\n<li>les certifications <strong>FSC</strong> et <strong>PEFC</strong> garantissent que les fibres proviennent de forêts gérées durablement ou de sources contrôlées ; pour apposer leur logo sur un imprimé, l'imprimeur doit lui-même être certifié « chaîne de contrôle » et utiliser un papier certifié ;</li>\n<li>les papiers <strong>recyclés</strong> contiennent une part de fibres récupérées, indiquée en pourcentage ;</li>\n<li>l'<strong>Écolabel européen</strong> prend en compte l'ensemble du cycle de fabrication du papier.</li>\n</ul>\n<p>Dans l'atelier, la première action environnementale est de réduire la gâche : bien calculer la passe, optimiser l'imposition, stabiliser le calage. Les rognures et feuilles de gâche sont triées et vendues à des récupérateurs ; elles constituent une matière première pour les papeteries.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un logo FSC ou PEFC sur un imprimé n'est autorisé que si toute la chaîne est certifiée, du papetier à l'imprimeur. Il doit comporter le numéro de licence de l'entreprise certifiée.</div>"
      }
     ],
     "points_cles": [
      "Le papier est un réseau de fibres de cellulose ; pâte mécanique (avec lignine, jaunit) ou chimique (sans bois)",
      "La machine à papier crée un sens machine et un sens travers, un côté toile et un côté feutre",
      "Le couchage ferme la surface et améliore la netteté et la saturation ; finitions brillant, satiné, mat",
      "La fiche technique renseigne grammage, main, blancheur, teinte, opacité, lissé, arrachage, humidité",
      "Le papier est hygroscopique : il s'allonge surtout dans le sens travers en absorbant l'humidité",
      "Atelier vers 20 à 23 °C et 50 à 55 % d'humidité relative ; acclimatation avant déballage",
      "Carton plat pour étuis et couvertures, carton ondulé pour l'emballage de transport",
      "FSC et PEFC exigent une chaîne de contrôle certifiée jusqu'à l'imprimeur"
     ],
     "lexique": [
      {
       "terme": "Cellulose",
       "def": "Constituant principal des fibres végétales qui forment le papier."
      },
      {
       "terme": "Lignine",
       "def": "Substance du bois liant les fibres ; elle fait jaunir le papier à la lumière."
      },
      {
       "terme": "Papier sans bois",
       "def": "Papier fabriqué à partir de pâte chimique, débarrassée de la lignine."
      },
      {
       "terme": "Charges",
       "def": "Pigments minéraux ajoutés à la pâte pour améliorer opacité, blancheur et lissé."
      },
      {
       "terme": "Couchage",
       "def": "Dépôt d'une couche de pigments et de liants à la surface du papier."
      },
      {
       "terme": "Calandrage",
       "def": "Passage du papier entre des cylindres sous pression pour le lisser ou le rendre brillant."
      },
      {
       "terme": "Opacité",
       "def": "Aptitude d'un papier à empêcher de voir l'impression du verso ou d'une feuille placée dessous."
      },
      {
       "terme": "Hygroscopique",
       "def": "Qui absorbe ou rejette l'humidité de l'air ambiant."
      },
      {
       "terme": "Acclimatation",
       "def": "Mise en équilibre de température du papier emballé avec l'atelier avant déballage."
      },
      {
       "terme": "Cannelure",
       "def": "Papier ondulé formant l'âme d'un carton ondulé."
      }
     ]
    },
    {
     "id": "brpip-encres-sechage",
     "titre": "Les encres, les vernis et leur séchage",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Décrire la composition d'une encre et le rôle de chaque constituant",
      "Distinguer les encres selon le procédé : grasses, liquides, UV, numériques",
      "Expliquer les modes de séchage et leurs conditions",
      "Vérifier la compatibilité entre encre, support et finition",
      "Appliquer les règles de stockage et de manipulation des encres"
     ],
     "sections": [
      {
       "titre": "La composition d'une encre",
       "contenu": "<p>Une encre d'imprimerie est un mélange formé de quatre familles de constituants :</p>\n<table><thead><tr><th>Constituant</th><th>Rôle</th><th>Exemples</th></tr></thead><tbody>\n<tr><td>Matières colorantes</td><td>Donner la couleur</td><td>Pigments (insolubles, résistants à la lumière), colorants (solubles), pigments métalliques</td></tr>\n<tr><td>Liant ou vernis</td><td>Transporter le pigment, le fixer au support, former un film</td><td>Résines, huiles végétales ou minérales, monomères et oligomères pour les encres UV</td></tr>\n<tr><td>Solvant ou diluant</td><td>Régler la viscosité, permettre le transfert</td><td>Huiles, eau, alcools, esters</td></tr>\n<tr><td>Additifs</td><td>Ajuster une propriété particulière</td><td>Siccatifs, cires (résistance au frottement), antioxydants, photo-initiateurs</td></tr>\n</tbody></table>\n<p>Deux propriétés physiques déterminent le comportement de l'encre en machine :</p>\n<ul>\n<li>la <strong>viscosité</strong>, résistance à l'écoulement ; une encre offset est très visqueuse (pâteuse), une encre de flexographie ou d'héliogravure est liquide ;</li>\n<li>le <strong>tirant</strong> (ou tack), force avec laquelle l'encre résiste à la séparation entre deux rouleaux ou entre le blanchet et le papier ; un tirant trop fort peut arracher la surface du papier.</li>\n</ul>\n<p>L'encre est aussi caractérisée par sa <strong>résistance</strong> : à la lumière (indice de solidité), au frottement, aux solvants, à la chaleur. Les encres pour emballage alimentaire doivent en outre présenter une faible <strong>migration</strong> de leurs composants vers l'aliment.</p>"
      },
      {
       "titre": "Des encres différentes selon les procédés",
       "contenu": "<table><thead><tr><th>Procédé</th><th>Type d'encre</th><th>Viscosité</th><th>Séchage principal</th></tr></thead><tbody>\n<tr><td>Offset feuilles</td><td>Encre grasse à base d'huiles végétales et de résines</td><td>Très élevée (pâte)</td><td>Pénétration puis oxydation</td></tr>\n<tr><td>Offset rotative avec sécheur</td><td>Encre grasse thermosiccative</td><td>Élevée</td><td>Évaporation des huiles dans un four</td></tr>\n<tr><td>Offset UV ou LED-UV</td><td>Encre à base de monomères et photo-initiateurs</td><td>Élevée</td><td>Polymérisation sous rayonnement UV</td></tr>\n<tr><td>Flexographie</td><td>Encre liquide à l'eau, aux solvants ou UV</td><td>Faible</td><td>Évaporation ou polymérisation</td></tr>\n<tr><td>Héliogravure</td><td>Encre liquide aux solvants (souvent toluène en publication) ou à l'eau</td><td>Très faible</td><td>Évaporation</td></tr>\n<tr><td>Sérigraphie</td><td>Encre en pâte fluide, aux solvants, à l'eau ou UV</td><td>Moyenne</td><td>Évaporation ou polymérisation</td></tr>\n<tr><td>Électrophotographie</td><td>Toner sec ou liquide</td><td>Poudre ou liquide chargé</td><td>Fusion par la chaleur (toner sec)</td></tr>\n<tr><td>Jet d'encre</td><td>Encre aqueuse, solvant, éco-solvant, latex ou UV</td><td>Très faible</td><td>Absorption, évaporation ou polymérisation</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une encre est conçue pour un procédé, un support et un mode de séchage précis. On ne mélange jamais des encres de familles différentes, même de même couleur, et on ne passe pas d'une encre UV à une encre conventionnelle sans changer les rouleaux ou les nettoyer avec les produits prévus.</div>"
      },
      {
       "titre": "Les mécanismes de séchage",
       "contenu": "<p>On appelle <strong>séchage</strong> le passage de l'encre de l'état liquide ou pâteux à un film solide. Plusieurs mécanismes existent, souvent combinés :</p>\n<ul>\n<li>la <strong>pénétration</strong> (ou absorption) : la partie fluide de l'encre est aspirée par les pores du papier ; c'est un séchage rapide en surface sur papier non couché, plus lent sur couché ; il permet de manipuler la feuille sans la rendre résistante au frottement ;</li>\n<li>l'<strong>oxydation</strong> (ou oxypolymérisation) : les huiles végétales réagissent avec l'oxygène de l'air et forment un réseau solide ; ce séchage demande plusieurs heures, il est accéléré par des siccatifs et ralenti par le froid, l'humidité ou une solution de mouillage trop acide ;</li>\n<li>l'<strong>évaporation</strong> : le solvant ou l'eau s'évapore, souvent aidé par de l'air chaud ;</li>\n<li>la <strong>polymérisation</strong> sous rayonnement : sous l'effet des UV, les photo-initiateurs déclenchent une réaction qui durcit instantanément l'encre ;</li>\n<li>la <strong>fusion</strong> : le toner est fondu et fixé au papier par un rouleau chauffant.</li>\n</ul>\n<p>Le séchage par <strong>LED-UV</strong> utilise des diodes qui émettent dans une bande étroite d'ultraviolets. Il consomme moins d'énergie, chauffe peu le support et ne produit pas d'ozone, mais il exige des encres et des vernis formulés pour cette longueur d'onde.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une encre UV insuffisamment polymérisée reste collante ou libère des composants non réagis. Le conducteur vérifie la puissance et l'état des lampes et contrôle la polymérisation par un test simple (frottement, test à l'ongle ou au ruban adhésif selon la procédure de l'entreprise). Les encres UV non polymérisées sont irritantes pour la peau : gants obligatoires.</div>"
      },
      {
       "titre": "Le maculage et les moyens de l'éviter",
       "contenu": "<p>Le <strong>maculage</strong> est le transfert d'encre fraîche d'une feuille sur le verso de la feuille posée au-dessus dans la pile de réception. Il survient surtout sur papier couché, avec de fortes charges d'encre et des piles trop hautes.</p>\n<p>Les moyens de prévention sont :</p>\n<ul>\n<li>la <strong>poudre anti-maculante</strong>, fine poudre (souvent à base d'amidon) projetée sur la feuille en sortie, qui crée un petit espace entre les feuilles ;</li>\n<li>la limitation de la hauteur des piles et l'aération des piles ;</li>\n<li>le respect du taux d'encrage maximal et d'une densité correcte ;</li>\n<li>le <strong>vernis de protection</strong> appliqué en ligne ;</li>\n<li>le séchage infrarouge ou à air chaud en sortie de presse ;</li>\n<li>le passage aux encres UV, qui sèchent instantanément.</li>\n</ul>\n<p>Un excès de poudre pose d'autres problèmes : aspect rugueux, encrassement des machines de façonnage, gêne pour un pelliculage ou un vernis UV ultérieur. La quantité de poudre se règle selon le support et la charge d'encre.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer la quantité d'encre nécessaire pour un aplat. Données : 10 000 feuilles 70 × 100 cm, aplat de magenta couvrant 40 % de la feuille, consommation d'encre offset de l'ordre de 1,2 g/m² pour un aplat (valeur indicative, à prendre dans les tables du fournisseur). 1. Surface d'une feuille : 0,70 × 1,00 = 0,70 m². 2. Surface imprimée en aplat par feuille : 0,70 × 0,40 = 0,28 m². 3. Surface totale : 0,28 × 10 000 = 2 800 m². 4. Masse d'encre : 2 800 × 1,2 = 3 360 g, soit environ 3,4 kg. 5. Ajouter une marge pour le remplissage de l'encrier, les rouleaux et la gâche (souvent 10 à 20 %), soit environ 4 kg à prévoir.</div>"
      },
      {
       "titre": "Les vernis et leur compatibilité",
       "contenu": "<p>Les <strong>vernis</strong> protègent l'imprimé et modifient son aspect (brillant, mat, toucher doux). On distingue :</p>\n<table><thead><tr><th>Vernis</th><th>Application</th><th>Caractéristiques</th></tr></thead><tbody>\n<tr><td>Vernis gras (offset)</td><td>Par un groupe d'impression, comme une encre</td><td>Protection modérée, peut être sélectif, séchage par oxydation</td></tr>\n<tr><td>Vernis acrylique (à l'eau)</td><td>Par une tour de vernissage en ligne</td><td>Séchage rapide, bonne protection, limite le maculage, généralement en plein</td></tr>\n<tr><td>Vernis UV</td><td>En ligne ou hors ligne, en plein ou sélectif</td><td>Brillance élevée, forte résistance, effet de relief possible en sérigraphie</td></tr>\n</tbody></table>\n<p>La compatibilité est essentielle : un vernis UV sur une encre conventionnelle encore humide peut mal adhérer ou provoquer un aspect « peau d'orange » ; une encre contenant trop de cire empêche l'adhérence d'un pelliculage, d'une colle ou d'une dorure. Les zones destinées à être collées (rabats d'étui) ou à recevoir une écriture (cartes réponses) sont laissées sans vernis : on prévoit une <strong>réserve de vernis</strong> dans le fichier.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dès qu'un travail comporte une finition (pelliculage, dorure, collage, vernis UV hors ligne), le conducteur choisit l'encre et la poudre en conséquence et le note sur la fiche. Le fournisseur d'encre fournit une fiche technique qui précise les compatibilités.</div>"
      },
      {
       "titre": "Stocker et manipuler les encres",
       "contenu": "<p>Les encres et les produits associés (solvants de lavage, additifs de mouillage) sont des produits chimiques. Leur stockage obéit à plusieurs règles :</p>\n<ul>\n<li>conserver les pots fermés, à l'abri de la chaleur et de la lumière (les encres UV durcissent à la lumière du jour) ;</li>\n<li>appliquer la règle du « premier entré, premier sorti » et respecter les dates de péremption ;</li>\n<li>étiqueter tout récipient de transvasement avec le nom du produit et ses pictogrammes ;</li>\n<li>stocker les produits inflammables dans une armoire ou un local adapté, sur rétention ;</li>\n<li>conserver les fiches de données de sécurité accessibles au poste.</li>\n</ul>\n<p>Les restes d'encre sont recouverts d'un film ou d'un produit anti-peau pour éviter l'oxydation en surface. Les fonds de pots, chiffons souillés et déchets d'encre sont des <strong>déchets dangereux</strong> : ils sont collectés séparément et confiés à un prestataire agréé, avec un bordereau de suivi.</p>\n<p>Pour un ton direct, on conserve la formule (proportions des encres de base, référence et lot) et un échantillon imprimé : une réimpression pourra être réalisée à l'identique.</p>"
      }
     ],
     "points_cles": [
      "Une encre comprend matières colorantes, liant, solvant ou diluant et additifs",
      "Viscosité et tirant déterminent le comportement de l'encre en machine",
      "Encre offset grasse et pâteuse ; encres flexo et hélio liquides ; encres UV qui polymérisent",
      "Séchages : pénétration, oxydation, évaporation, polymérisation, fusion",
      "Le LED-UV sèche instantanément avec moins d'énergie, mais exige des encres adaptées",
      "Le maculage se prévient par poudre, piles basses, encrage maîtrisé, vernis, séchage ou encres UV",
      "Prévoir des réserves de vernis pour les zones à coller ou à écrire",
      "Encres et chiffons souillés sont des déchets dangereux à collecter séparément"
     ],
     "lexique": [
      {
       "terme": "Pigment",
       "def": "Matière colorante insoluble dispersée dans le liant de l'encre."
      },
      {
       "terme": "Liant",
       "def": "Constituant qui transporte le pigment et forme un film solide sur le support."
      },
      {
       "terme": "Viscosité",
       "def": "Résistance d'un fluide à l'écoulement."
      },
      {
       "terme": "Tirant",
       "def": "Force de résistance de l'encre à la séparation entre deux surfaces."
      },
      {
       "terme": "Oxydation",
       "def": "Séchage par réaction des huiles de l'encre avec l'oxygène de l'air."
      },
      {
       "terme": "Polymérisation",
       "def": "Durcissement d'une encre ou d'un vernis par réaction chimique déclenchée par les UV."
      },
      {
       "terme": "Siccatif",
       "def": "Additif qui accélère le séchage par oxydation."
      },
      {
       "terme": "Maculage",
       "def": "Transfert d'encre fraîche sur le verso de la feuille suivante dans la pile."
      },
      {
       "terme": "Poudre anti-maculante",
       "def": "Poudre fine projetée sur les feuilles en sortie de presse pour éviter le maculage."
      },
      {
       "terme": "Réserve de vernis",
       "def": "Zone volontairement laissée sans vernis pour le collage ou l'écriture."
      }
     ]
    },
    {
     "id": "brpip-procedes-impression",
     "titre": "Flexographie, héliogravure, sérigraphie et impression numérique",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire la forme imprimante et le groupe imprimant de la flexographie, de l'héliogravure et de la sérigraphie",
      "Expliquer les deux grandes technologies d'impression numérique : électrophotographie et jet d'encre",
      "Reconnaître un procédé à partir des indices visibles sur un imprimé",
      "Comparer les procédés selon le tirage, le support et la qualité attendue",
      "Justifier le choix d'un procédé pour un produit donné"
     ],
     "sections": [
      {
       "titre": "La flexographie",
       "contenu": "<p>La <strong>flexographie</strong> est un procédé d'impression en relief : les éléments imprimants sont en saillie sur une plaque souple en <strong>photopolymère</strong>, montée sur un cylindre porte-cliché ou sur un manchon. L'encre est liquide et séchée par évaporation ou par UV.</p>\n<p>Le cœur du groupe imprimant est le <strong>cylindre anilox</strong> (ou rouleau tramé) : un cylindre gravé de millions de petites alvéoles régulières. Il reçoit l'encre, une <strong>racle</strong> (souvent en chambre fermée) en retire l'excédent, et les alvéoles transfèrent une quantité d'encre précise à la plaque. Deux caractéristiques définissent un anilox :</p>\n<ul>\n<li>sa <strong>linéature</strong> (nombre d'alvéoles par centimètre) : plus elle est fine, plus le dépôt est mince et adapté aux trames fines ;</li>\n<li>son <strong>volume</strong> d'alvéoles, exprimé en cm³/m² : plus il est élevé, plus le dépôt d'encre est épais, ce qui convient aux aplats et au blanc couvrant.</li>\n</ul>\n<p>La plaque transfère l'encre directement sur le support avec une pression très légère, appelée « baiser » (<em>kiss print</em>). Une pression excessive écrase les reliefs et crée un <strong>effet de halo</strong> (liseré plus foncé autour des éléments) et un fort engraissement.</p>\n<p>La flexographie imprime en bobine sur des supports très variés : films plastiques, papiers kraft, étiquettes adhésives, carton ondulé, sacs. C'est le procédé dominant de l'emballage souple et de l'étiquette.</p>"
      },
      {
       "titre": "L'héliogravure",
       "contenu": "<p>L'<strong>héliogravure</strong> est un procédé en creux : les éléments imprimants sont des <strong>alvéoles</strong> gravées dans un cylindre métallique (base acier, couche de cuivre gravée puis chromée pour la résistance). Le cylindre tourne dans un bac d'encre très liquide ; une <strong>racle</strong> d'acier essuie la surface et ne laisse l'encre que dans les alvéoles ; le papier, pressé par un cylindre de pression recouvert de caoutchouc, aspire l'encre des alvéoles.</p>\n<p>La gravure se fait aujourd'hui par gravure électromécanique (un diamant vibrant creuse les alvéoles) ou par laser. Comme les variations de tons s'obtiennent par la profondeur et la surface des alvéoles, tout l'imprimé, y compris le texte, est tramé : on voit au compte-fils un fin quadrillage, même dans les lettres, avec des contours légèrement crénelés.</p>\n<p>Le cylindre est coûteux et long à graver, mais il résiste à des tirages de plusieurs millions d'exemplaires. L'héliogravure est donc réservée aux très longs tirages : catalogues de vente à distance, magazines à grande diffusion, emballages souples de grande consommation, papiers peints, décors.</p>"
      },
      {
       "titre": "La sérigraphie",
       "contenu": "<p>La <strong>sérigraphie</strong> est un procédé par perméabilité : l'encre traverse un <strong>écran</strong>, tissu à mailles fines (polyester, parfois acier) tendu sur un cadre. Les zones non imprimantes sont bouchées par une émulsion photosensible durcie à l'insolation ; les zones imprimantes restent ouvertes. Une <strong>racle</strong> en caoutchouc ou en polyuréthane pousse l'encre à travers les mailles ouvertes.</p>\n<p>Le tissu est caractérisé par son nombre de <strong>fils par centimètre</strong> et le diamètre de ses fils. Un tissu peu serré laisse passer un dépôt épais (encres couvrantes, relief) ; un tissu serré permet des détails et des trames plus fines.</p>\n<p>Les atouts de la sérigraphie sont le <strong>dépôt d'encre épais</strong>, de quelques micromètres à plusieurs dizaines de micromètres, très supérieur à l'offset, et la possibilité d'imprimer sur presque toutes les matières et formes : textiles, verre, métal, objets cylindriques, panneaux rigides. Elle sert aussi à l'ennoblissement : vernis UV sélectif en relief, encres à effet (pailletées, phosphorescentes, à gratter).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> de nombreuses imprimeries offset sous-traitent à un sérigraphe le vernis sélectif épais ou les effets tactiles d'une couverture. Le fichier doit alors comporter une couche dédiée, en ton direct nommé clairement (par exemple « Vernis_selectif »), réglée en surimpression, et repérée exactement sur les éléments à valoriser.</div>"
      },
      {
       "titre": "L'impression numérique",
       "contenu": "<p>L'<strong>impression numérique</strong> n'utilise pas de forme imprimante fixe : l'image est recalculée pour chaque feuille, ce qui permet de changer le contenu d'un exemplaire à l'autre. Deux technologies dominent.</p>\n<p>L'<strong>électrophotographie</strong> (ou xérographie) :</p>\n<ol>\n<li>un tambour photoconducteur est chargé électriquement ;</li>\n<li>un laser ou une rangée de diodes efface la charge aux endroits qui ne doivent pas recevoir de toner (ou l'inverse selon la machine), créant une image latente ;</li>\n<li>le <strong>toner</strong>, poudre chargée, est attiré par l'image latente ;</li>\n<li>le toner est transféré sur le papier, directement ou par une bande de transfert ;</li>\n<li>il est fixé par <strong>fusion</strong> sous la chaleur et la pression d'un four de fixation.</li>\n</ol>\n<p>Certaines presses utilisent un toner liquide, qui permet des particules plus fines et un rendu proche de l'offset.</p>\n<p>Le <strong>jet d'encre</strong> projette des gouttelettes de l'ordre du picolitre à partir de têtes comportant des milliers de buses. Les têtes <strong>piézoélectriques</strong> éjectent la goutte par déformation d'un cristal sous tension ; les têtes <strong>thermiques</strong> par la formation d'une bulle de vapeur. On parle de <strong>goutte à la demande</strong> lorsque chaque goutte n'est éjectée qu'en cas de besoin. Le jet d'encre couvre aussi bien le grand format (affiches, bâches) que les presses de production à feuilles ou en bobine.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> tous les papiers ne conviennent pas à toutes les technologies numériques. Un papier non adapté au jet d'encre absorbe mal l'encre aqueuse ou provoque des bavures ; un support thermosensible se déforme dans le four de fixation d'une presse à toner. Vérifier la liste des supports qualifiés par le constructeur.</div>"
      },
      {
       "titre": "Reconnaître un procédé à l'examen d'un imprimé",
       "contenu": "<p>Au compte-fils (loupe grossissant de 8 à 15 fois environ), chaque procédé laisse des indices caractéristiques :</p>\n<table><thead><tr><th>Procédé</th><th>Indices visibles</th></tr></thead><tbody>\n<tr><td>Offset</td><td>Bords de lettres nets, trame AM régulière ou FM, aplats légèrement nuageux, aucun relief</td></tr>\n<tr><td>Flexographie</td><td>Liseré plus foncé autour des lettres (effet de halo), aplats parfois tachetés, points minimaux gros dans les hautes lumières</td></tr>\n<tr><td>Héliogravure</td><td>Texte tramé aux contours crénelés, petits manques possibles, aplats très lisses et saturés</td></tr>\n<tr><td>Sérigraphie</td><td>Dépôt épais, perceptible au toucher, bords parfois dentelés suivant la maille</td></tr>\n<tr><td>Électrophotographie</td><td>Fines particules de toner dispersées autour des éléments, léger brillant des aplats, parfois léger relief</td></tr>\n<tr><td>Jet d'encre</td><td>Gouttelettes dispersées, absence de rosette, trame aléatoire</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> identifier le procédé d'un imprimé inconnu. 1. Observer le support : bobine (étiquette en rouleau, film) ou feuille ; matière (papier, plastique, textile). 2. Passer le doigt sur un aplat : un relief net oriente vers la sérigraphie. 3. Au compte-fils, examiner un petit texte noir : tramé et crénelé, c'est l'héliogravure ; entouré d'un liseré foncé, c'est probablement la flexographie ; entouré de particules, c'est un procédé numérique à toner. 4. Examiner une zone de photo : rosette régulière (offset, flexo) ou trame aléatoire (FM, jet d'encre). 5. Croiser avec le type de produit et le tirage probable pour conclure, en formulant la réponse avec les indices qui la justifient.</div>"
      },
      {
       "titre": "Choisir un procédé",
       "contenu": "<p>Le choix d'un procédé résulte d'un compromis entre plusieurs critères. Le seuil de rentabilité entre deux procédés dépend des équipements et des prix de l'entreprise ; on le calcule au devis.</p>\n<table><thead><tr><th>Critère</th><th>Offset</th><th>Flexographie</th><th>Héliogravure</th><th>Sérigraphie</th><th>Numérique</th></tr></thead><tbody>\n<tr><td>Coût de la forme</td><td>Faible</td><td>Moyen</td><td>Très élevé</td><td>Faible à moyen</td><td>Nul</td></tr>\n<tr><td>Tirages adaptés</td><td>Moyens à longs</td><td>Moyens à longs</td><td>Très longs</td><td>Courts à moyens</td><td>Très courts à moyens, unitaires</td></tr>\n<tr><td>Supports</td><td>Papiers, cartons, certains plastiques</td><td>Films, étiquettes, kraft, carton ondulé</td><td>Papiers fins, films</td><td>Presque tous, objets</td><td>Papiers qualifiés, supports variés en grand format</td></tr>\n<tr><td>Données variables</td><td>Non</td><td>Non</td><td>Non</td><td>Non</td><td>Oui</td></tr>\n<tr><td>Dépôt d'encre</td><td>Mince</td><td>Mince à moyen</td><td>Moyen, variable</td><td>Épais</td><td>Mince</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la forme imprimante coûte cher mais sert à tous les exemplaires : plus le tirage est long, plus son coût est amorti. Le numérique n'a pas de forme mais un coût par exemplaire plus élevé ; il est imbattable en très petit tirage et seul possible pour la personnalisation.</div>"
      }
     ],
     "points_cles": [
      "Flexographie : relief, plaque photopolymère, anilox qui dose l'encre, impression en bobine sur supports variés",
      "Le volume de l'anilox (cm³/m²) règle l'épaisseur du dépôt ; sa linéature la finesse possible",
      "Héliogravure : creux, cylindre gravé et chromé, racle ; réservée aux très longs tirages",
      "Sérigraphie : perméabilité à travers un écran, dépôt épais, supports et objets très variés",
      "Électrophotographie : image latente sur tambour, toner, fixation par fusion",
      "Jet d'encre : gouttes de l'ordre du picolitre, têtes piézoélectriques ou thermiques",
      "Chaque procédé laisse des indices visibles au compte-fils",
      "Le choix dépend du tirage, du support, de la qualité, des données variables et du coût de la forme"
     ],
     "lexique": [
      {
       "terme": "Flexographie",
       "def": "Procédé en relief utilisant une plaque souple et des encres liquides."
      },
      {
       "terme": "Anilox",
       "def": "Cylindre gravé d'alvéoles qui dose l'encre transmise à la plaque de flexographie."
      },
      {
       "terme": "Héliogravure",
       "def": "Procédé en creux utilisant un cylindre gravé d'alvéoles et une racle."
      },
      {
       "terme": "Racle",
       "def": "Lame qui essuie ou pousse l'encre selon le procédé."
      },
      {
       "terme": "Sérigraphie",
       "def": "Procédé où l'encre traverse un écran à mailles ouvertes aux endroits imprimants."
      },
      {
       "terme": "Électrophotographie",
       "def": "Procédé numérique formant une image électrostatique qui attire le toner."
      },
      {
       "terme": "Toner",
       "def": "Poudre ou liquide pigmenté chargé électriquement, utilisé en électrophotographie."
      },
      {
       "terme": "Tête piézoélectrique",
       "def": "Tête jet d'encre qui éjecte la goutte par déformation d'un cristal sous tension."
      },
      {
       "terme": "Goutte à la demande",
       "def": "Jet d'encre où une goutte n'est éjectée que lorsqu'elle est nécessaire."
      },
      {
       "terme": "Compte-fils",
       "def": "Loupe de contrôle permettant d'observer la trame et les détails d'un imprimé."
      }
     ]
    },
    {
     "id": "brpip-faconnage-ennoblissement",
     "titre": "Façonnage industriel et ennoblissement",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Choisir un type de pli et une technique de rainage adaptés au support",
      "Comparer les modes de reliure industrielle et leurs contraintes de préparation",
      "Calculer et compenser la chasse d'un document piqué à cheval",
      "Décrire la découpe à la forme et les principaux procédés d'ennoblissement",
      "Anticiper dès le prépresse les contraintes du façonnage"
     ],
     "sections": [
      {
       "titre": "Plis et plieuses",
       "contenu": "<p>Le pliage transforme une feuille imprimée en dépliant ou en cahier. Les principaux types de plis d'un dépliant sont :</p>\n<table><thead><tr><th>Type de pli</th><th>Description</th><th>Point de vigilance</th></tr></thead><tbody>\n<tr><td>Pli roulé (ou enroulé)</td><td>Les volets se replient les uns dans les autres</td><td>Les volets intérieurs doivent être plus étroits de 1 à 3 mm pour ne pas buter dans le pli</td></tr>\n<tr><td>Pli accordéon (ou zigzag)</td><td>Les volets se replient alternativement</td><td>Volets de même largeur</td></tr>\n<tr><td>Pli fenêtre (ou portefeuille)</td><td>Deux volets extérieurs se rabattent vers le centre</td><td>Volets rabattus légèrement plus étroits que la moitié du panneau central</td></tr>\n<tr><td>Plis croisés</td><td>Plis successifs perpendiculaires, pour former un cahier</td><td>Sens des fibres et épaisseur limitent le nombre de plis</td></tr>\n</tbody></table>\n<p>Les <strong>plieuses</strong> utilisent deux principes, souvent combinés : la <strong>poche</strong> (la feuille entre dans une poche jusqu'à une butée, se cintre et est saisie par deux rouleaux qui forment le pli) et le <strong>couteau</strong> (une lame pousse la feuille entre deux rouleaux, plus précis pour les papiers épais et les plis croisés).</p>\n<p>Au-delà d'un certain grammage (souvent à partir d'environ 150 à 170 g/m² selon le papier) et pour tout papier couché épais, il faut <strong>rainer</strong> avant de plier : un outil marque une empreinte qui guide le pli et évite la cassure de la couche et de l'encre sur le dos du pli. Le pli dans le <strong>sens des fibres</strong> est plus facile et plus net ; un pli contre le sens des fibres casse plus facilement.</p>"
      },
      {
       "titre": "Les modes de reliure",
       "contenu": "<table><thead><tr><th>Reliure</th><th>Principe</th><th>Usage</th><th>Contraintes de préparation</th></tr></thead><tbody>\n<tr><td>Piqûre à cheval</td><td>Cahiers emboîtés les uns dans les autres, agrafés dans le pli</td><td>Magazines fins, brochures, catalogues</td><td>Nombre de pages multiple de 4 ; épaisseur limitée ; compensation de la chasse</td></tr>\n<tr><td>Dos carré collé</td><td>Cahiers assemblés à plat (encartés), dos fraisé ou grecqué, encollé, couverture rapportée</td><td>Magazines épais, catalogues, livres de poche</td><td>Prévoir une marge intérieure suffisante ; la largeur du dos dépend de l'épaisseur du papier ; zone de colle sans encre ni vernis</td></tr>\n<tr><td>Cousu-collé (ou cousu fil)</td><td>Cahiers cousus entre eux puis collés</td><td>Livres durables, beaux livres</td><td>Cahiers complets (multiple de 8, 16 ou 32 pages selon l'imposition)</td></tr>\n<tr><td>Reliure à spirale ou à anneaux métalliques</td><td>Feuilles perforées et reliées par une spirale</td><td>Calendriers, guides, cahiers techniques</td><td>Marge de perforation, ouverture à plat</td></tr>\n</tbody></table>\n<p>Pour le <strong>dos carré collé</strong>, deux familles de colles existent : la colle thermofusible classique (EVA), économique, et la colle <strong>polyuréthane (PUR)</strong>, plus souple et plus résistante, qui permet une meilleure ouverture du livre et résiste au froid comme à la chaleur, mais demande un temps de durcissement avant la coupe finale et une installation spécifique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en dos carré collé, environ 2 à 4 mm de chaque page sont pris dans le dos (fraisage et collage). Un texte ou un visuel placé trop près du blanc de couture disparaît dans la reliure ; une image en double page est coupée par le dos. Le gabarit doit prévoir cette perte.</div>"
      },
      {
       "titre": "La chasse en piqûre à cheval",
       "contenu": "<p>En piqûre à cheval, les feuilles pliées sont emboîtées. Chaque feuille extérieure entoure les feuilles intérieures : plus on va vers le centre du document, plus les feuilles <strong>débordent</strong> vers l'extérieur avant la coupe. Après la coupe en façade (côté opposé au dos), les pages centrales sont donc plus étroites que les pages extérieures. Ce décalage s'appelle la <strong>chasse</strong> (en anglais <em>creep</em>).</p>\n<p>Conséquence : les éléments placés près de la marge extérieure (numéros de page, textes en bord de page) se rapprochent du bord au centre du document, au risque d'être coupés. On compense la chasse à l'imposition, en décalant progressivement les pages intérieures vers le dos.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer et compenser la chasse d'une brochure de 48 pages piquée à cheval, papier couché 115 g/m² d'épaisseur 0,10 mm. 1. Nombre de feuilles emboîtées : chaque feuille pliée porte 4 pages, donc 48 ÷ 4 = 12 feuilles. 2. Chasse totale approchée : (nombre de feuilles - 1) × épaisseur = 11 × 0,10 = 1,1 mm. La feuille centrale dépasse donc d'environ 1,1 mm par rapport à la feuille extérieure. 3. Compensation par feuille : 1,1 ÷ 11 = 0,1 mm. 4. Paramétrer l'imposition : feuille extérieure décalée de 0 mm, deuxième de 0,1 mm vers le dos, troisième de 0,2 mm, et ainsi de suite jusqu'à 1,1 mm pour la feuille centrale. 5. Valider sur une maquette blanche réalisée avec le papier réel, car la formule est une approximation : le grammage, la main et le serrage au pliage influencent la valeur réelle.</div>\n<p>Au-delà d'une certaine épaisseur, la piqûre à cheval devient inadaptée : le document ne ferme plus bien, la chasse devient importante et les agrafes tiennent mal. On passe alors au dos carré collé. La limite dépend du papier ; on la vérifie avec le relieur ou le façonnier.</p>"
      },
      {
       "titre": "La découpe à la forme",
       "contenu": "<p>Pour obtenir un contour non rectangulaire (étui pliant, chemise à rabats, étiquette de forme, carte à encoche), on utilise une <strong>forme de découpe</strong> : une planche de bois dans laquelle sont insérés des <strong>filets</strong> d'acier. Les <strong>filets coupants</strong> tranchent le support ; les <strong>filets rainants</strong>, arrondis, marquent les plis ; les <strong>filets perforants</strong> réalisent des pointillés détachables. Des caoutchoucs placés de part et d'autre des filets éjectent le support après la coupe.</p>\n<p>La forme est montée sur une <strong>presse à découper</strong> à plat (ou sur un cylindre en découpe rotative). En face, une contre-partie rainée assure la qualité des rainages. Les déchets entre les poses sont éliminés par une station d'éjection.</p>\n<p>Le fichier de découpe est fourni sous forme de <strong>tracé vectoriel</strong> à l'échelle 1, sur un calque séparé, en ton direct nommé (par exemple « Decoupe »), réglé en surimpression, et jamais imprimé. Les fonds perdus doivent dépasser le tracé de découpe, généralement de 2 à 3 mm.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour un étui, le fournisseur de formes envoie un plan avec les traits coupants en trait continu et les rainages en pointillés, selon une convention à vérifier sur la légende. Le prépresse place le visuel sur ce plan et vérifie l'orientation des faces (dessus, dessous, rabats de collage) pour que l'impression ne se retrouve pas à l'envers une fois l'étui monté.</div>"
      },
      {
       "titre": "L'ennoblissement",
       "contenu": "<p>L'<strong>ennoblissement</strong> regroupe les finitions qui valorisent l'imprimé par l'aspect ou le toucher :</p>\n<table><thead><tr><th>Finition</th><th>Principe</th><th>Préparation du fichier</th></tr></thead><tbody>\n<tr><td>Pelliculage</td><td>Collage à chaud ou à froid d'un film plastique mince (brillant, mat, toucher doux)</td><td>Aucune couche spécifique ; prévoir un séchage complet avant pelliculage</td></tr>\n<tr><td>Vernis sélectif</td><td>Vernis appliqué sur certaines zones seulement</td><td>Couche dédiée en ton direct, en surimpression, repérée exactement</td></tr>\n<tr><td>Dorure à chaud</td><td>Transfert d'un film métallisé par un cliché chauffé sous pression</td><td>Couche dédiée vectorielle ; détails pas trop fins ; un cliché par couleur de film</td></tr>\n<tr><td>Gaufrage</td><td>Relief obtenu par pression entre un outil en creux et une contrepartie en relief</td><td>Couche dédiée ; prévoir l'effet sur le verso (débossage visible)</td></tr>\n<tr><td>Marquage à froid</td><td>Dépôt d'un film métallique sur une colle imprimée, puis surimpression possible</td><td>Couche de colle et calage avec les couleurs</td></tr>\n</tbody></table>\n<p>Ces finitions imposent un ordre d'opérations : par exemple, impression, séchage, pelliculage, puis vernis sélectif UV sur le pelliculage, puis dorure, puis découpe. L'ordre et les compatibilités figurent sur la fiche de fabrication et se vérifient sur un <strong>bon à façonner</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque finition sélective (vernis, dorure, gaufrage, découpe) se prépare comme une couleur supplémentaire : une couche dédiée, vectorielle si possible, en ton direct nommé, en surimpression, parfaitement repérée sur l'impression.</div>"
      },
      {
       "titre": "Anticiper le façonnage dès la conception",
       "contenu": "<p>La plupart des problèmes de façonnage naissent en amont. Une vérification systématique au prépresse permet de les éviter :</p>\n<ul>\n<li>le sens des fibres est-il compatible avec le pli principal et avec la reliure ? Pour un livre, les fibres doivent être parallèles au dos, sinon les pages ondulent et le livre ferme mal ;</li>\n<li>les marges intérieures tiennent-elles compte de la reliure, et les marges extérieures de la chasse ?</li>\n<li>les éléments traversant un pli (titre, photo en double page) sont-ils placés pour supporter un léger décalage ?</li>\n<li>les zones de collage sont-elles en réserve d'encre et de vernis ?</li>\n<li>les repères de pliage, de coupe et de collation (marques de dos qui forment un escalier sur les cahiers assemblés) sont-ils présents dans l'imposition ?</li>\n<li>le format brut, après impression, est-il compatible avec les formats minimal et maximal des machines de façonnage ?</li>\n</ul>\n<p>La <strong>maquette en blanc</strong>, réalisée avec le papier réel, permet de vérifier l'épaisseur, la tenue du pli et la largeur du dos avant de lancer la production. Elle est souvent présentée au client avec le BAT.</p>"
      }
     ],
     "points_cles": [
      "Plis roulé, accordéon, fenêtre et croisés ; volets intérieurs plus étroits en pli roulé",
      "Plieuses à poches et à couteaux ; rainer les papiers épais et couchés avant pliage",
      "Piqûre à cheval : multiple de 4 pages et chasse à compenser ; dos carré collé : perte de quelques millimètres dans le dos",
      "Colle PUR plus résistante et souple que la colle EVA, mais temps de durcissement",
      "Chasse approchée = (nombre de feuilles emboîtées - 1) × épaisseur du papier",
      "Forme de découpe : filets coupants, rainants et perforants ; tracé fourni sur couche dédiée",
      "Vernis sélectif, dorure, gaufrage : couches dédiées en ton direct, en surimpression",
      "Fibres parallèles au dos pour un livre ; maquette en blanc pour valider"
     ],
     "lexique": [
      {
       "terme": "Rainage",
       "def": "Marquage d'une empreinte qui guide le pli et évite la cassure du support."
      },
      {
       "terme": "Plieuse à poches",
       "def": "Machine qui forme le pli en faisant cintrer la feuille à la sortie d'une poche."
      },
      {
       "terme": "Piqûre à cheval",
       "def": "Reliure par agrafes dans le pli de cahiers emboîtés."
      },
      {
       "terme": "Dos carré collé",
       "def": "Reliure de cahiers assemblés à plat dont le dos est fraisé puis encollé."
      },
      {
       "terme": "Chasse",
       "def": "Débordement progressif des feuilles centrales d'un document piqué à cheval."
      },
      {
       "terme": "Forme de découpe",
       "def": "Outil composé de filets d'acier insérés dans une planche, servant à découper et rainer."
      },
      {
       "terme": "Pelliculage",
       "def": "Application d'un film plastique mince sur l'imprimé."
      },
      {
       "terme": "Dorure à chaud",
       "def": "Transfert d'un film métallisé par un cliché chauffé sous pression."
      },
      {
       "terme": "Gaufrage",
       "def": "Création d'un relief dans le support par pression entre deux outils."
      },
      {
       "terme": "Bon à façonner",
       "def": "Exemplaire de référence validé avant le lancement du façonnage."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Forme imprimante, organisation, maintenance et prévention",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "brpip-imposition-forme-imprimante",
     "titre": "Imposition électronique et réalisation de la forme imprimante",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Paramétrer une imposition électronique à partir d'un gabarit et des contraintes machine",
      "Placer et justifier les marques techniques d'une feuille d'impression",
      "Vérifier qu'une imposition tient dans le format de la feuille et de la plaque",
      "Décrire les technologies CtP et les types de plaques offset",
      "Contrôler et valider une forme imprimante avant sa mise en machine"
     ],
     "sections": [
      {
       "titre": "Du schéma d'imposition au logiciel",
       "contenu": "<p>L'<strong>imposition</strong> consiste à disposer les pages ou les poses sur la feuille d'impression de manière qu'après impression, pliage et coupe, le produit soit dans le bon ordre et dans le bon sens. Le principe des poses, des cahiers et des modes de recto verso est supposé connu ; on s'intéresse ici à sa mise en œuvre numérique, qui est le point de rencontre des deux options du diplôme : le prépresse y termine son travail, l'impression y commence le sien.</p>\n<p>Un <strong>logiciel d'imposition</strong>, autonome ou intégré au workflow, reçoit les pages PDF et les place selon un <strong>gabarit</strong> (ou schéma). Le gabarit décrit :</p>\n<ul>\n<li>le format de la feuille et de la plaque, la position de la <strong>prise de pince</strong> ;</li>\n<li>le schéma de pliage (cahier de 8, 16 ou 32 pages, nombre et ordre des plis) ;</li>\n<li>le mode de recto verso (séparé, basculage, culbutage) ;</li>\n<li>les blancs entre poses, les fonds perdus, les marges de rognage ;</li>\n<li>les <strong>marques techniques</strong> et la barre de contrôle ;</li>\n<li>éventuellement la compensation de chasse et le décalage pour la reliure.</li>\n</ul>\n<p>Beaucoup de logiciels proposent une bibliothèque de schémas de pliage normalisés ; le JDF transmis par le logiciel de gestion peut sélectionner le gabarit automatiquement. L'opérateur reste responsable de vérifier que le gabarit correspond au travail : format fini, nombre de pages, reliure et machine.</p>"
      },
      {
       "titre": "Les marques techniques de la feuille",
       "contenu": "<table><thead><tr><th>Marque</th><th>Rôle</th><th>Utilisateur</th></tr></thead><tbody>\n<tr><td>Traits de coupe</td><td>Indiquent les limites du format fini</td><td>Massicotier</td></tr>\n<tr><td>Repères de pliage</td><td>Indiquent l'emplacement des plis</td><td>Conducteur de plieuse</td></tr>\n<tr><td>Croix de repérage</td><td>Permettent de vérifier la superposition des couleurs</td><td>Conducteur de presse</td></tr>\n<tr><td>Barre de contrôle</td><td>Plages d'aplats, de trames, de gris et de superpositions mesurées pour piloter et contrôler l'encrage</td><td>Conducteur, système de mesure</td></tr>\n<tr><td>Marques de collation</td><td>Petits rectangles au dos des cahiers, décalés de cahier en cahier, formant un escalier une fois les cahiers assemblés</td><td>Relieur : un escalier interrompu signale un cahier manquant ou en double</td></tr>\n<tr><td>Indications de dossier</td><td>Numéro de dossier, nom du travail, couleur, face, date</td><td>Tous les postes</td></tr>\n<tr><td>Repère de margeur ou d'équerre</td><td>Indique le côté de taquage de la feuille</td><td>Conducteur, massicotier</td></tr>\n</tbody></table>\n<p>Ces marques sont placées dans les zones qui seront rognées. La barre de contrôle se place perpendiculairement au sens de défilement, dans une zone qui ne sera pas imprimée par le travail, souvent du côté opposé à la pince ou près de la pince selon la presse et le système de mesure.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une imposition qui place la barre de contrôle sous un rabat de pince ou hors de la zone de lecture du spectrophotomètre de la presse rend la mesure automatique impossible. Le gabarit de chaque presse fixe une position précise ; on ne la déplace pas sans accord de l'atelier.</div>"
      },
      {
       "titre": "Vérifier qu'une imposition tient sur la feuille",
       "contenu": "<p>La feuille d'une presse offset n'est pas entièrement imprimable. Une bande, la <strong>prise de pince</strong>, est tenue par les pinces qui entraînent la feuille ; elle mesure souvent 8 à 12 mm selon la machine. La <strong>zone imprimable</strong> maximale est indiquée par le constructeur. La plaque, plus grande que la zone imprimable, comporte elle-même une zone de pliure pour la fixer sur le cylindre.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'une imposition de 8 poses A4 tient sur une feuille 72 × 102 cm. Données : format fini 210 × 297 mm ; fonds perdus 3 mm de chaque côté ; blanc de 6 mm entre poses (deux fonds perdus) ; prise de pince 10 mm sur le grand côté ; marge de queue 8 mm (barre de contrôle) ; zone imprimable de la presse 1 000 × 700 mm. Disposition envisagée : 4 poses sur le côté de 102 cm, en orientant le côté 210 mm le long de ce côté, et 2 poses sur le côté de 72 cm (côté 297 mm). 1. Largeur occupée sur le côté de 102 cm : 4 × 210 + 3 × 6 + 2 × 3 = 840 + 18 + 6 = 864 mm. Comparaison : 864 inférieur à 1 000 mm, il reste 136 mm, soit 68 mm de chaque côté pour les repères. 2. Hauteur occupée sur le côté de 72 cm : 2 × 297 + 1 × 6 + 2 × 3 = 594 + 6 + 6 = 606 mm. 3. Ajouter la pince et la marge de queue : 606 + 10 + 8 = 624 mm, inférieur à 720 mm de feuille et inférieur aux 700 mm imprimables. 4. Conclusion : l'imposition tient avec de la place pour les marques. 5. Vérifier aussi le sens des fibres demandé : si les fibres doivent être parallèles à la hauteur de 297 mm, il faut une feuille à fibres dans le sens 72 cm, ce qui se précise à la commande de papier.</div>"
      },
      {
       "titre": "Le Computer-to-Plate et les plaques offset",
       "contenu": "<p>Le <strong>CtP</strong> (<em>Computer-to-Plate</em>) grave directement la plaque à partir du fichier tramé par le RIP. La plaque offset est une feuille d'aluminium grainée et anodisée, recouverte d'une couche sensible. Deux technologies se partagent le marché :</p>\n<table><thead><tr><th>Technologie</th><th>Source</th><th>Plaques</th><th>Particularités</th></tr></thead><tbody>\n<tr><td>Thermique</td><td>Diodes laser infrarouges (autour de 830 nm)</td><td>Plaques thermiques, manipulables en lumière du jour</td><td>Point très net, grande stabilité, plaques sans développement chimique disponibles</td></tr>\n<tr><td>Violette</td><td>Laser violet (autour de 405 nm)</td><td>Plaques photopolymères ou argentiques, sous éclairage inactinique jaune</td><td>Gravure rapide, coût d'équipement moindre</td></tr>\n</tbody></table>\n<p>Après exposition, la plaque passe en général dans une <strong>développeuse</strong> qui élimine la couche aux endroits non imprimants, puis elle est gommée pour protéger l'aluminium. Les plaques dites <strong>sans développement</strong> (ou <em>process-free</em>) sont développées directement sur la presse par la solution de mouillage et l'encre au démarrage : moins de chimie et d'eau, mais une image moins contrastée et donc plus difficile à contrôler à l'œil.</p>\n<p>Les zones imprimantes d'une plaque offset sont <strong>oléophiles</strong> (elles acceptent l'encre grasse), les zones non imprimantes sont <strong>hydrophiles</strong> (elles retiennent la solution de mouillage) : c'est le principe de l'offset, qui sera développé dans l'option productions imprimées.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en flexographie, la forme est une plaque photopolymère gravée de plus en plus souvent par laser : une couche noire (masque) est ablatée, puis la plaque est insolée aux UV, lavée et séchée. En numérique, il n'y a pas de forme : l'imposition est envoyée directement au RIP de la presse.</div>"
      },
      {
       "titre": "Linéariser et contrôler la plaque",
       "contenu": "<p>Une plaque n'est fiable que si le CtP grave des points conformes aux valeurs du fichier. On le vérifie avec une <strong>gamme de contrôle de plaque</strong> (plages tramées de 1 % à 99 %, lignes fines, damiers) placée dans la marge, et un <strong>lecteur de plaque</strong> qui mesure la surface réelle des points.</p>\n<p>La <strong>linéarisation</strong> du CtP consiste à graver une gamme, à mesurer les valeurs obtenues, puis à appliquer une correction pour que la plaque reproduise exactement les valeurs du fichier (50 % dans le fichier donne 50 % sur la plaque, à une tolérance près). Ensuite seulement, on applique éventuellement une <strong>courbe de presse</strong> qui compense l'engraissement en machine pour atteindre la cible de la condition d'impression. Les deux corrections sont distinctes et ne doivent pas être confondues.</p>\n<p>Avant d'envoyer une plaque en machine, l'opérateur vérifie :</p>\n<ul>\n<li>l'identification : numéro de dossier, couleur, face, cahier ;</li>\n<li>la présence et la position de tous les éléments, notamment par comparaison avec l'épreuve d'imposition ;</li>\n<li>l'absence de rayures, de taches, de manques ou de voile ;</li>\n<li>les valeurs de la gamme de contrôle, au moins sur quelques plages clés ;</li>\n<li>le bon pliage des bords pour la fixation sur le cylindre.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> avant la gravure des plaques, on valide une <strong>épreuve d'imposition</strong> (traceur ou fichier écran) qui montre la disposition, l'ordre et le sens des pages. Elle se vérifie souvent en réalisant une maquette pliée à la main. Une erreur trouvée à ce stade coûte une impression d'épreuve ; trouvée en machine, elle coûte un jeu de plaques et un calage.</div>"
      },
      {
       "titre": "Enchaîner l'imposition et la forme dans le flux",
       "contenu": "<p>Dans un flux automatisé, l'enchaînement est le suivant : pages PDF validées par le BAT, imposition selon le gabarit, épreuve d'imposition, tramage par le RIP, envoi au CtP, calcul des préréglages d'encrage à partir des fichiers tramés, puis transmission au pupitre de la presse.</p>\n<p>Plusieurs paramètres doivent être cohérents entre le RIP et la presse : linéature et type de trame, courbe de presse, ordre de passage des couleurs, nombre de plaques (une par couleur et par face), identification des plaques. Une incohérence (par exemple une courbe destinée au papier couché appliquée à un travail sur papier non couché) produit un résultat faux, même avec des fichiers parfaits.</p>\n<p>Pour les corrections tardives, on refait en général une seule plaque : il faut alors utiliser exactement les mêmes paramètres de RIP et le même lot de plaques que pour les autres couleurs, sinon la nouvelle plaque n'aura pas le même comportement. Chaque sortie est enregistrée dans le suivi du dossier.</p>"
      }
     ],
     "points_cles": [
      "L'imposition est le point de rencontre des options : le prépresse la prépare, l'impression l'exploite",
      "Le gabarit décrit feuille, pince, pliage, recto verso, blancs, marques et barre de contrôle",
      "Marques : traits de coupe, repères de pli, croix de repérage, barre de contrôle, marques de collation",
      "Vérifier l'encombrement : poses, blancs, fonds perdus, pince et marge de queue dans la zone imprimable",
      "CtP thermique (infrarouge, lumière du jour) ou violet (405 nm, éclairage inactinique)",
      "Plaques sans développement : développées sur presse, moins de chimie, image moins contrastée",
      "Linéarisation du CtP puis courbe de presse : deux corrections distinctes",
      "Épreuve d'imposition validée avant toute gravure de plaques"
     ],
     "lexique": [
      {
       "terme": "Gabarit d'imposition",
       "def": "Modèle décrivant la disposition des pages et des marques sur la feuille."
      },
      {
       "terme": "Prise de pince",
       "def": "Bande de la feuille tenue par les pinces de la presse, non imprimable."
      },
      {
       "terme": "Barre de contrôle",
       "def": "Ensemble de plages imprimées dans la marge pour mesurer et piloter l'impression."
      },
      {
       "terme": "Marques de collation",
       "def": "Repères au dos des cahiers formant un escalier pour vérifier l'ordre d'assemblage."
      },
      {
       "terme": "CtP",
       "def": "Computer-to-Plate : gravure directe de la plaque à partir du fichier numérique."
      },
      {
       "terme": "Plaque sans développement",
       "def": "Plaque dont la couche non imprimante est éliminée sur presse, sans développeuse."
      },
      {
       "terme": "Oléophile",
       "def": "Qui accepte les corps gras, donc l'encre offset."
      },
      {
       "terme": "Hydrophile",
       "def": "Qui accepte l'eau, donc la solution de mouillage."
      },
      {
       "terme": "Linéarisation",
       "def": "Correction qui fait reproduire au CtP exactement les valeurs tonales du fichier."
      },
      {
       "terme": "Épreuve d'imposition",
       "def": "Sortie de contrôle montrant la disposition, l'ordre et le sens des pages imposées."
      }
     ]
    },
    {
     "id": "brpip-organisation-production",
     "titre": "Organiser et planifier une production graphique",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Décomposer un travail en opérations et calculer les temps de calage et de production",
      "Calculer une cadence nette en tenant compte du rendement",
      "Construire un planning et repérer le chemin critique d'une commande",
      "Calculer le coût de production d'une opération à partir d'un taux horaire",
      "Proposer une organisation qui respecte le délai et limite la gâche"
     ],
     "sections": [
      {
       "titre": "Décomposer un travail en opérations",
       "contenu": "<p>Organiser une production, c'est d'abord la <strong>décomposer</strong> en opérations élémentaires, affectées chacune à un poste. Pour un dépliant 3 volets imprimé en offset, on obtient par exemple : contrôle des fichiers, épreuve, BAT, imposition, gravure des plaques, impression recto, impression verso, séchage, coupe, pliage, conditionnement, livraison.</p>\n<p>Chaque opération comporte deux phases :</p>\n<ul>\n<li>le <strong>temps de préparation</strong> ou de <strong>calage</strong> : mise en place des outils et des réglages, indépendant de la quantité (montage des plaques, réglages du margeur, obtention du BAR ; programmation du massicot ; réglage des poches de la plieuse) ;</li>\n<li>le <strong>temps de production</strong> (ou de roulage, de tirage) : proportionnel à la quantité.</li>\n</ul>\n<p>On y ajoute les <strong>temps annexes</strong> : lavage des groupes, changement d'encre, attente de séchage, manutention. Le dossier de fabrication indique souvent les temps prévus, tirés des barèmes de l'entreprise ; l'opérateur compare ensuite les temps réels.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> temps total d'une opération = temps de calage + temps de production + temps annexes. Le temps de calage pèse d'autant plus lourd que la quantité est faible : c'est lui qui rend l'offset peu rentable sur un très petit tirage.</div>"
      },
      {
       "titre": "Cadence nominale et cadence nette",
       "contenu": "<p>La <strong>cadence nominale</strong> est la vitesse maximale annoncée par le constructeur, par exemple 15 000 feuilles par heure pour une presse offset. En pratique, on roule moins vite selon le support (papier fin, carton), la qualité demandée et l'état de la machine, et la production est interrompue par des contrôles, des réapprovisionnements, de petits incidents. On utilise donc une <strong>cadence nette</strong> (ou effective) :</p>\n<p><strong>Cadence nette = cadence de roulage choisie × rendement</strong></p>\n<p>Le rendement traduit les arrêts courts et les ralentissements ; il est fixé par l'entreprise à partir de l'expérience, souvent entre 70 et 90 %.</p>\n<p>Il faut aussi calculer le nombre de feuilles à passer en machine : quantité de feuilles utiles plus la <strong>passe</strong> (feuilles supplémentaires prévues pour le calage et pour la gâche de tirage et de façonnage). La passe se calcule en général par un nombre fixe de feuilles de calage plus un pourcentage de la quantité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le temps machine d'une impression. Données : 40 000 dépliants imposés à 8 poses ; impression 4 couleurs recto et 4 couleurs verso sur presse 4 couleurs (deux passages) ; calage 25 min par passage ; passe de calage 150 feuilles par passage et passe de tirage 3 % ; cadence de roulage 12 000 feuilles/h ; rendement 80 %. 1. Feuilles utiles : 40 000 ÷ 8 = 5 000 feuilles. 2. Passe : 150 × 2 = 300 feuilles de calage ; 3 % de 5 000 = 150 feuilles ; total 5 450 feuilles à commander. 3. Cadence nette : 12 000 × 0,80 = 9 600 feuilles/h. 4. Feuilles passées au premier passage : environ 5 450 ; au second passage, les feuilles de calage du premier sont déjà écartées, mais on garde ici, par simplicité, 5 450 feuilles pour chaque passage, ce qui donne une estimation légèrement majorée. Temps de roulage par passage : 5 450 ÷ 9 600 = 0,57 h, soit environ 34 min. 5. Temps total : 2 × (25 + 34) = 118 min, soit environ 2 h. On ajoute le temps de lavage et le temps d'attente de séchage avant le verso si la fiche le prévoit.</div>"
      },
      {
       "titre": "Planifier : antériorités et chemin critique",
       "contenu": "<p>Certaines opérations ne peuvent commencer qu'après la fin d'une autre : ce sont des <strong>antériorités</strong>. Les plaques ne peuvent être gravées qu'après le BAT ; le pliage ne peut commencer qu'après la coupe ; le verso offset ne peut être imprimé qu'après un temps de séchage du recto (sauf presse retiration ou encres UV). D'autres opérations peuvent se dérouler en parallèle : commander le papier pendant que le client relit son épreuve.</p>\n<p>On représente le planning par un <strong>diagramme de Gantt</strong> : chaque opération est une barre horizontale placée sur une échelle de temps, avec une ligne par poste ou par opération. Ce diagramme montre visuellement les chevauchements, les temps morts et la date de fin.</p>\n<p>Le <strong>chemin critique</strong> est la suite d'opérations sans marge : tout retard sur l'une d'elles retarde la livraison. Les autres opérations disposent d'une <strong>marge</strong>, c'est-à-dire d'un délai pendant lequel elles peuvent glisser sans conséquence.</p>\n<table><thead><tr><th>Opération</th><th>Durée</th><th>Antériorité</th></tr></thead><tbody>\n<tr><td>A : contrôle fichiers et épreuve</td><td>2 h</td><td>Aucune</td></tr>\n<tr><td>B : relecture et BAT client</td><td>1 jour</td><td>A</td></tr>\n<tr><td>C : réception du papier</td><td>2 jours</td><td>Aucune (commande passée au départ)</td></tr>\n<tr><td>D : imposition et plaques</td><td>2 h</td><td>B</td></tr>\n<tr><td>E : impression</td><td>4 h</td><td>C et D</td></tr>\n<tr><td>F : façonnage</td><td>3 h</td><td>E et séchage</td></tr>\n</tbody></table>\n<p>Dans cet exemple, la réception du papier (2 jours) est plus longue que A + B + D (environ 1 jour et 4 heures) : c'est elle qui est sur le chemin critique. Pour avancer la livraison, il faudrait accélérer l'approvisionnement ou utiliser un papier en stock, et non presser le client pour son BAT.</p>"
      },
      {
       "titre": "Le taux horaire et le coût d'une opération",
       "contenu": "<p>Le coût d'une opération se calcule à partir du <strong>taux horaire</strong> du poste, ou coût horaire : c'est le coût d'une heure d'utilisation d'une machine avec son personnel. Il comprend l'amortissement de la machine, l'entretien, l'énergie, les locaux, les salaires et charges des opérateurs et une part des frais généraux. Il est calculé par le service de gestion et intégré au logiciel de devis.</p>\n<p>Le coût d'une commande s'obtient en additionnant :</p>\n<ul>\n<li>le coût des <strong>temps</strong> de chaque poste (temps × taux horaire) ;</li>\n<li>le coût des <strong>matières</strong> : papier (y compris la passe), encres, plaques, colles, emballages ;</li>\n<li>le coût des <strong>sous-traitances</strong> éventuelles (dorure, reliure spéciale, transport).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le coût de l'impression de l'exemple précédent. Données : taux horaire de la presse 4 couleurs 180 € de l'heure ; temps machine 2 h ; plaques à 9 € l'unité ; papier 5 450 feuilles 70 × 100 cm en 135 g/m² à 1 250 € la tonne ; encre estimée à 25 €. 1. Coût machine : 2 × 180 = 360 €. 2. Nombre de plaques, déduit de la notation 4/4 : 4 couleurs × 2 faces = 8 plaques ; coût 8 × 9 = 72 €. 3. Masse du papier : surface d'une feuille 0,70 m² ; 5 450 × 0,70 = 3 815 m² ; 3 815 × 135 = 515 025 g, soit 0,515 t ; coût 0,515 × 1 250 = 644 €. 4. Coût total de l'impression : 360 + 72 + 644 + 25 = 1 101 €. 5. Coût pour mille dépliants : 1 101 ÷ 40 = 27,5 € avant façonnage. Déduire le nombre de plaques de la notation des couleurs et du mode de recto verso, plutôt que de le supposer, est un réflexe à acquérir : en basculage, par exemple, un seul jeu de 4 plaques suffit pour imprimer les deux faces.</div>\n<p>Le <strong>prix de vente</strong> ajoute une marge au coût de revient ; il relève du service commercial. L'opérateur, lui, agit sur le coût : un calage plus rapide, une gâche réduite, un papier bien calculé améliorent directement la rentabilité.</p>"
      },
      {
       "titre": "Optimiser l'organisation",
       "contenu": "<p>Plusieurs leviers permettent de produire plus vite et à moindre coût sans dégrader la qualité :</p>\n<ul>\n<li><strong>regrouper</strong> les travaux qui utilisent le même papier ou les mêmes tons directs pour éviter changements et lavages ;</li>\n<li>pratiquer l'<strong>impression groupée</strong> (ou « en ganging ») : plusieurs travaux de clients différents sur une même feuille, à condition qu'ils aient le même papier, les mêmes couleurs et une quantité compatible ;</li>\n<li><strong>préparer le calage pendant le tirage précédent</strong> : plaques prêtes, papier acclimaté et placé près de la machine, encres préparées ; c'est le principe de la méthode <strong>SMED</strong> (changement rapide de série), qui distingue les opérations faisables machine en marche de celles qui exigent l'arrêt ;</li>\n<li>utiliser les <strong>préréglages</strong> transmis par le flux numérique ;</li>\n<li>ordonner les travaux du clair au foncé sur une même couleur pour limiter les lavages.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un indicateur souvent affiché à côté des machines est le <strong>TRS</strong> (taux de rendement synthétique) : il combine la disponibilité de la machine, sa performance par rapport à la cadence nominale et la qualité (part de produits bons). Il permet de voir si les pertes viennent surtout des arrêts, des ralentissements ou de la gâche.</div>\n<p>L'organisation doit enfin intégrer les contraintes humaines et de sécurité : horaires d'équipe, pauses, disponibilité d'un second opérateur pour certaines manutentions, temps de maintenance prévu. Un planning irréaliste qui supprime les temps de nettoyage ou de maintenance finit toujours par provoquer une panne ou un défaut.</p>"
      }
     ],
     "points_cles": [
      "Chaque opération comprend un temps de calage, un temps de production et des temps annexes",
      "Cadence nette = cadence de roulage × rendement",
      "Feuilles à commander = feuilles utiles + passe de calage + passe de tirage et de façonnage",
      "Le diagramme de Gantt représente les opérations, leurs durées et leurs enchaînements",
      "Le chemin critique est la suite d'opérations sans marge qui fixe la date de fin",
      "Coût d'une opération = temps × taux horaire + matières + sous-traitances",
      "Regroupement, impression groupée, SMED et préréglages réduisent temps et gâche",
      "Le TRS combine disponibilité, performance et qualité"
     ],
     "lexique": [
      {
       "terme": "Temps de calage",
       "def": "Temps de préparation et de réglage d'un poste, indépendant de la quantité."
      },
      {
       "terme": "Cadence nette",
       "def": "Production horaire réelle, tenant compte des arrêts et ralentissements."
      },
      {
       "terme": "Passe",
       "def": "Quantité de support supplémentaire prévue pour le calage et la gâche."
      },
      {
       "terme": "Antériorité",
       "def": "Opération qui doit être terminée avant qu'une autre puisse commencer."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Représentation des opérations par des barres sur une échelle de temps."
      },
      {
       "terme": "Chemin critique",
       "def": "Suite d'opérations sans marge déterminant la durée totale."
      },
      {
       "terme": "Taux horaire",
       "def": "Coût d'une heure de fonctionnement d'un poste avec son personnel."
      },
      {
       "terme": "SMED",
       "def": "Méthode de réduction des temps de changement de série."
      },
      {
       "terme": "Impression groupée",
       "def": "Impression de plusieurs travaux compatibles sur une même feuille."
      },
      {
       "terme": "TRS",
       "def": "Taux de rendement synthétique, indicateur d'efficacité d'un équipement."
      }
     ]
    },
    {
     "id": "brpip-maintenance",
     "titre": "Maintenance préventive et corrective des équipements",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Distinguer les formes de maintenance corrective et préventive",
      "Situer les interventions de l'opérateur parmi les niveaux de maintenance",
      "Exploiter une gamme de maintenance et renseigner un historique",
      "Conduire un diagnostic de premier niveau avec méthode",
      "Calculer et interpréter des indicateurs de fiabilité et de disponibilité"
     ],
     "sections": [
      {
       "titre": "Les formes de maintenance",
       "contenu": "<p>La <strong>maintenance</strong> regroupe toutes les actions destinées à maintenir ou rétablir un équipement dans un état qui lui permet d'accomplir sa fonction. On distingue deux grandes familles.</p>\n<table><thead><tr><th>Forme</th><th>Déclenchement</th><th>Exemple en imprimerie</th></tr></thead><tbody>\n<tr><td>Corrective palliative</td><td>Après une panne, remise en état provisoire</td><td>Remplacer une ventouse percée du margeur par une ventouse de dépannage pour finir le tirage</td></tr>\n<tr><td>Corrective curative</td><td>Après une panne, réparation définitive</td><td>Remplacer la pompe à vide défaillante</td></tr>\n<tr><td>Préventive systématique</td><td>Selon un calendrier ou un nombre d'heures ou de cycles</td><td>Graissage hebdomadaire, remplacement des filtres toutes les 500 heures</td></tr>\n<tr><td>Préventive conditionnelle</td><td>Selon l'état mesuré de l'équipement</td><td>Remplacer un blanchet quand son épaisseur ou sa dureté sort des tolérances</td></tr>\n<tr><td>Préventive prévisionnelle</td><td>Selon l'évolution d'une mesure suivie dans le temps</td><td>Remplacer un roulement quand la courbe de vibrations annonce une défaillance proche</td></tr>\n</tbody></table>\n<p>La maintenance préventive coûte du temps de machine arrêtée, mais elle évite les pannes imprévues, qui arrivent toujours au mauvais moment (urgence client, week-end) et provoquent des défauts de qualité avant même l'arrêt.</p>\n<p>Les presses récentes surveillent elles-mêmes de nombreux paramètres (températures, pressions, vibrations, heures de fonctionnement) et peuvent être connectées au service du constructeur, qui propose une <strong>télémaintenance</strong> : diagnostic à distance et alertes avant défaillance.</p>"
      },
      {
       "titre": "Les niveaux de maintenance et le rôle de l'opérateur",
       "contenu": "<p>La documentation normative française (fascicule de documentation FD X60-000) classe les interventions en <strong>cinq niveaux</strong>, selon leur complexité, les compétences et les moyens nécessaires :</p>\n<table><thead><tr><th>Niveau</th><th>Nature des actions</th><th>Intervenant habituel</th></tr></thead><tbody>\n<tr><td>1</td><td>Actions simples, sans démontage ou avec des éléments facilement accessibles : nettoyage, contrôle visuel, niveaux, graissage prévu</td><td>Opérateur</td></tr>\n<tr><td>2</td><td>Actions décrites par des procédures simples, avec un outillage courant : remplacement de pièces d'usure standard, réglages</td><td>Opérateur formé ou technicien</td></tr>\n<tr><td>3</td><td>Diagnostic et réparation de pannes, remplacement de composants fonctionnels</td><td>Technicien de maintenance</td></tr>\n<tr><td>4</td><td>Travaux importants nécessitant des compétences et un outillage spécialisés</td><td>Équipe spécialisée ou constructeur</td></tr>\n<tr><td>5</td><td>Rénovation, reconstruction, modification majeure</td><td>Constructeur ou entreprise spécialisée</td></tr>\n</tbody></table>\n<p>Le titulaire du bac pro assure la maintenance de premier niveau, et parfois du deuxième selon l'entreprise. Il participe au diagnostic en décrivant précisément les symptômes au technicien.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la démarche <strong>TPM</strong> (maintenance productive totale) confie aux opérateurs une part croissante de l'entretien de leur machine : nettoyage-inspection, graissage, resserrage, repérage des anomalies par des étiquettes. L'idée est que celui qui utilise la machine tous les jours est le mieux placé pour remarquer un bruit, une fuite ou une vibration inhabituels.</div>"
      },
      {
       "titre": "La documentation de maintenance",
       "contenu": "<p>La maintenance s'appuie sur plusieurs documents :</p>\n<ul>\n<li>le <strong>dossier technique</strong> de la machine, fourni par le constructeur : notice d'utilisation, schémas, nomenclatures de pièces, plan de graissage, consignes de sécurité ;</li>\n<li>la <strong>gamme de maintenance</strong> (ou fiche d'intervention) : liste ordonnée des opérations préventives, avec la périodicité, le temps prévu, les produits et outils, les consignes de sécurité et une case de validation ;</li>\n<li>le <strong>plan de maintenance</strong>, qui regroupe les gammes de tous les équipements sur l'année ;</li>\n<li>l'<strong>historique</strong> (ou carnet de bord) de la machine : chaque intervention, préventive ou corrective, y est enregistrée avec la date, la durée, la cause et les pièces changées.</li>\n</ul>\n<table><thead><tr><th>Périodicité</th><th>Opération</th><th>Produit ou outil</th><th>Validation</th></tr></thead><tbody>\n<tr><td>Quotidienne</td><td>Nettoyer les rouleaux d'encrage, contrôler le niveau du bac de mouillage</td><td>Solvant de lavage prévu, chiffons</td><td>Paraphe de l'opérateur</td></tr>\n<tr><td>Hebdomadaire</td><td>Graisser les points repérés en jaune selon le plan</td><td>Graisse indiquée par le constructeur</td><td>Paraphe</td></tr>\n<tr><td>Mensuelle</td><td>Contrôler l'épaisseur et l'état des blanchets, nettoyer les filtres de la pompe à vide</td><td>Micromètre, soufflette</td><td>Valeurs relevées</td></tr>\n<tr><td>Selon heures</td><td>Vidanger le circuit de mouillage et changer le filtre</td><td>Filtre de référence indiquée</td><td>Date et compteur</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une intervention non enregistrée n'existe pas pour l'entreprise. L'historique permet de repérer les pannes répétitives, d'adapter les périodicités et de justifier un remplacement de machine.</div>"
      },
      {
       "titre": "Conduire un diagnostic de premier niveau",
       "contenu": "<p>Face à un dysfonctionnement, l'opérateur ne démonte pas au hasard. Il suit une démarche ordonnée qui part du symptôme pour remonter à la cause probable, puis il agit dans les limites de son niveau d'intervention.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> diagnostiquer un « double départ » (deux feuilles entrent ensemble) au margeur d'une presse. 1. Constater et décrire : arrêt sur détection de double feuille, répété toutes les 200 feuilles environ, depuis le changement de palette. 2. Rassembler les informations : papier 80 g/m² non couché, nouvelle palette, atelier sec ce jour-là ; aucune intervention récente sur le margeur. 3. Formuler des hypothèses et les classer de la plus probable et simple à vérifier à la plus complexe : feuilles collées par électricité statique ; mauvais aérage de la pile (soufflage) ; réglage des séparateurs ; ventouses usées ; vide insuffisant. 4. Vérifier une hypothèse à la fois : les feuilles collent entre elles à la main, l'hygrométrie de l'atelier est basse ; on aère la pile et on augmente le soufflage ; le défaut disparaît. 5. Conclure et enregistrer : cause probable, électricité statique due à l'air sec ; action, aération et réglage du soufflage ; proposition, vérifier l'humidification de l'atelier. Si le défaut persiste après les vérifications de premier niveau, on arrête et on transmet au technicien une description écrite précise.</div>\n<p>Les questions « depuis quand ? », « qu'est-ce qui a changé ? », « est-ce régulier ou aléatoire ? » orientent souvent vers la cause plus vite qu'un démontage.</p>"
      },
      {
       "titre": "Intervenir en sécurité",
       "contenu": "<p>Une intervention de maintenance est une situation à risque : protecteurs ouverts, énergies résiduelles, travail dans des zones normalement inaccessibles. Plusieurs règles s'imposent :</p>\n<ul>\n<li>n'intervenir que dans la limite de son niveau et de son habilitation ;</li>\n<li>pour toute intervention dans une zone dangereuse, réaliser la <strong>consignation</strong> de la machine : séparation des sources d'énergie, condamnation en position ouverte par un cadenas personnel, identification, vérification de l'absence d'énergie (y compris l'air comprimé, les ressorts, la gravité) ;</li>\n<li>utiliser exclusivement les modes de marche prévus par le constructeur pour les réglages (marche par à-coups, vitesse réduite, commande maintenue) ;</li>\n<li>remettre en place tous les protecteurs avant de rendre la machine.</li>\n</ul>\n<p>Les interventions sur les équipements électriques exigent une <strong>habilitation électrique</strong> adaptée, délivrée par l'employeur après formation. Un opérateur non habilité ne doit ni ouvrir une armoire électrique ni réarmer un disjoncteur à l'intérieur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le simple arrêt de la machine par l'arrêt d'urgence n'est pas une consignation. Une autre personne peut la redémarrer, et certains organes restent sous énergie. Les accidents graves en imprimerie surviennent souvent lors d'un nettoyage ou d'un débourrage machine mal arrêtée.</div>"
      },
      {
       "titre": "Mesurer l'efficacité de la maintenance",
       "contenu": "<p>Trois indicateurs simples, calculés à partir de l'historique, permettent de suivre la fiabilité d'une machine :</p>\n<ul>\n<li>le <strong>MTBF</strong> (moyenne des temps de bon fonctionnement entre deux défaillances) : temps de fonctionnement ÷ nombre de pannes ;</li>\n<li>le <strong>MTTR</strong> (moyenne des temps de réparation) : temps total d'arrêt pour panne ÷ nombre de pannes ;</li>\n<li>la <strong>disponibilité</strong> : MTBF ÷ (MTBF + MTTR).</li>\n</ul>\n<table><thead><tr><th>Donnée sur un mois</th><th>Valeur</th></tr></thead><tbody>\n<tr><td>Temps de fonctionnement</td><td>300 h</td></tr>\n<tr><td>Nombre de pannes</td><td>6</td></tr>\n<tr><td>Temps total de réparation</td><td>9 h</td></tr>\n</tbody></table>\n<p>Avec ces données : MTBF = 300 ÷ 6 = 50 h ; MTTR = 9 ÷ 6 = 1,5 h ; disponibilité = 50 ÷ (50 + 1,5) ≈ 0,971, soit environ 97 %. Si l'on réduit les pannes à 3 par une meilleure maintenance préventive, avec le même MTTR, le MTBF passe à 100 h et la disponibilité à environ 98,5 %.</p>\n<p>Ces indicateurs servent à choisir où porter l'effort : un MTBF faible appelle davantage de prévention ; un MTTR élevé appelle un meilleur stock de pièces de rechange, une meilleure documentation ou une formation au diagnostic.</p>"
      }
     ],
     "points_cles": [
      "Maintenance corrective (palliative ou curative) après panne ; préventive (systématique, conditionnelle, prévisionnelle) avant",
      "Cinq niveaux de maintenance ; l'opérateur assure le premier, parfois le deuxième",
      "La TPM associe les opérateurs à l'entretien et à la détection des anomalies",
      "Gamme de maintenance : opérations, périodicité, produits, sécurité, validation",
      "Toute intervention est enregistrée dans l'historique de la machine",
      "Diagnostic : décrire, s'informer, hypothèses classées, vérification une à une, conclusion écrite",
      "L'arrêt d'urgence n'est pas une consignation ; habilitation électrique obligatoire pour l'électrique",
      "MTBF, MTTR et disponibilité mesurent la fiabilité et l'efficacité de la maintenance"
     ],
     "lexique": [
      {
       "terme": "Maintenance corrective",
       "def": "Maintenance effectuée après la détection d'une panne."
      },
      {
       "terme": "Maintenance préventive",
       "def": "Maintenance effectuée avant la panne pour réduire sa probabilité."
      },
      {
       "terme": "Maintenance conditionnelle",
       "def": "Maintenance déclenchée par l'état mesuré d'un équipement."
      },
      {
       "terme": "Gamme de maintenance",
       "def": "Document décrivant les opérations préventives, leur ordre et leur périodicité."
      },
      {
       "terme": "Historique",
       "def": "Enregistrement chronologique de toutes les interventions sur un équipement."
      },
      {
       "terme": "TPM",
       "def": "Maintenance productive totale, associant les opérateurs à l'entretien."
      },
      {
       "terme": "Consignation",
       "def": "Ensemble des opérations qui mettent et maintiennent un équipement en sécurité avant intervention."
      },
      {
       "terme": "Habilitation électrique",
       "def": "Reconnaissance par l'employeur de la capacité à intervenir en sécurité vis-à-vis du risque électrique."
      },
      {
       "terme": "MTBF",
       "def": "Moyenne des temps de bon fonctionnement entre défaillances."
      },
      {
       "terme": "MTTR",
       "def": "Moyenne des temps de réparation."
      }
     ]
    },
    {
     "id": "brpip-prevention-environnement",
     "titre": "Prévention des risques et gestion environnementale en entreprise graphique",
     "niveau": "Tle",
     "duree": 35,
     "objectifs": [
      "Appliquer les principes généraux de prévention à une situation d'atelier graphique",
      "Analyser le risque chimique lié aux produits de lavage, de mouillage et aux encres",
      "Interpréter les valeurs d'exposition au bruit et choisir des mesures de protection",
      "Organiser le tri et la traçabilité des déchets d'une imprimerie",
      "Proposer des actions de réduction de l'impact environnemental d'une production"
     ],
     "sections": [
      {
       "titre": "Évaluer les risques et appliquer les principes de prévention",
       "contenu": "<p>L'employeur doit évaluer les risques professionnels et les consigner dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP), mis à jour régulièrement et à chaque changement important (nouvelle machine, nouveau produit). Le Code du travail fixe neuf <strong>principes généraux de prévention</strong>, à appliquer dans l'ordre de priorité :</p>\n<ol>\n<li>éviter les risques ;</li>\n<li>évaluer les risques qui ne peuvent pas être évités ;</li>\n<li>combattre les risques à la source ;</li>\n<li>adapter le travail à l'homme ;</li>\n<li>tenir compte de l'évolution de la technique ;</li>\n<li>remplacer ce qui est dangereux par ce qui l'est moins ;</li>\n<li>planifier la prévention ;</li>\n<li>donner la priorité aux mesures de protection collective sur les mesures de protection individuelle ;</li>\n<li>donner les instructions appropriées aux travailleurs.</li>\n</ol>\n<p>Ce classement signifie qu'on ne commence pas par distribuer des gants ou des bouchons d'oreilles : on cherche d'abord à supprimer ou réduire le danger (produit moins toxique, capotage d'une machine bruyante, système de lavage automatique), puis on protège collectivement, et enfin individuellement.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les principaux risques recensés dans les ateliers graphiques sont les risques mécaniques (happement entre rouleaux, cisaillement au massicot), chimiques (solvants de lavage, additifs de mouillage, encres UV), le bruit, les manutentions de rames et de bobines, les chutes de plain-pied sur sols encrés ou huileux, et le travail sur écran en prépresse.</div>"
      },
      {
       "titre": "Le risque chimique dans l'atelier",
       "contenu": "<p>Les produits utilisés dans une imprimerie sont classés et étiquetés selon le règlement européen <strong>CLP</strong> ; leurs dangers et les mesures de prévention sont détaillés dans la <strong>fiche de données de sécurité</strong> (FDS), à 16 rubriques, que le fournisseur doit transmettre.</p>\n<table><thead><tr><th>Produit</th><th>Dangers fréquents</th><th>Mesures de prévention</th></tr></thead><tbody>\n<tr><td>Solvants de lavage des blanchets et rouleaux</td><td>Inflammabilité, irritation, effets sur le système nerveux par inhalation, dessèchement de la peau</td><td>Produits à point éclair élevé ou à base végétale, laveurs automatiques, ventilation, gants adaptés</td></tr>\n<tr><td>Alcool isopropylique (IPA) dans la solution de mouillage</td><td>Inflammable, vapeurs irritantes, émissions de COV</td><td>Réduction ou suppression grâce à des additifs de substitution et à un mouillage refroidi</td></tr>\n<tr><td>Encres et vernis UV</td><td>Sensibilisation cutanée (allergies) par contact avec le produit non polymérisé</td><td>Gants nitrile, nettoyage immédiat des projections, pas de contact avec la peau</td></tr>\n<tr><td>Développeurs de plaques</td><td>Produits alcalins corrosifs</td><td>Lunettes, gants, manipulation des bidons sur rétention</td></tr>\n<tr><td>Poudre anti-maculante</td><td>Poussières inhalables</td><td>Réglage du dosage, aspiration, nettoyage sans soufflette</td></tr>\n</tbody></table>\n<p>Pour certaines substances, des <strong>valeurs limites d'exposition professionnelle</strong> (VLEP) fixent la concentration maximale dans l'air respiré. Le respect de ces valeurs se vérifie par des mesures réalisées par un organisme accrédité.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les chiffons imbibés de solvant, jetés en vrac dans une poubelle ordinaire, peuvent s'enflammer ou dégager des vapeurs. Ils vont dans un conteneur métallique fermé prévu à cet effet. Ne jamais transvaser un produit dans une bouteille alimentaire, même de façon provisoire.</div>"
      },
      {
       "titre": "Le bruit et les manutentions",
       "contenu": "<p>Le Code du travail fixe trois seuils pour l'exposition au bruit, exprimés en niveau d'exposition quotidienne sur 8 heures et en niveau de crête :</p>\n<table><thead><tr><th>Seuil</th><th>Exposition quotidienne</th><th>Niveau de crête</th><th>Obligations principales</th></tr></thead><tbody>\n<tr><td>Valeur d'exposition inférieure déclenchant l'action</td><td>80 dB(A)</td><td>135 dB(C)</td><td>Information, formation, mise à disposition de protecteurs individuels</td></tr>\n<tr><td>Valeur d'exposition supérieure déclenchant l'action</td><td>85 dB(A)</td><td>137 dB(C)</td><td>Programme de réduction du bruit, signalisation, port obligatoire des protecteurs, surveillance médicale renforcée</td></tr>\n<tr><td>Valeur limite d'exposition</td><td>87 dB(A)</td><td>140 dB(C)</td><td>Ne doit jamais être dépassée, en tenant compte de l'atténuation des protecteurs</td></tr>\n</tbody></table>\n<p>L'échelle des décibels est logarithmique : une augmentation de 3 dB correspond à un doublement de l'énergie sonore. Une heure à 88 dB(A) expose autant que deux heures à 85 dB(A). Les presses et les plieuses en fonctionnement dépassent souvent le premier seuil ; on agit par le capotage, l'éloignement des postes de commande, les cabines insonorisées, et en dernier recours par les protections auditives (bouchons moulés, casques).</p>\n<p>Les <strong>manutentions</strong> de rames, de piles de feuilles, de pots d'encre et de bobines exposent aux troubles musculo-squelettiques. Les mesures de prévention sont les transpalettes électriques, les tables élévatrices, les retourneurs de piles, les palans pour les bobines et les rouleaux, et l'organisation du poste pour limiter les ports de charges.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> évaluer une exposition au bruit avec la règle des 3 dB. Situation : un conducteur passe 4 heures par jour à 88 dB(A) près de la presse et 4 heures à 75 dB(A) en cabine. 1. Ramener la première période à 8 heures : 4 heures, c'est la moitié de 8 heures, donc on retranche 3 dB : 88 - 3 = 85 dB(A) équivalent sur 8 heures. 2. La période en cabine est beaucoup plus faible (13 dB de moins) et ne modifie presque pas le total. 3. Exposition quotidienne d'environ 85 dB(A) : la valeur supérieure déclenchant l'action est atteinte. 4. Conséquences : port obligatoire des protecteurs auditifs, signalisation de la zone, programme de réduction. 5. Action prioritaire : réduire le temps passé près de la presse en déportant les réglages vers le pupitre en cabine.</div>"
      },
      {
       "titre": "Les déchets d'une entreprise graphique",
       "contenu": "<p>Une imprimerie produit des déchets variés, qui ne relèvent pas tous des mêmes filières :</p>\n<table><thead><tr><th>Déchet</th><th>Catégorie</th><th>Filière</th></tr></thead><tbody>\n<tr><td>Rognures, gâche de papier et carton</td><td>Non dangereux</td><td>Collecte séparée, recyclage en papeterie</td></tr>\n<tr><td>Plaques aluminium usagées</td><td>Non dangereux</td><td>Reprise par un récupérateur de métaux</td></tr>\n<tr><td>Restes d'encre, chiffons souillés, solvants usagés</td><td>Dangereux</td><td>Prestataire agréé, bordereau de suivi</td></tr>\n<tr><td>Bains de développement usagés</td><td>Dangereux</td><td>Prestataire agréé, jamais à l'égout</td></tr>\n<tr><td>Emballages vides souillés (bidons, pots)</td><td>Dangereux</td><td>Prestataire agréé</td></tr>\n<tr><td>Cartouches de toner, tubes et lampes</td><td>Filières spécifiques</td><td>Reprise fournisseur ou point de collecte</td></tr>\n</tbody></table>\n<p>Pour les déchets dangereux, l'entreprise doit établir un <strong>bordereau de suivi des déchets</strong> (BSD) qui accompagne le déchet jusqu'à son traitement final ; en France, ce suivi se fait aujourd'hui de façon dématérialisée sur une plateforme nationale. L'entreprise reste responsable de ses déchets jusqu'à leur élimination ou leur valorisation finale.</p>"
      },
      {
       "titre": "Le label Imprim'Vert et la réduction des impacts",
       "contenu": "<p>Le label <strong>Imprim'Vert</strong>, porté par les chambres de métiers et les organisations professionnelles, distingue les imprimeries qui respectent un ensemble de critères environnementaux. Ces critères portent notamment sur :</p>\n<ul>\n<li>la bonne gestion des déchets dangereux, confiés à des filières autorisées ;</li>\n<li>la sécurisation du stockage des liquides dangereux (rétention) ;</li>\n<li>la non-utilisation de produits étiquetés toxiques ;</li>\n<li>la sensibilisation environnementale du personnel et de la clientèle ;</li>\n<li>le suivi des consommations énergétiques.</li>\n</ul>\n<p>Les critères et leur version en vigueur évoluent : on se réfère toujours au cahier des charges à jour publié par l'organisme gestionnaire.</p>\n<p>Au-delà du label, chaque poste peut réduire l'impact d'une production :</p>\n<ul>\n<li>prépresse : épreuvage à l'écran, réduction du nombre d'épreuves papier, optimisation de l'imposition pour limiter la surface de papier ;</li>\n<li>impression : réduction de la gâche de calage, réduction de l'alcool dans le mouillage, plaques sans développement, encres à base végétale, séchage LED-UV ;</li>\n<li>façonnage : récupération des rognures, choix de colles et de pelliculages compatibles avec le recyclage du papier ;</li>\n<li>conception : grammage adapté à l'usage, format qui rentabilise la feuille, limitation des ennoblissements non recyclables.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la première source d'impact environnemental d'un imprimé est le papier. Toute action qui réduit la gâche et la surface de papier consommée a donc un effet environnemental et économique à la fois.</div>"
      },
      {
       "titre": "Émissions dans l'air et réglementation des installations",
       "contenu": "<p>Les <strong>composés organiques volatils</strong> (COV) sont des substances qui s'évaporent facilement : solvants de lavage, alcool du mouillage, solvants des encres liquides de flexographie et d'héliogravure. Ils contribuent à la formation d'ozone dans les basses couches de l'atmosphère et peuvent être nocifs pour la santé.</p>\n<p>Au-delà de certains seuils d'activité ou de consommation de solvants, une imprimerie relève de la réglementation des <strong>installations classées pour la protection de l'environnement</strong> (ICPE) : déclaration, enregistrement ou autorisation selon l'importance de l'activité, avec des prescriptions sur les rejets de COV, le stockage, la prévention des incendies. Les grandes imprimeries d'héliogravure et de flexographie équipent leurs installations de systèmes de récupération ou d'incinération des solvants.</p>\n<p>Dans une imprimerie offset de taille moyenne, les leviers principaux sont la réduction de l'alcool isopropylique dans le mouillage, l'usage de produits de lavage à faible teneur en COV et la limitation des quantités utilisées grâce aux laveurs automatiques. Les seuils précis et les obligations relèvent de textes qui évoluent : le responsable environnement ou la chambre de métiers en assure le suivi.</p>"
      }
     ],
     "points_cles": [
      "Le DUERP recense et évalue les risques ; neuf principes généraux de prévention par ordre de priorité",
      "Protection collective avant protection individuelle",
      "Risque chimique : solvants, alcool de mouillage, encres UV, développeurs ; FDS à 16 rubriques",
      "Bruit : 80, 85 et 87 dB(A) sur 8 heures ; +3 dB = doublement de l'énergie sonore",
      "Chiffons souillés dans un conteneur métallique fermé ; pas de transvasement en bouteille alimentaire",
      "Déchets dangereux confiés à un prestataire agréé avec bordereau de suivi",
      "Imprim'Vert : déchets dangereux, stockage sécurisé, produits non toxiques, sensibilisation, énergie",
      "Les COV se réduisent par la baisse de l'alcool de mouillage et des produits de lavage adaptés"
     ],
     "lexique": [
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels, tenu par l'employeur."
      },
      {
       "terme": "Principes généraux de prévention",
       "def": "Neuf règles du Code du travail qui hiérarchisent les actions de prévention."
      },
      {
       "terme": "CLP",
       "def": "Règlement européen de classification, d'étiquetage et d'emballage des produits chimiques."
      },
      {
       "terme": "VLEP",
       "def": "Valeur limite d'exposition professionnelle à une substance dans l'air."
      },
      {
       "terme": "COV",
       "def": "Composés organiques volatils, substances qui s'évaporent facilement."
      },
      {
       "terme": "dB(A)",
       "def": "Unité de niveau sonore pondéré selon la sensibilité de l'oreille humaine."
      },
      {
       "terme": "BSD",
       "def": "Bordereau de suivi des déchets dangereux jusqu'à leur traitement."
      },
      {
       "terme": "Imprim'Vert",
       "def": "Label environnemental des entreprises d'impression."
      },
      {
       "terme": "ICPE",
       "def": "Installation classée pour la protection de l'environnement, soumise à une réglementation spécifique."
      },
      {
       "terme": "Rétention",
       "def": "Bac ou dispositif qui recueille les fuites éventuelles d'un stockage de liquides."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Option A : productions graphiques",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "brpip-a-traitement-images",
     "titre": "Traitement et retouche des images pour la production",
     "niveau": "1re",
     "options": [
      "a"
     ],
     "duree": 40,
     "objectifs": [
      "Analyser une image à l'aide de son histogramme et des valeurs de lumière et d'ombre",
      "Corriger la tonalité et la chromie avec des réglages non destructifs",
      "Détourer et préparer une image par masques et tracés",
      "Paramétrer une séparation CMJN : génération du noir, GCR et UCR",
      "Appliquer une accentuation adaptée à la sortie"
     ],
     "sections": [
      {
       "titre": "Analyser l'image avant d'agir",
       "contenu": "<p>Une image reçue d'un client ou d'une banque d'images se juge avant toute retouche. L'opérateur prépresse vérifie d'abord ses caractéristiques techniques (dimensions en pixels, résolution effective à la taille d'utilisation, mode colorimétrique, profil incorporé, profondeur), puis sa qualité tonale et chromatique.</p>\n<p>L'<strong>histogramme</strong> représente la répartition des pixels selon leur luminosité, du noir (à gauche) au blanc (à droite). Il permet de diagnostiquer :</p>\n<table><thead><tr><th>Forme de l'histogramme</th><th>Diagnostic</th></tr></thead><tbody>\n<tr><td>Pixels concentrés à gauche, vide à droite</td><td>Image sous-exposée, trop sombre</td></tr>\n<tr><td>Pixels concentrés à droite, vide à gauche</td><td>Image surexposée, trop claire</td></tr>\n<tr><td>Pixels resserrés au centre, vides aux deux extrémités</td><td>Image terne, manque de contraste</td></tr>\n<tr><td>Pic collé au bord gauche ou droit</td><td>Ombres bouchées ou lumières brûlées : détails définitivement perdus</td></tr>\n<tr><td>Histogramme en peigne (barres espacées)</td><td>Image déjà fortement retouchée en 8 bits : risque de paliers dans les dégradés</td></tr>\n</tbody></table>\n<p>On repère ensuite deux points de référence : la <strong>haute lumière</strong> (le blanc le plus clair qui doit encore contenir un détail, par exemple la nappe blanche) et l'<strong>ombre</strong> (le noir le plus profond avec détail). On distingue la haute lumière d'un <strong>reflet spéculaire</strong> (reflet de soleil sur du chrome), qui peut rester blanc pur.</p>\n<p>Enfin, on vérifie la neutralité : un objet réputé gris ou blanc doit présenter des valeurs RVB à peu près égales, ou en CMJN une balance de gris correcte (pour la condition d'impression visée, un gris neutre demande un peu plus de cyan que de magenta et de jaune). Une <strong>dominante</strong> se lit sur ces zones neutres.</p>"
      },
      {
       "titre": "Corriger tonalité et chromie de manière non destructive",
       "contenu": "<p>Les corrections se font de préférence avec des <strong>calques de réglage</strong> : le réglage est enregistré séparément et peut être modifié ou supprimé à tout moment, sans altérer les pixels d'origine. On travaille si possible en 16 bits par couche pour éviter les paliers.</p>\n<ul>\n<li>Les <strong>niveaux</strong> fixent le point noir, le point blanc et le gamma (tons moyens).</li>\n<li>Les <strong>courbes</strong> permettent d'agir finement sur chaque zone de tons et sur chaque couche : une courbe en S augmente le contraste dans les tons moyens.</li>\n<li>La <strong>balance des couleurs</strong> ou la correction sélective agit sur une famille de couleurs (les rouges, les tons chair) sans toucher aux autres.</li>\n<li>Le réglage <strong>teinte-saturation</strong> modifie une couleur globale ou ciblée.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> corriger une photo de produit trop sombre avec une dominante jaune. 1. Dupliquer l'original et travailler sur la copie, en 16 bits si possible. 2. Créer un calque de réglage Courbes. 3. Placer un point de mesure sur la zone qui doit être blanche (étiquette du produit) et un sur la zone la plus sombre avec détail. 4. Régler le point blanc pour que la haute lumière atteigne des valeurs proches de R = V = B = 245, puis le point noir pour l'ombre vers 15 à 20 ; vérifier l'histogramme. 5. Corriger la dominante : sur la courbe du bleu, remonter légèrement les tons moyens jusqu'à ce que la zone neutre ait des valeurs RVB équilibrées. 6. Contrôler en épreuvage écran avec le profil de sortie, puis comparer à l'original pour vérifier que la correction n'a pas dénaturé les couleurs du produit. 7. Nommer les calques et enregistrer au format natif.</div>"
      },
      {
       "titre": "Détourer et masquer",
       "contenu": "<p>Le <strong>détourage</strong> isole un sujet de son fond. Plusieurs techniques existent, à choisir selon le contour :</p>\n<table><thead><tr><th>Technique</th><th>Adaptée à</th><th>Résultat</th></tr></thead><tbody>\n<tr><td>Tracé vectoriel à la plume</td><td>Contours nets (objets manufacturés, flacons)</td><td>Tracé précis, réutilisable comme masque vectoriel ou tracé de détourage</td></tr>\n<tr><td>Sélection automatique ou par plage de couleurs</td><td>Fonds uniformes et contrastés</td><td>Rapide, à affiner</td></tr>\n<tr><td>Masque de fusion peint ou affiné</td><td>Contours complexes (cheveux, fourrure, feuillage)</td><td>Transitions douces et modifiables</td></tr>\n<tr><td>Couche alpha</td><td>Stockage d'une sélection dans le fichier</td><td>Transparence exploitable par la mise en page</td></tr>\n</tbody></table>\n<p>Le <strong>masque de fusion</strong> est la méthode non destructive par excellence : le noir masque, le blanc révèle, les gris rendent partiellement transparent. On peut le corriger à tout moment au pinceau.</p>\n<p>Pour l'impression, un objet détouré est livré soit avec un <strong>tracé de détourage</strong> (contour vectoriel net, idéal pour un flacon), soit avec une transparence (format natif ou TIFF avec couche alpha, pour les contours doux). Dans ce dernier cas, la transparence doit être gérée par le PDF/X-4 ou aplatie correctement en PDF/X-1a.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un détourage réalisé sur une image à fond clair laisse souvent un léger liseré clair autour du sujet. Invisible sur un fond blanc, il apparaît nettement quand l'objet est posé sur un fond foncé. On contrôle toujours un détourage sur un fond de couleur contrastée avant de le valider.</div>"
      },
      {
       "titre": "La séparation CMJN : génération du noir, GCR et UCR",
       "contenu": "<p>Lors de la conversion en CMJN, le moteur de couleur doit décider comment produire les gris et les couleurs sombres : avec beaucoup de cyan, de magenta et de jaune et peu de noir, ou avec davantage de noir. Ce choix s'appelle la <strong>génération du noir</strong> ; il est fixé dans le profil de sortie ou paramétré lors de la création d'un profil.</p>\n<ul>\n<li>L'<strong>UCR</strong> (<em>Under Color Removal</em>, retrait des sous-couleurs) réduit les trois couleurs uniquement dans les zones neutres et sombres, et les remplace par du noir. Il limite le taux d'encrage dans les ombres.</li>\n<li>Le <strong>GCR</strong> (<em>Gray Component Replacement</em>, remplacement de la composante grise) remplace par du noir la composante grise de toutes les couleurs, y compris dans les tons moyens et les couleurs saturées, à un degré réglable (faible, moyen, fort).</li>\n</ul>\n<table><thead><tr><th>Choix</th><th>Avantages</th><th>Inconvénients</th></tr></thead><tbody>\n<tr><td>Peu de noir (génération faible)</td><td>Ombres riches et profondes, bon rendu des tons chair</td><td>Taux d'encrage élevé, gris sensibles aux variations d'encrage</td></tr>\n<tr><td>Beaucoup de noir (GCR fort)</td><td>Gris stables, moins d'encre colorée, séchage facilité</td><td>Ombres parfois moins riches, images plus « dures »</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le taux d'encrage maximal (TAC) est la somme C + M + J + N dans la zone la plus sombre. Dépasser la valeur de la condition d'impression provoque maculage, problèmes de séchage et ombres bouchées. On le contrôle à l'aperçu du taux d'encrage.</div>"
      },
      {
       "titre": "Accentuer et redimensionner pour la sortie",
       "contenu": "<p>Toute image perd un peu de netteté entre la prise de vue, le rééchantillonnage et l'impression. On applique donc une <strong>accentuation</strong> (ou renforcement de netteté), généralement par un filtre de type masque flou (<em>unsharp mask</em>), qui augmente le contraste le long des contours. Ses paramètres sont :</p>\n<ul>\n<li>le <strong>gain</strong> : intensité de l'effet ;</li>\n<li>le <strong>rayon</strong> : largeur de la zone renforcée autour des contours ;</li>\n<li>le <strong>seuil</strong> : différence minimale entre pixels pour que l'effet s'applique, qui protège les zones unies (peau, ciel) du bruit.</li>\n</ul>\n<p>L'accentuation dépend de la sortie : plus forte pour une impression sur papier non couché, qui adoucit l'image, plus faible pour l'écran. On l'applique en dernier, à la taille finale, sur une copie destinée à la sortie, jamais sur l'original. Une accentuation excessive produit des <strong>halos</strong> clairs et sombres autour des contours.</p>\n<p>Le <strong>rééchantillonnage</strong> modifie le nombre de pixels. Réduire une image est sans risque ; l'agrandir crée des pixels par interpolation, sans ajouter de vrais détails. On admet en général un agrandissement modéré, au-delà duquel l'image paraît floue. Les outils récents d'agrandissement assistés par apprentissage automatique améliorent le rendu, mais le résultat doit être vérifié à 100 % d'affichage et validé par le client si l'image est importante.</p>"
      },
      {
       "titre": "Organiser le travail de retouche",
       "contenu": "<p>Un fichier de retouche professionnel reste lisible pour un collègue : calques nommés et regroupés, réglages en calques de réglage, masques plutôt que gommage, original conservé en calque inférieur verrouillé.</p>\n<p>La retouche respecte aussi des règles éthiques et juridiques : on ne modifie pas le sens d'une photo d'information, et une photo publicitaire de personne fortement retouchée pour modifier la silhouette doit, en France, porter une mention « photographie retouchée » lorsqu'elle est utilisée à des fins commerciales. Les droits d'utilisation de l'image (auteur, durée, supports, territoire) se vérifient avant toute utilisation.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans les studios qui traitent de gros volumes (catalogues, vente en ligne), les retouches répétitives sont automatisées par des <strong>scripts</strong> ou des <strong>actions</strong> : conversion, recadrage, détourage assisté, accentuation de sortie. L'opérateur crée l'action sur une image type, la teste, puis la lance par lots, en contrôlant ensuite un échantillon d'images.</div>"
      }
     ],
     "points_cles": [
      "L'histogramme révèle exposition, contraste, ombres bouchées et lumières brûlées",
      "Repérer la haute lumière, l'ombre et les zones neutres avant de corriger",
      "Corriger avec des calques de réglage non destructifs, en 16 bits si possible",
      "Détourage : tracé pour les contours nets, masque de fusion pour les contours complexes",
      "UCR : noir dans les zones neutres sombres ; GCR : noir dans toutes les couleurs, à degré réglable",
      "Le taux d'encrage maximal ne doit pas dépasser la valeur de la condition d'impression",
      "Accentuer en dernier, à la taille finale, selon la sortie : gain, rayon, seuil",
      "L'agrandissement n'ajoute pas de vrais détails ; il se vérifie à 100 %"
     ],
     "lexique": [
      {
       "terme": "Histogramme",
       "def": "Graphique de répartition des pixels selon leur luminosité."
      },
      {
       "terme": "Haute lumière",
       "def": "Zone la plus claire de l'image qui doit conserver un détail."
      },
      {
       "terme": "Dominante",
       "def": "Teinte parasite qui affecte l'ensemble de l'image, visible sur les zones neutres."
      },
      {
       "terme": "Calque de réglage",
       "def": "Calque qui applique une correction sans modifier les pixels d'origine."
      },
      {
       "terme": "Masque de fusion",
       "def": "Masque en niveaux de gris qui règle la visibilité d'un calque, de manière réversible."
      },
      {
       "terme": "Tracé de détourage",
       "def": "Contour vectoriel enregistré dans l'image qui définit la zone visible."
      },
      {
       "terme": "UCR",
       "def": "Retrait des sous-couleurs : remplacement par du noir des trois couleurs dans les zones neutres sombres."
      },
      {
       "terme": "GCR",
       "def": "Remplacement de la composante grise de toutes les couleurs par du noir."
      },
      {
       "terme": "Accentuation",
       "def": "Augmentation du contraste le long des contours pour améliorer la netteté perçue."
      },
      {
       "terme": "Rééchantillonnage",
       "def": "Modification du nombre de pixels d'une image."
      }
     ]
    },
    {
     "id": "brpip-a-mise-en-page-structuree",
     "titre": "Mise en page structurée, automatisation et données variables",
     "niveau": "1re-Tle",
     "options": [
      "a"
     ],
     "duree": 40,
     "objectifs": [
      "Construire un document long à partir de gabarits, de styles et de grilles",
      "Organiser une feuille de styles hiérarchisée et cohérente",
      "Importer et baliser des contenus structurés, notamment au format XML",
      "Préparer un publipostage ou une impression à données variables",
      "Contrôler un document assemblé avant export"
     ],
     "sections": [
      {
       "titre": "Le document structuré : gabarits et grilles",
       "contenu": "<p>Un catalogue de 120 pages, un rapport annuel ou un magazine ne se mettent pas en page objet par objet. On construit d'abord une <strong>structure</strong> qui garantira la cohérence et accélérera la production.</p>\n<p>La <strong>grille de mise en page</strong> divise la page en colonnes, gouttières et rangs. Elle fixe les marges (petit fond côté reliure, grand fond côté extérieur, tête et pied), le nombre de colonnes et l'espace entre elles. Une <strong>grille de ligne de base</strong> (lignes horizontales régulières, espacées de la valeur de l'interlignage du texte courant) permet d'aligner le texte d'une colonne à l'autre et d'une page à l'autre ; elle évite que les lignes de deux colonnes voisines soient décalées et que le texte transparaisse de façon désordonnée au verso sur papier fin.</p>\n<p>Les <strong>gabarits</strong> (ou pages types) contiennent les éléments répétés sur plusieurs pages : folio (numéro de page automatique), titre courant, filets, blocs vides prévus pour le texte et les images. Un document en compte souvent plusieurs : ouverture de chapitre, page courante, page de tableau. Un gabarit peut être fondé sur un autre, ce qui permet de modifier un élément commun en une seule fois.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une modification faite sur un gabarit se propage à toutes les pages qui l'utilisent. Une modification faite localement sur une page la détache du gabarit pour cet élément. On évite donc les modifications locales sur les éléments répétitifs.</div>"
      },
      {
       "titre": "Les feuilles de styles",
       "contenu": "<p>Un <strong>style</strong> est un ensemble d'attributs enregistrés sous un nom. Les logiciels de mise en page distinguent :</p>\n<table><thead><tr><th>Type de style</th><th>S'applique à</th><th>Attributs</th></tr></thead><tbody>\n<tr><td>Style de paragraphe</td><td>Un paragraphe entier</td><td>Police, corps, interlignage, alignement, retraits, espaces avant et après, césure, lettrines, filets, puces</td></tr>\n<tr><td>Style de caractère</td><td>Une sélection à l'intérieur d'un paragraphe</td><td>Graisse, italique, couleur, petites capitales</td></tr>\n<tr><td>Style d'objet</td><td>Un bloc</td><td>Fond, contour, habillage, marges intérieures, style de paragraphe par défaut</td></tr>\n<tr><td>Style de tableau et de cellule</td><td>Un tableau, une cellule</td><td>Bordures, fonds alternés, alignements</td></tr>\n</tbody></table>\n<p>Une feuille de styles bien construite est <strong>hiérarchisée</strong> : un style de base (texte courant) sert de parent aux autres ; le style « intertitre » est fondé sur lui et n'en modifie que quelques attributs. Changer la police du style de base change alors tout le document. Les <strong>styles imbriqués</strong> appliquent automatiquement un style de caractère au début d'un paragraphe (par exemple le premier mot en gras jusqu'au deux-points).</p>\n<p>Les styles servent aussi à générer automatiquement la <strong>table des matières</strong>, les <strong>titres courants</strong> variables et l'<strong>export structuré</strong> vers d'autres supports (EPUB, HTML), où chaque style de paragraphe peut être associé à une balise.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> construire la feuille de styles d'un catalogue. 1. Analyser la maquette validée et lister tous les niveaux de texte : titre de rubrique, nom de produit, référence, description, prix, mentions légales. 2. Créer d'abord le style de base (texte courant) avec la police, le corps, l'interlignage aligné sur la grille de ligne de base et la langue pour la césure. 3. Créer chaque autre style « basé sur » le style de base ou sur un style voisin, en ne modifiant que ce qui change. 4. Créer les styles de caractère (prix en gras, référence en petites capitales) et les imbriquer dans les styles de paragraphe si la règle est systématique. 5. Nommer clairement et grouper les styles par familles. 6. Tester sur une double page complète, puis verrouiller la feuille de styles avant de lancer la composition de tout le document.</div>"
      },
      {
       "titre": "Importer des contenus structurés",
       "contenu": "<p>Les textes arrivent souvent depuis un traitement de texte, un tableur ou une base de données. Pour éviter les retouches à la main, on structure l'import.</p>\n<ul>\n<li>Depuis un traitement de texte, on associe les styles du fichier source aux styles de la mise en page (table de correspondance des styles) et on supprime la mise en forme locale non désirée.</li>\n<li>Les fonctions de <strong>recherche et remplacement</strong>, notamment avec des expressions régulières, corrigent en série la typographie : espace insécable avant les ponctuations doubles en français, guillemets, doubles espaces, tirets.</li>\n<li>Pour un catalogue alimenté par une base de produits, on utilise un export <strong>XML</strong>.</li>\n</ul>\n<p>Le <strong>XML</strong> (<em>eXtensible Markup Language</em>) est un format texte qui structure l'information par des <strong>balises</strong> nommées librement, imbriquées les unes dans les autres. Par exemple, une fiche produit contient une balise produit, qui contient elle-même des balises nom, reference, description et prix. Le logiciel de mise en page associe chaque balise à un style et peut placer automatiquement les données dans des blocs balisés. Une mise à jour des prix dans la base se répercute alors par simple réimportation, sans ressaisie.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans les flux de catalogues, la mise en page automatique depuis une base de données (souvent appelée publication de bases de données, ou database publishing) réduit les délais et les fautes de saisie. Le rôle de l'opérateur se déplace vers la conception des gabarits et des règles, et vers le contrôle des cas particuliers : texte trop long, image manquante, produit sans prix.</div>"
      },
      {
       "titre": "Le publipostage et l'impression à données variables",
       "contenu": "<p>L'<strong>impression à données variables</strong> (VDP, <em>Variable Data Printing</em>) produit des exemplaires tous différents : nom et adresse, texte personnalisé, image ou offre choisie selon le profil du destinataire, code-barres ou QR code unique, numérotation. Elle n'est possible qu'en impression numérique.</p>\n<p>Le principe est la <strong>fusion</strong> d'une maquette et d'un fichier de données :</p>\n<ol>\n<li>le fichier de données est un tableau (souvent au format CSV) : une ligne par destinataire, une colonne par champ ;</li>\n<li>la maquette contient des <strong>champs de fusion</strong> à la place des contenus variables, et des règles (si le champ « civilité » est vide, ne rien afficher ; si le client est dans telle région, afficher telle image) ;</li>\n<li>le logiciel génère un fichier par exemplaire ou, de préférence, un fichier optimisé où les éléments fixes ne sont décrits qu'une fois et réutilisés par le RIP ; le format normalisé <strong>PDF/VT</strong> est conçu pour cet usage.</li>\n</ol>\n<table><thead><tr><th>Contrôle</th><th>Pourquoi</th></tr></thead><tbody>\n<tr><td>Codage des caractères du fichier (UTF-8)</td><td>Éviter les lettres accentuées remplacées par des symboles</td></tr>\n<tr><td>Longueur maximale de chaque champ</td><td>Un nom très long ne doit pas déborder ni être coupé</td></tr>\n<tr><td>Champs vides et doublons</td><td>Éviter les lignes vides dans une adresse et les envois en double</td></tr>\n<tr><td>Ordre de tri</td><td>Respecter le tri postal ou l'ordre demandé pour le routage</td></tr>\n<tr><td>Nombre d'enregistrements</td><td>Comparer au nombre d'exemplaires commandés</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un fichier de données personnelles relève du RGPD. Il est utilisé uniquement pour la commande, stocké de façon sécurisée et supprimé selon les instructions du client. L'épreuve envoyée au client ne présente que quelques enregistrements représentatifs, dont les cas limites (nom le plus long, champ vide).</div>"
      },
      {
       "titre": "Contrôler et assembler le document",
       "contenu": "<p>Avant l'export, un document structuré se vérifie méthodiquement :</p>\n<ul>\n<li><strong>contrôle en amont interne</strong> du logiciel actif en continu, avec un profil adapté au travail : textes en excès (débordement de bloc), liens d'images manquants ou modifiés, polices manquantes, résolution, couleurs ;</li>\n<li>contrôle typographique : veuves et orphelines, césures successives, lignes creuses, approches ;</li>\n<li>contrôle de cohérence : folios, titres courants, renvois, table des matières à jour ;</li>\n<li>contrôle des nuances : uniquement les couleurs prévues au devis, tons directs correctement nommés, pas de nuance RVB isolée ;</li>\n<li>contrôle de la pagination : nombre total de pages compatible avec la reliure (multiple de 4 en piqûre à cheval, cahiers complets pour une reliure cousue).</li>\n</ul>\n<p>La fonction d'<strong>assemblage</strong> rassemble dans un dossier la mise en page, les images liées et les polices (dans le respect des licences), ainsi qu'un rapport. C'est ce dossier qui est archivé ou transmis à un autre studio. L'export PDF se fait ensuite avec un <strong>paramètre prédéfini</strong> correspondant à la norme PDF/X demandée, jamais avec des réglages improvisés.</p>"
      }
     ],
     "points_cles": [
      "Grille de colonnes et grille de ligne de base garantissent alignement et cohérence",
      "Les gabarits portent les éléments répétés ; éviter les modifications locales",
      "Feuille de styles hiérarchisée : un style de base parent, des styles enfants qui ne changent que l'essentiel",
      "Styles de paragraphe, de caractère, d'objet, de tableau ; styles imbriqués pour les règles systématiques",
      "Le XML structure les données par balises associées aux styles de mise en page",
      "Données variables : fusion d'une maquette et d'un fichier CSV, format PDF/VT",
      "Contrôler codage, longueur des champs, champs vides, doublons, tri et nombre d'enregistrements",
      "Avant export : contrôle en amont, typographie, cohérence, nuances, pagination, assemblage"
     ],
     "lexique": [
      {
       "terme": "Grille de ligne de base",
       "def": "Lignes horizontales régulières sur lesquelles s'aligne le texte."
      },
      {
       "terme": "Gabarit",
       "def": "Page type portant les éléments communs à plusieurs pages."
      },
      {
       "terme": "Style de paragraphe",
       "def": "Ensemble nommé d'attributs appliqué à un paragraphe entier."
      },
      {
       "terme": "Style imbriqué",
       "def": "Style de caractère appliqué automatiquement à une partie d'un paragraphe selon une règle."
      },
      {
       "terme": "XML",
       "def": "Langage de balisage qui structure des données par des balises imbriquées."
      },
      {
       "terme": "CSV",
       "def": "Format de tableau en texte où les champs sont séparés par un caractère défini."
      },
      {
       "terme": "Champ de fusion",
       "def": "Emplacement de la maquette remplacé par une donnée variable lors de la fusion."
      },
      {
       "terme": "PDF/VT",
       "def": "Norme PDF destinée à l'impression de données variables et transactionnelles."
      },
      {
       "terme": "Veuve",
       "def": "Dernière ligne d'un paragraphe isolée en haut de colonne ou de page."
      },
      {
       "terme": "Assemblage",
       "def": "Regroupement d'un document, de ses images et de ses polices dans un même dossier."
      }
     ]
    },
    {
     "id": "brpip-a-vectoriel-recouvrement",
     "titre": "Dessin vectoriel, recouvrement et préparation des fichiers d'emballage",
     "niveau": "1re",
     "options": [
      "a"
     ],
     "duree": 40,
     "objectifs": [
      "Construire et modifier des tracés vectoriels à partir de courbes de Bézier",
      "Préparer un logo ou un pictogramme vectoriel pour toutes les sorties",
      "Expliquer le défaut de repérage et le principe du recouvrement",
      "Paramétrer un recouvrement adapté au procédé et au support",
      "Préparer un fichier d'étiquette ou d'étui : plan de découpe, couches techniques, couleurs"
     ],
     "sections": [
      {
       "titre": "Le tracé vectoriel et les courbes de Bézier",
       "contenu": "<p>Une illustration vectorielle est décrite par des <strong>tracés</strong> mathématiques, et non par des pixels : elle s'agrandit sans perte de netteté et ne dépend pas d'une résolution. Elle convient aux logos, pictogrammes, typographies, plans, schémas et à tous les éléments techniques (découpe, vernis, dorure).</p>\n<p>Un tracé est composé de <strong>points d'ancrage</strong> reliés par des <strong>segments</strong>. Les segments courbes sont définis par des <strong>courbes de Bézier</strong> : chaque point d'ancrage possède des <strong>poignées</strong> (ou tangentes) dont la direction et la longueur règlent la forme de la courbe.</p>\n<ul>\n<li>Un <strong>point d'inflexion lisse</strong> a deux poignées alignées : la courbe passe sans cassure.</li>\n<li>Un <strong>point d'angle</strong> a des poignées indépendantes ou absentes : la courbe change brutalement de direction.</li>\n<li>Un tracé <strong>fermé</strong> peut recevoir un fond ; un tracé <strong>ouvert</strong> se limite en principe à un contour.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vectoriser proprement un logo à partir d'une image numérisée. 1. Placer l'image en calque de modèle verrouillé, à opacité réduite. 2. Repérer les points remarquables : angles, et points extrêmes des courbes (le haut, le bas, la gauche et la droite d'un arrondi). 3. Poser les points d'ancrage uniquement à ces endroits, en tirant les poignées horizontalement ou verticalement aux points extrêmes : on obtient des courbes régulières avec peu de points. 4. Fermer les tracés et appliquer les fonds en couleurs définies (nuancier nommé en CMJN ou en ton direct). 5. Vérifier en mode tracé (sans fond) la propreté : pas de points superflus, pas de tracés superposés ou isolés. 6. Comparer au modèle à fort grossissement, puis supprimer le calque de modèle.</div>\n<p>Les opérations booléennes (union, soustraction, intersection, exclusion) combinent des formes simples pour construire des formes complexes, plus rapidement et plus proprement qu'en dessinant point par point.</p>"
      },
      {
       "titre": "Préparer un fichier vectoriel pour toutes les sorties",
       "contenu": "<p>Un logo ou un pictogramme livré à l'impression doit respecter plusieurs règles :</p>\n<ul>\n<li>les textes sont <strong>vectorisés</strong> (convertis en tracés) ou la police est fournie, pour éviter toute substitution ; on conserve une version non vectorisée pour les corrections ;</li>\n<li>les <strong>contours</strong> sont convertis en surfaces lorsque leur épaisseur doit rester proportionnelle en cas de mise à l'échelle ; sinon, un contour de 0,5 pt reste à 0,5 pt alors que le logo est réduit de moitié ;</li>\n<li>les couleurs sont définies dans un <strong>nuancier</strong> nommé, en CMJN ou en ton direct, sans mélange de nuances RVB oubliées ;</li>\n<li>les objets invisibles, masques inutiles et calques vides sont supprimés ;</li>\n<li>les dégradés et effets de transparence sont limités ou contrôlés pour la sortie prévue ;</li>\n<li>les filets respectent l'épaisseur minimale imprimable du procédé.</li>\n</ul>\n<p>Un même logo est souvent décliné en plusieurs versions : quadrichromie, ton direct, monochrome noir, version en défonce blanche sur fond foncé, et version RVB ou SVG pour le web. Une <strong>charte graphique</strong> précise ces versions, leurs couleurs exactes, la zone de protection autour du logo et la taille minimale.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les formats d'échange vectoriels pour l'impression sont le PDF et l'EPS (plus ancien) ; le SVG est le format vectoriel du web. Un logo fourni en JPEG n'est pas un fichier vectoriel, même s'il a été créé à l'origine dans un logiciel de dessin.</div>"
      },
      {
       "titre": "Le défaut de repérage et le recouvrement",
       "contenu": "<p>Sur une presse, les couleurs sont imprimées successivement. Malgré la précision des machines, de petits décalages se produisent : variation dimensionnelle du papier, tolérance mécanique, étirement d'un film en bobine. C'est le <strong>défaut de repérage</strong>. Lorsqu'un objet est en défonce sur un fond d'une autre couleur, un décalage laisse apparaître un <strong>liseré blanc</strong> (le papier nu) ou une ligne d'une troisième couleur à la jonction.</p>\n<p>Le <strong>recouvrement</strong> (ou <em>trapping</em>) consiste à faire chevaucher légèrement les couleurs à leur jonction, de quelques centièmes à quelques dixièmes de millimètre, pour que le décalage reste invisible. Deux opérations existent :</p>\n<ul>\n<li>le <strong>grossi</strong> (ou dilatation, <em>spread</em>) : l'objet clair est agrandi sous le fond foncé ;</li>\n<li>le <strong>maigri</strong> (ou contraction, <em>choke</em>) : le fond clair déborde dans l'objet foncé.</li>\n</ul>\n<p>La règle est de toujours étendre la couleur la plus claire sous la couleur la plus foncée : la zone de chevauchement, un peu plus sombre, se confond avec le contour de l'objet foncé et reste invisible.</p>\n<table><thead><tr><th>Procédé ou support</th><th>Ordre de grandeur du recouvrement</th></tr></thead><tbody>\n<tr><td>Offset feuille, papier couché</td><td>Environ 0,05 à 0,1 mm</td></tr>\n<tr><td>Offset sur papier non couché ou rotative</td><td>Environ 0,1 à 0,15 mm</td></tr>\n<tr><td>Flexographie sur film ou carton ondulé</td><td>Souvent 0,15 à 0,3 mm ou davantage</td></tr>\n</tbody></table>\n<p>Ces valeurs sont indicatives ; l'imprimeur fournit les siennes. Le noir en surimpression et les couleurs qui partagent une forte composante commune (par exemple un rouge 0-100-100-0 sur un orange 0-60-100-0, qui ont le même jaune) ont moins besoin de recouvrement.</p>"
      },
      {
       "titre": "Qui fait le recouvrement, et comment",
       "contenu": "<p>Le recouvrement peut être réalisé à trois niveaux :</p>\n<ol>\n<li><strong>manuellement</strong> dans le logiciel de dessin, en ajoutant un contour en surimpression de la couleur claire autour de l'objet : précis mais long, et à refaire si l'imprimeur change ;</li>\n<li><strong>automatiquement dans le workflow</strong> prépresse ou au RIP, selon des réglages par procédé : c'est la méthode la plus courante pour l'offset ;</li>\n<li>dans un <strong>logiciel spécialisé d'emballage</strong>, qui applique des règles fines objet par objet, nécessaires en flexographie.</li>\n</ol>\n<p>Le PDF/X indique si le fichier a déjà été recouvert ou non ; il ne faut pas appliquer deux recouvrements successifs, qui créeraient un débord visible.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un recouvrement appliqué aux petits textes clairs en défonce sur fond foncé peut les « boucher » : la couleur claire grossit et les contre-formes des lettres se remplissent. Les réglages de recouvrement prévoient des exceptions pour les petits corps et les filets fins, qui se traitent plutôt par le choix de couleurs proches ou par un corps plus grand.</div>"
      },
      {
       "titre": "Préparer une étiquette ou un étui",
       "contenu": "<p>Les fichiers d'emballage combinent plusieurs contraintes : découpe, rainage, collage, couleurs de marque, mentions réglementaires et codes. Un fichier type comprend des <strong>calques</strong> séparés et nommés :</p>\n<table><thead><tr><th>Calque</th><th>Contenu</th><th>Réglage</th></tr></thead><tbody>\n<tr><td>Découpe</td><td>Plan fourni par le fabricant de la forme, à l'échelle 1</td><td>Ton direct nommé, surimpression, non imprimé</td></tr>\n<tr><td>Blanc</td><td>Zones de blanc couvrant sous les couleurs (support transparent ou métallisé)</td><td>Ton direct nommé, généralement en surimpression ; légèrement réduit par rapport aux couleurs</td></tr>\n<tr><td>Vernis ou réserve</td><td>Zones vernies ou zones de collage sans encre</td><td>Ton direct nommé</td></tr>\n<tr><td>Graphisme</td><td>Images, textes, logos</td><td>CMJN et tons directs prévus</td></tr>\n<tr><td>Textes et codes</td><td>Mentions légales, code-barres</td><td>Souvent sur un calque séparé pour les déclinaisons de langues</td></tr>\n</tbody></table>\n<p>Le <strong>code-barres</strong> (EAN-13 pour les produits de grande consommation) se génère en vectoriel par un outil dédié, sans être déformé. Il respecte une taille nominale et des tolérances de grandissement, une zone de silence de part et d'autre, un bon contraste (barres foncées, idéalement en noir ou en couleur foncée, sur fond clair) et une orientation compatible avec le sens d'impression en flexographie (barres dans le sens de défilement pour limiter les effets de l'engraissement sur leur épaisseur).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en flexographie, le prépresse applique aussi une <strong>distorsion</strong> au fichier : la plaque souple montée sur un cylindre s'allonge dans le sens de la circonférence. Le logiciel réduit l'image dans ce sens d'un pourcentage calculé selon l'épaisseur de la plaque et le diamètre du cylindre, pour que l'imprimé ait les bonnes dimensions.</div>"
      },
      {
       "titre": "Dégradés, motifs et effets : précautions de sortie",
       "contenu": "<p>Certains éléments vectoriels posent des difficultés particulières à l'impression :</p>\n<ul>\n<li>les <strong>dégradés</strong> longs et peu contrastés peuvent présenter des paliers visibles : on vérifie le nombre de niveaux disponible à la linéature prévue et on évite de faire partir un dégradé de 0 %, car les très petits points ne s'impriment pas de façon régulière ; on préfère commencer à 2 ou 3 % ;</li>\n<li>les <strong>dégradés vers un ton direct</strong> doivent être construits avec la nuance de ton direct elle-même, et non avec un mélange CMJN, sinon la séparation produit des couches inattendues ;</li>\n<li>les <strong>motifs</strong> répétés très fins (hachures, trames décoratives) risquent de créer un moiré avec la trame d'impression ;</li>\n<li>les <strong>effets</strong> (ombres portées, flous, lueurs) sont pixellisés à l'export selon une résolution définie dans le logiciel : une résolution d'effets trop basse donne des ombres crénelées.</li>\n</ul>\n<p>Le contrôle final se fait toujours sur le PDF exporté, avec l'aperçu des séparations, et non dans le fichier de travail, car c'est le PDF qui sera réellement traité par le RIP.</p>"
      }
     ],
     "points_cles": [
      "Les tracés vectoriels sont faits de points d'ancrage, segments et poignées de Bézier",
      "Placer les points aux angles et aux extrêmes des courbes, avec le moins de points possible",
      "Textes vectorisés ou police fournie ; couleurs définies dans un nuancier nommé",
      "Le défaut de repérage crée des liserés blancs aux jonctions de couleurs en défonce",
      "Recouvrement : étendre la couleur claire sous la couleur foncée (grossi ou maigri)",
      "Valeurs plus fortes en flexographie qu'en offset ; ne jamais recouvrir deux fois",
      "Fichier d'emballage : calques découpe, blanc, vernis, graphisme, textes en tons directs nommés",
      "Code-barres vectoriel, taille et zone de silence respectées, bon contraste"
     ],
     "lexique": [
      {
       "terme": "Courbe de Bézier",
       "def": "Courbe mathématique définie par des points d'ancrage et des poignées de direction."
      },
      {
       "terme": "Point d'ancrage",
       "def": "Point d'un tracé vectoriel par lequel passe la courbe."
      },
      {
       "terme": "Vectorisation du texte",
       "def": "Conversion des caractères en tracés, indépendants de la police."
      },
      {
       "terme": "Défaut de repérage",
       "def": "Décalage entre les couleurs imprimées successivement."
      },
      {
       "terme": "Recouvrement",
       "def": "Léger chevauchement des couleurs à leur jonction pour masquer les défauts de repérage."
      },
      {
       "terme": "Grossi",
       "def": "Recouvrement par agrandissement de l'objet clair sous le fond foncé."
      },
      {
       "terme": "Maigri",
       "def": "Recouvrement par extension du fond clair dans l'objet foncé."
      },
      {
       "terme": "Blanc couvrant",
       "def": "Encre blanche opaque imprimée sous les couleurs sur support transparent ou métallisé."
      },
      {
       "terme": "Zone de silence",
       "def": "Espace clair obligatoire de part et d'autre d'un code-barres."
      },
      {
       "terme": "Distorsion",
       "def": "Réduction de l'image dans le sens de la circonférence pour compenser l'allongement d'une plaque souple."
      }
     ]
    },
    {
     "id": "brpip-a-declinaison-plurimedia",
     "titre": "Décliner un projet pour l'écran : web, publication numérique et accessibilité",
     "niveau": "Tle",
     "options": [
      "a"
     ],
     "duree": 40,
     "objectifs": [
      "Identifier les différences techniques entre un support imprimé et un support écran",
      "Préparer les images et les couleurs pour une diffusion à l'écran",
      "Expliquer la structure d'une page web en HTML et sa mise en forme en CSS",
      "Distinguer EPUB redistribuable et EPUB à mise en page fixe, et préparer un export",
      "Appliquer les principes d'accessibilité d'une publication numérique"
     ],
     "sections": [
      {
       "titre": "De l'imprimé à l'écran : ce qui change",
       "contenu": "<p>Le titulaire de l'option productions graphiques ne prépare pas seulement des fichiers pour l'impression : il décline un même projet de communication sur plusieurs supports. Passer du papier à l'écran modifie presque tous les paramètres techniques :</p>\n<table><thead><tr><th>Paramètre</th><th>Imprimé</th><th>Écran</th></tr></thead><tbody>\n<tr><td>Couleur</td><td>CMJN, synthèse soustractive, profil de la condition d'impression</td><td>RVB, synthèse additive, généralement sRGB</td></tr>\n<tr><td>Unité de dimension</td><td>Millimètre, point typographique</td><td>Pixel CSS, unités relatives (em, rem, pourcentage, largeur de fenêtre)</td></tr>\n<tr><td>Format</td><td>Fixe, défini au devis</td><td>Variable selon l'appareil : téléphone, tablette, ordinateur</td></tr>\n<tr><td>Typographie</td><td>Polices incorporées dans le PDF</td><td>Polices web chargées par le navigateur, sous licence web, ou polices du système</td></tr>\n<tr><td>Poids des fichiers</td><td>Secondaire, la qualité prime</td><td>Essentiel : temps de chargement, consommation de données</td></tr>\n<tr><td>Interactivité</td><td>Aucune</td><td>Liens, boutons, vidéos, animations</td></tr>\n</tbody></table>\n<p>Le principe central de l'écran est l'<strong>adaptabilité</strong> (<em>responsive design</em>) : la mise en page se réorganise selon la largeur disponible. Une maquette conçue pour une double page de magazine ne se transpose donc pas telle quelle : on définit des <strong>points de rupture</strong> (largeurs à partir desquelles la disposition change) et on hiérarchise les contenus pour l'affichage sur téléphone.</p>"
      },
      {
       "titre": "Préparer images et couleurs pour l'écran",
       "contenu": "<p>Pour le web et les publications numériques, les images sont converties dans l'espace <strong>sRGB</strong>, qui correspond au comportement moyen des écrans et reste l'espace par défaut des navigateurs. Une image en CMJN ou en Adobe RGB affichée sans gestion de la couleur paraît terne ou faussée.</p>\n<table><thead><tr><th>Format</th><th>Type</th><th>Usage recommandé</th></tr></thead><tbody>\n<tr><td>JPEG</td><td>Matriciel, compression avec perte</td><td>Photographies</td></tr>\n<tr><td>PNG</td><td>Matriciel, sans perte, transparence</td><td>Captures, illustrations à aplats, images détourées</td></tr>\n<tr><td>WebP, AVIF</td><td>Matriciels récents, avec ou sans perte, transparence</td><td>Photos et illustrations plus légères, si la plateforme les prend en charge</td></tr>\n<tr><td>SVG</td><td>Vectoriel, texte XML</td><td>Logos, pictogrammes, icônes</td></tr>\n<tr><td>GIF</td><td>Matriciel, 256 couleurs, animation</td><td>Petites animations simples, de plus en plus remplacées par la vidéo</td></tr>\n</tbody></table>\n<p>À l'écran, la notion de résolution en ppp n'a pas de sens : seule compte la taille en pixels. Comme les écrans à haute densité affichent plusieurs pixels physiques par pixel CSS, on prépare souvent plusieurs versions d'une même image (taille normale et double) que le navigateur choisit selon l'appareil.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer la photo principale d'une page web à partir de l'image d'impression. 1. Partir de l'image retouchée originale (pas du fichier CMJN). 2. Convertir en sRGB avec une intention perceptive ou colorimétrique relative. 3. Recadrer selon le ratio prévu par la maquette, par exemple 16:9. 4. Redimensionner à la largeur d'affichage maximale prévue, par exemple 1 600 pixels, et produire une version de 800 pixels pour les petits écrans. 5. Accentuer légèrement pour l'écran. 6. Exporter en JPEG ou WebP en réglant la qualité pour viser un poids raisonnable (souvent quelques centaines de kilo-octets au plus pour une grande image), en vérifiant visuellement l'absence de défauts de compression. 7. Nommer en minuscules, sans espace ni accent, avec des mots descriptifs, et prévoir le texte alternatif.</div>"
      },
      {
       "titre": "HTML et CSS : le fond et la forme",
       "contenu": "<p>Une page web sépare deux couches :</p>\n<ul>\n<li>le <strong>HTML</strong> (<em>HyperText Markup Language</em>) décrit la <strong>structure</strong> et le contenu : titres hiérarchisés (niveaux 1 à 6), paragraphes, listes, images avec leur texte alternatif, liens, tableaux, zones de navigation et d'en-tête ;</li>\n<li>le <strong>CSS</strong> (<em>Cascading Style Sheets</em>) décrit la <strong>présentation</strong> : polices, couleurs, marges, grilles de mise en page, adaptation selon la largeur d'écran.</li>\n</ul>\n<p>Cette séparation rappelle directement celle de la mise en page structurée : le balisage HTML joue le rôle des styles de paragraphe, et la feuille CSS celui de la définition de ces styles. Changer la feuille CSS modifie l'apparence de tout un site sans toucher au contenu.</p>\n<p>Les couleurs en CSS s'écrivent en notation hexadécimale (par exemple #1A5F9E, soit trois paires de chiffres pour le rouge, le vert et le bleu, de 00 à FF), en RVB ou en d'autres notations. Pour une charte graphique, on établit une table de correspondance entre le ton direct de l'imprimé, sa valeur CMJN et sa valeur RVB ou hexadécimale pour l'écran, en sachant que la correspondance n'est jamais parfaite.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'opérateur de l'option productions graphiques ne développe pas en général des sites complets ; il intervient plutôt dans un système de gestion de contenu (CMS) où il intègre textes et images, et dans la préparation des éléments graphiques. Comprendre la logique HTML et CSS lui permet de dialoguer avec les développeurs et de livrer des éléments directement exploitables.</div>"
      },
      {
       "titre": "La publication numérique : PDF interactif et EPUB",
       "contenu": "<p>Pour diffuser un document long à l'écran, deux grandes solutions coexistent.</p>\n<p>Le <strong>PDF interactif</strong> conserve la mise en page de l'imprimé et ajoute des liens, signets, boutons, formulaires. Il convient aux documents consultés sur ordinateur ou tablette, mais il est peu confortable sur téléphone, car le texte ne se réorganise pas. Ce PDF est exporté en RVB, avec des images compressées et sans marques d'impression, très différent du PDF/X d'impression.</p>\n<p>L'<strong>EPUB</strong> est le format standard du livre numérique. Il s'agit d'une archive contenant des fichiers HTML, CSS, images, polices et un fichier de description. La version actuelle, EPUB 3, existe en deux variantes :</p>\n<table><thead><tr><th>Variante</th><th>Principe</th><th>Usage</th></tr></thead><tbody>\n<tr><td>EPUB redistribuable (recomposable)</td><td>Le texte s'adapte à l'écran ; le lecteur peut changer la taille et la police</td><td>Romans, essais, documents à dominante de texte</td></tr>\n<tr><td>EPUB à mise en page fixe</td><td>Chaque page est figée comme dans l'imprimé</td><td>Livres illustrés, bandes dessinées, livres pour enfants</td></tr>\n</tbody></table>\n<p>L'export EPUB depuis un logiciel de mise en page exploite les styles : chaque style de paragraphe devient une balise ou une classe CSS. Un document mal structuré (texte mis en forme localement, blocs non chaînés, textes vectorisés) produit un EPUB désordonné. L'ordre de lecture se vérifie dans le panneau d'articles ou l'ordre des blocs.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les éléments placés sur les gabarits (folios, titres courants) et les textes posés en image ne passent pas, ou mal, dans un EPUB redistribuable. Un titre important transformé en image devient illisible pour une synthèse vocale et impossible à rechercher.</div>"
      },
      {
       "titre": "L'accessibilité numérique",
       "contenu": "<p>L'<strong>accessibilité</strong> consiste à rendre un contenu utilisable par tous, y compris par les personnes en situation de handicap : malvoyantes ou aveugles (qui utilisent une synthèse vocale ou une plage braille), daltoniennes, sourdes ou malentendantes, ayant des difficultés motrices ou cognitives. Les règles internationales de référence sont les <strong>WCAG</strong> (<em>Web Content Accessibility Guidelines</em>) ; en France, le <strong>RGAA</strong> (référentiel général d'amélioration de l'accessibilité) les décline. La réglementation européenne étend progressivement les obligations d'accessibilité, notamment aux livres numériques et à de nombreux services en ligne.</p>\n<p>Les règles de base que l'opérateur applique dès la préparation des contenus :</p>\n<ul>\n<li>un <strong>texte alternatif</strong> pour chaque image porteuse d'information, vide pour les images décoratives ;</li>\n<li>une hiérarchie de titres logique, sans saut de niveau ;</li>\n<li>un <strong>contraste</strong> suffisant entre le texte et le fond (les WCAG fixent un rapport minimal, par exemple 4,5 pour 1 pour le texte courant au niveau AA) ;</li>\n<li>l'information jamais transmise par la seule couleur ;</li>\n<li>des liens explicites, et non « cliquez ici » ;</li>\n<li>la langue du document déclarée, un ordre de lecture cohérent ;</li>\n<li>des sous-titres ou une transcription pour les vidéos.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'accessibilité se prépare dès la structure du document. Un document bien stylé et bien balisé est à la fois plus facile à décliner sur plusieurs supports, mieux référencé par les moteurs de recherche et accessible.</div>"
      },
      {
       "titre": "Organiser la déclinaison d'un projet sur plusieurs supports",
       "contenu": "<p>Un projet plurimédia se décline rarement en une seule fois : affiche, dépliant, page web, publication sur les réseaux sociaux, lettre d'information électronique. Pour éviter les incohérences, on organise le travail autour d'une <strong>source unique</strong> :</p>\n<ul>\n<li>des textes validés une seule fois, stockés dans un fichier ou un système de gestion de contenu, puis réutilisés sur chaque support ;</li>\n<li>des images originales conservées en haute définition et en RVB, à partir desquelles on produit chaque version (CMJN pour l'impression, sRGB et tailles adaptées pour l'écran) ;</li>\n<li>une table des couleurs de la charte avec leurs équivalents ton direct, CMJN, RVB et hexadécimal ;</li>\n<li>un tableau des formats à produire, avec pour chacun les dimensions, l'espace colorimétrique, le format de fichier et le poids maximal.</li>\n</ul>\n<p>Lorsqu'un texte est corrigé, la correction est faite dans la source et répercutée sur toutes les déclinaisons, ce qui évite qu'une ancienne version survive sur l'un des supports.</p>"
      }
     ],
     "points_cles": [
      "L'écran utilise le RVB (sRGB), des unités relatives et des formats variables : la mise en page doit être adaptable",
      "À l'écran, seule compte la taille en pixels ; prévoir plusieurs tailles pour les écrans à haute densité",
      "JPEG pour les photos, PNG pour les aplats et la transparence, SVG pour les logos, WebP ou AVIF pour alléger",
      "HTML décrit la structure, CSS la présentation, comme les styles en mise en page",
      "PDF interactif : mise en page conservée, en RVB, peu adapté au téléphone",
      "EPUB 3 redistribuable pour le texte, à mise en page fixe pour les ouvrages illustrés",
      "Accessibilité : texte alternatif, titres hiérarchisés, contraste suffisant, information pas seulement par la couleur",
      "WCAG au niveau international, RGAA en France"
     ],
     "lexique": [
      {
       "terme": "sRGB",
       "def": "Espace colorimétrique RVB standard des écrans et du web."
      },
      {
       "terme": "Responsive design",
       "def": "Mise en page web qui s'adapte à la largeur de l'écran."
      },
      {
       "terme": "Point de rupture",
       "def": "Largeur d'écran à partir de laquelle la disposition d'une page change."
      },
      {
       "terme": "HTML",
       "def": "Langage de balisage décrivant la structure et le contenu d'une page web."
      },
      {
       "terme": "CSS",
       "def": "Langage décrivant la présentation des pages web."
      },
      {
       "terme": "SVG",
       "def": "Format d'image vectorielle du web, décrit en XML."
      },
      {
       "terme": "EPUB",
       "def": "Format standard ouvert de livre numérique, fondé sur HTML et CSS."
      },
      {
       "terme": "Texte alternatif",
       "def": "Description textuelle d'une image, lue par les synthèses vocales."
      },
      {
       "terme": "WCAG",
       "def": "Règles internationales pour l'accessibilité des contenus web."
      },
      {
       "terme": "RGAA",
       "def": "Référentiel français d'amélioration de l'accessibilité numérique."
      },
      {
       "terme": "CMS",
       "def": "Système de gestion de contenu permettant de publier sans programmer."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Option B : productions imprimées",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "brpip-b-groupe-offset",
     "titre": "Le groupe imprimant offset : mouillage, encrage et transfert",
     "niveau": "1re",
     "options": [
      "b"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire l'architecture d'une presse offset feuilles et le trajet de la feuille",
      "Expliquer la composition et le contrôle de la solution de mouillage",
      "Décrire le système d'encrage et le réglage de l'encrier",
      "Expliquer l'équilibre eau-encre et reconnaître ses dérèglements",
      "Régler et contrôler les pressions et l'habillage des cylindres"
     ],
     "sections": [
      {
       "titre": "L'architecture d'une presse offset feuilles",
       "contenu": "<p>Une presse offset feuilles se compose de quatre grands ensembles, traversés par la feuille dans cet ordre :</p>\n<ol>\n<li>le <strong>margeur</strong> : il prélève les feuilles une à une sur la pile grâce à une tête d'aspiration (ventouses de séparation et de transport, soufflage), les achemine en nappe sur une table de marge, puis les positionne contre des <strong>taquets frontaux</strong> et un <strong>taquet latéral</strong> (marge de côté) avant de les confier aux pinces ;</li>\n<li>les <strong>groupes imprimants</strong> : un par couleur, plus éventuellement une tour de vernissage ; la feuille passe de groupe en groupe par des cylindres de transfert munis de pinces ;</li>\n<li>éventuellement un dispositif de <strong>retournement</strong> qui permet d'imprimer le verso au même passage (presse dite en retiration) ;</li>\n<li>la <strong>réception</strong> : des barres à pinces déposent les feuilles sur la pile de sortie ; on y trouve le poudreur, les sécheurs (infrarouge, air chaud, UV) et les taqueurs qui alignent la pile.</li>\n</ol>\n<p>Chaque groupe imprimant comprend trois cylindres principaux :</p>\n<table><thead><tr><th>Cylindre</th><th>Rôle</th></tr></thead><tbody>\n<tr><td>Cylindre porte-plaque</td><td>Porte la plaque, reçoit la solution de mouillage puis l'encre</td></tr>\n<tr><td>Cylindre porte-blanchet</td><td>Porte le blanchet en caoutchouc qui reçoit l'image de la plaque et la reporte sur le papier</td></tr>\n<tr><td>Cylindre de contre-pression</td><td>Porte la feuille tenue par ses pinces et la presse contre le blanchet</td></tr>\n</tbody></table>\n<p>Le report par le blanchet, qui a donné son nom au procédé (offset signifie report), présente deux avantages : le caoutchouc épouse les irrégularités du papier, et la plaque, qui ne touche jamais le papier, s'use moins.</p>"
      },
      {
       "titre": "La solution de mouillage",
       "contenu": "<p>Le principe de l'offset repose sur l'antagonisme de l'eau et de l'encre grasse : la plaque reçoit d'abord un film d'eau très mince qui se fixe sur les zones hydrophiles (non imprimantes), puis l'encre qui ne se fixe que sur les zones oléophiles (imprimantes).</p>\n<p>La <strong>solution de mouillage</strong> n'est pas de l'eau pure. Elle contient :</p>\n<ul>\n<li>de l'eau de qualité contrôlée, souvent traitée (adoucie ou déminéralisée puis reminéralisée) pour obtenir une dureté stable ;</li>\n<li>un <strong>additif de mouillage</strong> qui règle le pH, contient des agents de protection des zones non imprimantes (gommes), des agents anti-corrosion et des biocides ;</li>\n<li>éventuellement de l'<strong>alcool isopropylique</strong> (IPA), qui abaisse la tension superficielle pour étaler le film d'eau plus finement ; on cherche aujourd'hui à le réduire ou à le supprimer.</li>\n</ul>\n<table><thead><tr><th>Paramètre</th><th>Ordre de grandeur courant</th><th>Moyen de contrôle</th></tr></thead><tbody>\n<tr><td>pH</td><td>Légèrement acide, souvent entre 4,8 et 5,5 selon l'additif</td><td>pH-mètre ou bandelettes</td></tr>\n<tr><td>Conductivité</td><td>Dépend de l'eau et du dosage ; on suit son évolution par rapport à la valeur de référence</td><td>Conductimètre, souvent intégré au circuit</td></tr>\n<tr><td>Température</td><td>Environ 10 à 15 °C dans le bac</td><td>Thermomètre du groupe de refroidissement</td></tr>\n<tr><td>Taux d'alcool éventuel</td><td>Le plus faible possible</td><td>Doseur automatique</td></tr>\n</tbody></table>\n<p>Ces valeurs dépendent de l'additif : on se réfère toujours à la fiche technique du fournisseur. Une conductivité qui monte au fil des jours signale une pollution de la solution par le papier, la poudre ou l'encre : le circuit doit être vidangé et nettoyé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une solution trop acide ralentit le séchage par oxydation des encres et attaque les plaques ; une solution pas assez acide ne protège plus les zones non imprimantes, qui commencent à prendre l'encre (voile). Le pH se contrôle au moins une fois par jour.</div>"
      },
      {
       "titre": "Le système d'encrage",
       "contenu": "<p>L'encre doit passer d'une couche épaisse dans l'encrier à un film de quelques micromètres réparti uniformément sur la plaque. Le <strong>système d'encrage</strong> réalise cette transformation :</p>\n<ol>\n<li>l'<strong>encrier</strong> : un réservoir dont le fond est fermé par une lame ou des segments réglables zone par zone (les <strong>vis</strong> ou <strong>zones d'encrier</strong>), contre un cylindre appelé <strong>rouleau d'encrier</strong> ;</li>\n<li>le <strong>preneur</strong> : un rouleau qui oscille entre le rouleau d'encrier et la batterie d'encrage et prélève une bande d'encre à chaque contact ;</li>\n<li>la <strong>batterie</strong> de rouleaux : une alternance de rouleaux durs (métalliques, souvent avec mouvement latéral de va-et-vient appelé <strong>distribution</strong>) et de rouleaux souples, qui étire, malaxe et égalise l'encre ;</li>\n<li>les <strong>toucheurs</strong> : trois ou quatre rouleaux qui déposent l'encre sur la plaque.</li>\n</ol>\n<p>Le débit d'encre se règle de deux façons : <strong>globalement</strong>, par la course de rotation du rouleau d'encrier (ou le temps de contact du preneur), et <strong>localement</strong>, par l'ouverture de chaque zone d'encrier. Les zones sont réglées en fonction de la couverture de l'image dans la bande correspondante de la feuille : une bande avec un grand aplat demande une zone plus ouverte qu'une bande de texte. Sur les presses récentes, ces ouvertures sont pilotées à distance depuis le pupitre et préréglées à partir des données de couverture issues du prépresse.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'encrage réagit avec retard. Une modification de zone met plusieurs dizaines de feuilles à se stabiliser sur l'imprimé, parce que l'encre doit traverser toute la batterie. On corrige par petites touches et on attend la stabilisation avant de mesurer de nouveau.</div>"
      },
      {
       "titre": "L'équilibre eau-encre",
       "contenu": "<p>L'encre et la solution de mouillage se mélangent partiellement dans la batterie : l'encre absorbe une petite quantité d'eau sous forme de fines gouttelettes et forme une <strong>émulsion</strong>. Une émulsion modérée est normale et même nécessaire. Le conducteur cherche l'<strong>équilibre eau-encre</strong> : le minimum d'eau qui garde les zones non imprimantes propres, avec la quantité d'encre qui donne la densité cible.</p>\n<table><thead><tr><th>Situation</th><th>Symptômes</th><th>Correction</th></tr></thead><tbody>\n<tr><td>Manque d'eau</td><td>Zones non imprimantes qui se couvrent d'un voile d'encre, points qui s'empâtent, aspect sale</td><td>Augmenter progressivement le mouillage</td></tr>\n<tr><td>Excès d'eau</td><td>Encre délavée, aplats ternes et marbrés, gouttelettes d'eau sur la feuille, mauvaise prise de l'encre, papier qui ondule</td><td>Réduire le mouillage par petites étapes</td></tr>\n<tr><td>Émulsion excessive de l'encre</td><td>Encre « beurrée » sur les rouleaux, perte de brillant, densité instable</td><td>Réduire l'eau, changer l'encre ou l'additif, nettoyer la batterie</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> retrouver l'équilibre eau-encre au calage. 1. Démarrer avec les préréglages et un mouillage légèrement supérieur à la valeur habituelle. 2. Imprimer quelques dizaines de feuilles et observer les zones non imprimantes près des aplats : si elles sont propres, réduire progressivement l'eau. 3. Continuer à réduire jusqu'à voir apparaître un début de voile dans les marges, puis remonter légèrement l'eau au-dessus de ce point : c'est la limite basse de mouillage, à laquelle on ajoute une petite marge de sécurité. 4. Ajuster alors l'encrage pour atteindre les densités cibles, zone par zone. 5. Noter les valeurs de mouillage obtenues sur la fiche du travail pour les réutiliser lors d'une réimpression.</div>"
      },
      {
       "titre": "Blanchets, habillages et pressions",
       "contenu": "<p>Le <strong>blanchet</strong> est une toile composite : plusieurs couches de tissu donnent la résistance, une couche compressible absorbe les variations d'épaisseur, une couche superficielle en caoutchouc reçoit l'encre. On le choisit selon le procédé (conventionnel ou UV, car le caoutchouc doit résister aux produits) et l'épaisseur prévue.</p>\n<p>Pour obtenir la bonne pression entre les cylindres, on place sous la plaque et sous le blanchet des feuilles calibrées appelées <strong>habillages</strong> (ou sous-blanchets et sous-plaques). Leur épaisseur se calcule à partir de la hauteur des cylindres par rapport à leurs bagues de référence (les <strong>cordons</strong>, ou bagues de roulement) et de l'épaisseur mesurée du blanchet et de la plaque. On mesure ces épaisseurs au micromètre, en plusieurs points.</p>\n<p>On distingue deux pressions :</p>\n<ul>\n<li>la pression <strong>plaque-blanchet</strong>, réglée par l'habillage ;</li>\n<li>la pression <strong>blanchet-papier</strong> (ou blanchet-contre-pression), réglée selon l'épaisseur du support, souvent automatiquement sur les presses récentes.</li>\n</ul>\n<p>Une pression insuffisante donne des aplats irréguliers, piquetés ; une pression excessive écrase les points (engraissement), use plaques et blanchets et peut provoquer un doublage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un blanchet marqué par un pli de feuille, une étiquette ou un bourrage présente un creux qui imprime mal. On peut parfois le remonter localement avec un produit adapté, mais il faut souvent le changer. Les blanchets de rechange sont stockés à plat, à l'abri de la lumière et de la chaleur, dans leur emballage d'origine.</div>"
      }
     ],
     "points_cles": [
      "Une presse offset comprend margeur, groupes imprimants, éventuel retournement et réception",
      "Chaque groupe comporte un cylindre porte-plaque, un porte-blanchet et un de contre-pression",
      "La solution de mouillage contient eau traitée, additif et parfois alcool ; on suit pH, conductivité et température",
      "L'encrage passe de l'encrier aux toucheurs par le preneur et la batterie ; réglage global et par zones",
      "L'encrage réagit avec retard : corriger par petites touches et attendre la stabilisation",
      "Équilibre eau-encre : le minimum d'eau qui garde les zones non imprimantes propres",
      "Manque d'eau : voile et empâtement ; excès d'eau : encre délavée et marbrée",
      "Habillages calculés à partir des cordons et mesurés au micromètre ; pressions ni trop faibles ni trop fortes"
     ],
     "lexique": [
      {
       "terme": "Margeur",
       "def": "Ensemble qui prélève les feuilles sur la pile et les positionne avant l'impression."
      },
      {
       "terme": "Taquet",
       "def": "Butée contre laquelle la feuille est positionnée avant d'être prise par les pinces."
      },
      {
       "terme": "Blanchet",
       "def": "Toile caoutchoutée qui reporte l'image de la plaque sur le papier."
      },
      {
       "terme": "Solution de mouillage",
       "def": "Eau additionnée de produits qui protège les zones non imprimantes de la plaque."
      },
      {
       "terme": "Conductivité",
       "def": "Aptitude d'une solution à conduire le courant ; elle renseigne sur sa composition et sa pollution."
      },
      {
       "terme": "Encrier",
       "def": "Réservoir d'encre dont le débit se règle globalement et par zones."
      },
      {
       "terme": "Preneur",
       "def": "Rouleau oscillant qui prélève l'encre sur le rouleau d'encrier."
      },
      {
       "terme": "Toucheurs",
       "def": "Rouleaux qui déposent l'encre sur la plaque."
      },
      {
       "terme": "Émulsion",
       "def": "Mélange de fines gouttelettes de solution de mouillage dans l'encre."
      },
      {
       "terme": "Habillage",
       "def": "Feuilles calibrées placées sous la plaque ou le blanchet pour régler la pression."
      },
      {
       "terme": "Cordons",
       "def": "Bagues de référence aux extrémités des cylindres, servant au calcul des habillages."
      }
     ]
    },
    {
     "id": "brpip-b-conduite-presse",
     "titre": "Piloter l'impression : repérage, densités, bon à rouler et conduite",
     "niveau": "1re-Tle",
     "options": [
      "b"
     ],
     "duree": 40,
     "objectifs": [
      "Corriger un défaut de repérage selon sa direction",
      "Piloter l'encrage à partir des mesures de la barre de contrôle",
      "Contrôler l'équilibre des gris, l'acceptation des encres et l'engraissement",
      "Obtenir et formaliser un bon à rouler conforme au BAT",
      "Surveiller et corriger les dérives pendant le tirage"
     ],
     "sections": [
      {
       "titre": "Le repérage et ses corrections",
       "contenu": "<p>Le <strong>repérage</strong> est la superposition exacte des couleurs les unes sur les autres. Le <strong>registre</strong> désigne plus précisément la position de l'impression par rapport à la feuille, et la concordance du recto et du verso. On contrôle le repérage sur les <strong>croix de repérage</strong> et sur des éléments fins de l'image, au compte-fils ou avec une caméra.</p>\n<table><thead><tr><th>Direction du défaut</th><th>Correction usuelle</th></tr></thead><tbody>\n<tr><td>Circonférentiel (dans le sens de défilement de la feuille, vers la pince ou la queue)</td><td>Décalage en rotation du cylindre porte-plaque du groupe concerné</td></tr>\n<tr><td>Latéral (perpendiculaire au sens de défilement)</td><td>Déplacement latéral du cylindre porte-plaque ou de la plaque</td></tr>\n<tr><td>Diagonal (de travers, image en biais)</td><td>Correction d'inclinaison de la plaque, si la presse le permet, sinon repositionnement de la plaque</td></tr>\n<tr><td>Défaut qui varie d'une feuille à l'autre</td><td>Problème de marge : taquets, guides, vitesse d'arrivée, état du papier ; pas de correction de plaque</td></tr>\n<tr><td>Image trop longue ou trop courte selon la couleur (le repérage est bon en pince, mauvais en queue)</td><td>Variation dimensionnelle du papier ou différence d'habillage ; correction limitée par l'habillage, sinon refaire une plaque</td></tr>\n</tbody></table>\n<p>Les presses récentes mesurent le repérage par caméra sur des repères spécifiques et corrigent automatiquement les plaques motorisées. Le conducteur doit cependant savoir interpréter un défaut que la machine ne peut pas corriger, comme un défaut instable lié au margeur ou au papier.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> corriger le repérage d'un défaut instable revient à poursuivre une cible mouvante : on dérègle la presse sans résoudre le problème. Avant toute correction, vérifier sur plusieurs feuilles successives que le défaut est constant.</div>"
      },
      {
       "titre": "Piloter l'encrage par la mesure",
       "contenu": "<p>Une fois le repérage obtenu, le conducteur règle l'encrage zone par zone en s'appuyant sur les mesures de la <strong>barre de contrôle</strong>. Celle-ci comporte, répétées à chaque zone d'encrier : des aplats de chaque couleur, des plages tramées (souvent 40 % ou 50 % et 80 %), des plages de superposition (deux et trois couleurs), des plages de gris (gris trichrome et gris noir de même apparence), parfois des plages de contrôle du glissement et du doublage.</p>\n<p>Le système de mesure (table de lecture ou spectrophotomètre en ligne) affiche pour chaque zone l'écart à la cible, en densité ou en ΔE, et propose une correction d'ouverture des zones. Les densités cibles dépendent de la condition d'impression, de l'encre et du papier ; sur papier couché, elles sont typiquement de l'ordre de 1,4 à 1,5 pour le cyan et le magenta, 1,0 à 1,1 pour le jaune et 1,7 à 1,9 pour le noir (status E, référence papier). Les normes récentes pilotent plutôt l'aplat en Lab et ΔE, la densité restant un outil de réglage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire une mesure de barre de contrôle et décider. Cible magenta : densité 1,45. Relevés zone par zone (zones 1 à 8) : 1,46 ; 1,44 ; 1,52 ; 1,55 ; 1,47 ; 1,45 ; 1,38 ; 1,44. Tolérance de travail : ± 0,05. 1. Repérer les zones hors tolérance : zone 3 (1,52, soit + 0,07), zone 4 (1,55, soit + 0,10), zone 7 (1,38, soit - 0,07). 2. Vérifier la cohérence avec l'image : les zones 3 et 4 portent-elles un grand aplat rouge, qui consomme beaucoup et réagit fortement ? 3. Corriger : fermer légèrement les zones 3 et 4, ouvrir légèrement la zone 7, en proportion de l'écart. 4. Laisser passer quelques dizaines de feuilles pour stabiliser. 5. Mesurer de nouveau et vérifier aussi que la correction n'a pas déplacé l'équilibre des zones voisines. Si une même zone dérive de façon répétée sur plusieurs tirages, signaler un possible problème mécanique (zone d'encrier, rouleau).</div>"
      },
      {
       "titre": "Gris, engraissement et acceptation",
       "contenu": "<p>Les aplats ne suffisent pas à juger une impression. Trois contrôles complémentaires sont nécessaires.</p>\n<ul>\n<li>L'<strong>équilibre des gris</strong> : la plage de gris trichrome (par exemple 50 % cyan, 40 % magenta, 40 % jaune, valeurs à adapter selon la condition) doit avoir la même apparence que la plage de gris en noir seul. Une dominante sur le gris trichrome révèle un déséquilibre d'encrage ou d'engraissement entre couleurs, très visible sur les tons chair et les images neutres.</li>\n<li>L'<strong>engraissement</strong> de chaque couleur, mesuré sur les plages tramées, doit correspondre à la cible de la condition d'impression et être équilibré entre les couleurs.</li>\n<li>L'<strong>acceptation</strong> (ou trapping des encres) : la capacité d'une encre à se déposer sur une encre déjà imprimée encore humide. Une mauvaise acceptation donne des superpositions (rouge, vert, bleu) trop claires ou décalées en teinte. On la contrôle sur les plages de superposition et on la corrige par le tirant des encres (décroissant dans l'ordre d'impression) ou par l'ordre des couleurs.</li>\n</ul>\n<p>L'<strong>ordre d'impression</strong> le plus répandu en offset feuilles est noir, cyan, magenta, jaune ; d'autres ordres sont possibles selon les travaux et les encres. Il fait partie des conditions qui doivent rester identiques entre l'épreuve de référence et la production.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> densités justes ne veut pas dire couleurs justes. On contrôle dans l'ordre : repérage, aplats, engraissement, gris, superpositions, puis l'image elle-même comparée au BAT sous lumière normalisée.</div>"
      },
      {
       "titre": "Le bon à rouler",
       "contenu": "<p>Le <strong>bon à rouler</strong> (BAR) est la feuille de calage jugée conforme, qui devient la référence pour tout le tirage. Il est signé par le conducteur, par le chef d'équipe ou par le client présent, selon les règles de l'entreprise.</p>\n<p>Avant de signer le BAR, on vérifie :</p>\n<ul>\n<li>la conformité au <strong>BAT</strong> : textes, images, éléments présents, ordre des pages, sens ;</li>\n<li>la conformité colorimétrique à l'épreuve contractuelle et aux valeurs cibles, mesures à l'appui ;</li>\n<li>le repérage et le registre recto verso ;</li>\n<li>l'absence de défauts (taches, voile, manques, doublage) ;</li>\n<li>les marques techniques indispensables au façonnage (traits de coupe, repères de pli, collation) ;</li>\n<li>le papier : référence, grammage, sens des fibres conformes au dossier.</li>\n</ul>\n<p>La feuille BAR est datée, signée, et conservée près de la réception pendant tout le tirage ; ses mesures sont enregistrées comme valeurs de référence. Une copie accompagne souvent le dossier vers le façonnage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> quand le client assiste au calage, il arrive qu'il demande une modification par rapport au BAT, par exemple « plus de rouge dans le visuel ». Le conducteur explique ce qui est possible sans dégrader le reste de la feuille (une modification d'encrage touche toute la bande de la zone), fait valider le compromis par la signature du BAR et le note sur la fiche de suivi.</div>"
      },
      {
       "titre": "Conduire le tirage et maîtriser les dérives",
       "contenu": "<p>Pendant le tirage, le conducteur surveille en permanence la production, selon le plan de contrôle :</p>\n<ul>\n<li>prélèvement de feuilles à intervalles réguliers, comparaison au BAR sous le pupitre normalisé, mesure de la barre de contrôle ;</li>\n<li>surveillance du niveau d'encre dans les encriers, de la solution de mouillage, de la poudre ;</li>\n<li>surveillance de la pile de réception : hauteur, maculage, taquage ;</li>\n<li>surveillance du margeur : doubles départs, feuilles de travers, bourrages ;</li>\n<li>contrôle du compteur et de la quantité de feuilles bonnes.</li>\n</ul>\n<p>Les presses équipées d'une <strong>régulation en boucle fermée</strong> mesurent automatiquement la barre de contrôle en cours de tirage et corrigent l'encrage sans intervention. Le conducteur reste responsable de vérifier que la régulation travaille sur des cibles justes et qu'elle n'est pas trompée (barre masquée, zone sans plage de mesure).</p>\n<p>Les feuilles imprimées pendant un incident (bourrage, lavage de blanchet, arrêt prolongé) sont repérées par un <strong>marque-pile</strong> (bande de papier insérée dans la pile) pour être triées. Les arrêts et redémarrages entraînent souvent quelques feuilles de densité instable.</p>\n<p>À la fin du tirage, le conducteur renseigne la fiche de suivi : quantités bonnes et gâche, temps, incidents, valeurs de mouillage et d'encrage, consommables. Il identifie les palettes (numéro de dossier, contenu, face imprimée, quantité) avant leur transfert au façonnage.</p>"
      }
     ],
     "points_cles": [
      "Défaut de repérage : circonférentiel, latéral ou diagonal ; un défaut instable vient de la marge ou du papier",
      "La barre de contrôle porte aplats, tramés, superpositions et gris pour chaque zone",
      "Corriger les zones hors tolérance par petites touches et attendre la stabilisation",
      "Contrôler dans l'ordre : repérage, aplats, engraissement, gris, superpositions, image",
      "L'acceptation se corrige par le tirant des encres et l'ordre d'impression",
      "Le BAR, conforme au BAT et mesuré, devient la référence de tout le tirage",
      "La régulation en boucle fermée ne dispense pas de vérifier les cibles",
      "Repérer les feuilles d'incident par un marque-pile et renseigner la fiche de suivi"
     ],
     "lexique": [
      {
       "terme": "Repérage",
       "def": "Superposition exacte des couleurs entre elles."
      },
      {
       "terme": "Registre",
       "def": "Position de l'impression sur la feuille et concordance du recto et du verso."
      },
      {
       "terme": "Repérage circonférentiel",
       "def": "Position de l'image dans le sens de défilement de la feuille."
      },
      {
       "terme": "Équilibre des gris",
       "def": "Concordance d'apparence entre un gris trichrome et un gris en noir seul."
      },
      {
       "terme": "Acceptation",
       "def": "Aptitude d'une encre à se déposer sur une encre précédente encore humide."
      },
      {
       "terme": "Bon à rouler (BAR)",
       "def": "Feuille de calage validée servant de référence pour le tirage."
      },
      {
       "terme": "Régulation en boucle fermée",
       "def": "Correction automatique de l'encrage à partir de mesures en cours de tirage."
      },
      {
       "terme": "Marque-pile",
       "def": "Repère inséré dans la pile pour signaler des feuilles à contrôler ou à trier."
      },
      {
       "terme": "Ordre d'impression",
       "def": "Succession des couleurs dans les groupes de la presse."
      },
      {
       "terme": "Tolérance de travail",
       "def": "Écart admis par l'entreprise autour de la valeur cible pendant le tirage."
      }
     ]
    },
    {
     "id": "brpip-b-defauts-impression",
     "titre": "Diagnostiquer et corriger les défauts d'impression",
     "niveau": "Tle",
     "options": [
      "b"
     ],
     "duree": 40,
     "objectifs": [
      "Décrire un défaut d'impression avec le vocabulaire professionnel",
      "Relier un défaut à ses causes probables classées par familles",
      "Mettre en œuvre une démarche de diagnostic par élimination",
      "Choisir une action corrective et vérifier son efficacité",
      "Distinguer les défauts propres à l'offset de ceux des autres procédés"
     ],
     "sections": [
      {
       "titre": "Décrire avant d'agir",
       "contenu": "<p>Un défaut mal décrit est mal corrigé. Avant toute action, le conducteur observe et décrit le défaut avec précision, en répondant à quelques questions :</p>\n<ul>\n<li><strong>où ?</strong> sur toute la feuille ou dans une zone ; côté pince, côté queue, côté conducteur ou côté opposé ; dans les aplats, les tramés, les textes ;</li>\n<li><strong>quelle couleur ?</strong> une seule couleur (cause dans un groupe), toutes les couleurs (cause commune : papier, marge, réception) ;</li>\n<li><strong>depuis quand ?</strong> dès le calage, après un changement de palette, après un arrêt, progressivement ;</li>\n<li><strong>avec quelle régularité ?</strong> à chaque feuille, toutes les n feuilles, de façon aléatoire ;</li>\n<li><strong>quelle forme ?</strong> trait, tache, voile, flou, dédoublement.</li>\n</ul>\n<p>Le compte-fils, la comparaison avec le BAR et l'examen de chaque couleur séparément (grâce à la barre de contrôle et aux zones où une couleur est seule) permettent de localiser le groupe en cause. Un défaut qui revient à intervalle régulier sur la feuille fait penser à un élément tournant dont la circonférence correspond à cet intervalle (rouleau, cylindre).</p>"
      },
      {
       "titre": "Les principaux défauts de l'offset",
       "contenu": "<table><thead><tr><th>Défaut</th><th>Aspect</th><th>Causes probables</th></tr></thead><tbody>\n<tr><td>Voile (ou graissage)</td><td>Fin dépôt d'encre dans les zones qui devraient rester blanches</td><td>Manque de mouillage, pH trop élevé, plaque mal gommée ou usée, encre trop molle</td></tr>\n<tr><td>Doublage</td><td>Image dédoublée, deuxième image décalée et plus pâle, visible dans les trames</td><td>Pression excessive, blanchet mal tendu, jeu dans les pinces, papier qui ondule</td></tr>\n<tr><td>Glissement (ou flou)</td><td>Points ovalisés dans le sens de défilement</td><td>Habillage incorrect (différence de circonférences), pression excessive, blanchet trop souple</td></tr>\n<tr><td>Arrachage</td><td>Petits manques avec fibres ou couche de papier arrachées, dépôts sur le blanchet</td><td>Tirant de l'encre trop élevé pour le papier, papier faible, vitesse élevée, température basse</td></tr>\n<tr><td>Piquetage (ou bouts de cuir)</td><td>Petits points blancs entourés d'un halo dans les aplats</td><td>Particules (poussières de papier, peau d'encre séchée) collées sur la plaque ou le blanchet</td></tr>\n<tr><td>Fantôme</td><td>Image parasite ou variation de densité reproduisant une autre partie de la forme</td><td>Épuisement de l'encre sur les toucheurs avant de recharger (fantôme mécanique), ou différence de traitement chimique de la plaque</td></tr>\n<tr><td>Marbrure</td><td>Aplats irréguliers, nuageux</td><td>Excès d'eau, mauvaise acceptation, papier à absorption irrégulière</td></tr>\n<tr><td>Maculage</td><td>Encre décalquée au verso de la feuille suivante</td><td>Excès d'encre, piles trop hautes, poudre insuffisante, séchage lent</td></tr>\n<tr><td>Bandes (ou stries)</td><td>Bandes parallèles à l'axe des cylindres</td><td>Toucheurs mal réglés, vibrations, engrenages usés</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un défaut présent sur une seule couleur vient du groupe de cette couleur (plaque, blanchet, encrage, mouillage) ; un défaut présent sur toutes les couleurs vient de ce qui est commun (papier, margeur, transfert, réception, environnement).</div>"
      },
      {
       "titre": "Classer les causes : les 5 M appliqués à l'impression",
       "contenu": "<p>Pour ne rien oublier, on classe les causes possibles selon les cinq familles du diagramme d'Ishikawa, adaptées à l'atelier d'impression :</p>\n<table><thead><tr><th>Famille</th><th>Exemples de causes en impression</th></tr></thead><tbody>\n<tr><td>Matière</td><td>Papier (humidité, résistance de surface, poussière, lot différent), encre (tirant, viscosité, séchage), solution de mouillage, blanchet</td></tr>\n<tr><td>Matériel</td><td>Rouleaux usés ou mal réglés, pinces, taquets, pompe à vide, groupe de refroidissement</td></tr>\n<tr><td>Méthode</td><td>Habillage mal calculé, ordre des couleurs, procédure de lavage, préréglages inadaptés</td></tr>\n<tr><td>Main-d'œuvre</td><td>Réglage oublié, mauvaise lecture de la fiche, manque de formation sur une nouvelle machine</td></tr>\n<tr><td>Milieu</td><td>Température et hygrométrie de l'atelier, poussière, variations au cours de la journée</td></tr>\n</tbody></table>\n<p>Ce classement est utile pour l'analyse écrite d'un défaut : il montre que les hypothèses ont été envisagées de façon complète, avant d'être triées par probabilité.</p>"
      },
      {
       "titre": "Une démarche de diagnostic par élimination",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> traiter un piquetage qui apparaît sur le cyan après un changement de palette. 1. Décrire : petits points blancs à halo, uniquement dans les aplats cyan, depuis la nouvelle palette, en augmentation. 2. Localiser : défaut sur une seule couleur, donc groupe cyan ; mais apparition au changement de palette, donc matière possible. 3. Hypothèses : poussière ou fibres du papier transférées sur le blanchet cyan (premier groupe à recevoir de l'encre en aplat sur cette zone), peau d'encre dans l'encrier cyan, particule sur la plaque. 4. Vérifications du plus simple au plus long : regarder le blanchet cyan et y trouver des particules blanchâtres ; regarder l'encrier, propre ; frotter une feuille non imprimée de la nouvelle palette sur une surface sombre, des poussières se déposent. 5. Action immédiate : lavage du blanchet cyan, contrôle de l'aspiration et des brosses de la marge. 6. Action corrective : signaler le lot de papier poussiéreux au magasin et au fournisseur, conserver des échantillons. 7. Vérification : le défaut ne réapparaît pas pendant 2 000 feuilles ; consigner sur la fiche de suivi.</div>\n<p>On ne modifie <strong>qu'un seul paramètre à la fois</strong> et on observe le résultat après stabilisation. Changer simultanément l'encrage, le mouillage et la pression rend impossible de savoir ce qui a agi, et peut créer un nouveau défaut.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> laver un blanchet ou une plaque se fait machine à l'arrêt, ou avec le dispositif de lavage automatique, et jamais en introduisant un chiffon entre des cylindres en rotation. Les accidents de happement de la main dans un point rentrant sont parmi les plus graves en imprimerie.</div>"
      },
      {
       "titre": "Défauts propres aux autres procédés",
       "contenu": "<p>Le conducteur de l'option productions imprimées peut travailler sur d'autres procédés. Les défauts typiques à connaître sont :</p>\n<table><thead><tr><th>Procédé</th><th>Défaut</th><th>Causes probables</th></tr></thead><tbody>\n<tr><td>Flexographie</td><td>Effet de halo (contour foncé autour des éléments)</td><td>Pression plaque-support excessive, encre trop abondante</td></tr>\n<tr><td>Flexographie</td><td>Remplissage des trames (pontage des points)</td><td>Encre qui sèche sur la plaque, viscosité trop haute, anilox trop chargé</td></tr>\n<tr><td>Héliogravure</td><td>Manques de points dans les hautes lumières</td><td>Alvéoles trop peu profondes, encre trop visqueuse, papier trop rugueux</td></tr>\n<tr><td>Sérigraphie</td><td>Bavures, dentelures</td><td>Pression de racle excessive, tension d'écran faible, encre trop fluide</td></tr>\n<tr><td>Électrophotographie</td><td>Fond légèrement grisé, toner qui s'efface au frottement</td><td>Réglage de charge, fixation insuffisante pour le grammage, papier humide</td></tr>\n<tr><td>Jet d'encre</td><td>Lignes blanches ou foncées dans le sens de défilement</td><td>Buses bouchées ou déviées ; nettoyage et test de buses</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fournisseurs d'encres, de blanchets et de papiers publient des guides de défauts illustrés, souvent affichés près des presses. Un classeur interne, enrichi des cas rencontrés dans l'entreprise avec leurs solutions, accélère beaucoup les diagnostics des nouveaux conducteurs.</div>"
      },
      {
       "titre": "Défauts liés au support et au séchage",
       "contenu": "<p>Certains défauts ne viennent ni de l'encre ni des réglages du groupe, mais du support lui-même ou de son séchage. Ils touchent alors toutes les couleurs, ou apparaissent après l'impression :</p>\n<table><thead><tr><th>Défaut</th><th>Aspect</th><th>Causes probables</th><th>Actions</th></tr></thead><tbody>\n<tr><td>Tuilage</td><td>Bords des feuilles relevés, pile qui se creuse</td><td>Différence d'humidité entre les deux faces, apport d'eau du mouillage, séchage infrarouge excessif</td><td>Réduire l'eau, ajuster le séchage, acclimater le papier, retourner la pile selon la procédure</td></tr>\n<tr><td>Gondolement</td><td>Bords ondulés</td><td>Papier qui a repris de l'humidité sur les bords</td><td>Acclimatation, maintien du film d'emballage jusqu'à l'utilisation</td></tr>\n<tr><td>Défaut de repérage évolutif</td><td>Repérage bon en pince, mauvais en queue, variable selon les palettes</td><td>Variation dimensionnelle du papier entre deux passages</td><td>Imprimer le verso rapidement, stabiliser l'hygrométrie, éviter les longues attentes entre passages</td></tr>\n<tr><td>Électricité statique</td><td>Feuilles collées, mauvais taquage en réception</td><td>Air trop sec, frottements</td><td>Humidification de l'atelier, ioniseurs</td></tr>\n<tr><td>Séchage insuffisant</td><td>Encre qui marque au frottement plusieurs heures après</td><td>Mouillage trop acide, papier peu absorbant, excès d'encre, température basse</td><td>Contrôler pH et densités, siccatif selon le fournisseur, vernis de protection</td></tr>\n<tr><td>Transparence (montée)</td><td>Impression du verso visible au recto</td><td>Opacité insuffisante du papier, charges d'encre élevées</td><td>Choisir un papier plus opaque ; défaut à signaler dès le choix du papier</td></tr>\n</tbody></table>\n<p>Ces défauts se préviennent largement en amont : stockage et acclimatation du papier, régulation de l'atelier, choix du papier adapté à la charge d'encre.</p>"
      }
     ],
     "points_cles": [
      "Décrire où, quelle couleur, depuis quand, avec quelle régularité et sous quelle forme",
      "Un défaut répétitif à intervalle régulier évoque un élément tournant de même circonférence",
      "Voile : manque d'eau ou pH ; doublage : pression ou jeu ; arrachage : tirant trop élevé",
      "Piquetage : particules sur plaque ou blanchet ; maculage : excès d'encre ou piles trop hautes",
      "Une seule couleur touchée : cause dans le groupe ; toutes les couleurs : cause commune",
      "Classer les causes selon les 5 M : matière, matériel, méthode, main-d'œuvre, milieu",
      "Modifier un seul paramètre à la fois et vérifier après stabilisation",
      "Laver plaques et blanchets machine à l'arrêt ou par le laveur automatique"
     ],
     "lexique": [
      {
       "terme": "Voile",
       "def": "Fin dépôt d'encre dans les zones non imprimantes."
      },
      {
       "terme": "Doublage",
       "def": "Dédoublement de l'image dû à un double contact décalé."
      },
      {
       "terme": "Glissement",
       "def": "Ovalisation des points dans le sens de défilement."
      },
      {
       "terme": "Arrachage",
       "def": "Arrachement de fibres ou de couchage du papier par une encre trop tirante."
      },
      {
       "terme": "Piquetage",
       "def": "Petits points blancs entourés d'un halo, dus à des particules sur la plaque ou le blanchet."
      },
      {
       "terme": "Fantôme",
       "def": "Image parasite ou variation de densité reproduisant une autre partie de la forme."
      },
      {
       "terme": "Marbrure",
       "def": "Irrégularité nuageuse des aplats."
      },
      {
       "terme": "Point rentrant",
       "def": "Zone dangereuse entre deux cylindres ou rouleaux tournant l'un vers l'autre."
      },
      {
       "terme": "Pontage",
       "def": "Réunion de points de trame voisins par excès d'encre."
      },
      {
       "terme": "Test de buses",
       "def": "Motif imprimé permettant de vérifier le fonctionnement de toutes les buses d'une tête jet d'encre."
      }
     ]
    },
    {
     "id": "brpip-b-production-numerique",
     "titre": "Conduire une production en impression numérique",
     "niveau": "Tle",
     "options": [
      "b"
     ],
     "duree": 35,
     "objectifs": [
      "Décrire le rôle du serveur d'impression et paramétrer une file d'attente",
      "Étalonner une presse numérique et contrôler sa stabilité colorimétrique",
      "Choisir et paramétrer les supports dans la bibliothèque de la machine",
      "Conduire une production à données variables et en contrôler l'intégrité",
      "Assurer l'entretien courant d'une presse numérique"
     ],
     "sections": [
      {
       "titre": "Le serveur d'impression et les files d'attente",
       "contenu": "<p>Une presse numérique de production est pilotée par un <strong>serveur d'impression</strong> (ou contrôleur, ou <em>front-end</em>) qui intègre un RIP. Il reçoit les fichiers PDF, les interprète, gère la couleur, applique le tramage propre à la machine, puis envoie les données à la presse page par page.</p>\n<p>Les travaux sont envoyés dans des <strong>files d'attente</strong> (ou imprimantes virtuelles) préparamétrées : support, recto verso, profil de sortie, imposition, finition en ligne. Le serveur offre plusieurs états :</p>\n<ul>\n<li><strong>en attente</strong> : le travail est reçu mais pas encore traité ;</li>\n<li><strong>traité</strong> (ou rippé) : il est prêt à imprimer, ce qui permet d'en vérifier l'aperçu ;</li>\n<li><strong>en impression</strong>, puis <strong>imprimé</strong>, avec un historique conservé.</li>\n</ul>\n<p>Le conducteur vérifie les propriétés du travail avant de lancer la production : nombre d'exemplaires, support affecté, ordre d'assemblage, mode recto verso, imposition, et surtout la cohérence avec le dossier de fabrication. Une première épreuve (une feuille ou un exemplaire) est toujours contrôlée avant le tirage complet.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un flux intégré, le workflow prépresse envoie directement les travaux validés au serveur de la presse numérique avec un ticket JDF qui contient support, quantité et finition. Le conducteur n'a plus à ressaisir les paramètres, mais il garde la responsabilité de vérifier le premier exemplaire.</div>"
      },
      {
       "titre": "La bibliothèque de supports",
       "contenu": "<p>Chaque support utilisé sur une presse numérique est déclaré dans une <strong>bibliothèque de supports</strong> (ou catalogue de papiers) du serveur. Chaque fiche définit :</p>\n<table><thead><tr><th>Paramètre</th><th>Effet</th></tr></thead><tbody>\n<tr><td>Format et grammage</td><td>Réglage du transport, de la température de fixation (toner) ou de séchage (jet d'encre)</td></tr>\n<tr><td>Type de surface (couché brillant, mat, non couché, synthétique)</td><td>Paramètres de transfert et de fixation, quantité d'encre</td></tr>\n<tr><td>Sens des fibres</td><td>Choix de l'orientation en machine et en finition</td></tr>\n<tr><td>Bac d'alimentation</td><td>Affectation automatique du bon papier au bon travail</td></tr>\n<tr><td>Profil de sortie associé</td><td>Gestion de la couleur propre à ce support</td></tr>\n<tr><td>Réglages d'alignement recto verso</td><td>Corrections de position et d'échelle pour la concordance</td></tr>\n</tbody></table>\n<p>Le constructeur publie une liste de <strong>supports qualifiés</strong> avec des réglages prêts à l'emploi. Pour un support nouveau, on crée une fiche, on effectue des tests (adhérence du toner, transport sans bourrage, concordance recto verso, aspect) et on crée ou on choisit un profil couleur adapté.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> charger dans un bac un papier différent de celui déclaré (par exemple un 300 g/m² déclaré en 170 g/m²) provoque une fixation insuffisante, du toner qui s'efface, des bourrages, voire une détérioration du four de fixation. Toute modification de chargement se répercute dans la déclaration du bac.</div>"
      },
      {
       "titre": "Étalonner et contrôler la couleur",
       "contenu": "<p>Une presse numérique dérive au cours de la journée et d'un jour à l'autre : température, humidité, usure des consommables, lot de toner. Pour garantir une couleur stable, on pratique deux opérations :</p>\n<ul>\n<li>l'<strong>étalonnage</strong> (ou linéarisation) : la presse imprime une mire de plages tramées pour chaque couleur ; le serveur les mesure avec un spectrophotomètre (externe ou intégré en ligne) et calcule des courbes de correction pour revenir à l'état de référence ; on l'effectue en début de journée, au changement de support, ou dès qu'un contrôle signale une dérive ;</li>\n<li>la <strong>vérification</strong> : on imprime une barre de contrôle normalisée, on la mesure et on compare aux valeurs de référence de la condition visée (par exemple une simulation de la condition offset sur papier couché) ; le logiciel calcule les écarts ΔE et indique si les tolérances sont respectées.</li>\n</ul>\n<p>La norme <strong>ISO 12647-8</strong> traite des épreuves de validation (« validation print ») et des tirages réalisés directement à partir de données numériques ; des certifications de procédé existent pour l'impression numérique, sur le modèle du PSO en offset.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> procédure de début de poste sur une presse à toner. 1. Contrôler l'état de la presse : niveaux de toner, réservoir de toner usagé, alertes de maintenance. 2. Vérifier que le support de référence est chargé dans le bac prévu et correctement déclaré. 3. Lancer l'étalonnage du serveur sur ce support et mesurer la mire. 4. Imprimer et mesurer la barre de contrôle : si les écarts dépassent la tolérance, relancer l'étalonnage ou rechercher la cause (consommable en fin de vie, humidité). 5. Imprimer le test de concordance recto verso et corriger l'alignement si nécessaire. 6. Enregistrer les résultats dans le rapport du jour. Ce rapport est la preuve que la machine était conforme au moment de la production.</div>"
      },
      {
       "titre": "Produire des données variables",
       "contenu": "<p>La force du numérique est la personnalisation : chaque exemplaire peut être différent. En conduite, cela crée des exigences particulières :</p>\n<ul>\n<li>le nombre d'exemplaires est fixé par le fichier de données et non par une quantité saisie ; il faut vérifier que le serveur a bien reçu le nombre d'enregistrements attendu ;</li>\n<li>chaque exemplaire est unique : un exemplaire abîmé ne se remplace pas par n'importe quel autre ; il faut réimprimer exactement le même enregistrement ;</li>\n<li>la séquence doit être respectée pour le routage (ordre postal, ordre de tri) ;</li>\n<li>les codes (code-barres, QR code, numérotation) doivent être lisibles et uniques.</li>\n</ul>\n<p>Les serveurs proposent des outils de <strong>suivi de l'intégrité</strong> : une marque ou un code imprimé sur chaque document est relu par une caméra en sortie de presse ou en finition ; le logiciel détecte les manquants et les doublons et génère automatiquement la liste des documents à réimprimer.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en données variables, la question n'est plus seulement « combien d'exemplaires bons ? » mais « lesquels ? ». La traçabilité de chaque exemplaire, du fichier à la mise sous pli, est la garantie qu'aucun destinataire n'est oublié ou servi deux fois.</div>"
      },
      {
       "titre": "Entretenir une presse numérique",
       "contenu": "<p>L'entretien courant d'une presse numérique est en grande partie confié au conducteur, selon un plan défini par le constructeur. Selon la technologie, il comprend :</p>\n<table><thead><tr><th>Technologie</th><th>Opérations courantes de l'opérateur</th></tr></thead><tbody>\n<tr><td>Électrophotographie à toner sec</td><td>Remplacement des cartouches de toner et du réservoir de toner usagé, nettoyage des chargeurs (corona) selon la procédure, remplacement de certaines pièces d'usure dites remplaçables par l'opérateur</td></tr>\n<tr><td>Électrophotographie à toner liquide</td><td>Remplacement des blanchets et des plaques photoconductrices selon leur durée de vie, gestion des encres</td></tr>\n<tr><td>Jet d'encre</td><td>Test des buses, nettoyage et purge des têtes, remplacement des encres et des filtres, gestion du réservoir de déchets d'encre</td></tr>\n</tbody></table>\n<p>Les pièces d'usure sont suivies par des compteurs (nombre de pages ou de clics) ; le serveur affiche leur état et prévient avant la fin de vie. Les interventions plus lourdes (four de fixation, électronique, mécanique) relèvent du technicien du constructeur, souvent dans le cadre d'un contrat de maintenance. Le conducteur prépare son intervention en décrivant précisément les symptômes et en joignant les codes d'erreur et des exemples imprimés.</p>\n<p>Les consommables usagés (cartouches, réservoirs de toner ou d'encre usagés) suivent les filières de reprise du constructeur ou des filières de déchets adaptées, et ne sont jamais jetés avec les ordures ménagères.</p>"
      },
      {
       "titre": "Finition en ligne et hors ligne",
       "contenu": "<p>Les presses numériques de production peuvent être couplées à des équipements de <strong>finition en ligne</strong> : bac grande capacité, empileur, module de pliage, agrafage, encarteuse-piqueuse, dos carré collé, massicot trilatéral. Le document sort fini, sans manutention intermédiaire. Cette organisation convient aux petites séries de brochures personnalisées ou de livres à l'unité, mais elle limite la cadence à celle du module le plus lent et immobilise toute la ligne en cas de panne d'un module.</p>\n<p>La <strong>finition hors ligne</strong>, sur des machines séparées, offre plus de souplesse : la presse peut imprimer un autre travail pendant le façonnage du précédent. Elle exige en revanche une bonne identification des piles et, pour les données variables, un contrôle d'intégrité en sortie de finition.</p>\n<p>Le choix entre les deux organisations dépend du volume, de la variété des produits et de l'investissement disponible. Dans les deux cas, l'imposition doit tenir compte de la finition : marques de pliage et de coupe lisibles par les caméras des modules, ordre de sortie des feuilles compatible avec l'assemblage.</p>"
      }
     ],
     "points_cles": [
      "Le serveur d'impression intègre le RIP et gère files d'attente, couleur, imposition et finition",
      "Toujours contrôler un premier exemplaire avant de lancer le tirage complet",
      "La bibliothèque de supports règle transport, fixation, couleur et alignement pour chaque papier",
      "Un papier mal déclaré provoque défauts de fixation, bourrages et pannes",
      "Étalonnage quotidien puis vérification par une barre de contrôle mesurée",
      "En données variables, chaque exemplaire est unique : vérifier nombre, séquence, manquants et doublons",
      "Le suivi d'intégrité par caméra détecte les documents manquants ou en double",
      "Entretien courant par l'opérateur, pièces d'usure suivies par compteurs, interventions lourdes par le constructeur"
     ],
     "lexique": [
      {
       "terme": "Serveur d'impression",
       "def": "Ordinateur qui pilote une presse numérique et intègre son RIP."
      },
      {
       "terme": "File d'attente",
       "def": "Imprimante virtuelle préparamétrée qui applique des réglages aux travaux reçus."
      },
      {
       "terme": "Bibliothèque de supports",
       "def": "Liste des papiers déclarés avec leurs paramètres de passage et de couleur."
      },
      {
       "terme": "Support qualifié",
       "def": "Papier testé et validé par le constructeur pour une presse donnée."
      },
      {
       "terme": "Linéarisation",
       "def": "Correction qui ramène la reproduction des valeurs tonales à l'état de référence."
      },
      {
       "terme": "Fixation",
       "def": "Opération qui fait adhérer durablement le toner au support par chaleur et pression."
      },
      {
       "terme": "Concordance recto verso",
       "def": "Superposition exacte de l'impression du recto et du verso."
      },
      {
       "terme": "Intégrité",
       "def": "Assurance que chaque document variable est imprimé une fois et une seule."
      },
      {
       "terme": "Pièce d'usure",
       "def": "Pièce à remplacer périodiquement selon un compteur d'utilisation."
      },
      {
       "terme": "Purge des têtes",
       "def": "Évacuation d'encre à travers les buses pour les déboucher."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 7 — Analyser les documents professionnels",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "brpip-doc-dossier-fabrication",
     "titre": "Analyser un dossier de fabrication complet",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les pièces d'un dossier de fabrication et leur rôle",
      "Extraire les données et les contraintes techniques d'un produit",
      "Détecter les incohérences entre les pièces du dossier",
      "Déduire une organisation de production justifiée",
      "Rédiger une analyse structurée telle qu'attendue à l'épreuve écrite"
     ],
     "sections": [
      {
       "titre": "Ce que contient un dossier de fabrication",
       "contenu": "<p>À l'épreuve écrite du diplôme, consacrée à l'étude d'un dossier de fabrication, le candidat reçoit un ensemble de documents décrivant une commande réelle ou réaliste. Il doit en <strong>relever les informations</strong>, en <strong>dégager les contraintes techniques</strong> et <strong>proposer une organisation de production</strong>. Le dossier rassemble en général :</p>\n<table><thead><tr><th>Pièce</th><th>Ce qu'elle apporte</th></tr></thead><tbody>\n<tr><td>Fiche de fabrication (ou fiche technique, ordre de fabrication)</td><td>Identification, quantité, format, pagination, couleurs, papier, procédé, façonnage, délai</td></tr>\n<tr><td>Devis ou bon de commande</td><td>Engagement commercial : ce qui a été vendu au client</td></tr>\n<tr><td>Cahier des charges client ou charte graphique</td><td>Exigences de rendu, couleurs de marque, tolérances</td></tr>\n<tr><td>Maquette, chemin de fer, schéma d'imposition</td><td>Organisation des pages et de la feuille</td></tr>\n<tr><td>Fiches techniques des matières</td><td>Papier, encre, vernis, colle : propriétés et compatibilités</td></tr>\n<tr><td>Caractéristiques des équipements</td><td>Formats mini et maxi, cadences, nombre de groupes, options</td></tr>\n<tr><td>Rapport de contrôle, épreuve, relevés</td><td>État des fichiers, valeurs de référence</td></tr>\n<tr><td>Planning, extraits de normes, FDS</td><td>Contraintes de délai, de qualité et de sécurité</td></tr>\n</tbody></table>\n<p>Aucune pièce ne suffit seule. L'analyse consiste précisément à croiser les pièces pour vérifier qu'elles décrivent toutes le même produit et que ce produit est réalisable avec les moyens disponibles.</p>"
      },
      {
       "titre": "Le vocabulaire et les notations à maîtriser",
       "contenu": "<p>Un dossier utilise des notations condensées qu'il faut savoir lire sans hésitation :</p>\n<ul>\n<li><strong>format fini</strong> et <strong>format ouvert</strong> (à plat avant pliage) ; le premier nombre est en général la largeur, le second la hauteur ;</li>\n<li><strong>pagination</strong> : nombre de pages, couverture comprise ou non (mention « 32 pages + couverture » ou « 36 pages tout compris ») ;</li>\n<li><strong>notation des couleurs</strong> : 4/4 (quadri recto et verso), 4+1/1 (quadri plus un ton direct au recto, ton direct seul au verso), 5/0 (recto seul) ;</li>\n<li><strong>papier</strong> : nature, finition, grammage, et parfois format de feuille et sens des fibres (souvent indiqué en soulignant la dimension parallèle aux fibres, ou par une mention « FL » ou « fibres dans le sens de la longueur » ; la convention de l'entreprise est à vérifier) ;</li>\n<li><strong>finition</strong> : vernis (acrylique, UV, sélectif), pelliculage (recto, recto verso, mat, brillant) ;</li>\n<li><strong>façonnage</strong> : coupe, pli (nombre et type), reliure (piqûre à cheval 2 points, dos carré collé PUR), conditionnement (par paquets de 50 sous film, en cartons de 500).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'abréviation « 4/4 » ne dit pas comment le verso sera imprimé (presse 4 couleurs en deux passages, presse 8 couleurs en retiration, ou basculage avec un seul jeu de plaques). Ce choix appartient à l'organisation de production et doit être justifié, pas supposé.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un dossier en six étapes. 1. <strong>Survoler</strong> toutes les pièces et en faire l'inventaire : titre, date, émetteur, rôle. 2. <strong>Identifier le produit</strong> en une phrase : nature, quantité, format, pagination, couleurs, papier, finition, façonnage, délai. 3. <strong>Relever les données</strong> dans un tableau unique, en indiquant pour chaque donnée la pièce d'où elle provient. 4. <strong>Confronter</strong> les pièces deux à deux : devis et fiche, fiche et maquette, fiche et caractéristiques machines, fiche et fiche papier ; noter chaque incohérence ou manque. 5. <strong>Dégager les contraintes</strong> : techniques (formats, sens des fibres, compatibilités), qualité (couleur de marque, tolérances), délais, sécurité et environnement. 6. <strong>Proposer l'organisation</strong> : ordre des opérations, postes, imposition, nombre de plaques, quantités de papier, contrôles prévus, en justifiant chaque choix par une donnée ou une contrainte relevée.</div>\n<p>Dans la rédaction, chaque affirmation s'appuie sur un document : « D'après la fiche de fabrication (document 2), le format fini est de 148 × 210 mm. » Une réponse sans source est fragile ; une réponse avec la source et le calcul est vérifiable.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'analyse d'un dossier ne consiste pas à recopier les documents, mais à les croiser. Un sujet peut volontairement contenir des incohérences : les repérer et les expliquer fait partie du travail demandé.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le dossier présenté ci-dessous est une démonstration. Il comprend trois pièces.</p>\n<h4>Pièce 1 : fiche de fabrication n° 25-0417</h4>\n<table><thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead><tbody>\n<tr><td>Client et produit</td><td>Office de tourisme, brochure « Sentiers d'automne »</td></tr>\n<tr><td>Quantité</td><td>6 000 exemplaires</td></tr>\n<tr><td>Format fini</td><td>148 × 210 mm (A5 vertical)</td></tr>\n<tr><td>Pagination</td><td>28 pages + couverture 4 pages</td></tr>\n<tr><td>Intérieur</td><td>Couché demi-mat 115 g/m², impression 4/4</td></tr>\n<tr><td>Couverture</td><td>Couché demi-mat 250 g/m², 4/0, pelliculage mat recto</td></tr>\n<tr><td>Façonnage</td><td>Piqûre à cheval 2 points</td></tr>\n<tr><td>Procédé</td><td>Offset feuilles, presse 4 couleurs 72 × 102 cm</td></tr>\n<tr><td>Livraison</td><td>Par cartons de 200, livraison le vendredi de la semaine 41</td></tr>\n</tbody></table>\n<h4>Pièce 2 : extrait du devis accepté</h4>\n<p>« Brochure A5, 32 pages tout compris, intérieur couché demi-mat 115 g/m² en 4/4, couverture 250 g/m² en 4/4 avec pelliculage mat recto, piqûre à cheval, 6 000 exemplaires, livraison semaine 41. »</p>\n<h4>Pièce 3 : rapport de contrôle des fichiers</h4>\n<p>Fichier PDF/X-4 de 32 pages ; TrimBox 148 × 210 mm ; fonds perdus 3 mm ; avertissement page 2 : image à 190 ppp effectifs ; information : couverture comportant des éléments imprimés en page 2 et en page 3 de couverture (intérieur de couverture) ; taux d'encrage maximal 298 %.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Identification du produit.</strong> Il s'agit d'une brochure A5 de 32 pages au total, soit 28 pages intérieures et 4 pages de couverture, piquée à cheval, en 6 000 exemplaires. La pagination de 32 pages est un multiple de 4, compatible avec la piqûre à cheval (pièces 1 et 2).</p>\n<p><strong>Incohérence relevée.</strong> La fiche de fabrication indique une couverture en 4/0, alors que le devis prévoit 4/4 et que le rapport de contrôle signale des éléments imprimés en pages 2 et 3 de couverture. Le devis et les fichiers concordent : la fiche de fabrication est donc probablement erronée. Il faut le signaler au chargé de fabrication avant toute production ; si l'on suivait la fiche, l'intérieur de couverture serait blanc, contrairement à la commande.</p>\n<p><strong>Point de vigilance sur la pagination intérieure.</strong> 28 pages intérieures ne forment pas un nombre de cahiers de 16 pages : on peut prévoir un cahier de 16 pages et un cahier de 12 pages, ou un cahier de 16, un de 8 et un de 4 selon les schémas disponibles. Le choix dépend des gabarits d'imposition et de l'encartage en piqûre à cheval.</p>\n<p><strong>Contraintes techniques.</strong> Couverture de 250 g/m² : rainage obligatoire avant pliage pour éviter la cassure du couché et du pelliculage. Pelliculage mat recto : attendre le séchage complet des encres avant pelliculage. Sens des fibres de l'intérieur et de la couverture parallèle au dos, soit à la hauteur de 210 mm, pour un pliage net. Chasse : avec 8 feuilles emboîtées (32 ÷ 4), elle est faible mais non nulle ; elle sera compensée à l'imposition.</p>\n<p><strong>Contrôle des fichiers.</strong> L'image de la page 2 à 190 ppp effectifs est un avertissement et non une erreur : pour une linéature de 150 à 175 lpi, elle se situe un peu sous la fourchette conseillée. On la vérifie à l'écran à 100 % ; si elle est nette et non critique, on la conserve en le signalant au client sur l'épreuve ; sinon, on demande un original de meilleure définition. Le taux d'encrage de 298 % est conforme à une condition d'impression couchée récente limitée à 300 %.</p>\n<p><strong>Proposition d'organisation.</strong> Prépresse : correction de la fiche, épreuve contractuelle et BAT, imposition avec compensation de chasse. Impression offset : couverture et cahiers intérieurs en 4/4 ; nombre de plaques et mode de recto verso à choisir selon l'imposition retenue. Façonnage : pelliculage de la couverture, rainage, coupe, encartage des cahiers, piqûre 2 points, coupe trilatérale, conditionnement par 200. Le délai se vérifie en remontant depuis le vendredi de la semaine 41 avec un temps de séchage avant pelliculage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une incohérence comme celle de la couverture se règle par écrit : le chargé de fabrication corrige la fiche, la nouvelle version porte un indice de révision, et l'ancienne est retirée de l'atelier. Un dossier dont deux versions circulent est une source classique d'erreur.</div>"
      }
     ],
     "points_cles": [
      "Le dossier de fabrication réunit fiche, devis, cahier des charges, maquette, fiches matières, caractéristiques machines, rapports et planning",
      "Notations à maîtriser : formats, pagination, couleurs (4/4, 4+1/1), papier, finition, façonnage",
      "Identifier le produit en une phrase avant toute analyse",
      "Relever les données dans un tableau avec la pièce source de chaque donnée",
      "Confronter les pièces deux à deux pour détecter les incohérences",
      "Classer les contraintes : techniques, qualité, délais, sécurité et environnement",
      "Justifier chaque choix d'organisation par une donnée ou une contrainte relevée",
      "Toute incohérence se signale par écrit et donne lieu à une version corrigée du document"
     ],
     "lexique": [
      {
       "terme": "Dossier de fabrication",
       "def": "Ensemble des documents décrivant une commande et sa réalisation."
      },
      {
       "terme": "Fiche de fabrication",
       "def": "Document interne qui fixe les caractéristiques et les opérations d'un travail."
      },
      {
       "terme": "Pagination",
       "def": "Nombre de pages d'un document, couverture comprise ou non selon la mention."
      },
      {
       "terme": "Format ouvert",
       "def": "Dimensions d'un produit déplié, avant pliage."
      },
      {
       "terme": "Notation des couleurs",
       "def": "Écriture condensée du nombre de couleurs au recto et au verso, par exemple 4/4."
      },
      {
       "terme": "Incohérence",
       "def": "Contradiction entre deux pièces du dossier sur une même donnée."
      },
      {
       "terme": "Coupe trilatérale",
       "def": "Coupe des trois côtés d'un document relié, hors dos."
      },
      {
       "terme": "Encartage",
       "def": "Emboîtement des cahiers les uns dans les autres avant piqûre à cheval."
      },
      {
       "terme": "Indice de révision",
       "def": "Numéro ou lettre identifiant la version d'un document modifié."
      }
     ]
    },
    {
     "id": "brpip-doc-cahier-charges-devis",
     "titre": "Exploiter un cahier des charges, un devis et un bon de commande",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Distinguer cahier des charges client, cahier des charges technique, devis et bon de commande",
      "Repérer dans un cahier des charges les exigences fonctionnelles et techniques",
      "Lire la structure d'un devis graphique et vérifier ses quantités",
      "Contrôler la concordance entre la demande, le devis et la commande",
      "Rédiger une demande de précision au client ou au commercial"
     ],
     "sections": [
      {
       "titre": "Quatre documents, quatre rôles",
       "contenu": "<p>Avant qu'un travail n'arrive en production, plusieurs documents ont été échangés entre le client et l'entreprise. Ils ne se confondent pas :</p>\n<table><thead><tr><th>Document</th><th>Émetteur</th><th>Rôle</th></tr></thead><tbody>\n<tr><td>Cahier des charges client (ou brief, demande de prix)</td><td>Client</td><td>Exprime le besoin : objectif de communication, cible, quantités, contraintes, budget, délai</td></tr>\n<tr><td>Cahier des charges technique de l'imprimeur (ou spécifications de fichiers)</td><td>Imprimeur</td><td>Fixe les exigences de livraison des fichiers : PDF/X, profils, fonds perdus, résolutions</td></tr>\n<tr><td>Devis</td><td>Imprimeur</td><td>Propose une solution technique chiffrée, avec ses conditions</td></tr>\n<tr><td>Bon de commande (ou devis signé)</td><td>Client</td><td>Engage le client sur la solution et le prix proposés</td></tr>\n</tbody></table>\n<p>Le cahier des charges exprime un besoin, souvent en termes de <strong>fonctions</strong> : « le dépliant doit tenir dans un présentoir de format DL », « le catalogue doit résister à une utilisation intensive pendant un an ». Le devis traduit ces fonctions en <strong>solutions techniques</strong> : format 99 × 210 mm, papier couché 170 g/m² avec pelliculage. Une partie du métier consiste à vérifier que la solution répond bien au besoin exprimé.</p>"
      },
      {
       "titre": "La structure d'un cahier des charges",
       "contenu": "<p>Un cahier des charges de produit imprimé ou plurimédia comprend en général :</p>\n<ul>\n<li>le <strong>contexte</strong> : présentation du client, objectif de la communication, cible ;</li>\n<li>la <strong>description du produit</strong> : nature, nombre de versions (langues, déclinaisons), quantités par version ;</li>\n<li>les <strong>exigences fonctionnelles</strong> : durée de vie, conditions d'utilisation (extérieur, contact alimentaire, manipulation), mode de diffusion (envoi postal, présentoir, écran) ;</li>\n<li>les <strong>exigences techniques et graphiques</strong> : charte graphique, couleurs de marque, éléments fournis, tolérances de couleur ;</li>\n<li>les <strong>contraintes environnementales</strong> : papier certifié, imprimeur labellisé, recyclabilité ;</li>\n<li>les <strong>contraintes de délai et de logistique</strong> : date et lieux de livraison, conditionnement, répartition ;</li>\n<li>le <strong>budget</strong> et les critères de choix entre offres.</li>\n</ul>\n<p>On classe souvent les exigences par niveau d'importance : <strong>impératives</strong> (non négociables), <strong>souhaitées</strong> (à respecter si possible), <strong>options</strong> (à chiffrer séparément).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les marchés publics (collectivités, administrations) passent par un cahier des clauses techniques particulières (CCTP) très détaillé. Une offre qui ne respecte pas une exigence impérative peut être écartée. La lecture attentive du CCTP est alors une étape décisive du chiffrage.</div>"
      },
      {
       "titre": "Lire un devis graphique",
       "contenu": "<p>Un devis d'imprimerie comporte des mentions commerciales (identification, date, durée de validité, conditions de paiement, prix hors taxes et toutes taxes comprises) et une <strong>description technique</strong> qui doit être suffisamment précise pour qu'il n'y ait aucun doute sur le produit vendu. On y trouve souvent plusieurs <strong>quantités</strong> chiffrées (par exemple 2 000, 5 000 et 10 000 exemplaires) et un prix du <strong>mille supplémentaire</strong>.</p>\n<p>La comparaison des prix selon la quantité illustre le poids des <strong>frais fixes</strong> (prépresse, plaques, calage) et des <strong>frais variables</strong> (papier, temps de tirage, façonnage proportionnel).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> séparer frais fixes et frais variables à partir de deux quantités d'un devis. Données : 2 000 exemplaires pour 840 € HT ; 5 000 exemplaires pour 1 290 € HT. 1. Calculer la différence de prix : 1 290 - 840 = 450 €. 2. Calculer la différence de quantité : 5 000 - 2 000 = 3 000 exemplaires. 3. En déduire le coût variable : 450 ÷ 3 000 = 0,15 € par exemplaire, soit 150 € le mille supplémentaire. 4. En déduire les frais fixes : 840 - 2 000 × 0,15 = 840 - 300 = 540 €. 5. Vérifier avec l'autre quantité : 540 + 5 000 × 0,15 = 540 + 750 = 1 290 €. Conclusion : les frais fixes représentent 64 % du prix à 2 000 exemplaires mais seulement 42 % à 5 000 ; le prix unitaire passe de 0,42 € à 0,26 €. Ce raisonnement suppose que le procédé reste le même pour les deux quantités.</div>\n<p>Un devis précise aussi ce qui <strong>n'est pas compris</strong> : corrections d'auteur au-delà d'un certain nombre, épreuves supplémentaires, livraison sur plusieurs adresses, stockage. Ces mentions protègent l'entreprise lorsque le client modifie sa demande en cours de route.</p>"
      },
      {
       "titre": "Méthode de vérification croisée",
       "contenu": "<p>À réception d'un bon de commande, le prépresse ou le chargé de fabrication vérifie qu'il correspond au devis, et que le devis correspond aux fichiers reçus et au besoin exprimé. Les écarts fréquents portent sur :</p>\n<ul>\n<li>la quantité (le client commande une quantité intermédiaire non chiffrée) ;</li>\n<li>la pagination (les fichiers comptent 4 pages de plus que le devis) ;</li>\n<li>le format (fichiers en A4 pour un devis en format carré) ;</li>\n<li>les couleurs (fichiers avec un ton direct non prévu) ;</li>\n<li>la finition (pelliculage demandé oralement mais absent du devis) ;</li>\n<li>le délai (date de livraison incompatible avec la date de réception des fichiers).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> lancer la production sur la base des fichiers lorsqu'ils contredisent le devis, sans validation écrite, expose l'entreprise à un litige : le client peut refuser de payer la différence, ou refuser le produit s'il ne correspond pas au bon de commande signé. Toute modification donne lieu à un avenant ou à un nouveau devis.</div>\n<p>La <strong>demande de précision</strong> est rédigée de façon factuelle et courte : elle rappelle la référence du dossier, cite les deux documents contradictoires, indique la conséquence et propose une ou deux solutions avec leur incidence sur le prix ou le délai.</p>"
      },
      {
       "titre": "Exemple commenté",
       "contenu": "<h4>Le document</h4>\n<p>Extrait du cahier des charges d'une enseigne de jardinerie : « Catalogue printemps, diffusion en magasin et par envoi postal à 8 000 clients fidèles. Durée d'utilisation : 3 mois. Format souhaité : proche du A4. Exigences impératives : couleurs du logo conformes à la charte (vert de référence en ton direct), papier certifié issu de forêts gérées durablement, poids unitaire inférieur à 100 g pour respecter la tranche tarifaire postale choisie. Quantité totale : 20 000 exemplaires. »</p>\n<p>Extrait du devis : « Catalogue 210 × 297 mm, 48 pages + couverture 4 pages, intérieur couché brillant 135 g/m² certifié, couverture couché 250 g/m², impression quadrichromie 4/4, piqûre à cheval, 20 000 exemplaires. »</p>\n<h4>L'analyse modèle</h4>\n<p><strong>Couleur de marque.</strong> Le cahier des charges impose un vert en ton direct ; le devis prévoit la quadrichromie seule. L'exigence impérative n'est pas respectée : soit on chiffre une cinquième couleur (4+1/4+1 au moins sur les pages portant le logo), soit on obtient l'accord écrit du client pour une simulation en quadrichromie, avec une tolérance définie.</p>\n<p><strong>Poids unitaire.</strong> Calcul de la masse d'un exemplaire : surface d'une page A4 = 0,210 × 0,297 = 0,06237 m². L'intérieur compte 48 pages, soit 24 feuillets : 24 × 0,06237 × 135 = 202,1 g. Ce résultat dépasse déjà la limite de 100 g. En ajoutant la couverture (2 feuillets à 250 g/m², soit 2 × 0,06237 × 250 = 31,2 g), on obtient environ 233 g. L'exigence impérative de poids n'est pas tenue.</p>\n<p><strong>Pistes de solution.</strong> Pour passer sous 100 g, il faudrait par exemple réduire le grammage intérieur à 70 g/m² (24 × 0,06237 × 70 = 104,8 g) tout en réduisant la pagination, ou réduire le format. Une version à 32 pages intérieures en 80 g/m² et couverture 150 g/m² pèserait 16 × 0,06237 × 80 + 2 × 0,06237 × 150 = 79,8 + 18,7 = 98,5 g, au plus près de la limite, sans marge pour les agrafes et l'éventuel film d'envoi. Ces options sont à proposer au commercial, qui reviendra vers le client.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la vérification d'un devis par rapport au cahier des charges porte d'abord sur les exigences impératives. Un calcul simple (masse, format, nombre de couleurs) suffit souvent à montrer qu'une solution ne convient pas, et doit apparaître dans la réponse.</div>"
      }
     ],
     "points_cles": [
      "Cahier des charges client = besoin ; spécifications imprimeur = règles de fichiers ; devis = solution chiffrée ; bon de commande = engagement",
      "Les exigences se classent en impératives, souhaitées et options",
      "Un CCTP de marché public détaille des exigences dont le non-respect écarte l'offre",
      "Deux quantités d'un devis permettent de séparer frais fixes et coût variable",
      "Le prix unitaire baisse avec la quantité car les frais fixes sont amortis",
      "Vérifier la concordance de quantité, pagination, format, couleurs, finition et délai",
      "Toute modification par rapport au bon de commande exige un accord écrit",
      "Masse d'un exemplaire = nombre de feuillets × surface d'un feuillet × grammage"
     ],
     "lexique": [
      {
       "terme": "Cahier des charges",
       "def": "Document exprimant le besoin et les exigences du client."
      },
      {
       "terme": "CCTP",
       "def": "Cahier des clauses techniques particulières d'un marché public."
      },
      {
       "terme": "Devis",
       "def": "Proposition chiffrée décrivant la solution technique proposée et ses conditions."
      },
      {
       "terme": "Bon de commande",
       "def": "Document par lequel le client s'engage sur une offre."
      },
      {
       "terme": "Exigence impérative",
       "def": "Exigence non négociable dont le non-respect rend l'offre irrecevable."
      },
      {
       "terme": "Frais fixes",
       "def": "Coûts indépendants de la quantité produite."
      },
      {
       "terme": "Coût variable",
       "def": "Coût proportionnel à la quantité produite."
      },
      {
       "terme": "Mille supplémentaire",
       "def": "Prix de chaque millier d'exemplaires ajouté à une quantité de base."
      },
      {
       "terme": "Avenant",
       "def": "Document qui modifie un engagement contractuel existant."
      },
      {
       "terme": "Feuillet",
       "def": "Feuille d'un document comptant deux pages, recto et verso."
      }
     ]
    },
    {
     "id": "brpip-a-doc-rapport-controle-epreuve",
     "titre": "Lire un rapport de contrôle en amont et un rapport d'épreuve contractuelle",
     "niveau": "Tle",
     "options": [
      "a"
     ],
     "duree": 40,
     "objectifs": [
      "Repérer la structure d'un rapport de contrôle en amont et le profil utilisé",
      "Interpréter chaque anomalie et évaluer sa conséquence à l'impression",
      "Lire l'étiquette et le rapport de mesure d'une épreuve contractuelle",
      "Décider de la validité d'une épreuve au regard des tolérances",
      "Rédiger une fiche de retour client argumentée"
     ],
     "sections": [
      {
       "titre": "La structure d'un rapport de contrôle en amont",
       "contenu": "<p>Le rapport de contrôle en amont est produit automatiquement par le logiciel de contrôle ou le workflow, généralement sous la forme d'un PDF annoté ou d'une page récapitulative. Il comporte :</p>\n<ul>\n<li>un <strong>en-tête</strong> : nom du fichier, date et heure, logiciel et version, <strong>profil de contrôle</strong> utilisé ;</li>\n<li>un <strong>résumé</strong> : nombre d'erreurs, d'avertissements et d'informations, et éventuellement les corrections automatiques déjà appliquées ;</li>\n<li>la <strong>liste détaillée</strong> des anomalies, groupées par type, avec la page et souvent l'objet concerné (image, texte, filet) ;</li>\n<li>des <strong>informations générales</strong> sur le document : nombre de pages, boîtes de page, polices, espaces colorimétriques, tons directs, conditions d'impression visées ;</li>\n<li>parfois une <strong>copie annotée</strong> du PDF où chaque anomalie est encadrée sur la page.</li>\n</ul>\n<p>Le vocabulaire est souvent technique et parfois en anglais : <em>Font not embedded</em> (police non incorporée), <em>Image resolution below</em> (résolution inférieure au seuil), <em>Total area coverage</em> (taux d'encrage), <em>RGB used</em> (RVB utilisé), <em>Hairline</em> (filet trop fin), <em>Overprint</em> (surimpression).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un rapport « sans erreur » obtenu avec un profil inadapté (par exemple un profil pour impression numérique appliqué à un travail offset) ne prouve rien. La première vérification porte toujours sur le nom et la version du profil indiqués dans l'en-tête.</div>"
      },
      {
       "titre": "Méthode de lecture d'un rapport",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un rapport de contrôle en cinq temps. 1. <strong>Valider le cadre</strong> : nom du fichier et version, profil utilisé, norme PDF/X demandée, condition d'impression visée, conformes au dossier. 2. <strong>Lire le résumé</strong> et relever le nombre d'erreurs : s'il y en a, le fichier n'est pas utilisable en l'état. 3. <strong>Traiter chaque ligne</strong> en remplissant un tableau à cinq colonnes : page, anomalie, gravité, conséquence à l'impression, décision (accepter, corriger en prépresse, demander au client). 4. <strong>Vérifier visuellement</strong> chaque anomalie dans le PDF avec les aperçus, car certaines sont des faux positifs (par exemple un filet fin volontairement placé hors du format fini). 5. <strong>Rédiger</strong> la synthèse destinée au client ou au chargé de fabrication, en ne gardant que ce qui demande une action ou une information.</div>\n<table><thead><tr><th>Anomalie typique</th><th>Conséquence à l'impression</th><th>Décision habituelle</th></tr></thead><tbody>\n<tr><td>Police non incorporée</td><td>Substitution, texte modifié ou illisible</td><td>Erreur : nouveau PDF à demander</td></tr>\n<tr><td>Image RVB dans un flux PDF/X-1a</td><td>Conversion non maîtrisée ou rejet du fichier</td><td>Conversion prépresse avec le bon profil, signalée sur l'épreuve</td></tr>\n<tr><td>Résolution effective faible</td><td>Image floue ou pixelisée</td><td>Selon la valeur et l'importance de l'image : accepter avec information, ou demander un original</td></tr>\n<tr><td>Taux d'encrage dépassé</td><td>Maculage, séchage lent, ombres bouchées</td><td>Conversion avec limitation du taux d'encrage, contrôlée visuellement</td></tr>\n<tr><td>Fonds perdus insuffisants</td><td>Liseré blanc au bord après coupe</td><td>Demander un fichier corrigé, ou extension d'un fond uni avec accord</td></tr>\n<tr><td>Objet blanc en surimpression</td><td>Objet invisible à l'impression</td><td>Correction prépresse, signalée</td></tr>\n</tbody></table>"
      },
      {
       "titre": "L'épreuve contractuelle et son rapport",
       "contenu": "<p>L'<strong>épreuve contractuelle</strong> est une impression, réalisée sur un système d'épreuvage étalonné, qui simule le rendu de la condition d'impression visée. Signée par le client avec le BAT, elle sert de référence de couleur au conducteur de presse. Pour avoir valeur contractuelle, elle doit être <strong>vérifiable</strong>, selon les exigences de la norme <strong>ISO 12647-7</strong>.</p>\n<p>Une épreuve conforme comporte :</p>\n<ul>\n<li>une <strong>barre de contrôle d'épreuve</strong> imprimée à côté du sujet, souvent la gamme Ugra/Fogra (Media Wedge), composée de plusieurs dizaines de plages : aplats, tramés, superpositions, gris, papier ;</li>\n<li>une <strong>étiquette</strong> (ou bandeau d'identification) indiquant le nom du fichier, la date et l'heure, le système d'épreuvage, le support d'épreuve, la condition d'impression simulée (par exemple les données de caractérisation utilisées), et le résultat de la vérification ;</li>\n<li>un <strong>rapport de mesure</strong> : pour chaque plage ou groupe de plages, l'écart ΔE à la valeur de référence, et le verdict par rapport aux tolérances.</li>\n</ul>\n<p>Les tolérances portent typiquement sur l'écart du papier simulé, l'écart moyen sur l'ensemble des plages, l'écart maximal sur une plage, les écarts sur les aplats primaires et sur la balance des gris. Les valeurs chiffrées de ces tolérances sont fixées par la norme et reprises par les logiciels de vérification ; on les lit sur le rapport plutôt que de les retenir par cœur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une épreuve sans barre de contrôle mesurée ni étiquette n'est qu'une sortie couleur indicative, elle n'a pas de valeur contractuelle pour la couleur. Le conducteur de presse ne peut pas s'engager à l'atteindre.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le document étudié est l'ensemble « rapport de contrôle + épreuve » d'une affiche 40 × 60 cm à imprimer en offset sur papier couché demi-mat, flux PDF/X-4.</p>\n<h4>Rapport de contrôle</h4>\n<table><thead><tr><th>Champ</th><th>Contenu</th></tr></thead><tbody>\n<tr><td>Fichier</td><td>affiche_festival_v02.pdf</td></tr>\n<tr><td>Profil</td><td>Offset feuilles couché, PDF/X-4, version de l'atelier</td></tr>\n<tr><td>Résumé</td><td>0 erreur, 3 avertissements, 2 informations</td></tr>\n<tr><td>Avertissement 1</td><td>Page 1 : image « foule.tif » résolution effective 162 ppp</td></tr>\n<tr><td>Avertissement 2</td><td>Page 1 : texte de 6 pt composé en 4 couleurs (mentions légales)</td></tr>\n<tr><td>Avertissement 3</td><td>Page 1 : taux d'encrage maximal 318 % (seuil 300 %)</td></tr>\n<tr><td>Information 1</td><td>Ton direct présent : « PANTONE orange »</td></tr>\n<tr><td>Information 2</td><td>Transparence présente</td></tr>\n</tbody></table>\n<h4>Étiquette et rapport de l'épreuve</h4>\n<p>Condition simulée : données de caractérisation pour papier couché, condition de mesure M1. Résultats : papier simulé ΔE 1,2 (conforme) ; écart moyen sur l'ensemble des plages ΔE 1,9 (conforme) ; écart maximal 4,8 sur une plage de superposition rouge (conforme) ; écart sur l'aplat magenta 5,6 (non conforme). Verdict global : non conforme.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Cadre.</strong> Le profil utilisé correspond au procédé, au papier et à la norme PDF/X-4 du dossier : le rapport est exploitable. L'absence d'erreur indique que le fichier est techniquement imprimable.</p>\n<p><strong>Avertissement 1 : image à 162 ppp.</strong> Pour une affiche vue à distance, imprimée vers 150 lpi, cette valeur est faible mais souvent acceptable sur une photo de foule sans détails fins critiques. Décision : vérifier à 100 % d'affichage ; si aucun crénelage n'est visible, accepter et informer le client.</p>\n<p><strong>Avertissement 2 : texte de 6 pt en 4 couleurs.</strong> Un léger défaut de repérage rendra ces mentions légales floues et colorées sur les bords. Décision : demander au client, ou corriger avec son accord, une composition en noir seul (0-0-0-100), sans changement visuel notable.</p>\n<p><strong>Avertissement 3 : taux d'encrage de 318 %.</strong> Le dépassement de 18 points sur une zone sombre expose au maculage et à un séchage lent. Décision : conversion de l'image concernée avec limitation à 300 % par le profil de sortie, puis contrôle visuel des ombres.</p>\n<p><strong>Informations.</strong> Le ton direct orange doit figurer au devis : si le devis est en quadrichromie seule, il faut le convertir (avec l'accord du client, car l'orange vif sortira du gamut) ou chiffrer une cinquième couleur. La transparence est admise en PDF/X-4 ; on vérifie son rendu au RIP sur l'épreuve.</p>\n<p><strong>Épreuve.</strong> L'épreuve est déclarée non conforme à cause de l'aplat magenta (ΔE 5,6). Elle ne peut pas être envoyée comme épreuve contractuelle. Causes probables : étalonnage du système d'épreuvage ancien, lot de support d'épreuve différent. Action : relancer l'étalonnage, réimprimer et remesurer avant envoi.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la fiche de retour au client tient en quelques lignes : « Affiche festival, version 02. Fichier recevable. Trois points : photo foule légèrement sous-définie, acceptable pour une affiche, sauf avis contraire de votre part ; mentions légales passées en noir seul pour la lisibilité ; taux d'encrage ramené à 300 % pour le séchage. Question : l'orange est-il à imprimer en ton direct (supplément au devis) ou en quadrichromie ? Épreuve contractuelle à suivre. »</div>"
      }
     ],
     "points_cles": [
      "Un rapport de contrôle comprend en-tête, profil, résumé, détail des anomalies et informations",
      "Vérifier d'abord que le profil de contrôle correspond au procédé, au papier et à la norme demandés",
      "Pour chaque anomalie : page, gravité, conséquence à l'impression, décision",
      "Petits textes en 4 couleurs à recomposer en noir seul ; taux d'encrage à limiter par conversion",
      "Un ton direct non prévu au devis demande une décision du client",
      "Une épreuve contractuelle selon ISO 12647-7 porte une barre de contrôle mesurée et une étiquette",
      "Une épreuve non conforme aux tolérances ne doit pas être envoyée comme référence",
      "La fiche de retour client est courte, factuelle et propose des solutions"
     ],
     "lexique": [
      {
       "terme": "Rapport de contrôle",
       "def": "Document listant les anomalies détectées lors du contrôle en amont d'un fichier."
      },
      {
       "terme": "Faux positif",
       "def": "Anomalie signalée par le logiciel qui n'a pas de conséquence réelle."
      },
      {
       "terme": "Résolution effective",
       "def": "Résolution d'une image à sa taille d'utilisation dans la mise en page."
      },
      {
       "terme": "Épreuve contractuelle",
       "def": "Épreuve couleur vérifiable qui engage sur le rendu attendu de l'impression."
      },
      {
       "terme": "ISO 12647-7",
       "def": "Norme définissant les exigences des épreuves contractuelles réalisées à partir de données numériques."
      },
      {
       "terme": "Media Wedge",
       "def": "Barre de contrôle d'épreuve Ugra/Fogra mesurée pour vérifier la conformité."
      },
      {
       "terme": "Étiquette d'épreuve",
       "def": "Bandeau d'identification imprimé sur l'épreuve : fichier, date, système, condition simulée, résultat."
      },
      {
       "terme": "Fiche de retour",
       "def": "Message au client qui résume les anomalies, leurs conséquences et les solutions proposées."
      }
     ]
    },
    {
     "id": "brpip-b-doc-releves-presse",
     "titre": "Exploiter un rapport de mesure de presse et une fiche de calage",
     "niveau": "Tle",
     "options": [
      "b"
     ],
     "duree": 40,
     "objectifs": [
      "Identifier les rubriques d'une fiche de calage et d'un rapport de mesure",
      "Lire des relevés de densité, de valeurs tonales et d'écarts colorimétriques",
      "Comparer les mesures aux cibles et aux tolérances d'une condition d'impression",
      "Formuler un diagnostic à partir des écarts constatés",
      "Proposer et justifier des actions correctives par ordre de priorité"
     ],
     "sections": [
      {
       "titre": "La fiche de calage",
       "contenu": "<p>La <strong>fiche de calage</strong> (ou fiche de réglage, fiche machine) accompagne un travail au poste d'impression. Elle reprend les données du dossier utiles au conducteur et recueille les réglages réalisés, réutilisables lors d'une réimpression. Une fiche typique comprend :</p>\n<table><thead><tr><th>Rubrique</th><th>Exemples de contenu</th></tr></thead><tbody>\n<tr><td>Identification</td><td>Numéro de dossier, client, travail, cahier ou forme, face</td></tr>\n<tr><td>Support</td><td>Référence, grammage, format de feuille, sens des fibres, lot</td></tr>\n<tr><td>Couleurs et ordre</td><td>Notation des couleurs, ordre des groupes, tons directs et leur formule</td></tr>\n<tr><td>Formes</td><td>Nombre de plaques, linéature, type de trame, courbe appliquée</td></tr>\n<tr><td>Réglages</td><td>Habillages, pressions, taquets, réglages du margeur, vitesse</td></tr>\n<tr><td>Mouillage</td><td>Valeur de dosage, pH et conductivité relevés, taux d'alcool éventuel</td></tr>\n<tr><td>Cibles</td><td>Condition d'impression, densités ou valeurs Lab cibles, engraissements cibles</td></tr>\n<tr><td>Finitions en ligne</td><td>Vernis, poudre, sécheurs</td></tr>\n<tr><td>Quantités et temps</td><td>Feuilles prévues, passe, temps de calage, BAR signé à telle heure</td></tr>\n</tbody></table>\n<p>Elle est complétée par le <strong>rapport de mesure</strong>, imprimé ou enregistré par le système de mesure de la presse au moment du BAR et à intervalles réguliers pendant le tirage.</p>"
      },
      {
       "titre": "La structure d'un rapport de mesure",
       "contenu": "<p>Le rapport de mesure d'une barre de contrôle se présente généralement sous trois formes complémentaires :</p>\n<ul>\n<li>un <strong>tableau par couleur</strong> : valeur cible, valeur mesurée moyenne, écart, et verdict (conforme ou non) pour les aplats (densité et ou ΔE), les engraissements à une ou plusieurs valeurs tonales, les superpositions et les gris ;</li>\n<li>un <strong>profil par zones</strong> : pour chaque couleur, un graphique ou une ligne de valeurs zone par zone sur la largeur de la feuille, qui montre l'uniformité de l'encrage ;</li>\n<li>un <strong>historique</strong> : l'évolution des valeurs au fil du tirage, feuille de BAR puis prélèvements successifs.</li>\n</ul>\n<p>Le rapport indique aussi les <strong>conditions de mesure</strong> : instrument, condition M0, M1 ou M2, filtre de densité (status), fond de mesure, référence papier. Comme pour toute mesure, on vérifie ces conditions avant de comparer à une cible.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une moyenne conforme peut cacher une zone très hors tolérance. Un aplat cyan moyen à 1,45 pour une cible de 1,45 peut résulter de zones à 1,35 et d'autres à 1,55. On lit toujours le profil par zones en plus de la moyenne.</div>"
      },
      {
       "titre": "Méthode d'analyse des relevés",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un rapport de mesure en six temps. 1. <strong>Vérifier le cadre</strong> : bon dossier, bonne face, conditions de mesure et cibles conformes à la fiche de calage. 2. <strong>Aplats</strong> : comparer chaque couleur à sa cible ; noter les écarts et leur signe (trop ou pas assez d'encre). 3. <strong>Uniformité</strong> : lire le profil par zones et repérer les zones hors tolérance, en les reliant à la répartition de l'image sur la feuille. 4. <strong>Engraissement</strong> : comparer chaque couleur à la cible ; un engraissement trop fort sur toutes les couleurs oriente vers une cause commune (pression, papier, courbe de plaque) ; sur une seule couleur, vers son groupe (blanchet, émulsion, encrage excessif). 5. <strong>Gris et superpositions</strong> : vérifier la balance des gris et l'acceptation. 6. <strong>Conclure</strong> en hiérarchisant : d'abord ce qui rend le produit non conforme, ensuite ce qui menace de le devenir, et proposer les corrections dans un ordre logique (on corrige l'encrage avant de juger l'engraissement, qui en dépend).</div>\n<p>L'ordre logique est important : l'engraissement mesuré dépend de la densité de l'aplat. Si l'aplat est trop chargé, l'engraissement sera trop élevé ; corriger d'abord la courbe de plaque serait une erreur.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Travail : catalogue, cahier 2, recto ; offset feuilles sur papier couché brillant 115 g/m², ordre N-C-M-J. Mesures en densité status E, référence papier, et engraissement à 50 % calculé par Murray-Davies. Prélèvement à la feuille 4 000 sur 12 000.</p>\n<table><thead><tr><th>Couleur</th><th>Densité cible</th><th>Densité moyenne</th><th>Plus faible zone</th><th>Plus forte zone</th><th>Engraissement 50 % cible</th><th>Engraissement mesuré</th></tr></thead><tbody>\n<tr><td>Noir</td><td>1,80</td><td>1,79</td><td>1,76</td><td>1,82</td><td>15</td><td>16</td></tr>\n<tr><td>Cyan</td><td>1,45</td><td>1,46</td><td>1,42</td><td>1,49</td><td>15</td><td>17</td></tr>\n<tr><td>Magenta</td><td>1,45</td><td>1,58</td><td>1,52</td><td>1,64</td><td>15</td><td>22</td></tr>\n<tr><td>Jaune</td><td>1,05</td><td>1,04</td><td>1,01</td><td>1,07</td><td>15</td><td>16</td></tr>\n</tbody></table>\n<p>Tolérances de travail fixées par l'atelier : densité ± 0,07 ; engraissement ± 4 points. Autres relevés : gris trichrome légèrement rougeâtre par rapport au gris noir (Δa* de + 2,5) ; pH du mouillage 5,0, conductivité stable ; au BAR (feuille 300), le magenta mesurait 1,47 et son engraissement 16.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Cadre.</strong> Les conditions de mesure (status E, référence papier) et les cibles correspondent à un offset sur papier couché ; le relevé est exploitable.</p>\n<p><strong>Aplats.</strong> Noir, cyan et jaune sont dans la tolérance de ± 0,07, sur la moyenne comme sur les zones extrêmes. Le magenta est hors tolérance : moyenne 1,58 pour 1,45, soit + 0,13, et toutes ses zones sont au-dessus de la limite (la plus faible, 1,52, est déjà à + 0,07). L'excès est donc général sur la largeur de la feuille.</p>\n<p><strong>Engraissement.</strong> Le magenta présente un engraissement de 22 points pour une cible de 15, soit + 7, hors tolérance. Les autres couleurs sont conformes, le cyan légèrement haut (+ 2) mais dans la tolérance. Comme une seule couleur est touchée et que sa densité est elle-même trop forte, la cause la plus probable est un excès d'encre magenta, l'engraissement suivant la densité. Il n'y a pas lieu de soupçonner la pression ou le papier, qui toucheraient toutes les couleurs.</p>\n<p><strong>Gris.</strong> La dominante rougeâtre du gris trichrome (Δa* positif) est cohérente avec l'excès de magenta.</p>\n<p><strong>Évolution.</strong> Au BAR, le magenta était conforme (1,47 et 16). La dérive s'est produite pendant le tirage : il s'agit d'une cause spéciale à rechercher, par exemple une ouverture générale d'encrage modifiée, une montée de température des rouleaux, ou une modification de la régulation.</p>\n<p><strong>Actions, par ordre de priorité.</strong> 1. Réduire l'encrage magenta globalement, puis vérifier les zones après stabilisation. 2. Remesurer : la densité doit revenir vers 1,45 et l'engraissement vers 15 à 17 ; la dominante du gris doit disparaître. 3. Isoler et contrôler les feuilles imprimées depuis le dernier prélèvement conforme, à l'aide de marque-piles, pour décider de leur tri. 4. Rechercher la cause de la dérive et la noter sur la fiche de suivi. 5. Si l'engraissement reste élevé avec une densité revenue à la cible, examiner le blanchet magenta et l'émulsion.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la démarche d'analyse d'un relevé suit toujours le même fil : cadre, aplats, uniformité, engraissement, gris, évolution dans le temps. Une seule couleur hors tolérance oriente vers son groupe ; une densité trop forte explique souvent à elle seule un engraissement trop fort.</div>"
      },
      {
       "titre": "Les pièges de lecture et la rédaction de la réponse",
       "contenu": "<p>Plusieurs erreurs reviennent souvent lorsqu'on analyse un relevé de presse :</p>\n<ul>\n<li>comparer des densités mesurées avec des filtres de status différents, ou une mesure avec référence papier à une cible exprimée en absolu ;</li>\n<li>conclure sur une seule feuille alors qu'une variation d'une feuille à l'autre est normale ; on s'appuie sur plusieurs prélèvements ou sur l'historique ;</li>\n<li>attribuer à la presse un écart dont la cause est en amont : courbe de plaque erronée, mauvaise condition d'impression choisie au prépresse, papier différent de celui prévu ;</li>\n<li>proposer simultanément plusieurs corrections sans ordre, ce qui empêche de savoir laquelle a agi ;</li>\n<li>oublier les feuilles déjà produites : une correction ne règle que la suite du tirage.</li>\n</ul>\n<p>Une réponse rédigée suit le plan du raisonnement : constat chiffré (valeur mesurée, cible, écart, tolérance), interprétation (ce que l'écart signifie sur l'imprimé), cause probable justifiée, action corrective et vérification prévue. Chaque phrase s'appuie sur une valeur du document. Par exemple : « Le magenta mesure 1,58 pour une cible de 1,45 ; l'écart de + 0,13 dépasse la tolérance de 0,07 ; l'imprimé présente une dominante rouge, confirmée par le gris trichrome. »</p>"
      }
     ],
     "points_cles": [
      "La fiche de calage reprend les données du dossier et enregistre les réglages réutilisables",
      "Le rapport de mesure présente tableau par couleur, profil par zones et historique",
      "Vérifier les conditions de mesure et les cibles avant toute comparaison",
      "Une moyenne conforme peut masquer des zones hors tolérance",
      "Corriger l'encrage avant de juger l'engraissement, qui dépend de la densité",
      "Une seule couleur touchée : cause dans son groupe ; toutes les couleurs : cause commune",
      "Une dérive après le BAR révèle une cause spéciale à rechercher",
      "Isoler les feuilles produites depuis le dernier contrôle conforme"
     ],
     "lexique": [
      {
       "terme": "Fiche de calage",
       "def": "Document de poste regroupant données du travail et réglages réalisés."
      },
      {
       "terme": "Rapport de mesure",
       "def": "Relevé des valeurs mesurées sur la barre de contrôle, comparées aux cibles."
      },
      {
       "terme": "Profil par zones",
       "def": "Valeurs mesurées zone d'encrier par zone sur la largeur de la feuille."
      },
      {
       "terme": "Status E",
       "def": "Réponse spectrale normalisée des filtres de densitomètre utilisée en Europe."
      },
      {
       "terme": "Référence papier",
       "def": "Mesure dans laquelle la densité du papier est soustraite de celle de l'encre."
      },
      {
       "terme": "Dérive",
       "def": "Évolution progressive d'une valeur mesurée qui s'éloigne de sa cible."
      },
      {
       "terme": "Prélèvement",
       "def": "Feuille retirée à intervalle régulier pour contrôle."
      },
      {
       "terme": "Gris trichrome",
       "def": "Gris obtenu par superposition de cyan, magenta et jaune."
      }
     ]
    },
    {
     "id": "brpip-doc-fds-notice",
     "titre": "Exploiter une fiche de données de sécurité et une notice d'équipement",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Repérer les seize rubriques d'une fiche de données de sécurité et celles utiles au poste",
      "Interpréter les mentions de danger, conseils de prudence et pictogrammes",
      "Choisir les équipements de protection et les conditions de stockage à partir de la FDS",
      "Exploiter une notice d'équipement : caractéristiques, consignes de sécurité, procédures",
      "Rédiger une consigne de poste à partir de ces documents"
     ],
     "sections": [
      {
       "titre": "La fiche de données de sécurité : un document normalisé",
       "contenu": "<p>La <strong>fiche de données de sécurité</strong> (FDS) est obligatoire pour les produits chimiques dangereux mis sur le marché européen. Elle est rédigée par le fournisseur selon le règlement européen REACH (annexe II) et doit être remise à l'utilisateur professionnel dans sa langue. Elle comprend toujours <strong>seize rubriques</strong>, dans un ordre fixe :</p>\n<table><thead><tr><th>N°</th><th>Rubrique</th><th>Utilité au poste</th></tr></thead><tbody>\n<tr><td>1</td><td>Identification du produit et du fournisseur</td><td>Vérifier qu'il s'agit du bon produit ; numéro d'appel d'urgence</td></tr>\n<tr><td>2</td><td>Identification des dangers</td><td>Pictogrammes, mention d'avertissement, mentions de danger</td></tr>\n<tr><td>3</td><td>Composition</td><td>Substances dangereuses et concentrations</td></tr>\n<tr><td>4</td><td>Premiers secours</td><td>Conduite à tenir en cas d'exposition</td></tr>\n<tr><td>5</td><td>Mesures de lutte contre l'incendie</td><td>Moyens d'extinction adaptés</td></tr>\n<tr><td>6</td><td>Mesures en cas de dispersion accidentelle</td><td>Que faire en cas de fuite</td></tr>\n<tr><td>7</td><td>Manipulation et stockage</td><td>Conditions de stockage, incompatibilités</td></tr>\n<tr><td>8</td><td>Contrôle de l'exposition, protection individuelle</td><td>VLEP, ventilation, type de gants, lunettes, protection respiratoire</td></tr>\n<tr><td>9</td><td>Propriétés physiques et chimiques</td><td>Point éclair, volatilité, odeur</td></tr>\n<tr><td>10</td><td>Stabilité et réactivité</td><td>Conditions à éviter, produits incompatibles</td></tr>\n<tr><td>11</td><td>Informations toxicologiques</td><td>Effets sur la santé</td></tr>\n<tr><td>12</td><td>Informations écologiques</td><td>Effets sur l'environnement</td></tr>\n<tr><td>13</td><td>Considérations relatives à l'élimination</td><td>Filière de déchets</td></tr>\n<tr><td>14</td><td>Informations relatives au transport</td><td>Classement pour le transport</td></tr>\n<tr><td>15</td><td>Informations réglementaires</td><td>Textes applicables</td></tr>\n<tr><td>16</td><td>Autres informations</td><td>Date de révision, signification des abréviations</td></tr>\n</tbody></table>\n<p>Pour l'opérateur, les rubriques 2, 4, 7, 8 et 13 sont les plus directement utiles. Les rubriques 5 et 6 concernent les situations d'urgence.</p>"
      },
      {
       "titre": "Lire les mentions et les pictogrammes",
       "contenu": "<p>La rubrique 2 reprend l'étiquetage selon le règlement CLP :</p>\n<ul>\n<li>les <strong>pictogrammes</strong> de danger, losanges à bordure rouge sur fond blanc ;</li>\n<li>une <strong>mention d'avertissement</strong> : « Danger » (catégories les plus graves) ou « Attention » ;</li>\n<li>des <strong>mentions de danger</strong>, codées H suivi de trois chiffres (le premier chiffre indique la famille : 2 pour les dangers physiques, 3 pour la santé, 4 pour l'environnement) ;</li>\n<li>des <strong>conseils de prudence</strong>, codés P suivi de trois chiffres (1 généralités, 2 prévention, 3 intervention, 4 stockage, 5 élimination).</li>\n</ul>\n<table><thead><tr><th>Exemple de mention</th><th>Signification</th></tr></thead><tbody>\n<tr><td>H226</td><td>Liquide et vapeurs inflammables</td></tr>\n<tr><td>H304</td><td>Peut être mortel en cas d'ingestion et de pénétration dans les voies respiratoires</td></tr>\n<tr><td>H317</td><td>Peut provoquer une allergie cutanée</td></tr>\n<tr><td>H319</td><td>Provoque une sévère irritation des yeux</td></tr>\n<tr><td>H336</td><td>Peut provoquer somnolence ou vertiges</td></tr>\n<tr><td>P280</td><td>Porter des gants de protection, des vêtements de protection, un équipement de protection des yeux ou du visage</td></tr>\n<tr><td>P403 + P235</td><td>Stocker dans un endroit bien ventilé et maintenir au frais</td></tr>\n</tbody></table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'expression « gants de protection » ne suffit pas. La rubrique 8 doit préciser la matière (nitrile, butyle, néoprène…), l'épaisseur et le temps de passage du produit à travers le gant. Un gant en latex fin, inadapté à de nombreux solvants, ne protège presque pas.</div>"
      },
      {
       "titre": "La notice d'équipement",
       "contenu": "<p>La <strong>notice d'instructions</strong> d'une machine est obligatoire : le fabricant doit la fournir en français pour une utilisation en France. Elle accompagne le marquage CE, qui atteste la conformité aux exigences de la réglementation européenne relative aux machines. Elle comprend en général :</p>\n<ul>\n<li>les <strong>caractéristiques techniques</strong> : formats mini et maxi, grammages ou épaisseurs admissibles, vitesses, puissance électrique, air comprimé, niveau sonore déclaré, dimensions et masse ;</li>\n<li>les <strong>consignes de sécurité</strong> : zones dangereuses, dispositifs de protection (protecteurs fixes et mobiles, barrières immatérielles, commandes bimanuelles, arrêts d'urgence), risques résiduels, équipements de protection requis ;</li>\n<li>les <strong>procédures d'utilisation</strong> : mise en route, réglages, modes de marche, arrêt ;</li>\n<li>les <strong>procédures de maintenance</strong> : périodicités, plan de graissage, pièces d'usure, opérations réservées au personnel qualifié ;</li>\n<li>le <strong>diagnostic</strong> : tableau des codes d'erreur et des pannes avec leurs causes et remèdes.</li>\n</ul>\n<p>Les notices utilisent des symboles et des mots signaux normalisés pour hiérarchiser les dangers : « Danger » (risque de blessure grave ou mortelle imminente), « Avertissement », « Attention » (risque de blessure légère ou de dommage matériel), « Remarque » (information).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la notice complète reste souvent au bureau des méthodes ; au poste, on affiche une <strong>consigne de poste</strong> courte, rédigée à partir de la notice et de l'évaluation des risques, avec les gestes essentiels, les interdits et les équipements de protection. C'est cette consigne qu'on peut être amené à rédiger.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Extraits de la FDS d'un produit de lavage pour blanchets et rouleaux offset (produit fictif représentatif, nommé ici « Nettoyant L »).</p>\n<table><thead><tr><th>Rubrique</th><th>Extrait</th></tr></thead><tbody>\n<tr><td>2</td><td>Pictogrammes : flamme, danger pour la santé (silhouette avec étoile), point d'exclamation. Mention d'avertissement : Danger. H226, H304, H336. P210 : tenir à l'écart de la chaleur, des surfaces chaudes, des étincelles, des flammes nues et de toute autre source d'inflammation ; ne pas fumer. P280. P301 + P310 : en cas d'ingestion, appeler immédiatement un centre antipoison ou un médecin. P331 : ne pas faire vomir.</td></tr>\n<tr><td>7</td><td>Stocker dans le récipient d'origine fermé, dans un local ventilé, à l'écart des oxydants. Prévoir une rétention.</td></tr>\n<tr><td>8</td><td>Ventilation locale. Gants en nitrile d'épaisseur au moins 0,4 mm, temps de passage supérieur à 480 min. Lunettes de protection avec protections latérales. En cas de ventilation insuffisante, appareil de protection respiratoire avec filtre de type A.</td></tr>\n<tr><td>9</td><td>Liquide incolore, odeur d'hydrocarbure, point éclair 42 °C.</td></tr>\n<tr><td>13</td><td>Éliminer comme déchet dangereux ; les chiffons souillés suivent la même filière.</td></tr>\n</tbody></table>\n<p>Extrait de la notice du laveur automatique de blanchets de la presse : « Le lavage manuel des blanchets doit être effectué presse à l'arrêt, en mode lavage, protecteurs ouverts uniquement selon la procédure du chapitre Sécurité. Ne jamais pulvériser de produit de lavage sur des surfaces chaudes. »</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Dangers identifiés.</strong> Le produit est inflammable (H226, point éclair 42 °C : il peut s'enflammer si l'on approche une source de chaleur ou d'étincelle, notamment près des sécheurs infrarouges). Il présente un danger d'aspiration en cas d'ingestion (H304), d'où l'interdiction de faire vomir (P331). Ses vapeurs peuvent provoquer somnolence ou vertiges (H336) : une exposition prolongée dans un local mal ventilé peut entraîner une perte de vigilance près de machines en mouvement.</p>\n<p><strong>Protection.</strong> Mesures collectives d'abord : ventilation locale, laveur automatique qui réduit la manipulation. Protection individuelle : gants nitrile d'au moins 0,4 mm, lunettes à protections latérales ; protection respiratoire à filtre A seulement si la ventilation est insuffisante.</p>\n<p><strong>Stockage et déchets.</strong> Récipient d'origine fermé, local ventilé, rétention, à l'écart des oxydants ; quantité au poste limitée au besoin de la journée. Chiffons et fonds de bidons en déchets dangereux, en conteneur métallique fermé.</p>\n<p><strong>Croisement avec la notice.</strong> La notice interdit la pulvérisation sur surfaces chaudes, ce qui rejoint le danger d'inflammabilité de la FDS. Le lavage manuel exige l'arrêt de la presse et le mode lavage : le danger mécanique (happement) s'ajoute au danger chimique.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger une consigne de poste à partir des deux documents. 1. Titre explicite : « Lavage manuel des blanchets avec Nettoyant L ». 2. Pictogrammes du produit et des EPI obligatoires en tête. 3. Avant : presse à l'arrêt en mode lavage, sécheurs éteints et refroidis, ventilation en marche, gants nitrile et lunettes portés. 4. Pendant : produit appliqué sur chiffon, jamais pulvérisé, quantité minimale, flacon refermé après usage. 5. Après : chiffons dans le conteneur métallique fermé, flacon rangé dans l'armoire sur rétention, protecteurs refermés avant remise en marche. 6. En cas d'accident : projection oculaire, rinçage 15 minutes ; ingestion, ne pas faire vomir, appeler le 15 ou le centre antipoison. 7. Date, version, nom du rédacteur et du valideur.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une analyse de FDS utile croise toujours les dangers (rubrique 2), les propriétés (rubrique 9) et la situation réelle de travail (machine, chaleur, ventilation). C'est ce croisement qui transforme une liste de codes en consignes concrètes.</div>"
      }
     ],
     "points_cles": [
      "La FDS comporte toujours seize rubriques dans un ordre fixe, selon REACH",
      "Rubriques clés au poste : 2 dangers, 4 premiers secours, 7 stockage, 8 protection, 13 élimination",
      "Mentions H : 2 physique, 3 santé, 4 environnement ; conseils P : prévention, intervention, stockage, élimination",
      "La rubrique 8 précise la matière, l'épaisseur et le temps de passage des gants",
      "La notice de machine, en français, accompagne le marquage CE",
      "Notice : caractéristiques, sécurité, utilisation, maintenance, diagnostic",
      "Croiser la FDS et la notice avec la situation réelle du poste",
      "Une consigne de poste est courte : avant, pendant, après, en cas d'accident"
     ],
     "lexique": [
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité, document à seize rubriques décrivant les dangers d'un produit et les mesures de prévention."
      },
      {
       "terme": "REACH",
       "def": "Règlement européen sur l'enregistrement, l'évaluation et l'autorisation des substances chimiques."
      },
      {
       "terme": "Mention de danger",
       "def": "Phrase codée H décrivant la nature d'un danger."
      },
      {
       "terme": "Conseil de prudence",
       "def": "Phrase codée P décrivant une mesure de prévention ou d'intervention."
      },
      {
       "terme": "Point éclair",
       "def": "Température minimale à laquelle un liquide émet assez de vapeurs pour s'enflammer au contact d'une flamme."
      },
      {
       "terme": "Temps de passage",
       "def": "Durée au bout de laquelle un produit chimique traverse un gant de protection."
      },
      {
       "terme": "Marquage CE",
       "def": "Marquage attestant la conformité d'un produit aux exigences européennes applicables."
      },
      {
       "terme": "Risque résiduel",
       "def": "Risque qui subsiste malgré les mesures de protection intégrées à la machine."
      },
      {
       "terme": "Consigne de poste",
       "def": "Document court affiché au poste, fixant gestes, interdits et protections."
      }
     ]
    },
    {
     "id": "brpip-doc-planning-suivi",
     "titre": "Lire un planning, une fiche de suivi et un tableau de bord de production",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Lire un planning d'atelier sous forme de diagramme de Gantt et en extraire les contraintes",
      "Exploiter une fiche de suivi de production renseignée",
      "Calculer des écarts entre prévu et réalisé et des indicateurs de production",
      "Interpréter un tableau de bord d'atelier",
      "Proposer des actions d'amélioration à partir de ces données"
     ],
     "sections": [
      {
       "titre": "Le planning d'atelier",
       "contenu": "<p>Le planning d'atelier se présente le plus souvent comme un <strong>diagramme de Gantt</strong> : une ligne par poste (prépresse, CtP, presse 1, presse 2, plieuse, massicot, encarteuse-piqueuse…), une échelle de temps horizontale (heures, demi-journées ou jours), et des barres qui représentent les travaux, chacune portant le numéro de dossier. Des couleurs ou des symboles indiquent l'état : prévu, en cours, terminé, en attente d'un élément (BAT, papier), en retard.</p>\n<p>Pour l'exploiter, on lit :</p>\n<ul>\n<li>la <strong>charge</strong> de chaque poste : un poste dont la ligne est pleine est un <strong>goulot d'étranglement</strong> potentiel ;</li>\n<li>les <strong>enchaînements</strong> d'un même dossier d'un poste à l'autre, avec les temps d'attente (séchage) ;</li>\n<li>les <strong>dates butoirs</strong> de livraison ;</li>\n<li>les éléments <strong>en attente</strong>, qui menacent le planning.</li>\n</ul>\n<p>Le planning est un document vivant : il est mis à jour plusieurs fois par jour dans les grandes entreprises, souvent sur écran à partir du logiciel de gestion de production. Une version imprimée datée doit toujours indiquer son heure d'édition.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un planning ne montre que ce qui a été prévu. Une barre posée sur une presse ne garantit pas que le papier est arrivé ni que les plaques sont prêtes. Avant de lancer un calage, on vérifie la disponibilité de tous les éléments d'entrée.</div>"
      },
      {
       "titre": "La fiche de suivi de production",
       "contenu": "<p>La <strong>fiche de suivi</strong> (ou bon de travail, rapport de poste) enregistre ce qui s'est réellement passé. Qu'elle soit papier ou saisie sur terminal, elle comprend :</p>\n<table><thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead><tbody>\n<tr><td>Identification</td><td>Dossier, poste, opérateur, date, équipe</td></tr>\n<tr><td>Temps</td><td>Heures de début et de fin de chaque phase : calage, production, nettoyage, arrêts</td></tr>\n<tr><td>Quantités</td><td>Quantité entrée, quantité bonne, gâche de calage, gâche de production</td></tr>\n<tr><td>Arrêts</td><td>Durée et cause codée : panne, attente matière, attente validation, réglage, nettoyage</td></tr>\n<tr><td>Contrôles</td><td>Résultats des autocontrôles, références des prélèvements</td></tr>\n<tr><td>Consommations</td><td>Plaques, encre, consommables particuliers</td></tr>\n<tr><td>Observations</td><td>Incidents, non-conformités, propositions</td></tr>\n</tbody></table>\n<p>Les données de toutes les fiches alimentent le <strong>tableau de bord</strong> de l'atelier, qui rassemble quelques <strong>indicateurs</strong> suivis dans le temps : taux de gâche, temps moyen de calage, taux d'arrêt, respect des délais, nombre de réclamations, TRS.</p>"
      },
      {
       "titre": "Méthode d'exploitation",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser des données de suivi en cinq étapes. 1. <strong>Identifier</strong> le périmètre : quel poste, quelle période, quels dossiers. 2. <strong>Calculer les écarts</strong> prévu - réalisé pour les temps et les quantités, en valeur et en pourcentage : écart en % = (réalisé - prévu) ÷ prévu × 100. 3. <strong>Calculer les indicateurs</strong> demandés avec leur formule écrite : taux de gâche = gâche ÷ quantité totale passée × 100 ; cadence nette réalisée = quantité passée ÷ temps de production ; disponibilité = temps de fonctionnement ÷ temps d'ouverture. 4. <strong>Interpréter</strong> : comparer aux objectifs, rechercher les causes dans les rubriques d'arrêts et d'observations, distinguer un événement isolé d'une tendance. 5. <strong>Proposer</strong> une ou deux actions précises, réalistes et mesurables, en indiquant l'indicateur qui permettra d'en vérifier l'effet.</div>\n<p>Une proposition se rédige de façon précise : « Préparer encres, plaques et papier pendant le tirage précédent pour réduire le temps de calage moyen de 35 à 25 minutes, vérifié sur le tableau de bord du mois suivant » est une proposition exploitable ; « mieux s'organiser » ne l'est pas.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Extrait du suivi de la presse offset 4 couleurs, journée du mardi, équipe du matin (ouverture du poste : 7 h 00 à 14 h 00, soit 7 heures).</p>\n<table><thead><tr><th>Dossier</th><th>Calage prévu</th><th>Calage réel</th><th>Feuilles bonnes prévues</th><th>Feuilles passées</th><th>Feuilles bonnes</th><th>Production réelle</th><th>Observations</th></tr></thead><tbody>\n<tr><td>25-0398</td><td>25 min</td><td>30 min</td><td>4 000</td><td>4 250</td><td>4 020</td><td>32 min</td><td>RAS</td></tr>\n<tr><td>25-0402</td><td>25 min</td><td>65 min</td><td>6 000</td><td>6 600</td><td>6 010</td><td>48 min</td><td>Attente plaque magenta refaite (25 min), voile au démarrage</td></tr>\n<tr><td>25-0405</td><td>30 min</td><td>35 min</td><td>8 000</td><td>8 400</td><td>8 050</td><td>62 min</td><td>Ton direct, lavage groupe 4</td></tr>\n</tbody></table>\n<p>Autres arrêts de la matinée : nettoyage de fin de poste 20 min ; pause 20 min ; bourrage margeur 10 min. Objectif de l'atelier : taux de gâche inférieur à 6 %, temps de calage moyen au plus 30 minutes.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Temps de calage.</strong> Total prévu : 25 + 25 + 30 = 80 min ; total réel : 30 + 65 + 35 = 130 min. Écart : + 50 min, soit + 62,5 %. Le calage moyen réel est de 130 ÷ 3 ≈ 43 min, au-dessus de l'objectif de 30 min. L'essentiel de l'écart vient du dossier 25-0402 (+ 40 min), dont 25 min d'attente d'une plaque refaite : le problème est né en amont, au CtP ou au contrôle des plaques, et non à la presse.</p>\n<p><strong>Gâche.</strong> Feuilles passées : 4 250 + 6 600 + 8 400 = 19 250 ; feuilles bonnes : 4 020 + 6 010 + 8 050 = 18 080 ; gâche : 1 170 feuilles. Taux de gâche global : 1 170 ÷ 19 250 × 100 ≈ 6,1 %, légèrement au-dessus de l'objectif. Par dossier : 25-0398, 230 ÷ 4 250 ≈ 5,4 % ; 25-0402, 590 ÷ 6 600 ≈ 8,9 % ; 25-0405, 350 ÷ 8 400 ≈ 4,2 %. Le dossier 25-0402 concentre la gâche, en lien avec le voile au démarrage.</p>\n<p><strong>Quantités.</strong> Les trois dossiers atteignent la quantité de feuilles bonnes prévue : les clients seront livrés complets.</p>\n<p><strong>Utilisation du temps.</strong> Temps d'ouverture : 420 min. Temps de production : 32 + 48 + 62 = 142 min. Calages : 130 min. Nettoyage : 20 min. Bourrage : 10 min. Total expliqué : 302 min, auquel s'ajoute la pause de 20 min, soit 322 min. Il reste environ 98 min non expliquées par la fiche : il faut les retrouver (attentes non déclarées, manutentions, réunion) car elles faussent le calcul de la disponibilité.</p>\n<p><strong>Propositions.</strong> 1. Contrôler systématiquement les plaques avant leur arrivée à la presse (identification, gamme de contrôle), pour éviter les attentes de plaque refaite ; indicateur : nombre de plaques refaites par semaine. 2. Pour le voile au démarrage, vérifier la procédure de mise en eau et l'état de la solution de mouillage ; indicateur : gâche de calage par dossier. 3. Renseigner tous les temps d'arrêt sur la fiche, pour fiabiliser le tableau de bord.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'analyse d'une fiche de suivi se fait chiffres à l'appui, avec les formules écrites, puis en remontant aux causes indiquées dans les observations. Un écart à la presse n'est pas toujours la faute de la presse : il faut regarder les postes en amont.</div>"
      },
      {
       "titre": "Les indicateurs du tableau de bord",
       "contenu": "<p>Un tableau de bord d'atelier ne retient qu'un petit nombre d'indicateurs, choisis pour leur lien avec les objectifs de l'entreprise. Chacun est défini par une formule, une fréquence de calcul, un objectif et un responsable.</p>\n<table><thead><tr><th>Indicateur</th><th>Formule</th><th>Ce qu'il révèle</th></tr></thead><tbody>\n<tr><td>Taux de gâche</td><td>Gâche ÷ quantité totale passée × 100</td><td>Pertes de matière, maîtrise du calage et du tirage</td></tr>\n<tr><td>Temps moyen de calage</td><td>Somme des temps de calage ÷ nombre de calages</td><td>Efficacité des changements de série</td></tr>\n<tr><td>Taux de service (respect des délais)</td><td>Commandes livrées à l'heure ÷ commandes livrées × 100</td><td>Fiabilité vis-à-vis des clients</td></tr>\n<tr><td>Taux de réclamation</td><td>Commandes avec réclamation ÷ commandes livrées × 100</td><td>Qualité perçue par le client</td></tr>\n<tr><td>Disponibilité</td><td>Temps de fonctionnement ÷ temps d'ouverture × 100</td><td>Poids des pannes et des attentes</td></tr>\n<tr><td>TRS</td><td>Disponibilité × performance × taux de qualité</td><td>Efficacité globale de l'équipement</td></tr>\n</tbody></table>\n<p>Les indicateurs se lisent en <strong>tendance</strong>, sur plusieurs semaines, et non sur une seule journée. Un graphique en courbe avec la ligne d'objectif permet de voir immédiatement si l'atelier progresse. Un indicateur n'a de valeur que si les données de base sont fiables : d'où l'importance de fiches de suivi complètes.</p>"
      }
     ],
     "points_cles": [
      "Le planning de Gantt montre la charge des postes, les enchaînements, les dates butoirs et les attentes",
      "Un poste saturé est un goulot d'étranglement potentiel",
      "Vérifier la disponibilité des éléments d'entrée avant de lancer un calage prévu au planning",
      "La fiche de suivi enregistre temps, quantités, arrêts codés, contrôles, consommations et observations",
      "Écart en % = (réalisé - prévu) ÷ prévu × 100",
      "Taux de gâche = gâche ÷ quantité totale passée × 100",
      "Rechercher les causes dans les observations et distinguer événement isolé et tendance",
      "Proposer des actions précises, mesurables, avec l'indicateur de vérification"
     ],
     "lexique": [
      {
       "terme": "Planning d'atelier",
       "def": "Programmation des travaux sur les postes de production dans le temps."
      },
      {
       "terme": "Goulot d'étranglement",
       "def": "Poste dont la capacité limite la production de tout l'atelier."
      },
      {
       "terme": "Date butoir",
       "def": "Date limite qui ne peut pas être dépassée."
      },
      {
       "terme": "Fiche de suivi",
       "def": "Enregistrement des temps, quantités, arrêts et incidents d'un travail sur un poste."
      },
      {
       "terme": "Tableau de bord",
       "def": "Ensemble d'indicateurs suivis dans le temps pour piloter l'atelier."
      },
      {
       "terme": "Indicateur",
       "def": "Valeur chiffrée calculée régulièrement pour mesurer une performance."
      },
      {
       "terme": "Taux de gâche",
       "def": "Part des feuilles ou exemplaires non vendables dans la quantité totale passée."
      },
      {
       "terme": "Écart",
       "def": "Différence entre une valeur réalisée et une valeur prévue."
      },
      {
       "terme": "Temps d'ouverture",
       "def": "Durée pendant laquelle un poste est disponible pour produire."
      }
     ]
    }
   ]
  }
 ]
};
