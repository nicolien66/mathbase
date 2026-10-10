/* Polymates — Bac pro Cybersécurité, informatique et réseaux, électronique (CIEL) — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-ciel"] = {
 "id": "bp-ciel",
 "nom": "CIEL (cybersécurité, informatique et réseaux, électronique)",
 "icone": "🎓",
 "couleur": "#e6c27e",
 "intro": "Le baccalauréat professionnel Cybersécurité, informatique et réseaux, électronique (CIEL) forme des techniciens capables de réaliser et maintenir des produits électroniques, d'installer et d'exploiter des réseaux informatiques, et de développer des solutions qui valorisent les données en les sécurisant. Il mène aux métiers de technicien en électronique, technicien réseaux et télécommunications, technicien de maintenance informatique, technicien d'assistance et de support, ou installateur de systèmes connectés et de sûreté. Ce cours couvre les savoirs de la première et de la terminale, en prolongement du cours de seconde de la famille des métiers des transitions numérique et énergétique : électronique, réseaux, programmation et données, cybersécurité, organisation et sécurité des interventions. Il est organisé en deux blocs : un cours théorique, puis un bloc d'analyse de documents qui montre comment exploiter les schémas, fiches techniques, documents réseau, cahiers des charges et journaux rencontrés en situation d'évaluation et en entreprise.",
 "parties": [
  {
   "titre": "Partie 1 — Électronique : composants, fonctions et produits",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bciel-composants-electroniques",
     "titre": "Les composants électroniques passifs et actifs",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Identifier les composants passifs et actifs d'une carte électronique et donner leur rôle.",
      "Lire la valeur d'une résistance, d'un condensateur ou d'une inductance à partir de son marquage.",
      "Dimensionner la résistance de limitation d'une LED et vérifier la puissance dissipée.",
      "Expliquer le fonctionnement d'un transistor bipolaire et d'un MOSFET utilisés en commutation.",
      "Choisir un composant de remplacement à partir de ses caractéristiques essentielles."
     ],
     "sections": [
      {
       "titre": "Du circuit électrique à la carte électronique",
       "contenu": "\n<p>Le cours de seconde a présenté les grandeurs électriques (tension, intensité, résistance, puissance) et la loi d'Ohm. En première, ces lois servent à comprendre une <strong>carte électronique</strong>, c'est-à-dire un circuit imprimé sur lequel sont assemblés des composants qui traitent de l'énergie et de l'information. Un objet connecté, une box internet, une alarme ou un variateur contiennent tous une ou plusieurs cartes de ce type.</p>\n<p>On distingue deux grandes familles de composants :</p>\n<ul>\n<li>les <strong>composants passifs</strong>, qui ne peuvent pas amplifier un signal ni commander un courant : résistances, condensateurs, inductances, quartz, fusibles ;</li>\n<li>les <strong>composants actifs</strong>, qui ont besoin d'une alimentation pour fonctionner et qui peuvent commander ou amplifier : diodes (cas particulier, souvent classées à part), transistors, circuits intégrés, microcontrôleurs.</li>\n</ul>\n<p>Chaque composant existe en deux technologies de montage : <strong>traversant</strong> (les pattes traversent la carte, technologie THT) et <strong>CMS</strong>, composant monté en surface (technologie SMD en anglais). Les CMS dominent la production actuelle car ils sont petits et se posent automatiquement ; leur taille est donnée par un code de boîtier, par exemple 0805 (environ 2,0 mm × 1,25 mm) ou 0603 (environ 1,6 mm × 0,8 mm).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un composant se caractérise toujours par sa <strong>valeur</strong> (ohms, farads, henrys…), sa <strong>tolérance</strong>, ses <strong>limites</strong> (tension, courant, puissance, température) et son <strong>boîtier</strong>. Remplacer un composant, c'est respecter ces quatre critères.</div>"
      },
      {
       "titre": "Les résistances : valeurs normalisées et puissance",
       "contenu": "\n<p>La <strong>résistance</strong> limite le courant ou crée une tension (pont diviseur). Son unité est l'ohm (Ω). Les fabricants ne produisent pas toutes les valeurs : ils suivent des <strong>séries normalisées</strong> (norme CEI 60063). La série <strong>E12</strong> (tolérance 10 %) comprend 12 valeurs par décade : 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82. La série <strong>E24</strong> (5 %) en comprend 24, la série E96 (1 %) en comprend 96.</p>\n<p>Sur un composant traversant, la valeur se lit avec le <strong>code des couleurs</strong> : noir 0, marron 1, rouge 2, orange 3, jaune 4, vert 5, bleu 6, violet 7, gris 8, blanc 9. Pour une résistance à quatre anneaux, les deux premiers donnent les chiffres, le troisième le multiplicateur (puissance de 10), le quatrième la tolérance (or 5 %, argent 10 %). Sur un CMS, un code à trois chiffres est imprimé : « 472 » signifie 47 × 10<sup>2</sup> = 4 700 Ω = 4,7 kΩ ; « 4R7 » signifie 4,7 Ω.</p>\n<table>\n<thead><tr><th>Anneaux</th><th>Lecture</th><th>Valeur</th></tr></thead>\n<tbody>\n<tr><td>jaune, violet, rouge, or</td><td>4 – 7 – × 100 – 5 %</td><td>4,7 kΩ ± 5 %</td></tr>\n<tr><td>marron, noir, orange, or</td><td>1 – 0 – × 1 000 – 5 %</td><td>10 kΩ ± 5 %</td></tr>\n<tr><td>rouge, rouge, marron, or</td><td>2 – 2 – × 10 – 5 %</td><td>220 Ω ± 5 %</td></tr>\n</tbody>\n</table>\n<p>Une résistance dissipe une <strong>puissance</strong> P = R × I<sup>2</sup> = U<sup>2</sup> / R, transformée en chaleur. Elle doit être inférieure à la puissance nominale du composant : 0,25 W pour une résistance traversante courante, 0,125 W pour un CMS 0805, 0,1 W pour un 0603 (valeurs typiques à vérifier sur la fiche technique). On garde une marge : on vise au plus la moitié de la puissance nominale.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> dimensionner la résistance d'une LED alimentée en 5 V. La fiche technique donne une tension directe U<sub>F</sub> = 2,0 V et un courant conseillé I<sub>F</sub> = 10 mA.<br>1. Tension aux bornes de la résistance : U<sub>R</sub> = 5 – 2,0 = 3,0 V.<br>2. Valeur théorique : R = U<sub>R</sub> / I<sub>F</sub> = 3,0 / 0,010 = 300 Ω.<br>3. Choix dans la série E12 : on prend la valeur normalisée immédiatement supérieure, 330 Ω, pour ne pas dépasser le courant. Courant réel : 3,0 / 330 ≈ 9,1 mA.<br>4. Puissance : P = 3,0 × 0,0091 ≈ 0,027 W, très inférieure à 0,125 W : un CMS 0805 convient.</div>"
      },
      {
       "titre": "Condensateurs et inductances",
       "contenu": "\n<p>Le <strong>condensateur</strong> stocke une charge électrique. Sa capacité s'exprime en farads (F), en pratique en picofarads (pF), nanofarads (nF) ou microfarads (µF). On l'utilise pour <strong>filtrer</strong> une alimentation, <strong>découpler</strong> un circuit intégré (un condensateur de 100 nF placé au plus près de chaque broche d'alimentation absorbe les appels de courant rapides), créer une <strong>temporisation</strong> avec une résistance (constante de temps τ = R × C) ou bloquer une composante continue.</p>\n<table>\n<thead><tr><th>Type</th><th>Plage usuelle</th><th>Particularité</th></tr></thead>\n<tbody>\n<tr><td>Céramique multicouche (MLCC)</td><td>1 pF à quelques dizaines de µF</td><td>Non polarisé, très utilisé en CMS pour le découplage</td></tr>\n<tr><td>Électrolytique aluminium</td><td>1 µF à plusieurs milliers de µF</td><td><strong>Polarisé</strong> : la borne négative est repérée ; tension maximale impérative</td></tr>\n<tr><td>Tantale</td><td>0,1 µF à quelques centaines de µF</td><td>Polarisé, compact ; supporte mal les inversions et les surtensions</td></tr>\n<tr><td>Film plastique</td><td>1 nF à quelques µF</td><td>Stable, utilisé sur le secteur (classes X et Y pour l'antiparasitage)</td></tr>\n</tbody>\n</table>\n<p>Le marquage suit la même logique que les résistances, en picofarads : « 104 » signifie 10 × 10<sup>4</sup> pF = 100 nF. La <strong>tension de service</strong> est toujours indiquée : on choisit une tension au moins supérieure de 20 à 50 % à la tension réellement appliquée.</p>\n<p>L'<strong>inductance</strong> (ou bobine) s'oppose aux variations de courant. Son unité est le henry (H), en pratique le µH ou le mH. On la trouve dans les alimentations à découpage, les filtres antiparasites et les circuits radio. Une ferrite placée sur un câble joue un rôle voisin : elle atténue les parasites haute fréquence.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un condensateur électrolytique monté à l'envers ou soumis à une tension trop forte chauffe, gonfle et peut éclater. Avant de toucher une carte alimentée par le secteur, il faut vérifier que les gros condensateurs de filtrage sont déchargés : ils peuvent garder une tension dangereuse plusieurs minutes après la coupure.</div>"
      },
      {
       "titre": "Les diodes",
       "contenu": "\n<p>La <strong>diode</strong> ne laisse passer le courant que dans un sens, de l'<strong>anode</strong> vers la <strong>cathode</strong> (la cathode est repérée par un anneau ou un trait). En conduction, elle présente une tension de seuil d'environ 0,6 à 0,7 V pour une diode au silicium, 0,2 à 0,4 V pour une diode Schottky.</p>\n<ul>\n<li><strong>Diode de redressement</strong> (famille 1N400x) : transforme l'alternatif en courant d'un seul sens dans les alimentations.</li>\n<li><strong>Diode Schottky</strong> : faible seuil et commutation rapide ; utilisée dans les alimentations à découpage et les protections contre l'inversion de polarité.</li>\n<li><strong>Diode Zener</strong> : utilisée en inverse, elle maintient une tension à peu près constante (sa tension Zener, par exemple 5,1 V) ; sert de référence ou de protection.</li>\n<li><strong>Diode de roue libre</strong> : placée en parallèle sur une bobine de relais ou un moteur, elle évacue la surtension créée à l'ouverture du circuit et protège le transistor de commande.</li>\n<li><strong>Diode TVS</strong> (suppresseur de transitoires) : protège les entrées contre les décharges électrostatiques et les surtensions brèves.</li>\n<li><strong>LED</strong> (diode électroluminescente) : émet de la lumière ; sa tension directe dépend de la couleur (environ 1,8 à 2,2 V pour le rouge, 2,8 à 3,3 V pour le bleu ou le blanc).</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une carte qui ne s'allume plus après un branchement à l'envers, le technicien contrôle en premier la diode de protection d'entrée et le fusible. Le multimètre en position « test diode » affiche la tension de seuil dans le sens passant et « OL » dans le sens bloqué : une diode qui affiche presque 0 V dans les deux sens est en court-circuit.</div>"
      },
      {
       "titre": "Le transistor en commutation",
       "contenu": "\n<p>Un microcontrôleur ne peut fournir que quelques milliampères sur une broche de sortie, souvent 10 à 20 mA au maximum selon la fiche technique. Pour commander un relais, un moteur, un ruban de LED ou un buzzer, on utilise un <strong>transistor</strong> fonctionnant en <strong>commutation</strong>, c'est-à-dire comme un interrupteur commandé : il est soit <strong>bloqué</strong> (interrupteur ouvert), soit <strong>saturé</strong> (interrupteur fermé).</p>\n<h4>Le transistor bipolaire</h4>\n<p>Le transistor bipolaire NPN possède trois broches : <strong>base</strong> (B), <strong>collecteur</strong> (C), <strong>émetteur</strong> (E). Un petit courant de base I<sub>B</sub> commande un courant de collecteur I<sub>C</sub> beaucoup plus grand. Le rapport I<sub>C</sub> / I<sub>B</sub> en fonctionnement linéaire est le <strong>gain en courant</strong> β (ou h<sub>FE</sub>), de quelques dizaines à quelques centaines. Pour être sûr de saturer le transistor, on impose un courant de base plusieurs fois supérieur à I<sub>C</sub> / β.</p>\n<h4>Le transistor MOSFET</h4>\n<p>Le <strong>MOSFET</strong> à canal N possède une <strong>grille</strong> (G), un <strong>drain</strong> (D) et une <strong>source</strong> (S). Il est commandé en <strong>tension</strong> : quand la tension V<sub>GS</sub> dépasse le seuil, le canal conduit avec une très faible résistance R<sub>DS(on)</sub> (quelques milliohms à quelques centaines de milliohms). Il ne consomme presque pas de courant de commande, ce qui en fait le composant préféré pour piloter des charges importantes. Il faut choisir un MOSFET dit <strong>« logic level »</strong>, entièrement conducteur avec 3,3 V ou 5 V sur la grille.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> commander un relais 12 V – 60 mA depuis une sortie 3,3 V avec un NPN de gain minimal β = 100.<br>1. Courant de base minimal : I<sub>C</sub> / β = 60 / 100 = 0,6 mA. On prend un facteur 5 de sécurité : I<sub>B</sub> ≈ 3 mA.<br>2. Tension aux bornes de la résistance de base : 3,3 – 0,7 = 2,6 V.<br>3. R<sub>B</sub> = 2,6 / 0,003 ≈ 867 Ω, soit 820 Ω en série E12 (I<sub>B</sub> ≈ 3,2 mA, acceptable pour la sortie).<br>4. Ne pas oublier la diode de roue libre en parallèle sur la bobine du relais.</div>\n<table>\n<thead><tr><th>Critère</th><th>Bipolaire NPN</th><th>MOSFET canal N</th></tr></thead>\n<tbody>\n<tr><td>Commande</td><td>En courant (base)</td><td>En tension (grille)</td></tr>\n<tr><td>Chute de tension à l'état passant</td><td>V<sub>CE(sat)</sub> ≈ 0,1 à 0,3 V</td><td>R<sub>DS(on)</sub> × I<sub>D</sub>, souvent plus faible</td></tr>\n<tr><td>Usage typique</td><td>Petites charges, signaux</td><td>Moteurs, rubans LED, alimentations à découpage</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Circuits intégrés et choix d'un composant de remplacement",
       "contenu": "\n<p>Un <strong>circuit intégré</strong> rassemble dans un seul boîtier un grand nombre de transistors et de composants pour réaliser une fonction complète : régulateur de tension, amplificateur opérationnel, mémoire, interface de communication, microcontrôleur. Il est identifié par une <strong>référence</strong> imprimée sur le boîtier, que l'on recherche dans la <strong>fiche technique</strong> (datasheet) du fabricant. La broche 1 est repérée par un point ou une encoche ; la numérotation tourne ensuite dans le sens inverse des aiguilles d'une montre, vue de dessus.</p>\n<p>Les principaux boîtiers sont : DIP (traversant, deux rangées), SOIC et TSSOP (CMS à pattes), QFN (CMS sans pattes apparentes, pastilles sous le boîtier), BGA (billes sous le boîtier, impossible à souder au fer).</p>\n<p>Lors d'une réparation ou d'une rupture d'approvisionnement, il faut parfois trouver un composant <strong>équivalent</strong>. Le composant de remplacement doit être identique ou meilleur sur tous les points critiques, jamais seulement sur la valeur principale.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un condensateur de même capacité mais de tension de service plus faible, un MOSFET de même courant mais à seuil de grille trop élevé ou une résistance de même valeur mais de puissance insuffisante semblent équivalents et provoquent pourtant une panne rapide. On compare toujours la liste complète des caractéristiques.</div>\n<table>\n<thead><tr><th>Composant</th><th>Caractéristiques à comparer</th></tr></thead>\n<tbody>\n<tr><td>Résistance</td><td>Valeur, tolérance, puissance, boîtier</td></tr>\n<tr><td>Condensateur</td><td>Capacité, tension de service, type de diélectrique, polarité, température</td></tr>\n<tr><td>Diode</td><td>Courant direct, tension inverse maximale, rapidité, boîtier</td></tr>\n<tr><td>MOSFET</td><td>V<sub>DS</sub> max, I<sub>D</sub> max, R<sub>DS(on)</sub>, seuil V<sub>GS(th)</sub>, brochage</td></tr>\n<tr><td>Circuit intégré</td><td>Référence exacte ou équivalent déclaré « pin to pin », plage d'alimentation</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les distributeurs de composants proposent des moteurs de recherche paramétriques. Le technicien saisit les caractéristiques indispensables, vérifie la disponibilité et note dans la fiche de réparation la référence d'origine et la référence montée, afin d'assurer la traçabilité.</div>"
      }
     ],
     "points_cles": [
      "Les composants passifs (résistance, condensateur, inductance) ne commandent pas de courant ; les composants actifs ont besoin d'une alimentation.",
      "Les valeurs des résistances suivent des séries normalisées (E12, E24, E96) liées à la tolérance.",
      "Un code CMS « 472 » vaut 4,7 kΩ ; « 104 » sur un condensateur vaut 100 nF.",
      "La puissance dissipée P = R × I² doit rester bien inférieure à la puissance nominale.",
      "Un condensateur électrolytique est polarisé et a une tension de service à respecter.",
      "La résistance d'une LED se calcule par R = (U − U_F) / I_F puis se choisit dans la valeur normalisée supérieure.",
      "En commutation, un transistor est bloqué ou saturé ; le MOSFET logic level est commandé en tension.",
      "Une diode de roue libre protège le transistor qui commande une bobine.",
      "Un composant de remplacement doit être équivalent sur toutes ses caractéristiques critiques."
     ],
     "lexique": [
      {
       "terme": "CMS",
       "def": "Composant monté en surface, soudé directement sur les pastilles du circuit imprimé."
      },
      {
       "terme": "Série E12",
       "def": "Liste normalisée de 12 valeurs par décade pour les composants à tolérance de 10 %."
      },
      {
       "terme": "Tolérance",
       "def": "Écart maximal admis entre la valeur réelle et la valeur nominale d'un composant."
      },
      {
       "terme": "Découplage",
       "def": "Condensateur placé près d'un circuit intégré pour stabiliser localement son alimentation."
      },
      {
       "terme": "Tension de seuil",
       "def": "Tension minimale à appliquer à une diode pour qu'elle conduise."
      },
      {
       "terme": "Diode de roue libre",
       "def": "Diode qui évacue la surtension d'une bobine à la coupure du courant."
      },
      {
       "terme": "Saturation",
       "def": "État d'un transistor entièrement conducteur, équivalent à un interrupteur fermé."
      },
      {
       "terme": "MOSFET",
       "def": "Transistor à effet de champ commandé par la tension entre grille et source."
      },
      {
       "terme": "RDS(on)",
       "def": "Résistance entre drain et source d'un MOSFET à l'état passant."
      },
      {
       "terme": "Fiche technique",
       "def": "Document du fabricant (datasheet) donnant les caractéristiques et limites d'un composant."
      }
     ]
    },
    {
     "id": "bciel-alimentations-signaux",
     "titre": "Alimentations, signaux et fonctions analogiques",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire les étages d'une alimentation linéaire et d'une alimentation à découpage.",
      "Calculer la puissance dissipée par un régulateur linéaire et le rendement d'une alimentation.",
      "Caractériser un signal périodique : amplitude, période, fréquence, rapport cyclique, valeur moyenne et valeur efficace.",
      "Expliquer le rôle d'un pont diviseur et d'un amplificateur opérationnel en comparateur ou en amplificateur.",
      "Mesurer un signal à l'oscilloscope en choisissant correctement les réglages."
     ],
     "sections": [
      {
       "titre": "Le rôle de l'alimentation dans un produit électronique",
       "contenu": "\n<p>Toute carte électronique a besoin d'une ou plusieurs <strong>tensions continues</strong> stables : 5 V pour certains capteurs, 3,3 V pour la plupart des microcontrôleurs et modules radio, 12 V ou 24 V pour des actionneurs. L'énergie arrive pourtant sous des formes variées : réseau 230 V alternatif, batterie dont la tension baisse au fil de la décharge, port USB, alimentation par le câble réseau (PoE). La fonction <strong>alimenter</strong> transforme cette énergie en tensions utilisables, la <strong>régule</strong> et la <strong>protège</strong>.</p>\n<p>Le schéma fonctionnel classique d'une alimentation secteur comporte quatre étages : <strong>abaisser</strong> (transformateur ou convertisseur), <strong>redresser</strong> (pont de diodes), <strong>filtrer</strong> (condensateur de forte capacité qui lisse la tension) et <strong>réguler</strong> (circuit qui maintient la tension de sortie constante malgré les variations de charge et d'entrée).</p>\n<table>\n<thead><tr><th>Étage</th><th>Composants</th><th>Forme de la tension en sortie</th></tr></thead>\n<tbody>\n<tr><td>Abaisser</td><td>Transformateur 230 V / 12 V</td><td>Alternative sinusoïdale de plus faible amplitude</td></tr>\n<tr><td>Redresser</td><td>Pont de 4 diodes</td><td>Toujours positive, mais en « bosses »</td></tr>\n<tr><td>Filtrer</td><td>Condensateur électrolytique</td><td>Presque continue avec une ondulation résiduelle</td></tr>\n<tr><td>Réguler</td><td>Régulateur linéaire ou à découpage</td><td>Continue et stable (par exemple 5,0 V)</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une sinusoïde d'amplitude U<sub>max</sub> a une valeur efficace U<sub>eff</sub> = U<sub>max</sub> / √2. Le « 230 V » du réseau est une valeur efficace : l'amplitude vaut environ 325 V.</div>"
      },
      {
       "titre": "Régulateur linéaire et alimentation à découpage",
       "contenu": "\n<p>Le <strong>régulateur linéaire</strong> (par exemple un régulateur fixe 5 V de type 7805 ou un régulateur LDO 3,3 V) fonctionne comme une résistance variable qui « absorbe » la différence entre la tension d'entrée et la tension de sortie. Il est simple, peu coûteux et produit une tension très propre, mais il transforme cette différence en chaleur. Un régulateur <strong>LDO</strong> (low drop-out) accepte une faible différence entre entrée et sortie, parfois quelques centaines de millivolts.</p>\n<p>L'<strong>alimentation à découpage</strong> hache la tension d'entrée à haute fréquence (de quelques dizaines de kilohertz à quelques mégahertz) grâce à un transistor, puis la lisse avec une inductance et un condensateur. Elle peut abaisser la tension (convertisseur <strong>buck</strong>) ou l'élever (convertisseur <strong>boost</strong>). Son <strong>rendement</strong> atteint souvent 85 à 95 %, mais elle génère des parasites qu'il faut filtrer.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer deux solutions pour obtenir 3,3 V – 0,4 A à partir de 12 V.<br>1. Régulateur linéaire : puissance utile P<sub>u</sub> = 3,3 × 0,4 = 1,32 W. Puissance dissipée P<sub>d</sub> = (U<sub>e</sub> – U<sub>s</sub>) × I = (12 – 3,3) × 0,4 = 3,48 W. Rendement η = P<sub>u</sub> / (P<sub>u</sub> + P<sub>d</sub>) = 1,32 / 4,8 ≈ 27,5 %. Il faudra un dissipateur.<br>2. Convertisseur buck de rendement 90 % : puissance absorbée = 1,32 / 0,9 ≈ 1,47 W ; pertes ≈ 0,15 W. Courant tiré sur le 12 V ≈ 1,47 / 12 ≈ 0,12 A.<br>3. Conclusion : pour un fort écart de tension, le découpage s'impose ; le linéaire reste adapté pour un faible écart ou pour alimenter un circuit sensible au bruit.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un régulateur linéaire qui chauffe au point de ne plus pouvoir être touché est souvent en limite thermique : il coupe sa sortie par intermittence (protection thermique) et la carte redémarre sans cesse. Ce symptôme ressemble à une panne logicielle alors qu'il s'agit d'un problème d'alimentation.</div>"
      },
      {
       "titre": "Caractériser un signal périodique",
       "contenu": "\n<p>Un <strong>signal</strong> est une grandeur électrique, le plus souvent une tension, qui porte une information ou de l'énergie. Il est <strong>périodique</strong> lorsqu'il se répète identique à lui-même. On le caractérise par :</p>\n<ul>\n<li>la <strong>période</strong> T, durée d'un motif, en secondes ;</li>\n<li>la <strong>fréquence</strong> f = 1 / T, en hertz (Hz) ;</li>\n<li>l'<strong>amplitude</strong> (valeur maximale) et la <strong>valeur crête à crête</strong> (écart entre maximum et minimum) ;</li>\n<li>la <strong>valeur moyenne</strong>, mesurée par un multimètre en position continue (DC) ;</li>\n<li>la <strong>valeur efficace</strong>, qui correspond à l'effet thermique du signal, mesurée en position alternative (AC) par un multimètre « TRMS » (vraie valeur efficace).</li>\n</ul>\n<p>Pour un signal rectangulaire, on définit en plus le <strong>rapport cyclique</strong> α = durée à l'état haut / période. Un signal rectangulaire 0–5 V de rapport cyclique 0,25 a une valeur moyenne de 0,25 × 5 = 1,25 V. C'est le principe de la <strong>MLI</strong> (modulation de largeur d'impulsion, PWM en anglais), utilisée pour faire varier la luminosité d'une LED ou la vitesse d'un moteur.</p>\n<table>\n<thead><tr><th>Signal</th><th>Valeur moyenne</th><th>Valeur efficace</th></tr></thead>\n<tbody>\n<tr><td>Sinusoïde centrée d'amplitude U<sub>max</sub></td><td>0</td><td>U<sub>max</sub> / √2</td></tr>\n<tr><td>Rectangulaire 0 – U, rapport cyclique α</td><td>α × U</td><td>U × √α</td></tr>\n<tr><td>Continu U</td><td>U</td><td>U</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Mesurer à l'oscilloscope",
       "contenu": "\n<p>L'<strong>oscilloscope</strong> affiche l'évolution d'une tension en fonction du temps. L'axe horizontal est réglé par la <strong>base de temps</strong> (en secondes par division), l'axe vertical par la <strong>sensibilité</strong> (en volts par division). Les oscilloscopes numériques mesurent automatiquement fréquence, amplitude, valeur moyenne ou rapport cyclique, mais le technicien doit savoir lire l'écran.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> relever un signal PWM à l'oscilloscope.<br>1. Brancher la masse de la sonde sur la masse de la carte, la pointe sur le signal. Vérifier le coefficient de la sonde (×1 ou ×10) et le reporter dans le réglage de la voie.<br>2. Choisir le couplage DC pour voir la composante continue.<br>3. Régler la sensibilité pour que le signal occupe la majeure partie de l'écran (par exemple 1 V/div pour un signal 0–5 V).<br>4. Régler le déclenchement (trigger) sur front montant, niveau à mi-hauteur, pour stabiliser l'image.<br>5. Ajuster la base de temps pour voir deux ou trois périodes. Si une période occupe 4 divisions à 0,25 ms/div : T = 1 ms et f = 1 kHz. Si l'état haut occupe 1 division : α = 0,25.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la masse de la sonde d'un oscilloscope de table est reliée à la terre. La brancher sur un point d'un montage relié au secteur qui n'est pas la masse crée un court-circuit franc. Les mesures sur des circuits non isolés du réseau imposent une sonde différentielle et l'habilitation adaptée.</div>\n<p>Le <strong>multimètre</strong> complète l'oscilloscope pour les mesures de tension continue, de courant, de résistance et de continuité. Ses entrées portent une <strong>catégorie de mesure</strong> (CAT II, CAT III, CAT IV) qui doit être adaptée à l'endroit où l'on mesure : une prise de courant relève au minimum de la CAT II, un tableau électrique de la CAT III.</p>"
      },
      {
       "titre": "Pont diviseur et amplificateur opérationnel",
       "contenu": "\n<p>Le <strong>pont diviseur de tension</strong> est formé de deux résistances en série R<sub>1</sub> et R<sub>2</sub>. La tension prélevée aux bornes de R<sub>2</sub> vaut U<sub>s</sub> = U<sub>e</sub> × R<sub>2</sub> / (R<sub>1</sub> + R<sub>2</sub>), à condition que le courant prélevé soit négligeable. Il sert par exemple à ramener la tension d'une batterie 12 V dans la plage 0–3,3 V d'une entrée analogique : avec R<sub>1</sub> = 27 kΩ et R<sub>2</sub> = 10 kΩ, 12 V donnent 12 × 10 / 37 ≈ 3,24 V.</p>\n<p>Une <strong>thermistance</strong> CTN (résistance qui diminue quand la température augmente) ou une <strong>photorésistance</strong> placée dans un pont diviseur transforme une grandeur physique en tension : c'est le principe de nombreux capteurs simples.</p>\n<p>L'<strong>amplificateur opérationnel</strong> (AOP) est un circuit intégré à deux entrées (non inverseuse « + » et inverseuse « – ») et une sortie. Deux montages sont à connaître :</p>\n<ul>\n<li>le <strong>comparateur</strong> : sans contre-réaction, la sortie bascule au niveau haut si V<sub>+</sub> &gt; V<sub>–</sub> et au niveau bas sinon. Il permet de déclencher une alarme quand une tension dépasse un seuil ;</li>\n<li>l'<strong>amplificateur non inverseur</strong> : avec une contre-réaction sur l'entrée « – », il amplifie la tension d'entrée avec un gain A = 1 + R<sub>2</sub> / R<sub>1</sub>. Avec R<sub>2</sub> = 9 kΩ et R<sub>1</sub> = 1 kΩ, un signal de capteur de 0,3 V devient 3 V.</li>\n</ul>\n<p>Le cas particulier R<sub>2</sub> = 0 donne le <strong>suiveur</strong> (gain 1), qui recopie une tension sans la charger.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors de la mise au point d'un capteur de niveau d'une cuve, le technicien relève la tension en sortie de l'étage d'amplification pour le niveau vide et le niveau plein. Il vérifie que ces deux tensions restent dans la plage d'entrée du convertisseur du microcontrôleur, avec une petite marge, avant de passer à l'étalonnage logiciel.</div>"
      }
     ],
     "points_cles": [
      "Une alimentation secteur classique abaisse, redresse, filtre puis régule la tension.",
      "Un régulateur linéaire dissipe (Ue − Us) × I : son rendement chute quand l'écart de tension augmente.",
      "Une alimentation à découpage (buck, boost) atteint souvent 85 à 95 % de rendement mais génère des parasites.",
      "La fréquence est l'inverse de la période : f = 1 / T.",
      "Pour un signal rectangulaire 0–U, la valeur moyenne vaut α × U : c'est le principe de la MLI (PWM).",
      "À l'oscilloscope, on règle sonde, couplage, sensibilité, déclenchement puis base de temps.",
      "La masse d'un oscilloscope de table est reliée à la terre : attention aux montages non isolés du secteur.",
      "Le pont diviseur donne Us = Ue × R2 / (R1 + R2) quand le courant prélevé est négligeable.",
      "Un AOP non inverseur amplifie avec un gain 1 + R2 / R1 ; sans contre-réaction, il compare deux tensions."
     ],
     "lexique": [
      {
       "terme": "Régulation",
       "def": "Maintien d'une tension de sortie constante malgré les variations de l'entrée et de la charge."
      },
      {
       "terme": "LDO",
       "def": "Régulateur linéaire à faible chute de tension entre entrée et sortie."
      },
      {
       "terme": "Convertisseur buck",
       "def": "Alimentation à découpage qui abaisse une tension continue avec un bon rendement."
      },
      {
       "terme": "Rendement",
       "def": "Rapport entre la puissance utile fournie et la puissance absorbée, noté η."
      },
      {
       "terme": "Valeur efficace",
       "def": "Valeur continue qui produirait le même échauffement dans une résistance."
      },
      {
       "terme": "Rapport cyclique",
       "def": "Fraction de la période pendant laquelle un signal rectangulaire est à l'état haut."
      },
      {
       "terme": "MLI (PWM)",
       "def": "Modulation de largeur d'impulsion, qui fait varier la valeur moyenne d'un signal rectangulaire."
      },
      {
       "terme": "Base de temps",
       "def": "Réglage horizontal de l'oscilloscope, en secondes par division."
      },
      {
       "terme": "Déclenchement",
       "def": "Réglage (trigger) qui fixe l'instant de départ de l'affichage pour stabiliser le signal."
      },
      {
       "terme": "AOP",
       "def": "Amplificateur opérationnel, circuit intégré à deux entrées utilisé en comparateur ou en amplificateur."
      }
     ]
    },
    {
     "id": "bciel-electronique-numerique",
     "titre": "Codage de l'information et électronique numérique",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Convertir un nombre entre les bases décimale, binaire et hexadécimale.",
      "Décrire les fonctions logiques de base et établir une table de vérité.",
      "Vérifier la compatibilité des niveaux logiques entre deux circuits alimentés en 3,3 V et en 5 V.",
      "Calculer la résolution d'un convertisseur analogique-numérique et interpréter une valeur convertie.",
      "Expliquer le rôle des bascules, compteurs et mémoires dans un système numérique."
     ],
     "sections": [
      {
       "titre": "Analogique et numérique",
       "contenu": "\n<p>Un signal <strong>analogique</strong> peut prendre une infinité de valeurs dans une plage : la tension délivrée par un capteur de température varie de façon continue. Un signal <strong>numérique</strong> (ou logique) ne prend que deux états, notés 0 et 1, appelés <strong>bits</strong>. Un microcontrôleur, une mémoire ou un commutateur réseau traitent exclusivement des informations numériques : il faut donc <strong>coder</strong> l'information en binaire et <strong>convertir</strong> les grandeurs analogiques.</p>\n<p>L'électronique numérique présente de grands avantages : insensibilité relative aux parasites (un 1 un peu déformé reste un 1), possibilité de stocker, de transmettre et de traiter l'information par programme, et intégration de millions de fonctions dans une seule puce.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> 1 octet = 8 bits. Les multiples normalisés sont le kilooctet (ko = 1 000 octets), le mégaoctet (Mo) et le gigaoctet (Go). Les multiples binaires s'écrivent kibioctet (Kio = 1 024 octets), mébioctet (Mio), gibioctet (Gio). En débit, on compte en bits par seconde : 1 Gbit/s correspond à 125 Mo/s au maximum.</div>"
      },
      {
       "titre": "Les bases de numération",
       "contenu": "\n<p>En <strong>base 2</strong> (binaire), chaque rang vaut une puissance de 2 : 1, 2, 4, 8, 16, 32, 64, 128… Le bit de rang le plus faible, à droite, est appelé <strong>LSB</strong> (bit de poids faible), le plus à gauche <strong>MSB</strong> (bit de poids fort). Un nombre de n bits peut prendre 2<sup>n</sup> valeurs : de 0 à 255 pour un octet.</p>\n<p>En <strong>base 16</strong> (hexadécimal), on utilise les chiffres 0 à 9 puis les lettres A (10) à F (15). Un chiffre hexadécimal correspond exactement à 4 bits, ce qui rend l'écriture compacte. On repère un nombre hexadécimal par le préfixe 0x (0x3F) ou le suffixe h (3Fh). Les adresses MAC, les adresses IPv6, les registres des microcontrôleurs et les codes de couleur web sont écrits en hexadécimal.</p>\n<table>\n<thead><tr><th>Décimal</th><th>Binaire</th><th>Hexadécimal</th></tr></thead>\n<tbody>\n<tr><td>10</td><td>0000 1010</td><td>0x0A</td></tr>\n<tr><td>63</td><td>0011 1111</td><td>0x3F</td></tr>\n<tr><td>192</td><td>1100 0000</td><td>0xC0</td></tr>\n<tr><td>255</td><td>1111 1111</td><td>0xFF</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> convertir 172 en binaire puis en hexadécimal.<br>1. Chercher la plus grande puissance de 2 contenue dans 172 : 128. Reste 44.<br>2. 64 n'entre pas (0) ; 32 entre (1), reste 12 ; 16 n'entre pas (0) ; 8 entre (1), reste 4 ; 4 entre (1), reste 0 ; 2 (0) ; 1 (0).<br>3. On obtient 1010 1100.<br>4. Chaque groupe de 4 bits donne un chiffre hexadécimal : 1010 = A, 1100 = C. Donc 172 = 0xAC.<br>Vérification : 10 × 16 + 12 = 172.</div>\n<p>D'autres codes sont utiles : le code <strong>ASCII</strong> associe un octet à chaque caractère (la lettre « A » vaut 65, soit 0x41) ; l'<strong>UTF-8</strong> l'étend à tous les alphabets ; le code <strong>BCD</strong> code chaque chiffre décimal sur 4 bits pour les afficheurs.</p>"
      },
      {
       "titre": "Fonctions logiques et tables de vérité",
       "contenu": "\n<p>Une <strong>fonction logique</strong> calcule une sortie binaire à partir d'entrées binaires. Son comportement est décrit par une <strong>table de vérité</strong> qui donne la sortie pour chaque combinaison d'entrées (2<sup>n</sup> lignes pour n entrées).</p>\n<table>\n<thead><tr><th>a</th><th>b</th><th>ET (a·b)</th><th>OU (a+b)</th><th>OU exclusif (a⊕b)</th><th>NON-ET</th></tr></thead>\n<tbody>\n<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>\n<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>\n<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>\n<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>\n</tbody>\n</table>\n<p>La fonction <strong>NON</strong> inverse son entrée. Les fonctions logiques se retrouvent partout : dans les portes intégrées (familles 74HC), dans les conditions d'un programme (if capteur_porte and alarme_active), et dans le calcul des adresses réseau, où l'on applique un ET bit à bit entre une adresse IP et son masque.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour une alarme qui doit sonner « si le système est armé ET (la porte est ouverte OU un mouvement est détecté) », le technicien écrit l'équation S = A · (P + M), dresse la table de vérité à 8 lignes et vérifie chaque cas lors des essais. Ce tableau devient ensuite la base du protocole de test.</div>"
      },
      {
       "titre": "Niveaux logiques et compatibilité",
       "contenu": "\n<p>Physiquement, un 0 et un 1 sont des plages de tension. Chaque circuit définit, dans sa fiche technique, les tensions qu'il garantit en sortie (V<sub>OH</sub> minimale pour un 1, V<sub>OL</sub> maximale pour un 0) et celles qu'il reconnaît en entrée (V<sub>IH</sub> minimale, V<sub>IL</sub> maximale). Entre V<sub>IL</sub> et V<sub>IH</sub>, l'état est indéterminé.</p>\n<p>Aujourd'hui, la plupart des microcontrôleurs et modules fonctionnent en <strong>3,3 V</strong>, alors que de nombreux capteurs, afficheurs et cartes historiques travaillent en <strong>5 V</strong>. Deux problèmes peuvent apparaître :</p>\n<ul>\n<li>une sortie 5 V appliquée sur une entrée 3,3 V non tolérante au 5 V peut détruire l'entrée ;</li>\n<li>une sortie 3,3 V peut ne pas être reconnue comme un 1 par une entrée 5 V dont V<sub>IH</sub> vaut, par exemple, 3,5 V.</li>\n</ul>\n<p>La solution est un <strong>adaptateur de niveaux</strong> (level shifter), un pont diviseur pour un signal unidirectionnel lent, ou le choix de composants compatibles.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une entrée laissée « en l'air » (non connectée) n'est ni à 0 ni à 1 : elle capte les parasites et change d'état au hasard. Toute entrée de bouton-poussoir doit avoir une résistance de <strong>tirage</strong> vers le haut (pull-up) ou vers le bas (pull-down), externe ou activée dans le microcontrôleur.</div>"
      },
      {
       "titre": "Logique séquentielle et mémoires",
       "contenu": "\n<p>Les fonctions vues jusqu'ici sont <strong>combinatoires</strong> : la sortie ne dépend que des entrées présentes. En <strong>logique séquentielle</strong>, la sortie dépend aussi de l'état précédent : le circuit a une mémoire. L'élément de base est la <strong>bascule</strong>, qui mémorise un bit. Une bascule D recopie son entrée sur sa sortie à chaque front de l'<strong>horloge</strong>, signal rectangulaire qui cadence tout le système.</p>\n<p>En associant des bascules, on obtient des <strong>registres</strong> (mémorisation de plusieurs bits), des <strong>compteurs</strong> (comptage d'impulsions, division de fréquence) et des <strong>registres à décalage</strong> (conversion série-parallèle, utilisée dans les liaisons série).</p>\n<table>\n<thead><tr><th>Type de mémoire</th><th>Conserve les données sans alimentation</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>RAM</td><td>Non (volatile)</td><td>Variables d'un programme en cours d'exécution</td></tr>\n<tr><td>Flash</td><td>Oui</td><td>Programme (firmware) d'un microcontrôleur, clé USB, SSD</td></tr>\n<tr><td>EEPROM</td><td>Oui</td><td>Petits paramètres modifiables : réglages, calibrations</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Conversion analogique-numérique et numérique-analogique",
       "contenu": "\n<p>Le <strong>convertisseur analogique-numérique</strong> (CAN, ADC en anglais) transforme une tension en nombre. Il est caractérisé par sa <strong>résolution</strong> n (nombre de bits) et sa <strong>tension de référence</strong> V<sub>ref</sub>. Il découpe la plage 0 – V<sub>ref</sub> en 2<sup>n</sup> pas ; la valeur d'un pas est le <strong>quantum</strong> q = V<sub>ref</sub> / 2<sup>n</sup>. La valeur numérique N obtenue pour une tension U vaut environ N = U / q.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> interpréter la mesure d'un CAN 12 bits de référence 3,3 V.<br>1. Nombre de pas : 2<sup>12</sup> = 4 096 ; valeurs possibles de 0 à 4 095.<br>2. Quantum : q = 3,3 / 4 096 ≈ 0,81 mV.<br>3. Le programme lit N = 2 482. Tension correspondante : U = N × q = 2 482 × 3,3 / 4 096 ≈ 2,00 V.<br>4. Si le capteur délivre 10 mV/°C, la température vaut 2,00 / 0,010 = 200 °C. Si la valeur paraît absurde, on vérifie d'abord la référence et le pont diviseur éventuel avant de soupçonner le capteur.</div>\n<p>La précision réelle d'une conversion dépend aussi de la stabilité de la référence : si la tension de référence est l'alimentation 3,3 V de la carte et que celle-ci varie de 3 %, toutes les mesures varient de 3 %. Pour les mesures précises, on utilise une <strong>référence de tension</strong> dédiée, et l'on fait souvent la moyenne de plusieurs échantillons pour réduire le bruit. Le logiciel convertit ensuite la valeur brute en grandeur physique, en appliquant éventuellement une correction d'<strong>étalonnage</strong> (décalage et pente mesurés sur deux points connus).</p>\n<p>La <strong>fréquence d'échantillonnage</strong> indique combien de mesures sont faites par seconde. Pour reproduire correctement un signal, elle doit être au moins le double de la plus haute fréquence contenue dans ce signal (théorème de Shannon) ; en pratique on prend une marge plus large.</p>\n<p>Le <strong>convertisseur numérique-analogique</strong> (CNA, DAC) fait l'opération inverse. Beaucoup de microcontrôleurs n'en ont pas : ils utilisent alors une sortie <strong>MLI</strong> filtrée par un circuit RC pour obtenir une tension moyenne réglable.</p>"
      }
     ],
     "points_cles": [
      "Un nombre de n bits prend 2^n valeurs ; un octet va de 0 à 255.",
      "Un chiffre hexadécimal correspond à 4 bits : 0xAC = 1010 1100 = 172.",
      "Une table de vérité donne la sortie pour toutes les combinaisons d'entrées.",
      "Le masque de sous-réseau s'applique par un ET logique bit à bit.",
      "Les niveaux 3,3 V et 5 V ne sont pas toujours compatibles : vérifier VIH, VOH et la tolérance au 5 V.",
      "Une entrée non connectée est indéterminée : prévoir une résistance de pull-up ou pull-down.",
      "Une bascule mémorise un bit au rythme de l'horloge ; la RAM est volatile, la Flash et l'EEPROM non.",
      "Le quantum d'un CAN vaut Vref / 2^n et la tension mesurée U = N × q.",
      "La fréquence d'échantillonnage doit dépasser le double de la fréquence maximale du signal."
     ],
     "lexique": [
      {
       "terme": "Bit",
       "def": "Unité élémentaire d'information numérique, valant 0 ou 1."
      },
      {
       "terme": "Octet",
       "def": "Groupe de 8 bits."
      },
      {
       "terme": "Hexadécimal",
       "def": "Base 16, utilisant les chiffres 0 à 9 et les lettres A à F."
      },
      {
       "terme": "Table de vérité",
       "def": "Tableau donnant la sortie d'une fonction logique pour toutes les combinaisons d'entrées."
      },
      {
       "terme": "Niveau logique",
       "def": "Plage de tension reconnue comme un 0 ou un 1 par un circuit."
      },
      {
       "terme": "Pull-up",
       "def": "Résistance qui ramène une entrée au niveau haut quand rien ne la commande."
      },
      {
       "terme": "Bascule",
       "def": "Circuit séquentiel qui mémorise un bit."
      },
      {
       "terme": "Horloge",
       "def": "Signal rectangulaire qui cadence les opérations d'un circuit numérique."
      },
      {
       "terme": "CAN",
       "def": "Convertisseur analogique-numérique, qui transforme une tension en nombre."
      },
      {
       "terme": "Quantum",
       "def": "Plus petite variation de tension distinguée par un convertisseur, égale à Vref / 2^n."
      }
     ]
    },
    {
     "id": "bciel-microcontroleurs-objets-connectes",
     "titre": "Microcontrôleurs, capteurs, actionneurs et bus de communication",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Décrire l'architecture d'un microcontrôleur et le rôle de ses périphériques.",
      "Associer un capteur ou un actionneur à l'interface adaptée du microcontrôleur.",
      "Comparer les liaisons UART, I2C et SPI et identifier leurs signaux sur un schéma.",
      "Choisir une technologie de communication sans fil pour un objet connecté.",
      "Organiser l'intégration matérielle et logicielle d'un objet connecté."
     ],
     "sections": [
      {
       "titre": "Le microcontrôleur, cœur des produits électroniques",
       "contenu": "\n<p>Un <strong>microcontrôleur</strong> est un circuit intégré qui réunit sur une même puce un processeur, de la mémoire Flash pour le programme, de la RAM pour les données et des <strong>périphériques</strong> d'entrée-sortie. Contrairement au microprocesseur d'un ordinateur, il est conçu pour exécuter en permanence un seul programme, appelé <strong>micrologiciel</strong> (firmware), avec une faible consommation. On le trouve dans les thermostats, les télécommandes, les alarmes, les capteurs connectés, les chargeurs et les automates.</p>\n<table>\n<thead><tr><th>Périphérique</th><th>Rôle</th><th>Exemple d'usage</th></tr></thead>\n<tbody>\n<tr><td>GPIO (entrées-sorties générales)</td><td>Lire ou imposer un état logique</td><td>Bouton-poussoir, LED, commande de relais</td></tr>\n<tr><td>CAN (ADC)</td><td>Mesurer une tension</td><td>Capteur de luminosité, tension de batterie</td></tr>\n<tr><td>Timer et sortie MLI</td><td>Mesurer des durées, générer des signaux</td><td>Variation de vitesse, servomoteur, buzzer</td></tr>\n<tr><td>UART, I2C, SPI</td><td>Communiquer avec d'autres circuits</td><td>Module GPS, capteur numérique, afficheur</td></tr>\n<tr><td>Interruptions</td><td>Réagir immédiatement à un événement</td><td>Détection d'un front sur un capteur de passage</td></tr>\n<tr><td>Chien de garde (watchdog)</td><td>Redémarrer le système s'il se bloque</td><td>Objet connecté isolé, sans intervention humaine</td></tr>\n</tbody>\n</table>\n<p>Les cartes de développement (de type Arduino, ESP32, STM32 Nucleo) ou les nano-ordinateurs (de type Raspberry Pi, qui embarquent un vrai système d'exploitation) servent à prototyper rapidement. Le produit final utilise souvent le même composant monté sur une carte dédiée, plus petite et moins coûteuse.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque broche d'un microcontrôleur peut souvent assurer plusieurs fonctions (GPIO, entrée analogique, ligne de bus…). Le brochage effectivement utilisé est fixé par le schéma et par la configuration logicielle : les deux doivent concorder.</div>"
      },
      {
       "titre": "Capteurs : transformer une grandeur physique en information",
       "contenu": "\n<p>Un <strong>capteur</strong> convertit une grandeur physique (température, pression, présence, distance, luminosité, courant…) en grandeur électrique exploitable. On distingue trois formes de sortie :</p>\n<ul>\n<li><strong>tout ou rien</strong> (TOR) : contact de porte, détecteur de présence infrarouge (PIR), fin de course ; lu par une entrée GPIO ;</li>\n<li><strong>analogique</strong> : tension proportionnelle à la grandeur (par exemple 0–3,3 V) ou boucle de courant 4–20 mA en milieu industriel ; lu par le CAN ;</li>\n<li><strong>numérique</strong> : le capteur intègre son propre convertisseur et transmet directement la valeur par un bus (I2C, SPI, 1-Wire) ; c'est le cas des capteurs de température et d'humidité récents.</li>\n</ul>\n<p>Les caractéristiques à relever dans la fiche technique sont : l'<strong>étendue de mesure</strong>, la <strong>sensibilité</strong> (variation de la sortie par unité mesurée), la <strong>précision</strong>, la <strong>résolution</strong>, le <strong>temps de réponse</strong>, la tension d'alimentation et la consommation.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> convertir la sortie d'un capteur de pression 4–20 mA, étendue 0–10 bar, lue à travers une résistance de 150 Ω.<br>1. À 4 mA, la tension vaut 150 × 0,004 = 0,6 V (0 bar) ; à 20 mA, 150 × 0,020 = 3,0 V (10 bar).<br>2. Relation linéaire : P = (U – 0,6) × 10 / (3,0 – 0,6) = (U – 0,6) × 4,17.<br>3. Pour U = 1,8 V : P = 1,2 × 4,17 ≈ 5,0 bar.<br>4. Une mesure inférieure à 0,6 V (moins de 4 mA) signale un défaut : câble coupé ou capteur hors service. C'est l'intérêt du « zéro décalé » de la boucle 4–20 mA.</div>"
      },
      {
       "titre": "Actionneurs et interfaces de puissance",
       "contenu": "\n<p>Un <strong>actionneur</strong> transforme une information de commande en action physique : LED et afficheurs, buzzer, relais, électrovanne, moteur à courant continu, servomoteur, moteur pas à pas. Le microcontrôleur ne fournit que quelques milliampères : il faut une <strong>interface de puissance</strong> appelée aussi <strong>préactionneur</strong>.</p>\n<table>\n<thead><tr><th>Actionneur</th><th>Interface usuelle</th><th>Commande logicielle</th></tr></thead>\n<tbody>\n<tr><td>Relais, électrovanne</td><td>Transistor + diode de roue libre, ou module relais</td><td>Sortie TOR</td></tr>\n<tr><td>Moteur à courant continu (un sens)</td><td>MOSFET</td><td>MLI pour la vitesse</td></tr>\n<tr><td>Moteur à courant continu (deux sens)</td><td>Pont en H intégré</td><td>Deux sorties de sens + MLI</td></tr>\n<tr><td>Servomoteur de modélisme</td><td>Aucune (entrée de commande intégrée)</td><td>Impulsion de 1 à 2 ms répétée toutes les 20 ms</td></tr>\n<tr><td>Moteur pas à pas</td><td>Driver de moteur pas à pas</td><td>Impulsions de pas + sens</td></tr>\n<tr><td>Ruban de LED adressables</td><td>Alimentation dédiée</td><td>Trame série sur une seule broche</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un moteur ou un ruban de LED ne doit jamais être alimenté par la broche 5 V ou 3,3 V de la carte de développement. Il faut une alimentation séparée, dimensionnée pour le courant de démarrage, avec une <strong>masse commune</strong> entre cette alimentation et le microcontrôleur, sinon la commande ne fonctionne pas.</div>"
      },
      {
       "titre": "Les liaisons série filaires : UART, I2C, SPI",
       "contenu": "\n<p>Pour échanger des données avec des capteurs, des mémoires ou des modules, le microcontrôleur utilise des <strong>liaisons série</strong> : les bits sont transmis les uns après les autres sur un petit nombre de fils.</p>\n<table>\n<thead><tr><th>Critère</th><th>UART</th><th>I2C</th><th>SPI</th></tr></thead>\n<tbody>\n<tr><td>Signaux</td><td>TX, RX (+ masse)</td><td>SDA (données), SCL (horloge)</td><td>SCK, MOSI, MISO, CS (un par esclave)</td></tr>\n<tr><td>Synchronisation</td><td>Asynchrone : même débit réglé des deux côtés</td><td>Synchrone, horloge du maître</td><td>Synchrone, horloge du maître</td></tr>\n<tr><td>Nombre d'équipements</td><td>Deux (point à point)</td><td>Plusieurs sur le même bus, identifiés par une adresse sur 7 bits</td><td>Plusieurs, sélectionnés par leur fil CS</td></tr>\n<tr><td>Débit typique</td><td>9 600 à 115 200 bauds</td><td>100 kHz ou 400 kHz</td><td>Plusieurs MHz</td></tr>\n<tr><td>Usage</td><td>Module GPS, liaison avec un PC, console de débogage</td><td>Capteurs, horloge temps réel, petits afficheurs</td><td>Carte SD, écran graphique, mémoire Flash</td></tr>\n</tbody>\n</table>\n<p>En UART, les deux équipements doivent avoir le même paramétrage, noté par exemple <strong>9600 8N1</strong> : 9 600 bauds, 8 bits de données, pas de parité, 1 bit de stop. Le TX de l'un se relie au RX de l'autre. Le bus I2C nécessite des résistances de tirage (pull-up) sur SDA et SCL, souvent de 4,7 kΩ.</p>\n<p>Pour les distances plus longues et les milieux perturbés, on utilise des liaisons différentielles : <strong>RS-485</strong> (bus industriel, protocole Modbus RTU par exemple) ou <strong>CAN</strong> (automobile, machines).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> quand un capteur I2C ne répond pas, le technicien lance un programme de « scan » qui interroge toutes les adresses du bus. Si aucune adresse n'apparaît, il vérifie l'alimentation, les pull-up et l'inversion SDA/SCL ; si une adresse inattendue apparaît, il consulte la fiche technique, car beaucoup de capteurs ont une adresse configurable par une broche.</div>"
      },
      {
       "titre": "Communications sans fil des objets connectés",
       "contenu": "\n<p>Un <strong>objet connecté</strong> (IoT, internet des objets) associe des capteurs, un microcontrôleur et une liaison sans fil qui transmet ses données vers une passerelle, un serveur ou une application. Le choix de la technologie dépend de la portée, du débit, de la consommation et de l'infrastructure disponible.</p>\n<table>\n<thead><tr><th>Technologie</th><th>Portée typique</th><th>Débit</th><th>Consommation</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Bluetooth Low Energy</td><td>Dizaine de mètres</td><td>Faible à moyen</td><td>Très faible</td><td>Capteur de santé, balise, configuration par smartphone</td></tr>\n<tr><td>Wi-Fi</td><td>Dizaines de mètres</td><td>Élevé</td><td>Élevée</td><td>Caméra IP, prise connectée</td></tr>\n<tr><td>Zigbee, Thread</td><td>Dizaines de mètres, réseau maillé</td><td>Faible</td><td>Faible</td><td>Domotique</td></tr>\n<tr><td>LoRaWAN</td><td>Plusieurs kilomètres</td><td>Très faible</td><td>Très faible</td><td>Compteur, capteur agricole, suivi de cuves</td></tr>\n<tr><td>Réseau cellulaire (LTE-M, NB-IoT)</td><td>Couverture de l'opérateur</td><td>Faible à moyen</td><td>Faible</td><td>Traceur, télérelève</td></tr>\n</tbody>\n</table>\n<p>Les objets à pile sont conçus pour dormir la plupart du temps : le microcontrôleur se réveille, mesure, transmet, puis repasse en <strong>veille profonde</strong>. L'autonomie se calcule à partir du courant moyen.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer l'autonomie d'un capteur LoRaWAN sur pile de 2 400 mAh. Il consomme 40 mA pendant 2 s toutes les 10 min et 10 µA le reste du temps.<br>1. Charge par cycle en émission : 40 mA × 2 s = 80 mA·s.<br>2. Charge par cycle en veille : 0,010 mA × 598 s ≈ 6 mA·s.<br>3. Courant moyen : (80 + 6) / 600 ≈ 0,143 mA.<br>4. Autonomie théorique : 2 400 / 0,143 ≈ 16 800 h, soit environ 1,9 an. On applique ensuite une marge (autodécharge, froid) d'environ 20 à 30 %.</div>"
      },
      {
       "titre": "Intégration matérielle et logicielle",
       "contenu": "\n<p>L'<strong>intégration</strong> consiste à faire fonctionner ensemble la carte, ses modules et le logiciel. Elle se mène par étapes, en validant chaque fonction avant d'ajouter la suivante :</p>\n<ol>\n<li>vérifier les alimentations à vide, puis en charge, avant d'insérer les modules ;</li>\n<li>téléverser un programme minimal (clignotement d'une LED, message sur la liaison série) pour valider la chaîne de programmation ;</li>\n<li>tester chaque capteur et chaque actionneur séparément, avec un programme de test simple ;</li>\n<li>assembler les fonctions dans le programme final, puis tester les cas limites (coupure réseau, capteur débranché, valeurs extrêmes) ;</li>\n<li>consigner les versions : référence de la carte, version du micrologiciel, paramètres.</li>\n</ol>\n<p>La mise à jour du micrologiciel peut se faire par une sonde de programmation, par la liaison USB ou à distance (<strong>OTA</strong>, over the air). Dans ce dernier cas, la sécurité de la mise à jour (signature du micrologiciel, connexion chiffrée) est essentielle.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> laisser actifs en production le port de débogage, un mot de passe par défaut ou une console série sans authentification ouvre une porte d'entrée à un attaquant. La sécurité d'un objet connecté se prévoit dès la conception.</div>"
      }
     ],
     "points_cles": [
      "Un microcontrôleur réunit processeur, mémoires et périphériques et exécute un micrologiciel unique.",
      "Un capteur fournit une sortie TOR, analogique (tension, 4–20 mA) ou numérique (bus).",
      "La boucle 4–20 mA permet de détecter une coupure : moins de 4 mA signale un défaut.",
      "Les actionneurs de puissance sont commandés via une interface (transistor, pont en H, driver) et une alimentation séparée à masse commune.",
      "L'UART est asynchrone et point à point (TX vers RX, même débit) ; l'I2C utilise SDA, SCL, des adresses et des pull-up ; le SPI utilise un fil CS par esclave.",
      "Le choix d'une liaison sans fil résulte d'un compromis portée, débit, consommation, infrastructure.",
      "L'autonomie d'un objet sur pile se calcule à partir du courant moyen sur un cycle complet.",
      "L'intégration se fait fonction par fonction en commençant par les alimentations.",
      "Ports de débogage et mots de passe par défaut doivent être neutralisés avant la mise en service."
     ],
     "lexique": [
      {
       "terme": "Microcontrôleur",
       "def": "Circuit intégré réunissant processeur, mémoires et périphériques pour piloter un produit."
      },
      {
       "terme": "Micrologiciel",
       "def": "Programme embarqué dans la mémoire Flash d'un équipement (firmware)."
      },
      {
       "terme": "GPIO",
       "def": "Broche d'entrée-sortie logique configurable par programme."
      },
      {
       "terme": "Préactionneur",
       "def": "Interface qui distribue l'énergie à un actionneur sur ordre de la commande."
      },
      {
       "terme": "Pont en H",
       "def": "Circuit à quatre interrupteurs permettant d'inverser le sens d'un moteur à courant continu."
      },
      {
       "terme": "UART",
       "def": "Liaison série asynchrone point à point utilisant les lignes TX et RX."
      },
      {
       "terme": "I2C",
       "def": "Bus série synchrone à deux fils (SDA, SCL) où chaque esclave a une adresse."
      },
      {
       "terme": "SPI",
       "def": "Bus série synchrone rapide à quatre fils, avec une ligne de sélection par esclave."
      },
      {
       "terme": "LoRaWAN",
       "def": "Réseau radio longue portée et basse consommation pour objets connectés."
      },
      {
       "terme": "OTA",
       "def": "Mise à jour d'un micrologiciel à distance, par la liaison sans fil."
      },
      {
       "terme": "Chien de garde",
       "def": "Minuterie qui redémarre le microcontrôleur si le programme cesse de la réarmer."
      }
     ]
    },
    {
     "id": "bciel-fabrication-cartes",
     "titre": "Conception, prototypage et fabrication des cartes électroniques",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Décrire les étapes qui mènent d'un schéma structurel à une carte assemblée.",
      "Expliquer les règles essentielles de routage d'un circuit imprimé.",
      "Distinguer les procédés d'assemblage traversant et CMS et les fichiers de fabrication associés.",
      "Réaliser et contrôler une brasure de qualité en respectant les exigences de protection ESD.",
      "Contrôler une carte assemblée selon des critères d'acceptabilité."
     ],
     "sections": [
      {
       "titre": "Du besoin au prototype",
       "contenu": "\n<p>La réalisation d'une carte électronique suit une démarche de projet. À partir du <strong>cahier des charges</strong>, le concepteur établit un <strong>schéma fonctionnel</strong> (blocs : alimenter, acquérir, traiter, communiquer, agir) puis un <strong>schéma structurel</strong>, qui représente chaque composant par son symbole normalisé avec ses liaisons. Le technicien de bac pro CIEL intervient surtout dans la réalisation des <strong>maquettes</strong> et <strong>prototypes</strong>, dans l'assemblage, les tests et la mise en forme des documents.</p>\n<table>\n<thead><tr><th>Étape</th><th>Production</th><th>Outil</th></tr></thead>\n<tbody>\n<tr><td>Maquettage</td><td>Montage provisoire pour valider une fonction</td><td>Plaque d'essai sans soudure, modules, carte de développement</td></tr>\n<tr><td>Saisie du schéma</td><td>Schéma structurel et nomenclature</td><td>Logiciel de CAO électronique (KiCad, Proteus, Altium…)</td></tr>\n<tr><td>Placement-routage</td><td>Dessin du circuit imprimé</td><td>Même logiciel, module « PCB »</td></tr>\n<tr><td>Fichiers de fabrication</td><td>Gerber, perçage, fichier de placement, nomenclature</td><td>Export du logiciel</td></tr>\n<tr><td>Fabrication du circuit nu</td><td>Circuit imprimé (PCB)</td><td>Sous-traitant ou graveuse/fraiseuse au lycée</td></tr>\n<tr><td>Assemblage et contrôle</td><td>Carte équipée, testée</td><td>Four de refusion, poste de brasage, loupe, banc de test</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le schéma structurel, la nomenclature et le circuit imprimé doivent rester cohérents. Chaque composant porte un <strong>repère topologique</strong> (R1, C3, U2, D1, Q1, J1…) identique sur les trois documents : c'est ce repère qui permet de retrouver un composant sur la carte lors d'un dépannage.</div>"
      },
      {
       "titre": "Le circuit imprimé et les règles de routage",
       "contenu": "\n<p>Le <strong>circuit imprimé</strong> (PCB, printed circuit board) est une plaque isolante, le plus souvent en époxy renforcé de fibre de verre (FR-4), d'épaisseur courante 1,6 mm, recouverte de cuivre (souvent 35 µm d'épaisseur). Le cuivre est gravé pour former les <strong>pistes</strong> et les <strong>pastilles</strong>. Une carte peut être simple face, double face ou multicouche (4, 6 couches et plus). Les liaisons entre couches se font par des <strong>vias</strong>, trous métallisés.</p>\n<p>Le <strong>vernis épargne</strong> (souvent vert) protège le cuivre et évite les ponts de soudure ; la <strong>sérigraphie</strong> imprime les repères et contours des composants.</p>\n<p>Les principales règles de routage sont :</p>\n<ul>\n<li>adapter la <strong>largeur des pistes</strong> au courant : les pistes d'alimentation sont plus larges que les pistes de signal ; le logiciel ou une calculatrice dédiée (fondée sur la norme IPC-2221) donne la largeur nécessaire selon le courant et l'échauffement admis ;</li>\n<li>respecter les <strong>isolements</strong> entre pistes, plus grands lorsque la tension est élevée, en particulier entre la partie secteur et la partie basse tension ;</li>\n<li>placer les condensateurs de <strong>découplage</strong> au plus près des broches d'alimentation des circuits intégrés ;</li>\n<li>prévoir un <strong>plan de masse</strong> (grande surface de cuivre reliée à la masse) qui réduit les parasites ;</li>\n<li>garder les pistes rapides et les boucles d'alimentation à découpage courtes ;</li>\n<li>éloigner l'antenne d'un module radio des plans de cuivre, selon les recommandations du fabricant.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant d'envoyer une carte en fabrication, le concepteur lance la <strong>vérification des règles</strong> (DRC, design rule check) avec les capacités du fabricant : largeur et espacement minimaux des pistes, diamètre minimal de perçage. Une carte qui ne passe pas le DRC est refusée ou mal fabriquée.</div>"
      },
      {
       "titre": "Assemblage traversant et CMS",
       "contenu": "\n<p>En <strong>technologie traversante</strong>, les pattes des composants traversent la carte et sont brasées sur la face opposée, à la main ou à la vague. Cette technologie reste utilisée pour les connecteurs, les gros condensateurs, les transformateurs et les prototypes.</p>\n<p>En <strong>technologie CMS</strong>, le procédé industriel enchaîne :</p>\n<ol>\n<li>la <strong>sérigraphie de crème à braser</strong> à travers un pochoir métallique (stencil) qui dépose la pâte sur les pastilles ;</li>\n<li>le <strong>placement</strong> des composants par une machine « pick and place » qui utilise le fichier de placement (coordonnées, rotation, face) ;</li>\n<li>la <strong>refusion</strong> dans un four qui suit un <strong>profil thermique</strong> : préchauffage, palier, pic de fusion, refroidissement ;</li>\n<li>l'<strong>inspection</strong> optique automatique (AOI), voire par rayons X pour les boîtiers BGA.</li>\n</ol>\n<p>Les alliages de brasure sans plomb, imposés pour la plupart des équipements par la directive européenne RoHS, sont généralement de type étain-argent-cuivre (SAC) et fondent vers 217–220 °C ; ils demandent des températures de travail plus élevées que l'ancien étain-plomb.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> certains composants (QFN, BGA, connecteurs plastiques) sont sensibles à l'humidité ou à la chaleur. Le niveau de sensibilité à l'humidité (MSL) indiqué sur l'emballage impose un délai d'utilisation après ouverture ou un étuvage préalable : sinon, le boîtier peut se fissurer pendant la refusion.</div>"
      },
      {
       "titre": "La brasure manuelle de qualité",
       "contenu": "\n<p>La <strong>brasure</strong> (souvent appelée « soudure » dans le langage courant) assemble deux métaux par un métal d'apport qui fond à une température inférieure à celle des pièces. Elle doit assurer à la fois la liaison électrique et la tenue mécanique. Le <strong>flux</strong>, contenu dans le fil d'apport, désoxyde les surfaces et favorise le <strong>mouillage</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> braser un composant traversant.<br>1. Régler la station à la température adaptée à l'alliage (couramment 330 à 370 °C pour du sans-plomb), panne propre et étamée.<br>2. Chauffer simultanément la pastille et la patte pendant une à deux secondes.<br>3. Apporter le fil de brasure sur la jonction (pas sur la panne) jusqu'à formation d'un cône régulier.<br>4. Retirer le fil, puis la panne, sans bouger le composant pendant le refroidissement.<br>5. Couper la patte en excès, nettoyer les résidus de flux si nécessaire, contrôler à la loupe.</div>\n<table>\n<thead><tr><th>Aspect observé</th><th>Diagnostic</th><th>Correction</th></tr></thead>\n<tbody>\n<tr><td>Cône concave, brillant (ou satiné en sans-plomb), bien mouillé</td><td>Brasure correcte</td><td>Aucune</td></tr>\n<tr><td>Boule ronde qui ne s'étale pas</td><td>Mauvais mouillage, pastille insuffisamment chauffée</td><td>Refaire avec du flux et un chauffage correct</td></tr>\n<tr><td>Aspect granuleux, terne et fissuré</td><td>Brasure « sèche » ou composant bougé au refroidissement</td><td>Refondre</td></tr>\n<tr><td>Liaison entre deux pastilles voisines</td><td>Pont de brasure : court-circuit</td><td>Retirer l'excès avec de la tresse à dessouder</td></tr>\n<tr><td>Brasure insuffisante, trou visible</td><td>Manque d'apport</td><td>Compléter</td></tr>\n</tbody>\n</table>\n<p>Les fumées de flux sont irritantes : le poste doit être équipé d'une <strong>aspiration</strong> des fumées et l'on se lave les mains après manipulation de brasure.</p>"
      },
      {
       "titre": "Protection contre les décharges électrostatiques",
       "contenu": "\n<p>Le corps humain peut se charger de plusieurs milliers de volts en marchant sur un sol isolant. Une <strong>décharge électrostatique</strong> (ESD) de quelques centaines de volts, imperceptible pour l'opérateur, suffit à détruire ou à fragiliser un composant sensible (MOSFET, microcontrôleur, circuit radio). Le dommage peut être <strong>latent</strong> : la carte fonctionne au test puis tombe en panne quelques semaines plus tard.</p>\n<p>Le poste de travail doit être une <strong>zone protégée contre les ESD</strong> (EPA), selon la norme CEI 61340-5-1 :</p>\n<ul>\n<li>tapis dissipatif relié à la terre par un point de raccordement commun ;</li>\n<li><strong>bracelet antistatique</strong> porté au poignet, relié à la terre à travers une résistance de sécurité d'environ 1 MΩ, vérifié régulièrement au testeur ;</li>\n<li>emballages blindés ou dissipatifs (sachets gris métallisés) pour le transport et le stockage ;</li>\n<li>outillage et fers à braser compatibles ESD ;</li>\n<li>éloignement des matériaux isolants générateurs de charges (gobelets, films plastiques, vêtements synthétiques).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les composants et cartes sensibles portent un pictogramme ESD (main barrée dans un triangle). Ils ne se manipulent qu'en zone protégée, relié à la terre, et se tiennent par les bords.</div>"
      },
      {
       "titre": "Contrôle et critères d'acceptabilité",
       "contenu": "\n<p>Une carte assemblée est contrôlée avant toute mise sous tension :</p>\n<ol>\n<li><strong>contrôle visuel</strong> à la loupe ou au microscope : bon composant au bon repère, orientation des composants polarisés (diodes, électrolytiques, circuits intégrés), qualité des brasures, absence de ponts et de résidus ;</li>\n<li><strong>contrôle hors tension</strong> à l'ohmmètre : absence de court-circuit entre chaque alimentation et la masse ;</li>\n<li><strong>première mise sous tension</strong> avec une alimentation de laboratoire à <strong>limitation de courant</strong> réglée bas : on observe le courant absorbé, on vérifie les tensions régulées, on surveille l'échauffement ;</li>\n<li><strong>tests fonctionnels</strong> selon le protocole.</li>\n</ol>\n<p>La norme de référence pour l'acceptabilité des cartes assemblées est l'<strong>IPC-A-610</strong>. Elle définit trois classes de produits : classe 1 (électronique grand public), classe 2 (électronique de service dédiée, par exemple équipements de télécommunication), classe 3 (haute fiabilité : médical, aéronautique, militaire). Plus la classe est élevée, plus les critères d'acceptation des brasures et des défauts sont sévères.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> mettre directement une carte neuve sur une alimentation sans limitation de courant peut transformer un simple pont de brasure en piste brûlée ou en composant détruit. La limitation de courant est le premier réflexe de toute mise sous tension d'un prototype.</div>"
      }
     ],
     "points_cles": [
      "Le schéma structurel, la nomenclature et le circuit imprimé partagent les mêmes repères topologiques.",
      "Les fichiers de fabrication comprennent les Gerber, le perçage, le placement et la nomenclature.",
      "La largeur des pistes dépend du courant ; les isolements dépendent de la tension.",
      "Le procédé CMS enchaîne crème à braser, placement, refusion et inspection.",
      "Les brasures sans plomb (SAC) fondent vers 217–220 °C et demandent un chauffage plus élevé.",
      "Une bonne brasure présente un cône concave bien mouillé ; ponts, boules et brasures sèches sont des défauts.",
      "Les ESD peuvent détruire un composant sans que l'opérateur ne ressente rien ; le bracelet et le tapis reliés à la terre sont obligatoires.",
      "La première mise sous tension se fait avec une alimentation à limitation de courant.",
      "L'IPC-A-610 classe les exigences d'acceptabilité en classes 1, 2 et 3."
     ],
     "lexique": [
      {
       "terme": "Schéma structurel",
       "def": "Représentation de tous les composants d'une carte et de leurs liaisons avec les symboles normalisés."
      },
      {
       "terme": "Repère topologique",
       "def": "Identifiant d'un composant (R1, C3, U2…) commun au schéma, à la nomenclature et à la carte."
      },
      {
       "terme": "Via",
       "def": "Trou métallisé reliant des pistes situées sur des couches différentes."
      },
      {
       "terme": "Plan de masse",
       "def": "Grande surface de cuivre reliée à la masse pour réduire les parasites."
      },
      {
       "terme": "Gerber",
       "def": "Format de fichier décrivant chaque couche d'un circuit imprimé pour sa fabrication."
      },
      {
       "terme": "Refusion",
       "def": "Passage au four qui fait fondre la crème à braser pour souder les CMS."
      },
      {
       "terme": "Mouillage",
       "def": "Capacité de la brasure fondue à s'étaler sur une surface métallique."
      },
      {
       "terme": "Flux",
       "def": "Produit désoxydant qui facilite le mouillage lors du brasage."
      },
      {
       "terme": "ESD",
       "def": "Décharge électrostatique capable de détruire un composant sensible."
      },
      {
       "terme": "EPA",
       "def": "Zone de travail protégée contre les décharges électrostatiques."
      },
      {
       "terme": "IPC-A-610",
       "def": "Norme définissant les critères d'acceptabilité des cartes électroniques assemblées."
      }
     ]
    },
    {
     "id": "bciel-tests-depannage-electronique",
     "titre": "Tests, essais et dépannage des produits électroniques",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Distinguer les différents types de tests réalisés sur un produit électronique.",
      "Rédiger et appliquer un protocole d'essai avec des critères de validation chiffrés.",
      "Conduire un diagnostic de panne méthodique, de la fonction défaillante au composant.",
      "Choisir l'appareil de mesure adapté et interpréter une mesure en tenant compte de l'incertitude.",
      "Rendre compte d'une réparation et de son coût en respectant la traçabilité."
     ],
     "sections": [
      {
       "titre": "Pourquoi et quand tester",
       "contenu": "\n<p>Un produit électronique est testé tout au long de sa vie. Le technicien doit savoir à quelle étape il intervient, car l'objectif du test change :</p>\n<table>\n<thead><tr><th>Type de test</th><th>Moment</th><th>Objectif</th></tr></thead>\n<tbody>\n<tr><td>Test unitaire de fonction</td><td>Prototypage</td><td>Valider une fonction isolée (alimentation, capteur…)</td></tr>\n<tr><td>Essai de validation</td><td>Fin de conception</td><td>Vérifier que le produit respecte toutes les exigences du cahier des charges</td></tr>\n<tr><td>Essai de qualification</td><td>Avant mise sur le marché</td><td>Tester l'environnement : température, humidité, vibrations, compatibilité électromagnétique</td></tr>\n<tr><td>Test de production</td><td>En fin de ligne</td><td>Détecter les défauts d'assemblage sur chaque exemplaire</td></tr>\n<tr><td>Test après réparation</td><td>Maintenance</td><td>Prouver que le produit réparé fonctionne et reste sûr</td></tr>\n</tbody>\n</table>\n<p>Tester n'est pas « essayer pour voir » : un test compare un <strong>résultat mesuré</strong> à un <strong>résultat attendu</strong> défini à l'avance, avec une <strong>tolérance</strong>. Le résultat est <strong>conforme</strong> ou <strong>non conforme</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un critère de validation est toujours chiffré et vérifiable. « La LED s'allume » est observable ; « la tension de sortie vaut 3,3 V ± 3 % avec 500 mA de charge » est un critère complet.</div>"
      },
      {
       "titre": "Le protocole d'essai",
       "contenu": "\n<p>Le <strong>protocole d'essai</strong> est le document qui décrit précisément comment réaliser un test pour qu'une autre personne obtienne le même résultat. Il comprend :</p>\n<ul>\n<li>l'<strong>objectif</strong> et l'exigence vérifiée (référence au cahier des charges) ;</li>\n<li>le <strong>matériel</strong> : appareils de mesure, charges, logiciels, avec leurs références ;</li>\n<li>le <strong>schéma de câblage</strong> de l'essai : où brancher chaque appareil ;</li>\n<li>les <strong>conditions</strong> : tension d'alimentation, température, configuration logicielle ;</li>\n<li>les <strong>étapes</strong> numérotées ;</li>\n<li>le <strong>tableau de résultats</strong> avec valeur attendue, tolérance, valeur mesurée, verdict.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier l'exigence « le régulateur fournit 5 V ± 2 % jusqu'à 1 A ».<br>1. Câbler : alimentation de laboratoire 12 V en entrée, charge électronique en sortie réglée en courant, voltmètre directement aux bornes de sortie de la carte.<br>2. Calculer les bornes : 5 × 0,98 = 4,90 V et 5 × 1,02 = 5,10 V.<br>3. Mesurer à 0 A, 0,5 A et 1 A. Résultats : 5,04 V, 5,01 V, 4,93 V.<br>4. Conclure : toutes les valeurs sont dans l'intervalle [4,90 ; 5,10] V, l'exigence est vérifiée. Noter la chute de 0,11 V entre vide et pleine charge, qui reste acceptable.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> mesurer la tension aux bornes de l'alimentation de laboratoire au lieu des bornes de la carte ajoute la chute de tension dans les cordons. Sous fort courant, quelques dixièmes de volt d'écart peuvent faire conclure à tort qu'une carte est conforme ou non conforme.</div>"
      },
      {
       "titre": "Appareils de mesure et incertitude",
       "contenu": "\n<p>Le choix de l'appareil dépend de la grandeur et de sa vitesse de variation :</p>\n<table>\n<thead><tr><th>Appareil</th><th>Mesures</th><th>Point de vigilance</th></tr></thead>\n<tbody>\n<tr><td>Multimètre</td><td>Tension, courant, résistance, continuité, test diode</td><td>Calibre et bornes adaptés ; catégorie de mesure</td></tr>\n<tr><td>Oscilloscope</td><td>Forme des signaux, temps, fréquences</td><td>Sonde ×10 compensée ; masse reliée à la terre</td></tr>\n<tr><td>Alimentation de laboratoire</td><td>Fournir une tension avec limitation de courant</td><td>Régler la limitation avant de brancher</td></tr>\n<tr><td>Générateur de fonctions</td><td>Injecter un signal de test</td><td>Amplitude et décalage adaptés à l'entrée</td></tr>\n<tr><td>Analyseur logique</td><td>Décoder les trames UART, I2C, SPI</td><td>Niveaux logiques compatibles</td></tr>\n<tr><td>Caméra thermique</td><td>Repérer un composant qui chauffe anormalement</td><td>Émissivité des surfaces brillantes</td></tr>\n</tbody>\n</table>\n<p>Aucune mesure n'est parfaite. La fiche technique du multimètre donne sa <strong>précision</strong>, par exemple « ± (0,5 % + 2 digits) » : pour une lecture de 4,93 V sur le calibre 6,000 V (résolution 0,001 V), l'incertitude vaut 0,005 × 4,93 + 2 × 0,001 ≈ 0,027 V. La valeur vraie est donc comprise entre environ 4,90 et 4,96 V. Quand une mesure est très proche d'une limite, il faut en tenir compte avant de conclure.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les appareils de mesure utilisés pour valider des produits sont suivis par le service qualité : chacun porte une étiquette indiquant sa date de dernier <strong>étalonnage</strong> ou de vérification. Un appareil hors délai ne doit pas servir à prononcer une conformité.</div>"
      },
      {
       "titre": "La démarche de diagnostic",
       "contenu": "\n<p>Le <strong>diagnostic</strong> consiste à identifier la cause d'une défaillance. Il se mène du général au particulier, en s'appuyant sur le schéma fonctionnel puis sur le schéma structurel.</p>\n<ol>\n<li><strong>Recueillir les symptômes</strong> : questionner le client ou consulter le ticket (que se passe-t-il, depuis quand, dans quelles conditions, après quel événement).</li>\n<li><strong>Constater</strong> soi-même la panne et faire un <strong>examen visuel</strong> : traces de brûlure, condensateurs gonflés, connecteurs oxydés, pistes coupées, traces de liquide.</li>\n<li><strong>Localiser la fonction défaillante</strong> : on suit le flux de l'information ou de l'énergie et on mesure aux frontières des blocs (entrée et sortie de l'alimentation, présence de l'horloge, signaux des bus).</li>\n<li><strong>Émettre des hypothèses</strong> et les tester de la plus probable et la plus simple à la plus coûteuse.</li>\n<li><strong>Identifier le composant</strong> défaillant, puis <strong>rechercher la cause</strong> : un composant détruit est parfois la victime d'un autre défaut.</li>\n<li><strong>Réparer, tester</strong> selon le protocole, <strong>rendre compte</strong>.</li>\n</ol>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une centrale d'alarme ne démarre pas.<br>1. Symptôme : aucune LED allumée, adaptateur secteur 12 V branché.<br>2. Mesure à l'entrée de la carte : 12,2 V présents, l'adaptateur est hors de cause.<br>3. Mesure en sortie du régulateur 3,3 V : 0 V. Mesure à l'ohmmètre hors tension entre 3,3 V et masse : 0,4 Ω, il y a un court-circuit sur le 3,3 V.<br>4. Hypothèse : composant en court-circuit sur ce rail. La caméra thermique, avec une alimentation limitée à 0,5 A, montre un condensateur de découplage qui chauffe.<br>5. Remplacement du condensateur, test : 3,30 V, centrale fonctionnelle. Recherche de cause : surtension sur l'entrée ? On vérifie la diode de protection.</div>\n<h4>Les défaillances les plus fréquentes</h4>\n<p>L'expérience montre que certaines causes reviennent souvent et méritent d'être vérifiées en premier :</p>\n<ul>\n<li>les <strong>alimentations</strong> : adaptateur secteur défaillant, fusible coupé, condensateurs électrolytiques asséchés ou gonflés, régulateur détruit par une surtension ;</li>\n<li>la <strong>connectique</strong> : connecteurs oxydés, câbles plats mal enfichés, ports USB arrachés, brasures fissurées par les cycles thermiques ou les chocs ;</li>\n<li>les <strong>éléments soumis à l'usure</strong> : batteries, boutons, relais, ventilateurs ;</li>\n<li>les <strong>agressions extérieures</strong> : surtension due à la foudre sur une ligne réseau ou téléphonique, humidité, liquide renversé ;</li>\n<li>le <strong>logiciel</strong> : micrologiciel corrompu après une mise à jour interrompue, paramètre de configuration erroné.</li>\n</ul>\n<p>Cette liste ne remplace pas la démarche : elle aide seulement à classer les hypothèses par probabilité.</p>"
      },
      {
       "titre": "Réparer, rendre compte et assurer la traçabilité",
       "contenu": "\n<p>Toute intervention est consignée dans une <strong>fiche d'intervention</strong> ou un <strong>rapport de réparation</strong> : identification du produit (référence, numéro de série), symptômes, mesures réalisées, cause identifiée, pièces remplacées avec leurs références, tests de validation, temps passé. Cette <strong>traçabilité</strong> permet de facturer, de répondre en cas de retour sous garantie et de repérer les défauts récurrents qui doivent remonter au bureau d'études.</p>\n<p>Le technicien doit aussi évaluer si la réparation est pertinente. Il compare le coût de la réparation (pièces, main-d'œuvre, transport) au prix d'un produit neuf ou reconditionné, en tenant compte de l'impact environnemental : réparer prolonge la durée de vie et évite un déchet.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir un devis de réparation.<br>1. Pièces : écran 38,00 € HT + connecteur 2,50 € HT = 40,50 € HT.<br>2. Main-d'œuvre : 1,25 h × 48 € HT/h = 60,00 € HT.<br>3. Total HT : 100,50 €. TVA à 20 % : 20,10 €. Total TTC : 120,60 €.<br>4. Comparer au prix du produit neuf et présenter les deux options au client.</div>\n<p>En France, la loi relative à la lutte contre le gaspillage et à l'économie circulaire (loi AGEC de 2020) a introduit l'obligation d'afficher un <strong>indice de réparabilité</strong> sur certains équipements électriques et électroniques, puis un <strong>indice de durabilité</strong> pour certaines catégories ; la liste des produits concernés évolue et doit être vérifiée. Pour les équipements de communication, les fabricants doivent aussi rendre disponibles certaines pièces détachées pendant une durée minimale.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> avant toute intervention sur un appareil client contenant des données (ordinateur, téléphone, enregistreur vidéo), il faut convenir avec lui de leur sauvegarde et de leur confidentialité. Le technicien ne consulte pas les données personnelles et ne les copie pas sans accord.</div>"
      }
     ],
     "points_cles": [
      "On distingue tests de fonction, de validation, de qualification, de production et après réparation.",
      "Un test compare une valeur mesurée à une valeur attendue avec une tolérance chiffrée.",
      "Le protocole d'essai précise objectif, matériel, câblage, conditions, étapes et tableau de résultats.",
      "Mesurer au plus près des bornes de la carte pour éviter les chutes de tension dans les cordons.",
      "La précision d'un appareil s'exprime en % de la lecture plus un nombre de digits.",
      "Un appareil de mesure doit être étalonné ou vérifié pour prononcer une conformité.",
      "Le diagnostic va du symptôme à la fonction défaillante, puis au composant, puis à la cause.",
      "L'alimentation limitée en courant et la caméra thermique localisent un court-circuit sans dégâts.",
      "Chaque intervention est tracée : produit, symptômes, mesures, pièces, tests, temps passé."
     ],
     "lexique": [
      {
       "terme": "Protocole d'essai",
       "def": "Document décrivant la manière reproductible de réaliser un test et d'en juger le résultat."
      },
      {
       "terme": "Critère de validation",
       "def": "Valeur attendue et tolérance permettant de déclarer un résultat conforme."
      },
      {
       "terme": "Essai de qualification",
       "def": "Essai qui vérifie le comportement d'un produit dans son environnement (climat, vibrations, CEM)."
      },
      {
       "terme": "Incertitude de mesure",
       "def": "Intervalle dans lequel se trouve la valeur vraie d'une grandeur mesurée."
      },
      {
       "terme": "Étalonnage",
       "def": "Comparaison d'un appareil à une référence pour connaître et corriger son erreur."
      },
      {
       "terme": "Diagnostic",
       "def": "Démarche d'identification de la cause d'une défaillance."
      },
      {
       "terme": "Charge électronique",
       "def": "Appareil qui absorbe un courant réglable pour tester une alimentation."
      },
      {
       "terme": "Analyseur logique",
       "def": "Appareil qui enregistre et décode plusieurs signaux numériques simultanément."
      },
      {
       "terme": "Traçabilité",
       "def": "Possibilité de retrouver l'historique d'un produit et des interventions réalisées."
      },
      {
       "terme": "Indice de réparabilité",
       "def": "Note affichée sur certains produits qui renseigne sur leur facilité de réparation."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Réseaux informatiques : installer, configurer, exploiter",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bciel-modeles-ethernet-vlan",
     "titre": "Modèles en couches, Ethernet, commutation et VLAN",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Situer un protocole, un équipement ou une panne dans les modèles OSI et TCP/IP.",
      "Décrire la structure d'une trame Ethernet et le rôle de l'adresse MAC.",
      "Expliquer le fonctionnement d'un commutateur et de sa table d'adresses MAC.",
      "Configurer le principe de VLAN avec ports d'accès et ports d'agrégation 802.1Q.",
      "Identifier les apports de l'agrégation de liens, du protocole spanning tree et du PoE."
     ],
     "sections": [
      {
       "titre": "Pourquoi un modèle en couches",
       "contenu": "\n<p>Le cours de seconde a présenté le réseau domestique : box, câbles, Wi-Fi, adresse IP, appareils connectés. En première, il faut comprendre comment les données circulent pour pouvoir installer, configurer et dépanner un réseau d'entreprise. Pour cela, on découpe la communication en <strong>couches</strong> : chaque couche rend un service à la couche supérieure et s'appuie sur la couche inférieure. Le modèle de référence est le <strong>modèle OSI</strong> (7 couches) ; le modèle réellement mis en œuvre sur internet est le <strong>modèle TCP/IP</strong> (4 couches).</p>\n<table>\n<thead><tr><th>Couche OSI</th><th>Rôle</th><th>Exemples</th><th>Unité de données</th><th>Équipement</th></tr></thead>\n<tbody>\n<tr><td>7 Application</td><td>Service rendu à l'utilisateur</td><td>HTTP, DNS, SMTP, SSH</td><td>Données</td><td>Serveur, poste</td></tr>\n<tr><td>6 Présentation</td><td>Format, chiffrement</td><td>TLS, encodage UTF-8</td><td>Données</td><td>—</td></tr>\n<tr><td>5 Session</td><td>Gestion du dialogue</td><td>Ouverture et fermeture de session</td><td>Données</td><td>—</td></tr>\n<tr><td>4 Transport</td><td>Communication de bout en bout, ports</td><td>TCP, UDP</td><td>Segment</td><td>Pare-feu</td></tr>\n<tr><td>3 Réseau</td><td>Adressage logique et routage</td><td>IPv4, IPv6, ICMP</td><td>Paquet</td><td>Routeur</td></tr>\n<tr><td>2 Liaison</td><td>Accès au support, adressage physique</td><td>Ethernet, Wi-Fi 802.11</td><td>Trame</td><td>Commutateur, point d'accès</td></tr>\n<tr><td>1 Physique</td><td>Transmission des bits</td><td>Câble cuivre, fibre, ondes radio</td><td>Bit</td><td>Câbles, répéteur, convertisseur de média</td></tr>\n</tbody>\n</table>\n<p>Le modèle TCP/IP regroupe les couches 5, 6 et 7 en une couche <strong>Application</strong> et les couches 1 et 2 en une couche <strong>Accès réseau</strong> ; il conserve les couches Transport et Internet.</p>\n<p>À l'émission, chaque couche ajoute un <strong>en-tête</strong> aux données reçues de la couche supérieure : c'est l'<strong>encapsulation</strong>. À la réception, chaque couche retire son en-tête : c'est la <strong>désencapsulation</strong>. Une page web est donc transportée dans un segment TCP, lui-même dans un paquet IP, lui-même dans une trame Ethernet.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le modèle en couches sert d'abord au dépannage. On vérifie les couches dans l'ordre, de 1 vers 7 : le lien est-il actif (couche 1) ? L'équipement est-il vu par le commutateur (couche 2) ? Répond-il à un ping (couche 3) ? Le port du service est-il ouvert (couche 4) ? Le service répond-il (couche 7) ?</div>"
      },
      {
       "titre": "La trame Ethernet et l'adresse MAC",
       "contenu": "\n<p><strong>Ethernet</strong> (normes IEEE 802.3) est la technologie quasi universelle des réseaux locaux filaires. Les débits courants sont 100 Mbit/s, 1 Gbit/s, 2,5 Gbit/s, 10 Gbit/s et plus sur les liaisons entre équipements.</p>\n<p>Chaque interface réseau possède une <strong>adresse MAC</strong> de 48 bits, écrite en 6 octets hexadécimaux : 3C:52:82:1A:F0:7B. Les trois premiers octets (OUI) identifient le constructeur. L'adresse FF:FF:FF:FF:FF:FF est l'adresse de <strong>diffusion</strong> (broadcast) : la trame est reçue par tous les équipements du réseau local.</p>\n<table>\n<thead><tr><th>Champ de la trame Ethernet</th><th>Taille</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Adresse MAC de destination</td><td>6 octets</td><td>Destinataire sur le réseau local</td></tr>\n<tr><td>Adresse MAC source</td><td>6 octets</td><td>Émetteur</td></tr>\n<tr><td>Étiquette 802.1Q (facultative)</td><td>4 octets</td><td>Numéro de VLAN et priorité</td></tr>\n<tr><td>Type (EtherType)</td><td>2 octets</td><td>Protocole transporté : 0x0800 pour IPv4, 0x86DD pour IPv6, 0x0806 pour ARP</td></tr>\n<tr><td>Données</td><td>46 à 1 500 octets</td><td>Le paquet IP</td></tr>\n<tr><td>FCS</td><td>4 octets</td><td>Code de contrôle d'erreur</td></tr>\n</tbody>\n</table>\n<p>La valeur de 1 500 octets est la <strong>MTU</strong> (unité de transmission maximale) standard d'Ethernet. Une trame dont le FCS est faux est détruite : un compteur d'erreurs CRC qui augmente sur un port de commutateur révèle souvent un câble ou une prise défectueux.</p>"
      },
      {
       "titre": "Le commutateur et la table MAC",
       "contenu": "\n<p>Le <strong>commutateur</strong> (switch) relie les équipements d'un même réseau local. Il travaille en couche 2 : il lit l'adresse MAC de destination de chaque trame et ne la renvoie que sur le port concerné. Pour cela, il construit automatiquement une <strong>table d'adresses MAC</strong> (table CAM) en notant, pour chaque trame reçue, l'adresse source et le port d'arrivée.</p>\n<ul>\n<li>Si l'adresse de destination est connue, la trame est <strong>commutée</strong> vers un seul port.</li>\n<li>Si elle est inconnue ou si c'est une diffusion, la trame est <strong>inondée</strong> sur tous les ports sauf le port d'arrivée.</li>\n<li>Les entrées non utilisées sont effacées après un délai (souvent 300 s).</li>\n</ul>\n<p>On distingue les commutateurs <strong>non administrables</strong> (aucun réglage), <strong>administrables</strong> (configuration par interface web ou en ligne de commande : VLAN, supervision, sécurité des ports) et les commutateurs de <strong>niveau 3</strong>, capables de router entre VLAN.</p>\n<p>Sur un commutateur administrable, plusieurs réglages de port sont à connaître :</p>\n<ul>\n<li>la <strong>vitesse</strong> et le <strong>mode duplex</strong> : ils sont normalement négociés automatiquement. Si un côté est forcé en 100 Mbit/s duplex intégral et l'autre laissé en automatique, la négociation échoue (désaccord de duplex) : le lien fonctionne mais très lentement, avec de nombreuses erreurs ;</li>\n<li>la <strong>sécurité de port</strong> : elle limite le nombre d'adresses MAC apprises sur un port, voire n'accepte qu'une adresse donnée, et bloque le port en cas de violation ; elle empêche de brancher un commutateur pirate ou un équipement non autorisé ;</li>\n<li>la <strong>désactivation</strong> des ports inutilisés et leur affectation à un VLAN « poubelle » sans accès ;</li>\n<li>la <strong>description</strong> du port, qui reprend le repère de la prise ou le nom de l'équipement raccordé et facilite l'exploitation.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour retrouver sur quelle prise murale est branchée une imprimante, le technicien relève son adresse MAC sur l'imprimante, puis consulte la table MAC du commutateur d'étage (commande du type « show mac address-table »). Le port trouvé, il le relie au repère de la prise grâce au plan de brassage.</div>"
      },
      {
       "titre": "Segmenter le réseau avec les VLAN",
       "contenu": "\n<p>Dans une entreprise, tous les équipements ne doivent pas se voir : les postes administratifs, les caméras, les téléphones IP, le Wi-Fi invités et les serveurs ont des besoins de sécurité différents. Un <strong>VLAN</strong> (réseau local virtuel, norme IEEE 802.1Q) découpe un commutateur physique en plusieurs réseaux logiques étanches. Deux équipements de VLAN différents ne communiquent pas directement : il faut passer par un routeur ou un pare-feu, qui applique des règles.</p>\n<ul>\n<li>Un <strong>port d'accès</strong> (untagged) appartient à un seul VLAN ; l'équipement branché ignore l'existence du VLAN.</li>\n<li>Un <strong>port d'agrégation</strong> (trunk, tagged) transporte plusieurs VLAN entre deux commutateurs ou vers un routeur ; chaque trame porte l'étiquette 802.1Q indiquant son numéro de VLAN (de 1 à 4094).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir le plan de VLAN d'une PME.<br>1. Recenser les familles d'équipements : administration (25 postes), production (10 postes), téléphonie IP (30 postes), caméras (8), Wi-Fi invités, serveurs.<br>2. Attribuer un numéro et un nom par famille : VLAN 10 ADMIN, VLAN 20 PROD, VLAN 30 VOIX, VLAN 40 CAMERAS, VLAN 50 INVITES, VLAN 99 SERVEURS.<br>3. Attribuer à chaque VLAN un sous-réseau IP (par exemple 192.168.10.0/24 pour le VLAN 10).<br>4. Pour chaque port de chaque commutateur, noter le mode (accès ou agrégation) et le ou les VLAN.<br>5. Définir les flux autorisés entre VLAN (les invités vont seulement vers internet ; les caméras seulement vers l'enregistreur).</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le VLAN 1 est le VLAN par défaut de tous les ports. Le laisser utilisé pour les postes ou pour l'administration des équipements est une mauvaise pratique : on réserve un VLAN dédié à l'administration et l'on désactive les ports inutilisés.</div>"
      },
      {
       "titre": "Redondance, agrégation de liens et PoE",
       "contenu": "\n<p>Pour éviter qu'une seule coupure isole un étage, on relie parfois les commutateurs par plusieurs chemins. Mais une <strong>boucle</strong> en couche 2 est catastrophique : les trames de diffusion tournent indéfiniment (<strong>tempête de diffusion</strong>) et saturent le réseau en quelques secondes. Le protocole <strong>spanning tree</strong> (STP, et ses versions rapides RSTP et MSTP) détecte les boucles et bloque automatiquement les liens redondants, qu'il réactive si le lien principal tombe.</p>\n<p>L'<strong>agrégation de liens</strong> (norme IEEE 802.3ad, LACP) associe plusieurs câbles entre deux équipements en un lien logique unique : le débit s'additionne et la coupure d'un câble n'interrompt pas la liaison.</p>\n<p>Le <strong>PoE</strong> (Power over Ethernet, normes IEEE 802.3af, 802.3at, 802.3bt) alimente un équipement par le câble réseau : téléphone IP, point d'accès Wi-Fi, caméra. Le commutateur PoE dispose d'un <strong>budget de puissance</strong> total qui ne doit pas être dépassé.</p>\n<table>\n<thead><tr><th>Norme</th><th>Nom courant</th><th>Puissance maximale fournie par port (côté commutateur)</th></tr></thead>\n<tbody>\n<tr><td>IEEE 802.3af</td><td>PoE</td><td>15,4 W</td></tr>\n<tr><td>IEEE 802.3at</td><td>PoE+</td><td>30 W</td></tr>\n<tr><td>IEEE 802.3bt</td><td>PoE++ type 3 et type 4</td><td>60 W et 90 W</td></tr>\n</tbody>\n</table>\n<p>Exemple : un commutateur PoE+ de budget 370 W alimente 12 caméras de 12 W (144 W) et 8 points d'accès de 22 W (176 W), soit 320 W : il reste 50 W de marge, le budget est respecté.</p>"
      }
     ],
     "points_cles": [
      "Le modèle OSI a 7 couches, le modèle TCP/IP en a 4 ; on dépanne en remontant les couches de 1 à 7.",
      "L'encapsulation ajoute un en-tête à chaque couche : données, segment, paquet, trame, bits.",
      "Une adresse MAC compte 48 bits ; FF:FF:FF:FF:FF:FF est l'adresse de diffusion.",
      "La MTU standard d'Ethernet est de 1 500 octets ; le FCS détecte les trames erronées.",
      "Le commutateur apprend les adresses MAC sources et commute vers le seul port utile.",
      "Un VLAN 802.1Q sépare logiquement les flux ; le passage entre VLAN se fait par un routeur ou un pare-feu.",
      "Port d'accès : un VLAN non étiqueté ; port d'agrégation : plusieurs VLAN étiquetés.",
      "Le spanning tree bloque les boucles ; l'agrégation LACP additionne les liens.",
      "Le PoE alimente par le câble réseau dans la limite du budget de puissance du commutateur."
     ],
     "lexique": [
      {
       "terme": "Modèle OSI",
       "def": "Modèle de référence décrivant la communication réseau en sept couches."
      },
      {
       "terme": "Encapsulation",
       "def": "Ajout successif des en-têtes de chaque couche autour des données à transmettre."
      },
      {
       "terme": "Trame",
       "def": "Unité de données de la couche liaison, qui contient les adresses MAC."
      },
      {
       "terme": "Adresse MAC",
       "def": "Adresse physique de 48 bits d'une interface réseau."
      },
      {
       "terme": "MTU",
       "def": "Taille maximale des données transportées dans une trame, 1 500 octets en Ethernet standard."
      },
      {
       "terme": "Table MAC",
       "def": "Table du commutateur associant chaque adresse MAC à un port."
      },
      {
       "terme": "VLAN",
       "def": "Réseau local virtuel qui sépare logiquement des équipements partageant le même matériel."
      },
      {
       "terme": "Port d'agrégation",
       "def": "Port de commutateur transportant plusieurs VLAN étiquetés (trunk)."
      },
      {
       "terme": "Spanning tree",
       "def": "Protocole qui empêche les boucles en couche 2 en bloquant les liens redondants."
      },
      {
       "terme": "PoE",
       "def": "Alimentation électrique d'un équipement par son câble Ethernet."
      }
     ]
    },
    {
     "id": "bciel-adressage-ip",
     "titre": "Adressage IPv4, sous-réseaux et IPv6",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Déterminer l'adresse de réseau, l'adresse de diffusion et la plage d'adresses d'un sous-réseau IPv4.",
      "Utiliser la notation CIDR et convertir un préfixe en masque décimal.",
      "Découper un réseau en sous-réseaux adaptés aux besoins d'une entreprise.",
      "Distinguer adresses privées, publiques et particulières.",
      "Lire et simplifier une adresse IPv6 et identifier ses principaux types."
     ],
     "sections": [
      {
       "titre": "L'adresse IPv4 et le masque",
       "contenu": "\n<p>Une <strong>adresse IPv4</strong> est un nombre de 32 bits écrit en quatre octets décimaux séparés par des points : 192.168.10.25. Elle se compose de deux parties : la <strong>partie réseau</strong>, commune à tous les équipements du même réseau, et la <strong>partie hôte</strong>, propre à chaque équipement. La frontière entre les deux est donnée par le <strong>masque de sous-réseau</strong>, une suite de bits à 1 (partie réseau) suivie de bits à 0 (partie hôte).</p>\n<p>Le masque s'écrit en décimal pointé (255.255.255.0) ou en <strong>notation CIDR</strong>, qui indique le nombre de bits à 1 : /24. L'écriture 192.168.10.25/24 contient donc toute l'information.</p>\n<table>\n<thead><tr><th>Préfixe</th><th>Masque</th><th>Bits d'hôte</th><th>Adresses utilisables (2<sup>n</sup> – 2)</th></tr></thead>\n<tbody>\n<tr><td>/8</td><td>255.0.0.0</td><td>24</td><td>16 777 214</td></tr>\n<tr><td>/16</td><td>255.255.0.0</td><td>16</td><td>65 534</td></tr>\n<tr><td>/24</td><td>255.255.255.0</td><td>8</td><td>254</td></tr>\n<tr><td>/25</td><td>255.255.255.128</td><td>7</td><td>126</td></tr>\n<tr><td>/26</td><td>255.255.255.192</td><td>6</td><td>62</td></tr>\n<tr><td>/27</td><td>255.255.255.224</td><td>5</td><td>30</td></tr>\n<tr><td>/28</td><td>255.255.255.240</td><td>4</td><td>14</td></tr>\n<tr><td>/30</td><td>255.255.255.252</td><td>2</td><td>2</td></tr>\n</tbody>\n</table>\n<p>Dans chaque sous-réseau, deux adresses sont réservées : l'<strong>adresse de réseau</strong> (tous les bits d'hôte à 0), qui désigne le réseau lui-même, et l'<strong>adresse de diffusion</strong> (tous les bits d'hôte à 1), qui désigne tous les hôtes du réseau. D'où le « – 2 » dans le calcul.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> deux équipements communiquent directement (sans routeur) seulement s'ils ont la même adresse de réseau. Sinon, chacun envoie ses paquets à sa <strong>passerelle par défaut</strong>.</div>"
      },
      {
       "titre": "Calculer les caractéristiques d'un sous-réseau",
       "contenu": "\n<p>L'adresse de réseau s'obtient par un <strong>ET logique</strong> bit à bit entre l'adresse IP et le masque. En pratique, seul l'octet où le masque n'est ni 255 ni 0 demande un calcul ; on utilise le <strong>pas</strong> (ou taille de bloc), égal à 256 moins la valeur du masque dans cet octet.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> caractériser l'hôte 172.16.45.100/26.<br>1. Masque /26 : 255.255.255.192. L'octet intéressant est le quatrième, masque 192.<br>2. Pas : 256 – 192 = 64. Les sous-réseaux commencent à 0, 64, 128, 192 dans le quatrième octet.<br>3. 100 est compris entre 64 et 127 : l'adresse de réseau est 172.16.45.64.<br>4. L'adresse de diffusion est la dernière du bloc : 172.16.45.127.<br>5. Plage des hôtes : 172.16.45.65 à 172.16.45.126, soit 62 adresses.<br>6. Contrôle : un autre poste en 172.16.45.130/26 est dans le bloc 128–191, donc dans un autre sous-réseau ; il faudra un routeur pour communiquer.</div>\n<p>Par convention dans de nombreuses entreprises, la passerelle prend la première adresse utilisable (ici 172.16.45.65) ou la dernière (172.16.45.126). Ce n'est pas une obligation technique, mais il faut s'y tenir dans tout le réseau.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une erreur de masque sur un seul poste produit des symptômes trompeurs. Un poste configuré en /16 au lieu de /24 croit que des adresses distantes sont locales : il les cherche directement sur le réseau local au lieu de passer par la passerelle et ne les joint pas, alors qu'il communique normalement avec ses voisins.</div>"
      },
      {
       "titre": "Découper un réseau selon les besoins",
       "contenu": "\n<p>Le <strong>découpage en sous-réseaux</strong> consiste à partager un bloc d'adresses en plusieurs réseaux plus petits, en général un par VLAN. On dimensionne chaque sous-réseau selon le nombre d'hôtes, en prévoyant la croissance, puis on place les blocs du plus grand au plus petit pour éviter les chevauchements : c'est le <strong>découpage à masque variable</strong> (VLSM).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> découper 192.168.50.0/24 pour 100 postes (ADMIN), 40 postes (PROD), 20 caméras (CAM) et une liaison entre deux routeurs.<br>1. ADMIN : 100 hôtes demandent 7 bits d'hôte (126 adresses) : /25. Bloc 192.168.50.0/25 (de .0 à .127).<br>2. PROD : 40 hôtes demandent 6 bits (62 adresses) : /26. Bloc suivant 192.168.50.128/26 (de .128 à .191).<br>3. CAM : 20 hôtes demandent 5 bits (30 adresses) : /27. Bloc 192.168.50.192/27 (de .192 à .223).<br>4. Liaison entre routeurs : 2 hôtes, /30. Bloc 192.168.50.224/30 (de .224 à .227).<br>5. Il reste libre 192.168.50.228 à 192.168.50.255 pour une évolution.</div>\n<table>\n<thead><tr><th>Sous-réseau</th><th>Adresse/préfixe</th><th>Passerelle</th><th>Plage d'hôtes</th><th>Diffusion</th></tr></thead>\n<tbody>\n<tr><td>ADMIN</td><td>192.168.50.0/25</td><td>192.168.50.126</td><td>.1 à .126</td><td>192.168.50.127</td></tr>\n<tr><td>PROD</td><td>192.168.50.128/26</td><td>192.168.50.190</td><td>.129 à .190</td><td>192.168.50.191</td></tr>\n<tr><td>CAM</td><td>192.168.50.192/27</td><td>192.168.50.222</td><td>.193 à .222</td><td>192.168.50.223</td></tr>\n<tr><td>Liaison</td><td>192.168.50.224/30</td><td>—</td><td>.225 et .226</td><td>192.168.50.227</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Adresses privées, publiques et particulières",
       "contenu": "\n<p>Les adresses IPv4 <strong>publiques</strong> sont uniques sur internet et attribuées par les fournisseurs d'accès. Faute d'adresses en nombre suffisant, les réseaux internes utilisent des <strong>adresses privées</strong>, définies par la RFC 1918, qui ne sont pas routées sur internet. Pour sortir sur internet, le routeur de l'entreprise traduit ces adresses en une adresse publique : c'est la <strong>traduction d'adresses</strong> (NAT).</p>\n<table>\n<thead><tr><th>Plage</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>10.0.0.0/8</td><td>Privée (grands réseaux)</td></tr>\n<tr><td>172.16.0.0/12 (172.16.0.0 à 172.31.255.255)</td><td>Privée</td></tr>\n<tr><td>192.168.0.0/16</td><td>Privée (box, PME)</td></tr>\n<tr><td>127.0.0.0/8 (127.0.0.1)</td><td>Boucle locale : la machine elle-même</td></tr>\n<tr><td>169.254.0.0/16</td><td>Adresse automatique (APIPA) attribuée quand aucun serveur DHCP n'a répondu</td></tr>\n<tr><td>0.0.0.0/0</td><td>Désigne « tous les réseaux » dans une route par défaut</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un poste qui affiche une adresse en 169.254.x.x n'a pas obtenu d'adresse du serveur DHCP. Le technicien vérifie dans l'ordre : le lien physique, le VLAN du port de commutateur, la présence et l'état du serveur DHCP ou du relais DHCP, et la disponibilité d'adresses dans l'étendue.</div>"
      },
      {
       "titre": "Le plan d'adressage",
       "contenu": "\n<p>Le <strong>plan d'adressage</strong> est le document de référence qui fixe, pour tout le réseau, quelles adresses sont utilisées et par qui. Il évite les conflits d'adresses (deux équipements avec la même adresse, ce qui provoque des coupures aléatoires) et permet à n'importe quel technicien de retrouver un équipement.</p>\n<p>Il distingue deux modes d'attribution :</p>\n<ul>\n<li>l'<strong>adressage dynamique</strong>, distribué par le serveur DHCP, pour les postes de travail, les ordinateurs portables et les téléphones mobiles ;</li>\n<li>l'<strong>adressage statique</strong> (ou par réservation DHCP), pour les équipements que l'on doit toujours retrouver à la même adresse : passerelles, serveurs, imprimantes, commutateurs administrables, points d'accès, caméras, automates.</li>\n</ul>\n<p>On réserve en général une partie de chaque sous-réseau aux adresses fixes et l'on configure l'étendue DHCP sur le reste. Par exemple, dans 192.168.10.0/24 : .1 à .19 pour les équipements d'infrastructure, .20 à .49 pour les imprimantes et équipements fixes, .50 à .250 pour l'étendue DHCP, .254 pour la passerelle.</p>\n<table>\n<thead><tr><th>Équipement</th><th>VLAN</th><th>Adresse</th><th>Mode</th><th>Emplacement</th></tr></thead>\n<tbody>\n<tr><td>Passerelle VLAN 10</td><td>10</td><td>192.168.10.254/24</td><td>Statique</td><td>Pare-feu, local technique</td></tr>\n<tr><td>Commutateur étage 1</td><td>99 (administration)</td><td>192.168.99.11/24</td><td>Statique</td><td>Baie E1</td></tr>\n<tr><td>Imprimante accueil</td><td>10</td><td>192.168.10.21/24</td><td>Réservation DHCP</td><td>Accueil, prise E0-012</td></tr>\n<tr><td>Postes administratifs</td><td>10</td><td>192.168.10.50 à .250</td><td>DHCP</td><td>Bureaux</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> avant d'attribuer une adresse fixe à un nouvel équipement, le technicien consulte le plan d'adressage, choisit une adresse libre hors de l'étendue DHCP, la teste (aucune réponse au ping ni dans le cache ARP), puis met le plan à jour immédiatement.</div>"
      },
      {
       "titre": "L'adressage IPv6",
       "contenu": "\n<p>L'<strong>IPv6</strong> a été conçu pour remplacer l'IPv4, dont les adresses publiques sont épuisées. Une adresse IPv6 compte <strong>128 bits</strong>, écrits en huit groupes de quatre chiffres hexadécimaux séparés par deux-points : 2001:0db8:0000:0000:0000:ff00:0042:8329. Il est désormais largement déployé par les opérateurs et coexiste avec l'IPv4 (on parle de <strong>double pile</strong>).</p>\n<p>Deux règles de simplification s'appliquent :</p>\n<ul>\n<li>les zéros en tête de chaque groupe peuvent être supprimés : 0db8 devient db8, 0042 devient 42 ;</li>\n<li>une seule suite de groupes entièrement nuls peut être remplacée par « :: ».</li>\n</ul>\n<p>L'adresse précédente s'écrit donc 2001:db8::ff00:42:8329. Le préfixe 2001:db8::/32 est réservé à la documentation et aux exemples.</p>\n<table>\n<thead><tr><th>Type</th><th>Préfixe</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Globale unicast</td><td>2000::/3</td><td>Adresse publique routable sur internet</td></tr>\n<tr><td>Lien local</td><td>fe80::/10</td><td>Communication sur le seul réseau local ; créée automatiquement sur chaque interface</td></tr>\n<tr><td>Unique locale</td><td>fc00::/7 (en pratique fd00::/8)</td><td>Équivalent des adresses privées</td></tr>\n<tr><td>Multidiffusion</td><td>ff00::/8</td><td>Envoi à un groupe ; remplace la diffusion, qui n'existe pas en IPv6</td></tr>\n<tr><td>Boucle locale</td><td>::1</td><td>La machine elle-même</td></tr>\n</tbody>\n</table>\n<p>Un réseau local IPv6 utilise en règle générale un préfixe <strong>/64</strong> : les 64 premiers bits identifient le réseau, les 64 derniers l'interface. Les hôtes peuvent se configurer automatiquement à partir des annonces du routeur (<strong>SLAAC</strong>) ou recevoir leur adresse d'un serveur DHCPv6.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> « :: » ne peut apparaître qu'une fois dans une adresse, sinon on ne peut plus savoir combien de groupes nuls il remplace. Et un pare-feu configuré seulement pour l'IPv4 laisse ouverte la voie IPv6 si celle-ci est active : les deux protocoles doivent être filtrés.</div>"
      }
     ],
     "points_cles": [
      "Une adresse IPv4 compte 32 bits ; le masque sépare la partie réseau de la partie hôte.",
      "En notation CIDR, /26 signifie 26 bits à 1 dans le masque, soit 255.255.255.192.",
      "Un sous-réseau de n bits d'hôte offre 2^n − 2 adresses utilisables.",
      "Le pas vaut 256 moins la valeur du masque dans l'octet concerné.",
      "Adresse de réseau : bits d'hôte à 0 ; adresse de diffusion : bits d'hôte à 1.",
      "Le découpage VLSM place les sous-réseaux du plus grand au plus petit.",
      "Les plages privées sont 10.0.0.0/8, 172.16.0.0/12 et 192.168.0.0/16 ; elles sortent sur internet par NAT.",
      "Une adresse 169.254.x.x signale l'absence de réponse DHCP.",
      "Une adresse IPv6 compte 128 bits ; « :: » ne s'utilise qu'une fois ; un LAN IPv6 est en /64."
     ],
     "lexique": [
      {
       "terme": "Masque de sous-réseau",
       "def": "Suite de 32 bits indiquant quelle partie d'une adresse IPv4 identifie le réseau."
      },
      {
       "terme": "CIDR",
       "def": "Notation qui indique la longueur du préfixe réseau après une barre oblique."
      },
      {
       "terme": "Adresse de réseau",
       "def": "Première adresse d'un sous-réseau, dont tous les bits d'hôte valent 0."
      },
      {
       "terme": "Adresse de diffusion",
       "def": "Dernière adresse d'un sous-réseau, qui désigne tous ses hôtes."
      },
      {
       "terme": "Passerelle par défaut",
       "def": "Routeur auquel un hôte envoie les paquets destinés à un autre réseau."
      },
      {
       "terme": "VLSM",
       "def": "Découpage d'un réseau en sous-réseaux de tailles différentes."
      },
      {
       "terme": "Adresse privée",
       "def": "Adresse IPv4 réservée aux réseaux internes et non routée sur internet."
      },
      {
       "terme": "APIPA",
       "def": "Adresse automatique en 169.254.x.x prise par un poste sans réponse DHCP."
      },
      {
       "terme": "IPv6",
       "def": "Version du protocole IP à adresses de 128 bits."
      },
      {
       "terme": "SLAAC",
       "def": "Configuration automatique d'une adresse IPv6 à partir des annonces du routeur."
      }
     ]
    },
    {
     "id": "bciel-routage-services-reseau",
     "titre": "Routage, transport et services réseau",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Lire une table de routage et prévoir le chemin suivi par un paquet.",
      "Configurer le principe d'une route statique et d'une route par défaut.",
      "Expliquer le rôle d'ARP, d'ICMP, de TCP et d'UDP et associer les ports usuels aux services.",
      "Décrire le fonctionnement du DHCP, du DNS et de la traduction d'adresses NAT/PAT.",
      "Utiliser les commandes de diagnostic réseau pour localiser un défaut."
     ],
     "sections": [
      {
       "titre": "Le routeur et la table de routage",
       "contenu": "\n<p>Le <strong>routeur</strong> relie des réseaux IP différents : réseau local et internet, VLAN entre eux, sites distants d'une entreprise. Il travaille en couche 3 : pour chaque paquet, il lit l'adresse IP de destination et consulte sa <strong>table de routage</strong> pour choisir l'interface de sortie et le prochain routeur (le <strong>saut suivant</strong>, next hop).</p>\n<table>\n<thead><tr><th>Réseau de destination</th><th>Passerelle (saut suivant)</th><th>Interface</th><th>Origine</th></tr></thead>\n<tbody>\n<tr><td>192.168.10.0/24</td><td>— (directement connecté)</td><td>VLAN10</td><td>Connecté</td></tr>\n<tr><td>192.168.20.0/24</td><td>— (directement connecté)</td><td>VLAN20</td><td>Connecté</td></tr>\n<tr><td>10.50.0.0/16</td><td>192.168.99.2</td><td>VLAN99</td><td>Statique</td></tr>\n<tr><td>0.0.0.0/0</td><td>203.0.113.1</td><td>WAN</td><td>Statique (route par défaut)</td></tr>\n</tbody>\n</table>\n<p>Le routeur choisit la route la <strong>plus spécifique</strong>, c'est-à-dire celle dont le préfixe correspondant est le plus long. Si aucune route ne correspond, il utilise la <strong>route par défaut</strong> 0.0.0.0/0. Sans route par défaut, le paquet est détruit et un message ICMP « destination inaccessible » est renvoyé.</p>\n<p>Les routes peuvent être <strong>connectées</strong> (réseaux des interfaces du routeur), <strong>statiques</strong> (saisies par l'administrateur) ou <strong>dynamiques</strong>, apprises par un protocole de routage (OSPF, RIP, BGP) dans les grands réseaux.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> suivre un paquet avec la table ci-dessus.<br>1. Destination 10.50.3.8 : elle appartient à 10.50.0.0/16 et à 0.0.0.0/0. La route la plus longue est /16 : envoi à 192.168.99.2 par VLAN99.<br>2. Destination 192.168.20.14 : réseau directement connecté, livraison directe sur VLAN20.<br>3. Destination 8.8.8.8 : seule la route par défaut convient, envoi à 203.0.113.1 par le WAN.<br>4. Penser au retour : le routeur 192.168.99.2 doit lui aussi connaître une route vers 192.168.10.0/24, sinon les réponses n'arrivent jamais.</div>"
      },
      {
       "titre": "ARP et ICMP, les protocoles de service",
       "contenu": "\n<p>Pour envoyer un paquet sur un réseau Ethernet, il faut connaître l'adresse MAC du destinataire local (ou de la passerelle). Le protocole <strong>ARP</strong> la trouve : l'hôte diffuse « qui a l'adresse 192.168.10.1 ? », l'équipement concerné répond avec son adresse MAC, et l'hôte la garde en mémoire dans son <strong>cache ARP</strong> (commande arp -a). En IPv6, ce rôle est tenu par le protocole de découverte des voisins (NDP).</p>\n<p>Le protocole <strong>ICMP</strong> transporte des messages de contrôle et d'erreur. La commande <strong>ping</strong> envoie une demande d'écho ICMP et mesure le temps de réponse ; la commande <strong>traceroute</strong> (tracert sous Windows) affiche la liste des routeurs traversés.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'absence de réponse à un ping ne prouve pas qu'un équipement est en panne : de nombreux pare-feu, dont celui de Windows par défaut sur certains profils, bloquent l'ICMP. Il faut confirmer par un autre test (cache ARP, connexion au service, voyants du port).</div>"
      },
      {
       "titre": "La couche transport : TCP, UDP et ports",
       "contenu": "\n<p>La couche transport fait communiquer des <strong>applications</strong>. Chaque application est identifiée par un <strong>numéro de port</strong> (de 0 à 65 535) ; le couple adresse IP et port s'appelle un <strong>socket</strong>. Les ports de 0 à 1023 sont les <strong>ports bien connus</strong>, attribués aux services standards.</p>\n<ul>\n<li><strong>TCP</strong> est un protocole <strong>orienté connexion</strong> et <strong>fiable</strong> : établissement de la connexion en trois temps (SYN, SYN-ACK, ACK), accusés de réception, retransmission des segments perdus, remise dans l'ordre. Il est utilisé pour le web, la messagerie, les transferts de fichiers.</li>\n<li><strong>UDP</strong> est <strong>sans connexion</strong> : plus léger et plus rapide, il ne garantit pas la livraison. Il est utilisé pour le DNS, le DHCP, la voix sur IP, la vidéo en direct, la supervision SNMP.</li>\n</ul>\n<table>\n<thead><tr><th>Service</th><th>Port</th><th>Transport</th></tr></thead>\n<tbody>\n<tr><td>HTTP / HTTPS (web)</td><td>80 / 443</td><td>TCP (HTTPS aussi en UDP avec HTTP/3)</td></tr>\n<tr><td>SSH (administration chiffrée)</td><td>22</td><td>TCP</td></tr>\n<tr><td>Telnet (administration non chiffrée, à proscrire)</td><td>23</td><td>TCP</td></tr>\n<tr><td>DNS</td><td>53</td><td>UDP et TCP</td></tr>\n<tr><td>DHCP (serveur / client)</td><td>67 / 68</td><td>UDP</td></tr>\n<tr><td>SMTP / IMAPS</td><td>25 (587 pour l'envoi authentifié) / 993</td><td>TCP</td></tr>\n<tr><td>SNMP / traps SNMP</td><td>161 / 162</td><td>UDP</td></tr>\n<tr><td>RDP (bureau à distance Windows)</td><td>3389</td><td>TCP</td></tr>\n<tr><td>MQTT / MQTT sur TLS</td><td>1883 / 8883</td><td>TCP</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "DHCP et DNS",
       "contenu": "\n<p>Le <strong>DHCP</strong> attribue automatiquement aux hôtes leur configuration IP : adresse, masque, passerelle, serveurs DNS, durée du <strong>bail</strong>. L'échange comporte quatre messages, retenus par l'acronyme <strong>DORA</strong> : Discover (le client cherche un serveur, en diffusion), Offer (le serveur propose une adresse), Request (le client demande l'adresse proposée), Ack (le serveur confirme). Le serveur gère une <strong>étendue</strong> (plage d'adresses distribuables), des <strong>exclusions</strong> (adresses fixes des serveurs, imprimantes) et des <strong>réservations</strong> (toujours la même adresse pour une adresse MAC donnée).</p>\n<p>Les messages DHCP étant diffusés, ils ne franchissent pas les routeurs. Lorsqu'un serveur DHCP unique sert plusieurs VLAN, le routeur de chaque VLAN doit être configuré en <strong>relais DHCP</strong> (fonction « ip helper »).</p>\n<p>Le <strong>DNS</strong> traduit les noms (www.exemple.fr) en adresses IP. La résolution interroge une hiérarchie de serveurs : racine, domaine de premier niveau (.fr), domaine (exemple.fr). Les principaux <strong>enregistrements</strong> sont : A (nom vers IPv4), AAAA (nom vers IPv6), CNAME (alias), MX (serveur de messagerie), PTR (adresse vers nom). La commande <strong>nslookup</strong> ou <strong>dig</strong> interroge un serveur DNS.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'appel « internet ne marche plus » cache souvent un problème DNS. Si le poste joint 1.1.1.1 par ping mais pas www.exemple.fr, la connectivité IP est bonne et la panne est dans la résolution de noms : serveur DNS arrêté, mauvaise adresse DNS distribuée par le DHCP ou filtrage du port 53.</div>"
      },
      {
       "titre": "La traduction d'adresses NAT et PAT",
       "contenu": "\n<p>Le <strong>NAT</strong> (Network Address Translation) remplace, dans les paquets qui sortent, l'adresse IP privée de l'émetteur par l'adresse publique du routeur. Dans sa forme la plus courante, appelée <strong>PAT</strong> (ou NAT surchargé, « masquerade »), le routeur modifie aussi le port source et tient une <strong>table de traduction</strong> : des centaines de postes partagent ainsi une seule adresse publique.</p>\n<table>\n<thead><tr><th>Côté interne (privé)</th><th>Côté externe (public)</th><th>Destination</th></tr></thead>\n<tbody>\n<tr><td>192.168.10.21:51000</td><td>203.0.113.5:40001</td><td>93.184.216.34:443</td></tr>\n<tr><td>192.168.10.35:51000</td><td>203.0.113.5:40002</td><td>93.184.216.34:443</td></tr>\n</tbody>\n</table>\n<p>Les connexions entrantes depuis internet sont bloquées par défaut, puisque le routeur ne sait pas à quel poste les attribuer. Pour publier un service interne (par exemple un serveur web), on crée une <strong>redirection de port</strong> (NAT de destination) : tout ce qui arrive sur le port 443 de l'adresse publique est renvoyé vers 192.168.99.10:443. Une telle ouverture doit être justifiée et protégée, de préférence dans une zone isolée (DMZ).</p>\n<p>Certains opérateurs, faute d'adresses IPv4 publiques, partagent eux-mêmes une adresse publique entre plusieurs clients (NAT de niveau opérateur, CGNAT) : le client ne dispose alors pas d'une adresse publique propre et ne peut pas publier de service par simple redirection de port. En IPv6, le nombre d'adresses rend le NAT inutile : chaque équipement a une adresse globale et la protection repose entièrement sur le <strong>pare-feu</strong>, qui doit bloquer par défaut les connexions entrantes non sollicitées.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le NAT n'est pas un dispositif de sécurité. Il masque les adresses internes, mais il ne filtre ni le contenu, ni les connexions sortantes qu'un logiciel malveillant installé sur un poste peut établir librement. La sécurité relève du pare-feu et de ses règles.</div>"
      },
      {
       "titre": "Les commandes de diagnostic",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> diagnostiquer un poste qui n'accède pas à un site web, en remontant les couches.<br>1. Configuration : ipconfig /all (Windows) ou ip a et ip route (Linux). Vérifier adresse, masque, passerelle, DNS. Une adresse 169.254.x.x oriente vers le DHCP.<br>2. Boucle locale : ping 127.0.0.1 valide la pile TCP/IP du poste.<br>3. Passerelle : ping de la passerelle. En cas d'échec, vérifier câble, port, VLAN (arp -a montre-t-il la MAC de la passerelle ?).<br>4. Au-delà : ping d'une adresse publique connue, puis tracert pour voir où le chemin s'arrête.<br>5. Noms : nslookup du site. Échec : problème DNS.<br>6. Service : test de connexion au port (Test-NetConnection nom -Port 443 sous PowerShell, ou curl). Échec : pare-feu ou service arrêté.<br>7. Consigner chaque résultat dans le ticket : la couche où le test échoue localise la panne.</div>\n<table>\n<thead><tr><th>Commande Windows</th><th>Équivalent Linux</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>ipconfig /all</td><td>ip a</td><td>Afficher la configuration IP</td></tr>\n<tr><td>route print</td><td>ip route</td><td>Afficher la table de routage du poste</td></tr>\n<tr><td>tracert</td><td>traceroute</td><td>Lister les routeurs traversés</td></tr>\n<tr><td>netstat -an</td><td>ss -tulpn</td><td>Lister les connexions et ports en écoute</td></tr>\n<tr><td>ipconfig /renew</td><td>dhclient (selon la distribution)</td><td>Renouveler le bail DHCP</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une panne est localisée quand on connaît le dernier test réussi et le premier test échoué. Changer plusieurs paramètres à la fois empêche de savoir lequel a résolu le problème.</div>"
      }
     ],
     "points_cles": [
      "Le routeur choisit la route au préfixe le plus long ; à défaut, la route par défaut 0.0.0.0/0.",
      "Une route doit exister dans les deux sens pour que les réponses reviennent.",
      "ARP associe une adresse IP locale à une adresse MAC ; ICMP sert au ping et au traceroute.",
      "TCP est fiable et orienté connexion ; UDP est léger et sans garantie de livraison.",
      "Ports à connaître : 22 SSH, 53 DNS, 67/68 DHCP, 80/443 web, 161 SNMP, 3389 RDP.",
      "Le DHCP suit l'échange DORA ; un relais DHCP est nécessaire pour servir d'autres VLAN.",
      "Le DNS traduit les noms en adresses ; ping vers une IP réussi mais nom introuvable signifie problème DNS.",
      "Le PAT partage une adresse publique ; une redirection de port publie un service interne.",
      "Le diagnostic remonte les couches : configuration, passerelle, internet, DNS, service."
     ],
     "lexique": [
      {
       "terme": "Routeur",
       "def": "Équipement de couche 3 qui achemine les paquets entre réseaux IP différents."
      },
      {
       "terme": "Table de routage",
       "def": "Liste des réseaux connus d'un routeur avec l'interface et le saut suivant."
      },
      {
       "terme": "Route par défaut",
       "def": "Route 0.0.0.0/0 utilisée quand aucune autre route ne correspond."
      },
      {
       "terme": "ARP",
       "def": "Protocole qui trouve l'adresse MAC correspondant à une adresse IPv4 locale."
      },
      {
       "terme": "ICMP",
       "def": "Protocole de messages de contrôle et d'erreur, utilisé par ping et traceroute."
      },
      {
       "terme": "Port",
       "def": "Numéro identifiant une application sur un hôte pour la couche transport."
      },
      {
       "terme": "Bail DHCP",
       "def": "Durée pendant laquelle un client peut utiliser l'adresse attribuée."
      },
      {
       "terme": "Relais DHCP",
       "def": "Fonction d'un routeur qui transmet les requêtes DHCP vers un serveur situé dans un autre réseau."
      },
      {
       "terme": "Enregistrement A",
       "def": "Entrée DNS associant un nom à une adresse IPv4."
      },
      {
       "terme": "PAT",
       "def": "Traduction d'adresses et de ports permettant à plusieurs hôtes de partager une adresse publique."
      },
      {
       "terme": "Redirection de port",
       "def": "Règle NAT qui renvoie un port de l'adresse publique vers un serveur interne."
      }
     ]
    },
    {
     "id": "bciel-cablage-fibre-wifi",
     "titre": "Câblage structuré, fibre optique et réseaux sans fil",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Décrire l'architecture d'un câblage structuré et ses limites de longueur.",
      "Choisir une catégorie de câble cuivre et une fibre optique en fonction du débit et de la distance.",
      "Calculer un bilan d'atténuation de liaison optique.",
      "Interpréter un rapport de certification de câblage cuivre ou optique.",
      "Planifier une couverture Wi-Fi : bandes, canaux, positionnement et sécurité."
     ],
     "sections": [
      {
       "titre": "L'architecture du câblage structuré",
       "contenu": "\n<p>Un bâtiment tertiaire est équipé d'un <strong>câblage structuré</strong> : une infrastructure de câbles et de prises, indépendante des équipements actifs, qui permet de brancher n'importe quel appareil à n'importe quelle prise par simple <strong>brassage</strong>. Les normes de référence sont l'ISO/CEI 11801 et la série européenne EN 50173 ; l'installation et la recette suivent la série EN 50174 et les recommandations des constructeurs.</p>\n<table>\n<thead><tr><th>Élément</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Répartiteur général</td><td>Local technique principal : arrivée opérateur, cœur de réseau, serveurs</td></tr>\n<tr><td>Rocade (backbone)</td><td>Liaison entre le répartiteur général et les répartiteurs d'étage, souvent en fibre optique</td></tr>\n<tr><td>Répartiteur d'étage</td><td>Baie 19 pouces : panneaux de brassage, commutateurs d'accès</td></tr>\n<tr><td>Câblage horizontal</td><td>Câbles cuivre posés entre le panneau de brassage et les prises terminales (RJ45)</td></tr>\n<tr><td>Cordons de brassage</td><td>Relient panneau et commutateur dans la baie, prise et poste dans le bureau</td></tr>\n</tbody>\n</table>\n<p>Le câblage horizontal est limité à une <strong>liaison permanente</strong> de 90 m maximum (du panneau à la prise). En ajoutant les cordons (10 m au total au maximum), le <strong>canal</strong> complet ne dépasse pas 100 m. Les équipements sont rangés dans des <strong>baies</strong> dont la hauteur se compte en unités U (1 U = 44,45 mm).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque prise, chaque port de panneau et chaque câble porte un <strong>repère unique</strong> (par exemple B2-E1-024 : bâtiment 2, étage 1, prise 24), reporté sur le plan de câblage et le cahier de recette. Sans repérage, aucune maintenance efficace n'est possible.</div>"
      },
      {
       "titre": "Les câbles cuivre à paires torsadées",
       "contenu": "\n<p>Le câble de réseau local contient quatre <strong>paires torsadées</strong>. La torsade réduit les perturbations entre paires (<strong>diaphonie</strong>) et les parasites extérieurs. Le câble peut être non blindé (U/UTP), écranté globalement (F/UTP) ou blindé paire par paire (U/FTP, S/FTP). Un câble blindé doit avoir son écran relié à la terre à travers le panneau et la baie.</p>\n<table>\n<thead><tr><th>Catégorie (composant)</th><th>Classe (lien)</th><th>Fréquence</th><th>Usage courant</th></tr></thead>\n<tbody>\n<tr><td>Cat 5e</td><td>D</td><td>100 MHz</td><td>1 Gbit/s sur 100 m (installations anciennes)</td></tr>\n<tr><td>Cat 6</td><td>E</td><td>250 MHz</td><td>1 Gbit/s ; 10 Gbit/s sur distance réduite</td></tr>\n<tr><td>Cat 6A</td><td>E<sub>A</sub></td><td>500 MHz</td><td>10 Gbit/s sur 100 m, PoE de forte puissance : standard actuel du tertiaire</td></tr>\n<tr><td>Cat 7A</td><td>F<sub>A</sub></td><td>1 000 MHz</td><td>Applications spécifiques, multimédia</td></tr>\n</tbody>\n</table>\n<p>Le raccordement des connecteurs suit l'un des deux codes de couleurs <strong>T568A</strong> ou <strong>T568B</strong> ; le même code doit être utilisé aux deux extrémités et dans tout le bâtiment.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> détorsader les paires sur plus de quelques millimètres au raccordement, écraser le câble avec un collier trop serré ou ne pas respecter le rayon de courbure minimal dégrade la diaphonie : la liaison échoue à la certification alors que la continuité est parfaite. Un testeur de continuité ne remplace pas un certificateur.</div>"
      },
      {
       "titre": "La fibre optique",
       "contenu": "\n<p>La <strong>fibre optique</strong> transporte la lumière dans un cœur en verre entouré d'une gaine optique. Elle est insensible aux perturbations électromagnétiques, permet de grandes distances et de hauts débits, et n'établit aucune liaison électrique entre deux bâtiments.</p>\n<table>\n<thead><tr><th>Type</th><th>Cœur / gaine</th><th>Longueurs d'onde</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Multimode OM3, OM4 (gaine souvent turquoise ou violette)</td><td>50 / 125 µm</td><td>850 nm, 1 300 nm</td><td>Rocades dans un bâtiment ou un campus, quelques centaines de mètres à 10 Gbit/s</td></tr>\n<tr><td>Monomode OS2 (gaine souvent jaune)</td><td>9 / 125 µm environ</td><td>1 310 nm, 1 550 nm</td><td>Longues distances, réseaux d'opérateur, FTTH</td></tr>\n</tbody>\n</table>\n<p>Les connecteurs courants sont LC (petit, en duplex dans les baies) et SC. Le polissage <strong>UPC</strong> (connecteur bleu) et le polissage incliné <strong>APC</strong> (connecteur vert, utilisé en FTTH) ne doivent jamais être raccordés entre eux. Les fibres se raccordent par <strong>épissure par fusion</strong> à l'aide d'une soudeuse, ou par connecteurs.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer le bilan d'atténuation d'une rocade monomode de 2,4 km avec 2 connecteurs et 2 épissures, à 1 310 nm. Valeurs de calcul retenues par le cahier des charges : fibre 0,35 dB/km, connecteur 0,5 dB, épissure 0,1 dB.<br>1. Fibre : 2,4 × 0,35 = 0,84 dB.<br>2. Connecteurs : 2 × 0,5 = 1,0 dB.<br>3. Épissures : 2 × 0,1 = 0,2 dB.<br>4. Atténuation maximale admise : 0,84 + 1,0 + 0,2 = 2,04 dB.<br>5. Recette : la mesure au photomètre doit être inférieure à 2,04 dB. Si les modules optiques acceptent un budget de 8 dB, la marge est confortable.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la lumière des émetteurs optiques est souvent invisible (infrarouge) et peut léser la rétine. On ne regarde jamais l'extrémité d'une fibre ou d'un connecteur, même si l'on pense la liaison coupée : on utilise un microscope d'inspection adapté ou un photomètre. Les chutes de fibre sont des éclats de verre à récupérer dans un contenant dédié.</div>"
      },
      {
       "titre": "Certifier une installation",
       "contenu": "\n<p>La <strong>recette</strong> d'une installation de câblage repose sur la <strong>certification</strong> de chaque lien, réalisée avec un appareil appelé certificateur, qui compare les mesures aux limites de la norme pour la classe visée et affiche un verdict « Réussite » ou « Échec ».</p>\n<table>\n<thead><tr><th>Mesure (cuivre)</th><th>Ce qu'elle vérifie</th></tr></thead>\n<tbody>\n<tr><td>Schéma de câblage (wire map)</td><td>Chaque fil arrive à la bonne broche : pas de paire inversée, croisée ou séparée</td></tr>\n<tr><td>Longueur</td><td>Liaison inférieure à 90 m (lien permanent)</td></tr>\n<tr><td>Perte d'insertion</td><td>Affaiblissement du signal le long du lien</td></tr>\n<tr><td>NEXT, PS NEXT</td><td>Diaphonie entre paires à l'extrémité proche</td></tr>\n<tr><td>Perte de retour</td><td>Signal réfléchi par les défauts d'impédance</td></tr>\n</tbody>\n</table>\n<p>Pour la fibre, on mesure l'atténuation avec une source et un <strong>photomètre</strong> (méthode de référence) et, sur les liaisons longues ou pour localiser un défaut, on utilise un <strong>réflectomètre</strong> (OTDR) qui indique la position de chaque connecteur, épissure ou coupure.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le dossier des ouvrages exécutés remis au client contient le plan de câblage repéré et les rapports de certification de tous les liens. Un lien en échec est repris (nouveau raccordement), recertifié, et le rapport final remplace le précédent. Un résultat « réussite avec astérisque » signifie que la mesure est trop proche de la limite pour conclure avec certitude : on le signale.</div>"
      },
      {
       "titre": "Les réseaux sans fil Wi-Fi",
       "contenu": "\n<p>Le <strong>Wi-Fi</strong> (normes IEEE 802.11) relie les équipements mobiles par radio au réseau filaire par l'intermédiaire de <strong>points d'accès</strong>. Le réseau est identifié par son nom, le <strong>SSID</strong> ; un même point d'accès peut diffuser plusieurs SSID associés chacun à un VLAN (personnel, invités, objets).</p>\n<table>\n<thead><tr><th>Génération</th><th>Norme</th><th>Bandes</th></tr></thead>\n<tbody>\n<tr><td>Wi-Fi 4</td><td>802.11n</td><td>2,4 et 5 GHz</td></tr>\n<tr><td>Wi-Fi 5</td><td>802.11ac</td><td>5 GHz</td></tr>\n<tr><td>Wi-Fi 6 / 6E</td><td>802.11ax</td><td>2,4 et 5 GHz / ajoute 6 GHz</td></tr>\n<tr><td>Wi-Fi 7</td><td>802.11be</td><td>2,4, 5 et 6 GHz</td></tr>\n</tbody>\n</table>\n<p>La bande de <strong>2,4 GHz</strong> porte plus loin et traverse mieux les murs, mais elle est encombrée : seuls trois canaux de 20 MHz ne se chevauchent pas (1, 6 et 11). La bande de <strong>5 GHz</strong> offre plus de canaux et de débit, avec une portée plus faible ; la bande de 6 GHz encore davantage. Les points d'accès voisins doivent utiliser des canaux différents et une puissance raisonnable, pour limiter les interférences.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une couverture Wi-Fi.<br>1. Recenser les besoins : surface, nombre d'utilisateurs simultanés, usages (bureautique, voix, vidéo), zones critiques.<br>2. Repérer les obstacles sur le plan : murs porteurs, cloisons vitrées, cages d'ascenseur, étagères métalliques.<br>3. Placer les points d'accès au plafond, au centre des zones à couvrir, et répartir les canaux.<br>4. Réaliser un <strong>relevé radio</strong> sur site avec un logiciel de mesure : niveau de signal visé souvent supérieur à – 67 dBm pour la voix et la vidéo.<br>5. Ajuster puissance et position, puis documenter.</div>\n<p>La sécurité repose sur le chiffrement <strong>WPA3</strong> (ou au minimum WPA2 avec AES) : en mode « personnel » avec une clé partagée longue, en mode « entreprise » avec une authentification individuelle par serveur RADIUS (802.1X). Le WEP et le WPA d'origine sont à proscrire.</p>"
      }
     ],
     "points_cles": [
      "Le câblage structuré relie répartiteur général, rocades, répartiteurs d'étage et prises par brassage.",
      "Lien permanent : 90 m maximum ; canal complet avec cordons : 100 m maximum.",
      "Le Cat 6A (classe EA, 500 MHz) permet 10 Gbit/s sur 100 m et le PoE de forte puissance.",
      "La continuité ne suffit pas : seule la certification valide diaphonie, pertes et longueur.",
      "Fibre multimode OM3/OM4 pour les rocades courtes, monomode OS2 pour les longues distances.",
      "Ne jamais raccorder un connecteur APC (vert) sur un UPC (bleu) ; ne jamais regarder une fibre.",
      "Le bilan optique additionne atténuations de fibre, connecteurs et épissures.",
      "En 2,4 GHz, seuls les canaux 1, 6 et 11 ne se chevauchent pas.",
      "Un Wi-Fi d'entreprise utilise WPA3 ou WPA2-AES, idéalement avec 802.1X."
     ],
     "lexique": [
      {
       "terme": "Câblage structuré",
       "def": "Infrastructure de câbles et de prises normalisée, indépendante des équipements actifs."
      },
      {
       "terme": "Rocade",
       "def": "Liaison entre répartiteurs, souvent en fibre optique."
      },
      {
       "terme": "Brassage",
       "def": "Raccordement par cordon d'un port de panneau à un port d'équipement actif."
      },
      {
       "terme": "Lien permanent",
       "def": "Partie fixe du câblage entre le panneau de brassage et la prise terminale."
      },
      {
       "terme": "Diaphonie",
       "def": "Perturbation d'une paire par le signal circulant dans une paire voisine."
      },
      {
       "terme": "Certification",
       "def": "Mesure de chaque lien comparée aux limites de la norme pour une classe donnée."
      },
      {
       "terme": "Épissure",
       "def": "Raccordement permanent de deux fibres, en général par fusion."
      },
      {
       "terme": "Photomètre",
       "def": "Appareil qui mesure la puissance optique reçue pour calculer l'atténuation."
      },
      {
       "terme": "Réflectomètre (OTDR)",
       "def": "Appareil qui localise les événements le long d'une fibre par réflexion de la lumière."
      },
      {
       "terme": "SSID",
       "def": "Nom d'un réseau Wi-Fi diffusé par un point d'accès."
      },
      {
       "terme": "WPA3",
       "def": "Protocole actuel de sécurité et de chiffrement des réseaux Wi-Fi."
      }
     ]
    },
    {
     "id": "bciel-exploitation-supervision",
     "titre": "Systèmes, serveurs, virtualisation et exploitation du réseau",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Administrer les éléments de base d'un poste ou d'un serveur Windows et Linux : comptes, droits, services, mises à jour.",
      "Expliquer le principe de la virtualisation et de la conteneurisation.",
      "Mettre en place une supervision simple des équipements réseau et en interpréter les alertes.",
      "Définir une politique de sauvegarde et vérifier qu'une restauration est possible.",
      "Organiser le maintien en condition opérationnelle d'un réseau."
     ],
     "sections": [
      {
       "titre": "Le système d'exploitation, interface entre matériel et applications",
       "contenu": "\n<p>Le <strong>système d'exploitation</strong> gère le matériel (processeur, mémoire, disques, interfaces réseau) et fournit des services aux applications. Dans les réseaux d'entreprise, on rencontre surtout <strong>Windows</strong> (postes clients et Windows Server) et <strong>Linux</strong> (serveurs, équipements réseau, objets connectés, sous de nombreuses distributions comme Debian ou Ubuntu). Les commutateurs, routeurs et pare-feu ont leur propre système, administré en ligne de commande ou par interface web.</p>\n<p>Le technicien d'exploitation manipule régulièrement :</p>\n<ul>\n<li>les <strong>comptes</strong> et les <strong>groupes</strong> d'utilisateurs ;</li>\n<li>les <strong>droits</strong> sur les fichiers et dossiers ;</li>\n<li>les <strong>services</strong> (programmes qui tournent en arrière-plan : serveur web, DHCP, partage de fichiers) ;</li>\n<li>les <strong>mises à jour</strong> de sécurité ;</li>\n<li>les <strong>journaux</strong> (logs) qui enregistrent les événements.</li>\n</ul>\n<table>\n<thead><tr><th>Action</th><th>Linux (ligne de commande)</th><th>Windows</th></tr></thead>\n<tbody>\n<tr><td>Créer un utilisateur</td><td>adduser technicien</td><td>Gestion de l'ordinateur ou net user</td></tr>\n<tr><td>Lister les fichiers et leurs droits</td><td>ls -l</td><td>Propriétés, onglet Sécurité, ou icacls</td></tr>\n<tr><td>Modifier les droits</td><td>chmod 640 fichier</td><td>icacls ou onglet Sécurité</td></tr>\n<tr><td>État d'un service</td><td>systemctl status ssh</td><td>services.msc ou Get-Service</td></tr>\n<tr><td>Mettre à jour</td><td>apt update puis apt upgrade (Debian, Ubuntu)</td><td>Windows Update, ou serveur de mises à jour centralisé</td></tr>\n<tr><td>Consulter les journaux</td><td>journalctl, dossier /var/log</td><td>Observateur d'événements</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sous Linux, les droits s'écrivent pour trois catégories (propriétaire, groupe, autres) et trois actions (lecture r = 4, écriture w = 2, exécution x = 1). « chmod 640 » donne lecture-écriture au propriétaire (6), lecture au groupe (4), rien aux autres (0).</div>"
      },
      {
       "titre": "Gérer les identités et les droits",
       "contenu": "\n<p>Dans une entreprise, les comptes ne sont pas créés poste par poste : ils sont centralisés dans un <strong>annuaire</strong>, le plus souvent <strong>Active Directory</strong> dans les environnements Windows (ou un annuaire LDAP). L'annuaire regroupe utilisateurs, groupes, ordinateurs et <strong>stratégies de groupe</strong> (GPO) qui appliquent automatiquement des paramètres à tous les postes : verrouillage de session, mots de passe, lecteurs réseau, restrictions.</p>\n<p>Les droits suivent le <strong>principe du moindre privilège</strong> : chacun ne reçoit que les droits nécessaires à son travail. On attribue les droits à des <strong>groupes</strong> (par exemple « Comptabilité – lecture », « Comptabilité – modification »), puis on place les utilisateurs dans les groupes : c'est plus lisible et plus sûr que des droits individuels.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> travailler au quotidien avec un compte administrateur expose tout le système au moindre logiciel malveillant ouvert par erreur. Le technicien possède deux comptes : un compte standard pour la bureautique et la messagerie, un compte d'administration réservé aux tâches d'administration.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors du départ d'un salarié, la procédure de sortie prévoit la désactivation immédiate de son compte, la révocation de ses accès à distance et la récupération de son matériel. Les comptes « oubliés » d'anciens salariés sont une porte d'entrée classique des attaques.</div>"
      },
      {
       "titre": "Virtualisation et conteneurs",
       "contenu": "\n<p>La <strong>virtualisation</strong> permet de faire fonctionner plusieurs <strong>machines virtuelles</strong> (VM) sur un seul serveur physique. Un logiciel appelé <strong>hyperviseur</strong> partage le processeur, la mémoire, les disques et les cartes réseau entre les VM, qui se comportent chacune comme un ordinateur indépendant avec son propre système d'exploitation.</p>\n<ul>\n<li>Hyperviseur de <strong>type 1</strong> (bare metal) : installé directement sur le serveur (Proxmox VE, VMware ESXi, Hyper-V Server) ; utilisé en production.</li>\n<li>Hyperviseur de <strong>type 2</strong> : installé comme une application sur un système existant (VirtualBox, VMware Workstation) ; utilisé pour les tests et la formation.</li>\n</ul>\n<p>Avantages : économie de matériel et d'énergie, création rapide de serveurs, <strong>instantanés</strong> (snapshots) avant une modification risquée, déplacement d'une VM d'un serveur à l'autre. Les VM sont reliées entre elles et au réseau physique par des <strong>commutateurs virtuels</strong>, qui gèrent aussi les VLAN.</p>\n<p>Les <strong>conteneurs</strong> (par exemple Docker) vont plus loin dans la légèreté : ils partagent le noyau du système hôte et n'embarquent que l'application et ses dépendances. Ils démarrent en quelques secondes et sont très utilisés pour déployer des services web et des applications de traitement de données.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un instantané n'est pas une sauvegarde. Il est stocké sur le même support que la VM : si le serveur ou son stockage est perdu, l'instantané disparaît avec elle. De plus, conserver longtemps des instantanés dégrade les performances.</div>"
      },
      {
       "titre": "Superviser le réseau",
       "contenu": "\n<p>La <strong>supervision</strong> consiste à surveiller en permanence l'état des équipements et des services pour détecter un incident avant les utilisateurs. Un logiciel de supervision (Zabbix, Centreon, PRTG, LibreNMS…) interroge régulièrement les équipements et déclenche des <strong>alertes</strong> selon des <strong>seuils</strong>.</p>\n<p>Le protocole <strong>SNMP</strong> est la base de la supervision réseau. Le superviseur interroge l'<strong>agent</strong> SNMP de l'équipement (port UDP 161), qui renvoie des valeurs identifiées dans une base d'informations, la <strong>MIB</strong> : état des ports, trafic, température, charge processeur. L'équipement peut aussi envoyer spontanément une alerte, appelée <strong>trap</strong> (port UDP 162). La version <strong>SNMPv3</strong> ajoute authentification et chiffrement ; les versions v1 et v2c reposent sur une simple « communauté » transmise en clair.</p>\n<table>\n<thead><tr><th>Indicateur supervisé</th><th>Seuil d'alerte typique</th><th>Action</th></tr></thead>\n<tbody>\n<tr><td>Disponibilité (ping) d'un commutateur</td><td>3 absences de réponse consécutives</td><td>Alerte critique, intervention</td></tr>\n<tr><td>Occupation d'un disque serveur</td><td>Avertissement à 80 %, critique à 90 %</td><td>Nettoyage, extension</td></tr>\n<tr><td>Erreurs CRC sur un port</td><td>Augmentation continue</td><td>Contrôle du câble et de la prise</td></tr>\n<tr><td>Température d'une baie</td><td>Selon les spécifications constructeur</td><td>Contrôle de la climatisation</td></tr>\n<tr><td>Expiration d'un certificat TLS</td><td>30 jours avant la date</td><td>Renouvellement</td></tr>\n</tbody>\n</table>\n<p>Les journaux de tous les équipements gagnent à être centralisés sur un serveur (protocole <strong>syslog</strong>) avec des horloges synchronisées par <strong>NTP</strong> : sans heure exacte, il est impossible de reconstituer l'enchaînement d'un incident.</p>"
      },
      {
       "titre": "Sauvegarder et restaurer",
       "contenu": "\n<p>La <strong>sauvegarde</strong> protège contre la panne matérielle, l'erreur humaine, le vol et surtout le <strong>rançongiciel</strong>, qui chiffre les données. La règle de référence est la règle <strong>3-2-1</strong> : au moins 3 copies des données, sur 2 supports différents, dont 1 hors site. On y ajoute souvent une copie <strong>hors ligne</strong> ou <strong>immuable</strong> (impossible à modifier pendant une durée fixée), qu'un attaquant ne pourra pas chiffrer.</p>\n<table>\n<thead><tr><th>Type</th><th>Contenu</th><th>Avantage</th><th>Inconvénient</th></tr></thead>\n<tbody>\n<tr><td>Complète</td><td>Toutes les données</td><td>Restauration simple</td><td>Longue, volumineuse</td></tr>\n<tr><td>Différentielle</td><td>Ce qui a changé depuis la dernière complète</td><td>Restauration avec 2 jeux</td><td>Grossit chaque jour</td></tr>\n<tr><td>Incrémentale</td><td>Ce qui a changé depuis la dernière sauvegarde, quelle qu'elle soit</td><td>Rapide, peu volumineuse</td><td>Restauration avec toute la chaîne</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> définir une politique de sauvegarde avec le client.<br>1. Fixer la <strong>perte de données maximale admissible</strong> (RPO) : « on accepte de perdre au plus 24 h de travail » impose au moins une sauvegarde par jour.<br>2. Fixer la <strong>durée maximale d'interruption admissible</strong> (RTO) : « le serveur doit être de nouveau disponible en 4 h » oriente vers une restauration rapide (disque local, VM de secours).<br>3. Choisir le planning : par exemple complète le vendredi soir, incrémentale du lundi au jeudi.<br>4. Définir la rétention : 4 semaines, 12 mois en fin de mois.<br>5. Planifier un <strong>test de restauration</strong> régulier et le consigner.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une sauvegarde qui n'a jamais été restaurée n'est qu'une hypothèse. Le test de restauration est la seule preuve que la sauvegarde est exploitable.</div>"
      },
      {
       "titre": "Le maintien en condition opérationnelle",
       "contenu": "\n<p>Le <strong>maintien en condition opérationnelle</strong> (MCO) regroupe toutes les actions qui gardent le réseau disponible et performant : surveillance, maintenance préventive, correction des incidents, mises à jour, gestion des évolutions. On y associe le <strong>maintien en condition de sécurité</strong> (MCS) : application des correctifs, revue des comptes et des règles de filtrage.</p>\n<ul>\n<li><strong>Maintenance préventive</strong> : mises à jour planifiées des micrologiciels des équipements, contrôle des onduleurs et de leurs batteries, dépoussiérage des baies, vérification des sauvegardes.</li>\n<li><strong>Maintenance corrective</strong> : remise en service après un incident, remplacement d'un équipement défaillant.</li>\n<li><strong>Gestion des changements</strong> : toute modification (nouvelle règle, nouveau VLAN) est demandée, évaluée, planifiée, documentée, avec un retour arrière prévu.</li>\n</ul>\n<p>Les engagements de service envers le client sont formalisés dans une <strong>convention de service</strong> (SLA) : délais d'intervention et de rétablissement, plages horaires couvertes, taux de disponibilité. Un taux de disponibilité de 99,9 % sur une année correspond à environ 8 h 45 min d'indisponibilité cumulée au maximum (0,1 % de 8 760 h).</p>"
      }
     ],
     "points_cles": [
      "Le technicien gère comptes, groupes, droits, services, mises à jour et journaux sous Windows et Linux.",
      "Sous Linux, chmod 640 donne rw au propriétaire, r au groupe, rien aux autres.",
      "Les identités sont centralisées dans un annuaire ; les droits sont attribués à des groupes selon le moindre privilège.",
      "Un hyperviseur de type 1 fait tourner plusieurs VM sur un serveur ; un instantané n'est pas une sauvegarde.",
      "SNMP interroge les agents (UDP 161) et reçoit des traps (UDP 162) ; SNMPv3 est chiffré.",
      "Journaux centralisés (syslog) et horloges synchronisées (NTP) sont indispensables pour analyser un incident.",
      "Règle 3-2-1 : 3 copies, 2 supports, 1 hors site, plus une copie hors ligne ou immuable.",
      "RPO et RTO fixent la fréquence des sauvegardes et la rapidité de restauration.",
      "Le MCO associe maintenance préventive, corrective et gestion des changements, encadrées par un SLA."
     ],
     "lexique": [
      {
       "terme": "Service",
       "def": "Programme fonctionnant en arrière-plan qui rend un service réseau ou système."
      },
      {
       "terme": "Annuaire",
       "def": "Base centralisée des utilisateurs, groupes et ordinateurs d'une organisation."
      },
      {
       "terme": "Moindre privilège",
       "def": "Principe consistant à n'accorder que les droits strictement nécessaires."
      },
      {
       "terme": "Hyperviseur",
       "def": "Logiciel qui exécute et partage les ressources entre plusieurs machines virtuelles."
      },
      {
       "terme": "Conteneur",
       "def": "Environnement léger qui isole une application en partageant le noyau du système hôte."
      },
      {
       "terme": "SNMP",
       "def": "Protocole de supervision qui interroge les équipements réseau."
      },
      {
       "terme": "Syslog",
       "def": "Protocole et format de centralisation des journaux d'événements."
      },
      {
       "terme": "Règle 3-2-1",
       "def": "Règle de sauvegarde : trois copies, deux supports, une copie hors site."
      },
      {
       "terme": "RPO",
       "def": "Perte de données maximale admissible, exprimée en durée."
      },
      {
       "terme": "RTO",
       "def": "Durée maximale admissible pour rétablir un service."
      },
      {
       "terme": "MCO",
       "def": "Maintien en condition opérationnelle d'un système."
      },
      {
       "terme": "SLA",
       "def": "Convention de service fixant les engagements de disponibilité et de délai."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Programmation, données et cybersécurité",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bciel-algorithmique-programmation",
     "titre": "Algorithmique et programmation en Python et en C",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Traduire un besoin en algorithme structuré avec variables, conditions, boucles et fonctions.",
      "Lire et écrire un programme simple en Python et en C embarqué.",
      "Choisir le type de donnée adapté et éviter les erreurs de dépassement ou de conversion.",
      "Tester un programme avec des jeux d'essai, y compris les cas limites.",
      "Appliquer les bonnes pratiques de codage et de gestion de versions."
     ],
     "sections": [
      {
       "titre": "De l'algorithme au programme",
       "contenu": "\n<p>Un <strong>algorithme</strong> est une suite finie d'instructions qui résout un problème. Il se rédige d'abord en langage naturel structuré (pseudo-code) ou sous forme de logigramme, indépendamment du langage. Le <strong>programme</strong> est la traduction de cet algorithme dans un langage de programmation.</p>\n<p>Le technicien CIEL rencontre principalement deux familles de langages :</p>\n<ul>\n<li>les langages <strong>interprétés</strong>, comme <strong>Python</strong>, exécutés ligne par ligne par un interpréteur : très utilisés pour les scripts d'administration, le traitement de données, les tests automatisés et la programmation de nano-ordinateurs ;</li>\n<li>les langages <strong>compilés</strong>, comme le <strong>C</strong> et le <strong>C++</strong>, traduits une fois pour toutes en code machine par un compilateur : ils produisent des programmes rapides et compacts, adaptés aux microcontrôleurs (le langage des cartes Arduino est du C++ simplifié).</li>\n</ul>\n<p>Les quatre structures de base sont les mêmes dans tous les langages : la <strong>séquence</strong> (instructions les unes après les autres), l'<strong>alternative</strong> (si… sinon), la <strong>répétition</strong> (boucle tant que, boucle pour) et l'appel de <strong>fonction</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> on écrit l'algorithme avant le code. Un algorithme clair révèle les cas oubliés (valeur hors plage, capteur absent) avant même la première ligne de programme.</div>"
      },
      {
       "titre": "Variables, types et opérateurs",
       "contenu": "\n<p>Une <strong>variable</strong> est une zone de mémoire nommée qui contient une valeur. En Python, le type est déduit automatiquement ; en C, il est déclaré et fixe la place occupée en mémoire, ce qui compte beaucoup sur un microcontrôleur.</p>\n<table>\n<thead><tr><th>Donnée</th><th>Python</th><th>C (exemple de type)</th><th>Plage ou remarque</th></tr></thead>\n<tbody>\n<tr><td>Entier non signé sur 8 bits</td><td>int</td><td>uint8_t</td><td>0 à 255</td></tr>\n<tr><td>Entier signé sur 16 bits</td><td>int</td><td>int16_t</td><td>– 32 768 à 32 767</td></tr>\n<tr><td>Entier non signé sur 32 bits</td><td>int</td><td>uint32_t</td><td>0 à 4 294 967 295</td></tr>\n<tr><td>Nombre à virgule</td><td>float</td><td>float</td><td>Précision limitée, calcul plus lent sans unité de calcul flottant</td></tr>\n<tr><td>Booléen</td><td>bool (True, False)</td><td>bool (avec stdbool.h)</td><td>Vrai ou faux</td></tr>\n<tr><td>Texte</td><td>str</td><td>Tableau de char terminé par un zéro</td><td>Attention à la taille du tableau</td></tr>\n</tbody>\n</table>\n<p>Les opérateurs courants sont arithmétiques (+, –, *, /, % pour le reste de la division), de comparaison (==, !=, &lt;, &gt;, &lt;=, &gt;=), logiques (and, or, not en Python ; &amp;&amp;, ||, ! en C) et, en C embarqué, bit à bit (&amp;, |, ^, ~, décalages &lt;&lt; et &gt;&gt;) pour manipuler les registres.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en C, une variable uint8_t qui vaut 255 et à laquelle on ajoute 1 repasse à 0 : c'est un <strong>dépassement</strong>. De même, la division 7 / 2 entre deux entiers donne 3 et non 3,5. Ces erreurs ne produisent aucun message : le programme continue avec une valeur fausse.</div>"
      },
      {
       "titre": "Structures de contrôle et fonctions",
       "contenu": "\n<p>Exemple en Python : un script lit une liste de températures relevées par un capteur et signale les dépassements.</p>\n<p><em>SEUIL = 28.0<br>releves = [24.5, 26.1, 29.3, 27.8, 30.2]<br>def depassements(valeurs, seuil):<br>&nbsp;&nbsp;&nbsp;&nbsp;nb = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;for v in valeurs:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if v &gt; seuil:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nb = nb + 1<br>&nbsp;&nbsp;&nbsp;&nbsp;return nb<br>print(\"Dépassements :\", depassements(releves, SEUIL))</em></p>\n<p>Le programme affiche « Dépassements : 2 » (29,3 et 30,2). En Python, l'<strong>indentation</strong> (le décalage des lignes) délimite les blocs : elle fait partie de la syntaxe.</p>\n<p>Le même traitement en C, sur un microcontrôleur, s'écrit avec des accolades pour délimiter les blocs et des types déclarés :</p>\n<p><em>uint8_t depassements(const float valeurs[], uint8_t n, float seuil) {<br>&nbsp;&nbsp;&nbsp;&nbsp;uint8_t nb = 0;<br>&nbsp;&nbsp;&nbsp;&nbsp;for (uint8_t i = 0; i &lt; n; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (valeurs[i] &gt; seuil) { nb++; }<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;return nb;<br>}</em></p>\n<p>Une <strong>fonction</strong> regroupe un traitement réutilisable ; elle reçoit des <strong>paramètres</strong> et renvoie une <strong>valeur de retour</strong>. Découper un programme en petites fonctions bien nommées le rend lisible, testable et maintenable.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un programme embarqué de microcontrôleur est construit autour d'une boucle infinie : initialisation des périphériques une seule fois au démarrage, puis répétition sans fin de « lire les entrées, calculer, commander les sorties, communiquer ». Les attentes bloquantes (temporisations de plusieurs secondes) y sont évitées, car pendant ce temps le programme ne réagit plus à rien ; on utilise plutôt la mesure du temps écoulé ou les interruptions.</div>"
      },
      {
       "titre": "Programmer les entrées-sorties d'un microcontrôleur",
       "contenu": "\n<p>Sur un microcontrôleur, le programme agit sur le monde physique à travers des fonctions de bibliothèque ou, à plus bas niveau, en écrivant dans des <strong>registres</strong>. Avec l'environnement Arduino, les fonctions les plus courantes sont :</p>\n<table>\n<thead><tr><th>Fonction</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>pinMode(broche, OUTPUT) ou pinMode(broche, INPUT_PULLUP)</td><td>Configurer une broche en sortie, ou en entrée avec résistance de tirage interne</td></tr>\n<tr><td>digitalWrite(broche, HIGH)</td><td>Mettre une sortie au niveau haut</td></tr>\n<tr><td>digitalRead(broche)</td><td>Lire l'état d'une entrée logique</td></tr>\n<tr><td>analogRead(broche)</td><td>Lire la valeur brute du convertisseur analogique-numérique</td></tr>\n<tr><td>analogWrite(broche, valeur)</td><td>Produire un signal MLI de rapport cyclique proportionnel à la valeur</td></tr>\n<tr><td>millis()</td><td>Obtenir le temps écoulé depuis le démarrage, en millisecondes</td></tr>\n</tbody>\n</table>\n<p>La lecture d'un bouton-poussoir pose un problème classique : au moment de l'appui, le contact mécanique <strong>rebondit</strong> et produit plusieurs fronts en quelques millisecondes. Le programme doit filtrer ces rebonds, par exemple en ignorant tout changement d'état pendant 20 à 50 ms après le premier front. Sur les nano-ordinateurs fonctionnant sous Linux, les mêmes opérations se programment en Python à l'aide de bibliothèques dédiées aux broches d'entrée-sortie.</p>"
      },
      {
       "titre": "Tester et déboguer",
       "contenu": "\n<p>Un programme n'est validé que lorsqu'il a été <strong>testé</strong> avec un <strong>jeu d'essai</strong> : un ensemble de valeurs d'entrée choisies, avec pour chacune le résultat attendu. On teste les cas normaux, les <strong>cas limites</strong> (valeur égale au seuil, liste vide, valeur maximale) et les cas d'erreur (valeur non numérique, capteur débranché).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> construire le jeu d'essai de la fonction depassements avec un seuil de 28,0.<br>1. Cas normal : [24.5, 29.3, 30.2] ; attendu 2.<br>2. Cas limite égalité : [28.0] ; attendu 0, car le test est « strictement supérieur ». Vérifier que c'est bien le comportement voulu par le cahier des charges.<br>3. Liste vide : [] ; attendu 0, sans erreur.<br>4. Toutes au-dessus : [29, 31, 35] ; attendu 3.<br>5. Exécuter chaque cas, comparer le résultat obtenu à l'attendu, consigner les écarts et corriger.</div>\n<p>Pour trouver une erreur (un <strong>bogue</strong>), on dispose de plusieurs outils : messages d'erreur de l'interpréteur ou du compilateur (à lire jusqu'au bout, ils donnent la ligne), affichages temporaires de variables sur la console série, <strong>débogueur</strong> qui exécute le programme pas à pas avec des <strong>points d'arrêt</strong> et permet d'observer les variables.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un programme qui « marche sur l'exemple » n'est pas un programme testé. Les pannes en exploitation viennent presque toujours d'un cas non prévu : valeur négative, chaîne vide, réseau indisponible, mémoire pleine.</div>"
      },
      {
       "titre": "Bonnes pratiques et gestion de versions",
       "contenu": "\n<p>Un code professionnel est écrit pour être relu et modifié par d'autres. Les bonnes pratiques usuelles sont :</p>\n<ul>\n<li>des <strong>noms explicites</strong> pour les variables et les fonctions (temperature_moyenne plutôt que t2) ;</li>\n<li>des <strong>constantes nommées</strong> plutôt que des valeurs « magiques » dans le code (SEUIL_ALARME = 28.0) ;</li>\n<li>des <strong>commentaires</strong> qui expliquent le pourquoi, pas le comment évident ;</li>\n<li>une présentation homogène, suivant les conventions du langage (pour Python, la recommandation PEP 8) ;</li>\n<li>aucun mot de passe ni clé d'accès écrit en clair dans le code source ;</li>\n<li>la vérification systématique des données reçues de l'extérieur (saisie, réseau, capteur).</li>\n</ul>\n<p>Le code évolue sans cesse : la <strong>gestion de versions</strong> conserve l'historique de chaque modification. L'outil le plus répandu est <strong>Git</strong>. Chaque enregistrement (<strong>commit</strong>) est accompagné d'un message qui décrit la modification ; on peut revenir à une version antérieure, comparer deux versions, travailler à plusieurs sur des <strong>branches</strong> puis les fusionner. Le dépôt est souvent hébergé sur une plateforme partagée.</p>\n<table>\n<thead><tr><th>Commande Git</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>git clone</td><td>Récupérer une copie d'un dépôt existant</td></tr>\n<tr><td>git status</td><td>Voir les fichiers modifiés</td></tr>\n<tr><td>git add puis git commit -m \"message\"</td><td>Enregistrer une version avec son message</td></tr>\n<tr><td>git log</td><td>Consulter l'historique</td></tr>\n<tr><td>git pull / git push</td><td>Récupérer / envoyer les modifications du dépôt partagé</td></tr>\n</tbody>\n</table>"
      }
     ],
     "points_cles": [
      "On écrit l'algorithme avant le programme ; séquence, alternative, répétition et fonction suffisent à tout décrire.",
      "Python est interprété (scripts, données, tests) ; le C est compilé (microcontrôleurs).",
      "En C, le type fixe la plage : un uint8_t va de 0 à 255 et déborde silencieusement.",
      "La division entière 7 / 2 donne 3 en C.",
      "En Python, l'indentation délimite les blocs ; en C, ce sont les accolades.",
      "Un programme embarqué tourne dans une boucle infinie et évite les attentes bloquantes.",
      "Un jeu d'essai couvre cas normaux, cas limites et cas d'erreur, avec les résultats attendus.",
      "Noms explicites, constantes nommées, commentaires utiles et aucun secret dans le code.",
      "Git conserve l'historique des versions par commits commentés."
     ],
     "lexique": [
      {
       "terme": "Algorithme",
       "def": "Suite finie d'instructions permettant de résoudre un problème."
      },
      {
       "terme": "Compilateur",
       "def": "Programme qui traduit un code source en code machine exécutable."
      },
      {
       "terme": "Interpréteur",
       "def": "Programme qui exécute un code source instruction par instruction."
      },
      {
       "terme": "Variable",
       "def": "Zone de mémoire nommée contenant une valeur modifiable."
      },
      {
       "terme": "Type",
       "def": "Nature d'une donnée (entier, réel, texte…) qui fixe sa plage et sa taille en mémoire."
      },
      {
       "terme": "Dépassement",
       "def": "Résultat d'un calcul qui sort de la plage du type et donne une valeur fausse."
      },
      {
       "terme": "Fonction",
       "def": "Bloc de code nommé, réutilisable, qui reçoit des paramètres et renvoie une valeur."
      },
      {
       "terme": "Jeu d'essai",
       "def": "Ensemble de données d'entrée et de résultats attendus servant à tester un programme."
      },
      {
       "terme": "Débogueur",
       "def": "Outil qui exécute un programme pas à pas pour observer ses variables."
      },
      {
       "terme": "Commit",
       "def": "Enregistrement d'une version dans un dépôt Git, accompagné d'un message."
      }
     ]
    },
    {
     "id": "bciel-donnees-web-bases",
     "titre": "Valoriser la donnée : formats, protocoles, web et bases de données",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Décrire la chaîne de la donnée, de l'acquisition par un capteur à sa présentation à l'utilisateur.",
      "Lire et produire des données aux formats CSV et JSON.",
      "Expliquer les échanges HTTP et MQTT entre objets, serveurs et applications.",
      "Interroger une base de données relationnelle avec des requêtes SQL simples.",
      "Identifier les exigences de qualité et de protection des données."
     ],
     "sections": [
      {
       "titre": "La chaîne de la donnée",
       "contenu": "\n<p>Les objets connectés, les équipements réseau et les applications produisent en permanence des <strong>données</strong>. <strong>Valoriser la donnée</strong>, c'est la transformer en information utile : un tableau de bord de consommation, une alerte de température, une statistique de fréquentation, un historique de pannes. La chaîne comporte cinq étapes :</p>\n<table>\n<thead><tr><th>Étape</th><th>Exemple</th><th>Technologies</th></tr></thead>\n<tbody>\n<tr><td>Acquérir</td><td>Le capteur mesure 21,4 °C et 48 % d'humidité</td><td>Capteurs, microcontrôleur</td></tr>\n<tr><td>Transmettre</td><td>La mesure part toutes les 5 minutes vers un serveur</td><td>Wi-Fi, LoRaWAN, MQTT, HTTP</td></tr>\n<tr><td>Stocker</td><td>La mesure est enregistrée avec sa date et l'identifiant du capteur</td><td>Base de données, fichiers</td></tr>\n<tr><td>Traiter</td><td>Calcul des moyennes horaires, détection des dépassements</td><td>Scripts Python, requêtes SQL</td></tr>\n<tr><td>Restituer</td><td>Courbe sur une page web, alerte par message</td><td>Application web, tableau de bord</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une donnée n'a de valeur que si elle est accompagnée de son contexte : <strong>unité</strong>, <strong>horodatage</strong> (date et heure, de préférence en temps universel UTC), <strong>source</strong> (identifiant du capteur) et éventuellement <strong>qualité</strong> (mesure valide ou suspecte).</div>"
      },
      {
       "titre": "Les formats d'échange : CSV et JSON",
       "contenu": "\n<p>Pour échanger des données entre programmes, on utilise des <strong>formats</strong> texte normalisés, lisibles par l'humain et par la machine.</p>\n<p>Le format <strong>CSV</strong> (valeurs séparées par des virgules) représente un tableau : une ligne par enregistrement, un séparateur entre les champs, une première ligne d'en-tête. Il s'ouvre dans un tableur.</p>\n<p><em>horodatage;capteur;temperature_C;humidite_pct<br>2026-03-12T08:00:00Z;salle-B12;21.4;48<br>2026-03-12T08:05:00Z;salle-B12;21.6;47</em></p>\n<p>Le format <strong>JSON</strong> représente des données structurées sous forme de paires « clé : valeur », d'objets entre accolades et de listes entre crochets. C'est le format dominant des API web et des objets connectés.</p>\n<p><em>{ \"capteur\": \"salle-B12\", \"horodatage\": \"2026-03-12T08:00:00Z\", \"mesures\": { \"temperature_C\": 21.4, \"humidite_pct\": 48 }, \"batterie_V\": 3.02 }</em></p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en France, les tableurs utilisent souvent la virgule comme séparateur décimal et le point-virgule comme séparateur de champs, alors que la plupart des programmes attendent le point décimal. Un fichier CSV mal interprété transforme 21.4 en date ou en texte. Il faut toujours préciser le séparateur, le séparateur décimal et l'encodage (UTF-8) dans la documentation de l'échange.</div>"
      },
      {
       "titre": "HTTP, API et MQTT",
       "contenu": "\n<p>Le web repose sur le modèle <strong>client-serveur</strong> : le client (navigateur, application, objet) envoie une <strong>requête</strong>, le serveur renvoie une <strong>réponse</strong>. Le protocole est <strong>HTTP</strong>, et sa version chiffrée <strong>HTTPS</strong> (HTTP dans TLS), seule acceptable aujourd'hui.</p>\n<table>\n<thead><tr><th>Méthode HTTP</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>GET</td><td>Lire une ressource</td></tr>\n<tr><td>POST</td><td>Envoyer des données (nouvelle mesure, formulaire)</td></tr>\n<tr><td>PUT / PATCH</td><td>Modifier une ressource</td></tr>\n<tr><td>DELETE</td><td>Supprimer une ressource</td></tr>\n</tbody>\n</table>\n<p>La réponse porte un <strong>code d'état</strong> : 200 (succès), 201 (créé), 301 (redirection), 401 (authentification requise), 403 (accès interdit), 404 (ressource introuvable), 500 (erreur du serveur). Une <strong>API</strong> (interface de programmation) web expose des adresses (points de terminaison) que d'autres programmes appellent pour lire ou écrire des données, généralement en JSON, avec une clé ou un jeton d'authentification.</p>\n<p>Pour les objets connectés, le protocole <strong>MQTT</strong> est très utilisé. Il fonctionne en <strong>publication/abonnement</strong> : les objets <strong>publient</strong> leurs messages sur des <strong>sujets</strong> (topics) hiérarchisés, par exemple batimentB/salle12/temperature, auprès d'un serveur central appelé <strong>broker</strong> ; les applications <strong>s'abonnent</strong> aux sujets qui les intéressent et reçoivent les messages dès leur publication. MQTT est léger, adapté aux liaisons peu fiables, et se sécurise par TLS (port 8883) et par authentification des clients.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors de la mise en service de capteurs MQTT, le technicien s'abonne avec un client de test au sujet générique batimentB/# (le « # » remplace tous les niveaux inférieurs) pour vérifier que chaque capteur publie bien, au bon sujet, au bon format et à la bonne fréquence, avant de raccorder le tableau de bord.</div>"
      },
      {
       "titre": "L'application web : client, serveur et langages",
       "contenu": "\n<p>Une application web de restitution des données repose sur trois couches qui communiquent entre elles :</p>\n<ul>\n<li>la partie <strong>client</strong>, exécutée dans le navigateur : <strong>HTML</strong> pour la structure de la page (titres, tableaux, formulaires), <strong>CSS</strong> pour la mise en forme, <strong>JavaScript</strong> pour l'interactivité (actualisation d'une courbe sans recharger la page) ;</li>\n<li>la partie <strong>serveur</strong>, exécutée sur la machine qui héberge le site : un serveur web (Apache, Nginx) reçoit les requêtes et les confie à un programme écrit par exemple en <strong>PHP</strong> ou en <strong>Python</strong>, qui interroge la base de données et construit la réponse ;</li>\n<li>la <strong>base de données</strong>, qui stocke durablement les informations.</li>\n</ul>\n<p>Une page est dite <strong>statique</strong> lorsque son contenu est fixe, <strong>dynamique</strong> lorsqu'il est calculé à chaque requête à partir des données. Le tableau de bord d'un réseau de capteurs est dynamique : à chaque affichage, le serveur lit les dernières mesures.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour déployer rapidement un serveur de test au lycée ou chez un client, le technicien installe souvent une pile logicielle complète sur une machine virtuelle ou dans des conteneurs : système Linux, serveur web, langage serveur et base de données. Il sépare toujours l'environnement de test de l'environnement de production, afin qu'un essai ne détruise jamais les données réelles.</div>\n<p>Les outils de développement intégrés aux navigateurs (touche F12) permettent d'observer les requêtes envoyées, les codes d'état reçus, le temps de réponse et les erreurs JavaScript : ce sont les premiers outils de diagnostic d'une application web qui ne s'affiche pas correctement.</p>"
      },
      {
       "titre": "Les bases de données relationnelles et SQL",
       "contenu": "\n<p>Une <strong>base de données relationnelle</strong> range les données dans des <strong>tables</strong> composées de <strong>colonnes</strong> (champs typés) et de <strong>lignes</strong> (enregistrements). Chaque table possède une <strong>clé primaire</strong> qui identifie chaque ligne de façon unique ; une <strong>clé étrangère</strong> fait référence à la clé primaire d'une autre table et crée la relation. Les systèmes courants sont MariaDB/MySQL, PostgreSQL et SQLite.</p>\n<table>\n<thead><tr><th>Table capteur</th><th></th><th></th></tr></thead>\n<tbody>\n<tr><td><strong>id</strong> (clé primaire)</td><td>nom</td><td>local</td></tr>\n<tr><td>1</td><td>TH-01</td><td>B12</td></tr>\n<tr><td>2</td><td>TH-02</td><td>B14</td></tr>\n</tbody>\n</table>\n<table>\n<thead><tr><th>Table mesure</th><th></th><th></th><th></th></tr></thead>\n<tbody>\n<tr><td><strong>id</strong></td><td>id_capteur (clé étrangère)</td><td>horodatage</td><td>temperature</td></tr>\n<tr><td>101</td><td>1</td><td>2026-03-12 08:00</td><td>21.4</td></tr>\n<tr><td>102</td><td>2</td><td>2026-03-12 08:00</td><td>23.9</td></tr>\n<tr><td>103</td><td>1</td><td>2026-03-12 08:05</td><td>21.6</td></tr>\n</tbody>\n</table>\n<p>Le langage <strong>SQL</strong> permet de manipuler ces données :</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> écrire les requêtes SQL courantes sur ces tables.<br>1. Lire les températures du capteur 1 : SELECT horodatage, temperature FROM mesure WHERE id_capteur = 1 ORDER BY horodatage;<br>2. Insérer une mesure : INSERT INTO mesure (id_capteur, horodatage, temperature) VALUES (2, '2026-03-12 08:05', 24.1);<br>3. Moyenne par capteur, avec le nom grâce à une jointure : SELECT c.nom, AVG(m.temperature) FROM mesure m JOIN capteur c ON m.id_capteur = c.id GROUP BY c.nom;<br>4. Résultat attendu sur les données du tableau : TH-01 → 21,5 ; TH-02 → 23,9 (avant l'insertion de l'étape 2).</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> construire une requête SQL en collant directement un texte saisi par l'utilisateur ouvre la voie à l'<strong>injection SQL</strong> : un attaquant saisit un morceau de requête qui lit ou détruit la base. Les programmes doivent utiliser des <strong>requêtes préparées</strong> (paramétrées), qui séparent le code SQL des données.</div>"
      },
      {
       "titre": "Qualité, restitution et protection des données",
       "contenu": "\n<p>Avant d'exploiter des données, on vérifie leur <strong>qualité</strong> : valeurs manquantes (capteur muet), valeurs aberrantes (– 40 °C dans un bureau, souvent le signe d'un capteur débranché), doublons, horodatages incohérents (horloge non synchronisée). Le traitement doit signaler ces anomalies plutôt que de les intégrer silencieusement dans une moyenne.</p>\n<p>La <strong>restitution</strong> se fait par un <strong>tableau de bord</strong> : indicateurs chiffrés, courbes d'évolution, alertes colorées. Il doit répondre à une question précise de l'utilisateur et indiquer clairement les unités et la période.</p>\n<p>Lorsque les données concernent des personnes identifiables (nom, adresse IP, badge, géolocalisation, image d'une caméra, consommation d'un logement), ce sont des <strong>données à caractère personnel</strong>, soumises au <strong>Règlement général sur la protection des données</strong> (RGPD). Le traitement doit avoir une finalité déterminée, ne collecter que les données nécessaires (<strong>minimisation</strong>), fixer une <strong>durée de conservation</strong>, informer les personnes et assurer la sécurité des données. En France, l'autorité de contrôle est la <strong>CNIL</strong>.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la donnée la mieux protégée est celle que l'on ne collecte pas. Avant d'ajouter un capteur ou un champ, on se demande s'il est indispensable à la finalité du système.</div>"
      }
     ],
     "points_cles": [
      "La chaîne de la donnée : acquérir, transmettre, stocker, traiter, restituer.",
      "Une donnée utile porte une unité, un horodatage (idéalement UTC) et une source.",
      "CSV pour les tableaux, JSON pour les données structurées des API et objets connectés.",
      "HTTPS est la seule forme acceptable de HTTP ; les codes 2xx indiquent un succès, 4xx une erreur du client, 5xx une erreur du serveur.",
      "MQTT fonctionne en publication/abonnement autour d'un broker, avec des sujets hiérarchisés.",
      "Une base relationnelle relie ses tables par clés primaires et clés étrangères.",
      "SELECT lit, INSERT ajoute, JOIN relie, GROUP BY regroupe pour calculer.",
      "Les requêtes préparées protègent contre l'injection SQL.",
      "Les données personnelles relèvent du RGPD : finalité, minimisation, durée de conservation, sécurité."
     ],
     "lexique": [
      {
       "terme": "Horodatage",
       "def": "Date et heure associées à une donnée."
      },
      {
       "terme": "CSV",
       "def": "Format texte tabulaire où les champs sont séparés par un caractère défini."
      },
      {
       "terme": "JSON",
       "def": "Format texte de données structurées en paires clé-valeur, objets et listes."
      },
      {
       "terme": "API",
       "def": "Interface permettant à un programme d'accéder aux données ou fonctions d'un autre."
      },
      {
       "terme": "Code d'état HTTP",
       "def": "Nombre renvoyé par un serveur web indiquant le résultat d'une requête."
      },
      {
       "terme": "Broker MQTT",
       "def": "Serveur qui reçoit les messages publiés et les distribue aux abonnés."
      },
      {
       "terme": "Clé primaire",
       "def": "Champ qui identifie de manière unique chaque ligne d'une table."
      },
      {
       "terme": "Clé étrangère",
       "def": "Champ qui fait référence à la clé primaire d'une autre table."
      },
      {
       "terme": "Injection SQL",
       "def": "Attaque consistant à insérer du code SQL dans une donnée saisie."
      },
      {
       "terme": "Donnée à caractère personnel",
       "def": "Information se rapportant à une personne identifiée ou identifiable."
      }
     ]
    },
    {
     "id": "bciel-fondamentaux-cybersecurite",
     "titre": "Les fondamentaux de la cybersécurité",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Définir les critères de sécurité d'un système d'information : disponibilité, intégrité, confidentialité, traçabilité.",
      "Distinguer menace, vulnérabilité, risque et mesure de sécurité.",
      "Reconnaître les principales attaques visant les entreprises et les objets connectés.",
      "Appliquer les règles d'hygiène informatique : authentification, mots de passe, mises à jour, sensibilisation.",
      "Évaluer simplement un risque pour prioriser les mesures."
     ],
     "sections": [
      {
       "titre": "Les critères de sécurité",
       "contenu": "\n<p>La <strong>cybersécurité</strong> désigne l'ensemble des mesures qui protègent les systèmes d'information, les réseaux, les équipements et les données contre les actes malveillants et les incidents. Un système d'information est sûr lorsqu'il respecte quatre <strong>critères de sécurité</strong>, résumés par l'acronyme <strong>DICT</strong> (on rencontre aussi DICP, P pour preuve) :</p>\n<table>\n<thead><tr><th>Critère</th><th>Question</th><th>Exemple d'atteinte</th></tr></thead>\n<tbody>\n<tr><td><strong>Disponibilité</strong></td><td>Le service est-il accessible quand on en a besoin ?</td><td>Serveur saturé par une attaque, rançongiciel qui bloque la production</td></tr>\n<tr><td><strong>Intégrité</strong></td><td>Les données sont-elles exactes et non modifiées sans autorisation ?</td><td>Modification d'un RIB dans une facture, firmware altéré</td></tr>\n<tr><td><strong>Confidentialité</strong></td><td>Seules les personnes autorisées y ont-elles accès ?</td><td>Fuite d'un fichier clients, écoute d'un Wi-Fi non chiffré</td></tr>\n<tr><td><strong>Traçabilité</strong> (preuve)</td><td>Peut-on savoir qui a fait quoi et quand ?</td><td>Journaux absents ou effacés après une intrusion</td></tr>\n</tbody>\n</table>\n<p>À ces critères s'ajoute l'<strong>authenticité</strong> : l'assurance que l'interlocuteur ou la donnée est bien ce qu'il prétend être.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque mesure de sécurité protège un ou plusieurs critères. Une sauvegarde protège la disponibilité, le chiffrement la confidentialité, une signature numérique l'intégrité et l'authenticité, les journaux la traçabilité.</div>"
      },
      {
       "titre": "Menace, vulnérabilité et risque",
       "contenu": "\n<p>Trois notions sont à distinguer soigneusement :</p>\n<ul>\n<li>une <strong>vulnérabilité</strong> est une faiblesse du système : logiciel non mis à jour, mot de passe par défaut, port ouvert inutilement, utilisateur non sensibilisé ;</li>\n<li>une <strong>menace</strong> est ce qui peut exploiter cette faiblesse : un attaquant, un logiciel malveillant, mais aussi une panne ou une erreur humaine ;</li>\n<li>le <strong>risque</strong> combine la vraisemblance qu'une menace exploite une vulnérabilité et la gravité de l'impact.</li>\n</ul>\n<p>Les vulnérabilités connues des logiciels et équipements sont publiées et numérotées dans la base internationale <strong>CVE</strong> (par exemple CVE-2024-xxxxx) et notées par un score de gravité <strong>CVSS</strong>, de 0 à 10. En France, le <strong>CERT-FR</strong>, rattaché à l'ANSSI, publie des avis et des alertes de sécurité.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> coter et classer des risques avec une grille simple (vraisemblance et gravité notées de 1 à 4, risque = produit).<br>1. Rançongiciel via une pièce jointe : vraisemblance 3, gravité 4, risque 12.<br>2. Vol d'un ordinateur portable non chiffré : vraisemblance 2, gravité 3, risque 6.<br>3. Panne du disque d'un serveur sans redondance : vraisemblance 2, gravité 4, risque 8.<br>4. Classer : 12, puis 8, puis 6. Traiter en priorité le premier (sensibilisation, filtrage de la messagerie, sauvegardes hors ligne).<br>5. Après mise en place des mesures, réévaluer le <strong>risque résiduel</strong> et le faire accepter par la direction.</div>"
      },
      {
       "titre": "Les principales attaques",
       "contenu": "\n<p>Les attaques visent autant les grandes entreprises que les PME, les collectivités, les hôpitaux et les particuliers. Selon les bilans du dispositif national d'assistance cybermalveillance.gouv.fr, l'hameçonnage figure chaque année parmi les menaces les plus fréquentes.</p>\n<table>\n<thead><tr><th>Attaque</th><th>Principe</th><th>Critère touché</th></tr></thead>\n<tbody>\n<tr><td><strong>Hameçonnage</strong> (phishing)</td><td>Message imitant un organisme de confiance pour voler des identifiants ou faire ouvrir une pièce jointe piégée</td><td>Confidentialité, puis tous</td></tr>\n<tr><td><strong>Rançongiciel</strong> (ransomware)</td><td>Logiciel qui chiffre les données et exige une rançon, souvent après en avoir volé une copie</td><td>Disponibilité, confidentialité</td></tr>\n<tr><td><strong>Fraude au président</strong>, faux RIB</td><td>Ingénierie sociale pour obtenir un virement</td><td>Intégrité</td></tr>\n<tr><td><strong>Déni de service distribué</strong> (DDoS)</td><td>Saturation d'un service par un très grand nombre de requêtes, souvent issues d'objets connectés piratés (botnet)</td><td>Disponibilité</td></tr>\n<tr><td><strong>Attaque par force brute</strong></td><td>Essai automatique de nombreux mots de passe sur un service exposé (SSH, RDP, VPN)</td><td>Confidentialité</td></tr>\n<tr><td><strong>Homme du milieu</strong></td><td>Interception des échanges, par exemple via un faux point d'accès Wi-Fi</td><td>Confidentialité, intégrité</td></tr>\n<tr><td><strong>Exploitation de vulnérabilité</strong></td><td>Utilisation d'une faille non corrigée d'un équipement exposé</td><td>Tous</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les objets connectés sont des cibles faciles : caméras, imprimantes, enregistreurs vidéo ou routeurs laissés avec leur mot de passe d'usine et un micrologiciel jamais mis à jour sont recrutés en masse dans des réseaux de machines zombies. Le technicien qui installe un tel équipement change systématiquement les identifiants par défaut, applique les mises à jour et désactive les services inutiles.</div>"
      },
      {
       "titre": "L'authentification et les mots de passe",
       "contenu": "\n<p>L'<strong>authentification</strong> vérifie l'identité d'un utilisateur ou d'un équipement. Elle repose sur un ou plusieurs <strong>facteurs</strong> :</p>\n<ul>\n<li>ce que l'on <strong>sait</strong> : mot de passe, code PIN ;</li>\n<li>ce que l'on <strong>possède</strong> : téléphone recevant un code, clé de sécurité physique, carte à puce ;</li>\n<li>ce que l'on <strong>est</strong> : empreinte digitale, reconnaissance faciale.</li>\n</ul>\n<p>L'<strong>authentification multifacteur</strong> (MFA) combine au moins deux facteurs de natures différentes. Elle bloque l'essentiel des attaques par vol de mot de passe et s'impose sur les accès sensibles : messagerie, accès à distance, comptes d'administration.</p>\n<p>Un mot de passe robuste est <strong>long</strong>, <strong>unique</strong> pour chaque service, et n'est pas devinable à partir d'informations personnelles. Les recommandations de l'ANSSI raisonnent en <strong>entropie</strong> et conseillent, par exemple, des phrases de passe de plusieurs mots aléatoires ; les longueurs minimales recommandées évoluent et doivent être vérifiées dans le guide en vigueur. Un <strong>gestionnaire de mots de passe</strong> permet d'utiliser des mots de passe différents et longs sans les retenir.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un mot de passe « complexe » mais court (P@ssw0rd!) se casse en peu de temps par des outils qui testent les substitutions habituelles. Et un mot de passe réutilisé sur plusieurs sites est compromis partout dès qu'un seul site se fait voler sa base.</div>"
      },
      {
       "titre": "La sécurité des objets connectés dès la conception",
       "contenu": "\n<p>Le technicien CIEL conçoit, assemble et programme lui-même des objets connectés. Il doit donc appliquer la <strong>sécurité dès la conception</strong> : les protections sont prévues dès le cahier des charges et non ajoutées après coup. Les recommandations publiées par les organismes de normalisation et par l'ANSSI pour les objets connectés convergent vers quelques principes simples :</p>\n<table>\n<thead><tr><th>Principe</th><th>Application concrète</th></tr></thead>\n<tbody>\n<tr><td>Pas de mot de passe universel par défaut</td><td>Mot de passe unique par appareil ou création obligatoire à la première mise en service</td></tr>\n<tr><td>Communications chiffrées</td><td>MQTT sur TLS, HTTPS, réseau radio chiffré</td></tr>\n<tr><td>Mises à jour sécurisées</td><td>Micrologiciel signé, vérifié avant installation, durée de support annoncée</td></tr>\n<tr><td>Surface d'attaque minimale</td><td>Ports de débogage désactivés, services non utilisés supprimés</td></tr>\n<tr><td>Protection des données</td><td>Collecte limitée au nécessaire, secrets stockés hors du code source</td></tr>\n<tr><td>Résilience</td><td>Fonctionnement dégradé sûr en cas de perte du réseau, redémarrage par chien de garde</td></tr>\n</tbody>\n</table>\n<p>Ces exigences ne sont plus seulement de bonnes pratiques : la réglementation européenne sur les équipements radioélectriques et le règlement européen sur la cyber-résilience imposent progressivement des exigences de sécurité aux fabricants de produits connectés vendus dans l'Union.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> écrire en clair dans le code d'un objet le mot de passe du Wi-Fi ou la clé d'accès au serveur, puis publier ce code sur un dépôt partagé, revient à diffuser ces secrets. Il faut les placer dans un fichier de configuration exclu du dépôt et les changer immédiatement en cas de fuite.</div>"
      },
      {
       "titre": "L'hygiène informatique",
       "contenu": "\n<p>L'ANSSI (Agence nationale de la sécurité des systèmes d'information) publie un <strong>guide d'hygiène informatique</strong> qui rassemble des mesures de base, simples et efficaces. Le technicien doit les connaître et les appliquer dans chacune de ses interventions :</p>\n<ol>\n<li><strong>connaître</strong> son parc : inventaire à jour des équipements, logiciels et comptes ;</li>\n<li><strong>mettre à jour</strong> régulièrement systèmes, logiciels et micrologiciels ;</li>\n<li><strong>gérer les comptes</strong> : moindre privilège, comptes d'administration séparés, désactivation des comptes inutiles ;</li>\n<li><strong>authentifier</strong> solidement : mots de passe robustes, MFA, changement des identifiants par défaut ;</li>\n<li><strong>cloisonner</strong> le réseau (VLAN, filtrage) et limiter les services exposés sur internet ;</li>\n<li><strong>sauvegarder</strong> régulièrement, avec une copie hors ligne, et tester les restaurations ;</li>\n<li><strong>journaliser</strong> les événements et les conserver ;</li>\n<li><strong>sensibiliser</strong> les utilisateurs aux pièges (hameçonnage, clés USB inconnues) ;</li>\n<li><strong>préparer</strong> la réaction aux incidents : qui alerter, comment isoler, où trouver les sauvegardes.</li>\n</ol>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la sécurité est une chaîne dont la solidité est celle du maillon le plus faible. Un pare-feu coûteux ne protège pas un réseau dont un équipement garde son mot de passe d'usine ou dont un utilisateur ouvre une pièce jointe piégée.</div>"
      }
     ],
     "points_cles": [
      "Les critères de sécurité sont la disponibilité, l'intégrité, la confidentialité et la traçabilité (DICT).",
      "Une vulnérabilité est une faiblesse, une menace peut l'exploiter, le risque combine vraisemblance et gravité.",
      "Les vulnérabilités connues sont référencées CVE et notées CVSS ; le CERT-FR publie avis et alertes.",
      "Hameçonnage et rançongiciels figurent parmi les menaces les plus fréquentes pour les organisations.",
      "Les objets connectés mal configurés alimentent les botnets utilisés pour les dénis de service.",
      "L'authentification multifacteur combine au moins deux facteurs de natures différentes.",
      "Un mot de passe robuste est long et unique ; un gestionnaire de mots de passe aide à les gérer.",
      "Le guide d'hygiène de l'ANSSI fixe les mesures de base : inventaire, mises à jour, comptes, cloisonnement, sauvegardes, journaux, sensibilisation.",
      "Le risque résiduel après mesures est réévalué et accepté par la direction."
     ],
     "lexique": [
      {
       "terme": "Disponibilité",
       "def": "Capacité d'un système ou d'une donnée à être accessible au moment voulu."
      },
      {
       "terme": "Intégrité",
       "def": "Garantie que les données n'ont pas été modifiées de manière non autorisée."
      },
      {
       "terme": "Confidentialité",
       "def": "Garantie que seules les personnes autorisées accèdent à une information."
      },
      {
       "terme": "Vulnérabilité",
       "def": "Faiblesse d'un système pouvant être exploitée par une menace."
      },
      {
       "terme": "CVE",
       "def": "Identifiant public et unique d'une vulnérabilité connue."
      },
      {
       "terme": "Hameçonnage",
       "def": "Message frauduleux imitant un tiers de confiance pour voler des informations."
      },
      {
       "terme": "Rançongiciel",
       "def": "Logiciel malveillant qui chiffre les données et exige une rançon."
      },
      {
       "terme": "Botnet",
       "def": "Réseau de machines compromises pilotées à distance par un attaquant."
      },
      {
       "terme": "MFA",
       "def": "Authentification combinant au moins deux facteurs de natures différentes."
      },
      {
       "terme": "ANSSI",
       "def": "Agence nationale de la sécurité des systèmes d'information, autorité française de cybersécurité."
      },
      {
       "terme": "Risque résiduel",
       "def": "Risque qui subsiste après la mise en place des mesures de sécurité."
      }
     ]
    },
    {
     "id": "bciel-securiser-reseau-systeme",
     "titre": "Sécuriser un réseau et un système : filtrage, chiffrement, durcissement",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Rédiger et ordonner des règles de filtrage d'un pare-feu selon le principe du refus par défaut.",
      "Concevoir une architecture cloisonnée avec zones et DMZ.",
      "Expliquer le chiffrement symétrique, asymétrique, le hachage et le rôle des certificats.",
      "Choisir une solution d'accès à distance sécurisé (VPN, SSH).",
      "Appliquer une démarche de durcissement d'un équipement ou d'un serveur."
     ],
     "sections": [
      {
       "titre": "Le pare-feu et les règles de filtrage",
       "contenu": "\n<p>Le <strong>pare-feu</strong> (firewall) contrôle les flux entre des zones de confiance différentes : réseau interne et internet, VLAN entre eux, serveurs exposés. Un pare-feu <strong>à états</strong> mémorise les connexions établies : lorsqu'une connexion sortante est autorisée, les réponses correspondantes sont automatiquement acceptées, sans règle supplémentaire.</p>\n<p>Chaque <strong>règle</strong> précise : la source (adresse ou réseau), la destination, le protocole et le port de destination, l'action (autoriser ou refuser) et la journalisation éventuelle. Les règles sont lues <strong>de haut en bas</strong> ; la première qui correspond s'applique. La dernière règle est un <strong>refus par défaut</strong> de tout ce qui n'a pas été explicitement autorisé.</p>\n<table>\n<thead><tr><th>N°</th><th>Source</th><th>Destination</th><th>Service</th><th>Action</th><th>Justification</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>VLAN 10 ADMIN</td><td>Serveur fichiers 192.168.99.10</td><td>SMB TCP 445</td><td>Autoriser</td><td>Partages de fichiers</td></tr>\n<tr><td>2</td><td>VLAN 40 CAMERAS</td><td>Enregistreur 192.168.99.20</td><td>RTSP TCP 554</td><td>Autoriser</td><td>Flux vidéo</td></tr>\n<tr><td>3</td><td>VLAN 40 CAMERAS</td><td>Toute destination</td><td>Tout</td><td>Refuser + journaliser</td><td>Les caméras ne sortent pas</td></tr>\n<tr><td>4</td><td>VLAN 50 INVITES</td><td>Réseaux internes</td><td>Tout</td><td>Refuser</td><td>Isolement des invités</td></tr>\n<tr><td>5</td><td>VLAN 10 et VLAN 50</td><td>Internet</td><td>HTTP/HTTPS TCP 80, 443 ; DNS 53</td><td>Autoriser</td><td>Navigation</td></tr>\n<tr><td>6</td><td>Tout</td><td>Tout</td><td>Tout</td><td>Refuser + journaliser</td><td>Refus par défaut</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'ordre des règles est décisif. Si la règle 5 avait été écrite « VLAN 50 vers toute destination, autoriser » et placée avant la règle 4, les invités auraient atteint le réseau interne : la règle d'isolement n'aurait jamais été lue. Chaque nouvelle règle doit être placée avec soin et justifiée.</div>"
      },
      {
       "titre": "Cloisonner : zones et DMZ",
       "contenu": "\n<p>Le <strong>cloisonnement</strong> limite la propagation d'une attaque : un poste compromis dans un VLAN ne doit pas pouvoir atteindre directement les serveurs sensibles ou les équipements de production. On définit des <strong>zones</strong> regroupant des équipements de même niveau de confiance, et l'on n'autorise entre elles que les flux nécessaires.</p>\n<p>Les serveurs qui doivent être joignables depuis internet (site web, messagerie, serveur VPN) sont placés dans une <strong>zone démilitarisée</strong> (DMZ). La DMZ est séparée à la fois d'internet et du réseau interne : si un serveur exposé est compromis, l'attaquant reste enfermé dans la DMZ.</p>\n<table>\n<thead><tr><th>Flux</th><th>Politique</th></tr></thead>\n<tbody>\n<tr><td>Internet vers DMZ</td><td>Seulement les services publiés (par exemple HTTPS vers le serveur web)</td></tr>\n<tr><td>Internet vers réseau interne</td><td>Interdit</td></tr>\n<tr><td>DMZ vers réseau interne</td><td>Interdit, sauf flux précis et justifié (par exemple vers une base de données sur un port donné)</td></tr>\n<tr><td>Réseau interne vers DMZ</td><td>Autorisé pour l'administration, depuis un poste d'administration dédié</td></tr>\n<tr><td>Réseau interne vers internet</td><td>Autorisé selon la politique, éventuellement via un proxy filtrant</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les équipements industriels et techniques (automates, gestion technique du bâtiment, contrôle d'accès, vidéoprotection) sont souvent anciens et difficiles à mettre à jour. On les place dans une zone dédiée, sans accès direct à internet, et la télémaintenance des fournisseurs passe par un accès contrôlé, nominatif et journalisé, ouvert uniquement pendant l'intervention.</div>"
      },
      {
       "titre": "Le chiffrement, le hachage et les certificats",
       "contenu": "\n<p>Le <strong>chiffrement</strong> rend une information illisible pour qui ne possède pas la <strong>clé</strong>. Il protège la confidentialité des données stockées (disque d'ordinateur portable, sauvegarde) et transmises (web, Wi-Fi, VPN).</p>\n<ul>\n<li>Le <strong>chiffrement symétrique</strong> utilise la même clé pour chiffrer et déchiffrer. Il est rapide ; l'algorithme de référence est l'<strong>AES</strong> (clés de 128 ou 256 bits). La difficulté est de partager la clé de façon sûre.</li>\n<li>Le <strong>chiffrement asymétrique</strong> utilise une paire de clés : une <strong>clé publique</strong>, diffusable, et une <strong>clé privée</strong>, gardée secrète. Ce que l'une chiffre, seule l'autre peut le déchiffrer. Il sert à échanger des clés symétriques et à <strong>signer</strong> (algorithmes RSA, courbes elliptiques).</li>\n</ul>\n<p>Le <strong>hachage</strong> calcule une <strong>empreinte</strong> de taille fixe à partir d'une donnée (algorithme SHA-256 par exemple). La moindre modification de la donnée change complètement l'empreinte : on vérifie ainsi l'intégrité d'un fichier téléchargé ou d'un micrologiciel. Les mots de passe sont stockés sous forme d'empreintes salées calculées avec des fonctions spécialement conçues pour être lentes, jamais en clair.</p>\n<p>Un <strong>certificat</strong> numérique (format X.509) associe une clé publique à une identité (un nom de domaine, par exemple) ; il est signé par une <strong>autorité de certification</strong> reconnue. Lorsqu'un navigateur se connecte en HTTPS, le protocole <strong>TLS</strong> vérifie le certificat du serveur puis établit une clé symétrique de session.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un avertissement « certificat non valide » ne doit jamais être ignoré par habitude. Il peut signaler un certificat expiré ou mal configuré, mais aussi une interception de la connexion. Sur les équipements internes, on installe des certificats émis par l'autorité de l'entreprise plutôt que d'apprendre aux utilisateurs à cliquer sur « continuer ».</div>"
      },
      {
       "titre": "L'accès à distance sécurisé",
       "contenu": "\n<p>L'administration et le télétravail exigent des accès depuis l'extérieur. Exposer directement sur internet un bureau à distance (RDP), une interface d'administration ou un partage de fichiers est l'une des causes les plus fréquentes d'intrusion.</p>\n<ul>\n<li>Le <strong>VPN</strong> (réseau privé virtuel) crée un <strong>tunnel chiffré</strong> entre le poste distant (ou un site distant) et le réseau de l'entreprise ; les technologies courantes sont IPsec, OpenVPN, WireGuard ou des VPN TLS. L'accès VPN doit être protégé par une authentification multifacteur et ne donner accès qu'aux ressources nécessaires.</li>\n<li>Le protocole <strong>SSH</strong> (port TCP 22) permet l'administration chiffrée en ligne de commande des serveurs Linux et des équipements réseau. On privilégie l'authentification par <strong>clé</strong> (paire de clés dont la clé privée reste sur le poste de l'administrateur) et l'on interdit la connexion directe du compte root. Telnet, non chiffré, est à proscrire.</li>\n</ul>\n<p>Sur le réseau local, le contrôle d'accès <strong>802.1X</strong> n'autorise un équipement à utiliser une prise réseau ou le Wi-Fi qu'après son authentification auprès d'un serveur <strong>RADIUS</strong>. Un ordinateur inconnu branché sur une prise libre est alors placé dans un VLAN sans accès.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> mettre en place une administration SSH par clé sur un serveur Linux.<br>1. Sur le poste d'administration, générer une paire de clés : ssh-keygen -t ed25519, avec une phrase de passe.<br>2. Copier la clé publique sur le serveur : ssh-copy-id admin@192.168.99.10.<br>3. Tester la connexion par clé dans une seconde session, sans fermer la première.<br>4. Dans le fichier de configuration du serveur SSH, désactiver l'authentification par mot de passe et la connexion root (PasswordAuthentication no, PermitRootLogin no), puis redémarrer le service.<br>5. Vérifier à nouveau l'accès, puis autoriser le port 22 sur le pare-feu uniquement depuis le VLAN d'administration.</div>"
      },
      {
       "titre": "Durcir un équipement ou un serveur",
       "contenu": "\n<p>Le <strong>durcissement</strong> (hardening) consiste à réduire la <strong>surface d'attaque</strong> d'un équipement en supprimant tout ce qui n'est pas nécessaire et en renforçant la configuration de ce qui reste. Il s'applique à un serveur, un poste, un commutateur, une caméra comme à un objet connecté conçu en atelier.</p>\n<table>\n<thead><tr><th>Mesure</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Changer les identifiants par défaut</td><td>Mot de passe administrateur unique et robuste, compte « admin » renommé si possible</td></tr>\n<tr><td>Mettre à jour</td><td>Dernier micrologiciel ou dernière version stable avec correctifs de sécurité</td></tr>\n<tr><td>Désactiver les services inutiles</td><td>Telnet, HTTP non chiffré, UPnP, partages, ports physiques inutilisés</td></tr>\n<tr><td>Restreindre l'administration</td><td>Interface d'administration accessible seulement depuis le VLAN d'administration, en HTTPS ou SSH</td></tr>\n<tr><td>Appliquer le moindre privilège</td><td>Comptes nominatifs, droits limités</td></tr>\n<tr><td>Activer la journalisation</td><td>Envoi des journaux vers le serveur syslog, horloge NTP</td></tr>\n<tr><td>Sauvegarder la configuration</td><td>Copie de la configuration après chaque modification validée</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'ANSSI et les éditeurs publient des guides de configuration sécurisée pour de nombreux systèmes. Le durcissement suit une liste de contrôle documentée : chaque mesure appliquée est cochée et datée, ce qui permet de vérifier la conformité lors d'un audit.</div>\n<p>Pour vérifier l'efficacité des mesures, on réalise un <strong>scan de ports</strong> (outil de type Nmap) ou un <strong>scan de vulnérabilités</strong> sur ses propres équipements, puis on compare les services visibles à ceux qui sont attendus. Ces outils ne s'utilisent que sur des systèmes dont on a la responsabilité ou avec une autorisation écrite : sinon, il s'agit d'une infraction.</p>"
      }
     ],
     "points_cles": [
      "Un pare-feu à états lit ses règles de haut en bas ; la première règle correspondante s'applique.",
      "La dernière règle est un refus par défaut ; chaque autorisation est justifiée.",
      "Les serveurs exposés sur internet sont placés en DMZ, séparée du réseau interne.",
      "Le chiffrement symétrique (AES) est rapide ; l'asymétrique (clé publique, clé privée) sert à l'échange de clés et à la signature.",
      "Le hachage produit une empreinte qui vérifie l'intégrité ; les mots de passe sont stockés hachés et salés.",
      "Un certificat lie une clé publique à une identité, signé par une autorité de certification ; TLS l'utilise pour HTTPS.",
      "Les accès à distance passent par un VPN avec MFA ; l'administration se fait en SSH par clé, jamais en Telnet.",
      "Le durcissement réduit la surface d'attaque : identifiants changés, mises à jour, services inutiles désactivés.",
      "Un scan de ports ou de vulnérabilités ne se pratique que sur ses propres systèmes ou avec autorisation écrite."
     ],
     "lexique": [
      {
       "terme": "Pare-feu à états",
       "def": "Pare-feu qui suit les connexions établies et accepte automatiquement leurs réponses."
      },
      {
       "terme": "Refus par défaut",
       "def": "Politique qui interdit tout flux non explicitement autorisé."
      },
      {
       "terme": "DMZ",
       "def": "Zone réseau isolée accueillant les serveurs accessibles depuis internet."
      },
      {
       "terme": "AES",
       "def": "Algorithme de chiffrement symétrique de référence."
      },
      {
       "terme": "Clé privée",
       "def": "Clé secrète d'une paire asymétrique, qui ne doit jamais être divulguée."
      },
      {
       "terme": "Empreinte",
       "def": "Résultat de taille fixe d'une fonction de hachage appliquée à une donnée."
      },
      {
       "terme": "Certificat",
       "def": "Document numérique signé associant une clé publique à une identité."
      },
      {
       "terme": "TLS",
       "def": "Protocole qui chiffre et authentifie les échanges, notamment en HTTPS."
      },
      {
       "terme": "VPN",
       "def": "Tunnel chiffré reliant un poste ou un site distant au réseau de l'entreprise."
      },
      {
       "terme": "802.1X",
       "def": "Norme de contrôle d'accès au réseau par authentification de l'équipement ou de l'utilisateur."
      },
      {
       "terme": "Durcissement",
       "def": "Ensemble des mesures qui réduisent la surface d'attaque d'un système."
      }
     ]
    },
    {
     "id": "bciel-gestion-incidents-cadre-legal",
     "titre": "Gestion des incidents et cadre juridique de la cybersécurité",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Distinguer événement, incident, problème et demande, et suivre le cycle de vie d'un ticket.",
      "Qualifier un incident et lui attribuer une priorité selon l'impact et l'urgence.",
      "Appliquer les premiers gestes face à un incident de sécurité sans détruire les preuves.",
      "Identifier les obligations légales liées aux incidents : RGPD, infractions pénales, réglementation des opérateurs.",
      "Respecter la déontologie du technicien qui accède aux systèmes et aux données des clients."
     ],
     "sections": [
      {
       "titre": "Incident, problème, demande : le vocabulaire du support",
       "contenu": "\n<p>Les services informatiques organisent leur activité selon des bonnes pratiques largement répandues, issues notamment du référentiel <strong>ITIL</strong>. Le technicien doit en maîtriser le vocabulaire :</p>\n<table>\n<thead><tr><th>Terme</th><th>Définition</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td><strong>Événement</strong></td><td>Changement d'état détecté, significatif ou non</td><td>Alerte de supervision « disque à 82 % »</td></tr>\n<tr><td><strong>Incident</strong></td><td>Interruption non planifiée ou dégradation d'un service</td><td>L'imprimante du service comptable ne répond plus</td></tr>\n<tr><td><strong>Problème</strong></td><td>Cause, souvent inconnue au départ, d'un ou plusieurs incidents</td><td>Le commutateur d'étage redémarre tous les jours à 14 h</td></tr>\n<tr><td><strong>Demande de service</strong></td><td>Requête standard d'un utilisateur, sans dysfonctionnement</td><td>Création d'un compte pour un nouvel arrivant</td></tr>\n<tr><td><strong>Changement</strong></td><td>Ajout, modification ou suppression d'un élément du système</td><td>Mise à jour du micrologiciel du pare-feu</td></tr>\n</tbody>\n</table>\n<p>La gestion des incidents vise à <strong>rétablir le service</strong> le plus vite possible, éventuellement par un <strong>contournement</strong> (imprimer sur une autre imprimante). La gestion des problèmes vise à <strong>supprimer la cause</strong> pour éviter que les incidents se reproduisent.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> tout incident est enregistré dans un <strong>ticket</strong> de l'outil de gestion des services (GLPI, par exemple) : demandeur, description, catégorie, priorité, actions, solution, durée. Un incident non tracé n'existe pas pour l'organisation et ne pourra jamais être analysé.</div>"
      },
      {
       "titre": "Qualifier et prioriser un incident",
       "contenu": "\n<p>La <strong>qualification</strong> consiste à décrire précisément l'incident, à le classer dans une catégorie (réseau, poste, impression, messagerie, sécurité…) et à fixer sa <strong>priorité</strong>. La priorité résulte du croisement de l'<strong>impact</strong> (nombre de personnes ou importance du service touché) et de l'<strong>urgence</strong> (vitesse à laquelle l'incident cause un dommage).</p>\n<table>\n<thead><tr><th>Impact (lignes) et urgence (colonnes)</th><th>Urgence haute</th><th>Urgence moyenne</th><th>Urgence basse</th></tr></thead>\n<tbody>\n<tr><td>Impact élevé (service entier, production)</td><td>P1 critique</td><td>P2 haute</td><td>P3 moyenne</td></tr>\n<tr><td>Impact moyen (un service, un groupe)</td><td>P2 haute</td><td>P3 moyenne</td><td>P4 basse</td></tr>\n<tr><td>Impact faible (un utilisateur)</td><td>P3 moyenne</td><td>P4 basse</td><td>P4 basse</td></tr>\n</tbody>\n</table>\n<p>Chaque priorité correspond à des délais de prise en charge et de résolution fixés dans la convention de service. Si le technicien de premier niveau ne peut pas résoudre l'incident, il l'<strong>escalade</strong> vers le niveau 2 (technicien spécialisé) ou 3 (expert, éditeur, constructeur), en transmettant un ticket complet.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> rédiger la qualification d'un ticket.<br>1. Reformuler le symptôme de façon factuelle : « Depuis 9 h 10, les 12 postes du VLAN 20 (production) n'accèdent plus au serveur de fichiers ; internet fonctionne. »<br>2. Préciser le périmètre : qui, combien, quel service, depuis quand, quel changement récent.<br>3. Évaluer impact (moyen, un service entier) et urgence (haute, la production est arrêtée) : priorité P2.<br>4. Noter les premiers tests et leurs résultats (ping du serveur réussi, port 445 refusé).<br>5. Indiquer l'action en cours ou l'escalade, et prévenir le demandeur du délai prévu.</div>"
      },
      {
       "titre": "Réagir à un incident de sécurité",
       "contenu": "\n<p>Un <strong>incident de sécurité</strong> porte atteinte à la disponibilité, l'intégrité, la confidentialité ou la traçabilité : poste infecté, compte piraté, fuite de données, rançongiciel. Il se traite selon un cycle : <strong>préparation</strong>, <strong>détection et analyse</strong>, <strong>confinement</strong>, <strong>éradication</strong>, <strong>restauration</strong>, puis <strong>retour d'expérience</strong>.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> premiers gestes face à un poste qui affiche une demande de rançon.<br>1. <strong>Isoler</strong> le poste du réseau : débrancher le câble réseau, couper le Wi-Fi. Ne pas l'éteindre sans consigne : la mémoire vive contient des éléments utiles à l'analyse.<br>2. <strong>Alerter</strong> immédiatement selon la procédure : responsable informatique, responsable sécurité, direction.<br>3. <strong>Noter</strong> tout ce qui est observé, avec l'heure : message affiché, nom des fichiers modifiés, actions réalisées. Photographier l'écran.<br>4. Vérifier si d'autres postes ou serveurs sont touchés et protéger les sauvegardes (les déconnecter si elles sont accessibles).<br>5. Ne pas payer la rançon, ne pas tenter de « nettoyer » seul : l'analyse et la reconstruction suivent la décision des responsables, éventuellement avec un prestataire spécialisé.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> reformater immédiatement un poste compromis rétablit vite le service mais efface les traces qui permettraient de comprendre comment l'attaquant est entré. Sans cette compréhension, la même faille sera réexploitée quelques jours plus tard. La conservation des journaux et des preuves fait partie du traitement.</div>\n<p>Les <strong>journaux</strong> sont la mémoire de l'incident. Ceux du pare-feu indiquent les connexions établies vers l'extérieur, ceux du serveur d'authentification les comptes utilisés et les échecs de connexion, ceux de la messagerie les messages reçus et leurs pièces jointes. Pour être exploitables, ils doivent être horodatés de façon fiable (synchronisation NTP), centralisés hors des machines surveillées pour qu'un attaquant ne puisse pas les effacer, et conservés pendant une durée suffisante. Leur analyse permet de répondre aux questions clés : par où l'attaquant est-il entré, quand, quels comptes et quelles machines a-t-il utilisés, quelles données a-t-il pu consulter ou emporter ?</p>\n<p>Le dispositif national <strong>cybermalveillance.gouv.fr</strong> assiste les particuliers, entreprises et collectivités victimes et oriente vers des prestataires de proximité. Les victimes peuvent porter plainte auprès de la police ou de la gendarmerie.</p>"
      },
      {
       "titre": "Le cadre juridique",
       "contenu": "\n<p>Plusieurs textes encadrent la sécurité des systèmes d'information. Le technicien n'en est pas le juriste, mais il doit en connaître l'existence et les conséquences pratiques.</p>\n<table>\n<thead><tr><th>Texte</th><th>Ce qu'il impose ou sanctionne</th></tr></thead>\n<tbody>\n<tr><td>Code pénal, articles 323-1 et suivants (issus de la loi Godfrain de 1988)</td><td>Sanctionnent l'accès ou le maintien frauduleux dans un système de traitement automatisé de données, l'entrave à son fonctionnement, l'introduction, la modification ou l'extraction frauduleuse de données, ainsi que la détention d'outils conçus pour ces infractions sans motif légitime</td></tr>\n<tr><td>RGPD (règlement européen 2016/679) et loi Informatique et libertés</td><td>Protection des données personnelles ; obligation de sécurité ; notification d'une violation de données à la CNIL dans les 72 heures après en avoir pris connaissance lorsqu'elle présente un risque, et information des personnes si le risque est élevé</td></tr>\n<tr><td>Directive européenne NIS 2</td><td>Obligations de sécurité et de déclaration d'incidents pour un grand nombre d'entités essentielles et importantes ; sa transposition en droit français et la liste des entités concernées sont à vérifier</td></tr>\n<tr><td>Règlement européen sur la cyber-résilience (Cyber Resilience Act)</td><td>Exigences de sécurité pour les produits comportant des éléments numériques mis sur le marché européen, appliquées progressivement ; calendrier à vérifier</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chaque salarié signe ou accepte une <strong>charte informatique</strong>, annexée au règlement intérieur, qui fixe les règles d'usage des outils numériques et les contrôles possibles. Le technicien, qui dispose de droits étendus, est souvent soumis à une charte spécifique des administrateurs, qui rappelle son obligation de confidentialité.</div>"
      },
      {
       "titre": "Déontologie du technicien",
       "contenu": "\n<p>Les compétences et les accès du technicien CIEL lui donnent un pouvoir important : il peut lire des courriels, consulter des fichiers, intercepter du trafic, contourner des protections. Ce pouvoir s'accompagne de règles déontologiques strictes :</p>\n<ul>\n<li>n'agir que dans le cadre de sa mission et avec l'<strong>autorisation</strong> de l'entreprise ou du client ; tout test d'intrusion ou scan sur un système tiers exige un accord écrit qui en fixe le périmètre ;</li>\n<li>respecter la <strong>confidentialité</strong> des informations rencontrées, même par hasard, pendant une intervention ;</li>\n<li>ne pas conserver de copie des données des clients et ne pas utiliser leurs comptes en dehors de l'intervention ;</li>\n<li>signaler les vulnérabilités découvertes au responsable concerné, sans les exploiter ni les diffuser ;</li>\n<li>tracer ses actions d'administration et accepter qu'elles soient contrôlées.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la frontière entre un administrateur et un attaquant n'est pas technique, elle est juridique : c'est l'autorisation. Le même scan de ports est une opération de maintenance sur le réseau de son employeur et une infraction pénale sur le réseau d'un tiers sans accord.</div>\n<p>Après tout incident significatif, l'équipe réalise un <strong>retour d'expérience</strong> : chronologie des faits, causes, efficacité de la réaction, mesures à prendre (correctif, sensibilisation, mise à jour de la procédure). Ce bilan, rédigé sans chercher de coupable, est l'outil principal de progrès de la sécurité.</p>"
      }
     ],
     "points_cles": [
      "Un incident est une interruption ou dégradation de service ; un problème est la cause d'un ou plusieurs incidents.",
      "Tout incident est tracé dans un ticket : description, catégorie, priorité, actions, solution.",
      "La priorité croise impact et urgence ; un ticket non résolu est escaladé avec toutes les informations.",
      "Le cycle de réponse : préparation, détection, confinement, éradication, restauration, retour d'expérience.",
      "Face à un rançongiciel : isoler sans éteindre, alerter, noter, protéger les sauvegardes, ne pas payer.",
      "Le Code pénal (articles 323-1 et suivants) sanctionne l'accès frauduleux, l'entrave et l'altération des données.",
      "Le RGPD impose de notifier à la CNIL une violation de données à risque dans les 72 heures.",
      "La directive NIS 2 et le Cyber Resilience Act renforcent les obligations des organisations et des fabricants.",
      "L'autorisation écrite sépare l'administration légitime de l'infraction ; la confidentialité est absolue."
     ],
     "lexique": [
      {
       "terme": "Incident",
       "def": "Interruption non planifiée ou dégradation de la qualité d'un service."
      },
      {
       "terme": "Problème",
       "def": "Cause sous-jacente d'un ou plusieurs incidents."
      },
      {
       "terme": "Ticket",
       "def": "Enregistrement d'un incident ou d'une demande dans l'outil de gestion des services."
      },
      {
       "terme": "Escalade",
       "def": "Transfert d'un ticket vers un niveau de support plus spécialisé."
      },
      {
       "terme": "Contournement",
       "def": "Solution provisoire qui rétablit le service sans supprimer la cause."
      },
      {
       "terme": "Confinement",
       "def": "Isolement des éléments compromis pour empêcher la propagation d'une attaque."
      },
      {
       "terme": "Violation de données",
       "def": "Incident entraînant la perte, l'altération ou la divulgation non autorisée de données personnelles."
      },
      {
       "terme": "CNIL",
       "def": "Commission nationale de l'informatique et des libertés, autorité française de protection des données."
      },
      {
       "terme": "Charte informatique",
       "def": "Document fixant les règles d'usage des outils numériques dans une organisation."
      },
      {
       "terme": "Retour d'expérience",
       "def": "Analyse d'un incident terminé pour en tirer des mesures d'amélioration."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Projet, qualité et sécurité des interventions",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "bciel-projet-qualite-conformite",
     "titre": "Conduite de projet, qualité et conformité des produits numériques",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Situer son action dans les phases d'un projet technique et dans une équipe.",
      "Planifier des tâches avec un diagramme de Gantt et identifier le chemin critique.",
      "Utiliser les outils de la qualité pour analyser un dysfonctionnement.",
      "Identifier les exigences réglementaires de mise sur le marché d'un produit électronique : marquage CE, directives applicables.",
      "Intégrer la fin de vie et l'impact environnemental des équipements numériques."
     ],
     "sections": [
      {
       "titre": "Les phases d'un projet technique",
       "contenu": "\n<p>Un <strong>projet</strong> est un ensemble d'activités coordonnées, avec un objectif, un budget et une échéance, qui aboutit à un résultat unique : conception d'un objet connecté, déploiement du réseau d'un nouveau bâtiment, migration des serveurs d'une PME. Le technicien CIEL y participe au sein d'une équipe : il réalise des tâches, rend compte de leur avancement et signale les difficultés.</p>\n<table>\n<thead><tr><th>Phase</th><th>Contenu</th><th>Document produit</th></tr></thead>\n<tbody>\n<tr><td>Expression du besoin</td><td>Comprendre ce que veut le client et pourquoi</td><td>Cahier des charges fonctionnel</td></tr>\n<tr><td>Étude et conception</td><td>Choisir les solutions techniques, chiffrer</td><td>Dossier de conception, devis</td></tr>\n<tr><td>Planification</td><td>Découper en tâches, affecter les ressources, ordonner</td><td>Planning (Gantt), liste des tâches</td></tr>\n<tr><td>Réalisation</td><td>Fabriquer, installer, configurer, programmer</td><td>Fiches de suivi, configurations</td></tr>\n<tr><td>Validation et recette</td><td>Vérifier la conformité au cahier des charges avec le client</td><td>Procès-verbal de recette, réserves</td></tr>\n<tr><td>Clôture</td><td>Livrer la documentation, former, faire le bilan</td><td>Dossier technique final, retour d'expérience</td></tr>\n</tbody>\n</table>\n<p>Des <strong>jalons</strong> (revues de projet) marquent la fin des phases importantes : le chef de projet vérifie alors l'avancement, les coûts et les risques, et décide de la poursuite. Les méthodes dites <strong>agiles</strong> (Scrum, par exemple), très utilisées en développement logiciel, découpent au contraire le projet en itérations courtes, de une à quatre semaines, qui produisent chacune une version utilisable.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le triangle du projet relie <strong>qualité</strong>, <strong>coût</strong> et <strong>délai</strong>. Modifier l'un des trois (ajouter une fonction, raccourcir le délai) a toujours une conséquence sur les deux autres.</div>"
      },
      {
       "titre": "Planifier avec un diagramme de Gantt",
       "contenu": "\n<p>Le <strong>diagramme de Gantt</strong> représente les tâches en lignes et le temps en colonnes ; chaque tâche est une barre dont la longueur est sa durée. Les <strong>liens d'antériorité</strong> indiquent qu'une tâche ne peut commencer qu'après la fin d'une autre. Le <strong>chemin critique</strong> est la suite de tâches qui détermine la durée totale du projet : tout retard sur l'une d'elles retarde la fin du projet.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> déterminer la durée d'un déploiement réseau.<br>Tâches : A tirage des câbles (5 j) ; B installation des baies (2 j, après A) ; C certification (2 j, après A) ; D configuration des commutateurs en atelier (3 j, sans antériorité) ; E mise en baie et brassage (1 j, après B et D) ; F recette (1 j, après C et E).<br>1. A se termine au jour 5. B se termine au jour 7, C au jour 7. D se termine au jour 3.<br>2. E commence après B (jour 7) et D (jour 3) : elle commence donc au jour 7 et finit au jour 8.<br>3. F commence après C (jour 7) et E (jour 8) : au jour 8, fin au jour 9.<br>4. Durée totale : 9 jours. Chemin critique : A, B, E, F. D a une <strong>marge</strong> de 4 jours ; C a une marge de 1 jour.</div>\n<p>Le suivi compare régulièrement l'avancement réel au planning. Le technicien renseigne le temps passé et le pourcentage réalisé de ses tâches, et alerte dès qu'une tâche du chemin critique prend du retard.</p>"
      },
      {
       "titre": "Communiquer dans un projet",
       "contenu": "\n<p>Le référentiel du bac pro CIEL fait de la <strong>communication en situation professionnelle</strong>, en français et en anglais, une compétence à part entière. Dans un projet, le technicien communique avec des interlocuteurs très différents : chef de projet, collègues, client non spécialiste, fournisseurs, support technique d'un constructeur souvent anglophone.</p>\n<ul>\n<li>À l'<strong>écrit</strong>, il rédige des comptes rendus d'intervention, des tickets, des courriels, des notices d'utilisation et des procédures. Un bon écrit technique est factuel, daté, structuré, sans ambiguïté, et adapté au lecteur.</li>\n<li>À l'<strong>oral</strong>, il présente l'avancement de ses tâches en réunion, explique une solution au client avec des mots simples, et forme les utilisateurs à un nouvel équipement.</li>\n<li>En <strong>anglais</strong>, il lit des fiches techniques (datasheets), des guides de configuration et des forums techniques ; il ouvre une demande au support d'un constructeur en décrivant précisément le matériel, la version du micrologiciel, le symptôme et les tests déjà réalisés.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> à la fin d'une installation, le technicien remet au client un dossier comprenant le schéma du réseau, le plan d'adressage, les identifiants d'administration transmis de manière sécurisée, les rapports de recette et une notice d'exploitation. Il présente ce dossier oralement, vérifie que le client sait réaliser les opérations courantes et fait signer le procès-verbal de livraison.</div>"
      },
      {
       "titre": "La démarche qualité et ses outils",
       "contenu": "\n<p>La <strong>qualité</strong> est l'aptitude d'un produit ou d'un service à satisfaire les exigences du client. De nombreuses entreprises sont certifiées selon la norme <strong>ISO 9001</strong>, qui exige des processus maîtrisés, des enregistrements et une <strong>amélioration continue</strong>, souvent représentée par la roue de Deming <strong>PDCA</strong> : planifier (Plan), réaliser (Do), vérifier (Check), agir pour améliorer (Act).</p>\n<table>\n<thead><tr><th>Outil</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>QQOQCCP</td><td>Décrire complètement une situation : qui, quoi, où, quand, comment, combien, pourquoi</td></tr>\n<tr><td>Diagramme d'Ishikawa (5M)</td><td>Rechercher les causes possibles d'un défaut : matière, matériel, méthode, main-d'œuvre, milieu</td></tr>\n<tr><td>Méthode des 5 pourquoi</td><td>Remonter à la cause racine en demandant « pourquoi ? » successivement</td></tr>\n<tr><td>Diagramme de Pareto</td><td>Classer les causes par fréquence pour traiter d'abord les plus importantes (souvent 20 % des causes provoquent 80 % des défauts)</td></tr>\n<tr><td>Fiche de non-conformité</td><td>Enregistrer un écart, son traitement et l'action corrective</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un atelier constate que 15 % des cartes d'un lot échouent au test de communication radio. Le diagramme d'Ishikawa oriente vers la « matière » : un nouveau lot de modules radio. Les 5 pourquoi aboutissent à un changement de fournisseur non signalé. L'action corrective impose un contrôle d'entrée des composants et une information obligatoire en cas de changement de source.</div>"
      },
      {
       "titre": "Mettre un produit électronique sur le marché",
       "contenu": "\n<p>Un produit électronique vendu dans l'Union européenne doit porter le <strong>marquage CE</strong>. Par ce marquage, le fabricant déclare que le produit respecte toutes les <strong>directives</strong> et <strong>règlements</strong> européens qui le concernent ; il établit une <strong>déclaration UE de conformité</strong> et conserve un dossier technique. Le marquage CE n'est pas un label de qualité : c'est une obligation réglementaire.</p>\n<table>\n<thead><tr><th>Texte européen</th><th>Objet</th></tr></thead>\n<tbody>\n<tr><td>Directive basse tension 2014/35/UE</td><td>Sécurité électrique des équipements alimentés entre 50 et 1 000 V en alternatif ou entre 75 et 1 500 V en continu</td></tr>\n<tr><td>Directive compatibilité électromagnétique (CEM) 2014/30/UE</td><td>L'appareil ne doit pas perturber les autres et doit supporter les perturbations normales</td></tr>\n<tr><td>Directive équipements radioélectriques (RED) 2014/53/UE</td><td>Équipements émettant des ondes radio : Wi-Fi, Bluetooth, LoRa ; inclut des exigences de cybersécurité pour certains équipements connectés depuis 2025</td></tr>\n<tr><td>Directive RoHS 2011/65/UE</td><td>Limitation de certaines substances dangereuses (plomb, mercure, cadmium…)</td></tr>\n<tr><td>Directive DEEE 2012/19/UE</td><td>Collecte et traitement des déchets d'équipements électriques et électroniques</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> modifier un produit marqué CE (changer l'antenne d'un module radio, augmenter sa puissance, retirer un filtre CEM) peut le rendre non conforme : celui qui le modifie devient alors responsable de sa conformité. Un prototype de lycée ne peut pas être vendu ni installé chez un client sans cette démarche.</div>"
      },
      {
       "titre": "Numérique responsable et fin de vie",
       "contenu": "\n<p>Le numérique représente une part significative et croissante de l'empreinte environnementale. Selon les études publiées en France par l'ADEME et l'Arcep, l'essentiel de cette empreinte provient de la <strong>fabrication des équipements</strong> (extraction des métaux, énergie de production), bien plus que de leur usage. Les chiffres précis évoluent d'une étude à l'autre et doivent être cités avec leur source.</p>\n<p>Le technicien agit concrètement :</p>\n<ul>\n<li>en <strong>prolongeant la durée de vie</strong> des équipements : réparation, mise à jour, reconditionnement plutôt que remplacement ;</li>\n<li>en <strong>dimensionnant au juste besoin</strong> : un commutateur ou un serveur surdimensionné consomme et coûte inutilement ;</li>\n<li>en <strong>réduisant les consommations</strong> : mise en veille programmée, virtualisation, extinction des équipements inutilisés, réglage des sauvegardes ;</li>\n<li>en <strong>orientant les déchets</strong> vers les filières DEEE : les équipements usagés sont remis à un éco-organisme ou à un collecteur agréé ; les supports de données sont effacés de façon sûre ou détruits avant leur départ.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'effacement d'un disque avant recyclage protège la confidentialité ; la remise à la filière DEEE protège l'environnement. Les deux sont obligatoires et se tracent par un bordereau ou une attestation.</div>"
      }
     ],
     "points_cles": [
      "Un projet suit les phases : besoin, conception, planification, réalisation, validation, clôture.",
      "Qualité, coût et délai sont liés : modifier l'un agit sur les autres.",
      "Le chemin critique d'un Gantt fixe la durée du projet ; les autres tâches ont une marge.",
      "La démarche qualité ISO 9001 repose sur l'amélioration continue PDCA.",
      "Ishikawa (5M), 5 pourquoi et Pareto servent à trouver et classer les causes d'un défaut.",
      "Le marquage CE atteste la conformité aux directives applicables ; ce n'est pas un label de qualité.",
      "Directives clés : basse tension, CEM, équipements radio (RED), RoHS, DEEE.",
      "Modifier un produit marqué CE peut le rendre non conforme et transférer la responsabilité.",
      "L'empreinte du numérique vient surtout de la fabrication : prolonger la durée de vie est le premier levier."
     ],
     "lexique": [
      {
       "terme": "Jalon",
       "def": "Point de contrôle d'un projet marquant la fin d'une phase importante."
      },
      {
       "terme": "Diagramme de Gantt",
       "def": "Planning représentant les tâches par des barres sur une échelle de temps."
      },
      {
       "terme": "Chemin critique",
       "def": "Suite de tâches sans marge qui détermine la durée totale d'un projet."
      },
      {
       "terme": "Marge",
       "def": "Retard possible d'une tâche sans retarder la fin du projet."
      },
      {
       "terme": "PDCA",
       "def": "Cycle d'amélioration continue : planifier, réaliser, vérifier, agir."
      },
      {
       "terme": "Diagramme d'Ishikawa",
       "def": "Diagramme en arêtes de poisson classant les causes possibles d'un effet selon les 5M."
      },
      {
       "terme": "Marquage CE",
       "def": "Marquage par lequel le fabricant déclare la conformité d'un produit aux textes européens applicables."
      },
      {
       "terme": "CEM",
       "def": "Compatibilité électromagnétique : capacité à fonctionner sans perturber ni être perturbé."
      },
      {
       "terme": "RoHS",
       "def": "Directive européenne limitant certaines substances dangereuses dans les équipements électroniques."
      },
      {
       "terme": "DEEE",
       "def": "Déchets d'équipements électriques et électroniques, soumis à une filière de collecte dédiée."
      }
     ]
    },
    {
     "id": "bciel-securite-interventions",
     "titre": "Intervenir en sécurité sur les installations électroniques et réseaux",
     "niveau": "1re-Tle",
     "duree": 35,
     "objectifs": [
      "Identifier les risques propres aux interventions sur les cartes, baies, réseaux et liaisons optiques.",
      "Préparer une intervention chez un client : plan de prévention, autorisations, consignation.",
      "Situer son habilitation électrique et son AIPR par rapport aux tâches confiées.",
      "Appliquer les règles de sécurité laser, de travail en hauteur et de manutention des équipements.",
      "Organiser une intervention sur une installation en service sans interrompre le client de façon imprévue."
     ],
     "sections": [
      {
       "titre": "Les risques du métier",
       "contenu": "\n<p>Le cours de seconde a présenté les principes généraux de prévention et le risque électrique. Le technicien CIEL rencontre, en plus, des risques liés à la diversité de ses lieux d'intervention : atelier d'électronique, local technique, faux plafond, chantier, site client en activité.</p>\n<table>\n<thead><tr><th>Situation</th><th>Risque principal</th><th>Mesure de prévention</th></tr></thead>\n<tbody>\n<tr><td>Dépannage d'une carte reliée au secteur</td><td>Électrisation, électrocution</td><td>Habilitation adaptée, transformateur d'isolement, condensateurs déchargés, mesure d'absence de tension</td></tr>\n<tr><td>Brasage</td><td>Brûlure, inhalation de fumées de flux</td><td>Support de fer, aspiration à la source, lavage des mains</td></tr>\n<tr><td>Raccordement et test de fibre optique</td><td>Lésion oculaire par rayonnement laser, éclats de verre</td><td>Ne jamais regarder une fibre, lunettes si prescrites, récupération des chutes</td></tr>\n<tr><td>Passage de câbles en faux plafond</td><td>Chute de hauteur, coupure, contact avec des conducteurs</td><td>Plateforme individuelle roulante, gants, repérage des réseaux existants</td></tr>\n<tr><td>Installation d'équipements en baie</td><td>Manutention, écrasement, basculement de la baie</td><td>Montage à deux, équipements lourds en bas, baie fixée ou lestée</td></tr>\n<tr><td>Intervention sur onduleur</td><td>Tension présente même secteur coupé, batteries (risque électrique et chimique)</td><td>Procédure constructeur, habilitation, EPI</td></tr>\n<tr><td>Travail prolongé sur écran</td><td>Fatigue visuelle, troubles musculosquelettiques</td><td>Poste réglé, pauses, alternance des tâches</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les risques sont évalués par l'employeur dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP). Avant chaque intervention, le technicien complète cette analyse générale par une analyse de la situation réelle : lieu, état de l'installation, présence d'autres intervenants.</div>"
      },
      {
       "titre": "Intervenir chez un client",
       "contenu": "\n<p>Lorsqu'une entreprise intervient dans les locaux d'une autre, les risques s'additionnent : ceux de l'entreprise intervenante, ceux du site et ceux créés par la présence simultanée des deux. Le Code du travail impose une coordination entre l'<strong>entreprise utilisatrice</strong> (le client) et l'<strong>entreprise extérieure</strong> : inspection commune préalable des lieux et, dans les cas prévus par la réglementation (durée importante ou travaux dangereux), un <strong>plan de prévention</strong> écrit qui recense les risques d'interférence et les mesures retenues.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> préparer une intervention sur le réseau d'un site client.<br>1. Lire l'ordre d'intervention : travaux demandés, lieu, contact, horaires possibles.<br>2. Vérifier les documents : plan de prévention ou consignes du site, autorisation d'accès aux locaux techniques, accès informatiques nécessaires.<br>3. Identifier l'impact sur le client : quels services seront interrompus, combien de temps ; fixer avec lui un créneau (souvent hors des heures d'activité).<br>4. Préparer le matériel : équipements configurés et testés en atelier, sauvegarde des configurations existantes, outillage, appareils de mesure, EPI.<br>5. Prévoir le retour arrière : si la nouvelle configuration ne fonctionne pas, comment revenir à l'état initial dans le délai prévu.<br>6. À l'arrivée, se présenter, rappeler le déroulé, et à la fin faire constater le bon fonctionnement et signer le bon d'intervention.</div>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un hôpital, une usine ou un centre de données, l'accès aux locaux techniques est contrôlé : badge nominatif, accompagnement, registre des entrées. Une coupure réseau non annoncée peut y avoir des conséquences graves. Le technicien n'agit qu'après l'accord explicite du responsable du site, même pour une opération qui lui paraît anodine.</div>"
      },
      {
       "titre": "Habilitation électrique et AIPR",
       "contenu": "\n<p>L'<strong>habilitation électrique</strong>, définie par la norme NF C 18-510, est la reconnaissance par l'employeur de la capacité d'une personne à accomplir en sécurité des tâches précises vis-à-vis du risque électrique. Elle est délivrée après une formation et matérialisée par un titre d'habilitation signé. Elle est désignée par un symbole : par exemple <strong>B0</strong> (travaux d'ordre non électrique en basse tension), <strong>BS</strong> (intervention élémentaire : remplacement d'un fusible, d'une prise), <strong>BR</strong> (intervention générale de dépannage et de mise en service en basse tension), <strong>BE Mesurage</strong> ou <strong>BE Vérification</strong> (opérations spécifiques d'essai, de mesure ou de vérification). Le niveau requis dépend des tâches confiées, pas du diplôme.</p>\n<p>L'<strong>AIPR</strong> (autorisation d'intervention à proximité des réseaux) est délivrée par l'employeur aux personnes qui interviennent à proximité des réseaux enterrés ou aériens (électricité, gaz, eau, télécommunications) lors de travaux : ouverture de tranchées, tirage de câbles en fourreaux, pose d'antennes. Elle s'appuie sur un examen ou sur un diplôme reconnu, comporte trois niveaux (concepteur, encadrant, opérateur) et doit être renouvelée périodiquement (validité à vérifier dans la réglementation en vigueur). Le bac pro CIEL prépare à l'AIPR de niveau opérateur.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un titre d'habilitation n'autorise que les opérations qui y sont inscrites, dans le domaine de tension indiqué. Un technicien habilité BR pour le dépannage en basse tension n'est pas autorisé à intervenir dans une armoire haute tension, ni à réaliser des travaux hors tension sur une installation qu'il n'a pas consignée lui-même ou fait consigner par une personne habilitée.</div>"
      },
      {
       "titre": "Sécurité laser et fibre optique",
       "contenu": "\n<p>Les émetteurs utilisés dans les transmissions optiques sont des lasers ou des diodes dont le rayonnement est souvent <strong>invisible</strong> (850 nm, 1 310 nm, 1 550 nm). Ils sont classés selon la norme NF EN 60825-1 du moins dangereux (classe 1) au plus dangereux (classe 4), en passant par les classes 1M, 2, 2M, 3R et 3B. La classe est indiquée sur l'étiquette des équipements et des appareils de mesure.</p>\n<ul>\n<li>Ne jamais regarder l'extrémité d'une fibre, d'un connecteur ou d'un port optique, à l'œil nu ou avec une loupe ordinaire.</li>\n<li>Utiliser un microscope d'inspection conçu pour cet usage, de préférence à écran, et vérifier l'absence de signal avec un photomètre.</li>\n<li>Obturer les connecteurs et ports non utilisés avec leurs bouchons, qui protègent aussi de la poussière.</li>\n<li>Récupérer les chutes de fibre dans un récipient fermé dédié : une chute peut pénétrer la peau ou l'œil et ne se voit pas à la radiographie.</li>\n<li>Ne pas manger ni boire sur le poste de raccordement.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une fibre « éteinte » n'existe pas tant qu'on ne l'a pas vérifié. Le réflexe est le même que pour l'électricité : on considère la liaison active jusqu'à preuve du contraire.</div>"
      },
      {
       "titre": "Travail en hauteur et manutention",
       "contenu": "\n<p>Le passage de câbles, la pose de points d'accès Wi-Fi ou de caméras se font souvent en hauteur. Les chutes de hauteur, y compris de faible hauteur, sont une cause majeure d'accidents graves du travail.</p>\n<ul>\n<li>L'échelle et l'escabeau ne sont pas des postes de travail : la réglementation n'en admet l'usage qu'en cas d'impossibilité technique de recourir à un équipement de protection collective, ou pour des travaux de courte durée et sans risque particulier.</li>\n<li>On privilégie la <strong>plateforme individuelle roulante</strong> (PIR) ou l'échafaudage roulant, avec garde-corps, roues bloquées, sur sol stable.</li>\n<li>L'utilisation d'une nacelle élévatrice exige une formation et une autorisation de conduite délivrée par l'employeur.</li>\n<li>Le balisage au sol protège les personnes qui passent sous la zone de travail de la chute d'outils.</li>\n</ul>\n<p>Pour la <strong>manutention</strong>, un serveur ou un onduleur peut peser plusieurs dizaines de kilogrammes : on le manipule à deux, avec les rails prévus, en commençant par le bas de la baie pour garder un centre de gravité bas. Une baie non fixée au sol bascule lorsqu'on sort un équipement lourd placé en haut sur ses rails.</p>\n<p>À la fin de toute intervention, le poste de travail et le site sont remis en état : dalles de faux plafond reposées, trappes et baies refermées, chutes de câbles, emballages et déchets évacués selon leur filière, outillage et appareils de mesure comptés et rangés. Les anomalies constatées pendant l'intervention (prise abîmée, baie surchargée, ventilation obstruée) sont signalées par écrit au client, même si elles ne faisaient pas partie de la demande.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans un faux plafond, des câbles électriques, des luminaires et des canalisations côtoient le chemin de câbles réseau. Avant de percer ou de tirer un câble, on repère les réseaux existants et l'on ne retire jamais un câble dont on ignore l'usage.</div>"
      }
     ],
     "points_cles": [
      "Les risques spécifiques du technicien CIEL : électrique, laser, chute de hauteur, manutention, fumées de brasage, écran.",
      "Le DUERP évalue les risques ; une analyse sur place complète chaque intervention.",
      "Chez un client, la coordination entre entreprises peut imposer un plan de prévention écrit.",
      "Une intervention se prépare : créneau, impact, sauvegarde des configurations, retour arrière.",
      "L'habilitation électrique (NF C 18-510) est délivrée par l'employeur pour des opérations précises.",
      "L'AIPR est exigée pour travailler à proximité des réseaux ; le bac pro CIEL prépare au niveau opérateur.",
      "Le rayonnement optique est souvent invisible : on ne regarde jamais une fibre ou un port optique.",
      "L'échelle n'est pas un poste de travail ; on privilégie la plateforme individuelle roulante.",
      "Les équipements lourds se montent à deux, en bas de baie, baie fixée."
     ],
     "lexique": [
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels établi par l'employeur."
      },
      {
       "terme": "Plan de prévention",
       "def": "Document de coordination des mesures de sécurité entre entreprise utilisatrice et entreprise extérieure."
      },
      {
       "terme": "Retour arrière",
       "def": "Procédure prévue pour revenir à l'état initial si une modification échoue."
      },
      {
       "terme": "Habilitation électrique",
       "def": "Reconnaissance par l'employeur de l'aptitude d'une personne à effectuer des opérations électriques définies."
      },
      {
       "terme": "AIPR",
       "def": "Autorisation d'intervention à proximité des réseaux, délivrée par l'employeur."
      },
      {
       "terme": "Consignation",
       "def": "Ensemble des opérations qui mettent et maintiennent une installation en sécurité hors tension."
      },
      {
       "terme": "Classe laser",
       "def": "Catégorie de dangerosité d'une source laser selon la norme NF EN 60825-1."
      },
      {
       "terme": "Microscope d'inspection",
       "def": "Appareil permettant de contrôler la propreté d'un connecteur optique sans exposer l'œil."
      },
      {
       "terme": "PIR",
       "def": "Plateforme individuelle roulante munie de garde-corps pour le travail en hauteur."
      },
      {
       "terme": "Bon d'intervention",
       "def": "Document signé par le client attestant l'intervention réalisée et son résultat."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Documents techniques des produits électroniques",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bciel-analyse-schema-structurel",
     "titre": "Lire un schéma fonctionnel, un schéma structurel et une nomenclature",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Identifier la structure et les conventions d'un dossier de carte électronique : synoptique, schéma structurel, nomenclature.",
      "Découper un schéma structurel en fonctions et suivre le chemin d'un signal.",
      "Relier les repères topologiques du schéma à la nomenclature et à la carte.",
      "Repérer les points de mesure utiles pour un test ou un dépannage.",
      "Rédiger une analyse argumentée d'un schéma."
     ],
     "sections": [
      {
       "titre": "Les documents du dossier d'une carte",
       "contenu": "\n<p>Le <strong>dossier technique</strong> d'un produit électronique contient plusieurs documents complémentaires, qui décrivent la même carte à des niveaux de détail différents. Savoir passer de l'un à l'autre est la compétence de base pour tester, réparer ou modifier une carte.</p>\n<table>\n<thead><tr><th>Document</th><th>Ce qu'il montre</th><th>Question à laquelle il répond</th></tr></thead>\n<tbody>\n<tr><td>Schéma fonctionnel (synoptique)</td><td>Des blocs-fonctions reliés par des flèches (énergie, information)</td><td>Que fait la carte et comment les fonctions s'enchaînent-elles ?</td></tr>\n<tr><td>Schéma structurel</td><td>Tous les composants avec leurs symboles, leurs repères, leurs valeurs et leurs liaisons</td><td>Comment chaque fonction est-elle réalisée ?</td></tr>\n<tr><td>Nomenclature (BOM)</td><td>La liste des composants : repère, quantité, valeur, boîtier, référence fabricant</td><td>Quels composants commander et monter ?</td></tr>\n<tr><td>Plan d'implantation</td><td>La position de chaque composant sur la carte, avec sa sérigraphie</td><td>Où se trouve le composant sur la carte ?</td></tr>\n</tbody>\n</table>\n<p>Le schéma structurel se lit avec quelques conventions : les liaisons qui portent le même <strong>nom de net</strong> (étiquette) sont reliées même si aucun trait ne les joint ; un point noir à un croisement indique une connexion, un croisement sans point n'en est pas une ; les symboles d'alimentation (+3V3, +5V, GND) identiques sont tous reliés entre eux. Les schémas importants sont découpés en plusieurs <strong>feuilles</strong> reliées par des étiquettes hiérarchiques.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le <strong>repère topologique</strong> fait le lien entre tous les documents. Sa première lettre indique la famille : R résistance, C condensateur, L inductance, D diode, Q transistor, U circuit intégré, J ou X connecteur, K relais, F fusible, Y quartz, SW interrupteur ou bouton.</div>"
      },
      {
       "titre": "La méthode de lecture pas à pas",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un schéma structurel.<br>1. <strong>Identifier le document</strong> : titre, référence de la carte, indice de révision, date, nombre de feuilles. Vérifier que la révision correspond à la carte réelle (la sérigraphie porte souvent l'indice).<br>2. <strong>Repérer les entrées et sorties</strong> : connecteurs (J, X), alimentation, capteurs, actionneurs, liaisons de communication.<br>3. <strong>Repérer les alimentations</strong> : d'où vient l'énergie, quels régulateurs produisent quelles tensions, quels composants elles alimentent.<br>4. <strong>Découper en fonctions</strong> : entourer mentalement les groupes de composants correspondant à chaque bloc du synoptique (alimenter, acquérir, traiter, communiquer, commander).<br>5. <strong>Suivre le chemin du signal</strong> étudié, du capteur au microcontrôleur ou du microcontrôleur à l'actionneur, en notant les composants traversés.<br>6. <strong>Exploiter la nomenclature</strong> pour connaître la référence exacte des composants clés, puis consulter leur fiche technique.<br>7. <strong>Choisir les points de mesure</strong> et les valeurs attendues : tensions d'alimentation, niveaux logiques, formes de signaux.</div>\n<p>Pour chaque fonction, l'analyse doit pouvoir répondre à trois questions : quelle est l'entrée, quelle est la sortie, quelle est la relation entre les deux (calcul ou description).</p>"
      },
      {
       "titre": "Les pièges classiques",
       "contenu": "\n<ul>\n<li>Lire un schéma d'une <strong>autre révision</strong> que la carte en main : un composant ajouté ou supprimé fausse tout le diagnostic.</li>\n<li>Oublier les <strong>connexions par étiquette</strong> : deux points éloignés sur la feuille, voire sur deux feuilles différentes, sont reliés par le même nom de net.</li>\n<li>Confondre les <strong>masses</strong> : certaines cartes distinguent masse analogique, masse numérique, masse de puissance et terre de protection, reliées en un seul point.</li>\n<li>Ne pas repérer la mention <strong>NC</strong> ou <strong>DNP</strong> (do not populate, non monté) : le composant figure au schéma mais n'est pas monté sur la carte.</li>\n<li>Prendre une valeur du schéma pour la référence exacte : « 10 µF » ne dit rien de la tension de service ni du type ; c'est la nomenclature qui fait foi.</li>\n<li>Négliger le <strong>brochage</strong> : le numéro de broche indiqué sur le symbole d'un circuit intégré correspond à un boîtier précis ; un autre boîtier du même composant a un autre brochage.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le symbole d'une diode ou d'un transistor sur un schéma n'indique pas l'orientation physique sur la carte. Pour mesurer ou remplacer, il faut croiser le schéma, le plan d'implantation et la fiche technique du boîtier.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>On étudie la carte « Capteur de qualité d'air CQA-2 », révision B, qui mesure la concentration de CO<sub>2</sub> d'une salle et transmet la valeur en Wi-Fi. Le dossier fournit le synoptique et un extrait du schéma structurel, décrit ici en texte, ainsi que la nomenclature partielle.</p>\n<p><strong>Synoptique</strong> : Alimenter (entrée USB 5 V) → Réguler 3,3 V → Traiter et communiquer (module Wi-Fi à microcontrôleur intégré) ; Acquérir CO<sub>2</sub> (capteur numérique) → Traiter ; Traiter → Signaler (LED tricolore) ; Traiter → Alerter (buzzer).</p>\n<p><strong>Schéma structurel (extrait décrit)</strong> :</p>\n<ul>\n<li>J1 connecteur USB-C : broche VBUS vers F1 (fusible réarmable 500 mA), puis D1 (diode Schottky, cathode vers le net +5V), puis C1 (10 µF) vers GND.</li>\n<li>U1 régulateur LDO 3,3 V : entrée sur +5V, sortie sur le net +3V3, C2 (10 µF) en sortie vers GND.</li>\n<li>U2 module Wi-Fi : broches 3V3 et GND alimentées ; broche IO21 sur le net SDA, IO22 sur le net SCL ; IO25 vers R5 (330 Ω) puis anode de la LED verte D3 ; IO26 vers R6 (1 kΩ) puis base de Q1.</li>\n<li>U3 capteur de CO<sub>2</sub> : alimenté en +5V ; broches SDA et SCL sur les nets du même nom ; R3 et R4 (4,7 kΩ) relient SDA et SCL au +3V3.</li>\n<li>Q1 transistor NPN : émetteur à GND, collecteur relié au buzzer BZ1, dont l'autre borne est sur +5V ; D2 en parallèle sur BZ1, cathode côté +5V.</li>\n</ul>\n<table>\n<thead><tr><th>Repère</th><th>Qté</th><th>Désignation</th><th>Boîtier</th><th>Remarque</th></tr></thead>\n<tbody>\n<tr><td>U1</td><td>1</td><td>Régulateur LDO 3,3 V, 600 mA, chute 0,3 V typ.</td><td>SOT-223</td><td></td></tr>\n<tr><td>U3</td><td>1</td><td>Capteur CO<sub>2</sub> numérique I2C, alimentation 4,5–5,5 V, niveaux logiques compatibles 3,3 V</td><td>Module</td><td></td></tr>\n<tr><td>R3, R4</td><td>2</td><td>4,7 kΩ 1 % 0,1 W</td><td>0603</td><td></td></tr>\n<tr><td>R7</td><td>1</td><td>10 kΩ</td><td>0603</td><td>DNP</td></tr>\n<tr><td>F1</td><td>1</td><td>Fusible réarmable 500 mA</td><td>1206</td><td></td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1. Identification.</strong> Le document concerne la carte CQA-2 en révision B. Avant toute mesure, on vérifie que la sérigraphie de la carte porte bien l'indice B.</p>\n<p><strong>2. Chaîne d'alimentation.</strong> L'énergie arrive par J1 (USB, 5 V). F1 protège contre les surintensités et D1 contre une inversion ou un retour de courant ; à cause du seuil de la diode Schottky, le net +5V vaut environ 5 – 0,3 = 4,7 V. U1 produit le +3V3 pour le module Wi-Fi U2 et les résistances de tirage ; U3 et le buzzer sont alimentés directement en +5V. Remarque : la nomenclature indique que U3 accepte 4,5 à 5,5 V ; avec un +5V de 4,7 V et une alimentation USB un peu faible (4,75 V minimum selon la norme USB), on reste dans la plage, mais avec peu de marge. C'est un point à surveiller lors des essais.</p>\n<p><strong>3. Liaison capteur.</strong> U3 dialogue avec U2 par un bus I2C (nets SDA et SCL, broches IO21 et IO22). Les résistances de tirage R3 et R4 sont reliées au +3V3, donc les niveaux hauts du bus sont à 3,3 V : c'est compatible avec U2, et la nomenclature confirme que U3 accepte ces niveaux. Si les pull-up avaient été reliées au +5V, le module Wi-Fi aurait reçu 5 V sur ses entrées.</p>\n<p><strong>4. Sorties.</strong> La LED D3 est commandée directement par IO25 à travers R5 : avec une LED verte de tension directe d'environ 2 V, le courant vaut (3,3 – 2) / 330 ≈ 3,9 mA, acceptable pour une broche de sortie. Le buzzer, alimenté en 5 V, est commandé par Q1 en commutation ; R6 limite le courant de base à environ (3,3 – 0,7) / 1 000 = 2,6 mA. D2 est une diode de roue libre qui protège Q1 si le buzzer est de type électromagnétique.</p>\n<p><strong>5. Composant non monté.</strong> R7 est marquée DNP : elle n'est pas montée, il ne faut pas la considérer comme manquante lors du contrôle visuel.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'analyse se conclut par une liste de points de mesure exploitable par un collègue : TP1 +5V attendu 4,6 à 4,9 V ; TP2 +3V3 attendu 3,23 à 3,37 V (± 2 %) ; SDA et SCL au repos à 3,3 V ; trames I2C visibles à l'oscilloscope ou à l'analyseur logique lors d'une mesure ; IO26 à 3,3 V quand l'alarme est active, collecteur de Q1 proche de 0 V.</div>\n<p><strong>6. Conclusion.</strong> Le schéma est cohérent avec le synoptique : chaque bloc fonctionnel est identifié. Les deux points de vigilance relevés (marge d'alimentation du capteur, niveau des pull-up I2C) sont à vérifier en priorité lors des essais ou face à une panne de communication avec le capteur.</p>"
      }
     ],
     "points_cles": [
      "Synoptique, schéma structurel, nomenclature et plan d'implantation décrivent la même carte à des niveaux différents.",
      "Le repère topologique relie tous les documents ; sa lettre indique la famille du composant.",
      "Les nets de même nom sont reliés, même sans trait ; un point marque une connexion.",
      "On vérifie d'abord la révision du schéma par rapport à la carte.",
      "L'analyse suit l'ordre : entrées-sorties, alimentations, fonctions, chemin du signal, composants clés, points de mesure.",
      "La mention DNP ou NC signale un composant non monté.",
      "La nomenclature, pas le schéma, donne la référence exacte d'un composant.",
      "Une analyse se conclut par des points de mesure chiffrés et des points de vigilance."
     ],
     "lexique": [
      {
       "terme": "Synoptique",
       "def": "Schéma par blocs représentant les fonctions d'un système et leurs échanges."
      },
      {
       "terme": "Net",
       "def": "Ensemble de points électriquement reliés, désigné par un nom sur le schéma."
      },
      {
       "terme": "Nomenclature (BOM)",
       "def": "Liste des composants d'une carte avec repères, quantités, valeurs et références."
      },
      {
       "terme": "Plan d'implantation",
       "def": "Représentation de la position des composants sur le circuit imprimé."
      },
      {
       "terme": "Indice de révision",
       "def": "Lettre ou numéro identifiant la version d'un document ou d'une carte."
      },
      {
       "terme": "DNP",
       "def": "Mention indiquant qu'un composant prévu au schéma n'est pas monté."
      },
      {
       "terme": "Point de test",
       "def": "Pastille ou point de la carte prévu pour réaliser une mesure."
      },
      {
       "terme": "Brochage",
       "def": "Correspondance entre les numéros de broches d'un composant et leurs fonctions."
      }
     ]
    },
    {
     "id": "bciel-analyse-fiche-technique",
     "titre": "Exploiter une fiche technique de composant ou de module en anglais",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Repérer la structure type d'une datasheet et y trouver rapidement une information.",
      "Distinguer valeurs limites absolues, conditions recommandées et caractéristiques électriques.",
      "Comprendre le vocabulaire technique anglais courant des fiches techniques.",
      "Vérifier par le calcul l'adéquation d'un composant à une application.",
      "Rédiger une justification de choix de composant."
     ],
     "sections": [
      {
       "titre": "Structure d'une datasheet",
       "contenu": "\n<p>La <strong>fiche technique</strong> (datasheet) est le document de référence publié par le fabricant d'un composant ou d'un module. Elle est presque toujours rédigée en anglais et suit une organisation assez constante, qu'il faut connaître pour aller directement à l'information utile.</p>\n<table>\n<thead><tr><th>Rubrique (anglais)</th><th>Traduction</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Features</td><td>Caractéristiques principales</td><td>Liste résumée des points forts, en première page</td></tr>\n<tr><td>Applications</td><td>Applications</td><td>Usages visés par le fabricant</td></tr>\n<tr><td>Description</td><td>Description</td><td>Présentation générale du composant</td></tr>\n<tr><td>Pin configuration / Pin description</td><td>Brochage</td><td>Dessin du boîtier vu de dessus et rôle de chaque broche</td></tr>\n<tr><td>Absolute maximum ratings</td><td>Valeurs limites absolues</td><td>Valeurs à ne jamais dépasser, même brièvement, sous peine de destruction</td></tr>\n<tr><td>Recommended operating conditions</td><td>Conditions de fonctionnement recommandées</td><td>Plage dans laquelle le fonctionnement est garanti</td></tr>\n<tr><td>Electrical characteristics</td><td>Caractéristiques électriques</td><td>Valeurs min, typ, max mesurées dans des conditions précisées (test conditions)</td></tr>\n<tr><td>Typical characteristics</td><td>Courbes caractéristiques</td><td>Courbes montrant l'évolution des grandeurs (température, courant…)</td></tr>\n<tr><td>Application information</td><td>Informations d'application</td><td>Schéma d'utilisation conseillé, calculs, conseils de routage</td></tr>\n<tr><td>Package information / Ordering information</td><td>Boîtier / Références de commande</td><td>Dimensions, empreinte, suffixes de référence</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les <strong>absolute maximum ratings</strong> ne sont pas des valeurs de fonctionnement. Un composant utilisé à sa limite absolue n'est pas garanti fonctionner ; il est seulement garanti ne pas être détruit. On dimensionne toujours à partir des conditions recommandées et des valeurs min ou max des caractéristiques électriques, jamais des valeurs typiques seules.</div>"
      },
      {
       "titre": "Le vocabulaire à connaître",
       "contenu": "\n<table>\n<thead><tr><th>Anglais</th><th>Français</th></tr></thead>\n<tbody>\n<tr><td>Supply voltage (V<sub>CC</sub>, V<sub>DD</sub>)</td><td>Tension d'alimentation</td></tr>\n<tr><td>Input / output voltage</td><td>Tension d'entrée / de sortie</td></tr>\n<tr><td>Drain-source voltage, gate threshold voltage</td><td>Tension drain-source, tension de seuil de grille</td></tr>\n<tr><td>Continuous drain current, pulsed current</td><td>Courant de drain permanent, courant impulsionnel</td></tr>\n<tr><td>On-resistance</td><td>Résistance à l'état passant</td></tr>\n<tr><td>Power dissipation</td><td>Puissance dissipée</td></tr>\n<tr><td>Junction temperature, ambient temperature</td><td>Température de jonction, température ambiante</td></tr>\n<tr><td>Thermal resistance junction-to-ambient (R<sub>θJA</sub>)</td><td>Résistance thermique jonction-ambiance</td></tr>\n<tr><td>Quiescent current, supply current, sleep current</td><td>Courant de repos, courant d'alimentation, courant en veille</td></tr>\n<tr><td>Accuracy, resolution, range</td><td>Précision, résolution, étendue de mesure</td></tr>\n<tr><td>Rising edge, falling edge, duty cycle</td><td>Front montant, front descendant, rapport cyclique</td></tr>\n<tr><td>Pull-up resistor</td><td>Résistance de tirage</td></tr>\n<tr><td>Shall / should / may</td><td>Doit (obligatoire) / devrait (recommandé) / peut (facultatif)</td></tr>\n</tbody>\n</table>\n<p>Attention aussi aux notations : en anglais, le séparateur décimal est le point (3.3 V) et le séparateur de milliers la virgule (1,000 µF signifie mille microfarads). Les valeurs « typ » sont des valeurs moyennes observées, sans garantie.</p>"
      },
      {
       "titre": "Méthode de lecture et pièges",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier qu'un composant convient à une application.<br>1. Écrire d'abord le <strong>besoin</strong> chiffré : tensions, courants, température ambiante, niveaux logiques, contraintes de boîtier.<br>2. Lire la première page (features) pour éliminer rapidement les composants inadaptés.<br>3. Vérifier les <strong>absolute maximum ratings</strong> avec une marge (souvent 20 à 50 % sur les tensions).<br>4. Vérifier que l'application est dans les <strong>recommended operating conditions</strong>.<br>5. Dans les <strong>electrical characteristics</strong>, relever la valeur la plus défavorable (min ou max) dans des conditions de test proches de l'application.<br>6. Faire les <strong>calculs</strong> : puissance dissipée, échauffement, autonomie, niveaux logiques.<br>7. Lire les notes de bas de tableau et la section « application information » : elles contiennent souvent une condition décisive.<br>8. Conclure par une phrase de justification qui cite les valeurs utilisées.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les valeurs les plus flatteuses de la première page sont souvent données dans des conditions idéales (température de 25 °C, impulsion courte, dissipateur infini). Le courant de drain affiché en gros caractères d'un MOSFET peut être limité, en pratique, par l'échauffement de son petit boîtier sur la carte. Toujours lire les conditions de test et les notes associées.</div>\n<p>Autres pièges fréquents : confondre la vue de dessus (top view) et la vue de dessous (bottom view) du brochage ; utiliser une fiche d'une autre variante de la même famille (suffixe de référence différent) ; ignorer qu'une caractéristique varie fortement avec la température.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Un objet connecté alimenté en 12 V doit piloter, depuis une sortie 3,3 V de microcontrôleur, un ruban de LED de 12 V consommant 3,0 A, en MLI à 1 kHz. Température ambiante maximale dans le boîtier : 50 °C. On étudie le MOSFET canal N fictif « NX-30L », dont voici un extrait de fiche technique (composant fictif, valeurs construites pour l'exemple mais réalistes).</p>\n<table>\n<thead><tr><th>Absolute maximum ratings (T<sub>A</sub> = 25 °C)</th><th>Symbol</th><th>Value</th><th>Unit</th></tr></thead>\n<tbody>\n<tr><td>Drain-source voltage</td><td>V<sub>DS</sub></td><td>30</td><td>V</td></tr>\n<tr><td>Gate-source voltage</td><td>V<sub>GS</sub></td><td>± 20</td><td>V</td></tr>\n<tr><td>Continuous drain current (note 1)</td><td>I<sub>D</sub></td><td>12</td><td>A</td></tr>\n<tr><td>Power dissipation (note 1)</td><td>P<sub>D</sub></td><td>2.5</td><td>W</td></tr>\n<tr><td>Junction temperature</td><td>T<sub>J</sub></td><td>150</td><td>°C</td></tr>\n</tbody>\n</table>\n<table>\n<thead><tr><th>Electrical characteristics (T<sub>J</sub> = 25 °C)</th><th>Test conditions</th><th>Min</th><th>Typ</th><th>Max</th><th>Unit</th></tr></thead>\n<tbody>\n<tr><td>Gate threshold voltage V<sub>GS(th)</sub></td><td>I<sub>D</sub> = 250 µA</td><td>1.0</td><td>1.5</td><td>2.2</td><td>V</td></tr>\n<tr><td>On-resistance R<sub>DS(on)</sub></td><td>V<sub>GS</sub> = 10 V, I<sub>D</sub> = 6 A</td><td>—</td><td>14</td><td>18</td><td>mΩ</td></tr>\n<tr><td>On-resistance R<sub>DS(on)</sub></td><td>V<sub>GS</sub> = 4.5 V, I<sub>D</sub> = 5 A</td><td>—</td><td>20</td><td>26</td><td>mΩ</td></tr>\n<tr><td>On-resistance R<sub>DS(on)</sub></td><td>V<sub>GS</sub> = 2.5 V, I<sub>D</sub> = 3 A</td><td>—</td><td>32</td><td>45</td><td>mΩ</td></tr>\n<tr><td>Thermal resistance junction-to-ambient R<sub>θJA</sub></td><td>Note 1</td><td>—</td><td>—</td><td>50</td><td>°C/W</td></tr>\n</tbody>\n</table>\n<p>Note 1 : « Mounted on a 1 inch² FR-4 board with 2 oz copper » (monté sur une carte FR-4 avec une surface de cuivre de 1 pouce carré, soit environ 6,5 cm², en cuivre de 70 µm).</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1. Tension.</strong> Le MOSFET bloque 12 V ; sa limite V<sub>DS</sub> est de 30 V, soit une marge de 150 %. La commande de grille (3,3 V) est très inférieure à ± 20 V. Les limites absolues sont respectées.</p>\n<p><strong>2. Commande en 3,3 V.</strong> Le seuil V<sub>GS(th)</sub> peut atteindre 2,2 V : c'est la tension à laquelle le transistor commence à peine à conduire (250 µA), pas celle où il est pleinement passant. La fiche garantit une R<sub>DS(on)</sub> à 2,5 V et à 4,5 V : avec 3,3 V, on se trouve entre les deux, on retient donc par prudence la valeur garantie à 2,5 V, soit 45 mΩ maximum. Le composant est bien de type « logic level ».</p>\n<p><strong>3. Pertes par conduction.</strong> En MLI, le cas le plus défavorable est un rapport cyclique de 100 % : P = R<sub>DS(on)</sub> × I<sup>2</sup> = 0,045 × 3,0<sup>2</sup> ≈ 0,41 W. Mais R<sub>DS(on)</sub> augmente avec la température de jonction (les courbes « typical characteristics » montrent souvent une hausse de 30 à 50 % vers 100 °C). En majorant de 50 % : P ≈ 0,61 W. Les pertes de commutation à 1 kHz sont faibles et négligées ici.</p>\n<p><strong>4. Échauffement.</strong> Élévation de température : ΔT = P × R<sub>θJA</sub> = 0,61 × 50 ≈ 31 °C. Température de jonction : 50 + 31 = 81 °C, nettement inférieure à 150 °C. Cette conclusion n'est valable que si la carte respecte la note 1 : une surface de cuivre d'environ 6,5 cm² sous le drain. Avec une piste fine, R<sub>θJA</sub> serait beaucoup plus élevée.</p>\n<p><strong>5. Courant.</strong> Les 12 A affichés concernent les conditions de la note 1 à 25 °C ; nos 3 A en sont loin. Le courant n'est pas le critère limitant.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la justification attendue dans un dossier tient en quelques lignes chiffrées : « Le NX-30L convient : V<sub>DS</sub> max 30 V pour 12 V appliqués ; R<sub>DS(on)</sub> garantie 45 mΩ à V<sub>GS</sub> = 2,5 V, donc compatible avec la commande 3,3 V ; pertes estimées 0,6 W à chaud ; T<sub>J</sub> estimée 81 °C pour 50 °C ambiants, sous réserve d'une surface de cuivre de 6,5 cm² sur le drain, à reporter dans les consignes de routage. »</div>\n<p><strong>6. Points restants.</strong> Prévoir une résistance de grille (quelques dizaines à quelques centaines d'ohms) et une résistance de rappel grille-source (par exemple 100 kΩ) pour bloquer le transistor pendant le démarrage du microcontrôleur, quand sa broche est encore en haute impédance. Vérifier enfin le brochage du boîtier dans la rubrique « pin configuration ».</p>"
      }
     ],
     "points_cles": [
      "Une datasheet suit une structure type : features, brochage, valeurs limites, conditions recommandées, caractéristiques, courbes, application, boîtier.",
      "Les absolute maximum ratings garantissent la non-destruction, pas le fonctionnement.",
      "On dimensionne avec les valeurs min ou max garanties, pas avec les valeurs typiques.",
      "Les conditions de test et les notes de bas de tableau conditionnent la validité d'une valeur.",
      "Le seuil VGS(th) n'est pas la tension de pleine conduction : on lit RDS(on) garantie à la tension de commande disponible.",
      "Pertes par conduction P = RDS(on) × I², majorées pour tenir compte de la température.",
      "Température de jonction TJ = TA + P × RθJA, valable dans les conditions de montage de la note.",
      "Une justification de choix cite les valeurs utilisées et les réserves."
     ],
     "lexique": [
      {
       "terme": "Datasheet",
       "def": "Fiche technique d'un composant publiée par son fabricant."
      },
      {
       "terme": "Absolute maximum ratings",
       "def": "Valeurs limites à ne jamais dépasser sous peine de destruction."
      },
      {
       "terme": "Recommended operating conditions",
       "def": "Plage de fonctionnement dans laquelle le fabricant garantit les performances."
      },
      {
       "terme": "Test conditions",
       "def": "Conditions de mesure dans lesquelles une caractéristique est garantie."
      },
      {
       "terme": "Logic level",
       "def": "Se dit d'un MOSFET pleinement conducteur avec une tension de commande de niveau logique."
      },
      {
       "terme": "Résistance thermique",
       "def": "Élévation de température par watt dissipé, en °C/W."
      },
      {
       "terme": "Température de jonction",
       "def": "Température de la puce à l'intérieur du boîtier d'un semi-conducteur."
      },
      {
       "terme": "Top view",
       "def": "Vue de dessus du boîtier, utilisée pour représenter le brochage."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Documents des réseaux, des projets et de la sécurité",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "bciel-analyse-documents-reseau",
     "titre": "Analyser un schéma de réseau, un plan d'adressage et un plan de brassage",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Distinguer schéma physique et schéma logique d'un réseau et en connaître les conventions.",
      "Croiser schéma, plan d'adressage, plan de brassage et extrait de configuration.",
      "Détecter les incohérences entre documents et en prévoir les conséquences.",
      "Proposer des corrections argumentées et la mise à jour de la documentation.",
      "Rédiger une analyse structurée d'un dossier d'infrastructure."
     ],
     "sections": [
      {
       "titre": "Les documents d'une infrastructure réseau",
       "contenu": "\n<p>Un réseau d'entreprise est décrit par un ensemble de documents qui doivent rester cohérents entre eux. À l'épreuve comme en entreprise, on demande souvent de les exploiter ensemble pour préparer une installation, vérifier une configuration ou localiser une panne.</p>\n<table>\n<thead><tr><th>Document</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Schéma physique</td><td>Équipements réels, emplacement (baie, étage), câbles, ports, types de liaison (cuivre, fibre)</td></tr>\n<tr><td>Schéma logique</td><td>Réseaux IP, VLAN, routeurs et pare-feu, adresses des interfaces, flux autorisés</td></tr>\n<tr><td>Plan d'adressage</td><td>Pour chaque VLAN : sous-réseau, passerelle, étendue DHCP, adresses fixes attribuées</td></tr>\n<tr><td>Plan de brassage</td><td>Correspondance entre prises murales, ports de panneaux et ports de commutateurs, avec le VLAN de chaque port</td></tr>\n<tr><td>Extrait de configuration</td><td>Commandes ou captures d'écran de l'interface d'administration d'un équipement</td></tr>\n</tbody>\n</table>\n<p>Sur les schémas, des symboles conventionnels sont utilisés : le <strong>routeur</strong> est représenté par un cercle avec des flèches, le <strong>commutateur</strong> par un rectangle avec des flèches croisées, le <strong>pare-feu</strong> par un mur de briques, le <strong>point d'accès</strong> par un émetteur avec des ondes, internet par un nuage. Les traits pleins représentent les câbles, les traits pointillés souvent les liaisons radio ou les tunnels VPN ; la fibre est souvent tracée d'une couleur distincte. Une légende doit toujours accompagner le schéma.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le schéma physique répond à « où est branché quoi ? », le schéma logique à « qui peut parler à qui, et par où ? ». Une panne se localise souvent en passant de l'un à l'autre.</div>"
      },
      {
       "titre": "Méthode d'analyse croisée",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser un dossier réseau.<br>1. <strong>Identifier</strong> les documents : date, version, auteur. Repérer le plus récent en cas de contradiction.<br>2. <strong>Lire le schéma logique</strong> : lister les VLAN, leurs sous-réseaux et l'équipement qui assure le routage entre eux.<br>3. <strong>Vérifier le plan d'adressage</strong> sous-réseau par sous-réseau : la passerelle appartient-elle au sous-réseau ? L'étendue DHCP est-elle entièrement dans le sous-réseau, sans recouvrir les adresses fixes ? Le nombre d'adresses suffit-il ?<br>4. <strong>Vérifier le plan de brassage</strong> : chaque prise est-elle reliée à un port dont le VLAN correspond à l'équipement branché ? Les liaisons entre commutateurs sont-elles en mode agrégation avec les bons VLAN ?<br>5. <strong>Confronter avec la configuration</strong> réelle des équipements.<br>6. <strong>Lister les écarts</strong> dans un tableau : écart constaté, conséquence, correction proposée.<br>7. <strong>Conclure</strong> et prévoir la mise à jour des documents.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une documentation peut être fausse. Quand le plan et la configuration réelle divergent, c'est la configuration réelle qui détermine le comportement du réseau. On ne « corrige » pas un équipement pour qu'il ressemble au plan sans avoir compris pourquoi il en diffère : la modification était peut-être volontaire et non documentée.</div>"
      },
      {
       "titre": "Lire un extrait de configuration",
       "contenu": "\n<p>Les commutateurs et routeurs administrables se configurent souvent en <strong>ligne de commande</strong>. Même si la syntaxe varie d'un constructeur à l'autre, la configuration d'un port suit toujours la même logique : on sélectionne l'interface, puis on lui applique des paramètres. Un extrait typique, dans une syntaxe répandue, se lit ainsi :</p>\n<table>\n<thead><tr><th>Ligne de configuration</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>interface GigabitEthernet1/0/12</td><td>Sélection du port 12 du module 0 du commutateur 1 (port gigabit)</td></tr>\n<tr><td>description E1-012 bureau 12</td><td>Texte descriptif reprenant le repère de la prise</td></tr>\n<tr><td>switchport mode access</td><td>Port d'accès : un seul VLAN, sans étiquette</td></tr>\n<tr><td>switchport access vlan 10</td><td>Le port appartient au VLAN 10</td></tr>\n<tr><td>shutdown / no shutdown</td><td>Port désactivé / activé</td></tr>\n<tr><td>switchport mode trunk</td><td>Port d'agrégation transportant plusieurs VLAN étiquetés</td></tr>\n<tr><td>switchport trunk allowed vlan 10,20,99</td><td>Liste des VLAN autorisés sur l'agrégation</td></tr>\n</tbody>\n</table>\n<p>Les commandes d'affichage complètent la lecture : la liste des VLAN avec leurs ports, l'état de chaque interface (connectée ou non, vitesse, duplex, VLAN), la table des adresses MAC. Sur une interface web, les mêmes informations apparaissent sous forme de tableaux ; il faut alors repérer la colonne qui indique si le port est « tagged » (étiqueté) ou « untagged » (non étiqueté) pour chaque VLAN.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> avant toute modification, on enregistre une copie de la configuration en cours. Après la modification, on vérifie le résultat par une commande d'affichage, on teste, puis on sauvegarde la configuration pour qu'elle survive à un redémarrage.</div>"
      },
      {
       "titre": "Exemple commenté : le dossier",
       "contenu": "\n<p>Une PME de 40 personnes dispose d'un pare-feu qui route entre les VLAN, d'un commutateur cœur SW-CORE dans le local technique et d'un commutateur d'étage SW-E1. Le technicien reçoit un ticket : « L'imprimante du 1er étage n'est plus accessible depuis les postes administratifs, et le nouveau poste du bureau 12 n'a pas de réseau. »</p>\n<p><strong>Schéma logique (décrit)</strong> : pare-feu FW relié à internet ; interface interne de FW en agrégation vers SW-CORE avec les VLAN 10, 20 et 99 ; SW-CORE relié à SW-E1 par une liaison fibre (port 25 de chaque commutateur) en agrégation. Le pare-feu est la passerelle de chaque VLAN et le serveur DHCP.</p>\n<table>\n<thead><tr><th>VLAN</th><th>Nom</th><th>Sous-réseau</th><th>Passerelle</th><th>Étendue DHCP</th><th>Adresses fixes</th></tr></thead>\n<tbody>\n<tr><td>10</td><td>ADMIN</td><td>192.168.10.0/24</td><td>192.168.10.254</td><td>192.168.10.50 à .200</td><td>.20 à .49 (imprimantes, NAS)</td></tr>\n<tr><td>20</td><td>ATELIER</td><td>192.168.20.0/25</td><td>192.168.20.254</td><td>192.168.20.10 à .120</td><td>.2 à .9</td></tr>\n<tr><td>99</td><td>GESTION</td><td>192.168.99.0/24</td><td>192.168.99.254</td><td>aucune</td><td>.1 SW-CORE, .2 SW-E1</td></tr>\n</tbody>\n</table>\n<table>\n<thead><tr><th>Prise</th><th>Port SW-E1</th><th>VLAN du port (plan)</th><th>Équipement</th></tr></thead>\n<tbody>\n<tr><td>E1-010</td><td>Gi1/0/10</td><td>10 (accès)</td><td>Poste bureau 10</td></tr>\n<tr><td>E1-012</td><td>Gi1/0/12</td><td>10 (accès)</td><td>Nouveau poste bureau 12</td></tr>\n<tr><td>E1-021</td><td>Gi1/0/21</td><td>10 (accès)</td><td>Imprimante IMP-E1, 192.168.10.21</td></tr>\n<tr><td>Fibre</td><td>Gi1/0/25</td><td>Agrégation 10, 20, 99</td><td>Liaison vers SW-CORE</td></tr>\n</tbody>\n</table>\n<p><strong>Extrait de la configuration réelle de SW-E1</strong> (relevé par le technicien) : port Gi1/0/12 « shutdown » (désactivé) ; port Gi1/0/21 en accès VLAN 20 ; port Gi1/0/25 en agrégation, VLAN autorisés 10, 20, 99. L'imprimante, interrogée sur son panneau, affiche l'adresse 192.168.10.21, masque 255.255.255.0, passerelle 192.168.10.254.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1. Plan d'adressage.</strong> VLAN 10 : la passerelle .254 appartient bien à 192.168.10.0/24 ; l'étendue DHCP .50 à .200 ne recouvre pas les adresses fixes .20 à .49 ; 151 adresses dynamiques suffisent pour la PME. Conforme. VLAN 20 : le préfixe /25 limite le sous-réseau à 192.168.20.0 à 192.168.20.127 (diffusion .127). La passerelle annoncée, 192.168.20.254, est <strong>hors du sous-réseau</strong> : c'est une erreur de documentation ou de configuration. Il faut vérifier sur le pare-feu l'adresse réelle de son interface VLAN 20 ; si elle est en .254/24, le masque du plan est faux ; sinon, la passerelle à documenter est par exemple 192.168.20.126. VLAN 99 : conforme.</p>\n<p><strong>2. Problème de l'imprimante.</strong> Le plan de brassage place le port Gi1/0/21 dans le VLAN 10, mais la configuration réelle le met dans le VLAN 20. L'imprimante, configurée en 192.168.10.21/24, se trouve donc physiquement dans le VLAN 20 : ni les postes du VLAN 10 ni sa passerelle ne peuvent la joindre. Correction : repasser le port Gi1/0/21 en accès VLAN 10, après avoir vérifié auprès du responsable qu'aucune intervention récente ne justifiait ce changement, puis tester une impression depuis un poste du VLAN 10.</p>\n<p><strong>3. Problème du nouveau poste.</strong> Le port Gi1/0/12 est désactivé (shutdown), ce qui est une bonne pratique pour un port inutilisé. Il n'a pas été activé lors de l'installation du poste. Correction : activer le port, vérifier son affectation au VLAN 10 et la description « E1-012 bureau 12 », puis contrôler que le poste obtient une adresse dans l'étendue .50 à .200.</p>\n<p><strong>4. Liaison inter-commutateurs.</strong> Le port Gi1/0/25 transporte bien les VLAN 10, 20 et 99, conformément au plan. Elle n'est pas en cause.</p>\n<table>\n<thead><tr><th>Écart</th><th>Conséquence</th><th>Correction</th></tr></thead>\n<tbody>\n<tr><td>Port Gi1/0/21 en VLAN 20 au lieu de 10</td><td>Imprimante injoignable</td><td>Port en accès VLAN 10, test d'impression</td></tr>\n<tr><td>Port Gi1/0/12 désactivé</td><td>Poste du bureau 12 sans réseau</td><td>Activation, description, test DHCP</td></tr>\n<tr><td>Passerelle VLAN 20 hors du /25</td><td>Risque de configuration erronée lors d'une prochaine intervention</td><td>Vérifier le pare-feu et corriger le plan</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le ticket est clôturé avec la liste des actions, les tests réalisés et une mention « documentation mise à jour : plan d'adressage version du jour ». Le technicien signale aussi au responsable que le port de l'imprimante avait été modifié sans trace : une procédure de gestion des changements éviterait que cela se reproduise.</div>"
      }
     ],
     "points_cles": [
      "Le schéma physique montre où sont branchés les équipements ; le schéma logique montre les réseaux et les flux.",
      "Le plan d'adressage se vérifie sous-réseau par sous-réseau : passerelle incluse, étendue DHCP sans recouvrement.",
      "Le plan de brassage relie prise, port de panneau, port de commutateur et VLAN.",
      "Un port d'accès dans le mauvais VLAN isole l'équipement de son réseau IP.",
      "Un port désactivé (shutdown) est une bonne pratique tant qu'il est inutilisé.",
      "En cas de divergence, la configuration réelle détermine le comportement ; on comprend avant de corriger.",
      "L'analyse se présente sous forme d'un tableau écart, conséquence, correction.",
      "Toute correction se termine par un test et une mise à jour de la documentation."
     ],
     "lexique": [
      {
       "terme": "Schéma physique",
       "def": "Représentation des équipements, de leur emplacement et des câbles qui les relient."
      },
      {
       "terme": "Schéma logique",
       "def": "Représentation des réseaux IP, des VLAN et des équipements de routage et de filtrage."
      },
      {
       "terme": "Plan de brassage",
       "def": "Tableau de correspondance entre prises, panneaux et ports de commutateurs."
      },
      {
       "terme": "Commutateur cœur",
       "def": "Commutateur central auquel sont reliés les commutateurs d'étage et les serveurs."
      },
      {
       "terme": "Shutdown",
       "def": "État d'un port de commutateur désactivé administrativement."
      },
      {
       "terme": "Écart",
       "def": "Différence constatée entre l'état attendu et l'état réel."
      },
      {
       "terme": "Description de port",
       "def": "Texte associé à un port de commutateur pour identifier ce qui y est raccordé."
      },
      {
       "terme": "Gestion des changements",
       "def": "Procédure d'approbation et de traçabilité des modifications d'un système."
      }
     ]
    },
    {
     "id": "bciel-analyse-cahier-des-charges",
     "titre": "S'approprier un cahier des charges et ses diagrammes",
     "niveau": "1re-Tle",
     "duree": 50,
     "objectifs": [
      "Identifier les parties d'un cahier des charges et la nature de chaque exigence.",
      "Lire un diagramme de cas d'utilisation, un diagramme d'exigences et un diagramme d'états.",
      "Repérer les exigences ambiguës, manquantes ou contradictoires et formuler des questions au client.",
      "Traduire des exigences en critères de validation mesurables.",
      "Construire une matrice de traçabilité entre exigences, solutions et tests."
     ],
     "sections": [
      {
       "titre": "Le cahier des charges : rôle et structure",
       "contenu": "\n<p>Le <strong>cahier des charges</strong> est le document contractuel qui exprime ce que le client attend d'un produit ou d'une installation. Le <strong>cahier des charges fonctionnel</strong> (CdCF) décrit le besoin en termes de <strong>fonctions</strong> et de <strong>performances</strong>, sans imposer de solution technique ; un cahier des charges technique peut, lui, imposer des choix (marque, protocole, norme). S'approprier un cahier des charges est la première activité de tout projet : une exigence mal comprise produit un système conforme… à ce que le client n'a pas demandé.</p>\n<table>\n<thead><tr><th>Partie</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Contexte et objectif</td><td>Situation actuelle, problème à résoudre, enjeux</td></tr>\n<tr><td>Périmètre</td><td>Ce qui est inclus et ce qui est exclu du projet</td></tr>\n<tr><td>Exigences fonctionnelles</td><td>Ce que le système doit faire</td></tr>\n<tr><td>Exigences non fonctionnelles</td><td>Performances, sécurité, disponibilité, ergonomie, consommation, environnement</td></tr>\n<tr><td>Contraintes</td><td>Budget, délai, normes, matériel existant à réutiliser, réglementation</td></tr>\n<tr><td>Critères d'acceptation</td><td>Comment la conformité sera vérifiée à la recette</td></tr>\n</tbody>\n</table>\n<p>Chaque exigence porte un <strong>identifiant</strong> (EF-03, ENF-07…), un énoncé, et idéalement un <strong>critère</strong> chiffré, un <strong>niveau</strong> (valeur cible) et une <strong>flexibilité</strong> (tolérance ou caractère impératif). Le vocabulaire normatif est précis : « doit » marque une exigence obligatoire, « devrait » une recommandation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne exigence est <strong>unique</strong> (une seule idée), <strong>non ambiguë</strong>, <strong>vérifiable</strong> (on peut la tester) et <strong>réalisable</strong>. « Le système doit être rapide » n'est pas vérifiable ; « l'alerte doit être reçue moins de 60 s après le dépassement du seuil » l'est.</div>"
      },
      {
       "titre": "Les diagrammes associés",
       "contenu": "\n<p>Les cahiers des charges des systèmes techniques utilisent souvent les diagrammes du langage <strong>SysML</strong> (ou UML pour la partie logicielle) :</p>\n<ul>\n<li>le <strong>diagramme de cas d'utilisation</strong> représente le système par un cadre, les <strong>acteurs</strong> (utilisateurs, autres systèmes) par des bonshommes à l'extérieur, et les services rendus par des ovales à l'intérieur, reliés aux acteurs concernés ;</li>\n<li>le <strong>diagramme d'exigences</strong> présente chaque exigence dans un rectangle (identifiant et texte) et les liens entre elles (une exigence en <strong>raffine</strong> une autre, un bloc la <strong>satisfait</strong>, un test la <strong>vérifie</strong>) ;</li>\n<li>le <strong>diagramme d'états</strong> (ou machine à états) décrit le comportement : des <strong>états</strong> (rectangles aux coins arrondis), des <strong>transitions</strong> (flèches) déclenchées par des <strong>événements</strong> et éventuellement soumises à une <strong>condition de garde</strong> entre crochets ;</li>\n<li>le <strong>diagramme de séquence</strong> montre l'ordre des messages échangés entre acteurs et composants au cours d'un scénario.</li>\n</ul>\n<p>Un <strong>algorigramme</strong> (logigramme) peut compléter ces diagrammes pour décrire un traitement précis : rectangles pour les actions, losanges pour les tests, parallélogrammes pour les entrées-sorties.</p>"
      },
      {
       "titre": "Méthode d'appropriation et pièges",
       "contenu": "\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> s'approprier un cahier des charges.<br>1. Lire le contexte et reformuler en une phrase le <strong>besoin</strong> : à qui rend-on service, sur quoi agit-on, dans quel but ?<br>2. Lister les <strong>acteurs</strong> et les <strong>cas d'utilisation</strong>.<br>3. Classer chaque exigence : fonctionnelle, non fonctionnelle, contrainte.<br>4. Pour chaque exigence, vérifier qu'elle est vérifiable ; sinon, proposer une reformulation chiffrée.<br>5. Repérer les <strong>manques</strong> : que se passe-t-il en cas de panne, de coupure réseau, de batterie faible ? Qui administre ? Comment sont protégées les données ?<br>6. Repérer les <strong>contradictions</strong> entre exigences (autonomie de 5 ans et mesure toutes les secondes, par exemple).<br>7. Rédiger la liste des <strong>questions au client</strong>.<br>8. Construire la <strong>matrice de traçabilité</strong> : exigence, solution envisagée, test de validation.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> combler soi-même un manque du cahier des charges par une hypothèse sans la faire valider revient à prendre une décision à la place du client. Toute hypothèse est écrite et soumise au client ; sa réponse est conservée, car elle a une valeur contractuelle.</div>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "\n<p>Un restaurant d'entreprise demande un système de surveillance de la température de ses trois chambres froides. Extrait du cahier des charges.</p>\n<p><strong>Contexte</strong> : aujourd'hui, les températures sont relevées à la main deux fois par jour. Une panne de nuit a déjà provoqué la perte de denrées.</p>\n<table>\n<thead><tr><th>Id</th><th>Exigence</th><th>Type</th></tr></thead>\n<tbody>\n<tr><td>EF-01</td><td>Le système doit mesurer la température de chaque chambre froide toutes les 5 minutes.</td><td>Fonctionnelle</td></tr>\n<tr><td>EF-02</td><td>Le système doit alerter le responsable en cas de température anormale.</td><td>Fonctionnelle</td></tr>\n<tr><td>EF-03</td><td>Le système doit conserver l'historique des mesures et permettre son export pour les contrôles sanitaires.</td><td>Fonctionnelle</td></tr>\n<tr><td>ENF-01</td><td>La mesure doit être précise.</td><td>Non fonctionnelle</td></tr>\n<tr><td>ENF-02</td><td>Les capteurs doivent fonctionner sur pile avec une autonomie d'au moins 2 ans.</td><td>Non fonctionnelle</td></tr>\n<tr><td>C-01</td><td>Le système doit utiliser le réseau Wi-Fi existant du restaurant.</td><td>Contrainte</td></tr>\n</tbody>\n</table>\n<p><strong>Diagramme d'états fourni pour un capteur (décrit)</strong> : état initial vers « Veille » ; de « Veille » vers « Mesure » sur l'événement « fin de temporisation 5 min » ; de « Mesure » vers « Émission » ; de « Émission » vers « Veille » sur « accusé de réception reçu » ; de « Émission » vers « Veille » sur « 3 échecs d'émission ».</p>\n<p><strong>Cas d'utilisation (décrit)</strong> : acteurs « Responsable cuisine » et « Inspecteur sanitaire » ; cas « Consulter les températures » (responsable), « Recevoir une alerte » (responsable), « Exporter l'historique » (responsable, inspecteur).</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1. Besoin reformulé.</strong> Le système rend service au responsable de cuisine en surveillant en continu la température des chambres froides, afin d'éviter la perte de denrées et de prouver la maîtrise de la chaîne du froid lors des contrôles.</p>\n<p><strong>2. Exigences non vérifiables.</strong> ENF-01 « précise » n'est pas vérifiable. Proposition : « La mesure doit avoir une précision de ± 0,5 °C sur la plage – 30 °C à + 10 °C. » EF-02 ne définit ni la température anormale, ni le moyen, ni le délai d'alerte. Proposition : « Une alerte doit être envoyée par SMS et courriel au responsable moins de 10 min après deux mesures consécutives au-dessus du seuil réglable de chaque chambre (par défaut + 4 °C pour une chambre positive). » La double mesure évite les fausses alertes à l'ouverture de la porte.</p>\n<p><strong>3. Manques.</strong> Le cahier des charges ne dit pas : que faire si un capteur ne transmet plus (pile vide, panne) ; qui reçoit l'alerte la nuit et le week-end ; combien de temps conserver l'historique ; si le système doit fonctionner pendant une coupure de courant ou d'internet.</p>\n<p><strong>4. Incohérences et risques.</strong> Le diagramme d'états montre qu'après 3 échecs, le capteur retourne en veille sans rien signaler : une perte de liaison passerait inaperçue, alors que c'est précisément la situation dangereuse. De plus, une chambre froide est une enceinte métallique qui atténue fortement les ondes radio : la contrainte C-01 (Wi-Fi existant) risque d'être incompatible avec la transmission depuis l'intérieur, et le Wi-Fi est gourmand en énergie face à l'exigence ENF-02 d'autonomie. Un relevé radio sur site est indispensable avant de s'engager.</p>\n<table>\n<thead><tr><th>Exigence</th><th>Solution envisagée</th><th>Test de validation</th></tr></thead>\n<tbody>\n<tr><td>EF-01</td><td>Capteur à sonde déportée, mesure toutes les 5 min</td><td>Relevé de l'historique sur 24 h : 288 mesures par chambre, aucune absence</td></tr>\n<tr><td>EF-02 reformulée</td><td>Serveur avec règle d'alerte, envoi SMS et courriel</td><td>Sonde placée dans un bain à + 8 °C : alerte reçue en moins de 10 min</td></tr>\n<tr><td>EF-03</td><td>Base de données, export CSV</td><td>Export d'une semaine ouvert dans un tableur, données complètes</td></tr>\n<tr><td>ENF-01 reformulée</td><td>Sonde de classe de précision adaptée</td><td>Comparaison à un thermomètre de référence étalonné en trois points</td></tr>\n<tr><td>ENF-02</td><td>À confirmer après relevé radio (Wi-Fi ou radio basse consommation)</td><td>Calcul d'autonomie à partir du courant moyen mesuré</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'analyse est envoyée au client sous forme d'une note de questions numérotées, avec les reformulations proposées. Le cahier des charges est mis à jour avec un nouvel indice et validé par écrit avant toute commande de matériel. L'ajout d'une exigence « signaler la perte de communication d'un capteur en moins de 30 min » sera probablement la plus importante pour la sécurité alimentaire.</div>"
      }
     ],
     "points_cles": [
      "Le CdCF exprime le besoin en fonctions et performances, sans imposer de solution.",
      "Une exigence est identifiée, unique, non ambiguë, vérifiable et réalisable.",
      "On distingue exigences fonctionnelles, non fonctionnelles et contraintes.",
      "Cas d'utilisation : acteurs et services ; diagramme d'états : états, transitions, événements, gardes.",
      "L'appropriation fait apparaître exigences non vérifiables, manques et contradictions.",
      "Les hypothèses sont soumises au client et sa réponse est conservée.",
      "Les situations dégradées (panne, perte de liaison, batterie faible) sont souvent oubliées et essentielles.",
      "La matrice de traçabilité relie chaque exigence à une solution et à un test de validation."
     ],
     "lexique": [
      {
       "terme": "CdCF",
       "def": "Cahier des charges fonctionnel, qui décrit le besoin sans imposer de solution."
      },
      {
       "terme": "Exigence non fonctionnelle",
       "def": "Exigence portant sur une qualité du système : performance, sécurité, autonomie…"
      },
      {
       "terme": "Contrainte",
       "def": "Limite imposée à la solution : budget, délai, norme, matériel existant."
      },
      {
       "terme": "Acteur",
       "def": "Personne ou système extérieur qui interagit avec le système étudié."
      },
      {
       "terme": "Cas d'utilisation",
       "def": "Service rendu par le système à un ou plusieurs acteurs."
      },
      {
       "terme": "Transition",
       "def": "Passage d'un état à un autre déclenché par un événement."
      },
      {
       "terme": "Condition de garde",
       "def": "Condition qui doit être vraie pour qu'une transition soit franchie."
      },
      {
       "terme": "Matrice de traçabilité",
       "def": "Tableau reliant les exigences aux solutions et aux tests qui les vérifient."
      }
     ]
    },
    {
     "id": "bciel-analyse-journaux-incidents",
     "titre": "Analyser des journaux, un rapport de vulnérabilités et une fiche d'incident",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Identifier la structure d'une ligne de journal : horodatage, source, gravité, message.",
      "Reconstituer une chronologie d'événements à partir de plusieurs journaux.",
      "Lire un rapport de scan de vulnérabilités et prioriser les corrections.",
      "Rédiger une fiche d'incident factuelle avec mesures immédiates et recommandations.",
      "Distinguer faits établis, hypothèses et recommandations dans une analyse."
     ],
     "sections": [
      {
       "titre": "Les journaux et leur structure",
       "contenu": "\n<p>Les <strong>journaux</strong> (logs) sont des fichiers ou des flux dans lesquels les systèmes enregistrent leurs événements : connexions, erreurs, décisions de filtrage, démarrages de services. Ils sont la principale source d'information pour diagnostiquer une panne ou reconstituer un incident de sécurité. Chaque ligne contient en général :</p>\n<table>\n<thead><tr><th>Élément</th><th>Exemple</th><th>Utilité</th></tr></thead>\n<tbody>\n<tr><td>Horodatage</td><td>2026-02-14T03:12:45+01:00</td><td>Ordonner les événements, corréler plusieurs sources</td></tr>\n<tr><td>Équipement ou machine</td><td>srv-web01</td><td>Savoir où l'événement s'est produit</td></tr>\n<tr><td>Programme ou service</td><td>sshd, kernel, firewall</td><td>Savoir quel composant parle</td></tr>\n<tr><td>Niveau de gravité</td><td>info, warning, error, critical</td><td>Filtrer l'essentiel</td></tr>\n<tr><td>Message</td><td>Failed password for root from 203.0.113.50</td><td>Décrire l'événement</td></tr>\n</tbody>\n</table>\n<p>Le protocole <strong>syslog</strong> définit huit niveaux de gravité, de 0 (emergency, système inutilisable) à 7 (debug, informations de mise au point) ; les niveaux 3 (error) et 4 (warning) sont les plus surveillés au quotidien. Un journal de pare-feu indique pour chaque flux : action (accept, drop, reject), interface, adresse et port source, adresse et port destination, protocole.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'analyse de journaux repose sur des <strong>horloges synchronisées</strong> et sur la mention du <strong>fuseau horaire</strong>. Un décalage d'une heure entre deux équipements (heure d'été non appliquée, par exemple) suffit à inverser la cause et la conséquence d'un incident.</div>"
      },
      {
       "titre": "Le rapport de scan de vulnérabilités",
       "contenu": "\n<p>Un <strong>scanner de vulnérabilités</strong> interroge les équipements d'un réseau, identifie les services et leurs versions, et les compare à une base de vulnérabilités connues. Il produit un <strong>rapport</strong> qui liste, pour chaque machine, les vulnérabilités détectées avec :</p>\n<ul>\n<li>leur identifiant <strong>CVE</strong> et un titre ;</li>\n<li>un <strong>score de gravité</strong>, souvent le CVSS de 0 à 10, traduit en niveau : faible, moyen, élevé, critique ;</li>\n<li>le service et le port concernés ;</li>\n<li>une <strong>description</strong> et une <strong>solution</strong> recommandée (mise à jour, changement de configuration).</li>\n</ul>\n<p>Le rapport ne dit pas tout : il peut contenir des <strong>faux positifs</strong> (vulnérabilité signalée mais absente, par exemple parce que le correctif a été rétroporté sans changer le numéro de version) et des <strong>faux négatifs</strong> (vulnérabilité réelle non détectée). La priorité de correction ne dépend pas seulement du score, mais aussi de l'<strong>exposition</strong> (le service est-il accessible depuis internet ?) et de l'existence d'une exploitation active connue.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> exploiter un journal ou un rapport.<br>1. Délimiter la <strong>période</strong> et les <strong>équipements</strong> concernés.<br>2. Filtrer les lignes utiles (par adresse, par compte, par gravité) et les classer par horodatage.<br>3. Repérer les <strong>motifs</strong> : répétitions, pics, première occurrence, changement de comportement.<br>4. Construire une <strong>chronologie</strong> qui fusionne les différentes sources.<br>5. Séparer clairement les <strong>faits</strong> (ce que montrent les journaux), les <strong>hypothèses</strong> (ce qu'on en déduit) et les <strong>recommandations</strong>.<br>6. Pour un rapport de scan, classer les vulnérabilités par gravité et exposition, puis planifier les corrections.</div>"
      },
      {
       "titre": "Les pièges de l'analyse",
       "contenu": "\n<p>L'analyse de journaux et de rapports demande de la rigueur, car plusieurs erreurs reviennent souvent :</p>\n<ul>\n<li><strong>confondre corrélation et causalité</strong> : deux événements proches dans le temps ne sont pas forcément liés ; il faut un élément commun (même adresse, même compte, même machine) pour les relier ;</li>\n<li><strong>s'arrêter au premier élément suspect</strong> : un attaquant laisse souvent plusieurs traces, et la première trouvée n'est pas forcément le point d'entrée ;</li>\n<li><strong>ignorer l'absence de journaux</strong> : une période sans aucune ligne peut signifier un service arrêté ou des journaux effacés, ce qui est en soi une information ;</li>\n<li><strong>se fier aux noms</strong> : un processus nommé comme un service système légitime peut être un programme malveillant déguisé ;</li>\n<li><strong>modifier la machine analysée</strong> : se connecter avec un compte d'administration, redémarrer ou installer un outil sur la machine compromise modifie les traces ; on travaille de préférence sur une copie des journaux et du disque ;</li>\n<li><strong>mélanger faits et interprétations</strong> dans le compte rendu : le lecteur doit savoir ce qui est prouvé et ce qui est supposé.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les journaux contiennent des données personnelles (identifiants, adresses IP, parfois contenus). Leur consultation est réservée aux personnes habilitées, dans le cadre de leur mission, et leur conservation suit une durée définie par l'organisation et la réglementation.</div>"
      },
      {
       "titre": "Exemple commenté : les documents",
       "contenu": "\n<p>Le serveur web Linux srv-web01 (192.168.99.10) d'une PME, placé en DMZ, est accessible depuis internet en HTTPS. Le lundi matin, la supervision signale une charge processeur à 100 % depuis la nuit. On dispose des extraits suivants (adresses externes issues des plages réservées à la documentation).</p>\n<p><strong>Journal d'authentification de srv-web01 (extrait)</strong></p>\n<table>\n<thead><tr><th>Horodatage</th><th>Message</th></tr></thead>\n<tbody>\n<tr><td>2026-02-14 02:58:10</td><td>sshd : Failed password for root from 203.0.113.50 port 51122</td></tr>\n<tr><td>2026-02-14 02:58:12</td><td>sshd : Failed password for admin from 203.0.113.50 port 51130</td></tr>\n<tr><td>…</td><td>(1 840 lignes du même type entre 02:58 et 03:12, comptes root, admin, test, deploy, depuis 203.0.113.50)</td></tr>\n<tr><td>2026-02-14 03:12:41</td><td>sshd : Accepted password for deploy from 203.0.113.50 port 60210</td></tr>\n<tr><td>2026-02-14 03:14:05</td><td>sudo : deploy : COMMAND=/usr/bin/crontab -e</td></tr>\n</tbody>\n</table>\n<p><strong>Journal du pare-feu (extrait)</strong></p>\n<table>\n<thead><tr><th>Horodatage</th><th>Action</th><th>Source</th><th>Destination</th><th>Service</th></tr></thead>\n<tbody>\n<tr><td>2026-02-14 02:58:09</td><td>accept</td><td>203.0.113.50</td><td>192.168.99.10</td><td>TCP 22</td></tr>\n<tr><td>2026-02-14 03:15:30</td><td>accept</td><td>192.168.99.10</td><td>198.51.100.77</td><td>TCP 3333</td></tr>\n<tr><td>2026-02-14 03:15:31 à lundi 08:00</td><td>accept</td><td>192.168.99.10</td><td>198.51.100.77</td><td>TCP 3333 (connexion permanente)</td></tr>\n</tbody>\n</table>\n<p><strong>Rapport de scan réalisé le mois précédent (extrait pour srv-web01)</strong> : port 22 (SSH) ouvert depuis internet, authentification par mot de passe autorisée, gravité moyenne ; serveur web en version obsolète, une CVE de gravité élevée, correctif disponible.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "\n<p><strong>1. Faits établis.</strong> Entre 02:58 et 03:12, l'adresse externe 203.0.113.50 a tenté environ 1 840 connexions SSH sur srv-web01 avec des comptes courants : c'est une <strong>attaque par force brute</strong>. Le pare-feu autorisait le port 22 depuis internet. À 03:12:41, une connexion a réussi sur le compte deploy, avec un mot de passe. À 03:14, ce compte a utilisé sudo pour modifier les tâches planifiées (crontab). À partir de 03:15, le serveur maintient une connexion sortante permanente vers 198.51.100.77 sur le port TCP 3333.</p>\n<p><strong>2. Hypothèses.</strong> Le compte deploy possédait un mot de passe faible et des droits sudo. La modification de crontab sert vraisemblablement à relancer automatiquement un programme malveillant. La charge processeur maximale et la connexion permanente vers un port inhabituel sont compatibles avec un logiciel de <strong>minage de cryptomonnaie</strong> ; le port 3333 est fréquemment utilisé par ce type de programme, mais cela reste à confirmer par l'analyse du serveur.</p>\n<p><strong>3. Lien avec le rapport de scan.</strong> L'exposition de SSH sur internet avec authentification par mot de passe avait été signalée il y a un mois, avec une gravité moyenne. Elle n'a pas été corrigée, et c'est elle qui a été exploitée. Le score CVSS seul ne suffisait pas : un service d'administration exposé sur internet devait être traité en priorité.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> on ne peut pas affirmer que l'attaquant s'est limité au minage. Il dispose de droits d'administration depuis samedi 03:12 : il a pu installer d'autres accès, lire les données du site ou tenter d'atteindre d'autres machines. L'analyse doit vérifier les flux de srv-web01 vers le réseau interne pendant toute la période.</div>\n<table>\n<thead><tr><th>Rubrique de la fiche d'incident</th><th>Contenu rédigé</th></tr></thead>\n<tbody>\n<tr><td>Identification</td><td>Incident de sécurité n° 2026-007, srv-web01, détecté lundi 08:00 par la supervision, priorité P1</td></tr>\n<tr><td>Résumé</td><td>Compromission du compte deploy par force brute SSH, élévation de privilèges, programme malveillant probable</td></tr>\n<tr><td>Mesures immédiates</td><td>Isolement réseau du serveur (règle de blocage sur le pare-feu), conservation des journaux et copie du disque, blocage de 203.0.113.50 et 198.51.100.77, désactivation du compte deploy</td></tr>\n<tr><td>Recommandations</td><td>Reconstruction du serveur à partir d'une image saine et des sauvegardes antérieures au 14/02 ; SSH fermé depuis internet, administration par VPN avec MFA ; authentification SSH par clé uniquement ; revue des droits sudo ; mise à jour du serveur web ; suivi des rapports de scan avec délais de correction</td></tr>\n<tr><td>Obligations à examiner</td><td>Si des données personnelles ont pu être consultées, informer le responsable de traitement pour évaluer la notification à la CNIL dans les 72 heures</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la chronologie est présentée à la direction sur une page : heure, événement, source du journal. Ce format factuel permet de décider rapidement et sert de base au retour d'expérience.</div>"
      }
     ],
     "points_cles": [
      "Une ligne de journal contient horodatage, équipement, service, gravité et message.",
      "Syslog définit 8 niveaux de gravité, de 0 (emergency) à 7 (debug).",
      "Des horloges synchronisées avec fuseau horaire sont indispensables pour corréler des journaux.",
      "Un rapport de scan donne CVE, score, service, port et solution ; il peut contenir faux positifs et faux négatifs.",
      "La priorité de correction combine gravité, exposition et exploitation connue.",
      "L'analyse sépare faits établis, hypothèses et recommandations.",
      "La chronologie fusionne toutes les sources par horodatage.",
      "Une fiche d'incident comporte identification, résumé, mesures immédiates, recommandations et obligations."
     ],
     "lexique": [
      {
       "terme": "Journal",
       "def": "Enregistrement chronologique des événements d'un système."
      },
      {
       "terme": "Niveau de gravité",
       "def": "Indication de l'importance d'un événement dans un journal."
      },
      {
       "terme": "Corrélation",
       "def": "Mise en relation d'événements issus de sources différentes."
      },
      {
       "terme": "Force brute",
       "def": "Attaque consistant à essayer automatiquement un grand nombre de mots de passe."
      },
      {
       "terme": "Élévation de privilèges",
       "def": "Obtention par un attaquant de droits supérieurs à ceux du compte compromis."
      },
      {
       "terme": "Faux positif",
       "def": "Alerte signalant un problème qui n'existe pas réellement."
      },
      {
       "terme": "Score CVSS",
       "def": "Note de 0 à 10 évaluant la gravité d'une vulnérabilité."
      },
      {
       "terme": "Fiche d'incident",
       "def": "Document de synthèse décrivant un incident, son traitement et les recommandations."
      }
     ]
    }
   ]
  }
 ]
};
