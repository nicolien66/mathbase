/* Polymates — Bac pro Technicien en réalisation de produits mécaniques — cours de 1re et terminale (cours théorique + analyse de documents) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["bp-produits-mecaniques"] = {
 "id": "bp-produits-mecaniques",
 "nom": "Technicien en réalisation de produits mécaniques",
 "icone": "🎓",
 "couleur": "#9aa8b8",
 "intro": "Le bac pro Technicien en réalisation de produits mécaniques forme des techniciens d'atelier capables de préparer, réaliser, contrôler et suivre la fabrication de pièces mécaniques ou d'outillages de mise en forme : régleur sur machines à commande numérique, décolleteur, technicien d'usinage, outilleur, mouliste, metteur au point. Ce cours de première et de terminale approfondit le cours de seconde de la famille des métiers de la réalisation d'ensembles mécaniques et industriels : définition et spécification des produits, matériaux et procédés, préparation et programmation, qualité, organisation et sécurité, puis savoirs propres à chacune des deux options. Il est organisé en deux blocs : un cours théorique, puis un bloc d'analyse de documents qui montre, exemples commentés à l'appui, comment exploiter dessins de définition, contrats de phase, programmes, rapports de contrôle, documentations fournisseurs et plans d'outillage, tels qu'on les rencontre à l'épreuve d'étude et de préparation de la réalisation.",
 "options": [
  {
   "id": "rsp",
   "nom": "Option RSP — Réalisation et suivi de productions",
   "icone": "⚙️",
   "desc": "Réalisation et suivi de la production de pièces par usinage, décolletage et fabrication additive, et maintenance des moyens de production."
  },
  {
   "id": "rmo",
   "nom": "Option RMO — Réalisation et maintenance des outillages",
   "icone": "🛠️",
   "desc": "Réalisation, mise au point et maintenance des outillages de mise en forme : outils de presse, moules, matrices."
  }
 ],
 "parties": [
  {
   "titre": "Partie 1 — Définir et spécifier le produit",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btrpm-analyse-fonctionnelle",
     "titre": "Analyse fonctionnelle et structurelle d'un produit",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Situer le produit à réaliser dans son cycle de vie et dans le dossier de réalisation",
      "Identifier les fonctions de service et les fonctions techniques d'un mécanisme",
      "Repérer les surfaces fonctionnelles d'une pièce et les relier à ses exigences",
      "Lire un diagramme d'exigences et un cahier des charges fonctionnel simplifié",
      "Expliquer pourquoi la fonction d'une surface conditionne sa spécification et son mode de réalisation"
     ],
     "sections": [
      {
       "titre": "Du besoin au produit : la place du technicien",
       "contenu": "<p>Un produit mécanique (pièce isolée, sous-ensemble ou outillage) naît toujours d'un <strong>besoin</strong> : transmettre un mouvement, guider un arbre, mettre en forme une tôle, fixer un équipement. Le bureau d'études traduit ce besoin en un <strong>cahier des charges fonctionnel</strong> (CdCF), puis en une solution décrite par une maquette numérique et des dessins de définition. Le bureau des méthodes prépare ensuite la fabrication, l'atelier la réalise et le service qualité la contrôle.</p>\n<p>Le titulaire du bac pro Technicien en réalisation de produits mécaniques intervient surtout à partir du dessin de définition, mais il doit comprendre ce qui se trouve en amont. Un technicien qui sait <em>pourquoi</em> une surface est précise sait aussi quelle surface ne doit jamais être abîmée au serrage, quel défaut est grave et quel défaut est acceptable, et quelle question poser au bureau d'études en cas de doute.</p>\n<p>On distingue plusieurs étapes dans le <strong>cycle de vie</strong> d'un produit : expression du besoin, conception, industrialisation, production, distribution, utilisation et maintenance, puis fin de vie (démontage, recyclage). Les décisions prises à la conception engagent la plus grande partie du coût final : une tolérance inutilement serrée ou une forme difficile d'accès se paie à chaque pièce produite.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le technicien de réalisation ne se contente pas d'exécuter un plan ; il lit le produit à travers ses fonctions pour réaliser chaque surface au juste niveau de qualité.</div>"
      },
      {
       "titre": "Fonctions de service et critères d'appréciation",
       "contenu": "<p>Une <strong>fonction de service</strong> est une action attendue du produit pour répondre au besoin de l'utilisateur, exprimée par un verbe à l'infinitif suivi d'un complément : « transmettre le couple du moteur à la roue », « permettre le réglage en hauteur ». On distingue les <strong>fonctions principales</strong> (raison d'être du produit) et les <strong>fonctions contraintes</strong> (adaptation à l'environnement : résister à la corrosion, respecter un encombrement, être démontable).</p>\n<p>Chaque fonction est caractérisée par des <strong>critères d'appréciation</strong> associés à un <strong>niveau</strong> et à une <strong>flexibilité</strong>. Exemple pour un galet de convoyeur :</p>\n<table>\n<thead><tr><th>Fonction</th><th>Critère</th><th>Niveau</th><th>Flexibilité</th></tr></thead>\n<tbody>\n<tr><td>Supporter la charge transportée</td><td>Charge radiale</td><td>2 000 N</td><td>Aucune (minimum)</td></tr>\n<tr><td>Tourner librement</td><td>Couple de rotation à vide</td><td>0,2 N·m</td><td>Maximum</td></tr>\n<tr><td>Résister à l'ambiance de l'atelier</td><td>Durée en brouillard salin</td><td>240 h</td><td>± 10 %</td></tr>\n<tr><td>S'adapter au châssis existant</td><td>Entraxe de fixation</td><td>450 mm</td><td>Imposé</td></tr>\n</tbody>\n</table>\n<p>Aujourd'hui, ces informations sont souvent présentées sous forme de <strong>diagramme des exigences</strong> (langage SysML) : chaque exigence porte un identifiant, un texte et éventuellement une valeur chiffrée. Les liens « raffine » ou « satisfait » montrent quelle partie du produit répond à quelle exigence.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chez un sous-traitant, le client fournit rarement son CdCF. Le technicien découvre les fonctions en lisant le plan d'ensemble, la nomenclature et les notes du plan (« surface d'étanchéité », « zone de soudure interdite »). Ces indications sont des exigences au même titre que les cotes.</div>"
      },
      {
       "titre": "De la fonction de service aux fonctions techniques",
       "contenu": "<p>Pour réaliser une fonction de service, le concepteur choisit des <strong>solutions techniques</strong>. Chacune assure une <strong>fonction technique</strong> interne au produit : guider en rotation, lier deux pièces, assurer l'étanchéité, transmettre un effort. Cette décomposition se représente par un <strong>diagramme FAST</strong> (Function Analysis System Technique) qui se lit de gauche à droite en répondant à la question « comment ? » et de droite à gauche en répondant à « pourquoi ? ».</p>\n<p>Exemple simplifié pour un réducteur à engrenages :</p>\n<table>\n<thead><tr><th>Fonction technique</th><th>Solution technique</th><th>Pièces concernées</th></tr></thead>\n<tbody>\n<tr><td>Adapter la vitesse de rotation</td><td>Train d'engrenages à denture droite</td><td>Pignon, roue</td></tr>\n<tr><td>Guider l'arbre en rotation</td><td>Deux roulements à billes</td><td>Arbre, carter, roulements</td></tr>\n<tr><td>Lier la roue à l'arbre</td><td>Clavette parallèle et anneau élastique</td><td>Roue, arbre, clavette</td></tr>\n<tr><td>Assurer l'étanchéité</td><td>Joint à lèvre</td><td>Couvercle, arbre, joint</td></tr>\n</tbody>\n</table>\n<p>Ce raisonnement permet de remonter d'une cote jusqu'à la fonction : le diamètre de la portée de roulement de l'arbre est précis <em>parce que</em> le roulement doit être monté serré <em>parce que</em> l'arbre doit être guidé sans jeu <em>parce que</em> les engrenages doivent engrener correctement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour justifier une spécification du dessin de définition : 1) repérer la surface spécifiée ; 2) chercher sur le plan d'ensemble la ou les pièces en contact avec cette surface ; 3) nommer la liaison ou la fonction technique assurée (guidage, appui, centrage, étanchéité) ; 4) en déduire l'exigence (jeu ou serrage, état de surface, position) ; 5) rédiger une phrase du type « la surface X est spécifiée à … pour assurer … ». Exemple : « le diamètre 35 k6 est spécifié avec un écart serré pour assurer le montage serré de la bague intérieure du roulement et éviter son glissement en rotation ».</div>"
      },
      {
       "titre": "L'analyse structurelle : classes d'équivalence et surfaces fonctionnelles",
       "contenu": "<p>L'<strong>analyse structurelle</strong> décrit comment le produit est construit. On regroupe les pièces liées entre elles sans mouvement relatif en <strong>classes d'équivalence cinématique</strong> (ou sous-ensembles cinématiquement équivalents). Les roulements, joints et vis se rangent à part ou dans la classe de la pièce qu'ils immobilisent, selon la convention retenue par l'enseignant ou le bureau d'études.</p>\n<p>Sur chaque pièce, on distingue ensuite :</p>\n<ul>\n<li>les <strong>surfaces fonctionnelles</strong>, en contact avec d'autres pièces ou participant directement à une fonction (portée de roulement, face d'appui, alésage de centrage, empreinte de moule) ;</li>\n<li>les <strong>surfaces de liaison</strong>, qui relient les surfaces fonctionnelles entre elles et donnent sa forme à la pièce (voiles, nervures, dépouilles) ;</li>\n<li>les <strong>surfaces libres</strong>, sans contact, souvent laissées brutes ou simplement ébavurées.</li>\n</ul>\n<p>Le niveau de qualité dépend de cette classification : une surface fonctionnelle porte des tolérances serrées et un état de surface précis, une surface libre se contente de la tolérance générale indiquée dans le cartouche (par exemple ISO 2768-mK).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une surface « libre » sur le dessin peut devenir une surface de mise en position en fabrication. Si le technicien choisit d'y prendre appui, il doit vérifier que sa qualité suffit ; sinon, il faudra l'usiner au préalable ou choisir un autre appui.</div>"
      },
      {
       "titre": "Le cas particulier des outillages",
       "contenu": "<p>Dans l'option réalisation et maintenance des outillages, le « produit » est un <strong>outillage de mise en forme</strong> : outil de découpe, outil d'emboutissage, moule d'injection plastique, moule de fonderie, matrice de forge. L'analyse fonctionnelle s'applique de la même manière, mais avec des fonctions particulières :</p>\n<ul>\n<li>donner sa forme à la pièce produite (empreinte, poinçon, matrice) ;</li>\n<li>positionner et guider les parties mobiles (colonnes, bagues, cales de centrage) ;</li>\n<li>éjecter ou extraire la pièce (éjecteurs, dévêtisseurs, tiroirs) ;</li>\n<li>réguler la température (circuits de refroidissement d'un moule) ;</li>\n<li>s'adapter à la machine (presse ou presse à injecter) : brides, bague de centrage, buse.</li>\n</ul>\n<p>Le technicien doit donc faire une double lecture : les exigences de la <strong>pièce produite</strong> (dimensions, aspect, matière) et les exigences de l'<strong>outillage</strong> lui-même (tenue à l'usure, facilité de maintenance, sécurité). Une cote de l'empreinte n'est pas égale à la cote de la pièce : elle tient compte du retrait de la matière ou du retour élastique de la tôle.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans un atelier de réalisation de moules, chaque élément porte un repère gravé qui renvoie à la nomenclature de l'outillage. Ce repérage, prévu dès l'analyse structurelle, facilite le montage, la recherche de pièces de rechange et la traçabilité des interventions.</div>"
      },
      {
       "titre": "Des fonctions aux choix de réalisation",
       "contenu": "<p>L'analyse fonctionnelle n'est pas un exercice théorique : elle guide directement les décisions de l'atelier.</p>\n<table>\n<thead><tr><th>Constat fonctionnel</th><th>Conséquence pour la réalisation</th></tr></thead>\n<tbody>\n<tr><td>Deux portées de roulement doivent être coaxiales</td><td>Les réaliser dans la même mise en position, ou entre pointes</td></tr>\n<tr><td>Une face assure l'étanchéité avec un joint plat</td><td>Soigner l'état de surface et proscrire les rayures radiales</td></tr>\n<tr><td>Un alésage reçoit une goupille de positionnement</td><td>Prévoir un alésage à l'alésoir ou à l'outil d'alésage, pas au foret seul</td></tr>\n<tr><td>Une empreinte de moule donne l'aspect de la pièce</td><td>Prévoir polissage ou texturation, et protéger la surface pendant le montage</td></tr>\n<tr><td>Une surface est libre</td><td>Accepter le brut ou un usinage d'ébauche, éviter de dépenser du temps</td></tr>\n</tbody>\n</table>\n<p>Cette lecture conduit aussi à identifier les <strong>surfaces de référence</strong> : celles par rapport auxquelles les autres sont positionnées sur le dessin. Ce sont souvent les surfaces qui positionnent la pièce dans le mécanisme. Le fabricant a intérêt à les réaliser en premier et à s'y appuyer ensuite, pour limiter les erreurs de reprise.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> fonction, spécification et procédé forment une chaîne. Une surface très fonctionnelle porte une spécification exigeante, qui impose un procédé, une mise en position et un contrôle adaptés.</div>"
      },
      {
       "titre": "Rédiger une analyse fonctionnelle à l'écrit",
       "contenu": "<p>À l'épreuve d'étude et de préparation de la réalisation, les questions d'analyse demandent souvent de justifier, d'identifier ou de compléter. Quelques règles de rédaction :</p>\n<ul>\n<li>nommer les pièces par leur repère et leur désignation de nomenclature (« arbre repère 4 ») ;</li>\n<li>employer les verbes normalisés des fonctions techniques : guider, lier, positionner, maintenir, étancher, transmettre ;</li>\n<li>relier systématiquement la surface, la pièce en contact et la fonction ;</li>\n<li>chiffrer quand c'est possible (jeu maximal, effort, vitesse).</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour compléter un tableau des classes d'équivalence : 1) colorier mentalement chaque pièce du plan d'ensemble ; 2) partir du bâti et ajouter toutes les pièces qui lui sont liées sans mouvement (vis, couvercles, bagues extérieures de roulement) ; 3) faire de même avec chaque pièce mobile principale ; 4) mettre à part les éléments roulants et les joints ; 5) vérifier que chaque repère de la nomenclature figure dans une seule classe. Exemple sur une poulie montée sur deux roulements : classe bâti = carter, couvercle, vis, bagues extérieures ; classe arbre = arbre, poulie, clavette, écrou, bagues intérieures.</div>\n<p>Cette démarche prépare la suite du cours : les classes d'équivalence servent à construire le schéma cinématique, et les surfaces fonctionnelles sont celles qui portent les spécifications géométriques.</p>"
      }
     ],
     "points_cles": [
      "Le CdCF décrit les fonctions de service avec leurs critères, niveaux et flexibilités",
      "Les fonctions principales justifient le produit, les fonctions contraintes l'adaptent à son environnement",
      "Le diagramme FAST relie fonctions de service, fonctions techniques et solutions techniques",
      "Les classes d'équivalence regroupent les pièces sans mouvement relatif",
      "Surfaces fonctionnelles, de liaison et libres n'appellent pas le même niveau de qualité",
      "Une cote d'outillage n'est pas la cote de la pièce produite : retrait et retour élastique interviennent",
      "Les surfaces de référence du dessin sont en général à réaliser en premier",
      "Justifier une spécification consiste à relier surface, pièce en contact et fonction"
     ],
     "lexique": [
      {
       "terme": "Fonction de service",
       "def": "Action attendue du produit pour répondre au besoin de l'utilisateur."
      },
      {
       "terme": "Fonction technique",
       "def": "Action interne au produit, réalisée par une solution technique, qui contribue à une fonction de service."
      },
      {
       "terme": "Critère d'appréciation",
       "def": "Caractéristique mesurable permettant de juger si une fonction est satisfaite."
      },
      {
       "terme": "Diagramme FAST",
       "def": "Représentation arborescente qui décompose une fonction en fonctions techniques puis en solutions."
      },
      {
       "terme": "Classe d'équivalence",
       "def": "Ensemble de pièces sans mouvement relatif entre elles pendant le fonctionnement."
      },
      {
       "terme": "Surface fonctionnelle",
       "def": "Surface d'une pièce qui participe directement à une fonction, souvent en contact avec une autre pièce."
      },
      {
       "terme": "Surface de référence",
       "def": "Surface à partir de laquelle sont positionnées les autres surfaces d'une pièce sur le dessin."
      },
      {
       "terme": "Diagramme des exigences",
       "def": "Représentation SysML listant les exigences d'un système et leurs liens avec les éléments qui les satisfont."
      }
     ]
    },
    {
     "id": "btrpm-liaisons-cinematique",
     "titre": "Liaisons mécaniques et schéma cinématique",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Dénombrer les degrés de liberté entre deux pièces et identifier la liaison normalisée correspondante",
      "Relier une liaison aux surfaces de contact qui la réalisent",
      "Lire et compléter un schéma cinématique minimal",
      "Expliquer le rôle des jeux et des ajustements dans le fonctionnement d'une liaison",
      "Comprendre la cinématique d'un outillage pour en préparer le montage"
     ],
     "sections": [
      {
       "titre": "Degrés de liberté et mouvements relatifs",
       "contenu": "<p>Deux pièces sans contact peuvent bouger librement l'une par rapport à l'autre selon <strong>six degrés de liberté</strong> : trois translations (Tx, Ty, Tz) et trois rotations (Rx, Ry, Rz) dans un repère orthonormé lié à l'une des pièces. Chaque contact supprime certains de ces mouvements. Une <strong>liaison mécanique</strong> est la relation de contact entre deux pièces, caractérisée par les mouvements qu'elle laisse possibles.</p>\n<p>On note les degrés de liberté dans un tableau où 1 signifie « mouvement possible » et 0 « mouvement supprimé ». Par exemple, un arbre dans un alésage long, avec un épaulement et un anneau élastique qui bloquent l'axe, autorise uniquement la rotation autour de son axe :</p>\n<table>\n<thead><tr><th></th><th>Translation</th><th>Rotation</th></tr></thead>\n<tbody>\n<tr><td>x (axe de l'arbre)</td><td>0</td><td>1</td></tr>\n<tr><td>y</td><td>0</td><td>0</td></tr>\n<tr><td>z</td><td>0</td><td>0</td></tr>\n</tbody>\n</table>\n<p>C'est une <strong>liaison pivot</strong> d'axe x. Ce raisonnement en degrés de liberté sera repris en fabrication : la mise en position d'une pièce sur une machine consiste, à l'inverse, à supprimer ses six degrés de liberté de façon maîtrisée.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une liaison se définit par les mouvements relatifs qu'elle autorise, et non par la forme des pièces. Deux réalisations très différentes peuvent donner la même liaison.</div>"
      },
      {
       "titre": "Les liaisons normalisées",
       "contenu": "<p>La norme de représentation (NF EN ISO 3952) définit des liaisons usuelles, chacune associée à un symbole et à une géométrie de contact type :</p>\n<table>\n<thead><tr><th>Liaison</th><th>Degrés de liberté</th><th>Contact type</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Encastrement (fixe)</td><td>0</td><td>Plusieurs surfaces bloquées</td><td>Roue clavetée et arrêtée sur un arbre</td></tr>\n<tr><td>Pivot</td><td>1 rotation</td><td>Cylindre long + arrêt axial</td><td>Arbre sur deux roulements</td></tr>\n<tr><td>Glissière</td><td>1 translation</td><td>Prisme ou cylindre + clavette</td><td>Chariot sur glissières de machine</td></tr>\n<tr><td>Hélicoïdale</td><td>1 mouvement combiné</td><td>Filetage</td><td>Vis-écrou à billes d'un axe CN</td></tr>\n<tr><td>Pivot glissant</td><td>1 rotation + 1 translation</td><td>Cylindre long</td><td>Colonne de guidage dans sa bague</td></tr>\n<tr><td>Rotule (sphérique)</td><td>3 rotations</td><td>Sphère</td><td>Rotule de vérin</td></tr>\n<tr><td>Appui plan</td><td>2 translations + 1 rotation</td><td>Plan</td><td>Pièce posée sur une table</td></tr>\n<tr><td>Linéaire annulaire (sphère-cylindre)</td><td>4</td><td>Sphère dans cylindre</td><td>Roulement à rotule seul</td></tr>\n<tr><td>Linéaire rectiligne (cylindre-plan)</td><td>4</td><td>Ligne</td><td>Galet sur un rail</td></tr>\n<tr><td>Ponctuelle (sphère-plan)</td><td>5</td><td>Point</td><td>Touche de palpeur sur une face</td></tr>\n</tbody>\n</table>\n<p>Dans un schéma, chaque liaison est représentée par son symbole, dessiné dans la position qu'elle occupe réellement, avec les couleurs des deux classes d'équivalence qu'elle relie.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un cylindre court (longueur inférieure à environ une fois et demie son diamètre) ne guide pas une rotation comme un cylindre long : il se comporte plutôt comme une linéaire annulaire. C'est pourquoi un arbre guidé par deux roulements à billes se modélise souvent par une rotule et une linéaire annulaire, dont l'association donne une pivot.</div>"
      },
      {
       "titre": "Construire un schéma cinématique minimal",
       "contenu": "<p>Le <strong>schéma cinématique minimal</strong> représente un mécanisme par ses classes d'équivalence et les liaisons qui les relient, sans se préoccuper des formes des pièces. Il sert à comprendre le fonctionnement, à prévoir un montage ou à repérer une pièce mobile dangereuse.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1) identifier les classes d'équivalence et leur attribuer une couleur ; 2) tracer le <strong>graphe des liaisons</strong> : un cercle par classe, un trait par contact, avec le nom de la liaison ; 3) pour chaque liaison, repérer sur le plan d'ensemble son axe ou sa normale et son centre ; 4) placer les symboles normalisés en respectant ces positions relatives (axes parallèles, perpendiculaires, concourants) ; 5) relier les symboles d'une même classe par des traits de la même couleur ; 6) ajouter le bâti (hachures) et indiquer l'entrée et la sortie du mouvement. Exemple pour une perceuse sensitive : classes bâti, broche, fourreau, levier ; liaisons pivot broche-fourreau, glissière fourreau-bâti, pivot levier-bâti, et engrenage pignon-crémaillère entre levier et fourreau.</div>\n<p>Un schéma est dit minimal lorsqu'il ne garde qu'une liaison équivalente entre deux classes. Le <strong>schéma architectural</strong>, au contraire, détaille les liaisons réelles (deux roulements, deux guides) et sert à l'étude des montages.</p>"
      },
      {
       "titre": "Jeux, ajustements et fonctionnement des liaisons",
       "contenu": "<p>Une liaison réelle n'est jamais parfaite. Pour qu'une pièce tourne ou glisse, il faut un <strong>jeu</strong> ; pour qu'elle reste immobile sans moyen d'arrêt, il faut un <strong>serrage</strong>. Le cours de seconde a présenté le principe des ajustements ISO ; on retient ici leur lien avec les liaisons :</p>\n<table>\n<thead><tr><th>Fonction de la liaison</th><th>Type d'ajustement</th><th>Exemple (alésage/arbre)</th></tr></thead>\n<tbody>\n<tr><td>Rotation ou glissement libre</td><td>Avec jeu</td><td>H7/f7, H8/e8</td></tr>\n<tr><td>Centrage précis démontable</td><td>Glissant juste</td><td>H7/g6, H7/h6</td></tr>\n<tr><td>Positionnement sans jeu, montage au maillet</td><td>Incertain</td><td>H7/k6</td></tr>\n<tr><td>Encastrement sans organe d'arrêt</td><td>Serré</td><td>H7/p6, H7/s6</td></tr>\n</tbody>\n</table>\n<p>Un jeu trop important dégrade le guidage : vibrations, usure, perte de précision. Un jeu trop faible provoque le grippage, surtout si les pièces s'échauffent et se dilatent. Le choix de l'ajustement dépend de la vitesse, de la charge, de la température, de la lubrification et des matériaux en présence.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer les jeux limites de l'ajustement 20 H7/g6. Dans les tables ISO 286 : H7 pour 20 mm donne 0 / +0,021 ; g6 donne −0,007 / −0,020. Jeu maxi = écart supérieur de l'alésage − écart inférieur de l'arbre = 0,021 − (−0,020) = 0,041 mm. Jeu mini = écart inférieur de l'alésage − écart supérieur de l'arbre = 0 − (−0,007) = 0,007 mm. Le jeu est toujours positif : l'ajustement est avec jeu, adapté à un centrage glissant.</div>"
      },
      {
       "titre": "Liaisons des machines de production",
       "contenu": "<p>Les machines-outils sont elles-mêmes des mécanismes. Comprendre leurs liaisons aide à les régler et à diagnostiquer un défaut :</p>\n<ul>\n<li>la <strong>broche</strong> est guidée en rotation (pivot) par des roulements de précision à contact oblique, montés précontraints pour supprimer le jeu ;</li>\n<li>les <strong>axes linéaires</strong> sont des glissières réalisées par des rails à recirculation de billes ou par des glissières lisses ;</li>\n<li>le mouvement d'avance est obtenu par une liaison <strong>hélicoïdale</strong> : vis à billes entraînée par un moteur, avec un écrou précontraint ;</li>\n<li>le <strong>porte-outil</strong> est encastré dans la broche par un cône (SA, HSK) maintenu par un tirant.</li>\n</ul>\n<p>Un jeu dans une vis à billes se traduit par une erreur d'inversion de sens (défaut de circularité en interpolation, marque aux quadrants). Un jeu de broche provoque vibrations et mauvais état de surface. Le technicien ne répare pas ces organes, mais il doit savoir relier un défaut constaté sur la pièce à une liaison de la machine pour alerter la maintenance.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> lors d'un contrôle périodique, la maintenance mesure le jeu à l'inversion de chaque axe avec un comparateur. Une valeur qui augmente d'un contrôle à l'autre signale l'usure de la vis à billes ou de son palier.</div>"
      },
      {
       "titre": "La cinématique d'un outillage",
       "contenu": "<p>Un outillage de mise en forme comporte lui aussi des classes d'équivalence en mouvement. Dans un <strong>outil de découpe</strong> monté sur une presse :</p>\n<ul>\n<li>la partie supérieure (semelle supérieure, porte-poinçons, poinçons) est liée au coulisseau de la presse ;</li>\n<li>la partie inférieure (semelle inférieure, matrice) est liée à la table ;</li>\n<li>les deux parties sont reliées par des <strong>colonnes</strong> et des <strong>bagues de guidage</strong> : liaison pivot glissant, dont la rotation est empêchée par la présence de plusieurs colonnes ;</li>\n<li>le <strong>dévêtisseur</strong>, poussé par des ressorts, coulisse par rapport à la partie supérieure pour décoller la bande des poinçons.</li>\n</ul>\n<p>Dans un <strong>moule d'injection</strong>, la partie mobile se déplace par rapport à la partie fixe selon une glissière (axe d'ouverture) guidée par des colonnes ; la batterie d'éjection coulisse à son tour dans la partie mobile ; un <strong>tiroir</strong> se déplace perpendiculairement à l'ouverture grâce à un doigt de commande incliné.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'ordre des mouvements dans un outillage est impératif. Un tiroir qui ne serait pas reculé avant l'éjection, ou un dévêtisseur bloqué, entraîne la casse de l'outillage. Lire la cinématique avant le premier essai est une obligation de sécurité autant que de qualité.</div>"
      },
      {
       "titre": "Du schéma au montage",
       "contenu": "<p>Le schéma cinématique est utile à l'atelier dans au moins trois situations :</p>\n<ul>\n<li><strong>préparer un montage</strong> : il montre quelles pièces doivent être assemblées ensemble avant d'être introduites dans les autres (ordre de montage) ;</li>\n<li><strong>préparer un réglage</strong> : il désigne la liaison qui porte le jeu à régler (jeu axial d'un arbre, course d'un dévêtisseur) ;</li>\n<li><strong>analyser un dysfonctionnement</strong> : il permet de suivre la chaîne de transmission du mouvement jusqu'à l'organe défaillant.</li>\n</ul>\n<p>Pour un montage, on complète souvent le schéma par une <strong>gamme de montage</strong> qui liste les opérations dans l'ordre, les outils, les couples de serrage et les contrôles. Cette gamme s'appuie sur les classes d'équivalence : on monte d'abord chaque sous-ensemble, puis on les assemble.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> classes d'équivalence, graphe des liaisons et schéma cinématique sont trois vues du même mécanisme. Le technicien s'en sert pour comprendre, monter, régler et dépanner.</div>"
      }
     ],
     "points_cles": [
      "Une pièce libre possède six degrés de liberté : trois translations et trois rotations",
      "Une liaison se caractérise par les mouvements relatifs qu'elle autorise",
      "Le schéma cinématique minimal représente classes d'équivalence et liaisons par des symboles normalisés",
      "Le graphe des liaisons précède toujours le tracé du schéma",
      "Le type d'ajustement découle de la fonction de la liaison : jeu, centrage ou serrage",
      "Jeu maxi = ES alésage − ei arbre ; jeu mini = EI alésage − es arbre",
      "Les axes de machine combinent glissières et liaisons hélicoïdales à vis à billes",
      "Un outillage a sa propre cinématique, dont l'ordre des mouvements conditionne la sécurité"
     ],
     "lexique": [
      {
       "terme": "Degré de liberté",
       "def": "Mouvement élémentaire possible (translation ou rotation selon un axe) entre deux pièces."
      },
      {
       "terme": "Liaison pivot",
       "def": "Liaison qui n'autorise qu'une rotation autour d'un axe."
      },
      {
       "terme": "Liaison glissière",
       "def": "Liaison qui n'autorise qu'une translation selon un axe."
      },
      {
       "terme": "Liaison hélicoïdale",
       "def": "Liaison qui associe une rotation et une translation liées par le pas, comme une vis et son écrou."
      },
      {
       "terme": "Schéma cinématique minimal",
       "def": "Représentation simplifiée d'un mécanisme par ses classes d'équivalence et des symboles de liaisons normalisés."
      },
      {
       "terme": "Graphe des liaisons",
       "def": "Diagramme où chaque classe est un cercle et chaque liaison un trait reliant deux cercles."
      },
      {
       "terme": "Jeu",
       "def": "Différence positive entre la dimension de l'alésage et celle de l'arbre."
      },
      {
       "terme": "Serrage",
       "def": "Différence positive entre la dimension de l'arbre et celle de l'alésage, qui impose un montage en force."
      },
      {
       "terme": "Dévêtisseur",
       "def": "Plaque mobile d'un outil de découpe qui décolle la bande des poinçons lors de la remontée."
      }
     ]
    },
    {
     "id": "btrpm-specification-iso-gps",
     "titre": "Spécification géométrique des produits (ISO GPS)",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Situer le langage ISO GPS et ses principes fondamentaux",
      "Décoder un cadre de tolérance géométrique : symbole, valeur, modificateurs, références",
      "Distinguer élément tolérancé, référence simple, référence commune et système de références",
      "Interpréter une zone de tolérance de forme, d'orientation, de position et de battement",
      "Exploiter les exigences du maximum de matière et de l'enveloppe"
     ],
     "sections": [
      {
       "titre": "Un langage pour décrire la pièce réelle",
       "contenu": "<p>Une pièce réelle n'a jamais la forme parfaite du modèle CAO : ses surfaces présentent des défauts de forme, d'orientation et de position, et une rugosité. La <strong>spécification géométrique des produits</strong> (GPS, pour Geometrical Product Specifications) est l'ensemble des normes ISO qui permettent au concepteur de dire, sans ambiguïté, quelles variations sont acceptables. Les principales normes que le technicien rencontre sont :</p>\n<ul>\n<li>ISO 8015 : concepts, principes et règles fondamentaux ;</li>\n<li>ISO 14405-1 : tolérancement dimensionnel des tailles linéaires ;</li>\n<li>ISO 1101 : tolérancement géométrique (forme, orientation, position, battement) ;</li>\n<li>ISO 5459 : références spécifiées et systèmes de références ;</li>\n<li>ISO 2692 : exigences du maximum et du minimum de matière ;</li>\n<li>ISO 286 : système de codification des tolérances et ajustements ;</li>\n<li>ISO 21920 (qui remplace progressivement ISO 4287) : état de surface par profil.</li>\n</ul>\n<p>Le cours de seconde a présenté les tolérances dimensionnelles et l'existence des tolérances géométriques. Ce chapitre apprend à les interpréter précisément, comme le fait un régleur ou un contrôleur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> par défaut (principe de l'<strong>indépendance</strong>, ISO 8015), chaque exigence d'un dessin s'applique seule : une tolérance de taille ne limite pas la forme, sauf si une exigence particulière (enveloppe, maximum de matière) le précise.</div>"
      },
      {
       "titre": "Lire un cadre de tolérance",
       "contenu": "<p>Une tolérance géométrique s'inscrit dans un <strong>cadre de tolérance</strong> rectangulaire divisé en cases, relié par une flèche à l'<strong>élément tolérancé</strong>. Les cases se lisent de gauche à droite :</p>\n<ol>\n<li>le <strong>symbole</strong> de la caractéristique (planéité, perpendicularité, localisation…) ;</li>\n<li>la <strong>valeur</strong> de la tolérance en millimètres, précédée de ⌀ si la zone est cylindrique, éventuellement suivie de modificateurs (Ⓜ pour le maximum de matière, Ⓔ pour l'enveloppe lorsqu'il s'agit d'une taille) ;</li>\n<li>la ou les <strong>références</strong>, désignées par des lettres majuscules, dans l'ordre de priorité : primaire, secondaire, tertiaire.</li>\n</ol>\n<p>Les références sont repérées sur le dessin par un triangle noirci relié à une lettre encadrée. La position de la flèche ou du triangle change le sens :</p>\n<table>\n<thead><tr><th>Position de la flèche ou du triangle</th><th>Élément désigné</th></tr></thead>\n<tbody>\n<tr><td>Sur le contour ou une ligne d'attache, nettement décalé de la ligne de cote</td><td>La surface réelle (élément intégral)</td></tr>\n<tr><td>Dans le prolongement de la ligne de cote d'un diamètre</td><td>L'axe ou le plan médian (élément dérivé)</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une flèche placée sur la surface d'un cylindre et une flèche placée dans le prolongement de la cote de diamètre ne spécifient pas la même chose. Dans le premier cas, c'est la génératrice ou la surface qui est tolérancée, dans le second, c'est l'axe. Confondre les deux conduit à un mauvais contrôle.</div>"
      },
      {
       "titre": "Les familles de tolérances géométriques",
       "contenu": "<p>La norme ISO 1101 classe les caractéristiques en quatre familles :</p>\n<table>\n<thead><tr><th>Famille</th><th>Caractéristiques</th><th>Référence nécessaire ?</th></tr></thead>\n<tbody>\n<tr><td>Forme</td><td>Rectitude, planéité, circularité, cylindricité, forme d'une ligne, forme d'une surface</td><td>Non (sauf profils associés à une référence)</td></tr>\n<tr><td>Orientation</td><td>Parallélisme, perpendicularité, inclinaison</td><td>Oui</td></tr>\n<tr><td>Position</td><td>Localisation, coaxialité, concentricité, symétrie</td><td>Oui (sauf localisation entre éléments d'un groupe)</td></tr>\n<tr><td>Battement</td><td>Battement circulaire, battement total</td><td>Oui (un axe de référence)</td></tr>\n</tbody>\n</table>\n<p>Chaque tolérance définit une <strong>zone de tolérance</strong> à l'intérieur de laquelle l'élément réel doit se trouver :</p>\n<ul>\n<li>planéité 0,05 : la surface réelle est comprise entre deux plans parallèles distants de 0,05 mm, orientés librement ;</li>\n<li>parallélisme 0,05 par rapport à A : même zone, mais les deux plans sont parallèles au plan de référence A ;</li>\n<li>localisation ⌀0,1 d'un trou par rapport à A, B, C : l'axe réel du trou est dans un cylindre de diamètre 0,1 mm, perpendiculaire à A, dont l'axe est à la position théorique définie par des <strong>cotes encadrées</strong> (dimensions théoriquement exactes) depuis B et C ;</li>\n<li>battement circulaire radial 0,02 par rapport à A-B : pendant un tour complet autour de l'axe commun A-B, l'indication d'un comparateur sur la surface ne varie pas de plus de 0,02 mm, dans chaque section.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une cote encadrée n'a pas de tolérance propre ; elle situe la position théorique de la zone. C'est la tolérance de localisation qui fixe l'écart admis.</div>"
      },
      {
       "titre": "Références et systèmes de références",
       "contenu": "<p>Une <strong>référence spécifiée</strong> est un élément géométrique parfait (plan, droite, point) associé à une surface réelle de la pièce selon un critère normalisé. Par défaut, pour un plan, on retient le plan tangent du côté extérieur à la matière qui minimise l'écart maximal. Pratiquement, en contrôle, la pièce est posée sur un marbre : le marbre matérialise la référence.</p>\n<p>On distingue :</p>\n<ul>\n<li>la <strong>référence simple</strong> (une lettre, par exemple A) établie sur une seule surface ;</li>\n<li>la <strong>référence commune</strong> (A-B) établie simultanément sur deux surfaces, par exemple l'axe commun de deux portées de roulement ;</li>\n<li>le <strong>système de références</strong> (A, B, C dans trois cases) où l'ordre compte : A est primaire et bloque le plus de degrés de liberté, B secondaire, C tertiaire.</li>\n</ul>\n<p>Le système de références reprend exactement le raisonnement de l'isostatisme : la référence primaire plane bloque trois degrés de liberté, la secondaire deux, la tertiaire un. C'est pourquoi un fabricant avisé choisit, quand il le peut, une mise en position qui reproduit le système de références du dessin.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pour décoder une spécification, rédiger une phrase complète en cinq parties : 1) l'élément tolérancé (« l'axe de l'alésage ⌀20H7 ») ; 2) la caractéristique (« doit être localisé ») ; 3) la forme et la taille de la zone (« dans un cylindre de diamètre 0,05 mm ») ; 4) l'orientation et la position de la zone (« perpendiculaire au plan A, son axe étant à 40 mm de B et 25 mm de C ») ; 5) le modificateur éventuel. Si la phrase n'est pas complète, l'interprétation n'est pas maîtrisée.</div>"
      },
      {
       "titre": "Exigence de l'enveloppe et du maximum de matière",
       "contenu": "<p>L'<strong>exigence de l'enveloppe</strong>, notée Ⓔ après une cote de taille (par exemple ⌀25 h6 Ⓔ), impose que la surface réelle ne dépasse pas une enveloppe de forme parfaite à la dimension au maximum de matière. Elle garantit l'assemblage d'un arbre et d'un alésage : un arbre qui respecte sa taille mais qui est cintré ne passerait pas dans l'alésage. Avec Ⓔ, la forme est limitée par la taille.</p>\n<p>L'<strong>exigence du maximum de matière</strong>, notée Ⓜ dans le cadre de tolérance (ISO 2692), s'emploie surtout pour les trous de passage de vis ou de goupilles. Elle autorise un <strong>bonus</strong> : quand l'élément s'éloigne de son état au maximum de matière, la tolérance géométrique augmente d'autant.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> trou ⌀10 +0,2/0 avec localisation ⌀0,1 Ⓜ. Le maximum de matière d'un trou correspond au plus petit diamètre : 10,0 mm. Si le trou réel mesure 10,15 mm, il s'est éloigné de 0,15 mm du maximum de matière. La tolérance de localisation disponible devient 0,1 + 0,15 = 0,25 mm. Une pièce dont l'axe du trou est décalé de 0,10 mm (soit une zone de diamètre 0,20 mm nécessaire) est donc conforme, alors qu'elle serait refusée sans le modificateur Ⓜ.</div>\n<p>Cette exigence est économique : elle accepte des pièces qui s'assemblent réellement, au lieu de les rebuter. Elle se contrôle très bien avec un <strong>calibre fonctionnel</strong> qui simule la pièce d'accouplement.</p>"
      },
      {
       "titre": "Tolérances générales et cotes tolérancées",
       "contenu": "<p>Toutes les cotes d'un dessin ne portent pas de tolérance chiffrée. Celles qui n'en ont pas relèvent des <strong>tolérances générales</strong> indiquées dans le cartouche ou près de lui, par exemple « ISO 2768-mK » :</p>\n<ul>\n<li>la lettre minuscule (f, m, c, v pour fine, moyenne, grossière, très grossière) fixe les tolérances des dimensions linéaires et angulaires ;</li>\n<li>la lettre majuscule (H, K, L) fixe les tolérances géométriques générales (rectitude, planéité, perpendicularité, symétrie, battement).</li>\n</ul>\n<p>Selon la classe m, une longueur nominale comprise entre 30 et 120 mm est admise à ± 0,3 mm. Les normes de la série ISO 22081 remplacent progressivement la partie géométrique de l'ISO 2768 sur les dessins récents : le technicien doit lire attentivement le cartouche et ne jamais présumer.</p>\n<p>Sur les dessins modernes, une tolérance de taille peut aussi être complétée par un <strong>modificateur de taille</strong> ISO 14405-1, comme (LP) pour une taille locale entre deux points, (GG) pour un diamètre obtenu par association des moindres carrés, ou (GX) pour un diamètre maximal inscrit. Ces indications précisent la façon de mesurer : un micromètre deux touches mesure une taille locale (LP), une MMT peut calculer un diamètre associé.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en aéronautique et en automobile, les plans clients sont presque entièrement cotés en ISO GPS avec cotes encadrées et localisations. Un technicien qui sait lire ces spécifications est très recherché au contrôle et à la mise au point de programmes.</div>"
      },
      {
       "titre": "Spécifier, fabriquer et contrôler : la même géométrie",
       "contenu": "<p>L'intérêt majeur du langage ISO GPS est d'aligner trois métiers :</p>\n<table>\n<thead><tr><th>Étape</th><th>Question posée</th><th>Outil de travail</th></tr></thead>\n<tbody>\n<tr><td>Conception</td><td>Quelle variation la fonction tolère-t-elle ?</td><td>Cadre de tolérance, références</td></tr>\n<tr><td>Fabrication</td><td>Comment garantir cette zone par le procédé et la mise en position ?</td><td>Contrat de phase, cotes fabriquées, montage</td></tr>\n<tr><td>Contrôle</td><td>Comment vérifier que l'élément est dans la zone ?</td><td>Marbre, comparateur, MMT, calibre</td></tr>\n</tbody>\n</table>\n<p>Un défaut d'orientation ou de position naît le plus souvent d'un changement de mise en position entre deux usinages (une <strong>reprise</strong>). C'est pourquoi on cherche à usiner dans la même phase les surfaces liées par une tolérance serrée : la machine garantit alors la position relative avec sa propre précision.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le contrôle d'une tolérance de position avec un simple pied à coulisse est presque toujours faux : il mesure une distance entre deux surfaces réelles, sans établir la référence ni tenir compte de la forme. Il faut au minimum un marbre, un montage qui réalise les références, et un comparateur, ou une MMT.</div>"
      }
     ],
     "points_cles": [
      "ISO 8015 pose le principe d'indépendance : chaque exigence s'applique seule",
      "Le cadre de tolérance contient symbole, valeur avec modificateurs, puis références dans l'ordre de priorité",
      "Flèche sur la surface : élément intégral ; flèche dans l'alignement de la cote : axe ou plan médian",
      "Les tolérances de forme n'ont pas de référence ; orientation, position et battement en ont une",
      "Une cote encadrée est théoriquement exacte : elle positionne la zone de tolérance",
      "Le système de références A, B, C bloque successivement trois, deux puis un degrés de liberté",
      "L'exigence de l'enveloppe Ⓔ limite la forme par la taille au maximum de matière",
      "Le maximum de matière Ⓜ accorde un bonus de tolérance quand l'élément s'éloigne du maximum de matière",
      "Les surfaces liées par une tolérance serrée se réalisent de préférence dans la même phase"
     ],
     "lexique": [
      {
       "terme": "ISO GPS",
       "def": "Ensemble de normes internationales de spécification géométrique des produits."
      },
      {
       "terme": "Élément tolérancé",
       "def": "Surface ou élément dérivé (axe, plan médian) auquel s'applique une tolérance."
      },
      {
       "terme": "Zone de tolérance",
       "def": "Espace géométrique limité dans lequel l'élément réel doit être entièrement contenu."
      },
      {
       "terme": "Référence spécifiée",
       "def": "Élément géométrique parfait associé à une surface réelle et servant à orienter ou positionner une zone de tolérance."
      },
      {
       "terme": "Cote encadrée",
       "def": "Dimension théoriquement exacte, sans tolérance, qui définit la position ou l'orientation théorique d'une zone."
      },
      {
       "terme": "Maximum de matière",
       "def": "État d'un élément de taille qui contient le plus de matière : plus grand arbre, plus petit alésage."
      },
      {
       "terme": "Exigence de l'enveloppe",
       "def": "Exigence notée Ⓔ imposant que la surface ne dépasse pas l'enveloppe de forme parfaite au maximum de matière."
      },
      {
       "terme": "Tolérance générale",
       "def": "Tolérance applicable aux cotes sans indication particulière, définie par une norme citée dans le cartouche."
      },
      {
       "terme": "Battement",
       "def": "Variation de la position d'une surface mesurée pendant sa rotation autour d'un axe de référence."
      }
     ]
    },
    {
     "id": "btrpm-maquette-numerique",
     "titre": "Maquette numérique et chaîne numérique de production",
     "niveau": "1re",
     "duree": 35,
     "objectifs": [
      "Décrire les étapes de la chaîne numérique, de la CAO au contrôle",
      "Exploiter une maquette numérique : arbre de construction, mesures, coupes, propriétés",
      "Identifier les formats d'échange de fichiers et leurs limites",
      "Gérer les versions et indices d'un modèle et d'un plan",
      "Modifier un modèle pour l'adapter à la fabrication sans altérer la définition"
     ],
     "sections": [
      {
       "titre": "De la CAO à la pièce : la chaîne numérique",
       "contenu": "<p>La <strong>chaîne numérique</strong> désigne l'ensemble des logiciels et des échanges de données qui conduisent du modèle 3D à la pièce contrôlée, sans ressaisie manuelle des géométries. Ses maillons principaux sont :</p>\n<table>\n<thead><tr><th>Maillon</th><th>Rôle</th><th>Fichier produit</th></tr></thead>\n<tbody>\n<tr><td>CAO (conception assistée par ordinateur)</td><td>Définir la géométrie du produit</td><td>Pièces, assemblages, mises en plan</td></tr>\n<tr><td>FAO (fabrication assistée par ordinateur)</td><td>Définir les trajectoires d'outils</td><td>Fichier de trajectoires puis programme CN</td></tr>\n<tr><td>Post-processeur</td><td>Traduire les trajectoires dans le langage d'une machine précise</td><td>Programme ISO (code G)</td></tr>\n<tr><td>Simulation</td><td>Vérifier collisions et enlèvement de matière sur une machine virtuelle</td><td>Rapport de simulation</td></tr>\n<tr><td>Machine à commande numérique</td><td>Exécuter le programme</td><td>Pièce</td></tr>\n<tr><td>Contrôle (MMT, logiciel de métrologie)</td><td>Comparer la pièce au modèle</td><td>Rapport de contrôle</td></tr>\n</tbody>\n</table>\n<p>Pour la fabrication additive, le maillon FAO est remplacé par un <strong>logiciel de tranchage</strong> (slicer) ou de préparation de plateau, qui découpe le modèle en couches et génère les supports.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> dans une chaîne numérique, la donnée de référence est le modèle 3D validé, accompagné du dessin de définition qui porte les tolérances. Toute modification doit repartir de cette donnée et non d'un programme corrigé à la main.</div>"
      },
      {
       "titre": "Exploiter une maquette numérique",
       "contenu": "<p>Une <strong>maquette numérique</strong> est un modèle 3D volumique ou surfacique d'une pièce ou d'un assemblage. Le technicien l'exploite pour :</p>\n<ul>\n<li><strong>mesurer</strong> des distances, angles, rayons, surfaces et volumes, y compris ceux qui ne sont pas cotés sur le plan ;</li>\n<li><strong>couper</strong> la pièce selon un plan pour visualiser l'intérieur (épaisseurs de parois, perçages débouchants) ;</li>\n<li>consulter les <strong>propriétés physiques</strong> : masse (à condition que le matériau soit correctement affecté), centre de gravité, volume ;</li>\n<li>animer un assemblage pour comprendre les mouvements et détecter des interférences ;</li>\n<li>lire l'<strong>arbre de construction</strong>, qui montre la suite des fonctions (esquisse, extrusion, enlèvement, perçage, congé) ayant servi à créer la pièce.</li>\n</ul>\n<p>La lecture de l'arbre de construction est souvent riche d'enseignements : elle révèle la logique du concepteur et les cotes pilotantes. Une fonction « perçage » avec un taraudage M8 renseigné transmet une information exploitable par la FAO, alors qu'un simple trou cylindrique de 6,8 mm ne dit pas qu'il doit être taraudé.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la masse d'un bloc de matrice à partir de la maquette. 1) Vérifier le matériau affecté (acier à outils, masse volumique 7 850 kg/m³). 2) Lire le volume donné par le logiciel : 1 240 000 mm³. 3) Convertir : 1 240 000 mm³ = 1,24 × 10<sup>−3</sup> m³. 4) Calculer : m = ρ × V = 7 850 × 1,24 × 10<sup>−3</sup> ≈ 9,7 kg. 5) Conclure : la pièce se manipule à la main avec précaution, mais un moyen de levage est conseillé pour un montage répété.</div>"
      },
      {
       "titre": "Formats d'échange et interopérabilité",
       "contenu": "<p>Les logiciels de CAO utilisent des formats natifs propres à chaque éditeur. Pour échanger avec un client, un sous-traitant ou un logiciel de FAO différent, on utilise des <strong>formats neutres</strong> :</p>\n<table>\n<thead><tr><th>Format</th><th>Contenu</th><th>Usage typique</th></tr></thead>\n<tbody>\n<tr><td>STEP (ISO 10303)</td><td>Géométrie exacte (surfaces, volumes), assemblage ; dans ses versions récentes, annotations de tolérancement</td><td>Échange client-sous-traitant, import en FAO</td></tr>\n<tr><td>IGES</td><td>Surfaces et courbes, format ancien</td><td>Anciennes données, surfaces de moules</td></tr>\n<tr><td>STL</td><td>Maillage de triangles, sans dimension exacte</td><td>Fabrication additive</td></tr>\n<tr><td>3MF</td><td>Maillage enrichi (couleurs, matériaux, unités)</td><td>Fabrication additive</td></tr>\n<tr><td>DXF</td><td>Contours 2D</td><td>Découpe laser, jet d'eau, électroérosion à fil</td></tr>\n<tr><td>PDF</td><td>Mise en plan figée</td><td>Diffusion des dessins de définition</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un fichier STL ne contient pas de cercle exact, seulement des facettes. Usiner un alésage précis à partir d'un STL donne un polygone. De même, un import STEP perd l'arbre de construction : la pièce arrive comme un bloc « mort » qu'on ne peut plus modifier par ses cotes pilotantes.</div>\n<p>Avant d'exploiter un fichier reçu, on vérifie systématiquement les <strong>unités</strong> (millimètres ou pouces), l'<strong>origine</strong> et l'orientation du repère, ainsi que la cohérence des cotes avec le dessin de définition.</p>"
      },
      {
       "titre": "Version, indice et gestion des données techniques",
       "contenu": "<p>Un produit évolue : correction d'une erreur, demande du client, amélioration de la fabricabilité. Chaque évolution donne lieu à un nouvel <strong>indice</strong> (A, B, C…) sur le modèle et sur le dessin, avec une ligne dans le tableau des modifications : date, nature de la modification, auteur, approbation.</p>\n<p>Dans les entreprises structurées, les fichiers sont stockés dans un logiciel de <strong>gestion des données techniques</strong> (GDT, ou PDM en anglais) qui garantit qu'une seule version est « en vigueur » et que les versions anciennes restent tracées. Les droits d'écriture sont limités : l'atelier consulte, le bureau d'études modifie.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une non-conformité classique chez un sous-traitant est d'avoir fabriqué une série à l'indice B alors que le client avait transmis l'indice C. Avant de lancer une fabrication, le technicien compare l'indice indiqué sur l'ordre de fabrication, sur le dessin et dans le programme. Les trois doivent concorder.</div>\n<p>Le programme CN, le contrat de phase et la fiche de contrôle portent eux aussi un indice qui doit renvoyer à l'indice du dessin. Si le dessin évolue, tous ces documents doivent être revus.</p>"
      },
      {
       "titre": "Le modèle de fabrication",
       "contenu": "<p>Le modèle fourni par le bureau d'études représente la pièce finie, aux cotes nominales. Pour la fabrication, le technicien ou le préparateur en dérive souvent un <strong>modèle de fabrication</strong> :</p>\n<ul>\n<li>ajout des <strong>surépaisseurs</strong> d'usinage pour créer le brut ou le modèle intermédiaire ;</li>\n<li>recentrage des cotes tolérancées : une cote 30 +0,05/+0,01 est modélisée à 30,03 (cote moyenne) pour que l'usinage vise le milieu de l'intervalle ;</li>\n<li>ajout des formes de prise de pièce (talons, attaches) qui seront enlevées ensuite ;</li>\n<li>pour un outillage, application du <strong>coefficient de retrait</strong> de la matière moulée : une pièce en polypropylène de 100 mm avec un retrait de 1,5 % impose une empreinte de 101,5 mm environ.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> recentrer une cote dissymétrique. Cote du dessin : 45 −0,02/−0,06. Cote mini = 44,94, cote maxi = 44,98. Cote moyenne = (44,94 + 44,98) / 2 = 44,96 mm. On modélise ou on programme 44,96 : la dispersion de la machine, de part et d'autre de cette valeur, a ainsi le maximum de marge avant de sortir de la tolérance.</div>\n<p>Le modèle de fabrication est un document interne à l'atelier : il ne remplace jamais le modèle de définition, qui reste la référence contractuelle avec le client.</p>"
      },
      {
       "titre": "Numérisation et contrôle par rapport au modèle",
       "contenu": "<p>La chaîne numérique se referme au contrôle. Deux familles de moyens comparent la pièce réelle au modèle :</p>\n<ul>\n<li>la <strong>machine à mesurer tridimensionnelle</strong> (MMT) palpe des points et calcule des éléments géométriques associés (plans, cylindres) pour vérifier les spécifications ;</li>\n<li>les <strong>scanners 3D</strong> (lumière structurée, laser) acquièrent un nuage de millions de points. Le logiciel le superpose au modèle et produit une <strong>cartographie des écarts</strong> en couleurs.</li>\n</ul>\n<p>La cartographie est très utilisée pour les outillages : elle montre si une empreinte usée ou une pièce emboutie s'écarte du modèle, et où. Elle sert aussi en rétro-conception, lorsqu'un outillage ancien n'a plus de plans : on numérise, puis on reconstruit un modèle CAO.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un nuage de points n'est pas un modèle CAO. Il faut le traiter (nettoyage, maillage, reconstruction de surfaces) avant de pouvoir l'usiner ou le coter, et sa précision dépend du moyen de numérisation.</div>"
      },
      {
       "titre": "Bonnes pratiques du technicien face au numérique",
       "contenu": "<p>Quelques règles évitent la plupart des erreurs :</p>\n<ul>\n<li>toujours travailler sur un fichier dont on connaît l'origine et l'indice ;</li>\n<li>ne pas modifier le modèle de définition ; enregistrer toute adaptation sous un nom distinct ;</li>\n<li>vérifier les unités et le repère à chaque import ;</li>\n<li>contrôler deux ou trois cotes significatives du modèle par rapport au dessin, car il arrive qu'un dessin ait été modifié sans mise à jour du modèle, ou l'inverse ;</li>\n<li>en cas de contradiction entre le modèle et le dessin coté, appliquer la règle du contrat avec le client (souvent : le dessin prime pour les tolérances) et signaler l'écart par écrit ;</li>\n<li>sauvegarder les programmes validés, avec la date et l'indice de la pièce.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la cybersécurité concerne aussi l'atelier. Une clé USB inconnue branchée sur la commande numérique peut introduire un logiciel malveillant ou un programme non validé. Les transferts passent de préférence par le réseau de l'entreprise et un dossier contrôlé.</div>"
      }
     ],
     "points_cles": [
      "La chaîne numérique relie CAO, FAO, post-processeur, simulation, machine et contrôle",
      "La maquette numérique permet de mesurer, couper, animer et calculer masse et volume",
      "STEP transmet une géométrie exacte, STL seulement un maillage de facettes",
      "Unités, origine et orientation du repère se vérifient à chaque import",
      "Dessin, programme, contrat de phase et fiche de contrôle doivent porter le même indice",
      "Le modèle de fabrication ajoute surépaisseurs, cotes moyennes ou retrait sans toucher au modèle de définition",
      "Une cote tolérancée se programme à sa cote moyenne",
      "Scanner 3D et cartographie d'écarts comparent la pièce réelle au modèle"
     ],
     "lexique": [
      {
       "terme": "Chaîne numérique",
       "def": "Enchaînement de logiciels et d'échanges de données du modèle 3D jusqu'à la pièce contrôlée."
      },
      {
       "terme": "CAO",
       "def": "Conception assistée par ordinateur : création du modèle géométrique d'un produit."
      },
      {
       "terme": "FAO",
       "def": "Fabrication assistée par ordinateur : création des trajectoires d'outils à partir du modèle."
      },
      {
       "terme": "Post-processeur",
       "def": "Programme qui traduit les trajectoires FAO dans le code d'une machine et d'une commande précises."
      },
      {
       "terme": "STEP",
       "def": "Format d'échange neutre normalisé conservant la géométrie exacte d'un modèle."
      },
      {
       "terme": "Indice",
       "def": "Lettre ou numéro identifiant la version d'un plan ou d'un modèle."
      },
      {
       "terme": "Cote moyenne",
       "def": "Moyenne des cotes mini et maxi, visée en fabrication pour centrer la production dans la tolérance."
      },
      {
       "terme": "Cartographie des écarts",
       "def": "Représentation colorée des écarts entre une pièce numérisée et son modèle CAO."
      }
     ]
    },
    {
     "id": "btrpm-comportement-mecanique",
     "titre": "Efforts, contraintes et déformations des pièces",
     "niveau": "1re-Tle",
     "duree": 40,
     "objectifs": [
      "Modéliser une action mécanique par une force et un moment",
      "Appliquer le principe fondamental de la statique à un cas simple d'atelier",
      "Calculer une contrainte de traction, de compression ou de cisaillement et la comparer à une résistance",
      "Exploiter la courbe de traction d'un matériau : module d'Young, Re, Rm, allongement",
      "Anticiper la déformation d'une pièce ou d'un outil sous l'effet du bridage ou de la coupe"
     ],
     "sections": [
      {
       "titre": "Pourquoi le technicien de réalisation a besoin de mécanique",
       "contenu": "<p>À l'atelier, les efforts sont partout : effort de coupe sur l'outil, effort de serrage d'un étau ou d'une bride, effort de découpe sur un poinçon, pression d'injection dans un moule. Ces efforts provoquent des <strong>déformations</strong> qui expliquent bien des défauts : une pièce mince serrée trop fort qui reprend sa forme après desserrage, un outil long qui fléchit et laisse une surface conique, une vis de bride qui casse.</p>\n<p>Le technicien n'est pas un calculateur de structures, mais il doit savoir estimer un ordre de grandeur, vérifier qu'un élément n'est pas surchargé et choisir un réglage raisonnable. Ce chapitre fournit ces outils.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une <strong>action mécanique</strong> se modélise par une force (intensité en newtons, direction, sens, point d'application) et éventuellement un moment (en newton-mètres) qui traduit son effet de rotation. 1 kN = 1 000 N ; un poids de 10 kg exerce environ 100 N.</div>"
      },
      {
       "titre": "Moment d'une force et principe fondamental de la statique",
       "contenu": "<p>Le <strong>moment</strong> d'une force F par rapport à un point O vaut M = F × d, où d est la distance perpendiculaire entre O et la droite d'action de la force (le bras de levier). C'est ce qui fait tourner une clé : avec une clé de 0,25 m et un effort de 120 N au bout, le couple appliqué vaut 120 × 0,25 = 30 N·m.</p>\n<p>Le <strong>principe fondamental de la statique</strong> (PFS) dit qu'un solide en équilibre vérifie deux conditions : la somme des forces extérieures est nulle, et la somme de leurs moments par rapport à n'importe quel point est nulle. Dans le plan, cela donne trois équations : somme des forces horizontales nulle, somme des forces verticales nulle, somme des moments nulle.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> effort de serrage d'une bride à levier. Une bride de longueur 120 mm est appuyée sur une cale d'un côté et sur la pièce de l'autre ; la vis est placée à 40 mm de la pièce et 80 mm de la cale. La vis exerce 9 000 N. 1) Isoler la bride : trois forces verticales (vis, pièce, cale). 2) Écrire l'équilibre des moments autour du point d'appui sur la cale : F<sub>pièce</sub> × 120 = F<sub>vis</sub> × 80. 3) Calculer : F<sub>pièce</sub> = 9 000 × 80 / 120 = 6 000 N. 4) Équilibre des forces : F<sub>cale</sub> = 9 000 − 6 000 = 3 000 N. 5) Conclure : rapprocher la vis de la pièce augmente l'effort de serrage utile.</div>\n<p>Ce calcul explique une règle d'atelier bien connue : on place toujours la vis de bride au plus près de la pièce, et la cale légèrement plus haute que la surface serrée pour que la bride appuie par son extrémité.</p>"
      },
      {
       "titre": "Contraintes : traction, compression, cisaillement",
       "contenu": "<p>Une même force n'a pas le même effet sur une tige de 5 mm de diamètre et sur une barre de 50 mm. La grandeur qui compte est la <strong>contrainte</strong>, effort rapporté à la section qui le supporte : σ = F / S. Avec F en newtons et S en mm², σ s'exprime en N/mm², c'est-à-dire en mégapascals (MPa).</p>\n<table>\n<thead><tr><th>Sollicitation</th><th>Situation d'atelier</th><th>Contrainte</th></tr></thead>\n<tbody>\n<tr><td>Traction</td><td>Vis de bride serrée, tirant de broche</td><td>σ = F / S (section du noyau pour une vis)</td></tr>\n<tr><td>Compression</td><td>Poinçon de découpe, colonne de presse</td><td>σ = F / S</td></tr>\n<tr><td>Cisaillement</td><td>Goupille, tôle découpée, clavette</td><td>τ = F / S (section cisaillée)</td></tr>\n<tr><td>Flexion</td><td>Outil de tour en porte-à-faux, bride</td><td>Contrainte maximale en surface, plus forte loin de l'appui</td></tr>\n<tr><td>Torsion</td><td>Arbre transmettant un couple, foret</td><td>Contrainte maximale en surface</td></tr>\n</tbody>\n</table>\n<p>On vérifie la <strong>résistance</strong> en comparant la contrainte calculée à une contrainte admissible : σ ≤ R<sub>e</sub> / s, où R<sub>e</sub> est la limite d'élasticité du matériau et s un <strong>coefficient de sécurité</strong> (souvent 2 à 4 en mécanique générale, davantage si les chocs sont fréquents).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier une vis M12 de classe 8.8 qui supporte 20 kN en traction. 1) Section résistante d'une vis M12 (tables) : 84,3 mm². 2) Contrainte : σ = 20 000 / 84,3 ≈ 237 MPa. 3) Classe 8.8 : Rm = 8 × 100 = 800 MPa, Re = 0,8 × 800 = 640 MPa. 4) Coefficient de sécurité obtenu : 640 / 237 ≈ 2,7. 5) Conclusion : la vis résiste avec une marge correcte.</div>"
      },
      {
       "titre": "La courbe de traction et les caractéristiques des matériaux",
       "contenu": "<p>L'<strong>essai de traction</strong> (ISO 6892-1) consiste à étirer une éprouvette normalisée jusqu'à la rupture en enregistrant l'effort et l'allongement. La courbe obtenue présente :</p>\n<ul>\n<li>une zone <strong>élastique</strong>, droite, où la déformation disparaît quand on relâche l'effort ; sa pente est le <strong>module d'Young</strong> E (environ 210 000 MPa pour l'acier, 70 000 MPa pour l'aluminium) ;</li>\n<li>la <strong>limite d'élasticité</strong> R<sub>e</sub> (ou R<sub>p0,2</sub>), au-delà de laquelle la déformation devient permanente ;</li>\n<li>une zone <strong>plastique</strong> jusqu'à la <strong>résistance à la traction</strong> R<sub>m</sub>, effort maximal rapporté à la section initiale ;</li>\n<li>la rupture, caractérisée par l'<strong>allongement après rupture</strong> A %, indicateur de ductilité.</li>\n</ul>\n<table>\n<thead><tr><th>Matériau (exemples)</th><th>R<sub>e</sub> (MPa)</th><th>R<sub>m</sub> (MPa)</th><th>A (%)</th></tr></thead>\n<tbody>\n<tr><td>S235 (acier de construction)</td><td>≥ 235</td><td>360 à 510</td><td>environ 26</td></tr>\n<tr><td>C45 normalisé</td><td>environ 340</td><td>environ 620</td><td>environ 14</td></tr>\n<tr><td>EN AW-6082 T6 (aluminium)</td><td>environ 250</td><td>environ 300</td><td>environ 8</td></tr>\n</tbody>\n</table>\n<p>Ces valeurs indicatives varient selon l'épaisseur et l'état de livraison ; on consulte toujours le certificat matière ou la fiche du fournisseur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> pour l'emboutissage, on regarde surtout l'allongement et le rapport R<sub>e</sub>/R<sub>m</sub> : une tôle peu ductile se fissure dans les rayons. Pour un outil de découpe, on regarde au contraire la dureté et la ténacité de l'acier à outils.</div>"
      },
      {
       "titre": "Déformations élastiques : loi de Hooke et flexion des outils",
       "contenu": "<p>Dans le domaine élastique, la déformation est proportionnelle à la contrainte : c'est la <strong>loi de Hooke</strong>, σ = E × ε, avec ε = ΔL / L l'allongement relatif. Une tige d'acier de 200 mm sollicitée à 100 MPa s'allonge de ΔL = L × σ / E = 200 × 100 / 210 000 ≈ 0,095 mm, soit près d'un dixième de millimètre : c'est l'ordre de grandeur d'une tolérance serrée.</p>\n<p>La <strong>flexion</strong> d'un outil en porte-à-faux est encore plus sensible. Pour une poutre encastrée chargée à son extrémité, la flèche vaut f = F × L³ / (3 × E × I), où I est le moment quadratique de la section. Le cube de la longueur signifie que doubler le porte-à-faux multiplie la flèche par huit.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sortir un outil de tour ou une fraise plus que nécessaire est la cause la plus fréquente de vibrations et d'erreurs de cote. La règle pratique est de limiter le porte-à-faux d'un barreau d'alésage en acier à environ trois à quatre fois son diamètre ; au-delà, on utilise un barreau en carbure ou anti-vibratoire.</div>\n<p>Le même raisonnement s'applique à la pièce : une pièce longue et fine tournée en l'air (sans contre-pointe) fléchit sous l'effort de coupe, et le diamètre obtenu est plus grand au bout qu'au mandrin.</p>"
      },
      {
       "titre": "Déformations dues au bridage et aux contraintes internes",
       "contenu": "<p>Le bridage déforme élastiquement la pièce. Si l'on usine une surface pendant que la pièce est déformée, cette surface sera plane… tant que la pièce reste serrée. Au desserrage, la pièce reprend sa forme et la surface usinée se déforme d'autant : c'est un défaut de planéité typique des pièces minces.</p>\n<p>Les pièces contiennent aussi des <strong>contraintes résiduelles</strong> : laminage, soudure, trempe ou enlèvement important de matière les libèrent et provoquent des déformations après usinage. Un bloc d'aluminium dans lequel on creuse une poche profonde peut « se vriller » de plusieurs dixièmes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> limiter les déformations d'une plaque mince à surfacer. 1) Ébaucher les deux faces en laissant 0,5 mm environ. 2) Desserrer la pièce pour libérer les contraintes, la laisser reposer. 3) Resserrer avec un effort réduit, en calant les zones flottantes. 4) Finir chaque face avec une faible profondeur de passe. 5) Contrôler la planéité pièce desserrée, sur un marbre.</div>\n<p>Dans les outillages, des traitements de <strong>détensionnement</strong> (recuit de stabilisation) sont réalisés après ébauche, avant la trempe et la finition, pour éviter qu'une plaque d'outil ne se déforme ensuite.</p>"
      },
      {
       "titre": "Ordres de grandeur des efforts de production",
       "contenu": "<p>Quelques ordres de grandeur aident à juger un résultat de calcul :</p>\n<table>\n<thead><tr><th>Situation</th><th>Ordre de grandeur de l'effort</th></tr></thead>\n<tbody>\n<tr><td>Effort de coupe en tournage de finition d'un acier (ap 0,5 mm, f 0,1 mm/tr)</td><td>de l'ordre de 100 N</td></tr>\n<tr><td>Effort de coupe en ébauche (ap 3 mm, f 0,3 mm/tr)</td><td>de l'ordre de 2 000 N</td></tr>\n<tr><td>Serrage d'un étau de fraisage à la main</td><td>de l'ordre de 20 000 à 40 000 N</td></tr>\n<tr><td>Découpe d'un trou de 20 mm dans 2 mm d'acier doux</td><td>de l'ordre de 40 000 N</td></tr>\n<tr><td>Force de fermeture d'une petite presse à injecter</td><td>de l'ordre de 500 kN à 1 000 kN</td></tr>\n</tbody>\n</table>\n<p>L'effort de découpe se calcule par F = p × e × R<sub>cis</sub>, où p est le périmètre découpé, e l'épaisseur et R<sub>cis</sub> la résistance au cisaillement, souvent estimée à 0,8 × R<sub>m</sub>. Pour l'exemple : p = π × 20 ≈ 62,8 mm, e = 2 mm, R<sub>cis</sub> ≈ 0,8 × 400 = 320 MPa, d'où F ≈ 62,8 × 2 × 320 ≈ 40 200 N, soit environ 4 tonnes-force.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un résultat de calcul se compare toujours à un ordre de grandeur connu et à la capacité de l'équipement (puissance de broche, force de presse, effort admissible d'un étau). Un écart d'un facteur dix signale presque toujours une erreur d'unité.</div>"
      }
     ],
     "points_cles": [
      "Une action mécanique se modélise par une force et éventuellement un moment",
      "Moment = force × bras de levier ; il s'exprime en N·m",
      "Le PFS impose somme des forces nulle et somme des moments nulle",
      "La contrainte vaut σ = F / S et s'exprime en MPa (N/mm²)",
      "On vérifie σ ≤ Re / s avec un coefficient de sécurité adapté",
      "La loi de Hooke relie contrainte et déformation par le module d'Young",
      "La flèche d'un outil en porte-à-faux varie comme le cube de sa longueur",
      "Bridage et contraintes résiduelles déforment les pièces après desserrage",
      "Effort de découpe : F = périmètre × épaisseur × résistance au cisaillement"
     ],
     "lexique": [
      {
       "terme": "Moment",
       "def": "Effet de rotation d'une force, égal au produit de son intensité par son bras de levier."
      },
      {
       "terme": "Principe fondamental de la statique",
       "def": "Loi selon laquelle un solide en équilibre a une somme des forces et une somme des moments extérieurs nulles."
      },
      {
       "terme": "Contrainte",
       "def": "Effort intérieur rapporté à l'unité de surface, exprimé en MPa."
      },
      {
       "terme": "Limite d'élasticité Re",
       "def": "Contrainte au-delà de laquelle la déformation devient permanente."
      },
      {
       "terme": "Résistance à la traction Rm",
       "def": "Contrainte maximale supportée lors d'un essai de traction."
      },
      {
       "terme": "Module d'Young E",
       "def": "Rapport entre contrainte et déformation dans le domaine élastique, caractéristique de la rigidité du matériau."
      },
      {
       "terme": "Coefficient de sécurité",
       "def": "Rapport entre la résistance du matériau et la contrainte de service retenue."
      },
      {
       "terme": "Contraintes résiduelles",
       "def": "Contraintes internes présentes dans une pièce sans effort extérieur, issues de sa fabrication."
      },
      {
       "terme": "Flèche",
       "def": "Déplacement transversal d'une poutre ou d'un outil sous l'effet d'une charge."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 2 — Matériaux, coupe et procédés de mise en forme",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btrpm-materiaux-usinabilite",
     "titre": "Matériaux de la production mécanique et usinabilité",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décoder les désignations symboliques et numériques des aciers, fontes, alliages d'aluminium et de cuivre",
      "Identifier les aciers à outils et les matériaux des outillages",
      "Classer un matériau dans les groupes d'usinabilité ISO P, M, K, N, S, H",
      "Relier la composition d'un matériau à son comportement en coupe",
      "Exploiter un certificat matière pour assurer la traçabilité"
     ],
     "sections": [
      {
       "titre": "Rappel et approfondissement : les désignations des aciers",
       "contenu": "<p>Le cours de seconde a présenté le principe des désignations normalisées. On approfondit ici les règles de la norme <strong>NF EN 10027</strong>, qui prévoit deux systèmes : la <strong>désignation symbolique</strong> (NF EN 10027-1) et le <strong>numéro matière</strong> à cinq chiffres (NF EN 10027-2, de la forme 1.xxxx).</p>\n<table>\n<thead><tr><th>Groupe</th><th>Règle de désignation</th><th>Exemple</th><th>Lecture</th></tr></thead>\n<tbody>\n<tr><td>Aciers d'usage général</td><td>Lettre d'emploi + limite d'élasticité mini</td><td>S235JR</td><td>Construction, Re ≥ 235 MPa, qualité de résilience JR</td></tr>\n<tr><td>Aciers non alliés pour traitement</td><td>C + 100 × %C</td><td>C45 (1.0503)</td><td>0,45 % de carbone</td></tr>\n<tr><td>Aciers faiblement alliés</td><td>100 × %C + éléments + teneurs multipliées</td><td>42CrMo4 (1.7225)</td><td>0,42 % C, 1 % Cr environ (4 / 4), traces de Mo</td></tr>\n<tr><td>Aciers fortement alliés</td><td>X + 100 × %C + éléments + teneurs réelles</td><td>X5CrNi18-10 (1.4301)</td><td>0,05 % C, 18 % Cr, 10 % Ni : inox austénitique</td></tr>\n<tr><td>Aciers de décolletage</td><td>Teneurs en soufre et plomb</td><td>11SMnPb30 (1.0718)</td><td>0,11 % C, soufre et plomb pour fragmenter le copeau</td></tr>\n</tbody>\n</table>\n<p>Pour les aciers faiblement alliés, les multiplicateurs sont : 4 pour Cr, Co, Mn, Ni, Si, W ; 10 pour Al, Cu, Mo, Ti, V ; 100 pour C, N, P, S ; 1 000 pour B.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> décoder 34CrNiMo6. 1) Pas de X : acier faiblement allié. 2) 34 : 0,34 % de carbone. 3) Éléments dans l'ordre décroissant de teneur : Cr, Ni, Mo. 4) Le nombre 6 se rapporte au premier élément, Cr : 6 / 4 = 1,5 % de chrome. 5) Ni et Mo sans nombre : présents en teneurs plus faibles. Conclusion : acier de traitement thermique pour pièces très sollicitées (arbres, engrenages).</div>"
      },
      {
       "titre": "Les aciers à outils",
       "contenu": "<p>Les outillages de mise en forme utilisent des <strong>aciers à outils</strong> (norme NF EN ISO 4957), choisis pour leur dureté, leur résistance à l'usure, leur ténacité et leur tenue à chaud. Les ateliers les désignent souvent par leur numéro matière.</p>\n<table>\n<thead><tr><th>Désignation</th><th>Numéro</th><th>Famille</th><th>Emploi typique</th></tr></thead>\n<tbody>\n<tr><td>X153CrMoV12</td><td>1.2379</td><td>Acier pour travail à froid, 12 % Cr</td><td>Poinçons et matrices de découpe, résistance à l'usure</td></tr>\n<tr><td>90MnCrV8</td><td>1.2842</td><td>Acier pour travail à froid</td><td>Petits outils, calibres, plaques de guidage</td></tr>\n<tr><td>40CrMnMo7</td><td>1.2311</td><td>Acier pour moules livré prétraité (environ 30 HRC)</td><td>Plaques de moules d'injection plastique</td></tr>\n<tr><td>X40CrMoV5-1</td><td>1.2344</td><td>Acier pour travail à chaud</td><td>Moules de fonderie sous pression, matrices de forge</td></tr>\n<tr><td>HS6-5-2</td><td>1.3343</td><td>Acier rapide</td><td>Poinçons, forets, outils coupants</td></tr>\n</tbody>\n</table>\n<p>L'acier rapide se désigne par HS suivi des teneurs en W, Mo, V et Co dans cet ordre. Les inserts d'usure très sollicités peuvent aussi être en <strong>carbure de tungstène</strong> fritté.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les fournisseurs d'aciers commercialisent ces nuances sous des noms de marque. Le technicien s'appuie sur le numéro matière, commun à tous, pour retrouver la nuance demandée par le plan et pour comparer les fiches techniques.</div>"
      },
      {
       "titre": "Fontes, alliages d'aluminium, alliages cuivreux et polymères",
       "contenu": "<p>Les autres matériaux métalliques ont leurs propres systèmes de désignation :</p>\n<ul>\n<li><strong>fontes</strong> (NF EN 1560) : EN-GJL-250 est une fonte à graphite lamellaire de résistance minimale 250 MPa ; EN-GJS-500-7 une fonte à graphite sphéroïdal de R<sub>m</sub> ≥ 500 MPa et A ≥ 7 % ;</li>\n<li><strong>alliages d'aluminium corroyés</strong> (NF EN 573) : EN AW-2017A (série 2000, au cuivre), EN AW-5083 (série 5000, au magnésium, non trempant), EN AW-6082 (série 6000, Mg-Si), EN AW-7075 (série 7000, au zinc, très résistant) ; l'état métallurgique suit le numéro (T6 : mis en solution, trempé et revenu) ;</li>\n<li><strong>alliages d'aluminium de fonderie</strong> : EN AC-42100 (AlSi7Mg0,3), courant pour les pièces moulées ;</li>\n<li><strong>alliages cuivreux</strong> : CuZn39Pb3 (laiton de décolletage), CuSn8 (bronze) ;</li>\n<li><strong>polymères</strong> : désignation par sigles (POM, PA6, PA66 GF30 pour un polyamide chargé à 30 % de fibres de verre, PP, ABS, PEEK).</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la réglementation européenne restreint l'usage du plomb (directive RoHS pour les équipements électriques, règlement REACH). Les laitons et aciers au plomb restent utilisés, mais des nuances sans plomb se développent : elles fragmentent moins bien le copeau, ce qui oblige à revoir les brise-copeaux et les conditions de coupe.</div>"
      },
      {
       "titre": "L'usinabilité et les groupes ISO",
       "contenu": "<p>L'<strong>usinabilité</strong> est l'aptitude d'un matériau à être usiné dans de bonnes conditions. Elle s'apprécie selon plusieurs critères : durée de vie de l'outil, efforts et puissance de coupe, état de surface obtenu, forme et évacuation des copeaux.</p>\n<p>Les fabricants d'outils classent les matériaux en six <strong>groupes ISO</strong> repérés par une lettre et une couleur (ISO 513) :</p>\n<table>\n<thead><tr><th>Groupe</th><th>Couleur</th><th>Matériaux</th><th>Comportement</th></tr></thead>\n<tbody>\n<tr><td>P</td><td>Bleu</td><td>Aciers non alliés et alliés</td><td>Copeau long, à fragmenter</td></tr>\n<tr><td>M</td><td>Jaune</td><td>Aciers inoxydables</td><td>Écrouissage, collage, chaleur</td></tr>\n<tr><td>K</td><td>Rouge</td><td>Fontes</td><td>Copeau court, abrasion</td></tr>\n<tr><td>N</td><td>Vert</td><td>Alliages non ferreux (aluminium, cuivre)</td><td>Copeau collant, vitesses élevées</td></tr>\n<tr><td>S</td><td>Brun</td><td>Superalliages réfractaires, titane</td><td>Chaleur concentrée, usure rapide</td></tr>\n<tr><td>H</td><td>Gris</td><td>Aciers trempés (environ 45 à 65 HRC)</td><td>Efforts élevés, arêtes robustes</td></tr>\n</tbody>\n</table>\n<p>Ce classement guide le choix des plaquettes (nuance, géométrie, revêtement) et des conditions de coupe initiales dans les catalogues.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> avant de choisir un outil, on identifie le groupe ISO du matériau. Une plaquette prévue pour l'acier (P) utilisée sur un inox (M) ou un aluminium (N) donne une usure rapide ou un collage.</div>"
      },
      {
       "titre": "Ce qui rend un matériau facile ou difficile à usiner",
       "contenu": "<p>Plusieurs caractéristiques expliquent l'usinabilité :</p>\n<ul>\n<li><strong>la dureté et la résistance</strong> : plus elles sont élevées, plus les efforts et l'usure augmentent ;</li>\n<li><strong>la ductilité</strong> : un matériau très ductile (acier doux, aluminium pur) forme un copeau long et peut coller à l'outil (arête rapportée) ;</li>\n<li><strong>l'écrouissage</strong> : les inox austénitiques durcissent sous l'outil ; une passe trop faible frotte sur une couche déjà durcie ;</li>\n<li><strong>la conductivité thermique</strong> : le titane et les inox évacuent mal la chaleur, qui se concentre sur l'arête ;</li>\n<li><strong>les inclusions et constituants abrasifs</strong> : carbures dans les aciers à outils, silicium dans certains alliages d'aluminium de fonderie ;</li>\n<li><strong>les additions de décolletage</strong> : soufre, plomb, bismuth favorisent la fragmentation du copeau.</li>\n</ul>\n<p>L'état de livraison compte autant que la nuance : un C45 recuit s'usine bien mieux qu'un C45 trempé-revenu, et un 1.2379 s'usine à l'état recuit (environ 250 HB) avant traitement thermique, puis se rectifie ou s'électroérode à l'état trempé.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir des conditions de départ pour un matériau inconnu de l'atelier. 1) Relever la nuance et l'état sur le bon de livraison ou le certificat. 2) Déterminer le groupe ISO et, si possible, la dureté. 3) Ouvrir le catalogue de l'outil et lire la plage de vitesse de coupe pour ce groupe. 4) Démarrer en bas de plage. 5) Observer le copeau, le bruit et l'usure, puis ajuster progressivement.</div>"
      },
      {
       "titre": "Certificat matière et traçabilité",
       "contenu": "<p>La norme <strong>NF EN 10204</strong> définit les documents de contrôle qui accompagnent les produits métalliques. Les plus courants sont :</p>\n<table>\n<thead><tr><th>Type</th><th>Contenu</th><th>Validation</th></tr></thead>\n<tbody>\n<tr><td>2.1 Attestation de conformité</td><td>Déclaration que le produit est conforme à la commande, sans résultat d'essai</td><td>Fabricant</td></tr>\n<tr><td>2.2 Relevé de contrôle</td><td>Résultats d'essais non spécifiques (sur la fabrication en général)</td><td>Fabricant</td></tr>\n<tr><td>3.1 Certificat de réception</td><td>Résultats d'essais spécifiques sur le lot livré (composition, caractéristiques mécaniques)</td><td>Représentant du contrôle du fabricant, indépendant de la production</td></tr>\n<tr><td>3.2 Certificat de réception</td><td>Comme 3.1, validé aussi par un inspecteur de l'acheteur ou un organisme tiers</td><td>Double validation</td></tr>\n</tbody>\n</table>\n<p>Le certificat porte un <strong>numéro de coulée</strong> ou de lot qui doit être reporté sur la barre ou la plaque (marquage, étiquette) et repris sur l'ordre de fabrication. En aéronautique, médical ou nucléaire, chaque pièce doit pouvoir être rattachée à sa coulée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> couper une barre en débits sans reporter le marquage sur chaque morceau fait perdre la traçabilité. La chute restante doit elle aussi rester identifiée, sinon elle ne pourra plus être utilisée pour une commande exigeant un certificat.</div>"
      },
      {
       "titre": "Choisir un matériau à l'atelier",
       "contenu": "<p>Le choix du matériau revient au bureau d'études, mais le technicien intervient souvent : proposer une nuance équivalente disponible en stock, signaler une difficulté de fabrication, choisir le matériau d'un montage d'usinage ou d'une cale. Les critères à croiser sont :</p>\n<ul>\n<li>les exigences fonctionnelles : résistance, dureté, frottement, corrosion, masse ;</li>\n<li>les procédés envisagés : usinage, soudage, traitement thermique, polissage pour un moule ;</li>\n<li>la disponibilité et les formes commerciales (rond, plat, tube, bloc rectifié, demi-produit en plaque) ;</li>\n<li>le coût de la matière et le coût de l'usinage.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> remplacer un matériau, même « équivalent », n'est jamais une décision de l'atelier seul. Toute substitution se fait avec l'accord écrit du client ou du bureau d'études, et se trace dans le dossier de fabrication.</div>"
      }
     ],
     "points_cles": [
      "La NF EN 10027 prévoit une désignation symbolique et un numéro matière 1.xxxx",
      "Aciers faiblement alliés : multiplicateurs 4, 10, 100 ou 1 000 selon l'élément",
      "Aciers fortement alliés : préfixe X et teneurs réelles",
      "Les aciers à outils (1.2379, 1.2311, 1.2344) sont choisis pour l'usure, la ténacité ou la tenue à chaud",
      "Les matériaux se rangent dans les groupes ISO P, M, K, N, S, H pour le choix des outils",
      "Dureté, ductilité, écrouissage et conductivité thermique déterminent l'usinabilité",
      "Le certificat 3.1 donne des résultats d'essais spécifiques au lot livré",
      "Le numéro de coulée doit suivre la matière jusqu'à la pièce finie",
      "Toute substitution de matériau exige un accord écrit"
     ],
     "lexique": [
      {
       "terme": "Numéro matière",
       "def": "Identifiant numérique européen d'un acier, de la forme 1.xxxx."
      },
      {
       "terme": "Acier à outils",
       "def": "Acier allié destiné aux outils et outillages, choisi pour sa dureté, son usure et sa ténacité."
      },
      {
       "terme": "Usinabilité",
       "def": "Aptitude d'un matériau à être usiné : durée de vie d'outil, efforts, état de surface, copeaux."
      },
      {
       "terme": "Groupe ISO",
       "def": "Classe de matériaux (P, M, K, N, S, H) utilisée pour choisir outils et conditions de coupe."
      },
      {
       "terme": "Écrouissage",
       "def": "Durcissement d'un métal sous l'effet d'une déformation plastique."
      },
      {
       "terme": "Arête rapportée",
       "def": "Dépôt de matière soudée sur l'arête de coupe, qui dégrade l'état de surface."
      },
      {
       "terme": "Certificat 3.1",
       "def": "Document de contrôle donnant les résultats d'essais réalisés sur le lot livré."
      },
      {
       "terme": "Numéro de coulée",
       "def": "Identifiant du lot d'élaboration du métal, base de la traçabilité matière."
      },
      {
       "terme": "État métallurgique",
       "def": "Suffixe indiquant le traitement subi par un alliage, par exemple T6 pour l'aluminium."
      }
     ]
    },
    {
     "id": "btrpm-traitements-thermiques-surface",
     "titre": "Traitements thermiques et traitements de surface",
     "niveau": "Tle",
     "duree": 40,
     "objectifs": [
      "Expliquer le principe de la trempe et du revenu d'un acier",
      "Distinguer traitements dans la masse, traitements superficiels et revêtements",
      "Lire et vérifier une indication de dureté (HRC, HB, HV)",
      "Placer un traitement dans une gamme de fabrication en tenant compte des déformations",
      "Identifier les contraintes réglementaires et environnementales liées aux traitements"
     ],
     "sections": [
      {
       "titre": "Pourquoi traiter une pièce",
       "contenu": "<p>Un même acier peut être tendre et facile à usiner, ou dur et résistant à l'usure, selon le <strong>traitement thermique</strong> qu'il a subi. On traite une pièce pour obtenir une propriété que l'état de livraison ne donne pas : dureté d'un poinçon, résistance d'un arbre, tenue à la fatigue d'un engrenage, résistance à la corrosion ou au frottement d'une surface.</p>\n<p>On distingue trois familles :</p>\n<ul>\n<li>les <strong>traitements dans la masse</strong> : recuits, trempe, revenu ;</li>\n<li>les <strong>traitements superficiels</strong>, qui ne modifient qu'une couche : trempe par induction, cémentation, nitruration ;</li>\n<li>les <strong>revêtements et traitements de surface</strong> : dépôts PVD, chromage, nickelage, zingage, anodisation, phosphatation, noircissement.</li>\n</ul>\n<p>Le cours de seconde a présenté ces familles. Ce chapitre explique leurs mécanismes et, surtout, leurs conséquences pour la fabrication : déformations, surépaisseurs, ordre des opérations et contrôle.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le traitement thermique se décide sur le dessin (nuance, dureté, profondeur), mais il se prépare dans la gamme : ce qui est usiné avant ou après le traitement change complètement la façon de travailler.</div>"
      },
      {
       "titre": "Trempe et revenu des aciers",
       "contenu": "<p>La <strong>trempe</strong> comprend deux étapes : l'<strong>austénitisation</strong>, chauffage au-dessus d'une température critique (de l'ordre de 820 à 860 °C pour un C45, de l'ordre de 1 000 à 1 080 °C pour un acier à outils 1.2379, selon les fiches des fabricants) et maintien pour transformer la structure ; puis un <strong>refroidissement rapide</strong> (eau, huile, polymère, gaz sous pression en four sous vide). La structure obtenue, la <strong>martensite</strong>, est très dure mais fragile et chargée de contraintes.</p>\n<p>Le <strong>revenu</strong> suit toujours la trempe : on réchauffe la pièce à une température inférieure (de 150 à 650 °C environ selon le but recherché) pour diminuer la fragilité et les contraintes, au prix d'une petite perte de dureté. Plus le revenu est chaud, plus la pièce devient tenace et moins elle est dure. Les aciers à outils fortement alliés reçoivent souvent deux ou trois revenus successifs.</p>\n<p>L'aptitude d'un acier à prendre la trempe dépend de sa teneur en carbone (dureté maximale atteignable) et de ses éléments d'alliage (<strong>trempabilité</strong> : profondeur trempée et possibilité de refroidir moins brutalement). Un acier à moins de 0,2 % de carbone environ ne durcit presque pas par trempe directe.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les angles vifs, les variations brutales d'épaisseur et les trous proches du bord favorisent les tapures (fissures) de trempe. Un rayon de raccordement prévu au dessin ne doit jamais être remplacé par un angle vif « plus simple à usiner » sur une pièce destinée à être trempée.</div>"
      },
      {
       "titre": "Recuits et traitements de préparation",
       "contenu": "<p>Les recuits ramènent l'acier vers un état d'équilibre :</p>\n<table>\n<thead><tr><th>Traitement</th><th>But</th><th>Moment dans la fabrication</th></tr></thead>\n<tbody>\n<tr><td>Recuit d'adoucissement</td><td>Abaisser la dureté pour faciliter l'usinage ou le formage</td><td>Avant usinage, souvent fait par l'aciériste</td></tr>\n<tr><td>Normalisation</td><td>Homogénéiser et affiner la structure</td><td>Après forgeage ou soudage</td></tr>\n<tr><td>Recuit de détente (détensionnement)</td><td>Réduire les contraintes résiduelles sans changer la structure</td><td>Après ébauche, avant trempe et finition</td></tr>\n</tbody>\n</table>\n<p>Le <strong>détensionnement</strong> est très utilisé en outillage : une plaque de matrice fortement ébauchée est détensionnée, puis demi-finie, puis trempée. Les déformations sont ainsi réparties sur plusieurs étapes et restent rattrapables à la finition.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la plupart des ateliers de mécanique sous-traitent les traitements thermiques à un spécialiste. Le bon de commande précise la nuance, le traitement, la dureté visée avec sa tolérance (par exemple 58-60 HRC) et, si nécessaire, la profondeur de couche. Le traiteur renvoie les pièces avec un certificat indiquant le cycle et les duretés mesurées.</div>"
      },
      {
       "titre": "Traitements superficiels",
       "contenu": "<p>Beaucoup de pièces doivent avoir une surface dure et un cœur tenace : engrenages, axes, colonnes de guidage, cames. On utilise alors un traitement superficiel :</p>\n<table>\n<thead><tr><th>Traitement</th><th>Principe</th><th>Ordre de grandeur de profondeur</th><th>Remarque</th></tr></thead>\n<tbody>\n<tr><td>Trempe superficielle par induction</td><td>Chauffage rapide de la surface par induction puis refroidissement</td><td>Quelques dixièmes à quelques millimètres</td><td>Aciers à 0,35-0,55 % C (C45, 42CrMo4)</td></tr>\n<tr><td>Cémentation</td><td>Enrichissement de la surface en carbone vers 900 °C, puis trempe</td><td>Quelques dixièmes à 2 mm environ</td><td>Aciers à bas carbone (16MnCr5), déformations à prévoir</td></tr>\n<tr><td>Nitruration</td><td>Diffusion d'azote vers 500-580 °C, sans trempe</td><td>Couche de quelques dixièmes de millimètre au plus</td><td>Très peu de déformation, aciers alliés</td></tr>\n</tbody>\n</table>\n<p>Les zones à ne pas traiter (un taraudage, une surface à reprendre ensuite) sont protégées par un vernis ou une pâte d'épargne, ou laissées avec une surépaisseur qui sera enlevée après traitement. Ces zones figurent sur le dessin par un trait mixte fort le long de la surface concernée, avec une note.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire une indication « cémenté trempé, Eht 0,8 +0,3 ; 58-62 HRC ». 1) Eht est la profondeur conventionnelle de cémentation (selon ISO 18203), mesurée jusqu'à une dureté seuil, ici attendue entre 0,8 et 1,1 mm. 2) La dureté de surface doit être entre 58 et 62 HRC. 3) Si la pièce est rectifiée après traitement, la surépaisseur enlevée réduit la couche : prévoir une profondeur de cémentation commandée plus forte, en accord avec le bureau d'études.</div>"
      },
      {
       "titre": "Mesurer la dureté",
       "contenu": "<p>La <strong>dureté</strong> est la résistance d'un matériau à la pénétration. Trois méthodes principales sont utilisées :</p>\n<ul>\n<li><strong>Rockwell C (HRC)</strong>, ISO 6508 : un cône en diamant pénètre sous charge ; la lecture est directe. Méthode d'atelier pour les aciers trempés (de l'ordre de 20 à 70 HRC).</li>\n<li><strong>Brinell (HB, plus exactement HBW)</strong>, ISO 6506 : une bille en carbure laisse une empreinte dont on mesure le diamètre. Adapté aux matériaux tendres ou hétérogènes (aciers recuits, fontes).</li>\n<li><strong>Vickers (HV)</strong>, ISO 6507 : une pyramide en diamant ; on mesure les diagonales de l'empreinte. Couvre toutes les duretés, utilisé en laboratoire et pour les couches minces.</li>\n</ul>\n<p>Les correspondances entre échelles (tables de conversion de la norme ISO 18265) sont approximatives : on mesure de préférence dans l'échelle demandée par le dessin.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la mesure de dureté laisse une empreinte. Elle se fait sur une zone non fonctionnelle ou sur une éprouvette témoin traitée avec la pièce. Mesurer sur une portée de roulement ou une empreinte polie de moule revient à abîmer la pièce.</div>"
      },
      {
       "titre": "Revêtements et traitements de surface",
       "contenu": "<p>Les revêtements protègent contre la corrosion, réduisent le frottement ou améliorent l'aspect :</p>\n<table>\n<thead><tr><th>Traitement</th><th>Matériau support</th><th>Effet principal</th><th>Épaisseur indicative</th></tr></thead>\n<tbody>\n<tr><td>Zingage électrolytique</td><td>Acier</td><td>Protection anticorrosion</td><td>5 à 15 µm</td></tr>\n<tr><td>Nickelage chimique</td><td>Acier, aluminium</td><td>Corrosion, usure, dépôt régulier même dans les creux</td><td>10 à 50 µm</td></tr>\n<tr><td>Chromage dur</td><td>Acier</td><td>Dureté, frottement (tiges de vérins)</td><td>20 à 200 µm</td></tr>\n<tr><td>Anodisation (oxydation anodique)</td><td>Aluminium</td><td>Corrosion, aspect, dureté de surface (anodisation dure)</td><td>5 à 25 µm, plus en anodisation dure</td></tr>\n<tr><td>Dépôts PVD (TiN, TiAlN, CrN)</td><td>Outils, poinçons, empreintes</td><td>Dureté, frottement, anti-collage</td><td>1 à 5 µm</td></tr>\n<tr><td>Brunissage, noircissement</td><td>Acier</td><td>Aspect, faible protection</td><td>Couche très mince</td></tr>\n</tbody>\n</table>\n<p>Un revêtement épais modifie les cotes : un alésage H7 qui doit être zingué ou anodisé doit être usiné en tenant compte de l'épaisseur déposée, ou protégé par un bouchon. L'anodisation transforme une partie de l'aluminium en oxyde : environ la moitié de l'épaisseur pénètre dans la pièce et l'autre moitié se forme à l'extérieur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le chromage dur utilise du chrome hexavalent, substance soumise à autorisation dans le règlement REACH. Les traiteurs doivent disposer d'une autorisation et beaucoup de donneurs d'ordres recherchent des solutions de remplacement. Les spécifications évoluent : il faut lire la spécification client en vigueur.</div>"
      },
      {
       "titre": "Placer le traitement dans la gamme",
       "contenu": "<p>Un traitement thermique déforme la pièce et modifie ses dimensions (changement de volume lors de la transformation martensitique, libération des contraintes). Après traitement, une pièce trempée ne s'usine plus avec les outils conventionnels ; on la rectifie, on l'électroérode ou on l'usine avec des outils pour matériaux durs (groupe ISO H).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> gamme type d'un poinçon de découpe en 1.2379. 1) Débit et usinage d'ébauche à l'état recuit, surépaisseur de 0,3 à 0,5 mm environ sur les surfaces de précision (à ajuster selon la taille et l'expérience). 2) Perçages, taraudages et formes non critiques terminés avant traitement. 3) Détensionnement si l'ébauche a enlevé beaucoup de matière. 4) Trempe sous vide et revenus pour viser la dureté du dessin. 5) Contrôle de dureté sur une zone non fonctionnelle. 6) Rectification des faces de référence. 7) Finition du profil par électroérosion à fil ou rectification de profil. 8) Revêtement PVD éventuel, puis contrôle final.</div>\n<p>Les taraudages, en particulier, se réalisent toujours avant la trempe : un taraud ne coupe pas un acier à 60 HRC. Si un taraudage doit rester tendre, on le protège pendant une cémentation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> avant traitement, on fait tout ce qui est difficile après (perçages, taraudages, formes) en laissant de la matière sur ce qui doit être précis ; après traitement, on finit uniquement les surfaces de précision par des procédés adaptés aux matériaux durs.</div>"
      }
     ],
     "points_cles": [
      "La trempe associe austénitisation et refroidissement rapide pour former de la martensite",
      "Le revenu suit toujours la trempe pour réduire fragilité et contraintes",
      "Le détensionnement après ébauche limite les déformations ultérieures",
      "Induction, cémentation et nitruration durcissent la surface en gardant un cœur tenace",
      "HRC, HB et HV sont trois échelles de dureté à ne pas confondre",
      "Un revêtement épais modifie les cotes et doit être pris en compte à l'usinage",
      "Taraudages et perçages se réalisent avant la trempe",
      "Après trempe, on finit par rectification, électroérosion ou usinage dur",
      "Le chrome hexavalent est soumis à autorisation dans REACH"
     ],
     "lexique": [
      {
       "terme": "Austénitisation",
       "def": "Chauffage d'un acier au-dessus de sa température critique pour obtenir une structure austénitique avant trempe."
      },
      {
       "terme": "Martensite",
       "def": "Structure très dure et fragile obtenue par refroidissement rapide de l'austénite."
      },
      {
       "terme": "Revenu",
       "def": "Réchauffage après trempe à une température modérée pour améliorer la ténacité."
      },
      {
       "terme": "Trempabilité",
       "def": "Aptitude d'un acier à durcir en profondeur lors de la trempe."
      },
      {
       "terme": "Cémentation",
       "def": "Enrichissement superficiel en carbone suivi d'une trempe pour durcir la surface."
      },
      {
       "terme": "Nitruration",
       "def": "Diffusion d'azote en surface à température modérée, donnant une couche dure avec peu de déformation."
      },
      {
       "terme": "Tapure",
       "def": "Fissure apparue pendant ou après la trempe sous l'effet des contraintes."
      },
      {
       "terme": "PVD",
       "def": "Dépôt physique en phase vapeur d'une couche mince et dure, comme le nitrure de titane."
      },
      {
       "terme": "Anodisation",
       "def": "Oxydation électrolytique contrôlée de la surface de l'aluminium."
      }
     ]
    },
    {
     "id": "btrpm-coupe-outils",
     "titre": "Mécanisme de la coupe et outils coupants",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Expliquer la formation du copeau et la répartition de la chaleur",
      "Identifier les angles de l'outil et leur influence sur la coupe",
      "Décoder la désignation ISO d'une plaquette et d'un porte-outil",
      "Choisir un matériau d'outil et un revêtement adaptés",
      "Diagnostiquer un mode d'usure et proposer une correction"
     ],
     "sections": [
      {
       "titre": "Comment se forme un copeau",
       "contenu": "<p>Usiner, c'est cisailler la matière. Sous l'avance de l'outil, le métal est fortement comprimé devant l'arête puis se déforme plastiquement dans une zone étroite appelée <strong>zone de cisaillement primaire</strong>. Le copeau formé glisse ensuite sur la <strong>face de coupe</strong> de l'outil en frottant (zone secondaire), pendant que la surface usinée frotte légèrement sur la <strong>face de dépouille</strong> (zone tertiaire).</p>\n<p>Presque toute l'énergie de coupe se transforme en chaleur. La plus grande partie part avec le copeau, une partie entre dans l'outil, une petite partie dans la pièce. À grande vitesse, l'interface outil-copeau peut dépasser 800 °C en usinage d'acier : c'est ce qui limite la vitesse de coupe admissible pour un matériau d'outil donné.</p>\n<p>La forme du copeau renseigne sur la coupe :</p>\n<table>\n<thead><tr><th>Copeau observé</th><th>Interprétation probable</th></tr></thead>\n<tbody>\n<tr><td>Long, filant, s'enroulant autour de la pièce</td><td>Avance trop faible ou brise-copeaux inadapté</td></tr>\n<tr><td>Hélicoïdal court, en « 6 » ou en « 9 »</td><td>Fragmentation correcte</td></tr>\n<tr><td>Très fragmenté, en éclats bleuis, bruit fort</td><td>Avance ou profondeur trop forte, échauffement</td></tr>\n<tr><td>Copeau collé, surface arrachée</td><td>Vitesse trop basse, arête rapportée</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'avance et la géométrie du brise-copeaux commandent la fragmentation du copeau ; la vitesse de coupe commande surtout la température et donc l'usure.</div>"
      },
      {
       "titre": "Les angles de l'outil",
       "contenu": "<p>La géométrie d'un outil se décrit par des angles définis dans la norme ISO 3002. Les principaux sont :</p>\n<table>\n<thead><tr><th>Angle</th><th>Symbole</th><th>Influence</th></tr></thead>\n<tbody>\n<tr><td>Angle de coupe</td><td>γ (gamma)</td><td>Positif : coupe facile, efforts réduits, arête plus fragile. Négatif : arête robuste, efforts plus élevés</td></tr>\n<tr><td>Angle de dépouille</td><td>α (alpha)</td><td>Évite le talonnage ; trop grand, il affaiblit l'arête</td></tr>\n<tr><td>Angle de direction d'arête</td><td>κ<sub>r</sub> (kappa r)</td><td>Répartit l'effort ; κ<sub>r</sub> = 90° pour dresser un épaulement, κ<sub>r</sub> plus faible pour amincir le copeau et réduire les chocs</td></tr>\n<tr><td>Angle d'inclinaison d'arête</td><td>λ<sub>s</sub> (lambda s)</td><td>Oriente l'évacuation du copeau</td></tr>\n<tr><td>Rayon de bec</td><td>r<sub>ε</sub></td><td>Grand : arête solide, meilleur état de surface à avance égale, mais plus d'efforts radiaux et de vibrations</td></tr>\n</tbody>\n</table>\n<p>Pour l'aluminium (groupe N), on choisit des arêtes très positives et vives, souvent polies. Pour l'usinage d'acier trempé (groupe H), on choisit des arêtes négatives et chanfreinées, très robustes.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les plaquettes modernes portent une géométrie de face de coupe complexe (brise-copeaux) désignée par un code fabricant (par exemple -PM, -MF, -MR) qui indique le matériau visé et le domaine : finition, semi-finition, ébauche. On consulte le catalogue pour connaître la plage d'avance et de profondeur de chaque brise-copeaux.</div>"
      },
      {
       "titre": "La désignation ISO des plaquettes et porte-outils",
       "contenu": "<p>Les plaquettes amovibles de tournage se désignent selon la norme ISO 1832. Prenons CNMG 12 04 08 :</p>\n<table>\n<thead><tr><th>Position</th><th>Code</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>C</td><td>Forme : losange à 80°</td></tr>\n<tr><td>2</td><td>N</td><td>Angle de dépouille de la plaquette : 0° (plaquette négative)</td></tr>\n<tr><td>3</td><td>M</td><td>Classe de tolérance de la plaquette</td></tr>\n<tr><td>4</td><td>G</td><td>Type de fixation et de brise-copeaux : trou central, brise-copeaux sur les deux faces</td></tr>\n<tr><td>5</td><td>12</td><td>Longueur d'arête : environ 12 mm</td></tr>\n<tr><td>6</td><td>04</td><td>Épaisseur : 4,76 mm</td></tr>\n<tr><td>7</td><td>08</td><td>Rayon de bec : 0,8 mm</td></tr>\n</tbody>\n</table>\n<p>Les formes courantes sont : C (losange 80°), D (losange 55°), V (losange 35°), W (trigone 80°), T (triangle), S (carré), R (ronde). Plus l'angle de pointe est grand, plus l'arête est robuste ; plus il est petit, plus l'outil peut copier des profils.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir une plaquette pour finir un profil comportant une gorge en V à 60°. 1) Identifier la contrainte de forme : l'outil doit entrer dans un creux de 60°, il faut donc un angle de pointe nettement inférieur, avec une marge pour la dépouille latérale. 2) Éliminer C (80°) et D (55°, trop juste une fois l'outil incliné). 3) Retenir V (35°). 4) Choisir un petit rayon de bec (0,2 ou 0,4 mm) pour respecter le fond de gorge. 5) Choisir un brise-copeaux de finition adapté au groupe ISO du matériau.</div>\n<p>Les porte-outils ont aussi une désignation ISO (ISO 5608) qui précise le système de fixation, la forme de plaquette, l'angle κ<sub>r</sub>, le sens (droite R, gauche L ou neutre N) et la section du corps.</p>"
      },
      {
       "titre": "Matériaux d'outils et revêtements",
       "contenu": "<p>Un matériau d'outil doit être à la fois <strong>dur</strong> (pour résister à l'usure), <strong>tenace</strong> (pour résister aux chocs) et stable à chaud. Aucun ne réunit toutes ces qualités : on choisit un compromis.</p>\n<table>\n<thead><tr><th>Matériau</th><th>Dureté à chaud</th><th>Ténacité</th><th>Emplois</th></tr></thead>\n<tbody>\n<tr><td>Acier rapide (ARS, HSS)</td><td>Faible</td><td>Très bonne</td><td>Forets, tarauds, outils de forme, petites séries</td></tr>\n<tr><td>Carbure de tungstène revêtu</td><td>Bonne</td><td>Bonne</td><td>La majorité des plaquettes et fraises</td></tr>\n<tr><td>Cermet</td><td>Bonne</td><td>Moyenne</td><td>Finition des aciers, bel état de surface</td></tr>\n<tr><td>Céramique</td><td>Très bonne</td><td>Faible</td><td>Fontes, superalliages, coupe à sec</td></tr>\n<tr><td>Nitrure de bore cubique (CBN)</td><td>Excellente</td><td>Faible</td><td>Aciers trempés, fontes dures</td></tr>\n<tr><td>Diamant polycristallin (PCD)</td><td>Excellente</td><td>Faible</td><td>Aluminium, composites, non ferreux ; jamais sur acier</td></tr>\n</tbody>\n</table>\n<p>Les carbures sont revêtus par <strong>CVD</strong> (dépôt chimique, couches épaisses d'alumine et de carbonitrure, adaptées au tournage d'acier) ou par <strong>PVD</strong> (couches minces, arêtes plus vives, adaptées au fraisage, aux inox et aux petites avances). Chaque fabricant présente ses nuances sur une échelle par groupe ISO, par exemple P15 (plus dure, finition) à P35 (plus tenace, ébauche et coupe interrompue).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le diamant réagit avec le fer à haute température : un outil PCD utilisé sur de l'acier s'use en quelques secondes. Inversement, une nuance très dure choisie pour une coupe interrompue (rainure, trous) s'écaille. Le choix de la nuance dépend autant des conditions d'usinage que du matériau.</div>"
      },
      {
       "titre": "Les modes d'usure et leurs remèdes",
       "contenu": "<p>Un outil s'use toujours ; l'objectif est que l'usure soit <strong>progressive et prévisible</strong>. L'observation de l'arête à la loupe permet d'identifier le mode d'usure :</p>\n<table>\n<thead><tr><th>Mode d'usure</th><th>Aspect</th><th>Causes probables</th><th>Remèdes</th></tr></thead>\n<tbody>\n<tr><td>Usure en dépouille</td><td>Bande régulière sur la face de dépouille</td><td>Usure normale ; trop rapide si Vc excessive</td><td>Réduire Vc, nuance plus dure</td></tr>\n<tr><td>Usure en cratère</td><td>Creux sur la face de coupe</td><td>Température élevée, diffusion</td><td>Réduire Vc, revêtement alumine (CVD)</td></tr>\n<tr><td>Entaille</td><td>Encoche à la limite de la profondeur de passe</td><td>Croûte, matériau écrouissable</td><td>Varier la profondeur, κ<sub>r</sub> plus faible</td></tr>\n<tr><td>Arête rapportée</td><td>Matière collée sur l'arête</td><td>Vc trop basse, matériau collant</td><td>Augmenter Vc, arête plus positive, lubrification</td></tr>\n<tr><td>Déformation plastique</td><td>Bec affaissé</td><td>Température et effort trop élevés</td><td>Réduire Vc et avance, nuance plus dure</td></tr>\n<tr><td>Écaillage, rupture</td><td>Éclats sur l'arête</td><td>Chocs, vibrations, nuance trop dure</td><td>Nuance plus tenace, arête renforcée, rigidité</td></tr>\n<tr><td>Fissures thermiques</td><td>Fissures perpendiculaires à l'arête</td><td>Chocs thermiques en coupe interrompue</td><td>Supprimer la lubrification irrégulière ou arroser abondamment</td></tr>\n</tbody>\n</table>\n<p>Le critère d'usure le plus utilisé est la largeur d'usure en dépouille <strong>VB</strong> : on change l'arête lorsque VB atteint une valeur fixée (souvent de l'ordre de 0,2 à 0,3 mm en finition et davantage en ébauche, selon les règles de l'entreprise).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> diagnostic d'une dégradation de l'état de surface en tournage d'inox. 1) Observer le copeau : il est collé et déchiré. 2) Observer l'arête : présence de matière collée. 3) Conclure à une arête rapportée. 4) Agir sur la cause principale : augmenter la vitesse de coupe de 15 à 20 %, vérifier l'arrosage. 5) Si le défaut persiste, choisir une géométrie plus positive et une nuance PVD pour inox. 6) Noter la modification et son effet dans le dossier de réglage.</div>"
      },
      {
       "titre": "Outils de fraisage, de perçage et d'alésage",
       "contenu": "<p>En fraisage, on rencontre des <strong>fraises à plaquettes</strong> (surfaçage, fraises à épaulement, fraises à copier à plaquettes rondes) et des <strong>fraises monobloc carbure</strong> (deux à six dents, hélice variable anti-vibrations, bout hémisphérique ou torique). Le nombre de dents Z conditionne la vitesse d'avance et l'évacuation des copeaux : peu de dents pour l'aluminium et les poches profondes, beaucoup de dents pour la finition des aciers.</p>\n<p>En perçage, le foret carbure monobloc avec arrosage par le centre a remplacé le foret ARS en production. Pour les diamètres importants, on utilise des forets à plaquettes. Un alésage précis (classe 7 ou meilleure) s'obtient par un <strong>alésoir</strong> ou un outil d'alésage réglable, après un perçage laissant une faible surépaisseur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le diamètre d'un trou percé au foret n'est pas assez précis pour un ajustement. Un trou H7 se prépare par perçage puis se termine par alésage ou par interpolation hélicoïdale à la fraise sur machine CN.</div>"
      }
     ],
     "points_cles": [
      "Le copeau se forme par cisaillement ; la chaleur part surtout avec le copeau",
      "L'avance et le brise-copeaux commandent la fragmentation, la vitesse commande la température",
      "Un angle de coupe positif réduit les efforts, un angle négatif renforce l'arête",
      "CNMG 12 04 08 : losange 80°, négative, arête 12 mm, épaisseur 4,76 mm, rayon 0,8 mm",
      "Carbure revêtu, cermet, céramique, CBN et PCD répondent à des besoins différents",
      "Le PCD ne s'utilise jamais sur l'acier",
      "Chaque mode d'usure a une cause et un remède identifiables",
      "La largeur d'usure en dépouille VB sert de critère de changement d'arête",
      "Un trou H7 se finit par alésage, jamais par perçage seul"
     ],
     "lexique": [
      {
       "terme": "Face de coupe",
       "def": "Face de l'outil sur laquelle glisse le copeau."
      },
      {
       "terme": "Face de dépouille",
       "def": "Face de l'outil tournée vers la surface usinée."
      },
      {
       "terme": "Angle de coupe γ",
       "def": "Angle entre la face de coupe et la normale à la surface usinée, positif ou négatif."
      },
      {
       "terme": "Angle de direction d'arête κr",
       "def": "Angle entre l'arête de coupe et la direction d'avance."
      },
      {
       "terme": "Rayon de bec",
       "def": "Rayon qui raccorde les deux arêtes d'une plaquette à sa pointe."
      },
      {
       "terme": "Brise-copeaux",
       "def": "Forme de la face de coupe qui courbe et fragmente le copeau."
      },
      {
       "terme": "Nuance",
       "def": "Combinaison d'un substrat et d'un revêtement, adaptée à un groupe de matériaux et à un domaine d'emploi."
      },
      {
       "terme": "Usure en cratère",
       "def": "Creusement de la face de coupe dû à la température et à la diffusion."
      },
      {
       "terme": "VB",
       "def": "Largeur de la bande d'usure sur la face de dépouille, critère usuel de fin de vie d'arête."
      }
     ]
    },
    {
     "id": "btrpm-conditions-coupe",
     "titre": "Conditions de coupe : puissance, durée de vie et temps d'usinage",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Déterminer des conditions de coupe complètes à partir d'un catalogue d'outils",
      "Calculer l'effort et la puissance de coupe et les comparer à la capacité de la machine",
      "Utiliser le modèle de Taylor pour raisonner sur la durée de vie d'un outil",
      "Prévoir la rugosité théorique en tournage",
      "Calculer un temps de coupe en tournage, en perçage et en fraisage"
     ],
     "sections": [
      {
       "titre": "Des paramètres de base aux conditions complètes",
       "contenu": "<p>Le cours de seconde a établi les relations de base : fréquence de rotation N = 1 000 × V<sub>c</sub> / (π × D) et vitesse d'avance V<sub>f</sub> = f × N en tournage ou V<sub>f</sub> = f<sub>z</sub> × Z × N en fraisage. Le technicien de bac pro doit aller plus loin et définir un <strong>jeu de conditions de coupe</strong> cohérent :</p>\n<ul>\n<li>la <strong>vitesse de coupe</strong> V<sub>c</sub> (m/min), choisie selon le couple outil-matière ;</li>\n<li>l'<strong>avance</strong> f (mm/tr) ou l'<strong>avance par dent</strong> f<sub>z</sub> (mm/dent) ;</li>\n<li>la <strong>profondeur de passe</strong> a<sub>p</sub> (mm) et, en fraisage, l'<strong>engagement radial</strong> a<sub>e</sub> (mm) ;</li>\n<li>la stratégie de lubrification ;</li>\n<li>et la vérification de la <strong>puissance</strong>, du <strong>couple</strong>, de l'<strong>état de surface</strong> et de la <strong>durée de vie</strong>.</li>\n</ul>\n<p>Le choix suit un ordre logique : on fixe d'abord a<sub>p</sub> (imposé par la surépaisseur et la rigidité), puis f (imposé par l'état de surface en finition, par la robustesse de l'arête en ébauche), enfin V<sub>c</sub> (imposée par la durée de vie souhaitée).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> pour enlever de la matière vite, on augmente d'abord la profondeur de passe, puis l'avance, et seulement en dernier la vitesse de coupe, qui use le plus l'outil.</div>"
      },
      {
       "titre": "Effort et puissance de coupe",
       "contenu": "<p>L'<strong>effort de coupe tangentiel</strong> F<sub>c</sub> se calcule à partir de la <strong>pression spécifique de coupe</strong> K<sub>c</sub> (en N/mm²), donnée dans les catalogues pour chaque matériau : F<sub>c</sub> = K<sub>c</sub> × a<sub>p</sub> × f. Pour un acier non allié, K<sub>c</sub> est de l'ordre de 1 500 à 2 000 N/mm² ; pour un alliage d'aluminium, de l'ordre de 600 à 800 N/mm². K<sub>c</sub> augmente quand l'épaisseur du copeau diminue.</p>\n<p>La <strong>puissance de coupe</strong> vaut P<sub>c</sub> = F<sub>c</sub> × V<sub>c</sub> / 60, avec F<sub>c</sub> en N et V<sub>c</sub> en m/min, ce qui donne des watts. La machine doit fournir à la broche une puissance supérieure : P<sub>moteur</sub> = P<sub>c</sub> / η, où η est le <strong>rendement</strong> de la chaîne de transmission (souvent pris entre 0,7 et 0,85).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier une ébauche en tournage. Données : acier C45, K<sub>c</sub> = 1 900 N/mm², a<sub>p</sub> = 4 mm, f = 0,3 mm/tr, V<sub>c</sub> = 220 m/min, rendement 0,8, moteur de broche 15 kW. 1) F<sub>c</sub> = 1 900 × 4 × 0,3 = 2 280 N. 2) P<sub>c</sub> = 2 280 × 220 / 60 = 8 360 W ≈ 8,4 kW. 3) P<sub>moteur</sub> = 8,4 / 0,8 = 10,5 kW. 4) Comparer : 10,5 kW &lt; 15 kW. 5) Conclure : la passe est possible, avec une marge d'environ 30 %.</div>\n<p>Il faut aussi vérifier le <strong>couple</strong> aux faibles vitesses de rotation : une broche n'atteint sa puissance nominale qu'à partir d'une certaine fréquence de rotation. Sur un gros diamètre tourné lentement, c'est le couple disponible, lu sur la courbe de puissance-couple de la machine, qui limite l'ébauche.</p>"
      },
      {
       "titre": "Débit de copeaux et productivité",
       "contenu": "<p>Le <strong>débit de copeaux</strong> Q mesure le volume de matière enlevé par minute. C'est l'indicateur de productivité de l'ébauche.</p>\n<ul>\n<li>En tournage : Q = V<sub>c</sub> × a<sub>p</sub> × f (en cm³/min si V<sub>c</sub> est en m/min, a<sub>p</sub> et f en mm).</li>\n<li>En fraisage : Q = a<sub>p</sub> × a<sub>e</sub> × V<sub>f</sub> / 1 000 (en cm³/min, avec a<sub>p</sub>, a<sub>e</sub> en mm et V<sub>f</sub> en mm/min).</li>\n</ul>\n<p>Dans l'exemple précédent, Q = 220 × 4 × 0,3 = 264 cm³/min. Les catalogues donnent souvent la puissance nécessaire par cm³/min de copeaux : c'est une autre façon d'estimer P<sub>c</sub>.</p>\n<p>En fraisage, l'engagement radial modifie l'épaisseur réelle du copeau. Quand a<sub>e</sub> est faible devant le diamètre de la fraise (fraisage trochoïdal, finition en balayage), l'<strong>épaisseur moyenne du copeau</strong> h<sub>m</sub> devient bien plus petite que f<sub>z</sub>. On augmente alors f<sub>z</sub> pour retrouver une épaisseur de copeau suffisante, sous peine de frotter et d'user l'outil plus vite.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les stratégies d'ébauche dynamiques des logiciels de FAO (engagement radial faible et constant, grande profondeur axiale, avance élevée) exploitent toute la longueur d'arête des fraises carbure. Elles augmentent le débit de copeaux tout en réduisant les efforts et la chaleur, à condition que la machine suive les fortes vitesses d'avance.</div>"
      },
      {
       "titre": "Durée de vie de l'outil : le modèle de Taylor",
       "contenu": "<p>La durée de vie T d'une arête (temps de coupe effectif jusqu'au critère d'usure) diminue fortement quand la vitesse de coupe augmente. Le <strong>modèle de Taylor</strong> la décrit par la relation T = C<sub>v</sub> × V<sub>c</sub><sup>n</sup>, où n est un exposant négatif propre au couple outil-matière (de l'ordre de −3 à −5 pour les carbures sur acier) et C<sub>v</sub> une constante.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> estimer l'effet d'une hausse de vitesse. Une plaquette dure 15 min à V<sub>c</sub> = 200 m/min ; on prend n = −4. On veut passer à 240 m/min. 1) Écrire le rapport : T<sub>2</sub> / T<sub>1</sub> = (V<sub>2</sub> / V<sub>1</sub>)<sup>n</sup>. 2) Calculer : (240 / 200)<sup>−4</sup> = 1,2<sup>−4</sup> ≈ 0,48. 3) T<sub>2</sub> ≈ 15 × 0,48 ≈ 7,2 min. 4) Conclure : 20 % de vitesse en plus divise la durée de vie par deux environ. Le gain de temps de coupe doit être comparé au coût des arêtes et des arrêts pour changement d'outil.</div>\n<p>Ce raisonnement explique pourquoi les catalogues recommandent une plage de vitesse et non une valeur unique : en production de série, on cherche le meilleur compromis entre temps de cycle et coût d'outil ; en pièce unitaire sur un outillage, on privilégie la sécurité de l'arête pour ne pas risquer un changement d'outil au milieu d'une surface.</p>"
      },
      {
       "titre": "État de surface obtenu",
       "contenu": "<p>En tournage, la plaquette laisse des sillons dont la hauteur dépend de l'avance et du rayon de bec. La <strong>rugosité théorique</strong> est donnée approximativement par R<sub>t</sub> ≈ f² / (8 × r<sub>ε</sub>), avec f et r<sub>ε</sub> en mm ; on en déduit une estimation de R<sub>a</sub> ≈ R<sub>t</sub> / 4 environ.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir l'avance de finition pour obtenir R<sub>a</sub> 1,6 µm avec un rayon de bec de 0,8 mm. 1) R<sub>t</sub> visé ≈ 4 × 1,6 = 6,4 µm = 0,0064 mm. 2) f² = 8 × r<sub>ε</sub> × R<sub>t</sub> = 8 × 0,8 × 0,0064 = 0,041. 3) f ≈ 0,20 mm/tr. 4) Prendre une marge pour l'usure et les vibrations : f = 0,15 mm/tr. 5) Vérifier sur pièce avec un rugosimètre.</div>\n<p>La rugosité réelle est souvent supérieure à la valeur théorique : vibrations, arête rapportée, usure, copeau qui raye la surface. Les plaquettes à arête <strong>wiper</strong> (méplat de planage près du bec) permettent de doubler l'avance à rugosité égale, mais seulement sur des surfaces cylindriques ou planes.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la formule de rugosité ne vaut que si l'avance reste inférieure au rayon de bec et si la coupe est stable. En fraisage de finition avec une fraise hémisphérique, c'est la hauteur de crête entre deux passes voisines qui fixe l'état de surface : elle dépend du pas latéral et du rayon de l'outil.</div>"
      },
      {
       "titre": "Calcul des temps de coupe",
       "contenu": "<p>Le <strong>temps de coupe</strong> d'une opération vaut t<sub>c</sub> = L / V<sub>f</sub>, où L est la longueur parcourue en avance de travail, approches et dégagements compris.</p>\n<table>\n<thead><tr><th>Opération</th><th>Longueur L</th><th>Vitesse d'avance</th></tr></thead>\n<tbody>\n<tr><td>Chariotage</td><td>Longueur usinée + approche (1 à 2 mm)</td><td>V<sub>f</sub> = f × N</td></tr>\n<tr><td>Perçage débouchant</td><td>Profondeur + hauteur de cône (environ 0,3 × D) + approche + débouchage</td><td>V<sub>f</sub> = f × N</td></tr>\n<tr><td>Surfaçage en bout</td><td>Longueur de la pièce + diamètre de la fraise (sortie complète) + approches</td><td>V<sub>f</sub> = f<sub>z</sub> × Z × N</td></tr>\n</tbody>\n</table>\n<p>Exemple : chariotage sur 120 mm, approche 2 mm, D = 50 mm, V<sub>c</sub> = 200 m/min, f = 0,25 mm/tr. N = 1 000 × 200 / (π × 50) ≈ 1 273 tr/min ; V<sub>f</sub> = 0,25 × 1 273 ≈ 318 mm/min ; t<sub>c</sub> = 122 / 318 ≈ 0,38 min, soit environ 23 s.</p>\n<p>Le <strong>temps de cycle</strong> d'une pièce ajoute aux temps de coupe les déplacements rapides, les changements d'outils, les mesures en cours de cycle, le chargement et le déchargement. Sur les petites pièces de série, ces temps « hors coupe » représentent souvent la moitié du cycle : les réduire est aussi efficace qu'augmenter les vitesses.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en tournage à vitesse de coupe constante (fonction G96), N augmente quand le diamètre diminue. On limite toujours la fréquence maximale (fonction G92 ou G50 selon les commandes) pour protéger le mandrin et la pièce.</div>"
      }
     ],
     "points_cles": [
      "On fixe dans l'ordre ap, puis f, puis Vc",
      "Fc = Kc × ap × f et Pc = Fc × Vc / 60",
      "La puissance moteur nécessaire tient compte du rendement de la machine",
      "Le débit de copeaux mesure la productivité de l'ébauche",
      "Avec un faible engagement radial, on augmente fz pour garder une épaisseur de copeau suffisante",
      "Selon Taylor, une hausse de 20 % de Vc divise environ par deux la durée de vie",
      "Rugosité théorique en tournage : Rt ≈ f² / (8 rε)",
      "Temps de coupe = longueur parcourue / vitesse d'avance",
      "En vitesse de coupe constante, la fréquence maximale doit être limitée"
     ],
     "lexique": [
      {
       "terme": "Pression spécifique de coupe Kc",
       "def": "Effort de coupe rapporté à la section du copeau, en N/mm², propre à chaque matériau."
      },
      {
       "terme": "Puissance de coupe",
       "def": "Puissance absorbée par la coupe, produit de l'effort de coupe par la vitesse de coupe."
      },
      {
       "terme": "Rendement",
       "def": "Rapport entre la puissance utile à l'outil et la puissance fournie par le moteur."
      },
      {
       "terme": "Débit de copeaux",
       "def": "Volume de matière enlevé par unité de temps, en cm³/min."
      },
      {
       "terme": "Engagement radial ae",
       "def": "Largeur de matière attaquée par une fraise perpendiculairement à son axe."
      },
      {
       "terme": "Modèle de Taylor",
       "def": "Loi reliant la durée de vie d'un outil à la vitesse de coupe par une fonction puissance."
      },
      {
       "terme": "Rugosité théorique",
       "def": "Hauteur des sillons laissés par l'outil, calculée à partir de l'avance et du rayon de bec."
      },
      {
       "terme": "Plaquette wiper",
       "def": "Plaquette munie d'un méplat de planage qui améliore l'état de surface à avance égale."
      },
      {
       "terme": "Temps de cycle",
       "def": "Durée totale de réalisation d'une pièce sur un poste, temps hors coupe compris."
      }
     ]
    },
    {
     "id": "btrpm-procedes-mise-en-forme",
     "titre": "Procédés de mise en forme et outillages associés",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Décrire le principe et les paramètres des principaux procédés de mise en forme : découpe, emboutissage, injection plastique, fonderie, forge",
      "Identifier l'outillage associé à chaque procédé et ses éléments principaux",
      "Repérer sur une pièce les formes imposées par le procédé : dépouilles, rayons, plan de joint, bavures",
      "Comparer les procédés selon la série, la matière et la précision",
      "Situer l'usinage et la fabrication additive par rapport aux procédés de mise en forme"
     ],
     "sections": [
      {
       "titre": "Mettre en forme plutôt qu'enlever de la matière",
       "contenu": "<p>L'usinage enlève de la matière ; les procédés de <strong>mise en forme</strong> déplacent ou coulent la matière dans la forme voulue grâce à un <strong>outillage</strong> : outil de presse, moule, matrice. L'outillage coûte cher et demande des semaines de réalisation, mais il produit ensuite des pièces en quelques secondes. C'est pourquoi ces procédés sont réservés aux séries.</p>\n<p>Le domaine industriel du bac pro distingue trois familles d'outillages, qui correspondent aux grands secteurs de l'option réalisation et maintenance des outillages : découpe et emboutissage, moulage des matériaux (polymères et métaux), forgeage, matriçage et estampage. L'option réalisation et suivi de productions, elle, s'appuie sur l'usinage (fabrication mécanique, décolletage) et la fabrication additive. Tout technicien doit cependant connaître l'ensemble, car une pièce passe souvent par plusieurs procédés : un brut forgé ou moulé est ensuite usiné.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la mise en forme est rentable quand le coût de l'outillage, réparti sur la série, devient inférieur à l'économie réalisée sur chaque pièce par rapport à l'usinage.</div>"
      },
      {
       "titre": "Découpe et emboutissage des tôles",
       "contenu": "<p>La <strong>découpe</strong> sépare une partie de tôle par cisaillement entre un <strong>poinçon</strong> et une <strong>matrice</strong>. Le <strong>jeu de découpe</strong> entre les deux est un paramètre essentiel : il est de l'ordre de quelques pour cent de l'épaisseur par côté, plus grand pour les tôles dures et épaisses. Un jeu trop faible use rapidement l'outil, un jeu trop grand produit une bavure importante.</p>\n<p>Le bord découpé présente successivement une <strong>zone bombée</strong> (bord arrondi côté poinçon), une <strong>zone cisaillée</strong> lisse, une <strong>zone arrachée</strong> rugueuse et une <strong>bavure</strong> côté matrice. Le poinçon donne la cote des trous (la matrice est agrandie du jeu) ; la matrice donne la cote des contours extérieurs découpés (le poinçon est réduit du jeu).</p>\n<p>L'<strong>emboutissage</strong> transforme un flan plan en une pièce creuse (godet, carter, pièce de carrosserie) en le poussant avec un poinçon dans une matrice, pendant qu'un <strong>serre-flan</strong> contrôle l'avalement de la tôle pour éviter les plis. Le <strong>pliage</strong> et le <strong>cambrage</strong> forment des arêtes. Le <strong>retour élastique</strong> oblige à « surplier » ou à corriger les formes de l'outil.</p>\n<p>Les pièces de grande série sont produites par des <strong>outils progressifs</strong> (ou à suivre) : la bande avance pas à pas et chaque poste réalise une opération (poinçonnage, pliage, découpe finale).</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> confondre le côté poinçon et le côté matrice conduit à des pièces hors cote d'une valeur égale au jeu. Sur un plan d'outil, la cote nominale se reporte sur l'élément qui « fait » la cote, l'autre étant déduit par le jeu.</div>"
      },
      {
       "titre": "Injection des polymères",
       "contenu": "<p>L'<strong>injection plastique</strong> est le procédé le plus répandu pour les pièces en thermoplastique. Un cycle comprend : fermeture du moule, injection de la matière fondue par la vis-piston, <strong>maintien en pression</strong> pour compenser le retrait, <strong>refroidissement</strong> (souvent la phase la plus longue), ouverture et éjection. Les cycles durent de quelques secondes à une minute.</p>\n<p>Un moule comprend une <strong>partie fixe</strong> (côté injection) et une <strong>partie mobile</strong> (côté éjection), séparées par le <strong>plan de joint</strong>. La matière arrive par la <strong>buse</strong>, la <strong>carotte</strong>, les <strong>canaux d'alimentation</strong> et le <strong>seuil</strong> dans l'<strong>empreinte</strong>. Les formes en contre-dépouille demandent des <strong>tiroirs</strong> ou des <strong>noyaux</strong> mobiles.</p>\n<p>La <strong>force de fermeture</strong> nécessaire se calcule par F = p × S, avec p la pression dans l'empreinte et S la surface projetée des pièces et canaux sur le plan de joint. Avec une pression de 40 MPa et une surface projetée de 150 cm² (15 000 mm²), F = 40 × 15 000 = 600 000 N, soit 600 kN ou environ 60 tonnes-force.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le retrait de la matière varie selon le polymère : de l'ordre de 0,4 à 0,7 % pour un ABS, de 1,5 à 2,5 % pour un polypropylène, plus dans le sens de l'écoulement pour les matières chargées de fibres. Le mouliste dimensionne l'empreinte en conséquence, puis ajuste après les premiers essais.</div>"
      },
      {
       "titre": "Fonderie et forge",
       "contenu": "<p>La <strong>fonderie</strong> coule un métal liquide dans un moule :</p>\n<ul>\n<li>en <strong>moule sable</strong>, détruit après chaque pièce, pour les petites séries et les grosses pièces ;</li>\n<li>en <strong>coquille</strong> (moule métallique permanent) par gravité ;</li>\n<li><strong>sous pression</strong> (alliages d'aluminium, de zinc, de magnésium), dans des moules en acier pour travail à chaud, pour les grandes séries de pièces à parois minces.</li>\n</ul>\n<p>La <strong>forge</strong> déforme le métal chauffé (vers 1 100 à 1 250 °C pour l'acier) entre deux <strong>matrices</strong> portant l'empreinte : on parle d'<strong>estampage</strong> pour les aciers et de <strong>matriçage</strong> pour les alliages non ferreux. Le surplus de métal s'échappe dans une <strong>bavure</strong> retirée ensuite par ébavurage. Les pièces forgées présentent un fibrage orienté qui leur donne une excellente tenue mécanique (vilebrequins, bielles, outils à main).</p>\n<table>\n<thead><tr><th>Procédé</th><th>Série typique</th><th>Précision brute</th><th>Outillage</th></tr></thead>\n<tbody>\n<tr><td>Moulage sable</td><td>Unitaire à moyenne</td><td>Faible</td><td>Modèle, boîtes à noyaux</td></tr>\n<tr><td>Fonderie sous pression</td><td>Grande</td><td>Bonne</td><td>Moule en acier à chaud, cher</td></tr>\n<tr><td>Estampage</td><td>Moyenne à grande</td><td>Moyenne</td><td>Matrices en acier à chaud</td></tr>\n<tr><td>Injection plastique</td><td>Grande</td><td>Bonne</td><td>Moule en acier, cher</td></tr>\n<tr><td>Découpe-emboutissage</td><td>Grande</td><td>Bonne</td><td>Outils de presse</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Formes imposées par le procédé",
       "contenu": "<p>Une pièce mise en forme se reconnaît à des formes caractéristiques que le technicien doit savoir lire sur un plan ou sur la pièce :</p>\n<ul>\n<li>les <strong>dépouilles</strong> : inclinaison des parois parallèles à la direction de démoulage (souvent 0,5 à 3°) pour permettre l'extraction ;</li>\n<li>les <strong>rayons</strong> de raccordement, qui facilitent l'écoulement de la matière et limitent les concentrations de contraintes ;</li>\n<li>le <strong>plan de joint</strong>, visible par une légère ligne ou une bavure ;</li>\n<li>les traces d'<strong>éjecteurs</strong> (petits disques plats) et de <strong>seuil</strong> d'injection ;</li>\n<li>les <strong>surépaisseurs d'usinage</strong> sur les surfaces fonctionnelles d'un brut de fonderie ou de forge.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> identifier le procédé d'obtention d'une pièce inconnue. 1) Observer la matière (polymère, alliage léger, acier, fonte). 2) Chercher un plan de joint ou une bavure : indice de moulage ou de forge. 3) Chercher des dépouilles et des traces d'éjecteurs : indice de moulage. 4) Mesurer l'épaisseur : constante et bords cisaillés, il s'agit d'une tôle découpée ou emboutie. 5) Observer l'aspect : surface granuleuse (sable), lisse (coquille ou sous pression), calaminée (forge). 6) Conclure et le vérifier avec la série et le coût probables.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> lors de la prise de pièce d'un brut moulé ou forgé, la surface de dépouille n'est pas parallèle à la surface usinée suivante. Prendre appui sur une dépouille comme sur une surface plane introduit un défaut d'orientation dès la première phase.</div>"
      },
      {
       "titre": "Usinage et fabrication additive dans le paysage des procédés",
       "contenu": "<p>L'<strong>usinage</strong> reste incontournable : il produit les surfaces précises des pièces mises en forme, il réalise les outillages eux-mêmes et il fabrique directement les pièces de petite et moyenne série. Le <strong>décolletage</strong> est une forme particulière d'usinage, en grande série, à partir de barres sur des tours automatiques.</p>\n<p>La <strong>fabrication additive</strong> construit la pièce couche par couche. Elle intéresse les deux options : pièces de forme complexe en petite série, prototypes, et inserts de moules avec <strong>refroidissement conforme</strong> (canaux qui suivent la forme de l'empreinte, impossibles à percer de façon classique). Elle nécessite presque toujours un usinage de finition des surfaces fonctionnelles.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le choix d'un procédé croise la matière, la forme, la précision, la série et le coût. Un technicien qui connaît tous les procédés peut proposer une gamme hybride : brut forgé ou imprimé, puis usinage des seules surfaces fonctionnelles.</div>"
      },
      {
       "titre": "Comparer les coûts : le seuil de rentabilité",
       "contenu": "<p>Pour choisir entre deux procédés, on compare le <strong>coût total</strong> d'une série : coût fixe (outillage, programmation, réglage) plus coût variable (matière, temps machine, main-d'œuvre) multiplié par le nombre de pièces. Le nombre de pièces pour lequel les deux coûts sont égaux est le <strong>seuil de rentabilité</strong>.</p>\n<p>Exemple : une équerre peut être usinée dans la masse pour 12 € la pièce sans outillage particulier, ou découpée et pliée pour 1,50 € la pièce avec un outil de presse coûtant 21 000 €. Coût usinage = 12 × n ; coût presse = 21 000 + 1,5 × n. Égalité : 12 n = 21 000 + 1,5 n, soit 10,5 n = 21 000 et n = 2 000 pièces. En dessous de 2 000 pièces, l'usinage est plus économique ; au-delà, l'outil de presse l'emporte, d'autant plus que la série est grande.</p>\n<p>Ce raisonnement simple ignore des facteurs réels : délai de réalisation de l'outillage, maintenance de l'outil, qualité obtenue, possibilité de modifier la pièce. Il donne néanmoins un ordre de grandeur utile pour justifier un choix à l'écrit comme en entreprise.</p>"
      }
     ],
     "points_cles": [
      "La mise en forme est rentable en série grâce à un outillage coûteux mais rapide",
      "Le jeu de découpe se répartit sur la matrice pour les trous et sur le poinçon pour les contours",
      "Le bord découpé présente bombé, zone cisaillée, zone arrachée et bavure",
      "Le serre-flan contrôle l'avalement de la tôle en emboutissage",
      "Un cycle d'injection comprend injection, maintien, refroidissement et éjection",
      "Force de fermeture = pression dans l'empreinte × surface projetée",
      "Dépouilles, rayons, plan de joint et traces d'éjecteurs révèlent le procédé",
      "Estampage pour les aciers, matriçage pour les non ferreux",
      "La fabrication additive permet les canaux de refroidissement conformes"
     ],
     "lexique": [
      {
       "terme": "Poinçon",
       "def": "Élément mâle d'un outil de découpe ou d'emboutissage."
      },
      {
       "terme": "Matrice",
       "def": "Élément femelle d'un outil de presse ou de forge, qui porte l'empreinte ou le contour."
      },
      {
       "terme": "Jeu de découpe",
       "def": "Écart entre poinçon et matrice, exprimé en pourcentage de l'épaisseur de tôle."
      },
      {
       "terme": "Serre-flan",
       "def": "Élément qui presse le flan pendant l'emboutissage pour en contrôler l'écoulement."
      },
      {
       "terme": "Outil progressif",
       "def": "Outil de presse à plusieurs postes où la bande avance d'un pas à chaque coup."
      },
      {
       "terme": "Plan de joint",
       "def": "Surface de séparation entre les deux parties d'un moule ou d'une matrice."
      },
      {
       "terme": "Dépouille",
       "def": "Inclinaison d'une paroi qui facilite le démoulage ou l'extraction."
      },
      {
       "terme": "Retrait",
       "def": "Diminution des dimensions d'une matière en se refroidissant après moulage."
      },
      {
       "terme": "Estampage",
       "def": "Forgeage d'acier à chaud entre deux matrices portant l'empreinte."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 3 — Préparer et programmer la réalisation",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btrpm-mise-en-position",
     "titre": "Mise en position et maintien des pièces",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Établir une mise en position isostatique cohérente avec les spécifications du dessin",
      "Représenter une prise de pièce par les symboles normalisés de spécification technologique",
      "Choisir des éléments de mise en position et de maintien adaptés",
      "Définir l'emplacement et la direction des efforts de serrage",
      "Comparer les solutions de porte-pièces : étau, mandrin, pinces, montages modulaires, systèmes point zéro"
     ],
     "sections": [
      {
       "titre": "Mise en position et maintien : deux fonctions distinctes",
       "contenu": "<p>Préparer la prise de pièce revient à remplir deux fonctions qu'il ne faut jamais confondre :</p>\n<ul>\n<li>la <strong>mise en position</strong> (MIP) place la pièce de façon reproductible par rapport à la machine, en supprimant ses six degrés de liberté par des appuis ;</li>\n<li>le <strong>maintien en position</strong> (MAP) conserve cette position malgré les efforts de coupe, par un serrage dirigé vers les appuis.</li>\n</ul>\n<p>Le cours de seconde a présenté le principe des six degrés de liberté et des appuis. On l'applique ici avec rigueur. Une mise en position est <strong>isostatique</strong> lorsque chaque degré de liberté est supprimé une seule fois. Elle est <strong>hyperstatique</strong> lorsqu'un degré de liberté est bloqué plusieurs fois (par exemple quatre appuis sur une face brute) : la pièce bascule ou se déforme au serrage. Elle est <strong>hypostatique</strong> lorsqu'un degré utile reste libre.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les appuis positionnent, le serrage maintient. Un serrage qui pousse la pièce ailleurs que sur ses appuis détruit la mise en position.</div>"
      },
      {
       "titre": "Les liaisons élémentaires de mise en position",
       "contenu": "<p>Les combinaisons d'appuis courantes reprennent les liaisons vues pour les mécanismes :</p>\n<table>\n<thead><tr><th>Liaison de mise en position</th><th>Degrés supprimés</th><th>Réalisation typique</th></tr></thead>\n<tbody>\n<tr><td>Appui plan</td><td>3 (1 translation, 2 rotations)</td><td>Trois touches ou une face d'étau, une table</td></tr>\n<tr><td>Linéaire rectiligne (orientation)</td><td>2</td><td>Deux touches alignées, mors fixe d'étau</td></tr>\n<tr><td>Ponctuelle (butée)</td><td>1</td><td>Une touche, une butée</td></tr>\n<tr><td>Centrage long</td><td>4</td><td>Mandrin à mors durs sur grande longueur, pinces longues</td></tr>\n<tr><td>Centrage court</td><td>2</td><td>Mors serrés sur une faible longueur, pige courte</td></tr>\n<tr><td>Vé long / vé court</td><td>4 / 2</td><td>Prisme en V pour cylindres</td></tr>\n</tbody>\n</table>\n<p>Les montages classiques s'en déduisent : <strong>3-2-1</strong> pour une pièce prismatique (appui plan, orientation, butée) ; <strong>centrage long + butée</strong> pour une pièce de révolution longue serrée en mandrin ; <strong>appui plan + centrage court + butée</strong> pour une pièce plate de révolution (disque, bride). Pour une pièce percée de deux trous, l'ensemble <strong>appui plan + pion cylindrique + pion délardé</strong> (ou losange) est la solution de référence en production.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> deux pions cylindriques dans deux trous constituent un montage hyperstatique : la moindre erreur d'entraxe empêche la mise en place ou force la pièce. Le second pion doit être délardé pour ne bloquer qu'une rotation.</div>"
      },
      {
       "titre": "La symbolisation technologique",
       "contenu": "<p>Sur le croquis d'un contrat de phase, la mise en position et le maintien sont représentés par des symboles normalisés (norme NF E 04-013). On distingue deux niveaux de représentation :</p>\n<ul>\n<li>la <strong>symbolisation de base</strong>, avec des petits vecteurs normaux à la surface, numérotés de 1 à 6, qui indiquent chaque degré supprimé ; elle convient à une étude de principe ;</li>\n<li>la <strong>symbolisation technologique</strong>, qui précise la nature des éléments : touche fixe, touche striée, centreur, pinces, mors, vé, appui réglable, ainsi que la nature de la surface (usinée ou brute) et le type de serrage.</li>\n</ul>\n<p>Les efforts de serrage sont représentés par des flèches spécifiques, dirigées vers les appuis principaux. Le contrat de phase précise aussi l'effort ou le couple de serrage lorsque la pièce est déformable.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> établir la mise en position d'une phase de fraisage d'un bloc dont les faces A, B, C sont déjà usinées. 1) Lire les spécifications à réaliser dans la phase : la rainure est spécifiée par rapport à A (perpendicularité) et à B (localisation). 2) Choisir A comme appui plan (normales 1, 2, 3), car c'est la référence primaire. 3) Choisir B comme orientation (normales 4, 5). 4) Choisir C comme butée (normale 6). 5) Placer le serrage perpendiculairement à A, au droit des appuis, et un serrage latéral contre B. 6) Vérifier qu'aucune normale ne bloque deux fois le même degré.</div>"
      },
      {
       "titre": "Choisir les surfaces d'appui",
       "contenu": "<p>Les règles de choix des surfaces de mise en position découlent des spécifications :</p>\n<ol>\n<li>quand c'est possible, on prend appui sur les <strong>surfaces de référence</strong> du dessin ; les tolérances se réalisent alors directement, sans transfert de cotes ;</li>\n<li>on choisit l'appui plan sur la plus <strong>grande surface</strong> et la plus <strong>stable</strong>, l'orientation sur la plus grande longueur disponible ;</li>\n<li>on évite les surfaces brutes comme appuis répétés ; une surface brute ne sert qu'à la première phase (phase de « dégrossissage » des références) ;</li>\n<li>on veille à l'<strong>accessibilité</strong> : les surfaces à usiner dans la phase doivent rester libres pour l'outil ;</li>\n<li>on limite le nombre de <strong>reprises</strong>, chacune ajoutant une erreur de mise en position.</li>\n</ol>\n<p>Une surface brute présente des défauts de forme importants. Sur une telle surface, on utilise des touches bombées ou striées et parfois des <strong>appuis réglables</strong> ou des <strong>appuis flottants</strong> (qui viennent au contact puis se bloquent) pour soutenir la pièce sans la rendre hyperstatique.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur les pièces de fonderie, le client définit souvent des <strong>cibles</strong> de mise en position (petites zones repérées A1, A2, A3, B1, B2, C1 sur le dessin). Le premier montage d'usinage doit prendre appui exactement sur ces cibles pour que les surépaisseurs soient bien réparties.</div>"
      },
      {
       "titre": "Maintenir la pièce sans la déformer",
       "contenu": "<p>Le serrage doit être <strong>suffisant</strong> pour que les efforts de coupe ne déplacent pas la pièce, et <strong>limité</strong> pour ne pas la déformer. Les règles pratiques :</p>\n<ul>\n<li>serrer au droit des appuis, jamais dans le vide ;</li>\n<li>diriger l'effort de coupe principal vers un appui fixe (le mors fixe d'un étau, pas le mors mobile) ;</li>\n<li>multiplier les points de serrage modérés plutôt qu'un seul point très chargé ;</li>\n<li>pour les pièces fines, utiliser des mors doux usinés à la forme, des mors pendulaires, un plateau à vide ou un plateau magnétique ;</li>\n<li>pour les tubes minces en tournage, préférer un mandrin à mors larges ou des mors usinés au diamètre, avec une pression de serrage réduite pour la finition.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier le non-glissement d'une pièce serrée en étau. Effort de coupe horizontal estimé : 1 500 N, dirigé parallèlement aux mors. Coefficient de frottement entre mors lisses et acier : environ 0,15. Il y a deux surfaces de contact. 1) Effort transmissible par frottement : 2 × 0,15 × F<sub>serrage</sub>. 2) Condition : 2 × 0,15 × F<sub>serrage</sub> ≥ 1 500 × s, avec un coefficient de sécurité s = 2. 3) F<sub>serrage</sub> ≥ 3 000 / 0,3 = 10 000 N. 4) Conclusion : un serrage de 10 kN au moins est nécessaire ; on peut aussi placer une butée qui reprend l'effort, ce qui est plus sûr.</div>"
      },
      {
       "titre": "Les porte-pièces de production",
       "contenu": "<p>Le choix du porte-pièce dépend de la forme, de la série et de la machine :</p>\n<table>\n<thead><tr><th>Porte-pièce</th><th>Emploi</th><th>Point fort</th></tr></thead>\n<tbody>\n<tr><td>Étau de précision, étau autocentreur</td><td>Pièces prismatiques, petites séries</td><td>Polyvalence, rapidité</td></tr>\n<tr><td>Mandrin trois mors (durs ou doux)</td><td>Pièces de révolution</td><td>Centrage automatique ; mors doux usinés pour la précision</td></tr>\n<tr><td>Pinces de serrage</td><td>Barres, décolletage</td><td>Excellente concentricité, serrage sur toute la périphérie</td></tr>\n<tr><td>Montage modulaire</td><td>Pièces complexes, petites séries</td><td>Éléments standard réutilisables sur une plaque quadrillée</td></tr>\n<tr><td>Montage dédié hydraulique</td><td>Grandes séries</td><td>Serrage reproductible, plusieurs pièces à la fois</td></tr>\n<tr><td>Système point zéro, palettes</td><td>Changement rapide entre machines</td><td>Repositionnement précis en quelques secondes</td></tr>\n</tbody>\n</table>\n<p>Les systèmes <strong>point zéro</strong> permettent de préparer la pièce sur sa palette en temps masqué, hors machine, puis de la positionner sur la machine avec une répétabilité de quelques micromètres. Ils sont très utilisés pour les éléments d'outillage qui passent du fraisage à l'électroérosion puis au contrôle sans perdre leur origine.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un porte-pièce bien conçu rend la mise en position indépendante de l'habileté de l'opérateur : c'est la condition d'une production répétable.</div>"
      },
      {
       "titre": "Erreurs de mise en position et leurs effets",
       "contenu": "<p>Même isostatique, une mise en position n'est jamais parfaite. Les principales sources d'erreur sont :</p>\n<ul>\n<li>les <strong>défauts des surfaces d'appui</strong> de la pièce (planéité, bavures, copeaux coincés) ;</li>\n<li>les <strong>défauts du porte-pièce</strong> : usure des touches, mors marqués, faux-rond d'un mandrin ;</li>\n<li>la <strong>déformation</strong> de la pièce ou du montage sous le serrage ;</li>\n<li>le <strong>jeu</strong> entre un pion et l'alésage de la pièce, qui autorise un petit déplacement.</li>\n</ul>\n<p>Ces erreurs se retrouvent directement sur les cotes fabriquées et sur les spécifications d'orientation et de position. Un copeau de 0,1 mm sous une touche d'appui, à 100 mm de la surface usinée, peut créer un défaut de parallélisme de plusieurs centièmes. C'est pourquoi le nettoyage des appuis à chaque chargement (soufflette à basse pression avec lunettes, pinceau ou chiffon) fait partie du mode opératoire. Pour les séries, on contrôle régulièrement l'état du montage et on remplace les éléments d'usure (touches, pions, mors) avant qu'ils ne provoquent des non-conformités.</p>"
      }
     ],
     "points_cles": [
      "Mise en position et maintien en position sont deux fonctions distinctes",
      "Isostatique : chaque degré de liberté est supprimé une seule fois",
      "Montage 3-2-1 : appui plan, orientation, butée",
      "Un pion cylindrique et un pion délardé positionnent une pièce sur deux trous",
      "Les symboles NF E 04-013 représentent appuis et serrages sur le contrat de phase",
      "Prendre appui sur les surfaces de référence évite les transferts de cotes",
      "Le serrage s'applique au droit des appuis, l'effort de coupe vers un appui fixe",
      "Les systèmes point zéro garantissent un repositionnement rapide et précis"
     ],
     "lexique": [
      {
       "terme": "Mise en position",
       "def": "Placement reproductible de la pièce par suppression de ses degrés de liberté."
      },
      {
       "terme": "Maintien en position",
       "def": "Serrage qui conserve la mise en position malgré les efforts de coupe."
      },
      {
       "terme": "Isostatisme",
       "def": "Situation où chaque degré de liberté est supprimé une seule fois."
      },
      {
       "terme": "Hyperstatisme",
       "def": "Situation où un même degré de liberté est bloqué plusieurs fois."
      },
      {
       "terme": "Centrage long",
       "def": "Liaison de mise en position qui supprime deux translations et deux rotations."
      },
      {
       "terme": "Pion délardé",
       "def": "Pion dont deux faces sont dégagées pour ne bloquer qu'un seul degré de liberté."
      },
      {
       "terme": "Appui flottant",
       "def": "Appui qui vient au contact de la pièce sans effort puis se bloque pour la soutenir."
      },
      {
       "terme": "Mors doux",
       "def": "Mors en matériau tendre usinés à la forme de la pièce pour un serrage précis."
      },
      {
       "terme": "Système point zéro",
       "def": "Dispositif de positionnement rapide et répétable d'une palette ou d'un montage sur machine."
      }
     ]
    },
    {
     "id": "btrpm-processus-cotes-fabriquees",
     "titre": "Élaborer un processus de réalisation et calculer les cotes fabriquées",
     "niveau": "Tle",
     "duree": 50,
     "objectifs": [
      "Établir les contraintes d'antériorité entre les surfaces d'une pièce",
      "Regrouper les opérations en phases en limitant les reprises",
      "Distinguer cote du dessin, cote fabriquée et cote de réglage",
      "Résoudre un transfert de cote par une chaîne de cotes",
      "Rédiger un contrat de phase complet"
     ],
     "sections": [
      {
       "titre": "Du dessin de définition au processus",
       "contenu": "<p>Le <strong>processus de réalisation</strong> (ou avant-projet d'étude de fabrication) décrit l'enchaînement des phases qui transforment le brut en pièce finie. Il précède le <strong>contrat de phase</strong>, document détaillé de chaque phase. Le cours de seconde a défini la phase (ensemble des opérations réalisées sur un même poste), la sous-phase (dans une même mise en position) et l'opération (travail d'un outil sur une surface). Ce chapitre apprend à construire et à justifier un processus.</p>\n<p>Les données d'entrée sont :</p>\n<ul>\n<li>le dessin de définition et ses spécifications ;</li>\n<li>le brut (barre, plaque, brut moulé ou forgé, pièce imprimée) et ses surépaisseurs ;</li>\n<li>la série et la cadence demandées ;</li>\n<li>le parc machines et les outillages disponibles ;</li>\n<li>les procédés imposés par le client (traitements, contrôles).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un bon processus réalise les surfaces de référence en premier, regroupe dans une même mise en position les surfaces liées par des tolérances serrées et place les opérations délicates (finition, traitements) le plus tard possible.</div>"
      },
      {
       "titre": "Antériorités et regroupements",
       "contenu": "<p>Une <strong>contrainte d'antériorité</strong> exprime qu'une surface doit être usinée avant une autre. Elle peut être :</p>\n<ul>\n<li><strong>géométrique</strong> : la référence d'une spécification avant la surface spécifiée ; une surface servant d'appui avant les surfaces usinées en prenant appui sur elle ;</li>\n<li><strong>technologique</strong> : un dressage avant un perçage (pour que le foret attaque une face plane), un perçage avant un taraudage, un alésage avant une gorge de circlips, une ébauche avant une finition ;</li>\n<li><strong>économique</strong> : enlever la matière la plus importante d'abord, pour libérer les contraintes et réduire les risques de déformation.</li>\n</ul>\n<p>On regroupe ensuite les surfaces en <strong>associations</strong> : ensembles usinés dans une même mise en position. Le tableau ou le graphe des antériorités permet de déterminer un ordre compatible avec toutes les contraintes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> processus d'un axe épaulé tourné, comportant une portée ⌀25 g6, une portée ⌀30 k6 coaxiales, un épaulement, un chanfrein et une gorge. 1) Phase 10 : débit de la barre. 2) Phase 20, tournage côté 1 : dressage et centrage de la face 1, chariotage d'ébauche du côté ⌀25. 3) Phase 30, tournage côté 2 : dressage à la longueur, centrage, ébauche du côté ⌀30. 4) Phase 40, tournage entre pointes : finition des deux portées, épaulements, chanfreins et gorge, dans la même mise en position pour garantir la coaxialité. 5) Phase 50 : contrôle final. Justification : la coaxialité serrée impose une finition des deux portées sans reprise.</div>"
      },
      {
       "titre": "Cote du dessin, cote fabriquée, cote de réglage",
       "contenu": "<p>Une <strong>cote fabriquée</strong> (ou cote de fabrication) est une dimension obtenue directement par l'usinage, entre la surface de mise en position (ou une surface de référence de réglage) et la surface usinée. Elle est indiquée sur le croquis du contrat de phase avec sa tolérance.</p>\n<p>Deux cas se présentent :</p>\n<ul>\n<li>la cote du dessin relie directement la surface d'appui à la surface usinée : la cote fabriquée est égale à la cote du dessin, c'est un <strong>transfert direct</strong> ;</li>\n<li>la cote du dessin relie deux surfaces dont aucune n'est l'appui : il faut calculer une cote fabriquée, c'est un <strong>transfert de cote</strong>.</li>\n</ul>\n<p>La <strong>cote de réglage</strong> est la valeur que le régleur vise pour obtenir la cote fabriquée : en général sa valeur moyenne, corrigée éventuellement de l'usure prévisible de l'outil.</p>\n<p>Chaque procédé présente une <strong>dispersion</strong> : variation des cotes obtenues d'une pièce à l'autre, due à la machine, à la mise en position, à l'outil et à la température. Une cote fabriquée n'est réalisable que si son intervalle de tolérance est supérieur à la dispersion du procédé employé.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un transfert de cote réduit toujours l'intervalle de tolérance disponible. Si le calcul donne un intervalle inférieur à la dispersion de la machine, ou négatif, il faut changer la mise en position ou l'ordre des phases, et non « forcer » la cote.</div>"
      },
      {
       "titre": "Résoudre un transfert de cote",
       "contenu": "<p>Le transfert se résout par une <strong>chaîne de cotes</strong> : la cote du dessin (cote condition) s'exprime comme une somme algébrique de cotes fabriquées. Les règles de calcul sont :</p>\n<ul>\n<li>valeur nominale de la condition = somme des cotes « positives » − somme des cotes « négatives » ;</li>\n<li>intervalle de tolérance de la condition = <strong>somme des intervalles</strong> de toutes les cotes de la chaîne ;</li>\n<li>maxi de la condition = somme des maxi positifs − somme des mini négatifs ; mini de la condition = somme des mini positifs − somme des maxi négatifs.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> une pièce prismatique a une face d'appui A. Le dessin impose une rainure dont le fond est à 12 ± 0,1 de la face supérieure B (cote condition). La hauteur totale A-B a été fabriquée à 40 ± 0,05 dans une phase précédente. Dans la phase de fraisage, la pièce repose sur A et l'on règle la profondeur par rapport à A : la cote fabriquée est la distance C<sub>f</sub> entre A et le fond de la rainure. 1) Chaîne : 12 = 40 − C<sub>f</sub>, donc C<sub>f</sub> nominale = 28. 2) Intervalle : IT(12) = IT(40) + IT(C<sub>f</sub>), soit 0,2 = 0,1 + IT(C<sub>f</sub>), d'où IT(C<sub>f</sub>) = 0,1. 3) Maxi : 12,1 = 40,05 − C<sub>f mini</sub>, donc C<sub>f mini</sub> = 27,95. 4) Mini : 11,9 = 39,95 − C<sub>f maxi</sub>, donc C<sub>f maxi</sub> = 28,05. 5) Résultat : C<sub>f</sub> = 28 ± 0,05. 6) Vérifier que la dispersion de la fraiseuse en profondeur est inférieure à 0,1 mm.</div>\n<p>On remarque que l'intervalle disponible pour la cote fabriquée (0,1) est la moitié de celui du dessin (0,2) : la tolérance de la cote 40 a été « consommée » par le transfert.</p>"
      },
      {
       "titre": "Le contrat de phase",
       "contenu": "<p>Le <strong>contrat de phase</strong> est le document qui accompagne l'opérateur ou le régleur au poste. Il contient :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>En-tête</td><td>Pièce, indice du dessin, matière, numéro et désignation de la phase, machine, porte-pièce</td></tr>\n<tr><td>Croquis</td><td>Pièce dans sa position d'usinage, surfaces usinées en trait fort, symboles de mise en position et de serrage, cotes fabriquées tolérancées</td></tr>\n<tr><td>Liste des opérations</td><td>Ordre, désignation, outil (référence, porte-outil), conditions de coupe (Vc, N, f ou fz, Vf, ap)</td></tr>\n<tr><td>Vérification</td><td>Moyen de contrôle de chaque cote fabriquée et fréquence</td></tr>\n<tr><td>Temps</td><td>Temps de coupe, temps de cycle prévus</td></tr>\n<tr><td>Sécurité</td><td>Consignes particulières, EPI, risques spécifiques</td></tr>\n</tbody>\n</table>\n<p>Le croquis est toujours dessiné dans la <strong>position de la pièce sur la machine</strong>, vue par l'opérateur, avec le repère de la machine. Les surfaces déjà usinées dans les phases précédentes sont dessinées en trait continu fin ; celles usinées dans la phase en trait continu fort.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans beaucoup d'entreprises, le contrat de phase papier est remplacé par une <strong>fiche de réglage</strong> numérique affichée au poste, liée au programme CN et à la liste d'outils. Le contenu reste le même ; seule la forme change. Toute modification passe par le service méthodes, qui met à jour l'indice.</div>"
      },
      {
       "titre": "Optimiser un processus",
       "contenu": "<p>Un processus validé se perfectionne avec l'expérience. Les leviers d'amélioration sont :</p>\n<ul>\n<li>réduire le nombre de phases grâce à des machines plus complètes (tour avec contre-broche et outils motorisés, centre 5 axes) : on parle de <strong>réalisation complète</strong> ;</li>\n<li>regrouper les finitions pour supprimer les transferts de cotes ;</li>\n<li>choisir un brut plus proche de la forme finale (barre profilée, brut moulé, pièce imprimée) ;</li>\n<li>réaliser les préparations hors machine (préréglage des outils, montage des pièces sur palettes) ;</li>\n<li>standardiser les outils entre plusieurs pièces pour réduire les changements de série.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> chaque reprise ajoute une erreur de mise en position et consomme une partie des tolérances. Moins un processus comporte de reprises, plus il est précis et rapide.</div>"
      },
      {
       "titre": "Le processus d'un élément d'outillage",
       "contenu": "<p>La réalisation d'un élément d'outillage (plaque porte-empreinte, matrice de découpe, poinçon) suit une logique propre, car la pièce est unique et souvent traitée thermiquement. Un processus type comporte :</p>\n<ol>\n<li>débit et équerrage du bloc (six faces d'équerre servant de références) ;</li>\n<li>ébauche des formes, perçages et taraudages, trous de passage du fil pour l'électroérosion ;</li>\n<li>détensionnement puis demi-finition si l'enlèvement de matière est important ;</li>\n<li>traitement thermique ;</li>\n<li>rectification des faces de référence ;</li>\n<li>finition des formes : usinage grande vitesse sur matériau trempé, électroérosion à fil ou par enfonçage ;</li>\n<li>ajustage, polissage, contrôle et repérage.</li>\n</ol>\n<p>Les références créées à la première étape (faces d'équerre, alésages de centrage) servent jusqu'à la fin : elles sont protégées et ne sont reprises qu'en rectification. Les cotes de position des empreintes et des trous de guidage sont toutes données depuis ces références, ce qui limite les transferts de cotes.</p>"
      }
     ],
     "points_cles": [
      "Le processus enchaîne les phases du brut à la pièce finie",
      "Les antériorités sont géométriques, technologiques ou économiques",
      "Les surfaces liées par une tolérance serrée se réalisent dans la même mise en position",
      "Une cote fabriquée relie la surface de mise en position à la surface usinée",
      "Un transfert de cote réduit l'intervalle de tolérance disponible",
      "L'IT de la cote condition est la somme des IT des cotes de la chaîne",
      "Une cote fabriquée n'est réalisable que si son IT dépasse la dispersion du procédé",
      "Le contrat de phase réunit croquis, opérations, outils, conditions, contrôles et sécurité",
      "Réduire les reprises améliore précision et productivité"
     ],
     "lexique": [
      {
       "terme": "Processus de réalisation",
       "def": "Suite ordonnée des phases qui transforment le brut en pièce finie."
      },
      {
       "terme": "Contrainte d'antériorité",
       "def": "Obligation de réaliser une surface avant une autre."
      },
      {
       "terme": "Association de surfaces",
       "def": "Ensemble de surfaces usinées dans une même mise en position."
      },
      {
       "terme": "Cote fabriquée",
       "def": "Dimension obtenue directement par l'usinage dans une phase, à partir de la surface de mise en position."
      },
      {
       "terme": "Transfert de cote",
       "def": "Calcul d'une cote fabriquée lorsque la cote du dessin ne part pas de la surface de mise en position."
      },
      {
       "terme": "Chaîne de cotes",
       "def": "Suite de cotes dont la somme algébrique donne une cote condition."
      },
      {
       "terme": "Dispersion",
       "def": "Variation des dimensions obtenues d'une pièce à l'autre avec un même réglage."
      },
      {
       "terme": "Contrat de phase",
       "def": "Document détaillant une phase : croquis, opérations, outils, conditions de coupe et contrôles."
      },
      {
       "terme": "Reprise",
       "def": "Changement de mise en position de la pièce entre deux usinages."
      }
     ]
    },
    {
     "id": "btrpm-programmation-cn",
     "titre": "Programmation des machines à commande numérique",
     "niveau": "1re",
     "duree": 50,
     "objectifs": [
      "Situer les axes normalisés et les origines d'une machine à commande numérique",
      "Expliquer le rôle des jauges et des correcteurs d'outils",
      "Lire et écrire un programme ISO simple : structure, fonctions G et M, cycles",
      "Mettre en œuvre la correction de rayon d'outil",
      "Appliquer une démarche sûre de premier passage d'un programme"
     ],
     "sections": [
      {
       "titre": "Axes et repères normalisés",
       "contenu": "<p>Les axes d'une machine-outil sont définis par la norme ISO 841. Les règles essentielles :</p>\n<ul>\n<li>l'axe <strong>Z</strong> est parallèle à l'axe de la broche ; son sens positif éloigne l'outil de la pièce ;</li>\n<li>l'axe <strong>X</strong> est l'axe principal du plan perpendiculaire ; en tournage, il est radial et son sens positif éloigne l'outil de l'axe de la pièce ;</li>\n<li>l'axe <strong>Y</strong> complète le trièdre direct ;</li>\n<li>les rotations autour de X, Y et Z sont notées <strong>A</strong>, <strong>B</strong> et <strong>C</strong>.</li>\n</ul>\n<p>Par convention, on programme toujours comme si c'était l'outil qui se déplaçait, même lorsque c'est la table qui bouge. Cela permet d'écrire un programme sans se soucier de la cinématique réelle de la machine.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> en tournage, la plupart des commandes programment X en diamètre et non en rayon. Une erreur sur ce point divise ou double les diamètres obtenus. Vérifier le mode actif (diamètre ou rayon) fait partie de la lecture d'un programme.</div>"
      },
      {
       "titre": "Origines et décalages",
       "contenu": "<p>Plusieurs points de référence coexistent sur une machine :</p>\n<table>\n<thead><tr><th>Point</th><th>Définition</th><th>Qui le fixe</th></tr></thead>\n<tbody>\n<tr><td>Origine machine (OM)</td><td>Point fixe, référence des mesures de la machine</td><td>Le constructeur</td></tr>\n<tr><td>Point de référence</td><td>Point rejoint à la prise d'origine des axes</td><td>Le constructeur</td></tr>\n<tr><td>Origine programme (OP)</td><td>Point de la pièce à partir duquel les cotes du programme sont écrites</td><td>Le programmeur</td></tr>\n<tr><td>Origine pièce</td><td>Point de la pièce réellement palpé sur la machine</td><td>Le régleur</td></tr>\n</tbody>\n</table>\n<p>Le régleur mesure la position de l'origine pièce par rapport à l'origine machine et l'enregistre dans un <strong>décalage d'origine</strong> (fonctions G54 à G59 sur de nombreuses commandes). Le programmeur choisit l'origine programme pour simplifier la cotation : en général, il la place sur une surface de référence du dessin, ce qui évite de recalculer les cotes.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> prendre l'origine pièce en fraisage avec un palpeur 3D sur un bloc. 1) Palper la face supérieure : la commande enregistre Z0. 2) Palper la face gauche puis la face droite : la commande calcule le milieu, ou retenir la face gauche comme X0 selon le dessin. 3) Faire de même en Y. 4) Vérifier les valeurs dans le tableau des décalages (G54 par exemple). 5) Contrôler l'origine en approchant lentement l'outil au-dessus d'un point connu, en mode pas à pas.</div>"
      },
      {
       "titre": "Jauges et correcteurs d'outils",
       "contenu": "<p>Chaque outil a ses propres dimensions. La commande les connaît grâce aux <strong>jauges d'outil</strong> : longueur (en fraisage) ou longueurs selon X et Z (en tournage), et rayon. Elles sont mesurées sur un <strong>banc de préréglage</strong> hors machine, ou sur la machine avec un palpeur d'outil ou un système laser, et enregistrées dans le tableau des outils.</p>\n<p>Les <strong>correcteurs d'usure</strong> s'ajoutent aux jauges : ils permettent de corriger une cote sans modifier le programme. Si un alésage fini mesure 0,02 mm de moins que la cote visée, le régleur modifie l'usure du rayon de l'outil de −0,01 mm (le rayon programmé diminue, donc l'outil recule de 0,01 mm par côté).</p>\n<p>En contournage, la <strong>correction de rayon</strong> permet de programmer directement le contour de la pièce : la commande décale la trajectoire du rayon de l'outil. G41 place l'outil à gauche du contour, G42 à droite, en regardant dans le sens du déplacement ; G40 annule la correction.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'activation et l'annulation de la correction de rayon doivent se faire sur un déplacement linéaire, hors matière, de longueur supérieure au rayon de l'outil. Une activation directement sur le contour provoque une entaille ou une alarme de la commande.</div>"
      },
      {
       "titre": "Structure d'un programme ISO",
       "contenu": "<p>Un programme au format ISO (norme ISO 6983, appelé couramment « code G ») est une suite de <strong>blocs</strong> numérotés, chacun composé de <strong>mots</strong> (une adresse et une valeur). Les fonctions principales sont communes à la plupart des commandes, mais chaque constructeur (Fanuc, Siemens, Heidenhain, NUM…) ajoute ses particularités : la documentation de la commande fait foi.</p>\n<table>\n<thead><tr><th>Fonction</th><th>Signification usuelle</th></tr></thead>\n<tbody>\n<tr><td>G0 / G1</td><td>Déplacement rapide / interpolation linéaire en avance de travail</td></tr>\n<tr><td>G2 / G3</td><td>Interpolation circulaire sens horaire / sens trigonométrique</td></tr>\n<tr><td>G17 / G18 / G19</td><td>Choix du plan XY / XZ / YZ</td></tr>\n<tr><td>G40 / G41 / G42</td><td>Correction de rayon annulée / à gauche / à droite</td></tr>\n<tr><td>G90 / G91</td><td>Cotation absolue / relative</td></tr>\n<tr><td>G94 / G95</td><td>Avance en mm/min / en mm/tr</td></tr>\n<tr><td>G96 / G97</td><td>Vitesse de coupe constante / fréquence de rotation constante</td></tr>\n<tr><td>G81 à G83</td><td>Cycles de perçage simple, avec temporisation, avec débourrage</td></tr>\n<tr><td>M3 / M4 / M5</td><td>Rotation broche horaire / anti-horaire / arrêt</td></tr>\n<tr><td>M6</td><td>Changement d'outil</td></tr>\n<tr><td>M8 / M9</td><td>Arrosage marche / arrêt</td></tr>\n<tr><td>M30</td><td>Fin de programme avec retour au début</td></tr>\n</tbody>\n</table>\n<p>Les fonctions G sont dites <strong>modales</strong> lorsqu'elles restent actives jusqu'à ce qu'une autre fonction du même groupe les remplace (G1 reste actif tant qu'on n'écrit pas G0, G2 ou G3).</p>"
      },
      {
       "titre": "Lire un programme commenté",
       "contenu": "<p>Exemple de programme de fraisage d'une poche rectangulaire de 40 × 30 mm, profondeur 5 mm, origine au centre de la poche, avec une fraise carbure ⌀10 à 3 dents (l'écriture exacte dépend de la commande) :</p>\n<table>\n<thead><tr><th>Bloc</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>N10 G90 G17 G40 G54</td><td>Initialisation : absolu, plan XY, correction annulée, décalage d'origine 1</td></tr>\n<tr><td>N20 T3 M6</td><td>Appel et changement de l'outil 3 (fraise ⌀10)</td></tr>\n<tr><td>N30 S3800 M3</td><td>Broche à 3 800 tr/min, sens horaire (Vc ≈ 120 m/min)</td></tr>\n<tr><td>N40 G0 X0 Y0 Z5 M8</td><td>Approche rapide au-dessus du centre, arrosage</td></tr>\n<tr><td>N50 G1 Z-5 F150</td><td>Plongée lente (idéalement en rampe ou en hélice)</td></tr>\n<tr><td>N60 G41 G1 X20 Y0 F680</td><td>Activation de la correction à gauche en allant vers la paroi programmée X20 : grâce à la correction, le centre de l'outil s'arrête à X15</td></tr>\n<tr><td>N70 Y15 / N80 X-20 / N90 Y-15 / N100 X20 / N110 Y0</td><td>Contour de la poche (40 × 30) en avalant</td></tr>\n<tr><td>N120 G40 G1 X0 Y0</td><td>Retour au centre, annulation de la correction</td></tr>\n<tr><td>N130 G0 Z50 M9</td><td>Dégagement, arrêt arrosage</td></tr>\n<tr><td>N140 M5</td><td>Arrêt broche</td></tr>\n<tr><td>N150 M30</td><td>Fin de programme</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier la vitesse d'avance du bloc N60. 1) f<sub>z</sub> retenue : 0,06 mm/dent. 2) V<sub>f</sub> = f<sub>z</sub> × Z × N = 0,06 × 3 × 3 800 = 684 mm/min. 3) Arrondir à 680 mm/min. 4) Contrôler la fréquence : N = 1 000 × 120 / (π × 10) ≈ 3 820 tr/min, arrondie à 3 800. Les valeurs du programme sont cohérentes.</div>\n<p>Ce programme simplifié laisse au centre une zone non usinée : avec une fraise ⌀10 et un contour de 40 × 30, il faudrait des passes intermédiaires pour vider la poche. C'est précisément le travail des cycles de poche de la commande ou de la FAO.</p>\n<p>Lire un programme, c'est aussi repérer ce qui manque ou ce qui est dangereux : une plongée verticale avec une fraise qui ne coupe pas au centre, un dégagement en Z oublié avant un déplacement rapide en XY, une avance trop forte en entrée de matière, un arrosage arrêté avant la fin de la coupe. Ces points se vérifient bloc par bloc, en suivant mentalement la position de l'outil. Il est utile de noter à côté de chaque bloc la position atteinte par l'outil (X, Y, Z) : toute incohérence saute alors aux yeux, par exemple un déplacement rapide G0 qui traverserait la pièce ou un bridage.</p>"
      },
      {
       "titre": "Premier passage d'un programme en sécurité",
       "contenu": "<p>Tout nouveau programme, ou programme modifié, présente un risque de collision. La démarche de <strong>premier passage</strong> limite ce risque :</p>\n<ol>\n<li>simuler le programme (sur la commande ou en FAO) et vérifier les trajectoires et l'enlèvement de matière ;</li>\n<li>vérifier les jauges, les correcteurs et le décalage d'origine ;</li>\n<li>exécuter le programme <strong>à vide</strong> au-dessus de la pièce (décalage Z de sécurité) ou en mode « essai », avec le potentiomètre d'avance réduit ;</li>\n<li>passer en <strong>bloc à bloc</strong> pour les approches et les premières entrées en matière, en vérifiant la distance restante affichée ;</li>\n<li>usiner la première pièce en surveillant, puis la contrôler entièrement avant de lancer la série.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la première pièce conforme est souvent conservée comme <strong>pièce type</strong> avec son rapport de contrôle. Elle sert de preuve de la validation du programme et de référence en cas de litige.</div>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la main reste toujours près du bouton d'arrêt d'avance pendant un premier passage. Une collision coûte une broche, un outil, une pièce, et peut blesser.</div>"
      }
     ],
     "points_cles": [
      "L'axe Z est parallèle à la broche ; son sens positif éloigne l'outil de la pièce",
      "On programme le mouvement de l'outil, même si la table se déplace",
      "Le décalage d'origine relie l'origine pièce à l'origine machine",
      "Jauges et correcteurs d'usure permettent de corriger une cote sans modifier le programme",
      "G41 et G42 corrigent le rayon d'outil ; l'activation se fait hors matière",
      "Les fonctions G modales restent actives jusqu'à leur remplacement",
      "Le format ISO est commun mais chaque commande a ses particularités",
      "Premier passage : simulation, essai à vide, bloc à bloc, contrôle de la première pièce"
     ],
     "lexique": [
      {
       "terme": "Origine machine",
       "def": "Point fixe défini par le constructeur, référence des mesures de position de la machine."
      },
      {
       "terme": "Origine programme",
       "def": "Point de la pièce à partir duquel sont écrites les coordonnées du programme."
      },
      {
       "terme": "Décalage d'origine",
       "def": "Valeur enregistrée dans la commande qui relie l'origine pièce à l'origine machine."
      },
      {
       "terme": "Jauge d'outil",
       "def": "Dimensions d'un outil (longueur, rayon) connues de la commande."
      },
      {
       "terme": "Correcteur d'usure",
       "def": "Petite valeur ajoutée à la jauge pour ajuster une cote sans modifier le programme."
      },
      {
       "terme": "Correction de rayon",
       "def": "Décalage automatique de la trajectoire de la valeur du rayon de l'outil."
      },
      {
       "terme": "Bloc",
       "def": "Ligne d'un programme CN contenant une ou plusieurs instructions."
      },
      {
       "terme": "Fonction modale",
       "def": "Fonction qui reste active dans les blocs suivants jusqu'à son annulation."
      },
      {
       "terme": "Bloc à bloc",
       "def": "Mode d'exécution où la machine s'arrête après chaque bloc, utilisé pour les essais."
      }
     ]
    },
    {
     "id": "btrpm-fao-simulation",
     "titre": "Fabrication assistée par ordinateur et simulation",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Décrire les étapes d'une préparation en FAO, du modèle au programme",
      "Choisir une stratégie d'usinage adaptée : ébauche, reprise, finition",
      "Paramétrer les tolérances de calcul et les surépaisseurs",
      "Exploiter une simulation d'enlèvement de matière et une simulation machine",
      "Valider un post-processeur et un programme issu de la FAO"
     ],
     "sections": [
      {
       "titre": "Pourquoi programmer en FAO",
       "contenu": "<p>La programmation manuelle convient aux formes simples : contours droits et circulaires, perçages, cycles de tournage. Dès que la pièce comporte des surfaces gauches (empreintes de moules, électrodes, formes de carrosserie), des poches complexes ou des usinages multiaxes, on utilise un logiciel de <strong>fabrication assistée par ordinateur</strong> (FAO). Celui-ci calcule les trajectoires à partir de la maquette numérique, vérifie les collisions et produit le programme par l'intermédiaire d'un <strong>post-processeur</strong>.</p>\n<p>Le travail du technicien en FAO n'est pas de « cliquer » : il consiste à prendre des décisions de fabrication (mise en position, outils, stratégies, conditions de coupe) que le logiciel traduit en trajectoires. Un mauvais choix technologique donne un mauvais programme, même parfaitement calculé.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la FAO automatise le calcul des trajectoires, pas le raisonnement de fabrication. Le processus, la prise de pièce et les conditions de coupe restent de la responsabilité du technicien.</div>"
      },
      {
       "titre": "Les étapes d'une préparation FAO",
       "contenu": "<p>Une préparation suit généralement l'ordre suivant :</p>\n<ol>\n<li><strong>importer le modèle</strong> et vérifier unités, orientation et cotes significatives ;</li>\n<li>définir le <strong>brut</strong> (bloc, cylindre, brut moulé importé, ou pièce issue de l'opération précédente) ;</li>\n<li>définir la <strong>machine</strong> et le <strong>repère de travail</strong>, qui doit correspondre à l'origine pièce choisie au réglage ;</li>\n<li>modéliser ou importer le <strong>porte-pièce</strong> (étau, brides, montage) pour la détection des collisions ;</li>\n<li>choisir les <strong>outils</strong> dans une bibliothèque (géométrie, porte-outil, longueur de sortie, conditions de coupe) ;</li>\n<li>créer les <strong>opérations</strong> : stratégie, zones à usiner, profondeurs, surépaisseurs, tolérances ;</li>\n<li><strong>simuler</strong> l'enlèvement de matière, puis la machine complète ;</li>\n<li><strong>post-processer</strong> et éditer la documentation : liste d'outils, temps estimés, feuille de réglage.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les ateliers constituent des <strong>bibliothèques d'outils</strong> et des <strong>modèles d'opérations</strong> (stratégies et paramètres validés par matière). Un programmeur qui les utilise gagne du temps et obtient des programmes homogènes, que tous les régleurs connaissent.</div>"
      },
      {
       "titre": "Stratégies d'ébauche, de reprise et de finition",
       "contenu": "<p>Les logiciels proposent de nombreuses stratégies, regroupées par rôle :</p>\n<table>\n<thead><tr><th>Rôle</th><th>Stratégies courantes</th><th>Points d'attention</th></tr></thead>\n<tbody>\n<tr><td>Ébauche</td><td>Vidage par niveaux en Z, ébauche dynamique (engagement constant), plongée</td><td>Profondeur et engagement adaptés à l'outil ; laisser une surépaisseur régulière</td></tr>\n<tr><td>Reprise d'ébauche</td><td>Reprise des matières restantes avec un outil plus petit</td><td>Calculer à partir du brut résiduel, pas du brut initial</td></tr>\n<tr><td>Finition de parois</td><td>Contournage par niveaux en Z</td><td>Efficace pour les parois verticales ou très inclinées</td></tr>\n<tr><td>Finition de surfaces peu inclinées</td><td>Balayage parallèle, passes à pas constant, spirale</td><td>Le pas latéral fixe la hauteur de crête</td></tr>\n<tr><td>Finition de coins</td><td>Reprise de rayons, crayonnage</td><td>Outil de rayon inférieur au rayon du modèle</td></tr>\n</tbody>\n</table>\n<p>Pour une fraise hémisphérique de rayon R avec un pas latéral p, la <strong>hauteur de crête</strong> sur une surface plane vaut environ h ≈ p² / (8 × R). Elle joue le même rôle que la rugosité théorique en tournage.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir le pas latéral d'une finition d'empreinte avec une fraise hémisphérique ⌀6 (R = 3 mm) pour obtenir une hauteur de crête de 2 µm, limitant le polissage. 1) Écrire h ≈ p² / (8 × R). 2) Isoler p : p = racine de (8 × R × h). 3) Calculer : 8 × 3 × 0,002 = 0,048 ; p ≈ 0,22 mm. 4) Estimer le temps : une surface de 60 × 40 mm balayée dans le sens de 60 mm demande environ 40 / 0,22 ≈ 182 passes. 5) Comparer avec un pas plus grand suivi de polissage, et choisir la solution la plus économique.</div>"
      },
      {
       "titre": "Tolérances de calcul et surépaisseurs",
       "contenu": "<p>Le logiciel transforme les surfaces en une suite de petits segments de droite ou d'arcs. La <strong>tolérance de calcul</strong> (ou corde) fixe l'écart maximal admis entre la trajectoire et la surface théorique. Une tolérance trop large laisse des facettes visibles ; une tolérance trop fine crée des programmes très longs que la commande n'arrive pas toujours à exécuter à la vitesse programmée.</p>\n<p>En finition, on prend une tolérance de calcul de l'ordre du dixième de la tolérance de forme demandée sur la surface. En ébauche, une tolérance plus large accélère le calcul sans conséquence.</p>\n<p>Les <strong>surépaisseurs</strong> se définissent séparément pour les parois (radiales) et les fonds (axiales). Elles doivent être cohérentes d'une opération à l'autre : la finition doit enlever une épaisseur régulière, de l'ordre de quelques dixièmes de millimètre, pour que l'outil travaille dans des conditions stables.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une surépaisseur négative est parfois utilisée volontairement (par exemple pour créer le jeu d'une électrode d'électroérosion, ou pour reprendre une cote en contournage). Une valeur négative saisie par erreur fait entrer l'outil dans la pièce finie : la simulation doit toujours être relue avec cette question en tête.</div>"
      },
      {
       "titre": "Simulation d'enlèvement de matière et simulation machine",
       "contenu": "<p>Deux niveaux de simulation se complètent :</p>\n<ul>\n<li>la <strong>simulation d'enlèvement de matière</strong> montre le brut se transformer opération par opération ; elle permet de comparer le résultat au modèle (zones de matière restante, zones entaillées) et de détecter les collisions entre les parties non coupantes (porte-outil, attachement) et la pièce ;</li>\n<li>la <strong>simulation machine</strong> utilise un modèle numérique de la machine (axes, courses, carters, broche, porte-pièce) et le programme post-processé ; elle vérifie les dépassements de course, les collisions avec la table ou les carters, et l'ordre réel des mouvements, en particulier en 5 axes.</li>\n</ul>\n<p>Certains logiciels simulent directement le code ISO lu par un modèle de la commande : on parle alors de <strong>jumeau numérique</strong> de la machine. C'est le moyen le plus fiable de valider un programme sans immobiliser la machine réelle.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> analyser une simulation avant transfert. 1) Lancer la comparaison au modèle et relever les zones rouges (entailles) et bleues (matière restante). 2) Pour chaque zone, retrouver l'opération en cause. 3) Vérifier les longueurs de sortie d'outils déclarées et les comparer à celles du préréglage. 4) Relire les dégagements entre opérations. 5) Contrôler le temps estimé. 6) Ne transférer qu'après correction de chaque anomalie, en notant l'indice du programme.</div>"
      },
      {
       "titre": "Post-processeur et validation finale",
       "contenu": "<p>Le <strong>post-processeur</strong> est spécifique à un couple machine-commande. Il traduit les trajectoires en code ISO avec les particularités de la commande : format des nombres, cycles, gestion des axes rotatifs, appel d'outils, fonctions de lissage des trajectoires pour l'usinage grande vitesse. Un post-processeur mal adapté peut produire un programme apparemment correct mais dangereux (axe rotatif qui tourne dans le mauvais sens, cycle ignoré).</p>\n<p>La validation d'un programme issu de la FAO reprend la démarche de premier passage : vérifier l'en-tête (outils, origine, unités), comparer la liste d'outils du programme à celle du magasin, exécuter les premières opérations en bloc à bloc, puis contrôler la première pièce.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> toute modification faite à la machine sur un programme FAO (avance, profondeur, correction de trajectoire) doit être reportée dans le fichier FAO. Sinon, la prochaine génération du programme reproduira l'erreur corrigée.</div>"
      },
      {
       "titre": "Spécificités de la FAO multiaxe et du tournage-fraisage",
       "contenu": "<p>Les machines modernes ajoutent des axes rotatifs (centres 5 axes) ou combinent tournage et fraisage (tours à outils motorisés et axe C, tours avec axe Y, contre-broche). La FAO y apporte des fonctions supplémentaires :</p>\n<ul>\n<li>l'<strong>usinage 3+2</strong> (ou positionné) : les axes rotatifs orientent la pièce, puis restent bloqués pendant un usinage classique en trois axes ; le logiciel calcule des plans de travail inclinés ;</li>\n<li>l'<strong>usinage 5 axes continu</strong> : l'orientation de l'outil varie pendant la coupe pour suivre une surface, éviter une collision ou garder un angle de coupe favorable ;</li>\n<li>le <strong>transfert de pièce</strong> entre broche principale et contre-broche, qui permet de terminer la pièce en une seule fois sur un tour multifonction.</li>\n</ul>\n<p>Plus la machine est complexe, plus la simulation machine devient indispensable : les axes rotatifs déplacent la pièce dans des zones où un carter, la tête de broche ou un bridage peuvent entrer en collision, sans que la simulation de l'enlèvement de matière seule ne le montre. Le technicien vérifie aussi le choix de la solution angulaire (une même orientation peut être atteinte par deux positions des axes rotatifs) et les limites de course.</p>\n<p>Ces machines réduisent le nombre de phases et de reprises : la préparation FAO est plus longue, mais la réalisation complète en une mise en position améliore la précision et le délai.</p>"
      }
     ],
     "points_cles": [
      "La FAO calcule les trajectoires mais les choix de fabrication restent humains",
      "Le repère FAO doit correspondre à l'origine pièce prise au réglage",
      "Ébauche, reprise et finition utilisent des stratégies différentes",
      "Hauteur de crête en balayage : h ≈ p² / (8 R)",
      "La tolérance de calcul doit être adaptée à l'opération",
      "Les surépaisseurs se définissent pour les parois et pour les fonds",
      "La simulation machine vérifie courses, collisions et mouvements réels",
      "Le post-processeur est propre à une machine et à une commande",
      "Les corrections faites à la machine doivent être reportées dans la FAO"
     ],
     "lexique": [
      {
       "terme": "FAO",
       "def": "Fabrication assistée par ordinateur : calcul des trajectoires d'outils à partir d'un modèle numérique."
      },
      {
       "terme": "Brut résiduel",
       "def": "Forme de la pièce après une opération, servant de point de départ à l'opération suivante."
      },
      {
       "terme": "Stratégie d'usinage",
       "def": "Mode de parcours de l'outil choisi pour une opération (niveaux en Z, balayage, contournage…)."
      },
      {
       "terme": "Hauteur de crête",
       "def": "Hauteur de matière laissée entre deux passages voisins d'un outil à bout rond."
      },
      {
       "terme": "Pas latéral",
       "def": "Distance entre deux passes voisines d'une finition."
      },
      {
       "terme": "Tolérance de calcul",
       "def": "Écart maximal admis entre la trajectoire calculée et la surface du modèle."
      },
      {
       "terme": "Simulation machine",
       "def": "Simulation du programme sur un modèle numérique complet de la machine-outil."
      },
      {
       "terme": "Jumeau numérique",
       "def": "Modèle numérique fidèle d'une machine et de sa commande, utilisé pour valider les programmes."
      },
      {
       "terme": "Post-processeur",
       "def": "Traducteur des trajectoires FAO en code adapté à une machine et à sa commande."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 4 — Contrôler, améliorer et produire en sécurité",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btrpm-metrologie",
     "titre": "Métrologie dimensionnelle et géométrique",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Expliquer les notions d'étalonnage, de raccordement et d'incertitude de mesure",
      "Appliquer une règle de décision de conformité tenant compte de l'incertitude",
      "Choisir un moyen de mesure adapté à une spécification",
      "Décrire le principe et l'exploitation d'une machine à mesurer tridimensionnelle",
      "Mesurer et interpréter un état de surface"
     ],
     "sections": [
      {
       "titre": "Mesurer, c'est aussi connaître son erreur",
       "contenu": "<p>Le cours de seconde a présenté les instruments courants (pied à coulisse, micromètre, comparateur, calibres) et la lecture des mesures. Le technicien de bac pro doit aller plus loin : toute mesure comporte une <strong>erreur</strong>, et l'on ne peut pas déclarer une pièce conforme sans savoir quelle confiance accorder au résultat.</p>\n<p>Trois notions sont fondamentales :</p>\n<ul>\n<li>l'<strong>étalonnage</strong> : comparaison de l'instrument à un étalon de valeur connue, qui établit l'écart de l'instrument et l'incertitude associée ;</li>\n<li>le <strong>raccordement</strong> (ou traçabilité métrologique) : chaîne ininterrompue d'étalonnages qui relie l'instrument de l'atelier aux étalons nationaux, puis à la définition du mètre ;</li>\n<li>l'<strong>incertitude de mesure</strong> : intervalle autour du résultat dans lequel on estime que se trouve la valeur vraie, avec un niveau de confiance donné (souvent 95 %).</li>\n</ul>\n<p>Un résultat s'écrit donc avec son incertitude : « 25,012 mm ± 0,003 mm ». Sans elle, le chiffre ne dit pas grand-chose.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la résolution d'un instrument (le plus petit écart affiché) n'est pas sa précision. Un pied à coulisse numérique qui affiche le centième peut avoir une incertitude de plusieurs centièmes.</div>"
      },
      {
       "titre": "Sources d'erreur et conditions de mesure",
       "contenu": "<p>Les causes d'erreur se regroupent par la méthode des « 5M » appliquée à la mesure :</p>\n<table>\n<thead><tr><th>Cause</th><th>Exemples</th></tr></thead>\n<tbody>\n<tr><td>Moyen</td><td>Écart de justesse, usure des touches, jeu, étalon mal choisi</td></tr>\n<tr><td>Méthode</td><td>Nombre de points insuffisant, mauvais alignement, mesure d'une taille locale au lieu d'une taille globale</td></tr>\n<tr><td>Main-d'œuvre</td><td>Effort de mesure excessif, lecture en biais (parallaxe), manque d'expérience</td></tr>\n<tr><td>Milieu</td><td>Température, vibrations, poussière, éclairage</td></tr>\n<tr><td>Matière (pièce)</td><td>Défauts de forme, bavures, pièce déformable, pièce encore chaude</td></tr>\n</tbody>\n</table>\n<p>La température de référence pour les mesures dimensionnelles est <strong>20 °C</strong> (ISO 1). Un acier se dilate d'environ 11,5 µm par mètre et par degré. Une pièce d'acier de 200 mm mesurée à 30 °C juste après usinage est plus longue d'environ 200 × 0,0000115 × 10 ≈ 0,023 mm qu'à 20 °C : de quoi rendre une pièce conforme apparemment non conforme, ou l'inverse.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> mesurer une pièce chaude sortant de la machine, avec un instrument qui vient d'être tenu longtemps en main, cumule deux erreurs thermiques. On laisse la pièce et l'instrument se stabiliser à la température de la salle avant toute mesure de précision.</div>"
      },
      {
       "titre": "Décider de la conformité en tenant compte de l'incertitude",
       "contenu": "<p>La norme ISO 14253-1 propose une règle de décision : pour <strong>prouver la conformité</strong>, le résultat doit se trouver dans la tolérance réduite de l'incertitude de chaque côté (zone de conformité) ; pour <strong>prouver la non-conformité</strong>, il doit se trouver hors de la tolérance élargie de l'incertitude. Entre les deux, il existe une zone d'<strong>ambiguïté</strong> où l'on ne peut pas conclure avec ce moyen de mesure.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> cote 40 ± 0,02, mesure au micromètre avec une incertitude U = 0,004 mm. 1) Tolérance : 39,98 à 40,02. 2) Zone de conformité prouvée : 39,984 à 40,016. 3) Mesure obtenue : 40,018. 4) Le résultat est dans la tolérance mais hors de la zone de conformité : zone d'ambiguïté. 5) Décision : appliquer la règle convenue avec le client, ou remesurer avec un moyen plus précis (incertitude plus faible), par exemple un comparateur sur cales étalons.</div>\n<p>Une règle pratique d'atelier recommande que l'incertitude du moyen de mesure soit petite devant l'intervalle de tolérance : on vise souvent un rapport d'au moins 1 à 4, voire 1 à 10. Si l'intervalle de tolérance est de 0,02 mm, un pied à coulisse ne convient pas ; un micromètre ou un comparateur étalonné s'impose.</p>"
      },
      {
       "titre": "La machine à mesurer tridimensionnelle",
       "contenu": "<p>La <strong>machine à mesurer tridimensionnelle</strong> (MMT) déplace un <strong>palpeur</strong> selon trois axes et enregistre les coordonnées des points touchés sur la pièce. Le logiciel <strong>associe</strong> ensuite des éléments géométriques à ces points (plan, cylindre, cône, sphère, cercle) selon un critère (moindres carrés, minimax, élément tangent extérieur) et calcule les caractéristiques spécifiées : distances, angles, formes, positions.</p>\n<p>Une gamme de mesure sur MMT comporte :</p>\n<ol>\n<li>la <strong>qualification du palpeur</strong> sur une sphère étalon (diamètre effectif de la bille, orientation des stylets) ;</li>\n<li>le <strong>dégauchissage</strong> : construction du repère pièce à partir des références du dessin (plan primaire, droite secondaire, point tertiaire) ;</li>\n<li>la mesure des éléments, avec un nombre et une répartition de points suffisants ;</li>\n<li>le calcul des spécifications et l'édition du <strong>rapport de contrôle</strong>.</li>\n</ol>\n<p>Le dégauchissage reproduit exactement le système de références du dessin : c'est ce qui rend la MMT adaptée au contrôle des tolérances ISO GPS.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les programmes de mesure sont souvent créés hors ligne à partir du modèle CAO, puis exécutés automatiquement. Le technicien de production lance le programme, lit le rapport et réagit aux écarts ; le métrologue conçoit et valide les programmes.</div>"
      },
      {
       "titre": "Contrôle en atelier et palpage en machine",
       "contenu": "<p>Tout ne passe pas par la MMT. En atelier, on utilise :</p>\n<ul>\n<li>la <strong>colonne de mesure</strong> (mesureur de hauteur électronique) sur marbre, pour les hauteurs, entraxes et diamètres dans un plan ;</li>\n<li>le <strong>comparateur</strong> sur support, pour les défauts de parallélisme, de planéité et les battements entre pointes ;</li>\n<li>les <strong>alésomètres</strong> à deux ou trois touches, réglés sur une bague étalon, pour les alésages précis ;</li>\n<li>les <strong>calibres fonctionnels</strong> et tampons lisses ou filetés « entre / n'entre pas » ;</li>\n<li>le <strong>palpeur de mesure en machine</strong>, qui contrôle une cote pendant le cycle et corrige automatiquement l'usure de l'outil.</li>\n</ul>\n<p>Le palpage en machine mesure la pièce dans les conditions de la machine : il ne détecte pas une erreur de géométrie de la machine elle-même. Il complète donc, sans la remplacer, une vérification sur un moyen indépendant.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le moyen de contrôle découle de la spécification : une localisation se contrôle sur un montage qui réalise les références ou sur MMT, une taille locale au micromètre, une aptitude à l'assemblage au calibre fonctionnel.</div>"
      },
      {
       "titre": "États de surface",
       "contenu": "<p>L'<strong>état de surface</strong> se mesure avec un <strong>rugosimètre</strong> à palpeur : une pointe de diamant parcourt la surface sur une longueur d'évaluation, et l'appareil calcule des paramètres à partir du profil filtré.</p>\n<table>\n<thead><tr><th>Paramètre</th><th>Définition simplifiée</th><th>Usage</th></tr></thead>\n<tbody>\n<tr><td>Ra</td><td>Moyenne arithmétique des écarts du profil par rapport à la ligne moyenne</td><td>Paramètre le plus courant, peu sensible aux défauts isolés</td></tr>\n<tr><td>Rz</td><td>Hauteur moyenne maximale du profil sur plusieurs longueurs de base</td><td>Étanchéité, surfaces de contact</td></tr>\n<tr><td>Rt</td><td>Hauteur totale du profil sur la longueur d'évaluation</td><td>Détecte rayures et défauts isolés</td></tr>\n</tbody>\n</table>\n<p>Ordres de grandeur de Ra : tournage ou fraisage d'ébauche 6,3 à 12,5 µm ; finition 0,8 à 3,2 µm ; rectification 0,2 à 0,8 µm ; polissage d'empreinte de moule inférieur à 0,1 µm. Sur le dessin, l'indication suit la norme ISO 21920-1 (qui remplace ISO 1302) : symbole de base, paramètre et valeur limite, éventuellement procédé imposé et orientation des stries.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> mesurer parallèlement aux stries d'usinage donne une valeur de rugosité très faible et trompeuse. Sauf indication contraire, on mesure perpendiculairement aux stries.</div>"
      },
      {
       "titre": "Gérer les moyens de mesure",
       "contenu": "<p>Dans une entreprise certifiée ISO 9001, chaque moyen de mesure est identifié (numéro), inscrit dans une liste, et vérifié ou étalonné à une <strong>périodicité</strong> définie. Une étiquette indique la date de la prochaine vérification. Un instrument en retard de vérification, tombé ou douteux est isolé et ne doit plus servir.</p>\n<p>Lorsqu'un instrument se révèle hors tolérance lors de sa vérification, l'entreprise doit rechercher les produits mesurés avec lui depuis la dernière vérification et évaluer le risque. C'est pourquoi on note sur les fiches de contrôle le numéro de l'instrument utilisé.</p>\n<p>Pour s'assurer qu'un procédé de mesure convient, on peut réaliser une étude de <strong>répétabilité et reproductibilité</strong> (R&amp;R) : plusieurs opérateurs mesurent plusieurs fois les mêmes pièces. On compare ensuite la variation due au moyen de mesure à la tolérance : plus cette part est faible, plus le moyen est capable.</p>\n<p>Au quotidien, le technicien applique quelques gestes simples qui garantissent la qualité de ses mesures : vérifier le zéro d'un micromètre ou d'un comparateur sur un étalon avant usage, nettoyer les touches et la pièce, ranger les instruments dans leur boîte, ne jamais mesurer une pièce en rotation, et noter les résultats immédiatement plutôt que de mémoire.</p>"
      }
     ],
     "points_cles": [
      "Tout résultat de mesure s'accompagne d'une incertitude",
      "L'étalonnage et le raccordement relient l'instrument aux étalons nationaux",
      "La température de référence des mesures dimensionnelles est 20 °C",
      "Selon ISO 14253-1, la conformité se prouve dans la tolérance réduite de l'incertitude",
      "L'incertitude du moyen doit rester petite devant l'intervalle de tolérance",
      "La MMT associe des éléments géométriques aux points palpés et reproduit les références",
      "Le palpage en machine ne remplace pas un contrôle par un moyen indépendant",
      "On mesure la rugosité perpendiculairement aux stries",
      "Un instrument hors délai de vérification ne doit pas être utilisé"
     ],
     "lexique": [
      {
       "terme": "Étalonnage",
       "def": "Comparaison d'un instrument à un étalon pour déterminer son écart et l'incertitude associée."
      },
      {
       "terme": "Raccordement",
       "def": "Chaîne d'étalonnages reliant un instrument aux étalons nationaux."
      },
      {
       "terme": "Incertitude de mesure",
       "def": "Intervalle autour du résultat contenant la valeur vraie avec un niveau de confiance donné."
      },
      {
       "terme": "Résolution",
       "def": "Plus petite variation que l'instrument peut afficher."
      },
      {
       "terme": "Zone d'ambiguïté",
       "def": "Zone proche des limites de tolérance où l'on ne peut prouver ni la conformité ni la non-conformité."
      },
      {
       "terme": "MMT",
       "def": "Machine à mesurer tridimensionnelle, qui palpe des points et calcule des éléments géométriques."
      },
      {
       "terme": "Dégauchissage",
       "def": "Construction du repère de mesure à partir des références de la pièce."
      },
      {
       "terme": "Ra",
       "def": "Écart moyen arithmétique du profil de rugosité."
      },
      {
       "terme": "Étude R&R",
       "def": "Étude de répétabilité et reproductibilité qui évalue la variation propre au moyen de mesure."
      }
     ]
    },
    {
     "id": "btrpm-maitrise-statistique",
     "titre": "Maîtrise statistique des procédés et capabilité",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Distinguer causes communes et causes spéciales de variation",
      "Calculer moyenne et écart-type d'un échantillon et les interpréter",
      "Construire et lire une carte de contrôle moyenne-étendue",
      "Calculer et interpréter les indices de capabilité Cp et Cpk",
      "Réagir correctement à un signal de dérive en production"
     ],
     "sections": [
      {
       "titre": "Toute production varie",
       "contenu": "<p>Deux pièces fabriquées successivement avec le même réglage ne sont jamais identiques. La <strong>variabilité</strong> a deux types de causes :</p>\n<ul>\n<li>les <strong>causes communes</strong>, nombreuses et faibles, toujours présentes (petites vibrations, hétérogénéité de la matière, jeux de la machine) ; elles donnent une dispersion stable et prévisible ;</li>\n<li>les <strong>causes spéciales</strong> (ou assignables), ponctuelles et identifiables : usure d'outil, changement de lot matière, échauffement, copeau sous la pièce, erreur de correcteur ; elles provoquent des décalages ou des dérives.</li>\n</ul>\n<p>La <strong>maîtrise statistique des procédés</strong> (MSP, ou SPC en anglais) a pour but de détecter rapidement l'apparition de causes spéciales, avant que la production ne sorte de la tolérance. On passe ainsi d'une logique de tri (contrôler toutes les pièces et rebuter les mauvaises) à une logique de prévention (piloter le procédé pour ne pas en fabriquer).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un procédé « sous contrôle » ne présente que des causes communes. On ne règle pas un procédé sous contrôle à chaque mesure : on ne fait qu'augmenter sa dispersion.</div>"
      },
      {
       "titre": "Moyenne, écart-type et loi normale",
       "contenu": "<p>Pour décrire une série de mesures, on utilise :</p>\n<ul>\n<li>la <strong>moyenne</strong> x̄, somme des valeurs divisée par leur nombre, qui indique la position de la production ;</li>\n<li>l'<strong>étendue</strong> R, différence entre la plus grande et la plus petite valeur ;</li>\n<li>l'<strong>écart-type</strong> σ, qui mesure la dispersion autour de la moyenne.</li>\n</ul>\n<p>Pour un procédé stable, les mesures se répartissent souvent selon une <strong>loi normale</strong> (courbe en cloche). Environ 68 % des valeurs sont comprises entre x̄ − σ et x̄ + σ, 95 % entre x̄ − 2σ et x̄ + 2σ, et 99,73 % entre x̄ − 3σ et x̄ + 3σ. On appelle souvent <strong>dispersion du procédé</strong> la largeur 6σ.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer moyenne et étendue d'un prélèvement de cinq pièces. Mesures (mm) : 20,012 ; 20,008 ; 20,015 ; 20,010 ; 20,005. 1) Somme : 100,050. 2) Moyenne : 100,050 / 5 = 20,010 mm. 3) Valeur maxi 20,015, valeur mini 20,005. 4) Étendue : R = 0,010 mm. 5) Ces deux valeurs sont reportées sur la carte de contrôle.</div>\n<p>Dans la pratique, la calculatrice ou le logiciel de MSP calcule l'écart-type ; il est cependant important d'en comprendre le sens : plus σ est petit, plus les pièces se ressemblent.</p>"
      },
      {
       "titre": "La carte de contrôle moyenne-étendue",
       "contenu": "<p>La <strong>carte de contrôle</strong> la plus utilisée en mécanique est la carte x̄-R. À intervalles réguliers, l'opérateur prélève un petit échantillon (souvent 5 pièces consécutives), mesure la caractéristique suivie, calcule moyenne et étendue et les reporte sur deux graphiques. Chaque graphique porte :</p>\n<ul>\n<li>une <strong>ligne centrale</strong> (moyenne des moyennes, moyenne des étendues) ;</li>\n<li>des <strong>limites de contrôle</strong> supérieure et inférieure (LSC, LIC), calculées à partir de la dispersion naturelle du procédé, situées à environ trois écarts-types des moyennes d'échantillons.</li>\n</ul>\n<p>Les limites de contrôle ne sont pas les limites de tolérance : elles traduisent ce que le procédé fait naturellement, alors que la tolérance traduit ce que le client exige. Une moyenne peut sortir des limites de contrôle alors que toutes les pièces sont encore dans la tolérance : c'est justement l'intérêt de la carte, qui alerte avant les rebuts.</p>\n<table>\n<thead><tr><th>Signal sur la carte des moyennes</th><th>Interprétation</th><th>Réaction</th></tr></thead>\n<tbody>\n<tr><td>Un point hors limites de contrôle</td><td>Cause spéciale probable</td><td>Arrêter, chercher la cause, régler, contrôler les pièces depuis le dernier prélèvement</td></tr>\n<tr><td>Sept points consécutifs du même côté de la ligne centrale</td><td>Décalage du réglage</td><td>Recentrer le réglage</td></tr>\n<tr><td>Sept points consécutifs croissants ou décroissants</td><td>Dérive (usure d'outil, échauffement)</td><td>Anticiper la correction ou le changement d'outil</td></tr>\n<tr><td>Points tous très proches de la ligne centrale</td><td>Limites mal calculées ou mesures douteuses</td><td>Vérifier le calcul et le moyen de mesure</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur la carte des étendues, une augmentation brutale signale une hausse de la dispersion (outil ébréché, bridage desserré, vibration). Corriger la moyenne ne sert alors à rien : il faut trouver la cause de la dispersion.</div>"
      },
      {
       "titre": "La capabilité du procédé",
       "contenu": "<p>La <strong>capabilité</strong> exprime l'aptitude d'un procédé à produire dans la tolérance. On la mesure par deux indices, calculés sur un procédé stable :</p>\n<ul>\n<li><strong>Cp</strong> = IT / (6σ) compare la largeur de la tolérance à la dispersion, sans tenir compte du centrage ;</li>\n<li><strong>Cpk</strong> = min[(TS − x̄) / (3σ) ; (x̄ − TI) / (3σ)] tient compte du centrage : c'est la distance entre la moyenne et la limite la plus proche, rapportée à la demi-dispersion.</li>\n</ul>\n<p>On a toujours Cpk ≤ Cp ; l'égalité correspond à un procédé parfaitement centré. De nombreux donneurs d'ordres exigent un Cpk au moins égal à 1,33 sur les caractéristiques importantes, parfois davantage pour les caractéristiques de sécurité ; la valeur exigée se lit dans le cahier des charges du client.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> cote 20 +0,03/0, soit TI = 20,000 et TS = 20,030. Procédé stable : x̄ = 20,010, σ = 0,004. 1) IT = 0,030. 2) Cp = 0,030 / (6 × 0,004) = 0,030 / 0,024 = 1,25. 3) Côté supérieur : (20,030 − 20,010) / (3 × 0,004) = 0,020 / 0,012 ≈ 1,67. 4) Côté inférieur : (20,010 − 20,000) / 0,012 ≈ 0,83. 5) Cpk = 0,83. 6) Conclusion : la dispersion est presque acceptable, mais le procédé est décentré vers la limite inférieure. Recentrer à 20,015 donnerait Cpk = Cp = 1,25 ; il faudrait encore réduire la dispersion pour atteindre 1,33.</div>"
      },
      {
       "titre": "Mettre en place le suivi au poste",
       "contenu": "<p>La MSP ne s'applique pas à toutes les cotes. On choisit les <strong>caractéristiques critiques</strong> : celles qui conditionnent la fonction ou la sécurité, souvent repérées sur le plan client par un symbole spécifique, et celles dont la capabilité est faible. Pour chacune, on définit :</p>\n<ul>\n<li>le moyen de mesure (de préférence à affichage numérique, relié à un logiciel) ;</li>\n<li>la taille et la fréquence des prélèvements ;</li>\n<li>les limites de contrôle, calculées sur une première série d'échantillons d'un procédé stable ;</li>\n<li>les règles de réaction écrites, affichées au poste.</li>\n</ul>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> en décolletage et en usinage automobile, les mesures sont souvent saisies automatiquement depuis l'instrument dans un logiciel de MSP qui trace la carte et déclenche une alarme. L'opérateur reste responsable de l'analyse du signal et de la réaction, qu'il consigne dans le <strong>journal de bord</strong> de la carte : heure, cause trouvée, action menée.</div>"
      },
      {
       "titre": "MSP et amélioration du procédé",
       "contenu": "<p>Les cartes de contrôle sont aussi une source d'amélioration. Un historique de cartes permet de connaître la durée de vie réelle des outils, l'effet d'un changement de lubrifiant ou de fournisseur matière, et les périodes de la journée où les dérives thermiques apparaissent (démarrage à froid, par exemple). Ces informations servent à revoir les fréquences de changement d'outils, à programmer un préchauffage machine ou à corriger automatiquement l'usure.</p>\n<p>Quand la capabilité est insuffisante, on agit d'abord sur les causes de dispersion (rigidité du montage, outil, stabilité thermique, moyen de mesure), puis seulement sur le réglage. Si aucune action ne suffit, le procédé n'est pas adapté à la tolérance demandée : il faut changer de machine ou de procédé, ou négocier la tolérance avec le client, et en attendant mettre en place un contrôle à 100 %.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la carte de contrôle surveille la stabilité ; la capabilité juge l'aptitude. Un procédé doit être stable avant que l'on calcule sa capabilité.</div>"
      },
      {
       "titre": "Capabilité machine et capabilité procédé",
       "contenu": "<p>On distingue deux niveaux d'étude, qui ne se mènent pas au même moment :</p>\n<table>\n<thead><tr><th>Étude</th><th>Indices</th><th>Conditions</th><th>Moment</th></tr></thead>\n<tbody>\n<tr><td>Capabilité machine</td><td>Cm, Cmk</td><td>Courte durée, pièces consécutives (souvent 50), même opérateur, même lot matière, même outil</td><td>Réception d'une machine, validation d'un nouveau programme</td></tr>\n<tr><td>Capabilité procédé</td><td>Cp, Cpk (ou Pp, Ppk selon les conventions)</td><td>Longue durée, toutes les sources de variation : équipes, lots, changements d'outils, température</td><td>Production courante</td></tr>\n</tbody>\n</table>\n<p>Les exigences de capabilité machine sont généralement plus sévères (par exemple Cmk ≥ 1,67) car la dispersion à court terme est plus faible que la dispersion de production : si la machine seule consomme déjà presque toute la tolérance, le procédé complet ne pourra pas la respecter.</p>\n<p>Ces études demandent un moyen de mesure capable : si la dispersion de la mesure représente une part importante de la tolérance, les indices calculés sont pessimistes et faussent la décision. C'est pourquoi l'étude R&amp;R du moyen de mesure précède l'étude de capabilité.</p>"
      }
     ],
     "points_cles": [
      "Causes communes : variation stable ; causes spéciales : décalages et dérives identifiables",
      "On ne règle pas un procédé sous contrôle à chaque mesure",
      "Entre x̄ − 3σ et x̄ + 3σ se trouvent 99,73 % des valeurs d'une loi normale",
      "La carte x̄-R suit la position et la dispersion d'un procédé",
      "Les limites de contrôle ne sont pas les limites de tolérance",
      "Sept points du même côté ou en tendance signalent un décalage ou une dérive",
      "Cp = IT / 6σ ; Cpk tient compte du centrage et vaut au plus Cp",
      "Un Cpk de 1,33 est une exigence fréquente, à vérifier dans le cahier des charges client",
      "La stabilité se vérifie avant le calcul de capabilité"
     ],
     "lexique": [
      {
       "terme": "MSP",
       "def": "Maîtrise statistique des procédés : pilotage d'une production par l'analyse statistique de mesures prélevées."
      },
      {
       "terme": "Cause commune",
       "def": "Source de variation permanente et aléatoire d'un procédé stable."
      },
      {
       "terme": "Cause spéciale",
       "def": "Source de variation ponctuelle et identifiable qui perturbe le procédé."
      },
      {
       "terme": "Écart-type",
       "def": "Mesure de la dispersion des valeurs autour de leur moyenne."
      },
      {
       "terme": "Étendue",
       "def": "Différence entre la plus grande et la plus petite valeur d'un échantillon."
      },
      {
       "terme": "Carte de contrôle",
       "def": "Graphique de suivi des moyennes et des dispersions d'échantillons avec des limites de contrôle."
      },
      {
       "terme": "Limite de contrôle",
       "def": "Limite calculée à partir de la variabilité naturelle du procédé, distincte de la tolérance."
      },
      {
       "terme": "Capabilité",
       "def": "Aptitude d'un procédé à produire dans la tolérance, mesurée par Cp et Cpk."
      },
      {
       "terme": "Caractéristique critique",
       "def": "Caractéristique d'un produit dont la non-conformité affecte la fonction ou la sécurité."
      }
     ]
    },
    {
     "id": "btrpm-amelioration-continue",
     "titre": "Performance de production et amélioration continue",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Calculer et décomposer le taux de rendement synthétique d'un poste",
      "Appliquer la méthode SMED pour réduire un temps de changement de série",
      "Conduire une résolution de problème avec les outils qualité usuels",
      "Mettre en œuvre les 5S et le management visuel au poste",
      "Situer ces démarches dans le système de management de la qualité"
     ],
     "sections": [
      {
       "titre": "Mesurer la performance d'un moyen de production",
       "contenu": "<p>Une machine-outil coûte cher : chaque heure où elle ne produit pas de pièces bonnes est une perte. L'indicateur de référence est le <strong>taux de rendement synthétique</strong> (TRS), défini par la norme NF E60-182. Il se décompose en trois taux :</p>\n<ul>\n<li>le <strong>taux de disponibilité</strong> : temps de fonctionnement / temps requis (pertes : pannes, changements de série, attentes de matière ou d'opérateur) ;</li>\n<li>le <strong>taux de performance</strong> : temps net / temps de fonctionnement (pertes : micro-arrêts, cadence réduite) ;</li>\n<li>le <strong>taux de qualité</strong> : temps utile / temps net (pertes : rebuts et retouches).</li>\n</ul>\n<p>TRS = disponibilité × performance × qualité. On peut aussi le calculer directement : TRS = (nombre de pièces bonnes × temps de cycle de référence) / temps requis.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calcul du TRS d'un tour CN sur un poste de 8 h (480 min) avec 30 min de pause, soit un temps requis de 450 min. Arrêts : changement de série 45 min, panne 15 min. Temps de cycle de référence : 1,5 min. Pièces produites : 220, dont 10 rebutées. 1) Temps de fonctionnement : 450 − 60 = 390 min ; disponibilité = 390 / 450 ≈ 0,867. 2) Temps net : 220 × 1,5 = 330 min ; performance = 330 / 390 ≈ 0,846. 3) Temps utile : 210 × 1,5 = 315 min ; qualité = 315 / 330 ≈ 0,955. 4) TRS ≈ 0,867 × 0,846 × 0,955 ≈ 0,70, soit 70 %. 5) Vérification directe : 315 / 450 = 0,70. 6) La perte principale est la disponibilité (changement de série) : c'est la priorité d'amélioration.</div>"
      },
      {
       "titre": "Réduire les changements de série : la méthode SMED",
       "contenu": "<p>La méthode <strong>SMED</strong> (Single Minute Exchange of Die, changement d'outillage en moins de dix minutes), développée dans l'industrie automobile japonaise pour les changements d'outils de presse, s'applique à tous les changements de série. Elle se déroule en quatre étapes :</p>\n<ol>\n<li><strong>observer et chronométrer</strong> le changement réel, en filmant si possible, et lister toutes les opérations ;</li>\n<li><strong>séparer</strong> les opérations <strong>internes</strong> (qui exigent l'arrêt de la machine) des opérations <strong>externes</strong> (réalisables pendant que la machine produit) ;</li>\n<li><strong>convertir</strong> le plus possible d'opérations internes en externes : préréglage des outils hors machine, préparation des montages sur palettes, préchauffage d'un moule ;</li>\n<li><strong>réduire</strong> la durée des opérations restantes : serrages rapides, butées et centreurs, standardisation des hauteurs et des fixations, suppression des réglages par essais.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> sur une presse à injecter, le changement de moule peut passer de plus d'une heure à une quinzaine de minutes avec des brides rapides, des raccords d'eau multiples, un chariot de changement et un moule préchauffé. La série minimale rentable diminue, ce qui permet de produire juste ce qui est commandé.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> réduire un temps de changement ne doit jamais supprimer une étape de sécurité (consignation, vérification de serrage) ni la validation de la première pièce. Ces étapes peuvent être simplifiées, mais pas oubliées.</div>"
      },
      {
       "titre": "Le lean manufacturing et la chasse aux gaspillages",
       "contenu": "<p>Le <strong>lean manufacturing</strong> (production « au plus juste ») vise à éliminer tout ce qui n'apporte pas de valeur au client. Il identifie traditionnellement sept <strong>gaspillages</strong> (muda) :</p>\n<table>\n<thead><tr><th>Gaspillage</th><th>Exemple en atelier de mécanique</th></tr></thead>\n<tbody>\n<tr><td>Surproduction</td><td>Usiner 500 pièces quand 200 sont commandées</td></tr>\n<tr><td>Attentes</td><td>Opérateur qui attend la validation d'une première pièce</td></tr>\n<tr><td>Transports</td><td>Pièces qui traversent l'atelier plusieurs fois</td></tr>\n<tr><td>Traitements inutiles</td><td>Finition plus fine que la spécification</td></tr>\n<tr><td>Stocks</td><td>Encours entre les machines</td></tr>\n<tr><td>Mouvements inutiles</td><td>Recherche d'un outil, d'une clé, d'un instrument</td></tr>\n<tr><td>Défauts</td><td>Rebuts, retouches, tris</td></tr>\n</tbody>\n</table>\n<p>On y ajoute souvent un huitième gaspillage : la sous-utilisation des compétences des personnes. Les outils du lean (flux tiré, kanban, cartographie de la chaîne de valeur) organisent la production pour que chaque poste fabrique ce dont le poste suivant a besoin, au moment où il en a besoin.</p>"
      },
      {
       "titre": "Les 5S et le management visuel",
       "contenu": "<p>Les <strong>5S</strong> sont la base de l'organisation du poste :</p>\n<ol>\n<li><strong>Seiri</strong> (débarrasser) : retirer du poste tout ce qui n'est pas utile ;</li>\n<li><strong>Seiton</strong> (ranger) : une place pour chaque chose, repérée (tableaux à ombres, emplacements marqués) ;</li>\n<li><strong>Seiso</strong> (nettoyer) : nettoyer en inspectant, ce qui révèle fuites et anomalies ;</li>\n<li><strong>Seiketsu</strong> (standardiser) : écrire et afficher les règles ;</li>\n<li><strong>Shitsuke</strong> (respecter, faire durer) : auditer régulièrement et corriger.</li>\n</ol>\n<p>Le <strong>management visuel</strong> rend l'état du poste lisible d'un coup d'œil : tableau de production (objectif, réalisé, écarts et causes), voyants de machine, cartes de contrôle affichées, étiquettes de non-conformité rouges, zones de stockage délimitées au sol.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les 5S ne sont pas un « grand ménage » ponctuel. Ce sont des règles de travail quotidiennes qui réduisent les recherches, les erreurs d'outils et les accidents.</div>"
      },
      {
       "titre": "Résoudre un problème avec méthode",
       "contenu": "<p>Face à une non-conformité récurrente, on suit une démarche structurée, souvent présentée par le cycle <strong>PDCA</strong> (Plan, Do, Check, Act : planifier, faire, vérifier, agir) ou par une méthode en huit étapes (8D) exigée par certains clients. Les outils les plus utilisés sont :</p>\n<ul>\n<li>le <strong>QQOQCCP</strong> (qui, quoi, où, quand, comment, combien, pourquoi) pour décrire précisément le problème ;</li>\n<li>le <strong>diagramme d'Ishikawa</strong> (causes-effet) qui classe les causes possibles en 5M : matière, milieu, méthode, matériel (moyens), main-d'œuvre ;</li>\n<li>les <strong>5 pourquoi</strong>, pour remonter d'un symptôme à sa cause racine ;</li>\n<li>le <strong>diagramme de Pareto</strong>, qui classe les causes ou les défauts par fréquence pour traiter d'abord les plus importants.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 5 pourquoi appliqués à une série d'alésages hors cote. 1) Pourquoi l'alésage est-il trop petit ? Parce que l'outil d'alésage a fléchi. 2) Pourquoi a-t-il fléchi ? Parce que sa longueur de sortie était plus grande que prévue. 3) Pourquoi ? Parce que l'outil a été remonté après une casse sans respecter la fiche de préréglage. 4) Pourquoi ? Parce que la fiche de préréglage n'indique pas la longueur de sortie. 5) Pourquoi ? Parce qu'elle a été créée avant l'utilisation de cet outil. Cause racine : document incomplet. Action : mettre à jour la fiche, ajouter un contrôle de longueur à la jauge, informer les régleurs, puis vérifier l'efficacité sur les séries suivantes.</div>"
      },
      {
       "titre": "Qualité, système de management et rôle du technicien",
       "contenu": "<p>Ces démarches s'inscrivent dans le <strong>système de management de la qualité</strong> de l'entreprise, souvent certifié selon ISO 9001, ou selon des référentiels sectoriels plus exigeants : IATF 16949 pour l'automobile, EN 9100 pour l'aéronautique, ISO 13485 pour les dispositifs médicaux. Ces référentiels exigent notamment la maîtrise des documents, la traçabilité, le traitement des non-conformités, les actions correctives et l'amélioration continue.</p>\n<p>Le technicien y contribue directement : il renseigne les documents de suivi, déclare les non-conformités au lieu de les cacher, participe aux groupes de résolution de problèmes et propose des améliorations. Une <strong>fiche de non-conformité</strong> décrit le défaut, la quantité concernée, la décision (rebut, retouche, dérogation acceptée par le client) et les actions engagées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une non-conformité déclarée est une occasion d'amélioration ; une non-conformité cachée est un risque pour le client et pour l'entreprise.</div>"
      },
      {
       "titre": "Planifier et piloter la production",
       "contenu": "<p>La performance d'un atelier dépend aussi de l'organisation des ordres de fabrication. Le service planification transforme les commandes en <strong>ordres de fabrication</strong> (OF) affectés aux postes, en tenant compte des capacités, des délais et des approvisionnements. L'outil informatique est souvent un <strong>progiciel de gestion intégré</strong> (ERP) associé à un système de suivi d'atelier (MES) qui collecte en temps réel les états des machines, les quantités produites et les arrêts.</p>\n<p>Le <strong>diagramme de Gantt</strong> représente le planning : une ligne par poste, une barre par OF, dont la longueur correspond à la durée (temps de réglage + quantité × temps de cycle). Il fait apparaître les chevauchements, les temps morts et le <strong>goulet d'étranglement</strong>, poste le plus chargé qui fixe le rythme de tout l'atelier.</p>\n<p>Exemple : un OF de 300 pièces à 2,4 min par pièce, avec 90 min de réglage, occupe le poste 90 + 300 × 2,4 = 810 min, soit 13 h 30, c'est-à-dire presque deux postes de 8 h si le TRS est de 85 %. Une heure gagnée sur le poste goulet est une heure gagnée pour tout l'atelier ; une heure gagnée ailleurs ne change pas le délai global.</p>\n<p>Le technicien de production renseigne les données de suivi (début et fin d'OF, quantités bonnes et rebutées, causes d'arrêt) avec exactitude : ce sont elles qui alimentent le calcul du TRS et les décisions d'amélioration.</p>"
      }
     ],
     "points_cles": [
      "TRS = disponibilité × performance × qualité",
      "Le TRS se calcule aussi par pièces bonnes × temps de cycle de référence / temps requis",
      "Le SMED sépare puis convertit les opérations internes en opérations externes",
      "Le lean chasse sept gaspillages, dont la surproduction et les stocks",
      "Les 5S organisent durablement le poste de travail",
      "Le management visuel rend l'état du poste lisible immédiatement",
      "QQOQCCP, Ishikawa, 5 pourquoi et Pareto structurent la résolution de problème",
      "ISO 9001, IATF 16949 et EN 9100 encadrent la qualité selon les secteurs",
      "Déclarer une non-conformité permet de la traiter et de l'éviter à l'avenir"
     ],
     "lexique": [
      {
       "terme": "TRS",
       "def": "Taux de rendement synthétique : part du temps requis réellement transformée en pièces bonnes."
      },
      {
       "terme": "Temps requis",
       "def": "Temps pendant lequel l'entreprise prévoit de faire fonctionner le moyen de production."
      },
      {
       "terme": "SMED",
       "def": "Méthode de réduction des temps de changement de série."
      },
      {
       "terme": "Opération interne",
       "def": "Opération de changement de série qui ne peut se faire que machine arrêtée."
      },
      {
       "terme": "Lean manufacturing",
       "def": "Organisation de la production qui vise à éliminer les gaspillages."
      },
      {
       "terme": "5S",
       "def": "Méthode d'organisation du poste : débarrasser, ranger, nettoyer, standardiser, faire durer."
      },
      {
       "terme": "Diagramme d'Ishikawa",
       "def": "Diagramme causes-effet qui classe les causes possibles d'un problème selon les 5M."
      },
      {
       "terme": "PDCA",
       "def": "Cycle d'amélioration : planifier, faire, vérifier, agir."
      },
      {
       "terme": "Fiche de non-conformité",
       "def": "Document qui décrit un défaut, la décision prise et les actions engagées."
      }
     ]
    },
    {
     "id": "btrpm-sante-securite-environnement",
     "titre": "Santé, sécurité et environnement en production mécanique",
     "niveau": "1re",
     "duree": 45,
     "objectifs": [
      "Participer à l'évaluation des risques d'un poste de production",
      "Identifier les dispositifs de sécurité d'une machine et vérifier leur fonctionnement",
      "Maîtriser les risques liés aux fluides de coupe, au bruit et aux poussières",
      "Gérer les déchets de l'atelier selon leur nature",
      "Situer les obligations réglementaires et les démarches de management SSE"
     ],
     "sections": [
      {
       "titre": "De la règle d'atelier à l'évaluation des risques",
       "contenu": "<p>Le cours de seconde a présenté les dangers de l'atelier, les équipements de protection individuelle, les pictogrammes et la consignation. En première et terminale, le technicien doit être capable de <strong>raisonner</strong> sur les risques d'un poste qu'il prépare ou qu'il règle, et de proposer des mesures.</p>\n<p>L'employeur a l'obligation d'évaluer les risques et de les transcrire dans le <strong>document unique d'évaluation des risques professionnels</strong> (DUERP). Les mesures de prévention suivent les <strong>principes généraux de prévention</strong> du Code du travail (article L4121-2) : éviter les risques, évaluer ceux qui ne peuvent être évités, combattre les risques à la source, adapter le travail à l'homme, tenir compte de l'évolution de la technique, remplacer ce qui est dangereux par ce qui l'est moins, planifier la prévention, donner la priorité aux protections collectives sur les protections individuelles, donner les instructions appropriées aux travailleurs.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> évaluer un risque au poste de chargement d'un centre d'usinage. 1) Identifier la situation dangereuse : chargement manuel de blocs de 18 kg à hauteur de table. 2) Estimer la gravité (lésion dorsolombaire, écrasement des doigts) et la fréquence (40 fois par poste). 3) Coter le risque selon la grille de l'entreprise. 4) Rechercher d'abord une mesure collective : potence avec palan, préhenseur, table à hauteur réglable. 5) Compléter par la formation aux gestes et des gants anti-coupure adaptés. 6) Vérifier l'efficacité après mise en place.</div>"
      },
      {
       "titre": "La sécurité des machines",
       "contenu": "<p>Une machine neuve mise sur le marché dans l'Union européenne doit respecter les exigences essentielles de santé et de sécurité de la <strong>directive Machines 2006/42/CE</strong>, qui sera remplacée par le <strong>règlement (UE) 2023/1230</strong> applicable à partir du 20 janvier 2027. Le fabricant appose le marquage CE, établit une déclaration de conformité et fournit une <strong>notice d'instructions</strong> en français. Les machines anciennes en service doivent respecter les règles techniques du Code du travail.</p>\n<p>Sur une machine-outil, les principaux dispositifs de sécurité sont :</p>\n<ul>\n<li>les <strong>protecteurs</strong> fixes (carters) et mobiles (portes) avec <strong>dispositif de verrouillage</strong>, voire d'interverrouillage, qui empêche les mouvements dangereux porte ouverte ;</li>\n<li>les <strong>arrêts d'urgence</strong>, à réarmement manuel ;</li>\n<li>les <strong>modes de marche</strong> : mode automatique porte fermée, mode réglage avec vitesses réduites et commande maintenue, accessible par sélecteur à clé ou code ;</li>\n<li>les <strong>dispositifs de protection</strong> sur presses : barrages immatériels, commande bimanuelle, protecteurs d'outil.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> neutraliser un verrouillage de porte (shunt, aimant, clé laissée dans le sélecteur) pour « gagner du temps » expose à des accidents graves : happement par un mandrin, projection d'une pièce mal serrée, coupure par un outil. C'est une faute, même si la machine « le permet ».</div>\n<p>Certains équipements font l'objet de <strong>vérifications périodiques</strong> réglementaires (appareils de levage, presses, réservoirs sous pression…) par une personne compétente, tracées dans un registre de sécurité.</p>"
      },
      {
       "titre": "Les fluides de coupe",
       "contenu": "<p>Les <strong>fluides de coupe</strong> refroidissent, lubrifient et évacuent les copeaux. Ils se présentent sous forme d'<strong>huiles entières</strong> (non diluées) ou de <strong>fluides aqueux</strong> (émulsions ou solutions diluées à quelques pour cent dans l'eau). Ils exposent à plusieurs risques :</p>\n<ul>\n<li>atteintes de la <strong>peau</strong> (dermatoses irritatives ou allergiques) par contact prolongé ;</li>\n<li>atteintes <strong>respiratoires</strong> par inhalation des aérosols et brouillards produits lors de l'usinage à grande vitesse ;</li>\n<li>contamination <strong>biologique</strong> des fluides aqueux (bactéries, moisissures) mal entretenus ;</li>\n<li>risque d'<strong>incendie</strong> avec les huiles entières sur les machines à grande vitesse.</li>\n</ul>\n<p>La prévention passe par des machines carénées avec aspiration des brouillards, une gestion rigoureuse des fluides (contrôle de la concentration au réfractomètre, du pH, de la contamination, vidange et nettoyage des bacs), le port de gants adaptés et l'hygiène des mains, et le refus d'utiliser la soufflette pour se nettoyer. La <strong>fiche de données de sécurité</strong> (FDS) du fluide, fournie selon le règlement REACH, précise les dangers, les EPI et les conditions de stockage.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la micro-lubrification (quelques millilitres d'huile par heure pulvérisés sur l'outil) et l'usinage à sec se développent. Ils réduisent les risques liés aux fluides et le volume de déchets, mais imposent une aspiration efficace des fumées et des poussières.</div>"
      },
      {
       "titre": "Bruit, vibrations, poussières et autres expositions",
       "contenu": "<p>Le <strong>bruit</strong> est réglementé par le Code du travail : à partir d'une exposition quotidienne de 80 dB(A) (valeur d'exposition inférieure déclenchant l'action), l'employeur met des protecteurs auditifs à disposition et informe les salariés ; à partir de 85 dB(A) (valeur supérieure), le port est obligatoire et un programme de réduction doit être engagé ; la valeur limite d'exposition, compte tenu des protecteurs, est fixée à 87 dB(A). Les presses, l'ébavurage et la soufflette sont souvent les sources les plus bruyantes.</p>\n<p>Les <strong>poussières</strong> concernent la rectification, le polissage d'empreintes, l'usinage de composites et surtout la <strong>fabrication additive par fusion de poudre</strong> : les poudres métalliques fines sont inhalables et certaines sont inflammables ou explosives (atmosphères explosives, réglementation ATEX). Leur manipulation se fait avec des équipements dédiés, sous gaz inerte quand c'est nécessaire, avec des EPI respiratoires adaptés.</p>\n<p>L'<strong>électroérosion</strong> présente des risques spécifiques : fumées et vapeurs du diélectrique, risque d'incendie en enfonçage sous huile si le niveau baisse, risque électrique. Les machines comportent des sécurités de niveau et de température qui ne doivent jamais être contournées.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'ordre de priorité reste toujours le même : supprimer ou réduire à la source (capotage, aspiration, substitution), protéger collectivement, puis protéger individuellement.</div>"
      },
      {
       "titre": "Gérer les déchets de l'atelier",
       "contenu": "<p>L'atelier produit des déchets variés, qui doivent être triés à la source :</p>\n<table>\n<thead><tr><th>Déchet</th><th>Catégorie</th><th>Filière usuelle</th></tr></thead>\n<tbody>\n<tr><td>Copeaux métalliques secs, chutes</td><td>Non dangereux, valorisable</td><td>Recyclage par métal (acier, inox, aluminium, laiton séparés)</td></tr>\n<tr><td>Copeaux imprégnés d'huile</td><td>À égoutter ou à traiter selon leur imprégnation</td><td>Essorage, récupération de l'huile, recyclage du métal</td></tr>\n<tr><td>Huiles usagées</td><td>Dangereux</td><td>Collecteur agréé, régénération ou valorisation</td></tr>\n<tr><td>Fluides aqueux usagés, boues de rectification</td><td>Dangereux</td><td>Traitement par entreprise spécialisée</td></tr>\n<tr><td>Chiffons et filtres souillés, aérosols</td><td>Dangereux</td><td>Collecte spécifique</td></tr>\n<tr><td>Plaquettes carbure usagées</td><td>Valorisable</td><td>Recyclage du tungstène et du cobalt</td></tr>\n</tbody>\n</table>\n<p>L'enlèvement des déchets dangereux est tracé par un <strong>bordereau de suivi des déchets</strong> (BSD), aujourd'hui dématérialisé via la plateforme nationale Trackdéchets. L'entreprise tient un registre des déchets.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> mélanger copeaux d'aluminium et copeaux d'acier, ou jeter une émulsion à l'égout, fait perdre la valeur de recyclage et constitue une pollution. Les fines de titane, de magnésium et d'aluminium peuvent s'enflammer : elles se stockent à part, loin des sources de chaleur.</div>"
      },
      {
       "titre": "Management de la santé-sécurité et de l'environnement",
       "contenu": "<p>Beaucoup d'entreprises structurent leur démarche avec des normes de management : <strong>ISO 45001</strong> pour la santé et la sécurité au travail, <strong>ISO 14001</strong> pour l'environnement, <strong>ISO 50001</strong> pour l'énergie. Elles reposent sur le même cycle d'amélioration continue que la qualité : analyse, objectifs, actions, vérification, revue.</p>\n<p>La consommation d'énergie des machines-outils (broches, groupes hydrauliques, compresseurs, centrales de fluide) est un enjeu croissant : mise en veille automatique, arrêt des groupes hydrauliques hors production, réduction des fuites d'air comprimé. Le technicien peut y contribuer au quotidien.</p>\n<p>Enfin, chacun est acteur de la prévention : le salarié doit prendre soin de sa sécurité et de celle des autres (article L4122-1 du Code du travail) et dispose d'un <strong>droit d'alerte et de retrait</strong> face à un danger grave et imminent.</p>\n<p>Les intervenants extérieurs (maintenance du constructeur, traiteur de déchets, entreprise de nettoyage) travaillant dans l'atelier font l'objet d'un <strong>plan de prévention</strong> établi conjointement par l'entreprise utilisatrice et l'entreprise extérieure, après une inspection commune des lieux. Le technicien qui accueille un intervenant s'assure qu'il connaît les consignes, les zones dangereuses et les modes de consignation des machines sur lesquelles il travaille.</p>\n<p>En cas d'accident ou de presque-accident, l'analyse des causes (par exemple par un arbre des causes) permet de comprendre l'enchaînement des faits et de proposer des mesures qui évitent la répétition. Déclarer un presque-accident est aussi utile que déclarer un accident : c'est le même scénario, sans la blessure.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sécurité, qualité et environnement ne s'opposent pas à la productivité : un poste propre, rangé, bien protégé et bien réglé produit plus régulièrement et avec moins d'incidents.</div>"
      }
     ],
     "points_cles": [
      "Le DUERP formalise l'évaluation des risques de l'entreprise",
      "Les principes généraux de prévention donnent la priorité à la suppression du risque et à la protection collective",
      "La directive Machines 2006/42/CE sera remplacée par le règlement (UE) 2023/1230 au 20 janvier 2027",
      "Protecteurs verrouillés, arrêts d'urgence et modes de marche sécurisent les machines",
      "Les fluides de coupe exposent la peau et les voies respiratoires : entretien et protection s'imposent",
      "Bruit : seuils de 80 et 85 dB(A), valeur limite de 87 dB(A)",
      "Les poudres de fabrication additive présentent des risques d'inhalation et d'explosion",
      "Les déchets se trient à la source ; les déchets dangereux sont tracés par bordereau",
      "ISO 45001, ISO 14001 et ISO 50001 structurent la démarche SSE et énergie"
     ],
     "lexique": [
      {
       "terme": "DUERP",
       "def": "Document unique d'évaluation des risques professionnels, obligatoire dans toute entreprise."
      },
      {
       "terme": "Protection collective",
       "def": "Mesure qui protège tous les travailleurs exposés sans action de leur part, comme un carter ou une aspiration."
      },
      {
       "terme": "Dispositif de verrouillage",
       "def": "Dispositif qui empêche les mouvements dangereux tant qu'un protecteur mobile est ouvert."
      },
      {
       "terme": "Fiche de données de sécurité",
       "def": "Document en seize rubriques décrivant les dangers d'un produit chimique et les mesures de protection."
      },
      {
       "terme": "Fluide aqueux",
       "def": "Fluide de coupe dilué dans l'eau, sous forme d'émulsion ou de solution."
      },
      {
       "terme": "ATEX",
       "def": "Atmosphère explosive ; désigne aussi la réglementation qui encadre ces zones."
      },
      {
       "terme": "Bordereau de suivi des déchets",
       "def": "Document qui trace un déchet dangereux de son producteur à son éliminateur."
      },
      {
       "terme": "Droit de retrait",
       "def": "Droit du salarié de se retirer d'une situation présentant un danger grave et imminent."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 5 — Option réalisation et suivi de productions",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btrpm-rsp-decolletage",
     "titre": "Décolletage et tournage de production",
     "niveau": "1re-Tle",
     "options": [
      "rsp"
     ],
     "duree": 45,
     "objectifs": [
      "Décrire les machines de décolletage : tours à cames, tours CN à poupée fixe et à poupée mobile, multibroches",
      "Expliquer le fonctionnement d'un tour à poupée mobile et son intérêt pour les pièces longues et fines",
      "Organiser la gamme d'une pièce décolletée avec broche principale et contre-broche",
      "Choisir les outils et conditions propres au décolletage",
      "Assurer le suivi d'une production de grande série en décolletage"
     ],
     "sections": [
      {
       "titre": "Le décolletage, une spécialité de grande série",
       "contenu": "<p>Le <strong>décolletage</strong> est la fabrication, par tournage, de pièces de révolution en grande série à partir de <strong>barres</strong> (rondes, hexagonales, carrées) alimentées automatiquement. Les pièces sont généralement petites (de moins d'un millimètre à quelques dizaines de millimètres de diamètre) mais peuvent être très complexes : vis, axes, raccords, connecteurs, composants d'horlogerie, implants médicaux, pièces d'injecteurs automobiles.</p>\n<p>La France possède un pôle historique de décolletage dans la vallée de l'Arve, en Haute-Savoie, qui regroupe une grande partie des entreprises françaises du secteur et des centres techniques dédiés. Les marchés principaux sont l'automobile, l'aéronautique, le médical, la connectique et l'horlogerie.</p>\n<p>La logique économique du décolletage repose sur des temps de cycle très courts (de quelques secondes à quelques minutes) et des machines qui produisent des milliers de pièces sans intervention, la nuit et le week-end. Chaque seconde gagnée sur le cycle et chaque arrêt évité ont un poids considérable.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en décolletage, la pièce est réalisée complètement en une seule fois sur la machine, de la barre brute à la pièce tronçonnée et terminée, souvent sans aucune reprise.</div>"
      },
      {
       "titre": "Les machines de décolletage",
       "contenu": "<p>Plusieurs familles de machines coexistent :</p>\n<table>\n<thead><tr><th>Machine</th><th>Principe</th><th>Emploi</th></tr></thead>\n<tbody>\n<tr><td>Tour automatique à cames</td><td>Mouvements commandés par des cames taillées pour chaque pièce</td><td>Très grandes séries simples, parc ancien en diminution</td></tr>\n<tr><td>Tour CN à poupée fixe</td><td>La barre tourne et ne se déplace pas en Z ; l'outil se déplace</td><td>Pièces courtes et de diamètre moyen</td></tr>\n<tr><td>Tour CN à poupée mobile (type suisse)</td><td>La barre avance en Z à travers un canon de guidage, l'outil reste près du canon</td><td>Pièces longues, fines, précises</td></tr>\n<tr><td>Tour multibroche</td><td>Plusieurs broches (souvent 6 ou 8) sur un barillet qui tourne d'une position à chaque cycle</td><td>Très grandes séries, cycle très court</td></tr>\n</tbody>\n</table>\n<p>Les machines CN modernes sont équipées d'<strong>outils motorisés</strong> (perçages transversaux, fraisages de plats, taillage), d'un <strong>axe C</strong> (positionnement angulaire de la broche), parfois d'un axe Y, et d'une <strong>contre-broche</strong> qui reprend la pièce pour usiner sa face arrière avant de l'éjecter.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> un décolleteur règle et surveille souvent plusieurs machines à la fois. Son travail consiste à préparer les outils, régler la machine pour une nouvelle série, valider les premières pièces, puis assurer le suivi : changements d'outils programmés, contrôles fréquentiels, approvisionnement en barres et évacuation des copeaux.</div>"
      },
      {
       "titre": "Le tour à poupée mobile",
       "contenu": "<p>Sur un tour à <strong>poupée mobile</strong>, la barre est serrée dans la pince de la broche, qui se déplace selon Z. Elle traverse un <strong>canon de guidage</strong> fixe, juste devant lequel travaillent les outils. L'usinage se fait donc toujours à quelques millimètres du point de guidage, quelle que soit la longueur déjà usinée.</p>\n<p>Ce principe supprime presque la flexion de la pièce : on peut usiner des pièces dont la longueur dépasse vingt fois le diamètre, avec des tolérances de quelques micromètres. Il impose cependant une barre de qualité : la barre doit être <strong>rectifiée</strong> ou étirée avec une tolérance serrée (souvent h8 ou h9) et une bonne rectitude pour coulisser sans jeu ni grippage dans le canon.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> le réglage du canon de guidage est délicat. Trop serré, il grippe et marque la barre ; trop lâche, il laisse vibrer la pièce et dégrade la circularité. Il se règle à chaque changement de lot de barres, en suivant la méthode du constructeur, et se vérifie après mise en température de la machine.</div>\n<p>Certaines machines à poupée mobile peuvent fonctionner <strong>sans canon</strong> pour les pièces courtes : on réduit ainsi la chute de barre en fin de barre, au prix d'une moins bonne rigidité pour les pièces longues.</p>"
      },
      {
       "titre": "Organiser la gamme d'une pièce décolletée",
       "contenu": "<p>La gamme d'une pièce décolletée se construit en répartissant les opérations entre la <strong>broche principale</strong> et la <strong>contre-broche</strong>, et entre les différents <strong>porte-outils</strong> qui peuvent travailler simultanément. L'objectif est double : réaliser toutes les spécifications et réduire le temps de cycle en faisant travailler plusieurs outils en même temps (usinage en <strong>temps masqué</strong>).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> gamme d'un axe de ⌀6 h7, longueur 40 mm, avec une gorge, un méplat et un taraudage M3 en bout, sur tour à poupée mobile. Broche principale : 1) dressage et chanfrein de la face avant ; 2) chariotage d'ébauche puis de finition du ⌀6 en avançant la barre à travers le canon ; 3) gorge à l'outil à gorge ; 4) méplat à la fraise motorisée, broche indexée par l'axe C ; 5) perçage et taraudage M3 en bout, si l'accès le permet. Transfert : 6) la contre-broche vient saisir la pièce ; 7) tronçonnage. Contre-broche : 8) dressage et chanfrein de la face arrière pendant que la broche principale commence la pièce suivante ; 9) éjection dans le convoyeur ou le bac.</div>\n<p>La synchronisation des deux canaux de programmation (un par broche) se fait par des <strong>instructions d'attente</strong> dans les programmes. Une erreur de synchronisation peut provoquer une collision entre la contre-broche et un outil de la broche principale : la simulation est indispensable.</p>"
      },
      {
       "titre": "Outils, matières et copeaux",
       "contenu": "<p>Le décolletage utilise des <strong>outils de petites dimensions</strong> : plaquettes à arêtes rectifiées très vives, outils de tronçonnage étroits, forets de petit diamètre, tarauds par refoulement ou à coupe, outils de forme. Les plaquettes sont souvent montées sur des porte-outils à changement rapide préréglés hors machine.</p>\n<p>Les matières de décolletage classiques sont choisies pour leur usinabilité : aciers de décolletage au soufre (et parfois au plomb), laitons au plomb, inox à usinabilité améliorée, alliages d'aluminium de décolletage. Le décolletage médical et aéronautique travaille aussi le titane, les inox austénitiques et les superalliages, beaucoup plus difficiles.</p>\n<p>La maîtrise du <strong>copeau</strong> est vitale : une machine qui tourne sans surveillance ne doit jamais produire de copeau long qui s'enroule autour de la pièce ou des outils. On agit sur le brise-copeaux, l'avance, l'arrosage haute pression dirigé sur l'arête, et parfois sur des cycles de rupture de copeau (micro-arrêts de l'avance programmés).</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le décolletage travaille presque toujours avec des huiles entières, qui lubrifient mieux les petites arêtes et protègent les machines ; la gestion des brouillards d'huile et du risque d'incendie fait donc partie du métier.</div>"
      },
      {
       "titre": "Suivre une production de décolletage",
       "contenu": "<p>Une fois la série lancée, la qualité dépend de la maîtrise de la dérive. Les principales causes de dérive en décolletage sont l'<strong>usure des outils</strong>, la <strong>dilatation thermique</strong> de la machine pendant les premières heures et les <strong>variations de lot matière</strong>.</p>\n<p>Le suivi s'organise autour de :</p>\n<ul>\n<li>la <strong>gestion de la durée de vie</strong> des outils : compteur de pièces par outil, changement préventif avant la fin de vie, outils jumeaux appelés automatiquement ;</li>\n<li>les <strong>contrôles fréquentiels</strong> des caractéristiques critiques, avec carte de contrôle ;</li>\n<li>les <strong>corrections d'usure</strong> apportées au vu des mesures, notées dans le journal de bord ;</li>\n<li>le contrôle en fin de série et le <strong>tri</strong> éventuel par vision automatique ou par calibres pour les pièces de sécurité.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> définir la fréquence de changement préventif d'un outil de finition. 1) Relever sur plusieurs séries le nombre de pièces produites avant que la cote ne dérive au-delà de la moitié de la tolérance : 2 600, 2 900, 2 750 pièces. 2) Retenir la plus petite valeur : 2 600. 3) Appliquer une marge de sécurité de 20 % : 2 600 × 0,8 = 2 080. 4) Paramétrer le compteur d'outil à 2 000 pièces. 5) Revoir cette valeur si la matière ou les conditions de coupe changent.</div>"
      },
      {
       "titre": "Particularités des multibroches",
       "contenu": "<p>Sur un tour <strong>multibroche</strong>, chaque broche porte une barre et passe successivement devant chaque poste d'outils. À chaque rotation du barillet, une pièce est terminée. Le temps de cycle est donc celui de l'opération la plus longue, et non la somme des opérations : on équilibre les postes pour que chacun ait une durée voisine.</p>\n<p>Ces machines produisent des séries de plusieurs centaines de milliers de pièces. Leur réglage est long (plusieurs heures à plusieurs jours) et mobilise des régleurs expérimentés. Les machines récentes à commande numérique (axes CN sur chaque poste) facilitent les réglages et les changements de série.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sur un multibroche, une même caractéristique peut être réalisée différemment selon la broche, car chaque broche a ses propres petits écarts. Les contrôles doivent donc porter sur des pièces issues de chaque broche, repérées, et non sur des pièces prises au hasard dans le bac.</div>"
      }
     ],
     "points_cles": [
      "Le décolletage produit en grande série des pièces de révolution à partir de barres",
      "La vallée de l'Arve est le pôle historique du décolletage en France",
      "Le tour à poupée mobile usine toujours près du canon de guidage et convient aux pièces longues et fines",
      "La barre pour poupée mobile doit être de diamètre précis et rectiligne",
      "Broche principale et contre-broche permettent une réalisation complète en temps masqué",
      "La maîtrise du copeau est indispensable pour une production sans surveillance",
      "Les outils sont changés préventivement selon un compteur de pièces",
      "Sur multibroche, le temps de cycle est fixé par le poste le plus long",
      "Les contrôles sur multibroche portent sur des pièces de chaque broche"
     ],
     "lexique": [
      {
       "terme": "Décolletage",
       "def": "Fabrication en série de pièces tournées à partir de barres alimentées automatiquement."
      },
      {
       "terme": "Poupée mobile",
       "def": "Broche qui se déplace en Z en faisant avancer la barre à travers un canon de guidage."
      },
      {
       "terme": "Canon de guidage",
       "def": "Bague fixe qui guide la barre au plus près des outils sur un tour à poupée mobile."
      },
      {
       "terme": "Contre-broche",
       "def": "Seconde broche qui saisit la pièce pour usiner sa face arrière."
      },
      {
       "terme": "Ravitailleur",
       "def": "Dispositif qui alimente automatiquement la machine en barres."
      },
      {
       "terme": "Outil motorisé",
       "def": "Outil tournant entraîné par la tourelle d'un tour, pour percer ou fraiser."
      },
      {
       "terme": "Temps masqué",
       "def": "Temps pendant lequel une opération se déroule en même temps qu'une autre, sans allonger le cycle."
      },
      {
       "terme": "Multibroche",
       "def": "Tour à plusieurs broches montées sur un barillet tournant, pour les très grandes séries."
      },
      {
       "terme": "Outil jumeau",
       "def": "Outil identique appelé automatiquement lorsque le premier atteint sa durée de vie."
      }
     ]
    },
    {
     "id": "btrpm-rsp-usinage-multiaxe",
     "titre": "Usinage multiaxe et tournage-fraisage",
     "niveau": "Tle",
     "options": [
      "rsp"
     ],
     "duree": 45,
     "objectifs": [
      "Identifier les architectures de centres d'usinage 4 et 5 axes et de tours multifonctions",
      "Distinguer usinage positionné 3+2 et usinage 5 axes continu",
      "Expliquer les fonctions de commande propres au multiaxe : plans inclinés, suivi du point outil",
      "Préparer une prise de pièce et une origine adaptées au multiaxe",
      "Évaluer l'intérêt d'une réalisation complète en une seule mise en position"
     ],
     "sections": [
      {
       "titre": "Pourquoi ajouter des axes",
       "contenu": "<p>Un centre d'usinage trois axes ne peut usiner que les surfaces accessibles depuis le haut, dans la direction de la broche. Pour une pièce prismatique comportant des usinages sur plusieurs faces, il faut donc la retourner et la repositionner : chaque <strong>reprise</strong> ajoute du temps et une erreur de mise en position.</p>\n<p>Ajouter des <strong>axes rotatifs</strong> permet d'orienter la pièce ou l'outil pour atteindre plusieurs faces, des surfaces inclinées et des formes gauches en une seule mise en position. On parle de <strong>réalisation complète</strong> (ou « usinage en une seule prise »). Les gains sont nets :</p>\n<ul>\n<li>précision de position entre faces garantie par la machine ;</li>\n<li>suppression des montages intermédiaires et des temps de reprise ;</li>\n<li>possibilité d'utiliser des outils plus courts, donc plus rigides, en inclinant l'outil ;</li>\n<li>accès aux formes complexes (roues à aubes, implants, pièces aéronautiques).</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'usinage multiaxe ne sert pas d'abord à faire des formes compliquées ; il sert surtout à supprimer des reprises sur des pièces prismatiques ordinaires.</div>"
      },
      {
       "titre": "Architectures des machines",
       "contenu": "<p>Les deux axes rotatifs d'un centre 5 axes peuvent être portés par la table, par la tête ou partagés :</p>\n<table>\n<thead><tr><th>Architecture</th><th>Description</th><th>Avantages et limites</th></tr></thead>\n<tbody>\n<tr><td>Table rotative basculante (berceau)</td><td>La table bascule (axe A ou B) et tourne (axe C)</td><td>Compacte, précise, adaptée aux petites et moyennes pièces ; masse de pièce limitée</td></tr>\n<tr><td>Tête pivotante et table rotative</td><td>La tête bascule (axe B), la table tourne (axe C)</td><td>Accepte des pièces plus lourdes</td></tr>\n<tr><td>Tête birotative</td><td>Les deux rotations sont dans la tête</td><td>Grandes pièces fixes (aéronautique, moules de grande taille)</td></tr>\n<tr><td>Quatrième axe ajouté</td><td>Diviseur ou plateau tournant sur une machine 3 axes</td><td>Solution économique pour usiner plusieurs faces d'une pièce</td></tr>\n</tbody>\n</table>\n<p>Les <strong>tours multifonctions</strong> (tours-fraiseurs) combinent une broche de tournage avec axe C, une broche de fraisage pivotante (axe B) et souvent une contre-broche. Ils réalisent complètement des pièces de révolution comportant des usinages prismatiques : brides percées, arbres à cannelures, corps de vannes.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les centres 5 axes à berceau sont devenus courants chez les sous-traitants en mécanique de précision. Ils sont souvent équipés d'un changeur de palettes ou d'un robot de chargement, ce qui permet de faire tourner la machine sans opérateur pendant les heures creuses.</div>"
      },
      {
       "titre": "Usinage positionné 3+2 et usinage continu",
       "contenu": "<p>On distingue deux façons d'utiliser les axes rotatifs :</p>\n<ul>\n<li>en <strong>usinage positionné</strong> (3+2), les axes rotatifs orientent la pièce puis restent bloqués ; l'usinage se fait ensuite en trois axes linéaires dans un <strong>plan incliné</strong>. C'est le cas le plus fréquent : perçages et surfaçages sur les différentes faces, poches inclinées ;</li>\n<li>en <strong>usinage 5 axes continu</strong>, les cinq axes se déplacent simultanément pendant la coupe : l'outil suit une surface gauche en gardant une orientation choisie (perpendiculaire, inclinée d'un angle constant, tangente pour un usinage en flanc).</li>\n</ul>\n<p>L'usinage positionné est plus simple à programmer et à vérifier, et plus rigide car les axes rotatifs sont bloqués. L'usinage continu est réservé aux formes qui l'exigent, ou à l'amélioration de l'état de surface et de la durée de vie des outils sur les formes gauches.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser un perçage incliné à 30° sur une face. 1) Définir dans la FAO ou la commande un plan de travail incliné de 30° autour de l'axe X, avec son origine au point d'entrée du perçage. 2) La commande calcule les positions des axes rotatifs (par exemple A = 30°). 3) Le programme écrit le perçage comme un perçage vertical ordinaire dans ce plan. 4) Vérifier en simulation le dégagement de la tête par rapport au bridage. 5) Après exécution, contrôler la position et l'angle du perçage.</div>"
      },
      {
       "titre": "Fonctions de commande propres au multiaxe",
       "contenu": "<p>Les commandes numériques modernes offrent des fonctions qui facilitent le multiaxe (leur nom varie selon le constructeur) :</p>\n<ul>\n<li>la <strong>définition de plans inclinés</strong> : le programmeur travaille dans un repère lié à la face usinée, la commande calcule les mouvements réels ;</li>\n<li>le <strong>suivi du point outil</strong> (TCP, Tool Center Point) : en 5 axes continu, la commande compense automatiquement les déplacements linéaires dus aux rotations, de sorte que la pointe de l'outil suive la trajectoire programmée ;</li>\n<li>la <strong>mesure cinématique</strong> : un cycle de palpage d'une sphère étalon montée sur la table permet de vérifier et de corriger la position des axes rotatifs.</li>\n</ul>\n<p>Le suivi du point outil rend le programme indépendant de la longueur de l'outil réellement monté : on peut changer d'outil ou corriger la jauge sans regénérer le programme.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sans suivi du point outil, un programme 5 axes continu dépend exactement de la longueur d'outil et de la position de la pièce utilisées lors du calcul FAO. La moindre différence à la machine déplace la pointe de l'outil et peut entailler la pièce ou provoquer une collision.</div>"
      },
      {
       "titre": "Prise de pièce et origines en multiaxe",
       "contenu": "<p>La prise de pièce en multiaxe doit laisser l'accès à un maximum de faces. On utilise :</p>\n<ul>\n<li>des <strong>étaux autocentreurs</strong> à mors étroits, qui serrent sur quelques millimètres de matière laissée en surépaisseur, sous la pièce ;</li>\n<li>des <strong>rehausses</strong> qui éloignent la pièce de la table pour dégager la tête de broche ;</li>\n<li>des systèmes <strong>point zéro</strong> pour passer d'une machine à l'autre sans reprendre l'origine ;</li>\n<li>parfois une <strong>queue d'aronde</strong> usinée au préalable sous le brut, serrée dans un étau spécial.</li>\n</ul>\n<p>La matière de serrage est enlevée ensuite, dans une seconde phase courte ou par tronçonnage. L'origine pièce se prend de préférence près du centre de rotation de la table ; la commande doit connaître précisément la position de ce centre, mesurée lors du contrôle cinématique.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en multiaxe, la longueur de sortie de chaque outil et la hauteur de la pièce au-dessus de la table sont des données de sécurité : elles conditionnent les collisions entre la tête, la pièce et la table.</div>"
      },
      {
       "titre": "Choisir entre plusieurs solutions",
       "contenu": "<p>Le choix entre une machine 3 axes avec plusieurs phases et une machine 5 axes en une seule phase se fait sur des critères techniques et économiques :</p>\n<table>\n<thead><tr><th>Critère</th><th>3 axes, plusieurs phases</th><th>5 axes, réalisation complète</th></tr></thead>\n<tbody>\n<tr><td>Coût horaire machine</td><td>Plus faible</td><td>Plus élevé</td></tr>\n<tr><td>Montages et réglages</td><td>Un montage par phase</td><td>Un seul montage</td></tr>\n<tr><td>Précision entre faces</td><td>Limitée par les reprises</td><td>Garantie par la machine</td></tr>\n<tr><td>Programmation</td><td>Simple</td><td>Plus longue, simulation indispensable</td></tr>\n<tr><td>Encours et délais</td><td>Pièces qui attendent entre phases</td><td>Pièce terminée en une fois</td></tr>\n</tbody>\n</table>\n<p>Pour une petite série de pièces prismatiques à six faces usinées avec des tolérances de position serrées, la solution 5 axes l'emporte souvent malgré son coût horaire. Pour une grande série de pièces simples usinées sur deux faces, des machines 3 axes avec montages dédiés restent compétitives.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> comparer les temps pour une série de 20 pièces. Solution 3 axes : 3 phases, 25 min de réglage chacune, 6 min d'usinage et 2 min de manipulation par phase et par pièce. Total : 3 × 25 + 20 × 3 × 8 = 75 + 480 = 555 min. Solution 5 axes : 1 réglage de 60 min, 16 min par pièce. Total : 60 + 20 × 16 = 380 min. Avec des coûts horaires de 60 € et 90 € : 3 axes ≈ 555 €, 5 axes ≈ 570 €. Les coûts sont proches ; le gain de précision et de délai fait pencher pour le 5 axes.</div>"
      },
      {
       "titre": "Précision et vérification d'un centre multiaxe",
       "contenu": "<p>Un centre 5 axes cumule les écarts de ses cinq axes. Les erreurs les plus fréquentes sont un mauvais positionnement du centre de rotation des axes rotatifs, un défaut de perpendicularité entre axes et un jeu ou une dérive thermique des axes rotatifs. Elles se traduisent par des défauts de position entre faces usinées à des orientations différentes, alors que chaque face, prise isolément, est correcte.</p>\n<p>Pour les détecter, on usine et on mesure périodiquement une <strong>pièce test</strong> (des pièces d'essai normalisées existent dans la série ISO 10791), ou l'on exécute le cycle de mesure cinématique de la commande avec une sphère étalon. Les résultats sont comparés aux valeurs de réception de la machine.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> après une collision, même légère, la géométrie d'un centre 5 axes doit être vérifiée avant de reprendre une production de précision.</div>"
      }
     ],
     "points_cles": [
      "Le multiaxe supprime d'abord des reprises sur des pièces prismatiques",
      "Les axes rotatifs peuvent être dans la table, dans la tête ou partagés",
      "L'usinage 3+2 oriente puis bloque les axes rotatifs ; le 5 axes continu les déplace pendant la coupe",
      "Les plans inclinés permettent de programmer dans le repère de la face usinée",
      "Le suivi du point outil rend le programme indépendant de la longueur d'outil",
      "Étaux autocentreurs et rehausses dégagent l'accès aux faces",
      "La position du centre de rotation de la table doit être connue et vérifiée",
      "Le choix 3 axes ou 5 axes se fait sur le coût global, la précision et le délai"
     ],
     "lexique": [
      {
       "terme": "Axe rotatif",
       "def": "Axe de machine qui fait tourner la pièce ou l'outil autour d'une direction (A, B ou C)."
      },
      {
       "terme": "Usinage 3+2",
       "def": "Usinage en trois axes linéaires après orientation fixe de la pièce par les axes rotatifs."
      },
      {
       "terme": "Usinage 5 axes continu",
       "def": "Usinage où les cinq axes se déplacent simultanément pendant la coupe."
      },
      {
       "terme": "Berceau",
       "def": "Table rotative montée sur un axe de basculement, sur un centre 5 axes."
      },
      {
       "terme": "Plan incliné",
       "def": "Plan de travail orienté défini dans la commande pour usiner une face non horizontale."
      },
      {
       "terme": "Suivi du point outil",
       "def": "Fonction de la commande qui maintient la pointe de l'outil sur la trajectoire malgré les rotations."
      },
      {
       "terme": "Tour multifonction",
       "def": "Machine combinant tournage et fraisage avec axe C, axe B et souvent contre-broche."
      },
      {
       "terme": "Réalisation complète",
       "def": "Usinage d'une pièce entière en une seule mise en position."
      }
     ]
    },
    {
     "id": "btrpm-rsp-fabrication-additive",
     "titre": "Fabrication additive de pièces fonctionnelles",
     "niveau": "1re-Tle",
     "options": [
      "rsp"
     ],
     "duree": 45,
     "objectifs": [
      "Classer les procédés de fabrication additive selon la norme ISO/ASTM 52900",
      "Décrire la fusion laser sur lit de poudre métallique et l'extrusion de matière",
      "Préparer une fabrication : orientation, supports, paramètres, tranchage",
      "Planifier les post-traitements jusqu'à la pièce conforme",
      "Identifier les règles de conception et les limites du procédé"
     ],
     "sections": [
      {
       "titre": "Fabriquer couche par couche",
       "contenu": "<p>La <strong>fabrication additive</strong> construit une pièce par ajout de matière, couche après couche, à partir d'un modèle numérique. Le cours de seconde l'a présentée comme un procédé de prototypage ; dans l'option réalisation et suivi de productions, elle devient un <strong>procédé de production</strong> de pièces fonctionnelles, en polymère comme en métal, souvent combiné à l'usinage.</p>\n<p>La norme <strong>ISO/ASTM 52900</strong> classe les procédés en sept catégories :</p>\n<table>\n<thead><tr><th>Catégorie</th><th>Principe</th><th>Matériaux typiques</th></tr></thead>\n<tbody>\n<tr><td>Fusion sur lit de poudre</td><td>Un laser ou un faisceau d'électrons fond sélectivement une couche de poudre</td><td>Métaux (inox, titane, aluminium, aciers à outils), polyamides</td></tr>\n<tr><td>Extrusion de matière</td><td>Un fil ou des granulés fondus sont déposés par une buse</td><td>Thermoplastiques (PLA, ABS, PA, PEEK), composites</td></tr>\n<tr><td>Photopolymérisation en cuve</td><td>Une résine liquide durcit sous l'effet d'une lumière</td><td>Résines</td></tr>\n<tr><td>Projection de liant</td><td>Un liant colle sélectivement la poudre, puis la pièce est frittée</td><td>Métaux, sable de fonderie, céramiques</td></tr>\n<tr><td>Projection de matière</td><td>Des gouttes de matière sont projetées puis durcies</td><td>Photopolymères, cires</td></tr>\n<tr><td>Dépôt de matière sous énergie concentrée</td><td>Poudre ou fil fondu par laser, arc ou faisceau au point de dépôt</td><td>Métaux, réparation de pièces</td></tr>\n<tr><td>Stratification de couches</td><td>Feuilles découpées et assemblées</td><td>Papier, métal, composites</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en fabrication additive, la complexité de forme ne coûte presque rien ; ce qui coûte, c'est le volume de matière, la hauteur de la pièce (nombre de couches) et les post-traitements.</div>"
      },
      {
       "titre": "La fusion laser sur lit de poudre métallique",
       "contenu": "<p>Le procédé métallique le plus répandu en production est la <strong>fusion laser sur lit de poudre</strong> (souvent appelée LPBF ou SLM). Son cycle est le suivant :</p>\n<ol>\n<li>un <strong>racleur</strong> étale une fine couche de poudre (quelques dizaines de micromètres) sur un <strong>plateau de fabrication</strong> métallique ;</li>\n<li>un laser fond la poudre selon la section de la pièce dans cette couche ;</li>\n<li>le plateau descend de l'épaisseur d'une couche ;</li>\n<li>le cycle recommence jusqu'à la dernière couche.</li>\n</ol>\n<p>La chambre est remplie d'un <strong>gaz inerte</strong> (argon ou azote) pour éviter l'oxydation. La pièce est soudée au plateau par ses <strong>supports</strong>, qui servent aussi à évacuer la chaleur et à limiter les déformations dues aux contraintes thermiques.</p>\n<p>Les pièces obtenues sont presque totalement denses et ont des caractéristiques mécaniques proches de celles du métal forgé, à condition d'appliquer les bons traitements. Leur état de surface brut est rugueux (Ra de l'ordre de 5 à 15 µm) et leur précision limitée (de l'ordre du dixième de millimètre) : les surfaces fonctionnelles sont finies par usinage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les poudres métalliques fines sont dangereuses par inhalation et certaines (aluminium, titane) peuvent s'enflammer ou exploser en suspension dans l'air. Leur manipulation impose des EPI respiratoires, une mise à la terre, des aspirateurs adaptés aux atmosphères explosives et une formation spécifique.</div>"
      },
      {
       "titre": "Préparer une fabrication",
       "contenu": "<p>La préparation est l'équivalent de la FAO pour la fabrication additive. Elle comprend :</p>\n<ul>\n<li>la vérification et la réparation du <strong>fichier</strong> (maillage fermé, sans trou ni facette inversée) ;</li>\n<li>le choix de l'<strong>orientation</strong> de la pièce sur le plateau ;</li>\n<li>la génération des <strong>supports</strong> sous les surfaces en contre-dépouille ;</li>\n<li>l'<strong>imbrication</strong> de plusieurs pièces sur le plateau pour rentabiliser la fabrication ;</li>\n<li>le choix des <strong>paramètres</strong> (puissance laser, vitesse, épaisseur de couche, stratégie de balayage), souvent issus de jeux validés par le fabricant de la machine ;</li>\n<li>le <strong>tranchage</strong> et l'envoi du fichier à la machine.</li>\n</ul>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir l'orientation d'un support de capteur comportant un alésage de précision et une grande face plane. 1) Repérer les surfaces fonctionnelles : l'alésage et la face plane seront usinés. 2) Placer l'axe de l'alésage verticalement, pour qu'il soit circulaire et sans support intérieur. 3) Éviter de poser la grande face plane à plat sur le plateau si cela crée une grande surface supportée, source de contraintes ; l'incliner légèrement. 4) Vérifier que les surfaces en surplomb font plus d'environ 45° avec l'horizontale ou sont supportées. 5) Comparer la hauteur obtenue (temps de fabrication) entre deux orientations possibles et choisir le meilleur compromis.</div>\n<p>En extrusion de matière, la préparation se fait dans un logiciel de tranchage qui fixe aussi le remplissage interne (densité, motif), le nombre de parois et la température de buse et de plateau.</p>"
      },
      {
       "titre": "Post-traitements jusqu'à la pièce conforme",
       "contenu": "<p>Une pièce métallique sortie de la machine est loin d'être terminée. La gamme complète comporte généralement :</p>\n<table>\n<thead><tr><th>Étape</th><th>But</th></tr></thead>\n<tbody>\n<tr><td>Dépoudrage</td><td>Retirer la poudre non fondue, y compris dans les canaux internes, et la recycler</td></tr>\n<tr><td>Traitement de détente</td><td>Relâcher les contraintes résiduelles, pièce encore sur le plateau</td></tr>\n<tr><td>Séparation du plateau</td><td>Découpe par électroérosion à fil ou à la scie</td></tr>\n<tr><td>Retrait des supports</td><td>Manuellement ou par usinage</td></tr>\n<tr><td>Compression isostatique à chaud (si exigée)</td><td>Refermer les porosités résiduelles</td></tr>\n<tr><td>Traitement thermique</td><td>Obtenir les caractéristiques mécaniques visées</td></tr>\n<tr><td>Usinage de finition</td><td>Réaliser les surfaces fonctionnelles et les tolérances</td></tr>\n<tr><td>Finition de surface</td><td>Sablage, tribofinition, polissage</td></tr>\n<tr><td>Contrôle</td><td>Dimensionnel, parfois tomographie pour les défauts internes</td></tr>\n</tbody>\n</table>\n<p>L'usinage d'une pièce issue de fabrication additive pose un problème de <strong>mise en position</strong> : les surfaces brutes sont irrégulières. On prévoit dès la conception des <strong>formes de prise de pièce</strong> (talons, plots, surfaces de référence surépaissies) qui seront usinées en premier puis éventuellement supprimées.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> dans les ateliers hybrides, la pièce reste fixée sur une palette point zéro de la sortie de machine additive jusqu'à l'usinage. Les références de la palette servent d'origine commune aux deux procédés, ce qui limite les erreurs de reprise.</div>"
      },
      {
       "titre": "Concevoir pour la fabrication additive",
       "contenu": "<p>Le technicien n'est pas concepteur, mais il doit savoir signaler ce qui pose problème. Les règles principales sont :</p>\n<ul>\n<li>limiter les <strong>surplombs</strong> à environ 45° par rapport à l'horizontale, au-delà de quoi un support est nécessaire ;</li>\n<li>respecter une <strong>épaisseur de paroi</strong> minimale (de l'ordre de quelques dixièmes de millimètre en métal selon la machine) ;</li>\n<li>prévoir des <strong>orifices d'évacuation</strong> de la poudre pour les volumes creux ;</li>\n<li>préférer des canaux internes en forme de goutte ou de losange plutôt que circulaires horizontaux de grand diamètre ;</li>\n<li>prévoir des <strong>surépaisseurs</strong> d'usinage sur les surfaces fonctionnelles ;</li>\n<li>tenir compte de l'<strong>anisotropie</strong> : les caractéristiques mécaniques peuvent être plus faibles dans la direction de construction, en particulier en extrusion de matière.</li>\n</ul>\n<p>La fabrication additive permet aussi l'<strong>optimisation topologique</strong> : un logiciel enlève la matière inutile en fonction des efforts appliqués, ce qui donne des formes organiques allégées, impossibles à usiner.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une pièce dessinée pour l'usinage et simplement « imprimée » est rarement rentable. La fabrication additive s'impose quand la forme est repensée pour elle : allègement, fonctions intégrées, canaux internes.</div>"
      },
      {
       "titre": "Qualité et traçabilité en fabrication additive",
       "contenu": "<p>Une pièce additive ne se contrôle pas entièrement après coup : des défauts internes (porosités, manques de fusion) peuvent être invisibles. La qualité repose donc sur la <strong>maîtrise du procédé</strong> :</p>\n<ul>\n<li>traçabilité du <strong>lot de poudre</strong> et du nombre de recyclages subis ;</li>\n<li>enregistrement des paramètres et des alarmes de chaque fabrication ;</li>\n<li>surveillance en cours de fabrication (caméras, capteurs du bain de fusion) ;</li>\n<li><strong>éprouvettes témoins</strong> fabriquées sur le même plateau et testées (traction, densité) ;</li>\n<li>contrôle dimensionnel et, pour les pièces critiques, tomographie à rayons X.</li>\n</ul>\n<p>Dans les secteurs exigeants (aéronautique, médical), le procédé est <strong>qualifié</strong> : toute modification d'un paramètre, de la poudre ou de la machine oblige à refaire une partie des essais.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> la poudre non fondue est tamisée puis réutilisée, mais elle s'oxyde et ses grains se déforment au fil des cycles. Les entreprises fixent un nombre maximal de réutilisations ou un mélange avec de la poudre neuve, et suivent la qualité de la poudre (granulométrie, teneur en oxygène) lot par lot.</div>\n<p>Le coût d'une pièce additive se décompose en coût machine (proportionnel à la durée, donc surtout à la hauteur du plateau et au volume fondu), coût matière, coût de préparation et coût des post-traitements. Imbriquer plusieurs pièces sur un même plateau répartit la durée de fabrication et la préparation : c'est la première source d'économie, à condition que l'orientation de chaque pièce reste favorable à sa qualité.</p>"
      }
     ],
     "points_cles": [
      "L'ISO/ASTM 52900 classe la fabrication additive en sept catégories",
      "La fusion laser sur lit de poudre est le principal procédé métallique de production",
      "Le gaz inerte évite l'oxydation ; les supports fixent la pièce et évacuent la chaleur",
      "L'orientation influe sur la précision, les supports, les contraintes et le temps",
      "Une pièce métallique imprimée passe par dépoudrage, détente, découpe, traitements et usinage",
      "Des formes de prise de pièce facilitent l'usinage de finition",
      "Les surplombs au-delà d'environ 45° demandent des supports",
      "Les poudres métalliques présentent des risques d'inhalation et d'explosion",
      "La qualité repose sur la traçabilité de la poudre et la maîtrise des paramètres"
     ],
     "lexique": [
      {
       "terme": "Fabrication additive",
       "def": "Fabrication par ajout de matière couche par couche à partir d'un modèle numérique."
      },
      {
       "terme": "Fusion sur lit de poudre",
       "def": "Procédé où une source d'énergie fond sélectivement une couche de poudre étalée."
      },
      {
       "terme": "Plateau de fabrication",
       "def": "Plaque métallique sur laquelle la pièce est construite et fixée."
      },
      {
       "terme": "Support",
       "def": "Structure provisoire qui soutient les surplombs et fixe la pièce au plateau."
      },
      {
       "terme": "Tranchage",
       "def": "Découpage du modèle en couches et génération des trajectoires de fabrication."
      },
      {
       "terme": "Dépoudrage",
       "def": "Élimination de la poudre non fondue autour et à l'intérieur de la pièce."
      },
      {
       "terme": "Anisotropie",
       "def": "Variation des propriétés d'un matériau selon la direction considérée."
      },
      {
       "terme": "Optimisation topologique",
       "def": "Calcul qui enlève la matière inutile d'une pièce en fonction des efforts qu'elle subit."
      },
      {
       "terme": "Éprouvette témoin",
       "def": "Éprouvette fabriquée en même temps que les pièces pour vérifier les propriétés obtenues."
      }
     ]
    },
    {
     "id": "btrpm-rsp-suivi-maintenance",
     "titre": "Suivi d'une production qualifiée et maintenance des moyens de production",
     "niveau": "Tle",
     "options": [
      "rsp"
     ],
     "duree": 50,
     "objectifs": [
      "Lancer et qualifier une production à partir d'un dossier validé",
      "Réagir à une dérive ou à un incident de production en respectant les procédures",
      "Distinguer les types et les niveaux de maintenance",
      "Réaliser et tracer des opérations de maintenance préventive sur une machine-outil",
      "Exploiter les indicateurs de maintenance pour proposer des améliorations"
     ],
     "sections": [
      {
       "titre": "Qu'est-ce qu'une production qualifiée",
       "contenu": "<p>Une production est dite <strong>qualifiée</strong> lorsque son procédé (machine, programme, outillage, outils, conditions de coupe, contrôles) a été validé et figé dans un dossier, et que la première série a prouvé qu'il produit des pièces conformes de façon répétable. Le technicien qui suit une production qualifiée ne réinvente pas le procédé : il le <strong>reproduit</strong> fidèlement et le <strong>surveille</strong>.</p>\n<p>Le dossier de production comprend en général : l'ordre de fabrication, le dessin à l'indice en vigueur, les contrats de phase ou fiches de réglage, les programmes validés, la liste et les fiches de préréglage des outils, le plan de surveillance (caractéristiques à contrôler, moyens, fréquences, cartes) et les consignes de sécurité.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> toute modification d'un élément du procédé qualifié (programme, outil, porte-pièce, matière) doit être autorisée et tracée. Une « petite amélioration » non déclarée peut invalider la qualification aux yeux du client.</div>"
      },
      {
       "titre": "Lancer une série",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lancement d'une série sur un centre d'usinage. 1) Vérifier la concordance des indices : OF, dessin, programme, fiche de réglage. 2) Vérifier la matière (nuance, dimensions, numéro de coulée) et reporter le lot sur l'OF. 3) Préparer et prérégler les outils, saisir les jauges. 4) Monter et contrôler le porte-pièce, prendre l'origine. 5) Charger le programme validé, sans le modifier. 6) Usiner la première pièce en surveillance. 7) Contrôler toutes les caractéristiques de la première pièce et la faire valider (autocontrôle puis validation par le contrôle ou le chef d'équipe, selon l'organisation). 8) Lancer la série et appliquer le plan de surveillance.</div>\n<p>La <strong>validation de la première pièce</strong> est l'étape clé. Elle se formalise par un document signé : sans cette validation, les pièces suivantes sont produites sans preuve de conformité et pourraient toutes être à trier.</p>\n<p>Les réglages effectués sont notés : valeurs des correcteurs, décalage d'origine, éventuels outils remplacés. Ces informations accélèrent le prochain lancement de la même référence et servent à analyser les écarts.</p>"
      },
      {
       "titre": "Réagir aux dérives et aux incidents",
       "contenu": "<p>Pendant la série, plusieurs événements peuvent survenir. Les réactions attendues sont fixées par le plan de surveillance et les règles de l'entreprise :</p>\n<table>\n<thead><tr><th>Événement</th><th>Réaction attendue</th></tr></thead>\n<tbody>\n<tr><td>Dérive progressive d'une cote, dans la tolérance</td><td>Correction d'usure selon les règles, notée dans le journal de bord</td></tr>\n<tr><td>Point hors limites de contrôle</td><td>Arrêt, recherche de cause, contrôle renforcé des pièces depuis le dernier contrôle bon</td></tr>\n<tr><td>Pièce hors tolérance</td><td>Arrêt, isolement des pièces suspectes avec étiquette, fiche de non-conformité, information du responsable</td></tr>\n<tr><td>Casse d'outil</td><td>Arrêt, contrôle de la pièce en cours et des précédentes, remplacement, vérification de la jauge, reprise en surveillance</td></tr>\n<tr><td>Alarme machine inhabituelle</td><td>Ne pas acquitter à répétition ; relever le message et appeler la maintenance</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> remettre dans le flux des pièces douteuses « parce qu'elles sont sûrement bonnes » est la cause de nombreuses réclamations clients. Une pièce suspecte est isolée physiquement, identifiée, et ne quitte cette zone qu'après décision.</div>"
      },
      {
       "titre": "Types et niveaux de maintenance",
       "contenu": "<p>La norme NF EN 13306 définit la <strong>maintenance</strong> comme l'ensemble des actions destinées à maintenir ou rétablir un bien dans un état lui permettant d'accomplir sa fonction. On distingue :</p>\n<ul>\n<li>la <strong>maintenance corrective</strong>, après défaillance : <strong>palliative</strong> (dépannage provisoire) ou <strong>curative</strong> (réparation durable) ;</li>\n<li>la <strong>maintenance préventive</strong>, avant défaillance : <strong>systématique</strong> (selon un échéancier de temps ou d'usage), <strong>conditionnelle</strong> (déclenchée par la mesure d'un état, comme une température ou une vibration), <strong>prévisionnelle</strong> (fondée sur l'analyse de l'évolution d'un paramètre pour prévoir la défaillance).</li>\n</ul>\n<p>Les interventions sont réparties en <strong>cinq niveaux</strong> selon leur complexité (fascicule FD X60-000) :</p>\n<table>\n<thead><tr><th>Niveau</th><th>Exemples sur machine-outil</th><th>Intervenant usuel</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Contrôle des niveaux, nettoyage, purge, vérification des voyants</td><td>Opérateur</td></tr>\n<tr><td>2</td><td>Remplacement de filtres, graissage, réglage simple, échange standard d'éléments accessibles</td><td>Technicien formé, régleur</td></tr>\n<tr><td>3</td><td>Diagnostic de panne, remplacement de composants, réglages de géométrie</td><td>Technicien de maintenance</td></tr>\n<tr><td>4</td><td>Travaux importants de maintenance, révision de sous-ensembles</td><td>Équipe spécialisée</td></tr>\n<tr><td>5</td><td>Rénovation, reconstruction</td><td>Constructeur ou spécialiste</td></tr>\n</tbody>\n</table>\n<p>Le titulaire du bac pro, option réalisation et suivi de productions, intervient aux niveaux 1 et 2 sur les moyens de production, et participe au diagnostic avec la maintenance.</p>"
      },
      {
       "titre": "La maintenance préventive d'une machine-outil",
       "contenu": "<p>Le constructeur fournit dans la notice un <strong>plan de maintenance</strong> : liste des opérations, périodicités (en heures de fonctionnement ou en durée), produits à utiliser. Exemple simplifié pour un centre d'usinage :</p>\n<table>\n<thead><tr><th>Périodicité</th><th>Opérations</th></tr></thead>\n<tbody>\n<tr><td>Chaque poste</td><td>Nettoyage des copeaux, contrôle des niveaux de lubrification et de fluide, contrôle de la pression d'air</td></tr>\n<tr><td>Chaque semaine</td><td>Nettoyage du cône de broche et du changeur d'outils, contrôle de la concentration du fluide, purge du filtre à air</td></tr>\n<tr><td>Chaque mois</td><td>Nettoyage des filtres du groupe froid et de l'armoire électrique, contrôle des racleurs de glissières</td></tr>\n<tr><td>Chaque année</td><td>Vidange du groupe hydraulique, contrôle de géométrie et des jeux, vérification des sécurités</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> réaliser une intervention de niveau 2 (remplacement du filtre du groupe hydraulique). 1) Consulter la notice et la gamme de maintenance. 2) Préparer le filtre de rechange de la bonne référence et un bac de rétention. 3) Arrêter la machine et consigner l'énergie hydraulique et électrique selon la procédure, en vérifiant l'absence de pression résiduelle. 4) Remplacer le filtre, contrôler le joint. 5) Remettre en service, vérifier l'absence de fuite et la pression. 6) Trier le filtre usagé dans la filière des déchets souillés. 7) Renseigner l'intervention dans le carnet ou la GMAO.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les interventions sur les parties électriques exigent une <strong>habilitation électrique</strong> adaptée (selon la norme NF C 18-510), délivrée par l'employeur après formation. Un opérateur non habilité n'ouvre pas l'armoire électrique, même pour réarmer un disjoncteur.</div>"
      },
      {
       "titre": "Diagnostic et indicateurs de maintenance",
       "contenu": "<p>Face à une défaillance, le technicien participe au <strong>diagnostic</strong> en décrivant précisément les symptômes : message d'alarme exact, circonstances, bruit, odeur, comportement de la pièce. Une bonne description fait gagner un temps précieux à la maintenance.</p>\n<p>Les interventions sont enregistrées dans une <strong>GMAO</strong> (gestion de maintenance assistée par ordinateur) qui calcule des indicateurs :</p>\n<ul>\n<li>le <strong>MTBF</strong> (temps moyen de bon fonctionnement entre deux défaillances), indicateur de fiabilité ;</li>\n<li>le <strong>MTTR</strong> (temps moyen de réparation), indicateur de maintenabilité ;</li>\n<li>la <strong>disponibilité</strong>, qui relie les deux : D = MTBF / (MTBF + MTTR).</li>\n</ul>\n<p>Exemple : sur un trimestre, une machine a fonctionné 480 h avec 4 pannes ayant duré au total 12 h. MTBF = 480 / 4 = 120 h ; MTTR = 12 / 4 = 3 h ; D = 120 / 123 ≈ 0,976, soit 97,6 %.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> l'analyse des pannes répétitives (diagramme de Pareto par organe) conduit à faire évoluer le plan de maintenance préventive, par exemple en ajoutant une surveillance vibratoire de la broche ou un changement systématique d'un composant qui casse régulièrement. C'est le principe de la maintenance productive totale (TPM), qui associe production et maintenance.</div>"
      },
      {
       "titre": "Rendre compte de son activité",
       "contenu": "<p>Le suivi de production et la maintenance produisent des informations utiles seulement si elles sont transmises. Le technicien rédige ou renseigne :</p>\n<ul>\n<li>le <strong>journal de bord</strong> de la série (réglages, corrections, incidents) ;</li>\n<li>les <strong>fiches de non-conformité</strong> ;</li>\n<li>les <strong>bons de travaux</strong> ou demandes d'intervention à la maintenance ;</li>\n<li>la <strong>passation de consignes</strong> entre équipes, écrite et orale.</li>\n</ul>\n<p>Un compte rendu efficace est factuel, daté, chiffré et sans jugement : « 14 h 20, alarme 2045 lubrification glissières, niveau réservoir au minimum, complété avec 1 L d'huile de la référence prévue, alarme acquittée, à surveiller : deuxième fois cette semaine ».</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'équipe suivante ou la maintenance doit pouvoir reprendre la situation sans avoir à interroger celui qui l'a vécue.</div>\n<p>À l'oral, la passation de consignes en début de poste suit le même principe : état de la série (quantité produite, quantité restante), réglages récents, points de vigilance (outil proche de sa fin de vie, cote qui dérive, matière d'un nouveau lot), incidents non résolus et interventions de maintenance prévues. Elle se fait devant la machine, documents en main, et se termine par la vérification que l'équipe entrante a bien compris les priorités. Les informations essentielles sont aussi écrites, car une consigne orale seule se perd au poste suivant.</p>"
      }
     ],
     "points_cles": [
      "Une production qualifiée reproduit un procédé validé et figé",
      "La concordance des indices se vérifie avant tout lancement",
      "La validation formelle de la première pièce conditionne la série",
      "Toute pièce suspecte est isolée, identifiée et traitée par une fiche de non-conformité",
      "La maintenance est corrective ou préventive : systématique, conditionnelle ou prévisionnelle",
      "Cinq niveaux de maintenance ; l'opérateur et le régleur interviennent aux niveaux 1 et 2",
      "Toute intervention se fait après consignation et dans la limite de son habilitation",
      "Disponibilité = MTBF / (MTBF + MTTR)",
      "Un compte rendu est factuel, daté et chiffré"
     ],
     "lexique": [
      {
       "terme": "Production qualifiée",
       "def": "Production dont le procédé a été validé et figé dans un dossier."
      },
      {
       "terme": "Plan de surveillance",
       "def": "Document qui fixe les caractéristiques à contrôler, les moyens, les fréquences et les réactions."
      },
      {
       "terme": "Maintenance corrective",
       "def": "Maintenance réalisée après la détection d'une défaillance."
      },
      {
       "terme": "Maintenance préventive conditionnelle",
       "def": "Maintenance déclenchée par la mesure d'un paramètre d'état du bien."
      },
      {
       "terme": "Consignation",
       "def": "Ensemble des opérations qui mettent un équipement en sécurité en séparant et en condamnant ses énergies."
      },
      {
       "terme": "GMAO",
       "def": "Logiciel de gestion de maintenance assistée par ordinateur."
      },
      {
       "terme": "MTBF",
       "def": "Temps moyen de bon fonctionnement entre deux défaillances."
      },
      {
       "terme": "MTTR",
       "def": "Temps moyen de réparation après défaillance."
      },
      {
       "terme": "Habilitation électrique",
       "def": "Reconnaissance par l'employeur de la capacité d'une personne à intervenir en sécurité vis-à-vis du risque électrique."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 6 — Option réalisation et maintenance des outillages",
   "bloc": "Cours théorique",
   "chapitres": [
    {
     "id": "btrpm-rmo-outils-presse",
     "titre": "Outils de découpe, de pliage et d'emboutissage",
     "niveau": "1re",
     "options": [
      "rmo"
     ],
     "duree": 50,
     "objectifs": [
      "Identifier les éléments d'un outil de presse et leur fonction",
      "Calculer l'effort de découpe et vérifier l'adéquation avec la presse",
      "Déterminer les cotes des poinçons et matrices à partir du jeu de découpe",
      "Lire une mise en bande d'outil progressif et calculer le taux d'utilisation de la matière",
      "Expliquer les principaux défauts de pièces découpées et embouties et leurs causes côté outil"
     ],
     "sections": [
      {
       "titre": "Anatomie d'un outil de presse",
       "contenu": "<p>Un <strong>outil de presse</strong> est un ensemble mécanique monté entre la table et le coulisseau d'une presse. Il comprend une partie inférieure fixe et une partie supérieure mobile, guidées l'une par rapport à l'autre. Les éléments principaux sont :</p>\n<table>\n<thead><tr><th>Élément</th><th>Fonction</th><th>Matériau usuel</th></tr></thead>\n<tbody>\n<tr><td>Semelles supérieure et inférieure</td><td>Porter les éléments, fixer l'outil sur la presse</td><td>Acier de construction ou fonte</td></tr>\n<tr><td>Colonnes et bagues de guidage</td><td>Guider la partie supérieure</td><td>Éléments normalisés trempés rectifiés</td></tr>\n<tr><td>Plaque porte-poinçons</td><td>Positionner et tenir les poinçons</td><td>Acier prétraité</td></tr>\n<tr><td>Poinçons</td><td>Découper, percer, former</td><td>Acier à outils trempé, acier rapide, carbure</td></tr>\n<tr><td>Matrice</td><td>Contour de découpe ou empreinte de formage</td><td>Acier à outils trempé (1.2379 par exemple)</td></tr>\n<tr><td>Dévêtisseur</td><td>Plaquer la bande et l'extraire des poinçons</td><td>Acier, guidé et poussé par ressorts</td></tr>\n<tr><td>Pilotes</td><td>Recentrer la bande à chaque pas par des trous déjà percés</td><td>Acier trempé</td></tr>\n<tr><td>Guides de bande et butées</td><td>Positionner la bande latéralement et en avance</td><td>Acier trempé</td></tr>\n<tr><td>Ressorts, vérins à gaz</td><td>Fournir les efforts du dévêtisseur ou du serre-flan</td><td>Éléments normalisés</td></tr>\n</tbody>\n</table>\n<p>Les éléments normalisés (colonnes, bagues, ressorts, poinçons standards, vis) sont achetés sur catalogue ; les éléments actifs propres à la pièce (matrices, poinçons de forme) sont réalisés par l'outilleur.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> les éléments qui touchent la tôle sont appelés <strong>éléments actifs</strong>. Ils s'usent et se changent ; le reste de l'outil est la structure, qui doit rester précise et rigide.</div>"
      },
      {
       "titre": "Effort de découpe et choix de la presse",
       "contenu": "<p>Le chapitre sur les efforts a donné la formule de l'effort de découpe : F = p × e × R<sub>cis</sub>. Pour un outil, on additionne les efforts de tous les poinçons qui coupent en même temps, et l'on ajoute les efforts annexes : effort de dévêtissage (souvent estimé à quelques pour cent à une dizaine de pour cent de l'effort de découpe) et effort des ressorts ou vérins à comprimer.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> outil qui découpe une rondelle ⌀40 percée ⌀20 dans une tôle d'acier de 1,5 mm, R<sub>m</sub> = 400 MPa. 1) R<sub>cis</sub> ≈ 0,8 × 400 = 320 MPa. 2) Périmètre extérieur : π × 40 ≈ 125,7 mm ; intérieur : π × 20 ≈ 62,8 mm ; total ≈ 188,5 mm. 3) Effort : 188,5 × 1,5 × 320 ≈ 90 500 N ≈ 90 kN. 4) Ajouter 10 % pour le dévêtissage : ≈ 100 kN. 5) Choisir une presse dont la capacité nominale dépasse nettement cette valeur, en tenant compte de la course à laquelle l'effort nominal est disponible : une presse de 250 kN convient largement.</div>\n<p>Pour réduire l'effort maximal, on peut <strong>décaler en hauteur</strong> les poinçons (ils n'attaquent pas tous en même temps) ou donner une <strong>coupe inclinée</strong> (biais) à la matrice ou au poinçon. Il faut aussi veiller à ce que la résultante des efforts soit au centre du coulisseau, sinon la presse et l'outil travaillent de travers.</p>"
      },
      {
       "titre": "Jeu de découpe et cotes des éléments actifs",
       "contenu": "<p>Le <strong>jeu de découpe</strong> se choisit selon l'épaisseur et la nature de la tôle. Les valeurs usuelles se situent autour de quelques pour cent de l'épaisseur par côté : plus faibles pour les tôles douces et minces, plus grandes pour les tôles dures et épaisses. Les tables des fournisseurs d'éléments ou les règles de l'entreprise donnent la valeur à retenir.</p>\n<p>La règle de répartition est fondamentale :</p>\n<ul>\n<li>pour un <strong>trou</strong> (poinçonnage), c'est le <strong>poinçon</strong> qui donne la cote : poinçon à la cote du trou, matrice agrandie du double jeu ;</li>\n<li>pour un <strong>contour extérieur</strong> (découpage), c'est la <strong>matrice</strong> qui donne la cote : matrice à la cote de la pièce, poinçon réduit du double jeu.</li>\n</ul>\n<p>On tient compte en plus de l'usure : un poinçon s'use et diminue, une matrice s'use et s'agrandit. On réalise donc souvent le poinçon d'un trou vers la cote maxi du trou, et la matrice d'un contour vers la cote mini de la pièce, pour disposer de la plus grande réserve d'usure.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> trou ⌀10 +0,1/0 dans une tôle de 2 mm, jeu retenu 0,1 mm par côté. 1) L'élément qui donne la cote est le poinçon. 2) Viser le haut de la tolérance pour la réserve d'usure : poinçon ⌀10,08 environ. 3) Matrice : 10,08 + 2 × 0,1 = ⌀10,28. 4) Vérifier sur les premières pièces que le trou mesure entre 10,0 et 10,1, en se rappelant que le trou découpé est légèrement plus petit que le poinçon dans la zone cisaillée selon la matière.</div>"
      },
      {
       "titre": "Outils progressifs et mise en bande",
       "contenu": "<p>Dans un <strong>outil progressif</strong>, la bande avance d'un <strong>pas</strong> à chaque coup de presse et passe successivement par plusieurs postes : poinçonnage des trous de pilotage, poinçonnages, crevés, pliages, découpe finale. La pièce reste liée à la bande par des <strong>attaches</strong> jusqu'au dernier poste.</p>\n<p>La <strong>mise en bande</strong> est le dessin qui représente la bande et toutes les opérations, poste par poste. Elle fixe la largeur de bande, le pas, la position des pilotes et l'ordre des opérations. Elle permet de calculer le <strong>taux d'utilisation de la matière</strong> :</p>\n<p>taux = surface de la pièce / (pas × largeur de bande).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pièce de surface 1 800 mm² découpée dans une bande de 52 mm de large avec un pas de 48 mm. 1) Surface consommée par pièce : 52 × 48 = 2 496 mm². 2) Taux d'utilisation : 1 800 / 2 496 ≈ 0,72, soit 72 %. 3) Les 28 % restants sont des chutes. 4) Pour une grande série, une imbrication tête-bêche sur deux rangées peut améliorer ce taux ; on l'étudie si la matière représente une part importante du coût.</div>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> sans pilotes, l'erreur d'avance de la bande se cumule de poste en poste. Les pilotes doivent entrer dans leurs trous <strong>avant</strong> que les poinçons ne touchent la tôle ; leur longueur se vérifie au montage.</div>"
      },
      {
       "titre": "Pliage et emboutissage : ce que l'outil doit compenser",
       "contenu": "<p>En <strong>pliage</strong>, la tôle reprend une partie de sa forme à la décharge : c'est le <strong>retour élastique</strong>. Il augmente avec la limite d'élasticité de la tôle et avec le rapport rayon de pliage / épaisseur. L'outil le compense par un surpliage (angle de l'outil plus fermé que l'angle voulu), par un écrasement localisé dans le rayon, ou par une reprise de forme.</p>\n<p>La <strong>longueur développée</strong> d'une pièce pliée se calcule à partir de la <strong>fibre neutre</strong>, qui ne s'allonge ni ne se raccourcit ; elle est située à une fraction de l'épaisseur depuis l'intérieur du pli, fraction donnée par des tables selon le rapport rayon / épaisseur.</p>\n<p>En <strong>emboutissage</strong>, l'outil comprend un poinçon, une matrice et un <strong>serre-flan</strong>. L'effort du serre-flan est un réglage délicat :</p>\n<table>\n<thead><tr><th>Défaut</th><th>Cause probable côté outil</th></tr></thead>\n<tbody>\n<tr><td>Plis sur la collerette</td><td>Serre-flan insuffisant</td></tr>\n<tr><td>Rupture au fond ou dans le rayon du poinçon</td><td>Serre-flan trop fort, rayon de matrice trop petit, lubrification insuffisante</td></tr>\n<tr><td>Rayures sur la pièce</td><td>Rayon de matrice mal poli, grippage</td></tr>\n<tr><td>Cornes (bord irrégulier)</td><td>Anisotropie de la tôle, à prévoir par un détourage</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Défauts des pièces découpées et diagnostic",
       "contenu": "<p>L'observation des pièces renseigne sur l'état de l'outil :</p>\n<table>\n<thead><tr><th>Constat sur la pièce</th><th>Cause probable</th><th>Action</th></tr></thead>\n<tbody>\n<tr><td>Bavure qui augmente progressivement</td><td>Usure des arêtes du poinçon ou de la matrice</td><td>Affûtage (rectification des faces)</td></tr>\n<tr><td>Bavure d'un seul côté du contour</td><td>Jeu décentré : poinçon mal positionné, guidage usé</td><td>Contrôle du centrage, des colonnes et bagues</td></tr>\n<tr><td>Zone cisaillée très courte, arrachement important</td><td>Jeu trop grand</td><td>Vérifier le jeu, remplacer l'élément</td></tr>\n<tr><td>Double zone cisaillée</td><td>Jeu trop faible</td><td>Reprendre la matrice</td></tr>\n<tr><td>Déchet qui remonte avec le poinçon</td><td>Aspiration du déchet, matrice sans dépouille suffisante</td><td>Poinçon éjecteur, reprise de la dépouille</td></tr>\n<tr><td>Trous décalés</td><td>Pilotage défaillant, avance mal réglée</td><td>Contrôle des pilotes et de l'avance</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> chaque outil de presse a une <strong>fiche de vie</strong> qui enregistre le nombre de coups réalisés, les affûtages (avec la hauteur enlevée), les remplacements d'éléments et les incidents. L'affûtage est déclenché par une hauteur de bavure maximale fixée par le client ou par un nombre de coups.</div>"
      }
     ],
     "points_cles": [
      "Les éléments actifs touchent la tôle ; la structure de l'outil assure guidage et rigidité",
      "L'effort total additionne tous les poinçons qui coupent simultanément et le dévêtissage",
      "Pour un trou, le poinçon donne la cote ; pour un contour, c'est la matrice",
      "On vise la cote qui laisse la plus grande réserve d'usure",
      "La mise en bande fixe pas, largeur de bande, pilotes et ordre des opérations",
      "Taux d'utilisation de la matière = surface de la pièce / (pas × largeur)",
      "Le retour élastique se compense par surpliage ou écrasement",
      "Le serre-flan règle le compromis entre plis et ruptures en emboutissage",
      "La bavure renseigne sur l'usure et le centrage du jeu"
     ],
     "lexique": [
      {
       "terme": "Élément actif",
       "def": "Élément d'un outil de presse en contact avec la tôle : poinçon, matrice, serre-flan."
      },
      {
       "terme": "Dévêtisseur",
       "def": "Plaque qui maintient la bande et l'extrait des poinçons lors de la remontée."
      },
      {
       "terme": "Pilote",
       "def": "Pion qui entre dans un trou de la bande pour la positionner précisément à chaque pas."
      },
      {
       "terme": "Pas",
       "def": "Avance de la bande entre deux coups de presse dans un outil progressif."
      },
      {
       "terme": "Mise en bande",
       "def": "Dessin de la bande montrant toutes les opérations successives d'un outil progressif."
      },
      {
       "terme": "Attache",
       "def": "Partie de matière qui relie la pièce à la bande jusqu'au dernier poste."
      },
      {
       "terme": "Fibre neutre",
       "def": "Couche de la tôle qui ne change pas de longueur lors du pliage."
      },
      {
       "terme": "Retour élastique",
       "def": "Ouverture partielle d'un pli après décharge, due à l'élasticité de la tôle."
      },
      {
       "terme": "Affûtage",
       "def": "Rectification des faces d'un poinçon ou d'une matrice pour retrouver des arêtes vives."
      }
     ]
    },
    {
     "id": "btrpm-rmo-moules",
     "titre": "Moules d'injection et moules de fonderie sous pression",
     "niveau": "1re",
     "options": [
      "rmo"
     ],
     "duree": 50,
     "objectifs": [
      "Identifier les plaques et les éléments d'un moule d'injection et leur fonction",
      "Expliquer l'alimentation, l'éjection, la régulation thermique et l'évacuation de l'air",
      "Dimensionner une empreinte en tenant compte du retrait",
      "Décrire les mécanismes de démoulage des contre-dépouilles",
      "Relier les défauts des pièces moulées à leurs causes côté moule"
     ],
     "sections": [
      {
       "titre": "Architecture d'un moule d'injection",
       "contenu": "<p>Un moule d'injection plastique est construit à partir d'une <strong>carcasse</strong> (ou châssis) souvent achetée chez un fournisseur d'éléments normalisés, dans laquelle l'outilleur réalise les <strong>empreintes</strong> et les éléments propres à la pièce. On distingue deux parties séparées par le <strong>plan de joint</strong> :</p>\n<ul>\n<li>la <strong>partie fixe</strong>, côté injection, fixée au plateau fixe de la presse : plaque de fixation, bague de centrage, buse ou douille de carotte, plaque porte-empreinte fixe ;</li>\n<li>la <strong>partie mobile</strong>, côté éjection, fixée au plateau mobile : plaque porte-empreinte mobile, plaque d'appui, tasseaux, batterie d'éjection (plaques porte-éjecteurs et éjecteurs), plaque de fixation.</li>\n</ul>\n<p>Le <strong>guidage</strong> entre les deux parties est assuré par des colonnes et des bagues, complétées par des <strong>centreurs</strong> de plan de joint (cônes ou plats) pour l'alignement précis des empreintes au moment de la fermeture.</p>\n<table>\n<thead><tr><th>Élément</th><th>Fonction</th></tr></thead>\n<tbody>\n<tr><td>Empreinte (ou insert)</td><td>Donner la forme de la pièce</td></tr>\n<tr><td>Noyau</td><td>Partie en relief qui forme l'intérieur de la pièce</td></tr>\n<tr><td>Éjecteurs</td><td>Pousser la pièce hors de l'empreinte à l'ouverture</td></tr>\n<tr><td>Circuits de régulation</td><td>Faire circuler un fluide pour maintenir le moule à la bonne température</td></tr>\n<tr><td>Évents</td><td>Laisser s'échapper l'air de l'empreinte pendant le remplissage</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la pièce reste, à l'ouverture, du côté où se trouve le système d'éjection : on conçoit le moule pour que la pièce adhère à la partie mobile, en général sur le noyau.</div>"
      },
      {
       "titre": "L'alimentation de l'empreinte",
       "contenu": "<p>La matière fondue suit le chemin : buse de la presse, <strong>carotte</strong>, <strong>canaux d'alimentation</strong>, <strong>seuil</strong>, empreinte. Le seuil est un rétrécissement qui contrôle l'entrée de la matière et facilite la séparation de la pièce et des canaux. On distingue :</p>\n<ul>\n<li>les <strong>canaux froids</strong> : les canaux se solidifient à chaque cycle et sont éjectés avec la pièce, puis séparés et souvent rebroyés ;</li>\n<li>les <strong>canaux chauds</strong> : un bloc chauffé maintient la matière fondue jusqu'au seuil ; il n'y a pas de déchet de carotte, mais le moule est plus cher et demande une régulation électrique de chaque zone.</li>\n</ul>\n<p>Les types de seuils les plus courants sont le seuil latéral (simple, laisse une trace à couper), le seuil sous-marin ou en tunnel (séparation automatique à l'éjection), et le seuil capillaire ou à obturateur sur canaux chauds. Dans un moule à plusieurs empreintes, les canaux sont <strong>équilibrés</strong> pour que toutes les empreintes se remplissent en même temps.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> la position du seuil détermine l'orientation des fibres, la position des <strong>lignes de soudure</strong> (rencontre de deux fronts de matière, zone fragile et visible) et celle de la trace d'injection. Modifier un seuil « pour mieux remplir » sans accord du concepteur peut rendre la pièce non conforme.</div>"
      },
      {
       "titre": "Dimensionner l'empreinte : le retrait",
       "contenu": "<p>En refroidissant, la matière se contracte : c'est le <strong>retrait</strong>. L'empreinte doit donc être plus grande que la pièce. On applique un coefficient de retrait propre à la matière (donné par le fournisseur de matière, avec une plage), parfois différent selon la direction de l'écoulement.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pièce en polypropylène de longueur 120 mm, retrait estimé 1,8 %. 1) Cote d'empreinte = cote pièce × (1 + retrait). 2) L = 120 × 1,018 = 122,16 mm. 3) Pour une cote tolérancée, appliquer le calcul à la cote moyenne. 4) Prévoir, quand c'est possible, de laisser de la « matière acier » sur les cotes incertaines : il est facile d'enlever de l'acier pour agrandir une empreinte après essai, très difficile d'en rajouter. 5) Ajuster après les premiers essais et la mesure des pièces stabilisées (souvent 24 h après moulage).</div>\n<p>On parle de cote « <strong>acier en plus</strong> » (safe steel) : sur une empreinte, on réalise la cote de façon à pouvoir la corriger par enlèvement de matière. Une cote intérieure de la pièce, formée par un noyau, se corrige en diminuant le noyau ; une cote extérieure, formée par l'empreinte, se corrige en agrandissant l'empreinte.</p>"
      },
      {
       "titre": "Démoulage, éjection et contre-dépouilles",
       "contenu": "<p>Le démoulage est facilité par les <strong>dépouilles</strong> et assuré par l'<strong>éjection</strong>. Les éjecteurs les plus courants sont des tiges cylindriques ; on utilise aussi des lames, des tubes (douilles d'éjection autour d'un noyau), une plaque dévêtisseuse pour les pièces fines, ou de l'air comprimé.</p>\n<p>Une <strong>contre-dépouille</strong> est une forme qui empêche le démoulage dans l'axe d'ouverture : trou latéral, clip, filetage. Elle nécessite un mécanisme :</p>\n<table>\n<thead><tr><th>Mécanisme</th><th>Principe</th><th>Exemple</th></tr></thead>\n<tbody>\n<tr><td>Tiroir à doigt de commande</td><td>Un doigt incliné fixé à la partie fixe déplace latéralement un tiroir à l'ouverture</td><td>Trou latéral</td></tr>\n<tr><td>Tiroir à vérin</td><td>Un vérin hydraulique déplace le tiroir, commandé par la presse</td><td>Grande course</td></tr>\n<tr><td>Éjecteur incliné (ou dévêtisseur oblique)</td><td>L'élément se déplace en biais pendant l'éjection et libère une contre-dépouille intérieure</td><td>Clip intérieur</td></tr>\n<tr><td>Noyau dévissant</td><td>Le noyau tourne pour libérer un filetage</td><td>Bouchon fileté</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> un tiroir doit être verrouillé en position fermée par un <strong>talon de verrouillage</strong> qui reprend la pression d'injection, et il doit être reculé avant que les éjecteurs ne poussent la pièce. Les interférences entre tiroirs et éjecteurs au retour sont une cause classique de casse ; des sécurités (retour anticipé des éjecteurs, contacts de position) sont souvent prévues.</div>"
      },
      {
       "titre": "Régulation thermique et évacuation de l'air",
       "contenu": "<p>Le refroidissement représente souvent la plus grande partie du temps de cycle. Les <strong>circuits de régulation</strong> sont des perçages dans les plaques, reliés par des bouchons et des raccords, parcourus par de l'eau ou de l'huile à température contrôlée par un <strong>thermorégulateur</strong>. Pour refroidir un noyau élancé, on utilise des <strong>cascades</strong> (tube central) ou des <strong>lames</strong> séparatrices dans un perçage borgne. Les inserts réalisés par fabrication additive permettent un <strong>refroidissement conforme</strong> qui suit la forme de l'empreinte.</p>\n<p>Un refroidissement déséquilibré entre partie fixe et partie mobile provoque des déformations de la pièce (voilage). Les circuits sont repérés (entrées et sorties numérotées) et le schéma de raccordement est fourni avec le moule.</p>\n<p>L'air contenu dans l'empreinte doit s'échapper pendant le remplissage par des <strong>évents</strong> : fines rainures de quelques centièmes de millimètre de profondeur sur le plan de joint, assez étroites pour que la matière ne passe pas. Sans évent, l'air comprimé chauffe et brûle la matière (points noirs, manques en bout d'écoulement).</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> à la réception d'un moule et après chaque maintenance, on vérifie l'étanchéité et le débit des circuits de régulation. Un circuit partiellement bouché par du tartre modifie le temps de cycle et la qualité, sans signe visible sur le moule.</div>"
      },
      {
       "titre": "Moules de fonderie sous pression",
       "contenu": "<p>Les moules de <strong>fonderie sous pression</strong> (alliages d'aluminium, de zinc, de magnésium) ont une architecture voisine : parties fixe et mobile, empreintes, éjection, tiroirs. Leurs particularités viennent des températures et des vitesses en jeu :</p>\n<ul>\n<li>empreintes en <strong>acier pour travail à chaud</strong> (de type 1.2344), trempées et souvent nitrurées ;</li>\n<li>usure par <strong>fatigue thermique</strong> : le chauffage et le refroidissement brutal à chaque cycle créent un réseau de fines fissures en surface (faïençage), qui marque les pièces ;</li>\n<li>présence de <strong>talons de lavage</strong> (ou masselottes) et de <strong>chambres de trop-plein</strong> pour recueillir le métal froid et l'air ;</li>\n<li>application d'un <strong>agent de démoulage</strong> pulvérisé à chaque cycle.</li>\n</ul>\n<p>La maintenance de ces moules comporte des traitements de détente périodiques, des reprises des zones faïencées par soudage et usinage, et le renouvellement des inserts les plus sollicités.</p>"
      },
      {
       "titre": "Défauts des pièces moulées et causes côté moule",
       "contenu": "<table>\n<thead><tr><th>Défaut</th><th>Description</th><th>Causes possibles côté moule</th></tr></thead>\n<tbody>\n<tr><td>Bavure</td><td>Fine pellicule de matière au plan de joint</td><td>Plan de joint usé ou abîmé, évents trop profonds, force de fermeture insuffisante</td></tr>\n<tr><td>Manque (pièce incomplète)</td><td>Zone non remplie</td><td>Évents bouchés, seuil trop petit, moule trop froid</td></tr>\n<tr><td>Retassure</td><td>Creux sur une surface en face d'une zone épaisse</td><td>Seuil trop petit qui fige avant la fin du maintien, refroidissement insuffisant</td></tr>\n<tr><td>Brûlure</td><td>Point noir en fin de remplissage</td><td>Air piégé, évents absents ou bouchés</td></tr>\n<tr><td>Déformation</td><td>Pièce voilée</td><td>Régulation déséquilibrée, éjection prématurée ou mal répartie</td></tr>\n<tr><td>Marques d'éjecteurs</td><td>Empreintes ou blanchiments</td><td>Éjecteurs mal ajustés en hauteur, éjection trop brutale</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un même défaut peut venir du moule, de la matière ou des réglages de la presse. Le diagnostic se fait en équipe avec le régleur de la presse ; le mouliste n'intervient sur l'acier qu'une fois les causes de réglage écartées.</div>"
      }
     ],
     "points_cles": [
      "Le moule comprend une partie fixe côté injection et une partie mobile côté éjection",
      "La pièce doit rester côté éjection à l'ouverture",
      "Carotte, canaux et seuil conduisent la matière ; les canaux chauds évitent les déchets",
      "Cote d'empreinte = cote pièce × (1 + retrait)",
      "On garde de l'acier en plus pour pouvoir corriger après essais",
      "Tiroirs, éjecteurs inclinés et noyaux dévissants démoulent les contre-dépouilles",
      "Les circuits de régulation fixent le temps de cycle et la stabilité dimensionnelle",
      "Les évents évacuent l'air sans laisser passer la matière",
      "Les moules de fonderie sous pression s'usent par fatigue thermique"
     ],
     "lexique": [
      {
       "terme": "Empreinte",
       "def": "Cavité du moule qui donne sa forme à la pièce."
      },
      {
       "terme": "Noyau",
       "def": "Partie en relief du moule qui forme une cavité ou l'intérieur de la pièce."
      },
      {
       "terme": "Carotte",
       "def": "Canal conique qui conduit la matière de la buse de la presse aux canaux du moule."
      },
      {
       "terme": "Seuil",
       "def": "Passage rétréci par lequel la matière entre dans l'empreinte."
      },
      {
       "terme": "Canal chaud",
       "def": "Système chauffé qui garde la matière fondue jusqu'au seuil."
      },
      {
       "terme": "Tiroir",
       "def": "Élément mobile qui forme une contre-dépouille et se retire avant l'éjection."
      },
      {
       "terme": "Évent",
       "def": "Fine rainure qui laisse s'échapper l'air de l'empreinte."
      },
      {
       "terme": "Retassure",
       "def": "Creux de surface dû au retrait de la matière dans une zone épaisse."
      },
      {
       "terme": "Faïençage",
       "def": "Réseau de fissures superficielles dû à la fatigue thermique d'un moule."
      }
     ]
    },
    {
     "id": "btrpm-rmo-electroerosion-finition",
     "titre": "Électroérosion et finition des éléments d'outillage",
     "niveau": "Tle",
     "options": [
      "rmo"
     ],
     "duree": 50,
     "objectifs": [
      "Expliquer le principe de l'électroérosion et ses deux variantes : à fil et par enfonçage",
      "Préparer un découpage à fil : trou de départ, attaches, passes, décalages",
      "Concevoir et réaliser une électrode d'enfonçage en tenant compte du jeu d'étincelage",
      "Situer l'usinage grande vitesse sur acier trempé et la rectification dans la gamme d'un outillage",
      "Organiser l'ajustage et le polissage d'une empreinte"
     ],
     "sections": [
      {
       "titre": "Le principe de l'électroérosion",
       "contenu": "<p>L'<strong>électroérosion</strong> (EDM, Electrical Discharge Machining) enlève de la matière par une succession très rapide de <strong>décharges électriques</strong> entre une électrode et la pièce, séparées par un liquide isolant, le <strong>diélectrique</strong>. Chaque étincelle fond et vaporise un minuscule volume de métal ; le diélectrique refroidit la zone et évacue les particules.</p>\n<p>Ce procédé présente des avantages décisifs pour l'outillage :</p>\n<ul>\n<li>il usine tout matériau conducteur <strong>quelle que soit sa dureté</strong> : acier à outils trempé à 60 HRC, carbure de tungstène ;</li>\n<li>il n'exerce <strong>pas d'effort de coupe</strong> : pas de déformation, possibilité de formes fines ;</li>\n<li>il réalise des <strong>angles intérieurs vifs</strong> et des formes impossibles à fraiser.</li>\n</ul>\n<p>Ses limites sont la lenteur relative et la formation, en surface, d'une <strong>couche refondue</strong> (ou zone blanche) dure et fragile, qu'on réduit par des passes de finition successives.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> en électroérosion, la pièce doit être conductrice, mais sa dureté n'a presque pas d'importance. C'est pourquoi on termine les éléments actifs d'outillage par électroérosion après trempe.</div>"
      },
      {
       "titre": "L'électroérosion à fil",
       "contenu": "<p>En <strong>électroérosion à fil</strong>, l'électrode est un fil métallique (souvent en laiton, de diamètre courant 0,25 mm, plus fin pour les formes minuscules) qui se déroule en continu entre deux guides. Le diélectrique est de l'<strong>eau déionisée</strong>. La machine déplace le fil selon X et Y, et incline éventuellement le fil (axes U et V) pour réaliser des dépouilles ou des formes à sections différentes en haut et en bas.</p>\n<p>Le fil découpe un contour <strong>traversant</strong> : matrices de découpe, poinçons, plaques porte-poinçons, inserts de moules, électrodes. Il faut donc un <strong>trou de départ</strong> préalablement percé (au foret avant trempe, ou par une perceuse par électroérosion rapide) pour les contours fermés intérieurs.</p>\n<p>Un découpage se fait en plusieurs passes :</p>\n<ul>\n<li>une <strong>passe d'ébauche</strong> qui découpe le contour avec un décalage ;</li>\n<li>une ou plusieurs <strong>passes de finition</strong> à énergie décroissante, qui améliorent précision et état de surface et réduisent la couche refondue.</li>\n</ul>\n<p>Le <strong>décalage</strong> de la trajectoire comprend le rayon du fil, le <strong>jeu d'étincelage</strong> et la surépaisseur laissée pour les passes suivantes ; la machine le calcule à partir de tables technologiques selon la matière, l'épaisseur et la qualité visée.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> quand le contour est entièrement découpé, la chute (ou la pièce) tombe et peut coincer le fil ou s'abîmer. On laisse une ou plusieurs <strong>attaches</strong> (petits ponts de matière) pendant l'ébauche, on termine les finitions, puis on coupe les attaches à la fin en maintenant la partie à récupérer.</div>"
      },
      {
       "titre": "Préparer un découpage à fil",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> découper l'ouverture d'une matrice de découpe trempée (épaisseur 25 mm), contour avec un jeu de découpe à respecter. 1) Vérifier que le trou de départ (⌀3 ou ⌀4 mm environ) a été percé avant trempe, à l'intérieur de la forme. 2) Brider la plaque sur les supports de la machine, faces rectifiées en référence, et la dégauchir au palpeur pour aligner ses bords sur les axes. 3) Prendre l'origine par palpage électrique du fil sur les faces de référence ou dans un alésage de référence. 4) Choisir la technologie (matière, épaisseur, nombre de passes, qualité) dans la bibliothèque de la machine. 5) Programmer le contour à la cote de la matrice, avec la dépouille de dégagement des déchets (angle de quelques dixièmes de degré à partir d'une hauteur de coupe définie) si elle est demandée. 6) Placer l'attache dans une zone facile à reprendre. 7) Lancer ébauche et finitions, couper l'attache, ébavurer, contrôler.</div>\n<p>Pour les matrices de découpe, la partie de l'ouverture proche de l'arête de coupe (la <strong>hauteur de coupe</strong>, quelques millimètres) est souvent droite, et le dessous est dépouillé pour que les déchets tombent sans se coincer. L'inclinaison des axes U et V permet de réaliser cette forme en une seule opération.</p>\n<p>Le contrôle des contours découpés se fait sur MMT, sur projecteur de profil ou par l'essai d'un poinçon correspondant, qui doit entrer avec un jeu régulier sur tout le pourtour.</p>"
      },
      {
       "titre": "L'électroérosion par enfonçage",
       "contenu": "<p>En <strong>électroérosion par enfonçage</strong>, une <strong>électrode</strong> de forme, généralement en graphite ou en cuivre, s'enfonce dans la pièce et y reproduit sa forme en négatif. Le diélectrique est une <strong>huile</strong> spéciale. Ce procédé réalise les empreintes de moules non débouchantes, les nervures fines et profondes, les angles vifs, les textures, les formes en fond de poche inaccessibles à une fraise.</p>\n<p>L'électrode doit être plus petite que la forme à obtenir, de la valeur du <strong>jeu d'étincelage</strong> (gap) de chaque côté. On réalise souvent deux électrodes ou plus :</p>\n<table>\n<thead><tr><th>Électrode</th><th>Réduction par côté (ordre de grandeur indicatif)</th><th>Rôle</th></tr></thead>\n<tbody>\n<tr><td>Ébauche</td><td>Plus importante (quelques dixièmes de mm)</td><td>Enlever la matière avec une énergie élevée</td></tr>\n<tr><td>Finition</td><td>Faible (quelques centièmes de mm)</td><td>Obtenir la cote et l'état de surface</td></tr>\n</tbody>\n</table>\n<p>Les valeurs exactes de réduction dépendent de la technologie choisie et sont données par les tables du constructeur de la machine. Les électrodes sont usinées en fraisage grande vitesse (graphite) ou en tournage-fraisage (cuivre) à partir du modèle de l'empreinte, réduit de la valeur choisie, ce qui se fait facilement en FAO par une surépaisseur négative.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les électrodes sont montées sur des porte-électrodes à système de référence rapide, communs à la fraiseuse qui les usine, à la machine de mesure et à la machine d'électroérosion. Une électrode mesurée sur sa référence peut ainsi être montée sans réglage, ce qui permet d'enchaîner ébauche et finition automatiquement avec un changeur d'électrodes.</div>"
      },
      {
       "titre": "Usinage grande vitesse et rectification",
       "contenu": "<p>L'électroérosion n'est pas toujours la meilleure solution. Deux autres procédés interviennent dans la gamme des éléments d'outillage :</p>\n<ul>\n<li>l'<strong>usinage grande vitesse</strong> (UGV) sur matériau trempé : avec des fraises carbure revêtues ou CBN de petit diamètre, des broches très rapides et des faibles prises de passe, on finit directement les empreintes et les électrodes à 50 à 60 HRC, avec un très bon état de surface ; il évite souvent la fabrication d'électrodes ;</li>\n<li>la <strong>rectification</strong> : plane pour les faces de référence et les épaisseurs des plaques, cylindrique pour les colonnes et poinçons ronds, de profil pour les poinçons de forme ; elle donne la meilleure précision dimensionnelle et le meilleur parallélisme.</li>\n</ul>\n<table>\n<thead><tr><th>Besoin</th><th>Procédé privilégié</th></tr></thead>\n<tbody>\n<tr><td>Contour traversant précis dans une plaque trempée</td><td>Électroérosion à fil</td></tr>\n<tr><td>Empreinte ouverte avec rayons, matériau trempé</td><td>UGV sur trempé</td></tr>\n<tr><td>Nervure fine et profonde, angle vif intérieur</td><td>Électroérosion par enfonçage</td></tr>\n<tr><td>Faces parallèles, épaisseur de plaque</td><td>Rectification plane</td></tr>\n<tr><td>Poinçon cylindrique, colonne</td><td>Rectification cylindrique</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> l'outilleur choisit le procédé de finition élément par élément, en croisant la forme, la dureté, la précision et le coût, et souvent en combinant plusieurs procédés sur une même pièce.</div>"
      },
      {
       "titre": "Ajustage et polissage",
       "contenu": "<p>Après usinage, les éléments d'un outillage passent par l'<strong>ajustage</strong> : ébavurage, reprise des arêtes, ajustement des éléments mobiles (tiroirs, éjecteurs, poinçons dans leurs logements) et vérification des portées au <strong>bleu de Prusse</strong> (fine couche de pâte colorée qui révèle les zones de contact).</p>\n<p>Le <strong>polissage</strong> des empreintes de moules donne l'aspect de la pièce et facilite le démoulage. Il progresse par étapes, chaque étape effaçant les rayures de la précédente : pierres abrasives, papiers de grains de plus en plus fins, puis pâtes diamantées de granulométrie décroissante. Le polissage miroir exige un acier propre et homogène, adapté à cet usage.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> polisser trop longtemps un même endroit arrondit les arêtes et crée des ondulations. Les arêtes du plan de joint et les bords d'une empreinte doivent rester vifs, sinon la pièce présentera des bavures. On protège ces arêtes et on polit toujours dans le sens du démoulage pour les dernières étapes.</div>\n<p>Certaines empreintes reçoivent ensuite une <strong>texturation</strong> (grainage chimique ou par laser) qui donne à la pièce un aspect mat ou un motif, ou un revêtement de surface pour faciliter le démoulage ou réduire l'usure.</p>"
      }
     ],
     "points_cles": [
      "L'électroérosion enlève la matière par décharges électriques dans un diélectrique",
      "Elle usine tout matériau conducteur quelle que soit sa dureté, sans effort de coupe",
      "Le fil découpe des contours traversants et nécessite un trou de départ pour les formes intérieures",
      "Ébauche puis passes de finition réduisent la couche refondue et améliorent la précision",
      "Les attaches évitent la chute prématurée de la pièce ou de la chute",
      "L'électrode d'enfonçage est réduite du jeu d'étincelage ; on en prévoit souvent une d'ébauche et une de finition",
      "UGV sur trempé, électroérosion et rectification se complètent",
      "Le polissage progresse par granulométries décroissantes en préservant les arêtes vives"
     ],
     "lexique": [
      {
       "terme": "Électroérosion",
       "def": "Procédé d'enlèvement de matière par décharges électriques entre une électrode et la pièce."
      },
      {
       "terme": "Diélectrique",
       "def": "Liquide isolant dans lequel se produisent les décharges : eau déionisée pour le fil, huile pour l'enfonçage."
      },
      {
       "terme": "Jeu d'étincelage",
       "def": "Distance entre l'électrode et la pièce pendant l'électroérosion."
      },
      {
       "terme": "Couche refondue",
       "def": "Couche superficielle fondue puis resolidifiée par l'électroérosion, dure et fragile."
      },
      {
       "terme": "Trou de départ",
       "def": "Trou percé dans la pièce pour enfiler le fil avant de découper un contour intérieur."
      },
      {
       "terme": "Électrode d'enfonçage",
       "def": "Outil de forme en graphite ou cuivre qui reproduit sa forme en négatif dans la pièce."
      },
      {
       "terme": "Hauteur de coupe",
       "def": "Partie droite de l'ouverture d'une matrice de découpe, sous l'arête de coupe."
      },
      {
       "terme": "Bleu de Prusse",
       "def": "Pâte colorée utilisée en ajustage pour visualiser les zones de contact."
      },
      {
       "terme": "UGV",
       "def": "Usinage grande vitesse, souvent utilisé pour finir des aciers trempés."
      }
     ]
    },
    {
     "id": "btrpm-rmo-montage-maintenance-outillage",
     "titre": "Montage, mise au point et maintenance des outillages",
     "niveau": "Tle",
     "options": [
      "rmo"
     ],
     "duree": 50,
     "objectifs": [
      "Organiser le montage d'un outillage à partir de son plan d'ensemble et de sa nomenclature",
      "Participer à la mise au point d'un outillage sur presse et analyser les premières pièces",
      "Apporter les corrections nécessaires après essais et les tracer",
      "Organiser la maintenance préventive et curative d'un outillage en service",
      "Diagnostiquer une usure ou une casse et choisir une réparation adaptée"
     ],
     "sections": [
      {
       "titre": "Préparer le montage",
       "contenu": "<p>Le montage d'un outillage neuf commence bien avant d'assembler les pièces. L'outilleur rassemble et vérifie :</p>\n<ul>\n<li>le <strong>plan d'ensemble</strong> et la <strong>nomenclature</strong> à l'indice en vigueur ;</li>\n<li>toutes les pièces fabriquées, contrôlées et repérées, avec leurs rapports de contrôle ;</li>\n<li>les éléments normalisés achetés : colonnes, bagues, éjecteurs, ressorts, vérins à gaz, vis, raccords ;</li>\n<li>la <strong>gamme de montage</strong>, quand elle existe, et les couples de serrage prescrits.</li>\n</ul>\n<p>Chaque élément est <strong>ébavuré</strong>, nettoyé et, si nécessaire, démagnétisé (les éléments trempés rectifiés sur plateau magnétique gardent un magnétisme qui retient les copeaux et les particules).</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> pointer la nomenclature avant montage. 1) Pour chaque repère, vérifier la présence de la quantité prévue. 2) Contrôler la désignation des éléments normalisés (diamètre et longueur des éjecteurs, force et course des ressorts). 3) Vérifier le traitement des éléments trempés (dureté indiquée sur le certificat du traiteur). 4) Signaler immédiatement toute pièce manquante ou non conforme, avec son repère. 5) Ne commencer le montage qu'avec un ensemble complet, pour éviter de démonter à cause d'une pièce oubliée.</div>"
      },
      {
       "titre": "Monter un outillage",
       "contenu": "<p>Le montage suit la logique des sous-ensembles : on monte d'abord la partie inférieure (ou la partie fixe d'un moule), puis la partie supérieure (ou mobile), puis on les assemble. Les règles de bonne pratique sont :</p>\n<ul>\n<li>positionner les éléments par leurs <strong>goupilles</strong> ou <strong>pions</strong> de positionnement, jamais par les vis, qui ne font que serrer ;</li>\n<li>serrer les vis au <strong>couple prescrit</strong> et en croix, progressivement ;</li>\n<li>vérifier le coulissement libre de chaque élément mobile (éjecteurs, tiroirs, dévêtisseur) avant d'ajouter le suivant ;</li>\n<li>contrôler les <strong>hauteurs</strong> : hauteur des poinçons par rapport au dévêtisseur, hauteur des éjecteurs par rapport à l'empreinte (affleurants ou légèrement en retrait selon le plan), hauteur fermée de l'outil ;</li>\n<li>contrôler les <strong>jeux</strong> : jeu de découpe régulier sur tout le pourtour, jeu de fonctionnement des tiroirs.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> fermer un outil de presse ou un moule pour la première fois se fait lentement, à la main ou en mode réglage de la presse, en surveillant les guidages et les éléments mobiles. Un élément mal monté (poinçon trop long, éjecteur coincé) casse au premier coup si la fermeture est rapide.</div>\n<p>Les outillages lourds se manipulent avec des moyens de levage : anneaux de levage vissés dans les taraudages prévus, palonnier, pont roulant. On ne se place jamais sous une charge suspendue, et l'on vérifie la capacité des anneaux et la masse de l'outillage indiquée sur le plan ou la plaque signalétique.</p>"
      },
      {
       "titre": "Mise au point sur presse",
       "contenu": "<p>La <strong>mise au point</strong> (ou essai) consiste à faire fonctionner l'outillage sur une presse dans des conditions de production et à corriger jusqu'à obtenir des pièces conformes. Le titulaire du bac pro y participe aux côtés du metteur au point et du régleur de la presse.</p>\n<p>Les étapes types sont :</p>\n<ol>\n<li>montage de l'outillage sur la presse, raccordements (eau, air, électricité des canaux chauds ou capteurs), réglage de la hauteur fermée ou de la course ;</li>\n<li>premiers cycles lents, vérification de la cinématique (dévêtissage, éjection, mouvement des tiroirs) ;</li>\n<li>production d'un petit nombre de pièces avec des réglages de départ ;</li>\n<li>contrôle des pièces : dimensions, aspect, défauts ;</li>\n<li>analyse : distinguer ce qui relève du réglage de la presse de ce qui relève de l'outillage ;</li>\n<li>corrections sur l'outillage, nouvel essai, jusqu'à validation.</li>\n</ol>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les pièces d'essai sont repérées (numéro d'essai, numéro d'empreinte pour un moule multi-empreinte) et mesurées dans un rapport d'essai. Le client valide l'outillage sur la base d'un échantillonnage initial, après lequel l'outillage est considéré comme qualifié : toute modification ultérieure doit lui être signalée.</div>"
      },
      {
       "titre": "Corriger après essai et tracer les modifications",
       "contenu": "<p>Les corrections les plus fréquentes sont :</p>\n<table>\n<thead><tr><th>Constat</th><th>Correction possible sur l'outillage</th></tr></thead>\n<tbody>\n<tr><td>Cote de pièce moulée trop petite</td><td>Agrandir l'empreinte (enlèvement d'acier) ou réduire le noyau, selon la cote</td></tr>\n<tr><td>Angle de pliage trop ouvert</td><td>Augmenter le surpliage ou ajouter un écrasement</td></tr>\n<tr><td>Bavure au plan de joint</td><td>Reprendre les portées, vérifier la planéité, réduire les évents trop profonds</td></tr>\n<tr><td>Pièce qui reste côté fixe</td><td>Augmenter l'accroche côté mobile, polir les dépouilles côté fixe</td></tr>\n<tr><td>Rupture en emboutissage</td><td>Agrandir et polir le rayon de matrice, régler le serre-flan</td></tr>\n</tbody>\n</table>\n<p>Quand il faut <strong>ajouter</strong> de la matière (cote déjà dépassée), on recourt au <strong>rechargement par soudage</strong> (soudage TIG ou laser avec un métal d'apport adapté à l'acier à outils, souvent avec préchauffage), puis à un nouvel usinage, ou au remplacement de l'insert concerné. C'est plus long et plus risqué : d'où l'intérêt de garder de l'acier en plus lors de la réalisation.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> toute correction est reportée sur le plan et dans le dossier de l'outillage (nouvel indice, nature de la modification, date). Un outillage dont les plans ne correspondent plus à la réalité devient impossible à réparer à l'identique.</div>"
      },
      {
       "titre": "La maintenance des outillages en service",
       "contenu": "<p>Un outillage en production s'use, s'encrasse et peut casser. Sa maintenance combine :</p>\n<ul>\n<li>la <strong>maintenance préventive systématique</strong>, déclenchée par un nombre de coups ou de cycles : démontage, nettoyage, contrôle des éléments d'usure, graissage, remplacement des ressorts et joints ;</li>\n<li>la <strong>maintenance préventive conditionnelle</strong>, déclenchée par un constat sur les pièces : hauteur de bavure, cote qui dérive, aspect dégradé ;</li>\n<li>la <strong>maintenance corrective</strong> après casse ou incident.</li>\n</ul>\n<p>Pour un outil de presse, l'opération la plus fréquente est l'<strong>affûtage</strong> des poinçons et matrices par rectification plane. Chaque affûtage enlève quelques dixièmes de millimètre ; on compense la hauteur perdue par des <strong>cales</strong> sous les éléments, et l'on surveille la hauteur de coupe restante de la matrice. Quand la réserve d'affûtage est épuisée, l'élément est remplacé.</p>\n<p>Pour un moule, les opérations courantes sont le nettoyage des évents et des plans de joint, le détartrage des circuits de régulation, le contrôle et le graissage des éjecteurs et tiroirs, le contrôle des résistances et thermocouples des canaux chauds, et la reprise des zones usées.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> planifier l'affûtage d'un outil progressif. 1) Relever sur la fiche de vie le nombre de coups entre deux affûtages précédents : 180 000 et 200 000. 2) Fixer le seuil préventif à 160 000 coups, avant que la bavure n'atteigne la limite client. 3) Relever la réserve d'affûtage de la matrice : 3 mm, avec 0,2 mm enlevés par affûtage. 4) Calculer le nombre d'affûtages restants : 3 / 0,2 = 15. 5) Prévoir la commande d'une matrice de rechange avant le dernier affûtage, en tenant compte du délai de réalisation.</div>"
      },
      {
       "titre": "Diagnostiquer une casse ou une usure anormale",
       "contenu": "<p>Une casse n'est jamais « la faute à pas de chance ». Son analyse évite qu'elle se reproduise :</p>\n<table>\n<thead><tr><th>Observation</th><th>Hypothèses à vérifier</th></tr></thead>\n<tbody>\n<tr><td>Poinçon cassé net au ras de la plaque</td><td>Double épaisseur de tôle (pièce non évacuée), jeu décentré, poinçon trop élancé</td></tr>\n<tr><td>Écaillage des arêtes de matrice</td><td>Acier trop dur ou mal revenu, jeu trop faible, tôle plus dure que prévu</td></tr>\n<tr><td>Grippage d'un tiroir</td><td>Lubrification insuffisante, jeu trop faible avec la dilatation, pollution</td></tr>\n<tr><td>Éjecteur tordu ou cassé</td><td>Pièce collée, désalignement, éjection trop rapide</td></tr>\n<tr><td>Usure rapide localisée</td><td>Défaut d'alignement de la presse, déséquilibre des efforts</td></tr>\n</tbody>\n</table>\n<p>L'observation des <strong>faciès de rupture</strong> renseigne aussi : une cassure à grain fin et brillant indique une rupture fragile brutale (choc, acier trop dur), une cassure présentant des lignes concentriques (lignes d'arrêt) indique une rupture par fatigue progressive.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> avant toute intervention sur un outillage monté en presse, la presse est consignée et le coulisseau calé mécaniquement par des cales de sécurité. Intervenir entre les outils d'une presse simplement à l'arrêt est une cause d'accidents graves.</div>\n<p>Après chaque intervention, l'outillage est remonté, essayé et ses premières pièces sont contrôlées avant la reprise de production. Le compte rendu d'intervention précise la cause retenue, les éléments remplacés ou réparés, les cotes reprises et le nombre de coups au moment de l'intervention. L'accumulation de ces comptes rendus dans la fiche de vie permet de repérer les éléments qui cassent régulièrement et de proposer une amélioration durable : changement de nuance d'acier, revêtement, modification de forme ou détection de double épaisseur de tôle par capteur.</p>"
      }
     ],
     "points_cles": [
      "Le montage commence par le pointage complet de la nomenclature",
      "Les pions positionnent, les vis serrent",
      "La première fermeture d'un outillage se fait lentement en mode réglage",
      "La mise au point distingue ce qui relève du réglage de la presse et ce qui relève de l'outillage",
      "Ajouter de la matière demande un rechargement par soudage, d'où l'intérêt de garder de l'acier en plus",
      "Toute modification est reportée sur le plan et dans le dossier de l'outillage",
      "L'affûtage consomme la réserve de hauteur des éléments actifs, compensée par des cales",
      "Le faciès de rupture distingue rupture brutale et rupture par fatigue",
      "On n'intervient dans une presse qu'après consignation et calage du coulisseau"
     ],
     "lexique": [
      {
       "terme": "Nomenclature",
       "def": "Liste repérée de toutes les pièces d'un ensemble, avec quantités, désignations et matières."
      },
      {
       "terme": "Hauteur fermée",
       "def": "Hauteur d'un outil de presse en position fermée, à régler sur la presse."
      },
      {
       "terme": "Mise au point",
       "def": "Phase d'essais et de corrections d'un outillage jusqu'à l'obtention de pièces conformes."
      },
      {
       "terme": "Échantillonnage initial",
       "def": "Présentation au client des premières pièces issues d'un outillage pour validation."
      },
      {
       "terme": "Rechargement",
       "def": "Apport de métal par soudage sur un élément d'outillage pour le reprendre ensuite à la cote."
      },
      {
       "terme": "Réserve d'affûtage",
       "def": "Hauteur qu'un élément actif peut encore perdre par affûtages successifs."
      },
      {
       "terme": "Fiche de vie",
       "def": "Document qui enregistre l'historique d'utilisation et d'entretien d'un outillage."
      },
      {
       "terme": "Faciès de rupture",
       "def": "Aspect de la surface de cassure, qui renseigne sur le mode de rupture."
      },
      {
       "terme": "Calage de sécurité",
       "def": "Blocage mécanique du coulisseau d'une presse avant toute intervention entre les outils."
      }
     ]
    }
   ]
  },
  {
   "titre": "Partie 7 — Analyser les documents professionnels",
   "bloc": "Analyse de documents",
   "chapitres": [
    {
     "id": "btrpm-doc-dessin-definition",
     "titre": "Exploiter un dessin de définition et un plan d'ensemble",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Repérer les informations d'un dossier de définition : plan d'ensemble, nomenclature, dessins de définition",
      "Lire méthodiquement un dessin de définition, du cartouche aux spécifications",
      "Relier les spécifications du dessin aux fonctions identifiées sur le plan d'ensemble",
      "Rédiger l'interprétation d'une spécification géométrique",
      "Éviter les erreurs de lecture les plus fréquentes"
     ],
     "sections": [
      {
       "titre": "Le dossier de définition à l'épreuve",
       "contenu": "<p>À l'épreuve écrite d'étude et de préparation de la réalisation, le dossier remis comprend presque toujours un <strong>dossier de définition</strong> : un <strong>plan d'ensemble</strong> (ou une maquette numérique) du mécanisme ou de l'outillage, sa <strong>nomenclature</strong>, et le <strong>dessin de définition</strong> de la pièce à étudier. Les questions demandent d'identifier, de justifier, d'interpréter et de choisir. Ce chapitre montre comment lire ces documents de manière organisée, à partir d'un exemple commenté.</p>\n<p>Le plan d'ensemble montre toutes les pièces assemblées, chacune repérée par un numéro dans une bulle reliée par une ligne de repère. La nomenclature, placée au-dessus du cartouche ou sur un document séparé, donne pour chaque repère la quantité, la désignation, la matière et une observation (référence commerciale, traitement). Le dessin de définition ne représente qu'une pièce, avec toutes les informations nécessaires pour la fabriquer et la contrôler.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> le dessin de définition dit <em>ce que</em> doit être la pièce ; le plan d'ensemble dit <em>pourquoi</em>. Les deux se lisent ensemble.</div>"
      },
      {
       "titre": "Structure et vocabulaire d'un dessin de définition",
       "contenu": "<table>\n<thead><tr><th>Zone du document</th><th>Ce qu'on y trouve</th><th>Ce qu'il faut en tirer</th></tr></thead>\n<tbody>\n<tr><td>Cartouche</td><td>Titre, numéro de plan, indice, échelle, format, matière, masse, auteur, date, mode de projection</td><td>Identification, indice à vérifier, matière et état</td></tr>\n<tr><td>Bloc de tolérancement général</td><td>Norme de base (ISO 8015), tolérances générales (ISO 2768-mK ou ISO 22081), état de surface général</td><td>Règles applicables aux cotes non tolérancées</td></tr>\n<tr><td>Vues, coupes, sections, détails</td><td>Géométrie de la pièce</td><td>Forme, surfaces, accès</td></tr>\n<tr><td>Cotes</td><td>Dimensions nominales, tolérancées ou encadrées</td><td>Dimensions à obtenir</td></tr>\n<tr><td>Cadres de tolérance et références</td><td>Spécifications géométriques</td><td>Relations entre surfaces</td></tr>\n<tr><td>Symboles d'état de surface</td><td>Ra, Rz, procédé imposé</td><td>Finition à obtenir</td></tr>\n<tr><td>Notes</td><td>Traitements, ébavurage, marquage, zones particulières</td><td>Exigences complémentaires</td></tr>\n<tr><td>Tableau des modifications</td><td>Historique des indices</td><td>Nature des dernières modifications</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> les notes en bas du dessin sont souvent oubliées alors qu'elles imposent des exigences lourdes : « tous les angles non cotés R0,5 », « ébavurer toutes les arêtes 0,2 × 45° maxi », « trempe et revenu 40-45 HRC ». Une réponse qui les ignore est incomplète.</div>"
      },
      {
       "titre": "Une méthode de lecture pas à pas",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> lire un dessin de définition en sept étapes. 1) <strong>Identifier</strong> : lire le cartouche (pièce, repère dans l'ensemble, indice, matière, échelle) et le bloc de tolérancement général. 2) <strong>Situer</strong> la pièce dans le plan d'ensemble : repérer les pièces en contact avec elle. 3) <strong>Comprendre la forme</strong> : associer les vues, repérer les coupes, imaginer la pièce en 3D ou consulter la maquette. 4) <strong>Repérer les références</strong> (A, B, C) et les surfaces qui les portent. 5) <strong>Inventorier les spécifications</strong> : dimensions tolérancées, cadres de tolérance, états de surface, en les classant par surface. 6) <strong>Relier chaque spécification à une fonction</strong> grâce au plan d'ensemble. 7) <strong>Lire les notes</strong> et le tableau des modifications.</div>\n<p>Pour les questions d'interprétation, on rédige la phrase complète vue dans le cours sur la spécification géométrique : élément tolérancé, caractéristique, forme et dimension de la zone, orientation et position de la zone par rapport aux références, modificateurs. Un petit croquis de la zone de tolérance, quand il est demandé, montre la pièce, la référence matérialisée et la zone en traits fins avec sa dimension.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le dossier présente un <strong>palier à semelle</strong> (repère 3) d'un convoyeur. Le plan d'ensemble montre : une semelle fixée sur le châssis (repère 1) par deux vis M10 (repère 4) passant dans deux trous de la semelle ; un alésage ⌀47 qui reçoit un roulement à billes (repère 6) ; l'arbre (repère 5) guidé par ce roulement ; un couvercle (repère 7) fixé par trois vis M5 sur la face avant.</p>\n<p>Extraits du dessin de définition du palier :</p>\n<table>\n<thead><tr><th>Élément</th><th>Indication</th></tr></thead>\n<tbody>\n<tr><td>Cartouche</td><td>Palier, repère 3, indice C, EN AW-6082 T6, échelle 1:1, ISO 8015, ISO 2768-mK</td></tr>\n<tr><td>Face inférieure de la semelle</td><td>Référence A ; planéité 0,02 ; Ra 1,6</td></tr>\n<tr><td>Face arrière (côté dos), perpendiculaire à l'axe de l'alésage</td><td>Référence B</td></tr>\n<tr><td>Deux flancs de la semelle (largeur 120)</td><td>Plan médian : référence C</td></tr>\n<tr><td>Alésage de roulement</td><td>⌀47 H7 Ⓔ ; Ra 0,8 ; localisation ⌀0,05 par rapport à A, B, C, avec cote encadrée 35 (hauteur d'axe depuis A) ; axe dans le plan médian C ; l'axe de l'alésage est la référence D</td></tr>\n<tr><td>Face d'appui de la bague extérieure (épaulement)</td><td>Perpendicularité 0,02 par rapport à l'axe de l'alésage ⌀47 (référence D)</td></tr>\n<tr><td>Deux trous de fixation</td><td>2 × ⌀11 ; localisation ⌀0,3 Ⓜ par rapport à A, C ; entraxe encadré 90, symétrique par rapport à C</td></tr>\n<tr><td>Note</td><td>Anodisation incolore 15 µm sauf alésage ⌀47 (épargne)</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Identification.</strong> La pièce est le palier repère 3, à l'indice C, en alliage d'aluminium 6082 à l'état T6. Le dessin applique le principe d'indépendance (ISO 8015) ; les cotes non tolérancées relèvent de la classe moyenne m et les tolérances géométriques générales de la classe K.</p>\n<p><strong>Fonctions.</strong> La face A est la surface d'appui du palier sur le châssis : elle assure la mise en position en hauteur et l'orientation de l'axe. L'alésage ⌀47 reçoit la bague extérieure du roulement : il assure le guidage en rotation de l'arbre. L'épaulement arrête axialement le roulement. Les trous ⌀11 laissent passer les vis M10 de fixation.</p>\n<p><strong>Interprétation de la localisation de l'alésage.</strong> « L'axe de l'alésage ⌀47 H7 doit être contenu dans un cylindre de diamètre 0,05 mm, perpendiculaire au plan de référence B, dont l'axe est situé à 35 mm du plan A et dans le plan médian C de la semelle. » Cette spécification garantit que la hauteur d'axe de l'arbre est respectée à ± 0,025 mm, pour que l'arbre soit aligné avec le second palier du convoyeur.</p>\n<p><strong>Exigence de l'enveloppe.</strong> Ⓔ sur ⌀47 H7 impose que l'alésage puisse recevoir un cylindre parfait de 47,000 mm : le roulement pourra être monté même si l'alésage présente des défauts de forme.</p>\n<p><strong>Trous de fixation.</strong> Le modificateur Ⓜ accorde un bonus : un trou réalisé à ⌀11,2 dispose d'une tolérance de localisation de 0,3 + 0,2 = 0,5 mm. C'est cohérent avec une fonction de simple passage de vis.</p>\n<p><strong>Perpendicularité de l'épaulement.</strong> « La face d'épaulement doit être comprise entre deux plans parallèles distants de 0,02 mm, perpendiculaires à l'axe D de l'alésage. » Cette exigence évite que la bague extérieure du roulement soit montée de travers, ce qui créerait un défaut d'alignement et une usure prématurée du roulement. Elle impose de réaliser l'alésage et l'épaulement dans la même mise en position, avec le même outil ou au moins sans démontage de la pièce.</p>\n<p><strong>États de surface.</strong> Ra 0,8 sur l'alésage correspond à une finition soignée à l'outil d'alésage ; Ra 1,6 sur la face A suffit à un appui stable sur le châssis.</p>\n<p><strong>Note de traitement.</strong> L'alésage est épargné à l'anodisation, sinon la couche réduirait le diamètre et compromettrait l'ajustement du roulement.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> cette lecture conduit directement aux choix de fabrication : la face A et l'alésage ⌀47 seront réalisés dans des mises en position compatibles (de préférence appui sur A, orientation sur B, centrage sur les flancs qui définissent C), l'alésage sera fini à l'outil d'alésage et contrôlé à l'alésomètre, et l'épargne sera prévue par bouchon avant anodisation.</div>"
      },
      {
       "titre": "Pièges fréquents",
       "contenu": "<ul>\n<li>Lire l'échelle comme une donnée de cote : les dimensions se lisent sur les cotes, jamais en mesurant le dessin.</li>\n<li>Confondre référence (triangle et lettre) et élément tolérancé (flèche du cadre).</li>\n<li>Oublier qu'une cote encadrée n'a pas de tolérance propre.</li>\n<li>Ignorer le bloc de tolérancement général et répondre « pas de tolérance » pour une cote non tolérancée.</li>\n<li>Négliger l'indice : répondre sur l'indice B alors que l'ordre de fabrication demande l'indice C.</li>\n<li>Justifier une spécification par une phrase vague (« pour que ce soit précis ») au lieu de nommer la fonction et la pièce en contact.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une bonne réponse d'analyse cite le repère de la pièce, la surface, la spécification exacte, la pièce en contact et la fonction. Ces cinq éléments suffisent presque toujours.</div>"
      }
     ],
     "points_cles": [
      "Le dossier de définition associe plan d'ensemble, nomenclature et dessin de définition",
      "Le cartouche et le bloc de tolérancement général se lisent en premier",
      "Les notes imposent des exigences aussi importantes que les cotes",
      "La lecture suit l'ordre : identifier, situer, comprendre, références, spécifications, fonctions, notes",
      "Une interprétation complète précise élément, caractéristique, zone, références et modificateurs",
      "L'exigence de l'enveloppe garantit le montage d'un ajustement",
      "Le maximum de matière accorde un bonus adapté aux trous de passage",
      "Une justification nomme la surface, la pièce en contact et la fonction"
     ],
     "lexique": [
      {
       "terme": "Dossier de définition",
       "def": "Ensemble des documents qui définissent un produit : plans, nomenclature, modèles."
      },
      {
       "terme": "Plan d'ensemble",
       "def": "Dessin représentant toutes les pièces d'un mécanisme assemblées et repérées."
      },
      {
       "terme": "Cartouche",
       "def": "Zone normalisée du dessin qui identifie le document et la pièce."
      },
      {
       "terme": "Bloc de tolérancement général",
       "def": "Indication des normes et tolérances applicables à tout le dessin."
      },
      {
       "terme": "Épargne",
       "def": "Zone protégée pour qu'elle ne reçoive pas un traitement de surface."
      },
      {
       "terme": "Indice",
       "def": "Repère de version du dessin, modifié à chaque évolution."
      },
      {
       "terme": "Ligne de repère",
       "def": "Trait qui relie une bulle de repère à la pièce désignée sur le plan d'ensemble."
      },
      {
       "terme": "Hauteur d'axe",
       "def": "Distance entre la surface d'appui d'un palier et l'axe de son alésage."
      }
     ]
    },
    {
     "id": "btrpm-doc-contrat-phase",
     "titre": "Exploiter un processus et un contrat de phase",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Repérer la structure d'un processus de réalisation et d'un contrat de phase",
      "Vérifier la cohérence entre dessin de définition, mise en position et cotes fabriquées",
      "Contrôler les conditions de coupe indiquées par le calcul",
      "Compléter un contrat de phase partiellement renseigné",
      "Formuler des remarques argumentées sur un document de fabrication"
     ],
     "sections": [
      {
       "titre": "Les documents de fabrication à l'épreuve",
       "contenu": "<p>Dans le dossier d'épreuve, la partie « préparation » s'appuie souvent sur un <strong>processus de réalisation</strong> (tableau des phases) et sur un ou plusieurs <strong>contrats de phase</strong>, parfois incomplets. Les questions demandent de justifier l'ordre des phases, de compléter une mise en position ou une cote fabriquée, de calculer des conditions de coupe, de choisir un outil ou un moyen de contrôle, ou de repérer une incohérence.</p>\n<p>Ces documents sont construits selon les principes vus dans le cours sur les processus et les cotes fabriquées. Les lire efficacement suppose de savoir où se trouve chaque information et de vérifier systématiquement les liens entre documents.</p>\n<table>\n<thead><tr><th>Document</th><th>Contenu</th><th>Question type</th></tr></thead>\n<tbody>\n<tr><td>Processus</td><td>Numéro et désignation des phases, machine, surfaces réalisées, croquis simplifiés</td><td>Justifier l'ordre, proposer un regroupement</td></tr>\n<tr><td>Contrat de phase</td><td>En-tête, croquis, mise en position, cotes fabriquées, opérations, outils, conditions de coupe, contrôles</td><td>Compléter, calculer, vérifier</td></tr>\n<tr><td>Fiche outils ou de préréglage</td><td>Outils, porte-outils, longueurs, numéros</td><td>Choisir, vérifier une longueur de sortie</td></tr>\n<tr><td>Catalogue d'outils</td><td>Conditions de coupe recommandées par groupe de matière</td><td>Extraire Vc et f</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> un contrat de phase est un document « contractuel » entre les méthodes et l'atelier : tout ce qui y est écrit doit être exact, cohérent avec le dessin et réalisable sur la machine désignée.</div>"
      },
      {
       "titre": "Méthode de lecture et de vérification",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> vérifier un contrat de phase en six contrôles. 1) <strong>En-tête</strong> : pièce, indice, matière et machine concordent avec l'ordre de fabrication et le dessin. 2) <strong>Croquis</strong> : la pièce est dessinée dans sa position sur la machine, les surfaces usinées dans la phase sont en trait fort, le repère machine est indiqué. 3) <strong>Mise en position</strong> : les normales sont au nombre de six au plus, isostatiques, placées sur des surfaces déjà usinées ou sur les cibles du brut en première phase ; le serrage s'oppose aux appuis. 4) <strong>Cotes fabriquées</strong> : chacune part de la surface de mise en position ou d'une surface usinée dans la même phase ; si elle diffère de la cote du dessin, un transfert a été calculé. 5) <strong>Conditions de coupe</strong> : refaire les calculs de N et Vf avec les valeurs du catalogue. 6) <strong>Contrôle</strong> : chaque cote fabriquée a un moyen de contrôle adapté à sa tolérance.</div>\n<p>Les questions de complétion se traitent dans le même ordre : on ne peut pas choisir un outil sans connaître la surface à réaliser, ni calculer une cote fabriquée sans connaître la mise en position.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Le dossier présente une <strong>bride d'outillage</strong> en C45 (plaque de 120 × 80 × 25 mm finie, brut scié 125 × 85 × 30). Le dessin impose notamment : une rainure de largeur 16 H9 et de profondeur 8 ± 0,05 mesurée depuis la face supérieure B ; la hauteur totale 25 ± 0,05 entre la face inférieure A et la face supérieure B ; la rainure est symétrique (symétrie 0,05) par rapport au plan médian de la largeur 80.</p>\n<p>Contrat de phase 30 (extrait), fraisage sur centre d'usinage vertical, faces A et B et flancs déjà usinés en phases 10 et 20 :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu du document</th></tr></thead>\n<tbody>\n<tr><td>Mise en position</td><td>Appui plan sur A (normales 1, 2, 3) ; linéaire rectiligne sur un flanc de longueur 120 (4, 5) ; butée sur une extrémité (6). Étau à mors parallèles, serrage horizontal</td></tr>\n<tr><td>Opération 1</td><td>Rainurage d'ébauche, fraise 2 tailles carbure ⌀14, Z = 3, Vc = 150 m/min, fz = 0,05 mm/dent, N = 3 410 tr/min, Vf = 512 mm/min</td></tr>\n<tr><td>Opération 2</td><td>Finition des flancs en contournage, fraise carbure ⌀12, Z = 4, Vc = 180 m/min, fz = 0,04 mm/dent, N = 4 775 tr/min, Vf = ……</td></tr>\n<tr><td>Cote fabriquée de profondeur</td><td>Cf = …… entre A et le fond de rainure</td></tr>\n<tr><td>Contrôle</td><td>Largeur : pied à coulisse ; profondeur : pied à coulisse de profondeur</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Mise en position.</strong> La pièce repose sur A, ce qui est cohérent car A est une surface usinée et la profondeur peut être obtenue par rapport à A. Elle est isostatique (six normales). En revanche, la cote de profondeur du dessin part de B, pas de A : il y a <strong>transfert de cote</strong>.</p>\n<p><strong>Calcul de la cote fabriquée.</strong> Chaîne : 8 = 25 − Cf, donc Cf nominale = 17. IT : 0,10 = 0,10 + IT(Cf), d'où IT(Cf) = 0. <strong>Le transfert est impossible</strong> : toute la tolérance de la profondeur est consommée par celle de la hauteur. Deux solutions sont à proposer : soit régler la profondeur directement par rapport à B (prise d'origine Z par palpage de la face supérieure B à chaque pièce, ce qui fait de B la surface de référence de réglage), soit demander à la phase 20 de réaliser la hauteur avec une tolérance plus serrée, par exemple 25 ± 0,02, ce qui laisse IT(Cf) = 0,06 et donne Cf = 17 ± 0,03.</p>\n<p><strong>Conditions de coupe, opération 1.</strong> N = 1 000 × 150 / (π × 14) ≈ 3 410 tr/min : correct. Vf = 0,05 × 3 × 3 410 ≈ 512 mm/min : correct.</p>\n<p><strong>Conditions de coupe, opération 2.</strong> N = 1 000 × 180 / (π × 12) ≈ 4 775 tr/min : correct. Vf = 0,04 × 4 × 4 775 = 764 mm/min, valeur à inscrire.</p>\n<p><strong>Symétrie.</strong> Avec une butée et un appui sur un seul flanc, la position de la rainure dépend de la largeur réelle de la pièce (80 avec sa tolérance). Pour garantir la symétrie 0,05, il vaut mieux palper les deux flancs à chaque pièce et prendre l'origine Y au milieu, ou utiliser un étau autocentreur.</p>\n<p><strong>Contrôle.</strong> Le pied à coulisse ne convient pas pour 16 H9 (IT de 0,043 mm) ni pour une profondeur à ± 0,05 : on propose un tampon lisse 16 H9 entre / n'entre pas pour la largeur, et un comparateur sur support ou une jauge de profondeur à affichage centésimal pour la profondeur.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> c'est exactement ce type d'analyse qu'un régleur fait avant de lancer une série : en signalant le transfert impossible au service méthodes, il évite des dizaines de pièces non conformes.</div>"
      },
      {
       "titre": "Pièges fréquents",
       "contenu": "<ul>\n<li>Recopier la cote du dessin comme cote fabriquée sans vérifier d'où elle part.</li>\n<li>Oublier de comparer l'IT obtenu par transfert à la dispersion de la machine, ou ne pas voir qu'il est nul ou négatif.</li>\n<li>Arrondir N vers le haut au-delà de la fréquence maximale de la broche indiquée dans la fiche machine.</li>\n<li>Confondre f (mm/tr) et fz (mm/dent) dans le calcul de Vf en fraisage.</li>\n<li>Proposer un moyen de contrôle dont la résolution ou l'incertitude n'est pas adaptée à la tolérance.</li>\n<li>Dessiner des normales de mise en position sur une surface qui sera usinée dans la phase.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> une réponse « le contrat de phase est correct » sans calcul ni justification ne rapporte rien. Chaque vérification doit être montrée : la formule, les valeurs, le résultat et la conclusion.</div>"
      },
      {
       "titre": "Justifier l'ordre des phases d'un processus",
       "contenu": "<p>Une autre question fréquente porte sur le processus lui-même : « justifier la place de la phase 30 », « proposer un regroupement », « indiquer pourquoi le traitement thermique est placé entre les phases 40 et 60 ». La réponse s'appuie sur les trois familles d'antériorités.</p>\n<p>Dans l'exemple de la bride, le processus fourni est le suivant : phase 10, fraisage des faces A et B et d'un flanc ; phase 20, fraisage du second flanc et des extrémités ; phase 30, rainure ; phase 40, perçages et taraudages ; phase 50, trempe superficielle des flancs de rainure ; phase 60, rectification de la face B ; phase 70, contrôle final.</p>\n<p><strong>Réponse modèle.</strong> Les phases 10 et 20 créent les surfaces de référence (A, B, flancs) qui servent ensuite de mise en position : géométriquement, elles doivent précéder toutes les autres. La rainure (phase 30) précède les perçages (phase 40) car l'ébauche de la rainure enlève beaucoup de matière et libère des contraintes : on évite ainsi de déformer une pièce déjà percée avec précision. Les taraudages sont réalisés avant la trempe (phase 50), car ils ne pourraient plus l'être après. La face B est rectifiée après traitement (phase 60) pour rattraper les déformations ; il faudra alors vérifier que la profondeur de rainure, mesurée depuis B, reste dans sa tolérance, ce qui impose de laisser une surépaisseur calculée sur B avant traitement. Un regroupement des phases 30 et 40 serait possible sur centre d'usinage, ce qui supprimerait une reprise et améliorerait la position des perçages par rapport à la rainure.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> justifier un ordre de phases, c'est nommer pour chaque phase l'antériorité qui l'impose : géométrique (référence), technologique (procédé) ou économique (matière, déformations).</div>"
      }
     ],
     "points_cles": [
      "Le contrat de phase relie dessin, mise en position, cotes fabriquées, outils et contrôles",
      "La vérification suit six contrôles : en-tête, croquis, mise en position, cotes, conditions, contrôle",
      "Une cote du dessin qui ne part pas de l'appui impose un transfert",
      "Un transfert donnant un IT nul ou négatif est impossible : il faut changer de référence de réglage ou resserrer une cote amont",
      "N et Vf se recalculent toujours à partir de Vc, D, fz et Z",
      "La symétrie se garantit mieux par palpage des deux flancs ou serrage autocentreur",
      "Le moyen de contrôle doit être adapté à la tolérance",
      "Chaque vérification se présente avec formule, valeurs, résultat et conclusion"
     ],
     "lexique": [
      {
       "terme": "Processus de réalisation",
       "def": "Tableau des phases successives de fabrication d'une pièce."
      },
      {
       "terme": "Contrat de phase",
       "def": "Document détaillant la réalisation d'une phase au poste de travail."
      },
      {
       "terme": "Surface de référence de réglage",
       "def": "Surface à partir de laquelle l'outil est réglé, éventuellement différente de l'appui."
      },
      {
       "terme": "Transfert de cote",
       "def": "Calcul d'une cote fabriquée lorsque la cote du dessin ne part pas de la surface de mise en position."
      },
      {
       "terme": "Tampon lisse",
       "def": "Calibre cylindrique entre / n'entre pas pour le contrôle d'un alésage ou d'une rainure."
      },
      {
       "terme": "Étau autocentreur",
       "def": "Étau dont les deux mors se rapprochent symétriquement, centrant la pièce."
      },
      {
       "terme": "Fiche machine",
       "def": "Document indiquant les caractéristiques d'une machine : courses, puissance, fréquences, magasin d'outils."
      },
      {
       "terme": "Fraise deux tailles",
       "def": "Fraise coupant en bout et sur la périphérie, utilisée pour rainures et épaulements."
      }
     ]
    },
    {
     "id": "btrpm-doc-programme-cn",
     "titre": "Lire et vérifier un programme de commande numérique",
     "niveau": "1re-Tle",
     "duree": 45,
     "objectifs": [
      "Repérer la structure d'un programme et de sa documentation associée",
      "Reconstituer la trajectoire d'un outil à partir des blocs",
      "Vérifier la cohérence d'un programme avec le dessin et les conditions de coupe",
      "Détecter les erreurs dangereuses avant exécution",
      "Rédiger une correction justifiée"
     ],
     "sections": [
      {
       "titre": "Le programme comme document d'épreuve",
       "contenu": "<p>Un programme de commande numérique est un document professionnel à part entière. À l'épreuve, il est fourni sous forme de listing, accompagné d'un <strong>dessin de la pièce avec l'origine programme</strong>, d'une <strong>liste d'outils</strong> et parfois d'un extrait de la <strong>documentation de la commande</strong> (signification des fonctions et des cycles). Les questions demandent d'expliquer un bloc, de calculer une coordonnée, de compléter un bloc manquant, de vérifier une condition de coupe ou de repérer une erreur.</p>\n<p>Le vocabulaire et les fonctions de base ont été présentés dans le cours sur la programmation des machines à commande numérique. Ce chapitre montre comment exploiter un listing de façon méthodique.</p>\n<table>\n<thead><tr><th>Partie du programme</th><th>Contenu habituel</th></tr></thead>\n<tbody>\n<tr><td>En-tête et commentaires</td><td>Numéro de programme, pièce, indice, date, auteur, liste des outils</td></tr>\n<tr><td>Initialisation</td><td>Unités, plan, mode absolu, annulation des corrections, choix du décalage d'origine</td></tr>\n<tr><td>Séquences d'usinage</td><td>Pour chaque outil : appel, conditions de coupe, approche, usinage, dégagement</td></tr>\n<tr><td>Fin de programme</td><td>Dégagement en position de sécurité, arrêt broche et arrosage, fin</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> la documentation de la commande fournie dans le dossier fait foi. Si elle donne une signification particulière à une fonction, c'est celle-là qu'il faut appliquer, même si une autre commande l'utilise autrement.</div>"
      },
      {
       "titre": "Méthode de lecture d'un listing",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1) Lire l'en-tête et vérifier pièce, indice et outils. 2) Repérer sur le dessin l'origine programme et le sens des axes ; en tournage, vérifier si X est programmé en diamètre. 3) Découper le programme en séquences, une par outil. 4) Pour chaque séquence, construire un tableau à quatre colonnes : bloc, mode actif (G0, G1, G2, G3, correction), position atteinte (X, Y, Z), commentaire. 5) Reporter les positions sur le dessin ou sur un croquis à l'échelle approximative. 6) Vérifier les conditions de coupe par le calcul. 7) Vérifier les dégagements avant chaque déplacement rapide et chaque changement d'outil.</div>\n<p>Le tableau des positions est l'outil le plus efficace : il oblige à tenir compte des fonctions modales et révèle immédiatement un déplacement rapide qui traverserait la pièce, une coordonnée mal recopiée ou une correction de rayon activée au mauvais endroit.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Pièce : axe en C45, à finir sur tour CN à partir d'un brut déjà ébauché. Profil fini (cotes en diamètre) : face avant en Z0 ; chanfrein 1 × 45° ; ⌀20 g6 de Z0 à Z−30 ; épaulement ; ⌀30 de Z−30 à Z−55 ; épaulement jusqu'au ⌀40. Origine programme : intersection de l'axe et de la face avant. Commande programmée en diamètre. Outil T2 : plaquette de finition rayon de bec 0,4 mm, correction de rayon de bec disponible.</p>\n<table>\n<thead><tr><th>Bloc</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>N10</td><td>G90 G40 G95 (absolu, correction annulée, avance en mm/tr)</td></tr>\n<tr><td>N20</td><td>T2 D2 (outil 2, correcteur 2)</td></tr>\n<tr><td>N30</td><td>G92 S3000 (limitation de la fréquence de rotation)</td></tr>\n<tr><td>N40</td><td>G96 S200 M3 M8 (vitesse de coupe constante 200 m/min)</td></tr>\n<tr><td>N50</td><td>G0 X16 Z2</td></tr>\n<tr><td>N60</td><td>G42 G1 X18 Z0 F0,1</td></tr>\n<tr><td>N70</td><td>X20 Z−1</td></tr>\n<tr><td>N80</td><td>Z−30</td></tr>\n<tr><td>N90</td><td>X30</td></tr>\n<tr><td>N100</td><td>Z−55</td></tr>\n<tr><td>N110</td><td>G0 X40</td></tr>\n<tr><td>N120</td><td>G40 G0 X100 Z100 M9</td></tr>\n<tr><td>N130</td><td>M5 M30</td></tr>\n</tbody>\n</table>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Chanfrein.</strong> N60 amène l'outil en X18 Z0 puis N70 en X20 Z−1 : en diamètre, on passe de 18 à 20 (1 mm au rayon) en avançant de 1 mm en Z : c'est bien un chanfrein 1 × 45°.</p>\n<p><strong>Cote du ⌀20 g6.</strong> Le programme vise X20, cote nominale. Or 20 g6 a pour écarts −0,007 et −0,020 : la cote moyenne est 19,9865 mm. Il faut programmer X19,987 (ou laisser X20 et appliquer une correction d'usure de −0,013 au diamètre, si c'est la règle de l'atelier). Correction proposée : N70 X19,987 Z−1 et N80 inchangé (la valeur de X est modale).</p>\n<p><strong>Épaulement N110.</strong> N110 est un déplacement <strong>rapide</strong> G0 de X30 à X40 en Z−55 : l'outil dresserait l'épaulement du ⌀30 au ⌀40 en avance rapide, ce qui provoquerait une collision ou une casse. Il faut G1 X40 F0,1, puis dégager. Correction : N110 G1 X40 ; puis N115 G0 X42 (sortie avant annulation).</p>\n<p><strong>Annulation de la correction.</strong> N120 annule G42 pendant un déplacement rapide vers le point de changement d'outil, ce qui est acceptable car l'outil est hors matière, mais il est préférable d'annuler la correction sur un petit dégagement linéaire après N115.</p>\n<p><strong>Conditions de coupe.</strong> À Vc = 200 m/min, sur ⌀20, N = 1 000 × 200 / (π × 20) ≈ 3 183 tr/min, valeur supérieure à la limite G92 de 3 000 tr/min : la vitesse de coupe réelle sur le ⌀20 sera limitée à π × 20 × 3 000 / 1 000 ≈ 188 m/min. C'est acceptable. L'avance de 0,1 mm/tr avec r<sub>ε</sub> = 0,4 donne Rt ≈ 0,1² / (8 × 0,4) ≈ 0,0031 mm, soit Ra ≈ 0,8 µm environ, compatible avec une portée g6.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> une erreur de type G0 au lieu de G1 est l'une des causes les plus courantes de collision en premier passage. C'est pour cela qu'on exécute les premières pièces en bloc à bloc avec le potentiomètre de rapide réduit.</div>"
      },
      {
       "titre": "Pièges fréquents",
       "contenu": "<ul>\n<li>Oublier qu'une coordonnée non écrite reste à sa valeur précédente (fonctions et coordonnées modales).</li>\n<li>Lire X en rayon alors que la commande est en diamètre, ou l'inverse.</li>\n<li>Programmer la cote nominale d'une cote tolérancée dissymétrique au lieu de sa cote moyenne.</li>\n<li>Ignorer la limitation de fréquence en vitesse de coupe constante, ou la placer après l'activation de G96.</li>\n<li>Confondre G41 et G42 : le côté de correction dépend du sens de déplacement et de la position de la tourelle (en avant ou en arrière de l'axe) ; on le vérifie sur un croquis orienté comme la machine et dans la documentation de la commande.</li>\n<li>Ne pas vérifier les dégagements avant les déplacements rapides.</li>\n</ul>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> à l'épreuve comme à l'atelier, une correction de programme se justifie toujours : bloc concerné, erreur constatée, conséquence (collision, cote fausse, mauvais état de surface), correction proposée. Une correction sans justification n'est pas exploitable.</div>"
      },
      {
       "titre": "Compléter un bloc ou calculer une coordonnée",
       "contenu": "<p>Les questions de complétion demandent souvent de calculer une coordonnée qui n'est pas cotée directement sur le dessin : point de tangence entre une droite et un arc, extrémité d'un chanfrein, centre d'un arc, position d'un perçage sur un cercle. Les outils sont la géométrie du triangle rectangle et la trigonométrie.</p>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> calculer la position d'un perçage sur un cercle de perçage. Données : quatre trous répartis sur un cercle de ⌀60 centré sur l'origine, le premier à 45° de l'axe X. 1) Rayon du cercle : 30 mm. 2) Coordonnées du premier trou : X = 30 × cos 45° ≈ 21,213 ; Y = 30 × sin 45° ≈ 21,213. 3) Par symétrie, les autres trous sont en (−21,213 ; 21,213), (−21,213 ; −21,213) et (21,213 ; −21,213). 4) Vérifier : la distance de chaque point à l'origine vaut racine de (21,213² + 21,213²) ≈ 30,0. 5) Écrire les blocs du cycle de perçage avec ces coordonnées, ou utiliser le cycle de répartition sur cercle de la commande s'il existe.</div>\n<p>Pour un arc programmé en G2 ou G3, la commande a besoin du point d'arrivée et soit du rayon (R), soit de la position du centre (souvent par ses coordonnées relatives au point de départ, notées I, J ou K selon les axes). On vérifie toujours que la distance du centre au point de départ est égale à la distance du centre au point d'arrivée : si ce n'est pas le cas, la commande signale une erreur ou trace un arc différent de celui voulu.</p>\n<p>Ces calculs se présentent de façon lisible : figure à main levée avec le triangle utilisé, formule, application numérique arrondie au millième de millimètre, et bloc complété. Une erreur d'arrondi trop grossière (au dixième) suffit à rendre un alésage ou un perçage hors tolérance de position.</p>"
      }
     ],
     "points_cles": [
      "La documentation de la commande fournie fait foi pour interpréter les fonctions",
      "Le tableau bloc, mode, position, commentaire est l'outil de lecture le plus sûr",
      "En tournage, vérifier si X est programmé en diamètre",
      "Une cote tolérancée se programme à sa cote moyenne ou se corrige par l'usure",
      "Un G0 au lieu d'un G1 en matière provoque une collision",
      "La correction de rayon s'active et s'annule hors matière",
      "La limitation de fréquence plafonne la vitesse de coupe réelle sur les petits diamètres",
      "Toute correction se justifie : bloc, erreur, conséquence, correction"
     ],
     "lexique": [
      {
       "terme": "Listing",
       "def": "Texte complet d'un programme de commande numérique."
      },
      {
       "terme": "Séquence",
       "def": "Ensemble des blocs exécutés avec un même outil."
      },
      {
       "terme": "Coordonnée modale",
       "def": "Coordonnée qui conserve sa valeur tant qu'elle n'est pas réécrite."
      },
      {
       "terme": "Programmation en diamètre",
       "def": "Mode de tournage où la valeur X représente le diamètre et non le rayon."
      },
      {
       "terme": "Vitesse de coupe constante",
       "def": "Mode où la commande adapte N au diamètre pour garder Vc constante."
      },
      {
       "terme": "Limitation de fréquence",
       "def": "Valeur maximale de N imposée en vitesse de coupe constante."
      },
      {
       "terme": "Correction de rayon de bec",
       "def": "Compensation de la trajectoire en tournage tenant compte du rayon de la plaquette."
      },
      {
       "terme": "Point de changement d'outil",
       "def": "Position de sécurité où l'outil est changé sans risque de collision."
      }
     ]
    },
    {
     "id": "btrpm-doc-rapport-controle",
     "titre": "Exploiter un rapport de contrôle et une carte de contrôle",
     "niveau": "Tle",
     "duree": 45,
     "objectifs": [
      "Lire un rapport de contrôle de machine à mesurer tridimensionnelle",
      "Décider de la conformité de chaque caractéristique et de la pièce",
      "Relier un écart mesuré à une cause probable de fabrication",
      "Analyser une carte de contrôle et proposer une réaction",
      "Rédiger une conclusion de contrôle argumentée"
     ],
     "sections": [
      {
       "titre": "Des résultats de mesure à la décision",
       "contenu": "<p>Les documents de contrôle sont la dernière étape de la chaîne : ils transforment des mesures en <strong>décisions</strong> (accepter, retoucher, rebuter, corriger le réglage). À l'épreuve, on fournit souvent un <strong>rapport de contrôle</strong> issu d'une MMT ou une fiche d'autocontrôle, et parfois une <strong>carte de contrôle</strong> de production. Les questions portent sur la conformité, l'origine probable d'un écart et la réaction à adopter.</p>\n<p>Un rapport MMT se présente comme un tableau, une ligne par caractéristique :</p>\n<table>\n<thead><tr><th>Colonne</th><th>Signification</th></tr></thead>\n<tbody>\n<tr><td>Caractéristique</td><td>Nom ou numéro de la spécification (souvent repéré sur le dessin par une bulle numérotée)</td></tr>\n<tr><td>Nominal</td><td>Valeur théorique (cote nominale, ou 0 pour une tolérance géométrique)</td></tr>\n<tr><td>Tolérance sup. / inf.</td><td>Écarts admis</td></tr>\n<tr><td>Mesuré (ou réel)</td><td>Valeur obtenue</td></tr>\n<tr><td>Écart</td><td>Mesuré − nominal</td></tr>\n<tr><td>Hors tolérance</td><td>Dépassement éventuel</td></tr>\n<tr><td>Graphique</td><td>Barre ou flèche situant le mesuré dans l'intervalle</td></tr>\n</tbody>\n</table>\n<p>Le rapport comporte aussi un en-tête : pièce, indice, numéro de série ou de lot, programme de mesure, date, opérateur, température de la salle.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une pièce est conforme seulement si <em>toutes</em> ses caractéristiques le sont. Une seule caractéristique hors tolérance suffit à déclarer la pièce non conforme, même si les autres sont parfaites.</div>"
      },
      {
       "titre": "Méthode d'exploitation",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1) Vérifier l'en-tête : bonne pièce, bon indice, programme de mesure correspondant. 2) Parcourir toutes les lignes et repérer les caractéristiques hors tolérance. 3) Pour chaque caractéristique, calculer la position dans l'intervalle : (mesuré − mini) / IT, pour voir si la production est centrée ou proche d'une limite. 4) Regrouper les écarts par mise en position ou par outil : plusieurs écarts de même sens sur des surfaces usinées ensemble signalent une cause commune. 5) Formuler une hypothèse de cause et une action. 6) Conclure par une décision pour la pièce et une décision pour la production.</div>\n<p>L'étape 4 est décisive : un rapport de contrôle n'est pas une liste de chiffres isolés. Si trois trous usinés dans la même phase sont tous décalés de +0,04 mm en X, la cause n'est pas l'outil de perçage mais l'origine de la phase ou la mise en position.</p>"
      },
      {
       "titre": "Exemple commenté : le rapport",
       "contenu": "<p>Rapport MMT d'une plaque de positionnement (pièce n° 12 de la série), alliage d'aluminium, mesurée à 20 °C. Les quatre alésages ⌀10 H7 ont été réalisés dans la phase 20, le contour dans la phase 10.</p>\n<table>\n<thead><tr><th>N°</th><th>Caractéristique</th><th>Nominal</th><th>Tol. sup.</th><th>Tol. inf.</th><th>Mesuré</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Épaisseur 12</td><td>12,000</td><td>+0,050</td><td>−0,050</td><td>12,018</td></tr>\n<tr><td>2</td><td>Planéité face A</td><td>0</td><td>0,020</td><td>—</td><td>0,008</td></tr>\n<tr><td>3</td><td>⌀10 H7 alésage 1</td><td>10,000</td><td>+0,015</td><td>0</td><td>10,009</td></tr>\n<tr><td>4</td><td>⌀10 H7 alésage 2</td><td>10,000</td><td>+0,015</td><td>0</td><td>10,011</td></tr>\n<tr><td>5</td><td>Localisation alésage 1 / A, B, C</td><td>0</td><td>⌀0,030</td><td>—</td><td>⌀0,036</td></tr>\n<tr><td>6</td><td>Localisation alésage 2 / A, B, C</td><td>0</td><td>⌀0,030</td><td>—</td><td>⌀0,034</td></tr>\n<tr><td>7</td><td>Localisation alésage 3 / A, B, C</td><td>0</td><td>⌀0,030</td><td>—</td><td>⌀0,038</td></tr>\n<tr><td>8</td><td>Localisation alésage 4 / A, B, C</td><td>0</td><td>⌀0,030</td><td>—</td><td>⌀0,035</td></tr>\n</tbody>\n</table>\n<p>Détail fourni par le logiciel pour les localisations : écarts en X compris entre +0,016 et +0,019 mm pour les quatre alésages ; écarts en Y inférieurs à 0,004 mm.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Conformité.</strong> Les caractéristiques 1 à 4 sont conformes : l'épaisseur est dans l'intervalle (12,018 entre 11,95 et 12,05), la planéité de 0,008 est inférieure à 0,020, les diamètres sont dans la tolérance H7 (entre 10,000 et 10,015). Les quatre localisations (5 à 8) sont <strong>hors tolérance</strong> : les valeurs mesurées, de ⌀0,034 à ⌀0,038, dépassent ⌀0,030. La pièce n° 12 est donc <strong>non conforme</strong>.</p>\n<p><strong>Analyse de la cause.</strong> Les quatre alésages sont tous décalés dans le même sens et de la même valeur en X (environ +0,017 mm), sans écart significatif en Y. Un décalage de 0,017 mm correspond à une zone de diamètre 2 × 0,017 = 0,034 mm, ce qui est cohérent avec les valeurs mesurées. Une erreur d'outil donnerait des écarts différents selon les trous ; un décalage identique pour tous indique une <strong>erreur d'origine en X</strong> dans la phase 20, ou une mise en position décalée (copeau ou bavure contre la butée correspondant à la référence C, si C est la face qui fixe X).</p>\n<p><strong>Actions proposées.</strong> Pour la production : arrêter la phase 20, vérifier la propreté et l'état de la butée, reprendre l'origine X par palpage de la face de référence, usiner une pièce et la remesurer. Pour les pièces déjà produites : contrôler les pièces fabriquées depuis le dernier contrôle conforme. Pour la pièce n° 12 : la décision (rebut ou demande de dérogation au client) appartient au responsable qualité ; les trous étant déjà alésés à la cote, une retouche n'est pas possible.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les logiciels de MMT indiquent les écarts par axe pour chaque localisation. Lire ces écarts plutôt que la seule valeur globale permet souvent de trouver la cause en quelques minutes.</div>"
      },
      {
       "titre": "Lire une carte de contrôle",
       "contenu": "<p>La carte de contrôle d'une production se lit selon les règles vues dans le cours de maîtrise statistique. Exemple : carte des moyennes d'un diamètre ⌀25 h6 en tournage, échantillons de 5 pièces toutes les 30 minutes, ligne centrale 24,9935, limites de contrôle 24,9905 et 24,9965. Les huit dernières moyennes sont : 24,9930 ; 24,9938 ; 24,9942 ; 24,9945 ; 24,9949 ; 24,9952 ; 24,9956 ; 24,9960. Toutes les pièces mesurées sont encore dans la tolérance (24,987 à 25,000).</p>\n<p><strong>Analyse.</strong> Aucune moyenne n'est hors limites, mais sept points consécutifs sont croissants (de 24,9938 à 24,9960) : c'est un signal de <strong>dérive</strong>. Un diamètre extérieur qui augmente régulièrement correspond typiquement à l'usure de la plaquette (l'outil recule par usure en dépouille). La dernière moyenne s'approche de la limite supérieure de contrôle.</p>\n<p><strong>Réaction.</strong> Avant d'atteindre les limites, appliquer une correction d'usure pour ramener le diamètre vers la ligne centrale (environ −0,0025 au diamètre), ou changer l'arête si la durée de vie prévue est atteinte ; noter l'action dans le journal de bord ; vérifier que les points suivants reviennent autour de la ligne centrale.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> répondre « rien à signaler, toutes les pièces sont bonnes » à une carte qui montre une tendance est une erreur classique. La carte sert justement à agir avant que les pièces ne deviennent mauvaises.</div>"
      },
      {
       "titre": "Pièges fréquents et rédaction de la conclusion",
       "contenu": "<p>Les erreurs les plus fréquentes lors de l'exploitation des documents de contrôle sont les suivantes :</p>\n<ul>\n<li>conclure sur la pièce à partir d'une seule caractéristique, sans parcourir tout le rapport ;</li>\n<li>confondre l'écart (mesuré − nominal) et le dépassement (part hors tolérance) ;</li>\n<li>pour une tolérance de localisation, comparer l'écart selon un axe à la tolérance en diamètre, sans multiplier par deux ;</li>\n<li>attribuer à l'outil un défaut qui touche identiquement toutes les surfaces d'une phase, alors qu'il s'agit d'une origine ou d'une mise en position ;</li>\n<li>confondre limites de contrôle et limites de tolérance sur une carte ;</li>\n<li>proposer une action sans préciser ce qu'on fait des pièces déjà produites.</li>\n</ul>\n<p>Une conclusion bien rédigée tient en quelques lignes structurées : <strong>constat</strong> (caractéristiques conformes et non conformes, avec valeurs), <strong>analyse</strong> (cause probable et raisonnement), <strong>décision</strong> pour la pièce, <strong>actions</strong> sur le procédé et sur les pièces déjà produites, <strong>vérification</strong> prévue de l'efficacité de l'action. Par exemple : « Pièce 12 non conforme sur les localisations 5 à 8 (⌀0,034 à ⌀0,038 pour ⌀0,030). Décalage commun de +0,017 en X : origine X de la phase 20 à reprendre. Pièce isolée, décision qualité. Arrêt de la phase 20, nettoyage de la butée, reprise d'origine, contrôle des pièces 9 à 11. Remesure de la prochaine pièce avant reprise de la série. »</p>\n<p>Enfin, si la mesure se trouve très près d'une limite, il faut se rappeler la notion d'incertitude : un résultat de ⌀0,029 pour une tolérance de ⌀0,030, mesuré avec une incertitude de quelques micromètres, se situe dans la zone d'ambiguïté. La règle de décision convenue avec le client s'applique alors, et une remesure avec un moyen plus précis peut être demandée.</p>"
      }
     ],
     "points_cles": [
      "Une pièce est conforme seulement si toutes ses caractéristiques le sont",
      "L'en-tête du rapport se vérifie avant les résultats",
      "La position du mesuré dans l'intervalle renseigne sur le centrage",
      "Des écarts de même sens sur des surfaces d'une même phase révèlent une cause commune",
      "Un décalage d'origine se traduit par des localisations hors tolérance identiques",
      "La décision porte sur la pièce et sur la production",
      "Sept points croissants sur une carte signalent une dérive, même dans la tolérance",
      "Toute réaction se note dans le journal de bord"
     ],
     "lexique": [
      {
       "terme": "Rapport de contrôle",
       "def": "Document qui présente les résultats de mesure de chaque caractéristique et leur conformité."
      },
      {
       "terme": "Caractéristique",
       "def": "Exigence mesurable du dessin : dimension, forme, position, état de surface."
      },
      {
       "terme": "Écart",
       "def": "Différence entre la valeur mesurée et la valeur nominale."
      },
      {
       "terme": "Hors tolérance",
       "def": "Résultat situé en dehors de l'intervalle admis par le dessin."
      },
      {
       "terme": "Dérogation",
       "def": "Autorisation donnée par le client d'utiliser un produit non conforme dans des limites précisées."
      },
      {
       "terme": "Bulle de contrôle",
       "def": "Numéro reporté sur le dessin pour identifier une caractéristique dans le rapport."
      },
      {
       "terme": "Dérive",
       "def": "Évolution progressive et régulière d'une caractéristique au cours de la production."
      },
      {
       "terme": "Journal de bord",
       "def": "Registre associé à une carte de contrôle, où l'on note événements et actions."
      }
     ]
    },
    {
     "id": "btrpm-doc-catalogue-fds",
     "titre": "Exploiter un catalogue d'outils et une fiche de données de sécurité",
     "niveau": "1re",
     "duree": 40,
     "objectifs": [
      "Repérer l'organisation d'un catalogue d'outils coupants",
      "Extraire d'un catalogue une plaquette, une nuance et des conditions de coupe de départ",
      "Lire une fiche de données de sécurité et en déduire les mesures de prévention",
      "Croiser documentation fournisseur et données du dossier pour justifier un choix",
      "Éviter les erreurs de lecture des tableaux techniques"
     ],
     "sections": [
      {
       "titre": "La documentation fournisseur, une source d'informations normalisée",
       "contenu": "<p>Le technicien s'appuie en permanence sur des documents fournis par les fabricants : catalogues d'outils coupants, catalogues d'éléments normalisés d'outillage, fiches techniques de matériaux, notices de machines, fiches de données de sécurité des produits chimiques. À l'épreuve, des extraits de ces documents sont fournis en annexe ; les questions demandent d'y trouver une information, de faire un choix et de le justifier.</p>\n<p>Ces documents sont denses mais organisés selon des conventions stables : désignations ISO, codes couleur des groupes de matières, pictogrammes réglementaires. Les connaître permet de trouver l'information en quelques secondes.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> une valeur de catalogue est un <strong>point de départ</strong> établi dans des conditions de référence (machine rigide, porte-à-faux court, arrosage). À l'atelier, on l'adapte ; à l'épreuve, on la reprend et l'on justifie l'éventuelle adaptation.</div>"
      },
      {
       "titre": "Structure d'un catalogue d'outils",
       "contenu": "<p>Un catalogue de tournage ou de fraisage s'organise généralement ainsi :</p>\n<table>\n<thead><tr><th>Partie</th><th>Contenu</th></tr></thead>\n<tbody>\n<tr><td>Guide de choix</td><td>Arbre de décision : opération (chariotage, dressage, profilage), matière, conditions (stables, moyennes, difficiles)</td></tr>\n<tr><td>Porte-outils</td><td>Désignations ISO, dimensions, plaquettes compatibles</td></tr>\n<tr><td>Plaquettes</td><td>Tableau des formes et dimensions croisé avec les brise-copeaux et les nuances disponibles</td></tr>\n<tr><td>Nuances</td><td>Positionnement de chaque nuance par groupe ISO (P, M, K, N, S, H) sur une échelle usure / ténacité</td></tr>\n<tr><td>Conditions de coupe</td><td>Vc recommandée par nuance et par sous-groupe de matière (souvent selon la dureté), plage d'avance et de profondeur par brise-copeaux</td></tr>\n<tr><td>Informations techniques</td><td>Formules, diagnostic d'usure, correction de Vc selon la durée de vie</td></tr>\n</tbody>\n</table>\n<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> choisir une plaquette et ses conditions. 1) Identifier l'opération et la forme à réaliser (choix de la forme de plaquette et de l'angle d'attaque). 2) Identifier le groupe ISO et la dureté de la matière. 3) Choisir le brise-copeaux selon l'opération (finition, moyenne, ébauche) et lire sa plage d'avance et de profondeur. 4) Choisir la nuance selon la stabilité des conditions (coupe continue ou interrompue). 5) Lire la Vc dans le tableau croisant nuance et matière, en notant l'avance de référence associée. 6) Vérifier la cohérence avec la machine (puissance, fréquence maximale).</div>"
      },
      {
       "titre": "Exemple commenté : choix d'une plaquette",
       "contenu": "<p><strong>Document.</strong> Il faut finir un ⌀36 h7 en 42CrMo4 traité à environ 300 HB, Ra 1,6, sur un tour CN de 11 kW, coupe continue. Extrait du catalogue (valeurs de l'exemple) :</p>\n<table>\n<thead><tr><th>Brise-copeaux</th><th>Domaine</th><th>ap (mm)</th><th>f (mm/tr)</th></tr></thead>\n<tbody>\n<tr><td>-PF</td><td>Finition</td><td>0,25 à 1,5</td><td>0,07 à 0,25</td></tr>\n<tr><td>-PM</td><td>Semi-finition</td><td>0,8 à 4</td><td>0,15 à 0,45</td></tr>\n<tr><td>-PR</td><td>Ébauche</td><td>2 à 7</td><td>0,25 à 0,7</td></tr>\n</tbody>\n</table>\n<table>\n<thead><tr><th>Matière (groupe P)</th><th>Dureté</th><th>Nuance P15 (Vc m/min)</th><th>Nuance P25 (Vc m/min)</th></tr></thead>\n<tbody>\n<tr><td>Acier non allié</td><td>150 HB</td><td>400</td><td>340</td></tr>\n<tr><td>Acier faiblement allié traité</td><td>275 à 350 HB</td><td>220</td><td>185</td></tr>\n</tbody>\n</table>\n<p><strong>Analyse modèle.</strong> Le 42CrMo4 est un acier faiblement allié : groupe P, ligne « faiblement allié traité » pour 300 HB. L'opération est une finition : brise-copeaux -PF, avec ap de 0,25 à 1,5 mm ; on retient ap = 0,5 mm (surépaisseur laissée par l'ébauche). L'état de surface Ra 1,6 avec un rayon de bec de 0,8 mm autorise une avance d'environ 0,15 mm/tr (voir le calcul de rugosité théorique) ; elle est dans la plage du brise-copeaux. La coupe est continue et stable : la nuance P15, plus résistante à l'usure, convient, avec Vc = 220 m/min. N = 1 000 × 220 / (π × 36) ≈ 1 945 tr/min. La puissance est très faible en finition et ne pose pas de problème sur une machine de 11 kW. Choix : plaquette CNMG 12 04 08-PF en nuance P15, ap = 0,5 mm, f = 0,15 mm/tr, Vc = 220 m/min.</p>"
      },
      {
       "titre": "Structure d'une fiche de données de sécurité",
       "contenu": "<p>La <strong>fiche de données de sécurité</strong> (FDS) est obligatoire pour les produits chimiques dangereux, selon le règlement REACH (annexe II). Elle est rédigée dans la langue du pays et comporte toujours <strong>16 rubriques</strong> dans un ordre fixe. Les plus utiles à l'atelier sont :</p>\n<table>\n<thead><tr><th>Rubrique</th><th>Contenu</th><th>Usage à l'atelier</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>Identification du produit et du fournisseur</td><td>Vérifier qu'il s'agit du bon produit</td></tr>\n<tr><td>2</td><td>Identification des dangers : pictogrammes, mention d'avertissement, mentions de danger H et conseils de prudence P</td><td>Connaître les dangers</td></tr>\n<tr><td>4</td><td>Premiers secours</td><td>Réagir en cas de contact ou d'ingestion</td></tr>\n<tr><td>7</td><td>Manipulation et stockage</td><td>Conditions de stockage, incompatibilités</td></tr>\n<tr><td>8</td><td>Contrôles de l'exposition et protection individuelle</td><td>Choix des gants, lunettes, protection respiratoire, valeurs limites d'exposition</td></tr>\n<tr><td>13</td><td>Considérations relatives à l'élimination</td><td>Filière de déchets</td></tr>\n</tbody>\n</table>\n<p>Les mentions de danger sont codées (par exemple H315 : « provoque une irritation cutanée » ; H317 : « peut provoquer une allergie cutanée ») selon le règlement CLP.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> l'étiquette du bidon ne remplace pas la FDS. Elle ne contient pas les informations sur les gants adaptés, l'élimination ou les premiers secours détaillés. La FDS doit être disponible pour les salariés et à jour.</div>"
      },
      {
       "titre": "Exemple commenté : exploitation d'une FDS de fluide de coupe",
       "contenu": "<p><strong>Document.</strong> Extrait de la FDS d'un concentré de fluide de coupe soluble : rubrique 2 : pictogramme point d'exclamation, mention « Attention », H315, H317, H412 (nocif pour les organismes aquatiques, effets à long terme) ; rubrique 7 : stocker entre 5 et 40 °C, à l'abri du gel, conserver dans l'emballage d'origine ; rubrique 8 : gants en caoutchouc nitrile, lunettes de protection en cas de risque d'éclaboussures, ventilation adaptée, éviter l'inhalation des brouillards ; rubrique 13 : éliminer comme déchet dangereux par une entreprise agréée, ne pas rejeter à l'égout.</p>\n<p><strong>Analyse modèle.</strong> Le produit est irritant et sensibilisant pour la peau : le contact prolongé avec la peau doit être évité, en particulier lors de la préparation de l'émulsion à partir du concentré. Les mesures sont : port de gants nitrile et de lunettes lors du remplissage, utilisation d'un doseur-mélangeur plutôt qu'un mélange à la main, crème protectrice et lavage des mains en fin de poste. Les machines doivent être carénées et équipées d'une aspiration des brouillards. Le stockage se fait dans un local tempéré, à l'abri du gel, dans l'emballage d'origine. Le bain usagé est un déchet dangereux, collecté par une entreprise agréée avec bordereau de suivi ; il est interdit de le vider à l'égout en raison de sa toxicité pour le milieu aquatique (H412).</p>\n<p>Les conseils de prudence de la rubrique 2 (codes P) se traduisent directement en consignes de poste : P280 demande de porter des gants, des vêtements et un équipement de protection des yeux ; P302 + P352 indique la conduite à tenir en cas de contact avec la peau (laver abondamment à l'eau) ; P273 demande d'éviter le rejet dans l'environnement. Une bonne réponse transforme chaque information de la FDS en une mesure concrète au poste, plutôt que de recopier la fiche.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> les FDS sont classées dans un classeur ou une base numérique accessible au poste. Lors de l'arrivée d'un nouveau produit, le responsable sécurité met à jour l'évaluation des risques chimiques et informe les opérateurs.</div>"
      },
      {
       "titre": "Pièges fréquents",
       "contenu": "<p>Les erreurs les plus fréquentes lors de l'exploitation des documents fournisseurs sont les suivantes :</p>\n<ul>\n<li>lire une valeur dans la mauvaise ligne d'un tableau, par exemple la Vc de l'acier non allié recuit pour un acier allié traité ;</li>\n<li>oublier de vérifier que l'avance et la profondeur choisies sont dans la plage du brise-copeaux retenu ;</li>\n<li>choisir la nuance la plus dure « pour durer plus longtemps » alors que la coupe est interrompue et demande une nuance plus tenace ;</li>\n<li>oublier les unités et les conditions de référence indiquées en bas des tableaux (durée de vie de référence, avance de référence) ;</li>\n<li>utiliser une FDS d'un autre produit de la même marque, ou une version ancienne ;</li>\n<li>citer les pictogrammes sans en tirer de mesures pratiques.</li>\n</ul>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> à l'épreuve, chaque information extraite d'un document fournisseur est citée avec sa source (« d'après le tableau de conditions de coupe, ligne acier faiblement allié traité, nuance P15 ») : le correcteur peut ainsi suivre le raisonnement.</div>"
      }
     ],
     "points_cles": [
      "Les valeurs de catalogue sont des points de départ établis dans des conditions de référence",
      "Le choix d'une plaquette suit : opération, matière, brise-copeaux, nuance, conditions",
      "La Vc se lit dans le tableau croisant nuance et sous-groupe de matière",
      "L'avance de finition se déduit de l'état de surface et du rayon de bec",
      "La FDS comporte toujours 16 rubriques dans un ordre fixe",
      "Rubriques 2, 7, 8 et 13 : dangers, stockage, protection, élimination",
      "Les mentions H codifient les dangers selon le règlement CLP",
      "L'étiquette ne remplace jamais la FDS"
     ],
     "lexique": [
      {
       "terme": "Catalogue d'outils",
       "def": "Document fournisseur présentant outils, désignations, nuances et conditions de coupe recommandées."
      },
      {
       "terme": "Brise-copeaux",
       "def": "Géométrie de la face de coupe d'une plaquette adaptée à un domaine d'avance et de profondeur."
      },
      {
       "terme": "Nuance",
       "def": "Matériau d'une plaquette (substrat et revêtement) adapté à un groupe de matières."
      },
      {
       "terme": "FDS",
       "def": "Fiche de données de sécurité en 16 rubriques décrivant les dangers d'un produit et les mesures de protection."
      },
      {
       "terme": "Mention de danger H",
       "def": "Phrase codée normalisée décrivant la nature d'un danger."
      },
      {
       "terme": "Conseil de prudence P",
       "def": "Phrase codée normalisée indiquant une mesure de prévention ou de réaction."
      },
      {
       "terme": "Règlement CLP",
       "def": "Règlement européen sur la classification, l'étiquetage et l'emballage des produits chimiques."
      },
      {
       "terme": "Règlement REACH",
       "def": "Règlement européen sur l'enregistrement, l'évaluation et l'autorisation des substances chimiques."
      }
     ]
    },
    {
     "id": "btrpm-doc-plan-outillage",
     "titre": "Exploiter le plan d'ensemble et la nomenclature d'un outillage",
     "niveau": "1re-Tle",
     "options": [
      "rmo"
     ],
     "duree": 45,
     "objectifs": [
      "Lire le plan d'ensemble d'un outil de presse ou d'un moule et sa nomenclature",
      "Identifier la fonction de chaque élément à partir de son repère",
      "Distinguer éléments réalisés et éléments normalisés achetés",
      "Reconstituer la cinématique d'ouverture, de dévêtissage ou d'éjection",
      "Préparer un ordre de démontage et de montage à partir des documents"
     ],
     "sections": [
      {
       "titre": "Un plan d'outillage, un document dense",
       "contenu": "<p>Le plan d'ensemble d'un outillage représente sur un seul document plusieurs dizaines de pièces assemblées. Il se compose généralement :</p>\n<ul>\n<li>d'une <strong>vue en coupe</strong> principale (souvent une coupe brisée qui passe par les éléments importants : poinçons, colonnes, éjecteurs, tiroir) ;</li>\n<li>d'une <strong>vue de dessus</strong> de la partie inférieure ou de la partie mobile, qui montre l'implantation des éléments ;</li>\n<li>parfois d'une <strong>mise en bande</strong> (outil progressif) ou d'un dessin de la pièce produite ;</li>\n<li>de la <strong>nomenclature</strong>, qui peut compter plus de cent lignes ;</li>\n<li>d'indications de montage : hauteur fermée, course, force des ressorts, raccordements d'eau, masse de l'outillage.</li>\n</ul>\n<p>À l'épreuve, on demande d'identifier des éléments, d'expliquer leur rôle, de décrire un mouvement, de choisir un élément normalisé dans un catalogue ou de préparer une intervention de maintenance.</p>\n<div class=\"encart\" data-type=\"retenir\"><strong>À retenir :</strong> sur un plan d'outillage, le repère est la clé de tout : il relie la représentation dessinée, la ligne de nomenclature, la pièce physique marquée et, le cas échéant, son dessin de définition.</div>"
      },
      {
       "titre": "Lire la nomenclature d'un outillage",
       "contenu": "<p>Une nomenclature d'outillage comporte en général les colonnes suivantes :</p>\n<table>\n<thead><tr><th>Colonne</th><th>Contenu</th><th>Information utile</th></tr></thead>\n<tbody>\n<tr><td>Repère</td><td>Numéro de la pièce</td><td>Lien avec le plan</td></tr>\n<tr><td>Quantité</td><td>Nombre d'exemplaires</td><td>Préparation du montage, pièces de rechange</td></tr>\n<tr><td>Désignation</td><td>Nom de la pièce (poinçon, matrice, colonne de guidage…)</td><td>Fonction</td></tr>\n<tr><td>Matière</td><td>Nuance (1.2379, 1.2311…)</td><td>Procédés possibles, dureté</td></tr>\n<tr><td>Traitement</td><td>Trempe, dureté visée, nitruration, revêtement</td><td>Place dans la gamme</td></tr>\n<tr><td>Dimensions ou référence</td><td>Dimensions brutes ou référence catalogue fournisseur</td><td>Commande, distinction fabriqué / acheté</td></tr>\n<tr><td>Observations</td><td>« Voir plan n° … », « standard », « pièce d'usure »</td><td>Maintenance</td></tr>\n</tbody>\n</table>\n<p>Les éléments <strong>normalisés</strong> se reconnaissent à leur référence de catalogue (colonnes, bagues, éjecteurs, ressorts, vérins à gaz, vis CHC). Les éléments <strong>fabriqués</strong> renvoient à un dessin de définition. Les <strong>pièces d'usure</strong> (poinçons, inserts, éjecteurs) sont souvent signalées pour constituer un stock de rechange.</p>\n<div class=\"encart\" data-type=\"piege\"><strong>Attention :</strong> dans une vue en coupe, les éléments pleins comme les vis, goupilles, colonnes, éjecteurs et ressorts ne sont pas hachurés lorsque le plan de coupe passe par leur axe. Les confondre avec des trous vides conduit à des erreurs d'identification.</div>"
      },
      {
       "titre": "Méthode de lecture",
       "contenu": "<div class=\"encart\" data-type=\"methode\"><strong>Méthode :</strong> 1) Lire le cartouche et les indications générales : type d'outillage, pièce produite, presse prévue, hauteur fermée, masse. 2) Identifier les deux grandes parties (supérieure / inférieure, ou fixe / mobile) et leur fixation sur la presse. 3) Repérer le guidage (colonnes, bagues, centreurs). 4) Repérer les éléments actifs (poinçons, matrices, empreintes, noyaux) et la pièce produite. 5) Repérer les éléments mobiles internes (dévêtisseur, serre-flan, batterie d'éjection, tiroirs) et ce qui les met en mouvement (ressorts, vérins, doigts de commande, butées de la presse). 6) Décrire le cycle dans l'ordre : fermeture, travail, ouverture, extraction. 7) Pour chaque question, partir du repère et vérifier sa ligne de nomenclature.</div>\n<p>Il est utile de surligner mentalement, ou au crayon sur le sujet, chaque sous-ensemble mobile d'une couleur différente : c'est l'équivalent, pour un outillage, des classes d'équivalence d'un mécanisme.</p>"
      },
      {
       "titre": "Exemple commenté : le document",
       "contenu": "<p>Plan d'ensemble d'un <strong>outil à suivre</strong> produisant une patte de fixation en acier DC01 de 2 mm, sur une presse de 630 kN. Extrait de la nomenclature :</p>\n<table>\n<thead><tr><th>Rep.</th><th>Qté</th><th>Désignation</th><th>Matière / référence</th><th>Observations</th></tr></thead>\n<tbody>\n<tr><td>1</td><td>1</td><td>Semelle inférieure</td><td>S355</td><td>Plan 01</td></tr>\n<tr><td>2</td><td>1</td><td>Semelle supérieure</td><td>S355</td><td>Plan 02</td></tr>\n<tr><td>3</td><td>4</td><td>Colonne de guidage ⌀32</td><td>Standard, référence fournisseur</td><td>—</td></tr>\n<tr><td>4</td><td>4</td><td>Bague de guidage à billes ⌀32</td><td>Standard</td><td>—</td></tr>\n<tr><td>5</td><td>1</td><td>Matrice</td><td>1.2379, 60-62 HRC</td><td>Plan 05, pièce d'usure</td></tr>\n<tr><td>6</td><td>1</td><td>Porte-poinçons</td><td>1.2311</td><td>Plan 06</td></tr>\n<tr><td>7</td><td>2</td><td>Poinçon de perçage ⌀8,2</td><td>HS6-5-2, standard</td><td>Pièce d'usure</td></tr>\n<tr><td>8</td><td>1</td><td>Poinçon de découpe finale</td><td>1.2379, 60-62 HRC</td><td>Plan 08, pièce d'usure</td></tr>\n<tr><td>9</td><td>1</td><td>Dévêtisseur</td><td>1.2842, 54-56 HRC</td><td>Plan 09</td></tr>\n<tr><td>10</td><td>6</td><td>Ressort de dévêtisseur</td><td>Standard, charge lourde</td><td>À changer tous les 500 000 coups</td></tr>\n<tr><td>11</td><td>2</td><td>Pilote ⌀8</td><td>Standard trempé</td><td>—</td></tr>\n<tr><td>12</td><td>2</td><td>Guide de bande</td><td>1.2842, trempé</td><td>Plan 12</td></tr>\n<tr><td>13</td><td>8</td><td>Goupille ⌀10 × 40</td><td>Standard</td><td>—</td></tr>\n</tbody>\n</table>\n<p>Indications du plan : hauteur fermée 245 mm ; pas 42 mm ; course du dévêtisseur 8 mm ; masse 85 kg ; jeu de découpe indiqué sur le plan 05.</p>"
      },
      {
       "titre": "Exemple commenté : l'analyse modèle",
       "contenu": "<p><strong>Structure.</strong> La partie inférieure comprend la semelle (1), la matrice (5), les guides de bande (12) et les colonnes (3). La partie supérieure comprend la semelle (2), le porte-poinçons (6), les poinçons (7) et (8), les pilotes (11), le dévêtisseur (9) et ses ressorts (10). Le guidage est assuré par quatre colonnes (3) dans des bagues à billes (4) : liaison pivot glissant par colonne, l'ensemble constituant une glissière précise.</p>\n<p><strong>Cycle.</strong> À la descente, le dévêtisseur (9), poussé par les ressorts (10), vient plaquer la bande sur la matrice ; les pilotes (11) entrent dans les trous percés au pas précédent et recentrent la bande ; les poinçons (7) percent les deux trous ⌀8,2 ; au poste suivant, le poinçon (8) découpe la pièce, qui tombe à travers la matrice. À la remontée, les ressorts maintiennent le dévêtisseur contre la bande pendant que les poinçons se retirent : la bande est dévêtue. La presse fait avancer la bande d'un pas de 42 mm.</p>\n<p><strong>Rôle des pilotes.</strong> Les pilotes ⌀8 entrent dans les trous ⌀8,2 percés par les poinçons (7) au coup précédent : le jeu de 0,1 mm au rayon permet une entrée facile tout en corrigeant l'erreur d'avance de la bande.</p>\n<p><strong>Éléments fabriqués et achetés.</strong> Fabriqués : 1, 2, 5, 6, 8, 9, 12 (ils renvoient à un plan). Achetés : 3, 4, 7, 10, 11, 13 (standard). Pièces d'usure à tenir en stock : 5, 7, 8, et les ressorts 10 à remplacer selon la périodicité indiquée.</p>\n<p><strong>Préparation d'un affûtage.</strong> Pour affûter la matrice (5) et le poinçon (8) : consigner la presse et caler le coulisseau, déposer l'outil (85 kg : moyen de levage obligatoire), séparer les parties en tirant dans l'axe des colonnes, déposer la matrice après extraction des goupilles (13) puis des vis, rectifier, ajouter une cale de l'épaisseur enlevée, remonter dans l'ordre inverse, vérifier la hauteur fermée (245 mm) et le jeu, essayer et contrôler la bavure des premières pièces.</p>\n<div class=\"encart\" data-type=\"clinique\"><strong>En entreprise :</strong> le plan et la nomenclature à jour sont rangés avec l'outil (pochette ou dossier numérique lié au numéro d'outil). Un outilleur qui intervient de nuit sur un outil qu'il ne connaît pas s'appuie entièrement sur ces documents.</div>"
      },
      {
       "titre": "Le cas d'un plan de moule et pièges fréquents",
       "contenu": "<p>Sur un plan de moule d'injection, la même méthode s'applique avec un vocabulaire différent. On repère la partie fixe (plaque de fixation, bague de centrage, douille de carotte, plaque porte-empreinte fixe), la partie mobile (plaque porte-empreinte mobile, plaque d'appui, tasseaux, batterie d'éjection, plaque de fixation), le guidage (colonnes, bagues, centreurs de plan de joint), puis les éléments propres à la pièce (empreintes, noyaux, tiroirs, éjecteurs). Le cycle se décrit dans l'ordre : fermeture et verrouillage, injection, maintien, refroidissement, ouverture avec recul des tiroirs, éjection, retour des éjecteurs.</p>\n<p>Le plan est souvent complété par un <strong>schéma de régulation</strong> qui numérote les entrées et sorties d'eau de chaque circuit et indique les raccords à brancher sur le thermorégulateur. À l'épreuve, on peut demander de tracer le parcours d'un circuit dans les plaques ou d'identifier le circuit qui refroidit un noyau.</p>\n<p>Les erreurs les plus fréquentes dans la lecture d'un plan d'outillage sont :</p>\n<ul>\n<li>confondre une colonne de guidage et un éjecteur, parce que les deux sont des éléments cylindriques non hachurés ;</li>\n<li>oublier que le dévêtisseur ou la plaque d'éjection se déplacent, et les classer dans la partie fixe ;</li>\n<li>décrire le cycle sans préciser ce qui provoque chaque mouvement (ressort, vérin, doigt de commande, butée de la presse) ;</li>\n<li>ne pas tenir compte de la masse indiquée lors de la préparation d'une intervention ;</li>\n<li>commander une pièce standard sans relever sa référence complète dans la nomenclature.</li>\n</ul>"
      }
     ],
     "points_cles": [
      "Le repère relie la vue, la ligne de nomenclature, la pièce marquée et son dessin",
      "La nomenclature distingue éléments fabriqués (renvoi à un plan) et éléments normalisés (référence catalogue)",
      "Les pièces d'usure sont identifiées pour constituer un stock de rechange",
      "Vis, goupilles, colonnes et éjecteurs coupés dans leur axe ne sont pas hachurés",
      "La lecture suit : parties, guidage, éléments actifs, éléments mobiles, cycle",
      "Les pilotes recentrent la bande à chaque pas grâce aux trous percés au poste précédent",
      "Le dévêtisseur plaque la bande puis l'extrait des poinçons à la remontée",
      "La préparation d'une intervention s'appuie sur la masse, la hauteur fermée et l'ordre de démontage"
     ],
     "lexique": [
      {
       "terme": "Outil à suivre",
       "def": "Autre nom de l'outil progressif, dans lequel la bande avance d'un pas à chaque coup."
      },
      {
       "terme": "Nomenclature",
       "def": "Liste repérée des pièces d'un ensemble avec quantités, désignations, matières et observations."
      },
      {
       "terme": "Élément normalisé",
       "def": "Pièce standard achetée sur catalogue, identifiée par une référence fournisseur."
      },
      {
       "terme": "Pièce d'usure",
       "def": "Élément destiné à être remplacé périodiquement en cours de vie de l'outillage."
      },
      {
       "terme": "Coupe brisée",
       "def": "Coupe dont le plan change de direction pour passer par plusieurs éléments intéressants."
      },
      {
       "terme": "Bague à billes",
       "def": "Bague de guidage contenant une cage à billes, pour un guidage précis sans jeu."
      },
      {
       "terme": "Hauteur fermée",
       "def": "Hauteur totale de l'outil fermé, à régler sur la presse."
      },
      {
       "terme": "Goupille",
       "def": "Pion cylindrique qui positionne précisément deux pièces assemblées."
      }
     ]
    }
   ]
  }
 ]
};
