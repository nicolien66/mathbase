/* ═══════════════════════════════════════════════════════════════
   POLYMATES — francais-contenu.js
   Les trois grands thèmes de la langue française, leurs chapitres,
   et le cours de chaque chapitre.

   Structure d'un thème :
     { id, nom, titre, dates→(non), ouverture, teinte, chapitres: [...] }

   Structure d'un chapitre :
     { id, nom, resume, classe, cours: [ bloc… ], retenir: [ … ] }

   Structure d'un bloc de cours :
     { titre, texte, exemples: [ … ], tableau: { colonnes, lignes }, astuce }

   Conventions d'écriture dans les textes :
     · *mot*  → mis en valeur (petites capitales de l'accent)
     · un exemple commençant par « ✓ » est juste, par « ✗ » est fautif
   Le rendu est fait par francais.html ; ce fichier ne contient que du texte.
   ═══════════════════════════════════════════════════════════════ */

window.FRANCAIS_THEMES = [

/* ═══════════════════════════════════════════════════════════════
   I. ORTHOGRAPHE
   ═══════════════════════════════════════════════════════════════ */
{
  id: "orthographe",
  nom: "Orthographe",
  titre: "Écrire les mots<br><em>et les accorder.</em>",
  sous: "L'orthographe d'usage et l'orthographe grammaticale",
  teinte: "#8f2f22",
  ouverture:
    "L'orthographe française n'est pas un caprice : elle porte du sens. Un « s » de plus " +
    "change le nombre, un accent change le mot, un accord dit qui fait quoi. La bonne " +
    "nouvelle, c'est qu'une poignée de règles couvre l'immense majorité des fautes du brevet.",
  chapitres: [

  {
    id: "accord-gn",
    nom: "Les accords dans le groupe nominal",
    resume: "Le nom commande : déterminant et adjectifs suivent son genre et son nombre.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "Le nom noyau donne le ton",
        texte: "Dans un groupe nominal, un mot commande tous les autres : le *nom noyau*. " +
          "Il possède un genre (masculin ou féminin) et un nombre (singulier ou pluriel), " +
          "et il les impose au déterminant, aux adjectifs qualificatifs et aux participes " +
          "passés employés comme adjectifs.",
        exemples: [
          "✓ Les vieilles maisons abandonnées — maisons est féminin pluriel, donc les, vieilles et abandonnées le sont aussi.",
          "✓ Un long silence gêné — silence est masculin singulier."
        ],
        astuce: "Pour repérer le noyau, supprimez tout ce qui peut l'être : le mot qui reste est le noyau." },

      { titre: "Le pluriel des noms : la règle et ses sept exceptions",
        texte: "En règle générale, on ajoute *-s*. Restent quelques familles à connaître par cœur, " +
          "car elles tombent régulièrement en dictée.",
        tableau: {
          colonnes: ["Terminaison", "Pluriel", "Exceptions"],
          lignes: [
            ["-eau, -au, -eu", "-x : des tableaux, des feux", "landau, sarrau, bleu, pneu, émeu → -s"],
            ["-ou", "-s : des trous", "bijou, caillou, chou, genou, hibou, joujou, pou → -x"],
            ["-al", "-aux : des journaux", "bal, carnaval, festival, chacal, récital, régal → -s"],
            ["-ail", "-s : des détails", "bail, corail, émail, soupirail, travail, vantail, vitrail → -aux"],
            ["-s, -x, -z", "invariables : des nez, des prix", "—"]
          ]
        } },

      { titre: "Le pluriel et le féminin des adjectifs",
        texte: "L'adjectif prend en général *-e* au féminin et *-s* au pluriel, mais certaines " +
          "finales se transforment : -eux devient -euse, -f devient -ve, -er devient -ère, " +
          "et les adjectifs en -el, -eil, -en, -on, -et doublent souvent leur consonne.",
        exemples: [
          "✓ heureux → heureuse ; vif → vive ; léger → légère ; cruel → cruelle ; muet → muette",
          "✓ Un adjectif qui qualifie deux noms de genres différents se met au masculin pluriel : une veste et un pantalon neufs."
        ] },

      { titre: "Le cas des adjectifs de couleur",
        texte: "Un adjectif de couleur s'accorde… sauf dans deux situations. D'abord quand la " +
          "couleur est en réalité un *nom* employé comme adjectif (orange, marron, cerise, " +
          "turquoise, noisette). Ensuite quand la couleur est *composée* de deux mots.",
        exemples: [
          "✓ des rideaux verts, des chemises blanches",
          "✓ des rideaux orange, des yeux noisette (ce sont des noms : ils restent invariables)",
          "✓ des rideaux vert foncé, des yeux bleu-gris (couleurs composées : invariables)",
          "✗ des rideaux oranges, des yeux bleus-gris"
        ],
        astuce: "Rose, mauve, pourpre et fauve font exception : très anciens, ils s'accordent comme de vrais adjectifs." },

      { titre: "Les mots qui refusent l'accord",
        texte: "*Demi*, *nu*, *ci-joint* et *ci-inclus* restent invariables quand ils sont placés " +
          "*devant* le nom, et s'accordent quand ils sont placés après.",
        exemples: [
          "✓ une demi-heure, mais deux heures et demie",
          "✓ marcher nu-pieds, mais avoir les pieds nus",
          "✓ ci-joint la facture, mais la facture ci-jointe"
        ] }
    ],
    retenir: [
      "Repérez le nom noyau : c'est lui qui distribue genre et nombre.",
      "Sept familles de pluriels irréguliers : -eau/-au/-eu, -ou, -al, -ail, et les mots déjà en -s/-x/-z.",
      "Une couleur qui est un nom, ou une couleur en deux mots, ne s'accorde jamais.",
      "Masculin + féminin dans le même groupe = accord au masculin pluriel."
    ]
  },

  {
    id: "accord-verbe",
    nom: "L'accord du verbe avec son sujet",
    resume: "Trouver le vrai sujet, même caché, même loin, même inversé.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "La règle, en une phrase",
        texte: "Le verbe conjugué s'accorde en *personne* et en *nombre* avec son sujet. " +
          "Pour trouver le sujet, on pose la question « Qui est-ce qui… ? » ou « Qu'est-ce qui… ? » " +
          "juste avant le verbe.",
        exemples: [
          "✓ Les élèves travaillent. — Qui est-ce qui travaille ? les élèves (3ᵉ pers. pluriel)."
        ] },

      { titre: "Quand le sujet se cache",
        texte: "La plupart des fautes viennent d'un sujet qu'on n'a pas cherché. Quatre pièges " +
          "reviennent sans cesse.",
        exemples: [
          "Sujet inversé : ✓ Dans le jardin poussaient des roses. (ce sont les roses qui poussent)",
          "Écran d'un pronom complément : ✓ Les fleurs, je les arrose. (le sujet est je, pas les fleurs)",
          "Sujet éloigné : ✓ Le chien de mes voisins, malgré les grilles, aboie toute la nuit.",
          "Sujet séparé par une relative : ✓ Le livre que tu m'as prêté est passionnant."
        ] },

      { titre: "Le pronom relatif « qui »",
        texte: "Le pronom *qui* est sujet : il transmet au verbe la personne et le nombre de son " +
          "*antécédent*, c'est-à-dire le mot qu'il remplace.",
        exemples: [
          "✓ C'est moi qui ai raison. (qui = moi, 1ʳᵉ personne)",
          "✓ C'est vous qui aviez tort. (qui = vous, 2ᵉ personne du pluriel)",
          "✗ C'est moi qui a raison."
        ] },

      { titre: "Plusieurs sujets, ou un sujet collectif",
        texte: "Deux sujets ou plus entraînent le pluriel. Si les personnes diffèrent, la *1ʳᵉ " +
          "l'emporte* sur la 2ᵉ, et la 2ᵉ sur la 3ᵉ. Avec un nom collectif suivi d'un complément, " +
          "l'accord se fait avec le mot sur lequel on veut insister.",
        exemples: [
          "✓ Toi et moi partirons demain. (toi + moi = nous)",
          "✓ Ton frère et toi partirez demain. (lui + toi = vous)",
          "✓ La foule des curieux se pressait / se pressaient — les deux se disent.",
          "✓ Beaucoup d'élèves sont venus. La plupart des candidats réussissent. (toujours pluriel)"
        ],
        astuce: "Après « un des… qui », demandez-vous combien : un des rares élèves qui aient compris (plusieurs) mais c'est un livre qui plaît (un seul)." }
    ],
    retenir: [
      "Posez toujours la question « Qui est-ce qui… ? » — ne vous fiez pas au mot le plus proche.",
      "Un pronom complément (le, la, les, leur) n'est jamais le sujet.",
      "« Qui » prend la personne de son antécédent : c'est moi qui ai.",
      "1ʳᵉ personne > 2ᵉ personne > 3ᵉ personne quand les sujets se mélangent."
    ]
  },

  {
    id: "participe-passe",
    nom: "L'accord du participe passé",
    resume: "Avec être, avec avoir, ou tout seul : trois régimes, trois réflexes.",
    classe: "5ᵉ → 3ᵉ",
    cours: [
      { titre: "Sans auxiliaire : c'est un adjectif",
        texte: "Employé seul, le participe passé se comporte exactement comme un adjectif " +
          "qualificatif : il s'accorde avec le nom auquel il se rapporte.",
        exemples: ["✓ Des fenêtres ouvertes, une porte fermée, les devoirs finis."] },

      { titre: "Avec l'auxiliaire être : accord avec le sujet",
        texte: "Le participe passé employé avec *être* s'accorde en genre et en nombre avec le " +
          "*sujet* du verbe. Cela vaut aussi pour la voix passive.",
        exemples: [
          "✓ Elles sont arrivées à midi.",
          "✓ Les fenêtres ont été repeintes par le propriétaire."
        ] },

      { titre: "Avec l'auxiliaire avoir : accord avec le COD, s'il précède",
        texte: "Avec *avoir*, le participe passé ne s'accorde jamais avec le sujet. Il s'accorde " +
          "avec le *complément d'objet direct*, et seulement si celui-ci est placé *avant* le verbe. " +
          "Le COD précède dans trois cas : c'est un pronom (le, la, les, l'), c'est le relatif " +
          "*que*, ou la phrase est interrogative ou exclamative.",
        exemples: [
          "✓ Elle a mangé les pommes. (COD après → pas d'accord)",
          "✓ Les pommes qu'elle a mangées. (COD avant → accord)",
          "✓ Ces lettres, je les ai écrites hier.",
          "✓ Quelles erreurs a-t-il commises ?",
          "✗ Elle a mangée les pommes."
        ],
        astuce: "Réflexe : posez « … quoi ? » après le verbe. Si la réponse est déjà passée devant, accordez." },

      { titre: "Les verbes pronominaux : le pronom décide",
        texte: "Un verbe pronominal se conjugue avec *être*, mais l'accord suit en réalité la règle " +
          "de l'auxiliaire avoir. Tout dépend de la fonction du pronom réfléchi (me, te, se, nous, vous).",
        exemples: [
          "Pronom = COD → accord : ✓ Elles se sont lavées. (elles ont lavé qui ? elles-mêmes)",
          "Pronom = COI → pas d'accord : ✓ Elles se sont parlé. (elles ont parlé à qui ? à elles-mêmes)",
          "COD placé avant → accord avec lui : ✓ Les mains qu'elle s'est lavées.",
          "COD placé après → pas d'accord : ✓ Elle s'est lavé les mains."
        ],
        astuce: "Les verbes qui n'existent qu'à la forme pronominale (s'enfuir, se souvenir, s'évanouir) accordent toujours avec le sujet." },

      { titre: "Deux cas particuliers à mémoriser",
        texte: "Le participe *fait* suivi d'un infinitif reste toujours invariable. Le participe " +
          "*laissé* suit la même règle depuis la réforme de 1990. Enfin, les verbes impersonnels " +
          "(il a plu, il a fallu, il a fait) sont invariables.",
        exemples: [
          "✓ Les robes qu'elle a fait coudre.",
          "✓ Les efforts qu'il a fallu."
        ] }
    ],
    retenir: [
      "Seul → comme un adjectif. Avec être → avec le sujet. Avec avoir → avec le COD placé avant.",
      "Avec avoir et sans COD avant, le participe ne bouge pas.",
      "Pronominaux : demandez si le pronom est COD (accord) ou COI (invariable).",
      "« fait » + infinitif ne s'accorde jamais."
    ]
  },

  {
    id: "homophones",
    nom: "Les homophones grammaticaux",
    resume: "a/à, et/est, on/ont, ces/ses, leur/leurs : un test de remplacement pour chacun.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "Le principe : remplacer pour trancher",
        texte: "Deux mots qui se prononcent pareil ne s'écrivent pas pareil parce qu'ils n'ont pas " +
          "la même *nature*. Un verbe se met à un autre temps ; un déterminant se remplace par un " +
          "autre déterminant. Chaque paire a donc son test, et ce test est infaillible." },

      { titre: "Les verbes déguisés",
        texte: "Si l'imparfait passe, c'est un verbe.",
        tableau: {
          colonnes: ["Mot", "Nature", "Test"],
          lignes: [
            ["a", "verbe avoir", "remplacer par avait : il a compris → il avait compris"],
            ["à", "préposition", "ne se remplace pas : il va à Paris"],
            ["est", "verbe être", "remplacer par était : il est parti → il était parti"],
            ["et", "conjonction", "remplacer par et puis : toi et moi"],
            ["ont", "verbe avoir", "remplacer par avaient : ils ont ri → ils avaient ri"],
            ["on", "pronom sujet", "remplacer par il : on rit → il rit"],
            ["sont", "verbe être", "remplacer par étaient"],
            ["son", "déterminant possessif", "remplacer par mon : son livre → mon livre"]
          ]
        } },

      { titre: "Les déterminants et les pronoms",
        texte: "Ici le test consiste à changer le nombre ou à montrer du doigt.",
        tableau: {
          colonnes: ["Mot", "Nature", "Test"],
          lignes: [
            ["ces", "déterminant démonstratif", "on peut ajouter -là : ces livres-là"],
            ["ses", "déterminant possessif", "remplacer par les siens : ses livres → les siens"],
            ["ce", "démonstratif", "devant un nom ou le verbe être : ce chien, c'est vrai"],
            ["se", "pronom réfléchi", "devant un verbe : il se lave → je me lave"],
            ["leur", "pronom devant un verbe", "invariable, remplacer par lui : je leur parle"],
            ["leurs", "déterminant devant un nom", "remplacer par les siens : leurs affaires"],
            ["la / l'a / là", "article / pronom+avoir / adverbe", "la porte · il l'a vue (il l'avait vue) · reste là"],
            ["quel, quelle, quels, quelles", "déterminant", "suivi d'un nom ou de être : quelle heure"],
            ["qu'elle, qu'elles", "que + pronom", "remplacer par qu'il : je crois qu'elle vient → qu'il vient"]
          ]
        } },

      { titre: "Les invariables qui se ressemblent",
        texte: "Une dernière série, très fréquente dans les sujets de brevet.",
        tableau: {
          colonnes: ["Mot", "Sens", "Test"],
          lignes: [
            ["ou", "choix", "remplacer par ou bien"],
            ["où", "lieu ou temps", "ne se remplace pas : la ville où je vis"],
            ["peu", "quantité", "contraire de beaucoup"],
            ["peut / peux", "verbe pouvoir", "remplacer par pouvait / pouvais"],
            ["sans", "privation", "contraire de avec"],
            ["s'en", "pronoms se + en", "remplacer par m'en : il s'en va → je m'en vais"],
            ["quand", "moment", "remplacer par lorsque"],
            ["quant à", "en ce qui concerne", "suivi de à, au, aux"],
            ["qu'en", "que + en", "remplacer par que… de cela"],
            ["plutôt", "de préférence", "contraire : plus tôt (contraire de plus tard)"],
            ["près", "proximité", "près de la porte"],
            ["prêt", "adjectif", "s'accorde : elles sont prêtes"]
          ]
        } }
    ],
    retenir: [
      "Un homophone se résout par un test de remplacement, jamais par l'oreille.",
      "Verbe caché ? mettez la phrase à l'imparfait : a/est/ont/sont deviennent avait/était/avaient/étaient.",
      "« leur » devant un verbe ne prend jamais de -s.",
      "« quel » se rapporte à un nom, « qu'elle » se remplace par « qu'il »."
    ]
  },

  {
    id: "e-er-ez",
    nom: "Les terminaisons -é, -er, -ez, -ai, -ais",
    resume: "Un seul son, quatre orthographes : le test de « mordre » les départage.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "Le test du troisième groupe",
        texte: "Pour un verbe du 1ᵉʳ groupe, on ne distingue pas à l'oreille l'infinitif *chanter* " +
          "du participe *chanté*. On remplace donc le verbe par un verbe du 3ᵉ groupe, *mordre* " +
          "ou *vendre*, dont l'infinitif et le participe s'entendent différemment.",
        exemples: [
          "Je vais manger → je vais mordre : infinitif, donc -er.",
          "J'ai mangé → j'ai mordu : participe passé, donc -é.",
          "✗ Il faut travaillé — on ne dit pas il faut mordu."
        ],
        astuce: "Après une préposition (de, pour, sans, à, avant de), c'est toujours l'infinitif." },

      { titre: "-ez : la deuxième personne du pluriel",
        texte: "La terminaison *-ez* n'existe que pour la 2ᵉ personne du pluriel. Si le sujet " +
          "n'est pas *vous*, ce n'est pas -ez.",
        exemples: [
          "✓ Vous chantez juste.",
          "✗ Il faut chantez — le sujet n'est pas vous."
        ] },

      { titre: "-ai contre -ais : passé simple ou imparfait",
        texte: "À la 1ʳᵉ personne du singulier, *-ai* est le passé simple (action brève, achevée) " +
          "et *-ais* l'imparfait (durée, arrière-plan) ou le conditionnel.",
        exemples: [
          "✓ Je mangeai une pomme puis je sortis. (passé simple)",
          "✓ Je mangeais quand le téléphone sonna. (imparfait)"
        ],
        astuce: "Passez à la 3ᵉ personne : je mangeai → il mangea (passé simple) ; je mangeais → il mangeait (imparfait)." },

      { titre: "-rai contre -rais : futur ou conditionnel",
        texte: "Même piège au futur. *Je serai* annonce un fait à venir ; *je serais* exprime " +
          "une hypothèse, un souhait ou une politesse.",
        exemples: [
          "✓ Demain je serai à l'heure. (futur)",
          "✓ Si je pouvais, je serais à l'heure. (conditionnel)"
        ],
        astuce: "Remplacez par « nous » : je serai → nous serons (futur) ; je serais → nous serions (conditionnel)." }
    ],
    retenir: [
      "Remplacez le verbe par mordre : mordre → -er, mordu → -é.",
      "-ez impose le sujet vous.",
      "Après de, pour, sans, à, avant de : infinitif obligatoire.",
      "-ai = futur ou passé simple ; -ais = conditionnel ou imparfait."
    ]
  },

  {
    id: "accents",
    nom: "Accents, tréma et cédille",
    resume: "Où poser l'accent, et pourquoi la lettre suivante décide.",
    classe: "6ᵉ → 4ᵉ",
    cours: [
      { titre: "Trois accents, trois sons",
        texte: "L'accent *aigu* ne se met que sur le e et note le son [e] fermé. L'accent *grave* " +
          "note le [ɛ] ouvert sur le e, et distingue des homophones sur a, u (à, où, là). L'accent " +
          "*circonflexe* note souvent la disparition d'un ancien s : forêt venait de forest, " +
          "hôpital de hospital.",
        exemples: ["✓ été, fête, où, là, château, île (ancien isle)"] },

      { titre: "La règle de la syllabe suivante",
        texte: "Dans un verbe ou un mot de la même famille, on écrit *è* quand la syllabe suivante " +
          "contient un *e muet*, et *é* quand elle contient une voyelle prononcée.",
        exemples: [
          "✓ j'achète / nous achetons ; il mène / nous menons ; il cède / nous cédons",
          "✓ fidèle / fidélité ; règle / régulier"
        ] },

      { titre: "Quand l'accent disparaît",
        texte: "On ne met *jamais* d'accent sur un e suivi d'une consonne double, ni devant un x, " +
          "ni devant une consonne finale prononcée dans la même syllabe.",
        exemples: [
          "✓ belle, terre, cette, examen, exercice, mer, sec",
          "✗ bèlle, éxamen"
        ] },

      { titre: "La cédille et le tréma",
        texte: "La *cédille* s'écrit sous le c devant a, o, u pour garder le son [s] : elle est " +
          "inutile devant e et i. Le *tréma* indique qu'il faut prononcer séparément deux voyelles " +
          "voisines.",
        exemples: [
          "✓ un garçon, nous plaçons, il reçut — mais ceci, cinéma (pas de cédille)",
          "✓ maïs (deux sons) contre mais (un seul) ; Noël, aiguë, naïf"
        ] },

      { titre: "Ce que la réforme de 1990 a changé",
        texte: "L'accent circonflexe est devenu *facultatif* sur les lettres i et u, sauf lorsqu'il " +
          "distingue deux mots. Les deux orthographes sont acceptées au brevet ; il faut simplement " +
          "rester cohérent.",
        exemples: [
          "Facultatif : paraitre ou paraître, cout ou coût, ile ou île.",
          "Obligatoire : dû (≠ du), mûr (≠ mur), sûr (≠ sur), jeûne (≠ jeune)."
        ] }
    ],
    retenir: [
      "è devant une syllabe en e muet, é devant une voyelle prononcée.",
      "Jamais d'accent devant une consonne double ni devant x.",
      "Cédille seulement devant a, o, u.",
      "Le circonflexe reste obligatoire sur dû, mûr, sûr, jeûne."
    ]
  },

  {
    id: "ponctuation",
    nom: "Ponctuation, majuscules et trait d'union",
    resume: "Les signes ne décorent pas : ils découpent le sens et se placent selon des règles.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "Ce que fait chaque signe",
        texte: "La ponctuation organise la phrase : elle indique les pauses, les rapports entre " +
          "les propositions et le ton.",
        tableau: {
          colonnes: ["Signe", "Rôle", "Exemple"],
          lignes: [
            [". point", "ferme une phrase déclarative", "La nuit tombait."],
            [", virgule", "sépare, encadre, énumère", "Le vent, glacial, soufflait."],
            ["; point-virgule", "sépare deux propositions liées par le sens", "Il pleuvait ; personne ne sortit."],
            [": deux-points", "annonce une explication, une conséquence, une citation", "Il comprit : elle était partie."],
            ["… points de suspension", "interruption, sous-entendu", "Je crois que…"],
            ["? !", "interrogation, exclamation", "Qui vient ? Quelle chance !"],
            ["« » guillemets", "citation, paroles rapportées", "Il dit : « Entrez. »"],
            ["— tiret", "changement d'interlocuteur dans un dialogue", "— Tu viens ?"]
          ]
        } },

      { titre: "La virgule : ce qu'elle ne fait jamais",
        texte: "Une virgule ne sépare *jamais* le sujet de son verbe, ni le verbe de son COD, " +
          "sauf si elle ouvre et referme un groupe déplacé.",
        exemples: [
          "✗ Mon frère, est arrivé hier.",
          "✓ Mon frère, arrivé hier, repart demain. (le groupe est encadré par deux virgules)"
        ] },

      { titre: "Les espaces, une spécificité française",
        texte: "En français, les signes doubles ( ; : ? ! ) sont précédés d'une *espace insécable*. " +
          "Les guillemets français ouvrent avec une espace après, ferment avec une espace avant. " +
          "Les signes simples ( . , ) ne sont jamais précédés d'espace.",
        exemples: ["✓ Vraiment ? Oui : c'est ainsi. Il a dit : « Bonjour. »"] },

      { titre: "Les majuscules",
        texte: "On met une majuscule au début d'une phrase, aux noms propres, aux noms de peuples " +
          "et d'habitants. En revanche, les *langues*, les *adjectifs de nationalité*, les jours et " +
          "les mois restent en minuscules.",
        exemples: [
          "✓ Les Français parlent français. Un écrivain français.",
          "✓ lundi 3 mars — pas de majuscule."
        ] },

      { titre: "Le trait d'union",
        texte: "Il soude les mots composés (chou-fleur), relie le verbe et son sujet inversé " +
          "(dit-il), attache les pronoms après un impératif (donne-le-moi), et lie tous les " +
          "éléments d'un nombre composé depuis 1990.",
        exemples: [
          "✓ vingt-et-un, trois-cent-quarante-deux",
          "✓ Viens-tu ? Prends-en. Celui-ci, celle-là."
        ] }
    ],
    retenir: [
      "Deux-points = annonce ; point-virgule = équilibre entre deux propositions.",
      "Jamais de virgule seule entre le sujet et le verbe.",
      "Espace avant ; : ? ! et à l'intérieur des guillemets français.",
      "Le nom du peuple prend la majuscule, la langue ne la prend pas."
    ]
  }
  ]
},

