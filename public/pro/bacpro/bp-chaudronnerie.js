/* Polymates — Bac pro Technicien en chaudronnerie industrielle — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-chaudronnerie"] = {
 "id": "bp-chaudronnerie",
 "nom": "Technicien en chaudronnerie industrielle",
 "icone": "🎓",
 "couleur": "#9aa8b8",
 "intro": "Le baccalauréat professionnel Technicien en chaudronnerie industrielle forme des techniciens capables de préparer, fabriquer, assembler, contrôler et réhabiliter sur site des ensembles chaudronnés : capacités et appareils à pression, tuyauteries, ouvrages de tôlerie et structures. Il mène aux métiers de chaudronnier, tuyauteur, tôlier, soudeur qualifié, technicien d'atelier ou de préparation et chef d'équipe. Ce cours couvre les savoirs associés de la première et de la terminale, en prolongement du cours de seconde de la famille des métiers de la réalisation d'ensembles mécaniques et industriels. Il est organisé en deux blocs : un cours théorique (ouvrages et communication technique, matériaux et mécanique, préparation, procédés, qualité, sécurité et réhabilitation) et un bloc d'analyse de documents, qui montre comment exploiter les documents professionnels de l'épreuve d'analyse et de préparation.",
 "parties": [
  {
   "titre": "Partie 1 — Ouvrages chaudronnés et communication technique",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btci-ensembles-chaudronnes",
     "titre": "Les ensembles chaudronnés : fonctions et éléments de construction",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Distinguer les grandes familles d'ouvrages : chaudronnerie, tôlerie, tuyauterie, structures et supportage.",
      "Conduire l'analyse fonctionnelle d'un ensemble chaudronné à partir d'un cahier des charges.",
      "Nommer les éléments de construction d'une capacité et d'une ligne de tuyauterie.",
      "Associer chaque élément à la fonction technique qu'il assure.",
      "Identifier les liaisons entre éléments et justifier le choix d'un assemblage permanent ou démontable."
     ],
     "sections": [
      {
       "titre": "Ce que fabrique un technicien en chaudronnerie industrielle",
       "contenu": "\n<p>Le technicien en chaudronnerie industrielle prépare, fabrique, assemble et parfois remet en état des <strong>ensembles chaudronnés</strong> : des ouvrages obtenus à partir de tôles, de tubes et de profilés, formés puis assemblés le plus souvent par soudage. On les rencontre dans la chimie, la pétrochimie, l'agroalimentaire, la pharmacie, l'énergie (nucléaire, thermique, hydraulique), l'aéronautique, le ferroviaire, la construction navale ou le traitement de l'eau.</p>\n<p>On distingue habituellement quatre familles d'ouvrages, qui demandent les mêmes savoirs de base mais des savoir-faire différents.</p>\n<table>\n<thead><tr><th>Famille</th><th>Exemples d'ouvrages</th><th>Épaisseurs courantes</th><th>Exigence dominante</th></tr></thead>\n<tbody>\n<tr><td>Chaudronnerie</td><td>Cuves, réservoirs, ballons, échangeurs, trémies, silos, cheminées</td><td>3 à 30 mm, parfois davantage</td><td>Étanchéité, tenue à la pression, résistance à la corrosion</td></tr>\n<tr><td>Tôlerie</td><td>Carters, capots, armoires, gaines de ventilation, habillages de machines</td><td>0,5 à 3 mm</td><td>Précision dimensionnelle, aspect, rigidité</td></tr>\n<tr><td>Tuyauterie</td><td>Lignes de procédé, réseaux de vapeur, d'air comprimé, d'eau glacée, collecteurs</td><td>Épaisseur du tube normalisé</td><td>Étanchéité, respect du tracé, compatibilité avec le fluide</td></tr>\n<tr><td>Structures et supportage</td><td>Châssis, passerelles, racks de tuyauterie, supports, bâtis de machines</td><td>Profilés et tôles de 5 à 20 mm</td><td>Résistance mécanique, stabilité</td></tr>\n</tbody>\n</table>\n<p>Un même chantier mélange souvent ces familles : une cuve de stockage arrive avec ses tubulures (chaudronnerie), son habillage calorifugé (tôlerie), ses lignes d'alimentation (tuyauterie) et sa passerelle d'accès (structure).</p>"
      },
      {
       "titre": "L'analyse fonctionnelle d'un ouvrage",
       "contenu": "\n<p>Avant de dessiner ou de fabriquer, il faut comprendre à quoi sert l'ouvrage. Le <strong>cahier des charges fonctionnel</strong> (CdCF) exprime le besoin du client sous forme de <strong>fonctions de service</strong> : ce que l'ouvrage doit faire pour l'utilisateur, sans dire comment. Chaque fonction est accompagnée de <strong>critères</strong> d'appréciation, de <strong>niveaux</strong> chiffrés et d'une <strong>flexibilité</strong> (marge acceptable).</p>\n<p>On distingue les <strong>fonctions principales</strong> (raison d'être de l'ouvrage, par exemple « stocker 5 m<sup>3</sup> d'eau chaude sanitaire ») et les <strong>fonctions contraintes</strong> (adaptations imposées par l'environnement : « résister à la corrosion de l'eau chlorée », « respecter la réglementation des équipements sous pression », « pouvoir être manutentionné par un pont roulant de 5 t »).</p>\n<table>\n<thead><tr><th>Fonction de service</th><th>Critère</th><th>Niveau</th><th>Flexibilité</th></tr></thead>\n<tbody>\n<tr><td>Stocker de l'eau chaude</td><td>Volume utile</td><td>5 m<sup>3</sup></td><td>± 2 %</td></tr>\n<tr><td>Résister à la pression de service</td><td>Pression maximale admissible PS</td><td>6 bar</td><td>Aucune</td></tr>\n<tr><td>Résister à la température</td><td>Température maximale TS</td><td>90 °C</td><td>Aucune</td></tr>\n<tr><td>Limiter les pertes thermiques</td><td>Épaisseur d'isolant</td><td>100 mm</td><td>+ 20 mm</td></tr>\n<tr><td>S'intégrer dans le local</td><td>Hauteur hors tout</td><td>3 200 mm maxi</td><td>Aucune</td></tr>\n</tbody>\n</table>\n<p>Pour passer des fonctions de service aux solutions, on utilise un outil de décomposition comme le <strong>diagramme FAST</strong> (Function Analysis System Technique) : chaque fonction est déclinée en <strong>fonctions techniques</strong> (« contenir le fluide », « supporter la capacité », « raccorder les circuits ») puis en <strong>solutions constructives</strong> (virole et fonds soudés, pieds en tube, tubulures à brides).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour analyser un ouvrage inconnu, procéder dans cet ordre. 1) Lire le cahier des charges et souligner les grandeurs chiffrées (volume, pression, température, fluide, encombrement). 2) Écrire les fonctions de service sous la forme « verbe à l'infinitif + complément ». 3) Pour chaque fonction, chercher sur le plan l'élément qui la réalise. 4) Noter les éléments dont on ne trouve pas la fonction : ce sont souvent des éléments de fabrication (raidisseurs, oreilles de levage, plaques de renfort) qu'il faut aussi justifier. 5) Résumer dans un tableau « fonction technique / élément / matériau / liaison ».</div>"
      },
      {
       "titre": "Les éléments de construction d'une capacité",
       "contenu": "\n<p>Une <strong>capacité</strong> (cuve, ballon, réservoir) est construite autour d'un <strong>corps</strong> qui contient le fluide. Ses éléments ont des noms précis qu'il faut employer sans approximation.</p>\n<table>\n<thead><tr><th>Élément</th><th>Description</th><th>Fonction technique</th></tr></thead>\n<tbody>\n<tr><td>Virole</td><td>Tôle roulée en cylindre (ou en cône : virole conique) et soudée par un joint longitudinal</td><td>Former la paroi latérale du corps</td></tr>\n<tr><td>Fond</td><td>Calotte emboutie fermant la virole : fond bombé, fond elliptique, fond hémisphérique, fond plat</td><td>Fermer le corps et résister à la pression</td></tr>\n<tr><td>Joint circulaire</td><td>Soudure bout à bout reliant deux viroles ou une virole et un fond</td><td>Assurer la continuité étanche</td></tr>\n<tr><td>Tubulure (piquage)</td><td>Court tube soudé sur le corps, terminé par une bride</td><td>Raccorder une tuyauterie ou un instrument</td></tr>\n<tr><td>Plaque de renfort</td><td>Anneau de tôle soudé autour d'une ouverture</td><td>Compenser l'affaiblissement dû au trou</td></tr>\n<tr><td>Trou d'homme</td><td>Grande tubulure fermée par une bride pleine (tampon)</td><td>Permettre l'inspection et le nettoyage intérieur</td></tr>\n<tr><td>Supportage</td><td>Pieds, jupe, berceaux (capacité horizontale), consoles</td><td>Transmettre les charges au sol ou à la structure</td></tr>\n<tr><td>Oreilles de levage</td><td>Plats percés soudés sur le corps</td><td>Permettre la manutention</td></tr>\n<tr><td>Raidisseurs</td><td>Plats ou cornières soudés sur les grandes parois</td><td>Limiter les déformations des parois minces</td></tr>\n</tbody>\n</table>\n<p>Le choix du fond dépend de la pression : un <strong>fond plat</strong> est simple à fabriquer mais travaille en flexion et doit être très épais ou raidi ; un <strong>fond bombé</strong> (type GRC, « grand rayon de carre », ou type Korbbogen) ou un <strong>fond elliptique</strong> travaille surtout en membrane et convient aux pressions courantes ; le <strong>fond hémisphérique</strong> est le plus favorable mécaniquement mais le plus coûteux à former. Les fonds sont généralement achetés à un fabricant spécialisé : le chaudronnier les commande par leur diamètre, leur épaisseur, leur type et leur matériau.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les plans de capacité comportent toujours un tableau des tubulures, repérées par des lettres (N1, N2… ou A, B, C…), avec pour chacune le diamètre nominal, la classe de pression de la bride, l'orientation angulaire sur le corps et la cote de hauteur. C'est l'un des premiers tableaux qu'un chef d'atelier consulte.</div>"
      },
      {
       "titre": "Les éléments de construction d'une tuyauterie",
       "contenu": "\n<p>Une <strong>ligne de tuyauterie</strong> transporte un fluide d'un équipement à un autre. Elle est constituée de <strong>tubes</strong> droits et d'<strong>accessoires</strong> normalisés, désignés par leur <strong>diamètre nominal</strong> DN (nombre sans unité qui sert de repère, par exemple DN 50) et leur <strong>pression nominale</strong> PN pour les brides (PN 16, PN 40…).</p>\n<ul>\n<li><strong>Tubes</strong> : sans soudure ou soudés longitudinalement ; à un DN donné correspond un diamètre extérieur fixe (DN 50 : 60,3 mm ; DN 100 : 114,3 mm) et plusieurs épaisseurs possibles.</li>\n<li><strong>Coudes</strong> à souder (à 90°, 45°, 180°) : on les désigne par leur angle et leur rayon de cintrage.</li>\n<li><strong>Tés</strong> égaux ou réduits, <strong>réductions</strong> concentriques ou excentriques, <strong>fonds bombés</strong> pour obturer une extrémité.</li>\n<li><strong>Brides</strong> : plates, à collerette, tournantes, pleines ; elles rendent la ligne démontable.</li>\n<li><strong>Organes</strong> : vannes, robinets, clapets anti-retour, filtres, purgeurs, soupapes ; ils sont achetés et intégrés à la ligne.</li>\n<li><strong>Supports</strong> : colliers, patins, guides, points fixes, supports à ressort ; ils reprennent le poids et les dilatations.</li>\n</ul>\n<p>Une ligne est découpée en <strong>tronçons préfabriqués</strong> (appelés aussi « spools ») soudés en atelier, puis assemblés sur site par des soudures de chantier ou des brides. Cette découpe tient compte des dimensions transportables, des possibilités de manutention et des réglages à prévoir sur site.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le DN n'est pas un diamètre mesurable. Un tube DN 100 a un diamètre extérieur de 114,3 mm et un diamètre intérieur qui dépend de son épaisseur. Calculer un débit ou une longueur développée avec la valeur 100 mm conduit à une erreur systématique.</div>"
      },
      {
       "titre": "Les liaisons entre éléments",
       "contenu": "\n<p>Les éléments d'un ensemble chaudronné sont reliés par des <strong>liaisons</strong> qui doivent garantir la tenue mécanique et, très souvent, l'étanchéité. On classe les assemblages selon deux critères.</p>\n<table>\n<thead><tr><th>Assemblage</th><th>Démontable ?</th><th>Usages typiques</th><th>Points de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Soudage bout à bout</td><td>Non</td><td>Viroles, fonds, tubes entre eux</td><td>Préparation des bords, pénétration complète, contrôle</td></tr>\n<tr><td>Soudage d'angle</td><td>Non</td><td>Supports, raidisseurs, piquages posés</td><td>Gorge suffisante, déformation</td></tr>\n<tr><td>Assemblage à brides boulonnées</td><td>Oui</td><td>Raccord aux équipements, trous d'homme, organes</td><td>Joint adapté, serrage croisé et contrôlé</td></tr>\n<tr><td>Boulonnage de structure</td><td>Oui</td><td>Passerelles, charpente, châssis</td><td>Classe de qualité des vis, précharge</td></tr>\n<tr><td>Rivetage, sertissage</td><td>Non</td><td>Tôlerie fine, gaines</td><td>Tenue limitée, étanchéité par mastic</td></tr>\n<tr><td>Collage structural</td><td>Non</td><td>Tôlerie, panneaux, assemblages multimatériaux</td><td>Préparation de surface, temps de polymérisation</td></tr>\n</tbody>\n</table>\n<p>Le choix découle des fonctions : un élément qui doit être inspecté, remplacé ou nettoyé sera relié par une liaison démontable ; un élément qui doit être parfaitement étanche sous pression, sans entretien, sera soudé. La liaison détermine aussi l'ordre de fabrication : on ne peut pas souder une pièce intérieure après avoir fermé le corps, sauf si un trou d'homme permet d'y accéder.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un plan, toute soudure est une liaison permanente qu'il faudra préparer, exécuter, contrôler et tracer ; toute bride est une liaison démontable qui suppose un joint, une boulonnerie et un serrage maîtrisés.</div>"
      },
      {
       "titre": "Du besoin à l'ouvrage : un exemple suivi",
       "contenu": "\n<p>Une laiterie commande une <strong>cuve de stockage</strong> verticale de 2 m<sup>3</sup> en acier inoxydable, à pression atmosphérique, pour du lactosérum à 50 °C. Le cahier des charges impose la nettoyabilité (nettoyage en place par boule de lavage), une vidange totale et une implantation dans un local de 2,80 m sous plafond.</p>\n<table>\n<thead><tr><th>Fonction technique</th><th>Solution constructive</th><th>Liaison</th></tr></thead>\n<tbody>\n<tr><td>Contenir le produit</td><td>Virole inox de diamètre 1 200 mm, épaisseur 3 mm</td><td>Joint longitudinal soudé TIG</td></tr>\n<tr><td>Permettre la vidange totale</td><td>Fond inférieur conique avec tubulure de vidange au point bas</td><td>Soudure bout à bout virole/fond</td></tr>\n<tr><td>Fermer la cuve</td><td>Fond supérieur bombé avec trou d'homme</td><td>Soudure bout à bout ; tampon démontable</td></tr>\n<tr><td>Nettoyer l'intérieur</td><td>Tubulure de boule de lavage sur le fond supérieur</td><td>Raccord sanitaire démontable</td></tr>\n<tr><td>Supporter la cuve</td><td>Trois pieds tubulaires réglables</td><td>Soudure d'angle sur plaques de répartition</td></tr>\n</tbody>\n</table>\n<p>On voit que chaque élément répond à une fonction et que les choix de matériau (inox), de procédé (TIG, adapté aux faibles épaisseurs et à l'aspect) et de forme (fond conique pour la vidange) sont dictés par le cahier des charges. Les états de surface intérieurs et l'absence de zones de rétention, imposés par l'hygiène alimentaire, influenceront aussi la préparation et la finition des soudures.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> à pression atmosphérique, une cuve n'est pas pour autant exempte d'efforts : la hauteur de liquide crée une pression hydrostatique au fond, et une vidange rapide sans évent peut mettre la cuve en dépression et l'écraser. L'évent fait partie des fonctions à ne pas oublier.</div>"
      }
     ],
     "points_cles": [
      "Les ouvrages se répartissent en chaudronnerie, tôlerie, tuyauterie et structures, souvent combinées sur un même projet.",
      "Le cahier des charges fonctionnel exprime le besoin par des fonctions de service, avec critères, niveaux et flexibilités.",
      "Le diagramme FAST relie chaque fonction de service à des fonctions techniques puis à des solutions constructives.",
      "Une capacité se compose d'une virole, de fonds, de tubulures, de renforts, d'un supportage et d'accessoires de manutention.",
      "Une tuyauterie se compose de tubes, d'accessoires à souder, de brides, d'organes et de supports, désignés par DN et PN.",
      "Le DN est un repère, pas une dimension : le diamètre extérieur réel se lit dans les tables.",
      "Le choix entre liaison soudée et liaison démontable découle des fonctions d'inspection, de maintenance et d'étanchéité.",
      "L'ordre d'assemblage dépend de l'accessibilité des soudures et des pièces intérieures."
     ],
     "lexique": [
      {
       "terme": "Ensemble chaudronné",
       "def": "Ouvrage fabriqué à partir de tôles, tubes et profilés formés puis assemblés, le plus souvent par soudage."
      },
      {
       "terme": "Fonction de service",
       "def": "Action attendue de l'ouvrage pour répondre au besoin de l'utilisateur, exprimée sans référence à une solution."
      },
      {
       "terme": "Diagramme FAST",
       "def": "Outil qui décompose une fonction de service en fonctions techniques puis en solutions constructives."
      },
      {
       "terme": "Virole",
       "def": "Élément cylindrique ou conique obtenu par roulage d'une tôle, formant la paroi latérale d'une capacité."
      },
      {
       "terme": "Fond",
       "def": "Calotte (bombée, elliptique, hémisphérique, conique ou plate) qui ferme l'extrémité d'une virole."
      },
      {
       "terme": "Tubulure",
       "def": "Court tube soudé sur une paroi, généralement terminé par une bride, servant de raccordement."
      },
      {
       "terme": "DN",
       "def": "Diamètre nominal : désignation conventionnelle d'un tube ou d'un accessoire, sans unité."
      },
      {
       "terme": "PN",
       "def": "Pression nominale : classe de pression d'une bride ou d'un organe de robinetterie."
      },
      {
       "terme": "Spool",
       "def": "Tronçon de tuyauterie préfabriqué en atelier, destiné à être assemblé sur site."
      },
      {
       "terme": "Trou d'homme",
       "def": "Ouverture fermée par un tampon démontable, permettant l'accès à l'intérieur d'une capacité."
      }
     ]
    },
    {
     "id": "btci-representation-soudures-tuyauteries",
     "titre": "Représenter les ensembles chaudronnés, les soudures et les tuyauteries",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Lire un plan d'ensemble et un plan de détail d'ouvrage chaudronné.",
      "Interpréter la représentation symbolique des soudures selon la norme NF EN ISO 2553.",
      "Lire et tracer une perspective isométrique de tuyauterie en représentation unifilaire.",
      "Repérer les conventions propres aux plans de chaudronnerie : orientations, tableaux de tubulures, cotes de niveau.",
      "Réaliser un croquis coté exploitable en atelier ou sur site."
     ],
     "sections": [
      {
       "titre": "Les plans d'un dossier de chaudronnerie",
       "contenu": "\n<p>Les règles générales du dessin technique (projection européenne, traits, coupes, cartouche) s'appliquent aux ouvrages chaudronnés, mais le métier utilise aussi des documents et des conventions qui lui sont propres. Un dossier courant comprend :</p>\n<ul>\n<li>le <strong>plan d'ensemble</strong> (ou plan général), qui montre l'ouvrage complet, ses cotes d'encombrement, ses tubulures et sa <strong>nomenclature</strong> ;</li>\n<li>les <strong>plans de détail</strong> ou de <strong>définition de pièces</strong>, qui donnent la forme et les dimensions de chaque élément à fabriquer (virole, fond, gousset, support) ;</li>\n<li>les <strong>plans de soudage</strong> ou les vues de détail sur lesquelles figurent les symboles de soudure et les repères de joints ;</li>\n<li>les <strong>isométriques de tuyauterie</strong>, une par ligne ou par tronçon ;</li>\n<li>les <strong>développés</strong> et les <strong>fichiers de découpe</strong> issus du modeleur numérique.</li>\n</ul>\n<p>Sur les plans de capacité, on trouve des conventions particulières : une <strong>vue en plan d'orientation</strong> qui indique la position angulaire de chaque tubulure (0°, 90°, 180°, 270°, avec le nord ou un repère d'usine), des <strong>cotes de niveau</strong> par rapport à une ligne de référence (souvent la ligne de soudure du fond inférieur, appelée ligne de tangence), et un <strong>tableau des tubulures</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en chaudronnerie, les cotes de hauteur sont presque toujours données à partir d'une référence unique (ligne de tangence ou face d'appui des pieds) et les positions autour du corps sont données en degrés. Lire un plan, c'est d'abord trouver ces deux références.</div>"
      },
      {
       "titre": "La représentation symbolique des soudures",
       "contenu": "\n<p>Dessiner chaque cordon serait illisible ; on utilise donc une <strong>représentation symbolique</strong> définie par la norme <strong>NF EN ISO 2553</strong>. Elle comporte :</p>\n<ul>\n<li>une <strong>ligne fléchée</strong> qui pointe sur le joint ;</li>\n<li>une <strong>ligne de référence</strong> horizontale, en trait continu, doublée (dans le système le plus utilisé en Europe, dit système A) d'une <strong>ligne d'identification</strong> en trait interrompu, placée au-dessus ou au-dessous ;</li>\n<li>un <strong>symbole élémentaire</strong> qui indique la forme de la préparation ;</li>\n<li>des <strong>cotes</strong> et éventuellement des <strong>symboles supplémentaires</strong> ;</li>\n<li>une <strong>queue</strong> (fourche) à l'extrémité de la ligne de référence, où l'on inscrit le numéro de procédé, le niveau de qualité ou la référence du mode opératoire.</li>\n</ul>\n<p>Si le symbole est placé du côté de la ligne continue, la soudure est exécutée <strong>du côté de la flèche</strong> ; s'il est placé du côté de la ligne interrompue, elle est exécutée <strong>du côté opposé</strong>. Un symbole symétrique de part et d'autre de la ligne indique une soudure des deux côtés.</p>\n<table>\n<thead><tr><th>Symbole élémentaire (description)</th><th>Désignation</th><th>Usage courant</th></tr></thead>\n<tbody>\n<tr><td>Deux traits parallèles verticaux</td><td>Soudure sur bords droits (en I)</td><td>Tôles minces, environ jusqu'à 3 à 4 mm selon procédé</td></tr>\n<tr><td>Un V ouvert vers le haut</td><td>Soudure en V</td><td>Bout à bout d'épaisseur moyenne, soudé d'un côté</td></tr>\n<tr><td>Un trait vertical et un trait oblique</td><td>Soudure en demi-V (bord biseauté)</td><td>Piquages, assemblages en T à pénétration</td></tr>\n<tr><td>Deux V opposés formant un X</td><td>Soudure en X (double V)</td><td>Fortes épaisseurs accessibles des deux côtés</td></tr>\n<tr><td>Un Y ou un U</td><td>Soudure en Y, en U</td><td>Fortes épaisseurs, réduction du volume de métal déposé</td></tr>\n<tr><td>Un triangle rectangle</td><td>Soudure d'angle</td><td>Assemblages en T, à clin, supports</td></tr>\n</tbody>\n</table>\n<p>Parmi les symboles supplémentaires, les plus fréquents sont le <strong>cercle</strong> à la jonction flèche/référence (soudure périphérique, « tout autour »), le <strong>drapeau</strong> (soudure à exécuter sur chantier), et les traits indiquant une surface arasée, convexe ou concave.</p>"
      },
      {
       "titre": "Coter une soudure",
       "contenu": "\n<p>Les cotes d'une soudure d'angle se placent à gauche du symbole pour la section et à droite pour la longueur. La lettre précise la grandeur cotée :</p>\n<ul>\n<li><strong>a</strong> : épaisseur de gorge, c'est-à-dire la hauteur du plus grand triangle isocèle inscrit dans la section du cordon ; c'est la grandeur qui sert au calcul de résistance ;</li>\n<li><strong>z</strong> : longueur du côté de ce triangle, mesurable au calibre sur la pièce ;</li>\n<li>pour une soudure discontinue : nombre d'éléments × longueur de chaque élément, puis l'écartement entre éléments, par exemple 4 × 50 (100).</li>\n</ul>\n<p>Pour une soudure d'angle à côtés égaux, z = a × √2 ≈ 1,41 × a. Ainsi, une gorge a5 correspond à un côté d'environ 7 mm.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire le symbole « a4 triangle 6 × 80 (150) », côté flèche, avec un cercle et une queue portant 135. 1) Le triangle indique une soudure d'angle. 2) a4 : épaisseur de gorge de 4 mm, soit un côté z d'environ 5,7 mm. 3) 6 × 80 (150) : six cordons de 80 mm espacés de 150 mm. 4) Le symbole est sur la ligne continue : souder du côté de la flèche. 5) Le cercle impose de traiter tout le contour. 6) La queue indique le procédé 135, soudage MAG avec fil plein. Il reste à vérifier sur le plan si le contour permet effectivement six cordons de cette longueur ; en cas d'incohérence, la question est posée au bureau d'études avant fabrication.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> confondre a et z est l'erreur la plus fréquente. Un cordon réalisé avec z = 4 au lieu de a = 4 n'a qu'une gorge d'environ 2,8 mm, soit 30 % de section résistante en moins.</div>"
      },
      {
       "titre": "La perspective isométrique de tuyauterie",
       "contenu": "\n<p>Une tuyauterie se développe dans les trois directions de l'espace ; les vues orthogonales deviennent vite illisibles. On utilise donc une <strong>perspective isométrique</strong>, dont les trois axes (est-ouest, nord-sud, vertical) sont dessinés à 120° les uns des autres. Les règles de représentation sont fixées par la norme NF EN ISO 6412.</p>\n<ul>\n<li>La tuyauterie est représentée en <strong>unifilaire</strong> : un seul trait fort suit l'axe du tube, quel que soit son diamètre.</li>\n<li>Les longueurs ne sont pas à l'échelle ; seules les <strong>cotes</strong> font foi.</li>\n<li>Les tronçons qui ne sont parallèles à aucun axe (tronçons « hors axes ») sont dessinés à l'intérieur d'un triangle ou d'un parallélépipède hachuré qui montre leurs projections.</li>\n<li>Une <strong>flèche nord</strong> oriente le dessin ; elle est obligatoire pour l'exploiter sur site.</li>\n<li>Les <strong>altitudes</strong> sont indiquées par rapport à un niveau de référence de l'usine (par exemple EL + 3 250 ou niveau + 3,250 m).</li>\n</ul>\n<table>\n<thead><tr><th>Élément</th><th>Représentation usuelle en unifilaire</th></tr></thead>\n<tbody>\n<tr><td>Soudure d'atelier</td><td>Point plein sur le trait</td></tr>\n<tr><td>Soudure de chantier</td><td>Point accompagné d'une mention ou d'un symbole spécifique (FW, « field weld », sur de nombreux plans)</td></tr>\n<tr><td>Bride</td><td>Petit trait perpendiculaire au tube ; deux traits pour une paire de brides</td></tr>\n<tr><td>Vanne</td><td>Deux triangles opposés par la pointe, avec le volant indiqué</td></tr>\n<tr><td>Réduction</td><td>Trapèze sur le trait</td></tr>\n<tr><td>Coude</td><td>Angle arrondi ou angle vif selon les conventions de l'entreprise</td></tr>\n</tbody>\n</table>\n<p>Une isométrique complète comporte aussi une <strong>liste de matériel</strong> (repère, désignation, DN, épaisseur ou série, matériau, quantité), le numéro de ligne, le fluide, les conditions de service et la classe de tuyauterie (spécification qui fixe les matériaux et accessoires autorisés).</p>"
      },
      {
       "titre": "Tracer une isométrique à partir d'un relevé",
       "contenu": "\n<p>Sur un chantier de modification, le technicien doit souvent tracer lui-même l'isométrique d'une ligne existante ou à créer. La démarche est toujours la même.</p>\n<ol>\n<li>Choisir l'orientation : placer la flèche nord et fixer les trois axes du papier isométrique.</li>\n<li>Partir d'un point fixe connu (bride d'un équipement, piquage sur un collecteur) et noter son altitude.</li>\n<li>Suivre la ligne tronçon par tronçon en traçant chaque changement de direction : un tronçon vertical est tracé verticalement, un tronçon nord-sud selon l'axe nord-sud, etc.</li>\n<li>Placer les accessoires, organes et supports dans l'ordre de rencontre.</li>\n<li>Coter de point de changement de direction à point de changement de direction (cotes entre axes), jamais d'extrémité de tube à extrémité de tube.</li>\n<li>Vérifier les cotes cumulées : la somme des déplacements selon chaque axe doit correspondre aux coordonnées des points de départ et d'arrivée.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les grands projets produisent leurs isométriques automatiquement depuis la maquette numérique de l'usine, mais les modifications et réparations sur site s'appuient encore sur des isométriques tracées à la main à partir d'un relevé au mètre, au niveau et parfois au télémètre laser. Une isométrique d'origine fausse coûte des tronçons refaits ; le contrôle des cotes cumulées est donc systématique.</div>"
      },
      {
       "titre": "Le croquis coté de l'atelier",
       "contenu": "\n<p>Le <strong>croquis</strong> est un dessin à main levée, sans instrument, mais qui respecte les règles de représentation : vues en projection, traits normalisés, cotes complètes. En chaudronnerie, il sert à transmettre une modification, à relever un existant avant réhabilitation ou à expliquer un gabarit de montage.</p>\n<p>Un croquis exploitable doit :</p>\n<ul>\n<li>indiquer l'ouvrage, la date, l'auteur et l'unité des cotes ;</li>\n<li>donner le nombre minimal de vues permettant de comprendre la forme, avec une vue de détail pour les zones complexes ;</li>\n<li>porter des cotes fonctionnelles (entre axes, entre faces d'appui, altitudes), et les matériaux et épaisseurs ;</li>\n<li>signaler par une mention ce qui a été mesuré et ce qui est supposé.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un croquis n'est pas un brouillon. Il engage celui qui le signe : une cote fausse sur un relevé se retrouve dans des pièces fabriquées, transportées et non montables sur site.</div>"
      }
     ],
     "points_cles": [
      "Un dossier de chaudronnerie comporte plan d'ensemble, plans de détail, plans de soudage, isométriques et développés.",
      "Les plans de capacité utilisent une référence de hauteur unique et des orientations angulaires pour les tubulures.",
      "La NF EN ISO 2553 définit ligne fléchée, ligne de référence, ligne d'identification, symbole, cotes et queue.",
      "Symbole sur la ligne continue : soudure côté flèche ; sur la ligne interrompue : côté opposé.",
      "La gorge a et le côté z d'une soudure d'angle sont liés par z ≈ 1,41 × a.",
      "L'isométrique représente la tuyauterie en unifilaire sur trois axes à 120°, avec flèche nord et altitudes.",
      "Les cotes d'isométrique se prennent entre points de changement de direction et se vérifient par cumul.",
      "Un croquis de relevé engage son auteur et doit distinguer le mesuré du supposé."
     ],
     "lexique": [
      {
       "terme": "Ligne de tangence",
       "def": "Ligne de jonction entre la partie cylindrique et le fond d'une capacité, souvent prise comme référence des hauteurs."
      },
      {
       "terme": "Ligne de référence",
       "def": "Trait horizontal continu du symbole de soudure, sur lequel se placent symbole et cotes."
      },
      {
       "terme": "Ligne d'identification",
       "def": "Trait interrompu parallèle à la ligne de référence, indiquant le côté opposé à la flèche."
      },
      {
       "terme": "Épaisseur de gorge (a)",
       "def": "Hauteur du plus grand triangle isocèle inscrit dans la section d'une soudure d'angle."
      },
      {
       "terme": "Queue du symbole",
       "def": "Fourche en bout de ligne de référence portant le procédé, le niveau de qualité ou le mode opératoire."
      },
      {
       "terme": "Isométrique",
       "def": "Perspective à trois axes à 120° utilisée pour représenter les tuyauteries."
      },
      {
       "terme": "Unifilaire",
       "def": "Représentation d'un tube par un seul trait suivant son axe."
      },
      {
       "terme": "Classe de tuyauterie",
       "def": "Spécification qui fixe les matériaux, épaisseurs et accessoires autorisés pour un service donné."
      },
      {
       "terme": "Altitude (EL)",
       "def": "Cote verticale d'un point de tuyauterie par rapport au niveau de référence de l'installation."
      },
      {
       "terme": "Croquis",
       "def": "Dessin à main levée respectant les règles de représentation et coté de façon complète."
      }
     ]
    },
    {
     "id": "btci-tolerances-maquette-numerique",
     "titre": "Tolérances des constructions soudées et maquette numérique",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Appliquer les tolérances générales des constructions soudées (NF EN ISO 13920) à un plan non tolérancé.",
      "Interpréter une spécification géométrique (GPS) avec ses références sur une pièce chaudronnée.",
      "Établir une cotation fonctionnelle simple à partir d'une chaîne de cotes.",
      "Décrire la construction d'une pièce de tôlerie dans un modeleur volumique.",
      "Expliquer la chaîne numérique de la maquette à la machine de découpe ou de pliage."
     ],
     "sections": [
      {
       "titre": "Pourquoi des tolérances propres à la chaudronnerie",
       "contenu": "\n<p>Une pièce usinée peut être tenue au centième de millimètre ; un ensemble soudé de plusieurs mètres, non. Le soudage provoque des <strong>retraits</strong> et des <strong>déformations</strong>, le roulage et le pliage ont leur propre dispersion, et la tôle elle-même a des tolérances d'épaisseur et de planéité. Exiger partout des tolérances d'usinage rendrait la fabrication impossible ou ruineuse.</p>\n<p>Les plans de chaudronnerie portent donc deux types d'exigences :</p>\n<ul>\n<li>des <strong>tolérances individuelles</strong>, inscrites à côté des cotes ou dans des cadres de tolérance géométrique, uniquement là où la fonction l'exige (entraxe de brides, planéité d'une face d'appui, position d'une tubulure) ;</li>\n<li>des <strong>tolérances générales</strong>, qui s'appliquent à toutes les cotes sans tolérance individuelle, par une mention dans le cartouche.</li>\n</ul>\n<p>Pour les constructions soudées, la norme de référence est la <strong>NF EN ISO 13920</strong>. Elle définit des <strong>classes de tolérances</strong> pour les dimensions linéaires et angulaires (classes A, B, C, D, de la plus serrée à la plus large) et pour la rectitude, la planéité et le parallélisme (classes E, F, G, H). La mention dans le cartouche prend la forme « ISO 13920 – BF » : classe B pour les dimensions, classe F pour la forme.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour connaître la tolérance d'une cote non tolérancée sur un ensemble soudé, il faut lire la classe dans le cartouche puis chercher, dans le tableau de la norme, la ligne correspondant à la longueur nominale. La tolérance augmente avec la longueur.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les tolérances générales d'usinage (ISO 2768) ne s'appliquent pas aux dimensions d'ensembles soudés, et inversement. Un plan qui mélange pièces usinées et ensemble soudé indique en principe les deux références ; en cas d'absence, la question doit être posée.</div>"
      },
      {
       "titre": "Lire une spécification géométrique sur une pièce chaudronnée",
       "contenu": "\n<p>Le langage <strong>GPS</strong> (spécification géométrique des produits) permet de limiter la forme, l'orientation et la position des surfaces. Le niveau attendu en bac professionnel est la lecture des spécifications courantes : on identifie l'<strong>élément tolérancé</strong> (désigné par la flèche du cadre), la <strong>caractéristique</strong> (symbole), la <strong>valeur</strong> de la tolérance et, le cas échéant, la ou les <strong>références</strong> (lettres dans le cadre, renvoyant à des triangles posés sur des surfaces).</p>\n<table>\n<thead><tr><th>Caractéristique</th><th>Exemple en chaudronnerie</th><th>Ce que l'on vérifie</th></tr></thead>\n<tbody>\n<tr><td>Planéité</td><td>Face d'appui d'une semelle de support</td><td>La surface est comprise entre deux plans parallèles distants de t</td></tr>\n<tr><td>Rectitude</td><td>Axe d'un tube de garde-corps</td><td>L'axe reste dans un cylindre de diamètre t</td></tr>\n<tr><td>Perpendicularité</td><td>Face de bride par rapport à l'axe du corps</td><td>La face est comprise entre deux plans perpendiculaires à la référence, distants de t</td></tr>\n<tr><td>Parallélisme</td><td>Deux faces d'appui d'un berceau</td><td>Une face est comprise entre deux plans parallèles à l'autre</td></tr>\n<tr><td>Localisation</td><td>Position d'un trou de fixation ou d'une tubulure</td><td>L'axe réel reste dans une zone centrée sur sa position théorique exacte</td></tr>\n<tr><td>Coaxialité</td><td>Deux brides en vis-à-vis d'une manchette</td><td>Les axes restent dans un cylindre de diamètre t centré sur la référence</td></tr>\n</tbody>\n</table>\n<p>Les cotes encadrées sont des <strong>cotes théoriquement exactes</strong> : elles ne portent pas de tolérance propre, l'écart admis étant donné par la spécification de localisation qui s'y rapporte.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire le cadre « perpendicularité 0,5 A » pointé sur la face d'une bride, avec la référence A posée sur l'axe de la virole. 1) Élément tolérancé : la face de la bride. 2) Référence : l'axe de la virole, matérialisé au contrôle par exemple par deux points de centrage ou par un cylindre ajusté. 3) Zone de tolérance : deux plans parallèles distants de 0,5 mm, perpendiculaires à l'axe A. 4) Contrôle : poser un comparateur ou un niveau électronique sur la face, la référence étant mise en position, et relever l'écart maximal. 5) Conclure : conforme si l'écart total relevé est inférieur ou égal à 0,5 mm.</div>"
      },
      {
       "titre": "Cotation fonctionnelle et chaînes de cotes",
       "contenu": "\n<p>Une <strong>cote fonctionnelle</strong> est une cote qui intervient directement dans une condition de fonctionnement ou de montage. On la détermine en traçant une <strong>chaîne de cotes</strong> : on part d'une <strong>condition</strong> (jeu, dépassement, alignement) et on relie les surfaces de contact successives jusqu'à refermer la boucle.</p>\n<p>Exemple : un support de tuyauterie doit laisser un jeu J entre le patin du tube et la butée latérale pour permettre la dilatation. La condition est J mini = 2 mm, J maxi = 8 mm. Le jeu dépend de la largeur du patin (cote a) et de l'écartement intérieur des butées (cote b) : J = b − a.</p>\n<ul>\n<li>J maxi = b maxi − a mini ;</li>\n<li>J mini = b mini − a maxi.</li>\n</ul>\n<p>Si l'on fixe a = 100 ± 1 (patin découpé au plasma), alors b mini = J mini + a maxi = 2 + 101 = 103 mm et b maxi = J maxi + a mini = 8 + 99 = 107 mm. On cotera b = 105 ± 2, ce qui est compatible avec un montage soudé pointé au gabarit.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'intervalle de tolérance de la condition est égal à la somme des intervalles de tolérance des cotes de la chaîne. Plus la chaîne est longue, plus chaque cote doit être serrée : on cherche donc la chaîne la plus courte possible, en cotant directement entre surfaces fonctionnelles.</div>"
      },
      {
       "titre": "Le modeleur volumique en chaudronnerie",
       "contenu": "\n<p>Le <strong>modeleur volumique</strong> (logiciel de conception assistée par ordinateur en trois dimensions) construit une <strong>maquette numérique</strong> de l'ouvrage, à partir de laquelle on obtient automatiquement les plans, les nomenclatures, les développés et les fichiers machine. La plupart des modeleurs disposent de modules dédiés à la tôlerie, à la mécanosoudure et à la tuyauterie.</p>\n<p>Une pièce de tôlerie se construit à partir d'une <strong>esquisse</strong> (profil plan coté et contraint) puis de <strong>fonctions</strong> : tôle de base, bord tombé, pli, découpe, emboutissage local, ajout d'une patte. Le logiciel mémorise les <strong>paramètres de pliage</strong> (rayon intérieur, épaisseur, coefficient de position de la fibre neutre ou table de pliage de l'entreprise) et peut à tout moment <strong>déplier</strong> la pièce pour donner son développé.</p>\n<table>\n<thead><tr><th>Module</th><th>Ce qu'il produit</th><th>Point de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Tôlerie</td><td>Pièces pliées, développés, lignes de pli</td><td>Table de pliage conforme aux outils réels de l'atelier</td></tr>\n<tr><td>Mécanosoudure</td><td>Structures en profilés, liste de débit avec coupes d'onglet</td><td>Traitement des extrémités (coupe droite, onglet, grugeage)</td></tr>\n<tr><td>Tuyauterie</td><td>Lignes à partir d'un tracé, isométriques, listes de matériel</td><td>Bibliothèque d'accessoires conforme à la classe de tuyauterie</td></tr>\n<tr><td>Assemblage</td><td>Position relative des pièces, détection des collisions</td><td>Contraintes d'assemblage cohérentes avec la fabrication réelle</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un développé calculé par le logiciel n'est juste que si les paramètres de pliage correspondent à la matière, à l'outillage et à la machine réellement utilisés. Une table de pliage générique peut donner plusieurs dixièmes de millimètre d'écart par pli, qui se cumulent sur une pièce à quatre ou cinq plis.</div>"
      },
      {
       "titre": "La chaîne numérique jusqu'à la machine",
       "contenu": "\n<p>La <strong>chaîne numérique</strong> désigne la suite de traitements informatiques qui transforme la maquette en instructions pour les machines, sans ressaisie manuelle.</p>\n<ol>\n<li><strong>Maquette 3D</strong> validée par le bureau d'études, avec indice de révision.</li>\n<li><strong>Extraction des développés</strong> au format d'échange 2D (DXF le plus souvent), une pièce par fichier, avec quantité, matière et épaisseur.</li>\n<li><strong>Imbrication</strong> (ou mise en tôle) dans un logiciel de FAO qui place les pièces sur un format de tôle, choisit les points d'amorçage, l'ordre de découpe et les attaches éventuelles.</li>\n<li><strong>Post-processeur</strong> : traduction du parcours en programme compréhensible par la commande numérique de la machine (laser, plasma, oxycoupage, poinçonneuse).</li>\n<li><strong>Programme de pliage</strong> : pour la presse plieuse, le logiciel calcule l'ordre des plis, la position des butées arrière et vérifie les collisions entre la pièce, les outils et le bâti.</li>\n</ol>\n<p>Le technicien intervient à chaque étape : il vérifie l'indice du fichier, contrôle la cohérence entre développé et plan, valide la mise en tôle (taux d'utilisation, sens de laminage si imposé), et réalise la première pièce qu'il contrôle avant de lancer la série.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une erreur de version de fichier est l'une des causes de non-conformité les plus coûteuses : toute la série est découpée sur un développé périmé. Les entreprises imposent pour cela une gestion des indices de révision et l'archivage des programmes avec la référence du plan dont ils sont issus.</div>"
      }
     ],
     "points_cles": [
      "Les ensembles soudés ont leurs propres tolérances générales : NF EN ISO 13920, classes A à D (dimensions) et E à H (forme).",
      "La mention de classe se lit dans le cartouche, la valeur dans le tableau de la norme selon la longueur nominale.",
      "Une spécification GPS se lit : élément tolérancé, caractéristique, valeur, références.",
      "Les cotes encadrées sont théoriquement exactes ; leur écart admis est porté par la spécification de position.",
      "L'intervalle de tolérance d'une condition est la somme des intervalles des cotes de sa chaîne.",
      "Le modeleur volumique produit plans, nomenclatures, développés et listes de débit à partir d'une maquette unique.",
      "Un développé n'est fiable que si la table de pliage correspond à l'outillage réel.",
      "La chaîne numérique va de la maquette au programme machine via DXF, imbrication et post-processeur."
     ],
     "lexique": [
      {
       "terme": "Tolérance générale",
       "def": "Tolérance applicable à toutes les cotes sans tolérance individuelle, définie par une norme citée dans le cartouche."
      },
      {
       "terme": "NF EN ISO 13920",
       "def": "Norme des tolérances générales pour les constructions soudées."
      },
      {
       "terme": "GPS",
       "def": "Spécification géométrique des produits : langage normalisé de tolérancement de forme, orientation et position."
      },
      {
       "terme": "Référence spécifiée",
       "def": "Élément géométrique (plan, axe) servant de base à une tolérance d'orientation ou de position."
      },
      {
       "terme": "Cote théoriquement exacte",
       "def": "Cote encadrée, sans tolérance propre, qui définit la position théorique d'un élément."
      },
      {
       "terme": "Chaîne de cotes",
       "def": "Suite de cotes reliant les surfaces qui interviennent dans une condition de fonctionnement."
      },
      {
       "terme": "Maquette numérique",
       "def": "Modèle 3D complet d'un ouvrage dont sont extraits plans, nomenclatures et fichiers de fabrication."
      },
      {
       "terme": "Imbrication",
       "def": "Placement optimisé des pièces à découper sur un format de tôle."
      },
      {
       "terme": "Post-processeur",
       "def": "Programme qui traduit un parcours d'outil en code propre à une commande numérique donnée."
      },
      {
       "terme": "DXF",
       "def": "Format de fichier d'échange de dessins 2D couramment utilisé pour transmettre les développés."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Matériaux et mécanique appliquée",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btci-materiaux-produits-apport",
     "titre": "Matériaux, produits d'apport et gaz de la chaudronnerie",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Identifier les aciers, aciers inoxydables et alliages d'aluminium courants en chaudronnerie à partir de leur désignation.",
      "Exploiter les caractéristiques mécaniques d'un matériau : Re, Rm, allongement, résilience.",
      "Apprécier la soudabilité d'un acier à l'aide du carbone équivalent.",
      "Reconnaître les principales formes de corrosion et les précautions de fabrication associées.",
      "Choisir un produit d'apport et un gaz de protection à partir de leur désignation normalisée.",
      "Lire un certificat de réception matière selon la NF EN 10204."
     ],
     "sections": [
      {
       "titre": "Les aciers de construction et les aciers pour appareils à pression",
       "contenu": "\n<p>La désignation symbolique des aciers (NF EN 10027-1) commence par une lettre qui indique l'<strong>usage</strong>, suivie de la <strong>limite d'élasticité minimale</strong> en MPa pour la plus faible épaisseur, puis de symboles complémentaires.</p>\n<table>\n<thead><tr><th>Désignation</th><th>Signification</th><th>Usage typique</th></tr></thead>\n<tbody>\n<tr><td>S235JR</td><td>Acier de construction, Re ≥ 235 MPa, énergie de rupture 27 J à + 20 °C</td><td>Supports, structures légères, tôlerie</td></tr>\n<tr><td>S355J2</td><td>Acier de construction, Re ≥ 355 MPa, 27 J à − 20 °C</td><td>Charpentes, châssis sollicités, ouvrages extérieurs</td></tr>\n<tr><td>P265GH</td><td>Acier pour appareils à pression (P), Re ≥ 265 MPa, caractéristiques garanties à haute température (GH)</td><td>Viroles et fonds de chaudières, ballons, échangeurs</td></tr>\n<tr><td>P355NL1</td><td>Acier pour appareils à pression, normalisé (N), garanti à basse température (L1)</td><td>Réservoirs de gaz liquéfiés, service froid</td></tr>\n<tr><td>P235GH</td><td>Acier pour appareils à pression, Re ≥ 235 MPa</td><td>Tubes de chaudières et de tuyauteries vapeur</td></tr>\n</tbody>\n</table>\n<p>Les aciers de construction relèvent de la NF EN 10025, les tôles pour appareils à pression de la NF EN 10028 et les tubes de la NF EN 10216 (sans soudure) ou NF EN 10217 (soudés). Pour un équipement sous pression, l'emploi d'un acier « P » avec certificat de réception est la règle.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la limite d'élasticité <strong>Re</strong> (ou R<sub>p0,2</sub> quand le palier n'est pas net) sert au dimensionnement ; la résistance à la traction <strong>Rm</strong> sert aux calculs de rupture et de force de formage ; l'<strong>allongement A %</strong> renseigne sur l'aptitude au formage ; l'<strong>énergie de rupture KV</strong> (essai de résilience) renseigne sur le risque de rupture fragile à basse température.</div>"
      },
      {
       "titre": "Les aciers inoxydables et l'aluminium",
       "contenu": "\n<p>Un acier est dit <strong>inoxydable</strong> lorsqu'il contient au moins 10,5 % de chrome ; il se forme alors en surface une <strong>couche passive</strong> d'oxyde de chrome, invisible et auto-régénérante, qui le protège. On le désigne soit par sa composition (X2CrNi18-9 : acier allié, 0,02 % de carbone, 18 % de chrome, 9 % de nickel), soit par un numéro (1.4307), soit encore, dans l'usage courant, par l'appellation américaine (304L).</p>\n<table>\n<thead><tr><th>Désignation</th><th>Numéro</th><th>Appellation usuelle</th><th>Caractéristiques</th></tr></thead>\n<tbody>\n<tr><td>X5CrNi18-10</td><td>1.4301</td><td>304</td><td>Austénitique courant, bonne formabilité</td></tr>\n<tr><td>X2CrNi18-9</td><td>1.4307</td><td>304L</td><td>Bas carbone, limite la sensibilisation au soudage</td></tr>\n<tr><td>X2CrNiMo17-12-2</td><td>1.4404</td><td>316L</td><td>Avec molybdène : meilleure tenue aux chlorures</td></tr>\n<tr><td>X6Cr17</td><td>1.4016</td><td>430</td><td>Ferritique, magnétique, moins cher, soudabilité limitée</td></tr>\n</tbody>\n</table>\n<p>Les aciers austénitiques ne sont pas magnétiques à l'état recuit, se dilatent environ 1,5 fois plus que l'acier non allié et conduisent moins bien la chaleur : ils se déforment davantage au soudage.</p>\n<p>Les <strong>alliages d'aluminium</strong> corroyés sont désignés par la NF EN 573 (EN AW- suivi de quatre chiffres). Les plus utilisés en chaudronnerie sont la série 1000 (aluminium quasi pur, 1050), la série 5000 (aluminium-magnésium, 5754 et 5083, très bonne tenue en milieu marin et bonne soudabilité) et la série 6000 (aluminium-magnésium-silicium, 6060 et 6082, pour les profilés). L'aluminium est trois fois plus léger que l'acier (masse volumique 2,7 contre 7,85 kg/dm<sup>3</sup>), mais sa limite d'élasticité chute dans la zone soudée des alliages durcis.</p>"
      },
      {
       "titre": "La soudabilité et le carbone équivalent",
       "contenu": "\n<p>La <strong>soudabilité</strong> est l'aptitude d'un matériau à être assemblé par soudage en donnant une liaison saine et des propriétés compatibles avec le service. Pour les aciers non alliés et faiblement alliés, le principal danger est la <strong>fissuration à froid</strong> : la zone chauffée puis refroidie rapidement peut devenir dure et fragile, et l'hydrogène apporté par l'humidité des produits d'apport y provoque des fissures, parfois plusieurs heures après le soudage.</p>\n<p>On évalue ce risque par le <strong>carbone équivalent</strong>, formule de l'Institut international de la soudure :</p>\n<p><strong>CE = C + Mn/6 + (Cr + Mo + V)/5 + (Ni + Cu)/15</strong> (teneurs en %)</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un certificat matière donne C = 0,16 %, Mn = 1,20 %, Cr = 0,10 %, Mo = 0,02 %, V = 0,01 %, Ni = 0,15 %, Cu = 0,20 %. 1) Mn/6 = 0,200. 2) (Cr + Mo + V)/5 = 0,13/5 = 0,026. 3) (Ni + Cu)/15 = 0,35/15 = 0,023. 4) CE = 0,16 + 0,200 + 0,026 + 0,023 = 0,409, soit environ 0,41 %. 5) Interprétation : à partir d'environ 0,40 à 0,45 %, et d'autant plus que l'épaisseur est forte, il faut envisager un préchauffage et des produits d'apport à bas hydrogène. La température de préchauffage exacte est donnée par le mode opératoire de soudage, établi à partir de la norme NF EN 1011-2 ; elle ne se décide pas à l'atelier.</div>\n<p>Pour les aciers inoxydables austénitiques, le risque est différent : précipitation de carbures de chrome si la pièce reste longtemps vers 500 à 800 °C (d'où l'intérêt des nuances « L » à bas carbone), et fissuration à chaud si le métal fondu ne contient pas un peu de ferrite, que les produits d'apport adaptés garantissent.</p>"
      },
      {
       "titre": "La corrosion et ses conséquences en fabrication",
       "contenu": "\n<table>\n<thead><tr><th>Forme de corrosion</th><th>Mécanisme</th><th>Prévention en fabrication</th></tr></thead>\n<tbody>\n<tr><td>Corrosion généralisée</td><td>Attaque uniforme de la surface (rouille de l'acier non allié)</td><td>Surépaisseur de corrosion au calcul, revêtement, choix d'un matériau adapté</td></tr>\n<tr><td>Corrosion galvanique</td><td>Deux métaux différents en contact dans un électrolyte : le moins noble se corrode</td><td>Éviter les contacts acier/inox ou acier/aluminium, interposer un isolant</td></tr>\n<tr><td>Corrosion par piqûres</td><td>Attaque locale de la couche passive des inox, favorisée par les chlorures</td><td>Choisir 316L en milieu chloré, éviter les dépôts</td></tr>\n<tr><td>Corrosion caverneuse</td><td>Attaque dans un interstice où le milieu stagne</td><td>Éviter les recouvrements non soudés, souder les deux côtés</td></tr>\n<tr><td>Corrosion intergranulaire</td><td>Appauvrissement en chrome le long des joints de grains après échauffement</td><td>Nuances à bas carbone, maîtrise de l'énergie de soudage</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une particule d'acier non allié incrustée dans un inox (meule, brosse ou table de travail contaminée) rouille et amorce une piqûre. On réserve donc à l'inox des outils, brosses en inox, disques et zones de stockage dédiés. Après soudage, les colorations (oxydes) doivent être éliminées par décapage chimique ou mécanique puis la surface repassivée.</div>"
      },
      {
       "titre": "Produits d'apport, gaz et flux",
       "contenu": "\n<p>Le <strong>produit d'apport</strong> doit donner un métal fondu de caractéristiques au moins égales à celles du métal de base et compatible chimiquement avec lui. Sa désignation normalisée renseigne sur ses propriétés.</p>\n<table>\n<thead><tr><th>Exemple de désignation</th><th>Lecture</th></tr></thead>\n<tbody>\n<tr><td>ISO 2560-A – E 42 3 B 32 H5</td><td>Électrode enrobée (E), Re du métal fondu ≥ 420 MPa, 47 J à − 30 °C (3), enrobage basique (B), rendement, type de courant et positions de soudage (32), hydrogène diffusible ≤ 5 ml/100 g (H5)</td></tr>\n<tr><td>ISO 14341-A – G 42 4 M21 3Si1</td><td>Fil plein pour soudage sous gaz (G), Re ≥ 420 MPa, 47 J à − 40 °C, qualifié avec le gaz M21, composition 3Si1</td></tr>\n<tr><td>ISO 14343-A – G 19 12 3 L Si</td><td>Fil pour inox type 316LSi : 19 % Cr, 12 % Ni, 3 % Mo, bas carbone, silicium élevé</td></tr>\n<tr><td>ISO 18273 – S Al 5356</td><td>Fil ou baguette aluminium-magnésium 5 %, pour les alliages des séries 5000 et 6000</td></tr>\n</tbody>\n</table>\n<p>Les <strong>gaz de protection</strong> sont désignés selon la NF EN ISO 14175 : I1 (argon pur, pour le TIG et le MIG de l'aluminium), M21 (argon + 15 à 25 % de CO<sub>2</sub>, le plus courant en MAG sur acier), M12 (argon + 0,5 à 5 % de CO<sub>2</sub>, MAG sur inox), C1 (CO<sub>2</sub> pur). Le soudage à l'arc submergé utilise un <strong>flux</strong> en poudre qui protège le bain et forme un laitier.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les électrodes basiques sont stockées en étuve et, si le fabricant ou le mode opératoire l'exigent, re-étuvées avant usage puis gardées en carquois chauffant. Les entreprises tiennent un registre des étuvages : c'est une exigence de traçabilité pour les ouvrages soumis à un code de construction.</div>"
      },
      {
       "titre": "Le certificat de réception matière",
       "contenu": "\n<p>Le <strong>certificat de réception</strong> (souvent appelé « certificat matière ») atteste des caractéristiques du lot livré. La NF EN 10204 en définit plusieurs types :</p>\n<ul>\n<li><strong>2.1</strong> : déclaration de conformité à la commande, sans résultat d'essai ;</li>\n<li><strong>2.2</strong> : rapport d'essai avec résultats d'essais non spécifiques (contrôles de production habituels) ;</li>\n<li><strong>3.1</strong> : résultats d'essais spécifiques sur le lot livré, validés par un représentant du contrôle du producteur indépendant de la fabrication ;</li>\n<li><strong>3.2</strong> : comme le 3.1, mais validé en plus par un représentant de l'acheteur ou un organisme tiers.</li>\n</ul>\n<p>Le 3.1 est le niveau couramment exigé pour les équipements sous pression. Il indique la nuance, la norme, le numéro de coulée, les dimensions, l'analyse chimique et les résultats des essais mécaniques.</p>\n<p>La <strong>traçabilité</strong> impose de reporter le numéro de coulée (ou un repère qui y renvoie) sur chaque pièce découpée, avant découpe, par marquage indélébile ou poinçonnage à faible contrainte. Une chute réutilisée sans marquage devient une pièce d'origine inconnue, inutilisable sur un appareil soumis à un code.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> lire un certificat, c'est vérifier quatre choses : la nuance et la norme correspondent à la commande, les dimensions et le numéro de coulée correspondent au produit reçu, les résultats chimiques et mécaniques respectent les minimums de la norme, et le type de certificat est celui exigé.</div>"
      }
     ],
     "points_cles": [
      "La désignation symbolique indique l'usage (S, P…) et la limite d'élasticité minimale en MPa.",
      "Les tôles d'appareils à pression relèvent de la NF EN 10028 ; les aciers de construction de la NF EN 10025.",
      "Un inox contient au moins 10,5 % de chrome ; 304L et 316L sont les nuances austénitiques les plus courantes.",
      "Le carbone équivalent estime le risque de fissuration à froid ; vers 0,40 à 0,45 % un préchauffage s'envisage.",
      "La contamination de l'inox par de l'acier non allié provoque des piqûres : outillage dédié obligatoire.",
      "Les désignations de produits d'apport donnent résistance, résilience, composition, gaz et teneur en hydrogène.",
      "M21 est le gaz courant du MAG sur acier ; l'argon I1 sert au TIG et à l'aluminium.",
      "Le certificat 3.1 de la NF EN 10204 est le niveau usuel pour les équipements sous pression.",
      "Le numéro de coulée doit être reporté sur chaque pièce avant découpe pour garantir la traçabilité."
     ],
     "lexique": [
      {
       "terme": "Limite d'élasticité (Re)",
       "def": "Contrainte au-delà de laquelle le matériau se déforme de façon permanente."
      },
      {
       "terme": "Résistance à la traction (Rm)",
       "def": "Contrainte maximale supportée lors d'un essai de traction."
      },
      {
       "terme": "Énergie de rupture (KV)",
       "def": "Énergie absorbée lors de l'essai de flexion par choc sur éprouvette entaillée, en joules."
      },
      {
       "terme": "Soudabilité",
       "def": "Aptitude d'un matériau à donner, par soudage, un assemblage sain et adapté au service."
      },
      {
       "terme": "Carbone équivalent (CE)",
       "def": "Indice calculé à partir de la composition chimique qui estime la trempabilité et le risque de fissuration à froid."
      },
      {
       "terme": "Couche passive",
       "def": "Film d'oxyde de chrome très mince qui protège naturellement un acier inoxydable."
      },
      {
       "terme": "Corrosion galvanique",
       "def": "Corrosion du métal le moins noble de deux métaux en contact dans un électrolyte."
      },
      {
       "terme": "Hydrogène diffusible",
       "def": "Hydrogène introduit dans le métal fondu, responsable de fissurations à froid."
      },
      {
       "terme": "Numéro de coulée",
       "def": "Identifiant du lot de fabrication de l'acier, reporté sur le certificat et sur les pièces."
      },
      {
       "terme": "Certificat 3.1",
       "def": "Document de contrôle avec résultats d'essais spécifiques validés par un service indépendant de la production."
      }
     ]
    },
    {
     "id": "btci-statique-rdm",
     "titre": "Statique et résistance des matériaux appliquées aux ouvrages",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Modéliser les actions mécaniques qui s'exercent sur un support, une console ou une poutre.",
      "Appliquer le principe fondamental de la statique à un système soumis à des forces coplanaires.",
      "Déterminer la position du centre de gravité d'un ensemble pour préparer une manutention.",
      "Vérifier une pièce en traction, compression ou cisaillement à l'aide d'un coefficient de sécurité.",
      "Calculer le moment fléchissant maximal et la contrainte de flexion d'une poutre simple."
     ],
     "sections": [
      {
       "titre": "Modéliser les actions mécaniques",
       "contenu": "\n<p>Une <strong>action mécanique</strong> est toute cause capable de déplacer ou de déformer un objet : le poids d'une capacité pleine, la poussée d'une tuyauterie qui se dilate, la réaction d'un appui, la pression d'un fluide. On la modélise par une <strong>force</strong>, caractérisée par son point d'application, sa direction, son sens et son intensité en newtons (N).</p>\n<ul>\n<li>Le <strong>poids</strong> d'un objet de masse m vaut P = m × g, avec g ≈ 9,81 m/s<sup>2</sup>. Une cuve de 2 000 kg pèse donc environ 19 600 N, soit 19,6 kN.</li>\n<li>Une <strong>pression</strong> p agissant sur une surface S produit une force F = p × S. Avec p en pascals (1 bar = 10<sup>5</sup> Pa = 0,1 MPa) et S en m<sup>2</sup>, F est en newtons. En pratique on utilise souvent MPa et mm<sup>2</sup> : 1 MPa × 1 mm<sup>2</sup> = 1 N.</li>\n<li>Les <strong>liaisons</strong> (appuis, articulations, encastrements) exercent des actions de réaction dont on connaît la direction pour les cas simples : un appui simple sans frottement donne une réaction perpendiculaire à la surface de contact ; une articulation donne une réaction passant par l'axe, de direction inconnue a priori.</li>\n</ul>\n<p>Le <strong>moment</strong> d'une force F par rapport à un point A mesure son effet de rotation : M<sub>A</sub> = F × d, où d est la distance de A à la droite d'action de la force (le « bras de levier »). Il s'exprime en N·m et porte un signe selon le sens de rotation choisi.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un fond de 1 000 mm de diamètre soumis à 10 bar, la force totale vaut 1 MPa × π × 500<sup>2</sup> ≈ 785 000 N, soit l'équivalent du poids de 80 tonnes. La pression, même modérée, produit des efforts considérables : c'est pourquoi les appareils à pression obéissent à des règles de calcul strictes.</div>"
      },
      {
       "titre": "Le principe fondamental de la statique",
       "contenu": "\n<p>Un solide en équilibre est soumis à des actions dont la somme des forces est nulle et dont la somme des moments, par rapport à n'importe quel point, est nulle. Dans le plan, cela donne trois équations :</p>\n<ul>\n<li>somme des composantes horizontales = 0 ;</li>\n<li>somme des composantes verticales = 0 ;</li>\n<li>somme des moments par rapport à un point choisi = 0.</li>\n</ul>\n<p>On choisit habituellement le point de calcul des moments là où passent les forces inconnues, pour les faire disparaître de l'équation.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une console murale soutient une tuyauterie qui exerce une charge verticale F = 4 000 N à 600 mm du mur. La console est fixée au mur par une articulation A en bas et un tirant horizontal B en haut, 400 mm au-dessus de A. 1) Isoler la console et faire le bilan : F connue ; en B une force horizontale inconnue (le tirant ne travaille que dans son axe) ; en A une force de composantes A<sub>x</sub> et A<sub>y</sub> inconnues. 2) Moments en A : la force en B a un bras de levier de 0,4 m, la charge F un bras de 0,6 m ; B × 0,4 = 4 000 × 0,6, d'où B = 6 000 N. 3) Somme horizontale : A<sub>x</sub> = 6 000 N (sens opposé à B). 4) Somme verticale : A<sub>y</sub> = 4 000 N. 5) Résultante en A : √(6 000<sup>2</sup> + 4 000<sup>2</sup>) ≈ 7 211 N. 6) Conclusion : la fixation du tirant doit reprendre 6 kN en traction et l'articulation environ 7,2 kN ; ces valeurs servent ensuite à choisir chevilles, boulons et soudures.</div>\n<p>Les logiciels de simulation intégrés aux modeleurs font ces calculs pour des structures plus complexes, mais le résultat d'un logiciel doit toujours être confronté à un ordre de grandeur obtenu à la main.</p>"
      },
      {
       "titre": "Le centre de gravité d'un ensemble",
       "contenu": "\n<p>Le <strong>centre de gravité</strong> G est le point d'application du poids. Pour un ensemble composé de plusieurs éléments de masses m<sub>i</sub> et de centres de gravité de coordonnée x<sub>i</sub>, la coordonnée de G vaut :</p>\n<p><strong>x<sub>G</sub> = (m<sub>1</sub>·x<sub>1</sub> + m<sub>2</sub>·x<sub>2</sub> + …) / (m<sub>1</sub> + m<sub>2</sub> + …)</strong></p>\n<p>On fait le même calcul pour chaque direction. En chaudronnerie, connaître G permet de placer les points d'élingage pour que la charge reste horizontale au levage, de choisir la position des pieds et de vérifier la stabilité au basculement d'un ensemble posé.</p>\n<table>\n<thead><tr><th>Élément d'un réservoir horizontal</th><th>Masse (kg)</th><th>Position de G le long de l'axe (mm)</th><th>m × x (kg·mm)</th></tr></thead>\n<tbody>\n<tr><td>Virole</td><td>800</td><td>2 000</td><td>1 600 000</td></tr>\n<tr><td>Fond gauche</td><td>150</td><td>− 150</td><td>− 22 500</td></tr>\n<tr><td>Fond droit</td><td>150</td><td>4 150</td><td>622 500</td></tr>\n<tr><td>Trou d'homme et tampon</td><td>120</td><td>3 500</td><td>420 000</td></tr>\n<tr><td>Total</td><td>1 220</td><td></td><td>2 620 000</td></tr>\n</tbody>\n</table>\n<p>x<sub>G</sub> = 2 620 000 / 1 220 ≈ 2 148 mm : le centre de gravité est décalé d'environ 150 mm vers le trou d'homme par rapport au milieu de la virole. Les élingues devront être placées symétriquement par rapport à cette position, et non par rapport au milieu géométrique.</p>"
      },
      {
       "titre": "Contraintes de traction, de compression et de cisaillement",
       "contenu": "\n<p>Une pièce chargée se déforme et sa matière subit des <strong>contraintes</strong>, exprimées en MPa (N/mm<sup>2</sup>). Pour les cas simples :</p>\n<ul>\n<li><strong>Traction ou compression</strong> : σ = N / S, avec N l'effort normal (dans l'axe) et S la section droite.</li>\n<li><strong>Cisaillement</strong> : τ = T / S, avec T l'effort tranchant et S la section cisaillée (par exemple la section d'un boulon, ou la gorge d'un cordon de soudure multipliée par sa longueur, dans une approche simplifiée).</li>\n</ul>\n<p>La pièce est jugée résistante si la contrainte reste inférieure à la <strong>résistance pratique</strong> : R<sub>pe</sub> = Re / s, où s est le <strong>coefficient de sécurité</strong>, choisi selon la connaissance des charges et les règles applicables (souvent entre 1,5 et 3 en construction mécanique). Pour le cisaillement, on admet couramment une résistance pratique R<sub>pg</sub> de l'ordre de 0,5 à 0,6 × R<sub>pe</sub> pour les aciers.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier le tirant de la console précédente, un rond plein de diamètre 12 mm en S235JR, avec s = 2. 1) Section : S = π × 12<sup>2</sup> / 4 ≈ 113 mm<sup>2</sup>. 2) Contrainte : σ = 6 000 / 113 ≈ 53 MPa. 3) Résistance pratique : R<sub>pe</sub> = 235 / 2 = 117,5 MPa. 4) Conclusion : 53 &lt; 117,5, le tirant résiste ; il est même largement dimensionné, ce qui laisse une marge pour la corrosion ou une surcharge accidentelle. 5) Il reste à vérifier les pièces d'attache (axe, soudures, chevilles), souvent plus faibles que le tirant lui-même.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une chaîne de pièces n'est jamais plus résistante que son maillon le plus faible. Un tirant surdimensionné fixé par une soudure trop faible ou une cheville inadaptée ne sert à rien : la vérification porte sur chaque élément du cheminement de l'effort.</div>"
      },
      {
       "titre": "La flexion des poutres",
       "contenu": "\n<p>Une poutre sollicitée perpendiculairement à son axe fléchit : les fibres d'un côté sont tendues, celles de l'autre comprimées, et la fibre médiane (fibre neutre) ne change pas de longueur. La grandeur qui gouverne la flexion est le <strong>moment fléchissant</strong> M<sub>f</sub>, maximal en un point de la poutre qu'il faut identifier.</p>\n<table>\n<thead><tr><th>Cas de charge</th><th>Moment fléchissant maximal</th><th>Position</th></tr></thead>\n<tbody>\n<tr><td>Poutre sur deux appuis, charge F au milieu, portée L</td><td>F × L / 4</td><td>Au milieu</td></tr>\n<tr><td>Poutre sur deux appuis, charge répartie q (N/mm) sur toute la portée</td><td>q × L<sup>2</sup> / 8</td><td>Au milieu</td></tr>\n<tr><td>Poutre encastrée (console), charge F à l'extrémité, longueur L</td><td>F × L</td><td>À l'encastrement</td></tr>\n</tbody>\n</table>\n<p>La contrainte maximale de flexion vaut σ = M<sub>f</sub> / (I/v), où I/v est le <strong>module de flexion</strong> de la section (en mm<sup>3</sup>), donné dans les catalogues de profilés (souvent noté W<sub>el</sub>). Plus la matière est éloignée de la fibre neutre, plus I/v est grand : c'est pourquoi les poutres IPE ou HEA et les tubes rectangulaires sont si efficaces en flexion.</p>\n<p>Exemple : un profilé IPE 100 (I/v ≈ 34,2 × 10<sup>3</sup> mm<sup>3</sup>) de 2 m de portée supporte en son milieu une charge de 5 000 N. M<sub>f</sub> = 5 000 × 2 000 / 4 = 2,5 × 10<sup>6</sup> N·mm ; σ = 2,5 × 10<sup>6</sup> / 34 200 ≈ 73 MPa, inférieure à 235/2, la poutre convient en résistance. Il faut aussi vérifier la <strong>flèche</strong> (déplacement vertical) si l'ouvrage porte une tuyauterie qui ne doit pas se déformer.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le technicien n'a pas à dimensionner les structures soumises à des règles de calcul (Eurocodes, codes de construction) : c'est le rôle du bureau d'études. Il doit en revanche savoir vérifier un support simple, détecter une modification qui change le cheminement des efforts et alerter avant d'exécuter.</div>"
      }
     ],
     "points_cles": [
      "Une action mécanique se modélise par une force : point d'application, direction, sens, intensité en N.",
      "Une pression produit une force F = p × S ; 1 MPa agissant sur 1 mm² donne 1 N.",
      "Le principe fondamental de la statique donne trois équations dans le plan : deux de forces, une de moments.",
      "On calcule les moments au point où passent les inconnues pour les éliminer.",
      "Le centre de gravité d'un ensemble est la moyenne des positions pondérée par les masses ; il guide l'élingage.",
      "En traction-compression σ = N/S ; en cisaillement τ = T/S ; la condition est σ ≤ Re/s.",
      "En flexion σ = Mf/(I/v) ; Mf vaut FL/4, qL²/8 ou FL selon le cas de charge.",
      "La vérification porte sur chaque maillon du cheminement de l'effort, attaches et soudures comprises."
     ],
     "lexique": [
      {
       "terme": "Action mécanique",
       "def": "Cause capable de mettre en mouvement ou de déformer un solide, modélisée par une force ou un moment."
      },
      {
       "terme": "Moment d'une force",
       "def": "Produit de l'intensité d'une force par la distance de sa droite d'action au point considéré."
      },
      {
       "terme": "Principe fondamental de la statique",
       "def": "Un solide en équilibre a une somme des forces nulle et une somme des moments nulle."
      },
      {
       "terme": "Centre de gravité",
       "def": "Point d'application du poids d'un solide ou d'un ensemble."
      },
      {
       "terme": "Contrainte",
       "def": "Effort intérieur rapporté à une surface, exprimé en MPa."
      },
      {
       "terme": "Coefficient de sécurité",
       "def": "Nombre par lequel on divise la limite d'élasticité pour obtenir la résistance pratique admise."
      },
      {
       "terme": "Effort tranchant",
       "def": "Composante de l'effort intérieur perpendiculaire à l'axe de la pièce, qui provoque le cisaillement."
      },
      {
       "terme": "Moment fléchissant",
       "def": "Moment intérieur qui provoque la flexion d'une poutre."
      },
      {
       "terme": "Module de flexion (I/v)",
       "def": "Caractéristique géométrique d'une section qui mesure sa résistance à la flexion."
      },
      {
       "terme": "Flèche",
       "def": "Déplacement transversal d'une poutre sous l'effet de la flexion."
      }
     ]
    },
    {
     "id": "btci-appareils-pression",
     "titre": "Les équipements sous pression : réglementation et calcul d'une virole",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Définir pression de service, pression maximale admissible et pression d'épreuve.",
      "Situer un équipement dans le cadre de la directive européenne des équipements sous pression.",
      "Expliquer le rôle d'un code de construction comme le CODAP.",
      "Calculer l'épaisseur minimale d'une virole cylindrique soumise à une pression intérieure puis son épaisseur de commande.",
      "Décrire le déroulement et les règles de sécurité d'une épreuve hydraulique."
     ],
     "sections": [
      {
       "titre": "Les grandeurs de pression et de température",
       "contenu": "\n<p>Un <strong>équipement sous pression</strong> (ESP) est un récipient, une tuyauterie, un accessoire de sécurité ou un accessoire sous pression conçu pour contenir un fluide à une pression supérieure à la pression atmosphérique. Plusieurs grandeurs, à ne pas confondre, figurent sur ses documents.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Symbole</th><th>Définition</th></tr></thead>\n<tbody>\n<tr><td>Pression maximale admissible</td><td>PS</td><td>Pression maximale pour laquelle l'équipement est conçu, fixée par le fabricant ; elle figure sur la plaque</td></tr>\n<tr><td>Température maximale ou minimale admissible</td><td>TS</td><td>Températures extrêmes pour lesquelles l'équipement est conçu</td></tr>\n<tr><td>Pression de service</td><td>—</td><td>Pression habituelle de fonctionnement, inférieure à PS</td></tr>\n<tr><td>Pression de calcul</td><td>P ou P<sub>d</sub></td><td>Pression retenue pour le calcul des épaisseurs, au moins égale à PS</td></tr>\n<tr><td>Pression d'épreuve</td><td>P<sub>T</sub></td><td>Pression appliquée lors de l'épreuve hydraulique, supérieure à PS</td></tr>\n<tr><td>Volume</td><td>V</td><td>Volume intérieur en litres</td></tr>\n</tbody>\n</table>\n<p>Les pressions sont exprimées en <strong>bar relatif</strong> (au-dessus de la pression atmosphérique) sur les plaques et documents réglementaires. On retiendra : 1 bar = 0,1 MPa = 10<sup>5</sup> Pa.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> confondre bar relatif et bar absolu, ou bar et MPa, conduit à des erreurs d'un facteur 10 dans les calculs d'épaisseur. Avant tout calcul, convertir toutes les données dans un système cohérent : pression en MPa, longueurs en mm, contraintes en MPa.</div>"
      },
      {
       "titre": "Le cadre réglementaire",
       "contenu": "\n<p>La conception, la fabrication et l'évaluation de la conformité des ESP dont la pression maximale admissible PS est supérieure à 0,5 bar relèvent, dans l'Union européenne, de la <strong>directive 2014/68/UE</strong>, dite <strong>DESP</strong> (directive des équipements sous pression), transposée dans le code de l'environnement.</p>\n<ul>\n<li>Les équipements sont classés en <strong>catégories</strong> (I à IV, de la moins à la plus dangereuse) selon le type d'équipement, l'état du fluide (gaz ou liquide), son <strong>groupe</strong> (groupe 1 : fluides dangereux, par exemple inflammables ou toxiques ; groupe 2 : autres fluides, dont l'eau et la vapeur) et le produit PS × V (ou PS × DN pour les tuyauteries), à l'aide de tableaux de la directive.</li>\n<li>Les équipements de faible risque, sous les seuils de la catégorie I, doivent seulement être conçus et fabriqués selon les <strong>règles de l'art</strong> ; ils ne portent pas le marquage CE au titre de la DESP.</li>\n<li>Plus la catégorie est élevée, plus l'intervention d'un <strong>organisme notifié</strong> est importante dans l'évaluation de la conformité (approbation des modes opératoires de soudage, qualification des soudeurs, examen final, épreuve).</li>\n<li>Le fabricant établit une <strong>déclaration UE de conformité</strong>, appose le marquage CE et fournit une notice d'instructions.</li>\n</ul>\n<p>Une fois installé, l'équipement est soumis à la réglementation française du <strong>suivi en service</strong> (arrêté ministériel du 20 novembre 2017 à la date de rédaction), qui organise les inspections périodiques et les requalifications périodiques, ainsi que les règles applicables aux réparations et modifications.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la DESP fixe des <strong>exigences essentielles de sécurité</strong> (résultats à atteindre) et non des méthodes. Pour démontrer qu'il les respecte, le fabricant s'appuie le plus souvent sur une <strong>norme harmonisée</strong> (série NF EN 13445 pour les récipients non soumis à la flamme) ou sur un <strong>code de construction</strong> reconnu.</div>"
      },
      {
       "titre": "Le rôle d'un code de construction",
       "contenu": "\n<p>Un <strong>code de construction</strong> est un ensemble cohérent de règles qui couvre la conception (calculs), les matériaux, la fabrication (formage, soudage, traitements thermiques), le contrôle et les essais d'un type d'équipement. En France, le code le plus utilisé pour les récipients non soumis à la flamme est le <strong>CODAP</strong> (Code de construction des appareils à pression non soumis à l'action de la flamme), publié par le SNCT, syndicat professionnel de la chaudronnerie et de la tuyauterie industrielle. Son équivalent pour les tuyauteries est le CODETI.</p>\n<p>Le code définit notamment :</p>\n<ul>\n<li>la <strong>contrainte nominale de calcul</strong> f, calculée à partir de Re et Rm du matériau à la température de calcul, divisés par des coefficients de sécurité ;</li>\n<li>le <strong>coefficient de soudure</strong> z, qui réduit la contrainte admise dans les joints soudés selon l'étendue des contrôles réalisés (z = 1 avec contrôle total, des valeurs inférieures, comme 0,85 ou 0,7, avec des contrôles partiels ou réduits) ;</li>\n<li>les formules de calcul des viroles, fonds, ouvertures et brides ;</li>\n<li>les catégories de construction et l'étendue des contrôles non destructifs associés ;</li>\n<li>les tolérances de fabrication (ovalisation, défaut d'alignement des bords, défaut de forme).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le technicien d'atelier ne choisit pas le code ; il est imposé par la commande et figure sur le plan. En revanche, il doit en connaître les exigences de fabrication qui le concernent directement : tolérances d'alignement des tôles, conditions de formage à froid, qualification des soudeurs et des modes opératoires, traçabilité des matériaux, étendue des contrôles.</div>"
      },
      {
       "titre": "Calculer l'épaisseur d'une virole cylindrique",
       "contenu": "\n<p>Pour une virole cylindrique soumise à une pression intérieure, la contrainte la plus forte est la contrainte circonférentielle, qui tend à ouvrir le cylindre le long d'une génératrice. Les normes de la série NF EN 13445, sur lesquelles s'aligne le CODAP pour ce cas simple, donnent l'épaisseur minimale requise :</p>\n<p><strong>e = P × D<sub>i</sub> / (2 × f × z − P)</strong> avec le diamètre intérieur D<sub>i</sub></p>\n<p>ou, de façon équivalente, <strong>e = P × D<sub>e</sub> / (2 × f × z + P)</strong> avec le diamètre extérieur D<sub>e</sub>.</p>\n<p>Dans ces formules, P est la pression de calcul (MPa), f la contrainte nominale de calcul (MPa), z le coefficient de soudure, et e l'épaisseur obtenue (mm). Cette épaisseur est une épaisseur <strong>minimale nécessaire</strong> ; l'épaisseur de commande s'obtient en ajoutant :</p>\n<ul>\n<li>la <strong>surépaisseur de corrosion</strong> c, fixée par le client ou le cahier des charges (souvent 1 à 3 mm pour l'acier non allié) ;</li>\n<li>la <strong>tolérance négative</strong> d'épaisseur de la tôle, donnée par la norme de produit ;</li>\n<li>l'<strong>amincissement</strong> prévisible dû au formage (faible au roulage, important à l'emboutissage des fonds).</li>\n</ul>\n<p>On retient ensuite l'épaisseur commerciale immédiatement supérieure.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> virole en P265GH, D<sub>i</sub> = 1 000 mm, P = 10 bar, f = 170 MPa à la température de calcul (valeur prise ici pour l'exemple), z = 0,85, c = 1 mm, tolérance négative 0,3 mm. 1) Convertir : P = 10 bar = 1 MPa. 2) e = 1 × 1 000 / (2 × 170 × 0,85 − 1) = 1 000 / 288 ≈ 3,47 mm. 3) Ajouter c et la tolérance : 3,47 + 1 + 0,3 = 4,77 mm. 4) Retenir l'épaisseur commerciale supérieure : 5 mm. 5) Vérifier les autres exigences (épaisseur minimale imposée par le code pour la tenue à la manutention, calcul des ouvertures) qui peuvent conduire à une épaisseur plus forte.</div>\n<p>On remarque que l'épaisseur est proportionnelle à la pression et au diamètre : doubler le diamètre double l'épaisseur nécessaire à pression égale. C'est la raison pour laquelle les réservoirs de grand volume à haute pression sont souvent constitués de plusieurs capacités de diamètre modéré.</p>"
      },
      {
       "titre": "L'épreuve hydraulique",
       "contenu": "\n<p>L'<strong>épreuve hydraulique</strong> est un essai de résistance réalisé avant la mise en service : l'équipement est rempli d'eau, purgé de son air, puis porté à la pression d'épreuve et maintenu pendant une durée définie. On vérifie l'absence de fuite et de déformation permanente visible.</p>\n<p>La DESP fixe pour les récipients une pression d'épreuve au moins égale à la plus élevée de deux valeurs : 1,43 × PS, ou 1,25 fois la charge maximale en service corrigée du rapport entre les contraintes admissibles à la température d'épreuve et à la température de calcul. Pour un appareil de PS = 10 bar fonctionnant à température ambiante, on obtient donc au moins 14,3 bar ; le code de construction précise la valeur exacte à retenir.</p>\n<ol>\n<li>Vérifier que l'équipement est entièrement soudé, contrôlé et que le dossier est complet.</li>\n<li>Obturer les ouvertures par des brides pleines et joints adaptés, installer un manomètre étalonné au point haut et un second de contrôle.</li>\n<li>Remplir d'eau en purgeant l'air par les points hauts : l'air comprimé emmagasine de l'énergie et rendrait une rupture explosive.</li>\n<li>Monter en pression par paliers, en baliser la zone et en interdire l'accès.</li>\n<li>Maintenir la pression d'épreuve pendant la durée fixée, puis redescendre à une pression de contrôle pour l'examen visuel des soudures.</li>\n<li>Décompresser, vidanger complètement, sécher, et consigner les résultats dans le procès-verbal d'épreuve.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une épreuve pneumatique (à l'air ou au gaz) est beaucoup plus dangereuse qu'une épreuve hydraulique, car le gaz comprimé stocke une énergie très supérieure à celle de l'eau. Elle n'est réalisée que dans des cas exceptionnels, avec des mesures de sécurité renforcées et l'accord prévu par la réglementation.</div>"
      }
     ],
     "points_cles": [
      "PS est la pression maximale admissible portée sur la plaque ; la pression d'épreuve lui est supérieure.",
      "1 bar = 0,1 MPa : toutes les données d'un calcul doivent être converties dans un système cohérent.",
      "La DESP 2014/68/UE s'applique aux ESP de PS supérieure à 0,5 bar et les classe en catégories I à IV.",
      "La catégorie dépend du type d'équipement, de l'état et du groupe du fluide, et de PS × V ou PS × DN.",
      "Un code de construction (CODAP, CODETI) ou une norme harmonisée (NF EN 13445) fournit les règles de calcul et de fabrication.",
      "Épaisseur minimale d'une virole : e = P × Di / (2fz − P).",
      "L'épaisseur de commande ajoute corrosion, tolérance de laminage et amincissement de formage.",
      "L'épreuve hydraulique se fait air purgé, zone balisée, manomètre étalonné, montée par paliers."
     ],
     "lexique": [
      {
       "terme": "Équipement sous pression (ESP)",
       "def": "Récipient, tuyauterie ou accessoire conçu pour contenir un fluide à une pression supérieure à la pression atmosphérique."
      },
      {
       "terme": "PS",
       "def": "Pression maximale admissible définie par le fabricant pour un équipement."
      },
      {
       "terme": "DESP",
       "def": "Directive européenne 2014/68/UE relative aux équipements sous pression."
      },
      {
       "terme": "Organisme notifié",
       "def": "Organisme habilité à intervenir dans l'évaluation de la conformité des équipements les plus dangereux."
      },
      {
       "terme": "CODAP",
       "def": "Code français de construction des appareils à pression non soumis à l'action de la flamme."
      },
      {
       "terme": "Contrainte nominale de calcul (f)",
       "def": "Contrainte admise dans les calculs, déduite de Re et Rm avec des coefficients de sécurité."
      },
      {
       "terme": "Coefficient de soudure (z)",
       "def": "Coefficient réducteur de la contrainte admise dans les joints soudés, lié à l'étendue des contrôles."
      },
      {
       "terme": "Surépaisseur de corrosion",
       "def": "Épaisseur ajoutée au calcul pour compenser la perte de métal prévisible en service."
      },
      {
       "terme": "Épreuve hydraulique",
       "def": "Essai de résistance sous pression d'eau réalisé avant mise en service."
      },
      {
       "terme": "Suivi en service",
       "def": "Ensemble des inspections et requalifications périodiques imposées aux ESP en exploitation."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Préparer la fabrication",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btci-debits-tubes-profiles",
     "titre": "Calculer les débits de tubes, de tuyauteries et de profilés",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Choisir un moyen de débit adapté à un tube ou à un profilé.",
      "Calculer la longueur de débit d'un tronçon de tuyauterie à partir des cotes entre axes.",
      "Tenir compte de l'encombrement des accessoires, du jeu de soudage et du retrait.",
      "Calculer un angle de coupe et une longueur de débit dans un cas de simple casse.",
      "Établir une liste de débit claire et exploitable à l'atelier."
     ],
     "sections": [
      {
       "titre": "Le débit, première opération de fabrication",
       "contenu": "\n<p>Le <strong>débit</strong> consiste à couper dans une barre de tube ou de profilé (livrée en longueurs commerciales de 6 ou 12 m le plus souvent) les éléments nécessaires, à la bonne longueur et avec les bonnes coupes d'extrémité. Une erreur de débit se répercute sur tout le montage ; un débit trop court est généralement une pièce perdue.</p>\n<table>\n<thead><tr><th>Moyen de débit</th><th>Principe</th><th>Domaine d'emploi</th><th>Remarques</th></tr></thead>\n<tbody>\n<tr><td>Scie à ruban</td><td>Enlèvement de copeaux par lame continue</td><td>Profilés et tubes de toutes sections, coupes droites et d'onglet</td><td>Précise, peu d'échauffement, perte de quelques millimètres (trait de scie)</td></tr>\n<tr><td>Scie circulaire à froid</td><td>Lame circulaire à faible vitesse, lubrifiée</td><td>Petits profilés et tubes, séries</td><td>Très bon état de coupe, cadence élevée</td></tr>\n<tr><td>Tronçonneuse à meule</td><td>Abrasion</td><td>Petites sections, chantier</td><td>Bavures, échauffement, projections ; précision moyenne</td></tr>\n<tr><td>Coupe-tube à molettes</td><td>Pénétration progressive de molettes</td><td>Tubes de petit diamètre</td><td>Pas de copeau, léger bourrelet intérieur</td></tr>\n<tr><td>Machine de coupe orbitale</td><td>Outil tournant autour du tube, coupe et chanfrein simultanés</td><td>Tuyauterie inox, chantier</td><td>Coupe d'équerre et prête à souder</td></tr>\n<tr><td>Découpe thermique de tubes (laser, plasma)</td><td>Fusion localisée pilotée par commande numérique</td><td>Intersections complexes, séries</td><td>Programmation depuis la maquette numérique</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la longueur de débit est la longueur de la pièce coupée, mesurée sur la barre ; elle n'est presque jamais égale à une cote du plan. Elle se déduit des cotes du plan par calcul.</div>"
      },
      {
       "titre": "Encombrement des accessoires de tuyauterie",
       "contenu": "\n<p>Sur une isométrique, les cotes sont données entre <strong>axes</strong> (points de changement de direction). Les tubes droits ne vont pas d'axe à axe : une partie de la longueur est occupée par les accessoires. Il faut donc connaître l'<strong>encombrement</strong> de chaque accessoire, donné par les normes et les catalogues.</p>\n<table>\n<thead><tr><th>Accessoire</th><th>Encombrement à retrancher</th></tr></thead>\n<tbody>\n<tr><td>Coude 90° de rayon R</td><td>R, de l'axe à la face d'extrémité du coude</td></tr>\n<tr><td>Coude 45° de rayon R</td><td>R × tan 22,5° ≈ 0,414 × R</td></tr>\n<tr><td>Coude d'angle α quelconque</td><td>R × tan(α/2)</td></tr>\n<tr><td>Té</td><td>Cote « axe-face » du catalogue, pour le passage et pour la dérivation</td></tr>\n<tr><td>Bride à collerette</td><td>Hauteur de la bride, de la face de joint au bord à souder, plus l'épaisseur du joint si la cote s'arrête au plan de joint</td></tr>\n<tr><td>Réduction</td><td>Longueur totale de la réduction</td></tr>\n</tbody>\n</table>\n<p>Les coudes à souder courants sont dits à « long rayon » : leur rayon vaut environ 1,5 fois le diamètre nominal (par exemple 152,4 mm pour un DN 100). Il existe aussi des coudes à court rayon et des coudes cintrés à grand rayon. La valeur exacte se lit toujours dans le catalogue du fournisseur retenu ou dans la classe de tuyauterie.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> deux fournisseurs peuvent proposer des accessoires de même désignation avec des encombrements légèrement différents, surtout pour les tés, réductions et brides. Le débit doit être calculé avec les accessoires réellement approvisionnés, et non avec des valeurs « habituelles ».</div>"
      },
      {
       "titre": "Jeu de soudage et retrait",
       "contenu": "\n<p>Deux éléments soudés bout à bout ne sont pas jointifs : on ménage un <strong>écartement</strong> (ou jeu) à la racine, prescrit par le mode opératoire de soudage, souvent de 1,5 à 3 mm pour un soudage à pleine pénétration. Ce jeu fait partie de la longueur entre axes et doit être retranché de la longueur du tube.</p>\n<p>En sens inverse, en refroidissant, le cordon se contracte et rapproche les deux éléments : c'est le <strong>retrait de soudage</strong> transversal, de l'ordre du millimètre par joint en épaisseur courante, variable selon l'épaisseur, la préparation et le procédé. Sur un tronçon comportant de nombreuses soudures, les retraits s'additionnent.</p>\n<p>En pratique, les entreprises adoptent une règle interne : par exemple compter le jeu de soudage et le retrait l'un contre l'autre pour les petits diamètres, ou appliquer un retrait forfaitaire par joint mesuré sur leurs propres fabrications. On prévoit aussi, sur les lignes à monter sur site, une <strong>longueur de réglage</strong> (surlongueur volontaire) sur un tronçon dit de « fermeture », coupé à la cote exacte au moment du montage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le tronçon de fermeture est indiqué sur l'isométrique par une mention du type « surlongueur 100 mm, à ajuster sur site ». Il absorbe les écarts d'implantation des équipements et les cumuls d'erreurs, et évite de refaire un tronçon complet.</div>"
      },
      {
       "titre": "Calculer la longueur d'un tube entre deux accessoires",
       "contenu": "\n<p>La formule générale de la longueur de débit d'un tube droit est :</p>\n<p><strong>L<sub>débit</sub> = cote entre axes − encombrements des accessoires aux deux extrémités − jeux de soudage</strong> (± retrait selon la règle de l'entreprise)</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> tronçon DN 100 (tube 114,3 × 3,6) entre une bride à collerette et un coude 90° long rayon. Cote du plan : 1 200 mm entre la face de joint de la bride et l'axe du coude suivant. Données : hauteur de la bride 52 mm (valeur du catalogue retenu), rayon du coude 152,4 mm, jeu de soudage 2 mm par joint, retrait négligé dans cet exemple. 1) Repérer les deux accessoires et les deux soudures du tube. 2) Retrancher la bride : 1 200 − 52 = 1 148 mm. 3) Retrancher le coude : 1 148 − 152,4 = 995,6 mm. 4) Retrancher deux jeux : 995,6 − 2 × 2 = 991,6 mm. 5) Arrondir selon la précision de l'atelier : débit à 991,5 mm ou 992 mm selon la règle interne. 6) Contrôler par addition inverse : 52 + 2 + 991,6 + 2 + 152,4 = 1 200 mm.</div>\n<p>Le dernier contrôle, qui consiste à reconstituer la cote du plan à partir des éléments, évite la plupart des erreurs : oubli d'un jeu, encombrement compté deux fois, accessoire mal identifié.</p>"
      },
      {
       "titre": "Les cas de simple casse",
       "contenu": "\n<p>Un tronçon est dit en <strong>simple casse</strong> lorsqu'il quitte un axe principal pour rejoindre un autre point par un déplacement dans un seul plan, par exemple pour contourner un obstacle. On connaît deux cotes : le décalage d et la longueur parcourue L selon l'axe principal. Le tronçon incliné forme l'hypoténuse d'un triangle rectangle.</p>\n<ul>\n<li>Angle de déviation : tan α = d / L, d'où α ;</li>\n<li>Longueur entre axes du tronçon incliné : √(d<sup>2</sup> + L<sup>2</sup>) ou d / sin α.</li>\n</ul>\n<p>Exemple : décalage d = 400 mm sur une longueur L = 700 mm. tan α = 400 / 700 ≈ 0,571, donc α ≈ 29,7°. Longueur entre axes ≈ √(160 000 + 490 000) ≈ 806 mm. Avec deux coudes cintrés ou deux coudes à souder coupés à 29,7°, on retranche de chaque côté l'encombrement R × tan(α/2) avant de déduire le débit du tube incliné.</p>\n<p>Pour les profilés assemblés en cadre ou en treillis, le principe est le même : on calcule les longueurs entre nœuds, puis on tient compte du type de coupe d'extrémité (droite, d'onglet à 45°, d'onglet quelconque, grugée) et de la cote à laquelle la longueur de débit est donnée (pointe longue ou pointe courte de la coupe).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> pour un profilé coupé en onglet, la longueur de débit doit préciser si elle est mesurée sur la pointe longue ou sur la pointe courte. Une liste de débit qui n'indique pas cette convention conduit à des pièces trop courtes ou trop longues de deux fois la projection de la coupe.</div>"
      },
      {
       "titre": "La liste de débit",
       "contenu": "\n<p>La <strong>liste de débit</strong> est le document qui transmet au poste de coupe toutes les informations nécessaires. Elle est générée par le modeleur pour les mécanosoudures ou établie par le technicien.</p>\n<table>\n<thead><tr><th>Rep.</th><th>Désignation</th><th>Matière</th><th>Longueur de débit</th><th>Coupe extrémité 1</th><th>Coupe extrémité 2</th><th>Qté</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Tube 114,3 × 3,6</td><td>P235GH</td><td>992</td><td>Droite + chanfrein 37,5°</td><td>Droite + chanfrein 37,5°</td><td>2</td></tr>\n<tr><td>2</td><td>Cornière 50 × 50 × 5</td><td>S235JR</td><td>1 250 (pointe longue)</td><td>Onglet 45°</td><td>Onglet 45°</td><td>4</td></tr>\n<tr><td>3</td><td>Tube carré 40 × 40 × 3</td><td>S235JR</td><td>860</td><td>Droite</td><td>Grugée sur tube 60,3</td><td>2</td></tr>\n</tbody>\n</table>\n<p>On y regroupe les pièces par matière et par section, pour optimiser l'utilisation des barres : c'est le <strong>plan de coupe</strong> des barres, qui place les débits dans les longueurs commerciales en minimisant les chutes.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une liste de débit complète précise pour chaque pièce : repère, section, matière, longueur et convention de mesure, coupes d'extrémité, quantité, et référence du plan. Le marquage du repère sur chaque pièce dès le débit évite les confusions au montage.</div>"
      }
     ],
     "points_cles": [
      "Le débit coupe tubes et profilés à la longueur et avec les coupes d'extrémité voulues.",
      "Les cotes d'isométrique sont entre axes ; il faut retrancher l'encombrement des accessoires.",
      "Encombrement d'un coude d'angle α : R × tan(α/2), soit R pour 90° et environ 0,414 R pour 45°.",
      "Les jeux de soudage se retranchent ; les retraits s'ajoutent selon la règle de l'entreprise.",
      "Un tronçon de fermeture avec surlongueur absorbe les écarts de montage sur site.",
      "En simple casse, tan α = d/L et la longueur entre axes vaut √(d² + L²).",
      "La longueur d'un profilé coupé en onglet doit préciser pointe longue ou pointe courte.",
      "Toujours vérifier un débit en reconstituant la cote du plan par addition."
     ],
     "lexique": [
      {
       "terme": "Débit",
       "def": "Opération de coupe des barres de tubes ou profilés à la longueur nécessaire."
      },
      {
       "terme": "Longueur de débit",
       "def": "Longueur de la pièce telle qu'elle est coupée dans la barre."
      },
      {
       "terme": "Cote entre axes",
       "def": "Distance mesurée entre deux points de changement de direction d'une tuyauterie."
      },
      {
       "terme": "Encombrement",
       "def": "Distance entre l'axe d'un accessoire et son extrémité à souder ou sa face de joint."
      },
      {
       "terme": "Coude long rayon",
       "def": "Coude à souder dont le rayon vaut environ 1,5 fois le diamètre nominal."
      },
      {
       "terme": "Écartement à la racine",
       "def": "Jeu ménagé entre deux bords à souder pour obtenir la pénétration."
      },
      {
       "terme": "Retrait de soudage",
       "def": "Raccourcissement d'un assemblage dû à la contraction du cordon au refroidissement."
      },
      {
       "terme": "Simple casse",
       "def": "Déviation d'une tuyauterie ou d'un profilé dans un seul plan."
      },
      {
       "terme": "Tronçon de fermeture",
       "def": "Tronçon livré avec une surlongueur pour être ajusté au montage."
      },
      {
       "terme": "Plan de coupe",
       "def": "Répartition des débits dans les barres commerciales pour limiter les chutes."
      }
     ]
    },
    {
     "id": "btci-developpes-tolerie",
     "titre": "Développés de tôlerie : fibre neutre, cylindres, cônes et intersections",
     "niveau": "1re",
     "duree": 50,
     "objectifs": [
      "Expliquer la notion de fibre neutre et choisir le diamètre ou la longueur de calcul d'un développé.",
      "Calculer la longueur développée d'une pièce pliée.",
      "Calculer le développé d'un cylindre et d'un tronc de cône droit.",
      "Construire le développé d'un piquage cylindrique sur un cylindre par la méthode des génératrices.",
      "Distinguer les méthodes de développement : génératrices parallèles, génératrices concourantes, triangulation."
     ],
     "sections": [
      {
       "titre": "La fibre neutre et la vraie grandeur",
       "contenu": "\n<p>Lorsqu'on roule ou plie une tôle d'épaisseur e, la face extérieure s'allonge et la face intérieure se raccourcit. Entre les deux existe une couche qui garde sa longueur d'origine : la <strong>fibre neutre</strong>. Le <strong>développé</strong> (forme plane à découper avant formage) doit donc être calculé sur la fibre neutre, et non sur la face intérieure ou extérieure.</p>\n<ul>\n<li>Pour un <strong>roulage</strong> à grand rayon (viroles), la fibre neutre est pratiquement au milieu de l'épaisseur : on calcule sur le <strong>diamètre moyen</strong> D<sub>m</sub> = D<sub>e</sub> − e = D<sub>i</sub> + e.</li>\n<li>Pour un <strong>pliage</strong> à petit rayon, la fibre neutre se rapproche de la face intérieure. Sa position est donnée par un coefficient K (entre 0 et 0,5) : elle se trouve à la distance K × e de la face intérieure. K dépend du rapport entre rayon intérieur et épaisseur, de la matière et du procédé ; on le prend dans la table de pliage de l'entreprise, souvent entre 0,3 et 0,45 pour le pliage en l'air.</li>\n</ul>\n<p>Un développé n'est juste que si l'on travaille sur des <strong>vraies grandeurs</strong> : une longueur vue en projection oblique sur un plan est raccourcie. Toute méthode de développement consiste à retrouver la vraie grandeur des génératrices et des courbes.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> calculer le développé d'une virole avec le diamètre intérieur ou extérieur du plan est une erreur classique. Pour une virole D<sub>i</sub> 1 000 en épaisseur 10, l'écart de circonférence entre D<sub>i</sub> et D<sub>m</sub> vaut π × 10 ≈ 31 mm : la virole ne fermera pas, ou il faudra une soudure avec un écartement inacceptable.</div>"
      },
      {
       "titre": "Longueur développée d'une pièce pliée",
       "contenu": "\n<p>Une pièce pliée se décompose en <strong>parties droites</strong> et en <strong>arcs</strong> de pli. Sa longueur développée vaut la somme des parties droites et des longueurs d'arc mesurées sur la fibre neutre :</p>\n<p><strong>arc = (π × α / 180) × (R<sub>i</sub> + K × e)</strong> avec α l'angle de pli en degrés, R<sub>i</sub> le rayon intérieur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> cornière pliée à 90°, cotes extérieures 50 et 80 mm, tôle de 3 mm, rayon intérieur 3 mm, K = 0,4. 1) Parties droites : chaque cote extérieure contient l'épaisseur et le rayon intérieur, soit R<sub>i</sub> + e = 6 mm ; parties droites 50 − 6 = 44 mm et 80 − 6 = 74 mm. 2) Rayon de la fibre neutre : 3 + 0,4 × 3 = 4,2 mm. 3) Arc à 90° : (π / 2) × 4,2 ≈ 6,60 mm. 4) Longueur développée : 44 + 74 + 6,60 = 124,6 mm. 5) Comparaison : la somme des cotes extérieures (130 mm) donnerait une pièce trop longue de 5,4 mm ; la somme des cotes intérieures (124 mm) une pièce trop courte de 0,6 mm.</div>\n<p>Les ateliers utilisent aussi la notion de <strong>déduction de pli</strong> (ou valeur de correction) : on additionne les cotes extérieures et on retranche, pour chaque pli, une valeur tirée d'un abaque établi pour une épaisseur, une ouverture de matrice et une matière données. Dans l'exemple, la déduction vaut 130 − 124,6 = 5,4 mm. Cette méthode, plus rapide, n'est fiable que si l'abaque a été établi par des essais sur la presse de l'atelier.</p>"
      },
      {
       "titre": "Développé d'un cylindre et d'un tronc de cône",
       "contenu": "\n<p>Le développé d'un <strong>cylindre</strong> droit est un rectangle de largeur égale à la hauteur et de longueur L = π × D<sub>m</sub>. Pour un cylindre coupé en biais (cylindre tronqué), on utilise la méthode des génératrices décrite plus loin.</p>\n<p>Le développé d'un <strong>cône droit</strong> est un secteur circulaire, dont le rayon est la génératrice du cône et dont l'arc a la longueur de la circonférence de base. Pour un <strong>tronc de cône</strong> (cas le plus fréquent : réductions, trémies, fonds coniques), on obtient une couronne circulaire partielle.</p>\n<p>Avec D<sub>m</sub> et d<sub>m</sub> les diamètres moyens des grandes et petites bases et h la hauteur :</p>\n<ul>\n<li>hauteur du cône complet : H = h × D<sub>m</sub> / (D<sub>m</sub> − d<sub>m</sub>) ;</li>\n<li>grand rayon de développement : R = √(H<sup>2</sup> + (D<sub>m</sub>/2)<sup>2</sup>) ;</li>\n<li>petit rayon de développement : r = R × d<sub>m</sub> / D<sub>m</sub> ;</li>\n<li>angle du secteur : θ = 360° × (D<sub>m</sub> / 2) / R.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> tronc de cône D<sub>m</sub> = 800 mm, d<sub>m</sub> = 400 mm, h = 300 mm. 1) H = 300 × 800 / 400 = 600 mm. 2) R = √(600<sup>2</sup> + 400<sup>2</sup>) = √520 000 ≈ 721,1 mm. 3) r = 721,1 × 400 / 800 ≈ 360,6 mm. 4) θ = 360 × 400 / 721,1 ≈ 199,7°. 5) Vérification : l'arc extérieur vaut 721,1 × 199,7 × π / 180 ≈ 2 513 mm, égal à π × 800 ≈ 2 513 mm. 6) Si l'angle dépasse ce qu'autorise le format de tôle, on découpe le développé en deux ou trois secteurs, ce qui ajoute des soudures longitudinales.</div>\n<p>Lorsque le cône est très ouvert, le rayon R devient énorme et le traçage au compas impossible : on calcule alors des points par coordonnées, ce que fait le modeleur ou le logiciel de développement de l'atelier.</p>"
      },
      {
       "titre": "Les méthodes de développement",
       "contenu": "\n<table>\n<thead><tr><th>Méthode</th><th>Surfaces concernées</th><th>Principe</th></tr></thead>\n<tbody>\n<tr><td>Génératrices parallèles</td><td>Cylindres, prismes, coudes à segments</td><td>On divise la base en parties égales ; les génératrices, parallèles, gardent leur vraie grandeur dans une vue où elles sont de front ; on les reporte sur une droite égale au périmètre développé</td></tr>\n<tr><td>Génératrices concourantes</td><td>Cônes droits ou obliques, pyramides</td><td>Les génératrices passent par le sommet ; on cherche la vraie grandeur de chacune (par rotation) et on reporte les triangles autour du sommet</td></tr>\n<tr><td>Triangulation</td><td>Surfaces de raccordement (carré vers rond, rectangle vers rond, transformations quelconques)</td><td>On décompose la surface en triangles dont on détermine la vraie grandeur des trois côtés, puis on les juxtapose sur le plan</td></tr>\n</tbody>\n</table>\n<p>Le choix du nombre de divisions est un compromis : 12 divisions d'un cercle (tous les 30°) suffisent pour les petits diamètres ; on monte à 24 ou plus pour les grands diamètres ou les formes très variables. La <strong>ligne d'assemblage</strong> (position de la soudure longitudinale) se choisit à un endroit où la génératrice est la plus courte, pour limiter la longueur de soudure, et à l'écart des zones de piquage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les développés de forme sont aujourd'hui calculés par logiciel et découpés sur machine à commande numérique. La connaissance des méthodes graphiques reste indispensable pour vérifier un résultat, tracer une pièce unique sur chantier ou comprendre pourquoi un développé ne se forme pas correctement.</div>"
      },
      {
       "titre": "Le piquage cylindrique : intersection à axes concourants",
       "contenu": "\n<p>Un <strong>piquage</strong> perpendiculaire d'un tube de rayon r sur un collecteur de rayon R (avec r ≤ R) est une intersection de deux cylindres à <strong>axes concourants</strong>. Sur le tube piqué, chaque génératrice repérée par son angle φ (mesuré à partir de la génératrice située dans le plan des deux axes) a pour longueur :</p>\n<p><strong>L(φ) = H − √(R<sup>2</sup> − (r × sin φ)<sup>2</sup>)</strong></p>\n<p>où H est la distance entre l'axe du collecteur et l'extrémité libre du piquage. Pour un piquage <strong>posé</strong>, on trace sur le tube avec le rayon de contact (rayon intérieur du piquage) et le rayon extérieur du collecteur ; pour un piquage <strong>pénétrant</strong>, avec le rayon extérieur du piquage. Le plan précise le type.</p>\n<table>\n<thead><tr><th>Angle φ</th><th>r × sin φ (mm)</th><th>√(R² − (r sin φ)²) (mm)</th><th>L(φ) (mm)</th></tr></thead>\n<tbody>\n<tr><td>0°</td><td>0</td><td>100,00</td><td>200,00</td></tr>\n<tr><td>30°</td><td>25,00</td><td>96,82</td><td>203,18</td></tr>\n<tr><td>60°</td><td>43,30</td><td>90,14</td><td>209,86</td></tr>\n<tr><td>90°</td><td>50,00</td><td>86,60</td><td>213,40</td></tr>\n</tbody>\n</table>\n<p>Valeurs calculées pour r = 50 mm, R = 100 mm, H = 300 mm. Par symétrie, les génératrices à 120°, 150°, 180°… reprennent les valeurs de 60°, 30°, 0°… On reporte ces longueurs tous les π × d / 12 sur la ligne de base du développé (d étant le diamètre de traçage du tube), puis on relie les points par une courbe régulière.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le développé d'un piquage à axes concourants présente deux creux et deux bosses ; le trou correspondant dans le collecteur se trace par la même méthode, en reportant sur le développé du collecteur les largeurs d'arc correspondant à chaque génératrice.</div>"
      }
     ],
     "points_cles": [
      "Le développé se calcule sur la fibre neutre : diamètre moyen pour les viroles, rayon intérieur + K × e pour les plis.",
      "Le coefficient K se prend dans la table de pliage de l'atelier ; il dépend de la matière, du rayon et de l'outillage.",
      "Longueur développée d'une pièce pliée = parties droites + arcs sur fibre neutre.",
      "Un tronc de cône se développe en couronne partielle de rayons R et r et d'angle θ = 360 × (Dm/2)/R.",
      "Les trois méthodes graphiques sont les génératrices parallèles, les génératrices concourantes et la triangulation.",
      "Pour un piquage à axes concourants, L(φ) = H − √(R² − (r sin φ)²).",
      "La ligne d'assemblage se place sur la génératrice la plus courte, à l'écart des piquages.",
      "Toute méthode consiste à retrouver la vraie grandeur des génératrices."
     ],
     "lexique": [
      {
       "terme": "Développé",
       "def": "Forme plane qui, après formage, donne la pièce voulue."
      },
      {
       "terme": "Fibre neutre",
       "def": "Couche de la tôle dont la longueur ne varie pas au formage."
      },
      {
       "terme": "Coefficient K",
       "def": "Rapport donnant la position de la fibre neutre dans l'épaisseur, mesurée depuis la face intérieure."
      },
      {
       "terme": "Diamètre moyen",
       "def": "Diamètre mesuré au milieu de l'épaisseur d'une virole, utilisé pour son développé."
      },
      {
       "terme": "Déduction de pli",
       "def": "Valeur à retrancher à la somme des cotes extérieures pour chaque pli."
      },
      {
       "terme": "Vraie grandeur",
       "def": "Dimension réelle d'une longueur ou d'une surface, non déformée par la projection."
      },
      {
       "terme": "Génératrice",
       "def": "Droite qui, en se déplaçant, engendre une surface réglée (cylindre, cône)."
      },
      {
       "terme": "Triangulation",
       "def": "Méthode de développement par décomposition d'une surface en triangles."
      },
      {
       "terme": "Piquage",
       "def": "Raccordement d'un tube sur une paroi ou un autre tube."
      },
      {
       "terme": "Ligne d'assemblage",
       "def": "Position de la soudure qui referme une pièce roulée ou pliée."
      }
     ]
    },
    {
     "id": "btci-processus-couts",
     "titre": "Organiser le processus de fabrication : gamme, planning, mise en tôle et coûts",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Établir la gamme de fabrication d'un sous-ensemble chaudronné en respectant les contraintes d'accessibilité et de déformation.",
      "Construire un planning de type Gantt et identifier le chemin critique.",
      "Optimiser une mise en tôle et calculer un taux d'utilisation matière.",
      "Calculer le coût de revient prévisionnel d'un élément : matière, main-d'œuvre, machines.",
      "Comparer deux processus sur des critères techniques et économiques."
     ],
     "sections": [
      {
       "titre": "Du plan au processus",
       "contenu": "\n<p>Le <strong>processus de fabrication</strong> décrit la suite ordonnée des opérations qui transforment les matières premières en ouvrage fini. En chaudronnerie, il s'organise presque toujours en grandes étapes : <strong>débit</strong> (découpe des tôles et des barres), <strong>formage</strong> (roulage, pliage, cintrage, emboutissage), <strong>préparation des bords</strong> (chanfreins), <strong>pointage et assemblage</strong> sur gabarit ou sur marbre, <strong>soudage</strong>, <strong>redressage</strong>, <strong>contrôles</strong>, <strong>finitions</strong> (décapage, peinture, passivation) et <strong>expédition</strong>.</p>\n<p>Les contraintes qui fixent l'ordre des opérations sont propres au métier :</p>\n<ul>\n<li><strong>accessibilité</strong> : une soudure intérieure doit être faite avant la fermeture ; un piquage se perce et se soude de préférence avant le roulage complet ou avant l'assemblage des fonds, si sa position le permet ;</li>\n<li><strong>déformations</strong> : on soude d'abord les joints qui laissent la pièce libre de se déformer, on équilibre les cordons de part et d'autre de l'axe neutre, on prévoit le redressage avant les usinages finaux ;</li>\n<li><strong>contrôles</strong> : un joint doit être contrôlé tant qu'il reste accessible (radiographie ou ultrasons d'un joint longitudinal avant mise en place d'un renfort qui le recouvre) ;</li>\n<li><strong>manutention</strong> : on assemble au sol ce qui peut l'être, et on évite de retourner plusieurs fois un ensemble lourd ;</li>\n<li><strong>traitements</strong> : un traitement thermique après soudage interdit toute soudure ultérieure sur les parties sous pression.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en chaudronnerie, l'ordre des opérations n'est pas seulement une question d'efficacité : il conditionne la possibilité même de réaliser et de contrôler certaines soudures. Une gamme se valide en se demandant, pour chaque soudure, « est-elle encore accessible pour le soudeur et pour le contrôleur à ce moment-là ? ».</div>"
      },
      {
       "titre": "Rédiger la gamme d'un sous-ensemble",
       "contenu": "\n<p>La <strong>gamme de fabrication</strong> traduit le processus en phases, chacune affectée à un poste de travail, avec ses moyens, ses paramètres principaux, ses contrôles et son temps alloué. Pour une virole de ballon avec un piquage, elle peut prendre la forme suivante.</p>\n<table>\n<thead><tr><th>Phase</th><th>Poste</th><th>Opérations</th><th>Contrôle</th></tr></thead>\n<tbody>\n<tr><td>10</td><td>Magasin</td><td>Sortir la tôle P265GH ép. 8, vérifier certificat et numéro de coulée, reporter la coulée sur la tôle</td><td>Concordance certificat/tôle</td></tr>\n<tr><td>20</td><td>Découpe plasma</td><td>Découper le développé et le trou de piquage selon programme indice B</td><td>Diagonales, dimensions du développé</td></tr>\n<tr><td>30</td><td>Chanfreinage</td><td>Chanfreiner les bords du joint longitudinal (V 60°, talon 2)</td><td>Angle et talon au calibre</td></tr>\n<tr><td>40</td><td>Rouleuse</td><td>Croquer les bords puis rouler la virole</td><td>Gabarit de cintrage, alignement des bords</td></tr>\n<tr><td>50</td><td>Soudage</td><td>Pointer puis souder le joint longitudinal selon DMOS, avec talons d'amorçage et de fin</td><td>Visuel du cordon</td></tr>\n<tr><td>60</td><td>Rouleuse</td><td>Reprendre la circularité après soudage</td><td>Ovalisation dans la tolérance du code</td></tr>\n<tr><td>70</td><td>Contrôle</td><td>Contrôle non destructif du joint longitudinal selon l'étendue prescrite</td><td>Procès-verbal</td></tr>\n<tr><td>80</td><td>Soudage</td><td>Pointer et souder le piquage selon DMOS</td><td>Visuel, dimensions de position</td></tr>\n</tbody>\n</table>\n<p>On remarque que le <strong>croquage</strong> des bords (formage préalable des extrémités, que la rouleuse ne cintre pas) précède le roulage, et que le contrôle du joint longitudinal est placé avant l'ajout d'éléments qui gêneraient l'examen.</p>"
      },
      {
       "titre": "Planifier : le diagramme de Gantt et le chemin critique",
       "contenu": "\n<p>Le <strong>diagramme de Gantt</strong> représente chaque tâche par une barre horizontale proportionnelle à sa durée, placée sur une échelle de temps. Les <strong>antériorités</strong> (une tâche ne peut commencer que lorsqu'une autre est terminée) relient les barres. On y lit la date de fin prévisionnelle du projet et les tâches qui disposent d'une <strong>marge</strong>.</p>\n<p>Le <strong>chemin critique</strong> est la suite de tâches dont la durée totale fixe la date de fin : toute heure de retard sur l'une d'elles retarde l'ensemble. Les autres tâches peuvent glisser dans la limite de leur marge.</p>\n<table>\n<thead><tr><th>Tâche</th><th>Durée (jours)</th><th>Antériorité</th></tr></thead>\n<tbody>\n<tr><td>A Approvisionnement des fonds emboutis</td><td>10</td><td>—</td></tr>\n<tr><td>B Débit et roulage des viroles</td><td>3</td><td>—</td></tr>\n<tr><td>C Soudage des joints longitudinaux et contrôles</td><td>3</td><td>B</td></tr>\n<tr><td>D Fabrication du supportage</td><td>4</td><td>—</td></tr>\n<tr><td>E Assemblage viroles et fonds, soudage circulaire</td><td>4</td><td>A et C</td></tr>\n<tr><td>F Pose des piquages et du supportage</td><td>3</td><td>D et E</td></tr>\n<tr><td>G Épreuve, finition, expédition</td><td>2</td><td>F</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> trouver le chemin critique. 1) Calculer pour chaque tâche la date de début au plus tôt : A, B, D démarrent au jour 0 ; C au jour 3 (fin de B) ; E au plus tard des fins de A (10) et C (6), soit jour 10 ; F au plus tard des fins de D (4) et E (14), soit jour 14 ; G au jour 17. 2) Fin du projet : 17 + 2 = 19 jours. 3) Remonter depuis la fin : G dépend de F, F de E (et non de D, qui finit au jour 4), E de A (et non de C, qui finit au jour 6). 4) Chemin critique : A – E – F – G. 5) Marges : B et C ont 4 jours de marge, D en a 10. 6) Conclusion pratique : relancer le fournisseur des fonds est plus utile que d'accélérer le roulage.</div>"
      },
      {
       "titre": "La mise en tôle et le taux d'utilisation matière",
       "contenu": "\n<p>La <strong>mise en tôle</strong> (imbrication) consiste à placer les développés sur des formats commerciaux de tôle (par exemple 2 000 × 1 000, 3 000 × 1 500, 6 000 × 2 000 mm) en limitant les chutes. Elle tient compte de l'écartement minimal entre pièces (lié au procédé de découpe et à l'épaisseur), des marges en bord de tôle, et parfois d'un <strong>sens de laminage</strong> imposé (pliage perpendiculaire au laminage pour éviter les criques, aspect d'un inox brossé).</p>\n<p>On évalue une mise en tôle par son <strong>taux d'utilisation</strong> :</p>\n<p><strong>taux = surface (ou masse) des pièces utiles / surface (ou masse) de la tôle consommée × 100</strong></p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> on doit découper 6 flasques de 600 × 450 mm en tôle de 6 mm. 1) Format 2 000 × 1 000 : en plaçant les 600 dans la longueur, on loge 3 pièces sur la longueur (1 800 mm) et 2 sur la largeur (900 mm), soit 6 pièces en tenant compte de 10 mm d'écart, ce que les marges restantes permettent. 2) Surface utile : 6 × 0,6 × 0,45 = 1,62 m<sup>2</sup>. 3) Surface de tôle : 2,00 m<sup>2</sup>. 4) Taux : 1,62 / 2,00 = 81 %. 5) Masse de la tôle : 2 × 0,006 × 7 850 = 94,2 kg ; masse des chutes : environ 18 kg, qui peuvent être conservées en stock de chutes, identifiées par leur nuance et leur coulée, si leurs dimensions sont réutilisables.</div>"
      },
      {
       "titre": "Le coût de revient prévisionnel",
       "contenu": "\n<p>Le <strong>coût de revient</strong> d'un élément regroupe toutes les dépenses nécessaires pour le produire. Pour chiffrer une fabrication, le technicien en estime les composantes principales.</p>\n<table>\n<thead><tr><th>Composante</th><th>Calcul</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Matière</td><td>Masse consommée (chutes incluses) × prix au kg</td><td>94,2 kg × 1,40 €/kg = 131,88 €</td></tr>\n<tr><td>Découpe</td><td>Temps machine × taux horaire du poste</td><td>0,5 h × 120 €/h = 60,00 €</td></tr>\n<tr><td>Formage et soudage</td><td>Temps opérateur × taux horaire de l'atelier</td><td>4 h × 55 €/h = 220,00 €</td></tr>\n<tr><td>Consommables</td><td>Fil, gaz, disques, électricité, estimés</td><td>25,00 €</td></tr>\n<tr><td>Contrôle</td><td>Temps de contrôle et éventuelle prestation extérieure</td><td>0,5 h × 55 €/h = 27,50 €</td></tr>\n<tr><td>Total</td><td></td><td>464,38 €</td></tr>\n</tbody>\n</table>\n<p>Les prix et taux horaires de ce tableau sont des valeurs d'exemple ; dans l'entreprise, ils sont fournis par le service méthodes ou la comptabilité et intègrent l'amortissement des machines, l'énergie et les frais de structure de l'atelier.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en chaudronnerie à l'unité, la part de main-d'œuvre est souvent prépondérante. Un gain de temps sur le pointage (gabarit bien conçu) ou sur le soudage (procédé plus productif, position à plat grâce à un positionneur) pèse davantage sur le coût qu'une économie de quelques kilogrammes de tôle.</div>"
      },
      {
       "titre": "Comparer deux processus",
       "contenu": "\n<p>Face à plusieurs solutions, on compare les processus sur des critères explicites, avant de proposer une solution argumentée.</p>\n<table>\n<thead><tr><th>Critère</th><th>Solution 1 : bride découpée au plasma dans la tôle</th><th>Solution 2 : bride normalisée achetée</th></tr></thead>\n<tbody>\n<tr><td>Conformité au code et à la classe de tuyauterie</td><td>À justifier (calcul, matière certifiée)</td><td>Assurée si la bride est conforme à la norme</td></tr>\n<tr><td>Délai</td><td>Immédiat si la tôle est en stock</td><td>Dépend du fournisseur</td></tr>\n<tr><td>Coût</td><td>Matière + découpe + usinage de la portée de joint</td><td>Prix catalogue</td></tr>\n<tr><td>Qualité de la portée de joint</td><td>Usinage nécessaire</td><td>Garantie</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une solution moins chère qui ne respecte pas une exigence imposée (code de construction, classe de tuyauterie, cahier des charges) n'est pas une solution. Le critère de conformité s'examine en premier ; le coût et le délai départagent ensuite les solutions conformes.</div>"
      }
     ],
     "points_cles": [
      "Le processus enchaîne débit, formage, préparation, assemblage, soudage, redressage, contrôles, finitions.",
      "L'ordre des opérations dépend de l'accessibilité des soudures, des déformations, des contrôles et de la manutention.",
      "La gamme précise pour chaque phase le poste, les opérations, les moyens et les contrôles.",
      "Le chemin critique est la suite de tâches sans marge qui fixe la date de fin.",
      "La mise en tôle se juge par le taux d'utilisation matière et respecte écartements, marges et sens de laminage.",
      "Le coût de revient additionne matière, temps machine, main-d'œuvre, consommables et contrôles.",
      "En chaudronnerie à l'unité, la main-d'œuvre pèse souvent plus que la matière.",
      "Une solution non conforme est écartée quel que soit son coût."
     ],
     "lexique": [
      {
       "terme": "Processus de fabrication",
       "def": "Suite ordonnée des opérations transformant la matière en ouvrage fini."
      },
      {
       "terme": "Gamme de fabrication",
       "def": "Document décrivant les phases, postes, opérations, moyens et contrôles d'une fabrication."
      },
      {
       "terme": "Croquage",
       "def": "Formage préalable des bords d'une tôle avant roulage, pour obtenir une virole bien ronde aux extrémités."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Représentation des tâches par des barres sur une échelle de temps."
      },
      {
       "terme": "Antériorité",
       "def": "Tâche qui doit être terminée avant qu'une autre puisse commencer."
      },
      {
       "terme": "Chemin critique",
       "def": "Enchaînement de tâches dont tout retard retarde la fin du projet."
      },
      {
       "terme": "Marge",
       "def": "Retard qu'une tâche peut subir sans retarder la fin du projet."
      },
      {
       "terme": "Mise en tôle",
       "def": "Placement des pièces à découper sur un format de tôle."
      },
      {
       "terme": "Taux d'utilisation matière",
       "def": "Rapport entre la matière utile et la matière consommée."
      },
      {
       "terme": "Coût de revient",
       "def": "Total des dépenses engagées pour produire un élément."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Procédés de réalisation",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btci-decoupe-formage",
     "titre": "Procédés de découpe et de formage : choix et capabilité des machines",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Comparer les procédés de découpe thermique, mécanique et par jet d'eau selon la matière, l'épaisseur et la qualité attendue.",
      "Expliquer la mise en position d'une tôle et d'une pièce sur une machine de découpe ou de formage.",
      "Choisir l'ouverture de matrice et estimer la force de pliage sur presse plieuse.",
      "Décrire le roulage, le cintrage et l'emboutissage et leurs défauts caractéristiques.",
      "Apprécier la capabilité d'une machine vis-à-vis d'une tolérance."
     ],
     "sections": [
      {
       "titre": "Les procédés de découpe",
       "contenu": "\n<p>Le choix d'un procédé de découpe dépend de la <strong>matière</strong>, de l'<strong>épaisseur</strong>, de la <strong>précision</strong>, de l'<strong>état de coupe</strong> attendu (bavure, oxydation, zone affectée thermiquement) et de la <strong>quantité</strong>.</p>\n<table>\n<thead><tr><th>Procédé</th><th>Principe</th><th>Matières</th><th>Atouts</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Oxycoupage</td><td>Chauffage à l'ignition puis combustion du fer dans un jet d'oxygène</td><td>Aciers non alliés et faiblement alliés uniquement</td><td>Très fortes épaisseurs, faible coût d'équipement</td><td>Lent en faible épaisseur, ne coupe ni l'inox ni l'aluminium, déformations</td></tr>\n<tr><td>Plasma</td><td>Arc électrique constricté qui fond le métal, chassé par le gaz</td><td>Tous métaux conducteurs</td><td>Rapide en épaisseur moyenne, polyvalent</td><td>Légère dépouille des bords, zone affectée thermiquement, bruit et fumées</td></tr>\n<tr><td>Laser</td><td>Faisceau concentré qui fond ou vaporise le métal, avec gaz d'assistance</td><td>Aciers, inox, aluminium, cuivreux selon la source</td><td>Grande précision, saignée fine, petits détails</td><td>Épaisseur limitée selon la puissance, investissement élevé</td></tr>\n<tr><td>Jet d'eau abrasif</td><td>Jet à très haute pression chargé d'abrasif</td><td>Presque tous matériaux</td><td>Aucun échauffement, pas de zone affectée</td><td>Lent, coût de l'abrasif, léger défaut de perpendicularité</td></tr>\n<tr><td>Cisaillage</td><td>Séparation par deux lames qui glissent l'une contre l'autre</td><td>Tôles minces et moyennes</td><td>Très rapide, pas de perte de matière</td><td>Coupes droites seulement, bavure, déformation des bandes étroites</td></tr>\n<tr><td>Poinçonnage, grugeage</td><td>Cisaillement localisé par un poinçon et une matrice</td><td>Tôles minces</td><td>Cadence élevée, formes répétitives, formes embouties locales</td><td>Outils nécessaires, épaisseur limitée</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un bord découpé thermiquement présente une zone affectée thermiquement, parfois durcie et oxydée. Lorsqu'il doit être soudé, le mode opératoire peut imposer un meulage préalable ; lorsqu'il doit être plié, la dureté du bord peut provoquer des criques.</div>"
      },
      {
       "titre": "Mettre la pièce en position",
       "contenu": "\n<p>Sur toute machine, la pièce doit occuper une position <strong>définie et répétable</strong>. La notion d'<strong>isostatisme</strong> s'applique : un solide possède six degrés de liberté (trois translations, trois rotations) qu'il faut supprimer par des appuis bien choisis, sans appui superflu qui créerait une incertitude.</p>\n<ul>\n<li>Sur une table de découpe, la tôle repose sur des lattes (trois rotations et une translation fixées par le plan de la table) ; sa position dans le plan est obtenue par palpage de deux bords ou par détection de l'origine, et la commande numérique corrige l'éventuel défaut d'équerrage.</li>\n<li>Sur une presse plieuse, la tôle repose sur la matrice et vient en butée contre les <strong>butées arrière</strong> : la cote de pli dépend directement de leur position et de la référence choisie.</li>\n<li>Sur une cintreuse à galets ou à mandrin, le tube est repéré angulairement pour que les cintrages successifs soient dans les bons plans.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur une pièce à plusieurs plis, prendre la butée sur un bord déjà plié fait cumuler les écarts de chaque pli. L'ordre des plis et le choix des faces de butée se décident en même temps que la cotation fonctionnelle : on prend la butée, chaque fois que possible, sur la face qui porte la cote importante.</div>"
      },
      {
       "titre": "Le pliage sur presse plieuse",
       "contenu": "\n<p>Le <strong>pliage en l'air</strong> est le mode le plus courant : le poinçon enfonce la tôle dans une matrice en V sans la plaquer au fond. L'angle obtenu dépend de la profondeur de pénétration, ce qui permet de réaliser plusieurs angles avec un même outillage. Les paramètres principaux sont :</p>\n<ul>\n<li>l'<strong>ouverture de matrice</strong> V, choisie habituellement entre 6 et 12 fois l'épaisseur (souvent V ≈ 8 × e pour l'acier courant) ;</li>\n<li>le <strong>rayon intérieur</strong> obtenu, qui dépend surtout de V (de l'ordre de V/6 à V/7 en pliage en l'air) et non du rayon du poinçon, tant que celui-ci est plus petit ;</li>\n<li>le <strong>bord minimal</strong> pliable, d'environ 0,7 × V, car la tôle doit reposer sur les deux épaulements de la matrice ;</li>\n<li>le <strong>retour élastique</strong> : après relâchement, la tôle s'ouvre de quelques degrés ; la commande numérique ou l'opérateur compense en pliant plus.</li>\n</ul>\n<p>La force nécessaire pour un pli en l'air sur une longueur L s'estime par la formule pratique : <strong>F ≈ 1,33 × R<sub>m</sub> × L × e<sup>2</sup> / V</strong> (F en N, R<sub>m</sub> en MPa, longueurs en mm). Les abaques du constructeur de la presse donnent directement la force par mètre de pli et prévalent sur ce calcul.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pli de 2 500 mm de long dans une tôle S235JR de 4 mm (R<sub>m</sub> pris à 400 MPa), sur une presse de 1 000 kN. 1) Choisir V ≈ 8 × 4 = 32 mm. 2) F ≈ 1,33 × 400 × 2 500 × 16 / 32 = 665 000 N, soit 665 kN. 3) Comparer à la capacité : 665 kN pour 1 000 kN, la presse convient, à condition de respecter la charge admissible par mètre de l'outillage. 4) Vérifier le bord minimal : 0,7 × 32 ≈ 22 mm. 5) Prévoir le rayon intérieur obtenu, environ 5 mm, et l'intégrer dans le calcul du développé.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la force de pliage varie comme le carré de l'épaisseur et à l'inverse de l'ouverture de matrice. Plier une tôle deux fois plus épaisse dans la même matrice demande quatre fois plus de force, et un pli réalisé sur une longueur courte au centre de la presse peut dépasser la charge admissible par mètre et endommager les outils ou le tablier.</div>"
      },
      {
       "titre": "Roulage, cintrage et emboutissage",
       "contenu": "\n<p>Le <strong>roulage</strong> transforme une tôle plane en virole cylindrique ou conique sur une <strong>rouleuse</strong> à trois ou quatre rouleaux. Les extrémités de la tôle, qui ne peuvent pas passer entre les rouleaux de façon complète, restent planes : on les <strong>croque</strong> (préforme) avant de rouler, sur la rouleuse elle-même pour les machines à quatre rouleaux ou sur une presse. Les défauts typiques sont les extrémités plates (méplat au joint), la forme en tonneau ou en diabolo (mauvais parallélisme des rouleaux) et le décalage des bords.</p>\n<p>Le <strong>cintrage</strong> courbe un tube ou un profilé. Le tube cintré tend à s'ovaliser et à s'amincir à l'extrados tandis que l'intrados s'épaissit et peut plisser. Le cintrage à froid sur mandrin limite ces défauts. Les rayons minimaux se lisent dans les tables des fabricants de cintreuses et dans les codes de tuyauterie.</p>\n<p>L'<strong>emboutissage</strong> déforme une tôle dans une matrice pour obtenir une forme creuse (fonds de capacités, coupelles). Il s'accompagne d'amincissements locaux, qui doivent être pris en compte dans l'épaisseur de commande des fonds sous pression. Les fonds emboutis sont en général achetés à des fabricants spécialisés, qui garantissent l'épaisseur minimale après formage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour un appareil à pression, le code de construction encadre le formage à froid : au-delà d'un certain taux de déformation, un traitement thermique ou des essais complémentaires peuvent être exigés. Le technicien vérifie donc avec le bureau d'études qu'un rayon de roulage ou de cintrage demandé reste dans le domaine autorisé.</div>"
      },
      {
       "titre": "La capabilité d'une machine",
       "contenu": "\n<p>Une machine est dite <strong>capable</strong> pour une tolérance donnée si la dispersion naturelle de ses résultats est nettement plus petite que l'intervalle de tolérance. On évalue cette dispersion en fabriquant une série de pièces dans des conditions stables et en mesurant la caractéristique.</p>\n<p>L'indicateur le plus simple est le rapport entre l'intervalle de tolérance IT et la dispersion de la machine, souvent prise égale à 6 fois l'écart-type σ des mesures : <strong>C<sub>m</sub> = IT / (6 σ)</strong>. On exige couramment C<sub>m</sub> ≥ 1,33 ; on tient compte aussi du centrage avec l'indicateur C<sub>mk</sub>.</p>\n<table>\n<thead><tr><th>Machine</th><th>Ordre de grandeur de la précision de positionnement</th><th>Cote à tenir</th><th>Conclusion</th></tr></thead>\n<tbody>\n<tr><td>Laser à commande numérique</td><td>Quelques centièmes de mm</td><td>± 0,2 mm sur un contour</td><td>Capable</td></tr>\n<tr><td>Plasma à commande numérique</td><td>Quelques dixièmes de mm selon épaisseur</td><td>± 0,2 mm</td><td>Probablement non capable : prévoir un usinage</td></tr>\n<tr><td>Presse plieuse à commande numérique</td><td>Butées au centième, angle à quelques dixièmes de degré selon matière</td><td>± 0,5 mm sur une cote de pli</td><td>Capable si l'ordre de pliage est maîtrisé</td></tr>\n</tbody>\n</table>\n<p>Les valeurs indicatives de ce tableau varient selon les machines ; c'est l'essai sur la machine de l'atelier qui tranche. Les autres critères de choix d'une machine sont le nombre d'axes pilotés, la répétabilité, la gestion automatique des outils et le coût horaire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la capabilité compare ce que la machine sait faire à ce que le plan exige. Une tolérance plus serrée que la capabilité impose soit une autre machine, soit une opération supplémentaire, soit une discussion avec le bureau d'études sur le besoin réel.</div>"
      }
     ],
     "points_cles": [
      "L'oxycoupage ne coupe que les aciers non alliés et faiblement alliés ; le plasma coupe tous les métaux conducteurs.",
      "Laser : précision et finesse ; jet d'eau : aucun échauffement ; cisaillage et poinçonnage : cadence en faible épaisseur.",
      "La mise en position supprime les six degrés de liberté sans appui superflu ; la butée se prend sur la face fonctionnelle.",
      "En pliage en l'air, V ≈ 8 × e, rayon intérieur ≈ V/6 à V/7, bord minimal ≈ 0,7 × V.",
      "Force de pliage estimée : F ≈ 1,33 × Rm × L × e² / V ; l'abaque du constructeur prévaut.",
      "Le roulage nécessite un croquage des extrémités ; le cintrage ovalise et amincit l'extrados.",
      "Le formage à froid des parties sous pression est encadré par le code de construction.",
      "Une machine est capable si Cm = IT/(6σ) est au moins de l'ordre de 1,33."
     ],
     "lexique": [
      {
       "terme": "Saignée",
       "def": "Largeur de matière enlevée par un procédé de découpe."
      },
      {
       "terme": "Zone affectée thermiquement",
       "def": "Zone du métal de base modifiée par la chaleur sans avoir fondu."
      },
      {
       "terme": "Isostatisme",
       "def": "Mise en position d'une pièce par suppression juste suffisante de ses six degrés de liberté."
      },
      {
       "terme": "Pliage en l'air",
       "def": "Pliage dans une matrice en V sans plaquer la tôle au fond, l'angle dépendant de la pénétration."
      },
      {
       "terme": "Ouverture de matrice (V)",
       "def": "Largeur de l'ouverture du V de la matrice de pliage."
      },
      {
       "terme": "Retour élastique",
       "def": "Ouverture partielle d'un pli après relâchement de l'effort."
      },
      {
       "terme": "Rouleuse",
       "def": "Machine à trois ou quatre rouleaux qui cintre les tôles en viroles."
      },
      {
       "terme": "Cintrage",
       "def": "Mise en courbe d'un tube ou d'un profilé."
      },
      {
       "terme": "Emboutissage",
       "def": "Formage d'une tôle dans une matrice pour obtenir une forme creuse."
      },
      {
       "terme": "Capabilité",
       "def": "Aptitude d'une machine à respecter une tolérance, mesurée par un indicateur comme Cm."
      }
     ]
    },
    {
     "id": "btci-procedes-soudage",
     "titre": "Les procédés de soudage et leurs paramètres",
     "niveau": "1re",
     "duree": 50,
     "objectifs": [
      "Identifier les procédés de soudage par leur numéro normalisé (NF EN ISO 4063).",
      "Expliquer le fonctionnement de l'arc et le rôle du générateur, du type de courant et de la polarité.",
      "Distinguer paramètres fixés et paramètres variables pour l'électrode enrobée, le TIG et le soudage semi-automatique.",
      "Reconnaître les modes de transfert en MIG-MAG et leurs domaines d'emploi.",
      "Calculer l'énergie de soudage à partir des paramètres relevés.",
      "Situer le soudage par résistance et les installations mécanisées ou robotisées."
     ],
     "sections": [
      {
       "titre": "L'arc électrique et le générateur",
       "contenu": "\n<p>Dans le <strong>soudage à l'arc</strong>, un arc électrique entre une électrode et la pièce fournit la chaleur qui fond localement les bords et éventuellement le métal d'apport, formant un <strong>bain de fusion</strong> qui se solidifie en <strong>cordon</strong>. Le bain doit être protégé de l'air, dont l'oxygène et l'azote fragiliseraient le métal : cette protection est assurée par un laitier, un gaz ou un flux.</p>\n<p>Le <strong>générateur</strong> transforme le courant du réseau en courant de soudage (forte intensité, faible tension). On distingue :</p>\n<ul>\n<li>les générateurs à <strong>caractéristique plongeante</strong> (intensité quasi constante), utilisés en électrode enrobée et en TIG : l'intensité reste stable malgré les variations de longueur d'arc dues à la main du soudeur ;</li>\n<li>les générateurs à <strong>caractéristique plate</strong> (tension quasi constante), utilisés en MIG-MAG : l'arc s'autorégule, la vitesse de fil fixant l'intensité.</li>\n</ul>\n<p>Le <strong>type de courant</strong> est le courant continu (le plus courant) ou alternatif (TIG de l'aluminium, pour décaper la couche d'alumine). En courant continu, la <strong>polarité</strong> se choisit : électrode au pôle négatif en TIG (pour ne pas surchauffer l'électrode de tungstène), électrode au pôle positif en MIG-MAG et pour la plupart des électrodes basiques.</p>\n<p>Le <strong>facteur de marche</strong> d'un générateur indique la proportion du temps (sur un cycle de 10 minutes) pendant laquelle il peut débiter une intensité donnée sans surchauffe : 60 % à 300 A signifie 6 minutes de soudage sur 10 à cette intensité.</p>"
      },
      {
       "titre": "Les procédés et leur numéro",
       "contenu": "\n<p>La norme NF EN ISO 4063 attribue un numéro à chaque procédé ; c'est ce numéro qui figure sur les plans, les modes opératoires et les certificats de soudeurs.</p>\n<table>\n<thead><tr><th>N°</th><th>Procédé</th><th>Protection</th><th>Usages typiques en chaudronnerie</th></tr></thead>\n<tbody>\n<tr><td>111</td><td>Soudage à l'arc avec électrode enrobée</td><td>Laitier et gaz issus de l'enrobage</td><td>Chantier, réparation, toutes positions, extérieur</td></tr>\n<tr><td>121</td><td>Soudage à l'arc submergé avec fil</td><td>Flux en poudre</td><td>Joints longs et épais de viroles, en atelier, à plat</td></tr>\n<tr><td>131</td><td>MIG (gaz inerte) avec fil plein</td><td>Argon ou mélange inerte</td><td>Aluminium</td></tr>\n<tr><td>135</td><td>MAG (gaz actif) avec fil plein</td><td>Argon + CO<sub>2</sub>, CO<sub>2</sub></td><td>Acier non allié, structures, productivité en atelier</td></tr>\n<tr><td>136</td><td>MAG avec fil fourré de flux</td><td>Gaz actif + laitier</td><td>Fortes épaisseurs, positions, taux de dépôt élevé</td></tr>\n<tr><td>138</td><td>MAG avec fil fourré de poudre métallique</td><td>Gaz actif</td><td>Productivité, peu de laitier</td></tr>\n<tr><td>141</td><td>TIG avec métal d'apport en baguette ou fil</td><td>Argon (parfois hélium)</td><td>Inox, faibles épaisseurs, passes de racine, tuyauterie</td></tr>\n<tr><td>21 / 22</td><td>Soudage par résistance par points / à la molette</td><td>Sans protection, pas d'apport</td><td>Tôlerie fine, recouvrements</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une tuyauterie inox ou acier sous pression, on combine souvent deux procédés : passe de racine en TIG (141), pour une pénétration régulière et un envers propre, puis remplissage en électrode enrobée (111) ou en MAG (135, 136) pour gagner en productivité. Le mode opératoire indique alors « 141/111 » ou « 141/135 ».</div>"
      },
      {
       "titre": "Électrode enrobée et TIG",
       "contenu": "\n<p>En <strong>électrode enrobée (111)</strong>, l'électrode est à la fois conducteur, métal d'apport et source de protection. L'enrobage, rutile (facile à souder, bel aspect) ou basique (bonnes caractéristiques mécaniques, faible teneur en hydrogène), détermine l'usage. Les paramètres <strong>fixés</strong> avant soudage sont le type et le diamètre d'électrode, l'intensité, le type de courant et la polarité ; les paramètres <strong>variables</strong>, à la main du soudeur, sont la longueur d'arc, l'inclinaison de l'électrode, la vitesse d'avance et le balayage. Une règle d'atelier donne une intensité de l'ordre de 35 à 45 A par millimètre de diamètre pour une électrode rutile à plat, à ajuster selon la position et la fiche du fabricant.</p>\n<p>En <strong>TIG (141)</strong>, l'arc jaillit entre une électrode de <strong>tungstène</strong> non fusible et la pièce, sous protection d'argon. Le métal d'apport, s'il y en a, est amené séparément. Les réglages comprennent l'intensité, le type de courant, le diamètre et l'affûtage de l'électrode, le débit de gaz, la taille de la buse et les temps de pré-gaz et post-gaz. Les générateurs modernes ajoutent l'amorçage haute fréquence, la montée et l'évanouissement progressifs de l'intensité, et le courant pulsé.</p>\n<p>Sur l'inox et sur les tubes, la <strong>protection envers</strong> est indispensable : on remplit l'intérieur du tube d'argon ou d'un mélange azote-hydrogène (gaz de protection envers) à l'aide de bouchons ou de ballons, pour éviter l'oxydation de la racine, qui ferait perdre la résistance à la corrosion.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une racine inox oxydée (aspect noir et granuleux, souvent appelé « sucre ») est un défaut, même si la soudure est étanche : la couche passive est détruite et la corrosion démarrera là. Le contrôle visuel de l'envers fait partie de la réception des soudures de tuyauterie inox.</div>"
      },
      {
       "titre": "Le soudage semi-automatique et les modes de transfert",
       "contenu": "\n<p>En <strong>MIG-MAG</strong>, un fil électrode est dévidé en continu à travers une torche ; il fond dans l'arc et le gaz protège le bain. Les paramètres fixés sont la nature et le diamètre du fil, le gaz et son débit, la tension, la vitesse de fil (qui fixe l'intensité) et la longueur terminale du fil (distance tube contact-pièce). Les modes de transfert du métal dans l'arc dépendent principalement de l'intensité et de la tension.</p>\n<table>\n<thead><tr><th>Mode de transfert</th><th>Réglage</th><th>Caractéristiques</th><th>Emploi</th></tr></thead>\n<tbody>\n<tr><td>Court-circuit</td><td>Faible intensité et faible tension</td><td>Le fil touche le bain à grande fréquence ; énergie faible, bain froid</td><td>Tôles minces, passes de racine, toutes positions</td></tr>\n<tr><td>Globulaire</td><td>Intensité et tension intermédiaires</td><td>Grosses gouttes irrégulières, projections</td><td>Généralement à éviter</td></tr>\n<tr><td>Pulvérisation axiale</td><td>Forte intensité, tension élevée, gaz riche en argon</td><td>Fines gouttes projetées dans l'axe, forte pénétration</td><td>Fortes épaisseurs, à plat et en angle à plat</td></tr>\n<tr><td>Arc pulsé</td><td>Intensité alternant entre fond et pic</td><td>Une goutte détachée par impulsion, peu de projections</td><td>Inox, aluminium, positions</td></tr>\n</tbody>\n</table>\n<p>Les générateurs <strong>synergiques</strong> ajustent automatiquement la tension et les paramètres de pulsation en fonction de la vitesse de fil choisie, selon des programmes fournis pour chaque couple fil-gaz.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en MAG, la vitesse de fil commande l'intensité et la tension commande la longueur d'arc. Un arc qui crépite et projette avec des collages signale le plus souvent une tension trop faible pour la vitesse de fil ; un arc long et instable, une tension trop forte.</div>"
      },
      {
       "titre": "L'énergie de soudage",
       "contenu": "\n<p>L'<strong>énergie de soudage</strong> (ou apport de chaleur) mesure la quantité de chaleur introduite par unité de longueur de cordon. Elle conditionne la vitesse de refroidissement, donc la structure métallurgique de la zone soudée, ainsi que les déformations. On la calcule par :</p>\n<p><strong>Q = k × U × I / v</strong></p>\n<p>avec U la tension d'arc (V), I l'intensité (A), v la vitesse de soudage (mm/s) et k le <strong>rendement thermique</strong> du procédé : 1,0 pour l'arc submergé (121), 0,8 pour l'électrode enrobée (111) et le MIG-MAG (13x), 0,6 pour le TIG (141). Q est alors en J/mm ; on divise par 1 000 pour obtenir des kJ/mm.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> passe de remplissage en MAG 135 relevée au pupitre : U = 24 V, I = 200 A ; le soudeur réalise 300 mm de cordon en 60 s. 1) Vitesse : v = 300 / 60 = 5 mm/s. 2) Énergie de l'arc : U × I / v = 24 × 200 / 5 = 960 J/mm. 3) Application du rendement : Q = 0,8 × 960 = 768 J/mm, soit 0,77 kJ/mm. 4) Comparaison au mode opératoire : s'il impose une plage de 0,6 à 1,2 kJ/mm pour cette passe, la valeur est conforme. 5) Si le soudeur ralentissait de moitié avec les mêmes réglages, Q doublerait et sortirait de la plage.</div>\n<p>En pratique, les mesures de U et I se font au plus près de l'arc avec un appareil adapté, et la vitesse se mesure au chronomètre sur une longueur repérée, ou s'obtient automatiquement sur les installations mécanisées.</p>"
      },
      {
       "titre": "Soudage par résistance et installations automatisées",
       "contenu": "\n<p>Le <strong>soudage par résistance</strong> fait passer un courant très intense entre deux électrodes en cuivre qui serrent les tôles : la chaleur dégagée par effet Joule au contact des tôles forme un noyau fondu. Le soudage <strong>par points (21)</strong> crée des points isolés ; le soudage <strong>à la molette (22)</strong>, avec des électrodes en forme de roues, crée une ligne continue étanche. Les paramètres sont l'effort de serrage, l'intensité et le temps de passage. Le procédé impose un assemblage à recouvrement, un accès des deux côtés et des tôles minces ; il ne laisse ni apport ni fumées importantes.</p>\n<p>Les <strong>installations mécanisées</strong> (tracteur de soudage, chariot sur rail, banc à virole avec potence et vireurs) déplacent la torche ou la pièce à vitesse constante ; elles sont classiques pour l'arc submergé des joints circulaires de viroles. Les <strong>cellules robotisées</strong> soudent en MAG ou TIG des sous-ensembles répétitifs, positionnés sur des positionneurs pilotés en coordination avec le robot.</p>\n<table>\n<thead><tr><th>Mode d'exécution</th><th>Rôle de l'opérateur</th></tr></thead>\n<tbody>\n<tr><td>Manuel</td><td>Tient la torche ou la pince et règle tous les paramètres variables</td></tr>\n<tr><td>Semi-automatique</td><td>Tient la torche ; le fil est amené automatiquement</td></tr>\n<tr><td>Mécanisé</td><td>Surveille et corrige ; la torche est déplacée mécaniquement</td></tr>\n<tr><td>Automatique / robotisé</td><td>Programme, prépare, charge et surveille ; aucune intervention pendant le soudage</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un robot, la qualité dépend d'abord de la régularité des pièces : un écartement ou une position de joint qui varie de quelques millimètres suffit à rater la soudure. Les capteurs de suivi de joint compensent une partie de ces écarts, mais la précision du débit, du formage et du pointage reste déterminante.</div>"
      }
     ],
     "points_cles": [
      "Le numéro ISO 4063 désigne le procédé : 111, 121, 131, 135, 136, 138, 141, 21, 22.",
      "Électrode enrobée et TIG utilisent un générateur à intensité constante ; le MIG-MAG un générateur à tension constante.",
      "Le TIG se soude électrode au pôle négatif ; le MIG-MAG électrode au pôle positif.",
      "Sur inox et tubes, la protection envers évite l'oxydation de la racine.",
      "Modes de transfert MIG-MAG : court-circuit, globulaire, pulvérisation axiale, pulsé.",
      "Énergie de soudage : Q = k × U × I / v, avec k = 1 (121), 0,8 (111, 13x), 0,6 (141).",
      "Le soudage par résistance assemble des tôles minces à recouvrement, sans apport.",
      "Les installations mécanisées et robotisées exigent des pièces régulières et bien préparées."
     ],
     "lexique": [
      {
       "terme": "Bain de fusion",
       "def": "Volume de métal liquide créé par la source de chaleur pendant le soudage."
      },
      {
       "terme": "Caractéristique plongeante",
       "def": "Comportement d'un générateur qui maintient l'intensité presque constante."
      },
      {
       "terme": "Polarité",
       "def": "Branchement de l'électrode au pôle positif ou négatif en courant continu."
      },
      {
       "terme": "Facteur de marche",
       "def": "Pourcentage d'un cycle de 10 minutes pendant lequel un générateur peut souder à une intensité donnée."
      },
      {
       "terme": "Protection envers",
       "def": "Gaz introduit côté racine pour la protéger de l'oxydation."
      },
      {
       "terme": "Mode de transfert",
       "def": "Manière dont le métal fondu passe du fil au bain en MIG-MAG."
      },
      {
       "terme": "Synergie",
       "def": "Réglage automatique des paramètres d'arc en fonction de la vitesse de fil choisie."
      },
      {
       "terme": "Énergie de soudage",
       "def": "Chaleur apportée par unité de longueur de cordon, en kJ/mm."
      },
      {
       "terme": "Rendement thermique (k)",
       "def": "Part de l'énergie de l'arc effectivement transmise à la pièce, propre à chaque procédé."
      },
      {
       "terme": "Soudage à la molette",
       "def": "Soudage par résistance en ligne continue avec des électrodes en forme de roues."
      }
     ]
    },
    {
     "id": "btci-joints-metallurgie-qualification",
     "titre": "Préparation des joints, métallurgie, déformations et qualification en soudage",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Choisir une préparation de joint et une position de soudage normalisées.",
      "Décrire les zones d'un joint soudé et les risques métallurgiques associés.",
      "Prévoir et limiter les retraits et déformations par la conception, le bridage et les séquences.",
      "Distinguer DMOS, QMOS et qualification de soudeur et situer leurs normes.",
      "Expliquer le rôle du cahier de soudage dans la traçabilité."
     ],
     "sections": [
      {
       "titre": "Types d'assemblages et préparations de bords",
       "contenu": "\n<p>Le <strong>type d'assemblage</strong> décrit la position relative des pièces : bout à bout, en T, en angle extérieur, à clin (recouvrement), sur chant. La <strong>préparation</strong> décrit la forme donnée aux bords pour permettre la pénétration. Les préparations recommandées pour les aciers sont décrites dans la NF EN ISO 9692-1.</p>\n<table>\n<thead><tr><th>Préparation</th><th>Épaisseurs indicatives</th><th>Paramètres géométriques</th><th>Remarques</th></tr></thead>\n<tbody>\n<tr><td>Bords droits (I)</td><td>Faibles épaisseurs, quelques mm selon procédé</td><td>Écartement</td><td>Aucun chanfrein</td></tr>\n<tr><td>V</td><td>Environ 3 à 20 mm, soudé d'un côté</td><td>Angle d'ouverture (souvent 60°), talon, écartement</td><td>Déformation angulaire marquée</td></tr>\n<tr><td>X (double V)</td><td>Fortes épaisseurs, accès des deux côtés</td><td>Angles, talon central, écartement</td><td>Volume déposé réduit, déformation équilibrée</td></tr>\n<tr><td>U ou double U</td><td>Très fortes épaisseurs</td><td>Rayon de fond, angle</td><td>Usinage nécessaire, faible volume déposé</td></tr>\n<tr><td>Demi-V (biseau), K</td><td>Assemblages en T à pénétration</td><td>Angle (souvent 45° à 50°), talon</td><td>Seule une pièce est chanfreinée</td></tr>\n</tbody>\n</table>\n<p>Le <strong>talon</strong> (méplat non chanfreiné) évite l'effondrement du bain en racine ; l'<strong>écartement</strong> permet la pénétration ; l'<strong>angle</strong> donne l'accès à l'électrode ou à la torche. Les valeurs à respecter sont celles du mode opératoire.</p>\n<p>Le <strong>pointage</strong> maintient les pièces avant soudage. Les points sont réalisés par un soudeur qualifié, avec le même procédé et les mêmes précautions (préchauffage éventuel) que la soudure finale ; ils sont soit refondus dans le cordon, soit meulés.</p>"
      },
      {
       "titre": "Les positions de soudage",
       "contenu": "\n<p>La NF EN ISO 6947 désigne les positions par des lettres. La position la plus favorable est toujours celle à plat ; on utilise des <strong>positionneurs</strong> et des <strong>vireurs</strong> pour y ramener le joint chaque fois que possible.</p>\n<table>\n<thead><tr><th>Code</th><th>Position</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>PA</td><td>À plat</td><td>Bout à bout horizontal soudé par-dessus</td></tr>\n<tr><td>PB</td><td>En angle à plat (horizontale en angle)</td><td>Soudure d'angle d'un T posé à plat</td></tr>\n<tr><td>PC</td><td>En corniche</td><td>Joint horizontal sur une paroi verticale</td></tr>\n<tr><td>PD</td><td>En angle au plafond</td><td>Soudure d'angle sous un plancher</td></tr>\n<tr><td>PE</td><td>Au plafond</td><td>Bout à bout soudé par-dessous</td></tr>\n<tr><td>PF</td><td>Verticale montante</td><td>Joint vertical soudé de bas en haut</td></tr>\n<tr><td>PG</td><td>Verticale descendante</td><td>Joint vertical soudé de haut en bas</td></tr>\n<tr><td>H-L045 / J-L045</td><td>Tube incliné à 45°, soudage montant / descendant</td><td>Position de qualification couvrant de nombreux cas de tuyauterie</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un tube fixe à axe horizontal, le soudeur passe successivement par toutes les positions (plafond, verticale, à plat) sur un même joint. C'est pourquoi les qualifications en tube fixe couvrent de nombreuses positions et sont les plus recherchées en tuyauterie.</div>"
      },
      {
       "titre": "La métallurgie du joint soudé",
       "contenu": "\n<p>Un joint soudé comprend plusieurs zones aux propriétés différentes :</p>\n<ul>\n<li>la <strong>zone fondue</strong> (ZF), où le métal de base et le métal d'apport ont été liquides puis se sont solidifiés ; sa composition dépend de la <strong>dilution</strong>, c'est-à-dire de la part de métal de base fondu dans le cordon ;</li>\n<li>la <strong>zone de liaison</strong>, frontière entre zone fondue et métal de base ;</li>\n<li>la <strong>zone affectée thermiquement</strong> (ZAT), chauffée à haute température sans fondre, où la structure a pu changer (grossissement du grain, durcissement) ;</li>\n<li>le <strong>métal de base</strong> non affecté.</li>\n</ul>\n<p>Le <strong>cycle thermique</strong> subi par chaque point (montée rapide en température, maintien très court, refroidissement) dépend de l'énergie de soudage, de l'épaisseur, de la température initiale de la pièce et de la géométrie du joint. Un refroidissement trop rapide d'un acier trempant donne une ZAT dure et fragile ; combiné à l'hydrogène et aux contraintes résiduelles, il provoque la <strong>fissuration à froid</strong>. On la prévient par le <strong>préchauffage</strong>, la maîtrise de l'énergie de soudage, les produits d'apport à bas hydrogène et, si nécessaire, un maintien en température après soudage (post-chauffage).</p>\n<p>La <strong>température entre passes</strong> est la température de la zone de soudage au moment de commencer la passe suivante. Le mode opératoire en fixe souvent un maximum (pour l'inox austénitique, afin de limiter la sensibilisation, et pour préserver la résilience des aciers) et parfois un minimum (égal au préchauffage).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une fissure à froid peut apparaître plusieurs heures après la fin du soudage. Pour les aciers sensibles, les codes imposent un délai avant le contrôle non destructif final ; un contrôle fait trop tôt peut déclarer conforme une soudure qui fissurera ensuite.</div>"
      },
      {
       "titre": "Retraits, déformations et contraintes résiduelles",
       "contenu": "\n<p>Le métal chauffé se dilate, puis se contracte en refroidissant ; comme il est bridé par le métal froid qui l'entoure, il subit des <strong>retraits</strong> qui déforment la pièce et laissent des <strong>contraintes résiduelles</strong>. On distingue le retrait longitudinal (raccourcissement le long du cordon, qui courbe les poutres), le retrait transversal (rapprochement des pièces) et la <strong>déformation angulaire</strong> (fermeture de l'angle d'un assemblage en V ou en T).</p>\n<table>\n<thead><tr><th>Moyen de maîtrise</th><th>Principe</th></tr></thead>\n<tbody>\n<tr><td>Conception</td><td>Limiter le volume de métal déposé (gorge juste suffisante, préparation en X plutôt qu'en V), placer les cordons symétriquement par rapport à l'axe neutre</td></tr>\n<tr><td>Prédéformation</td><td>Pointer les pièces avec un angle inverse de la déformation attendue</td></tr>\n<tr><td>Bridage</td><td>Maintenir les pièces par serre-joints, gabarits, raidisseurs provisoires, au prix de contraintes résiduelles plus élevées</td></tr>\n<tr><td>Séquence de soudage</td><td>Souder alternativement de chaque côté (X), du centre vers les extrémités, par pas de pèlerin sur les grandes longueurs</td></tr>\n<tr><td>Paramètres</td><td>Limiter l'énergie de soudage, préférer des procédés concentrés</td></tr>\n<tr><td>Correction</td><td>Redressage mécanique à la presse, ou redressage par chaudes de retrait, dans les limites admises pour la matière</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> souder un raidisseur en T de 2 m sur une tôle de 8 mm sans la cintrer. 1) Pointer le raidisseur au gabarit, avec des points tous les 150 mm environ, symétriques des deux côtés. 2) Brider la tôle sur le marbre. 3) Souder les deux cordons d'angle alternativement, par tronçons de 200 mm en pas de pèlerin, en partant du milieu. 4) Laisser refroidir avant débridage. 5) Mesurer la flèche à la règle et comparer à la tolérance de rectitude ; corriger si nécessaire. Les contraintes résiduelles subsistent : elles peuvent jouer sur la tenue en fatigue des pièces soumises à des efforts variables, d'où l'importance de soigner la forme des raccordements de cordons dans ces zones.</div>"
      },
      {
       "titre": "Modes opératoires et qualifications",
       "contenu": "\n<p>Pour les ouvrages soumis à un code ou à une norme d'exécution, on ne soude pas « au jugé » : chaque soudure est réalisée selon un <strong>descriptif de mode opératoire de soudage</strong> (DMOS, en anglais WPS), qualifié, par un soudeur lui-même qualifié.</p>\n<table>\n<thead><tr><th>Document</th><th>Rôle</th><th>Norme de référence (acier)</th></tr></thead>\n<tbody>\n<tr><td>DMOS-P (préliminaire)</td><td>Proposition de mode opératoire avant qualification</td><td>NF EN ISO 15609-1 (format)</td></tr>\n<tr><td>QMOS (procès-verbal de qualification du mode opératoire, WPQR)</td><td>Démontre, par un assemblage d'essai soudé puis contrôlé et essayé, que le mode opératoire donne les propriétés requises</td><td>NF EN ISO 15614-1</td></tr>\n<tr><td>DMOS</td><td>Instruction de soudage donnée au soudeur, couverte par un QMOS, dans son domaine de validité</td><td>NF EN ISO 15609-1</td></tr>\n<tr><td>Certificat de qualification de soudeur</td><td>Atteste que le soudeur sait réaliser une soudure saine dans un domaine donné (procédé, matériau, épaisseur, diamètre, position)</td><td>NF EN ISO 9606-1</td></tr>\n<tr><td>Qualification d'opérateur</td><td>Équivalent pour les installations mécanisées et robotisées</td><td>NF EN ISO 14732</td></tr>\n</tbody>\n</table>\n<p>Chaque qualification a un <strong>domaine de validité</strong> : un soudeur qualifié sur tôle de 10 mm en position PF avec le procédé 135 n'est pas automatiquement qualifié pour le TIG sur tube en position H-L045. La validité du certificat de soudeur est confirmée périodiquement par l'employeur (tous les six mois, attestant que le soudeur a soudé dans le domaine) et prolongée selon l'une des options prévues par la norme.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le <strong>cahier de soudage</strong> d'un équipement regroupe la liste des joints avec, pour chacun, le DMOS appliqué, le soudeur (par son poinçon ou son code), les contrôles réalisés et leurs résultats. C'est la pièce centrale de la traçabilité exigée par les codes : en cas de défaut découvert en service, il permet de retrouver tout l'historique du joint.</div>"
      }
     ],
     "points_cles": [
      "Les préparations normalisées (NF EN ISO 9692-1) se définissent par l'angle, le talon et l'écartement.",
      "Les positions ISO 6947 : PA, PB, PC, PD, PE, PF, PG, et H-L045/J-L045 pour les tubes inclinés.",
      "Un joint soudé comprend zone fondue, zone de liaison, ZAT et métal de base.",
      "La fissuration à froid associe structure dure, hydrogène et contraintes ; on la prévient par préchauffage et bas hydrogène.",
      "Les déformations se maîtrisent par la conception, la prédéformation, le bridage, les séquences et les paramètres.",
      "Le DMOS est l'instruction de soudage, qualifiée par un QMOS (NF EN ISO 15614-1).",
      "Le soudeur est qualifié selon la NF EN ISO 9606-1 dans un domaine de validité précis.",
      "Le cahier de soudage relie chaque joint à son DMOS, son soudeur et ses contrôles."
     ],
     "lexique": [
      {
       "terme": "Talon",
       "def": "Partie non chanfreinée du bord d'une pièce à souder, en fond de préparation."
      },
      {
       "terme": "Pointage",
       "def": "Réalisation de courts cordons provisoires maintenant les pièces avant soudage."
      },
      {
       "terme": "Dilution",
       "def": "Proportion de métal de base fondu présente dans la zone fondue."
      },
      {
       "terme": "Préchauffage",
       "def": "Chauffage de la zone à souder avant soudage pour ralentir le refroidissement."
      },
      {
       "terme": "Température entre passes",
       "def": "Température de la zone soudée au moment d'exécuter la passe suivante."
      },
      {
       "terme": "Contraintes résiduelles",
       "def": "Contraintes internes subsistant dans l'assemblage après refroidissement."
      },
      {
       "terme": "Pas de pèlerin",
       "def": "Séquence de soudage par tronçons réalisés en reculant, pour répartir la chaleur."
      },
      {
       "terme": "DMOS",
       "def": "Descriptif de mode opératoire de soudage : instruction détaillée remise au soudeur."
      },
      {
       "terme": "QMOS",
       "def": "Procès-verbal de qualification d'un mode opératoire de soudage."
      },
      {
       "terme": "Domaine de validité",
       "def": "Ensemble des conditions couvertes par une qualification de mode opératoire ou de soudeur."
      },
      {
       "terme": "Cahier de soudage",
       "def": "Document de traçabilité listant les joints, les DMOS, les soudeurs et les contrôles d'un ouvrage."
      }
     ]
    },
    {
     "id": "btci-assemblages-montages-manutention",
     "titre": "Assemblages à brides, montages d'assemblage et manutention",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Identifier les types de brides normalisées et les joints associés.",
      "Décrire la procédure de serrage d'un assemblage à brides.",
      "Citer les autres assemblages mécaniques de la chaudronnerie et de la tôlerie et leurs limites.",
      "Concevoir le principe d'un montage d'assemblage ou d'un gabarit de pointage.",
      "Choisir un accessoire de levage et calculer l'effort dans les brins d'une élingue."
     ],
     "sections": [
      {
       "titre": "Les brides normalisées",
       "contenu": "\n<p>L'<strong>assemblage à brides</strong> est la liaison démontable par excellence des tuyauteries et des appareils. Il comprend deux brides, un <strong>joint</strong> et une <strong>boulonnerie</strong> (goujons ou vis, écrous, rondelles). En Europe, les brides acier sont définies par la NF EN 1092-1, qui fixe pour chaque DN et chaque PN les dimensions : diamètre extérieur, diamètre et nombre de trous, épaisseur, portée de joint.</p>\n<table>\n<thead><tr><th>Type (NF EN 1092-1)</th><th>Description</th><th>Emploi</th></tr></thead>\n<tbody>\n<tr><td>Type 01</td><td>Bride plate à souder : disque percé enfilé sur le tube et soudé</td><td>Basses pressions, fluides peu dangereux, économique</td></tr>\n<tr><td>Type 11</td><td>Bride à collerette à souder bout à bout sur le tube</td><td>Pressions et températures élevées, sollicitations alternées ; soudure contrôlable par radiographie</td></tr>\n<tr><td>Type 02 / 04 / 32…</td><td>Bride tournante avec collet ou bout à collerette</td><td>Inox (seul le collet est en inox), facilité d'alignement des trous</td></tr>\n<tr><td>Type 05</td><td>Bride pleine</td><td>Obturation d'une ligne ou d'un piquage, trou d'homme</td></tr>\n<tr><td>Type 12, 13</td><td>Bride à emboîtement à souder, bride taraudée</td><td>Petits diamètres</td></tr>\n</tbody>\n</table>\n<p>La <strong>face de joint</strong> est définie par une lettre : la face surélevée (type B) est la plus courante ; il existe aussi des faces à emboîtement (mâle-femelle) et à rainure pour joint annulaire. Deux brides assemblées doivent avoir des faces compatibles, le même DN et le même PN.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une bride PN 16 et une bride PN 40 de même DN peuvent avoir le même nombre de trous mais pas le même diamètre de perçage ni la même épaisseur. Monter une bride d'un PN inférieur à celui prescrit par la classe de tuyauterie est une non-conformité grave, même si les trous semblent coïncider.</div>"
      },
      {
       "titre": "Joints et serrage des brides",
       "contenu": "\n<p>Le joint assure l'étanchéité en remplissant les irrégularités des portées. On distingue les joints plats en fibres ou en graphite, les joints PTFE pour les fluides agressifs, les joints spiralés (feuillard métallique et garniture) pour les hautes pressions et températures, et les joints métalliques annulaires. Le choix dépend du fluide, de la pression et de la température ; il est imposé par la classe de tuyauterie.</p>\n<p>Un assemblage est étanche si le joint est comprimé de façon <strong>uniforme</strong> et <strong>suffisante</strong>, ni écrasé ni sous-serré. On respecte donc une procédure.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> serrer une paire de brides DN 100 PN 40 à 8 goujons. 1) Vérifier les portées (propres, sans rayure radiale), le joint neuf et conforme, les goujons et écrous de la bonne qualité, lubrifiés si la procédure le prévoit. 2) Centrer le joint, aligner les brides sans forcer : l'écart de parallélisme et de coaxialité doit être corrigé sur la tuyauterie, jamais par le serrage. 3) Engager tous les écrous à la main, puis numéroter les goujons dans l'ordre de serrage en étoile (1, 5, 3, 7, 2, 6, 4, 8 pour huit goujons). 4) Serrer en plusieurs passes croisées, par exemple 30 %, 60 % puis 100 % du couple prescrit, puis une passe circulaire de vérification à 100 %. 5) Consigner le couple appliqué et la clé dynamométrique utilisée sur la fiche de serrage.</div>\n<p>Pour les assemblages critiques, le serrage se fait à la clé hydraulique ou par tensionnement des goujons, selon une procédure établie par le bureau d'études ; on parle de serrage contrôlé.</p>"
      },
      {
       "titre": "Autres assemblages mécaniques",
       "contenu": "\n<table>\n<thead><tr><th>Assemblage</th><th>Principe</th><th>Points de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Boulonnage de structure</td><td>Vis et écrous de classe de qualité définie (8.8, 10.9) ; assemblages ordinaires ou précontraints</td><td>Classe de qualité, longueur filetée hors du plan de cisaillement si prescrit, serrage au couple</td></tr>\n<tr><td>Rivetage, rivets aveugles</td><td>Déformation plastique d'une tige pour bloquer les tôles</td><td>Diamètre du trou, longueur serrée, compatibilité des matériaux (corrosion galvanique)</td></tr>\n<tr><td>Sertissage, agrafage</td><td>Repli des bords l'un dans l'autre</td><td>Tôles minces, étanchéité par mastic</td></tr>\n<tr><td>Clinchage</td><td>Déformation locale emboutie liant deux tôles, sans apport</td><td>Tôles minces, accès des deux côtés</td></tr>\n<tr><td>Collage</td><td>Adhésif structural entre surfaces préparées</td><td>Préparation et propreté de surface, température et temps de polymérisation, sollicitation en cisaillement plutôt qu'en pelage</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un assemblage mécanique sur tôle mince évite la déformation et la dégradation de revêtement causées par le soudage ; il est donc très utilisé en tôlerie sur tôles prélaquées ou galvanisées. Il demande en contrepartie un soin particulier dans le perçage, l'alignement et la protection contre la corrosion.</div>"
      },
      {
       "titre": "Montages, gabarits et marbre",
       "contenu": "\n<p>Un <strong>montage d'assemblage</strong> (ou gabarit) maintient les pièces dans leur position relative pendant le pointage et parfois pendant le soudage. Il garantit la répétabilité en série et la précision sur les pièces uniques complexes.</p>\n<ul>\n<li>Le <strong>marbre</strong> de chaudronnerie est une table plane et épaisse, souvent percée d'une trame de trous, sur laquelle on fixe des équerres, butées, vés et brides de serrage modulaires.</li>\n<li>Le <strong>gabarit</strong> dédié est fabriqué pour un ouvrage : butées soudées sur une semelle, positionneurs de tubes, mannequins (formes reproduisant un contour intérieur).</li>\n<li>Les <strong>serre-joints</strong>, <strong>sauterelles</strong> (brides à genouillère), vérins et cales permettent de brider rapidement.</li>\n</ul>\n<p>La conception d'un montage applique les mêmes principes que la mise en position sur machine : appuis sur les surfaces de référence du plan, appuis éloignés pour la précision, aucun appui superflu, serrage face aux appuis. On ajoute des exigences propres au soudage : accessibilité de tous les joints, place pour le retrait (le montage ne doit pas emprisonner la pièce après soudage), protection des surfaces de référence contre les projections, et pour l'inox, contacts en inox ou en matériau non contaminant.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un défaut classique est le montage qui empêche de sortir la pièce une fois soudée, parce que le retrait l'a serrée sur les butées. On prévoit des butées escamotables ou démontables et l'on teste le montage sur une première pièce avant la série.</div>"
      },
      {
       "titre": "La manutention et l'élingage",
       "contenu": "\n<p>Les ensembles chaudronnés sont lourds, encombrants et souvent de formes peu commodes. On les déplace avec des <strong>appareils de levage</strong> (pont roulant, potence, grue mobile, palan) et des <strong>accessoires de levage</strong> : élingues (chaînes, câbles, sangles textiles), manilles, crochets, palonniers, pinces à tôles, ventouses et aimants de levage.</p>\n<p>Chaque accessoire porte sa <strong>charge maximale d'utilisation</strong> (CMU). Les élingues textiles plates ou rondes portent un code couleur normalisé lié à leur CMU en levage direct (par exemple violet 1 t, vert 2 t, jaune 3 t, gris 4 t, rouge 5 t). L'effort dans chaque brin augmente avec l'angle d'élingage :</p>\n<p><strong>T = P / (n × cos β)</strong>, avec P le poids de la charge, n le nombre de brins porteurs et β l'angle de chaque brin par rapport à la verticale.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lever un réservoir de 2 000 kg avec une élingue à deux brins, chaque brin faisant 30° avec la verticale. 1) Poids : P = 2 000 × 9,81 ≈ 19 620 N. 2) cos 30° ≈ 0,866. 3) T = 19 620 / (2 × 0,866) ≈ 11 330 N par brin, soit l'équivalent d'environ 1 155 kg. 4) Chaque brin doit donc avoir une CMU d'au moins 1,2 t dans cette configuration ; les fabricants donnent directement la CMU de l'élingue complète selon l'angle. 5) À 60° par rapport à la verticale, T vaudrait P / (2 × 0,5) = P : chaque brin porterait la charge entière. Pour une élingue à quatre brins sur une charge rigide, on ne compte en général que deux brins porteurs, car la répartition n'est pas garantie.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne jamais lever une capacité par une tubulure ou un piquage, qui ne sont pas conçus pour cela, mais uniquement par les oreilles de levage prévues ; vérifier la position du centre de gravité avant de lever ; ne jamais passer sous une charge ; protéger les sangles textiles des arêtes vives par des fourreaux. Les appareils et accessoires de levage font l'objet de vérifications périodiques réglementaires, et leur conduite peut exiger une autorisation de l'employeur.</div>"
      }
     ],
     "points_cles": [
      "Les brides acier sont définies par la NF EN 1092-1 selon leur type, leur DN, leur PN et leur face de joint.",
      "La bride à collerette (type 11) convient aux conditions sévères ; la bride plate (type 01) aux basses pressions.",
      "Le joint est imposé par la classe de tuyauterie selon fluide, pression et température.",
      "Le serrage des brides se fait en étoile, en plusieurs passes, au couple prescrit, sans corriger un désalignement.",
      "Rivetage, clinchage, sertissage et collage évitent les déformations et préservent les revêtements des tôles minces.",
      "Un montage d'assemblage s'appuie sur les références du plan, laisse les joints accessibles et la pièce libre de se retirer.",
      "Effort par brin d'élingue : T = P / (n × cos β) ; il croît rapidement avec l'angle.",
      "On lève une capacité uniquement par ses oreilles de levage, jamais par une tubulure."
     ],
     "lexique": [
      {
       "terme": "Bride à collerette",
       "def": "Bride prolongée par un cône soudé bout à bout sur le tube."
      },
      {
       "terme": "Bride tournante",
       "def": "Bride libre en rotation autour d'un collet soudé sur le tube."
      },
      {
       "terme": "Face de joint",
       "def": "Surface de la bride sur laquelle porte le joint."
      },
      {
       "terme": "Joint spiralé",
       "def": "Joint formé d'un feuillard métallique enroulé avec une garniture, pour hautes pressions et températures."
      },
      {
       "terme": "Serrage en étoile",
       "def": "Ordre de serrage croisé des boulons d'une bride pour comprimer le joint uniformément."
      },
      {
       "terme": "Clinchage",
       "def": "Assemblage de tôles par déformation locale sans apport ni élément rapporté."
      },
      {
       "terme": "Marbre",
       "def": "Table plane de référence servant au traçage et à l'assemblage."
      },
      {
       "terme": "Gabarit",
       "def": "Montage dédié qui positionne et maintient les pièces avant et pendant le soudage."
      },
      {
       "terme": "CMU",
       "def": "Charge maximale d'utilisation d'un appareil ou accessoire de levage."
      },
      {
       "terme": "Angle d'élingage",
       "def": "Angle formé par un brin d'élingue avec la verticale."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Qualité, sécurité et intervention sur site",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btci-qualite-controle-soudures",
     "titre": "Qualité, contrôle de l'ouvrage et contrôle des soudures",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Situer le contrôle dans le système de management de la qualité de l'entreprise.",
      "Organiser les contrôles dimensionnels d'un ouvrage chaudronné et prendre en compte l'incertitude de mesure.",
      "Choisir une méthode de contrôle non destructif des soudures selon le défaut recherché et le matériau.",
      "Citer les essais destructifs utilisés en qualification et ce qu'ils mesurent.",
      "Identifier les défauts de soudure, leurs causes, les critères d'acceptation et les réparations possibles."
     ],
     "sections": [
      {
       "titre": "La qualité dans l'entreprise de chaudronnerie",
       "contenu": "\n<p>La <strong>qualité</strong> est l'aptitude d'un produit à satisfaire les exigences exprimées (plan, cahier des charges, code) et implicites du client. Elle ne se « contrôle » pas seulement à la fin : elle se construit à chaque étape. La plupart des entreprises s'organisent selon un <strong>système de management de la qualité</strong> conforme à la norme NF EN ISO 9001. Les entreprises qui soudent des ouvrages réglementés appliquent en plus les exigences de qualité en soudage de la série NF EN ISO 3834, qui couvrent la revue des exigences, la qualification du personnel, les équipements, les modes opératoires, la traçabilité et les contrôles.</p>\n<p>On distingue :</p>\n<ul>\n<li>l'<strong>autocontrôle</strong>, réalisé par l'opérateur sur son propre travail, avec les instruments et la fiche prévus ;</li>\n<li>le <strong>contrôle</strong> par un service ou une personne indépendante, aux points d'arrêt prévus dans le plan de contrôle ;</li>\n<li>les <strong>inspections</strong> du client ou d'un organisme tiers, aux points convenus.</li>\n</ul>\n<p>Le <strong>plan d'inspection et d'essais</strong> (PIE, en anglais ITP) liste pour un ouvrage toutes les opérations de contrôle, leur référence, leur critère, les documents produits, et indique pour chacune qui intervient : point d'arrêt (H, la fabrication ne continue pas sans la présence ou l'accord de l'intervenant) ou point de notification (W, l'intervenant est prévenu et peut venir).</p>\n<p>Le contrôle peut être <strong>unitaire</strong> (100 % des pièces) ou par <strong>échantillonnage</strong> (une partie des pièces, selon un plan statistique). En chaudronnerie à l'unité, le contrôle à 100 % des cotes fonctionnelles est la règle ; pour les CND des soudures, l'étendue (100 %, 10 %…) est fixée par le code et la catégorie de construction.</p>"
      },
      {
       "titre": "Contrôler l'ouvrage : dimensions, géométrie, aspect",
       "contenu": "\n<p>Le contrôle de l'ouvrage porte sur des critères <strong>mesurables</strong> (dimensions, positions, orientations, rectitude, ovalisation) et <strong>visuels</strong> (état de surface, propreté, absence de coups, de projections, de contamination, qualité de la peinture). Les instruments courants de la chaudronnerie sont le mètre ruban, le réglet, l'équerre, le niveau, le rapporteur d'angle, le calibre de soudure, le pied à coulisse, le fil à plomb ou le laser d'alignement, la jauge d'épaisseur à ultrasons et, pour les grands ensembles, la station totale ou le bras de mesure tridimensionnel.</p>\n<table>\n<thead><tr><th>Caractéristique</th><th>Méthode courante</th></tr></thead>\n<tbody>\n<tr><td>Circonférence et diamètre de virole</td><td>Mesure de la circonférence au ruban, diamètre déduit (D = C / π)</td></tr>\n<tr><td>Ovalisation</td><td>Mesure de plusieurs diamètres, écart entre maximal et minimal</td></tr>\n<tr><td>Défaut d'alignement des bords (dénivellation)</td><td>Réglet et calibre de part et d'autre du joint</td></tr>\n<tr><td>Orientation d'une tubulure</td><td>Report des génératrices de référence, mesure d'arc sur la virole</td></tr>\n<tr><td>Perpendicularité d'une face de bride</td><td>Équerre ou niveau électronique par rapport à l'axe ou à une face de référence</td></tr>\n</tbody>\n</table>\n<p>Toute mesure est entachée d'une <strong>incertitude</strong> qui dépend de l'instrument, de la méthode, de l'opérateur et des conditions (température, déformation de la pièce sous son poids). Pour décider de la conformité, on réduit l'intervalle de tolérance de l'incertitude : une mesure qui tombe dans la zone d'incertitude, à la limite de la tolérance, ne permet pas de conclure et doit être refaite par une méthode plus précise.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une virole doit avoir un diamètre extérieur de 1 016 ± 3 mm. On mesure au ruban une circonférence de 3 199 mm, avec une incertitude estimée à ± 2 mm sur la circonférence. 1) Diamètre mesuré : 3 199 / π ≈ 1 018,3 mm. 2) Incertitude ramenée au diamètre : 2 / π ≈ 0,6 mm. 3) Zone de conformité certaine : de 1 013 + 0,6 à 1 019 − 0,6, soit de 1 013,6 à 1 018,4 mm. 4) La valeur 1 018,3 mm est dans cette zone : la virole est déclarée conforme. 5) On consigne la valeur mesurée, l'instrument et son identification sur la fiche de contrôle, et non la seule mention « conforme ».</div>"
      },
      {
       "titre": "Les contrôles non destructifs des soudures",
       "contenu": "\n<p>Les <strong>contrôles non destructifs</strong> (CND) examinent les soudures sans les détériorer. Chaque méthode a ses capacités ; le code ou le cahier des charges fixe la méthode, l'étendue et les critères. Les opérateurs de CND sont certifiés selon la NF EN ISO 9712 (niveaux 1, 2 et 3).</p>\n<table>\n<thead><tr><th>Méthode</th><th>Principe</th><th>Défauts détectés</th><th>Limites</th></tr></thead>\n<tbody>\n<tr><td>Contrôle visuel (VT)</td><td>Examen à l'œil, avec éclairage, loupe, calibres, miroir ou endoscope</td><td>Défauts débouchants et de forme : caniveaux, surépaisseur, manque de pénétration visible, projections</td><td>Surface seulement ; toujours réalisé en premier</td></tr>\n<tr><td>Ressuage (PT)</td><td>Un pénétrant coloré ou fluorescent pénètre dans les discontinuités, puis un révélateur le fait ressortir</td><td>Fissures et porosités débouchantes</td><td>Défauts débouchants uniquement ; surface propre et sèche</td></tr>\n<tr><td>Magnétoscopie (MT)</td><td>La pièce est aimantée ; des particules magnétiques s'accumulent sur les fuites de flux créées par les défauts</td><td>Fissures débouchantes ou très proches de la surface</td><td>Matériaux ferromagnétiques seulement (pas l'inox austénitique ni l'aluminium)</td></tr>\n<tr><td>Radiographie (RT)</td><td>Rayons X ou gamma traversant la soudure, image sur film ou capteur numérique</td><td>Défauts volumiques internes : porosités, inclusions, manques de pénétration</td><td>Rayonnements ionisants, zone balisée, fissures mal orientées peu visibles</td></tr>\n<tr><td>Ultrasons (UT)</td><td>Ondes ultrasonores réfléchies par les discontinuités</td><td>Défauts internes plans (fissures, manques de fusion) et volumiques, localisés en profondeur</td><td>Interprétation délicate, faibles épaisseurs difficiles</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> pendant une radiographie, la zone d'exclusion balisée s'impose à tout le personnel, y compris à ceux qui « ne font que passer ». Les tirs se font souvent en dehors des heures de travail de l'atelier ou dans une casemate. L'exposition aux rayonnements ionisants est soumise à une réglementation stricte.</div>"
      },
      {
       "titre": "Les essais destructifs",
       "contenu": "\n<p>Les <strong>essais destructifs</strong> sont réalisés sur des éprouvettes prélevées dans des assemblages d'essai (qualification de mode opératoire ou de soudeur, coupons témoins de production). Ils mesurent les propriétés réelles du joint.</p>\n<table>\n<thead><tr><th>Essai</th><th>Ce qu'il mesure ou révèle</th></tr></thead>\n<tbody>\n<tr><td>Traction transversale</td><td>Résistance du joint ; la rupture doit en principe se produire hors de la zone fondue ou à une valeur au moins égale au minimum du métal de base</td></tr>\n<tr><td>Pliage (endroit, envers, de côté)</td><td>Ductilité et compacité : l'éprouvette pliée ne doit pas présenter de fissure au-delà de la limite admise</td></tr>\n<tr><td>Flexion par choc (résilience)</td><td>Énergie absorbée par des éprouvettes entaillées en zone fondue et en ZAT, à une température donnée</td></tr>\n<tr><td>Macrographie</td><td>Coupe polie et attaquée chimiquement : forme des passes, pénétration, défauts internes visibles à faible grossissement</td></tr>\n<tr><td>Micrographie</td><td>Structure du métal au microscope</td></tr>\n<tr><td>Dureté</td><td>Dureté en zone fondue, ZAT et métal de base ; une dureté trop élevée signale un risque de fissuration</td></tr>\n<tr><td>Texture de cassure (« nick-break »)</td><td>Rupture volontaire de l'éprouvette pour examiner la compacité de la soudure</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les CND vérifient chaque soudure de production sans la détruire ; les essais destructifs vérifient, sur des assemblages représentatifs, que le mode opératoire et le soudeur sont capables de produire les propriétés requises. Les deux sont complémentaires.</div>"
      },
      {
       "titre": "Défauts de soudure, acceptation et réparation",
       "contenu": "\n<p>La NF EN ISO 6520-1 classe les défauts (appelés « imperfections ») en six groupes. La NF EN ISO 5817 fixe, pour l'acier, des <strong>niveaux de qualité</strong> B (exigeant), C (intermédiaire) et D (modéré) qui donnent, pour chaque imperfection, la limite acceptable.</p>\n<table>\n<thead><tr><th>Groupe</th><th>Exemples</th><th>Causes fréquentes</th></tr></thead>\n<tbody>\n<tr><td>100 Fissures</td><td>Fissures longitudinales, transversales, de cratère</td><td>Hydrogène, structure dure, bridage, cratère mal rempli ; non admises dans tous les niveaux</td></tr>\n<tr><td>200 Cavités</td><td>Soufflures, porosités, nids</td><td>Défaut de protection gazeuse (courant d'air, débit), humidité, surfaces grasses</td></tr>\n<tr><td>300 Inclusions solides</td><td>Inclusions de laitier, de tungstène</td><td>Mauvais nettoyage entre passes, électrode TIG touchant le bain</td></tr>\n<tr><td>400 Manques de fusion et de pénétration</td><td>Collage, manque de pénétration en racine</td><td>Intensité trop faible, vitesse trop élevée, préparation fermée, mauvaise inclinaison</td></tr>\n<tr><td>500 Défauts de forme</td><td>Caniveau, surépaisseur excessive, effondrement, défaut d'alignement, débordement</td><td>Paramètres inadaptés, mauvais accostage des pièces</td></tr>\n<tr><td>600 Divers</td><td>Coups d'arc, projections, meulage excessif</td><td>Amorçages hors joint, réglages, manque de soin</td></tr>\n</tbody>\n</table>\n<p>Une imperfection hors critère doit être <strong>réparée</strong> selon une procédure : localisation précise, élimination par meulage ou <strong>gougeage</strong> (arc-air ou meule), vérification de l'élimination (ressuage ou magnétoscopie), ressoudage selon un DMOS de réparation, puis nouveau contrôle avec la même méthode que celle qui a détecté le défaut. Le nombre de réparations sur une même zone est souvent limité par le code.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chaque non-conformité est enregistrée dans une fiche (description, cause, traitement, action corrective). Le suivi de ces fiches, par exemple le taux de réparation radiographique par soudeur ou par procédé, est un indicateur qualité majeur de l'atelier de soudage.</div>"
      }
     ],
     "points_cles": [
      "La qualité se construit à chaque étape ; la NF EN ISO 9001 organise le système, la série NF EN ISO 3834 précise les exigences en soudage.",
      "Le plan d'inspection et d'essais fixe les contrôles, leurs critères et les points d'arrêt.",
      "On décide de la conformité en tenant compte de l'incertitude de mesure et on consigne les valeurs mesurées.",
      "VT en premier ; PT et MT pour les défauts débouchants ; RT et UT pour les défauts internes.",
      "La magnétoscopie ne s'applique qu'aux matériaux ferromagnétiques.",
      "Traction, pliage, résilience, macrographie et dureté qualifient modes opératoires et soudeurs.",
      "Défauts classés en groupes 100 à 600 (ISO 6520-1) ; niveaux de qualité B, C, D (ISO 5817).",
      "Une réparation suit une procédure et se contrôle par la méthode qui a détecté le défaut."
     ],
     "lexique": [
      {
       "terme": "Autocontrôle",
       "def": "Contrôle réalisé par l'opérateur sur son propre travail."
      },
      {
       "terme": "Plan d'inspection et d'essais",
       "def": "Document listant les contrôles d'un ouvrage, leurs critères et les intervenants."
      },
      {
       "terme": "Point d'arrêt",
       "def": "Étape où la fabrication ne peut continuer sans l'intervention ou l'accord d'un tiers."
      },
      {
       "terme": "Incertitude de mesure",
       "def": "Intervalle autour du résultat dans lequel se trouve vraisemblablement la valeur vraie."
      },
      {
       "terme": "Ressuage",
       "def": "CND révélant les défauts débouchants par un pénétrant et un révélateur."
      },
      {
       "terme": "Magnétoscopie",
       "def": "CND des matériaux ferromagnétiques par particules magnétiques."
      },
      {
       "terme": "Radiographie",
       "def": "CND par rayonnement ionisant traversant la soudure."
      },
      {
       "terme": "Macrographie",
       "def": "Examen d'une coupe polie et attaquée de la soudure à faible grossissement."
      },
      {
       "terme": "Niveau de qualité",
       "def": "Classe d'exigence (B, C, D) fixant les limites d'acceptation des imperfections."
      },
      {
       "terme": "Caniveau",
       "def": "Sillon creusé dans le métal de base le long du bord du cordon."
      },
      {
       "terme": "Gougeage",
       "def": "Enlèvement de métal pour extraire un défaut ou préparer une reprise envers."
      }
     ]
    },
    {
     "id": "btci-rehabilitation-site",
     "titre": "Intervenir et réhabiliter sur site industriel",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Analyser le contexte d'une intervention sur une installation en exploitation : demande, historique, coactivité.",
      "Identifier les documents et autorisations nécessaires : plan de prévention, permis de travail, permis de feu.",
      "Décrire la mise en sécurité d'une installation : arrêt des énergies, consignation, vidange, inertage.",
      "Reconnaître les fluides d'une installation par leur repérage.",
      "Organiser les étapes techniques d'une réhabilitation : relevé, démontage, obturation, adaptation, remontage, essais."
     ],
     "sections": [
      {
       "titre": "Le contexte d'une intervention sur site",
       "contenu": "\n<p>La <strong>réhabilitation</strong> consiste à remettre en état, modifier ou remplacer tout ou partie d'un ensemble chaudronné en place dans une installation : remplacement d'un tronçon de tuyauterie corrodé, ajout d'un piquage, réparation d'une cuve, modification d'un supportage. Contrairement à l'atelier, le site impose des contraintes fortes : installation parfois en exploitation à proximité, présence de fluides dangereux, espaces restreints, travail en hauteur, entreprises multiples sur la même zone.</p>\n<p>Avant toute intervention, le technicien rassemble les informations :</p>\n<ul>\n<li>la <strong>demande d'intervention</strong> (ou ordre de travail) : objet, localisation précise, délais, contraintes d'exploitation ;</li>\n<li>l'<strong>historique</strong> de l'équipement : plans d'origine, interventions antérieures, rapports d'inspection, mesures d'épaisseur ;</li>\n<li>les caractéristiques du <strong>fluide</strong> : nature, dangers (fiche de données de sécurité), pression, température ;</li>\n<li>le cadre de l'intervention : <strong>coactivité</strong> avec d'autres entreprises, sous-traitance, horaires, accès.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur site, on intervient chez un client, l'<strong>entreprise utilisatrice</strong>, en tant qu'<strong>entreprise extérieure</strong>. Le chef d'établissement de l'entreprise utilisatrice coordonne la prévention ; chaque employeur reste responsable de la sécurité de son personnel.</div>"
      },
      {
       "titre": "Plan de prévention et autorisations de travail",
       "contenu": "\n<p>Le <strong>plan de prévention</strong> est établi conjointement par l'entreprise utilisatrice et l'entreprise extérieure, après une <strong>inspection commune préalable</strong> des lieux. Il analyse les risques liés à l'interférence entre activités, installations et matériels, et fixe les mesures de prévention de chacun. Le code du travail (dispositions issues du décret du 20 février 1992) impose qu'il soit <strong>écrit</strong> lorsque l'opération représente au moins 400 heures de travail sur douze mois, ou lorsqu'elle figure dans la liste des <strong>travaux dangereux</strong> fixée par arrêté (parmi lesquels les travaux de soudage et de découpage dans certaines conditions, les travaux en hauteur, les travaux exposant aux rayonnements ionisants ou les travaux sur des équipements contenant des matières dangereuses).</p>\n<table>\n<thead><tr><th>Document</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Permis de travail</td><td>Autorisation écrite, délivrée par l'exploitant pour une tâche, un lieu et une durée précis ; il récapitule l'état de l'installation (consignée, vidangée, dégazée) et les précautions</td></tr>\n<tr><td>Permis de feu</td><td>Autorisation pour tout travail par point chaud (soudage, découpage, meulage) hors zone prévue ; il fixe les mesures contre l'incendie avant, pendant et après le travail</td></tr>\n<tr><td>Bon de consignation</td><td>Atteste que les énergies et fluides ont été séparés, condamnés et vérifiés</td></tr>\n<tr><td>Autorisation de pénétrer en espace confiné</td><td>Encadre l'entrée dans une capacité, une fosse, un caisson : mesures d'atmosphère, ventilation, surveillant extérieur</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un permis est valable pour ce qui y est écrit. Si la tâche, le lieu, l'équipe ou les conditions changent (découverte d'une fuite, besoin d'un point chaud non prévu, dépassement de la durée), le travail s'arrête et le permis est revu. Commencer « juste un petit point de soudure » sans permis de feu est à l'origine de nombreux incendies industriels.</div>"
      },
      {
       "titre": "Mettre l'installation en sécurité",
       "contenu": "\n<p>Avant d'ouvrir une tuyauterie ou une capacité, l'exploitant (ou le chargé de consignation désigné) la met en sécurité selon une démarche rigoureuse.</p>\n<ol>\n<li><strong>Séparer</strong> l'équipement de toutes ses sources d'énergie et de fluide : fermeture des vannes, pose de joints pleins ou de brides pleines, déconnexion électrique.</li>\n<li><strong>Condamner</strong> les organes de séparation en position : cadenas, chaînes, étiquettes nominatives.</li>\n<li><strong>Purger</strong> : vidanger les liquides, décomprimer les gaz, ramener à la pression atmosphérique.</li>\n<li><strong>Nettoyer, dégazer, inerter</strong> si le fluide est dangereux : rinçage, balayage à la vapeur, à l'azote ou à l'air selon le cas.</li>\n<li><strong>Vérifier</strong> : absence de pression (manomètre, purge ouverte), température acceptable, mesure d'atmosphère (oxygène, explosivité, toxiques) avant point chaud ou pénétration.</li>\n<li><strong>Identifier et signaler</strong> la zone de travail.</li>\n</ol>\n<p>Pour les installations électriques, la consignation suit la norme NF C 18-510 et ne peut être réalisée que par du personnel habilité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'un tronçon de tuyauterie de vapeur peut être coupé. 1) Lire le bon de consignation : vannes amont et aval fermées et cadenassées, purge ouverte. 2) Contrôler sur place que les repères des vannes condamnées correspondent au bon. 3) Constater que la purge débite seulement de l'air ou plus rien, et que le manomètre local indique zéro. 4) Toucher prudemment avec un thermomètre de contact : température compatible avec l'intervention. 5) Poser son propre cadenas sur le dispositif de consignation si la procédure du site le prévoit. 6) Faire la première coupe à froid (scie, coupe-tube) en se tenant hors de l'axe d'éventuelles projections, jamais au chalumeau.</div>"
      },
      {
       "titre": "Reconnaître les fluides et les risques particuliers",
       "contenu": "\n<p>Les tuyauteries sont repérées par des couleurs conventionnelles (norme NF X 08-100), complétées d'étiquettes ou de bagues indiquant le fluide et le sens d'écoulement, et de pictogrammes de danger.</p>\n<table>\n<thead><tr><th>Couleur de fond</th><th>Fluide</th></tr></thead>\n<tbody>\n<tr><td>Vert</td><td>Eau</td></tr>\n<tr><td>Gris argent</td><td>Vapeur</td></tr>\n<tr><td>Bleu clair</td><td>Air</td></tr>\n<tr><td>Jaune ocre</td><td>Gaz (y compris gaz liquéfiés)</td></tr>\n<tr><td>Brun</td><td>Huiles et liquides inflammables</td></tr>\n<tr><td>Violet</td><td>Acides et bases</td></tr>\n<tr><td>Rouge</td><td>Lutte contre l'incendie</td></tr>\n</tbody>\n</table>\n<p>Certaines zones présentent des risques spécifiques : les <strong>zones ATEX</strong> (atmosphères explosives), classées en zones 0, 1, 2 pour les gaz et 20, 21, 22 pour les poussières, où seul du matériel certifié pour la zone peut être utilisé et où tout point chaud exige des mesures particulières ; les installations soumises à la réglementation des installations classées pour la protection de l'environnement (ICPE), dont les sites Seveso ; les installations nucléaires de base (INB), avec leurs propres règles d'accès et de radioprotection. Le <strong>calorifugeage</strong> (isolant thermique sous tôle de protection) peut contenir des matériaux dangereux sur les installations anciennes : la présence éventuelle d'amiante doit être connue par un repérage avant toute intervention.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le choix de l'outillage dépend de la zone : en zone ATEX, une meuleuse ou un poste de soudage ordinaire peut provoquer une explosion. Les outils dits « anti-étincelles » réduisent un risque mais ne remplacent ni le permis de feu ni la mesure d'atmosphère.</div>"
      },
      {
       "titre": "Les étapes techniques d'une réhabilitation",
       "contenu": "\n<p>Une fois la zone sécurisée, l'intervention suit un enchaînement technique.</p>\n<table>\n<thead><tr><th>Étape</th><th>Actions</th><th>Moyens</th></tr></thead>\n<tbody>\n<tr><td>Relevé</td><td>Mesurer l'existant (cotes, altitudes, orientation, épaisseurs résiduelles) et tracer une isométrique ou un croquis</td><td>Mètre, niveau, laser, jauge d'épaisseur à ultrasons</td></tr>\n<tr><td>Préfabrication</td><td>Fabriquer en atelier les éléments neufs avec une surlongueur de réglage</td><td>Atelier, isométrique de modification</td></tr>\n<tr><td>Accès et manutention</td><td>Installer échafaudage ou nacelle, points d'ancrage, moyens de levage</td><td>Échafaudage réceptionné, palans, élingues</td></tr>\n<tr><td>Démontage</td><td>Supporter provisoirement la ligne, couper à froid, déboulonner, évacuer</td><td>Supports provisoires, coupe orbitale, clés</td></tr>\n<tr><td>Obturation</td><td>Protéger les extrémités ouvertes de l'installation conservée (bouchons, brides pleines)</td><td>Obturateurs, films</td></tr>\n<tr><td>Adaptation</td><td>Mettre à longueur les tronçons de fermeture, préparer les chanfreins sur l'existant</td><td>Machine à chanfreiner portative</td></tr>\n<tr><td>Remontage</td><td>Pointer, souder selon DMOS, serrer les brides, reposer les supports</td><td>Postes de soudage de chantier, clés dynamométriques</td></tr>\n<tr><td>Contrôles et essais</td><td>CND, épreuve ou essai d'étanchéité, repose du calorifuge, nettoyage, levée des consignations par l'exploitant</td><td>Procès-verbaux, dossier de fin de travaux</td></tr>\n</tbody>\n</table>\n<p>Deux étapes méritent une attention particulière. Le <strong>support provisoire</strong> avant démontage : une tuyauterie coupée peut basculer, se détendre brutalement si elle était contrainte par la dilatation, ou charger anormalement les tubulures des équipements voisins ; on pose donc des supports ou des élingues de maintien avant la première coupe et l'on observe le comportement des extrémités. Le <strong>raccordement sur l'existant</strong> : le métal ancien peut être aminci, corrodé, sali par le produit ou de nuance mal connue. On mesure l'épaisseur résiduelle à l'endroit de la future soudure, on nettoie soigneusement la zone et, en cas de doute sur le matériau, on demande une identification (analyse portable, documents d'origine) avant de choisir le mode opératoire de soudage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les interventions lourdes se concentrent souvent lors des <strong>arrêts techniques</strong> programmés de l'usine, où des dizaines d'entreprises travaillent simultanément pendant quelques jours ou semaines. La préparation (relevés, préfabrication, approvisionnements, permis) se fait des semaines à l'avance : un oubli découvert pendant l'arrêt peut retarder le redémarrage de toute l'usine.</div>\n<p>Sur un équipement sous pression en service, une réparation ou une modification est encadrée par la réglementation du suivi en service : selon son importance, elle peut nécessiter l'intervention d'un organisme habilité et une nouvelle épreuve avant remise en service.</p>"
      }
     ],
     "points_cles": [
      "Sur site, l'entreprise extérieure intervient chez l'entreprise utilisatrice, qui coordonne la prévention.",
      "Le plan de prévention est écrit au-delà de 400 heures sur douze mois ou pour des travaux dangereux.",
      "Permis de travail, permis de feu, bon de consignation et autorisation en espace confiné encadrent l'intervention.",
      "Mise en sécurité : séparer, condamner, purger, dégazer ou inerter, vérifier, signaler.",
      "Les couleurs de fond des tuyauteries identifient le fluide : vert eau, gris argent vapeur, bleu clair air, jaune ocre gaz.",
      "En zone ATEX, matériel certifié et précautions renforcées pour tout point chaud.",
      "Une réhabilitation enchaîne relevé, préfabrication, démontage, obturation, adaptation, remontage, contrôles.",
      "Une modification d'ESP en service relève de la réglementation du suivi en service."
     ],
     "lexique": [
      {
       "terme": "Réhabilitation",
       "def": "Remise en état, modification ou remplacement d'un ensemble en place sur une installation."
      },
      {
       "terme": "Entreprise utilisatrice",
       "def": "Entreprise sur le site de laquelle intervient une entreprise extérieure."
      },
      {
       "terme": "Coactivité",
       "def": "Présence simultanée de plusieurs entreprises ou activités sur une même zone."
      },
      {
       "terme": "Plan de prévention",
       "def": "Document analysant les risques d'interférence et fixant les mesures de prévention lors d'une intervention d'entreprise extérieure."
      },
      {
       "terme": "Permis de feu",
       "def": "Autorisation écrite de réaliser un travail par point chaud avec les mesures contre l'incendie."
      },
      {
       "terme": "Consignation",
       "def": "Ensemble des opérations qui mettent et maintiennent un équipement en sécurité vis-à-vis des énergies et fluides."
      },
      {
       "terme": "Inertage",
       "def": "Remplacement de l'atmosphère d'un équipement par un gaz inerte, souvent de l'azote."
      },
      {
       "terme": "Zone ATEX",
       "def": "Zone où une atmosphère explosive peut se former, classée selon sa fréquence d'apparition."
      },
      {
       "terme": "Calorifugeage",
       "def": "Isolation thermique d'une tuyauterie ou d'un équipement."
      },
      {
       "terme": "Arrêt technique",
       "def": "Période programmée d'arrêt d'une usine pour la maintenance et les modifications."
      }
     ]
    },
    {
     "id": "btci-prevention-environnement-maintenance",
     "titre": "Prévention des risques, environnement et maintenance des équipements",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Calculer et interpréter les indicateurs d'accidents du travail d'une entreprise.",
      "Analyser un accident par la méthode de l'arbre des causes et proposer des mesures de prévention.",
      "Identifier les risques propres à la chaudronnerie et les protections collectives et individuelles associées.",
      "Appliquer les règles de gestion des déchets et de protection de l'environnement à l'atelier et sur chantier.",
      "Organiser la maintenance préventive de premier niveau et exploiter ses indicateurs."
     ],
     "sections": [
      {
       "titre": "Mesurer la sinistralité : taux de fréquence et taux de gravité",
       "contenu": "\n<p>Pour suivre l'efficacité de sa prévention, une entreprise calcule des indicateurs normalisés à partir de ses accidents du travail avec arrêt.</p>\n<ul>\n<li><strong>Taux de fréquence</strong> : TF = nombre d'accidents avec arrêt × 1 000 000 / nombre d'heures travaillées. Il exprime le nombre d'accidents avec arrêt par million d'heures travaillées.</li>\n<li><strong>Taux de gravité</strong> : TG = nombre de journées perdues × 1 000 / nombre d'heures travaillées. Il exprime le nombre de journées perdues pour mille heures travaillées.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> un atelier de 40 salariés a travaillé 64 000 heures dans l'année ; il a connu 3 accidents avec arrêt, totalisant 96 jours d'arrêt. 1) TF = 3 × 1 000 000 / 64 000 ≈ 46,9. 2) TG = 96 × 1 000 / 64 000 = 1,5. 3) Interprétation : environ 47 accidents avec arrêt par million d'heures, et 1,5 jour perdu pour 1 000 heures travaillées. 4) Ces valeurs se comparent à celles des années précédentes de l'entreprise et aux statistiques publiées pour la branche par l'Assurance maladie – risques professionnels. 5) Un TF qui baisse avec un TG qui monte signale moins d'accidents mais plus graves : la prévention doit cibler les situations à fort potentiel de gravité.</div>\n<p>Ces chiffres ne reflètent que les accidents déclarés avec arrêt ; les <strong>presque-accidents</strong> (situations dangereuses sans dommage) sont des signaux précieux, que les entreprises encouragent à remonter pour agir avant l'accident. Les statistiques montrent aussi que les nouveaux embauchés et les jeunes sont surreprésentés dans les accidents : l'accueil et la formation au poste sont des moments clés de la prévention.</p>"
      },
      {
       "titre": "Analyser un accident : l'arbre des causes",
       "contenu": "\n<p>L'<strong>arbre des causes</strong> est une méthode d'analyse d'un accident survenu. Elle recherche les <strong>faits</strong> (et non les opinions ou les responsables) et leurs liens logiques, pour remonter aux causes profondes et proposer des mesures qui empêchent la répétition.</p>\n<ol>\n<li>Recueillir les faits sur place, rapidement, auprès de la victime et des témoins : ce qui était inhabituel (les « variations ») et ce qui était permanent.</li>\n<li>Partir du dommage et, pour chaque fait, poser la question : « Qu'a-t-il fallu pour que ce fait se produise ? ». Un fait peut avoir une cause unique (enchaînement), plusieurs causes nécessaires (conjonction) ou être la cause de plusieurs faits (disjonction).</li>\n<li>Construire l'arbre de droite à gauche, du dommage vers les causes.</li>\n<li>Rechercher pour chaque fait une mesure de prévention, en privilégiant celles qui agissent sur les causes les plus en amont et sur l'organisation.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un soudeur se brûle le pied en meulant. Les faits : il portait des chaussures de sécurité non montantes ; les projections sont tombées dans la chaussure ; il meulait au sol faute de table disponible ; la table était occupée par un montage laissé en attente ; le planning avait été modifié la veille. On voit que « porter des chaussures montantes » est une mesure utile, mais que l'organisation de l'espace et du planning est aussi en cause. L'arbre évite de conclure trop vite à la seule « faute d'inattention ».</div>\n<p>L'analyse a priori des risques, consignée dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP), complète cette démarche : elle identifie les dangers de chaque unité de travail avant l'accident et planifie les actions, selon les principes généraux de prévention (éviter le risque, l'évaluer, le combattre à la source, adapter le travail à l'homme, privilégier la protection collective sur la protection individuelle…).</p>"
      },
      {
       "titre": "Les risques propres à la chaudronnerie",
       "contenu": "\n<table>\n<thead><tr><th>Risque</th><th>Situations</th><th>Protection collective</th><th>Protection individuelle</th></tr></thead>\n<tbody>\n<tr><td>Fumées de soudage</td><td>Tous procédés à l'arc ; chrome VI et nickel avec l'inox, ozone avec le TIG et le MIG de l'aluminium</td><td>Captage à la source (torche aspirante, bras aspirant), ventilation générale</td><td>Masque à adduction d'air ou appareil filtrant adapté si le captage est insuffisant</td></tr>\n<tr><td>Rayonnements de l'arc</td><td>Ultraviolets et infrarouges : coups d'arc aux yeux, brûlures de la peau</td><td>Écrans et rideaux de soudage</td><td>Masque de soudeur à teinte adaptée à l'intensité, vêtements couvrants</td></tr>\n<tr><td>Bruit</td><td>Meulage, chanfreinage, burinage, roulage, frappe</td><td>Capotage, encoffrement, organisation des postes bruyants</td><td>Bouchons ou casque antibruit</td></tr>\n<tr><td>Coupures, écrasement</td><td>Manipulation de tôles, presse plieuse, rouleuse, cisaille</td><td>Barrages immatériels, commandes bimanuelles, protecteurs</td><td>Gants anticoupure, chaussures de sécurité</td></tr>\n<tr><td>Manutention</td><td>Charges lourdes, postures contraignantes</td><td>Moyens de levage, positionneurs, aménagement des postes</td><td>Formation aux gestes et postures</td></tr>\n<tr><td>Incendie et explosion</td><td>Projections, gaz combustibles, oxygène</td><td>Stockage des bouteilles, clapets anti-retour, extincteurs</td><td>Vêtements ignifugés</td></tr>\n<tr><td>Électrique</td><td>Postes de soudage, câbles détériorés, milieu humide ou conducteur</td><td>Matériel vérifié, dispositifs adaptés en enceinte conductrice</td><td>Gants secs, habilitation pour les opérations électriques</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les fumées de soudage sont classées cancérogènes pour l'homme par le Centre international de recherche sur le cancer depuis 2017. Le captage à la source est la mesure prioritaire ; le masque individuel ne vient qu'en complément, et le simple fait d'ouvrir une porte d'atelier n'est pas une protection.</div>"
      },
      {
       "titre": "Environnement et gestion des déchets",
       "contenu": "\n<p>L'activité de chaudronnerie produit des déchets et des émissions que l'entreprise doit maîtriser, dans une logique de <strong>développement durable</strong> (répondre aux besoins présents sans compromettre ceux des générations futures) et d'<strong>économie circulaire</strong> (réduire, réemployer, recycler).</p>\n<table>\n<thead><tr><th>Déchet ou rejet</th><th>Catégorie</th><th>Traitement</th></tr></thead>\n<tbody>\n<tr><td>Chutes et copeaux métalliques triés par nuance</td><td>Non dangereux</td><td>Valorisation par un ferrailleur ; tri acier, inox, aluminium pour mieux les valoriser</td></tr>\n<tr><td>Bouts d'électrodes, disques usés</td><td>Non dangereux en général</td><td>Collecte spécifique selon les filières locales</td></tr>\n<tr><td>Bains de décapage et de passivation de l'inox</td><td>Dangereux (acides)</td><td>Collecte par un prestataire agréé, jamais à l'égout</td></tr>\n<tr><td>Pots et chiffons souillés de peinture, solvants</td><td>Dangereux</td><td>Fûts identifiés, enlèvement par filière agréée</td></tr>\n<tr><td>Produits de ressuage</td><td>Dangereux selon leur fiche de données de sécurité</td><td>Collecte spécifique</td></tr>\n<tr><td>Fumées et poussières de meulage</td><td>Rejet atmosphérique</td><td>Captage et filtration avant rejet</td></tr>\n</tbody>\n</table>\n<p>Les déchets dangereux sont suivis par un <strong>bordereau de suivi</strong>, aujourd'hui dématérialisé, qui trace leur parcours du producteur jusqu'à l'installation de traitement : le producteur reste responsable de ses déchets jusqu'à leur élimination. Les entreprises dont l'activité présente des risques ou des nuisances pour l'environnement relèvent de la réglementation des ICPE, selon un régime de déclaration, d'enregistrement ou d'autorisation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la première action environnementale du technicien est la réduction à la source : une mise en tôle optimisée, des chutes identifiées et réutilisées, des consommables bien gérés et des retouches évitées diminuent à la fois les déchets et les coûts.</div>"
      },
      {
       "titre": "La maintenance des équipements de l'atelier",
       "contenu": "\n<p>Les machines (rouleuses, presses plieuses, tables de découpe, postes de soudage) doivent rester disponibles et précises. La <strong>maintenance</strong> regroupe les actions qui les maintiennent ou les rétablissent en état de fonctionner. On distingue la <strong>maintenance corrective</strong> (après défaillance), la <strong>maintenance préventive systématique</strong> (selon un échéancier : heures de marche, nombre de cycles, calendrier) et la <strong>maintenance préventive conditionnelle</strong> (déclenchée par la mesure d'un paramètre : usure, vibration, température).</p>\n<p>La <strong>maintenance de premier niveau</strong> est confiée à l'opérateur : réglages simples prévus par le constructeur, contrôles visuels, remplacement de consommables accessibles en toute sécurité.</p>\n<table>\n<thead><tr><th>Équipement</th><th>Opérations de premier niveau</th><th>Périodicité indicative</th></tr></thead>\n<tbody>\n<tr><td>Poste MIG-MAG</td><td>Nettoyage de la buse, remplacement du tube contact, contrôle des galets et de la gaine, état des câbles et de la pince de masse</td><td>Quotidienne à hebdomadaire</td></tr>\n<tr><td>Torche plasma</td><td>Contrôle et remplacement de la buse et de l'électrode, purge du filtre à air</td><td>À chaque poste ou selon l'usure</td></tr>\n<tr><td>Presse plieuse</td><td>Nettoyage des outils, contrôle des niveaux, essai des sécurités</td><td>Quotidienne à hebdomadaire</td></tr>\n<tr><td>Poste oxyacétylénique</td><td>Contrôle des tuyaux, des détendeurs et des clapets anti-retour</td><td>Avant chaque utilisation</td></tr>\n</tbody>\n</table>\n<p>Le suivi s'appuie sur des indicateurs : le <strong>temps moyen de bon fonctionnement entre défaillances</strong> (MTBF), le <strong>temps moyen de réparation</strong> (MTTR) et la <strong>disponibilité</strong> (temps de fonctionnement effectif rapporté au temps requis). Toute anomalie est consignée dans le cahier ou le logiciel de maintenance, ce qui permet d'analyser les défaillances répétées et d'ajuster les périodicités.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> sur un mois, une table plasma devait fonctionner 160 h ; elle a connu 4 pannes totalisant 8 h d'arrêt. 1) Temps de fonctionnement : 160 − 8 = 152 h. 2) MTBF = 152 / 4 = 38 h. 3) MTTR = 8 / 4 = 2 h. 4) Disponibilité = 152 / 160 = 95 %. 5) Si trois des quatre pannes concernent la même cause (consommables usés non remplacés), on renforce le contrôle de premier niveau plutôt que d'attendre la panne.</div>"
      }
     ],
     "points_cles": [
      "TF = accidents avec arrêt × 10⁶ / heures travaillées ; TG = journées perdues × 10³ / heures travaillées.",
      "L'arbre des causes part des faits et remonte aux causes profondes, y compris organisationnelles.",
      "Le DUERP consigne l'évaluation a priori des risques et planifie les actions de prévention.",
      "Les fumées de soudage sont cancérogènes : le captage à la source est prioritaire.",
      "La protection collective passe avant la protection individuelle.",
      "Les déchets dangereux (acides de décapage, solvants, peintures) suivent une filière agréée et un bordereau de suivi.",
      "La maintenance est corrective, préventive systématique ou préventive conditionnelle.",
      "MTBF, MTTR et disponibilité mesurent l'efficacité de la maintenance."
     ],
     "lexique": [
      {
       "terme": "Taux de fréquence",
       "def": "Nombre d'accidents avec arrêt par million d'heures travaillées."
      },
      {
       "terme": "Taux de gravité",
       "def": "Nombre de journées perdues par millier d'heures travaillées."
      },
      {
       "terme": "Presque-accident",
       "def": "Événement qui aurait pu provoquer un dommage mais n'en a pas causé."
      },
      {
       "terme": "Arbre des causes",
       "def": "Méthode d'analyse d'un accident qui relie logiquement les faits ayant conduit au dommage."
      },
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels, obligatoire dans toute entreprise."
      },
      {
       "terme": "Captage à la source",
       "def": "Aspiration des polluants au plus près de leur point d'émission."
      },
      {
       "terme": "Économie circulaire",
       "def": "Modèle visant à réduire, réemployer et recycler les ressources plutôt qu'à les jeter."
      },
      {
       "terme": "Bordereau de suivi des déchets",
       "def": "Document qui trace un déchet dangereux du producteur jusqu'à son traitement."
      },
      {
       "terme": "Maintenance conditionnelle",
       "def": "Maintenance préventive déclenchée par la mesure de l'état de l'équipement."
      },
      {
       "terme": "MTBF",
       "def": "Temps moyen de bon fonctionnement entre deux défaillances."
      },
      {
       "terme": "Disponibilité",
       "def": "Rapport entre le temps de fonctionnement effectif et le temps requis."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Documents de définition et de soudage",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "btci-doc-plan-ensemble-capacite",
     "titre": "Exploiter le plan d'ensemble et la nomenclature d'une capacité",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Repérer la structure d'un plan d'ensemble de capacité : cartouche, données de construction, vues, tableau des tubulures, nomenclature.",
      "Extraire les données de conception et de fabrication utiles à la préparation.",
      "Relier chaque repère de la nomenclature à sa fonction et à sa position sur l'ouvrage.",
      "Détecter les incohérences entre vues, tableaux et nomenclature.",
      "Rédiger une analyse structurée d'un plan d'ensemble."
     ],
     "sections": [
      {
       "titre": "Le document et sa structure",
       "contenu": "\n<p>Le <strong>plan d'ensemble</strong> d'une capacité est le document de référence de sa fabrication. À l'épreuve écrite comme en entreprise, il est souvent le premier document du dossier technique. Il comporte en général six zones à repérer avant toute lecture détaillée.</p>\n<table>\n<thead><tr><th>Zone</th><th>Contenu</th><th>Ce que l'on y cherche</th></tr></thead>\n<tbody>\n<tr><td>Cartouche</td><td>Titre, numéro de plan, indice de révision, échelle, auteur, date, client, tolérances générales</td><td>L'indice en vigueur et la classe de tolérance</td></tr>\n<tr><td>Tableau des données de construction</td><td>Code de construction, catégorie DESP, fluide et groupe, PS, TS, pression d'épreuve, volume, surépaisseur de corrosion, coefficient de soudure, étendue des CND, traitement thermique, masse à vide et en épreuve</td><td>Toutes les exigences qui pilotent la fabrication et les contrôles</td></tr>\n<tr><td>Vues</td><td>Élévation (souvent en coupe partielle), vue de dessus avec orientation des tubulures, vues de détail</td><td>Formes, cotes d'implantation, références de hauteur et d'angle</td></tr>\n<tr><td>Tableau des tubulures</td><td>Repère, fonction, DN, PN et type de bride, épaisseur du tube, saillie, orientation, hauteur</td><td>Les données de fabrication de chaque piquage</td></tr>\n<tr><td>Nomenclature</td><td>Repère, quantité, désignation, matière, dimensions, norme, observations</td><td>La liste des pièces à fabriquer ou acheter</td></tr>\n<tr><td>Notes</td><td>Prescriptions particulières : finition, peinture, marquage, préparation des soudures</td><td>Les exigences qui ne figurent nulle part ailleurs</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le tableau des données de construction est la partie la plus dense du plan. Une seule ligne, comme « contrôle radiographique 10 % » ou « traitement thermique après soudage », modifie l'organisation entière de la fabrication.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un plan d'ensemble de capacité. 1) Identifier le document : titre, numéro, indice, date ; vérifier que c'est bien l'indice demandé. 2) Lire le tableau des données de construction et souligner les grandeurs qui auront une conséquence en fabrication (matériaux, code, épreuve, CND, traitement thermique, corrosion). 3) Repérer la référence des hauteurs (ligne de tangence, face d'appui) et la référence angulaire (0° de la vue de dessus). 4) Lire les vues pour comprendre la forme générale : position verticale ou horizontale, type de fonds, supportage. 5) Parcourir le tableau des tubulures, et pour chaque ligne retrouver la tubulure sur les vues. 6) Parcourir la nomenclature, et pour chaque repère retrouver la pièce sur les vues et noter si elle est fabriquée ou achetée. 7) Lire les notes. 8) Lister les questions et incohérences relevées.</div>\n<p>Les étapes 5 et 6 sont des <strong>vérifications croisées</strong> : chaque information doit se retrouver à deux endroits cohérents. C'est souvent là que se trouvent les erreurs de plan, et c'est ce que les sujets d'examen demandent fréquemment de repérer.</p>"
      },
      {
       "titre": "Vocabulaire et pièges",
       "contenu": "\n<p>Les termes suivants reviennent sur tous les plans de capacité : <strong>ligne de tangence</strong> (LT, référence des hauteurs), <strong>saillie</strong> (distance entre la face de bride d'une tubulure et l'axe ou la paroi du corps), <strong>orientation</strong> (angle de la tubulure dans la vue de dessus), <strong>épaisseur nominale</strong> et <strong>épaisseur minimale après formage</strong> (pour les fonds), <strong>masse en épreuve</strong> (masse de l'appareil rempli d'eau, utile au dimensionnement des supports et du levage pendant l'épreuve).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les pièges les plus fréquents sont les suivants. Une saillie cotée depuis l'axe de la capacité confondue avec une saillie cotée depuis la paroi. Une orientation lue dans le mauvais sens de rotation (le sens horaire ou anti-horaire est indiqué sur la vue de dessus). Une épaisseur de fond lue comme épaisseur avant formage alors qu'elle est minimale après formage. Une bride dont le PN de la nomenclature diffère de celui du tableau des tubulures. Une quantité de nomenclature qui ne correspond pas au nombre de pièces visibles sur les vues.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Le plan décrit ci-dessous est celui d'un <strong>ballon d'air comprimé vertical</strong>. Plan n° BA-500-01, indice C, tolérances générales ISO 13920-BF.</p>\n<table>\n<thead><tr><th>Donnée de construction</th><th>Valeur</th></tr></thead>\n<tbody>\n<tr><td>Code de construction</td><td>CODAP, catégorie de construction indiquée sur le plan</td></tr>\n<tr><td>Fluide</td><td>Air comprimé (groupe 2, gaz)</td></tr>\n<tr><td>PS / TS</td><td>11 bar / − 10 °C à + 80 °C</td></tr>\n<tr><td>Volume</td><td>500 l</td></tr>\n<tr><td>Pression d'épreuve</td><td>Selon code, indiquée 15,8 bar</td></tr>\n<tr><td>Surépaisseur de corrosion</td><td>1 mm</td></tr>\n<tr><td>Coefficient de soudure</td><td>0,85</td></tr>\n<tr><td>CND</td><td>Contrôle radiographique par sondage des joints principaux</td></tr>\n</tbody>\n</table>\n<table>\n<thead><tr><th>Rep.</th><th>Qté</th><th>Désignation</th><th>Matière</th><th>Observations</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>1</td><td>Virole Di 700 ép. 6, hauteur 1 100</td><td>P265GH</td><td>Certificat 3.1</td></tr>\n<tr><td>2</td><td>2</td><td>Fond GRC Di 700 ép. 6 mini après formage</td><td>P265GH</td><td>Acheté, certificat 3.1</td></tr>\n<tr><td>3</td><td>1</td><td>Tubulure entrée DN 50, bride PN 16 type 11</td><td>P235GH / P250GH</td><td>N1</td></tr>\n<tr><td>4</td><td>1</td><td>Tubulure sortie DN 50, bride PN 16 type 11</td><td>P235GH / P250GH</td><td>N2</td></tr>\n<tr><td>5</td><td>1</td><td>Manchon taraudé purge</td><td>Acier</td><td>N3</td></tr>\n<tr><td>6</td><td>3</td><td>Pieds tube 60,3 × 4</td><td>S235JR</td><td>Avec platines rep. 7</td></tr>\n<tr><td>7</td><td>3</td><td>Platine 150 × 150 × 10</td><td>S235JR</td><td></td></tr>\n<tr><td>8</td><td>2</td><td>Oreille de levage ép. 12</td><td>S235JR</td><td></td></tr>\n</tbody>\n</table>\n<table>\n<thead><tr><th>Tubulure</th><th>Fonction</th><th>DN / PN</th><th>Orientation</th><th>Hauteur / LT inférieure</th></tr></thead>\n<tbody>\n<tr><td>N1</td><td>Entrée air</td><td>50 / 40</td><td>90°</td><td>750</td></tr>\n<tr><td>N2</td><td>Sortie air</td><td>50 / 16</td><td>270°</td><td>250</td></tr>\n<tr><td>N3</td><td>Purge</td><td>1/2 pouce</td><td>Fond inférieur, au point bas</td><td>—</td></tr>\n<tr><td>N4</td><td>Soupape de sûreté</td><td>DN 25 / 16</td><td>Fond supérieur</td><td>—</td></tr>\n</tbody>\n</table>\n<p>La vue de dessus montre quatre tubulures sur le corps et les fonds, et trois pieds à 120°.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>Identification.</strong> Il s'agit du plan d'ensemble indice C d'un ballon d'air comprimé vertical de 500 l, construit selon le CODAP. Les tolérances non indiquées relèvent de l'ISO 13920 classe B pour les dimensions et F pour la forme.</p>\n<p><strong>Exigences de fabrication.</strong> L'appareil est un équipement sous pression (PS 11 bar supérieure à 0,5 bar) contenant un gaz du groupe 2. Les matériaux sont des aciers pour appareils à pression avec certificat 3.1 : il faudra reporter les numéros de coulée sur la virole et vérifier les certificats des fonds achetés. Le coefficient de soudure de 0,85 est cohérent avec un contrôle radiographique par sondage des joints principaux : le joint longitudinal et les deux joints circulaires devront rester accessibles au contrôle. L'épreuve à 15,8 bar respecte bien le minimum de 1,43 × 11 = 15,73 bar. La surépaisseur de corrosion de 1 mm est incluse dans les épaisseurs de 6 mm.</p>\n<p><strong>Vérification d'épaisseur (ordre de grandeur).</strong> Avec P = 1,1 MPa, Di = 700 mm, z = 0,85 et une contrainte de calcul de l'ordre de 170 MPa, e = 1,1 × 700 / (2 × 170 × 0,85 − 1,1) ≈ 2,7 mm ; avec la corrosion, environ 3,7 mm. L'épaisseur de 6 mm laisse une marge, qui peut provenir d'une épaisseur minimale de construction ou de la tenue des ouvertures.</p>\n<p><strong>Incohérences relevées.</strong></p>\n<ul>\n<li>La tubulure N1 est indiquée PN 40 dans le tableau des tubulures et PN 16 dans la nomenclature (rep. 3). Il faut faire trancher le bureau d'études avant l'approvisionnement : PN 16 suffit a priori pour PS 11 bar à 80 °C, mais c'est le plan qui fait foi après correction.</li>\n<li>La tubulure N4 (soupape de sûreté) figure dans le tableau des tubulures mais n'a pas de repère dans la nomenclature : la pièce manque à la liste d'approvisionnement.</li>\n<li>La vue de dessus montre quatre tubulures, ce qui est cohérent avec le tableau (N1 à N4) mais pas avec la nomenclature (trois repères de tubulures).</li>\n</ul>\n<p><strong>Conclusion.</strong> Le plan est exploitable pour lancer l'approvisionnement des tôles et des fonds, mais deux points doivent être levés par écrit (PN de N1, pièce manquante pour N4) avant de commander les brides et de débiter les tubulures. La fabrication devra prévoir l'accessibilité des joints principaux pour la radiographie et la traçabilité des matériaux.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les questions relevées sur un plan se transmettent par une fiche de demande de renseignements ou un courriel tracé, jamais oralement. La réponse du bureau d'études prend la forme d'un nouvel indice du plan ; on ne fabrique pas sur un plan annoté à la main.</div>"
      }
     ],
     "points_cles": [
      "Un plan d'ensemble de capacité comporte cartouche, données de construction, vues, tableau des tubulures, nomenclature et notes.",
      "Toujours vérifier l'indice de révision avant d'exploiter un plan.",
      "Le tableau des données de construction fixe matériaux, épreuve, CND, corrosion et traitement thermique.",
      "Hauteurs depuis la ligne de tangence, orientations en degrés dans un sens de rotation indiqué.",
      "Tableau des tubulures et nomenclature se vérifient l'un par l'autre et par les vues.",
      "Une pression d'épreuve se contrôle par rapport au minimum de 1,43 × PS.",
      "Toute incohérence se signale par écrit et se résout par un nouvel indice de plan.",
      "Une analyse modèle suit l'ordre : identification, exigences, vérifications, incohérences, conclusion."
     ],
     "lexique": [
      {
       "terme": "Plan d'ensemble",
       "def": "Plan représentant l'ouvrage complet avec ses données, ses vues et sa nomenclature."
      },
      {
       "terme": "Indice de révision",
       "def": "Lettre ou numéro identifiant la version d'un plan."
      },
      {
       "terme": "Tableau des données de construction",
       "def": "Tableau du plan regroupant code, catégorie, pressions, températures, contrôles et épreuves."
      },
      {
       "terme": "Tableau des tubulures",
       "def": "Tableau listant chaque piquage avec sa fonction, ses dimensions, son orientation et sa hauteur."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste repérée des pièces d'un ensemble avec quantité, désignation et matière."
      },
      {
       "terme": "Saillie",
       "def": "Distance entre la face de bride d'une tubulure et une référence du corps."
      },
      {
       "terme": "Masse en épreuve",
       "def": "Masse de l'appareil rempli d'eau pour l'épreuve hydraulique."
      },
      {
       "terme": "Fond GRC",
       "def": "Fond bombé à grand rayon de carre."
      },
      {
       "terme": "Manchon taraudé",
       "def": "Pièce filetée intérieurement soudée sur une paroi pour raccorder un petit accessoire."
      },
      {
       "terme": "Demande de renseignements",
       "def": "Document tracé par lequel l'atelier interroge le bureau d'études sur un point du dossier."
      }
     ]
    },
    {
     "id": "btci-doc-isometrique",
     "titre": "Exploiter une isométrique de tuyauterie et sa liste de matériel",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les informations d'en-tête d'une isométrique : ligne, fluide, classe, conditions de service.",
      "Suivre le tracé d'une ligne dans l'espace à partir de la flèche nord et des altitudes.",
      "Vérifier la cohérence des cotes par cumul selon chaque axe.",
      "Rapprocher la liste de matériel des éléments dessinés.",
      "Déduire de l'isométrique les longueurs de débit et le découpage en tronçons préfabriqués."
     ],
     "sections": [
      {
       "titre": "Le document et sa structure",
       "contenu": "\n<p>Une <strong>isométrique</strong> représente une ligne de tuyauterie, ou un tronçon de ligne, en perspective unifilaire. À l'épreuve écrite, elle accompagne souvent une vue d'implantation de l'installation et une liste de matériel, et sert de support aux calculs de débit et à l'élaboration d'un processus de préfabrication.</p>\n<table>\n<thead><tr><th>Zone</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>En-tête ou cartouche</td><td>Numéro de ligne (souvent codé : DN, fluide, numéro d'ordre, classe), numéro de feuille, indice, unité des cotes</td></tr>\n<tr><td>Conditions de service</td><td>Fluide, pression et température de service et de calcul, pression d'épreuve, calorifuge, peinture</td></tr>\n<tr><td>Dessin</td><td>Tracé unifilaire, flèche nord, altitudes, cotes entre points de changement de direction, repères des éléments, soudures d'atelier et de chantier, supports</td></tr>\n<tr><td>Liste de matériel</td><td>Repère, désignation, DN, épaisseur ou série, norme, matière, quantité ou longueur</td></tr>\n<tr><td>Raccordements</td><td>Renvois aux équipements ou aux autres isométriques (« suite feuille 2 », « vers ballon B-12, tubulure N2 »)</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'isométrique ne se lit pas à l'échelle. Deux tronçons dessinés de même longueur peuvent mesurer 300 mm et 3 000 mm : seules les cotes et les altitudes donnent les dimensions.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire une isométrique. 1) Lire l'en-tête : numéro de ligne, classe, fluide, conditions de service, unité. 2) Orienter le dessin : repérer la flèche nord et en déduire les directions est-ouest et nord-sud ; la verticale est toujours dessinée verticale. 3) Identifier les deux extrémités (raccordements) et leurs altitudes. 4) Suivre la ligne de bout en bout en énonçant chaque déplacement : « départ de la bride à + 1 200, monte de 1 800, part vers l'est de 2 500… ». 5) Relever les cotes et faire le cumul selon chaque direction ; comparer aux différences de coordonnées ou d'altitude entre les extrémités. 6) Repérer chaque élément (coudes, tés, brides, vannes, réductions) et le retrouver dans la liste de matériel. 7) Repérer les soudures d'atelier et de chantier pour comprendre le découpage en tronçons. 8) Noter les supports et les points particuliers (pente, point bas de purge, point haut d'évent).</div>\n<p>L'étape 5 est la plus importante : une isométrique dont les cotes cumulées ne « bouclent » pas contient une erreur, et le tronçon fabriqué ne pourra pas être monté.</p>"
      },
      {
       "titre": "Vocabulaire et pièges",
       "contenu": "\n<p>Les isométriques utilisent un vocabulaire codifié : <strong>EL</strong> ou « niveau » (altitude d'un axe par rapport au zéro de l'usine), <strong>BOP</strong> (altitude du dessous du tube, utile pour la pose sur un rack), <strong>FW</strong> ou symbole de soudure de chantier, <strong>spool</strong> (tronçon préfabriqué), <strong>classe</strong> (code qui renvoie à une spécification de matériaux et d'accessoires), <strong>pente</strong> indiquée en pourcentage ou en millimètres par mètre, <strong>tronçon de fermeture</strong> ou surlongueur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les erreurs les plus courantes sont les suivantes. Confondre l'altitude de l'axe et celle du dessous du tube. Lire un déplacement vers l'ouest comme un déplacement vers l'est faute d'avoir orienté le dessin. Oublier qu'une cote entre axes inclut l'encombrement des accessoires. Compter une vanne ou une bride de l'équipement comme un élément à fournir alors que la liste de matériel l'indique « fourni par d'autres ». Ignorer une pente, ce qui crée un point bas où les condensats s'accumulent.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Isométrique de la ligne 80-VAP-012-B1, feuille 1/1, indice A, cotes en mm. Fluide : vapeur saturée, 8 bar, 175 °C. Classe B1 : tubes P235GH, accessoires à souder en P235GH ou P265GH, brides PN 16 type 11, joints spiralés. Tube DN 80 de diamètre extérieur 88,9 mm.</p>\n<p>Description du tracé, du point A au point B :</p>\n<ul>\n<li>Point A : bride de la tubulure N3 d'un ballon, axe à l'altitude + 1 500, face de bride orientée vers l'est.</li>\n<li>Depuis A, la ligne part vers l'est sur 1 600 mm (cote entre la face de bride et l'axe du coude C1).</li>\n<li>Coude C1 à 90° : la ligne monte verticalement sur 2 000 mm jusqu'au coude C2 (altitude + 3 500).</li>\n<li>Coude C2 à 90° : la ligne part vers le nord sur 3 200 mm jusqu'au coude C3.</li>\n<li>Coude C3 à 90° : la ligne repart vers l'est sur 900 mm jusqu'à la vanne V1, puis 400 mm jusqu'à la bride d'arrivée B (cote entre axe de C3 et face de la bride B : 1 300 mm, la vanne étant au milieu).</li>\n<li>Point B : bride d'un collecteur à l'altitude + 3 500.</li>\n<li>Soudures : un point de soudure de chantier « FW » est dessiné sur le tronçon nord-sud, à 1 000 mm du coude C2, avec la mention « surlongueur 100 ».</li>\n</ul>\n<table>\n<thead><tr><th>Rep.</th><th>Désignation</th><th>Qté</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Tube DN 80, 88,9 × 4,0, P235GH</td><td>9 m</td></tr>\n<tr><td>2</td><td>Coude 90° long rayon DN 80, R = 114,3</td><td>3</td></tr>\n<tr><td>3</td><td>Bride à collerette DN 80 PN 16, hauteur 50</td><td>2</td></tr>\n<tr><td>4</td><td>Vanne à brides DN 80 PN 16</td><td>Fournie par d'autres</td></tr>\n<tr><td>5</td><td>Bride à collerette DN 80 PN 16 (contre-brides de vanne)</td><td>2</td></tr>\n<tr><td>6</td><td>Joint spiralé DN 80 PN 16</td><td>4</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>Identification.</strong> Ligne de vapeur DN 80 en classe B1, conditions 8 bar et 175 °C, reliant la tubulure N3 d'un ballon à un collecteur. Les matériaux et la bride à collerette sont cohérents avec un service vapeur.</p>\n<p><strong>Vérification des cotes par cumul.</strong></p>\n<ul>\n<li>Selon la verticale : départ à + 1 500, montée de 2 000, arrivée à + 3 500 : cohérent.</li>\n<li>Selon l'axe est-ouest : 1 600 + 1 300 = 2 900 mm vers l'est entre la face de la bride A et celle de la bride B.</li>\n<li>Selon l'axe nord-sud : 3 200 mm vers le nord.</li>\n</ul>\n<p>Ces déplacements devront être confrontés aux coordonnées des deux équipements sur le plan d'implantation ; en l'absence de ce plan, on retient que la ligne est cohérente en altitude.</p>\n<p><strong>Points d'attention techniques.</strong> La ligne monte de 2 000 mm après le ballon puis reste horizontale : le tronçon horizontal nord-sud ne présente pas de pente indiquée, alors qu'une ligne de vapeur est habituellement posée avec une légère pente vers un point de purge des condensats. Il faut poser la question. La vanne V1 est fournie par d'autres : seules ses contre-brides et ses joints sont à notre charge.</p>\n<p><strong>Débit du tube vertical entre C1 et C2.</strong> Cote entre axes 2 000 mm ; encombrement de chaque coude 114,3 mm ; jeu de soudage pris à 2 mm par joint. L = 2 000 − 2 × 114,3 − 2 × 2 = 1 767,4 mm.</p>\n<p><strong>Débit du premier tube horizontal entre la bride A et C1.</strong> L = 1 600 − 50 − 114,3 − 2 × 2 = 1 431,7 mm (la cote part de la face de bride ; l'épaisseur du joint n'est pas comprise dans cette cote).</p>\n<p><strong>Découpage en tronçons.</strong> La soudure de chantier FW coupe la ligne en deux spools : spool 1 de la bride A au FW (bride, tube, C1, tube vertical, C2, tube de 1 000 mm entre axe C2 et FW, réduit des encombrements), spool 2 du FW à la bride B (tube nord-sud livré avec 100 mm de surlongueur, C3, tube, contre-bride de vanne). Le spool 1 a des dimensions transportables : environ 1,6 m × 2 m × 1 m.</p>\n<p><strong>Contrôle de la liste de matériel.</strong> Longueur de tube estimée : 1,43 + 1,77 + environ 1,0 + 2,2 (+ 0,1 de surlongueur) + longueurs de part et d'autre de la vanne, soit environ 7,5 m hors chutes ; les 9 m prévus laissent une marge raisonnable pour les chutes et le chanfreinage. Les quantités de coudes (3), de brides (2 + 2) et de joints (4) correspondent au tracé.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant de lancer la préfabrication, le chef d'équipe trace souvent sur l'isométrique, au surligneur, les limites de chaque spool et y reporte les numéros de soudure. Ces numéros seront repris dans le cahier de soudage, pour relier chaque joint au soudeur et aux contrôles réalisés.</div>"
      }
     ],
     "points_cles": [
      "L'isométrique comporte en-tête, conditions de service, dessin unifilaire, liste de matériel et renvois.",
      "Elle n'est pas à l'échelle : seules cotes et altitudes font foi.",
      "On l'oriente par la flèche nord avant de suivre la ligne déplacement par déplacement.",
      "Le cumul des cotes selon chaque axe doit correspondre aux positions des extrémités.",
      "Altitude d'axe et altitude du dessous du tube ne se confondent pas.",
      "Les soudures de chantier délimitent les spools ; le tronçon de fermeture porte la surlongueur.",
      "Les longueurs de débit se déduisent des cotes entre axes moins les encombrements et les jeux.",
      "La liste de matériel se contrôle par rapport au tracé et aux éléments fournis par d'autres."
     ],
     "lexique": [
      {
       "terme": "Numéro de ligne",
       "def": "Code identifiant une ligne de tuyauterie, souvent composé du DN, du fluide, d'un numéro et de la classe."
      },
      {
       "terme": "Conditions de service",
       "def": "Pression, température et fluide pour lesquels la ligne fonctionne."
      },
      {
       "terme": "Flèche nord",
       "def": "Repère d'orientation du dessin par rapport à l'installation."
      },
      {
       "terme": "BOP",
       "def": "Altitude du dessous du tube, utilisée pour la pose sur les supports."
      },
      {
       "terme": "FW",
       "def": "Soudure de chantier, réalisée lors du montage sur site."
      },
      {
       "terme": "Point de changement de direction",
       "def": "Intersection des axes de deux tronçons successifs, origine des cotes d'isométrique."
      },
      {
       "terme": "Purge",
       "def": "Point bas d'une ligne permettant d'évacuer les liquides ou condensats."
      },
      {
       "terme": "Évent",
       "def": "Point haut d'une ligne permettant d'évacuer l'air."
      },
      {
       "terme": "Contre-bride",
       "def": "Bride installée en vis-à-vis de celle d'un organe pour le raccorder à la ligne."
      },
      {
       "terme": "Fourni par d'autres",
       "def": "Mention indiquant qu'un élément n'est pas à la charge de l'entreprise qui fabrique la ligne."
      }
     ]
    },
    {
     "id": "btci-doc-dmos-certificat",
     "titre": "Exploiter un DMOS et un certificat de qualification de soudeur",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Repérer la structure d'un descriptif de mode opératoire de soudage et le vocabulaire de chaque rubrique.",
      "Vérifier qu'un DMOS couvre un joint donné du plan : matériau, épaisseur, préparation, position, procédé.",
      "Traduire un DMOS en réglages et consignes de poste pour le soudeur.",
      "Vérifier qu'un soudeur est qualifié pour un travail à partir de son certificat.",
      "Rédiger une conclusion argumentée de conformité."
     ],
     "sections": [
      {
       "titre": "Les documents et leur structure",
       "contenu": "\n<p>Le <strong>DMOS</strong> (descriptif de mode opératoire de soudage) est l'instruction de soudage remise au soudeur. Son contenu est fixé par la NF EN ISO 15609-1 pour le soudage à l'arc des métaux. Il se présente presque toujours comme un formulaire d'une à deux pages organisé en rubriques.</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Identification</td><td>Numéro du DMOS, indice, référence du ou des QMOS qui le couvrent, entreprise</td></tr>\n<tr><td>Procédé et type d'assemblage</td><td>Numéro ISO 4063, joint bout à bout (BW) ou d'angle (FW), tôle ou tube</td></tr>\n<tr><td>Métal de base</td><td>Désignation ou groupe de matériaux, épaisseur, diamètre extérieur</td></tr>\n<tr><td>Préparation</td><td>Croquis coté du joint : angle, talon, écartement, ordre et nombre de passes</td></tr>\n<tr><td>Position</td><td>Code ISO 6947 et sens de progression</td></tr>\n<tr><td>Produits consommables</td><td>Désignation normalisée du métal d'apport, diamètre, marque, gaz de protection et de protection envers, débits, conditions d'étuvage</td></tr>\n<tr><td>Paramètres par passe</td><td>Tableau : passe, procédé, diamètre d'apport, intensité, tension, type de courant et polarité, vitesse de fil, vitesse de soudage, énergie de soudage</td></tr>\n<tr><td>Températures</td><td>Préchauffage, température entre passes maximale, post-chauffage, traitement thermique après soudage</td></tr>\n<tr><td>Techniques</td><td>Balayage ou passes tirées, nettoyage entre passes, gougeage envers, pointage</td></tr>\n</tbody>\n</table>\n<p>Le <strong>certificat de qualification de soudeur</strong> (NF EN ISO 9606-1 pour les aciers) indique l'identité du soudeur, la date de l'essai, l'organisme ou l'examinateur, les conditions de l'essai et le <strong>domaine de validité</strong> qui en découle, ainsi que les confirmations semestrielles de l'employeur.</p>"
      },
      {
       "titre": "Méthode d'exploitation pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'un joint peut être soudé selon un DMOS par un soudeur donné. 1) Relever sur le plan les caractéristiques du joint : matériaux des deux pièces, épaisseurs, diamètre s'il s'agit d'un tube, type de joint, préparation, position imposée par la situation réelle, procédé demandé, niveau de qualité. 2) Lire le DMOS rubrique par rubrique et comparer chaque caractéristique. 3) Pour chaque écart, chercher s'il reste dans le domaine admis (une plage d'épaisseurs ou de diamètres est souvent indiquée). 4) Lire le certificat du soudeur : procédé, type de produit (tôle ou tube), type de joint, groupe de matériaux, épaisseur et diamètre couverts, positions couvertes, métal d'apport. 5) Vérifier la date de validité et la présence des confirmations semestrielles. 6) Conclure par joint : couvert ou non couvert, avec la raison.</div>\n<p>Le contrôle croisé se résume souvent dans un tableau à trois colonnes : « exigence du joint », « couverture du DMOS », « couverture du certificat du soudeur ». Une seule case non couverte suffit à interdire le soudage du joint dans ces conditions : il faut alors un autre DMOS, un autre soudeur ou une nouvelle qualification. Cette présentation est appréciée à l'examen, car elle rend la démarche visible et permet de justifier chaque conclusion sans oubli. Elle est aussi celle des auditeurs et des organismes notifiés, qui vérifient sur pièces que chaque joint d'un appareil a été soudé par un soudeur qualifié, selon un mode opératoire qualifié.</p>\n<p>La traduction du DMOS en consignes de poste consiste ensuite à préparer les réglages du générateur, le gaz et son débitmètre, le produit d'apport étuvé si nécessaire, les moyens de préchauffage et de mesure de température (crayons thermosensibles ou thermomètre de contact), et les outils de nettoyage entre passes.</p>"
      },
      {
       "titre": "Vocabulaire et pièges",
       "contenu": "\n<p>Les DMOS emploient des abréviations à connaître : <strong>BW</strong> (soudure bout à bout), <strong>FW</strong> (soudure d'angle, à ne pas confondre avec la soudure de chantier des isométriques), <strong>ss nb</strong> (soudé d'un seul côté sans support envers), <strong>ss mb</strong> (soudé d'un côté avec support envers), <strong>bs</strong> (soudé des deux côtés), <strong>t</strong> (épaisseur), <strong>D</strong> (diamètre extérieur du tube), <strong>DC+</strong> (courant continu, électrode au pôle positif), <strong>DC−</strong> (électrode au pôle négatif).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les confusions les plus fréquentes sont les suivantes. Considérer qu'un DMOS « tôle » couvre un tube de petit diamètre, ou l'inverse, sans le vérifier. Oublier que la position réelle d'un joint sur une pièce fixe peut être plus difficile que la position d'essai. Prendre un débit de gaz pour une vitesse de fil (les deux sont en unités différentes : litres par minute et mètres par minute). Accepter un certificat dont la dernière confirmation semestrielle est dépassée. Croire qu'un soudeur qualifié en 135 l'est aussi en 136 ou en 141.</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "\n<p>On doit souder le joint circulaire bout à bout entre deux viroles en P265GH d'épaisseur 8 mm et de diamètre extérieur 1 016 mm. La capacité est soudée sur vireur, joint en position à plat, mais le plan impose la possibilité de réparer en place en position verticale montante.</p>\n<p><strong>Extrait du DMOS n° 135-12, indice B</strong> (couvert par le QMOS 2023-07) :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Valeur</th></tr></thead>\n<tbody>\n<tr><td>Procédé</td><td>135</td></tr>\n<tr><td>Joint</td><td>BW, tôle, ss nb</td></tr>\n<tr><td>Métal de base</td><td>Aciers du groupe 1 (dont P265GH), épaisseur 3 à 16 mm</td></tr>\n<tr><td>Préparation</td><td>V 60°, talon 1,5 mm, écartement 2 mm</td></tr>\n<tr><td>Positions</td><td>PA, PF</td></tr>\n<tr><td>Apport</td><td>ISO 14341-A – G 42 4 M21 3Si1, fil 1,0 mm</td></tr>\n<tr><td>Gaz</td><td>ISO 14175 – M21, 12 à 15 l/min</td></tr>\n<tr><td>Préchauffage</td><td>Aucun au-dessus de + 5 °C ; température entre passes maxi 250 °C</td></tr>\n</tbody>\n</table>\n<table>\n<thead><tr><th>Passe</th><th>Intensité (A)</th><th>Tension (V)</th><th>Vitesse de fil (m/min)</th><th>Courant</th><th>Énergie (kJ/mm)</th></tr></thead>\n<tbody>\n<tr><td>1 Racine</td><td>110 à 130</td><td>17 à 18</td><td>3,5 à 4,0</td><td>DC+</td><td>0,5 à 0,9</td></tr>\n<tr><td>2 à 3 Remplissage et finition</td><td>170 à 200</td><td>21 à 24</td><td>6 à 7,5</td><td>DC+</td><td>0,8 à 1,4</td></tr>\n</tbody>\n</table>\n<p><strong>Extrait du certificat du soudeur M. B.</strong> : NF EN ISO 9606-1 135 P BW FM1 S t10 PF ss nb ; épaisseur couverte 3 à 20 mm ; positions couvertes PA, PF (et PB pour les soudures d'angle) ; essai du 12 mars de l'année précédente ; confirmations semestrielles signées en septembre et en mars.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>Le DMOS couvre-t-il le joint ?</strong></p>\n<ul>\n<li>Procédé : 135 demandé, 135 décrit. Conforme.</li>\n<li>Type de joint : bout à bout sur tôle roulée de grand diamètre ; un diamètre de 1 016 mm est traité comme une tôle. Conforme.</li>\n<li>Matériau et épaisseur : P265GH appartient au groupe 1 ; 8 mm est dans la plage 3 à 16 mm. Conforme.</li>\n<li>Positions : PA en fabrication sur vireur, PF pour une éventuelle réparation en place ; les deux figurent au DMOS. Conforme.</li>\n<li>Soudé d'un seul côté sans support envers : cohérent avec un joint circulaire dont l'intérieur n'est pas accessible pendant le soudage. Il faudra soigner la passe de racine.</li>\n</ul>\n<p><strong>Le soudeur est-il qualifié ?</strong> La désignation se lit ainsi : procédé 135, produit tôle (P), soudure bout à bout (BW), groupe de métal d'apport FM1, fil plein (S), épaisseur d'essai 10 mm, position d'essai PF, soudé d'un côté sans support. Le domaine couvre les épaisseurs de 3 à 20 mm (8 mm inclus), les positions PA et PF, le même type de joint. Les confirmations semestrielles sont à jour. Il reste à vérifier la date limite de validité selon l'option de prolongation retenue par l'entreprise : l'essai date de plus d'un an, ce qui reste en principe dans la période de validité, à confirmer sur le certificat. Le soudeur est donc qualifié pour ce joint.</p>\n<p><strong>Consignes de poste.</strong> Régler le générateur en DC+, fil 1,0 mm, gaz M21 à 12 à 15 l/min ; racine vers 120 A et 17,5 V ; remplissage vers 185 A et 22,5 V ; vérifier la température de la tôle (au-dessus de 5 °C) et contrôler la température entre passes au crayon thermosensible de 250 °C ; brosser et meuler légèrement entre passes ; relever les paramètres réels au moins une fois pour vérifier l'énergie de soudage.</p>\n<p><strong>Conclusion.</strong> Le joint peut être soudé selon le DMOS 135-12 indice B par M. B. Les relevés de paramètres et le numéro de joint seront reportés au cahier de soudage.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une conclusion de conformité se construit critère par critère, chaque fois en citant la valeur exigée et la valeur disponible. Une conclusion « conforme » sans justification n'a aucune valeur, ni à l'examen ni en audit.</div>"
      }
     ],
     "points_cles": [
      "Le DMOS est structuré en rubriques : procédé, joint, métal de base, préparation, position, consommables, paramètres, températures, techniques.",
      "Un DMOS est couvert par un ou plusieurs QMOS dont il ne peut sortir du domaine de validité.",
      "Le certificat du soudeur se lit par sa désignation : norme, procédé, produit, joint, groupe d'apport, épaisseur, position, conditions.",
      "Les confirmations semestrielles de l'employeur conditionnent la validité du certificat.",
      "On vérifie le joint réel critère par critère : procédé, matériau, épaisseur, diamètre, position, type de joint.",
      "Sur les DMOS, FW signifie soudure d'angle ; sur les isométriques, soudure de chantier.",
      "Le DMOS se traduit en réglages de poste et en consignes de température et de nettoyage.",
      "Une conclusion de conformité cite pour chaque critère la valeur exigée et la valeur disponible."
     ],
     "lexique": [
      {
       "terme": "DMOS",
       "def": "Descriptif de mode opératoire de soudage : instruction détaillée remise au soudeur."
      },
      {
       "terme": "QMOS",
       "def": "Procès-verbal de qualification qui valide un mode opératoire par des essais."
      },
      {
       "terme": "BW",
       "def": "Abréviation de soudure bout à bout."
      },
      {
       "terme": "FW",
       "def": "Abréviation de soudure d'angle dans les documents de qualification."
      },
      {
       "terme": "ss nb",
       "def": "Soudé d'un seul côté sans support envers."
      },
      {
       "terme": "Groupe de matériaux",
       "def": "Classement des matériaux de base de comportement voisin au soudage, utilisé pour les domaines de validité."
      },
      {
       "terme": "FM1",
       "def": "Groupe de métaux d'apport pour aciers non alliés et à grain fin dans la NF EN ISO 9606-1."
      },
      {
       "terme": "Confirmation semestrielle",
       "def": "Attestation de l'employeur que le soudeur a soudé dans son domaine au cours des six derniers mois."
      },
      {
       "terme": "Crayon thermosensible",
       "def": "Crayon dont la trace fond à une température donnée, utilisé pour vérifier préchauffage et température entre passes."
      },
      {
       "terme": "DC+",
       "def": "Courant continu avec l'électrode reliée au pôle positif."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 7 — Documents de fabrication et d'intervention",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "btci-doc-gamme-mise-en-tole",
     "titre": "Analyser une gamme de fabrication et un dossier de découpe",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Repérer la structure d'une gamme de fabrication et d'un dossier de découpe issu de la FAO.",
      "Vérifier l'ordre des phases au regard de l'accessibilité, des déformations et des contrôles.",
      "Exploiter une feuille de mise en tôle : formats, pièces, quantités, taux d'utilisation, temps.",
      "Repérer les erreurs et proposer des améliorations argumentées.",
      "Chiffrer l'incidence d'une modification sur le temps ou la matière."
     ],
     "sections": [
      {
       "titre": "Les documents et leur structure",
       "contenu": "\n<p>La <strong>gamme de fabrication</strong> (ou gamme opératoire, fiche suiveuse) accompagne la commande dans l'atelier. Elle comporte un en-tête (numéro d'ordre de fabrication, ouvrage, plan et indice, quantité, délai) et un tableau des phases : numéro (10, 20, 30… pour pouvoir insérer une phase), poste ou machine, désignation des opérations, moyens et outillages, documents associés (programme, DMOS), contrôles, temps alloué, et souvent une case de visa de l'opérateur.</p>\n<p>Le <strong>dossier de découpe</strong> issu du logiciel d'imbrication comprend :</p>\n<ul>\n<li>une <strong>feuille de mise en tôle</strong> par format : dessin des pièces placées, nuance, épaisseur, dimensions du format, nombre de tôles à découper avec ce placement ;</li>\n<li>la <strong>liste des pièces</strong> placées : repère, quantité demandée, quantité placée, surface ou masse unitaire ;</li>\n<li>des <strong>indicateurs</strong> : taux d'utilisation, masse de chute, longueur de coupe, nombre d'amorçages, temps de découpe estimé ;</li>\n<li>la référence du <strong>programme</strong> machine généré.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la gamme dit dans quel ordre et avec quels moyens on fabrique ; la feuille de mise en tôle dit comment la matière est consommée. Les deux se lisent ensemble : une pièce absente de la mise en tôle est une pièce qui manquera au montage.</div>"
      },
      {
       "titre": "Méthode d'analyse pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une gamme et son dossier de découpe. 1) Vérifier l'en-tête : plan et indice identiques sur la gamme, la mise en tôle et le programme. 2) Lire les phases dans l'ordre et, pour chaque soudure, se demander si elle reste accessible au soudeur et au contrôleur au moment prévu. 3) Vérifier que chaque formage précède les opérations qu'il rendrait impossibles ou que chaque perçage est placé au bon moment (avant roulage s'il est simple à positionner à plat, après s'il dépend de la forme finale). 4) Repérer les contrôles : sont-ils placés avant les étapes qui les rendraient impossibles ? 5) Comparer la liste des pièces de la mise en tôle à la nomenclature : repères, quantités, nuance, épaisseur. 6) Lire les indicateurs de la mise en tôle et juger le taux d'utilisation. 7) Recalculer un ou deux temps ou masses pour vérifier les ordres de grandeur. 8) Rédiger les observations, chacune avec sa justification et sa proposition.</div>\n<p>Pour vérifier un temps alloué, on le décompose. Un temps de découpe se compare à la longueur de coupe divisée par la vitesse de coupe de la machine pour la matière et l'épaisseur, augmentée d'un temps par amorçage et des déplacements à vide. Un temps d'assemblage soudé se compare à la longueur de cordon à déposer, au nombre de passes, au taux de dépôt du procédé et au facteur de marche réel du soudeur, qui inclut pointage, nettoyage et changements de position. Un temps très éloigné de cette estimation n'est pas forcément faux, mais il doit être expliqué : outillage particulier, première pièce d'une série, difficulté d'accès. La remarque est d'autant plus utile qu'elle s'appuie sur un calcul simple et chiffré.</p>"
      },
      {
       "titre": "Vocabulaire et pièges",
       "contenu": "\n<p>Les termes propres à ces documents sont : <strong>phase</strong> (ensemble d'opérations réalisées sur un même poste), <strong>sous-phase</strong>, <strong>temps de préparation</strong> (réglage, chargement du programme, mise en place des outils, compté une fois par lot) et <strong>temps unitaire</strong> (par pièce), <strong>amorçage</strong> (point de perçage initial du jet de découpe), <strong>micro-attache</strong> (petit pont de matière laissé pour maintenir une pièce dans le squelette), <strong>squelette</strong> (chute restante après découpe), <strong>chute réutilisable</strong> (chute assez grande pour être stockée et identifiée).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les pièges classiques sont les suivants. Un programme établi sur un indice de plan antérieur. Une pièce placée dans une nuance ou une épaisseur voisine de celle demandée (304L au lieu de 316L, 5 mm au lieu de 6 mm). Une quantité placée inférieure à la quantité demandée, signalée seulement par un chiffre dans la liste. Une phase de contrôle radiographique placée après la pose d'un renfort qui masque le joint. Un perçage de piquage fait avant roulage sur une virole dont le roulage déformera le trou.</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "\n<p>Ouvrage : trémie de stockage en S235JR, plan TR-08 indice B. Elle se compose d'une partie haute prismatique (4 flancs en tôle de 5 mm), d'un tronc de pyramide inférieur (4 faces en tôle de 5 mm), d'un cadre supérieur en cornière et de 4 goussets de supportage (tôle de 10 mm).</p>\n<p><strong>Extrait de la gamme :</strong></p>\n<table>\n<thead><tr><th>Phase</th><th>Poste</th><th>Opérations</th><th>Contrôle</th><th>Temps alloué</th></tr></thead>\n<tbody>\n<tr><td>10</td><td>Plasma</td><td>Découper flancs et faces (programme TR08-A, indice A)</td><td>Dimensions, diagonales</td><td>1,5 h</td></tr>\n<tr><td>20</td><td>Plasma</td><td>Découper goussets ép. 10 (programme TR08-G)</td><td>Dimensions</td><td>0,5 h</td></tr>\n<tr><td>30</td><td>Scie</td><td>Débiter les cornières du cadre, coupes d'onglet</td><td>Longueurs</td><td>0,5 h</td></tr>\n<tr><td>40</td><td>Assemblage</td><td>Assembler et souder le tronc de pyramide</td><td>Visuel</td><td>4 h</td></tr>\n<tr><td>50</td><td>Assemblage</td><td>Assembler la partie prismatique sur le tronc de pyramide, souder</td><td>Visuel</td><td>3 h</td></tr>\n<tr><td>60</td><td>Presse plieuse</td><td>Plier les bords tombés des faces du tronc de pyramide</td><td>Angles</td><td>1 h</td></tr>\n<tr><td>70</td><td>Assemblage</td><td>Poser cadre et goussets, souder</td><td>Dimensions générales</td><td>3 h</td></tr>\n</tbody>\n</table>\n<p><strong>Extrait de la feuille de mise en tôle (tôle 5 mm, format 3 000 × 1 500) :</strong> nuance S235JR ; programme TR08-A ; nombre de tôles : 2 ; pièces : flanc rep. 1, demandé 4, placé 4 ; face rep. 2, demandé 4, placé 3 ; taux d'utilisation 62 % ; masse de chute 68 kg ; temps de découpe estimé 38 min.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>Cohérence documentaire.</strong> Le plan est à l'indice B, mais le programme de découpe TR08-A est à l'indice A. Il faut vérifier si la modification de l'indice B concerne les pièces découpées ; tant que ce n'est pas fait, la découpe ne peut pas être lancée.</p>\n<p><strong>Quantités.</strong> La face rep. 2 est demandée à 4 exemplaires mais seulement 3 sont placées : il manquera une face du tronc de pyramide. Il faut compléter la mise en tôle, ou prévoir un placement complémentaire dans une chute réutilisable.</p>\n<p><strong>Ordre des phases.</strong> La phase 60 (pliage des bords tombés des faces) est placée après l'assemblage et le soudage du tronc de pyramide (phase 40) : il est impossible de plier sur presse des faces déjà soudées entre elles. Le pliage doit être placé juste après la découpe, en phase 15 par exemple, avant tout assemblage.</p>\n<p><strong>Contrôles.</strong> Les phases 40 et 50 ne prévoient qu'un contrôle visuel ; pour une trémie, les dimensions de l'ouverture inférieure et l'équerrage de la partie prismatique conditionnent le montage de l'équipement situé dessous (vanne ou extracteur). On propose d'ajouter un contrôle dimensionnel de l'ouverture inférieure et des diagonales en fin de phase 40, quand une correction est encore possible.</p>\n<p><strong>Taux d'utilisation.</strong> 62 % est faible. Deux tôles de 3 000 × 1 500 × 5 représentent 2 × 4,5 × 0,005 × 7 850 ≈ 353 kg ; avec 62 % d'utilisation, environ 134 kg de chutes au total. La valeur de 68 kg indiquée correspond à une seule tôle : la lecture « par format » doit être précisée. On peut proposer d'imbriquer les goussets de 10 mm à part (épaisseur différente, donc impossible sur la même tôle) mais de placer d'autres pièces de 5 mm d'autres commandes dans les espaces libres, ou de conserver une chute réutilisable identifiée.</p>\n<p><strong>Gamme corrigée proposée :</strong> 10 découpe des tôles de 5 mm (programme mis à l'indice B, 4 faces placées) ; 15 pliage des bords tombés ; 20 découpe des goussets ; 30 débit des cornières ; 40 assemblage et soudage du tronc de pyramide avec contrôle dimensionnel ; 50 assemblage de la partie prismatique ; 60 pose du cadre et des goussets ; 70 contrôle final.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les phases sont numérotées de dix en dix précisément pour permettre ce type d'insertion (phase 15) sans renuméroter toute la gamme. Toute modification de gamme est datée et visée, et le programme machine corrigé est archivé avec l'indice du plan correspondant.</div>"
      }
     ],
     "points_cles": [
      "La gamme fixe l'ordre, les postes, les moyens, les contrôles et les temps ; la mise en tôle fixe la consommation de matière.",
      "Le plan, la gamme et le programme doivent porter le même indice.",
      "Chaque formage précède les assemblages qui le rendraient impossible.",
      "Chaque contrôle est placé quand la caractéristique est encore accessible et corrigeable.",
      "La liste des pièces placées se compare à la nomenclature : repère, nuance, épaisseur, quantité.",
      "Un taux d'utilisation faible se discute : imbrication avec d'autres commandes, chutes réutilisables.",
      "Les phases numérotées de dix en dix permettent d'insérer une phase sans renuméroter.",
      "Chaque observation d'analyse s'accompagne d'une justification et d'une proposition."
     ],
     "lexique": [
      {
       "terme": "Gamme de fabrication",
       "def": "Document listant les phases de fabrication avec postes, moyens, contrôles et temps."
      },
      {
       "terme": "Ordre de fabrication",
       "def": "Document qui lance la fabrication d'une quantité d'un ouvrage pour un délai donné."
      },
      {
       "terme": "Phase",
       "def": "Ensemble d'opérations réalisées sur un même poste de travail."
      },
      {
       "terme": "Temps de préparation",
       "def": "Temps de réglage et de mise en route compté une fois par lot."
      },
      {
       "terme": "Feuille de mise en tôle",
       "def": "Document de FAO montrant le placement des pièces sur un format et ses indicateurs."
      },
      {
       "terme": "Amorçage",
       "def": "Point où le jet de découpe perce la tôle pour commencer un contour."
      },
      {
       "terme": "Micro-attache",
       "def": "Petit pont de matière maintenant une pièce dans le squelette pendant la découpe."
      },
      {
       "terme": "Squelette",
       "def": "Chute restante d'une tôle après extraction des pièces découpées."
      },
      {
       "terme": "Chute réutilisable",
       "def": "Chute de dimensions suffisantes, identifiée et stockée pour une utilisation ultérieure."
      },
      {
       "terme": "Bord tombé",
       "def": "Rebord plié en périphérie d'une tôle pour la raidir ou faciliter l'assemblage."
      }
     ]
    },
    {
     "id": "btci-doc-intervention-site",
     "titre": "Exploiter les documents d'une intervention sur site : permis, plan de prévention, FDS",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Repérer la structure d'un plan de prévention, d'un permis de travail et d'un permis de feu.",
      "Extraire d'une fiche de données de sécurité les informations utiles à l'intervention.",
      "Vérifier la cohérence entre les documents et la situation réelle du chantier.",
      "Déterminer les équipements de protection et les mesures à mettre en œuvre.",
      "Rédiger une analyse argumentée et identifier les conditions de démarrage du travail."
     ],
     "sections": [
      {
       "titre": "Les documents et leur structure",
       "contenu": "\n<p>Une intervention sur une installation industrielle s'appuie sur un ensemble de documents délivrés ou validés par l'exploitant. À l'épreuve écrite comme sur le chantier, on demande souvent d'en extraire les informations nécessaires et de vérifier qu'elles sont complètes et cohérentes.</p>\n<table>\n<thead><tr><th>Document</th><th>Rubriques principales</th></tr></thead>\n<tbody>\n<tr><td>Plan de prévention</td><td>Entreprises concernées et responsables, description et localisation des travaux, dates et effectifs, risques d'interférence identifiés lors de l'inspection commune, mesures de prévention à la charge de chacun, consignes d'urgence, signatures</td></tr>\n<tr><td>Permis de travail</td><td>Équipement et repère, nature du travail, date et créneau de validité, état de l'installation (consignée, vidangée, rincée, mesures d'atmosphère), précautions et EPI, signatures du délivreur et de l'exécutant, clôture</td></tr>\n<tr><td>Permis de feu</td><td>Nature du point chaud, lieu, durée, mesures avant le travail (éloignement ou protection des combustibles, obturation des ouvertures, moyens d'extinction), mesures pendant (surveillance), mesures après (surveillance post-travaux pendant une durée définie), signatures</td></tr>\n<tr><td>Fiche de données de sécurité (FDS)</td><td>Seize rubriques normalisées décrivant les dangers d'un produit chimique et les mesures associées</td></tr>\n</tbody>\n</table>\n<p>Les seize rubriques de la FDS sont fixées par le règlement européen REACH. Pour l'intervenant, les plus utiles sont la rubrique 2 (identification des dangers : pictogrammes, mention d'avertissement, mentions de danger H et conseils de prudence P), la rubrique 4 (premiers secours), la rubrique 7 (manipulation et stockage), la rubrique 8 (contrôles de l'exposition et protection individuelle), la rubrique 10 (stabilité et réactivité, matières incompatibles) et la rubrique 13 (élimination).</p>"
      },
      {
       "titre": "Méthode d'exploitation pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une intervention à partir du dossier de l'exploitant. 1) Identifier précisément le travail : équipement, repère, localisation, nature des opérations (coupe, soudage, meulage, levage), durée. 2) Lire la FDS du fluide contenu : dangers, effets en cas de contact, incompatibilités, EPI prescrits, premiers secours. 3) Lire le permis de travail : l'état de l'installation déclaré correspond-il au besoin (vidange, rinçage, consignation des deux côtés) ? Les mesures d'atmosphère sont-elles prévues ? 4) Lire le permis de feu : toutes les opérations par point chaud prévues sont-elles couvertes (soudage, mais aussi découpage et meulage) ? La surveillance après travaux est-elle organisée ? 5) Lire le plan de prévention : les risques d'interférence (autre entreprise, circulation, levage au-dessus d'une zone occupée) sont-ils traités ? 6) Établir la liste des EPI et des moyens collectifs. 7) Lister les conditions à remplir avant de démarrer et les écarts à signaler.</div>"
      },
      {
       "titre": "Vocabulaire et pièges",
       "contenu": "\n<p>On rencontre dans ces documents les termes : <strong>délivreur</strong> (représentant de l'exploitant qui signe le permis), <strong>exécutant</strong> (responsable de l'équipe qui réalise le travail), <strong>clôture</strong> du permis (signature de fin de travail, remise de l'installation à l'exploitant), <strong>mention de danger</strong> (phrase H, par exemple H314 : provoque de graves brûlures de la peau et de graves lésions des yeux), <strong>conseil de prudence</strong> (phrase P), <strong>VLEP</strong> (valeur limite d'exposition professionnelle), <strong>LIE</strong> (limite inférieure d'explosivité, mesurée par l'explosimètre).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les erreurs d'analyse les plus fréquentes sont les suivantes. Considérer qu'une tuyauterie vidangée est vide : des poches de liquide restent aux points bas et dans les bras morts. Oublier que le meulage et le découpage sont des points chauds. Se fier à une FDS d'un autre fournisseur ou d'une autre concentration. Ne pas vérifier la date et le créneau de validité du permis. Ne pas prévoir la surveillance après travaux par point chaud, alors que de nombreux départs de feu se déclarent après le départ de l'équipe.</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "\n<p>Une entreprise de chaudronnerie doit remplacer un tronçon corrodé de 3 m d'une tuyauterie DN 50 inox transportant de la <strong>soude</strong> (hydroxyde de sodium en solution à 30 %), dans un atelier de production, à 4 m de hauteur, sur un rack partagé avec une ligne de fioul domestique. Les travaux comprennent la coupe de l'ancien tronçon, la préparation des extrémités à la meuleuse et le soudage TIG des raccords.</p>\n<p><strong>Extrait de la FDS de la solution de soude à 30 %</strong> :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Information</th></tr></thead>\n<tbody>\n<tr><td>2</td><td>Pictogramme corrosion ; mention « Danger » ; H290 peut être corrosif pour les métaux ; H314 provoque de graves brûlures de la peau et de graves lésions des yeux</td></tr>\n<tr><td>4</td><td>Contact oculaire : rincer immédiatement et abondamment à l'eau pendant une durée prolongée, consulter un ophtalmologiste ; contact cutané : retirer les vêtements contaminés, rincer abondamment</td></tr>\n<tr><td>8</td><td>Lunettes-masque étanches ou écran facial, gants résistants aux produits chimiques (matériau précisé), vêtement de protection chimique</td></tr>\n<tr><td>10</td><td>Réagit avec l'aluminium, le zinc, l'étain en dégageant de l'hydrogène ; réaction exothermique avec les acides</td></tr>\n</tbody>\n</table>\n<p><strong>Extrait du permis de travail</strong> : ligne 50-NaOH-004 ; travail : « remplacement tronçon, coupe et soudage » ; validité : jour J de 7 h à 17 h ; état : vanne amont fermée et cadenassée, ligne vidangée par la purge ; mesures d'atmosphère : sans objet ; EPI : casque, lunettes, gants de manutention.</p>\n<p><strong>Extrait du permis de feu</strong> : opération : « soudage TIG » ; protections : bâche ignifugée sur la ligne de fioul ; extincteur à poudre au pied de l'échafaudage ; surveillance pendant les travaux par l'équipe ; surveillance après travaux : non renseignée.</p>\n<p><strong>Plan de prévention</strong> : signé par l'entreprise utilisatrice et l'entreprise extérieure ; mentionne la circulation de chariots élévateurs sous le rack ; mesure prévue : balisage au sol.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>Dangers du fluide.</strong> La soude à 30 % est un corrosif puissant (H314) : le risque principal à l'ouverture de la ligne est la projection dans les yeux et sur la peau. La rubrique 10 signale une réaction avec l'aluminium et le zinc produisant de l'hydrogène : on évitera tout récipient de récupération ou outillage en aluminium ou acier galvanisé au contact du produit.</p>\n<p><strong>État de l'installation.</strong> Le permis indique seulement la fermeture de la vanne amont et une vidange par la purge. Il manque : la séparation et la condamnation côté aval (risque de retour de produit), le <strong>rinçage</strong> à l'eau de la ligne (une ligne simplement vidangée contient des résidus de soude aux points bas et sur les parois) et la vérification de l'absence de pression. Ces points doivent être obtenus de l'exploitant avant la première coupe.</p>\n<p><strong>Protections individuelles.</strong> Les EPI du permis (lunettes, gants de manutention) sont insuffisants au regard de la rubrique 8 de la FDS : pour l'ouverture de la ligne, il faut des lunettes-masque étanches et un écran facial, des gants résistants à la soude, un vêtement de protection chimique. Il faut aussi vérifier la présence d'une douche de sécurité et d'un rince-œil à proximité, conformément à la rubrique 4. Pour le soudage, les EPI de soudeur s'ajoutent après rinçage confirmé.</p>\n<p><strong>Points chauds.</strong> Le permis de feu ne couvre que le soudage TIG ; la préparation à la meuleuse (et la coupe si elle est faite à la meule) est aussi un point chaud qui projette des étincelles vers la ligne de fioul : elle doit être mentionnée. La surveillance après travaux n'est pas renseignée : elle doit être définie (durée et personne désignée).</p>\n<p><strong>Coactivité.</strong> Le plan de prévention traite la circulation des chariots par un balisage au sol ; comme on travaille en hauteur avec risque de chute d'objets et de produit corrosif, la zone sous le rack doit être <strong>interdite</strong> à la circulation pendant l'ouverture de la ligne, et pas seulement balisée.</p>\n<p><strong>Conclusion.</strong> Le travail ne peut pas démarrer en l'état. Conditions préalables : consignation aval, rinçage et contrôle de pH de l'eau de rinçage, permis de travail complété des EPI chimiques, permis de feu étendu au meulage avec surveillance après travaux, zone sous le rack fermée à la circulation. Ces demandes sont présentées au délivreur, qui modifie et signe à nouveau les documents.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> analyser les documents d'intervention, c'est comparer ce qu'ils déclarent à ce que la situation exige. Une analyse modèle se termine toujours par une décision claire, « démarrage possible » ou « démarrage soumis à conditions », et la liste précise de ces conditions.</div>"
      }
     ],
     "points_cles": [
      "Le plan de prévention traite les risques d'interférence entre entreprises et activités.",
      "Le permis de travail décrit l'état de l'installation et les précautions pour une tâche, un lieu, une durée.",
      "Le permis de feu couvre tous les points chauds, meulage et découpage compris, et organise la surveillance après travaux.",
      "La FDS compte seize rubriques ; les rubriques 2, 4, 7, 8, 10 et 13 sont essentielles pour l'intervenant.",
      "Une ligne vidangée n'est pas une ligne propre : le rinçage et la séparation des deux côtés sont nécessaires.",
      "Les EPI se déduisent de la rubrique 8 de la FDS et des opérations réellement réalisées.",
      "La coactivité sous une zone de travail en hauteur impose souvent une interdiction d'accès.",
      "L'analyse aboutit à une décision : démarrage possible ou soumis à des conditions listées."
     ],
     "lexique": [
      {
       "terme": "Délivreur",
       "def": "Représentant de l'exploitant habilité à signer un permis de travail."
      },
      {
       "terme": "Exécutant",
       "def": "Responsable de l'équipe qui réalise le travail autorisé par le permis."
      },
      {
       "terme": "Clôture du permis",
       "def": "Signature constatant la fin du travail et la remise de l'installation à l'exploitant."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité : document en seize rubriques décrivant les dangers d'un produit et les mesures associées."
      },
      {
       "terme": "Mention de danger (H)",
       "def": "Phrase normalisée décrivant la nature d'un danger d'un produit chimique."
      },
      {
       "terme": "Conseil de prudence (P)",
       "def": "Phrase normalisée décrivant une mesure recommandée pour limiter le risque."
      },
      {
       "terme": "VLEP",
       "def": "Valeur limite d'exposition professionnelle à un agent chimique dans l'air des lieux de travail."
      },
      {
       "terme": "LIE",
       "def": "Limite inférieure d'explosivité : concentration minimale d'un gaz combustible dans l'air permettant une explosion."
      },
      {
       "terme": "Surveillance après travaux",
       "def": "Surveillance de la zone après un travail par point chaud pour détecter un départ de feu."
      },
      {
       "terme": "Rinçage",
       "def": "Lavage intérieur d'une ligne pour éliminer les résidus de produit avant intervention."
      }
     ]
    }
   ]
  }
 ]
};
