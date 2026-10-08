/* Polymates — Seconde professionnelle — famille Hôtellerie-restauration (cours de technologie + QCM) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["fam-hotellerie"] = {
 "id": "fam-hotellerie",
 "nom": "Hôtellerie-restauration",
 "icone": "🍽️",
 "couleur": "#d8a87a",
 "intro": "La famille des métiers de l'hôtellerie-restauration réunit, en seconde professionnelle, les métiers de la cuisine et ceux du service en salle. Elle prépare aux baccalauréats professionnels Cuisine et Commercialisation et services en restauration (CSR) ; selon les annonces du ministère, la famille doit disparaître à la rentrée 2027 et la spécialité se choisirait alors dès la seconde. Ce cours couvre la partie théorique commune : connaissance du secteur, santé-sécurité, technologie culinaire et de service, produits, hygiène et HACCP, sciences de l'alimentation et calculs professionnels (fiches techniques, coûts matière, stocks).",
 "parties": [
  {
   "titre": "Partie 1 — Découvrir le secteur et ses métiers",
   "chapitres": [
    {
     "id": "fhr-secteur",
     "titre": "Le secteur de l'hôtellerie-restauration et ses métiers",
     "duree": 25,
     "objectifs": [
      "Distinguer les grandes formes de restauration (commerciale, collective) et d'hébergement.",
      "Nommer les postes d'une brigade de cuisine et d'une brigade de salle et leurs missions.",
      "Connaître les deux baccalauréats professionnels auxquels mène la seconde de la famille.",
      "Repérer les poursuites d'études et les évolutions de carrière possibles.",
      "Comprendre le rôle des périodes de formation en milieu professionnel."
     ],
     "sections": [
      {
       "titre": "Un secteur de service ouvert à tous",
       "contenu": "\n<p>L'<strong>hôtellerie-restauration</strong> regroupe les entreprises qui accueillent des clients pour les nourrir, les faire boire ou les héberger. C'est un secteur de <strong>service</strong> : le produit vendu n'est pas seulement l'assiette ou la chambre, c'est aussi l'accueil, le conseil et l'ambiance. Le secteur emploie de nombreux salariés en France et recrute en permanence, surtout dans les zones touristiques et pendant la saison.</p>\n<p>On distingue deux grandes formes de restauration.</p>\n<ul>\n<li>La <strong>restauration commerciale</strong> : le client choisit librement l'établissement et paie son repas. Elle comprend la restauration <em>traditionnelle</em> (bistrot, brasserie, restaurant gastronomique), la restauration <em>rapide</em> (service au comptoir, vente à emporter, livraison) et la restauration <em>à thème</em> (cuisine du monde, concept particulier).</li>\n<li>La <strong>restauration collective</strong> (ou sociale) : elle nourrit une population précise dans un cadre donné, souvent à prix réduit. Exemples : cantines scolaires, restaurants d'entreprise, hôpitaux, maisons de retraite, armées. Elle peut être <em>autogérée</em> (l'établissement emploie ses propres cuisiniers) ou <em>concédée</em> (une société de restauration gère le service pour le compte de l'établissement).</li>\n</ul>\n<p>L'<strong>hébergement</strong> (hôtels, résidences de tourisme, campings, chambres d'hôtes) complète le secteur. Un hôtel peut posséder son propre restaurant, un bar et un service de petits-déjeuners : cuisiniers et serveurs y travaillent aussi.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> restauration commerciale = le client choisit et paie le prix du marché ; restauration collective = une population définie (élèves, patients, salariés) dans un cadre organisé, avec des contraintes nutritionnelles et sanitaires fortes.</div>"
      },
      {
       "titre": "La brigade de cuisine",
       "contenu": "\n<p>Dans un restaurant traditionnel, les cuisiniers forment une <strong>brigade</strong> : une équipe hiérarchisée où chacun a un poste précis. Plus l'établissement est grand, plus la brigade est détaillée. Dans un petit restaurant, deux ou trois personnes assurent toutes les fonctions.</p>\n<table>\n<thead><tr><th>Poste</th><th>Missions principales</th></tr></thead>\n<tbody>\n<tr><td>Chef de cuisine</td><td>Conçoit la carte, organise la production, commande, gère l'équipe et les coûts.</td></tr>\n<tr><td>Second (sous-chef)</td><td>Remplace le chef, contrôle les postes pendant le service.</td></tr>\n<tr><td>Chef de partie</td><td>Responsable d'un poste : saucier, garde-manger (préparations froides), entremétier (légumes, garnitures, œufs), rôtisseur, poissonnier, pâtissier.</td></tr>\n<tr><td>Commis</td><td>Aide un chef de partie : épluchage, taillages, mise en place.</td></tr>\n<tr><td>Plongeur</td><td>Nettoie la batterie de cuisine et la vaisselle.</td></tr>\n</tbody>\n</table>\n<p>Pendant le service, le chef « annonce » les bons de commande et chaque poste envoie sa préparation au bon moment. Le <strong>passe</strong> est le comptoir chauffant où les assiettes terminées attendent d'être emportées en salle.</p>"
      },
      {
       "titre": "La brigade de salle et le bar",
       "contenu": "\n<p>En salle, le personnel accueille, conseille, prend les commandes et sert. Son travail a une dimension <strong>commerciale</strong> : il fait vendre et fidélise la clientèle.</p>\n<table>\n<thead><tr><th>Poste</th><th>Missions principales</th></tr></thead>\n<tbody>\n<tr><td>Directeur ou directrice de restaurant</td><td>Gère l'ensemble de la salle, le chiffre d'affaires, les plannings.</td></tr>\n<tr><td>Maître d'hôtel</td><td>Accueille, place les clients, prend les commandes, coordonne le service.</td></tr>\n<tr><td>Chef de rang</td><td>Responsable d'un <strong>rang</strong> (groupe de tables) : service, conseil, encaissement selon l'établissement.</td></tr>\n<tr><td>Commis de salle</td><td>Aide le chef de rang : mise en place, transport des plats, débarrassage.</td></tr>\n<tr><td>Sommelier ou sommelière</td><td>Conseille et sert les vins, gère la cave.</td></tr>\n<tr><td>Barman ou barmaid</td><td>Prépare et sert les boissons au bar (cafés, cocktails, bières).</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans une brasserie qui sert 200 couverts le midi, le chef de rang gère par exemple 6 tables de 4 personnes. Il travaille en lien constant avec la cuisine : il transmet les bons, annonce « on envoie la 12 » quand ses clients ont fini l'entrée, et vérifie que les plats sortent ensemble pour toute la table.</div>"
      },
      {
       "titre": "La seconde « métiers de l'hôtellerie-restauration » et les bacs pros",
       "contenu": "\n<p>La seconde professionnelle de la <strong>famille des métiers de l'hôtellerie-restauration</strong> fait découvrir les deux côtés du restaurant avant de choisir. Elle mène, en première et terminale, à deux <strong>baccalauréats professionnels</strong> (sans option) :</p>\n<ul>\n<li><strong>Bac pro Cuisine</strong> : organisation et production culinaire, dressage, communication avec la salle, gestion des approvisionnements, démarche qualité.</li>\n<li><strong>Bac pro Commercialisation et services en restauration (CSR)</strong> : accueil et relation clientèle, vente, mise en place, service des mets et des boissons, gestion du service.</li>\n</ul>\n<p>Les deux bacs partagent des <strong>compétences communes</strong> : animer et faire progresser une équipe, gérer les approvisionnements et les stocks, appliquer la démarche qualité (hygiène, sécurité, satisfaction du client). C'est pourquoi la seconde travaille à la fois la cuisine, le service, l'hygiène, les sciences de l'alimentation et la gestion.</p>\n<p>La formation comprend des <strong>périodes de formation en milieu professionnel (PFMP)</strong> : plusieurs semaines en entreprise chaque année, évaluées et prises en compte pour le diplôme.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'organisation de la seconde évolue. Le ministère a annoncé que les familles de métiers seraient supprimées à partir de la rentrée 2027 : la spécialité (Cuisine ou CSR) se choisirait alors directement en seconde. Les modalités précises restent à vérifier auprès de l'établissement et de l'Onisep. Les savoirs de ce cours restent, eux, valables dans les deux spécialités.</div>"
      },
      {
       "titre": "Poursuites d'études et évolution de carrière",
       "contenu": "\n<p>Le bac pro permet d'entrer directement dans la vie active comme commis, cuisinier, chef de rang ou serveur qualifié. Il permet aussi de poursuivre ses études :</p>\n<ul>\n<li>le <strong>BTS Management en hôtellerie-restauration (MHR)</strong>, avec une option en management de la restauration et de la production culinaire, en management du service en restauration ou en management de l'hébergement ;</li>\n<li>des formations courtes de spécialisation en un an (anciennes <strong>mentions complémentaires</strong>, progressivement transformées en certificats de spécialisation), par exemple en sommellerie, en barman ou en cuisinier en desserts de restaurant ;</li>\n<li>d'autres BTS proches (tourisme, gestion) avec un bon dossier.</li>\n</ul>\n<p>La carrière progresse souvent vite avec l'expérience : commis, puis chef de partie ou chef de rang, puis second, maître d'hôtel, chef de cuisine, et pour certains création ou reprise d'un établissement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une offre d'emploi. Exemple d'annonce décrite : « Brasserie 120 couverts recherche commis de cuisine, CDI 39 h, coupure, deux jours de repos consécutifs, nourri, débutant accepté. »<ol>\n<li>Repérer le <em>poste</em> (commis de cuisine) et le <em>type d'établissement</em> (brasserie, restauration commerciale traditionnelle).</li>\n<li>Repérer le <em>contrat</em> (CDI) et la <em>durée</em> hebdomadaire (39 h).</li>\n<li>Repérer les <em>conditions</em> : la « coupure » signifie une pause de plusieurs heures entre le service du midi et celui du soir ; « nourri » signifie que les repas sont fournis.</li>\n<li>Comparer avec son profil : « débutant accepté » indique qu'un titulaire de bac pro ou un élève en fin de formation peut postuler.</li>\n</ol></div>"
      },
      {
       "titre": "Les qualités attendues",
       "contenu": "\n<p>Les professionnels attendent des savoir-être précis : <strong>ponctualité</strong>, présentation soignée, respect des consignes d'hygiène, esprit d'équipe, résistance physique (station debout, chaleur, rythme rapide), sens du client et maîtrise de soi pendant le « coup de feu », c'est-à-dire le moment le plus chargé du service.</p>\n<p>Les horaires sont décalés : travail le soir, le week-end et les jours fériés. En contrepartie, le secteur offre une insertion rapide, la possibilité de travailler à l'étranger et une progression rapide pour les personnes motivées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> cuisine et salle forment une seule équipe. Un bon service dépend de la communication entre les deux brigades : annonces claires, respect des temps, information sur les allergies et les demandes des clients.</div>"
      }
     ],
     "points_cles": [
      "La restauration commerciale vend des repas au prix du marché ; la restauration collective nourrit une population définie.",
      "La restauration collective peut être autogérée ou concédée à une société de restauration.",
      "La brigade de cuisine comprend chef, second, chefs de partie, commis et plongeurs.",
      "La brigade de salle comprend directeur, maître d'hôtel, chefs de rang, commis, sommelier et barman.",
      "La seconde de la famille mène aux bacs pros Cuisine et CSR, qui partagent des compétences communes.",
      "Les PFMP sont des périodes en entreprise évaluées pour le diplôme.",
      "Le BTS MHR est la principale poursuite d'études après le bac pro.",
      "La suppression annoncée des familles de métiers à la rentrée 2027 conduirait à choisir la spécialité dès la seconde."
     ],
     "lexique": [
      {
       "terme": "Brigade",
       "def": "Équipe hiérarchisée de cuisine ou de salle où chaque membre occupe un poste défini."
      },
      {
       "terme": "Chef de partie",
       "def": "Cuisinier responsable d'un poste (saucier, garde-manger, entremétier, pâtissier…)."
      },
      {
       "terme": "Rang",
       "def": "Groupe de tables confié à un chef de rang."
      },
      {
       "terme": "Restauration concédée",
       "def": "Restauration collective confiée à une société spécialisée par l'établissement."
      },
      {
       "terme": "Passe",
       "def": "Comptoir chauffant entre cuisine et salle où les plats terminés sont contrôlés puis envoyés."
      },
      {
       "terme": "PFMP",
       "def": "Période de formation en milieu professionnel : stage en entreprise intégré au bac pro."
      },
      {
       "terme": "Coup de feu",
       "def": "Moment le plus intense du service, où la majorité des commandes arrivent."
      },
      {
       "terme": "Coupure",
       "def": "Pause de plusieurs heures entre le service du midi et celui du soir."
      },
      {
       "terme": "Couvert",
       "def": "Repas servi à un client ; sert d'unité pour compter l'activité d'un restaurant."
      }
     ],
     "qcm": [
      {
       "q": "Une cantine de collège gérée par une société de restauration spécialisée relève de :",
       "options": [
        "la restauration commerciale traditionnelle",
        "la restauration rapide",
        "la restauration collective concédée",
        "la restauration collective autogérée"
       ],
       "bonnes": [
        2
       ],
       "explication": "Elle nourrit une population définie (les élèves) : c'est de la restauration collective. Comme une société extérieure la gère, elle est concédée."
      },
      {
       "q": "Quel poste de la brigade de cuisine est responsable des préparations froides (entrées froides, charcuterie, découpe) ?",
       "options": [
        "Le garde-manger",
        "L'entremétier",
        "Le saucier",
        "Le rôtisseur"
       ],
       "bonnes": [
        0
       ],
       "explication": "Le garde-manger gère les préparations froides et la réserve de produits. L'entremétier s'occupe des légumes, garnitures et œufs."
      },
      {
       "q": "Le chef de rang est responsable :",
       "options": [
        "de la cave et des vins",
        "d'un groupe de tables en salle",
        "de la plonge",
        "des commandes aux fournisseurs"
       ],
       "bonnes": [
        1
       ],
       "explication": "Un rang est un groupe de tables ; le chef de rang y assure le service et le conseil, aidé par un commis."
      },
      {
       "q": "La seconde de la famille des métiers de l'hôtellerie-restauration mène à quels baccalauréats professionnels ? (deux réponses)",
       "options": [
        "Bac pro Cuisine",
        "Bac pro Boulanger-pâtissier",
        "Bac pro Commercialisation et services en restauration",
        "Bac pro Accueil"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "La famille regroupe deux spécialités : Cuisine et Commercialisation et services en restauration (CSR)."
      },
      {
       "q": "Dans une annonce, le mot « coupure » signifie :",
       "options": [
        "un risque de blessure au couteau",
        "une fermeture annuelle",
        "une réduction de salaire",
        "une pause de plusieurs heures entre deux services"
       ],
       "bonnes": [
        3
       ],
       "explication": "La coupure est le temps libre entre le service du midi et celui du soir, fréquent en restauration traditionnelle."
      },
      {
       "q": "Quel professionnel conseille les clients sur les vins et gère la cave ?",
       "options": [
        "Le maître d'hôtel",
        "Le barman",
        "Le commis de salle",
        "Le sommelier"
       ],
       "bonnes": [
        3
       ],
       "explication": "Le sommelier est le spécialiste du vin : achat, conservation en cave, conseil des accords mets-vins et service."
      },
      {
       "q": "Quelle est la principale poursuite d'études en BTS après le bac pro Cuisine ou CSR ?",
       "options": [
        "BTS Management en hôtellerie-restauration",
        "BTS Électrotechnique",
        "BTS Bâtiment",
        "BTS Métiers de la chimie"
       ],
       "bonnes": [
        0
       ],
       "explication": "Le BTS Management en hôtellerie-restauration (MHR) prolonge directement les deux bacs pros, avec trois options possibles."
      },
      {
       "q": "Selon les annonces du ministère, que changerait la rentrée 2027 pour cette seconde ?",
       "options": [
        "Le bac pro Cuisine serait supprimé",
        "Les PFMP seraient supprimées",
        "La seconde durerait deux ans",
        "La spécialité se choisirait directement en seconde"
       ],
       "bonnes": [
        3
       ],
       "explication": "La suppression annoncée des familles de métiers conduit à choisir Cuisine ou CSR dès l'entrée en seconde ; les modalités sont à vérifier."
      },
      {
       "q": "Une brasserie sert 180 couverts le midi et 120 le soir. Combien de couverts sert-elle par jour ?",
       "options": [
        "240",
        "300",
        "60",
        "360"
       ],
       "bonnes": [
        1
       ],
       "explication": "180 + 120 = 300 couverts par jour."
      },
      {
       "q": "Quelles affirmations sur les PFMP sont exactes ? (deux réponses)",
       "options": [
        "Elles se déroulent en entreprise",
        "Elles sont facultatives",
        "Elles sont évaluées pour le diplôme",
        "Elles remplacent les cours de mathématiques"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Les PFMP sont des périodes obligatoires en entreprise, intégrées à la formation et évaluées pour l'obtention du bac pro."
      }
     ]
    },
    {
     "id": "fhr-sante-securite",
     "titre": "Santé et sécurité au travail en cuisine et en salle",
     "duree": 25,
     "objectifs": [
      "Identifier les principaux risques professionnels en cuisine, en salle et à la plonge.",
      "Choisir la tenue professionnelle et les équipements de protection individuelle adaptés.",
      "Lire les pictogrammes de danger des produits d'entretien.",
      "Appliquer les gestes de prévention : couteaux, charges, surfaces chaudes, sols.",
      "Connaître le rôle du document unique d'évaluation des risques."
     ],
     "sections": [
      {
       "titre": "Des risques nombreux mais évitables",
       "contenu": "\n<p>Une cuisine professionnelle est un lieu où se rencontrent des lames tranchantes, des surfaces à plus de 200 °C, des sols mouillés, des produits chimiques et un rythme de travail rapide. La restauration fait partie des secteurs où les accidents du travail sont fréquents. La plupart peuvent être évités par l'organisation et des gestes simples.</p>\n<p>Un <strong>danger</strong> est ce qui peut causer un dommage (une friteuse à 180 °C). Un <strong>risque</strong> est la possibilité que ce dommage se produise quand une personne est exposée au danger (se brûler en déplaçant la friteuse encore chaude). La <strong>prévention</strong> consiste à supprimer le danger ou à réduire l'exposition.</p>\n<table>\n<thead><tr><th>Risque</th><th>Situations typiques</th><th>Prévention</th></tr></thead>\n<tbody>\n<tr><td>Chute de plain-pied</td><td>Sol gras ou mouillé, objet au sol, course</td><td>Nettoyer immédiatement, chaussures antidérapantes, ne pas courir, signaler le sol mouillé</td></tr>\n<tr><td>Coupure</td><td>Couteaux, trancheuse, mandoline, verre cassé</td><td>Couteaux affûtés et rangés, gant anti-coupure, protège-lame, verre ramassé à la pelle</td></tr>\n<tr><td>Brûlure</td><td>Plaques, fours, friteuse, vapeur, liquides</td><td>Maniques sèches, ouvrir le four en se reculant, queues de casseroles vers l'intérieur</td></tr>\n<tr><td>Troubles musculo-squelettiques (TMS)</td><td>Port de charges, gestes répétés, station debout</td><td>Chariots, plans de travail à bonne hauteur, postures, rotation des tâches</td></tr>\n<tr><td>Risque chimique</td><td>Détergents, dégraissants pour four, produits de lave-vaisselle</td><td>Lire l'étiquette, respecter le dosage, gants et lunettes, ne jamais mélanger</td></tr>\n<tr><td>Risque électrique</td><td>Appareils, prises près de l'eau</td><td>Mains sèches, débrancher avant nettoyage, signaler un câble abîmé</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> danger = source de dommage ; risque = exposition d'une personne à ce danger. On agit d'abord sur l'organisation et les équipements collectifs, puis sur les protections individuelles.</div>"
      },
      {
       "titre": "La tenue professionnelle et les EPI",
       "contenu": "\n<p>La <strong>tenue professionnelle</strong> protège le salarié et protège les aliments. Elle est propre, réservée au travail et revêtue dans un vestiaire.</p>\n<ul>\n<li><strong>En cuisine</strong> : veste à manches longues en coton (protège des projections), pantalon, tablier, coiffe qui couvre tous les cheveux (toque ou calot), torchon de cuisine, chaussures de sécurité fermées et antidérapantes.</li>\n<li><strong>En salle</strong> : tenue de service propre et repassée, chaussures fermées stables, cheveux attachés, mains et ongles soignés.</li>\n</ul>\n<p>Les <strong>équipements de protection individuelle (EPI)</strong> protègent contre un risque précis : gant anti-coupure en maille métallique pour le désossage ou les huîtres, gants résistants à la chaleur, gants et lunettes pour les produits chimiques, chaussures de sécurité. L'employeur les fournit gratuitement ; le salarié doit les porter.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une manique ou un torchon humide conduit très vite la chaleur : on se brûle à travers. Bijoux, montre et bagues sont interdits en cuisine : ils retiennent les microbes et peuvent provoquer un accident (doigt pris dans une machine).</div>"
      },
      {
       "titre": "Couteaux, machines et surfaces chaudes",
       "contenu": "\n<p>Le couteau est l'outil principal du cuisinier. Quelques règles évitent la plupart des coupures :</p>\n<ul>\n<li>travailler sur une <strong>planche</strong> stable (un torchon humide dessous l'empêche de glisser) ;</li>\n<li>replier les doigts de la main qui tient l'aliment (« griffe ») : la lame glisse contre les phalanges ;</li>\n<li>ne jamais laisser un couteau dans un bac de plonge où on ne le voit pas ;</li>\n<li>transporter un couteau pointe vers le bas, le long du corps ; ne jamais essayer de rattraper un couteau qui tombe.</li>\n</ul>\n<p>Les <strong>machines</strong> (trancheuse, robot-coupe, batteur-mélangeur, hachoir) ne s'utilisent qu'après formation, avec leurs protecteurs en place. On les arrête et on les débranche avant tout nettoyage ou démontage.</p>\n<p>Pour les surfaces chaudes : poignées de casseroles tournées vers l'intérieur du piano, annoncer « chaud derrière ! » lorsqu'on se déplace avec un plat brûlant, ouvrir la porte d'un four ou d'un four mixte en se tenant de côté pour éviter la bouffée de vapeur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pendant le coup de feu, les déplacements se croisent. Les annonces orales font partie de la sécurité : « derrière ! », « chaud ! », « couteau ! ». Un commis qui porte un bac gastronorme d'eau bouillante l'annonce avant de passer dans le dos d'un collègue.</div>"
      },
      {
       "titre": "Produits d'entretien et pictogrammes",
       "contenu": "\n<p>Les produits de nettoyage professionnels sont concentrés. Leur étiquette porte des <strong>pictogrammes de danger</strong> : un losange à bordure rouge sur fond blanc, avec un symbole noir. Ils sont complétés par une mention d'avertissement (« Danger » ou « Attention ») et des phrases de danger et de prudence.</p>\n<table>\n<thead><tr><th>Symbole dans le losange</th><th>Signification</th><th>Exemple en restauration</th></tr></thead>\n<tbody>\n<tr><td>Liquide qui ronge une main et une surface</td><td>Corrosif : brûle la peau et les yeux</td><td>Dégraissant pour four, détartrant</td></tr>\n<tr><td>Point d'exclamation</td><td>Irritant, nocif, sensibilisant</td><td>Certains détergents</td></tr>\n<tr><td>Flamme</td><td>Inflammable</td><td>Alcool à brûler, gaz en bombe</td></tr>\n<tr><td>Arbre et poisson morts</td><td>Dangereux pour l'environnement aquatique</td><td>Certains désinfectants</td></tr>\n</tbody>\n</table>\n<p>Règles d'usage : garder le produit dans son emballage d'origine, ne jamais le transvaser dans une bouteille alimentaire, respecter la <strong>dose</strong> indiquée, ne jamais mélanger deux produits (l'eau de Javel mélangée à un acide dégage un gaz toxique), porter gants et lunettes. La <strong>fiche de données de sécurité</strong> du fournisseur décrit les dangers et les premiers secours.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une dilution. L'étiquette d'un détergent indique « 2 % » (soit 20 mL de produit par litre d'eau). On prépare un seau de 8 L.<ol>\n<li>Écrire la règle : 2 % signifie 2 mL de produit pour 100 mL de solution, donc 20 mL pour 1 L.</li>\n<li>Calculer : 20 mL × 8 = 160 mL de produit.</li>\n<li>Préparer : verser d'abord l'eau, puis le produit (on évite ainsi les projections de produit pur).</li>\n<li>Vérifier : trop de produit n'améliore pas le nettoyage, laisse des résidus sur les surfaces et coûte plus cher.</li>\n</ol></div>"
      },
      {
       "titre": "Port de charges et postures",
       "contenu": "\n<p>Livraisons, casiers de boissons, marmites et piles d'assiettes : le port de charges est quotidien. Les <strong>troubles musculo-squelettiques (TMS)</strong> touchent le dos, les épaules, les poignets. Ils s'installent progressivement et peuvent devenir handicapants.</p>\n<ul>\n<li>Utiliser les aides : chariot, diable, échelle stable plutôt qu'une chaise.</li>\n<li>Soulever près du corps, dos droit, en pliant les jambes ; éviter de tourner le buste en portant.</li>\n<li>Répartir les charges : deux bacs moyens plutôt qu'un très lourd ; ranger les produits lourds à hauteur de taille.</li>\n<li>Porter un plateau en salle à plat sur la main gauche, en gardant la main droite libre.</li>\n</ul>\n<p>Le Code du travail limite le port habituel de charges lourdes et prévoit des règles plus strictes pour les femmes et pour les travailleurs de moins de 18 ans. En formation, les élèves mineurs sont aussi protégés : certains travaux et machines dangereuses leur sont interdits ou soumis à autorisation.</p>"
      },
      {
       "titre": "Le document unique et les premiers secours",
       "contenu": "\n<p>Chaque employeur doit évaluer les risques et les noter dans le <strong>document unique d'évaluation des risques professionnels (DUERP)</strong>, avec les mesures de prévention prévues. Le salarié, lui, doit prendre soin de sa sécurité et de celle de ses collègues, et signaler tout danger.</p>\n<p>En cas d'accident : protéger (couper l'appareil, éloigner le danger), alerter (15 SAMU, 18 pompiers, 112 numéro d'urgence européen), secourir selon sa formation. Une brûlure se refroidit immédiatement sous l'eau tempérée pendant plusieurs minutes. Un feu d'huile ne s'éteint <strong>jamais avec de l'eau</strong> : on coupe le feu, on étouffe avec un couvercle ou une couverture anti-feu, ou on utilise l'extincteur adapté.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> protéger, alerter, secourir. Feu de friteuse : couvercle ou couverture anti-feu, jamais d'eau. Tout accident, même léger, doit être signalé au responsable.</div>"
      }
     ],
     "points_cles": [
      "Les chutes, coupures et brûlures sont les accidents les plus fréquents en restauration.",
      "Danger = source de dommage ; risque = exposition à ce danger.",
      "La tenue professionnelle protège le salarié et les aliments ; les EPI protègent contre un risque précis.",
      "Les pictogrammes de danger sont des losanges à bordure rouge ; on lit toujours l'étiquette.",
      "On ne mélange jamais deux produits d'entretien et on respecte le dosage.",
      "Les machines se débranchent avant nettoyage et ne s'utilisent qu'après formation.",
      "Soulever près du corps, jambes fléchies, et utiliser les aides à la manutention.",
      "Le DUERP recense les risques et les mesures de prévention de l'entreprise.",
      "Un feu d'huile ne s'éteint jamais avec de l'eau."
     ],
     "lexique": [
      {
       "terme": "Danger",
       "def": "Propriété d'un objet, d'un produit ou d'une situation pouvant causer un dommage."
      },
      {
       "terme": "Risque",
       "def": "Possibilité qu'un dommage survienne lorsqu'une personne est exposée à un danger."
      },
      {
       "terme": "EPI",
       "def": "Équipement de protection individuelle : gant anti-coupure, chaussures de sécurité, lunettes…"
      },
      {
       "terme": "TMS",
       "def": "Troubles musculo-squelettiques : douleurs et lésions des articulations, muscles et tendons liées aux gestes et postures."
      },
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels, obligatoire dans toute entreprise."
      },
      {
       "terme": "Fiche de données de sécurité",
       "def": "Document du fournisseur décrivant les dangers d'un produit chimique et la conduite à tenir."
      },
      {
       "terme": "Corrosif",
       "def": "Produit qui détruit les tissus vivants (peau, yeux) et attaque certains matériaux."
      },
      {
       "terme": "Chute de plain-pied",
       "def": "Chute sur une surface plane (glissade, trébuchement), sans dénivelé."
      },
      {
       "terme": "Couverture anti-feu",
       "def": "Tissu ininflammable qui étouffe un début d'incendie, notamment un feu de friteuse."
      }
     ],
     "qcm": [
      {
       "q": "Une friteuse contenant de l'huile à 180 °C est :",
       "options": [
        "un risque",
        "un danger",
        "un EPI",
        "une prévention"
       ],
       "bonnes": [
        1
       ],
       "explication": "La friteuse chaude est la source possible de dommage, donc un danger. Le risque apparaît quand quelqu'un est exposé, par exemple en la déplaçant."
      },
      {
       "q": "Le feu prend dans une friteuse. Quelles actions sont correctes ? (deux réponses)",
       "options": [
        "Jeter un seau d'eau",
        "Couper l'alimentation de l'appareil",
        "Étouffer avec une couverture anti-feu",
        "Déplacer la friteuse dehors"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "On coupe l'appareil et on prive le feu d'oxygène. L'eau sur l'huile brûlante provoque une projection enflammée violente."
      },
      {
       "q": "Un losange à bordure rouge montrant un liquide qui ronge une main signifie que le produit est :",
       "options": [
        "inflammable",
        "dangereux pour l'environnement",
        "toxique par inhalation uniquement",
        "corrosif"
       ],
       "bonnes": [
        3
       ],
       "explication": "Ce pictogramme indique un produit corrosif, qui brûle la peau et les yeux, comme beaucoup de dégraissants pour four."
      },
      {
       "q": "Un détergent se dilue à 2 %. Quelle quantité de produit pour 5 L d'eau ?",
       "options": [
        "100 mL",
        "10 mL",
        "200 mL",
        "2 mL"
       ],
       "bonnes": [
        0
       ],
       "explication": "2 % représente 20 mL par litre ; 20 × 5 = 100 mL."
      },
      {
       "q": "Pourquoi un couteau ne doit-il jamais être laissé dans un bac de plonge ?",
       "options": [
        "Parce qu'il rouille instantanément",
        "Parce que le plongeur ne le voit pas et peut se couper",
        "Parce que l'eau l'émousse",
        "Parce que c'est interdit par la loi sur les déchets"
       ],
       "bonnes": [
        1
       ],
       "explication": "Caché sous l'eau savonneuse, le couteau devient un piège pour la personne qui plonge les mains dans le bac."
      },
      {
       "q": "Quel élément ne fait PAS partie de la tenue du cuisinier ?",
       "options": [
        "Coiffe couvrant les cheveux",
        "Chaussures de sécurité antidérapantes",
        "Veste à manches longues",
        "Montre et bracelet"
       ],
       "bonnes": [
        3
       ],
       "explication": "Les bijoux sont interdits : ils retiennent les microbes et peuvent provoquer un accident avec une machine."
      },
      {
       "q": "Pour soulever une caisse de légumes posée au sol, il faut :",
       "options": [
        "garder les jambes tendues et se pencher",
        "plier les jambes et garder la charge près du corps",
        "tourner le buste en soulevant",
        "soulever à bout de bras"
       ],
       "bonnes": [
        1
       ],
       "explication": "Les jambes font l'effort et le dos reste droit ; la charge près du corps réduit la contrainte sur les lombaires."
      },
      {
       "q": "Quel document recense les risques de l'entreprise et les mesures de prévention ?",
       "options": [
        "Le document unique (DUERP)",
        "La fiche technique",
        "Le bon de commande",
        "Le plan de nettoyage"
       ],
       "bonnes": [
        0
       ],
       "explication": "Le document unique d'évaluation des risques professionnels est obligatoire dans toute entreprise."
      },
      {
       "q": "Quel numéro d'urgence fonctionne dans toute l'Union européenne ?",
       "options": [
        "15",
        "17",
        "112",
        "18"
       ],
       "bonnes": [
        2
       ],
       "explication": "Le 112 est le numéro d'urgence européen ; en France, le 15 joint le SAMU et le 18 les pompiers."
      },
      {
       "q": "Quelles règles s'appliquent aux produits d'entretien ? (deux réponses)",
       "options": [
        "Les mélanger pour être plus efficace",
        "Respecter le dosage de l'étiquette",
        "Les transvaser dans une bouteille d'eau vide",
        "Les conserver dans leur emballage d'origine"
       ],
       "bonnes": [
        1,
        3
       ],
       "explication": "Le dosage garantit l'efficacité sans danger, et l'emballage d'origine garde l'étiquette et évite toute confusion avec une boisson."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Technologie culinaire et de service",
   "chapitres": [
    {
     "id": "fhr-produits",
     "titre": "Les produits alimentaires : gammes, qualité et saisons",
     "duree": 25,
     "objectifs": [
      "Classer les produits selon les cinq gammes de l'industrie alimentaire.",
      "Reconnaître les signes officiels de qualité et d'origine.",
      "Choisir des fruits et légumes de saison.",
      "Identifier les critères de fraîcheur des viandes, poissons et produits laitiers.",
      "Lire l'étiquette d'un produit alimentaire (dates, allergènes, lot)."
     ],
     "sections": [
      {
       "titre": "Les gammes de produits",
       "contenu": "\n<p>Les produits achetés par un restaurant n'arrivent pas tous dans le même état. On les classe en <strong>gammes</strong> selon la technique de conservation et le degré de préparation.</p>\n<table>\n<thead><tr><th>Gamme</th><th>Définition</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>1re gamme</td><td>Produits bruts frais, non transformés, ou conservés de façon traditionnelle (sel, fumage, séchage)</td><td>Carottes avec la terre, poulet entier, poisson frais, jambon sec</td></tr>\n<tr><td>2e gamme</td><td>Conserves appertisées : produits stérilisés par la chaleur dans un récipient étanche</td><td>Tomates pelées en boîte, haricots en bocal</td></tr>\n<tr><td>3e gamme</td><td>Produits surgelés ou congelés</td><td>Petits pois surgelés, filets de poisson surgelés</td></tr>\n<tr><td>4e gamme</td><td>Végétaux crus, lavés, épluchés, coupés, prêts à l'emploi, conservés au froid</td><td>Salade en sachet, carottes râpées, pommes de terre épluchées sous vide</td></tr>\n<tr><td>5e gamme</td><td>Produits cuits, pasteurisés et conditionnés sous vide ou sous atmosphère, conservés au froid</td><td>Légumes cuits sous vide, joues de bœuf cuites, purées</td></tr>\n</tbody>\n</table>\n<p>On parle parfois d'une 6e gamme pour les produits déshydratés ou lyophilisés (purée en flocons, fonds déshydratés). Les produits élaborés achetés tout prêts et utilisés tels quels sont appelés <strong>PAI</strong> (produits alimentaires intermédiaires) : pâte feuilletée, fonds, sauces de base.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> 1re frais, 2e conserve, 3e surgelé, 4e cru prêt à l'emploi, 5e cuit sous vide. Plus la gamme est élevée, plus le produit fait gagner du temps, mais plus il coûte cher au kilo.</div>"
      },
      {
       "titre": "Comparer produit brut et produit prêt à l'emploi",
       "contenu": "\n<p>Le choix d'une gamme dépend du prix, du temps de main-d'œuvre, du matériel disponible et de la qualité recherchée. Un restaurant qui affiche la mention « <strong>fait maison</strong> » doit élaborer ses plats sur place à partir de produits bruts ou de produits traditionnels de cuisine ; la réglementation précise quels produits déjà transformés restent autorisés (par exemple un produit simplement découpé, réfrigéré ou surgelé) et lesquels sont exclus.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer le coût réel d'une 1re et d'une 4e gamme. Il faut 4 kg de pommes de terre épluchées.<ol>\n<li>1re gamme à 1,20 € le kg brut, avec 20 % de perte à l'épluchage. Le rendement est de 80 %, soit 0,80. Poids brut nécessaire : 4 ÷ 0,80 = 5 kg. Coût : 5 × 1,20 = 6,00 €.</li>\n<li>4e gamme à 2,40 € le kg, prête à l'emploi, sans perte : 4 × 2,40 = 9,60 €.</li>\n<li>Comparer : la 1re gamme coûte 3,60 € de moins en produit, mais demande environ une demi-heure d'épluchage. Si une heure de travail coûte à l'entreprise plus de 7,20 €, la 4e gamme devient compétitive.</li>\n<li>Conclure en tenant compte aussi de la qualité gustative et du volume de travail du jour.</li>\n</ol></div>"
      },
      {
       "titre": "Les signes officiels de qualité et d'origine",
       "contenu": "\n<p>Les <strong>SIQO</strong> (signes officiels de la qualité et de l'origine) sont garantis par l'État et contrôlés par des organismes indépendants. Ils aident à choisir et à valoriser un produit sur la carte.</p>\n<ul>\n<li><strong>Label Rouge</strong> : qualité supérieure par rapport à un produit courant (poulet élevé plus longtemps, en plein air).</li>\n<li><strong>AOP</strong> (appellation d'origine protégée) et <strong>AOC</strong> : toutes les étapes de production ont lieu dans une zone géographique déterminée, selon un savoir-faire reconnu (comté, beurre d'Isigny, nombreux vins).</li>\n<li><strong>IGP</strong> (indication géographique protégée) : au moins une étape de production se déroule dans la zone (jambon de Bayonne, volailles de Loué).</li>\n<li><strong>STG</strong> (spécialité traditionnelle garantie) : recette ou mode de production traditionnel, sans lien avec un lieu.</li>\n<li><strong>Agriculture biologique</strong> (logo AB et eurofeuille) : production sans pesticides ni engrais chimiques de synthèse, bien-être animal renforcé.</li>\n</ul>\n<p>En restauration, l'<strong>origine des viandes</strong> servies doit être indiquée aux clients. Les produits locaux et de saison sont aussi un argument commercial apprécié.</p>"
      },
      {
       "titre": "Fruits et légumes : saisonnalité et qualité",
       "contenu": "\n<p>Un produit <strong>de saison</strong> est récolté naturellement à la période où on le consomme, dans notre région. Il est plus savoureux, moins cher et a moins voyagé.</p>\n<table>\n<thead><tr><th>Saison</th><th>Légumes</th><th>Fruits</th></tr></thead>\n<tbody>\n<tr><td>Printemps</td><td>Asperges, petits pois, radis, carottes nouvelles</td><td>Fraises, rhubarbe</td></tr>\n<tr><td>Été</td><td>Tomates, courgettes, aubergines, poivrons, haricots verts</td><td>Abricots, pêches, cerises, melons</td></tr>\n<tr><td>Automne</td><td>Courges, champignons, céleri, chou</td><td>Pommes, poires, raisin, coings</td></tr>\n<tr><td>Hiver</td><td>Poireaux, endives, choux, topinambours, panais</td><td>Agrumes, kiwis, pommes de garde</td></tr>\n</tbody>\n</table>\n<p>À la réception, un légume frais est ferme, de couleur vive, sans taches ni moisissures. Les fruits et légumes frais affichent obligatoirement leur pays d'origine et leur catégorie (catégorie extra, I ou II selon l'aspect).</p>"
      },
      {
       "titre": "Viandes, poissons, œufs et produits laitiers",
       "contenu": "\n<p>Les produits d'origine animale sont <strong>périssables</strong> : ils se dégradent vite et doivent rester au froid. On contrôle leur fraîcheur à la réception.</p>\n<ul>\n<li><strong>Viandes</strong> : on distingue les viandes de boucherie (bœuf, veau, agneau, porc), les volailles et les gibiers. Une viande fraîche a une couleur franche, une odeur neutre, une surface non collante. L'emballage porte une <strong>marque d'identification</strong> ovale (pays, numéro de l'établissement, CE).</li>\n<li><strong>Poissons</strong> : œil bombé et brillant, branchies rouge vif, chair ferme et élastique, odeur iodée, écailles adhérentes. Un œil terne et creux, des branchies brunes signalent un poisson ancien.</li>\n<li><strong>Œufs</strong> : la coquille porte un code dont le premier chiffre indique le mode d'élevage (0 bio, 1 plein air, 2 au sol, 3 en cage), suivi du pays. En restauration, on utilise aussi des ovoproduits pasteurisés (œufs liquides) pour limiter le risque de salmonelles.</li>\n<li><strong>Produits laitiers</strong> : lait cru, pasteurisé ou stérilisé UHT, crème, beurre, fromages. Le lait cru et certains fromages au lait cru sont déconseillés aux personnes fragiles (femmes enceintes, jeunes enfants).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un poisson qui « sent fort » n'est pas un poisson de caractère, c'est un poisson qui n'est plus frais. En cas de doute à la réception, on refuse le produit et on le note sur le bon de livraison.</div>"
      },
      {
       "titre": "Lire une étiquette alimentaire",
       "contenu": "\n<p>L'étiquette d'un produit préemballé donne les informations obligatoires : dénomination, liste des ingrédients par ordre décroissant de poids, <strong>allergènes</strong> mis en évidence (gras, couleur), quantité nette, date, conditions de conservation, numéro de lot, nom du fabricant et, pour les produits animaux, la marque d'identification.</p>\n<ul>\n<li><strong>DLC</strong> : « à consommer jusqu'au… ». Date limite impérative pour les produits très périssables (viande, poisson frais, produits laitiers frais). Au-delà, le produit ne doit plus être utilisé.</li>\n<li><strong>DDM</strong> : « à consommer de préférence avant… ». Date indicative (pâtes, conserves, biscuits) : après cette date, le produit peut perdre en goût mais ne présente pas de danger s'il a été bien conservé.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> à la réception d'un colis de saumon fumé, le commis vérifie la DLC (au moins quelques jours de marge), la température (produit réfrigéré), l'intégrité de l'emballage sous vide et le numéro de lot, qu'il conserve pour la traçabilité. Si un rappel de produit est lancé, ce numéro permet de retrouver immédiatement les produits concernés.</div>"
      }
     ],
     "points_cles": [
      "Cinq gammes : frais, conserve, surgelé, cru prêt à l'emploi, cuit sous vide.",
      "Plus un produit est élaboré, plus il fait gagner du temps mais plus il coûte cher au kilo.",
      "Pour comparer les gammes, on calcule le poids brut nécessaire avec le rendement.",
      "Les SIQO (Label Rouge, AOP, IGP, STG, AB) sont garantis par l'État.",
      "Un produit de saison est plus savoureux, moins cher et a moins voyagé.",
      "Poisson frais : œil bombé et brillant, branchies rouges, chair ferme.",
      "Le premier chiffre du code des œufs indique le mode d'élevage.",
      "DLC impérative, DDM indicative.",
      "Le numéro de lot assure la traçabilité en cas de rappel."
     ],
     "lexique": [
      {
       "terme": "Gamme",
       "def": "Classement des produits selon leur mode de conservation et leur degré de préparation."
      },
      {
       "terme": "Appertisation",
       "def": "Stérilisation par la chaleur d'un aliment placé dans un récipient étanche (conserve)."
      },
      {
       "terme": "PAI",
       "def": "Produit alimentaire intermédiaire : préparation de base achetée prête (pâte, fond, sauce)."
      },
      {
       "terme": "SIQO",
       "def": "Signe officiel de la qualité et de l'origine : Label Rouge, AOP, IGP, STG, AB."
      },
      {
       "terme": "AOP",
       "def": "Appellation d'origine protégée : toutes les étapes sont réalisées dans une zone définie."
      },
      {
       "terme": "Périssable",
       "def": "Se dit d'un aliment qui se dégrade rapidement et doit être conservé au froid."
      },
      {
       "terme": "DLC",
       "def": "Date limite de consommation, impérative : « à consommer jusqu'au »."
      },
      {
       "terme": "DDM",
       "def": "Date de durabilité minimale, indicative : « à consommer de préférence avant »."
      },
      {
       "terme": "Ovoproduit",
       "def": "Produit issu d'œufs cassés (entiers, blancs, jaunes), souvent pasteurisé."
      },
      {
       "terme": "Traçabilité",
       "def": "Possibilité de retrouver l'origine et le parcours d'un produit à toutes les étapes."
      }
     ],
     "qcm": [
      {
       "q": "Une salade lavée et coupée vendue en sachet au rayon frais appartient à la :",
       "options": [
        "1re gamme",
        "3e gamme",
        "4e gamme",
        "5e gamme"
       ],
       "bonnes": [
        2
       ],
       "explication": "Les végétaux crus prêts à l'emploi conservés au froid forment la 4e gamme."
      },
      {
       "q": "Des haricots verts en boîte de conserve appartiennent à la :",
       "options": [
        "2e gamme",
        "1re gamme",
        "4e gamme",
        "3e gamme"
       ],
       "bonnes": [
        0
       ],
       "explication": "La 2e gamme regroupe les produits appertisés, stérilisés dans un récipient étanche."
      },
      {
       "q": "Il faut 6 kg de carottes épluchées ; la perte à l'épluchage est de 25 %. Quel poids brut commander ?",
       "options": [
        "7,5 kg",
        "6,25 kg",
        "4,5 kg",
        "8 kg"
       ],
       "bonnes": [
        3
       ],
       "explication": "Rendement = 75 %, soit 0,75. Poids brut = 6 ÷ 0,75 = 8 kg."
      },
      {
       "q": "Quels signes sont des signes officiels de qualité et d'origine ? (deux réponses)",
       "options": [
        "Label Rouge",
        "« Recette de grand-mère »",
        "AOP",
        "« Saveur du terroir »"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Label Rouge et AOP sont garantis par l'État et contrôlés. Les autres formules sont de simples arguments commerciaux."
      },
      {
       "q": "Un œuf porte le code 1FR… Cela signifie :",
       "options": [
        "œuf bio de France",
        "œuf de poule élevée en plein air, en France",
        "œuf de catégorie 1",
        "œuf pondu le 1er du mois"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le premier chiffre indique le mode d'élevage : 0 bio, 1 plein air, 2 au sol, 3 en cage. FR désigne la France."
      },
      {
       "q": "Quel signe indique qu'un poisson n'est pas frais ?",
       "options": [
        "Branchies rouge vif",
        "Chair ferme et élastique",
        "Œil bombé et brillant",
        "Œil terne et enfoncé"
       ],
       "bonnes": [
        3
       ],
       "explication": "Un œil terne et creux, comme des branchies brunes, signale un poisson ancien."
      },
      {
       "q": "Lequel de ces légumes est de saison en été ?",
       "options": [
        "Poireau",
        "Endive",
        "Topinambour",
        "Courgette"
       ],
       "bonnes": [
        3
       ],
       "explication": "La courgette se récolte en été ; poireau, endive et topinambour sont des légumes d'hiver."
      },
      {
       "q": "La mention « à consommer de préférence avant » correspond à :",
       "options": [
        "une DDM, date indicative",
        "une DLC, date impérative",
        "la date de fabrication",
        "la date de livraison"
       ],
       "bonnes": [
        0
       ],
       "explication": "C'est la date de durabilité minimale : le produit peut perdre en qualité ensuite, sans danger s'il a été bien conservé."
      },
      {
       "q": "À quoi sert le numéro de lot noté à la réception ?",
       "options": [
        "À calculer la TVA",
        "À retrouver les produits concernés en cas de rappel",
        "À fixer le prix de vente",
        "À indiquer la saison de récolte"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le lot assure la traçabilité : en cas d'alerte sanitaire, on identifie et retire les produits du même lot."
      }
     ]
    },
    {
     "id": "fhr-technologie-culinaire",
     "titre": "Technologie culinaire : matériel, taillages, fonds et cuissons",
     "duree": 30,
     "objectifs": [
      "Nommer le matériel de base de la cuisine professionnelle et son usage.",
      "Identifier les principaux taillages de légumes et leurs dimensions approximatives.",
      "Distinguer fonds, liaisons et sauces de base.",
      "Classer les modes de cuisson et expliquer ce qui se passe dans l'aliment.",
      "Organiser une production à partir d'une fiche technique."
     ],
     "sections": [
      {
       "titre": "Les locaux et le matériel",
       "contenu": "\n<p>La cuisine professionnelle est organisée en zones : réception des marchandises, stockage (chambres froides, réserve sèche), préparations préliminaires (épluchage, lavage), cuisson, dressage, plonge. Le principe de la <strong>marche en avant</strong> fait progresser les produits du sale vers le propre, sans retour en arrière.</p>\n<table>\n<thead><tr><th>Famille de matériel</th><th>Exemples et usages</th></tr></thead>\n<tbody>\n<tr><td>Matériel de cuisson</td><td><strong>Piano</strong> (fourneau à feux vifs ou plaques à induction), four mixte (chaleur sèche, vapeur ou les deux), salamandre (gril à chaleur par le haut pour gratiner), friteuse, sauteuse, marmite</td></tr>\n<tr><td>Matériel de froid</td><td>Chambre froide positive, chambre froide négative, cellule de refroidissement rapide, armoires réfrigérées</td></tr>\n<tr><td>Matériel électromécanique</td><td>Batteur-mélangeur, robot-coupe, trancheuse, mixeur plongeant, machine sous vide</td></tr>\n<tr><td>Batterie de cuisine</td><td>Casseroles, sautoirs, poêles, plaques, bacs <strong>gastronormes</strong> (GN) aux dimensions normalisées</td></tr>\n<tr><td>Petit matériel</td><td>Couteau d'office, couteau éminceur, désosseur, économe, chinois, fouet, spatule, louche</td></tr>\n</tbody>\n</table>\n<p>Les bacs gastronormes ont des tailles standard : le GN 1/1 mesure 530 × 325 mm ; un GN 1/2 occupe la moitié de cette surface, un GN 1/3 le tiers. Ils passent ainsi du four à la cellule et à la vitrine sans transvasement.</p>"
      },
      {
       "titre": "Les taillages de légumes",
       "contenu": "\n<p>Tailler régulièrement permet une cuisson homogène et une présentation soignée. Chaque taillage porte un nom précis. Les dimensions ci-dessous sont des ordres de grandeur ; elles varient un peu selon les établissements et les ouvrages.</p>\n<table>\n<thead><tr><th>Taillage</th><th>Forme</th><th>Dimensions approximatives</th><th>Usage courant</th></tr></thead>\n<tbody>\n<tr><td>Julienne</td><td>Bâtonnets très fins</td><td>1 à 2 mm de section, 4 à 5 cm de long</td><td>Garnitures, potages</td></tr>\n<tr><td>Brunoise</td><td>Très petits dés</td><td>1 à 3 mm de côté</td><td>Farces, sauces, garnitures fines</td></tr>\n<tr><td>Jardinière</td><td>Bâtonnets</td><td>environ 4 à 5 mm de section, 4 cm de long</td><td>Garniture de légumes</td></tr>\n<tr><td>Macédoine</td><td>Dés</td><td>environ 4 à 5 mm de côté</td><td>Salades composées</td></tr>\n<tr><td>Paysanne</td><td>Fines lamelles carrées, rondes ou triangulaires</td><td>1 à 2 mm d'épaisseur</td><td>Potages, garnitures</td></tr>\n<tr><td>Mirepoix</td><td>Gros dés</td><td>1 à 2 cm selon la durée de cuisson</td><td>Aromatisation des fonds et braisés</td></tr>\n<tr><td>Ciseler</td><td>Tailler finement oignon, échalote ou herbes</td><td>Très petits morceaux</td><td>Sauces, vinaigrettes</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> plus la cuisson est longue, plus la taille des morceaux est grande (mirepoix pour un fond qui cuit plusieurs heures, brunoise pour une sauce rapide).</div>"
      },
      {
       "titre": "Fonds, liaisons et sauces de base",
       "contenu": "\n<p>Un <strong>fond</strong> est un bouillon aromatique obtenu en cuisant longuement des os, des parures et une garniture aromatique (carotte, oignon, bouquet garni) dans de l'eau. Il sert de base aux sauces.</p>\n<ul>\n<li><strong>Fond blanc</strong> : os de veau ou de volaille et aromates mis directement dans l'eau froide, sans coloration.</li>\n<li><strong>Fond brun</strong> : os et garniture d'abord colorés au four, puis mouillés : couleur et goût plus intenses.</li>\n<li><strong>Fumet de poisson</strong> : arêtes et parures de poissons blancs, cuisson courte (environ 20 minutes).</li>\n</ul>\n<p>Pour épaissir un liquide, on utilise une <strong>liaison</strong>. La plus classique est le <strong>roux</strong> : beurre fondu et farine en poids égaux, cuits ensemble. Selon la durée de cuisson, il est blanc, blond ou brun. On lie aussi à la fécule (délayée à froid), au jaune d'œuf, à la crème ou par réduction.</p>\n<table>\n<thead><tr><th>Sauce de base</th><th>Composition</th></tr></thead>\n<tbody>\n<tr><td>Béchamel</td><td>Roux blanc + lait</td></tr>\n<tr><td>Velouté</td><td>Roux blond + fond blanc ou fumet</td></tr>\n<tr><td>Sauce tomate</td><td>Tomates, garniture aromatique, éventuellement fond</td></tr>\n<tr><td>Hollandaise</td><td>Émulsion chaude de jaunes d'œufs et de beurre</td></tr>\n<tr><td>Mayonnaise</td><td>Émulsion froide de jaune d'œuf, moutarde et huile</td></tr>\n</tbody>\n</table>\n<p>Une <strong>émulsion</strong> est un mélange stable de deux liquides qui ne se mélangent pas naturellement (eau et matière grasse) ; le jaune d'œuf joue le rôle d'émulsifiant.</p>"
      },
      {
       "titre": "Les modes de cuisson",
       "contenu": "\n<p>Cuire, c'est transformer un aliment par la chaleur : il devient plus digeste, change de texture, de couleur et de goût, et les microbes sont détruits. On classe les cuissons selon ce qui se passe entre l'aliment et le milieu de cuisson.</p>\n<table>\n<thead><tr><th>Type</th><th>Principe</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>Par <strong>concentration</strong></td><td>Une forte chaleur saisit la surface ; les sucs restent à l'intérieur</td><td>Griller, sauter, rôtir, frire, pocher départ liquide bouillant</td></tr>\n<tr><td>Par <strong>expansion</strong></td><td>Départ à froid ; les sucs passent dans le liquide, qui prend du goût</td><td>Fonds, pot-au-feu, pocher départ liquide froid</td></tr>\n<tr><td><strong>Mixte</strong></td><td>On saisit d'abord (concentration) puis on mouille et on cuit longuement (expansion)</td><td>Braiser, ragoûts, sautés en sauce</td></tr>\n</tbody>\n</table>\n<p>Quelques ordres de grandeur : une friteuse travaille généralement entre 160 et 180 °C ; un rôti cuit au four autour de 180 à 220 °C selon la pièce ; l'eau bout à 100 °C au niveau de la mer. Les cuissons à <strong>basse température</strong> (four réglé autour de 60 à 90 °C) donnent des viandes très tendres mais exigent un contrôle rigoureux de la température à cœur, mesurée avec une <strong>sonde</strong>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une huile de friture usagée devient dangereuse pour la santé. On la filtre régulièrement, on ne dépasse pas la température indiquée et on la change dès qu'elle fonce, fume ou mousse. La réglementation fixe une limite de dégradation contrôlable avec un testeur.</div>"
      },
      {
       "titre": "Ce qui se passe dans l'aliment",
       "contenu": "\n<p>La cuisine est aussi une science. Quelques phénomènes reviennent sans cesse :</p>\n<ul>\n<li><strong>Coagulation des protéines</strong> : sous l'effet de la chaleur, le blanc d'œuf devient opaque et ferme ; la viande se raffermit. Trop cuite, elle perd son eau et durcit.</li>\n<li><strong>Réaction de Maillard</strong> : à haute température, sucres et protéines réagissent à la surface et donnent la croûte brune et les arômes de grillé (viande saisie, pain).</li>\n<li><strong>Caramélisation</strong> : le sucre chauffé fond puis brunit.</li>\n<li><strong>Empois d'amidon</strong> : chauffé dans un liquide, l'amidon (farine, fécule, riz) gonfle et épaissit ; c'est le principe des liaisons et de la cuisson du riz.</li>\n<li><strong>Dissolution et perte de vitamines</strong> : les vitamines sensibles à la chaleur (comme la vitamine C) se perdent dans l'eau de cuisson longue ; la cuisson vapeur les préserve mieux.</li>\n</ul>"
      },
      {
       "titre": "Organiser sa production",
       "contenu": "\n<p>Avant le service, le cuisinier réalise sa <strong>mise en place</strong> : il prépare tout ce qui peut l'être (légumes taillés, sauces, garnitures) pour n'avoir plus que la cuisson et le dressage à faire. Il s'appuie sur la <strong>fiche technique</strong>, qui donne pour une recette les ingrédients, les quantités, les étapes, le matériel et la présentation.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir un ordonnancement. On doit servir à 12 h un sauté de veau (cuisson 1 h 30), du riz pilaf (18 min) et une julienne de légumes (préparation 20 min, cuisson 5 min).<ol>\n<li>Lister les tâches et leur durée, cuisson comprise.</li>\n<li>Partir de l'heure de service et remonter le temps : la tâche la plus longue commence en premier.</li>\n<li>Sauté de veau : colorer et mettre en cuisson à 10 h 15 au plus tard (1 h 30 + 15 min de préparation).</li>\n<li>Pendant la cuisson du sauté : tailler la julienne (10 h 30 à 10 h 50), préparer le riz.</li>\n<li>Lancer le riz à 11 h 40 ; cuire la julienne à 11 h 50 ; contrôler, rectifier l'assaisonnement, dresser à 12 h.</li>\n<li>Prévoir le nettoyage du poste au fur et à mesure.</li>\n</ol></div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> au restaurant, chaque poste reçoit une liste de mise en place le matin. Le chef de partie coche ce qui est prêt. Avant le service, le chef passe vérifier les postes : un poste « pas prêt » à l'ouverture retarde toutes les tables.</div>"
      }
     ],
     "points_cles": [
      "La marche en avant fait progresser les produits du sale vers le propre.",
      "Les bacs gastronormes ont des dimensions normalisées (GN 1/1 : 530 × 325 mm).",
      "Julienne = bâtonnets fins, brunoise = petits dés, mirepoix = gros dés pour cuissons longues.",
      "Le fond blanc ne colore pas ; le fond brun est coloré au four avant mouillage.",
      "Le roux se fait avec autant de beurre que de farine.",
      "Cuisson par concentration : saisir ; par expansion : départ à froid ; mixte : les deux.",
      "La réaction de Maillard donne la croûte brune et les arômes grillés.",
      "La mise en place et la fiche technique organisent la production avant le service."
     ],
     "lexique": [
      {
       "terme": "Piano",
       "def": "Fourneau professionnel regroupant feux, plaques et parfois four."
      },
      {
       "terme": "Gastronorme (GN)",
       "def": "Norme de dimensions des bacs et plaques de cuisine professionnelle."
      },
      {
       "terme": "Salamandre",
       "def": "Appareil de cuisson à chaleur rayonnante par le dessus, utilisé pour gratiner et glacer."
      },
      {
       "terme": "Fond",
       "def": "Bouillon aromatique obtenu par cuisson longue d'os et d'aromates, base des sauces."
      },
      {
       "terme": "Roux",
       "def": "Liaison faite de beurre et de farine à poids égaux, cuits ensemble."
      },
      {
       "terme": "Émulsion",
       "def": "Mélange stable de deux liquides non miscibles, comme l'huile et l'eau."
      },
      {
       "terme": "Mirepoix",
       "def": "Garniture aromatique taillée en gros dés."
      },
      {
       "terme": "Braiser",
       "def": "Cuisson mixte : saisir puis cuire lentement à couvert dans un peu de liquide."
      },
      {
       "terme": "Réaction de Maillard",
       "def": "Réaction entre sucres et protéines à haute température qui brunit les aliments."
      },
      {
       "terme": "Mise en place",
       "def": "Ensemble des préparations réalisées avant le service."
      }
     ],
     "qcm": [
      {
       "q": "Des légumes taillés en très petits dés de 1 à 3 mm forment une :",
       "options": [
        "julienne",
        "jardinière",
        "mirepoix",
        "brunoise"
       ],
       "bonnes": [
        3
       ],
       "explication": "La brunoise est le taillage en très petits dés ; la julienne est en bâtonnets fins."
      },
      {
       "q": "Pour aromatiser un fond qui cuit plusieurs heures, on taille la garniture en :",
       "options": [
        "mirepoix",
        "brunoise",
        "julienne",
        "paysanne"
       ],
       "bonnes": [
        0
       ],
       "explication": "Pour une cuisson longue, on choisit de gros morceaux : la mirepoix ne se défait pas pendant la cuisson."
      },
      {
       "q": "Un roux est composé de :",
       "options": [
        "lait et farine",
        "beurre et farine à poids égaux",
        "fécule et eau froide",
        "jaune d'œuf et crème"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le roux associe beurre et farine en quantités égales, cuits ensemble jusqu'à la couleur souhaitée."
      },
      {
       "q": "La béchamel s'obtient avec :",
       "options": [
        "un roux brun et un fond brun",
        "des jaunes d'œufs et du beurre",
        "de l'huile et de la moutarde",
        "un roux blanc et du lait"
       ],
       "bonnes": [
        3
       ],
       "explication": "Béchamel = roux blanc mouillé au lait."
      },
      {
       "q": "Quelles cuissons sont des cuissons par concentration ? (deux réponses)",
       "options": [
        "Griller une côte de bœuf",
        "Préparer un fond blanc",
        "Sauter des pommes de terre",
        "Cuire un pot-au-feu départ à froid"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Griller et sauter saisissent l'aliment par une forte chaleur. Le fond et le pot-au-feu partent à froid : c'est une cuisson par expansion."
      },
      {
       "q": "Le braisage est une cuisson :",
       "options": [
        "mixte",
        "par concentration uniquement",
        "par expansion uniquement",
        "sans chaleur"
       ],
       "bonnes": [
        0
       ],
       "explication": "On colore d'abord la pièce (concentration), puis on la cuit longuement dans un liquide (expansion)."
      },
      {
       "q": "La croûte brune et parfumée d'une viande saisie est due :",
       "options": [
        "à l'empois d'amidon",
        "à la coagulation du blanc d'œuf",
        "à la réaction de Maillard",
        "à l'émulsion"
       ],
       "bonnes": [
        2
       ],
       "explication": "À haute température, sucres et protéines réagissent en surface : c'est la réaction de Maillard."
      },
      {
       "q": "Un bac GN 1/2 occupe :",
       "options": [
        "le double d'un GN 1/1",
        "la moitié de la surface d'un GN 1/1",
        "un tiers d'un GN 1/1",
        "la même surface qu'un GN 1/1, avec une hauteur moitié"
       ],
       "bonnes": [
        1
       ],
       "explication": "Les fractions gastronormes désignent une part de la surface du GN 1/1 (530 × 325 mm)."
      },
      {
       "q": "Un plat doit être servi à 12 h 30 et cuit 1 h 45 après 20 min de préparation. À quelle heure au plus tard commencer ?",
       "options": [
        "10 h 45",
        "10 h 25",
        "10 h 05",
        "11 h 05"
       ],
       "bonnes": [
        1
       ],
       "explication": "Durée totale : 20 min + 1 h 45 = 2 h 05. 12 h 30 − 2 h 05 = 10 h 25."
      },
      {
       "q": "Pour limiter la perte de vitamine C lors de la cuisson de légumes, on préfère :",
       "options": [
        "une cuisson longue dans beaucoup d'eau",
        "une cuisson à la vapeur",
        "un maintien au chaud prolongé",
        "un trempage de plusieurs heures"
       ],
       "bonnes": [
        1
       ],
       "explication": "La vitamine C est sensible à la chaleur et se dissout dans l'eau : la vapeur, plus courte et sans immersion, la préserve mieux."
      }
     ]
    },
    {
     "id": "fhr-technologie-service",
     "titre": "Technologie de service : mise en place et méthodes de service",
     "duree": 30,
     "objectifs": [
      "Connaître le matériel de salle : linge, vaisselle, couverts, verrerie.",
      "Décrire la mise en place d'une table et d'un rang.",
      "Distinguer les méthodes de service (à l'assiette, au plat, au guéridon).",
      "Appliquer les règles de déplacement et de débarrassage en salle.",
      "Suivre le déroulement d'un service, de l'accueil à l'encaissement."
     ],
     "sections": [
      {
       "titre": "Le matériel de salle",
       "contenu": "\n<p>La salle de restaurant utilise un matériel spécifique, choisi selon le standing de l'établissement.</p>\n<ul>\n<li><strong>Le linge</strong> : molleton (sous-nappe épaisse qui amortit le bruit et empêche la nappe de glisser), nappe, napperon (petite nappe posée sur la nappe et changée plus souvent), serviettes, liteau (serviette de service portée sur l'avant-bras).</li>\n<li><strong>La vaisselle</strong> : assiette de présentation, assiette plate, creuse, à dessert, à pain, tasses ; plats ronds et ovales, légumiers, saucières.</li>\n<li><strong>Les couverts</strong> : grand couvert (fourchette et couteau de table), couvert à entremets ou à dessert, couvert à poisson, cuillère à soupe, petite cuillère, et couverts de service (cuillère et fourchette de service, appelés « pince »).</li>\n<li><strong>La verrerie</strong> : verre à eau, verres à vin rouge et à vin blanc, flûte à champagne, verres de bar.</li>\n<li><strong>Le mobilier</strong> : tables, chaises, <strong>console</strong> (meuble de service où l'on range le matériel du rang), <strong>guéridon</strong> (petite table roulante pour travailler devant le client).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on manipule les verres par le pied, les couverts par le manche, les assiettes par le bord, sans jamais toucher les parties en contact avec la bouche ou les aliments.</div>"
      },
      {
       "titre": "La mise en place de la salle",
       "contenu": "\n<p>La <strong>mise en place</strong> de salle se fait avant l'ouverture, dans un ordre logique : aérer et nettoyer, installer les tables, poser le nappage, dresser les couverts, garnir les consoles, contrôler.</p>\n<p>Description d'un couvert classique pour un menu entrée, plat, dessert :</p>\n<ul>\n<li>la chaise est face au centre du couvert, le bord de la table à environ un pouce du bord des couverts ;</li>\n<li>la <strong>fourchette</strong> à gauche, dents vers le haut ; le <strong>couteau</strong> à droite, tranchant tourné vers l'intérieur ; l'écart entre eux correspond à la largeur d'une assiette ;</li>\n<li>la serviette pliée au centre ou sur l'assiette de présentation ;</li>\n<li>les <strong>verres</strong> en haut à droite, au-dessus de la pointe du couteau ;</li>\n<li>le pain à gauche, avec ou sans assiette à pain ;</li>\n<li>le couvert à dessert peut être placé en haut du couvert ou apporté au moment du dessert.</li>\n</ul>\n<p>Les couverts supplémentaires (couvert à poisson, cuillère à potage) sont ajoutés selon la commande, c'est ce qu'on appelle <strong>rectifier</strong> le couvert : on enlève ce qui ne servira pas et on ajoute ce qui manque avant que le plat n'arrive.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le matériel d'une mise en place. Banquet de 48 personnes, menu entrée chaude, poisson, viande, dessert, avec eau et deux vins.<ol>\n<li>Lister le matériel par couvert : 1 grand couvert, 1 couvert à poisson, 1 couvert à entremets (pour l'entrée), 1 couvert à dessert, 1 verre à eau, 2 verres à vin, 1 serviette.</li>\n<li>Multiplier par le nombre de couverts : 48 couverts à poisson, 48 × 3 = 144 verres, 48 serviettes, etc.</li>\n<li>Ajouter une réserve d'environ 10 % pour la casse ou les remplacements : 144 × 1,10 ≈ 159 verres, donc préparer 160 verres.</li>\n<li>Prévoir le matériel de service à part : plats, pinces, carafes, seaux à glace.</li>\n</ol></div>"
      },
      {
       "titre": "Les méthodes de service",
       "contenu": "\n<p>On distingue plusieurs méthodes, parfois combinées dans un même repas.</p>\n<table>\n<thead><tr><th>Méthode</th><th>Déroulement</th><th>Côté de service</th><th>Avantages et contraintes</th></tr></thead>\n<tbody>\n<tr><td>Service <strong>à l'assiette</strong></td><td>Le plat est dressé en cuisine et servi tel quel</td><td>Par la droite</td><td>Rapide, présentation maîtrisée par le chef ; le plus courant</td></tr>\n<tr><td>Service <strong>à l'anglaise</strong></td><td>Le serveur présente le plat puis sert le client avec la pince</td><td>Par la gauche</td><td>Personnalisé, demande de la dextérité et du temps</td></tr>\n<tr><td>Service <strong>à la française</strong></td><td>Le serveur présente le plat et le client se sert lui-même</td><td>Par la gauche</td><td>Convivial, mais le client peut mal se servir et les portions sont moins contrôlées</td></tr>\n<tr><td>Service <strong>au guéridon</strong> (à la russe)</td><td>Le serveur termine la préparation devant le client : découpe, désossage, flambage, puis dresse l'assiette</td><td>L'assiette est posée par la droite</td><td>Spectaculaire et valorisant, demande du personnel qualifié et de l'espace</td></tr>\n</tbody>\n</table>\n<p>En restauration rapide et collective, on trouve aussi le <strong>libre-service</strong> (le client se sert sur une ligne de self) et le service au comptoir.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les règles de côté sont fréquemment demandées. Retenir : ce qui est présenté au plat (anglaise, française) arrive par la gauche ; ce qui est posé ou versé (assiettes, boissons) arrive par la droite ; on débarrasse par la droite.</div>"
      },
      {
       "titre": "Le déroulement d'un service",
       "contenu": "\n<p>Un service suit un enchaînement précis que tout le personnel connaît.</p>\n<ol>\n<li><strong>Accueil</strong> : saluer, vérifier la réservation, accompagner à la table, aider à s'installer.</li>\n<li><strong>Présentation des cartes</strong> et proposition d'un apéritif.</li>\n<li><strong>Prise de commande</strong> : sur un bon en plusieurs exemplaires ou une tablette. Le bon indique la date, le numéro de table, le nombre de couverts, l'heure, les plats avec leurs cuissons et demandes particulières (allergies), le nom du serveur.</li>\n<li><strong>Transmission</strong> : un exemplaire va en cuisine, un à la caisse, un reste au rang (ou envoi électronique).</li>\n<li><strong>Service des boissons</strong> et des mets, plat par plat, en rectifiant le couvert à chaque étape.</li>\n<li><strong>Débarrassage</strong> quand tous les convives de la table ont terminé.</li>\n<li><strong>Dessert, café, addition</strong> présentée sur demande, encaissement, raccompagnement.</li>\n</ol>\n<p>Dans le langage du service, on dit qu'on « envoie » un plat quand on demande à la cuisine de le préparer pour une table : la salle annonce le moment, la cuisine envoie.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une table de quatre commande trois plats à l'assiette et une sole meunière servie au guéridon. Le chef de rang demande l'envoi des quatre plats au même moment : la sole est désarêtée devant le client pendant que le commis pose les trois autres assiettes. Toute la table doit être servie en même temps.</div>"
      },
      {
       "titre": "Gestes professionnels et circulation en salle",
       "contenu": "\n<p>Quelques règles assurent un service fluide et sûr :</p>\n<ul>\n<li>circuler dans le sens prévu, sans courir, en annonçant son passage ;</li>\n<li>porter les assiettes : le service à trois assiettes (deux dans la main gauche, une dans la main droite) est une technique de base qui s'apprend progressivement ;</li>\n<li>servir d'abord les femmes et les invités d'honneur, puis l'hôte (la personne qui invite), selon les usages de la maison ;</li>\n<li>au débarrassage, empiler les assiettes sur le côté, en regroupant les couverts, jamais devant le client ;</li>\n<li>ramasser les miettes entre le fromage et le dessert si le standing le prévoit ;</li>\n<li>garder la console rangée : elle est vue par les clients.</li>\n</ul>"
      },
      {
       "titre": "Le petit-déjeuner et le service des boissons chaudes",
       "contenu": "\n<p>Le service des petits-déjeuners est fréquent en hôtellerie : <strong>buffet</strong> (le client se sert) ou service à table, voire en chambre. La mise en place comprend vaisselle, viennoiseries, pain, beurre, confitures, jus, laitages, fruits, produits salés selon l'établissement.</p>\n<p>Le café expresso se prépare avec environ 7 g de café moulu pour une tasse de 25 à 40 mL selon l'usage. Le thé se sert avec de l'eau frémissante et un temps d'infusion adapté à la variété. Les boissons chaudes sont posées par la droite, anse de la tasse vers la droite du client.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la qualité d'un service se juge sur la régularité : mêmes gestes, mêmes délais, même attention pour chaque client, du premier au dernier couvert.</div>"
      }
     ],
     "points_cles": [
      "Molleton, nappe et napperon forment le nappage d'une table.",
      "Fourchette à gauche, couteau à droite tranchant vers l'intérieur, verres en haut à droite.",
      "Rectifier le couvert = l'adapter aux plats commandés avant leur arrivée.",
      "Service à l'assiette : posé par la droite ; à l'anglaise et à la française : présenté par la gauche.",
      "Le service au guéridon termine la préparation devant le client.",
      "On débarrasse par la droite quand toute la table a terminé.",
      "Le bon de commande indique table, couverts, heure, plats, cuissons et allergies.",
      "On prévoit une réserve de matériel d'environ 10 % pour un banquet."
     ],
     "lexique": [
      {
       "terme": "Molleton",
       "def": "Sous-nappe épaisse qui protège la table, amortit les bruits et maintient la nappe."
      },
      {
       "terme": "Napperon",
       "def": "Petite nappe posée sur la nappe, changée entre deux clients."
      },
      {
       "terme": "Liteau",
       "def": "Serviette de service portée sur l'avant-bras par le serveur."
      },
      {
       "terme": "Console",
       "def": "Meuble de service où le personnel range le matériel nécessaire à son rang."
      },
      {
       "terme": "Guéridon",
       "def": "Petite table roulante servant à découper, flamber ou dresser devant le client."
      },
      {
       "terme": "Pince",
       "def": "Cuillère et fourchette de service tenues dans une main pour servir à l'anglaise."
      },
      {
       "terme": "Rectifier un couvert",
       "def": "Ajouter ou retirer des couverts selon les plats commandés."
      },
      {
       "terme": "Service à l'anglaise",
       "def": "Le serveur présente le plat et sert lui-même le client à la pince, par la gauche."
      },
      {
       "terme": "Envoyer",
       "def": "Dans le langage professionnel, faire partir les plats de la cuisine vers une table."
      }
     ],
     "qcm": [
      {
       "q": "À quoi sert le molleton ?",
       "options": [
        "À essuyer les verres",
        "À servir à l'anglaise",
        "À protéger la table et amortir les bruits sous la nappe",
        "À couvrir la console"
       ],
       "bonnes": [
        2
       ],
       "explication": "Le molleton est une sous-nappe épaisse : il protège la table, étouffe les bruits et empêche la nappe de glisser."
      },
      {
       "q": "Dans un couvert classique, le couteau est placé :",
       "options": [
        "à gauche, tranchant vers l'extérieur",
        "à droite, tranchant vers l'intérieur",
        "en haut du couvert",
        "à droite, tranchant vers l'extérieur"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le couteau se place à droite, tranchant tourné vers l'assiette."
      },
      {
       "q": "En service à l'anglaise, le serveur :",
       "options": [
        "pose une assiette dressée en cuisine par la droite",
        "laisse le client se servir au plat",
        "découpe la viande devant le client sur un guéridon",
        "sert le client à la pince, par la gauche"
       ],
       "bonnes": [
        3
       ],
       "explication": "À l'anglaise, le serveur présente le plat puis sert lui-même chaque convive avec la pince, par la gauche."
      },
      {
       "q": "Dans quel service le client se sert-il lui-même dans le plat présenté par le serveur ?",
       "options": [
        "Au guéridon",
        "À l'assiette",
        "À l'anglaise",
        "À la française"
       ],
       "bonnes": [
        3
       ],
       "explication": "À la française, le serveur présente le plat par la gauche et le client se sert."
      },
      {
       "q": "Quelles actions se font par la droite du client ? (deux réponses)",
       "options": [
        "Servir les boissons",
        "Présenter un plat à la française",
        "Débarrasser les assiettes",
        "Servir à la pince"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "On verse les boissons, on pose les assiettes et on débarrasse par la droite ; ce qui est présenté au plat arrive par la gauche."
      },
      {
       "q": "Un banquet de 60 personnes prévoit 2 verres par personne et 10 % de réserve. Combien de verres préparer ?",
       "options": [
        "120",
        "66",
        "130",
        "132"
       ],
       "bonnes": [
        3
       ],
       "explication": "60 × 2 = 120 verres ; 120 × 1,10 = 132 verres."
      },
      {
       "q": "Que signifie « rectifier le couvert » ?",
       "options": [
        "Adapter les couverts aux plats commandés",
        "Remplacer la nappe tachée",
        "Corriger l'addition",
        "Aligner les chaises"
       ],
       "bonnes": [
        0
       ],
       "explication": "On ajoute ou retire des couverts selon la commande, avant l'arrivée de chaque plat."
      },
      {
       "q": "Quel service termine la préparation d'un plat devant le client (découpe, flambage) ?",
       "options": [
        "Le libre-service",
        "Le service au guéridon",
        "Le service à l'assiette",
        "Le service au comptoir"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le service au guéridon permet de découper, désosser ou flamber devant le client avant de dresser l'assiette."
      },
      {
       "q": "Quelles informations doivent figurer sur un bon de commande ? (deux réponses)",
       "options": [
        "Le numéro de table",
        "Le salaire du serveur",
        "Les allergies signalées par les clients",
        "La date de la dernière livraison"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Le bon indique notamment la table, le nombre de couverts, l'heure, les plats, les cuissons et toute allergie signalée."
      },
      {
       "q": "Quand débarrasse-t-on les assiettes d'une table ?",
       "options": [
        "Dès qu'un client a fini",
        "Quand tous les convives de la table ont terminé",
        "Seulement à la fin du repas",
        "Avant de servir le pain"
       ],
       "bonnes": [
        1
       ],
       "explication": "On attend que toute la table ait terminé pour ne presser personne, puis on débarrasse par la droite."
      }
     ]
    },
    {
     "id": "fhr-boissons",
     "titre": "Les boissons : connaissance, service et réglementation",
     "duree": 25,
     "objectifs": [
      "Classer les boissons servies en restauration.",
      "Connaître les bases du vin : couleurs, appellations, températures de service.",
      "Appliquer les règles de service des boissons (eaux, vins, boissons chaudes).",
      "Respecter la réglementation sur la vente d'alcool, notamment aux mineurs.",
      "Calculer un degré d'alcool pur et un nombre de doses."
     ],
     "sections": [
      {
       "titre": "Classer les boissons",
       "contenu": "\n<p>La carte des boissons représente une part importante du chiffre d'affaires d'un restaurant. On distingue :</p>\n<ul>\n<li>les <strong>boissons sans alcool</strong> : eaux (plates ou gazeuses), jus de fruits, sodas, sirops, boissons chaudes (café, thé, infusions, chocolat) ;</li>\n<li>les <strong>boissons fermentées</strong> : vin, bière, cidre ; elles sont obtenues par <strong>fermentation alcoolique</strong>, transformation des sucres en alcool par des levures ;</li>\n<li>les <strong>boissons distillées</strong> (spiritueux) : cognac, armagnac, whisky, rhum, eaux-de-vie de fruits ; la <strong>distillation</strong> sépare et concentre l'alcool par chauffage ;</li>\n<li>les <strong>boissons mixtes</strong> et préparations : liqueurs, apéritifs à base de vin, cocktails.</li>\n</ul>\n<p>Le <strong>titre alcoométrique volumique</strong> (TAV), exprimé en % vol., indique le volume d'alcool pur contenu dans 100 mL de boisson. Il figure obligatoirement sur l'étiquette.</p>\n<table>\n<thead><tr><th>Boisson</th><th>Ordre de grandeur du TAV</th></tr></thead>\n<tbody>\n<tr><td>Cidre</td><td>environ 2 à 5 % vol.</td></tr>\n<tr><td>Bière courante</td><td>environ 4 à 6 % vol.</td></tr>\n<tr><td>Vin</td><td>environ 11 à 14 % vol.</td></tr>\n<tr><td>Spiritueux</td><td>au moins 15 % vol., souvent 40 % vol.</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Les bases du vin",
       "contenu": "\n<p>Le vin est issu de la fermentation du jus de raisin. Sa couleur dépend de la méthode :</p>\n<ul>\n<li><strong>vin rouge</strong> : raisins noirs, le jus macère avec les peaux qui donnent couleur et tanins ;</li>\n<li><strong>vin blanc</strong> : jus pressé sans macération, souvent à partir de raisins blancs ;</li>\n<li><strong>vin rosé</strong> : raisins noirs avec une macération courte ou un pressurage direct ;</li>\n<li><strong>vins effervescents</strong> : champagne, crémants, contenant du gaz carbonique issu d'une seconde fermentation.</li>\n</ul>\n<p>Les grandes régions viticoles françaises sont notamment la Bourgogne, le Bordelais, la vallée du Rhône, la vallée de la Loire, l'Alsace, la Champagne, le Languedoc-Roussillon et la Provence. Les vins sont classés en vins <strong>AOP</strong> (anciennement AOC), vins <strong>IGP</strong> et vins sans indication géographique. Le <strong>cépage</strong> est la variété de raisin : chardonnay, sauvignon, pinot noir, merlot, syrah, cabernet sauvignon…</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le vin rouge doit sa couleur à la macération des peaux de raisins noirs ; le cépage est la variété de raisin ; l'AOP garantit l'origine et un mode de production.</div>"
      },
      {
       "titre": "Températures et service du vin",
       "contenu": "\n<p>Un vin servi à la mauvaise température perd ses qualités : trop chaud, l'alcool domine ; trop froid, les arômes se ferment. Ordres de grandeur couramment retenus :</p>\n<table>\n<thead><tr><th>Type de vin</th><th>Température de service</th></tr></thead>\n<tbody>\n<tr><td>Effervescents, vins blancs liquoreux</td><td>6 à 8 °C</td></tr>\n<tr><td>Vins blancs secs, rosés</td><td>8 à 12 °C</td></tr>\n<tr><td>Vins rouges légers et fruités</td><td>12 à 14 °C</td></tr>\n<tr><td>Vins rouges charpentés</td><td>15 à 18 °C</td></tr>\n</tbody>\n</table>\n<p>Service d'une bouteille de vin : présenter la bouteille au client qui a commandé (étiquette visible), l'ouvrir sur la table ou le guéridon, faire goûter l'hôte, puis servir les convives par la droite, en remplissant le verre environ au tiers, et l'hôte en dernier. Un vin blanc ou effervescent se maintient au frais dans un seau à glace. Certains vins rouges âgés sont <strong>décantés</strong> en carafe pour séparer le dépôt.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le nombre de verres d'une bouteille. Une bouteille standard de vin contient 75 cL. Un verre de vin servi au restaurant contient 12,5 cL.<ol>\n<li>Convertir dans la même unité : 75 cL et 12,5 cL.</li>\n<li>Diviser : 75 ÷ 12,5 = 6 verres.</li>\n<li>Calculer la quantité d'alcool pur pour un vin à 12,5 % vol. : 12,5 cL × 0,125 ≈ 1,6 cL, soit environ 16 mL.</li>\n<li>Conversion en masse : l'éthanol a une masse volumique d'environ 0,8 g/mL, donc 16 × 0,8 ≈ 12,5 g d'alcool. C'est l'ordre de grandeur d'un <strong>verre standard</strong> (environ 10 g d'alcool pur), que l'on retrouve aussi dans un demi de bière ou une dose de spiritueux servis en bar.</li>\n</ol></div>"
      },
      {
       "titre": "Bières, eaux, softs et boissons chaudes",
       "contenu": "\n<p>La <strong>bière</strong> est obtenue à partir de céréales maltées (le plus souvent l'orge), d'eau, de houblon (qui donne l'amertume) et de levures. On distingue notamment les bières blondes, ambrées, brunes et blanches (à base de blé). Au bar, la bière pression se sert dans un verre propre et rincé, incliné au début, avec un col de mousse d'environ deux doigts.</p>\n<p>Les <strong>eaux</strong> conditionnées sont soit des eaux minérales naturelles (composition stable, propriétés reconnues), soit des eaux de source. Les eaux gazeuses peuvent être naturellement gazeuses ou gazéifiées. Les bouteilles sont ouvertes devant le client et servies par la droite.</p>\n<p>Les <strong>sodas et jus</strong> se servent frais, avec ou sans glaçons selon la demande, éventuellement avec une rondelle de citron.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> au bar d'un hôtel, le barman mesure les spiritueux avec un doseur (souvent 2 ou 4 cL). La dose régulière garantit au client la même boisson à chaque fois, et à l'entreprise un coût maîtrisé : servir « à l'œil » fait perdre plusieurs doses par bouteille.</div>"
      },
      {
       "titre": "Conseiller une boisson : les accords mets-boissons",
       "contenu": "\n<p>Conseiller une boisson adaptée au plat fait partie du métier de salle et augmente la satisfaction du client. Quelques principes simples guident l'<strong>accord mets-vins</strong> :</p>\n<ul>\n<li><strong>accord par ressemblance</strong> : un plat léger avec un vin léger, un plat puissant avec un vin structuré (poisson grillé et vin blanc sec, gibier en sauce et rouge charpenté) ;</li>\n<li><strong>accord par contraste</strong> : un fromage à pâte persillée salé avec un vin blanc liquoreux sucré ;</li>\n<li><strong>accord régional</strong> : un plat et un vin de la même région (choucroute et vin blanc d'Alsace) ;</li>\n<li>éviter les associations difficiles : vinaigrette et vin (l'acidité écrase le vin), vin rouge tannique avec certains poissons (goût métallique).</li>\n</ul>\n<p>Le conseil s'adresse aussi aux clients qui ne boivent pas d'alcool : jus de fruits pressés, eaux aromatisées, thés glacés ou cocktails sans alcool (appelés <strong>mocktails</strong>) se marient eux aussi avec les plats. Le serveur pose des questions (préférences, budget) et propose deux ou trois choix plutôt qu'un seul.</p>"
      },
      {
       "titre": "La réglementation de la vente d'alcool",
       "contenu": "\n<p>Vendre de l'alcool engage la responsabilité de l'établissement et du personnel.</p>\n<ul>\n<li>Un établissement doit détenir une <strong>licence</strong> adaptée pour vendre des boissons alcooliques, et son exploitant doit suivre une formation spécifique.</li>\n<li>La vente et l'offre gratuite d'alcool aux <strong>mineurs</strong> sont interdites. Le personnel peut exiger une pièce d'identité en cas de doute.</li>\n<li>Il est interdit de servir de l'alcool à une personne <strong>manifestement ivre</strong>.</li>\n<li>La publicité pour l'alcool est encadrée (loi Évin) et la mention de prévention sur l'abus d'alcool est obligatoire.</li>\n<li>Les prix des boissons doivent être affichés, et un choix de boissons sans alcool doit être proposé à la clientèle.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'élève mineur en formation peut, dans le cadre de sa formation, servir des boissons alcooliques en restaurant, mais n'en consomme pas. La dégustation professionnelle est encadrée par l'établissement de formation. Par ailleurs, la TVA sur les boissons alcooliques est de 20 %, alors que celle des repas consommés sur place est de 10 %.</div>"
      }
     ],
     "points_cles": [
      "Boissons fermentées (vin, bière, cidre) et distillées (spiritueux) n'ont pas la même teneur en alcool.",
      "Le TAV en % vol. indique le volume d'alcool pur pour 100 mL.",
      "Le vin rouge doit sa couleur à la macération des peaux de raisins noirs.",
      "Le cépage est la variété de raisin.",
      "Effervescents 6-8 °C, blancs secs 8-12 °C, rouges charpentés 15-18 °C environ.",
      "On fait goûter l'hôte, on sert les convives par la droite, l'hôte en dernier.",
      "Une bouteille de 75 cL donne 6 verres de 12,5 cL.",
      "Vente d'alcool interdite aux mineurs et aux personnes manifestement ivres.",
      "TVA : 10 % sur les repas sur place, 20 % sur les boissons alcooliques."
     ],
     "lexique": [
      {
       "terme": "Fermentation alcoolique",
       "def": "Transformation des sucres en alcool et en gaz carbonique par des levures."
      },
      {
       "terme": "Distillation",
       "def": "Séparation et concentration de l'alcool par chauffage puis condensation des vapeurs."
      },
      {
       "terme": "TAV",
       "def": "Titre alcoométrique volumique : pourcentage du volume d'alcool pur dans la boisson."
      },
      {
       "terme": "Cépage",
       "def": "Variété de vigne et de raisin (merlot, chardonnay…)."
      },
      {
       "terme": "Tanins",
       "def": "Substances issues des peaux et pépins qui donnent au vin rouge sa structure et une sensation d'astringence."
      },
      {
       "terme": "Décanter",
       "def": "Transvaser un vin en carafe pour séparer le dépôt ou l'aérer."
      },
      {
       "terme": "Houblon",
       "def": "Plante qui donne à la bière son amertume et une partie de ses arômes."
      },
      {
       "terme": "Doseur",
       "def": "Bec ou mesure permettant de servir une quantité précise de spiritueux."
      },
      {
       "terme": "Verre standard",
       "def": "Quantité de boisson servie contenant environ 10 g d'alcool pur."
      }
     ],
     "qcm": [
      {
       "q": "Lesquelles de ces boissons sont obtenues par fermentation, sans distillation ? (deux réponses)",
       "options": [
        "Le cidre",
        "Le cognac",
        "La bière",
        "Le whisky"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Cidre et bière sont des boissons fermentées. Cognac et whisky sont distillés."
      },
      {
       "q": "Une étiquette indique « 13 % vol. ». Cela signifie :",
       "options": [
        "13 g de sucre par litre",
        "13 mL d'alcool pur pour 100 mL de vin",
        "13 % de jus de raisin",
        "13 cL de vin par verre"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le titre alcoométrique volumique indique le volume d'alcool pur dans 100 mL de boisson."
      },
      {
       "q": "Le vin rouge doit sa couleur :",
       "options": [
        "à l'ajout de colorant",
        "au vieillissement en fût",
        "au cépage chardonnay",
        "à la macération du jus avec les peaux de raisins noirs"
       ],
       "bonnes": [
        3
       ],
       "explication": "Les pigments sont dans la peau des raisins noirs ; la macération les fait passer dans le jus."
      },
      {
       "q": "À quelle température sert-on généralement un vin effervescent ?",
       "options": [
        "6 à 8 °C",
        "12 à 14 °C",
        "15 à 18 °C",
        "20 à 22 °C"
       ],
       "bonnes": [
        0
       ],
       "explication": "Les effervescents se servent bien frais, autour de 6 à 8 °C."
      },
      {
       "q": "Combien de verres de 12,5 cL contient une bouteille de 75 cL ?",
       "options": [
        "5",
        "7",
        "8",
        "6"
       ],
       "bonnes": [
        3
       ],
       "explication": "75 ÷ 12,5 = 6 verres."
      },
      {
       "q": "Lors du service d'une bouteille de vin, qui goûte le vin en premier ?",
       "options": [
        "Le sommelier, en cuisine",
        "La personne la plus âgée",
        "Le convive le plus proche",
        "L'hôte, c'est-à-dire la personne qui a commandé"
       ],
       "bonnes": [
        3
       ],
       "explication": "On fait goûter l'hôte, puis on sert les convives et l'hôte en dernier."
      },
      {
       "q": "Un client semble avoir moins de 18 ans et commande une bière. Que fait le serveur ?",
       "options": [
        "Il sert une demi-dose",
        "Il demande une pièce d'identité et refuse s'il est mineur",
        "Il sert si un adulte est présent à la table",
        "Il sert sans rien demander"
       ],
       "bonnes": [
        1
       ],
       "explication": "La vente d'alcool aux mineurs est interdite ; le personnel peut exiger une preuve de majorité."
      },
      {
       "q": "Quel ingrédient donne son amertume à la bière ?",
       "options": [
        "Le malt",
        "Le houblon",
        "La levure",
        "Le sucre"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le houblon apporte l'amertume et une partie des arômes ; le malt apporte les sucres fermentescibles."
      },
      {
       "q": "Quel taux de TVA s'applique à un verre de vin servi au restaurant ?",
       "options": [
        "5,5 %",
        "10 %",
        "20 %",
        "0 %"
       ],
       "bonnes": [
        2
       ],
       "explication": "Les boissons alcooliques sont taxées à 20 %, alors que les repas consommés sur place le sont à 10 %."
      },
      {
       "q": "Pourquoi le barman utilise-t-il un doseur ?",
       "options": [
        "Pour servir une quantité régulière et maîtriser les coûts",
        "Pour refroidir la boisson",
        "Pour ouvrir les bouteilles",
        "Pour décanter le vin"
       ],
       "bonnes": [
        0
       ],
       "explication": "Le doseur garantit la même quantité à chaque client et évite les pertes de produit."
      }
     ]
    },
    {
     "id": "fhr-relation-client",
     "titre": "Relation clientèle, vente et communication professionnelle",
     "duree": 25,
     "objectifs": [
      "Adopter une communication verbale et non verbale adaptée à l'accueil.",
      "Identifier les besoins d'un client et lui proposer une offre adaptée.",
      "Traiter une réclamation avec méthode.",
      "Connaître les informations obligatoires à donner aux clients (prix, allergènes, origine).",
      "Calculer une addition avec la TVA."
     ],
     "sections": [
      {
       "titre": "Le client au centre du métier",
       "contenu": "\n<p>En restauration, le client n'achète pas seulement un repas : il achète une <strong>prestation</strong>, c'est-à-dire un ensemble qui comprend les produits, l'accueil, le cadre, le service et le prix. Un client satisfait revient et recommande l'établissement ; un client mécontent le dit souvent à beaucoup de monde, notamment par des avis en ligne.</p>\n<p>Les clients n'ont pas tous les mêmes attentes. On distingue par exemple :</p>\n<ul>\n<li>la clientèle <strong>d'affaires</strong> : pressée le midi, attend rapidité et discrétion ;</li>\n<li>la clientèle <strong>de loisirs</strong> et touristique : vient pour découvrir, apprécie le conseil et les spécialités locales ;</li>\n<li>la clientèle <strong>familiale</strong> : attend des menus enfants, de l'espace, de la patience ;</li>\n<li>la clientèle <strong>d'habitués</strong> : apprécie d'être reconnue (nom, table préférée, habitudes).</li>\n</ul>\n<p>Cuisine et salle participent ensemble à la relation client : le cuisinier peut être appelé à présenter un plat, à expliquer une composition ou à adapter une assiette pour une allergie. Le bac pro Cuisine comprend d'ailleurs une compétence de communication à des fins commerciales.</p>"
      },
      {
       "titre": "Communiquer : les mots et le corps",
       "contenu": "\n<p>La <strong>communication verbale</strong> passe par les mots : formules de politesse, vouvoiement, vocabulaire précis, phrases positives. On dit « Je vous propose la table près de la fenêtre » plutôt que « Il n'y a plus rien d'autre ».</p>\n<p>La <strong>communication non verbale</strong> passe par le corps : sourire, regard, posture droite, gestes ouverts, tenue impeccable, distance respectueuse. Elle transmet souvent plus que les mots. Un serveur qui dit « Avec plaisir » en soupirant ne convainc personne.</p>\n<table>\n<thead><tr><th>Étape de l'accueil</th><th>Formule ou geste attendu</th></tr></thead>\n<tbody>\n<tr><td>Arrivée</td><td>Regarder le client, sourire, « Bonjour madame, bonjour monsieur, bienvenue »</td></tr>\n<tr><td>Réservation</td><td>« Avez-vous réservé ? À quel nom, s'il vous plaît ? »</td></tr>\n<tr><td>Installation</td><td>Accompagner, tirer la chaise, prendre les vêtements si c'est l'usage</td></tr>\n<tr><td>Attente</td><td>Prévenir et estimer le délai si la table n'est pas prête, proposer un verre au bar</td></tr>\n<tr><td>Départ</td><td>Remercier, raccompagner, « Au plaisir de vous revoir »</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la première impression se forme en quelques secondes. Accueillir vite, même si l'on est occupé : un signe de tête et « Je suis à vous dans un instant » suffisent à rassurer.</div>"
      },
      {
       "titre": "Vendre et conseiller",
       "contenu": "\n<p>La vente en salle suit une démarche simple :</p>\n<ol>\n<li><strong>Découvrir</strong> les besoins : poser des questions ouvertes (« Qu'est-ce qui vous ferait plaisir ce soir ? »), écouter, repérer les contraintes (temps, budget, allergies, régime).</li>\n<li><strong>Proposer</strong> : présenter deux ou trois produits adaptés avec des arguments concrets (produit de saison, origine, mode de cuisson, accompagnement).</li>\n<li><strong>Reformuler</strong> la commande pour éviter les erreurs : « Donc deux entrecôtes, une saignante et une à point, et une sole. »</li>\n<li><strong>Suggérer</strong> une vente additionnelle sans insister : apéritif, vin au verre, dessert, café gourmand.</li>\n</ol>\n<p>Un argument efficace parle au client de ce qu'il va ressentir : « La sole est pêchée à la ligne, la chair est très fine, elle est servie avec un beurre noisette. » Le vocabulaire des cuissons de viande doit être connu : bleu, saignant, à point, bien cuit.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une cliente indique qu'elle est allergique aux fruits à coque. Le chef de rang le note sur le bon, prévient oralement la cuisine, et vérifie dans le classeur des allergènes que le dessert proposé n'en contient pas. Il ne répond jamais « je pense que non » : il vérifie ou il demande au chef.</div>"
      },
      {
       "titre": "Traiter une réclamation",
       "contenu": "\n<p>Une <strong>réclamation</strong> est une occasion de garder le client. Bien traitée, elle le fidélise. On applique une démarche en étapes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> traiter une réclamation. Situation : un client se plaint que sa viande, demandée saignante, est trop cuite.<ol>\n<li><strong>Écouter</strong> sans interrompre, calmement, en regardant le client.</li>\n<li><strong>S'excuser</strong> au nom de l'établissement, sans accuser un collègue : « Je suis désolé, ce n'est pas ce que vous avez demandé. »</li>\n<li><strong>Reformuler</strong> pour montrer qu'on a compris : « Vous l'aviez commandée saignante. »</li>\n<li><strong>Proposer une solution</strong> rapide : refaire le plat, en indiquant le délai, ou proposer un autre plat.</li>\n<li><strong>Agir et informer</strong> le responsable et la cuisine.</li>\n<li><strong>Vérifier</strong> ensuite la satisfaction du client et le remercier de l'avoir signalé.</li>\n</ol></div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne jamais se justifier longuement, contredire le client ou rejeter la faute sur la cuisine devant lui. Un client agressif ou une réclamation sérieuse (suspicion d'intoxication, corps étranger dans un plat) est confié immédiatement au responsable.</div>"
      },
      {
       "titre": "Les informations obligatoires pour le client",
       "contenu": "\n<p>La réglementation protège le consommateur. Dans un restaurant :</p>\n<ul>\n<li>les prix sont affichés <strong>toutes taxes comprises (TTC)</strong> et <strong>service compris</strong>, à l'intérieur et de façon visible depuis l'extérieur pendant le service (menus et une partie de la carte) ;</li>\n<li>la présence des <strong>14 allergènes majeurs</strong> réglementaires (dont gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, sésame, sulfites, lupin, mollusques) doit être indiquée par écrit et accessible au client ;</li>\n<li>l'<strong>origine des viandes</strong> servies doit être indiquée ;</li>\n<li>la mention ou le logo <strong>« fait maison »</strong>, s'il est utilisé, doit correspondre à des plats réellement élaborés sur place ;</li>\n<li>une <strong>note</strong> (addition) doit être remise au client à partir d'un certain montant ou s'il la demande.</li>\n</ul>"
      },
      {
       "titre": "Calculer une addition et la TVA",
       "contenu": "\n<p>La <strong>TVA</strong> (taxe sur la valeur ajoutée) est un impôt payé par le client et reversé à l'État par le restaurant. Le prix TTC est égal au prix hors taxes (HT) augmenté de la TVA. En restauration sur place, la TVA est de <strong>10 %</strong> sur les aliments et boissons sans alcool, et de <strong>20 %</strong> sur les boissons alcooliques.</p>\n<p>Formules : prix TTC = prix HT × (1 + taux) ; prix HT = prix TTC ÷ (1 + taux) ; TVA = prix TTC − prix HT.</p>\n<table>\n<thead><tr><th>Ligne de l'addition</th><th>Prix TTC</th><th>Taux</th><th>Prix HT</th><th>TVA</th></tr></thead>\n<tbody>\n<tr><td>2 menus à 27,50 €</td><td>55,00 €</td><td>10 %</td><td>50,00 €</td><td>5,00 €</td></tr>\n<tr><td>1 bouteille de vin</td><td>30,00 €</td><td>20 %</td><td>25,00 €</td><td>5,00 €</td></tr>\n<tr><td>Total</td><td>85,00 €</td><td></td><td>75,00 €</td><td>10,00 €</td></tr>\n</tbody>\n</table>\n<p>Calcul détaillé : 55 ÷ 1,10 = 50 € HT, donc 5 € de TVA ; 30 ÷ 1,20 = 25 € HT, donc 5 € de TVA. Le client paie 85 €, dont 10 € de taxes reversées à l'État. Les prix affichés étant service compris, le pourboire éventuel est un geste libre du client.</p>"
      }
     ],
     "points_cles": [
      "Le client achète une prestation : produits, accueil, cadre, service et prix.",
      "Communication verbale (mots) et non verbale (sourire, posture, regard) se complètent.",
      "Vendre : découvrir, proposer, reformuler, suggérer.",
      "Réclamation : écouter, s'excuser, reformuler, proposer, agir, vérifier.",
      "Une allergie signalée se vérifie toujours, jamais « au hasard ».",
      "Les prix sont affichés TTC et service compris, visibles de l'extérieur.",
      "14 allergènes majeurs doivent être signalés par écrit.",
      "TVA sur place : 10 % sur les repas, 20 % sur les boissons alcooliques.",
      "Prix HT = prix TTC ÷ (1 + taux)."
     ],
     "lexique": [
      {
       "terme": "Prestation",
       "def": "Ensemble des produits et services vendus au client lors de son passage."
      },
      {
       "terme": "Communication non verbale",
       "def": "Message transmis par le corps : regard, sourire, posture, gestes, tenue."
      },
      {
       "terme": "Reformuler",
       "def": "Répéter avec ses mots ce que le client a dit pour vérifier la bonne compréhension."
      },
      {
       "terme": "Vente additionnelle",
       "def": "Proposition d'un produit supplémentaire (apéritif, dessert, café) en plus de la commande principale."
      },
      {
       "terme": "Réclamation",
       "def": "Expression d'une insatisfaction du client sur un produit ou un service."
      },
      {
       "terme": "TTC",
       "def": "Toutes taxes comprises : prix payé par le client, TVA incluse."
      },
      {
       "terme": "HT",
       "def": "Hors taxes : prix avant ajout de la TVA."
      },
      {
       "terme": "TVA",
       "def": "Taxe sur la valeur ajoutée, payée par le client et reversée à l'État."
      },
      {
       "terme": "Allergène",
       "def": "Substance capable de provoquer une réaction allergique chez certaines personnes."
      }
     ],
     "qcm": [
      {
       "q": "Quel comportement relève de la communication non verbale ?",
       "options": [
        "Dire « bonjour madame »",
        "Reformuler la commande",
        "Sourire et regarder le client",
        "Présenter la carte des vins oralement"
       ],
       "bonnes": [
        2
       ],
       "explication": "Sourire, regard, posture et gestes transmettent un message sans mots."
      },
      {
       "q": "Un client commande deux plats. Le serveur répète : « Donc un tartare et un risotto. » Il :",
       "options": [
        "fait une vente additionnelle",
        "reformule",
        "traite une réclamation",
        "découvre les besoins"
       ],
       "bonnes": [
        1
       ],
       "explication": "Reformuler permet de vérifier la commande et d'éviter les erreurs."
      },
      {
       "q": "Quelle est la première étape face à un client mécontent ?",
       "options": [
        "Lui offrir immédiatement le repas",
        "Expliquer que c'est la faute de la cuisine",
        "Appeler la police",
        "L'écouter sans l'interrompre"
       ],
       "bonnes": [
        3
       ],
       "explication": "On écoute d'abord calmement ; viennent ensuite les excuses, la reformulation et la solution."
      },
      {
       "q": "Une cliente signale une allergie à l'arachide et demande si le dessert en contient. Le serveur :",
       "options": [
        "vérifie dans la liste des allergènes ou demande au chef",
        "répond « je ne crois pas »",
        "conseille de goûter un peu pour voir",
        "dit que ce n'est pas son rôle"
       ],
       "bonnes": [
        0
       ],
       "explication": "Une allergie peut être grave : on vérifie toujours l'information écrite ou auprès de la cuisine."
      },
      {
       "q": "Quelles informations la réglementation impose-t-elle de donner aux clients ? (deux réponses)",
       "options": [
        "La présence des allergènes majeurs",
        "Le nom du fournisseur de pain",
        "Le salaire du chef",
        "L'origine des viandes servies"
       ],
       "bonnes": [
        0,
        3
       ],
       "explication": "Les allergènes et l'origine des viandes font partie des informations obligatoires en restauration."
      },
      {
       "q": "Un menu est vendu 33,00 € TTC avec une TVA de 10 %. Quel est son prix HT ?",
       "options": [
        "29,70 €",
        "30,00 €",
        "36,30 €",
        "23,00 €"
       ],
       "bonnes": [
        1
       ],
       "explication": "Prix HT = 33 ÷ 1,10 = 30,00 €. Retirer 10 % du TTC donnerait un résultat faux."
      },
      {
       "q": "Une bouteille de vin est vendue 24,00 € TTC. Quel est le montant de la TVA à 20 % ?",
       "options": [
        "4,80 €",
        "2,40 €",
        "4,00 €",
        "20,00 €"
       ],
       "bonnes": [
        2
       ],
       "explication": "Prix HT = 24 ÷ 1,20 = 20 € ; TVA = 24 − 20 = 4,00 €."
      },
      {
       "q": "Proposer un café gourmand à un client qui a fini son plat est :",
       "options": [
        "une réclamation",
        "une reformulation",
        "une faute professionnelle",
        "une vente additionnelle"
       ],
       "bonnes": [
        3
       ],
       "explication": "On suggère un produit supplémentaire à la commande principale : c'est une vente additionnelle."
      },
      {
       "q": "Les prix affichés dans un restaurant s'entendent :",
       "options": [
        "hors taxes, service en plus",
        "TTC, service compris",
        "TTC, service en plus",
        "hors taxes, service compris"
       ],
       "bonnes": [
        1
       ],
       "explication": "Les prix affichés au client sont toutes taxes comprises et service compris."
      },
      {
       "q": "Une clientèle d'affaires le midi attend surtout : (deux réponses)",
       "options": [
        "de la rapidité",
        "un spectacle de plusieurs heures",
        "de la discrétion",
        "un menu enfant"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Le temps de pause est limité et les conversations sont souvent professionnelles : rapidité et discrétion priment."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Hygiène, qualité et sciences de l'alimentation",
   "chapitres": [
    {
     "id": "fhr-hygiene-haccp",
     "titre": "Microbiologie, hygiène et méthode HACCP",
     "duree": 30,
     "objectifs": [
      "Connaître les principaux micro-organismes rencontrés en restauration et leurs conditions de multiplication.",
      "Définir une toxi-infection alimentaire collective (TIAC).",
      "Identifier les sources de contamination avec la méthode des 5 M.",
      "Énoncer les principes de la méthode HACCP et le rôle du plan de maîtrise sanitaire.",
      "Appliquer les règles d'hygiène du personnel."
     ],
     "sections": [
      {
       "titre": "Les micro-organismes",
       "contenu": "\n<p>Les <strong>micro-organismes</strong> sont des êtres vivants invisibles à l'œil nu : bactéries, levures, moisissures, virus, parasites. Beaucoup sont utiles (levures du pain, ferments du yaourt et du fromage). D'autres altèrent les aliments (moisissures) ou sont <strong>pathogènes</strong>, c'est-à-dire qu'ils rendent malades.</p>\n<table>\n<thead><tr><th>Micro-organisme</th><th>Où le trouve-t-on ?</th><th>Aliments à risque</th></tr></thead>\n<tbody>\n<tr><td>Salmonelles (bactéries)</td><td>Intestin des volailles et d'autres animaux</td><td>Œufs crus (mayonnaise, mousse au chocolat), volailles</td></tr>\n<tr><td>Staphylocoque doré (bactérie)</td><td>Peau, nez, gorge, plaies de l'être humain</td><td>Plats manipulés après cuisson, pâtisseries à la crème</td></tr>\n<tr><td>Listeria (bactérie)</td><td>Sol, environnement humide ; se multiplie même au froid</td><td>Fromages au lait cru, charcuteries, poissons fumés</td></tr>\n<tr><td><em>Clostridium perfringens</em> (bactérie)</td><td>Sol, intestin ; supporte la cuisson sous forme de spores</td><td>Plats en sauce préparés en grande quantité et refroidis lentement</td></tr>\n<tr><td>Norovirus (virus)</td><td>Personnes malades, mains, eau contaminée</td><td>Coquillages crus, aliments manipulés</td></tr>\n</tbody>\n</table>\n<p>Une bactérie se multiplie en se divisant en deux. Dans de bonnes conditions, une division peut avoir lieu environ toutes les 20 minutes : une seule bactérie peut alors donner plusieurs milliards de descendantes en moins de 12 heures.</p>"
      },
      {
       "titre": "Conditions de multiplication et TIAC",
       "contenu": "\n<p>Les bactéries ont besoin de plusieurs conditions pour se multiplier :</p>\n<ul>\n<li>une <strong>température</strong> favorable : la plupart des bactéries pathogènes se multiplient surtout entre +10 °C et +63 °C, avec un optimum proche de +37 °C (la température du corps) ;</li>\n<li>de l'<strong>humidité</strong> (eau disponible dans l'aliment) ;</li>\n<li>des <strong>nutriments</strong> (protéines, sucres) ;</li>\n<li>du <strong>temps</strong> ;</li>\n<li>un milieu ni trop acide ni trop salé ou sucré.</li>\n</ul>\n<p>Le froid ralentit ou arrête la multiplication mais ne tue pas les bactéries ; une cuisson suffisante détruit la plupart d'entre elles.</p>\n<p>Une <strong>toxi-infection alimentaire collective (TIAC)</strong> est l'apparition d'au moins deux cas de symptômes similaires, en général digestifs (vomissements, diarrhée, douleurs abdominales, fièvre), dont on peut rapporter la cause à une même origine alimentaire. C'est une maladie à <strong>déclaration obligatoire</strong> auprès des autorités sanitaires.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> entre +10 °C et +63 °C, les bactéries se multiplient vite. Il faut donc garder les aliments froids bien froids (en général entre 0 et +4 °C pour les produits périssables) et les plats chauds bien chauds (au moins +63 °C), et réduire au minimum le temps passé entre les deux.</div>"
      },
      {
       "titre": "Les sources de contamination : les 5 M",
       "contenu": "\n<p>Pour rechercher l'origine d'une contamination, on utilise la méthode des <strong>5 M</strong>, représentée par un diagramme en arêtes de poisson (diagramme d'Ishikawa) qui part des cinq causes possibles vers le problème.</p>\n<table>\n<thead><tr><th>M</th><th>Exemples de contamination</th><th>Mesures préventives</th></tr></thead>\n<tbody>\n<tr><td>Main-d'œuvre (personnel)</td><td>Mains sales, toux, plaie, tenue souillée</td><td>Lavage des mains, tenue propre, pansement étanche, signaler une maladie</td></tr>\n<tr><td>Matières premières</td><td>Terre des légumes, œufs souillés, viande contaminée</td><td>Fournisseurs agréés, contrôle à réception, lavage, décartonnage</td></tr>\n<tr><td>Matériel</td><td>Planche mal nettoyée, trancheuse encrassée</td><td>Plan de nettoyage, matériel par usage (code couleur des planches)</td></tr>\n<tr><td>Milieu (locaux)</td><td>Insectes, rongeurs, poussière, croisement sale-propre</td><td>Marche en avant, lutte contre les nuisibles, entretien</td></tr>\n<tr><td>Méthodes</td><td>Refroidissement trop lent, décongélation à température ambiante</td><td>Respect des procédures et des températures</td></tr>\n</tbody>\n</table>\n<p>La <strong>contamination croisée</strong> est le transfert de microbes d'un aliment cru ou sale vers un aliment prêt à consommer, par les mains, un ustensile ou une surface. Exemple : découper une volaille crue puis une tomate sur la même planche sans la nettoyer.</p>"
      },
      {
       "titre": "L'hygiène du personnel",
       "contenu": "\n<p>Le personnel est la première source de contamination. Les règles de base sont :</p>\n<ul>\n<li>tenue propre, complète, changée chaque jour, cheveux entièrement couverts ;</li>\n<li>ongles courts, sans vernis, pas de bijoux ni de montre ;</li>\n<li>plaies protégées par un pansement étanche et un gant ;</li>\n<li>ne pas fumer, manger ou mâcher de chewing-gum en zone de production ;</li>\n<li>signaler au responsable une gastro-entérite, une angine ou une infection de la peau.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> le lavage des mains, au lave-mains à commande non manuelle.<ol>\n<li>Mouiller les mains et les poignets à l'eau tiède.</li>\n<li>Appliquer le savon bactéricide liquide distribué.</li>\n<li>Frotter au moins 30 secondes : paumes, dos des mains, entre les doigts, pouces, bout des doigts et ongles, poignets.</li>\n<li>Rincer abondamment, des doigts vers les poignets.</li>\n<li>Sécher avec un essuie-mains à usage unique, jeté dans une poubelle à commande non manuelle.</li>\n</ol>\nMoments obligatoires : à la prise de poste, après les toilettes, après s'être mouché, après avoir manipulé des produits crus, des déchets, de l'argent ou des emballages, à chaque changement d'activité.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le port de gants ne remplace pas le lavage des mains. Un gant porté trop longtemps se contamine comme une main ; il se change aussi souvent qu'on se laverait les mains.</div>"
      },
      {
       "titre": "Nuisibles, déchets et contrôles officiels",
       "contenu": "\n<p>Les <strong>nuisibles</strong> (rongeurs, cafards, mouches, oiseaux) transportent des microbes. On les empêche d'entrer (moustiquaires, portes fermées, bas de portes étanches), on ne leur laisse rien à manger (denrées en contenants fermés, sols propres) et l'on confie souvent la lutte à une entreprise spécialisée, qui pose des pièges et note ses passages dans un registre.</p>\n<p>Les <strong>déchets</strong> sont placés dans des poubelles à commande non manuelle, munies de sacs, vidées régulièrement et au moins à la fin de chaque service. Les locaux à poubelles sont séparés des zones de production et nettoyés.</p>\n<p>Les établissements sont contrôlés par les services vétérinaires de l'État (les directions départementales chargées de la protection des populations). Les inspecteurs vérifient les locaux, les températures, les enregistrements et la traçabilité. Les résultats des contrôles sont rendus publics, sous la forme d'un niveau d'hygiène consultable par les consommateurs.</p>"
      },
      {
       "titre": "La méthode HACCP et le plan de maîtrise sanitaire",
       "contenu": "\n<p>La réglementation européenne, appelée <strong>« paquet hygiène »</strong>, rend chaque exploitant responsable de la sécurité des aliments qu'il sert. Il doit mettre en place des procédures fondées sur la méthode <strong>HACCP</strong> (de l'anglais <em>Hazard Analysis Critical Control Point</em> : analyse des dangers et points critiques pour leur maîtrise).</p>\n<p>On distingue trois types de <strong>dangers</strong> : biologiques (bactéries, virus, parasites), chimiques (résidus de produits d'entretien, allergènes) et physiques (morceau de verre, os, cheveu, agrafe).</p>\n<ol>\n<li>Analyser les dangers à chaque étape de la production.</li>\n<li>Déterminer les <strong>points critiques pour la maîtrise (CCP)</strong> : les étapes où un contrôle est indispensable (cuisson, refroidissement…).</li>\n<li>Fixer des <strong>limites critiques</strong> (exemple : température à cœur atteinte).</li>\n<li>Mettre en place une surveillance (mesures, relevés).</li>\n<li>Prévoir des actions correctives si une limite n'est pas respectée.</li>\n<li>Vérifier que le système fonctionne.</li>\n<li>Tenir une documentation et des enregistrements.</li>\n</ol>\n<p>Ces éléments sont rassemblés dans le <strong>plan de maîtrise sanitaire (PMS)</strong> de l'établissement, avec les bonnes pratiques d'hygiène, le plan de nettoyage, la traçabilité et la gestion des produits non conformes. Les professionnels s'appuient sur les <strong>guides de bonnes pratiques d'hygiène (GBPH)</strong> de leur secteur. En restauration commerciale, au moins une personne de l'établissement doit avoir suivi une formation spécifique en hygiène alimentaire.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chaque matin, le commis relève la température des chambres froides et la note sur la feuille d'enregistrement. Un jour, la chambre affiche +7 °C. Il prévient immédiatement le chef (action corrective), qui vérifie les produits, déplace ceux qui peuvent l'être et appelle le frigoriste. L'incident et les décisions sont notés : c'est la traçabilité du PMS.</div>"
      }
     ],
     "points_cles": [
      "Certains micro-organismes sont utiles, d'autres altèrent les aliments ou sont pathogènes.",
      "Les bactéries se multiplient surtout entre +10 °C et +63 °C, avec un optimum vers +37 °C.",
      "Le froid ralentit les bactéries mais ne les tue pas.",
      "Une TIAC = au moins deux cas similaires d'une même origine alimentaire ; déclaration obligatoire.",
      "Les 5 M : main-d'œuvre, matières premières, matériel, milieu, méthodes.",
      "La contamination croisée passe du cru ou du sale vers le prêt à consommer.",
      "Lavage des mains : au moins 30 secondes, à chaque changement d'activité.",
      "HACCP : analyser les dangers, repérer les points critiques, surveiller, corriger, enregistrer.",
      "Le PMS rassemble toutes les procédures d'hygiène de l'établissement."
     ],
     "lexique": [
      {
       "terme": "Pathogène",
       "def": "Se dit d'un micro-organisme capable de provoquer une maladie."
      },
      {
       "terme": "TIAC",
       "def": "Toxi-infection alimentaire collective : au moins deux cas similaires liés à un même aliment."
      },
      {
       "terme": "Contamination croisée",
       "def": "Transfert de microbes d'un aliment ou d'une surface sale vers un aliment propre."
      },
      {
       "terme": "5 M",
       "def": "Méthode d'analyse des causes : main-d'œuvre, matières premières, matériel, milieu, méthodes."
      },
      {
       "terme": "HACCP",
       "def": "Méthode d'analyse des dangers et de maîtrise des points critiques pour la sécurité des aliments."
      },
      {
       "terme": "CCP",
       "def": "Point critique pour la maîtrise : étape où un contrôle est indispensable pour éliminer ou réduire un danger."
      },
      {
       "terme": "PMS",
       "def": "Plan de maîtrise sanitaire : documents et procédures d'hygiène de l'établissement."
      },
      {
       "terme": "GBPH",
       "def": "Guide de bonnes pratiques d'hygiène, rédigé par la profession et validé par l'administration."
      },
      {
       "terme": "Paquet hygiène",
       "def": "Ensemble de règlements européens sur la sécurité des aliments."
      },
      {
       "terme": "Spore",
       "def": "Forme de résistance de certaines bactéries, capable de survivre à la cuisson."
      }
     ],
     "qcm": [
      {
       "q": "Quelle bactérie se trouve fréquemment sur la peau, dans le nez et la gorge de l'être humain ?",
       "options": [
        "Les salmonelles",
        "Le staphylocoque doré",
        "Listeria",
        "Clostridium perfringens"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le staphylocoque doré est porté par l'être humain ; il contamine les plats manipulés après cuisson."
      },
      {
       "q": "Quelle bactérie a la particularité de se multiplier même au réfrigérateur ?",
       "options": [
        "Listeria",
        "Les salmonelles",
        "Le staphylocoque doré",
        "Aucune bactérie"
       ],
       "bonnes": [
        0
       ],
       "explication": "Listeria peut se multiplier à basse température, d'où sa présence possible dans les produits réfrigérés de longue conservation."
      },
      {
       "q": "Dans quelle plage de température les bactéries pathogènes se multiplient-elles le plus ?",
       "options": [
        "Entre −18 °C et 0 °C",
        "Entre 0 °C et +3 °C",
        "Au-dessus de +100 °C",
        "Entre +10 °C et +63 °C"
       ],
       "bonnes": [
        3
       ],
       "explication": "C'est la zone de multiplication rapide, avec un optimum autour de +37 °C."
      },
      {
       "q": "Une TIAC est définie par :",
       "options": [
        "un seul malade après un repas",
        "au moins deux cas similaires dont la cause est une même origine alimentaire",
        "une contamination du matériel",
        "une erreur d'étiquetage"
       ],
       "bonnes": [
        1
       ],
       "explication": "Il faut au moins deux cas de symptômes similaires rapportés à un même aliment ; la déclaration est obligatoire."
      },
      {
       "q": "Découper un poulet cru puis des tomates sur la même planche sans la nettoyer provoque :",
       "options": [
        "une rupture de la chaîne du froid",
        "une réaction de Maillard",
        "une contamination croisée",
        "une stérilisation"
       ],
       "bonnes": [
        2
       ],
       "explication": "Les microbes du produit cru passent sur un aliment consommé cru : c'est une contamination croisée."
      },
      {
       "q": "Dans la méthode des 5 M, un refroidissement trop lent d'un plat relève de :",
       "options": [
        "la main-d'œuvre",
        "la matière première",
        "le milieu",
        "la méthode"
       ],
       "bonnes": [
        3
       ],
       "explication": "C'est une façon de faire, donc une méthode, qui ne respecte pas la procédure."
      },
      {
       "q": "Quelles affirmations sur les gants sont exactes ? (deux réponses)",
       "options": [
        "Ils remplacent le lavage des mains",
        "Ils se changent aussi souvent qu'on se laverait les mains",
        "Ils protègent une plaie recouverte d'un pansement",
        "Ils peuvent être gardés toute la journée"
       ],
       "bonnes": [
        1,
        2
       ],
       "explication": "Un gant se contamine comme une main et doit être changé ; il complète le pansement étanche sur une plaie."
      },
      {
       "q": "Que signifie CCP dans la méthode HACCP ?",
       "options": [
        "Contrôle de la chaîne de production",
        "Point critique pour la maîtrise",
        "Commande de produits",
        "Coefficient de coût de production"
       ],
       "bonnes": [
        1
       ],
       "explication": "Un CCP est une étape où un contrôle est indispensable pour maîtriser un danger, comme la cuisson à cœur."
      },
      {
       "q": "Un cheveu trouvé dans une assiette est un danger :",
       "options": [
        "biologique",
        "chimique",
        "physique",
        "allergène"
       ],
       "bonnes": [
        2
       ],
       "explication": "Un corps étranger (cheveu, verre, os, agrafe) est un danger physique."
      },
      {
       "q": "Quels moments imposent un lavage des mains ? (deux réponses)",
       "options": [
        "Après être allé aux toilettes",
        "Avant de parler à un client",
        "Après avoir manipulé des déchets",
        "Après avoir regardé le planning"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Toilettes et déchets sont des sources de contamination ; le lavage est obligatoire avant de reprendre le travail."
      }
     ]
    },
    {
     "id": "fhr-conservation-nettoyage",
     "titre": "Conservation des aliments, températures et entretien des locaux",
     "duree": 25,
     "objectifs": [
      "Expliquer le principe des grandes techniques de conservation.",
      "Respecter les températures réglementaires de stockage, de refroidissement et de remise en température.",
      "Appliquer les règles de décongélation et de gestion des restes.",
      "Distinguer nettoyage et désinfection et appliquer le cercle de Sinner.",
      "Lire et suivre un plan de nettoyage et de désinfection."
     ],
     "sections": [
      {
       "titre": "Pourquoi et comment conserver",
       "contenu": "\n<p>Conserver un aliment, c'est empêcher ou ralentir sa dégradation : multiplication des micro-organismes, oxydation, perte d'eau. Chaque technique agit sur une ou plusieurs conditions de multiplication des microbes.</p>\n<table>\n<thead><tr><th>Technique</th><th>Principe</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>Réfrigération</td><td>Froid positif (en général 0 à +4 °C) : ralentit les microbes</td><td>Viandes, produits laitiers, préparations</td></tr>\n<tr><td>Congélation, surgélation</td><td>Froid négatif (−18 °C ou moins) : arrête la multiplication. La surgélation est très rapide et forme de petits cristaux qui abîment moins l'aliment</td><td>Légumes, poissons, viandes</td></tr>\n<tr><td>Pasteurisation</td><td>Chauffage en dessous de 100 °C : détruit une grande partie des microbes ; le produit reste au froid</td><td>Lait pasteurisé, produits de 5e gamme</td></tr>\n<tr><td>Stérilisation, appertisation</td><td>Chauffage au-dessus de 100 °C en récipient étanche : détruit tous les microbes et leurs spores</td><td>Conserves, lait UHT</td></tr>\n<tr><td>Sous vide, atmosphère modifiée</td><td>Retire l'air ou le remplace par un mélange de gaz : limite l'oxydation et certains microbes</td><td>Viandes sous vide, salades en sachet</td></tr>\n<tr><td>Déshydratation, salage, sucrage, fumage</td><td>Retire l'eau disponible pour les microbes</td><td>Fruits secs, jambon sec, confitures, saumon fumé</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le froid ralentit ou bloque les microbes sans les tuer ; la chaleur les détruit. Un produit pasteurisé se garde au froid, un produit stérilisé peut se garder à température ambiante tant qu'il n'est pas ouvert.</div>"
      },
      {
       "titre": "Les températures à respecter",
       "contenu": "\n<p>La réglementation fixe des températures de conservation. Les principales valeurs à connaître en restauration sont rassemblées ici ; l'étiquette du produit peut indiquer une température plus basse, qu'il faut alors respecter.</p>\n<table>\n<thead><tr><th>Situation</th><th>Température</th></tr></thead>\n<tbody>\n<tr><td>Produits surgelés et congelés</td><td>−18 °C ou moins</td></tr>\n<tr><td>Viandes hachées</td><td>+2 °C au maximum</td></tr>\n<tr><td>Poissons frais</td><td>température de la glace fondante (proche de 0 °C)</td></tr>\n<tr><td>La plupart des denrées périssables (viandes, préparations, produits laitiers frais)</td><td>entre 0 et +4 °C</td></tr>\n<tr><td>Maintien au chaud des plats (liaison chaude)</td><td>+63 °C au minimum</td></tr>\n<tr><td>Refroidissement rapide d'un plat cuisiné</td><td>de +63 °C à moins de +10 °C en moins de 2 heures</td></tr>\n<tr><td>Remise en température</td><td>atteindre +63 °C à cœur en moins d'1 heure</td></tr>\n</tbody>\n</table>\n<p>Ces températures organisent les deux grandes façons de servir des plats préparés à l'avance. En <strong>liaison chaude</strong>, les plats sont cuits puis maintenus à +63 °C au moins jusqu'au service, le jour même. En <strong>liaison froide</strong>, ils sont cuits, refroidis rapidement, stockés entre 0 et +3 °C pendant une durée limitée fixée par l'établissement, puis remis en température au moment du service. La liaison froide est très utilisée en restauration collective et par les cuisines centrales qui livrent plusieurs restaurants.</p>\n<p>Le refroidissement rapide se fait en <strong>cellule de refroidissement</strong>, jamais en laissant le plat refroidir sur le plan de travail. On mesure la température <strong>à cœur</strong> avec une sonde propre et désinfectée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une feuille d'enregistrement de refroidissement. Le document décrit : « Blanquette, 10 kg. Sortie de cuisson 11 h 00, +85 °C. Entrée en cellule 11 h 10, +80 °C. Contrôle 12 h 30, +14 °C. Contrôle 12 h 50, +9 °C. »<ol>\n<li>Choisir l'heure de départ : par prudence, on compte à partir de la sortie de cuisson, 11 h 00 (le plat est alors au-dessus de +63 °C).</li>\n<li>Calculer l'heure limite : 11 h 00 + 2 h = 13 h 00.</li>\n<li>Comparer : le plat atteint +9 °C, donc moins de +10 °C, à 12 h 50, avant 13 h 00.</li>\n<li>Conclure : le refroidissement est conforme ; on signe la feuille. Si le plat avait encore été au-dessus de +10 °C à 13 h 00, il aurait fallu appliquer l'action corrective prévue au PMS (souvent : le jeter).</li>\n</ol></div>"
      },
      {
       "titre": "Décongélation, restes et étiquetage",
       "contenu": "\n<ul>\n<li>La <strong>décongélation</strong> se fait en enceinte réfrigérée (0 à +4 °C), dans un bac qui recueille le liquide, ou directement à la cuisson pour les petites pièces. Jamais à température ambiante, jamais dans l'eau stagnante.</li>\n<li>Un produit décongelé ne doit <strong>jamais être recongelé</strong> tel quel.</li>\n<li>Les préparations réalisées à l'avance sont filmées et <strong>étiquetées</strong> : nom, date de fabrication, date limite d'utilisation fixée par l'établissement.</li>\n<li>Les produits ouverts (crème, sauce en brique) sont étiquetés avec la date d'ouverture.</li>\n<li>Les plats présentés au client et non consommés ne peuvent pas être resservis.</li>\n<li>En restauration collective, des <strong>plats témoins</strong> (un échantillon de chaque plat servi) sont conservés au froid pendant au moins 5 jours, pour permettre une analyse en cas de TIAC.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le principe « premier entré, premier sorti » s'applique aussi en cuisine : on place les produits les plus récents derrière, les plus anciens devant. Un bac sans étiquette est un bac dont on ne connaît pas l'âge : on le jette.</div>"
      },
      {
       "titre": "Nettoyer et désinfecter",
       "contenu": "\n<p>Le <strong>nettoyage</strong> enlève les salissures visibles (graisses, débris, poussière). La <strong>désinfection</strong> détruit les micro-organismes qui restent sur une surface déjà propre. On ne désinfecte jamais une surface sale : la saleté protège les microbes.</p>\n<p>Protocole classique en cinq temps :</p>\n<ol>\n<li>pré-nettoyage : retirer les gros déchets ;</li>\n<li>nettoyage avec un <strong>détergent</strong> ;</li>\n<li>rinçage ;</li>\n<li>désinfection avec un <strong>désinfectant</strong>, en respectant le temps de contact ;</li>\n<li>rinçage final si l'étiquette l'exige, puis séchage à l'air ou avec un papier à usage unique.</li>\n</ol>\n<p>Des produits <strong>détergents-désinfectants</strong> combinent les deux actions et réduisent le nombre d'étapes.</p>\n<p>L'efficacité dépend de quatre facteurs, représentés par le <strong>cercle de Sinner</strong> : <strong>T</strong>empérature de l'eau, <strong>A</strong>ction mécanique (frotter, brosser, pression), <strong>C</strong>oncentration du produit (action chimique), <strong>T</strong>emps de contact. Si l'un diminue, il faut augmenter un autre pour garder le même résultat. Ce sigle se retient sous la forme TACT.</p>"
      },
      {
       "titre": "Le plan de nettoyage et de désinfection",
       "contenu": "\n<p>Le <strong>plan de nettoyage et de désinfection</strong> fait partie du PMS. C'est un tableau affiché qui précise, pour chaque zone ou matériel : <em>quoi</em>, <em>quand</em> (fréquence), <em>avec quoi</em> (produit et dosage), <em>comment</em> (mode opératoire) et <em>qui</em>. Une feuille de suivi est signée après chaque opération.</p>\n<table>\n<thead><tr><th>Quoi</th><th>Quand</th><th>Produit</th><th>Comment</th><th>Qui</th></tr></thead>\n<tbody>\n<tr><td>Plans de travail</td><td>Après chaque utilisation</td><td>Détergent-désinfectant, dosage étiquette</td><td>Pulvériser, frotter, laisser agir, rincer</td><td>Utilisateur du poste</td></tr>\n<tr><td>Trancheuse</td><td>Après chaque utilisation</td><td>Détergent-désinfectant</td><td>Débrancher, démonter, laver, rincer, remonter</td><td>Utilisateur</td></tr>\n<tr><td>Sols</td><td>Après chaque service</td><td>Détergent</td><td>Balayer humide, laver, racler vers le siphon</td><td>Équipe de plonge</td></tr>\n<tr><td>Chambres froides</td><td>Chaque semaine</td><td>Détergent-désinfectant</td><td>Vider, nettoyer, rincer, sécher, ranger</td><td>Commis désigné</td></tr>\n</tbody>\n</table>\n<p>La <strong>plonge</strong> utilise un lave-vaisselle professionnel : le lavage se fait généralement autour de 55 à 65 °C et le rinçage final à température plus élevée, autour de 80 à 85 °C, ce qui assure aussi un séchage rapide.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en fin de service, chaque cuisinier nettoie son poste selon le plan affiché et signe la feuille. Lors d'un contrôle des services vétérinaires, l'inspecteur demande ces feuilles : elles prouvent que le nettoyage est réalisé régulièrement.</div>"
      }
     ],
     "points_cles": [
      "Le froid ralentit les microbes, la chaleur les détruit.",
      "Pasteurisation : moins de 100 °C, produit gardé au froid ; stérilisation : plus de 100 °C.",
      "Surgelés à −18 °C ou moins ; la plupart des périssables entre 0 et +4 °C ; viande hachée +2 °C maximum.",
      "Maintien au chaud : +63 °C minimum.",
      "Refroidissement rapide : de +63 °C à moins de +10 °C en moins de 2 heures.",
      "Remise en température : +63 °C à cœur en moins d'1 heure.",
      "Décongélation au froid ; ne jamais recongeler un produit décongelé.",
      "Nettoyer avant de désinfecter ; cercle de Sinner : température, action mécanique, concentration, temps.",
      "Le plan de nettoyage indique quoi, quand, avec quoi, comment et qui."
     ],
     "lexique": [
      {
       "terme": "Réfrigération",
       "def": "Conservation par le froid positif, en général entre 0 et +4 °C."
      },
      {
       "terme": "Surgélation",
       "def": "Congélation très rapide qui amène le produit à −18 °C ou moins à cœur."
      },
      {
       "terme": "Pasteurisation",
       "def": "Traitement thermique en dessous de 100 °C qui détruit une grande partie des microbes."
      },
      {
       "terme": "Stérilisation",
       "def": "Traitement thermique au-dessus de 100 °C qui détruit tous les microbes et leurs spores."
      },
      {
       "terme": "Cellule de refroidissement",
       "def": "Appareil qui abaisse très rapidement la température des préparations chaudes."
      },
      {
       "terme": "Température à cœur",
       "def": "Température au centre de l'aliment, mesurée avec une sonde."
      },
      {
       "terme": "Détergent",
       "def": "Produit qui élimine les salissures."
      },
      {
       "terme": "Désinfectant",
       "def": "Produit qui détruit les micro-organismes sur une surface propre."
      },
      {
       "terme": "Cercle de Sinner",
       "def": "Les quatre facteurs du nettoyage : température, action mécanique, concentration, temps."
      },
      {
       "terme": "Plat témoin",
       "def": "Échantillon de chaque plat servi, conservé au froid en restauration collective en vue d'une éventuelle analyse."
      }
     ],
     "qcm": [
      {
       "q": "À quelle température doivent être conservés les produits surgelés ?",
       "options": [
        "0 °C",
        "−18 °C ou moins",
        "−5 °C",
        "+4 °C"
       ],
       "bonnes": [
        1
       ],
       "explication": "Les produits surgelés et congelés se conservent à −18 °C ou moins."
      },
      {
       "q": "Quelle est la température minimale de maintien au chaud d'un plat ?",
       "options": [
        "+40 °C",
        "+50 °C",
        "+63 °C",
        "+100 °C"
       ],
       "bonnes": [
        2
       ],
       "explication": "En liaison chaude, les plats sont maintenus à +63 °C au minimum."
      },
      {
       "q": "Un plat doit passer de +63 °C à moins de +10 °C en :",
       "options": [
        "moins de 24 heures",
        "moins de 6 heures",
        "une nuit",
        "moins de 2 heures"
       ],
       "bonnes": [
        3
       ],
       "explication": "Le refroidissement rapide doit traverser la zone de multiplication en moins de 2 heures, en cellule de refroidissement."
      },
      {
       "q": "Un plat entre en cellule à 14 h 20. Avant quelle heure doit-il être à moins de +10 °C ?",
       "options": [
        "15 h 20",
        "16 h 00",
        "18 h 20",
        "16 h 20"
       ],
       "bonnes": [
        3
       ],
       "explication": "14 h 20 + 2 h = 16 h 20."
      },
      {
       "q": "Comment décongeler correctement un rôti de porc ?",
       "options": [
        "Sur le plan de travail pendant la nuit",
        "Dans un évier rempli d'eau tiède",
        "En enceinte réfrigérée, dans un bac qui recueille le liquide",
        "Près du four pour aller plus vite"
       ],
       "bonnes": [
        2
       ],
       "explication": "La décongélation se fait au froid (0 à +4 °C) pour que la surface ne passe pas dans la zone de multiplication."
      },
      {
       "q": "Quelle différence entre pasteurisation et stérilisation ?",
       "options": [
        "La pasteurisation chauffe en dessous de 100 °C, la stérilisation au-dessus",
        "La pasteurisation utilise le froid",
        "La stérilisation se fait à 63 °C",
        "Il n'y a aucune différence"
       ],
       "bonnes": [
        0
       ],
       "explication": "La pasteurisation (moins de 100 °C) laisse quelques microbes : le produit reste au froid. La stérilisation (plus de 100 °C) les détruit tous."
      },
      {
       "q": "Quels sont deux des quatre facteurs du cercle de Sinner ? (deux réponses)",
       "options": [
        "La température",
        "La couleur du produit",
        "Le temps de contact",
        "Le prix du produit"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Le cercle de Sinner associe température, action mécanique, concentration chimique et temps (TACT)."
      },
      {
       "q": "Pourquoi nettoie-t-on avant de désinfecter ?",
       "options": [
        "Pour économiser le désinfectant uniquement",
        "Pour que la surface sèche plus vite",
        "Parce que la loi interdit le contraire",
        "Parce que la saleté protège les microbes du désinfectant"
       ],
       "bonnes": [
        3
       ],
       "explication": "Le désinfectant agit sur une surface propre ; les graisses et débris empêchent son contact avec les microbes."
      },
      {
       "q": "Quelles informations un plan de nettoyage doit-il préciser ? (deux réponses)",
       "options": [
        "La fréquence de l'opération",
        "Le chiffre d'affaires du jour",
        "Le produit utilisé et son dosage",
        "Le menu du jour"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Il indique quoi, quand, avec quoi, comment et qui."
      },
      {
       "q": "À quelle température maximale conserve-t-on une viande hachée ?",
       "options": [
        "+8 °C",
        "+2 °C",
        "+6 °C",
        "+10 °C"
       ],
       "bonnes": [
        1
       ],
       "explication": "La viande hachée, très sensible, se conserve à +2 °C au maximum."
      }
     ]
    },
    {
     "id": "fhr-nutrition",
     "titre": "Sciences de l'alimentation : constituants des aliments et équilibre",
     "duree": 25,
     "objectifs": [
      "Identifier les constituants des aliments et leurs rôles dans l'organisme.",
      "Calculer l'apport énergétique d'une portion à partir de sa composition.",
      "Classer les aliments en groupes et composer un repas équilibré.",
      "Tenir compte des régimes particuliers et des allergies dans une offre de restauration.",
      "Repérer l'effet des techniques culinaires sur la valeur nutritionnelle."
     ],
     "sections": [
      {
       "titre": "Les constituants des aliments",
       "contenu": "\n<p>Un aliment est composé de <strong>nutriments</strong>, substances que l'organisme utilise après la digestion. On les classe selon leur rôle.</p>\n<table>\n<thead><tr><th>Constituant</th><th>Rôle principal</th><th>Sources</th></tr></thead>\n<tbody>\n<tr><td><strong>Protides</strong> (protéines)</td><td>Construction et renouvellement des tissus (muscles, peau), défense de l'organisme</td><td>Viande, poisson, œufs, produits laitiers, légumineuses</td></tr>\n<tr><td><strong>Glucides</strong> (sucres)</td><td>Énergie, notamment pour les muscles et le cerveau</td><td>Céréales, pain, pâtes, riz, pommes de terre, fruits, sucre</td></tr>\n<tr><td><strong>Lipides</strong> (matières grasses)</td><td>Réserve d'énergie, construction des cellules, transport de certaines vitamines</td><td>Huiles, beurre, crème, charcuterie, fromages, fruits à coque</td></tr>\n<tr><td>Vitamines</td><td>Rôle protecteur et régulateur, en très petite quantité</td><td>Fruits, légumes, produits laitiers, huiles</td></tr>\n<tr><td>Minéraux (calcium, fer…)</td><td>Construction (os, sang) et fonctionnement</td><td>Produits laitiers (calcium), viande et légumineuses (fer)</td></tr>\n<tr><td>Fibres</td><td>Transit intestinal, sensation de satiété</td><td>Légumes, fruits, céréales complètes, légumineuses</td></tr>\n<tr><td>Eau</td><td>Constituant principal du corps, transport, régulation de la température</td><td>Boissons, fruits, légumes</td></tr>\n</tbody>\n</table>\n<p>Les glucides se divisent en glucides <strong>simples</strong> (sucre, fruits, miel), rapidement absorbés, et <strong>complexes</strong> (amidon des féculents), libérés plus progressivement. Les lipides contiennent des acides gras ; certains, comme les oméga-3 (poissons gras, huile de colza, noix), sont <strong>essentiels</strong> car l'organisme ne sait pas les fabriquer.</p>\n<p>Les vitamines sont soit <strong>liposolubles</strong> (A, D, E, K : solubles dans les graisses), soit <strong>hydrosolubles</strong> (vitamines du groupe B et vitamine C : solubles dans l'eau, donc perdues dans l'eau de cuisson).</p>"
      },
      {
       "titre": "L'énergie apportée par les aliments",
       "contenu": "\n<p>L'énergie se mesure en kilojoules (kJ) ou en kilocalories (kcal) ; 1 kcal correspond à environ 4,18 kJ. Seuls trois nutriments apportent de l'énergie, avec des valeurs à connaître, auxquels s'ajoute l'alcool :</p>\n<table>\n<thead><tr><th>Nutriment</th><th>Énergie apportée</th></tr></thead>\n<tbody>\n<tr><td>1 g de glucides</td><td>4 kcal (17 kJ)</td></tr>\n<tr><td>1 g de protides</td><td>4 kcal (17 kJ)</td></tr>\n<tr><td>1 g de lipides</td><td>9 kcal (37 kJ)</td></tr>\n<tr><td>1 g d'alcool</td><td>7 kcal (29 kJ)</td></tr>\n</tbody>\n</table>\n<p>Vitamines, minéraux, fibres et eau n'apportent pas d'énergie (ou très peu pour les fibres) mais sont indispensables.</p>\n<p>Les <strong>besoins énergétiques</strong> varient d'une personne à l'autre. Ils dépendent de l'âge, du sexe, de la taille, de la croissance et surtout de l'activité physique. Un adolescent en pleine croissance qui fait du sport a besoin de davantage d'énergie qu'un adulte sédentaire. Un cuisinier ou un serveur, qui marche et porte des charges pendant de longues heures, dépense aussi beaucoup. Lorsque les apports dépassent durablement les dépenses, l'organisme stocke l'excédent sous forme de graisse ; dans le cas inverse, il puise dans ses réserves. La répartition dans la journée compte également : un petit-déjeuner complet et des repas à heures régulières évitent les grignotages.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'apport énergétique d'une portion. La fiche nutritionnelle d'une portion de lasagnes de 300 g indique : 45 g de glucides, 24 g de protides, 18 g de lipides.<ol>\n<li>Glucides : 45 × 4 = 180 kcal.</li>\n<li>Protides : 24 × 4 = 96 kcal.</li>\n<li>Lipides : 18 × 9 = 162 kcal.</li>\n<li>Total : 180 + 96 + 162 = 438 kcal.</li>\n<li>Part des lipides dans l'énergie : 162 ÷ 438 ≈ 0,37, soit environ 37 %. On remarque que 18 g de lipides apportent presque autant d'énergie que 45 g de glucides.</li>\n</ol></div>"
      },
      {
       "titre": "Les groupes d'aliments et l'équilibre",
       "contenu": "\n<p>Aucun aliment ne contient tous les nutriments en quantité suffisante. On regroupe donc les aliments en <strong>groupes</strong> selon leur apport principal, et l'on varie à l'intérieur de chaque groupe.</p>\n<table>\n<thead><tr><th>Groupe</th><th>Apport principal</th><th>Repère de consommation courant</th></tr></thead>\n<tbody>\n<tr><td>Fruits et légumes</td><td>Vitamines, minéraux, fibres, eau</td><td>Au moins 5 portions par jour</td></tr>\n<tr><td>Féculents (céréales, pain, pommes de terre) et légumineuses</td><td>Glucides complexes, fibres ; protéines végétales pour les légumineuses</td><td>À chaque repas, en privilégiant les complets ; légumineuses au moins 2 fois par semaine</td></tr>\n<tr><td>Produits laitiers</td><td>Calcium, protéines</td><td>En quantité suffisante et raisonnable</td></tr>\n<tr><td>Viandes, poissons, œufs</td><td>Protéines, fer</td><td>Poisson 2 fois par semaine dont un gras ; limiter la charcuterie et la viande rouge</td></tr>\n<tr><td>Matières grasses ajoutées</td><td>Lipides, vitamines liposolubles</td><td>Avec modération, en privilégiant les huiles de colza, de noix et d'olive</td></tr>\n<tr><td>Produits sucrés</td><td>Glucides simples</td><td>À limiter</td></tr>\n<tr><td>Boissons</td><td>Eau</td><td>L'eau à volonté ; limiter les boissons sucrées</td></tr>\n</tbody>\n</table>\n<p>Ces repères sont ceux du <strong>Programme national nutrition santé (PNNS)</strong>, qui les met régulièrement à jour. Un repas équilibré associe en général un féculent, un légume, une source de protéines, un produit laitier et un fruit, avec de l'eau.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en restauration scolaire, la réglementation impose des règles de fréquence pour les plats servis sur une période de 20 repas (par exemple, un nombre minimal de crudités, de poissons, de produits laitiers riches en calcium) et une part de produits durables et de qualité. Le chef de cuisine construit ses menus avec une grille de fréquences.</div>"
      },
      {
       "titre": "Régimes particuliers et allergies",
       "contenu": "\n<p>La restauration doit s'adapter à des clients aux besoins variés :</p>\n<ul>\n<li><strong>Allergies</strong> : réaction du système immunitaire à un aliment, parfois très grave (choc anaphylactique). Même une trace peut suffire : on évite toute contamination croisée (ustensiles, huile de friture partagée).</li>\n<li><strong>Intolérances</strong> : réaction digestive sans mécanisme allergique, par exemple l'intolérance au lactose. La <strong>maladie cœliaque</strong> impose un régime strict sans gluten.</li>\n<li><strong>Choix alimentaires</strong> : végétarien (sans viande ni poisson), végétalien ou végan (aucun produit animal), pratiques religieuses (sans porc, viande halal ou casher).</li>\n<li><strong>Régimes médicaux</strong> : sans sel, pauvre en sucres pour les diabétiques, textures modifiées (haché, mixé) en maison de retraite ou à l'hôpital.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un client qui signale une allergie n'exprime pas un goût, il signale un risque pour sa santé. Retirer simplement l'ingrédient d'une assiette déjà dressée ne suffit pas : il faut refaire le plat avec du matériel propre.</div>"
      },
      {
       "titre": "Cuisine et valeur nutritionnelle",
       "contenu": "\n<p>Les techniques culinaires modifient la valeur nutritionnelle des plats :</p>\n<ul>\n<li>la <strong>friture</strong> et les cuissons au beurre ajoutent des lipides, donc beaucoup d'énergie ;</li>\n<li>la <strong>cuisson à l'eau longue</strong> fait perdre des vitamines hydrosolubles et des minéraux ; la vapeur et les cuissons courtes les préservent mieux ;</li>\n<li>la cuisson rend digestes l'amidon et les protéines et détruit les microbes ;</li>\n<li>les légumes crus apportent davantage de vitamine C, s'ils sont préparés au dernier moment.</li>\n</ul>\n<p>Le cuisinier peut améliorer l'équilibre d'une carte sans sacrifier le goût : utiliser des herbes et des épices pour réduire le sel, proposer des garnitures de légumes généreuses, limiter les sauces très grasses, proposer des fruits en dessert.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> 1 g de lipides apporte 9 kcal, plus du double d'un gramme de glucides ou de protides (4 kcal). Réduire les matières grasses ajoutées est le moyen le plus efficace d'alléger un plat.</div>"
      }
     ],
     "points_cles": [
      "Protides : construction ; glucides : énergie ; lipides : réserve d'énergie et construction des cellules.",
      "Vitamines, minéraux, fibres et eau n'apportent pas d'énergie mais sont indispensables.",
      "1 g de glucides ou de protides = 4 kcal ; 1 g de lipides = 9 kcal ; 1 g d'alcool = 7 kcal.",
      "Vitamines A, D, E, K liposolubles ; B et C hydrosolubles.",
      "Les aliments se classent en groupes ; on varie dans chaque groupe.",
      "Le PNNS recommande au moins 5 fruits et légumes par jour.",
      "Allergie, intolérance et choix alimentaire ne demandent pas les mêmes précautions.",
      "La cuisson vapeur préserve mieux les vitamines que l'ébullition longue."
     ],
     "lexique": [
      {
       "terme": "Nutriment",
       "def": "Substance issue de la digestion des aliments et utilisée par l'organisme."
      },
      {
       "terme": "Protides",
       "def": "Nutriments de construction formés d'acides aminés, appelés aussi protéines."
      },
      {
       "terme": "Glucides complexes",
       "def": "Glucides à longue chaîne, comme l'amidon des féculents."
      },
      {
       "terme": "Acide gras essentiel",
       "def": "Acide gras que l'organisme ne sait pas fabriquer et que l'alimentation doit apporter."
      },
      {
       "terme": "Vitamine hydrosoluble",
       "def": "Vitamine soluble dans l'eau (B, C), sensible aux cuissons dans l'eau."
      },
      {
       "terme": "Kilocalorie",
       "def": "Unité d'énergie alimentaire ; 1 kcal vaut environ 4,18 kJ."
      },
      {
       "terme": "PNNS",
       "def": "Programme national nutrition santé, qui fixe les repères de consommation en France."
      },
      {
       "terme": "Maladie cœliaque",
       "def": "Maladie qui impose d'exclure totalement le gluten de l'alimentation."
      },
      {
       "terme": "Choc anaphylactique",
       "def": "Réaction allergique grave et brutale pouvant mettre la vie en danger."
      }
     ],
     "qcm": [
      {
       "q": "Quel nutriment a surtout un rôle de construction des muscles ?",
       "options": [
        "Les glucides",
        "Les lipides",
        "Les fibres",
        "Les protides"
       ],
       "bonnes": [
        3
       ],
       "explication": "Les protides (protéines) construisent et renouvellent les tissus, notamment les muscles."
      },
      {
       "q": "Combien de kilocalories apportent 20 g de lipides ?",
       "options": [
        "80 kcal",
        "180 kcal",
        "140 kcal",
        "20 kcal"
       ],
       "bonnes": [
        1
       ],
       "explication": "1 g de lipides apporte 9 kcal : 20 × 9 = 180 kcal."
      },
      {
       "q": "Une portion contient 50 g de glucides, 20 g de protides et 10 g de lipides. Son apport énergétique est de :",
       "options": [
        "80 kcal",
        "320 kcal",
        "720 kcal",
        "370 kcal"
       ],
       "bonnes": [
        3
       ],
       "explication": "50 × 4 + 20 × 4 + 10 × 9 = 200 + 80 + 90 = 370 kcal."
      },
      {
       "q": "Quelles vitamines sont hydrosolubles ? (deux réponses)",
       "options": [
        "La vitamine C",
        "La vitamine D",
        "Les vitamines du groupe B",
        "La vitamine A"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Les vitamines B et C se dissolvent dans l'eau ; A, D, E et K sont liposolubles."
      },
      {
       "q": "Quel groupe d'aliments est la principale source de calcium ?",
       "options": [
        "Les féculents",
        "Les produits sucrés",
        "Les produits laitiers",
        "Les matières grasses"
       ],
       "bonnes": [
        2
       ],
       "explication": "Lait, yaourts et fromages sont les principales sources de calcium."
      },
      {
       "q": "Un client végétalien ne consomme :",
       "options": [
        "que du poisson",
        "aucun produit d'origine animale",
        "pas de gluten",
        "pas de légumes cuits"
       ],
       "bonnes": [
        1
       ],
       "explication": "Le végétalien exclut viande, poisson, œufs, lait, miel et tout produit d'origine animale."
      },
      {
       "q": "Pour préserver la vitamine C des haricots verts, on choisit plutôt :",
       "options": [
        "une cuisson longue à l'eau",
        "une friture",
        "un maintien au chaud prolongé",
        "une cuisson courte à la vapeur"
       ],
       "bonnes": [
        3
       ],
       "explication": "La vitamine C est sensible à la chaleur et soluble dans l'eau : une cuisson courte sans immersion la protège."
      },
      {
       "q": "Un client allergique aux crustacés reçoit un plat garni de crevettes par erreur. Que faire ?",
       "options": [
        "Retirer les crevettes et resservir l'assiette",
        "Refaire entièrement le plat avec du matériel propre",
        "Proposer un verre d'eau",
        "Laisser le client retirer lui-même les crevettes"
       ],
       "bonnes": [
        1
       ],
       "explication": "Des traces d'allergène restent dans l'assiette : il faut refaire un plat sans contact avec l'allergène."
      },
      {
       "q": "Selon le PNNS, combien de portions de fruits et légumes faut-il viser par jour ?",
       "options": [
        "Au moins 5",
        "1",
        "2",
        "Au moins 12"
       ],
       "bonnes": [
        0
       ],
       "explication": "Le repère « au moins 5 fruits et légumes par jour » est l'un des plus connus du PNNS."
      },
      {
       "q": "Quels nutriments apportent de l'énergie à l'organisme ? (deux réponses)",
       "options": [
        "Les glucides",
        "Les minéraux",
        "Les lipides",
        "L'eau"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Glucides, protides et lipides apportent de l'énergie ; eau et minéraux n'en apportent pas."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Gestion des approvisionnements et calculs professionnels",
   "chapitres": [
    {
     "id": "fhr-fiche-technique-couts",
     "titre": "Fiches techniques, coût matière et prix de vente",
     "duree": 30,
     "objectifs": [
      "Lire et compléter une fiche technique de fabrication.",
      "Calculer un poids net, un poids brut et un rendement.",
      "Adapter les quantités d'une recette à un nombre de couverts (règle de trois, coefficient).",
      "Calculer un coût matière total et par portion.",
      "Déterminer un prix de vente à partir d'un coefficient multiplicateur et de la TVA."
     ],
     "sections": [
      {
       "titre": "La fiche technique",
       "contenu": "\n<p>La <strong>fiche technique</strong> est le document de référence d'une recette dans l'établissement. Elle garantit que le plat est toujours identique, quel que soit le cuisinier, et elle permet d'en calculer le coût. Une fiche technique comprend en général :</p>\n<ul>\n<li>le nom du plat, le nombre de portions (ou couverts) et parfois une photo ou une description du dressage ;</li>\n<li>un tableau des <strong>denrées</strong> : nom, unité (kg, L, pièce), quantité, prix unitaire, montant ;</li>\n<li>les <strong>étapes</strong> de réalisation (progression), avec les températures et les temps ;</li>\n<li>le matériel nécessaire ;</li>\n<li>les allergènes présents ;</li>\n<li>le coût total, le coût par portion et souvent le prix de vente.</li>\n</ul>\n<p>Lorsque les colonnes de prix sont remplies, on parle de <strong>fiche technique valorisée</strong>. Elle sert à la fois en cuisine (production) et à la direction (gestion).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> montant d'une ligne = quantité × prix unitaire, en veillant à utiliser la même unité (kg avec un prix au kg, L avec un prix au litre).</div>"
      },
      {
       "titre": "Unités et conversions",
       "contenu": "\n<p>Les erreurs de calcul viennent souvent des unités. Sur une fiche technique, les masses s'expriment en kilogrammes avec trois décimales (0,250 kg = 250 g) et les volumes en litres (0,400 L = 40 cL = 400 mL). Certains produits se comptent à la pièce (œufs, citrons, bottes d'herbes).</p>\n<table>\n<thead><tr><th>Conversion</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>1 kg = 1 000 g</td><td>80 g = 0,080 kg</td></tr>\n<tr><td>1 L = 100 cL = 1 000 mL</td><td>25 cL = 0,25 L</td></tr>\n<tr><td>Prix au kg × masse en kg</td><td>0,350 kg × 12,00 € = 4,20 €</td></tr>\n</tbody>\n</table>\n<p>Pour l'eau, 1 L pèse environ 1 kg ; ce n'est pas vrai pour tous les liquides (l'huile est plus légère que l'eau). Quand un fournisseur vend par colis (carton de 6 bouteilles, sac de 25 kg), on calcule d'abord le prix d'une unité : un carton de 6 L de crème à 27,00 € revient à 27,00 ÷ 6 = 4,50 € le litre.</p>"
      },
      {
       "titre": "Poids brut, poids net et rendement",
       "contenu": "\n<p>La plupart des produits bruts subissent des pertes : épluchures, parures, os, arêtes, peau, perte d'eau à la cuisson.</p>\n<ul>\n<li>Le <strong>poids brut</strong> est le poids acheté.</li>\n<li>Le <strong>poids net</strong> est le poids réellement utilisable après préparation.</li>\n<li>Le <strong>rendement</strong> est le rapport poids net ÷ poids brut, exprimé en pourcentage.</li>\n</ul>\n<p>Formules : poids net = poids brut × rendement ; poids brut = poids net ÷ rendement ; taux de perte = 100 % − rendement.</p>\n<table>\n<thead><tr><th>Produit</th><th>Ordre de grandeur du rendement</th></tr></thead>\n<tbody>\n<tr><td>Carottes épluchées</td><td>environ 80 %</td></tr>\n<tr><td>Pommes de terre épluchées</td><td>environ 75 à 80 %</td></tr>\n<tr><td>Poisson entier levé en filets</td><td>souvent 40 à 50 %</td></tr>\n<tr><td>Volaille cuite, désossée</td><td>souvent autour de 50 à 60 %</td></tr>\n</tbody>\n</table>\n<p>Ces valeurs varient selon le calibre, la saison et l'habileté : chaque établissement mesure ses propres rendements en pesant avant et après préparation.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> pour passer du poids net au poids brut, on <em>divise</em> par le rendement. Ajouter le pourcentage de perte au poids net donne un résultat faux : pour 4 kg nets avec 20 % de perte, il faut 4 ÷ 0,80 = 5 kg bruts, et non 4 × 1,20 = 4,8 kg.</div>"
      },
      {
       "titre": "Adapter une recette au nombre de couverts",
       "contenu": "\n<p>Une fiche technique est écrite pour un nombre de portions de base (souvent 4 ou 10). Pour produire une autre quantité, on applique un <strong>coefficient</strong> :</p>\n<p>coefficient = nombre de portions voulu ÷ nombre de portions de la fiche.</p>\n<p>Chaque quantité est multipliée par ce coefficient. Exemple : fiche pour 10 portions, banquet de 35 couverts ; coefficient = 35 ÷ 10 = 3,5. Si la fiche prévoit 1,2 kg d'épaule d'agneau, il faut 1,2 × 3,5 = 4,2 kg.</p>\n<p>On peut aussi passer par la quantité pour une portion (règle de trois) : 1,2 kg ÷ 10 = 0,12 kg par portion, puis 0,12 × 35 = 4,2 kg.</p>\n<p>Attention aux ingrédients qui ne se multiplient pas toujours proportionnellement : sel, épices, temps de cuisson (une grosse pièce ne cuit pas trois fois plus longtemps parce qu'elle est trois fois plus lourde). Le cuisinier goûte et ajuste.</p>"
      },
      {
       "titre": "Calculer le coût matière",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> valoriser une fiche technique. Fiche « Blanquette de veau, 10 portions » :\n<table>\n<thead><tr><th>Denrée</th><th>Unité</th><th>Quantité</th><th>Prix unitaire HT</th><th>Montant HT</th></tr></thead>\n<tbody>\n<tr><td>Épaule de veau</td><td>kg</td><td>2,000</td><td>14,50 €</td><td>29,00 €</td></tr>\n<tr><td>Carottes</td><td>kg</td><td>0,500</td><td>1,40 €</td><td>0,70 €</td></tr>\n<tr><td>Oignons</td><td>kg</td><td>0,300</td><td>1,60 €</td><td>0,48 €</td></tr>\n<tr><td>Champignons de Paris</td><td>kg</td><td>0,600</td><td>4,50 €</td><td>2,70 €</td></tr>\n<tr><td>Crème liquide</td><td>L</td><td>0,400</td><td>5,00 €</td><td>2,00 €</td></tr>\n<tr><td>Beurre</td><td>kg</td><td>0,080</td><td>9,00 €</td><td>0,72 €</td></tr>\n<tr><td>Farine</td><td>kg</td><td>0,080</td><td>1,00 €</td><td>0,08 €</td></tr>\n<tr><td>Riz</td><td>kg</td><td>0,600</td><td>2,20 €</td><td>1,32 €</td></tr>\n</tbody>\n</table>\n<ol>\n<li>Calculer chaque montant : quantité × prix unitaire (exemple : 0,600 × 4,50 = 2,70 €).</li>\n<li>Ajouter un forfait pour l'assaisonnement et les petits produits, par exemple 2 % du total, si l'établissement le prévoit. Ici, on l'ignore.</li>\n<li>Additionner : 29,00 + 0,70 + 0,48 + 2,70 + 2,00 + 0,72 + 0,08 + 1,32 = 37,00 € HT.</li>\n<li>Coût matière par portion : 37,00 ÷ 10 = 3,70 € HT.</li>\n</ol></div>\n<p>Le <strong>coût matière</strong> (ou coût des denrées) ne comprend que les ingrédients. Il ne tient pas compte du personnel, de l'énergie, du loyer, qui seront couverts par la marge.</p>"
      },
      {
       "titre": "Du coût matière au prix de vente",
       "contenu": "\n<p>Pour fixer un prix de vente, de nombreux établissements utilisent un <strong>coefficient multiplicateur</strong> appliqué au coût matière. Ce coefficient, choisi par l'entreprise, doit couvrir les autres charges (salaires, énergie, loyer…) et dégager un bénéfice.</p>\n<p>Prix de vente HT = coût matière HT × coefficient multiplicateur.<br>Prix de vente TTC = prix de vente HT × 1,10 (TVA à 10 % pour un plat consommé sur place).</p>\n<p>Suite de l'exemple, avec un coefficient de 3,5 : prix de vente HT = 3,70 × 3,5 = 12,95 € ; prix de vente TTC = 12,95 × 1,10 = 14,245 €, arrondi par exemple à 14,50 € sur la carte.</p>\n<p>On contrôle aussi le <strong>ratio matière</strong> : coût matière ÷ prix de vente HT × 100. Ici : 3,70 ÷ 12,95 × 100 ≈ 28,6 %. Beaucoup d'établissements cherchent à maintenir ce ratio dans une fourchette fixée par la direction, souvent entre 25 et 35 % selon le type de restauration.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> au printemps, le prix des asperges baisse fortement. Le chef met à jour la fiche technique valorisée de son entrée aux asperges : le coût matière passe de 4,20 € à 2,80 €. Il peut garder le prix de carte et améliorer sa marge, ou baisser le prix pour mettre le produit en avant. Sans fiche à jour, il ne saurait pas ce que lui rapporte réellement le plat.</div>"
      }
     ],
     "points_cles": [
      "La fiche technique garantit un plat identique et permet d'en calculer le coût.",
      "Montant d'une ligne = quantité × prix unitaire, dans la même unité.",
      "Rendement = poids net ÷ poids brut.",
      "Poids brut = poids net ÷ rendement (on divise, on n'ajoute pas le pourcentage).",
      "Coefficient d'adaptation = portions voulues ÷ portions de la fiche.",
      "Coût par portion = coût matière total ÷ nombre de portions.",
      "Prix de vente HT = coût matière × coefficient multiplicateur.",
      "Prix TTC d'un plat sur place = prix HT × 1,10.",
      "Ratio matière = coût matière ÷ prix de vente HT × 100."
     ],
     "lexique": [
      {
       "terme": "Fiche technique",
       "def": "Document qui décrit une recette : denrées, quantités, étapes, matériel, coût."
      },
      {
       "terme": "Fiche technique valorisée",
       "def": "Fiche technique dont les prix et montants des denrées sont complétés."
      },
      {
       "terme": "Poids brut",
       "def": "Poids du produit tel qu'il est acheté."
      },
      {
       "terme": "Poids net",
       "def": "Poids utilisable après épluchage, parage ou désossage."
      },
      {
       "terme": "Rendement",
       "def": "Rapport entre poids net et poids brut, exprimé en pourcentage."
      },
      {
       "terme": "Coût matière",
       "def": "Coût des denrées nécessaires à la réalisation d'un plat."
      },
      {
       "terme": "Coefficient multiplicateur",
       "def": "Nombre par lequel on multiplie le coût matière pour obtenir le prix de vente HT."
      },
      {
       "terme": "Ratio matière",
       "def": "Part du coût matière dans le prix de vente HT, en pourcentage."
      },
      {
       "terme": "Marge",
       "def": "Différence entre le prix de vente HT et le coût matière, qui couvre les autres charges et le bénéfice."
      }
     ],
     "qcm": [
      {
       "q": "On achète 5 kg de poisson entier et l'on obtient 2,25 kg de filets. Quel est le rendement ?",
       "options": [
        "55 %",
        "45 %",
        "2,25 %",
        "50 %"
       ],
       "bonnes": [
        1
       ],
       "explication": "Rendement = 2,25 ÷ 5 = 0,45, soit 45 %."
      },
      {
       "q": "Il faut 3 kg nets de pommes de terre épluchées ; le rendement est de 75 %. Quel poids brut acheter ?",
       "options": [
        "3,75 kg",
        "2,25 kg",
        "4 kg",
        "3,25 kg"
       ],
       "bonnes": [
        2
       ],
       "explication": "Poids brut = 3 ÷ 0,75 = 4 kg."
      },
      {
       "q": "Une fiche technique est prévue pour 8 portions. Quel coefficient appliquer pour 20 portions ?",
       "options": [
        "1,6",
        "12",
        "0,4",
        "2,5"
       ],
       "bonnes": [
        3
       ],
       "explication": "Coefficient = 20 ÷ 8 = 2,5."
      },
      {
       "q": "Une fiche pour 10 portions prévoit 1,5 kg de bœuf. Combien en faut-il pour 24 portions ?",
       "options": [
        "3,0 kg",
        "3,9 kg",
        "3,6 kg",
        "2,4 kg"
       ],
       "bonnes": [
        2
       ],
       "explication": "1,5 ÷ 10 = 0,15 kg par portion ; 0,15 × 24 = 3,6 kg."
      },
      {
       "q": "Une ligne de fiche indique 0,250 kg de beurre à 8,00 € le kg. Quel est le montant ?",
       "options": [
        "2,00 €",
        "20,00 €",
        "3,20 €",
        "0,32 €"
       ],
       "bonnes": [
        0
       ],
       "explication": "0,250 × 8,00 = 2,00 €."
      },
      {
       "q": "Le coût matière d'une recette de 12 portions est de 42,00 € HT. Quel est le coût par portion ?",
       "options": [
        "4,20 €",
        "3,00 €",
        "5,04 €",
        "3,50 €"
       ],
       "bonnes": [
        3
       ],
       "explication": "42,00 ÷ 12 = 3,50 € par portion."
      },
      {
       "q": "Coût matière d'une portion : 4,00 € ; coefficient multiplicateur : 3,5. Quel est le prix de vente HT ?",
       "options": [
        "7,50 €",
        "14,00 €",
        "12,00 €",
        "15,40 €"
       ],
       "bonnes": [
        1
       ],
       "explication": "4,00 × 3,5 = 14,00 € HT."
      },
      {
       "q": "Un plat est vendu 18,00 € HT. Quel est son prix TTC pour une consommation sur place ?",
       "options": [
        "19,80 €",
        "21,60 €",
        "18,10 €",
        "16,36 €"
       ],
       "bonnes": [
        0
       ],
       "explication": "TVA à 10 % : 18,00 × 1,10 = 19,80 € TTC."
      },
      {
       "q": "Quels éléments figurent sur une fiche technique ? (deux réponses)",
       "options": [
        "Les denrées et leurs quantités",
        "Le numéro de téléphone du client",
        "Les étapes de réalisation",
        "Le planning des congés"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "La fiche technique décrit les denrées, les quantités, les étapes, le matériel et souvent le coût."
      },
      {
       "q": "Un plat a un coût matière de 3,00 € et un prix de vente HT de 12,00 €. Quel est son ratio matière ?",
       "options": [
        "4 %",
        "36 %",
        "400 %",
        "25 %"
       ],
       "bonnes": [
        3
       ],
       "explication": "3,00 ÷ 12,00 × 100 = 25 %."
      }
     ]
    },
    {
     "id": "fhr-approvisionnement-stocks",
     "titre": "Approvisionnements, stocks et travail en équipe",
     "duree": 30,
     "objectifs": [
      "Suivre le circuit d'approvisionnement, de la commande au stockage.",
      "Contrôler une livraison à réception.",
      "Tenir une fiche de stock et calculer un stock final.",
      "Appliquer les règles de rotation des stocks et limiter le gaspillage.",
      "Communiquer et rendre compte de son activité au sein d'une équipe."
     ],
     "sections": [
      {
       "titre": "Le circuit des marchandises",
       "contenu": "\n<p>Les marchandises suivent un circuit précis, avec un document à chaque étape :</p>\n<ol>\n<li><strong>Besoin</strong> : le cuisinier recense les besoins à partir des fiches techniques, du nombre de couverts prévus et du stock disponible.</li>\n<li><strong>Commande</strong> : le <strong>bon de commande</strong> est envoyé au fournisseur (désignation, quantité, unité, prix, date et heure de livraison souhaitées).</li>\n<li><strong>Livraison et réception</strong> : le fournisseur livre avec un <strong>bon de livraison</strong> ; on contrôle avant de signer.</li>\n<li><strong>Stockage</strong> : rangement immédiat dans la zone adaptée (froid négatif, froid positif, réserve sèche).</li>\n<li><strong>Sortie</strong> : les produits sortent de la réserve (l'<strong>économat</strong>) vers la cuisine ou le bar grâce à un <strong>bon de sortie</strong> (ou bon d'économat).</li>\n<li><strong>Paiement</strong> : la <strong>facture</strong> du fournisseur est comparée au bon de commande et au bon de livraison avant d'être payée.</li>\n</ol>\n<p>Le restaurant travaille avec plusieurs <strong>fournisseurs</strong> : grossistes, producteurs locaux, marchés de gros, plateformes en ligne. Le choix dépend du prix, de la qualité, de la régularité, des délais et des conditions de livraison.</p>"
      },
      {
       "titre": "Contrôler une livraison",
       "contenu": "\n<p>La réception est un point de contrôle essentiel : un produit accepté devient la responsabilité du restaurant.</p>\n<table>\n<thead><tr><th>Contrôle</th><th>Ce que l'on vérifie</th></tr></thead>\n<tbody>\n<tr><td>Quantitatif</td><td>Nombre de colis, poids, conformité avec le bon de commande et le bon de livraison</td></tr>\n<tr><td>Qualitatif</td><td>Aspect, odeur, fraîcheur, calibre, catégorie</td></tr>\n<tr><td>Températures</td><td>Produits réfrigérés et surgelés à la bonne température, mesurée avec un thermomètre</td></tr>\n<tr><td>Emballages</td><td>Intacts, propres, non gonflés, sans traces de décongélation</td></tr>\n<tr><td>Étiquetage</td><td>DLC ou DDM suffisantes, numéro de lot, marque d'identification des produits animaux</td></tr>\n</tbody>\n</table>\n<p>En cas d'anomalie, on <strong>refuse</strong> le produit non conforme, on note la réserve sur le bon de livraison avant de signer, et on informe le responsable. Les produits sont ensuite <strong>décartonnés</strong> (les cartons, salis pendant le transport, ne vont pas en chambre froide) et rangés sans attendre, surgelés et réfrigérés en priorité.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un livreur dépose un carton de filets de poulet. Le thermomètre indique +9 °C à cœur alors que l'étiquette impose une conservation entre 0 et +4 °C. Le commis refuse le carton, écrit « refusé, +9 °C » sur le bon de livraison, fait contresigner le livreur et prévient le chef, qui recommande le produit ailleurs.</div>"
      },
      {
       "titre": "Tenir les stocks",
       "contenu": "\n<p>Le <strong>stock</strong> est l'ensemble des marchandises présentes dans l'établissement. Trop de stock immobilise de l'argent et augmente les pertes ; pas assez provoque des ruptures (« plus de dessert du jour »).</p>\n<ul>\n<li>Le <strong>stock minimum</strong> (ou stock d'alerte) est le niveau en dessous duquel il faut recommander.</li>\n<li>Le <strong>stock maximum</strong> est la quantité à ne pas dépasser (place, durée de conservation, trésorerie).</li>\n<li>L'<strong>inventaire</strong> est le comptage physique des produits à une date donnée ; on le compare au stock théorique de la fiche.</li>\n</ul>\n<p>La rotation suit la règle <strong>PEPS</strong> (premier entré, premier sorti) ou, mieux pour les denrées périssables, « premier périmé, premier sorti » : on utilise d'abord le produit dont la date limite est la plus proche.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> compléter une fiche de stock. Produit : crème liquide, en litres. Stock initial le 1er : 12 L. Le 2 : sortie de 5 L. Le 3 : entrée de 18 L (livraison). Le 4 : sortie de 8 L. Le 5 : sortie de 6 L.<ol>\n<li>Après le 2 : 12 − 5 = 7 L.</li>\n<li>Après le 3 : 7 + 18 = 25 L.</li>\n<li>Après le 4 : 25 − 8 = 17 L.</li>\n<li>Après le 5 : 17 − 6 = 11 L. C'est le stock final théorique.</li>\n<li>Comparer avec l'inventaire : si l'on compte 10 L dans la chambre froide, il y a un écart de 1 L (perte, casse, sortie non notée) à expliquer.</li>\n<li>Si le stock minimum est fixé à 12 L, le stock de 11 L est passé sous ce seuil : il faut recommander.</li>\n</ol></div>\n<p>Pour calculer la <strong>quantité à commander</strong>, on part des besoins prévus jusqu'à la prochaine livraison, on retire ce qui reste en stock et on ajoute le stock minimum à conserver. Exemple : il faudra 30 L de crème d'ici la prochaine livraison, il en reste 11 L et le stock minimum est de 12 L ; on commande 30 − 11 + 12 = 31 L, arrondi au conditionnement du fournisseur (par exemple 6 cartons de 6 L, soit 36 L, si l'on ne peut pas commander moins).</p>\n<p>Pour donner une valeur au stock, on multiplie chaque quantité par son prix d'achat. Les logiciels de gestion font ce calcul automatiquement, souvent avec un <strong>coût moyen</strong> lorsque les prix d'achat changent d'une livraison à l'autre.</p>"
      },
      {
       "titre": "Limiter le gaspillage",
       "contenu": "\n<p>Le gaspillage alimentaire coûte cher et pèse sur l'environnement. La réglementation demande aux professionnels de la restauration de le réduire et de trier leurs biodéchets. Les leviers :</p>\n<ul>\n<li>prévoir au plus juste (historique des ventes, réservations) ;</li>\n<li>respecter le grammage des fiches techniques ;</li>\n<li>valoriser les parures (fonds, farces, potages) dans le respect de l'hygiène ;</li>\n<li>proposer des portions adaptées et le contenant pour emporter les restes du client (« gourmet bag ») ;</li>\n<li>trier les biodéchets pour qu'ils soient compostés ou méthanisés ;</li>\n<li>donner les invendus, dans les conditions prévues, à des associations, pour certains établissements.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> valoriser ne veut pas dire prendre des risques. Un produit dont la DLC est dépassée, un plat déjà présenté au client ou une préparation non étiquetée ne se réutilisent jamais.</div>"
      },
      {
       "titre": "Travailler en équipe et rendre compte",
       "contenu": "\n<p>Les deux bacs pros de la famille comprennent des compétences d'<strong>animation d'équipe</strong>. En seconde, il s'agit d'abord de bien s'intégrer et de bien communiquer.</p>\n<ul>\n<li><strong>Le planning</strong> indique les horaires et les postes de chacun ; on le consulte et on respecte les horaires de prise de poste.</li>\n<li><strong>Le briefing</strong> avant le service : le responsable présente le nombre de réservations, les plats du jour, les produits manquants, les clients particuliers (allergies, anniversaires, habitués).</li>\n<li><strong>Le débriefing</strong> après le service : ce qui a bien fonctionné, les problèmes rencontrés, les améliorations.</li>\n<li><strong>Rendre compte</strong> : signaler une rupture de stock, un appareil en panne, une réclamation, un écart de caisse ou de stock. Un message clair dit quoi, où, quand, et ce qui a déjà été fait.</li>\n</ul>\n<p>Les supports de transmission sont variés : cahier de liaison, tableau blanc en cuisine, messagerie de l'entreprise, fiche de suivi. Une information non transmise est une information perdue pour l'équipe suivante.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans une équipe de restauration, chacun dépend des autres. Ponctualité, annonces claires, entraide pendant le coup de feu et compte rendu fidèle font la qualité du service autant que la technique.</div>"
      }
     ],
     "points_cles": [
      "Circuit : besoin, bon de commande, bon de livraison, stockage, bon de sortie, facture.",
      "À réception : contrôles quantitatif, qualitatif, températures, emballages, étiquetage.",
      "Un produit non conforme est refusé et la réserve est notée sur le bon de livraison.",
      "On décartonne et on range immédiatement, froid négatif et positif en priorité.",
      "Stock final = stock initial + entrées − sorties.",
      "Sous le stock minimum, on recommande.",
      "PEPS : premier entré, premier sorti ; pour les périssables, premier périmé, premier sorti.",
      "L'inventaire compare le stock réel au stock théorique.",
      "Briefing, débriefing et compte rendu assurent la transmission de l'information."
     ],
     "lexique": [
      {
       "terme": "Bon de commande",
       "def": "Document envoyé au fournisseur précisant les produits, quantités et conditions de livraison."
      },
      {
       "terme": "Bon de livraison",
       "def": "Document remis par le fournisseur avec la marchandise, signé à la réception."
      },
      {
       "terme": "Économat",
       "def": "Réserve où sont stockées les denrées et d'où elles sortent sur bon."
      },
      {
       "terme": "Bon de sortie",
       "def": "Document qui enregistre les produits sortis de la réserve vers un service."
      },
      {
       "terme": "Stock minimum",
       "def": "Niveau de stock en dessous duquel il faut passer commande."
      },
      {
       "terme": "Inventaire",
       "def": "Comptage physique des marchandises présentes à une date donnée."
      },
      {
       "terme": "PEPS",
       "def": "Premier entré, premier sorti : règle de rotation des stocks."
      },
      {
       "terme": "Décartonner",
       "def": "Retirer les emballages de transport avant de ranger les produits."
      },
      {
       "terme": "Briefing",
       "def": "Courte réunion avant le service pour transmettre les informations à l'équipe."
      },
      {
       "terme": "Biodéchets",
       "def": "Déchets alimentaires et organiques à trier pour être valorisés."
      }
     ],
     "qcm": [
      {
       "q": "Quel document le fournisseur remet-il avec la marchandise ?",
       "options": [
        "Le bon de commande",
        "Le bon de sortie",
        "La fiche technique",
        "Le bon de livraison"
       ],
       "bonnes": [
        3
       ],
       "explication": "Le bon de livraison accompagne la marchandise ; on le contrôle avant de le signer."
      },
      {
       "q": "Un carton de produits réfrigérés arrive à +10 °C au lieu de +4 °C maximum. Que faire ?",
       "options": [
        "L'accepter et le mettre vite au froid",
        "Le refuser et noter la réserve sur le bon de livraison",
        "Le congeler aussitôt",
        "L'utiliser pour le service du jour"
       ],
       "bonnes": [
        1
       ],
       "explication": "La chaîne du froid est rompue : le produit est refusé et l'anomalie est écrite sur le bon avant signature."
      },
      {
       "q": "Pourquoi décartonne-t-on les produits avant de les ranger en chambre froide ?",
       "options": [
        "Pour vérifier le prix",
        "Pour gagner du poids",
        "Pour faciliter le paiement",
        "Les cartons ont été salis pendant le transport"
       ],
       "bonnes": [
        3
       ],
       "explication": "Les emballages de transport peuvent apporter saletés et nuisibles dans les zones de stockage."
      },
      {
       "q": "Stock initial 20 kg, entrée 15 kg, sorties 8 kg et 12 kg. Quel est le stock final ?",
       "options": [
        "55 kg",
        "35 kg",
        "15 kg",
        "5 kg"
       ],
       "bonnes": [
        2
       ],
       "explication": "20 + 15 − 8 − 12 = 15 kg."
      },
      {
       "q": "Le stock de beurre passe à 3 kg ; le stock minimum est de 5 kg. Que faut-il faire ?",
       "options": [
        "Attendre l'inventaire de fin de mois",
        "Rien, il en reste encore",
        "Jeter le beurre restant",
        "Passer une commande"
       ],
       "bonnes": [
        3
       ],
       "explication": "Sous le stock minimum, on recommande pour éviter la rupture."
      },
      {
       "q": "Deux pots de crème identiques sont dans la chambre froide : l'un a une DLC au 12, l'autre au 15. On utilise d'abord :",
       "options": [
        "celui du 12",
        "celui du 15",
        "les deux en même temps",
        "le plus gros"
       ],
       "bonnes": [
        0
       ],
       "explication": "Premier périmé, premier sorti : le produit dont la date est la plus proche part en premier."
      },
      {
       "q": "L'inventaire indique 9 L d'huile alors que la fiche de stock en annonce 11 L. L'écart est de :",
       "options": [
        "20 L",
        "2 L",
        "11 L",
        "9 L"
       ],
       "bonnes": [
        1
       ],
       "explication": "11 − 9 = 2 L d'écart entre stock théorique et stock réel, à expliquer (casse, sortie non notée, perte)."
      },
      {
       "q": "Quels contrôles réalise-t-on à la réception d'une livraison ? (deux réponses)",
       "options": [
        "La température des produits frais",
        "Le salaire du livreur",
        "La concordance avec le bon de commande",
        "La couleur du camion"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "On vérifie notamment les températures et la conformité des quantités et produits avec la commande."
      },
      {
       "q": "Avant le service, le maître d'hôtel présente à l'équipe les réservations et les plats du jour. C'est :",
       "options": [
        "un inventaire",
        "un débriefing",
        "un briefing",
        "une réclamation"
       ],
       "bonnes": [
        2
       ],
       "explication": "Le briefing a lieu avant le service ; le débriefing, après."
      },
      {
       "q": "Quelles actions limitent le gaspillage alimentaire ? (deux réponses)",
       "options": [
        "Respecter le grammage des fiches techniques",
        "Commander le double par sécurité",
        "Trier les biodéchets pour les valoriser",
        "Resservir les restes d'assiettes"
       ],
       "bonnes": [
        0,
        2
       ],
       "explication": "Des portions maîtrisées et le tri des biodéchets réduisent les pertes ; resservir un plat présenté au client est interdit."
      }
     ]
    }
   ]
  }
 ]
};
