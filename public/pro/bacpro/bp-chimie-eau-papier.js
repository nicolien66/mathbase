/* Polymates — Bac pro Procédés de la chimie, de l'eau et des papiers-cartons — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-chimie-eau-papier"] = {
 "id": "bp-chimie-eau-papier",
 "nom": "Procédés de la chimie, de l'eau et des papiers-cartons",
 "icone": "🎓",
 "couleur": "#8ab89a",
 "intro": "Le baccalauréat professionnel Procédés de la chimie, de l'eau et des papiers-cartons forme des pilotes d'installations capables de préparer, conduire, surveiller et mettre en sécurité une unité de production chimique, une usine de traitement des eaux ou une machine à papier. Il mène aux métiers d'opérateur et de conducteur de procédés, de pilote d'installation, d'agent d'exploitation de station d'eau potable ou d'épuration, de conducteur de machine à papier, puis de chef de poste. Ce cours couvre les savoirs associés de la première et de la terminale, en prolongement du cours de seconde de la famille : produits et procédés, opérations unitaires du génie des procédés, instrumentation et conduite, qualité, sécurité, environnement et maintenance. Il est organisé en deux blocs : un cours théorique et un bloc d'analyse de documents, qui montre comment exploiter les documents du dossier technique de fabrication et du dossier de prévention rencontrés à l'épreuve écrite d'étude d'un procédé.",
 "parties": [
  {
   "titre": "Partie 1 — Produits, réactions et filières de production",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpce-grandeurs-produits",
     "titre": "Caractériser les produits : grandeurs et unités du procédé",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Distinguer corps pur, mélange homogène, mélange hétérogène et solution, et nommer les états de la matière rencontrés en production.",
      "Exprimer la composition d'un mélange en concentration massique, concentration molaire, fraction massique et pourcentage.",
      "Utiliser la masse volumique, la densité et la viscosité pour décrire un fluide de procédé.",
      "Interpréter une mesure de pH, de conductivité ou de matière sèche dans une situation de production.",
      "Convertir les unités courantes du procédé (pression, débit, température, concentration)."
     ],
     "sections": [
      {
       "titre": "Matière première, produit intermédiaire, produit fini",
       "contenu": "\n<p>Toute installation de la chimie, de l'eau ou des papiers-cartons transforme une <strong>matière première</strong> (minerai, réactif, eau brute, bois, vieux papiers) en un <strong>produit fini</strong> (acide, résine, eau potable, bobine de papier) en passant par des <strong>produits intermédiaires</strong> (mélange réactionnel, eau décantée, pâte à papier). À chaque étape, le pilote doit savoir décrire le produit avec des <strong>grandeurs mesurables</strong> : sa composition, sa masse volumique, sa température, sa viscosité, son pH, sa teneur en matière sèche. Ces grandeurs figurent dans le dossier de fabrication sous forme de <strong>consignes</strong> (valeur visée) et de <strong>tolérances</strong> (écart admis).</p>\n<p>On distingue :</p>\n<ul>\n<li>le <strong>corps pur</strong>, constitué d'une seule espèce chimique (eau déminéralisée, éthanol absolu, chlorure de sodium pur) ;</li>\n<li>le <strong>mélange homogène</strong>, dans lequel on ne distingue qu'une seule phase à l'œil nu (eau salée, air, solution d'acide) ; une <strong>solution</strong> est un mélange homogène d'un <strong>soluté</strong> dissous dans un <strong>solvant</strong> ;</li>\n<li>le <strong>mélange hétérogène</strong>, qui comporte plusieurs phases : <strong>suspension</strong> (solide dispersé dans un liquide, comme la pâte à papier ou une boue), <strong>émulsion</strong> (deux liquides non miscibles), <strong>mousse</strong> (gaz dans un liquide).</li>\n</ul>\n<p>Cette distinction commande le choix des opérations : on sépare un mélange hétérogène par des moyens mécaniques (décantation, filtration), alors qu'un mélange homogène exige un changement d'état ou un transfert entre phases (évaporation, distillation, extraction).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une même installation traite souvent un produit qui change de nature d'une étape à l'autre. La pâte à papier est une suspension très diluée en tête de machine, un matelas humide sur la toile, puis une feuille presque sèche en sortie de sécherie : les grandeurs suivies changent avec elle.</div>"
      },
      {
       "titre": "Exprimer la composition d'un mélange",
       "contenu": "\n<p>La composition se dit de plusieurs manières, et les erreurs viennent presque toujours d'une confusion entre elles.</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Définition</th><th>Unité usuelle</th><th>Exemple du métier</th></tr></thead>\n<tbody>\n<tr><td>Concentration massique C<sub>m</sub></td><td>masse de soluté / volume de solution</td><td>g/L ou mg/L</td><td>chlore libre 0,3 mg/L dans l'eau distribuée</td></tr>\n<tr><td>Concentration molaire C</td><td>quantité de matière de soluté / volume de solution</td><td>mol/L</td><td>soude à 1 mol/L pour un titrage</td></tr>\n<tr><td>Fraction (ou titre) massique w</td><td>masse de constituant / masse totale</td><td>sans unité, souvent en %</td><td>acide sulfurique à 98 % en masse</td></tr>\n<tr><td>Fraction volumique</td><td>volume de constituant / volume total</td><td>% vol</td><td>éthanol à 96 % vol</td></tr>\n<tr><td>Siccité (matière sèche)</td><td>masse sèche / masse humide</td><td>%</td><td>feuille à 45 % de siccité après la presse</td></tr>\n<tr><td>Consistance</td><td>masse de fibres sèches / masse de suspension</td><td>%</td><td>pâte à 3 % au cuvier, moins de 1 % en caisse de tête</td></tr>\n</tbody>\n</table>\n<p>Les deux concentrations sont liées par la <strong>masse molaire</strong> M du soluté (en g/mol) : C<sub>m</sub> = C × M. Pour le chlorure de sodium (M = 58,5 g/mol), une solution à 0,1 mol/L contient donc 5,85 g/L.</p>\n<p>Le passage d'une fraction massique à une concentration massique exige la masse volumique de la solution : C<sub>m</sub> = w × ρ. Une solution commerciale de soude à 30 % en masse, de masse volumique 1 330 g/L environ, contient 0,30 × 1 330 ≈ 400 g de NaOH par litre.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une dilution. On dispose d'une solution mère de soude à 400 g/L et l'on veut 2 000 L de solution de lavage à 20 g/L.<br>1. Écrire la conservation de la masse de soluté : C<sub>mère</sub> × V<sub>mère</sub> = C<sub>fille</sub> × V<sub>fille</sub>.<br>2. Isoler l'inconnue : V<sub>mère</sub> = 20 × 2 000 / 400 = 100 L.<br>3. Vérifier l'ordre de grandeur : on dilue 20 fois, il faut donc un vingtième du volume final.<br>4. Rédiger l'action : introduire environ 1 900 L d'eau puis ajouter lentement 100 L de solution mère sous agitation, et compléter à 2 000 L. On verse toujours le produit concentré dans l'eau, jamais l'inverse.</div>"
      },
      {
       "titre": "Masse volumique, densité et viscosité",
       "contenu": "\n<p>La <strong>masse volumique</strong> ρ (rhô) est la masse d'un mètre cube de produit : ρ = m / V, en kg/m³. L'eau à 20 °C a une masse volumique de 998 kg/m³ (environ 1 000 kg/m³, soit 1 kg/L). La <strong>densité</strong> d d'un liquide est le rapport de sa masse volumique à celle de l'eau ; elle n'a pas d'unité. Un acide sulfurique concentré a une densité voisine de 1,84 : un litre pèse 1,84 kg.</p>\n<p>La masse volumique sert en permanence au pilote :</p>\n<ul>\n<li>convertir un <strong>débit volumique</strong> Q<sub>v</sub> (m³/h) en <strong>débit massique</strong> Q<sub>m</sub> (kg/h) : Q<sub>m</sub> = ρ × Q<sub>v</sub> ;</li>\n<li>déduire un niveau d'une mesure de pression hydrostatique : p = ρ × g × h ;</li>\n<li>suivre l'avancement d'une réaction ou d'une concentration par une mesure en ligne (densimètre).</li>\n</ul>\n<p>La <strong>viscosité</strong> traduit la résistance d'un fluide à l'écoulement. On utilise la <strong>viscosité dynamique</strong> μ en pascal-seconde (Pa·s) ; l'unité pratique est le millipascal-seconde (mPa·s), qui correspond à l'ancien centipoise. L'eau à 20 °C a une viscosité d'environ 1 mPa·s, une huile moteur plusieurs centaines, un sirop ou une résine plusieurs milliers. La viscosité <strong>diminue fortement quand la température augmente</strong> pour les liquides : c'est pourquoi on réchauffe les produits lourds avant de les pomper.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> certains produits n'ont pas une viscosité constante. Les suspensions de fibres, les boues et de nombreuses formulations sont dites <strong>non newtoniennes</strong> : leur viscosité apparente change avec la vitesse d'agitation ou de pompage. Une valeur de viscosité n'a de sens que si l'on connaît la température et les conditions de mesure.</div>"
      },
      {
       "titre": "pH, conductivité et grandeurs de l'eau",
       "contenu": "\n<p>Le <strong>pH</strong> mesure l'acidité d'une solution aqueuse, sur une échelle pratique de 0 à 14 à 25 °C. Une solution est <strong>acide</strong> si son pH est inférieur à 7, <strong>neutre</strong> à 7, <strong>basique</strong> au-delà. Le pH est lié à la concentration en ions oxonium : pH = − log [H<sub>3</sub>O<sup>+</sup>]. Une variation d'une unité de pH correspond donc à une concentration en ions H<sub>3</sub>O<sup>+</sup> multipliée ou divisée par dix : passer de pH 4 à pH 2 rend la solution cent fois plus acide.</p>\n<p>La <strong>conductivité</strong> électrique, mesurée en microsiemens par centimètre (µS/cm), renseigne sur la quantité d'ions dissous. Elle vaut moins de 1 µS/cm pour une eau déminéralisée, quelques centaines pour une eau du robinet, plusieurs dizaines de milliers pour l'eau de mer. En production, elle sert à suivre une déminéralisation, à détecter l'arrivée d'une solution de lavage ou à contrôler le rinçage d'une cuve.</p>\n<p>D'autres grandeurs sont propres au domaine de l'eau :</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Ce qu'elle mesure</th><th>Unité</th></tr></thead>\n<tbody>\n<tr><td>Turbidité</td><td>trouble dû aux particules en suspension</td><td>NFU (unité néphélométrique)</td></tr>\n<tr><td>MES (matières en suspension)</td><td>masse de particules retenues sur un filtre</td><td>mg/L</td></tr>\n<tr><td>Dureté ou TH (titre hydrotimétrique)</td><td>teneur en calcium et magnésium</td><td>degré français (°f)</td></tr>\n<tr><td>TAC (titre alcalimétrique complet)</td><td>teneur en hydrogénocarbonates et carbonates</td><td>°f</td></tr>\n<tr><td>DCO (demande chimique en oxygène)</td><td>quantité d'oxygène nécessaire pour oxyder chimiquement la matière</td><td>mg O<sub>2</sub>/L</td></tr>\n<tr><td>DBO<sub>5</sub> (demande biochimique en oxygène sur 5 jours)</td><td>matière organique dégradable par les bactéries</td><td>mg O<sub>2</sub>/L</td></tr>\n</tbody>\n</table>\n<p>Un degré français de dureté correspond à 10 mg/L de carbonate de calcium. Une eau à 30 °f est dite dure et entartre les échangeurs de chaleur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans une papeterie, le pH de la pâte en tête de machine est surveillé en continu car il conditionne l'efficacité des produits de collage et de rétention. Une dérive de pH de quelques dixièmes peut suffire à provoquer des casses de feuille ou des dépôts sur la toile.</div>"
      },
      {
       "titre": "Température, pression et débit",
       "contenu": "\n<p>La <strong>température</strong> s'exprime en degrés Celsius (°C) sur le terrain et en kelvins (K) dans les calculs : T(K) = θ(°C) + 273,15. Un écart de température a la même valeur dans les deux unités : un échauffement de 15 °C est un échauffement de 15 K.</p>\n<p>La <strong>pression</strong> est une force par unité de surface. L'unité du Système international est le pascal (Pa) ; en exploitation on utilise le <strong>bar</strong> (1 bar = 100 000 Pa = 0,1 MPa). Il faut distinguer :</p>\n<ul>\n<li>la <strong>pression absolue</strong>, mesurée par rapport au vide (notée bar abs ou bara) ;</li>\n<li>la <strong>pression relative</strong> ou effective, mesurée par rapport à la pression atmosphérique (notée bar rel ou barg), celle qu'affichent la plupart des manomètres ;</li>\n<li>la <strong>dépression</strong>, pression inférieure à la pression atmosphérique, utilisée en évaporation ou en filtration sous vide.</li>\n</ul>\n<p>On a : p<sub>absolue</sub> = p<sub>relative</sub> + p<sub>atmosphérique</sub>, avec p<sub>atmosphérique</sub> voisine de 1,013 bar. Un réservoir à 3 bar relatifs est donc à environ 4 bar absolus.</p>\n<p>Le <strong>débit</strong> est la quantité de produit qui passe par unité de temps. Le débit volumique s'exprime en m³/h ou L/min, le débit massique en kg/h ou t/h. Pour une conduite de section S (m²) parcourue à la vitesse moyenne v (m/s) : Q<sub>v</sub> = S × v.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une vitesse dans une conduite. Débit 18 m³/h dans une tuyauterie de diamètre intérieur 50 mm.<br>1. Convertir le débit : 18 / 3 600 = 0,005 m³/s.<br>2. Calculer la section : S = π × d² / 4 = 3,14 × 0,05² / 4 ≈ 0,00196 m².<br>3. Calculer la vitesse : v = Q<sub>v</sub> / S = 0,005 / 0,00196 ≈ 2,5 m/s.<br>4. Comparer à l'ordre de grandeur habituel des liquides en refoulement (1 à 3 m/s) : la valeur est cohérente.</div>"
      },
      {
       "titre": "Unités, conversions et cohérence des résultats",
       "contenu": "\n<p>Les documents de production mélangent souvent les unités : un débit en L/min sur une pompe doseuse, en m³/h sur le débitmètre principal, une concentration en g/L sur la fiche de fabrication et en % sur l'étiquette du fût. La première compétence du pilote est de tout ramener à des <strong>unités cohérentes</strong> avant de calculer.</p>\n<table>\n<thead><tr><th>Conversion</th><th>Valeur</th></tr></thead>\n<tbody>\n<tr><td>1 m³</td><td>1 000 L</td></tr>\n<tr><td>1 m³/h</td><td>16,7 L/min</td></tr>\n<tr><td>1 bar</td><td>10<sup>5</sup> Pa ≈ 10 m de colonne d'eau</td></tr>\n<tr><td>1 mg/L dans l'eau</td><td>1 g/m³ ≈ 1 ppm en masse</td></tr>\n<tr><td>1 t/h</td><td>0,278 kg/s</td></tr>\n<tr><td>1 kWh</td><td>3,6 MJ</td></tr>\n</tbody>\n</table>\n<p>Avant de valider un résultat, il faut le confronter à un <strong>ordre de grandeur</strong> connu : une pompe centrifuge de procédé ne refoule pas 5 000 m³/h, une eau potable ne contient pas 3 g/L de chlore, une feuille de papier journal ne pèse pas 400 g/m². Un résultat aberrant signale presque toujours une erreur d'unité ou de virgule.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le « ppm » (partie par million) est ambigu : il peut être exprimé en masse, en volume ou en moles. Dans l'eau, 1 ppm en masse correspond à 1 mg/L ; dans un gaz, 1 ppm en volume n'a pas la même valeur en mg/m³. On vérifie toujours la base utilisée par le document.</div>\n<p>Enfin, un résultat se rédige avec un nombre de chiffres significatifs adapté à la précision des données. Si le débit est lu à 18 m³/h sur un afficheur, annoncer une vitesse de 2,546 m/s n'a pas de sens : 2,5 m/s suffit.</p>"
      }
     ],
     "points_cles": [
      "Un produit de procédé se décrit par des grandeurs mesurables associées à une consigne et à une tolérance.",
      "Mélange homogène et mélange hétérogène n'appellent pas les mêmes opérations de séparation.",
      "Concentration massique (g/L), concentration molaire (mol/L) et fraction massique (%) sont liées par la masse molaire et la masse volumique.",
      "Lors d'une dilution, la quantité de soluté se conserve : C1 × V1 = C2 × V2.",
      "La masse volumique permet de passer du débit volumique au débit massique ; la viscosité d'un liquide baisse quand sa température monte.",
      "Une unité de pH correspond à un facteur 10 sur l'acidité ; la conductivité renseigne sur les ions dissous.",
      "La pression absolue est égale à la pression relative augmentée de la pression atmosphérique.",
      "Tout calcul se fait en unités cohérentes et se termine par un contrôle d'ordre de grandeur."
     ],
     "lexique": [
      {
       "terme": "Solution",
       "def": "Mélange homogène d'un soluté dissous dans un solvant, le plus souvent l'eau."
      },
      {
       "terme": "Suspension",
       "def": "Mélange hétérogène de particules solides dispersées dans un liquide."
      },
      {
       "terme": "Concentration massique",
       "def": "Masse de soluté contenue dans un litre de solution, en g/L ou mg/L."
      },
      {
       "terme": "Fraction massique",
       "def": "Rapport de la masse d'un constituant à la masse totale du mélange, souvent exprimé en pourcentage."
      },
      {
       "terme": "Masse volumique",
       "def": "Masse d'un volume unité de produit, en kg/m³ ; elle vaut environ 1 000 kg/m³ pour l'eau."
      },
      {
       "terme": "Viscosité dynamique",
       "def": "Résistance d'un fluide à l'écoulement, en Pa·s ou mPa·s."
      },
      {
       "terme": "pH",
       "def": "Grandeur sans unité qui mesure l'acidité d'une solution aqueuse, de 0 à 14 à 25 °C."
      },
      {
       "terme": "Conductivité",
       "def": "Aptitude d'une solution à conduire le courant électrique, liée à sa teneur en ions, en µS/cm."
      },
      {
       "terme": "Siccité",
       "def": "Pourcentage de matière sèche dans un produit humide."
      },
      {
       "terme": "Consistance",
       "def": "Pourcentage de fibres sèches dans une suspension de pâte à papier."
      },
      {
       "terme": "Pression relative",
       "def": "Pression mesurée par rapport à la pression atmosphérique, indiquée par la plupart des manomètres."
      }
     ]
    },
    {
     "id": "bpce-reactions-bilans",
     "titre": "Réactions chimiques industrielles et bilans matière",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Écrire et équilibrer l'équation d'une réaction mise en œuvre en production.",
      "Calculer les quantités de réactifs nécessaires et identifier le réactif limitant.",
      "Calculer un taux de conversion, un rendement et une sélectivité.",
      "Établir un bilan matière sur une unité en régime permanent.",
      "Distinguer réacteur discontinu et réacteur continu, réaction exothermique et endothermique."
     ],
     "sections": [
      {
       "titre": "L'équation de réaction, outil du pilote",
       "contenu": "\n<p>Une <strong>réaction chimique</strong> transforme des <strong>réactifs</strong> en <strong>produits</strong> en réarrangeant les atomes. Elle s'écrit par une <strong>équation de réaction</strong> équilibrée : chaque élément chimique et la charge électrique doivent être conservés de part et d'autre de la flèche. Les nombres placés devant les formules sont les <strong>coefficients stœchiométriques</strong>.</p>\n<p>Quelques réactions que l'on rencontre dans les trois domaines de la spécialité :</p>\n<table>\n<thead><tr><th>Domaine</th><th>Réaction</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Chimie</td><td>CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH ⇄ CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O</td><td>estérification (fabrication d'un solvant, l'acétate d'éthyle)</td></tr>\n<tr><td>Chimie et eau</td><td>H<sub>2</sub>SO<sub>4</sub> + 2 NaOH → Na<sub>2</sub>SO<sub>4</sub> + 2 H<sub>2</sub>O</td><td>neutralisation d'un effluent acide</td></tr>\n<tr><td>Eau</td><td>Cl<sub>2</sub> + H<sub>2</sub>O ⇄ HClO + H<sup>+</sup> + Cl<sup>−</sup></td><td>désinfection par le chlore</td></tr>\n<tr><td>Eau</td><td>Ca(OH)<sub>2</sub> + Ca(HCO<sub>3</sub>)<sub>2</sub> → 2 CaCO<sub>3</sub> + 2 H<sub>2</sub>O</td><td>décarbonatation à la chaux</td></tr>\n<tr><td>Papier</td><td>2 H<sub>2</sub>O<sub>2</sub> → 2 H<sub>2</sub>O + O<sub>2</sub></td><td>décomposition du peroxyde, à limiter lors du blanchiment</td></tr>\n</tbody>\n</table>\n<p>Une double flèche ⇄ signale une <strong>réaction équilibrée</strong> (ou limitée) : elle ne va pas jusqu'au bout et s'arrête à un état d'équilibre où réactifs et produits coexistent. Le pilote peut déplacer cet équilibre, par exemple en éliminant un produit au fur et à mesure (on distille l'eau formée lors d'une estérification) ou en mettant un réactif en excès.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'équation se lit en quantités de matière (moles), jamais directement en masses. Dans la neutralisation de l'acide sulfurique, une mole d'acide réagit avec deux moles de soude, ce qui correspond à 98 g d'acide pour 80 g de soude.</div>"
      },
      {
       "titre": "Quantités de matière et réactif limitant",
       "contenu": "\n<p>La <strong>quantité de matière</strong> n, en moles (mol), se calcule à partir de la masse m et de la masse molaire M : n = m / M. Pour une solution, n = C × V. En production, on travaille souvent en kilomoles (kmol) et en kilogrammes, ce qui conserve la même relation.</p>\n<p>Lorsque les réactifs ne sont pas introduits dans les proportions de l'équation, l'un d'eux est épuisé le premier : c'est le <strong>réactif limitant</strong>. Il fixe la quantité maximale de produit. Les autres réactifs sont en <strong>excès</strong> et se retrouvent en partie dans le mélange final, ce qui a un coût (matière perdue, purification) mais peut être voulu pour forcer la réaction.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> neutraliser un effluent acide. Une cuve contient 20 m³ d'effluent à 4,9 g/L d'acide sulfurique (M = 98 g/mol). Quelle masse de soude (M = 40 g/mol) faut-il ?<br>1. Masse d'acide : 4,9 kg/m³ × 20 m³ = 98 kg.<br>2. Quantité d'acide : 98 / 98 = 1 kmol.<br>3. D'après l'équation, il faut 2 kmol de soude.<br>4. Masse de soude pure : 2 × 40 = 80 kg.<br>5. Si la soude est livrée à 30 % en masse : 80 / 0,30 ≈ 267 kg de solution commerciale.<br>6. En pratique, on ajoute la soude progressivement sous régulation de pH, car la composition réelle de l'effluent varie : le calcul donne l'ordre de grandeur de la consommation.</div>"
      },
      {
       "titre": "Conversion, rendement et sélectivité",
       "contenu": "\n<p>Trois indicateurs décrivent l'efficacité d'une réaction industrielle. Ils sont suivis sur les tableaux de bord de production.</p>\n<ul>\n<li>Le <strong>taux de conversion</strong> X d'un réactif est la fraction de ce réactif qui a réagi : X = (n<sub>introduit</sub> − n<sub>restant</sub>) / n<sub>introduit</sub>.</li>\n<li>Le <strong>rendement</strong> R est le rapport de la quantité de produit réellement obtenue à la quantité maximale théorique calculée à partir du réactif limitant : R = n<sub>obtenu</sub> / n<sub>théorique</sub>.</li>\n<li>La <strong>sélectivité</strong> S mesure la part du réactif transformé qui a donné le produit voulu plutôt que des <strong>sous-produits</strong> issus de réactions parasites.</li>\n</ul>\n<p>Ces grandeurs sont liées : rendement = conversion × sélectivité. Une réaction peut convertir 95 % du réactif mais n'avoir que 80 % de sélectivité ; le rendement n'est alors que de 76 %, et le reste forme des impuretés qu'il faudra séparer et traiter.</p>\n<p>Les pertes de rendement ont des causes concrètes : réaction équilibrée, temps de séjour trop court, température mal maîtrisée, impuretés dans les matières premières, pertes lors des transferts, des filtrations ou des lavages. Le pilote agit sur les paramètres qu'il contrôle : température, durée, ordre et vitesse d'introduction des réactifs, agitation, pression.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une ligne de synthèse, un rendement inférieur de deux ou trois points à l'habitude déclenche une analyse : vérification du certificat d'analyse du lot de matière première, relecture de l'enregistrement de température, contrôle de la pesée des réactifs. Le rendement est un indicateur de qualité autant qu'un indicateur économique.</div>"
      },
      {
       "titre": "Bilan matière en régime permanent",
       "contenu": "\n<p>Le <strong>bilan matière</strong> exprime la conservation de la masse sur un système délimité (un appareil, une unité, un atelier). Pour un système en <strong>régime permanent</strong>, c'est-à-dire dont les grandeurs ne varient pas dans le temps, la masse qui entre est égale à la masse qui sort :</p>\n<p><strong>Σ débits massiques entrants = Σ débits massiques sortants</strong></p>\n<p>En <strong>régime transitoire</strong> (démarrage, arrêt, changement de consigne), il faut ajouter un terme d'<strong>accumulation</strong> : entrée − sortie = variation de la masse contenue dans le système. C'est le cas d'une cuve dont le niveau monte.</p>\n<p>On peut aussi écrire un bilan par constituant : pour un constituant qui ne réagit pas (eau, fibres, sel), la masse de ce constituant se conserve aussi. Ce bilan partiel est très utile pour calculer un débit que l'on ne mesure pas.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> bilan sur une presse de machine à papier. La feuille entre à 10 t/h à 20 % de siccité et sort à 45 % de siccité. Quel débit d'eau la presse extrait-elle ?<br>1. Délimiter le système : la section des presses ; entrée : feuille humide ; sorties : feuille pressée et eau extraite.<br>2. Bilan sur la matière sèche, qui se conserve : 10 × 0,20 = 2 t/h de fibres.<br>3. Débit de feuille en sortie : 2 / 0,45 ≈ 4,44 t/h.<br>4. Bilan global : eau extraite = 10 − 4,44 ≈ 5,56 t/h.<br>5. Conclusion : la presse retire plus de la moitié de la masse entrante, sans aucune énergie de vaporisation, d'où l'intérêt de bien régler le pressage avant la sécherie.</div>"
      },
      {
       "titre": "Énergie des réactions et vitesse",
       "contenu": "\n<p>Une réaction <strong>exothermique</strong> libère de la chaleur (neutralisation, combustion, nombreuses polymérisations) ; une réaction <strong>endothermique</strong> en absorbe. L'énergie mise en jeu est l'<strong>enthalpie de réaction</strong> ΔH, en kJ par mole : négative pour une réaction exothermique, positive pour une réaction endothermique.</p>\n<p>La <strong>vitesse de réaction</strong> dépend de plusieurs facteurs que le pilote maîtrise :</p>\n<ul>\n<li>la <strong>température</strong> : en règle générale, la vitesse augmente rapidement avec la température ; un ordre de grandeur souvent cité est un doublement pour 10 °C de plus ;</li>\n<li>la <strong>concentration</strong> des réactifs ;</li>\n<li>la présence d'un <strong>catalyseur</strong>, substance qui accélère la réaction sans être consommée ;</li>\n<li>l'<strong>agitation</strong>, qui met les réactifs en contact, surtout quand ils sont dans des phases différentes.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une réaction exothermique peut s'emballer. Si la chaleur produite dépasse la capacité de refroidissement, la température monte, la réaction accélère, produit encore plus de chaleur, et la pression peut dépasser la tenue de l'appareil. Les causes typiques sont une coulée de réactif trop rapide, une panne d'agitation ou une perte du fluide de refroidissement. On ne relance jamais une agitation arrêtée sur un réacteur chargé sans consigne écrite : les réactifs accumulés pourraient réagir brutalement.</div>"
      },
      {
       "titre": "Réacteurs discontinus et continus",
       "contenu": "\n<p>Le <strong>réacteur</strong> est l'appareil où se déroule la réaction. On en distingue deux grandes familles.</p>\n<table>\n<thead><tr><th>Critère</th><th>Réacteur discontinu (batch)</th><th>Réacteur continu</th></tr></thead>\n<tbody>\n<tr><td>Fonctionnement</td><td>on charge, on fait réagir, on vidange : production par lots</td><td>alimentation et soutirage permanents</td></tr>\n<tr><td>Grandeurs</td><td>varient dans le temps au cours du cycle</td><td>stables en régime permanent</td></tr>\n<tr><td>Exemples</td><td>réacteur agité double enveloppe en chimie fine, pharmacie, formulation</td><td>réacteur tubulaire, cuve agitée continue, bassin d'aération d'une station d'épuration</td></tr>\n<tr><td>Avantages</td><td>souplesse, traçabilité par lot, petits volumes de produits variés</td><td>gros tonnages, qualité constante, automatisation poussée</td></tr>\n<tr><td>Contraintes</td><td>temps morts de chargement et de nettoyage</td><td>démarrages et arrêts délicats, peu de flexibilité</td></tr>\n</tbody>\n</table>\n<p>Le réacteur agité à <strong>double enveloppe</strong> est l'équipement emblématique de la chimie fine : une cuve en acier inoxydable ou en acier émaillé, munie d'un agitateur, d'une enveloppe où circule un fluide caloporteur (vapeur, eau glacée, huile thermique), de piquages pour l'introduction des réactifs et les capteurs, d'un condenseur et d'une vanne de fond. Le <strong>temps de séjour</strong> d'un réacteur continu, égal au volume divisé par le débit, joue le rôle de la durée de réaction du discontinu.</p>\n<p>Le cycle d'un lot se décompose en étapes que le mode opératoire décrit : inertage, chargement, montée en température, réaction, refroidissement, contrôle, vidange, nettoyage. Chaque étape a ses paramètres et ses points de contrôle.</p>"
      }
     ],
     "points_cles": [
      "Une équation équilibrée conserve les éléments et les charges ; elle se lit en moles.",
      "La quantité de matière se calcule par n = m / M ou n = C × V.",
      "Le réactif limitant fixe la quantité maximale de produit ; l'excès d'un réactif peut forcer une réaction équilibrée.",
      "Rendement = conversion × sélectivité ; une baisse de rendement est un signal à analyser.",
      "En régime permanent, la somme des débits entrants est égale à la somme des débits sortants ; un bilan sur un constituant inerte permet de calculer un débit inconnu.",
      "Une réaction exothermique mal refroidie peut s'emballer : agitation, refroidissement et vitesse de coulée sont des paramètres de sécurité.",
      "Le réacteur discontinu produit par lots et offre de la souplesse ; le réacteur continu produit de gros tonnages à qualité constante.",
      "Le temps de séjour d'un réacteur continu est égal à son volume divisé par le débit."
     ],
     "lexique": [
      {
       "terme": "Coefficient stœchiométrique",
       "def": "Nombre placé devant une formule dans une équation de réaction, indiquant les proportions en moles."
      },
      {
       "terme": "Réactif limitant",
       "def": "Réactif entièrement consommé le premier, qui fixe la quantité maximale de produit."
      },
      {
       "terme": "Taux de conversion",
       "def": "Fraction d'un réactif qui a effectivement réagi."
      },
      {
       "terme": "Rendement",
       "def": "Rapport de la quantité de produit obtenue à la quantité théorique maximale."
      },
      {
       "terme": "Sélectivité",
       "def": "Part du réactif transformé qui a donné le produit voulu plutôt que des sous-produits."
      },
      {
       "terme": "Régime permanent",
       "def": "Fonctionnement dans lequel débits, niveaux, températures et compositions restent constants dans le temps."
      },
      {
       "terme": "Exothermique",
       "def": "Se dit d'une réaction qui libère de la chaleur."
      },
      {
       "terme": "Catalyseur",
       "def": "Substance qui accélère une réaction sans être consommée."
      },
      {
       "terme": "Réacteur discontinu",
       "def": "Réacteur fonctionnant par lots successifs : chargement, réaction, vidange."
      },
      {
       "terme": "Temps de séjour",
       "def": "Durée moyenne de passage du produit dans un appareil continu, égale au volume divisé par le débit."
      }
     ]
    },
    {
     "id": "bpce-eau-potable",
     "titre": "Produire une eau destinée à la consommation humaine",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Caractériser une ressource en eau souterraine ou superficielle et ses polluants types.",
      "Citer les grandes familles de paramètres de qualité d'une eau destinée à la consommation humaine.",
      "Décrire les étapes d'une filière de potabilisation et le rôle de chacune.",
      "Expliquer le principe de la coagulation-floculation, de la filtration sur sable et de la désinfection.",
      "Relier une dérive de qualité de l'eau brute à une action de conduite."
     ],
     "sections": [
      {
       "titre": "Les ressources en eau et leurs défauts",
       "contenu": "\n<p>Une usine de production d'eau potable prélève une <strong>eau brute</strong> dans une ressource naturelle, puis la traite pour obtenir une <strong>eau destinée à la consommation humaine</strong> (EDCH). On distingue deux grands types de ressources, qui n'ont pas les mêmes défauts.</p>\n<table>\n<thead><tr><th>Critère</th><th>Eau souterraine (nappe, source, forage)</th><th>Eau superficielle (rivière, lac, retenue)</th></tr></thead>\n<tbody>\n<tr><td>Turbidité</td><td>faible et stable</td><td>variable, forte après un orage</td></tr>\n<tr><td>Matière organique</td><td>faible</td><td>souvent élevée (goûts, couleur)</td></tr>\n<tr><td>Micro-organismes</td><td>peu nombreux sauf nappe vulnérable</td><td>nombreux, contamination fréquente</td></tr>\n<tr><td>Minéralisation</td><td>souvent forte (dureté, fer, manganèse)</td><td>plus faible</td></tr>\n<tr><td>Polluants dissous</td><td>nitrates, pesticides selon le bassin agricole</td><td>pesticides, micropolluants, algues</td></tr>\n<tr><td>Traitement</td><td>souvent simple : désinfection, parfois déferrisation ou dénitratation</td><td>filière complète de clarification et d'affinage</td></tr>\n</tbody>\n</table>\n<p>La ressource est protégée par des <strong>périmètres de protection de captage</strong> (immédiat, rapproché, éloigné), fixés par arrêté préfectoral, qui limitent les activités autour du point de prélèvement.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une usine traitant une eau de rivière, l'opérateur consulte chaque matin la turbidité et la température de l'eau brute, ainsi que les prévisions météorologiques. Un épisode orageux annoncé conduit à préparer une hausse du taux de coagulant et à vérifier les stocks de réactifs.</div>"
      },
      {
       "titre": "Les exigences de qualité",
       "contenu": "\n<p>La qualité des EDCH est encadrée en France par le <strong>Code de la santé publique</strong> et ses arrêtés d'application, qui transposent la directive européenne relative à la qualité des eaux destinées à la consommation humaine. On distingue :</p>\n<ul>\n<li>les <strong>limites de qualité</strong>, valeurs impératives liées à un risque pour la santé ; leur dépassement impose des mesures correctives et l'information de l'autorité sanitaire (l'Agence régionale de santé, ARS) ;</li>\n<li>les <strong>références de qualité</strong>, valeurs indicatrices du bon fonctionnement des installations et du confort de l'usager (goût, couleur, entartrage) ; leur dépassement déclenche une recherche de cause.</li>\n</ul>\n<table>\n<thead><tr><th>Famille</th><th>Exemples de paramètres</th><th>Ordre de grandeur réglementaire</th></tr></thead>\n<tbody>\n<tr><td>Microbiologiques</td><td>Escherichia coli, entérocoques</td><td>0 par 100 mL (limite)</td></tr>\n<tr><td>Chimiques</td><td>nitrates</td><td>50 mg/L (limite)</td></tr>\n<tr><td>Chimiques</td><td>pesticides</td><td>0,1 µg/L par substance, 0,5 µg/L au total (limites)</td></tr>\n<tr><td>Indicateurs</td><td>pH</td><td>entre 6,5 et 9 (référence)</td></tr>\n<tr><td>Indicateurs</td><td>turbidité</td><td>quelques dixièmes à 1 NFU en sortie d'usine selon les cas</td></tr>\n<tr><td>Indicateurs</td><td>conductivité, chlorures, sulfates, aluminium, fer</td><td>valeurs de référence fixées par arrêté</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les valeurs réglementaires évoluent (la directive européenne a été refondue en 2020 et ses textes de transposition ont ajouté de nouveaux paramètres). En production, on se réfère toujours aux valeurs figurant dans l'arrêté préfectoral d'autorisation de l'usine et dans les consignes en vigueur, jamais à un chiffre retenu de mémoire.</div>\n<p>Le contrôle sanitaire est réalisé par l'ARS ; l'exploitant pratique en plus une <strong>autosurveillance</strong> avec des analyseurs en ligne (turbidité, chlore, pH) et des analyses de laboratoire.</p>"
      },
      {
       "titre": "La clarification : coagulation, floculation, décantation",
       "contenu": "\n<p>Les particules responsables de la turbidité (argiles, matière organique colloïdale, micro-organismes) sont trop fines pour se déposer seules : elles portent des charges électriques de même signe qui les font se repousser. La <strong>clarification</strong> les rassemble pour pouvoir les séparer.</p>\n<ol>\n<li><strong>Coagulation</strong> : on injecte un <strong>coagulant</strong>, généralement un sel de fer ou d'aluminium (chlorure ferrique, sulfate d'aluminium, polychlorure d'aluminium), avec une agitation rapide de quelques dizaines de secondes à quelques minutes. Les charges sont neutralisées et des micro-flocs se forment.</li>\n<li><strong>Floculation</strong> : sous agitation lente, les micro-flocs s'agglomèrent en <strong>flocs</strong> visibles ; on ajoute souvent un <strong>floculant</strong> (polymère) pour les rendre plus gros et plus solides.</li>\n<li><strong>Décantation</strong> : dans un décanteur, l'eau circule lentement et les flocs se déposent au fond sous forme de <strong>boues</strong>, extraites périodiquement. Les décanteurs lamellaires, garnis de plaques inclinées, augmentent la surface de dépôt dans un volume réduit. La <strong>flottation</strong> est une alternative pour les eaux riches en algues : de fines bulles d'air font remonter les flocs en surface.</li>\n</ol>\n<p>La coagulation dépend fortement du <strong>pH</strong> : chaque coagulant a une plage de pH optimale. On ajuste donc le pH par ajout d'acide, de chaux ou de soude.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déterminer le taux de coagulant par essai en bécher (jar-test).<br>1. Remplir six béchers d'un litre avec l'eau brute du jour.<br>2. Ajouter des doses croissantes de coagulant (par exemple 10, 20, 30, 40, 50, 60 mg/L) en agitation rapide pendant 2 minutes.<br>3. Passer en agitation lente 15 à 20 minutes, puis laisser décanter 20 à 30 minutes.<br>4. Mesurer la turbidité et le pH de l'eau surnageante de chaque bécher.<br>5. Retenir la dose la plus faible qui donne une turbidité satisfaisante, puis la convertir en débit de pompe doseuse : débit de coagulant (L/h) = taux (g/m³) × débit d'eau (m³/h) / concentration du réactif (g/L).</div>"
      },
      {
       "titre": "La filtration et l'affinage",
       "contenu": "\n<p>Après décantation, l'eau contient encore des flocs fins. Elle passe dans des <strong>filtres à sable</strong> : des bassins remplis d'une couche de sable calibré d'environ un mètre, parfois surmontée d'anthracite (filtre bicouche). L'eau traverse le lit de haut en bas ; les particules restent piégées dans les grains. La turbidité en sortie de filtre est l'indicateur clé de la clarification.</p>\n<p>Au fil des heures, le filtre s'encrasse : sa <strong>perte de charge</strong> augmente et la turbidité filtrée finit par remonter. On réalise alors un <strong>lavage à contre-courant</strong> : injection d'air puis d'eau de bas en haut pour décoller les impuretés, évacuées vers le traitement des eaux sales. La durée d'un cycle de filtration va de quelques heures à quelques jours.</p>\n<p>L'<strong>affinage</strong> élimine les composés dissous que la clarification ne retient pas :</p>\n<ul>\n<li>l'<strong>ozonation</strong> oxyde les matières organiques, les goûts, les odeurs et certains micropolluants, et désinfecte ;</li>\n<li>le <strong>charbon actif</strong>, en grains (filtres) ou en poudre (injecté), adsorbe les pesticides et les composés organiques ;</li>\n<li>les <strong>membranes</strong> (ultrafiltration, nanofiltration, osmose inverse) retiennent particules, micro-organismes ou ions selon leur finesse.</li>\n</ul>\n<p>Certaines eaux souterraines demandent des traitements spécifiques : <strong>déferrisation</strong> et <strong>démanganisation</strong> par oxydation puis filtration, <strong>décarbonatation</strong> pour réduire la dureté, <strong>reminéralisation</strong> pour une eau trop agressive.</p>"
      },
      {
       "titre": "La désinfection et la mise en distribution",
       "contenu": "\n<p>La <strong>désinfection</strong> détruit ou inactive les micro-organismes pathogènes. Les principaux procédés sont :</p>\n<table>\n<thead><tr><th>Procédé</th><th>Principe</th><th>Effet rémanent dans le réseau</th></tr></thead>\n<tbody>\n<tr><td>Chlore gazeux ou eau de Javel</td><td>oxydation par l'acide hypochloreux</td><td>oui</td></tr>\n<tr><td>Dioxyde de chlore</td><td>oxydant puissant fabriqué sur site</td><td>oui</td></tr>\n<tr><td>Ozone</td><td>oxydant très puissant</td><td>non (se décompose rapidement)</td></tr>\n<tr><td>Rayonnement ultraviolet</td><td>altération de l'ADN des micro-organismes</td><td>non</td></tr>\n</tbody>\n</table>\n<p>L'efficacité d'une désinfection chimique dépend du produit <strong>C × t</strong> : concentration de désinfectant multipliée par le temps de contact. C'est pourquoi l'eau séjourne dans une bâche de contact avant d'être distribuée. Le chlore étant plus efficace à pH proche de la neutralité, le pH est réglé avant la chloration.</p>\n<p>On maintient en sortie d'usine un <strong>chlore résiduel libre</strong> de quelques dixièmes de mg/L pour protéger l'eau dans le réseau. L'eau est ensuite stockée dans des réservoirs ou des châteaux d'eau qui assurent la pression et une réserve en cas d'incident.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le chlore gazeux est très toxique ; son local fait l'objet de consignes strictes (détecteur, ventilation, appareil respiratoire à proximité). L'eau de Javel ne doit jamais être mélangée à un acide : le mélange dégage du chlore gazeux.</div>"
      },
      {
       "titre": "Conduire une usine de potabilisation",
       "contenu": "\n<p>La conduite consiste à adapter en permanence les traitements à la qualité de l'eau brute et au débit demandé par le réseau. Le pilote suit sur la <strong>supervision</strong> les grandeurs principales : débit produit, niveau des réservoirs, turbidité aux différentes étapes, pH, chlore résiduel, perte de charge des filtres.</p>\n<table>\n<thead><tr><th>Observation</th><th>Cause probable</th><th>Action de conduite</th></tr></thead>\n<tbody>\n<tr><td>Turbidité d'eau brute qui triple après un orage</td><td>crue, apport d'argiles</td><td>jar-test, hausse du taux de coagulant, surveillance renforcée de l'eau décantée</td></tr>\n<tr><td>Turbidité d'eau filtrée en hausse sur un seul filtre</td><td>filtre colmaté ou en fin de cycle</td><td>lancer le lavage de ce filtre</td></tr>\n<tr><td>Chlore résiduel en baisse</td><td>demande en chlore accrue ou pompe doseuse défaillante</td><td>vérifier la pompe et le stock, ajuster le taux</td></tr>\n<tr><td>pH d'eau décantée hors plage</td><td>dérive de dosage de chaux ou d'acide</td><td>contrôler l'injection et l'étalonnage du pH-mètre</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une filière de potabilisation est une suite de barrières : chaque étape réduit le risque et protège la suivante. Si une barrière faiblit, les suivantes sont surchargées. Le pilote surveille donc chaque étape, et pas seulement l'eau en sortie d'usine.</div>\n<p>Les <strong>boues</strong> et les <strong>eaux de lavage</strong> produites par l'usine sont des sous-produits à traiter : épaississement, déshydratation, recyclage des eaux en tête de filière ou rejet dans le respect de l'autorisation.</p>"
      }
     ],
     "points_cles": [
      "Les eaux superficielles sont variables et chargées en particules et micro-organismes ; les eaux souterraines sont plus stables mais souvent plus minéralisées.",
      "Les limites de qualité sont impératives ; les références de qualité signalent un défaut de fonctionnement.",
      "La coagulation neutralise les charges des particules, la floculation forme des flocs, la décantation les sépare.",
      "Le taux de coagulant se détermine par un essai en bécher (jar-test) et dépend du pH.",
      "Les filtres à sable sont lavés à contre-courant quand leur perte de charge ou la turbidité filtrée augmente.",
      "L'affinage (ozone, charbon actif, membranes) élimine les composés dissous.",
      "La désinfection dépend du produit concentration × temps de contact ; un chlore résiduel protège le réseau.",
      "Les valeurs réglementaires de référence sont celles de l'autorisation de l'usine et des textes en vigueur."
     ],
     "lexique": [
      {
       "terme": "Eau brute",
       "def": "Eau prélevée dans la ressource avant tout traitement."
      },
      {
       "terme": "EDCH",
       "def": "Eau destinée à la consommation humaine, soumise aux exigences du Code de la santé publique."
      },
      {
       "terme": "Coagulant",
       "def": "Réactif, souvent un sel de fer ou d'aluminium, qui neutralise les charges des particules en suspension."
      },
      {
       "terme": "Floculant",
       "def": "Polymère ajouté pour agglomérer les micro-flocs en flocs plus gros et plus résistants."
      },
      {
       "terme": "Jar-test",
       "def": "Essai en béchers permettant de déterminer la dose optimale de réactif de clarification."
      },
      {
       "terme": "Lavage à contre-courant",
       "def": "Nettoyage d'un filtre par injection d'air et d'eau de bas en haut."
      },
      {
       "terme": "Affinage",
       "def": "Ensemble des traitements qui éliminent les composés dissous après la clarification."
      },
      {
       "terme": "Chlore résiduel libre",
       "def": "Chlore actif restant dans l'eau après désinfection, qui protège l'eau dans le réseau."
      },
      {
       "terme": "Turbidité",
       "def": "Trouble d'une eau dû aux particules en suspension, exprimé en NFU."
      },
      {
       "terme": "Périmètre de protection",
       "def": "Zone réglementée autour d'un captage pour en préserver la qualité."
      }
     ]
    },
    {
     "id": "bpce-eaux-usees",
     "titre": "Traiter les eaux usées et les effluents industriels",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Caractériser une eau usée par ses paramètres de pollution (MES, DCO, DBO5, azote, phosphore).",
      "Décrire la chaîne de traitement d'une station d'épuration à boues activées.",
      "Expliquer le rôle de l'aération, de la clarification et de la recirculation des boues.",
      "Citer les traitements propres aux effluents industriels : neutralisation, précipitation, prétraitement.",
      "Suivre les indicateurs de fonctionnement d'un bassin biologique et réagir à une dérive."
     ],
     "sections": [
      {
       "titre": "La pollution des eaux usées",
       "contenu": "\n<p>Les <strong>eaux usées</strong> regroupent les eaux domestiques (toilettes, cuisine, lavage), les eaux industrielles et, dans les réseaux unitaires, les eaux de pluie. Elles sont collectées par le réseau d'assainissement et traitées dans une <strong>station de traitement des eaux usées</strong> (STEU), appelée couramment station d'épuration, avant d'être rejetées dans le milieu naturel.</p>\n<p>La pollution se mesure par des paramètres globaux, définis dans le cours sur les grandeurs du procédé, et suivis à l'entrée et à la sortie de la station :</p>\n<table>\n<thead><tr><th>Paramètre</th><th>Ce qu'il représente</th><th>Ordre de grandeur en entrée d'une station urbaine</th></tr></thead>\n<tbody>\n<tr><td>MES</td><td>pollution particulaire</td><td>quelques centaines de mg/L</td></tr>\n<tr><td>DCO</td><td>pollution organique totale oxydable chimiquement</td><td>500 à 1 000 mg O<sub>2</sub>/L</td></tr>\n<tr><td>DBO<sub>5</sub></td><td>pollution organique biodégradable</td><td>200 à 400 mg O<sub>2</sub>/L</td></tr>\n<tr><td>NTK (azote Kjeldahl)</td><td>azote organique et ammoniacal</td><td>50 à 80 mg N/L</td></tr>\n<tr><td>Pt (phosphore total)</td><td>phosphates et phosphore organique</td><td>quelques mg P/L à une dizaine</td></tr>\n</tbody>\n</table>\n<p>Le rapport <strong>DCO / DBO<sub>5</sub></strong> renseigne sur la biodégradabilité : voisin de 2 à 2,5 pour une eau domestique, facilement traitable biologiquement ; nettement plus élevé pour un effluent industriel chargé de composés peu biodégradables, qui demandera un traitement physico-chimique complémentaire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'azote et le phosphore provoquent l'<strong>eutrophisation</strong> des rivières et des lacs : prolifération d'algues, puis manque d'oxygène et mortalité des poissons. Les stations situées en zone sensible doivent donc les éliminer en plus de la pollution carbonée.</div>"
      },
      {
       "titre": "Les prétraitements et le traitement primaire",
       "contenu": "\n<p>À l'arrivée, l'eau traverse des étapes mécaniques qui protègent les équipements situés en aval :</p>\n<ol>\n<li><strong>Dégrillage</strong> : des grilles à barreaux, de plus en plus fines, retiennent les gros déchets (lingettes, plastiques, branches). Un râteau automatique les extrait vers une benne.</li>\n<li><strong>Dessablage</strong> : l'eau est ralentie pour que le sable et les graviers se déposent ; ils useraient les pompes et encombreraient les bassins.</li>\n<li><strong>Dégraissage-déshuilage</strong> : une insufflation d'air fait remonter graisses et huiles, raclées en surface.</li>\n</ol>\n<p>Certaines stations comportent ensuite une <strong>décantation primaire</strong> qui retient une partie des MES et de la DBO<sub>5</sub> sous forme de boues primaires. D'autres, notamment les petites et moyennes stations, envoient directement l'eau prétraitée vers le traitement biologique.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les lingettes jetées dans les toilettes sont devenues l'une des premières causes de pannes des postes de relevage et des dégrilleurs. Les agents d'exploitation passent un temps important à débourrer les pompes, après consignation électrique de l'équipement.</div>"
      },
      {
       "titre": "Le traitement biologique par boues activées",
       "contenu": "\n<p>Le procédé le plus répandu est celui des <strong>boues activées</strong>. Dans un <strong>bassin d'aération</strong>, une population de bactéries et de micro-organismes, appelée <strong>biomasse</strong>, consomme la pollution organique dissoute en utilisant l'oxygène apporté par des aérateurs (surpresseurs et diffuseurs de fines bulles, ou turbines de surface). Les bactéries se multiplient et s'agglomèrent en flocs.</p>\n<p>Le mélange eau-boues passe ensuite dans un <strong>clarificateur</strong> (décanteur secondaire) : les flocs biologiques se déposent, l'eau traitée surverse vers le rejet. Une partie des boues décantées est <strong>recirculée</strong> vers le bassin d'aération pour y maintenir une concentration de biomasse suffisante ; l'excédent, appelé <strong>boues en excès</strong>, est extrait vers la filière boues.</p>\n<p>Les grandeurs de conduite d'un bassin à boues activées sont :</p>\n<table>\n<thead><tr><th>Grandeur</th><th>Rôle</th><th>Ordre de grandeur</th></tr></thead>\n<tbody>\n<tr><td>Oxygène dissous</td><td>assurer la respiration de la biomasse sans gaspiller d'énergie</td><td>1,5 à 2 mg/L en aération</td></tr>\n<tr><td>Concentration en MES du bassin</td><td>quantité de biomasse</td><td>3 à 5 g/L</td></tr>\n<tr><td>Indice de boues (IB)</td><td>aptitude des boues à décanter</td><td>bonne décantation si inférieur à environ 150 mL/g</td></tr>\n<tr><td>Âge des boues</td><td>temps moyen de séjour de la biomasse dans le système</td><td>de quelques jours à plus de dix jours pour nitrifier</td></tr>\n</tbody>\n</table>\n<p>L'élimination de l'azote se fait en deux temps : la <strong>nitrification</strong> transforme l'ammonium en nitrates en présence d'oxygène, puis la <strong>dénitrification</strong> transforme les nitrates en azote gazeux en absence d'oxygène. On alterne donc des phases ou des zones aérées et non aérées. Le phosphore est éliminé par voie biologique ou par précipitation avec un sel de fer.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'indice de boues.<br>1. Laisser décanter un litre de liqueur du bassin dans une éprouvette pendant 30 minutes et lire le volume de boues déposées, par exemple 300 mL/L.<br>2. Mesurer la concentration en MES de la liqueur, par exemple 3,5 g/L.<br>3. Calculer : IB = volume décanté / MES = 300 / 3,5 ≈ 86 mL/g.<br>4. Interpréter : la valeur est inférieure à 150 mL/g, les boues décantent bien. Une valeur qui dérive vers 200 ou 300 mL/g fait craindre un foisonnement (bactéries filamenteuses) et un départ de boues avec l'eau traitée.</div>"
      },
      {
       "titre": "Les autres procédés et la filière boues",
       "contenu": "\n<p>D'autres procédés biologiques complètent ou remplacent les boues activées : <strong>bioréacteurs à membranes</strong> (BRM), où la clarification est remplacée par une ultrafiltration qui donne une eau sans MES ; <strong>biofiltres</strong>, où la biomasse est fixée sur un support ; <strong>lagunage</strong> et <strong>filtres plantés de roseaux</strong> pour les petites collectivités.</p>\n<p>Les boues extraites contiennent plus de 99 % d'eau. La <strong>filière boues</strong> réduit leur volume et les stabilise :</p>\n<ul>\n<li><strong>épaississement</strong> par gravité, flottation ou égouttage ;</li>\n<li><strong>conditionnement</strong> par un polymère pour faciliter la séparation eau-solide ;</li>\n<li><strong>déshydratation</strong> mécanique par centrifugeuse, filtre à bandes ou filtre-presse, jusqu'à une siccité de 20 à 30 % environ, davantage avec un filtre-presse ;</li>\n<li><strong>stabilisation</strong> par digestion anaérobie (production de biogaz valorisable), chaulage ou compostage ;</li>\n<li><strong>valorisation</strong> par épandage agricole encadré, compostage, méthanisation ou incinération.</li>\n</ul>\n<p>Le biogaz de digestion contient principalement du méthane, gaz inflammable, et du sulfure d'hydrogène, gaz toxique : les digesteurs et gazomètres sont des zones à risque d'explosion et d'intoxication.</p>"
      },
      {
       "titre": "Les effluents industriels",
       "contenu": "\n<p>Une usine chimique, une papeterie ou une industrie de surface produit des effluents dont la composition dépend de ses procédés. Elle doit soit les traiter entièrement dans sa propre station avant rejet au milieu naturel, soit les <strong>prétraiter</strong> avant de les envoyer au réseau public, dans le cadre d'une <strong>convention de rejet</strong> ou d'une autorisation de déversement passée avec la collectivité.</p>\n<table>\n<thead><tr><th>Pollution</th><th>Traitement type</th></tr></thead>\n<tbody>\n<tr><td>Acidité ou basicité</td><td>neutralisation par soude, chaux, acide sulfurique ou CO<sub>2</sub>, sous régulation de pH</td></tr>\n<tr><td>Métaux dissous (zinc, nickel, chrome, cuivre)</td><td>précipitation sous forme d'hydroxydes par élévation du pH, puis décantation et filtration</td></tr>\n<tr><td>Chrome hexavalent, cyanures</td><td>réduction ou oxydation préalable spécifique avant précipitation</td></tr>\n<tr><td>Hydrocarbures, graisses</td><td>séparateur à hydrocarbures, flottation</td></tr>\n<tr><td>Fibres et charges (papeterie)</td><td>récupération par flottation ou filtre à disques, recyclage dans le procédé</td></tr>\n<tr><td>Pollution organique concentrée</td><td>traitement biologique, éventuellement anaérobie</td></tr>\n</tbody>\n</table>\n<p>Les débits et les charges industrielles varient fortement selon les fabrications et les nettoyages. Un <strong>bassin tampon</strong> d'homogénéisation lisse ces variations avant le traitement.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un déversement accidentel de produit concentré (solvant, biocide, acide) dans le réseau de l'usine peut détruire la biomasse de la station biologique en quelques heures. Tout incident de fuite ou de lavage inhabituel doit être signalé immédiatement à l'exploitant de la station, qui peut isoler l'effluent dans un bassin de confinement.</div>"
      },
      {
       "titre": "Normes de rejet et autosurveillance",
       "contenu": "\n<p>Les niveaux de rejet d'une station urbaine sont fixés par la réglementation nationale issue de la directive européenne relative au traitement des eaux urbaines résiduaires, et par l'<strong>arrêté préfectoral</strong> propre à la station, qui peut être plus exigeant selon la sensibilité du milieu. Pour les installations industrielles, les valeurs limites figurent dans l'arrêté d'autorisation au titre des installations classées pour la protection de l'environnement (ICPE).</p>\n<p>Ces valeurs s'expriment de deux façons : en <strong>concentration maximale</strong> (mg/L) et en <strong>rendement minimal</strong> d'élimination (%). Les ordres de grandeur couramment exigés pour une station urbaine sont, par exemple, 25 mg/L de DBO<sub>5</sub>, 125 mg/L de DCO et 35 mg/L de MES, avec des exigences supplémentaires en azote et en phosphore en zone sensible.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer un rendement d'élimination. Entrée : DBO<sub>5</sub> = 300 mg/L ; sortie : 12 mg/L.<br>1. Écrire : rendement = (C<sub>entrée</sub> − C<sub>sortie</sub>) / C<sub>entrée</sub>.<br>2. Calculer : (300 − 12) / 300 = 0,96, soit 96 %.<br>3. Calculer le flux rejeté si le débit est de 4 000 m³/j : 12 g/m³ × 4 000 m³/j = 48 kg de DBO<sub>5</sub> par jour.<br>4. Comparer concentration, rendement et flux aux valeurs de l'arrêté : les trois doivent être respectés.</div>\n<p>L'exploitant réalise l'<strong>autosurveillance</strong> : prélèvements automatiques asservis au débit sur 24 heures, analyses, tenue d'un registre et transmission des résultats aux services de l'État. Les préleveurs et débitmètres font l'objet de vérifications régulières.</p>"
      }
     ],
     "points_cles": [
      "MES, DCO, DBO5, azote et phosphore caractérisent la pollution d'une eau usée ; le rapport DCO/DBO5 indique sa biodégradabilité.",
      "Dégrillage, dessablage et dégraissage protègent les équipements en aval.",
      "Dans les boues activées, la biomasse consomme la pollution grâce à l'oxygène apporté par l'aération.",
      "Le clarificateur sépare l'eau traitée des boues ; une partie des boues est recirculée, l'excédent est extrait.",
      "Oxygène dissous, concentration en boues et indice de boues sont les grandeurs clés de conduite du bassin.",
      "La nitrification exige de l'oxygène, la dénitrification son absence.",
      "Les effluents industriels sont prétraités selon leur nature : neutralisation, précipitation des métaux, séparation des hydrocarbures.",
      "Les rejets sont contrôlés en concentration, en rendement et en flux par l'autosurveillance."
     ],
     "lexique": [
      {
       "terme": "STEU",
       "def": "Station de traitement des eaux usées, couramment appelée station d'épuration."
      },
      {
       "terme": "Boues activées",
       "def": "Procédé biologique où une biomasse en suspension, aérée, dégrade la pollution organique."
      },
      {
       "terme": "Biomasse",
       "def": "Ensemble des micro-organismes qui assurent l'épuration biologique."
      },
      {
       "terme": "Clarificateur",
       "def": "Décanteur placé après le bassin biologique pour séparer l'eau traitée des boues."
      },
      {
       "terme": "Indice de boues",
       "def": "Volume occupé par un gramme de boues après 30 minutes de décantation, en mL/g."
      },
      {
       "terme": "Nitrification",
       "def": "Transformation biologique de l'ammonium en nitrates en présence d'oxygène."
      },
      {
       "terme": "Dénitrification",
       "def": "Transformation biologique des nitrates en azote gazeux en absence d'oxygène."
      },
      {
       "terme": "Eutrophisation",
       "def": "Enrichissement excessif d'un milieu aquatique en azote et phosphore, provoquant la prolifération d'algues."
      },
      {
       "terme": "Convention de rejet",
       "def": "Document qui fixe les conditions dans lesquelles une entreprise peut rejeter ses effluents au réseau public."
      },
      {
       "terme": "Autosurveillance",
       "def": "Surveillance des rejets réalisée par l'exploitant lui-même et transmise à l'administration."
      }
     ]
    },
    {
     "id": "bpce-papiers-cartons",
     "titre": "Fabriquer des papiers et des cartons",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Décrire la structure d'une fibre cellulosique et les différentes origines des pâtes.",
      "Expliquer les étapes de préparation de la pâte : désintégration, épuration, raffinage, ajout des produits.",
      "Décrire les sections d'une machine à papier et l'évolution de la siccité de la feuille.",
      "Citer les principales caractéristiques d'un papier ou d'un carton et leurs méthodes de contrôle.",
      "Relier un défaut de la feuille à une cause probable dans le procédé."
     ],
     "sections": [
      {
       "titre": "La fibre et les pâtes à papier",
       "contenu": "\n<p>Le papier est une <strong>feuille de fibres cellulosiques</strong> enchevêtrées et liées entre elles. La <strong>cellulose</strong> est un polymère naturel présent dans les végétaux. Dans le bois, les fibres de cellulose sont collées par la <strong>lignine</strong>, une substance qui donne de la rigidité à l'arbre mais qui jaunit à la lumière. Les fibres de résineux (pin, épicéa) sont longues, de 3 à 4 mm, et donnent de la résistance ; celles de feuillus (eucalyptus, bouleau) sont courtes, autour de 1 mm, et donnent une surface fine et opaque.</p>\n<table>\n<thead><tr><th>Type de pâte</th><th>Procédé</th><th>Rendement en fibres</th><th>Propriétés et usages</th></tr></thead>\n<tbody>\n<tr><td>Pâte mécanique</td><td>défibrage du bois par meule ou raffineur, parfois avec chauffage (pâte thermomécanique)</td><td>élevé, plus de 90 %</td><td>opaque, peu chère, jaunit : papier journal, magazines</td></tr>\n<tr><td>Pâte chimique (kraft)</td><td>cuisson des copeaux dans une liqueur de soude et de sulfure de sodium qui dissout la lignine</td><td>environ 45 à 55 %</td><td>résistante, blanchissable : papiers d'impression, emballages kraft</td></tr>\n<tr><td>Pâte de fibres recyclées</td><td>désintégration de papiers et cartons récupérés, épuration, parfois désencrage</td><td>variable selon les pertes</td><td>cartons ondulés, papiers d'hygiène, journal</td></tr>\n</tbody>\n</table>\n<p>En France, les fibres recyclées représentent la majorité des fibres consommées par l'industrie papetière, surtout pour les papiers et cartons d'emballage. Une fibre peut être recyclée plusieurs fois, mais elle se raccourcit et perd de sa capacité de liaison à chaque cycle : un apport de fibres vierges reste nécessaire.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les fibres se lient entre elles par des <strong>liaisons hydrogène</strong> qui se forment lorsque l'eau s'évapore au séchage. C'est ce qui donne sa cohésion au papier sans aucune colle, et c'est aussi pourquoi un papier mouillé perd sa résistance.</div>"
      },
      {
       "titre": "La préparation de la pâte",
       "contenu": "\n<p>La <strong>préparation de pâte</strong> transforme la matière fibreuse en une suspension homogène, propre et aux propriétés réglées, prête à alimenter la machine.</p>\n<ol>\n<li><strong>Désintégration</strong> : dans un <strong>pulpeur</strong>, grande cuve munie d'un rotor, les balles de pâte ou les vieux papiers sont mis en suspension dans l'eau à une consistance de 4 à 15 % selon le type de pulpeur.</li>\n<li><strong>Épuration</strong> : on élimine les contaminants. Les <strong>classeurs</strong> à paniers perforés ou à fentes retiennent les éléments plus gros que les fibres (plastiques, colles, bûchettes) ; les <strong>épurateurs centrifuges</strong> (hydrocyclones) séparent les particules lourdes (sable, agrafes) ou légères. Pour les vieux papiers, un <strong>désencrage</strong> par flottation retire les encres si le produit fini doit être blanc.</li>\n<li><strong>Raffinage</strong> : la pâte passe entre des disques garnis de lames qui frottent les fibres. Le raffinage les rend plus souples et développe leur surface (<strong>fibrillation</strong>), ce qui augmente les liaisons et la résistance ; mais il ralentit l'égouttage sur la machine. Le degré de raffinage se mesure en <strong>degrés Schopper-Riegler</strong> (°SR) : plus la valeur est élevée, plus la pâte retient l'eau.</li>\n<li><strong>Ajout des produits</strong> : charges minérales (carbonate de calcium, kaolin) pour l'opacité et l'imprimabilité ; agents de <strong>collage</strong> pour limiter la pénétration de l'eau et de l'encre ; amidon pour la résistance ; agents de <strong>rétention</strong> pour garder fines et charges dans la feuille ; colorants, azurants, biocides, antimousses.</li>\n<li><strong>Mélange et dilution</strong> : les pâtes sont dosées en proportions précises dans un cuvier de mélange, puis la pompe de mélange les dilue avec l'eau blanche récupérée sous la toile, jusqu'à une consistance inférieure à 1 % en caisse de tête.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une machine à carton recyclé, l'opérateur de préparation de pâte surveille l'intensité absorbée par les raffineurs, la pression différentielle des classeurs et les rejets des épurateurs. Une hausse de la pression différentielle d'un classeur annonce un colmatage du panier.</div>"
      },
      {
       "titre": "La machine à papier : formation de la feuille",
       "contenu": "\n<p>La <strong>machine à papier</strong> est une installation continue qui peut dépasser cent mètres de long et produire à des vitesses de plusieurs centaines à plus de 1 500 m/min selon les sortes. Elle comprend successivement :</p>\n<ul>\n<li>la <strong>caisse de tête</strong>, qui répartit la suspension diluée en un jet uniforme sur toute la largeur de la machine, à travers une fente réglable appelée lèvre ;</li>\n<li>la <strong>partie humide</strong> ou table de fabrication, où le jet se dépose sur une <strong>toile</strong> sans fin en matière synthétique ; l'eau s'égoutte par gravité, puis par des éléments d'égouttage et des caisses aspirantes. La feuille se forme ; sa siccité passe d'environ 1 % à 20 % ;</li>\n<li>la <strong>section des presses</strong>, où la feuille est pressée entre des rouleaux et des feutres absorbants ; elle atteint environ 40 à 50 % de siccité ;</li>\n<li>la <strong>sécherie</strong>, une succession de cylindres sécheurs chauffés intérieurement à la vapeur, autour desquels la feuille passe ; elle sort à environ 92 à 95 % de siccité ;</li>\n<li>éventuellement une <strong>presse encolleuse</strong> ou une <strong>coucheuse</strong> qui dépose un amidon ou une sauce de couchage en surface, suivie d'une après-sécherie ;</li>\n<li>la <strong>calandre</strong>, qui lisse la feuille entre des rouleaux et règle son épaisseur ;</li>\n<li>l'<strong>enrouleuse</strong>, qui forme la bobine mère, appelée tambour.</li>\n</ul>\n<p>Les cartons multicouches sont formés par plusieurs jets ou plusieurs tables superposés, avec des couches de compositions différentes : une couche de surface en fibres blanches, une couche intérieure en fibres recyclées.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer l'eau éliminée par chaque section. On fabrique 1 t de papier sec à 100 % (soit 1 t de matière sèche).<br>1. En caisse de tête à 0,8 % : masse de suspension = 1 / 0,008 = 125 t.<br>2. En fin de table à 20 % : 1 / 0,20 = 5 t ; la table a éliminé 120 t d'eau.<br>3. En sortie de presses à 45 % : 1 / 0,45 ≈ 2,22 t ; les presses ont éliminé environ 2,8 t d'eau.<br>4. En sortie de sécherie à 94 % : 1 / 0,94 ≈ 1,06 t ; la sécherie a évaporé environ 1,16 t d'eau.<br>5. Conclusion : la sécherie retire peu d'eau en masse, mais c'est l'étape la plus coûteuse, car il faut vaporiser l'eau. Chaque point de siccité gagné aux presses économise de la vapeur.</div>"
      },
      {
       "titre": "Les circuits d'eau et d'énergie",
       "contenu": "\n<p>Une papeterie consomme beaucoup d'eau et d'énergie ; leur gestion fait partie du métier de conducteur.</p>\n<p>L'eau égouttée sous la toile, chargée de fines et de charges, s'appelle l'<strong>eau blanche</strong>. Elle est recyclée en boucle courte pour diluer la pâte en tête de machine. Les excédents passent dans un <strong>récupérateur de fibres</strong> (filtre à disques, flottateur) avant de rejoindre les besoins de la préparation de pâte ou la station d'épuration. Plus les circuits sont fermés, plus la consommation d'eau baisse, mais plus les matières dissoutes et la température s'accumulent, ce qui favorise les dépôts et les développements bactériens.</p>\n<p>La sécherie consomme l'essentiel de l'énergie thermique, sous forme de vapeur produite par une chaudière ou une centrale de cogénération. La vapeur condense dans les cylindres et le <strong>condensat</strong> est évacué par des siphons, puis renvoyé à la chaudière. Une hotte fermée au-dessus de la sécherie capte l'air humide ; sa chaleur est récupérée par des échangeurs.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la machine à papier est l'un des postes les plus dangereux de l'industrie : rouleaux tournant à grande vitesse formant des <strong>zones de happement</strong>, surfaces chaudes, vapeur, bruit, chutes de bobines. Le passage de la feuille lors d'une casse (l'engagement de la « pointe ») se fait uniquement avec les dispositifs prévus, jamais à la main entre les rouleaux en mouvement.</div>"
      },
      {
       "titre": "Caractériser un papier ou un carton",
       "contenu": "\n<p>Les caractéristiques du produit sont mesurées au laboratoire sur des échantillons prélevés en bout de bobine, après conditionnement en atmosphère normalisée (23 °C et 50 % d'humidité relative), car le papier absorbe l'humidité de l'air et ses propriétés en dépendent.</p>\n<table>\n<thead><tr><th>Caractéristique</th><th>Définition</th><th>Unité</th></tr></thead>\n<tbody>\n<tr><td>Grammage</td><td>masse d'un mètre carré de papier</td><td>g/m²</td></tr>\n<tr><td>Épaisseur et main</td><td>épaisseur ; la main est le rapport épaisseur / grammage</td><td>µm ; cm³/g</td></tr>\n<tr><td>Humidité</td><td>teneur en eau de la feuille</td><td>%</td></tr>\n<tr><td>Résistance à la traction</td><td>force de rupture d'une bande de largeur donnée</td><td>kN/m</td></tr>\n<tr><td>Résistance à l'éclatement</td><td>pression qui fait éclater la feuille</td><td>kPa</td></tr>\n<tr><td>Résistance à la compression</td><td>essentielle pour les cartons d'emballage empilés</td><td>kN/m</td></tr>\n<tr><td>Absorption d'eau (Cobb)</td><td>masse d'eau absorbée par une surface donnée en un temps donné</td><td>g/m²</td></tr>\n<tr><td>Blancheur, opacité</td><td>propriétés optiques</td><td>%</td></tr>\n</tbody>\n</table>\n<p>On parle couramment de papier pour les grammages faibles et de carton au-delà d'environ 225 g/m². Le papier a un <strong>sens machine</strong> (sens de défilement) et un <strong>sens travers</strong> : les fibres s'orientent préférentiellement dans le sens machine, ce qui rend la feuille plus résistante en traction dans ce sens. Le <strong>profil travers</strong> (variation d'une grandeur sur la largeur de la feuille) est mesuré en continu par un <strong>scanner</strong> qui balaie la feuille avant l'enrouleuse.</p>"
      },
      {
       "titre": "Défauts de fabrication et conduite",
       "contenu": "\n<p>Le conducteur de machine agit sur de nombreux leviers : débit de pâte, ouverture de la lèvre, vitesse, vide des caisses aspirantes, charge des presses, pression vapeur de la sécherie, dosage des produits. Il s'appuie sur les mesures du scanner (grammage, humidité, épaisseur) et sur les contrôles du laboratoire.</p>\n<table>\n<thead><tr><th>Défaut constaté</th><th>Causes probables</th><th>Leviers d'action</th></tr></thead>\n<tbody>\n<tr><td>Grammage trop élevé</td><td>débit de pâte excessif, consistance en hausse, vitesse trop faible</td><td>réduire la vanne de grammage, vérifier la consistance</td></tr>\n<tr><td>Humidité trop forte en bout de machine</td><td>sécherie insuffisante, pressage dégradé, feutres colmatés</td><td>augmenter la pression vapeur, contrôler les feutres et le vide</td></tr>\n<tr><td>Profil d'humidité irrégulier sur la largeur</td><td>répartition non uniforme du jet ou de la vapeur</td><td>régler le profil de lèvre ou les éléments de profilage</td></tr>\n<tr><td>Trous, taches, points</td><td>dépôts décrochés, contaminants mal épurés, mousse</td><td>nettoyer, vérifier l'épuration et l'antimousse</td></tr>\n<tr><td>Casses répétées</td><td>feuille trop humide, tensions mal réglées, dépôts, pâte trop peu résistante</td><td>analyser l'historique, contrôler raffinage et tirages</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une casse de feuille coûte cher en production perdue, en rebuts (les <strong>cassés</strong>, recyclés dans la préparation de pâte) et en risques pour le personnel. La qualité de la conduite se mesure par le taux de marche de la machine et la régularité des caractéristiques.</div>"
      }
     ],
     "points_cles": [
      "Le papier est un réseau de fibres cellulosiques liées par des liaisons hydrogène formées au séchage.",
      "Les pâtes sont mécaniques, chimiques ou issues de fibres recyclées, avec des rendements et des propriétés différents.",
      "La préparation de pâte enchaîne désintégration, épuration, raffinage, ajout des produits et dilution.",
      "Le raffinage augmente la résistance mais ralentit l'égouttage ; il se suit en degrés Schopper-Riegler.",
      "La siccité passe d'environ 1 % en caisse de tête à 20 % en fin de table, 45 % après les presses et plus de 90 % après la sécherie.",
      "La sécherie élimine peu d'eau en masse mais consomme le plus d'énergie.",
      "Grammage, humidité, épaisseur, résistances mécaniques et absorption caractérisent le produit.",
      "La machine à papier présente des risques majeurs de happement : l'engagement de la feuille se fait uniquement avec les dispositifs prévus."
     ],
     "lexique": [
      {
       "terme": "Cellulose",
       "def": "Polymère naturel qui constitue les fibres des végétaux et la matière du papier."
      },
      {
       "terme": "Lignine",
       "def": "Substance qui lie les fibres dans le bois et jaunit à la lumière."
      },
      {
       "terme": "Pulpeur",
       "def": "Cuve à rotor qui met en suspension dans l'eau les balles de pâte ou les vieux papiers."
      },
      {
       "terme": "Raffinage",
       "def": "Traitement mécanique des fibres entre des disques garnis de lames pour développer leur capacité de liaison."
      },
      {
       "terme": "Caisse de tête",
       "def": "Organe qui répartit uniformément la suspension de pâte sur la largeur de la toile."
      },
      {
       "terme": "Eau blanche",
       "def": "Eau égouttée sous la toile, chargée de fines et de charges, recyclée pour diluer la pâte."
      },
      {
       "terme": "Grammage",
       "def": "Masse d'un mètre carré de papier ou de carton, en g/m²."
      },
      {
       "terme": "Sens machine",
       "def": "Direction de défilement de la feuille sur la machine, dans laquelle les fibres s'orientent préférentiellement."
      },
      {
       "terme": "Cassés",
       "def": "Papier rebuté au cours de la fabrication, recyclé dans la préparation de pâte."
      },
      {
       "terme": "Calandre",
       "def": "Ensemble de rouleaux qui lisse la feuille et règle son épaisseur."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Opérations unitaires du génie des procédés",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpce-transport-stockage",
     "titre": "Transporter et stocker les fluides et les solides",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Identifier les éléments d'un réseau de tuyauteries et leur rôle (vannes, clapets, filtres, purges).",
      "Expliquer l'origine des pertes de charge et leur effet sur l'installation.",
      "Choisir entre pompe centrifuge et pompe volumétrique selon le besoin.",
      "Lire une courbe caractéristique de pompe, déterminer un point de fonctionnement et vérifier le risque de cavitation.",
      "Décrire les équipements de stockage et de transport des solides et leurs dispositifs de sécurité."
     ],
     "sections": [
      {
       "titre": "Le réseau de tuyauteries",
       "contenu": "\n<p>Les fluides circulent entre les appareils dans des <strong>tuyauteries</strong> dont le diamètre est désigné par le <strong>DN</strong> (diamètre nominal, valeur de repérage voisine du diamètre intérieur en millimètres) et la tenue en pression par le <strong>PN</strong> (pression nominale, en bar). Le matériau dépend du fluide : acier au carbone pour la vapeur et l'eau industrielle, acier inoxydable pour les produits corrosifs ou alimentaires, PVC ou polyéthylène pour l'eau et de nombreux acides dilués, acier revêtu ou matériaux fluorés pour les produits très agressifs.</p>\n<p>Un réseau comporte de nombreux accessoires :</p>\n<table>\n<thead><tr><th>Accessoire</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Vanne d'isolement (à boisseau sphérique, à opercule, papillon)</td><td>ouvrir ou fermer complètement un passage</td></tr>\n<tr><td>Vanne de réglage (à soupape, à membrane, papillon motorisé)</td><td>moduler un débit ou une pression</td></tr>\n<tr><td>Clapet anti-retour</td><td>empêcher l'écoulement en sens inverse</td></tr>\n<tr><td>Filtre en Y, panier</td><td>protéger pompes et instruments des particules</td></tr>\n<tr><td>Purge, évent</td><td>vidanger un point bas, évacuer l'air d'un point haut</td></tr>\n<tr><td>Soupape ou disque de rupture</td><td>protéger un équipement contre la surpression</td></tr>\n<tr><td>Joint de dilatation, compensateur</td><td>absorber les dilatations thermiques et les vibrations</td></tr>\n</tbody>\n</table>\n<p>Les tuyauteries sont repérées par une <strong>couleur</strong> ou des bagues et des étiquettes qui indiquent la nature du fluide et son sens d'écoulement, selon la norme de repérage appliquée sur le site.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une vanne d'isolement n'est pas faite pour régler un débit. Utilisée en position partiellement ouverte, une vanne à boisseau ou à opercule s'use rapidement et ne garantit plus l'étanchéité lors d'une consignation.</div>"
      },
      {
       "titre": "Pression, hauteur et pertes de charge",
       "contenu": "\n<p>Quand un liquide s'écoule dans une conduite, il frotte sur les parois et se heurte aux accidents de parcours (coudes, vannes, rétrécissements) : il perd de l'énergie, ce qui se traduit par une baisse de pression appelée <strong>perte de charge</strong>. On distingue les <strong>pertes de charge linéaires</strong>, proportionnelles à la longueur de la conduite, et les <strong>pertes de charge singulières</strong>, dues aux accessoires.</p>\n<p>Les pertes de charge augmentent :</p>\n<ul>\n<li>approximativement comme le <strong>carré du débit</strong> en régime turbulent : doubler le débit multiplie les pertes de charge par environ quatre ;</li>\n<li>quand le <strong>diamètre diminue</strong> (fortement) ;</li>\n<li>avec la <strong>longueur</strong>, le nombre d'accessoires, la rugosité des parois et la viscosité du fluide.</li>\n</ul>\n<p>Dans les installations, on exprime souvent la pression en <strong>hauteur de liquide</strong> : H = p / (ρ × g). Pour l'eau, 1 bar correspond à environ 10,2 m de colonne d'eau. Cette notion permet d'additionner simplement les termes d'un circuit.</p>\n<p>La <strong>hauteur manométrique totale</strong> (HMT) que doit fournir une pompe se compose de :</p>\n<ul>\n<li>la <strong>hauteur géométrique</strong> : différence d'altitude entre la surface du liquide aspiré et le point de refoulement ;</li>\n<li>la <strong>différence de pression</strong> entre les deux réservoirs, convertie en hauteur ;</li>\n<li>les <strong>pertes de charge</strong> totales à l'aspiration et au refoulement.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une pression différentielle qui augmente aux bornes d'un filtre signale son encrassement. Sur de nombreux circuits, un indicateur de pression différentielle déclenche une alarme pour prévenir l'opérateur avant que le débit ne chute.</div>"
      },
      {
       "titre": "Pompes centrifuges et pompes volumétriques",
       "contenu": "\n<p>Les pompes communiquent de l'énergie au liquide. Deux familles se partagent l'essentiel des usages.</p>\n<p>Dans une <strong>pompe centrifuge</strong>, une <strong>roue</strong> à aubes tournant à grande vitesse projette le liquide vers la périphérie ; la <strong>volute</strong> transforme la vitesse en pression. Le débit dépend de la résistance du circuit : si l'on ferme la vanne de refoulement, le débit diminue et la pression monte jusqu'à une valeur maximale, sans risque d'éclatement à court terme (mais avec échauffement du liquide si la situation dure).</p>\n<p>Dans une <strong>pompe volumétrique</strong>, un volume de liquide est enfermé puis refoulé à chaque cycle : pompe à piston, à membrane, à engrenages, à lobes, à vis excentrée (dite à rotor hélicoïdal). Le débit est fixé par la vitesse et la cylindrée, presque indépendamment de la pression. Si le refoulement est fermé, la pression monte jusqu'à la rupture : une <strong>soupape de sécurité</strong> ou un by-pass est indispensable.</p>\n<table>\n<thead><tr><th>Critère</th><th>Pompe centrifuge</th><th>Pompe volumétrique</th></tr></thead>\n<tbody>\n<tr><td>Fluides adaptés</td><td>liquides peu visqueux, débits importants</td><td>liquides visqueux, boues, produits fragiles, dosage</td></tr>\n<tr><td>Réglage du débit</td><td>vanne au refoulement ou variateur de vitesse</td><td>variateur de vitesse ou réglage de course, jamais vanne au refoulement</td></tr>\n<tr><td>Démarrage</td><td>pompe amorcée, vanne de refoulement peu ouverte</td><td>refoulement ouvert</td></tr>\n<tr><td>Exemples</td><td>alimentation d'eau, circulation, transfert de solvants</td><td>pompe doseuse de réactif, pompe à boues, transfert de résine</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une pompe centrifuge ne doit jamais tourner à sec : la garniture mécanique, refroidie et lubrifiée par le liquide, serait détruite en quelques secondes. Avant le démarrage, on vérifie que la pompe est remplie de liquide (amorcée) et que la vanne d'aspiration est ouverte.</div>"
      },
      {
       "titre": "Courbes caractéristiques et point de fonctionnement",
       "contenu": "\n<p>Le constructeur fournit pour chaque pompe centrifuge des <strong>courbes caractéristiques</strong> tracées en fonction du débit : la hauteur H fournie (courbe décroissante), le rendement η (courbe en cloche passant par un maximum), la puissance absorbée et le <strong>NPSH requis</strong>.</p>\n<p>Le circuit a lui aussi sa courbe, appelée <strong>courbe de réseau</strong> : la hauteur nécessaire en fonction du débit (hauteur géométrique plus pertes de charge, donc courbe croissante). Le <strong>point de fonctionnement</strong> est l'intersection des deux courbes. Fermer partiellement une vanne de refoulement rend la courbe de réseau plus raide et déplace le point vers un débit plus faible ; réduire la vitesse de la pompe abaisse sa courbe.</p>\n<p>La <strong>puissance hydraulique</strong> transmise au liquide vaut P<sub>h</sub> = ρ × g × Q<sub>v</sub> × H, en watts (avec Q<sub>v</sub> en m³/s et H en m). La puissance absorbée sur l'arbre est P<sub>a</sub> = P<sub>h</sub> / η.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la puissance d'une pompe d'eau. Débit 36 m³/h, HMT 25 m, rendement 0,65.<br>1. Convertir le débit : 36 / 3 600 = 0,01 m³/s.<br>2. Puissance hydraulique : 1 000 × 9,81 × 0,01 × 25 ≈ 2 450 W.<br>3. Puissance absorbée : 2 450 / 0,65 ≈ 3 770 W, soit 3,8 kW.<br>4. Choix du moteur : on prend la puissance normalisée immédiatement supérieure avec une marge, par exemple 4 kW ou 5,5 kW selon les recommandations du constructeur.</div>\n<p>La <strong>cavitation</strong> se produit quand la pression à l'entrée de la roue descend sous la <strong>pression de vapeur saturante</strong> du liquide : des bulles de vapeur se forment puis implosent violemment, avec un bruit caractéristique de cailloux, des vibrations, une chute de débit et une érosion de la roue. Pour l'éviter, le <strong>NPSH disponible</strong> du circuit doit rester supérieur au NPSH requis par la pompe, avec une marge. Les causes typiques sont un filtre d'aspiration colmaté, un niveau trop bas dans la cuve d'aspiration, un liquide trop chaud ou une vanne d'aspiration mal ouverte.</p>"
      },
      {
       "titre": "Le transport des gaz et du vide",
       "contenu": "\n<p>Les gaz sont mis en mouvement par des machines dont le choix dépend du taux de compression recherché :</p>\n<ul>\n<li>les <strong>ventilateurs</strong> pour de grands débits sous faible pression (ventilation, hottes, aspiration de poussières) ;</li>\n<li>les <strong>surpresseurs</strong>, par exemple à lobes, pour des pressions modérées (aération des bassins de station d'épuration, transport pneumatique) ;</li>\n<li>les <strong>compresseurs</strong> à piston, à vis ou centrifuges pour l'air comprimé et les gaz de procédé ;</li>\n<li>les <strong>pompes à vide</strong> (à anneau liquide, à palettes, éjecteurs à vapeur) pour l'évaporation et la distillation sous pression réduite, la filtration sous vide ou les caisses aspirantes des machines à papier.</li>\n</ul>\n<p>Comprimer un gaz l'échauffe : les compresseurs sont refroidis et l'air comprimé passe dans un sécheur qui en retire l'humidité. Le <strong>réseau d'air comprimé</strong> alimente notamment les actionneurs pneumatiques des vannes de régulation ; une chute de pression d'air peut provoquer le passage des vannes en position de sécurité.</p>"
      },
      {
       "titre": "Stocker les liquides et transporter les solides",
       "contenu": "\n<p>Les liquides sont stockés dans des <strong>cuves</strong> ou des <strong>réservoirs</strong> équipés d'une mesure de niveau, d'alarmes de niveau haut et très haut, d'un évent ou d'une soupape de respiration, d'un trou d'homme et d'une vanne de fond. Les produits dangereux sont placés sur une <strong>rétention</strong> (bac ou cuvette étanche) dont la capacité réglementaire doit permettre de contenir une fuite. Les produits incompatibles (acides et bases, oxydants et combustibles) ont des rétentions séparées. Les liquides inflammables sont souvent stockés sous <strong>inertage</strong> à l'azote, qui remplace l'air au-dessus du liquide et empêche la formation d'une atmosphère explosive.</p>\n<p>Les solides (granulés, poudres, copeaux, balles de vieux papiers) sont stockés en <strong>silos</strong>, <strong>trémies</strong>, <strong>big-bags</strong> ou en vrac, et transportés par :</p>\n<table>\n<thead><tr><th>Équipement</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Convoyeur à bande</td><td>produits en vrac, balles, copeaux, sur de longues distances</td></tr>\n<tr><td>Vis d'Archimède (vis sans fin)</td><td>poudres et granulés, dosage</td></tr>\n<tr><td>Élévateur à godets</td><td>transport vertical de produits granuleux</td></tr>\n<tr><td>Transport pneumatique</td><td>poudres dans une conduite fermée, par de l'air en surpression ou en dépression</td></tr>\n<tr><td>Doseur pondéral</td><td>débit massique précis de solide vers un réacteur ou un mélangeur</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les poudres organiques ou métalliques fines en suspension dans l'air peuvent former une <strong>atmosphère explosive</strong>. Les silos, filtres à manches et transports pneumatiques font l'objet d'un zonage spécifique, de mises à la terre contre l'électricité statique et de dispositifs de protection (évents d'explosion, découplage). Un silo est aussi un espace confiné : on n'y pénètre jamais sans autorisation et procédure écrite.</div>"
      }
     ],
     "points_cles": [
      "DN et PN caractérisent une tuyauterie ; le matériau est choisi selon le fluide.",
      "Une vanne d'isolement ouvre ou ferme, une vanne de réglage module : on ne les interchange pas.",
      "Les pertes de charge croissent à peu près comme le carré du débit et augmentent fortement quand le diamètre diminue.",
      "La HMT d'une pompe additionne hauteur géométrique, différence de pression et pertes de charge.",
      "Une pompe centrifuge se règle par vanne au refoulement ou variation de vitesse ; une pompe volumétrique ne se règle jamais en fermant le refoulement.",
      "Le point de fonctionnement est l'intersection de la courbe de la pompe et de la courbe de réseau.",
      "La cavitation est évitée en maintenant le NPSH disponible supérieur au NPSH requis.",
      "Les stockages de produits dangereux sont sur rétention, séparés selon les incompatibilités ; les poudres présentent un risque d'explosion."
     ],
     "lexique": [
      {
       "terme": "DN",
       "def": "Diamètre nominal : valeur de désignation d'une tuyauterie, voisine de son diamètre intérieur en mm."
      },
      {
       "terme": "PN",
       "def": "Pression nominale : pression de référence pour laquelle un composant de tuyauterie est conçu, en bar."
      },
      {
       "terme": "Perte de charge",
       "def": "Baisse de pression d'un fluide due aux frottements et aux accidents de parcours."
      },
      {
       "terme": "HMT",
       "def": "Hauteur manométrique totale que la pompe doit fournir pour assurer le débit demandé."
      },
      {
       "terme": "Courbe de réseau",
       "def": "Hauteur nécessaire au circuit en fonction du débit."
      },
      {
       "terme": "Point de fonctionnement",
       "def": "Couple débit-hauteur à l'intersection des courbes de la pompe et du réseau."
      },
      {
       "terme": "Cavitation",
       "def": "Formation puis implosion de bulles de vapeur à l'entrée d'une pompe, destructrice pour la roue."
      },
      {
       "terme": "NPSH",
       "def": "Charge nette à l'aspiration : marge de pression au-dessus de la pression de vapeur du liquide."
      },
      {
       "terme": "Rétention",
       "def": "Capacité étanche placée sous un stockage pour recueillir une fuite."
      },
      {
       "terme": "Inertage",
       "def": "Remplacement de l'air par un gaz inerte, souvent l'azote, pour empêcher une atmosphère explosive."
      }
     ]
    },
    {
     "id": "bpce-echanges-thermiques",
     "titre": "Chauffer et refroidir : échanges thermiques et utilités",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Distinguer chaleur sensible et chaleur latente et les calculer.",
      "Établir un bilan thermique simple sur un échangeur.",
      "Décrire les principaux types d'échangeurs et leur fonctionnement en co-courant et contre-courant.",
      "Expliquer le fonctionnement d'un réseau de vapeur et le rôle des purgeurs.",
      "Identifier les causes de baisse de performance d'un échangeur et les risques associés."
     ],
     "sections": [
      {
       "titre": "Chaleur sensible et chaleur latente",
       "contenu": "\n<p>Presque toutes les opérations de procédé exigent de chauffer ou de refroidir : amener un réacteur à température, évacuer la chaleur d'une réaction exothermique, évaporer de l'eau, condenser des vapeurs, sécher une feuille de papier. La quantité d'énergie échangée sous forme de chaleur se note Q et s'exprime en joules (J) ou en kilojoules (kJ).</p>\n<p>La <strong>chaleur sensible</strong> est celle qui modifie la température d'un corps sans changement d'état :</p>\n<p><strong>Q = m × c × ΔT</strong></p>\n<p>où m est la masse (kg), c la <strong>capacité thermique massique</strong> (kJ/(kg·K)) et ΔT l'écart de température (K ou °C). Pour l'eau liquide, c ≈ 4,18 kJ/(kg·K) ; pour la plupart des solvants organiques, c est voisin de 2 kJ/(kg·K).</p>\n<p>La <strong>chaleur latente</strong> est celle qui accompagne un changement d'état à température constante :</p>\n<p><strong>Q = m × L</strong></p>\n<p>où L est la chaleur latente massique (kJ/kg). Pour vaporiser de l'eau à 100 °C sous pression atmosphérique, il faut environ 2 260 kJ/kg ; la même quantité est restituée quand la vapeur se condense. C'est cinq fois plus qu'il n'en faut pour chauffer cette eau de 0 à 100 °C.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la vapeur d'eau est le fluide chauffant le plus utilisé dans l'industrie parce qu'en se condensant, elle cède une grande quantité de chaleur à température constante, ce qui permet un chauffage puissant et facile à régler par la pression.</div>\n<p>En régime continu, on raisonne en <strong>puissance thermique</strong> (ou flux thermique) Φ, en kW, avec un débit massique Q<sub>m</sub> en kg/s : Φ = Q<sub>m</sub> × c × ΔT ou Φ = Q<sub>m</sub> × L.</p>"
      },
      {
       "titre": "Les modes de transfert et l'échangeur",
       "contenu": "\n<p>La chaleur passe toujours spontanément du corps chaud vers le corps froid, par trois modes : <strong>conduction</strong> à travers la matière (la paroi de l'échangeur), <strong>convection</strong> par le fluide en mouvement, <strong>rayonnement</strong> (important dans les fours). Dans un <strong>échangeur de chaleur</strong>, deux fluides séparés par une paroi échangent de la chaleur sans se mélanger.</p>\n<p>La puissance échangée dépend de trois facteurs, réunis dans la relation :</p>\n<p><strong>Φ = U × S × ΔT<sub>m</sub></strong></p>\n<ul>\n<li>U est le <strong>coefficient global d'échange</strong>, en W/(m²·K) : il dépend des fluides, de leurs vitesses, du matériau de la paroi et de son état de propreté ;</li>\n<li>S est la <strong>surface d'échange</strong>, en m² ;</li>\n<li>ΔT<sub>m</sub> est l'<strong>écart moyen de température</strong> entre les deux fluides (on utilise en toute rigueur la moyenne logarithmique).</li>\n</ul>\n<p>Le sens de circulation compte. En <strong>co-courant</strong>, les deux fluides circulent dans le même sens : l'écart de température est grand à l'entrée et s'effondre à la sortie, et le fluide froid ne peut jamais sortir plus chaud que le fluide chaud. En <strong>contre-courant</strong>, ils circulent en sens inverse : l'écart reste plus régulier, l'échange est plus efficace et le fluide froid peut sortir plus chaud que la sortie du fluide chaud. C'est la disposition la plus courante.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le facteur U chute quand des dépôts se forment sur la paroi : tartre côté eau, polymère ou produit brûlé côté procédé, boues. On parle d'<strong>encrassement</strong>. Il se traduit par une température de sortie qui n'atteint plus la consigne alors que la vanne de vapeur ou d'eau de refroidissement est grande ouverte.</div>"
      },
      {
       "titre": "Les types d'échangeurs",
       "contenu": "\n<table>\n<thead><tr><th>Type</th><th>Description</th><th>Usages, avantages, limites</th></tr></thead>\n<tbody>\n<tr><td>Échangeur tubulaire (à faisceau et calandre)</td><td>un faisceau de tubes dans une enveloppe cylindrique ; un fluide dans les tubes, l'autre autour, guidé par des chicanes</td><td>robuste, hautes pressions et températures, condenseurs et rebouilleurs ; encombrant</td></tr>\n<tr><td>Échangeur à plaques</td><td>plaques métalliques embouties serrées entre deux bâtis, joints délimitant les canaux</td><td>compact, très efficace, facile à démonter et à agrandir ; limité en pression et en température par les joints</td></tr>\n<tr><td>Échangeur tube dans tube</td><td>deux tubes concentriques</td><td>petits débits, produits visqueux</td></tr>\n<tr><td>Double enveloppe et serpentin</td><td>enveloppe autour d'une cuve ou tube enroulé à l'intérieur</td><td>chauffage et refroidissement des réacteurs</td></tr>\n<tr><td>Cylindre sécheur</td><td>cylindre creux chauffé intérieurement par la vapeur</td><td>sécherie de la machine à papier</td></tr>\n<tr><td>Aéroréfrigérant, tour de refroidissement</td><td>refroidissement par l'air ou par évaporation d'une partie de l'eau</td><td>évacuation de la chaleur des circuits d'eau de refroidissement</td></tr>\n</tbody>\n</table>\n<p>Les <strong>fluides caloporteurs</strong> (ou frigoporteurs) sont choisis selon la plage de température : eau glacée ou eau glycolée en dessous de la température ambiante, eau de refroidissement de tour entre 25 et 35 °C environ, eau chaude, vapeur de 1 à plusieurs dizaines de bars, huile thermique pour atteindre 250 à 300 °C sans haute pression.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les eaux de tours aéroréfrigérantes sont surveillées pour le risque de prolifération des légionelles, bactéries responsables d'une infection pulmonaire grave transmise par les gouttelettes. Ces installations font l'objet d'analyses régulières et de traitements biocides encadrés par la réglementation des installations classées.</div>"
      },
      {
       "titre": "Bilan thermique d'un échangeur",
       "contenu": "\n<p>En régime permanent et en négligeant les pertes vers l'extérieur, la puissance cédée par le fluide chaud est égale à la puissance reçue par le fluide froid. Ce bilan permet de calculer un débit ou une température inconnus.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le débit de vapeur pour réchauffer de l'eau de procédé. On veut chauffer 10 m³/h d'eau de 15 °C à 75 °C avec de la vapeur qui se condense entièrement (chaleur latente disponible 2 100 kJ/kg à la pression utilisée).<br>1. Débit massique d'eau : 10 m³/h × 1 000 kg/m³ = 10 000 kg/h.<br>2. Puissance reçue par l'eau : Φ = 10 000 × 4,18 × (75 − 15) = 2 508 000 kJ/h.<br>3. Conversion : 2 508 000 / 3 600 ≈ 697 kW.<br>4. Débit de vapeur : 2 508 000 / 2 100 ≈ 1 190 kg/h, soit environ 1,2 t/h.<br>5. Vérification : le condensat sort encore chaud ; si on le sous-refroidit dans l'échangeur, il cède un peu de chaleur sensible en plus, et le débit de vapeur nécessaire diminue légèrement.</div>\n<p>Le même raisonnement s'applique au refroidissement d'un réacteur : si une réaction dégage 150 kW et que l'eau de refroidissement ne doit pas s'échauffer de plus de 8 °C, il faut un débit d'eau de 150 / (4,18 × 8) ≈ 4,5 kg/s, soit environ 16 m³/h. Si ce débit n'est pas disponible, la température du réacteur monte : le bilan thermique est aussi un outil de sécurité.</p>"
      },
      {
       "titre": "Le réseau de vapeur et les condensats",
       "contenu": "\n<p>La vapeur est produite par une <strong>chaudière</strong> (ou récupérée sur un procédé) et distribuée sous plusieurs niveaux de pression : haute pression pour la production d'électricité ou les besoins à haute température, moyenne et basse pression pour le chauffage des procédés. La pression fixe la température de condensation : environ 120 °C à 1 bar relatif, 152 °C à 4 bar relatifs, 184 °C à 10 bar relatifs.</p>\n<p>Un poste de chauffage à la vapeur comprend : une vanne d'isolement, un filtre, une <strong>vanne de régulation</strong> qui ajuste le débit de vapeur pour tenir la température du produit, l'échangeur, puis un <strong>purgeur</strong>. Le purgeur laisse passer le condensat et retient la vapeur : sans lui, la vapeur traverserait l'échangeur sans céder sa chaleur latente ; à l'inverse, un purgeur bloqué laisse l'échangeur se remplir d'eau (on dit qu'il est « noyé ») et la surface d'échange utile diminue.</p>\n<p>Le <strong>condensat</strong>, eau chaude et pure, est récupéré et renvoyé vers la bâche alimentaire de la chaudière, ce qui économise de l'eau traitée et de l'énergie.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le <strong>coup de bélier</strong> est un choc violent provoqué par une masse d'eau projetée par la vapeur dans une conduite mal purgée. Il peut rompre une tuyauterie ou un appareil. On met donc en service une ligne de vapeur lentement, purges ouvertes, en ouvrant progressivement la vanne principale. Les brûlures par vapeur et par condensat sont parmi les accidents les plus fréquents : on ne desserre jamais une bride ou un bouchon sur une ligne qui n'a pas été isolée, décomprimée et refroidie.</div>"
      },
      {
       "titre": "Conduire et surveiller un échange thermique",
       "contenu": "\n<p>La surveillance d'un échangeur repose sur quelques mesures : températures d'entrée et de sortie des deux fluides, débits, pressions et pertes de charge de chaque côté, ouverture de la vanne de régulation.</p>\n<table>\n<thead><tr><th>Symptôme</th><th>Cause probable</th></tr></thead>\n<tbody>\n<tr><td>Température de sortie basse, vanne vapeur ouverte à 100 %</td><td>encrassement, purgeur bloqué, pression vapeur insuffisante</td></tr>\n<tr><td>Perte de charge côté produit en hausse</td><td>dépôts, bouchage partiel des canaux</td></tr>\n<tr><td>Produit retrouvé dans l'eau de refroidissement (conductivité, couleur, analyse)</td><td>fuite interne : tube percé, plaque fissurée, joint défectueux</td></tr>\n<tr><td>Bruits de chocs dans la ligne</td><td>coups de bélier, mauvaise évacuation des condensats</td></tr>\n</tbody>\n</table>\n<p>Une <strong>fuite interne</strong> est particulièrement grave : elle peut contaminer un produit, polluer un circuit d'eau rejeté au milieu naturel ou mettre en contact deux produits incompatibles. Le côté du fluide à plus haute pression fuit vers l'autre : on choisit donc souvent de placer le fluide le moins dangereux à la pression la plus élevée.</p>\n<p>Le nettoyage des échangeurs se fait en place par circulation de solutions chimiques (détartrage acide, dégraissage alcalin) ou par démontage et nettoyage mécanique (haute pression, écouvillonnage des tubes).</p>"
      }
     ],
     "points_cles": [
      "Chaleur sensible : Q = m × c × ΔT ; chaleur latente : Q = m × L.",
      "La capacité thermique massique de l'eau vaut environ 4,18 kJ/(kg·K) ; sa chaleur latente de vaporisation environ 2 260 kJ/kg à 100 °C.",
      "La puissance d'un échangeur est Φ = U × S × ΔTm ; l'encrassement fait chuter U.",
      "Le contre-courant est plus efficace que le co-courant.",
      "Le bilan thermique (puissance cédée = puissance reçue) permet de calculer un débit ou une température.",
      "La pression de vapeur fixe sa température de condensation ; le purgeur évacue le condensat et retient la vapeur.",
      "Une ligne de vapeur se met en service lentement, purges ouvertes, pour éviter les coups de bélier.",
      "Une fuite interne d'échangeur se détecte par une contamination du fluide à plus basse pression."
     ],
     "lexique": [
      {
       "terme": "Chaleur sensible",
       "def": "Chaleur qui modifie la température d'un corps sans changement d'état."
      },
      {
       "terme": "Chaleur latente",
       "def": "Chaleur échangée lors d'un changement d'état, à température constante."
      },
      {
       "terme": "Capacité thermique massique",
       "def": "Énergie nécessaire pour élever d'un kelvin la température d'un kilogramme de matière."
      },
      {
       "terme": "Coefficient global d'échange",
       "def": "Grandeur U, en W/(m²·K), qui caractérise l'aptitude d'un échangeur à transmettre la chaleur."
      },
      {
       "terme": "Contre-courant",
       "def": "Circulation des deux fluides d'un échangeur en sens opposés."
      },
      {
       "terme": "Encrassement",
       "def": "Dépôt sur les surfaces d'échange qui réduit la puissance transmise."
      },
      {
       "terme": "Purgeur",
       "def": "Appareil qui évacue le condensat et l'air d'un équipement chauffé à la vapeur en retenant la vapeur."
      },
      {
       "terme": "Condensat",
       "def": "Eau issue de la condensation de la vapeur, récupérée pour alimenter la chaudière."
      },
      {
       "terme": "Coup de bélier",
       "def": "Choc de pression violent dans une conduite, provoqué par une masse d'eau en mouvement."
      },
      {
       "terme": "Fluide caloporteur",
       "def": "Fluide qui transporte la chaleur entre une source et un équipement."
      }
     ]
    },
    {
     "id": "bpce-melange-separations-mecaniques",
     "titre": "Mélanger et séparer mécaniquement",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Choisir un type d'agitateur selon le produit et l'objectif de mélange.",
      "Expliquer le principe de la décantation et les paramètres qui l'influencent.",
      "Décrire les principaux filtres industriels et le déroulement d'un cycle de filtration.",
      "Expliquer le fonctionnement d'une centrifugeuse et d'un hydrocyclone.",
      "Calculer une vitesse de décantation, une surface de filtration ou un débit de filtrat."
     ],
     "sections": [
      {
       "titre": "Mélanger : pourquoi et comment",
       "contenu": "\n<p>Le <strong>mélange</strong> est l'opération qui rend un milieu homogène : dissoudre un solide, disperser un liquide dans un autre, maintenir un solide en suspension, homogénéiser une température ou mettre des réactifs en contact. Il est réalisé dans une cuve par un <strong>agitateur</strong> (moteur, réducteur, arbre et mobile d'agitation) ou en ligne par un <strong>mélangeur statique</strong>, tube garni d'éléments fixes qui divisent et recombinent le flux.</p>\n<table>\n<thead><tr><th>Mobile d'agitation</th><th>Écoulement produit</th><th>Usage type</th></tr></thead>\n<tbody>\n<tr><td>Hélice marine</td><td>axial, grande circulation</td><td>liquides peu visqueux, homogénéisation, mise en suspension</td></tr>\n<tr><td>Turbine à pales droites (type Rushton)</td><td>radial, fort cisaillement</td><td>dispersion de gaz ou de liquides non miscibles</td></tr>\n<tr><td>Turbine à pales inclinées</td><td>mixte</td><td>usage polyvalent, suspension de solides</td></tr>\n<tr><td>Ancre, ruban hélicoïdal</td><td>lent, raclage des parois</td><td>produits très visqueux, échange thermique en double enveloppe</td></tr>\n<tr><td>Disperseur (disque denté)</td><td>très fort cisaillement</td><td>dispersion de pigments, formulation de peintures</td></tr>\n</tbody>\n</table>\n<p>Dans une cuve sans obstacle, un mobile tournant crée un <strong>vortex</strong> : le liquide tourne en bloc sans se mélanger et l'air est aspiré. On installe donc des <strong>chicanes</strong> (contre-pales verticales le long de la paroi) qui cassent la rotation. La puissance absorbée par l'agitateur augmente très vite avec la vitesse et le diamètre du mobile : en régime turbulent, elle varie comme le cube de la vitesse.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un agitateur ne doit souvent pas tourner quand le mobile n'est pas immergé (vibrations, rupture d'arbre) ; le mode opératoire précise le niveau minimal de démarrage. Toute intervention dans une cuve agitée exige la consignation électrique de l'agitateur : ouvrir un trou d'homme ne suffit pas à rendre l'appareil sûr.</div>"
      },
      {
       "titre": "La décantation",
       "contenu": "\n<p>La <strong>décantation</strong> sépare, sous l'effet de la pesanteur, des particules ou gouttes plus denses que le liquide qui les porte. Elle est utilisée pour clarifier un liquide, épaissir une boue ou séparer deux liquides non miscibles (décanteur florentin pour séparer un solvant et de l'eau).</p>\n<p>La <strong>vitesse de chute</strong> d'une particule augmente avec :</p>\n<ul>\n<li>sa taille (très fortement : pour de petites particules, elle varie comme le carré du diamètre) ;</li>\n<li>l'écart de masse volumique entre particule et liquide ;</li>\n<li>la diminution de la viscosité du liquide, donc avec la température.</li>\n</ul>\n<p>C'est pourquoi on fait grossir les particules par coagulation-floculation avant de les décanter. Dans un décanteur continu, une particule est retenue si sa vitesse de chute est supérieure à la <strong>vitesse ascensionnelle</strong> de l'eau, aussi appelée charge hydraulique superficielle : v = Q<sub>v</sub> / S, où S est la surface du décanteur.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un décanteur. Débit 180 m³/h, décanteur circulaire de 16 m de diamètre, flocs dont la vitesse de chute mesurée en éprouvette est de 1,2 m/h.<br>1. Surface : S = π × 16² / 4 ≈ 201 m².<br>2. Vitesse ascensionnelle : 180 / 201 ≈ 0,9 m/h.<br>3. Comparer : 0,9 m/h est inférieure à 1,2 m/h, les flocs ont le temps de se déposer.<br>4. Conclure sur la marge : si le débit passe à 260 m³/h, la vitesse ascensionnelle atteint 1,3 m/h et les flocs commencent à partir avec l'eau. Le débit maximal admissible est donc d'environ 1,2 × 201 ≈ 240 m³/h.</div>\n<p>Le fond du décanteur est raclé par un pont racleur qui ramène les boues vers une fosse centrale d'où elles sont extraites. Les <strong>décanteurs lamellaires</strong> multiplient la surface de dépôt par des plaques inclinées et réduisent fortement l'emprise au sol.</p>"
      },
      {
       "titre": "La filtration : principes",
       "contenu": "\n<p>La <strong>filtration</strong> sépare un solide d'un fluide en le faisant passer à travers un <strong>milieu filtrant</strong> (toile, papier, cartouche, lit de sable, membrane) qui retient les particules. On obtient d'un côté le <strong>filtrat</strong>, liquide débarrassé des solides, de l'autre le <strong>gâteau</strong> (ou tourteau), couche de solide déposée sur le support.</p>\n<p>On distingue :</p>\n<ul>\n<li>la <strong>filtration sur gâteau</strong> : le solide s'accumule en surface et c'est le gâteau lui-même qui filtre ; c'est le cas des filtres-presses et filtres sous vide ;</li>\n<li>la <strong>filtration en profondeur</strong> : les particules sont piégées à l'intérieur d'un lit épais, comme dans les filtres à sable ;</li>\n<li>la <strong>filtration tangentielle</strong> : le liquide circule parallèlement à la membrane, ce qui limite l'accumulation de solides ; elle est utilisée en filtration membranaire.</li>\n</ul>\n<p>Le moteur de la filtration est une <strong>différence de pression</strong> entre l'amont et l'aval du filtre, obtenue par une pompe (filtration sous pression), par le vide (filtration sous vide), par la pesanteur ou par la force centrifuge. Le débit de filtrat diminue au fur et à mesure que le gâteau s'épaissit, car sa résistance augmente. On peut améliorer la filtrabilité par un <strong>adjuvant de filtration</strong> (terre de diatomées, perlite) qui forme un gâteau poreux, ou par un conditionnement au polymère.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> à pression constante, le débit de filtrat décroît au cours du cycle ; à débit constant, la pression monte. Dans les deux cas, on arrête le cycle à une valeur limite fixée par la consigne (pression maximale, débit minimal ou durée).</div>"
      },
      {
       "titre": "Les filtres industriels",
       "contenu": "\n<table>\n<thead><tr><th>Filtre</th><th>Fonctionnement</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Filtre-presse à plateaux</td><td>empilement de plateaux recouverts de toiles serrés par un vérin ; la suspension est pompée dans les chambres, le gâteau s'y forme ; on ouvre le filtre pour débâtir</td><td>boues de station, précipités chimiques ; gâteau très sec, fonctionnement discontinu</td></tr>\n<tr><td>Filtre rotatif sous vide</td><td>tambour couvert de toile tournant dans une auge ; le vide aspire le liquide, le gâteau est lavé, essoré puis raclé</td><td>chimie minérale, cristaux ; fonctionnement continu</td></tr>\n<tr><td>Filtre à bandes</td><td>la boue est pressée entre deux toiles qui passent entre des rouleaux</td><td>déshydratation de boues</td></tr>\n<tr><td>Filtre à disques</td><td>disques couverts de toile, sous vide, partiellement immergés</td><td>récupération des fibres des eaux blanches en papeterie</td></tr>\n<tr><td>Filtre à cartouches ou à poches</td><td>éléments filtrants jetables ou lavables dans un carter</td><td>finition, protection, faibles teneurs en solides</td></tr>\n<tr><td>Filtre à manches</td><td>manches textiles retenant les poussières d'un gaz, décolmatées par impulsions d'air</td><td>dépoussiérage des gaz, aspiration de poudres</td></tr>\n</tbody>\n</table>\n<p>Un cycle de <strong>filtre-presse</strong> comprend : fermeture et serrage, remplissage, filtration sous pression croissante, éventuellement lavage et soufflage du gâteau, desserrage, débâtissage (évacuation des gâteaux), contrôle et lavage des toiles.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un filtrat trouble en début de cycle est normal sur certains filtres, le temps que le gâteau se forme ; on le recycle vers la cuve d'alimentation. Un filtrat qui reste trouble indique une toile percée ou mal posée : le contrôle visuel du filtrat, ou une mesure de turbidité en ligne, fait partie de la surveillance.</div>"
      },
      {
       "titre": "Centrifugation et hydrocyclones",
       "contenu": "\n<p>La <strong>centrifugation</strong> remplace la pesanteur par la force centrifuge, des centaines à des milliers de fois plus intense. Elle sépare des particules fines ou proches en densité que la décantation séparerait trop lentement. L'intensité est exprimée par le <strong>facteur de séparation</strong>, rapport de l'accélération centrifuge à l'accélération de la pesanteur (noté en « g »).</p>\n<ul>\n<li>La <strong>décanteuse centrifuge</strong> (à bol et vis) tourne en continu : le solide plaqué contre le bol est convoyé par une vis vers une extrémité, le liquide clarifié sort à l'autre. Elle sert à déshydrater les boues et à séparer des cristaux.</li>\n<li>L'<strong>essoreuse</strong> à panier perforé retient le solide sur une toile ; le liquide est chassé à travers.</li>\n<li>La <strong>séparatrice à assiettes</strong> sépare deux liquides et des fines particules à très grande vitesse.</li>\n</ul>\n<p>L'<strong>hydrocyclone</strong> n'a pas de pièce mobile : la suspension entre tangentiellement dans un cône à grande vitesse, ce qui crée un tourbillon. Les particules lourdes sont projetées vers la paroi et sortent par le bas (la <strong>sousverse</strong>) ; le liquide et les particules légères sortent par le haut (la <strong>surverse</strong>). On l'utilise pour l'épuration de la pâte à papier, le dessablage ou le classement de particules.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une centrifugeuse stocke une énergie cinétique considérable. Un balourd (dépôt mal réparti, chargement irrégulier) provoque des vibrations qui déclenchent l'arrêt de sécurité. On n'ouvre jamais le capot avant l'arrêt complet du rotor, contrôlé par le verrouillage, et l'on respecte les durées de ralentissement indiquées par le constructeur.</div>"
      },
      {
       "titre": "Choisir et enchaîner les séparations",
       "contenu": "\n<p>Les séparations mécaniques sont souvent enchaînées pour aller d'une suspension diluée à un solide sec, chaque étape préparant la suivante.</p>\n<table>\n<thead><tr><th>Étape</th><th>Équipement type</th><th>Siccité indicative obtenue</th></tr></thead>\n<tbody>\n<tr><td>Épaississement</td><td>décanteur épaississeur, table d'égouttage</td><td>de moins de 1 % à quelques %</td></tr>\n<tr><td>Déshydratation mécanique</td><td>centrifugeuse, filtre à bandes, filtre-presse</td><td>20 à 35 % selon le produit et l'appareil</td></tr>\n<tr><td>Séchage thermique</td><td>sécheur (opération thermique)</td><td>jusqu'à 90 % et plus</td></tr>\n</tbody>\n</table>\n<p>Le critère économique est constant : il est beaucoup moins coûteux d'éliminer l'eau mécaniquement que de l'évaporer. On pousse donc la séparation mécanique au maximum avant tout séchage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir une technique de séparation.<br>1. Identifier les phases : solide-liquide, liquide-liquide, solide-gaz.<br>2. Évaluer la taille des particules et l'écart de masse volumique.<br>3. Préciser l'objectif : clarifier le liquide, récupérer le solide, ou les deux.<br>4. Tenir compte du débit et du mode de production (continu ou par lots).<br>5. Vérifier les contraintes de sécurité du produit (inflammable, toxique), qui peuvent imposer un équipement fermé et inerté.</div>"
      }
     ],
     "points_cles": [
      "Le choix du mobile d'agitation dépend de la viscosité et de l'objectif : circulation, dispersion ou raclage.",
      "Les chicanes empêchent le vortex ; la puissance d'agitation augmente comme le cube de la vitesse.",
      "La vitesse de décantation croît avec la taille des particules, l'écart de masse volumique et la température.",
      "Un décanteur retient les particules dont la vitesse de chute dépasse la vitesse ascensionnelle Qv / S.",
      "La filtration produit un filtrat et un gâteau ; le débit de filtrat diminue quand le gâteau s'épaissit.",
      "Filtre-presse, filtre rotatif sous vide, filtre à bandes, filtre à disques et filtre à manches répondent à des besoins différents.",
      "La centrifugation et l'hydrocyclone utilisent la force centrifuge pour accélérer la séparation.",
      "On élimine l'eau mécaniquement au maximum avant tout séchage thermique."
     ],
     "lexique": [
      {
       "terme": "Chicane",
       "def": "Contre-pale fixée à la paroi d'une cuve agitée pour empêcher le vortex."
      },
      {
       "terme": "Vortex",
       "def": "Tourbillon en entonnoir formé par un liquide qui tourne en bloc dans une cuve agitée."
      },
      {
       "terme": "Vitesse ascensionnelle",
       "def": "Débit traversant un décanteur divisé par sa surface, en m/h."
      },
      {
       "terme": "Filtrat",
       "def": "Liquide ayant traversé le milieu filtrant."
      },
      {
       "terme": "Gâteau",
       "def": "Couche de solide retenue sur le milieu filtrant."
      },
      {
       "terme": "Adjuvant de filtration",
       "def": "Poudre poreuse ajoutée pour rendre un gâteau plus perméable."
      },
      {
       "terme": "Débâtissage",
       "def": "Ouverture d'un filtre-presse et évacuation des gâteaux formés."
      },
      {
       "terme": "Facteur de séparation",
       "def": "Rapport de l'accélération centrifuge à l'accélération de la pesanteur."
      },
      {
       "terme": "Hydrocyclone",
       "def": "Appareil conique sans pièce mobile séparant les particules par un tourbillon."
      },
      {
       "terme": "Sousverse",
       "def": "Sortie inférieure d'un hydrocyclone ou d'un décanteur, chargée en particules lourdes."
      }
     ]
    },
    {
     "id": "bpce-separations-thermiques",
     "titre": "Séparer par la chaleur : évaporation, cristallisation, séchage, distillation",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Expliquer le rôle de la pression sur la température d'ébullition et l'intérêt du vide.",
      "Décrire un évaporateur et calculer l'eau à évaporer pour concentrer une solution.",
      "Expliquer la cristallisation par refroidissement ou par évaporation à partir de la solubilité.",
      "Décrire une colonne de distillation et le rôle du reflux.",
      "Identifier les paramètres de conduite et les risques des opérations thermiques."
     ],
     "sections": [
      {
       "titre": "Pression et ébullition",
       "contenu": "\n<p>Un liquide bout lorsque sa <strong>pression de vapeur saturante</strong> devient égale à la pression qui règne au-dessus de lui. Cette pression de vapeur augmente avec la température. Conséquence pratique : la <strong>température d'ébullition dépend de la pression</strong>. L'eau bout à 100 °C sous 1,013 bar, vers 60 °C sous 0,2 bar absolu environ, à plus de 150 °C sous 5 bar absolus.</p>\n<p>Travailler <strong>sous vide</strong> permet donc d'évaporer ou de distiller à basse température, ce qui :</p>\n<ul>\n<li>protège les produits sensibles à la chaleur (dégradation, coloration, polymérisation) ;</li>\n<li>permet d'utiliser une source de chaleur moins chaude (vapeur basse pression, chaleur de récupération) ;</li>\n<li>réduit certains risques liés aux produits instables.</li>\n</ul>\n<p>Le vide est produit par une pompe à vide ou un éjecteur, après un <strong>condenseur</strong> qui liquéfie les vapeurs. Une entrée d'air dans l'installation (joint défectueux, vanne mal fermée) dégrade le vide et fait monter la température d'ébullition.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans un mélange de liquides, le composé qui a la pression de vapeur la plus élevée à une température donnée est le plus <strong>volatil</strong> : il bout à plus basse température et s'enrichit dans la vapeur. C'est le principe de toutes les séparations par distillation.</div>"
      },
      {
       "titre": "L'évaporation",
       "contenu": "\n<p>L'<strong>évaporation</strong> concentre une solution en vaporisant une partie de son solvant, généralement l'eau. Le soluté (sel, sucre, soude, liqueur noire de papeterie) n'est pas volatil et reste dans le <strong>concentrat</strong>. On l'utilise pour concentrer des solutions avant cristallisation, récupérer des réactifs ou réduire le volume d'effluents.</p>\n<p>Un <strong>évaporateur</strong> comprend une chambre de chauffe (faisceau tubulaire ou plaques chauffés à la vapeur), une chambre de séparation où la vapeur se détache du liquide, un dévésiculeur qui arrête les gouttelettes entraînées et un condenseur. Dans les évaporateurs à <strong>multiples effets</strong>, la vapeur produite dans un effet sert à chauffer l'effet suivant, maintenu à une pression plus basse : on évapore ainsi plusieurs kilogrammes d'eau par kilogramme de vapeur de chauffe. La <strong>recompression mécanique de vapeur</strong> va plus loin en comprimant la vapeur produite pour la réutiliser comme vapeur de chauffe.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer l'eau à évaporer. On concentre 5 t/h d'une solution à 10 % en masse de sel jusqu'à 40 %.<br>1. Bilan sur le soluté, qui ne s'évapore pas : 5 × 0,10 = 0,5 t/h de sel.<br>2. Débit de concentrat : 0,5 / 0,40 = 1,25 t/h.<br>3. Eau évaporée : 5 − 1,25 = 3,75 t/h.<br>4. Ordre de grandeur de la vapeur de chauffe : en simple effet, il faut un peu plus d'une tonne de vapeur par tonne d'eau évaporée, soit environ 4 t/h ; un triple effet ramène ce besoin à environ un tiers.</div>\n<p>Les problèmes de conduite courants sont l'<strong>entartrage</strong> des tubes, le <strong>moussage</strong> (traité par un antimousse) et l'<strong>entraînement</strong> de gouttelettes vers le condenseur, détecté par une conductivité anormale des condensats.</p>"
      },
      {
       "titre": "La cristallisation",
       "contenu": "\n<p>La <strong>cristallisation</strong> produit un solide pur sous forme de cristaux à partir d'une solution. Elle repose sur la <strong>solubilité</strong>, masse maximale de soluté que l'on peut dissoudre dans une quantité de solvant à une température donnée. Une solution qui contient exactement cette quantité est <strong>saturée</strong> ; au-delà, elle est <strong>sursaturée</strong>, état instable dans lequel des cristaux se forment (<strong>nucléation</strong>) puis grossissent (<strong>croissance</strong>).</p>\n<p>On crée la sursaturation :</p>\n<ul>\n<li><strong>par refroidissement</strong>, pour les composés dont la solubilité augmente nettement avec la température (de nombreux sels, l'acide citrique) ;</li>\n<li><strong>par évaporation</strong> du solvant, pour ceux dont la solubilité varie peu (le chlorure de sodium) ;</li>\n<li>par ajout d'un autre solvant dans lequel le produit est peu soluble, ou par réaction (précipitation).</li>\n</ul>\n<p>La taille et la pureté des cristaux dépendent de la vitesse de refroidissement, de l'agitation et de l'<strong>ensemencement</strong> (ajout de petits cristaux pour amorcer la cristallisation de façon maîtrisée). Un refroidissement trop brutal donne une multitude de fins cristaux difficiles à filtrer et qui emprisonnent des impuretés.</p>\n<p>La suspension obtenue, appelée <strong>bouillie</strong> ou magma, est séparée par filtration ou essorage ; le liquide résiduel s'appelle les <strong>eaux mères</strong>. Les cristaux sont lavés puis séchés.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en chimie fine et en pharmacie, la cristallisation est souvent l'étape qui fixe la pureté et la forme du produit final. Le profil de refroidissement, en degrés par heure, est piloté par l'automate et enregistré dans le dossier de lot.</div>"
      },
      {
       "titre": "Le séchage",
       "contenu": "\n<p>Le <strong>séchage</strong> élimine par vaporisation le liquide qui imprègne un solide (cristaux, granulés, boues, feuille de papier). Il intervient après la séparation mécanique. On caractérise l'humidité d'un produit par son <strong>taux d'humidité</strong> ou, à l'inverse, par sa <strong>siccité</strong>.</p>\n<table>\n<thead><tr><th>Sécheur</th><th>Principe</th><th>Produits</th></tr></thead>\n<tbody>\n<tr><td>Étuve, sécheur à plateaux</td><td>air chaud circulant sur des plateaux, par lots</td><td>petites quantités, produits fragiles</td></tr>\n<tr><td>Sécheur rotatif</td><td>tambour incliné tournant, traversé par des gaz chauds</td><td>minéraux, granulés, boues</td></tr>\n<tr><td>Lit fluidisé</td><td>air chaud soufflé par le bas qui met les grains en suspension</td><td>granulés, cristaux, séchage rapide et homogène</td></tr>\n<tr><td>Atomiseur</td><td>pulvérisation d'une solution dans un courant d'air chaud</td><td>poudres (lait, détergents, pigments)</td></tr>\n<tr><td>Sécheur sous vide agité</td><td>chauffage par paroi sous vide, sans air</td><td>produits pharmaceutiques, solvants à récupérer</td></tr>\n<tr><td>Cylindres sécheurs</td><td>contact avec des cylindres chauffés à la vapeur</td><td>papier, carton</td></tr>\n</tbody>\n</table>\n<p>Le séchage se déroule en deux phases : une <strong>phase à vitesse constante</strong>, où l'eau de surface s'évapore comme une nappe libre, puis une <strong>phase à vitesse décroissante</strong>, où l'eau doit migrer depuis l'intérieur du produit. La seconde phase est longue et c'est elle qui fixe la durée du séchage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sécher un produit imprégné de solvant inflammable ou une poudre combustible crée un risque d'incendie et d'explosion. On utilise alors des sécheurs sous vide ou sous azote, on surveille la température du produit et la teneur en oxygène, et l'on respecte la température maximale indiquée par la fiche de données de sécurité.</div>"
      },
      {
       "titre": "La distillation",
       "contenu": "\n<p>La <strong>distillation</strong> sépare les constituants d'un mélange liquide homogène grâce à leurs différences de volatilité. Chauffé, le mélange produit une vapeur plus riche en constituant volatil que le liquide ; condensée, cette vapeur donne le <strong>distillat</strong>. Le liquide restant, enrichi en constituant lourd, est le <strong>résidu</strong>.</p>\n<p>Une simple vaporisation-condensation ne suffit pas quand les volatilités sont proches. On utilise alors une <strong>colonne de rectification</strong>, qui réalise une succession d'équilibres liquide-vapeur :</p>\n<ul>\n<li>le <strong>bouilleur</strong> (ou rebouilleur), en pied de colonne, vaporise le liquide ;</li>\n<li>la vapeur monte à travers des <strong>plateaux</strong> ou un <strong>garnissage</strong> où elle rencontre le liquide qui descend ; à chaque contact, la vapeur s'enrichit en volatil et le liquide en lourd ;</li>\n<li>en tête, le <strong>condenseur</strong> liquéfie la vapeur ; une partie du condensat est renvoyée dans la colonne, c'est le <strong>reflux</strong>, l'autre est soutirée comme distillat ;</li>\n<li>l'alimentation entre en général à mi-hauteur ; le résidu est soutiré en pied.</li>\n</ul>\n<p>Le <strong>taux de reflux</strong> est le rapport du débit de reflux au débit de distillat soutiré. Augmenter le reflux améliore la pureté du distillat mais diminue la production et augmente la consommation d'énergie au bouilleur et au condenseur. La température le long de la colonne décroît du pied vers la tête ; une température de tête qui monte indique que des composés lourds remontent et que la pureté du distillat se dégrade.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réagir à une dérive de pureté du distillat.<br>1. Constater : l'analyse du distillat montre une teneur en impureté lourde en hausse, la température de tête a augmenté de 2 °C.<br>2. Vérifier les causes externes : composition ou débit d'alimentation modifiés, pression de colonne, puissance au bouilleur.<br>3. Agir selon la consigne : augmenter le taux de reflux, par exemple en réduisant le débit de soutirage de distillat.<br>4. Attendre la stabilisation : une colonne réagit lentement, il faut souvent de longues minutes à plusieurs dizaines de minutes.<br>5. Contrôler par une nouvelle analyse et consigner l'action dans le cahier de quart.</div>"
      },
      {
       "titre": "Conduite et sécurité des opérations thermiques",
       "contenu": "\n<p>Les opérations thermiques partagent les mêmes paramètres de conduite : <strong>pression</strong> (ou vide), <strong>températures</strong> en plusieurs points, <strong>débits</strong> d'alimentation, de vapeur et de soutirage, <strong>niveaux</strong> (pied de colonne, bouilleur, ballon de reflux, évaporateur). Les régulations de niveau et de pression sont essentielles : un pied de colonne vide expose le bouilleur à la surchauffe, un ballon de reflux trop plein noie le condenseur.</p>\n<table>\n<thead><tr><th>Phénomène</th><th>Description</th><th>Signe</th></tr></thead>\n<tbody>\n<tr><td>Engorgement</td><td>trop de vapeur ou de liquide : le liquide ne descend plus et s'accumule</td><td>perte de charge de la colonne qui augmente fortement</td></tr>\n<tr><td>Pleurage</td><td>trop peu de vapeur sur les plateaux : le liquide passe à travers les trous</td><td>mauvaise séparation, perte de charge faible</td></tr>\n<tr><td>Moussage</td><td>formation de mousse stable</td><td>entraînement, niveaux instables</td></tr>\n<tr><td>Perte de vide</td><td>entrée d'air ou défaut de la pompe à vide</td><td>pression en hausse, température d'ébullition en hausse</td></tr>\n</tbody>\n</table>\n<p>Sur le plan de la sécurité, ces opérations concentrent des produits chauds, souvent inflammables, parfois sous pression. Les risques principaux sont les brûlures, l'incendie en cas de fuite, la surpression si le condenseur perd son refroidissement (les vapeurs ne sont plus condensées et la pression monte) et la décomposition de résidus instables concentrés en pied de colonne. Les soupapes, les alarmes de pression et de température et les sécurités de coupure de la vapeur protègent l'installation.</p>"
      }
     ],
     "points_cles": [
      "La température d'ébullition dépend de la pression : le vide permet de travailler à basse température.",
      "L'évaporation concentre une solution en vaporisant le solvant ; le bilan sur le soluté donne l'eau à évaporer.",
      "Les évaporateurs à multiples effets et la recompression de vapeur réduisent la consommation d'énergie.",
      "La cristallisation exige une sursaturation, créée par refroidissement, évaporation ou ajout d'un autre solvant.",
      "Un refroidissement trop rapide donne des cristaux fins, impurs et difficiles à filtrer.",
      "Le séchage comporte une phase à vitesse constante puis une phase à vitesse décroissante, la plus longue.",
      "Dans une colonne, le reflux améliore la pureté du distillat au prix de la production et de l'énergie.",
      "Engorgement, pleurage, moussage et perte de vide sont les dérives typiques à reconnaître."
     ],
     "lexique": [
      {
       "terme": "Pression de vapeur saturante",
       "def": "Pression à laquelle un liquide et sa vapeur sont en équilibre à une température donnée."
      },
      {
       "terme": "Volatil",
       "def": "Se dit d'un composé qui passe facilement à l'état de vapeur."
      },
      {
       "terme": "Évaporateur à multiples effets",
       "def": "Évaporateur dont la vapeur produite par un effet chauffe l'effet suivant, à pression plus basse."
      },
      {
       "terme": "Solubilité",
       "def": "Masse maximale de soluté que l'on peut dissoudre dans un solvant à une température donnée."
      },
      {
       "terme": "Sursaturation",
       "def": "État d'une solution contenant plus de soluté que sa solubilité, à l'origine de la cristallisation."
      },
      {
       "terme": "Eaux mères",
       "def": "Solution restant après séparation des cristaux."
      },
      {
       "terme": "Distillat",
       "def": "Produit de tête d'une distillation, enrichi en constituant volatil."
      },
      {
       "terme": "Reflux",
       "def": "Partie du condensat de tête renvoyée dans la colonne pour améliorer la séparation."
      },
      {
       "terme": "Bouilleur",
       "def": "Échangeur de pied de colonne qui vaporise le liquide."
      },
      {
       "terme": "Engorgement",
       "def": "Accumulation de liquide dans une colonne due à un débit de vapeur ou de liquide excessif."
      }
     ]
    },
    {
     "id": "bpce-transfert-matiere",
     "titre": "Transfert de matière : extraction, absorption, échange d'ions et membranes",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Expliquer le principe d'une extraction liquide-liquide et le rôle du coefficient de partage.",
      "Décrire une colonne d'absorption de gaz et son usage dans le traitement des rejets.",
      "Expliquer l'adsorption sur charbon actif et la notion de saturation.",
      "Décrire le fonctionnement et la régénération d'une chaîne de déminéralisation par résines échangeuses d'ions.",
      "Comparer les techniques membranaires et suivre leurs indicateurs de colmatage."
     ],
     "sections": [
      {
       "titre": "Le principe commun : passer d'une phase à l'autre",
       "contenu": "\n<p>Les opérations de <strong>transfert de matière</strong> font passer un constituant d'une phase à une autre : d'un liquide vers un autre liquide (extraction), d'un gaz vers un liquide (absorption), d'un fluide vers la surface d'un solide (adsorption, échange d'ions), ou à travers une paroi sélective (membranes). Elles permettent de récupérer un produit, de purifier un fluide ou de dépolluer un rejet.</p>\n<p>Trois idées gouvernent toutes ces opérations :</p>\n<ul>\n<li>le transfert tend vers un <strong>équilibre</strong> entre les phases, au-delà duquel il s'arrête ;</li>\n<li>sa vitesse dépend de la <strong>surface de contact</strong> entre les phases et de l'<strong>agitation</strong> qui renouvelle cette surface ;</li>\n<li>le fonctionnement à <strong>contre-courant</strong> maintient un écart à l'équilibre sur toute la longueur de l'appareil et donne la meilleure efficacité.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un appareil de transfert de matière ne crée pas de pureté parfaite. Il déplace un équilibre. Pour aller plus loin, on multiplie les étages de contact (colonne, batterie de mélangeurs-décanteurs) ou l'on régénère le solide ou le solvant qui a capté le constituant.</div>"
      },
      {
       "titre": "L'extraction liquide-liquide",
       "contenu": "\n<p>L'<strong>extraction liquide-liquide</strong> transfère un soluté d'une phase liquide (la charge) vers un <strong>solvant</strong> non miscible dans lequel il est plus soluble. Après contact, on obtient deux phases que l'on sépare par décantation : l'<strong>extrait</strong>, solvant chargé du soluté, et le <strong>raffinat</strong>, charge appauvrie.</p>\n<p>À l'équilibre, le rapport des concentrations du soluté dans les deux phases est le <strong>coefficient de partage</strong> K = C<sub>solvant</sub> / C<sub>charge</sub>. Plus K est grand, plus l'extraction est efficace. À volume total de solvant égal, plusieurs extractions successives avec de petites quantités de solvant sont plus efficaces qu'une seule extraction avec tout le solvant.</p>\n<p>Industriellement, on utilise des <strong>mélangeurs-décanteurs</strong> en série ou des <strong>colonnes d'extraction</strong> (à garnissage, à plateaux perforés, agitées ou pulsées) où les deux phases circulent à contre-courant grâce à leur différence de densité. Le solvant chargé est ensuite séparé du soluté, souvent par distillation, et recyclé.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une extraction en une étape. 1 m³ de solution aqueuse contient 10 kg de soluté ; on extrait avec 0,5 m³ de solvant ; K = 8.<br>1. Appeler x la masse restant dans l'eau ; la masse passée dans le solvant est 10 − x.<br>2. Écrire l'équilibre : (10 − x) / 0,5 = 8 × (x / 1).<br>3. Résoudre : 10 − x = 4x, donc x = 2 kg.<br>4. Conclure : 8 kg sont extraits, soit 80 %. Avec deux extractions de 0,25 m³, chaque étape laisse 1 / (1 + 8 × 0,25) = 1/3 du soluté, soit 10 × (1/3)² ≈ 1,1 kg restant : environ 89 % extraits avec le même volume de solvant.</div>"
      },
      {
       "titre": "Absorption et lavage des gaz",
       "contenu": "\n<p>L'<strong>absorption</strong> transfère un constituant d'un gaz vers un liquide. Elle sert à fabriquer des produits (absorption du trioxyde de soufre pour produire l'acide sulfurique, du chlorure d'hydrogène pour l'acide chlorhydrique) et surtout à épurer les rejets gazeux dans des <strong>laveurs de gaz</strong> (ou scrubbers).</p>\n<p>Dans une <strong>colonne à garnissage</strong>, le gaz monte à travers un lit d'anneaux ou de selles qui offrent une grande surface, tandis que la solution de lavage ruisselle de haut en bas, distribuée uniformément par une rampe. La solution est choisie pour réagir avec le polluant : solution de soude pour capter les gaz acides (chlorure d'hydrogène, dioxyde de soufre, chlore), solution acide pour l'ammoniac. Un <strong>dévésiculeur</strong> en tête arrête les gouttelettes.</p>\n<p>Les paramètres surveillés sont le débit de recirculation de la solution, son pH (qui baisse quand la soude est consommée), la perte de charge du garnissage et la concentration du polluant en sortie.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un laveur de gaz est souvent un équipement de sécurité : il traite les évents de cuves d'acide ou les rejets d'un réacteur. Sa pompe de recirculation et son pH sont asservis à des alarmes, et sa mise hors service impose l'arrêt des opérations qui l'alimentent.</div>\n<p>L'opération inverse, appelée <strong>stripage</strong> ou désorption, extrait un gaz dissous d'un liquide par un courant d'air ou de vapeur, par exemple pour éliminer l'ammoniac d'un effluent ou le dioxyde de carbone d'une eau.</p>"
      },
      {
       "titre": "L'adsorption",
       "contenu": "\n<p>L'<strong>adsorption</strong> fixe des molécules à la surface d'un solide poreux, l'<strong>adsorbant</strong>. Le plus utilisé est le <strong>charbon actif</strong>, dont la surface interne atteint plusieurs centaines à plus de mille mètres carrés par gramme. On l'emploie pour retirer des micropolluants et des goûts de l'eau potable, des solvants d'un air extrait, des colorants d'une solution. D'autres adsorbants sont les zéolithes, les gels de silice ou l'alumine activée (séchage de gaz).</p>\n<p>L'adsorbant a une capacité limitée : il se <strong>sature</strong> progressivement. Dans un filtre traversé par le fluide, une zone de saturation avance de l'entrée vers la sortie. Lorsqu'elle atteint la sortie, le polluant apparaît dans le fluide traité : c'est la <strong>percée</strong>. Il faut alors remplacer ou <strong>régénérer</strong> l'adsorbant (à la vapeur, par chauffage, ou par réactivation thermique chez un prestataire).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un filtre à charbon actif saturé ne protège plus et peut même relarguer des composés. Sa durée de vie ne se suppose pas : on la suit par des analyses en sortie ou par le volume traité, selon la consigne. Un charbon chargé de solvants peut s'échauffer ; ses opérations de vidange se font selon une procédure dédiée.</div>"
      },
      {
       "titre": "L'échange d'ions et la déminéralisation",
       "contenu": "\n<p>Les <strong>résines échangeuses d'ions</strong> sont de petites billes de polymère portant des groupes chargés. Elles échangent les ions de l'eau contre des ions qu'elles portent :</p>\n<ul>\n<li>une <strong>résine cationique</strong> sous forme H<sup>+</sup> capte les cations (Ca<sup>2+</sup>, Mg<sup>2+</sup>, Na<sup>+</sup>) et libère des ions H<sup>+</sup> ;</li>\n<li>une <strong>résine anionique</strong> sous forme OH<sup>−</sup> capte les anions (Cl<sup>−</sup>, SO<sub>4</sub><sup>2−</sup>, HCO<sub>3</sub><sup>−</sup>) et libère des ions OH<sup>−</sup> ;</li>\n<li>H<sup>+</sup> et OH<sup>−</sup> forment de l'eau : on obtient une <strong>eau déminéralisée</strong>.</li>\n</ul>\n<p>L'<strong>adoucissement</strong> est une application plus simple : une résine cationique sous forme Na<sup>+</sup> remplace le calcium et le magnésium par du sodium, ce qui supprime la dureté sans déminéraliser.</p>\n<p>Quand la résine est épuisée, on la <strong>régénère</strong> : acide chlorhydrique ou sulfurique pour la résine cationique, soude pour la résine anionique, saumure (chlorure de sodium) pour un adoucisseur. Le cycle comprend un détassage (lavage à contre-courant), l'injection du régénérant, un déplacement lent puis un rinçage jusqu'à retour de la qualité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer la durée d'un cycle d'adoucisseur. Résine capable de retenir 5 °f·m³ par litre de résine, colonne de 500 L, eau à 25 °f, débit 10 m³/h.<br>1. Capacité totale : 5 × 500 = 2 500 °f·m³.<br>2. Volume d'eau traitable : 2 500 / 25 = 100 m³.<br>3. Durée du cycle : 100 / 10 = 10 h.<br>4. Fixer la régénération avec une marge de sécurité, et surveiller la dureté en sortie : une remontée avant l'heure prévue signale une régénération incomplète ou une eau plus dure.</div>\n<p>La qualité de l'eau déminéralisée se suit par la <strong>conductivité</strong> (quelques µS/cm, ou moins de 0,1 µS/cm après lit mélangé) et par la teneur en silice, ion le plus difficile à retenir.</p>"
      },
      {
       "titre": "Les techniques membranaires",
       "contenu": "\n<p>Une <strong>membrane</strong> est une paroi fine qui laisse passer le solvant et retient certaines espèces selon leur taille ou leur charge. Sous l'effet d'une pression, le fluide se sépare en <strong>perméat</strong> (ce qui traverse) et <strong>concentrat</strong> ou rétentat (ce qui est retenu).</p>\n<table>\n<thead><tr><th>Technique</th><th>Ce qui est retenu</th><th>Pression de service indicative</th><th>Usages</th></tr></thead>\n<tbody>\n<tr><td>Microfiltration</td><td>particules, bactéries</td><td>moins de 2 bar</td><td>clarification, bioréacteurs à membranes</td></tr>\n<tr><td>Ultrafiltration</td><td>colloïdes, virus, macromolécules</td><td>1 à 5 bar</td><td>eau potable, prétraitement de l'osmose</td></tr>\n<tr><td>Nanofiltration</td><td>ions divalents, petites molécules organiques</td><td>5 à 20 bar</td><td>adoucissement, pesticides</td></tr>\n<tr><td>Osmose inverse</td><td>presque tous les ions</td><td>10 à 70 bar selon la salinité</td><td>eau ultra-pure, dessalement de l'eau de mer</td></tr>\n</tbody>\n</table>\n<p>Le <strong>taux de conversion</strong> d'une installation est la part du débit d'alimentation récupérée en perméat. Le <strong>taux de rejet</strong> d'un ion est la fraction de cet ion retenue par la membrane. Les membranes se <strong>colmatent</strong> (dépôts minéraux, matières organiques, biofilm) : à pression constante, le débit de perméat baisse ; à débit constant, la pression transmembranaire augmente. On les nettoie en place par des solutions acides et basiques, selon le protocole du fabricant, et on les protège par un prétraitement (filtration, antitartre, déchloration pour certaines membranes sensibles au chlore).</p>"
      }
     ],
     "points_cles": [
      "Le transfert de matière tend vers un équilibre ; surface de contact, agitation et contre-courant améliorent l'efficacité.",
      "En extraction, plusieurs contacts avec de petites quantités de solvant valent mieux qu'un seul avec tout le solvant.",
      "Un laveur de gaz capte les polluants dans une solution réactive ; son pH et sa recirculation sont surveillés.",
      "Un adsorbant se sature : la percée impose son remplacement ou sa régénération.",
      "Les résines cationiques et anioniques en série produisent une eau déminéralisée ; un adoucisseur échange le calcium contre le sodium.",
      "La régénération des résines utilise acide, soude ou saumure selon le type de résine.",
      "Microfiltration, ultrafiltration, nanofiltration et osmose inverse retiennent des espèces de plus en plus petites, sous des pressions croissantes.",
      "Le colmatage d'une membrane se lit par une baisse de débit de perméat ou une hausse de pression transmembranaire."
     ],
     "lexique": [
      {
       "terme": "Extrait",
       "def": "Solvant chargé du soluté à l'issue d'une extraction."
      },
      {
       "terme": "Raffinat",
       "def": "Phase de départ appauvrie en soluté après extraction."
      },
      {
       "terme": "Coefficient de partage",
       "def": "Rapport, à l'équilibre, des concentrations d'un soluté dans deux phases non miscibles."
      },
      {
       "terme": "Laveur de gaz",
       "def": "Colonne d'absorption qui épure un rejet gazeux au moyen d'une solution de lavage."
      },
      {
       "terme": "Adsorption",
       "def": "Fixation de molécules à la surface d'un solide poreux."
      },
      {
       "terme": "Percée",
       "def": "Apparition du polluant en sortie d'un filtre adsorbant ou échangeur saturé."
      },
      {
       "terme": "Résine échangeuse d'ions",
       "def": "Billes de polymère qui échangent des ions avec la solution qui les traverse."
      },
      {
       "terme": "Régénération",
       "def": "Opération qui rend à une résine ou un adsorbant sa capacité de fixation."
      },
      {
       "terme": "Perméat",
       "def": "Fraction qui traverse une membrane."
      },
      {
       "terme": "Osmose inverse",
       "def": "Technique membranaire sous haute pression qui retient la quasi-totalité des ions."
      }
     ]
    },
    {
     "id": "bpce-nettoyage-installations",
     "titre": "Nettoyer et désinfecter les installations",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Expliquer pourquoi et quand une installation de procédé doit être nettoyée.",
      "Identifier la nature d'une salissure et choisir le produit de nettoyage adapté.",
      "Appliquer les quatre facteurs du nettoyage (température, action mécanique, concentration, temps).",
      "Décrire un cycle de nettoyage en place et ses contrôles.",
      "Mettre en œuvre les règles de sécurité liées aux produits de nettoyage."
     ],
     "sections": [
      {
       "titre": "Pourquoi nettoyer une installation",
       "contenu": "\n<p>Le <strong>nettoyage</strong> d'une installation de production n'est pas une tâche annexe : il conditionne la qualité, la sécurité et la performance. On nettoie :</p>\n<ul>\n<li>lors d'un <strong>changement de fabrication</strong>, pour éviter la <strong>contamination croisée</strong> d'un produit par les résidus du précédent (cas typique de la chimie fine et de la pharmacie, où l'on fabrique plusieurs produits dans les mêmes réacteurs) ;</li>\n<li>pour rétablir la <strong>performance</strong> des équipements : échangeurs entartrés, filtres et membranes colmatés, toiles et feutres de machine à papier encrassés ;</li>\n<li>pour maîtriser la <strong>contamination microbiologique</strong> : réservoirs d'eau, circuits d'eau blanche en papeterie, installations de traitement d'eau potable ;</li>\n<li>avant une <strong>intervention de maintenance</strong>, pour que l'équipement ne présente plus de danger lié au produit.</li>\n</ul>\n<p>Il faut distinguer <strong>nettoyage</strong> (élimination des salissures visibles et invisibles) et <strong>désinfection</strong> (destruction des micro-organismes). On ne désinfecte efficacement qu'une surface propre : les dépôts protègent les micro-organismes du désinfectant.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un nettoyage est une opération de production à part entière : il a un mode opératoire, des paramètres, des contrôles et un enregistrement. Un nettoyage « fait à l'œil » n'est pas un nettoyage validé.</div>"
      },
      {
       "titre": "Identifier la salissure et choisir le produit",
       "contenu": "\n<p>Le produit de nettoyage dépend de la nature de la salissure : on choisit un produit qui la dissout, la décompose ou la détache.</p>\n<table>\n<thead><tr><th>Salissure</th><th>Exemples</th><th>Produit adapté</th></tr></thead>\n<tbody>\n<tr><td>Minérale</td><td>tartre (carbonate de calcium), oxydes de fer, sels</td><td>acide : nitrique, phosphorique, sulfamique, citrique</td></tr>\n<tr><td>Organique grasse</td><td>huiles, graisses, résines</td><td>alcalin (soude, potasse) avec agents tensioactifs, ou solvant</td></tr>\n<tr><td>Organique protéique ou polymérisée</td><td>dépôts brûlés, biofilm</td><td>alcalin chaud, éventuellement chloré ou oxydant</td></tr>\n<tr><td>Résidu de produit soluble</td><td>sel, produit soluble dans un solvant connu</td><td>eau ou solvant du procédé</td></tr>\n<tr><td>Micro-organismes</td><td>bactéries, levures, algues</td><td>désinfectant : chlore, peroxyde, acide peracétique, biocide autorisé</td></tr>\n</tbody>\n</table>\n<p>Les <strong>tensioactifs</strong> abaissent la tension superficielle de l'eau, l'aident à mouiller les surfaces et à mettre les graisses en émulsion. Les <strong>séquestrants</strong> empêchent la redéposition du calcaire dans les solutions alcalines. Les <strong>inhibiteurs de corrosion</strong> protègent le métal pendant un détartrage acide.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le choix du produit doit tenir compte des <strong>matériaux</strong> de l'installation. L'acide chlorhydrique attaque les aciers inoxydables, la soude chaude attaque l'aluminium et certains joints, un oxydant détériore certaines membranes. On utilise uniquement les produits et concentrations prévus par la procédure, et l'on ne mélange jamais deux produits de nettoyage : un acide mélangé à un produit chloré libère du chlore gazeux.</div>"
      },
      {
       "titre": "Les quatre facteurs du nettoyage",
       "contenu": "\n<p>L'efficacité d'un nettoyage repose sur quatre facteurs, représentés par le <strong>cercle de Sinner</strong> (on retient parfois le sigle TACT) :</p>\n<ul>\n<li><strong>T</strong>empérature : la chaleur accélère les réactions chimiques et ramollit les graisses ; une solution alcaline est souvent utilisée entre 60 et 85 °C ;</li>\n<li><strong>A</strong>ction mécanique : vitesse de circulation, jet, brossage ; dans les tuyauteries, on vise une vitesse d'écoulement suffisante, de l'ordre de 1,5 m/s ou plus, pour arracher les dépôts ;</li>\n<li><strong>C</strong>oncentration du produit, généralement de quelques dixièmes de pour cent à quelques pour cent ;</li>\n<li><strong>T</strong>emps de contact.</li>\n</ul>\n<p>Ces facteurs se compensent : si l'on ne peut pas chauffer, il faut augmenter le temps ou la concentration. Mais aucun ne peut être réduit à zéro, et les augmenter au-delà du nécessaire gaspille de l'énergie et des produits, et augmente la charge polluante des eaux de lavage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une solution de nettoyage. Le mode opératoire demande 3 000 L de soude à 1,5 % en masse, à partir de soude à 30 %.<br>1. Assimiler la masse de 3 000 L de solution diluée à environ 3 000 kg (masse volumique proche de celle de l'eau).<br>2. Masse de soude pure nécessaire : 3 000 × 0,015 = 45 kg.<br>3. Masse de solution commerciale : 45 / 0,30 = 150 kg.<br>4. Volume correspondant, avec une masse volumique de 1,33 kg/L : 150 / 1,33 ≈ 113 L.<br>5. Remplir la cuve d'eau, introduire la soude sous circulation, puis vérifier la concentration réelle par mesure de conductivité ou par titrage avant de lancer le cycle.</div>"
      },
      {
       "titre": "Le nettoyage en place",
       "contenu": "\n<p>Le <strong>nettoyage en place</strong> (NEP, en anglais CIP pour cleaning in place) nettoie les cuves, tuyauteries et échangeurs sans les démonter, par circulation de solutions depuis une <strong>station de NEP</strong> : cuves de solutions (eau, soude, acide), pompe d'aller, échangeur de chauffage, retour par une pompe de reprise, capteurs de conductivité, de température et de débit. Dans les cuves, la solution est projetée par des <strong>boules de lavage</strong> fixes ou des têtes rotatives qui arrosent toutes les parois.</p>\n<p>Un cycle type comprend :</p>\n<ol>\n<li><strong>pré-rinçage</strong> à l'eau pour éliminer le plus gros des résidus ;</li>\n<li><strong>lavage alcalin</strong> chaud pour dissoudre les salissures organiques ;</li>\n<li><strong>rinçage intermédiaire</strong> ;</li>\n<li><strong>lavage acide</strong> pour éliminer les dépôts minéraux et neutraliser les traces alcalines ;</li>\n<li><strong>rinçage final</strong> à l'eau de qualité adaptée (souvent déminéralisée) ;</li>\n<li>si nécessaire, <strong>désinfection</strong> puis rinçage ou égouttage selon le produit.</li>\n</ol>\n<p>L'automate pilote les vannes et surveille les paramètres : température et conductivité au retour, débit, durée de chaque phase. La conductivité permet de détecter les fronts de solution et de décider de récupérer la solution dans sa cuve ou de l'envoyer à l'égout.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en chimie fine, le nettoyage d'un réacteur entre deux produits se fait souvent au solvant, par ébullition à reflux, puis se valide par l'analyse du dernier solvant de rinçage : la teneur en résidu du produit précédent doit être inférieure au seuil fixé. Le résultat est joint au dossier de lot avant d'autoriser la fabrication suivante.</div>"
      },
      {
       "titre": "Contrôler et tracer le nettoyage",
       "contenu": "\n<p>On vérifie l'efficacité d'un nettoyage par des contrôles adaptés au risque :</p>\n<table>\n<thead><tr><th>Contrôle</th><th>Ce qu'il vérifie</th></tr></thead>\n<tbody>\n<tr><td>Inspection visuelle (lampe, endoscope)</td><td>absence de dépôt visible</td></tr>\n<tr><td>Conductivité et pH de l'eau de rinçage final</td><td>absence de résidu de produit de nettoyage</td></tr>\n<tr><td>Analyse de l'eau ou du solvant de rinçage</td><td>teneur en résidu du produit précédent</td></tr>\n<tr><td>Prélèvement par frottis de surface</td><td>résidu chimique ou contamination microbiologique d'une surface</td></tr>\n<tr><td>Analyse microbiologique</td><td>efficacité de la désinfection</td></tr>\n</tbody>\n</table>\n<p>Le nettoyage est enregistré : date, équipement, programme, paramètres atteints, résultats des contrôles, nom de l'opérateur. Un équipement nettoyé et contrôlé reçoit un <strong>statut</strong> (étiquette « propre », date limite d'utilisation) ; s'il n'est pas utilisé dans le délai prévu, il doit être nettoyé à nouveau.</p>\n<p>Les solutions usées et les eaux de rinçage sont des <strong>effluents</strong> : elles rejoignent la station de traitement de l'usine, souvent après neutralisation mutuelle des solutions acides et alcalines dans un bassin tampon. Récupérer et réutiliser les solutions de NEP réduit la consommation de produits et la charge polluante.</p>"
      },
      {
       "titre": "Sécurité des opérations de nettoyage",
       "contenu": "\n<p>Les opérations de nettoyage concentrent plusieurs dangers : produits corrosifs concentrés, solutions chaudes, projections lors des raccordements, dégagements gazeux, travaux dans des espaces confinés.</p>\n<ul>\n<li>Les produits concentrés sont manipulés avec les <strong>équipements de protection individuelle</strong> prévus par la fiche de données de sécurité et le poste : lunettes-masque ou écran facial, gants adaptés au produit, tablier ou combinaison, bottes.</li>\n<li>Les dépotages et transferts se font sur des aires équipées de rétention, avec <strong>douche de sécurité</strong> et <strong>lave-œil</strong> à proximité.</li>\n<li>On vérifie que la station de NEP est raccordée au bon équipement : un mauvais raccordement peut envoyer de la soude chaude dans une cuve contenant du produit ou dans un équipement en cours d'intervention.</li>\n<li>La <strong>pénétration dans une cuve</strong> pour un nettoyage manuel est un travail en <strong>espace confiné</strong> : elle exige consignation des énergies et des fluides, ventilation, mesure de l'atmosphère (oxygène, gaz toxiques et inflammables), autorisation écrite et surveillance permanente depuis l'extérieur.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un nettoyage au jet d'eau à haute pression peut provoquer des blessures graves par injection : on ne dirige jamais la lance vers une personne ou vers soi, et la gâchette ne doit jamais être bloquée en position ouverte.</div>"
      }
     ],
     "points_cles": [
      "On nettoie pour éviter la contamination croisée, rétablir la performance, maîtriser la contamination microbiologique et préparer une intervention.",
      "Une surface ne se désinfecte efficacement qu'après avoir été nettoyée.",
      "Les salissures minérales s'éliminent à l'acide, les salissures organiques à l'alcalin, souvent chaud.",
      "Température, action mécanique, concentration et temps se compensent mais aucun ne peut être nul.",
      "Un cycle de NEP enchaîne pré-rinçage, lavage alcalin, rinçage, lavage acide, rinçage final et éventuellement désinfection.",
      "La conductivité suit les solutions et vérifie l'absence de résidu au rinçage final.",
      "Un nettoyage est enregistré et l'équipement reçoit un statut « propre » limité dans le temps.",
      "On ne mélange jamais deux produits de nettoyage ; un acide mélangé à un produit chloré dégage du chlore."
     ],
     "lexique": [
      {
       "terme": "Contamination croisée",
       "def": "Pollution d'un produit par des résidus d'un produit fabriqué précédemment dans le même équipement."
      },
      {
       "terme": "Désinfection",
       "def": "Destruction ou inactivation des micro-organismes sur une surface ou dans un circuit."
      },
      {
       "terme": "Cercle de Sinner",
       "def": "Représentation des quatre facteurs du nettoyage : température, action mécanique, concentration, temps."
      },
      {
       "terme": "NEP",
       "def": "Nettoyage en place : nettoyage d'une installation par circulation de solutions, sans démontage."
      },
      {
       "terme": "Tensioactif",
       "def": "Substance qui abaisse la tension superficielle de l'eau et favorise le décollement des graisses."
      },
      {
       "terme": "Séquestrant",
       "def": "Additif qui empêche la précipitation du calcaire dans une solution de lavage."
      },
      {
       "terme": "Boule de lavage",
       "def": "Dispositif perforé placé dans une cuve pour projeter la solution sur toutes les parois."
      },
      {
       "terme": "Frottis de surface",
       "def": "Prélèvement sur une surface, à l'aide d'un écouvillon, pour rechercher un résidu ou des micro-organismes."
      },
      {
       "terme": "Espace confiné",
       "def": "Volume clos ou partiellement clos, non conçu pour y travailler, où l'atmosphère peut devenir dangereuse."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Instrumentation, régulation et conduite",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpce-instrumentation",
     "titre": "Instrumentation de procédé : mesurer pression, débit, niveau, température et composition",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Décrire une chaîne de mesure, du capteur à l'affichage en salle de contrôle.",
      "Convertir un signal 4-20 mA en valeur de la grandeur mesurée et inversement.",
      "Choisir un principe de mesure de pression, de débit, de niveau ou de température selon le fluide.",
      "Citer les analyseurs en ligne courants et leurs contraintes d'entretien.",
      "Distinguer vérification, étalonnage et ajustage d'un instrument."
     ],
     "sections": [
      {
       "titre": "La chaîne de mesure",
       "contenu": "\n<p>Une installation de procédé compte des dizaines à des milliers de points de mesure. Chacun constitue une <strong>chaîne de mesure</strong> :</p>\n<ol>\n<li>le <strong>capteur</strong> (ou élément primaire) est en contact avec le procédé et réagit à la grandeur : membrane qui se déforme sous la pression, sonde dont la résistance varie avec la température, électrode de pH ;</li>\n<li>le <strong>transmetteur</strong> convertit cette réaction en un <strong>signal normalisé</strong>, le plus souvent un courant de 4 à 20 mA, parfois superposé à une communication numérique (protocole HART) ou remplacé par un bus de terrain ;</li>\n<li>le signal est acquis par le <strong>système de contrôle-commande</strong> (automate ou système numérique de contrôle-commande, SNCC) qui le convertit en valeur affichée, l'enregistre, compare aux seuils d'alarme et l'utilise dans les régulations.</li>\n</ol>\n<p>Chaque instrument est désigné par une <strong>étendue de mesure</strong> : valeur basse et valeur haute correspondant à 4 et 20 mA. Le signal minimal de 4 mA (et non 0) permet de distinguer une mesure au minimum d'un câble coupé : un courant inférieur à 3,6 mA environ signale un défaut.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> convertir un signal 4-20 mA. Transmetteur de pression d'étendue 0 à 10 bar ; on mesure 13,6 mA.<br>1. Calculer la fraction de l'étendue : (13,6 − 4) / (20 − 4) = 9,6 / 16 = 0,6.<br>2. Appliquer à l'étendue : 0 + 0,6 × (10 − 0) = 6 bar.<br>3. Opération inverse pour 2,5 bar : 4 + 16 × (2,5 / 10) = 8 mA.<br>4. Pour une étendue qui ne commence pas à zéro (par exemple 50 à 150 °C), on applique la même formule : valeur = basse + fraction × (haute − basse).</div>\n<p>On distingue aussi les <strong>détecteurs</strong> (ou contacts) qui ne donnent qu'une information tout ou rien : détecteur de niveau haut, pressostat, thermostat, fin de course de vanne. Ils servent souvent aux sécurités.</p>"
      },
      {
       "titre": "Mesurer la pression",
       "contenu": "\n<p>Les <strong>manomètres</strong> à tube de Bourdon donnent une lecture locale. Les <strong>transmetteurs de pression</strong> utilisent une membrane dont la déformation est mesurée par un élément piézorésistif ou capacitif. On distingue les transmetteurs de pression relative, absolue et <strong>différentielle</strong> (écart entre deux prises), ces derniers servant aussi à mesurer débits, niveaux et colmatages.</p>\n<p>Quand le fluide est corrosif, visqueux, chargé ou risque de cristalliser dans les prises, on installe un <strong>séparateur à membrane</strong> relié au transmetteur par un capillaire rempli d'huile. Une vanne d'isolement et un manifold permettent d'isoler l'instrument pour le contrôler sans arrêter l'installation.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne démonte jamais un manomètre ou un transmetteur sur une ligne en service sans l'avoir isolé et décomprimé par sa purge. Une aiguille à zéro ne prouve pas que la ligne est vide : l'instrument peut être bouché ou défectueux.</div>"
      },
      {
       "titre": "Mesurer le débit",
       "contenu": "\n<table>\n<thead><tr><th>Principe</th><th>Fonctionnement</th><th>Domaine d'emploi</th></tr></thead>\n<tbody>\n<tr><td>Organe déprimogène (diaphragme, venturi)</td><td>un rétrécissement crée une pression différentielle proportionnelle au carré du débit</td><td>liquides propres, gaz, vapeur ; économique, mais crée une perte de charge</td></tr>\n<tr><td>Électromagnétique</td><td>un liquide conducteur traversant un champ magnétique génère une tension proportionnelle à sa vitesse</td><td>eau, effluents, pâte à papier, acides ; pas pour les hydrocarbures ni l'eau déminéralisée</td></tr>\n<tr><td>Massique à effet Coriolis</td><td>des tubes vibrants se déforment proportionnellement au débit massique</td><td>mesure directe en kg/h et de la masse volumique ; dosage précis</td></tr>\n<tr><td>À ultrasons</td><td>écart de temps de transit des ondes dans le sens et à contre-sens de l'écoulement</td><td>grosses conduites, mesure non intrusive possible</td></tr>\n<tr><td>Vortex</td><td>fréquence des tourbillons créés derrière un obstacle</td><td>vapeur, gaz, liquides peu visqueux</td></tr>\n<tr><td>Débitmètre à flotteur (rotamètre)</td><td>un flotteur monte dans un tube conique</td><td>indication locale, petits débits</td></tr>\n</tbody>\n</table>\n<p>En canal ouvert (station d'épuration), on mesure le débit par la hauteur d'eau en amont d'un <strong>seuil</strong> ou dans un <strong>canal venturi</strong>. La plupart des débitmètres exigent des longueurs droites en amont et en aval pour que l'écoulement soit régulier, et une conduite pleine de liquide.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un débitmètre électromagnétique installé sur une conduite partiellement remplie ou au point haut d'un circuit, où l'air s'accumule, donne une mesure fausse et instable. On l'installe de préférence sur une portion montante ou au point bas.</div>"
      },
      {
       "titre": "Mesurer le niveau",
       "contenu": "\n<p>La mesure de niveau protège contre les débordements et les marches à vide, et permet de gérer les stocks.</p>\n<ul>\n<li><strong>Pression hydrostatique</strong> : un transmetteur en fond de cuve mesure p = ρ × g × h ; pour une cuve sous pression, on utilise un transmetteur différentiel entre le fond et le ciel gazeux. La mesure dépend de la masse volumique : un changement de produit fausse le niveau si le paramétrage n'est pas modifié.</li>\n<li><strong>Radar</strong> et <strong>ultrasons</strong> : mesure du temps d'aller-retour d'une onde réfléchie par la surface ; sans contact, mais sensibles aux mousses, vapeurs denses (ultrasons) ou obstacles dans la cuve.</li>\n<li><strong>Radar filoguidé</strong> : l'onde suit un câble ou une tige plongeant dans le produit ; adapté aux interfaces entre deux liquides.</li>\n<li><strong>Flotteur</strong>, <strong>plongeur</strong> et <strong>indicateur magnétique</strong> à volets : mesures mécaniques robustes, lecture locale.</li>\n<li><strong>Détecteurs vibrants</strong>, <strong>capacitifs</strong> ou à flotteur pour les seuils (niveau haut, très haut, bas).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur les stockages de produits dangereux, la sécurité contre le débordement est assurée par un <strong>détecteur de niveau très haut</strong> indépendant de la mesure continue, qui coupe le remplissage. Ne jamais compter sur la seule mesure de niveau utilisée pour la conduite.</div>"
      },
      {
       "titre": "Mesurer la température et la composition",
       "contenu": "\n<p>Deux capteurs se partagent la mesure de température : la <strong>sonde à résistance de platine</strong> (Pt100, dont la résistance vaut 100 Ω à 0 °C et augmente avec la température), précise et utilisée jusqu'à quelques centaines de degrés ; le <strong>thermocouple</strong>, jonction de deux métaux qui génère une petite tension, adapté aux hautes températures (fours, chaudières). Le capteur est généralement placé dans un <strong>doigt de gant</strong> soudé sur la tuyauterie, qui permet de le remplacer sans ouvrir le circuit, mais qui ralentit sa réponse.</p>\n<p>Les <strong>analyseurs en ligne</strong> mesurent une propriété du produit en continu :</p>\n<table>\n<thead><tr><th>Analyseur</th><th>Usage type</th><th>Entretien</th></tr></thead>\n<tbody>\n<tr><td>pH-mètre</td><td>neutralisation, coagulation, laveurs de gaz</td><td>nettoyage et étalonnage de l'électrode avec solutions tampons</td></tr>\n<tr><td>Conductimètre</td><td>déminéralisation, NEP, purge de chaudière</td><td>nettoyage de la cellule, contrôle avec solution étalon</td></tr>\n<tr><td>Turbidimètre</td><td>eau potable, filtrats</td><td>nettoyage de la cuve de mesure, contrôle avec étalon</td></tr>\n<tr><td>Analyseur de chlore</td><td>désinfection</td><td>réactifs ou électrode, comparaison avec mesure de laboratoire</td></tr>\n<tr><td>Sonde à oxygène dissous</td><td>bassins d'aération</td><td>nettoyage de la sonde, étalonnage à l'air</td></tr>\n<tr><td>Consistancemètre</td><td>pâte à papier</td><td>comparaison avec mesures de laboratoire</td></tr>\n<tr><td>Détecteur de gaz</td><td>sécurité : gaz toxiques, inflammables, manque d'oxygène</td><td>test au gaz étalon périodique</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Fiabilité de la mesure : étalonnage et vérification",
       "contenu": "\n<p>Une mesure fausse conduit à de mauvaises décisions, et une mesure de sécurité défaillante peut ne pas déclencher. Les instruments font donc l'objet d'une gestion métrologique :</p>\n<ul>\n<li>la <strong>vérification</strong> compare l'indication de l'instrument à un étalon et conclut s'il respecte l'<strong>erreur maximale tolérée</strong> ;</li>\n<li>l'<strong>étalonnage</strong> établit la relation entre la valeur de l'étalon et l'indication de l'instrument, sur plusieurs points de l'étendue ;</li>\n<li>l'<strong>ajustage</strong> (souvent appelé « réglage ») modifie l'instrument pour réduire son écart.</li>\n</ul>\n<p>L'étalon utilisé doit être lui-même raccordé à des étalons de référence (on parle de <strong>traçabilité métrologique</strong>). Chaque instrument a une fiche de vie qui enregistre ses vérifications.</p>\n<p>Au quotidien, le pilote détecte une dérive par la <strong>cohérence des mesures</strong> : deux capteurs du même paramètre en désaccord, une mesure en ligne qui s'écarte du résultat de laboratoire, un débit d'entrée qui ne correspond pas à la variation de niveau, une valeur figée qui ne bouge plus du tout alors que le procédé fluctue.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> avant d'intervenir sur un instrument utilisé par une régulation ou une sécurité, on prévient la salle de contrôle et l'on met la boucle en mode manuel ou la sécurité en mode prévu par la procédure (avec autorisation). Débrancher un transmetteur en boucle fermée peut faire ouvrir ou fermer une vanne en grand ou déclencher l'arrêt de l'installation.</div>"
      }
     ],
     "points_cles": [
      "Une chaîne de mesure associe capteur, transmetteur et système de contrôle-commande.",
      "Valeur = basse + (I − 4) / 16 × (haute − basse) pour un signal 4-20 mA ; moins de 4 mA signale un défaut.",
      "Les transmetteurs de pression différentielle mesurent aussi débits, niveaux et colmatages.",
      "Le débitmètre électromagnétique exige un liquide conducteur ; le Coriolis mesure directement le débit massique.",
      "Une mesure de niveau hydrostatique dépend de la masse volumique du produit.",
      "La sécurité de débordement repose sur un détecteur de niveau très haut indépendant.",
      "Les analyseurs en ligne exigent un entretien et un contrôle réguliers par rapport au laboratoire.",
      "Vérification, étalonnage et ajustage sont trois opérations différentes de métrologie."
     ],
     "lexique": [
      {
       "terme": "Transmetteur",
       "def": "Appareil qui convertit la réaction du capteur en signal normalisé."
      },
      {
       "terme": "Étendue de mesure",
       "def": "Plage comprise entre les valeurs correspondant à 4 et 20 mA."
      },
      {
       "terme": "SNCC",
       "def": "Système numérique de contrôle-commande qui centralise mesures, régulations et alarmes d'une installation."
      },
      {
       "terme": "Pression différentielle",
       "def": "Écart de pression entre deux points, mesuré par un transmetteur à deux prises."
      },
      {
       "terme": "Organe déprimogène",
       "def": "Rétrécissement (diaphragme, venturi) qui crée une pression différentielle liée au débit."
      },
      {
       "terme": "Pt100",
       "def": "Sonde de température en platine de résistance 100 Ω à 0 °C."
      },
      {
       "terme": "Doigt de gant",
       "def": "Tube fermé soudé dans une tuyauterie, qui reçoit un capteur de température."
      },
      {
       "terme": "Analyseur en ligne",
       "def": "Instrument qui mesure en continu une propriété du produit : pH, conductivité, turbidité, chlore."
      },
      {
       "terme": "Étalonnage",
       "def": "Comparaison des indications d'un instrument aux valeurs d'un étalon sur plusieurs points."
      },
      {
       "terme": "Erreur maximale tolérée",
       "def": "Écart maximal admis entre l'indication d'un instrument et la valeur vraie."
      }
     ]
    },
    {
     "id": "bpce-regulation",
     "titre": "Réguler un procédé : boucles et correcteurs",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les éléments d'une boucle de régulation et les grandeurs associées (mesure, consigne, sortie, perturbation).",
      "Distinguer régulation en boucle ouverte, en boucle fermée et en tout ou rien.",
      "Déterminer le sens d'action d'un régulateur et le comportement d'une vanne en cas de défaut.",
      "Expliquer l'effet des actions proportionnelle, intégrale et dérivée.",
      "Reconnaître les structures de régulation courantes : cascade, rapport, tendance."
     ],
     "sections": [
      {
       "titre": "Pourquoi réguler",
       "contenu": "\n<p>Un procédé est soumis en permanence à des <strong>perturbations</strong> : variation de la qualité de l'eau brute, de la température de l'eau de refroidissement, de la pression de vapeur, du débit demandé par l'aval. Sans correction, les grandeurs importantes s'écartent de leur valeur souhaitée. La <strong>régulation</strong> maintient automatiquement une grandeur, la <strong>grandeur réglée</strong>, égale à une valeur de consigne, en agissant sur une <strong>grandeur réglante</strong>.</p>\n<table>\n<thead><tr><th>Terme</th><th>Symbole courant</th><th>Exemple : réchauffeur à vapeur</th></tr></thead>\n<tbody>\n<tr><td>Grandeur réglée (mesure)</td><td>X ou PV</td><td>température de sortie du produit</td></tr>\n<tr><td>Consigne</td><td>W ou SP</td><td>75 °C</td></tr>\n<tr><td>Écart</td><td>ε = W − X</td><td>différence entre consigne et mesure</td></tr>\n<tr><td>Grandeur réglante</td><td></td><td>débit de vapeur</td></tr>\n<tr><td>Sortie du régulateur (commande)</td><td>Y ou OP</td><td>ouverture de la vanne vapeur, en %</td></tr>\n<tr><td>Perturbations</td><td>Z</td><td>débit et température d'entrée du produit, pression vapeur</td></tr>\n</tbody>\n</table>\n<p>On distingue la <strong>régulation</strong>, qui maintient la mesure malgré les perturbations à consigne fixe, et l'<strong>asservissement</strong>, qui fait suivre à la mesure une consigne variable (par exemple une rampe de température programmée dans un réacteur).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une boucle de régulation fermée comprend toujours un capteur-transmetteur qui mesure, un régulateur qui compare à la consigne et calcule une commande, un <strong>actionneur</strong> (le plus souvent une vanne de régulation, parfois un variateur de vitesse) qui agit sur le procédé.</div>"
      },
      {
       "titre": "Boucle ouverte, boucle fermée, tout ou rien",
       "contenu": "\n<p>En <strong>boucle ouverte</strong>, la commande est fixée sans mesurer le résultat : un opérateur règle une pompe doseuse à 40 % et ne vérifie pas le pH obtenu. Toute perturbation passe sans correction.</p>\n<p>En <strong>boucle fermée</strong>, la mesure est renvoyée au régulateur, qui corrige la commande tant qu'un écart subsiste. C'est le principe de la <strong>rétroaction</strong>.</p>\n<p>La <strong>régulation tout ou rien</strong> est la forme la plus simple de boucle fermée : l'actionneur est soit totalement ouvert, soit totalement fermé. On l'utilise avec un <strong>différentiel</strong> (hystérésis) pour éviter des basculements trop fréquents : une pompe de relevage démarre à niveau haut et s'arrête à niveau bas. La grandeur oscille alors entre deux valeurs, ce qui est acceptable pour un niveau de bâche mais pas pour une température de réaction.</p>\n<p>La <strong>régulation continue</strong> module la commande entre 0 et 100 %. Le régulateur peut fonctionner en mode <strong>automatique</strong> (il calcule la commande), en mode <strong>manuel</strong> (l'opérateur fixe la commande) ou en mode <strong>cascade</strong> ou externe (sa consigne vient d'un autre régulateur).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une boucle laissée en manuel après une intervention est une boucle ouverte : la grandeur dérivera à la prochaine perturbation sans que rien ne la corrige. Le retour en automatique, et la vérification que la boucle est stable, font partie de la fin de toute intervention.</div>"
      },
      {
       "titre": "Sens d'action et position de sécurité",
       "contenu": "\n<p>Le <strong>sens d'action</strong> du régulateur doit correspondre au procédé :</p>\n<ul>\n<li>en <strong>action inverse</strong>, la commande diminue quand la mesure augmente : si la température dépasse la consigne, on ferme la vanne de vapeur ;</li>\n<li>en <strong>action directe</strong>, la commande augmente quand la mesure augmente : si la température dépasse la consigne, on ouvre la vanne d'eau de refroidissement.</li>\n</ul>\n<p>Le sens d'action dépend aussi de la vanne. Une vanne pneumatique est soit <strong>normalement fermée</strong> (elle se ferme par son ressort en cas de perte d'air : on la dit « manque d'air ferme », souvent notée FC, fail close), soit <strong>normalement ouverte</strong> (« manque d'air ouvre », FO, fail open). Ce choix est fait à la conception selon la <strong>position de sécurité</strong> : la vanne de vapeur d'un réacteur est en général FC (pas de chauffage en cas de panne), la vanne d'eau de refroidissement FO (refroidissement maximal en cas de panne).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déterminer le sens d'action d'un régulateur.<br>1. Supposer que la mesure augmente au-dessus de la consigne.<br>2. Déterminer l'action physique nécessaire sur le procédé : ici, pour faire baisser le niveau d'une cuve dont on règle la vidange, il faut augmenter le débit de sortie.<br>3. Déterminer ce que doit faire le signal : si la vanne est FC (le signal ouvre la vanne), il faut augmenter le signal.<br>4. Conclure : la mesure monte, le signal monte, l'action est directe.<br>5. Si la vanne était FO (le signal ferme la vanne), il faudrait diminuer le signal : l'action serait inverse. Une erreur de sens d'action transforme la régulation en emballement, la vanne partant en butée.</div>"
      },
      {
       "titre": "Les actions P, I et D",
       "contenu": "\n<p>Le régulateur continu le plus répandu est le régulateur <strong>PID</strong>, qui combine trois actions.</p>\n<p>L'<strong>action proportionnelle</strong> (P) donne une commande proportionnelle à l'écart. Elle est caractérisée par le <strong>gain</strong> K ou par la <strong>bande proportionnelle</strong> Xp = 100 / K (en %). Un gain élevé corrige vite et fort, mais rend la boucle instable s'il est trop grand. Seule, l'action P laisse un <strong>écart statique</strong> (une erreur permanente) après une perturbation.</p>\n<p>L'<strong>action intégrale</strong> (I) ajoute une correction qui augmente tant que l'écart persiste. Elle annule l'écart statique. Elle est réglée par le <strong>temps d'intégrale</strong> Ti (en secondes ou minutes) : plus Ti est petit, plus l'action est forte, avec un risque d'oscillations.</p>\n<p>L'<strong>action dérivée</strong> (D) réagit à la vitesse de variation de la mesure : elle anticipe. Elle est utile sur les procédés lents (températures de grands réacteurs) mais amplifie le bruit de mesure ; on ne l'utilise pas sur les débits ni les pressions bruités.</p>\n<table>\n<thead><tr><th>Réglage</th><th>Effet si on l'augmente trop</th><th>Effet si on le diminue trop</th></tr></thead>\n<tbody>\n<tr><td>Gain K</td><td>oscillations, instabilité</td><td>réponse lente, grand écart transitoire</td></tr>\n<tr><td>Action intégrale (Ti trop petit)</td><td>oscillations lentes, dépassements</td><td>retour à la consigne très lent</td></tr>\n<tr><td>Action dérivée</td><td>vanne nerveuse, sensibilité au bruit</td><td>pas d'anticipation</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le réglage des paramètres PID relève du technicien d'instrumentation ou du régleur, selon une méthode (essai indiciel, méthode de Ziegler-Nichols ou outils d'autoréglage). Le pilote ne modifie pas ces paramètres, mais il sait reconnaître une boucle qui oscille, une vanne en butée ou un écart qui ne se résorbe pas, et il le signale.</div>"
      },
      {
       "titre": "Lire la réponse d'une boucle",
       "contenu": "\n<p>Sur l'écran de supervision, la <strong>courbe de tendance</strong> d'une boucle montre en même temps la consigne, la mesure et la commande. On apprécie la qualité d'une régulation par quelques critères :</p>\n<ul>\n<li>la <strong>stabilité</strong> : après une perturbation, la mesure revient vers la consigne sans osciller indéfiniment ;</li>\n<li>la <strong>précision</strong> : l'écart résiduel est nul ou faible ;</li>\n<li>la <strong>rapidité</strong> : le <strong>temps de réponse</strong>, souvent défini comme le temps pour rester à moins de 5 % de la variation finale ;</li>\n<li>le <strong>dépassement</strong> : l'amplitude du premier pic au-delà de la consigne, exprimée en % de la variation.</li>\n</ul>\n<p>Lorsqu'une boucle se comporte mal, la cause n'est pas toujours le réglage. Il faut aussi vérifier la <strong>vanne</strong> : une vanne qui colle (frottements de presse-étoupe, positionneur défaillant) produit des oscillations en dents de scie ; une vanne surdimensionnée travaille près de sa fermeture et réagit brutalement ; une vanne en butée à 100 % ne peut plus corriger, la consigne est hors d'atteinte. Il faut aussi vérifier le <strong>capteur</strong> : une mesure bruitée ou figée trompe le régulateur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> lorsque la commande reste en butée longtemps, l'action intégrale continue d'accumuler l'écart. Au retour dans la plage, la boucle peut provoquer un fort dépassement. Les régulateurs modernes limitent ce phénomène, mais le pilote doit s'en méfier lors des démarrages et des changements de consigne importants.</div>"
      },
      {
       "titre": "Structures de régulation courantes",
       "contenu": "\n<p>Au-delà de la boucle simple, plusieurs structures améliorent la maîtrise du procédé.</p>\n<table>\n<thead><tr><th>Structure</th><th>Principe</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Cascade</td><td>un régulateur maître (grandeur lente) fixe la consigne d'un régulateur esclave (grandeur rapide)</td><td>la température du réacteur fixe la consigne de température de la double enveloppe ; la température d'un réchauffeur fixe la consigne de débit de vapeur</td></tr>\n<tr><td>Régulation de rapport</td><td>un débit asservi suit un débit principal dans une proportion fixée</td><td>débit de coagulant proportionnel au débit d'eau brute ; débit de réactif B = 1,2 × débit de réactif A</td></tr>\n<tr><td>Régulation par tendance (anticipation, ou feedforward)</td><td>on mesure une perturbation et on corrige avant qu'elle n'affecte la grandeur réglée</td><td>on augmente la vapeur dès que le débit de produit à chauffer augmente</td></tr>\n<tr><td>Partage d'étendue (split range)</td><td>une seule sortie de régulateur commande deux vannes sur deux parties de l'étendue</td><td>de 0 à 50 % ouverture de l'eau froide, de 50 à 100 % ouverture de la vapeur</td></tr>\n<tr><td>Régulation sélective (override)</td><td>le plus prioritaire de deux régulateurs prend la main</td><td>limitation de la pression d'une colonne qui prend le pas sur la régulation de température</td></tr>\n</tbody>\n</table>\n<p>Les régulations ne sont pas des sécurités. Les <strong>fonctions instrumentées de sécurité</strong> (arrêts d'urgence automatiques, coupures sur niveau très haut ou pression très haute) sont réalisées par des chaînes indépendantes, avec leurs propres capteurs et actionneurs, et ne doivent jamais être shuntées sans autorisation formelle.</p>"
      }
     ],
     "points_cles": [
      "Une boucle fermée comprend capteur-transmetteur, régulateur et actionneur ; elle corrige les perturbations.",
      "La régulation tout ou rien fait osciller la grandeur entre deux seuils ; la régulation continue module la commande.",
      "Le sens d'action se détermine en raisonnant sur le procédé puis sur le type de vanne (FC ou FO).",
      "La position de sécurité d'une vanne est choisie pour mettre le procédé dans l'état le moins dangereux en cas de panne.",
      "L'action P corrige vite mais laisse un écart statique, l'action I l'annule, l'action D anticipe.",
      "Un gain ou une action intégrale trop forts font osciller la boucle.",
      "Une boucle qui se comporte mal peut venir de la vanne ou du capteur et pas seulement du réglage.",
      "Cascade, rapport, tendance et partage d'étendue sont les structures courantes ; les régulations ne remplacent jamais les sécurités."
     ],
     "lexique": [
      {
       "terme": "Grandeur réglée",
       "def": "Grandeur que la régulation maintient égale à la consigne."
      },
      {
       "terme": "Grandeur réglante",
       "def": "Grandeur sur laquelle on agit pour corriger la grandeur réglée."
      },
      {
       "terme": "Consigne",
       "def": "Valeur souhaitée de la grandeur réglée."
      },
      {
       "terme": "Perturbation",
       "def": "Grandeur extérieure non maîtrisée qui fait varier la grandeur réglée."
      },
      {
       "terme": "Action inverse",
       "def": "Fonctionnement d'un régulateur dont la sortie diminue quand la mesure augmente."
      },
      {
       "terme": "Bande proportionnelle",
       "def": "Variation de l'écart, en % de l'étendue, qui fait varier la commande de 100 % ; Xp = 100 / K."
      },
      {
       "terme": "Écart statique",
       "def": "Écart permanent entre mesure et consigne laissé par une régulation proportionnelle seule."
      },
      {
       "terme": "Cascade",
       "def": "Structure où un régulateur maître fournit la consigne d'un régulateur esclave."
      },
      {
       "terme": "Régulation de rapport",
       "def": "Régulation qui maintient un débit proportionnel à un autre."
      },
      {
       "terme": "Position de sécurité",
       "def": "Position prise par une vanne en cas de perte d'énergie de commande."
      }
     ]
    },
    {
     "id": "bpce-conduite-procede",
     "titre": "Conduire un procédé : démarrages, arrêts et états dégradés",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Organiser une prise de poste et une relève de quart efficaces.",
      "Préparer et réaliser un démarrage et un arrêt en respectant les phases transitoires.",
      "Hiérarchiser et traiter les alarmes affichées par la supervision.",
      "Détecter un état dégradé et adapter la conduite pour revenir à la normale ou mettre en sécurité.",
      "Rendre compte des événements de façon claire et exploitable."
     ],
     "sections": [
      {
       "titre": "Les états d'une installation",
       "contenu": "\n<p>Une installation passe par différents <strong>états de fonctionnement</strong>, qui demandent chacun une conduite particulière :</p>\n<table>\n<thead><tr><th>État</th><th>Description</th><th>Enjeu pour le pilote</th></tr></thead>\n<tbody>\n<tr><td>À l'arrêt, en sécurité</td><td>énergies et fluides isolés ou disponibles selon le cas</td><td>préparer la remise en service, vérifier les consignations levées</td></tr>\n<tr><td>Démarrage</td><td>montée progressive en débit, température, pression</td><td>phase transitoire, risque élevé, produits souvent hors spécification</td></tr>\n<tr><td>Marche normale (régime établi)</td><td>grandeurs stables dans leurs plages</td><td>surveiller, optimiser, prélever</td></tr>\n<tr><td>Changement de cadence ou de sorte</td><td>modification des consignes de production</td><td>passer d'un régime à l'autre sans sortir des limites</td></tr>\n<tr><td>Marche dégradée</td><td>fonctionnement avec un équipement défaillant ou une grandeur hors plage</td><td>maintenir la sécurité, limiter les pertes, revenir à la normale</td></tr>\n<tr><td>Arrêt normal</td><td>séquence programmée de mise à l'arrêt</td><td>vidanger, rincer, mettre en sécurité</td></tr>\n<tr><td>Arrêt d'urgence</td><td>mise en sécurité immédiate, automatique ou manuelle</td><td>vérifier que la mise en sécurité est effective, alerter</td></tr>\n</tbody>\n</table>\n<p>Les <strong>phases transitoires</strong> (démarrages, arrêts, changements de régime) concentrent une part importante des incidents et des accidents : les régulations sont souvent en manuel, les grandeurs varient vite, les interventions humaines sont nombreuses. Elles sont toujours décrites par un mode opératoire écrit.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la conduite consiste à maintenir chaque grandeur dans sa <strong>plage de fonctionnement normal</strong>, à l'intérieur de <strong>limites opératoires</strong> au-delà desquelles la qualité est perdue, elles-mêmes à l'intérieur de <strong>limites de sécurité</strong> qui déclenchent alarmes et arrêts automatiques.</div>"
      },
      {
       "titre": "Prise de poste et relève",
       "contenu": "\n<p>Les installations continues fonctionnent jour et nuit, en équipes successives (en <strong>quarts</strong>). La <strong>relève</strong> est un moment critique : une information mal transmise peut conduire à une erreur grave, comme une remise en service d'un équipement encore consigné.</p>\n<p>Une relève de qualité se fait de préférence sur le terrain et en salle de contrôle, en face à face, et porte sur :</p>\n<ul>\n<li>l'état de marche de l'installation, les cadences, les fabrications en cours ;</li>\n<li>les écarts et événements du quart : alarmes, réglages modifiés, incidents, résultats d'analyses hors tolérance ;</li>\n<li>les équipements indisponibles, consignés, en maintenance, les sécurités inhibées et les permis de travail en cours ;</li>\n<li>les opérations à réaliser : prélèvements, dépotages, changements de sorte, lavages de filtres ;</li>\n<li>les consignes particulières de l'encadrement.</li>\n</ul>\n<p>Le <strong>cahier de quart</strong> (ou main courante, souvent informatisé) conserve ces informations par écrit. Le pilote entrant fait ensuite une <strong>ronde</strong> pour constater par lui-même l'état de l'installation : fuites, bruits, vibrations, odeurs, niveaux à glace, manomètres locaux, état des rétentions.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans de nombreux sites classés Seveso, les retours d'expérience d'accidents ont conduit à formaliser la relève avec une liste de points à aborder et une signature des deux pilotes. Ce formalisme évite qu'un sujet important soit oublié en fin de nuit.</div>"
      },
      {
       "titre": "Démarrer et arrêter une installation",
       "contenu": "\n<p>Un <strong>démarrage</strong> se prépare. Avant toute mise en service, le pilote vérifie :</p>\n<ol>\n<li>que les travaux sont terminés, les <strong>permis de travail</strong> clôturés et les consignations levées ;</li>\n<li>que le lignage est correct : vannes ouvertes et fermées conformément au schéma, purges fermées, joints pleins retirés ;</li>\n<li>que les <strong>utilités</strong> sont disponibles : électricité, air instrument, vapeur, eau de refroidissement, azote, vide ;</li>\n<li>que les instruments et les sécurités sont opérationnels et non inhibés ;</li>\n<li>que les matières premières sont disponibles et conformes, et que les capacités de réception du produit sont prêtes.</li>\n</ol>\n<p>La mise en service se fait ensuite étape par étape selon le mode opératoire : mise en circulation, purges d'air, montée progressive en température (pour éviter les chocs thermiques et les coups de bélier), montée en débit, passage des régulations en automatique quand les grandeurs sont proches des consignes, puis premiers prélèvements de contrôle. Le produit hors spécification fabriqué pendant le démarrage est dirigé vers un stockage dédié pour être recyclé ou retraité.</p>\n<p>L'<strong>arrêt normal</strong> suit la logique inverse : réduction de cadence, arrêt des alimentations, refroidissement, vidange, rinçage et éventuellement inertage ou mise sous azote, puis isolement. L'installation doit être laissée dans un état connu et décrit au cahier de quart.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser une phase transitoire en sécurité.<br>1. Lire entièrement le mode opératoire avant de commencer et repérer les points d'arrêt et les vérifications.<br>2. Annoncer l'opération à la salle de contrôle et aux équipes concernées.<br>3. Exécuter une étape à la fois, en vérifiant l'effet attendu (débit qui s'établit, température qui monte) avant de passer à la suivante.<br>4. Cocher chaque étape réalisée sur la fiche ou dans le système.<br>5. En cas d'écart avec le comportement attendu, s'arrêter dans une position sûre et demander de l'aide plutôt que d'improviser.</div>"
      },
      {
       "titre": "Surveiller et traiter les alarmes",
       "contenu": "\n<p>La supervision présente des synoptiques, des courbes de tendance et une liste d'<strong>alarmes</strong>. Une alarme signale qu'une grandeur a franchi un seuil (haut H, très haut HH, bas L, très bas LL), qu'un équipement est en défaut ou qu'un écart de régulation dure trop longtemps. Les alarmes sont classées par <strong>priorité</strong> selon la gravité de la conséquence et le temps disponible pour réagir.</p>\n<p>Face à une alarme, le pilote suit une démarche :</p>\n<ul>\n<li><strong>acquitter</strong> l'alarme (ce qui signifie qu'on l'a vue, pas qu'on l'a traitée) ;</li>\n<li><strong>vérifier</strong> la réalité du phénomène par une autre mesure, une tendance, une observation sur le terrain ;</li>\n<li><strong>appliquer la consigne</strong> associée à l'alarme, si elle existe (fiche réflexe) ;</li>\n<li><strong>rechercher la cause</strong> et la traiter ou la faire traiter ;</li>\n<li><strong>consigner</strong> l'événement.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une avalanche d'alarmes lors d'un incident peut masquer la première, qui indique souvent la cause. On cherche dans l'historique l'alarme initiale. Inversement, une alarme qui sonne en permanence et qu'on acquitte machinalement finit par ne plus être vue : il faut la signaler pour qu'elle soit corrigée (seuil mal réglé, capteur défectueux), jamais la masquer de sa propre initiative.</div>"
      },
      {
       "titre": "Reconnaître et conduire un état dégradé",
       "contenu": "\n<p>Un <strong>état dégradé</strong> se reconnaît souvent avant l'alarme, par l'observation des tendances : une ouverture de vanne qui augmente lentement pour tenir la même température révèle un encrassement ; une pression différentielle de filtre qui monte plus vite que d'habitude, une consommation de réactif inhabituelle, un bruit nouveau sur une pompe.</p>\n<p>Face à un état dégradé, le pilote doit choisir entre trois attitudes, selon les consignes et le niveau de risque :</p>\n<table>\n<thead><tr><th>Attitude</th><th>Quand</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Corriger et poursuivre</td><td>cause identifiée, action simple dans le champ d'autonomie du pilote</td><td>basculer sur la pompe de secours, lancer le lavage d'un filtre</td></tr>\n<tr><td>Adapter la conduite (marche dégradée)</td><td>équipement indisponible mais sécurité assurée</td><td>réduire la cadence pour rester dans les capacités d'un échangeur encrassé</td></tr>\n<tr><td>Mettre en sécurité</td><td>risque pour les personnes, l'installation ou l'environnement, ou situation non comprise</td><td>arrêt de l'alimentation d'un réacteur dont la température monte malgré le refroidissement maximal</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans le doute sur la sécurité, on met l'installation en position sûre et on alerte. La perte de production d'un arrêt est toujours préférable aux conséquences d'un accident. Le pilote ne doit jamais neutraliser une sécurité pour maintenir la production.</div>"
      },
      {
       "titre": "Rendre compte et améliorer",
       "contenu": "\n<p>Le <strong>compte rendu</strong> d'un événement doit permettre à un lecteur qui n'était pas présent de comprendre ce qui s'est passé. Il précise : la date et l'heure, l'équipement concerné avec son repère, les constats (valeurs mesurées, observations), les actions réalisées et leur effet, l'état final de l'installation et ce qui reste à faire. On distingue clairement les faits observés des hypothèses.</p>\n<p>Les écarts significatifs donnent lieu à une <strong>fiche d'événement</strong> (ou fiche d'anomalie, de presqu'accident) qui alimente le <strong>retour d'expérience</strong> : analyse des causes, actions correctives (réparer) et préventives (éviter que cela se reproduise), mise à jour des modes opératoires. Le pilote, qui connaît l'installation au quotidien, est le mieux placé pour proposer des <strong>améliorations</strong> : simplification d'une manœuvre, ajout d'un repérage, modification d'un seuil d'alarme, économie d'énergie ou de réactif.</p>\n<p>Les indicateurs de conduite (taux de marche, nombre d'arrêts non programmés, consommations spécifiques par tonne produite, taux de produits non conformes) permettent de mesurer l'effet de ces améliorations dans le temps.</p>"
      }
     ],
     "points_cles": [
      "Les phases transitoires (démarrages, arrêts, changements de régime) concentrent les risques et suivent toujours un mode opératoire.",
      "La relève de quart se fait en face à face, avec le cahier de quart, puis une ronde de terrain.",
      "Avant un démarrage, on vérifie permis clôturés, lignage, utilités, instruments, sécurités et matières.",
      "On exécute une phase transitoire étape par étape en vérifiant l'effet de chaque action.",
      "Acquitter une alarme ne la traite pas : il faut vérifier, appliquer la consigne, chercher la cause et consigner.",
      "Face à un état dégradé : corriger, adapter la conduite ou mettre en sécurité selon le risque.",
      "Dans le doute, on met en sécurité et on alerte ; on ne neutralise jamais une sécurité pour produire.",
      "Un compte rendu distingue faits et hypothèses et alimente le retour d'expérience."
     ],
     "lexique": [
      {
       "terme": "Phase transitoire",
       "def": "Période pendant laquelle les grandeurs d'une installation évoluent : démarrage, arrêt, changement de régime."
      },
      {
       "terme": "Quart",
       "def": "Période de travail d'une équipe dans une organisation en travail posté continu."
      },
      {
       "terme": "Cahier de quart",
       "def": "Registre où sont consignés les événements, réglages et consignes de chaque équipe."
      },
      {
       "terme": "Lignage",
       "def": "Mise en position des vannes d'un circuit conformément au schéma pour une opération donnée."
      },
      {
       "terme": "Utilités",
       "def": "Fluides et énergies nécessaires au fonctionnement : électricité, vapeur, air, eau de refroidissement, azote."
      },
      {
       "terme": "Acquittement",
       "def": "Action qui signale qu'une alarme a été vue par l'opérateur."
      },
      {
       "terme": "Fiche réflexe",
       "def": "Consigne courte décrivant les actions immédiates à réaliser face à une alarme ou un incident."
      },
      {
       "terme": "Marche dégradée",
       "def": "Fonctionnement maintenu malgré un défaut, dans des conditions adaptées et sûres."
      },
      {
       "terme": "Retour d'expérience",
       "def": "Démarche d'analyse des événements pour en tirer des actions d'amélioration."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Sécurité, qualité et maintenance des installations",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bpce-risques-procedes",
     "titre": "Risque chimique et sécurité des procédés",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les dangers d'un produit à partir de son classement et de son étiquetage CLP.",
      "Expliquer les notions de valeur limite d'exposition professionnelle et les moyens de prévention collective et individuelle.",
      "Décrire les conditions d'une explosion et le principe du zonage ATEX.",
      "Situer une installation dans la réglementation ICPE et Seveso.",
      "Expliquer le rôle du permis de travail, de la consignation et des barrières de sécurité."
     ],
     "sections": [
      {
       "titre": "Danger, risque et classement des produits",
       "contenu": "\n<p>Le <strong>danger</strong> est la propriété intrinsèque d'un produit ou d'une situation de pouvoir causer un dommage (un acide est corrosif). Le <strong>risque</strong> combine la probabilité qu'un dommage survienne et sa gravité ; il dépend des conditions d'exposition (quantité, durée, protections). La prévention cherche à réduire le risque, en supprimant le danger quand c'est possible.</p>\n<p>Dans l'Union européenne, les dangers des produits chimiques sont classés et étiquetés selon le <strong>règlement CLP</strong> (règlement (CE) n° 1272/2008, relatif à la classification, à l'étiquetage et à l'emballage). L'étiquette comporte :</p>\n<ul>\n<li>des <strong>pictogrammes</strong> de danger : losanges à bordure rouge sur fond blanc, au nombre de neuf (explosif, inflammable, comburant, gaz sous pression, corrosif, toxicité aiguë, nocif ou irritant, danger pour la santé à long terme, danger pour l'environnement aquatique) ;</li>\n<li>une <strong>mention d'avertissement</strong> : « Danger » (catégories les plus graves) ou « Attention » ;</li>\n<li>des <strong>mentions de danger</strong> codées H (par exemple H314 : provoque de graves brûlures de la peau et de graves lésions des yeux) ;</li>\n<li>des <strong>conseils de prudence</strong> codés P (par exemple P280 : porter des gants, des vêtements, un équipement de protection des yeux et du visage).</li>\n</ul>\n<p>La <strong>fiche de données de sécurité</strong> (FDS), en seize rubriques, complète l'étiquette ; sa lecture est détaillée dans le bloc d'analyse de documents. Le règlement <strong>REACH</strong> encadre l'enregistrement et l'utilisation des substances et impose la transmission de ces informations le long de la chaîne d'approvisionnement.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les agents chimiques <strong>CMR</strong> (cancérogènes, mutagènes, toxiques pour la reproduction) font l'objet de règles renforcées : substitution obligatoire quand elle est techniquement possible, travail en système clos, suivi de l'exposition et traçabilité des salariés exposés.</div>"
      },
      {
       "titre": "Exposition des travailleurs et prévention",
       "contenu": "\n<p>Un produit pénètre dans l'organisme par <strong>inhalation</strong> (voie principale dans l'industrie), par <strong>contact cutané</strong> ou oculaire, et par <strong>ingestion</strong> (mains sales, aliments contaminés). Pour l'inhalation, la réglementation fixe des <strong>valeurs limites d'exposition professionnelle</strong> (VLEP) :</p>\n<ul>\n<li>la <strong>VLEP-8 h</strong> : concentration moyenne maximale sur une journée de travail de 8 heures ;</li>\n<li>la <strong>VLEP court terme</strong> (VLCT) : concentration maximale sur 15 minutes, pour les effets immédiats.</li>\n</ul>\n<p>L'employeur évalue les risques chimiques et les reporte dans le <strong>document unique d'évaluation des risques professionnels</strong>. Les mesures de prévention suivent un ordre de priorité :</p>\n<ol>\n<li>supprimer ou <strong>substituer</strong> le produit par un produit moins dangereux ;</li>\n<li>travailler en <strong>système clos</strong> (transferts par tuyauteries, dépotage par raccords étanches, prélèvements en circuit fermé) ;</li>\n<li><strong>capter à la source</strong> les vapeurs et poussières (aspiration localisée) et ventiler les locaux ;</li>\n<li>organiser : limiter le nombre de personnes exposées et la durée, former, signaliser ;</li>\n<li>en dernier recours, fournir des <strong>équipements de protection individuelle</strong> (EPI) adaptés : gants dont le matériau résiste au produit, lunettes-masque, écran facial, appareil de protection respiratoire avec la bonne cartouche, combinaison.</li>\n</ol>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une cartouche filtrante ne protège ni contre le manque d'oxygène ni au-delà de sa capacité. Dans une atmosphère appauvrie en oxygène (cuve inertée à l'azote, espace confiné) seul un appareil respiratoire isolant protège. L'azote est inodore et invisible : plusieurs accidents mortels surviennent chaque année par anoxie lors de pénétrations dans des capacités inertées.</div>"
      },
      {
       "titre": "Incendie et explosion",
       "contenu": "\n<p>Une <strong>combustion</strong> exige la réunion d'un <strong>combustible</strong>, d'un <strong>comburant</strong> (l'oxygène de l'air, le plus souvent) et d'une <strong>source d'inflammation</strong> (étincelle, flamme, surface chaude, électricité statique) : c'est le <strong>triangle du feu</strong>. La prévention consiste à supprimer au moins l'un de ces éléments.</p>\n<p>Quelques grandeurs caractérisent l'inflammabilité :</p>\n<ul>\n<li>le <strong>point d'éclair</strong> : température la plus basse à laquelle un liquide émet assez de vapeurs pour s'enflammer au contact d'une flamme ; un liquide dont le point d'éclair est inférieur à la température ambiante est particulièrement dangereux ;</li>\n<li>le <strong>domaine d'explosivité</strong>, entre la limite inférieure (LIE) et la limite supérieure (LSE) : plage de concentration d'un gaz ou d'une vapeur dans l'air dans laquelle le mélange peut exploser ;</li>\n<li>la <strong>température d'auto-inflammation</strong> : température à laquelle le mélange s'enflamme sans flamme ni étincelle.</li>\n</ul>\n<p>Une <strong>atmosphère explosive</strong> (ATEX) est un mélange avec l'air de gaz, vapeurs, brouillards ou poussières combustibles, dans lequel la combustion se propage à tout le mélange après inflammation. L'employeur doit délimiter des <strong>zones</strong> selon la probabilité de présence d'une ATEX :</p>\n<table>\n<thead><tr><th>Présence d'ATEX</th><th>Gaz et vapeurs</th><th>Poussières</th></tr></thead>\n<tbody>\n<tr><td>Permanente ou fréquente</td><td>zone 0</td><td>zone 20</td></tr>\n<tr><td>Occasionnelle en fonctionnement normal</td><td>zone 1</td><td>zone 21</td></tr>\n<tr><td>Accidentelle et de courte durée</td><td>zone 2</td><td>zone 22</td></tr>\n</tbody>\n</table>\n<p>Dans ces zones, le matériel électrique et non électrique doit être d'une catégorie adaptée, et les travaux par points chauds sont soumis à permis de feu.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un transvasement de solvant, le pilote raccorde systématiquement la pince de mise à la terre et de liaison équipotentielle entre le fût et la cuve avant d'ouvrir la vanne. L'écoulement d'un liquide isolant crée des charges électrostatiques capables de produire une étincelle suffisante pour enflammer les vapeurs.</div>"
      },
      {
       "titre": "Installations classées et établissements Seveso",
       "contenu": "\n<p>Les usines chimiques, les papeteries, de nombreuses stations de traitement et les stockages de produits dangereux sont des <strong>installations classées pour la protection de l'environnement</strong> (ICPE). Selon l'importance des activités et des quantités, définies par une nomenclature, elles relèvent de trois régimes : <strong>déclaration</strong>, <strong>enregistrement</strong> ou <strong>autorisation</strong>. Les installations autorisées fonctionnent selon un <strong>arrêté préfectoral</strong> qui fixe leurs prescriptions (valeurs limites de rejet, surveillance, moyens de sécurité). Elles sont contrôlées par l'inspection des installations classées.</p>\n<p>Les établissements qui détiennent de grandes quantités de substances dangereuses relèvent en plus de la directive européenne dite <strong>Seveso</strong> (directive 2012/18/UE, dite Seveso III), avec deux niveaux : <strong>seuil bas</strong> et <strong>seuil haut</strong>. Ils doivent notamment :</p>\n<ul>\n<li>réaliser une <strong>étude de dangers</strong> qui identifie les accidents possibles, leurs probabilités, leurs effets et les mesures de maîtrise des risques ;</li>\n<li>mettre en place une <strong>politique de prévention des accidents majeurs</strong> et, pour le seuil haut, un système de gestion de la sécurité ;</li>\n<li>disposer d'un <strong>plan d'opération interne</strong> (POI) pour gérer un accident dans l'enceinte, exercé régulièrement ;</li>\n<li>pour le seuil haut, participer à l'information du public et à l'élaboration d'un plan particulier d'intervention (PPI) et d'un plan de prévention des risques technologiques (PPRT).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les <strong>mesures de maîtrise des risques</strong> identifiées dans l'étude de dangers (soupapes, détecteurs, arrêts automatiques, rideaux d'eau, rétentions) sont des équipements critiques. Leur disponibilité, leurs tests périodiques et toute inhibition temporaire sont tracés et soumis à autorisation.</div>"
      },
      {
       "titre": "Sécurité des procédés : barrières et analyse de risques",
       "contenu": "\n<p>La <strong>sécurité des procédés</strong> vise à prévenir les pertes de confinement (fuites, ruptures) et les réactions incontrôlées. Elle repose sur plusieurs <strong>barrières</strong> successives, indépendantes autant que possible :</p>\n<ol>\n<li>la conception du procédé (choix de conditions moins sévères, quantités réduites) ;</li>\n<li>la conduite et la régulation dans les plages normales ;</li>\n<li>les <strong>alarmes</strong> et l'intervention du pilote ;</li>\n<li>les <strong>fonctions instrumentées de sécurité</strong> (arrêts automatiques) ;</li>\n<li>les dispositifs de protection mécaniques (soupapes, disques de rupture) ;</li>\n<li>les barrières de limitation des conséquences (rétentions, détection et rideaux d'eau, moyens d'intervention).</li>\n</ol>\n<p>Pour identifier les dérives possibles, les équipes utilisent des méthodes d'<strong>analyse de risques</strong>. La méthode <strong>HAZOP</strong> passe en revue chaque ligne et chaque équipement en combinant un paramètre (débit, température, pression, niveau) et un mot-guide (pas de, plus de, moins de, inverse). Pour chaque dérive, on recherche causes, conséquences et barrières existantes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une dérive selon la logique HAZOP. Équipement : réacteur à double enveloppe où se déroule une réaction exothermique.<br>1. Dérive : « plus de température ».<br>2. Causes possibles : perte d'eau de refroidissement, coulée de réactif trop rapide, panne d'agitation, vanne vapeur restée ouverte.<br>3. Conséquences : emballement de la réaction, montée en pression, ouverture de la soupape ou rupture, rejet de produit.<br>4. Barrières existantes : régulation de température, alarme de température haute, arrêt automatique de la coulée sur température très haute, soupape dimensionnée.<br>5. Conclusion : vérifier que la coulée est bien asservie à l'agitation et au débit d'eau, et que le pilote dispose d'une fiche réflexe.</div>"
      },
      {
       "titre": "Travaux sur une installation : permis et consignation",
       "contenu": "\n<p>Les interventions de maintenance ou de nettoyage sur une installation de procédé sont encadrées par des documents écrits :</p>\n<ul>\n<li>le <strong>permis de travail</strong> précise l'équipement, la nature des travaux, les risques, les mesures de préparation (vidange, rinçage, inertage, consignations), les EPI et les contrôles à réaliser ; il est signé par l'exploitant qui met l'équipement à disposition et par l'intervenant ;</li>\n<li>des permis spécifiques s'y ajoutent : <strong>permis de feu</strong> pour les travaux par points chauds, autorisation de pénétration en espace confiné, autorisation de travaux en hauteur, de fouille ;</li>\n<li>le <strong>plan de prévention</strong> est obligatoire lorsqu'une entreprise extérieure intervient, pour analyser les risques liés à la coactivité.</li>\n</ul>\n<p>La <strong>consignation</strong> met l'équipement en sécurité vis-à-vis de toutes les énergies et de tous les fluides : séparation (ouverture du sectionneur, fermeture des vannes), <strong>condamnation</strong> (cadenas personnels, plaques pleines), <strong>identification</strong> (étiquettes), vérification de l'absence d'énergie et de fluide (purge, décompression, mesure). Pour les fluides dangereux, une simple vanne fermée ne suffit pas toujours : on peut exiger une double barrière avec purge intermédiaire, ou la pose d'un <strong>joint plein</strong>.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la plupart des accidents graves en maintenance de procédé surviennent lorsque l'équipement n'est pas réellement vide, décomprimé ou isolé : produit piégé dans un point bas, vanne non étanche, mauvais équipement consigné. On vérifie toujours sur le terrain le repère de l'équipement, et l'ouverture d'un circuit commence par un desserrage progressif, à l'opposé de soi.</div>"
      }
     ],
     "points_cles": [
      "Le danger est une propriété du produit ; le risque dépend de l'exposition.",
      "L'étiquette CLP comporte pictogrammes, mention d'avertissement, mentions H et conseils P.",
      "La prévention suit l'ordre : substitution, système clos, captage à la source, organisation, puis EPI.",
      "Les cartouches filtrantes ne protègent pas contre le manque d'oxygène ; l'azote est un danger mortel en espace confiné.",
      "Une explosion exige combustible, comburant et source d'inflammation ; les zones ATEX 0/1/2 et 20/21/22 dépendent de la probabilité de présence.",
      "Les ICPE relèvent de la déclaration, de l'enregistrement ou de l'autorisation ; les sites Seveso ont une étude de dangers et un POI.",
      "La sécurité des procédés repose sur des barrières successives et indépendantes, identifiées par des analyses comme HAZOP.",
      "Toute intervention exige permis de travail, consignation et vérification sur le terrain de l'absence de produit et d'énergie."
     ],
     "lexique": [
      {
       "terme": "CLP",
       "def": "Règlement européen sur la classification, l'étiquetage et l'emballage des produits chimiques."
      },
      {
       "terme": "Mention de danger H",
       "def": "Phrase codée de l'étiquette décrivant la nature du danger d'un produit."
      },
      {
       "terme": "VLEP",
       "def": "Valeur limite d'exposition professionnelle : concentration dans l'air à ne pas dépasser, sur 8 h ou sur 15 min."
      },
      {
       "terme": "CMR",
       "def": "Agent cancérogène, mutagène ou toxique pour la reproduction."
      },
      {
       "terme": "Point d'éclair",
       "def": "Température minimale à laquelle un liquide émet assez de vapeurs pour s'enflammer au contact d'une flamme."
      },
      {
       "terme": "ATEX",
       "def": "Atmosphère explosive : mélange avec l'air de substances combustibles dans lequel une inflammation se propage."
      },
      {
       "terme": "ICPE",
       "def": "Installation classée pour la protection de l'environnement, soumise à déclaration, enregistrement ou autorisation."
      },
      {
       "terme": "Étude de dangers",
       "def": "Document qui identifie les accidents possibles d'une installation et les mesures qui les maîtrisent."
      },
      {
       "terme": "HAZOP",
       "def": "Méthode d'analyse de risques qui combine paramètres et mots-guides pour rechercher les dérives d'un procédé."
      },
      {
       "terme": "Permis de travail",
       "def": "Document écrit qui autorise une intervention et fixe les mesures de sécurité associées."
      },
      {
       "terme": "Joint plein",
       "def": "Plaque pleine insérée entre deux brides pour isoler de façon sûre une tuyauterie."
      }
     ]
    },
    {
     "id": "bpce-controle-qualite-production",
     "titre": "Prélever, analyser et maîtriser la qualité en production",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Réaliser un prélèvement représentatif et sûr, et l'identifier correctement.",
      "Exploiter un titrage acido-basique pour contrôler une concentration.",
      "Interpréter un résultat d'analyse par rapport à une spécification et à l'incertitude de mesure.",
      "Construire et lire une carte de contrôle, et calculer un indicateur de capabilité.",
      "Traiter un produit non conforme et assurer la traçabilité d'un lot."
     ],
     "sections": [
      {
       "titre": "Le prélèvement, première étape de l'analyse",
       "contenu": "\n<p>Un résultat d'analyse ne vaut que ce que vaut l'<strong>échantillon</strong>. Un prélèvement doit être <strong>représentatif</strong> : sa composition doit être celle du produit qu'il est censé représenter. Les erreurs classiques sont nombreuses : prélever le liquide stagnant dans la vanne de prélèvement au lieu du produit en circulation, prélever en surface d'une cuve mal agitée, laisser s'évaporer un solvant, contaminer l'échantillon avec un flacon mal rincé.</p>\n<p>Les bonnes pratiques sont :</p>\n<ul>\n<li>purger le point de prélèvement avant de remplir le flacon, en récupérant la purge ;</li>\n<li>utiliser le flacon prévu (matériau compatible, propre, parfois contenant un conservateur pour l'eau) et le rincer avec le produit si la procédure le demande ;</li>\n<li>respecter le volume, la température et le délai d'acheminement au laboratoire ;</li>\n<li><strong>identifier</strong> immédiatement l'échantillon : repère du point, date, heure, numéro de lot, nom du préleveur ;</li>\n<li>pour les eaux, utiliser des préleveurs automatiques asservis au débit afin d'obtenir un échantillon moyen sur 24 heures.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le prélèvement est l'un des moments où l'opérateur est le plus exposé au produit : projection à l'ouverture de la vanne, vapeurs, produit chaud ou sous pression. On utilise les points de prélèvement prévus (de préférence en circuit fermé), on porte les EPI de la consigne, et l'on ouvre la vanne progressivement, le flacon tenu à distance du visage.</div>"
      },
      {
       "titre": "Le titrage et les analyses de contrôle",
       "contenu": "\n<p>Le <strong>titrage</strong> (ou dosage) détermine la concentration d'une espèce en la faisant réagir avec une solution de concentration connue, le <strong>réactif titrant</strong>, versée à la burette jusqu'à l'<strong>équivalence</strong>. À l'équivalence, les réactifs ont été introduits dans les proportions de l'équation. L'équivalence se repère par le changement de couleur d'un <strong>indicateur coloré</strong>, par un saut de pH (titrage pH-métrique) ou par une rupture de pente de conductivité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler la concentration d'une solution de soude de NEP. On prélève V<sub>B</sub> = 10,0 mL de solution, titrée par de l'acide chlorhydrique à C<sub>A</sub> = 0,50 mol/L ; l'équivalence est obtenue pour V<sub>A</sub> = 8,0 mL.<br>1. Équation : HCl + NaOH → NaCl + H<sub>2</sub>O, proportions 1 pour 1.<br>2. À l'équivalence : C<sub>A</sub> × V<sub>A</sub> = C<sub>B</sub> × V<sub>B</sub>.<br>3. C<sub>B</sub> = 0,50 × 8,0 / 10,0 = 0,40 mol/L.<br>4. En concentration massique : 0,40 × 40 = 16 g/L, soit environ 1,6 % en masse.<br>5. Comparer à la spécification (par exemple 1,5 % ± 0,2) : la solution est conforme.</div>\n<p>D'autres analyses courantes en production sont les mesures de pH, de conductivité, de masse volumique, de viscosité, de teneur en eau (méthode de Karl Fischer), de matière sèche par étuvage, et des analyses instrumentales réalisées au laboratoire : <strong>spectrophotométrie</strong> (dosage d'une espèce colorée par l'absorbance de la lumière), <strong>chromatographie</strong> (séparation et dosage des constituants d'un mélange, notamment des impuretés), analyses microbiologiques pour l'eau.</p>"
      },
      {
       "titre": "Spécifications, tolérances et incertitude",
       "contenu": "\n<p>Une <strong>spécification</strong> fixe pour chaque caractéristique une valeur cible et des <strong>limites de tolérance</strong> : limite inférieure (TI) et limite supérieure (TS). Un produit est <strong>conforme</strong> si toutes ses caractéristiques sont dans leurs tolérances.</p>\n<p>Toute mesure est entachée d'une <strong>incertitude</strong> : en répétant la mesure, on ne trouve pas exactement le même résultat. On l'exprime sous la forme résultat ± incertitude, par exemple 16,0 ± 0,3 g/L. Quand un résultat se trouve près d'une limite, l'incertitude peut empêcher de conclure avec certitude : la règle de décision applicable (accepter, refuser, refaire l'analyse) est fixée par le système qualité.</p>\n<p>La fiabilité des résultats repose sur des <strong>contrôles internes</strong> du laboratoire : analyse d'échantillons de référence, double analyse, comparaison entre laboratoires, vérification des instruments. Un résultat surprenant se vérifie avant d'agir : un nouveau prélèvement et une nouvelle analyse coûtent moins cher qu'une correction inutile du procédé.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur de nombreux sites, le pilote réalise lui-même des analyses simples au poste (pH, densité, titrages rapides) et le laboratoire réalise les analyses libératoires. Les deux résultats sont comparés régulièrement, ce qui permet de détecter une dérive de l'appareil de terrain ou de la méthode.</div>"
      },
      {
       "titre": "La maîtrise statistique des procédés",
       "contenu": "\n<p>Aucun procédé ne produit deux fois exactement la même chose : les résultats varient autour d'une moyenne. La <strong>maîtrise statistique des procédés</strong> (MSP) distingue :</p>\n<ul>\n<li>les <strong>causes communes</strong> de variation, nombreuses et faibles, inhérentes au procédé : elles donnent une dispersion « normale » ;</li>\n<li>les <strong>causes spéciales</strong>, ponctuelles et identifiables (lot de matière différent, capteur déréglé, erreur de dosage) : elles provoquent des dérives qu'il faut détecter et corriger.</li>\n</ul>\n<p>On décrit les résultats par leur <strong>moyenne</strong> et leur <strong>écart-type</strong> σ, qui mesure la dispersion. La <strong>carte de contrôle</strong> reporte chronologiquement les résultats (ou les moyennes de petits échantillons) entre une ligne centrale et deux <strong>limites de contrôle</strong>, généralement placées à ± 3 σ autour de la moyenne. Ces limites viennent du procédé lui-même ; elles sont différentes des limites de tolérance, qui viennent du client.</p>\n<p>On considère que le procédé est <strong>hors contrôle</strong>, et l'on recherche une cause spéciale, notamment quand :</p>\n<ul>\n<li>un point sort des limites de contrôle ;</li>\n<li>une série de points consécutifs (souvent 7 ou plus selon les règles retenues) se trouve du même côté de la moyenne ;</li>\n<li>une série de points consécutifs monte ou descend régulièrement (tendance).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la carte de contrôle sert à agir au bon moment : ni trop tard (on laisse dériver jusqu'à la non-conformité), ni trop tôt (on corrige des variations normales, ce qui augmente la dispersion). Corriger le procédé à chaque petit écart est une erreur fréquente appelée « surréglage ».</div>"
      },
      {
       "titre": "Capabilité du procédé",
       "contenu": "\n<p>La <strong>capabilité</strong> exprime l'aptitude d'un procédé à produire dans les tolérances. On compare l'intervalle de tolérance à la dispersion du procédé (6 σ, qui contient la quasi-totalité des résultats).</p>\n<ul>\n<li><strong>Cp</strong> = (TS − TI) / (6 σ) mesure la capabilité « potentielle », si le procédé était parfaitement centré ;</li>\n<li><strong>Cpk</strong> = la plus petite des deux valeurs (TS − moyenne) / (3 σ) et (moyenne − TI) / (3 σ) tient compte du centrage.</li>\n</ul>\n<p>Un procédé est généralement jugé capable si Cpk est supérieur ou égal à 1,33 ; le seuil exact dépend des exigences du client.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer une capabilité. Grammage d'un carton : tolérance 300 ± 9 g/m², moyenne mesurée 303 g/m², écart-type 2 g/m².<br>1. Cp = (309 − 291) / (6 × 2) = 18 / 12 = 1,5.<br>2. Côté haut : (309 − 303) / (3 × 2) = 6 / 6 = 1,0.<br>3. Côté bas : (303 − 291) / 6 = 12 / 6 = 2,0.<br>4. Cpk = 1,0, la plus petite valeur.<br>5. Interprétation : la dispersion est suffisamment faible (Cp = 1,5) mais le procédé est décentré vers le haut. Recentrer le grammage sur 300 g/m² ramènerait Cpk à 1,5, tout en économisant de la fibre.</div>"
      },
      {
       "titre": "Non-conformité et traçabilité",
       "contenu": "\n<p>Quand un produit est hors spécification, il est déclaré <strong>non conforme</strong> et isolé : étiquetage, blocage informatique, stockage séparé. Une décision est prise par les personnes habilitées : retraitement (nouvelle purification, recyclage dans le procédé), mélange autorisé, déclassement vers un usage moins exigeant, dérogation acceptée par le client, ou destruction. Un produit non conforme ne doit jamais repartir par erreur vers un client.</p>\n<p>La <strong>traçabilité</strong> permet de retrouver l'historique d'un lot : matières premières et leurs certificats, équipements utilisés, paramètres de fabrication, opérateurs, résultats des contrôles, clients livrés. Elle repose sur l'identification par <strong>numéro de lot</strong> et sur l'enregistrement systématique des données. Pour les productions continues, comme le papier ou l'eau, on rattache les données à une période ou à une bobine identifiée.</p>\n<table>\n<thead><tr><th>Outil qualité</th><th>Usage en production</th></tr></thead>\n<tbody>\n<tr><td>Diagramme de Pareto</td><td>classer les causes de non-conformité par fréquence pour traiter les plus importantes</td></tr>\n<tr><td>Diagramme d'Ishikawa (5M)</td><td>rechercher les causes possibles : matière, matériel, méthode, main-d'œuvre, milieu</td></tr>\n<tr><td>Méthode des 5 pourquoi</td><td>remonter de l'effet à la cause racine</td></tr>\n<tr><td>Fiche d'action corrective</td><td>formaliser, suivre et vérifier l'efficacité de l'action</td></tr>\n</tbody>\n</table>\n<p>Ces outils, déjà rencontrés pour l'amélioration continue, s'appliquent ici aux données de production : résultats d'analyses, cartes de contrôle et historiques de supervision.</p>"
      }
     ],
     "points_cles": [
      "Un prélèvement doit être représentatif, identifié et réalisé en sécurité, après purge du point.",
      "À l'équivalence d'un titrage : C_A × V_A = C_B × V_B pour une réaction mole à mole.",
      "Un résultat se compare aux tolérances en tenant compte de l'incertitude de mesure.",
      "Les causes communes donnent la dispersion normale, les causes spéciales des dérives à corriger.",
      "Les limites de contrôle (± 3 σ) viennent du procédé ; les limites de tolérance viennent du client.",
      "Un point hors limites, une série du même côté ou une tendance signalent un procédé hors contrôle.",
      "Cp mesure la dispersion par rapport à la tolérance ; Cpk tient compte du centrage.",
      "Un produit non conforme est isolé, puis fait l'objet d'une décision ; la traçabilité relie chaque lot à son historique."
     ],
     "lexique": [
      {
       "terme": "Échantillon représentatif",
       "def": "Prélèvement dont la composition est celle du produit qu'il représente."
      },
      {
       "terme": "Titrage",
       "def": "Détermination d'une concentration par réaction avec une solution de concentration connue."
      },
      {
       "terme": "Équivalence",
       "def": "Moment d'un titrage où les réactifs ont été introduits dans les proportions de l'équation."
      },
      {
       "terme": "Spécification",
       "def": "Ensemble des valeurs cibles et des tolérances que doit respecter un produit."
      },
      {
       "terme": "Incertitude de mesure",
       "def": "Plage de valeurs dans laquelle se trouve probablement la valeur vraie d'une grandeur mesurée."
      },
      {
       "terme": "Écart-type",
       "def": "Indicateur statistique de la dispersion des résultats autour de leur moyenne."
      },
      {
       "terme": "Carte de contrôle",
       "def": "Graphique chronologique des résultats avec ligne centrale et limites de contrôle."
      },
      {
       "terme": "Capabilité",
       "def": "Aptitude d'un procédé à produire dans les tolérances, mesurée par Cp et Cpk."
      },
      {
       "terme": "Non-conformité",
       "def": "Non-respect d'une exigence spécifiée."
      },
      {
       "terme": "Traçabilité",
       "def": "Aptitude à retrouver l'historique, l'utilisation ou la localisation d'un lot."
      }
     ]
    },
    {
     "id": "bpce-maintenance-equipements",
     "titre": "Maintenir les équipements de procédé et les réseaux",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire les organes d'usure des pompes, vannes, agitateurs et échangeurs et leurs modes de défaillance.",
      "Mettre un équipement de procédé à disposition de la maintenance et le récupérer en sécurité.",
      "Conduire un diagnostic méthodique à partir de symptômes et de mesures.",
      "Exploiter les techniques de surveillance conditionnelle (vibrations, températures, épaisseurs).",
      "Réaliser les opérations de maintenance de premier niveau propres aux réseaux de fluides."
     ],
     "sections": [
      {
       "titre": "Défaillances typiques des équipements de procédé",
       "contenu": "\n<p>Les équipements de procédé subissent des sollicitations particulières : produits corrosifs ou abrasifs, températures élevées, dépôts, cycles de pression. Connaître leurs organes d'usure et leurs <strong>modes de défaillance</strong> permet au pilote de détecter tôt une dégradation et de réaliser les interventions de premier niveau qui lui sont confiées.</p>\n<table>\n<thead><tr><th>Équipement</th><th>Organes sensibles</th><th>Défaillances fréquentes</th></tr></thead>\n<tbody>\n<tr><td>Pompe centrifuge</td><td>garniture mécanique, roulements, roue, accouplement</td><td>fuite de garniture, échauffement de roulement, cavitation, usure de la roue</td></tr>\n<tr><td>Pompe volumétrique</td><td>membrane, clapets, stator de pompe à vis, engrenages</td><td>rupture de membrane, clapets encrassés, perte de débit</td></tr>\n<tr><td>Vanne de régulation</td><td>presse-étoupe, siège et clapet, servomoteur, positionneur</td><td>fuite à la tige, défaut d'étanchéité, collage, dérive de position</td></tr>\n<tr><td>Agitateur</td><td>garniture ou presse-étoupe d'arbre, réducteur, paliers</td><td>fuite, échauffement du réducteur, vibrations</td></tr>\n<tr><td>Échangeur</td><td>tubes, plaques et joints</td><td>encrassement, corrosion, fuite interne</td></tr>\n<tr><td>Tuyauteries et réservoirs</td><td>parois, brides, joints, supports</td><td>corrosion, perte d'épaisseur, fuite aux brides, fissuration</td></tr>\n</tbody>\n</table>\n<p>La <strong>garniture mécanique</strong> assure l'étanchéité entre l'arbre tournant et le corps de la pompe : deux faces de frottement très planes, l'une fixe, l'autre tournante, pressées l'une contre l'autre et lubrifiées par un mince film de liquide. Pour les produits dangereux, on utilise des <strong>garnitures doubles</strong> alimentées par un fluide de barrage dont la pression et le niveau sont surveillés : une variation signale l'usure d'une des garnitures.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une garniture mécanique ne supporte ni la marche à sec, ni la cavitation, ni les vibrations. La plupart des fuites de garniture ont pour origine une condition de fonctionnement anormale et non la garniture elle-même : la remplacer sans traiter la cause conduit à une nouvelle fuite.</div>"
      },
      {
       "titre": "Mettre à disposition et récupérer un équipement",
       "contenu": "\n<p>Avant toute intervention de maintenance, l'exploitation <strong>met l'équipement à disposition</strong> : elle le rend sûr pour l'intervenant. C'est une compétence centrale du pilote de procédé, distincte de l'intervention elle-même.</p>\n<ol>\n<li>Arrêter l'équipement selon le mode opératoire et basculer si possible sur l'équipement de secours.</li>\n<li>Isoler les fluides : fermer les vannes amont et aval, poser les joints pleins si la procédure l'exige.</li>\n<li>Vidanger, décomprimer, puis rincer, neutraliser ou purger à l'azote ou à la vapeur selon le produit ; récupérer les produits vidangés.</li>\n<li>Consigner les énergies : électrique (par un chargé de consignation habilité), pneumatique, hydraulique, mécanique (ressorts, masses), thermique.</li>\n<li>Vérifier l'absence de produit, de pression et d'énergie ; contrôler l'atmosphère si nécessaire.</li>\n<li>Remettre l'équipement à l'intervenant avec le permis de travail signé, qui décrit les risques résiduels.</li>\n</ol>\n<p>À la fin des travaux, la <strong>récupération</strong> suit le chemin inverse : vérification que les travaux sont terminés et l'outillage retiré, clôture du permis, déconsignation, retrait des joints pleins, essai d'étanchéité (souvent sous pression d'azote ou d'eau), puis remise en service progressive et surveillance renforcée des premières heures.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une pompe peut tourner à l'envers, entraînée par le liquide qui reflue depuis le refoulement si le clapet fuit, même moteur consigné. Une tuyauterie vidangée peut contenir du produit piégé entre deux vannes ou derrière un dépôt. La vérification d'absence de produit se fait par l'ouverture contrôlée des purges, jamais par supposition.</div>"
      },
      {
       "titre": "Diagnostiquer une défaillance",
       "contenu": "\n<p>Le <strong>diagnostic</strong> consiste à identifier la cause d'une défaillance à partir de ses symptômes. Une démarche méthodique évite de remplacer des pièces au hasard.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> diagnostiquer un débit insuffisant d'une pompe centrifuge.<br>1. Constater et quantifier : débit mesuré 25 m³/h au lieu de 40 m³/h, pression de refoulement plus basse que d'habitude.<br>2. Recueillir les informations : historique (depuis quand ?), interventions récentes, conditions (niveau de la cuve d'aspiration, température du liquide).<br>3. Lister les hypothèses en suivant le circuit : aspiration (vanne mal ouverte, filtre colmaté, niveau bas, cavitation), pompe (sens de rotation inversé après un changement de moteur, roue usée ou bouchée), refoulement (vanne partiellement fermée, clapet bloqué, mesure fausse).<br>4. Tester les hypothèses de la plus simple et la plus probable à la plus complexe : contrôler les manomètres d'aspiration et de refoulement, la pression différentielle du filtre, le bruit de cavitation, l'intensité du moteur, le sens de rotation.<br>5. Conclure : ici, la pression d'aspiration est très basse et le filtre affiche une forte perte de charge ; le filtre est colmaté.<br>6. Remédier et vérifier : basculer sur le filtre de secours ou nettoyer le filtre après mise à disposition, puis contrôler le retour au débit nominal et consigner l'intervention.</div>\n<p>L'<strong>intensité absorbée</strong> par le moteur est un indice précieux : pour une pompe centrifuge, elle diminue quand le débit diminue (vanne fermée, aspiration bouchée) et augmente quand le débit augmente ou que le liquide est plus dense ou plus visqueux. Pour une pompe volumétrique, elle augmente avec la pression de refoulement.</p>"
      },
      {
       "titre": "La surveillance conditionnelle",
       "contenu": "\n<p>La <strong>maintenance conditionnelle</strong> déclenche une intervention lorsque l'état mesuré d'un équipement atteint un seuil, au lieu d'attendre la panne ou d'intervenir à date fixe. Elle s'appuie sur des techniques de surveillance :</p>\n<table>\n<thead><tr><th>Technique</th><th>Ce qu'elle détecte</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Analyse vibratoire</td><td>balourd, désalignement, défaut de roulement, cavitation</td><td>mesure mensuelle sur les paliers des pompes et ventilateurs critiques</td></tr>\n<tr><td>Thermographie infrarouge</td><td>échauffements anormaux</td><td>roulements, connexions électriques, isolations défectueuses, purgeurs</td></tr>\n<tr><td>Analyse d'huile</td><td>usure, pollution, dégradation du lubrifiant</td><td>réducteurs d'agitateurs, compresseurs</td></tr>\n<tr><td>Mesure d'épaisseur par ultrasons</td><td>corrosion, érosion des parois</td><td>tuyauteries d'acide, coudes en aval de pompes</td></tr>\n<tr><td>Contrôle acoustique</td><td>fuites de vapeur ou d'air, purgeurs défaillants</td><td>tournées sur le réseau vapeur</td></tr>\n<tr><td>Suivi des paramètres de procédé</td><td>encrassement, usure</td><td>évolution du coefficient d'échange d'un échangeur, de la perte de charge d'un filtre</td></tr>\n</tbody>\n</table>\n<p>Les <strong>équipements sous pression</strong> (réservoirs, réacteurs, échangeurs, tuyauteries au-delà de certains seuils de pression et de volume) sont en plus soumis à une réglementation qui impose des inspections périodiques et des requalifications, réalisées par des personnes compétentes ou des organismes habilités. Les <strong>soupapes de sécurité</strong> sont démontées et tarées périodiquement.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors de sa ronde, le pilote utilise ses sens et quelques instruments simples : thermomètre infrarouge pour vérifier la température d'un palier, stylo vibromètre, écoute d'un purgeur. Il note les valeurs dans la tournée informatisée, ce qui permet de suivre les tendances et d'alerter la maintenance avant la panne.</div>"
      },
      {
       "titre": "Maintenance de premier niveau des réseaux",
       "contenu": "\n<p>Le pilote réalise couramment des opérations de maintenance de premier niveau, définies dans les consignes de l'installation :</p>\n<ul>\n<li>nettoyer ou remplacer un <strong>filtre</strong> en ligne après basculement sur le filtre en parallèle ;</li>\n<li>contrôler et compléter les niveaux d'huile des paliers et réducteurs, les niveaux des pots de barrage des garnitures ;</li>\n<li>resserrer un <strong>presse-étoupe</strong> de vanne qui suinte, dans la limite prévue (un serrage excessif bloque la tige) ;</li>\n<li>purger les points bas des réseaux d'air comprimé et de vapeur ;</li>\n<li>nettoyer et étalonner les électrodes de pH et les cellules des analyseurs ;</li>\n<li>basculer périodiquement les équipements doublés (pompes principale et secours) pour garantir la disponibilité du secours ;</li>\n<li>vérifier les rétentions, les douches de sécurité et les lave-œil.</li>\n</ul>\n<p>Pour les réseaux de distribution d'eau et d'assainissement, la maintenance comprend en plus la manœuvre régulière des vannes du réseau, le curage des canalisations et des postes de relevage, la recherche de fuites (mesure de débit de nuit, écoute) et le nettoyage des réservoirs.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> resserrer une bride qui fuit sur une ligne en service est interdit sauf procédure particulière : le serrage peut provoquer la rupture du joint et une projection de produit. Une fuite se signale, se balise et se traite après isolement.</div>"
      },
      {
       "titre": "Enregistrer et améliorer la maintenance",
       "contenu": "\n<p>Chaque intervention est enregistrée dans le système de gestion de maintenance assistée par ordinateur (<strong>GMAO</strong>) : demande d'intervention, bon de travail, pièces utilisées, temps passé, cause identifiée. Ces données permettent de calculer des indicateurs :</p>\n<ul>\n<li>la <strong>MTBF</strong> (moyenne des temps de bon fonctionnement entre deux défaillances), qui mesure la fiabilité ;</li>\n<li>la <strong>MTTR</strong> (moyenne des temps de réparation), qui mesure la maintenabilité ;</li>\n<li>la <strong>disponibilité</strong>, part du temps pendant laquelle l'équipement est apte à fonctionner.</li>\n</ul>\n<p>Un équipement qui tombe souvent en panne pour la même cause fait l'objet d'une analyse pour traiter la <strong>cause racine</strong> : modification des conditions de fonctionnement, changement de matériau, amélioration du mode opératoire ou de la conduite. La qualité des informations transmises par le pilote dans la demande d'intervention (symptômes précis, valeurs mesurées, conditions d'apparition) conditionne la rapidité et la justesse du diagnostic de la maintenance.</p>"
      }
     ],
     "points_cles": [
      "Chaque équipement de procédé a ses organes d'usure et ses modes de défaillance typiques.",
      "Une garniture mécanique ne supporte ni marche à sec, ni cavitation, ni vibrations : on traite la cause de la fuite.",
      "La mise à disposition comprend arrêt, isolement, vidange, décompression, rinçage ou inertage, consignation et vérification.",
      "La récupération comprend clôture du permis, déconsignation, essai d'étanchéité et remise en service surveillée.",
      "Un diagnostic suit le circuit, teste les hypothèses de la plus simple à la plus complexe et vérifie le résultat.",
      "Vibrations, thermographie, analyse d'huile et mesures d'épaisseur alimentent la maintenance conditionnelle.",
      "Le pilote réalise une maintenance de premier niveau définie par les consignes ; on ne resserre pas une bride qui fuit en service.",
      "La GMAO permet de suivre MTBF, MTTR et disponibilité et d'éliminer les causes racines."
     ],
     "lexique": [
      {
       "terme": "Mode de défaillance",
       "def": "Manière dont un équipement cesse de remplir sa fonction : fuite, blocage, rupture, dérive."
      },
      {
       "terme": "Garniture mécanique",
       "def": "Dispositif d'étanchéité entre un arbre tournant et un corps fixe, à deux faces de frottement."
      },
      {
       "terme": "Presse-étoupe",
       "def": "Dispositif d'étanchéité par tresses comprimées autour d'une tige ou d'un arbre."
      },
      {
       "terme": "Mise à disposition",
       "def": "Ensemble des opérations par lesquelles l'exploitation rend un équipement sûr pour une intervention."
      },
      {
       "terme": "Maintenance conditionnelle",
       "def": "Maintenance déclenchée par l'atteinte d'un seuil d'un paramètre surveillé."
      },
      {
       "terme": "Thermographie",
       "def": "Mesure des températures de surface par caméra infrarouge."
      },
      {
       "terme": "GMAO",
       "def": "Gestion de maintenance assistée par ordinateur."
      },
      {
       "terme": "MTBF",
       "def": "Moyenne des temps de bon fonctionnement entre défaillances."
      },
      {
       "terme": "MTTR",
       "def": "Moyenne des temps techniques de réparation."
      },
      {
       "terme": "Équipement sous pression",
       "def": "Appareil contenant un fluide sous pression, soumis à une réglementation d'inspection périodique."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Documents de procédé et de conduite",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bpce-doc-schema-ti",
     "titre": "Lire un schéma de procédé et un schéma de tuyauterie et d'instrumentation",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Distinguer schéma de principe (bloc-diagramme), schéma de procédé (PFD) et schéma de tuyauterie et d'instrumentation (PID ou TI).",
      "Décoder les symboles d'appareils, de vannes et de lignes.",
      "Décoder un repère d'instrument (lettres de fonction et numéro de boucle).",
      "Suivre le cheminement d'un fluide et reconstituer une boucle de régulation sur un schéma.",
      "Rédiger une description fonctionnelle d'une partie d'installation à partir du schéma."
     ],
     "sections": [
      {
       "titre": "Trois niveaux de schémas",
       "contenu": "\n<p>Le <strong>dossier technique de fabrication</strong> d'une installation contient plusieurs schémas, du plus général au plus détaillé. L'épreuve écrite d'étude d'un procédé s'appuie presque toujours sur l'un d'eux.</p>\n<table>\n<thead><tr><th>Schéma</th><th>Contenu</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Schéma de principe (bloc-diagramme)</td><td>rectangles reliés par des flèches : grandes étapes et flux principaux</td><td>comprendre l'enchaînement global du procédé</td></tr>\n<tr><td>Schéma de procédé (PFD, process flow diagram)</td><td>appareils principaux, lignes principales, conditions opératoires (débits, pressions, températures), parfois bilans matière</td><td>comprendre le fonctionnement et les bilans</td></tr>\n<tr><td>Schéma de tuyauterie et d'instrumentation (PID ou TI)</td><td>tous les équipements, toutes les lignes avec leurs diamètres, toutes les vannes, tous les instruments et boucles, les sécurités</td><td>conduire, consigner, préparer une intervention, analyser une dérive</td></tr>\n</tbody>\n</table>\n<p>Les symboles des appareils et des lignes suivent les règles de la norme des schémas de procédés (série NF EN ISO 10628) ; les repères d'instruments suivent en général les conventions de l'ISA (norme ANSI/ISA-5.1) ou de la norme équivalente utilisée par l'entreprise. Chaque schéma comporte une <strong>légende</strong> ou renvoie à une planche de symboles : on la consulte toujours, car les pratiques varient d'un site à l'autre.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un schéma TI ne respecte ni l'échelle ni la position réelle des équipements. Il représente des liaisons fonctionnelles. Pour savoir où se trouve physiquement une vanne, on utilise les plans d'implantation et le repère inscrit sur l'étiquette de la vanne.</div>"
      },
      {
       "titre": "Le vocabulaire graphique",
       "contenu": "\n<p>Les éléments courants se reconnaissent ainsi :</p>\n<table>\n<thead><tr><th>Élément</th><th>Représentation habituelle</th></tr></thead>\n<tbody>\n<tr><td>Ligne de procédé principale</td><td>trait continu épais, flèche indiquant le sens d'écoulement</td></tr>\n<tr><td>Ligne secondaire, utilité</td><td>trait continu fin</td></tr>\n<tr><td>Signal électrique</td><td>trait interrompu (tirets)</td></tr>\n<tr><td>Signal pneumatique</td><td>trait barré de petites hachures obliques doubles</td></tr>\n<tr><td>Liaison logicielle (dans le système de contrôle)</td><td>trait ponctué de petits cercles</td></tr>\n<tr><td>Vanne d'isolement</td><td>deux triangles opposés par la pointe (« nœud papillon »)</td></tr>\n<tr><td>Vanne de régulation</td><td>même symbole surmonté d'un servomoteur (demi-cercle ou rectangle)</td></tr>\n<tr><td>Clapet anti-retour</td><td>symbole de vanne avec un triangle noirci ou une flèche indiquant le sens passant</td></tr>\n<tr><td>Soupape de sécurité</td><td>vanne en angle avec un ressort</td></tr>\n<tr><td>Pompe centrifuge</td><td>cercle avec un triangle intérieur ou une sortie tangentielle</td></tr>\n<tr><td>Échangeur</td><td>cercle ou rectangle traversé par une ligne en zigzag ou en épingle</td></tr>\n<tr><td>Instrument</td><td>cercle (bulle) contenant le repère ; une barre horizontale indique un instrument en salle de contrôle, l'absence de barre un instrument local</td></tr>\n</tbody>\n</table>\n<p>Chaque ligne porte une <strong>désignation</strong> du type : diamètre, code du fluide, numéro de ligne, classe de tuyauterie, isolation. Par exemple « 50-SO-1203-A2-IC » peut se lire : DN 50, soude, ligne 1203, classe de tuyauterie A2, isolation de conservation de chaleur. Le code exact est donné par la légende du site.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un schéma, une vanne est dessinée « vide » quelle que soit sa position. Certaines entreprises noircissent les vannes normalement fermées (repère NF ou NC) : cette indication donne la position en marche normale, pas la position réelle à un instant donné.</div>"
      },
      {
       "titre": "Décoder le repère d'un instrument",
       "contenu": "\n<p>Le repère d'un instrument comprend des <strong>lettres de fonction</strong> et un <strong>numéro de boucle</strong>. La première lettre indique la <strong>grandeur mesurée</strong> ; les lettres suivantes indiquent les <strong>fonctions</strong> réalisées.</p>\n<table>\n<thead><tr><th>Première lettre (grandeur)</th><th>Lettres suivantes (fonction)</th></tr></thead>\n<tbody>\n<tr><td>A : analyse (pH, conductivité, oxygène…)</td><td>A : alarme (avec H haut, L bas, HH, LL)</td></tr>\n<tr><td>F : débit</td><td>C : régulation</td></tr>\n<tr><td>L : niveau</td><td>I : indication</td></tr>\n<tr><td>P : pression</td><td>R : enregistrement</td></tr>\n<tr><td>T : température</td><td>T : transmission</td></tr>\n<tr><td>S : vitesse ; W : masse ; D : densité</td><td>V : vanne ; S : contact, commutation ; Z : sécurité ou position</td></tr>\n</tbody>\n</table>\n<p>Une lettre de modification peut suivre la première : <strong>D</strong> pour différentiel (PDT : transmetteur de pression différentielle), <strong>Q</strong> pour totalisateur (FQ). On lit donc :</p>\n<ul>\n<li><strong>TT 101</strong> : transmetteur de température de la boucle 101 ;</li>\n<li><strong>TIC 101</strong> : indicateur-régulateur de température de la boucle 101 ;</li>\n<li><strong>TV 101</strong> : vanne de régulation de la boucle 101 ;</li>\n<li><strong>LSHH 205</strong> : détecteur de niveau très haut de la boucle 205 ;</li>\n<li><strong>AIC 310</strong> : analyse indiquée et régulée, par exemple un pH ;</li>\n<li><strong>PSV 402</strong> : soupape de sécurité.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> reconstituer une boucle sur un TI.<br>1. Repérer le régulateur (lettre C) et noter son numéro de boucle.<br>2. Chercher tous les instruments portant le même numéro : transmetteur, vanne, alarmes.<br>3. Suivre les liaisons de signal du transmetteur vers le régulateur, puis du régulateur vers la vanne.<br>4. Identifier la grandeur réglée (première lettre) et la grandeur réglante (ce que la vanne modifie : débit de vapeur, d'eau, de réactif).<br>5. Repérer la position de sécurité de la vanne (FC, FO) et les alarmes associées.<br>6. Rédiger une phrase complète : « La température du produit en sortie de l'échangeur E101 est mesurée par TT 101 et régulée par TIC 101, qui agit sur la vanne TV 101 placée sur l'arrivée de vapeur. »</div>"
      },
      {
       "titre": "Méthode de lecture d'un TI",
       "contenu": "\n<p>Face à un schéma TI inconnu, on procède dans un ordre fixe pour ne rien oublier :</p>\n<ol>\n<li><strong>Lire le cartouche</strong> : titre, unité, numéro et indice de révision du schéma.</li>\n<li><strong>Identifier les entrées et sorties</strong> de la feuille : flèches de renvoi vers d'autres schémas, avec leur provenance ou destination.</li>\n<li><strong>Identifier les équipements principaux</strong> par leur repère (R pour réacteur, B ou T pour bac ou réservoir, E pour échangeur, P pour pompe, C pour colonne, F pour filtre, selon la légende) et leur fonction.</li>\n<li><strong>Suivre le fluide principal</strong> de l'entrée à la sortie, en notant chaque équipement traversé.</li>\n<li><strong>Repérer les utilités</strong> : vapeur, eau de refroidissement, azote, air, vide.</li>\n<li><strong>Reconstituer les boucles de régulation</strong>.</li>\n<li><strong>Repérer les sécurités</strong> : soupapes, disques de rupture, détecteurs HH et LL, arrêts automatiques, rétentions, évents vers laveur.</li>\n<li><strong>Repérer les points de prélèvement, de purge et de vidange</strong>, utiles pour la conduite et la mise à disposition.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour préparer une consignation, l'exploitant surligne sur une copie du TI les vannes à fermer, les purges à ouvrir et les joints pleins à poser. Cette « bulle de consignation » est jointe au permis de travail et vérifiée par une seconde personne.</div>"
      },
      {
       "titre": "Exemple commenté : poste de neutralisation d'un effluent",
       "contenu": "\n<p><strong>Document décrit.</strong> Le schéma TI représente une cuve agitée B 301 de 20 m³ recevant un effluent acide par la ligne 80-EA-3010. La cuve est équipée d'un agitateur M 301, d'un transmetteur de niveau LT 301 relié à LIC 301 avec alarmes LAH et LAL, et d'un détecteur LSHH 302 qui ferme la vanne d'arrivée XV 301 (FC). Une pompe P 302 A/B (deux pompes en parallèle) reprend l'effluent en fond de cuve et l'envoie vers le rejet à travers une vanne LV 301. Sur le refoulement, une boucle de recirculation revient dans la cuve. Un analyseur AT 303 sur la recirculation est relié à AIC 303, qui commande la vitesse de la pompe doseuse P 303 de soude à 30 %, aspirant dans le bac B 303 placé sur rétention. Une vanne tout ou rien XV 304, commandée par AS 304 (seuil de pH), renvoie l'effluent en tête de cuve si le pH sort de la plage 6,5 à 8,5. Un évent de la cuve rejoint le laveur de gaz.</p>\n<p><strong>Analyse modèle.</strong></p>\n<table>\n<thead><tr><th>Question type</th><th>Réponse rédigée</th></tr></thead>\n<tbody>\n<tr><td>Fonction du poste</td><td>Neutraliser un effluent acide par ajout de soude avant rejet, en continu.</td></tr>\n<tr><td>Boucle de pH</td><td>Le pH est mesuré par AT 303 sur la recirculation et régulé par AIC 303, qui agit sur la vitesse de la pompe doseuse P 303. Si le pH baisse, la vitesse augmente : action inverse.</td></tr>\n<tr><td>Boucle de niveau</td><td>Le niveau de B 301 est mesuré par LT 301 et régulé par LIC 301, qui module la vanne LV 301 de sortie vers le rejet.</td></tr>\n<tr><td>Sécurités</td><td>LSHH 302 ferme XV 301 en cas de niveau très haut (protection contre le débordement) ; XV 304 empêche tout rejet hors plage de pH (protection de l'environnement) ; B 303 est sur rétention ; l'évent est traité par le laveur.</td></tr>\n<tr><td>Redondance</td><td>Les pompes P 302 A et B permettent de basculer sur la pompe de secours sans arrêter le poste.</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans ce type d'exemple, l'erreur courante est de confondre le détecteur de sécurité LSHH 302 avec la mesure de conduite LT 301. Ils ont des rôles et des numéros différents : la sécurité doit rester efficace même si la mesure de conduite est en panne.</div>"
      }
     ],
     "points_cles": [
      "Le bloc-diagramme donne l'enchaînement, le PFD les conditions opératoires, le TI tous les équipements, vannes et instruments.",
      "Un TI n'est ni à l'échelle ni conforme à l'implantation réelle ; on consulte toujours sa légende.",
      "La désignation d'une ligne indique son diamètre, son fluide, son numéro et sa classe.",
      "Dans un repère d'instrument, la première lettre est la grandeur, les suivantes les fonctions, le numéro identifie la boucle.",
      "Une bulle barrée désigne un instrument en salle de contrôle, une bulle sans barre un instrument local.",
      "On lit un TI dans un ordre fixe : cartouche, entrées-sorties, équipements, fluide principal, utilités, boucles, sécurités, purges.",
      "Une boucle se reconstitue en suivant tous les instruments portant le même numéro.",
      "La mesure de conduite et le détecteur de sécurité sont des instruments distincts."
     ],
     "lexique": [
      {
       "terme": "PFD",
       "def": "Schéma de procédé montrant les appareils principaux, les flux et les conditions opératoires."
      },
      {
       "terme": "Schéma TI (PID)",
       "def": "Schéma de tuyauterie et d'instrumentation représentant tous les équipements, lignes, vannes et instruments."
      },
      {
       "terme": "Cartouche",
       "def": "Cadre d'un document donnant titre, numéro, indice de révision et auteurs."
      },
      {
       "terme": "Indice de révision",
       "def": "Lettre ou chiffre qui identifie la version en vigueur d'un document."
      },
      {
       "terme": "Numéro de boucle",
       "def": "Numéro commun à tous les instruments d'une même fonction de mesure ou de régulation."
      },
      {
       "terme": "Lettres de fonction",
       "def": "Code alphabétique qui indique la grandeur mesurée et les fonctions d'un instrument."
      },
      {
       "terme": "Renvoi",
       "def": "Flèche indiquant qu'une ligne continue sur un autre schéma, avec sa référence."
      },
      {
       "terme": "Redondance",
       "def": "Doublement d'un équipement pour qu'un secours prenne le relais en cas de défaillance."
      },
      {
       "terme": "Classe de tuyauterie",
       "def": "Code qui définit les matériaux, épaisseurs, brides et joints d'une ligne."
      }
     ]
    },
    {
     "id": "bpce-doc-mode-operatoire",
     "titre": "Exploiter un mode opératoire et un dossier de lot",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Situer le mode opératoire, la fiche de fabrication et le dossier de lot dans le dossier technique de fabrication.",
      "Identifier dans un mode opératoire les étapes, les paramètres, les points de contrôle et les impératifs QHSE.",
      "Calculer les quantités et durées à partir des données d'un dossier.",
      "Vérifier un dossier de lot renseigné et repérer les écarts.",
      "Rédiger une synthèse de conduite à partir de ces documents."
     ],
     "sections": [
      {
       "titre": "Les documents de fabrication",
       "contenu": "\n<p>La fabrication d'un produit ou la conduite d'un traitement s'appuie sur un ensemble de documents qui forment, avec les schémas, le <strong>dossier technique de fabrication</strong> :</p>\n<table>\n<thead><tr><th>Document</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Formule ou recette</td><td>liste des matières premières et de leurs quantités pour une taille de lot de référence</td></tr>\n<tr><td>Mode opératoire (ou instruction de fabrication)</td><td>suite ordonnée des opérations à réaliser, avec les paramètres et les contrôles</td></tr>\n<tr><td>Consignes de conduite</td><td>règles permanentes d'une installation : plages de fonctionnement, conduite à tenir face aux alarmes</td></tr>\n<tr><td>Fiche ou dossier de lot</td><td>exemplaire du mode opératoire renseigné au fur et à mesure : pesées, heures, valeurs relevées, signatures</td></tr>\n<tr><td>Spécification du produit</td><td>caractéristiques à atteindre et tolérances</td></tr>\n<tr><td>Fiches de données de sécurité</td><td>dangers et précautions pour chaque produit utilisé</td></tr>\n</tbody>\n</table>\n<p>Ces documents sont gérés par le système qualité : chacun a un <strong>numéro</strong>, un <strong>indice de révision</strong>, une date d'application et des signatures de rédaction et d'approbation. Seule la version en vigueur peut être utilisée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le mode opératoire dit ce qu'il faut faire ; le dossier de lot prouve ce qui a été fait. Une valeur non enregistrée est, pour l'auditeur comme pour le client, une opération non réalisée.</div>"
      },
      {
       "titre": "Structure d'un mode opératoire",
       "contenu": "\n<p>Un mode opératoire bien construit comporte, en en-tête, les informations générales, puis le déroulé des opérations :</p>\n<ul>\n<li><strong>en-tête</strong> : produit, installation, taille de lot, numéro et indice du document ;</li>\n<li><strong>prérequis</strong> : état de l'installation (propre, sèche, inertée), utilités nécessaires, équipements à vérifier ;</li>\n<li><strong>impératifs QHSE</strong> : dangers des produits, EPI, interdictions, conduite en cas d'incident, points environnementaux (rejets, déchets) ;</li>\n<li><strong>étapes numérotées</strong>, chacune avec l'action, les paramètres et leurs tolérances (température, durée, vitesse d'agitation, débit), la valeur à relever et la case de visa ;</li>\n<li><strong>points de contrôle</strong> : prélèvements, analyses, critère d'acceptation et conduite si le critère n'est pas atteint ;</li>\n<li><strong>points d'arrêt</strong> : étapes qui exigent une validation (chef de poste, laboratoire) avant de continuer ;</li>\n<li><strong>fin de lot</strong> : vidange, conditionnement, étiquetage, nettoyage.</li>\n</ul>\n<p>Le vocabulaire est normalisé dans chaque entreprise : « couler » (introduire progressivement un liquide), « charger », « porter à » (amener à une température), « maintenir », « soutirer », « tirer au vide », « casser le vide », « inerter ».</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une tolérance s'applique à une valeur précise. « Maintenir 2 h à 80 ± 2 °C » signifie que la température doit rester entre 78 et 82 °C pendant toute la durée, et que le décompte des 2 h ne commence qu'une fois 78 °C atteint. Lire « 80 °C pendant 2 h » en commençant le chronomètre à la mise en chauffe est une erreur classique.</div>"
      },
      {
       "titre": "Méthode d'exploitation",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un mode opératoire pour une épreuve ou une préparation de poste.<br>1. Vérifier l'identification : bon produit, bonne installation, version en vigueur.<br>2. Lire une première fois le document en entier sans rien noter, pour comprendre la logique de fabrication.<br>3. Relever les impératifs QHSE et les relier aux étapes concernées (quelle étape expose à quel danger, quel EPI à quel moment).<br>4. Établir la chronologie : tableau étape, durée, paramètres, contrôles ; calculer la durée totale d'un lot.<br>5. Calculer les quantités si la taille de lot diffère de la référence : appliquer le même coefficient à toutes les matières.<br>6. Identifier les paramètres critiques : ceux dont l'écart compromet la sécurité ou la qualité.<br>7. Rédiger la synthèse : objectif de l'opération, principales étapes, paramètres critiques, risques et mesures.</div>\n<p>Pour l'adaptation d'une formule, on calcule un <strong>coefficient de lot</strong> : taille de lot souhaitée divisée par taille de lot de référence. Toutes les quantités sont multipliées par ce coefficient, mais pas les durées ni les températures, et les débits de coulée sont souvent limités par la capacité de refroidissement : un lot plus gros ne se coule pas forcément plus vite.</p>"
      },
      {
       "titre": "Exemple commenté : préparation d'une solution de floculant",
       "contenu": "\n<p><strong>Document décrit.</strong> Mode opératoire MO-STEP-012, indice C, « Préparation du polymère floculant pour la déshydratation des boues ». Taille de lot : cuve de 4 m³. Produit : polymère en poudre, solution visée à 4 g/L.</p>\n<table>\n<thead><tr><th>Étape</th><th>Action</th><th>Paramètres</th><th>Contrôle</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Vérifier cuve vide et propre, vanne de fond fermée</td><td>–</td><td>visa</td></tr>\n<tr><td>2</td><td>Remplir d'eau industrielle</td><td>4 000 L ± 50</td><td>relever le volume du compteur</td></tr>\n<tr><td>3</td><td>Démarrer l'agitateur</td><td>vitesse rapide</td><td>visa</td></tr>\n<tr><td>4</td><td>Introduire le polymère par l'éjecteur de mouillage, progressivement</td><td>16 kg en 10 min minimum</td><td>relever la masse pesée et l'heure</td></tr>\n<tr><td>5</td><td>Maturation sous agitation lente</td><td>45 min minimum</td><td>relever l'heure de fin</td></tr>\n<tr><td>6</td><td>Contrôler la viscosité</td><td>valeur dans la plage de la fiche produit</td><td>noter la valeur</td></tr>\n<tr><td>7</td><td>Mettre la cuve en service vers les pompes doseuses</td><td>–</td><td>visa et date limite d'utilisation (48 h)</td></tr>\n</tbody>\n</table>\n<p>Impératifs QHSE indiqués : poudre irritante pour les voies respiratoires (port d'un masque filtrant contre les poussières et de lunettes) ; une solution de polymère renversée rend le sol extrêmement glissant (balisage, absorbant) ; pas de rejet de solution concentrée au réseau pluvial.</p>\n<p><strong>Analyse modèle.</strong></p>\n<ul>\n<li><strong>Objectif</strong> : préparer 4 m³ de solution de floculant à 4 g/L, mûrie et contrôlée, pour la déshydratation des boues. Vérification : 16 kg / 4 m³ = 4 kg/m³ = 4 g/L, cohérent.</li>\n<li><strong>Durée minimale d'un lot</strong> : remplissage (selon le débit d'eau, par exemple 20 min à 12 m³/h), introduction 10 min, maturation 45 min, contrôle et mise en service 10 min : environ 1 h 25.</li>\n<li><strong>Paramètres critiques</strong> : la vitesse d'introduction (une introduction trop rapide forme des grumeaux, appelés « yeux de poisson », qui bouchent les pompes et gaspillent le produit), la durée de maturation (un polymère insuffisamment déplié flocule mal), la date limite d'utilisation (la solution se dégrade).</li>\n<li><strong>Adaptation</strong> : pour un demi-lot de 2 m³, il faut 8 kg de polymère ; la maturation reste de 45 min minimum.</li>\n<li><strong>Risques et mesures</strong> : exposition à la poudre à l'étape 4 (masque, lunettes, éjecteur fermé) ; glissade en cas de fuite (balisage, absorbant) ; pollution (rétention, interdiction de rejet au pluvial).</li>\n</ul>"
      },
      {
       "titre": "Vérifier un dossier de lot renseigné",
       "contenu": "\n<p>Le dossier de lot renseigné est relu par le chef de poste ou par l'assurance qualité avant la libération du lot. On vérifie :</p>\n<ul>\n<li>que <strong>toutes les cases</strong> sont remplies, datées et visées ;</li>\n<li>que les <strong>valeurs relevées</strong> sont dans les tolérances ; à défaut, qu'un écart a été déclaré et traité ;</li>\n<li>que la <strong>chronologie</strong> est cohérente (pas d'heure de fin antérieure à l'heure de début, durées minimales respectées) ;</li>\n<li>que les <strong>numéros de lot</strong> des matières premières sont enregistrés ;</li>\n<li>que les corrections sont faites selon les règles : valeur barrée d'un trait restant lisible, nouvelle valeur, date, visa et justification ; jamais de rature ni de correcteur.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans l'exemple ci-dessus, un dossier indique introduction du polymère de 14 h 05 à 14 h 08 et maturation terminée à 14 h 40. Le relecteur relève deux écarts : introduction en 3 min au lieu de 10 min minimum, maturation de 32 min au lieu de 45 min minimum. Le lot est bloqué, la viscosité est recontrôlée, et la cause (opérateur pressé par une baisse de niveau dans la cuve en service) est analysée : la solution retenue est d'avancer le déclenchement de la préparation, pas de raccourcir la maturation.</div>\n<p>Dans l'épreuve écrite, on peut avoir à repérer ces écarts dans un dossier fourni, à en expliquer les conséquences possibles sur la qualité ou la sécurité, et à proposer une action corrective.</p>"
      }
     ],
     "points_cles": [
      "Le mode opératoire dit ce qu'il faut faire ; le dossier de lot prouve ce qui a été fait.",
      "On vérifie toujours le numéro et l'indice de révision du document utilisé.",
      "Un mode opératoire comprend prérequis, impératifs QHSE, étapes paramétrées, points de contrôle, points d'arrêt et fin de lot.",
      "Une durée de maintien se décompte à partir du moment où la valeur est dans sa tolérance.",
      "Pour adapter un lot, on applique un coefficient aux quantités mais pas aux durées ni aux températures.",
      "Les paramètres critiques sont ceux dont l'écart compromet la sécurité ou la qualité.",
      "Un dossier de lot se vérifie sur la complétude, les tolérances, la chronologie, la traçabilité des matières et les règles de correction.",
      "Un écart se déclare, s'analyse et se traite à la cause, jamais en raccourcissant une étape."
     ],
     "lexique": [
      {
       "terme": "Dossier technique de fabrication",
       "def": "Ensemble des documents décrivant un procédé : schémas, modes opératoires, consignes, spécifications, FDS."
      },
      {
       "terme": "Mode opératoire",
       "def": "Document qui décrit la suite ordonnée des opérations et leurs paramètres."
      },
      {
       "terme": "Dossier de lot",
       "def": "Exemplaire renseigné du mode opératoire qui enregistre la fabrication d'un lot."
      },
      {
       "terme": "Point d'arrêt",
       "def": "Étape qui exige une validation avant de poursuivre la fabrication."
      },
      {
       "terme": "Coefficient de lot",
       "def": "Rapport entre la taille de lot souhaitée et la taille de lot de référence de la formule."
      },
      {
       "terme": "Couler",
       "def": "Introduire progressivement un liquide dans un réacteur ou une cuve."
      },
      {
       "terme": "Maturation",
       "def": "Temps de repos ou d'agitation nécessaire pour qu'une solution atteigne ses propriétés."
      },
      {
       "terme": "Libération",
       "def": "Décision qualité qui autorise l'utilisation ou l'expédition d'un lot."
      },
      {
       "terme": "Paramètre critique",
       "def": "Paramètre dont l'écart compromet la sécurité ou la qualité du produit."
      }
     ]
    },
    {
     "id": "bpce-doc-enregistrements",
     "titre": "Analyser des enregistrements de supervision et des bulletins d'analyse",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire une courbe de tendance : échelles, unités, repères de temps, grandeurs superposées.",
      "Distinguer une variation normale, une perturbation, une dérive et un défaut de mesure.",
      "Exploiter un bulletin d'analyse en le comparant à une spécification.",
      "Croiser plusieurs enregistrements pour retrouver la chronologie et la cause d'un incident.",
      "Rédiger une analyse argumentée appuyée sur des valeurs relevées."
     ],
     "sections": [
      {
       "titre": "Les enregistrements disponibles",
       "contenu": "\n<p>Les installations modernes enregistrent en permanence leurs données. Le pilote et le technicien exploitent :</p>\n<ul>\n<li>les <strong>courbes de tendance</strong> (ou historiques) de la supervision, qui montrent l'évolution d'une ou plusieurs grandeurs dans le temps ;</li>\n<li>le <strong>journal des alarmes et des événements</strong>, liste horodatée des alarmes, acquittements, changements de consigne, passages en manuel, démarrages et arrêts d'équipements ;</li>\n<li>les <strong>bulletins d'analyse</strong> du laboratoire et les certificats d'analyse des fournisseurs ;</li>\n<li>les relevés de ronde et le cahier de quart ;</li>\n<li>les rapports de production : quantités produites, consommations, taux de marche.</li>\n</ul>\n<p>Dans l'épreuve écrite, ces documents sont fournis sous forme de graphiques imprimés ou de tableaux de valeurs. La compétence évaluée est de <strong>traiter l'information</strong> : relever des valeurs exactes, les comparer, en déduire un fonctionnement ou une cause, et le rédiger avec le vocabulaire technique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un enregistrement ne dit pas la vérité du procédé ; il dit ce que les capteurs ont mesuré. Avant d'interpréter une variation, on se demande toujours si elle est physiquement possible et cohérente avec les autres mesures.</div>"
      },
      {
       "titre": "Lire une courbe de tendance",
       "contenu": "\n<p>Une courbe de tendance comporte un axe horizontal du temps et un ou plusieurs axes verticaux. Avant de lire les courbes, on identifie :</p>\n<ol>\n<li>la <strong>période</strong> affichée et l'échelle de temps (une heure, une journée, une semaine) ;</li>\n<li>chaque <strong>courbe</strong> : repère de l'instrument, grandeur, unité, couleur ou type de trait ;</li>\n<li>l'<strong>échelle verticale</strong> de chaque courbe : sur un graphique à plusieurs grandeurs, chaque courbe a souvent sa propre échelle, à gauche ou à droite ;</li>\n<li>les éventuels repères : consigne, seuils d'alarme, plages de tolérance.</li>\n</ol>\n<p>On peut ensuite qualifier l'allure de chaque courbe :</p>\n<table>\n<thead><tr><th>Allure</th><th>Interprétation habituelle</th></tr></thead>\n<tbody>\n<tr><td>Valeur stable avec de petites fluctuations</td><td>fonctionnement normal, bruit de mesure</td></tr>\n<tr><td>Échelon (changement brusque puis stabilisation)</td><td>changement de consigne, démarrage ou arrêt d'un équipement</td></tr>\n<tr><td>Oscillations régulières</td><td>boucle de régulation instable ou vanne qui colle</td></tr>\n<tr><td>Rampe lente et continue</td><td>dérive : encrassement, épuisement d'une résine, colmatage, consommation d'un réactif</td></tr>\n<tr><td>Valeur parfaitement plate</td><td>mesure figée : capteur bloqué, défaut de communication</td></tr>\n<tr><td>Saut à une valeur extrême (0 % ou 100 % de l'échelle)</td><td>défaut de capteur ou de câble plutôt que phénomène réel</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> deux courbes qui se croisent sur l'écran ne signifient rien si elles n'ont pas la même échelle. De même, une variation qui paraît énorme peut être minime si l'échelle verticale est très resserrée. On lit toujours les valeurs sur les axes avant de conclure.</div>"
      },
      {
       "titre": "Croiser les enregistrements pour expliquer un incident",
       "contenu": "\n<p>Un incident se comprend en reconstituant la <strong>chronologie</strong> : quelle grandeur a bougé la première, quelles conséquences ont suivi. La cause précède l'effet ; l'alarme la plus ancienne est souvent la plus utile.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un incident à partir d'enregistrements.<br>1. Délimiter l'incident : heure de début, heure de fin, grandeur anormale constatée.<br>2. Relever sur chaque courbe les valeurs avant, pendant et après, avec les heures.<br>3. Ordonner les événements dans un tableau chronologique, en y ajoutant le journal des alarmes.<br>4. Identifier la première anomalie et vérifier qu'elle explique les suivantes par un mécanisme physique (bilan matière, bilan thermique, réaction de la régulation).<br>5. Écarter les hypothèses incompatibles avec les données.<br>6. Rédiger : constat chiffré, chronologie, cause la plus probable, conséquences, actions correctives et préventives proposées.</div>\n<p>Les relations entre grandeurs aident à raisonner. Dans une boucle de régulation, si la mesure s'écarte de la consigne alors que la commande est en butée, la boucle n'a plus de capacité de correction : la cause est en amont (manque de vapeur, vanne bloquée, perturbation trop forte). Si la mesure reste à la consigne mais que la commande s'éloigne lentement de sa valeur habituelle, le procédé a changé (encrassement, usure) même si rien n'est encore visible sur la grandeur réglée.</p>"
      },
      {
       "titre": "Exemple commenté : dérive d'un réchauffeur à vapeur",
       "contenu": "\n<p><strong>Document décrit.</strong> Relevés horaires sur un réchauffeur à plaques E 210 qui chauffe une solution de procédé à 70 °C par de la vapeur à 3 bar. Grandeurs : TIC 210 (température de sortie, consigne 70 °C), TV 210 (ouverture de la vanne vapeur, %), FI 211 (débit de solution, m³/h), PDI 212 (perte de charge côté solution, bar).</p>\n<table>\n<thead><tr><th>Heure</th><th>TIC 210 (°C)</th><th>TV 210 (%)</th><th>FI 211 (m³/h)</th><th>PDI 212 (bar)</th></tr></thead>\n<tbody>\n<tr><td>Jour 1 – 08 h</td><td>70,1</td><td>52</td><td>12,0</td><td>0,45</td></tr>\n<tr><td>Jour 2 – 08 h</td><td>70,0</td><td>61</td><td>12,0</td><td>0,58</td></tr>\n<tr><td>Jour 3 – 08 h</td><td>69,9</td><td>74</td><td>12,1</td><td>0,74</td></tr>\n<tr><td>Jour 4 – 08 h</td><td>70,0</td><td>89</td><td>11,9</td><td>0,93</td></tr>\n<tr><td>Jour 5 – 08 h</td><td>68,2</td><td>100</td><td>12,0</td><td>1,12</td></tr>\n</tbody>\n</table>\n<p><strong>Analyse modèle.</strong></p>\n<ul>\n<li><strong>Constat</strong> : la température est tenue à la consigne jusqu'au jour 4 ; au jour 5, elle chute à 68,2 °C alors que la vanne vapeur est ouverte à 100 %. La régulation a atteint sa limite.</li>\n<li><strong>Grandeurs explicatives</strong> : le débit de solution est constant (12 m³/h), ce n'est donc pas une hausse de la charge thermique. L'ouverture de vanne augmente régulièrement de 52 à 100 % en quatre jours, et la perte de charge côté solution a plus que doublé (0,45 à 1,12 bar).</li>\n<li><strong>Interprétation</strong> : l'augmentation conjointe de la perte de charge et du besoin en vapeur, à débit constant, indique un <strong>encrassement</strong> côté solution : les dépôts réduisent la section de passage et le coefficient d'échange.</li>\n<li><strong>Hypothèses écartées</strong> : un purgeur bloqué ou une baisse de pression vapeur expliqueraient la hausse d'ouverture, mais pas la hausse de perte de charge côté solution.</li>\n<li><strong>Actions</strong> : informer le chef de poste ; programmer un nettoyage en place de l'échangeur (ou basculer sur l'échangeur de secours s'il existe) ; en attendant, vérifier la pression vapeur et le purgeur ; à plus long terme, définir un seuil d'ouverture de vanne ou de perte de charge déclenchant le nettoyage avant la perte de consigne.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une telle dérive est visible plusieurs jours avant la perte de consigne. Les sites qui suivent l'ouverture des vannes de régulation et les pertes de charge dans leurs indicateurs programment les nettoyages au bon moment, sans arrêt subi.</div>"
      },
      {
       "titre": "Exploiter un bulletin d'analyse",
       "contenu": "\n<p>Un <strong>bulletin d'analyse</strong> (ou certificat d'analyse quand il accompagne une livraison) comporte : l'identification de l'échantillon (produit, numéro de lot, point et date de prélèvement), la liste des <strong>paramètres</strong> analysés, la <strong>méthode</strong> utilisée (souvent une norme), le <strong>résultat</strong> avec son unité, la <strong>spécification</strong> ou la valeur limite, et une conclusion de conformité signée.</p>\n<p>Pour l'exploiter :</p>\n<ul>\n<li>vérifier que l'échantillon est bien celui que l'on croit (lot, date, point) ;</li>\n<li>comparer chaque résultat à sa limite <strong>dans la même unité</strong> ;</li>\n<li>repérer les résultats proches des limites, même conformes, et les comparer aux bulletins précédents pour détecter une tendance ;</li>\n<li>repérer les signes « inférieur à » (&lt; 0,05 mg/L) qui signifient que la valeur est sous la limite de quantification de la méthode.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un bulletin d'autosurveillance de station d'épuration exprime souvent des résultats en concentration (mg/L) alors que l'arrêté fixe aussi des flux (kg/j) et des rendements (%). Conclure à la conformité sur la seule concentration est une erreur : on calcule aussi flux et rendement avec le débit du jour.</div>"
      },
      {
       "titre": "Erreurs fréquentes et rédaction de la réponse",
       "contenu": "\n<p>Les erreurs les plus fréquentes lors de l'analyse d'enregistrements sont les suivantes :</p>\n<ul>\n<li>décrire les courbes sans les interpréter (« la courbe monte puis descend ») au lieu d'expliquer ce qui se passe dans le procédé ;</li>\n<li>interpréter sans relever de valeurs : une conclusion doit citer des chiffres, des unités et des heures ;</li>\n<li>confondre la mesure et la consigne, ou la mesure et la commande de la vanne ;</li>\n<li>prendre un défaut de capteur pour un phénomène réel, ou l'inverse ;</li>\n<li>conclure sur une seule grandeur alors que plusieurs enregistrements sont fournis pour être croisés ;</li>\n<li>proposer une action sans préciser qui la réalise ni dans quel ordre (information, mise en sécurité, correction, vérification).</li>\n</ul>\n<p>Une réponse bien construite suit le plan : <strong>constat chiffré</strong>, <strong>interprétation</strong> appuyée sur un mécanisme (bilan, régulation, phénomène physique), <strong>hypothèses écartées</strong> avec la donnée qui les contredit, <strong>actions</strong> hiérarchisées. Les phrases sont courtes et utilisent les repères des instruments tels qu'ils figurent sur les documents.</p>"
      }
     ],
     "points_cles": [
      "Courbes de tendance, journal d'alarmes, bulletins d'analyse et cahier de quart se croisent pour comprendre un fonctionnement.",
      "On identifie période, grandeurs, unités et échelles avant d'interpréter une courbe.",
      "Échelon, oscillation, rampe, valeur figée ou extrême ont chacun une interprétation typique.",
      "La cause précède l'effet : on reconstitue la chronologie à partir de la première anomalie.",
      "Une commande en butée signifie que la régulation a perdu sa capacité de correction.",
      "Une ouverture de vanne qui dérive à consigne tenue révèle un changement du procédé avant la perte de consigne.",
      "Un bulletin d'analyse se vérifie sur l'identification de l'échantillon, les unités et les tendances, pas seulement sur la conformité.",
      "Une conclusion rédigée cite des valeurs relevées et écarte les hypothèses incompatibles."
     ],
     "lexique": [
      {
       "terme": "Courbe de tendance",
       "def": "Représentation graphique de l'évolution d'une grandeur enregistrée dans le temps."
      },
      {
       "terme": "Journal des alarmes",
       "def": "Liste horodatée des alarmes et événements d'une installation."
      },
      {
       "terme": "Échelon",
       "def": "Variation brusque d'une grandeur suivie d'une stabilisation à une nouvelle valeur."
      },
      {
       "terme": "Dérive",
       "def": "Évolution lente et continue d'une grandeur ou d'une commande dans le même sens."
      },
      {
       "terme": "Butée",
       "def": "Position extrême (0 ou 100 %) d'une commande ou d'un actionneur."
      },
      {
       "terme": "Bulletin d'analyse",
       "def": "Document du laboratoire présentant les résultats d'analyse d'un échantillon."
      },
      {
       "terme": "Certificat d'analyse",
       "def": "Bulletin fourni par un fournisseur pour attester de la conformité d'un lot livré."
      },
      {
       "terme": "Limite de quantification",
       "def": "Plus petite valeur qu'une méthode d'analyse peut mesurer avec une précision suffisante."
      },
      {
       "terme": "Flux",
       "def": "Quantité de matière rejetée par unité de temps, égale à la concentration multipliée par le débit."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Documents d'équipement et de prévention",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bpce-doc-fiches-constructeur",
     "titre": "Exploiter une fiche technique d'équipement et ses courbes",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Repérer dans une fiche technique d'équipement les données de conception, de fonctionnement et de limites.",
      "Lire une courbe caractéristique de pompe et y placer un point de fonctionnement.",
      "Vérifier l'adéquation d'un équipement à une nouvelle condition de fonctionnement.",
      "Exploiter les données d'une plaque signalétique et d'une notice.",
      "Rédiger une conclusion argumentée sur le choix ou l'utilisation d'un équipement."
     ],
     "sections": [
      {
       "titre": "Fiche technique, notice et plaque signalétique",
       "contenu": "\n<p>Chaque équipement d'une installation est accompagné de documents du constructeur, conservés dans le dossier de l'installation :</p>\n<ul>\n<li>la <strong>fiche technique</strong> (ou fiche de spécification, data sheet) : conditions de service pour lesquelles l'équipement a été choisi, caractéristiques, matériaux, limites ;</li>\n<li>les <strong>courbes caractéristiques</strong> : performances en fonction d'une grandeur (débit, ouverture, température) ;</li>\n<li>la <strong>notice d'instructions</strong> : installation, mise en service, conduite, maintenance, pièces de rechange, consignes de sécurité ;</li>\n<li>la <strong>plaque signalétique</strong> fixée sur l'appareil : constructeur, type, numéro de série, caractéristiques nominales, marquages réglementaires (par exemple marquage ATEX pour un matériel destiné à une zone à risque d'explosion).</li>\n</ul>\n<p>Une fiche technique distingue souvent les <strong>conditions de service</strong> (débit normal, pression et température réelles), les <strong>conditions de calcul</strong> (valeurs maximales pour lesquelles l'appareil est conçu, avec une marge) et les <strong>limites</strong> à ne jamais dépasser. Les conditions de calcul d'un réservoir, par exemple, sont sa pression maximale admissible (PS) et ses températures minimale et maximale admissibles (TS), qui figurent aussi sur sa plaque.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> utiliser un équipement en dehors des conditions prévues par sa fiche technique (autre fluide, débit très différent, température plus élevée) est une <strong>modification</strong> qui doit être analysée et autorisée. La compatibilité des matériaux avec un nouveau produit, en particulier des joints, est un point de vigilance permanent.</div>"
      },
      {
       "titre": "Structure d'une fiche technique de pompe",
       "contenu": "\n<p>Prenons la fiche d'une pompe centrifuge, document fréquent dans les épreuves. Elle se lit par blocs :</p>\n<table>\n<thead><tr><th>Bloc</th><th>Informations</th></tr></thead>\n<tbody>\n<tr><td>Identification</td><td>repère de l'installation (P 302 A), constructeur, type, taille, numéro de série</td></tr>\n<tr><td>Fluide</td><td>nature, température de pompage, masse volumique, viscosité, pression de vapeur, présence de solides</td></tr>\n<tr><td>Conditions de service</td><td>débit nominal, HMT au débit nominal, pression d'aspiration, NPSH disponible du circuit</td></tr>\n<tr><td>Performances</td><td>vitesse de rotation, diamètre de roue, rendement, puissance absorbée, NPSH requis</td></tr>\n<tr><td>Construction</td><td>matériaux du corps, de la roue, de l'arbre ; type de garniture et plan d'alimentation ; type de roulements</td></tr>\n<tr><td>Moteur</td><td>puissance, tension, vitesse, indice de protection, marquage ATEX éventuel</td></tr>\n<tr><td>Limites</td><td>débit minimal continu, débit maximal, température maximale, pression maximale du corps</td></tr>\n</tbody>\n</table>\n<p>La courbe jointe trace, en fonction du débit, la HMT pour un ou plusieurs diamètres de roue, le rendement, la puissance absorbée et le NPSH requis. La zone de meilleur rendement (souvent notée BEP, best efficiency point) est celle où la pompe s'use le moins.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> faire fonctionner une pompe centrifuge longtemps à très faible débit (vanne de refoulement presque fermée) l'échauffe et la fait vibrer. Le <strong>débit minimal continu</strong> indiqué par le constructeur doit être respecté, si nécessaire par une ligne de recirculation.</div>"
      },
      {
       "titre": "Méthode de vérification d'un équipement",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'un équipement convient à une nouvelle condition.<br>1. Écrire clairement la nouvelle condition demandée (fluide, débit, pression, température).<br>2. Relever dans la fiche technique et la notice les valeurs correspondantes : nominales, limites et matériaux.<br>3. Calculer les grandeurs nécessaires à la comparaison (HMT, puissance, débit massique) avec des unités cohérentes.<br>4. Placer le nouveau point sur la courbe caractéristique et lire les grandeurs associées (HMT disponible, rendement, puissance, NPSH requis).<br>5. Comparer point par point dans un tableau : exigence, valeur de l'équipement, conclusion.<br>6. Conclure globalement : convient, convient sous condition (préciser laquelle), ne convient pas (préciser pourquoi et proposer une solution).</div>\n<p>Une conclusion professionnelle ne se limite pas à « oui » ou « non ». Elle cite les valeurs comparées et la marge restante. Par exemple : « La pompe fournit 32 m à 40 m³/h pour un besoin de 28 m : la marge de 4 m est suffisante. Le NPSH requis de 3,5 m reste inférieur au NPSH disponible de 5,2 m. La pompe convient. »</p>"
      },
      {
       "titre": "Exemple commenté : augmentation de débit d'une pompe de transfert",
       "contenu": "\n<p><strong>Document décrit.</strong> Fiche technique de la pompe P 105, pompe centrifuge de transfert d'eau de procédé à 20 °C. Conditions de service : 30 m³/h à 35 m de HMT. Vitesse 2 900 tr/min, roue de diamètre 200 mm. Moteur 7,5 kW. Corps et roue en acier inoxydable. Débit minimal continu : 8 m³/h. La courbe constructeur pour la roue de 200 mm donne les points suivants :</p>\n<table>\n<thead><tr><th>Débit (m³/h)</th><th>HMT (m)</th><th>Rendement (%)</th><th>NPSH requis (m)</th></tr></thead>\n<tbody>\n<tr><td>10</td><td>42</td><td>45</td><td>1,8</td></tr>\n<tr><td>20</td><td>40</td><td>62</td><td>2,0</td></tr>\n<tr><td>30</td><td>36</td><td>70</td><td>2,6</td></tr>\n<tr><td>40</td><td>30</td><td>69</td><td>3,6</td></tr>\n<tr><td>50</td><td>22</td><td>60</td><td>5,0</td></tr>\n</tbody>\n</table>\n<p>On envisage de porter le débit à 40 m³/h. Le service travaux a calculé que, à 40 m³/h, le circuit demande une HMT de 39 m (pertes de charge accrues) et que le NPSH disponible est de 4,5 m.</p>\n<p><strong>Analyse modèle.</strong></p>\n<table>\n<thead><tr><th>Critère</th><th>Besoin</th><th>Pompe à 40 m³/h</th><th>Conclusion</th></tr></thead>\n<tbody>\n<tr><td>HMT</td><td>39 m</td><td>30 m</td><td>insuffisante : manque 9 m</td></tr>\n<tr><td>NPSH</td><td>disponible 4,5 m</td><td>requis 3,6 m</td><td>marge de 0,9 m, faible mais positive</td></tr>\n<tr><td>Rendement</td><td>–</td><td>69 %</td><td>proche du meilleur rendement</td></tr>\n<tr><td>Puissance absorbée</td><td>–</td><td>1 000 × 9,81 × (40 / 3 600) × 30 / 0,69 ≈ 4,7 kW</td><td>compatible avec le moteur de 7,5 kW</td></tr>\n</tbody>\n</table>\n<p>Conclusion rédigée : « Avec la roue actuelle de 200 mm, la pompe P 105 ne peut pas assurer 40 m³/h dans ce circuit : elle ne fournit que 30 m de HMT pour un besoin de 39 m. Le point de fonctionnement réel s'établira à un débit plus faible, à l'intersection de la courbe de la pompe et de la courbe du réseau. Il faut soit réduire les pertes de charge du circuit (augmentation de diamètre d'une portion de tuyauterie, suppression d'un filtre ou d'une vanne inutile), soit choisir une roue plus grande ou une autre pompe, en vérifiant alors la puissance du moteur et le NPSH. »</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une telle analyse est réalisée avant toute modification et archivée dans le dossier de modification. Le pilote y contribue en fournissant les valeurs réellement mesurées en exploitation (pressions d'aspiration et de refoulement, débit, intensité moteur), souvent différentes des valeurs théoriques de la fiche d'origine.</div>"
      },
      {
       "titre": "Autres fiches techniques courantes",
       "contenu": "\n<p>La même démarche s'applique aux autres équipements :</p>\n<table>\n<thead><tr><th>Équipement</th><th>Données à repérer</th></tr></thead>\n<tbody>\n<tr><td>Vanne de régulation</td><td>DN, coefficient de débit Kv (débit d'eau en m³/h sous 1 bar de perte de charge, vanne ouverte), caractéristique (linéaire, égal pourcentage), position de sécurité, matériaux, classe d'étanchéité</td></tr>\n<tr><td>Échangeur</td><td>puissance, surface d'échange, débits et températures des deux fluides, pressions de calcul de chaque côté, matériaux, pertes de charge admissibles</td></tr>\n<tr><td>Transmetteur</td><td>étendue de mesure, précision, signal de sortie, température et pression maximales du procédé, matériaux en contact, marquage ATEX</td></tr>\n<tr><td>Soupape de sécurité</td><td>pression de tarage, débit d'évacuation, fluide, sortie (atmosphère ou collecteur)</td></tr>\n<tr><td>Réservoir</td><td>volume, pression et températures admissibles, matériau et revêtement, équipements (évents, trous d'homme, piquages)</td></tr>\n</tbody>\n</table>\n<p>Les erreurs les plus fréquentes dans l'exploitation de ces documents sont :</p>\n<ul>\n<li>lire une courbe pour un autre diamètre de roue ou une autre vitesse que ceux de l'équipement ;</li>\n<li>oublier de convertir les unités (m³/h et L/s, bar et m de colonne de liquide) ;</li>\n<li>appliquer une courbe établie pour l'eau à un liquide plus dense ou plus visqueux sans correction ;</li>\n<li>confondre pression de service, pression de calcul et pression d'épreuve ;</li>\n<li>conclure sans citer les valeurs comparées.</li>\n</ul>"
      },
      {
       "titre": "Lire une plaque signalétique de moteur",
       "contenu": "\n<p>La plaque d'un moteur électrique asynchrone, qui entraîne la plupart des pompes, agitateurs et ventilateurs, donne des informations directement utiles au pilote et au diagnostic :</p>\n<table>\n<thead><tr><th>Indication</th><th>Signification</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Puissance (kW)</td><td>puissance mécanique utile disponible sur l'arbre</td><td>comparer à la puissance absorbée par la pompe</td></tr>\n<tr><td>Tension et couplage (par exemple 400 V en étoile ou en triangle)</td><td>alimentation prévue</td><td>vérification par l'électricien habilité</td></tr>\n<tr><td>Intensité nominale (A)</td><td>courant absorbé à pleine charge</td><td>comparer à l'intensité mesurée : une valeur supérieure signale une surcharge</td></tr>\n<tr><td>Vitesse (tr/min)</td><td>vitesse de rotation à pleine charge, légèrement inférieure à la vitesse de synchronisme</td><td>vérifier la cohérence avec la courbe de la pompe</td></tr>\n<tr><td>Indice de protection (IP)</td><td>protection contre les poussières et l'eau</td><td>adaptation à un local humide ou à un lavage au jet</td></tr>\n<tr><td>Marquage ATEX</td><td>groupe, catégorie, mode de protection, classe de température</td><td>vérifier l'adéquation au zonage de la zone d'implantation</td></tr>\n</tbody>\n</table>\n<p>Lors d'un diagnostic, l'intensité mesurée rapportée à l'intensité nominale renseigne sur le taux de charge : une pompe dont le moteur consomme durablement plus que son intensité nominale fonctionne hors de son domaine (débit excessif, liquide plus dense ou plus visqueux que prévu, frottement mécanique).</p>"
      }
     ],
     "points_cles": [
      "Fiche technique, courbes, notice et plaque signalétique forment la documentation d'un équipement.",
      "On distingue conditions de service, conditions de calcul et limites à ne jamais dépasser.",
      "Une utilisation hors des conditions prévues est une modification à analyser et autoriser.",
      "La courbe de pompe donne HMT, rendement, puissance et NPSH requis en fonction du débit, pour un diamètre de roue donné.",
      "Le débit minimal continu d'une pompe centrifuge doit être respecté.",
      "Une vérification compare, critère par critère, le besoin et la capacité de l'équipement dans un tableau.",
      "Une conclusion professionnelle cite les valeurs, la marge et propose une solution si l'équipement ne convient pas.",
      "Les erreurs classiques portent sur les unités, la courbe utilisée et la confusion des pressions."
     ],
     "lexique": [
      {
       "terme": "Fiche technique",
       "def": "Document du constructeur décrivant les conditions de service, les caractéristiques et les limites d'un équipement."
      },
      {
       "terme": "Plaque signalétique",
       "def": "Plaque fixée sur l'équipement indiquant constructeur, type, numéro de série et caractéristiques nominales."
      },
      {
       "terme": "Conditions de calcul",
       "def": "Valeurs maximales de pression et de température pour lesquelles un équipement est conçu."
      },
      {
       "terme": "PS",
       "def": "Pression maximale admissible d'un équipement sous pression."
      },
      {
       "terme": "Point de meilleur rendement",
       "def": "Débit auquel une pompe atteint son rendement maximal et s'use le moins."
      },
      {
       "terme": "Débit minimal continu",
       "def": "Débit en dessous duquel une pompe centrifuge ne doit pas fonctionner durablement."
      },
      {
       "terme": "Kv",
       "def": "Coefficient de débit d'une vanne : débit d'eau en m³/h sous 1 bar de perte de charge."
      },
      {
       "terme": "Pression de tarage",
       "def": "Pression à laquelle une soupape de sécurité commence à s'ouvrir."
      },
      {
       "terme": "Notice d'instructions",
       "def": "Document du constructeur décrivant installation, mise en service, conduite et maintenance."
      }
     ]
    },
    {
     "id": "bpce-doc-fds",
     "titre": "Exploiter une fiche de données de sécurité et une étiquette",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Connaître la structure en seize rubriques d'une fiche de données de sécurité.",
      "Retrouver rapidement l'information utile selon la situation : manipulation, stockage, fuite, incendie, accident.",
      "Relier l'étiquette CLP d'un emballage aux rubriques de la FDS.",
      "Déduire d'une FDS des mesures de prévention concrètes pour un poste de travail.",
      "Identifier les incompatibilités entre produits pour organiser un stockage."
     ],
     "sections": [
      {
       "titre": "La FDS : un document réglementaire",
       "contenu": "\n<p>La <strong>fiche de données de sécurité</strong> (FDS) est fournie obligatoirement par le fournisseur de toute substance ou de tout mélange classé dangereux. Son contenu est fixé par le règlement européen REACH (annexe II) ; elle est rédigée en français pour un produit mis sur le marché en France et doit être mise à jour lorsque des informations nouvelles apparaissent. Les FDS des produits utilisés sur un poste doivent être accessibles aux opérateurs et sont transmises au médecin du travail.</p>\n<p>Elle comporte toujours <strong>seize rubriques</strong> dans le même ordre :</p>\n<table>\n<thead><tr><th>N°</th><th>Rubrique</th><th>Usage principal</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Identification de la substance ou du mélange et du fournisseur</td><td>vérifier le produit, numéro d'appel d'urgence</td></tr>\n<tr><td>2</td><td>Identification des dangers</td><td>classement, éléments d'étiquetage</td></tr>\n<tr><td>3</td><td>Composition, informations sur les composants</td><td>substances dangereuses et concentrations</td></tr>\n<tr><td>4</td><td>Premiers secours</td><td>conduite en cas d'accident</td></tr>\n<tr><td>5</td><td>Mesures de lutte contre l'incendie</td><td>moyens d'extinction adaptés et interdits</td></tr>\n<tr><td>6</td><td>Mesures à prendre en cas de dispersion accidentelle</td><td>fuite, épandage</td></tr>\n<tr><td>7</td><td>Manipulation et stockage</td><td>précautions, conditions de stockage, incompatibilités</td></tr>\n<tr><td>8</td><td>Contrôles de l'exposition, protection individuelle</td><td>VLEP, protections collectives, EPI précis</td></tr>\n<tr><td>9</td><td>Propriétés physiques et chimiques</td><td>aspect, pH, point d'éclair, masse volumique…</td></tr>\n<tr><td>10</td><td>Stabilité et réactivité</td><td>conditions et matières à éviter, produits de décomposition</td></tr>\n<tr><td>11</td><td>Informations toxicologiques</td><td>effets sur la santé</td></tr>\n<tr><td>12</td><td>Informations écologiques</td><td>effets sur l'environnement</td></tr>\n<tr><td>13</td><td>Considérations relatives à l'élimination</td><td>déchets, emballages</td></tr>\n<tr><td>14</td><td>Informations relatives au transport</td><td>numéro ONU, classe de danger pour le transport</td></tr>\n<tr><td>15</td><td>Informations relatives à la réglementation</td><td>textes particuliers applicables</td></tr>\n<tr><td>16</td><td>Autres informations</td><td>date, révisions, texte intégral des mentions H</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on n'a pas besoin de lire une FDS du début à la fin à chaque fois. On va directement à la rubrique qui répond à la question posée : 4 en cas d'accident, 6 en cas de fuite, 5 en cas d'incendie, 7 et 10 pour stocker, 8 pour s'équiper.</div>"
      },
      {
       "titre": "De l'étiquette à la FDS",
       "contenu": "\n<p>L'<strong>étiquette</strong> de l'emballage résume les dangers ; la FDS les détaille. On retrouve sur l'étiquette, conformément au règlement CLP : l'identification du produit et du fournisseur, les pictogrammes, la mention d'avertissement, les mentions de danger H, les conseils de prudence P et, si nécessaire, des informations supplémentaires (mentions EUH). Ces éléments sont repris à la rubrique 2 de la FDS.</p>\n<p>Les mentions H sont codées par familles : H2xx pour les dangers physiques (H225 : liquide et vapeurs très inflammables), H3xx pour les dangers pour la santé (H314 : brûlures graves de la peau et lésions oculaires graves ; H335 : peut irriter les voies respiratoires), H4xx pour les dangers pour l'environnement (H410 : très toxique pour les organismes aquatiques, entraîne des effets néfastes à long terme). Les conseils P suivent la même logique : P2xx prévention, P3xx intervention, P4xx stockage, P5xx élimination.</p>\n<p>Lors du <strong>transport</strong>, les colis et citernes portent d'autres étiquettes, définies par la réglementation du transport de marchandises dangereuses (ADR pour la route) : losanges de classe de danger et <strong>numéro ONU</strong> à quatre chiffres. Ces informations figurent à la rubrique 14 et servent notamment lors des réceptions et des dépotages.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un produit transvasé dans un autre récipient (bidon, seau, bécher) doit être étiqueté. Un récipient sans étiquette est une cause classique d'accidents : ingestion, mélange incompatible, mauvais EPI.</div>"
      },
      {
       "titre": "Méthode de lecture selon la situation",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter une FDS pour préparer un poste de travail.<br>1. Rubrique 1 : vérifier que la FDS correspond au produit exact (nom commercial, concentration, fournisseur) et à une version récente (rubrique 16).<br>2. Rubrique 2 : relever classement, pictogrammes et mentions H.<br>3. Rubrique 9 : relever les propriétés utiles au poste (état physique, pH, point d'éclair, masse volumique, pression de vapeur).<br>4. Rubriques 7 et 10 : relever les conditions de stockage, les matières incompatibles et les conditions à éviter.<br>5. Rubrique 8 : relever les VLEP, les protections collectives et le détail des EPI (type de gants avec matériau et épaisseur, protection oculaire, protection respiratoire avec type de filtre).<br>6. Rubriques 4, 5 et 6 : préparer la conduite à tenir en cas d'accident, d'incendie ou de fuite.<br>7. Rubriques 12 et 13 : prévoir la gestion des déchets et la protection de l'environnement.<br>8. Traduire le tout en consignes concrètes de poste, rédigées simplement.</div>\n<p>Dans l'épreuve écrite, la FDS est un support privilégié pour évaluer la capacité à <strong>traiter l'information</strong> : on ne demande pas de recopier la fiche, mais de sélectionner les informations pertinentes pour une situation donnée et de les transformer en mesures.</p>"
      },
      {
       "titre": "Exemple commenté : soude en solution à 30 %",
       "contenu": "\n<p><strong>Document décrit.</strong> Extraits d'une FDS « Hydroxyde de sodium en solution 30 % ».</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Extrait</th></tr></thead>\n<tbody>\n<tr><td>2</td><td>Pictogramme corrosion ; mention d'avertissement « Danger » ; H290 peut être corrosif pour les métaux ; H314 provoque de graves brûlures de la peau et de graves lésions des yeux.</td></tr>\n<tr><td>4</td><td>Contact oculaire : rincer immédiatement et abondamment à l'eau pendant au moins 15 minutes en maintenant les paupières écartées ; appeler un médecin. Contact cutané : retirer les vêtements contaminés, rincer abondamment.</td></tr>\n<tr><td>6</td><td>Endiguer, absorber avec un matériau inerte, ne pas rejeter à l'égout ; neutraliser selon les consignes du site.</td></tr>\n<tr><td>7</td><td>Stocker dans des récipients fermés, en acier ou en polyéthylène ; ne pas utiliser d'aluminium, de zinc, d'étain. Tenir à l'écart des acides.</td></tr>\n<tr><td>8</td><td>Lunettes-masque et écran facial ; gants résistants aux produits chimiques (matériau et épaisseur précisés) ; vêtements de protection.</td></tr>\n<tr><td>9</td><td>Liquide incolore ; pH supérieur à 13 ; masse volumique environ 1,33 g/cm³ ; non inflammable.</td></tr>\n<tr><td>10</td><td>Réaction violente et exothermique avec les acides ; réagit avec l'aluminium et le zinc en dégageant de l'hydrogène, gaz inflammable.</td></tr>\n<tr><td>14</td><td>UN 1824, hydroxyde de sodium en solution, classe 8.</td></tr>\n</tbody>\n</table>\n<p><strong>Analyse modèle</strong> : consignes pour le dépotage d'une citerne de soude dans le bac de stockage B 303.</p>\n<ul>\n<li><strong>Dangers</strong> : produit corrosif provoquant des brûlures graves, en particulier oculaires, et attaquant certains métaux.</li>\n<li><strong>Avant dépotage</strong> : vérifier sur le bon de livraison et l'étiquetage de la citerne le numéro UN 1824 et la concentration ; vérifier que le flexible et les raccords sont compatibles (pas d'aluminium ni de laiton zingué) ; vérifier que le bac a la place nécessaire et que la rétention est vide et étanche ; vérifier l'accès à la douche de sécurité et au lave-œil.</li>\n<li><strong>EPI</strong> : lunettes-masque et écran facial, gants du matériau indiqué en rubrique 8, combinaison ou tablier, bottes.</li>\n<li><strong>Pendant</strong> : connexion avec raccord dédié à la soude (détrompeur) pour exclure tout dépotage dans un bac d'acide ; présence continue d'un opérateur ; surveillance du niveau.</li>\n<li><strong>En cas de projection oculaire</strong> : rinçage immédiat au lave-œil pendant au moins 15 minutes, alerte des secours.</li>\n<li><strong>En cas de fuite</strong> : arrêter le dépotage, contenir dans la rétention, absorber ou neutraliser selon la consigne du site, sans rejet à l'égout.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> de nombreux accidents graves de dépotage proviennent d'une erreur de bac : une base dépotée dans un stockage d'acide, ou un hypochlorite dans un bac d'acide. Les sites utilisent des raccords de formes différentes par produit, des cadenas sur les bouches de dépotage et une double vérification documentaire avant ouverture.</div>"
      },
      {
       "titre": "Organiser un stockage avec les FDS",
       "contenu": "\n<p>Les rubriques 7 et 10 permettent de construire un <strong>tableau d'incompatibilités</strong> pour un magasin ou une aire de stockage. On regroupe les produits par familles de danger et l'on sépare les familles incompatibles par des rétentions distinctes, des distances ou des murs.</p>\n<table>\n<thead><tr><th>Famille</th><th>Incompatible notamment avec</th><th>Risque</th></tr></thead>\n<tbody>\n<tr><td>Acides</td><td>bases, hypochlorites, cyanures, sulfures</td><td>réaction violente, dégagement de gaz toxiques (chlore, acide cyanhydrique, sulfure d'hydrogène)</td></tr>\n<tr><td>Bases</td><td>acides, certains métaux (aluminium, zinc)</td><td>réaction exothermique, hydrogène</td></tr>\n<tr><td>Comburants (peroxydes, nitrates, chlorates)</td><td>combustibles, matières organiques, réducteurs</td><td>incendie, explosion</td></tr>\n<tr><td>Liquides inflammables</td><td>comburants, sources d'inflammation</td><td>incendie, explosion</td></tr>\n</tbody>\n</table>\n<p>Pour chaque stockage, on vérifie aussi les exigences réglementaires de l'installation (rétentions, quantités maximales, éloignements), qui figurent dans l'arrêté préfectoral du site.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> deux produits peuvent être incompatibles sans que leurs pictogrammes le laissent deviner : un acide et une eau de Javel ne portent pas de pictogramme commun, mais leur mélange dégage du chlore. Seule la lecture des rubriques 7 et 10 permet de l'établir.</div>"
      }
     ],
     "points_cles": [
      "La FDS est obligatoire pour tout produit dangereux, comporte seize rubriques dans un ordre fixe et doit être à jour.",
      "On va directement à la rubrique utile : 4 accident, 5 incendie, 6 fuite, 7 et 10 stockage, 8 protection.",
      "L'étiquette CLP reprend les éléments de la rubrique 2 : pictogrammes, mention d'avertissement, mentions H et conseils P.",
      "Les mentions H2xx concernent les dangers physiques, H3xx la santé, H4xx l'environnement.",
      "Le numéro ONU et la classe de transport (rubrique 14) servent aux réceptions et dépotages.",
      "La rubrique 8 précise le type d'EPI, y compris le matériau des gants et le type de filtre respiratoire.",
      "Une analyse de FDS aboutit à des consignes concrètes de poste, pas à une recopie.",
      "Les incompatibilités entre produits se déduisent des rubriques 7 et 10 et imposent des stockages séparés."
     ],
     "lexique": [
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité en seize rubriques, fournie pour tout produit dangereux."
      },
      {
       "terme": "REACH",
       "def": "Règlement européen sur l'enregistrement, l'évaluation et l'autorisation des substances chimiques."
      },
      {
       "terme": "Mention d'avertissement",
       "def": "Mot « Danger » ou « Attention » indiquant le degré de gravité du danger."
      },
      {
       "terme": "Conseil de prudence P",
       "def": "Phrase codée décrivant les mesures pour prévenir ou réduire les effets d'un produit."
      },
      {
       "terme": "Numéro ONU",
       "def": "Numéro à quatre chiffres identifiant une matière dangereuse pour le transport."
      },
      {
       "terme": "ADR",
       "def": "Accord européen relatif au transport international des marchandises dangereuses par route."
      },
      {
       "terme": "Incompatibilité",
       "def": "Propriété de deux produits dont le contact peut provoquer une réaction dangereuse."
      },
      {
       "terme": "Dépotage",
       "def": "Transfert d'un produit d'une citerne de livraison vers un stockage du site."
      },
      {
       "terme": "Lave-œil",
       "def": "Équipement de rinçage d'urgence des yeux après une projection."
      }
     ]
    },
    {
     "id": "bpce-doc-prevention-travaux",
     "titre": "Analyser un dossier de prévention : évaluation des risques, permis et consignation",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les documents du dossier de prévention des risques professionnels et de protection de l'environnement.",
      "Lire une grille d'évaluation des risques d'un poste ou d'une opération.",
      "Contrôler un permis de travail et une fiche de consignation par rapport à un schéma TI.",
      "Repérer les oublis et incohérences d'un dossier de prévention.",
      "Proposer des mesures de prévention hiérarchisées et argumentées."
     ],
     "sections": [
      {
       "titre": "Le dossier de prévention",
       "contenu": "\n<p>À côté du dossier technique de fabrication, l'épreuve écrite d'étude d'un procédé s'appuie sur un <strong>dossier de prévention des risques professionnels et de protection de l'environnement</strong>. Il rassemble les documents qui organisent la sécurité d'une installation et des interventions :</p>\n<table>\n<thead><tr><th>Document</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Extrait du document unique d'évaluation des risques</td><td>dangers, situations exposantes, cotation des risques, mesures existantes et à mettre en place</td></tr>\n<tr><td>Analyse de risques d'une opération</td><td>étapes d'une tâche, dangers de chaque étape, mesures associées</td></tr>\n<tr><td>Permis de travail et permis spécifiques</td><td>autorisation écrite d'une intervention et conditions de sécurité</td></tr>\n<tr><td>Fiche de consignation</td><td>liste des points d'isolement, ordre des manœuvres, vérifications</td></tr>\n<tr><td>Plan de prévention</td><td>analyse des risques d'interférence avec une entreprise extérieure</td></tr>\n<tr><td>Consignes de sécurité et d'environnement</td><td>conduite en cas d'alarme, de fuite, d'incendie, gestion des déchets et rejets</td></tr>\n<tr><td>FDS des produits concernés</td><td>dangers et précautions</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> tous ces documents décrivent une même réalité. L'analyse consiste à vérifier qu'ils sont <strong>cohérents</strong> entre eux et avec le schéma TI : un danger identifié doit avoir une mesure, une mesure doit apparaître dans le permis, une vanne citée dans la consignation doit exister sur le schéma et suffire à isoler l'équipement.</div>"
      },
      {
       "titre": "Lire une évaluation des risques",
       "contenu": "\n<p>Une grille d'évaluation des risques présente généralement, pour chaque situation de travail, les colonnes suivantes : tâche ou étape, danger, situation dangereuse (comment la personne est exposée), dommage possible, cotation du risque, mesures de prévention existantes, risque résiduel, actions à engager.</p>\n<p>La <strong>cotation</strong> combine souvent la <strong>gravité</strong> du dommage (de 1, blessure légère, à 4, accident mortel ou irréversible) et la <strong>probabilité</strong> ou la fréquence d'exposition (de 1, rare, à 4, permanente). Leur produit donne un niveau de priorité. Les échelles exactes sont propres à chaque entreprise ; on les lit dans la légende de la grille.</p>\n<p>Les mesures de prévention sont jugées selon les <strong>principes généraux de prévention</strong> du Code du travail, qui donnent un ordre de priorité : éviter le risque, l'évaluer, le combattre à la source, adapter le travail à l'homme, tenir compte de l'évolution de la technique, remplacer ce qui est dangereux par ce qui l'est moins, planifier la prévention, donner la priorité aux mesures de protection collective sur les mesures de protection individuelle, donner les instructions appropriées.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une grille dont toutes les mesures sont des EPI ou des consignes (« faire attention », « porter des gants ») est une grille faible. Un correcteur, comme un inspecteur, attend des mesures techniques et collectives en priorité : système clos, captage, détrompeur, asservissement, rétention.</div>"
      },
      {
       "titre": "Contrôler un permis et une consignation",
       "contenu": "\n<p>Un <strong>permis de travail</strong> comporte en général : identification de l'équipement (repère, localisation), description des travaux, date et durée de validité, entreprise et intervenants, risques identifiés, préparation réalisée par l'exploitation (vidange, rinçage, inertage, consignations), mesures pendant les travaux (EPI, surveillance, mesures d'atmosphère, balisage), signatures de délivrance, d'acceptation et de fin de travaux.</p>\n<p>La <strong>fiche de consignation</strong> liste les points d'isolement (sectionneurs, vannes, joints pleins), leur position requise, le numéro de cadenas posé, la personne qui a manœuvré et la vérification réalisée.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> contrôler une consignation sur un schéma TI.<br>1. Entourer sur le TI l'équipement objet des travaux.<br>2. Suivre chaque ligne qui y entre ou en sort, jusqu'à la première vanne d'isolement : ce sont les points d'isolement nécessaires. Ne pas oublier les lignes d'utilités (vapeur, azote, eau), les évents, les retours, les by-pass.<br>3. Repérer les énergies : moteur de pompe ou d'agitateur, vannes motorisées, actionneurs pneumatiques, ressorts.<br>4. Comparer avec la fiche de consignation : chaque point du TI est-il présent ? Chaque point de la fiche existe-t-il sur le TI ?<br>5. Vérifier les moyens de purge et de vérification d'absence de produit entre les isolements et l'équipement.<br>6. Vérifier que le niveau d'isolement est adapté au produit (simple vanne, double vanne avec purge, joint plein).<br>7. Rédiger les écarts trouvés et la correction à apporter.</div>"
      },
      {
       "titre": "Exemple commenté : remplacement d'une garniture de pompe d'acide",
       "contenu": "\n<p><strong>Document décrit.</strong> Un permis de travail est préparé pour le remplacement de la garniture mécanique de la pompe P 402 B, qui transfère de l'acide sulfurique à 96 % du bac B 401 vers le réacteur R 410. Le TI montre : sur l'aspiration de P 402 B, une vanne manuelle V 4021 ; sur le refoulement, un clapet anti-retour puis une vanne manuelle V 4023 ; une purge de corps de pompe V 4025 vers un collecteur de drainage relié à une fosse de neutralisation ; un pot de barrage de garniture double alimenté par une ligne d'eau déminéralisée avec la vanne V 4027 ; un moteur M 402 B. La pompe P 402 A, en parallèle, reste en service.</p>\n<p>Fiche de consignation proposée : V 4021 fermée et cadenassée ; V 4023 fermée et cadenassée ; sectionneur de M 402 B ouvert, cadenassé, avec essai de démarrage négatif ; purge V 4025 ouverte. Permis de travail : EPI « lunettes de sécurité, gants » ; risques « chimique ».</p>\n<p><strong>Analyse modèle.</strong></p>\n<table>\n<thead><tr><th>Point contrôlé</th><th>Constat</th><th>Correction proposée</th></tr></thead>\n<tbody>\n<tr><td>Isolement aspiration et refoulement</td><td>présent par simple vanne</td><td>compte tenu de l'acide concentré et de la pompe A en service, vérifier si la consigne du site impose une double barrière ou un joint plein ; à défaut, contrôler l'étanchéité des vannes par la purge</td></tr>\n<tr><td>Ligne de barrage de garniture</td><td>V 4027 absente de la fiche</td><td>ajouter la fermeture et la décompression du circuit de barrage</td></tr>\n<tr><td>Vidange</td><td>purge ouverte, mais pas de rinçage</td><td>prévoir un rinçage du corps de pompe et une vérification du pH à la purge avant ouverture</td></tr>\n<tr><td>Énergie électrique</td><td>correcte, essai de démarrage prévu</td><td>conforme</td></tr>\n<tr><td>Risque spécifique</td><td>l'acide sulfurique concentré réagit fortement avec l'eau en dégageant beaucoup de chaleur</td><td>le rinçage doit suivre une procédure adaptée (vidange maximale préalable, eau en grande quantité), à préciser par le site</td></tr>\n<tr><td>EPI</td><td>« lunettes de sécurité, gants » insuffisant</td><td>lunettes-masque et écran facial, gants et vêtements résistant à l'acide selon la FDS, bottes ; douche et lave-œil vérifiés</td></tr>\n<tr><td>Ouverture du corps</td><td>non précisée</td><td>desserrage progressif des brides, du côté opposé à l'intervenant, avec bac de récupération</td></tr>\n<tr><td>Coactivité</td><td>P 402 A en service à proximité</td><td>balisage, information de la salle de contrôle, interdiction de manœuvre sur la ligne commune</td></tr>\n</tbody>\n</table>\n<p>Conclusion rédigée : « La consignation proposée isole correctement l'énergie électrique et les lignes principales, mais elle oublie le circuit de barrage de la garniture et ne prévoit ni rinçage ni vérification d'absence de produit. Les EPI prévus ne sont pas adaptés à un acide concentré. Le permis ne peut pas être délivré en l'état : il faut compléter la fiche de consignation et les mesures de préparation, puis faire valider le permis. »</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les intervenants de maintenance demandent souvent à l'exploitant d'ouvrir devant eux la purge de l'équipement pour constater qu'il est vide et décomprimé. Ce « constat contradictoire » sur le terrain est une bonne pratique qui évite bien des accidents.</div>"
      },
      {
       "titre": "Protection de l'environnement dans le dossier",
       "contenu": "\n<p>Le dossier de prévention traite aussi de la <strong>protection de l'environnement</strong>. On y vérifie :</p>\n<ul>\n<li>que les produits vidangés, les eaux de rinçage et les pièces souillées ont une destination définie : récupération dans le procédé, fosse de neutralisation, station de traitement, filière de déchets dangereux ;</li>\n<li>que les opérations à risque de fuite sont réalisées sur rétention ou avec des moyens de confinement (bacs, obturateurs de regards, absorbants) ;</li>\n<li>que les rejets atmosphériques (évents, purges de gaz) sont dirigés vers un traitement (laveur, torchère, filtre) ;</li>\n<li>que les déchets sont triés et identifiés, et que les déchets dangereux sont suivis par un bordereau de suivi jusqu'à leur élimination.</li>\n</ul>\n<p>Une rubrique « environnement » vide ou réduite à « sans objet » doit alerter dès qu'un produit chimique, une eau de lavage ou une boue est en jeu.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un regard d'eaux pluviales situé près d'une zone d'intervention est une voie directe vers le milieu naturel. Avant toute opération de vidange ou de dépotage à proximité, on vérifie qu'il est obturé ou que les écoulements sont dirigés vers le réseau d'eaux industrielles traitées.</div>"
      }
     ],
     "points_cles": [
      "Le dossier de prévention réunit évaluation des risques, analyses d'opérations, permis, consignations, plan de prévention, consignes et FDS.",
      "L'analyse vérifie la cohérence des documents entre eux et avec le schéma TI.",
      "La cotation des risques combine gravité et probabilité selon l'échelle propre à l'entreprise.",
      "Les principes généraux de prévention donnent la priorité aux mesures collectives et techniques sur les EPI.",
      "Pour contrôler une consignation, on suit sur le TI toutes les lignes qui entrent et sortent, y compris utilités, évents et circuits auxiliaires.",
      "Une consignation de fluide prévoit isolement, vidange, rinçage ou inertage et vérification d'absence de produit.",
      "Les EPI doivent correspondre au produit réel, selon la rubrique 8 de la FDS.",
      "Le dossier précise la destination des produits vidangés, des eaux de rinçage et des déchets."
     ],
     "lexique": [
      {
       "terme": "Document unique",
       "def": "Document où l'employeur transcrit l'évaluation des risques professionnels de l'entreprise."
      },
      {
       "terme": "Cotation du risque",
       "def": "Évaluation chiffrée d'un risque combinant gravité et probabilité."
      },
      {
       "terme": "Principes généraux de prévention",
       "def": "Règles du Code du travail qui hiérarchisent les mesures de prévention."
      },
      {
       "terme": "Fiche de consignation",
       "def": "Document listant les points d'isolement d'un équipement, leur position et leur vérification."
      },
      {
       "terme": "Point d'isolement",
       "def": "Organe (vanne, sectionneur, joint plein) qui sépare l'équipement d'une source de produit ou d'énergie."
      },
      {
       "terme": "Fluide de barrage",
       "def": "Fluide propre alimentant une garniture double pour empêcher la fuite du produit pompé."
      },
      {
       "terme": "Coactivité",
       "def": "Présence simultanée de plusieurs activités ou entreprises pouvant interférer."
      },
      {
       "terme": "Bordereau de suivi des déchets",
       "def": "Document qui accompagne un déchet dangereux jusqu'à son élimination."
      },
      {
       "terme": "Risque résiduel",
       "def": "Risque qui subsiste après la mise en place des mesures de prévention."
      }
     ]
    }
   ]
  }
 ]
};