/* ═══════════════════════════════════════════════════════════════
   II. GRAMMAIRE
   ═══════════════════════════════════════════════════════════════ */
{
  id: "grammaire",
  nom: "Grammaire",
  titre: "La phrase,<br><em>et comment elle tient.</em>",
  sous: "Natures, fonctions et construction de la phrase",
  teinte: "#4f6b52",
  ouverture:
    "La grammaire répond à deux questions seulement : qu'est-ce que ce mot, et que fait-il ici ? " +
    "La première interroge sa nature, qui ne change jamais ; la seconde sa fonction, qui change " +
    "à chaque phrase. Tout le reste en découle.",
  chapitres: [

  {
    id: "classes-de-mots",
    nom: "Les classes de mots",
    resume: "Neuf natures, cinq variables et quatre invariables : la carte d'identité des mots.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "Nature et fonction : ne pas confondre",
        texte: "La *nature* (ou classe grammaticale) d'un mot est sa carte d'identité : elle est " +
          "inscrite dans le dictionnaire et ne change jamais. La *fonction* est le rôle que ce mot " +
          "joue dans une phrase précise : elle change d'une phrase à l'autre.",
        exemples: [
          "Dans « Le chien dort », chien est un nom (nature) et sujet (fonction).",
          "Dans « Je vois le chien », chien est toujours un nom, mais COD."
        ] },

      { titre: "Les cinq classes variables",
        texte: "Elles changent de forme selon le genre, le nombre, la personne ou le temps.",
        tableau: {
          colonnes: ["Classe", "Ce qu'elle désigne", "Exemples"],
          lignes: [
            ["Le nom", "un être, une chose, une idée", "un loup, Paris, la peur"],
            ["Le déterminant", "précède le nom et l'actualise", "le, un, ce, mon, trois, quelques"],
            ["L'adjectif qualificatif", "précise une qualité du nom", "sombre, ancien, courageux"],
            ["Le pronom", "remplace un groupe nominal", "il, celui-ci, le mien, qui, personne"],
            ["Le verbe", "exprime action ou état", "courir, sembler, être"]
          ]
        } },

      { titre: "Les quatre classes invariables",
        texte: "Elles s'écrivent toujours de la même façon.",
        tableau: {
          colonnes: ["Classe", "Rôle", "Exemples"],
          lignes: [
            ["L'adverbe", "modifie un verbe, un adjectif, un autre adverbe", "vite, très, ne… pas, hier"],
            ["La préposition", "introduit un complément", "à, de, par, pour, sans, chez, malgré"],
            ["La conjonction de coordination", "relie deux éléments de même fonction", "mais, ou, et, donc, or, ni, car"],
            ["La conjonction de subordination", "introduit une proposition subordonnée", "que, quand, comme, si, parce que"]
          ]
        },
        astuce: "L'interjection (oh ! hélas ! chut !) forme une dixième classe, à part : elle ne se relie à rien." },

      { titre: "Reconnaître un mot dont on doute",
        texte: "Trois manipulations suffisent presque toujours : essayer de mettre le mot au " +
          "pluriel (seuls les variables bougent), regarder ce qui l'entoure, et tenter de le " +
          "remplacer par un mot dont on connaît la nature.",
        exemples: [
          "« Le bleu du ciel » : bleu suit un déterminant, c'est donc un nom, pas un adjectif.",
          "« Elle parle bas » : bas ne s'accorde pas, il modifie le verbe — c'est un adverbe."
        ] }
    ],
    retenir: [
      "La nature ne change jamais ; la fonction change à chaque phrase.",
      "Cinq variables : nom, déterminant, adjectif, pronom, verbe.",
      "Quatre invariables : adverbe, préposition, conjonction de coordination, conjonction de subordination.",
      "Un mot précédé d'un déterminant est un nom, quelle que soit son origine."
    ]
  },

  {
    id: "fonctions",
    nom: "Les fonctions dans la phrase",
    resume: "Sujet, attribut, COD, COI, compléments circonstanciels : qui fait quoi autour du verbe.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "Le verbe au centre",
        texte: "Toute la phrase s'organise autour du verbe. Certains groupes lui sont *essentiels* : " +
          "on ne peut ni les supprimer ni les déplacer. D'autres sont *circonstanciels* : " +
          "ils se suppriment et se déplacent librement.",
        exemples: [
          "✓ Hier, dans le train, j'ai lu ce livre. → J'ai lu ce livre. (les deux premiers groupes sont circonstanciels)",
          "✗ Hier, dans le train, j'ai lu. (ce livre est essentiel : c'est le COD)"
        ] },

      { titre: "Les fonctions essentielles",
        texte: "Chacune répond à une question posée après le verbe.",
        tableau: {
          colonnes: ["Fonction", "Question", "Exemple"],
          lignes: [
            ["Sujet", "qui est-ce qui ? qu'est-ce qui ?", "Le vent souffle."],
            ["COD", "verbe + qui ? quoi ?", "Il lit un roman."],
            ["COI", "verbe + à qui ? de quoi ?", "Il pense à son frère."],
            ["COS (second)", "second complément après un COD ou un COI", "Il offre un livre à sa sœur."],
            ["Attribut du sujet", "après un verbe d'état", "Elle semble fatiguée."],
            ["Complément d'agent", "par qui ? (à la voix passive)", "Le livre est lu par Léa."]
          ]
        },
        astuce: "Le COD n'a pas de préposition ; le COI en a toujours une (à, de)." },

      { titre: "Les verbes d'état, et l'attribut",
        texte: "Neuf verbes seulement introduisent un *attribut du sujet* : être, paraître, sembler, " +
          "devenir, rester, demeurer, avoir l'air, passer pour, se révéler. L'attribut s'accorde " +
          "avec le sujet, ce qui le distingue du COD.",
        exemples: [
          "✓ Elle est devenue médecin. (attribut : elle = médecin)",
          "✓ Elle a rencontré un médecin. (COD : elle ≠ médecin)"
        ] },

      { titre: "Les compléments circonstanciels",
        texte: "Ils précisent les circonstances de l'action. Les plus courants au collège : temps, " +
          "lieu, manière, moyen, cause, but, conséquence, comparaison, accompagnement, opposition.",
        exemples: [
          "Temps : ✓ Il est parti à l'aube.",
          "Lieu : ✓ Nous marchions le long de la rivière.",
          "Manière : ✓ Elle répondit avec douceur.",
          "Cause : ✓ Il tremble de froid.",
          "But : ✓ Elle travaille pour réussir."
        ] },

      { titre: "Les fonctions dans le groupe nominal",
        texte: "Deux fonctions n'appartiennent pas au verbe mais au nom : l'*épithète* (adjectif " +
          "collé au nom) et le *complément du nom* (groupe introduit par une préposition). " +
          "L'*apposition*, elle, est détachée par une virgule.",
        exemples: [
          "✓ une maison ancienne (épithète)",
          "✓ la maison de mon grand-père (complément du nom)",
          "✓ Paris, capitale de la France, attire les touristes. (apposition)"
        ] }
    ],
    retenir: [
      "Essentiel = ni supprimable ni déplaçable ; circonstanciel = les deux.",
      "COD sans préposition, COI avec préposition.",
      "L'attribut désigne le sujet lui-même ; le COD désigne autre chose.",
      "Épithète, complément du nom et apposition dépendent du nom, pas du verbe."
    ]
  },

  {
    id: "groupe-nominal",
    nom: "Le groupe nominal et ses expansions",
    resume: "Un noyau, des déterminants, et quatre façons d'enrichir un nom.",
    classe: "6ᵉ → 4ᵉ",
    cours: [
      { titre: "Les déterminants, en six familles",
        texte: "Le déterminant précède le nom et indique s'il est connu, possédé, montré, compté.",
        tableau: {
          colonnes: ["Famille", "Formes", "Effet"],
          lignes: [
            ["Articles définis", "le, la, les, l', au, du, aux, des", "l'être est identifié"],
            ["Articles indéfinis", "un, une, des", "l'être n'est pas identifié"],
            ["Articles partitifs", "du, de la, de l'", "une quantité non comptable : boire du lait"],
            ["Possessifs", "mon, ton, son, notre, leur…", "indiquent le possesseur"],
            ["Démonstratifs", "ce, cet, cette, ces", "montrent, désignent"],
            ["Indéfinis, numéraux, interrogatifs", "quelques, chaque, trois, quel", "quantifient ou interrogent"]
          ]
        } },

      { titre: "Enrichir le nom : quatre expansions",
        texte: "Le groupe nominal minimal est déterminant + nom. On peut l'étoffer de quatre façons, " +
          "et ces expansions se cumulent.",
        tableau: {
          colonnes: ["Expansion", "Nature", "Exemple"],
          lignes: [
            ["Adjectif épithète", "adjectif qualificatif", "une forêt sombre"],
            ["Complément du nom", "groupe nominal introduit par une préposition", "une forêt de sapins"],
            ["Proposition subordonnée relative", "proposition introduite par un pronom relatif", "une forêt qui s'étendait à perte de vue"],
            ["Apposition", "groupe détaché par une virgule", "la forêt, immense étendue verte, l'effrayait"]
          ]
        } },

      { titre: "Épithète liée ou détachée",
        texte: "Collé au nom, l'adjectif est *épithète liée* : il sert à identifier. Séparé par une " +
          "virgule, il est *épithète détachée* : il commente, il ajoute un point de vue.",
        exemples: [
          "✓ Les élèves fatigués sont rentrés. (seuls les élèves fatigués)",
          "✓ Les élèves, fatigués, sont rentrés. (tous, et ils étaient fatigués)"
        ],
        astuce: "La place de l'adjectif change parfois le sens : un grand homme (illustre) n'est pas un homme grand (de taille)." },

      { titre: "Ce que les expansions apportent à un texte",
        texte: "Dans une description, les expansions créent l'image et orientent le regard ; dans " +
          "une argumentation, elles précisent et nuancent. Les repérer est une question classique " +
          "du brevet : on demande la *nature* de l'expansion, puis son *effet*.",
        exemples: [
          "Sans expansion : ✓ Une maison se dressait.",
          "Avec : ✓ Une maison basse, aux volets clos, que personne n'habitait plus, se dressait."
        ] }
    ],
    retenir: [
      "Groupe nominal minimal = déterminant + nom noyau.",
      "Quatre expansions : épithète, complément du nom, subordonnée relative, apposition.",
      "L'épithète liée identifie, l'épithète détachée commente.",
      "Une question de brevet demande toujours la nature ET l'effet de l'expansion."
    ]
  },

  {
    id: "types-formes",
    nom: "Les types et les formes de phrases",
    resume: "Quatre types au choix, et des formes qui se superposent à eux.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "Quatre types, et un seul par phrase",
        texte: "Le type indique ce que fait la phrase : elle informe, elle demande, elle ordonne, " +
          "elle s'émeut. Une phrase a toujours un type, et un seul.",
        tableau: {
          colonnes: ["Type", "Rôle", "Marques", "Exemple"],
          lignes: [
            ["Déclaratif", "informer", "point", "Il pleut."],
            ["Interrogatif", "questionner", "point d'interrogation, inversion, est-ce que", "Pleut-il ?"],
            ["Injonctif", "ordonner, conseiller", "impératif, subjonctif, infinitif", "Ferme la porte."],
            ["Exclamatif", "exprimer un sentiment", "point d'exclamation, quel, comme, que", "Quelle pluie !"]
          ]
        } },

      { titre: "Les formes, qui se cumulent",
        texte: "Les formes se superposent au type. Une même phrase peut être à la fois négative, " +
          "passive et emphatique.",
        tableau: {
          colonnes: ["Forme", "Opposée à", "Exemple"],
          lignes: [
            ["Affirmative / négative", "—", "Il vient. / Il ne vient pas."],
            ["Active / passive", "—", "Léa lit le livre. / Le livre est lu par Léa."],
            ["Neutre / emphatique", "mise en relief", "Léa est venue. / C'est Léa qui est venue."],
            ["Personnelle / impersonnelle", "sujet réel ou non", "La pluie tombe. / Il pleut."]
          ]
        } },

      { titre: "L'interrogation : totale ou partielle, et trois registres",
        texte: "L'interrogation *totale* porte sur toute la phrase et se répond par oui ou non. " +
          "L'interrogation *partielle* porte sur un élément et utilise un mot interrogatif " +
          "(qui, que, où, quand, comment, pourquoi, combien, quel).",
        exemples: [
          "Courant : ✓ Tu viens ? · Soutenu : ✓ Viens-tu ? · Standard : ✓ Est-ce que tu viens ?",
          "Partielle : ✓ Quand pars-tu ? Où vas-tu ?"
        ] },

      { titre: "La négation, en deux morceaux",
        texte: "La négation française est formée de *deux* éléments qui encadrent le verbe conjugué. " +
          "À l'oral on omet souvent le « ne » : à l'écrit, jamais.",
        exemples: [
          "✓ ne… pas, ne… plus, ne… jamais, ne… rien, ne… personne, ne… aucun, ne… nulle part",
          "✗ Il vient pas.",
          "Attention : ✓ Il n'a que dix ans exprime une restriction (seulement), pas une négation."
        ] }
    ],
    retenir: [
      "Un seul type par phrase, mais plusieurs formes en même temps.",
      "Interrogation totale = oui/non ; partielle = mot interrogatif.",
      "À l'écrit, le « ne » de la négation est obligatoire.",
      "« ne… que » restreint, il ne nie pas."
    ]
  },

  {
    id: "phrase-complexe",
    nom: "Phrase simple et phrase complexe",
    resume: "Compter les verbes conjugués, puis regarder comment les propositions se relient.",
    classe: "5ᵉ → 3ᵉ",
    cours: [
      { titre: "Compter les verbes conjugués",
        texte: "Une *proposition* est un ensemble organisé autour d'un verbe conjugué. Une phrase " +
          "qui contient un seul verbe conjugué est *simple* ; à partir de deux, elle est *complexe*.",
        exemples: [
          "Simple : ✓ Le vent secouait les volets de la vieille maison. (un seul verbe conjugué)",
          "Complexe : ✓ Le vent secouait les volets et la pluie frappait les vitres. (deux)"
        ],
        astuce: "Les infinitifs et les participes ne comptent pas : ils ne sont pas conjugués." },

      { titre: "Trois façons de relier les propositions",
        texte: "Les propositions d'une phrase complexe se relient de trois manières seulement.",
        tableau: {
          colonnes: ["Lien", "Marque", "Rapport", "Exemple"],
          lignes: [
            ["Juxtaposition", "virgule, point-virgule, deux-points", "propositions indépendantes, de même rang", "Il pleuvait ; personne ne sortit."],
            ["Coordination", "mais, ou, et, donc, or, ni, car", "propositions indépendantes, de même rang", "Il pleuvait, donc personne ne sortit."],
            ["Subordination", "que, qui, quand, parce que…", "une proposition dépend de l'autre", "Personne ne sortit parce qu'il pleuvait."]
          ]
        } },

      { titre: "Principale et subordonnée",
        texte: "Dans la subordination, la proposition *subordonnée* ne peut pas exister seule : " +
          "elle dépend de la *principale*, dont elle occupe une fonction (complément du verbe, " +
          "du nom, ou circonstanciel).",
        exemples: [
          "✓ [Je crois] principale [qu'il viendra] subordonnée.",
          "✗ Qu'il viendra. (seule, la subordonnée ne veut rien dire)"
        ] },

      { titre: "Ce que le choix du lien produit",
        texte: "Juxtaposer, c'est laisser le lecteur établir le rapport ; coordonner, c'est le " +
          "nommer ; subordonner, c'est hiérarchiser. Un récit rapide multiplie les juxtapositions ; " +
          "une argumentation construite préfère la subordination.",
        exemples: [
          "Juxtaposition : ✓ Il ouvrit la porte, entra, referma. (rapidité)",
          "Subordination : ✓ Bien qu'il ait ouvert la porte, il n'entra pas. (nuance, concession)"
        ] }
    ],
    retenir: [
      "Nombre de verbes conjugués = nombre de propositions.",
      "Juxtaposition et coordination laissent les propositions égales ; la subordination en soumet une.",
      "La subordonnée occupe une fonction dans la principale.",
      "Le choix du lien est un choix de style, analysable dans un commentaire."
    ]
  },

  {
    id: "subordonnees",
    nom: "Les propositions subordonnées",
    resume: "Relative, complétive, circonstancielle, interrogative indirecte : les reconnaître.",
    classe: "4ᵉ → 3ᵉ",
    cours: [
      { titre: "La subordonnée relative : elle complète un nom",
        texte: "Elle est introduite par un *pronom relatif* (qui, que, quoi, dont, où, lequel, " +
          "duquel…) et complète un nom ou un pronom appelé *antécédent*. Sa fonction est " +
          "complément de l'antécédent.",
        tableau: {
          colonnes: ["Pronom relatif", "Fonction dans la subordonnée", "Exemple"],
          lignes: [
            ["qui", "sujet", "le livre qui traîne"],
            ["que", "COD", "le livre que je lis"],
            ["dont", "complément introduit par de", "le livre dont je parle"],
            ["où", "complément de lieu ou de temps", "la ville où je vis"],
            ["lequel, auquel…", "après une préposition", "le sujet auquel je pense"]
          ]
        },
        astuce: "Relative déterminative (sans virgule) : elle restreint. Relative explicative (entre virgules) : elle commente." },

      { titre: "La subordonnée conjonctive complétive : elle complète un verbe",
        texte: "Introduite par *que*, elle est le plus souvent COD du verbe de la principale. " +
          "Le mode dépend du verbe introducteur : indicatif après un verbe de certitude, " +
          "subjonctif après un verbe de volonté, de sentiment ou de doute.",
        exemples: [
          "✓ Je sais qu'il viendra. (certitude → indicatif)",
          "✓ Je veux qu'il vienne. (volonté → subjonctif)",
          "✓ Je doute qu'il vienne. Je crains qu'il ne vienne pas."
        ] },

      { titre: "Les subordonnées circonstancielles",
        texte: "Elles précisent les circonstances de l'action de la principale. Chaque rapport a " +
          "ses conjonctions et son mode.",
        tableau: {
          colonnes: ["Rapport", "Conjonctions", "Mode"],
          lignes: [
            ["Temps", "quand, lorsque, dès que, après que, pendant que", "indicatif"],
            ["Temps (antériorité)", "avant que, jusqu'à ce que, en attendant que", "subjonctif"],
            ["Cause", "parce que, puisque, comme, étant donné que", "indicatif"],
            ["Conséquence", "si bien que, de sorte que, au point que", "indicatif"],
            ["But", "pour que, afin que, de peur que", "subjonctif"],
            ["Condition", "si, à condition que, pourvu que, à moins que", "indicatif après si, sinon subjonctif"],
            ["Opposition / concession", "bien que, quoique, alors que, même si", "subjonctif (sauf alors que, même si)"],
            ["Comparaison", "comme, ainsi que, de même que, plus… que", "indicatif"]
          ]
        } },

      { titre: "L'interrogative indirecte",
        texte: "Quand on rapporte une question sans guillemets, la subordonnée devient " +
          "*interrogative indirecte* : elle perd le point d'interrogation et l'inversion du sujet.",
        exemples: [
          "Direct : ✓ Il demande : « Où vas-tu ? »",
          "Indirect : ✓ Il demande où tu vas.",
          "✗ Il demande où vas-tu ?"
        ],
        astuce: "« Est-ce que » devient « si » : Viens-tu ? → Il demande si tu viens." }
    ],
    retenir: [
      "Relative → complète un nom (antécédent). Complétive → complète un verbe.",
      "Circonstancielle → complète toute la principale, et se déplace.",
      "But, concession, condition (sauf si) et antériorité appellent le subjonctif.",
      "L'interrogative indirecte perd le point d'interrogation et l'inversion."
    ]
  },

  {
    id: "voix",
    nom: "La voix active et la voix passive",
    resume: "Le sujet agit ou subit : transformer sans changer le sens, et savoir pourquoi.",
    classe: "4ᵉ → 3ᵉ",
    cours: [
      { titre: "Deux façons de dire la même action",
        texte: "À la voix *active*, le sujet fait l'action. À la voix *passive*, il la subit. " +
          "Le COD de la phrase active devient le sujet de la phrase passive, et le sujet actif " +
          "devient *complément d'agent*, introduit par « par » ou « de ».",
        exemples: [
          "Actif : ✓ Le jardinier taille les rosiers.",
          "Passif : ✓ Les rosiers sont taillés par le jardinier."
        ] },

      { titre: "La transformation, pas à pas",
        texte: "Trois opérations, toujours dans le même ordre : le COD passe devant, le verbe se " +
          "met à l'auxiliaire *être* au temps du verbe actif, suivi du participe passé accordé avec " +
          "le nouveau sujet, et l'ancien sujet passe derrière avec « par ».",
        tableau: {
          colonnes: ["Temps", "Voix active", "Voix passive"],
          lignes: [
            ["Présent", "Léa lit le livre", "Le livre est lu par Léa"],
            ["Imparfait", "Léa lisait le livre", "Le livre était lu par Léa"],
            ["Passé composé", "Léa a lu le livre", "Le livre a été lu par Léa"],
            ["Futur", "Léa lira le livre", "Le livre sera lu par Léa"]
          ]
        },
        astuce: "Le temps du verbe passif est celui de l'auxiliaire être, pas celui du participe." },

      { titre: "Tous les verbes ne peuvent pas se mettre au passif",
        texte: "Seuls les verbes *transitifs directs*, c'est-à-dire ceux qui admettent un COD, " +
          "peuvent passer au passif. Un verbe intransitif ou transitif indirect ne le peut pas.",
        exemples: [
          "✓ Il ferme la porte → La porte est fermée.",
          "✗ Il part → aucun passif possible.",
          "✗ Il pense à son frère → aucun passif possible."
        ] },

      { titre: "Pourquoi un auteur choisit le passif",
        texte: "Le passif met en valeur ce qui subit et permet d'*effacer l'agent* quand on ne veut " +
          "pas le nommer, qu'on l'ignore, ou qu'on cherche à donner une impression d'impersonnalité. " +
          "Repérer un passif sans complément d'agent est souvent la clé d'une question de brevet.",
        exemples: [
          "✓ Le village fut détruit. (par qui ? l'agent est effacé : le lecteur devine une force qui le dépasse)",
          "✓ La loi a été votée. (l'auteur de l'action n'intéresse pas)"
        ] }
    ],
    retenir: [
      "COD actif → sujet passif ; sujet actif → complément d'agent.",
      "Le temps se lit sur l'auxiliaire être.",
      "Seuls les verbes transitifs directs ont un passif.",
      "Un passif sans agent efface volontairement le responsable de l'action."
    ]
  },

  {
    id: "discours-rapporte",
    nom: "Le discours rapporté",
    resume: "Direct, indirect, indirect libre, narrativisé : quatre façons de faire parler.",
    classe: "4ᵉ → 3ᵉ",
    cours: [
      { titre: "Le discours direct : les paroles telles quelles",
        texte: "Les paroles sont reproduites sans modification, signalées par des *guillemets*, " +
          "des *tirets* et un *verbe de parole* (dit-il, murmura-t-elle) qui peut se placer avant, " +
          "après ou au milieu.",
        exemples: [
          "✓ Il déclara : « Je pars demain. »",
          "✓ « Je pars, dit-il, et je ne reviendrai pas. »"
        ],
        astuce: "Le discours direct rend la scène vivante : on entend la voix, le niveau de langue, les hésitations." },

      { titre: "Le discours indirect : les paroles dans une subordonnée",
        texte: "Les paroles deviennent une *subordonnée conjonctive* introduite par que. La " +
          "ponctuation disparaît, et trois séries de changements s'imposent.",
        tableau: {
          colonnes: ["Ce qui change", "Direct", "Indirect"],
          lignes: [
            ["Les personnes", "« Je pars »", "il dit qu'il part"],
            ["Les temps (si le récit est au passé)", "« Je pars »", "il dit qu'il partait"],
            ["Les indications de temps", "hier, demain, aujourd'hui", "la veille, le lendemain, ce jour-là"],
            ["Les indications de lieu", "ici", "là"],
            ["L'interrogation", "« Viens-tu ? »", "il demande si je viens"]
          ]
        } },

      { titre: "Le discours indirect libre",
        texte: "Ni guillemets, ni subordonnée : les paroles ou les pensées se fondent dans le récit, " +
          "mais gardent les marques de la voix du personnage (exclamations, questions, niveau de " +
          "langue). C'est l'outil du roman réaliste, chez Flaubert notamment.",
        exemples: [
          "✓ Il regarda la pendule. Il était en retard, encore une fois. Que dirait-elle ?"
        ] },

      { titre: "Le récit de paroles",
        texte: "Le narrateur résume ce qui a été dit sans le rapporter. Les paroles sont réduites " +
          "à un groupe nominal ou à un verbe : c'est le mode le plus rapide, et le plus distant.",
        exemples: ["✓ Ils discutèrent longuement de son départ."] }
    ],
    retenir: [
      "Direct : guillemets, verbe de parole, paroles intactes.",
      "Indirect : subordonnée en que, plus de ponctuation, changement des personnes et des temps.",
      "Indirect libre : la voix du personnage dans la phrase du narrateur.",
      "Récit de paroles : le narrateur résume ; effet de distance et de rapidité."
    ]
  },

  {
    id: "connecteurs",
    nom: "Les connecteurs et la cohérence du texte",
    resume: "Ce qui tient un texte ensemble : les liens logiques et les reprises.",
    classe: "4ᵉ → 3ᵉ",
    cours: [
      { titre: "Les connecteurs logiques",
        texte: "Ils explicitent le rapport entre deux idées. Dans une rédaction argumentative, " +
          "ils sont le squelette du raisonnement.",
        tableau: {
          colonnes: ["Rapport", "Connecteurs"],
          lignes: [
            ["Addition", "de plus, en outre, par ailleurs, également"],
            ["Cause", "car, en effet, parce que, du fait de"],
            ["Conséquence", "donc, ainsi, par conséquent, c'est pourquoi"],
            ["Opposition", "mais, cependant, pourtant, en revanche, néanmoins"],
            ["Concession", "certes… mais, bien que, malgré"],
            ["But", "afin de, pour, dans le but de"],
            ["Illustration", "par exemple, ainsi, notamment"],
            ["Conclusion", "enfin, en somme, pour conclure"]
          ]
        } },

      { titre: "Les connecteurs temporels et spatiaux",
        texte: "Ils organisent le récit et la description : d'abord, ensuite, puis, alors, soudain, " +
          "enfin pour le temps ; à droite, au loin, au premier plan, plus bas pour l'espace.",
        exemples: ["✓ D'abord il hésita. Puis, soudain, il se décida."] },

      { titre: "Les reprises : ne pas répéter, ne pas perdre le lecteur",
        texte: "Un texte cohérent reprend ses éléments sans les répéter. Deux procédés : la reprise " +
          "*pronominale* (il, celui-ci, le sien, en, y) et la reprise *nominale*, qui apporte en " +
          "plus une information ou un point de vue.",
        exemples: [
          "Pronominale : ✓ Le loup approcha. Il ne faisait aucun bruit.",
          "Nominale : ✓ Le loup approcha. La bête ne faisait aucun bruit. (« la bête » ajoute un jugement)"
        ],
        astuce: "Le choix du mot de reprise trahit le regard du narrateur : le vieillard, le pauvre homme, le malheureux ne disent pas la même chose." },

      { titre: "Attention aux pronoms flottants",
        texte: "Un pronom doit renvoyer sans ambiguïté à un seul antécédent. Quand deux noms " +
          "possibles précèdent, il faut réécrire.",
        exemples: [
          "✗ Marie a rencontré Julie et elle lui a souri. (qui a souri à qui ?)",
          "✓ Marie a rencontré Julie, et cette dernière lui a souri."
        ] }
    ],
    retenir: [
      "Un connecteur nomme le rapport logique : sans lui, le lecteur doit deviner.",
      "Certes… mais est le couple type de la concession argumentative.",
      "Une reprise nominale ajoute toujours une information ou un jugement.",
      "Un pronom sans antécédent clair est une faute de cohérence."
    ]
  }
  ]
},

