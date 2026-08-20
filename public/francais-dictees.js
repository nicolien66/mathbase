/* ═══════════════════════════════════════════════════════════════
   POLYMATES — francais-dictees.js : le recueil de dictées.

   Les textes sont écrits pour l'atelier, et non empruntés : chacun est
   construit autour de difficultés précises, annoncées dans `vise`, de
   façon qu'une faute renvoie toujours à un chapitre du cours.

     id      identifiant stable (sert à retrouver la dictée)
     titre   ce que l'élève lit avant de commencer
     niveau  1 = 6e/5e · 2 = 4e · 3 = 3e et brevet
     mots    longueur approximative, affichée avant de se lancer
     vise    chapitres travaillés (identifiants de francais-contenu.js)
     texte   les segments, tels qu'un professeur les dicterait
     pieges  les mots à commenter à la correction, quoi qu'il arrive

   Un segment est l'unité de dictée : on le lit, on le répète, on l'écrit.
   Découper le texte ici plutôt que par programme permet de couper là où
   un professeur couperait — au groupe de sens, pas à la virgule.
   ═══════════════════════════════════════════════════════════════ */

window.FRANCAIS_DICTEES = [

/* ── Niveau 1 : sixième et cinquième ──────────────────────────── */
{
  id: "le-jardin-de-septembre", titre: "Le jardin de septembre", niveau: 1, mots: 39,
  vise: ["accord-gn", "accord-verbe", "homophones"],
  texte: [
    "Les premières feuilles jaunes tombaient sur l'allée mouillée.",
    "Mon grand-père ramassait les pommes tombées pendant la nuit.",
    "Il les rangeait dans de grands paniers d'osier",
    "et me racontait ses souvenirs d'enfance.",
    "On entendait au loin les cloches de l'église."
  ],
  pieges: [
    { mot: "mouillée", pourquoi: "participe employé comme adjectif : il s'accorde avec « allée », féminin singulier.", chapitre: "accord-gn" },
    { mot: "tombées", pourquoi: "« pommes » est féminin pluriel : le participe suit.", chapitre: "participe-passe" },
    { mot: "ses", pourquoi: "possessif : ce sont les siens, ceux du grand-père.", chapitre: "homophones" },
    { mot: "On", pourquoi: "pronom sujet : on peut le remplacer par « il ».", chapitre: "homophones" }
  ]
},
{
  id: "la-nuit-du-phare", titre: "La nuit du phare", niveau: 1, mots: 40,
  vise: ["accord-verbe", "imparfait-passe-simple", "accents"],
  texte: [
    "Le vent soufflait si fort que les volets claquaient contre le mur.",
    "Dans la petite maison du gardien, la lampe à pétrole vacillait.",
    "Soudain, la lumière du phare balaya la mer noire",
    "et les rochers apparurent, luisants et blancs d'écume."
  ],
  pieges: [
    { mot: "claquaient", pourquoi: "le sujet est « les volets » : accord au pluriel malgré la distance.", chapitre: "accord-verbe" },
    { mot: "balaya", pourquoi: "passé simple : l'action est brève, elle fait avancer le récit.", chapitre: "imparfait-passe-simple" },
    { mot: "apparurent", pourquoi: "passé simple du 3e groupe, série en -u- : ils apparurent.", chapitre: "imparfait-passe-simple" },
    { mot: "pétrole", pourquoi: "accent aigu : la syllabe suivante ne contient pas de e muet.", chapitre: "accents" }
  ]
},
{
  id: "le-marche-du-samedi", titre: "Le marché du samedi", niveau: 1, mots: 35,
  vise: ["accord-gn", "homophones", "ponctuation"],
  texte: [
    "Sur les étals, les tomates mûres voisinaient avec des melons parfumés.",
    "La marchande, une vieille femme aux mains rouges,",
    "criait ses prix d'une voix éraillée.",
    "Ma mère hésitait toujours entre les cerises et les abricots."
  ],
  pieges: [
    { mot: "mûres", pourquoi: "accord avec « tomates », féminin pluriel ; et circonflexe obligatoire sur mûr.", chapitre: "accord-gn" },
    { mot: "parfumés", pourquoi: "accord avec « melons », masculin pluriel.", chapitre: "accord-gn" },
    { mot: "ses", pourquoi: "les siens, ceux de la marchande.", chapitre: "homophones" },
    { mot: "et", pourquoi: "conjonction : on peut dire « et puis ».", chapitre: "homophones" }
  ]
},
{
  id: "un-orage-en-montagne", titre: "Un orage en montagne", niveau: 1, mots: 37,
  vise: ["accord-verbe", "e-er-ez", "accents"],
  texte: [
    "Nous avions décidé de monter jusqu'au refuge avant la nuit.",
    "Le ciel, d'abord très bleu, s'était couvert en une heure.",
    "Il fallait marcher vite pour échapper à l'orage.",
    "Les premières gouttes commencèrent à tomber sur nos épaules."
  ],
  pieges: [
    { mot: "décidé", pourquoi: "participe passé après avoir : on dit « avions mordu ».", chapitre: "e-er-ez" },
    { mot: "monter", pourquoi: "infinitif après la préposition « de ».", chapitre: "e-er-ez" },
    { mot: "échapper", pourquoi: "infinitif après « pour ».", chapitre: "e-er-ez" },
    { mot: "commencèrent", pourquoi: "passé simple, 3e personne du pluriel du 1er groupe : -èrent.", chapitre: "imparfait-passe-simple" }
  ]
},
{
  id: "la-lettre-oubliee", titre: "La lettre oubliée", niveau: 1, mots: 40,
  vise: ["homophones", "accord-verbe", "participe-passe"],
  texte: [
    "Elle a trouvé la lettre dans un tiroir, sous des papiers jaunis.",
    "On l'avait écrite trente ans plus tôt, à l'encre violette.",
    "Ses mains tremblaient un peu quand elle a déplié la feuille.",
    "Où était donc passé le temps ?"
  ],
  pieges: [
    { mot: "a trouvé", pourquoi: "« a » est le verbe avoir : elle avait trouvé.", chapitre: "homophones" },
    { mot: "écrite", pourquoi: "le COD « l' » (la lettre) est placé avant : accord au féminin.", chapitre: "participe-passe" },
    { mot: "plus tôt", pourquoi: "en deux mots : le contraire de « plus tard ».", chapitre: "homophones" },
    { mot: "Où", pourquoi: "adverbe de lieu, avec accent grave — « ou » signifierait « ou bien ».", chapitre: "homophones" }
  ]
},

/* ── Niveau 2 : quatrième ─────────────────────────────────────── */
{
  id: "le-train-de-nuit", titre: "Le train de nuit", niveau: 2, mots: 45,
  vise: ["participe-passe", "accord-verbe", "imparfait-passe-simple", "homophones"],
  texte: [
    "Les voyageurs que le contrôleur avait réveillés cherchaient leurs billets.",
    "Dans le compartiment surchauffé, personne ne parlait.",
    "Une femme, qu'un long voyage avait épuisée, s'était endormie contre la vitre.",
    "Le train ralentit, puis s'arrêta dans une gare déserte",
    "dont je n'ai jamais su le nom."
  ],
  pieges: [
    { mot: "réveillés", pourquoi: "le COD « que » (les voyageurs) précède l'auxiliaire avoir : accord.", chapitre: "participe-passe" },
    { mot: "épuisée", pourquoi: "le COD « qu' » (une femme) précède : accord au féminin singulier.", chapitre: "participe-passe" },
    { mot: "endormie", pourquoi: "verbe pronominal, le pronom est COD : accord avec le sujet.", chapitre: "participe-passe" },
    { mot: "leurs", pourquoi: "déterminant devant un nom pluriel : il prend un -s.", chapitre: "homophones" },
    { mot: "s'arrêta", pourquoi: "passé simple : l'action est ponctuelle.", chapitre: "imparfait-passe-simple" }
  ]
},
{
  id: "atelier-du-relieur", titre: "L'atelier du relieur", niveau: 2, mots: 44,
  vise: ["accord-gn", "participe-passe", "accents", "e-er-ez"],
  texte: [
    "L'atelier sentait la colle chaude et le cuir neuf.",
    "Sur l'établi s'alignaient des feuilles dorées, fines comme des ailes.",
    "Le vieil homme, penché sur son ouvrage, ne levait pas la tête.",
    "Les livres qu'il avait reliés depuis quarante ans",
    "auraient rempli une bibliothèque entière."
  ],
  pieges: [
    { mot: "s'alignaient", pourquoi: "sujet inversé : ce sont « des feuilles » qui s'alignent.", chapitre: "accord-verbe" },
    { mot: "dorées", pourquoi: "accord avec « feuilles », féminin pluriel.", chapitre: "accord-gn" },
    { mot: "reliés", pourquoi: "le COD « qu' » (les livres) précède : accord au masculin pluriel.", chapitre: "participe-passe" },
    { mot: "auraient rempli", pourquoi: "conditionnel passé ; le participe ne s'accorde pas, le COD suit.", chapitre: "futur-conditionnel" },
    { mot: "établi", pourquoi: "accent aigu, et non grave : la syllabe suivante n'a pas de e muet.", chapitre: "accents" }
  ]
},
{
  id: "la-riviere-en-crue", titre: "La rivière en crue", niveau: 2, mots: 49,
  vise: ["accord-verbe", "subordonnees", "imparfait-passe-simple", "homophones"],
  texte: [
    "Depuis trois jours, la pluie qui tombait sans relâche avait gonflé la rivière.",
    "Les habitants du hameau, que le maire avait prévenus la veille,",
    "montaient leurs meubles à l'étage.",
    "Bien qu'ils fussent inquiets, personne ne songeait à partir.",
    "Ce n'est que le lendemain matin que l'eau atteignit le pont."
  ],
  pieges: [
    { mot: "tombait", pourquoi: "le sujet est « qui », dont l'antécédent est « la pluie » : singulier.", chapitre: "accord-verbe" },
    { mot: "prévenus", pourquoi: "le COD « que » (les habitants) précède avoir : accord au pluriel.", chapitre: "participe-passe" },
    { mot: "montaient", pourquoi: "le sujet est « les habitants », séparé par une relative.", chapitre: "accord-verbe" },
    { mot: "fussent", pourquoi: "subjonctif imparfait après « bien que » ; le subjonctif y est obligatoire.", chapitre: "subjonctif" },
    { mot: "atteignit", pourquoi: "passé simple d'atteindre : la voyelle est un i, non un e.", chapitre: "imparfait-passe-simple" }
  ]
},
{
  id: "portrait-de-la-couturiere", titre: "Portrait de la couturière", niveau: 2, mots: 42,
  vise: ["accord-gn", "groupe-nominal", "participe-passe", "accents"],
  texte: [
    "Elle portait toujours des robes gris perle, taillées dans un tissu épais.",
    "Ses cheveux blancs, ramenés en un chignon serré,",
    "découvraient un front haut et volontaire.",
    "Les commandes qu'on lui avait passées s'entassaient sur la table,",
    "mais elle ne se pressait jamais."
  ],
  pieges: [
    { mot: "gris perle", pourquoi: "couleur composée : elle reste invariable.", chapitre: "accord-gn" },
    { mot: "taillées", pourquoi: "accord avec « robes », féminin pluriel.", chapitre: "accord-gn" },
    { mot: "ramenés", pourquoi: "accord avec « cheveux », masculin pluriel.", chapitre: "accord-gn" },
    { mot: "passées", pourquoi: "le COD « qu' » (les commandes) précède avoir : accord au féminin pluriel.", chapitre: "participe-passe" },
    { mot: "s'entassaient", pourquoi: "le sujet reste « les commandes » : pluriel.", chapitre: "accord-verbe" }
  ]
},
{
  id: "le-departement-des-cartes", titre: "Le département des cartes", niveau: 2, mots: 50,
  vise: ["homophones", "accord-verbe", "e-er-ez", "ponctuation"],
  texte: [
    "Quand on pousse la porte, on est saisi par l'odeur du papier ancien.",
    "Les cartes que les géographes ont dessinées au siècle dernier",
    "sont rangées dans de longs tiroirs plats.",
    "Il faut les manipuler avec précaution, car elles se déchirent facilement.",
    "Leur encre a pâli, mais leurs contours restent nets."
  ],
  pieges: [
    { mot: "on est", pourquoi: "« on » se remplace par « il » ; « est » par « était ».", chapitre: "homophones" },
    { mot: "dessinées", pourquoi: "le COD « que » (les cartes) précède : accord.", chapitre: "participe-passe" },
    { mot: "manipuler", pourquoi: "infinitif : on dirait « il faut mordre ».", chapitre: "e-er-ez" },
    { mot: "Leur", pourquoi: "déterminant devant « encre », singulier : pas de -s.", chapitre: "homophones" },
    { mot: "leurs contours", pourquoi: "déterminant devant un nom pluriel : -s obligatoire.", chapitre: "homophones" }
  ]
},

/* ── Niveau 3 : troisième et brevet ───────────────────────────── */
{
  id: "la-fabrique-abandonnee", titre: "La fabrique abandonnée", niveau: 3, mots: 60,
  vise: ["participe-passe", "accord-verbe", "subordonnees", "voix", "homophones"],
  texte: [
    "La fabrique, que la ville avait laissée à l'abandon pendant vingt ans,",
    "n'était plus qu'une carcasse de briques et de verre brisé.",
    "Les machines qu'on en avait retirées dormaient ailleurs, dans des hangars.",
    "Quoi qu'on en dise, ces murs avaient abrité des centaines de familles",
    "dont les noms ne figurent nulle part.",
    "On les a effacés sans y prendre garde."
  ],
  pieges: [
    { mot: "laissée", pourquoi: "le COD « que » (la fabrique) précède avoir : accord au féminin.", chapitre: "participe-passe" },
    { mot: "retirées", pourquoi: "le COD « qu' » (les machines) précède : accord au féminin pluriel.", chapitre: "participe-passe" },
    { mot: "Quoi qu'on", pourquoi: "« quoi que » en deux mots : quelle que soit la chose qu'on dise.", chapitre: "homophones" },
    { mot: "dont", pourquoi: "pronom relatif remplaçant un complément introduit par « de ».", chapitre: "subordonnees" },
    { mot: "effacés", pourquoi: "le COD « les » (les noms) précède avoir : accord au masculin pluriel.", chapitre: "participe-passe" }
  ]
},
{
  id: "conseil-municipal", titre: "Le conseil municipal", niveau: 3, mots: 49,
  vise: ["subjonctif", "subordonnees", "homophones", "connecteurs", "voix"],
  texte: [
    "Bien que le projet eût été voté à l'unanimité,",
    "il fallut attendre deux ans avant que les travaux ne commencent.",
    "Certains habitants craignaient qu'on ne détruisît la vieille halle ;",
    "d'autres, au contraire, souhaitaient qu'elle fût enfin remplacée.",
    "Quels que soient les arguments avancés,",
    "la décision leur échappait complètement."
  ],
  pieges: [
    { mot: "eût été voté", pourquoi: "subjonctif plus-que-parfait après « bien que », à la voix passive.", chapitre: "subjonctif" },
    { mot: "avant que", pourquoi: "conjonction toujours suivie du subjonctif : l'action n'a pas eu lieu.", chapitre: "subordonnees" },
    { mot: "qu'elle", pourquoi: "« que » + pronom : on peut remplacer par « qu'il ».", chapitre: "homophones" },
    { mot: "Quels que soient", pourquoi: "« quel » s'accorde avec « les arguments », masculin pluriel.", chapitre: "homophones" },
    { mot: "leur", pourquoi: "pronom devant le verbe : invariable, jamais de -s.", chapitre: "homophones" }
  ]
},
{
  id: "traversee-de-l-estuaire", titre: "La traversée de l'estuaire", niveau: 3, mots: 56,
  vise: ["participe-passe", "valeurs-temps", "accord-verbe", "discours-rapporte"],
  texte: [
    "Dès que le bac eut quitté le quai, la brume les enveloppa.",
    "Le passeur, qui avait fait cette traversée des milliers de fois,",
    "affirmait qu'il connaissait le chenal par cœur.",
    "Les enfants s'étaient assis à l'avant ;",
    "leur mère les avait pourtant appelés deux fois.",
    "On n'y voyait plus rien, mais nul ne semblait s'en inquiéter."
  ],
  pieges: [
    { mot: "eut quitté", pourquoi: "passé antérieur : l'action précède celle du passé simple.", chapitre: "temps-composes" },
    { mot: "connaissait", pourquoi: "concordance : le verbe introducteur est au passé, le présent devient imparfait.", chapitre: "valeurs-temps" },
    { mot: "assis", pourquoi: "pronominal, le pronom est COD : accord avec « les enfants ».", chapitre: "participe-passe" },
    { mot: "appelés", pourquoi: "le COD « les » précède avoir : accord au masculin pluriel.", chapitre: "participe-passe" },
    { mot: "n'y", pourquoi: "négation « ne » élidée devant « y » : on n'y voyait rien.", chapitre: "types-formes" }
  ]
},
{
  id: "archives-de-la-prefecture", titre: "Aux archives de la préfecture", niveau: 3, mots: 50,
  vise: ["participe-passe", "voix", "subordonnees", "homophones", "accents"],
  texte: [
    "Les registres avaient été classés par ordre alphabétique,",
    "puis oubliés dans une cave dont la clé s'était perdue.",
    "Quand on les a rouverts, les pages qu'on croyait détruites",
    "étaient restées presque intactes.",
    "L'archiviste s'est étonnée qu'un papier si mince ait résisté à l'humidité.",
    "Quant aux reliures, elles n'avaient pas tenu."
  ],
  pieges: [
    { mot: "avaient été classés", pourquoi: "plus-que-parfait passif : le participe s'accorde avec le sujet.", chapitre: "voix" },
    { mot: "s'était perdue", pourquoi: "pronominal, pronom COD : accord avec « la clé ».", chapitre: "participe-passe" },
    { mot: "étonnée", pourquoi: "pronominal, pronom COD : accord avec « l'archiviste », féminin.", chapitre: "participe-passe" },
    { mot: "ait résisté", pourquoi: "subjonctif passé après un verbe de sentiment.", chapitre: "subjonctif" },
    { mot: "Quant aux", pourquoi: "« quant à » signifie « en ce qui concerne » — ne pas confondre avec « quand ».", chapitre: "homophones" }
  ]
},
{
  id: "le-dernier-jour-de-classe", titre: "Le dernier jour de classe", niveau: 3, mots: 55,
  vise: ["participe-passe", "discours-rapporte", "homophones", "valeurs-temps"],
  texte: [
    "Le professeur nous avait prévenus : il ne reviendrait pas l'année suivante.",
    "Nous nous sommes regardés sans rien dire.",
    "Quelques-uns se sont levés ; d'autres sont restés assis,",
    "les mains posées à plat sur la table.",
    "Il nous a serré la main, à chacun, comme s'il nous avait tous reconnus.",
    "Puis la sonnerie a retenti."
  ],
  pieges: [
    { mot: "prévenus", pourquoi: "le COD « nous » précède avoir : accord au masculin pluriel.", chapitre: "participe-passe" },
    { mot: "reviendrait", pourquoi: "conditionnel : futur dans le passé, après un verbe introducteur au passé.", chapitre: "valeurs-temps" },
    { mot: "regardés", pourquoi: "pronominal réciproque, pronom COD : accord avec le sujet.", chapitre: "participe-passe" },
    { mot: "a serré", pourquoi: "le COD « la main » suit le verbe : aucun accord.", chapitre: "participe-passe" },
    { mot: "reconnus", pourquoi: "le COD « nous » précède : accord au masculin pluriel.", chapitre: "participe-passe" }
  ]
},
{
  id: "sur-le-quai", titre: "Sur le quai", niveau: 3, mots: 64,
  vise: ["accord-verbe", "participe-passe", "subordonnees", "connecteurs", "voix"],
  texte: [
    "La plupart des passagers étaient descendus bien avant l'arrivée.",
    "Seuls quelques employés, que le froid n'atteignait pas,",
    "surveillaient encore les chariots alignés le long des rails.",
    "Le chef de gare, dont la silhouette se découpait sous la verrière,",
    "leva son drapeau ; aussitôt, les portes furent refermées.",
    "Il n'y eut ni cri ni adieu :",
    "tout se passa comme si personne n'était jamais parti."
  ],
  pieges: [
    { mot: "La plupart des passagers étaient", pourquoi: "après « la plupart de », l'accord se fait au pluriel.", chapitre: "accord-verbe" },
    { mot: "atteignait", pourquoi: "le sujet est « le froid » ; « que » est COD, pas sujet.", chapitre: "accord-verbe" },
    { mot: "furent refermées", pourquoi: "passif au passé simple : accord avec « les portes ».", chapitre: "voix" },
    { mot: "ni cri ni adieu", pourquoi: "double négation « ne… ni… ni » : les noms restent au singulier.", chapitre: "types-formes" },
    { mot: "se passa", pourquoi: "passé simple : l'action clôt le récit.", chapitre: "imparfait-passe-simple" }
  ]
},

/* ── Auto-dictées courtes : à mémoriser, puis à écrire de tête ── */
{
  id: "auto-le-vieux-pont", titre: "Le vieux pont", niveau: 1, mots: 19, auto: true,
  vise: ["accord-gn", "accord-verbe"],
  texte: [
    "Les pierres usées du vieux pont luisaient sous la pluie fine,",
    "et l'eau noire filait dessous sans un bruit."
  ],
  pieges: [
    { mot: "usées", pourquoi: "accord avec « pierres », féminin pluriel.", chapitre: "accord-gn" },
    { mot: "luisaient", pourquoi: "le sujet est « les pierres » : pluriel malgré l'éloignement.", chapitre: "accord-verbe" }
  ]
},
{
  id: "auto-la-promesse", titre: "La promesse", niveau: 2, mots: 19, auto: true,
  vise: ["participe-passe", "futur-conditionnel"],
  texte: [
    "Il avait promis qu'il reviendrait avant l'hiver,",
    "et les lettres qu'il nous a envoyées le répétaient à chaque page."
  ],
  pieges: [
    { mot: "reviendrait", pourquoi: "conditionnel présent : futur dans le passé.", chapitre: "futur-conditionnel" },
    { mot: "envoyées", pourquoi: "le COD « qu' » (les lettres) précède : accord au féminin pluriel.", chapitre: "participe-passe" }
  ]
},
{
  id: "auto-l-atelier", titre: "L'atelier", niveau: 3, mots: 20, auto: true,
  vise: ["participe-passe", "subjonctif"],
  texte: [
    "Bien qu'elle se fût blessé les doigts, elle acheva la pièce",
    "que son maître lui avait confiée le matin même."
  ],
  pieges: [
    { mot: "blessé", pourquoi: "le COD « les doigts » suit le verbe : pas d'accord, malgré « se ».", chapitre: "participe-passe" },
    { mot: "confiée", pourquoi: "le COD « que » (la pièce) précède avoir : accord au féminin.", chapitre: "participe-passe" }
  ]
}

];
