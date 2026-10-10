/* Polymates — Bac pro Interventions sur le patrimoine bâti — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-patrimoine-bati"] = {
 "id": "bp-patrimoine-bati",
 "nom": "Interventions sur le patrimoine bâti",
 "icone": "🎓",
 "couleur": "#c8a07a",
 "intro": "Le bac pro Interventions sur le patrimoine bâti forme des ouvriers qualifiés et futurs chefs d'équipe capables d'intervenir sur des bâtiments anciens, protégés ou non, pour les entretenir, les restaurer ou les réhabiliter, dans l'une des trois options maçonnerie, charpente ou couverture. Ce cours de première et de terminale approfondit le cours de seconde de la famille de la construction : connaissance du bâti ancien et de ses matériaux, fonctionnement des ouvrages, diagnostic des désordres, organisation et sécurité des interventions, puis techniques propres à chaque option. Il est organisé en deux blocs : un cours théorique, puis un bloc d'analyse de documents qui montre, exemples commentés à l'appui, comment exploiter les plans, CCTP, rapports de diagnostic, fiches techniques et documents d'organisation rencontrés à l'épreuve écrite et sur le chantier.",
 "options": [
  {
   "id": "a",
   "nom": "Option A — Maçonnerie",
   "icone": "🧱",
   "desc": "Restauration des maçonneries de pierre, de brique et de terre crue, enduits et joints à la chaux, consolidation des murs, arcs et voûtes."
  },
  {
   "id": "b",
   "nom": "Option B — Charpente",
   "icone": "🪵",
   "desc": "Restauration des charpentes, pans de bois et planchers anciens, du trait de charpente aux greffes et au traitement des bois."
  },
  {
   "id": "c",
   "nom": "Option C — Couverture",
   "icone": "🏠",
   "desc": "Restauration des couvertures en tuiles, ardoises, lauzes et métaux, des points singuliers et de l'évacuation des eaux pluviales."
  }
 ],
 "parties": [
  {
   "titre": "Partie 1 — Connaître le bâti ancien",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bipb-protection-patrimoine",
     "titre": "Le patrimoine bâti : protection, acteurs et principes d'intervention",
     "niveau": "1re",
     "duree": 30,
     "objectifs": [
      "Définir le patrimoine bâti et distinguer protégé, repéré et non protégé",
      "Identifier les régimes de protection : monuments historiques, abords, sites patrimoniaux remarquables",
      "Nommer les acteurs propres aux chantiers de patrimoine et leur rôle",
      "Distinguer entretien, réparation, restauration, réhabilitation et rénovation",
      "Appliquer les grands principes déontologiques d'intervention sur l'existant"
     ],
     "sections": [
      {
       "titre": "Qu'est-ce que le patrimoine bâti ?",
       "contenu": "<p>Le <strong>patrimoine bâti</strong> désigne l'ensemble des constructions héritées du passé auxquelles une société reconnaît une valeur historique, artistique, technique ou simplement d'usage et de mémoire. Il ne se limite pas aux cathédrales et aux châteaux : une ferme en pierre, un lavoir, une maison de bourg à pans de bois, un immeuble haussmannien ou une halle métallique du XIX<sup>e</sup> siècle en font partie.</p>\n<p>Dans la pratique professionnelle, on parle souvent de <strong>bâti ancien</strong> pour désigner les constructions réalisées avant la généralisation des techniques industrielles du béton armé et des isolants, c'est-à-dire, en France, les bâtiments construits avant 1948 environ. Ce repère n'est pas une règle juridique, mais il correspond à une rupture technique : avant cette date, les murs sont le plus souvent massifs, faits de matériaux locaux (pierre, terre, brique, bois) liés à la chaux ou à la terre, et ils fonctionnent d'une manière très différente des murs modernes.</p>\n<p>On distingue trois situations :</p>\n<ul>\n<li>le <strong>patrimoine protégé</strong> au titre du Code du patrimoine (monuments historiques, immeubles situés dans des espaces protégés) : les travaux sont soumis à autorisation et à contrôle de l'État ;</li>\n<li>le <strong>patrimoine repéré</strong> par un document d'urbanisme (le plan local d'urbanisme peut identifier des éléments de paysage ou des bâtiments à préserver) : les règles locales encadrent les modifications ;</li>\n<li>le <strong>patrimoine ordinaire</strong>, non protégé, qui représente l'immense majorité des bâtiments anciens et sur lequel le titulaire du bac pro travaille le plus souvent.</li>\n</ul>\n<p>Dans les trois cas, les bonnes pratiques techniques sont les mêmes : comprendre l'ouvrage avant d'intervenir, respecter ses matériaux et son fonctionnement, et ne pas créer de nouveaux désordres.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un bâtiment n'a pas besoin d'être classé pour mériter une intervention respectueuse. Les erreurs techniques (enduit ciment sur un mur en pierre tendre, isolant étanche sur un mur en terre) abîment aussi bien une petite maison qu'un monument.</div>"
      },
      {
       "titre": "Les régimes de protection",
       "contenu": "<p>Le cadre juridique est fixé par le <strong>Code du patrimoine</strong>, qui reprend notamment la loi du 31 décembre 1913 sur les monuments historiques. Les principaux régimes sont les suivants.</p>\n<table>\n<thead><tr><th>Régime</th><th>Ce qui est protégé</th><th>Conséquence pour les travaux</th></tr></thead>\n<tbody>\n<tr><td>Monument historique <strong>classé</strong></td><td>Immeuble dont la conservation présente un intérêt public du point de vue de l'histoire ou de l'art (niveau de protection le plus élevé)</td><td>Tous travaux soumis à autorisation de l'administration (DRAC) ; maîtrise d'œuvre réservée à des architectes spécialisés ; contrôle scientifique et technique de l'État</td></tr>\n<tr><td>Monument historique <strong>inscrit</strong></td><td>Immeuble présentant un intérêt suffisant pour en rendre désirable la préservation</td><td>Travaux soumis à autorisation d'urbanisme avec accord de l'administration ; information préalable pour certains travaux</td></tr>\n<tr><td><strong>Abords</strong> des monuments historiques</td><td>Immeubles situés dans un périmètre délimité autour d'un monument ou, à défaut, à moins de 500 m et en covisibilité</td><td>Travaux modifiant l'aspect extérieur soumis à l'accord de l'architecte des Bâtiments de France</td></tr>\n<tr><td><strong>Site patrimonial remarquable</strong> (SPR)</td><td>Villes, villages ou quartiers dont la conservation présente un intérêt public</td><td>Travaux soumis à l'accord de l'architecte des Bâtiments de France ; règles fixées par un plan de sauvegarde ou un plan de valorisation</td></tr>\n</tbody>\n</table>\n<p>Les sites patrimoniaux remarquables ont été créés par la loi du 7 juillet 2016 relative à la liberté de la création, à l'architecture et au patrimoine (dite loi LCAP). Ils ont remplacé les anciens secteurs sauvegardés, ZPPAUP et AVAP, appellations que l'on rencontre encore dans des documents plus anciens.</p>\n<p>Concrètement, dans un espace protégé, changer une fenêtre, refaire un enduit de façade ou remplacer des tuiles par un autre modèle peut nécessiter une autorisation. L'entreprise doit donc vérifier, avant de commencer, que le client dispose de l'autorisation et des prescriptions qui l'accompagnent (couleur d'enduit, type de tuile, profil de menuiserie…).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> réaliser des travaux non conformes à l'autorisation dans un espace protégé expose le propriétaire à une remise en état à ses frais, et l'entreprise à des litiges. Avant de commander un matériau d'aspect (tuile, ardoise, sable d'enduit), on vérifie qu'il correspond exactement aux prescriptions.</div>"
      },
      {
       "titre": "Les acteurs d'un chantier de patrimoine",
       "contenu": "<p>Les acteurs généraux de la construction (maître d'ouvrage, maître d'œuvre, entreprises, coordonnateur SPS, bureau de contrôle) se retrouvent sur un chantier de patrimoine. S'y ajoutent des acteurs spécifiques :</p>\n<ul>\n<li>la <strong>DRAC</strong> (direction régionale des affaires culturelles), service déconcentré du ministère de la Culture, qui instruit les autorisations sur les monuments historiques et en assure le contrôle scientifique et technique, notamment par sa conservation régionale des monuments historiques ;</li>\n<li>l'<strong>architecte des Bâtiments de France</strong> (ABF), qui exerce au sein de l'unité départementale de l'architecture et du patrimoine et donne son avis ou son accord sur les travaux en abords et en site patrimonial remarquable ;</li>\n<li>l'<strong>architecte en chef des monuments historiques</strong> (ACMH) et l'<strong>architecte du patrimoine</strong>, architectes spécialisés qui peuvent assurer la maîtrise d'œuvre sur les monuments classés ;</li>\n<li>les <strong>spécialistes du diagnostic</strong> : historiens, archéologues du bâti, ingénieurs structure, laboratoires d'analyse des matériaux, dendrochronologues (datation des bois) ;</li>\n<li>les <strong>entreprises qualifiées</strong> : sur les monuments, le maître d'ouvrage exige le plus souvent des références et une qualification professionnelle en restauration du patrimoine ancien, délivrée par un organisme de qualification du bâtiment ;</li>\n<li>les <strong>artisans d'art</strong> (tailleurs de pierre, sculpteurs, staffeurs, vitraillistes, ferronniers), avec lesquels le maçon, le charpentier ou le couvreur doit se coordonner.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un chantier de monument historique, des réunions de chantier réunissent régulièrement le maître d'œuvre, le représentant de la DRAC et les entreprises. Toute découverte (peinture ancienne sous un enduit, sculpture, sépulture, monnaie) doit être signalée immédiatement au chef de chantier : on arrête la zone de travail en attendant les instructions. La découverte fortuite de vestiges archéologiques doit d'ailleurs être déclarée au maire, qui la transmet aux services de l'État.</div>"
      },
      {
       "titre": "Entretenir, restaurer, réhabiliter : le bon vocabulaire",
       "contenu": "<p>Les mots utilisés pour qualifier une intervention ne sont pas interchangeables. Ils annoncent des objectifs et des méthodes différents.</p>\n<table>\n<thead><tr><th>Terme</th><th>Définition</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td><strong>Entretien</strong></td><td>Actions régulières qui maintiennent l'ouvrage en état et évitent la dégradation</td><td>Nettoyer les chéneaux, remplacer quelques tuiles cassées, reprendre un joint</td></tr>\n<tr><td><strong>Réparation</strong></td><td>Remise en état d'un élément endommagé, sans changer sa conception</td><td>Remplacer un chevron pourri à l'identique</td></tr>\n<tr><td><strong>Conservation</strong></td><td>Ensemble des mesures qui stoppent ou ralentissent la dégradation en modifiant le moins possible l'existant</td><td>Consolider une pierre qui se désagrège plutôt que de la remplacer</td></tr>\n<tr><td><strong>Restauration</strong></td><td>Intervention qui vise à rendre lisible et durable un état historique de l'édifice, sur la base d'une étude documentée</td><td>Reconstituer un enduit à la chaux de l'époque d'origine sur une façade du XVIII<sup>e</sup> siècle</td></tr>\n<tr><td><strong>Réhabilitation</strong></td><td>Remise aux normes d'usage et de confort actuelles en conservant le caractère du bâtiment</td><td>Transformer une grange en logements en conservant la charpente et les murs</td></tr>\n<tr><td><strong>Rénovation</strong></td><td>Remise à neuf, pouvant modifier profondément l'ouvrage</td><td>Remplacer une couverture et toute la charpente par des éléments neufs</td></tr>\n</tbody>\n</table>\n<p>Le bac pro « Interventions sur le patrimoine bâti » prépare à toutes ces interventions, mais il insiste sur celles qui exigent de comprendre l'existant : conservation, restauration et réhabilitation.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour qualifier une intervention décrite dans un dossier, posez-vous trois questions. 1. Garde-t-on la matière d'origine ? (si oui : entretien, réparation ou conservation). 2. Cherche-t-on à retrouver un état historique documenté ? (si oui : restauration). 3. Change-t-on l'usage ou le niveau de confort ? (si oui : réhabilitation). Exemple : « dépose de la couverture en tuiles plates, tri, réemploi des tuiles saines, complément en tuiles anciennes de récupération, pose à l'identique » : on garde la matière et la conception, c'est une réparation qui relève de la conservation.</div>"
      },
      {
       "titre": "Les principes d'intervention sur l'existant",
       "contenu": "<p>La <strong>Charte de Venise</strong>, adoptée en 1964 par des architectes et techniciens des monuments historiques, a posé des principes internationaux toujours utilisés aujourd'hui. Sans être une loi, elle guide les maîtres d'œuvre. On peut en retenir des règles concrètes pour le chantier :</p>\n<ol>\n<li><strong>Intervention minimale</strong> : on ne remplace que ce qui ne peut pas être conservé. Une pierre légèrement épaufrée se répare ; on ne la change pas par commodité.</li>\n<li><strong>Compatibilité</strong> : les matériaux ajoutés doivent avoir un comportement proche de ceux d'origine (dureté, perméabilité à la vapeur d'eau, dilatation). Un matériau de réparation doit être un peu plus faible que le matériau d'origine, pour que ce soit lui qui s'use et non l'ouvrage.</li>\n<li><strong>Réversibilité</strong> : autant que possible, une intervention doit pouvoir être défaite plus tard sans dommage. Une agrafe inox scellée au mortier de chaux est plus réversible qu'une injection de résine.</li>\n<li><strong>Lisibilité</strong> : une partie restituée doit s'intégrer harmonieusement mais rester identifiable à un examen attentif, pour ne pas fausser l'histoire du bâtiment (marquage discret, date gravée sur une pièce de charpente neuve par exemple).</li>\n<li><strong>Documentation</strong> : on relève, photographie et décrit l'état avant, pendant et après travaux. Ces traces servent aux interventions futures.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> « faire propre » n'est pas toujours faire bien. Gratter un parement jusqu'au vif, remplacer toutes les tuiles par des neuves de teinte uniforme ou raboter une poutre ancienne efface des traces historiques et peut fragiliser l'ouvrage. En patrimoine, on exécute ce que prescrit le dossier, et on pose la question en cas de doute.</div>"
      },
      {
       "titre": "Le rôle du titulaire du bac pro",
       "contenu": "<p>Le référentiel du diplôme décrit un professionnel capable d'intervenir sur un bâtiment existant, en particulier ancien, dans l'une des trois options : maçonnerie, charpente ou couverture. Ses activités se répartissent en trois grandes familles :</p>\n<ul>\n<li><strong>l'analyse diagnostique et la préparation</strong> : identifier le bâti et son époque, lire le projet, relever l'état sanitaire de l'ouvrage, rechercher les causes des désordres, faire des relevés dimensionnels, participer au choix des matériaux et des techniques ;</li>\n<li><strong>l'organisation</strong> : gérer les approvisionnements, planifier le travail d'une petite équipe, préparer l'installation de chantier ;</li>\n<li><strong>la mise en œuvre</strong> : installer le chantier, mettre en place levages, échafaudages et mesures conservatoires, déconstruire avec soin, réaliser l'ouvrage propre à l'option, gérer les déchets, rendre compte.</li>\n</ul>\n<p>Le diplôme comporte aussi des <strong>travaux annexes</strong> : un maçon doit savoir réaliser de petites interventions de charpente et de couverture, et inversement. C'est logique : sur un bâtiment ancien, les désordres d'un corps d'état ont souvent leur origine dans un autre (une gouttière percée pourrit un pied de chevron et ruine un enduit).</p>\n<p>En fin de formation, le titulaire peut travailler comme ouvrier professionnel ou compagnon qualifié dans une entreprise de restauration, puis évoluer vers chef d'équipe. Il peut aussi poursuivre en BTS ou en formation complémentaire spécialisée (taille de pierre, charpente, couverture en matériaux traditionnels).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur le bâti ancien, la démarche est toujours la même : <em>observer, comprendre, décider, intervenir, contrôler, documenter</em>. Cette démarche structure tout le cours qui suit.</div>"
      }
     ],
     "points_cles": [
      "Le bâti ancien désigne surtout les bâtiments d'avant 1948 environ, aux murs massifs en matériaux locaux.",
      "Les monuments historiques sont classés (protection la plus forte) ou inscrits ; leurs abords et les sites patrimoniaux remarquables sont aussi protégés.",
      "L'architecte des Bâtiments de France donne son accord sur les travaux en abords et en site patrimonial remarquable ; la DRAC contrôle les monuments historiques.",
      "Entretien, réparation, conservation, restauration, réhabilitation et rénovation désignent des interventions différentes.",
      "Principes d'intervention : minimale, compatible, réversible, lisible et documentée.",
      "Un matériau de réparation doit être légèrement plus faible et aussi perméable que le matériau d'origine.",
      "Toute découverte fortuite sur le chantier est signalée immédiatement et la zone est arrêtée.",
      "Le professionnel réalise des travaux de son option et des travaux annexes dans les deux autres."
     ],
     "lexique": [
      {
       "terme": "Patrimoine bâti",
       "def": "Ensemble des constructions héritées du passé auxquelles on reconnaît une valeur historique, artistique, technique ou de mémoire."
      },
      {
       "terme": "Monument historique classé",
       "def": "Immeuble protégé au plus haut niveau par le Code du patrimoine ; tous ses travaux sont autorisés et contrôlés par l'État."
      },
      {
       "terme": "Monument historique inscrit",
       "def": "Immeuble protégé à un niveau inférieur au classement ; ses travaux sont soumis à autorisation avec accord de l'administration."
      },
      {
       "terme": "Abords",
       "def": "Zone de protection autour d'un monument historique, où les travaux modifiant l'aspect extérieur sont soumis à l'accord de l'ABF."
      },
      {
       "terme": "Site patrimonial remarquable",
       "def": "Espace urbain ou rural protégé, créé par la loi LCAP de 2016, qui remplace secteurs sauvegardés, ZPPAUP et AVAP."
      },
      {
       "terme": "ABF",
       "def": "Architecte des Bâtiments de France : fonctionnaire de l'État chargé de veiller à la qualité des travaux en espaces protégés."
      },
      {
       "terme": "DRAC",
       "def": "Direction régionale des affaires culturelles, service régional du ministère de la Culture chargé notamment des monuments historiques."
      },
      {
       "terme": "Restauration",
       "def": "Intervention documentée visant à rendre lisible et durable un état historique de l'édifice."
      },
      {
       "terme": "Réhabilitation",
       "def": "Adaptation d'un bâtiment aux usages et au confort actuels en conservant son caractère."
      },
      {
       "terme": "Réversibilité",
       "def": "Qualité d'une intervention qui peut être défaite plus tard sans endommager l'ouvrage d'origine."
      },
      {
       "terme": "Compatibilité",
       "def": "Proximité de comportement (dureté, perméabilité, dilatation) entre un matériau ajouté et le matériau d'origine."
      }
     ]
    },
    {
     "id": "bipb-histoire-architecture",
     "titre": "Histoire de l'architecture et des techniques de construction",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Situer les grandes périodes de l'architecture en France du Moyen Âge au XXe siècle",
      "Reconnaître les caractères constructifs d'un édifice roman, gothique, classique ou industriel",
      "Relier l'évolution des techniques à celle des matériaux et des outils",
      "Utiliser des indices simples pour proposer une datation d'un bâtiment",
      "Employer le vocabulaire architectural de base : baie, travée, modénature, appareil"
     ],
     "sections": [
      {
       "titre": "Pourquoi connaître l'histoire de l'architecture ?",
       "contenu": "<p>Intervenir sur un bâtiment ancien, c'est intervenir sur un ouvrage conçu avec des connaissances, des matériaux et des outils qui ne sont plus les nôtres. Savoir à quelle époque il a été construit permet de prévoir comment il a été bâti, quels matériaux on va trouver derrière un enduit, comment la charpente reporte ses charges et quelles transformations il a déjà subies.</p>\n<p>Un bâtiment est rarement d'une seule époque. Une maison de bourg peut avoir des fondations médiévales, une façade reprise au XVIII<sup>e</sup> siècle, une charpente refaite au XIX<sup>e</sup> siècle et une extension en parpaings des années 1970. Repérer ces <strong>phases de construction</strong> évite des contresens : on ne restaure pas la façade du XVIII<sup>e</sup> siècle avec les techniques de l'extension.</p>\n<p>Quelques mots de vocabulaire servent dans toute l'histoire de l'architecture :</p>\n<ul>\n<li><strong>baie</strong> : toute ouverture dans un mur (porte, fenêtre) ;</li>\n<li><strong>travée</strong> : division verticale d'une façade, correspondant en général à un alignement de baies superposées ;</li>\n<li><strong>modénature</strong> : ensemble des moulures et éléments en relief qui animent une façade (corniches, bandeaux, encadrements) ;</li>\n<li><strong>appareil</strong> : manière dont les pierres ou briques sont disposées dans un mur ;</li>\n<li><strong>ordonnance</strong> : organisation régulière d'une façade selon des règles de symétrie et de proportions.</li>\n</ul>"
      },
      {
       "titre": "Le Moyen Âge : roman et gothique",
       "contenu": "<p>L'<strong>architecture romane</strong> (XI<sup>e</sup> et XII<sup>e</sup> siècles) se reconnaît à ses murs épais, ses ouvertures réduites et ses <strong>arcs en plein cintre</strong> (demi-cercle). Les nefs sont couvertes de charpentes ou de <strong>voûtes en berceau</strong>, dont la poussée continue sur les murs impose une grande épaisseur et des contreforts peu saillants. Les maçonneries associent souvent un parement en pierre de taille ou en moellons et un <strong>blocage</strong> intérieur (remplissage de pierres et de mortier de chaux).</p>\n<p>L'<strong>architecture gothique</strong> (du milieu du XII<sup>e</sup> au XVI<sup>e</sup> siècle) repose sur l'<strong>arc brisé</strong> (deux arcs de cercle se rejoignant en pointe) et la <strong>voûte sur croisée d'ogives</strong>. La voûte concentre ses charges sur quelques points, repris par des piliers et des <strong>arcs-boutants</strong> qui transmettent la poussée à des <strong>culées</strong> extérieures. Les murs entre ces points d'appui peuvent alors être largement ouverts : c'est l'âge des grands vitraux.</p>\n<p>Pour l'habitat civil, le Moyen Âge urbain construit beaucoup en <strong>pan de bois</strong> : une ossature de poteaux, sablières et décharges, remplie de torchis ou de briques, souvent en encorbellement sur la rue. Les charpentes médiévales sont généralement à <strong>chevrons formant fermes</strong> : chaque couple de chevrons est raidi par des entraits retroussés et des aisseliers, sans pannes.</p>\n<table>\n<thead><tr><th>Indice</th><th>Roman</th><th>Gothique</th></tr></thead>\n<tbody>\n<tr><td>Forme d'arc</td><td>Plein cintre</td><td>Brisé</td></tr>\n<tr><td>Couvrement</td><td>Berceau, voûte d'arêtes, charpente</td><td>Croisée d'ogives</td></tr>\n<tr><td>Murs</td><td>Épais, peu percés</td><td>Minces entre piliers, très ajourés</td></tr>\n<tr><td>Report des charges</td><td>Continu, sur le mur</td><td>Ponctuel, sur piliers et arcs-boutants</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "De la Renaissance au XVIIIe siècle : l'âge classique",
       "contenu": "<p>La <strong>Renaissance</strong> (XVI<sup>e</sup> siècle) introduit en France le vocabulaire de l'Antiquité redécouvert en Italie : colonnes et pilastres selon les <strong>ordres</strong> (dorique, ionique, corinthien), frontons, symétrie. Les structures restent souvent médiévales, mais le décor change.</p>\n<p>Aux XVII<sup>e</sup> et XVIII<sup>e</sup> siècles, l'<strong>architecture classique</strong> impose des façades ordonnancées : travées régulières, baies alignées, toitures à forte pente puis <strong>combles à la Mansart</strong> (brisis presque vertical et terrasson à faible pente), qui permettent d'habiter les combles. La <strong>stéréotomie</strong>, art de découper les pierres pour réaliser des voûtes et des escaliers complexes, atteint un très haut niveau. Les enduits et badigeons à la chaux protègent les murs en moellons ; la pierre de taille est réservée aux encadrements, chaînes d'angle et façades riches.</p>\n<p>Dans les villes, des règlements apparaissent pour limiter les incendies : les façades en pan de bois doivent être enduites, les saillies sont limitées. À partir de la fin du XVII<sup>e</sup> siècle, de nombreuses façades en pan de bois sont ainsi masquées sous un enduit plâtre ou chaux, ce que l'on redécouvre souvent en chantier.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lorsqu'un maître d'ouvrage souhaite « dégager les colombages » d'une façade enduite, l'entreprise doit rappeler que l'enduit fait souvent partie de l'histoire du bâtiment et protège un pan de bois qui n'a pas été conçu pour rester apparent (bois de qualité médiocre, assemblages non protégés). Dans un espace protégé, la décision revient à l'administration.</div>"
      },
      {
       "titre": "Le XIXe siècle : industrialisation et nouveaux matériaux",
       "contenu": "<p>Le XIX<sup>e</sup> siècle bouleverse la construction. Le <strong>fer puis l'acier</strong> permettent des halles, gares et verrières de grande portée. Le chemin de fer diffuse des matériaux produits loin du chantier : ardoise d'Anjou, tuile mécanique, brique industrielle, zinc. Le paysage des toitures change : la <strong>tuile mécanique à emboîtement</strong> (brevetée au milieu du siècle) remplace progressivement la tuile plate et la tuile canal dans de nombreuses régions.</p>\n<p>Les liants évoluent aussi : la <strong>chaux hydraulique</strong> est étudiée scientifiquement (travaux de Louis Vicat au début du siècle) et le <strong>ciment Portland</strong> se développe dans la seconde moitié du siècle, d'abord pour les ouvrages en contact avec l'eau. Dans les villes, l'immeuble de rapport en pierre de taille (type haussmannien à Paris) associe façade porteuse en pierre, planchers sur solives bois ou fers à I avec voûtains de briques, et combles en zinc et ardoise.</p>\n<p>À la campagne, le bâti rural continue d'utiliser les matériaux locaux, mais reçoit souvent des éléments industriels : charpente sciée mécaniquement, tuiles mécaniques, fers forgés de série.</p>"
      },
      {
       "titre": "Le XXe siècle : béton armé et rupture technique",
       "contenu": "<p>Le <strong>béton armé</strong>, mis au point à la fin du XIX<sup>e</sup> siècle, se généralise au XX<sup>e</sup> siècle. Après la Seconde Guerre mondiale, la reconstruction et l'industrialisation imposent le béton, le parpaing de ciment, les enduits ciment, puis les isolants manufacturés. C'est la rupture qui sépare le <strong>bâti ancien</strong>, perméable et massif, du <strong>bâti moderne</strong>, conçu pour être étanche et isolé.</p>\n<p>Les ouvrages du XX<sup>e</sup> siècle peuvent eux-mêmes être patrimoniaux (édifices labellisés « Architecture contemporaine remarquable », œuvres d'architectes connus). Ils posent des problèmes spécifiques : corrosion des armatures, éclatement des bétons, matériaux contenant de l'amiante.</p>\n<table>\n<thead><tr><th>Période</th><th>Matériaux dominants</th><th>Indices de datation</th></tr></thead>\n<tbody>\n<tr><td>XI<sup>e</sup>-XII<sup>e</sup> s.</td><td>Pierre, chaux, bois</td><td>Plein cintre, murs épais, petites baies</td></tr>\n<tr><td>XIII<sup>e</sup>-XV<sup>e</sup> s.</td><td>Pierre, bois, pan de bois</td><td>Arc brisé, encorbellements, charpente sans pannes</td></tr>\n<tr><td>XVI<sup>e</sup>-XVIII<sup>e</sup> s.</td><td>Pierre de taille, moellons enduits, tuile plate, ardoise</td><td>Façades ordonnancées, combles à la Mansart, ordres antiques</td></tr>\n<tr><td>XIX<sup>e</sup> s.</td><td>Fer, fonte, brique, zinc, tuile mécanique, chaux hydraulique</td><td>Immeubles de rapport, planchers à fers à I et voûtains, sciages mécaniques</td></tr>\n<tr><td>XX<sup>e</sup> s.</td><td>Béton armé, parpaing, ciment, isolants</td><td>Linteaux béton, enduits ciment, menuiseries standardisées</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Dater un bâtiment : indices et prudence",
       "contenu": "<p>La datation précise relève des spécialistes (archives, archéologie du bâti, <strong>dendrochronologie</strong> qui date l'abattage d'un bois par l'étude de ses cernes). Le professionnel peut toutefois réunir des indices :</p>\n<ul>\n<li><strong>la forme des baies</strong> : arc, linteau droit, linteau en arc segmentaire, proportions plus hautes que larges à partir de l'époque classique ;</li>\n<li><strong>les traces d'outils</strong> sur la pierre et le bois : taille à la hache ou à l'herminette, sciage de long manuel (traits irréguliers et obliques), sciage mécanique (stries régulières, parfois circulaires pour la scie circulaire) ;</li>\n<li><strong>les assemblages</strong> : chevilles de bois, clous forgés à tête irrégulière, puis clous tréfilés réguliers ;</li>\n<li><strong>les matériaux</strong> : brique moulée à la main ou mécanique, tuile plate faite main ou tuile mécanique portant le nom de la tuilerie ;</li>\n<li><strong>les reprises</strong> : changement d'appareil dans un mur, fenêtre bouchée, coup de sabre vertical (joint vertical continu) indiquant un agrandissement.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour proposer une datation argumentée, procédez en trois temps. 1. Listez les indices observés, élément par élément (baies, maçonnerie, charpente, couverture), avec une photo pour chacun. 2. Pour chaque indice, notez la période qu'il suggère. 3. Distinguez les phases : la période la plus ancienne pour les éléments d'origine, les périodes plus récentes pour les reprises. Exemple : façade en moellons enduits, baies à linteau droit en pierre de taille plus hautes que larges, charpente en chêne équarri à la hache avec pannes, une lucarne en sapin scié mécaniquement et cloué : bâtiment probablement d'époque classique (XVIII<sup>e</sup> siècle), lucarne reprise au XIX<sup>e</sup> ou au XX<sup>e</sup> siècle.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une date gravée sur un linteau indique souvent un événement (construction, mariage, agrandissement) et non forcément la date de l'ensemble du bâtiment. Un linteau a parfois été réemployé d'une construction plus ancienne.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un indice isolé ne suffit jamais ; c'est la cohérence de plusieurs indices qui permet de proposer une période, que l'on formule toujours avec prudence (« probablement », « vraisemblablement »).</div>"
      }
     ],
     "points_cles": [
      "Connaître l'époque d'un bâtiment permet d'anticiper ses matériaux, sa structure et ses transformations.",
      "Roman : plein cintre, murs épais, voûtes en berceau ; gothique : arc brisé, croisée d'ogives, arcs-boutants.",
      "Les charpentes médiévales sont souvent à chevrons formant fermes, sans pannes.",
      "L'âge classique ordonne les façades et invente les combles à la Mansart.",
      "Le XIXe siècle diffuse fer, zinc, tuile mécanique, chaux hydraulique puis ciment Portland.",
      "Le béton et le ciment du XXe siècle marquent la rupture avec le bâti ancien perméable.",
      "Traces d'outils, assemblages, baies et reprises sont des indices de datation.",
      "Une datation se construit sur plusieurs indices concordants et se formule avec prudence."
     ],
     "lexique": [
      {
       "terme": "Baie",
       "def": "Ouverture ménagée dans un mur : porte, fenêtre, passage."
      },
      {
       "terme": "Travée",
       "def": "Division verticale d'une façade ou d'un vaisseau, délimitée par des alignements de baies ou des points d'appui."
      },
      {
       "terme": "Modénature",
       "def": "Ensemble des moulures et reliefs qui animent une façade."
      },
      {
       "terme": "Plein cintre",
       "def": "Arc en demi-cercle, caractéristique de l'architecture romane et classique."
      },
      {
       "terme": "Arc brisé",
       "def": "Arc formé de deux arcs de cercle se rejoignant en pointe, caractéristique du gothique."
      },
      {
       "terme": "Croisée d'ogives",
       "def": "Voûte renforcée par deux arcs diagonaux qui concentrent les charges sur les angles."
      },
      {
       "terme": "Arc-boutant",
       "def": "Arc extérieur qui transmet la poussée d'une voûte à une culée éloignée du mur."
      },
      {
       "terme": "Comble à la Mansart",
       "def": "Toiture brisée composée d'un brisis très pentu et d'un terrasson à faible pente."
      },
      {
       "terme": "Stéréotomie",
       "def": "Art de découper les pierres ou les bois pour réaliser des formes complexes (voûtes, escaliers)."
      },
      {
       "terme": "Dendrochronologie",
       "def": "Méthode de datation d'un bois par l'étude de la succession de ses cernes de croissance."
      },
      {
       "terme": "Coup de sabre",
       "def": "Joint vertical continu dans une maçonnerie, révélant l'accolement de deux phases de construction."
      }
     ]
    },
    {
     "id": "bipb-typologies-bati",
     "titre": "Typologies du bâti ancien et son fonctionnement",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Classer un bâtiment ancien selon sa fonction, son implantation et son mode constructif",
      "Décrire les principaux modes constructifs traditionnels : maçonnerie de pierre, brique, terre crue, pan de bois",
      "Expliquer le fonctionnement hygrothermique d'un mur ancien perméable",
      "Relier les matériaux d'un bâti régional à la géologie et au climat",
      "Repérer les éléments constitutifs d'un bâti ancien sur le terrain"
     ],
     "sections": [
      {
       "titre": "Classer le bâti ancien",
       "contenu": "<p>On appelle <strong>typologie</strong> le classement des bâtiments en familles qui partagent des caractères communs. Trois critères sont les plus utilisés :</p>\n<ul>\n<li><strong>la fonction</strong> : habitat (maison de bourg, maison rurale, hôtel particulier, immeuble de rapport), agricole (grange, étable, chai, séchoir), artisanal ou industriel (moulin, forge, filature), religieux, public (mairie, école, halle, lavoir), défensif ;</li>\n<li><strong>l'implantation</strong> : bâti urbain mitoyen et aligné sur rue, bâti de bourg, ferme isolée, hameau, bâti à cour fermée ou ouverte ;</li>\n<li><strong>le mode constructif</strong> : maçonnerie de pierre, de brique ou de terre crue, ossature (pan de bois), structures mixtes.</li>\n</ul>\n<p>Ces critères se combinent. Une « longère » bretonne est une maison rurale allongée, de plain-pied avec comble, en moellons de granite ou de schiste, couverte d'ardoise ou de chaume. Une maison de bourg alsacienne peut être à pan de bois sur soubassement de grès. Identifier la typologie aide à prévoir l'organisation intérieure, les matériaux et les points faibles habituels.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le bâti ancien ordinaire est d'abord un <strong>bâti vernaculaire</strong> : construit avec les matériaux disponibles sur place et selon des savoir-faire locaux transmis de génération en génération. Sa diversité suit celle des sols et des climats.</div>"
      },
      {
       "titre": "Des matériaux liés au territoire",
       "contenu": "<p>Avant le chemin de fer, transporter des matériaux lourds coûtait très cher. On construisait donc avec ce que fournissait le sous-sol et le paysage proches. La géologie explique largement la carte des matériaux traditionnels :</p>\n<table>\n<thead><tr><th>Contexte géologique</th><th>Matériaux de mur</th><th>Matériaux de couverture</th><th>Exemples de régions</th></tr></thead>\n<tbody>\n<tr><td>Bassins sédimentaires calcaires</td><td>Pierre calcaire de taille et moellons, mortier de chaux</td><td>Tuile plate, ardoise, lauze calcaire</td><td>Bassin parisien, Bourgogne, Charentes</td></tr>\n<tr><td>Massifs anciens (granite, schiste)</td><td>Moellons de granite ou de schiste, mortier de terre ou de chaux</td><td>Ardoise, lauze de schiste, chaume</td><td>Bretagne, Limousin, Massif central</td></tr>\n<tr><td>Plaines argileuses ou limoneuses</td><td>Terre crue (pisé, bauge, torchis), brique</td><td>Tuile plate, tuile canal</td><td>Rhône-Alpes (pisé), Normandie et Bretagne orientale (bauge), Sud-Ouest (brique)</td></tr>\n<tr><td>Régions forestières</td><td>Pan de bois sur soubassement maçonné</td><td>Tuile, bardeaux de bois</td><td>Alsace, Normandie, Champagne</td></tr>\n<tr><td>Régions méditerranéennes</td><td>Moellons calcaires enduits</td><td>Tuile canal à faible pente</td><td>Provence, Languedoc</td></tr>\n</tbody>\n</table>\n<p>Le climat intervient aussi : forte pente et petits éléments (tuile plate, ardoise) dans les régions pluvieuses ou enneigées ; tuile canal à faible pente sous climat méditerranéen ; débords de toit importants là où les murs en terre doivent être protégés de la pluie.</p>"
      },
      {
       "titre": "Les modes constructifs traditionnels",
       "contenu": "<p>On distingue quatre grands modes de construction des murs anciens.</p>\n<h4>Maçonnerie de pierre</h4>\n<p>Le mur est fait de <strong>moellons</strong> (pierres peu ou pas taillées) ou de <strong>pierres de taille</strong> (blocs taillés sur toutes leurs faces visibles et de joint), liés par un mortier de chaux ou de terre. Les murs de moellons sont souvent composés de deux parements et d'un remplissage intérieur, reliés de place en place par des <strong>boutisses</strong> (pierres traversantes). Épaisseur courante : de 40 à 80 cm, davantage pour les édifices importants.</p>\n<h4>Maçonnerie de brique</h4>\n<p>La brique de terre cuite, d'abord moulée à la main, est posée selon des <strong>appareils</strong> qui croisent les briques en long (panneresses) et en travers (boutisses) pour solidariser l'épaisseur du mur. Elle est souvent associée à la pierre pour les chaînes et encadrements.</p>\n<h4>Terre crue</h4>\n<p>La terre est utilisée sans cuisson : compactée dans des coffrages (<strong>pisé</strong>), empilée humide en couches mêlées de fibres (<strong>bauge</strong>), moulée en briques séchées au soleil (<strong>adobe</strong>) ou appliquée sur un clayonnage de bois (<strong>torchis</strong>). Ces murs ont besoin d'un soubassement en pierre (« de bonnes bottes ») et d'un bon débord de toit (« un bon chapeau ») pour rester au sec.</p>\n<h4>Pan de bois</h4>\n<p>Une ossature en bois (sablières, poteaux, décharges, croix de Saint-André) porte les planchers et la toiture ; les vides sont remplis de torchis, de briques ou de plâtre. Le pan de bois repose sur un soubassement maçonné qui l'isole des remontées d'humidité.</p>"
      },
      {
       "titre": "Un mur qui respire : le fonctionnement hygrothermique",
       "contenu": "<p>Le comportement d'un mur vis-à-vis de la chaleur et de l'humidité s'appelle son comportement <strong>hygrothermique</strong>. C'est la notion la plus importante pour intervenir sur le bâti ancien.</p>\n<p>Un mur ancien en pierre, brique ou terre lié à la chaux ou à la terre n'est pas étanche. Il reçoit de l'eau par plusieurs voies : remontées depuis le sol (pas de coupure de capillarité dans les fondations), pluie battante sur la façade, vapeur d'eau produite à l'intérieur par les occupants. Il l'élimine en permanence par <strong>évaporation</strong> sur ses deux faces. Tant que les apports et l'évaporation s'équilibrent, le mur reste dans un état d'humidité modérée et stable : on dit souvent, par image, qu'il « respire ».</p>\n<p>Les matériaux concernés sont <strong>capillaires</strong> (ils transportent l'eau liquide dans leurs pores fins) et <strong>perméables à la vapeur d'eau</strong>. La perméabilité à la vapeur se caractérise par le <strong>facteur de résistance à la diffusion de vapeur μ</strong> (sans unité) : plus μ est faible, plus le matériau laisse passer la vapeur. Pour une couche d'épaisseur e en mètres, on calcule l'<strong>épaisseur d'air équivalente S<sub>d</sub> = μ × e</strong> (en m).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer deux enduits du point de vue de la vapeur d'eau. Enduit A : chaux aérienne, μ = 10 (valeur d'ordre de grandeur), épaisseur 2,5 cm. S<sub>d</sub> = 10 × 0,025 = 0,25 m. Enduit B : enduit ciment, μ = 30, épaisseur 2,5 cm. S<sub>d</sub> = 30 × 0,025 = 0,75 m. L'enduit ciment oppose trois fois plus de résistance au passage de la vapeur : l'eau du mur s'évacue moins bien par l'extérieur. Les valeurs réelles se lisent toujours sur la fiche technique du produit.</div>\n<p>Si l'on bloque l'évaporation (enduit ciment, peinture étanche, doublage avec pare-vapeur mal placé, sol en béton imperméable au pied du mur), l'eau qui continue d'entrer s'accumule. Elle migre vers les zones encore ouvertes, souvent plus haut dans le mur, et y entraîne sels, salpêtre, décollements, pourriture des bois encastrés et gel.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le réflexe « on a de l'humidité, on étanche » aggrave presque toujours la situation sur un mur ancien. Il faut d'abord réduire les apports (gouttières, drainage, abaissement du sol extérieur) puis rétablir l'évaporation.</div>"
      },
      {
       "titre": "L'inertie thermique et le confort",
       "contenu": "<p>Les murs anciens sont lourds : un mur en pierre de 60 cm pèse plus d'une tonne par mètre carré. Cette masse leur donne une forte <strong>inertie thermique</strong> : ils stockent la chaleur et la restituent lentement, ce qui amortit les variations de température entre le jour et la nuit et protège de la chaleur en été.</p>\n<p>En revanche, leur <strong>résistance thermique</strong> est souvent faible : un mur en pierre calcaire dure a une conductivité de l'ordre de 1 à 2 W/(m·K), bien plus que celle d'un isolant (environ 0,04 W/(m·K)). Un mur en terre ou en pierre tendre isole un peu mieux, sans atteindre le niveau d'un mur isolé moderne. Améliorer le bâti ancien consiste donc à le rendre plus économe sans détruire son équilibre hygrothermique, ce qui demande des solutions adaptées et des isolants compatibles.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans une maison ancienne, les occupants se plaignent souvent de « murs froids ». Un mur humide est un mauvais isolant, car l'eau conduit bien la chaleur. Assécher le mur en supprimant un enduit ciment et en remettant en état les descentes d'eau pluviales améliore déjà sensiblement le confort, avant toute isolation.</div>"
      },
      {
       "titre": "Lire un bâti ancien sur le terrain",
       "contenu": "<p>Pour décrire un bâtiment ancien, on le parcourt de bas en haut et de l'extérieur vers l'intérieur. Le tableau suivant sert de grille d'observation.</p>\n<table>\n<thead><tr><th>Élément</th><th>Questions à se poser</th></tr></thead>\n<tbody>\n<tr><td>Abords et sol</td><td>Le terrain est-il en pente vers le mur ? Le sol extérieur a-t-il été rehaussé ou bétonné ? Où va l'eau de pluie ?</td></tr>\n<tr><td>Soubassement</td><td>En quel matériau ? Est-il humide, salpêtré, enduit au ciment ?</td></tr>\n<tr><td>Murs</td><td>Mode constructif, matériau, épaisseur (mesurée en tableau de baie), enduit ou pierre vue, reprises</td></tr>\n<tr><td>Baies</td><td>Forme, linteaux (pierre, bois, brique, métal), appuis, menuiseries</td></tr>\n<tr><td>Planchers</td><td>Solives bois, fers à I et voûtains, béton ? Sens de portée ? Appuis dans les murs ?</td></tr>\n<tr><td>Charpente</td><td>Type (fermes et pannes, chevrons formant fermes), essence, état des pieds et des assemblages</td></tr>\n<tr><td>Couverture</td><td>Matériau, pente, état des faîtages, rives, noues, solins et évacuations des eaux pluviales</td></tr>\n</tbody>\n</table>\n<p>Chaque observation est notée sur un croquis et photographiée. Ce relevé descriptif est la base de la démarche de diagnostic.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour mesurer l'épaisseur réelle d'un mur, on se place dans l'embrasure d'une porte ou d'une fenêtre ; l'épaisseur révèle souvent le mode constructif (un mur de 15 cm n'est pas un mur en pierre d'origine).</div>"
      }
     ],
     "points_cles": [
      "On classe le bâti ancien selon sa fonction, son implantation et son mode constructif.",
      "Le bâti vernaculaire utilise les matériaux locaux : sa diversité suit la géologie et le climat.",
      "Quatre grands modes constructifs : pierre, brique, terre crue (pisé, bauge, adobe, torchis), pan de bois.",
      "Un mur ancien est capillaire et perméable à la vapeur : il évacue l'eau par évaporation.",
      "Sd = μ × e mesure la résistance d'une couche au passage de la vapeur.",
      "Bloquer l'évaporation d'un mur ancien concentre l'humidité et provoque des désordres.",
      "Les murs anciens ont une forte inertie mais une résistance thermique souvent faible.",
      "On observe un bâtiment de bas en haut et de l'extérieur vers l'intérieur, avec croquis et photos."
     ],
     "lexique": [
      {
       "terme": "Typologie",
       "def": "Classement des bâtiments en familles partageant des caractères communs."
      },
      {
       "terme": "Bâti vernaculaire",
       "def": "Bâti traditionnel construit avec des matériaux locaux selon des savoir-faire régionaux."
      },
      {
       "terme": "Moellon",
       "def": "Pierre de construction peu ou pas taillée, de petite ou moyenne dimension."
      },
      {
       "terme": "Boutisse",
       "def": "Pierre ou brique posée dans le sens de l'épaisseur du mur, qui relie les parements."
      },
      {
       "terme": "Pisé",
       "def": "Mur en terre crue compactée par couches dans un coffrage (banche)."
      },
      {
       "terme": "Bauge",
       "def": "Mur en terre crue mêlée de fibres, empilée à l'état plastique puis recoupée."
      },
      {
       "terme": "Torchis",
       "def": "Mélange de terre et de fibres appliqué sur un clayonnage pour remplir un pan de bois."
      },
      {
       "terme": "Hygrothermique",
       "def": "Qui concerne le comportement d'un matériau ou d'une paroi vis-à-vis de la chaleur et de l'humidité."
      },
      {
       "terme": "Capillarité",
       "def": "Transport de l'eau liquide dans les pores fins d'un matériau, y compris vers le haut."
      },
      {
       "terme": "Facteur μ",
       "def": "Facteur de résistance à la diffusion de la vapeur d'eau d'un matériau, comparé à l'air."
      },
      {
       "terme": "Inertie thermique",
       "def": "Capacité d'une paroi lourde à stocker la chaleur et à la restituer lentement."
      }
     ]
    },
    {
     "id": "bipb-releves-existant",
     "titre": "Relever et représenter l'existant",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Organiser un relevé dimensionnel d'un ouvrage existant",
      "Réaliser un croquis coté propre, exploitable par un tiers",
      "Utiliser la triangulation et les lignes de référence pour relever un bâtiment non orthogonal",
      "Connaître les techniques de relevé numérique et leurs usages",
      "Appliquer les conventions graphiques des plans de réhabilitation (existant, à démolir, à construire)"
     ],
     "sections": [
      {
       "titre": "Pourquoi relever l'existant ?",
       "contenu": "<p>Sur un bâtiment neuf, l'ouvrage est construit d'après les plans. Sur un bâtiment ancien, c'est l'inverse : les plans, quand ils existent, sont incomplets ou faux, et c'est l'ouvrage réel qui fait foi. Le <strong>relevé</strong> consiste à mesurer et représenter l'existant tel qu'il est, avec ses défauts : murs hors d'aplomb, angles qui ne sont pas droits, planchers qui fléchissent, faîtage qui ondule.</p>\n<p>Le relevé sert à plusieurs fins :</p>\n<ul>\n<li>établir les plans de l'<strong>état des lieux</strong> sur lesquels le maître d'œuvre dessine le projet ;</li>\n<li>quantifier les travaux (surfaces d'enduit, volumes de pierre, longueurs de bois, nombre de tuiles) ;</li>\n<li>fabriquer des pièces sur mesure (une pierre de remplacement, une pièce de charpente, un ouvrage de zinguerie) ;</li>\n<li>suivre l'évolution d'un désordre (mesure répétée d'une fissure, d'un faux aplomb) ;</li>\n<li>garder une trace de l'état avant travaux.</li>\n</ul>\n<p>On distingue le <strong>relevé d'ensemble</strong> (plans, coupes, élévations du bâtiment) et le <strong>relevé de détail</strong> (profil d'une corniche, assemblage de charpente, calepin d'une façade pierre à pierre).</p>"
      },
      {
       "titre": "Préparer et réaliser un croquis coté",
       "contenu": "<p>Le relevé manuel commence par un <strong>croquis</strong> à main levée, à peu près à l'échelle, sur lequel on reporte ensuite les cotes mesurées. Un croquis réussi doit pouvoir être exploité par une autre personne, au bureau, sans retourner sur place.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> relevé d'une pièce au mètre et au télémètre laser. 1. Dessiner le contour de la pièce en respectant approximativement les proportions, sur papier quadrillé, en grand. 2. Placer les baies, les cheminées, les poteaux, les niches. 3. Indiquer le nord et nommer la pièce. 4. Mesurer les <strong>cotes cumulées</strong> le long de chaque mur, depuis un même angle (0, 0,85, 1,95, 3,10…), plutôt que des cotes partielles qui accumulent les erreurs. 5. Mesurer les deux <strong>diagonales</strong> de la pièce : si elles diffèrent, la pièce n'est pas rectangulaire. 6. Relever les épaisseurs de murs dans les embrasures, les hauteurs sous plafond et les allèges. 7. Dater, signer, numéroter le croquis.</div>\n<p>Pour les hauteurs et les niveaux, on choisit un <strong>niveau de référence</strong> (souvent le seuil de la porte d'entrée, noté ±0,00) et on rapporte toutes les altitudes à ce repère à l'aide d'un niveau laser ou d'un niveau à eau. On repère ainsi les planchers qui fléchissent ou les sols qui ne sont pas au même niveau d'une pièce à l'autre.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ne jamais supposer qu'un angle est droit ou qu'un mur est d'aplomb dans un bâtiment ancien. Un écart de 2 % sur un angle donne déjà 10 cm d'erreur sur une longueur de 5 m. Les diagonales et la triangulation sont indispensables.</div>"
      },
      {
       "titre": "La triangulation et les lignes de référence",
       "contenu": "<p>Un triangle est entièrement défini par la longueur de ses trois côtés. C'est le principe de la <strong>triangulation</strong> : en mesurant les distances entre les angles d'une pièce irrégulière, on découpe le plan en triangles que l'on peut redessiner exactement au compas ou en DAO.</p>\n<p>Pour une façade ou un mur long et irrégulier, on utilise une <strong>ligne de référence</strong> : un cordeau ou un fil tendu horizontalement (contrôlé au niveau) le long du mur. On mesure alors, de place en place, l'abscisse le long du fil et la distance perpendiculaire entre le fil et le mur. On obtient le profil réel du mur, ses bombements et ses faux aplombs. Le même principe vertical (fil à plomb) permet de mesurer le dévers d'un mur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un faux aplomb. On suspend un fil à plomb à 2,50 m au-dessus du sol, à 5 cm du mur en tête. En pied, on mesure 12 cm entre le fil et le mur. La tête du mur est donc 12 − 5 = 7 cm plus près du fil que son pied : sur 2,50 m de hauteur, le mur penche de 7 cm vers le côté où pend le fil (ici l'extérieur). Le faux aplomb vaut 7 / 250 = 0,028, soit 2,8 % ou 28 mm par mètre. Cette valeur, reportée sur le relevé, sera comparée lors d'une mesure ultérieure pour savoir si le mouvement est actif.</div>"
      },
      {
       "titre": "Les techniques de relevé numérique",
       "contenu": "<p>Les outils numériques sont devenus courants sur les chantiers de patrimoine :</p>\n<table>\n<thead><tr><th>Technique</th><th>Principe</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Télémètre laser</td><td>Mesure de distance par un faisceau laser</td><td>Relevés courants, hauteurs, longueurs inaccessibles</td></tr>\n<tr><td>Station totale (tachéomètre)</td><td>Mesure d'angles et de distances depuis un point stationné, coordonnées x, y, z de points visés</td><td>Implantation, relevé de façades, suivi de déformations</td></tr>\n<tr><td>Scanner laser 3D (lasergrammétrie)</td><td>Mesure de millions de points formant un <strong>nuage de points</strong></td><td>Relevé complet d'un édifice, de charpentes complexes, de voûtes</td></tr>\n<tr><td>Photogrammétrie</td><td>Reconstitution 3D à partir de nombreuses photos prises sous différents angles, éventuellement par drone</td><td>Façades, toitures inaccessibles, orthophotographies de murs</td></tr>\n</tbody>\n</table>\n<p>Une <strong>orthophotographie</strong> (ou orthophoto) est une image redressée, sans déformation de perspective, sur laquelle on peut mesurer directement. Sur une façade, elle sert de fond pour dessiner le <strong>calepin</strong> (plan pierre à pierre) et cartographier les désordres.</p>\n<p>Ces outils produisent des fichiers exploités en <strong>dessin assisté par ordinateur</strong> (DAO) ou en <strong>maquette numérique</strong> (BIM, modélisation des informations du bâtiment). Ils ne remplacent pas l'observation : un nuage de points ne dit pas si une poutre est vermoulue.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour remplacer une ferme de charpente déformée, l'entreprise peut faire scanner le comble. Le charpentier récupère ensuite les coupes exactes et prépare son épure en tenant compte des déformations réelles des pièces voisines conservées, au lieu de se fier à une géométrie théorique.</div>"
      },
      {
       "titre": "Les conventions graphiques des plans de réhabilitation",
       "contenu": "<p>Les plans de travaux sur l'existant montrent à la fois ce qui existe, ce qui sera démoli et ce qui sera construit. Une convention très répandue en France utilise la couleur :</p>\n<table>\n<thead><tr><th>Élément</th><th>Représentation usuelle</th></tr></thead>\n<tbody>\n<tr><td>Existant conservé</td><td>Noir ou gris (hachures ou aplat)</td></tr>\n<tr><td>À démolir ou à déposer</td><td>Jaune</td></tr>\n<tr><td>À construire ou à créer</td><td>Rouge</td></tr>\n</tbody>\n</table>\n<p>En noir et blanc, on remplace les couleurs par des hachures différentes ou par des traits interrompus pour le démoli ; la <strong>légende</strong> du plan précise toujours la convention utilisée. On lit aussi des repères propres au projet : numéros de pierres à remplacer, zones d'enduit à reprendre, pièces de charpente à greffer, repérées par des lettres ou des chiffres renvoyant au descriptif.</p>\n<p>Les représentations les plus utilisées sont :</p>\n<ul>\n<li>le <strong>plan</strong> (coupe horizontale à environ 1 m au-dessus du sol) ;</li>\n<li>la <strong>coupe</strong> verticale, indispensable pour les charpentes et les niveaux ;</li>\n<li>l'<strong>élévation</strong> de façade, sur laquelle on reporte le calepin et les désordres ;</li>\n<li>le <strong>plan de toiture</strong>, qui montre les pans, les pentes, les noues, arêtiers et lucarnes ;</li>\n<li>les <strong>détails</strong> à grande échelle (1/10, 1/5, 1/1 pour un profil de moulure).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un plan de réhabilitation, on lit toujours la légende et le cartouche avant le dessin. La même couleur ou la même hachure peut avoir des sens différents d'un cabinet d'architecte à l'autre.</div>"
      },
      {
       "titre": "Le relevé de détail et le gabarit",
       "contenu": "<p>Pour reproduire un élément à l'identique, on relève son <strong>profil</strong> à l'échelle 1 :</p>\n<ul>\n<li>avec un <strong>conformateur</strong> (peigne à aiguilles) que l'on presse contre une moulure pour en prendre la forme ;</li>\n<li>par estampage ou en traçant le contour sur un carton, après avoir dégagé la moulure ;</li>\n<li>par mesures en coordonnées depuis deux règles perpendiculaires.</li>\n</ul>\n<p>Le profil relevé est reporté sur un <strong>gabarit</strong> (en zinc, contreplaqué ou carton rigide) qui sert ensuite au tailleur de pierre, au maçon qui tire une corniche au calibre, au charpentier ou au zingueur. Le gabarit porte toujours un repère indiquant sa position (haut, bas, face vue) et le nom de l'élément.</p>\n<p>Pour un élément de charpente, on note aussi l'essence, la section réelle, les assemblages, les marques de charpentier (chiffres romains gravés repérant les pièces d'une même ferme) et les traces d'outils, qui guident la restitution.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un profil se relève sur une partie saine. Relever une moulure érodée et la reproduire telle quelle revient à copier l'usure : on cherche, sur la façade, l'exemplaire le mieux conservé, souvent à l'abri sous un débord.</div>"
      }
     ],
     "points_cles": [
      "Sur l'existant, l'ouvrage réel fait foi : le relevé est la base de toute intervention.",
      "Un croquis coté est proportionné, orienté, coté en cotes cumulées, daté et signé.",
      "Les diagonales et la triangulation vérifient et reconstituent les formes non orthogonales.",
      "Le faux aplomb se mesure au fil à plomb et s'exprime en pourcentage ou en mm/m.",
      "Station totale, scanner 3D et photogrammétrie produisent des relevés précis exploitables en DAO ou BIM.",
      "Convention courante : existant en noir, à démolir en jaune, à construire en rouge, toujours confirmée par la légende.",
      "Les profils se relèvent à l'échelle 1 sur un gabarit, à partir de l'exemplaire le mieux conservé."
     ],
     "lexique": [
      {
       "terme": "Relevé",
       "def": "Mesure et représentation d'un ouvrage existant tel qu'il est."
      },
      {
       "terme": "Cote cumulée",
       "def": "Cote mesurée depuis une même origine, qui évite l'accumulation des erreurs."
      },
      {
       "terme": "Triangulation",
       "def": "Méthode de relevé qui découpe une forme en triangles définis par leurs trois côtés."
      },
      {
       "terme": "Ligne de référence",
       "def": "Fil ou cordeau tendu servant de base pour mesurer les écarts d'un mur."
      },
      {
       "terme": "Faux aplomb",
       "def": "Écart d'un mur ou d'un poteau par rapport à la verticale."
      },
      {
       "terme": "Nuage de points",
       "def": "Ensemble de points mesurés en 3D par un scanner, représentant les surfaces relevées."
      },
      {
       "terme": "Orthophotographie",
       "def": "Image redressée sans déformation de perspective, sur laquelle on peut mesurer."
      },
      {
       "terme": "Calepin",
       "def": "Dessin d'un parement pierre par pierre, avec repérage de chaque élément."
      },
      {
       "terme": "Conformateur",
       "def": "Outil à aiguilles coulissantes qui reproduit la forme d'un profil."
      },
      {
       "terme": "Gabarit",
       "def": "Modèle à l'échelle 1 servant à reproduire un profil ou une forme."
      },
      {
       "terme": "Marques de charpentier",
       "def": "Signes gravés sur les pièces d'une charpente pour repérer leur position lors du montage."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Matériaux et fonctionnement des ouvrages anciens",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bipb-pierres-terres",
     "titre": "Pierres, terres cuites et terres crues",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Classer les pierres de construction selon leur origine géologique",
      "Relier porosité, masse volumique et dureté au comportement d'une pierre",
      "Expliquer les notions de lit de carrière, de délit et de gélivité",
      "Décrire la fabrication et les propriétés des briques et tuiles de terre cuite anciennes",
      "Connaître la composition d'une terre à bâtir et ses usages"
     ],
     "sections": [
      {
       "titre": "Les trois familles de roches",
       "contenu": "<p>Les pierres de construction sont des <strong>roches</strong>, classées par les géologues en trois familles selon leur mode de formation :</p>\n<table>\n<thead><tr><th>Famille</th><th>Formation</th><th>Exemples en construction</th><th>Caractères</th></tr></thead>\n<tbody>\n<tr><td><strong>Sédimentaires</strong></td><td>Dépôt et consolidation de sédiments (coquilles, sables, boues) au fond des mers et des lacs</td><td>Calcaires (tuffeau, pierre de Caen, pierre de Bourgogne), grès, meulière</td><td>Litées, faciles à tailler pour les tendres, porosité très variable</td></tr>\n<tr><td><strong>Magmatiques</strong></td><td>Refroidissement d'un magma, en profondeur ou en surface</td><td>Granite, basalte, andésite, pierre de Volvic</td><td>Dures, peu poreuses, sans lit marqué, difficiles à tailler</td></tr>\n<tr><td><strong>Métamorphiques</strong></td><td>Transformation d'une roche sous l'effet de la pression et de la température</td><td>Schiste ardoisier, gneiss, marbre</td><td>Souvent feuilletées (schistes), clivage facile</td></tr>\n</tbody>\n</table>\n<p>Les <strong>calcaires</strong> sont les pierres les plus employées dans le bâti ancien français. Ils sont composés essentiellement de carbonate de calcium (CaCO<sub>3</sub>), ce qui explique leur sensibilité aux pluies acides et aux sels. Un test simple de terrain consiste à déposer une goutte d'acide dilué : un calcaire fait effervescence, un grès siliceux ou un granite non.</p>"
      },
      {
       "titre": "Les propriétés utiles d'une pierre",
       "contenu": "<p>Une pierre se caractérise par des propriétés mesurées en laboratoire et indiquées dans les fiches des carriers :</p>\n<ul>\n<li>la <strong>masse volumique apparente</strong>, en kg/m<sup>3</sup> : de l'ordre de 1 400 à 1 800 kg/m<sup>3</sup> pour un calcaire tendre comme le tuffeau, autour de 2 200 à 2 600 kg/m<sup>3</sup> pour un calcaire dur, de 2 600 à 2 700 kg/m<sup>3</sup> pour un granite ;</li>\n<li>la <strong>porosité</strong>, en % : proportion de vides dans la pierre ; elle peut dépasser 40 % pour certains calcaires tendres et rester sous 1 % pour un granite ;</li>\n<li>la <strong>résistance à la compression</strong>, en MPa : quelques MPa pour une pierre très tendre, plus de 100 MPa pour un granite ;</li>\n<li>la <strong>capillarité</strong> (vitesse d'absorption de l'eau) et la <strong>résistance au gel</strong>.</li>\n</ul>\n<p>Dans le métier, on classe aussi les pierres par leur dureté à la taille : <strong>tendres</strong>, <strong>fermes</strong>, <strong>dures</strong> et <strong>froides</strong> (très dures). Plus la pierre est tendre et poreuse, plus elle est facile à travailler, mais plus elle est sensible à l'eau, au gel et aux sels.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la masse d'une pierre de remplacement. Bloc de calcaire de 0,60 m × 0,35 m × 0,40 m, masse volumique 2 300 kg/m<sup>3</sup>. Volume : V = 0,60 × 0,35 × 0,40 = 0,084 m<sup>3</sup>. Masse : m = 2 300 × 0,084 = 193,2 kg, soit environ 190 kg. Ce bloc ne se manutentionne pas à la main : il faut un moyen de levage (palan, potence, chariot) et des accessoires adaptés.</div>"
      },
      {
       "titre": "Lit de carrière, délit et gélivité",
       "contenu": "<p>Une roche sédimentaire s'est formée par couches horizontales successives. Elle garde une orientation interne : le <strong>lit de carrière</strong>. Elle résiste mieux et vieillit mieux lorsqu'elle est posée dans le mur avec ses couches horizontales, comme dans la carrière : on dit qu'elle est posée <strong>sur son lit</strong>.</p>\n<p>Une pierre posée avec ses couches verticales, parallèles au parement, est posée <strong>en délit</strong>. Sous l'effet de l'eau et du gel, elle se desquame par plaques successives, comme les pages d'un livre qui se décollent. La pose en délit n'est admise que pour certains éléments (colonnettes, meneaux, dalles minces) et pour des pierres homogènes choisies à cet effet.</p>\n<p>Une pierre est <strong>gélive</strong> lorsqu'elle se dégrade sous l'effet du gel : l'eau contenue dans ses pores augmente d'environ 9 % de volume en gelant et exerce des pressions qui fissurent la pierre. Les pierres gélives sont réservées aux parties abritées ; les soubassements, appuis, corniches, couronnements de murs et marches extérieures exigent des pierres non gélives.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un bloc taillé, le lit de carrière n'est pas toujours visible. Le carrier doit le marquer sur le bloc (un trait ou une flèche) et l'information doit être conservée jusqu'à la pose. Une pierre neuve posée en délit par erreur peut se dégrader en quelques hivers.</div>"
      },
      {
       "titre": "Briques et tuiles de terre cuite",
       "contenu": "<p>La <strong>terre cuite</strong> est obtenue par cuisson d'une argile façonnée. Avant l'industrialisation, les briques et tuiles étaient moulées à la main et cuites dans des fours à bois. Leurs propriétés étaient irrégulières : selon leur place dans le four, certaines étaient bien cuites, dures et sonores, d'autres insuffisamment cuites, plus tendres et plus poreuses. Ces variations expliquent les nuances de teinte appréciées dans les murs et les toits anciens.</p>\n<p>Les briques anciennes ont des formats différents des briques modernes et variables selon les régions. La brique dite « foraine » du Sud-Ouest, large et plate, n'a pas les dimensions d'une brique de Flandre. Pour remplacer une brique, on doit donc relever le format et chercher une brique de récupération ou une fabrication artisanale sur mesure.</p>\n<p>Les propriétés à contrôler sont la résistance au gel, la porosité et la présence de sels solubles. Une brique très cuite et peu poreuse placée au milieu de briques anciennes tendres modifie la circulation de l'eau dans le mur : l'humidité contourne la brique dure et dégrade ses voisines.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> on « sonne » une brique ou une tuile en la frappant légèrement avec un objet métallique. Un son clair indique une pièce bien cuite et saine ; un son sourd ou fêlé signale une fissure ou une cuisson insuffisante. Ce contrôle est systématique lors du tri des matériaux de réemploi.</div>"
      },
      {
       "titre": "La terre crue : composition et comportement",
       "contenu": "<p>La <strong>terre à bâtir</strong> est un mélange naturel de grains de tailles différentes :</p>\n<ul>\n<li><strong>cailloux et graviers</strong> (au-delà de 2 mm), qui forment le squelette ;</li>\n<li><strong>sables</strong> (de 0,06 à 2 mm) ;</li>\n<li><strong>limons</strong> (de 0,002 à 0,06 mm) ;</li>\n<li><strong>argiles</strong> (moins de 0,002 mm), qui jouent le rôle de liant.</li>\n</ul>\n<p>L'argile ne durcit pas par réaction chimique comme la chaux ou le ciment : elle lie les grains en séchant, et elle redevient plastique si on la remouille. La terre crue est donc sensible à l'eau liquide, mais elle supporte très bien l'humidité ambiante et régule l'hygrométrie intérieure. Une terre trop argileuse fissure au séchage (retrait) ; une terre trop maigre manque de cohésion. Chaque technique demande une terre adaptée : plutôt graveleuse et peu humide pour le pisé, plus argileuse et fibrée pour la bauge et le torchis.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> le test du cigare, utilisé pour apprécier une terre. 1. Prendre une poignée de terre fine, l'humidifier jusqu'à ce qu'elle soit plastique sans coller. 2. Rouler un boudin d'environ 3 cm de diamètre. 3. Le pousser lentement au-dessus du vide, au bord de la main. 4. Mesurer la longueur du morceau qui se casse. Une rupture très courte indique une terre maigre (peu d'argile), une rupture longue une terre grasse (riche en argile). Ce test donne une indication qualitative qui ne remplace pas une analyse en laboratoire pour un ouvrage important.</div>"
      },
      {
       "titre": "Réemploi et choix des matériaux de remplacement",
       "contenu": "<p>Le <strong>réemploi</strong> consiste à réutiliser un matériau déposé, pour le même usage, après tri et contrôle. Il est très pratiqué sur le bâti ancien : il préserve l'aspect de l'ouvrage, réduit les déchets et économise des ressources. Les matériaux de réemploi doivent être triés (pièces saines, pièces à recouper, rebuts), nettoyés de leur ancien mortier, stockés à l'abri et repérés.</p>\n<p>Pour un matériau neuf de remplacement, le choix se fait par comparaison avec le matériau d'origine selon des critères précis :</p>\n<table>\n<thead><tr><th>Critère</th><th>Pourquoi</th></tr></thead>\n<tbody>\n<tr><td>Nature géologique et aspect (couleur, grain)</td><td>Intégration visuelle et vieillissement comparable</td></tr>\n<tr><td>Porosité et capillarité voisines</td><td>Même circulation de l'eau que les éléments voisins</td></tr>\n<tr><td>Dureté égale ou légèrement inférieure</td><td>Éviter qu'un élément trop dur reporte l'usure sur les éléments anciens</td></tr>\n<tr><td>Résistance au gel adaptée à la position</td><td>Durabilité dans les zones exposées</td></tr>\n<tr><td>Format et dimensions</td><td>Respect de l'appareil et des joints existants</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le meilleur matériau de remplacement est celui qui se comporte comme l'ancien, pas forcément le plus résistant. Une pierre « trop bonne » dans un mur tendre crée un point dur et concentre les désordres sur les pierres d'origine.</div>"
      }
     ],
     "points_cles": [
      "Les roches sont sédimentaires (calcaires, grès), magmatiques (granite) ou métamorphiques (schiste, marbre).",
      "Masse volumique, porosité, résistance, capillarité et gélivité caractérisent une pierre.",
      "Une pierre sédimentaire se pose sur son lit de carrière ; posée en délit, elle se desquame.",
      "L'eau augmente d'environ 9 % de volume en gelant : les pierres gélives sont réservées aux parties abritées.",
      "Les terres cuites anciennes sont hétérogènes ; une pièce trop dure perturbe la circulation de l'eau.",
      "La terre crue est liée par l'argile, qui durcit en séchant et redevient plastique à l'eau.",
      "Le réemploi suppose tri, nettoyage, stockage à l'abri et repérage.",
      "Un matériau de remplacement doit être compatible : aspect, porosité, dureté égale ou légèrement inférieure."
     ],
     "lexique": [
      {
       "terme": "Roche sédimentaire",
       "def": "Roche formée par dépôt et consolidation de sédiments, souvent litée (calcaire, grès)."
      },
      {
       "terme": "Roche magmatique",
       "def": "Roche formée par refroidissement d'un magma (granite, basalte)."
      },
      {
       "terme": "Porosité",
       "def": "Proportion du volume d'un matériau occupée par des vides, en pourcentage."
      },
      {
       "terme": "Masse volumique apparente",
       "def": "Masse d'un matériau par unité de volume, vides compris, en kg/m³."
      },
      {
       "terme": "Lit de carrière",
       "def": "Orientation des couches d'une pierre sédimentaire telle qu'elle était dans la carrière."
      },
      {
       "terme": "Délit",
       "def": "Pose d'une pierre avec ses couches verticales, qui favorise la desquamation."
      },
      {
       "terme": "Gélivité",
       "def": "Sensibilité d'un matériau aux dégradations causées par le gel de l'eau qu'il contient."
      },
      {
       "terme": "Argile",
       "def": "Fraction la plus fine d'une terre (moins de 2 µm), qui lie les grains en séchant."
      },
      {
       "terme": "Retrait",
       "def": "Diminution de volume d'un matériau lors de son séchage, cause de fissures."
      },
      {
       "terme": "Réemploi",
       "def": "Réutilisation d'un matériau déposé pour un usage identique, après tri et contrôle."
      }
     ]
    },
    {
     "id": "bipb-chaux-liants",
     "titre": "Chaux, plâtre et liants des mortiers anciens",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire le cycle de la chaux aérienne et les réactions chimiques correspondantes",
      "Distinguer chaux aérienne, chaux hydraulique naturelle et chaux formulée selon la norme NF EN 459-1",
      "Expliquer la fabrication et les usages traditionnels du plâtre",
      "Justifier l'incompatibilité fréquente du ciment avec le bâti ancien",
      "Composer et calculer un mortier de chaux à partir d'un dosage volumique"
     ],
     "sections": [
      {
       "titre": "Le cycle de la chaux",
       "contenu": "<p>La <strong>chaux</strong> est le liant majeur du bâti ancien. Elle est fabriquée à partir de calcaire, et elle redevient calcaire en durcissant : c'est le <strong>cycle de la chaux</strong>.</p>\n<ol>\n<li><strong>Calcination</strong> : le calcaire (carbonate de calcium) est cuit dans un four vers 900 °C. Il libère du dioxyde de carbone et donne la <strong>chaux vive</strong> (oxyde de calcium) : CaCO<sub>3</sub> → CaO + CO<sub>2</sub>.</li>\n<li><strong>Extinction</strong> : la chaux vive réagit violemment avec l'eau, en dégageant beaucoup de chaleur, pour donner la <strong>chaux éteinte</strong> (hydroxyde de calcium) : CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub>. Éteinte avec juste assez d'eau, elle forme une poudre ; avec un excès d'eau, une pâte (chaux en pâte, ou chaux grasse vieillie en fosse).</li>\n<li><strong>Carbonatation</strong> : dans le mortier, la chaux éteinte réagit lentement avec le dioxyde de carbone de l'air et redevient du carbonate de calcium : Ca(OH)<sub>2</sub> + CO<sub>2</sub> → CaCO<sub>3</sub> + H<sub>2</sub>O.</li>\n</ol>\n<p>La carbonatation progresse de la surface vers le cœur, lentement : quelques millimètres en quelques semaines, et plusieurs mois ou années pour un mur épais. Elle a besoin d'air et d'un peu d'humidité : un mortier de chaux qui sèche trop vite ou qui reste détrempé durcit mal.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la chaux vive et la chaux éteinte sont corrosives pour la peau et surtout pour les yeux. On porte des lunettes de protection et des gants pour toute manipulation de chaux ; en cas de projection dans l'œil, on rince immédiatement et longuement à l'eau claire et on consulte. L'extinction de la chaux vive, très exothermique, est réservée à des personnes formées.</div>"
      },
      {
       "titre": "Les familles de chaux de construction",
       "contenu": "<p>Les chaux de construction sont définies par la norme <strong>NF EN 459-1</strong>. Elles se répartissent en deux grandes familles.</p>\n<table>\n<thead><tr><th>Famille</th><th>Désignation</th><th>Durcissement</th><th>Caractères</th></tr></thead>\n<tbody>\n<tr><td>Chaux aériennes</td><td><strong>CL</strong> (chaux calcique : CL 90, CL 80, CL 70) et <strong>DL</strong> (chaux dolomitique)</td><td>Uniquement par carbonatation à l'air</td><td>Très souple, très perméable, prise lente, résistance faible</td></tr>\n<tr><td>Chaux à propriétés hydrauliques</td><td><strong>NHL</strong> (chaux hydraulique naturelle : NHL 2, NHL 3,5, NHL 5)</td><td>Prise hydraulique (en présence d'eau) puis carbonatation</td><td>Obtenue à partir de calcaires argileux, sans ajout ; plus résistante à mesure que le chiffre augmente</td></tr>\n<tr><td>Chaux à propriétés hydrauliques</td><td><strong>FL</strong> (chaux formulée) et <strong>HL</strong> (chaux hydraulique)</td><td>Prise hydraulique et carbonatation</td><td>Peuvent contenir des additions (dont du ciment) dont la nature doit être déclarée par le fabricant</td></tr>\n</tbody>\n</table>\n<p>Le chiffre d'une CL indique la teneur minimale en oxydes de calcium et de magnésium (90 % pour une CL 90). Le chiffre d'une NHL indique une classe de <strong>résistance à la compression à 28 jours</strong>, en MPa : par exemple, une NHL 3,5 a une résistance comprise entre 3,5 et 10 MPa selon la norme.</p>\n<p>La désignation peut être suivie de lettres : <strong>Q</strong> pour la chaux vive, <strong>S</strong> pour la chaux éteinte en poudre (hydrate), <strong>PL</strong> pour la chaux en pâte. Ainsi, « CL 90-S » est une chaux aérienne calcique éteinte en poudre.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la chaux hydraulique naturelle « pure » se reconnaît au sigle NHL. Une chaux FL ou HL peut contenir du ciment ; on vérifie la fiche technique quand le dossier exige un liant compatible avec le bâti ancien.</div>"
      },
      {
       "titre": "Choisir la chaux selon l'ouvrage",
       "contenu": "<p>Le choix dépend du support, de l'exposition et de l'usage. Les règles de l'art du bâti ancien conduisent généralement aux associations suivantes, que les prescriptions du dossier peuvent préciser :</p>\n<table>\n<thead><tr><th>Ouvrage</th><th>Liant habituel</th></tr></thead>\n<tbody>\n<tr><td>Badigeons, laits de chaux, enduits de finition sur supports tendres</td><td>Chaux aérienne (CL), éventuellement en pâte</td></tr>\n<tr><td>Enduits sur maçonneries de terre, de pierre tendre ou de brique ancienne</td><td>Chaux aérienne ou NHL 2</td></tr>\n<tr><td>Enduits courants et rejointoiements sur maçonneries de moellons</td><td>NHL 2 ou NHL 3,5, parfois en mélange avec de la chaux aérienne</td></tr>\n<tr><td>Maçonnerie exposée (soubassements, couronnements, ouvrages en contact avec l'eau)</td><td>NHL 3,5 ou NHL 5</td></tr>\n<tr><td>Hourdage de maçonnerie de pierre dure</td><td>NHL 3,5 ou NHL 5</td></tr>\n</tbody>\n</table>\n<p>Plus la chaux est hydraulique, plus le mortier est résistant et rapide, mais moins il est souple et perméable. La règle de compatibilité s'applique : le mortier doit rester moins dur et au moins aussi perméable que les pierres ou briques qu'il lie.</p>"
      },
      {
       "titre": "Le plâtre traditionnel",
       "contenu": "<p>Le <strong>plâtre</strong> est obtenu par cuisson du <strong>gypse</strong> (sulfate de calcium hydraté, CaSO<sub>4</sub>·2H<sub>2</sub>O) à basse température, vers 150 °C pour les plâtres courants. Le gypse perd une partie de son eau et devient un semi-hydrate qui, gâché avec de l'eau, se réhydrate et durcit en quelques minutes : c'est la <strong>prise</strong> du plâtre.</p>\n<p>Le plâtre est un matériau traditionnel majeur dans les régions riches en gypse, notamment en Île-de-France : enduits intérieurs et extérieurs, corniches traînées, hourdis de planchers, remplissages de pans de bois. Les <strong>plâtres anciens</strong>, cuits au feu de bois de façon hétérogène, contenaient des fractions cuites à plus haute température et des impuretés qui les rendaient plus résistants aux intempéries que les plâtres modernes de construction. C'est pourquoi on emploie en restauration des plâtres et des plâtres et chaux spécifiques pour l'extérieur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le plâtre et le ciment sont incompatibles. Les sulfates du plâtre réagissent avec certains constituants du ciment pour former des cristaux expansifs qui font éclater le mortier. On ne répare jamais un enduit plâtre ou un support plâtre au mortier de ciment. Le plâtre attaque aussi l'acier non protégé, qu'il fait rouiller.</div>"
      },
      {
       "titre": "Pourquoi le ciment pose problème sur le bâti ancien",
       "contenu": "<p>Le <strong>ciment Portland</strong> est un liant hydraulique obtenu par cuisson à environ 1 450 °C d'un mélange de calcaire et d'argile, puis broyage avec du gypse. Il est excellent pour le béton armé, mais il pose plusieurs problèmes au contact des maçonneries anciennes :</p>\n<ul>\n<li><strong>rigidité</strong> : un mortier de ciment est beaucoup plus dur et moins déformable que les maçonneries anciennes, qui bougent légèrement avec les saisons ; il fissure ou fait éclater les pierres voisines ;</li>\n<li><strong>faible perméabilité</strong> : un enduit ciment freine l'évaporation de l'eau du mur, qui s'accumule derrière lui ;</li>\n<li><strong>sels solubles</strong> : certains ciments apportent des sels (sulfates, alcalins) qui migrent dans les pierres poreuses et les dégradent ;</li>\n<li><strong>irréversibilité</strong> : un joint ou un enduit ciment est difficile à retirer sans abîmer les pierres.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le décroûtage d'un enduit ciment sur un mur ancien révèle souvent des pierres humides, salpêtrées ou effritées juste derrière l'enduit, alors que l'enduit lui-même paraissait sain. Le dossier prévoit alors un temps de séchage du mur avant le nouvel enduit à la chaux.</div>"
      },
      {
       "titre": "Composer un mortier de chaux",
       "contenu": "<p>Un mortier est un mélange de <strong>liant</strong>, de <strong>granulats</strong> (sable) et d'<strong>eau</strong>, avec parfois des adjuvants. Pour la chaux, la qualité du sable est aussi importante que celle du liant : un sable propre (sans argile ni matière organique), à granulométrie étalée (grains de tailles variées), donne un mortier compact et durable. Le sable fait aussi la couleur et la texture de l'enduit, d'où l'intérêt d'utiliser des sables locaux pour retrouver l'aspect d'origine.</p>\n<p>Les dosages s'expriment souvent en <strong>volumes</strong> (rapport liant / sable) ou en <strong>kg de liant par m<sup>3</sup> de sable</strong>. Un dosage courant pour un mortier de hourdage ou de corps d'enduit à la chaux NHL est de 1 volume de chaux pour 2,5 à 3 volumes de sable, soit de l'ordre de 300 à 350 kg de chaux par m<sup>3</sup> de sable sec.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer un mortier de chaux au dosage 1 volume de NHL 3,5 pour 3 volumes de sable, avec un seau de 10 L comme mesure. Pour une gâchée en bétonnière : 2 seaux de chaux (20 L) et 6 seaux de sable (60 L). Masse de chaux, avec une masse volumique apparente de la chaux en poudre d'environ 0,6 kg/L (valeur à vérifier sur la fiche technique) : 20 × 0,6 = 12 kg. Ordre de mélange : une partie de l'eau, la moitié du sable, la chaux, le reste du sable, puis l'eau par petites quantités jusqu'à la consistance voulue. Malaxer au moins 5 minutes. Un mortier de chaux trop mouillé fissure au séchage : on ajoute l'eau avec parcimonie.</div>\n<p>La mise en œuvre exige des précautions : humidifier le support la veille et avant application, travailler hors gel (en général au-dessus de 5 °C) et hors forte chaleur, protéger du soleil direct, du vent et de la pluie battante pendant les premiers jours, et maintenir humide par brumisation pour une bonne carbonatation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un mortier de chaux réussi dépend autant du sable, de l'eau de gâchage et de la cure que du liant. Une façade enduite à la chaux un jour de vent sec et chaud sans protection est condamnée au faïençage.</div>"
      }
     ],
     "points_cles": [
      "Cycle de la chaux : calcination (CaCO3 → CaO + CO2), extinction (CaO + H2O → Ca(OH)2), carbonatation (Ca(OH)2 + CO2 → CaCO3 + H2O).",
      "La norme NF EN 459-1 distingue chaux aériennes (CL, DL) et chaux à propriétés hydrauliques (NHL, FL, HL).",
      "Le chiffre d'une NHL indique une classe de résistance à 28 jours en MPa.",
      "Une chaux FL ou HL peut contenir des additions, dont du ciment : on lit la fiche technique.",
      "Le plâtre vient du gypse cuit vers 150 °C ; il est incompatible avec le ciment.",
      "Le ciment est trop rigide, peu perméable et parfois salin pour les maçonneries anciennes.",
      "Un mortier de chaux courant est dosé à environ 1 volume de chaux pour 2,5 à 3 volumes de sable.",
      "La cure (humidification, protection) conditionne la réussite d'un mortier de chaux.",
      "La chaux est corrosive : lunettes et gants sont obligatoires."
     ],
     "lexique": [
      {
       "terme": "Chaux vive",
       "def": "Oxyde de calcium obtenu par calcination du calcaire, très réactif avec l'eau."
      },
      {
       "terme": "Chaux éteinte",
       "def": "Hydroxyde de calcium obtenu par extinction de la chaux vive, en poudre ou en pâte."
      },
      {
       "terme": "Carbonatation",
       "def": "Réaction de la chaux éteinte avec le CO2 de l'air, qui la transforme en carbonate de calcium."
      },
      {
       "terme": "Chaux aérienne (CL)",
       "def": "Chaux qui durcit uniquement à l'air par carbonatation."
      },
      {
       "terme": "NHL",
       "def": "Chaux hydraulique naturelle, issue de calcaires argileux, qui fait prise en présence d'eau."
      },
      {
       "terme": "Chaux formulée (FL)",
       "def": "Chaux à propriétés hydrauliques pouvant contenir des additions déclarées."
      },
      {
       "terme": "Gypse",
       "def": "Roche de sulfate de calcium hydraté, matière première du plâtre."
      },
      {
       "terme": "Prise",
       "def": "Début du durcissement d'un liant après gâchage."
      },
      {
       "terme": "Granulométrie",
       "def": "Répartition des grains d'un sable ou d'un granulat selon leur taille."
      },
      {
       "terme": "Cure",
       "def": "Ensemble des mesures (humidification, protection) qui permettent à un mortier de durcir correctement."
      },
      {
       "terme": "Hourdage",
       "def": "Liaison des éléments d'une maçonnerie par un mortier."
      }
     ]
    },
    {
     "id": "bipb-bois-metaux",
     "titre": "Le bois et les métaux dans le bâti ancien",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire la structure du bois et ses conséquences sur son comportement",
      "Distinguer les principales essences de charpente anciennes et actuelles",
      "Calculer et interpréter le taux d'humidité d'un bois",
      "Utiliser les classes d'emploi pour choisir un bois ou un traitement",
      "Connaître les métaux du bâti ancien et prévenir la corrosion par contact"
     ],
     "sections": [
      {
       "titre": "La structure du bois",
       "contenu": "<p>Le bois est un matériau d'origine végétale, formé de cellules allongées orientées principalement dans le sens de la tige : c'est le <strong>fil du bois</strong>. Il est donc <strong>anisotrope</strong> : ses propriétés changent selon la direction. Il résiste bien en traction et en compression dans le sens du fil, beaucoup moins en travers.</p>\n<p>Une coupe transversale d'un tronc montre, de l'extérieur vers le centre :</p>\n<ul>\n<li>l'<strong>écorce</strong> ;</li>\n<li>l'<strong>aubier</strong>, partie jeune et vivante, plus claire, riche en sucres et en amidon, donc appréciée des insectes et des champignons ;</li>\n<li>le <strong>duramen</strong> (ou bois parfait), partie centrale morte, souvent plus foncée, plus durable naturellement pour de nombreuses essences ;</li>\n<li>la <strong>moelle</strong>, au centre.</li>\n</ul>\n<p>Les <strong>cernes annuels</strong> correspondent à la croissance d'une année. Une poutre obtenue en équarrissant un tronc entier, le cœur au centre, est dite <strong>de brin</strong> ; une pièce débitée en plusieurs morceaux dans un gros tronc est dite <strong>de sciage</strong>. La pièce de brin conserve des fibres continues sur toute sa longueur, ce qui la rend très résistante, mais, comme elle contient le cœur, elle présente presque toujours des fentes de retrait. Les charpentes anciennes utilisent beaucoup de bois de brin, équarri à la hache, souvent mis en œuvre peu après l'abattage.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'aubier est la partie la plus vulnérable d'une pièce de bois. Sur une poutre ancienne attaquée par les insectes, les dégâts se concentrent très souvent dans l'aubier des arêtes, alors que le cœur reste sain : un sondage est indispensable avant de condamner la pièce.</div>"
      },
      {
       "titre": "Les essences de la construction",
       "contenu": "<p>On distingue les <strong>feuillus</strong> (chêne, châtaignier, peuplier, orme…) et les <strong>résineux</strong> (sapin, épicéa, pin, douglas, mélèze…).</p>\n<table>\n<thead><tr><th>Essence</th><th>Masse volumique indicative à 12 % d'humidité</th><th>Usages traditionnels</th><th>Particularités</th></tr></thead>\n<tbody>\n<tr><td>Chêne</td><td>environ 650 à 750 kg/m<sup>3</sup></td><td>Charpentes anciennes, pans de bois, sablières, menuiseries</td><td>Duramen durable ; aubier non durable ; tanins qui tachent et corrodent certains métaux</td></tr>\n<tr><td>Châtaignier</td><td>environ 550 à 650 kg/m<sup>3</sup></td><td>Charpentes régionales, lattis, bardeaux, piquets</td><td>Duramen durable, peu d'aubier ; tanins</td></tr>\n<tr><td>Sapin, épicéa</td><td>environ 450 kg/m<sup>3</sup></td><td>Charpentes du XIX<sup>e</sup> siècle, voliges, liteaux, charpentes actuelles</td><td>Peu durables sans traitement en ambiance humide</td></tr>\n<tr><td>Douglas</td><td>environ 500 à 550 kg/m<sup>3</sup></td><td>Charpente et ossature actuelles</td><td>Duramen moyennement durable</td></tr>\n<tr><td>Mélèze</td><td>environ 600 kg/m<sup>3</sup></td><td>Bardeaux, bardages, charpentes de montagne</td><td>Duramen moyennement durable, résineux</td></tr>\n</tbody>\n</table>\n<p>En restauration, on remplace en général un bois par la même essence, pour conserver un comportement mécanique et un aspect identiques. Le chêne doit souvent être utilisé <strong>vert</strong> ou mi-sec pour les grosses sections, comme le faisaient les anciens, car un séchage complet de pièces de forte section demanderait des années.</p>"
      },
      {
       "titre": "L'humidité du bois",
       "contenu": "<p>Le bois contient de l'eau, qu'il échange avec l'air ambiant. Le <strong>taux d'humidité</strong> H s'exprime en pourcentage de la masse du bois sec (dit anhydre) :</p>\n<p><strong>H = (m<sub>h</sub> − m<sub>0</sub>) / m<sub>0</sub> × 100</strong>, avec m<sub>h</sub> la masse humide et m<sub>0</sub> la masse anhydre.</p>\n<p>Repères importants :</p>\n<ul>\n<li>bois fraîchement abattu : souvent plus de 50 %, parfois plus de 100 % ;</li>\n<li><strong>point de saturation des fibres</strong> : environ 30 % ; en dessous, le bois commence à se rétracter en séchant ;</li>\n<li>bois de charpente en service sous abri : de l'ordre de 12 à 18 % selon l'ambiance ;</li>\n<li>au-delà d'environ 20 % de façon durable, le risque de développement de champignons lignivores devient important.</li>\n</ul>\n<p>En séchant sous le point de saturation des fibres, le bois <strong>se rétracte</strong> beaucoup plus en largeur (sens tangentiel aux cernes) qu'en épaisseur radiale, et presque pas en longueur. D'où les <strong>fentes de retrait</strong> visibles sur les poutres anciennes, qui sont normales et ne réduisent que peu la résistance si elles restent dans le sens du fil.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul d'un taux d'humidité. Une éprouvette prélevée dans un chevron pèse 186 g. Séchée à l'étuve jusqu'à masse constante, elle pèse 150 g. H = (186 − 150) / 150 × 100 = 24 %. Le bois est au-dessus de 20 % : il faut chercher l'origine de l'humidité (fuite de couverture, condensation) et surveiller les attaques fongiques. Sur chantier, on utilise un <strong>humidimètre à pointes</strong> (mesure de résistance électrique) qui donne une valeur directe, en réglant l'appareil sur l'essence.</div>"
      },
      {
       "titre": "Durabilité et classes d'emploi",
       "contenu": "<p>La <strong>durabilité naturelle</strong> d'un bois est sa résistance, sans traitement, aux champignons et aux insectes. Elle concerne le duramen ; l'aubier de toutes les essences est considéré comme non durable.</p>\n<p>La norme <strong>NF EN 335</strong> définit cinq <strong>classes d'emploi</strong> selon l'exposition du bois à l'humidité :</p>\n<table>\n<thead><tr><th>Classe</th><th>Situation</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Intérieur, toujours sec</td><td>Parquet, menuiserie intérieure</td></tr>\n<tr><td>2</td><td>Intérieur ou sous abri, humidification occasionnelle possible</td><td>Charpente, ossature sous couverture</td></tr>\n<tr><td>3</td><td>Extérieur, hors contact avec le sol (3.1 : séchage rapide ; 3.2 : humidité plus durable)</td><td>Bardage, menuiseries extérieures, liteaux exposés</td></tr>\n<tr><td>4</td><td>Extérieur, en contact avec le sol ou l'eau douce</td><td>Poteau enterré, pied de pan de bois noyé</td></tr>\n<tr><td>5</td><td>En contact avec l'eau salée</td><td>Ouvrages maritimes</td></tr>\n</tbody>\n</table>\n<p>Pour chaque classe, on choisit soit une essence dont le duramen est suffisamment durable, soit un bois traité par un produit de <strong>préservation</strong> adapté. Les produits de traitement sont des produits biocides : ils sont soumis à autorisation de mise sur le marché, et leur fiche de données de sécurité précise les protections nécessaires.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un traitement préventif ne compense pas une erreur de conception. Un pied de poteau en contact avec un sol humide ou une sablière noyée dans un mur humide pourrira même traité : on supprime d'abord la cause (rehausser, isoler du sol, ventiler).</div>"
      },
      {
       "titre": "Les métaux du bâti ancien",
       "contenu": "<p>Le bâti ancien contient de nombreux éléments métalliques :</p>\n<ul>\n<li>le <strong>fer forgé</strong> et la <strong>fonte</strong> : tirants, ancres, agrafes, garde-corps, colonnes, planchers à fers à I ; le fer non protégé rouille, et la rouille occupe plusieurs fois le volume du métal, ce qui fait éclater la pierre autour d'une agrafe scellée ;</li>\n<li>le <strong>plomb</strong> : couvertures, faîtages, noues, scellements, très durable mais toxique ;</li>\n<li>le <strong>zinc</strong> : couvertures, gouttières et descentes depuis le XIX<sup>e</sup> siècle ;</li>\n<li>le <strong>cuivre</strong> : couvertures et ouvrages de prestige, qui se couvre d'une patine verte (vert-de-gris) protectrice ;</li>\n<li>les <strong>aciers inoxydables</strong> et le <strong>laiton</strong>, employés aujourd'hui pour les agrafes, goujons et attaches de restauration.</li>\n</ul>\n<p>Les métaux se dilatent avec la chaleur. L'allongement se calcule par ΔL = α × L × ΔT, avec α le coefficient de dilatation. Pour le zinc, α vaut environ 0,022 mm par mètre et par degré, soit près de deux fois celui de l'acier.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dilatation d'une bande de zinc de 6 m entre −10 °C l'hiver et +70 °C au soleil l'été (écart de 80 °C). ΔL = 0,022 × 6 × 80 = 10,6 mm. Une gouttière ou une feuille de couverture de cette longueur bouge d'environ 1 cm : elle doit être fixée de manière à pouvoir coulisser (pattes coulissantes, dilatateurs), sinon elle se déforme et se fissure.</div>"
      },
      {
       "titre": "La corrosion par contact et les incompatibilités",
       "contenu": "<p>Lorsque deux métaux différents sont en contact en présence d'eau, il se forme une pile : le métal le moins noble se corrode rapidement. C'est la <strong>corrosion galvanique</strong>. Le même phénomène se produit lorsque l'eau ruisselle d'un métal noble vers un métal moins noble.</p>\n<table>\n<thead><tr><th>Association</th><th>Risque</th></tr></thead>\n<tbody>\n<tr><td>Eau ruisselant d'une couverture en cuivre sur une gouttière en zinc ou en acier galvanisé</td><td>Corrosion rapide du zinc</td></tr>\n<tr><td>Clous ou pattes en acier non protégé sur du cuivre ou du zinc</td><td>Corrosion du fer et taches</td></tr>\n<tr><td>Zinc en contact avec des bois riches en tanins (chêne, châtaignier) ou avec du plâtre humide</td><td>Attaque chimique du zinc</td></tr>\n<tr><td>Fer scellé au plâtre</td><td>Rouille accélérée</td></tr>\n<tr><td>Plomb et zinc avec mortier frais de chaux ou de ciment</td><td>Attaque par les alcalins du mortier frais</td></tr>\n</tbody>\n</table>\n<p>Pour éviter ces désordres, on respecte l'ordre d'écoulement des eaux (métal le moins noble en amont), on isole les métaux par des intercalaires, on utilise des fixations compatibles (pointes et pattes en cuivre pour le cuivre, en zinc ou acier inoxydable pour le zinc selon les prescriptions) et on suit les documents techniques du métal.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en restauration de maçonnerie, les anciennes agrafes en fer qui ont fait éclater les pierres sont retirées et remplacées par des agrafes en acier inoxydable ou en laiton, scellées au mortier de chaux ou au plomb selon la prescription. C'est un exemple typique de remplacement « compatible et durable ».</div>"
      }
     ],
     "points_cles": [
      "Le bois est anisotrope : il résiste surtout dans le sens du fil.",
      "L'aubier est vulnérable ; le duramen de certaines essences est naturellement durable.",
      "H = (mh − m0) / m0 × 100 ; au-dessus d'environ 20 % durablement, le risque fongique est élevé.",
      "Le bois se rétracte sous le point de saturation des fibres (environ 30 %), surtout en largeur.",
      "La NF EN 335 définit cinq classes d'emploi selon l'exposition à l'humidité.",
      "Un traitement ne compense jamais une humidité due à une erreur de conception.",
      "Le zinc se dilate d'environ 0,022 mm/m/°C : ΔL = α × L × ΔT.",
      "Corrosion galvanique : le métal le moins noble se corrode ; jamais d'eau du cuivre vers le zinc.",
      "La rouille fait éclater la pierre autour des anciennes agrafes en fer."
     ],
     "lexique": [
      {
       "terme": "Anisotrope",
       "def": "Se dit d'un matériau dont les propriétés varient selon la direction."
      },
      {
       "terme": "Aubier",
       "def": "Partie extérieure et jeune du bois, plus claire et peu durable."
      },
      {
       "terme": "Duramen",
       "def": "Partie centrale du bois, souvent plus foncée et plus durable."
      },
      {
       "terme": "Bois de brin",
       "def": "Pièce obtenue par équarrissage d'un tronc entier, le cœur au centre."
      },
      {
       "terme": "Point de saturation des fibres",
       "def": "Taux d'humidité (environ 30 %) en dessous duquel le bois se rétracte en séchant."
      },
      {
       "terme": "Humidimètre",
       "def": "Appareil mesurant le taux d'humidité d'un bois, généralement par résistance électrique."
      },
      {
       "terme": "Classe d'emploi",
       "def": "Catégorie d'exposition du bois à l'humidité définie par la norme NF EN 335."
      },
      {
       "terme": "Biocide",
       "def": "Produit destiné à détruire ou repousser des organismes nuisibles, comme les produits de traitement du bois."
      },
      {
       "terme": "Corrosion galvanique",
       "def": "Corrosion d'un métal au contact d'un métal plus noble en présence d'eau."
      },
      {
       "terme": "Coefficient de dilatation",
       "def": "Allongement d'un matériau par unité de longueur et par degré de température."
      },
      {
       "terme": "Tanins",
       "def": "Substances naturelles de certains bois (chêne, châtaignier), acides, qui attaquent certains métaux."
      }
     ]
    },
    {
     "id": "bipb-mecanique-ouvrages",
     "titre": "Comment tiennent les ouvrages anciens",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Distinguer les sollicitations de compression, traction, flexion et cisaillement dans un ouvrage",
      "Établir une descente de charges simple sur un mur ancien et calculer une contrainte",
      "Expliquer la poussée des arcs et des voûtes et les dispositifs qui la reprennent",
      "Décrire le rôle des chaînages, tirants et ancrages dans le bâti ancien",
      "Expliquer le fonctionnement d'une ferme de charpente triangulée"
     ],
     "sections": [
      {
       "titre": "Les sollicitations élémentaires",
       "contenu": "<p>Tout ouvrage reçoit des <strong>actions</strong> : son poids propre (charges permanentes), les charges d'exploitation (occupants, mobilier, stockage), les actions climatiques (neige, vent) et éventuellement des actions accidentelles. Ces actions créent dans les éléments des <strong>sollicitations</strong> :</p>\n<table>\n<thead><tr><th>Sollicitation</th><th>Effet</th><th>Exemple</th><th>Matériaux adaptés</th></tr></thead>\n<tbody>\n<tr><td><strong>Compression</strong></td><td>Écrasement</td><td>Mur, pilier, poteau</td><td>Pierre, brique, bois, béton</td></tr>\n<tr><td><strong>Traction</strong></td><td>Allongement, arrachement</td><td>Tirant, entrait de ferme</td><td>Bois dans le sens du fil, fer, acier</td></tr>\n<tr><td><strong>Flexion</strong></td><td>Courbure : une face comprimée, l'autre tendue</td><td>Poutre, solive, panne, linteau</td><td>Bois, acier, béton armé</td></tr>\n<tr><td><strong>Cisaillement</strong></td><td>Glissement d'une partie sur l'autre</td><td>Appui de poutre, about d'assemblage</td><td>Dépend de la section et du matériau</td></tr>\n</tbody>\n</table>\n<p>Les maçonneries anciennes résistent bien en compression et très mal en traction : un mur en pierre et chaux supporte de lourdes charges verticales, mais il se fissure dès qu'on lui demande de « tirer ». Toute la conception des ouvrages anciens consiste à faire travailler la maçonnerie en compression et à confier les efforts de traction au bois ou au fer.</p>"
      },
      {
       "titre": "La descente de charges",
       "contenu": "<p>La <strong>descente de charges</strong> suit le chemin des efforts depuis la toiture jusqu'au sol : couverture → charpente → murs → fondations → sol. Chaque élément reçoit les charges de ceux qu'il porte et y ajoute son propre poids.</p>\n<p>Pour un mur, on raisonne souvent sur une bande de 1 m de longueur. La <strong>contrainte</strong> à la base est la force divisée par la surface d'appui : σ = F / S. On l'exprime en kPa ou en MPa (1 MPa = 1 N/mm<sup>2</sup> = 1 000 kPa).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrainte sous un mur en moellons calcaires. Données : épaisseur 0,60 m, hauteur 7,00 m, poids volumique de la maçonnerie γ = 22 kN/m<sup>3</sup> ; le mur reçoit en tête une charge de toiture et de planchers de 30 kN par mètre de longueur. 1. Poids propre pour 1 m de mur : 0,60 × 7,00 × 1,00 × 22 = 92,4 kN. 2. Charge totale à la base : 92,4 + 30 = 122,4 kN. 3. Surface d'appui pour 1 m : 0,60 × 1,00 = 0,60 m<sup>2</sup>. 4. Contrainte : σ = 122,4 / 0,60 = 204 kPa, soit 0,204 MPa. Cette valeur est faible devant la résistance d'une pierre, mais il faut la comparer à ce que peut supporter le <strong>sol</strong> sous le mur, souvent la vraie limite dans les bâtiments anciens aux fondations peu profondes.</div>\n<p>Le calcul montre aussi qu'une grande part de la charge vient du poids propre du mur. Toute surcharge nouvelle (plancher béton, chape lourde, réservoir) ou toute ouverture créée dans un mur doit être étudiée, car elle modifie la répartition des contraintes.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> ouvrir une baie dans un mur porteur ancien, même petite, interrompt la descente de charges. Il faut étayer, poser un linteau dimensionné et vérifier les appuis (trumeaux) de part et d'autre. Ce travail se fait sur étude, jamais à l'initiative de l'ouvrier.</div>"
      },
      {
       "titre": "Arcs et voûtes : la poussée",
       "contenu": "<p>Un <strong>arc</strong> franchit une ouverture en ne faisant travailler ses pierres (les <strong>voussoirs</strong>) qu'en compression. La pierre centrale est la <strong>clé</strong>, les premières pierres de départ sont les <strong>sommiers</strong> (ou coussinets), posés sur les <strong>piédroits</strong>. La face intérieure de l'arc est l'<strong>intrados</strong>, la face extérieure l'<strong>extrados</strong>.</p>\n<p>La charge verticale qui s'exerce sur un arc est transmise aux appuis par des efforts inclinés : elle a une composante verticale et une composante horizontale, la <strong>poussée</strong>, qui tend à écarter les appuis. Plus un arc est surbaissé (aplati), plus sa poussée est forte ; un arc brisé pousse moins qu'un plein cintre de même ouverture.</p>\n<p>La poussée doit être équilibrée par :</p>\n<ul>\n<li>la <strong>masse</strong> des appuis (murs épais, culées) qui rabat la résultante des efforts à l'intérieur de la maçonnerie ;</li>\n<li>des <strong>contreforts</strong> ou des arcs-boutants ;</li>\n<li>des <strong>tirants</strong> métalliques ou en bois qui relient les deux appuis et travaillent en traction ;</li>\n<li>la poussée d'un arc voisin (dans une suite d'arcades, les poussées s'équilibrent sauf aux extrémités).</li>\n</ul>\n<p>Une <strong>voûte</strong> est un arc prolongé dans l'espace : berceau, voûte d'arêtes, croisée d'ogives, coupole. Les mêmes principes s'appliquent.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un arc ou une voûte n'est stable que si ses appuis ne s'écartent pas. Une fissure à la clé et des piédroits qui s'ouvrent indiquent un défaut de reprise de la poussée ; on ne « rebouche » pas une telle fissure sans traiter la cause.</div>"
      },
      {
       "titre": "Chaînages, tirants et ancrages",
       "contenu": "<p>Les murs anciens sont liés entre eux et aux planchers par des dispositifs qui leur permettent de fonctionner ensemble, comme une boîte :</p>\n<ul>\n<li>les <strong>chaînes d'angle</strong> en pierre de taille ou en brique, où les éléments se croisent alternativement d'un mur à l'autre (en <strong>harpe</strong>) ;</li>\n<li>les <strong>chaînages</strong> horizontaux en bois noyés dans la maçonnerie (dans certaines régions) ou les <strong>tirants</strong> métalliques traversants ;</li>\n<li>les <strong>ancres</strong> : pièces de fer en X, en S ou en barre visibles en façade, qui bloquent l'extrémité d'un tirant fixé à une poutre ou à un plancher ; elles empêchent le mur de basculer vers l'extérieur.</li>\n</ul>\n<p>Les planchers en bois jouent aussi un rôle : leurs poutres, ancrées dans les murs opposés, les maintiennent à distance constante. Supprimer un plancher, couper des ancres ou désolidariser une charpente peut provoquer un déversement des murs.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une ancre en fer visible sur une façade n'est pas un décor : avant tout ravalement, on vérifie son état et sa liaison avec le tirant. En consolidation, on peut ajouter des tirants en acier inoxydable ou galvanisé, tendus avec mesure et terminés par des plaques ou des ancres, selon l'étude d'un ingénieur.</div>"
      },
      {
       "titre": "La charpente triangulée",
       "contenu": "<p>Une toiture à deux versants exerce sur ses appuis une poussée semblable à celle d'un arc : les <strong>arbalétriers</strong> (ou les chevrons) chargés tendent à s'ouvrir et à pousser les murs vers l'extérieur. La solution classique est la <strong>ferme</strong> triangulée : l'<strong>entrait</strong>, pièce horizontale reliant les pieds des arbalétriers, travaille en traction et annule la poussée. Le triangle est une forme indéformable : c'est pourquoi les charpentiers triangulent les structures.</p>\n<p>Dans une <strong>ferme latine</strong>, on trouve :</p>\n<ul>\n<li>deux arbalétriers, comprimés et fléchis par les pannes qu'ils portent ;</li>\n<li>un entrait, tendu (et parfois fléchi s'il porte un plancher) ;</li>\n<li>un <strong>poinçon</strong> vertical qui suspend l'entrait en son milieu et reçoit les arbalétriers au faîtage ;</li>\n<li>des <strong>contrefiches</strong> obliques qui soulagent les arbalétriers en reportant une partie de la charge sur le poinçon.</li>\n</ul>\n<p>Les <strong>pannes</strong> horizontales, posées sur les arbalétriers, portent les <strong>chevrons</strong> qui suivent la pente, et ceux-ci portent les liteaux ou voliges de la couverture.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer la charge reprise par une ferme. Toiture en tuiles plates : poids de la couverture avec liteaux et chevrons environ 0,80 kN/m<sup>2</sup> de rampant (valeur indicative à vérifier dans la documentation du fabricant). Les fermes sont espacées de 4,00 m ; chaque versant mesure 6,00 m de rampant. Surface de toiture portée par une ferme : 2 versants × 6,00 × 4,00 = 48 m<sup>2</sup>. Charge permanente reprise : 48 × 0,80 = 38,4 kN, auxquels s'ajoutent la charpente elle-même et la neige. Si l'on remplace des tuiles plates par une couverture plus lourde, cette charge augmente d'autant : la charpente doit être vérifiée.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> couper un entrait pour aménager des combles (pour passer debout) supprime le tirant qui retient les murs. Sans dispositif de remplacement calculé, les murs s'écartent et la charpente s'affaisse : c'est l'une des causes classiques de désordres graves sur les maisons anciennes réaménagées.</div>"
      },
      {
       "titre": "Planchers, poutres et linteaux",
       "contenu": "<p>Les <strong>planchers anciens</strong> sont le plus souvent constitués de <strong>solives</strong> en bois posées sur les murs ou sur des <strong>poutres</strong> maîtresses. Les solives portent un plancher en planches, ou un remplissage (hourdis de plâtre, terre et paille, carreaux de terre cuite sur lit de mortier). Au XIX<sup>e</sup> siècle apparaissent les planchers à <strong>fers à I</strong> (profilés métalliques) avec des <strong>voûtains</strong> de briques ou des entrevous en plâtre.</p>\n<p>Une solive travaille en <strong>flexion</strong> : sa face supérieure est comprimée, sa face inférieure tendue. Sa résistance et sa rigidité dépendent énormément de sa <strong>hauteur</strong> : à largeur égale, doubler la hauteur d'une poutre rend sa section environ quatre fois plus résistante et huit fois plus rigide. C'est pourquoi on pose toujours une solive « sur chant », la plus grande dimension à la verticale, et pourquoi une entaille en sous-face (passage de gaine, encoche) est si dangereuse : elle supprime les fibres les plus sollicitées.</p>\n<p>Les <strong>linteaux</strong> au-dessus des baies sont en pierre (monolithe ou clavé en plate-bande), en bois ou en brique. Un linteau en bois noyé dans la maçonnerie est souvent doublé d'un <strong>arc de décharge</strong> au-dessus de lui, qui reporte la charge du mur sur les côtés de la baie et soulage le linteau. Lorsqu'un linteau bois pourrit, l'arc de décharge peut éviter l'effondrement, mais la reprise doit être étayée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les abouts de poutres et de solives encastrés dans les murs sont des zones sensibles : humides si le mur est humide, invisibles et pourtant essentiels à la stabilité. Ils sont toujours vérifiés lors d'une réhabilitation.</div>"
      }
     ],
     "points_cles": [
      "Les maçonneries anciennes travaillent en compression ; la traction est confiée au bois ou au fer.",
      "La descente de charges suit le chemin couverture, charpente, murs, fondations, sol.",
      "Contrainte : σ = F / S ; 1 MPa = 1 N/mm² = 1 000 kPa.",
      "Un arc transmet une poussée horizontale qui tend à écarter ses appuis.",
      "La poussée est reprise par la masse des appuis, les contreforts, les tirants ou les arcs voisins.",
      "Chaînes d'angle, tirants, ancres et planchers lient les murs entre eux.",
      "Dans une ferme, l'entrait tendu annule la poussée des arbalétriers.",
      "Couper un entrait ou ouvrir un mur porteur exige une étude préalable."
     ],
     "lexique": [
      {
       "terme": "Sollicitation",
       "def": "Effet d'une action sur un élément : compression, traction, flexion, cisaillement."
      },
      {
       "terme": "Descente de charges",
       "def": "Cheminement et cumul des charges depuis la toiture jusqu'au sol."
      },
      {
       "terme": "Contrainte",
       "def": "Effort rapporté à la surface sur laquelle il s'exerce, en Pa, kPa ou MPa."
      },
      {
       "terme": "Voussoir",
       "def": "Pierre taillée en coin formant un arc ou une voûte."
      },
      {
       "terme": "Clé",
       "def": "Voussoir central qui ferme un arc."
      },
      {
       "terme": "Poussée",
       "def": "Composante horizontale de l'effort transmis par un arc, une voûte ou une charpente à ses appuis."
      },
      {
       "terme": "Contrefort",
       "def": "Massif de maçonnerie accolé à un mur pour résister à une poussée."
      },
      {
       "terme": "Tirant",
       "def": "Pièce travaillant en traction qui relie deux éléments pour les empêcher de s'écarter."
      },
      {
       "terme": "Ancre",
       "def": "Pièce métallique visible en façade qui arrête l'extrémité d'un tirant."
      },
      {
       "terme": "Entrait",
       "def": "Pièce horizontale d'une ferme qui relie les pieds des arbalétriers et travaille en traction."
      },
      {
       "terme": "Arbalétrier",
       "def": "Pièce inclinée d'une ferme qui porte les pannes."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Diagnostiquer et améliorer le bâti",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bipb-pathologies-eau",
     "titre": "Les pathologies liées à l'eau",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Identifier les différentes origines de l'humidité dans un mur ancien",
      "Reconnaître les signes des remontées capillaires, des infiltrations et de la condensation",
      "Expliquer le mécanisme de dégradation par les sels solubles et par le gel",
      "Décrire les altérations des pierres avec un vocabulaire précis",
      "Proposer des remèdes adaptés qui traitent la cause avant l'effet"
     ],
     "sections": [
      {
       "titre": "L'eau, premier ennemi du bâti",
       "contenu": "<p>La plupart des désordres du bâti ancien ont une origine liée à l'eau, directement ou indirectement : altération des pierres et mortiers, pourriture des bois, corrosion des fers, développement d'insectes et de champignons, perte de résistance des terres crues. On appelle <strong>pathologie</strong> l'étude des désordres d'un ouvrage, et par extension le désordre lui-même.</p>\n<p>On distingue soigneusement :</p>\n<ul>\n<li>le <strong>désordre</strong> ou <strong>symptôme</strong> : ce que l'on observe (tache, décollement, fissure, efflorescence) ;</li>\n<li>la <strong>cause</strong> : le phénomène qui produit le désordre (fuite de gouttière, remontée capillaire) ;</li>\n<li>le <strong>facteur aggravant</strong> : ce qui accélère le désordre (enduit étanche, absence de chauffage, gel).</li>\n</ul>\n<p>L'eau peut provenir de cinq sources principales :</p>\n<table>\n<thead><tr><th>Source</th><th>Mécanisme</th></tr></thead>\n<tbody>\n<tr><td>Remontées capillaires</td><td>L'eau du sol monte dans les pores du mur</td></tr>\n<tr><td>Infiltrations</td><td>L'eau de pluie pénètre par la couverture, les gouttières, les appuis, les fissures, la pluie battante</td></tr>\n<tr><td>Condensation</td><td>La vapeur d'eau de l'air intérieur se condense sur une paroi froide</td></tr>\n<tr><td>Fuites de réseaux</td><td>Canalisations d'eau ou d'évacuation défectueuses</td></tr>\n<tr><td>Eau de construction</td><td>Eau apportée par des travaux récents (mortiers, béton, nettoyage)</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Les remontées capillaires",
       "contenu": "<p>Les murs anciens reposent généralement sur des fondations sans <strong>coupure de capillarité</strong>. L'eau du sol monte dans le réseau poreux de la maçonnerie jusqu'à une hauteur où l'évaporation équilibre l'apport. Cette hauteur dépend de la porosité des matériaux, de l'humidité du sol et surtout des possibilités d'évaporation.</p>\n<p>Signes caractéristiques :</p>\n<ul>\n<li>une zone humide en pied de mur, à peu près horizontale, des deux côtés du mur ;</li>\n<li>une <strong>frange</strong> d'efflorescences salines en limite supérieure de la zone humide ;</li>\n<li>des peintures et enduits qui cloquent et se décollent en bas des murs ;</li>\n<li>une humidité présente toute l'année, peu dépendante de la pluie du jour.</li>\n</ul>\n<p>Le phénomène est souvent provoqué ou aggravé par des travaux récents : trottoir ou cour bétonnés contre la façade, rehaussement du sol extérieur, dallage intérieur sur film étanche, enduit ciment en soubassement. L'eau, ne pouvant plus s'évaporer en partie basse, monte plus haut.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un enduit ciment hydrofuge appliqué en bas de mur « pour bloquer l'humidité » fait monter la zone humide au-dessus de l'enduit. Le désordre semble disparaître pendant quelques mois, puis réapparaît plus haut, souvent aggravé.</div>"
      },
      {
       "titre": "Infiltrations et condensation",
       "contenu": "<p>Les <strong>infiltrations</strong> se manifestent par des taches localisées, souvent sous un point singulier : pied de descente d'eau pluviale, gouttière percée, solin décollé, appui de fenêtre sans goutte d'eau, couronnement de mur non protégé. Elles varient avec la pluie : la tache s'agrandit après une averse et sèche ensuite. Des coulures verticales, des mousses ou des algues en façade signalent un ruissellement anormal.</p>\n<p>La <strong>condensation</strong> apparaît quand de l'air chaud et humide rencontre une surface froide dont la température est inférieure au <strong>point de rosée</strong> de l'air. Elle se manifeste par des moisissures noires dans les angles, derrière les meubles, sur les ponts thermiques (linteaux, angles de murs), et surtout en hiver dans les pièces mal ventilées et peu chauffées. Elle s'est souvent aggravée après le remplacement de menuiseries anciennes, qui laissaient passer l'air, par des menuiseries étanches sans ventilation compensatoire.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> distinguer les trois origines par l'observation. 1. Où se trouve la tache ? En pied de mur sur une bande horizontale : plutôt capillarité. Localisée sous un point d'eau extérieur : plutôt infiltration. Dans les angles froids et derrière les meubles : plutôt condensation. 2. Quand apparaît-elle ? Toute l'année : capillarité. Après la pluie : infiltration. En hiver, avec buée sur les vitres : condensation. 3. Que trouve-t-on ? Des sels en bordure : capillarité ou infiltration. Des moisissures en surface sur un mur sec en profondeur : condensation. 4. Mesurer : un humidimètre ou une mesure par prélèvement confirme si l'humidité est en surface ou dans la masse.</div>"
      },
      {
       "titre": "Les sels solubles",
       "contenu": "<p>L'eau qui circule dans une maçonnerie transporte des <strong>sels solubles</strong> : nitrates (provenant des sols, des écuries, des fosses), sulfates (sols gypseux, ciment, pollution atmosphérique), chlorures (embruns marins, sels de déneigement). Lorsque l'eau s'évapore, les sels cristallisent :</p>\n<ul>\n<li>en surface, sous forme d'<strong>efflorescences</strong> blanches, poudreuses ou en filaments, peu dangereuses en elles-mêmes ;</li>\n<li>juste sous la surface, sous forme de <strong>subflorescences</strong> : les cristaux qui grossissent dans les pores exercent des pressions qui font éclater le matériau en poudre ou en écailles.</li>\n</ul>\n<p>Le <strong>salpêtre</strong>, nom traditionnel des nitrates qui apparaissent dans les murs d'étables ou de caves, est un exemple courant. Certains sels sont <strong>hygroscopiques</strong> : ils absorbent l'humidité de l'air, si bien qu'un mur chargé en sels reste humide même lorsqu'on a supprimé la source d'eau.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un mur fortement salin, on applique parfois des <strong>compresses</strong> de dessalement (pâte d'argile, de cellulose ou de mortier sacrificiel) qui absorbent l'eau et les sels du mur puis sont retirées. On peut aussi poser un <strong>enduit de sacrifice</strong> très poreux, destiné à accueillir la cristallisation des sels à la place des pierres et à être renouvelé. Ces techniques sont prescrites après analyse des sels.</div>"
      },
      {
       "titre": "Le gel et les altérations de la pierre",
       "contenu": "<p>Dans une pierre humide, le <strong>gel</strong> transforme l'eau des pores en glace plus volumineuse. Les cycles répétés de gel et de dégel provoquent fissures et éclatements, surtout sur les parties exposées et gorgées d'eau : soubassements éclaboussés, appuis, corniches, couronnements.</p>\n<p>Les altérations des pierres sont décrites avec un vocabulaire précis, qui permet de faire des relevés comparables :</p>\n<table>\n<thead><tr><th>Altération</th><th>Description</th><th>Causes fréquentes</th></tr></thead>\n<tbody>\n<tr><td><strong>Desquamation</strong></td><td>Détachement de plaques minces parallèles au parement</td><td>Pose en délit, gel, sels</td></tr>\n<tr><td><strong>Alvéolisation</strong></td><td>Formation de cavités juxtaposées</td><td>Sels, vent, embruns</td></tr>\n<tr><td><strong>Pulvérulence</strong> (désagrégation sableuse)</td><td>La pierre se réduit en poudre ou en grains</td><td>Sels, humidité permanente</td></tr>\n<tr><td><strong>Croûte noire</strong></td><td>Dépôt noir et dur sur les parties abritées de la pluie</td><td>Pollution atmosphérique (sulfates)</td></tr>\n<tr><td><strong>Épaufrure</strong></td><td>Éclat sur une arête</td><td>Choc, gel, rouille d'un fer voisin</td></tr>\n<tr><td><strong>Fissure, éclatement</strong></td><td>Rupture de la pierre</td><td>Gel, oxydation d'un fer, surcharge</td></tr>\n<tr><td><strong>Colonisation biologique</strong></td><td>Mousses, lichens, algues, végétaux</td><td>Humidité persistante, ruissellement</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Traiter la cause avant l'effet",
       "contenu": "<p>Le traitement d'un désordre lié à l'eau suit toujours le même ordre :</p>\n<ol>\n<li><strong>Supprimer ou réduire les apports</strong> : réparer couverture, gouttières et descentes, raccorder les eaux pluviales à un réseau ou les éloigner du pied de mur, rétablir les pentes du sol extérieur vers l'extérieur, protéger les couronnements et appuis (bavettes, chaperons), réparer les fuites.</li>\n<li><strong>Rétablir l'évaporation</strong> : retirer les enduits ciment et peintures étanches, remplacer un trottoir béton par un revêtement drainant ou créer un <strong>drain</strong> périphérique ou un caniveau ventilé, ventiler les pièces et les vides sanitaires.</li>\n<li><strong>Laisser sécher</strong>, puis traiter les effets : remplacement ou consolidation des pierres, nouveaux joints et enduits à la chaux.</li>\n</ol>\n<p>Des procédés spécifiques existent pour les remontées capillaires (injections de produits formant une barrière, électro-osmose, coupure mécanique). Leur efficacité varie selon les maçonneries ; ils ne sont envisagés qu'après diagnostic et selon la prescription du maître d'œuvre.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger une proposition de remèdes. Situation : salpêtre et enduit décollé jusqu'à 1,20 m sur la face intérieure d'une façade en moellons, trottoir en béton contre la façade, enduit extérieur ciment en soubassement. Remèdes proposés dans l'ordre : 1. Démolir le trottoir béton et le remplacer par une bande de graviers drainante de 50 cm, avec pente vers l'extérieur. 2. Décroûter l'enduit ciment extérieur et l'enduit intérieur dégradé. 3. Laisser sécher le mur plusieurs mois en ventilant. 4. Dessaler si nécessaire (compresses ou enduit de sacrifice). 5. Enduire à la chaux des deux côtés.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur le bâti ancien, on ne cherche pas un mur parfaitement sec, mais un mur dont l'humidité est stable et compatible avec la durabilité de ses matériaux.</div>"
      },
      {
       "titre": "Les eaux pluviales et les abords",
       "contenu": "<p>Une grande partie des désordres liés à l'eau trouve son origine dans la <strong>gestion des eaux pluviales</strong>. Une toiture de 100 m<sup>2</sup> reçoit, pour une pluie de 10 mm, environ 1 m<sup>3</sup> d'eau, soit 1 000 litres qui doivent être collectés et éloignés du bâtiment. Une gouttière bouchée ou une descente déboîtée déverse alors cette eau directement sur la façade ou au pied du mur.</p>\n<p>Les points à contrôler systématiquement sont :</p>\n<ul>\n<li>les <strong>gouttières et chéneaux</strong> : pente, propreté, étanchéité des jonctions, état des crochets ;</li>\n<li>les <strong>descentes</strong> : continuité, raccordement en pied (regard, réseau, ou rejet à distance du mur) ;</li>\n<li>les <strong>saillies</strong> de façade (corniches, bandeaux, appuis) : présence d'une pente et d'un <strong>larmier</strong> ou d'une goutte d'eau qui empêche l'eau de revenir sous l'élément ;</li>\n<li>le <strong>sol au pied du mur</strong> : pente vers l'extérieur, nature (perméable ou non), absence de rejaillissement de la pluie sur le soubassement ;</li>\n<li>la <strong>végétation</strong> : lierre et plantes grimpantes qui retiennent l'humidité et dont les racines désorganisent les joints.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un volume d'eau à évacuer. Volume (en litres) = surface de toiture projetée au sol (en m<sup>2</sup>) × hauteur de pluie (en mm). Exemple : 85 m<sup>2</sup> × 25 mm = 2 125 litres pour un orage de 25 mm, soit plus de 2 m<sup>3</sup> concentrés sur une ou deux descentes. On comprend pourquoi une seule descente défectueuse suffit à détremper un angle de maison.</div>"
      }
     ],
     "points_cles": [
      "On distingue le désordre observé, sa cause et les facteurs aggravants.",
      "Cinq sources d'eau : capillarité, infiltration, condensation, fuites, eau de construction.",
      "Les remontées capillaires forment une zone humide horizontale en pied de mur avec une frange de sels.",
      "Les infiltrations varient avec la pluie ; la condensation se concentre sur les parois froides en hiver.",
      "Les sels qui cristallisent sous la surface font éclater les pierres ; certains sels absorbent l'humidité de l'air.",
      "Desquamation, alvéolisation, pulvérulence, croûte noire et épaufrure décrivent les altérations des pierres.",
      "On réduit d'abord les apports, puis on rétablit l'évaporation, enfin on répare les effets.",
      "Un enduit étanche en pied de mur fait monter l'humidité plus haut."
     ],
     "lexique": [
      {
       "terme": "Pathologie",
       "def": "Étude des désordres d'un ouvrage ; par extension, le désordre lui-même."
      },
      {
       "terme": "Remontée capillaire",
       "def": "Ascension de l'eau du sol dans les pores d'un mur."
      },
      {
       "terme": "Point de rosée",
       "def": "Température à laquelle la vapeur d'eau contenue dans l'air commence à se condenser."
      },
      {
       "terme": "Efflorescence",
       "def": "Dépôt de sels cristallisés à la surface d'un matériau."
      },
      {
       "terme": "Subflorescence",
       "def": "Cristallisation de sels juste sous la surface, qui fait éclater le matériau."
      },
      {
       "terme": "Salpêtre",
       "def": "Nom courant des nitrates qui cristallisent sur les murs humides."
      },
      {
       "terme": "Hygroscopique",
       "def": "Qui absorbe l'humidité de l'air."
      },
      {
       "terme": "Desquamation",
       "def": "Détachement de plaques minces parallèles à la surface d'une pierre."
      },
      {
       "terme": "Alvéolisation",
       "def": "Formation de petites cavités juxtaposées à la surface d'une pierre."
      },
      {
       "terme": "Enduit de sacrifice",
       "def": "Enduit poreux destiné à recevoir la cristallisation des sels, puis à être remplacé."
      },
      {
       "terme": "Drain",
       "def": "Dispositif enterré qui collecte et évacue l'eau du sol au voisinage des fondations."
      }
     ]
    },
    {
     "id": "bipb-pathologies-structure-bois",
     "titre": "Fissures, déformations et attaques biologiques du bois",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Classer une fissure selon son ouverture, sa forme et son activité",
      "Relier la forme d'une fissure à son mécanisme probable (tassement, poussée, dilatation)",
      "Mettre en place et lire un témoin ou une jauge de fissure",
      "Reconnaître les principaux insectes xylophages et leurs indices",
      "Identifier les champignons lignivores, dont la mérule, et connaître les obligations associées"
     ],
     "sections": [
      {
       "titre": "Décrire une fissure",
       "contenu": "<p>Une <strong>fissure</strong> est une rupture d'un matériau ou d'un ouvrage. Elle traduit des efforts que l'ouvrage n'a pas pu supporter ou des mouvements qu'il n'a pas pu absorber. Pour la décrire, on relève systématiquement :</p>\n<ul>\n<li>sa <strong>position</strong> (mur, façade, niveau, repérage sur le plan ou l'élévation) ;</li>\n<li>sa <strong>direction</strong> (verticale, horizontale, oblique, en escalier dans les joints) et son tracé ;</li>\n<li>sa <strong>longueur</strong> et son <strong>ouverture</strong>, mesurée avec un fissuromètre (réglette graduée en dixièmes de millimètre) ;</li>\n<li>sa <strong>traversance</strong> : visible d'un seul côté ou des deux côtés du mur ;</li>\n<li>le <strong>décalage</strong> éventuel des deux lèvres (dans le plan ou hors du plan du mur) ;</li>\n<li>son <strong>ancienneté</strong> : lèvres propres et claires (récente), ou encrassées, peintes, colonisées (ancienne).</li>\n</ul>\n<p>On utilise couramment le classement suivant selon l'ouverture :</p>\n<table>\n<thead><tr><th>Désignation</th><th>Ouverture indicative</th></tr></thead>\n<tbody>\n<tr><td>Microfissure (faïençage pour un réseau en surface d'enduit)</td><td>inférieure à 0,2 mm</td></tr>\n<tr><td>Fissure</td><td>de 0,2 à 2 mm</td></tr>\n<tr><td>Lézarde</td><td>supérieure à 2 mm</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'ouverture ne dit pas tout. La question décisive est de savoir si la fissure est <strong>stabilisée</strong> (mouvement ancien, terminé) ou <strong>active</strong> (mouvement en cours). Une fissure fine mais active peut être plus grave qu'une lézarde ancienne stabilisée.</div>"
      },
      {
       "titre": "Lire la forme des fissures",
       "contenu": "<p>La forme d'une fissure renseigne sur le mouvement qui l'a créée. Une fissure s'ouvre perpendiculairement à la direction de la traction qui l'a provoquée.</p>\n<table>\n<thead><tr><th>Forme observée</th><th>Mécanisme probable</th></tr></thead>\n<tbody>\n<tr><td>Fissures obliques en escalier dans les joints, plus ouvertes en haut, partant d'un angle de baie vers une extrémité du mur</td><td><strong>Tassement différentiel</strong> : une partie des fondations s'enfonce plus que l'autre (sol hétérogène, fuite d'eau, arbre proche, sécheresse sur sol argileux)</td></tr>\n<tr><td>Fissure verticale à la jonction de deux murs, plus ouverte en haut, avec mur qui penche vers l'extérieur</td><td><strong>Déversement</strong> d'un mur mal lié ou poussé par la charpente ou une voûte</td></tr>\n<tr><td>Fissure à la clé d'un arc ou d'une voûte, avec écartement des appuis</td><td>Défaut de reprise de la <strong>poussée</strong></td></tr>\n<tr><td>Fissure horizontale au niveau d'un plancher ou sous une corniche</td><td>Poussée ou dilatation d'un plancher, rotation d'un élément</td></tr>\n<tr><td>Fissures fines verticales régulières sur un long mur ou un enduit</td><td><strong>Retrait</strong> ou dilatation thermique</td></tr>\n<tr><td>Éclatement localisé autour d'un élément métallique</td><td>Gonflement de la <strong>rouille</strong></td></tr>\n</tbody>\n</table>\n<p>Ces correspondances sont des hypothèses : le diagnostic d'un désordre structurel relève d'un ingénieur ou d'un bureau d'études, que l'entreprise alerte dès qu'elle constate une fissure traversante, évolutive ou accompagnée de déformations.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une fissure active sur un mur porteur, un linteau qui fléchit nettement ou un mur qui bombe sont des signes de danger. On ne monte pas d'échafaudage contre un mur instable et on ne retire pas d'éléments sans avis : on informe immédiatement le chef de chantier, qui peut faire étayer et baliser la zone.</div>"
      },
      {
       "titre": "Surveiller l'évolution : témoins et jauges",
       "contenu": "<p>Pour savoir si une fissure est active, on la surveille dans le temps.</p>\n<ul>\n<li>Le <strong>témoin en plâtre</strong>, procédé traditionnel, est une galette de plâtre appliquée à cheval sur la fissure, datée. S'il se fend, la fissure a bougé. Il ne donne pas de valeur chiffrée et réagit aussi aux variations d'humidité.</li>\n<li>La <strong>jauge de fissure</strong> (fissuromètre à lecture directe) est constituée de deux plaques fixées de part et d'autre de la fissure, l'une portant une grille graduée, l'autre un réticule. On lit le déplacement horizontal et vertical au dixième de millimètre près.</li>\n<li>Les <strong>capteurs électroniques</strong> enregistrent l'ouverture en continu, avec la température, pour distinguer mouvements saisonniers et évolution.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une série de lectures de jauge. Relevés de l'ouverture : 1<sup>er</sup> mars 0,0 mm (pose) ; 1<sup>er</sup> mai 0,1 mm ; 1<sup>er</sup> juillet 0,3 mm ; 1<sup>er</sup> septembre 0,6 mm ; 1<sup>er</sup> novembre 0,6 mm. 1. Calculer l'évolution totale : 0,6 mm en 8 mois. 2. Observer le rythme : ouverture en été, stabilisation à l'automne. 3. Interpréter avec prudence : une ouverture estivale suivie d'une stabilisation peut correspondre à un retrait du sol argileux en période sèche ; il faut poursuivre les mesures sur au moins un cycle annuel complet pour vérifier si la fissure se referme en hiver ou si elle progresse d'année en année. 4. Transmettre les relevés, datés et photographiés, au maître d'œuvre.</div>"
      },
      {
       "titre": "Les insectes xylophages",
       "contenu": "<p>Les insectes <strong>xylophages</strong> se nourrissent du bois. Leurs larves creusent des galeries pendant plusieurs années ; les adultes sortent par des <strong>trous d'envol</strong> dont la forme et la taille aident à les identifier.</p>\n<table>\n<thead><tr><th>Insecte</th><th>Bois attaqués</th><th>Indices</th></tr></thead>\n<tbody>\n<tr><td><strong>Capricorne des maisons</strong></td><td>Aubier des résineux (sapin, épicéa, pin)</td><td>Trous de sortie ovales de quelques millimètres ; galeries remplies de vermoulure tassée ; surface du bois parfois intacte en pellicule</td></tr>\n<tr><td><strong>Petite vrillette</strong></td><td>Feuillus et résineux, surtout aubier, bois secs (meubles, planchers, charpentes)</td><td>Petits trous ronds d'environ 1 à 2 mm, vermoulure en petites boulettes</td></tr>\n<tr><td><strong>Grosse vrillette</strong></td><td>Chêne et feuillus déjà dégradés par un champignon et humides</td><td>Trous ronds d'environ 3 mm, souvent dans les zones humides (pieds de fermes, abouts de poutres)</td></tr>\n<tr><td><strong>Lyctus</strong></td><td>Aubier de feuillus riches en amidon (chêne, châtaignier)</td><td>Trous ronds très fins, vermoulure très fine comme de la farine</td></tr>\n<tr><td><strong>Termites</strong> (souterrains)</td><td>Tous bois, et matériaux cellulosiques</td><td>Bois mangé de l'intérieur en feuillets, cordonnets de terre sur les murs, absence de trous de sortie</td></tr>\n</tbody>\n</table>\n<p>Une attaque est <strong>active</strong> si l'on trouve de la vermoulure fraîche (claire, qui tombe en petits tas), des trous de sortie aux bords nets et clairs, ou des larves vivantes au sondage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le sondage d'une pièce de bois se fait au poinçon ou au ciseau : on enfonce l'outil dans le bois pour mesurer l'épaisseur dégradée. On en déduit la <strong>section résiduelle saine</strong>, seule à pouvoir encore porter des charges. Les termites font l'objet d'arrêtés préfectoraux qui délimitent des zones infestées, avec des obligations de déclaration en mairie et de diagnostic lors des ventes.</div>"
      },
      {
       "titre": "Les champignons lignivores",
       "contenu": "<p>Les <strong>champignons lignivores</strong> décomposent le bois lorsqu'il reste humide durablement (au-delà d'environ 20 % d'humidité). On distingue :</p>\n<ul>\n<li>les <strong>pourritures cubiques</strong> (ou brunes) : le bois brunit, se fissure en petits cubes et devient friable ; elles détruisent la cellulose ;</li>\n<li>les <strong>pourritures fibreuses</strong> (ou blanches) : le bois blanchit et devient filandreux ;</li>\n<li>la <strong>pourriture molle</strong>, dans les bois très humides en surface.</li>\n</ul>\n<p>La <strong>mérule</strong> (<em>Serpula lacrymans</em>) est le champignon le plus redouté du bâtiment. Elle provoque une pourriture cubique et se développe dans les zones humides, confinées, peu ventilées et sombres, à température modérée. Elle forme un feutrage blanc cotonneux, des cordons qui peuvent traverser les maçonneries pour atteindre d'autres bois, et des fructifications brun-rouille qui libèrent une poussière de spores rousse. Une odeur de champignon dans une cave ou derrière un lambris doit alerter.</p>\n<p>La loi ALUR de 2014 a instauré des obligations : l'occupant d'un immeuble qui a connaissance de la présence de mérule doit la déclarer en mairie, des zones de présence d'un risque de mérule peuvent être délimitées par arrêté préfectoral, et l'information de l'acquéreur est prévue lors des ventes dans ces zones.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les gravats, bois et plâtres contaminés par la mérule ne doivent pas être stockés dans le bâtiment ni réemployés : ils sont évacués rapidement, en limitant la dispersion des spores. Le traitement associe toujours la suppression de la source d'humidité, l'élimination des bois atteints avec une marge de sécurité, le traitement des maçonneries traversées et la ventilation.</div>"
      },
      {
       "titre": "De l'observation à la décision",
       "contenu": "<p>Face à une pièce de bois attaquée, l'entreprise ne décide pas seule, mais elle fournit les éléments de décision au maître d'œuvre :</p>\n<ol>\n<li>identifier l'agent (insecte, champignon) et son activité ;</li>\n<li>mesurer la section résiduelle saine et la comparer à la section d'origine ;</li>\n<li>identifier la cause d'humidité éventuelle ;</li>\n<li>proposer une solution : traitement curatif seul si la section résiduelle suffit, consolidation (greffe, renfort, moisage) si elle est un peu affaiblie, remplacement si elle est insuffisante.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> évaluer une perte de section. Une solive de chêne de 15 × 20 cm (largeur × hauteur) est attaquée par la petite vrillette sur 2 cm d'épaisseur sur ses deux faces latérales et sa face inférieure. Section saine restante : largeur 15 − 2 × 2 = 11 cm ; hauteur 20 − 2 = 18 cm. Aire saine : 11 × 18 = 198 cm<sup>2</sup>, contre 15 × 20 = 300 cm<sup>2</sup> à l'origine, soit 66 % de la section. En flexion, la perte de résistance est plus forte que la perte d'aire, car la hauteur et les fibres extrêmes jouent un rôle majeur : la vérification revient à un calcul d'ingénieur ou à une règle fixée par le maître d'œuvre.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> insectes et champignons sont presque toujours la conséquence d'un problème d'humidité ou d'aubier non protégé. Traiter le bois sans supprimer la cause conduit à une récidive.</div>"
      }
     ],
     "points_cles": [
      "On décrit une fissure par sa position, sa direction, sa longueur, son ouverture, sa traversance et son ancienneté.",
      "Microfissure : moins de 0,2 mm ; fissure : de 0,2 à 2 mm ; lézarde : plus de 2 mm (classement indicatif).",
      "La forme d'une fissure oriente vers un mécanisme : tassement, déversement, poussée, retrait, rouille.",
      "Le témoin plâtre et la jauge de fissure permettent de savoir si une fissure est active.",
      "Capricorne, vrillettes, lyctus et termites se distinguent par les bois attaqués et leurs indices.",
      "La mérule provoque une pourriture cubique ; sa présence se déclare en mairie (loi ALUR).",
      "On évalue la section résiduelle saine par sondage avant de décider traitement, consolidation ou remplacement.",
      "Toute fissure active ou déformation importante est signalée immédiatement : danger possible."
     ],
     "lexique": [
      {
       "terme": "Lézarde",
       "def": "Fissure large, d'ouverture supérieure à environ 2 mm."
      },
      {
       "terme": "Fissure active",
       "def": "Fissure dont l'ouverture évolue encore dans le temps."
      },
      {
       "terme": "Tassement différentiel",
       "def": "Enfoncement inégal des fondations d'un même ouvrage."
      },
      {
       "terme": "Déversement",
       "def": "Basculement progressif d'un mur hors de son aplomb."
      },
      {
       "terme": "Jauge de fissure",
       "def": "Dispositif à deux plaques graduées mesurant le déplacement des lèvres d'une fissure."
      },
      {
       "terme": "Xylophage",
       "def": "Se dit d'un insecte qui se nourrit de bois."
      },
      {
       "terme": "Vermoulure",
       "def": "Poudre ou boulettes de bois rejetées par les larves d'insectes xylophages."
      },
      {
       "terme": "Trou d'envol",
       "def": "Orifice de sortie de l'insecte adulte à la surface du bois."
      },
      {
       "terme": "Champignon lignivore",
       "def": "Champignon qui décompose le bois humide."
      },
      {
       "terme": "Mérule",
       "def": "Champignon lignivore très destructeur, provoquant une pourriture cubique et capable de traverser les maçonneries."
      },
      {
       "terme": "Section résiduelle",
       "def": "Partie saine d'une pièce de bois restant après une attaque, seule capable de porter."
      }
     ]
    },
    {
     "id": "bipb-demarche-diagnostic",
     "titre": "Conduire une analyse diagnostique",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Organiser une analyse diagnostique en étapes successives",
      "Préparer une visite et réunir la documentation existante",
      "Choisir des investigations adaptées : sondages, mesures, prélèvements",
      "Formuler et vérifier des hypothèses sur les causes des désordres",
      "Rédiger des conclusions et des préconisations hiérarchisées"
     ],
     "sections": [
      {
       "titre": "Le diagnostic, une démarche d'enquête",
       "contenu": "<p>L'<strong>analyse diagnostique</strong> consiste à établir l'état d'un ouvrage, à identifier ses désordres, à en rechercher les causes et à proposer des solutions. Elle précède toute intervention importante. C'est une démarche d'enquête : on observe des indices, on formule des hypothèses, on les vérifie, puis on conclut.</p>\n<p>Elle comporte deux volets complémentaires :</p>\n<ul>\n<li>l'<strong>analyse historique et architecturale</strong> : comprendre comment l'ouvrage a été conçu et transformé (époque, phases, modes constructifs) ;</li>\n<li>l'<strong>analyse sanitaire et technique</strong> : établir l'état de conservation de chaque partie et les causes des altérations.</li>\n</ul>\n<p>Sur un monument historique, le diagnostic est réalisé par l'architecte maître d'œuvre avec des spécialistes. Sur le bâti courant, l'entreprise réalise souvent elle-même un diagnostic avant de remettre un devis. Dans tous les cas, le professionnel du chantier y participe : il observe de près, fait les sondages, découvre l'ouvrage au fur et à mesure des déposes et signale ce qui contredit le diagnostic initial.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un diagnostic se déroule en six étapes : <em>préparer</em>, <em>observer et relever</em>, <em>investiguer</em>, <em>analyser (hypothèses et vérifications)</em>, <em>conclure</em>, <em>préconiser</em>.</div>"
      },
      {
       "titre": "Préparer la visite",
       "contenu": "<p>Avant de se rendre sur place, on rassemble la <strong>documentation existante</strong> : plans anciens, photos, cadastre ancien (napoléonien) et actuel, archives du propriétaire (factures de travaux, diagnostics antérieurs, rapports d'expertise), éventuelle protection au titre des monuments historiques ou situation en espace protégé, diagnostics réglementaires (amiante, plomb, termites).</p>\n<p>On prépare aussi le matériel :</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Matériel</th></tr></thead>\n<tbody>\n<tr><td>Relevé</td><td>Mètre, télémètre laser, niveau, fil à plomb, carnet de croquis, plans à imprimer, appareil photo</td></tr>\n<tr><td>Observation</td><td>Lampe puissante, jumelles (pour les parties hautes), loupe, miroir</td></tr>\n<tr><td>Sondage</td><td>Poinçon, marteau, ciseau, petite massette, brosse</td></tr>\n<tr><td>Mesure</td><td>Humidimètre, thermomètre, hygromètre, fissuromètre</td></tr>\n<tr><td>Sécurité</td><td>EPI (casque, chaussures, gants, masque de protection respiratoire adapté), moyen d'accès sûr aux combles et parties hautes</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les combles, caves et bâtiments abandonnés présentent des dangers : planchers pourris, trappes, absence d'éclairage, poussières et déjections animales, présence possible d'amiante ou de plomb. On ne visite jamais seul un bâtiment dégradé, on vérifie chaque appui avant d'y poser le pied et on porte un masque adapté dans les espaces poussiéreux.</div>"
      },
      {
       "titre": "Observer et relever les désordres",
       "contenu": "<p>Sur place, on procède méthodiquement, partie par partie, et on relève tous les désordres sur des plans, coupes et élévations : c'est la <strong>cartographie des désordres</strong>. Chaque type de désordre reçoit un code (couleur, hachure ou symbole) défini dans une légende : zones humides, efflorescences, fissures avec leur ouverture, pierres altérées, bois attaqués, éléments manquants.</p>\n<p>Chaque désordre important fait l'objet d'une <strong>fiche</strong> : repère sur le plan, photo avec un objet de dimension connue ou une mire, description avec le vocabulaire normalisé, dimensions, hypothèses de cause. Les photos sont numérotées et localisées (flèche sur le plan indiquant le point de vue).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les tablettes et logiciels de relevé permettent de placer directement photos et annotations sur le plan. Ils facilitent la production du rapport, mais imposent la même discipline : une légende unique, un vocabulaire constant et un repérage précis de chaque observation.</div>\n<p>On observe aussi l'<strong>environnement</strong> : orientation et exposition aux vents de pluie, végétation (arbres proches dont les racines assèchent le sol argileux, lierre qui pénètre les joints), circulation de l'eau autour du bâtiment, constructions voisines récentes, travaux de voirie.</p>"
      },
      {
       "titre": "Investiguer : sondages, mesures et analyses",
       "contenu": "<p>L'observation visuelle ne suffit pas toujours. On complète par des <strong>investigations</strong> choisies en fonction des questions posées :</p>\n<table>\n<thead><tr><th>Investigation</th><th>Question à laquelle elle répond</th></tr></thead>\n<tbody>\n<tr><td>Sondage d'enduit (petite fenêtre ouverte)</td><td>Quel est le support ? Y a-t-il des enduits anciens, des décors, un pan de bois caché ?</td></tr>\n<tr><td>Sondage au poinçon d'une pièce de bois</td><td>Quelle épaisseur est dégradée ? Quelle section résiduelle ?</td></tr>\n<tr><td>Fouille en pied de mur</td><td>Comment sont faites les fondations ? À quelle profondeur ? Quel sol ?</td></tr>\n<tr><td>Mesure d'humidité à plusieurs hauteurs</td><td>Profil d'humidité : capillarité (décroissante avec la hauteur) ou infiltration (localisée) ?</td></tr>\n<tr><td>Prélèvement de mortier ou d'enduit pour analyse</td><td>Quel liant, quel sable, quelles proportions, quelle couleur reproduire ?</td></tr>\n<tr><td>Prélèvement de sels</td><td>Quels sels sont présents, en quelle quantité ?</td></tr>\n<tr><td>Endoscopie (caméra introduite dans un petit trou)</td><td>Que contient l'intérieur d'un mur, d'un plancher, d'un doublage ?</td></tr>\n<tr><td>Pose de jauges de fissures</td><td>Le mouvement est-il actif ?</td></tr>\n</tbody>\n</table>\n<p>Les investigations sont <strong>non destructives</strong> (mesures, endoscopie par trou de faible diamètre) ou <strong>destructives</strong> (sondage, prélèvement). Ces dernières se font avec l'accord du maître d'ouvrage, en un minimum de points, à des endroits discrets, et on rebouche avec un matériau compatible. Sur un monument historique, elles sont soumises à l'accord du maître d'œuvre et de l'administration.</p>"
      },
      {
       "titre": "Analyser : des hypothèses à la cause",
       "contenu": "<p>Pour chaque désordre, on formule une ou plusieurs <strong>hypothèses</strong> de cause, puis on cherche les indices qui les confirment ou les écartent. On recherche surtout la <strong>cause première</strong> : un désordre en entraîne souvent d'autres en cascade.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> remonter une chaîne de causes. Constat : une sablière de pan de bois est pourrie au rez-de-chaussée, l'enduit au-dessus est fissuré et le plancher de l'étage s'est affaissé côté façade. Hypothèse 1 : remontées capillaires dans le soubassement. Vérification : le soubassement est sec à 30 cm de hauteur, hypothèse peu probable. Hypothèse 2 : infiltration par le haut. Vérification : la descente d'eau pluviale est déboîtée juste au-dessus et le mur est taché de coulures ; humidité du bois de la sablière : 35 %. Conclusion : la descente déboîtée (cause première) a humidifié la sablière, qui a pourri (désordre secondaire) ; en perdant sa section, elle s'est écrasée, entraînant l'affaissement du plancher et la fissuration de l'enduit (désordres tertiaires). Remède : d'abord la descente, puis la sablière, puis le plancher et l'enduit.</div>\n<p>On évalue enfin la <strong>gravité</strong> et l'<strong>urgence</strong> de chaque désordre : risque pour la sécurité des personnes, risque d'aggravation rapide, simple désordre esthétique. Ce classement permet de hiérarchiser les travaux, surtout quand le budget du maître d'ouvrage est limité.</p>\n<table>\n<thead><tr><th>Niveau d'urgence</th><th>Exemple</th><th>Action</th></tr></thead>\n<tbody>\n<tr><td>Immédiate</td><td>Corniche fissurée au-dessus de la voie publique, charpente rompue</td><td>Mesures conservatoires sans attendre (purge, étaiement, filet, balisage)</td></tr>\n<tr><td>À court terme</td><td>Couverture qui fuit, gouttière percée</td><td>Travaux dans les mois qui viennent</td></tr>\n<tr><td>À moyen terme</td><td>Joints dégradés, enduit fatigué</td><td>Programmation dans un plan d'entretien</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Conclure et préconiser",
       "contenu": "<p>Le diagnostic se termine par des <strong>conclusions</strong> (état général, causes identifiées, gravité) et des <strong>préconisations</strong> : travaux recommandés, ordonnés, avec leurs principes techniques et souvent une première estimation du coût. Une bonne préconisation :</p>\n<ul>\n<li>traite la cause avant l'effet ;</li>\n<li>respecte les principes d'intervention minimale, de compatibilité et de réversibilité ;</li>\n<li>précise les matériaux (nature, qualité) et les techniques ;</li>\n<li>indique les mesures conservatoires urgentes ;</li>\n<li>signale les incertitudes et les investigations complémentaires à mener (par exemple, ouverture d'un plafond pour vérifier les abouts de poutres).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un diagnostic n'est jamais définitif. Au cours des déposes, on découvre souvent des situations imprévues (poutre pourrie dans un mur, linteau absent, fondations insuffisantes). Le professionnel doit alors arrêter la tâche concernée, photographier, mesurer et informer le chef de chantier : les travaux peuvent nécessiter une adaptation validée par le maître d'œuvre, qui donnera lieu à un ordre de service et parfois à un avenant.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un diagnostic utile est précis (localisé, mesuré, photographié), argumenté (des indices aux causes), hiérarchisé (urgence, gravité) et honnête sur ses incertitudes.</div>"
      },
      {
       "titre": "Le rôle du professionnel de chantier",
       "contenu": "<p>Le titulaire du bac pro intervient rarement seul sur un diagnostic complet, mais il y contribue à toutes les étapes du chantier. Ses responsabilités sont concrètes :</p>\n<ul>\n<li><strong>observer de près</strong> : sur l'échafaudage, il voit ce que l'architecte n'a vu qu'aux jumelles ; il signale les pierres plus altérées que prévu, les bois attaqués, les fissures cachées sous un enduit ;</li>\n<li><strong>réaliser les sondages</strong> demandés avec soin et en limitant les dégâts ;</li>\n<li><strong>mesurer</strong> les quantités réelles : surface de pierres à remplacer, longueur de bois à greffer, nombre de tuiles à changer ;</li>\n<li><strong>documenter</strong> : photos datées, repérées et accompagnées d'une mesure ;</li>\n<li><strong>alerter</strong> sans attendre en cas de danger ou d'écart important avec le dossier.</li>\n</ul>\n<p>Il participe aussi au <strong>diagnostic de proximité</strong> lors de petites interventions d'entretien chez des particuliers, où l'entreprise doit proposer elle-même une solution. Dans ce cas, il applique la même démarche, à une échelle réduite, et formule ses préconisations dans un langage compréhensible par un client non spécialiste, en expliquant pourquoi une solution moins chère (enduit ciment, peinture étanche) serait une mauvaise solution pour ce bâtiment.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une fiche de constat bien faite tient sur une page : un croquis de situation, deux ou trois photos (vue d'ensemble, détail avec un mètre posé pour l'échelle), une description en vocabulaire technique, les mesures, l'hypothèse de cause et la question posée au responsable.</div>"
      }
     ],
     "points_cles": [
      "Le diagnostic est une enquête : observer, formuler des hypothèses, vérifier, conclure.",
      "Il associe analyse historique et architecturale et analyse sanitaire et technique.",
      "La documentation existante et un matériel adapté se préparent avant la visite.",
      "La cartographie des désordres utilise une légende unique et des fiches localisées.",
      "Les investigations destructives sont limitées, discrètes et autorisées.",
      "On recherche la cause première d'une chaîne de désordres.",
      "Les désordres sont classés par gravité et urgence ; les risques immédiats imposent des mesures conservatoires.",
      "Les préconisations traitent la cause d'abord et signalent les incertitudes.",
      "Toute découverte imprévue en cours de chantier est signalée avant de poursuivre."
     ],
     "lexique": [
      {
       "terme": "Analyse diagnostique",
       "def": "Démarche qui établit l'état d'un ouvrage, ses désordres, leurs causes et les remèdes."
      },
      {
       "terme": "Cartographie des désordres",
       "def": "Report codifié de tous les désordres observés sur les plans et élévations."
      },
      {
       "terme": "Investigation",
       "def": "Recherche complémentaire à l'observation : sondage, mesure, prélèvement, analyse."
      },
      {
       "terme": "Sondage",
       "def": "Ouverture limitée ou test mécanique pour connaître la nature ou l'état d'un élément caché."
      },
      {
       "terme": "Endoscopie",
       "def": "Observation de l'intérieur d'un élément par une caméra introduite dans un petit trou."
      },
      {
       "terme": "Cause première",
       "def": "Phénomène à l'origine d'une chaîne de désordres."
      },
      {
       "terme": "Préconisation",
       "def": "Recommandation de travaux issue du diagnostic."
      },
      {
       "terme": "Mesure conservatoire",
       "def": "Intervention provisoire et urgente destinée à éviter un danger ou une aggravation."
      },
      {
       "terme": "Ordre de service",
       "def": "Document écrit par lequel le maître d'œuvre donne une instruction à l'entreprise."
      },
      {
       "terme": "Avenant",
       "def": "Modification écrite d'un marché de travaux signée par les parties."
      }
     ]
    },
    {
     "id": "bipb-performance-energetique",
     "titre": "Améliorer la performance énergétique du bâti ancien",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Expliquer pourquoi le bâti ancien demande une approche spécifique de la rénovation énergétique",
      "Calculer la résistance thermique et le coefficient U d'un mur ancien avant et après isolation",
      "Choisir des solutions d'isolation compatibles avec un mur perméable à la vapeur",
      "Intégrer étanchéité à l'air et ventilation dans un projet de réhabilitation",
      "Situer le cadre réglementaire de la rénovation énergétique des bâtiments existants"
     ],
     "sections": [
      {
       "titre": "Une approche spécifique",
       "contenu": "<p>La rénovation énergétique est une priorité nationale, et le bâti ancien représente une part importante du parc de logements. Mais les solutions conçues pour les bâtiments modernes (isolants étanches, pare-vapeur, enduits ciment, menuiseries très étanches sans ventilation) peuvent détruire l'équilibre hygrothermique des murs anciens, provoquer condensation, moisissures et pourriture des bois encastrés.</p>\n<p>La <strong>réhabilitation responsable</strong> du bâti ancien cherche un compromis entre trois objectifs : améliorer le confort et réduire les consommations, préserver la santé du bâti (pas de nouveaux désordres) et respecter son caractère patrimonial (façades, modénatures, menuiseries anciennes). Des centres de ressources publics et professionnels diffusent des guides et outils d'aide à la décision sur ce sujet.</p>\n<p>Le bâti ancien a aussi des atouts : forte inertie qui assure un bon confort d'été, orientation et implantation souvent pensées en fonction du climat, mitoyenneté qui réduit les surfaces exposées, matériaux à faible énergie grise.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur le bâti ancien, on ne raisonne pas paroi par paroi mais sur l'ensemble du bâtiment : toiture, menuiseries, planchers, murs, ventilation et chauffage interagissent. Une mauvaise combinaison de bons produits peut produire de graves désordres.</div>"
      },
      {
       "titre": "Résistance thermique et coefficient U",
       "contenu": "<p>La <strong>résistance thermique</strong> d'une couche homogène vaut R = e / λ, avec e l'épaisseur en m et λ la conductivité thermique en W/(m·K). Pour une paroi composée de plusieurs couches, on additionne les résistances des couches et les <strong>résistances superficielles</strong> intérieure et extérieure (R<sub>si</sub> et R<sub>se</sub>, qui traduisent les échanges entre la paroi et l'air). Pour un mur, on retient couramment R<sub>si</sub> = 0,13 et R<sub>se</sub> = 0,04 m<sup>2</sup>·K/W.</p>\n<p>Le <strong>coefficient de transmission thermique</strong> U = 1 / R<sub>total</sub>, en W/(m<sup>2</sup>·K), indique le flux de chaleur qui traverse 1 m<sup>2</sup> de paroi pour 1 degré d'écart de température. Plus U est faible, plus la paroi est isolante.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mur en moellons calcaires de 50 cm, enduit chaux 2 cm à l'extérieur et 2 cm à l'intérieur. Valeurs indicatives : maçonnerie λ = 1,7 ; enduit chaux λ = 0,8 W/(m·K). 1. R maçonnerie = 0,50 / 1,7 = 0,29. 2. R enduits = 2 × (0,02 / 0,8) = 0,05. 3. R total = 0,13 + 0,29 + 0,05 + 0,04 = 0,51 m<sup>2</sup>·K/W. 4. U = 1 / 0,51 ≈ 1,96 W/(m<sup>2</sup>·K). Après ajout à l'intérieur de 8 cm de panneaux de fibre de bois (λ = 0,040) recouverts d'un enduit chaux de 1,5 cm (R ≈ 0,02) : R isolant = 0,08 / 0,040 = 2,00. Nouveau R total = 0,51 + 2,00 + 0,02 = 2,53. U ≈ 0,40 W/(m<sup>2</sup>·K). Les déperditions par ce mur sont divisées par environ 5.</div>\n<p>Attention, ces valeurs de λ pour la maçonnerie ancienne sont des ordres de grandeur : elles varient beaucoup selon la pierre et surtout selon l'humidité du mur. Un mur humide isole moins bien.</p>"
      },
      {
       "titre": "Où agir en priorité ?",
       "contenu": "<p>Dans une maison ancienne, les travaux les plus efficaces et les moins risqués sont souvent :</p>\n<ol>\n<li><strong>l'isolation de la toiture ou du plancher des combles</strong>, qui représente souvent le poste de déperdition le plus important et se traite sans toucher aux façades ;</li>\n<li><strong>la réduction des infiltrations d'air parasites</strong> (calfeutrements, trappes, passages de gaines) associée à une <strong>ventilation</strong> maîtrisée ;</li>\n<li><strong>l'amélioration des menuiseries</strong> : restauration et calfeutrement des fenêtres anciennes, ajout d'un survitrage ou d'une double fenêtre intérieure, ou remplacement à l'identique avec double vitrage quand l'état l'exige ;</li>\n<li><strong>l'isolation du plancher bas</strong> sur cave ou vide sanitaire, en conservant la ventilation de ces espaces ;</li>\n<li><strong>l'assèchement des murs</strong> (gouttières, enduits ciment retirés), qui améliore leur résistance thermique ;</li>\n<li><strong>l'isolation des murs</strong>, qui demande le plus de précautions.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une façade en pierre de taille ou à décor, l'isolation par l'extérieur est généralement exclue, car elle masquerait la modénature et serait refusée en espace protégé. On isole alors par l'intérieur, ou on se limite à un enduit isolant à la chaux sur les murs de moellons qui étaient déjà enduits, selon le projet.</div>"
      },
      {
       "titre": "Isoler les murs anciens sans les abîmer",
       "contenu": "<p>Pour isoler un mur ancien perméable, on privilégie des solutions <strong>capillaires et ouvertes à la diffusion de vapeur</strong>, qui laissent le mur sécher vers l'intérieur et vers l'extérieur :</p>\n<table>\n<thead><tr><th>Solution</th><th>Principe</th><th>Points de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Enduit chaux-chanvre ou enduit isolant à la chaux</td><td>Enduit épais (plusieurs centimètres) à granulats légers</td><td>Gain thermique modéré, excellent comportement hygrothermique</td></tr>\n<tr><td>Béton ou mortier de chanvre projeté ou banché</td><td>Couche épaisse de chènevotte liée à la chaux</td><td>Temps de séchage long, mise en œuvre soignée</td></tr>\n<tr><td>Panneaux de fibre de bois enduits</td><td>Panneaux rigides collés ou fixés, recouverts d'un enduit</td><td>Support sain et sec, continuité de l'enduit</td></tr>\n<tr><td>Liège, laine de bois, ouate de cellulose derrière un parement</td><td>Isolant fibreux avec membrane <strong>frein-vapeur</strong> adaptée</td><td>Membrane souvent <strong>hygrovariable</strong> (plus ouverte en été pour permettre le séchage), continuité soignée</td></tr>\n</tbody>\n</table>\n<p>À l'inverse, un doublage intérieur avec isolant et <strong>pare-vapeur</strong> étanche sur un mur humide piège l'humidité dans le mur : la face intérieure de la maçonnerie, devenue froide, peut se charger d'eau, et les abouts de poutres encastrés risquent de pourrir.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'isolation intérieure crée des <strong>ponts thermiques</strong> au droit des planchers et des murs de refend, et refroidit les abouts de poutres encastrés dans le mur. Ces points doivent être étudiés (retours d'isolant, surveillance de l'humidité des bois). On n'isole jamais un mur dont on n'a pas d'abord réglé les problèmes d'humidité.</div>"
      },
      {
       "titre": "Étanchéité à l'air et ventilation",
       "contenu": "<p>Un bâtiment ancien non rénové se ventile naturellement par ses défauts : menuiseries peu étanches, conduits de cheminée, planchers à joints ouverts. Lorsqu'on supprime ces fuites pour économiser l'énergie, l'humidité produite par les occupants (cuisine, douche, respiration, séchage du linge) n'est plus évacuée.</p>\n<p>Toute amélioration de l'étanchéité à l'air doit donc s'accompagner d'une <strong>ventilation</strong> adaptée : ventilation mécanique contrôlée (simple flux, hygroréglable, ou double flux avec récupération de chaleur) ou ventilation naturelle assistée. Les entrées d'air se placent dans les pièces principales, les extractions dans les pièces humides.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la cohérence d'un projet de réhabilitation énergétique. Pour chaque travail prévu, poser trois questions. 1. Quel effet sur les déperditions ? (gain attendu). 2. Quel effet sur l'humidité ? (le mur peut-il encore sécher ? l'air intérieur sera-t-il renouvelé ?). 3. Quel effet sur le patrimoine ? (aspect extérieur, éléments anciens conservés ?). Exemple : remplacement de toutes les fenêtres par des menuiseries très étanches sans ventilation : gain thermique réel, mais risque fort de condensation et de moisissures, et perte des menuiseries anciennes ; il faut au minimum ajouter une ventilation et étudier la restauration des menuiseries existantes.</div>"
      },
      {
       "titre": "Le cadre réglementaire",
       "contenu": "<p>Les travaux sur les bâtiments existants sont soumis à une <strong>réglementation thermique de l'existant</strong>. Pour la plupart des chantiers, elle fixe des performances minimales <strong>élément par élément</strong> : lorsqu'on remplace ou installe un isolant, une fenêtre, un système de chauffage ou de ventilation, l'élément mis en place doit atteindre une performance minimale fixée par arrêté. Pour certaines rénovations lourdes de grands bâtiments, une approche globale s'applique. Des exceptions existent notamment lorsque les travaux d'isolation entraîneraient un risque de pathologie du bâti ou une dégradation de l'aspect d'un bâtiment protégé ; elles doivent être justifiées.</p>\n<p>Le <strong>diagnostic de performance énergétique</strong> (DPE) classe les logements de A à G selon leur consommation d'énergie et leurs émissions de gaz à effet de serre. Il est obligatoire lors des ventes et des locations, et la loi Climat et résilience de 2021 a prévu un calendrier progressif d'interdiction de mise en location des logements les plus énergivores. Ces règles évoluent régulièrement : on vérifie les textes en vigueur au moment du projet.</p>\n<p>Des aides publiques à la rénovation existent ; elles imposent souvent le recours à une entreprise titulaire d'une qualification reconnue (mention RGE, « reconnu garant de l'environnement »).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la réglementation n'impose jamais de mettre en péril un bâtiment ancien. Le professionnel doit connaître les exceptions prévues et savoir alerter quand une solution standard serait dangereuse pour le bâti.</div>"
      }
     ],
     "points_cles": [
      "Le bâti ancien exige une réhabilitation qui concilie énergie, santé du bâti et patrimoine.",
      "R = e / λ ; R total = Rsi + somme des couches + Rse ; U = 1 / R total.",
      "Un mur en pierre de 50 cm a un U de l'ordre de 2 W/(m²·K) ; quelques centimètres d'isolant le divisent fortement.",
      "Priorités fréquentes : combles, fuites d'air avec ventilation, menuiseries, plancher bas, assèchement, puis murs.",
      "Les isolants capillaires et ouverts à la vapeur (chanvre-chaux, fibre de bois, frein-vapeur hygrovariable) conviennent au bâti ancien.",
      "Un pare-vapeur étanche sur un mur humide piège l'eau et fait pourrir les abouts de poutres.",
      "Toute amélioration de l'étanchéité à l'air s'accompagne d'une ventilation.",
      "La réglementation thermique de l'existant fixe des performances élément par élément, avec des exceptions justifiées."
     ],
     "lexique": [
      {
       "terme": "Conductivité thermique λ",
       "def": "Aptitude d'un matériau à conduire la chaleur, en W/(m·K)."
      },
      {
       "terme": "Résistance thermique R",
       "def": "Capacité d'une couche à freiner le passage de la chaleur, en m²·K/W."
      },
      {
       "terme": "Coefficient U",
       "def": "Flux de chaleur traversant 1 m² de paroi pour 1 K d'écart, en W/(m²·K)."
      },
      {
       "terme": "Pont thermique",
       "def": "Zone de la paroi où la chaleur s'échappe plus facilement (jonction, discontinuité d'isolant)."
      },
      {
       "terme": "Frein-vapeur",
       "def": "Membrane qui limite sans l'arrêter le passage de la vapeur d'eau."
      },
      {
       "terme": "Hygrovariable",
       "def": "Se dit d'une membrane dont la perméabilité à la vapeur varie avec l'humidité ambiante."
      },
      {
       "terme": "Pare-vapeur",
       "def": "Membrane quasi étanche à la vapeur d'eau."
      },
      {
       "terme": "Chènevotte",
       "def": "Partie ligneuse de la tige de chanvre, utilisée comme granulat isolant."
      },
      {
       "terme": "DPE",
       "def": "Diagnostic de performance énergétique classant un logement de A à G."
      },
      {
       "terme": "RGE",
       "def": "Reconnu garant de l'environnement : mention de qualification exigée pour certaines aides à la rénovation."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Organiser et conduire l'intervention en sécurité",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bipb-mesures-conservatoires",
     "titre": "Mesures conservatoires, levage et déconstruction sélective",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Définir et choisir les mesures conservatoires adaptées à un ouvrage menacé",
      "Organiser la protection des éléments conservés pendant les travaux",
      "Préparer une opération de levage : charge, élingage, signalisation",
      "Conduire une dépose soignée avec repérage, tri et stockage des matériaux",
      "Organiser une déconstruction sélective et la valorisation des déchets"
     ],
     "sections": [
      {
       "titre": "Les mesures conservatoires",
       "contenu": "<p>Une <strong>mesure conservatoire</strong> est une intervention provisoire destinée à protéger les personnes et à empêcher l'aggravation de l'état d'un ouvrage en attendant les travaux définitifs. Sur le bâti ancien, elle est souvent la première tâche du chantier, voire une intervention d'urgence.</p>\n<table>\n<thead><tr><th>Menace</th><th>Mesures conservatoires possibles</th></tr></thead>\n<tbody>\n<tr><td>Eau de pluie entrant par une couverture détruite</td><td>Bâchage, couverture provisoire, <strong>parapluie</strong> (toit provisoire sur échafaudage au-dessus de l'ouvrage)</td></tr>\n<tr><td>Plancher ou poutre affaiblis</td><td><strong>Étaiement</strong> par étais réglables ou bois, avec répartition des charges au sol</td></tr>\n<tr><td>Mur qui déverse ou bombe</td><td>Étaiement oblique (<strong>étrésillonnement</strong>, contrefiches), ceinturage provisoire</td></tr>\n<tr><td>Arc ou baie fissurés</td><td><strong>Cintre</strong> provisoire sous l'arc, étrésillons dans la baie</td></tr>\n<tr><td>Éléments instables en hauteur (pierres de corniche, souches de cheminées)</td><td>Purge contrôlée et stockage, filets, balisage et protection de l'espace public</td></tr>\n<tr><td>Décors fragiles (enduits peints, sculptures)</td><td>Facing (papier japon collé provisoirement), coffrage de protection, mise à distance</td></tr>\n</tbody>\n</table>\n<p>Les mesures conservatoires sont décidées par le maître d'œuvre ou, en urgence, par le chef de chantier dans la limite de ses compétences. Elles doivent elles-mêmes respecter l'ouvrage : un étai ne s'appuie pas sur un sol fragile ou un dallage ancien sans <strong>cale de répartition</strong>, une bâche ne s'accroche pas à des éléments décoratifs.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un étaiement se pose de bas en haut, en partant d'un appui sûr, et se dépose dans l'ordre inverse, progressivement. On ne se place jamais sous une charge non encore étayée. Les étais sont vérifiés régulièrement, notamment après des intempéries ou des chocs.</div>"
      },
      {
       "titre": "Protéger l'existant conservé",
       "contenu": "<p>Sur un chantier de réhabilitation, une grande partie de l'ouvrage est conservée : sols anciens, escaliers, menuiseries, cheminées, parements, décors. Les travaux ne doivent pas les abîmer. Avant de commencer, on établit avec le maître d'œuvre la liste des éléments à protéger et le mode de protection :</p>\n<ul>\n<li>sols : protection par feutre ou carton épais et panneaux rigides, sans ruban adhésif collé directement sur un sol ancien ou ciré ;</li>\n<li>escaliers : coffrage des marches et des nez de marche, protection de la rampe ;</li>\n<li>menuiseries et vitrages : film ou panneaux, ou dépose et stockage à l'abri si elles doivent être restaurées en atelier ;</li>\n<li>parements de pierre et sculptures : coffrage bois avec espace ventilé ;</li>\n<li>arbres et abords : protection des troncs, limitation de la circulation des engins sur les racines.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un <strong>constat d'état des lieux</strong> contradictoire, avec photos datées, est réalisé avant le démarrage, en particulier pour les bâtiments voisins mitoyens et la voirie. Il protège l'entreprise en cas de réclamation et permet de prouver qu'une fissure existait avant les travaux.</div>"
      },
      {
       "titre": "Préparer un levage",
       "contenu": "<p>Le levage de pierres, de pièces de charpente, de palettes de tuiles ou de matériaux de couverture est une opération à risque. On distingue les <strong>appareils de levage</strong> (grue, camion-grue, palan, treuil, monte-matériaux) et les <strong>accessoires de levage</strong> (élingues textiles, chaînes, câbles, crochets, manilles, pinces à pierre, palonniers). Chaque appareil et chaque accessoire porte une <strong>charge maximale d'utilisation</strong> (CMU), à ne jamais dépasser, et fait l'objet de vérifications périodiques.</p>\n<p>La force dans les brins d'une élingue dépend de l'angle d'élingage : plus les brins sont écartés, plus ils sont tendus.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier une élingue à deux brins. Charge : une pierre de 800 kg. Les brins font chacun un angle de 45° avec la verticale. 1. Chaque brin reprend verticalement la moitié de la charge : 800 / 2 = 400 kg. 2. La tension dans un brin incliné vaut cette composante divisée par le cosinus de l'angle avec la verticale : 400 / cos 45° = 400 / 0,707 ≈ 566 kg. 3. Chaque brin doit donc avoir une CMU d'au moins 566 kg dans cette configuration. Avec un angle de 60° par rapport à la verticale, on trouverait 400 / 0,5 = 800 kg par brin : la tension double par rapport à des brins verticaux. En pratique, on lit directement la CMU selon l'angle sur l'étiquette de l'élingue, et l'on évite les angles supérieurs à 60° par rapport à la verticale.</div>\n<p>Règles essentielles : seul un personnel formé et autorisé conduit les appareils de levage (autorisation de conduite délivrée par l'employeur) ; un seul chef de manœuvre guide le grutier par des gestes conventionnels ou par radio ; personne ne stationne sous une charge ; la zone d'évolution est balisée ; on protège les arêtes vives de la charge pour ne pas couper les élingues textiles et les arêtes de pierre pour ne pas les épaufrer.</p>"
      },
      {
       "titre": "La dépose soignée",
       "contenu": "<p>Sur le bâti ancien, on ne <strong>démolit</strong> pas, on <strong>dépose</strong> : on démonte élément par élément ce qui peut être réemployé, restauré ou conservé comme témoin. La dépose soignée suit une organisation précise :</p>\n<ol>\n<li><strong>Repérer et documenter</strong> avant dépose : relevé, photos, numérotation de chaque élément (pierre, pièce de charpente, ardoise de modèle particulier) sur l'élément lui-même et sur un plan de repérage.</li>\n<li><strong>Déposer dans l'ordre inverse du montage</strong> : couverture avant charpente, éléments hauts avant éléments bas, en vérifiant à chaque étape la stabilité de ce qui reste.</li>\n<li><strong>Trier</strong> immédiatement : éléments réemployables, éléments à restaurer, déchets.</li>\n<li><strong>Stocker</strong> à l'abri, sur palettes ou chevrons, par catégorie et dans l'ordre de repose, avec étiquettes résistantes.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un élément déposé sans repère est un élément perdu. Le marquage se fait sur une face non visible ou par étiquette fixée, avec un code cohérent avec le plan (par exemple F3-A2 pour la pièce A2 de la ferme n° 3).</div>"
      },
      {
       "titre": "La déconstruction sélective et les déchets",
       "contenu": "<p>La <strong>déconstruction sélective</strong> consiste à démonter un ouvrage en séparant ses matériaux par catégories, pour les réemployer, les recycler ou les éliminer dans la filière adaptée. Elle est imposée par la logique de la réglementation des déchets, qui hiérarchise les modes de traitement : prévention, réemploi, recyclage, autre valorisation, et seulement en dernier recours élimination.</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Exemples</th><th>Filière</th></tr></thead>\n<tbody>\n<tr><td>Déchets inertes</td><td>Pierres, briques, tuiles, mortiers de chaux, terre</td><td>Réemploi, recyclage en granulats, remblai autorisé, installation de stockage de déchets inertes</td></tr>\n<tr><td>Déchets non dangereux</td><td>Bois non traité, métaux, plâtre, isolants, plastiques</td><td>Recyclage par matériau (métaux, plâtre, bois), valorisation énergétique</td></tr>\n<tr><td>Déchets dangereux</td><td>Matériaux amiantés, bois traités avec certains produits, peintures au plomb, produits chimiques</td><td>Filières spécialisées avec bordereau de suivi</td></tr>\n</tbody>\n</table>\n<p>Depuis 2023, une filière à <strong>responsabilité élargie du producteur</strong> pour les produits et matériaux de construction du bâtiment organise la reprise des déchets triés du bâtiment, avec un réseau de points de collecte. L'entreprise conserve les justificatifs de traitement de ses déchets. Les déchets dangereux sont accompagnés d'un <strong>bordereau de suivi des déchets</strong> qui trace leur parcours jusqu'à l'installation de traitement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un seul matériau dangereux mélangé à une benne d'inertes (une plaque amiantée, un pot de produit de traitement) rend toute la benne dangereuse. Le tri se fait à la source, au poste de travail, et les matériaux suspects sont isolés en attendant d'être identifiés.</div>"
      },
      {
       "titre": "Installer le chantier en site ancien",
       "contenu": "<p>L'installation d'un chantier sur un bâtiment ancien, souvent en centre-bourg ou en ville, demande une préparation particulière :</p>\n<ul>\n<li><strong>occupation du domaine public</strong> : un échafaudage, une benne ou une zone de stockage sur le trottoir ou la chaussée nécessite une autorisation de la commune (permission de voirie ou arrêté de circulation), à demander plusieurs semaines à l'avance ;</li>\n<li><strong>accès et stockage</strong> : rues étroites, cours fermées, impossibilité de faire entrer une grue ; on choisit des moyens de levage adaptés (monte-matériaux, palan sur potence, grue mobile de faible encombrement) et on organise des livraisons fractionnées ;</li>\n<li><strong>clôture et signalisation</strong> du chantier, protection des piétons (passage abrité sous l'échafaudage ou déviation balisée) ;</li>\n<li><strong>cantonnements</strong> : locaux pour les repas, vestiaires, sanitaires, éventuellement dans une pièce du bâtiment si elle est saine et autorisée ;</li>\n<li><strong>ancrage des échafaudages</strong> : sur une maçonnerie ancienne, les ancrages sont placés dans des parties saines (joints épais, pierres dures, chaînes d'angle), testés à l'arrachement et retirés en fin de chantier en rebouchant les trous avec un mortier compatible ; sur un monument, leur nombre et leur position sont validés par le maître d'œuvre.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une façade en pierre tendre, on préfère parfois un échafaudage autostable (lesté ou haubané au sol) ou des ancrages traversant les baies (étrésillonnés dans l'embrasure) pour éviter de percer la pierre. Ce choix se fait dès la préparation du chantier.</div>"
      }
     ],
     "points_cles": [
      "Une mesure conservatoire est provisoire : elle protège les personnes et empêche l'aggravation.",
      "Bâchage, parapluie, étaiement, cintre, purge et balisage sont les mesures les plus courantes.",
      "Les éléments conservés sont protégés et un état des lieux photographique est fait avant travaux.",
      "Chaque appareil et accessoire de levage a une CMU ; la tension dans un brin augmente avec l'angle.",
      "Tension par brin = (charge / nombre de brins) / cos(angle avec la verticale).",
      "On dépose dans l'ordre inverse du montage, après repérage et numérotation.",
      "Les éléments déposés sont triés et stockés à l'abri dans l'ordre de repose.",
      "La déconstruction sélective sépare inertes, non dangereux et dangereux ; ces derniers sont suivis par bordereau."
     ],
     "lexique": [
      {
       "terme": "Mesure conservatoire",
       "def": "Intervention provisoire destinée à éviter un danger ou l'aggravation d'un désordre."
      },
      {
       "terme": "Parapluie",
       "def": "Toiture provisoire installée au-dessus d'un ouvrage pendant les travaux."
      },
      {
       "terme": "Étaiement",
       "def": "Ensemble d'étais qui soutient provisoirement un ouvrage."
      },
      {
       "terme": "Étrésillon",
       "def": "Pièce posée en butée entre deux parois ou dans une baie pour les maintenir."
      },
      {
       "terme": "Cintre",
       "def": "Ouvrage provisoire en bois qui soutient un arc ou une voûte."
      },
      {
       "terme": "CMU",
       "def": "Charge maximale d'utilisation d'un appareil ou accessoire de levage."
      },
      {
       "terme": "Élingue",
       "def": "Accessoire (sangle, chaîne, câble) qui relie la charge au crochet de levage."
      },
      {
       "terme": "Dépose",
       "def": "Démontage soigné d'un élément en vue de sa conservation, restauration ou réemploi."
      },
      {
       "terme": "Déconstruction sélective",
       "def": "Démontage d'un ouvrage en séparant les matériaux par catégories et filières."
      },
      {
       "terme": "Bordereau de suivi des déchets",
       "def": "Document qui trace un déchet dangereux du producteur jusqu'à son traitement."
      }
     ]
    },
    {
     "id": "bipb-organisation-suivi",
     "titre": "Organiser, planifier et suivre une intervention",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Calculer la durée d'une tâche à partir d'un quantitatif et d'un temps unitaire",
      "Construire un planning tenant compte des contraintes propres au bâti ancien",
      "Anticiper les approvisionnements de matériaux spécifiques",
      "Suivre l'avancement d'un chantier et en rendre compte par écrit et à l'oral",
      "Organiser l'autocontrôle et préparer la réception des travaux"
     ],
     "sections": [
      {
       "titre": "Du quantitatif aux heures de travail",
       "contenu": "<p>Pour organiser une intervention, on part des <strong>quantités</strong> de travaux (en m<sup>2</sup>, m<sup>3</sup>, m, unités) et des <strong>temps unitaires</strong> : temps nécessaire pour réaliser une unité d'ouvrage, en heures par unité (h/m<sup>2</sup>, h/m…). Les temps unitaires proviennent de l'expérience de l'entreprise, de bordereaux de prix ou de bases de données professionnelles. Sur le bâti ancien, ils sont très variables : un rejointoiement sur un mur de moellons irréguliers prend beaucoup plus de temps que sur un parement en pierre de taille.</p>\n<p>Le <strong>temps total</strong> d'une tâche vaut quantité × temps unitaire. Sa <strong>durée</strong> en jours dépend du nombre de personnes affectées et de la durée de travail journalière.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> durée d'un dégarnissage et rejointoiement. Données : 64 m<sup>2</sup> de façade en moellons ; temps unitaire de dégarnissage des joints 0,9 h/m<sup>2</sup> ; temps unitaire de rejointoiement 1,6 h/m<sup>2</sup> ; équipe de 2 compagnons, 7 h par jour. 1. Temps de dégarnissage : 64 × 0,9 = 57,6 h. 2. Temps de rejointoiement : 64 × 1,6 = 102,4 h. 3. Temps total : 160 h. 4. Capacité journalière de l'équipe : 2 × 7 = 14 h/jour. 5. Durée : 160 / 14 ≈ 11,4 jours, arrondie à 12 jours ouvrés. On ajoute ensuite les temps qui ne dépendent pas de la quantité : installation, protection, nettoyage, repli.</div>\n<p>Le calcul des heures permet aussi d'estimer le coût de main-d'œuvre, en multipliant les heures par le <strong>déboursé horaire</strong> de l'entreprise (salaire chargé et frais directs liés à l'ouvrier). C'est la base de l'étude de prix.</p>"
      },
      {
       "titre": "Planifier en tenant compte du bâti ancien",
       "contenu": "<p>Le planning se présente le plus souvent sous forme de <strong>diagramme de Gantt</strong> : chaque tâche est une barre dont la longueur représente la durée, placée sur une échelle de temps. On y fait apparaître les <strong>liens d'antériorité</strong> (une tâche ne peut commencer qu'après la fin d'une autre) et les <strong>jalons</strong> (dates clés : livraison, réunion, réception).</p>\n<p>Le bâti ancien impose des contraintes particulières :</p>\n<ul>\n<li><strong>temps de séchage et de carbonatation</strong> des mortiers et enduits de chaux : plusieurs jours entre couches d'enduit (davantage par temps humide), parfois plusieurs semaines avant une finition ;</li>\n<li><strong>saisons</strong> : pas de mortier de chaux par temps de gel, ni en plein soleil d'été sans protection ; la couverture se programme de préférence hors périodes de fortes pluies, ou sous parapluie ;</li>\n<li><strong>découvertes</strong> en cours de travaux : il faut prévoir des marges et des points d'arrêt pour validation par le maître d'œuvre ;</li>\n<li><strong>coordination des corps d'état</strong> : la couverture ne peut pas être terminée avant la réparation de la charpente ; l'enduit de façade suit la reprise des gouttières et des appuis ;</li>\n<li><strong>délais d'approvisionnement</strong> longs pour certains matériaux.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un planning qui enchaîne sans délai la pose du corps d'enduit et celle de la finition à la chaux est irréaliste. Les fiches techniques des fabricants et les prescriptions du dossier indiquent les délais minimaux entre couches : ils sont incompressibles et doivent figurer dans le planning.</div>"
      },
      {
       "titre": "Anticiper les approvisionnements",
       "contenu": "<p>Le bâti ancien utilise des matériaux qui ne se trouvent pas toujours en négoce et dont les délais peuvent atteindre plusieurs semaines ou mois :</p>\n<table>\n<thead><tr><th>Matériau</th><th>Contrainte d'approvisionnement</th></tr></thead>\n<tbody>\n<tr><td>Pierre de taille d'une carrière précise</td><td>Extraction, sciage et taille sur commande ; validation d'échantillons</td></tr>\n<tr><td>Bois de chêne de forte section</td><td>Recherche de grumes adaptées, sciage sur liste</td></tr>\n<tr><td>Tuiles plates ou ardoises de format ancien</td><td>Fabrication artisanale ou matériaux de récupération à rechercher et trier</td></tr>\n<tr><td>Sables locaux pour enduits</td><td>Recherche de la teinte, essais de convenance</td></tr>\n<tr><td>Ferronnerie, zinguerie sur mesure</td><td>Fabrication en atelier après relevé</td></tr>\n</tbody>\n</table>\n<p>Pour chaque matériau, on établit la quantité à commander à partir du métré, en ajoutant un <strong>coefficient de perte</strong> (casse, coupes, chutes, tri des matériaux de réemploi). On prévoit aussi les <strong>échantillons</strong> et les <strong>essais de convenance</strong> (panneau d'enduit témoin, pierre échantillon) à faire valider par le maître d'œuvre avant de lancer les commandes définitives.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour un enduit à la chaux en site protégé, l'entreprise réalise plusieurs petits panneaux d'essai sur le mur, avec des sables et des dosages différents. L'ABF ou le maître d'œuvre choisit après séchage complet, car la teinte d'un enduit à la chaux change beaucoup en séchant. Ce délai doit être prévu dans le planning.</div>"
      },
      {
       "titre": "Suivre l'avancement",
       "contenu": "<p>Le suivi de chantier compare en permanence le <strong>prévu</strong> et le <strong>réalisé</strong>, en délais, en quantités et en heures. Les outils sont :</p>\n<ul>\n<li>le <strong>journal de chantier</strong> (ou cahier de chantier), où l'on note chaque jour l'effectif, la météo, les tâches réalisées, les livraisons, les visites, les incidents et les découvertes ;</li>\n<li>les <strong>fiches de pointage</strong> des heures par tâche ;</li>\n<li>le planning mis à jour (barres d'avancement, ligne de la date du jour) ;</li>\n<li>les photos datées.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un avancement et un écart d'heures. Tâche : rejointoiement de 64 m<sup>2</sup>, 102,4 h prévues. Au bout de 4 jours, 22 m<sup>2</sup> sont réalisés et 42 h ont été pointées. 1. Avancement physique : 22 / 64 = 34 %. 2. Heures qui auraient dû être consommées pour cet avancement : 22 × 1,6 = 35,2 h. 3. Écart : 42 − 35,2 = 6,8 h de dépassement, soit environ 19 %. 4. Analyse : rechercher la cause (joints plus profonds que prévu, accès difficile, météo) et en informer le chef de chantier pour ajuster le planning, voire discuter avec le maître d'œuvre si la cause est une différence entre le dossier et la réalité.</div>"
      },
      {
       "titre": "Rendre compte",
       "contenu": "<p>Le professionnel doit savoir rendre compte de son activité à sa hiérarchie, au maître d'œuvre ou au client, par écrit et à l'oral. Un <strong>compte rendu</strong> d'intervention efficace est structuré :</p>\n<ol>\n<li>contexte : chantier, date, intervenants, objet ;</li>\n<li>travaux réalisés, avec les quantités ;</li>\n<li>constats : état découvert, désordres imprévus, photos repérées ;</li>\n<li>difficultés rencontrées et solutions appliquées ou proposées ;</li>\n<li>décisions à prendre et questions posées (qui doit décider, avant quand) ;</li>\n<li>suite prévue.</li>\n</ol>\n<p>Le vocabulaire technique doit être précis et constant : on écrit « about de la poutre P3 pourri sur 25 cm, section résiduelle saine estimée à 60 % » et non « la poutre est abîmée au bout ». Les faits (ce qui a été vu et mesuré) sont distingués des hypothèses (ce que l'on pense).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur le bâti ancien, le compte rendu est aussi une archive : il documente l'état de l'ouvrage découvert pendant les travaux et les choix faits. Il est daté, signé et illustré.</div>"
      },
      {
       "titre": "Autocontrôle et réception",
       "contenu": "<p>L'<strong>autocontrôle</strong> consiste à vérifier soi-même la conformité de son travail aux prescriptions, à chaque étape, au moyen de critères mesurables : planéité et aspect d'un enduit, profondeur des joints, aplomb, alignement d'une rive, recouvrement d'une tuile, section et assemblage d'une pièce de charpente. Une <strong>fiche d'autocontrôle</strong> liste les points à vérifier, la méthode, la tolérance, le résultat et les actions correctives.</p>\n<p>En fin de travaux, la <strong>réception</strong> est l'acte par lequel le maître d'ouvrage accepte l'ouvrage, avec ou sans réserves. Elle déclenche les garanties légales (garantie de parfait achèvement, garantie de bon fonctionnement, garantie décennale). L'entreprise remet le <strong>dossier des ouvrages exécutés</strong> (DOE), qui décrit ce qui a réellement été réalisé, avec les fiches techniques des produits, et participe à la constitution du <strong>dossier d'intervention ultérieure sur l'ouvrage</strong> (DIUO), qui informe sur les risques et les moyens d'intervenir plus tard en sécurité.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un chantier de patrimoine, le DOE doit indiquer précisément les matériaux employés (carrière et nature de la pierre, type de chaux et sable, essence de bois, provenance des tuiles). Sans ces informations, ceux qui interviendront dans cinquante ans ne pourront pas réparer de façon compatible.</div>"
      },
      {
       "titre": "Les réunions de chantier",
       "contenu": "<p>Le chantier est rythmé par les <strong>réunions de chantier</strong>, généralement hebdomadaires, animées par le maître d'œuvre. Chaque entreprise y est représentée. On y fait le point sur l'avancement, les problèmes rencontrés, les choix de matériaux et les découvertes, et le maître d'œuvre rédige un <strong>compte rendu de réunion</strong> diffusé à tous. Ce compte rendu a une valeur contractuelle : une décision qui y figure (« l'entreprise remplacera les pierres repérées 12 à 18 ») engage l'entreprise si elle ne la conteste pas rapidement.</p>\n<p>Le professionnel qui représente l'entreprise doit donc préparer la réunion : liste des questions, photos, quantités constatées, propositions de solutions. Après la réunion, il lit attentivement le compte rendu, vérifie que les décisions sont bien retranscrites et transmet à l'équipe les consignes qui la concernent.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une modification demandée oralement sur le chantier (par le client ou un intervenant) ne doit pas être exécutée sans confirmation écrite du maître d'œuvre lorsqu'elle change le marché. Sinon, l'entreprise risque de ne pas être payée pour ces travaux ou d'en porter la responsabilité.</div>"
      }
     ],
     "points_cles": [
      "Temps total = quantité × temps unitaire ; durée = temps total / (effectif × heures par jour).",
      "Le planning de Gantt montre durées, liens d'antériorité et jalons.",
      "Délais de séchage de la chaux, saisons, découvertes et coordination des corps d'état sont des contraintes propres au bâti ancien.",
      "Les matériaux spécifiques (pierre, chêne, tuiles anciennes) demandent des délais, des échantillons et des essais de convenance.",
      "Le suivi compare prévu et réalisé : avancement physique et heures consommées.",
      "Un compte rendu distingue faits et hypothèses et utilise un vocabulaire précis.",
      "L'autocontrôle repose sur des critères mesurables et des tolérances.",
      "La réception déclenche les garanties ; le DOE consigne précisément les matériaux employés."
     ],
     "lexique": [
      {
       "terme": "Temps unitaire",
       "def": "Temps nécessaire pour réaliser une unité d'ouvrage, en heures par unité."
      },
      {
       "terme": "Déboursé horaire",
       "def": "Coût d'une heure de main-d'œuvre pour l'entreprise, charges comprises."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Planning représentant les tâches par des barres sur une échelle de temps."
      },
      {
       "terme": "Jalon",
       "def": "Événement daté important dans un planning."
      },
      {
       "terme": "Coefficient de perte",
       "def": "Majoration appliquée aux quantités pour tenir compte de la casse et des chutes."
      },
      {
       "terme": "Essai de convenance",
       "def": "Réalisation d'un échantillon d'ouvrage sur place pour valider un matériau ou une finition."
      },
      {
       "terme": "Journal de chantier",
       "def": "Registre quotidien des événements et travaux d'un chantier."
      },
      {
       "terme": "Autocontrôle",
       "def": "Vérification par l'opérateur de la conformité de son propre travail."
      },
      {
       "terme": "Réception",
       "def": "Acte par lequel le maître d'ouvrage accepte l'ouvrage, avec ou sans réserves."
      },
      {
       "terme": "DOE",
       "def": "Dossier des ouvrages exécutés, décrivant ce qui a réellement été réalisé."
      },
      {
       "terme": "DIUO",
       "def": "Dossier d'intervention ultérieure sur l'ouvrage, pour la sécurité des interventions futures."
      }
     ]
    },
    {
     "id": "bipb-sante-securite-rehabilitation",
     "titre": "Santé et sécurité sur un chantier de réhabilitation",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les risques propres aux interventions sur bâtiments anciens et occupés",
      "Appliquer les règles de prévention face à l'amiante, au plomb, à la silice et aux poussières de bois",
      "Choisir des protections collectives contre les chutes en toiture et en façade",
      "Connaître les documents de prévention : PPSPS, plan de prévention, permis de feu",
      "Prévenir le risque d'incendie lors des travaux par points chauds"
     ],
     "sections": [
      {
       "titre": "Des risques spécifiques au bâti existant",
       "contenu": "<p>Les principes généraux de prévention (éviter le risque, l'évaluer, le combattre à la source, privilégier la protection collective sur l'individuelle, former et informer) s'appliquent à tous les chantiers. Le bâti existant ajoute des risques particuliers :</p>\n<ul>\n<li><strong>structure incertaine</strong> : planchers pourris, charpentes affaiblies, murs instables, éléments en hauteur prêts à tomber ;</li>\n<li><strong>matériaux dangereux cachés</strong> : amiante, peintures au plomb, bois traités avec des produits anciens toxiques ;</li>\n<li><strong>poussières</strong> : silice cristalline de la pierre et des mortiers, poussières de bois, plâtre, gravats anciens souillés ;</li>\n<li><strong>risques biologiques</strong> : déjections d'oiseaux et de rongeurs dans les combles et les caves, moisissures ;</li>\n<li><strong>incendie</strong> : charpentes anciennes en bois sec, accumulations de poussières et de débris dans les combles ;</li>\n<li><strong>présence de tiers</strong> : occupants, public, voisins, circulation au pied des façades en ville.</li>\n</ul>\n<p>Ces risques doivent être identifiés avant les travaux, dans le <strong>document unique d'évaluation des risques</strong> de l'entreprise et dans les documents propres au chantier.</p>"
      },
      {
       "titre": "L'amiante",
       "contenu": "<p>L'<strong>amiante</strong> a été massivement utilisé jusqu'à son interdiction en France en 1997. On le trouve dans des bâtiments anciens ayant subi des travaux au XX<sup>e</sup> siècle : plaques et ardoises en fibres-ciment, conduits, enduits et colles, dalles de sol, joints, calorifugeages, certains enduits et peintures. Ses fibres inhalées provoquent des maladies graves (cancer de la plèvre et du poumon, asbestose), souvent plusieurs dizaines d'années après l'exposition.</p>\n<p>Avant toute opération susceptible de porter atteinte à des matériaux, le donneur d'ordre doit faire réaliser un <strong>repérage de l'amiante avant travaux</strong>. Les interventions se classent en deux catégories réglementaires :</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Nature</th><th>Exigences principales</th></tr></thead>\n<tbody>\n<tr><td>Sous-section 3</td><td>Travaux de <strong>retrait</strong> ou d'encapsulage de matériaux amiantés</td><td>Entreprise certifiée, plan de démolition, de retrait ou d'encapsulage</td></tr>\n<tr><td>Sous-section 4</td><td><strong>Interventions</strong> sur des matériaux susceptibles de libérer des fibres (perçage, découpe, dépose ponctuelle)</td><td>Formation spécifique des opérateurs, mode opératoire écrit, protections adaptées, suivi médical</td></tr>\n</tbody>\n</table>\n<p>La valeur limite d'exposition professionnelle à l'amiante est de 10 fibres par litre d'air sur 8 heures.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> si l'on découvre en cours de chantier un matériau suspect non repéré (plaque grise fibreuse, vieux conduit, ardoise artificielle), on <strong>arrête</strong> immédiatement l'intervention sur ce matériau, on balise la zone et on prévient le chef de chantier. Aucun ponçage, cassage ou découpe avant identification.</div>"
      },
      {
       "titre": "Le plomb, la silice et les poussières de bois",
       "contenu": "<p>Les <strong>peintures au plomb</strong> (céruse) sont fréquentes dans les logements construits avant 1949, sur les menuiseries, boiseries, ferronneries et parfois les murs. Un <strong>constat de risque d'exposition au plomb</strong> (CREP) est établi lors de la vente ou de la location de ces logements ; il signale les revêtements dont la concentration atteint ou dépasse 1 mg/cm<sup>2</sup>. Le décapage par ponçage, brûlage ou grattage à sec libère des poussières et des fumées toxiques (risque de <strong>saturnisme</strong>). On privilégie des méthodes humides ou chimiques adaptées, l'aspiration à la source, le confinement de la zone et une hygiène stricte (ne pas manger, boire ou fumer sur la zone, se laver les mains, vêtements de travail laissés sur le chantier). La couverture et la mise en œuvre du plomb en feuilles exposent aussi au plomb.</p>\n<p>La <strong>silice cristalline</strong> est contenue dans les grès, granites, sables et de nombreux mortiers. Sa poussière fine (fraction alvéolaire), produite par le sciage, le meulage, le dégarnissage mécanique des joints ou le sablage, provoque la silicose et des cancers. La valeur limite pour le quartz est de 0,1 mg/m<sup>3</sup> sur 8 heures, très vite dépassée sans protection.</p>\n<p>Les <strong>poussières de bois</strong>, en particulier de bois durs comme le chêne, sont reconnues cancérogènes (cancers des fosses nasales). La valeur limite réglementaire en France est de 1 mg/m<sup>3</sup> sur 8 heures.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir les protections contre les poussières, dans l'ordre. 1. Supprimer ou réduire à la source : méthode manuelle ou humide plutôt qu'à sec, outil moins émissif (dégarnissage au marteau et ciseau plutôt qu'à la disqueuse quand c'est possible). 2. Capter à la source : outil équipé d'un capot raccordé à un aspirateur de classe adaptée. 3. Protéger la zone : confinement, nettoyage par aspiration (jamais de balayage à sec ni de soufflette). 4. Protéger l'opérateur : appareil de protection respiratoire filtrant au minimum de classe FFP3 ou équivalent pour les poussières de silice ou de bois, ajusté et changé régulièrement, lunettes, vêtements adaptés.</div>"
      },
      {
       "titre": "Les chutes de hauteur en toiture et en façade",
       "contenu": "<p>Les chutes de hauteur restent la première cause d'accidents graves et mortels dans le bâtiment. Sur les chantiers de couverture et de charpente, s'ajoutent les <strong>chutes à travers des matériaux fragiles</strong> (plaques translucides, vieilles plaques en fibres-ciment, voliges pourries) et les chutes depuis des rives non protégées.</p>\n<p>La protection collective est obligatoire en priorité :</p>\n<ul>\n<li><strong>échafaudage de pied</strong> en façade, avec un plancher de travail au niveau de l'égout et une protection périphérique dépassant la rive de toit ;</li>\n<li><strong>garde-corps de toit</strong> fixés en rive ou sur l'échafaudage, adaptés à la pente ;</li>\n<li><strong>filets</strong> en sous-face pour les travaux de charpente et de couverture, ou platelage sous les zones fragiles ;</li>\n<li><strong>échelles de couvreur</strong> et plateformes de circulation sur les pans pentus.</li>\n</ul>\n<p>Lorsque la protection collective est techniquement impossible, on recourt à un <strong>système d'arrêt de chute</strong> (harnais relié à une ligne de vie ou à un ancrage), ce qui impose une formation, un point d'ancrage résistant vérifié et un plan de sauvetage de la personne suspendue.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une toiture ancienne, on ne marche jamais directement sur les tuiles ou ardoises, ni sur une volige ou un lattis dont on ne connaît pas l'état. Les vieux crochets de service ou anneaux fixés en toiture ne sont pas des ancrages fiables pour un harnais tant qu'ils n'ont pas été vérifiés.</div>"
      },
      {
       "titre": "Les documents de prévention et le travail en site occupé",
       "contenu": "<p>Plusieurs documents organisent la prévention :</p>\n<table>\n<thead><tr><th>Document</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Plan général de coordination (PGC)</td><td>Établi par le coordonnateur SPS : règles communes à toutes les entreprises du chantier</td></tr>\n<tr><td>Plan particulier de sécurité et de protection de la santé (PPSPS)</td><td>Rédigé par chaque entreprise : ses modes opératoires, risques et mesures de prévention</td></tr>\n<tr><td>Plan de prévention</td><td>Établi lorsqu'une entreprise intervient dans un établissement en activité (musée, école, église ouverte au culte, usine)</td></tr>\n<tr><td>Mode opératoire amiante</td><td>Décrit les interventions en sous-section 4</td></tr>\n<tr><td>Permis de feu</td><td>Autorise et encadre les travaux par points chauds</td></tr>\n</tbody>\n</table>\n<p>En <strong>site occupé</strong>, on sépare physiquement la zone de travaux des zones occupées, on organise les horaires et cheminements, on protège les personnes des chutes d'objets (filets, auvents de protection en pied d'échafaudage, balisage) et on informe régulièrement les occupants.</p>"
      },
      {
       "titre": "Prévenir l'incendie lors des travaux par points chauds",
       "contenu": "<p>Les <strong>travaux par points chauds</strong> (soudure du plomb et du zinc, chalumeau pour les étanchéités, meulage, découpe à la disqueuse produisant des étincelles) sont l'une des principales causes d'incendie sur les chantiers de restauration. Une charpente ancienne, sèche et poussiéreuse, peut s'enflammer à partir d'une étincelle tombée dans une cavité et couver plusieurs heures avant que le feu ne se déclare.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> les étapes d'un permis de feu. 1. Avant : vérifier que la tâche ne peut pas être réalisée sans point chaud (fixation mécanique, outil à froid) ; faire signer le permis de feu par le responsable ; dégager ou protéger les matériaux combustibles proches (bâches ignifugées) ; disposer un extincteur adapté à portée de main. 2. Pendant : surveiller en permanence la zone et les projections, ne jamais laisser un chalumeau allumé sans surveillance. 3. Après : surveiller la zone pendant une durée fixée par le permis (souvent de l'ordre d'une à deux heures), en contrôlant les cavités, l'arrière des voliges et les sous-faces ; ne pas faire de point chaud en fin de journée sans possibilité de surveillance après.</div>\n<p>D'autres mesures complètent la prévention : interdiction de fumer, rangement et nettoyage quotidien des combles, stockage des bouteilles de gaz hors du bâtiment et à l'abri, circuits électriques provisoires conformes, consignes d'alerte et d'évacuation affichées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un monument ou une charpente ancienne, le moindre point chaud est encadré par un permis de feu et suivi d'une surveillance. La prévention de l'incendie est l'affaire de chaque compagnon, pas seulement du chef de chantier.</div>"
      }
     ],
     "points_cles": [
      "Le bâti existant ajoute des risques : structure incertaine, matériaux dangereux cachés, poussières, risques biologiques, incendie, tiers.",
      "Un repérage de l'amiante avant travaux est obligatoire ; les interventions ponctuelles relèvent de la sous-section 4.",
      "Tout matériau suspect découvert en cours de chantier entraîne l'arrêt et le balisage.",
      "Les peintures au plomb sont fréquentes avant 1949 ; on proscrit ponçage et brûlage à sec sans protection.",
      "Silice et poussières de bois sont cancérogènes : réduire et capter à la source, puis protéger l'opérateur.",
      "En toiture, la protection collective prime ; le harnais n'est utilisé qu'en dernier recours avec ancrage vérifié.",
      "PGC, PPSPS, plan de prévention et permis de feu organisent la prévention.",
      "Les points chauds exigent un permis de feu et une surveillance après travaux."
     ],
     "lexique": [
      {
       "terme": "Repérage amiante avant travaux",
       "def": "Recherche des matériaux amiantés dans les zones concernées par des travaux, à la charge du donneur d'ordre."
      },
      {
       "terme": "Sous-section 4",
       "def": "Catégorie réglementaire des interventions sur matériaux susceptibles de libérer des fibres d'amiante."
      },
      {
       "terme": "VLEP",
       "def": "Valeur limite d'exposition professionnelle à un agent chimique, généralement sur 8 heures."
      },
      {
       "terme": "CREP",
       "def": "Constat de risque d'exposition au plomb, établi pour les logements construits avant 1949."
      },
      {
       "terme": "Saturnisme",
       "def": "Intoxication par le plomb."
      },
      {
       "terme": "Silice cristalline",
       "def": "Minéral présent dans de nombreuses pierres et sables, dont la poussière fine provoque la silicose."
      },
      {
       "terme": "Protection collective",
       "def": "Dispositif qui protège tous les travailleurs sans action de leur part (garde-corps, filet)."
      },
      {
       "terme": "PPSPS",
       "def": "Plan particulier de sécurité et de protection de la santé rédigé par chaque entreprise."
      },
      {
       "terme": "Plan de prévention",
       "def": "Document organisant la sécurité d'une intervention dans un établissement en activité."
      },
      {
       "terme": "Permis de feu",
       "def": "Autorisation écrite encadrant un travail par point chaud et sa surveillance."
      },
      {
       "terme": "Point chaud",
       "def": "Travail produisant flamme, chaleur ou étincelles (soudure, chalumeau, meulage)."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Réaliser les interventions de l'option : maçonnerie, charpente, couverture",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bipb-a-maconneries-pierre",
     "titre": "Maçonneries de pierre : appareils, taille et restauration des parements",
     "niveau": "1re",
     "options": [
      "a"
     ],
     "duree": 45,
     "objectifs": [
      "Identifier les appareils de maçonnerie de pierre et le vocabulaire des éléments d'un mur",
      "Connaître les outils et les finitions de la taille de pierre traditionnelle",
      "Choisir entre conservation, ragréage, incrustation et remplacement d'une pierre",
      "Décrire les étapes du remplacement d'une pierre de taille dans un parement",
      "Calculer les volumes de pierre et de mortier d'une intervention"
     ],
     "sections": [
      {
       "titre": "Les appareils de maçonnerie",
       "contenu": "<p>L'<strong>appareil</strong> désigne la façon dont les pierres sont taillées et assemblées dans un mur. Il conditionne l'aspect du parement, la stabilité du mur et les techniques de restauration.</p>\n<table>\n<thead><tr><th>Appareil</th><th>Description</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td><strong>Opus incertum</strong> (moellons bruts)</td><td>Moellons de formes irrégulières, joints épais, assises non réglées</td><td>Murs courants, bâtiments ruraux, souvent enduits</td></tr>\n<tr><td><strong>Moellons équarris</strong> en assises réglées</td><td>Moellons dégrossis, posés par lits horizontaux</td><td>Façades rurales et urbaines soignées</td></tr>\n<tr><td><strong>Pierre de taille</strong> en appareil réglé</td><td>Blocs parallélépipédiques de même hauteur dans chaque assise, joints minces</td><td>Façades de prestige, encadrements, chaînes</td></tr>\n<tr><td><strong>Appareil en épi</strong> (opus spicatum)</td><td>Pierres plates inclinées alternativement</td><td>Murs anciens régionaux, remplissages</td></tr>\n<tr><td><strong>Appareil mixte</strong></td><td>Moellons pour les parties courantes, pierre de taille pour chaînes, encadrements et corniches</td><td>Très répandu dans le bâti ancien</td></tr>\n</tbody>\n</table>\n<p>Dans un parement en pierre de taille, on distingue les pierres posées en <strong>carreau</strong> (grande face en parement, faible profondeur) et en <strong>boutisse</strong> (petite face en parement, grande profondeur, qui pénètre dans le mur). L'alternance carreaux-boutisses assure la liaison du parement avec le reste du mur. Chaque rangée horizontale de pierres est une <strong>assise</strong>, d'épaisseur appelée <strong>hauteur d'assise</strong>. Les joints verticaux d'une assise doivent être <strong>décalés</strong> (croisés) par rapport à ceux des assises voisines : on dit qu'ils ne doivent pas « filer ».</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque face d'une pierre de taille a un nom : le <strong>parement</strong> (face vue), les <strong>lits</strong> (faces horizontales supérieure, dite lit de dessus, et inférieure, dite lit de pose), les <strong>joints</strong> (faces verticales latérales) et la <strong>queue</strong> (partie arrière, engagée dans le mur).</div>"
      },
      {
       "titre": "Outils et finitions de la taille",
       "contenu": "<p>La pierre de taille est façonnée par le <strong>tailleur de pierre</strong> à partir d'un bloc scié, en suivant une <strong>épure</strong> ou un <strong>panneau</strong> (gabarit). Le maçon du patrimoine n'est pas tailleur de pierre, mais il doit connaître les outils et les finitions, pour reconnaître une taille, commander une pierre et réaliser des retouches.</p>\n<table>\n<thead><tr><th>Outil</th><th>Usage</th><th>Trace laissée</th></tr></thead>\n<tbody>\n<tr><td><strong>Ciseau</strong> et <strong>maillet</strong> ou massette</td><td>Dressage des arêtes (ciselures), finitions</td><td>Bandes lisses ou fines rayures</td></tr>\n<tr><td><strong>Pointerolle</strong> ou <strong>pointe</strong></td><td>Dégrossissage par éclats</td><td>Piqûres irrégulières</td></tr>\n<tr><td><strong>Gradine</strong> (ciseau à dents)</td><td>Dressage intermédiaire</td><td>Stries parallèles fines</td></tr>\n<tr><td><strong>Boucharde</strong></td><td>Finition des pierres dures</td><td>Surface piquetée régulière</td></tr>\n<tr><td><strong>Laie</strong> (marteau taillant, à dents pour la laie brettelée)</td><td>Dressage et finition des pierres tendres et fermes</td><td>Stries obliques caractéristiques</td></tr>\n<tr><td><strong>Ripe</strong> et <strong>chemin de fer</strong></td><td>Dressage final des pierres tendres</td><td>Surface finement rayée</td></tr>\n</tbody>\n</table>\n<p>La <strong>finition</strong> du parement fait partie de l'identité d'une façade : layée, bouchardée, ciselée, polie. Une pierre neuve doit recevoir la même finition que ses voisines anciennes ; une pierre sciée laissée brute de sciage, lisse et uniforme, se repère immédiatement dans un parement ancien.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la taille, le sciage et le ponçage de la pierre produisent des poussières de silice ou de calcaire. Les outils électroportatifs doivent être équipés d'une aspiration à la source, et l'opérateur porter une protection respiratoire adaptée ainsi que des lunettes contre les éclats.</div>"
      },
      {
       "titre": "Conserver, réparer ou remplacer ?",
       "contenu": "<p>Face à une pierre altérée, le choix de l'intervention dépend de la profondeur de l'altération, de la position de la pierre et de son rôle. Du plus léger au plus lourd :</p>\n<table>\n<thead><tr><th>Intervention</th><th>Principe</th><th>Cas d'emploi</th></tr></thead>\n<tbody>\n<tr><td><strong>Conservation en l'état</strong></td><td>Nettoyage doux, éventuellement consolidation</td><td>Altération superficielle, sans évolution rapide</td></tr>\n<tr><td><strong>Ragréage</strong> (mortier de réparation)</td><td>Reconstitution d'un volume manquant avec un mortier de chaux et de poudre de pierre, appliqué en couches sur armature si nécessaire</td><td>Épaufrures, petites lacunes peu profondes</td></tr>\n<tr><td><strong>Incrustation</strong> (ou greffe de pierre)</td><td>Remplacement d'une partie seulement de la pierre par un morceau de pierre neuve, collé ou scellé</td><td>Altération localisée sur une partie de la pierre</td></tr>\n<tr><td><strong>Refouillement et remplacement en tiroir</strong></td><td>Retrait de la pierre sur une profondeur partielle et pose d'une pierre neuve de faible épaisseur, appelée <strong>pierre en tiroir</strong> ou placage épais</td><td>Pierre altérée en surface sur toute sa face, queue saine</td></tr>\n<tr><td><strong>Remplacement complet</strong></td><td>Dépose et repose d'une pierre neuve de même dimensions</td><td>Pierre fendue, très altérée, ou ayant un rôle structurel</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une façade protégée, chaque pierre à remplacer est repérée sur l'élévation et validée par le maître d'œuvre. L'entreprise ne remplace pas de pierres supplémentaires sans accord, même si elles lui paraissent abîmées : elle les signale et attend la décision.</div>"
      },
      {
       "titre": "Remplacer une pierre de taille",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> étapes du remplacement d'une pierre de parement. 1. <strong>Relever</strong> la pierre : dimensions, hauteur d'assise, profil éventuel, finition, et faire le panneau ou le gabarit. 2. <strong>Commander</strong> la pierre neuve dans une pierre compatible, avec marquage du lit de carrière, en ajoutant quelques millimètres de surépaisseur en parement si la finition se fait en place. 3. <strong>Étayer</strong> si nécessaire (pierre d'une plate-bande, d'un arc, ou soutenant une charge) : on reporte la charge des pierres supérieures avant d'enlever celle du dessous. 4. <strong>Déposer</strong> la pierre altérée en dégarnissant ses joints et en la découpant au besoin en plusieurs morceaux, sans ébranler les voisines. 5. <strong>Nettoyer</strong> la cavité, humidifier. 6. <strong>Poser</strong> la pierre neuve sur cales (en bois ou en plomb) et sur un lit de mortier de chaux, la régler en alignement et en aplomb avec ses voisines. 7. <strong>Ficher</strong> les joints : remplir le joint de lit supérieur, souvent impossible à bourrer directement, par un mortier fluide ou un coulis introduit avec une fiche. 8. <strong>Finir</strong> : retirer les cales visibles, jointoyer, réaliser la finition de surface (layage, ragrément d'arêtes) en harmonie avec le parement.</div>\n<p>La pierre neuve est posée <strong>sur son lit</strong>, avec un joint de même épaisseur que les joints anciens voisins. Si les pierres anciennes ont reculé par usure, on ne pose pas la pierre neuve en saillie au nu d'origine théorique : on l'aligne sur le nu actuel du parement, sauf prescription contraire, pour éviter une pierre en surplomb qui recevrait l'eau de ruissellement.</p>"
      },
      {
       "titre": "Dégarnissage et nettoyage des parements",
       "contenu": "<p>Le <strong>nettoyage</strong> d'une façade en pierre doit retirer les salissures sans abîmer l'épiderme de la pierre, appelé <strong>calcin</strong> sur les calcaires : une couche superficielle légèrement durcie qui protège la pierre. Les principales techniques sont :</p>\n<ul>\n<li>le lavage à l'eau à basse pression ou la <strong>nébulisation</strong> (brouillard d'eau prolongé qui ramollit les croûtes) ;</li>\n<li>le <strong>gommage</strong> par projection à faible pression d'un abrasif très fin, réglé sur un essai ;</li>\n<li>les <strong>compresses</strong> ou pâtes de nettoyage appliquées puis retirées ;</li>\n<li>le nettoyage par <strong>laser</strong>, réservé aux sculptures et pierres fragiles.</li>\n</ul>\n<p>Le <strong>sablage</strong> à forte pression et le brossage métallique sont proscrits sur les pierres tendres : ils détruisent le calcin et les traces d'outils, et rendent la pierre plus poreuse et plus vulnérable.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> tout procédé de nettoyage est d'abord testé sur une petite zone discrète, validée par le maître d'œuvre. Un nettoyage trop agressif est irréversible : la matière enlevée ne revient pas.</div>"
      },
      {
       "titre": "Quantifier une intervention sur parement",
       "contenu": "<p>Le métré d'une restauration de parement se fait à partir de l'élévation et du repérage pierre à pierre. On compte :</p>\n<ul>\n<li>les pierres à remplacer, avec leur volume (longueur × hauteur d'assise × profondeur ou queue) ;</li>\n<li>les incrustations, souvent au décimètre cube ou à l'unité ;</li>\n<li>les ragréages, en décimètres carrés ou à l'unité selon leur importance ;</li>\n<li>les joints à dégarnir et refaire, en m<sup>2</sup> de parement ou en mètres linéaires de joints.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> volume de pierre et masse à approvisionner. Remplacement de 6 pierres de 0,80 m × 0,32 m (hauteur d'assise) × 0,25 m de queue, et de 4 pierres de 0,60 m × 0,32 m × 0,25 m. 1. Volume du premier lot : 6 × 0,80 × 0,32 × 0,25 = 0,384 m<sup>3</sup>. 2. Volume du second lot : 4 × 0,60 × 0,32 × 0,25 = 0,192 m<sup>3</sup>. 3. Volume total posé : 0,576 m<sup>3</sup>. 4. Volume de blocs à commander avec 10 % de surépaisseur de taille : 0,576 × 1,10 ≈ 0,63 m<sup>3</sup>. 5. Masse avec une pierre de 2 200 kg/m<sup>3</sup> : 0,63 × 2 200 ≈ 1 390 kg, à prévoir pour le levage et le stockage (la palette et l'échafaudage doivent supporter cette charge, répartie).</div>\n<p>On n'oublie pas les quantités annexes : mortier de pose et de jointoiement, cales, agrafes inox si la pierre doit être liée au mur, étaiement, protection des parements voisins.</p>"
      }
     ],
     "points_cles": [
      "L'appareil (moellons bruts, assises réglées, pierre de taille, mixte) caractérise un mur.",
      "Faces d'une pierre de taille : parement, lit de dessus, lit de pose, joints, queue.",
      "Carreaux et boutisses alternent pour lier le parement au mur ; les joints verticaux sont croisés.",
      "Une pierre neuve reçoit la même finition (layée, bouchardée, ciselée) que le parement ancien.",
      "De la plus légère à la plus lourde : conservation, ragréage, incrustation, pierre en tiroir, remplacement.",
      "Remplacer une pierre : relever, commander, étayer, déposer, nettoyer, poser sur cales, ficher, finir.",
      "Le nettoyage préserve le calcin : sablage agressif et brosse métallique sont proscrits sur pierre tendre.",
      "Chaque procédé de nettoyage est testé sur une zone d'essai validée."
     ],
     "lexique": [
      {
       "terme": "Appareil",
       "def": "Manière dont les pierres sont taillées et disposées dans un mur."
      },
      {
       "terme": "Assise",
       "def": "Rangée horizontale de pierres dans un mur."
      },
      {
       "terme": "Carreau",
       "def": "Pierre posée avec sa grande face en parement et une faible profondeur."
      },
      {
       "terme": "Lit de pose",
       "def": "Face inférieure d'une pierre, qui repose sur l'assise inférieure."
      },
      {
       "terme": "Queue",
       "def": "Partie arrière d'une pierre engagée dans l'épaisseur du mur."
      },
      {
       "terme": "Laie",
       "def": "Marteau taillant, parfois à dents, utilisé pour dresser les pierres tendres et fermes."
      },
      {
       "terme": "Boucharde",
       "def": "Marteau à pointes pyramidales donnant une surface piquetée."
      },
      {
       "terme": "Ragréage",
       "def": "Reconstitution d'un manque de pierre au mortier de réparation."
      },
      {
       "terme": "Incrustation",
       "def": "Remplacement d'une partie de pierre par un morceau de pierre neuve."
      },
      {
       "terme": "Ficher",
       "def": "Remplir de mortier un joint difficile d'accès, notamment le joint supérieur d'une pierre posée."
      },
      {
       "terme": "Calcin",
       "def": "Couche superficielle durcie d'une pierre calcaire, qui la protège."
      }
     ]
    },
    {
     "id": "bipb-a-enduits-joints",
     "titre": "Enduits, rejointoiements et badigeons à la chaux",
     "niveau": "1re-Tle",
     "options": [
      "a"
     ],
     "duree": 45,
     "objectifs": [
      "Choisir entre rejointoiement, enduit à pierre vue et enduit couvrant selon le bâti",
      "Décrire la constitution d'un enduit traditionnel en trois couches",
      "Réaliser les étapes d'un dégarnissage et d'un rejointoiement à la chaux",
      "Connaître les finitions traditionnelles d'enduit et les badigeons",
      "Calculer les quantités de mortier et de matériaux d'un enduit"
     ],
     "sections": [
      {
       "titre": "Le rôle des enduits et des joints",
       "contenu": "<p>Sur un mur ancien, l'<strong>enduit</strong> et les <strong>joints</strong> ne sont pas seulement décoratifs. Ils protègent la maçonnerie de la pluie, régulent les échanges d'humidité et participent à l'aspect patrimonial de la façade. Sur la plupart des murs en moellons, l'enduit est d'origine : les moellons n'étaient pas faits pour rester apparents. Le « décroûtage » des façades pour faire apparaître les pierres, à la mode dans la seconde moitié du XX<sup>e</sup> siècle, a souvent exposé des maçonneries fragiles aux intempéries.</p>\n<p>On distingue trois grands types de traitement de façade :</p>\n<table>\n<thead><tr><th>Traitement</th><th>Description</th><th>Murs concernés</th></tr></thead>\n<tbody>\n<tr><td><strong>Rejointoiement</strong></td><td>Les joints sont refaits, le parement reste entièrement visible</td><td>Pierre de taille, briques, moellons équarris prévus pour être vus</td></tr>\n<tr><td><strong>Enduit à pierre vue</strong> (ou à « pierres vues »)</td><td>L'enduit couvre les joints et le pourtour des moellons, seules les têtes des pierres affleurent</td><td>Murs de moellons de qualité intermédiaire, bâti rural</td></tr>\n<tr><td><strong>Enduit couvrant</strong></td><td>L'enduit recouvre entièrement la maçonnerie, les encadrements et chaînes en pierre de taille restant apparents</td><td>Murs de moellons bruts, bâti urbain et bourgeois</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le joint et l'enduit doivent toujours être <strong>moins durs et au moins aussi perméables</strong> que la pierre ou la brique. C'est le joint qui doit s'user et être refait périodiquement, pas la pierre.</div>"
      },
      {
       "titre": "Dégarnir et rejointoyer",
       "contenu": "<p>Le <strong>dégarnissage</strong> consiste à retirer le mortier de joint dégradé ou inadapté (joint ciment) sur une profondeur suffisante, en général au moins deux fois la largeur du joint et jusqu'à trouver un mortier sain, sans épaufrer les arêtes des pierres.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rejointoiement d'un parement à la chaux. 1. Dégarnir les joints à la main (ciseau, crochet) ou avec un outil mécanique à faible puissance muni d'une aspiration, en préservant les arêtes. 2. Dépoussiérer par brossage doux et soufflage à faible pression ou aspiration. 3. Humidifier le support à refus la veille, puis à nouveau juste avant, sans le saturer. 4. Remplir les joints profonds en plusieurs passes successives (de 1 à 2 cm chacune), en serrant le mortier au fer à joint. 5. Pour la dernière passe, garnir le joint et le serrer légèrement en retrait ou au nu de la pierre selon le profil prescrit. 6. Lorsque le mortier a « tiré » (raffermi), le brosser ou l'éponger pour faire apparaître le grain du sable et dégager les arêtes. 7. Protéger du soleil, du vent et de la pluie, et humidifier pendant plusieurs jours.</div>\n<p>Le <strong>profil du joint</strong> fait partie de l'aspect de la façade : joint plat au nu de la pierre, joint légèrement en retrait, joint « beurré » débordant légèrement sur des pierres aux arêtes usées. On évite les joints creux profonds, qui retiennent l'eau, et les joints en relief rubanés (« joints ciment saillants ») étrangers au bâti ancien.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la disqueuse utilisée pour dégarnir des joints minces élargit les joints, entaille les pierres et produit une grande quantité de poussières de silice. On la réserve aux joints très durs et larges, avec aspiration et protection respiratoire, et après accord du maître d'œuvre.</div>"
      },
      {
       "titre": "L'enduit traditionnel en trois couches",
       "contenu": "<p>Un enduit traditionnel à la chaux est généralement appliqué en <strong>trois couches</strong> successives, de plus en plus fines et de moins en moins dosées en liant :</p>\n<table>\n<thead><tr><th>Couche</th><th>Rôle</th><th>Épaisseur indicative</th><th>Caractéristiques</th></tr></thead>\n<tbody>\n<tr><td><strong>Gobetis</strong> (couche d'accrochage)</td><td>Assurer l'adhérence au support</td><td>Quelques millimètres, discontinu</td><td>Mortier fluide, plus riche en chaux, projeté vigoureusement, laissé rugueux</td></tr>\n<tr><td><strong>Corps d'enduit</strong></td><td>Dresser le mur, assurer l'imperméabilisation et l'épaisseur</td><td>De 15 à 20 mm environ, en une ou deux passes</td><td>Sable à granulométrie étalée, dosage moyen, serré et dressé à la règle ou laissé suivre le mur</td></tr>\n<tr><td><strong>Couche de finition</strong></td><td>Donner l'aspect, la couleur et la texture</td><td>De 5 à 7 mm environ</td><td>Sable plus fin, dosage plus faible, finition choisie</td></tr>\n</tbody>\n</table>\n<p>Chaque couche est appliquée sur la précédente lorsqu'elle a suffisamment durci, mais encore humide et rugueuse : le délai dépend de la chaux, du temps et du support, de quelques jours à une semaine ou plus. Les épaisseurs exactes, les dosages et les délais sont fixés par les prescriptions du dossier et les fiches techniques.</p>\n<p>Sur le bâti ancien, l'enduit <strong>suit le mur</strong> : on ne cherche pas une planéité parfaite qui imposerait des surépaisseurs importantes dans les creux, mais un aspect régulier qui épouse les ondulations naturelles du mur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les entreprises de restauration réalisent les enduits à la main (truelle, taloche) ou à la machine à projeter. La projection mécanique augmente le rendement mais exige un réglage précis de la consistance du mortier et un serrage soigné après projection.</div>"
      },
      {
       "titre": "Les finitions et les badigeons",
       "contenu": "<p>La finition donne son caractère à la façade. Les principales finitions traditionnelles sont :</p>\n<ul>\n<li><strong>talochée</strong> : surface plane et légèrement grenue, obtenue à la taloche ;</li>\n<li><strong>brossée</strong> : enduit brossé après raffermissement pour faire ressortir le sable ;</li>\n<li><strong>grattée</strong> : la surface est grattée avec une règle à pointes ou une lame après début de durcissement ;</li>\n<li><strong>jetée</strong> (ou « jeté truelle ») : mortier projeté et laissé brut, aspect rustique ;</li>\n<li><strong>lissée</strong> : surface fermée, plutôt pour des enduits fins et des encadrements.</li>\n</ul>\n<p>Le <strong>badigeon</strong> est une peinture traditionnelle à base de chaux aérienne diluée dans l'eau, éventuellement teintée par des <strong>pigments</strong> minéraux (terres, oxydes). Le <strong>lait de chaux</strong> est un badigeon très dilué. Appliqués en plusieurs couches fines sur un enduit encore frais ou humidifié, ils carbonatent avec lui et protègent la surface. Ils servent aussi à harmoniser une façade sur laquelle des réparations ont été faites, et à réaliser des décors (faux appareils, encadrements peints).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une peinture filmogène (acrylique, pliolite) ou un revêtement plastique épais appliqué sur un enduit à la chaux ferme les pores et piège l'humidité ; il finit par cloquer et se décoller. Sur le bâti ancien, on n'emploie que des badigeons de chaux ou des peintures minérales perméables à la vapeur.</div>"
      },
      {
       "titre": "Préparer le support et soigner les points singuliers",
       "contenu": "<p>Avant l'enduit, le support est préparé :</p>\n<ul>\n<li>retrait des enduits inadaptés (ciment, plâtre extérieur dégradé) et des parties non adhérentes ;</li>\n<li>dégarnissage et regarnissage des joints creux ;</li>\n<li><strong>calage</strong> des grands creux avec des éclats de pierre ou de terre cuite noyés dans le mortier (« garnissage »), pour éviter les surépaisseurs d'enduit ;</li>\n<li>traitement des pièces de bois apparentes dans la maçonnerie (linteaux, abouts) : on ne les enferme pas sous un enduit sans précaution ;</li>\n<li>humidification du support.</li>\n</ul>\n<p>Les <strong>points singuliers</strong> sont les zones où les enduits se dégradent le plus vite : arrêts sur encadrements de baies, angles, soubassements, raccords sous les corniches et sous les appuis. Les règles de l'art imposent par exemple :</p>\n<ul>\n<li>d'arrêter l'enduit au nu ou légèrement en retrait des encadrements en pierre de taille, sans les recouvrir ;</li>\n<li>de ne pas descendre l'enduit jusqu'au sol, mais de prévoir en pied un enduit adapté ou un soubassement qui ne remonte pas l'humidité ;</li>\n<li>de protéger les tablettes et couronnements par une pente et un débord.</li>\n</ul>"
      },
      {
       "titre": "Quantifier un enduit",
       "contenu": "<p>Les surfaces d'enduit se mesurent en m<sup>2</sup> à partir des élévations, en déduisant les baies et les éléments non enduits (encadrements en pierre de taille, chaînes d'angle) selon les règles de métré prévues au marché. Les quantités de mortier se calculent à partir des épaisseurs moyennes de chaque couche, majorées d'un coefficient tenant compte des irrégularités du support et des pertes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> quantités pour 120 m<sup>2</sup> d'enduit trois couches. Épaisseurs moyennes : gobetis 5 mm (couverture partielle, compter 0,005 m), corps 18 mm, finition 6 mm. 1. Épaisseur totale : 0,005 + 0,018 + 0,006 = 0,029 m. 2. Volume de mortier théorique : 120 × 0,029 = 3,48 m<sup>3</sup>. 3. Majoration de 20 % pour un mur ancien irrégulier et les pertes : 3,48 × 1,20 ≈ 4,2 m<sup>3</sup>. 4. Avec un dosage moyen de 350 kg de chaux par m<sup>3</sup> de sable, et en considérant qu'1 m<sup>3</sup> de sable donne environ 1 m<sup>3</sup> de mortier frais (les fines du liant comblant les vides), il faut environ 4,2 m<sup>3</sup> de sable et 4,2 × 350 ≈ 1 470 kg de chaux, soit 59 sacs de 25 kg, arrondis à 60. Les rapports exacts sont précisés dans les fiches techniques et ajustés après la planche d'essai.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur le bâti ancien, on travaille toujours d'abord sur une <strong>planche d'essai</strong> (panneau témoin) validée par le maître d'œuvre : composition, couleur, finition. Les quantités définitives se calent ensuite sur cet essai.</div>"
      }
     ],
     "points_cles": [
      "Rejointoiement, enduit à pierre vue et enduit couvrant correspondent à des murs différents.",
      "Le joint et l'enduit restent moins durs et au moins aussi perméables que la maçonnerie.",
      "Dégarnir à la main de préférence, sur au moins deux fois la largeur du joint, puis garnir en passes successives.",
      "Enduit traditionnel : gobetis, corps d'enduit, finition, de moins en moins dosés en chaux.",
      "L'enduit suit le mur ; les délais entre couches sont respectés.",
      "Finitions : talochée, brossée, grattée, jetée, lissée ; badigeons et laits de chaux protègent et harmonisent.",
      "Peintures filmogènes et revêtements plastiques sont incompatibles avec un enduit à la chaux.",
      "Les quantités d'enduit se calculent par couche avec une majoration pour les irrégularités, après planche d'essai."
     ],
     "lexique": [
      {
       "terme": "Dégarnissage",
       "def": "Retrait du mortier de joint dégradé ou inadapté avant rejointoiement."
      },
      {
       "terme": "Rejointoiement",
       "def": "Réfection des joints d'une maçonnerie dont le parement reste apparent."
      },
      {
       "terme": "Enduit à pierre vue",
       "def": "Enduit couvrant les joints et le pourtour des moellons, en laissant affleurer leurs têtes."
      },
      {
       "terme": "Gobetis",
       "def": "Première couche d'enduit, fluide et rugueuse, qui assure l'accrochage."
      },
      {
       "terme": "Corps d'enduit",
       "def": "Couche intermédiaire épaisse qui dresse le mur et assure la protection."
      },
      {
       "terme": "Couche de finition",
       "def": "Dernière couche d'enduit donnant aspect, couleur et texture."
      },
      {
       "terme": "Badigeon",
       "def": "Peinture à base de chaux aérienne diluée, éventuellement pigmentée."
      },
      {
       "terme": "Lait de chaux",
       "def": "Badigeon très dilué appliqué en couches fines."
      },
      {
       "terme": "Peinture filmogène",
       "def": "Peinture formant un film continu peu perméable à la vapeur d'eau."
      },
      {
       "terme": "Planche d'essai",
       "def": "Panneau d'enduit témoin réalisé pour valider composition, couleur et finition."
      }
     ]
    },
    {
     "id": "bipb-a-terre-brique",
     "titre": "Restaurer les maçonneries de terre crue et de brique",
     "niveau": "Tle",
     "options": [
      "a"
     ],
     "duree": 45,
     "objectifs": [
      "Diagnostiquer les désordres propres aux murs en terre crue",
      "Décrire les techniques de réparation d'un mur en pisé, en bauge ou en adobe",
      "Restaurer un remplissage de pan de bois en torchis ou en briques",
      "Identifier les appareils de brique et réaliser un remplacement de briques",
      "Choisir les enduits et protections compatibles avec la terre crue"
     ],
     "sections": [
      {
       "titre": "Les désordres des murs en terre crue",
       "contenu": "<p>Un mur en terre crue en bon état est très durable : de nombreuses maisons en pisé ou en bauge ont plus de deux siècles. Ses ennemis sont l'<strong>eau liquide</strong> et les <strong>interventions inadaptées</strong>. Les désordres typiques sont :</p>\n<table>\n<thead><tr><th>Désordre</th><th>Cause habituelle</th></tr></thead>\n<tbody>\n<tr><td>Pied de mur érodé, creusé en « cul de bouteille »</td><td>Rejaillissement de la pluie, soubassement trop bas, sol extérieur rehaussé, enduit ciment en pied qui piège l'eau</td></tr>\n<tr><td>Effondrement partiel, ventre</td><td>Humidification prolongée qui rend la terre plastique (fuite de gouttière, remontées)</td></tr>\n<tr><td>Ravinement du haut du mur</td><td>Débord de toit insuffisant, couverture défaillante, couronnement non protégé</td></tr>\n<tr><td>Fissures verticales</td><td>Retrait, tassement, absence de liaison aux angles, ouverture créée sans précaution</td></tr>\n<tr><td>Décollement d'enduit ciment</td><td>Incompatibilité : l'enduit rigide et peu perméable se décolle et retient l'eau derrière lui</td></tr>\n<tr><td>Trous, galeries</td><td>Rongeurs, insectes, scellements arrachés</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un mur en terre gorgé d'eau peut perdre brutalement sa résistance. Un ventre qui se forme, une zone qui s'affaisse ou un enduit qui se gonfle en pied de mur après des pluies sont des signes de danger : on étaie et on supprime l'arrivée d'eau en urgence.</div>"
      },
      {
       "titre": "Réparer un mur en pisé, en bauge ou en adobe",
       "contenu": "<p>Le principe général est de réparer la terre <strong>avec de la terre</strong>, de composition proche de celle du mur, ou avec des matériaux compatibles (briques de terre crue, briques de terre cuite tendres, pierres liées à la terre ou à la chaux aérienne).</p>\n<ul>\n<li><strong>Petites lacunes</strong> et érosions superficielles : regarnissage avec un mortier de terre éventuellement amendé de chaux aérienne et de fibres, appliqué en couches sur un support humidifié et préparé (piquetage, clous ou chevilles d'accroche pour les épaisseurs importantes).</li>\n<li><strong>Lacunes profondes</strong> : remplissage par des <strong>adobes</strong> (briques de terre crue) ou des briques de terre cuite tendres maçonnées au mortier de terre, puis enduit.</li>\n<li><strong>Reprise d'un pied de mur</strong> : reconstitution par tronçons successifs d'un soubassement en pierre ou en brique, en travaillant par petites longueurs (« en tiroir ») pour ne jamais affaiblir le mur sur une grande longueur.</li>\n<li><strong>Reconstruction d'un pan effondré</strong> : en pisé banché ou en bauge selon la technique d'origine, par des entreprises qui maîtrisent ces techniques.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> reprise en tiroir d'un pied de mur en pisé sur 6 m de longueur. 1. Supprimer la cause (enduit ciment, sol rehaussé, gouttière). 2. Diviser la longueur en tronçons d'environ 0,80 à 1 m, numérotés 1, 3, 5, puis 2, 4, 6 (on ne travaille jamais deux tronçons voisins en même temps). 3. Pour chaque tronçon : étayer si nécessaire, dégager la terre dégradée jusqu'à la terre saine, maçonner le nouveau soubassement en pierre ou brique au mortier de chaux, bourrer soigneusement la jonction supérieure avec la terre en place (par fichage au mortier de terre ou de chaux). 4. Attendre le durcissement avant d'attaquer les tronçons intermédiaires. 5. Enduire le soubassement avec un enduit compatible et rétablir les abords drainants.</div>"
      },
      {
       "titre": "Restaurer un remplissage de pan de bois",
       "contenu": "<p>Dans un <strong>pan de bois</strong>, les remplissages (hourdis) ne portent pas : c'est l'ossature bois qui porte. Le remplissage assure la fermeture, l'isolation et le contreventement partiel. Les principaux remplissages sont :</p>\n<ul>\n<li>le <strong>torchis</strong> sur <strong>éclisses</strong> ou <strong>palançons</strong> (baguettes de bois fendu) ou sur clayonnage tressé, logés dans des rainures des poteaux ;</li>\n<li>la <strong>brique</strong> posée à plat, de chant ou en motifs décoratifs (en épi, en damier) ;</li>\n<li>les <strong>moellons</strong> ou le <strong>plâtre et plâtras</strong> dans certaines régions.</li>\n</ul>\n<p>La restauration commence toujours par l'ossature : on répare les bois (par le charpentier) avant de reprendre les remplissages. Pour un torchis, on prépare un mélange de terre argileuse et de fibres (paille hachée, foin), que l'on fait parfois « pourrir » quelques jours pour améliorer sa plasticité, puis on l'applique en boules serrées autour des éclisses, en le compactant. Après séchage et retrait, on comble les fissures et on enduit à la chaux aérienne ou à la terre.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur un pan de bois destiné à rester apparent, l'enduit du remplissage s'arrête légèrement en retrait du nu des bois et forme un petit chanfrein, pour que l'eau qui ruisselle sur le bois ne s'infiltre pas entre le bois et l'enduit. Les bois ne sont jamais recouverts d'enduit ciment ni de joint mastic étanche, qui piègent l'eau contre le bois.</div>"
      },
      {
       "titre": "Les maçonneries de brique",
       "contenu": "<p>Une brique posée avec sa longueur dans le sens du mur est une <strong>panneresse</strong> ; posée avec sa longueur dans l'épaisseur du mur, une <strong>boutisse</strong> ; posée sur sa petite face verticale, elle est posée <strong>de chant</strong>. L'<strong>appareil</strong> combine ces positions :</p>\n<table>\n<thead><tr><th>Appareil</th><th>Disposition</th></tr></thead>\n<tbody>\n<tr><td>Appareil en panneresses</td><td>Toutes les briques en panneresse, joints décalés d'une demi-brique : mur d'une demi-brique d'épaisseur (cloisons, parements)</td></tr>\n<tr><td>Appareil anglais</td><td>Une assise de panneresses, une assise de boutisses, en alternance</td></tr>\n<tr><td>Appareil flamand</td><td>Dans chaque assise, alternance d'une panneresse et d'une boutisse</td></tr>\n<tr><td>Appareil en boutisses</td><td>Toutes les briques en boutisse : murs d'une brique d'épaisseur</td></tr>\n</tbody>\n</table>\n<p>Pour remplacer des briques dégradées, on dégarnit les joints autour de la brique, on la retire par morceaux sans ébranler les voisines, on nettoie et humidifie la cavité, puis on pose une brique de format, de teinte et de dureté compatibles, en garnissant entièrement les joints. Les briques de récupération sont triées, nettoyées de leur ancien mortier et sonnées.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> retourner une brique dont la face extérieure est dégradée pour présenter sa face intérieure saine est une technique parfois pratiquée, mais la face intérieure, moins cuite ou moins résistante, peut se dégrader rapidement en parement. On ne l'emploie que sur prescription.</div>"
      },
      {
       "titre": "Enduire et protéger la terre crue",
       "contenu": "<p>Les enduits sur terre crue doivent être <strong>souples, très perméables et capillaires</strong>, pour que le mur sèche facilement. Deux familles conviennent :</p>\n<ul>\n<li>les <strong>enduits de terre</strong>, éventuellement fibrés, surtout à l'intérieur ou sous débord de toit important ;</li>\n<li>les <strong>enduits à la chaux aérienne</strong> ou faiblement hydraulique (NHL 2), parfois avec une première couche à la terre ou un mélange terre-chaux pour l'accrochage.</li>\n</ul>\n<p>L'accrochage sur la terre se prépare par un piquetage de la surface, une légère humidification, et pour les surfaces très lisses par l'incrustation d'éclats ou la pose d'un treillis en fibres naturelles ou de lattis. Les épaisseurs sont modérées, et chaque couche sèche avant la suivante.</p>\n<p>La protection d'un mur en terre est d'abord <strong>architecturale</strong> : bon débord de toit, soubassement suffisamment haut (souvent au moins 40 à 60 cm au-dessus du sol), gouttières en état, sol drainant au pied du mur. Les anciens résumaient ces règles ainsi : « de bonnes bottes et un bon chapeau ».</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur la terre crue, on proscrit le ciment, les enduits hydrauliques durs, les peintures filmogènes et les hydrofuges de surface. Toute réparation doit pouvoir sécher rapidement.</div>"
      },
      {
       "titre": "Organiser un chantier en terre crue",
       "contenu": "<p>Un chantier de restauration en terre crue s'organise autrement qu'un chantier de maçonnerie à la chaux ou au ciment :</p>\n<ul>\n<li><strong>La saison</strong> : la terre sèche lentement et craint le gel lorsqu'elle est humide. On programme les reconstructions et les enduits épais à la belle saison, avec un délai de séchage suffisant avant l'hiver.</li>\n<li><strong>Le choix de la terre</strong> : on réutilise de préférence la terre du mur déposée (après élimination des parties souillées ou salines) ou une terre locale proche, après des <strong>essais</strong> : test du cigare, briquettes d'essai séchées pour observer le retrait et la fissuration, petits panneaux d'enduit.</li>\n<li><strong>La préparation</strong> : la terre est tamisée, mouillée, malaxée (à la main, aux pieds, au malaxeur ou à la bétonnière) avec les fibres, et parfois laissée reposer pour améliorer sa plasticité.</li>\n<li><strong>La protection</strong> : les ouvrages frais sont protégés de la pluie et du soleil direct, mais ventilés pour sécher ; une bâche plaquée contre un mur en terre frais empêche son séchage.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer le volume de terre pour un regarnissage. Lacune de 1,20 m × 0,80 m sur une profondeur moyenne de 12 cm : volume 1,20 × 0,80 × 0,12 = 0,115 m<sup>3</sup>. La terre perd du volume en se compactant et en séchant (retrait) : on prévoit une majoration de l'ordre de 20 à 30 %, soit environ 0,15 m<sup>3</sup> de terre préparée, et des fibres en proportion de la recette retenue après essai.</div>"
      }
     ],
     "points_cles": [
      "Les murs en terre crue craignent l'eau liquide et les interventions inadaptées (enduit ciment, sol rehaussé).",
      "Un ventre ou un affaissement d'un mur en terre humide est un danger : étayer et supprimer l'eau.",
      "On répare la terre avec de la terre ou des matériaux compatibles (adobes, briques tendres, chaux aérienne).",
      "Un pied de mur se reprend en tiroir par tronçons non contigus.",
      "Dans un pan de bois, on répare l'ossature avant les remplissages ; l'enduit s'arrête en retrait du nu des bois.",
      "Panneresse, boutisse et brique de chant se combinent en appareils (anglais, flamand…).",
      "Les briques de remplacement sont compatibles en format, teinte et dureté.",
      "Protection de la terre : soubassement, débord de toit, gouttières, sol drainant."
     ],
     "lexique": [
      {
       "terme": "Adobe",
       "def": "Brique de terre crue moulée et séchée à l'air."
      },
      {
       "terme": "Reprise en tiroir",
       "def": "Réfection d'un mur par petits tronçons non contigus pour ne pas l'affaiblir."
      },
      {
       "terme": "Hourdis",
       "def": "Remplissage entre les pièces d'un pan de bois ou d'un plancher."
      },
      {
       "terme": "Éclisse",
       "def": "Baguette de bois fendu servant de support au torchis dans un pan de bois."
      },
      {
       "terme": "Clayonnage",
       "def": "Treillis de branches souples tressées servant de support au torchis."
      },
      {
       "terme": "Panneresse",
       "def": "Brique posée avec sa longueur dans le sens du mur."
      },
      {
       "terme": "Brique de chant",
       "def": "Brique posée sur sa petite face longitudinale."
      },
      {
       "terme": "Appareil flamand",
       "def": "Appareil de briques alternant panneresses et boutisses dans chaque assise."
      },
      {
       "terme": "Appareil anglais",
       "def": "Appareil de briques alternant une assise de panneresses et une assise de boutisses."
      },
      {
       "terme": "Soubassement",
       "def": "Partie basse d'un mur, au contact du sol, souvent en matériau plus résistant à l'eau."
      }
     ]
    },
    {
     "id": "bipb-a-consolidation-maconneries",
     "titre": "Consolider les maçonneries anciennes : coulis, agrafes, reprises et voûtes",
     "niveau": "Tle",
     "options": [
      "a"
     ],
     "duree": 50,
     "objectifs": [
      "Choisir une technique de consolidation adaptée au désordre structurel d'une maçonnerie",
      "Décrire la mise en œuvre d'un coulis d'injection à la chaux",
      "Réaliser le traitement d'une fissure par agrafage et regarnissage",
      "Expliquer les principes d'une reprise en sous-œuvre et d'une ouverture en mur porteur",
      "Connaître les étapes de la restauration d'un arc ou d'une voûte en maçonnerie"
     ],
     "sections": [
      {
       "titre": "Des désordres aux techniques de consolidation",
       "contenu": "<p>La <strong>consolidation</strong> regroupe les interventions qui rendent à une maçonnerie sa cohésion et sa capacité à porter. Elle intervient après le diagnostic structurel, une fois la cause du désordre supprimée ou stabilisée. Ses techniques sont prescrites par le maître d'œuvre, souvent sur étude d'un ingénieur ; le maçon doit savoir les exécuter et comprendre leur logique.</p>\n<table>\n<thead><tr><th>Désordre</th><th>Techniques de consolidation possibles</th></tr></thead>\n<tbody>\n<tr><td>Mur à blocage intérieur désagrégé, vides internes</td><td>Coulis d'injection à la chaux</td></tr>\n<tr><td>Fissure stabilisée traversant le mur</td><td>Regarnissage, agrafes, couture par pierres de liaison</td></tr>\n<tr><td>Mur qui déverse, angle qui s'ouvre</td><td>Tirants et ancres, chaînage, contreforts</td></tr>\n<tr><td>Tassement de fondation</td><td>Reprise en sous-œuvre, amélioration du drainage</td></tr>\n<tr><td>Arc ou voûte déformés</td><td>Cintrage, reprise de voussoirs, tirants, regarnissage de l'extrados</td></tr>\n<tr><td>Parement décollé du cœur du mur</td><td>Coulis, ancrages traversants, boutisses de liaison</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on ne consolide pas une maçonnerie dont la cause de désordre est encore active. Reboucher une fissure qui continue de s'ouvrir est inutile : elle réapparaîtra à côté.</div>"
      },
      {
       "titre": "Les coulis d'injection",
       "contenu": "<p>Beaucoup de murs anciens sont constitués de deux parements et d'un <strong>blocage</strong> intérieur de pierres et de mortier. Avec le temps, le mortier du blocage peut se désagréger et laisser des vides : le mur perd sa cohésion, les parements se décollent et bombent. Le <strong>coulis d'injection</strong> est un mortier très fluide, à base de chaux (souvent une chaux hydraulique naturelle ou un liant spécifique sans ciment) et de charges très fines, injecté dans les vides pour reconstituer la masse du mur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> injection d'un mur à blocage creux. 1. Repérer les zones creuses par sondage au marteau (son creux) et éventuellement par endoscopie. 2. Rejointoyer au préalable les parements, pour que le coulis ne s'échappe pas par les joints ouverts. 3. Percer des trous d'injection en quinconce, dans les joints de préférence, avec un maillage de l'ordre de 0,50 à 1 m selon la prescription, et y sceller des tubes (injecteurs). 4. Laver et humidifier l'intérieur du mur par les tubes, pour éviter que la maçonnerie sèche absorbe l'eau du coulis. 5. Injecter de bas en haut, à faible pression, par passes successives de hauteur limitée, en passant au tube supérieur dès que le coulis y apparaît. 6. Laisser durcir chaque passe avant d'injecter au-dessus, pour limiter la pression exercée sur les parements. 7. Retirer les tubes, reboucher et noter sur un relevé les quantités injectées par zone.</div>\n<p>La quantité de coulis absorbée renseigne sur le volume de vides. Une consommation très supérieure aux prévisions peut indiquer une fuite vers une cave ou un vide important : on arrête et on recherche la cause.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une injection à pression trop forte ou sur une trop grande hauteur d'un seul coup peut faire éclater un parement fragile : le coulis frais pousse comme un liquide lourd. On travaille par petites hauteurs, on surveille en permanence le parement, et on étaie au besoin.</div>"
      },
      {
       "titre": "Traiter une fissure : regarnissage, agrafes et couture",
       "contenu": "<p>Une fissure stabilisée se traite selon sa largeur et sa profondeur :</p>\n<ul>\n<li><strong>Fissure fine</strong> dans un enduit : simple reprise de l'enduit, avec un léger élargissement de la fissure pour bien accrocher le mortier.</li>\n<li><strong>Fissure de maçonnerie</strong> : dégarnissage des lèvres, nettoyage, humidification, puis <strong>regarnissage</strong> au mortier de chaux, avec calage d'éclats de pierre dans les parties larges et éventuellement injection de coulis en profondeur.</li>\n<li><strong>Fissure traversante</strong> sur un mur porteur : en plus du regarnissage, <strong>couture</strong> par remplacement de quelques pierres de part et d'autre de la fissure par des pierres plus longues qui chevauchent la fissure, ou par pose d'<strong>agrafes</strong> métalliques (acier inoxydable) scellées dans des saignées horizontales, perpendiculairement à la fissure.</li>\n</ul>\n<p>Les agrafes et goujons modernes sont en acier inoxydable ou en matériaux non corrodables, scellés au mortier de chaux ou avec un produit de scellement prescrit. On espace les agrafes en hauteur selon la prescription (souvent de l'ordre de 40 à 60 cm) et on les décale pour ne pas créer une nouvelle ligne de faiblesse.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les agrafes sont souvent noyées dans les joints horizontaux, puis recouvertes par le rejointoiement, pour rester invisibles en façade. Leur position est néanmoins reportée sur un relevé joint au DOE, pour que les intervenants futurs sachent qu'elles existent.</div>"
      },
      {
       "titre": "La reprise en sous-œuvre",
       "contenu": "<p>La <strong>reprise en sous-œuvre</strong> consiste à renforcer, approfondir ou élargir les fondations d'un mur existant, sans le démolir. Elle est nécessaire lorsque les fondations sont insuffisantes ou dégradées (tassement, affouillement, création d'un sous-sol à côté).</p>\n<p>La méthode traditionnelle procède par <strong>passes alternées</strong> : on creuse sous le mur un tronçon court (de l'ordre de 1 m), on réalise la nouvelle fondation (maçonnerie ou béton selon l'étude), on bourre soigneusement l'interface entre la fondation neuve et la maçonnerie existante pour qu'elle porte dès la remise en charge, puis on passe au tronçon suivant non contigu. On ne dégarnit jamais deux tronçons voisins en même temps.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> creuser sous un mur ancien est une opération à haut risque : effondrement de la fouille, chute du mur. Elle n'est réalisée que selon une étude, avec blindage de la fouille si nécessaire, étaiement, longueurs de passes respectées et surveillance du mur (témoins, repères). Personne ne travaille sous un mur en porte-à-faux.</div>\n<p>Il existe aussi des techniques modernes (micropieux, injections de résine expansive, longrines), réservées à des entreprises spécialisées. Sur le bâti ancien, le premier remède à un tassement reste souvent la suppression de sa cause : fuite de canalisation, arbre trop proche, absence de collecte des eaux pluviales.</p>"
      },
      {
       "titre": "Créer ou modifier une ouverture dans un mur porteur",
       "contenu": "<p>La création d'une baie dans un mur ancien porteur suit un ordre strict, sur étude et après autorisation (y compris d'urbanisme si l'aspect extérieur change) :</p>\n<ol>\n<li><strong>Étaiement</strong> : pose de chevalements (poutrelles traversant le mur au-dessus de la future baie, appuyées sur des étais de part et d'autre) ou étaiement des planchers ;</li>\n<li><strong>Saignée et pose du linteau</strong> : ouverture d'une saignée au-dessus de la future baie, en deux fois pour un mur épais (une moitié de l'épaisseur puis l'autre), pose du linteau sur des appuis préparés, bourrage serré au mortier entre le linteau et la maçonnerie supérieure ;</li>\n<li><strong>Durcissement</strong> du mortier de bourrage ;</li>\n<li><strong>Démolition</strong> de la maçonnerie sous le linteau ;</li>\n<li><strong>Reprise des tableaux</strong> (côtés de la baie) en pierre ou brique harpée, et de l'appui ;</li>\n<li><strong>Désétaiement</strong> progressif.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> charge sur un linteau, approche simplifiée. Dans un mur appareillé, la charge qui pèse réellement sur un linteau se limite souvent au poids d'un triangle de maçonnerie situé au-dessus de la baie (effet de voûte naturelle), à condition que la maçonnerie au-dessus soit saine et suffisamment haute. Exemple : baie de 1,20 m, mur de 0,50 m, γ = 22 kN/m<sup>3</sup>, triangle à 60° de hauteur environ 1,04 m. Aire du triangle : 1,20 × 1,04 / 2 = 0,62 m<sup>2</sup>. Charge : 0,62 × 0,50 × 22 ≈ 6,8 kN. Cette approche ne s'applique pas si un plancher, une poutre ou une baie se trouve juste au-dessus : le dimensionnement réel du linteau relève alors du bureau d'études.</div>"
      },
      {
       "titre": "Restaurer un arc ou une voûte",
       "contenu": "<p>Un arc ou une voûte dont des voussoirs ont glissé ou se sont dégradés se restaure en respectant leur fonctionnement en compression :</p>\n<ul>\n<li>on supprime d'abord la cause (appuis qui s'écartent, infiltration par l'extrados) ;</li>\n<li>on pose un <strong>cintre</strong> en bois qui épouse exactement l'intrados, réglé avec des coins de décintrement ;</li>\n<li>on remplace ou recale les voussoirs dégradés, en conservant les joints convergents vers le centre de l'arc, et on <strong>clave</strong> en dernier par la clé ou par le voussoir manquant, bien serré ;</li>\n<li>on regarnit les joints et, si nécessaire, on injecte un coulis dans les vides de l'extrados et des reins (parties situées au-dessus des retombées de l'arc) ;</li>\n<li>on <strong>décintre</strong> progressivement, en desserrant les coins, après durcissement du mortier, en surveillant l'arc.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un arc n'est stable qu'une fois fermé (clavé) et ses appuis immobiles. Le cintre et l'étaiement restent en place tant que le mortier n'a pas acquis assez de résistance ; le décintrement se fait lentement et symétriquement.</div>"
      }
     ],
     "points_cles": [
      "On ne consolide qu'après avoir supprimé ou stabilisé la cause du désordre.",
      "Le coulis à la chaux reconstitue la masse d'un mur à blocage creux ; on injecte de bas en haut, par petites hauteurs.",
      "Une fissure traversante stabilisée se regarnit et se coud par pierres longues ou agrafes inox.",
      "La reprise en sous-œuvre se fait par passes alternées non contiguës, sur étude.",
      "Créer une baie : étaiement, linteau posé et bourré, durcissement, démolition, tableaux, désétaiement.",
      "La charge sur un linteau peut se limiter à un triangle de maçonnerie si le mur au-dessus est sain.",
      "Un arc se restaure sur cintre, se clave en dernier et se décintre lentement après durcissement.",
      "La position des agrafes et renforts cachés est consignée dans le DOE."
     ],
     "lexique": [
      {
       "terme": "Consolidation",
       "def": "Intervention qui rend à une maçonnerie sa cohésion et sa capacité portante."
      },
      {
       "terme": "Blocage",
       "def": "Remplissage intérieur d'un mur entre deux parements, en pierres et mortier."
      },
      {
       "terme": "Coulis",
       "def": "Mortier très fluide injecté dans les vides d'une maçonnerie."
      },
      {
       "terme": "Injecteur",
       "def": "Tube scellé dans un trou par lequel on introduit le coulis."
      },
      {
       "terme": "Agrafe",
       "def": "Pièce métallique scellée qui relie deux parties de maçonnerie de part et d'autre d'une fissure."
      },
      {
       "terme": "Couture",
       "def": "Liaison des deux lèvres d'une fissure par des pierres longues ou des agrafes."
      },
      {
       "terme": "Reprise en sous-œuvre",
       "def": "Renforcement ou approfondissement des fondations d'un mur existant."
      },
      {
       "terme": "Chevalement",
       "def": "Étaiement formé de poutres traversant un mur et reposant sur des étais de part et d'autre."
      },
      {
       "terme": "Tableau",
       "def": "Face latérale d'une baie, dans l'épaisseur du mur."
      },
      {
       "terme": "Décintrement",
       "def": "Retrait progressif du cintre sous un arc ou une voûte achevés."
      },
      {
       "terme": "Reins",
       "def": "Parties d'un arc ou d'une voûte situées entre les retombées et la clé, au-dessus de l'extrados."
      }
     ]
    },
    {
     "id": "bipb-b-charpentes-traditionnelles",
     "titre": "Les charpentes traditionnelles : typologie et fonctionnement",
     "niveau": "1re",
     "options": [
      "b"
     ],
     "duree": 45,
     "objectifs": [
      "Distinguer les charpentes à chevrons formant fermes et les charpentes à fermes et pannes",
      "Nommer toutes les pièces d'une ferme et de son contreventement",
      "Identifier les principaux types de fermes et de combles",
      "Décrire les ouvrages particuliers : croupes, noues, lucarnes",
      "Relier la forme d'une charpente à son époque et à sa couverture"
     ],
     "sections": [
      {
       "titre": "Deux grandes familles de charpentes",
       "contenu": "<p>Les charpentes de toiture traditionnelles en France se rattachent à deux grands systèmes.</p>\n<p>Dans la charpente à <strong>chevrons formant fermes</strong>, chaque couple de chevrons, rapprochés (de l'ordre de 50 à 80 cm), constitue une petite ferme. Il n'y a pas de pannes : les chevrons portent directement les lattes ou voliges. Chaque couple est raidi par un <strong>entrait retroussé</strong> (entrait placé en hauteur), des <strong>jambettes</strong> et des <strong>aisseliers</strong> ; de place en place, une <strong>ferme maîtresse</strong> plus complète possède un entrait au pied. Le contreventement longitudinal est assuré par une <strong>sous-faîtière</strong> et des croix de Saint-André ou des liens. Ce système est caractéristique des grandes charpentes médiévales, souvent en chêne, avec une forte pente.</p>\n<p>Dans la charpente à <strong>fermes et pannes</strong>, des <strong>fermes</strong> espacées (souvent de 3 à 5 m) portent des <strong>pannes</strong> horizontales, qui portent elles-mêmes des <strong>chevrons</strong> plus légers et plus rapprochés. Ce système, qui se généralise à partir de la fin du Moyen Âge, économise le bois de forte section et permet des toitures moins pentues.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans une charpente à chevrons formant fermes, la charge se répartit sur toute la longueur des murs ; dans une charpente à fermes et pannes, elle se concentre au droit des fermes. Modifier une charpente revient à modifier la façon dont les murs sont chargés.</div>"
      },
      {
       "titre": "Les pièces d'une ferme à pannes",
       "contenu": "<p>Une ferme dite <strong>latine</strong> (ou ferme à poinçon) comprend les pièces suivantes, de bas en haut :</p>\n<table>\n<thead><tr><th>Pièce</th><th>Position</th><th>Rôle principal</th></tr></thead>\n<tbody>\n<tr><td><strong>Entrait</strong></td><td>Horizontal, à la base de la ferme</td><td>Tirant qui retient l'écartement des arbalétriers</td></tr>\n<tr><td><strong>Arbalétriers</strong></td><td>Inclinés selon la pente</td><td>Portent les pannes, comprimés et fléchis</td></tr>\n<tr><td><strong>Poinçon</strong></td><td>Vertical, au centre</td><td>Reçoit les arbalétriers au sommet, suspend l'entrait</td></tr>\n<tr><td><strong>Contrefiches</strong></td><td>Obliques, du poinçon vers les arbalétriers</td><td>Soulagent les arbalétriers en flexion</td></tr>\n<tr><td><strong>Jambettes</strong></td><td>Courtes pièces verticales ou inclinées en pied</td><td>Soulagent l'arbalétrier près de l'appui</td></tr>\n<tr><td><strong>Blochets</strong></td><td>Courtes pièces horizontales en pied, dans les charpentes sans entrait continu</td><td>Relient arbalétrier et sablière</td></tr>\n</tbody>\n</table>\n<p>Les pièces longitudinales complètent la structure :</p>\n<ul>\n<li>la <strong>panne faîtière</strong> au sommet, les <strong>pannes intermédiaires</strong> sur les arbalétriers, retenues contre le glissement par des <strong>échantignolles</strong> (cales clouées ou chevillées) ;</li>\n<li>les <strong>sablières</strong> posées sur les murs, qui reçoivent le pied des chevrons ;</li>\n<li>les <strong>chevrons</strong>, qui suivent la pente et portent liteaux ou voliges ;</li>\n<li>le <strong>contreventement</strong> longitudinal : <strong>liens</strong> obliques entre poinçon et faîtage (ou sous-faîtage), croix de Saint-André.</li>\n</ul>"
      },
      {
       "titre": "Les types de fermes et de combles",
       "contenu": "<p>La forme de la ferme dépend de la portée, de l'usage du comble et de l'époque :</p>\n<table>\n<thead><tr><th>Type</th><th>Caractéristique</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Ferme latine à poinçon</td><td>Entrait, deux arbalétriers, poinçon, contrefiches</td><td>Bâti courant, portées moyennes</td></tr>\n<tr><td>Ferme à entrait retroussé</td><td>Entrait remonté à mi-hauteur, jambettes en pied</td><td>Combles aménageables ; poussée à maîtriser en pied</td></tr>\n<tr><td>Ferme à deux poinçons ou à faux entrait</td><td>Deux poteaux verticaux reliés par un faux entrait</td><td>Libère un volume central dans le comble</td></tr>\n<tr><td>Ferme à la Mansart</td><td>Brisis presque vertical et terrasson à faible pente</td><td>Combles habitables des XVII<sup>e</sup>-XIX<sup>e</sup> siècles</td></tr>\n<tr><td>Ferme à la Philibert Delorme</td><td>Arcs formés de planches assemblées</td><td>Grandes portées, couvrements cintrés (procédé de la Renaissance remis en usage au XIX<sup>e</sup> siècle)</td></tr>\n<tr><td>Ferme à pannes sur murs de refend</td><td>Pas de ferme : les pannes reposent sur les murs pignons et de refend</td><td>Maisons de bourg, petites portées</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans une ferme à entrait retroussé, l'entrait ne retient plus le pied des arbalétriers : la poussée en tête de mur doit être reprise par des blochets, des jambettes bien assemblées et des sablières ancrées. Un désordre fréquent est l'ouverture des pieds de fermes et le déversement des murs gouttereaux.</div>"
      },
      {
       "titre": "Croupes, noues et arêtiers",
       "contenu": "<p>Une toiture ne se limite pas à deux versants. Plusieurs ouvrages particuliers demandent un savoir-faire de traçage :</p>\n<ul>\n<li>la <strong>croupe</strong> : versant triangulaire ou trapézoïdal qui ferme une toiture à l'extrémité, à la place d'un pignon ; elle est portée par des <strong>arêtiers</strong> et des chevrons de longueur décroissante, les <strong>empanons</strong>, assemblés sur l'arêtier ;</li>\n<li>l'<strong>arêtier</strong> : pièce inclinée qui forme l'angle saillant à l'intersection de deux versants ;</li>\n<li>la <strong>noue</strong> : angle rentrant à l'intersection de deux versants (par exemple à la rencontre de deux corps de bâtiment), portée par un <strong>chevron de noue</strong> ou une panne de noue, où les eaux se concentrent ;</li>\n<li>la <strong>demi-ferme de croupe</strong> : demi-ferme qui porte la croupe dans l'axe du bâtiment.</li>\n</ul>\n<p>Le <strong>pavillon</strong> est une toiture à quatre versants de même hauteur réunis en un point ou sur un court faîtage. Dans le bâti ancien, croupes et pavillons sont fréquents sur les maisons bourgeoises et les bâtiments isolés.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les zones de noue sont les plus exposées à l'eau. Lors d'une dépose de couverture, le charpentier vérifie en priorité l'état des chevrons de noue, des pieds d'arêtiers et des sablières au droit des noues : c'est là que l'on trouve le plus souvent des pourritures et des attaques d'insectes.</div>"
      },
      {
       "titre": "Lucarnes et ouvrages en toiture",
       "contenu": "<p>La <strong>lucarne</strong> est un ouvrage en saillie sur un versant, qui porte une fenêtre verticale pour éclairer le comble. Elle est formée d'une <strong>façade</strong> (avec deux poteaux appelés jambages ou poteaux corniers, un linteau ou chapeau), de <strong>jouées</strong> latérales et d'une petite toiture. On distingue notamment :</p>\n<table>\n<thead><tr><th>Lucarne</th><th>Description</th></tr></thead>\n<tbody>\n<tr><td>Lucarne à deux pans (à fronton ou jacobine)</td><td>Petite toiture à deux versants avec pignon en façade</td></tr>\n<tr><td>Lucarne à croupe (capucine)</td><td>Petite toiture à trois versants</td></tr>\n<tr><td>Lucarne rampante</td><td>Toiture à un seul versant de pente plus faible que le toit</td></tr>\n<tr><td>Lucarne pendante (ou meunière)</td><td>Façade dans le prolongement du mur, coupant l'égout, souvent avec une porte de grenier</td></tr>\n<tr><td>Lucarne en maçonnerie</td><td>Façade en pierre posée sur le mur gouttereau</td></tr>\n</tbody>\n</table>\n<p>Le <strong>chevêtre</strong> est la pièce horizontale qui reçoit les chevrons interrompus par l'ouverture de la lucarne et reporte leur charge sur les chevrons voisins, appelés <strong>chevrons de chevêtre</strong> ou renforcés.</p>"
      },
      {
       "titre": "Identifier une charpente ancienne",
       "contenu": "<p>Avant toute intervention, le charpentier observe et relève la charpente. Plusieurs indices renseignent sur son âge et son histoire :</p>\n<ul>\n<li>la <strong>section et l'aspect des bois</strong> : bois de brin équarris à la hache, flaches (arêtes arrondies laissées au bois), sciage de long ou sciage mécanique ;</li>\n<li>les <strong>assemblages</strong> : tenons et mortaises chevillés, mi-bois, assemblages à queue d'aronde, ou boulons et étriers métalliques plus récents ;</li>\n<li>les <strong>marques de charpentier</strong> : chiffres romains gravés au ciseau ou à la rainette, qui numérotent les fermes et les pièces ;</li>\n<li>les <strong>bois de réemploi</strong> : mortaises vides, entailles sans fonction, signes d'une charpente remaniée ;</li>\n<li>les <strong>réparations successives</strong> : moises, renforts cloués, pièces de sapin dans une charpente de chêne.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> relever une ferme. 1. Repérer la ferme sur un plan du comble (numéro, position). 2. Mesurer la portée entre nus intérieurs des murs, la hauteur sous faîtage depuis le dessus de l'entrait, et en déduire la pente : pente (%) = hauteur / demi-portée × 100. Exemple : hauteur 4,20 m pour une demi-portée de 4,00 m donne 105 %, soit un angle d'environ 46°. 3. Relever les sections de chaque pièce et la position des assemblages. 4. Noter l'essence, les marques et l'état de chaque pièce (sondages). 5. Dessiner la ferme à l'échelle et y reporter les désordres.</div>"
      },
      {
       "titre": "Charpente et couverture : un même système",
       "contenu": "<p>La charpente et la couverture forment un ensemble indissociable. La <strong>pente</strong> de la charpente a été choisie en fonction du matériau de couverture : forte pente (souvent plus de 45°) pour la tuile plate, l'ardoise et le chaume, pente faible (de l'ordre de 30 % environ) pour la tuile canal. Le <strong>poids</strong> de la couverture conditionne la section des pièces : une charpente conçue pour l'ardoise, légère, n'est pas forcément capable de porter une couverture en tuiles plates ou en lauzes, beaucoup plus lourde.</p>\n<p>L'espacement des chevrons dépend lui aussi du support de couverture : rapprochés sous des lattes ou des voliges minces, plus espacés sous des liteaux de forte section. Le <strong>débord</strong> de toit à l'égout et en rive, porté par les chevrons et les pannes en saillie, protège les murs : il varie selon les régions et les matériaux des murs.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remplacer une couverture légère par une couverture plus lourde (par exemple des ardoises par des tuiles, ou ajouter un isolant lourd et un second support) sans vérifier la charpente peut provoquer des flèches excessives, l'ouverture des pieds de fermes et des désordres dans les murs. Le changement de matériau de couverture est une décision qui engage la structure.</div>"
      }
     ],
     "points_cles": [
      "Deux systèmes : chevrons formant fermes (sans pannes) et fermes et pannes.",
      "Ferme latine : entrait tendu, arbalétriers, poinçon, contrefiches, jambettes.",
      "Pannes, sablières, chevrons, échantignolles et liens complètent la charpente.",
      "Ferme à entrait retroussé : la poussée en pied doit être reprise autrement.",
      "Croupe, arêtier, empanon, noue et demi-ferme de croupe forment les toitures complexes.",
      "La lucarne interrompt les chevrons, repris par un chevêtre.",
      "Sections, assemblages, marques et réemplois renseignent sur l'âge et l'histoire d'une charpente.",
      "Pente (%) = hauteur / demi-portée × 100."
     ],
     "lexique": [
      {
       "terme": "Chevrons formant fermes",
       "def": "Système de charpente sans pannes où chaque couple de chevrons forme une ferme."
      },
      {
       "terme": "Entrait retroussé",
       "def": "Entrait placé en hauteur dans une ferme, au-dessus du pied des arbalétriers."
      },
      {
       "terme": "Poinçon",
       "def": "Pièce verticale centrale d'une ferme."
      },
      {
       "terme": "Contrefiche",
       "def": "Pièce oblique reliant le poinçon à l'arbalétrier pour le soulager."
      },
      {
       "terme": "Échantignolle",
       "def": "Cale fixée sur l'arbalétrier qui empêche la panne de glisser."
      },
      {
       "terme": "Sablière",
       "def": "Pièce horizontale posée sur le mur, qui reçoit le pied des chevrons."
      },
      {
       "terme": "Empanon",
       "def": "Chevron de longueur réduite assemblé sur un arêtier ou une noue."
      },
      {
       "terme": "Arêtier",
       "def": "Pièce formant l'angle saillant entre deux versants."
      },
      {
       "terme": "Noue",
       "def": "Angle rentrant formé par la rencontre de deux versants."
      },
      {
       "terme": "Chevêtre",
       "def": "Pièce qui reçoit des chevrons ou solives interrompus par une ouverture."
      },
      {
       "terme": "Flache",
       "def": "Arête d'une pièce de bois où subsiste la surface arrondie du tronc."
      }
     ]
    },
    {
     "id": "bipb-b-trait-assemblages",
     "titre": "Trait de charpente et assemblages traditionnels",
     "niveau": "1re-Tle",
     "options": [
      "b"
     ],
     "duree": 50,
     "objectifs": [
      "Expliquer le principe de l'épure, de l'ételon et du piquage",
      "Calculer les longueurs et angles des pièces d'une toiture simple et d'une croupe",
      "Décrire les assemblages traditionnels et leurs règles de proportion",
      "Choisir un assemblage selon l'effort transmis",
      "Réaliser le chevillage d'un assemblage à tenon et mortaise"
     ],
     "sections": [
      {
       "titre": "Le trait de charpente",
       "contenu": "<p>Le <strong>trait de charpente</strong> est l'art de représenter en vraie grandeur, par la géométrie descriptive, les pièces d'une charpente et leurs assemblages, afin de les tailler avec précision avant le montage. Il est reconnu comme un savoir-faire d'exception transmis notamment par le compagnonnage.</p>\n<p>Le charpentier travaille sur une <strong>aire de taille</strong> (sol plan) :</p>\n<ul>\n<li>il trace l'<strong>épure</strong> : dessin en vraie grandeur d'une ferme ou d'une partie de charpente, ou projections permettant de trouver les vraies longueurs et angles des pièces obliques ;</li>\n<li>l'<strong>ételon</strong> est le tracé en vraie grandeur au sol, souvent au cordeau et à la craie, qui sert de référence pour une ferme ;</li>\n<li>le <strong>piquage</strong> consiste à placer les pièces brutes sur l'ételon, calées et mises de niveau, puis à reporter sur elles, au fil à plomb, les lignes de l'épure (lignes d'assemblage, coupes) ; on peut alors tracer et tailler les assemblages ;</li>\n<li>les <strong>lignes de référence</strong> (lignes de trave, lignes de niveau) tracées sur chaque pièce permettent de retrouver leur position quelles que soient les irrégularités du bois.</li>\n</ul>\n<p>Cette méthode est indispensable pour les bois anciens ou de brin, irréguliers, qui ne sont jamais parfaitement droits ni d'équerre : chaque pièce est tracée en fonction de sa forme réelle.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les logiciels de conception de charpente et les machines à commande numérique réalisent aujourd'hui l'essentiel du taillage pour les charpentes neuves en bois sciés réguliers. En restauration, la taille manuelle sur épure reste très pratiquée, notamment pour les pièces de remplacement qui doivent s'adapter à une charpente ancienne déformée.</div>"
      },
      {
       "titre": "Calculer pentes, rampants et arêtiers",
       "contenu": "<p>Les longueurs des pièces se calculent par le <strong>théorème de Pythagore</strong> et par la trigonométrie, à partir de la demi-portée d et de la hauteur h (mesurées sur les lignes de référence).</p>\n<ul>\n<li>Pente : p = h / d (en %, ou angle α tel que tan α = h / d).</li>\n<li>Longueur de rampant (chevron de long pan, sans débord) : L = √(d<sup>2</sup> + h<sup>2</sup>).</li>\n<li>Pour une croupe droite de même pente que les longs pans, la projection horizontale de l'arêtier est la diagonale d'un carré de côté d : d × √2. Sa vraie longueur est donc √(2d<sup>2</sup> + h<sup>2</sup>).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> toiture à croupes, demi-portée d = 4,00 m, hauteur h = 4,20 m (lignes de référence). 1. Pente : 4,20 / 4,00 = 1,05, soit 105 % ; α = arctan 1,05 ≈ 46,4°. 2. Rampant de long pan : √(4,00<sup>2</sup> + 4,20<sup>2</sup>) = √(16 + 17,64) = √33,64 = 5,80 m. 3. Projection de l'arêtier : 4,00 × √2 ≈ 5,66 m. 4. Vraie longueur de l'arêtier : √(5,66<sup>2</sup> + 4,20<sup>2</sup>) = √(32,0 + 17,64) = √49,64 ≈ 7,05 m. 5. Pente de l'arêtier : 4,20 / 5,66 ≈ 0,742, soit environ 36,6°. On ajoute ensuite les longueurs de débord et de tenons, et l'on vérifie sur l'épure.</div>\n<p>Pour les <strong>empanons</strong>, de longueurs décroissantes et régulièrement espacés, les longueurs diminuent d'une valeur constante : si l'espacement des empanons est e, chaque empanon est plus court que le précédent de e × L / d (avec L la longueur du rampant). Dans l'exemple, avec e = 0,50 m : 0,50 × 5,80 / 4,00 = 0,725 m.</p>"
      },
      {
       "titre": "Les assemblages traditionnels",
       "contenu": "<p>Un <strong>assemblage</strong> relie deux pièces de bois et transmet un effort. Les assemblages traditionnels sont taillés dans le bois lui-même et bloqués par des <strong>chevilles</strong> en bois dur, sans ou avec peu de métal.</p>\n<table>\n<thead><tr><th>Assemblage</th><th>Description</th><th>Usage typique</th></tr></thead>\n<tbody>\n<tr><td><strong>Tenon et mortaise</strong></td><td>Saillie (tenon) d'une pièce entrant dans une cavité (mortaise) de l'autre, chevillée</td><td>Poinçon dans entrait, poteau dans sablière</td></tr>\n<tr><td><strong>Embrèvement</strong></td><td>Entaille oblique dans laquelle vient buter l'about d'une pièce comprimée, souvent associé à un tenon</td><td>Pied d'arbalétrier sur entrait, contrefiche sur poinçon</td></tr>\n<tr><td><strong>Mi-bois</strong></td><td>Les deux pièces sont entaillées chacune de la moitié de leur épaisseur</td><td>Croisement de pièces, croix de Saint-André, liens</td></tr>\n<tr><td><strong>Queue d'aronde</strong></td><td>Entaille en forme de trapèze qui s'oppose à l'arrachement</td><td>Entrait sur sablière, assemblages travaillant en traction</td></tr>\n<tr><td><strong>Enture</strong> (dont le <strong>trait de Jupiter</strong>)</td><td>Assemblage bout à bout de deux pièces dans le prolongement l'une de l'autre</td><td>Allongement d'une sablière, d'un entrait, réparation</td></tr>\n<tr><td><strong>Entaille et embrèvement de panne</strong></td><td>Logement partiel d'une panne sur un arbalétrier</td><td>Pannes sur arbalétriers</td></tr>\n</tbody>\n</table>\n<p>Règles de proportion couramment admises : l'épaisseur d'un tenon est de l'ordre du tiers de l'épaisseur de la pièce ; la profondeur d'un embrèvement est limitée (de l'ordre du quart à un tiers de la hauteur de la pièce entaillée) pour ne pas trop l'affaiblir ; le bois laissé en bout de mortaise (« about ») doit être suffisant pour résister au cisaillement. Les valeurs exactes dépendent des sections et sont fixées par l'usage de l'entreprise ou le calcul.</p>"
      },
      {
       "titre": "Choisir l'assemblage selon l'effort",
       "contenu": "<p>Chaque assemblage est adapté à un type d'effort :</p>\n<ul>\n<li>une pièce <strong>comprimée</strong> oblique (arbalétrier, contrefiche) transmet son effort par <strong>butée</strong> : l'embrèvement est l'assemblage roi, le tenon ne servant qu'à maintenir la position ;</li>\n<li>une pièce <strong>tendue</strong> (entrait sur sablière, poinçon qui suspend l'entrait) nécessite un assemblage qui s'oppose à l'arrachement : queue d'aronde, tenon chevillé, étrier ou boulon ajouté ;</li>\n<li>une pièce <strong>fléchie</strong> prolongée (sablière, panne) se raccorde par une enture placée de préférence au-dessus d'un appui, là où la flexion est faible.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le bois cède facilement par <strong>cisaillement</strong> le long du fil. Dans un pied d'arbalétrier embrevé sur un entrait, le talon de bois situé entre l'embrèvement et le bout de l'entrait doit être assez long : s'il est trop court, il se cisaille et le pied de ferme glisse. C'est un désordre classique quand l'about de l'entrait est pourri dans le mur.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en charpente traditionnelle, ce sont les assemblages qui fixent la résistance d'une structure, bien plus que la section courante des pièces. Une charpente saine aux sections généreuses peut être ruinée par un seul assemblage pourri.</div>"
      },
      {
       "titre": "Tailler et cheviller",
       "contenu": "<p>La taille d'un assemblage suit le tracé reporté sur la pièce. Les outils traditionnels sont la <strong>bisaiguë</strong> (outil à deux extrémités, l'une en bédane pour creuser les mortaises, l'autre en ciseau large), le <strong>ciseau</strong>, la <strong>scie</strong>, la <strong>tarière</strong> (pour percer les trous de chevilles), l'<strong>herminette</strong> et la <strong>doloire</strong> (pour dresser les surfaces). Les outils électroportatifs (mortaiseuse à chaîne, scie circulaire, raboteuse) accélèrent le travail.</p>\n<p>La <strong>cheville</strong>, en chêne fendu de droit fil (plus résistant qu'un bois scié dont le fil peut être tranché), est légèrement conique. La technique du <strong>chevillage tiré</strong> consiste à percer le trou du tenon légèrement décalé, de quelques millimètres vers l'épaulement, par rapport aux trous de la mortaise : en enfonçant la cheville, on serre fortement l'assemblage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser un assemblage tenon-mortaise chevillé tiré. 1. Tracer tenon et mortaise à partir des lignes de référence, épaisseur du tenon environ un tiers de la pièce. 2. Creuser la mortaise et tailler le tenon, puis assembler à blanc pour contrôle. 3. Percer la mortaise de part en part à la tarière. 4. Assembler à blanc, marquer la position du trou sur le tenon par la pointe de la tarière, démonter. 5. Percer le trou du tenon décalé de 2 à 3 mm vers l'épaulement. 6. Assembler définitivement et enfoncer la cheville : elle tire le tenon et serre l'épaulement contre la pièce réceptrice. 7. Recéper (couper) les extrémités de la cheville en laissant un léger dépassement permettant un resserrage ultérieur.</div>"
      },
      {
       "titre": "Les connecteurs métalliques",
       "contenu": "<p>À partir du XIX<sup>e</sup> siècle, des pièces métalliques complètent ou remplacent certains assemblages : <strong>étriers</strong> en fer plat, <strong>boulons</strong>, <strong>plates-bandes</strong>, <strong>équerres</strong>. Aujourd'hui, on dispose de connecteurs en acier galvanisé ou inoxydable, de goujons et de vis de structure à forte capacité.</p>\n<p>En restauration, on peut les utiliser pour renforcer un assemblage ancien affaibli sans le démonter, ou pour reprendre une traction que l'assemblage d'origine ne peut plus assurer. Leur usage obéit aux principes d'intervention : préserver l'assemblage d'origine, rester réversible et lisible, éviter les métaux incompatibles avec les tanins du chêne (préférer l'inox ou les aciers protégés), et suivre les prescriptions de l'étude.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> on rencontre souvent dans les charpentes anciennes des réparations antérieures par plats métalliques cloués ou boulonnés qui ont rouillé et fendu le bois. Lors de la restauration, le charpentier signale ces renforts, vérifie le bois dessous et propose de les remplacer par une réparation bois ou par des pièces compatibles.</div>"
      }
     ],
     "points_cles": [
      "Le trait de charpente représente en vraie grandeur pièces et assemblages ; épure, ételon et piquage permettent de tailler avant montage.",
      "Les lignes de référence permettent de tracer des bois irréguliers.",
      "Rampant L = √(d² + h²) ; arêtier de croupe droite : √(2d² + h²).",
      "Tenon-mortaise, embrèvement, mi-bois, queue d'aronde et enture sont les assemblages de base.",
      "Une pièce comprimée transmet son effort par butée (embrèvement) ; une pièce tendue exige un assemblage anti-arrachement.",
      "Le cisaillement du talon d'entrait est un désordre classique.",
      "Le chevillage tiré, avec cheville en chêne fendu, serre l'assemblage.",
      "Les connecteurs métalliques en restauration restent compatibles, réversibles et justifiés."
     ],
     "lexique": [
      {
       "terme": "Trait de charpente",
       "def": "Méthode géométrique de représentation en vraie grandeur des pièces et assemblages d'une charpente."
      },
      {
       "terme": "Épure",
       "def": "Dessin géométrique en vraie grandeur servant au traçage des pièces."
      },
      {
       "terme": "Ételon",
       "def": "Tracé au sol en vraie grandeur d'une ferme ou d'un ouvrage, servant de référence."
      },
      {
       "terme": "Piquage",
       "def": "Report des lignes de l'épure sur les pièces brutes posées sur l'ételon."
      },
      {
       "terme": "Tenon",
       "def": "Partie saillante en bout de pièce qui s'engage dans une mortaise."
      },
      {
       "terme": "Mortaise",
       "def": "Cavité creusée dans une pièce pour recevoir un tenon."
      },
      {
       "terme": "Embrèvement",
       "def": "Entaille oblique où bute l'extrémité d'une pièce comprimée."
      },
      {
       "terme": "Queue d'aronde",
       "def": "Assemblage en forme de trapèze qui s'oppose à l'arrachement."
      },
      {
       "terme": "Trait de Jupiter",
       "def": "Enture à redans et clé permettant d'assembler deux pièces bout à bout en résistant à la traction."
      },
      {
       "terme": "Chevillage tiré",
       "def": "Chevillage avec trous légèrement décalés pour serrer l'assemblage."
      },
      {
       "terme": "Bisaiguë",
       "def": "Outil de charpentier à deux tranchants servant à creuser les mortaises."
      }
     ]
    },
    {
     "id": "bipb-b-restauration-charpente",
     "titre": "Restaurer une charpente ancienne",
     "niveau": "Tle",
     "options": [
      "b"
     ],
     "duree": 50,
     "objectifs": [
      "Établir l'état sanitaire d'une charpente pièce par pièce",
      "Choisir entre traitement, renfort, greffe et remplacement d'une pièce",
      "Décrire la réfection d'un pied de ferme et d'un about d'entrait",
      "Organiser l'étaiement, le vérinage et le redressement d'une charpente déformée",
      "Mettre en œuvre un traitement curatif des bois dans le respect de la sécurité"
     ],
     "sections": [
      {
       "titre": "L'état sanitaire de la charpente",
       "contenu": "<p>La restauration commence par un <strong>état sanitaire</strong> pièce par pièce, établi sur un plan de repérage du comble (numérotation des fermes, des pannes, des chevrons). Pour chaque pièce, on note :</p>\n<ul>\n<li>l'essence, la section et la longueur ;</li>\n<li>les attaques (insectes, champignons) et leur activité ;</li>\n<li>la section résiduelle saine mesurée par sondage ;</li>\n<li>l'état des assemblages (jeu, chevilles cassées, tenons rompus, talons cisaillés) ;</li>\n<li>les déformations (flèche d'une panne, déversement d'une ferme, affaissement du faîtage) ;</li>\n<li>les fentes, en distinguant les fentes de retrait normales et les ruptures.</li>\n</ul>\n<p>Les zones à examiner en priorité sont celles où le bois est ou a été humide : <strong>pieds de fermes</strong> et <strong>abouts d'entraits</strong> encastrés dans les murs, sablières, chevrons sous les noues, sous les solins de cheminée, sous les chéneaux, et autour des lucarnes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mesurer la flèche d'une panne. 1. Tendre un cordeau entre les deux appuis de la panne, sur sa face inférieure ou supérieure. 2. Mesurer à mi-portée la distance entre le cordeau et la panne : c'est la flèche f. 3. Rapporter la flèche à la portée L. Exemple : portée 4,20 m, flèche 35 mm : f / L = 35 / 4 200 ≈ 1/120. Une flèche aussi importante sur une panne ancienne signale une section insuffisante, une surcharge (couverture plus lourde posée sur la charpente d'origine) ou une dégradation ; elle est comparée aux limites fixées par le maître d'œuvre ou le bureau d'études et surveillée.</div>"
      },
      {
       "titre": "Choisir le mode d'intervention",
       "contenu": "<p>Le choix suit les principes d'intervention minimale et de conservation de la matière d'origine :</p>\n<table>\n<thead><tr><th>État de la pièce</th><th>Intervention</th></tr></thead>\n<tbody>\n<tr><td>Saine ou attaque superficielle sans perte de résistance</td><td>Conservation, brossage, traitement curatif si attaque active</td></tr>\n<tr><td>Saine mais sous-dimensionnée ou fléchie</td><td>Renfort : doublage, moisage, ajout d'un appui, contrefiche, connecteurs</td></tr>\n<tr><td>Dégradée localement (extrémité, zone d'assemblage)</td><td><strong>Greffe</strong> : remplacement de la partie dégradée par une pièce de bois neuf assemblée en enture</td></tr>\n<tr><td>Dégradée localement, assemblage complexe à préserver</td><td><strong>Prothèse</strong> en bois et résine, ou en résine armée, selon prescription</td></tr>\n<tr><td>Dégradée sur toute sa longueur ou rompue</td><td><strong>Remplacement</strong> à l'identique (essence, section, assemblages, aspect)</td></tr>\n</tbody>\n</table>\n<p>Le <strong>moisage</strong> consiste à enserrer une pièce affaiblie entre deux pièces de bois (les <strong>moises</strong>) boulonnées ou chevillées de part et d'autre. Simple et efficace, il est très visible ; on le réserve aux charpentes où l'aspect est secondaire ou on le place sur les faces peu vues.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les pièces de remplacement en chêne neuf reçoivent souvent une marque discrète (date, sigle de l'entreprise) gravée au fer ou au ciseau, pour que les générations futures les distinguent des pièces d'origine. C'est l'application du principe de lisibilité.</div>"
      },
      {
       "titre": "Greffes et prothèses",
       "contenu": "<p>La <strong>greffe</strong> remplace la partie pourrie d'une pièce, souvent son extrémité encastrée dans un mur, par une pièce de bois neuf de même essence, raccordée à la partie saine par une <strong>enture</strong>. L'enture doit transmettre les efforts que subit la pièce à cet endroit :</p>\n<ul>\n<li>enture à <strong>sifflet</strong> (coupe en biais longue), boulonnée ou chevillée, pour des efforts modérés ;</li>\n<li>enture à <strong>trait de Jupiter</strong>, avec redans et clés, pour une pièce tendue comme un entrait ;</li>\n<li>enture à <strong>mi-bois</strong> ou à <strong>tenon</strong>, complétée par des moises ou des connecteurs.</li>\n</ul>\n<p>On coupe la pièce dans le bois sain, au-delà de la zone attaquée avec une marge de sécurité (la limite d'une pourriture n'est jamais nette), et l'on place l'enture si possible près d'un appui.</p>\n<p>La <strong>prothèse en résine</strong> consiste à remplacer le bois dégradé par un mortier de résine (époxyde) armé de barres (en matériau composite ou métallique) scellées dans la partie saine. Elle permet de conserver une pièce et ses assemblages en place, sans démontage. Elle est moins réversible qu'une greffe bois et ne s'emploie que sur prescription, avec des produits dont la fiche technique et la fiche de données de sécurité sont respectées (gants, protection des yeux et de la peau, ventilation).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> greffer un about d'entrait ou de poutre sans supprimer la cause de l'humidité dans le mur conduit à une récidive. On ménage autour de l'about neuf un espace ventilé, on l'isole de la maçonnerie humide (cale, feuille de protection perméable, selon prescription) et on corrige les arrivées d'eau.</div>"
      },
      {
       "titre": "Refaire un pied de ferme",
       "contenu": "<p>Le pied de ferme (about d'entrait et pied d'arbalétrier assemblés au-dessus du mur) est la zone la plus souvent dégradée. Sa réfection est une opération type de la restauration de charpente.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réfection d'un pied de ferme dont l'about d'entrait est pourri sur 60 cm. 1. <strong>Décharger</strong> la ferme : dépose locale de la couverture si nécessaire, puis étaiement de l'arbalétrier et de l'entrait par des étais et des chevalets prenant appui sur un plancher capable ou descendus jusqu'au sol, avec répartition. 2. <strong>Relever</strong> la géométrie de l'assemblage existant (gabarit) et repérer les lignes de référence sur les parties saines. 3. <strong>Couper</strong> l'entrait dans le bois sain au-delà de la pourriture, avec une marge, et dégager l'about et le pied d'arbalétrier. 4. <strong>Tailler</strong> la greffe dans une pièce de chêne de même section, avec l'enture vers la partie saine et l'embrèvement destiné au pied d'arbalétrier, d'après le gabarit. 5. <strong>Poser</strong> la greffe, la régler sur les lignes de référence, cheviller et boulonner l'enture selon la prescription. 6. <strong>Reprendre</strong> le pied d'arbalétrier si nécessaire (greffe ou recoupe). 7. <strong>Traiter</strong> les surfaces de coupe et les bois voisins si attaque active. 8. <strong>Désétayer</strong> progressivement et contrôler l'absence de mouvement.</div>\n<p>Lorsque plusieurs pieds de fermes doivent être repris, on ne travaille jamais sur deux fermes voisines en même temps sans étaiement général, et la sablière est reprise ou remplacée par tronçons.</p>"
      },
      {
       "titre": "Redresser une charpente déformée",
       "contenu": "<p>Une charpente ancienne a souvent subi des déformations : faîtage affaissé, fermes déversées, pannes fléchies. On ne cherche pas toujours à les corriger : une déformation ancienne stabilisée fait partie de l'histoire de l'ouvrage, et vouloir la redresser peut casser des assemblages qui se sont adaptés. Le maître d'œuvre décide s'il faut <strong>stabiliser</strong> la déformation ou la <strong>corriger</strong>.</p>\n<p>Lorsqu'un redressement est décidé, il se fait très progressivement :</p>\n<ul>\n<li>pose de <strong>vérins</strong> (hydrauliques ou à vis) sur des appuis solides, avec répartition des charges ;</li>\n<li>relevage par petites courses, avec repos entre chaque étape, en surveillant les assemblages et les maçonneries voisines ;</li>\n<li>pour un déversement, mise en place de <strong>tire-forts</strong> ou de câbles, et de contreventements provisoires ;</li>\n<li>blocage de la nouvelle position par des pièces définitives (contreventements, liens, croix de Saint-André), avant de retirer les vérins.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le contreventement (liens, croix de Saint-André, sous-faîtage) est ce qui empêche les fermes de tomber comme des dominos dans le sens longitudinal. On ne supprime jamais une pièce de contreventement, même si elle gêne, sans la remplacer.</div>"
      },
      {
       "titre": "Le traitement curatif des bois",
       "contenu": "<p>Le <strong>traitement curatif</strong> détruit les insectes présents dans le bois et protège contre une nouvelle attaque. Il comprend généralement :</p>\n<ol>\n<li>le <strong>bûchage</strong> : élimination à l'herminette ou au ciseau des parties vermoulues jusqu'au bois sain, puis brossage et dépoussiérage (aspirateur) ;</li>\n<li>l'<strong>injection</strong> : perçage de trous en quinconce dans les pièces de forte section, pose d'injecteurs à clapet et injection sous pression d'un produit insecticide ;</li>\n<li>la <strong>pulvérisation</strong> ou l'application au pinceau d'un produit insecticide et fongicide sur toutes les faces accessibles.</li>\n</ol>\n<p>Contre la mérule, le traitement est différent : élimination des bois atteints avec une marge, traitement des maçonneries par forage et injection d'un fongicide, assèchement et ventilation.</p>\n<p>Les produits de traitement sont des biocides. Leur emploi impose de respecter la fiche de données de sécurité : combinaison, gants résistants aux produits chimiques, protection respiratoire adaptée, lunettes, ventilation des combles, interdiction de manger et fumer, gestion des emballages comme déchets dangereux. Le bois traité ne doit pas être en contact avec des denrées alimentaires ni brûlé dans un foyer domestique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les anciennes charpentes ont parfois été traitées avec des produits aujourd'hui interdits et toxiques. Le bûchage et le sciage de ces bois libèrent des poussières contaminées : on porte une protection respiratoire et on traite ces déchets comme potentiellement dangereux, selon les consignes de l'entreprise.</div>"
      }
     ],
     "points_cles": [
      "L'état sanitaire se fait pièce par pièce sur un plan de repérage du comble.",
      "Les zones humides (pieds de fermes, abouts, noues, chéneaux) s'examinent en priorité.",
      "La flèche d'une panne se mesure au cordeau et se rapporte à la portée.",
      "Du plus léger au plus lourd : conservation, renfort, greffe, prothèse, remplacement.",
      "Une greffe se raccorde par enture dans le bois sain, près d'un appui, après suppression de la cause.",
      "Refaire un pied de ferme : décharger, étayer, relever, couper, tailler, poser, traiter, désétayer.",
      "Un redressement se fait par petites courses sur vérins, puis la position est bloquée par contreventement.",
      "Traitement curatif : bûchage, injection, pulvérisation, avec les protections imposées par la FDS."
     ],
     "lexique": [
      {
       "terme": "État sanitaire",
       "def": "Relevé de l'état de conservation de chaque pièce d'une charpente."
      },
      {
       "terme": "Flèche",
       "def": "Déformation verticale d'une pièce fléchie, mesurée à mi-portée."
      },
      {
       "terme": "Greffe",
       "def": "Remplacement de la partie dégradée d'une pièce par du bois neuf raccordé par enture."
      },
      {
       "terme": "Enture à sifflet",
       "def": "Enture par coupe en biais allongée."
      },
      {
       "terme": "Prothèse en résine",
       "def": "Reconstitution d'une partie de pièce en mortier de résine armé, scellé dans le bois sain."
      },
      {
       "terme": "Moise",
       "def": "Pièce de bois doublant une autre, fixée de part et d'autre pour la renforcer ou la relier."
      },
      {
       "terme": "Pied de ferme",
       "def": "Zone d'assemblage du pied d'arbalétrier et de l'about d'entrait, au-dessus du mur."
      },
      {
       "terme": "Vérin",
       "def": "Appareil de levage à course courte utilisé pour soulever ou redresser une structure."
      },
      {
       "terme": "Bûchage",
       "def": "Élimination des parties de bois vermoulues jusqu'au bois sain."
      },
      {
       "terme": "Injecteur à clapet",
       "def": "Embout fixé dans un trou du bois permettant d'injecter un produit sous pression."
      },
      {
       "terme": "Contreventement",
       "def": "Ensemble de pièces qui assure la stabilité d'une structure dans le sens longitudinal ou horizontal."
      }
     ]
    },
    {
     "id": "bipb-b-pans-de-bois-planchers",
     "titre": "Pans de bois et planchers anciens",
     "niveau": "1re-Tle",
     "options": [
      "b"
     ],
     "duree": 45,
     "objectifs": [
      "Nommer les pièces d'un pan de bois et expliquer leur rôle",
      "Diagnostiquer les désordres d'un pan de bois de façade",
      "Décrire la reprise d'une sablière basse et le remplacement de pièces d'un pan de bois",
      "Identifier la structure d'un plancher ancien et ses points faibles",
      "Calculer un cubage de bois et préparer une commande sur liste"
     ],
     "sections": [
      {
       "titre": "Les pièces d'un pan de bois",
       "contenu": "<p>Le <strong>pan de bois</strong> est une ossature porteuse en bois formant un mur, dont les vides sont remplis de torchis, de briques ou de plâtre. Il peut être apparent ou enduit. Ses pièces portent des noms précis :</p>\n<table>\n<thead><tr><th>Pièce</th><th>Position</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td><strong>Sablière basse</strong></td><td>Horizontale, posée sur le soubassement maçonné</td><td>Reçoit les poteaux, répartit les charges sur le soubassement</td></tr>\n<tr><td><strong>Sablière haute</strong> (ou de chambrée)</td><td>Horizontale, en tête de chaque niveau</td><td>Reçoit les solives du plancher et le niveau supérieur</td></tr>\n<tr><td><strong>Poteaux corniers</strong></td><td>Verticaux, aux angles</td><td>Pièces maîtresses des angles, souvent de forte section</td></tr>\n<tr><td><strong>Poteaux de remplissage</strong> (ou colombes)</td><td>Verticaux, intermédiaires</td><td>Portent les charges et délimitent les remplissages</td></tr>\n<tr><td><strong>Décharges</strong> et <strong>guettes</strong></td><td>Obliques</td><td>Contreventent le pan et reportent les charges vers les appuis</td></tr>\n<tr><td><strong>Croix de Saint-André</strong></td><td>Deux pièces obliques croisées à mi-bois</td><td>Contreventement, souvent aussi décoratif</td></tr>\n<tr><td><strong>Entretoises</strong> (ou traverses)</td><td>Horizontales, entre poteaux</td><td>Raidissent et délimitent les panneaux, appuis de baies</td></tr>\n<tr><td><strong>Poteaux d'huisserie</strong>, linteaux, appuis</td><td>Autour des baies</td><td>Encadrent les ouvertures</td></tr>\n</tbody>\n</table>\n<p>Dans les villes anciennes, les étages en pan de bois sont souvent en <strong>encorbellement</strong> : chaque niveau déborde sur la rue par rapport à celui du dessous, porté par les abouts des solives en console. Cette disposition protège aussi les étages inférieurs de la pluie.</p>"
      },
      {
       "titre": "Les désordres d'un pan de bois",
       "contenu": "<p>Les désordres se concentrent dans les zones d'humidité et sont souvent liés à des transformations inadaptées :</p>\n<ul>\n<li><strong>sablière basse pourrie</strong> : sol extérieur rehaussé, rejaillissement de la pluie, soubassement trop bas, enduit ciment qui retient l'eau contre le bois ; le pan s'affaisse et se déforme ;</li>\n<li><strong>pieds de poteaux et assemblages</strong> pourris là où l'eau s'accumule (tenons, mortaises orientées vers le haut) ;</li>\n<li><strong>appuis de fenêtres</strong> et entretoises horizontales qui retiennent l'eau ;</li>\n<li><strong>déformations</strong> : affaissement, déversement de la façade, ventre, souvent liés à la suppression de pièces (décharges sciées pour agrandir une baie, poteaux supprimés au rez-de-chaussée pour créer une vitrine) ;</li>\n<li><strong>décollement des remplissages</strong> et fissures à la jonction bois-remplissage.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un pan de bois recouvert d'un enduit ciment ou d'une peinture étanche peut être totalement pourri derrière une surface d'apparence saine. Les sondages ponctuels (petites fenêtres dans l'enduit au droit des sablières et des pieds de poteaux) sont indispensables avant d'établir un devis.</div>"
      },
      {
       "titre": "Restaurer un pan de bois",
       "contenu": "<p>La restauration d'un pan de bois de façade suit généralement cet ordre : étaiement de la façade et des planchers, dépose des remplissages dégradés autour des pièces à reprendre, réparation ou remplacement des pièces de bois (de bas en haut), réfection des remplissages, puis enduits et finitions.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> reprise d'une sablière basse pourrie sur 5 m. 1. Étayer les planchers (étais sous les solives) et les poteaux du pan (chevalements ou étais sous des pièces de reprise fixées aux poteaux), pour que la sablière ne porte plus rien. 2. Relever la position et les assemblages de chaque poteau sur la sablière (tenons, mortaises). 3. Déposer la sablière par tronçons, en sciant au droit des poteaux si nécessaire, sans ébranler l'ensemble. 4. Vérifier et reprendre le soubassement maçonné (arase plane, rehaussement si possible pour éloigner le bois du sol). 5. Interposer, selon la prescription, une coupure de capillarité perméable à la vapeur entre maçonnerie et bois. 6. Poser la sablière neuve en chêne, d'une longueur ou en plusieurs éléments entés au droit des poteaux, avec les mortaises recevant les tenons des poteaux (souvent greffés à leur pied, car pourris aussi). 7. Cheviller, désétayer progressivement, contrôler aplomb et niveau.</div>\n<p>Pour les poteaux et décharges, on applique les techniques de greffe : on remplace la partie basse pourrie par une greffe entée à mi-bois ou à sifflet, chevillée. Les pièces trop dégradées sont remplacées à l'identique, en reprenant leurs assemblages et leur section.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une façade à pan de bois dans un espace protégé, le choix de laisser le bois apparent ou de l'enduire, la couleur des bois et des remplissages, sont fixés par le maître d'œuvre et l'ABF. Le charpentier et le maçon se coordonnent étroitement : le charpentier intervient d'abord, puis le maçon refait les remplissages et enduits.</div>"
      },
      {
       "titre": "Les planchers anciens en bois",
       "contenu": "<p>Un plancher ancien en bois comprend, selon les époques et les portées :</p>\n<ul>\n<li>des <strong>poutres</strong> maîtresses de forte section portant d'un mur à l'autre, sur lesquelles reposent des <strong>solives</strong> ;</li>\n<li>ou seulement des solives portant d'un mur à l'autre (plancher à solivage simple) ;</li>\n<li>un <strong>remplissage</strong> entre solives (augets en plâtre, terre et paille sur éclisses, carreaux de terre cuite) assurant isolation acoustique et protection contre l'incendie ;</li>\n<li>un <strong>parquet</strong> ou un carrelage sur lambourdes ou sur forme.</li>\n</ul>\n<p>Les solives sont assemblées à la poutre par embrèvement, par entaille, ou posées dessus. Autour des trémies (escaliers, cheminées), un <strong>chevêtre</strong> reçoit les solives interrompues et reporte leur charge sur des <strong>solives d'enchevêtrure</strong> renforcées.</p>\n<p>Les points faibles habituels sont les <strong>abouts encastrés</strong> dans les murs (pourriture, insectes), les chevêtres mal assemblés, les solives entaillées par des passages de réseaux, et les surcharges dues à l'ajout de chapes lourdes ou à un changement d'usage.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> avant d'ajouter une chape, un carrelage lourd ou une cloison sur un plancher ancien, ou d'en changer l'usage (logement transformé en bureau ou en salle recevant du public), sa capacité doit être vérifiée par un calcul. Un plancher ancien qui « tient » sous son usage actuel n'est pas forcément capable de supporter davantage.</div>"
      },
      {
       "titre": "Renforcer ou remplacer des solives",
       "contenu": "<p>Plusieurs solutions existent pour un plancher affaibli :</p>\n<table>\n<thead><tr><th>Solution</th><th>Principe</th><th>Remarque</th></tr></thead>\n<tbody>\n<tr><td>Greffe d'about</td><td>Remplacement de l'extrémité pourrie par une greffe entée</td><td>Conserve la solive, demande d'étayer</td></tr>\n<tr><td>Doublage</td><td>Pose d'une solive neuve contre l'ancienne, fixée à elle</td><td>Simple, augmente la résistance, visible en sous-face</td></tr>\n<tr><td>Ajout d'un appui</td><td>Poutre ou mur intermédiaire réduisant la portée</td><td>Très efficace, modifie l'espace</td></tr>\n<tr><td>Ajout de solives intermédiaires</td><td>Réduction de l'entraxe</td><td>Demande de déposer le revêtement</td></tr>\n<tr><td>Plancher mixte bois-béton</td><td>Dalle mince de béton liée aux solives par des connecteurs</td><td>Plus rigide, mais ajoute du poids et réduit la réversibilité ; sur étude</td></tr>\n<tr><td>Remplacement</td><td>Solive neuve de même essence et section</td><td>Si la solive est irrécupérable</td></tr>\n</tbody>\n</table>\n<p>Lors du remplacement d'une solive encastrée, on prévoit une réservation dans le mur suffisante, un about sain posé sur une cale de répartition (pierre dure ou bois dur), et un espace ventilé autour de l'about pour qu'il ne pourrisse pas.</p>"
      },
      {
       "titre": "Cuber et commander le bois",
       "contenu": "<p>Le bois de charpente se commande sur <strong>liste de débit</strong> : pour chaque pièce, on indique l'essence, la qualité, les dimensions (section × longueur), le nombre, et le repère. On commande la longueur utile augmentée des longueurs de tenons, d'entures et d'une surlongueur de coupe. Le volume total s'exprime en m<sup>3</sup> : c'est le <strong>cubage</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> cubage pour une reprise de pan de bois. Liste : 1 sablière basse en chêne 20 × 20 cm, longueur 5,40 m ; 4 greffes de pieds de poteaux 16 × 16 cm, longueur 1,20 m chacune ; 2 décharges 14 × 16 cm, longueur 2,60 m. 1. Sablière : 0,20 × 0,20 × 5,40 = 0,216 m<sup>3</sup>. 2. Greffes : 4 × 0,16 × 0,16 × 1,20 = 0,123 m<sup>3</sup>. 3. Décharges : 2 × 0,14 × 0,16 × 2,60 = 0,116 m<sup>3</sup>. 4. Total : 0,455 m<sup>3</sup>. 5. Majoration de 10 % pour coupes et défauts : 0,455 × 1,10 ≈ 0,50 m<sup>3</sup>. 6. Masse du chêne vert (masse volumique de l'ordre de 1 000 kg/m<sup>3</sup> à l'état vert, valeur indicative) : environ 500 kg ; la sablière seule pèse plus de 200 kg et se manutentionne avec des moyens mécaniques ou à plusieurs, selon les règles de manutention.</div>\n<p>On précise aussi la <strong>qualité</strong> attendue (bois sans aubier pour les pièces exposées, nœuds limités, fil droit) et l'<strong>humidité</strong> à la livraison. Pour le chêne de restauration, on accepte souvent un bois vert ou mi-sec, en tenant compte du retrait qui se produira après la pose (fentes, jeux dans les assemblages qu'il faudra resserrer).</p>"
      }
     ],
     "points_cles": [
      "Le pan de bois comprend sablières, poteaux corniers, poteaux de remplissage, décharges, croix de Saint-André et entretoises.",
      "Les désordres se concentrent en partie basse et dans les zones qui retiennent l'eau.",
      "Un enduit étanche peut cacher un pan de bois pourri : sondages indispensables.",
      "Reprendre une sablière : étayer, relever, déposer par tronçons, reprendre le soubassement, poser, cheviller, désétayer.",
      "Les planchers anciens ont des points faibles : abouts encastrés, chevêtres, entailles, surcharges.",
      "Toute augmentation de charge sur un plancher ancien doit être vérifiée par le calcul.",
      "Renforts possibles : greffe, doublage, appui, solives intermédiaires, plancher mixte, remplacement.",
      "Le bois se commande sur liste de débit ; le cubage est la somme des volumes majorée des pertes."
     ],
     "lexique": [
      {
       "terme": "Pan de bois",
       "def": "Mur à ossature porteuse en bois, aux vides remplis de matériaux divers."
      },
      {
       "terme": "Sablière basse",
       "def": "Pièce horizontale inférieure d'un pan de bois, posée sur le soubassement."
      },
      {
       "terme": "Poteau cornier",
       "def": "Poteau d'angle d'un pan de bois."
      },
      {
       "terme": "Décharge",
       "def": "Pièce oblique d'un pan de bois qui contrevente et reporte les charges."
      },
      {
       "terme": "Croix de Saint-André",
       "def": "Deux pièces obliques croisées formant un X, servant au contreventement."
      },
      {
       "terme": "Entretoise",
       "def": "Pièce horizontale reliant deux poteaux."
      },
      {
       "terme": "Encorbellement",
       "def": "Saillie d'un étage sur le niveau inférieur, portée en console."
      },
      {
       "terme": "Solive",
       "def": "Pièce horizontale d'un plancher, portant le revêtement de sol."
      },
      {
       "terme": "Solive d'enchevêtrure",
       "def": "Solive renforcée qui reçoit un chevêtre autour d'une trémie."
      },
      {
       "terme": "Liste de débit",
       "def": "Liste détaillée des pièces de bois à fournir avec leurs dimensions et repères."
      },
      {
       "terme": "Cubage",
       "def": "Volume de bois exprimé en mètres cubes."
      }
     ]
    },
    {
     "id": "bipb-c-couvertures-tuiles",
     "titre": "Les couvertures en tuiles de terre cuite",
     "niveau": "1re",
     "options": [
      "c"
     ],
     "duree": 45,
     "objectifs": [
      "Distinguer tuiles plates, tuiles canal et tuiles mécaniques et leurs principes d'étanchéité",
      "Utiliser les notions de pente, pureau, recouvrement, zone et situation",
      "Calculer le pureau et le nombre de tuiles plates au mètre carré",
      "Décrire la restauration d'une couverture en tuiles avec réemploi",
      "Expliquer le rôle de la ventilation de la sous-face de couverture"
     ],
     "sections": [
      {
       "titre": "Le principe d'une couverture en petits éléments",
       "contenu": "<p>Une couverture en tuiles n'est pas étanche comme une membrane : elle assure l'<strong>étanchéité par recouvrement</strong> des éléments et par la <strong>pente</strong>, qui fait ruisseler l'eau plus vite qu'elle ne peut remonter. Trois notions sont fondamentales :</p>\n<ul>\n<li>la <strong>pente</strong> du versant, exprimée en % ou en degrés ;</li>\n<li>le <strong>recouvrement</strong> : longueur sur laquelle un élément recouvre ceux du rang inférieur ;</li>\n<li>le <strong>pureau</strong> : partie visible d'un élément une fois posé, qui correspond à l'espacement des rangs (et des liteaux).</li>\n</ul>\n<p>Plus la pente est faible, plus l'eau ruisselle lentement et plus le vent peut la faire remonter : il faut alors un recouvrement plus important. Les règles de l'art, rassemblées dans les <strong>documents techniques unifiés</strong> (NF DTU de la série 40.2 pour les tuiles de terre cuite), fixent les pentes minimales et les recouvrements en fonction de la <strong>zone climatique</strong> (zones I, II et III, selon l'exposition aux pluies et l'altitude), de la <strong>situation</strong> du bâtiment (protégée, normale, exposée) et de la longueur du rampant.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pente, recouvrement et pureau sont liés. On ne peut pas réduire la pente d'une toiture ancienne, ni augmenter le pureau pour « économiser des tuiles », sans risquer des infiltrations. En restauration, on respecte la pente existante et les prescriptions du dossier, qui s'appuient sur les DTU et sur les dispositions d'origine.</div>"
      },
      {
       "titre": "Les trois grandes familles de tuiles",
       "contenu": "<table>\n<thead><tr><th>Famille</th><th>Description</th><th>Pose</th><th>Régions et époques</th></tr></thead>\n<tbody>\n<tr><td><strong>Tuile plate</strong></td><td>Petite tuile rectangulaire plane, avec un ou deux ergots (tenons) au revers, parfois percée pour un clou</td><td>Accrochée par l'ergot sur des liteaux ou des lattes, en <strong>double recouvrement</strong> : chaque tuile est recouverte par les deux rangs supérieurs ; joints décalés d'un rang à l'autre</td><td>Moitié nord de la France, Bourgogne, Île-de-France, Normandie ; forte pente</td></tr>\n<tr><td><strong>Tuile canal</strong> (tuile creuse, tuile romaine)</td><td>Tuile en forme de demi-tronc de cône</td><td>Rangées de <strong>tuiles de courant</strong> (concavité vers le haut, qui conduisent l'eau) et de <strong>tuiles de couvert</strong> (convexité vers le haut, qui couvrent les joints) ; pose sur volige, liteaux ou support adapté</td><td>Sud de la France ; faible pente</td></tr>\n<tr><td><strong>Tuile mécanique</strong> (à emboîtement ou à glissement)</td><td>Tuile moulée à reliefs, emboîtée latéralement et en tête</td><td>Simple recouvrement, sur liteaux, pureau fixé par le modèle</td><td>Diffusée depuis le XIX<sup>e</sup> siècle dans toute la France</td></tr>\n</tbody>\n</table>\n<p>Les règles de pose correspondantes figurent principalement dans le NF DTU 40.23 (tuiles plates de terre cuite), le NF DTU 40.22 (tuiles canal de terre cuite) et le NF DTU 40.21 (tuiles de terre cuite à emboîtement ou à glissement à relief). Les fabricants complètent ces documents par leurs prescriptions de pose.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en restauration, les tuiles d'origine (tuiles plates faites main, tuiles canal anciennes) ont un aspect irrégulier et une teinte nuancée que les tuiles industrielles reproduisent mal. Dans les espaces protégés, l'ABF exige souvent le réemploi des tuiles anciennes saines complétées par des tuiles de récupération ou par des tuiles neuves « vieillies » d'aspect proche, mélangées.</div>"
      },
      {
       "titre": "Pureau et quantités pour la tuile plate",
       "contenu": "<p>Pour un élément posé en double recouvrement (tuile plate, ardoise), chaque élément est recouvert par celui du rang immédiatement supérieur et par celui du rang suivant. Le recouvrement R se mesure entre l'élément et celui situé deux rangs au-dessus. On en déduit :</p>\n<p><strong>Pureau = (longueur de l'élément − recouvrement) / 2</strong></p>\n<p>Le nombre d'éléments au m<sup>2</sup> vaut alors : 1 / (pureau × largeur), avec les dimensions en mètres.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> couverture en petites tuiles plates de 17 × 27 cm, recouvrement prescrit 7 cm. 1. Pureau : (27 − 7) / 2 = 10 cm, soit 0,10 m. 2. Surface couverte par une tuile : 0,10 × 0,17 = 0,017 m<sup>2</sup>. 3. Nombre de tuiles par m<sup>2</sup> : 1 / 0,017 ≈ 59 tuiles. 4. Pour un versant de 9,60 m × 6,20 m (rampant) : surface 59,52 m<sup>2</sup>, soit 59,52 × 59 ≈ 3 512 tuiles. 5. On ajoute les rangs d'égout doublés (doublis), les tuiles de rive (tuiles et demies ou demi-tuiles en alternance pour décaler les joints) et un pourcentage de casse, ainsi que la proportion de tuiles réemployées. 6. Espacement des liteaux (entraxe) : égal au pureau, soit 10 cm, à vérifier et ajuster sur le rampant réel pour obtenir un nombre entier de rangs.</div>\n<p>En pratique, les quantités par m<sup>2</sup> données par les fabricants pour un pureau donné sont utilisées pour les tuiles neuves. Pour des tuiles anciennes de dimensions irrégulières, on mesure un échantillon et on calcule.</p>"
      },
      {
       "titre": "Le support et la ventilation",
       "contenu": "<p>Les tuiles reposent sur un support : <strong>liteaux</strong> (petites pièces de bois de section régulière cloués sur les chevrons), <strong>lattes</strong> fendues ou sciées dans les couvertures anciennes, ou <strong>voliges</strong> (planches jointives ou espacées) pour certaines couvertures en tuile canal. Le support doit être sain, de section suffisante, fixé et aligné.</p>\n<p>La sous-face d'une couverture en tuiles doit être <strong>ventilée</strong> : l'air circule entre les tuiles et le support, depuis des entrées à l'égout jusqu'à des sorties au faîtage ou en partie haute. Cette ventilation évacue l'humidité et la vapeur d'eau venue du comble, et limite les condensations sous les tuiles qui favorisent le gel et la pourriture des bois.</p>\n<p>Dans les rénovations actuelles, on pose souvent un <strong>écran de sous-toiture</strong> (membrane souple) entre les chevrons et les liteaux, sur des contre-liteaux, pour recueillir l'eau qui passerait accidentellement et limiter l'entrée de neige poudreuse. Sur le bâti ancien, on choisit un écran <strong>hautement perméable à la vapeur</strong>, et on conserve une lame d'air ventilée sous les tuiles.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> calfeutrer complètement une couverture ancienne (mousse expansive entre tuiles, membrane étanche à la vapeur sans ventilation, isolant plaqué contre les tuiles) supprime la ventilation : la vapeur du comble se condense sous les tuiles et dans les bois, avec pourriture des liteaux et éclatement des tuiles par le gel.</div>"
      },
      {
       "titre": "Restaurer une couverture en tuiles",
       "contenu": "<p>La restauration d'une couverture en tuiles se déroule en plusieurs étapes :</p>\n<ol>\n<li><strong>Relevé</strong> de l'existant : modèle et dimensions des tuiles, pureau, dispositions des rives, faîtage, égout, noues, ouvrages particuliers ; photos.</li>\n<li><strong>Dépose soignée</strong> des tuiles, de haut en bas, avec <strong>tri</strong> immédiat : tuiles saines réemployables, tuiles à vérifier, rebuts. On sonne les tuiles et on écarte celles qui sont fêlées, feuilletées ou gélives.</li>\n<li><strong>Stockage</strong> sur palettes, à proximité, protégées, par modèle.</li>\n<li><strong>Révision du support</strong> : remplacement des lattes ou liteaux, contrôle des chevrons avec le charpentier, ventilation, écran éventuel.</li>\n<li><strong>Repose</strong> : tuiles anciennes et tuiles de complément <strong>mélangées</strong> (et non regroupées sur un versant) pour une teinte homogène, en respectant le pureau d'origine.</li>\n<li><strong>Points singuliers</strong> : égout, rives, faîtage, noues, solins, à refaire selon les dispositions traditionnelles ou le dossier.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer le complément de tuiles. Couverture de 120 m<sup>2</sup> à 59 tuiles/m<sup>2</sup> : besoin théorique 7 080 tuiles, plus 5 % pour coupes, rives et casse à la pose : 7 080 × 1,05 ≈ 7 434. Le tri a montré que 70 % des tuiles déposées sont réemployables : environ 7 080 × 0,70 ≈ 4 956 tuiles. Complément à commander : 7 434 − 4 956 = 2 478, arrondi à 2 500 tuiles, en tuiles de récupération ou neuves de même modèle, à approvisionner avant la dépose pour ne pas laisser le comble ouvert.</div>"
      },
      {
       "titre": "Les fixations et la tenue au vent",
       "contenu": "<p>Une tuile tient d'abord par son <strong>poids</strong> et son <strong>accrochage</strong> (ergot sur le liteau). Mais le vent crée sur la toiture des dépressions qui tendent à soulever les éléments, surtout en rives, à l'égout, au faîtage et dans les angles. Les règles de l'art imposent donc de <strong>fixer</strong> une partie des tuiles (clous, crochets, pannetons ou fils selon le modèle), avec une proportion qui augmente avec la pente, la zone de vent et la position sur le toit. Au-delà d'une certaine pente, toutes les tuiles doivent être fixées.</p>\n<p>Les fixations sont en matériau non corrodable (cuivre, acier inoxydable, acier galvanisé selon les prescriptions). Les tuiles de rive, d'égout et de faîtage reçoivent des fixations systématiques et souvent un scellement au mortier de chaux.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur la tuile canal, les tuiles de couvert, simplement posées, glissent avec le temps. Les couvreurs les bloquent traditionnellement par des solins de mortier en rive et au faîtage, et aujourd'hui aussi par des crochets ou des fixations adaptées. Lors d'une révision de couverture, on « recharge » les tuiles qui ont glissé et on refixe celles qui sont mobiles.</div>"
      }
     ],
     "points_cles": [
      "L'étanchéité d'une couverture en tuiles repose sur la pente et le recouvrement.",
      "Les DTU de la série 40.2 fixent pentes et recouvrements selon zone, situation et longueur de rampant.",
      "Tuile plate en double recouvrement, tuile canal en courants et couverts, tuile mécanique à emboîtement.",
      "Pureau = (longueur − recouvrement) / 2 ; nombre au m² = 1 / (pureau × largeur).",
      "La sous-face doit rester ventilée ; un écran éventuel est très perméable à la vapeur.",
      "Restauration : relevé, dépose soignée, tri, stockage, révision du support, repose en mélangeant anciennes et neuves.",
      "Le complément de tuiles se calcule à partir du besoin, des pertes et du taux de réemploi.",
      "Une proportion de tuiles est fixée, davantage en rives, égout, faîtage et forte pente."
     ],
     "lexique": [
      {
       "terme": "Pureau",
       "def": "Partie visible d'un élément de couverture une fois posé."
      },
      {
       "terme": "Recouvrement",
       "def": "Longueur sur laquelle un élément de couverture en recouvre un autre."
      },
      {
       "terme": "Double recouvrement",
       "def": "Pose où chaque élément est recouvert par les deux rangs supérieurs."
      },
      {
       "terme": "Tuile de courant",
       "def": "Tuile canal posée concavité vers le haut, qui conduit l'eau."
      },
      {
       "terme": "Tuile de couvert",
       "def": "Tuile canal posée convexité vers le haut, qui couvre les joints des courants."
      },
      {
       "terme": "Ergot",
       "def": "Saillie au revers d'une tuile plate qui l'accroche au liteau."
      },
      {
       "terme": "Liteau",
       "def": "Pièce de bois de faible section, clouée sur les chevrons, qui porte les tuiles."
      },
      {
       "terme": "Écran de sous-toiture",
       "def": "Membrane posée sous les éléments de couverture pour recueillir les infiltrations accidentelles."
      },
      {
       "terme": "Zone climatique",
       "def": "Zone définie par les DTU de couverture selon l'exposition aux pluies et l'altitude."
      },
      {
       "terme": "Situation",
       "def": "Exposition locale d'un bâtiment au vent : protégée, normale ou exposée."
      },
      {
       "terme": "Doublis",
       "def": "Rang de tuiles doublé à l'égout pour assurer le recouvrement du premier rang."
      }
     ]
    },
    {
     "id": "bipb-c-ardoise-lauze",
     "titre": "Couvertures en ardoise, lauzes et matériaux traditionnels",
     "niveau": "1re-Tle",
     "options": [
      "c"
     ],
     "duree": 45,
     "objectifs": [
      "Décrire les caractéristiques et les critères de qualité d'une ardoise naturelle",
      "Comparer la pose au clou et la pose au crochet",
      "Calculer pureau, nombre d'ardoises et espacement des liteaux ou voliges",
      "Décrire les couvertures en lauzes et leurs contraintes",
      "Connaître les autres matériaux traditionnels : bardeaux, chaume"
     ],
     "sections": [
      {
       "titre": "L'ardoise naturelle",
       "contenu": "<p>L'<strong>ardoise</strong> naturelle est un schiste ardoisier, roche métamorphique qui se débite par <strong>clivage</strong> en feuilles minces et régulières. Elle est mise en œuvre en <strong>double recouvrement</strong>, comme la tuile plate. Très durable lorsqu'elle est de bonne qualité, elle couvre traditionnellement l'Ouest de la France, une grande partie du Massif central, les Ardennes, et les toitures prestigieuses de toute la France depuis le Moyen Âge.</p>\n<p>Les ardoises sont classées selon leur origine et leur qualité. Les critères principaux sont :</p>\n<ul>\n<li>l'<strong>épaisseur</strong>, régulière, de l'ordre de 3 à 5 mm pour les ardoises courantes ;</li>\n<li>le <strong>format</strong> (longueur × largeur), par exemple 32 × 22 cm, 40 × 25 cm, 45 × 30 cm, ou des formats régionaux anciens ;</li>\n<li>l'<strong>absence de défauts</strong> : inclusions de pyrite oxydable (qui rouille et perce l'ardoise), veines de quartz, nœuds, fissures ;</li>\n<li>la <strong>résistance</strong> au gel, à l'absorption d'eau et aux variations de température, vérifiée par des essais normalisés.</li>\n</ul>\n<p>La pose est encadrée par le NF DTU 40.11 (couverture en ardoises naturelles), qui fixe notamment les recouvrements selon la pente, la zone et la situation.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le couvreur trie les ardoises avant la pose : il les classe par épaisseur (les plus épaisses en bas du versant, près de l'égout, où l'eau ruisselle en plus grande quantité) et écarte celles qui présentent des défauts. Il les « sonne » : une ardoise saine rend un son clair.</div>"
      },
      {
       "titre": "Pose au clou ou pose au crochet",
       "contenu": "<table>\n<thead><tr><th>Critère</th><th>Pose au clou</th><th>Pose au crochet</th></tr></thead>\n<tbody>\n<tr><td>Fixation</td><td>Deux clous (en cuivre en général) traversant l'ardoise percée, invisibles car recouverts par les rangs supérieurs</td><td>Crochet métallique (acier inoxydable, cuivre) planté dans le support, qui retient le pied de l'ardoise ; crochet visible en partie basse</td></tr>\n<tr><td>Support</td><td>Voliges (planches) jointives ou faiblement espacées</td><td>Liteaux ou voliges</td></tr>\n<tr><td>Usage</td><td>Couverture traditionnelle, monuments, aspect soigné sans pièce visible</td><td>Pose plus rapide, remplacement d'ardoise facilité</td></tr>\n<tr><td>Remplacement d'une ardoise</td><td>Nécessite de couper les clous avec un tire-clou et de fixer l'ardoise neuve par un crochet ou une agrafe</td><td>Plus simple : on écarte le crochet, on glisse l'ardoise neuve</td></tr>\n</tbody>\n</table>\n<p>En restauration de monuments et dans de nombreux secteurs protégés, la <strong>pose au clou</strong> est souvent exigée pour retrouver l'aspect traditionnel. La pose au crochet est plus courante dans le bâti ordinaire contemporain. Il existe aussi des poses régionales particulières (ardoises posées à pureau décroissant, ardoises en écailles, en losanges).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les clous en acier ordinaire rouillent, gonflent et cassent : les ardoises glissent. On utilise des clous et crochets en matériaux compatibles et non corrodables, et l'on ne mélange pas sur une même couverture des fixations en métaux pouvant créer une corrosion galvanique.</div>"
      },
      {
       "titre": "Calculer une couverture en ardoises",
       "contenu": "<p>Les calculs suivent le même principe que pour la tuile plate : pureau = (longueur − recouvrement) / 2. L'entraxe des liteaux ou la position des clous découlent du pureau.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> ardoises de 32 × 22 cm, recouvrement prescrit 8 cm, versant de 11,00 m de long et 7,20 m de rampant. 1. Pureau : (32 − 8) / 2 = 12 cm. 2. Nombre d'ardoises par m<sup>2</sup> : 1 / (0,12 × 0,22) ≈ 37,9, soit 38. 3. Surface du versant : 11,00 × 7,20 = 79,2 m<sup>2</sup>. 4. Nombre d'ardoises courantes : 79,2 × 38 ≈ 3 010. 5. Nombre de rangs : 7,20 / 0,12 = 60 rangs (après le doublis d'égout). 6. Ajout de 5 à 10 % pour les rives, les coupes, la casse et le tri, selon la complexité : environ 3 010 × 1,08 ≈ 3 250 ardoises. 7. Clous : deux par ardoise, soit environ 6 500 clous, plus une réserve.</div>\n<p>Pour une pose au clou sur voliges, on trace les rangs au cordeau sur les voliges : la ligne de pureau de chaque rang et la ligne de clouage. Pour une pose au crochet sur liteaux, l'entraxe des liteaux est égal au pureau.</p>\n<p>À l'égout, le <strong>doublis</strong> (rang d'ardoises plus courtes posées sous le premier rang) assure le double recouvrement dès le premier rang. Au faîtage, on termine par un <strong>rang de faîtage</strong> à pureau adapté, recouvert par un faîtage en zinc, en plomb, en ardoises (lignolet, faîtage à « bourseau ») ou en terre cuite selon les régions.</p>"
      },
      {
       "titre": "Les couvertures en lauzes",
       "contenu": "<p>Les <strong>lauzes</strong> sont des pierres plates, calcaires ou schisteuses, utilisées comme éléments de couverture dans certaines régions (Causses, Périgord, Auvergne, Alpes, Bourgogne). Elles sont épaisses (plusieurs centimètres) et très lourdes : une couverture en lauzes peut peser plusieurs centaines de kilogrammes par m<sup>2</sup>, ce qui impose des charpentes très robustes.</p>\n<p>Leur pose présente des particularités :</p>\n<ul>\n<li>pose à <strong>pureau dégressif</strong> : les plus grandes et plus épaisses lauzes en bas, les plus petites en haut ;</li>\n<li>pose sur voliges ou lattis robustes, ou sur un lit de mortier ou de terre selon les traditions ;</li>\n<li>fixation par chevilles de bois, par clous, ou simplement par le poids et le frottement ;</li>\n<li>forte pente pour les lauzes calcaires des Causses et du Périgord, réalisant parfois des toitures très pentues avec coyau en pied.</li>\n</ul>\n<p>Les ressources en lauzes neuves sont rares et coûteuses : la restauration repose largement sur le réemploi et la récupération, après tri et calibrage. Le métier est pratiqué par des couvreurs spécialisés, les <strong>lauziers</strong>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la manutention des lauzes expose à des charges très lourdes et à la chute d'éléments. Les approvisionnements se font par moyens mécaniques, l'échafaudage est dimensionné pour le stockage temporaire de ces charges, et l'on ne stocke jamais de lauzes sur la toiture sans vérification de la charpente.</div>"
      },
      {
       "titre": "Bardeaux de bois et chaume",
       "contenu": "<p>D'autres matériaux traditionnels subsistent sur le bâti ancien :</p>\n<ul>\n<li>les <strong>bardeaux</strong> (ou essentes, tavaillons selon les régions), petites planchettes de bois fendu (châtaignier, chêne, mélèze, épicéa), posés en recouvrement multiple comme des ardoises, sur les toitures et les façades de montagne, de Normandie ou des clochers ; leur durabilité dépend de l'essence, du fendage (qui suit le fil et ferme les pores) et de la ventilation ;</li>\n<li>le <strong>chaume</strong> (roseau, paille de seigle ou de blé), posé en bottes épaisses ligaturées sur des lattes, dans certaines régions (Normandie, Brière, Bretagne) ; très isolant, il demande une forte pente et un savoir-faire de chaumier, avec des précautions particulières contre l'incendie.</li>\n</ul>\n<p>Ces matériaux ont souvent été remplacés par des matériaux industriels ; leur restitution est aujourd'hui encouragée dans les secteurs protégés, et les entreprises qui les maîtrisent sont recherchées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le matériau de couverture fait partie de l'identité régionale d'un bâtiment. Remplacer une couverture en lauzes ou en petites tuiles plates par un matériau industriel uniforme modifie profondément l'aspect du bâti, ce qui est souvent interdit dans les espaces protégés.</div>"
      },
      {
       "titre": "Réviser et réparer une couverture en ardoise",
       "contenu": "<p>Une couverture en ardoise de qualité peut durer très longtemps si elle est entretenue. Les interventions d'entretien et de réparation sont :</p>\n<ul>\n<li>le <strong>remplacement ponctuel</strong> d'ardoises cassées ou glissées, à l'aide d'un <strong>tire-clou</strong> (lame crochue passée sous l'ardoise pour couper les clous), puis fixation de l'ardoise neuve par crochet ou agrafe en cuivre ;</li>\n<li>la <strong>réfection des points singuliers</strong> (faîtage, rives, noues, solins), qui se dégradent avant les parties courantes ;</li>\n<li>le <strong>démoussage</strong> mécanique doux et le nettoyage des gouttières ;</li>\n<li>la <strong>réfection complète</strong> lorsque les clous sont rouillés partout, les voliges pourries ou les ardoises en fin de vie (ardoises feuilletées, poreuses, tachées par la pyrite).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> décider entre révision et réfection. 1. Compter, sur une zone représentative de 10 m<sup>2</sup>, les ardoises cassées, glissées ou défectueuses. 2. Examiner l'état des clous sur quelques ardoises déposées et l'état des voliges vu depuis le comble. 3. Si les défauts sont localisés et les fixations saines : révision. 4. Si une part importante des ardoises est défectueuse ou si les fixations sont généralement corrodées : réfection complète, avec tri des ardoises réemployables. Le seuil de décision est fixé avec le maître d'ouvrage selon le coût comparé : une révision répétée chaque année sur une couverture en fin de vie finit par coûter plus cher qu'une réfection.</div>"
      }
     ],
     "points_cles": [
      "L'ardoise naturelle est un schiste clivé, posé en double recouvrement selon le NF DTU 40.11.",
      "Qualité d'une ardoise : épaisseur régulière, absence de pyrite oxydable, de veines et de fissures.",
      "Pose au clou sur voliges (aspect traditionnel) ou au crochet sur liteaux ou voliges.",
      "Pureau = (longueur − recouvrement) / 2 ; ardoises 32 × 22, recouvrement 8 cm : pureau 12 cm, environ 38 ardoises/m².",
      "Fixations en matériaux non corrodables et compatibles entre eux.",
      "Les lauzes, très lourdes, se posent à pureau dégressif sur des charpentes robustes.",
      "Bardeaux et chaume sont des matériaux régionaux à préserver et à restituer avec savoir-faire.",
      "Révision ou réfection se décident à partir d'un comptage des défauts et de l'état des fixations."
     ],
     "lexique": [
      {
       "terme": "Ardoise",
       "def": "Élément de couverture en schiste ardoisier clivé en feuilles minces."
      },
      {
       "terme": "Clivage",
       "def": "Propriété d'une roche de se fendre en feuillets réguliers."
      },
      {
       "terme": "Pyrite",
       "def": "Minéral sulfuré dont l'oxydation tache et perce l'ardoise."
      },
      {
       "terme": "Volige",
       "def": "Planche mince clouée sur les chevrons, support continu ou semi-continu de couverture."
      },
      {
       "terme": "Crochet",
       "def": "Pièce métallique fixée au support qui retient le pied d'une ardoise."
      },
      {
       "terme": "Tire-clou",
       "def": "Outil à lame crochue utilisé pour couper les clous d'une ardoise à remplacer."
      },
      {
       "terme": "Lauze",
       "def": "Pierre plate épaisse utilisée comme élément de couverture."
      },
      {
       "terme": "Pureau dégressif",
       "def": "Pureau qui diminue de l'égout vers le faîtage, avec des éléments de plus en plus petits."
      },
      {
       "terme": "Bardeau",
       "def": "Planchette de bois fendu utilisée en couverture ou en bardage."
      },
      {
       "terme": "Chaume",
       "def": "Couverture végétale en roseau ou en paille posée en bottes."
      },
      {
       "terme": "Coyau",
       "def": "Pièce de bois en pied de chevron qui adoucit la pente à l'égout."
      }
     ]
    },
    {
     "id": "bipb-c-metaux-evacuations",
     "titre": "Couvertures métalliques, zinguerie et évacuation des eaux pluviales",
     "niveau": "Tle",
     "options": [
      "c"
     ],
     "duree": 50,
     "objectifs": [
      "Comparer le zinc, le plomb et le cuivre en couverture et en ouvrages accessoires",
      "Expliquer les dispositions qui permettent la dilatation des métaux",
      "Décrire les gouttières, chéneaux et descentes du bâti ancien",
      "Estimer les sections d'évacuation nécessaires pour une toiture",
      "Mettre en œuvre un soudage à l'étain en sécurité"
     ],
     "sections": [
      {
       "titre": "Les métaux de la couverture",
       "contenu": "<p>Les métaux sont utilisés en couverture courante (toits en zinc des immeubles parisiens, dômes en plomb ou en cuivre) et surtout dans les <strong>ouvrages accessoires</strong> de toutes les couvertures : faîtages, noues, solins, bandes d'égout, chéneaux, gouttières, descentes, habillages de lucarnes et d'ornements.</p>\n<table>\n<thead><tr><th>Métal</th><th>Caractéristiques</th><th>Usages traditionnels</th><th>Points de vigilance</th></tr></thead>\n<tbody>\n<tr><td><strong>Zinc</strong></td><td>Léger, se patine en gris, se façonne et se soude à l'étain facilement</td><td>Couvertures à joints debout ou à tasseaux, gouttières, chéneaux, habillages, depuis le XIX<sup>e</sup> siècle</td><td>Forte dilatation ; corrosion par les tanins des bois, le plâtre, les eaux venant du cuivre, la condensation en sous-face</td></tr>\n<tr><td><strong>Plomb</strong></td><td>Très lourd, très malléable, extrêmement durable</td><td>Faîtages, noues, couvertures de dômes et de flèches, ornements, solins, scellements</td><td>Toxicité : précautions d'hygiène strictes ; fluage (glissement) sur les fortes pentes si les feuilles sont trop grandes</td></tr>\n<tr><td><strong>Cuivre</strong></td><td>Durable, se patine en brun puis en vert</td><td>Couvertures et ornements de prestige, gouttières</td><td>Ses eaux de ruissellement attaquent le zinc et l'acier galvanisé situés en aval</td></tr>\n</tbody>\n</table>\n<p>Les règles de mise en œuvre figurent dans les NF DTU de la série 40.4 (notamment le NF DTU 40.41 pour le zinc) et dans les documentations des fabricants.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le travail du plomb (découpe, façonnage, soudure) expose au plomb par les mains et les poussières. On ne mange pas, ne boit pas et ne fume pas sans s'être lavé les mains, on porte des gants, on garde des vêtements de travail réservés, et on ne ponce jamais à sec du plomb ancien.</div>"
      },
      {
       "titre": "La dilatation et les fixations",
       "contenu": "<p>Les métaux se dilatent avec la température, le zinc beaucoup plus que l'acier (environ 0,022 mm par mètre et par degré). Une feuille fixée rigidement à ses deux extrémités ne peut pas absorber cette dilatation : elle gondole, se fatigue et se fissure. Toutes les techniques de couverture métallique reposent donc sur le même principe : <strong>fixer sans brider</strong>.</p>\n<ul>\n<li>Les feuilles ou bandes sont fixées par des <strong>pattes</strong> : quelques <strong>pattes fixes</strong> dans une zone déterminée (souvent en partie haute), et des <strong>pattes coulissantes</strong> partout ailleurs, qui maintiennent la feuille tout en la laissant glisser.</li>\n<li>Les longueurs des feuilles et des bandes sont limitées selon le métal, son épaisseur et la pente.</li>\n<li>Les gouttières et chéneaux longs comportent des <strong>joints de dilatation</strong> (dilatateurs, talons) à intervalles réguliers.</li>\n<li>Les assemblages entre feuilles se font par <strong>agrafures</strong> (pliages emboîtés) ou <strong>joints debout</strong>, qui laissent les feuilles bouger, plutôt que par soudure continue sur de grandes longueurs.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier le jeu nécessaire dans un chéneau en zinc de 9 m. Écart de température possible entre un hiver froid et un plein soleil d'été : de −15 °C à +65 °C, soit 80 °C. Allongement : ΔL = 0,022 × 9 × 80 ≈ 15,8 mm. Si le chéneau comporte un dilatateur au milieu, chaque moitié de 4,5 m bouge d'environ 8 mm : le dilatateur doit pouvoir absorber cet ordre de grandeur, et les extrémités ne doivent pas être bloquées contre une maçonnerie. Sans dilatateur, la contrainte se concentre aux soudures et aux angles, qui finissent par se fissurer.</div>"
      },
      {
       "titre": "Les couvertures en zinc sur le bâti ancien",
       "contenu": "<p>Une couverture en zinc traditionnelle est réalisée en feuilles ou en bandes assemblées par <strong>tasseaux</strong> (liteaux trapézoïdaux en bois recouverts d'un couvre-joint) ou par <strong>joints debout</strong> (relevés pliés et agrafés ensemble). Le support est en principe un <strong>voligeage</strong> en bois résineux ou en panneaux adaptés, posé avec un léger espacement.</p>\n<p>La sous-face du zinc doit être <strong>ventilée</strong> : sinon, la vapeur d'eau venant du comble se condense sous la feuille froide, et le zinc se corrode par l'intérieur (taches blanches puis perforation), alors que sa face extérieure paraît saine. Les règles de l'art imposent une lame d'air ventilée entre le voligeage et l'isolant, avec des entrées et sorties d'air.</p>\n<p>Le support ne doit pas être agressif : on évite les bois acides (chêne, châtaignier, certains résineux comme le red cedar) et les traitements incompatibles au contact du zinc, ou l'on interpose une séparation adaptée.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les toitures en zinc et ardoise des immeubles parisiens du XIX<sup>e</sup> siècle font partie du paysage urbain. Leur restauration suit les techniques d'origine (tasseaux, brisis en ardoise, terrasson en zinc), avec un soin particulier pour les nombreux ouvrages particuliers : lucarnes, œils-de-bœuf, souches de cheminées, chéneaux encaissés.</div>"
      },
      {
       "titre": "Gouttières, chéneaux et descentes",
       "contenu": "<p>L'eau recueillie par la toiture est collectée à l'égout puis évacuée :</p>\n<table>\n<thead><tr><th>Ouvrage</th><th>Description</th></tr></thead>\n<tbody>\n<tr><td><strong>Gouttière pendante</strong></td><td>Gouttière demi-ronde ou moulurée suspendue par des <strong>crochets</strong> fixés au chevron ou à la planche d'égout, en avant du mur</td></tr>\n<tr><td><strong>Gouttière sur entablement</strong> (havraise, nantaise selon les profils)</td><td>Gouttière posée sur la corniche, maintenue par des crochets et une bavette qui protège le dessus de la corniche</td></tr>\n<tr><td><strong>Chéneau</strong></td><td>Canal encaissé dans la toiture ou posé sur un mur, souvent entre deux versants ou derrière un parapet</td></tr>\n<tr><td><strong>Naissance</strong> (moignon)</td><td>Raccord entre gouttière ou chéneau et descente</td></tr>\n<tr><td><strong>Descente</strong> (tuyau de descente)</td><td>Conduit vertical maintenu par des colliers, qui conduit l'eau au sol ou au réseau</td></tr>\n<tr><td><strong>Dauphin</strong></td><td>Partie basse de la descente, en fonte, résistante aux chocs</td></tr>\n<tr><td><strong>Trop-plein</strong></td><td>Orifice de sécurité qui évacue l'eau vers l'extérieur si la descente est bouchée, indispensable dans les chéneaux encaissés</td></tr>\n</tbody>\n</table>\n<p>Les gouttières ont une <strong>pente</strong> vers les naissances, souvent de l'ordre de quelques millimètres par mètre, pour éviter les stagnations. Les chéneaux encaissés sont des points très sensibles : un débordement envoie l'eau directement dans les maçonneries et les bois ; c'est pourquoi ils sont munis de trop-pleins et entretenus régulièrement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'entretien des gouttières et chéneaux est un travail en hauteur. Il se fait depuis une protection collective (échafaudage, nacelle) ou une toiture équipée, jamais en se penchant depuis une échelle appuyée sur la gouttière elle-même.</div>"
      },
      {
       "titre": "Dimensionner les évacuations",
       "contenu": "<p>Les sections des gouttières, chéneaux et descentes dépendent de la <strong>surface de toiture</strong> desservie (projetée en plan), de l'intensité des pluies de la région et de la pente. Les règles de dimensionnement figurent dans les documents techniques relatifs à l'évacuation des eaux pluviales et dans les tableaux des fabricants. Une règle pratique couramment utilisée pour un premier ordre de grandeur est de prévoir environ <strong>1 cm<sup>2</sup> de section de descente par m<sup>2</sup> de toiture</strong> projetée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> premier dimensionnement des descentes. Versant de 12,00 m de long, projection horizontale 5,00 m, soit 60 m<sup>2</sup> en plan, desservi par deux descentes. 1. Section totale de descente : environ 60 cm<sup>2</sup>. 2. Par descente : 30 cm<sup>2</sup>. 3. Diamètre correspondant : S = π × D<sup>2</sup> / 4, d'où D = √(4 × 30 / π) ≈ 6,2 cm. 4. On retient le diamètre commercial immédiatement supérieur, par exemple 80 mm, en vérifiant ensuite avec les tableaux du fabricant et les règles applicables (intensité de pluie locale, longueur de gouttière par naissance). Sur un bâtiment ancien, on conserve si possible les diamètres et le nombre de descentes d'origine, sauf s'ils se révèlent insuffisants.</div>\n<p>On vérifie aussi que chaque descente est raccordée correctement en pied : à un réseau d'eaux pluviales, à un puisard ou à un caniveau qui éloigne l'eau du mur. Une descente qui se déverse au pied d'un mur ancien est une cause classique de remontées et d'infiltrations.</p>"
      },
      {
       "titre": "Façonner et souder",
       "contenu": "<p>Le travail des métaux en couverture combine traçage, découpe, pliage (à la plieuse ou au maillet sur une bigorne), agrafage et soudage. Le <strong>soudage à l'étain</strong> (en réalité un brasage tendre) assemble le zinc, le cuivre ou le plomb avec un alliage étain-plomb ou étain sans plomb fondu au fer à souder chauffé au gaz.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> soudure d'un raccord de gouttière en zinc. 1. Préparer : couper et ajuster les pièces avec un recouvrement suffisant (de l'ordre de 1 à 2 cm selon la prescription). 2. Nettoyer et décaper le zinc à la brosse et appliquer le décapant adapté au métal, surtout sur du zinc patiné. 3. Chauffer le fer à souder à la bonne température (un fer trop chaud brûle le zinc, un fer trop froid fait une soudure grumeleuse). 4. Pointer les pièces, puis tirer la soudure en faisant pénétrer l'étain dans le recouvrement. 5. Rincer les restes de décapant, corrosifs. 6. Contrôler visuellement : soudure lisse, continue, sans pores.</div>\n<p>Le soudage est un <strong>travail par point chaud</strong> : il nécessite un <strong>permis de feu</strong> sur les chantiers de restauration, la protection des bois et matériaux combustibles voisins, un extincteur à portée de main et une surveillance après travaux. Les décapants et fumées de soudure exigent une bonne ventilation et le port de gants et lunettes.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en couverture métallique, les trois règles fondamentales sont : laisser le métal se dilater, ventiler sa sous-face et éviter les contacts et ruissellements entre métaux ou matériaux incompatibles.</div>"
      }
     ],
     "points_cles": [
      "Zinc, plomb et cuivre servent en couverture et dans tous les ouvrages accessoires.",
      "Le plomb est toxique : hygiène stricte et pas de ponçage à sec.",
      "Fixer sans brider : pattes fixes et coulissantes, longueurs limitées, dilatateurs, agrafures.",
      "La sous-face du zinc doit être ventilée pour éviter la corrosion par condensation.",
      "Le zinc craint les bois acides, le plâtre et les eaux venant du cuivre.",
      "Gouttières pendantes ou sur entablement, chéneaux, naissances, descentes, dauphins et trop-pleins évacuent l'eau.",
      "Ordre de grandeur : environ 1 cm² de section de descente par m² de toiture projetée, à vérifier par les règles applicables.",
      "Le soudage à l'étain est un point chaud : permis de feu et surveillance."
     ],
     "lexique": [
      {
       "terme": "Zinguerie",
       "def": "Ensemble des ouvrages en métal façonné d'une couverture : gouttières, noues, solins, habillages."
      },
      {
       "terme": "Joint debout",
       "def": "Assemblage de deux feuilles métalliques par relevés pliés et agrafés ensemble."
      },
      {
       "terme": "Tasseau",
       "def": "Liteau trapézoïdal recouvert d'un couvre-joint, séparant deux feuilles de zinc."
      },
      {
       "terme": "Patte coulissante",
       "def": "Fixation qui maintient une feuille métallique en la laissant se dilater."
      },
      {
       "terme": "Agrafure",
       "def": "Assemblage par pliages emboîtés de deux éléments métalliques."
      },
      {
       "terme": "Chéneau",
       "def": "Canal de recueil des eaux pluviales encaissé ou posé sur un mur."
      },
      {
       "terme": "Naissance",
       "def": "Pièce de raccordement entre une gouttière ou un chéneau et une descente."
      },
      {
       "terme": "Dauphin",
       "def": "Partie inférieure d'une descente, en fonte, résistante aux chocs."
      },
      {
       "terme": "Trop-plein",
       "def": "Orifice de sécurité évacuant l'eau en cas d'obstruction de la descente."
      },
      {
       "terme": "Brasage tendre",
       "def": "Assemblage de métaux par un alliage d'apport fondant à basse température, comme l'étain."
      },
      {
       "terme": "Fluage",
       "def": "Déformation lente d'un matériau sous charge constante, comme le plomb sur forte pente."
      }
     ]
    },
    {
     "id": "bipb-c-points-singuliers",
     "titre": "Points singuliers et ornements de couverture",
     "niveau": "Tle",
     "options": [
      "c"
     ],
     "duree": 45,
     "objectifs": [
      "Identifier les points singuliers d'une couverture et leurs risques d'infiltration",
      "Décrire les faîtages, rives et égouts traditionnels",
      "Expliquer la réalisation des noues et des raccords contre maçonnerie (solins, bandes de rive)",
      "Traiter les abords d'une souche de cheminée et d'une lucarne",
      "Restaurer les ornements de toiture : épis, crêtes, girouettes"
     ],
     "sections": [
      {
       "titre": "Pourquoi les points singuliers sont critiques",
       "contenu": "<p>Sur un versant courant, la pente et le recouvrement suffisent à évacuer l'eau. Les <strong>points singuliers</strong> sont toutes les zones où ce fonctionnement est interrompu : changements de pente, intersections de versants, rencontres avec un mur ou une cheminée, ouvertures, bords. L'eau s'y concentre ou peut y pénétrer latéralement, et c'est là que se produisent la grande majorité des infiltrations.</p>\n<table>\n<thead><tr><th>Point singulier</th><th>Situation</th></tr></thead>\n<tbody>\n<tr><td>Faîtage</td><td>Ligne haute où se rejoignent deux versants</td></tr>\n<tr><td>Arêtier</td><td>Angle saillant entre deux versants</td></tr>\n<tr><td>Noue</td><td>Angle rentrant où les eaux de deux versants se concentrent</td></tr>\n<tr><td>Égout</td><td>Bas du versant, où l'eau quitte la couverture</td></tr>\n<tr><td>Rive</td><td>Bord latéral d'un versant, libre ou contre un mur</td></tr>\n<tr><td>Raccords contre maçonnerie</td><td>Rencontre avec un mur pignon, un mur plus haut, une souche de cheminée</td></tr>\n<tr><td>Pénétrations</td><td>Lucarnes, fenêtres de toit, sorties de ventilation</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> lors d'un diagnostic d'infiltration, on examine d'abord les points singuliers situés au-dessus et en amont de la tache observée : l'eau peut cheminer le long des chevrons ou des voliges sur plusieurs mètres avant d'apparaître.</div>"
      },
      {
       "titre": "Faîtages, arêtiers et égouts",
       "contenu": "<p>Le <strong>faîtage</strong> ferme le sommet de la toiture. Selon les régions et les matériaux :</p>\n<ul>\n<li><strong>faîtières en terre cuite</strong> (demi-rondes ou angulaires) posées à recouvrement ou à emboîtement, scellées au <strong>mortier de chaux</strong> par des <strong>crêtes</strong> (bourrelets de mortier) et des <strong>embarrures</strong> (mortier qui ferme l'espace entre faîtière et tuiles), ou fixées à sec sur closoir ventilé dans les poses actuelles ;</li>\n<li><strong>faîtage en zinc ou en plomb</strong> pour les couvertures en ardoise ;</li>\n<li><strong>faîtage en ardoises</strong> (lignolet : le dernier rang d'un versant dépasse et recouvre l'autre côté, du côté opposé aux vents dominants).</li>\n</ul>\n<p>Les <strong>arêtiers</strong> sont traités de la même manière (tuiles arêtières, plomb, zinc, ardoises taillées en « noquets » ou en « arêtier fermé »). À l'<strong>égout</strong>, le premier rang est doublé (doublis) et légèrement relevé par une <strong>chanlatte</strong> ou par le coyau, pour que le premier rang ait la même inclinaison que les suivants, et l'eau est conduite dans la gouttière ou au-delà du mur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une couverture ancienne en tuiles, le mortier des faîtages et rives est un mortier de chaux, souvent teinté par le sable local. Le remplacer par un mortier de ciment donne un faîtage trop rigide qui se fissure avec les mouvements de la charpente et retient l'eau contre les tuiles. En restauration, on utilise une chaux hydraulique naturelle adaptée, selon le dossier.</div>"
      },
      {
       "titre": "Les noues",
       "contenu": "<p>La <strong>noue</strong> recueille les eaux de deux versants : c'est le point le plus sollicité d'une toiture. On distingue :</p>\n<ul>\n<li>la <strong>noue métallique</strong> (zinc, plomb, cuivre) : un caniveau ou une feuille posée sur un support continu (planches de noue), sous les éléments de couverture qui la recouvrent latéralement ; c'est la solution la plus répandue ;</li>\n<li>la <strong>noue fermée</strong> ou <strong>noue rampante</strong> en ardoises ou en tuiles taillées et ajustées, sans métal visible, de grande qualité esthétique mais exigeant un grand savoir-faire et une pente suffisante ;</li>\n<li>la <strong>noue en tuiles de noue</strong> (tuiles spéciales creuses) pour certaines couvertures en tuiles plates ou canal.</li>\n</ul>\n<p>Dans une noue métallique, la largeur de la partie visible et la largeur de recouvrement sous les éléments dépendent de la pente et de la surface de versant drainée. Les éléments de couverture sont coupés selon une ligne parallèle à l'axe de la noue, avec un léger évasement vers le bas pour que l'écoulement ne soit pas gêné par des débris.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une noue métallique ne doit jamais être percée par une fixation dans sa partie courante. Les éléments de couverture qui la recouvrent sont fixés en dehors de la zone d'écoulement ou par des pattes. Une feuille de noue fixée rigidement aux deux extrémités se fissure par dilatation.</div>"
      },
      {
       "titre": "Rives et raccords contre maçonnerie",
       "contenu": "<p>À la rencontre d'une couverture et d'un mur (pignon, mur plus haut, souche), l'étanchéité est assurée par deux pièces complémentaires :</p>\n<ul>\n<li>une pièce sous les éléments de couverture, relevée contre le mur : <strong>noquets</strong> (petites pièces métalliques pliées en équerre, posées une par rang sous chaque tuile ou ardoise de rive, qui fonctionnent comme les éléments de couverture) ou bande continue ;</li>\n<li>une pièce qui recouvre ce relevé et l'empêche de laisser passer l'eau ruisselant sur le mur : <strong>solin</strong> au mortier (traditionnel) ou <strong>bande de solin</strong> métallique engravée dans le mur (insérée dans une saignée appelée <strong>engravure</strong> et fermée au mortier).</li>\n</ul>\n<p>Sur une rive libre de pignon, on rencontre selon les régions des rives scellées au mortier de chaux (« ruellée »), des tuiles de rive à rabat, des rives en ardoises doublées ou des bandes de rive métalliques.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser un raccord à noquets contre un mur pignon en couverture d'ardoises. 1. Tracer l'engravure dans le joint de la maçonnerie, à une hauteur suffisante au-dessus de la couverture, et la creuser sans fragiliser la pierre. 2. Poser à chaque rang, sous l'ardoise de rive, un noquet en zinc ou en plomb plié en équerre, dont l'aile verticale monte contre le mur et l'aile horizontale passe sous l'ardoise, avec le même pureau et le même recouvrement que les ardoises. 3. Poser la bande de solin métallique dans l'engravure, en recouvrement sur les ailes verticales des noquets, en éléments de longueur limitée pour la dilatation. 4. Bourrer l'engravure au mortier de chaux ou au mastic adapté selon la prescription. 5. Contrôler : aucune fixation traversant les parties exposées à l'eau, recouvrements respectés.</div>"
      },
      {
       "titre": "Souches de cheminées et lucarnes",
       "contenu": "<p>La <strong>souche de cheminée</strong> traverse la couverture : il faut traiter quatre côtés différents. Le côté amont reçoit toute l'eau du versant au-dessus : on y réalise une <strong>noue</strong> ou un <strong>besace</strong> (petit ouvrage en pente qui partage l'eau de part et d'autre) ; les côtés latéraux reçoivent des noquets ou des bandes avec solins ; le côté aval reçoit une <strong>bavette</strong> qui renvoie l'eau sur la couverture. La souche elle-même est couronnée par un chaperon ou une dalle débordante qui protège ses maçonneries.</p>\n<p>La <strong>lucarne</strong> associe le travail du charpentier (structure), du couvreur (petite toiture, jouées, raccords) et souvent du menuisier et du maçon. Les jouées peuvent être couvertes d'ardoises, de tuiles, de zinc ou de plomb ; les raccords avec le versant suivent les mêmes principes que les rives et les noues. Le pied de la façade de lucarne et son appui sont des points d'infiltration fréquents.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur les souches anciennes, le couvreur vérifie aussi l'état de la maçonnerie (joints, couronnement) et signale au maçon les besoins de reprise : une souche dont les joints sont ouverts laisse l'eau s'infiltrer dans le conduit et ressortir plus bas, sous la couverture, en donnant l'impression d'une fuite de toiture.</div>"
      },
      {
       "titre": "Les ornements de toiture",
       "contenu": "<p>Les toitures anciennes portent souvent des <strong>ornements</strong> qui font partie de leur valeur patrimoniale :</p>\n<ul>\n<li>les <strong>épis de faîtage</strong> en terre cuite vernissée, en plomb ou en zinc, qui couvrent l'extrémité du poinçon ou la rencontre des arêtiers ;</li>\n<li>les <strong>crêtes de faîtage</strong> ajourées en terre cuite, en plomb ou en fonte ;</li>\n<li>les <strong>girouettes</strong>, <strong>paratonnerres</strong> et <strong>épis</strong> métalliques ;</li>\n<li>les <strong>lambrequins</strong> (bandes découpées en bois ou en zinc en rive ou en égout) ;</li>\n<li>les <strong>œils-de-bœuf</strong>, lucarnes ornées et chiens-assis ;</li>\n<li>les motifs de couverture : tuiles vernissées colorées formant des dessins (Bourgogne), ardoises taillées en écailles ou en losanges.</li>\n</ul>\n<p>Leur restauration associe dépose soignée avec repérage, réparation en atelier (soudure, reconstitution de parties manquantes en plomb ou en zinc repoussé, moulage d'éléments en terre cuite) et repose avec des fixations et des scellements compatibles. Les éléments trop dégradés sont reproduits à l'identique d'après un relevé et un gabarit.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les ornements anciens en plomb peuvent être très lourds et fragilisés par la corrosion de leurs âmes métalliques intérieures. Leur dépose se prépare comme un levage (estimation de la masse, élingage, protection), et l'on vérifie leur fixation avant de s'y appuyer ou d'y attacher quoi que ce soit.</div>"
      }
     ],
     "points_cles": [
      "Les points singuliers (faîtage, arêtier, noue, égout, rives, raccords, pénétrations) concentrent les infiltrations.",
      "Une infiltration se recherche en amont de la tache : l'eau chemine avant d'apparaître.",
      "Faîtages et rives traditionnels en tuiles sont scellés au mortier de chaux, pas au ciment.",
      "La noue recueille l'eau de deux versants ; une noue métallique n'est jamais percée et reste libre de se dilater.",
      "Contre un mur : noquets ou relevé sous la couverture, recouverts par un solin ou une bande engravée.",
      "Souche de cheminée : besace ou noue en amont, noquets sur les côtés, bavette en aval.",
      "Épis, crêtes, lambrequins et motifs font partie du patrimoine et se restaurent à l'identique.",
      "Les ornements en plomb se déposent comme un levage, après estimation de leur masse."
     ],
     "lexique": [
      {
       "terme": "Point singulier",
       "def": "Zone d'une couverture où le fonctionnement courant pente-recouvrement est interrompu."
      },
      {
       "terme": "Faîtière",
       "def": "Élément de couverture qui ferme le faîtage."
      },
      {
       "terme": "Embarrure",
       "def": "Mortier qui ferme l'espace entre faîtière et éléments de couverture."
      },
      {
       "terme": "Chanlatte",
       "def": "Pièce de bois biseautée à l'égout qui relève le premier rang."
      },
      {
       "terme": "Noquet",
       "def": "Petite pièce métallique pliée posée à chaque rang le long d'un mur ou d'une noue."
      },
      {
       "terme": "Solin",
       "def": "Ouvrage qui assure l'étanchéité entre une couverture et un mur."
      },
      {
       "terme": "Engravure",
       "def": "Saignée pratiquée dans une maçonnerie pour y insérer une bande de solin."
      },
      {
       "terme": "Besace",
       "def": "Petit ouvrage en pente en amont d'une souche qui partage l'eau de part et d'autre."
      },
      {
       "terme": "Bavette",
       "def": "Bande qui renvoie l'eau sur la couverture en aval d'un ouvrage."
      },
      {
       "terme": "Épi de faîtage",
       "def": "Ornement placé au sommet d'un poinçon ou à la rencontre des arêtiers."
      },
      {
       "terme": "Lambrequin",
       "def": "Bande ornementale découpée en rive ou en égout de toiture."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Analyser les documents professionnels",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bipb-doc-plans-restauration",
     "titre": "Lire les plans d'état des lieux et de restauration",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier les pièces graphiques d'un dossier de restauration et leur rôle",
      "Lire la légende, le cartouche et les conventions d'un plan d'intervention",
      "Extraire d'une élévation repérée les quantités et localisations des travaux",
      "Croiser plan, coupe, élévation et descriptif pour vérifier la cohérence",
      "Rédiger une analyse structurée d'un document graphique"
     ],
     "sections": [
      {
       "titre": "Les pièces graphiques d'un dossier de restauration",
       "contenu": "<p>À l'épreuve écrite comme sur le chantier, le dossier remis comprend presque toujours plusieurs <strong>pièces graphiques</strong>. Sur un projet de restauration ou de réhabilitation, on rencontre :</p>\n<table>\n<thead><tr><th>Document</th><th>Contenu</th><th>Échelles usuelles</th></tr></thead>\n<tbody>\n<tr><td>Plan de situation, plan de masse</td><td>Localisation du bâtiment, abords, orientation</td><td>1/2 000 à 1/200</td></tr>\n<tr><td><strong>Plans d'état des lieux</strong> (ou relevés de l'existant)</td><td>Bâtiment tel qu'il est, avec désordres éventuellement cartographiés</td><td>1/100, 1/50</td></tr>\n<tr><td><strong>Élévations</strong> de façades</td><td>Vues de face, souvent pierre à pierre (calepin), avec repérage des interventions</td><td>1/50, 1/20</td></tr>\n<tr><td><strong>Coupes</strong></td><td>Hauteurs, niveaux, charpente, épaisseurs</td><td>1/50, 1/20</td></tr>\n<tr><td><strong>Plans de toiture</strong></td><td>Versants, pentes, noues, arêtiers, lucarnes, souches, évacuations</td><td>1/100, 1/50</td></tr>\n<tr><td><strong>Plans de projet</strong> ou d'intervention</td><td>Ce qui sera démoli, conservé, créé (codes couleur)</td><td>1/100, 1/50</td></tr>\n<tr><td><strong>Détails</strong></td><td>Profils, assemblages, raccords, coupes de principe</td><td>1/10, 1/5, 1/2, 1/1</td></tr>\n</tbody>\n</table>\n<p>Chaque document porte un <strong>cartouche</strong> (en bas à droite en général) qui indique le nom de l'opération, le maître d'ouvrage, le maître d'œuvre, l'intitulé du document, l'échelle, la phase (diagnostic, avant-projet, projet, exécution), la date et l'<strong>indice de révision</strong>. L'indice est essentiel : deux versions d'un même plan peuvent circuler.</p>"
      },
      {
       "titre": "Vocabulaire et conventions",
       "contenu": "<p>Les plans de restauration utilisent des conventions qu'il faut savoir décoder :</p>\n<ul>\n<li><strong>codes couleur</strong> d'intervention (souvent : existant conservé en noir ou gris, à démolir ou déposer en jaune, à créer en rouge) ;</li>\n<li><strong>trames ou hachures</strong> pour les types d'intervention sur une élévation : pierre à remplacer, pierre à ragréer, joints à refaire, enduit à reprendre, nettoyage ;</li>\n<li><strong>repères</strong> alphanumériques : numéro de pierre (P12), de ferme (F3), de pièce de bois (F3-A), de baie (B4), de zone (Z2), renvoyant au descriptif ou à un tableau ;</li>\n<li><strong>cotes de niveau</strong> rapportées à un repère (±0,00 au seuil ou altitude NGF) ;</li>\n<li><strong>symboles</strong> : flèche de pente sur un plan de toiture, sens de portée des planchers, nord, traits de coupe (avec lettres A-A, B-B indiquant la position et le sens d'observation de la coupe).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les codes couleur et les trames ne sont pas universels. Une même trame peut signifier « remplacement » sur un dossier et « ragréage » sur un autre. La légende du document fait foi : on la lit et on la recopie mentalement avant de lire le dessin. À l'examen, une réponse fondée sur une convention supposée et non sur la légende est une erreur fréquente.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un plan à l'échelle 1/50, 1 cm sur le papier représente 50 cm en réalité ; à 1/20, 1 cm représente 20 cm. On utilise d'abord les cotes écrites ; la mesure au réglet sur le plan ne sert que pour une estimation, en tenant compte des déformations à l'impression.</div>"
      },
      {
       "titre": "Méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un document graphique de restauration. 1. <strong>Identifier</strong> : lire le cartouche (opération, document, échelle, phase, date, indice). 2. <strong>Orienter</strong> : repérer le nord, la façade concernée, la position du trait de coupe, et situer le document par rapport aux autres pièces. 3. <strong>Décoder</strong> : lire toute la légende, noter les codes de chaque type d'intervention. 4. <strong>Parcourir</strong> le dessin de façon systématique (de gauche à droite et de bas en haut pour une élévation ; pièce par pièce pour un plan) et relever chaque intervention avec son repère. 5. <strong>Quantifier</strong> : compter ou mesurer les éléments demandés, en utilisant les cotes. 6. <strong>Croiser</strong> avec les autres pièces (coupe, plan de toiture, descriptif) pour vérifier la cohérence et compléter l'information. 7. <strong>Conclure</strong> : rédiger une réponse structurée, avec unités et références aux repères.</div>\n<p>Lors du croisement, on vérifie notamment que les repères existent dans le descriptif, que les quantités du dessin correspondent à celles de la décomposition du prix, que les niveaux et hauteurs concordent entre coupe et élévation, et que les interventions décrites sont compatibles entre elles (on ne peut pas enduire une zone où l'on prévoit de remplacer des pierres avant que celles-ci soient posées).</p>\n<p>Les pièges classiques sont : confondre deux façades (nord et sud sont parfois dessinées côte à côte), lire une coupe dans le mauvais sens, oublier qu'une élévation ne montre pas la profondeur (une pierre de taille à remplacer peut avoir une queue importante), et prendre un plan d'état des lieux pour un plan de projet.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le dossier présente l'<strong>élévation de la façade sud</strong> d'une maison de bourg du XVIII<sup>e</sup> siècle, à l'échelle 1/50, phase « projet », indice B. La façade mesure 9,60 m de long et 7,20 m de hauteur de l'arase du sol à l'égout. Elle comporte trois travées : au rez-de-chaussée, une porte au centre et deux fenêtres ; à l'étage, trois fenêtres. Les encadrements de baies, la chaîne d'angle est et le bandeau d'étage sont en pierre de taille calcaire ; le reste du mur est en moellons enduits.</p>\n<p>La légende indique :</p>\n<table>\n<thead><tr><th>Code de la légende</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Trame quadrillée rouge</td><td>Pierre de taille à remplacer (repère P suivi d'un numéro)</td></tr>\n<tr><td>Trame hachurée bleue</td><td>Pierre à ragréer au mortier de chaux</td></tr>\n<tr><td>Aplat jaune</td><td>Enduit ciment existant à déposer</td></tr>\n<tr><td>Pointillé vert</td><td>Enduit chaux trois couches à réaliser</td></tr>\n<tr><td>Trait épais violet</td><td>Joints de pierre de taille à dégarnir et refaire</td></tr>\n</tbody>\n</table>\n<p>Sur le dessin : sept pierres sont repérées P1 à P7 en trame quadrillée rouge : P1 à P4 dans l'appui et les piédroits de la fenêtre ouest du rez-de-chaussée, P5 et P6 dans la chaîne d'angle est au niveau du soubassement, P7 dans le bandeau d'étage. Onze zones de ragréage en trame bleue sont réparties sur les encadrements. L'aplat jaune couvre le soubassement sur toute la longueur, sur 0,90 m de hauteur. Le pointillé vert couvre toute la surface de moellons au-dessus du soubassement. Un tableau en marge donne les dimensions des pierres P1 à P7. Une note indique : « soubassement : enduit chaux NHL 3,5 voir descriptif article 3.4 ».</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Identification.</strong> Il s'agit d'une élévation de projet (indice B) de la façade sud, à l'échelle 1/50 : elle localise les interventions de maçonnerie et de pierre de taille à réaliser. Elle doit être lue avec le descriptif (article 3.4 cité en note) et avec le tableau des pierres.</p>\n<p><strong>Interventions relevées.</strong> D'après la légende : remplacement de sept pierres de taille (P1 à P7), ragréage de onze zones sur les encadrements, dépose de l'enduit ciment du soubassement, réfection d'un enduit chaux trois couches sur les parties en moellons, réfection des joints des pierres de taille (trait violet).</p>\n<p><strong>Interprétation technique.</strong> La concentration des pierres à remplacer en partie basse (appui et piédroits de la fenêtre ouest, chaîne d'angle au soubassement) et la présence d'un enduit ciment en soubassement orientent vers une dégradation par l'humidité et les sels en pied de mur, aggravée par l'enduit ciment qui bloque l'évaporation : la dépose de cet enduit est cohérente avec le diagnostic. La pierre P7 dans le bandeau correspond plutôt à une exposition au ruissellement (élément saillant).</p>\n<p><strong>Quantités.</strong> Surface d'enduit ciment à déposer : 9,60 × 0,90 = 8,64 m<sup>2</sup>, moins les seuils et piédroits de baies en pierre de taille situés dans cette bande, à déduire d'après les cotes. La surface d'enduit chaux se calcule sur la surface de moellons, déduction faite des baies et des éléments en pierre de taille.</p>\n<p><strong>Points à vérifier et questions.</strong> 1. La note du soubassement prescrit un enduit NHL 3,5 alors que la légende ne prévoit pas de trame pour le nouvel enduit de soubassement : il faut vérifier au descriptif si le soubassement est inclus dans l'enduit trois couches ou traité séparément. 2. Les profondeurs (queues) des pierres P1 à P7 ne figurent pas sur l'élévation : le tableau doit les donner, sinon il faut les demander, car elles conditionnent le volume de pierre à commander. 3. Il faut vérifier que l'indice B de l'élévation correspond à l'indice cité dans le descriptif. 4. L'ordre des travaux doit être : dépose de l'enduit ciment, séchage, remplacement des pierres, ragréages, joints, puis enduits.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> ce type d'analyse est exactement celui qu'un chef d'équipe fait avant de commander la pierre et de planifier. Les questions relevées sont transmises par écrit au maître d'œuvre (demande de précision), ce qui évite de découvrir l'incohérence sur l'échafaudage.</div>"
      }
     ],
     "points_cles": [
      "Un dossier de restauration comprend plans d'état des lieux, élévations, coupes, plans de toiture, plans de projet et détails.",
      "Le cartouche donne l'échelle, la phase, la date et l'indice : on vérifie toujours l'indice.",
      "La légende fait foi : codes couleur et trames varient d'un dossier à l'autre.",
      "Méthode : identifier, orienter, décoder, parcourir, quantifier, croiser, conclure.",
      "On utilise les cotes écrites ; la mesure au réglet ne donne qu'une estimation.",
      "Le croisement avec le descriptif et les autres plans révèle les incohérences.",
      "Une élévation ne montre pas la profondeur : les queues des pierres sont à chercher ailleurs.",
      "Une bonne analyse relie les interventions prévues aux causes des désordres et à l'ordre des travaux."
     ],
     "lexique": [
      {
       "terme": "Pièce graphique",
       "def": "Document dessiné d'un dossier : plan, coupe, élévation, détail."
      },
      {
       "terme": "Cartouche",
       "def": "Cadre d'identification d'un plan : opération, intervenants, échelle, date, indice."
      },
      {
       "terme": "Indice de révision",
       "def": "Lettre ou chiffre identifiant la version d'un document."
      },
      {
       "terme": "Élévation",
       "def": "Représentation d'une façade vue de face."
      },
      {
       "terme": "Coupe",
       "def": "Représentation d'un bâtiment tranché par un plan vertical."
      },
      {
       "terme": "Trait de coupe",
       "def": "Ligne sur un plan indiquant la position et le sens d'observation d'une coupe."
      },
      {
       "terme": "Légende",
       "def": "Tableau qui explique les codes, trames et symboles d'un document."
      },
      {
       "terme": "Altitude NGF",
       "def": "Altitude rattachée au nivellement général de la France."
      },
      {
       "terme": "Piédroit",
       "def": "Montant vertical d'une baie, en pierre ou en maçonnerie."
      },
      {
       "terme": "Bandeau",
       "def": "Moulure horizontale saillante marquant un niveau en façade."
      }
     ]
    },
    {
     "id": "bipb-doc-cctp-dpgf",
     "titre": "Exploiter un CCTP et une décomposition du prix",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Situer le CCTP et la DPGF parmi les pièces d'un marché de travaux",
      "Repérer dans un CCTP les prescriptions sur les matériaux, l'exécution et les contrôles",
      "Relier les articles du CCTP aux lignes de la décomposition du prix",
      "Vérifier une quantité et un montant dans une DPGF",
      "Détecter les omissions et incohérences entre les pièces écrites et graphiques"
     ],
     "sections": [
      {
       "titre": "Les pièces écrites d'un marché de travaux",
       "contenu": "<p>Un marché de travaux comprend des pièces <strong>administratives</strong> et des pièces <strong>techniques</strong>. En marché public, on trouve notamment l'acte d'engagement, le <strong>cahier des clauses administratives particulières</strong> (CCAP : délais, pénalités, paiement, garanties), le <strong>cahier des clauses techniques particulières</strong> (CCTP) et un cadre de prix. En marché privé, les mêmes fonctions sont assurées par un contrat, un descriptif et un devis.</p>\n<p>Le <strong>CCTP</strong> décrit, lot par lot, les ouvrages à réaliser et la façon de les réaliser : nature et qualité des matériaux, modes d'exécution, contrôles, documents de référence. Le cadre de prix décompose le prix :</p>\n<ul>\n<li>la <strong>DPGF</strong> (décomposition du prix global et forfaitaire) pour un marché à prix global : l'entreprise s'engage sur un prix total, la décomposition sert à comparer les offres et à établir les situations de travaux ;</li>\n<li>le <strong>BPU</strong> (bordereau des prix unitaires) et le <strong>DQE</strong> (détail quantitatif estimatif) pour un marché à prix unitaires : on paie les quantités réellement exécutées aux prix unitaires.</li>\n</ul>\n<p>Les travaux sont répartis en <strong>lots</strong> (maçonnerie-pierre de taille, charpente, couverture, menuiserie…). Chaque article du CCTP porte un numéro, repris dans la DPGF.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en cas de contradiction entre pièces, le marché prévoit un <strong>ordre de priorité</strong> des pièces, indiqué généralement dans l'acte d'engagement ou le CCAP. On ne tranche jamais seul une contradiction : on la signale par écrit au maître d'œuvre.</div>"
      },
      {
       "titre": "La structure d'un CCTP de restauration",
       "contenu": "<p>Un CCTP de lot comprend généralement :</p>\n<ol>\n<li><strong>Généralités</strong> : objet du lot, limites de prestations avec les autres lots, documents de référence (NF DTU, normes, règles professionnelles, documents des fabricants), obligations de l'entreprise (visite des lieux, relevés, échantillons, plans d'exécution, DOE).</li>\n<li><strong>Prescriptions sur les matériaux</strong> : provenance (carrière, essence de bois, tuilerie), qualité, conditions de réception et de stockage, échantillons à soumettre.</li>\n<li><strong>Prescriptions d'exécution</strong> : techniques imposées ou interdites, conditions météorologiques, essais de convenance, autocontrôles, tolérances.</li>\n<li><strong>Description des ouvrages</strong> article par article : localisation, nature des travaux, mode de métré (unité et règles de mesure).</li>\n</ol>\n<p>Sur les chantiers de patrimoine, les CCTP contiennent des clauses particulières : <strong>réemploi</strong> obligatoire des matériaux sains, interdiction de certains produits (ciment, résines, peintures filmogènes), exigence de procédés traditionnels (pose au clou, chevillage), validation préalable de chaque élément remplacé, documentation photographique.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les articles de « généralités » sont souvent lus trop vite, alors qu'ils contiennent des obligations coûteuses : fourniture d'échantillons, panneaux d'essai, relevés à la charge de l'entreprise, protections, nettoyage, évacuation des gravats. Une obligation qui figure dans les généralités s'applique même si elle n'a pas de ligne de prix dédiée : elle est réputée incluse dans les prix.</div>"
      },
      {
       "titre": "Méthode de lecture et de vérification",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un CCTP et sa DPGF. 1. <strong>Situer</strong> le lot et ses limites : ce qui est à la charge du lot et ce qui relève d'un autre lot (par exemple, les liteaux sont-ils au lot couverture ou au lot charpente ?). 2. <strong>Relever</strong> dans les généralités les obligations transversales (documents de référence, échantillons, essais, protections, déchets). 3. Pour chaque article, <strong>extraire</strong> : localisation, matériau et qualité, technique, unité et règle de métré. 4. <strong>Faire correspondre</strong> chaque article du CCTP à une ligne de DPGF, et inversement ; noter les articles sans ligne ou les lignes sans article. 5. <strong>Vérifier les quantités</strong> par un métré à partir des plans, avec la même règle de métré que le CCTP. 6. <strong>Vérifier les calculs</strong> : montant = quantité × prix unitaire, puis sous-totaux, total HT, TVA, total TTC. 7. <strong>Lister</strong> les incohérences et rédiger les questions.</div>\n<p>Dans une DPGF, les colonnes habituelles sont : numéro d'article, désignation, unité (U, ml, m<sup>2</sup>, m<sup>3</sup>, ens. pour ensemble, forfait), quantité, prix unitaire hors taxes, montant hors taxes. Les montants s'additionnent par chapitre puis pour le lot.</p>\n<p>Les unités courantes en restauration sont : le m<sup>2</sup> pour les couvertures, enduits, nettoyages ; le mètre linéaire (ml) pour les faîtages, rives, noues, gouttières ; l'unité (U) pour les pierres, greffes, lucarnes ; le m<sup>3</sup> pour le bois ou la pierre ; l'ensemble ou le forfait pour les installations et prestations globales.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Extrait du CCTP du <strong>lot 03 – Charpente – Couverture</strong> pour la restauration de la toiture d'un presbytère inscrit au titre des monuments historiques (couverture en petites tuiles plates, charpente en chêne) :</p>\n<p><em>« 3.1 Généralités. Les travaux seront exécutés conformément aux NF DTU 31.1 et 40.23 et aux prescriptions du présent document. L'entreprise soumettra à l'agrément du maître d'œuvre un échantillon de 10 tuiles de complément avant toute commande. Les tuiles déposées seront triées ; les tuiles saines seront réemployées en priorité. Gravats et déchets évacués en filières agréées, compris tri. 3.2 Dépose de couverture. Dépose soignée des tuiles, tri, stockage sur palettes. Mode de métré : au m<sup>2</sup> de rampant. 3.3 Greffes de pieds de fermes. Greffes en chêne, enture à trait de Jupiter chevillée, section identique à l'existant. Localisation : fermes F2 et F5 côté nord. Mode de métré : à l'unité. 3.4 Liteaux. Fourniture et pose de liteaux en sapin traité classe 2, section 27 × 40 mm. 3.5 Couverture en tuiles plates. Repose des tuiles triées complétées par des tuiles plates de terre cuite 17 × 27 cm, mélangées. Pureau 10 cm. Mode de métré : au m<sup>2</sup>. 3.6 Faîtage. Faîtières demi-rondes scellées au mortier de chaux NHL 3,5. Au ml. »</em></p>\n<p>Extrait de la DPGF correspondante (la toiture a deux versants de 14,00 m × 6,50 m de rampant ; le faîtage mesure 14,00 m) :</p>\n<table>\n<thead><tr><th>Art.</th><th>Désignation</th><th>U</th><th>Qté</th><th>PU HT (€)</th><th>Montant HT (€)</th></tr></thead>\n<tbody>\n<tr><td>3.2</td><td>Dépose soignée de couverture, tri, stockage</td><td>m<sup>2</sup></td><td>182</td><td>18,00</td><td>3 276,00</td></tr>\n<tr><td>3.3</td><td>Greffes de pieds de fermes</td><td>U</td><td>2</td><td>1 250,00</td><td>2 500,00</td></tr>\n<tr><td>3.5</td><td>Couverture tuiles plates, repose et complément</td><td>m<sup>2</sup></td><td>182</td><td>95,00</td><td>17 290,00</td></tr>\n<tr><td>3.6</td><td>Faîtage demi-rond scellé chaux</td><td>ml</td><td>14</td><td>62,00</td><td>868,00</td></tr>\n<tr><td></td><td>Total HT</td><td></td><td></td><td></td><td>23 934,00</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Identification.</strong> Il s'agit d'un extrait de CCTP et de DPGF du lot charpente-couverture d'un monument inscrit. Les documents de référence sont les NF DTU 31.1 (charpente) et 40.23 (tuiles plates). Le marché impose le réemploi prioritaire, un échantillon de tuiles à faire agréer et le tri des déchets.</p>\n<p><strong>Vérification des quantités.</strong> Surface de rampant : 2 × 14,00 × 6,50 = 182 m<sup>2</sup>. Les quantités des articles 3.2 et 3.5 sont cohérentes. Faîtage : 14 ml, cohérent.</p>\n<p><strong>Vérification des montants.</strong> 182 × 18,00 = 3 276,00 € ; 2 × 1 250,00 = 2 500,00 € ; 182 × 95,00 = 17 290,00 € ; 14 × 62,00 = 868,00 €. Total : 3 276 + 2 500 + 17 290 + 868 = 23 934,00 € HT. Les calculs sont justes.</p>\n<p><strong>Incohérences et omissions relevées.</strong></p>\n<ol>\n<li>L'<strong>article 3.4 (liteaux)</strong> du CCTP n'a pas de ligne dans la DPGF : soit le prix est réputé inclus dans l'article 3.5, soit il s'agit d'un oubli. Il faut poser la question, car 182 m<sup>2</sup> de liteaux au pureau de 10 cm représentent environ 182 / 0,10 = 1 820 ml de liteaux, une quantité importante.</li>\n<li>L'article 3.4 ne donne <strong>pas de mode de métré</strong>, contrairement aux autres.</li>\n<li>Le <strong>tri et l'évacuation des déchets</strong> sont prévus dans les généralités sans ligne de prix : ils sont réputés inclus dans les prix unitaires.</li>\n<li>L'article 3.3 n'indique pas le <strong>traitement</strong> des bois greffés ni la gestion de l'étaiement : ces prestations sont à intégrer au prix des greffes et à prévoir dans l'organisation.</li>\n<li>Les <strong>rives</strong> et l'<strong>égout</strong> (doublis) ne font l'objet d'aucun article : il faut vérifier si les pignons sont maçonnés (rive contre mur, solins) et à quel lot appartient le traitement de ces points singuliers.</li>\n</ol>\n<p><strong>Conséquences pour l'organisation.</strong> Le délai d'agrément de l'échantillon de tuiles doit être placé dans le planning avant la dépose, pour ne pas laisser le comble ouvert ; le taux de réemploi réel, connu après le tri, déterminera la quantité de complément.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> ces remarques font l'objet d'une liste de questions écrites pendant la consultation, ou d'une demande de précision au maître d'œuvre avant le démarrage. Une omission signalée à temps devient un article ajouté ; découverte en cours de chantier, elle devient une source de litige.</div>"
      }
     ],
     "points_cles": [
      "Le CCTP décrit les ouvrages et leur exécution ; le CCAP fixe les règles administratives.",
      "DPGF pour un prix global et forfaitaire ; BPU et DQE pour des prix unitaires.",
      "Les généralités du CCTP contiennent des obligations réputées incluses dans les prix.",
      "Chaque article du CCTP doit correspondre à une ligne de prix, et inversement.",
      "On vérifie les quantités par un métré avec la même règle de métré que le CCTP.",
      "Montant = quantité × prix unitaire ; on contrôle sous-totaux et total.",
      "Unités usuelles : m² (couverture, enduit), ml (faîtage, gouttière), U (pierre, greffe), m³ (bois, pierre).",
      "Les contradictions entre pièces sont signalées par écrit, selon l'ordre de priorité du marché."
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
       "def": "Décomposition du prix global et forfaitaire d'un lot."
      },
      {
       "terme": "BPU",
       "def": "Bordereau des prix unitaires d'un marché à prix unitaires."
      },
      {
       "terme": "DQE",
       "def": "Détail quantitatif estimatif associant quantités prévues et prix unitaires."
      },
      {
       "terme": "Lot",
       "def": "Partie d'un marché correspondant à un corps d'état ou à un ensemble de travaux."
      },
      {
       "terme": "Mode de métré",
       "def": "Règle fixant l'unité et la façon de mesurer un ouvrage pour le payer."
      },
      {
       "terme": "Réputé inclus",
       "def": "Se dit d'une prestation exigée sans ligne de prix, dont le coût est compris dans les autres prix."
      },
      {
       "terme": "Agrément",
       "def": "Acceptation formelle par le maître d'œuvre d'un matériau ou d'un échantillon."
      },
      {
       "terme": "Situation de travaux",
       "def": "État périodique des travaux exécutés servant au paiement de l'entreprise."
      }
     ]
    },
    {
     "id": "bipb-doc-rapport-diagnostic",
     "titre": "Lire un rapport de diagnostic et les repérages réglementaires",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Reconnaître la structure d'un rapport de diagnostic sanitaire et technique",
      "Exploiter une cartographie des désordres et ses fiches",
      "Lire un rapport de repérage amiante ou un constat plomb et en tirer les conséquences pour le chantier",
      "Distinguer constats, hypothèses et préconisations dans un rapport",
      "Traduire un diagnostic en tâches et en précautions de chantier"
     ],
     "sections": [
      {
       "titre": "La structure d'un rapport de diagnostic",
       "contenu": "<p>Un <strong>rapport de diagnostic</strong> rédigé par un architecte, un bureau d'études ou une entreprise suit généralement le plan de la démarche diagnostique :</p>\n<table>\n<thead><tr><th>Partie</th><th>Contenu</th><th>Ce qu'on y cherche</th></tr></thead>\n<tbody>\n<tr><td>Présentation</td><td>Objet de la mission, maître d'ouvrage, date de visite, limites de l'étude (parties non accessibles)</td><td>Ce qui n'a pas été vu</td></tr>\n<tr><td>Étude historique et descriptive</td><td>Datation, phases, modes constructifs, matériaux</td><td>La nature des ouvrages sur lesquels on va intervenir</td></tr>\n<tr><td>État sanitaire</td><td>Description des désordres par partie d'ouvrage, photos, cartographie</td><td>Localisation et étendue des désordres</td></tr>\n<tr><td>Analyse des causes</td><td>Hypothèses, investigations, conclusions</td><td>Pourquoi les désordres se produisent</td></tr>\n<tr><td>Préconisations</td><td>Travaux recommandés, ordre, urgence, estimation</td><td>Ce qui sera demandé à l'entreprise</td></tr>\n<tr><td>Annexes</td><td>Relevés, résultats d'analyses, diagnostics réglementaires</td><td>Données chiffrées et risques</td></tr>\n</tbody>\n</table>\n<p>Les <strong>diagnostics réglementaires</strong> sont des documents distincts, établis par des opérateurs certifiés : repérage de l'amiante, constat de risque d'exposition au plomb, état relatif à la présence de termites, diagnostic de performance énergétique, etc. Ils ont un format imposé et des conclusions codifiées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans un rapport, on distingue toujours trois niveaux : ce qui a été <strong>constaté</strong> (fait observé, mesuré), ce qui est <strong>supposé</strong> (hypothèse de cause) et ce qui est <strong>préconisé</strong> (solution). La « limite de la mission » indique ce qui reste inconnu.</div>"
      },
      {
       "titre": "Lire une cartographie et des fiches de désordres",
       "contenu": "<p>La cartographie reporte les désordres sur des plans ou élévations selon une légende. Les fiches détaillent chaque désordre : repère, localisation, photo, description, dimensions, cause probable, gravité, préconisation.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un rapport de diagnostic pour préparer une intervention. 1. Lire la présentation et noter les <strong>limites</strong> de la mission (parties non visitées, absence de sondages). 2. Lire la partie descriptive pour connaître les <strong>matériaux</strong> en place. 3. Pour la zone concernée par l'intervention, relever tous les désordres de la cartographie avec leurs repères. 4. Pour chacun, noter la <strong>cause</strong> retenue et vérifier que la préconisation la traite. 5. Relever les <strong>urgences</strong> et mesures conservatoires. 6. Consulter les <strong>annexes réglementaires</strong> (amiante, plomb, termites) et identifier les matériaux dangereux dans la zone de travail. 7. Traduire le tout en liste de tâches, d'approvisionnements, de précautions et de questions.</div>\n<p>Les pièges classiques sont : se limiter aux préconisations sans lire les constats (on comprend mal ce qu'il faut faire et pourquoi), ignorer les limites de la mission (une charpente « non visitée » n'est pas une charpente saine), et oublier les annexes réglementaires, qui conditionnent la sécurité.</p>"
      },
      {
       "titre": "Lire un repérage amiante et un constat plomb",
       "contenu": "<p>Un <strong>rapport de repérage de l'amiante</strong> comprend : la désignation du bâtiment et des zones repérées, le programme de repérage, la liste des matériaux et produits examinés, les prélèvements et leurs résultats d'analyse, et les conclusions. Pour chaque matériau, la conclusion indique la présence ou l'absence d'amiante (« présence d'amiante », « absence d'amiante », ou présence par jugement de l'opérateur sans prélèvement). Le rapport mentionne aussi les <strong>zones non visitées</strong> ou les matériaux non accessibles, qui restent à investiguer avant travaux.</p>\n<p>Un <strong>constat de risque d'exposition au plomb</strong> (CREP) mesure, unité de diagnostic par unité de diagnostic (porte, fenêtre, plinthe, mur), la concentration en plomb des revêtements, souvent par fluorescence X, en mg/cm<sup>2</sup>. Les résultats sont classés en catégories selon la concentration et l'état de conservation du revêtement ; un résultat égal ou supérieur à 1 mg/cm<sup>2</sup> signale un revêtement contenant du plomb au sens de la réglementation.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un CREP établi pour une vente ou une location ne porte que sur les revêtements des parties examinées et n'est pas un repérage avant travaux exhaustif. De même, un repérage amiante réalisé pour la vente n'est pas suffisant pour des travaux : le repérage avant travaux est spécifique et porte sur les matériaux concernés par l'intervention, y compris les parties cachées.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le dossier contient un extrait du rapport de diagnostic d'une <strong>grange du XIX<sup>e</sup> siècle</strong> en moellons calcaires, à transformer en logement, et un extrait du repérage amiante.</p>\n<p><strong>Extrait 1 – Présentation.</strong> <em>« Visite du 12 mars. Les combles n'ont pu être visités que depuis la trappe, faute de plancher praticable. Aucun sondage destructif n'a été réalisé. »</em></p>\n<p><strong>Extrait 2 – Fiches de désordres (façade ouest).</strong></p>\n<table>\n<thead><tr><th>Repère</th><th>Constat</th><th>Cause probable</th><th>Gravité / urgence</th><th>Préconisation</th></tr></thead>\n<tbody>\n<tr><td>D1</td><td>Enduit ciment fissuré et décollé sur 1,00 m de hauteur en pied de façade, sur 12 m ; pierres sous-jacentes pulvérulentes ; salpêtre à l'intérieur jusqu'à 1,30 m</td><td>Remontées capillaires aggravées par l'enduit ciment et la cour bétonnée contre la façade</td><td>Moyenne / court terme</td><td>Dépose enduit ciment, remplacement du béton par un revêtement drainant, rejointoiement et enduit chaux après séchage</td></tr>\n<tr><td>D2</td><td>Fissure oblique de 3 mm partant de l'angle supérieur de la porte charretière vers l'angle nord-ouest, lèvres propres</td><td>Tassement différentiel possible de l'angle nord-ouest ; descente d'eau pluviale déversant au pied de l'angle</td><td>Élevée / à surveiller avant travaux</td><td>Pose de jauges, raccordement de la descente, investigation des fondations de l'angle</td></tr>\n<tr><td>D3</td><td>About de l'entrait de la ferme F1 noirci et friable côté ouest, visible depuis la trappe</td><td>Infiltration en pied de versant (gouttière absente)</td><td>Élevée / court terme</td><td>Sondage, greffe probable, mise en place d'une gouttière</td></tr>\n</tbody>\n</table>\n<p><strong>Extrait 3 – Repérage amiante.</strong> <em>« Plaques ondulées couvrant l'appentis nord : présence d'amiante (après analyse). Conduit de fumée en fibres-ciment dans le comble : non accessible, non prélevé, présence probable. Enduits de façade : absence d'amiante dans les prélèvements réalisés. »</em></p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Ce que le rapport établit.</strong> La façade ouest présente un désordre lié à l'humidité en pied de mur (D1), une fissure oblique traduisant un mouvement possible de l'angle nord-ouest (D2) et une dégradation de l'about d'entrait de la ferme F1 (D3). Les causes proposées sont cohérentes avec les constats : enduit ciment et béton contre la façade pour D1, eau concentrée au pied de l'angle pour D2, absence de gouttière pour D3. On remarque qu'un même facteur, la mauvaise gestion des eaux pluviales, intervient dans D2 et D3, et que le traitement des eaux est une priorité commune.</p>\n<p><strong>Ce que le rapport ne permet pas de savoir.</strong> Les combles n'ont été vus que depuis la trappe et aucun sondage n'a été fait : l'état réel des autres fermes, des pannes et des sablières est inconnu. La fissure D2 n'est pas encore qualifiée d'active ou stabilisée ; les fondations de l'angle n'ont pas été examinées.</p>\n<p><strong>Conséquences pour l'organisation du chantier.</strong></p>\n<ol>\n<li>Avant tout travail dans le comble : créer un accès et un plancher de circulation sûrs, puis réaliser l'état sanitaire complet de la charpente.</li>\n<li>Mesures immédiates : raccorder ou dévier la descente d'eau de l'angle nord-ouest, poser des jauges sur D2 et relever les lectures ; étayer la ferme F1 si le sondage confirme la perte de section.</li>\n<li>Amiante : les plaques de l'appentis nord contiennent de l'amiante ; leur retrait relève d'une entreprise certifiée (sous-section 3), qui doit intervenir avant les autres travaux sur cette zone. Le conduit du comble est à considérer comme amianté tant qu'il n'a pas été analysé : aucune intervention à proximité sans repérage complémentaire, et le comble ne peut pas être traité librement tant que ce point n'est pas levé.</li>\n<li>Ordre des travaux de façade pour D1 : démolition du béton de cour, création d'un revêtement drainant, dépose de l'enduit ciment, séchage, reprise des pierres pulvérulentes, rejointoiement, enduit chaux.</li>\n</ol>\n<p><strong>Questions à transmettre.</strong> Faut-il une étude de structure pour l'angle nord-ouest avant d'engager la façade ? Qui réalise le repérage complémentaire du conduit et dans quel délai ?</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les zones « non visitées » ou « non accessibles » d'un rapport sont systématiquement reprises dans la préparation du chantier : on prévoit un temps de reconnaissance, et le devis précise que l'état de ces parties est réservé. Cela évite de s'engager sur un prix pour un ouvrage que personne n'a vu.</div>"
      }
     ],
     "points_cles": [
      "Un rapport de diagnostic suit la démarche : présentation, description, état sanitaire, causes, préconisations, annexes.",
      "On distingue constats, hypothèses et préconisations ; les limites de mission signalent l'inconnu.",
      "La cartographie et les fiches localisent chaque désordre avec un repère.",
      "Le repérage amiante conclut matériau par matériau ; les zones non accessibles restent à investiguer.",
      "Le CREP mesure le plomb des revêtements en mg/cm² ; seuil réglementaire de 1 mg/cm².",
      "Un diagnostic de vente n'est pas un repérage avant travaux.",
      "Un même facteur (eaux pluviales) explique souvent plusieurs désordres : il se traite en priorité.",
      "L'analyse se conclut par des tâches, des mesures immédiates, un ordre de travaux et des questions."
     ],
     "lexique": [
      {
       "terme": "Rapport de diagnostic",
       "def": "Document qui décrit l'état d'un ouvrage, ses désordres, leurs causes et les travaux préconisés."
      },
      {
       "terme": "Limite de mission",
       "def": "Partie d'un rapport précisant ce qui n'a pas été vu ou étudié."
      },
      {
       "terme": "Fiche de désordre",
       "def": "Fiche décrivant un désordre : repère, constat, cause, gravité, préconisation."
      },
      {
       "terme": "Repérage de l'amiante",
       "def": "Recherche et identification des matériaux contenant de l'amiante dans un bâtiment."
      },
      {
       "terme": "Prélèvement",
       "def": "Échantillon de matériau prélevé pour analyse en laboratoire."
      },
      {
       "terme": "CREP",
       "def": "Constat de risque d'exposition au plomb des revêtements d'un logement ancien."
      },
      {
       "terme": "Fluorescence X",
       "def": "Méthode de mesure non destructive de la teneur en plomb d'un revêtement."
      },
      {
       "terme": "Unité de diagnostic",
       "def": "Élément mesuré séparément dans un CREP (porte, fenêtre, mur, plinthe)."
      },
      {
       "terme": "Gravité",
       "def": "Importance des conséquences d'un désordre pour l'ouvrage ou les personnes."
      },
      {
       "terme": "Urgence",
       "def": "Délai dans lequel un désordre doit être traité pour éviter un danger ou une aggravation."
      }
     ]
    },
    {
     "id": "bipb-doc-fiches-techniques-fds",
     "titre": "Fiches techniques, fiches de données de sécurité et documents de référence",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Distinguer fiche technique, fiche de données de sécurité, DTU, avis technique et règles professionnelles",
      "Extraire d'une fiche technique les informations utiles à la mise en œuvre et à la commande",
      "Lire les rubriques essentielles d'une FDS : dangers, protection, premiers secours, déchets",
      "Vérifier la compatibilité d'un produit avec un support ancien et avec les prescriptions",
      "Rédiger une analyse comparative de documents produits"
     ],
     "sections": [
      {
       "titre": "Les documents de référence",
       "contenu": "<p>Pour choisir et mettre en œuvre un matériau ou un produit, le professionnel s'appuie sur plusieurs familles de documents :</p>\n<table>\n<thead><tr><th>Document</th><th>Origine</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td><strong>NF DTU</strong> (document technique unifié)</td><td>Norme française élaborée par la profession</td><td>Règles de l'art pour des techniques courantes : matériaux, conception, mise en œuvre (par exemple NF DTU 26.1 pour les enduits, 31.1 pour la charpente bois, série 40 pour la couverture)</td></tr>\n<tr><td><strong>Norme produit</strong></td><td>Normalisation (NF EN…)</td><td>Caractéristiques et classes d'un produit (par exemple NF EN 459-1 pour les chaux)</td></tr>\n<tr><td><strong>Avis technique</strong> ou document technique d'application</td><td>Commission d'experts, pour les procédés non traditionnels</td><td>Domaine d'emploi et conditions de mise en œuvre d'un procédé innovant</td></tr>\n<tr><td><strong>Règles professionnelles</strong></td><td>Organisations professionnelles</td><td>Règles pour des techniques non couvertes par un DTU</td></tr>\n<tr><td><strong>Fiche technique</strong></td><td>Fabricant</td><td>Description du produit, caractéristiques, domaine d'emploi, mise en œuvre, consommation, conditionnement, stockage</td></tr>\n<tr><td><strong>Fiche de données de sécurité</strong> (FDS)</td><td>Fabricant ou fournisseur, obligation réglementaire pour les produits dangereux</td><td>Dangers du produit et mesures de prévention, en 16 rubriques</td></tr>\n</tbody>\n</table>\n<p>Sur le bâti ancien, de nombreuses techniques traditionnelles ne sont pas entièrement couvertes par les DTU, rédigés d'abord pour la construction neuve. Le CCTP précise alors les règles applicables, en s'appuyant sur les guides et règles professionnelles de la restauration, et sur les prescriptions du maître d'œuvre.</p>"
      },
      {
       "titre": "Lire une fiche technique",
       "contenu": "<p>Une fiche technique de produit de construction comporte généralement : la désignation et la composition, le domaine d'emploi (supports admis et exclus), les caractéristiques (classe normalisée, résistance, granulométrie, perméabilité, couleur), la préparation des supports, le mode d'emploi (gâchage, quantité d'eau, temps d'utilisation, épaisseurs, délais entre couches), les conditions d'application (températures minimale et maximale, temps), la consommation, le conditionnement, le stockage et la durée de conservation.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une fiche technique pour une tâche donnée. 1. Vérifier que le <strong>domaine d'emploi</strong> inclut le support réel (pierre tendre, terre, moellons, plâtre) et l'usage (intérieur, extérieur, soubassement). 2. Comparer les <strong>caractéristiques</strong> aux exigences du CCTP (classe de liant, absence de ciment, perméabilité). 3. Relever les <strong>conditions de mise en œuvre</strong> à reporter dans l'organisation : températures, délais entre couches, cure. 4. Calculer les <strong>quantités</strong> à partir de la consommation annoncée et de la surface, avec une majoration adaptée au support ancien. 5. Noter le <strong>conditionnement</strong> pour la commande et les conditions de <strong>stockage</strong>. 6. Repérer les renvois à la FDS.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une appellation commerciale comme « mortier à la chaux » ou « enduit traditionnel » ne garantit pas l'absence de ciment. Seule la composition indiquée dans la fiche technique (par exemple « liant : NHL 3,5 selon NF EN 459-1 » ou au contraire « chaux et liants hydrauliques ») permet de savoir si le produit respecte une prescription « sans ciment ».</div>"
      },
      {
       "titre": "Lire une fiche de données de sécurité",
       "contenu": "<p>La <strong>FDS</strong> est structurée en <strong>16 rubriques</strong> obligatoires. Pour le chantier, les plus utiles sont :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu utile</th></tr></thead>\n<tbody>\n<tr><td>2. Identification des dangers</td><td>Classification, pictogrammes, mentions de danger (codes H) et conseils de prudence (codes P)</td></tr>\n<tr><td>4. Premiers secours</td><td>Conduite à tenir en cas de contact avec les yeux, la peau, d'inhalation, d'ingestion</td></tr>\n<tr><td>5 et 6. Lutte contre l'incendie, dispersion accidentelle</td><td>Moyens d'extinction, conduite en cas de déversement</td></tr>\n<tr><td>7. Manipulation et stockage</td><td>Précautions, incompatibilités, conditions de stockage</td></tr>\n<tr><td>8. Contrôle de l'exposition, protection individuelle</td><td>Valeurs limites, EPI à porter (gants, lunettes, protection respiratoire)</td></tr>\n<tr><td>13. Considérations relatives à l'élimination</td><td>Traitement des restes de produit et des emballages</td></tr>\n</tbody>\n</table>\n<p>Les <strong>pictogrammes de danger</strong> (losanges à bord rouge) signalent par exemple la corrosion (lésions de la peau et des yeux), le point d'exclamation (irritation, sensibilisation), le danger pour la santé à long terme (silhouette humaine), la flamme (inflammable) ou le danger pour l'environnement aquatique (arbre et poisson). Les <strong>mentions de danger</strong> codées H et les <strong>conseils de prudence</strong> codés P précisent ces dangers.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'employeur doit tenir les FDS des produits utilisés à disposition des salariés. Lire la FDS avant la première utilisation d'un produit n'est pas une formalité : c'est elle qui dit quels EPI porter et que faire en cas d'accident.</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "<p>Le dossier présente deux extraits de documents de fabricants pour une intervention sur une maison en moellons calcaires tendres à enduire, dont la charpente comporte des attaques actives de petite vrillette. Le CCTP prescrit : « enduit trois couches à base de chaux naturelle, sans ciment ni liant de synthèse, perméable à la vapeur » et « traitement curatif insecticide et fongicide des bois, produit bénéficiant d'une autorisation de mise sur le marché, compatible avec les bois de chêne ».</p>\n<p><strong>Document 1 – Fiche technique « Mortier d'enduit M »</strong> : <em>« Mortier sec prêt à gâcher pour enduits de façade, couches de corps et de finition. Composition : chaux hydraulique naturelle NHL 3,5 (NF EN 459-1), sables calcaires et siliceux 0/2 mm, adjuvants. Supports : maçonneries de moellons, briques, pierres. Ne pas appliquer sur plâtre, terre crue, supports peints. Gâchage : 4,5 à 5 L d'eau par sac de 25 kg. Épaisseur : corps d'enduit 15 mm minimum par passe. Consommation : environ 15 kg/m<sup>2</sup> par cm d'épaisseur. Application entre +5 °C et +30 °C, hors gel, pluie et vent fort. Délai entre corps et finition : 7 jours minimum. Facteur μ : 12. Stockage : 12 mois en emballage d'origine, à l'abri de l'humidité. Voir FDS. »</em></p>\n<p><strong>Document 2 – Extrait de FDS « Traitement curatif T »</strong> : <em>« Rubrique 2 : pictogrammes point d'exclamation et environnement. Mentions de danger : peut provoquer une allergie cutanée ; très toxique pour les organismes aquatiques, entraîne des effets néfastes à long terme. Rubrique 7 : utiliser dans un endroit bien ventilé ; tenir à l'écart des denrées alimentaires. Rubrique 8 : gants de protection en nitrile, lunettes de protection, vêtements couvrants ; en cas d'application par pulvérisation, protection respiratoire avec filtre combiné vapeurs et particules. Rubrique 13 : éliminer le produit et l'emballage dans une filière de déchets dangereux ; ne pas rejeter à l'égout. »</em></p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Document 1 – Conformité de l'enduit au CCTP.</strong> Le liant est une NHL 3,5 conforme à la NF EN 459-1, sans ciment déclaré : conforme sur ce point. La fiche mentionne cependant des <strong>adjuvants</strong> sans en préciser la nature : il faut demander au fabricant s'ils comportent un liant de synthèse, interdit par le CCTP. Le facteur μ de 12 indique une bonne perméabilité à la vapeur, cohérente avec la prescription. Le support (moellons calcaires) est dans le domaine d'emploi. Point de vigilance : une NHL 3,5 sur un calcaire <strong>tendre</strong> peut être plus dure que le support ; il faut vérifier que le maître d'œuvre l'accepte ou prévoir une chaux moins hydraulique pour la finition.</p>\n<p><strong>Quantités.</strong> Pour 140 m<sup>2</sup> de corps d'enduit à 1,8 cm d'épaisseur moyenne : 140 × 1,8 × 15 = 3 780 kg, soit 151,2 sacs de 25 kg ; avec une majoration de 15 % pour un mur ancien irrégulier : 3 780 × 1,15 = 4 347 kg, soit 174 sacs. Eau de gâchage : de 4,5 à 5 L par sac.</p>\n<p><strong>Organisation.</strong> Application entre +5 °C et +30 °C, hors pluie et vent fort : à programmer hors saison froide, avec bâches de protection sur l'échafaudage. Le délai minimal de 7 jours entre corps et finition doit apparaître dans le planning. Stockage des sacs à l'abri de l'humidité.</p>\n<p><strong>Document 2 – Sécurité et environnement du traitement.</strong> Le produit est sensibilisant pour la peau et très toxique pour le milieu aquatique. Mesures à prévoir : gants en nitrile, lunettes, vêtements couvrants, protection respiratoire à filtre combiné pendant la pulvérisation, ventilation du comble, interdiction de stocker ou de consommer des aliments dans la zone, récupération des restes et emballages comme déchets dangereux, aucun rinçage de matériel à l'évier ou au caniveau. La compatibilité avec le chêne et l'autorisation de mise sur le marché exigées par le CCTP ne figurent pas dans cet extrait de FDS : il faut les vérifier dans la fiche technique du produit avant commande.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fiches techniques et FDS des produits effectivement utilisés sont jointes au DOE en fin de chantier. Sur un bâtiment ancien, elles permettront aux intervenants futurs de connaître exactement la nature des enduits et des traitements appliqués.</div>"
      }
     ],
     "points_cles": [
      "NF DTU, normes produits, avis techniques et règles professionnelles encadrent les techniques ; fiches techniques et FDS décrivent les produits.",
      "Sur le bâti ancien, le CCTP précise les règles applicables lorsque les DTU ne couvrent pas la technique.",
      "La fiche technique donne domaine d'emploi, caractéristiques, mise en œuvre, consommation, conditionnement et stockage.",
      "Une appellation commerciale ne garantit rien : seule la composition fait foi.",
      "La FDS compte 16 rubriques ; les rubriques 2, 4, 7, 8 et 13 sont essentielles sur chantier.",
      "Pictogrammes, mentions H et conseils P signalent les dangers et les précautions.",
      "Quantité de produit = surface × épaisseur × consommation unitaire, majorée pour un support ancien.",
      "Les conditions et délais de la fiche technique sont reportés dans l'organisation du chantier."
     ],
     "lexique": [
      {
       "terme": "NF DTU",
       "def": "Document technique unifié ayant statut de norme, qui fixe les règles de l'art d'une technique courante."
      },
      {
       "terme": "Avis technique",
       "def": "Évaluation d'un procédé non traditionnel précisant son domaine d'emploi et sa mise en œuvre."
      },
      {
       "terme": "Fiche technique",
       "def": "Document du fabricant décrivant un produit et sa mise en œuvre."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité en 16 rubriques décrivant les dangers d'un produit et les mesures de prévention."
      },
      {
       "terme": "Mention de danger",
       "def": "Phrase codée H décrivant la nature d'un danger."
      },
      {
       "terme": "Conseil de prudence",
       "def": "Phrase codée P indiquant une mesure de prévention ou de réaction."
      },
      {
       "terme": "Pictogramme de danger",
       "def": "Symbole dans un losange à bord rouge signalant un type de danger."
      },
      {
       "terme": "Domaine d'emploi",
       "def": "Ensemble des supports et usages pour lesquels un produit est prévu."
      },
      {
       "terme": "Consommation",
       "def": "Quantité de produit nécessaire par unité de surface et d'épaisseur."
      },
      {
       "terme": "Autorisation de mise sur le marché",
       "def": "Autorisation administrative préalable exigée pour les produits biocides."
      }
     ]
    },
    {
     "id": "bipb-doc-planning-commande",
     "titre": "Analyser un planning, un quantitatif et un bon de commande",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire un planning sous forme de tableau d'antériorités ou de diagramme de Gantt",
      "Déterminer la durée totale d'une intervention et le chemin critique",
      "Contrôler un quantitatif à partir des plans et des règles de calcul",
      "Vérifier la cohérence d'un bon de commande avec le quantitatif et le planning",
      "Rédiger une analyse argumentée et proposer des corrections"
     ],
     "sections": [
      {
       "titre": "Les documents d'organisation",
       "contenu": "<p>L'épreuve d'organisation des travaux et la vie du chantier font appel à trois documents liés entre eux :</p>\n<ul>\n<li>le <strong>planning</strong>, qui présente les tâches, leurs durées, leurs liens et leurs dates, sous forme de <strong>tableau d'antériorités</strong> (pour chaque tâche : durée et tâches qui doivent être terminées avant) ou de <strong>diagramme de Gantt</strong> ;</li>\n<li>le <strong>quantitatif</strong> (ou métré), qui donne pour chaque ouvrage la quantité à réaliser, avec le détail du calcul ;</li>\n<li>le <strong>bon de commande</strong>, qui transmet au fournisseur la liste des matériaux à livrer : références, désignations, quantités, unités, conditionnements, prix, date et lieu de livraison, conditions d'accès.</li>\n</ul>\n<p>Ces documents doivent être <strong>cohérents</strong> : les quantités commandées découlent du quantitatif (majoré des pertes et diminué des matériaux de réemploi), et les dates de livraison découlent du planning (le matériau doit être sur place avant le début de la tâche, sans encombrer le chantier trop tôt).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le <strong>chemin critique</strong> d'un planning est la suite de tâches liées dont la durée totale est la plus longue : tout retard sur l'une d'elles retarde la fin du chantier. Les autres tâches disposent d'une <strong>marge</strong>.</div>"
      },
      {
       "titre": "Méthode d'analyse",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser planning, quantitatif et commande. 1. <strong>Planning</strong> : pour chaque tâche, calculer la date de début au plus tôt (fin de la dernière tâche antérieure) et la date de fin ; identifier le chemin critique et la durée totale ; vérifier que les délais techniques (séchage, agrément) sont présents. 2. <strong>Quantitatif</strong> : refaire les calculs principaux à partir des cotes ; vérifier les unités et les déductions (baies, parties non traitées) ; vérifier la cohérence avec le mode de métré du marché. 3. <strong>Bon de commande</strong> : pour chaque ligne, retrouver la quantité théorique dans le quantitatif, appliquer la majoration de pertes, déduire le réemploi, convertir en conditionnement ; contrôler les références (format, modèle, classe), les prix et le total ; vérifier la date de livraison par rapport au planning et les conditions d'accès. 4. <strong>Conclure</strong> par une liste d'anomalies et de corrections chiffrées.</div>\n<p>Les erreurs les plus fréquentes sont : une durée en jours calendaires confondue avec des jours ouvrés, un délai de séchage oublié, une surface de versant calculée en projection horizontale au lieu du rampant réel, des déductions oubliées, une quantité commandée à l'unité alors que le fournisseur vend par palette ou par sac, un format ou une classe de produit différents de la prescription, une livraison prévue après le début de la tâche.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un chantier de couverture, la surface à couvrir est celle du <strong>rampant</strong>, pas celle du plan. Pour un versant dont la projection horizontale mesure 5,00 m et qui a une pente de 100 % (45°), le rampant vaut 5,00 × √2 ≈ 7,07 m : calculer sur 5,00 m sous-estime la surface de près de 30 %.</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "<p>Chantier : réfection de la couverture en ardoises naturelles d'un versant (pose au crochet sur liteaux), avec greffe de deux pieds de chevrons et reprise du solin contre le mur pignon. Versant : longueur 10,00 m ; rampant 6,00 m. Ardoises 32 × 22 cm, recouvrement 8 cm (pureau 12 cm, 38 ardoises/m<sup>2</sup>). Taux de réemploi constaté après tri : 0 % (ardoises poreuses et feuilletées). Équipe : deux couvreurs, 7 h par jour, du lundi au vendredi.</p>\n<p><strong>Document 1 – Tableau d'antériorités</strong></p>\n<table>\n<thead><tr><th>Repère</th><th>Tâche</th><th>Durée (jours ouvrés)</th><th>Antériorité</th></tr></thead>\n<tbody>\n<tr><td>A</td><td>Installation, échafaudage, protections</td><td>1</td><td>—</td></tr>\n<tr><td>B</td><td>Dépose des ardoises et des liteaux, tri, évacuation</td><td>2</td><td>A</td></tr>\n<tr><td>C</td><td>Greffes de deux pieds de chevrons</td><td>1</td><td>B</td></tr>\n<tr><td>D</td><td>Pose de l'écran de sous-toiture et des liteaux</td><td>1</td><td>C</td></tr>\n<tr><td>E</td><td>Pose des ardoises</td><td>6</td><td>D</td></tr>\n<tr><td>F</td><td>Engravure et solin contre pignon</td><td>1</td><td>E</td></tr>\n<tr><td>G</td><td>Repli, nettoyage</td><td>1</td><td>F</td></tr>\n</tbody>\n</table>\n<p><strong>Document 2 – Bon de commande des ardoises</strong> (livraison demandée le jour 6, chantier commençant le lundi jour 1)</p>\n<table>\n<thead><tr><th>Désignation</th><th>Quantité</th><th>Unité</th><th>PU HT (€)</th><th>Montant HT (€)</th></tr></thead>\n<tbody>\n<tr><td>Ardoise naturelle 30 × 20 cm, épaisseur 4 mm</td><td>2 280</td><td>U</td><td>1,10</td><td>2 508,00</td></tr>\n<tr><td>Crochets inox</td><td>2 280</td><td>U</td><td>0,06</td><td>136,80</td></tr>\n<tr><td>Total HT</td><td></td><td></td><td></td><td>2 644,80</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Planning.</strong> Les tâches s'enchaînent en une seule suite A-B-C-D-E-F-G : toutes sont critiques. Durée totale : 1 + 2 + 1 + 1 + 6 + 1 + 1 = 13 jours ouvrés, soit, en commençant un lundi, une fin le mercredi de la troisième semaine. Dates au plus tôt : A jour 1 ; B jours 2-3 ; C jour 4 ; D jour 5 ; E jours 6 à 11 ; F jour 12 ; G jour 13. Remarque : la tâche F (solin) pourrait être en partie avancée, car les noquets ou le relevé contre le pignon se posent au fur et à mesure de la pose des ardoises de rive ; seule la bande de solin et son engravure viennent à la fin. Le planning ne prévoit aucun jour de réserve pour les intempéries, alors que la toiture est ouverte du jour 2 au jour 5 : il faut prévoir un bâchage et une marge.</p>\n<p><strong>Quantités.</strong> Surface du versant : 10,00 × 6,00 = 60 m<sup>2</sup>. Ardoises courantes : 60 × 38 = 2 280. Le bon de commande reprend exactement ce nombre, <strong>sans majoration</strong> pour les rives, les coupes, la casse et le tri ni pour le doublis d'égout. Avec 8 % : 2 280 × 1,08 ≈ 2 462, arrondi au conditionnement du fournisseur.</p>\n<p><strong>Format.</strong> Le bon de commande indique des ardoises de <strong>30 × 20 cm</strong> alors que le calcul et la prescription portent sur des ardoises de <strong>32 × 22 cm</strong> : c'est une erreur grave. Avec un format 30 × 20 et le même recouvrement de 8 cm, le pureau tomberait à (30 − 8) / 2 = 11 cm, le liteaunage serait différent et le nombre d'ardoises passerait à 1 / (0,11 × 0,20) ≈ 45,5 par m<sup>2</sup> ; l'aspect de la couverture changerait également, ce qui peut être refusé en secteur protégé.</p>\n<p><strong>Crochets.</strong> Un crochet par ardoise : la quantité doit suivre celle des ardoises, majorée d'une réserve pour la perte sur chantier.</p>\n<p><strong>Date de livraison.</strong> La livraison est demandée le jour 6, jour même du début de la pose des ardoises (tâche E). C'est trop juste : un retard de livraison immobiliserait l'équipe et prolongerait l'ouverture de la toiture. Il faut demander une livraison au plus tard le jour 4 ou 5, en vérifiant la zone de stockage et l'accès du camion.</p>\n<p><strong>Montants.</strong> 2 280 × 1,10 = 2 508,00 € ; 2 280 × 0,06 = 136,80 € ; total 2 644,80 € HT : les calculs sont justes, mais portent sur des quantités et un format à corriger.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant d'envoyer un bon de commande, le chef d'équipe le relit avec le quantitatif et le planning sous les yeux : format, quantité avec pertes, conditionnement, date et lieu de livraison, contact sur place. Une erreur de format d'ardoise ou de modèle de tuile découverte à la livraison coûte plusieurs jours de chantier.</div>"
      },
      {
       "titre": "Du tableau d'antériorités au diagramme de Gantt",
       "contenu": "<p>Le même planning peut être présenté en <strong>diagramme de Gantt</strong>. Sans image, on le décrit comme un tableau dont les colonnes sont les jours et dont chaque ligne est une tâche ; une case marquée indique que la tâche est en cours ce jour-là. Pour les sept tâches de l'exemple, on obtient :</p>\n<table>\n<thead><tr><th>Tâche</th><th>Semaine 1 (jours 1 à 5)</th><th>Semaine 2 (jours 6 à 10)</th><th>Semaine 3 (jours 11 à 13)</th></tr></thead>\n<tbody>\n<tr><td>A Installation</td><td>jour 1</td><td></td><td></td></tr>\n<tr><td>B Dépose</td><td>jours 2 et 3</td><td></td><td></td></tr>\n<tr><td>C Greffes</td><td>jour 4</td><td></td><td></td></tr>\n<tr><td>D Écran et liteaux</td><td>jour 5</td><td></td><td></td></tr>\n<tr><td>E Ardoises</td><td></td><td>jours 6 à 10</td><td>jour 11</td></tr>\n<tr><td>F Solin</td><td></td><td></td><td>jour 12</td></tr>\n<tr><td>G Repli</td><td></td><td></td><td>jour 13</td></tr>\n</tbody>\n</table>\n<p>Sur un Gantt, on lit d'un coup d'œil les périodes où la toiture est ouverte (de la dépose à la fin de la pose des liteaux et de l'écran), qui sont les périodes les plus sensibles à la météo, et les jalons à placer : agrément des ardoises, livraison, réception. En cours de chantier, on trace une ligne verticale à la date du jour et l'on colorie la part réalisée de chaque barre : l'écart entre la ligne et l'avancement montre immédiatement l'avance ou le retard.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un tableau d'antériorités se transforme en Gantt en plaçant chaque tâche à sa date de début au plus tôt ; le Gantt rend visibles les chevauchements possibles, les périodes à risque et les dates de livraison à respecter.</div>"
      }
     ],
     "points_cles": [
      "Planning, quantitatif et bon de commande doivent être cohérents entre eux.",
      "Le chemin critique est la suite de tâches la plus longue ; tout retard y décale la fin du chantier.",
      "Un planning réaliste intègre délais techniques et réserves pour intempéries.",
      "En couverture, la surface se calcule sur le rampant, pas sur la projection.",
      "La quantité commandée = quantité théorique × (1 + pertes) − réemploi, arrondie au conditionnement.",
      "On vérifie format, modèle et classe des produits commandés par rapport à la prescription.",
      "La livraison doit précéder le début de la tâche avec une marge, en tenant compte de l'accès et du stockage.",
      "L'analyse se conclut par des anomalies et des corrections chiffrées."
     ],
     "lexique": [
      {
       "terme": "Tableau d'antériorités",
       "def": "Tableau donnant pour chaque tâche sa durée et les tâches qui doivent la précéder."
      },
      {
       "terme": "Chemin critique",
       "def": "Suite de tâches liées dont la durée totale détermine la durée du chantier."
      },
      {
       "terme": "Marge",
       "def": "Retard qu'une tâche peut prendre sans retarder la fin du chantier."
      },
      {
       "terme": "Jour ouvré",
       "def": "Jour habituellement travaillé dans l'entreprise."
      },
      {
       "terme": "Quantitatif",
       "def": "Document qui donne les quantités d'ouvrages à réaliser avec le détail des calculs."
      },
      {
       "terme": "Bon de commande",
       "def": "Document transmis au fournisseur précisant les produits, quantités, prix et conditions de livraison."
      },
      {
       "terme": "Conditionnement",
       "def": "Unité de vente d'un produit : sac, palette, botte, carton."
      },
      {
       "terme": "Rampant",
       "def": "Longueur d'un versant de toiture mesurée suivant la pente."
      },
      {
       "terme": "Liteaunage",
       "def": "Ensemble des liteaux d'une couverture, dont l'espacement dépend du pureau."
      },
      {
       "terme": "Délai de livraison",
       "def": "Temps entre la commande et la livraison effective sur le chantier."
      }
     ]
    }
   ]
  }
 ]
};