/* ═══════════════════════════════════════════════════════════════
   III. CONJUGAISON
   ═══════════════════════════════════════════════════════════════ */
{
  id: "conjugaison",
  nom: "Conjugaison",
  titre: "Le verbe,<br><em>et le temps qu'il porte.</em>",
  sous: "Modes, temps, valeurs et verbes irréguliers",
  teinte: "#2f4b6e",
  ouverture:
    "Conjuguer, ce n'est pas réciter : c'est choisir. Chaque temps installe un rapport au moment " +
    "où l'on parle, chaque mode dit si l'on affirme, si l'on suppose ou si l'on ordonne. " +
    "Les terminaisons, elles, obéissent à un petit nombre de séries qui se retiennent vite.",
  chapitres: [

  {
    id: "systeme-verbe",
    nom: "Le verbe : groupes, modes et temps",
    resume: "Radical et terminaison, trois groupes, sept modes : la carte générale.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "Radical et terminaison",
        texte: "Un verbe conjugué se compose d'un *radical*, qui porte le sens, et d'une " +
          "*terminaison*, qui porte le temps, le mode et la personne. Certains verbes changent " +
          "de radical selon le temps : ce sont les irréguliers.",
        exemples: ["✓ nous chant-ions : chant- (radical) + -ions (imparfait, 1ʳᵉ pers. pluriel)"] },

      { titre: "Les trois groupes",
        texte: "Le groupe se lit sur l'infinitif et sur le participe présent.",
        tableau: {
          colonnes: ["Groupe", "Infinitif", "Participe présent", "Exemples"],
          lignes: [
            ["1ᵉʳ", "-er (sauf aller)", "-ant", "chanter, aimer, jeter"],
            ["2ᵉ", "-ir", "-issant", "finir, choisir, grandir"],
            ["3ᵉ", "-ir, -oir, -re, et aller", "-ant", "partir, voir, prendre, aller"]
          ]
        },
        astuce: "Un verbe en -ir dont le participe présent ne fait pas -issant est du 3ᵉ groupe : partir → partant." },

      { titre: "Modes personnels et modes impersonnels",
        texte: "Quatre modes se conjuguent aux six personnes : *indicatif* (le réel), *subjonctif* " +
          "(le possible, le souhaité), *conditionnel* (l'hypothèse), *impératif* (l'ordre). " +
          "Trois modes ne se conjuguent pas : *infinitif*, *participe*, *gérondif*.",
        exemples: [
          "Indicatif : ✓ Il part. — Subjonctif : ✓ Je veux qu'il parte.",
          "Conditionnel : ✓ Il partirait si… — Impératif : ✓ Pars !",
          "Gérondif : ✓ Il chante en partant."
        ] },

      { titre: "Temps simples et temps composés",
        texte: "Un temps *simple* s'écrit en un mot. Un temps *composé* s'écrit en deux : " +
          "auxiliaire *être* ou *avoir* conjugué, suivi du participe passé. À chaque temps simple " +
          "correspond un temps composé qui exprime l'antériorité.",
        tableau: {
          colonnes: ["Temps simple", "Temps composé correspondant", "Exemple"],
          lignes: [
            ["Présent", "Passé composé", "je pars / je suis parti"],
            ["Imparfait", "Plus-que-parfait", "je partais / j'étais parti"],
            ["Passé simple", "Passé antérieur", "je partis / je fus parti"],
            ["Futur simple", "Futur antérieur", "je partirai / je serai parti"],
            ["Conditionnel présent", "Conditionnel passé", "je partirais / je serais parti"],
            ["Subjonctif présent", "Subjonctif passé", "que je parte / que je sois parti"]
          ]
        } }
    ],
    retenir: [
      "Radical = le sens, terminaison = le temps, le mode et la personne.",
      "3ᵉ groupe : tout ce qui n'est pas -er régulier ni -ir/-issant, plus aller.",
      "Quatre modes personnels, trois modes impersonnels.",
      "Un temps composé = auxiliaire + participe passé, et il marque l'antériorité."
    ]
  },

  {
    id: "present",
    nom: "Le présent de l'indicatif",
    resume: "Trois séries de terminaisons, quelques pièges d'orthographe, cinq valeurs.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "Les terminaisons, par groupe",
        texte: "Presque tous les verbes se répartissent en trois séries.",
        tableau: {
          colonnes: ["Personne", "1ᵉʳ groupe (chanter)", "2ᵉ groupe (finir)", "3ᵉ groupe (partir)"],
          lignes: [
            ["je", "chante", "finis", "pars"],
            ["tu", "chantes", "finis", "pars"],
            ["il / elle", "chante", "finit", "part"],
            ["nous", "chantons", "finissons", "partons"],
            ["vous", "chantez", "finissez", "partez"],
            ["ils / elles", "chantent", "finissent", "partent"]
          ]
        },
        astuce: "Pouvoir, vouloir et valoir font -x, -x, -t : je peux, tu peux, il peut." },

      { titre: "Les pièges orthographiques du 1ᵉʳ groupe",
        texte: "Le son doit rester le même à toutes les personnes : l'orthographe s'adapte donc.",
        exemples: [
          "Verbes en -cer : ✓ nous plaçons (cédille devant o)",
          "Verbes en -ger : ✓ nous mangeons (e devant o)",
          "Verbes en -yer : ✓ j'essaie / nous essayons (y devient i devant e muet)",
          "Verbes en -eler, -eter : ✓ j'appelle, je jette (consonne doublée) mais j'achète, je gèle (accent grave)"
        ] },

      { titre: "Les verbes en -dre et en -tre",
        texte: "Les verbes en *-dre* gardent le d à la 3ᵉ personne du singulier et ne prennent pas " +
          "de t : il prend, il répond, il coud. Exception : les verbes en *-indre* et *-soudre*, " +
          "qui perdent le d : il peint, il craint, il résout.",
        exemples: [
          "✓ je prends, tu prends, il prend",
          "✗ il prendt · ✗ il peind"
        ] },

      { titre: "Les cinq valeurs du présent",
        texte: "Le présent ne dit pas seulement « maintenant ».",
        tableau: {
          colonnes: ["Valeur", "Ce qu'elle exprime", "Exemple"],
          lignes: [
            ["Présent d'énonciation", "au moment où l'on parle", "Je te parle."],
            ["Présent de vérité générale", "toujours vrai", "L'eau bout à 100 °C."],
            ["Présent d'habitude", "action répétée", "Je me lève à sept heures."],
            ["Présent de narration", "rend vivant un récit au passé", "Il marchait ; soudain, une ombre surgit."],
            ["Présent à valeur de futur proche", "avenir immédiat", "Je pars dans dix minutes."]
          ]
        } }
    ],
    retenir: [
      "-e/-es/-e pour le 1ᵉʳ groupe, -is/-is/-it pour le 2ᵉ, -s/-s/-t (ou -d) pour le 3ᵉ.",
      "nous plaçons, nous mangeons : l'orthographe suit le son.",
      "Verbes en -dre : il prend, sans t — sauf -indre et -soudre.",
      "Le présent de narration au milieu d'un récit au passé signale un moment fort."
    ]
  },

  {
    id: "imparfait-passe-simple",
    nom: "L'imparfait et le passé simple",
    resume: "Les deux temps du récit : le décor et l'action, et comment les distinguer.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "L'imparfait : une seule série, sans exception",
        texte: "L'imparfait se forme sur le radical du *nous* du présent, auquel on ajoute " +
          "-ais, -ais, -ait, -ions, -iez, -aient. Aucun verbe français n'échappe à ces terminaisons.",
        exemples: [
          "nous finissons → je finissais ; nous prenons → je prenais ; nous voyons → je voyais",
          "Seul être est irrégulier au radical : j'étais."
        ],
        astuce: "Attention au i des verbes en -ier, -yer, -ller : nous criions, vous payiez, nous travaillions." },

      { titre: "Le passé simple : quatre séries à reconnaître",
        texte: "Le passé simple est un temps de l'écrit. Ses terminaisons se répartissent en quatre " +
          "familles, selon la voyelle qui les ouvre.",
        tableau: {
          colonnes: ["Série", "Verbes", "je", "il", "ils"],
          lignes: [
            ["en -a-", "1ᵉʳ groupe", "chantai", "chanta", "chantèrent"],
            ["en -i-", "2ᵉ groupe et beaucoup du 3ᵉ", "finis, pris", "finit, prit", "finirent, prirent"],
            ["en -u-", "certains du 3ᵉ groupe", "courus, voulus", "courut, voulut", "coururent, voulurent"],
            ["en -in-", "venir, tenir et composés", "vins, tins", "vint, tint", "vinrent, tinrent"]
          ]
        } },

      { titre: "Ce que chacun fait dans un récit",
        texte: "L'*imparfait* installe l'arrière-plan : décor, habitudes, actions qui durent ou " +
          "se répètent. Le *passé simple* fait avancer l'histoire : actions brèves, successives, " +
          "de premier plan. Leur alternance est le moteur du récit.",
        exemples: [
          "✓ Il faisait nuit et la pluie tombait (arrière-plan) quand une silhouette surgit (premier plan).",
          "✓ Chaque matin, il se levait à l'aube. (imparfait d'habitude)"
        ] },

      { titre: "Les pièges de dictée",
        texte: "À la 1ʳᵉ personne du singulier, *-ai* est un passé simple et *-ais* un imparfait. " +
          "À la 3ᵉ personne du pluriel du passé simple, on écrit -èrent, -irent, -urent, -inrent : " +
          "jamais -èrent pour un verbe du 3ᵉ groupe.",
        exemples: [
          "✓ Je marchai jusqu'au village. (passé simple)",
          "✓ Je marchais depuis une heure. (imparfait)",
          "✗ ils prirent devient ✗ ils prièrent"
        ] }
    ],
    retenir: [
      "Imparfait = radical du nous au présent + -ais, -ais, -ait, -ions, -iez, -aient.",
      "Passé simple : quatre séries, en -a-, -i-, -u-, -in-.",
      "Imparfait = décor et durée ; passé simple = action et rupture.",
      "-ai (passé simple) ne s'écrit jamais -ais."
    ]
  },

  {
    id: "futur-conditionnel",
    nom: "Le futur simple et le conditionnel présent",
    resume: "Un même radical, deux jeux de terminaisons — et une confusion classique.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "Le futur : l'infinitif porte les terminaisons",
        texte: "Le futur simple se forme sur l'*infinitif* du verbe, auquel on ajoute les " +
          "terminaisons -ai, -as, -a, -ons, -ez, -ont — qui sont celles du verbe avoir au présent.",
        exemples: [
          "✓ chanter → je chanterai ; finir → je finirai ; prendre → je prendrai (le e tombe)",
          "Radicaux irréguliers à connaître : être → je serai, avoir → j'aurai, aller → j'irai, faire → je ferai, venir → je viendrai, voir → je verrai, pouvoir → je pourrai, vouloir → je voudrai, savoir → je saurai, devoir → je devrai, falloir → il faudra."
        ],
        astuce: "Le r du futur est toujours présent : c'est la marque du temps." },

      { titre: "Le conditionnel : le radical du futur, les terminaisons de l'imparfait",
        texte: "Même radical que le futur, mais terminaisons -ais, -ais, -ait, -ions, -iez, -aient.",
        tableau: {
          colonnes: ["Personne", "Futur simple", "Conditionnel présent"],
          lignes: [
            ["je", "je serai", "je serais"],
            ["tu", "tu seras", "tu serais"],
            ["il", "il sera", "il serait"],
            ["nous", "nous serons", "nous serions"],
            ["vous", "vous serez", "vous seriez"],
            ["ils", "ils seront", "ils seraient"]
          ]
        } },

      { titre: "Ne pas confondre -rai et -rais",
        texte: "La confusion est la faute la plus fréquente à l'écrit. Deux tests la lèvent.",
        exemples: [
          "Test du nous : je serai → nous serons (futur) ; je serais → nous serions (conditionnel).",
          "Test du sens : si l'on peut ajouter « si… », c'est le conditionnel.",
          "✓ Demain, je viendrai. ✓ Si j'avais le temps, je viendrais."
        ] },

      { titre: "Les valeurs du conditionnel",
        texte: "Il n'est pas seulement un mode : c'est aussi un temps de l'indicatif quand il " +
          "exprime le *futur dans le passé*.",
        tableau: {
          colonnes: ["Valeur", "Exemple"],
          lignes: [
            ["Hypothèse (avec si + imparfait)", "Si j'étais riche, je voyagerais."],
            ["Politesse, demande atténuée", "Pourriez-vous m'aider ?"],
            ["Souhait, rêve", "J'aimerais tellement partir."],
            ["Information non vérifiée", "Le suspect serait en fuite."],
            ["Futur dans le passé", "Il annonça qu'il viendrait le lendemain."],
            ["Jeu, imaginaire", "On dirait que tu serais le roi."]
          ]
        },
        astuce: "Après « si » d'hypothèse, jamais de conditionnel : ✗ si j'aurais, ✓ si j'avais." }
    ],
    retenir: [
      "Futur = infinitif + terminaisons d'avoir au présent.",
      "Conditionnel = radical du futur + terminaisons de l'imparfait.",
      "Test du nous pour trancher entre -rai et -rais.",
      "Jamais de conditionnel juste après « si » d'hypothèse."
    ]
  },

  {
    id: "temps-composes",
    nom: "Les temps composés",
    resume: "Auxiliaire + participe passé : lequel choisir, et ce que l'antériorité veut dire.",
    classe: "5ᵉ → 3ᵉ",
    cours: [
      { titre: "La formation, toujours la même",
        texte: "Auxiliaire *être* ou *avoir* conjugué au temps simple correspondant, suivi du " +
          "participe passé du verbe. C'est l'auxiliaire qui porte le temps.",
        tableau: {
          colonnes: ["Temps composé", "Auxiliaire au…", "Exemple"],
          lignes: [
            ["Passé composé", "présent", "j'ai chanté, je suis parti"],
            ["Plus-que-parfait", "imparfait", "j'avais chanté, j'étais parti"],
            ["Passé antérieur", "passé simple", "j'eus chanté, je fus parti"],
            ["Futur antérieur", "futur simple", "j'aurai chanté, je serai parti"],
            ["Conditionnel passé", "conditionnel présent", "j'aurais chanté, je serais parti"],
            ["Subjonctif passé", "subjonctif présent", "que j'aie chanté, que je sois parti"]
          ]
        } },

      { titre: "Être ou avoir ? la question qui décide de l'accord",
        texte: "La grande majorité des verbes se conjuguent avec *avoir*. Se conjuguent avec " +
          "*être* : tous les verbes pronominaux, et une quinzaine de verbes de mouvement ou de " +
          "changement d'état.",
        exemples: [
          "Avec être : aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, passer, devenir, revenir.",
          "✓ Elle est montée au grenier. (sans COD → être)",
          "✓ Elle a monté les valises. (avec COD → avoir) — monter, descendre, sortir, passer changent d'auxiliaire selon qu'ils ont un COD."
        ] },

      { titre: "L'antériorité : le vrai rôle des temps composés",
        texte: "Un temps composé situe une action *avant* une autre. Chaque temps composé se lit " +
          "en couple avec son temps simple.",
        exemples: [
          "✓ Quand il eut fini, il sortit. (passé antérieur avant passé simple)",
          "✓ Il avait fermé la porte, puis il s'assit. (plus-que-parfait avant passé simple)",
          "✓ Dès que j'aurai terminé, je t'appellerai. (futur antérieur avant futur)"
        ] },

      { titre: "Le passé composé, temps à deux visages",
        texte: "Il exprime une action passée dont le résultat compte encore : c'est le passé du " +
          "*discours*, celui de la conversation et de la lettre. Dans un récit littéraire, il " +
          "remplace parfois le passé simple pour donner un ton plus proche, plus oral.",
        exemples: [
          "✓ J'ai perdu mes clés. (le résultat dure : je ne les ai toujours pas)",
          "Camus ouvre L'Étranger au passé composé : le récit en devient sec et immédiat."
        ] }
    ],
    retenir: [
      "L'auxiliaire porte le temps ; le participe porte le sens.",
      "Verbes pronominaux et une quinzaine de verbes de mouvement se conjuguent avec être.",
      "Monter, descendre, sortir, passer : avoir s'ils ont un COD, être sinon.",
      "Le temps composé marque une action antérieure à celle du temps simple correspondant."
    ]
  },

  {
    id: "imperatif",
    nom: "L'impératif présent",
    resume: "Trois personnes, pas de sujet, et un -s qui disparaît.",
    classe: "6ᵉ → 4ᵉ",
    cours: [
      { titre: "Un mode à trois personnes",
        texte: "L'impératif n'existe qu'à la 2ᵉ personne du singulier, à la 1ʳᵉ et à la 2ᵉ du " +
          "pluriel, et il s'écrit *sans sujet exprimé*.",
        tableau: {
          colonnes: ["Verbe", "2ᵉ sing.", "1ʳᵉ plur.", "2ᵉ plur."],
          lignes: [
            ["chanter", "chante", "chantons", "chantez"],
            ["finir", "finis", "finissons", "finissez"],
            ["prendre", "prends", "prenons", "prenez"],
            ["être", "sois", "soyons", "soyez"],
            ["avoir", "aie", "ayons", "ayez"],
            ["savoir", "sache", "sachons", "sachez"],
            ["vouloir", "veuille", "veuillons", "veuillez"]
          ]
        } },

      { titre: "Le -s qui tombe",
        texte: "À la 2ᵉ personne du singulier, les verbes du 1ᵉʳ groupe et *aller* perdent leur -s. " +
          "Il revient uniquement devant les pronoms *en* et *y*, pour faciliter la prononciation.",
        exemples: [
          "✓ Mange ta soupe. Va au lit. Ouvre la porte.",
          "✓ Manges-en. Vas-y. Penses-y.",
          "✗ Manges ta soupe."
        ] },

      { titre: "Les pronoms après l'impératif",
        texte: "À la forme affirmative, les pronoms se placent *après* le verbe, reliés par des " +
          "traits d'union, et *me* et *te* deviennent *moi* et *toi*. À la forme négative, tout " +
          "revient devant le verbe.",
        exemples: [
          "✓ Donne-le-moi. Dis-lui. Allons-nous-en.",
          "✓ Ne me le donne pas. Ne lui dis rien.",
          "Ordre à l'affirmative : verbe + COD + COI."
        ] },

      { titre: "L'ordre sans impératif",
        texte: "L'injonction peut aussi passer par l'*infinitif* (recettes, consignes, panneaux), " +
          "le *subjonctif* (à la 3ᵉ personne, qui n'a pas d'impératif) ou le *futur*.",
        exemples: [
          "✓ Mélanger les œufs et le sucre. (infinitif de consigne)",
          "✓ Qu'il sorte immédiatement. (subjonctif)",
          "✓ Tu feras tes devoirs ce soir. (futur d'ordre)"
        ] }
    ],
    retenir: [
      "Trois personnes seulement, jamais de sujet écrit.",
      "Pas de -s au singulier pour les verbes en -er et aller… sauf devant en et y.",
      "Affirmative : pronoms après, avec traits d'union, me → moi.",
      "L'infinitif et le subjonctif servent aussi à ordonner."
    ]
  },

  {
    id: "subjonctif",
    nom: "Le subjonctif présent",
    resume: "Le mode du possible : sa formation, et la liste de ce qui le déclenche.",
    classe: "4ᵉ → 3ᵉ",
    cours: [
      { titre: "Le mode de ce qui n'est pas encore réel",
        texte: "L'indicatif présente un fait comme *réel*. Le subjonctif le présente comme " +
          "envisagé : souhaité, redouté, exigé, douteux. Il apparaît presque toujours dans une " +
          "proposition subordonnée.",
        exemples: [
          "✓ Je sais qu'il vient. (fait réel → indicatif)",
          "✓ Je souhaite qu'il vienne. (fait envisagé → subjonctif)"
        ] },

      { titre: "La formation, en une règle",
        texte: "On prend le radical de la 3ᵉ personne du *pluriel* du présent de l'indicatif, et " +
          "on ajoute -e, -es, -e, -ions, -iez, -ent. Les formes de nous et vous sont celles de " +
          "l'imparfait.",
        exemples: [
          "ils finissent → que je finisse, que nous finissions",
          "ils prennent → que je prenne, que nous prenions",
          "ils viennent → que je vienne, que nous venions"
        ] },

      { titre: "Les neuf irréguliers",
        texte: "Ils ne suivent pas la règle et se retiennent par cœur.",
        tableau: {
          colonnes: ["Verbe", "que je…", "que nous…"],
          lignes: [
            ["être", "sois", "soyons"],
            ["avoir", "aie", "ayons"],
            ["aller", "aille", "allions"],
            ["faire", "fasse", "fassions"],
            ["pouvoir", "puisse", "puissions"],
            ["savoir", "sache", "sachions"],
            ["vouloir", "veuille", "voulions"],
            ["valoir", "vaille", "valions"],
            ["falloir", "il faille", "—"]
          ]
        } },

      { titre: "Qu'est-ce qui déclenche le subjonctif ?",
        texte: "Deux déclencheurs seulement : certains *verbes* introducteurs, et certaines " +
          "*conjonctions*.",
        tableau: {
          colonnes: ["Déclencheur", "Exemples", "Phrase"],
          lignes: [
            ["Volonté, ordre", "vouloir, exiger, ordonner, souhaiter", "Je veux qu'il parte."],
            ["Sentiment", "craindre, regretter, être heureux que", "Je crains qu'il ne parte."],
            ["Doute, négation", "douter, ne pas croire, il est possible que", "Je doute qu'il parte."],
            ["Nécessité", "il faut que, il est important que", "Il faut qu'il parte."],
            ["But", "pour que, afin que, de peur que", "Je pars pour qu'il reste."],
            ["Concession", "bien que, quoique, sans que", "Bien qu'il parte, il reviendra."],
            ["Temps antérieur", "avant que, jusqu'à ce que, en attendant que", "Avant qu'il parte…"],
            ["Condition", "à condition que, pourvu que, à moins que", "Pourvu qu'il parte !"]
          ]
        },
        astuce: "Retenez l'opposition : après que + indicatif (le fait a eu lieu), avant que + subjonctif (il n'a pas encore eu lieu)." }
    ],
    retenir: [
      "Radical du « ils » au présent + -e, -es, -e, -ions, -iez, -ent.",
      "Neuf irréguliers : être, avoir, aller, faire, pouvoir, savoir, vouloir, valoir, falloir.",
      "Volonté, sentiment, doute, nécessité déclenchent le subjonctif ; la certitude appelle l'indicatif.",
      "Bien que, pour que, avant que, à moins que : toujours le subjonctif."
    ]
  },

  {
    id: "valeurs-temps",
    nom: "Valeurs des temps et concordance",
    resume: "Deux systèmes, celui du récit et celui du discours, et le passage de l'un à l'autre.",
    classe: "4ᵉ → 3ᵉ",
    cours: [
      { titre: "Deux systèmes, jamais mélangés au hasard",
        texte: "Un texte s'ancre soit dans le *discours* (le locuteur parle depuis son présent), " +
          "soit dans le *récit* (le narrateur raconte un monde coupé du moment de l'énonciation). " +
          "Chaque système a ses temps.",
        tableau: {
          colonnes: ["", "Système du discours", "Système du récit"],
          lignes: [
            ["Temps de base", "présent", "passé simple / imparfait"],
            ["Antériorité", "passé composé", "plus-que-parfait, passé antérieur"],
            ["Postériorité", "futur simple", "conditionnel présent (futur dans le passé)"],
            ["Repères", "aujourd'hui, hier, demain, ici", "ce jour-là, la veille, le lendemain, là"],
            ["Marques de personne", "je, tu, nous présents", "il, elle, ils"]
          ]
        } },

      { titre: "La concordance dans le discours rapporté",
        texte: "Quand le verbe introducteur est au passé, les temps de la subordonnée reculent " +
          "d'un cran. C'est la *concordance des temps*.",
        tableau: {
          colonnes: ["Dans les paroles", "Après un verbe au passé"],
          lignes: [
            ["présent", "imparfait"],
            ["passé composé", "plus-que-parfait"],
            ["futur", "conditionnel présent"],
            ["futur antérieur", "conditionnel passé"],
            ["imparfait, plus-que-parfait", "inchangés"]
          ]
        },
        astuce: "✓ Il dit qu'il part. → ✓ Il dit qu'il partait. ✓ Il dit qu'il partira. → ✓ Il dit qu'il partirait." },

      { titre: "Rompre le système, volontairement",
        texte: "Un récit au passé peut basculer au *présent de narration* pour rendre une scène " +
          "brusquement présente, ou passer au présent de vérité générale pour un commentaire du " +
          "narrateur. Ce sont des ruptures signifiantes, souvent à commenter au brevet.",
        exemples: [
          "✓ Il avançait dans la nuit. Soudain, une main se pose sur son épaule. (présent de narration : la scène se joue sous nos yeux)",
          "✓ Il hésita longtemps, car la peur est mauvaise conseillère. (vérité générale : le narrateur commente)"
        ] },

      { titre: "Aspect accompli et aspect inaccompli",
        texte: "Au-delà du temps, un verbe indique si l'action est *en cours* (inaccompli, temps " +
          "simples) ou *achevée* (accompli, temps composés). Les périphrases précisent encore : " +
          "être en train de, venir de, aller.",
        exemples: [
          "✓ Il mange. (en cours) / ✓ Il a mangé. (achevé)",
          "✓ Il vient de partir. (passé très proche) / ✓ Il va partir. (futur proche)"
        ] }
    ],
    retenir: [
      "Système du discours : présent, passé composé, futur. Système du récit : passé simple, imparfait, plus-que-parfait.",
      "Verbe introducteur au passé → présent devient imparfait, futur devient conditionnel.",
      "Le présent de narration signale un moment de tension dans un récit au passé.",
      "Temps simples = action en cours ; temps composés = action achevée."
    ]
  },

  {
    id: "irreguliers",
    nom: "Les verbes irréguliers à connaître",
    resume: "Douze verbes couvrent presque toutes les fautes : leur tableau complet.",
    classe: "6ᵉ → 3ᵉ",
    cours: [
      { titre: "Les deux auxiliaires, à savoir sans hésiter",
        texte: "Être et avoir servent à tous les temps composés et à la voix passive : les " +
          "connaître, c'est débloquer la moitié de la conjugaison française.",
        tableau: {
          colonnes: ["", "Présent", "Imparfait", "Passé simple", "Futur", "Subj. présent"],
          lignes: [
            ["être — je", "suis", "étais", "fus", "serai", "que je sois"],
            ["être — il", "est", "était", "fut", "sera", "qu'il soit"],
            ["être — nous", "sommes", "étions", "fûmes", "serons", "que nous soyons"],
            ["être — ils", "sont", "étaient", "furent", "seront", "qu'ils soient"],
            ["avoir — je", "ai", "avais", "eus", "aurai", "que j'aie"],
            ["avoir — il", "a", "avait", "eut", "aura", "qu'il ait"],
            ["avoir — nous", "avons", "avions", "eûmes", "aurons", "que nous ayons"],
            ["avoir — ils", "ont", "avaient", "eurent", "auront", "qu'ils aient"]
          ]
        } },

      { titre: "Les six verbes les plus fréquents du 3ᵉ groupe",
        texte: "Aller, faire, dire, prendre, venir et voir reviennent dans presque tous les textes.",
        tableau: {
          colonnes: ["Verbe", "je (présent)", "nous (présent)", "passé simple", "futur", "participe passé"],
          lignes: [
            ["aller", "vais", "allons", "j'allai", "j'irai", "allé"],
            ["faire", "fais", "faisons", "je fis", "je ferai", "fait"],
            ["dire", "dis", "disons (vous dites)", "je dis", "je dirai", "dit"],
            ["prendre", "prends", "prenons", "je pris", "je prendrai", "pris"],
            ["venir", "viens", "venons", "je vins", "je viendrai", "venu"],
            ["voir", "vois", "voyons", "je vis", "je verrai", "vu"]
          ]
        },
        astuce: "Vous dites, vous faites, vous êtes : trois seules formes en -tes à la 2ᵉ personne du pluriel." },

      { titre: "Les verbes de modalité",
        texte: "Pouvoir, vouloir, devoir et savoir se construisent souvent avec un infinitif et " +
          "présentent des radicaux très irréguliers.",
        tableau: {
          colonnes: ["Verbe", "je (présent)", "nous (présent)", "passé simple", "futur", "participe passé"],
          lignes: [
            ["pouvoir", "peux", "pouvons", "je pus", "je pourrai", "pu"],
            ["vouloir", "veux", "voulons", "je voulus", "je voudrai", "voulu"],
            ["devoir", "dois", "devons", "je dus", "je devrai", "dû (due, dus)"],
            ["savoir", "sais", "savons", "je sus", "je saurai", "su"]
          ]
        } },

      { titre: "Comment les apprendre efficacement",
        texte: "Inutile de réciter les six personnes de tous les temps. Pour chaque verbe, " +
          "mémorisez *cinq formes clés* : le je du présent, le nous du présent (il donne " +
          "l'imparfait et le subjonctif), le il du passé simple, le je du futur (il donne le " +
          "conditionnel), et le participe passé (il donne tous les temps composés).",
        exemples: [
          "venir : je viens · nous venons · il vint · je viendrai · venu",
          "→ d'où : je venais, que je vienne, ils vinrent, je viendrais, j'étais venu."
        ] }
    ],
    retenir: [
      "Cinq formes clés par verbe suffisent à reconstruire toute sa conjugaison.",
      "Le nous du présent donne l'imparfait ; le ils du présent donne le subjonctif.",
      "L'infinitif (ou le radical du futur) donne le futur et le conditionnel.",
      "Le participe passé donne tous les temps composés."
    ]
  }
  ]
}

];
