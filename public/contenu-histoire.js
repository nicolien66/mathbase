/* ═══════════════════════════════════════════════════════════════
   POLYMATES — contenu-histoire.js

   Tout le programme d’histoire, du collège au lycée, rangé par période.
   Une période contient ses repères (la frise) et ses chapitres ; un
   chapitre est une fiche complète : cours en parties, dates, notions,
   personnages, points à retenir, quiz.

   Chaque chapitre porte les classes où il est au programme
   (« niveaux ») : c’est ce qui permet de filtrer toute la plateforme
   sur une classe donnée.

   Pour ajouter un chapitre : le glisser dans le tableau `chapitres`
   de sa période. Rien d’autre à faire, l’interface s’adapte.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const NIVEAUX = [
    { id: "6e",  nom: "6ᵉ",  cycle: "Collège" },
    { id: "5e",  nom: "5ᵉ",  cycle: "Collège" },
    { id: "4e",  nom: "4ᵉ",  cycle: "Collège" },
    { id: "3e",  nom: "3ᵉ",  cycle: "Collège" },
    { id: "2de", nom: "2ᵈᵉ", cycle: "Lycée"   },
    { id: "1re", nom: "1ʳᵉ", cycle: "Lycée"   },
    { id: "tle", nom: "Tˡᵉ", cycle: "Lycée"   },
  ];

  const PERIODES = [

  /* ══════════════════════════════════════════════════════════════
     I. PRÉHISTOIRE
     ══════════════════════════════════════════════════════════════ */
  {
    id: "prehistoire",
    nom: "Préhistoire",
    titre: "Aux origines,<br><em>avant l’écriture.</em>",
    dates: "des origines à −3300",
    debut: -3000000, fin: -3300, part: 10, teinte: "#8a7c5e",
    resume:
      "La plus longue période de l’histoire humaine est aussi la seule qui n’ait laissé " +
      "aucun texte. On la lit dans les outils, les foyers, les sépultures et les peintures. " +
      "Elle s’achève quand l’écriture apparaît, en Mésopotamie.",
    reperes: [
      { an: -3000000, label: "Premiers outils taillés" },
      { an: -1800000, label: "Homo erectus quitte l’Afrique" },
      { an: -400000,  label: "Maîtrise du feu" },
      { an: -300000,  label: "Premiers Homo sapiens" },
      { an: -40000,   label: "Sapiens en Europe" },
      { an: -36000,   label: "Grotte Chauvet" },
      { an: -17000,   label: "Lascaux" },
      { an: -10000,   label: "Révolution néolithique : agriculture" },
      { an: -6000,    label: "Premiers villages, élevage" },
      { an: -4000,    label: "Métallurgie du cuivre" },
    ],
    chapitres: [
      {
        id: "prehistoire-humanite",
        titre: "La longue histoire de l’humanité",
        niveaux: ["6e"],
        accroche: "Trois millions d’années, et pas une ligne écrite.",
        resume:
          "L’humanité naît en Afrique il y a environ trois millions d’années. Elle se " +
          "distingue par la fabrication d’outils, la maîtrise du feu et l’art. Au fil de " +
          "migrations successives, elle peuple la totalité des continents.",
        parties: [
          {
            titre: "Naître en Afrique",
            points: [
              "Les plus anciens outils taillés, découverts en Afrique de l’Est, ont environ 3 millions d’années : tailler une pierre suppose un projet, donc une pensée.",
              "Plusieurs espèces d’hominidés se succèdent et cohabitent : australopithèques, Homo habilis, Homo erectus, Homo neanderthalensis, Homo sapiens.",
              "Notre espèce, Homo sapiens, apparaît en Afrique il y a environ 300 000 ans ; elle est aujourd’hui la seule survivante du genre Homo.",
            ],
          },
          {
            titre: "Peupler la Terre",
            points: [
              "Homo erectus sort d’Afrique il y a environ 1,8 million d’années ; Homo sapiens fait de même il y a environ 100 000 ans.",
              "Sapiens atteint l’Europe vers −40 000, l’Australie vers −50 000, l’Amérique vers −15 000 par le détroit de Béring.",
              "Ces migrations s’étalent sur des milliers de générations : ce ne sont pas des voyages, mais des déplacements lents de groupes de chasseurs-cueilleurs.",
            ],
          },
          {
            titre: "Vivre au Paléolithique",
            points: [
              "Les groupes sont nomades : ils suivent le gibier et les saisons, s’abritent sous des surplombs rocheux ou dans des huttes.",
              "Le feu, maîtrisé vers −400 000, change tout : cuisson, chaleur, protection, veillée.",
              "L’art pariétal (Chauvet vers −36 000, Lascaux vers −17 000) et les sépultures montrent une pensée symbolique et des croyances.",
            ],
          },
        ],
        dates: [
          { an: -3000000, label: "Premiers outils taillés en Afrique" },
          { an: -400000,  label: "Maîtrise du feu" },
          { an: -300000,  label: "Apparition d’Homo sapiens" },
          { an: -36000,   label: "Peintures de la grotte Chauvet" },
          { an: -17000,   label: "Peintures de Lascaux" },
        ],
        notions: [
          { mot: "Préhistoire", def: "Période qui va de l’apparition de l’humanité à l’invention de l’écriture." },
          { mot: "Paléolithique", def: "« Âge de la pierre ancienne » : période des chasseurs-cueilleurs nomades." },
          { mot: "Nomade", def: "Se dit d’un groupe qui se déplace sans habitat fixe." },
          { mot: "Art pariétal", def: "Peintures et gravures réalisées sur les parois des grottes." },
        ],
        personnages: [
          { nom: "Lucy", vie: "vers −3,2 millions d’années", role: "Australopithèque découverte en Éthiopie en 1974, longtemps présentée comme « notre ancêtre »." },
          { nom: "Toumaï", vie: "vers −7 millions d’années", role: "Crâne découvert au Tchad en 2001, l’un des plus anciens hominidés connus." },
        ],
        retenir: [
          "L’humanité naît en Afrique et se répand ensuite sur toute la Terre.",
          "Ce qui définit l’humain préhistorique : l’outil, le feu, la sépulture, l’art.",
          "Aucune source écrite : l’archéologie est la seule voie d’accès à cette période.",
        ],
        quiz: [
          {
            q: "Sur quel continent apparaissent les premiers humains ?",
            choix: ["En Europe", "En Afrique", "En Asie", "En Amérique"],
            bonne: 1,
            pourquoi: "Les plus anciens fossiles et outils d’hominidés viennent tous d’Afrique de l’Est et centrale.",
          },
          {
            q: "Qu’est-ce qui marque la fin de la Préhistoire ?",
            choix: ["La maîtrise du feu", "L’invention de l’agriculture", "L’invention de l’écriture", "La fondation de Rome"],
            bonne: 2,
            pourquoi: "L’écriture, née vers −3300 à Sumer, fait entrer l’humanité dans l’Histoire au sens strict.",
          },
          {
            q: "Quel mode de vie caractérise le Paléolithique ?",
            choix: ["Agriculteurs sédentaires", "Chasseurs-cueilleurs nomades", "Marchands des villes", "Éleveurs de troupeaux"],
            bonne: 1,
            pourquoi: "L’agriculture et la sédentarité n’apparaissent qu’au Néolithique, à partir de −10 000.",
          },
        ],
      },
      {
        id: "prehistoire-neolithique",
        titre: "La révolution néolithique",
        niveaux: ["6e"],
        accroche: "Le jour où l’humanité a cessé de suivre sa nourriture pour la produire.",
        resume:
          "Vers −10 000, au Proche-Orient, des groupes humains commencent à cultiver des " +
          "céréales et à élever des animaux. Ils se fixent, construisent des villages, " +
          "inventent la poterie et le tissage. C’est la transformation la plus profonde " +
          "de toute l’histoire humaine.",
        parties: [
          {
            titre: "Produire sa nourriture",
            points: [
              "Vers −10 000, dans le « Croissant fertile » (du Nil au golfe Persique), on domestique le blé, l’orge, puis la chèvre, le mouton, le bœuf et le porc.",
              "Le même passage s’opère indépendamment ailleurs : riz en Chine, maïs au Mexique, mil en Afrique.",
              "Produire sa nourriture, c’est produire plus que le nécessaire : le surplus permet de nourrir des gens qui ne cultivent pas.",
            ],
          },
          {
            titre: "Se fixer, bâtir, stocker",
            points: [
              "On construit des maisons durables (torchis, pierre), des greniers, des enclos : le village naît, comme à Çatal Höyük en Anatolie.",
              "Nouvelles techniques : poterie pour conserver, tissage, pierre polie, plus tard métallurgie du cuivre vers −4000.",
              "La population augmente fortement, mais l’alimentation devient moins variée et les maladies partagées avec les animaux apparaissent.",
            ],
          },
          {
            titre: "Une société qui se hiérarchise",
            points: [
              "Le surplus se stocke, donc se possède, donc s’inégalise : des familles deviennent plus riches que d’autres.",
              "Apparaissent des chefs, des artisans spécialisés, des guerriers, des lieux de culte.",
              "Les mégalithes (dolmens, menhirs, Stonehenge) témoignent de sociétés capables d’organiser d’énormes chantiers collectifs.",
            ],
          },
        ],
        dates: [
          { an: -10000, label: "Débuts de l’agriculture au Proche-Orient" },
          { an: -8000,  label: "Domestication des principaux animaux d’élevage" },
          { an: -6000,  label: "Premiers villages, poterie" },
          { an: -4500,  label: "Grands mégalithes en Europe occidentale" },
          { an: -4000,  label: "Métallurgie du cuivre" },
        ],
        notions: [
          { mot: "Néolithique", def: "« Âge de la pierre nouvelle » (polie) : période de l’agriculture et des premiers villages." },
          { mot: "Sédentaire", def: "Se dit d’un groupe installé durablement au même endroit." },
          { mot: "Domestication", def: "Transformation d’une espèce sauvage en espèce utile à l’homme, par sélection." },
          { mot: "Surplus", def: "Part de la production qui dépasse les besoins immédiats et peut être stockée ou échangée." },
          { mot: "Mégalithe", def: "Monument fait de très grandes pierres dressées ou assemblées." },
        ],
        personnages: [],
        retenir: [
          "Vers −10 000, l’humanité passe de la prédation (chasse, cueillette) à la production (agriculture, élevage).",
          "La sédentarité fait naître le village, la propriété, l’artisanat et les inégalités.",
          "C’est une « révolution » par ses effets, pas par sa rapidité : elle prend des milliers d’années.",
        ],
        quiz: [
          {
            q: "Où l’agriculture apparaît-elle en premier ?",
            choix: ["Dans la vallée du Nil", "Au Croissant fertile, au Proche-Orient", "En Chine du Nord", "En Grèce"],
            bonne: 1,
            pourquoi: "Le Croissant fertile réunissait les céréales et les animaux les plus faciles à domestiquer.",
          },
          {
            q: "Quelle conséquence sociale entraîne le stockage des surplus ?",
            choix: ["La disparition des chefs", "L’apparition d’inégalités de richesse", "Le retour au nomadisme", "La fin de l’artisanat"],
            bonne: 1,
            pourquoi: "Ce que l’on peut stocker, on peut le posséder inégalement : la richesse devient durable et transmissible.",
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     II. ANTIQUITÉ
     ══════════════════════════════════════════════════════════════ */
  {
    id: "antiquite",
    nom: "Antiquité",
    titre: "Premières cités,<br><em>premiers empires.</em>",
    dates: "−3300 à 476",
    debut: -3300, fin: 476, part: 20, teinte: "#9a6b3f",
    resume:
      "L’écriture ouvre l’Antiquité. Naissent alors les États, les cités, les grands " +
      "empires, la démocratie athénienne, le droit romain — et deux religions, le judaïsme " +
      "et le christianisme, qui traverseront tous les siècles suivants.",
    reperes: [
      { an: -3300, label: "Naissance de l’écriture à Sumer" },
      { an: -3000, label: "Hiéroglyphes et premiers pharaons" },
      { an: -2600, label: "Pyramides de Gizeh" },
      { an: -1792, label: "Code de Hammurabi" },
      { an: -1250, label: "Ramsès II" },
      { an: -1200, label: "Alphabet phénicien" },
      { an: -776,  label: "Premiers Jeux olympiques" },
      { an: -753,  label: "Fondation légendaire de Rome" },
      { an: -587,  label: "Destruction du Temple, exil à Babylone" },
      { an: -509,  label: "Naissance de la République romaine" },
      { an: -508,  label: "Clisthène : démocratie à Athènes" },
      { an: -490,  label: "Marathon" },
      { an: -480,  label: "Salamine" },
      { an: -443,  label: "Siècle de Périclès" },
      { an: -336,  label: "Alexandre le Grand" },
      { an: -264,  label: "Début des guerres puniques" },
      { an: -146,  label: "Destruction de Carthage" },
      { an: -52,   label: "Alésia : reddition de Vercingétorix" },
      { an: -44,   label: "Assassinat de César" },
      { an: -27,   label: "Auguste fonde l’Empire romain" },
      { an: 30,    label: "Mort de Jésus de Nazareth" },
      { an: 70,    label: "Destruction du Second Temple" },
      { an: 79,    label: "Éruption du Vésuve, Pompéi" },
      { an: 212,   label: "Édit de Caracalla" },
      { an: 313,   label: "Édit de Milan" },
      { an: 380,   label: "Le christianisme, religion d’État" },
      { an: 395,   label: "Partage de l’Empire romain" },
      { an: 476,   label: "Chute de l’Empire romain d’Occident" },
    ],
    chapitres: [
      {
        id: "antiquite-ecriture",
        titre: "Premiers États, premières écritures",
        niveaux: ["6e"],
        accroche: "Compter des sacs de grain a mené à écrire des poèmes.",
        resume:
          "En Mésopotamie et en Égypte, l’irrigation permet de grandes récoltes ; il faut " +
          "les compter, les stocker, les redistribuer. Naissent alors l’écriture, l’État, " +
          "la ville et le pouvoir royal appuyé sur la religion.",
        parties: [
          {
            titre: "Des fleuves, des cités",
            points: [
              "Entre le Tigre et l’Euphrate (Mésopotamie) et le long du Nil, l’irrigation exige des travaux collectifs et une organisation permanente.",
              "Naissent les premières cités-États sumériennes : Ur, Uruk, Lagash, chacune dotée d’un temple (ziggourat) et d’un roi.",
              "En Égypte, vers −3000, le pays est unifié sous l’autorité d’un pharaon, à la fois roi et dieu vivant.",
            ],
          },
          {
            titre: "Écrire",
            points: [
              "Vers −3300 à Sumer, l’écriture cunéiforme naît de la comptabilité : signes en forme de coins tracés sur des tablettes d’argile.",
              "En Égypte apparaissent les hiéroglyphes, gravés sur pierre et écrits sur papyrus ; vers −1200 les Phéniciens inventent l’alphabet, bien plus simple.",
              "L’écriture sert d’abord l’administration et la religion, puis conserve lois et littérature : l’Épopée de Gilgamesh est le plus ancien grand récit connu.",
            ],
          },
          {
            titre: "Un pouvoir qui s’écrit",
            points: [
              "Le roi rend la justice au nom des dieux : le Code de Hammurabi (vers −1792) grave 282 lois sur une stèle de basalte.",
              "Les scribes, formés longuement, forment une élite indispensable au souverain.",
              "Les monuments — ziggourats, pyramides de Gizeh vers −2600 — donnent à voir la puissance du pouvoir et sa liaison au divin.",
            ],
          },
        ],
        dates: [
          { an: -3300, label: "Naissance de l’écriture cunéiforme à Sumer" },
          { an: -3000, label: "Unification de l’Égypte, hiéroglyphes" },
          { an: -2600, label: "Construction des pyramides de Gizeh" },
          { an: -1792, label: "Code de Hammurabi à Babylone" },
          { an: -1200, label: "Alphabet phénicien" },
        ],
        notions: [
          { mot: "Cité-État", def: "Ville qui, avec sa campagne, forme un État indépendant." },
          { mot: "Cunéiforme", def: "Écriture faite de signes en forme de coins, tracés sur argile." },
          { mot: "Scribe", def: "Fonctionnaire qui sait lire, écrire et compter au service du roi ou du temple." },
          { mot: "Polythéisme", def: "Croyance en plusieurs dieux." },
          { mot: "Pharaon", def: "Roi d’Égypte, considéré comme un dieu sur terre." },
        ],
        personnages: [
          { nom: "Hammurabi", vie: "roi vers −1792 à −1750", role: "Roi de Babylone, auteur du plus célèbre recueil de lois de l’Antiquité." },
          { nom: "Ramsès II", vie: "vers −1279 à −1213", role: "Pharaon bâtisseur (Abou Simbel), auteur du premier traité de paix connu, avec les Hittites." },
        ],
        retenir: [
          "L’écriture naît vers −3300 à Sumer, d’un besoin de comptabilité.",
          "Les premiers États se forment autour des grands fleuves irrigués.",
          "Le pouvoir royal s’appuie sur la religion, l’écrit et les grands monuments.",
        ],
        quiz: [
          {
            q: "Quelle écriture naît en Mésopotamie vers −3300 ?",
            choix: ["Les hiéroglyphes", "L’écriture cunéiforme", "L’alphabet latin", "Les idéogrammes chinois"],
            bonne: 1,
            pourquoi: "Le cunéiforme, tracé au calame sur l’argile, est la plus ancienne écriture connue.",
          },
          {
            q: "Qu’est-ce que le Code de Hammurabi ?",
            choix: ["Un traité de paix", "Un recueil de lois gravé sur une stèle", "Un poème religieux", "Un registre d’impôts"],
            bonne: 1,
            pourquoi: "Il rassemble 282 lois établies au nom des dieux : le roi y apparaît comme garant de la justice.",
          },
        ],
      },
      {
        id: "antiquite-grece",
        titre: "Le monde des cités grecques",
        niveaux: ["6e", "2de"],
        accroche: "Des cités rivales, une même langue, les mêmes dieux — et une invention : la démocratie.",
        resume:
          "Le monde grec n’est pas un État mais une constellation de cités indépendantes, " +
          "unies par la langue, les dieux et les récits d’Homère. Athènes y invente un régime " +
          "où les citoyens décident eux-mêmes, tout en excluant la majorité des habitants.",
        parties: [
          {
            titre: "Un monde de cités",
            points: [
              "Chaque cité (polis) est un État : un centre urbain, sa campagne, ses lois, son armée, ses cultes.",
              "À partir du VIIIᵉ siècle av. J.-C., les Grecs fondent des colonies sur tout le pourtour méditerranéen : Marseille, Syracuse, Byzance.",
              "Ce qui les unit : la langue, les poèmes d’Homère (l’Iliade, l’Odyssée), les dieux de l’Olympe et les sanctuaires communs (Delphes, Olympie et ses Jeux dès −776).",
            ],
          },
          {
            titre: "La démocratie athénienne",
            points: [
              "En −508, les réformes de Clisthène donnent le pouvoir au dêmos : c’est la démocratie, littéralement « le pouvoir du peuple ».",
              "L’Ecclésia, assemblée de tous les citoyens sur la colline de la Pnyx, vote les lois, la guerre et la paix ; la Boulê prépare les décisions, les magistrats sont souvent tirés au sort.",
              "Le siècle de Périclès (Vᵉ siècle av. J.-C.) voit Athènes dominer une ligue maritime et bâtir le Parthénon sur l’Acropole.",
            ],
          },
          {
            titre: "Une démocratie restreinte",
            points: [
              "Est citoyen l’homme libre, adulte, né de parents athéniens : environ 10 % de la population.",
              "En sont exclus les femmes, les métèques (étrangers libres) et les esclaves, très nombreux.",
              "Les guerres médiques (Marathon −490, Salamine −480) contre les Perses forgent le sentiment d’appartenance et la puissance navale d’Athènes.",
            ],
          },
        ],
        dates: [
          { an: -776, label: "Premiers Jeux olympiques" },
          { an: -508, label: "Réformes de Clisthène : démocratie à Athènes" },
          { an: -490, label: "Bataille de Marathon" },
          { an: -480, label: "Bataille navale de Salamine" },
          { an: -443, label: "Périclès dirige Athènes" },
          { an: -336, label: "Alexandre le Grand devient roi de Macédoine" },
        ],
        notions: [
          { mot: "Cité (polis)", def: "Petit État grec formé d’une ville et de son territoire." },
          { mot: "Citoyen", def: "À Athènes, homme libre né de parents athéniens, qui participe aux décisions politiques." },
          { mot: "Démocratie", def: "Régime où les citoyens exercent eux-mêmes le pouvoir." },
          { mot: "Métèque", def: "Étranger libre installé dans une cité grecque, sans droits politiques." },
          { mot: "Sanctuaire", def: "Lieu consacré à un dieu, où l’on vient offrir des sacrifices." },
        ],
        personnages: [
          { nom: "Clisthène", vie: "VIᵉ siècle av. J.-C.", role: "Réformateur athénien, fondateur des institutions démocratiques en −508." },
          { nom: "Périclès", vie: "vers −495 à −429", role: "Stratège réélu quinze années de suite ; il fait d’Athènes la première puissance grecque." },
          { nom: "Homère", vie: "VIIIᵉ siècle av. J.-C.", role: "Poète auquel on attribue l’Iliade et l’Odyssée, récits fondateurs du monde grec." },
          { nom: "Alexandre le Grand", vie: "−356 à −323", role: "Roi de Macédoine ; ses conquêtes diffusent la culture grecque jusqu’à l’Indus." },
        ],
        retenir: [
          "Le monde grec est morcelé en cités indépendantes, mais uni par une culture commune.",
          "Athènes invente en −508 un régime où les citoyens votent les lois eux-mêmes.",
          "Cette démocratie exclut femmes, métèques et esclaves : elle concerne une minorité.",
        ],
        quiz: [
          {
            q: "Qui peut être citoyen à Athènes au Vᵉ siècle av. J.-C. ?",
            choix: ["Tous les habitants", "Les hommes libres nés de parents athéniens", "Les propriétaires terriens", "Les hommes et les femmes nés à Athènes"],
            bonne: 1,
            pourquoi: "Environ 10 % de la population seulement : femmes, métèques et esclaves sont exclus du corps civique.",
          },
          {
            q: "Que désigne l’Ecclésia ?",
            choix: ["Le temple d’Athéna", "L’assemblée des citoyens", "Le tribunal populaire", "Le conseil des stratèges"],
            bonne: 1,
            pourquoi: "Réunie sur la Pnyx, elle vote les lois, la guerre et la paix ; la Boulê ne fait que préparer ses décisions.",
          },
          {
            q: "Quelle bataille navale oppose Grecs et Perses en −480 ?",
            choix: ["Marathon", "Salamine", "Actium", "Alésia"],
            bonne: 1,
            pourquoi: "Marathon (−490) est une bataille terrestre ; Salamine est la victoire navale décisive des guerres médiques.",
          },
        ],
      },
      {
        id: "antiquite-rome",
        titre: "Rome : du mythe à l’Empire",
        niveaux: ["6e", "2de"],
        accroche: "Une cité du Latium finit par gouverner la Méditerranée entière.",
        resume:
          "Rome se raconte une naissance légendaire, puis se donne une République gouvernée " +
          "par le Sénat. Ses conquêtes lui livrent la Méditerranée, mais les guerres civiles " +
          "emportent la République : Auguste fonde l’Empire en −27.",
        parties: [
          {
            titre: "Le mythe et l’archéologie",
            points: [
              "La légende fait fonder Rome par Romulus en −753 et descendre les Romains d’Énée, prince troyen — récit fixé par Virgile dans l’Énéide.",
              "L’archéologie montre des villages de bergers sur les collines du Tibre dès le VIIIᵉ siècle av. J.-C., puis une ville sous influence étrusque.",
              "Le mythe n’est pas de l’histoire, mais il est un fait historique : il dit comment les Romains voulaient se voir.",
            ],
          },
          {
            titre: "La République et les conquêtes",
            points: [
              "En −509, les Romains chassent leur roi et instaurent la République : magistrats élus pour un an (consuls), Sénat très puissant, assemblées de citoyens.",
              "Les guerres puniques contre Carthage (−264 à −146) donnent à Rome la maîtrise de la Méditerranée occidentale ; Carthage est rasée en −146.",
              "César conquiert la Gaule et bat Vercingétorix à Alésia en −52 ; son assassinat en −44 ouvre une nouvelle guerre civile.",
            ],
          },
          {
            titre: "L’Empire et la romanisation",
            points: [
              "En −27, Octave reçoit le titre d’Auguste : il conserve les apparences de la République mais concentre tous les pouvoirs. C’est le début de l’Empire.",
              "La paix romaine (pax romana) des deux premiers siècles favorise le commerce, les routes, les villes bâties sur le même modèle : forum, thermes, amphithéâtre, aqueduc.",
              "En 212, l’édit de Caracalla accorde la citoyenneté romaine à presque tous les hommes libres de l’Empire.",
            ],
          },
        ],
        dates: [
          { an: -753, label: "Fondation légendaire de Rome" },
          { an: -509, label: "Naissance de la République romaine" },
          { an: -146, label: "Destruction de Carthage" },
          { an: -52,  label: "Alésia : reddition de Vercingétorix" },
          { an: -27,  label: "Auguste, premier empereur" },
          { an: 212,  label: "Édit de Caracalla : citoyenneté à tous les hommes libres" },
        ],
        notions: [
          { mot: "République", def: "À Rome, régime où les magistrats sont élus et où le Sénat joue un rôle central." },
          { mot: "Sénat", def: "Assemblée d’anciens magistrats qui conseille — et de fait dirige — la République romaine." },
          { mot: "Romanisation", def: "Adoption du mode de vie, de la langue et des institutions romaines par les peuples conquis." },
          { mot: "Pax romana", def: "Longue période de paix intérieure de l’Empire, du Iᵉʳ au IIᵉ siècle." },
          { mot: "Limes", def: "Frontière fortifiée de l’Empire romain." },
        ],
        personnages: [
          { nom: "Jules César", vie: "−100 à −44", role: "Général et homme politique ; conquérant de la Gaule, dictateur à vie, assassiné aux ides de mars." },
          { nom: "Auguste", vie: "−63 à 14", role: "Petit-neveu de César, il fonde le régime impérial tout en se disant restaurateur de la République." },
          { nom: "Vercingétorix", vie: "vers −82 à −46", role: "Chef arverne qui fédère les Gaulois avant de capituler à Alésia." },
        ],
        retenir: [
          "Rome passe de la royauté à la République (−509), puis à l’Empire (−27).",
          "Les guerres puniques puis les conquêtes de César donnent à Rome tout le pourtour méditerranéen.",
          "La romanisation unifie l’Empire : mêmes villes, même droit, citoyenneté élargie en 212.",
        ],
        quiz: [
          {
            q: "En quelle année Auguste devient-il le premier empereur ?",
            choix: ["−509", "−52", "−27", "212"],
            bonne: 2,
            pourquoi: "En −27, Octave reçoit le titre d’Auguste : la République subsiste en apparence, le pouvoir est à lui.",
          },
          {
            q: "Contre quelle cité Rome mène-t-elle les guerres puniques ?",
            choix: ["Athènes", "Carthage", "Alexandrie", "Sparte"],
            bonne: 1,
            pourquoi: "Carthage, puissance maritime d’Afrique du Nord, est détruite en −146 au terme du troisième conflit.",
          },
        ],
      },
      {
        id: "antiquite-monotheismes",
        titre: "Naissance du judaïsme et du christianisme",
        niveaux: ["6e"],
        accroche: "Deux religions nées dans une petite province de l’Empire romain.",
        resume:
          "Dans un monde polythéiste, les Hébreux affirment l’existence d’un dieu unique et " +
          "fixent leur histoire par écrit. Au Iᵉʳ siècle, la prédication de Jésus donne " +
          "naissance au christianisme, longtemps persécuté avant de devenir la religion de l’Empire.",
        parties: [
          {
            titre: "Le judaïsme",
            points: [
              "Les Hébreux, installés en Canaan, croient en un dieu unique qui a fait alliance avec eux : c’est le premier monothéisme durable.",
              "La Bible hébraïque est mise par écrit surtout après la destruction du Temple de Jérusalem et l’exil à Babylone (−587), moment fondateur de la mémoire juive.",
              "En 70 apr. J.-C., les Romains détruisent le Second Temple : commence la diaspora, la dispersion des Juifs autour de la Méditerranée.",
            ],
          },
          {
            titre: "Le christianisme",
            points: [
              "Jésus, juif de Galilée, prêche vers 30 apr. J.-C. ; condamné et crucifié à Jérusalem, ses disciples annoncent sa résurrection.",
              "Les Évangiles, rédigés à la fin du Iᵉʳ siècle, racontent sa vie ; Paul de Tarse porte le message hors du monde juif.",
              "Les chrétiens refusent le culte de l’empereur : ils sont périodiquement persécutés, tout en se répandant dans les villes de l’Empire.",
            ],
          },
          {
            titre: "D’une secte à une religion d’État",
            points: [
              "En 313, l’édit de Milan de Constantin autorise le culte chrétien.",
              "En 380, l’édit de Thessalonique fait du christianisme la religion officielle de l’Empire.",
              "L’Église s’organise : évêques, conciles, basiliques ; le calendrier et les fêtes de l’Occident en portent encore la marque.",
            ],
          },
        ],
        dates: [
          { an: -587, label: "Destruction du Temple, exil à Babylone" },
          { an: 30,   label: "Prédication et mort de Jésus" },
          { an: 70,   label: "Destruction du Second Temple par les Romains" },
          { an: 313,  label: "Édit de Milan : liberté du culte chrétien" },
          { an: 380,  label: "Le christianisme devient religion d’État" },
        ],
        notions: [
          { mot: "Monothéisme", def: "Croyance en un dieu unique." },
          { mot: "Diaspora", def: "Dispersion d’un peuple hors de sa terre d’origine." },
          { mot: "Évangile", def: "Récit de la vie et de l’enseignement de Jésus ; il y en a quatre reconnus." },
          { mot: "Église", def: "Communauté des chrétiens, et institution qui l’organise." },
          { mot: "Martyr", def: "Chrétien mis à mort pour sa foi, honoré par la communauté." },
        ],
        personnages: [
          { nom: "Jésus de Nazareth", vie: "vers −4 à 30", role: "Prédicateur juif de Galilée, à l’origine du christianisme." },
          { nom: "Paul de Tarse", vie: "vers 5 à 67", role: "Juif converti ; ses voyages et ses lettres diffusent le christianisme hors de Judée." },
          { nom: "Constantin", vie: "272 à 337", role: "Empereur qui autorise le christianisme et fonde Constantinople." },
        ],
        retenir: [
          "Le judaïsme est le premier monothéisme durable ; sa mémoire s’écrit dans la Bible hébraïque.",
          "Le christianisme naît du judaïsme au Iᵉʳ siècle, autour de la personne de Jésus.",
          "Persécuté, il devient religion officielle de l’Empire romain en 380.",
        ],
        quiz: [
          {
            q: "Que décide l’édit de Milan en 313 ?",
            choix: ["Il interdit le christianisme", "Il autorise le culte chrétien", "Il fait du christianisme la religion d’État", "Il détruit le Temple de Jérusalem"],
            bonne: 1,
            pourquoi: "L’édit de Milan autorise ; c’est en 380 seulement que le christianisme devient religion officielle.",
          },
          {
            q: "Qu’appelle-t-on la diaspora ?",
            choix: ["Un livre sacré", "La dispersion des Juifs hors de Judée", "Une fête religieuse", "Un lieu de culte"],
            bonne: 1,
            pourquoi: "Elle s’accentue après la destruction du Second Temple par les Romains en 70.",
          },
        ],
      },
      {
        id: "antiquite-mediterranee",
        titre: "La Méditerranée antique : empreintes grecques et romaines",
        niveaux: ["2de"],
        accroche: "Comment un même monde a pu parler grec, obéir à Rome et prier un dieu unique.",
        resume:
          "Le monde méditerranéen antique se construit par contacts : conquêtes, commerce, " +
          "colonisation, circulation des cultes et des modèles politiques. Il lègue à l’Europe " +
          "la cité, le droit, la philosophie et deux monothéismes.",
        parties: [
          {
            titre: "Un espace de circulations",
            points: [
              "La colonisation grecque, puis l’expansion phénicienne et carthaginoise, tissent un réseau de comptoirs de la mer Noire à l’Espagne.",
              "Les conquêtes d’Alexandre (−334 à −323) créent le monde hellénistique : Alexandrie, avec sa bibliothèque et son phare, en est la capitale intellectuelle.",
              "Rome unifie enfin l’ensemble : « Mare nostrum », notre mer, disent les Romains d’une Méditerranée entièrement bordée par leur empire.",
            ],
          },
          {
            titre: "Modèles politiques et citoyenneté",
            points: [
              "Athènes lègue l’idée d’une communauté de citoyens égaux devant la loi ; Rome, celle d’une citoyenneté qui s’étend et s’accorde.",
              "L’édit de Caracalla (212) achève ce mouvement : la citoyenneté cesse d’être un privilège de vainqueur.",
              "Ces deux modèles ne sont ni démocratiques au sens actuel ni égalitaires : l’esclavage y est massif et jamais contesté dans son principe.",
            ],
          },
          {
            titre: "Un héritage",
            points: [
              "La philosophie (Socrate, Platon, Aristote), l’histoire (Hérodote, Thucydide), le théâtre, l’architecture à colonnes.",
              "Le droit romain, réorganisé plus tard par Justinien, fonde une grande partie du droit européen.",
              "Le christianisme, né en Judée, se diffuse par les routes et les villes romaines : l’Empire lui donne son cadre.",
            ],
          },
        ],
        dates: [
          { an: -334, label: "Départ des conquêtes d’Alexandre" },
          { an: -146, label: "Rome détruit Carthage et Corinthe" },
          { an: -31,  label: "Actium : Rome maîtresse de l’Orient" },
          { an: 212,  label: "Édit de Caracalla" },
          { an: 395,  label: "Partage définitif de l’Empire romain" },
        ],
        notions: [
          { mot: "Hellénistique", def: "Se dit du monde né des conquêtes d’Alexandre, où la culture grecque se mêle aux cultures orientales." },
          { mot: "Empire", def: "État vaste réunissant des peuples divers sous une autorité unique." },
          { mot: "Citoyenneté", def: "Ensemble des droits et devoirs liés à l’appartenance à une communauté politique." },
          { mot: "Syncrétisme", def: "Mélange de croyances et de cultes d’origines différentes." },
        ],
        personnages: [
          { nom: "Alexandre le Grand", vie: "−356 à −323", role: "Il conquiert l’Empire perse et ouvre l’époque hellénistique." },
          { nom: "Aristote", vie: "−384 à −322", role: "Philosophe, précepteur d’Alexandre ; son œuvre irrigue la pensée médiévale, chrétienne comme musulmane." },
        ],
        retenir: [
          "La Méditerranée antique est un espace de contacts plus que de frontières.",
          "Athènes et Rome inventent deux façons de penser la citoyenneté.",
          "L’héritage antique est politique, juridique, philosophique et religieux.",
        ],
        quiz: [
          {
            q: "Qu’est-ce que le monde hellénistique ?",
            choix: ["L’empire de Rome", "Le monde né des conquêtes d’Alexandre", "La ligue des cités grecques", "L’empire perse"],
            bonne: 1,
            pourquoi: "Après −323, les royaumes issus du partage de l’empire d’Alexandre diffusent la culture grecque jusqu’en Asie.",
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     III. MOYEN ÂGE
     ══════════════════════════════════════════════════════════════ */
  {
    id: "moyen-age",
    nom: "Moyen Âge",
    titre: "Mille ans<br><em>de chrétientés et d’islam.</em>",
    dates: "476 à 1492",
    debut: 476, fin: 1492, part: 20, teinte: "#7d4a4a",
    resume:
      "Trois civilisations se partagent le pourtour méditerranéen : l’Occident latin, " +
      "l’Empire byzantin et le monde musulman. Elles s’affrontent et commercent. En Occident, " +
      "la seigneurie organise la terre et les hommes ; puis la ville, l’université et l’État " +
      "royal montent en puissance.",
    reperes: [
      { an: 496,  label: "Baptême de Clovis" },
      { an: 622,  label: "Hégire : début du calendrier musulman" },
      { an: 732,  label: "Bataille de Poitiers" },
      { an: 800,  label: "Charlemagne empereur" },
      { an: 843,  label: "Traité de Verdun" },
      { an: 987,  label: "Hugues Capet, roi de France" },
      { an: 1054, label: "Schisme entre Rome et Constantinople" },
      { an: 1066, label: "Conquête de l’Angleterre par Guillaume" },
      { an: 1095, label: "Appel à la première croisade" },
      { an: 1163, label: "Chantier de Notre-Dame de Paris" },
      { an: 1204, label: "Sac de Constantinople par les croisés" },
      { an: 1214, label: "Bataille de Bouvines" },
      { an: 1226, label: "Règne de Louis IX, dit Saint Louis" },
      { an: 1258, label: "Bagdad prise par les Mongols" },
      { an: 1291, label: "Fin des États latins d’Orient" },
      { an: 1337, label: "Début de la guerre de Cent Ans" },
      { an: 1347, label: "La peste noire atteint l’Europe" },
      { an: 1429, label: "Jeanne d’Arc délivre Orléans" },
      { an: 1453, label: "Chute de Constantinople" },
      { an: 1455, label: "Bible imprimée par Gutenberg" },
      { an: 1492, label: "Colomb atteint l’Amérique" },
    ],
    chapitres: [
      {
        id: "ma-byzance-carolingiens",
        titre: "Byzance et l’Europe carolingienne",
        niveaux: ["5e"],
        accroche: "Deux héritiers de Rome, l’un à Constantinople, l’autre à Aix-la-Chapelle.",
        resume:
          "Après 476, l’Empire romain d’Occident disparaît mais son héritage se partage. " +
          "L’Empire byzantin lui survit mille ans à l’Est ; en Occident, Charlemagne fait " +
          "renaître le titre impérial en s’appuyant sur l’Église.",
        parties: [
          {
            titre: "Byzance, l’Empire qui dure",
            points: [
              "L’Empire romain d’Orient, dit byzantin, garde sa capitale Constantinople, son administration et sa fiscalité ; il parle grec et se dit romain.",
              "Justinien (527-565) reconquiert un temps l’Italie et l’Afrique et fait rassembler le droit romain dans le Code justinien.",
              "L’empereur, le basileus, gouverne aussi l’Église ; Sainte-Sophie, achevée en 537, exprime cette alliance du trône et de l’autel.",
            ],
          },
          {
            titre: "Des Francs à Charlemagne",
            points: [
              "Clovis, roi des Francs, se convertit au christianisme (baptême vers 496) : il gagne l’appui des évêques et de l’aristocratie gallo-romaine.",
              "En 800, le pape couronne Charlemagne empereur à Rome : l’Occident se dote à nouveau d’un empereur, mais chrétien et lié à la papauté.",
              "Charlemagne gouverne par les comtes et les missi dominici, et relance écoles et copie des manuscrits : c’est la « renaissance carolingienne ».",
            ],
          },
          {
            titre: "L’éclatement",
            points: [
              "Le traité de Verdun (843) partage l’empire entre les petits-fils de Charlemagne : l’Europe occidentale en garde durablement les contours.",
              "Les raids vikings, hongrois et sarrasins désorganisent le pouvoir royal ; la protection devient locale, entre les mains des seigneurs.",
              "En 987, Hugues Capet est élu roi des Francs : sa dynastie régnera, sous divers noms, jusqu’en 1792.",
            ],
          },
        ],
        dates: [
          { an: 496, label: "Baptême de Clovis" },
          { an: 800, label: "Couronnement impérial de Charlemagne" },
          { an: 843, label: "Traité de Verdun" },
          { an: 987, label: "Hugues Capet roi des Francs" },
          { an: 1054, label: "Schisme entre les Églises d’Orient et d’Occident" },
        ],
        notions: [
          { mot: "Empire byzantin", def: "Empire romain d’Orient, de capitale Constantinople, chrétien et de langue grecque." },
          { mot: "Basileus", def: "Titre de l’empereur byzantin." },
          { mot: "Missi dominici", def: "Envoyés du roi chargés d’inspecter les comtés carolingiens." },
          { mot: "Schisme", def: "Séparation durable au sein d’une religion." },
        ],
        personnages: [
          { nom: "Clovis", vie: "vers 466 à 511", role: "Premier roi franc chrétien, il unifie la Gaule du Nord." },
          { nom: "Justinien", vie: "482 à 565", role: "Empereur byzantin, codificateur du droit romain, bâtisseur de Sainte-Sophie." },
          { nom: "Charlemagne", vie: "742 à 814", role: "Roi des Francs puis empereur d’Occident en 800." },
        ],
        retenir: [
          "L’héritage romain se partage entre Byzance et l’Occident carolingien.",
          "Charlemagne restaure l’Empire en Occident grâce à l’alliance avec la papauté.",
          "Après 843, le pouvoir se morcelle : la voie est ouverte à la société féodale.",
        ],
        quiz: [
          {
            q: "En quelle année Charlemagne est-il couronné empereur ?",
            choix: ["496", "732", "800", "987"],
            bonne: 2,
            pourquoi: "Le pape Léon III le couronne à Rome le jour de Noël 800.",
          },
          {
            q: "Quelle est la capitale de l’Empire byzantin ?",
            choix: ["Rome", "Aix-la-Chapelle", "Constantinople", "Ravenne"],
            bonne: 2,
            pourquoi: "Constantinople, fondée par Constantin, reste capitale jusqu’à sa chute en 1453.",
          },
        ],
      },
      {
        id: "ma-islam",
        titre: "De la naissance de l’islam à la prise de Bagdad",
        niveaux: ["5e"],
        accroche: "En un siècle, une nouvelle religion et un empire d’Espagne jusqu’à l’Indus.",
        resume:
          "Au VIIᵉ siècle, la prédication de Muhammad en Arabie fonde l’islam. Les conquêtes " +
          "arabes bâtissent en un siècle un immense empire, qui devient un foyer majeur de " +
          "commerce, de sciences et d’art, avant de se fragmenter.",
        parties: [
          {
            titre: "Une religion nouvelle",
            points: [
              "Muhammad prêche à La Mecque puis émigre à Médine en 622 : cette Hégire ouvre le calendrier musulman.",
              "Le Coran, complété par les hadiths, fixe la croyance en un dieu unique et les cinq piliers : profession de foi, prière, aumône, jeûne du ramadan, pèlerinage.",
              "À la mort de Muhammad en 632, la succession divise la communauté : de là naîtra la séparation entre sunnites et chiites.",
            ],
          },
          {
            titre: "Un empire en un siècle",
            points: [
              "Les conquêtes portent l’empire de l’Espagne à l’Indus vers 750 ; arrêtées en Occident notamment à Poitiers en 732.",
              "Les califes omeyyades gouvernent depuis Damas, puis les Abbassides depuis Bagdad, fondée en 762.",
              "Les populations conquises gardent souvent leur religion en payant un impôt spécifique ; les conversions sont progressives.",
            ],
          },
          {
            titre: "Une civilisation de villes et de savoirs",
            points: [
              "La ville musulmane s’organise autour de la grande mosquée, du souk et du palais ; Bagdad, Cordoue et Le Caire comptent parmi les plus grandes villes du monde.",
              "Les savants traduisent le grec, l’indien et le persan : algèbre, médecine, astronomie, optique ; le papier vient de Chine.",
              "En 1258, les Mongols prennent Bagdad : le califat abbasside s’effondre, mais le monde musulman se recompose autour d’autres pôles.",
            ],
          },
        ],
        dates: [
          { an: 622,  label: "Hégire : départ de Muhammad pour Médine" },
          { an: 632,  label: "Mort de Muhammad" },
          { an: 732,  label: "Bataille de Poitiers" },
          { an: 762,  label: "Fondation de Bagdad" },
          { an: 1258, label: "Prise de Bagdad par les Mongols" },
        ],
        notions: [
          { mot: "Islam", def: "Religion monothéiste fondée sur la prédication de Muhammad et le Coran." },
          { mot: "Hégire", def: "Départ de Muhammad vers Médine en 622, point de départ du calendrier musulman." },
          { mot: "Calife", def: "Successeur de Muhammad à la tête de la communauté, chef politique et religieux." },
          { mot: "Mosquée", def: "Lieu de prière des musulmans." },
          { mot: "Souk", def: "Marché de la ville musulmane." },
        ],
        personnages: [
          { nom: "Muhammad", vie: "vers 570 à 632", role: "Prophète de l’islam, fondateur de la communauté de Médine." },
          { nom: "Haroun al-Rachid", vie: "766 à 809", role: "Calife abbasside, contemporain de Charlemagne ; Bagdad est alors à son apogée." },
          { nom: "Al-Khwarizmi", vie: "vers 780 à 850", role: "Mathématicien de Bagdad : son nom a donné « algorithme », son livre « algèbre »." },
        ],
        retenir: [
          "L’islam naît en Arabie au VIIᵉ siècle ; 622 ouvre le calendrier musulman.",
          "Les conquêtes bâtissent en un siècle un empire de l’Espagne à l’Indus.",
          "Bagdad et Cordoue sont des foyers majeurs de commerce et de sciences.",
        ],
        quiz: [
          {
            q: "Que commémore l’an 622 du calendrier musulman ?",
            choix: ["La naissance de Muhammad", "L’Hégire, départ vers Médine", "La prise de Bagdad", "La bataille de Poitiers"],
            bonne: 1,
            pourquoi: "L’Hégire marque la fondation de la première communauté musulmane organisée, à Médine.",
          },
          {
            q: "Qui gouverne l’empire depuis Bagdad à partir du VIIIᵉ siècle ?",
            choix: ["Les Omeyyades", "Les Abbassides", "Les Mongols", "Les Ottomans"],
            bonne: 1,
            pourquoi: "Les Abbassides déplacent le centre de l’empire de Damas vers Bagdad, fondée en 762.",
          },
        ],
      },
      {
        id: "ma-seigneurie",
        titre: "L’ordre seigneurial : la domination des campagnes",
        niveaux: ["5e"],
        accroche: "Neuf habitants sur dix travaillent la terre — et presque aucun ne la possède.",
        resume:
          "Dans l’Occident médiéval, la terre est partagée en seigneuries. Le seigneur protège, " +
          "commande et prélève ; les paysans cultivent, paient et obéissent. L’Église encadre " +
          "toute la société, du baptême à la sépulture.",
        parties: [
          {
            titre: "La seigneurie",
            points: [
              "La seigneurie se divise en réserve, exploitée pour le seigneur, et tenures, concédées aux paysans contre redevances.",
              "Les paysans versent le cens, le champart, les banalités (moulin, four, pressoir), et doivent des corvées ; l’Église prélève la dîme.",
              "Les serfs sont attachés à la terre et ne peuvent la quitter librement ; les vilains sont des paysans libres, mais soumis aux mêmes prélèvements.",
            ],
          },
          {
            titre: "La féodalité",
            points: [
              "Le vassal prête hommage à son seigneur et lui doit aide et conseil ; il reçoit en échange un fief, le plus souvent une terre.",
              "Le château, d’abord de bois sur motte, devient de pierre : il protège et surveille.",
              "Le chevalier est adoubé ; l’Église tente d’encadrer sa violence par la paix de Dieu et la trêve de Dieu.",
            ],
          },
          {
            titre: "Croissance et encadrement",
            points: [
              "Du XIᵉ au XIIIᵉ siècle, défrichements, charrue à versoir et assolement triennal font croître les récoltes et la population.",
              "La paroisse rythme la vie : sacrements, fêtes, dîme, cimetière ; les monastères (Cluny, Cîteaux) défrichent, copient et prient.",
              "Les églises romanes puis gothiques transforment le paysage : Notre-Dame de Paris est mise en chantier en 1163.",
            ],
          },
        ],
        dates: [
          { an: 910,  label: "Fondation de l’abbaye de Cluny" },
          { an: 1163, label: "Début du chantier de Notre-Dame de Paris" },
          { an: 1200, label: "Apogée des défrichements en Occident" },
        ],
        notions: [
          { mot: "Seigneurie", def: "Domaine sur lequel un seigneur exerce son autorité et prélève des redevances." },
          { mot: "Féodalité", def: "Système de liens personnels entre seigneurs et vassaux, fondé sur l’hommage et le fief." },
          { mot: "Fief", def: "Terre concédée par un seigneur à son vassal en échange de sa fidélité." },
          { mot: "Serf", def: "Paysan attaché à la terre du seigneur, qui ne peut la quitter librement." },
          { mot: "Dîme", def: "Impôt d’environ un dixième des récoltes versé à l’Église." },
          { mot: "Banalités", def: "Taxes payées pour l’usage obligatoire du moulin, du four et du pressoir du seigneur." },
        ],
        personnages: [
          { nom: "Bernard de Clairvaux", vie: "1090 à 1153", role: "Moine cistercien, prédicateur de la deuxième croisade, figure majeure de l’Église du XIIᵉ siècle." },
        ],
        retenir: [
          "La société médiévale est ordonnée autour de la seigneurie et du lien vassalique.",
          "Les paysans, immense majorité, supportent redevances seigneuriales et dîme.",
          "L’Église encadre les esprits, les fêtes, le calendrier et le paysage.",
        ],
        quiz: [
          {
            q: "Qu’est-ce qu’un fief ?",
            choix: ["Un impôt versé à l’Église", "Une terre donnée à un vassal en échange de sa fidélité", "Un tribunal seigneurial", "Une taxe sur le moulin"],
            bonne: 1,
            pourquoi: "Le fief est la contrepartie matérielle de l’hommage : il fonde le lien féodal.",
          },
          {
            q: "Qui perçoit la dîme ?",
            choix: ["Le roi", "Le seigneur", "L’Église", "La ville"],
            bonne: 2,
            pourquoi: "La dîme est l’impôt ecclésiastique, distinct des redevances seigneuriales.",
          },
        ],
      },
      {
        id: "ma-villes",
        titre: "L’essor des villes et du commerce",
        niveaux: ["5e"],
        accroche: "« L’air de la ville rend libre » — un proverbe médiéval qui dit une révolution.",
        resume:
          "À partir du XIᵉ siècle, la croissance agricole nourrit des villes qui grandissent, " +
          "s’émancipent et s’enrichissent. Marchands et artisans y forment une société nouvelle, " +
          "avec ses métiers, ses foires, ses cathédrales et ses universités.",
        parties: [
          {
            titre: "Villes et libertés",
            points: [
              "Les bourgeois obtiennent des chartes de franchises : droit de justice, de marché, d’élire des échevins ou un maire.",
              "La ville se dote de remparts, d’un beffroi, d’une halle : autant de signes visibles de son autonomie.",
              "Le serf réfugié en ville un an et un jour devient généralement libre.",
            ],
          },
          {
            titre: "Marchands et métiers",
            points: [
              "Les foires de Champagne relient l’Italie et la Flandre ; la Hanse domine le commerce de la mer du Nord et de la Baltique.",
              "Les banquiers italiens inventent la lettre de change et la comptabilité en partie double.",
              "Les métiers s’organisent en corporations qui fixent règles, apprentissage et qualité.",
            ],
          },
          {
            titre: "Cathédrales et universités",
            points: [
              "L’art gothique — croisée d’ogives, arcs-boutants, vitraux — permet des édifices plus hauts et plus lumineux, financés par les villes.",
              "Les universités (Bologne, Paris, Oxford) naissent aux XIIᵉ-XIIIᵉ siècles et forment juristes, médecins et théologiens.",
              "Les ordres mendiants, franciscains et dominicains, prêchent dans ces villes nouvelles.",
            ],
          },
        ],
        dates: [
          { an: 1088, label: "Université de Bologne, la plus ancienne d’Europe" },
          { an: 1150, label: "Essor des foires de Champagne" },
          { an: 1200, label: "Université de Paris reconnue par le roi" },
          { an: 1250, label: "Apogée des grands chantiers gothiques" },
        ],
        notions: [
          { mot: "Bourgeois", def: "Habitant d’un bourg ou d’une ville, doté de libertés reconnues." },
          { mot: "Charte de franchises", def: "Document accordant des libertés à une ville." },
          { mot: "Corporation", def: "Association réglementant un métier dans une ville." },
          { mot: "Université", def: "Communauté de maîtres et d’étudiants disposant de statuts propres." },
          { mot: "Gothique", def: "Art architectural des XIIᵉ-XVᵉ siècles, aux voûtes sur croisée d’ogives et aux grands vitraux." },
        ],
        personnages: [
          { nom: "Jacques Cœur", vie: "vers 1400 à 1456", role: "Grand marchand de Bourges, argentier de Charles VII : la figure du négociant enrichi." },
        ],
        retenir: [
          "L’essor agricole nourrit la croissance des villes à partir du XIᵉ siècle.",
          "Les villes arrachent des libertés et deviennent des centres de commerce et de savoir.",
          "Cathédrales gothiques et universités sont les monuments de cette société urbaine.",
        ],
        quiz: [
          {
            q: "Qu’obtiennent les villes par une charte de franchises ?",
            choix: ["Une exemption de dîme", "Des libertés d’administration et de justice", "Le droit de lever une armée royale", "La propriété des seigneuries voisines"],
            bonne: 1,
            pourquoi: "La charte reconnaît l’autonomie de la ville face au seigneur : justice, marché, magistrats élus.",
          },
        ],
      },
      {
        id: "ma-etat-royal",
        titre: "L’affirmation de l’État royal en France",
        niveaux: ["5e"],
        accroche: "Comment le roi de France, seigneur parmi d’autres, devient le maître du royaume.",
        resume:
          "Des Capétiens de l’an mil aux Valois, le roi de France agrandit son domaine, se dote " +
          "d’une administration, d’impôts et d’une armée permanente. La guerre de Cent Ans, en " +
          "l’ébranlant, achève de le rendre indispensable.",
        parties: [
          {
            titre: "Agrandir et gouverner",
            points: [
              "Philippe Auguste reprend les terres des Plantagenêts et l’emporte à Bouvines en 1214 ; il installe baillis et sénéchaux pour représenter le roi.",
              "Louis IX (Saint Louis) développe la justice royale et le droit d’appel : on peut faire appel au roi contre son seigneur.",
              "Philippe le Bel s’entoure de légistes, réunit les premiers états généraux en 1302 et affronte le pape.",
            ],
          },
          {
            titre: "La guerre de Cent Ans",
            points: [
              "En 1337, le roi d’Angleterre revendique la couronne de France : commence un conflit de 116 ans, entrecoupé de trêves.",
              "Défaites françaises (Crécy 1346, Azincourt 1415), peste noire à partir de 1347, révoltes paysannes et urbaines : le royaume vacille.",
              "Jeanne d’Arc fait lever le siège d’Orléans en 1429 et conduire Charles VII au sacre à Reims ; la guerre s’achève en 1453.",
            ],
          },
          {
            titre: "Un État qui reste",
            points: [
              "L’impôt permanent (taille) et l’armée permanente sont établis au milieu du XVᵉ siècle.",
              "Le roi est sacré à Reims : la monarchie se dit voulue de Dieu.",
              "Louis XI achève l’unification en récupérant la Bourgogne ; le royaume prend à peu près la forme qu’on lui connaît.",
            ],
          },
        ],
        dates: [
          { an: 1214, label: "Bataille de Bouvines" },
          { an: 1302, label: "Premiers états généraux" },
          { an: 1337, label: "Début de la guerre de Cent Ans" },
          { an: 1347, label: "Peste noire" },
          { an: 1429, label: "Jeanne d’Arc à Orléans" },
          { an: 1453, label: "Fin de la guerre de Cent Ans" },
        ],
        notions: [
          { mot: "Domaine royal", def: "Territoire gouverné directement par le roi." },
          { mot: "Bailli", def: "Officier chargé de représenter le roi dans une circonscription." },
          { mot: "Sacre", def: "Cérémonie religieuse qui fait du roi l’élu de Dieu, à Reims." },
          { mot: "Taille", def: "Impôt royal direct, permanent à partir de 1439." },
          { mot: "États généraux", def: "Assemblée des représentants des trois ordres, convoquée par le roi." },
        ],
        personnages: [
          { nom: "Philippe Auguste", vie: "1165 à 1223", role: "Il quadruple le domaine royal et fonde l’administration monarchique." },
          { nom: "Jeanne d’Arc", vie: "1412 à 1431", role: "Paysanne lorraine ; elle relance la cause de Charles VII avant d’être brûlée à Rouen." },
          { nom: "Louis XI", vie: "1423 à 1483", role: "Roi patient et retors, il achève l’unification territoriale du royaume." },
        ],
        retenir: [
          "Le roi passe de suzerain à souverain : justice, impôt, armée deviennent royaux.",
          "La guerre de Cent Ans (1337-1453) manque emporter la monarchie et finit par la renforcer.",
          "Le sacre et la loi de succession fondent la légitimité du roi de France.",
        ],
        quiz: [
          {
            q: "Quelle bataille Philippe Auguste remporte-t-il en 1214 ?",
            choix: ["Azincourt", "Bouvines", "Crécy", "Poitiers"],
            bonne: 1,
            pourquoi: "Bouvines assoit l’autorité du roi de France face à ses rivaux, dont l’empereur et le roi d’Angleterre.",
          },
          {
            q: "Quelles sont les dates de la guerre de Cent Ans ?",
            choix: ["1214-1314", "1337-1453", "1348-1453", "1429-1492"],
            bonne: 1,
            pourquoi: "Elle dure en réalité 116 ans, de la revendication anglaise à la reprise de la Guyenne.",
          },
        ],
      },
      {
        id: "ma-contacts",
        titre: "Chrétiens et musulmans : croisades, échanges, Reconquista",
        niveaux: ["5e"],
        accroche: "On s’y est fait la guerre pendant deux siècles — et on y a échangé sans cesse.",
        resume:
          "La Méditerranée médiévale est à la fois un front et un carrefour. Croisades et " +
          "Reconquista y font couler le sang ; en même temps circulent les marchandises, les " +
          "techniques, les textes antiques et les savoirs.",
        parties: [
          {
            titre: "Les croisades",
            points: [
              "En 1095, le pape Urbain II appelle à délivrer Jérusalem : la première croisade prend la ville en 1099 et fonde les États latins d’Orient.",
              "Sept autres croisades suivent, avec des motifs mêlés : foi, pèlerinage, butin, terres, prestige.",
              "En 1204, les croisés détournés pillent Constantinople, ville chrétienne : le fossé avec Byzance devient irréparable. En 1291, la chute de Saint-Jean-d’Acre met fin aux États latins.",
            ],
          },
          {
            titre: "La Reconquista",
            points: [
              "Les royaumes chrétiens du nord de l’Espagne reconquièrent peu à peu la péninsule : Tolède en 1085, Cordoue en 1236, Séville en 1248.",
              "Grenade, dernier royaume musulman, tombe en 1492 ; juifs et musulmans sont ensuite expulsés ou contraints à la conversion.",
              "Al-Andalus avait été un foyer de traduction : c’est par Tolède que l’Occident redécouvre Aristote.",
            ],
          },
          {
            titre: "Des échanges continus",
            points: [
              "Venise et Gênes commercent avec l’Orient : épices, soie, alun, esclaves ; le papier, la boussole et les chiffres dits arabes gagnent l’Europe.",
              "Les savants latins traduisent l’arabe, qui avait traduit le grec : médecine d’Avicenne, optique d’Ibn al-Haytham, algèbre.",
              "En 1453, la prise de Constantinople par les Ottomans ferme une route commerciale majeure — l’une des raisons de chercher la route des Indes par l’ouest.",
            ],
          },
        ],
        dates: [
          { an: 1095, label: "Appel à la première croisade" },
          { an: 1099, label: "Prise de Jérusalem par les croisés" },
          { an: 1204, label: "Sac de Constantinople" },
          { an: 1291, label: "Fin des États latins d’Orient" },
          { an: 1453, label: "Prise de Constantinople par les Ottomans" },
          { an: 1492, label: "Chute de Grenade" },
        ],
        notions: [
          { mot: "Croisade", def: "Expédition militaire chrétienne, présentée comme un pèlerinage armé." },
          { mot: "Reconquista", def: "Reconquête de la péninsule Ibérique par les royaumes chrétiens." },
          { mot: "Al-Andalus", def: "Nom donné à l’Espagne musulmane." },
          { mot: "Comptoir", def: "Établissement commercial installé en pays étranger." },
        ],
        personnages: [
          { nom: "Saladin", vie: "1138 à 1193", role: "Sultan d’Égypte et de Syrie ; il reprend Jérusalem en 1187." },
          { nom: "Urbain II", vie: "vers 1042 à 1099", role: "Pape ; son appel de Clermont en 1095 lance la première croisade." },
          { nom: "Averroès", vie: "1126 à 1198", role: "Philosophe et médecin de Cordoue, commentateur d’Aristote, lu dans toute l’Europe latine." },
        ],
        retenir: [
          "Croisades et Reconquista sont des conflits religieux autant que politiques.",
          "Malgré les guerres, la Méditerranée reste un espace d’échanges commerciaux et savants.",
          "1453 et 1492 referment le Moyen Âge et ouvrent l’expansion européenne.",
        ],
        quiz: [
          {
            q: "Qui lance l’appel à la première croisade en 1095 ?",
            choix: ["Charlemagne", "Le pape Urbain II", "Saint Louis", "Saladin"],
            bonne: 1,
            pourquoi: "Au concile de Clermont, Urbain II appelle les chrétiens d’Occident à délivrer Jérusalem.",
          },
          {
            q: "Que se passe-t-il en 1453 ?",
            choix: ["Chute de Grenade", "Prise de Constantinople par les Ottomans", "Fin des croisades", "Découverte de l’Amérique"],
            bonne: 1,
            pourquoi: "La chute de Constantinople met fin à l’Empire byzantin, mille ans après la chute de Rome.",
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     IV. TEMPS MODERNES
     ══════════════════════════════════════════════════════════════ */
  {
    id: "temps-modernes",
    nom: "Temps modernes",
    titre: "Le monde s’élargit,<br><em>l’État se resserre.</em>",
    dates: "1492 à 1715",
    debut: 1492, fin: 1715, part: 16, teinte: "#4f6b52",
    resume:
      "L’Europe découvre d’autres continents et les soumet. Les humanistes rouvrent les textes " +
      "anciens, l’imprimerie diffuse les idées, la chrétienté se déchire entre catholiques et " +
      "protestants, et le roi finit par se dire absolu.",
    reperes: [
      { an: 1492, label: "Colomb atteint l’Amérique" },
      { an: 1494, label: "Traité de Tordesillas" },
      { an: 1515, label: "Marignan" },
      { an: 1517, label: "Les 95 thèses de Luther" },
      { an: 1519, label: "Charles Quint empereur" },
      { an: 1522, label: "Premier tour du monde (Magellan)" },
      { an: 1539, label: "Ordonnance de Villers-Cotterêts" },
      { an: 1543, label: "Copernic : la Terre tourne" },
      { an: 1572, label: "Massacre de la Saint-Barthélemy" },
      { an: 1598, label: "Édit de Nantes" },
      { an: 1610, label: "Assassinat d’Henri IV" },
      { an: 1643, label: "Louis XIV roi à cinq ans" },
      { an: 1661, label: "Règne personnel de Louis XIV" },
      { an: 1682, label: "La cour s’installe à Versailles" },
      { an: 1685, label: "Code noir ; révocation de l’édit de Nantes" },
      { an: 1715, label: "Mort de Louis XIV" },
    ],
    chapitres: [
      {
        id: "tm-decouvertes",
        titre: "Grandes découvertes et premiers empires coloniaux",
        niveaux: ["5e", "2de"],
        accroche: "Chercher les Indes, trouver un continent, et bouleverser deux mondes.",
        resume:
          "Portugais et Espagnols ouvrent des routes maritimes vers l’Asie et l’Amérique. " +
          "La conquête détruit les empires amérindiens, l’argent afflue en Europe, et un " +
          "commerce triangulaire fondé sur la traite se met en place.",
        parties: [
          {
            titre: "Partir",
            points: [
              "Motifs mêlés : contourner les intermédiaires du commerce des épices, trouver de l’or, convertir, savoir.",
              "Progrès techniques : caravelle, boussole, astrolabe, portulans ; l’État portugais soutient méthodiquement l’exploration.",
              "1488 : Dias au cap de Bonne-Espérance ; 1492 : Colomb en Amérique ; 1498 : Vasco de Gama aux Indes ; 1519-1522 : premier tour du monde par l’expédition de Magellan.",
            ],
          },
          {
            titre: "Conquérir",
            points: [
              "Cortés abat l’empire aztèque (1521), Pizarro l’empire inca (1533) : supériorité des armes et des chevaux, alliances locales, et surtout microbes.",
              "Les maladies venues d’Europe (variole, typhus) tuent une part immense des populations amérindiennes : c’est le facteur décisif de l’effondrement.",
              "Le traité de Tordesillas (1494) partage le monde à découvrir entre Portugal et Espagne ; l’encomienda soumet les Amérindiens au travail forcé.",
            ],
          },
          {
            titre: "Un monde relié, un monde exploité",
            points: [
              "Échange colombien : maïs, pomme de terre, tomate, cacao vers l’Europe ; blé, canne à sucre, chevaux vers l’Amérique.",
              "L’argent de Potosí inonde l’Europe et alimente l’inflation ; les plantations réclament une main-d’œuvre massive.",
              "Le commerce triangulaire se met en place : produits manufacturés vers l’Afrique, captifs déportés vers l’Amérique, denrées coloniales vers l’Europe.",
            ],
          },
        ],
        dates: [
          { an: 1492, label: "Colomb atteint les Antilles" },
          { an: 1494, label: "Traité de Tordesillas" },
          { an: 1498, label: "Vasco de Gama arrive à Calicut" },
          { an: 1521, label: "Chute de l’empire aztèque" },
          { an: 1522, label: "Retour du premier tour du monde" },
          { an: 1533, label: "Chute de l’empire inca" },
        ],
        notions: [
          { mot: "Colonie", def: "Territoire conquis, occupé et exploité par un État étranger." },
          { mot: "Conquistador", def: "Conquérant espagnol de l’Amérique au XVIᵉ siècle." },
          { mot: "Commerce triangulaire", def: "Circuit reliant l’Europe, l’Afrique et l’Amérique, fondé sur la traite des esclaves." },
          { mot: "Traite atlantique", def: "Déportation d’Africains réduits en esclavage vers les Amériques." },
          { mot: "Métropole", def: "État qui possède et gouverne des colonies." },
        ],
        personnages: [
          { nom: "Christophe Colomb", vie: "1451 à 1506", role: "Navigateur génois au service de l’Espagne ; il atteint l’Amérique en cherchant l’Asie." },
          { nom: "Hernán Cortés", vie: "1485 à 1547", role: "Conquistador de l’empire aztèque." },
          { nom: "Bartolomé de Las Casas", vie: "1484 à 1566", role: "Dominicain qui dénonce le traitement infligé aux Amérindiens." },
        ],
        retenir: [
          "Les Européens ouvrent des routes océaniques et bâtissent les premiers empires coloniaux.",
          "La conquête entraîne un effondrement démographique amérindien, surtout par les maladies.",
          "La traite atlantique organise la déportation de millions d’Africains.",
        ],
        quiz: [
          {
            q: "Que partage le traité de Tordesillas en 1494 ?",
            choix: ["Les colonies françaises et anglaises", "Les terres à découvrir entre Espagne et Portugal", "L’Amérique entre Espagne et Angleterre", "L’Afrique entre puissances européennes"],
            bonne: 1,
            pourquoi: "Une ligne tracée dans l’Atlantique attribue les futures découvertes à l’Espagne à l’ouest, au Portugal à l’est.",
          },
          {
            q: "Quelle est la principale cause de l’effondrement démographique amérindien ?",
            choix: ["Les batailles", "Les maladies importées d’Europe", "Les famines volontaires", "L’émigration"],
            bonne: 1,
            pourquoi: "Variole et typhus, contre lesquels les populations n’avaient aucune immunité, ont tué bien plus que les armes.",
          },
        ],
      },
      {
        id: "tm-humanisme",
        titre: "Humanisme, Renaissance et Réformes",
        niveaux: ["5e", "2de"],
        accroche: "L’imprimerie met des idées neuves dans toutes les mains — et brise l’unité chrétienne.",
        resume:
          "Les humanistes replacent l’homme et les textes anciens au centre du savoir. " +
          "L’imprimerie diffuse leurs idées, ainsi que celles de Luther et Calvin : la " +
          "chrétienté occidentale se divise, et la France s’enfonce dans les guerres de Religion.",
        parties: [
          {
            titre: "L’humanisme et la Renaissance",
            points: [
              "Les humanistes reviennent aux textes originaux, grecs, latins et hébreux, et croient à l’éducation : Érasme, Rabelais, Montaigne.",
              "L’imprimerie de Gutenberg (vers 1455) fait chuter le coût du livre : les idées circulent vite et loin.",
              "En art, perspective, anatomie et antique inspirent Léonard de Vinci, Michel-Ange, Raphaël ; les rois de France font venir cet art d’Italie.",
            ],
          },
          {
            titre: "La Réforme",
            points: [
              "En 1517, Luther conteste les indulgences dans ses 95 thèses ; il affirme le salut par la foi seule et l’autorité de la seule Bible.",
              "Calvin organise à Genève une Église réformée rigoureuse ; l’Angleterre se sépare de Rome sous Henri VIII.",
              "L’Église catholique répond par le concile de Trente (1545-1563) : réforme du clergé, catéchisme, séminaires — c’est la Contre-Réforme.",
            ],
          },
          {
            titre: "Les guerres de Religion en France",
            points: [
              "Catholiques et protestants (huguenots) s’affrontent à partir de 1562 ; le massacre de la Saint-Barthélemy en 1572 fait des milliers de morts.",
              "Henri IV, protestant devenu catholique, met fin au conflit ; l’édit de Nantes (1598) accorde aux protestants la liberté de culte encadrée.",
              "Louis XIV révoque cet édit en 1685 : des centaines de milliers de protestants s’exilent.",
            ],
          },
        ],
        dates: [
          { an: 1455, label: "Bible imprimée par Gutenberg" },
          { an: 1517, label: "95 thèses de Luther" },
          { an: 1545, label: "Ouverture du concile de Trente" },
          { an: 1572, label: "Massacre de la Saint-Barthélemy" },
          { an: 1598, label: "Édit de Nantes" },
          { an: 1685, label: "Révocation de l’édit de Nantes" },
        ],
        notions: [
          { mot: "Humanisme", def: "Mouvement intellectuel qui place l’homme, l’étude des textes anciens et l’éducation au centre." },
          { mot: "Réforme", def: "Mouvement de contestation de l’Église catholique aboutissant aux Églises protestantes." },
          { mot: "Contre-Réforme", def: "Réponse catholique à la Réforme, définie au concile de Trente." },
          { mot: "Huguenot", def: "Nom donné aux protestants français." },
          { mot: "Édit de tolérance", def: "Texte royal accordant à une minorité religieuse le droit de pratiquer son culte." },
        ],
        personnages: [
          { nom: "Martin Luther", vie: "1483 à 1546", role: "Moine allemand à l’origine de la Réforme protestante." },
          { nom: "Érasme", vie: "1466 à 1536", role: "Humaniste hollandais, partisan d’une réforme sans rupture." },
          { nom: "Henri IV", vie: "1553 à 1610", role: "Premier roi Bourbon ; il pacifie le royaume par l’édit de Nantes." },
        ],
        retenir: [
          "L’humanisme et l’imprimerie renouvellent le savoir et sa diffusion.",
          "La Réforme brise l’unité religieuse de l’Occident à partir de 1517.",
          "En France, l’édit de Nantes (1598) apaise, sa révocation (1685) rallume.",
        ],
        quiz: [
          {
            q: "Que conteste Luther en 1517 ?",
            choix: ["Le pouvoir du roi", "La vente des indulgences", "La traduction de la Bible", "Le concile de Trente"],
            bonne: 1,
            pourquoi: "Ses 95 thèses attaquent les indulgences, et par là le rôle de l’Église dans le salut.",
          },
          {
            q: "Qu’accorde l’édit de Nantes ?",
            choix: ["L’égalité entre les religions", "La liberté de culte encadrée aux protestants", "L’interdiction du protestantisme", "La création de l’Église anglicane"],
            bonne: 1,
            pourquoi: "Il accorde des places de sûreté et une liberté de culte limitée à certains lieux : une tolérance, pas une égalité.",
          },
        ],
      },
      {
        id: "tm-absolutisme",
        titre: "Du prince de la Renaissance au roi absolu",
        niveaux: ["5e", "2de"],
        accroche: "Un roi qui gouverne seul, et qui s’arrange pour que cela se voie.",
        resume:
          "De François Iᵉʳ à Louis XIV, la monarchie française concentre les pouvoirs : " +
          "administration, fiscalité, armée, langue, religion et image. Versailles en est " +
          "la mise en scène ; l’Angleterre, au même moment, prend le chemin inverse.",
        parties: [
          {
            titre: "Le prince de la Renaissance",
            points: [
              "François Iᵉʳ est un roi guerrier (Marignan, 1515) et mécène : il attire Léonard de Vinci et bâtit Chambord.",
              "L’ordonnance de Villers-Cotterêts (1539) impose le français dans les actes de justice et crée les registres de baptême.",
              "Le concordat de Bologne (1516) lui donne la nomination des évêques : l’Église de France dépend du roi.",
            ],
          },
          {
            titre: "L’absolutisme de Louis XIV",
            points: [
              "À partir de 1661, Louis XIV gouverne sans Premier ministre : « L’État, c’est moi » résume, même s’il ne l’a peut-être jamais dit.",
              "Les intendants relaient le pouvoir en province ; Colbert développe manufactures, marine et commerce (mercantilisme).",
              "Versailles, où la cour s’installe en 1682, domestique la noblesse par l’étiquette ; l’art officiel diffuse l’image du Roi-Soleil.",
            ],
          },
          {
            titre: "Limites et contre-modèle",
            points: [
              "Guerres continuelles, impôts lourds, famines : le règne s’achève dans l’épuisement en 1715.",
              "Le Code noir (1685) règle l’esclavage dans les colonies : l’absolutisme légifère aussi sur la servitude.",
              "En Angleterre, les révolutions du XVIIᵉ siècle aboutissent en 1689 au Bill of Rights : le roi y gouverne avec le Parlement — c’est une monarchie parlementaire.",
            ],
          },
        ],
        dates: [
          { an: 1515, label: "Marignan, avènement de François Iᵉʳ" },
          { an: 1539, label: "Ordonnance de Villers-Cotterêts" },
          { an: 1661, label: "Début du règne personnel de Louis XIV" },
          { an: 1682, label: "Installation de la cour à Versailles" },
          { an: 1685, label: "Code noir" },
          { an: 1689, label: "Bill of Rights en Angleterre" },
        ],
        notions: [
          { mot: "Monarchie absolue", def: "Régime où le roi détient tous les pouvoirs, sans les partager avec une assemblée." },
          { mot: "Droit divin", def: "Idée selon laquelle le roi tient son pouvoir de Dieu et n’en répond que devant lui." },
          { mot: "Intendant", def: "Représentant du roi dans une province, chargé de la justice, de la police et des finances." },
          { mot: "Mercantilisme", def: "Politique visant à enrichir l’État par l’exportation et le contrôle du commerce." },
          { mot: "Monarchie parlementaire", def: "Régime où le roi gouverne avec un parlement qui vote les lois et l’impôt." },
        ],
        personnages: [
          { nom: "François Iᵉʳ", vie: "1494 à 1547", role: "Roi guerrier et mécène, il impose le français dans l’administration." },
          { nom: "Louis XIV", vie: "1638 à 1715", role: "Roi pendant 72 ans, figure de l’absolutisme et bâtisseur de Versailles." },
          { nom: "Jean-Baptiste Colbert", vie: "1619 à 1683", role: "Contrôleur général des finances, artisan du mercantilisme français." },
        ],
        retenir: [
          "L’État royal concentre justice, impôt, armée, langue et religion.",
          "Versailles est un instrument politique autant qu’un palais.",
          "Le modèle anglais, parlementaire, s’oppose dès 1689 au modèle absolutiste.",
        ],
        quiz: [
          {
            q: "Qu’impose l’ordonnance de Villers-Cotterêts en 1539 ?",
            choix: ["La religion catholique", "Le français dans les actes de justice", "Le Code noir", "La création des intendants"],
            bonne: 1,
            pourquoi: "Elle remplace le latin par le français et impose la tenue de registres de baptême : l’État se dote d’une langue et d’archives.",
          },
          {
            q: "Que met en place le Bill of Rights de 1689 ?",
            choix: ["La monarchie absolue en Angleterre", "La monarchie parlementaire", "La République anglaise", "L’union avec l’Écosse"],
            bonne: 1,
            pourquoi: "Le roi ne peut plus lever d’impôt ni suspendre les lois sans le Parlement.",
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     V. LUMIÈRES ET RÉVOLUTIONS
     ══════════════════════════════════════════════════════════════ */
  {
    id: "revolutions",
    nom: "Lumières et révolutions",
    titre: "La nation naît,<br><em>l’ancien monde tombe.</em>",
    dates: "1715 à 1815",
    debut: 1715, fin: 1815, part: 12, teinte: "#8f2f22",
    resume:
      "Les Lumières mettent la raison et les droits naturels au centre. En dix ans, la France " +
      "change de régime, de société, de droit et jusqu’à son calendrier — puis se donne un " +
      "empereur qui exporte et trahit tout à la fois cet héritage.",
    reperes: [
      { an: 1715, label: "Mort de Louis XIV, la Régence" },
      { an: 1748, label: "Montesquieu, De l’esprit des lois" },
      { an: 1751, label: "Premier volume de l’Encyclopédie" },
      { an: 1763, label: "Traité de Paris : la France perd le Canada" },
      { an: 1776, label: "Indépendance des États-Unis" },
      { an: 1789, label: "États généraux, 14 juillet, Déclaration" },
      { an: 1791, label: "Première Constitution française" },
      { an: 1792, label: "Valmy, proclamation de la République" },
      { an: 1793, label: "Exécution de Louis XVI, la Terreur" },
      { an: 1794, label: "Première abolition de l’esclavage" },
      { an: 1799, label: "18 Brumaire : Bonaparte prend le pouvoir" },
      { an: 1802, label: "Rétablissement de l’esclavage" },
      { an: 1804, label: "Code civil, Empire de Napoléon Iᵉʳ" },
      { an: 1805, label: "Austerlitz" },
      { an: 1812, label: "Campagne de Russie" },
      { an: 1815, label: "Waterloo, congrès de Vienne" },
    ],
    chapitres: [
      {
        id: "rev-negoce",
        titre: "Bourgeoisies marchandes, négoce international et traite",
        niveaux: ["4e", "2de"],
        accroche: "Le sucre des Antilles a financé les plus beaux hôtels particuliers de Bordeaux.",
        resume:
          "Au XVIIIᵉ siècle, le commerce maritime explose. Les ports atlantiques s’enrichissent " +
          "d’un négoce colonial fondé sur les plantations et la traite. Une bourgeoisie " +
          "puissante émerge, sans pouvoir politique à la mesure de sa fortune.",
        parties: [
          {
            titre: "Le grand commerce",
            points: [
              "Nantes, Bordeaux, La Rochelle, Liverpool, Bristol vivent du commerce colonial : sucre, café, indigo, coton, tabac.",
              "L’armateur finance et organise le voyage ; le négociant achète, revend, assure ; banques et compagnies de commerce se développent.",
              "Le trafic passe par des circuits triangulaires, mais aussi par un commerce « en droiture » entre métropole et colonies.",
            ],
          },
          {
            titre: "La traite et l’esclavage",
            points: [
              "Environ 12 millions d’Africains sont déportés vers les Amériques du XVIᵉ au XIXᵉ siècle ; plus d’un million meurent pendant la traversée.",
              "Le Code noir (1685) fait de l’esclave un bien meuble tout en imposant un baptême : le droit organise la déshumanisation.",
              "Les révoltes sont constantes : marronnage, insurrections, et à Saint-Domingue en 1791 une révolution qui aboutira à l’indépendance d’Haïti en 1804.",
            ],
          },
          {
            titre: "Une société qui bouge",
            points: [
              "La bourgeoisie marchande s’enrichit, achète des charges et des terres, mais reste écartée des honneurs réservés à la noblesse.",
              "Les Lumières condamnent progressivement l’esclavage ; la Société des amis des Noirs est fondée en 1788.",
              "Ce décalage entre puissance économique et exclusion politique nourrit la crise de 1789.",
            ],
          },
        ],
        dates: [
          { an: 1685, label: "Code noir" },
          { an: 1717, label: "Essor du port de Nantes dans la traite" },
          { an: 1788, label: "Société des amis des Noirs" },
          { an: 1791, label: "Révolte des esclaves de Saint-Domingue" },
          { an: 1804, label: "Indépendance d’Haïti" },
        ],
        notions: [
          { mot: "Négociant", def: "Marchand qui fait du commerce en gros, souvent international." },
          { mot: "Armateur", def: "Personne qui équipe et exploite un navire de commerce." },
          { mot: "Plantation", def: "Grande exploitation coloniale de culture d’exportation, fondée sur le travail servile." },
          { mot: "Marronnage", def: "Fuite d’esclaves hors des plantations pour vivre libres." },
          { mot: "Abolitionnisme", def: "Combat pour la suppression de la traite puis de l’esclavage." },
        ],
        personnages: [
          { nom: "Toussaint Louverture", vie: "1743 à 1803", role: "Ancien esclave, chef de la révolution de Saint-Domingue ; mort en captivité en France." },
          { nom: "Condorcet", vie: "1743 à 1794", role: "Philosophe et mathématicien, membre de la Société des amis des Noirs." },
        ],
        retenir: [
          "Le XVIIIᵉ siècle est celui de l’essor du commerce colonial atlantique.",
          "La traite déporte environ 12 millions d’Africains : elle est au fondement du système de plantation.",
          "Une bourgeoisie riche mais politiquement écartée grandit dans les ports.",
        ],
        quiz: [
          {
            q: "Quel texte régit l’esclavage dans les colonies françaises ?",
            choix: ["L’édit de Nantes", "Le Code noir", "Le Code civil", "La Déclaration des droits de l’homme"],
            bonne: 1,
            pourquoi: "Promulgué en 1685, le Code noir définit le statut juridique des esclaves jusqu’en 1848.",
          },
          {
            q: "Quelle colonie devient indépendante en 1804 après une révolte d’esclaves ?",
            choix: ["La Martinique", "Haïti (Saint-Domingue)", "La Guadeloupe", "La Guyane"],
            bonne: 1,
            pourquoi: "Saint-Domingue devient Haïti : première république née d’une révolte d’esclaves victorieuse.",
          },
        ],
      },
      {
        id: "rev-lumieres",
        titre: "L’Europe des Lumières",
        niveaux: ["4e", "2de"],
        accroche: "« Ose savoir » : une génération décide que rien n’échappe à l’examen de la raison.",
        resume:
          "Les philosophes des Lumières soumettent religion, pouvoir et coutumes à la critique. " +
          "Ils réclament liberté d’expression, tolérance, séparation des pouvoirs. Leurs idées " +
          "circulent par les livres, les salons et les cafés, malgré la censure.",
        parties: [
          {
            titre: "Les idées",
            points: [
              "Montesquieu propose la séparation des pouvoirs (De l’esprit des lois, 1748) pour empêcher l’abus d’autorité.",
              "Voltaire combat le fanatisme et défend la tolérance ; Rousseau fonde la légitimité politique sur le contrat social et la souveraineté du peuple.",
              "L’Encyclopédie de Diderot et d’Alembert (1751-1772) rassemble les savoirs et les techniques : connaître, c’est émanciper.",
            ],
          },
          {
            titre: "La diffusion",
            points: [
              "Salons tenus par des femmes, cafés, académies, loges maçonniques : de nouveaux lieux de discussion apparaissent.",
              "L’imprimé circule malgré la censure : livres interdits imprimés à l’étranger, gazettes, colporteurs.",
              "Certains souverains se disent « éclairés » (Frédéric II, Catherine II) : ils réforment sans renoncer à l’absolutisme.",
            ],
          },
          {
            titre: "L’étincelle américaine",
            points: [
              "Les Treize colonies proclament leur indépendance en 1776 au nom de droits naturels ; la France les soutient militairement.",
              "La Constitution de 1787 met en œuvre séparation des pouvoirs et régime représentatif.",
              "Le retour des combattants français, et la dette immense laissée par la guerre, préparent la crise de 1789.",
            ],
          },
        ],
        dates: [
          { an: 1748, label: "De l’esprit des lois, Montesquieu" },
          { an: 1751, label: "Premier volume de l’Encyclopédie" },
          { an: 1762, label: "Du contrat social, Rousseau" },
          { an: 1776, label: "Déclaration d’indépendance des États-Unis" },
          { an: 1787, label: "Constitution américaine" },
        ],
        notions: [
          { mot: "Lumières", def: "Mouvement intellectuel européen du XVIIIᵉ siècle fondé sur la raison et la critique." },
          { mot: "Séparation des pouvoirs", def: "Répartition des pouvoirs législatif, exécutif et judiciaire entre des organes distincts." },
          { mot: "Tolérance", def: "Reconnaissance du droit de chacun à ses convictions religieuses." },
          { mot: "Censure", def: "Contrôle des publications par le pouvoir, qui peut les interdire." },
          { mot: "Despote éclairé", def: "Souverain absolu qui applique certaines réformes inspirées des Lumières." },
        ],
        personnages: [
          { nom: "Montesquieu", vie: "1689 à 1755", role: "Théoricien de la séparation des pouvoirs." },
          { nom: "Voltaire", vie: "1694 à 1778", role: "Écrivain, adversaire acharné du fanatisme et de l’injustice judiciaire." },
          { nom: "Jean-Jacques Rousseau", vie: "1712 à 1778", role: "Auteur du Contrat social : la souveraineté appartient au peuple." },
          { nom: "Denis Diderot", vie: "1713 à 1784", role: "Maître d’œuvre de l’Encyclopédie." },
        ],
        retenir: [
          "Les Lumières soumettent toute autorité à l’examen de la raison.",
          "Elles réclament liberté, tolérance et séparation des pouvoirs.",
          "La révolution américaine montre que ces idées peuvent devenir des institutions.",
        ],
        quiz: [
          {
            q: "Qui théorise la séparation des pouvoirs ?",
            choix: ["Voltaire", "Rousseau", "Montesquieu", "Diderot"],
            bonne: 2,
            pourquoi: "Dans De l’esprit des lois (1748), pour que « le pouvoir arrête le pouvoir ».",
          },
          {
            q: "Selon Rousseau, à qui appartient la souveraineté ?",
            choix: ["Au roi", "À Dieu", "Au peuple", "Aux savants"],
            bonne: 2,
            pourquoi: "Le Contrat social fonde la légitimité politique sur la volonté générale du peuple.",
          },
        ],
      },
      {
        id: "rev-revolution",
        titre: "La Révolution française, 1789-1799",
        niveaux: ["4e", "1re"],
        accroche: "En quelques mois, des sujets deviennent des citoyens.",
        resume:
          "Une crise financière et sociale ouvre en 1789 une révolution qui abolit les " +
          "privilèges, proclame les droits de l’homme, renverse la monarchie et invente la " +
          "République. Elle se radicalise dans la guerre et la Terreur avant de s’essouffler.",
        parties: [
          {
            titre: "1789 : la rupture",
            points: [
              "Crise financière, mauvaise récolte, blocage des états généraux : le tiers état se proclame Assemblée nationale et prête le serment du Jeu de paume (20 juin).",
              "Le 14 juillet, la prise de la Bastille sauve l’Assemblée ; la Grande Peur secoue les campagnes.",
              "Nuit du 4 août : abolition des privilèges. 26 août : Déclaration des droits de l’homme et du citoyen — liberté, égalité devant la loi, souveraineté de la nation.",
            ],
          },
          {
            titre: "1789-1792 : la monarchie constitutionnelle",
            points: [
              "L’Assemblée réorganise tout : départements, justice élue, biens du clergé nationalisés, Constitution civile du clergé (source de division profonde).",
              "La Constitution de 1791 établit une monarchie constitutionnelle avec suffrage censitaire : la fuite du roi à Varennes (juin 1791) ruine sa crédibilité.",
              "La guerre commence en avril 1792 ; après Valmy (20 septembre), la République est proclamée le 22 septembre 1792.",
            ],
          },
          {
            titre: "1792-1799 : République, Terreur, Directoire",
            points: [
              "Louis XVI est jugé et exécuté le 21 janvier 1793 ; la guerre extérieure et la guerre civile (Vendée) menacent la République.",
              "Le gouvernement révolutionnaire (Comité de salut public, Robespierre) instaure la Terreur : levée en masse, lois d’exception, exécutions ; l’esclavage est aboli en février 1794.",
              "La chute de Robespierre (9 thermidor an II, juillet 1794) ouvre le Directoire, régime instable qui s’appuie sur l’armée — et finit renversé par Bonaparte.",
            ],
          },
        ],
        dates: [
          { an: 1789, label: "14 juillet : prise de la Bastille ; 26 août : Déclaration des droits" },
          { an: 1791, label: "Constitution : monarchie constitutionnelle" },
          { an: 1792, label: "22 septembre : proclamation de la République" },
          { an: 1793, label: "21 janvier : exécution de Louis XVI ; la Terreur" },
          { an: 1794, label: "Abolition de l’esclavage ; chute de Robespierre" },
          { an: 1799, label: "18 Brumaire : coup d’État de Bonaparte" },
        ],
        notions: [
          { mot: "Ancien Régime", def: "Organisation de la société française avant 1789, fondée sur les trois ordres et les privilèges." },
          { mot: "Privilège", def: "Droit particulier accordé à une personne, un groupe ou une province." },
          { mot: "Souveraineté nationale", def: "Principe selon lequel le pouvoir appartient à la nation, non au roi." },
          { mot: "Suffrage censitaire", def: "Droit de vote réservé à ceux qui paient un impôt suffisant." },
          { mot: "Terreur", def: "Période de 1793-1794 où le gouvernement révolutionnaire recourt à des mesures d’exception et à la répression." },
        ],
        personnages: [
          { nom: "Louis XVI", vie: "1754 à 1793", role: "Dernier roi de l’Ancien Régime, jugé et exécuté par la Convention." },
          { nom: "Maximilien de Robespierre", vie: "1758 à 1794", role: "Figure du Comité de salut public, associé à la Terreur, renversé en thermidor." },
          { nom: "Olympe de Gouges", vie: "1748 à 1793", role: "Auteure de la Déclaration des droits de la femme et de la citoyenne (1791) ; guillotinée." },
          { nom: "Abbé Sieyès", vie: "1748 à 1836", role: "Auteur de Qu’est-ce que le tiers état ?, acteur de 1789 comme de Brumaire." },
        ],
        retenir: [
          "1789 abolit les privilèges et proclame les droits de l’homme et du citoyen.",
          "1792 fait naître la République ; 1793-1794, la guerre conduit à la Terreur.",
          "La Révolution invente la citoyenneté moderne, mais exclut les femmes du droit de vote.",
        ],
        quiz: [
          {
            q: "Que décide l’Assemblée dans la nuit du 4 août 1789 ?",
            choix: ["La mort du roi", "L’abolition des privilèges", "La guerre à l’Autriche", "La Constitution civile du clergé"],
            bonne: 1,
            pourquoi: "Les privilèges des ordres et des provinces sont abolis : l’Ancien Régime social s’effondre en une nuit.",
          },
          {
            q: "Quand la République est-elle proclamée ?",
            choix: ["14 juillet 1789", "22 septembre 1792", "21 janvier 1793", "9 thermidor an II"],
            bonne: 1,
            pourquoi: "Au lendemain de Valmy, la Convention abolit la royauté et proclame la République.",
          },
          {
            q: "Qui écrit la Déclaration des droits de la femme et de la citoyenne ?",
            choix: ["Madame Roland", "Olympe de Gouges", "Charlotte Corday", "Théroigne de Méricourt"],
            bonne: 1,
            pourquoi: "Publiée en 1791, elle réclame l’égalité politique des femmes ; son autrice est guillotinée en 1793.",
          },
        ],
      },
      {
        id: "rev-empire",
        titre: "Le Consulat et l’Empire",
        niveaux: ["4e", "1re"],
        accroche: "Il conserve la société de 1789 et supprime la liberté qui l’avait faite.",
        resume:
          "Bonaparte prend le pouvoir en 1799, stabilise la France par le Code civil, le franc " +
          "et le Concordat, puis se fait empereur. Ses victoires lui soumettent l’Europe ; " +
          "l’Espagne, la Russie et les nationalismes qu’il a réveillés le renversent.",
        parties: [
          {
            titre: "Réorganiser la France",
            points: [
              "Le Code civil (1804) fixe l’égalité devant la loi, la propriété et la laïcité de l’état civil — mais place la femme sous l’autorité du mari.",
              "Préfets, lycées, Banque de France, franc germinal, Légion d’honneur : l’administration prend la forme qu’on lui connaît encore.",
              "Le Concordat de 1801 réconcilie l’État et l’Église catholique, sous contrôle du pouvoir.",
            ],
          },
          {
            titre: "Un pouvoir personnel",
            points: [
              "Consul à vie en 1802, empereur des Français en 1804 : le sacre se fait à Notre-Dame, en présence du pape.",
              "Plébiscites, censure de la presse, police politique : les libertés reculent nettement.",
              "L’esclavage est rétabli en 1802 dans les colonies, sept ans après son abolition.",
            ],
          },
          {
            titre: "L’Europe conquise, puis perdue",
            points: [
              "Austerlitz (1805), Iéna (1806), Wagram (1809) : la Grande Armée domine le continent ; le Blocus continental vise l’Angleterre.",
              "L’occupation suscite partout des résistances nationales : Espagne dès 1808, Allemagne ensuite.",
              "La campagne de Russie (1812) détruit l’armée ; après Leipzig et l’exil à l’île d’Elbe, Waterloo (1815) met fin à l’aventure. Le congrès de Vienne redessine l’Europe.",
            ],
          },
        ],
        dates: [
          { an: 1799, label: "18 Brumaire : Consulat" },
          { an: 1801, label: "Concordat avec le pape" },
          { an: 1804, label: "Code civil ; sacre de Napoléon Iᵉʳ" },
          { an: 1805, label: "Austerlitz" },
          { an: 1812, label: "Campagne de Russie" },
          { an: 1815, label: "Waterloo ; congrès de Vienne" },
        ],
        notions: [
          { mot: "Consulat", def: "Régime de 1799 à 1804, dominé par Bonaparte, Premier consul." },
          { mot: "Code civil", def: "Recueil de lois de 1804 unifiant le droit privé français." },
          { mot: "Plébiscite", def: "Vote par oui ou non sur une question posée par le chef de l’État." },
          { mot: "Concordat", def: "Accord entre l’État et le pape organisant le statut de l’Église." },
          { mot: "Blocus continental", def: "Interdiction faite à l’Europe de commercer avec le Royaume-Uni." },
        ],
        personnages: [
          { nom: "Napoléon Bonaparte", vie: "1769 à 1821", role: "Général, Premier consul, puis empereur des Français de 1804 à 1815." },
          { nom: "Talleyrand", vie: "1754 à 1838", role: "Diplomate de tous les régimes ; il représente la France au congrès de Vienne." },
        ],
        retenir: [
          "Napoléon consolide les acquis sociaux de 1789 et supprime les libertés politiques.",
          "Le Code civil de 1804 structure encore le droit français.",
          "Ses conquêtes diffusent les principes révolutionnaires et éveillent les nationalismes qui le renversent.",
        ],
        quiz: [
          {
            q: "Quel texte de 1804 unifie le droit privé français ?",
            choix: ["Le Concordat", "Le Code civil", "La Constitution de l’an VIII", "Le Code noir"],
            bonne: 1,
            pourquoi: "Le Code civil consacre égalité devant la loi et propriété ; il reste la base du droit français.",
          },
          {
            q: "Quelle décision de 1802 revient sur un acquis de 1794 ?",
            choix: ["La création des préfets", "Le rétablissement de l’esclavage", "Le Concordat", "Le Blocus continental"],
            bonne: 1,
            pourquoi: "L’esclavage, aboli en février 1794, est rétabli dans les colonies en 1802.",
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     VI. XIXᵉ SIÈCLE
     ══════════════════════════════════════════════════════════════ */
  {
    id: "xix",
    nom: "XIXᵉ siècle",
    titre: "L’industrie, l’empire,<br><em>et la République.</em>",
    dates: "1815 à 1914",
    debut: 1815, fin: 1914, part: 10, teinte: "#5c5a7a",
    resume:
      "L’usine transforme le travail, la ville et les rapports sociaux. L’Europe se partage " +
      "le monde. En France, le droit de vote s’arrache par étapes, jusqu’à une République " +
      "qui s’enracine par l’école, la laïcité et les libertés.",
    reperes: [
      { an: 1815, label: "Restauration de la monarchie" },
      { an: 1830, label: "Trois Glorieuses ; prise d’Alger" },
      { an: 1848, label: "IIᵉ République ; suffrage universel masculin ; abolition de l’esclavage" },
      { an: 1852, label: "Second Empire, Napoléon III" },
      { an: 1870, label: "Sedan ; proclamation de la IIIᵉ République" },
      { an: 1871, label: "Commune de Paris" },
      { an: 1881, label: "Lois Ferry : école gratuite et obligatoire" },
      { an: 1884, label: "Liberté syndicale" },
      { an: 1885, label: "Conférence de Berlin" },
      { an: 1889, label: "Exposition universelle, tour Eiffel" },
      { an: 1894, label: "Début de l’affaire Dreyfus" },
      { an: 1898, label: "Zola, J’accuse…!" },
      { an: 1901, label: "Loi sur les associations" },
      { an: 1905, label: "Séparation des Églises et de l’État" },
      { an: 1913, label: "Première chaîne de montage" },
    ],
    chapitres: [
      {
        id: "xix-industrie",
        titre: "L’Europe de la révolution industrielle",
        niveaux: ["4e", "1re"],
        accroche: "La machine à vapeur a fait plus pour changer la vie quotidienne que bien des rois.",
        resume:
          "Charbon, vapeur, chemin de fer et usine bouleversent la production et la société " +
          "européenne. Naissent la bourgeoisie industrielle et le monde ouvrier, la ville " +
          "moderne, et les idéologies qui s’affrontent à propos de la « question sociale ».",
        parties: [
          {
            titre: "Machines et industries",
            points: [
              "Née en Angleterre au XVIIIᵉ siècle, l’industrialisation gagne la Belgique, la France, l’Allemagne, les États-Unis.",
              "Vapeur, charbon, sidérurgie, puis à la fin du siècle électricité, pétrole, chimie : c’est la « seconde révolution industrielle ».",
              "Le chemin de fer réduit les distances, unifie les marchés nationaux et fait chuter le prix des transports.",
            ],
          },
          {
            titre: "Une société nouvelle",
            points: [
              "La bourgeoisie d’affaires domine ; les banques et la Bourse financent l’industrie ; la société anonyme se généralise.",
              "Le monde ouvrier se forme dans l’usine : journées de 12 à 14 heures, travail des enfants, salaires bas, logements insalubres.",
              "L’exode rural gonfle les villes ; Paris est transformé par Haussmann sous le Second Empire.",
            ],
          },
          {
            titre: "La question sociale",
            points: [
              "Le socialisme et le marxisme (Manifeste du parti communiste, 1848) analysent l’exploitation et annoncent la lutte des classes.",
              "Le catholicisme social répond par l’encyclique Rerum novarum (1891).",
              "En France, la liberté syndicale est reconnue en 1884, le repos hebdomadaire en 1906 : les conquêtes sont lentes et arrachées.",
            ],
          },
        ],
        dates: [
          { an: 1825, label: "Première ligne de chemin de fer, en Angleterre" },
          { an: 1848, label: "Manifeste du parti communiste" },
          { an: 1884, label: "Loi Waldeck-Rousseau : liberté syndicale" },
          { an: 1891, label: "Encyclique Rerum novarum" },
          { an: 1913, label: "Première chaîne de montage chez Ford" },
        ],
        notions: [
          { mot: "Révolution industrielle", def: "Passage à une production mécanisée, concentrée dans des usines." },
          { mot: "Capitalisme", def: "Système fondé sur la propriété privée des moyens de production et la recherche du profit." },
          { mot: "Prolétariat", def: "Ensemble des ouvriers qui ne vivent que de leur salaire." },
          { mot: "Syndicat", def: "Association défendant les intérêts professionnels des salariés." },
          { mot: "Exode rural", def: "Départ massif des campagnes vers les villes." },
        ],
        personnages: [
          { nom: "Karl Marx", vie: "1818 à 1883", role: "Théoricien du socialisme révolutionnaire et critique du capitalisme." },
          { nom: "Baron Haussmann", vie: "1809 à 1891", role: "Préfet de la Seine, il perce les grands boulevards de Paris." },
        ],
        retenir: [
          "L’industrialisation transforme production, ville et société en un siècle.",
          "Bourgeoisie industrielle et prolétariat s’opposent : c’est la « question sociale ».",
          "Les réponses sont plurielles : socialisme, syndicalisme, catholicisme social, lois ouvrières.",
        ],
        quiz: [
          {
            q: "Quelle énergie est au cœur de la première révolution industrielle ?",
            choix: ["Le pétrole", "Le charbon et la vapeur", "L’électricité", "Le gaz naturel"],
            bonne: 1,
            pourquoi: "Pétrole et électricité caractérisent la seconde révolution industrielle, à la fin du XIXᵉ siècle.",
          },
          {
            q: "En quelle année les syndicats sont-ils autorisés en France ?",
            choix: ["1848", "1864", "1884", "1906"],
            bonne: 2,
            pourquoi: "La loi Waldeck-Rousseau de 1884 légalise les syndicats professionnels.",
          },
        ],
      },
      {
        id: "xix-colonial",
        titre: "Conquêtes et sociétés coloniales",
        niveaux: ["4e", "1re"],
        accroche: "En trente ans, l’Europe s’attribue un continent entier autour d’une table.",
        resume:
          "Entre 1880 et 1914, les puissances européennes se partagent l’Afrique et l’Asie. " +
          "La colonisation se justifie par des discours de « mission civilisatrice » ; elle " +
          "impose la domination, l’exploitation et un statut d’infériorité juridique.",
        parties: [
          {
            titre: "Les motifs",
            points: [
              "Économiques : matières premières, débouchés, placements ; stratégiques : escales, rivalités entre puissances.",
              "Idéologiques : prétendue « mission civilisatrice », théories racistes alors répandues, projet missionnaire.",
              "La conférence de Berlin (1884-1885) fixe les règles du partage de l’Afrique — sans aucun Africain.",
            ],
          },
          {
            titre: "Dominer",
            points: [
              "Deux modes de gestion : administration directe (France) ou indirecte, via des chefs locaux (Royaume-Uni).",
              "Le Code de l’indigénat impose aux colonisés un droit d’exception : sanctions administratives, corvées, restrictions de circulation.",
              "Économie de traite : cultures d’exportation imposées, travail forcé, impôt de capitation.",
            ],
          },
          {
            titre: "Résister",
            points: [
              "Résistances armées : Abd el-Kader en Algérie, Samory Touré en Afrique de l’Ouest, révolte des Herero en Namibie, réprimée par un génocide.",
              "Résistances culturelles et religieuses, grèves, désertions, refus de l’impôt.",
              "Des élites formées à l’école coloniale retourneront ses principes — liberté, égalité — contre elle après 1945.",
            ],
          },
        ],
        dates: [
          { an: 1830, label: "Prise d’Alger" },
          { an: 1869, label: "Ouverture du canal de Suez" },
          { an: 1885, label: "Conférence de Berlin : partage de l’Afrique" },
          { an: 1887, label: "Création de l’Indochine française" },
          { an: 1898, label: "Crise de Fachoda" },
        ],
        notions: [
          { mot: "Colonisation", def: "Conquête et domination d’un territoire par une puissance étrangère." },
          { mot: "Empire colonial", def: "Ensemble des territoires dominés par une métropole." },
          { mot: "Indigénat", def: "Régime juridique d’exception imposé aux populations colonisées." },
          { mot: "Impérialisme", def: "Politique d’expansion et de domination d’un État sur d’autres." },
          { mot: "Protectorat", def: "Territoire qui garde ses institutions mais dont la métropole contrôle la politique extérieure et la défense." },
        ],
        personnages: [
          { nom: "Jules Ferry", vie: "1832 à 1893", role: "Chef du gouvernement, il défend l’expansion coloniale au nom d’une « mission civilisatrice »." },
          { nom: "Abd el-Kader", vie: "1808 à 1883", role: "Chef de la résistance algérienne à la conquête française." },
        ],
        retenir: [
          "1880-1914 : partage rapide de l’Afrique et de l’Asie entre puissances européennes.",
          "La colonisation associe exploitation économique et infériorité juridique des colonisés.",
          "Les résistances existent dès la conquête, sous des formes très diverses.",
        ],
        quiz: [
          {
            q: "Que décide la conférence de Berlin de 1884-1885 ?",
            choix: ["L’indépendance des colonies", "Les règles du partage de l’Afrique", "L’abolition de l’esclavage", "La création de la SDN"],
            bonne: 1,
            pourquoi: "Les puissances européennes y fixent entre elles les modalités d’occupation du continent africain.",
          },
          {
            q: "Qu’est-ce que le Code de l’indigénat ?",
            choix: ["Un code de commerce colonial", "Un droit d’exception imposé aux colonisés", "Une charte protégeant les populations locales", "Un statut donnant la citoyenneté"],
            bonne: 1,
            pourquoi: "Il permet des sanctions administratives et des obligations spécifiques hors du droit commun.",
          },
        ],
      },
      {
        id: "xix-vote",
        titre: "Une difficile conquête : voter de 1815 à 1870",
        niveaux: ["4e", "1re"],
        accroche: "Trois révolutions, deux empires, une république — pour un bulletin de vote.",
        resume:
          "Après 1815, la France oscille entre monarchies, république et empire. Le droit de " +
          "vote s’élargit par à-coups : censitaire sous la Restauration, universel masculin " +
          "en 1848, mais encadré sous le Second Empire.",
        parties: [
          {
            titre: "Les régimes qui se succèdent",
            points: [
              "Restauration (1815-1830) : monarchie constitutionnelle, Charte, suffrage censitaire très restreint (environ 100 000 électeurs).",
              "Monarchie de Juillet (1830-1848) : le cens baisse, le nombre d’électeurs double — cela reste 2 % des hommes adultes.",
              "IIᵉ République (1848-1852), puis Second Empire (1852-1870) : le suffrage universel masculin est maintenu, mais orienté par les candidatures officielles.",
            ],
          },
          {
            titre: "1848, le tournant",
            points: [
              "La révolution de février 1848 renverse Louis-Philippe et proclame la République.",
              "Décrets majeurs : suffrage universel masculin, abolition de l’esclavage (Victor Schœlcher), liberté de la presse, ateliers nationaux.",
              "Les journées de juin 1848, durement réprimées, marquent la rupture entre républicains modérés et mouvement ouvrier.",
            ],
          },
          {
            titre: "Ce que voter veut dire",
            points: [
              "Le vote se politise : campagnes, presse, affiches ; l’isoloir n’est imposé qu’en 1913.",
              "Les femmes restent exclues du droit de vote : elles ne l’obtiendront qu’en 1944.",
              "En 1870, la défaite de Sedan emporte l’Empire ; la République est proclamée le 4 septembre.",
            ],
          },
        ],
        dates: [
          { an: 1830, label: "Trois Glorieuses : monarchie de Juillet" },
          { an: 1848, label: "IIᵉ République, suffrage universel masculin, abolition de l’esclavage" },
          { an: 1851, label: "Coup d’État de Louis-Napoléon Bonaparte" },
          { an: 1870, label: "Sedan ; proclamation de la IIIᵉ République" },
        ],
        notions: [
          { mot: "Suffrage censitaire", def: "Droit de vote réservé aux contribuables les plus imposés." },
          { mot: "Suffrage universel masculin", def: "Droit de vote accordé à tous les hommes adultes, sans condition de fortune." },
          { mot: "Monarchie constitutionnelle", def: "Régime où le roi partage le pouvoir selon une constitution ou une charte." },
          { mot: "Coup d’État", def: "Prise de pouvoir par la force, en violation des règles constitutionnelles." },
        ],
        personnages: [
          { nom: "Victor Schœlcher", vie: "1804 à 1893", role: "Il fait signer en 1848 le décret d’abolition définitive de l’esclavage." },
          { nom: "Napoléon III", vie: "1808 à 1873", role: "Président élu en 1848, empereur après son coup d’État de 1851." },
        ],
        retenir: [
          "De 1815 à 1870, la France change six fois de régime.",
          "1848 instaure le suffrage universel masculin et abolit définitivement l’esclavage.",
          "Les femmes demeurent exclues du droit de vote jusqu’en 1944.",
        ],
        quiz: [
          {
            q: "Quelle avancée majeure date de 1848 en France ?",
            choix: ["Le vote des femmes", "Le suffrage universel masculin", "La liberté syndicale", "La séparation des Églises et de l’État"],
            bonne: 1,
            pourquoi: "1848 instaure aussi l’abolition définitive de l’esclavage dans les colonies françaises.",
          },
        ],
      },
      {
        id: "xix-nationalites",
        titre: "La France dans l’Europe des nationalités (1848-1871)",
        niveaux: ["1re"],
        accroche: "Le principe des nationalités redessine la carte de l’Europe — aux dépens de la France.",
        resume:
          "Le « printemps des peuples » de 1848 échoue mais installe durablement l’idée " +
          "nationale. L’Italie puis l’Allemagne s’unifient ; la France, d’abord protectrice " +
          "des nationalités, est vaincue en 1870 et perd l’Alsace-Moselle.",
        parties: [
          {
            titre: "1848, le printemps des peuples",
            points: [
              "Des révolutions éclatent à Paris, Vienne, Berlin, Budapest, Milan : libertés politiques et revendications nationales s’y mêlent.",
              "Elles sont presque partout réprimées en 1849, mais les aspirations nationales demeurent.",
              "En France, la IIᵉ République se dit solidaire des peuples opprimés, sans intervenir vraiment.",
            ],
          },
          {
            titre: "Les unifications",
            points: [
              "L’Italie s’unifie autour du Piémont : Cavour obtient l’aide de Napoléon III (1859), Garibaldi soulève le Sud ; Rome devient capitale en 1870.",
              "L’Allemagne s’unifie autour de la Prusse de Bismarck, par trois guerres (1864, 1866, 1870).",
              "L’Empire allemand est proclamé dans la galerie des Glaces de Versailles en janvier 1871 : l’humiliation est calculée.",
            ],
          },
          {
            titre: "1870-1871 en France",
            points: [
              "La défaite de Sedan (septembre 1870) entraîne la chute de Napoléon III et la proclamation de la République.",
              "Le traité de Francfort (mai 1871) impose la perte de l’Alsace et d’une partie de la Lorraine et une lourde indemnité.",
              "La Commune de Paris (mars-mai 1871), insurrection sociale et patriotique, est écrasée lors de la Semaine sanglante.",
            ],
          },
        ],
        dates: [
          { an: 1848, label: "Printemps des peuples" },
          { an: 1861, label: "Royaume d’Italie" },
          { an: 1870, label: "Sedan ; Rome capitale de l’Italie" },
          { an: 1871, label: "Empire allemand ; Commune de Paris ; traité de Francfort" },
        ],
        notions: [
          { mot: "Nation", def: "Communauté humaine se reconnaissant une histoire, une culture et un projet politique communs." },
          { mot: "Principe des nationalités", def: "Idée selon laquelle chaque nation a droit à son État." },
          { mot: "Unification", def: "Réunion en un seul État de territoires jusque-là séparés." },
          { mot: "Commune", def: "Gouvernement insurrectionnel de Paris de mars à mai 1871." },
        ],
        personnages: [
          { nom: "Otto von Bismarck", vie: "1815 à 1898", role: "Chancelier prussien, artisan de l’unification allemande." },
          { nom: "Giuseppe Garibaldi", vie: "1807 à 1882", role: "Il conquiert le sud de l’Italie avec ses « Mille » en 1860." },
          { nom: "Louise Michel", vie: "1830 à 1905", role: "Institutrice et figure de la Commune de Paris, déportée en Nouvelle-Calédonie." },
        ],
        retenir: [
          "1848 installe durablement le principe des nationalités en Europe.",
          "Italie et Allemagne s’unifient entre 1859 et 1871.",
          "La défaite de 1870-1871 coûte à la France l’Alsace-Moselle et nourrit un fort ressentiment.",
        ],
        quiz: [
          {
            q: "Où l’Empire allemand est-il proclamé en 1871 ?",
            choix: ["À Berlin", "À Francfort", "Dans la galerie des Glaces de Versailles", "À Vienne"],
            bonne: 2,
            pourquoi: "Le choix de Versailles, palais des rois de France, est une humiliation délibérée.",
          },
        ],
      },
      {
        id: "xix-republique",
        titre: "La Troisième République s’enracine",
        niveaux: ["4e", "1re"],
        accroche: "Une république voulue par personne, et qui a duré soixante-dix ans.",
        resume:
          "Née d’une défaite et longtemps contestée, la IIIᵉ République s’installe par les " +
          "lois constitutionnelles de 1875, puis s’enracine par l’école, les libertés " +
          "publiques et la laïcité. L’affaire Dreyfus est son épreuve de vérité.",
        parties: [
          {
            titre: "S’installer",
            points: [
              "Les lois constitutionnelles de 1875 organisent un régime parlementaire : deux chambres, un président aux pouvoirs limités.",
              "La République se donne des symboles : Marianne, 14 juillet fête nationale (1880), Marseillaise hymne, mairies et écoles partout.",
              "Elle affronte des crises (boulangisme, scandales), mais résiste.",
            ],
          },
          {
            titre: "Instruire et libérer",
            points: [
              "Lois Ferry (1881-1882) : école primaire gratuite, obligatoire et laïque ; les « hussards noirs » diffusent le français et l’esprit républicain.",
              "Libertés : réunion (1881), presse (1881), syndicats (1884), associations (1901).",
              "La loi de 1905 sépare les Églises et l’État : la République ne reconnaît ni ne salarie aucun culte, et garantit la liberté de conscience.",
            ],
          },
          {
            titre: "L’affaire Dreyfus",
            points: [
              "En 1894, le capitaine Dreyfus, juif alsacien, est condamné à tort pour espionnage.",
              "Zola publie J’accuse…! en 1898 : la France se divise entre dreyfusards et antidreyfusards ; l’antisémitisme se déploie publiquement.",
              "Dreyfus est réhabilité en 1906 : l’affaire consacre le rôle des intellectuels et renforce le camp républicain.",
            ],
          },
        ],
        dates: [
          { an: 1875, label: "Lois constitutionnelles" },
          { an: 1881, label: "École gratuite ; liberté de la presse et de réunion" },
          { an: 1882, label: "École obligatoire et laïque" },
          { an: 1894, label: "Condamnation du capitaine Dreyfus" },
          { an: 1898, label: "J’accuse…! de Zola" },
          { an: 1905, label: "Séparation des Églises et de l’État" },
        ],
        notions: [
          { mot: "Laïcité", def: "Principe de séparation des Églises et de l’État, garantissant la liberté de conscience et la neutralité publique." },
          { mot: "Régime parlementaire", def: "Régime où le gouvernement est responsable devant les chambres élues." },
          { mot: "Antisémitisme", def: "Hostilité et discrimination à l’égard des Juifs." },
          { mot: "Intellectuel", def: "Personne reconnue pour son savoir qui intervient dans le débat public — le mot naît avec l’affaire Dreyfus." },
        ],
        personnages: [
          { nom: "Jules Ferry", vie: "1832 à 1893", role: "Ministre de l’Instruction publique, il fait voter les lois scolaires de 1881-1882." },
          { nom: "Émile Zola", vie: "1840 à 1902", role: "Écrivain, auteur de J’accuse…!, condamné puis exilé." },
          { nom: "Alfred Dreyfus", vie: "1859 à 1935", role: "Officier condamné à tort en 1894, réhabilité en 1906." },
        ],
        retenir: [
          "La IIIᵉ République s’enracine par l’école, les libertés et la laïcité.",
          "1905 sépare les Églises et l’État et garantit la liberté de conscience.",
          "L’affaire Dreyfus divise la France et révèle la force de l’antisémitisme.",
        ],
        quiz: [
          {
            q: "Que prévoit la loi de 1905 ?",
            choix: ["L’interdiction des religions", "La séparation des Églises et de l’État", "L’école obligatoire", "La liberté syndicale"],
            bonne: 1,
            pourquoi: "La République cesse de reconnaître et de financer les cultes, tout en garantissant leur libre exercice.",
          },
          {
            q: "Quel texte Zola publie-t-il en 1898 ?",
            choix: ["Germinal", "J’accuse…!", "Le Manifeste des intellectuels", "La Lettre aux Français"],
            bonne: 1,
            pourquoi: "Cette lettre ouverte au président de la République relance l’affaire Dreyfus.",
          },
        ],
      },
      {
        id: "xix-femmes",
        titre: "Conditions féminines dans une société en mutation",
        niveaux: ["4e"],
        accroche: "Le Code civil les dit mineures à vie ; l’usine et l’école commencent à le démentir.",
        resume:
          "Au XIXᵉ siècle, les femmes sont juridiquement subordonnées et privées de droits " +
          "politiques. Pourtant elles travaillent massivement, accèdent progressivement à " +
          "l’instruction, et organisent les premiers combats féministes.",
        parties: [
          {
            titre: "Une infériorité de droit",
            points: [
              "Le Code civil de 1804 place la femme mariée sous l’autorité du mari : elle ne peut ni gérer ses biens ni travailler sans son accord.",
              "Elle ne vote pas, ne peut être élue, et le divorce est supprimé de 1816 à 1884.",
              "Le discours dominant l’assigne au foyer, tout en tolérant son travail quand il est mal payé.",
            ],
          },
          {
            titre: "Des femmes au travail",
            points: [
              "Ouvrières du textile, domestiques, paysannes, couturières : les femmes représentent une part importante de la main-d’œuvre, avec des salaires très inférieurs.",
              "De nouveaux métiers s’ouvrent : institutrices (loi Camille Sée, 1880, pour les lycées de filles), employées de bureau, vendeuses des grands magasins.",
              "Les premières bachelières et les premières étudiantes apparaissent à la fin du siècle.",
            ],
          },
          {
            titre: "Le combat féministe",
            points: [
              "Des militantes réclament l’égalité civile et le droit de vote : Hubertine Auclert lance le mot « féministe » en France.",
              "Presse militante, congrès, pétitions : le mouvement s’organise à partir des années 1870.",
              "Il faudra attendre 1944 pour le droit de vote, 1965 pour que les femmes mariées puissent travailler sans autorisation du mari.",
            ],
          },
        ],
        dates: [
          { an: 1804, label: "Code civil : incapacité juridique de la femme mariée" },
          { an: 1880, label: "Loi Camille Sée : lycées de jeunes filles" },
          { an: 1884, label: "Rétablissement du divorce" },
          { an: 1907, label: "Les femmes mariées peuvent disposer de leur salaire" },
        ],
        notions: [
          { mot: "Féminisme", def: "Mouvement luttant pour l’égalité des droits entre femmes et hommes." },
          { mot: "Incapacité juridique", def: "Situation d’une personne qui ne peut accomplir seule certains actes civils." },
          { mot: "Suffragette", def: "Militante, surtout britannique, du droit de vote des femmes." },
        ],
        personnages: [
          { nom: "Hubertine Auclert", vie: "1848 à 1914", role: "Militante du droit de vote des femmes, fondatrice du journal La Citoyenne." },
          { nom: "Marie Curie", vie: "1867 à 1934", role: "Première femme professeure à la Sorbonne et double prix Nobel." },
        ],
        retenir: [
          "Le Code civil organise l’infériorité juridique des femmes pour tout le siècle.",
          "Les femmes travaillent massivement, pour des salaires très inférieurs.",
          "Le féminisme s’organise dès le XIXᵉ siècle : ses victoires viendront au XXᵉ.",
        ],
        quiz: [
          {
            q: "Que prévoit le Code civil de 1804 pour la femme mariée ?",
            choix: ["L’égalité avec son mari", "Une soumission à l’autorité du mari", "Le droit de vote", "Le libre exercice d’un métier"],
            bonne: 1,
            pourquoi: "Elle est juridiquement incapable : elle ne peut agir seule sans autorisation maritale.",
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     VII. GUERRES MONDIALES
     ══════════════════════════════════════════════════════════════ */
  {
    id: "guerres",
    nom: "Guerres mondiales",
    titre: "Deux guerres,<br><em>et l’Europe brisée.</em>",
    dates: "1914 à 1945",
    debut: 1914, fin: 1945, part: 8, teinte: "#3f4a52",
    resume:
      "Trente et un ans séparent deux conflits d’un genre nouveau : la guerre y devient " +
      "totale, les civils des cibles, et un régime entreprend d’anéantir des peuples entiers. " +
      "L’Europe en sort ruinée et dépossédée de sa domination sur le monde.",
    reperes: [
      { an: 1914, label: "Attentat de Sarajevo ; entrée en guerre" },
      { an: 1916, label: "Verdun et la Somme" },
      { an: 1917, label: "Révolutions russes ; entrée des États-Unis" },
      { an: 1918, label: "Armistice du 11 novembre" },
      { an: 1919, label: "Traité de Versailles" },
      { an: 1922, label: "Mussolini au pouvoir" },
      { an: 1929, label: "Krach de Wall Street" },
      { an: 1933, label: "Hitler chancelier" },
      { an: 1936, label: "Front populaire ; congés payés" },
      { an: 1938, label: "Nuit de Cristal" },
      { an: 1939, label: "Invasion de la Pologne" },
      { an: 1940, label: "Défaite ; appel du 18 Juin ; régime de Vichy" },
      { an: 1942, label: "Rafle du Vél d’Hiv ; Stalingrad ; Wannsee" },
      { an: 1944, label: "Débarquements ; droit de vote des femmes" },
      { an: 1945, label: "Capitulation ; Hiroshima ; découverte des camps" },
    ],
    chapitres: [
      {
        id: "g-1914",
        titre: "La Première Guerre mondiale, une guerre totale",
        niveaux: ["3e", "1re"],
        accroche: "Quatre ans, dix millions de morts, et des sociétés entières mises au service du front.",
        resume:
          "Née d’un jeu d’alliances et de rivalités, la guerre de 1914 s’enlise dans les " +
          "tranchées. Elle mobilise toute la société — économie, femmes, colonies, opinion — " +
          "et s’achève sur une paix qui portera en elle le conflit suivant.",
        parties: [
          {
            titre: "Trois phases",
            points: [
              "1914 : guerre de mouvement, l’offensive allemande est stoppée sur la Marne ; le front se fige de la mer du Nord à la Suisse.",
              "1915-1917 : guerre de position. Verdun et la Somme (1916) tuent des centaines de milliers d’hommes pour quelques kilomètres.",
              "1917-1918 : les révolutions russes font sortir la Russie du conflit, l’entrée des États-Unis fait pencher la balance ; armistice le 11 novembre 1918.",
            ],
          },
          {
            titre: "Une guerre totale",
            points: [
              "Économies converties à l’armement, emprunts, rationnement ; les femmes remplacent les hommes aux champs et à l’usine.",
              "Les empires coloniaux fournissent soldats et travailleurs ; la propagande encadre les esprits (« bourrage de crâne »).",
              "Armes nouvelles : artillerie lourde, mitrailleuse, gaz de combat, chars, aviation ; les mutineries de 1917 disent l’épuisement.",
            ],
          },
          {
            titre: "Violences et sorties de guerre",
            points: [
              "Le génocide des Arméniens de l’Empire ottoman, en 1915-1916, fait environ un million deux cent mille morts.",
              "Bilan : près de 10 millions de morts militaires, des millions de blessés et de mutilés, l’Europe endettée.",
              "Le traité de Versailles (1919) impute à l’Allemagne la responsabilité du conflit, l’ampute et l’accable de réparations ; quatre empires disparaissent et la SDN est créée.",
            ],
          },
        ],
        dates: [
          { an: 1914, label: "Attentat de Sarajevo ; bataille de la Marne" },
          { an: 1916, label: "Verdun ; la Somme" },
          { an: 1917, label: "Révolutions russes ; entrée en guerre des États-Unis" },
          { an: 1918, label: "11 novembre : armistice" },
          { an: 1919, label: "Traité de Versailles" },
        ],
        notions: [
          { mot: "Guerre totale", def: "Guerre qui mobilise toutes les ressources humaines, économiques et morales d’un pays." },
          { mot: "Tranchée", def: "Fossé fortifié où vivent et combattent les soldats du front." },
          { mot: "Génocide", def: "Extermination volontaire et systématique d’un groupe humain en raison de son origine ou de sa religion." },
          { mot: "Armistice", def: "Accord qui suspend les combats, sans mettre fin juridiquement à la guerre." },
          { mot: "Propagande", def: "Diffusion organisée d’informations destinées à orienter l’opinion." },
        ],
        personnages: [
          { nom: "Georges Clemenceau", vie: "1841 à 1929", role: "Président du Conseil en 1917-1920, surnommé « le Tigre » puis « Père la Victoire »." },
          { nom: "Philippe Pétain", vie: "1856 à 1951", role: "Commandant à Verdun en 1916 ; chef de l’État français en 1940." },
          { nom: "Woodrow Wilson", vie: "1856 à 1924", role: "Président américain, auteur des Quatorze Points et promoteur de la SDN." },
        ],
        retenir: [
          "La guerre de 1914-1918 est la première guerre totale de l’histoire.",
          "Elle produit une violence de masse inédite, dont le génocide des Arméniens.",
          "Le traité de Versailles laisse une Allemagne humiliée : une paix fragile.",
        ],
        quiz: [
          {
            q: "Qu’appelle-t-on « guerre totale » ?",
            choix: ["Une guerre menée sur tous les continents", "Une guerre mobilisant toutes les ressources d’un pays", "Une guerre sans armistice", "Une guerre entre empires"],
            bonne: 1,
            pourquoi: "Économie, société, culture et colonies sont mises au service de l’effort de guerre.",
          },
          {
            q: "Quel traité met fin à la guerre avec l’Allemagne ?",
            choix: ["Le traité de Francfort", "Le traité de Versailles", "Le pacte Briand-Kellogg", "Les accords de Munich"],
            bonne: 1,
            pourquoi: "Signé en juin 1919, il impose à l’Allemagne pertes territoriales, désarmement et réparations.",
          },
        ],
      },
      {
        id: "g-totalitarismes",
        titre: "Démocraties fragilisées et régimes totalitaires",
        niveaux: ["3e", "tle"],
        accroche: "La crise de 1929 fait ce que la guerre n’avait pas achevé : elle emporte les démocraties fragiles.",
        resume:
          "Après 1918, l’URSS, l’Italie fasciste puis l’Allemagne nazie instaurent des régimes " +
          "où l’État prétend contrôler la société entière. La crise de 1929 les renforce ; " +
          "les démocraties, elles, cherchent des réponses.",
        parties: [
          {
            titre: "L’URSS stalinienne",
            points: [
              "La révolution d’Octobre 1917 porte les bolcheviks au pouvoir ; Staline s’impose à partir de 1928.",
              "Collectivisation forcée des terres, plans quinquennaux, famines dont l’Holodomor en Ukraine (1932-1933), goulag, grandes purges de 1937-1938.",
              "Parti unique, police politique, culte du chef, propagande omniprésente.",
            ],
          },
          {
            titre: "Italie fasciste et Allemagne nazie",
            points: [
              "Mussolini prend le pouvoir en 1922 et établit un régime à parti unique ; l’État fasciste encadre jeunesse, travail et loisirs.",
              "Hitler devient chancelier en janvier 1933 ; en quelques mois, dictature, camps de concentration, parti unique.",
              "L’idéologie nazie est raciste et antisémite : les lois de Nuremberg (1935) excluent les Juifs de la nation allemande, la Nuit de Cristal (1938) déchaîne la violence.",
            ],
          },
          {
            titre: "Les démocraties face à la crise",
            points: [
              "Le krach de 1929 provoque une dépression mondiale : chômage massif, effondrement du commerce.",
              "Aux États-Unis, le New Deal de Roosevelt engage l’État dans l’économie ; en France, le Front populaire de 1936 obtient congés payés, semaine de 40 heures, conventions collectives.",
              "Face aux agressions (Éthiopie, Rhénanie, Autriche, Tchécoslovaquie), les démocraties choisissent l’apaisement : accords de Munich, 1938.",
            ],
          },
        ],
        dates: [
          { an: 1917, label: "Révolution d’Octobre en Russie" },
          { an: 1922, label: "Mussolini au pouvoir" },
          { an: 1929, label: "Krach de Wall Street" },
          { an: 1933, label: "Hitler chancelier" },
          { an: 1935, label: "Lois de Nuremberg" },
          { an: 1936, label: "Front populaire en France" },
          { an: 1938, label: "Accords de Munich ; Nuit de Cristal" },
        ],
        notions: [
          { mot: "Totalitarisme", def: "Régime où un parti unique prétend contrôler l’État, la société et les consciences." },
          { mot: "Parti unique", def: "Seul parti autorisé, confondu avec l’État." },
          { mot: "Propagande d’État", def: "Contrôle total de l’information au service de l’idéologie du régime." },
          { mot: "Antisémitisme d’État", def: "Discrimination des Juifs organisée par la loi." },
          { mot: "New Deal", def: "Politique de grands travaux et de régulation menée par Roosevelt à partir de 1933." },
        ],
        personnages: [
          { nom: "Joseph Staline", vie: "1878 à 1953", role: "Dirigeant de l’URSS de 1928 à 1953." },
          { nom: "Adolf Hitler", vie: "1889 à 1945", role: "Chef du parti nazi, dictateur de l’Allemagne de 1933 à 1945." },
          { nom: "Léon Blum", vie: "1872 à 1950", role: "Chef du gouvernement du Front populaire en 1936." },
        ],
        retenir: [
          "Les régimes totalitaires reposent sur le parti unique, la terreur et la propagande.",
          "La crise de 1929 fragilise les démocraties et sert les extrêmes.",
          "L’antisémitisme nazi est inscrit dans la loi dès 1935.",
        ],
        quiz: [
          {
            q: "Qu’est-ce qui caractérise un régime totalitaire ?",
            choix: ["Un roi héréditaire", "Un parti unique qui contrôle l’État et la société", "Une assemblée élue au suffrage censitaire", "Une économie de marché libre"],
            bonne: 1,
            pourquoi: "S’y ajoutent la terreur policière, la propagande et l’encadrement de toutes les activités.",
          },
          {
            q: "Qu’obtiennent les grévistes en France en 1936 ?",
            choix: ["Le droit de vote des femmes", "Les congés payés et la semaine de 40 heures", "La Sécurité sociale", "La retraite à 60 ans"],
            bonne: 1,
            pourquoi: "Les accords Matignon accordent aussi des hausses de salaires et les conventions collectives.",
          },
        ],
      },
      {
        id: "g-1939",
        titre: "La Seconde Guerre mondiale, une guerre d’anéantissement",
        niveaux: ["3e", "tle"],
        accroche: "Une guerre où l’objectif n’est plus de vaincre l’ennemi, mais de le détruire.",
        resume:
          "De 1939 à 1945, le conflit devient planétaire. Il oppose des projets idéologiques " +
          "irréconciliables et se caractérise par la violence contre les civils : bombardements " +
          "de masse, occupations brutales, extermination systématique.",
        parties: [
          {
            titre: "Un conflit mondial",
            points: [
              "Septembre 1939 : invasion de la Pologne. En 1940, la guerre-éclair soumet l’Europe de l’Ouest ; la France capitule en juin.",
              "1941 : l’Allemagne envahit l’URSS ; le Japon attaque Pearl Harbor. Le conflit devient mondial.",
              "1942-1943 : les tournants — Stalingrad, El-Alamein, Midway. Puis débarquements en Italie (1943), en Normandie et en Provence (1944).",
            ],
          },
          {
            titre: "Anéantir",
            points: [
              "Les bombardements visent les villes et les populations : Londres, Coventry, Hambourg, Dresde, Tokyo.",
              "Août 1945 : les bombes atomiques d’Hiroshima et Nagasaki font plus de cent mille morts immédiats et précipitent la capitulation japonaise.",
              "Les occupations sont d’une extrême brutalité, surtout à l’Est, où la guerre est menée au nom d’une hiérarchie raciale.",
            ],
          },
          {
            titre: "Un monde à reconstruire",
            points: [
              "Bilan : entre 50 et 60 millions de morts, dont une majorité de civils ; l’Europe est ruinée et amputée de sa domination mondiale.",
              "Les procès de Nuremberg (1945-1946) créent les notions de crime contre l’humanité et de crime de guerre.",
              "L’ONU est créée en 1945 ; deux superpuissances émergent, les États-Unis et l’URSS.",
            ],
          },
        ],
        dates: [
          { an: 1939, label: "1ᵉʳ septembre : invasion de la Pologne" },
          { an: 1941, label: "Invasion de l’URSS ; Pearl Harbor" },
          { an: 1942, label: "Stalingrad ; conférence de Wannsee" },
          { an: 1944, label: "6 juin : débarquement de Normandie" },
          { an: 1945, label: "8 mai : capitulation allemande ; août : Hiroshima et Nagasaki" },
        ],
        notions: [
          { mot: "Guerre d’anéantissement", def: "Guerre visant la destruction de l’adversaire, combattants comme civils, au nom d’une idéologie." },
          { mot: "Crime contre l’humanité", def: "Crime commis contre des populations civiles en raison de leur origine ; imprescriptible." },
          { mot: "Collaboration", def: "Coopération avec l’occupant." },
          { mot: "Résistance", def: "Ensemble des actions clandestines menées contre l’occupant et ses complices." },
        ],
        personnages: [
          { nom: "Winston Churchill", vie: "1874 à 1965", role: "Premier ministre britannique, il refuse tout compromis avec l’Allemagne nazie." },
          { nom: "Franklin D. Roosevelt", vie: "1882 à 1945", role: "Président américain du New Deal puis de la guerre." },
        ],
        retenir: [
          "Le conflit devient mondial en 1941 et se joue entre projets idéologiques opposés.",
          "Les civils sont visés délibérément : bombardements, occupation, extermination.",
          "1945 fonde un nouvel ordre : ONU, Nuremberg, deux superpuissances.",
        ],
        quiz: [
          {
            q: "Quel événement fait basculer le conflit à l’échelle mondiale en 1941 ?",
            choix: ["L’invasion de la Pologne", "L’invasion de l’URSS et l’attaque de Pearl Harbor", "La bataille d’Angleterre", "Le débarquement de Normandie"],
            bonne: 1,
            pourquoi: "L’entrée en guerre de l’URSS puis des États-Unis change l’échelle et l’issue du conflit.",
          },
          {
            q: "Quelle notion juridique naît au procès de Nuremberg ?",
            choix: ["Le crime de guerre uniquement", "Le crime contre l’humanité", "Le droit d’asile", "Le devoir de mémoire"],
            bonne: 1,
            pourquoi: "Elle vise les persécutions commises contre des civils en raison de leur origine ; elle est imprescriptible.",
          },
        ],
      },
      {
        id: "g-shoah",
        titre: "Le génocide des Juifs et des Tsiganes",
        niveaux: ["3e", "tle"],
        accroche: "Un État moderne a organisé, avec ses lois et ses trains, la disparition d’un peuple.",
        resume:
          "De la persécution légale à l’extermination industrielle, le régime nazi assassine " +
          "environ six millions de Juifs européens et entre 200 000 et 500 000 Tsiganes. " +
          "Ce crime, sans équivalent par son organisation d’État, est étudié pour être compris " +
          "et transmis.",
        parties: [
          {
            titre: "De l’exclusion à la persécution",
            points: [
              "Dès 1933, les Juifs allemands sont exclus de la fonction publique et de nombreuses professions.",
              "Les lois de Nuremberg (1935) leur retirent la citoyenneté ; la Nuit de Cristal (novembre 1938) est un pogrom d’État.",
              "Après 1939, les Juifs de Pologne sont enfermés dans des ghettos, où la faim et les épidémies tuent massivement.",
            ],
          },
          {
            titre: "L’extermination",
            points: [
              "À partir de 1941, en URSS occupée, les Einsatzgruppen fusillent près d’un million et demi de personnes : c’est la « Shoah par balles ».",
              "La conférence de Wannsee (janvier 1942) coordonne entre administrations la « solution finale » déjà engagée.",
              "Des centres de mise à mort sont créés en Pologne occupée, dont Auschwitz-Birkenau et Treblinka : déportations par trains, sélection, chambres à gaz.",
            ],
          },
          {
            titre: "Résister, témoigner, transmettre",
            points: [
              "Des révoltes éclatent, dans le ghetto de Varsovie (avril 1943) comme dans les camps ; des Justes cachent et sauvent.",
              "Les survivants témoignent : Primo Levi, Simone Veil, Élie Wiesel ; les archives et les procès établissent les faits.",
              "En France, le 27 janvier, anniversaire de la libération d’Auschwitz, est journée de mémoire des génocides.",
            ],
          },
        ],
        dates: [
          { an: 1935, label: "Lois de Nuremberg" },
          { an: 1938, label: "Nuit de Cristal" },
          { an: 1941, label: "Débuts des massacres par les Einsatzgruppen" },
          { an: 1942, label: "Conférence de Wannsee ; rafle du Vél d’Hiv" },
          { an: 1943, label: "Révolte du ghetto de Varsovie" },
          { an: 1945, label: "27 janvier : libération d’Auschwitz" },
        ],
        notions: [
          { mot: "Shoah", def: "Génocide des Juifs d’Europe perpétré par le régime nazi et ses complices." },
          { mot: "Ghetto", def: "Quartier fermé où les nazis enferment les Juifs avant les déportations." },
          { mot: "Camp d’extermination", def: "Centre conçu pour la mise à mort immédiate des déportés." },
          { mot: "Déportation", def: "Transfert forcé de populations vers des camps." },
          { mot: "Juste parmi les nations", def: "Titre honorant celles et ceux qui ont sauvé des Juifs au péril de leur vie." },
        ],
        personnages: [
          { nom: "Simone Veil", vie: "1927 à 2017", role: "Déportée à Auschwitz à 16 ans ; plus tard ministre et présidente du Parlement européen." },
          { nom: "Primo Levi", vie: "1919 à 1987", role: "Chimiste italien déporté, auteur de Si c’est un homme." },
          { nom: "Marcel Nadjari, et les témoins des Sonderkommandos", vie: "années 1940", role: "Déportés contraints d’assister à la mise à mort, qui enfouirent des manuscrits pour que l’on sache." },
        ],
        retenir: [
          "Le génocide procède par étapes : exclusion légale, ghettos, fusillades, centres de mise à mort.",
          "Environ six millions de Juifs et des centaines de milliers de Tsiganes sont assassinés.",
          "Les témoignages et les archives fondent une mémoire et une exigence de vérité.",
        ],
        quiz: [
          {
            q: "Que retirent les lois de Nuremberg de 1935 aux Juifs allemands ?",
            choix: ["Le droit de propriété seulement", "La citoyenneté allemande", "Le droit de quitter le pays", "Rien, elles sont symboliques"],
            bonne: 1,
            pourquoi: "Elles les excluent juridiquement de la nation et interdisent les mariages avec des « Aryens ».",
          },
          {
            q: "Qu’appelle-t-on la « Shoah par balles » ?",
            choix: ["Les combats du ghetto de Varsovie", "Les fusillades de masse menées à l’Est à partir de 1941", "Les exécutions d’otages en France", "Les marches de la mort de 1945"],
            bonne: 1,
            pourquoi: "Les Einsatzgruppen assassinent près d’un million et demi de personnes avant même les centres de mise à mort.",
          },
        ],
      },
      {
        id: "g-france-1940",
        titre: "La France défaite et occupée : Vichy, collaboration, Résistance",
        niveaux: ["3e", "tle"],
        accroche: "Deux France : celle qui signe l’armistice, celle qui refuse.",
        resume:
          "Après la défaite de juin 1940, Pétain obtient les pleins pouvoirs et engage la " +
          "France dans la collaboration. Dans le même temps, une résistance intérieure et " +
          "extérieure se construit, s’unifie, et prépare la Libération.",
        parties: [
          {
            titre: "La défaite et Vichy",
            points: [
              "Mai-juin 1940 : effondrement militaire, exode de millions de civils, armistice signé le 22 juin.",
              "Le 10 juillet 1940, l’Assemblée accorde les pleins pouvoirs à Pétain : la République cède la place à l’« État français ».",
              "Révolution nationale : « Travail, Famille, Patrie », culte du chef, censure, dissolution des syndicats et des partis.",
            ],
          },
          {
            titre: "La collaboration",
            points: [
              "Entrevue de Montoire (octobre 1940) : la collaboration est engagée officiellement.",
              "Vichy prend seul le statut des Juifs (octobre 1940), organise la rafle du Vél d’Hiv (juillet 1942) et crée la Milice (1943).",
              "Le STO (1943) envoie des centaines de milliers de travailleurs en Allemagne — et pousse beaucoup de jeunes vers les maquis.",
            ],
          },
          {
            titre: "La Résistance et la Libération",
            points: [
              "18 juin 1940 : de Gaulle appelle depuis Londres à poursuivre le combat ; la France libre s’organise.",
              "À l’intérieur : réseaux, presse clandestine, sabotages, maquis. Jean Moulin unifie les mouvements au sein du CNR, dont le programme (mars 1944) prépare l’après-guerre.",
              "Débarquements de Normandie (6 juin 1944) et de Provence ; libération de Paris en août ; le Gouvernement provisoire rétablit la République.",
            ],
          },
        ],
        dates: [
          { an: 1940, label: "22 juin : armistice ; 18 juin : appel de De Gaulle ; 10 juillet : pleins pouvoirs à Pétain" },
          { an: 1942, label: "16-17 juillet : rafle du Vél d’Hiv" },
          { an: 1943, label: "Création du CNR ; instauration du STO" },
          { an: 1944, label: "6 juin : débarquement ; libération de Paris ; vote des femmes" },
        ],
        notions: [
          { mot: "Armistice", def: "Convention suspendant les combats ; celle du 22 juin 1940 place la France sous occupation." },
          { mot: "Collaboration", def: "Politique de coopération de Vichy avec l’Allemagne nazie." },
          { mot: "Maquis", def: "Groupe de résistants armés replié dans des zones rurales." },
          { mot: "CNR", def: "Conseil national de la Résistance, créé en 1943 pour unifier les mouvements." },
          { mot: "STO", def: "Service du travail obligatoire en Allemagne, imposé en 1943." },
        ],
        personnages: [
          { nom: "Charles de Gaulle", vie: "1890 à 1970", role: "Chef de la France libre à partir de juin 1940, puis chef du Gouvernement provisoire." },
          { nom: "Jean Moulin", vie: "1899 à 1943", role: "Il unifie la Résistance intérieure ; arrêté et mort sous la torture." },
          { nom: "Lucie Aubrac", vie: "1912 à 2007", role: "Résistante de Libération-Sud, figure de la Résistance et de sa transmission." },
        ],
        retenir: [
          "Vichy n’est pas seulement soumis : il collabore et prend des mesures antisémites de sa propre initiative.",
          "La Résistance est intérieure et extérieure ; le CNR l’unifie en 1943.",
          "La Libération rétablit la République et prépare de profondes réformes sociales.",
        ],
        quiz: [
          {
            q: "Qui appelle à poursuivre le combat le 18 juin 1940 ?",
            choix: ["Philippe Pétain", "Charles de Gaulle", "Jean Moulin", "Pierre Laval"],
            bonne: 1,
            pourquoi: "L’appel est lancé depuis Londres, sur les ondes de la BBC.",
          },
          {
            q: "Quel organisme Jean Moulin crée-t-il en 1943 ?",
            choix: ["La Milice", "Le Conseil national de la Résistance", "Le Gouvernement provisoire", "Les Forces françaises libres"],
            bonne: 1,
            pourquoi: "Le CNR réunit mouvements, partis et syndicats de la Résistance derrière de Gaulle.",
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     VIII. DEPUIS 1945
     ══════════════════════════════════════════════════════════════ */
  {
    id: "contemporain",
    nom: "Depuis 1945",
    titre: "Le monde d’aujourd’hui,<br><em>et comment on y est arrivé.</em>",
    dates: "1945 à nos jours",
    debut: 1945, fin: 2026, part: 12, teinte: "#2f4b6e",
    resume:
      "Les empires coloniaux s’effondrent, le monde se coupe en deux, puis le Mur tombe. " +
      "La France se dote d’une Vᵉ République, l’Europe se construit, et les sociétés se " +
      "transforment en profondeur.",
    reperes: [
      { an: 1945, label: "ONU ; Sécurité sociale" },
      { an: 1947, label: "Plan Marshall ; début de la guerre froide" },
      { an: 1948, label: "Déclaration universelle des droits de l’homme" },
      { an: 1949, label: "OTAN ; division de l’Allemagne" },
      { an: 1954, label: "Fin de l’Indochine ; début de la guerre d’Algérie" },
      { an: 1957, label: "Traité de Rome" },
      { an: 1958, label: "Vᵉ République" },
      { an: 1961, label: "Construction du mur de Berlin" },
      { an: 1962, label: "Indépendance de l’Algérie ; crise de Cuba" },
      { an: 1968, label: "Mai 68" },
      { an: 1975, label: "Loi Veil" },
      { an: 1981, label: "Abolition de la peine de mort" },
      { an: 1989, label: "Chute du mur de Berlin" },
      { an: 1991, label: "Disparition de l’URSS" },
      { an: 1992, label: "Traité de Maastricht" },
      { an: 2001, label: "Attentats du 11 septembre" },
      { an: 2002, label: "Mise en circulation de l’euro" },
      { an: 2015, label: "Accord de Paris sur le climat" },
      { an: 2020, label: "Pandémie de Covid-19" },
    ],
    chapitres: [
      {
        id: "c-guerre-froide",
        titre: "Un monde bipolaire : la guerre froide",
        niveaux: ["3e", "tle"],
        accroche: "Deux blocs, quarante ans d’affrontement — et jamais de guerre directe entre eux.",
        resume:
          "De 1947 à 1991, États-Unis et URSS s’affrontent sans se combattre directement : " +
          "idéologies opposées, alliances militaires, course aux armements, crises et guerres " +
          "par pays interposés. Berlin en est le symbole.",
        parties: [
          {
            titre: "La rupture",
            points: [
              "1947 : doctrine Truman du « containment » face à la doctrine Jdanov ; le plan Marshall aide l’Europe de l’Ouest à se reconstruire.",
              "Deux blocs se constituent : OTAN (1949) face au pacte de Varsovie (1955) ; l’Europe est coupée par le « rideau de fer ».",
              "Berlin cristallise le conflit : blocus de 1948-1949, puis construction du Mur en 1961.",
            ],
          },
          {
            titre: "Crises et détente",
            points: [
              "Guerres de Corée (1950-1953) et du Vietnam (jusqu’en 1975) : on se bat par pays interposés.",
              "La crise de Cuba (1962) frôle la guerre nucléaire ; l’équilibre de la terreur impose ensuite une détente et des accords de limitation des armements.",
              "À l’intérieur des blocs, les contestations sont réprimées : Budapest 1956, Prague 1968.",
            ],
          },
          {
            titre: "La fin",
            points: [
              "L’URSS s’essouffle économiquement ; Gorbatchev lance perestroïka et glasnost à partir de 1985.",
              "En 1989, les régimes d’Europe de l’Est tombent les uns après les autres ; le mur de Berlin est ouvert le 9 novembre.",
              "L’Allemagne est réunifiée en 1990 ; l’URSS disparaît en décembre 1991.",
            ],
          },
        ],
        dates: [
          { an: 1947, label: "Doctrine Truman ; plan Marshall" },
          { an: 1949, label: "OTAN ; création des deux Allemagnes" },
          { an: 1961, label: "Construction du mur de Berlin" },
          { an: 1962, label: "Crise des missiles de Cuba" },
          { an: 1989, label: "Chute du mur de Berlin" },
          { an: 1991, label: "Disparition de l’URSS" },
        ],
        notions: [
          { mot: "Guerre froide", def: "Affrontement indirect entre les États-Unis et l’URSS de 1947 à 1991." },
          { mot: "Bloc", def: "Ensemble d’États alignés sur une superpuissance." },
          { mot: "Rideau de fer", def: "Frontière fermée séparant l’Europe de l’Ouest de l’Europe de l’Est." },
          { mot: "Coexistence pacifique", def: "Politique d’apaisement entre les deux blocs sans renoncer à la rivalité." },
          { mot: "Dissuasion nucléaire", def: "Stratégie visant à empêcher une attaque par la menace de représailles atomiques." },
        ],
        personnages: [
          { nom: "Harry Truman", vie: "1884 à 1972", role: "Président américain, initiateur de la politique d’endiguement." },
          { nom: "Nikita Khrouchtchev", vie: "1894 à 1971", role: "Dirigeant soviétique de la déstalinisation et de la crise de Cuba." },
          { nom: "Mikhaïl Gorbatchev", vie: "1931 à 2022", role: "Dernier dirigeant de l’URSS ; ses réformes précipitent la fin du système." },
        ],
        retenir: [
          "La guerre froide oppose deux modèles sans affrontement direct entre les deux Grands.",
          "Berlin en est le symbole : blocus, Mur, chute en 1989.",
          "1991 met fin au monde bipolaire avec la disparition de l’URSS.",
        ],
        quiz: [
          {
            q: "Que sont l’OTAN et le pacte de Varsovie ?",
            choix: ["Des accords commerciaux", "Les alliances militaires des deux blocs", "Des organisations de l’ONU", "Des plans d’aide économique"],
            bonne: 1,
            pourquoi: "L’OTAN (1949) rassemble le bloc de l’Ouest, le pacte de Varsovie (1955) le bloc de l’Est.",
          },
          {
            q: "En quelle année le mur de Berlin est-il ouvert ?",
            choix: ["1961", "1985", "1989", "1991"],
            bonne: 2,
            pourquoi: "Le 9 novembre 1989 ; l’URSS, elle, disparaît deux ans plus tard.",
          },
        ],
      },
      {
        id: "c-decolonisation",
        titre: "Indépendances et construction de nouveaux États",
        niveaux: ["3e", "tle"],
        accroche: "En vingt ans, la carte du monde change plus qu’en trois siècles.",
        resume:
          "Affaiblies par la guerre, les métropoles perdent leurs empires. Les indépendances " +
          "s’obtiennent par la négociation ou par la guerre. Les nouveaux États doivent " +
          "ensuite bâtir une nation, une économie et une place dans le monde.",
        parties: [
          {
            titre: "Pourquoi la décolonisation",
            points: [
              "La guerre a affaibli les métropoles et démenti leur prestige ; les colonisés ont combattu pour des principes qu’on leur refusait.",
              "L’ONU et les deux superpuissances sont, pour des raisons différentes, hostiles aux empires coloniaux.",
              "Des mouvements nationalistes structurés existent souvent depuis l’entre-deux-guerres.",
            ],
          },
          {
            titre: "Deux voies",
            points: [
              "Négociée : l’Inde et le Pakistan en 1947, malgré une partition meurtrière ; la plupart des colonies britanniques et françaises d’Afrique vers 1960.",
              "Par la guerre : l’Indochine (1946-1954, Diên Biên Phu) et l’Algérie (1954-1962), conflit long, marqué par la torture, le terrorisme et l’exode des rapatriés.",
              "Les accords d’Évian (mars 1962) conduisent à l’indépendance de l’Algérie en juillet 1962.",
            ],
          },
          {
            titre: "Après l’indépendance",
            points: [
              "Frontières héritées, économies dépendantes, régimes souvent autoritaires : la construction nationale est difficile.",
              "La conférence de Bandung (1955) affirme une voie propre ; naît le non-alignement, puis l’idée de « tiers-monde ».",
              "Les liens économiques et migratoires avec les anciennes métropoles restent forts.",
            ],
          },
        ],
        dates: [
          { an: 1947, label: "Indépendance de l’Inde et du Pakistan" },
          { an: 1954, label: "Diên Biên Phu ; début de la guerre d’Algérie" },
          { an: 1955, label: "Conférence de Bandung" },
          { an: 1960, label: "Année des indépendances africaines" },
          { an: 1962, label: "Accords d’Évian ; indépendance de l’Algérie" },
        ],
        notions: [
          { mot: "Décolonisation", def: "Accession des colonies à l’indépendance." },
          { mot: "Non-alignement", def: "Refus, par des États du Sud, de s’aligner sur l’un des deux blocs." },
          { mot: "Tiers-monde", def: "Terme désignant les pays nouvellement indépendants, souvent pauvres et dominés économiquement." },
          { mot: "Néocolonialisme", def: "Maintien d’une domination économique et politique après l’indépendance formelle." },
        ],
        personnages: [
          { nom: "Gandhi", vie: "1869 à 1948", role: "Figure de la lutte non violente pour l’indépendance de l’Inde." },
          { nom: "Ho Chi Minh", vie: "1890 à 1969", role: "Dirigeant de l’indépendance vietnamienne." },
          { nom: "Léopold Sédar Senghor", vie: "1906 à 2001", role: "Poète et premier président du Sénégal indépendant." },
        ],
        retenir: [
          "Les indépendances s’obtiennent par la négociation ou par la guerre.",
          "L’Algérie est le conflit le plus long et le plus douloureux pour la France.",
          "L’indépendance politique ne suffit pas : la dépendance économique persiste souvent.",
        ],
        quiz: [
          {
            q: "Quels accords mettent fin à la guerre d’Algérie ?",
            choix: ["Les accords de Genève", "Les accords d’Évian", "Les accords de Bandung", "Les accords de Yalta"],
            bonne: 1,
            pourquoi: "Signés en mars 1962, ils sont suivis d’un référendum et de l’indépendance en juillet.",
          },
          {
            q: "Qu’affirme la conférence de Bandung en 1955 ?",
            choix: ["L’alliance avec l’URSS", "Une voie propre aux pays nouvellement indépendants", "La fin de l’ONU", "La création de l’OTAN"],
            bonne: 1,
            pourquoi: "Elle condamne le colonialisme et pose les bases du non-alignement.",
          },
        ],
      },
      {
        id: "c-europe",
        titre: "La construction européenne",
        niveaux: ["3e", "tle"],
        accroche: "Mettre le charbon et l’acier en commun pour rendre la guerre matériellement impossible.",
        resume:
          "Après 1945, des Européens choisissent d’unir leurs économies pour éviter le retour " +
          "de la guerre. De la CECA à l’Union européenne, le projet s’élargit et s’approfondit, " +
          "sans cesser d’être débattu.",
        parties: [
          {
            titre: "Les débuts",
            points: [
              "Déclaration Schuman du 9 mai 1950 ; la CECA (1951) place charbon et acier sous une autorité commune.",
              "Le traité de Rome (1957) crée la CEE : marché commun, politique agricole commune.",
              "L’objectif est autant politique qu’économique : la réconciliation franco-allemande en est le cœur.",
            ],
          },
          {
            titre: "Élargir et approfondir",
            points: [
              "Élargissements successifs : Royaume-Uni en 1973, Espagne et Portugal en 1986, pays d’Europe centrale et orientale en 2004.",
              "Maastricht (1992) crée l’Union européenne et la citoyenneté européenne ; l’euro circule en 2002 ; l’espace Schengen supprime les contrôles aux frontières intérieures.",
              "Le Parlement européen est élu au suffrage universel direct depuis 1979.",
            ],
          },
          {
            titre: "Débats et crises",
            points: [
              "Le projet de Constitution européenne est rejeté par référendum en France et aux Pays-Bas en 2005.",
              "Crise de la dette, crises migratoires, Brexit voté en 2016 et effectif en 2020 : l’Union est régulièrement contestée.",
              "Elle reste le premier partenaire commercial de ses États membres et un cadre normatif majeur.",
            ],
          },
        ],
        dates: [
          { an: 1950, label: "Déclaration Schuman" },
          { an: 1957, label: "Traité de Rome : la CEE" },
          { an: 1992, label: "Traité de Maastricht : l’Union européenne" },
          { an: 2002, label: "Mise en circulation de l’euro" },
          { an: 2004, label: "Élargissement à dix nouveaux États" },
          { an: 2016, label: "Référendum sur le Brexit" },
        ],
        notions: [
          { mot: "CECA", def: "Communauté européenne du charbon et de l’acier, première institution communautaire (1951)." },
          { mot: "Marché commun", def: "Espace de libre circulation des marchandises, des capitaux et des personnes." },
          { mot: "Zone euro", def: "Ensemble des États membres ayant adopté la monnaie unique." },
          { mot: "Espace Schengen", def: "Zone de libre circulation sans contrôle aux frontières intérieures." },
        ],
        personnages: [
          { nom: "Robert Schuman", vie: "1886 à 1963", role: "Ministre français des Affaires étrangères, initiateur de la déclaration de 1950." },
          { nom: "Jean Monnet", vie: "1888 à 1979", role: "Inspirateur de la méthode communautaire, premier président de la CECA." },
        ],
        retenir: [
          "L’Europe se construit d’abord pour rendre la guerre impossible entre ses membres.",
          "1957 crée le marché commun, 1992 l’Union européenne et sa citoyenneté.",
          "Le projet est régulièrement contesté : référendums, Brexit, débats sur la souveraineté.",
        ],
        quiz: [
          {
            q: "Que crée le traité de Rome en 1957 ?",
            choix: ["La CECA", "La CEE et le marché commun", "L’euro", "L’espace Schengen"],
            bonne: 1,
            pourquoi: "La CECA date de 1951 ; l’euro et Schengen sont bien plus tardifs.",
          },
          {
            q: "Qu’instaure le traité de Maastricht en 1992 ?",
            choix: ["Le Parlement européen", "L’Union européenne et la citoyenneté européenne", "La politique agricole commune", "Le Brexit"],
            bonne: 1,
            pourquoi: "Il prévoit aussi la future monnaie unique, mise en circulation en 2002.",
          },
        ],
      },
      {
        id: "c-monde-1989",
        titre: "Le monde depuis 1989 : conflits et mondialisation",
        niveaux: ["3e", "tle"],
        accroche: "La fin d’un ordre n’a pas produit la paix, mais d’autres conflits.",
        resume:
          "Après 1991, les États-Unis dominent seuls, un temps. Nouveaux conflits, terrorisme, " +
          "émergence de la Chine, mondialisation des échanges et urgence climatique dessinent " +
          "un monde plus fragmenté qu’unifié.",
        parties: [
          {
            titre: "Un monde unipolaire, puis multipolaire",
            points: [
              "Les années 1990 voient les États-Unis en position dominante ; la guerre du Golfe (1991) est menée sous mandat de l’ONU.",
              "Les attentats du 11 septembre 2001 ouvrent la « guerre contre le terrorisme » : Afghanistan, puis Irak en 2003, sans mandat de l’ONU.",
              "La Chine devient la deuxième puissance économique mondiale ; la Russie réaffirme sa puissance, notamment en Ukraine.",
            ],
          },
          {
            titre: "Conflits d’un nouveau type",
            points: [
              "Guerres civiles et nettoyages ethniques : ex-Yougoslavie (Srebrenica, 1995), génocide des Tutsi au Rwanda (1994, environ 800 000 morts).",
              "Terrorisme international, conflits au Proche et Moyen-Orient, déplacements massifs de populations.",
              "La justice internationale se développe : TPI, puis Cour pénale internationale en 2002.",
            ],
          },
          {
            titre: "Mondialisation et défis communs",
            points: [
              "Échanges, capitaux, informations et migrations s’intensifient ; les inégalités se recomposent plus qu’elles ne disparaissent.",
              "Internet transforme l’économie, la culture et la politique ; l’information circule sans frontières.",
              "Défis globaux : climat (accord de Paris, 2015), pandémie de Covid-19 (2020), régulation du numérique.",
            ],
          },
        ],
        dates: [
          { an: 1991, label: "Guerre du Golfe ; fin de l’URSS" },
          { an: 1994, label: "Génocide des Tutsi au Rwanda" },
          { an: 2001, label: "Attentats du 11 septembre" },
          { an: 2002, label: "Création de la Cour pénale internationale" },
          { an: 2015, label: "Accord de Paris sur le climat" },
          { an: 2020, label: "Pandémie de Covid-19" },
        ],
        notions: [
          { mot: "Mondialisation", def: "Intensification des échanges de biens, de capitaux, d’informations et de personnes à l’échelle mondiale." },
          { mot: "Multipolaire", def: "Se dit d’un monde où plusieurs puissances rivalisent." },
          { mot: "Terrorisme", def: "Violence organisée contre des civils pour produire un effet politique par la peur." },
          { mot: "Justice internationale", def: "Institutions chargées de juger les crimes les plus graves, au-delà des États." },
        ],
        personnages: [
          { nom: "Nelson Mandela", vie: "1918 à 2013", role: "Prisonnier politique devenu président de l’Afrique du Sud après la fin de l’apartheid." },
        ],
        retenir: [
          "1991 ouvre un moment de domination américaine, refermé dans les années 2000.",
          "Les conflits deviennent surtout internes et frappent d’abord les civils.",
          "La mondialisation relie les sociétés mais crée des défis qu’aucun État ne peut traiter seul.",
        ],
        quiz: [
          {
            q: "Quel génocide a lieu en 1994 ?",
            choix: ["Celui des Bosniaques", "Celui des Tutsi au Rwanda", "Celui des Arméniens", "Celui des Kurdes"],
            bonne: 1,
            pourquoi: "Environ 800 000 personnes sont assassinées en une centaine de jours.",
          },
        ],
      },
      {
        id: "c-republique-1945",
        titre: "1944-1947 : refonder la République",
        niveaux: ["3e", "tle"],
        accroche: "On sort de la guerre en décidant, d’abord, de qui vote et de qui sera soigné.",
        resume:
          "À la Libération, la France rétablit la démocratie et applique le programme du CNR : " +
          "droit de vote des femmes, Sécurité sociale, nationalisations. La IVᵉ République " +
          "naît en 1946, avec un régime parlementaire instable.",
        parties: [
          {
            titre: "Rétablir la démocratie",
            points: [
              "Le Gouvernement provisoire dirigé par de Gaulle restaure la légalité républicaine et engage l’épuration.",
              "Ordonnance d’avril 1944 : les femmes obtiennent le droit de vote ; elles votent pour la première fois en avril 1945.",
              "La Constitution de 1946 fonde la IVᵉ République : Assemblée toute-puissante, gouvernements éphémères.",
            ],
          },
          {
            titre: "Le programme du CNR",
            points: [
              "Sécurité sociale (1945) : assurance maladie, retraites, allocations familiales, financées par les cotisations.",
              "Nationalisations : charbon, électricité et gaz, banques, Renault ; création de l’ENA et du Commissariat au Plan.",
              "Le préambule de 1946 reconnaît des droits sociaux : travail, santé, éducation, égalité femmes-hommes.",
            ],
          },
          {
            titre: "Reconstruire",
            points: [
              "Les Trente Glorieuses commencent : croissance forte, plein-emploi, hausse du niveau de vie.",
              "L’aide américaine du plan Marshall accélère la reconstruction.",
              "Mais la IVᵉ République s’épuise dans l’instabilité et les guerres coloniales.",
            ],
          },
        ],
        dates: [
          { an: 1944, label: "Droit de vote des femmes ; programme du CNR appliqué" },
          { an: 1945, label: "Création de la Sécurité sociale" },
          { an: 1946, label: "Constitution de la IVᵉ République" },
          { an: 1947, label: "Plan Marshall" },
        ],
        notions: [
          { mot: "Épuration", def: "Sanction des personnes ayant collaboré avec l’occupant." },
          { mot: "Sécurité sociale", def: "Système de protection contre la maladie, la vieillesse et les charges de famille." },
          { mot: "Nationalisation", def: "Transfert d’une entreprise privée à l’État." },
          { mot: "Trente Glorieuses", def: "Période de forte croissance économique, de 1945 à 1975 environ." },
        ],
        personnages: [
          { nom: "Ambroise Croizat", vie: "1901 à 1951", role: "Ministre du Travail, il met en place la Sécurité sociale." },
          { nom: "Pierre Mendès France", vie: "1907 à 1982", role: "Président du Conseil en 1954-1955 ; il met fin à la guerre d’Indochine." },
        ],
        retenir: [
          "1944 : les femmes obtiennent le droit de vote, quarante-cinq ans après leurs premières revendications organisées.",
          "1945 : la Sécurité sociale applique le programme du CNR.",
          "La IVᵉ République est démocratique mais politiquement instable.",
        ],
        quiz: [
          {
            q: "Quand les Françaises obtiennent-elles le droit de vote ?",
            choix: ["1936", "1944", "1946", "1958"],
            bonne: 1,
            pourquoi: "L’ordonnance date d’avril 1944 ; le premier vote a lieu aux municipales d’avril 1945.",
          },
          {
            q: "Quel grand système social est créé en 1945 ?",
            choix: ["Le RMI", "La Sécurité sociale", "Les congés payés", "Le SMIC"],
            bonne: 1,
            pourquoi: "Elle applique le programme du Conseil national de la Résistance.",
          },
        ],
      },
      {
        id: "c-cinquieme",
        titre: "La Vᵉ République, de 1958 à nos jours",
        niveaux: ["3e", "tle"],
        accroche: "Un régime né d’une crise coloniale, et toujours en place soixante-cinq ans plus tard.",
        resume:
          "Fondée en 1958 dans la crise algérienne, la Vᵉ République donne au président un rôle " +
          "central. Elle traverse Mai 68, l’alternance, les cohabitations, et connaît des " +
          "réformes de société majeures.",
        parties: [
          {
            titre: "Fonder",
            points: [
              "La crise du 13 mai 1958 en Algérie ramène de Gaulle ; la Constitution est adoptée par référendum en septembre.",
              "L’exécutif est renforcé : le président nomme le gouvernement, peut dissoudre l’Assemblée et recourir au référendum.",
              "En 1962, l’élection du président au suffrage universel direct est adoptée par référendum : le régime bascule vers une forte présidentialisation.",
            ],
          },
          {
            titre: "Contester et alterner",
            points: [
              "Mai 68 : grèves massives et contestation étudiante ; accords de Grenelle, puis dissolution et victoire électorale du pouvoir.",
              "1981 : l’alternance porte François Mitterrand à l’Élysée ; abolition de la peine de mort la même année.",
              "Cohabitations (1986, 1993, 1997) ; quinquennat adopté en 2000, appliqué en 2002.",
            ],
          },
          {
            titre: "Une société qui change",
            points: [
              "Droits des femmes : contraception (1967), IVG (loi Veil, 1975), parité (1999-2000).",
              "Autres jalons : majorité à 18 ans (1974), lois de décentralisation (1982), PACS (1999), mariage pour tous (2013).",
              "Débats récurrents : chômage, place de l’État, laïcité, immigration, participation électorale.",
            ],
          },
        ],
        dates: [
          { an: 1958, label: "Constitution de la Vᵉ République" },
          { an: 1962, label: "Élection du président au suffrage universel direct" },
          { an: 1968, label: "Mai 68" },
          { an: 1974, label: "Majorité à 18 ans" },
          { an: 1975, label: "Loi Veil sur l’IVG" },
          { an: 1981, label: "Alternance ; abolition de la peine de mort" },
        ],
        notions: [
          { mot: "Référendum", def: "Consultation directe des citoyens sur un texte ou une question." },
          { mot: "Cohabitation", def: "Situation où le président et le Premier ministre viennent de camps opposés." },
          { mot: "Alternance", def: "Passage du pouvoir d’une majorité politique à une autre." },
          { mot: "Décentralisation", def: "Transfert de compétences de l’État vers les collectivités territoriales." },
          { mot: "Parité", def: "Égal accès des femmes et des hommes aux mandats électoraux." },
        ],
        personnages: [
          { nom: "Charles de Gaulle", vie: "1890 à 1970", role: "Fondateur et premier président de la Vᵉ République." },
          { nom: "Simone Veil", vie: "1927 à 2017", role: "Ministre de la Santé ; elle fait adopter la loi sur l’IVG en 1975." },
          { nom: "François Mitterrand", vie: "1916 à 1996", role: "Premier président de gauche de la Vᵉ République, élu en 1981." },
        ],
        retenir: [
          "La Vᵉ République renforce l’exécutif ; 1962 la présidentialise davantage.",
          "1981 prouve que l’alternance est possible sans crise de régime.",
          "Les grandes réformes de société jalonnent la période, de 1975 à 2013.",
        ],
        quiz: [
          {
            q: "Que change le référendum de 1962 ?",
            choix: ["Il crée le quinquennat", "Il instaure l’élection du président au suffrage universel direct", "Il abolit le Sénat", "Il autorise la dissolution"],
            bonne: 1,
            pourquoi: "Cette réforme donne au président une légitimité populaire directe et transforme le régime.",
          },
          {
            q: "Quelle loi de 1975 porte le nom de Simone Veil ?",
            choix: ["La loi sur la contraception", "La loi sur l’IVG", "La loi sur la parité", "La loi sur le divorce"],
            bonne: 1,
            pourquoi: "Elle dépénalise l’interruption volontaire de grossesse, après des débats très violents.",
          },
        ],
      },
      {
        id: "c-societe",
        titre: "Femmes et hommes dans la société, des années 1950 aux années 1980",
        niveaux: ["3e", "tle"],
        accroche: "Trente ans pour passer de « chef de famille » à l’égalité inscrite dans le droit.",
        resume:
          "Croissance, salariat et urbanisation transforment les modes de vie. Les femmes " +
          "entrent massivement dans le travail salarié et conquièrent des droits civils, " +
          "professionnels et personnels.",
        parties: [
          {
            titre: "La société des Trente Glorieuses",
            points: [
              "Plein-emploi, consommation de masse, équipement des ménages, grands ensembles et étalement urbain.",
              "Le salariat devient la norme ; l’immigration de travail répond aux besoins de l’industrie.",
              "L’allongement des études transforme la jeunesse en groupe social visible.",
            ],
          },
          {
            titre: "Le travail des femmes",
            points: [
              "Leur part dans la population active augmente fortement à partir des années 1960, surtout dans le tertiaire.",
              "1965 : les femmes mariées peuvent travailler et ouvrir un compte bancaire sans l’autorisation de leur mari.",
              "1972 : la loi pose le principe « à travail égal, salaire égal » ; les écarts persistent néanmoins.",
            ],
          },
          {
            titre: "Conquérir des droits",
            points: [
              "1967 : loi Neuwirth autorisant la contraception ; 1975 : loi Veil sur l’IVG et loi sur le divorce par consentement mutuel.",
              "1970 : l’autorité parentale conjointe remplace la « puissance paternelle ».",
              "Le mouvement féministe des années 1970 (MLF) porte ces combats dans l’espace public.",
            ],
          },
        ],
        dates: [
          { an: 1965, label: "Les femmes mariées libres de travailler et d’avoir un compte" },
          { an: 1967, label: "Loi Neuwirth : contraception" },
          { an: 1970, label: "Autorité parentale conjointe" },
          { an: 1972, label: "Principe « à travail égal, salaire égal »" },
          { an: 1975, label: "Loi Veil ; divorce par consentement mutuel" },
        ],
        notions: [
          { mot: "Population active", def: "Ensemble des personnes qui travaillent ou cherchent un emploi." },
          { mot: "Société de consommation", def: "Société où la consommation de masse structure les modes de vie." },
          { mot: "Tertiaire", def: "Secteur des services, devenu majoritaire dans l’emploi." },
          { mot: "MLF", def: "Mouvement de libération des femmes, actif à partir de 1970." },
        ],
        personnages: [
          { nom: "Simone de Beauvoir", vie: "1908 à 1986", role: "Autrice du Deuxième Sexe (1949), référence du féminisme du XXᵉ siècle." },
          { nom: "Gisèle Halimi", vie: "1927 à 2020", role: "Avocate, elle plaide au procès de Bobigny (1972) et milite pour la dépénalisation de l’avortement." },
        ],
        retenir: [
          "Les Trente Glorieuses transforment le travail, la ville et la consommation.",
          "Les femmes entrent massivement dans l’emploi salarié à partir des années 1960.",
          "Entre 1965 et 1975, une série de lois établit l’égalité civile et les droits personnels.",
        ],
        quiz: [
          {
            q: "Que change la loi de 1965 pour les femmes mariées ?",
            choix: ["Elles obtiennent le droit de vote", "Elles peuvent travailler sans l’accord de leur mari", "Elles obtiennent l’égalité salariale", "Elles peuvent divorcer"],
            bonne: 1,
            pourquoi: "Elles peuvent aussi ouvrir un compte bancaire seules : la tutelle maritale prend fin.",
          },
        ],
      },
    ],
  },

  ];

  /* ── Index et utilitaires partagés ─────────────────────────────── */
  const CHAPITRES = [];
  PERIODES.forEach(p => {
    p.chapitres.forEach(c => {
      c.periodeId = p.id;
      c.periodeNom = p.nom;
      c.teinte = p.teinte;
      CHAPITRES.push(c);
    });
  });

  /* Tous les repères datés, ceux de la frise comme ceux des fiches,
     réunis sans doublon : c’est le matériau du mode révision. */
  function tousLesReperes() {
    const vus = new Set(), sortie = [];
    function ajouter(r, periode, chapitre) {
      const cle = r.an + "|" + r.label;
      if (vus.has(cle)) return;
      vus.add(cle);
      sortie.push({
        an: r.an, label: r.label,
        periodeId: periode.id, periodeNom: periode.nom, teinte: periode.teinte,
        niveaux: chapitre ? chapitre.niveaux : null,
        chapitreId: chapitre ? chapitre.id : null,
      });
    }
    PERIODES.forEach(p => {
      p.chapitres.forEach(c => (c.dates || []).forEach(d => ajouter(d, p, c)));
      (p.reperes || []).forEach(r => ajouter(r, p, null));
    });
    return sortie.sort((a, b) => a.an - b.an);
  }

  window.HISTOIRE = {
    niveaux: NIVEAUX,
    periodes: PERIODES,
    chapitres: CHAPITRES,
    periode(id) { return PERIODES.find(p => p.id === id) || null; },
    chapitre(id) { return CHAPITRES.find(c => c.id === id) || null; },
    reperes: tousLesReperes(),
    /* Format d’affichage d’une année : négative = avant Jésus-Christ. */
    an(n) {
      /* On ne groupe les milliers qu’au-delà de 9999 : « 1789 », mais
         « 300 000 av. J.-C. ». */
      const abs = Math.abs(n);
      const v = abs < 10000 ? String(abs)
              : abs.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ");
      return n < 0 ? v + " av. J.-C." : v;
    },
    /* Version courte, pour la frise. */
    anCourt(n) {
      if (n <= -100000) return "−" + Math.round(Math.abs(n) / 1000) + " 000";
      if (n < 0) return "−" + Math.abs(n);
      return String(n);
    },
  };
})();
