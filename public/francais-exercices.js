/* ═══════════════════════════════════════════════════════════════
   POLYMATES — francais-exercices.js : la banque d'exercices.

   Format compact, une ligne par question :

     [ chapitre, type, énoncé, options, réponse, explication ]

   Les types :
     "choix"   l'énoncé contient ___ ; l'élève choisit parmi les options
     "qcm"     question ouverte ; l'élève choisit parmi les options
     "saisie"  l'élève écrit la réponse (plusieurs formes acceptées : « a|à »)
     "faute"   l'énoncé contient un mot fautif entre *astérisques* ;
               l'élève écrit la forme correcte

   La conjugaison n'a presque pas d'entrées ici : la page d'exercices en
   fabrique à volonté à partir de francais-verbes.js — un verbe, un temps,
   une personne. Écrire à la main ce qu'un moteur produit juste serait du
   gaspillage, et surtout une source d'erreurs.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  const BRUT = [

  /* ═══ ORTHOGRAPHE ═══════════════════════════════════════════ */

  /* — Les accords dans le groupe nominal — */
  ["accord-gn","choix","Elle portait des chaussures ___.",["neuves","neuve","neuf"],"neuves","« chaussures » est féminin pluriel : l'adjectif suit."],
  ["accord-gn","choix","J'ai acheté des rideaux ___.",["orange","oranges"],"orange","« orange » est un nom employé comme adjectif de couleur : invariable."],
  ["accord-gn","choix","Il avait les yeux ___.",["bleu-gris","bleus-gris","bleus gris"],"bleu-gris","Couleur composée de deux mots : elle ne s'accorde jamais."],
  ["accord-gn","choix","Ce sont des ___ de fer.",["travaux","travails"],"travaux","Les noms en -ail font -s, sauf sept exceptions dont travail → travaux."],
  ["accord-gn","choix","Nous avons visité trois ___.",["châteaux","châteaus"],"châteaux","Les noms en -eau prennent -x au pluriel."],
  ["accord-gn","choix","Les enfants ont mangé des ___.",["choux","chous"],"choux","Chou fait partie des sept noms en -ou qui prennent -x."],
  ["accord-gn","choix","Ils sont revenus des ___ d'hiver.",["festivals","festivaux"],"festivals","Festival échappe à la règle des noms en -al."],
  ["accord-gn","choix","Une veste et un pantalon ___.",["neufs","neuves","neuf"],"neufs","Un adjectif qui qualifie un masculin et un féminin se met au masculin pluriel."],
  ["accord-gn","choix","Elle a attendu une ___ heure.",["demi-","demie-"],"demi-","Placé devant le nom, « demi » reste invariable."],
  ["accord-gn","faute","Les fleurs *sechés* ornaient la cheminée.","","séchées","Accord avec « fleurs », féminin pluriel, et accent aigu sur le é."],
  ["accord-gn","faute","Il a rapporté des cailloux *blanc* de la plage.","","blancs","« cailloux » est masculin pluriel : l'adjectif prend un -s."],
  ["accord-gn","qcm","Dans « une longue robe de soie bleue », quel est le nom noyau ?",["robe","soie","longue"],"robe","C'est lui qui commande les accords : « longue » et « une » s'accordent avec lui."],

  /* — L'accord du verbe avec son sujet — */
  ["accord-verbe","choix","Dans le jardin ___ des roses anciennes.",["poussaient","poussait"],"poussaient","Sujet inversé : ce sont « des roses » qui poussent."],
  ["accord-verbe","choix","Les fleurs, je les ___ chaque matin.",["arrose","arrosent"],"arrose","Le sujet est « je » ; « les » est un pronom complément."],
  ["accord-verbe","choix","C'est moi qui ___ raison.",["ai","a","as"],"ai","« qui » transmet la personne de son antécédent : moi, 1re personne."],
  ["accord-verbe","choix","C'est vous qui ___ tort.",["aviez","avait","avais"],"aviez","« qui » reprend « vous », 2e personne du pluriel."],
  ["accord-verbe","choix","Toi et moi ___ demain.",["partirons","partiront","partirez"],"partirons","toi + moi = nous : la 1re personne l'emporte."],
  ["accord-verbe","choix","Ton frère et toi ___ en retard.",["êtes","sont","est"],"êtes","lui + toi = vous : la 2e personne l'emporte sur la 3e."],
  ["accord-verbe","choix","La plupart des candidats ___ réussi.",["ont","a"],"ont","Après « la plupart de », l'accord se fait toujours au pluriel."],
  ["accord-verbe","choix","Le chien de mes voisins ___ toute la nuit.",["aboie","aboient"],"aboie","Le sujet est « le chien », singulier — pas « mes voisins »."],
  ["accord-verbe","faute","Le livre que tu m'as prêté *sont* passionnants.","","est","Le sujet est « le livre », singulier ; la relative ne change rien."],
  ["accord-verbe","faute","Beaucoup d'élèves *est* venu.","","sont","Après « beaucoup de », l'accord se fait au pluriel."],

  /* — L'accord du participe passé — */
  ["participe-passe","choix","Elles sont ___ à midi.",["arrivées","arrivé","arrivés"],"arrivées","Avec être, le participe s'accorde avec le sujet : elles, féminin pluriel."],
  ["participe-passe","choix","Elle a ___ les pommes.",["mangé","mangée","mangées"],"mangé","Avec avoir, le COD suit le verbe : aucun accord."],
  ["participe-passe","choix","Les pommes qu'elle a ___.",["mangées","mangé","mangés"],"mangées","Le COD « qu' » précède le verbe : accord au féminin pluriel."],
  ["participe-passe","choix","Ces lettres, je les ai ___ hier.",["écrites","écrit","écrits"],"écrites","Le COD « les » précède : accord avec « lettres »."],
  ["participe-passe","choix","Elles se sont ___ les mains.",["lavé","lavées","lavés"],"lavé","Le COD « les mains » suit le verbe : pas d'accord."],
  ["participe-passe","choix","Elles se sont ___ longuement.",["parlé","parlées","parlés"],"parlé","« se » est COI (parler à quelqu'un) : jamais d'accord."],
  ["participe-passe","choix","Elles se sont ___ dans la rivière.",["lavées","lavé","lavés"],"lavées","« se » est COD : accord avec le sujet."],
  ["participe-passe","choix","Les robes qu'elle a ___ coudre.",["fait","faites","faite"],"fait","« fait » suivi d'un infinitif reste toujours invariable."],
  ["participe-passe","choix","Quelles erreurs a-t-il ___ ?",["commises","commis","commise"],"commises","Dans une interrogation, le COD précède : accord."],
  ["participe-passe","choix","Les efforts qu'il a ___.",["fallu","fallus"],"fallu","Verbe impersonnel : le participe est invariable."],
  ["participe-passe","faute","Elle s'est *souvenu* de notre rendez-vous.","","souvenue","Verbe essentiellement pronominal : accord avec le sujet."],
  ["participe-passe","faute","Les efforts que nous avons *fourni* ont payé.","","fournis","Le COD « que » (les efforts) précède : accord au masculin pluriel."],
  ["participe-passe","qcm","Dans « la lettre que j'ai reçue », pourquoi accorde-t-on ?",["Le COD précède le verbe","L'auxiliaire est être","Le sujet est féminin"],"Le COD précède le verbe","Avec avoir, seul un COD placé avant déclenche l'accord."],

  /* — Les homophones grammaticaux — */
  ["homophones","choix","Il ___ compris la leçon.",["a","à"],"a","Verbe avoir : « il avait compris » se dit."],
  ["homophones","choix","Nous allons ___ Marseille.",["à","a"],"à","Préposition : on ne peut pas dire « avait Marseille »."],
  ["homophones","choix","Le train ___ parti sans nous.",["est","et"],"est","Verbe être : « était parti » se dit."],
  ["homophones","choix","___ a bien travaillé aujourd'hui.",["On","Ont"],"On","Pronom sujet : « il a bien travaillé »."],
  ["homophones","choix","Ils ___ tout terminé.",["ont","on"],"ont","Verbe avoir : « ils avaient tout terminé »."],
  ["homophones","choix","___ livres-là sont à moi.",["Ces","Ses"],"Ces","Démonstratif : on peut ajouter « -là »."],
  ["homophones","choix","Elle a rangé ___ affaires.",["ses","ces"],"ses","Possessif : ce sont les siennes."],
  ["homophones","choix","Il ___ lave les mains avant le repas.",["se","ce"],"se","Pronom réfléchi devant un verbe : « je me lave »."],
  ["homophones","choix","Je ___ parle depuis dix minutes.",["leur","leurs"],"leur","Pronom devant le verbe : toujours invariable."],
  ["homophones","choix","Ils ont oublié ___ affaires.",["leurs","leur"],"leurs","Déterminant devant un nom pluriel : -s obligatoire."],
  ["homophones","choix","La ville ___ je suis né est petite.",["où","ou"],"où","Complément de lieu : « ou » signifierait « ou bien »."],
  ["homophones","choix","Prends un thé ___ un café.",["ou","où"],"ou","Choix : on peut dire « ou bien »."],
  ["homophones","choix","___ heure est-il ?",["Quelle","Qu'elle"],"Quelle","Déterminant devant le nom « heure »."],
  ["homophones","choix","Je crois ___ viendra demain.",["qu'elle","quelle"],"qu'elle","On peut remplacer par « qu'il »."],
  ["homophones","choix","Il ne ___ pas venir ce soir.",["peut","peu"],"peut","Verbe pouvoir : « il ne pouvait pas venir »."],
  ["homophones","choix","Il reste ___ de temps.",["peu","peut"],"peu","Quantité : le contraire de « beaucoup »."],
  ["homophones","choix","Il est parti ___ rien dire.",["sans","s'en"],"sans","Privation : le contraire de « avec »."],
  ["homophones","choix","Il ___ va sans se retourner.",["s'en","sans"],"s'en","Pronoms se + en : « je m'en vais »."],
  ["homophones","choix","___ à moi, je préfère rester.",["Quant","Quand"],"Quant","« quant à » signifie « en ce qui concerne »."],
  ["homophones","choix","___ il pleut, je lis.",["Quand","Quant"],"Quand","Moment : on peut dire « lorsque »."],
  ["homophones","choix","Il est arrivé ___ que prévu.",["plus tôt","plutôt"],"plus tôt","Contraire de « plus tard » : en deux mots."],
  ["homophones","choix","Je prendrai ___ le train.",["plutôt","plus tôt"],"plutôt","« de préférence » : en un seul mot."],
  ["homophones","choix","Elles sont ___ à partir.",["prêtes","près"],"prêtes","Adjectif : il s'accorde avec le sujet."],
  ["homophones","choix","La gare est ___ d'ici.",["près","prêt"],"près","Proximité : « près de »."],
  ["homophones","faute","*Sont* frère est absent aujourd'hui.","","Son","Déterminant possessif : « mon frère » se dit."],
  ["homophones","faute","Les élèves *on* rendu leur copie.","","ont","Verbe avoir : « ils avaient rendu »."],

  /* — Les terminaisons -é, -er, -ez — */
  ["e-er-ez","choix","Il faut ___ tes leçons.",["apprendre","appris"],"apprendre","Après « il faut », l'infinitif s'impose."],
  ["e-er-ez","choix","Je vais ___ une lettre.",["envoyer","envoyé"],"envoyer","« je vais mordre » : c'est un infinitif."],
  ["e-er-ez","choix","Il a ___ toute la journée.",["travaillé","travailler"],"travaillé","« il a mordu » : c'est un participe passé."],
  ["e-er-ez","choix","Vous ___ très bien.",["chantez","chanter","chanté"],"chantez","-ez impose le sujet « vous »."],
  ["e-er-ez","choix","Elle est partie sans ___ au revoir.",["dire","dit"],"dire","Après une préposition, toujours l'infinitif."],
  ["e-er-ez","choix","Les fenêtres ont été ___.",["repeintes","repeindre"],"repeintes","Participe passé accordé avec le sujet, à la voix passive."],
  ["e-er-ez","choix","Demain, je ___ à l'heure.",["serai","serais"],"serai","Futur : « nous serons » se dit."],
  ["e-er-ez","choix","Si je pouvais, je ___ à l'heure.",["serais","serai"],"serais","Conditionnel après une hypothèse : « nous serions »."],
  ["e-er-ez","choix","Je ___ une pomme, puis je sortis.",["mangeai","mangeais"],"mangeai","Passé simple : « il mangea »."],
  ["e-er-ez","choix","Je ___ quand le téléphone sonna.",["mangeais","mangeai"],"mangeais","Imparfait : « il mangeait », action en cours."],
  ["e-er-ez","faute","Il faut *travaillé* davantage.","","travailler","On ne dit pas « il faut mordu » : c'est un infinitif."],
  ["e-er-ez","faute","Nous avons *décider* de partir.","","décidé","« nous avons mordu » : c'est un participe passé."],

  /* — Accents, tréma et cédille — */
  ["accents","choix","Nous ___ des cartons toute la matinée.",["plaçons","placons"],"plaçons","Cédille devant o pour garder le son [s]."],
  ["accents","choix","J'___ du pain chaque matin.",["achète","achéte"],"achète","La syllabe suivante contient un e muet : accent grave."],
  ["accents","choix","Nous ___ à huit heures.",["cédons","cèdons"],"cédons","La syllabe suivante a une voyelle prononcée : accent aigu."],
  ["accents","choix","Il passe un ___ demain.",["examen","éxamen"],"examen","Jamais d'accent devant un x."],
  ["accents","choix","Elle habite une ___ maison.",["belle","bélle"],"belle","Jamais d'accent devant une consonne double."],
  ["accents","choix","Le ___ pousse dans ce champ.",["maïs","mais"],"maïs","Le tréma sépare les deux voyelles : deux sons distincts."],
  ["accents","qcm","Sur quel mot le circonflexe reste-t-il obligatoire depuis 1990 ?",["sûr","paraître","coût"],"sûr","Il distingue « sûr » de « sur » : le circonflexe y est maintenu."],
  ["accents","faute","Il a reçu une *régle* neuve.","","règle","La syllabe suivante contient un e muet : accent grave."],

  /* — Ponctuation, majuscules et trait d'union — */
  ["ponctuation","qcm","Quel signe annonce une explication ou une citation ?",["les deux-points","le point-virgule","la virgule"],"les deux-points","Ils ouvrent sur ce qui suit : cause, conséquence ou paroles."],
  ["ponctuation","qcm","Quelle phrase respecte les majuscules ?",["Les Français parlent français.","Les français parlent Français.","Les Français parlent Français."],"Les Français parlent français.","Le nom du peuple prend la majuscule, le nom de la langue non."],
  ["ponctuation","qcm","Quelle phrase est correctement ponctuée ?",["Mon frère, arrivé hier, repart demain.","Mon frère, est arrivé hier.","Mon frère arrivé hier, repart demain."],"Mon frère, arrivé hier, repart demain.","Le groupe déplacé est encadré par deux virgules ; jamais une seule entre sujet et verbe."],
  ["ponctuation","choix","Il en reste ___.",["vingt-et-un","vingt et un"],"vingt-et-un","Depuis 1990, tous les éléments d'un nombre composé sont liés."],
  ["ponctuation","qcm","Devant quels signes le français met-il une espace ?",["; : ? !",". ,","aucun"],"; : ? !","Les signes doubles sont précédés d'une espace insécable ; les simples, jamais."],
  ["ponctuation","faute","Nous partons *Lundi* prochain.","","lundi","Les jours et les mois ne prennent pas de majuscule."],

  /* ═══ GRAMMAIRE ═════════════════════════════════════════════ */

  /* — Les classes de mots — */
  ["classes-de-mots","qcm","Dans « le bleu du ciel », quelle est la nature de « bleu » ?",["un nom","un adjectif","un adverbe"],"un nom","Il est précédé d'un déterminant : c'est donc un nom."],
  ["classes-de-mots","qcm","Dans « elle parle bas », quelle est la nature de « bas » ?",["un adverbe","un adjectif","un nom"],"un adverbe","Il ne s'accorde pas et modifie le verbe."],
  ["classes-de-mots","qcm","Laquelle de ces classes est invariable ?",["la préposition","le pronom","l'adjectif"],"la préposition","à, de, par, pour… ne changent jamais de forme."],
  ["classes-de-mots","qcm","« mais, ou, et, donc, or, ni, car » sont…",["des conjonctions de coordination","des conjonctions de subordination","des adverbes"],"des conjonctions de coordination","Elles relient deux éléments de même fonction."],
  ["classes-de-mots","qcm","Dans « quelques élèves », quelle est la nature de « quelques » ?",["un déterminant","un adjectif","un pronom"],"un déterminant","Il précède le nom et le quantifie : déterminant indéfini."],
  ["classes-de-mots","qcm","Qu'est-ce qui ne change jamais dans un mot ?",["sa nature","sa fonction","sa place"],"sa nature","La nature est inscrite au dictionnaire ; la fonction change à chaque phrase."],

  /* — Les fonctions dans la phrase — */
  ["fonctions","qcm","Dans « Il lit un roman », quelle est la fonction de « un roman » ?",["COD","COI","attribut"],"COD","Il répond à « lit quoi ? » sans préposition."],
  ["fonctions","qcm","Dans « Il pense à son frère », « à son frère » est…",["COI","COD","complément circonstanciel"],"COI","Il est introduit par une préposition et n'est ni supprimable ni déplaçable."],
  ["fonctions","qcm","Dans « Elle semble fatiguée », « fatiguée » est…",["attribut du sujet","COD","épithète"],"attribut du sujet","« sembler » est un verbe d'état : l'attribut désigne le sujet."],
  ["fonctions","qcm","Dans « Le livre est lu par Léa », « par Léa » est…",["complément d'agent","COI","sujet"],"complément d'agent","À la voix passive, il désigne celui qui fait réellement l'action."],
  ["fonctions","qcm","Comment reconnaît-on un complément circonstanciel ?",["il se déplace et se supprime","il suit toujours le verbe","il commence par une préposition"],"il se déplace et se supprime","C'est le test décisif face aux compléments essentiels."],
  ["fonctions","qcm","Dans « Paris, capitale de la France, attire les touristes », « capitale de la France » est…",["une apposition","un COD","un attribut"],"une apposition","Elle est détachée par des virgules et désigne le même être que le nom."],
  ["fonctions","qcm","Lequel n'est PAS un verbe d'état ?",["regarder","paraître","demeurer"],"regarder","Les verbes d'état sont être, paraître, sembler, devenir, rester, demeurer…"],
  ["fonctions","qcm","Dans « la maison de mon grand-père », « de mon grand-père » est…",["complément du nom","COI","épithète"],"complément du nom","Il dépend du nom « maison », pas du verbe."],

  /* — Le groupe nominal et ses expansions — */
  ["groupe-nominal","qcm","Dans « une forêt qui s'étendait au loin », l'expansion est…",["une subordonnée relative","un complément du nom","une apposition"],"une subordonnée relative","Elle est introduite par le pronom relatif « qui »."],
  ["groupe-nominal","qcm","Dans « du lait », « du » est un article…",["partitif","défini","indéfini"],"partitif","Il désigne une quantité non comptable."],
  ["groupe-nominal","qcm","« Les élèves, fatigués, sont rentrés » signifie que…",["tous étaient fatigués","seuls les fatigués sont rentrés","certains étaient fatigués"],"tous étaient fatigués","Détachée par des virgules, l'épithète commente au lieu de restreindre."],
  ["groupe-nominal","qcm","Quel est le groupe nominal minimal ?",["déterminant + nom","nom + adjectif","déterminant + adjectif"],"déterminant + nom","Tout le reste est une expansion."],
  ["groupe-nominal","qcm","« un grand homme » et « un homme grand » : que change la place ?",["le sens","rien","le nombre"],"le sens","Grand homme = illustre ; homme grand = de haute taille."],
  ["groupe-nominal","qcm","Dans « ce livre-ci », « ce » est un déterminant…",["démonstratif","possessif","indéfini"],"démonstratif","Il montre, il désigne — d'où le « -ci »."],

  /* — Les types et les formes de phrases — */
  ["types-formes","qcm","« Ferme la porte. » est une phrase de type…",["injonctif","déclaratif","exclamatif"],"injonctif","Elle donne un ordre, ici à l'impératif."],
  ["types-formes","qcm","Combien de types une phrase peut-elle avoir ?",["un seul","deux","autant que nécessaire"],"un seul","En revanche, elle peut cumuler plusieurs formes."],
  ["types-formes","qcm","« Il n'a que dix ans » exprime…",["une restriction","une négation","une interrogation"],"une restriction","« ne… que » signifie « seulement » : ce n'est pas une négation."],
  ["types-formes","qcm","« C'est Léa qui est venue » est une phrase de forme…",["emphatique","passive","impersonnelle"],"emphatique","Le tour « c'est… qui » met le sujet en relief."],
  ["types-formes","qcm","« Où vas-tu ? » est une interrogation…",["partielle","totale","indirecte"],"partielle","Elle porte sur un élément et utilise un mot interrogatif."],
  ["types-formes","faute","Il *vient pas* ce soir.","","ne vient pas","À l'écrit, le « ne » de la négation est obligatoire."],

  /* — Phrase simple et phrase complexe — */
  ["phrase-complexe","qcm","Comment compte-t-on les propositions d'une phrase ?",["par les verbes conjugués","par les virgules","par les sujets"],"par les verbes conjugués","Une proposition s'organise autour d'un verbe conjugué."],
  ["phrase-complexe","qcm","« Il pleuvait ; personne ne sortit. » Les propositions sont…",["juxtaposées","coordonnées","subordonnées"],"juxtaposées","Elles sont reliées par un simple point-virgule."],
  ["phrase-complexe","qcm","« Personne ne sortit parce qu'il pleuvait. » Le lien est…",["la subordination","la coordination","la juxtaposition"],"la subordination","« parce que » rend la seconde proposition dépendante."],
  ["phrase-complexe","qcm","Dans « Le vent secouait les volets de la vieille maison », la phrase est…",["simple","complexe"],"simple","Elle ne contient qu'un seul verbe conjugué."],
  ["phrase-complexe","qcm","Une proposition subordonnée peut-elle exister seule ?",["non","oui"],"non","Elle dépend de la principale, dont elle occupe une fonction."],
  ["phrase-complexe","qcm","Un participe compte-t-il comme verbe d'une proposition ?",["non, il n'est pas conjugué","oui, toujours"],"non, il n'est pas conjugué","Seuls les verbes conjugués délimitent les propositions."],

  /* — Les propositions subordonnées — */
  ["subordonnees","qcm","Dans « le livre dont je parle », quelle est la fonction de « dont » ?",["complément introduit par de","sujet","COD"],"complément introduit par de","On parle DE quelque chose : « dont » remplace ce complément."],
  ["subordonnees","choix","Le sujet ___ je pense est difficile.",["auquel","que","dont"],"auquel","On pense À quelque chose : préposition + lequel."],
  ["subordonnees","qcm","« Je veux qu'il ___ » : quel mode ?",["subjonctif","indicatif","conditionnel"],"subjonctif","Un verbe de volonté déclenche le subjonctif."],
  ["subordonnees","qcm","« Je sais qu'il ___ » : quel mode ?",["indicatif","subjonctif","impératif"],"indicatif","Un verbe de certitude appelle l'indicatif."],
  ["subordonnees","choix","___ il vienne, nous l'attendrons.",["Avant qu'","Après qu'"],"Avant qu'","« avant que » est suivi du subjonctif : l'action n'a pas eu lieu."],
  ["subordonnees","qcm","« Il travaille pour que sa famille vive mieux » exprime…",["le but","la cause","la conséquence"],"le but","« pour que » introduit une circonstancielle de but, au subjonctif."],
  ["subordonnees","faute","Il demande *où vas-tu ?*","","où tu vas","L'interrogative indirecte perd l'inversion et le point d'interrogation."],
  ["subordonnees","qcm","Une subordonnée relative complète…",["un nom","un verbe","toute la phrase"],"un nom","Ce nom est son antécédent."],

  /* — La voix active et la voix passive — */
  ["voix","saisie","Mettez à la voix passive : « Léa lit le livre. »","","le livre est lu par léa","Le COD devient sujet, le verbe passe à être + participe, le sujet devient agent."],
  ["voix","qcm","Quel verbe peut se mettre au passif ?",["fermer","partir","penser"],"fermer","Seuls les verbes transitifs directs, qui ont un COD, ont un passif."],
  ["voix","qcm","Dans « Le livre a été lu par Léa », quel est le temps ?",["passé composé","plus-que-parfait","présent"],"passé composé","Le temps se lit sur l'auxiliaire être : « a été »."],
  ["voix","qcm","Pourquoi un auteur écrit-il « Le village fut détruit » ?",["pour effacer l'agent","pour accélérer le récit","pour marquer l'habitude"],"pour effacer l'agent","Sans complément d'agent, le responsable de l'action disparaît."],
  ["voix","qcm","À la voix passive, que devient le COD de la phrase active ?",["le sujet","le complément d'agent","l'attribut"],"le sujet","Et le sujet actif devient complément d'agent."],
  ["voix","faute","Le tableau *a peint* par un élève de troisième.","","a été peint","La voix passive exige l'auxiliaire être : « a été peint »."],

  /* — Le discours rapporté — */
  ["discours-rapporte","saisie","Au discours indirect : Il dit : « Je pars demain. » → Il dit qu'il ___ le lendemain.",""," part|partait","Les personnes changent, et « demain » devient « le lendemain »."],
  ["discours-rapporte","qcm","Au discours indirect, que devient « Viens-tu ? »",["il demande si je viens","il demande viens-tu","il demande que je viens"],"il demande si je viens","L'interrogation totale est introduite par « si »."],
  ["discours-rapporte","qcm","« Il regarda la pendule. Il était en retard. Que dirait-elle ? » est du…",["discours indirect libre","discours direct","récit de paroles"],"discours indirect libre","La voix du personnage passe dans la phrase du narrateur, sans guillemets."],
  ["discours-rapporte","qcm","« Ils discutèrent longuement de son départ » est…",["un récit de paroles","du discours direct","du discours indirect"],"un récit de paroles","Le narrateur résume : effet de distance et de rapidité."],
  ["discours-rapporte","qcm","Au discours indirect après un verbe au passé, « aujourd'hui » devient…",["ce jour-là","hier","demain"],"ce jour-là","Les repères se détachent du moment où l'on parle."],
  ["discours-rapporte","qcm","Quel signe caractérise le discours direct dans un dialogue ?",["le tiret","le point-virgule","la parenthèse"],"le tiret","Il marque le changement d'interlocuteur."],

  /* — Les connecteurs — */
  ["connecteurs","qcm","« certes… mais » exprime…",["la concession","la cause","le but"],"la concession","On accorde un point avant de le retourner : c'est le couple type de l'argumentation."],
  ["connecteurs","qcm","« par conséquent » exprime…",["la conséquence","l'opposition","l'illustration"],"la conséquence","Comme « donc », « ainsi », « c'est pourquoi »."],
  ["connecteurs","qcm","Dans « Le loup approcha. La bête ne faisait aucun bruit », « la bête » est…",["une reprise nominale","une reprise pronominale","une apposition"],"une reprise nominale","Elle reprend et ajoute un point de vue."],
  ["connecteurs","faute","Marie a rencontré Julie et *elle* lui a souri.","","cette dernière","Le pronom a deux antécédents possibles : il faut lever l'ambiguïté."],
  ["connecteurs","qcm","« en revanche » exprime…",["l'opposition","l'addition","la conclusion"],"l'opposition","Comme « cependant », « pourtant », « néanmoins »."],

  /* ═══ CONJUGAISON ═══════════════════════════════════════════ */

  ["systeme-verbe","qcm","À quel groupe appartient « partir » ?",["3e","2e","1er"],"3e","Son participe présent est « partant », et non « partissant »."],
  ["systeme-verbe","qcm","Que porte la terminaison d'un verbe ?",["le temps, le mode et la personne","le sens","le sujet"],"le temps, le mode et la personne","Le radical, lui, porte le sens."],
  ["systeme-verbe","qcm","Lequel est un mode impersonnel ?",["le gérondif","le subjonctif","l'impératif"],"le gérondif","Avec l'infinitif et le participe : ils ne se conjuguent pas aux six personnes."],
  ["systeme-verbe","qcm","Quel temps composé correspond à l'imparfait ?",["le plus-que-parfait","le passé composé","le passé antérieur"],"le plus-que-parfait","Auxiliaire à l'imparfait + participe passé."],

  ["present","choix","Nous ___ les cartons dans le couloir.",["plaçons","placons"],"plaçons","Cédille devant o : le son [s] doit se maintenir."],
  ["present","choix","Nous ___ à midi.",["mangeons","mangons"],"mangeons","Un e s'intercale devant le o pour garder le son [ʒ]."],
  ["present","choix","Il ___ le train de sept heures.",["prend","prends","prendt"],"prend","Les verbes en -dre gardent le d et ne prennent pas de t."],
  ["present","choix","Elle ___ un tableau.",["peint","peind"],"peint","Les verbes en -indre perdent le d : il peint, il craint."],
  ["present","choix","Il ___ venir demain.",["peut","peux"],"peut","Pouvoir, vouloir et valoir font -x, -x, -t."],
  ["present","qcm","« L'eau bout à 100 °C » : quelle valeur du présent ?",["vérité générale","énonciation","narration"],"vérité générale","Ce qui est vrai en tout temps s'énonce au présent."],

  ["imparfait-passe-simple","choix","Nous ___ tous les matins.",["criions","crions"],"criions","Radical « cri- » + terminaison « -ions » : deux i se suivent."],
  ["imparfait-passe-simple","choix","Ils ___ le train de justesse.",["prirent","prièrent"],"prirent","Passé simple de prendre, série en -i- : ils prirent."],
  ["imparfait-passe-simple","choix","Il ___ à Paris en 1802.",["vint","vînt"],"vint","Passé simple de venir, série en -in-, sans accent à la 3e personne."],
  ["imparfait-passe-simple","qcm","Quel temps installe le décor d'un récit ?",["l'imparfait","le passé simple","le présent"],"l'imparfait","Il donne l'arrière-plan ; le passé simple fait avancer l'histoire."],
  ["imparfait-passe-simple","qcm","Sur quel radical se forme l'imparfait ?",["le « nous » du présent","l'infinitif","le « ils » du présent"],"le « nous » du présent","nous finissons → je finissais. Aucune exception, sauf être."],
  ["imparfait-passe-simple","faute","Chaque matin, il *se leva* à l'aube.","","se levait","Action répétée : l'imparfait d'habitude, et non le passé simple."],

  ["futur-conditionnel","choix","Demain, je ___ chez toi.",["passerai","passerais"],"passerai","Futur : « nous passerons »."],
  ["futur-conditionnel","choix","Si j'avais le temps, je ___ chez toi.",["passerais","passerai"],"passerais","Conditionnel après une hypothèse à l'imparfait."],
  ["futur-conditionnel","choix","Si j'___ le temps, je viendrais.",["avais","aurais"],"avais","Jamais de conditionnel juste après « si » d'hypothèse."],
  ["futur-conditionnel","choix","Il annonça qu'il ___ le lendemain.",["viendrait","viendra"],"viendrait","Futur dans le passé : le conditionnel présent."],
  ["futur-conditionnel","saisie","Futur simple de « voir », 1re personne du singulier :","","je verrai|verrai","Radical irrégulier « verr- » : je verrai."],
  ["futur-conditionnel","saisie","Futur simple de « faire », 1re personne du singulier :","","je ferai|ferai","Radical irrégulier « fer- » : je ferai."],
  ["futur-conditionnel","qcm","Sur quoi se forme le conditionnel présent ?",["le radical du futur","le radical du présent","l'infinitif seul"],"le radical du futur","Avec les terminaisons de l'imparfait."],
  ["futur-conditionnel","qcm","« Le suspect serait en fuite » exprime…",["une information non vérifiée","un ordre","une habitude"],"une information non vérifiée","C'est le conditionnel journalistique."],

  ["temps-composes","choix","Elle est ___ au grenier.",["montée","monté"],"montée","Sans COD, monter se conjugue avec être : accord avec le sujet."],
  ["temps-composes","choix","Elle a ___ les valises.",["monté","montée"],"monté","Avec un COD placé après, monter se conjugue avec avoir : pas d'accord."],
  ["temps-composes","choix","Quand il ___ fini, il sortit.",["eut","avait"],"eut","Passé antérieur : il précède immédiatement le passé simple."],
  ["temps-composes","choix","Dès que j'___ terminé, je t'appellerai.",["aurai","aurais"],"aurai","Futur antérieur : antériorité par rapport à un futur."],
  ["temps-composes","qcm","Qui porte le temps dans un temps composé ?",["l'auxiliaire","le participe passé","le sujet"],"l'auxiliaire","Le participe, lui, porte le sens."],
  ["temps-composes","qcm","Quels verbes se conjuguent toujours avec être ?",["les pronominaux","les transitifs","les impersonnels"],"les pronominaux","Ainsi qu'une quinzaine de verbes de mouvement ou de changement d'état."],

  ["imperatif","choix","___ ta soupe.",["Mange","Manges"],"Mange","Pas de -s au singulier pour les verbes du 1er groupe."],
  ["imperatif","choix","___-en un peu.",["Manges","Mange"],"Manges","Le -s revient devant « en » et « y » : manges-en, vas-y."],
  ["imperatif","choix","___ le-moi.",["Donne","Donnes"],"Donne","Verbe du 1er groupe : pas de -s, et pronoms reliés par des traits d'union."],
  ["imperatif","saisie","Impératif de « être », 2e personne du singulier :","","sois","Être fait sois, soyons, soyez."],
  ["imperatif","qcm","« Mélanger les œufs et le sucre » : quel mode ?",["l'infinitif","l'impératif","le subjonctif"],"l'infinitif","C'est l'infinitif de consigne, courant dans les recettes."],

  ["subjonctif","choix","Il faut que tu ___ tôt.",["partes","pars"],"partes","« il faut que » exprime la nécessité : subjonctif."],
  ["subjonctif","choix","Bien qu'il ___ malade, il est venu.",["soit","est"],"soit","« bien que » est toujours suivi du subjonctif."],
  ["subjonctif","choix","J'attends qu'il ___ ses devoirs.",["fasse","fait"],"fasse","Verbe de volonté : subjonctif, et « faire » y est irrégulier."],
  ["subjonctif","saisie","Subjonctif présent de « pouvoir », 1re personne du singulier :","","que je puisse|puisse","Pouvoir est l'un des neuf subjonctifs irréguliers."],
  ["subjonctif","qcm","Sur quel radical se forme le subjonctif présent ?",["le « ils » du présent","le « nous » du présent","l'infinitif"],"le « ils » du présent","ils prennent → que je prenne."],
  ["subjonctif","qcm","Après « après que », quel mode la grammaire classique demande-t-elle ?",["l'indicatif","le subjonctif","le conditionnel"],"l'indicatif","Le fait a eu lieu — à la différence de « avant que »."],

  ["valeurs-temps","qcm","Quels temps forment le système du récit ?",["passé simple et imparfait","présent et passé composé","futur et conditionnel"],"passé simple et imparfait","Le système du discours, lui, s'ancre dans le présent."],
  ["valeurs-temps","qcm","Après un verbe introducteur au passé, le futur devient…",["le conditionnel présent","l'imparfait","le passé simple"],"le conditionnel présent","Il dit qu'il partira → il dit qu'il partirait."],
  ["valeurs-temps","qcm","Après un verbe introducteur au passé, le présent devient…",["l'imparfait","le passé composé","le plus-que-parfait"],"l'imparfait","Il dit qu'il part → il dit qu'il partait."],
  ["valeurs-temps","qcm","« Il mange » exprime un aspect…",["inaccompli","accompli","futur"],"inaccompli","Les temps simples disent l'action en cours ; les composés, l'action achevée."],
  ["valeurs-temps","qcm","« Il avançait dans la nuit. Soudain, une main se pose sur son épaule. » L'effet est…",["un présent de narration","une faute de concordance","un présent d'habitude"],"un présent de narration","La rupture rend la scène brusquement présente."],

  ["irreguliers","qcm","Combien de formes clés suffisent à reconstruire un verbe ?",["cinq","trois","huit"],"cinq","Le je et le nous du présent, le il du passé simple, le je du futur, le participe passé."],
  ["irreguliers","qcm","Quelle forme donne l'imparfait ?",["le « nous » du présent","l'infinitif","le participe passé"],"le « nous » du présent","nous venons → je venais."],
  ["irreguliers","saisie","Participe passé de « devoir » :","","dû","Avec le circonflexe, qui le distingue de l'article « du »."],
  ["irreguliers","qcm","Quels verbes font « -tes » à la 2e personne du pluriel du présent ?",["être, faire, dire","aller, voir, savoir","avoir, pouvoir, vouloir"],"être, faire, dire","vous êtes, vous faites, vous dites : les trois seuls."],

  ];

  /* On déplie le format compact en objets nommés, avec un identifiant
     stable pour que la progression puisse suivre chaque question. */
  window.FRANCAIS_EXERCICES = BRUT.map((x, i) => ({
    id: x[0] + "-" + i,
    chapitre: x[0],
    type: x[1],
    enonce: x[2],
    options: Array.isArray(x[3]) ? x[3] : null,
    reponse: x[4],
    explication: x[5],
  }));
})();
