/* Polymates — Bac pro Métiers du cuir — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-cuir"] = {
 "id": "bp-cuir",
 "nom": "Métiers du cuir",
 "icone": "🎓",
 "couleur": "#82b4d2",
 "intro": "Le bac pro Métiers du cuir forme des prototypistes et des metteurs au point capables de passer du dessin du styliste au produit fabriqué en série, dans la chaussure, la maroquinerie ou la sellerie garnissage, pour le luxe, le haut de gamme, les petites séries et l'industrie. Ce cours de première et de terminale, fondé sur le référentiel en vigueur (options chaussures, maroquinerie et sellerie garnissage), couvre les savoirs associés communs : filière et produit, matières et essais, conception des modèles et CAO, coupe, procédés, industrialisation, qualité, maintenance, sécurité et démarche de projet, puis les savoirs propres à chaque option. Il est organisé en deux blocs : un cours théorique, puis un bloc d'analyse de documents qui montre, exemples commentés à l'appui, comment exploiter dossiers techniques, plans de placement, gammes, fiches matières, rapports d'essais et fiches de contrôle tels qu'ils apparaissent dans les épreuves.",
 "options": [
  {
   "id": "chaussures",
   "nom": "Option chaussures",
   "icone": "👞",
   "desc": "Développement de chaussures sur forme : pointures, tiges, montage, semelages et graduation en CAO."
  },
  {
   "id": "maroquinerie",
   "nom": "Option maroquinerie",
   "icone": "👜",
   "desc": "Sacs, petite maroquinerie et accessoires : volumes construits à plat, montages de bords, poignées, poches et doublures."
  },
  {
   "id": "sellerie",
   "nom": "Option sellerie garnissage",
   "icone": "💺",
   "desc": "Revêtements et garnissages de sièges et d'éléments pour l'automobile, l'aéronautique, le nautique, le ferroviaire et l'ameublement."
  }
 ],
 "parties": [
  {
   "titre": "Partie 1 — La filière, le produit et sa conception fonctionnelle",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bcuir-filiere-entreprises",
     "titre": "La filière cuir, ses entreprises et le métier de prototypiste",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Situer une entreprise du cuir dans sa filière, de l'élevage à la distribution",
      "Distinguer les types d'entreprises, de production et d'organisation rencontrés dans le secteur",
      "Identifier les services d'une entreprise et le rôle du prototypiste entre bureau d'études et atelier",
      "Caractériser les relations entre donneur d'ordres, sous-traitant et fournisseurs",
      "Repérer les évolutions de carrière possibles après le bac pro"
     ],
     "sections": [
      {
       "titre": "Une filière qui part de l'élevage",
       "contenu": "<p>Le cuir est un <strong>coproduit de l'élevage</strong> : les animaux ne sont pas élevés pour leur peau, mais pour la viande ou le lait. La peau, récupérée à l'abattoir, devient une matière première qui serait sinon un déchet. Cette origine explique plusieurs réalités du métier : la quantité de peaux disponibles dépend de la consommation de viande, chaque peau porte les traces de la vie de l'animal (cicatrices, piqûres d'insectes, rayures de barbelés) et aucune peau n'est identique à une autre.</p>\n<p>La <strong>filière cuir</strong> regroupe l'ensemble des acteurs qui transforment cette peau en produit fini. On la décrit généralement en trois maillons :</p>\n<ul>\n<li><strong>l'amont</strong> : éleveurs, abattoirs et collecteurs de peaux brutes, qui conservent les peaux (salage, réfrigération) avant leur vente ;</li>\n<li><strong>la transformation</strong> : tanneries et mégisseries, qui rendent la peau imputrescible et lui donnent son aspect ; les tanneries travaillent surtout les peaux de gros bovins et de veaux, les mégisseries les petites peaux (agneaux, chèvres, chevreaux) ;</li>\n<li><strong>l'aval</strong> : fabricants de chaussures, de maroquinerie, de ganterie, d'habillement, de sellerie (automobile, aéronautique, nautique, ameublement, équitation), puis distributeurs.</li>\n</ul>\n<p>À ces maillons s'ajoutent les <strong>fournisseurs</strong> de composants (fils, colles, renforts, mousses, accessoires métalliques, semelles, talons, formes de chaussures) et les fabricants de machines et de logiciels de CAO. Le titulaire du bac pro Métiers du cuir travaille dans l'aval, mais il doit connaître l'amont : le choix d'une peau, son prix et sa qualité conditionnent toute la fabrication.</p>\n<table>\n<thead><tr><th>Maillon</th><th>Exemples d'entreprises</th><th>Produit livré au maillon suivant</th></tr></thead>\n<tbody>\n<tr><td>Amont</td><td>Abattoir, collecteur de peaux</td><td>Peau brute salée ou fraîche</td></tr>\n<tr><td>Transformation</td><td>Tannerie, mégisserie, entreprise de finissage</td><td>Cuir fini vendu au mètre carré ou au pied carré</td></tr>\n<tr><td>Fabrication</td><td>Atelier de maroquinerie, usine de chaussures, sellerie</td><td>Produit fini (sac, chaussure, siège garni)</td></tr>\n<tr><td>Distribution</td><td>Boutique de marque, grand magasin, vente en ligne, constructeur automobile</td><td>Produit vendu au client final</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Les types d'entreprises et de marchés",
       "contenu": "<p>Le secteur est très contrasté. On y trouve de grandes maisons du <strong>luxe</strong> qui possèdent leurs propres ateliers en France, des <strong>PME</strong> qui fabriquent pour leur marque ou pour d'autres, et de très nombreuses <strong>TPE</strong> artisanales (bottiers, selliers, maroquiniers indépendants). Une même entreprise peut combiner plusieurs positionnements.</p>\n<p>On classe souvent les entreprises selon le <strong>segment de marché</strong> : luxe et haut de gamme (petites séries, exigence esthétique très élevée, matières nobles), moyenne gamme (séries moyennes, recherche du meilleur rapport qualité-prix) et entrée de gamme (grandes séries, production souvent délocalisée). En France, l'essentiel des emplois de fabrication se situe aujourd'hui dans le luxe, le haut de gamme et les petites séries, ainsi que dans les <strong>bureaux d'études</strong> qui conçoivent des modèles fabriqués ailleurs.</p>\n<p>La <strong>sellerie garnissage</strong> présente un profil particulier : ses clients sont souvent d'autres industries (constructeurs automobiles, avionneurs, chantiers navals, ferroviaire, fabricants de mobilier) avec des cahiers des charges techniques très stricts, notamment pour la tenue au feu.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans une maison de luxe, un même modèle de sac peut être produit à quelques centaines d'exemplaires par an, avec des réassorts réguliers. Le prototypiste y passe plus de temps à mettre au point les détails (bords, piqûres, tombé de la poignée) qu'à chercher des gains de productivité. Dans une PME de moyenne gamme, la priorité se déplace vers la consommation de matière et le temps de fabrication.</div>"
      },
      {
       "titre": "Organisation, types de production et flux",
       "contenu": "<p>Une entreprise s'organise en <strong>services</strong> (ou fonctions) : création et style, bureau d'études (développement des modèles), méthodes et industrialisation, achats et approvisionnements, coupe, préparation, montage, finition, contrôle qualité, maintenance, logistique, commercial. Dans une TPE, une seule personne peut assurer plusieurs fonctions.</p>\n<p>Trois modes d'organisation coexistent :</p>\n<ul>\n<li><strong>par services</strong> : chaque service a son responsable et ses tâches ; c'est l'organisation classique ;</li>\n<li><strong>par projets</strong> : une équipe pluridisciplinaire (styliste, modéliste, prototypiste, méthodes, achats) suit un modèle ou une collection du début à la fin ;</li>\n<li><strong>par processus</strong> : on décrit l'enchaînement des activités qui créent de la valeur pour le client (du dessin à la livraison) et on organise l'entreprise autour de ce flux ; c'est l'approche des normes qualité.</li>\n</ul>\n<p>Le <strong>type de production</strong> dépend des quantités : production unitaire (sur mesure, pièce unique, prototype), petite série (quelques dizaines à quelques centaines), moyenne et grande série. Le <strong>flux</strong> décrit la circulation des produits : en <strong>flux poussé</strong>, on fabrique selon des prévisions puis on stocke ; en <strong>flux tiré</strong>, on fabrique à la commande, ce qui réduit les stocks mais exige de la réactivité. L'atelier peut être organisé en <strong>chaîne</strong> (postes successifs, le produit passe de main en main, souvent en paquets ou « liasses »), en <strong>îlots</strong> (petites équipes polyvalentes qui réalisent un sous-ensemble ou le produit entier) ou en <strong>poste complet</strong> (un artisan réalise tout le produit).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> plus les séries sont petites et les modèles variés, plus l'organisation doit être souple (îlots, polyvalence). Plus les séries sont grandes, plus on décompose le travail en postes spécialisés et équilibrés.</div>"
      },
      {
       "titre": "Donneurs d'ordres, sous-traitants et relations contractuelles",
       "contenu": "<p>Le <strong>donneur d'ordres</strong> est l'entreprise qui commande une fabrication ou une prestation à une autre. Une marque peut confier la fabrication de ses sacs à un atelier extérieur : elle est donneur d'ordres, l'atelier est <strong>sous-traitant</strong>. Le sous-traitant fabrique selon les spécifications du donneur d'ordres (dossier technique, gabarits, matières parfois fournies) et n'a pas la maîtrise du modèle. On parle de <strong>co-traitance</strong> quand plusieurs entreprises réalisent ensemble une commande, chacune prenant en charge une partie, sous la coordination de l'une d'elles.</p>\n<p>La relation <strong>client-fournisseur</strong> s'appuie sur des documents contractuels : cahier des charges, bon de commande, conditions générales, accord qualité qui fixe les critères d'acceptation et les contrôles. Ce raisonnement s'applique aussi à l'intérieur de l'entreprise : la coupe est le « fournisseur » de la préparation, qui est elle-même fournisseur du montage. Chaque poste doit livrer un travail conforme au suivant.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un sous-traitant ne modifie jamais de lui-même une spécification (matière, couleur de fil, pas de piqûre, cote), même s'il pense l'améliorer. Toute modification passe par une demande écrite au donneur d'ordres et une validation, sinon le lot peut être refusé à réception.</div>"
      },
      {
       "titre": "Le prototypiste au cœur du développement",
       "contenu": "<p>Le bac pro Métiers du cuir prépare d'abord au métier de <strong>prototypiste</strong> (on dit aussi prototypiste en matériaux souples, ou prototypiste metteur au point). Son rôle se situe entre la création et la production :</p>\n<ol>\n<li>il reçoit le <strong>dessin du styliste</strong> et les informations du modéliste ;</li>\n<li>il participe à l'analyse produit-matériaux-procédés : quels cuirs, quelles fournitures, quels assemblages, à quel coût ;</li>\n<li>il réalise ou exploite les <strong>gabarits</strong>, à la main ou en CAO ;</li>\n<li>il fabrique le <strong>prototype</strong>, procède aux essais et propose des corrections ;</li>\n<li>il participe à l'industrialisation : processus de coupe, placement, gamme de montage, fiches de poste ;</li>\n<li>il suit les premières fabrications (présérie, petite série), règle les machines, contrôle la qualité et forme les opérateurs.</li>\n</ol>\n<p>Le schéma général du développement d'un produit peut se résumer ainsi : <strong>dessin</strong> puis <strong>maquette</strong> (en papier, toile ou cuir de récupération), puis <strong>prototype</strong> (premier exemplaire en matières réelles), puis <strong>modèle validé</strong>, puis <strong>présérie</strong> (quelques exemplaires fabriqués dans les conditions de la série pour tester le processus), puis <strong>série</strong>. À chaque étape, le prototypiste documente les choix pour que la fabrication soit reproductible.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour situer un poste dans une entreprise, posez-vous quatre questions dans l'ordre. 1) Quel produit et quel segment de marché ? 2) Quel type de production (unitaire, petite série, série) ? 3) Qui fournit l'entrée du poste (dessin, gabarits, pièces coupées) et qui reçoit sa sortie ? 4) Quels documents circulent entre les deux (dossier technique, fiche de poste, fiche de contrôle) ? Exemple : prototypiste en bureau d'études d'une marque de chaussures haut de gamme ; production en petites séries ; entrée = dessin et forme fournis par le styliste ; sortie = gabarits validés et prototype vers les méthodes ; documents = fiche technique du modèle et nomenclature.</div>"
      },
      {
       "titre": "Emplois et évolutions",
       "contenu": "<p>Les emplois accessibles dès l'obtention du diplôme sont ceux de prototypiste, monteur ou metteur au point, opérateur qualifié en coupe, piquage ou montage, contrôleur. Avec l'expérience, le titulaire peut évoluer vers le contrôle de production, le poste de chef d'équipe, de responsable d'atelier ou de modéliste. La poursuite d'études la plus directe est le <strong>BTS Métiers de la mode – chaussure et maroquinerie</strong>. Il existe aussi des formations complémentaires et des mentions dans l'artisanat, ainsi que des certifications de branche.</p>\n<p>Les savoir-faire du cuir sont des <strong>métiers d'art</strong> : la précision du geste, l'œil pour la qualité de la matière et le sens du détail restent décisifs, même dans les entreprises équipées de CAO et de découpe numérique. Les entreprises recherchent des profils capables de comprendre à la fois la matière, la machine et le document technique.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les grandes maisons ont développé leurs propres écoles internes et recrutent souvent des titulaires de bac pro pour les former à leurs méthodes. Une bonne présentation de son parcours de formation en milieu professionnel et de ses réalisations (photos de prototypes, fiches techniques rédigées) est un atout lors d'un entretien.</div>"
      }
     ],
     "points_cles": [
      "Le cuir est un coproduit de l'élevage ; chaque peau est unique et porte des défauts naturels.",
      "La filière va de l'abattoir à la distribution en passant par la tannerie ou la mégisserie et les fabricants.",
      "Les fabricants français se concentrent sur le luxe, le haut de gamme, les petites séries et les bureaux d'études.",
      "Une entreprise s'organise par services, par projets ou par processus.",
      "Le type de production (unitaire, petite série, série) détermine l'organisation de l'atelier (poste complet, îlots, chaîne).",
      "Le donneur d'ordres fixe les spécifications ; le sous-traitant les respecte sans les modifier seul.",
      "Le prototypiste fait le lien entre le dessin du styliste et la fabrication en série.",
      "Les étapes du développement sont : dessin, maquette, prototype, modèle validé, présérie, série."
     ],
     "lexique": [
      {
       "terme": "Filière",
       "def": "Ensemble des acteurs successifs qui transforment une matière première en produit vendu au client final."
      },
      {
       "terme": "Mégisserie",
       "def": "Entreprise qui tanne les petites peaux (agneau, chèvre, chevreau), souvent pour la ganterie, la chaussure et la maroquinerie fine."
      },
      {
       "terme": "Donneur d'ordres",
       "def": "Entreprise qui commande une fabrication à une autre et en fixe les spécifications."
      },
      {
       "terme": "Sous-traitance",
       "def": "Fabrication réalisée par une entreprise pour le compte d'une autre, selon les spécifications de celle-ci."
      },
      {
       "terme": "Prototype",
       "def": "Premier exemplaire d'un modèle réalisé dans les matières réelles pour en vérifier l'esthétique, la fonction et la faisabilité."
      },
      {
       "terme": "Présérie",
       "def": "Petite quantité fabriquée dans les conditions de la série pour valider le processus avant le lancement."
      },
      {
       "terme": "Flux tiré",
       "def": "Organisation dans laquelle la fabrication est déclenchée par la commande du client."
      },
      {
       "terme": "Îlot",
       "def": "Petite équipe polyvalente qui réalise un sous-ensemble ou un produit complet."
      }
     ]
    },
    {
     "id": "bcuir-mode-produits-protection",
     "titre": "Mode, collections, marques et protection des créations",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Expliquer le fonctionnement d'une tendance et le calendrier d'une collection",
      "Situer un produit par son image, sa cible et son positionnement",
      "Identifier les principaux réseaux de distribution des produits en cuir",
      "Distinguer marque, dessin et modèle, droit d'auteur, et connaître leurs durées de protection",
      "Appliquer les règles de dénomination et d'étiquetage des produits en cuir"
     ],
     "sections": [
      {
       "titre": "La mode, un phénomène cyclique",
       "contenu": "<p>La <strong>mode</strong> désigne l'ensemble des goûts partagés à un moment donné par un groupe de personnes. Une <strong>tendance</strong> est une orientation du goût (couleurs, matières, formes, détails) qui apparaît, se diffuse puis s'essouffle. Elle naît souvent dans des milieux créatifs restreints, est relayée par les défilés, les salons professionnels, les réseaux sociaux et les cabinets de tendances, puis est adoptée par le grand public avant d'être abandonnée. On parle de <strong>cycle de vie d'une tendance</strong> : émergence, diffusion, saturation, déclin.</p>\n<p>À côté des tendances, certains produits sont des <strong>classiques</strong> ou des <strong>intemporels</strong> : le richelieu noir, le mocassin, le sac cabas, le porte-cartes. Les grandes maisons possèdent aussi des <strong>modèles iconiques</strong> qui restent au catalogue pendant des décennies et constituent une part importante de leur chiffre d'affaires. Pour le prototypiste, cela signifie qu'un modèle peut être fabriqué très longtemps : les gabarits et le dossier technique doivent donc être parfaitement archivés.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la tendance agit sur les couleurs, les matières, les volumes et les détails ; le classique garde sa construction de base. Une collection mélange généralement des modèles permanents, déclinés dans de nouvelles couleurs, et des nouveautés.</div>"
      },
      {
       "titre": "Le calendrier d'une collection",
       "contenu": "<p>L'industrie de la mode travaille traditionnellement sur deux saisons : <strong>printemps-été</strong> et <strong>automne-hiver</strong>, auxquelles s'ajoutent souvent des collections intermédiaires (croisière, capsules). Le développement commence longtemps avant la mise en vente : il faut compter en général plus d'un an entre la recherche de tendances et l'arrivée en boutique.</p>\n<table>\n<thead><tr><th>Étape</th><th>Acteurs principaux</th><th>Rôle du prototypiste</th></tr></thead>\n<tbody>\n<tr><td>Recherche de tendances, thèmes, gammes de couleurs</td><td>Direction artistique, stylistes</td><td>Veille sur les matières et les techniques</td></tr>\n<tr><td>Dessins, choix des matières auprès des tanneurs</td><td>Stylistes, acheteurs</td><td>Avis sur la faisabilité</td></tr>\n<tr><td>Développement : maquettes, prototypes</td><td>Modélistes, prototypistes</td><td>Gabarits, prototypes, essais</td></tr>\n<tr><td>Échantillonnage et présentation aux acheteurs</td><td>Commercial</td><td>Réalisation des échantillons de vente</td></tr>\n<tr><td>Industrialisation et production</td><td>Méthodes, ateliers</td><td>Présérie, mise au point, formation</td></tr>\n</tbody>\n</table>\n<p>Les <strong>salons professionnels</strong> jouent un rôle important : salons de la matière (cuirs, composants, accessoires) où stylistes et acheteurs choisissent leurs peaux, salons de produits finis où les marques présentent leurs collections aux acheteurs. Le prototypiste peut y être associé pour juger la faisabilité d'une matière nouvelle.</p>"
      },
      {
       "titre": "Image, cible et positionnement du produit",
       "contenu": "<p>Un produit est conçu pour une <strong>cible</strong> : un groupe de clients défini par l'âge, le mode de vie, le budget, l'usage. Le <strong>positionnement</strong> est la place que la marque veut occuper dans l'esprit du client par rapport aux concurrents : luxe, créateur, sport, ville, technique, écoresponsable. L'<strong>image du produit</strong> résulte de tout ce que le client perçoit : la forme, la matière, la couleur, la qualité des finitions, le logo, l'emballage, le prix, le lieu de vente.</p>\n<p>Le prototypiste contribue directement à cette image : la régularité d'une piqûre, la qualité d'un bord teint, le tombé d'une poignée ou la ligne d'une chaussure sont des signes de qualité que le client remarque, souvent sans pouvoir les nommer. L'<strong>identification du produit</strong> passe aussi par des signes distinctifs : couture caractéristique, forme de fermoir, gravure, couleur de tranche, motif de matelassage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour analyser l'image d'un produit à partir d'une photo ou d'un dessin, procédez en quatre temps. 1) Décrivez objectivement : forme générale, matières, couleurs, détails, accessoires. 2) Identifiez la cible probable : usage (quotidien, soirée, travail, sport), âge, budget. 3) Relevez les signes de gamme : matières nobles, finitions (bords teints ou rembordés, piqûre main), quincaillerie massive ou légère. 4) Concluez sur le positionnement en justifiant par au moins trois indices. Exemple : un sac seau en veau grainé, bords teints, bandoulière ajustable, quincaillerie dorée discrète, logo embossé à chaud : usage quotidien, cible active de 30 à 50 ans, positionnement haut de gamme sobre.</div>"
      },
      {
       "titre": "Réseaux de distribution",
       "contenu": "<p>Les produits en cuir parviennent au client par plusieurs <strong>réseaux de distribution</strong> :</p>\n<ul>\n<li>les <strong>boutiques en propre</strong> de la marque (réseau intégré), qui maîtrisent l'image et le prix ;</li>\n<li>les <strong>franchises</strong>, commerces indépendants qui utilisent l'enseigne et les méthodes d'une marque ;</li>\n<li>les <strong>multimarques</strong> : boutiques indépendantes, grands magasins, chaînes spécialisées ;</li>\n<li>la <strong>vente en ligne</strong>, par le site de la marque ou des plateformes ;</li>\n<li>pour la sellerie garnissage, la vente se fait surtout <strong>entre entreprises</strong> : le client est un constructeur ou un fabricant de mobilier, ou un particulier pour la restauration d'un véhicule ou d'un fauteuil.</li>\n</ul>\n<p>Une <strong>marque</strong> est un signe qui permet de distinguer les produits d'une entreprise ; une <strong>enseigne</strong> est le nom d'un point de vente. Une même enseigne peut vendre plusieurs marques.</p>"
      },
      {
       "titre": "Protéger les marques et les modèles",
       "contenu": "<p>Les créations de mode sont fréquemment copiées. Le droit français et européen offre plusieurs protections, qui peuvent se cumuler :</p>\n<table>\n<thead><tr><th>Protection</th><th>Ce qui est protégé</th><th>Formalité</th><th>Durée</th></tr></thead>\n<tbody>\n<tr><td>Marque</td><td>Nom, logo, signe distinctif</td><td>Dépôt (INPI en France, EUIPO pour l'Union européenne)</td><td>10 ans, renouvelable indéfiniment</td></tr>\n<tr><td>Dessin et modèle enregistré</td><td>Apparence du produit : forme, lignes, couleurs, texture, ornementation</td><td>Dépôt (INPI ou EUIPO)</td><td>5 ans, renouvelable jusqu'à 25 ans</td></tr>\n<tr><td>Dessin ou modèle communautaire non enregistré</td><td>Apparence divulguée dans l'Union européenne</td><td>Aucune, naît de la divulgation</td><td>3 ans</td></tr>\n<tr><td>Droit d'auteur</td><td>Création originale portant l'empreinte de la personnalité de son auteur</td><td>Aucune, naît de la création</td><td>Vie de l'auteur plus 70 ans</td></tr>\n</tbody>\n</table>\n<p>Pour faire valoir le droit d'auteur, il faut pouvoir prouver la date de création : les entreprises datent et archivent leurs dessins, leurs gabarits et leurs prototypes. La reproduction d'un modèle protégé ou d'une marque sans autorisation est une <strong>contrefaçon</strong>, qui est un délit.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le prototypiste a accès à des informations confidentielles (dessins de la future collection, gabarits, fournisseurs). Diffuser une photo d'un prototype sur un réseau social avant la sortie peut nuire à l'entreprise et constituer une faute grave. Les contrats de travail et les conventions de stage contiennent souvent une clause de confidentialité.</div>"
      },
      {
       "titre": "Dénomination et étiquetage",
       "contenu": "<p>Le mot <strong>cuir</strong> est protégé : en France, il est réservé à la matière obtenue à partir d'une peau animale ayant conservé sa structure fibreuse naturelle, tannée pour être imputrescible (décret du 8 janvier 2010 relatif à l'utilisation du terme cuir). Une matière reconstituée à partir de fibres de cuir broyées et liées (« cuir reconstitué » ou fibre de cuir) ne peut pas être vendue simplement comme cuir. Les matières synthétiques qui imitent le cuir ne peuvent pas être appelées « cuir », même accompagnées d'un adjectif.</p>\n<p>Pour les <strong>chaussures</strong>, une réglementation européenne (directive 94/11/CE) impose d'indiquer la matière de trois parties : la tige, la doublure et la semelle de propreté, la semelle extérieure. L'information est donnée par des pictogrammes ou des mots : cuir, cuir enduit, textile, autres matières. On indique la matière qui représente au moins 80 % de la surface de la partie concernée ; sinon, les deux matières principales.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la nomenclature du modèle sert aussi à préparer l'étiquetage. Si le prototypiste remplace une doublure cuir par une doublure textile pour des raisons techniques, il doit le signaler : l'étiquette de la chaussure et la description commerciale doivent être modifiées.</div>"
      },
      {
       "titre": "Du dessin de mode au dossier du modèle",
       "contenu": "<p>Le travail de création aboutit à des documents que le prototypiste doit savoir lire. La <strong>planche de tendances</strong> (ou planche d'ambiance) rassemble des images, des matières et des couleurs qui donnent l'esprit d'une collection. La <strong>gamme de couleurs</strong> fixe les coloris de la saison, souvent avec des références de nuancier. Le <strong>dessin de mode</strong> (ou croquis de style) montre le produit porté ou mis en scène : il exprime une intention, pas des dimensions. Le <strong>dessin technique à plat</strong> représente le produit de face, de dos, de profil, avec ses coutures, ses découpes et ses accessoires : c'est la base du travail du modéliste et du prototypiste.</p>\n<p>Le dossier d'un modèle s'enrichit au fil du développement : dessins, choix de matières et de fournitures, gabarits, comptes rendus d'essais, photos du prototype, modifications demandées et validées. Chaque version porte une date et un indice, pour qu'on sache toujours quelle version est la bonne.</p>\n<ul>\n<li>Le croquis de style répond à la question « quel effet produire ? ».</li>\n<li>Le dessin technique à plat répond à « comment le produit est-il découpé et assemblé ? ».</li>\n<li>Le dossier technique complet répond à « avec quoi et comment le fabriquer de manière répétable ? ».</li>\n</ul>\n<p>Savoir passer de l'un à l'autre, en posant les bonnes questions au styliste quand un détail reste ambigu (une couture est-elle décorative ou d'assemblage ? un bord est-il teint ou rembordé ?), est une compétence centrale du métier.</p>"
      }
     ],
     "points_cles": [
      "Une tendance suit un cycle : émergence, diffusion, saturation, déclin.",
      "Une collection mélange modèles permanents et nouveautés et se prépare plus d'un an à l'avance.",
      "L'image du produit dépend de la forme, de la matière, des finitions, du prix et du lieu de vente.",
      "Les finitions réalisées par le prototypiste sont des signes de gamme visibles par le client.",
      "La marque se protège 10 ans renouvelables ; le dessin et modèle enregistré 5 ans renouvelables jusqu'à 25 ans.",
      "Le droit d'auteur naît de la création ; il faut dater et archiver dessins, gabarits et prototypes.",
      "Le terme cuir est réservé à la peau animale tannée ayant conservé sa structure fibreuse.",
      "L'étiquetage des chaussures indique la matière de la tige, de la doublure et de la semelle extérieure."
     ],
     "lexique": [
      {
       "terme": "Tendance",
       "def": "Orientation du goût partagée à un moment donné, qui apparaît, se diffuse puis décline."
      },
      {
       "terme": "Collection",
       "def": "Ensemble cohérent de modèles présentés pour une saison."
      },
      {
       "terme": "Cible",
       "def": "Groupe de clients auquel un produit est destiné."
      },
      {
       "terme": "Positionnement",
       "def": "Place qu'une marque ou un produit veut occuper dans l'esprit du client par rapport aux concurrents."
      },
      {
       "terme": "Enseigne",
       "def": "Nom commercial d'un point de vente."
      },
      {
       "terme": "Dessin et modèle",
       "def": "Titre de propriété industrielle protégeant l'apparence d'un produit."
      },
      {
       "terme": "Contrefaçon",
       "def": "Reproduction ou imitation d'une marque, d'un modèle ou d'une œuvre protégés, sans autorisation."
      },
      {
       "terme": "Cuir reconstitué",
       "def": "Matière obtenue à partir de fibres de cuir broyées et agglomérées, qui ne peut pas être vendue comme cuir."
      }
     ]
    },
    {
     "id": "bcuir-analyse-fonctionnelle",
     "titre": "Analyse fonctionnelle et morphologique du produit",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Exprimer le besoin auquel répond un produit en cuir",
      "Identifier les fonctions de service et les contraintes d'un produit",
      "Rédiger les critères et niveaux d'un cahier des charges fonctionnel simple",
      "Décomposer un produit en sous-ensembles et composants",
      "Intégrer le cycle de vie et l'écoconception dans l'analyse"
     ],
     "sections": [
      {
       "titre": "Du besoin au produit",
       "contenu": "<p>Tout produit répond à un <strong>besoin</strong> : transporter ses affaires, protéger et soutenir le pied, s'asseoir confortablement dans un véhicule. L'<strong>analyse fonctionnelle</strong> est une démarche qui décrit ce que le produit doit faire, avant de décider comment il sera fabriqué. Elle évite de se précipiter sur une solution technique et permet de comparer plusieurs solutions sur des critères objectifs.</p>\n<p>On formule le besoin en répondant à trois questions : <strong>à qui</strong> le produit rend-il service ? <strong>Sur quoi</strong> agit-il ? <strong>Dans quel but</strong> ? Pour un sac à main : il rend service à l'utilisatrice, il agit sur ses effets personnels, dans le but de les transporter et de les protéger tout en affirmant son style. Pour un siège automobile garni : il rend service au conducteur, il agit sur son corps, dans le but de le maintenir confortablement et en sécurité pendant la conduite.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'analyse fonctionnelle part de l'utilisateur, pas de la matière ni de la machine. On décrit d'abord les services attendus, puis on cherche les solutions constructives.</div>"
      },
      {
       "titre": "Fonctions de service et contraintes",
       "contenu": "<p>Le produit est placé dans son <strong>environnement</strong> : l'utilisateur, les objets transportés, le climat, les autres vêtements, l'entretien, le stockage, la réglementation, le prix. On en déduit :</p>\n<ul>\n<li>les <strong>fonctions principales</strong> (FP), qui justifient l'existence du produit en mettant en relation deux éléments de l'environnement : « permettre à l'utilisatrice de transporter ses effets personnels » ;</li>\n<li>les <strong>fonctions complémentaires</strong> (FC), qui relient le produit à un seul élément : « plaire à l'utilisatrice », « résister à la pluie », « se ranger à plat » ;</li>\n<li>les <strong>contraintes</strong> (C), qui limitent la liberté du concepteur : coût de revient maximal, réglementation (tenue au feu en sellerie, étiquetage), délai, procédés disponibles dans l'atelier.</li>\n</ul>\n<p>On distingue aussi les <strong>fonctions d'usage</strong> (ce à quoi sert le produit) et les <strong>fonctions d'estime</strong> (ce qui le rend désirable : esthétique, image de marque, toucher). Dans les produits de mode, les fonctions d'estime pèsent très lourd ; dans la sellerie technique, les fonctions d'usage et les contraintes réglementaires dominent.</p>\n<p>Une fonction s'écrit avec un <strong>verbe à l'infinitif</strong>, sans évoquer de solution : on écrit « permettre l'ouverture et la fermeture », et non « avoir une fermeture à glissière ».</p>"
      },
      {
       "titre": "Critères, niveaux et flexibilité",
       "contenu": "<p>Pour qu'une fonction soit vérifiable, on lui associe des <strong>critères d'appréciation</strong> et des <strong>niveaux</strong> chiffrés, avec une <strong>flexibilité</strong> (marge acceptable). L'ensemble constitue le <strong>cahier des charges fonctionnel</strong>.</p>\n<table>\n<thead><tr><th>Fonction</th><th>Critère</th><th>Niveau</th><th>Flexibilité</th></tr></thead>\n<tbody>\n<tr><td>FP1 : permettre de transporter des effets personnels</td><td>Format intérieur utile</td><td>Contenir un document A4 à plat</td><td>Aucune</td></tr>\n<tr><td>FP1</td><td>Charge supportée par la poignée</td><td>5 kg sans déformation</td><td>Plus ou moins 0,5 kg</td></tr>\n<tr><td>FC1 : protéger le contenu</td><td>Fermeture</td><td>Ouverture totale fermée</td><td>Aucune</td></tr>\n<tr><td>FC2 : plaire à l'utilisatrice</td><td>Couleurs</td><td>Trois coloris de la gamme saison</td><td>Un de plus ou de moins</td></tr>\n<tr><td>FC3 : être porté à l'épaule</td><td>Longueur de la bandoulière</td><td>De 1 000 à 1 200 mm réglable</td><td>Plus ou moins 20 mm</td></tr>\n<tr><td>C1 : respecter le coût</td><td>Coût de revient matière</td><td>45 euros maximum</td><td>Plus 5 %</td></tr>\n</tbody>\n</table>\n<p>Les niveaux de cet exemple sont fixés par l'entreprise pour son produit ; ils ne sont pas réglementaires. En revanche, certains niveaux proviennent de normes ou de textes (tenue au feu, solidité des couleurs, teneur en substances interdites) et ne sont pas négociables.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une fonction sans critère mesurable ne peut pas être contrôlée. « Être solide » ne veut rien dire tant qu'on n'a pas précisé la charge, la durée, le nombre de cycles ou l'essai normalisé de référence.</div>"
      },
      {
       "titre": "Analyse morphologique : formes, proportions, tailles",
       "contenu": "<p>L'<strong>analyse morphologique</strong> décrit la forme du produit : silhouette générale, volumes, proportions entre les parties, lignes principales. Elle s'appuie sur le dessin du styliste, qui est souvent une vue en perspective ou en élévation sans cotes. Le prototypiste doit en extraire des dimensions cohérentes.</p>\n<p>Les <strong>proportions</strong> sont les rapports de dimensions entre les éléments : rapport hauteur sur largeur d'un sac, position d'une couture de claque sur une chaussure, largeur d'une plate-bande de siège par rapport à l'assise. Une erreur de proportion change complètement l'aspect du produit, même si chaque pièce est parfaitement réalisée.</p>\n<p>La <strong>taille</strong> concerne surtout la chaussure (pointures) et certains articles déclinés en plusieurs formats (petit, moyen, grand modèle de sac). Passer d'une taille à l'autre suppose une règle : graduation pour la chaussure, homothétie ou modification ciblée pour la maroquinerie.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer les cotes d'un sac à partir d'un dessin non coté. 1) Repérez un élément dont la dimension est connue : une fermeture à glissière standard, une boucle de 30 mm, ou une indication du styliste (« largeur 32 cm »). 2) Mesurez cet élément sur le dessin : par exemple 16 mm pour une largeur réelle de 320 mm ; l'échelle est donc 16/320 = 1/20. 3) Mesurez les autres dimensions sur le dessin et multipliez par 20 : hauteur dessinée 12,5 mm donne 250 mm ; soufflet dessiné 6 mm donne 120 mm. 4) Vérifiez la cohérence avec le cahier des charges (un A4 mesure 210 × 297 mm : il entre à plat si la largeur intérieure dépasse 297 mm et la hauteur 210 mm, une fois retirées les épaisseurs et les valeurs de couture). 5) Faites valider les cotes par le styliste avant de tracer.</div>"
      },
      {
       "titre": "Sous-ensembles et composants",
       "contenu": "<p>Un produit se décompose en <strong>sous-ensembles</strong>, eux-mêmes formés de <strong>composants</strong> (ou éléments). Cette décomposition prépare la nomenclature et la gamme de fabrication.</p>\n<table>\n<thead><tr><th>Produit</th><th>Sous-ensembles</th><th>Exemples de composants</th></tr></thead>\n<tbody>\n<tr><td>Sac à main</td><td>Corps, soufflets, fond, poignées, bandoulière, doublure, poche intérieure, fermeture</td><td>Devant, dos, renfort, pied de sac, attache, boucle, fermeture à glissière</td></tr>\n<tr><td>Chaussure de ville</td><td>Tige, semelage, garnitures</td><td>Claque, quartiers, contrefort, bout dur, doublure, première de montage, semelle, talon</td></tr>\n<tr><td>Siège garni</td><td>Assise, dossier, appuie-tête, structure</td><td>Housse (plateaux, plates-bandes, joues), mousse, ouate, accroches, armature</td></tr>\n</tbody>\n</table>\n<p>On classe les composants selon leur origine : <strong>pièces coupées</strong> dans la matière principale (cuir) ou secondaire (doublure, renfort), <strong>fournitures</strong> achetées (fil, colle, fermetures, quincaillerie) et <strong>sous-ensembles achetés</strong> (semelles, talons, armatures). Cette distinction compte pour les approvisionnements et le calcul du coût.</p>"
      },
      {
       "titre": "Cycle de vie et développement durable",
       "contenu": "<p>Le <strong>cycle de vie</strong> d'un produit couvre toutes ses étapes : extraction et production des matières, fabrication, transport, distribution, utilisation et entretien, fin de vie (réparation, réemploi, recyclage, élimination). L'<strong>écoconception</strong> consiste à réduire les impacts environnementaux sur l'ensemble de ce cycle dès la conception.</p>\n<p>Dans les métiers du cuir, les leviers sont concrets :</p>\n<ul>\n<li>optimiser le placement pour réduire les chutes de cuir, et valoriser ces chutes (petite maroquinerie, fibres) ;</li>\n<li>choisir des cuirs issus de tanneries engagées dans des démarches environnementales et vérifier l'absence de substances interdites ;</li>\n<li>limiter les colles solvantées au profit de colles en phase aqueuse quand c'est techniquement possible ;</li>\n<li>concevoir des produits <strong>réparables</strong> : semelage cousu remplaçable, poignées démontables, pièces d'usure standardisées ;</li>\n<li>éviter les assemblages de matières incompatibles qui empêchent le tri en fin de vie.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les services de réparation et de remise en état se développent dans les maisons de maroquinerie et de chaussures. Un modèle conçu pour être démonté (piqûres accessibles, pièces non collées en plein) coûte parfois un peu plus cher à fabriquer, mais prolonge sa durée d'usage et renforce l'image de qualité.</div>"
      },
      {
       "titre": "Comparer des solutions avec une grille de choix",
       "contenu": "<p>Une fois les fonctions définies, plusieurs solutions constructives sont souvent possibles. Pour choisir de façon argumentée, on utilise une <strong>grille de choix pondérée</strong> : chaque critère reçoit un poids selon son importance, chaque solution reçoit une note par critère, et on calcule un total.</p>\n<table>\n<thead><tr><th>Critère (poids)</th><th>Solution A : bandoulière cuir doublée piquée</th><th>Solution B : bandoulière sangle textile</th></tr></thead>\n<tbody>\n<tr><td>Esthétique conforme au dessin (3)</td><td>Note 3, soit 9</td><td>Note 1, soit 3</td></tr>\n<tr><td>Résistance à l'allongement (2)</td><td>Note 2, soit 4</td><td>Note 3, soit 6</td></tr>\n<tr><td>Coût (2)</td><td>Note 1, soit 2</td><td>Note 3, soit 6</td></tr>\n<tr><td>Temps de fabrication (1)</td><td>Note 1, soit 1</td><td>Note 3, soit 3</td></tr>\n<tr><td><strong>Total</strong></td><td><strong>16</strong></td><td><strong>18</strong></td></tr>\n</tbody>\n</table>\n<p>Dans cet exemple, la solution B obtient le meilleur total ; mais si le cahier des charges impose « bandoulière en cuir assorti » comme exigence esthétique non négociable, la solution B est éliminée d'emblée, quel que soit son score. La grille sert à éclairer une décision, pas à remplacer l'avis du styliste ou du responsable technique. On garde la grille dans le dossier du modèle : elle justifie le choix si on doit y revenir plus tard.</p>"
      }
     ],
     "points_cles": [
      "L'analyse fonctionnelle décrit ce que le produit doit faire avant de choisir comment le fabriquer.",
      "Le besoin se formule par trois questions : à qui, sur quoi, dans quel but.",
      "Fonctions principales, fonctions complémentaires et contraintes s'écrivent avec un verbe à l'infinitif, sans solution.",
      "Chaque fonction reçoit un critère, un niveau et une flexibilité pour devenir contrôlable.",
      "Les proportions conditionnent l'aspect autant que la qualité de réalisation.",
      "Le produit se décompose en sous-ensembles puis en composants : pièces coupées, fournitures, sous-ensembles achetés.",
      "L'écoconception agit sur le placement, le choix des matières, les colles, la réparabilité et la fin de vie."
     ],
     "lexique": [
      {
       "terme": "Analyse fonctionnelle",
       "def": "Démarche qui décrit les services qu'un produit doit rendre, indépendamment des solutions techniques."
      },
      {
       "terme": "Fonction principale",
       "def": "Fonction qui justifie l'existence du produit en reliant deux éléments de son environnement."
      },
      {
       "terme": "Fonction d'estime",
       "def": "Fonction qui rend le produit désirable : esthétique, toucher, image."
      },
      {
       "terme": "Contrainte",
       "def": "Limite imposée au concepteur : coût, réglementation, délai, moyens de fabrication."
      },
      {
       "terme": "Cahier des charges fonctionnel",
       "def": "Document qui liste les fonctions avec leurs critères, niveaux et flexibilités."
      },
      {
       "terme": "Flexibilité",
       "def": "Marge acceptable autour du niveau d'un critère."
      },
      {
       "terme": "Composant",
       "def": "Élément élémentaire d'un produit : pièce coupée, fourniture ou sous-ensemble acheté."
      },
      {
       "terme": "Écoconception",
       "def": "Prise en compte des impacts environnementaux sur tout le cycle de vie dès la conception."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Matières et matériaux",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bcuir-peau-tannage",
     "titre": "De la peau au cuir : structure, tannage et finissage",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire la structure histologique d'une peau et le rôle du collagène",
      "Ordonner les grandes étapes du travail de rivière, du tannage et du finissage",
      "Comparer les principaux types de tannage et leurs conséquences sur le cuir",
      "Distinguer fleur, croûte et cuir refendu",
      "Citer les principales espèces utilisées et leurs usages"
     ],
     "sections": [
      {
       "titre": "La structure de la peau",
       "contenu": "<p>Une peau d'animal est formée de trois couches superposées :</p>\n<ul>\n<li>l'<strong>épiderme</strong>, couche externe mince qui porte les poils ; il est éliminé pendant la fabrication ;</li>\n<li>le <strong>derme</strong>, couche épaisse et résistante, seule conservée pour faire le cuir ;</li>\n<li>l'<strong>hypoderme</strong>, couche de graisse et de tissus qui relie la peau aux muscles ; il est éliminé par l'écharnage.</li>\n</ul>\n<p>Le derme est constitué essentiellement de <strong>collagène</strong>, une protéine qui forme des fibres entrelacées en trois dimensions. Cet entrelacement donne au cuir sa résistance, sa souplesse et sa capacité à « respirer ». On distingue dans le derme :</p>\n<ul>\n<li>la <strong>couche papillaire</strong>, côté poil, aux fibres fines et serrées ; sa surface, une fois les poils retirés, porte le dessin des pores caractéristique de chaque espèce : c'est la <strong>fleur</strong> ;</li>\n<li>la <strong>couche réticulaire</strong>, côté chair, aux fibres plus grosses et plus lâches, qui apporte la résistance mécanique.</li>\n</ul>\n<p>Une peau fraîche est putrescible : sans traitement, les bactéries décomposent le collagène. Le <strong>tannage</strong> stabilise le collagène et rend la peau <strong>imputrescible</strong> : c'est ce qui la transforme en cuir.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la fleur est la surface la plus belle et la plus résistante à l'usure ; le côté chair est fibreux. Un cuir « pleine fleur » a conservé sa fleur intacte, sans ponçage.</div>"
      },
      {
       "titre": "Le travail de rivière",
       "contenu": "<p>Avant le tannage, la peau subit une série d'opérations en milieu humide appelées <strong>travail de rivière</strong> (autrefois réalisées au bord des cours d'eau) :</p>\n<ol>\n<li><strong>trempe</strong> : réhydratation et lavage de la peau conservée (salée ou séchée) ;</li>\n<li><strong>épilage et pelanage</strong> : élimination des poils et de l'épiderme, gonflement des fibres, en bain alcalin (chaux et produits soufrés le plus souvent) ;</li>\n<li><strong>écharnage</strong> : élimination mécanique de l'hypoderme côté chair ;</li>\n<li><strong>refendage</strong> (souvent à ce stade ou après tannage) : la peau épaisse est fendue dans son épaisseur en deux couches ;</li>\n<li><strong>déchaulage et confitage</strong> : élimination de la chaux et action d'enzymes qui assouplissent la structure ;</li>\n<li><strong>picklage</strong> : acidification de la peau pour préparer la pénétration des agents tannants.</li>\n</ol>\n<p>Ces opérations consomment beaucoup d'eau et produisent des effluents chargés ; les tanneries sont des installations soumises à une réglementation environnementale stricte.</p>"
      },
      {
       "titre": "Les types de tannage",
       "contenu": "<p>Le tannage fixe des agents tannants sur le collagène. Le choix du tannage détermine de nombreuses propriétés du cuir.</p>\n<table>\n<thead><tr><th>Tannage</th><th>Agents</th><th>Caractéristiques</th><th>Usages typiques</th></tr></thead>\n<tbody>\n<tr><td>Au chrome (minéral)</td><td>Sels de chrome trivalent</td><td>Rapide (quelques heures), cuir souple, bonne tenue à la chaleur, se teint facilement ; tranche bleu-gris à l'état « wet blue »</td><td>Majorité des cuirs de dessus de chaussure, maroquinerie souple, ameublement, automobile</td></tr>\n<tr><td>Végétal</td><td>Tanins extraits d'écorces, de bois ou de fruits (châtaignier, mimosa, quebracho)</td><td>Long (plusieurs semaines en fosses ou quelques jours en foulon), cuir ferme, se patine, se moule à l'humidité, tranche se lisse et se teint bien</td><td>Semelles, sellerie équestre, ceintures, maroquinerie à bords teints, gainerie</td></tr>\n<tr><td>Synthétique et aldéhydique (sans chrome)</td><td>Tanins de synthèse, aldéhydes</td><td>Cuir clair et souple, dit « wet white » à l'état humide ; recherché pour les cuirs sans métal</td><td>Automobile, articles pour enfants, cuirs dits sans chrome</td></tr>\n<tr><td>Mixte</td><td>Chrome puis végétal, ou inverse</td><td>Combine souplesse et tenue</td><td>Cuirs de dessus, maroquinerie</td></tr>\n</tbody>\n</table>\n<p>Après le tannage, la peau est essorée puis <strong>dérayée</strong> (mise à épaisseur régulière par rasage côté chair). Viennent ensuite le <strong>retannage</strong>, la <strong>teinture</strong> dans la masse et la <strong>nourriture</strong> (graissage qui lubrifie les fibres et donne la souplesse), en foulon. Le cuir est ensuite séché, puis assoupli mécaniquement (<strong>palissonnage</strong>).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans certaines conditions (oxydation, chaleur, mauvaise maîtrise du procédé), le chrome trivalent peut se transformer en <strong>chrome hexavalent</strong>, allergisant et toxique. Le règlement européen REACH limite sa teneur dans les articles en cuir en contact avec la peau à 3 mg/kg. Les fiches techniques des tanneurs et les rapports d'essai doivent le mentionner.</div>"
      },
      {
       "titre": "Refendage : fleur et croûte",
       "contenu": "<p>Une peau de bovin adulte mesure plusieurs millimètres d'épaisseur. Pour obtenir des cuirs plus fins et valoriser toute l'épaisseur, on la <strong>refend</strong> avec une machine à lame à ruban :</p>\n<ul>\n<li>la couche supérieure, qui porte la fleur, est la <strong>fleur</strong> (ou cuir fleur) : c'est la partie noble ;</li>\n<li>la couche inférieure, côté chair, est la <strong>croûte</strong> : sans fleur, elle est utilisée en velours (croûte velours), ou recouverte d'un film ou d'un enduit (croûte enduite, croûte « fleur corrigée »).</li>\n</ul>\n<p>Un cuir peut aussi être <strong>poncé côté fleur</strong> pour masquer des défauts : on obtient une <strong>fleur corrigée</strong>, ensuite recouverte d'un finissage pigmenté et imprimée d'un grain artificiel. Un cuir dont la fleur est poncée très légèrement pour lui donner un toucher velouté est un <strong>nubuck</strong>. Un <strong>velours</strong> est un cuir travaillé côté chair.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> identifier la nature d'un cuir à l'atelier. 1) Observez la tranche à la loupe : des fibres fines et serrées en surface au-dessus de fibres plus lâches indiquent un cuir fleur ; des fibres lâches sur toute l'épaisseur avec une couche plastique en surface indiquent une croûte enduite. 2) Observez la surface : des pores irréguliers et naturels indiquent une pleine fleur ; un grain très régulier et répétitif indique une impression. 3) Pliez le cuir côté fleur vers l'extérieur : une fleur corrigée très pigmentée peut blanchir ou craqueler, une pleine fleur forme des plis fins. 4) Comparez avec la fiche technique du fournisseur, qui fait foi.</div>"
      },
      {
       "titre": "Le finissage",
       "contenu": "<p>Le <strong>finissage</strong> donne au cuir son aspect et ses propriétés de surface. Il peut comprendre :</p>\n<ul>\n<li>l'application de couches de <strong>finition</strong> (pigments, résines, cires, laques) au pistolet ou au rouleau ;</li>\n<li>le <strong>lissage</strong> (brillant), le <strong>repassage</strong> à chaud sous presse ;</li>\n<li>l'<strong>impression</strong> d'un grain ou d'un motif (grain croco, grain saffiano, grain cuir naturel) ;</li>\n<li>le <strong>grainage</strong> au foulon ou à la main, qui fait ressortir un grain naturel en plissant la fleur ;</li>\n<li>des traitements fonctionnels : <strong>hydrofugation</strong> (déperlance), traitement anti-taches, ignifugation pour la sellerie technique.</li>\n</ul>\n<p>On distingue les cuirs <strong>aniline</strong> (teints dans la masse, sans pigments couvrants : la fleur reste visible, très beaux mais sensibles aux taches), <strong>semi-aniline</strong> (fine couche pigmentée) et <strong>pigmentés</strong> (couche couvrante qui uniformise et protège : cuirs résistants, utilisés en automobile ou en ameublement collectif).</p>"
      },
      {
       "titre": "Les espèces et leurs usages",
       "contenu": "<p>Chaque espèce donne un cuir de dimensions, d'épaisseur et d'aspect différents. Les surfaces sont des ordres de grandeur, très variables selon l'âge et la race de l'animal.</p>\n<table>\n<thead><tr><th>Espèce</th><th>Surface d'une peau</th><th>Caractères</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Bovin adulte (vache, taurillon, taureau)</td><td>Peau entière de 4 à 5 m², souvent vendue en demi-peaux (bandes)</td><td>Épais, résistant, grain plus marqué</td><td>Chaussure, maroquinerie, sellerie automobile et ameublement, semelles</td></tr>\n<tr><td>Veau</td><td>De l'ordre de 1 à 1,5 m²</td><td>Grain fin, souple, très régulier</td><td>Chaussure de luxe, maroquinerie haut de gamme</td></tr>\n<tr><td>Chèvre et chevreau</td><td>De l'ordre de 0,5 à 0,8 m²</td><td>Grain caractéristique, bonne résistance pour sa finesse</td><td>Chaussure, maroquinerie, reliure</td></tr>\n<tr><td>Agneau, mouton</td><td>De l'ordre de 0,5 à 0,7 m²</td><td>Très souple, peu résistant</td><td>Ganterie, doublures, maroquinerie souple</td></tr>\n<tr><td>Porc</td><td>Variable</td><td>Pores groupés par trois, bonne respirabilité</td><td>Doublures de chaussures</td></tr>\n<tr><td>Espèces dites exotiques</td><td>Petite surface</td><td>Écailles ou grains spectaculaires, prix élevé</td><td>Luxe, soumis à la convention CITES pour de nombreuses espèces</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les cuirs sont vendus à la surface, mesurée en tannerie par une machine et inscrite au dos de chaque peau, en mètres carrés ou en pieds carrés (1 pied carré vaut environ 9,29 dm²). Le prototypiste doit savoir convertir pour estimer une consommation : 25 pieds carrés correspondent à environ 2,32 m².</div>"
      },
      {
       "titre": "Lire la fiche technique d'un tanneur",
       "contenu": "<p>Chaque article de cuir est accompagné d'une <strong>fiche technique</strong> du tanneur. Elle permet de vérifier que la matière convient à l'usage prévu. On y trouve généralement :</p>\n<ul>\n<li>la désignation commerciale de l'article et l'espèce (veau, vachette, taurillon, chèvre…) ;</li>\n<li>le type de tannage (chrome, végétal, sans chrome) et de finissage (aniline, semi-aniline, pigmenté, nubuck, imprimé) ;</li>\n<li>l'épaisseur en plage, par exemple 1,2/1,4 mm ;</li>\n<li>la forme de livraison : peau entière, demi-peau, croupon, avec la surface moyenne ;</li>\n<li>les résultats d'essais physiques : résistance à la déchirure, solidité des couleurs au frottement, flexions répétées, résistance à la lumière ;</li>\n<li>les données chimiques : teneur en chrome hexavalent, absence de colorants interdits, conformité à la liste de substances restreintes du client ;</li>\n<li>les conseils de mise en œuvre : température maximale de repassage, colles compatibles, précautions d'entretien.</li>\n</ul>\n<p>Le prototypiste confronte ces données au cahier des charges du produit. Un cuir aniline très souple, superbe pour un sac du soir, peut être inadapté à une chaussure de pluie ou à un siège de véhicule utilitaire. À l'inverse, un cuir pigmenté très résistant peut paraître trop « plastique » pour un produit de luxe. Le choix final est toujours un compromis entre esthétique, performance et coût.</p>"
      }
     ],
     "points_cles": [
      "La peau comprend épiderme, derme et hypoderme ; seul le derme, riche en collagène, devient du cuir.",
      "La fleur est la surface côté poil, la plus belle et la plus résistante.",
      "Le travail de rivière prépare la peau : trempe, épilage-pelanage, écharnage, déchaulage, confitage, picklage.",
      "Le tannage au chrome donne un cuir souple et rapide à produire ; le tannage végétal un cuir ferme qui se moule et se patine.",
      "Le chrome hexavalent est limité à 3 mg/kg dans les articles en cuir en contact avec la peau.",
      "Le refendage sépare la fleur et la croûte ; la fleur corrigée est poncée puis pigmentée.",
      "Un cuir aniline montre sa fleur, un cuir pigmenté est couvert et plus résistant.",
      "La surface des peaux s'exprime en m² ou en pieds carrés (1 pied carré vaut environ 9,29 dm²)."
     ],
     "lexique": [
      {
       "terme": "Derme",
       "def": "Couche principale de la peau, constituée de fibres de collagène, qui devient le cuir."
      },
      {
       "terme": "Fleur",
       "def": "Surface du cuir côté poil, portant le dessin des pores de l'espèce."
      },
      {
       "terme": "Croûte",
       "def": "Couche inférieure d'une peau refendue, sans fleur."
      },
      {
       "terme": "Tannage",
       "def": "Opération qui stabilise le collagène et rend la peau imputrescible."
      },
      {
       "terme": "Wet blue",
       "def": "Cuir tanné au chrome, à l'état humide, de couleur bleu-gris, avant retannage et teinture."
      },
      {
       "terme": "Nourriture",
       "def": "Graissage du cuir en foulon qui lubrifie les fibres et donne la souplesse."
      },
      {
       "terme": "Nubuck",
       "def": "Cuir fleur légèrement poncé pour obtenir un toucher velouté."
      },
      {
       "terme": "Aniline",
       "def": "Cuir teint dans la masse sans couche pigmentée couvrante, la fleur restant visible."
      },
      {
       "terme": "Palissonnage",
       "def": "Assouplissement mécanique du cuir sec."
      }
     ]
    },
    {
     "id": "bcuir-qualite-defauts-cuirs",
     "titre": "Caractériser un cuir : zones, prêtant, épaisseur et défauts",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Repérer les zones d'une peau et leurs qualités respectives",
      "Déterminer le sens et l'importance du prêtant",
      "Mesurer et exprimer l'épaisseur d'un cuir",
      "Identifier les principaux défauts naturels et de fabrication",
      "Classer une peau et vérifier sa conformité à une commande"
     ],
     "sections": [
      {
       "titre": "Les zones d'une peau",
       "contenu": "<p>Une peau n'a pas la même qualité partout. La structure des fibres varie selon les zones du corps de l'animal. Sur une peau de bovin étalée, on distingue :</p>\n<table>\n<thead><tr><th>Zone</th><th>Situation</th><th>Qualité</th></tr></thead>\n<tbody>\n<tr><td><strong>Croupon</strong></td><td>Partie centrale du dos et de la croupe, de part et d'autre de la ligne du dos</td><td>Fibres serrées, épaisseur régulière, peu de prêtant : la meilleure zone</td></tr>\n<tr><td><strong>Collet</strong></td><td>Cou et épaules</td><td>Plus épais, plis et rides naturels, structure moins régulière</td></tr>\n<tr><td><strong>Flancs</strong></td><td>Ventre et côtés</td><td>Plus minces, fibres lâches, beaucoup de prêtant, parfois creux</td></tr>\n<tr><td>Pattes et bords</td><td>Extrémités</td><td>Irréguliers, souvent écartés ou réservés à de petites pièces cachées</td></tr>\n</tbody>\n</table>\n<p>La <strong>ligne du dos</strong> (emplacement de la colonne vertébrale) sert de repère : elle partage la peau en deux moitiés symétriques. Une <strong>demi-peau</strong> (ou bande, ou côté) est une moitié de peau coupée le long de cette ligne. On peut aussi acheter des parties détachées : croupons, collets, flancs, à des prix très différents.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on réserve les zones de première qualité (croupon) aux pièces les plus visibles et les plus sollicitées : claque d'une chaussure, devant d'un sac, plateau d'assise. Les zones moins nobles servent aux pièces cachées ou peu sollicitées.</div>"
      },
      {
       "titre": "Le prêtant et son sens",
       "contenu": "<p>Le <strong>prêtant</strong> est l'aptitude du cuir à s'allonger sous un effort. Il est faible dans le croupon et fort dans les flancs. Dans une zone donnée, il n'est pas le même dans toutes les directions : en général, le cuir s'allonge moins parallèlement à la ligne du dos que perpendiculairement à celle-ci.</p>\n<p>Le sens du prêtant conditionne la tenue du produit :</p>\n<ul>\n<li>en chaussure, la claque doit pouvoir se tendre transversalement sur la forme lors du montage, mais ne doit pas s'allonger dans le sens de la longueur du pied, sinon la chaussure se déforme à l'usage ;</li>\n<li>en maroquinerie, une poignée ou une bandoulière doit être coupée dans le sens du moindre prêtant pour ne pas s'allonger sous la charge ;</li>\n<li>en sellerie, le prêtant aide à épouser les galbes d'une assise, mais il doit être orienté de la même manière sur les pièces symétriques pour que la housse se tende régulièrement.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> tester le prêtant à la main. 1) Repérez la ligne du dos (sur une demi-peau, c'est le bord droit et régulier). 2) Dans la zone à tester, pincez le cuir entre les pouces et les index de chaque main, écartés d'environ 10 cm, et tirez parallèlement à la ligne du dos, puis perpendiculairement. 3) Notez la direction dans laquelle le cuir s'allonge le plus. 4) Reportez une flèche à la craie sur le côté chair pour matérialiser le sens du moindre prêtant. 5) Lors du placement, alignez la flèche de prêtant dessinée sur chaque gabarit avec ce repère. Pour une mesure chiffrée, on utilise un essai de traction normalisé avec mesure de l'allongement.</div>"
      },
      {
       "titre": "L'épaisseur",
       "contenu": "<p>L'<strong>épaisseur</strong> d'un cuir s'exprime en millimètres. Elle est mesurée avec un <strong>épaisseurmètre</strong> (comparateur à touche plate sous une pression définie). On l'indique souvent sous forme de plage, car une peau n'est jamais parfaitement régulière : « 1,0/1,2 mm » signifie que l'épaisseur est comprise entre 1,0 et 1,2 mm.</p>\n<table>\n<thead><tr><th>Usage</th><th>Ordre de grandeur d'épaisseur</th></tr></thead>\n<tbody>\n<tr><td>Doublure, ganterie</td><td>0,5 à 0,8 mm</td></tr>\n<tr><td>Tige de chaussure de ville</td><td>1,0 à 1,6 mm</td></tr>\n<tr><td>Maroquinerie souple</td><td>0,8 à 1,4 mm</td></tr>\n<tr><td>Maroquinerie structurée, ceintures</td><td>2 à 4 mm</td></tr>\n<tr><td>Sellerie automobile et ameublement</td><td>0,9 à 1,4 mm</td></tr>\n<tr><td>Cuir à semelle</td><td>4 à 6 mm environ</td></tr>\n</tbody>\n</table>\n<p>Ces valeurs sont indicatives : c'est la fiche technique du modèle qui fixe l'épaisseur. Quand une pièce doit être amincie localement (bords à remplier, zones de superposition), on la <strong>pare</strong> ; quand toute la pièce doit être ramenée à une épaisseur plus faible, on la <strong>refend</strong> à la machine à refendre.</p>"
      },
      {
       "titre": "Les défauts du cuir",
       "contenu": "<p>Les <strong>défauts</strong> sont classés selon leur origine :</p>\n<ul>\n<li><strong>défauts naturels</strong>, liés à la vie de l'animal : cicatrices, griffures (barbelés, cornes), piqûres de parasites (trous ou cicatrices laissés par les larves de varron, tiques), traces de gale, marques au fer, veines apparentes, rides et plis du collet ;</li>\n<li><strong>défauts de conservation et d'abattage</strong> : coutelures (entailles de couteau côté chair lors du dépouillement), taches de sel, échauffures (début de putréfaction) ;</li>\n<li><strong>défauts de fabrication</strong> en tannerie : écart de nuance, taches de teinture, épaisseur irrégulière, finition qui s'écaille, fleur lâche (la fleur se décolle et forme des plis grossiers quand on plie le cuir), grain d'impression mal repris.</li>\n</ul>\n<p>Certains défauts sont <strong>rédhibitoires</strong> (trou, coutelure profonde, fleur lâche sur une pièce visible) ; d'autres sont <strong>tolérés</strong> sur les pièces cachées ou acceptés comme marque d'authenticité dans les cuirs naturels (petites cicatrices sur un cuir aniline). Le niveau d'exigence est fixé par le cahier des charges et les <strong>grades de qualité</strong> du produit.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un défaut côté chair peut ne pas se voir côté fleur mais affaiblir la pièce. Une coutelure sous une poignée ou sous une couture peut provoquer une déchirure à l'usage. Inspectez toujours les deux faces de la peau avant la coupe.</div>"
      },
      {
       "titre": "Inspecter et classer une peau",
       "contenu": "<p>À réception ou avant la coupe, le coupeur ou le contrôleur <strong>visite</strong> la peau sur une table bien éclairée, idéalement sous une lumière normalisée pour juger la couleur. Il repère les défauts et les entoure à la craie ou au crayon argenté côté fleur, ou les signale par une étiquette adhésive. En découpe numérique, les défauts sont repérés par des zones de qualité saisies sur l'image numérisée de la peau.</p>\n<p>Les tanneries classent les peaux par <strong>choix</strong> (premier choix, deuxième choix…) selon la surface utilisable sans défaut ; les appellations exactes varient d'un fournisseur à l'autre. Le fabricant, lui, définit des <strong>zones qualitatives</strong> sur la peau (souvent notées de A à C ou de 1 à 3) et attribue à chaque pièce du modèle une exigence de zone.</p>\n<table>\n<thead><tr><th>Zone qualitative de la peau</th><th>Exemple d'affectation pour un sac</th></tr></thead>\n<tbody>\n<tr><td>A : aucun défaut, structure régulière</td><td>Devant, rabat, poignées</td></tr>\n<tr><td>B : petits défauts naturels non gênants</td><td>Dos, soufflets</td></tr>\n<tr><td>C : défauts visibles mais matière saine</td><td>Renforts cachés, pattes intérieures, pièces doublées</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> à la réception d'un lot de peaux, on vérifie la conformité à la commande : article, coloris (comparaison avec la référence couleur sous lumière normalisée), épaisseur (plusieurs mesures par peau), surface annoncée, choix, et absence de défauts rédhibitoires. Les écarts sont consignés sur une fiche de non-conformité et signalés au fournisseur avant toute coupe : une peau coupée ne peut plus être retournée.</div>"
      },
      {
       "titre": "La nuance et le bain",
       "contenu": "<p>Les peaux d'un même article et d'une même couleur ne sont jamais rigoureusement identiques. Une <strong>nuance</strong> est un léger écart de couleur. Les peaux teintes ensemble dans un même foulon forment un <strong>bain</strong> (ou lot de teinture) et ont des nuances très proches. Pour éviter qu'un produit présente des pièces de teintes différentes, on coupe toutes les pièces visibles d'un même article dans la même peau, ou au minimum dans le même bain.</p>\n<p>On note sur la fiche de suivi le numéro de bain des peaux utilisées. En cas de réassort ou de réparation, cette information permet de retrouver une matière de nuance proche.</p>\n<p>Pour comparer deux nuances, on se place sous une <strong>lumière normalisée</strong> (cabine à lumière du jour artificielle), car une couleur peut paraître identique sous un éclairage d'atelier et différente à la lumière naturelle : c'est le <strong>métamérisme</strong>. Les entreprises conservent des <strong>étalons</strong> de couleur (morceaux de référence validés) pour chaque coloris de la saison.</p>"
      },
      {
       "titre": "Calculer la surface utile d'une peau",
       "contenu": "<p>La surface annoncée par le tanneur est la surface totale mesurée. La surface réellement utilisable est plus faible : bords irréguliers, défauts, zones de qualité insuffisante pour certaines pièces. Le prototypiste doit savoir estimer cette <strong>surface utile</strong> pour prévoir les quantités.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer le nombre de pièces visibles que fournit une demi-peau. Données : demi-peau de vachette de 2,30 m² ; la visite montre environ 15 % de surface inutilisable (bords, trous, cicatrices) ; la zone A représente environ 40 % de la surface utile ; une pièce « devant de sac » de 300 × 250 mm, à couper en zone A ; on compte 20 % de pertes entre les pièces lors du placement. 1) Surface utile : 2,30 × (1 − 0,15) = 1,955 m². 2) Surface en zone A : 1,955 × 0,40 = 0,782 m². 3) Surface d'un devant : 0,300 × 0,250 = 0,075 m². 4) Surface nécessaire par devant en tenant compte des pertes : 0,075 × 1,20 = 0,090 m². 5) Nombre de devants : 0,782 / 0,090 = 8,7, soit 8 devants par demi-peau (on arrondit toujours à l'entier inférieur pour des pièces). Les autres zones serviront aux dos, soufflets et pièces cachées.</div>\n<p>Ce calcul reste une estimation : seul le placement réel sur la peau, à la main ou par logiciel, donne le nombre exact de pièces. Il permet toutefois de vérifier rapidement si une commande de peaux est suffisante ou de comparer deux articles proposés par des tanneurs.</p>"
      }
     ],
     "points_cles": [
      "Le croupon est la zone de meilleure qualité, le collet présente des rides, les flancs ont beaucoup de prêtant.",
      "La ligne du dos sert de repère pour orienter les pièces et diviser la peau en deux demi-peaux.",
      "Le prêtant est en général plus faible parallèlement à la ligne du dos.",
      "Chaque gabarit porte une flèche de prêtant à aligner sur le repère de la peau.",
      "L'épaisseur se mesure à l'épaisseurmètre et s'exprime souvent en plage, par exemple 1,0/1,2 mm.",
      "Les défauts sont naturels, de conservation ou de fabrication ; certains sont rédhibitoires.",
      "Les pièces visibles se coupent en zone A, les pièces cachées en zones B ou C.",
      "Les pièces d'un même produit se coupent dans la même peau ou le même bain pour éviter les écarts de nuance."
     ],
     "lexique": [
      {
       "terme": "Croupon",
       "def": "Partie centrale de la peau, de part et d'autre de la ligne du dos, de meilleure qualité."
      },
      {
       "terme": "Collet",
       "def": "Partie de la peau correspondant au cou et aux épaules."
      },
      {
       "terme": "Flanc",
       "def": "Partie latérale et ventrale de la peau, mince et à fort prêtant."
      },
      {
       "terme": "Prêtant",
       "def": "Aptitude du cuir à s'allonger sous un effort."
      },
      {
       "terme": "Coutelure",
       "def": "Entaille faite au couteau côté chair lors du dépouillement."
      },
      {
       "terme": "Fleur lâche",
       "def": "Défaut dans lequel la fleur se détache des couches inférieures et forme des plis grossiers."
      },
      {
       "terme": "Bain",
       "def": "Lot de peaux teintes ensemble, de nuance homogène."
      },
      {
       "terme": "Parer",
       "def": "Amincir localement une pièce de cuir, généralement sur ses bords."
      },
      {
       "terme": "Zone qualitative",
       "def": "Partie de la peau classée selon son niveau de qualité pour l'affectation des pièces."
      }
     ]
    },
    {
     "id": "bcuir-materiaux-fournitures",
     "titre": "Textiles, matériaux synthétiques, renforts et fournitures",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Distinguer les fibres, les fils et les étoffes utilisés avec le cuir",
      "Exprimer le titrage d'un fil en tex ou en numéro métrique",
      "Identifier les matériaux enduits, synthétiques et les renforts",
      "Caractériser une mousse par sa masse volumique et sa portance",
      "Choisir une fourniture adaptée à partir d'un catalogue"
     ],
     "sections": [
      {
       "titre": "Des fibres aux étoffes",
       "contenu": "<p>Le cuir n'est presque jamais seul : doublures, renforts, fils, mousses et accessoires complètent le produit. Les matériaux textiles sont élaborés en plusieurs étapes : la <strong>fibre</strong> est transformée en <strong>fil</strong> par filature, puis le fil devient une <strong>étoffe</strong> par tissage, tricotage ou par un procédé non tissé.</p>\n<table>\n<thead><tr><th>Origine des fibres</th><th>Exemples</th><th>Propriétés utiles</th></tr></thead>\n<tbody>\n<tr><td>Naturelles végétales</td><td>Coton, lin, jute</td><td>Confort, absorption de l'humidité ; le lin donne des fils très résistants</td></tr>\n<tr><td>Naturelles animales</td><td>Laine, soie</td><td>Isolation, aspect ; usage limité dans le cuir</td></tr>\n<tr><td>Artificielles (cellulose transformée)</td><td>Viscose</td><td>Doublures douces et brillantes</td></tr>\n<tr><td>Synthétiques (pétrochimie)</td><td>Polyester, polyamide, polypropylène, élasthanne, aramide</td><td>Résistance mécanique, imputrescibilité, faible coût ; l'aramide résiste à la chaleur</td></tr>\n</tbody>\n</table>\n<p>Les étoffes se classent en trois familles :</p>\n<ul>\n<li>les <strong>tissus</strong>, formés de deux séries de fils perpendiculaires, la <strong>chaîne</strong> (sens de la longueur) et la <strong>trame</strong> (sens de la largeur) ; leur armure (toile, sergé, satin) détermine l'aspect et la tenue ; ils sont stables dans le sens chaîne et trame, déformables dans le biais ;</li>\n<li>les <strong>tricots</strong> (ou mailles), formés de boucles entrelacées, très extensibles et confortables ;</li>\n<li>les <strong>non-tissés</strong>, nappes de fibres liées mécaniquement, thermiquement ou chimiquement, sans fils ; ils servent de renforts, d'entoilages ou de supports d'enduction.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour un tissu, le droit-fil (sens chaîne) est le sens le plus stable. Comme pour le cuir, les gabarits de pièces en tissu portent une flèche qui indique l'orientation à respecter.</div>"
      },
      {
       "titre": "Les fils à coudre et leur titrage",
       "contenu": "<p>Les fils à coudre utilisés pour le cuir sont le plus souvent en <strong>polyester</strong> ou en <strong>polyamide</strong> (souvent appelé nylon), à filaments continus, parfois enduits ou « collés » pour faciliter le passage dans le cuir et limiter l'effilochage. Les fils de <strong>lin</strong> poissés ou cirés restent utilisés pour la couture main (point sellier) et certains semelages.</p>\n<p>La grosseur d'un fil s'exprime par son <strong>titrage</strong>. Deux systèmes sont courants :</p>\n<ul>\n<li>le <strong>tex</strong> : masse en grammes de 1 000 m de fil ; plus le nombre est grand, plus le fil est gros (un fil de 60 tex pèse 60 g pour 1 000 m) ;</li>\n<li>le <strong>numéro métrique</strong> (Nm) : longueur en mètres d'un gramme de fil ; plus le nombre est grand, plus le fil est fin.</li>\n</ul>\n<p>Les relations sont : Nm = 1 000 / tex, et tex = 1 000 / Nm. Les fabricants de fils utilisent aussi des numéros commerciaux (« numéro 20 », « numéro 40 ») qui ne correspondent pas forcément au Nm : il faut lire leur tableau de correspondance.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> convertir un titrage et choisir une aiguille. Un fil retors est annoncé à Nm 15. 1) Titre en tex : 1 000 / 15 ≈ 66,7 tex. 2) Un fil de 60 tex donnerait Nm = 1 000 / 60 ≈ 16,7 : les deux fils sont voisins. 3) Pour le choix de l'aiguille, reportez-vous au tableau du fabricant de fils, qui associe à chaque titrage une plage de grosseurs d'aiguilles (exprimées en Nm d'aiguille, c'est-à-dire le diamètre de la lame en centièmes de millimètre, par exemple 110 pour 1,10 mm). 4) Vérifiez sur un essai : le fil doit passer librement dans le chas et la gorge de l'aiguille, sans frotter, et le point doit se former sans boucle.</div>"
      },
      {
       "titre": "Matériaux enduits et synthétiques",
       "contenu": "<p>Les <strong>matériaux enduits</strong> sont des supports textiles (tissu, tricot ou non-tissé) recouverts d'une couche de polymère : polyuréthane (PU) ou polychlorure de vinyle (PVC). Ils imitent parfois l'aspect du cuir, mais ne peuvent pas porter ce nom. Ils sont réguliers, disponibles en rouleaux de largeur constante, faciles à couper en matelas de plusieurs épaisseurs, mais leur respirabilité et leur vieillissement sont différents de ceux du cuir.</p>\n<p>Les <strong>microfibres</strong> techniques (non-tissés de fibres très fines imprégnés de polyuréthane) sont utilisées pour les doublures, les renforts et certains revêtements de sellerie. Les <strong>matériaux d'origine végétale</strong> présentés comme alternatives au cuir (à base de fibres ou de résidus végétaux) contiennent en général une part importante de polymères synthétiques : la fiche technique doit être lue attentivement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un matériau enduit ne se travaille pas comme un cuir. Il supporte mal le parage (le support textile apparaît), il peut fondre au repassage ou au contact d'une lame chaude, et certains solvants de colle l'attaquent. Faites toujours un essai de collage et de repassage avant de valider un procédé.</div>"
      },
      {
       "titre": "Les renforts",
       "contenu": "<p>Les <strong>renforts</strong> donnent de la tenue, limitent les déformations et répartissent les efforts. Ils sont placés entre le cuir et la doublure. On les choisit selon la rigidité recherchée, l'épaisseur admissible et le procédé de fixation.</p>\n<table>\n<thead><tr><th>Renfort</th><th>Nature</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Thermocollant</td><td>Tissu ou non-tissé enduit d'une colle activée par la chaleur</td><td>Raidir une pièce de maroquinerie, stabiliser une tige</td></tr>\n<tr><td>Carton cellulosique, fibre de cuir</td><td>Plaque fibreuse</td><td>Fonds de sac, cloisons, premières de chaussures</td></tr>\n<tr><td>Mousse fine, ouate</td><td>Polyuréthane, polyester</td><td>Donner du gonflant, du confort (bandoulière, col de chaussure, plate-bande de siège)</td></tr>\n<tr><td>Plaques thermoplastiques</td><td>Polymère activé par chaleur ou solvant</td><td>Contreforts et bouts durs de chaussures</td></tr>\n<tr><td>Ruban de renfort (extrafort, ruban de bord)</td><td>Tissu ou non-tissé en bande</td><td>Empêcher l'allongement d'un bord, d'une ouverture, d'une poignée</td></tr>\n</tbody>\n</table>\n<p>Le renfort est souvent coupé quelques millimètres en retrait du bord de la pièce cuir, pour ne pas augmenter l'épaisseur dans les zones de couture ou de rempli.</p>"
      },
      {
       "titre": "Mousses et rembourrages",
       "contenu": "<p>Les <strong>mousses</strong> sont surtout utilisées en sellerie garnissage, mais aussi dans les cols de chaussures, les bandoulières et les sacs matelassés. La plupart sont en <strong>polyuréthane</strong>. On les caractérise par :</p>\n<ul>\n<li>la <strong>masse volumique</strong> (densité, dans le langage courant), en kg/m³ : une mousse de 35 kg/m³ pèse 35 kg par mètre cube ; à usage égal, une mousse plus dense est généralement plus durable ;</li>\n<li>la <strong>portance</strong> (ou dureté), mesurée par un essai d'<strong>indentation</strong> : on enfonce un plateau dans la mousse et on mesure la force nécessaire pour un écrasement donné ; elle indique si l'assise est ferme ou moelleuse ;</li>\n<li>la <strong>résilience</strong> : aptitude à reprendre sa forme après écrasement ; les mousses dites haute résilience (HR) offrent un bon retour et une bonne durabilité ;</li>\n<li>le <strong>comportement au feu</strong>, essentiel pour les sièges de transport et de lieux recevant du public.</li>\n</ul>\n<p>Masse volumique et portance sont deux grandeurs différentes : une mousse peut être dense et souple, ou légère et ferme. Les rembourrages traditionnels (crin animal ou végétal, ouate de coton, laine) restent utilisés en restauration d'ameublement.</p>"
      },
      {
       "titre": "Fournitures et quincaillerie",
       "contenu": "<p>Les <strong>fournitures</strong> sont achetées auprès de fabricants spécialisés et référencées dans des catalogues ou des bases de données :</p>\n<ul>\n<li>fermetures à glissière, définies par leur type (spirale, à dents métalliques, injectées), leur numéro (largeur de la chaîne fermée, par exemple n°5), la longueur, le type de curseur et de tirette ;</li>\n<li>quincaillerie : boucles, anneaux, mousquetons, rivets, œillets, pieds de sac, fermoirs, aimants, cadenas ; caractérisés par la matière (laiton, zamak, acier), la finition (dorée, palladium, vieilli) et la <strong>dimension de passage</strong> (largeur intérieure pour une sangle ou une lanière, par exemple 25 mm) ;</li>\n<li>colles et produits de finition (teintures de tranche, cires, apprêts) ;</li>\n<li>pour la chaussure : semelles, talons, lacets, œillets, contreforts ; pour la sellerie : agrafes, crochets, sangles élastiques, clips de fixation.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la quincaillerie des grandes marques est souvent dessinée spécialement et soumise à des essais (résistance à la corrosion en brouillard salin, tenue de la finition à la sueur, charge de rupture d'un mousqueton). Avant de valider un modèle, le prototypiste vérifie que la largeur de passage d'une boucle correspond bien à la largeur de la lanière finie, épaisseur de piqûre comprise : une lanière de 25 mm dans une boucle de 25 mm de passage coince souvent.</div>"
      },
      {
       "titre": "Établir la liste des matières et fournitures d'un modèle",
       "contenu": "<p>Pour chaque modèle, le prototypiste dresse la liste complète de ce qui entre dans sa fabrication, avec des références précises. Une désignation incomplète provoque des erreurs d'achat : « fermeture à glissière noire » ne suffit pas, il faut le type, le numéro, la longueur, la finition du curseur, la couleur de la bande et la référence du fournisseur.</p>\n<table>\n<thead><tr><th>Désignation</th><th>Caractéristiques à préciser</th></tr></thead>\n<tbody>\n<tr><td>Doublure textile</td><td>Composition, armure, masse surfacique (g/m²), laize (largeur du rouleau), couleur</td></tr>\n<tr><td>Fil de piqûre</td><td>Matière, titrage, couleur, fournisseur</td></tr>\n<tr><td>Renfort</td><td>Nature, épaisseur, thermocollant ou non</td></tr>\n<tr><td>Fermeture</td><td>Type, numéro, longueur, curseur, tirette, couleur</td></tr>\n<tr><td>Quincaillerie</td><td>Forme, matière, finition, passage, référence</td></tr>\n</tbody>\n</table>\n<p>La <strong>masse surfacique</strong> d'une étoffe, en g/m², renseigne sur son épaisseur et sa tenue : une doublure légère pèse environ 80 à 120 g/m², une toile de renfort beaucoup plus. La <strong>laize</strong> est la largeur utile du rouleau ; elle conditionne le placement des pièces de doublure et donc la consommation au mètre linéaire.</p>"
      }
     ],
     "points_cles": [
      "Une étoffe peut être un tissu (chaîne et trame), un tricot (mailles) ou un non-tissé.",
      "Le tex est la masse en grammes de 1 000 m de fil ; Nm = 1 000 / tex.",
      "Le choix de l'aiguille dépend du titrage du fil, selon le tableau du fabricant.",
      "Les matériaux enduits PU ou PVC ne portent pas le nom de cuir et ne se travaillent pas comme lui.",
      "Les renforts donnent de la tenue et sont souvent coupés en retrait des bords.",
      "Une mousse se caractérise par sa masse volumique, sa portance, sa résilience et son comportement au feu.",
      "Masse volumique et portance sont deux grandeurs indépendantes.",
      "La largeur de passage d'une boucle doit tenir compte de l'épaisseur réelle de la lanière finie."
     ],
     "lexique": [
      {
       "terme": "Chaîne",
       "def": "Ensemble des fils d'un tissu disposés dans le sens de la longueur."
      },
      {
       "terme": "Trame",
       "def": "Ensemble des fils d'un tissu disposés dans le sens de la largeur."
      },
      {
       "terme": "Non-tissé",
       "def": "Étoffe formée de fibres liées entre elles sans tissage ni tricotage."
      },
      {
       "terme": "Tex",
       "def": "Unité de titrage : masse en grammes de 1 000 m de fil."
      },
      {
       "terme": "Numéro métrique",
       "def": "Longueur en mètres d'un gramme de fil."
      },
      {
       "terme": "Matériau enduit",
       "def": "Support textile recouvert d'une couche de polymère (PU, PVC)."
      },
      {
       "terme": "Thermocollant",
       "def": "Renfort dont la colle est activée par la chaleur et la pression."
      },
      {
       "terme": "Portance",
       "def": "Résistance d'une mousse à l'écrasement, mesurée par indentation."
      },
      {
       "terme": "Résilience",
       "def": "Aptitude d'une mousse à reprendre sa forme après écrasement."
      },
      {
       "terme": "Passage",
       "def": "Largeur intérieure d'une boucle ou d'un anneau dans laquelle passe une lanière."
      }
     ]
    },
    {
     "id": "bcuir-essais-materiaux",
     "titre": "Essais physiques et chimiques des matériaux",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Expliquer le principe des principaux essais mécaniques sur cuirs et assemblages",
      "Décrire les essais de surface, de solidité des couleurs et d'étanchéité",
      "Situer les essais chimiques liés aux substances réglementées",
      "Exploiter un résultat d'essai par rapport à une exigence",
      "Réaliser des essais simples d'atelier de manière reproductible"
     ],
     "sections": [
      {
       "titre": "Pourquoi tester les matériaux",
       "contenu": "<p>Un produit en cuir doit tenir dans le temps : une poignée ne doit pas se rompre, une couleur ne doit pas déteindre sur un vêtement, une tige de chaussure ne doit pas craqueler au pli de marche, un siège de véhicule doit résister à des années de frottement. Les <strong>essais</strong> permettent de vérifier ces propriétés de manière objective, avant la fabrication en série ou à réception des matières.</p>\n<p>On distingue :</p>\n<ul>\n<li>les <strong>essais normalisés</strong> en laboratoire, réalisés selon une norme (le plus souvent ISO ou EN, reprise en France en NF EN ISO) qui fixe l'éprouvette, l'appareil, les conditions et l'expression du résultat ; ils sont réalisés par le laboratoire du tanneur, du fabricant, ou par un centre technique ;</li>\n<li>les <strong>essais d'atelier</strong>, plus simples, réalisés par le prototypiste pour comparer des solutions (deux colles, deux renforts, deux réglages de piqûre) avant de les valider.</li>\n</ul>\n<p>Avant un essai normalisé, les éprouvettes sont <strong>conditionnées</strong> : maintenues un temps défini dans une atmosphère normalisée (température et humidité relative fixées), car le cuir change de propriétés selon son humidité. Leur emplacement de prélèvement dans la peau est également normalisé, puisque les propriétés varient d'une zone à l'autre.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un résultat d'essai n'a de sens qu'accompagné de la norme utilisée, des conditions, et de l'exigence à laquelle on le compare. « 80 N » ne veut rien dire seul ; « déchirure 80 N selon la norme indiquée, exigence minimale 60 N : conforme » est exploitable.</div>"
      },
      {
       "titre": "Essais mécaniques",
       "contenu": "<p>Les essais mécaniques mesurent la résistance du matériau et de ses assemblages :</p>\n<table>\n<thead><tr><th>Essai</th><th>Principe</th><th>Résultat</th></tr></thead>\n<tbody>\n<tr><td>Traction</td><td>Une éprouvette normalisée est étirée à vitesse constante jusqu'à rupture</td><td>Force de rupture (N), résistance (N/mm²), allongement à la rupture (%)</td></tr>\n<tr><td>Déchirure</td><td>On amorce une déchirure dans l'éprouvette et on mesure la force pour la propager</td><td>Force de déchirure (N) ; essentielle pour les pièces cousues</td></tr>\n<tr><td>Flexions répétées</td><td>L'éprouvette est pliée des milliers de fois dans un appareil (flexomètre)</td><td>Nombre de cycles sans dommage de la fleur ou de la finition</td></tr>\n<tr><td>Gerçure de fleur (chaussure)</td><td>On déforme le cuir en dôme jusqu'à l'apparition de fissures de la fleur</td><td>Hauteur de dôme et force à la gerçure ; indique l'aptitude au montage sur forme</td></tr>\n<tr><td>Résistance des coutures</td><td>On tire sur deux pièces cousues jusqu'à rupture</td><td>Force de rupture ; on note si le fil casse ou si le cuir se déchire</td></tr>\n<tr><td>Arrachement d'accessoire</td><td>On tire sur un rivet, un anneau, une attache</td><td>Force maximale supportée</td></tr>\n<tr><td>Pelage d'un collage</td><td>On sépare deux matériaux collés à vitesse constante</td><td>Force par unité de largeur (N/mm ou N/cm)</td></tr>\n</tbody>\n</table>\n<p>L'<strong>allongement</strong> à la rupture se calcule par : allongement (%) = (longueur à la rupture − longueur initiale) / longueur initiale × 100. Il traduit le prêtant mesuré en laboratoire.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un allongement et conclure. Une éprouvette de cuir de dessus présente une longueur utile initiale de 50 mm entre les mors ; à la rupture, elle mesure 72 mm ; le cahier des charges impose un allongement compris entre 30 et 60 %. 1) Allongement : (72 − 50) / 50 × 100 = 44 %. 2) Comparaison : 30 % ≤ 44 % ≤ 60 %. 3) Conclusion : conforme. Si l'essai est répété dans les deux directions (parallèle et perpendiculaire à la ligne du dos), comparez les deux valeurs : leur écart renseigne sur l'orientation du prêtant.</div>"
      },
      {
       "titre": "Essais de surface et de solidité des couleurs",
       "contenu": "<p>La surface du cuir et sa couleur subissent frottements, lumière, sueur et eau. Les principaux essais sont :</p>\n<ul>\n<li>la <strong>solidité des couleurs au frottement</strong> : un feutre blanc sec, humide ou imprégné de sueur artificielle frotte la surface un nombre défini de fois ; on évalue la décharge de couleur sur le feutre et la dégradation du cuir avec des <strong>échelles de gris</strong> (cotation de 1, très mauvais, à 5, aucun changement) ;</li>\n<li>la <strong>solidité à la lumière</strong> : exposition à une lampe reproduisant la lumière du jour, comparée à des étalons de laine bleue (cotation de 1 à 8) ;</li>\n<li>la <strong>résistance à l'abrasion</strong> : frottement circulaire contre un abrasif normalisé (appareil de type Martindale pour les textiles et certaines finitions) jusqu'à usure visible ;</li>\n<li>l'<strong>adhérence de la finition</strong> : on mesure la force pour arracher la couche de finition collée sur un support ;</li>\n<li>la <strong>migration de couleur</strong> sur un matériau en contact (par exemple d'un cuir sur un plastique clair de véhicule).</li>\n</ul>\n<p>Ces essais sont décisifs pour les cuirs clairs, les sacs portés contre les vêtements et la sellerie automobile, où les exigences des constructeurs sont très élevées.</p>"
      },
      {
       "titre": "Eau, chaleur, feu et agressions chimiques",
       "contenu": "<p>Selon l'usage, d'autres comportements sont testés :</p>\n<ul>\n<li><strong>étanchéité</strong> : capacité à empêcher le passage de l'eau ; pour la chaussure, on mesure le temps avant pénétration de l'eau dans un cuir fléchi en continu ;</li>\n<li><strong>déperlance</strong> : capacité de la surface à faire perler l'eau sans l'absorber ; elle ne garantit pas l'étanchéité ;</li>\n<li><strong>tenue à la chaleur</strong> : comportement de la finition au contact d'un fer chaud (repassage, réactivation de colle) ou en enceinte climatique (sellerie automobile soumise à de fortes températures derrière un pare-brise) ;</li>\n<li><strong>tenue au feu</strong> : vitesse de propagation de la flamme ou capacité à s'éteindre, selon des essais propres à chaque secteur (transport, aéronautique, ameublement) ;</li>\n<li><strong>résistance aux agressions chimiques</strong> : solvants, produits d'entretien, cosmétiques, graisses, sueur.</li>\n</ul>\n<p>Les <strong>essais chimiques</strong> recherchent des substances réglementées ou interdites par le client : chrome hexavalent, certains colorants azoïques pouvant libérer des amines cancérogènes, formaldéhyde, métaux lourds, certains solvants et plastifiants. Ils sont réalisés en laboratoire spécialisé. Les grandes marques imposent à leurs fournisseurs une <strong>liste de substances restreintes</strong> (souvent appelée RSL) plus sévère que la réglementation.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> déperlant ne veut pas dire étanche. Un cuir traité déperlant fait perler une goutte d'eau, mais une chaussure portée sous la pluie peut laisser passer l'eau par les coutures, les pliures ou le semelage. Le cahier des charges doit préciser lequel des deux comportements est exigé.</div>"
      },
      {
       "titre": "Les essais d'atelier",
       "contenu": "<p>Le prototypiste réalise des essais simples, mais rigoureux, pour choisir un procédé. La rigueur consiste à ne faire varier qu'un paramètre à la fois et à garder une trace écrite.</p>\n<p>Exemples d'essais d'atelier :</p>\n<ul>\n<li>essai de collage : deux bandes collées avec deux colles différentes, séparées à la main après 24 h ; on observe si la rupture se produit dans la colle, à l'interface, ou dans la matière (cas idéal : la matière cède avant le collage) ;</li>\n<li>essai de piqûre : même assemblage avec trois longueurs de point, deux grosseurs de fil ; on observe la régularité, la tenue, l'aspect ;</li>\n<li>essai de parage : épaisseur restante au bord, régularité, aspect du rempli ;</li>\n<li>essai de bord teint : nombre de couches de teinture de tranche, ponçage, lissage ;</li>\n<li>essai de thermocollage : température, pression et temps de presse, puis tenue au pelage manuel.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chaque essai est identifié (numéro, date, matières et lots utilisés, réglages machine, opérateur), étiqueté et conservé avec sa fiche. À l'épreuve d'industrialisation comme en entreprise, on présente les essais sous la forme : essai A et essai B, constat, justification, choix validé. Un essai non tracé ne sert à rien six mois plus tard, lors du réassort.</div>"
      },
      {
       "titre": "Le procès-verbal d'essai",
       "contenu": "<p>Les résultats de laboratoire sont consignés dans un <strong>procès-verbal d'essai</strong> (ou rapport d'essai). Il comprend : l'identification du laboratoire et du demandeur, la description de l'échantillon (référence, lot, couleur), les normes appliquées, les conditions (conditionnement, nombre d'éprouvettes, direction de prélèvement), les résultats bruts et moyens, et souvent une colonne d'exigence avec un verdict conforme ou non conforme.</p>\n<table>\n<thead><tr><th>Essai</th><th>Résultat</th><th>Exigence client</th><th>Verdict</th></tr></thead>\n<tbody>\n<tr><td>Déchirure (moyenne)</td><td>72 N</td><td>Minimum 60 N</td><td>Conforme</td></tr>\n<tr><td>Frottement humide, 50 cycles, décharge</td><td>Indice 3</td><td>Minimum 3-4</td><td>Non conforme</td></tr>\n<tr><td>Flexions répétées, 50 000 cycles à sec</td><td>Aucun dommage</td><td>Aucun dommage</td><td>Conforme</td></tr>\n<tr><td>Chrome hexavalent</td><td>Non détecté (limite de détection 3 mg/kg)</td><td>Inférieur à 3 mg/kg</td><td>Conforme</td></tr>\n</tbody>\n</table>\n<p>Une seule non-conformité suffit pour refuser une matière ou demander une action au fournisseur, selon l'importance de la propriété pour l'usage. Dans l'exemple, la décharge au frottement humide est insuffisante : un sac clair porté sous la pluie risquerait de tacher un vêtement. On demande au tanneur une correction de la finition et un nouvel essai.</p>\n<p>Lorsqu'un essai porte sur plusieurs éprouvettes, on calcule la <strong>moyenne</strong> et on regarde aussi la <strong>valeur minimale</strong> : une moyenne conforme peut cacher une éprouvette très faible, signe d'une matière irrégulière. Certains cahiers des charges imposent d'ailleurs une valeur minimale individuelle en plus de la moyenne. Par exemple, trois éprouvettes de déchirure à 78 N, 81 N et 52 N donnent une moyenne de 70,3 N, conforme à un minimum moyen de 60 N, mais la troisième est inférieure à un minimum individuel de 55 N si le cahier des charges en fixe un : on fait alors des essais complémentaires sur d'autres peaux du lot.</p>"
      }
     ],
     "points_cles": [
      "Un essai normalisé fixe l'éprouvette, l'appareil, les conditions et l'expression du résultat.",
      "Les éprouvettes sont conditionnées et prélevées à des emplacements définis de la peau.",
      "Traction, déchirure, flexions répétées et gerçure caractérisent la résistance mécanique du cuir.",
      "Allongement (%) = (longueur à la rupture − longueur initiale) / longueur initiale × 100.",
      "La solidité des couleurs s'évalue avec des échelles de gris de 1 à 5.",
      "Déperlant ne signifie pas étanche.",
      "Les essais chimiques recherchent des substances réglementées ou interdites par le client.",
      "Un essai d'atelier ne fait varier qu'un paramètre à la fois et est toujours tracé.",
      "Un résultat n'a de sens que comparé à une exigence, avec un verdict."
     ],
     "lexique": [
      {
       "terme": "Éprouvette",
       "def": "Échantillon de forme et de dimensions définies, préparé pour un essai."
      },
      {
       "terme": "Conditionnement",
       "def": "Maintien des éprouvettes dans une atmosphère normalisée avant l'essai."
      },
      {
       "terme": "Allongement à la rupture",
       "def": "Augmentation de longueur de l'éprouvette au moment de la rupture, en pourcentage."
      },
      {
       "terme": "Flexomètre",
       "def": "Appareil qui plie une éprouvette de manière répétée pour tester sa tenue."
      },
      {
       "terme": "Échelle de gris",
       "def": "Référence visuelle normalisée pour coter un changement de couleur ou une décharge, de 1 à 5."
      },
      {
       "terme": "Déperlance",
       "def": "Propriété d'une surface qui fait perler l'eau sans l'absorber."
      },
      {
       "terme": "Pelage",
       "def": "Essai qui mesure la force pour séparer deux matériaux collés."
      },
      {
       "terme": "Procès-verbal d'essai",
       "def": "Document officiel qui rapporte les conditions et résultats d'un essai."
      },
      {
       "terme": "Liste de substances restreintes",
       "def": "Liste imposée par un client des substances interdites ou limitées dans ses produits."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Concevoir et définir le modèle",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bcuir-formes-gabarits",
     "titre": "Du dessin au gabarit : obtenir les formes et les patrons",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Situer le patron de base, le patron du modèle et les gabarits dans la chaîne de conception",
      "Expliquer les méthodes d'obtention des formes propres à chaque option",
      "Distinguer gabarit net, gabarit brut et gabarits de travail",
      "Reporter sur un gabarit les informations techniques indispensables",
      "Calculer les valeurs à ajouter pour un rempli, une couture ou une superposition"
     ],
     "sections": [
      {
       "titre": "La chaîne patron, modèle, gabarits",
       "contenu": "<p>Entre le dessin du styliste et les pièces coupées, plusieurs documents graphiques se succèdent :</p>\n<ol>\n<li>le <strong>patron de base</strong> (ou base, ou patron plan) : la forme générale du produit, sans les découpes de style ; en chaussure, c'est la forme développée à plat de la surface de la forme ; en maroquinerie, la forme du volume ; en sellerie, le relevé de l'assise ou du panneau à couvrir ;</li>\n<li>le <strong>patron du modèle</strong> : on y trace les lignes de style (découpes, coutures décoratives, emplacements d'accessoires) ;</li>\n<li>les <strong>gabarits</strong> : chaque pièce est extraite du patron du modèle, avec ses valeurs ajoutées et ses repères, pour servir à la coupe et au montage.</li>\n</ol>\n<p>Le gabarit est un <strong>outil</strong> : il est réalisé en carton fort, en plastique ou en métal pour la coupe manuelle, ou sous forme de fichier numérique pour la découpe automatique. Il doit être précis au demi-millimètre près, car l'erreur se répète sur toutes les pièces coupées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on ne modifie jamais un gabarit validé directement. On crée une nouvelle version, datée et indicée, et on archive l'ancienne. Un gabarit modifié sans trace est la cause de nombreuses non-conformités en série.</div>"
      },
      {
       "titre": "Obtenir les formes selon l'option",
       "contenu": "<p>La méthode d'obtention de la forme de base dépend du produit :</p>\n<table>\n<thead><tr><th>Option</th><th>Support</th><th>Méthode</th></tr></thead>\n<tbody>\n<tr><td>Chaussures</td><td>La <strong>forme</strong> (moule du pied en plastique ou en bois)</td><td>On recouvre la forme d'un adhésif de masquage, on y trace les lignes du modèle, puis on décolle l'adhésif et on l'aplatit sur un carton : c'est la <strong>copie de forme</strong>, qui donne le patron plan. La CAO permet aussi de numériser la forme et de développer sa surface.</td></tr>\n<tr><td>Maroquinerie</td><td>Les dimensions du produit et éventuellement un <strong>moule</strong> ou une maquette en volume</td><td>On trace à plat les faces du volume (devant, dos, soufflets, fond) à partir des mesures, en vérifiant que les longueurs à assembler correspondent ; la maquette en papier ou en carton valide le volume.</td></tr>\n<tr><td>Sellerie garnissage</td><td>L'objet à couvrir : siège, banquette, panneau</td><td>On réalise un <strong>relevé de forme</strong> directement sur l'objet (film plastique, papier ou toile tendus sur lesquels on trace les lignes de couture), puis on reporte et on régularise à plat. La CAO peut partir d'un fichier fourni par le client.</td></tr>\n</tbody>\n</table>\n<p>Dans les trois cas, le passage du volume à la surface plane impose des compromis : une surface courbe ne s'aplatit pas sans plis ni étirement. Le prototypiste ajuste le patron en tenant compte du prêtant du cuir, qui permet d'épouser le volume au montage.</p>"
      },
      {
       "titre": "Gabarit net, gabarit brut et gabarits de travail",
       "contenu": "<p>Plusieurs types de gabarits sont tirés du patron du modèle :</p>\n<ul>\n<li>le <strong>gabarit net</strong> (ou fini) : la forme de la pièce telle qu'elle apparaît sur le produit fini, sans valeur ajoutée ; il sert aux tracés de repères, aux contrôles et parfois au positionnement ;</li>\n<li>le <strong>gabarit brut</strong> (ou de coupe) : le gabarit net auquel on ajoute les <strong>valeurs</strong> nécessaires au montage : rempli, couture, superposition (dessous de pièce cachée par une autre), montage sur forme ; c'est lui qui sert à couper ;</li>\n<li>les <strong>gabarits de travail</strong> : gabarits de traçage (position d'une couture décorative, d'un accessoire), gabarits de pliage, de rempli, de perçage, de marquage, de contrôle ; ils facilitent et fiabilisent les opérations de préparation et de montage.</li>\n</ul>\n<p>Pour la doublure et les renforts, on établit des gabarits spécifiques : une doublure est souvent légèrement plus petite que la pièce extérieure pour ne pas faire de plis à l'intérieur ; un renfort est coupé en retrait des bords.</p>"
      },
      {
       "titre": "Les informations portées par un gabarit",
       "contenu": "<p>Un gabarit doit être compréhensible par toute personne qui le prend en main, sans explication orale. On y inscrit :</p>\n<ul>\n<li>la référence du modèle, la désignation de la pièce, sa taille ou sa pointure, la version et la date ;</li>\n<li>la matière à couper (cuir, doublure, renfort) et le <strong>nombre de pièces</strong> par produit, avec l'indication « paire » ou « symétrique » si une pièce doit être coupée en version gauche et droite ;</li>\n<li>la <strong>flèche de prêtant</strong> ou de droit-fil, et l'exigence de zone qualitative ;</li>\n<li>les <strong>crans</strong> (petites encoches sur le bord) qui servent de repères d'assemblage : deux crans qui se correspondent doivent se retrouver face à face au montage ;</li>\n<li>les <strong>repères</strong> intérieurs : perçages pour l'emplacement d'un accessoire, d'une couture décorative, d'un pli ;</li>\n<li>la nature et la largeur des valeurs ajoutées (rempli de 5 mm, superposition de 8 mm…).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un oubli de la mention « symétrique » conduit à couper deux pièces identiques au lieu d'une gauche et d'une droite. Pour une pièce symétrique à couper dans un cuir avec une fleur, retourner le gabarit inverse aussi l'orientation du prêtant : vérifiez que les deux pièces coupées respectent la flèche.</div>"
      },
      {
       "titre": "Calculer les valeurs ajoutées",
       "contenu": "<p>Les valeurs ajoutées dépendent de la solution constructive. Les plus courantes :</p>\n<table>\n<thead><tr><th>Assemblage ou bord</th><th>Valeur ajoutée au gabarit net</th></tr></thead>\n<tbody>\n<tr><td>Bord franc (coupé net, teint ou non)</td><td>Aucune</td></tr>\n<tr><td>Bord rembordé (replié sur l'envers)</td><td>Largeur du rempli, souvent 4 à 6 mm, sur le bord concerné</td></tr>\n<tr><td>Superposition (une pièce posée sur une autre)</td><td>Largeur de recouvrement sur la pièce du dessous, souvent 6 à 10 mm</td></tr>\n<tr><td>Couture retournée (endroit contre endroit puis retourné)</td><td>Valeur de couture, souvent 4 à 8 mm, sur les deux pièces</td></tr>\n<tr><td>Montage de tige sur forme (chaussure)</td><td>Valeur de montage sur le bord inférieur de la tige, de l'ordre de 15 à 20 mm</td></tr>\n</tbody>\n</table>\n<p>Ces valeurs sont des ordres de grandeur : chaque entreprise fixe ses propres standards, et l'épaisseur du cuir modifie la valeur nécessaire.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir la cote brute d'une pièce rectangulaire. Une patte de fermeture finie mesure 120 × 30 mm. Ses deux grands côtés et un petit côté sont rembordés avec un rempli de 5 mm ; le quatrième côté est pris en superposition de 8 mm sous le corps du sac. 1) Longueur brute : 120 + 5 (petit côté rembordé) + 8 (superposition) = 133 mm. 2) Largeur brute : 30 + 5 + 5 = 40 mm. 3) Cote brute : 133 × 40 mm. 4) Aux angles rembordés, prévoyez une découpe en biais ou un cran pour éviter la surépaisseur du rempli. 5) Reportez sur le gabarit les lignes de pliage (trait du gabarit net) et la zone de superposition hachurée.</div>"
      },
      {
       "titre": "Vérifier un patron avant le prototype",
       "contenu": "<p>Avant de couper dans la matière réelle, on vérifie le patron :</p>\n<ul>\n<li><strong>concordance des longueurs</strong> : deux bords qui seront cousus ensemble doivent avoir la même longueur (ou une différence volontaire, appelée embu, si l'un doit être légèrement froncé ou résorbé) ; on mesure les courbes au mètre ruban posé sur la tranche ou avec l'outil de mesure de la CAO ;</li>\n<li><strong>concordance des crans</strong> : les crans de deux pièces assemblées tombent face à face ;</li>\n<li><strong>raccords de lignes</strong> : une couture décorative qui passe d'une pièce à l'autre doit se raccorder ;</li>\n<li><strong>symétrie</strong> : on plie le patron sur son axe pour vérifier la symétrie ;</li>\n<li><strong>faisabilité</strong> : angles trop aigus, rayons trop petits pour être rembordés, superpositions de plus de trois épaisseurs, pièces impossibles à placer dans une peau.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la maquette, réalisée en papier, toile ou cuir de récupération, sert à valider le volume et les proportions avec le styliste à moindre coût. On l'annote directement (« rehausser le rabat de 5 mm », « arrondir l'angle ») et on reporte ces modifications sur le patron avant de faire le prototype en matière réelle.</div>"
      },
      {
       "titre": "Réaliser et conserver les gabarits",
       "contenu": "<p>Les gabarits manuels sont tracés sur un carton dur ou une feuille plastique, puis découpés au tranchet ou au cutter avec une règle métallique pour les lignes droites. Les crans sont réalisés à la pince à crans ; les repères intérieurs sont percés à l'emporte-pièce rond de petit diamètre (1 à 2 mm). Pour les gabarits très utilisés, on choisit des matériaux durables : plastique rigide, gabarits bordés de métal. Pour la coupe à la presse, les gabarits servent à fabriquer les <strong>emporte-pièces</strong> (lames d'acier cintrées à la forme exacte de la pièce) : la moindre erreur se retrouve alors dans un outil coûteux.</p>\n<p>Les gabarits d'un modèle sont rangés ensemble, souvent suspendus par un trou commun, avec une <strong>fiche récapitulative</strong> qui liste toutes les pièces, leur matière et leur nombre. Avant chaque utilisation, on contrôle leur état : un bord écorné ou un cran élargi par l'usage modifie les pièces coupées. Les fichiers numériques sont archivés avec un nom normalisé (référence du modèle, taille, version) dans la base de données de l'entreprise.</p>\n<ul>\n<li>Un gabarit abîmé est remplacé à partir du fichier ou du patron validé, jamais recopié sur lui-même.</li>\n<li>Les anciennes versions sont retirées de l'atelier pour éviter toute confusion.</li>\n</ul>"
      }
     ],
     "points_cles": [
      "On passe du patron de base au patron du modèle, puis aux gabarits de chaque pièce.",
      "La forme de base s'obtient par copie de forme en chaussure, par mesures et maquette en maroquinerie, par relevé sur l'objet en sellerie.",
      "Le gabarit net donne la forme finie, le gabarit brut ajoute les valeurs de montage.",
      "Les gabarits de travail fiabilisent les opérations de traçage, pliage, perçage et contrôle.",
      "Un gabarit porte référence, pièce, taille, matière, nombre, prêtant, crans, repères et version.",
      "Les valeurs ajoutées dépendent de l'assemblage : rempli, superposition, couture, montage.",
      "Avant le prototype, on vérifie longueurs, crans, raccords, symétrie et faisabilité.",
      "Un gabarit validé n'est jamais modifié sans nouvelle version datée."
     ],
     "lexique": [
      {
       "terme": "Patron de base",
       "def": "Forme générale du produit à plat, sans les lignes de style."
      },
      {
       "terme": "Copie de forme",
       "def": "Relevé de la surface d'une forme de chaussure, aplati pour obtenir le patron plan."
      },
      {
       "terme": "Relevé de forme",
       "def": "Prise de la forme d'un objet à couvrir, réalisée directement sur celui-ci en sellerie."
      },
      {
       "terme": "Gabarit net",
       "def": "Gabarit représentant la pièce à ses dimensions finies."
      },
      {
       "terme": "Gabarit brut",
       "def": "Gabarit de coupe incluant les valeurs nécessaires au montage."
      },
      {
       "terme": "Cran",
       "def": "Petite encoche sur le bord d'une pièce, servant de repère d'assemblage."
      },
      {
       "terme": "Rempli",
       "def": "Partie d'une pièce repliée sur l'envers pour former un bord rembordé."
      },
      {
       "terme": "Superposition",
       "def": "Zone d'une pièce recouverte par une autre pièce lors de l'assemblage."
      },
      {
       "terme": "Embu",
       "def": "Différence de longueur volontaire entre deux bords assemblés, résorbée au montage."
      }
     ]
    },
    {
     "id": "bcuir-solutions-constructives",
     "titre": "Solutions constructives : bords, assemblages, renforts et fermetures",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Identifier les différents types de bords et leurs conséquences sur le gabarit",
      "Comparer les procédés d'assemblage : couture, collage, soudage, rivetage, laser",
      "Choisir un arrêt de piqûre adapté",
      "Placer un renfort de façon pertinente",
      "Choisir un système de fermeture selon la fonction et l'esthétique"
     ],
     "sections": [
      {
       "titre": "La relation produit, procédé, matériau",
       "contenu": "<p>Une <strong>solution constructive</strong> est la manière concrète de réaliser une partie du produit : le type de bord, le mode d'assemblage, la position d'un renfort, le système de fermeture. Elle se choisit en tenant compte de trois éléments liés :</p>\n<ul>\n<li>le <strong>produit</strong> : son esthétique, sa fonction, son niveau de gamme ;</li>\n<li>le <strong>matériau</strong> : épaisseur, souplesse, prêtant, finition, aptitude au collage ou au parage ;</li>\n<li>le <strong>procédé</strong> : machines disponibles, compétences des opérateurs, temps, coût.</li>\n</ul>\n<p>Changer l'un de ces éléments oblige souvent à revoir les deux autres : un cuir plus épais peut empêcher un rembordé fin ; une machine absente de l'atelier rend une solution irréalisable ; un bord teint impose un cuir dont la tranche se lisse bien. C'est pourquoi le prototypiste valide chaque solution par un essai dans la matière réelle.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une solution constructive n'est jamais bonne en soi ; elle est adaptée ou non à un produit, une matière et un atelier donnés.</div>"
      },
      {
       "titre": "Les types de bords",
       "contenu": "<p>Le traitement des bords est l'un des signes de qualité les plus visibles :</p>\n<table>\n<thead><tr><th>Bord</th><th>Réalisation</th><th>Avantages et limites</th></tr></thead>\n<tbody>\n<tr><td><strong>Bord franc brut</strong></td><td>Coupé net, laissé tel quel</td><td>Simple ; aspect brut, réservé aux cuirs dont la tranche est propre (souvent tannage végétal)</td></tr>\n<tr><td><strong>Bord franc teint</strong> (bord teint, tranche teinte)</td><td>Tranche poncée, teinte, lissée en plusieurs couches</td><td>Aspect raffiné, épaisseur faible ; demande du temps et de la régularité</td></tr>\n<tr><td><strong>Bord rembordé</strong></td><td>Bord paré, encollé, replié sur l'envers</td><td>Bord arrondi et propre, cache la tranche ; ajoute une valeur au gabarit, difficile dans les angles</td></tr>\n<tr><td><strong>Bord bordé</strong></td><td>Bord recouvert d'une bande (bordure en cuir ou ruban) pliée à cheval</td><td>Couvre plusieurs épaisseurs à la fois ; aspect visible</td></tr>\n<tr><td><strong>Bord retourné</strong></td><td>Pièces cousues endroit contre endroit puis retournées</td><td>Couture invisible ; nécessite un cuir souple</td></tr>\n<tr><td><strong>Bord passepoilé</strong></td><td>Un passepoil (bande pliée, souvent garnie d'un jonc) est inséré dans la couture</td><td>Souligne la ligne, protège l'arête ; fréquent en sellerie et maroquinerie</td></tr>\n</tbody>\n</table>\n<p>Le choix du bord détermine les valeurs ajoutées au gabarit, l'opération de préparation (parage, ponçage, encollage) et le temps de fabrication.</p>"
      },
      {
       "titre": "Les procédés d'assemblage",
       "contenu": "<p>Les pièces peuvent être réunies par plusieurs procédés, souvent combinés :</p>\n<ul>\n<li>la <strong>couture</strong> (ou piqûre) : à la machine (point noué, point de chaînette) ou à la main (point sellier, réalisé avec deux aiguilles et un fil continu, très résistant car il ne se défait pas si un point casse) ; c'est l'assemblage le plus courant ;</li>\n<li>le <strong>collage</strong> : en assemblage provisoire avant couture (maintien des pièces), ou définitif (rempli, contrecollage d'une doublure, semelage collé) ;</li>\n<li>le <strong>soudage</strong> : pour les matériaux thermoplastiques (enduits, synthétiques), par haute fréquence, ultrasons ou air chaud ; il permet des assemblages étanches ;</li>\n<li>le <strong>thermocollage</strong> : colle activée par la chaleur et la pression ;</li>\n<li>le <strong>rivetage</strong> : fixation mécanique ponctuelle (rivets, œillets, boutons pression) ; résistant, mais il doit traverser une épaisseur adaptée à la longueur de tige du rivet ;</li>\n<li>la <strong>découpe et le marquage laser</strong> : découpe sans contact, perforations décoratives, gravure ; la tranche est cautérisée, ce qui peut changer sa couleur.</li>\n</ul>\n<p>Les principaux types d'assemblage par couture sont : à plat (les pièces se superposent, la couture traverse les deux), bord à bord (les pièces sont jointives, réunies par une couture zigzag ou un point spécial), endroit contre endroit puis retourné, et rabattu (une couture retournée est ensuite rabattue et surpiquée).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> chaque piqûre perce le cuir et l'affaiblit. Une ligne de points trop serrés près d'un bord forme une « ligne de prédécoupe » : le cuir se déchire le long de la couture. Respectez une distance au bord suffisante et une longueur de point adaptée à l'épaisseur.</div>"
      },
      {
       "titre": "Les arrêts de piqûre",
       "contenu": "<p>Une couture machine doit être <strong>arrêtée</strong> à ses extrémités, sinon elle se défait. Plusieurs solutions existent :</p>\n<ul>\n<li>le <strong>point arrière</strong> : on revient de quelques points en arrière ; simple, mais il double l'épaisseur de fil et se voit ;</li>\n<li>le <strong>nœud</strong> : on tire les fils sur l'envers et on les noue ; invisible côté endroit, utilisé en haut de gamme ;</li>\n<li>le <strong>brûlage</strong> : les extrémités de fil synthétique sont coupées courtes et fondues avec un brûleur pour former une petite perle qui bloque le fil ; il faut éviter de brûler le cuir ;</li>\n<li>le <strong>collage</strong> des extrémités de fil sur l'envers avec une goutte de colle ;</li>\n<li>la reprise dans une autre couture qui croise la première.</li>\n</ul>\n<p>Le choix est fixé par la fiche technique et dépend de la visibilité de l'extrémité, du fil et du niveau de gamme. Les arrêts sont des points sensibles du contrôle qualité : une couture mal arrêtée sur une poignée peut se défaire en quelques jours.</p>"
      },
      {
       "titre": "Renforts et zones sollicitées",
       "contenu": "<p>On renforce les zones qui subissent des efforts ou doivent garder leur forme :</p>\n<ul>\n<li>points d'attache des poignées et bandoulières, où l'effort se concentre ;</li>\n<li>bords d'ouverture, qui s'allongent à l'usage ;</li>\n<li>fonds de sac, qui doivent rester plats ;</li>\n<li>bout et arrière de la chaussure (bout dur, contrefort) ;</li>\n<li>zones d'accrochage des housses de sellerie.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir et placer un renfort d'attache de poignée. 1) Identifiez l'effort : la charge du sac tire la poignée vers le haut, l'effort se concentre sur la couture et le rivet. 2) Choisissez une pièce de renfort plus grande que la zone d'attache (par exemple une pastille de 40 × 30 mm pour une attache de 20 × 20 mm), afin de répartir l'effort sur une plus grande surface de cuir. 3) Choisissez sa nature : renfort non-tissé dense ou cuir de récupération, assez rigide pour ne pas se déformer, assez mince pour ne pas marquer. 4) Placez-le entre le cuir et la doublure, collé, et prenez-le dans la couture et le rivet. 5) Validez par un essai de traction d'atelier : suspendez une charge supérieure à celle du cahier des charges et vérifiez l'absence de déformation et de déchirure.</div>"
      },
      {
       "titre": "Les systèmes de fermeture",
       "contenu": "<p>La fermeture répond à des fonctions précises : protéger le contenu, maintenir le pied, permettre l'enfilage, faciliter la dépose d'une housse. Les principaux systèmes sont :</p>\n<table>\n<thead><tr><th>Système</th><th>Usages</th><th>Points de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Fermeture à glissière</td><td>Ouverture de sac, poche, botte, housse</td><td>Longueur, numéro, sens d'ouverture, arrêts ; doit être posée sans ondulation</td></tr>\n<tr><td>Rabat avec fermoir, aimant ou bouton pression</td><td>Sacs, portefeuilles</td><td>Position exacte des deux parties, renfort sous la fixation</td></tr>\n<tr><td>Laçage</td><td>Chaussures (derby, richelieu), corsets de sellerie</td><td>Nombre et écartement des œillets, renfort de la zone</td></tr>\n<tr><td>Boucle et sangle</td><td>Ceintures, bandoulières, chaussures</td><td>Passage, trous de réglage, résistance</td></tr>\n<tr><td>Élastique</td><td>Chaussures sans lacet (soufflet élastique), housses</td><td>Tension, vieillissement de l'élastique</td></tr>\n<tr><td>Bande auto-agrippante, clips, agrafes</td><td>Sellerie (fixation des housses), articles techniques</td><td>Accessibilité, démontabilité</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fermetures sont des pièces d'usure fréquentes en après-vente. Un fermoir dont la fixation traverse un cuir sans renfort finit par l'arracher. Les maisons qui proposent la réparation privilégient des fermetures remplaçables sans démonter tout l'article.</div>"
      },
      {
       "titre": "Doublures et finitions intérieures",
       "contenu": "<p>La <strong>doublure</strong> cache l'envers du cuir, les renforts et les coutures ; elle améliore le confort, la tenue et l'aspect intérieur. Elle peut être en cuir fin (agneau, chèvre, porc pour la chaussure), en textile (coton, viscose, polyester, microfibre) ou absente dans certains produits volontairement « non doublés » dont l'envers du cuir est soigné.</p>\n<p>Plusieurs modes de pose existent :</p>\n<ul>\n<li><strong>doublure flottante</strong> : assemblée séparément en forme de « sac » puis fixée seulement au bord d'ouverture ; elle reste libre à l'intérieur, se remplace facilement mais peut bouger ;</li>\n<li><strong>doublure contrecollée</strong> : collée en plein sur l'envers du cuir avant assemblage ; la pièce gagne en tenue et forme un ensemble indissociable ;</li>\n<li><strong>doublure prise dans la couture</strong> : cousue en même temps que la pièce extérieure, bord à bord ou rembordée ensemble ; c'est fréquent pour les tiges de chaussures et les pattes de maroquinerie.</li>\n</ul>\n<p>Le choix influence directement les gabarits : une doublure flottante doit être légèrement plus petite que l'extérieur pour ne pas plisser, une doublure contrecollée est souvent coupée plus grande puis recoupée au ras après collage. Les finitions intérieures (poches plaquées, poches à fermeture, porte-cartes, cloisons) relèvent des mêmes solutions constructives que l'extérieur, avec des matières plus fines.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une doublure contrecollée rigidifie la pièce. Si le cuir doit ensuite être rembordé ou monté sur forme, l'ensemble doublé peut devenir trop épais ou trop raide : faites l'essai sur l'ensemble cuir, renfort et doublure, pas sur le cuir seul.</div>"
      }
     ],
     "points_cles": [
      "Une solution constructive se choisit en fonction du produit, du matériau et du procédé.",
      "Les bords peuvent être francs (bruts ou teints), rembordés, bordés, retournés ou passepoilés.",
      "Le type de bord fixe les valeurs ajoutées, la préparation et le temps de fabrication.",
      "La couture reste l'assemblage principal ; collage, soudage, rivetage et laser la complètent.",
      "Une piqûre trop serrée près du bord affaiblit le cuir comme une ligne de prédécoupe.",
      "Les arrêts de piqûre (point arrière, nœud, brûlage, collage) sont fixés par la fiche technique.",
      "Un renfort répartit l'effort sur une surface plus grande que la zone d'attache.",
      "La fermeture se choisit selon sa fonction, sa fixation et sa réparabilité."
     ],
     "lexique": [
      {
       "terme": "Solution constructive",
       "def": "Manière concrète de réaliser une partie du produit : bord, assemblage, renfort, fermeture."
      },
      {
       "terme": "Bord franc",
       "def": "Bord coupé net, laissé brut ou teint, sans repli."
      },
      {
       "terme": "Bord rembordé",
       "def": "Bord paré et replié sur l'envers de la pièce."
      },
      {
       "terme": "Passepoil",
       "def": "Bande pliée, souvent garnie d'un jonc, insérée dans une couture pour en souligner la ligne."
      },
      {
       "terme": "Point sellier",
       "def": "Couture main réalisée avec deux aiguilles sur un même fil, très résistante."
      },
      {
       "terme": "Arrêt de piqûre",
       "def": "Moyen d'empêcher une couture machine de se défaire à ses extrémités."
      },
      {
       "terme": "Brûlage",
       "def": "Arrêt d'un fil synthétique par fusion de son extrémité."
      },
      {
       "terme": "Soudage haute fréquence",
       "def": "Assemblage de matériaux thermoplastiques par échauffement dû à un champ électrique alternatif."
      },
      {
       "terme": "Contrecollage",
       "def": "Collage en plein d'une matière sur une autre, par exemple une doublure sur un cuir."
      }
     ]
    },
    {
     "id": "bcuir-representation-cotation",
     "titre": "Représentation technique, cotation et désignation du produit",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Lire et réaliser un dessin technique à plat d'un produit en cuir",
      "Utiliser les traits, les vues et les échelles normalisés",
      "Coter une pièce et interpréter une tolérance",
      "Interpréter les spécifications de position et d'orientation d'un accessoire",
      "Désigner un produit et ses composants de manière non ambiguë"
     ],
     "sections": [
      {
       "titre": "Les outils de représentation",
       "contenu": "<p>La représentation technique sert à communiquer une information précise entre le styliste, le bureau d'études, l'atelier et les fournisseurs. Selon l'étape, on utilise :</p>\n<ul>\n<li>le <strong>croquis</strong> à main levée, pour rechercher et proposer rapidement des solutions (forme d'une poche, position d'une attache) ;</li>\n<li>le <strong>dessin technique à plat</strong>, en vues normalisées, sans perspective, qui montre toutes les découpes, coutures et accessoires ;</li>\n<li>le <strong>dessin de définition</strong> d'une pièce ou d'un sous-ensemble, coté et tolérancé ;</li>\n<li>les <strong>vues de détail</strong> agrandies et les <strong>coupes</strong>, qui montrent un assemblage dans l'épaisseur (ordre des couches : cuir, renfort, doublure ; position de la couture ; type de bord) ;</li>\n<li>les représentations numériques produites par les logiciels de CAO et de dessin vectoriel.</li>\n</ul>\n<p>Le dessin technique doit être <strong>univoque</strong> : une seule interprétation possible. Tout ce qui n'est pas représenté ou écrit n'existe pas pour l'atelier.</p>"
      },
      {
       "titre": "Vues, traits et échelles",
       "contenu": "<p>Un produit en cuir est représenté par plusieurs <strong>vues</strong> : vue de face (devant), vue arrière (dos), vue de côté (profil, soufflet), vue de dessus, vue de dessous (fond, semelle), et si nécessaire vue intérieure. Pour une chaussure, on dessine au minimum le profil extérieur, le profil intérieur (côté voûte plantaire, qui peut différer) et la vue de dessus. Pour un siège garni, on représente la face, le profil et l'arrière.</p>\n<p>Les <strong>traits</strong> ont une signification normalisée :</p>\n<table>\n<thead><tr><th>Type de trait</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Continu fort</td><td>Contours et arêtes visibles</td></tr>\n<tr><td>Continu fin</td><td>Lignes de cote, hachures, plis</td></tr>\n<tr><td>Interrompu court (tirets)</td><td>Contours cachés ; dans les métiers du cuir, il représente aussi par convention les lignes de piqûre</td></tr>\n<tr><td>Mixte fin (trait-point)</td><td>Axes de symétrie, lignes de pliage</td></tr>\n</tbody>\n</table>\n<p>L'<strong>échelle</strong> est le rapport entre la dimension dessinée et la dimension réelle : 1:1 (grandeur nature, fréquente pour les gabarits et la petite maroquinerie), 1:2 ou 1:5 (réduction pour un sac ou un siège), 2:1 (agrandissement d'un détail). Elle est toujours indiquée dans le cartouche.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne mesure jamais une dimension sur un dessin réduit pour l'utiliser telle quelle : les cotes inscrites priment sur la mesure. Si une cote manque, on la demande au bureau d'études au lieu de l'estimer.</div>"
      },
      {
       "titre": "Le cartouche et la nomenclature",
       "contenu": "<p>Le <strong>cartouche</strong> est le cadre d'identification placé en bas du dessin. Il contient : le nom de l'entreprise, la référence et le nom du modèle, la désignation du dessin, l'échelle, l'unité (mm), la date, l'auteur, l'indice de révision et la saison ou la collection.</p>\n<p>La <strong>nomenclature</strong> est la liste structurée des composants. Sur un dessin d'ensemble, chaque composant porte un <strong>repère</strong> (un numéro relié à la pièce par une ligne de repère) qui renvoie à une ligne de la nomenclature : repère, nombre, désignation, matière, observations. La nomenclature sert de base aux achats, au calcul du coût et à la gamme de fabrication.</p>\n<table>\n<thead><tr><th>Repère</th><th>Nb</th><th>Désignation</th><th>Matière</th><th>Observations</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>1</td><td>Devant</td><td>Veau grainé 1,2/1,4 mm</td><td>Zone A, bord teint</td></tr>\n<tr><td>2</td><td>1</td><td>Dos</td><td>Veau grainé 1,2/1,4 mm</td><td>Zone A ou B</td></tr>\n<tr><td>3</td><td>2</td><td>Soufflet</td><td>Veau grainé 1,2/1,4 mm</td><td>Symétriques</td></tr>\n<tr><td>4</td><td>1</td><td>Renfort de devant</td><td>Non-tissé thermocollant</td><td>En retrait de 3 mm</td></tr>\n<tr><td>5</td><td>2</td><td>Anneau</td><td>Laiton doré, passage 20 mm</td><td>Référence fournisseur à préciser</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Coter une pièce",
       "contenu": "<p>La <strong>cotation</strong> donne les dimensions nécessaires et suffisantes pour définir la pièce. Les cotes sont exprimées en millimètres, sans indication d'unité. On distingue les <strong>cotes de dimension</strong> (longueur, largeur, rayon d'un angle) et les <strong>cotes de position</strong> (distance d'une couture au bord, position d'un accessoire par rapport à un bord de référence).</p>\n<p>Quelques règles :</p>\n<ul>\n<li>chaque cote n'apparaît qu'une fois ;</li>\n<li>on cote à partir d'une <strong>référence</strong> commune (un bord, un axe de symétrie) plutôt qu'en chaîne, pour éviter le cumul des écarts ;</li>\n<li>les rayons sont notés R suivi de la valeur (R 15) ; les diamètres par le symbole ⌀ (⌀ 4 pour un trou de rivet) ;</li>\n<li>une piqûre est définie par sa distance au bord (par exemple 3 mm) et sa longueur de point (par exemple 4 mm, ou 2,5 points par centimètre).</li>\n</ul>\n<p>Une <strong>tolérance</strong> fixe l'écart admissible autour de la cote nominale : 250 ± 2 signifie que la dimension réelle doit être comprise entre 248 et 252 mm. L'<strong>intervalle de tolérance</strong> est ici de 4 mm. Dans le cuir, matériau souple et déformable, les tolérances sont plus larges qu'en mécanique, mais elles restent indispensables pour contrôler.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier l'effet du cumul des cotes. Une patte comporte trois rivets alignés. Cotation en chaîne : 20 ± 1 du bord au premier rivet, puis 30 ± 1 entre rivets, puis 30 ± 1. 1) Position nominale du troisième rivet : 20 + 30 + 30 = 80 mm. 2) Écart maximal possible : 1 + 1 + 1 = 3 mm, donc le troisième rivet peut se trouver entre 77 et 83 mm. 3) Si la fonction exige que ce rivet soit à 80 ± 1 du bord (par exemple pour correspondre à un trou d'une autre pièce), la cotation en chaîne ne le garantit pas. 4) Solution : coter chaque rivet depuis le bord de référence : 20 ± 1, 50 ± 1, 80 ± 1.</div>"
      },
      {
       "titre": "Spécifications de position et d'orientation",
       "contenu": "<p>Certaines exigences portent non sur une dimension, mais sur la <strong>position</strong> ou l'<strong>orientation</strong> d'un élément par rapport à un autre. La cotation fonctionnelle normalisée (spécification géométrique des produits) les exprime à l'aide d'une <strong>référence</strong> (un élément désigné par une lettre dans un cadre, par exemple le bord supérieur A) et de tolérances géométriques :</p>\n<ul>\n<li><strong>parallélisme</strong> : la piqûre du bord d'ouverture doit être parallèle au bord A, à 1 mm près ;</li>\n<li><strong>perpendicularité</strong> : une poignée doit être perpendiculaire au bord supérieur ;</li>\n<li><strong>symétrie</strong> : deux attaches de poignée doivent être symétriques par rapport à l'axe vertical du sac ;</li>\n<li><strong>localisation</strong> : la position d'un fermoir est définie par rapport à deux références (bord supérieur et axe).</li>\n</ul>\n<p>Dans la pratique de l'atelier, ces exigences sont souvent traduites par des gabarits de traçage et de positionnement qui les garantissent sans mesure : un gabarit de traçage fixe en une fois la position des deux attaches symétriques.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'œil du client est très sensible aux défauts de symétrie et de parallélisme : une piqûre de bord qui s'écarte de 1 mm sur un bord teint, ou une poignée légèrement décalée, fait déclasser un sac de luxe. Ces caractéristiques figurent en bonne place dans les fiches de contrôle.</div>"
      },
      {
       "titre": "Désigner les produits et les composants",
       "contenu": "<p>La <strong>désignation</strong> d'un produit ou d'un composant doit permettre de l'identifier sans ambiguïté. Elle combine : une <strong>référence</strong> (code alphanumérique interne, souvent structuré : famille, modèle, matière, coloris, taille), un nom commercial, et des caractéristiques. Par exemple, une référence peut être construite ainsi : SAC (famille), 2045 (modèle), VG (veau grainé), NR (noir), M (taille moyenne).</p>\n<p>Les composants achetés sont désignés par la référence du fournisseur, complétée des caractéristiques utiles. Les <strong>grades de qualité</strong> précisent le niveau d'exigence : grade de la matière (choix du cuir, zone qualitative), grade de finition (bord teint en trois couches ou en une), grade d'aspect (défauts admis ou non).</p>\n<p>Une désignation bien construite permet de retrouver tout l'historique du produit : matières, fournisseurs, versions de gabarits, contrôles, ce qui est indispensable pour la traçabilité et le service après-vente.</p>"
      },
      {
       "titre": "Lire une coupe d'assemblage",
       "contenu": "<p>Une <strong>coupe</strong> représente le produit comme s'il était tranché par un plan, pour montrer l'intérieur. Dans les métiers du cuir, on utilise surtout des coupes locales de bords et d'assemblages, très agrandies (échelle 5:1 ou plus), où chaque couche est représentée par une bande d'épaisseur exagérée et hachurée différemment.</p>\n<p>Exemple décrit : coupe du bord d'ouverture d'un sac. De l'extérieur vers l'intérieur, on lit : le cuir de 1,2 mm rembordé sur 5 mm (le rempli est replié vers l'intérieur et paré), un ruban de renfort de 10 mm de large placé contre le pli, puis la doublure textile dont le bord est replié et engagé sous le rempli. Une piqûre à 3 mm du bord traverse cuir, rempli, ruban et doublure.</p>\n<p>De cette coupe, le prototypiste déduit directement : la valeur de rempli à ajouter au gabarit cuir, la nécessité d'un parage du rempli, la largeur et la position du ruban, le gabarit de doublure, la longueur de l'aiguille et la grosseur de fil adaptées à l'épaisseur totale traversée (ici environ 1,2 + 0,6 + 0,3 + 0,4 mm selon les parages et les matières).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la coupe d'assemblage est le document qui relie le dessin au gabarit et à la gamme : elle fixe les couches, leur ordre, les valeurs ajoutées et la couture.</div>"
      }
     ],
     "points_cles": [
      "Le dessin technique à plat montre, sans perspective, toutes les découpes, coutures et accessoires.",
      "Les traits ont une signification normalisée ; les tirets représentent aussi les piqûres.",
      "L'échelle et l'unité figurent dans le cartouche ; les cotes inscrites priment sur la mesure.",
      "La nomenclature relie chaque repère du dessin à sa désignation, son nombre et sa matière.",
      "On cote à partir d'une référence commune pour éviter le cumul des écarts.",
      "Une tolérance fixe l'écart admissible : 250 ± 2 donne un intervalle de 248 à 252 mm.",
      "Parallélisme, perpendicularité, symétrie et localisation se rapportent à une référence.",
      "Une désignation structurée assure l'identification et la traçabilité.",
      "La coupe d'assemblage fixe les couches, leur ordre et les valeurs ajoutées."
     ],
     "lexique": [
      {
       "terme": "Vue",
       "def": "Représentation du produit observé selon une direction normalisée."
      },
      {
       "terme": "Échelle",
       "def": "Rapport entre la dimension dessinée et la dimension réelle."
      },
      {
       "terme": "Cartouche",
       "def": "Cadre d'identification d'un dessin technique."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste structurée des composants d'un produit, reliée aux repères du dessin."
      },
      {
       "terme": "Cote nominale",
       "def": "Valeur théorique d'une dimension."
      },
      {
       "terme": "Tolérance",
       "def": "Écart admissible autour de la cote nominale."
      },
      {
       "terme": "Référence (cotation)",
       "def": "Élément de la pièce à partir duquel on définit les positions et orientations."
      },
      {
       "terme": "Coupe",
       "def": "Représentation de l'intérieur d'un produit tranché par un plan."
      },
      {
       "terme": "Grade de qualité",
       "def": "Niveau d'exigence défini pour une matière, une finition ou un aspect."
      }
     ]
    },
    {
     "id": "bcuir-cao-decoupe-numerique",
     "titre": "CAO et découpe numérique des gabarits",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire la chaîne numérique du patron à la pièce coupée",
      "Numériser, construire et modifier des gabarits dans un logiciel de CAO",
      "Appliquer une homothétie ou une similitude pour décliner un modèle",
      "Préparer un fichier pour un découpeur numérique et paramétrer les outils",
      "Organiser et sauvegarder les données d'un modèle"
     ],
     "sections": [
      {
       "titre": "La chaîne numérique",
       "contenu": "<p>La <strong>CAO</strong> (conception assistée par ordinateur) est aujourd'hui présente dans la plupart des bureaux d'études du cuir. Elle s'insère dans une <strong>chaîne numérique</strong> qui relie toutes les étapes :</p>\n<ol>\n<li><strong>acquisition</strong> : numérisation d'un patron papier (table à numériser ou scanner grand format), d'une forme de chaussure (scanner 3D) ou d'un relevé ;</li>\n<li><strong>conception</strong> : construction et modification des lignes du modèle, extraction des pièces, ajout des valeurs et des repères ;</li>\n<li><strong>déclinaison</strong> : graduation en pointures (chaussure) ou homothétie et similitude (maroquinerie, sellerie) ;</li>\n<li><strong>industrialisation</strong> : calcul de surfaces, placement, export vers le découpeur ;</li>\n<li><strong>fabrication</strong> : découpe numérique des pièces, ou tracé et découpe de gabarits physiques sur traceur-découpeur ;</li>\n<li><strong>archivage</strong> : base de données des modèles et des pièces.</li>\n</ol>\n<p>Les logiciels utilisés sont des logiciels professionnels spécialisés pour la chaussure, la maroquinerie ou la sellerie, associés à des modules de placement et de découpe. Leur ergonomie diffère, mais les fonctions de base sont communes.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la CAO ne remplace pas le savoir-faire du modéliste : elle trace exactement ce qu'on lui demande. Une erreur de conception est reproduite à l'identique sur toutes les pièces et toutes les tailles.</div>"
      },
      {
       "titre": "Numériser et construire",
       "contenu": "<p>La <strong>numérisation</strong> d'un gabarit papier se fait point par point sur une table à numériser (on clique les points de contour avec un curseur) ou par photographie ou scan, suivie d'une vectorisation. Il faut indiquer au logiciel la nature des points : point d'angle, point de courbe, cran, repère. Une courbe mal numérisée (trop peu de points, points mal répartis) donne un contour ondulé.</p>\n<p>Les principales fonctions de construction sont :</p>\n<ul>\n<li>tracé de lignes droites et de courbes (souvent des courbes de Bézier ou des splines, définies par quelques points de contrôle) ;</li>\n<li>parallèles (pour une ligne de piqûre ou une valeur de rempli), symétrie, rotation, déplacement ;</li>\n<li>mesure de longueurs de courbes et vérification des concordances ;</li>\n<li><strong>extraction</strong> d'une pièce à partir des lignes du patron du modèle ;</li>\n<li>ajout automatique des valeurs (rempli, superposition, montage) selon des règles définies par l'entreprise ;</li>\n<li>pose des crans, des perçages, des textes et des flèches de prêtant.</li>\n</ul>\n<p>La pièce reste souvent <strong>associative</strong> : si l'on modifie une ligne du patron, les pièces qui en dérivent se mettent à jour. Cette fonction fait gagner beaucoup de temps, à condition de bien vérifier les pièces modifiées.</p>"
      },
      {
       "titre": "Homothétie et similitude",
       "contenu": "<p>En maroquinerie et en sellerie, un modèle est souvent décliné en plusieurs <strong>formats</strong> (petit, moyen, grand). Deux transformations géométriques sont utilisées :</p>\n<ul>\n<li>l'<strong>homothétie</strong> : toutes les dimensions sont multipliées par un même rapport k depuis un centre ; avec k = 1,2, une pièce de 250 × 200 mm devient 300 × 240 mm ; les angles et les proportions sont conservés ;</li>\n<li>la <strong>similitude</strong> : homothétie éventuellement combinée à une rotation ou une symétrie ; la forme reste semblable.</li>\n</ul>\n<p>Une homothétie pure n'est presque jamais suffisante, car certains éléments ne doivent pas changer : largeur d'une piqûre au bord, valeur de rempli, dimension des accessoires (un anneau de 20 mm de passage reste le même), épaisseur du cuir. Le modéliste applique donc l'homothétie aux contours puis <strong>reconstruit</strong> les valeurs ajoutées et repositionne les éléments fixes. On peut aussi choisir des rapports différents en largeur et en hauteur (on parle alors d'affinité), si le styliste veut modifier les proportions.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> décliner un sac en grand modèle. Le modèle moyen mesure fini 300 × 220 × 110 mm (largeur × hauteur × soufflet) ; le styliste demande un grand modèle de 360 mm de large en conservant les proportions. 1) Rapport : k = 360 / 300 = 1,2. 2) Dimensions finies du grand modèle : hauteur 220 × 1,2 = 264 mm ; soufflet 110 × 1,2 = 132 mm. 3) Appliquez l'homothétie aux gabarits nets, pas aux gabarits bruts. 4) Ajoutez ensuite les valeurs de rempli et de superposition inchangées (5 mm, 8 mm). 5) Conservez les distances de piqûre (3 mm) et les accessoires ; vérifiez seulement que leur position reste harmonieuse (par exemple, l'écartement des attaches de poignée passe de 120 à 144 mm, mais leur taille ne change pas). 6) Vérifiez les concordances de longueur entre corps et soufflets.</div>"
      },
      {
       "titre": "La découpe numérique",
       "contenu": "<p>Les <strong>découpeurs numériques</strong> (ou tables de découpe automatique) coupent les pièces directement dans le cuir ou les matières en rouleau, sans emporte-pièce. Les technologies courantes sont :</p>\n<table>\n<thead><tr><th>Technologie</th><th>Principe</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Lame oscillante ou vibrante</td><td>Une lame animée d'un mouvement rapide de va-et-vient suit le contour</td><td>La plus répandue pour le cuir et les textiles</td></tr>\n<tr><td>Lame rotative (molette)</td><td>Une molette tranchante roule sur la matière</td><td>Textiles fins, coupes droites</td></tr>\n<tr><td>Jet d'eau</td><td>Jet d'eau à très haute pression</td><td>Cuirs épais, matériaux composites, découpe sans échauffement</td></tr>\n<tr><td>Laser</td><td>Faisceau qui vaporise la matière</td><td>Découpes fines, perforations décoratives ; brûle la tranche</td></tr>\n</tbody>\n</table>\n<p>Pour le cuir, le découpeur est souvent associé à un <strong>système de numérisation de la peau</strong> : une caméra photographie la peau posée sur la table, l'opérateur trace les contours, les défauts et les zones qualitatives, puis le logiciel calcule un placement automatique et lance la découpe. La table maintient la matière par aspiration.</p>"
      },
      {
       "titre": "Préparer un fichier de découpe",
       "contenu": "<p>Le fichier envoyé au découpeur doit contenir, pour chaque pièce : le contour de coupe, les crans, les perçages, éventuellement des marquages (traits de repère au stylo ou au feutre effaçable), la flèche de prêtant, l'exigence de zone et le nombre de pièces. Les fichiers sont échangés dans des formats d'échange de dessin vectoriel courants (par exemple DXF) ou dans le format propre au logiciel.</p>\n<p>Il faut ensuite <strong>paramétrer les outils</strong> :</p>\n<ul>\n<li>choix de l'outil par élément : lame pour le contour, poinçon rond pour les perçages, outil de cran en V ou droit, stylo pour les marquages ;</li>\n<li>vitesse de coupe et fréquence d'oscillation, adaptées à l'épaisseur et à la dureté de la matière ;</li>\n<li>profondeur de lame et compensation de son épaisseur (le contour suivi doit correspondre au trait du gabarit) ;</li>\n<li>ordre de découpe : petits éléments et perçages intérieurs d'abord, contours ensuite, pour que la matière ne bouge pas.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un contour mal fermé (deux segments qui ne se rejoignent pas exactement) ou des doublons de lignes provoquent des coupes incomplètes ou des passages multiples qui abîment la table et la pièce. Contrôlez le fichier avec la fonction de vérification du logiciel avant tout envoi, puis faites une découpe d'essai sur une chute.</div>"
      },
      {
       "titre": "Organiser les données d'un modèle",
       "contenu": "<p>Un modèle numérique comprend de nombreux fichiers : patron, pièces par matière, versions, tailles, placements, fiches techniques. Leur organisation est un enjeu de qualité :</p>\n<ul>\n<li>une <strong>règle de nommage</strong> commune (référence du modèle, pièce, taille, version) ;</li>\n<li>une <strong>base de données</strong> qui relie les pièces au modèle, aux matières et aux fournitures ;</li>\n<li>une gestion des <strong>versions</strong> : la version validée est clairement identifiée, les autres sont archivées, jamais supprimées ;</li>\n<li>des <strong>sauvegardes</strong> régulières sur un support distinct.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les bases de données de modèles permettent de réutiliser des éléments existants : une poignée standard, une poche intérieure type, un soufflet éprouvé. Le prototypiste gagne du temps et fiabilise le produit en partant d'éléments déjà validés plutôt que de tout redessiner. En contrepartie, toute modification d'un élément partagé doit être vérifiée sur tous les modèles qui l'utilisent.</div>\n<p>Enfin, les fichiers de CAO sont des <strong>données confidentielles</strong> : ils contiennent le savoir-faire de l'entreprise et les futurs modèles. Leur diffusion à un sous-traitant se fait selon des procédures précises, et jamais par des moyens personnels.</p>"
      },
      {
       "titre": "Du fichier à la pièce : contrôler la conformité",
       "contenu": "<p>Une pièce coupée par un découpeur numérique doit être contrôlée comme une pièce coupée à la main. Le contrôle porte sur :</p>\n<ul>\n<li>la <strong>forme et les dimensions</strong> : on superpose le gabarit net imprimé à l'échelle 1:1 ou un gabarit de contrôle sur la pièce ; un écart régulier sur tout le contour signale souvent une compensation de lame mal réglée ;</li>\n<li>la <strong>qualité de la tranche</strong> : coupe franche, sans effilochage ni bavure ; une tranche en escalier indique une vitesse trop élevée ou une lame usée ;</li>\n<li>les <strong>crans et perçages</strong> : présence, position, profondeur (un cran trop profond affaiblit le bord et peut apparaître après rembordé) ;</li>\n<li>le <strong>respect des zones</strong> : chaque pièce est dans la zone qualitative exigée, sans défaut ;</li>\n<li>l'<strong>orientation</strong> : la flèche de prêtant correspond au sens défini sur la peau.</li>\n</ul>\n<p>Les premiers lots coupés après une modification de fichier ou de paramètre sont contrôlés à 100 %, puis on passe à un contrôle par prélèvement lorsque le processus est stable. Les écarts constatés sont remontés au bureau d'études pour corriger le fichier source, et non compensés à la main par l'opérateur au poste suivant : une correction manuelle non tracée disparaît au prochain lancement.</p>"
      }
     ],
     "points_cles": [
      "La chaîne numérique va de l'acquisition au découpeur, en passant par la conception, la déclinaison et le placement.",
      "Une courbe numérisée doit comporter des points bien choisis : angles, courbes, crans, repères.",
      "Les pièces associatives se mettent à jour quand le patron change, mais doivent être revérifiées.",
      "L'homothétie multiplie toutes les dimensions par un même rapport depuis un centre.",
      "On applique l'homothétie aux gabarits nets, puis on reconstruit les valeurs ajoutées et les éléments fixes.",
      "Les découpeurs utilisent la lame oscillante, la molette, le jet d'eau ou le laser.",
      "Le fichier de découpe doit avoir des contours fermés et des outils correctement paramétrés.",
      "Nommage, versions et sauvegardes garantissent la fiabilité et la confidentialité des données."
     ],
     "lexique": [
      {
       "terme": "CAO",
       "def": "Conception assistée par ordinateur."
      },
      {
       "terme": "Numérisation",
       "def": "Transformation d'un gabarit physique en données numériques."
      },
      {
       "terme": "Courbe de Bézier",
       "def": "Courbe définie par des points de contrôle, utilisée pour tracer des lignes lisses."
      },
      {
       "terme": "Homothétie",
       "def": "Transformation qui multiplie toutes les distances par un même rapport depuis un centre."
      },
      {
       "terme": "Similitude",
       "def": "Transformation qui conserve la forme : homothétie éventuellement combinée à une rotation ou une symétrie."
      },
      {
       "terme": "Affinité",
       "def": "Transformation qui applique des rapports différents selon deux directions."
      },
      {
       "terme": "Découpeur numérique",
       "def": "Machine qui découpe automatiquement les pièces à partir d'un fichier."
      },
      {
       "terme": "Lame oscillante",
       "def": "Outil de découpe animé d'un mouvement rapide de va-et-vient."
      },
      {
       "terme": "Format d'échange",
       "def": "Format de fichier permettant de transférer un dessin vectoriel d'un logiciel à un autre."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Industrialiser, fabriquer et contrôler",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bcuir-coupe-placement",
     "titre": "La coupe : procédés, placement et consommation de matière",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Comparer les procédés de coupe et choisir le plus adapté à une quantité et une matière",
      "Définir un ordre de coupe et hiérarchiser les pièces selon leur exigence",
      "Concevoir un placement sur peau et sur matière en rouleau",
      "Calculer surface théorique, taux de chute et surface à commander",
      "Établir une fiche de coupe"
     ],
     "sections": [
      {
       "titre": "Les procédés de coupe",
       "contenu": "<p>La coupe est une opération décisive : le cuir représente souvent la part la plus importante du coût matière, et une erreur de coupe ne se rattrape pas. Les procédés se choisissent selon la quantité, la matière et la forme des pièces :</p>\n<table>\n<thead><tr><th>Procédé</th><th>Principe</th><th>Domaine d'emploi</th></tr></thead>\n<tbody>\n<tr><td>Coupe manuelle au tranchet ou au cutter</td><td>Le coupeur suit le contour d'un gabarit posé sur la peau</td><td>Prototypes, très petites séries, pièces de grande taille, cuirs précieux ; grande souplesse de placement</td></tr>\n<tr><td>Presse à découper avec emporte-pièce</td><td>Un emporte-pièce (lame d'acier à la forme de la pièce) est enfoncé dans la matière par une presse</td><td>Séries, pièces répétées ; rapide et régulier, mais l'outil coûte cher et est propre à une forme et une taille</td></tr>\n<tr><td>Découpe numérique</td><td>Lame oscillante, jet d'eau ou laser piloté par fichier</td><td>Petites et moyennes séries, modèles variés ; pas d'outil à fabriquer, placement optimisé par logiciel</td></tr>\n<tr><td>Machine à bandes</td><td>Coupe de bandes de largeur régulière</td><td>Lanières, bandoulières, bordures, passepoils</td></tr>\n</tbody>\n</table>\n<p>Les <strong>emporte-pièces polyvalents</strong> (formes standard réutilisables sur plusieurs modèles : pastilles, pattes, attaches) réduisent le coût d'outillage. Pour un nouveau modèle, on calcule si la quantité prévue justifie la fabrication d'emporte-pièces, ou s'il vaut mieux couper au découpeur numérique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la presse à découper est une machine dangereuse : la main ne doit jamais se trouver sous la zone de descente. Les presses modernes imposent une commande bimanuelle ou des dispositifs de protection ; ils ne doivent jamais être neutralisés.</div>"
      },
      {
       "titre": "Hiérarchiser les pièces et définir l'ordre de coupe",
       "contenu": "<p>Avant de couper, on classe les pièces du modèle par <strong>exigence</strong> :</p>\n<ol>\n<li>pièces les plus visibles et sollicitées (devant, rabat, claque, plateau d'assise), à placer en zone A, dans le bon sens de prêtant ;</li>\n<li>pièces visibles moins exposées (dos, soufflets, quartiers, plates-bandes), en zone A ou B ;</li>\n<li>pièces cachées ou de petite taille (renforts en cuir, pattes intérieures, enchapes), en zone B ou C, souvent placées dans les espaces restants.</li>\n</ol>\n<p>L'<strong>ordre de coupe</strong> suit cette hiérarchie : on place et on coupe d'abord les grandes pièces nobles, qui ont besoin des meilleures zones, puis on comble avec les pièces secondaires et les petites pièces. Couper d'abord les petites pièces gaspille les zones de qualité.</p>\n<p>D'autres règles s'ajoutent : couper les pièces d'un même produit dans la même peau (nuance), respecter les paires (pièce gauche et pièce droite) avec un prêtant symétrique, éviter de placer une pièce sur la ligne du dos si le cahier des charges l'interdit, respecter le sens du grain ou du motif si le cuir est imprimé.</p>"
      },
      {
       "titre": "Le placement",
       "contenu": "<p>Le <strong>placement</strong> est la disposition des gabarits sur la matière avant la coupe. Son objectif est double : respecter les exigences de qualité de chaque pièce et minimiser les chutes.</p>\n<p>Sur une <strong>peau</strong>, chaque placement est unique, car la forme de la peau et ses défauts varient. Le coupeur ou le logiciel combine les pièces au mieux, en emboîtant les formes (un arrondi dans un creux), en orientant les pièces selon le prêtant, et en contournant les défauts.</p>\n<p>Sur une <strong>matière en rouleau</strong> (doublure, renfort, synthétique), la largeur est constante : on établit un <strong>plan de placement</strong> type, répété sur la longueur. On peut couper plusieurs épaisseurs superposées (matelas) pour gagner du temps. La consommation s'exprime alors en mètres linéaires pour une laize donnée.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en coupe numérique, le logiciel propose un placement automatique en quelques secondes, mais l'opérateur garde un rôle clé : il trace précisément les défauts et les zones, vérifie le résultat et le corrige si une pièce noble est placée dans un pli de collet ou trop près d'une cicatrice. Un placement automatique sur une peau mal délimitée produit des pièces non conformes.</div>"
      },
      {
       "titre": "Surfaces et taux de chute",
       "contenu": "<p>Pour estimer la consommation de cuir, on utilise plusieurs grandeurs :</p>\n<ul>\n<li>la <strong>surface théorique</strong> (ou surface nette) d'un produit : somme des surfaces des pièces coupées dans ce cuir ; pour une pièce rectangulaire, longueur × largeur ; pour une forme complexe, la CAO calcule la surface exacte ;</li>\n<li>la <strong>surface pratique</strong> (ou prévisionnelle) : surface de cuir réellement consommée, qui inclut les chutes inévitables entre les pièces et autour des défauts ;</li>\n<li>le <strong>taux de chute</strong> : rapport entre la surface perdue et une surface de référence, exprimé en pourcentage.</li>\n</ul>\n<p>Une formule couramment utilisée dans les entreprises et les sujets d'examen exprime la surface prévisionnelle à partir de la surface nette et d'un taux de chute prévisionnel :</p>\n<p><strong>SP = SN + (SN × TCp)</strong>, soit SP = SN × (1 + TCp)</p>\n<p>où SP est la surface prévisionnelle, SN la surface nette et TCp le taux de chute prévisionnel. Le taux de chute dépend de l'espèce, du choix des peaux, de la taille et de la forme des pièces, et de l'exigence de qualité : il est plus élevé pour de grandes pièces en zone A que pour de petites pièces cachées. Chaque entreprise l'établit à partir de son expérience.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le taux de chute s'applique à la surface nette pour obtenir la surface prévisionnelle ; on ne divise pas. Vérifiez toujours quelle formule la consigne ou l'entreprise impose, car il existe d'autres façons de définir un taux de chute (par rapport à la surface de la peau, par exemple).</div>"
      },
      {
       "titre": "Calculer une commande de cuir",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la quantité de cuir pour une présérie. Données : un sac comporte un devant et un dos de 320 × 260 mm, deux soufflets de 260 × 100 mm, un fond de 320 × 100 mm, une poignée de 400 × 30 mm et deux pattes de 60 × 40 mm ; présérie de 10 sacs ; taux de chute prévisionnel 30 % ; cuir livré en demi-peaux de 2,20 m².<br>1) Surface de chaque pièce en mm² : devant et dos 2 × 320 × 260 = 166 400 ; soufflets 2 × 260 × 100 = 52 000 ; fond 320 × 100 = 32 000 ; poignée 400 × 30 = 12 000 ; pattes 2 × 60 × 40 = 4 800.<br>2) Surface nette d'un sac : 166 400 + 52 000 + 32 000 + 12 000 + 4 800 = 267 200 mm², soit 0,2672 m² (on divise par 1 000 000).<br>3) Surface nette pour 10 sacs : 2,672 m².<br>4) Surface prévisionnelle : SP = 2,672 + (2,672 × 0,30) = 2,672 + 0,8016 = 3,4736 m², arrondie à 3,47 m².<br>5) Nombre de demi-peaux : 3,47 / 2,20 = 1,58, donc 2 demi-peaux à commander (on arrondit toujours à l'entier supérieur pour une commande).<br>6) Contrôle de cohérence : 2 demi-peaux font 4,40 m², la marge restante (environ 0,93 m²) couvre les aléas (défaut imprévu, pièce ratée).</div>\n<p>Dans la réalité, les pièces ne sont pas des rectangles : on utilise la surface réelle calculée en CAO, plus faible que le rectangle qui les contient. Si l'on utilise les rectangles englobants, on surestime la surface nette ; le taux de chute doit alors être défini en conséquence.</p>"
      },
      {
       "titre": "Couper la doublure et les matières en rouleau",
       "contenu": "<p>Pour une matière en rouleau, on calcule la consommation en <strong>mètres linéaires</strong>. On dispose les pièces sur une largeur égale à la laize utile (la laize moins les lisières inutilisables) et on mesure la longueur du placement.</p>\n<p>Exemple : une doublure de laize utile 1,40 m ; le placement des doublures de 4 sacs occupe 0,90 m de longueur. Consommation par sac : 0,90 / 4 = 0,225 m linéaire. Pour 10 sacs : on répète le placement 3 fois (12 sacs possibles) pour 2,70 m, ou on construit un placement de 10 sacs plus court. Le rendement du placement est le rapport entre la surface des pièces et la surface de matière utilisée.</p>\n<p>La coupe en matelas (plusieurs plis superposés) impose de bien aligner les plis, de respecter le sens (endroit, sens du motif) et de vérifier que l'outil coupe toutes les épaisseurs sans décalage entre le pli du dessus et celui du dessous.</p>"
      },
      {
       "titre": "La fiche de coupe",
       "contenu": "<p>La <strong>fiche de coupe</strong> (ou ordre de coupe) donne au coupeur toutes les informations nécessaires :</p>\n<ul>\n<li>référence du modèle, quantité à couper, taille ou pointure, coloris, numéro de lot ou de bain ;</li>\n<li>liste des pièces par matière, avec le nombre de pièces par produit et le nombre total ;</li>\n<li>exigence de zone et orientation de chaque pièce ;</li>\n<li>procédé et outils (gabarits, références d'emporte-pièces, programme de découpe) ;</li>\n<li>consommation prévue et consignes particulières (pièces appairées, raccord de motif) ;</li>\n<li>cases de suivi : consommation réelle, pièces rebutées, nom du coupeur, date.</li>\n</ul>\n<p>Comparer la consommation réelle à la consommation prévue permet d'ajuster le taux de chute pour les commandes suivantes et de détecter un problème de matière (peaux plus défectueuses que d'habitude) ou de méthode.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les pièces coupées doivent être identifiées immédiatement (étiquette ou marquage au dos) et regroupées par produit ou par paquet. Des pièces de deux peaux mélangées en préparation donneront des écarts de nuance visibles sur le produit fini.</div>"
      }
     ],
     "points_cles": [
      "Le procédé de coupe se choisit selon la quantité, la matière et la forme des pièces.",
      "L'emporte-pièce est rentable en série ; la découpe numérique convient aux modèles variés.",
      "On coupe d'abord les grandes pièces nobles, puis les pièces secondaires et les petites pièces.",
      "Le placement concilie exigences de qualité et économie de matière.",
      "SP = SN + (SN × TCp) donne la surface prévisionnelle à partir de la surface nette.",
      "On passe des mm² aux m² en divisant par 1 000 000.",
      "Une quantité de peaux à commander s'arrondit à l'entier supérieur.",
      "Les matières en rouleau se consomment en mètres linéaires pour une laize donnée.",
      "La fiche de coupe compare consommation prévue et réelle pour ajuster le taux de chute."
     ],
     "lexique": [
      {
       "terme": "Emporte-pièce",
       "def": "Outil de coupe constitué d'une lame d'acier à la forme de la pièce, utilisé sous presse."
      },
      {
       "terme": "Placement",
       "def": "Disposition des gabarits sur la matière avant la coupe."
      },
      {
       "terme": "Surface nette",
       "def": "Somme des surfaces des pièces d'un produit coupées dans une matière."
      },
      {
       "terme": "Surface prévisionnelle",
       "def": "Surface de matière à prévoir, chutes comprises."
      },
      {
       "terme": "Taux de chute",
       "def": "Proportion de matière perdue, exprimée en pourcentage d'une surface de référence."
      },
      {
       "terme": "Laize",
       "def": "Largeur d'une matière en rouleau."
      },
      {
       "terme": "Matelas",
       "def": "Superposition de plusieurs plis de matière coupés en une seule fois."
      },
      {
       "terme": "Fiche de coupe",
       "def": "Document qui donne au coupeur les pièces, quantités, exigences et consignes d'une coupe."
      },
      {
       "terme": "Tranchet",
       "def": "Couteau à lame courte et large utilisé pour la coupe manuelle du cuir."
      }
     ]
    },
    {
     "id": "bcuir-preparation-piquage-collage",
     "titre": "Préparation, piquage et collage : procédés et réglages",
     "niveau": "1re",
     "duree": 50,
     "objectifs": [
      "Ordonner les opérations de préparation des pièces coupées",
      "Distinguer les types de machines à coudre et de points utilisés pour le cuir",
      "Choisir aiguille, fil et longueur de point selon l'assemblage",
      "Mettre en œuvre un collage en respectant les étapes et les temps",
      "Expliquer le principe des procédés de mise en forme et de thermocollage"
     ],
     "sections": [
      {
       "titre": "La préparation des pièces",
       "contenu": "<p>Entre la coupe et l'assemblage, les pièces passent par une série d'opérations de <strong>préparation</strong> :</p>\n<ul>\n<li><strong>marquage et identification</strong> : numéro de paquet, taille, repères au dos ;</li>\n<li><strong>refendage</strong> : mise à épaisseur uniforme de la pièce entière, à la machine à refendre (rouleau d'entraînement et lame à ruban) ;</li>\n<li><strong>parage</strong> : amincissement des bords, à la machine à parer (couteau en forme de cloche tournante et pied presseur) ; on règle la largeur et l'épaisseur du parage, et sa forme (biseau régulier, parage plat, parage en marche) ;</li>\n<li><strong>traçage</strong> des lignes de repère à l'aide des gabarits de travail ;</li>\n<li><strong>pose des renforts</strong> par collage ou thermocollage ;</li>\n<li><strong>rembordage</strong> : encollage puis repli du bord, souvent à la machine à remplier ;</li>\n<li><strong>teinture de tranche</strong> pour les bords francs : ponçage, application de la teinture en plusieurs couches avec séchage et ponçage intermédiaires, lissage ;</li>\n<li><strong>perforations, gravures, marquages à chaud</strong> (logo).</li>\n</ul>\n<p>Ces opérations sont souvent plus longues que l'assemblage lui-même, en particulier en haut de gamme.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un parage trop fin fragilise le bord, qui peut se déchirer au rembordage ou à l'usage ; un parage trop épais crée une surépaisseur visible. Le réglage se fait sur une chute du même cuir et se contrôle à l'épaisseurmètre avant de passer les pièces de série.</div>"
      },
      {
       "titre": "Les machines à coudre",
       "contenu": "<p>Le cuir se coud avec des machines industrielles adaptées à son épaisseur et à sa forme. On les classe selon la forme du plateau, qui détermine l'accès à la pièce :</p>\n<table>\n<thead><tr><th>Machine</th><th>Description</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Machine plate</td><td>Plateau horizontal au niveau de la table</td><td>Pièces à plat, assemblages simples</td></tr>\n<tr><td>Machine à bras (ou à cylindre)</td><td>Le plateau est un bras horizontal autour duquel on enfile la pièce</td><td>Pièces déjà en volume : sacs, bottes, housses</td></tr>\n<tr><td>Machine à colonne</td><td>Le crochet est logé dans une colonne verticale, la pièce est piquée en hauteur</td><td>Tiges de chaussures, piqûres dans des angles et volumes</td></tr>\n<tr><td>Machine à poste élevé ou à bras long</td><td>Variantes pour pièces volumineuses</td><td>Sellerie, grandes pièces</td></tr>\n</tbody>\n</table>\n<p>Le cuir glisse mal et se marque facilement : on utilise des systèmes d'<strong>entraînement</strong> adaptés. Avec l'entraînement par griffe seule, le cuir peut se décaler entre les couches ; l'<strong>entraînement combiné</strong> (griffe et aiguille), et surtout le <strong>triple entraînement</strong> (griffe, aiguille et pied presseur entraînant), assurent un avancement régulier des couches superposées. Le pied presseur peut être à roulette, en téflon ou à deux semelles alternées.</p>"
      },
      {
       "titre": "Les points et les fils",
       "contenu": "<p>Les points sont classés par une norme internationale par familles numérotées. Les plus utilisés dans le cuir sont :</p>\n<ul>\n<li>le <strong>point noué</strong> (classe 301) : un fil d'aiguille et un fil de canette s'entrecroisent au milieu de l'épaisseur ; il est identique sur les deux faces, solide et ne se défait pas facilement ; c'est le point standard de la piqûre du cuir ;</li>\n<li>le <strong>point noué zigzag</strong> (classe 304) : utilisé pour l'assemblage bord à bord ou des piqûres décoratives ;</li>\n<li>le <strong>point de chaînette</strong> (classes 101 et 401) : formé de boucles ; il est élastique mais peut se défaire en tirant sur le fil ; utilisé pour certains semelages et assemblages souples.</li>\n</ul>\n<p>Le choix de la <strong>longueur de point</strong> tient compte de l'épaisseur et de l'aspect : des points trop courts affaiblissent le cuir, des points trop longs donnent un assemblage lâche et un aspect grossier. En maroquinerie, la densité varie le plus souvent entre 3 et 5 points par centimètre, selon la grosseur du fil et le style recherché.</p>\n<p>Les <strong>aiguilles pour cuir</strong> ont une pointe coupante qui tranche le cuir au lieu d'écarter les fibres (contrairement aux pointes rondes utilisées pour les textiles). La forme de la pointe détermine l'orientation de la fente et donc l'aspect du point : point droit, point incliné « style sellier ». Le fabricant d'aiguilles indique les formes disponibles par un code.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le trio aiguille, fil et longueur de point se règle ensemble. Un fil plus gros demande une aiguille plus grosse et des points plus longs ; une aiguille de pointe coupante est réservée au cuir et aux matières denses.</div>"
      },
      {
       "titre": "Régler une piqûre",
       "contenu": "<p>Une piqûre est correcte quand le point est bien formé, régulier, à la bonne distance du bord, avec le nœud des fils noyé dans l'épaisseur. Les réglages principaux sont :</p>\n<ul>\n<li>la <strong>tension du fil d'aiguille</strong> (disques de tension) et la <strong>tension du fil de canette</strong> (vis du boîtier de canette) : elles doivent être équilibrées ;</li>\n<li>la <strong>longueur de point</strong> ;</li>\n<li>la <strong>pression du pied presseur</strong> : suffisante pour entraîner, pas au point de marquer la fleur ;</li>\n<li>la <strong>vitesse</strong> : réduite dans les courbes et les angles ;</li>\n<li>le <strong>guide</strong> de distance au bord.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> diagnostiquer un point mal formé. 1) Piquez un essai sur deux chutes du même cuir que la pièce. 2) Observez le dessus et le dessous. 3) Si le fil de canette apparaît en petites boucles sur le dessus, la tension d'aiguille est trop forte ou la tension de canette trop faible : desserrez légèrement la tension d'aiguille. 4) Si le fil d'aiguille forme des boucles dessous, la tension d'aiguille est trop faible : resserrez-la. 5) Si des points sont sautés, vérifiez l'aiguille (montée dans le bon sens, ni tordue ni émoussée, grosseur adaptée au fil), puis l'enfilage. 6) Si la fleur est marquée, réduisez la pression du pied ou changez de pied. 7) Ne modifiez qu'un réglage à la fois et refaites un essai ; si le défaut persiste, faites appel au mécanicien.</div>"
      },
      {
       "titre": "Le collage",
       "contenu": "<p>Le collage du cuir utilise surtout des <strong>colles de contact</strong> à base de polychloroprène (dites colles néoprène) ou de polyuréthane, en solution dans des solvants ou en phase aqueuse, et des colles thermofusibles. Pour une colle de contact, les étapes sont :</p>\n<ol>\n<li><strong>préparation des surfaces</strong> : propres, sèches, dépoussiérées ; une fleur très finie peut nécessiter un cardage ou un dégraissage pour que la colle accroche ;</li>\n<li><strong>encollage</strong> des deux surfaces, en couche fine et régulière, au pinceau, à la spatule, au rouleau ou à la machine ;</li>\n<li><strong>temps de séchage</strong> (temps d'évaporation) : on attend que la colle soit sèche au toucher, selon la fiche technique ;</li>\n<li><strong>assemblage</strong> dans le temps ouvert (période pendant laquelle la colle reste apte à coller) : on met les surfaces en contact avec précision, car on ne peut presque plus les déplacer ;</li>\n<li><strong>pression</strong> au marteau, au rouleau ou à la presse ;</li>\n<li><strong>temps de prise</strong> avant de solliciter fortement l'assemblage.</li>\n</ol>\n<p>Pour les colles polyuréthane utilisées en semelage, la colle sèche est souvent <strong>réactivée</strong> par la chaleur juste avant l'assemblage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les colles solvantées dégagent des vapeurs inflammables et nocives. Elles s'utilisent sous aspiration, loin de toute flamme ou étincelle, avec des récipients fermés après usage. La fiche de données de sécurité de chaque colle indique les dangers et les protections. Les colles en phase aqueuse réduisent fortement ces risques et sont préférées quand elles conviennent techniquement.</div>"
      },
      {
       "titre": "Thermocollage, soudage et mise en forme",
       "contenu": "<p>Le <strong>thermocollage</strong> se fait sous une presse chauffante en réglant trois paramètres : <strong>température</strong>, <strong>pression</strong> et <strong>temps</strong>, indiqués par le fournisseur du thermocollant et validés par essai sur le cuir réel (certaines finitions supportent mal la chaleur). Le <strong>laminage</strong> consiste à contrecoller en continu deux matières entre des rouleaux.</p>\n<p>Le <strong>soudage</strong> des matières thermoplastiques (haute fréquence, ultrasons) produit des assemblages étanches et des effets décoratifs (gaufrage, matelassage soudé).</p>\n<p>La <strong>mise en forme</strong> donne au cuir un volume durable :</p>\n<ul>\n<li>le <strong>préformage</strong> : le cuir humidifié ou chauffé est mis en forme sur un moule (bout dur et contrefort de chaussure, coque de sac) ;</li>\n<li>le <strong>pressage</strong> sous presse chauffante, pour des pièces moulées ou embouties ;</li>\n<li>l'utilisation de matériaux à <strong>mémoire de forme</strong> (thermoplastiques) qui conservent la forme acquise à chaud.</li>\n</ul>\n<p>Le cuir tanné au végétal se moule particulièrement bien après humidification, ce qui en fait la matière de choix pour la gainerie et les étuis moulés.</p>"
      },
      {
       "titre": "Organiser le poste de piquage",
       "contenu": "<p>Un poste de piquage bien organisé améliore la qualité et réduit la fatigue. Les pièces à piquer sont disposées d'un côté, les pièces piquées de l'autre, dans le sens du flux. Les fournitures (fils de rechange, canettes préparées, aiguilles) sont à portée de main. L'éclairage est dirigé sur la zone de l'aiguille. Le siège et la pédale sont réglés pour que l'opérateur ait le dos droit et les avant-bras à hauteur du plateau.</p>\n<p>Avant de commencer une série, l'opérateur vérifie la fiche de poste : type de point, longueur, couleur et référence du fil, distance au bord, type d'arrêt, et il réalise un essai qu'il compare à l'échantillon de référence. Pendant la série, il contrôle régulièrement la régularité de la piqûre et l'état de l'aiguille.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les canettes sont souvent préparées à l'avance par un bobinoir indépendant, et l'on surveille leur niveau : une canette qui se vide au milieu d'une piqûre apparente oblige à une reprise toujours visible sur un bord teint. Certains ateliers changent de canette avant chaque longue piqûre visible.</div>"
      }
     ],
     "points_cles": [
      "La préparation comprend refendage, parage, traçage, pose de renforts, rembordage, teinture de tranche et marquages.",
      "Machines plates, à bras et à colonne se choisissent selon l'accès à la pièce.",
      "Le triple entraînement fait avancer régulièrement les couches de cuir superposées.",
      "Le point noué (301) est le point standard ; le point de chaînette est élastique mais se défait.",
      "Aiguille à pointe coupante, fil et longueur de point se règlent ensemble.",
      "On équilibre les tensions du fil d'aiguille et du fil de canette, un réglage à la fois.",
      "Colle de contact : encollage des deux faces, séchage, assemblage dans le temps ouvert, pression.",
      "Thermocollage : température, pression et temps validés par essai.",
      "Les colles solvantées s'utilisent sous aspiration, loin des flammes, selon leur fiche de données de sécurité."
     ],
     "lexique": [
      {
       "terme": "Refendage",
       "def": "Mise à épaisseur uniforme d'une pièce de cuir à la machine à refendre."
      },
      {
       "terme": "Machine à parer",
       "def": "Machine qui amincit les bords du cuir à l'aide d'un couteau en cloche tournant."
      },
      {
       "terme": "Triple entraînement",
       "def": "Système où griffe, aiguille et pied presseur font avancer ensemble la matière."
      },
      {
       "terme": "Point noué",
       "def": "Point formé par l'entrecroisement d'un fil d'aiguille et d'un fil de canette."
      },
      {
       "terme": "Canette",
       "def": "Petite bobine de fil placée sous le plateau, qui fournit le fil inférieur du point noué."
      },
      {
       "terme": "Colle de contact",
       "def": "Colle appliquée sur les deux surfaces, séchée, puis assemblée sous pression."
      },
      {
       "terme": "Temps ouvert",
       "def": "Période pendant laquelle une colle appliquée reste apte à réaliser un collage."
      },
      {
       "terme": "Réactivation",
       "def": "Chauffage d'un film de colle sec pour le rendre à nouveau collant avant assemblage."
      },
      {
       "terme": "Préformage",
       "def": "Mise en forme d'une pièce de cuir sur un moule avant assemblage."
      }
     ]
    },
    {
     "id": "bcuir-gamme-temps-industrialisation",
     "titre": "Nomenclature, gamme, temps et dossier d'industrialisation",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Construire l'arborescence d'un produit à partir de sa nomenclature",
      "Rédiger une gamme de fabrication ordonnée et cohérente",
      "Calculer des temps, une cadence, un rendement et un effectif",
      "Équilibrer une chaîne simple de postes",
      "Identifier le contenu d'un dossier d'industrialisation"
     ],
     "sections": [
      {
       "titre": "De la nomenclature à l'arborescence",
       "contenu": "<p>La <strong>nomenclature</strong> liste les composants du produit. Pour organiser la fabrication, on la présente sous forme d'<strong>arborescence</strong> : le produit fini est au sommet ; en dessous, les sous-ensembles ; en dessous encore, les composants qui les forment. Chaque niveau correspond à une étape d'assemblage.</p>\n<p>Exemple décrit pour un sac cabas : au niveau 0, le sac fini. Au niveau 1, quatre sous-ensembles : le corps extérieur, la doublure équipée, les poignées, la quincaillerie. Au niveau 2, le corps extérieur se décompose en devant, dos, fond et renforts ; la doublure équipée en doublure devant, doublure dos, poche intérieure et fermeture ; chaque poignée en dessus de poignée, dessous de poignée, jonc de garnissage.</p>\n<p>L'arborescence montre ce qui peut être fabriqué <strong>en parallèle</strong> (poignées et doublure peuvent être préparées en même temps sur des postes différents) et ce qui doit être fait <strong>avant</strong> (la doublure doit être équipée avant d'être assemblée au corps). Elle est la base de la gamme et du planning.</p>"
      },
      {
       "titre": "La gamme de fabrication",
       "contenu": "<p>La <strong>gamme de fabrication</strong> (ou gamme opératoire, ou gamme de montage) décrit dans l'ordre toutes les opérations nécessaires pour fabriquer le produit. Pour chaque opération, elle précise :</p>\n<ul>\n<li>le numéro d'ordre (souvent de 10 en 10, pour pouvoir insérer une opération : 10, 20, 30…) ;</li>\n<li>la désignation de l'opération, avec un verbe d'action (parer, encoller, remborder, piquer, poser, contrôler) ;</li>\n<li>le poste ou la machine ;</li>\n<li>les outillages et gabarits ;</li>\n<li>les paramètres principaux (longueur de point, température, colle) ;</li>\n<li>le temps alloué ;</li>\n<li>les contrôles à réaliser.</li>\n</ul>\n<table>\n<thead><tr><th>N°</th><th>Opération</th><th>Poste</th><th>Outillage, paramètres</th><th>Temps (min)</th></tr></thead>\n<tbody>\n<tr><td>10</td><td>Parer les bords du devant et du dos</td><td>Machine à parer</td><td>Parage 8 mm, épaisseur restante 0,6 mm</td><td>1,2</td></tr>\n<tr><td>20</td><td>Thermocoller les renforts</td><td>Presse chauffante</td><td>Selon fiche du thermocollant</td><td>0,8</td></tr>\n<tr><td>30</td><td>Encoller et remplier le bord d'ouverture</td><td>Établi, machine à remplier</td><td>Colle en phase aqueuse</td><td>2,0</td></tr>\n<tr><td>40</td><td>Piquer les attaches de poignées</td><td>Machine plate triple entraînement</td><td>4 points/cm, gabarit de traçage</td><td>1,5</td></tr>\n<tr><td>50</td><td>Assembler corps et fond</td><td>Machine à bras</td><td>Couture retournée 6 mm</td><td>3,0</td></tr>\n<tr><td>60</td><td>Contrôler le sous-ensemble</td><td>Poste de contrôle</td><td>Fiche de contrôle</td><td>0,5</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une gamme doit être suffisamment précise pour qu'un opérateur qualifié qui ne connaît pas le modèle puisse le réaliser sans aide, et intégrer les contrôles aux bons moments, pas seulement à la fin.</div>"
      },
      {
       "titre": "Les temps de fabrication",
       "contenu": "<p>Le temps est une donnée essentielle pour le coût, le délai et l'organisation. On distingue :</p>\n<ul>\n<li>le <strong>temps opératoire</strong> (ou temps unitaire) : temps nécessaire pour réaliser une opération sur une pièce ou un produit ;</li>\n<li>le <strong>temps de préparation</strong> (ou de réglage) : temps pour préparer le poste avant une série (changer de fil, régler la machine, faire un essai) ; il est réparti sur la quantité de la série ;</li>\n<li>le <strong>temps alloué</strong> (ou temps standard) : temps de référence attribué à l'opération, qui inclut des majorations pour la fatigue et les besoins personnels ; il sert au calcul des coûts et à l'organisation ;</li>\n<li>le <strong>temps total de fabrication</strong> d'un produit : somme des temps alloués de toutes les opérations.</li>\n</ul>\n<p>Les temps sont établis par <strong>chronométrage</strong> (on mesure plusieurs fois l'opération réalisée par un opérateur entraîné) ou à partir de <strong>tables de temps</strong> et de bases de données de l'entreprise. Ils s'expriment souvent en minutes décimales (1,5 min = 1 min 30 s) ou en centièmes de minute.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> 1,5 minute ne vaut pas 1 minute 50 secondes. Pour convertir des minutes décimales en minutes et secondes, multipliez la partie décimale par 60 : 0,5 × 60 = 30 s ; 2,25 min = 2 min 15 s.</div>"
      },
      {
       "titre": "Cadence, rendement et effectif",
       "contenu": "<p>Quelques grandeurs permettent d'organiser une production :</p>\n<ul>\n<li>la <strong>cadence</strong> : nombre de produits fabriqués par unité de temps (par heure, par jour) ;</li>\n<li>le <strong>temps de cycle</strong> (ou takt) : temps disponible divisé par la quantité demandée ; c'est l'intervalle de temps entre deux produits sortant de l'atelier ;</li>\n<li>le <strong>rendement</strong> (ou efficience) d'un opérateur ou d'un atelier : production réelle divisée par la production théorique, ou temps alloué produit divisé par temps de présence, en pourcentage ;</li>\n<li>l'<strong>effectif théorique</strong> : temps total de fabrication de la commande divisé par le temps de travail disponible d'un opérateur.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un effectif et un rendement. Données : temps alloué d'un sac 48 min ; commande de 150 sacs à livrer en 5 jours ; 7 h de travail par jour et par opérateur. 1) Temps total : 150 × 48 = 7 200 min, soit 7 200 / 60 = 120 h. 2) Temps disponible par opérateur : 5 × 7 = 35 h. 3) Effectif théorique : 120 / 35 = 3,43, donc 4 opérateurs (arrondi à l'entier supérieur). 4) Temps de cycle : temps disponible de l'atelier sur la période, 5 × 7 × 60 = 2 100 min, divisé par 150 sacs = 14 min par sac. 5) Rendement : si un opérateur, présent 7 h (420 min), a produit en une journée des opérations représentant 378 min de temps alloué, son rendement vaut 378 / 420 × 100 = 90 %.</div>"
      },
      {
       "titre": "Équilibrer une chaîne",
       "contenu": "<p>Dans une organisation en chaîne, chaque opérateur réalise un groupe d'opérations (un <strong>poste</strong>). La chaîne avance au rythme du poste le plus lent, appelé <strong>goulot</strong>. <strong>Équilibrer</strong> la chaîne consiste à répartir les opérations pour que la charge de chaque poste soit proche du temps de cycle, sans le dépasser, en respectant l'ordre de la gamme et les machines disponibles.</p>\n<table>\n<thead><tr><th>Poste</th><th>Opérations</th><th>Charge (min)</th><th>Temps de cycle (min)</th><th>Taux de charge</th></tr></thead>\n<tbody>\n<tr><td>1 Préparation</td><td>10, 20, 30</td><td>4,0</td><td>4,5</td><td>89 %</td></tr>\n<tr><td>2 Piquage</td><td>40, 50</td><td>4,5</td><td>4,5</td><td>100 %</td></tr>\n<tr><td>3 Finition et contrôle</td><td>60, 70, 80</td><td>3,6</td><td>4,5</td><td>80 %</td></tr>\n</tbody>\n</table>\n<p>Le <strong>taux de charge</strong> d'un poste est sa charge divisée par le temps de cycle. Dans cet exemple, le poste 2 est le goulot : la moindre perturbation à ce poste ralentit toute la chaîne. On peut le soulager en transférant une opération compatible vers le poste 3, qui dispose de 0,9 min de marge, si la machine nécessaire y est disponible. L'<strong>efficacité d'équilibrage</strong> se calcule par : somme des charges / (nombre de postes × temps de cycle) = (4,0 + 4,5 + 3,6) / (3 × 4,5) = 12,1 / 13,5 = 90 %.</p>"
      },
      {
       "titre": "La fiche de poste",
       "contenu": "<p>La <strong>fiche de poste</strong> (ou fiche d'instruction, ou mode opératoire) détaille une opération pour l'opérateur. Elle comprend : la référence du modèle et l'opération, un croquis ou une photo du résultat attendu, la liste des pièces et fournitures entrantes, les réglages de la machine, les gestes clés dans l'ordre, les points de contrôle et les défauts à éviter, les consignes de sécurité et d'ergonomie, et le temps alloué.</p>\n<p>Elle est affichée au poste et sert aussi à <strong>former</strong> les nouveaux opérateurs. Le prototypiste, qui a mis au point le procédé lors du prototype et de la présérie, est souvent chargé de la rédiger et d'accompagner les premières productions.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une bonne fiche de poste privilégie l'image et les verbes d'action courts. Les photographies « bon » et « mauvais » côte à côte (piqûre régulière ou non, rembordé net ou plissé) sont plus parlantes qu'un long texte, surtout dans les ateliers où travaillent des opérateurs de langues différentes.</div>"
      },
      {
       "titre": "Le dossier d'industrialisation",
       "contenu": "<p>Le <strong>dossier d'industrialisation</strong> rassemble tout ce qui permet de fabriquer le produit en série, de manière reproductible, dans l'entreprise ou chez un sous-traitant. Il est élaboré avec le technicien des méthodes. Il contient en général :</p>\n<ul>\n<li>la fiche technique du modèle (dessins, cotes, matières, fournitures, couleurs) ;</li>\n<li>la nomenclature et l'arborescence ;</li>\n<li>les gabarits validés (fichiers et références) et la liste des emporte-pièces ;</li>\n<li>les plans de placement et les consommations ;</li>\n<li>la gamme de fabrication, les fiches de poste et les temps ;</li>\n<li>les résultats d'essais et les procédés validés ;</li>\n<li>le plan de contrôle et les fiches de contrôle ;</li>\n<li>l'échantillon de référence (le « modèle type » scellé et signé).</li>\n</ul>\n<p>Le temps alloué total permet aussi d'estimer le <strong>coût de main-d'œuvre</strong> d'un produit : temps en heures multiplié par le coût horaire de l'atelier (salaire chargé et frais de structure, fixé par le service de gestion). Par exemple, 48 min font 0,8 h ; avec un coût horaire de 40 euros, la main-d'œuvre directe d'un sac revient à 0,8 × 40 = 32 euros. Ajouté au coût des matières et fournitures, ce montant donne une première estimation du coût de revient de fabrication, que le prototypiste peut comparer à la contrainte de coût du cahier des charges dès la phase de prototype.</p>\n<p>Toute modification ultérieure est enregistrée (date, nature, raison, validation) et diffusée à tous les détenteurs du dossier, en retirant les anciennes versions.</p>"
      }
     ],
     "points_cles": [
      "L'arborescence organise la nomenclature par niveaux d'assemblage et montre ce qui peut se faire en parallèle.",
      "La gamme ordonne les opérations avec poste, outillage, paramètres, temps et contrôles.",
      "Le temps alloué inclut des majorations et sert au calcul des coûts et à l'organisation.",
      "Pour convertir des minutes décimales, la partie décimale se multiplie par 60.",
      "Effectif théorique = temps total / temps disponible par opérateur, arrondi à l'entier supérieur.",
      "Le temps de cycle est le temps disponible divisé par la quantité demandée.",
      "Le goulot est le poste le plus chargé ; il impose le rythme de la chaîne.",
      "La fiche de poste guide et forme l'opérateur, avec images et points de contrôle.",
      "Le dossier d'industrialisation permet une fabrication reproductible, chez soi ou chez un sous-traitant."
     ],
     "lexique": [
      {
       "terme": "Arborescence",
       "def": "Représentation du produit en niveaux : produit fini, sous-ensembles, composants."
      },
      {
       "terme": "Gamme de fabrication",
       "def": "Liste ordonnée des opérations nécessaires pour fabriquer un produit."
      },
      {
       "terme": "Temps alloué",
       "def": "Temps de référence attribué à une opération, majorations comprises."
      },
      {
       "terme": "Cadence",
       "def": "Nombre de produits fabriqués par unité de temps."
      },
      {
       "terme": "Temps de cycle",
       "def": "Intervalle de temps entre deux produits, égal au temps disponible divisé par la quantité."
      },
      {
       "terme": "Rendement",
       "def": "Rapport entre la production réelle et la production théorique."
      },
      {
       "terme": "Goulot",
       "def": "Poste le plus chargé d'une chaîne, qui en limite le débit."
      },
      {
       "terme": "Équilibrage",
       "def": "Répartition des opérations entre postes pour égaliser leur charge."
      },
      {
       "terme": "Fiche de poste",
       "def": "Document qui décrit une opération, ses réglages, ses gestes clés et ses contrôles."
      },
      {
       "terme": "Dossier d'industrialisation",
       "def": "Ensemble des documents permettant de fabriquer un produit en série de manière reproductible."
      }
     ]
    },
    {
     "id": "bcuir-qualite-controle",
     "titre": "Qualité : contrôler le produit et améliorer le processus",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Définir la qualité d'un produit en cuir par rapport à un cahier des charges",
      "Organiser les contrôles aux différentes étapes de la fabrication",
      "Utiliser une fiche de contrôle et classer les défauts par gravité",
      "Appliquer un contrôle par prélèvement",
      "Analyser une non-conformité avec les outils de la qualité"
     ],
     "sections": [
      {
       "titre": "Qu'est-ce que la qualité",
       "contenu": "<p>La <strong>qualité</strong> est l'aptitude d'un produit à satisfaire les exigences, exprimées ou implicites, du client. Pour un produit en cuir, elle porte sur :</p>\n<ul>\n<li>l'<strong>aspect</strong> : matière sans défaut visible, nuance homogène, piqûres régulières, bords nets, symétrie ;</li>\n<li>la <strong>conformité</strong> au modèle : dimensions, matières, couleurs, accessoires, positions ;</li>\n<li>la <strong>fonction</strong> : solidité, fermetures qui fonctionnent, confort, tenue de forme ;</li>\n<li>la <strong>durabilité</strong> : comportement dans le temps, résistance à l'usage ;</li>\n<li>la <strong>sécurité</strong> et le respect de la réglementation : absence de substances interdites, étiquetage, tenue au feu en sellerie.</li>\n</ul>\n<p>Un produit est <strong>conforme</strong> quand il respecte les spécifications. La <strong>non-qualité</strong> coûte cher : matières perdues, temps de retouche, retours clients, image de marque dégradée. Il est toujours moins coûteux de prévenir un défaut que de le corriger.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la qualité se construit à chaque poste ; le contrôle final ne fait que constater. Chaque opérateur est le premier contrôleur de son propre travail (autocontrôle).</div>"
      },
      {
       "titre": "Les étapes du contrôle",
       "contenu": "<p>Les contrôles sont répartis tout au long du processus :</p>\n<table>\n<thead><tr><th>Étape</th><th>Objet du contrôle</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>Réception</td><td>Matières et fournitures</td><td>Coloris, épaisseur, surface, défauts, conformité des accessoires, procès-verbaux d'essais</td></tr>\n<tr><td>Coupe</td><td>Pièces coupées</td><td>Forme, zone qualitative, prêtant, appairage, nuance</td></tr>\n<tr><td>Préparation</td><td>Pièces préparées</td><td>Épaisseur de parage, rempli, bord teint, position des renforts</td></tr>\n<tr><td>Montage</td><td>Sous-ensembles</td><td>Piqûres, distances au bord, arrêts, symétrie, positions d'accessoires</td></tr>\n<tr><td>Produit fini</td><td>Produit complet</td><td>Aspect général, dimensions, fonctionnement, propreté, étiquetage</td></tr>\n<tr><td>Expédition</td><td>Conditionnement</td><td>Protection, emballage, quantités, documents</td></tr>\n</tbody>\n</table>\n<p>Un <strong>plan de contrôle</strong> définit pour chaque caractéristique : ce qu'on contrôle, avec quel moyen (visuel, gabarit, réglet, épaisseurmètre, échantillon de référence), à quelle fréquence, qui contrôle, et que faire en cas d'écart.</p>"
      },
      {
       "titre": "La fiche de contrôle et la gravité des défauts",
       "contenu": "<p>La <strong>fiche de contrôle</strong> liste les caractéristiques à vérifier, avec la valeur ou l'aspect attendu, la tolérance, le moyen de contrôle et une case de résultat. Les défauts sont classés par <strong>gravité</strong> :</p>\n<ul>\n<li><strong>défaut critique</strong> : rend le produit dangereux ou non conforme à la réglementation (arête coupante, substance interdite, défaut de tenue au feu) ; aucun n'est accepté ;</li>\n<li><strong>défaut majeur</strong> : altère la fonction ou l'aspect de façon visible pour le client (couture qui se défait, poignée décalée, trou dans une pièce visible, écart de nuance net) ; le produit est refusé ou retouché ;</li>\n<li><strong>défaut mineur</strong> : écart léger, peu visible, sans effet sur la fonction (petite irrégularité de bord teint à l'intérieur) ; il peut être toléré dans une certaine limite.</li>\n</ul>\n<table>\n<thead><tr><th>Caractéristique</th><th>Attendu</th><th>Moyen</th><th>Gravité si écart</th></tr></thead>\n<tbody>\n<tr><td>Distance de piqûre du bord d'ouverture</td><td>3 ± 0,5 mm, régulière</td><td>Réglet, gabarit</td><td>Majeur</td></tr>\n<tr><td>Hauteur du sac</td><td>260 ± 3 mm</td><td>Réglet</td><td>Majeur</td></tr>\n<tr><td>Arrêts de piqûre des attaches</td><td>Noués, invisibles côté endroit</td><td>Visuel</td><td>Majeur</td></tr>\n<tr><td>Bord teint intérieur de poche</td><td>Lisse, couvrant</td><td>Visuel, échantillon</td><td>Mineur</td></tr>\n<tr><td>Fermeture à glissière</td><td>Ouverture et fermeture sans accroc</td><td>Essai manuel, 5 cycles</td><td>Majeur</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Contrôle unitaire et contrôle par prélèvement",
       "contenu": "<p>Selon la valeur du produit et la quantité, on choisit :</p>\n<ul>\n<li>le <strong>contrôle unitaire</strong> (ou à 100 %) : chaque produit est contrôlé ; c'est la règle dans le luxe, en présérie et pour les caractéristiques critiques ;</li>\n<li>le <strong>contrôle par prélèvement</strong> (ou par échantillonnage) : on contrôle un échantillon du lot et on décide d'accepter ou de refuser tout le lot selon le nombre de défauts trouvés.</li>\n</ul>\n<p>Le contrôle par prélèvement s'appuie sur des tables normalisées (plans d'échantillonnage) qui indiquent, selon la taille du lot et le niveau de qualité acceptable (NQA), l'effectif de l'échantillon et le nombre maximal de défauts admis (critère d'acceptation).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> appliquer un plan d'échantillonnage donné. Données fournies par le plan de contrôle : lot de 500 portefeuilles ; échantillon de 50 pièces ; défauts majeurs : on accepte le lot si l'on trouve au plus 1 défaut majeur, on le refuse à partir de 2. 1) Prélevez 50 portefeuilles au hasard dans tout le lot (pas seulement le dessus du carton). 2) Contrôlez chacun selon la fiche. 3) Résultat : 2 défauts majeurs (une piqûre irrégulière, un écart de nuance). 4) Décision : 2 est supérieur au critère d'acceptation de 1, le lot est refusé. 5) Conséquence : tri à 100 % du lot, retouche ou rebut des pièces défectueuses, et recherche de la cause pour éviter la récidive.</div>"
      },
      {
       "titre": "Traiter une non-conformité",
       "contenu": "<p>Lorsqu'un défaut est détecté, on suit une démarche structurée :</p>\n<ol>\n<li><strong>isoler</strong> les produits non conformes (zone ou étiquette rouge) pour qu'ils ne repartent pas dans le flux ;</li>\n<li><strong>enregistrer</strong> le défaut sur une fiche de non-conformité : description, quantité, poste, date, photo ;</li>\n<li><strong>décider</strong> du traitement : retouche, déclassement (vente en second choix ou usage interne), rebut, ou acceptation par dérogation du client ;</li>\n<li><strong>rechercher la cause</strong> et mettre en place une <strong>action corrective</strong> pour qu'elle ne se reproduise pas ;</li>\n<li><strong>vérifier l'efficacité</strong> de l'action.</li>\n</ol>\n<p>Pour rechercher les causes, on utilise le <strong>diagramme d'Ishikawa</strong> (ou diagramme des 5M), qui classe les causes possibles en cinq familles : Matière, Méthode, Main-d'œuvre, Milieu, Moyens (machines et outillages). Exemple pour des piqûres irrégulières : matière (cuir d'épaisseur irrégulière), méthode (pas de gabarit de traçage), main-d'œuvre (opérateur nouveau non formé), milieu (éclairage insuffisant), moyens (aiguille émoussée, pied presseur usé). La méthode des <strong>5 pourquoi</strong> consiste à demander « pourquoi ? » successivement jusqu'à la cause profonde.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> retoucher les produits sans chercher la cause, c'est accepter que le défaut revienne. Une action corrective vise la cause (changer l'aiguille à intervalles fixés, former l'opérateur), pas seulement le produit défectueux.</div>"
      },
      {
       "titre": "Le diagramme de Pareto et le suivi",
       "contenu": "<p>Le <strong>diagramme de Pareto</strong> classe les types de défauts par fréquence décroissante. Il montre souvent qu'un petit nombre de causes produit la majorité des défauts : c'est sur elles qu'il faut agir en priorité.</p>\n<table>\n<thead><tr><th>Type de défaut (sur un mois)</th><th>Nombre</th><th>Pourcentage</th><th>Pourcentage cumulé</th></tr></thead>\n<tbody>\n<tr><td>Piqûre irrégulière</td><td>42</td><td>42 %</td><td>42 %</td></tr>\n<tr><td>Bord teint défectueux</td><td>28</td><td>28 %</td><td>70 %</td></tr>\n<tr><td>Écart de nuance</td><td>12</td><td>12 %</td><td>82 %</td></tr>\n<tr><td>Colle apparente</td><td>10</td><td>10 %</td><td>92 %</td></tr>\n<tr><td>Autres</td><td>8</td><td>8 %</td><td>100 %</td></tr>\n</tbody>\n</table>\n<p>Ici, deux types de défauts représentent 70 % du total : agir sur les piqûres et les bords teints apportera le plus grand gain. Le suivi des indicateurs (taux de défauts, taux de retouche, nombre de retours clients) dans le temps permet de vérifier que les actions sont efficaces.</p>"
      },
      {
       "titre": "Contrôler l'aspect de façon objective",
       "contenu": "<p>Le contrôle d'aspect est le plus fréquent dans les métiers du cuir, et le plus difficile à rendre objectif : deux contrôleurs peuvent juger différemment une petite cicatrice ou une piqûre légèrement irrégulière. Pour limiter cette subjectivité, l'entreprise fixe des conditions précises :</p>\n<ul>\n<li>un <strong>éclairage</strong> défini, suffisant et de couleur normalisée, identique pour tous les postes de contrôle ;</li>\n<li>une <strong>distance et une durée d'observation</strong> : par exemple, on observe le produit à bout de bras pendant quelques secondes, comme le ferait un client, puis de près pour les zones sensibles ;</li>\n<li>un <strong>échantillon de référence</strong> validé et signé, conservé à l'abri de la lumière, auquel on compare les produits ;</li>\n<li>un <strong>catalogue de défauts</strong> illustré, qui montre pour chaque type de défaut la limite entre l'acceptable et l'inacceptable (photos « limite acceptée » et « refusée ») ;</li>\n<li>une répartition du produit en <strong>zones de visibilité</strong> : zone 1 très visible (devant, rabat, claque), zone 2 visible à l'usage (dos, côtés), zone 3 cachée (intérieur, dessous) ; un même défaut peut être refusé en zone 1 et accepté en zone 3.</li>\n</ul>\n<p>Les contrôleurs sont formés et leurs jugements comparés régulièrement sur une série de produits témoins, pour s'assurer qu'ils appliquent les mêmes critères. Un écart constaté entre deux contrôleurs conduit à préciser le catalogue de défauts plutôt qu'à laisser chacun décider seul.</p>"
      },
      {
       "titre": "Démarche qualité dans l'entreprise",
       "contenu": "<p>Au-delà du contrôle, de nombreuses entreprises mettent en place un <strong>système de management de la qualité</strong>, parfois certifié selon la norme internationale ISO 9001. Il repose sur des principes : orientation client, approche par processus, amélioration continue, décisions fondées sur des faits, implication du personnel.</p>\n<p>L'amélioration continue est souvent représentée par le cycle <strong>PDCA</strong> : planifier (Plan), réaliser (Do), vérifier (Check), agir pour corriger et standardiser (Act). Les outils de l'organisation (5S pour l'ordre et la propreté des postes, standardisation des modes opératoires) contribuent aussi à la qualité.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les grandes marques réalisent des audits chez leurs fournisseurs et sous-traitants, et exigent la traçabilité : pour chaque produit, on doit pouvoir retrouver les lots de matières, les dates et les postes de fabrication. Le numéro de série ou de lot inscrit discrètement dans le produit rend cette traçabilité possible.</div>"
      }
     ],
     "points_cles": [
      "La qualité porte sur l'aspect, la conformité, la fonction, la durabilité et la sécurité.",
      "Les contrôles sont répartis de la réception à l'expédition, selon un plan de contrôle.",
      "Les défauts sont classés critiques, majeurs ou mineurs.",
      "Le contrôle par prélèvement accepte ou refuse un lot selon le critère d'acceptation.",
      "Une non-conformité est isolée, enregistrée, traitée, puis sa cause est corrigée.",
      "Le diagramme d'Ishikawa classe les causes selon les 5M.",
      "Le diagramme de Pareto identifie les défauts prioritaires.",
      "L'amélioration continue suit le cycle PDCA."
     ],
     "lexique": [
      {
       "terme": "Conformité",
       "def": "Respect des spécifications définies pour un produit."
      },
      {
       "terme": "Plan de contrôle",
       "def": "Document qui définit quoi contrôler, comment, quand, par qui et que faire en cas d'écart."
      },
      {
       "terme": "Défaut majeur",
       "def": "Défaut qui altère visiblement la fonction ou l'aspect du produit."
      },
      {
       "terme": "Contrôle par prélèvement",
       "def": "Contrôle d'un échantillon pour décider de l'acceptation de tout un lot."
      },
      {
       "terme": "NQA",
       "def": "Niveau de qualité acceptable utilisé dans les plans d'échantillonnage."
      },
      {
       "terme": "Action corrective",
       "def": "Action qui supprime la cause d'une non-conformité pour éviter sa récidive."
      },
      {
       "terme": "Diagramme d'Ishikawa",
       "def": "Diagramme qui classe les causes d'un problème selon les 5M."
      },
      {
       "terme": "Diagramme de Pareto",
       "def": "Classement des causes ou défauts par fréquence décroissante."
      },
      {
       "terme": "PDCA",
       "def": "Cycle d'amélioration continue : planifier, réaliser, vérifier, agir."
      },
      {
       "terme": "Traçabilité",
       "def": "Capacité à retrouver l'historique d'un produit : matières, dates, postes."
      }
     ]
    },
    {
     "id": "bcuir-equipements-maintenance",
     "titre": "Équipements de production et maintenance de premier niveau",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire l'architecture d'une machine de l'atelier cuir par ses chaînes d'énergie et d'information",
      "Distinguer maintenance corrective et préventive, et situer le premier niveau",
      "Établir une fiche de maintenance régulière d'une machine à coudre",
      "Diagnostiquer les défauts de piquage courants et y remédier",
      "Respecter les règles de sécurité et d'environnement liées à la maintenance"
     ],
     "sections": [
      {
       "titre": "Le parc machines d'un atelier cuir",
       "contenu": "<p>Un atelier de maroquinerie, de chaussure ou de sellerie dispose d'un parc varié : machines de coupe (presses à découper, découpeur numérique, machine à bandes), machines de préparation (machine à refendre, machine à parer, machine à remplier, presse à thermocoller, ponceuse de tranche, machine à teindre les tranches), machines à coudre de différents types, machines de montage (en chaussure : machine à monter les bouts, à monter les flancs et les talons, presse à semelles, réactivateur de colle) et machines de finition (brosses, fers, presses à marquer).</p>\n<p>Chaque machine peut se décrire par :</p>\n<ul>\n<li>sa <strong>chaîne d'énergie</strong> : alimentation (électrique, pneumatique), distribution (interrupteur, distributeur), conversion (moteur, vérin), transmission (courroie, engrenages, cames), action sur la matière (aiguille, lame, plateau de presse) ;</li>\n<li>sa <strong>chaîne d'information</strong> : capteurs (position de l'aiguille, présence de pièce, pression), traitement (carte électronique, automate), commandes et affichage (pédale, boutons, écran de réglage).</li>\n</ul>\n<p>Les machines à coudre modernes possèdent un <strong>moteur à entraînement direct</strong> piloté électroniquement : positionnement de l'aiguille en haut ou en bas à l'arrêt, coupe-fil automatique, points d'arrêt programmés, levée automatique du pied. Ces fonctions améliorent la régularité, mais se règlent par menus, selon la notice du constructeur.</p>"
      },
      {
       "titre": "Les formes de maintenance",
       "contenu": "<p>La <strong>maintenance</strong> regroupe les actions qui maintiennent ou rétablissent un équipement dans un état lui permettant d'assurer sa fonction. On distingue :</p>\n<ul>\n<li>la <strong>maintenance corrective</strong> : intervention après une panne ou un défaut ; elle peut être palliative (dépannage provisoire) ou curative (réparation définitive) ;</li>\n<li>la <strong>maintenance préventive</strong> : intervention avant la panne, pour réduire sa probabilité ; elle est <strong>systématique</strong> (à intervalle fixe : chaque jour, chaque semaine, toutes les 500 heures) ou <strong>conditionnelle</strong> (déclenchée par l'état constaté : usure mesurée, bruit anormal, échauffement).</li>\n</ul>\n<p>Les interventions sont classées par <strong>niveaux</strong> selon leur complexité. Le <strong>premier niveau</strong> correspond à des actions simples réalisées par l'utilisateur de la machine, avec les moyens du poste et en suivant les instructions du constructeur : nettoyage, lubrification simple, remplacement d'éléments consommables accessibles sans démontage (aiguille, pied presseur, canette), vérifications visuelles et de bon fonctionnement. Les niveaux supérieurs sont réalisés par des techniciens de maintenance ou le service du fabricant.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> au premier niveau, l'opérateur entretient, vérifie et signale. Il n'ouvre pas les carters électriques et ne neutralise jamais un dispositif de sécurité ; au-delà de ses compétences, il appelle le mécanicien.</div>"
      },
      {
       "titre": "L'entretien régulier d'une machine à coudre",
       "contenu": "<p>La machine à coudre accumule des poussières de cuir et de fil, surtout sous la plaque à aiguille, autour de la griffe et du crochet. Ces dépôts absorbent l'huile, freinent les mécanismes et provoquent des défauts de piqûre. Un entretien régulier est donc indispensable.</p>\n<table>\n<thead><tr><th>Fréquence</th><th>Opérations de premier niveau (exemples, à adapter à la notice)</th></tr></thead>\n<tbody>\n<tr><td>Avant chaque utilisation</td><td>Vérifier l'état de l'aiguille, l'enfilage, le niveau d'huile si la machine a un réservoir visible ; faire un essai sur chute</td></tr>\n<tr><td>En fin de journée</td><td>Machine arrêtée et débranchée : nettoyer au pinceau la zone de la griffe, du crochet et du boîtier de canette ; essuyer le plateau ; couvrir la machine</td></tr>\n<tr><td>En fin de semaine</td><td>Démonter la plaque à aiguille selon la notice, nettoyer soigneusement, lubrifier les points indiqués avec l'huile préconisée, vérifier l'état des pieds et de la griffe</td></tr>\n<tr><td>Avant une longue période d'arrêt</td><td>Nettoyage complet, lubrification, protection contre la poussière et l'humidité ; consigner l'état de la machine</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> toute intervention de nettoyage ou de changement d'aiguille se fait machine <strong>à l'arrêt</strong> et moteur coupé. Avec un moteur électronique, la machine peut démarrer au moindre appui sur la pédale, même si elle semble silencieuse.</div>"
      },
      {
       "titre": "Diagnostiquer les défauts de piquage",
       "contenu": "<p>Les défauts de piquage ont souvent une cause simple, accessible au premier niveau. La démarche consiste à aller du plus simple au plus complexe.</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Causes fréquentes</th><th>Actions de premier niveau</th></tr></thead>\n<tbody>\n<tr><td>Points mal formés, boucles</td><td>Tensions déséquilibrées, enfilage incorrect, fil sorti d'un guide</td><td>Réenfiler entièrement, régler les tensions sur une chute</td></tr>\n<tr><td>Points manqués (sautés)</td><td>Aiguille mal montée, tordue ou émoussée, grosseur inadaptée</td><td>Remplacer l'aiguille, vérifier son sens et sa hauteur de montage</td></tr>\n<tr><td>Casse du fil d'aiguille</td><td>Tension trop forte, chas trop petit, aiguille abîmée, fil de mauvaise qualité</td><td>Desserrer la tension, adapter l'aiguille, changer de bobine</td></tr>\n<tr><td>Cuir marqué</td><td>Pression du pied trop forte, pied ou griffe abîmés</td><td>Réduire la pression, changer de pied, signaler l'usure de la griffe</td></tr>\n<tr><td>Fil de canette visible dessus</td><td>Tension d'aiguille trop forte ou canette trop lâche</td><td>Rééquilibrer les tensions</td></tr>\n<tr><td>Bruit anormal, échauffement</td><td>Manque de lubrification, poussières, pièce usée</td><td>Arrêter, nettoyer et lubrifier ; si persistance, appeler le mécanicien</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> conduire un diagnostic de premier niveau. 1) Décrivez précisément le symptôme (sur quelle couche, à quelle vitesse, depuis quand). 2) Vérifiez d'abord ce qui se change le plus souvent : aiguille, enfilage, canette. 3) Faites un essai sur chute après chaque action, en ne modifiant qu'un élément à la fois. 4) Notez les actions et leur effet. 5) Si le défaut persiste après les vérifications de premier niveau, arrêtez la machine, signalez-la (étiquette « en panne ») et transmettez au mécanicien la description et la liste des actions déjà faites : cela lui fait gagner du temps.</div>"
      },
      {
       "titre": "Les autres équipements",
       "contenu": "<p>Les autres machines ont leurs propres points d'entretien :</p>\n<ul>\n<li><strong>machine à parer</strong> : affûtage du couteau en cloche à la meule intégrée, selon la notice ; nettoyage des copeaux ; contrôle de l'usure du rouleau d'entraînement ;</li>\n<li><strong>presse à découper</strong> : vérification du fonctionnement des sécurités (commande bimanuelle, barrières immatérielles), état du plateau de coupe (on le déplace ou on le rabote quand il est trop marqué), état des emporte-pièces (lame émoussée ou ébréchée) ;</li>\n<li><strong>découpeur numérique</strong> : remplacement des lames selon le compteur d'usure, nettoyage du tapis, contrôle de l'aspiration ;</li>\n<li><strong>presse à thermocoller</strong> : propreté des plateaux, vérification de la température réelle à l'aide d'un thermomètre de contact ou de bandes thermosensibles ;</li>\n<li><strong>compresseur et réseau d'air</strong> : purge des condensats, contrôle des fuites.</li>\n</ul>\n<p>Pour la chaussure, s'ajoutent les machines de montage, les réactivateurs et les presses à semelles, dont les réglages de température et de pression doivent être vérifiés régulièrement.</p>"
      },
      {
       "titre": "Planifier et tracer la maintenance",
       "contenu": "<p>La maintenance préventive est organisée par un <strong>planning de maintenance</strong> qui fixe, pour chaque machine, les opérations, leur fréquence et le responsable. Chaque machine a souvent un <strong>carnet</strong> ou une fiche de vie qui enregistre les interventions, les pannes, les pièces changées et les durées d'arrêt.</p>\n<p>Ces données permettent de calculer des indicateurs simples, comme le nombre de pannes par mois ou le temps d'arrêt cumulé, et d'adapter les fréquences d'entretien : une machine qui tombe souvent en panne pour le même motif nécessite une action préventive renforcée.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans les petits ateliers sans service de maintenance, le prototypiste ou le chef d'atelier est souvent l'interlocuteur du mécanicien extérieur. Préparer la liste des machines à réviser, avec les symptômes observés, réduit le temps et le coût de son intervention. Lors des fermetures annuelles, on planifie les révisions lourdes.</div>"
      },
      {
       "titre": "Sécurité et environnement en maintenance",
       "contenu": "<p>Les opérations de maintenance exposent à des risques particuliers : mise en marche intempestive, coupures par les lames et les aiguilles, projections lors de l'utilisation de l'air comprimé, contact avec les huiles. Les règles de base sont : <strong>consignation</strong> de la machine (arrêt, coupure de l'énergie, vérification de l'absence de mouvement) avant toute intervention à l'intérieur ; port des protections adaptées ; remise en place de tous les carters et protecteurs avant la remise en service.</p>\n<p>Côté <strong>environnement</strong>, les huiles usagées, chiffons souillés, aérosols vides, lames et aiguilles usagées sont des déchets à trier et à éliminer par les filières prévues ; ils ne doivent jamais être jetés avec les ordures ordinaires ni dans les évacuations d'eau. On évite de nettoyer les machines à l'air comprimé, qui disperse les poussières dans l'atelier : on préfère le pinceau et l'aspiration.</p>\n<p>Enfin, la maintenance contribue à la <strong>sobriété énergétique</strong> de l'atelier : un réseau d'air comprimé sans fuite, des presses chauffantes éteintes en dehors des périodes d'utilisation, des moteurs électroniques qui ne consomment presque rien à l'arrêt, des machines bien réglées qui ne produisent pas de rebuts. Une machine bien entretenue dure plus longtemps, ce qui réduit aussi l'impact lié à la fabrication de machines neuves.</p>"
      }
     ],
     "points_cles": [
      "Une machine se décrit par sa chaîne d'énergie et sa chaîne d'information.",
      "La maintenance corrective intervient après la panne, la préventive avant, de façon systématique ou conditionnelle.",
      "Le premier niveau regroupe nettoyage, lubrification simple, remplacement de consommables et vérifications.",
      "Toute intervention se fait machine arrêtée et énergie coupée.",
      "Pour un défaut de piquage, on vérifie d'abord aiguille, enfilage, canette et tensions.",
      "On ne modifie qu'un élément à la fois et on fait un essai après chaque action.",
      "Le carnet de machine et le planning de maintenance tracent et organisent les interventions.",
      "Huiles, chiffons souillés, lames et aiguilles usagées suivent des filières de déchets spécifiques."
     ],
     "lexique": [
      {
       "terme": "Chaîne d'énergie",
       "def": "Ensemble des éléments qui alimentent, distribuent, convertissent et transmettent l'énergie jusqu'à l'action."
      },
      {
       "terme": "Chaîne d'information",
       "def": "Ensemble des éléments qui acquièrent, traitent et communiquent les informations de commande."
      },
      {
       "terme": "Maintenance corrective",
       "def": "Maintenance effectuée après la détection d'une panne."
      },
      {
       "terme": "Maintenance préventive systématique",
       "def": "Maintenance réalisée à intervalles fixes, quel que soit l'état de l'équipement."
      },
      {
       "terme": "Maintenance conditionnelle",
       "def": "Maintenance déclenchée par l'état constaté de l'équipement."
      },
      {
       "terme": "Premier niveau",
       "def": "Actions simples de maintenance réalisées par l'utilisateur avec les moyens du poste."
      },
      {
       "terme": "Consignation",
       "def": "Mise en sécurité d'une machine par coupure et condamnation de ses énergies avant intervention."
      },
      {
       "terme": "Crochet",
       "def": "Organe rotatif de la machine à coudre qui saisit la boucle du fil d'aiguille pour former le point."
      },
      {
       "terme": "Griffe",
       "def": "Pièce dentée sous la plaque à aiguille qui fait avancer la matière."
      }
     ]
    },
    {
     "id": "bcuir-securite-ergonomie",
     "titre": "Santé, sécurité et ergonomie à l'atelier cuir",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Identifier les risques propres aux postes de l'atelier cuir",
      "Appliquer les principes généraux de prévention à une situation de travail",
      "Utiliser une fiche de données de sécurité pour une colle ou un solvant",
      "Organiser un poste de travail selon les règles d'ergonomie",
      "Adopter la conduite à tenir en cas d'accident à l'atelier"
     ],
     "sections": [
      {
       "titre": "Les risques de l'atelier cuir",
       "contenu": "<p>Les métiers du cuir exposent à des risques variés, liés aux outils, aux machines, aux produits et aux postures. Ce chapitre les aborde du point de vue du poste de travail du prototypiste et de l'opérateur ; les notions générales de prévention sont approfondies dans l'enseignement de prévention-santé-environnement.</p>\n<table>\n<thead><tr><th>Risque</th><th>Situations typiques</th><th>Conséquences possibles</th></tr></thead>\n<tbody>\n<tr><td>Coupure</td><td>Tranchet, cutter, lames de parage, emporte-pièces, découpeur</td><td>Plaies de la main et des doigts</td></tr>\n<tr><td>Écrasement, piqûre</td><td>Presse à découper, presse à semelles, aiguille de machine à coudre, machine à monter</td><td>Écrasement des doigts, piqûre de l'aiguille dans le doigt</td></tr>\n<tr><td>Chimique</td><td>Colles solvantées, nettoyants, teintures, apprêts</td><td>Irritations, allergies, maux de tête, effets sur le système nerveux</td></tr>\n<tr><td>Incendie, explosion</td><td>Vapeurs de solvants, poussières, chiffons imbibés</td><td>Brûlures, destruction de l'atelier</td></tr>\n<tr><td>Poussières</td><td>Ponçage des tranches et des cuirs, cardage</td><td>Irritation respiratoire ; les poussières de cuir sont classées cancérogènes pour l'être humain par le Centre international de recherche sur le cancer</td></tr>\n<tr><td>Bruit</td><td>Presses, compresseurs, machines de montage</td><td>Fatigue, perte auditive</td></tr>\n<tr><td>Troubles musculosquelettiques</td><td>Gestes répétitifs, postures assises prolongées, efforts de la main (coupe, montage)</td><td>Douleurs du poignet, de l'épaule, du dos</td></tr>\n<tr><td>Brûlure</td><td>Presses chauffantes, fers, réactivateurs, brûleurs de fil</td><td>Brûlures de la main</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Les principes de prévention appliqués à l'atelier",
       "contenu": "<p>Le Code du travail fixe neuf <strong>principes généraux de prévention</strong>, dont le premier est d'éviter les risques, puis de les évaluer, de les combattre à la source, d'adapter le travail à l'homme, de tenir compte de l'évolution de la technique, de remplacer ce qui est dangereux par ce qui l'est moins, de planifier la prévention, de donner la priorité aux protections collectives sur les protections individuelles, et de donner les instructions appropriées.</p>\n<p>Appliqués à l'atelier cuir, ils conduisent par exemple à :</p>\n<ul>\n<li><strong>supprimer</strong> ou <strong>remplacer</strong> : utiliser une colle en phase aqueuse au lieu d'une colle solvantée quand c'est techniquement possible ;</li>\n<li><strong>protéger collectivement</strong> : aspiration à la source au poste d'encollage et de ponçage, carters sur les courroies et les lames, commande bimanuelle sur les presses ;</li>\n<li><strong>protéger individuellement</strong>, en complément : gant anti-coupure pour la main qui maintient le cuir lors de la coupe au tranchet, protections auditives près des machines bruyantes, lunettes lors de l'affûtage ;</li>\n<li><strong>former et informer</strong> : fiches de poste avec consignes de sécurité, formation à l'utilisation de chaque machine.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'équipement de protection individuelle vient en dernier, quand le risque n'a pas pu être supprimé ou réduit par des moyens collectifs. Il doit être adapté au poste : un gant peut être dangereux près d'une pièce en rotation qui risque de l'entraîner.</div>"
      },
      {
       "titre": "Couper en sécurité",
       "contenu": "<p>La coupe manuelle au tranchet ou au cutter est à l'origine de nombreux accidents. Les règles de base :</p>\n<ul>\n<li>couper sur un support adapté (plaque de coupe), sur un plan de travail stable, à bonne hauteur ;</li>\n<li>toujours couper <strong>en éloignant la lame</strong> du corps et de la main qui maintient la pièce ;</li>\n<li>maintenir la main d'appui hors de la trajectoire de la lame, à plat sur le gabarit ;</li>\n<li>utiliser une lame bien affûtée : une lame émoussée oblige à forcer et dérape ;</li>\n<li>ranger les lames dans un étui ou un support, jamais dans une poche ou au milieu des pièces ;</li>\n<li>jeter les lames usagées dans un collecteur rigide.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne rattrape jamais un outil tranchant qui tombe. On s'écarte et on le ramasse une fois au sol. La plupart des coupures graves de la cuisse et de la main proviennent de ce réflexe.</div>"
      },
      {
       "titre": "Lire une fiche de données de sécurité",
       "contenu": "<p>Chaque produit chimique dangereux (colle, solvant, teinture, nettoyant) est accompagné d'une <strong>fiche de données de sécurité</strong> (FDS), fournie par le fabricant et structurée en seize rubriques normalisées. Son étiquette porte des <strong>pictogrammes de danger</strong> (losanges à bord rouge), une mention d'avertissement (« Danger » ou « Attention »), des mentions de danger et des conseils de prudence.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> extraire l'essentiel d'une FDS de colle néoprène solvantée. 1) Rubrique 2 (identification des dangers) : relevez les pictogrammes, par exemple flamme (liquide et vapeurs très inflammables), point d'exclamation (irritation, somnolence ou vertiges), et éventuellement silhouette endommagée (danger pour la santé à long terme) ; lisez les mentions de danger. 2) Rubrique 7 (manipulation et stockage) : utiliser à l'écart de toute source d'ignition, récipients fermés, local ventilé. 3) Rubrique 8 (contrôle de l'exposition et protection individuelle) : aspiration locale, type de gants résistants aux solvants indiqués, protection respiratoire si la ventilation est insuffisante. 4) Rubrique 4 (premiers secours) : conduite à tenir en cas d'inhalation, de contact avec la peau ou les yeux. 5) Rubrique 13 (élimination) : les pots et pinceaux souillés sont des déchets dangereux. 6) Reportez ces consignes sur la fiche de poste d'encollage.</div>"
      },
      {
       "titre": "Ergonomie du poste",
       "contenu": "<p>L'<strong>ergonomie</strong> vise à adapter le poste à la personne. Dans les métiers du cuir, le travail est minutieux, répétitif et souvent assis, ce qui favorise les troubles musculosquelettiques (TMS). Quelques principes :</p>\n<ul>\n<li><strong>hauteur de travail</strong> : les avant-bras sont à peu près horizontaux, les épaules relâchées ; une table de coupe debout est plus haute qu'un poste d'assemblage assis ;</li>\n<li><strong>siège</strong> réglable en hauteur, avec dossier, pieds à plat sur le sol ou sur un repose-pied ;</li>\n<li><strong>zone d'atteinte</strong> : les pièces et outils les plus utilisés sont à portée de main, sans torsion du buste ;</li>\n<li><strong>éclairage</strong> suffisant et sans éblouissement sur la zone de travail ;</li>\n<li><strong>outils</strong> adaptés : manches ergonomiques, lames affûtées, pinces à remplier qui limitent l'effort des doigts ;</li>\n<li><strong>alternance des tâches</strong> et pauses courtes pour varier les sollicitations.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les opérateurs qui montent des tiges de chaussure à la pince ou qui rembordent à la main sollicitent fortement les poignets. Les ateliers organisent la rotation des postes et mettent à disposition des outils motorisés (machines à remplier, machines à monter) pour réduire ces efforts. Les douleurs persistantes doivent être signalées tôt au médecin du travail.</div>"
      },
      {
       "titre": "Bruit, poussières et incendie",
       "contenu": "<p>Pour le <strong>bruit</strong>, le Code du travail fixe des valeurs d'exposition sur une journée de 8 heures : à partir de 80 dB(A), l'employeur met des protections auditives à disposition ; à partir de 85 dB(A), leur port est obligatoire et des mesures de réduction doivent être engagées ; 87 dB(A) est la valeur limite à ne pas dépasser, protections comprises.</p>\n<p>Les <strong>poussières</strong> de ponçage sont captées à la source par une aspiration au poste ; le nettoyage se fait à l'aspirateur, jamais à la soufflette.</p>\n<p>Le risque d'<strong>incendie</strong> est réel dans un atelier qui stocke cuirs, colles et solvants : stockage des produits inflammables dans une armoire ventilée prévue à cet effet, quantité limitée au poste, chiffons souillés dans une poubelle métallique à couvercle, extincteurs adaptés et accessibles, issues dégagées. Chacun doit connaître l'emplacement des extincteurs et le plan d'évacuation.</p>"
      },
      {
       "titre": "Conduite à tenir en cas d'accident",
       "contenu": "<p>En cas d'accident à l'atelier, on applique la démarche : <strong>protéger</strong> (arrêter la machine, supprimer le danger pour soi, la victime et les autres), <strong>alerter</strong> (sauveteur secouriste du travail de l'atelier, responsable, secours : 15, 18 ou 112, en indiquant le lieu exact, la nature de l'accident et l'état de la victime), <strong>secourir</strong> selon sa formation (compression d'une plaie qui saigne abondamment, rinçage abondant à l'eau d'un œil touché par un produit).</p>\n<p>Tout accident, même léger, est signalé au responsable et inscrit au registre prévu : une petite coupure due à un tranchet mal rangé révèle une situation qui pourrait provoquer un accident plus grave. L'analyse de l'accident permet de modifier l'organisation du poste.</p>\n<p>Chaque atelier doit disposer d'une <strong>trousse de secours</strong> adaptée et de personnes formées au secourisme. Les numéros d'urgence et le nom des sauveteurs secouristes du travail sont affichés. Pour les projections de produits chimiques dans les yeux, un rince-œil doit être accessible près des postes d'encollage et de teinture.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'employeur consigne les risques de chaque unité de travail dans le document unique d'évaluation des risques professionnels, mis à jour au moins une fois par an dans les entreprises d'au moins onze salariés et à chaque changement important (nouvelle machine, nouveau produit). Le prototypiste qui introduit une nouvelle colle ou un nouveau procédé doit le signaler, pour que l'évaluation soit mise à jour et que les consignes du poste soient adaptées.</div>"
      }
     ],
     "points_cles": [
      "Les risques principaux sont la coupure, l'écrasement, le risque chimique, l'incendie, les poussières, le bruit et les TMS.",
      "Les principes généraux de prévention donnent la priorité à la suppression du risque et aux protections collectives.",
      "On coupe toujours en éloignant la lame du corps et de la main d'appui.",
      "On ne rattrape jamais un outil tranchant qui tombe.",
      "La FDS indique dangers, précautions, protections, premiers secours et élimination.",
      "Un poste ergonomique règle hauteur, siège, zone d'atteinte, éclairage et outils.",
      "Bruit : protections à disposition dès 80 dB(A), port obligatoire dès 85 dB(A), limite de 87 dB(A).",
      "En cas d'accident : protéger, alerter, secourir, puis signaler et analyser."
     ],
     "lexique": [
      {
       "terme": "Principes généraux de prévention",
       "def": "Neuf principes du Code du travail qui guident la démarche de prévention."
      },
      {
       "terme": "Protection collective",
       "def": "Dispositif qui protège toutes les personnes exposées : aspiration, carter, commande bimanuelle."
      },
      {
       "terme": "EPI",
       "def": "Équipement de protection individuelle porté par le travailleur."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité d'un produit chimique, en seize rubriques."
      },
      {
       "terme": "Pictogramme de danger",
       "def": "Symbole en losange à bord rouge indiquant un type de danger d'un produit."
      },
      {
       "terme": "TMS",
       "def": "Troubles musculosquelettiques, affections des muscles, tendons et nerfs liées aux gestes et postures."
      },
      {
       "terme": "Ergonomie",
       "def": "Adaptation du poste et des outils à la personne qui travaille."
      },
      {
       "terme": "dB(A)",
       "def": "Unité de niveau sonore pondérée pour tenir compte de la sensibilité de l'oreille."
      }
     ]
    },
    {
     "id": "bcuir-projet-prototype",
     "titre": "Conduire un projet de prototype : de l'idée à la soutenance",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Situer un projet de modification ou d'amélioration d'un produit existant",
      "Planifier les étapes d'un projet de prototype et en suivre l'avancement",
      "Utiliser les moyens d'expression graphique pour proposer et justifier des modifications",
      "Évaluer le coût et la qualité d'un prototype",
      "Construire un dossier de synthèse et préparer une soutenance technique"
     ],
     "sections": [
      {
       "titre": "Le projet dans le métier",
       "contenu": "<p>Le prototypiste travaille rarement sur un produit totalement nouveau. Le plus souvent, il <strong>modifie</strong> ou <strong>améliore</strong> un produit existant : nouvelle déclinaison d'un modèle, correction d'un défaut constaté en après-vente, adaptation à une nouvelle matière, simplification pour réduire le coût, ajout d'une fonction (poche, fermeture, bandoulière amovible). C'est aussi le cadre du projet évalué en terminale : réaliser un prototype par modification ou amélioration d'un produit existant, avec une démarche de contrôle qualité, puis présenter ce travail devant un jury.</p>\n<p>Un <strong>projet</strong> est un ensemble d'actions coordonnées, limité dans le temps, qui vise un résultat défini avec des ressources données. Il part d'un <strong>cahier des charges</strong> esthétique et fonctionnel validé : sans cahier des charges, on ne sait ni ce qu'il faut obtenir ni comment juger le résultat.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un projet de prototype réussi n'est pas seulement un bel objet : c'est un objet conforme au cahier des charges, réalisé selon une démarche traçable, dont les choix sont justifiés et le coût évalué.</div>"
      },
      {
       "titre": "Les étapes de la démarche",
       "contenu": "<p>La démarche de projet suit des étapes qui reprennent les savoirs étudiés tout au long de la formation :</p>\n<ol>\n<li><strong>Situer le projet</strong> : analyser le produit existant (fonctions, forme, matières, construction, défauts éventuels), le contexte de l'entreprise, la demande.</li>\n<li><strong>Rechercher des solutions</strong> : croquis, recherches de formes et de détails, documentation sur les matières et les procédés.</li>\n<li><strong>Choisir et justifier</strong> : comparaison des solutions avec une grille de choix, validation par le client ou le tuteur.</li>\n<li><strong>Concevoir</strong> : patron, gabarits manuels ou numériques, nomenclature.</li>\n<li><strong>Tester</strong> : maquette, essais techniques de bords, d'assemblages, de colles.</li>\n<li><strong>Réaliser</strong> le prototype en organisant son poste et en suivant une gamme.</li>\n<li><strong>Contrôler</strong> le prototype par rapport au cahier des charges, et l'optimiser.</li>\n<li><strong>Évaluer le coût</strong> et rédiger les documents techniques.</li>\n<li><strong>Communiquer</strong> : dossier de synthèse et soutenance.</li>\n</ol>\n<p>Ces étapes ne sont pas strictement linéaires : un essai raté renvoie à la recherche de solutions, un contrôle non conforme à la conception. Il faut prévoir du temps pour ces retours en arrière.</p>"
      },
      {
       "titre": "Planifier et suivre",
       "contenu": "<p>Un projet se <strong>planifie</strong> : on liste les tâches, on estime leur durée, on repère celles qui dépendent d'autres (on ne coupe pas avant d'avoir validé les gabarits) et on les place dans le temps. Le <strong>diagramme de Gantt</strong> est l'outil le plus courant : chaque tâche est représentée par une barre horizontale sur une échelle de temps (semaines), ce qui montre l'enchaînement et les chevauchements possibles.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir un planning de projet sur 10 semaines. 1) Listez les tâches et estimez leur durée : analyse 1 semaine ; recherches et croquis 2 ; choix et validation 1 ; patron et gabarits 2 ; essais et maquette 1 ; réalisation 2 ; contrôle et optimisation 0,5 ; dossier et préparation de soutenance 1,5. 2) Total : 11 semaines, soit une de trop. 3) Repérez les tâches qui peuvent se chevaucher : la rédaction du dossier peut commencer dès la semaine 5 (analyse, recherches et choix sont déjà rédigeables) ; les essais peuvent débuter pendant la fin des gabarits. 4) Placez les jalons : validation du choix en fin de semaine 4, validation des gabarits en fin de semaine 6, prototype terminé en fin de semaine 9. 5) Chaque semaine, comparez l'avancement réel au planning et notez les écarts dans un carnet de bord.</div>\n<p>Le <strong>carnet de bord</strong> (ou journal de projet) consigne au fil du temps les décisions, les essais, les difficultés et leurs solutions, avec des photos. Il est précieux pour rédiger le dossier final et répondre aux questions du jury.</p>"
      },
      {
       "titre": "S'exprimer graphiquement",
       "contenu": "<p>Les <strong>arts appliqués</strong> fournissent au prototypiste les moyens d'exprimer et de justifier des propositions. Dans un projet, on utilise :</p>\n<ul>\n<li>des <strong>croquis de recherche</strong> rapides, nombreux, pour explorer des variantes (forme d'un rabat, position d'une couture, profil d'un talon) ;</li>\n<li>des <strong>croquis annotés</strong> qui expliquent un détail technique ou une modification par des flèches et des légendes ;</li>\n<li>des <strong>rendus</strong> en couleur (feutres, aquarelle, logiciels) pour présenter les coloris et l'effet des matières ;</li>\n<li>des <strong>planches de présentation</strong> qui organisent les images, les échantillons de matières et les textes ;</li>\n<li>des <strong>photographies</strong> du prototype, bien éclairées, sur fond neutre, selon plusieurs angles.</li>\n</ul>\n<p>La <strong>culture artistique</strong> nourrit aussi la recherche : connaître l'histoire de la chaussure, de la malle et du sac, les grands styles décoratifs, les créateurs et les savoir-faire d'art permet de proposer des modifications cohérentes avec l'esprit d'un produit et de la marque. Une modification doit s'inscrire dans le style existant (lignes, proportions, codes de la marque) ou en assumer clairement la rupture.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un beau dessin ne suffit pas à justifier une modification. Chaque proposition doit être reliée au cahier des charges : quelle fonction elle améliore, quelle contrainte elle respecte, quel essai la valide.</div>"
      },
      {
       "titre": "Évaluer le coût du prototype et du produit",
       "contenu": "<p>L'évaluation du coût porte sur le <strong>coût matière</strong> (cuir, doublure, renforts, fournitures) et le <strong>coût de main-d'œuvre</strong> (temps multiplié par un coût horaire). Pour le produit de série, on raisonne avec les consommations calculées à partir du placement et les temps alloués de la gamme ; le prototype, lui, coûte toujours beaucoup plus cher qu'un produit de série, car il inclut la conception, les essais et les gestes non optimisés.</p>\n<table>\n<thead><tr><th>Poste de coût (produit de série)</th><th>Calcul</th><th>Montant</th></tr></thead>\n<tbody>\n<tr><td>Cuir</td><td>0,35 m² × 85 €/m²</td><td>29,75 €</td></tr>\n<tr><td>Doublure</td><td>0,25 m × 12 €/m</td><td>3,00 €</td></tr>\n<tr><td>Renforts et colles</td><td>Forfait</td><td>2,50 €</td></tr>\n<tr><td>Fournitures (fermeture, anneaux, pieds)</td><td>Selon nomenclature</td><td>6,80 €</td></tr>\n<tr><td>Main-d'œuvre</td><td>1,2 h × 40 €/h</td><td>48,00 €</td></tr>\n<tr><td><strong>Total</strong></td><td></td><td><strong>90,05 €</strong></td></tr>\n</tbody>\n</table>\n<p>Les prix et coûts horaires de cet exemple sont fictifs. La comparaison du total avec la contrainte de coût du cahier des charges peut conduire à revoir des choix : remplacer une pièce cuir cachée par une matière moins chère, simplifier une opération longue, utiliser un emporte-pièce polyvalent existant.</p>"
      },
      {
       "titre": "Le dossier de synthèse",
       "contenu": "<p>Le <strong>dossier de synthèse</strong> présente le projet de façon claire et concise (une dizaine de pages pour le projet d'examen). Un plan efficace :</p>\n<ol>\n<li>présentation du contexte et du produit existant ;</li>\n<li>cahier des charges de la modification ;</li>\n<li>recherches et choix justifiés (croquis, grille de choix) ;</li>\n<li>conception : extraits de patron et de gabarits, nomenclature ;</li>\n<li>essais techniques présentés sous forme de tableau (essais, constats, choix) ;</li>\n<li>réalisation : gamme simplifiée, difficultés rencontrées et solutions ;</li>\n<li>contrôle qualité : fiche de contrôle du prototype et actions d'optimisation ;</li>\n<li>coût estimé ;</li>\n<li>bilan : conformité au cahier des charges, améliorations possibles, ce que le projet a appris.</li>\n</ol>\n<p>La partie consacrée au contrôle qualité du prototype mérite un soin particulier. On y présente une fiche de contrôle construite à partir du cahier des charges : pour chaque exigence (dimension, aspect, fonction), la valeur attendue, la valeur mesurée ou le constat, et un verdict. Les écarts constatés débouchent sur des actions d'<strong>optimisation</strong> : correction d'un gabarit, changement de réglage, modification d'un ordre d'opérations. Montrer l'avant et l'après d'une optimisation, par exemple deux photos d'un angle rembordé avant et après modification du cran, est très convaincant.</p>\n<p>Le dossier se lit vite : titres explicites, illustrations légendées, tableaux plutôt que longs paragraphes, vocabulaire technique exact. On évite de recopier des généralités sur le cuir : le jury attend le travail personnel du candidat.</p>"
      },
      {
       "titre": "Préparer la soutenance",
       "contenu": "<p>La <strong>soutenance</strong> comprend une présentation du candidat puis un entretien avec un jury de professeurs et de professionnels. Pour la réussir :</p>\n<ul>\n<li>construire une présentation qui suit le fil du projet, sans relire le dossier, avec quelques supports visuels choisis et le prototype en main ;</li>\n<li>montrer les essais et les pièces intermédiaires, qui prouvent la démarche ;</li>\n<li>expliquer les choix avec le vocabulaire technique précis (bord rembordé, parage, prêtant, taux de chute) ;</li>\n<li>présenter honnêtement les défauts du prototype et ce que l'on ferait autrement : un jury apprécie la lucidité ;</li>\n<li>chronométrer sa présentation et la répéter devant quelqu'un.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la présentation d'un prototype au styliste, au chef de produit ou au client est une situation quotidienne. Savoir expliquer en quelques minutes ce qui a été modifié, pourquoi, avec quelles conséquences sur le coût et le délai, est une compétence aussi recherchée que la qualité du geste.</div>"
      }
     ],
     "points_cles": [
      "Le prototypiste modifie ou améliore le plus souvent un produit existant.",
      "Un projet part d'un cahier des charges validé et vise un résultat conforme, traçable et chiffré.",
      "Les étapes vont de l'analyse à la communication, avec des retours en arrière prévus.",
      "Le diagramme de Gantt planifie les tâches, leurs durées, leurs dépendances et les jalons.",
      "Le carnet de bord consigne décisions, essais, difficultés et solutions.",
      "Les croquis, rendus et planches expriment les propositions ; chaque choix se justifie par le cahier des charges.",
      "Le coût d'un produit additionne matières et main-d'œuvre ; un prototype coûte plus cher qu'un produit de série.",
      "Le dossier de synthèse est concis et personnel ; la soutenance montre la démarche et les choix."
     ],
     "lexique": [
      {
       "terme": "Projet",
       "def": "Ensemble d'actions coordonnées, limité dans le temps, visant un résultat défini."
      },
      {
       "terme": "Jalon",
       "def": "Étape clé d'un projet, marquée par une validation."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Représentation des tâches d'un projet par des barres sur une échelle de temps."
      },
      {
       "terme": "Carnet de bord",
       "def": "Journal où l'on consigne l'avancement, les décisions et les essais d'un projet."
      },
      {
       "terme": "Croquis de recherche",
       "def": "Dessin rapide servant à explorer des variantes."
      },
      {
       "terme": "Planche de présentation",
       "def": "Document qui organise images, échantillons et textes pour présenter un projet."
      },
      {
       "terme": "Coût matière",
       "def": "Somme des coûts des matières et fournitures entrant dans un produit."
      },
      {
       "terme": "Dossier de synthèse",
       "def": "Document concis qui présente la démarche et les résultats d'un projet."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Option chaussures",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bcuir-chaussure-pied-forme",
     "titre": "Le pied, la forme et les systèmes de pointures",
     "niveau": "1re",
     "options": [
      "chaussures"
     ],
     "duree": 45,
     "objectifs": [
      "Décrire l'anatomie fonctionnelle du pied utile au chaussant",
      "Identifier les parties et les mesures d'une forme de chaussure",
      "Expliquer la relation entre le pied, la forme et la chaussure",
      "Convertir des pointures entre les principaux systèmes",
      "Relever et vérifier les mesures d'une forme"
     ],
     "sections": [
      {
       "titre": "Le pied, une structure en mouvement",
       "contenu": "<p>Le pied humain comporte 26 os principaux, répartis en trois groupes : le <strong>tarse</strong> (7 os, dont le calcanéum qui forme le talon), le <strong>métatarse</strong> (5 os longs) et les <strong>phalanges</strong> (14 os des orteils). Ces os sont reliés par des articulations, des ligaments et des muscles qui permettent au pied d'amortir les chocs, de s'adapter au sol et de propulser le corps.</p>\n<p>Plusieurs zones intéressent directement le chaussant :</p>\n<ul>\n<li>le <strong>talon</strong>, qui reçoit le poids au moment de l'attaque du pas ;</li>\n<li>la <strong>voûte plantaire</strong>, arche qui ne touche pas le sol côté intérieur ; c'est la zone de la <strong>cambrure</strong> de la chaussure ;</li>\n<li>les <strong>articulations métatarso-phalangiennes</strong>, zone la plus large de l'avant-pied, où le pied se plie à chaque pas : c'est le <strong>pli de marche</strong>, à l'emplacement de l'emboîtage de la chaussure ;</li>\n<li>le <strong>cou-de-pied</strong>, partie supérieure du pied entre la cheville et l'avant-pied, sur laquelle porte le laçage ;</li>\n<li>les <strong>orteils</strong>, qui ont besoin d'un espace suffisant pour se déployer.</li>\n</ul>\n<p>Le pied n'est pas symétrique : le bord intérieur est plus cambré, la malléole intérieure (bosse de la cheville) est plus haute que l'extérieure, et l'avant-pied s'oriente légèrement vers l'intérieur. C'est pourquoi une chaussure gauche et une chaussure droite sont différentes, et pourquoi le patron d'une tige comporte un côté intérieur et un côté extérieur distincts.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> au pas, le pied s'allonge et s'élargit légèrement sous la charge, puis se plie à l'emboîtage. Une chaussure doit laisser une aisance devant les orteils et tenir fermement le talon et le cou-de-pied.</div>"
      },
      {
       "titre": "La forme, moule de la chaussure",
       "contenu": "<p>La <strong>forme</strong> est le volume sur lequel on monte la tige de la chaussure. Elle n'est pas une copie du pied : elle représente un pied « idéalisé » et intègre le style de la chaussure (forme de la pointe, hauteur de talon) ainsi que les aisances nécessaires. Elle est fabriquée par un formier, le plus souvent en polyéthylène haute densité ; les formes en bois subsistent dans le sur-mesure. Les formes de série sont souvent <strong>articulées</strong> (en deux parties reliées par une charnière ou un mécanisme) pour pouvoir être retirées de la chaussure terminée sans l'abîmer.</p>\n<p>Les parties de la forme portent des noms précis :</p>\n<table>\n<thead><tr><th>Partie</th><th>Description</th></tr></thead>\n<tbody>\n<tr><td>Pointe (ou bout)</td><td>Extrémité avant, dont la forme (ronde, carrée, pointue, en amande) définit le style</td></tr>\n<tr><td>Emboîtage</td><td>Zone la plus large de l'avant-pied, correspondant aux articulations métatarso-phalangiennes</td></tr>\n<tr><td>Cou-de-pied</td><td>Dessus de la forme entre l'emboîtage et l'ouverture</td></tr>\n<tr><td>Cambrure</td><td>Partie creuse du dessous de la forme, entre l'emboîtage et le talon</td></tr>\n<tr><td>Talon</td><td>Arrière arrondi de la forme, qui épouse le talon du pied</td></tr>\n<tr><td>Dessous de forme</td><td>Surface plantaire, sur laquelle on pose la première de montage</td></tr>\n<tr><td>Arête</td><td>Ligne de jonction entre les côtés et le dessous de forme</td></tr>\n</tbody>\n</table>\n<p>La <strong>hauteur de talon</strong> est intégrée à la forme : une forme pour talon de 70 mm ne convient pas pour un talon de 30 mm, car la cambrure et l'appui de l'avant-pied sont différents. La <strong>surlongueur</strong> (ou allonge de pointe) est la longueur de forme au-delà des orteils : elle est importante pour une pointe effilée, faible pour une pointe ronde.</p>"
      },
      {
       "titre": "Les mesures de la forme",
       "contenu": "<p>Le prototypiste relève sur la forme des mesures qui servent au patronage et au contrôle :</p>\n<ul>\n<li>la <strong>longueur de forme</strong>, de l'arrière du talon à l'extrémité de la pointe, mesurée en suivant une méthode définie (au ruban sur le dessous ou en projection) ;</li>\n<li>le <strong>tour d'emboîtage</strong> (ou tour des articulations), mesuré au ruban autour de la zone la plus large de l'avant-pied ;</li>\n<li>le <strong>tour de cou-de-pied</strong>, mesuré autour de la forme au niveau du cou-de-pied ;</li>\n<li>la <strong>largeur du dessous</strong> à l'emboîtage et au talon ;</li>\n<li>la <strong>hauteur de talon</strong> pour laquelle la forme a été conçue ;</li>\n<li>des repères de construction : point de talon, ligne de cambrure, ligne d'emboîtage.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> relever le tour d'emboîtage. 1) Repérez sur la forme les deux points les plus saillants de l'emboîtage, côté intérieur (articulation du gros orteil) et côté extérieur (articulation du petit orteil) ; ils ne sont pas à la même distance du talon. 2) Faites passer un ruban souple autour de la forme en reliant ces deux points, par-dessus et par-dessous, sans serrer ni laisser de jeu. 3) Lisez la valeur en millimètres, par exemple 232 mm. 4) Recommencez deux fois ; retenez la moyenne si les valeurs diffèrent de plus de 1 mm. 5) Notez la valeur sur la fiche de forme avec la pointure et la référence du formier. 6) Comparez avec la valeur annoncée par le formier : un écart signale une erreur de mesure ou une forme non conforme.</div>"
      },
      {
       "titre": "Les systèmes de pointures",
       "contenu": "<p>La <strong>pointure</strong> exprime la taille d'une chaussure. Plusieurs systèmes coexistent :</p>\n<table>\n<thead><tr><th>Système</th><th>Unité de base</th><th>Principe</th></tr></thead>\n<tbody>\n<tr><td>Français (dit continental ou point de Paris)</td><td>Point de Paris = 2/3 cm, soit environ 6,67 mm</td><td>La pointure correspond à la longueur de la forme exprimée en points de Paris : pointure = longueur de forme (cm) × 1,5</td></tr>\n<tr><td>Anglais</td><td>Un tiers de pouce, soit environ 8,47 mm</td><td>Échelle différente pour enfants et adultes ; demi-pointures courantes</td></tr>\n<tr><td>Américain</td><td>Même pas que l'anglais</td><td>Décalé par rapport à l'anglais, avec des échelles différentes pour hommes et femmes</td></tr>\n<tr><td>Mondopoint</td><td>Millimètre</td><td>Indique la longueur (et éventuellement la largeur) du pied en mm ; utilisé notamment pour les chaussures de ski et les chaussures techniques</td></tr>\n</tbody>\n</table>\n<p>Ainsi, en système français, une forme de 26,67 cm correspond à la pointure 40 (26,67 × 1,5 = 40), et passer d'une pointure à la suivante allonge la forme de 6,67 mm. Les correspondances entre systèmes ne sont jamais parfaitement exactes, car elles reposent sur des points de départ et des conventions différents : les entreprises utilisent des tableaux de conversion propres à leurs formes.</p>\n<p>Outre la longueur, le <strong>chaussant</strong> (ou largeur) varie : une même pointure peut exister en plusieurs largeurs, désignées par des lettres ou des chiffres selon les fabricants. Le chaussant est surtout défini par le tour d'emboîtage.</p>"
      },
      {
       "titre": "Du pied à la pointure",
       "contenu": "<p>La forme est plus longue que le pied, pour laisser l'aisance nécessaire aux orteils pendant la marche. On estime souvent cette aisance de l'ordre de 1 à 2 cm selon le type de chaussure et la forme de la pointe. On en déduit une relation approximative :</p>\n<p><strong>pointure française ≈ (longueur du pied en cm + aisance en cm) × 1,5</strong></p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer la pointure d'une cliente. 1) Mesurez le pied en charge (debout), du talon à l'extrémité du plus long orteil, avec un pédimètre ou une règle contre un mur : 24,2 cm. 2) Mesurez l'autre pied et retenez le plus long. 3) Ajoutez l'aisance prévue pour le modèle, par exemple 1,5 cm pour un escarpin à bout amande : 25,7 cm. 4) Calculez : 25,7 × 1,5 = 38,55. 5) Proposez la pointure 38,5 si le modèle existe en demi-pointure, sinon faites essayer 38 et 39. 6) Vérifiez par l'essayage, car la largeur et la hauteur du cou-de-pied comptent autant que la longueur.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> cette relation n'est qu'une estimation. L'aisance réelle dépend de la forme : deux chaussures de même pointure peuvent chausser très différemment si elles sont montées sur des formes de styles différents. Seule la longueur de forme fait foi pour le patronage.</div>"
      },
      {
       "titre": "Choisir et préparer la forme pour le patronage",
       "contenu": "<p>Le modèle est toujours développé sur une <strong>forme de base</strong>, dans une pointure de référence (souvent une pointure moyenne de la gamme, par exemple 38 ou 39 pour la femme, 42 pour l'homme, selon les habitudes de l'entreprise). Avant de tracer, on vérifie :</p>\n<ul>\n<li>que la forme correspond au style du dessin (pointe, hauteur de talon, cambrure) ;</li>\n<li>que la forme gauche et la forme droite sont bien appairées ;</li>\n<li>que la forme est propre et ne présente pas de choc ou de déformation.</li>\n</ul>\n<p>On recouvre ensuite la forme d'un adhésif de masquage, en bandes qui se chevauchent sans plis, sur le côté extérieur et le côté intérieur. On y trace l'axe du dessus de forme et les repères principaux : point de talon, ligne de l'arête, ligne d'emboîtage, ligne de cou-de-pied. Ces repères servent ensuite à placer les lignes du modèle (hauteur de quartier, ligne de claque, emplacement du laçage).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les formes représentent un investissement important, puisqu'il en faut une paire par pointure et par largeur, en plusieurs exemplaires pour la production. Une marque réutilise donc ses formes sur plusieurs modèles et collections. Le prototypiste doit connaître les formes disponibles et leurs particularités de chaussant.</div>"
      },
      {
       "titre": "Les aisances et le confort",
       "contenu": "<p>Le confort d'une chaussure dépend de la cohérence entre le pied, la forme et la tige. Les principaux critères de chaussant sont :</p>\n<ul>\n<li>une <strong>longueur</strong> suffisante devant les orteils, sans excès qui ferait glisser le pied vers l'avant ;</li>\n<li>un <strong>tour d'emboîtage</strong> adapté, qui maintient l'avant-pied sans le comprimer ;</li>\n<li>un <strong>maintien du talon</strong> assuré par le contrefort et la forme de l'arrière de la tige ;</li>\n<li>un <strong>cou-de-pied</strong> correctement tenu par le laçage ou la hauteur de la claque, pour que le pied ne glisse pas ;</li>\n<li>un <strong>pli de marche</strong> situé au bon endroit : la semelle doit fléchir à l'emboîtage, pas ailleurs.</li>\n</ul>\n<p>La hauteur de talon déplace la charge vers l'avant-pied : plus le talon est haut, plus l'avant-pied supporte de poids et plus le maintien du cou-de-pied devient important pour éviter que le pied glisse vers la pointe.</p>"
      }
     ],
     "points_cles": [
      "Le pied compte 26 os principaux répartis entre tarse, métatarse et phalanges.",
      "L'emboîtage correspond aux articulations métatarso-phalangiennes, zone la plus large et pli de marche.",
      "La forme est un pied idéalisé qui intègre le style, la hauteur de talon et les aisances.",
      "Longueur de forme, tour d'emboîtage et tour de cou-de-pied sont les mesures de base.",
      "Le point de Paris vaut 2/3 cm ; pointure française = longueur de forme (cm) × 1,5.",
      "Passer d'une pointure française à la suivante allonge la forme d'environ 6,67 mm.",
      "Les conversions entre systèmes ne sont qu'approximatives.",
      "Le modèle se développe sur une forme de base dans une pointure de référence."
     ],
     "lexique": [
      {
       "terme": "Forme",
       "def": "Volume sur lequel on monte la tige d'une chaussure, représentant un pied idéalisé."
      },
      {
       "terme": "Emboîtage",
       "def": "Zone la plus large de l'avant-pied, au niveau des articulations métatarso-phalangiennes."
      },
      {
       "terme": "Cambrure",
       "def": "Partie creuse du dessous de forme, sous la voûte plantaire."
      },
      {
       "terme": "Cou-de-pied",
       "def": "Partie supérieure du pied entre l'avant-pied et la cheville."
      },
      {
       "terme": "Point de Paris",
       "def": "Unité du système français de pointures, égale à 2/3 de centimètre."
      },
      {
       "terme": "Mondopoint",
       "def": "Système de pointures exprimant la longueur du pied en millimètres."
      },
      {
       "terme": "Chaussant",
       "def": "Largeur et volume intérieur d'une chaussure pour une pointure donnée."
      },
      {
       "terme": "Surlongueur",
       "def": "Longueur de la forme au-delà des orteils, liée au style de la pointe."
      },
      {
       "terme": "Formier",
       "def": "Fabricant de formes de chaussures."
      }
     ]
    },
    {
     "id": "bcuir-chaussure-tiges",
     "titre": "Constructions de tiges et patronage sur forme",
     "niveau": "1re-Tle",
     "options": [
      "chaussures"
     ],
     "duree": 50,
     "objectifs": [
      "Nommer les pièces d'une tige et leur fonction",
      "Distinguer les constructions derby, richelieu, escarpin, mocassin et boots",
      "Établir un patron moyen à partir de la copie de forme",
      "Extraire les pièces de la tige avec leurs valeurs de montage",
      "Ordonner les opérations de piquage d'une tige"
     ],
     "sections": [
      {
       "titre": "Les pièces de la tige",
       "contenu": "<p>La <strong>tige</strong> est la partie supérieure de la chaussure, qui enveloppe le dessus du pied. Elle est assemblée à plat ou presque, puis montée sur la forme. Ses principales pièces sont :</p>\n<table>\n<thead><tr><th>Pièce</th><th>Situation et fonction</th></tr></thead>\n<tbody>\n<tr><td>Claque (ou empeigne)</td><td>Partie avant qui couvre les orteils et le dessus de l'avant-pied</td></tr>\n<tr><td>Quartiers</td><td>Parties latérales et arrière, qui entourent le talon ; un quartier extérieur et un quartier intérieur, assemblés à l'arrière</td></tr>\n<tr><td>Bout rapporté</td><td>Pièce qui couvre l'extrémité de la claque (richelieu à bout rapporté, bout fleuri perforé)</td></tr>\n<tr><td>Languette</td><td>Pièce sous le laçage, qui protège le cou-de-pied</td></tr>\n<tr><td>Tirant, contrefort extérieur, garant</td><td>Pièces de renfort ou de décor à l'arrière</td></tr>\n<tr><td>Doublures</td><td>Doublure de claque, doublure de quartiers, talonnette, première de propreté</td></tr>\n<tr><td>Renforts intérieurs</td><td>Bout dur (à l'avant, protège et maintient la forme des orteils), contrefort (à l'arrière, maintient le talon)</td></tr>\n</tbody>\n</table>\n<p>Selon le modèle, certaines pièces sont réunies (claque et quartiers d'une seule pièce dans un escarpin coupé d'une pièce, par exemple) ou ajoutées (pièces de décor, empiècements).</p>"
      },
      {
       "titre": "Les grandes constructions",
       "contenu": "<p>Quelques constructions de base structurent la plupart des modèles :</p>\n<ul>\n<li><strong>Derby</strong> : les quartiers sont posés <strong>sur</strong> la claque ; les deux ailettes de laçage sont libres à leur base, ce qui donne un laçage dit ouvert, facile à chausser et adaptable aux cous-de-pied forts.</li>\n<li><strong>Richelieu</strong> : la claque est posée <strong>sur</strong> les quartiers ; les ailettes sont cousues sous la claque, ce qui donne un laçage fermé, plus élégant et plus ajusté.</li>\n<li><strong>Escarpin</strong> : chaussure décolletée, sans fermeture, maintenue par la tension de la tige autour du pied ; la ligne de décolleté et la tenue au talon sont décisives.</li>\n<li><strong>Mocassin</strong> : la tige forme un chausson qui passe sous le pied et remonte sur les côtés, fermé sur le dessus par une pièce appelée plateau, cousue souvent avec une piqûre apparente ; les variantes industrielles sont souvent montées et semelées comme les autres constructions.</li>\n<li><strong>Boots et bottines</strong> : tiges montantes au-dessus de la cheville, fermées par laçage, fermeture à glissière, boucles ou soufflets élastiques (bottine dite Chelsea).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> confondre derby et richelieu sur un dessin est une erreur fréquente. Regardez la base du laçage : si les ailettes sont recouvertes par la claque (on ne voit pas leur bord à la base du laçage), c'est un richelieu ; si elles sont posées sur la claque, c'est un derby.</div>"
      },
      {
       "titre": "De la copie de forme au patron moyen",
       "contenu": "<p>Une fois les lignes du modèle tracées sur l'adhésif de la forme (côté extérieur et côté intérieur), on décolle l'adhésif et on l'aplatit sur un carton ou une feuille : c'est la <strong>copie de forme</strong>. Une surface en volume ne s'aplatit pas sans déformation : on fend l'adhésif aux endroits nécessaires (à la pointe, au cou-de-pied) pour qu'il se pose à plat, en répartissant les ouvertures.</p>\n<p>Comme les côtés intérieur et extérieur diffèrent, on établit un <strong>patron moyen</strong> (que les modélistes appellent souvent « la moyenne ») : on superpose les copies extérieure et intérieure en alignant l'axe du dessus de forme, et on trace une ligne intermédiaire entre les deux contours. Ce patron moyen sert de base ; les pièces qui doivent être différentes à l'intérieur et à l'extérieur (quartiers, par exemple) sont ensuite corrigées, en général en abaissant légèrement le quartier intérieur au niveau de la malléole.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir le patron moyen d'un derby. 1) Tracez sur l'adhésif de la forme, côté extérieur puis intérieur, l'axe du dessus, la ligne d'arête, la ligne de cou-de-pied, la hauteur d'arrière (par exemple 62 mm mesurés au talon), la ligne de claque et le contour des ailettes. 2) Décollez et aplatissez chaque côté sur un carton en fendant la pointe pour supprimer les plis. 3) Superposez les deux copies en faisant coïncider l'axe du dessus et le point de cou-de-pied. 4) Tracez la ligne moyenne entre les deux contours, côté arête et côté arrière. 5) Reportez les lignes du modèle sur ce patron moyen. 6) Ajoutez la valeur de montage le long de l'arête (par exemple 16 mm, selon les standards de l'entreprise et le type de semelage). 7) Contrôlez par un essai en papier ou en toile monté sur la forme.</div>"
      },
      {
       "titre": "Extraire les pièces de la tige",
       "contenu": "<p>À partir du patron moyen, on extrait chaque pièce avec :</p>\n<ul>\n<li>ses <strong>superpositions</strong> : dans un derby, le quartier recouvre la claque, donc la claque reçoit une valeur de superposition sous le bord du quartier ; dans un richelieu, c'est l'inverse ;</li>\n<li>ses <strong>remplis</strong> ou bords francs : bord de l'ouverture, bord des ailettes, bord du bout rapporté ;</li>\n<li>sa <strong>valeur de montage</strong> le long de l'arête ;</li>\n<li>ses <strong>repères</strong> : crans d'assemblage, emplacement des œillets (perçages), ligne de piqûre décorative ;</li>\n<li>ses indications : pièce, pointure, matière, nombre (souvent par paire : un quartier extérieur et un quartier intérieur par chaussure, soit quatre par paire).</li>\n</ul>\n<p>Les <strong>doublures</strong> sont extraites séparément : elles ont des découpes différentes de l'extérieur (on décale les coutures de la doublure pour ne pas superposer les surépaisseurs) et sont souvent légèrement plus petites pour ne pas plisser à l'intérieur. Le <strong>bout dur</strong> et le <strong>contrefort</strong> ont leurs propres gabarits, en retrait de l'arête et de l'ouverture.</p>\n<p>L'emplacement des œillets suit une règle d'espacement régulier ; leur nombre dépend de la longueur du laçage (souvent cinq paires pour un derby de ville).</p>"
      },
      {
       "titre": "Le piquage de la tige",
       "contenu": "<p>Le <strong>piquage</strong> regroupe les opérations qui transforment les pièces coupées en tige prête à monter. Un ordre type pour un derby doublé :</p>\n<table>\n<thead><tr><th>N°</th><th>Opération</th></tr></thead>\n<tbody>\n<tr><td>10</td><td>Parer les bords à remplier et les zones de superposition</td></tr>\n<tr><td>20</td><td>Marquer (pointure, référence) et tracer les repères</td></tr>\n<tr><td>30</td><td>Remplier les bords d'ouverture et des ailettes</td></tr>\n<tr><td>40</td><td>Assembler les quartiers à l'arrière (couture de talon, souvent ouverte et renforcée par un ruban)</td></tr>\n<tr><td>50</td><td>Poser les quartiers sur la claque (piqûre de superposition, souvent double)</td></tr>\n<tr><td>60</td><td>Assembler la doublure et la poser dans la tige ; piquer le bord d'ouverture</td></tr>\n<tr><td>70</td><td>Recouper la doublure au ras du bord (arasage)</td></tr>\n<tr><td>80</td><td>Poser les œillets et la languette</td></tr>\n<tr><td>90</td><td>Contrôler la tige : symétrie, piqûres, hauteurs, propreté</td></tr>\n</tbody>\n</table>\n<p>Le piquage se fait principalement sur des machines à colonne, qui permettent de travailler dans les courbes et sur des tiges déjà partiellement en volume. Les piqûres doivent être parfaitement régulières : sur une chaussure, une piqûre décentrée de 0,5 mm se voit.</p>"
      },
      {
       "titre": "Contrôler la tige et préparer le montage",
       "contenu": "<p>Avant le montage, la tige est contrôlée par paire : hauteurs d'arrière identiques sur les deux pieds, symétrie des quartiers, position des œillets, régularité des piqûres, absence de colle visible, conformité de la doublure. On vérifie aussi que la tige s'ajuste à la forme : posée sur la forme, elle doit présenter partout une valeur de montage suffisante et régulière.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les ateliers de piquage travaillent souvent en paquets de paires d'une même pointure. Une fiche suiveuse accompagne le paquet avec la référence, le coloris, les pointures et les opérations à réaliser. Mélanger deux paquets de pointures voisines est une erreur coûteuse, car les pièces se ressemblent beaucoup.</div>\n<p>Les bouts durs et contreforts thermoplastiques sont mis en place au moment du montage : ils sont activés (chaleur ou solvant) puis prennent la forme de la forme pendant le montage. Les contreforts préformés en fibre de cuir ou en matériau thermoplastique sont collés entre la tige et la doublure.</p>"
      },
      {
       "titre": "Adapter un modèle : variantes et déclinaisons",
       "contenu": "<p>À partir d'un même patron de base, on développe de nombreuses variantes : un derby peut devenir un derby à bout rapporté, un derby à plateau, une bottine en rehaussant les quartiers. Le prototypiste travaille par modifications successives du patron moyen, en conservant les lignes de construction validées (hauteur d'arrière, ligne de cou-de-pied, valeur de montage) et en ne modifiant que les lignes de style.</p>\n<p>Les perforations décoratives (bout fleuri, piqûres perforées le long des coutures) se tracent sur le gabarit avec des repères précis, puis sont réalisées à l'emporte-pièce ou au laser. Leur régularité est un signe de qualité : on utilise des gabarits de perforation pour garantir l'écartement.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les lignes de construction (liées à la forme et au chaussant) et les lignes de style (liées au dessin) sont distinctes. On peut librement modifier les secondes ; toucher aux premières change le chaussant et impose de refaire des essais.</div>"
      }
     ],
     "points_cles": [
      "La tige comprend claque, quartiers, éventuellement bout et languette, doublures, bout dur et contrefort.",
      "Derby : quartiers sur la claque, laçage ouvert ; richelieu : claque sur les quartiers, laçage fermé.",
      "La copie de forme aplatit l'adhésif tracé sur la forme.",
      "Le patron moyen combine les copies intérieure et extérieure ; le quartier intérieur est ensuite corrigé.",
      "Chaque pièce reçoit superpositions, remplis, valeur de montage, repères et indications.",
      "Les coutures de doublure sont décalées par rapport à celles de l'extérieur.",
      "Le piquage suit un ordre précis, du parage au contrôle de la tige.",
      "Les lignes de construction se conservent ; les lignes de style se modifient."
     ],
     "lexique": [
      {
       "terme": "Tige",
       "def": "Partie supérieure de la chaussure qui enveloppe le dessus du pied."
      },
      {
       "terme": "Claque",
       "def": "Pièce avant de la tige couvrant les orteils et le dessus de l'avant-pied."
      },
      {
       "terme": "Quartier",
       "def": "Pièce latérale et arrière de la tige."
      },
      {
       "terme": "Derby",
       "def": "Construction où les quartiers sont posés sur la claque, avec laçage ouvert."
      },
      {
       "terme": "Richelieu",
       "def": "Construction où la claque est posée sur les quartiers, avec laçage fermé."
      },
      {
       "terme": "Patron moyen",
       "def": "Patron intermédiaire entre les copies intérieure et extérieure de la forme."
      },
      {
       "terme": "Valeur de montage",
       "def": "Bande ajoutée au bas de la tige pour la rabattre sous la forme lors du montage."
      },
      {
       "terme": "Contrefort",
       "def": "Renfort placé à l'arrière de la tige pour maintenir le talon."
      },
      {
       "terme": "Bout dur",
       "def": "Renfort placé à l'avant de la tige pour maintenir la forme de la pointe."
      },
      {
       "terme": "Piquage",
       "def": "Ensemble des opérations qui assemblent les pièces de la tige."
      }
     ]
    },
    {
     "id": "bcuir-chaussure-montage-semelage",
     "titre": "Montage sur forme, semelages et talons",
     "niveau": "Tle",
     "options": [
      "chaussures"
     ],
     "duree": 50,
     "objectifs": [
      "Identifier les composants du dessous de la chaussure",
      "Décrire les étapes du montage de la tige sur la forme",
      "Comparer les principaux semelages : collé, cousu Blake, cousu trépointe, injecté",
      "Caractériser les talons et leur fixation",
      "Choisir un semelage selon le style, l'usage et la réparabilité"
     ],
     "sections": [
      {
       "titre": "Les composants du dessous",
       "contenu": "<p>Le <strong>dessous</strong> de la chaussure regroupe tout ce qui se trouve sous le pied et assure le soutien, l'amortissement et le contact avec le sol :</p>\n<table>\n<thead><tr><th>Composant</th><th>Rôle</th><th>Matières courantes</th></tr></thead>\n<tbody>\n<tr><td>Première de montage</td><td>Base sur laquelle on rabat la tige ; elle donne sa forme au dessous du pied</td><td>Carton cellulosique, fibre de cuir, cuir, matériaux composites</td></tr>\n<tr><td>Cambrion</td><td>Lame rigide placée sous la cambrure, qui empêche la chaussure de s'affaisser, surtout avec un talon haut</td><td>Acier, fibre de verre, matériaux composites, bois</td></tr>\n<tr><td>Garniture (ou remplissage)</td><td>Comble le creux entre la première et la semelle</td><td>Liège aggloméré, feutre, mousse</td></tr>\n<tr><td>Semelle d'usure (semelle extérieure)</td><td>Contact avec le sol, adhérence, résistance à l'usure</td><td>Cuir, caoutchouc (élastomère), polyuréthane, TPU, EVA</td></tr>\n<tr><td>Trépointe</td><td>Bande cousue autour de la chaussure, qui relie tige et semelle dans certains semelages</td><td>Cuir, parfois matière synthétique</td></tr>\n<tr><td>Talon</td><td>Élévation de l'arrière ; influence le style, l'équilibre et la cambrure</td><td>Cuir empilé, bois, plastique moulé, caoutchouc</td></tr>\n<tr><td>Bonbout</td><td>Pièce d'usure fixée sous le talon, remplaçable</td><td>Caoutchouc, polyuréthane, cuir</td></tr>\n<tr><td>Première de propreté</td><td>Couvre l'intérieur du dessous, au contact du pied</td><td>Cuir fin, textile, avec ou sans mousse</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Le montage de la tige",
       "contenu": "<p>Le <strong>montage</strong> consiste à tendre la tige sur la forme et à rabattre sa valeur de montage sous la première, pour lui donner définitivement son volume. Les étapes classiques sont :</p>\n<ol>\n<li><strong>préparation</strong> : la première est fixée provisoirement sous la forme (pointes ou agrafes) ; le contrefort et le bout dur sont activés ;</li>\n<li><strong>mise en place</strong> de la tige sur la forme, centrée, à la bonne hauteur d'arrière ;</li>\n<li><strong>montage des bouts</strong> : la tige est tirée vers l'avant et rabattue à la pointe, à la pince à main ou sur une machine à monter les bouts qui tire et colle en une opération ;</li>\n<li><strong>montage des flancs</strong> (côtés) et du <strong>talon</strong> (arrière), par collage, pointes ou agrafes selon le procédé ;</li>\n<li><strong>repos sur forme</strong> : la tige garde la forme montée ; un passage en tunnel de chaleur ou d'humidité peut aider à fixer la forme et à effacer les plis ;</li>\n<li><strong>préparation au semelage</strong> : on égalise et on carde (on rend rugueuse) la valeur de montage là où la semelle sera collée.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un cuir à faible gerçure de fleur peut craqueler lors du montage de la pointe, où il est fortement étiré. C'est pourquoi l'essai de gerçure figure dans les exigences des cuirs de dessus, et pourquoi on vérifie l'orientation du prêtant à la coupe de la claque.</div>"
      },
      {
       "titre": "Les semelages",
       "contenu": "<p>Le <strong>semelage</strong> est le procédé qui réunit la tige montée et la semelle. Il détermine l'aspect, la souplesse, l'étanchéité, le poids et la réparabilité de la chaussure.</p>\n<table>\n<thead><tr><th>Semelage</th><th>Principe</th><th>Caractéristiques</th></tr></thead>\n<tbody>\n<tr><td>Collé</td><td>La semelle est collée sous la tige montée (colle polyuréthane réactivée), puis pressée</td><td>Le plus répandu ; rapide, léger, adaptable à tous les styles ; réparation possible mais limitée</td></tr>\n<tr><td>Cousu Blake</td><td>Une couture traverse, à l'intérieur de la chaussure, la première, la valeur de montage et la semelle</td><td>Chaussure fine et souple ; la couture est visible sous la semelle et à l'intérieur ; moins étanche</td></tr>\n<tr><td>Cousu trépointe (cousu Goodyear)</td><td>Une première couture relie la tige et une trépointe à une nervure de la première ; une seconde couture relie la trépointe à la semelle</td><td>Robuste, ressemelable plusieurs fois, bonne résistance à l'eau ; plus lourd et plus long à fabriquer</td></tr>\n<tr><td>Norvégien et dérivés</td><td>La tige est retournée vers l'extérieur et cousue à la semelle par des coutures apparentes</td><td>Chaussures de montagne et de travail, très robustes, étanches</td></tr>\n<tr><td>Injecté</td><td>La semelle (polyuréthane, PVC, caoutchouc) est injectée directement sous la tige dans un moule</td><td>Grandes séries, liaison très solide ; non ressemelable</td></tr>\n<tr><td>Vulcanisé</td><td>Une semelle en caoutchouc est fixée et durcie par cuisson</td><td>Chaussures de sport en toile, bottes</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un semelage avec trépointe (le cousu Goodyear en est l'exemple le plus connu) permet de remplacer la semelle sans toucher à la tige ; c'est un argument de durabilité pour les chaussures de ville haut de gamme.</div>"
      },
      {
       "titre": "Les talons",
       "contenu": "<p>Le <strong>talon</strong> se caractérise par sa <strong>hauteur</strong> (mesurée à l'arrière, de la semelle au sol, en millimètres), sa <strong>forme</strong> (vue de profil et de face), sa matière et son mode de fixation. Quelques formes classiques :</p>\n<ul>\n<li>le <strong>talon plat</strong> de chaussure de ville homme, généralement en cuir empilé (couches de cuir collées et clouées) avec un bonbout en caoutchouc ;</li>\n<li>le <strong>talon cubain</strong> : talon assez large, de hauteur moyenne, à l'arrière droit ou légèrement incliné vers l'avant ;</li>\n<li>le <strong>talon Louis XV</strong> : talon cambré, dont la face avant est galbée ; dans le semelage dit Louis XV, la semelle se prolonge sans interruption sous la cambrure et recouvre la face avant du talon ;</li>\n<li>le <strong>talon aiguille</strong> : très fin et haut, généralement en plastique moulé renforcé d'une tige métallique ;</li>\n<li>la <strong>semelle compensée</strong> : le talon et la cambrure forment un bloc continu.</li>\n</ul>\n<p>Le talon est fixé par collage et par clous ou vis traversant la première depuis l'intérieur. Sa fixation est un point critique de sécurité : un talon qui se détache peut provoquer une chute. On contrôle la résistance à l'arrachement et la tenue aux chocs.</p>"
      },
      {
       "titre": "Choisir un semelage",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir un semelage pour un modèle. Cas : richelieu homme haut de gamme, usage de ville quotidien, cahier des charges qui insiste sur la durabilité et la possibilité de ressemelage, prix de vente élevé. 1) Listez les exigences : style classique, semelle cuir, durabilité, réparabilité, bonne tenue à l'eau. 2) Éliminez les solutions incompatibles : injecté et vulcanisé (pas de semelle cuir, non ressemelables). 3) Comparez les solutions restantes : collé (léger mais ressemelage limité), Blake (fin et souple, ressemelable, mais moins étanche), cousu trépointe (robuste, ressemelable plusieurs fois, bonne tenue à l'eau, plus lourd et plus cher). 4) Concluez : le cousu trépointe répond le mieux au cahier des charges ; le Blake peut convenir si le styliste privilégie une ligne plus fine. 5) Vérifiez la compatibilité avec la forme et le patron : la valeur de montage et la première doivent être adaptées au semelage choisi.</div>\n<p>Le choix du semelage se fait tôt dans le développement, car il conditionne la première de montage, la valeur de montage de la tige et les machines nécessaires.</p>"
      },
      {
       "titre": "La finition de la chaussure",
       "contenu": "<p>Après le semelage, la chaussure est <strong>déformée</strong> (on retire la forme), puis finie :</p>\n<ul>\n<li>pose de la première de propreté ;</li>\n<li>finition des tranches de semelle et de talon (fraisage, teinture, cirage, lissage à chaud) pour les semelles cuir ;</li>\n<li>nettoyage de la tige, retouches de couleur ;</li>\n<li>crèmes, cires et lustrage (on parle de <strong>bichonnage</strong> pour les finitions soignées, parfois avec des effets de patine) ;</li>\n<li>laçage, pose des étiquettes et du marquage de pointure ;</li>\n<li>contrôle final par paire et emballage.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans les maisons de luxe, la patine et le glaçage de la pointe (brillant miroir obtenu par couches successives de cire) sont réalisés à la main et peuvent prendre un temps important. Ces opérations font partie de l'identité du produit et sont décrites avec précision dans la fiche technique, avec un échantillon de référence.</div>"
      },
      {
       "titre": "Contrôles spécifiques de la chaussure finie",
       "contenu": "<p>Outre l'aspect, la chaussure finie fait l'objet de contrôles propres :</p>\n<ul>\n<li><strong>appairage</strong> : les deux chaussures d'une paire sont identiques en pointure, nuance, hauteur, position des piqûres ;</li>\n<li><strong>chaussant</strong> : essayage sur pied de référence en présérie, absence de pli ou de point dur intérieur ;</li>\n<li><strong>flexion</strong> : la semelle plie à l'emboîtage, la tige ne fait pas de pli marqué ni de gerçure ;</li>\n<li><strong>adhérence de la semelle</strong> et du talon (essais de pelage et d'arrachement en laboratoire sur prélèvement) ;</li>\n<li><strong>étiquetage</strong> conforme : matières de la tige, de la doublure et de la semelle.</li>\n</ul>\n<p>Les défauts relevés remontent vers le poste concerné (piquage, montage, semelage) pour une action corrective, selon la démarche qualité de l'entreprise.</p>\n<p>Le retour d'information de l'après-vente complète ces contrôles : décollements de semelle, talons cassés, coutures de talon ouvertes ou cuirs craquelés au pli de marche signalent un défaut de procédé ou de matière qu'aucun contrôle visuel en sortie d'atelier n'aurait détecté. Ces informations alimentent le choix des matières et des semelages des collections suivantes.</p>"
      }
     ],
     "points_cles": [
      "Le dessous comprend première, cambrion, garniture, semelle, éventuellement trépointe, talon, bonbout et première de propreté.",
      "Le montage tend la tige sur la forme : bouts, flancs, talon, puis repos sur forme.",
      "Le semelage collé est le plus répandu ; le cousu Blake donne une chaussure fine et souple.",
      "Le cousu trépointe est robuste et ressemelable plusieurs fois.",
      "L'injecté et le vulcanisé conviennent aux grandes séries mais ne se ressemellent pas.",
      "La hauteur, la forme et la fixation du talon sont des points de style et de sécurité.",
      "Le choix du semelage conditionne la première, la valeur de montage et les machines.",
      "La chaussure finie se contrôle par paire : appairage, chaussant, flexion, adhérence, étiquetage."
     ],
     "lexique": [
      {
       "terme": "Première de montage",
       "def": "Semelle intérieure sur laquelle on rabat et fixe la tige."
      },
      {
       "terme": "Cambrion",
       "def": "Lame rigide placée sous la cambrure pour soutenir la chaussure."
      },
      {
       "terme": "Montage",
       "def": "Opération qui tend la tige sur la forme et la fixe sous la première."
      },
      {
       "terme": "Cardage",
       "def": "Opération qui rend rugueuse une surface de cuir pour améliorer le collage."
      },
      {
       "terme": "Semelage",
       "def": "Procédé qui réunit la tige montée et la semelle."
      },
      {
       "terme": "Trépointe",
       "def": "Bande cousue autour de la chaussure, reliant la tige et la semelle."
      },
      {
       "terme": "Cousu Blake",
       "def": "Semelage où une couture intérieure traverse première, tige et semelle."
      },
      {
       "terme": "Bonbout",
       "def": "Pièce d'usure fixée sous le talon."
      },
      {
       "terme": "Déformer",
       "def": "Retirer la forme de la chaussure terminée."
      }
     ]
    },
    {
     "id": "bcuir-chaussure-graduation",
     "titre": "Graduation d'un modèle de chaussure en CAO",
     "niveau": "Tle",
     "options": [
      "chaussures"
     ],
     "duree": 45,
     "objectifs": [
      "Expliquer le principe de la graduation et ses données d'entrée",
      "Distinguer graduation proportionnelle et graduation par règles",
      "Appliquer et adapter des règles de graduation en CAO",
      "Identifier les éléments qui ne se graduent pas",
      "Contrôler une planche de graduation"
     ],
     "sections": [
      {
       "titre": "Pourquoi graduer",
       "contenu": "<p>Un modèle de chaussure est développé dans une <strong>pointure de base</strong>, puis décliné dans toutes les pointures de la gamme : c'est la <strong>graduation</strong> (on dit aussi gradation). Elle produit, pour chaque pièce, un gabarit par pointure, de façon cohérente avec les formes de chaque pointure fournies par le formier.</p>\n<p>La graduation part de trois données :</p>\n<ul>\n<li>les gabarits validés de la pointure de base ;</li>\n<li>l'<strong>échelle de pointures</strong> à produire, par exemple du 35 au 42 pour un modèle femme, du 39 au 46 pour un modèle homme, avec ou sans demi-pointures ;</li>\n<li>les <strong>règles de graduation</strong> des formes : de combien varient la longueur, les tours et les largeurs d'une pointure à l'autre.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la graduation des gabarits doit suivre celle des formes. Si les formes grandissent d'une certaine valeur en longueur et en tour d'une pointure à l'autre, la tige doit grandir de façon cohérente, sinon le montage devient impossible dans les pointures extrêmes.</div>"
      },
      {
       "titre": "Les variations d'une pointure à l'autre",
       "contenu": "<p>En système français, la longueur de la forme augmente d'un point de Paris, environ 6,67 mm, d'une pointure à la suivante. Les tours (emboîtage, cou-de-pied) et les largeurs augmentent beaucoup moins que proportionnellement à la longueur : un pied plus long n'est pas élargi dans les mêmes proportions. Les valeurs exactes sont propres à chaque formier et figurent dans les fiches des formes ; à titre d'ordre de grandeur, le tour d'emboîtage augmente souvent de quelques millimètres par pointure.</p>\n<p>Il en découle deux approches :</p>\n<ul>\n<li>la <strong>graduation proportionnelle</strong> (homothétique) : toutes les dimensions sont multipliées par un même rapport ; elle est simple mais inexacte pour la chaussure, car elle fait grandir les tours autant que la longueur ;</li>\n<li>la <strong>graduation par règles</strong> (dite aussi par incréments) : chaque point caractéristique du gabarit se déplace d'une valeur définie en X (longueur) et en Y (hauteur) pour chaque pointure ; elle reproduit fidèlement les variations réelles des formes.</li>\n</ul>\n<p>Les logiciels de CAO chaussure utilisent des règles, souvent prédéfinies selon des systèmes de graduation courants, que le modéliste choisit et adapte aux formes de l'entreprise.</p>"
      },
      {
       "titre": "Appliquer les règles en CAO",
       "contenu": "<p>En CAO, on attribue à chaque <strong>point de graduation</strong> du patron (points d'angle, crans, extrémités de lignes) une règle qui indique son déplacement par pointure. Le logiciel calcule ensuite automatiquement les contours de toutes les pointures. Les étapes types sont :</p>\n<ol>\n<li>vérifier que le patron de base est complet et que les points caractéristiques sont bien définis ;</li>\n<li>définir l'échelle de pointures et la pointure de base ;</li>\n<li>choisir le système de graduation correspondant aux formes ;</li>\n<li>attribuer ou vérifier les règles des points principaux (point de talon, pointe, cou-de-pied, emboîtage, hauteur d'arrière) ;</li>\n<li>lancer la graduation et visualiser l'empilement des pointures (planche de graduation) ;</li>\n<li>corriger les points dont le déplacement donne un contour incohérent ;</li>\n<li>appliquer la graduation à toutes les pièces liées (doublures, renforts) ;</li>\n<li>enregistrer et exporter les gabarits par pointure.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la longueur graduée d'une claque. Données : pointure de base 38 ; longueur de la claque mesurée sur l'axe, du point de cou-de-pied à la pointe, valeur de montage comprise : 152 mm ; on admet pour cette ligne un incrément de 4,5 mm par pointure (la claque ne représente qu'une partie de la longueur de la forme, elle ne grandit donc pas de la totalité des 6,67 mm). 1) Pointure 41 : 3 pointures au-dessus, 152 + 3 × 4,5 = 165,5 mm. 2) Pointure 36 : 2 pointures en dessous, 152 − 2 × 4,5 = 143 mm. 3) Mesurez ces valeurs sur la planche de graduation produite par le logiciel. 4) Un écart de plus de 0,5 mm signale une règle mal attribuée sur un point de l'axe. 5) Confirmez par un montage d'essai dans la pointure la plus petite et la plus grande.</div>"
      },
      {
       "titre": "Ce qui ne se gradue pas",
       "contenu": "<p>Certains éléments doivent rester <strong>constants</strong> dans toutes les pointures, ou ne varier que par paliers :</p>\n<ul>\n<li>les <strong>valeurs ajoutées</strong> : rempli, superposition, valeur de montage, qui dépendent de la matière et du procédé, pas de la pointure ;</li>\n<li>la <strong>distance des piqûres</strong> au bord et la largeur des doubles piqûres ;</li>\n<li>la <strong>dimension des accessoires</strong> : œillets, boucles, fermetures (on peut changer de longueur de fermeture par paliers de pointures) ;</li>\n<li>l'<strong>espacement des perforations décoratives</strong>, souvent gardé constant ; on ajuste plutôt le nombre de perforations ;</li>\n<li>la <strong>largeur de certaines bandes</strong> décoratives ou de renfort.</li>\n</ul>\n<p>Le logiciel permet de bloquer ces éléments ou de les reconstruire après graduation à partir du gabarit net gradué. Un œillet supplémentaire peut être ajouté dans les grandes pointures pour garder un espacement régulier.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> graduer les gabarits bruts au lieu des gabarits nets fait varier les valeurs de rempli et de montage avec la pointure. Dans les grandes pointures, le rempli devient trop large ; dans les petites, la valeur de montage devient insuffisante. Graduez les lignes nettes, puis ajoutez les valeurs.</div>"
      },
      {
       "titre": "La planche de graduation",
       "contenu": "<p>La <strong>planche de graduation</strong> (ou nid de graduation) superpose les contours d'une même pièce dans toutes les pointures, alignés sur un point de référence (souvent le point de talon ou le point de cou-de-pied). C'est un outil de contrôle visuel très efficace.</p>\n<p>Sur une planche correcte :</p>\n<ul>\n<li>les contours sont <strong>emboîtés</strong> régulièrement, sans croisement ;</li>\n<li>l'écart entre deux contours successifs est <strong>constant</strong> en chaque point (pour une graduation linéaire) ;</li>\n<li>les lignes qui relient un même point dans toutes les pointures (lignes de graduation) sont droites ;</li>\n<li>les crans et repères suivent le même déplacement que les contours voisins.</li>\n</ul>\n<p>Un croisement de contours, un écart irrégulier ou une ligne de graduation brisée signalent une erreur de règle. On corrige alors la règle du point concerné et on relance la graduation.</p>"
      },
      {
       "titre": "De la graduation à la production",
       "contenu": "<p>Les gabarits gradués servent à commander les emporte-pièces ou à préparer les programmes de découpe numérique pour chaque pointure. La production est lancée selon une <strong>grille de pointures</strong> (ou panachage) qui indique combien de paires fabriquer dans chaque pointure. Par exemple, pour 120 paires d'un modèle femme : 36 : 10 ; 37 : 20 ; 38 : 30 ; 39 : 30 ; 40 : 20 ; 41 : 10. Cette répartition, fondée sur les ventes passées, sert aussi au calcul de la consommation de cuir, car une pointure 41 consomme plus qu'une 36.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les pointures extrêmes (les plus petites et les plus grandes) sont celles où les défauts de graduation apparaissent. Avant de lancer une série, on monte souvent un prototype dans la plus petite et la plus grande pointure de la gamme, en plus de la pointure de base, pour valider la graduation et le chaussant.</div>"
      },
      {
       "titre": "Calculer la consommation d'une grille de pointures",
       "contenu": "<p>Pour estimer la consommation de cuir d'une commande gradée, on peut utiliser la surface nette de la pointure de base et un coefficient par pointure, ou plus simplement la surface nette moyenne pondérée par la grille.</p>\n<p>Exemple : surface nette de la tige en pointure 38 : 0,060 m² par chaussure, soit 0,120 m² par paire. On admet, pour simplifier, une variation de 0,002 m² par paire et par pointure. La grille ci-dessus est symétrique autour du 38,5 ; la surface moyenne par paire est donc proche de celle d'une pointure 38,5, soit 0,120 + 0,001 = 0,121 m². Pour 120 paires : 120 × 0,121 = 14,52 m² de surface nette. Avec un taux de chute prévisionnel de 25 % : SP = 14,52 × 1,25 = 18,15 m² de cuir à prévoir.</p>\n<p>La CAO donne directement les surfaces exactes de chaque pointure, ce qui permet un calcul plus précis, pointure par pointure.</p>\n<p>La grille de pointures influence aussi la coupe : lorsqu'on coupe à la presse, il faut un jeu d'emporte-pièces par pointure et par pièce, ce qui représente un investissement important pour une échelle de huit pointures ; la découpe numérique évite cet investissement et permet de placer sur une même peau des pièces de pointures différentes, ce qui améliore souvent l'utilisation de la matière. On veille alors à ce que les pièces d'une même paire restent coupées dans la même peau, pour la nuance.</p>"
      }
     ],
     "points_cles": [
      "La graduation décline un modèle de la pointure de base dans toute l'échelle de pointures.",
      "Elle suit les règles de graduation des formes fournies par le formier.",
      "La longueur augmente d'environ 6,67 mm par pointure française ; les tours augmentent beaucoup moins.",
      "La graduation par règles déplace chaque point caractéristique d'une valeur définie en X et en Y.",
      "On gradue les gabarits nets, puis on ajoute les valeurs de rempli, de superposition et de montage.",
      "Piqûres, accessoires et espacements décoratifs restent constants ou varient par paliers.",
      "La planche de graduation montre des contours emboîtés régulièrement, sans croisement.",
      "On valide la graduation par des prototypes dans les pointures extrêmes."
     ],
     "lexique": [
      {
       "terme": "Graduation",
       "def": "Déclinaison d'un modèle dans toutes les pointures d'une gamme."
      },
      {
       "terme": "Pointure de base",
       "def": "Pointure dans laquelle le modèle est développé et validé."
      },
      {
       "terme": "Échelle de pointures",
       "def": "Ensemble des pointures dans lesquelles un modèle est fabriqué."
      },
      {
       "terme": "Règle de graduation",
       "def": "Déplacement défini d'un point du patron pour chaque changement de pointure."
      },
      {
       "terme": "Point de graduation",
       "def": "Point caractéristique du patron auquel on attribue une règle."
      },
      {
       "terme": "Planche de graduation",
       "def": "Superposition des contours d'une pièce dans toutes les pointures."
      },
      {
       "terme": "Grille de pointures",
       "def": "Répartition des quantités à fabriquer par pointure."
      },
      {
       "terme": "Graduation proportionnelle",
       "def": "Graduation qui multiplie toutes les dimensions par un même rapport."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Option maroquinerie",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bcuir-maro-familles-anatomie",
     "titre": "Familles de produits et anatomie d'un article de maroquinerie",
     "niveau": "1re",
     "options": [
      "maroquinerie"
     ],
     "duree": 40,
     "objectifs": [
      "Classer les produits de maroquinerie par familles et par usages",
      "Nommer les éléments constitutifs d'un sac et d'un article de petite maroquinerie",
      "Relier la forme d'un article à ses contraintes de construction",
      "Analyser un article existant pour en établir la décomposition",
      "Identifier la quincaillerie et sa fonction dans l'article"
     ],
     "sections": [
      {
       "titre": "Les familles de la maroquinerie",
       "contenu": "<p>La <strong>maroquinerie</strong> désigne la fabrication d'articles en cuir ou en matières souples destinés à contenir ou transporter des objets, ainsi que certains accessoires. On distingue plusieurs familles :</p>\n<table>\n<thead><tr><th>Famille</th><th>Exemples</th><th>Caractéristiques de fabrication</th></tr></thead>\n<tbody>\n<tr><td>Petite maroquinerie</td><td>Portefeuille, porte-cartes, porte-monnaie, étui à clés, étui à téléphone, pochette</td><td>Pièces petites et nombreuses, cuirs fins, grande précision, bords teints ou rembordés très soignés</td></tr>\n<tr><td>Sacs (grande maroquinerie)</td><td>Sac à main, cabas, besace, sac seau, sac à dos, pochette du soir, sac porté épaule</td><td>Volume, poignées et bandoulières, quincaillerie, doublure et poches intérieures</td></tr>\n<tr><td>Bagagerie</td><td>Sac de voyage, valise, malle, housse de vêtement</td><td>Grandes dimensions, structures rigides ou semi-rigides, fortes contraintes mécaniques</td></tr>\n<tr><td>Ceinturerie</td><td>Ceintures, bracelets de montre</td><td>Cuirs épais, contrecollés, tranches teintes, boucles</td></tr>\n<tr><td>Articles de bureau et gainerie</td><td>Porte-documents, sous-mains, agendas, boîtes, écrins</td><td>Cuir collé sur structure (carton, bois), précision des angles</td></tr>\n</tbody>\n</table>\n<p>Les familles diffèrent aussi par le niveau de gamme : un même porte-cartes peut être fabriqué en cuir de veau à bords teints en luxe, ou en vachette rembordée en moyenne gamme.</p>"
      },
      {
       "titre": "L'anatomie d'un sac",
       "contenu": "<p>Un sac se décrit par ses éléments, qui portent des noms précis dans les ateliers :</p>\n<ul>\n<li>le <strong>corps</strong> : devant et dos, ou une seule pièce pliée au fond ;</li>\n<li>l'<strong>épaisseur</strong> : donnée par des <strong>soufflets</strong> (pièces latérales, souvent pliables), des <strong>goussets</strong> (petites pièces d'épaisseur en forme de triangle ou de trapèze), un <strong>fond</strong> rapporté, ou une bande continue qui fait le tour du sac (côtés et fond), que certains ateliers appellent cavour ;</li>\n<li>la <strong>fermeture</strong> : rabat, fermeture à glissière, fermoir, aimant, cordon coulissant ;</li>\n<li>les <strong>éléments de portage</strong> : poignées, anses, bandoulière, avec leurs <strong>attaches</strong> ;</li>\n<li>la <strong>doublure</strong> et les <strong>poches intérieures</strong> (plaquées, à fermeture, porte-téléphone), les <strong>cloisons</strong> (séparations intérieures) ;</li>\n<li>les <strong>renforts</strong> de corps, de fond, de bord d'ouverture ;</li>\n<li>la <strong>quincaillerie</strong> : anneaux, mousquetons, boucles, pieds de sac, rivets, fermoir, plaque de marque.</li>\n</ul>\n<p>On appelle <strong>chape</strong> une petite bande de cuir pliée qui retient un anneau ou une boucle et qui est fixée au sac (on parle aussi d'<strong>enchape</strong> pour la bande qui enserre l'anneau). La <strong>patte</strong> est une petite pièce qui porte une fermeture ou un accessoire. Le <strong>jonc</strong> est un cordon de garnissage glissé dans un passepoil ou une poignée pour lui donner du volume.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le vocabulaire des ateliers varie d'une maison à l'autre. Le dessin technique et la nomenclature du modèle font foi : en cas de doute, on se réfère au repère de la pièce sur le dessin plutôt qu'à son nom.</div>"
      },
      {
       "titre": "Structure et tenue du sac",
       "contenu": "<p>Selon le style, un sac peut être <strong>souple</strong> (il prend la forme de son contenu), <strong>semi-rigide</strong> ou <strong>structuré</strong> (il garde sa forme vide). La tenue est obtenue par :</p>\n<ul>\n<li>le choix du cuir : épaisseur, fermeté, tannage ;</li>\n<li>les <strong>renforts</strong> contrecollés ou thermocollés, plus ou moins rigides, sur tout ou partie des pièces ;</li>\n<li>les <strong>fonds rigides</strong> amovibles ou fixes ;</li>\n<li>la construction : un soufflet piqué et passepoilé tient mieux qu'un soufflet retourné ;</li>\n<li>les <strong>joncs</strong> de bord qui rigidifient les arêtes.</li>\n</ul>\n<p>La structure influence le choix des montages : un sac très structuré se monte souvent à plat-piqué avec des bords francs ou rembordés, un sac souple se prête au montage retourné.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une même apparence peut cacher des structures différentes. Un sac qui paraît souple sur le dessin peut nécessiter un renfort discret au bord d'ouverture pour ne pas s'affaisser. Posez la question au styliste et testez par une maquette en matière réelle.</div>"
      },
      {
       "titre": "La petite maroquinerie",
       "contenu": "<p>Dans la petite maroquinerie, la difficulté vient de la <strong>superposition</strong> de nombreuses pièces fines dans un faible encombrement. Un portefeuille peut compter une vingtaine de pièces : extérieur, intérieur, poches à cartes étagées, soufflets de compartiment à billets, porte-monnaie à fermeture.</p>\n<p>Les règles de conception sont strictes :</p>\n<ul>\n<li>limiter l'épaisseur aux endroits de pliure et de superposition, par le refendage des cuirs (souvent entre 0,4 et 0,8 mm pour les pièces intérieures) et le parage des bords ;</li>\n<li>décaler les bords des poches étagées pour qu'ils ne se superposent pas tous au même endroit ;</li>\n<li>prévoir l'<strong>embu</strong> à la pliure : la pièce extérieure doit être légèrement plus longue que la pièce intérieure pour que l'article se ferme sans tirer ;</li>\n<li>contrôler les dimensions intérieures avec les objets réels (cartes au format bancaire, billets).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dimensionner une poche à cartes. Une carte bancaire mesure 85,6 × 54 mm. 1) Largeur intérieure de la poche : largeur de la carte plus une aisance de 2 à 3 mm, soit environ 88 mm entre les piqûres. 2) Largeur extérieure de la pièce : ajoutez les distances de piqûre (2,5 mm de chaque côté) et les éventuelles valeurs de rempli : 88 + 2 × 2,5 = 93 mm au gabarit net si les bords sont francs. 3) Profondeur : la carte doit dépasser de la poche d'environ 15 à 20 mm pour être saisie, la poche suivante étant décalée vers le bas d'autant. 4) Vérifiez sur un prototype que la carte entre et sort sans forcer, avec le cuir réel, car l'épaisseur du cuir réduit l'espace utile.</div>"
      },
      {
       "titre": "Analyser un article existant",
       "contenu": "<p>Le prototypiste doit savoir « lire » un article existant pour le reproduire, le modifier ou en évaluer la qualité. La démarche consiste à le décomposer méthodiquement :</p>\n<ol>\n<li>observer l'article sous toutes ses faces et le photographier ;</li>\n<li>relever les dimensions principales (largeur, hauteur, épaisseur, longueur des poignées) ;</li>\n<li>repérer chaque pièce, les lignes de couture et les bords, et dessiner un éclaté ;</li>\n<li>identifier les types de bords et de montages ;</li>\n<li>repérer les renforts au toucher (rigidité, épaisseur) ;</li>\n<li>identifier la quincaillerie (dimensions, passage, matière, finition) ;</li>\n<li>établir une nomenclature provisoire et une hypothèse d'ordre de montage.</li>\n</ol>\n<p>Cette analyse prépare le patronage et le chiffrage. Elle permet aussi de repérer les points faibles d'un article retourné en après-vente : couture qui lâche, cuir qui se déforme à l'attache, quincaillerie qui s'use.</p>"
      },
      {
       "titre": "La quincaillerie en maroquinerie",
       "contenu": "<p>La <strong>quincaillerie</strong> (ou « métal ») est à la fois fonctionnelle et décorative. Ses éléments principaux :</p>\n<table>\n<thead><tr><th>Élément</th><th>Fonction</th><th>Points de conception</th></tr></thead>\n<tbody>\n<tr><td>Anneau (rond, en D, carré)</td><td>Relier une poignée ou une bandoulière au corps</td><td>Passage adapté à la largeur de la chape et de la poignée</td></tr>\n<tr><td>Mousqueton</td><td>Rendre une bandoulière amovible</td><td>Résistance, facilité d'ouverture, risque de rayer le cuir</td></tr>\n<tr><td>Boucle</td><td>Régler une longueur ou fermer</td><td>Passage, ardillon, nombre et espacement des trous</td></tr>\n<tr><td>Pieds de sac</td><td>Protéger le fond</td><td>Renfort sous le fond pour la fixation</td></tr>\n<tr><td>Fermoir, tourniquet, aimant</td><td>Fermer le rabat</td><td>Position exacte, renfort, épaisseur traversée</td></tr>\n<tr><td>Rivets</td><td>Fixer mécaniquement</td><td>Longueur de tige adaptée à l'épaisseur totale</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fixations à vis permettent de démonter la quincaillerie pour la réparation ou le remplacement ; elles sont de plus en plus utilisées dans les articles haut de gamme réparables. Les fixations rivetées sont plus rapides à poser mais nécessitent de couper ou percer pour démonter.</div>"
      },
      {
       "titre": "Ergonomie et usage d'un sac",
       "contenu": "<p>Un sac est un objet porté, manipulé, ouvert et fermé des milliers de fois. Sa conception doit tenir compte de l'<strong>usage réel</strong> :</p>\n<ul>\n<li>la <strong>longueur des poignées</strong> détermine le mode de portage : à la main (poignée courte, hauteur de retombée d'environ 10 à 15 cm au-dessus du sac), au creux du bras ou à l'épaule (retombée plus importante) ;</li>\n<li>la <strong>largeur de la bandoulière</strong> répartit le poids sur l'épaule : une bandoulière étroite convient à un sac léger, une bandoulière large ou rembourrée à un sac lourd ;</li>\n<li>l'<strong>ouverture</strong> doit permettre de voir et d'atteindre le contenu ; une fermeture à glissière trop courte gêne l'accès ;</li>\n<li>la <strong>masse à vide</strong> du sac compte : cuirs épais, renforts rigides et quincaillerie massive l'alourdissent ;</li>\n<li>la <strong>stabilité</strong> posé sur une table : un fond trop étroit ou des pieds mal placés font basculer le sac.</li>\n</ul>\n<p>Ces critères se vérifient sur la maquette et le prototype par des essais d'usage : charger le sac avec un poids représentatif (par exemple quelques kilos d'objets du quotidien), le porter, l'ouvrir et le fermer, le poser. Les observations sont notées et transformées en modifications du patron si nécessaire.</p>"
      }
     ],
     "points_cles": [
      "La maroquinerie comprend petite maroquinerie, sacs, bagagerie, ceinturerie, articles de bureau et gainerie.",
      "Un sac se compose d'un corps, d'éléments d'épaisseur, d'une fermeture, d'éléments de portage, d'une doublure, de renforts et de quincaillerie.",
      "Le vocabulaire varie selon les ateliers ; le dessin et la nomenclature font foi.",
      "La tenue d'un sac dépend du cuir, des renforts, de la construction et des joncs.",
      "La petite maroquinerie impose de limiter et décaler les épaisseurs.",
      "On dimensionne les poches à partir des objets réels, avec une aisance.",
      "Analyser un article existant prépare le patronage, le chiffrage et l'amélioration.",
      "Le passage d'un anneau ou d'une boucle doit correspondre à la largeur réelle de la pièce qui y passe."
     ],
     "lexique": [
      {
       "terme": "Petite maroquinerie",
       "def": "Articles de petite taille : portefeuilles, porte-cartes, porte-monnaie, étuis."
      },
      {
       "terme": "Soufflet",
       "def": "Pièce latérale qui donne de l'épaisseur à un sac et peut se plier."
      },
      {
       "terme": "Gousset",
       "def": "Petite pièce d'épaisseur insérée entre deux pièces d'un article."
      },
      {
       "terme": "Chape",
       "def": "Bande de cuir pliée qui retient un anneau ou une boucle et se fixe à l'article."
      },
      {
       "terme": "Jonc",
       "def": "Cordon de garnissage qui donne du volume à un passepoil ou une poignée."
      },
      {
       "terme": "Cloison",
       "def": "Séparation intérieure d'un sac ou d'un portefeuille."
      },
      {
       "terme": "Rabat",
       "def": "Pièce qui recouvre l'ouverture d'un sac."
      },
      {
       "terme": "Gainerie",
       "def": "Technique de recouvrement d'une structure rigide par du cuir collé."
      }
     ]
    },
    {
     "id": "bcuir-maro-montages",
     "titre": "Les montages de maroquinerie",
     "niveau": "1re-Tle",
     "options": [
      "maroquinerie"
     ],
     "duree": 50,
     "objectifs": [
      "Distinguer les principaux montages par la position des bords et des coutures",
      "Associer à chaque montage ses valeurs ajoutées et ses opérations de préparation",
      "Choisir un montage selon le style, la matière et la structure du produit",
      "Réaliser les angles et les arrondis d'un montage",
      "Ordonner les étapes de montage d'un sac"
     ],
     "sections": [
      {
       "titre": "Qu'est-ce qu'un montage",
       "contenu": "<p>En maroquinerie, le <strong>montage</strong> désigne la manière de réunir deux pièces (ou deux sous-ensembles) en traitant leurs bords. Il définit à la fois l'aspect du bord, la position de la couture, les valeurs à ajouter aux gabarits et les opérations de préparation. Les montages se décrivent par le traitement du <strong>dessus</strong> (la pièce extérieure, visible) et du <strong>dessous</strong> (la pièce qui lui est assemblée : doublure, pièce intérieure, autre pièce de cuir).</p>\n<p>Les ressources d'examen et les ateliers utilisent notamment les appellations suivantes, pour l'assemblage d'un dessus et d'un dessous :</p>\n<table>\n<thead><tr><th>Montage</th><th>Description</th></tr></thead>\n<tbody>\n<tr><td>À bord franc (ou bord rogné)</td><td>Deux pièces coupées net, collées l'une sur l'autre, piquées, puis rognées ensemble et finies par une teinture de tranche</td></tr>\n<tr><td>Mixte (ou semi-contrecollé)</td><td>Un dessus rembordé assemblé à un dessous coupé net</td></tr>\n<tr><td>Contrecollé (deux rembords)</td><td>Le dessus et le dessous sont rembordés chacun, puis assemblés</td></tr>\n<tr><td>À dessus rembordé</td><td>Le dessus est rembordé sur le dessous</td></tr>\n<tr><td>Bordure à cheval</td><td>Dessus et dessous réunis par une bordure qui les enveloppe</td></tr>\n</tbody>\n</table>\n<p>À ces montages de bords s'ajoutent les montages d'assemblage des volumes : <strong>piqué retourné</strong>, <strong>piqué à plat</strong> (superposé), <strong>bord à bord</strong>, avec ou sans <strong>passepoil</strong>. Le référentiel cite aussi des montages dits cavour, à l'allemande et à gousset : ces appellations d'atelier désignent des façons de construire l'épaisseur du sac, et leur définition exacte peut varier d'une maison à l'autre ; la fiche technique du modèle précise toujours la construction attendue.</p>"
      },
      {
       "titre": "Le montage à bord franc",
       "contenu": "<p>Dans le <strong>montage à bord franc</strong>, les pièces sont assemblées bord sur bord, sans repli. Les étapes sont : coupe des pièces avec une légère surlargeur si l'on prévoit de rogner, encollage des faces en contact, assemblage, piqûre à la distance prévue, <strong>rognage</strong> des bords ensemble au tranchet ou à la machine pour obtenir une tranche parfaitement alignée, ponçage de la tranche, teinture en plusieurs couches avec ponçages et séchages intermédiaires, lissage.</p>\n<p>Il convient aux cuirs à tranche compacte (tannage végétal, cuirs fermes) et donne un aspect net et raffiné, très apprécié en petite maroquinerie et en ceinturerie. L'épaisseur totale reste faible, car aucun bord n'est replié.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une tranche teinte mal préparée (ponçage insuffisant, couches trop épaisses, séchage trop court) se craquelle ou se décolle à l'usage. La qualité d'un bord franc dépend autant de la régularité de la coupe et du rognage que de la teinture elle-même.</div>"
      },
      {
       "titre": "Les montages rembordés",
       "contenu": "<p>Les <strong>montages rembordés</strong> cachent la tranche sous un repli. Leur préparation comprend toujours : le parage du bord sur la largeur du rempli, l'encollage, le pliage (à la main avec un plioir et un marteau, ou à la machine à remplier), puis le traitement des angles et des arrondis.</p>\n<ul>\n<li>Dans le montage <strong>mixte</strong>, seul le dessus est rembordé ; il est ensuite posé et piqué sur un dessous coupé net, légèrement en retrait. C'est une solution courante pour poser un extérieur sur une doublure.</li>\n<li>Dans le montage <strong>contrecollé</strong>, dessus et dessous sont rembordés, puis collés envers contre envers et piqués ensemble : les deux faces de la pièce sont propres, ce qui convient aux rabats, aux pattes et aux poignées plates.</li>\n<li>Dans le montage <strong>à dessus rembordé</strong>, le rempli du dessus vient recouvrir le bord du dessous, qui est ainsi pris dans le rembord.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> remborder un angle droit sans surépaisseur. 1) Au gabarit, prévoyez le rempli (par exemple 5 mm) sur les deux bords de l'angle. 2) Après parage, coupez l'angle du rempli en biais (onglet), en laissant environ 1 à 1,5 mm de cuir au-delà de la pointe de l'angle net, pour couvrir la pointe sans laisser voir la tranche. 3) Encollez. 4) Repliez d'abord un bord, puis rabattez la petite pointe restante sur l'angle, puis repliez le second bord. 5) Marquez au marteau pour aplatir. 6) Contrôlez l'angle : net, sans tranche visible, sans bourrelet. Pour un arrondi, on remplace l'onglet par une série de petits crans dans le rempli, qui permettent de le replier sans plis.</div>"
      },
      {
       "titre": "Piqué retourné, piqué à plat et passepoil",
       "contenu": "<p>Pour assembler les volumes d'un sac (corps et soufflets, corps et fond), plusieurs solutions :</p>\n<ul>\n<li><strong>piqué retourné</strong> : les pièces sont piquées endroit contre endroit, à une valeur de couture du bord, puis l'article est retourné ; la couture est invisible et les bords sont protégés à l'intérieur ; il demande un cuir assez souple pour être retourné et on aplatit souvent les valeurs de couture au marteau ou par collage ;</li>\n<li><strong>piqué à plat</strong> (superposé) : une pièce est posée sur l'autre, envers contre endroit, et piquée à travers ; le bord de la pièce du dessus reste visible (franc ou rembordé) ;</li>\n<li><strong>avec passepoil</strong> : un passepoil (bande pliée, souvent garnie d'un jonc) est inséré entre les deux pièces dans un piqué retourné ou à plat ; il souligne l'arête et la protège de l'usure ;</li>\n<li><strong>bordure à cheval</strong> : une bande de cuir pliée enveloppe les bords assemblés et est piquée à travers ; utilisée pour les sacs souples ou pour couvrir des épaisseurs multiples.</li>\n</ul>\n<p>La valeur de couture du piqué retourné et la largeur du passepoil doivent être cohérentes : la couture d'assemblage passe juste au ras du jonc pour que le passepoil soit bien tendu.</p>"
      },
      {
       "titre": "Choisir un montage",
       "contenu": "<p>Le choix d'un montage dépend de plusieurs critères :</p>\n<table>\n<thead><tr><th>Critère</th><th>Orientation du choix</th></tr></thead>\n<tbody>\n<tr><td>Style recherché</td><td>Bord franc teint pour un style épuré et précis ; rembordé pour un aspect doux et arrondi ; passepoil pour souligner les lignes</td></tr>\n<tr><td>Cuir</td><td>Tranche compacte pour le bord franc ; cuir parable et souple pour le rembordé et le retourné</td></tr>\n<tr><td>Structure</td><td>Retourné pour les sacs souples ; piqué à plat et passepoilé pour les sacs structurés</td></tr>\n<tr><td>Épaisseur admissible</td><td>Bord franc et retourné limitent l'épaisseur visible ; le contrecollé l'augmente</td></tr>\n<tr><td>Temps et coût</td><td>Le bord teint de qualité et le rembordé main sont longs ; certains montages se mécanisent mieux</td></tr>\n<tr><td>Usure</td><td>Le passepoil et la bordure protègent les arêtes exposées</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> à l'épreuve d'industrialisation comme en atelier, le choix d'un montage se valide par des essais comparatifs : deux réalisations du même assemblage (essai A, essai B), un constat sur l'aspect, la tenue et le temps, puis une justification du choix retenu. Ces essais sont conservés avec le dossier du modèle.</div>"
      },
      {
       "titre": "Ordre de montage d'un sac",
       "contenu": "<p>L'ordre de montage découle de l'arborescence. Pour un sac à rabat avec soufflets, doublure et bandoulière, un ordre type est :</p>\n<ol>\n<li>préparer toutes les pièces : parage, refendage, renforts, rembordés, teinture de tranche des éléments à bord franc ;</li>\n<li>monter les sous-ensembles indépendants : rabat (contrecollé), bandoulière et chapes, poche intérieure et doublure ;</li>\n<li>poser sur le corps les éléments qui seront inaccessibles ensuite : fermoir, attaches, plaque de marque, pieds de sac ;</li>\n<li>assembler le corps extérieur (devant, soufflets, dos, fond) ;</li>\n<li>assembler la doublure équipée et la poser dans le corps ;</li>\n<li>assembler le bord d'ouverture (corps et doublure) et le rabat ;</li>\n<li>poser la bandoulière ;</li>\n<li>finitions : nettoyage des traces de colle, retouches de tranche, mise en forme, contrôle final.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> tout ce qui se fixe à travers une seule pièce (fermoir, rivets, pieds) se pose avant que cette pièce soit doublée ou fermée en volume, sinon l'accès devient impossible. Vérifiez ce point à chaque fois que vous rédigez une gamme.</div>"
      },
      {
       "titre": "Les défauts de montage les plus fréquents",
       "contenu": "<p>Les défauts de montage se repèrent au contrôle et se préviennent par une bonne préparation :</p>\n<table>\n<thead><tr><th>Défaut</th><th>Causes probables</th><th>Prévention</th></tr></thead>\n<tbody>\n<tr><td>Rembordé ondulé ou plissé</td><td>Parage irrégulier, crans insuffisants dans les courbes, colle trop épaisse</td><td>Régler le parage sur chute, cranter régulièrement les arrondis</td></tr>\n<tr><td>Tranche visible dans un angle rembordé</td><td>Onglet coupé trop court</td><td>Laisser un peu de cuir au-delà de la pointe de l'angle</td></tr>\n<tr><td>Passepoil ondulé</td><td>Couture trop éloignée du jonc, passepoil coupé hors du sens du moindre prêtant</td><td>Piquer au ras du jonc, respecter l'orientation de coupe</td></tr>\n<tr><td>Soufflet décalé par rapport au corps</td><td>Crans non respectés, longueurs non concordantes</td><td>Vérifier les concordances au patron, faire coïncider les crans</td></tr>\n<tr><td>Colle apparente</td><td>Encollage débordant, absence de cache</td><td>Encoller au gabarit, nettoyer immédiatement avec le produit adapté</td></tr>\n<tr><td>Bord franc irrégulier</td><td>Rognage imprécis, pièces décalées au collage</td><td>Coller avec repères, rogner avec un outil bien affûté</td></tr>\n</tbody>\n</table>\n<p>La plupart de ces défauts trouvent leur origine dans une étape antérieure au montage proprement dit (coupe, parage, patron). C'est pourquoi le prototypiste remonte toujours à la cause plutôt que de corriger au dernier poste.</p>"
      }
     ],
     "points_cles": [
      "Un montage définit le traitement des bords, la position de la couture, les valeurs et la préparation.",
      "Bord franc, mixte, contrecollé, à dessus rembordé et bordure à cheval décrivent l'assemblage dessus-dessous.",
      "Piqué retourné, piqué à plat, bord à bord et passepoil servent à assembler les volumes.",
      "Le bord franc teint demande une coupe, un rognage et une teinture de tranche soignés.",
      "Le rembordé exige parage, encollage, pliage et un traitement des angles par onglet ou crans.",
      "Le choix du montage dépend du style, du cuir, de la structure, de l'épaisseur, du coût et de l'usure.",
      "Les appellations d'atelier (cavour, à l'allemande) varient ; la fiche technique fait foi.",
      "Ce qui se fixe à travers une pièce se pose avant qu'elle soit doublée ou fermée."
     ],
     "lexique": [
      {
       "terme": "Montage",
       "def": "Manière de réunir deux pièces en traitant leurs bords."
      },
      {
       "terme": "Rognage",
       "def": "Coupe des bords assemblés pour obtenir une tranche alignée."
      },
      {
       "terme": "Montage mixte",
       "def": "Assemblage d'un dessus rembordé et d'un dessous coupé net."
      },
      {
       "terme": "Montage contrecollé",
       "def": "Assemblage de deux pièces rembordées collées envers contre envers."
      },
      {
       "terme": "Bordure à cheval",
       "def": "Bande pliée qui enveloppe les bords assemblés d'un dessus et d'un dessous."
      },
      {
       "terme": "Piqué retourné",
       "def": "Assemblage piqué endroit contre endroit puis retourné."
      },
      {
       "terme": "Plioir",
       "def": "Outil qui sert à marquer et à rabattre un rempli."
      },
      {
       "terme": "Onglet",
       "def": "Coupe en biais du rempli dans un angle pour éviter la surépaisseur."
      }
     ]
    },
    {
     "id": "bcuir-maro-poignees-poches",
     "titre": "Poignées, bandoulières, poches et doublures de sac",
     "niveau": "Tle",
     "options": [
      "maroquinerie"
     ],
     "duree": 50,
     "objectifs": [
      "Comparer les constructions de poignées et de bandoulières",
      "Calculer la largeur de coupe d'une poignée roulée ou d'une bandoulière pliée",
      "Concevoir les attaches pour résister à la charge",
      "Construire une poche plaquée, une poche à fermeture et une poche passepoilée",
      "Établir les gabarits d'une doublure de sac"
     ],
     "sections": [
      {
       "titre": "Les constructions de poignées",
       "contenu": "<p>La poignée est l'élément le plus sollicité d'un sac. Plusieurs constructions existent :</p>\n<table>\n<thead><tr><th>Construction</th><th>Description</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Poignée plate contrecollée</td><td>Deux bandes de cuir (dessus et dessous) collées envers contre envers, avec renfort, piquées, bords francs teints ou rembordés</td><td>Sacs structurés, cabas</td></tr>\n<tr><td>Poignée roulée (ronde)</td><td>Une bande de cuir enroulée autour d'un jonc (cordon de garnissage) et cousue ou collée sur sa longueur ; les extrémités restent plates pour l'attache</td><td>Sacs de ville, sacs du soir</td></tr>\n<tr><td>Poignée pliée</td><td>Une bande pliée en deux ou en trois dans sa largeur, avec éventuellement un renfort, piquée</td><td>Sacs souples, cabas</td></tr>\n<tr><td>Poignée rembourrée</td><td>Dessus bombé garni de mousse ou de feutre, sur un dessous plat</td><td>Bagagerie, sacs lourds</td></tr>\n<tr><td>Poignée rigide</td><td>Structure (bois, métal, résine) recouverte ou non de cuir</td><td>Sacs à cadre, bagagerie</td></tr>\n</tbody>\n</table>\n<p>La poignée doit résister à l'allongement : on coupe les bandes dans le sens du moindre prêtant, de préférence dans le croupon, et on ajoute un <strong>ruban de renfort</strong> non extensible au cœur des poignées longues. La largeur de la partie tenue en main doit rester confortable : une poignée trop fine coupe la main sous la charge.</p>"
      },
      {
       "titre": "Calculer la largeur de coupe",
       "contenu": "<p>La largeur de coupe d'une poignée dépend de sa construction et de l'épaisseur du cuir.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la largeur de coupe d'une poignée roulée. Données : jonc de diamètre 8 mm ; cuir de 1,0 mm ; la bande est cousue bord à bord sous la poignée, sans recouvrement. 1) Diamètre moyen de la bande enroulée : diamètre du jonc plus une épaisseur de cuir, soit 8 + 1 = 9 mm (on raisonne sur la fibre moyenne du cuir, à mi-épaisseur). 2) Périmètre moyen : π × 9 ≈ 28,3 mm. 3) Largeur de coupe dans la partie roulée : environ 28 mm. 4) Si la fermeture se fait par un recouvrement collé de 5 mm au lieu d'une couture bord à bord, ajoutez 5 mm : 33 mm. 5) Faites un essai sur 10 cm de longueur avant de couper la série : le cuir réel peut être plus ou moins compressible.</div>\n<p>Pour une <strong>bandoulière pliée en trois</strong> de largeur finie 25 mm, la largeur de coupe est de l'ordre de 3 × 25 = 75 mm, augmentée légèrement pour tenir compte des épaisseurs au pliage ; on la détermine aussi par essai. Pour une poignée contrecollée, chaque bande est coupée à la largeur finie plus d'éventuelles valeurs de rempli et une surlargeur si on rogne après piqûre.</p>"
      },
      {
       "titre": "Concevoir les attaches",
       "contenu": "<p>L'<strong>attache</strong> relie la poignée ou la bandoulière au corps du sac. C'est là que l'effort se concentre. Les solutions courantes sont :</p>\n<ul>\n<li>l'attache <strong>cousue directement</strong> sur le corps, par une piqûre en rectangle avec diagonale ou par plusieurs lignes de piqûre ;</li>\n<li>l'attache par <strong>chape et anneau</strong> : une chape fixée au corps porte un anneau, dans lequel passe l'extrémité de la poignée ; la poignée peut pivoter, ce qui limite les efforts de torsion ;</li>\n<li>l'attache <strong>rivetée</strong> ou <strong>vissée</strong>, qui permet une fixation mécanique robuste et, pour les vis, démontable ;</li>\n<li>l'attache <strong>prise dans la couture</strong> d'assemblage du corps, renforcée à l'intérieur.</li>\n</ul>\n<p>Dans tous les cas, un <strong>renfort</strong> placé derrière la zone d'attache répartit l'effort sur une surface plus large que l'attache elle-même. La distance entre les attaches d'une poignée influence l'ouverture du sac : des attaches trop rapprochées empêchent d'ouvrir largement, trop écartées font bâiller le sac quand on le porte.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une piqûre d'attache formée d'une seule ligne parallèle au bord travaille comme une prédécoupe et peut déchirer le cuir. Préférez une piqûre en rectangle, avec une croix ou une diagonale, qui répartit l'effort dans plusieurs directions, et des arrêts soignés.</div>"
      },
      {
       "titre": "Les bandoulières",
       "contenu": "<p>La <strong>bandoulière</strong> permet de porter le sac à l'épaule ou en travers du corps. Elle peut être fixe, réglable (boucle à ardillon, boucle coulissante), amovible (mousquetons) ou convertible (double longueur). Pour une bandoulière réglable portée en travers du corps, la longueur totale se situe souvent entre 110 et 130 cm ; elle doit être vérifiée avec la cible (taille, usage sur manteau).</p>\n<p>Les bandoulières longues sont soumises à l'allongement : on les coupe dans le sens du moindre prêtant, sur toute la longueur si la peau le permet, ou en deux parties raccordées par une couture ou par la boucle. Un ruban de renfort non extensible est souvent inséré. Les extrémités qui passent dans les anneaux ou les mousquetons sont amincies (parées) pour ne pas créer de surépaisseur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la longueur d'une pièce longue pose un problème de placement : une bandoulière de 120 cm ne peut se couper que dans les grandes peaux, dans le sens de la ligne du dos. Les maisons prévoient parfois des bandoulières en deux parties pour mieux utiliser les peaux, la jonction étant dissimulée sous la boucle ou une épaulière.</div>"
      },
      {
       "titre": "Les poches",
       "contenu": "<p>Les poches extérieures et intérieures se construisent selon plusieurs modèles :</p>\n<ul>\n<li>la <strong>poche plaquée</strong> : une pièce posée et piquée sur le corps ou la doublure, avec bord supérieur rembordé ou franc ; simple et robuste ;</li>\n<li>la <strong>poche à soufflets</strong> : poche plaquée dont les côtés sont pliés pour lui donner du volume ;</li>\n<li>la <strong>poche à fermeture à glissière</strong> : une ouverture est découpée dans la doublure (ou le corps), la fermeture est posée derrière, et un sac de poche est cousu au dos ; on parle de poche « fenêtre » quand l'ouverture est un rectangle bordé ;</li>\n<li>la <strong>poche passepoilée</strong> : l'ouverture est bordée par un ou deux passepoils de cuir ; plus élégante, elle demande une grande précision ;</li>\n<li>la <strong>poche dans couture</strong> : l'ouverture est ménagée dans une couture d'assemblage.</li>\n</ul>\n<p>Une poche à fermeture se trace avec un gabarit précis de l'ouverture (largeur égale à la longueur utile de la fermeture, hauteur de 8 à 12 mm selon le numéro de fermeture). Les angles de l'ouverture sont crantés en biais jusqu'à la ligne de pli, puis rembordés vers l'intérieur.</p>"
      },
      {
       "titre": "La doublure de sac",
       "contenu": "<p>La doublure est conçue comme un second sac, à l'intérieur du premier. Ses gabarits se déduisent de ceux de l'extérieur, avec des règles :</p>\n<ul>\n<li>la doublure est légèrement plus petite que l'extérieur (de l'ordre de 1 à 3 mm sur les dimensions principales, selon l'épaisseur des matières) pour ne pas plisser à l'intérieur ;</li>\n<li>les coutures de la doublure sont souvent des coutures retournées, avec une valeur de couture de 5 à 8 mm ;</li>\n<li>on prévoit une <strong>ouverture de retournement</strong> dans une couture de la doublure (souvent au fond), refermée à la fin, quand le montage se fait par retournement ;</li>\n<li>la doublure porte les poches intérieures, posées avant son assemblage ;</li>\n<li>le haut de la doublure se raccorde au bord d'ouverture du corps, directement ou par l'intermédiaire d'une <strong>parementure</strong> (bande de cuir intérieure qui prolonge l'extérieur sur quelques centimètres et améliore l'aspect quand le sac est ouvert).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la doublure ne se trace pas « à l'œil » : on la dérive des gabarits nets de l'extérieur, en appliquant des règles de réduction et de valeurs de couture constantes, puis on la vérifie sur le prototype.</div>"
      },
      {
       "titre": "Essais de résistance du portage",
       "contenu": "<p>Avant de valider un sac, on teste la tenue des poignées et des bandoulières. Les essais peuvent être normalisés en laboratoire (essais de charge statique, essais dynamiques où le sac chargé est soulevé et reposé un grand nombre de fois) ou réalisés à l'atelier de façon simplifiée :</p>\n<ol>\n<li>charger le sac avec une masse supérieure à celle prévue au cahier des charges (par exemple une fois et demie) ;</li>\n<li>le suspendre par la poignée pendant une durée définie ;</li>\n<li>mesurer l'allongement de la poignée et observer les attaches (déformation du cuir, amorce de déchirure, glissement d'un rivet) ;</li>\n<li>recommencer avec la bandoulière à sa longueur maximale ;</li>\n<li>noter les résultats sur la fiche d'essai et conclure.</li>\n</ol>\n<p>Un allongement visible ou une déformation de l'attache conduit à revoir la construction : renfort plus grand, ruban non extensible, attache par chape et anneau, coupe dans une zone plus ferme de la peau.</p>"
      }
     ],
     "points_cles": [
      "Les poignées peuvent être plates contrecollées, roulées sur jonc, pliées, rembourrées ou rigides.",
      "On coupe poignées et bandoulières dans le sens du moindre prêtant, avec un renfort non extensible si nécessaire.",
      "La largeur de coupe d'une poignée roulée se calcule sur le périmètre moyen : π × (diamètre du jonc + épaisseur du cuir).",
      "L'attache concentre l'effort ; un renfort et une piqûre en rectangle avec diagonale le répartissent.",
      "La distance entre attaches influence l'ouverture et le tombé du sac.",
      "Les poches peuvent être plaquées, à soufflets, à fermeture, passepoilées ou dans couture.",
      "La doublure se déduit des gabarits nets de l'extérieur, un peu plus petite pour ne pas plisser.",
      "Les essais de charge valident poignées, bandoulières et attaches avant la série."
     ],
     "lexique": [
      {
       "terme": "Poignée roulée",
       "def": "Poignée formée d'une bande de cuir enroulée autour d'un jonc."
      },
      {
       "terme": "Attache",
       "def": "Partie qui relie une poignée ou une bandoulière au corps du sac."
      },
      {
       "terme": "Ruban de renfort",
       "def": "Ruban non extensible inséré pour empêcher l'allongement d'une pièce."
      },
      {
       "terme": "Poche plaquée",
       "def": "Poche formée d'une pièce posée et piquée sur le corps ou la doublure."
      },
      {
       "terme": "Poche passepoilée",
       "def": "Poche dont l'ouverture est bordée par un ou deux passepoils."
      },
      {
       "terme": "Parementure",
       "def": "Bande de cuir intérieure prolongeant l'extérieur au bord d'ouverture."
      },
      {
       "terme": "Ouverture de retournement",
       "def": "Ouverture laissée dans une couture pour retourner l'article, refermée ensuite."
      },
      {
       "terme": "Bandoulière convertible",
       "def": "Bandoulière permettant plusieurs modes de portage."
      }
     ]
    },
    {
     "id": "bcuir-maro-maquette-prototype",
     "titre": "Maquette, patron et prototype d'un sac",
     "niveau": "Tle",
     "options": [
      "maroquinerie"
     ],
     "duree": 50,
     "objectifs": [
      "Construire le patron d'un sac à partir de ses dimensions et du dessin",
      "Vérifier les concordances de longueur entre corps, soufflets et fond",
      "Réaliser et exploiter une maquette en volume",
      "Conduire la réalisation et la mise au point d'un prototype",
      "Formaliser les modifications pour l'industrialisation"
     ],
     "sections": [
      {
       "titre": "Du dessin aux dimensions",
       "contenu": "<p>En maroquinerie, il n'existe pas de forme comme en chaussure : le volume du sac est défini par ses <strong>dimensions</strong> et ses <strong>lignes</strong>. Le prototypiste part du dessin du styliste et des cotes principales (largeur, hauteur, épaisseur), complétées par les cotes déduites (hauteur du rabat, longueur des poignées, position des attaches). Il distingue :</p>\n<ul>\n<li>les <strong>dimensions extérieures</strong>, qui définissent la silhouette ;</li>\n<li>les <strong>dimensions intérieures utiles</strong>, qui définissent la fonction (contenir un format A4, un ordinateur, une bouteille) ;</li>\n<li>les <strong>dimensions des pièces</strong>, qui se déduisent des précédentes en tenant compte des épaisseurs et des montages.</li>\n</ul>\n<p>Une forme complexe (sac trapèze, sac arrondi, sac seau) se décompose en surfaces planes ou faiblement courbées : un sac seau, par exemple, se construit souvent avec un fond rond ou ovale et un corps formé d'un tronc de cône développé à plat.</p>"
      },
      {
       "titre": "Construire le patron",
       "contenu": "<p>Le patron d'un sac se construit à plat, pièce par pièce, en gabarits nets. Pour un sac à soufflets classique :</p>\n<ol>\n<li>tracer le <strong>devant</strong> : un rectangle ou un trapèze aux dimensions du dessin, avec les arrondis d'angles ;</li>\n<li>tracer le <strong>dos</strong>, souvent identique au devant, ou prolongé par le rabat ;</li>\n<li>tracer les <strong>soufflets</strong> : leur hauteur égale la hauteur des côtés du devant, leur largeur l'épaisseur du sac ;</li>\n<li>tracer le <strong>fond</strong> : longueur égale à la largeur du bas du devant, largeur égale à l'épaisseur ;</li>\n<li>placer les lignes de style : découpes, piqûres décoratives, emplacement des accessoires ;</li>\n<li>vérifier toutes les <strong>concordances</strong> de longueur ;</li>\n<li>ajouter les valeurs de montage et les repères pour obtenir les gabarits bruts.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> développer le corps d'un sac seau. Données : fond rond de diamètre 200 mm ; ouverture de diamètre 260 mm ; hauteur du corps 280 mm ; corps en une pièce avec une couture verticale. 1) Périmètre du fond : π × 200 ≈ 628,3 mm. 2) Périmètre de l'ouverture : π × 260 ≈ 816,8 mm. 3) Le corps est un tronc de cône : développé à plat, il donne une portion de couronne ; en CAO, on utilise la fonction de développement de surface ; à la main, on peut le tracer à partir des deux rayons de la couronne. 4) La différence des rayons de 30 mm sur une hauteur de 280 mm donne une génératrice d'environ √(280² + 30²) ≈ 281,6 mm : c'est la hauteur réelle de la pièce, mesurée le long de la couture. 5) Vérifiez que la longueur de l'arc inférieur du corps égale 628,3 mm, celle de l'arc supérieur 816,8 mm. 6) Contrôlez par une maquette en papier fort.</div>"
      },
      {
       "titre": "Vérifier les concordances",
       "contenu": "<p>Les <strong>concordances</strong> garantissent que les pièces s'assemblent sans tension ni pli. On vérifie :</p>\n<ul>\n<li>que le pourtour des soufflets et du fond (côté gauche, fond, côté droit) égale le pourtour du devant sur les mêmes bords ;</li>\n<li>que les arrondis d'angle du devant et les arrondis correspondants des soufflets ont la même longueur d'arc ;</li>\n<li>que les crans d'assemblage tombent aux mêmes points (début et fin d'arrondi, milieu du fond) ;</li>\n<li>que les longueurs de la doublure correspondent à celles de l'extérieur, réduites selon la règle choisie.</li>\n</ul>\n<p>Dans un assemblage piqué retourné, on compare les longueurs <strong>sur la ligne de couture</strong> (à la valeur de couture du bord), pas sur le bord coupé : dans une courbe, les deux longueurs diffèrent.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un écart de concordance de quelques millimètres sur un arrondi suffit à faire « vriller » un soufflet ou plisser un angle. Ce défaut ne se corrige pas au montage : il faut corriger le patron. Mesurez les courbes avec un mètre ruban posé sur la tranche ou avec l'outil de mesure de la CAO.</div>"
      },
      {
       "titre": "La maquette",
       "contenu": "<p>La <strong>maquette</strong> est une première réalisation en volume, en matière bon marché (papier fort, carton fin, toile, cuir de récupération), qui sert à valider rapidement le volume, les proportions et les principales fonctions. Elle permet de :</p>\n<ul>\n<li>présenter le volume au styliste, qui juge les proportions et la silhouette ;</li>\n<li>vérifier que le contenu prévu entre (format A4, ordinateur) ;</li>\n<li>tester la position et la longueur des poignées en portant la maquette ;</li>\n<li>repérer les difficultés de montage (angles, superpositions, accès pour poser un accessoire).</li>\n</ul>\n<p>La maquette est <strong>annotée</strong> directement (corrections au crayon, cotes modifiées) et photographiée. Les modifications sont reportées sur le patron, puis une nouvelle maquette est réalisée si les changements sont importants.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans les maisons de luxe, plusieurs maquettes successives peuvent être nécessaires avant que le styliste valide un volume. Chaque version est datée et conservée jusqu'à la validation, pour pouvoir revenir à une proportion antérieure si besoin.</div>"
      },
      {
       "titre": "Réaliser le prototype",
       "contenu": "<p>Le <strong>prototype</strong> est réalisé dans les matières réelles, avec les fournitures définitives, selon les procédés prévus pour la série. Le prototypiste :</p>\n<ol>\n<li>vérifie les approvisionnements : cuir (article, coloris, épaisseur), doublure, renforts, quincaillerie, fils ;</li>\n<li>réalise les <strong>essais techniques</strong> nécessaires avant de couper les pièces définitives : parage, rembordé, bord teint, collages, piqûres, sur des chutes du cuir réel ;</li>\n<li>coupe les pièces en respectant zones et prêtant ;</li>\n<li>prépare et assemble selon un ordre provisoire, qu'il note au fur et à mesure ;</li>\n<li>relève les temps des opérations principales ;</li>\n<li>contrôle le prototype par rapport au dessin et au cahier des charges.</li>\n</ol>\n<p>Les difficultés rencontrées sont autant d'informations pour l'industrialisation : une opération délicate à réaliser au prototype le sera encore plus en série, avec des opérateurs qui ne connaissent pas le modèle.</p>"
      },
      {
       "titre": "Mettre au point et formaliser",
       "contenu": "<p>Le prototype est évalué avec le styliste et le responsable technique sur trois plans : <strong>esthétique</strong> (silhouette, proportions, détails), <strong>fonctionnel</strong> (portage, ouverture, contenu, tenue) et <strong>technique</strong> (faisabilité, temps, coût, qualité). Les modifications décidées sont listées dans une <strong>fiche de modification</strong> : pièce concernée, modification, raison, validation.</p>\n<p>Le prototypiste corrige alors les gabarits, crée une nouvelle version, et réalise si nécessaire un second prototype. Lorsque le modèle est validé, il formalise :</p>\n<ul>\n<li>les gabarits définitifs et leurs fichiers ;</li>\n<li>la nomenclature complète ;</li>\n<li>l'ordre de montage et les points clés de chaque opération ;</li>\n<li>les résultats des essais et les choix de procédés ;</li>\n<li>un <strong>échantillon de référence</strong> (le prototype validé ou un exemplaire de présérie), signé et daté.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un prototype réussi mais non documenté ne sert à rien pour la série. Le travail du prototypiste n'est terminé que lorsque toutes les informations permettant de reproduire le modèle à l'identique sont formalisées.</div>"
      },
      {
       "titre": "Estimer le coût dès le prototype",
       "contenu": "<p>Le prototype permet une première estimation du coût de revient de fabrication. On relève les surfaces des pièces cuir (calculées en CAO ou par rectangles englobants), on applique un taux de chute, on chiffre les fournitures à partir de la nomenclature et on estime les temps à partir de ceux relevés au prototype, corrigés pour la série (un opérateur entraîné, en série, va plus vite que le prototypiste qui découvre le modèle).</p>\n<p>Si le coût estimé dépasse la contrainte du cahier des charges, le prototypiste propose des simplifications : réduire le nombre de pièces (un devant d'une seule pièce au lieu de deux), remplacer un bord teint intérieur par un bord rembordé machine, utiliser une quincaillerie standard, mieux placer les pièces sur la peau. Chaque proposition est soumise au styliste, car elle peut modifier l'aspect du produit.</p>\n<p>Le tableau suivant illustre l'effet de quelques simplifications sur un sac dont le coût estimé dépasse la cible ; les valeurs sont des exemples pédagogiques :</p>\n<table>\n<thead><tr><th>Simplification proposée</th><th>Gain estimé</th><th>Effet sur l'aspect</th></tr></thead>\n<tbody>\n<tr><td>Devant en une pièce au lieu de deux</td><td>Une opération d'assemblage en moins, environ 4 min</td><td>Disparition d'une couture décorative : à valider par le styliste</td></tr>\n<tr><td>Bord rembordé machine au lieu de bord teint sur les pièces intérieures</td><td>Environ 6 min</td><td>Invisible à l'extérieur</td></tr>\n<tr><td>Anneaux standard du catalogue au lieu d'anneaux spécifiques</td><td>Coût des fournitures réduit</td><td>Faible si la finition est identique</td></tr>\n<tr><td>Doublure textile au lieu de doublure cuir pour la poche intérieure</td><td>Économie de cuir</td><td>Visible à l'ouverture du sac</td></tr>\n</tbody>\n</table>\n<p>Ce type de tableau aide la décision : il chiffre le gain et rend visible la conséquence esthétique de chaque option.</p>"
      }
     ],
     "points_cles": [
      "En maroquinerie, le volume est défini par les dimensions et les lignes, sans forme.",
      "On distingue dimensions extérieures, dimensions intérieures utiles et dimensions des pièces.",
      "Le patron se construit en gabarits nets, puis on ajoute valeurs et repères.",
      "Les concordances se vérifient sur la ligne de couture, en particulier dans les arrondis.",
      "Un tronc de cône se développe en portion de couronne ; sa génératrice se calcule avec le théorème de Pythagore.",
      "La maquette valide volume, proportions et fonctions à moindre coût.",
      "Le prototype se réalise en matières réelles après des essais techniques sur chutes.",
      "Le travail se termine par la formalisation : gabarits, nomenclature, ordre de montage, essais, échantillon de référence."
     ],
     "lexique": [
      {
       "terme": "Dimension utile",
       "def": "Dimension intérieure qui conditionne la fonction de contenance."
      },
      {
       "terme": "Concordance",
       "def": "Égalité des longueurs de deux bords destinés à être assemblés."
      },
      {
       "terme": "Tronc de cône",
       "def": "Volume compris entre deux cercles parallèles de diamètres différents, utilisé pour les sacs seaux."
      },
      {
       "terme": "Génératrice",
       "def": "Segment qui relie le bord inférieur au bord supérieur d'un cône, le long de sa surface."
      },
      {
       "terme": "Maquette",
       "def": "Réalisation en volume en matière bon marché pour valider le volume et les proportions."
      },
      {
       "terme": "Fiche de modification",
       "def": "Document qui enregistre une modification de modèle, sa raison et sa validation."
      },
      {
       "terme": "Échantillon de référence",
       "def": "Exemplaire validé, daté et signé, qui sert de référence pour la série."
      },
      {
       "terme": "Développement de surface",
       "def": "Mise à plat d'une surface en volume pour obtenir un patron."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 7 — Option sellerie garnissage",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bcuir-sellerie-marches-exigences",
     "titre": "La sellerie garnissage : marchés, produits et exigences techniques",
     "niveau": "1re",
     "options": [
      "sellerie"
     ],
     "duree": 45,
     "objectifs": [
      "Identifier les secteurs et les produits de la sellerie garnissage",
      "Décrire la constitution d'un élément garni",
      "Recenser les exigences techniques propres à chaque secteur",
      "Situer les principales exigences de comportement au feu",
      "Lire un cahier des charges client de sellerie"
     ],
     "sections": [
      {
       "titre": "Un métier, plusieurs marchés",
       "contenu": "<p>La <strong>sellerie garnissage</strong> regroupe la conception et la fabrication de revêtements souples (cuir, textiles, matériaux enduits) posés sur des structures garnies de mousses ou de rembourrages. Elle s'exerce dans des secteurs très variés :</p>\n<table>\n<thead><tr><th>Secteur</th><th>Produits</th><th>Particularités</th></tr></thead>\n<tbody>\n<tr><td>Automobile</td><td>Sièges, appuie-tête, garnitures de portes, planches de bord gainées, volants, pommeaux</td><td>Grandes séries chez les équipementiers ; petites séries et sur-mesure en haut de gamme, préparation et restauration de véhicules anciens</td></tr>\n<tr><td>Aéronautique</td><td>Sièges passagers et équipages, aménagements de cabines d'avions d'affaires et d'hélicoptères</td><td>Exigences très strictes de masse, de tenue au feu, de traçabilité</td></tr>\n<tr><td>Ferroviaire</td><td>Sièges de trains, de tramways, de métros</td><td>Résistance au vandalisme et à l'usure, tenue au feu</td></tr>\n<tr><td>Nautique</td><td>Sellerie de bateaux de plaisance, coussins, bâches, capotes</td><td>Résistance à l'eau, aux UV, au sel, aux moisissures</td></tr>\n<tr><td>Ameublement</td><td>Fauteuils, canapés, chaises, banquettes, têtes de lit ; mobilier pour hôtels, restaurants, salles de spectacle</td><td>Confort, esthétique, réglementation des établissements recevant du public</td></tr>\n<tr><td>Médical et technique</td><td>Tables d'examen, fauteuils de soins, équipements de protection</td><td>Nettoyabilité, désinfection</td></tr>\n</tbody>\n</table>\n<p>La sellerie équestre (selles, harnais) relève d'un savoir-faire voisin mais distinct, centré sur le cuir épais à tannage végétal et la couture main.</p>"
      },
      {
       "titre": "La constitution d'un élément garni",
       "contenu": "<p>Un élément garni (assise, dossier, panneau) est formé de plusieurs couches, de l'intérieur vers l'extérieur :</p>\n<ol>\n<li>la <strong>structure</strong> : armature métallique, bois, coque en plastique ou en composite ; elle porte les charges ;</li>\n<li>la <strong>suspension</strong> éventuelle : ressorts, sangles élastiques, nappe ;</li>\n<li>le <strong>garnissage</strong> : mousses moulées ou découpées, ouate, feutre, ou rembourrages traditionnels (crin, ressorts ensachés) ;</li>\n<li>la <strong>couche de confort</strong> : mousse fine ou ouate contrecollée sous le revêtement, qui adoucit le toucher et masque les irrégularités ;</li>\n<li>le <strong>revêtement</strong> (ou housse, ou coiffe) : pièces de cuir, de textile ou de matériau enduit, assemblées par couture ;</li>\n<li>les <strong>moyens de fixation</strong> : agrafes, crochets, joncs de fixation, bandes auto-agrippantes, colles.</li>\n</ol>\n<p>Le revêtement n'est pas un simple « habit » : sa coupe, sa tension et ses coutures doivent épouser exactement le garnissage, et les deux se conçoivent ensemble.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le sellier garnisseur travaille l'ensemble revêtement et garnissage. Une housse parfaite posée sur une mousse mal dimensionnée fera des plis ; une mousse parfaite sous une housse mal coupée aussi.</div>"
      },
      {
       "titre": "Les exigences techniques",
       "contenu": "<p>Selon le secteur, le cahier des charges impose des exigences précises sur les matériaux et sur l'élément fini :</p>\n<ul>\n<li><strong>résistance à l'usure</strong> : abrasion des zones de frottement (bourrelets latéraux des sièges automobiles, bords d'assise) ;</li>\n<li><strong>solidité des couleurs</strong> à la lumière (sièges exposés au soleil derrière un vitrage), au frottement, à la sueur ;</li>\n<li><strong>tenue à la chaleur et au froid</strong>, cycles climatiques ;</li>\n<li><strong>résistance des coutures</strong> et des fixations ;</li>\n<li><strong>confort</strong> : portance et résilience des mousses, respirabilité ;</li>\n<li><strong>émissions</strong> : limitation des odeurs et des composés organiques volatils dans l'habitacle d'un véhicule ;</li>\n<li><strong>masse</strong> : essentielle en aéronautique ;</li>\n<li><strong>nettoyabilité</strong> et résistance aux produits de nettoyage, essentielles en milieu médical et dans les transports publics ;</li>\n<li><strong>comportement au feu</strong>, dans presque tous les secteurs.</li>\n</ul>\n<p>Les constructeurs automobiles et aéronautiques possèdent leurs propres <strong>normes internes</strong>, souvent plus exigeantes que les normes générales, qui précisent les essais et les seuils. Le fournisseur doit les respecter et fournir des preuves (procès-verbaux d'essais) pour chaque matière et chaque lot.</p>"
      },
      {
       "titre": "Le comportement au feu",
       "contenu": "<p>Le <strong>comportement au feu</strong> est une exigence de sécurité majeure, car les sièges et garnitures représentent une charge combustible importante dans un espace clos. Chaque secteur a ses propres essais et seuils :</p>\n<table>\n<thead><tr><th>Secteur</th><th>Référentiels courants</th><th>Principe de l'essai</th></tr></thead>\n<tbody>\n<tr><td>Automobile</td><td>Norme américaine FMVSS 302, norme ISO 3795 et normes des constructeurs</td><td>Vitesse de propagation horizontale de la flamme sur une éprouvette ; elle doit rester sous un seuil, de l'ordre de 100 mm/min selon les référentiels</td></tr>\n<tr><td>Aéronautique</td><td>Réglementations de certification des avions de transport (exigences de type « 25.853 » en Europe et aux États-Unis)</td><td>Essais de flamme verticale (durée de combustion, longueur brûlée) et, pour les coussins de sièges, essai au brûleur</td></tr>\n<tr><td>Ferroviaire</td><td>Norme européenne EN 45545-2</td><td>Ensemble d'essais (propagation, chaleur dégagée, fumées, toxicité) selon le niveau de risque du matériel</td></tr>\n<tr><td>Ameublement en établissements recevant du public</td><td>Règlement de sécurité incendie des ERP ; essais d'allumabilité du mobilier rembourré (série NF EN 1021)</td><td>Résistance à l'allumage par une cigarette et par une petite flamme équivalente à une allumette</td></tr>\n</tbody>\n</table>\n<p>Ces exigences portent souvent sur l'<strong>ensemble</strong> revêtement, couche de confort et mousse, et pas seulement sur chaque matière séparée : changer une ouate ou une colle peut faire échouer l'essai de l'ensemble.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remplacer une matière par une autre « équivalente » sans nouvel essai feu est interdit dans les secteurs réglementés. En aéronautique notamment, toute modification d'une matière certifiée nécessite une nouvelle justification. Les références exactes des matières utilisées doivent être tracées sur chaque lot.</div>"
      },
      {
       "titre": "Lire un cahier des charges client",
       "contenu": "<p>En sellerie, la commande arrive souvent avec un <strong>cahier des charges</strong> du client (constructeur, architecte d'intérieur, armateur) qui précise : le produit et ses plans ou un exemplaire de référence, les matières imposées (références de cuir, de fils, de mousses), les couleurs et la position des coutures décoratives, les exigences d'essais, les quantités et le planning, les conditions de livraison et de contrôle.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> extraire les exigences d'un cahier des charges de sellerie. 1) Listez les données d'entrée fournies : plans, fichiers CAO, structure, échantillon. 2) Relevez les matières imposées avec leurs références exactes et vérifiez leur disponibilité. 3) Repérez les exigences réglementaires (feu) et contractuelles (normes du client) et les preuves à fournir. 4) Notez les exigences d'aspect : coutures (type, couleur du fil, distance au bord, longueur de point), passepoils, perforations, alignement des coutures entre éléments voisins. 5) Identifiez les points flous et posez les questions par écrit au client avant de commencer. 6) Établissez un tableau de synthèse des exigences, qui servira ensuite de base à la fiche de contrôle.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans la restauration de véhicules anciens ou de mobilier, le « cahier des charges » est souvent l'objet lui-même : on relève les pièces existantes avant de les déposer, on photographie chaque étape du démontage et on note les techniques d'origine (types de coutures, garnissage traditionnel) pour les reproduire fidèlement.</div>"
      },
      {
       "titre": "Cuirs et matières de la sellerie",
       "contenu": "<p>Les cuirs de sellerie automobile et d'ameublement sont le plus souvent des cuirs de <strong>bovin</strong>, d'épaisseur de l'ordre de 0,9 à 1,4 mm, tannés au chrome ou sans chrome, à finition pigmentée ou semi-aniline pour résister à l'usure et aux taches. Ils sont fournis en peaux entières de grande surface, qui permettent de couper les grandes pièces (plateaux d'assise, dossiers de canapé) d'un seul tenant.</p>\n<p>Les cuirs dits <strong>perforés</strong> (pour la ventilation des sièges) et les cuirs <strong>matelassés</strong> sont fréquents. Les textiles techniques (velours, tissus enduits, microfibres) et les matériaux enduits complètent l'offre, avec des performances d'usure et de nettoyage élevées.</p>\n<p>Le sellier tient compte de deux propriétés en particulier : le <strong>prêtant</strong>, utile pour épouser les galbes mais à orienter de façon identique sur les pièces symétriques, et la <strong>mémoire</strong> du matériau, c'est-à-dire sa capacité à garder la forme après tension, qui conditionne l'absence de plis dans le temps.</p>"
      },
      {
       "titre": "Organisation des entreprises de sellerie",
       "contenu": "<p>Les entreprises de sellerie garnissage sont de tailles très différentes. Les <strong>équipementiers</strong> automobiles et aéronautiques produisent en série des coiffes et des sièges complets pour les constructeurs, avec une organisation industrielle : bureau d'études, coupe numérique, lignes de couture, postes de pose, laboratoires d'essais. Les <strong>selleries artisanales</strong> travaillent à l'unité ou en petite série : restauration de véhicules de collection, aménagement de bateaux, réfection de mobilier, sur-mesure pour une clientèle exigeante.</p>\n<p>Le titulaire du bac pro peut y occuper des postes de prototypiste (mise au point des housses nouvelles), de coupeur, de couturier sellier, de garnisseur ou de poseur, puis évoluer vers le contrôle, la conduite d'équipe ou la création de sa propre sellerie. Dans tous les cas, il doit maîtriser la chaîne complète : relevé, patronage, coupe, couture, garnissage et pose, car chaque étape conditionne la suivante.</p>\n<ul>\n<li>En série, l'accent est mis sur la reproductibilité, la cadence et la traçabilité.</li>\n<li>À l'unité, l'accent est mis sur l'adaptation à chaque objet et la qualité de finition.</li>\n</ul>"
      }
     ],
     "points_cles": [
      "La sellerie garnissage s'exerce dans l'automobile, l'aéronautique, le ferroviaire, le nautique, l'ameublement et le médical.",
      "Un élément garni comprend structure, suspension, garnissage, couche de confort, revêtement et fixations.",
      "Le revêtement et le garnissage se conçoivent ensemble.",
      "Les exigences portent sur l'usure, les couleurs, le climat, les coutures, le confort, les émissions, la masse et le feu.",
      "Chaque secteur a ses essais feu ; ils portent souvent sur l'ensemble des couches.",
      "Aucune substitution de matière sans nouvel essai dans les secteurs réglementés.",
      "Le cahier des charges client se traduit en tableau d'exigences, base de la fiche de contrôle.",
      "Les cuirs de sellerie sont en général des bovins de 0,9 à 1,4 mm, à finition résistante."
     ],
     "lexique": [
      {
       "terme": "Garnissage",
       "def": "Ensemble des matériaux de rembourrage qui donnent le volume et le confort d'un élément garni."
      },
      {
       "terme": "Revêtement",
       "def": "Enveloppe extérieure d'un élément garni, en cuir, textile ou matériau enduit."
      },
      {
       "terme": "Coiffe",
       "def": "Autre nom de la housse qui recouvre un siège ou un élément garni."
      },
      {
       "terme": "Couche de confort",
       "def": "Mousse fine ou ouate placée sous le revêtement pour adoucir le toucher."
      },
      {
       "terme": "Structure",
       "def": "Armature qui porte les charges d'un élément garni."
      },
      {
       "terme": "Comportement au feu",
       "def": "Façon dont un matériau ou un ensemble réagit à une flamme : allumage, propagation, fumées."
      },
      {
       "terme": "ERP",
       "def": "Établissement recevant du public, soumis à un règlement de sécurité incendie."
      },
      {
       "terme": "Mémoire",
       "def": "Capacité d'un matériau à conserver sa forme après tension."
      }
     ]
    },
    {
     "id": "bcuir-sellerie-releve-patronage",
     "titre": "Relevé de forme et patronage d'une housse",
     "niveau": "1re-Tle",
     "options": [
      "sellerie"
     ],
     "duree": 50,
     "objectifs": [
      "Réaliser un relevé de forme sur un élément à garnir",
      "Tracer les lignes de coutures en fonction du style et des galbes",
      "Établir les gabarits d'une housse avec valeurs et repères",
      "Tenir compte de la tension et de l'embu dans le patronage",
      "Exploiter un fichier de surface fourni par un client"
     ],
     "sections": [
      {
       "titre": "Les données de départ",
       "contenu": "<p>Le patronage d'une housse de sellerie part toujours d'un <strong>objet réel</strong> ou de sa <strong>définition numérique</strong> : une assise garnie de sa mousse, un dossier, une banquette, un panneau de porte. Selon le cas, le sellier dispose :</p>\n<ul>\n<li>de l'élément garni nu (mousse posée sur sa structure), sur lequel il fait un relevé ;</li>\n<li>d'une ancienne housse à reproduire, qu'il décout pour en relever les pièces (cas de la restauration) ;</li>\n<li>d'un fichier de surface ou de patron fourni par le client (cas de l'industrie automobile ou aéronautique) ;</li>\n<li>d'un dessin du designer qui indique les lignes de couture et les matières.</li>\n</ul>\n<p>Le <strong>style</strong> de la housse (position des coutures, plates-bandes, passepoils, capitons) est souvent défini par le designer ; le sellier doit le traduire en pièces réalisables, en tenant compte du galbe, de la tension et des contraintes de pose.</p>"
      },
      {
       "titre": "Le relevé de forme",
       "contenu": "<p>Le <strong>relevé de forme</strong> consiste à reporter la surface de l'objet sur un support souple qu'on peut ensuite mettre à plat. Les techniques courantes :</p>\n<ul>\n<li>le <strong>film plastique</strong> (souvent un film étirable recouvert d'un adhésif de masquage) tendu sur la mousse, sur lequel on trace directement les lignes ;</li>\n<li>la <strong>toile</strong> ou le papier fort épinglés et tendus sur la mousse, puis tracés ;</li>\n<li>le <strong>gabarit rigide</strong> pour les surfaces planes (panneaux), relevé au crayon le long des bords.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> relever le plateau d'une assise. 1) Tracez sur la mousse l'axe de symétrie de l'assise au feutre. 2) Recouvrez la moitié de l'assise de film étirable, bien tendu, puis de bandes d'adhésif de masquage qui se chevauchent sans plis. 3) Tracez sur l'adhésif l'axe, les lignes de couture du style (limite plateau, plates-bandes, joues), et des repères d'assemblage tous les 50 à 100 mm environ. 4) Ajoutez des repères de position (avant, arrière, axe). 5) Découpez le relevé en suivant les lignes tracées et mettez chaque pièce à plat sur un carton ; fendez légèrement les zones très galbées pour les aplatir sans déformation, en notant la valeur de chaque fente. 6) Symétrisez par rapport à l'axe pour obtenir la pièce complète. 7) Vérifiez les concordances avec les pièces voisines avant d'ajouter les valeurs.</div>"
      },
      {
       "titre": "Placer les lignes de couture",
       "contenu": "<p>Les lignes de couture ne servent pas seulement au décor : elles permettent de passer d'une surface galbée à des pièces planes. On les place :</p>\n<ul>\n<li>sur les <strong>arêtes</strong> et les changements de direction (bord d'assise, jonction plateau et joue), là où une seule pièce ne pourrait pas épouser la forme ;</li>\n<li>dans les <strong>creux</strong>, où la couture peut être tirée vers l'intérieur par une fixation (jonc, agrafes), ce qui crée le galbe ;</li>\n<li>selon les <strong>lignes de style</strong> du designer (bandes, motifs, perforations délimitées).</li>\n</ul>\n<p>Une surface à double courbure (bombée dans deux directions) ne peut pas être couverte par une pièce plane sans tension ni plis. On la découpe en plusieurs pièces, ou on utilise le prêtant du cuir et la compressibilité de la mousse pour absorber la différence, en tendant le revêtement à la pose.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> plus une surface est galbée, plus il faut de pièces ou de tension. Le sellier choisit le compromis entre le nombre de coutures (visibles, coûteuses) et la tension (qui risque de faire des plis ou de déformer la mousse).</div>"
      },
      {
       "titre": "Valeurs, tension et embu",
       "contenu": "<p>Le gabarit brut d'une pièce de housse comprend :</p>\n<ul>\n<li>la <strong>valeur de couture</strong>, souvent de l'ordre de 8 à 12 mm selon le type de couture et l'épaisseur des matières (plus large si la couture est rabattue et surpiquée de chaque côté) ;</li>\n<li>les <strong>valeurs de fixation</strong> : rabat qui passe sous la structure pour être agrafé, fourreau qui reçoit un jonc ou un fil de tension ;</li>\n<li>les <strong>repères</strong> d'assemblage (crans) et de position (axe, avant).</li>\n</ul>\n<p>Le patron tient compte de la <strong>tension</strong> : pour qu'une housse soit tendue sans plis, elle est souvent légèrement plus petite que la surface relevée (on parle de <strong>réduction</strong> ou de « mise en tension »), d'une valeur qui dépend du prêtant de la matière et de la compressibilité de la mousse. Inversement, sur une arête bombée, on peut prévoir un <strong>embu</strong> : une pièce légèrement plus longue que sa voisine, résorbée à la couture pour suivre l'arrondi.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la réduction de mise en tension n'est pas la même dans les deux directions si le prêtant de la matière est différent en long et en travers. Une housse coupée avec le prêtant mal orienté peut être trop tendue dans un sens et faire des plis dans l'autre. Indiquez toujours le sens de prêtant sur chaque gabarit.</div>"
      },
      {
       "titre": "Pièces types d'une housse de siège",
       "contenu": "<p>Une housse d'assise de siège comprend généralement :</p>\n<table>\n<thead><tr><th>Pièce</th><th>Situation</th><th>Remarques</th></tr></thead>\n<tbody>\n<tr><td>Plateau (ou insert)</td><td>Surface centrale d'appui</td><td>Souvent dans la matière la plus noble, parfois perforée ou matelassée ; zone A de la peau</td></tr>\n<tr><td>Joues (ou bourrelets latéraux)</td><td>Reliefs latéraux de maintien</td><td>Zones de forte usure par frottement à l'entrée et à la sortie du véhicule</td></tr>\n<tr><td>Plates-bandes</td><td>Bandes de pourtour qui forment l'épaisseur</td><td>Assemblées au plateau, souvent avec passepoil</td></tr>\n<tr><td>Bavette avant</td><td>Face avant de l'assise</td><td>Rabat sous la structure pour la fixation</td></tr>\n<tr><td>Fourreaux et rabats</td><td>Dessous, fixations</td><td>Matière secondaire possible, invisibles</td></tr>\n</tbody>\n</table>\n<p>Pour un fauteuil d'ameublement, on trouve des pièces équivalentes : assise, dossier intérieur et extérieur, accoudoirs (manchettes), plates-bandes, ceinture.</p>"
      },
      {
       "titre": "La CAO en sellerie",
       "contenu": "<p>Dans l'industrie, les surfaces des sièges sont définies numériquement par le constructeur. Le bureau d'études de sellerie utilise des logiciels qui <strong>développent</strong> (aplatissent) les surfaces 3D en pièces 2D, en calculant les déformations nécessaires et en tenant compte des propriétés de la matière. Le relevé manuel est alors remplacé, ou complété, par cette mise à plat numérique.</p>\n<p>Les fonctions utiles sont les mêmes qu'en maroquinerie : ajout de valeurs, crans, symétrie, mesure des longueurs de couture, concordances, homothétie et similitude pour décliner un élément (par exemple un siège de largeur différente). On contrôle la mise à plat numérique par un prototype de housse posé sur la mousse réelle, car les logiciels ne reproduisent qu'imparfaitement le comportement du cuir.</p>\n<p>Les gabarits numériques validés alimentent directement les tables de découpe. Comme en maroquinerie, la peau est numérisée, ses défauts et ses zones sont tracés, et le logiciel place les pièces en respectant l'exigence de zone de chacune : plateaux et joues en zone de première qualité, rabats et fourreaux dans les zones secondaires.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans la sellerie automobile, le patron d'une housse peut passer par plusieurs boucles de mise au point : la housse prototype est posée, les plis et les zones mal tendues sont marqués à la craie, le patron est corrigé de quelques millimètres, et l'on recommence jusqu'à l'aspect parfait demandé par le constructeur. Chaque boucle est tracée et datée.</div>"
      },
      {
       "titre": "Reproduire une housse existante",
       "contenu": "<p>En restauration ou en réfection, le sellier reproduit souvent une housse existante. La démarche diffère du relevé sur mousse :</p>\n<ol>\n<li><strong>photographier</strong> la housse en place sous tous les angles, et relever les dimensions principales et la position des coutures ;</li>\n<li><strong>repérer</strong> chaque pièce avant dépose : numéro, sens (haut, avant), côté (gauche, droite), au crayon sur l'envers ;</li>\n<li><strong>déposer</strong> la housse en notant l'ordre et le mode de fixation ;</li>\n<li><strong>découdre</strong> soigneusement les pièces sans les étirer ;</li>\n<li><strong>reporter</strong> chaque pièce à plat sur un carton, en suivant la ligne de couture visible (trous d'aiguille) plutôt que le bord coupé, souvent usé ou déformé ;</li>\n<li><strong>corriger</strong> les déformations dues à l'usure : une pièce de plateau s'allonge avec le temps ; on rétablit la symétrie en s'appuyant sur le côté le moins déformé ;</li>\n<li>ajouter les valeurs de couture et de fixation, et les repères ;</li>\n<li>contrôler les concordances et réaliser si nécessaire une housse d'essai en toile.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une ancienne housse est déformée par l'usage. On relève les lignes de couture, pas les bords, et on corrige l'allongement en s'appuyant sur la symétrie et sur les dimensions de la mousse ou de la structure.</div>"
      }
     ],
     "points_cles": [
      "Le patronage part d'un objet réel, d'une ancienne housse ou d'un fichier numérique.",
      "Le relevé se fait sur film et adhésif, sur toile ou par gabarit rigide, avec axe et repères.",
      "On met les pièces relevées à plat, en notant les fentes nécessaires dans les galbes.",
      "Les lignes de couture se placent sur les arêtes, dans les creux et selon le style.",
      "Une surface à double courbure exige plusieurs pièces ou une mise en tension.",
      "Le gabarit brut comprend valeurs de couture, valeurs de fixation et repères.",
      "La réduction de mise en tension et l'embu dépendent du prêtant, à indiquer sur chaque gabarit.",
      "La mise à plat numérique se valide toujours par une housse prototype posée sur la mousse réelle."
     ],
     "lexique": [
      {
       "terme": "Relevé de forme",
       "def": "Report de la surface d'un objet sur un support souple pour obtenir un patron."
      },
      {
       "terme": "Plateau",
       "def": "Partie centrale d'une assise ou d'un dossier, surface d'appui principale."
      },
      {
       "terme": "Joue",
       "def": "Relief latéral de maintien d'un siège."
      },
      {
       "terme": "Plate-bande",
       "def": "Bande de pourtour qui forme l'épaisseur d'un coussin ou d'une assise."
      },
      {
       "terme": "Bavette",
       "def": "Pièce de face avant d'une assise, rabattue sous la structure."
      },
      {
       "terme": "Fourreau",
       "def": "Repli cousu qui reçoit un jonc ou un fil de tension pour la fixation."
      },
      {
       "terme": "Mise en tension",
       "def": "Réduction volontaire du patron pour que la housse soit tendue sans plis."
      },
      {
       "terme": "Double courbure",
       "def": "Surface bombée dans deux directions, impossible à couvrir d'une pièce plane sans déformation."
      }
     ]
    },
    {
     "id": "bcuir-sellerie-garnissage",
     "titre": "Garnissage : structures, suspensions, mousses et rembourrages",
     "niveau": "Tle",
     "options": [
      "sellerie"
     ],
     "duree": 50,
     "objectifs": [
      "Décrire les structures et les suspensions d'un élément garni",
      "Choisir une mousse selon la masse volumique, la portance et l'usage",
      "Découper, coller et mettre en forme des mousses",
      "Distinguer garnissage moderne et garnissage traditionnel",
      "Contrôler le confort et la conformité d'un garnissage"
     ],
     "sections": [
      {
       "titre": "Structures et suspensions",
       "contenu": "<p>La <strong>structure</strong> porte les charges et donne la forme générale. Selon le secteur, elle est en tube ou tôle d'acier (sièges automobiles et ferroviaires), en aluminium ou en composite (aéronautique, pour la légèreté), en bois massif ou panneaux (ameublement), en coque plastique moulée (sièges de collectivités).</p>\n<p>La <strong>suspension</strong> se place entre la structure et le garnissage pour apporter de la souplesse :</p>\n<ul>\n<li><strong>sangles élastiques</strong> tendues sur le cadre (ameublement contemporain) ;</li>\n<li><strong>ressorts</strong> : ressorts ondulés (en zigzag), ressorts hélicoïdaux, ressorts ensachés (chaque ressort dans une poche textile) ;</li>\n<li><strong>nappes</strong> métalliques ou textiles (sièges automobiles) ;</li>\n<li>dans certains cas, aucune suspension : la mousse moulée, posée sur une coque, assure seule le confort.</li>\n</ul>\n<p>Le sellier garnisseur ne fabrique pas toujours la structure, mais il doit la contrôler (stabilité, absence d'arêtes vives qui couperaient le revêtement, présence des points de fixation) et la préparer (pose de sangles, de toiles de protection).</p>"
      },
      {
       "titre": "Choisir une mousse",
       "contenu": "<p>Les mousses de <strong>polyuréthane</strong> sont les plus utilisées. On les trouve en blocs découpés ou en pièces <strong>moulées</strong> (injectées directement à la forme dans un moule, procédé courant en automobile). Leur choix repose sur plusieurs caractéristiques, indiquées dans la fiche technique du fournisseur :</p>\n<table>\n<thead><tr><th>Caractéristique</th><th>Ce qu'elle indique</th><th>Effet sur le produit</th></tr></thead>\n<tbody>\n<tr><td>Masse volumique (kg/m³)</td><td>Quantité de matière par unité de volume</td><td>Durabilité : à usage égal, une mousse plus dense s'affaisse moins vite</td></tr>\n<tr><td>Portance (indentation)</td><td>Force nécessaire pour comprimer la mousse d'un pourcentage donné</td><td>Fermeté ressentie : assise ferme ou moelleuse</td></tr>\n<tr><td>Résilience</td><td>Capacité à reprendre sa forme</td><td>Sensation de « rebond » et durée de vie</td></tr>\n<tr><td>Déformation rémanente</td><td>Perte d'épaisseur après compression prolongée</td><td>Tassement dans le temps</td></tr>\n<tr><td>Comportement au feu</td><td>Classement selon les essais du secteur</td><td>Conformité réglementaire</td></tr>\n</tbody>\n</table>\n<p>Un même siège combine souvent plusieurs mousses : une mousse ferme en partie basse pour le soutien, une mousse plus souple en surface pour le confort, et une mousse très ferme dans les joues de maintien.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la masse volumique ne dit rien de la fermeté. Deux mousses de même masse volumique peuvent avoir des portances très différentes. Lisez toujours les deux valeurs sur la fiche technique, et testez sur échantillon.</div>"
      },
      {
       "titre": "Découper et assembler les mousses",
       "contenu": "<p>Les blocs de mousse sont découpés à la scie à ruban, au couteau électrique à double lame alternative, ou par découpe numérique (lame oscillante, jet d'eau). Les pièces sont ensuite assemblées par <strong>collage</strong>, avec des colles adaptées (souvent en bombe ou au pistolet, en couche fine sur les deux faces) pour ne pas créer de zone dure.</p>\n<p>Pour donner du galbe, on peut :</p>\n<ul>\n<li>tailler la mousse en biseau ou en arrondi (on parle de <strong>dégrossissage</strong> puis de finition au couteau ou à la ponceuse) ;</li>\n<li>coller ensemble des couches de portances différentes ;</li>\n<li>coller un bord sur lui-même pour former un arrondi (bord replié collé) ;</li>\n<li>utiliser des mousses moulées, qui ont directement la forme voulue.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dimensionner la mousse d'un coussin d'assise. Données : coussin fini de 500 × 500 mm, épaisseur finie 100 mm ; housse en cuir ; on souhaite une housse bien tendue. 1) Pour que la housse soit tendue, la mousse est légèrement plus grande que la housse : on ajoute souvent quelques millimètres à 1 cm par côté, selon la fermeté de la mousse et le prêtant du cuir, par exemple 10 mm. 2) Mousse : 510 × 510 mm. 3) Épaisseur : on peut prévoir une couche de confort (ouate collée sur le dessus) qui donne un aspect bombé, par exemple 10 mm, soit une mousse de 100 mm plus 10 mm d'ouate. 4) Découpez, collez l'ouate, posez sous la housse et contrôlez : absence de plis, angles bien remplis. 5) Ajustez la surcote sur le prototype et reportez-la sur la fiche technique.</div>"
      },
      {
       "titre": "Le garnissage traditionnel",
       "contenu": "<p>En ameublement de qualité et en restauration, le <strong>garnissage traditionnel</strong> reste pratiqué. Il repose sur des matériaux naturels et des gestes spécifiques :</p>\n<ol>\n<li>pose de <strong>sangles</strong> de jute tendues et croisées sur le bâti ;</li>\n<li>pose et <strong>guindage</strong> des ressorts (ils sont cousus aux sangles et reliés entre eux par une ficelle qui fixe leur hauteur et leur forme) ;</li>\n<li>pose d'une <strong>toile forte</strong> sur les ressorts ;</li>\n<li>mise en place du <strong>crin</strong> (animal ou végétal), réparti et piqué ;</li>\n<li>réalisation des <strong>bourrelets</strong> de bord (rouleaux de crin cousus qui définissent l'arête) ;</li>\n<li>pose d'une <strong>toile blanche</strong> (mise en blanc) qui donne la forme définitive ;</li>\n<li>pose d'une <strong>ouate</strong> puis du <strong>tissu ou du cuir</strong> de couverture, fixé par clous ou agrafes, et finition par galon ou clous décoratifs.</li>\n</ol>\n<p>Ce garnissage est long et demande une grande maîtrise, mais il est durable et réparable. Il est souvent imposé dans la restauration de mobilier ancien, où l'on respecte les techniques d'origine.</p>"
      },
      {
       "titre": "Le capitonnage et le matelassage",
       "contenu": "<p>Le <strong>capitonnage</strong> consiste à retenir le revêtement en profondeur dans le garnissage, en des points répartis selon un motif (souvent en losanges), avec des boutons ou de simples points de fixation. Les plis qui relient les points forment des motifs caractéristiques. Il nécessite :</p>\n<ul>\n<li>un tracé précis du motif sur la mousse et sur le revêtement, avec une <strong>surcote</strong> du revêtement entre les points pour fournir la matière qui s'enfonce ;</li>\n<li>des perçages dans la mousse à l'emplacement des points ;</li>\n<li>une répartition régulière des plis lors de la pose.</li>\n</ul>\n<p>Le <strong>matelassage</strong> consiste à piquer le revêtement avec une ouate ou une mousse fine et une doublure de dos, selon un motif (lignes, losanges, carreaux). Le revêtement matelassé, plus épais et plus court après piqûre, se prépare avant la coupe définitive : on matelasse une pièce plus grande, puis on recoupe au gabarit.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour un capitonnage, la surcote du revêtement entre deux points dépend de la profondeur d'enfoncement et de l'épaisseur du garnissage. Elle se détermine par essai sur une petite zone avant de tracer toute la pièce, puis elle est notée sur la fiche technique pour être reproduite à l'identique.</div>"
      },
      {
       "titre": "Contrôler le garnissage",
       "contenu": "<p>Le garnissage se contrôle avant la pose du revêtement, car un défaut devient difficile à corriger ensuite. On vérifie :</p>\n<ul>\n<li>la <strong>conformité des mousses</strong> : références, dimensions, épaisseurs, sens de pose, étiquetage feu ;</li>\n<li>la <strong>géométrie</strong> : symétrie gauche-droite, hauteur d'assise, profil des joues, à l'aide de gabarits de contrôle ;</li>\n<li>l'<strong>absence de zones dures</strong> (colle en excès) ou de creux ;</li>\n<li>la <strong>fixation</strong> des mousses sur la structure ;</li>\n<li>le <strong>confort</strong> : essai d'assise par un ou plusieurs testeurs, mesure de l'enfoncement sous une charge de référence en présérie.</li>\n</ul>\n<p>Pour les sièges techniques, les clients exigent souvent des essais d'endurance (cycles de charge répétés) qui vérifient l'absence de tassement excessif et de déchirure du revêtement aux points de fixation.</p>"
      },
      {
       "titre": "Santé et environnement liés au garnissage",
       "contenu": "<p>Le travail des mousses produit des poussières et des chutes volumineuses. La découpe se fait avec aspiration, et les chutes sont triées : les chutes de mousse polyuréthane propres peuvent être valorisées (fabrication de mousse agglomérée, rembourrage), alors que les mousses souillées de colle sont plus difficiles à recycler.</p>\n<p>Les colles en bombe et les colles solvantées utilisées pour les mousses exposent aux mêmes risques que les colles de la maroquinerie : ventilation, aspiration, absence de flamme, lecture de la fiche de données de sécurité. Les colles en phase aqueuse sont de plus en plus utilisées pour les mousses. Le crin et les fibres naturelles anciennes, lors d'une restauration, peuvent être poussiéreux et contenir des parasites : on travaille avec un masque adapté et on évacue les anciens garnissages comme des déchets à part.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le garnissage conditionne à la fois le confort, la durée de vie et l'aspect de la housse. Ses références (mousses, ouates, colles) font partie du dossier technique au même titre que celles du cuir, en particulier lorsque des exigences de comportement au feu s'appliquent à l'ensemble.</div>"
      }
     ],
     "points_cles": [
      "La structure porte les charges ; la suspension (sangles, ressorts, nappes) apporte la souplesse.",
      "Une mousse se choisit par sa masse volumique, sa portance, sa résilience, son tassement et son comportement au feu.",
      "Masse volumique et portance sont indépendantes : il faut lire les deux.",
      "Un siège combine souvent plusieurs mousses de fermetés différentes.",
      "La mousse est souvent légèrement plus grande que la housse pour que celle-ci soit tendue.",
      "Le garnissage traditionnel utilise sangles, ressorts guindés, crin, bourrelets, toile et ouate.",
      "Le capitonnage exige une surcote du revêtement entre les points, déterminée par essai.",
      "Le garnissage se contrôle avant la pose du revêtement."
     ],
     "lexique": [
      {
       "terme": "Suspension",
       "def": "Éléments souples placés entre la structure et le garnissage : sangles, ressorts, nappes."
      },
      {
       "terme": "Mousse moulée",
       "def": "Mousse injectée directement à sa forme définitive dans un moule."
      },
      {
       "terme": "Déformation rémanente",
       "def": "Perte d'épaisseur d'une mousse après compression prolongée."
      },
      {
       "terme": "Guindage",
       "def": "Liaison des ressorts entre eux par une ficelle qui fixe leur hauteur et leur forme."
      },
      {
       "terme": "Crin",
       "def": "Fibre animale ou végétale utilisée dans le garnissage traditionnel."
      },
      {
       "terme": "Bourrelet",
       "def": "Rouleau de garnissage cousu qui définit l'arête d'un siège traditionnel."
      },
      {
       "terme": "Capitonnage",
       "def": "Fixation du revêtement en profondeur en des points répartis selon un motif."
      },
      {
       "terme": "Matelassage",
       "def": "Piqûre d'un revêtement avec une ouate et une doublure selon un motif."
      },
      {
       "terme": "Surcote",
       "def": "Supplément de dimension prévu pour compenser un enfoncement, une tension ou un rétrécissement."
      }
     ]
    },
    {
     "id": "bcuir-sellerie-coutures-pose",
     "titre": "Coutures de sellerie, pose et finition des revêtements",
     "niveau": "Tle",
     "options": [
      "sellerie"
     ],
     "duree": 50,
     "objectifs": [
      "Distinguer les coutures d'assemblage et les coutures décoratives de sellerie",
      "Réaliser un passepoil et des surpiqûres régulières",
      "Choisir un mode de fixation du revêtement sur la structure",
      "Ordonner les étapes de pose d'une housse",
      "Contrôler l'aspect final d'un élément garni"
     ],
     "sections": [
      {
       "titre": "Les coutures d'assemblage",
       "contenu": "<p>En sellerie, les pièces de housse sont assemblées principalement par des coutures au <strong>point noué</strong>, sur des machines plates ou à bras, à double entraînement ou triple entraînement pour faire avancer régulièrement les matières épaisses (cuir, mousse contrecollée). Les principaux assemblages sont :</p>\n<ul>\n<li>la <strong>couture simple</strong> (piquée endroit contre endroit) : invisible une fois la housse retournée, utilisée pour les assemblages sans effet décoratif ;</li>\n<li>la <strong>couture rabattue surpiquée</strong> : après la couture simple, les valeurs de couture sont rabattues d'un côté (ou ouvertes des deux côtés) et une ou deux surpiqûres apparentes les maintiennent ; c'est la couture la plus caractéristique de la sellerie automobile ;</li>\n<li>la <strong>couture passepoilée</strong> : un passepoil est pris dans la couture simple ;</li>\n<li>la <strong>couture à plat</strong> (superposée) : une pièce posée sur l'autre, piquée à travers, avec bord franc ou rembordé.</li>\n</ul>\n<p>Les fils de sellerie sont épais et résistants (polyester ou polyamide à filaments continus), de couleur assortie ou contrastée selon l'effet recherché. Les fils des surpiqûres apparentes sont souvent plus gros que les fils d'assemblage.</p>"
      },
      {
       "titre": "Les coutures décoratives",
       "contenu": "<p>Les <strong>surpiqûres</strong> soulignent les lignes du siège et sont un signe fort de qualité. Leur régularité est contrôlée avec rigueur :</p>\n<ul>\n<li><strong>distance au bord</strong> ou à la couture constante (souvent de quelques millimètres) ;</li>\n<li><strong>longueur de point</strong> constante, y compris dans les courbes ;</li>\n<li><strong>parallélisme</strong> des doubles surpiqûres ;</li>\n<li><strong>raccords</strong> entre éléments voisins (une couture du dossier se prolonge dans celle de l'assise) ;</li>\n<li><strong>arrêts</strong> invisibles ou placés dans des zones cachées.</li>\n</ul>\n<p>Les machines à double aiguille réalisent deux surpiqûres parallèles en une passe. Les surpiqûres décoratives particulières (point sellier imité, points croisés, piqûres « baseball » qui relient deux bords) nécessitent des machines spécifiques.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser une double surpiqûre régulière sur une couture rabattue ouverte. 1) Piquez la couture d'assemblage endroit contre endroit à la valeur prévue, par exemple 10 mm. 2) Ouvrez les valeurs de couture de part et d'autre et collez-les à plat (ou utilisez une bande de renfort au dos). 3) Montez un pied presseur à guide central qui suit la couture. 4) Réglez l'écartement des aiguilles et la longueur de point selon la fiche technique (par exemple surpiqûres à 4 mm de part et d'autre de la couture, 3 points par cm). 5) Piquez un essai sur chute, contrôlez au réglet. 6) Piquez la pièce sans arrêt dans la longueur, en réduisant la vitesse dans les courbes. 7) Vérifiez que les surpiqûres prennent bien les valeurs de couture au dos.</div>"
      },
      {
       "titre": "Le passepoil",
       "contenu": "<p>Le <strong>passepoil</strong> est une bande de cuir ou de matière, pliée en deux autour d'un <strong>jonc</strong> (cordon plastique ou textile), insérée dans une couture pour souligner une arête. Il protège aussi l'arête de l'usure.</p>\n<p>Sa réalisation suit des règles :</p>\n<ul>\n<li>la bande est coupée dans le sens du moindre prêtant pour les passepoils droits, ou en biais pour les passepoils qui suivent des courbes serrées (pour les textiles) ;</li>\n<li>la largeur de coupe égale le périmètre du jonc plus deux fois la valeur de couture ;</li>\n<li>le cuir est paré pour limiter l'épaisseur dans la couture ;</li>\n<li>la bande est pliée et piquée au ras du jonc avec un pied à passepoil ;</li>\n<li>le passepoil est ensuite pris dans la couture d'assemblage, la piqûre passant exactement sur la première.</li>\n</ul>\n<p>Par exemple, avec un jonc de 4 mm de diamètre et une valeur de couture de 10 mm : périmètre moyen du jonc gainé, environ π × 5 ≈ 15,7 mm (en comptant l'épaisseur d'un cuir de 1 mm), plus 2 × 10 mm, soit une largeur de coupe d'environ 36 mm, à confirmer par essai.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans les angles, le passepoil doit être cranté sur sa valeur de couture pour tourner sans plis, sans entailler la partie visible. Un passepoil qui ondule ou s'écarte du jonc est l'un des défauts les plus visibles d'une sellerie.</div>"
      },
      {
       "titre": "Fixer le revêtement",
       "contenu": "<p>Le revêtement est fixé sur la structure ou le garnissage par différents moyens, choisis selon le secteur, la démontabilité et la cadence :</p>\n<table>\n<thead><tr><th>Moyen</th><th>Principe</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Agrafes</td><td>Agrafage à l'agrafeuse pneumatique sur bois ou plastique</td><td>Ameublement, panneaux, sièges sur bâti bois</td></tr>\n<tr><td>Joncs et profilés de fixation</td><td>Un jonc cousu dans un fourreau de la housse s'accroche dans un profilé de la structure</td><td>Sièges automobiles et techniques, démontables</td></tr>\n<tr><td>Anneaux d'accrochage</td><td>Anneaux métalliques sertis qui relient un fil de tension de la housse à une tige de la structure ou de la mousse</td><td>Sièges automobiles : création des creux de couture</td></tr>\n<tr><td>Bandes auto-agrippantes</td><td>Crochets et boucles textiles</td><td>Housses démontables, sièges aéronautiques et ferroviaires</td></tr>\n<tr><td>Collage</td><td>Revêtement collé sur la mousse ou le support</td><td>Garnitures de portes, planches de bord, panneaux gainés</td></tr>\n<tr><td>Clous décoratifs, galons</td><td>Fixation et finition visibles</td><td>Ameublement traditionnel</td></tr>\n</tbody>\n</table>\n<p>En aéronautique et en ferroviaire, la <strong>démontabilité</strong> est souvent exigée : les housses doivent pouvoir être retirées pour le nettoyage ou le remplacement sans démonter le siège.</p>"
      },
      {
       "titre": "Poser une housse",
       "contenu": "<p>La pose suit un ordre qui garantit une tension régulière :</p>\n<ol>\n<li>contrôler le garnissage et la housse (concordance, absence de défauts) ;</li>\n<li>positionner la housse sur la mousse en alignant les axes et les repères ;</li>\n<li>fixer d'abord les points centraux (accroches des creux de couture, axe), puis travailler du centre vers les bords ;</li>\n<li>tendre alternativement de part et d'autre pour répartir la tension (avant puis arrière, gauche puis droite) ;</li>\n<li>fixer les rabats sous la structure ;</li>\n<li>contrôler l'aspect, corriger les plis en reprenant les fixations voisines ;</li>\n<li>poser les éléments de finition (caches, joncs de finition, enjoliveurs).</li>\n</ol>\n<p>Pour faciliter la pose des housses en cuir sur des formes très galbées, on peut chauffer légèrement le revêtement ou utiliser un vaporisateur de vapeur, selon les recommandations du fournisseur du cuir : le cuir s'assouplit, épouse la forme et se rétracte légèrement en refroidissant, ce qui efface les petits plis.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chez les équipementiers automobiles, la pose de la coiffe sur la mousse moulée est une opération chronométrée, réalisée sur un poste équipé d'un support de siège à hauteur réglable. Les opérateurs sont formés à un ordre de fixation précis, car un ordre différent produit des plis différents.</div>"
      },
      {
       "titre": "Contrôler l'aspect final",
       "contenu": "<p>L'élément garni terminé est contrôlé selon une fiche qui reprend les exigences du client :</p>\n<ul>\n<li><strong>tension</strong> : absence de plis, de poches et de zones lâches ;</li>\n<li><strong>coutures</strong> : alignées, parallèles, régulières, raccordées entre éléments, sans fil apparent ou arrêt visible ;</li>\n<li><strong>passepoils</strong> : réguliers, sans ondulation ;</li>\n<li><strong>symétrie</strong> gauche-droite et position des lignes par rapport aux axes ;</li>\n<li><strong>matière</strong> : nuance homogène entre pièces, absence de défaut visible, propreté ;</li>\n<li><strong>fixations</strong> : solides, invisibles ;</li>\n<li><strong>fonction</strong> : réglages et mécanismes du siège non gênés par la housse.</li>\n</ul>\n<p>Le contrôle se fait sous un éclairage défini, à une distance d'observation définie, en comparaison avec un échantillon de référence. Les défauts sont classés selon leur zone de visibilité : un pli sur le plateau d'assise est refusé, un léger pli sous l'assise peut être toléré.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la qualité d'une sellerie se juge à la tension et à la régularité des coutures. Elles résultent du patron, du garnissage, de la couture et de la pose : un défaut final peut venir de n'importe laquelle de ces étapes.</div>"
      },
      {
       "titre": "Les perforations et les finitions spéciales",
       "contenu": "<p>Les revêtements de sellerie reçoivent souvent des traitements de surface qui se préparent avant l'assemblage :</p>\n<ul>\n<li>les <strong>perforations</strong>, réalisées à l'emporte-pièce multiple, au laser ou par découpe numérique, pour la ventilation des sièges ou pour un effet décoratif ; elles doivent être délimitées précisément par rapport aux coutures (on laisse une bande non perforée le long des coutures pour ne pas affaiblir l'assemblage) ;</li>\n<li>le <strong>gaufrage</strong> et l'<strong>embossage</strong> : motif ou logo imprimé en relief à chaud sous presse, avec un outil gravé ; la température, la pression et le temps sont validés par essai sur le cuir réel ;</li>\n<li>la <strong>broderie</strong> d'un logo sur un appuie-tête, sur machine à broder ;</li>\n<li>le <strong>matelassage</strong> à motifs, réalisé avant la coupe définitive comme vu pour le garnissage.</li>\n</ul>\n<p>Ces opérations se placent tôt dans la gamme, sur les pièces à plat, et se contrôlent avant l'assemblage : une perforation mal positionnée ou un gaufrage décentré ne se rattrapent plus une fois la pièce cousue.</p>"
      }
     ],
     "points_cles": [
      "Les assemblages de sellerie sont la couture simple, la couture rabattue surpiquée, la couture passepoilée et la couture à plat.",
      "Les surpiqûres se contrôlent sur la distance, la longueur de point, le parallélisme, les raccords et les arrêts.",
      "La largeur de coupe d'un passepoil égale le périmètre du jonc gainé plus deux valeurs de couture.",
      "Le passepoil est piqué au ras du jonc et cranté dans les angles.",
      "La fixation se fait par agrafes, joncs et profilés, anneaux, bandes auto-agrippantes, collage ou clous.",
      "La pose va du centre vers les bords, en tendant alternativement.",
      "La chaleur ou la vapeur peuvent aider le cuir à épouser les galbes, selon les recommandations du fournisseur.",
      "Le contrôle final porte sur la tension, les coutures, les passepoils, la symétrie, la matière et les fixations."
     ],
     "lexique": [
      {
       "terme": "Couture rabattue surpiquée",
       "def": "Couture dont les valeurs sont rabattues et maintenues par une ou deux surpiqûres apparentes."
      },
      {
       "terme": "Surpiqûre",
       "def": "Piqûre apparente parallèle à une couture, à fonction de maintien et de décor."
      },
      {
       "terme": "Double aiguille",
       "def": "Machine qui réalise deux piqûres parallèles en une seule passe."
      },
      {
       "terme": "Pied à passepoil",
       "def": "Pied presseur creusé qui guide le jonc pour piquer à son ras."
      },
      {
       "terme": "Profilé de fixation",
       "def": "Élément de la structure dans lequel s'accroche un jonc cousu à la housse."
      },
      {
       "terme": "Anneau d'accrochage",
       "def": "Anneau métallique serti qui relie la housse à la structure ou à la mousse."
      },
      {
       "terme": "Démontabilité",
       "def": "Possibilité de retirer une housse sans démonter l'élément garni."
      },
      {
       "terme": "Tension",
       "def": "État d'un revêtement tendu régulièrement, sans plis ni poches."
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
     "id": "bcuir-doc-dossier-technique",
     "titre": "Lire un dossier technique de modèle",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les documents qui composent un dossier technique de modèle",
      "Repérer les informations utiles dans une fiche technique et une nomenclature",
      "Croiser dessin, nomenclature et fiche technique pour détecter les incohérences",
      "Appliquer une méthode de lecture pas à pas en situation d'épreuve",
      "Rédiger une analyse argumentée d'un dossier technique"
     ],
     "sections": [
      {
       "titre": "Le dossier technique et son rôle",
       "contenu": "<p>À l'épreuve écrite comme en entreprise, le travail commence presque toujours par un <strong>dossier technique</strong> (souvent noté DT) et un <strong>dossier ressources</strong> (DR). Le dossier technique décrit le modèle ; le dossier ressources fournit les informations générales utiles : catalogues de fournitures, fiches de machines, tableaux de valeurs, extraits de normes, caractéristiques des matières. Le sujet pose les questions et renvoie à ces dossiers.</p>\n<p>Un dossier technique de modèle comprend généralement :</p>\n<ul>\n<li>une <strong>page de présentation</strong> : contexte de l'entreprise, nom et référence du modèle, quantité à produire, demande ;</li>\n<li>le <strong>dessin du styliste</strong> ou une photographie du produit ;</li>\n<li>le <strong>dessin technique</strong> à plat, en plusieurs vues, avec repères ;</li>\n<li>la <strong>fiche technique</strong> (ou fiche produit) : dimensions, matières, coloris, fournitures, types de bords et d'assemblages, piqûres ;</li>\n<li>la <strong>nomenclature</strong> des pièces et des fournitures ;</li>\n<li>des <strong>vues de détail</strong> et des coupes d'assemblage ;</li>\n<li>parfois des gabarits ou extraits de gabarits à l'échelle.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le dossier technique est la référence. En cas de contradiction entre deux documents, on ne choisit pas au hasard : on signale l'incohérence et on justifie l'hypothèse retenue.</div>"
      },
      {
       "titre": "La fiche technique : structure et vocabulaire",
       "contenu": "<p>La <strong>fiche technique</strong> rassemble sur une ou deux pages l'essentiel du modèle. On y trouve habituellement :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu type</th></tr></thead>\n<tbody>\n<tr><td>Identification</td><td>Référence, nom du modèle, saison, date, indice de version</td></tr>\n<tr><td>Dimensions</td><td>Largeur, hauteur, épaisseur du produit fini, longueurs des poignées et bandoulières, tolérances</td></tr>\n<tr><td>Matières</td><td>Cuir extérieur (article, espèce, épaisseur, coloris), doublure, renforts</td></tr>\n<tr><td>Fournitures</td><td>Fils (référence, titrage, couleur), fermetures, quincaillerie, colles</td></tr>\n<tr><td>Construction</td><td>Types de bords, montages, positions et caractéristiques des piqûres (distance au bord, points par cm), arrêts</td></tr>\n<tr><td>Finitions</td><td>Teinture de tranche, marquage, perforations</td></tr>\n<tr><td>Contrôle</td><td>Points critiques, échantillon de référence</td></tr>\n</tbody>\n</table>\n<p>Le vocabulaire est celui étudié tout au long du cours : bord franc teint, rembordé, contrecollé, passepoil, gousset, soufflet, chape, parage, zone qualitative. Les abréviations sont fréquentes : DT, DR, Rep. (repère), Nb (nombre), ep. (épaisseur), pts/cm (points par centimètre).</p>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un dossier technique en début d'épreuve (prévoir environ 20 à 30 minutes). 1) Lisez d'abord le sujet en entier pour connaître les questions : vous saurez ce que vous cherchez dans le dossier. 2) Lisez la page de présentation : produit, quantité, contexte, problème posé. 3) Observez le dessin du styliste puis le dessin technique : identifiez chaque pièce par son repère, nommez les sous-ensembles. 4) Lisez la nomenclature ligne par ligne en retrouvant chaque repère sur le dessin ; cochez les pièces retrouvées. 5) Lisez la fiche technique : surlignez les dimensions, les matières, les types de bords et d'assemblages. 6) Croisez les trois documents : chaque pièce du dessin est-elle dans la nomenclature ? chaque bord décrit dans la fiche correspond-il à la vue de détail ? 7) Notez au brouillon les incohérences et les informations manquantes. 8) Seulement ensuite, commencez à répondre.</div>\n<p>Cette lecture méthodique fait gagner du temps : elle évite de revenir sans cesse aux documents et réduit les erreurs de repère.</p>"
      },
      {
       "titre": "Les pièges fréquents",
       "contenu": "<ul>\n<li><strong>Confondre dimensions extérieures et dimensions de pièces</strong> : la largeur du sac fini n'est pas la largeur du gabarit du devant, qui dépend du montage.</li>\n<li><strong>Oublier les pièces symétriques ou multiples</strong> : la nomenclature indique « 2 » ou « paire » ; une erreur se répercute sur le placement et la consommation.</li>\n<li><strong>Négliger les unités</strong> : cotes en mm sur le dessin, surfaces en m² ou en pieds carrés dans le dossier ressources, fils en tex ou en Nm.</li>\n<li><strong>Lire un dessin réduit comme s'il était à l'échelle 1:1</strong> : vérifiez l'échelle dans le cartouche.</li>\n<li><strong>Ne pas exploiter la vue de détail</strong> : c'est souvent elle qui indique le type de bord et l'ordre des couches.</li>\n<li><strong>Répondre hors du dossier</strong> : une réponse générale (« on choisit un cuir solide ») sans appui sur les données fournies est peu valorisée.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> quand une information manque, ne l'inventez pas sans le dire. Écrivez votre hypothèse (« la distance de piqûre n'étant pas précisée pour la poignée, on retient 3 mm comme pour le corps ») : le correcteur verra que vous avez repéré le manque et raisonné.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Voici, décrit en texte, un extrait de dossier technique d'un porte-documents.</p>\n<p><strong>Page de présentation</strong> : entreprise de maroquinerie haut de gamme ; modèle « ATLAS », porte-documents à rabat ; présérie de 20 pièces ; le sujet demande de vérifier la cohérence du dossier et de préparer la coupe.</p>\n<p><strong>Dessin technique</strong> (échelle 1:4) : vue de face avec rabat fermé ; vue de profil montrant deux soufflets ; vue de détail du bord du rabat agrandie (échelle 5:1) montrant deux couches de cuir et un renfort entre elles, tranche teinte, piqûre à 3 mm du bord.</p>\n<table>\n<thead><tr><th>Rep.</th><th>Nb</th><th>Désignation</th><th>Matière</th><th>Observations</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>1</td><td>Devant</td><td>Taurillon grainé 1,4/1,6</td><td>Zone A</td></tr>\n<tr><td>2</td><td>1</td><td>Dos et rabat</td><td>Taurillon grainé 1,4/1,6</td><td>Zone A</td></tr>\n<tr><td>3</td><td>1</td><td>Soufflet</td><td>Taurillon grainé 1,4/1,6</td><td>Zone B</td></tr>\n<tr><td>4</td><td>1</td><td>Dessous de rabat</td><td>Veau lisse 0,8</td><td>Contrecollé sur rep. 2</td></tr>\n<tr><td>5</td><td>1</td><td>Poignée</td><td>Taurillon grainé 1,4/1,6</td><td>Sens du moindre prêtant</td></tr>\n<tr><td>6</td><td>2</td><td>Fermoir (partie mâle et femelle)</td><td>Laiton palladié</td><td>Réf. fournisseur DR p. 4</td></tr>\n</tbody>\n</table>\n<p><strong>Fiche technique</strong> (extrait) : dimensions finies 380 × 280 × 70 mm ; bords francs teints sur le rabat et la poignée ; soufflets assemblés au corps en piqué retourné ; piqûre 4 pts/cm, fil polyester noir.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Identification du produit.</strong> Le modèle ATLAS est un porte-documents à rabat, à épaisseur donnée par des soufflets (70 mm). Le corps comprend un devant (rep. 1), un dos prolongé par le rabat (rep. 2) et des soufflets (rep. 3). Le rabat est un ensemble contrecollé (rep. 2 et 4) à bord franc teint, conformément à la vue de détail.</p>\n<p><strong>2. Incohérences relevées.</strong> La vue de profil montre deux soufflets, alors que la nomenclature indique un seul soufflet (rep. 3, Nb 1). Deux hypothèses : soit le nombre est erroné (Nb 2), soit le soufflet est une bande continue qui fait le tour du sac (côtés et fond). La vue de face ne montre pas de couture au fond entre devant et soufflet ; la vue de profil montre deux soufflets séparés. On retient donc l'hypothèse d'une erreur de nombre : <strong>Nb = 2</strong>, à faire confirmer au bureau d'études. Par ailleurs, la vue de détail montre un renfort entre les deux couches du rabat, absent de la nomenclature : il faut ajouter une ligne (renfort de rabat, matière à préciser).</p>\n<p><strong>3. Conséquences pour la coupe.</strong> Pour 20 pièces, on coupera 40 soufflets (et non 20) en zone B. La poignée sera coupée en zone A ou dans le croupon dans le sens du moindre prêtant. Les pièces 1, 2 et 5 sont visibles et sollicitées, les pièces 1 et 2 étant en vis-à-vis : elles seront coupées dans la même peau pour la nuance.</p>\n<p><strong>4. Points de vigilance.</strong> Le bord franc teint impose un cuir à tranche compacte : le taurillon grainé 1,4/1,6 contrecollé avec un veau 0,8 et un renfort donne une épaisseur de rabat d'environ 2,5 à 3 mm, ce qui est cohérent avec une tranche teinte de bonne tenue. Le fermoir (rep. 6) traverse le rabat : il faudra vérifier dans le dossier ressources que sa longueur de tige convient à cette épaisseur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une analyse de ce type est transmise au bureau d'études sous la forme d'une liste numérotée « question, constat, proposition ». Elle évite qu'une erreur de nomenclature se transforme en commande erronée de fournitures ou en coupe incomplète.</div>"
      },
      {
       "titre": "Rédiger sa réponse",
       "contenu": "<p>Une bonne analyse de dossier technique se rédige de façon structurée :</p>\n<ul>\n<li>une phrase d'identification du produit et de la demande ;</li>\n<li>des constats appuyés sur les documents, avec leurs références (« la nomenclature, rep. 3, indique… ; la vue de profil montre… ») ;</li>\n<li>des conséquences techniques (sur la coupe, le montage, les approvisionnements) ;</li>\n<li>des propositions ou hypothèses clairement formulées ;</li>\n<li>un vocabulaire technique exact.</li>\n</ul>\n<p>Les tableaux sont souvent plus efficaces que de longs paragraphes : un tableau « pièce, constat, conséquence » permet au correcteur de vérifier rapidement chaque point. Enfin, relisez votre réponse en vérifiant les unités et les quantités.</p>"
      }
     ],
     "points_cles": [
      "Le dossier technique décrit le modèle ; le dossier ressources fournit les données générales.",
      "Un dossier technique comprend présentation, dessins, fiche technique, nomenclature et vues de détail.",
      "On lit d'abord le sujet, puis on croise dessin, nomenclature et fiche technique.",
      "Chaque repère du dessin doit se retrouver dans la nomenclature, et inversement.",
      "Les vues de détail indiquent les couches, les bords et les piqûres.",
      "Une incohérence se signale et se traite par une hypothèse justifiée.",
      "Une information manquante ne s'invente pas sans le dire.",
      "La réponse s'appuie sur les références des documents et en tire des conséquences techniques."
     ],
     "lexique": [
      {
       "terme": "Dossier technique (DT)",
       "def": "Ensemble des documents qui décrivent un modèle."
      },
      {
       "terme": "Dossier ressources (DR)",
       "def": "Ensemble des documents de référence fournis avec un sujet : catalogues, fiches, tableaux."
      },
      {
       "terme": "Fiche technique",
       "def": "Document de synthèse d'un modèle : dimensions, matières, fournitures, construction, finitions."
      },
      {
       "terme": "Repère",
       "def": "Numéro qui identifie une pièce sur le dessin et dans la nomenclature."
      },
      {
       "terme": "Vue de détail",
       "def": "Représentation agrandie d'une partie du produit."
      },
      {
       "terme": "Incohérence",
       "def": "Contradiction entre deux informations d'un même dossier."
      },
      {
       "terme": "Hypothèse",
       "def": "Choix provisoire, justifié, en l'absence d'une information certaine."
      }
     ]
    },
    {
     "id": "bcuir-doc-placement-commande",
     "titre": "Exploiter un plan de placement et une fiche de coupe",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire un plan de placement sur peau et sur matière en rouleau",
      "Vérifier le respect des zones qualitatives et du prêtant sur un placement",
      "Extraire d'une fiche de coupe les données nécessaires au calcul",
      "Calculer une surface nette, une surface prévisionnelle et une quantité à commander",
      "Rédiger une analyse critique d'un placement"
     ],
     "sections": [
      {
       "titre": "Les documents de coupe",
       "contenu": "<p>Trois documents servent à préparer et analyser la coupe :</p>\n<ul>\n<li>le <strong>plan de placement</strong> : représentation de la peau (ou d'une longueur de matière en rouleau) avec la position de chaque pièce ; il peut être dessiné à la main, imprimé depuis le logiciel de placement ou photographié sur l'écran du découpeur ;</li>\n<li>la <strong>carte de la peau</strong> : contour de la peau avec la ligne du dos, les zones qualitatives (A, B, C) et les défauts repérés ;</li>\n<li>la <strong>fiche de coupe</strong> : liste des pièces, nombre par produit, matière, zone exigée, orientation, quantité à produire, consommation prévue et cases de suivi.</li>\n</ul>\n<p>À l'épreuve, ces documents sont souvent fournis sous forme de schéma à l'échelle avec un tableau associé, et le sujet demande de vérifier, compléter ou optimiser le placement, puis de calculer une consommation et une commande.</p>"
      },
      {
       "titre": "Lire un plan de placement",
       "contenu": "<p>Sur un plan de placement de peau, on identifie :</p>\n<ul>\n<li>le <strong>contour</strong> de la peau et sa <strong>surface</strong> (inscrite en m² ou en pieds carrés) ;</li>\n<li>la <strong>ligne du dos</strong> et les <strong>zones qualitatives</strong> délimitées ;</li>\n<li>les <strong>défauts</strong>, représentés par des symboles ou des zones hachurées ;</li>\n<li>chaque <strong>pièce</strong>, désignée par son repère, avec sa <strong>flèche de prêtant</strong> ;</li>\n<li>parfois l'<strong>ordre de coupe</strong> numéroté.</li>\n</ul>\n<p>Sur un plan de placement de matière en rouleau, on lit la <strong>laize</strong> utile, la <strong>longueur</strong> du placement, le nombre de produits placés et le <strong>rendement</strong> (surface des pièces divisée par la surface de matière utilisée).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un placement en cinq contrôles. 1) Exhaustivité : toutes les pièces de la fiche de coupe sont-elles placées, en bon nombre, avec les paires et les symétriques ? 2) Zones : chaque pièce est-elle dans une zone au moins égale à son exigence ? 3) Prêtant : chaque flèche de pièce est-elle orientée comme exigé par rapport à la ligne du dos ? 4) Défauts : aucune pièce visible ne chevauche un défaut ? 5) Nuance : les pièces visibles d'un même produit sont-elles dans la même peau ? Notez chaque non-conformité avec le repère de la pièce et une proposition de correction.</div>"
      },
      {
       "titre": "Les calculs attendus",
       "contenu": "<p>Les calculs reposent sur des formules simples, mais les erreurs d'unités et d'arrondis sont fréquentes :</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Calcul</th><th>Points de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Surface d'une pièce</td><td>L × l pour un rectangle, valeur CAO sinon</td><td>Cotes en mm, résultat en mm²</td></tr>\n<tr><td>Surface nette d'un produit</td><td>Somme des surfaces × nombre de pièces</td><td>Ne pas oublier les pièces multiples</td></tr>\n<tr><td>Conversion</td><td>mm² ÷ 1 000 000 = m²</td><td>Ne pas diviser par 1 000</td></tr>\n<tr><td>Surface prévisionnelle</td><td>SP = SN + (SN × TCp)</td><td>TCp en décimal : 30 % = 0,30</td></tr>\n<tr><td>Nombre de peaux</td><td>SP totale ÷ surface d'une peau</td><td>Arrondir à l'entier supérieur</td></tr>\n<tr><td>Nombre de produits par peau</td><td>Surface de la peau ÷ SP d'un produit</td><td>Arrondir à l'entier inférieur</td></tr>\n<tr><td>Conversion de surface de cuir</td><td>1 pied carré ≈ 0,0929 m²</td><td>Vérifier l'unité du dossier ressources</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le sens des arrondis dépend de la question. Pour une quantité à commander, on arrondit au-dessus (sinon il manque de la matière) ; pour un nombre de produits réalisables, on arrondit au-dessous (on ne fabrique pas 0,7 sac).</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Extrait d'un sujet décrit en texte. Modèle : portefeuille compact. Commande : 200 pièces. Cuir extérieur : veau grainé, livré en peaux de 14 pieds carrés en moyenne. Taux de chute prévisionnel imposé : 35 %. Formule imposée : SP = SN + (SN × TCp).</p>\n<table>\n<thead><tr><th>Rep.</th><th>Pièce</th><th>L (mm)</th><th>l (mm)</th><th>Nb par produit</th><th>Zone</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Extérieur</td><td>200</td><td>95</td><td>1</td><td>A</td></tr>\n<tr><td>2</td><td>Poche à cartes</td><td>95</td><td>70</td><td>4</td><td>B</td></tr>\n<tr><td>3</td><td>Soufflet de compartiment</td><td>90</td><td>30</td><td>2</td><td>B</td></tr>\n<tr><td>4</td><td>Patte de fermeture</td><td>60</td><td>25</td><td>1</td><td>A</td></tr>\n</tbody>\n</table>\n<p>Plan de placement fourni pour une peau : la peau est représentée avec sa ligne du dos verticale ; la zone A couvre le centre ; le placement montre 9 extérieurs en zone A, dont un chevauche une cicatrice signalée par une croix ; les flèches de prêtant des extérieurs sont toutes parallèles à la ligne du dos, sauf deux, perpendiculaires ; la fiche de coupe exige un prêtant parallèle à la ligne du dos pour l'extérieur.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Analyse du placement.</strong> Trois non-conformités apparaissent. D'abord, un extérieur (rep. 1) chevauche une cicatrice en zone A : pièce visible, défaut rédhibitoire ; il faut la déplacer ou la supprimer du placement. Ensuite, deux extérieurs ont une flèche de prêtant perpendiculaire à la ligne du dos, contrairement à l'exigence : risque de déformation du portefeuille à l'usage ; il faut les faire pivoter, quitte à perdre une pièce. Enfin, il faut vérifier que les pattes (rep. 4, zone A) sont placées en zone A et non dans les flancs. Le placement corrigé donnera probablement 7 ou 8 extérieurs conformes par peau au lieu de 9.</p>\n<p><strong>2. Surface nette d'un portefeuille.</strong></p>\n<ul>\n<li>Rep. 1 : 200 × 95 = 19 000 mm²</li>\n<li>Rep. 2 : 95 × 70 × 4 = 26 600 mm²</li>\n<li>Rep. 3 : 90 × 30 × 2 = 5 400 mm²</li>\n<li>Rep. 4 : 60 × 25 = 1 500 mm²</li>\n<li>Total : 19 000 + 26 600 + 5 400 + 1 500 = 52 500 mm², soit 0,0525 m²</li>\n</ul>\n<p><strong>3. Surface prévisionnelle.</strong> Pour 200 portefeuilles : SN = 200 × 0,0525 = 10,5 m². SP = 10,5 + (10,5 × 0,35) = 10,5 + 3,675 = 14,175 m².</p>\n<p><strong>4. Nombre de peaux.</strong> Une peau de 14 pieds carrés vaut 14 × 0,0929 ≈ 1,30 m². Nombre de peaux : 14,175 / 1,30 ≈ 10,9, donc <strong>11 peaux</strong> à commander. Comme les surfaces des peaux sont des moyennes, on peut conseiller d'en prévoir une de plus (12) pour absorber les écarts et les peaux plus défectueuses, en le justifiant.</p>\n<p><strong>5. Cohérence.</strong> Avec 7 à 8 extérieurs par peau en zone A, 11 peaux donnent 77 à 88 extérieurs, très inférieur aux 200 nécessaires. La zone A est donc le facteur limitant, pas la surface totale : le calcul par surface sous-estime le besoin pour la pièce noble. Il faut soit augmenter fortement le nombre de peaux, soit choisir des peaux plus grandes ou d'un meilleur choix, soit utiliser les zones B pour d'autres pièces et réserver tous les croupons aux extérieurs. Cette remarque est la plus importante de l'analyse.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un calcul de surface globale ne suffit pas. Il faut toujours vérifier que la pièce la plus exigeante peut être obtenue en nombre suffisant dans la zone requise.</div>"
      },
      {
       "titre": "Variante : placement sur matière en rouleau",
       "contenu": "<p>Pour la doublure du même portefeuille, le dossier fournit un plan de placement sur un textile de laize utile 1,40 m. Le plan, décrit en texte, montre une longueur de placement de 0,60 m contenant les doublures de 24 portefeuilles ; la surface des pièces de doublure d'un portefeuille est de 0,028 m².</p>\n<p><strong>Lecture et calculs.</strong></p>\n<ul>\n<li>Surface de matière utilisée par le placement : 1,40 × 0,60 = 0,84 m².</li>\n<li>Surface des pièces placées : 24 × 0,028 = 0,672 m².</li>\n<li>Rendement du placement : 0,672 / 0,84 = 0,80, soit 80 %.</li>\n<li>Nombre de placements pour 200 portefeuilles : 200 / 24 = 8,33, donc 9 placements (arrondi au-dessus), soit 9 × 0,60 = 5,40 m linéaires.</li>\n<li>On peut aussi construire un dernier placement plus court pour les 8 portefeuilles restants (200 − 8 × 24 = 8), ce qui réduirait la longueur : 8 × 0,60 = 4,80 m, plus un placement partiel d'environ 0,20 m si les pièces s'y prêtent, soit environ 5,00 m.</li>\n</ul>\n<p>Un rendement de 80 % est correct pour des petites pièces rectangulaires ; un rendement nettement plus faible signalerait un placement à revoir (pièces mal emboîtées, orientation inutilement imposée). Comme pour le cuir, on vérifie que le sens imposé (droit-fil, motif) est respecté sur toutes les pièces.</p>"
      },
      {
       "titre": "Rédiger l'analyse d'un placement",
       "contenu": "<p>L'analyse d'un placement se présente efficacement en trois parties :</p>\n<ol>\n<li><strong>vérification</strong> du placement : tableau des non-conformités (pièce, constat, risque, correction) ;</li>\n<li><strong>calculs</strong> détaillés, avec formules, unités et arrondis justifiés ;</li>\n<li><strong>conclusion</strong> critique : la quantité commandée est-elle suffisante ? quelle pièce limite ? quelle amélioration proposer (autre choix de peau, regroupement des pièces, emporte-pièces adaptés, découpe numérique) ?</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les coupeurs expérimentés repèrent immédiatement qu'un modèle « mange du croupon ». Le prototypiste qui signale ce point dès la fiche de coupe permet aux achats de commander le bon choix de peaux et évite une rupture en cours de fabrication.</div>"
      }
     ],
     "points_cles": [
      "Plan de placement, carte de la peau et fiche de coupe se lisent ensemble.",
      "On vérifie un placement par cinq contrôles : exhaustivité, zones, prêtant, défauts, nuance.",
      "On convertit les mm² en m² en divisant par 1 000 000.",
      "SP = SN + (SN × TCp), avec le taux de chute écrit en décimal.",
      "Une quantité à commander s'arrondit au-dessus, un nombre de produits réalisables au-dessous.",
      "1 pied carré vaut environ 0,0929 m².",
      "La pièce la plus exigeante en zone A peut limiter la production plus que la surface totale.",
      "L'analyse se conclut par une proposition argumentée."
     ],
     "lexique": [
      {
       "terme": "Plan de placement",
       "def": "Représentation de la position des pièces sur une peau ou une matière."
      },
      {
       "terme": "Carte de la peau",
       "def": "Contour de la peau avec ligne du dos, zones qualitatives et défauts."
      },
      {
       "terme": "Rendement de placement",
       "def": "Rapport entre la surface des pièces placées et la surface de matière utilisée."
      },
      {
       "terme": "Facteur limitant",
       "def": "Élément qui restreint le plus la quantité réalisable, ici la zone requise par une pièce."
      },
      {
       "terme": "Pied carré",
       "def": "Unité de surface anglo-saxonne utilisée pour le cuir, environ 9,29 dm²."
      },
      {
       "terme": "Choix",
       "def": "Classement commercial des peaux selon leur qualité."
      },
      {
       "terme": "Exhaustivité",
       "def": "Présence de toutes les pièces requises, en bon nombre."
      }
     ]
    },
    {
     "id": "bcuir-doc-gamme-poste",
     "titre": "Analyser une gamme de fabrication et une fiche de poste",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire une gamme de fabrication et vérifier sa logique",
      "Repérer les erreurs d'ordre, les oublis et les contrôles manquants",
      "Exploiter les temps d'une gamme pour calculer une charge, un effectif et un équilibrage",
      "Analyser une fiche de poste et proposer des améliorations",
      "Présenter une analyse de gamme argumentée"
     ],
     "sections": [
      {
       "titre": "La gamme et la fiche de poste comme documents d'épreuve",
       "contenu": "<p>La <strong>gamme de fabrication</strong> se présente le plus souvent sous forme de tableau : numéro d'opération, désignation, poste ou machine, outillage, paramètres, temps, contrôle. La <strong>fiche de poste</strong> détaille une opération : pièces entrantes, réglages, gestes clés illustrés, points de contrôle, consignes de sécurité, temps alloué.</p>\n<p>À l'épreuve, on peut vous demander de compléter une gamme incomplète, d'en corriger l'ordre, d'y intégrer des contrôles, de calculer des temps et des effectifs, de proposer un regroupement des opérations en postes, ou de rédiger une fiche de poste à partir d'un essai que vous avez réalisé. Ces documents s'analysent toujours en lien avec le dossier technique (pièces et montages) et l'arborescence du produit.</p>"
      },
      {
       "titre": "Méthode de lecture d'une gamme",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une gamme en six questions. 1) Toutes les pièces de la nomenclature apparaissent-elles dans au moins une opération ? 2) Chaque opération de préparation (parage, rempli, renfort, teinture de tranche) précède-t-elle l'assemblage de la pièce concernée ? 3) Les éléments qui se fixent à travers une seule épaisseur (fermoirs, rivets, pieds, marquages) sont-ils posés avant que cette pièce soit doublée ou fermée ? 4) Les sous-ensembles indépendants sont-ils regroupés et réalisables en parallèle ? 5) Des contrôles sont-ils prévus après les opérations critiques, pas seulement à la fin ? 6) Les postes, outillages et temps sont-ils cohérents avec les moyens décrits dans le dossier ressources ?</div>\n<p>Il est utile de dessiner rapidement l'arborescence du produit au brouillon : elle permet de voir d'un coup d'œil l'ordre logique des assemblages.</p>"
      },
      {
       "titre": "Exploiter les temps",
       "contenu": "<p>Les temps de la gamme permettent plusieurs calculs, présentés dans les chapitres sur l'industrialisation :</p>\n<ul>\n<li>temps total par produit : somme des temps alloués ;</li>\n<li>charge d'un poste : somme des temps des opérations qui lui sont affectées ;</li>\n<li>temps de cycle : temps disponible divisé par la quantité demandée ;</li>\n<li>effectif théorique : temps total de la commande divisé par le temps disponible d'un opérateur, arrondi à l'entier supérieur ;</li>\n<li>taux de charge d'un poste : charge divisée par le temps de cycle.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les temps sont souvent donnés en centièmes de minute ou en minutes décimales. Ne mélangez pas avec les secondes. Vérifiez aussi si les temps sont donnés par pièce, par paire ou par produit : en chaussure, une gamme exprimée par paire et une commande exprimée en chaussures donnent un facteur 2 d'erreur.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Extrait d'un dossier : sac cabas, présérie de 40 sacs à réaliser en 2 jours de 7 h par une équipe ; la gamme suivante est proposée par le stagiaire et doit être analysée.</p>\n<table>\n<thead><tr><th>N°</th><th>Opération</th><th>Poste</th><th>Temps (min)</th></tr></thead>\n<tbody>\n<tr><td>10</td><td>Parer les bords d'ouverture du devant et du dos</td><td>Machine à parer</td><td>1,0</td></tr>\n<tr><td>20</td><td>Assembler devant, fond et dos en piqué retourné</td><td>Machine à bras</td><td>4,0</td></tr>\n<tr><td>30</td><td>Poser le pied de sac sur le fond</td><td>Établi, presse à sertir</td><td>1,5</td></tr>\n<tr><td>40</td><td>Préparer les poignées (contrecoller, piquer, teindre les tranches)</td><td>Établi, machine plate</td><td>6,0</td></tr>\n<tr><td>50</td><td>Assembler la doublure avec sa poche</td><td>Machine plate</td><td>3,5</td></tr>\n<tr><td>60</td><td>Poser doublure et remplier le bord d'ouverture</td><td>Machine à bras</td><td>3,0</td></tr>\n<tr><td>70</td><td>Piquer les poignées sur le corps</td><td>Machine à bras</td><td>2,0</td></tr>\n<tr><td>80</td><td>Contrôle final</td><td>Poste de contrôle</td><td>1,0</td></tr>\n</tbody>\n</table>\n<p>Le dossier technique précise que les poignées sont fixées par une piqûre en rectangle traversant le corps et la doublure, avec un renfort intérieur, et que le bord d'ouverture est rembordé sur 6 mm.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Erreurs d'ordre.</strong> L'opération 30 (pose du pied de sac sur le fond) est placée après l'assemblage du corps (opération 20) : une fois le sac assemblé en piqué retourné, l'accès au fond pour sertir les pieds devient difficile et le renfort de fond ne peut plus être posé proprement. Il faut placer la pose des pieds <strong>avant</strong> l'opération 20. De même, le rembordé du bord d'ouverture nécessite que l'encollage et le pliage soient préparés à plat : l'opération 60 regroupe une préparation et un assemblage ; il est préférable de remplier le bord d'ouverture à plat, après le parage (opération 10), avant l'assemblage.</p>\n<p><strong>2. Oublis.</strong> Aucune opération ne concerne le renfort intérieur des attaches de poignées, pourtant exigé par le dossier technique : il faut l'ajouter avant la pose de la doublure ou avant la piqûre des poignées selon la construction. Aucun contrôle intermédiaire n'est prévu : on ajoutera un contrôle des poignées après l'opération 40 (tranches, longueur, symétrie) et un contrôle du corps après l'assemblage.</p>\n<p><strong>3. Calculs.</strong> Temps total de la gamme proposée : 1,0 + 4,0 + 1,5 + 6,0 + 3,5 + 3,0 + 2,0 + 1,0 = 22 min par sac. Pour 40 sacs : 880 min, soit environ 14,7 h. Temps disponible par opérateur : 2 × 7 = 14 h. Effectif théorique : 14,7 / 14 = 1,05, donc 2 opérateurs. Avec les opérations ajoutées (renfort, contrôles), le temps augmentera légèrement : 2 opérateurs restent suffisants et laissent une marge pour les aléas d'une présérie.</p>\n<p><strong>4. Proposition de gamme corrigée (extrait).</strong> 10 parer les bords ; 15 remplier le bord d'ouverture à plat ; 20 poser renforts de fond et pieds de sac ; 25 poser les renforts d'attaches ; 30 préparer les poignées ; 35 contrôler les poignées ; 40 assembler le corps ; 45 contrôler le corps ; 50 assembler la doublure et sa poche ; 60 poser la doublure ; 70 piquer les poignées ; 80 contrôle final.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une gamme se juge d'abord sur sa logique (accessibilité, préparation avant assemblage, contrôles), ensuite sur ses temps. Une gamme rapide mais illogique produit des retouches qui coûtent plus cher que le temps gagné.</div>"
      },
      {
       "titre": "Analyser une fiche de poste",
       "contenu": "<p>Une fiche de poste se lit avec un regard d'opérateur : pourrait-on réaliser l'opération correctement avec ce seul document ? On vérifie :</p>\n<ul>\n<li>l'identification complète (modèle, opération, version) ;</li>\n<li>la liste des pièces entrantes et sortantes ;</li>\n<li>les réglages machine précis (longueur de point, fil, aiguille, température, colle) ;</li>\n<li>la décomposition en gestes clés, dans l'ordre, avec des verbes d'action ;</li>\n<li>les points de contrôle et les défauts à éviter, avec des images « bon » et « mauvais » ;</li>\n<li>les consignes de sécurité et d'ergonomie propres au poste ;</li>\n<li>le temps alloué.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fiches de poste sont testées en faisant réaliser l'opération par un opérateur qui ne connaît pas le modèle, sans autre explication. Chaque question qu'il pose révèle un manque dans la fiche, que l'on corrige avant la série.</div>"
      },
      {
       "titre": "Prolongement : regrouper les opérations en postes",
       "contenu": "<p>Un sujet peut demander de répartir les opérations d'une gamme entre plusieurs postes. Reprenons la gamme corrigée du cabas, avec des temps estimés pour les opérations ajoutées : 10 parer (1,0) ; 15 remplier à plat (1,5) ; 20 poser renforts de fond et pieds (1,8) ; 25 poser les renforts d'attaches (0,7) ; 30 préparer les poignées (6,0) ; 35 contrôler les poignées (0,5) ; 40 assembler le corps (4,0) ; 45 contrôler le corps (0,5) ; 50 assembler la doublure (3,5) ; 60 poser la doublure (2,0) ; 70 piquer les poignées (2,0) ; 80 contrôle final (1,0). Total : 24,5 min.</p>\n<p>Avec deux opérateurs, une répartition équilibrée vise environ 24,5 / 2 ≈ 12,3 min chacun, en respectant l'ordre et les machines :</p>\n<table>\n<thead><tr><th>Poste</th><th>Opérations</th><th>Charge (min)</th></tr></thead>\n<tbody>\n<tr><td>A : préparation et sous-ensembles</td><td>10, 15, 20, 25, 30, 35</td><td>11,5</td></tr>\n<tr><td>B : assemblage et finition</td><td>40, 45, 50, 60, 70, 80</td><td>13,0</td></tr>\n</tbody>\n</table>\n<p>Le poste B est le goulot. On peut lui retirer l'assemblage de la doublure (opération 50, 3,5 min), indépendant du corps, pour le confier au poste A : A passe à 15,0 min et B à 9,5 min, ce qui déséquilibre dans l'autre sens. Une meilleure solution consiste à confier à A la seule préparation de la poche de doublure, si la gamme la détaille. Ce raisonnement montre qu'un bon équilibrage dépend de la finesse de décomposition de la gamme.</p>"
      },
      {
       "titre": "Présenter son analyse",
       "contenu": "<p>Pour une analyse de gamme, la présentation la plus claire est un tableau à trois colonnes : <strong>constat</strong> (avec numéro d'opération), <strong>conséquence</strong> (risque pour la qualité, le temps ou la sécurité), <strong>proposition</strong>. Les calculs sont posés avec leurs formules et leurs unités. La gamme corrigée est présentée en entier ou en extrait selon la consigne, avec une numérotation qui permet d'insérer les nouvelles opérations.</p>\n<p>Enfin, on termine par une phrase de synthèse qui répond à la question posée : « la gamme proposée n'est pas réalisable en l'état car… ; après corrections, la présérie peut être réalisée par deux opérateurs en deux jours ».</p>"
      }
     ],
     "points_cles": [
      "Une gamme s'analyse en lien avec la nomenclature, le dossier technique et l'arborescence.",
      "La préparation précède toujours l'assemblage de la pièce concernée.",
      "Ce qui traverse une seule épaisseur se pose avant que la pièce soit doublée ou fermée.",
      "Des contrôles intermédiaires suivent les opérations critiques.",
      "Les temps se vérifient en unité (minutes décimales) et en base (pièce, paire, produit).",
      "Effectif théorique = temps total / temps disponible par opérateur, arrondi au-dessus.",
      "Une fiche de poste doit permettre de réaliser l'opération sans autre explication.",
      "L'analyse se présente en constat, conséquence, proposition, puis synthèse."
     ],
     "lexique": [
      {
       "terme": "Gamme de fabrication",
       "def": "Tableau ordonné des opérations de fabrication d'un produit."
      },
      {
       "terme": "Fiche de poste",
       "def": "Document qui décrit une opération pour l'opérateur."
      },
      {
       "terme": "Opération",
       "def": "Travail élémentaire réalisé à un poste sur une pièce ou un sous-ensemble."
      },
      {
       "terme": "Contrôle intermédiaire",
       "def": "Contrôle réalisé en cours de fabrication, après une opération critique."
      },
      {
       "terme": "Charge de poste",
       "def": "Somme des temps des opérations affectées à un poste."
      },
      {
       "terme": "Geste clé",
       "def": "Action déterminante pour la qualité d'une opération, décrite dans la fiche de poste."
      },
      {
       "terme": "Présérie",
       "def": "Petite quantité fabriquée pour valider le processus avant la série."
      }
     ]
    },
    {
     "id": "bcuir-doc-fiches-matieres-essais",
     "titre": "Exploiter une fiche matière, un rapport d'essai et une fiche de données de sécurité",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Extraire d'une fiche technique matière les caractéristiques utiles au modèle",
      "Comparer les résultats d'un rapport d'essai aux exigences d'un cahier des charges",
      "Conclure sur l'acceptation d'une matière et proposer une action",
      "Extraire d'une fiche de données de sécurité les consignes d'un poste",
      "Rédiger une note de choix de matière argumentée"
     ],
     "sections": [
      {
       "titre": "Trois documents, trois questions",
       "contenu": "<p>Le choix et la mise en œuvre d'une matière s'appuient sur trois documents que le prototypiste doit savoir exploiter rapidement :</p>\n<table>\n<thead><tr><th>Document</th><th>Émetteur</th><th>Question à laquelle il répond</th></tr></thead>\n<tbody>\n<tr><td>Fiche technique matière</td><td>Tanneur, fournisseur de textiles, de mousses ou de colles</td><td>Cette matière convient-elle à mon produit et comment la mettre en œuvre ?</td></tr>\n<tr><td>Rapport (ou procès-verbal) d'essai</td><td>Laboratoire du fournisseur, du client ou centre technique</td><td>Ce lot respecte-t-il les exigences mesurables ?</td></tr>\n<tr><td>Fiche de données de sécurité (FDS)</td><td>Fabricant du produit chimique</td><td>Quels dangers présente ce produit et comment s'en protéger ?</td></tr>\n</tbody>\n</table>\n<p>À l'épreuve, ces documents figurent dans le dossier ressources. On vous demande de choisir une matière entre plusieurs, de vérifier une conformité, ou de rédiger des consignes de poste. L'erreur la plus fréquente est de recopier le document sans le confronter à l'exigence du produit.</p>"
      },
      {
       "titre": "Lire une fiche technique matière",
       "contenu": "<p>Une fiche technique de cuir indique l'article, l'espèce, le tannage, le finissage, l'épaisseur, la forme de livraison et la surface moyenne, des résultats d'essais types, la conformité chimique et des conseils de mise en œuvre. Une fiche de colle indique la nature (polychloroprène, polyuréthane, phase aqueuse), le mode d'application, le temps de séchage, le temps ouvert, la pression, la réactivation éventuelle, la consommation au m² et les supports compatibles. Une fiche de mousse indique la masse volumique, la portance, la résilience, le tassement et le classement au feu.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une fiche matière en quatre temps. 1) Listez les exigences du produit qui concernent cette matière (dans le cahier des charges ou la fiche technique du modèle). 2) Pour chaque exigence, cherchez la donnée correspondante dans la fiche matière et notez-la avec son unité. 3) Comparez : conforme, non conforme, ou donnée absente. 4) Relevez les conseils de mise en œuvre qui influencent la fabrication (température maximale, colle conseillée, parage) et reportez-les dans la gamme ou la fiche de poste.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Une entreprise de sellerie doit choisir un cuir pour les sièges d'un véhicule de collection restauré, utilisé l'été en décapotable. Exigences du client : épaisseur 1,0 à 1,3 mm ; solidité de la couleur à la lumière au moins 4 sur l'échelle des laines bleues ; frottement à sec, décharge au moins 4 sur l'échelle de gris ; aspect naturel ; tenue à la chaleur. Deux cuirs sont proposés.</p>\n<table>\n<thead><tr><th>Caractéristique</th><th>Cuir A (aniline)</th><th>Cuir B (semi-aniline)</th></tr></thead>\n<tbody>\n<tr><td>Épaisseur</td><td>1,1/1,3 mm</td><td>1,0/1,2 mm</td></tr>\n<tr><td>Solidité à la lumière</td><td>3</td><td>5</td></tr>\n<tr><td>Frottement à sec, décharge</td><td>4</td><td>4-5</td></tr>\n<tr><td>Frottement humide, décharge</td><td>2-3</td><td>4</td></tr>\n<tr><td>Aspect</td><td>Très naturel, fleur visible</td><td>Naturel, légère couche pigmentée</td></tr>\n<tr><td>Prix indicatif</td><td>Plus élevé</td><td>Moins élevé</td></tr>\n<tr><td>Conseil du fournisseur</td><td>Usage intérieur protégé de la lumière</td><td>Ameublement et automobile</td></tr>\n</tbody>\n</table>\n<p>Un extrait de rapport d'essai du cuir B (lot 2417) est également fourni : épaisseur mesurée 1,05 à 1,20 mm ; solidité à la lumière 5 ; frottement à sec 4-5 ; chrome hexavalent non détecté.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Confrontation aux exigences.</strong></p>\n<table>\n<thead><tr><th>Exigence</th><th>Cuir A</th><th>Cuir B</th></tr></thead>\n<tbody>\n<tr><td>Épaisseur 1,0 à 1,3 mm</td><td>Conforme</td><td>Conforme</td></tr>\n<tr><td>Lumière au moins 4</td><td>Non conforme (3)</td><td>Conforme (5)</td></tr>\n<tr><td>Frottement à sec au moins 4</td><td>Conforme (4)</td><td>Conforme (4-5)</td></tr>\n<tr><td>Aspect naturel</td><td>Très bon</td><td>Bon</td></tr>\n</tbody>\n</table>\n<p><strong>2. Analyse.</strong> Le cuir A, plus naturel, ne respecte pas l'exigence de solidité à la lumière, critique pour un véhicule décapotable exposé au soleil : la couleur se dégraderait rapidement. Le fournisseur le réserve d'ailleurs à un usage protégé de la lumière. Sa faible solidité au frottement humide (2-3) est un risque supplémentaire (vêtements tachés par temps de pluie ou de transpiration), même si cette exigence n'est pas explicitement demandée. Le cuir B satisfait toutes les exigences ; son léger pigment réduit un peu l'aspect naturel, mais reste compatible avec l'exigence « aspect naturel ».</p>\n<p><strong>3. Vérification du lot.</strong> Le rapport d'essai du lot 2417 du cuir B confirme les valeurs de la fiche : épaisseur dans la plage, lumière 5, frottement 4-5, absence de chrome hexavalent détectable. Le lot est acceptable.</p>\n<p><strong>4. Conclusion.</strong> On retient le cuir B, lot 2417. On présente au client un échantillon pour valider l'aspect, en expliquant que le cuir A, plus beau à l'état neuf, ne tiendrait pas l'exposition au soleil. Cette argumentation fonctionnelle est plus convaincante qu'un simple choix de prix.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une fiche technique donne des valeurs types ; un rapport d'essai donne les valeurs d'un lot précis. Pour accepter une livraison, c'est le rapport du lot qui fait foi. Vérifiez toujours que le numéro de lot du rapport correspond à celui des peaux livrées.</div>"
      },
      {
       "titre": "Extraire des consignes d'une FDS",
       "contenu": "<p>La fiche de données de sécurité comporte seize rubriques normalisées. Pour rédiger les consignes d'un poste, on exploite surtout :</p>\n<ul>\n<li>la rubrique 2 (identification des dangers) : pictogrammes, mention d'avertissement, mentions de danger ;</li>\n<li>la rubrique 4 (premiers secours) ;</li>\n<li>la rubrique 5 (mesures de lutte contre l'incendie) ;</li>\n<li>la rubrique 7 (manipulation et stockage) ;</li>\n<li>la rubrique 8 (contrôle de l'exposition et protection individuelle), qui précise notamment le type de gants ;</li>\n<li>la rubrique 13 (élimination des déchets).</li>\n</ul>\n<p>Exemple de consignes tirées de la FDS d'une colle solvantée pour un poste d'encollage : utiliser sous aspiration en fonctionnement ; aucune flamme, étincelle ni appareil chauffant à proximité ; refermer le pot après chaque prélèvement ; ne garder au poste que la quantité de la journée ; porter des gants du type indiqué en rubrique 8 ; en cas de contact avec les yeux, rincer abondamment à l'eau et prévenir le responsable ; jeter pinceaux et pots souillés dans le conteneur des déchets dangereux.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les FDS doivent être accessibles aux salariés. Lorsqu'un prototypiste propose une nouvelle colle plus performante, il transmet sa FDS au responsable sécurité avant de l'introduire en atelier : un gain technique ne justifie pas un risque supplémentaire non maîtrisé.</div>"
      },
      {
       "titre": "Autre cas : la fiche technique d'une colle",
       "contenu": "<p>Un atelier de maroquinerie veut remplacer sa colle solvantée de rembordé par une colle en phase aqueuse. La fiche technique de la colle proposée indique, décrit en texte : colle de contact en dispersion aqueuse à base de polychloroprène ; application au pinceau ou au pistolet basse pression, sur les deux faces ; temps de séchage de 10 à 20 minutes à 20 °C selon l'épaisseur et la ventilation ; temps ouvert jusqu'à 1 heure ; assemblage sous pression ferme ; résistance finale atteinte après 24 heures ; ne pas stocker en dessous de 5 °C (le gel détruit l'émulsion) ; nettoyage des outils à l'eau avant séchage.</p>\n<table>\n<thead><tr><th>Donnée de la fiche</th><th>Conséquence pour l'atelier</th></tr></thead>\n<tbody>\n<tr><td>Séchage de 10 à 20 min, plus long que la colle solvantée</td><td>Revoir l'organisation du poste : encoller des séries de pièces et les assembler dans l'ordre, pour ne pas attendre</td></tr>\n<tr><td>Temps ouvert jusqu'à 1 h</td><td>Possibilité d'encoller un lot complet avant de remborder</td></tr>\n<tr><td>Résistance finale après 24 h</td><td>Éviter de solliciter fortement les rembordés juste après collage ; prévoir un délai avant certaines opérations</td></tr>\n<tr><td>Stockage au-dessus de 5 °C</td><td>Vérifier les conditions de stockage, notamment l'hiver et lors des livraisons</td></tr>\n<tr><td>Nettoyage à l'eau</td><td>Suppression des solvants de nettoyage au poste</td></tr>\n</tbody>\n</table>\n<p>Avant de valider le changement, on réalise des essais de rembordé et de pelage sur le cuir réel, en comparant avec la colle actuelle. Si la tenue est équivalente, le changement améliore nettement la sécurité du poste (risque incendie et exposition aux solvants fortement réduits) ; il faut alors mettre à jour la fiche de poste, la FDS affichée et la gamme.</p>"
      },
      {
       "titre": "Rédiger une note de choix",
       "contenu": "<p>La conclusion d'une analyse de matière prend souvent la forme d'une courte <strong>note de choix</strong> :</p>\n<ol>\n<li>rappel du besoin et des exigences principales ;</li>\n<li>tableau comparatif des solutions avec verdict par exigence ;</li>\n<li>analyse des écarts et des risques ;</li>\n<li>choix retenu, avec les conditions (lot, validation d'aspect, essai complémentaire) ;</li>\n<li>conséquences sur la fabrication (consignes de mise en œuvre, consignes de sécurité).</li>\n</ol>\n<p>Cette note peut tenir en une demi-page. Sa qualité tient à la précision des références (numéros de fiche, de lot, d'exigence) et à l'enchaînement logique entre constats et décision.</p>"
      }
     ],
     "points_cles": [
      "Fiche technique matière, rapport d'essai et FDS répondent à trois questions différentes.",
      "On confronte chaque donnée de la fiche matière à une exigence du produit.",
      "Les conseils de mise en œuvre de la fiche matière se reportent dans la gamme et les fiches de poste.",
      "Le rapport d'essai du lot fait foi pour accepter une livraison.",
      "Une exigence critique non respectée suffit à écarter une matière, même plus belle.",
      "La FDS fournit dangers, premiers secours, stockage, protections et élimination.",
      "Une nouvelle colle s'introduit en atelier après examen de sa FDS.",
      "La note de choix enchaîne exigences, comparaison, risques, décision et conséquences."
     ],
     "lexique": [
      {
       "terme": "Fiche technique matière",
       "def": "Document du fournisseur décrivant les caractéristiques et la mise en œuvre d'une matière."
      },
      {
       "terme": "Rapport d'essai",
       "def": "Document qui donne les résultats d'essais réalisés sur un lot précis."
      },
      {
       "terme": "Lot",
       "def": "Ensemble de matière fabriqué dans les mêmes conditions et identifié par un numéro."
      },
      {
       "terme": "Échelle des laines bleues",
       "def": "Référence de cotation de la solidité des couleurs à la lumière, de 1 à 8."
      },
      {
       "terme": "Note de choix",
       "def": "Document court qui justifie le choix d'une solution à partir d'exigences."
      },
      {
       "terme": "Mention de danger",
       "def": "Phrase normalisée décrivant la nature d'un danger d'un produit chimique."
      },
      {
       "terme": "Valeur type",
       "def": "Valeur représentative annoncée par un fournisseur, distincte de la valeur mesurée sur un lot."
      }
     ]
    },
    {
     "id": "bcuir-doc-controle-maintenance",
     "titre": "Exploiter une fiche de contrôle, une fiche de non-conformité et une fiche de maintenance",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire une fiche de contrôle et en tirer une décision d'acceptation",
      "Exploiter un relevé de défauts pour identifier les priorités",
      "Remplir et analyser une fiche de non-conformité",
      "Lire et compléter une fiche de maintenance de premier niveau",
      "Relier un défaut produit à une cause machine ou méthode"
     ],
     "sections": [
      {
       "titre": "Des documents qui tracent la qualité",
       "contenu": "<p>En fin de processus, plusieurs documents enregistrent ce qui s'est passé :</p>\n<ul>\n<li>la <strong>fiche de contrôle</strong> : caractéristiques à vérifier, valeurs attendues, tolérances, moyens, résultats, décision ;</li>\n<li>le <strong>relevé de défauts</strong> (ou feuille de relevé) : comptage des défauts par type sur une période ou un lot ;</li>\n<li>la <strong>fiche de non-conformité</strong> : description d'un écart, quantité concernée, traitement décidé, cause et action corrective ;</li>\n<li>la <strong>fiche de maintenance</strong> : opérations prévues par machine et par fréquence, avec cases de réalisation, et la fiche d'intervention ou le carnet de machine.</li>\n</ul>\n<p>À l'épreuve, ces documents sont souvent combinés : un lot présente des défauts de piquage, la fiche de contrôle le montre, et il faut remonter à une cause machine en exploitant la fiche de maintenance, puis proposer une action. Ils mobilisent les savoirs sur la qualité et la maintenance de premier niveau.</p>"
      },
      {
       "titre": "Lire une fiche de contrôle",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une fiche de contrôle remplie. 1) Identifiez le produit, le lot, la taille de l'échantillon et le plan d'échantillonnage (critères d'acceptation par gravité). 2) Pour chaque caractéristique, comparez le résultat à la tolérance : conforme ou non. 3) Classez chaque non-conformité selon sa gravité (critique, majeure, mineure) en vous appuyant sur la fiche. 4) Comptez les non-conformités par gravité et comparez aux critères d'acceptation. 5) Concluez : lot accepté, refusé, ou à trier. 6) Identifiez le ou les postes concernés par les défauts, pour orienter la recherche de cause.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un seul défaut critique entraîne en général le refus, quel que soit le nombre de défauts mineurs. Ne faites pas la somme de tous les défauts sans tenir compte de leur gravité.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Une entreprise de maroquinerie contrôle un lot de 300 ceintures. Le plan de contrôle prévoit un échantillon de 32 ceintures ; critère d'acceptation : 0 défaut critique, au plus 1 défaut majeur, au plus 3 défauts mineurs.</p>\n<table>\n<thead><tr><th>Caractéristique</th><th>Attendu</th><th>Gravité</th><th>Nombre de ceintures non conformes</th></tr></thead>\n<tbody>\n<tr><td>Longueur totale</td><td>1 050 ± 5 mm</td><td>Majeur</td><td>0</td></tr>\n<tr><td>Piqûre de bord : régularité</td><td>4 pts/cm, à 3 mm du bord</td><td>Majeur</td><td>3</td></tr>\n<tr><td>Tranche teinte</td><td>Lisse, couvrante</td><td>Mineur</td><td>2</td></tr>\n<tr><td>Boucle : tenue de la vis</td><td>Serrée, sans jeu</td><td>Majeur</td><td>0</td></tr>\n<tr><td>Arête vive sur la boucle</td><td>Aucune</td><td>Critique</td><td>0</td></tr>\n</tbody>\n</table>\n<p>Observations du contrôleur sur les 3 ceintures à piqûre irrégulière : points sautés et petites boucles de fil sur le dessous, toutes sur les ceintures numérotées de 210 à 300, cousues le second jour sur la machine n° 4.</p>\n<p>Extrait du carnet de la machine n° 4 : dernier nettoyage complet avec démontage de la plaque à aiguille il y a trois semaines ; changement d'aiguille non renseigné depuis la mise en service du modèle ; la fiche de maintenance prévoit un nettoyage hebdomadaire et un changement d'aiguille à chaque nouveau modèle ou en cas de défaut.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>1. Décision sur le lot.</strong> Défauts critiques : 0, conforme au critère. Défauts majeurs : 3 (piqûre irrégulière), supérieur au critère de 1 : le <strong>lot est refusé</strong> en l'état. Défauts mineurs : 2, inférieur au critère de 3 ; ils ne changent pas la décision mais seront corrigés au tri. Conséquence : tri à 100 % des ceintures, au moins de celles cousues sur la machine n° 4, retouche ou rebut des ceintures défectueuses.</p>\n<p><strong>2. Localisation.</strong> Tous les défauts de piqûre proviennent des ceintures 210 à 300, cousues le second jour sur la machine n° 4. Le défaut est donc lié à ce poste et à cette période, et non à la matière (les ceintures 1 à 209, coupées dans le même cuir, sont conformes).</p>\n<p><strong>3. Recherche de cause.</strong> Les symptômes (points sautés et boucles de fil dessous) orientent vers l'aiguille (émoussée, tordue ou mal montée), l'enfilage ou la tension du fil d'aiguille. Le carnet montre que le nettoyage hebdomadaire n'a pas été fait depuis trois semaines et que l'aiguille n'a pas été changée depuis le début du modèle : sur des ceintures épaisses, une aiguille s'use vite. Causes probables par la méthode des 5M : <strong>moyens</strong> (aiguille usée, encrassement) et <strong>méthode</strong> (plan de maintenance non appliqué).</p>\n<p><strong>4. Actions.</strong> Action immédiate : arrêter la machine n° 4, changer l'aiguille, nettoyer, vérifier l'enfilage et les tensions, faire un essai sur chute. Action corrective : rappeler et faire appliquer le plan de maintenance (nettoyage hebdomadaire, changement d'aiguille), ajouter une case « aiguille changée » datée sur la fiche de poste pour les modèles en cuir épais, et contrôler la première ceinture de chaque demi-journée. Vérification : suivre le taux de défauts de piqûre sur les lots suivants.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'analyse croisée des documents qualité et maintenance permet de passer du constat (lot refusé) à la cause (machine non entretenue) et à une action qui empêche la récidive (plan de maintenance appliqué et tracé).</div>"
      },
      {
       "titre": "Remplir une fiche de non-conformité",
       "contenu": "<p>La fiche de non-conformité de l'exemple serait remplie ainsi :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Produit, lot</td><td>Ceinture, lot de 300, numéros 1 à 300</td></tr>\n<tr><td>Description de l'écart</td><td>Piqûre de bord irrégulière : points sautés, boucles de fil dessous</td></tr>\n<tr><td>Détection</td><td>Contrôle par prélèvement, 3 défauts majeurs sur 32</td></tr>\n<tr><td>Quantité concernée</td><td>À déterminer par tri à 100 %, suspicion sur numéros 210 à 300</td></tr>\n<tr><td>Traitement</td><td>Tri, retouche des piqûres si possible, rebut sinon</td></tr>\n<tr><td>Cause identifiée</td><td>Aiguille usée et machine encrassée, maintenance hebdomadaire non réalisée</td></tr>\n<tr><td>Action corrective</td><td>Application et traçage du plan de maintenance, contrôle de la première pièce par demi-journée</td></tr>\n<tr><td>Vérification d'efficacité</td><td>Suivi des défauts de piqûre sur les trois lots suivants</td></tr>\n</tbody>\n</table>\n<p>Chaque rubrique est remplie avec des faits précis et datés, pas des impressions. La fiche est signée par le responsable qualité et classée : elle servira lors des audits et pour l'analyse de Pareto mensuelle.</p>"
      },
      {
       "titre": "Exploiter un relevé de défauts sur un mois",
       "contenu": "<p>Un relevé de défauts mensuel de l'atelier de ceinturerie, décrit en texte, donne : piqûre irrégulière, 36 ; tranche teinte défectueuse, 24 ; trous de réglage décalés, 9 ; boucle rayée, 6 ; autres, 5. Total : 80 défauts.</p>\n<p><strong>Analyse.</strong> En pourcentage : piqûre 45 %, tranche 30 %, trous 11,25 %, boucle 7,5 %, autres 6,25 %. Les deux premiers types représentent 75 % des défauts : selon le principe du diagramme de Pareto, c'est sur eux qu'il faut agir en priorité. Pour la piqûre, l'analyse précédente a identifié une cause liée à la maintenance. Pour la tranche teinte, on cherchera les causes avec les 5M : ponçage insuffisant (méthode), teinture trop épaisse ou mal diluée (matière), séchage trop court (méthode, milieu froid ou humide), opérateur nouvellement affecté (main-d'œuvre).</p>\n<p>Les trous de réglage décalés (11 %) sont moins nombreux mais peuvent indiquer un emporte-pièce ou un gabarit de perçage usé : un contrôle de l'outil est rapide et peu coûteux, il peut être mené en parallèle. Le relevé du mois suivant permettra de vérifier si les actions ont réduit les deux premiers types de défauts.</p>"
      },
      {
       "titre": "Lire et compléter une fiche de maintenance",
       "contenu": "<p>Une fiche de maintenance de premier niveau présente, pour une machine, les opérations classées par fréquence, avec la méthode (ou le renvoi à la notice), les produits (huile préconisée), les protections, et des cases à dater et signer. À l'épreuve, on peut vous demander de la compléter à partir d'une notice de machine du dossier ressources.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une fiche de maintenance efficace est courte, affichée près de la machine, et son remplissage est vérifié par le chef d'atelier. Une fiche jamais remplie signale un problème d'organisation (temps non prévu pour l'entretien) plus qu'un manque de bonne volonté : la solution est souvent de planifier un créneau fixe, par exemple les dix dernières minutes du vendredi.</div>\n<p>Pour compléter une fiche, on reprend les fréquences de la notice (avant chaque utilisation, fin de journée, fin de semaine, avant une longue période d'arrêt), on formule chaque opération avec un verbe d'action précis (nettoyer la zone du crochet au pinceau, huiler les points repérés en rouge sur la notice, vérifier l'état de la pointe d'aiguille), et on rappelle en tête la consigne de sécurité : machine arrêtée et moteur coupé.</p>"
      }
     ],
     "points_cles": [
      "Fiche de contrôle, relevé de défauts, fiche de non-conformité et fiche de maintenance se lisent ensemble.",
      "La décision sur un lot compare le nombre de défauts par gravité aux critères d'acceptation.",
      "Un défaut critique entraîne en général le refus du lot.",
      "La localisation des défauts (poste, période, numéros) oriente la recherche de cause.",
      "Les symptômes de piquage orientent vers l'aiguille, l'enfilage, les tensions ou l'encrassement.",
      "L'action immédiate traite le problème ; l'action corrective empêche la récidive.",
      "La fiche de non-conformité se remplit avec des faits précis et datés.",
      "Une fiche de maintenance est courte, affichée, avec fréquences, verbes d'action et consigne de sécurité."
     ],
     "lexique": [
      {
       "terme": "Fiche de contrôle",
       "def": "Document listant les caractéristiques à vérifier et les résultats du contrôle."
      },
      {
       "terme": "Relevé de défauts",
       "def": "Comptage des défauts par type sur un lot ou une période."
      },
      {
       "terme": "Fiche de non-conformité",
       "def": "Document qui décrit un écart, son traitement, sa cause et l'action corrective."
      },
      {
       "terme": "Critère d'acceptation",
       "def": "Nombre maximal de défauts admis dans un échantillon pour accepter un lot."
      },
      {
       "terme": "Tri à 100 %",
       "def": "Contrôle de toutes les pièces d'un lot refusé pour séparer les conformes des non conformes."
      },
      {
       "terme": "Action immédiate",
       "def": "Action qui supprime l'effet d'un problème sans en traiter la cause."
      },
      {
       "terme": "Carnet de machine",
       "def": "Document qui enregistre l'historique des interventions sur une machine."
      }
     ]
    }
   ]
  }
 ]
};
