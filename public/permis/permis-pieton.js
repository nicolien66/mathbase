window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["pieton"] = window.PERMIS_COURS["pieton"] || { chapitres: [], questions: [] };

  /* =====================================================================
     Permis piéton (CE2 – CM1, 8 à 10 ans) — cours
     ===================================================================== */

  P.chapitres.push(
    {
      id: "pieton-et-rue",
      theme: "PIE1",
      titre: "Le piéton et la rue",
      duree: 10,
      objectifs: [
        "Connaître les différentes parties de la rue : trottoir, chaussée, bordure, accotement.",
        "Savoir où marcher quand il y a un trottoir.",
        "Savoir où marcher quand il n'y a pas de trottoir.",
        "Faire attention aux sorties de garage et de parking."
      ],
      sections: [
        {
          titre: "Les parties de la rue",
          contenu: `<p>Quand tu marches dehors, tu es un <strong>piéton</strong>. La rue n'est pas un seul grand espace : elle est partagée en plusieurs parties, et chacune a son rôle.</p>
<ul>
<li>La <strong>chaussée</strong> : c'est la partie où roulent les voitures, les bus, les camions, les motos et souvent les vélos.</li>
<li>Le <strong>trottoir</strong> : c'est la partie un peu plus haute, sur le côté, faite pour les piétons.</li>
<li>La <strong>bordure</strong> (on dit aussi le bord du trottoir) : c'est la petite marche entre le trottoir et la chaussée. C'est une frontière : au-delà, c'est le domaine des véhicules.</li>
<li>L'<strong>accotement</strong> : à la campagne, c'est la bande de terre ou d'herbe au bord de la route, quand il n'y a pas de trottoir.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le trottoir est pour les piétons, la chaussée est pour les véhicules. La bordure, c'est la limite à ne pas dépasser sans réfléchir.</div>`
        },
        {
          titre: "Je marche sur le trottoir",
          contenu: `<p>Quand il y a un trottoir, tu marches <strong>toujours sur le trottoir</strong>. Même si la rue semble vide, une voiture peut arriver très vite, sans bruit (les voitures électriques sont très silencieuses).</p>
<p>Sur le trottoir, choisis bien ta place :</p>
<ul>
<li>Marche plutôt <strong>du côté des maisons</strong>, loin de la bordure. Ainsi, si tu trébuches ou si quelqu'un te bouscule, tu ne tombes pas sur la chaussée.</li>
<li>Ne joue pas au bord du trottoir et ne marche pas en équilibre sur la bordure.</li>
<li>Si le trottoir est encombré (poubelles, voiture mal garée, travaux), ne descends pas sur la chaussée sans regarder : arrête-toi, regarde et contourne l'obstacle le plus court possible, puis remonte vite sur le trottoir.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> sur le chemin de l'école, tu marches avec ton copain Hugo. Le trottoir est étroit. Tu te places côté maisons et Hugo marche derrière toi, plutôt qu'à côté, au bord de la chaussée.</div>`
        },
        {
          titre: "Quand il n'y a pas de trottoir",
          contenu: `<p>À la campagne ou dans certaines petites rues, il n'y a pas toujours de trottoir. Il faut alors marcher sur l'<strong>accotement</strong> s'il y en a un, ou tout au bord de la route.</p>
<p>Dans ce cas, on marche <strong>sur le côté gauche</strong> de la route, <strong>face aux voitures</strong>. Pourquoi ? Parce que tu vois les voitures arriver en face de toi : tu peux t'écarter à temps. Et le conducteur te voit de face, lui aussi.</p>
<ul>
<li>Marche les uns derrière les autres, en file, jamais à plusieurs de front.</li>
<li>Reste le plus près possible du bord.</li>
<li>Quand une voiture approche, serre-toi encore plus sur le côté, et arrête-toi si c'est étroit.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> beaucoup d'enfants répondent « à droite, comme les voitures ». C'est faux pour un piéton seul : sans trottoir, on marche à <strong>gauche</strong>, pour voir arriver les voitures de face.</div>
<div class="encart" data-type="danger"><strong>Attention :</strong> dans un virage, les conducteurs te voient très tard. Si tu ne peux pas voir loin devant toi, sois encore plus prudent et serre-toi bien au bord.</div>`
        },
        {
          titre: "Les entrées de garage et de parking",
          contenu: `<p>Même sur le trottoir, il y a des endroits où des voitures peuvent passer : les <strong>sorties de garage</strong>, les <strong>entrées de parking</strong>, les portails des maisons, les accès des stations-service.</p>
<p>Le conducteur qui sort en marche arrière voit mal derrière lui, surtout les enfants, qui sont petits. Il peut ne pas te voir du tout.</p>
<ul>
<li>Quand tu passes devant une sortie de garage ou de parking, <strong>ralentis</strong>.</li>
<li><strong>Regarde et écoute</strong> : un moteur qui tourne, des feux de recul blancs allumés, une porte de garage qui s'ouvre.</li>
<li>Si une voiture sort, <strong>arrête-toi</strong> et attends qu'elle soit partie ou que le conducteur te fasse signe de passer.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> devant le supermarché, tu longes la sortie du parking souterrain. Tu entends un moteur qui monte la rampe. Tu t'arrêtes avant la sortie et tu laisses la voiture sortir.</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les feux blancs à l'arrière d'une voiture veulent dire qu'elle va reculer. Ne passe jamais derrière.</div>`
        },
        {
          titre: "Marcher, ce n'est pas jouer",
          contenu: `<p>Sur le trottoir, tu dois rester attentif. Se pousser, se courir après, jouer au ballon ou faire la course, c'est risquer de tomber sur la chaussée sans le vouloir.</p>
<p>Ton téléphone ou ta console aussi détournent ton attention : on ne regarde pas un écran en marchant près des voitures. Si tu dois lire un message, <strong>arrête-toi</strong> sur le trottoir, loin de la bordure.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un bon piéton marche, regarde et écoute. Les jeux, c'est au parc ou à la cour de récréation.</div>`
        }
      ],
      points_cles: [
        "Le trottoir est pour les piétons, la chaussée pour les véhicules.",
        "Sur le trottoir, je marche du côté des maisons, loin de la bordure.",
        "Sans trottoir, je marche à gauche, face aux voitures, en file.",
        "Devant une sortie de garage ou de parking, je ralentis, je regarde et j'écoute.",
        "Des feux blancs allumés à l'arrière d'une voiture : elle va reculer, je ne passe pas derrière.",
        "Je ne joue pas au bord de la route."
      ]
    }
  );

  P.chapitres.push(
    {
      id: "voir-et-etre-vu",
      theme: "PIE2",
      titre: "Voir et être vu",
      duree: 10,
      objectifs: [
        "Comprendre qu'un conducteur ne voit pas tout.",
        "Connaître les angles morts des bus, des camions et des voitures.",
        "Savoir se rendre visible la nuit et par mauvais temps.",
        "Garder ses yeux et ses oreilles disponibles : capuche, écouteurs, écran."
      ],
      sections: [
        {
          titre: "Toi, tu vois la voiture… mais elle, te voit-elle ?",
          contenu: `<p>Tu es petit : à côté d'une voiture garée, ta tête dépasse à peine du capot. Le conducteur, lui, est assis, regarde loin devant et doit surveiller beaucoup de choses en même temps : les feux, les panneaux, les autres voitures, les vélos.</p>
<p>C'est pour cela qu'il ne faut <strong>jamais penser</strong> : « Je vois la voiture, donc le conducteur me voit. » Ce n'est pas toujours vrai !</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> pour être sûr qu'un conducteur t'a vu, cherche son regard. S'il te regarde, s'arrête ou te fait un signe, il t'a vu.</div>`
        },
        {
          titre: "Les angles morts",
          contenu: `<p>Un <strong>angle mort</strong>, c'est une zone autour d'un véhicule que le conducteur ne peut pas voir, même avec ses rétroviseurs. Si tu es dans un angle mort, pour lui, tu es invisible.</p>
<ul>
<li>Autour d'une <strong>voiture</strong>, il y a des angles morts juste derrière et sur les côtés arrière.</li>
<li>Autour d'un <strong>bus</strong> ou d'un <strong>camion</strong>, ils sont énormes : juste devant le véhicule (le conducteur est assis très haut), sur tout le côté droit, et derrière.</li>
</ul>
<p>Une astuce simple : <strong>si tu ne vois pas les yeux du conducteur, ou ses rétroviseurs, il ne te voit pas non plus.</strong></p>
<div class="encart" data-type="danger"><strong>Attention :</strong> quand un camion ou un bus tourne à droite, il fait un grand virage et son arrière balaie le trottoir. Ne reste jamais collé à côté d'un camion ou d'un bus à l'arrêt, surtout au coin d'une rue. Recule sur le trottoir.</div>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> tu attends au passage piéton. Un gros camion est arrêté au feu, juste devant toi. Tu ne passes pas devant lui pour traverser : le chauffeur, perché très haut, ne te voit pas. Tu attends qu'il soit parti.</div>`
        },
        {
          titre: "Ce qui te cache",
          contenu: `<p>Parfois, ce n'est pas le conducteur qui regarde mal : c'est quelque chose qui te cache. Les <strong>voitures garées</strong>, une camionnette, un arbre, une poubelle, un abribus, un tas de neige…</p>
<p>Si tu sors de derrière un obstacle, la voiture qui arrive ne peut pas te voir avant que tu sois sur la chaussée. Et toi non plus, tu ne peux pas la voir arriver.</p>
<ul>
<li>Ne traverse pas en sortant de derrière une voiture garée.</li>
<li>Choisis un endroit dégagé, où tu vois loin des deux côtés et où l'on te voit bien.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> pour bien voir et être vu, je me place là où rien ne me cache.</div>`
        },
        {
          titre: "La nuit et par mauvais temps",
          contenu: `<p>Le soir en hiver, il fait nuit tôt. Quand il pleut, quand il y a du brouillard ou de la neige, les conducteurs voient beaucoup moins bien. Un enfant habillé en noir ou en bleu foncé devient presque <strong>invisible</strong>.</p>
<p>Pour être vu :</p>
<ul>
<li>Porte des <strong>vêtements clairs</strong> (blanc, jaune, orange).</li>
<li>Utilise des <strong>bandes réfléchissantes</strong> : sur ton cartable, ton blouson, tes chaussures. Elles renvoient la lumière des phares et brillent fort.</li>
<li>Mets un <strong>gilet jaune réfléchissant</strong> : c'est le meilleur moyen d'être vu de loin.</li>
<li>Une petite lampe peut aussi aider, surtout à la campagne.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un vêtement de couleur vive aide le jour, mais la nuit, seul un élément <strong>réfléchissant</strong> (bandes, gilet) se voit vraiment de loin dans les phares.</div>`
        },
        {
          titre: "Capuche, écouteurs et écrans",
          contenu: `<p>Pour être en sécurité, tu as besoin de tes <strong>yeux</strong> et de tes <strong>oreilles</strong>. Les oreilles t'aident à entendre une voiture qui arrive dans ton dos, un klaxon, une sirène, une moto.</p>
<ul>
<li>Une <strong>capuche</strong> ou un bonnet très enfoncé t'empêche de tourner la tête et de voir sur les côtés. Avant de traverser, enlève ta capuche ou tourne bien toute ta tête.</li>
<li>Des <strong>écouteurs</strong> ou un casque audio t'empêchent d'entendre les dangers. Enlève-les près des rues.</li>
<li>Un <strong>écran</strong> (téléphone, console) attire ton regard vers le bas : tu ne vois plus ce qui se passe autour.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> il pleut à la sortie de l'école. Léa a mis sa capuche. Avant de traverser, elle s'arrête au bord du trottoir et tourne toute sa tête à gauche, à droite, puis encore à gauche, pour bien voir malgré la capuche.</div>`
        }
      ],
      points_cles: [
        "Je vois une voiture ne veut pas dire qu'elle me voit : je cherche le regard du conducteur.",
        "Si je ne vois pas le conducteur ou ses rétroviseurs, il ne me voit pas.",
        "Je reste loin des bus et des camions : leurs angles morts sont immenses.",
        "Je ne sors jamais de derrière une voiture garée.",
        "La nuit ou sous la pluie, je porte du clair et du réfléchissant.",
        "Pas de capuche, d'écouteurs ou d'écran qui m'empêchent de voir et d'entendre."
      ]
    }
  );

  P.chapitres.push(
    {
      id: "traverser",
      theme: "PIE3",
      titre: "Traverser la rue",
      duree: 12,
      objectifs: [
        "Savoir choisir le bon endroit pour traverser.",
        "Connaître les étapes pour traverser en sécurité.",
        "Comprendre l'importance du contact visuel avec le conducteur.",
        "Traverser tout droit, sans courir, en continuant de regarder."
      ],
      panneaux: ["PASSAGE_PIETON", "C20a", "A13b"],
      sections: [
        {
          titre: "Où traverser ?",
          contenu: `<p>Traverser la rue, c'est le moment le plus dangereux pour un piéton : tu quittes le trottoir pour aller sur la chaussée, là où roulent les véhicules.</p>
<p>Le meilleur endroit, c'est le <strong>passage piéton</strong>, avec ses grandes bandes blanches <span class="panneau" data-code="PASSAGE_PIETON"></span>. Un panneau bleu peut aussi le signaler <span class="panneau" data-code="C20a"></span>, et parfois un panneau triangulaire prévient les conducteurs à l'avance <span class="panneau" data-code="A13b"></span>.</p>
<p>S'il y a un passage piéton <strong>à moins de 50 mètres</strong> (à peu près la longueur d'une piscine olympique), tu dois aller jusqu'à lui pour traverser.</p>
<p>S'il n'y a pas de passage piéton près de toi, choisis un endroit où :</p>
<ul>
<li>tu <strong>vois loin</strong> des deux côtés ;</li>
<li>les conducteurs te <strong>voient bien</strong> ;</li>
<li>il n'y a ni virage, ni haut de côte, ni voiture garée qui cache la vue.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> je traverse sur le passage piéton. S'il n'y en a pas, je choisis un endroit où je vois bien et où l'on me voit bien.</div>`
        },
        {
          titre: "Comment traverser : les étapes",
          contenu: `<ol>
<li><strong>Je m'arrête</strong> au bord du trottoir, sans descendre sur la chaussée. Je ne pose pas le pied sur la route.</li>
<li><strong>Je regarde à gauche</strong> : ce sont les voitures qui arrivent sur la partie de la chaussée la plus proche de moi.</li>
<li><strong>Je regarde à droite</strong> : pour les voitures qui arrivent de l'autre côté.</li>
<li><strong>Je regarde encore à gauche</strong> : pendant que je regardais à droite, une voiture a pu arriver.</li>
<li><strong>J'écoute</strong> : un moteur, un klaxon, une sirène.</li>
<li>Si rien n'arrive, ou si les voitures sont <strong>arrêtées</strong>, je traverse.</li>
</ol>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> on regarde <strong>à gauche, à droite, puis encore à gauche</strong>. Regarder une seule fois de chaque côté ne suffit pas.</div>`
        },
        {
          titre: "Pendant la traversée",
          contenu: `<ul>
<li>Je traverse <strong>tout droit</strong>, par le chemin le plus court. Jamais en diagonale : ce serait plus long, donc plus dangereux.</li>
<li>Je marche <strong>d'un pas rapide, sans courir</strong>. En courant, je peux trébucher et tomber au milieu de la route.</li>
<li>Je <strong>continue de regarder</strong> à gauche et à droite pendant que je traverse.</li>
<li>Je ne fais <strong>pas demi-tour</strong> au milieu de la chaussée, même si j'ai fait tomber quelque chose. Un objet se remplace ; toi, non.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> si ton bonnet ou ta balle tombe au milieu de la rue, ne te précipite pas. Termine ta traversée, puis demande à un adulte de t'aider à le récupérer quand il n'y a plus de voiture.</div>`
        },
        {
          titre: "Le contact visuel avec le conducteur",
          contenu: `<p>Les conducteurs doivent laisser passer un piéton qui est engagé sur un passage piéton, ou qui montre clairement qu'il veut traverser. Mais tous ne le font pas, et certains ne t'ont pas vu.</p>
<p>Avant de traverser devant une voiture qui ralentit, <strong>regarde le conducteur dans les yeux</strong>. S'il te regarde, s'arrête complètement ou te fait signe de passer, tu peux y aller.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> tu es au bord d'un passage piéton, devant la boulangerie. Une voiture ralentit. Tu regardes la conductrice : elle te sourit et te fait un signe de la main. La voiture est bien arrêtée : tu traverses en regardant aussi s'il n'arrive rien de l'autre côté.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une voiture arrêtée devant le passage peut <strong>cacher</strong> une autre voiture qui arrive sur l'autre file, et qui ne s'arrête pas. Avant de passer devant la voiture arrêtée, regarde au-delà d'elle.</div>`
        }
      ],
      points_cles: [
        "Je traverse sur le passage piéton s'il y en a un à moins de 50 mètres.",
        "Je m'arrête au bord du trottoir, sans poser le pied sur la chaussée.",
        "Je regarde à gauche, à droite, encore à gauche, et j'écoute.",
        "Je traverse tout droit, d'un pas rapide, sans courir.",
        "Je continue de regarder pendant toute la traversée.",
        "Je cherche le regard du conducteur avant de passer devant sa voiture.",
        "Je ne fais jamais demi-tour au milieu de la rue."
      ]
    }
  );

  P.chapitres.push(
    {
      id: "feux-et-policier",
      theme: "PIE4",
      titre: "Les feux et le policier",
      duree: 10,
      objectifs: [
        "Comprendre le feu piéton : bonhomme rouge, bonhomme vert, bonhomme qui clignote.",
        "Savoir lire le feu tricolore des voitures.",
        "Savoir obéir à l'agent de circulation et au patrouilleur scolaire.",
        "Rester prudent même quand le feu est vert pour toi."
      ],
      panneaux: ["FEU_PIETON_ROUGE", "FEU_PIETON_VERT", "FEU_ROUGE", "FEU_ORANGE", "FEU_VERT", "FEU_CLIGNOTANT"],
      sections: [
        {
          titre: "Le feu piéton",
          contenu: `<p>À beaucoup de passages piétons, il y a un <strong>feu pour les piétons</strong>, avec un petit bonhomme.</p>
<ul>
<li><span class="panneau" data-code="FEU_PIETON_ROUGE"></span> Le <strong>bonhomme rouge</strong> (il est immobile, debout) : <strong>j'attends</strong> sur le trottoir. Je ne traverse pas, même si aucune voiture n'arrive.</li>
<li><span class="panneau" data-code="FEU_PIETON_VERT"></span> Le <strong>bonhomme vert</strong> (il marche) : je peux traverser, <strong>après avoir vérifié</strong> que les voitures sont bien arrêtées.</li>
</ul>
<p>Sur certains feux, le bonhomme vert <strong>clignote</strong>, ou un petit compteur montre les secondes qui restent : le feu va bientôt passer au rouge. Si tu n'as pas encore commencé à traverser, <strong>attends le prochain bonhomme vert</strong>. Si tu es déjà sur la chaussée, termine ta traversée d'un pas rapide, sans courir et sans faire demi-tour.</p>
<p>Certains feux ont un <strong>bouton</strong> : tu appuies dessus et tu attends que le bonhomme passe au vert. D'autres font un petit bruit pour aider les personnes aveugles.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> bonhomme rouge, j'attends. Bonhomme vert, je regarde quand même, puis je traverse.</div>`
        },
        {
          titre: "Vert pour moi… mais je regarde quand même",
          contenu: `<p>Quand le bonhomme est vert, les voitures qui vont tout droit ont un feu rouge. Mais attention :</p>
<ul>
<li>une voiture qui <strong>tourne</strong> au carrefour peut avoir le droit d'avancer en même temps que toi : elle doit te laisser passer, mais le conducteur peut ne pas te voir ;</li>
<li>un conducteur peut <strong>griller le feu rouge</strong> par erreur ou par imprudence ;</li>
<li>un vélo ou une trottinette peut ne pas s'arrêter.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « Le bonhomme est vert, donc je fonce » : faux ! Le bonhomme vert te <strong>permet</strong> de traverser, mais tu dois d'abord vérifier que les véhicules sont arrêtés.</div>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> à la sortie de l'école, le bonhomme devient vert. Tom regarde à gauche : une voiture qui tourne s'approche du passage. Il attend qu'elle s'arrête, croise le regard du conducteur, puis il traverse.</div>`
        },
        {
          titre: "Le feu tricolore des voitures",
          contenu: `<p>Les voitures ont leur propre feu, à trois couleurs :</p>
<ul>
<li><span class="panneau" data-code="FEU_VERT"></span> <strong>vert</strong> : les voitures peuvent passer ;</li>
<li><span class="panneau" data-code="FEU_ORANGE"></span> <strong>orange</strong> (jaune fixe) : les voitures doivent s'arrêter, sauf si elles sont trop près pour freiner sans danger ;</li>
<li><span class="panneau" data-code="FEU_ROUGE"></span> <strong>rouge</strong> : les voitures doivent s'arrêter.</li>
</ul>
<p>S'il n'y a <strong>pas de feu piéton</strong> mais un feu pour les voitures, regarde le feu des voitures que tu vas croiser : tu ne traverses que s'il est <strong>rouge pour elles</strong> et qu'elles sont <strong>arrêtées</strong>.</p>
<p>Un feu orange qui <strong>clignote</strong> <span class="panneau" data-code="FEU_CLIGNOTANT"></span> ne veut pas dire « stop » : les voitures peuvent passer en faisant attention. Ce n'est pas un signal pour toi : tu traverses comme s'il n'y avait pas de feu, en étant très prudent.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> quand le feu des voitures passe à l'orange, certaines accélèrent pour passer. Ne commence jamais à traverser à ce moment-là.</div>`
        },
        {
          titre: "L'agent de circulation et le patrouilleur scolaire",
          contenu: `<p>Parfois, un <strong>policier</strong> ou un <strong>gendarme</strong> règle la circulation au milieu du carrefour, avec des gestes et un sifflet. Ses gestes sont plus importants que les feux : <strong>on obéit à l'agent</strong>, même si le feu dit autre chose.</p>
<ul>
<li>Bras levé : tout le monde s'arrête.</li>
<li>S'il te présente son dos ou sa poitrine, la circulation est arrêtée pour ceux qui sont devant ou derrière lui.</li>
<li>S'il te fait signe d'avancer, tu peux traverser, en regardant quand même.</li>
</ul>
<p>Devant certaines écoles, un <strong>patrouilleur scolaire</strong> (souvent un adulte en gilet jaune, avec un panneau rond « Stop » à la main) aide les enfants à traverser. Il arrête les voitures, puis te fait signe de passer. <strong>Attends son signal</strong>, et suis ses consignes.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'agent de circulation passe avant le feu. Le patrouilleur scolaire t'aide : j'attends son signal pour traverser.</div>`
        }
      ],
      points_cles: [
        "Bonhomme rouge : j'attends, même si la rue est vide.",
        "Bonhomme vert : je vérifie que les voitures sont arrêtées, puis je traverse.",
        "Bonhomme qui clignote : si je n'ai pas commencé, j'attends le prochain vert.",
        "Sans feu piéton, je traverse quand le feu des voitures est rouge et qu'elles sont arrêtées.",
        "Les gestes de l'agent de circulation passent avant les feux.",
        "Devant l'école, j'attends le signal du patrouilleur scolaire."
      ]
    }
  );

  P.chapitres.push(
    {
      id: "panneaux-pieton",
      theme: "PIE5",
      titre: "Les panneaux utiles au piéton",
      duree: 10,
      objectifs: [
        "Reconnaître les formes et les couleurs des panneaux.",
        "Reconnaître les panneaux qui parlent des piétons et des enfants.",
        "Connaître la zone de rencontre, la zone 30 et l'aire piétonne.",
        "Comprendre ce que doivent faire les voitures au stop et au cédez-le-passage."
      ],
      panneaux: ["C20a", "A13b", "A13a", "ZONE_REN", "ZONE30", "B22b", "B1", "AB4", "AB3a"],
      sections: [
        {
          titre: "Formes et couleurs : un code facile",
          contenu: `<p>Les panneaux sont surtout faits pour les conducteurs, mais les connaître t'aide à <strong>deviner ce que vont faire les voitures</strong>. Leur forme et leur couleur donnent déjà un indice :</p>
<table>
<thead><tr><th>Forme</th><th>Ce que ça veut dire</th></tr></thead>
<tbody>
<tr><td>Triangle bordé de rouge</td><td>Attention, danger !</td></tr>
<tr><td>Rond bordé de rouge ou rond rouge</td><td>C'est interdit.</td></tr>
<tr><td>Rond bleu</td><td>C'est obligatoire.</td></tr>
<tr><td>Carré ou rectangle bleu</td><td>Une information ou une indication.</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> triangle = danger, rond rouge = interdit, rond bleu = obligatoire, carré bleu = information.</div>`
        },
        {
          titre: "Les panneaux des piétons et des enfants",
          contenu: `<ul>
<li><span class="panneau" data-code="C20a"></span> Ce panneau carré bleu indique un <strong>passage pour piétons</strong>, juste à cet endroit.</li>
<li><span class="panneau" data-code="A13b"></span> Ce triangle <strong>prévient les conducteurs</strong> qu'un passage pour piétons arrive bientôt : ils doivent ralentir.</li>
<li><span class="panneau" data-code="A13a"></span> Ce triangle, avec deux enfants, annonce un <strong>endroit fréquenté par les enfants</strong> : une école, un terrain de jeux, un centre de loisirs. Les conducteurs doivent être très prudents.</li>
<li><span class="panneau" data-code="B22b"></span> Ce rond bleu avec un piéton indique un <strong>chemin réservé aux piétons</strong> : les voitures n'ont pas le droit d'y aller.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le triangle du passage piéton ne veut pas dire que tu peux traverser à cet endroit. Il annonce le passage <strong>plus loin</strong>. Le passage, lui, est là où sont les bandes blanches.</div>`
        },
        {
          titre: "Zone de rencontre, zone 30 et aire piétonne",
          contenu: `<p>Dans certaines rues, les voitures doivent rouler moins vite pour laisser plus de place aux piétons.</p>
<ul>
<li><span class="panneau" data-code="ZONE_REN"></span> <strong>Zone de rencontre</strong> : les voitures ne roulent pas à plus de <strong>20 km/h</strong>. Les piétons sont <strong>prioritaires</strong> et peuvent marcher sur la chaussée. Mais prioritaire ne veut pas dire invisible : tu restes attentif et tu ne joues pas au milieu de la rue.</li>
<li><span class="panneau" data-code="ZONE30"></span> <strong>Zone 30</strong> : les voitures ne roulent pas à plus de <strong>30 km/h</strong>. Ici, tu restes sur le trottoir et tu traverses comme d'habitude.</li>
<li>L'<strong>aire piétonne</strong> : c'est une rue réservée aux piétons, souvent dans le centre-ville. Seuls quelques véhicules peuvent y entrer (livraisons, secours), et ils doivent rouler <strong>au pas</strong>, c'est-à-dire à la vitesse de quelqu'un qui marche.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> le samedi, tu te promènes avec tes parents dans la rue piétonne du centre-ville. Une camionnette de livraison arrive doucement. Tu te pousses sur le côté pour la laisser passer : même au pas, elle peut te faire mal.</div>`
        },
        {
          titre: "Sens interdit, stop et cédez-le-passage",
          contenu: `<p>Ces panneaux s'adressent aux conducteurs, mais ils t'aident à savoir <strong>d'où peuvent venir les voitures</strong> et lesquelles vont s'arrêter.</p>
<ul>
<li><span class="panneau" data-code="B1"></span> <strong>Sens interdit</strong> : les voitures n'ont pas le droit d'entrer dans la rue par ce côté. Toi, piéton, tu peux y marcher sur le trottoir. Mais attention : un vélo peut parfois rouler en sens inverse, et un conducteur peut se tromper. Regarde des deux côtés.</li>
<li><span class="panneau" data-code="AB4"></span> <strong>Stop</strong> : le conducteur doit <strong>s'arrêter complètement</strong>, puis laisser passer les autres avant de repartir.</li>
<li><span class="panneau" data-code="AB3a"></span> <strong>Cédez le passage</strong> : le conducteur doit ralentir et laisser passer les autres. Il peut ne pas s'arrêter si personne n'arrive.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> au stop, le conducteur regarde surtout les voitures qui arrivent sur les côtés. Il peut repartir sans te voir. Ne passe jamais juste devant une voiture arrêtée au stop sans avoir croisé le regard du conducteur.</div>`
        }
      ],
      points_cles: [
        "Triangle = danger, rond rouge = interdit, rond bleu = obligatoire, carré bleu = information.",
        "Le panneau bleu du passage piéton est là où je traverse ; le triangle l'annonce plus loin.",
        "Le panneau aux deux enfants demande aux conducteurs d'être très prudents.",
        "En zone de rencontre, les voitures roulent à 20 km/h au plus et les piétons sont prioritaires.",
        "Dans une rue en sens interdit, je regarde quand même des deux côtés.",
        "Une voiture arrêtée au stop peut repartir sans me voir."
      ]
    }
  );

  P.chapitres.push(
    {
      id: "distances-vitesses",
      theme: "PIE6",
      titre: "Les distances et les vitesses",
      duree: 10,
      objectifs: [
        "Comprendre qu'une voiture ne peut pas s'arrêter d'un coup.",
        "Connaître, en gros, la distance d'arrêt à 30 km/h et à 50 km/h.",
        "Savoir estimer si on a le temps de traverser.",
        "Attendre qu'une voiture soit vraiment arrêtée avant de passer."
      ],
      panneaux: ["B14:30", "B14:50", "ZONE30", "A4"],
      sections: [
        {
          titre: "Une voiture ne s'arrête pas d'un coup",
          contenu: `<p>Quand tu cours et que tu veux t'arrêter, tu fais encore un ou deux pas. Une voiture, c'est pareil, mais en beaucoup plus long : elle est lourde (plus d'une tonne, autant que quinze adultes) et elle va vite.</p>
<p>Pour s'arrêter, il faut deux choses :</p>
<ol>
<li><strong>Le temps de réagir</strong> : le conducteur te voit, comprend qu'il y a un danger et appuie sur le frein. Cela prend environ <strong>une seconde</strong>. Pendant cette seconde, la voiture continue d'avancer à la même vitesse !</li>
<li><strong>Le freinage</strong> : la voiture ralentit, ralentit… et finit par s'arrêter.</li>
</ol>
<p>La distance parcourue pendant ces deux moments s'appelle la <strong>distance d'arrêt</strong>.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> même si le conducteur freine très fort, la voiture avance encore de nombreux mètres avant de s'arrêter.</div>`
        },
        {
          titre: "À 30 km/h et à 50 km/h",
          contenu: `<p>En ville, les voitures roulent souvent à <strong>50 km/h</strong> au plus <span class="panneau" data-code="B14:50"></span>, et parfois à <strong>30 km/h</strong> au plus <span class="panneau" data-code="B14:30"></span> <span class="panneau" data-code="ZONE30"></span>, près des écoles par exemple.</p>
<table>
<thead><tr><th>Vitesse de la voiture</th><th>Distance d'arrêt (route sèche)</th><th>Pour imaginer</th></tr></thead>
<tbody>
<tr><td>30 km/h</td><td>environ 13 mètres</td><td>la longueur d'un bus</td></tr>
<tr><td>50 km/h</td><td>environ 28 mètres</td><td>plus de deux bus, ou presque la longueur de la cour de récréation</td></tr>
</tbody>
</table>
<p>Tu vois : en roulant un peu plus vite, la voiture a besoin de <strong>plus de deux fois plus de place</strong> pour s'arrêter.</p>
<p>Et quand la route est <strong>mouillée</strong>, <strong>glissante</strong> <span class="panneau" data-code="A4"></span> ou couverte de neige, la distance d'arrêt est <strong>encore plus longue</strong>.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « Le conducteur m'a vu, il va s'arrêter juste devant moi. » Non ! Même s'il t'a vu, si tu sors trop près de sa voiture, il <strong>ne peut pas</strong> s'arrêter à temps.</div>`
        },
        {
          titre: "Ai-je le temps de traverser ?",
          contenu: `<p>Une rue normale, avec une file de voitures dans chaque sens, fait environ 6 à 7 mètres de large. En marchant d'un pas rapide, il te faut plusieurs secondes pour la traverser.</p>
<p>Or, à 50 km/h, une voiture parcourt environ <strong>14 mètres chaque seconde</strong>. En quelques secondes, une voiture qui te paraissait loin est déjà là !</p>
<ul>
<li>Il est très difficile, même pour un adulte, de savoir à quelle vitesse roule une voiture qui arrive de face.</li>
<li>Une voiture qui arrive vite paraît souvent plus loin qu'elle ne l'est.</li>
<li>Un vélo, une moto ou une trottinette électrique sont plus petits : on croit qu'ils sont loin, alors qu'ils arrivent vite.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en cas de doute, je n'y vais pas. J'attends que la voiture soit passée ou arrêtée. Quelques secondes d'attente, ce n'est rien.</div>`
        },
        {
          titre: "Attendre que la voiture soit arrêtée",
          contenu: `<p>Une voiture qui <strong>ralentit</strong> n'est pas une voiture qui <strong>s'arrête</strong>. Le conducteur peut ralentir pour tourner, pour regarder une adresse, ou parce qu'il y a un ralentisseur.</p>
<ul>
<li>Attends que les roues ne tournent plus : la voiture doit être <strong>complètement arrêtée</strong>.</li>
<li>Cherche le regard du conducteur.</li>
<li>Vérifie qu'aucun autre véhicule n'arrive sur l'autre file ou derrière la voiture arrêtée.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> devant le parc, une voiture ralentit en approchant du passage piéton. Inès attend au bord du trottoir. La voiture s'arrête bien, la conductrice lui fait signe : Inès regarde une dernière fois de l'autre côté, puis elle traverse.</div>
<div class="encart" data-type="danger"><strong>Attention :</strong> quand il pleut, il fait sombre, les phares éblouissent et les voitures freinent mal. Sois encore plus patient.</div>`
        }
      ],
      points_cles: [
        "Une voiture ne s'arrête jamais d'un coup.",
        "À 30 km/h, il lui faut environ 13 mètres pour s'arrêter ; à 50 km/h, environ 28 mètres.",
        "Sur route mouillée, la distance d'arrêt est encore plus longue.",
        "En cas de doute, je n'y vais pas : j'attends.",
        "Une voiture qui ralentit n'est pas une voiture arrêtée.",
        "Je traverse quand la voiture est complètement arrêtée et que le conducteur m'a vu."
      ]
    }
  );

  P.chapitres.push(
    {
      id: "situations-dangereuses",
      theme: "PIE7",
      titre: "Les situations dangereuses",
      duree: 14,
      objectifs: [
        "Repérer les situations où les accidents arrivent le plus souvent.",
        "Savoir descendre du bus et traverser après.",
        "Savoir se comporter dans un parking, près d'un carrefour ou d'un giratoire.",
        "Savoir réagir face à des travaux ou à des vélos et trottinettes sur le trottoir."
      ],
      panneaux: ["AB25", "A14", "C1a", "A13a"],
      sections: [
        {
          titre: "Entre deux voitures garées",
          contenu: `<p>Traverser entre deux voitures garées, c'est l'une des causes d'accident les plus fréquentes chez les enfants.</p>
<ul>
<li>Les voitures garées te <strong>cachent</strong> : le conducteur ne te voit qu'au dernier moment, quand tu sors sur la chaussée.</li>
<li>Toi non plus, tu ne vois pas bien les voitures qui arrivent.</li>
<li>Une voiture garée peut <strong>démarrer</strong> ou <strong>reculer</strong> pendant que tu passes juste derrière.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> je ne traverse pas entre deux voitures garées. Je vais jusqu'au passage piéton, ou à un endroit dégagé.</div>`
        },
        {
          titre: "Le ballon qui roule sur la route",
          contenu: `<p>Tu joues avec un copain près de chez toi. Le ballon s'échappe et roule sur la route. Ton premier réflexe, c'est de courir après… et c'est justement le danger !</p>
<p>Quand on court après un ballon, on ne regarde que le ballon. On ne voit plus les voitures.</p>
<ul>
<li><strong>Arrête-toi</strong> au bord du trottoir.</li>
<li>Laisse le ballon partir. Une voiture peut l'écraser : tant pis, ce n'est qu'un ballon.</li>
<li>Quand il n'y a plus de voiture, va le chercher en traversant prudemment, ou demande à un adulte.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un conducteur qui voit un ballon traverser la rue devant lui ralentit tout de suite : il sait qu'un enfant risque de courir derrière. Toi, ne sois pas cet enfant !</div>`
        },
        {
          titre: "Descendre du bus ou du car",
          contenu: `<p>À la descente du bus ou du car scolaire, il y a beaucoup de monde et tout le monde est pressé. C'est un moment dangereux.</p>
<ol>
<li>Attends que le bus soit <strong>complètement arrêté</strong> pour te lever et descendre.</li>
<li>Descends calmement, sans pousser, en tenant la rampe.</li>
<li>Éloigne-toi du bus, sur le trottoir.</li>
<li><strong>Attends que le bus soit reparti</strong> avant de traverser. Le bus cache les voitures qui arrivent, et les conducteurs ne te voient pas derrière lui.</li>
<li>Puis traverse au passage piéton, en regardant à gauche, à droite, encore à gauche.</li>
</ol>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> on ne traverse ni <strong>devant</strong> ni <strong>derrière</strong> le bus arrêté. On attend qu'il soit parti.</div>`
        },
        {
          titre: "Carrefours et giratoires",
          contenu: `<p>À un <strong>carrefour</strong>, des voitures arrivent de plusieurs côtés et certaines tournent. Une voiture qui tourne peut arriver sur ton passage piéton alors que tu ne l'attendais pas.</p>
<p>Le <strong>giratoire</strong> (ou rond-point) <span class="panneau" data-code="AB25"></span> est un carrefour où les voitures tournent autour d'un îlot central. Les passages piétons sont placés <strong>un peu avant</strong> l'entrée et la sortie du giratoire.</p>
<ul>
<li>Ne traverse jamais au milieu du giratoire, ni en coupant par l'îlot central.</li>
<li>Utilise les passages piétons, et regarde bien : les voitures qui sortent du giratoire regardent souvent ailleurs.</li>
<li>Au carrefour, surveille aussi les voitures qui tournent.</li>
</ul>`
        },
        {
          titre: "Le parking et la rue en travaux",
          contenu: `<p>Dans un <strong>parking</strong> <span class="panneau" data-code="C1a"></span> (au supermarché, au cinéma), les voitures avancent, reculent, tournent dans tous les sens. Les conducteurs cherchent une place et regardent plutôt les places libres que les piétons.</p>
<ul>
<li><strong>Donne la main</strong> à un adulte, ou reste tout près de lui.</li>
<li>Repère les voitures qui ont leurs <strong>feux de recul</strong> allumés (feux blancs à l'arrière) : elles vont reculer.</li>
<li>Ne cours pas entre les voitures, ne joue pas avec le chariot.</li>
</ul>
<p>Dans une <strong>rue en travaux</strong> <span class="panneau" data-code="A14"></span>, le trottoir peut être fermé. Suis le <strong>passage prévu pour les piétons</strong> (souvent indiqué par des barrières ou des panneaux). N'entre jamais dans la zone du chantier, même pour regarder les engins : leurs conducteurs voient très mal autour d'eux.</p>`
        },
        {
          titre: "Vélos et trottinettes sur le trottoir",
          contenu: `<p>Sur le trottoir, tu peux croiser des enfants à vélo, des personnes en trottinette ou à rollers. Les <strong>enfants de moins de 8 ans</strong> ont le droit de rouler à vélo sur le trottoir, à condition d'aller doucement et de ne pas gêner les piétons. Les trottinettes électriques, elles, n'ont pas le droit de rouler sur le trottoir.</p>
<ul>
<li>Marche de façon <strong>prévisible</strong> : ne fais pas d'écart brusque.</li>
<li>Si tu entends une sonnette, regarde avant de te pousser.</li>
<li>Avant de sortir d'une porte ou d'un coin de rue, ralentis : quelqu'un peut arriver vite.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> les trottinettes électriques et les vélos électriques vont vite et ne font presque pas de bruit. Regarde bien, n'écoute pas seulement.</div>`
        }
      ],
      points_cles: [
        "Je ne traverse jamais entre deux voitures garées.",
        "Si mon ballon roule sur la route, je m'arrête au bord du trottoir.",
        "Après le bus, j'attends qu'il soit reparti pour traverser.",
        "Au giratoire, j'utilise les passages piétons et je surveille les voitures qui sortent.",
        "Au parking, je donne la main à un adulte et je surveille les feux de recul.",
        "Je n'entre jamais dans un chantier ; je suis le passage prévu pour les piétons."
      ]
    }
  );

  P.chapitres.push(
    {
      id: "groupe-et-usagers",
      theme: "PIE8",
      titre: "En groupe et avec les autres usagers",
      duree: 12,
      objectifs: [
        "Savoir se déplacer en rang avec sa classe.",
        "Savoir accompagner un petit frère, une petite sœur ou un chien.",
        "Savoir où rouler en trottinette ou à rollers, et pourquoi porter un casque.",
        "Partager la rue avec les cyclistes."
      ],
      panneaux: ["B22b", "A13a", "ZONE_REN"],
      sections: [
        {
          titre: "En rang avec la classe",
          contenu: `<p>Pour aller à la piscine, au gymnase ou au musée, ta classe se déplace souvent à pied. Marcher à plusieurs, ça demande d'être bien organisé.</p>
<ul>
<li>On marche <strong>en rang, deux par deux</strong>, sans se doubler ni s'arrêter brusquement.</li>
<li>Un adulte marche <strong>devant</strong> et un autre <strong>derrière</strong> le groupe.</li>
<li>On <strong>écoute les consignes</strong> de la maîtresse ou du maître : ce sont eux qui décident quand le groupe traverse.</li>
<li>On traverse <strong>tous ensemble</strong>, vite mais sans courir, et on ne s'arrête pas au milieu de la rue.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> dans un groupe, on a tendance à suivre les autres sans regarder. Même en rang, reste attentif : regarde, écoute, et ne te laisse pas distraire par les bavardages.</div>`
        },
        {
          titre: "Avec un petit frère ou une petite sœur",
          contenu: `<p>Un enfant plus petit que toi ne connaît pas encore bien les dangers. Il peut lâcher ta main et partir en courant d'un coup.</p>
<ul>
<li><strong>Tiens-lui fermement la main</strong>, surtout pour traverser.</li>
<li>Fais-le marcher <strong>du côté des maisons</strong>, et toi du côté de la chaussée.</li>
<li>Montre-lui l'exemple : il fait ce qu'il te voit faire. Si tu traverses au bonhomme rouge, il le fera aussi un jour, peut-être tout seul.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en sécurité routière, les grands donnent l'exemple aux petits.</div>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> tu ramènes ta petite sœur Jade de l'école avec ta maman. Jade veut aller voir un chat de l'autre côté de la rue. Tu la retiens par la main et vous attendez le passage piéton.</div>`
        },
        {
          titre: "Avec un chien",
          contenu: `<p>Un chien est imprévisible : il peut voir un chat ou un autre chien et tirer d'un coup. S'il est trop fort pour toi, il peut t'entraîner sur la chaussée.</p>
<ul>
<li>Le chien est <strong>toujours en laisse</strong> près des rues.</li>
<li>Tiens-le <strong>du côté des maisons</strong>, loin de la chaussée, avec la laisse courte.</li>
<li>Ne promène pas seul un chien trop gros ou trop fort pour toi.</li>
<li>Pour traverser, tiens-le près de toi et fais-le traverser en même temps que toi.</li>
</ul>`
        },
        {
          titre: "En trottinette ou à rollers",
          contenu: `<p>Avec une trottinette <strong>sans moteur</strong> ou des rollers, tu es considéré comme un <strong>piéton</strong>. Tu roules donc sur le <strong>trottoir</strong>, <strong>doucement</strong>, à la vitesse de quelqu'un qui marche, sans gêner les autres piétons.</p>
<ul>
<li>Pour traverser, <strong>descends de ta trottinette</strong> et traverse à pied en la tenant à la main. Avec des rollers, traverse doucement, sans élan.</li>
<li>Porte un <strong>casque</strong> : en cas de chute, ta tête est protégée. Des genouillères, des coudières et des protège-poignets sont aussi très utiles.</li>
<li>Ne t'accroche jamais à un vélo, à une voiture ou à un bus pour te faire tirer.</li>
<li>Évite les descentes trop raides : tu pourrais ne pas réussir à t'arrêter avant la route.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> en trottinette sans moteur, on ne roule pas sur la chaussée avec les voitures : on reste sur le trottoir, au pas.</div>`
        },
        {
          titre: "Les cyclistes",
          contenu: `<p>Les vélos roulent sur la chaussée ou sur une <strong>piste cyclable</strong> ou une <strong>bande cyclable</strong>. À vélo, le <strong>casque est obligatoire</strong> pour les enfants de moins de 12 ans, qu'ils pédalent ou qu'ils soient passagers.</p>
<p>Quand tu es piéton :</p>
<ul>
<li>Ne marche pas sur la piste cyclable : elle est faite pour les vélos.</li>
<li>Avant de traverser une piste cyclable, regarde aussi : un vélo arrive vite et sans bruit.</li>
<li>Sur une <strong>voie verte</strong> ou un chemin partagé, reste sur le côté et ne fais pas d'écart brusque.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un vélo est un véhicule. Je regarde avant de traverser une piste cyclable, comme pour une route.</div>`
        }
      ],
      points_cles: [
        "En rang, je marche deux par deux et je suis les consignes de l'adulte.",
        "Je tiens la main du plus petit, et il marche côté maisons.",
        "Le chien est en laisse courte, du côté des maisons.",
        "En trottinette sans moteur ou à rollers, je roule doucement sur le trottoir.",
        "Pour traverser, je descends de ma trottinette.",
        "Je porte un casque à trottinette, à rollers et à vélo.",
        "Je regarde avant de traverser une piste cyclable."
      ]
    }
  );

  P.chapitres.push(
    {
      id: "accident-probleme",
      theme: "PIE9",
      titre: "En cas d'accident ou de problème",
      duree: 8,
      objectifs: [
        "Savoir se mettre en sécurité.",
        "Savoir alerter un adulte.",
        "Connaître les numéros d'urgence : 15, 17, 18 et 112.",
        "Savoir quoi dire au téléphone."
      ],
      sections: [
        {
          titre: "D'abord, se mettre en sécurité",
          contenu: `<p>Si tu vois un accident, ou s'il t'arrive quelque chose dans la rue, la première chose à faire est de <strong>ne pas te mettre en danger</strong>.</p>
<ul>
<li>Reste sur le trottoir, loin des voitures.</li>
<li>Ne va pas sur la chaussée pour aider quelqu'un : d'autres voitures peuvent arriver.</li>
<li>Ne touche pas une personne blessée et ne la déplace pas.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> pour pouvoir aider, il faut d'abord rester en sécurité soi-même.</div>`
        },
        {
          titre: "Alerter un adulte",
          contenu: `<p>Tu n'as pas à tout faire seul. Le plus important, c'est de <strong>prévenir un adulte</strong> le plus vite possible : un passant, un commerçant, un parent, l'enseignant, le patrouilleur scolaire.</p>
<p>Dis-lui clairement ce que tu as vu : « Il y a eu un accident, un enfant est tombé de son vélo, il ne bouge plus. »</p>
<p>Et si c'est <strong>toi</strong> qui as eu un petit accident (une chute, un vélo qui t'a frôlé, une voiture qui t'a touché, même doucement) ? Même si tu n'as presque pas mal, <strong>parles-en toujours</strong> à un adulte. Certaines blessures ne se voient pas tout de suite, et ce n'est jamais de ta faute d'avoir eu peur.</p>
<ul>
<li>Ne reste pas seul, même si tu as honte ou peur d'être grondé.</li>
<li>Si un conducteur t'a touché, ne repars pas sans qu'un adulte soit prévenu.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> en rentrant de l'école, tu vois une dame tomber en descendant du trottoir. Elle ne se relève pas. Tu entres dans la boulangerie juste à côté et tu demandes au boulanger de venir l'aider et d'appeler les secours.</div>`
        },
        {
          titre: "Les numéros d'urgence",
          contenu: `<p>Ces numéros sont <strong>gratuits</strong> et on peut les appeler depuis n'importe quel téléphone, même sans crédit.</p>
<table>
<thead><tr><th>Numéro</th><th>Qui répond ?</th><th>Quand appeler ?</th></tr></thead>
<tbody>
<tr><td><strong>15</strong></td><td>Le SAMU</td><td>Quelqu'un est malade ou blessé.</td></tr>
<tr><td><strong>17</strong></td><td>La police ou la gendarmerie</td><td>Tu es en danger, quelqu'un te fait peur, une bagarre, un vol.</td></tr>
<tr><td><strong>18</strong></td><td>Les pompiers</td><td>Un incendie, un accident, une personne blessée.</td></tr>
<tr><td><strong>112</strong></td><td>Le numéro d'urgence européen</td><td>Pour toutes les urgences, en France et dans toute l'Europe.</td></tr>
</tbody>
</table>
<div class="encart" data-type="danger"><strong>Attention :</strong> appeler un numéro d'urgence pour s'amuser est interdit. Pendant ce temps, quelqu'un qui en a vraiment besoin ne peut pas être aidé.</div>`
        },
        {
          titre: "Que dire au téléphone ?",
          contenu: `<p>Au téléphone, reste calme et réponds aux questions. Pense à trois choses :</p>
<ol>
<li><strong>Qui tu es</strong> : ton prénom et ton âge.</li>
<li><strong>Où tu es</strong> : le nom de la rue, la ville, un magasin ou un monument à côté.</li>
<li><strong>Ce qui s'est passé</strong> : combien de blessés, s'ils parlent, s'ils bougent.</li>
</ol>
<p>Ne raccroche pas le premier : c'est la personne des secours qui te dit quand tu peux raccrocher.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> on ne raccroche pas tout de suite après avoir donné l'alerte. On attend que les secours disent que c'est fini.</div>`
        },
        {
          titre: "Si tu es perdu ou si tu as peur",
          contenu: `<p>Parfois, le problème n'est pas un accident : tu t'es perdu, tu as raté le bus, quelqu'un te suit ou te fait peur.</p>
<ul>
<li>Reste dans un endroit où il y a du monde.</li>
<li>Entre dans un magasin, une pharmacie, une mairie, et demande de l'aide à un adulte qui y travaille.</li>
<li>Ne monte jamais dans la voiture de quelqu'un que tu ne connais pas.</li>
<li>Apprends par cœur ton adresse et le numéro de téléphone d'un de tes parents.</li>
</ul>`
        }
      ],
      points_cles: [
        "Je me mets d'abord en sécurité, sur le trottoir.",
        "Je préviens tout de suite un adulte.",
        "15 : le SAMU ; 17 : la police ; 18 : les pompiers ; 112 : l'urgence européenne.",
        "Au téléphone, je dis qui je suis, où je suis et ce qui s'est passé.",
        "Je ne raccroche pas le premier.",
        "Je connais mon adresse et le numéro de mes parents par cœur."
      ]
    }
  );

  /* =====================================================================
     Questions
     ===================================================================== */

  P.questions.push(
    // ---------- PIE1 : Le piéton et la rue ----------
    {
      id: "PIE1-001", chapitre: "pieton-et-rue",
      situation: "Tu marches vers l'école. La rue a un trottoir de chaque côté.",
      q: "Où dois-tu marcher ?",
      options: ["Sur le trottoir", "Sur la chaussée, au bord", "Sur la bordure, en équilibre"],
      bonnes: [0],
      explication: "Bravo si tu as trouvé ! Quand il y a un trottoir, on marche toujours dessus : la chaussée est pour les véhicules."
    },
    {
      id: "PIE1-002", chapitre: "pieton-et-rue",
      situation: "Tu marches sur un trottoir assez étroit, le long d'une rue où passent beaucoup de voitures.",
      q: "Où te places-tu sur le trottoir ?",
      options: ["Du côté des maisons", "Tout au bord, près des voitures", "Au milieu, en zigzaguant"],
      bonnes: [0],
      explication: "Du côté des maisons, tu es loin des voitures : si tu trébuches ou si on te bouscule, tu ne tombes pas sur la chaussée."
    },
    {
      id: "PIE1-003", chapitre: "pieton-et-rue",
      q: "Comment s'appelle la partie de la rue où roulent les voitures ?",
      options: ["La chaussée", "Le trottoir", "L'accotement", "La bordure"],
      bonnes: [0],
      explication: "C'est la chaussée. Le trottoir est pour les piétons, et la bordure est la petite marche qui sépare les deux."
    },
    {
      id: "PIE1-004", chapitre: "pieton-et-rue",
      situation: "Tu te promènes à la campagne avec ta cousine. La petite route n'a pas de trottoir.",
      q: "De quel côté de la route marchez-vous ?",
      options: ["À gauche, face aux voitures", "À droite, comme les voitures", "Au milieu de la route"],
      bonnes: [0],
      explication: "Sans trottoir, on marche à gauche, face aux voitures : tu les vois arriver et tu peux t'écarter à temps."
    },
    {
      id: "PIE1-005", chapitre: "pieton-et-rue",
      situation: "Vous êtes trois copains sur une route de campagne sans trottoir.",
      q: "Comment marchez-vous ?",
      options: ["Les uns derrière les autres, en file", "Tous les trois côte à côte", "Le plus près possible du bord", "Au milieu, pour être bien vus"],
      bonnes: [0, 2],
      explication: "En file et tout au bord : vous prenez moins de place et les voitures peuvent passer sans vous frôler."
    },
    {
      id: "PIE1-006", chapitre: "pieton-et-rue",
      situation: "Sans trottoir, tu marches au bord d'une route. Une voiture arrive en face de toi.",
      q: "Que fais-tu ?",
      options: ["Je me serre bien sur le côté", "Je m'arrête si c'est étroit", "Je continue au milieu de la route"],
      bonnes: [0, 1],
      explication: "Tu te serres sur le côté, et tu t'arrêtes si la route est étroite : la voiture passe sans danger."
    },
    {
      id: "PIE1-007", chapitre: "pieton-et-rue",
      situation: "Sur le trottoir, tu passes devant un garage. Tu vois des petites lumières blanches allumées à l'arrière d'une voiture.",
      q: "Que veulent dire ces feux blancs ?",
      options: ["La voiture va reculer", "La voiture est garée pour longtemps", "La voiture a une panne"],
      bonnes: [0],
      explication: "Ce sont les feux de recul : la voiture va reculer. Ne passe jamais derrière, attends qu'elle soit partie."
    },
    {
      id: "PIE1-008", chapitre: "pieton-et-rue",
      situation: "Tu longes la sortie du parking du supermarché. Tu entends un moteur qui monte la rampe.",
      q: "Que fais-tu ?",
      options: ["Je m'arrête et j'attends que la voiture soit sortie", "Je passe vite en courant", "Je passe juste derrière la voiture"],
      bonnes: [0],
      explication: "Tu t'arrêtes et tu laisses sortir la voiture : le conducteur voit mal les enfants en sortant d'un parking. Ne passe jamais derrière elle."
    },
    {
      id: "PIE1-009", chapitre: "pieton-et-rue",
      situation: "Une voiture est garée sur le trottoir et te bloque le passage.",
      q: "Que fais-tu ?",
      options: ["Je m'arrête, je regarde, puis je contourne la voiture le plus court possible", "Je marche sur la chaussée jusqu'au bout de la rue", "Je saute par-dessus le capot"],
      bonnes: [0],
      explication: "Tu contournes l'obstacle après avoir regardé, puis tu remontes vite sur le trottoir. La chaussée n'est pas faite pour marcher."
    },
    {
      id: "PIE1-010", chapitre: "pieton-et-rue",
      situation: "Sur le trottoir, ton copain veut faire la course jusqu'au coin de la rue.",
      q: "Est-ce une bonne idée ?",
      options: ["Oui", "Non"],
      bonnes: [1],
      explication: "Non : en courant ou en se poussant, on peut tomber sur la chaussée sans le vouloir. Les jeux, c'est au parc !"
    },
    {
      id: "PIE1-011", chapitre: "pieton-et-rue",
      situation: "Tu reçois un message sur ton téléphone pendant que tu marches dans la rue.",
      q: "Que fais-tu ?",
      options: ["Je le lis en continuant de marcher", "Je m'arrête sur le trottoir, loin de la bordure, pour le lire", "Je le lis en traversant la rue"],
      bonnes: [1],
      explication: "On ne regarde pas un écran en marchant près des voitures. Arrête-toi en sécurité, ou attends d'être arrivé."
    },
    {
      id: "PIE1-012", chapitre: "pieton-et-rue",
      q: "À la campagne, comment s'appelle la bande d'herbe ou de terre au bord de la route ?",
      options: ["L'accotement", "Le trottoir", "Le terre-plein"],
      bonnes: [0],
      explication: "C'est l'accotement. Quand il n'y a pas de trottoir, on marche dessus s'il y en a un."
    },
    {
      id: "PIE1-013", chapitre: "pieton-et-rue",
      situation: "La rue est calme, il n'y a aucune voiture.",
      q: "Puis-je marcher sur la chaussée ?",
      options: ["Oui, puisqu'il n'y a personne", "Non, je reste sur le trottoir"],
      bonnes: [1],
      explication: "Une voiture peut arriver très vite et sans bruit, surtout une voiture électrique. Tu restes sur le trottoir."
    },

    // ---------- PIE2 : Voir et être vu ----------
    {
      id: "PIE2-001", chapitre: "voir-et-etre-vu",
      situation: "Tu vois une voiture arriver au bout de la rue.",
      q: "Le conducteur me voit forcément :",
      options: ["Oui", "Non"],
      bonnes: [1],
      explication: "Non : ce n'est pas parce que tu vois la voiture que le conducteur te voit. Cherche son regard pour en être sûr."
    },
    {
      id: "PIE2-002", chapitre: "voir-et-etre-vu",
      q: "Comment savoir qu'un conducteur t'a vu ?",
      options: ["Il me regarde", "Il s'arrête complètement", "Il me fait un signe de la main", "Sa radio est allumée"],
      bonnes: [0, 1, 2],
      explication: "Un regard, un arrêt complet ou un signe de la main montrent que le conducteur t'a vu. La radio, elle, ne dit rien."
    },
    {
      id: "PIE2-003", chapitre: "voir-et-etre-vu",
      q: "Qu'est-ce qu'un angle mort ?",
      options: ["Une zone autour du véhicule que le conducteur ne peut pas voir", "Un virage très dangereux", "Le coin d'un trottoir"],
      bonnes: [0],
      explication: "L'angle mort est une zone que le conducteur ne voit pas, même avec ses rétroviseurs. Si tu y es, tu es invisible pour lui."
    },
    {
      id: "PIE2-004", chapitre: "voir-et-etre-vu",
      situation: "Un camion est arrêté au feu, juste devant le passage piéton.",
      q: "Où sont ses angles morts les plus grands ?",
      options: ["Juste devant lui", "Sur tout son côté droit", "Derrière lui", "Sur son toit"],
      bonnes: [0, 1, 2],
      explication: "Le chauffeur est assis très haut : il ne voit ni juste devant, ni sur le côté droit, ni derrière. Reste loin du camion."
    },
    {
      id: "PIE2-005", chapitre: "voir-et-etre-vu",
      q: "Quelle astuce t'aide à savoir si un chauffeur de bus peut te voir ?",
      options: ["Si je ne vois pas ses yeux ou ses rétroviseurs, il ne me voit pas", "S'il klaxonne, il ne me voit pas", "S'il roule, il me voit toujours"],
      bonnes: [0],
      explication: "C'est la bonne astuce : si tu ne vois pas le conducteur ou ses rétroviseurs, lui non plus ne te voit pas."
    },
    {
      id: "PIE2-006", chapitre: "voir-et-etre-vu",
      situation: "Au coin de la rue, un bus attend pour tourner à droite. Tu es sur le trottoir, tout près de lui.",
      q: "Que fais-tu ?",
      options: ["Je recule sur le trottoir", "Je reste collé au bus", "Je passe devant lui en courant"],
      bonnes: [0],
      explication: "En tournant, l'arrière du bus balaie le bord du trottoir et le chauffeur ne te voit pas. Recule bien !"
    },
    {
      id: "PIE2-007", chapitre: "voir-et-etre-vu",
      situation: "C'est l'hiver. Tu rentres du judo à 18 heures, il fait déjà nuit.",
      q: "Que portes-tu pour être bien vu ?",
      options: ["Des vêtements clairs", "Des bandes réfléchissantes", "Un gilet jaune réfléchissant", "Un blouson noir"],
      bonnes: [0, 1, 2],
      explication: "Clair et réfléchissant, c'est gagné ! Un blouson noir te rend presque invisible dans la nuit."
    },
    {
      id: "PIE2-008", chapitre: "voir-et-etre-vu",
      q: "La nuit, qu'est-ce qui se voit le mieux de loin dans les phares des voitures ?",
      options: ["Un gilet ou des bandes réfléchissantes", "Un tee-shirt rouge", "Un pantalon bleu marine"],
      bonnes: [0],
      explication: "Les éléments réfléchissants renvoient la lumière des phares et brillent fort : on te voit de très loin."
    },
    {
      id: "PIE2-009", chapitre: "voir-et-etre-vu",
      situation: "Il pleut à la sortie de l'école. Tu as mis ta capuche et tu dois traverser.",
      q: "Que fais-tu ?",
      options: ["J'enlève ma capuche ou je tourne bien toute la tête pour regarder", "Je traverse vite sans regarder pour ne pas être mouillé", "Je regarde seulement devant moi"],
      bonnes: [0],
      explication: "La capuche cache les côtés. Enlève-la ou tourne bien toute ta tête à gauche, à droite, puis encore à gauche."
    },
    {
      id: "PIE2-010", chapitre: "voir-et-etre-vu",
      situation: "Tu écoutes de la musique avec des écouteurs sur le chemin de l'école.",
      q: "Pourquoi est-ce dangereux près des rues ?",
      options: ["Je n'entends pas les voitures qui arrivent", "Je n'entends pas un klaxon ou une sirène", "Ce n'est pas dangereux"],
      bonnes: [0, 1],
      explication: "Tes oreilles t'aident à repérer les dangers. Avec des écouteurs, tu n'entends plus les moteurs, les klaxons ni les sirènes."
    },
    {
      id: "PIE2-011", chapitre: "voir-et-etre-vu",
      situation: "Tu veux traverser. Une camionnette est garée au bord du trottoir, juste devant toi.",
      q: "Traverser en sortant de derrière la camionnette, c'est :",
      options: ["Dangereux", "Sans risque"],
      bonnes: [0],
      explication: "La camionnette te cache : la voiture qui arrive ne te voit qu'au dernier moment. Va à un endroit dégagé."
    },
    {
      id: "PIE2-012", chapitre: "voir-et-etre-vu",
      situation: "Il y a du brouillard ce matin.",
      q: "Les conducteurs te voient :",
      options: ["Moins bien que d'habitude", "Mieux que d'habitude", "Comme d'habitude"],
      bonnes: [0],
      explication: "Brouillard, pluie, neige : les conducteurs voient beaucoup moins bien. Mets du clair et du réfléchissant, et sois très prudent."
    },
    {
      id: "PIE2-013", chapitre: "voir-et-etre-vu",
      q: "Où peux-tu coller des bandes réfléchissantes ?",
      options: ["Sur mon cartable", "Sur mon blouson", "Sur mes chaussures"],
      bonnes: [0, 1, 2],
      explication: "Partout ! Cartable, blouson, chaussures : plus il y a de bandes, plus tu es visible dans les phares."
    },

    // ---------- PIE3 : Traverser la rue ----------
    {
      id: "PIE3-001", chapitre: "traverser",
      situation: "Tu veux traverser. Il y a des bandes blanches sur la chaussée, à 20 mètres de toi.",
      panneau: "PASSAGE_PIETON",
      q: "Où traverses-tu ?",
      options: ["Sur le passage piéton", "Juste ici, c'est plus court"],
      bonnes: [0],
      explication: "S'il y a un passage piéton à moins de 50 mètres, tu dois l'utiliser. C'est là que les conducteurs s'attendent à voir des piétons."
    },
    {
      id: "PIE3-002", chapitre: "traverser",
      situation: "Tu arrives au bord du passage piéton pour traverser.",
      q: "Que fais-tu d'abord ?",
      options: ["Je m'arrête au bord du trottoir", "Je pose un pied sur la chaussée pour montrer que je veux passer", "Je traverse sans m'arrêter"],
      bonnes: [0],
      explication: "On s'arrête au bord du trottoir, sans poser le pied sur la chaussée. C'est de là qu'on regarde avant de traverser."
    },
    {
      id: "PIE3-003", chapitre: "traverser",
      q: "Dans quel ordre regardes-tu avant de traverser ?",
      options: ["À gauche, à droite, encore à gauche", "À droite seulement", "À gauche seulement", "Devant moi"],
      bonnes: [0],
      explication: "À gauche, à droite, puis encore à gauche : pendant que tu regardais à droite, une voiture a pu arriver à gauche."
    },
    {
      id: "PIE3-004", chapitre: "traverser",
      q: "Pourquoi regarde-t-on d'abord à gauche ?",
      options: ["Parce que les voitures de gauche roulent sur la partie de la chaussée la plus proche de moi", "Parce que c'est plus joli", "Parce que les voitures de droite ne roulent jamais"],
      bonnes: [0],
      explication: "En France, on roule à droite : les voitures qui arrivent de ta gauche passent tout près de toi, sur la première moitié de la rue."
    },
    {
      id: "PIE3-005", chapitre: "traverser",
      situation: "Tu as regardé à gauche, à droite, encore à gauche. Il n'y a aucune voiture.",
      panneau: "C20a",
      q: "Comment traverses-tu ?",
      options: ["Tout droit", "D'un pas rapide, sans courir", "En diagonale pour arriver plus près du magasin", "En courant le plus vite possible"],
      bonnes: [0, 1],
      explication: "Tout droit, c'est le chemin le plus court. D'un pas rapide sans courir, pour ne pas trébucher au milieu de la route."
    },
    {
      id: "PIE3-006", chapitre: "traverser",
      situation: "Tu es au milieu du passage piéton.",
      q: "Que fais-tu ?",
      options: ["Je continue de regarder à gauche et à droite", "Je regarde mes pieds", "Je m'arrête pour discuter"],
      bonnes: [0],
      explication: "Pendant toute la traversée, tu continues de regarder : une voiture ou un vélo peut arriver."
    },
    {
      id: "PIE3-007", chapitre: "traverser",
      situation: "En traversant, ton bonnet tombe au milieu de la chaussée.",
      q: "Que fais-tu ?",
      options: ["Je termine ma traversée, puis je demande de l'aide à un adulte", "Je fais demi-tour tout de suite pour le ramasser"],
      bonnes: [0],
      explication: "On ne fait jamais demi-tour au milieu de la route. Un bonnet se remplace, toi non !"
    },
    {
      id: "PIE3-008", chapitre: "traverser",
      situation: "Une voiture ralentit devant le passage piéton où tu attends.",
      q: "Avant de traverser, que fais-tu ?",
      options: ["Je cherche le regard du conducteur", "J'attends que la voiture soit arrêtée", "Je traverse dès qu'elle ralentit"],
      bonnes: [0, 1],
      explication: "Tu attends que la voiture soit arrêtée et tu croises le regard du conducteur : ainsi tu es sûr qu'il t'a vu."
    },
    {
      id: "PIE3-009", chapitre: "traverser",
      situation: "La rue a deux files dans le même sens. Une voiture s'arrête sur la première file pour te laisser passer.",
      q: "Que fais-tu avant de passer devant elle ?",
      options: ["Je regarde si une autre voiture arrive sur l'autre file", "Je traverse vite, puisqu'elle s'est arrêtée"],
      bonnes: [0],
      explication: "La voiture arrêtée peut cacher une autre voiture qui arrive à côté et qui ne te voit pas. Regarde au-delà !"
    },
    {
      id: "PIE3-010", chapitre: "traverser",
      situation: "Il n'y a pas de passage piéton dans ta rue, ni à moins de 50 mètres.",
      q: "Où choisis-tu de traverser ?",
      options: ["Là où je vois loin des deux côtés", "Là où les conducteurs me voient bien", "Juste après un virage", "Entre deux voitures garées"],
      bonnes: [0, 1],
      explication: "Choisis un endroit dégagé : tu vois loin et on te voit bien. Les virages et les voitures garées cachent tout."
    },
    {
      id: "PIE3-011", chapitre: "traverser",
      situation: "En allant au parc, tu vois ce panneau au bord de la route.",
      panneau: "A13b",
      q: "Ce panneau veut dire :",
      options: ["Un passage pour piétons arrive plus loin", "Je peux traverser juste ici"],
      bonnes: [0],
      explication: "Ce triangle prévient les conducteurs qu'un passage piéton arrive bientôt. Toi, tu traverses là où sont les bandes blanches."
    },
    {
      id: "PIE3-012", chapitre: "traverser",
      q: "Pourquoi ne faut-il pas courir pour traverser ?",
      options: ["Je risque de trébucher et de tomber au milieu de la route", "Parce que c'est interdit de transpirer", "Pour ne pas arriver trop tôt"],
      bonnes: [0],
      explication: "En courant, on peut tomber au milieu de la route et on regarde moins bien autour de soi. Marche d'un pas rapide."
    },
    {
      id: "PIE3-013", chapitre: "traverser",
      situation: "Tu es au bord du passage piéton. Un conducteur te fait signe de passer, mais une voiture arrive de l'autre côté.",
      q: "Que fais-tu ?",
      options: ["J'attends que l'autre voiture soit passée ou arrêtée", "Je traverse puisqu'on m'a fait signe"],
      bonnes: [0],
      explication: "Le signe d'un conducteur ne concerne que sa voiture. C'est toi qui vérifies que tout est sûr des deux côtés."
    },
    {
      id: "PIE3-014", chapitre: "traverser",
      situation: "Tu es au bord du passage piéton et tu montres clairement que tu veux traverser.",
      panneau: "PASSAGE_PIETON",
      q: "Que doit faire la voiture qui arrive ?",
      options: ["Me laisser passer", "Klaxonner pour que je recule", "Accélérer"],
      bonnes: [0],
      explication: "Les conducteurs doivent laisser passer un piéton qui montre qu'il veut traverser. Mais vérifie toujours que la voiture s'arrête !"
    },

    // ---------- PIE4 : Les feux et le policier ----------
    {
      id: "PIE4-001", chapitre: "feux-et-policier",
      situation: "Tu arrives au passage piéton. Le bonhomme du feu est rouge. Aucune voiture n'arrive.",
      panneau: "FEU_PIETON_ROUGE",
      q: "Puis-je traverser ?",
      options: ["Oui, puisque la rue est vide", "Non, j'attends le bonhomme vert"],
      bonnes: [1],
      explication: "Bonhomme rouge, on attend, même si la rue paraît vide. Une voiture peut arriver très vite."
    },
    {
      id: "PIE4-002", chapitre: "feux-et-policier",
      situation: "Tu sors de l'école. Le bonhomme du feu piéton devient vert.",
      panneau: "FEU_PIETON_VERT",
      q: "Que fais-tu ?",
      options: ["Je vérifie que les voitures sont arrêtées", "Je regarde à gauche, à droite, encore à gauche", "Je fonce sans regarder"],
      bonnes: [0, 1],
      explication: "Le bonhomme vert te permet de traverser, mais tu vérifies d'abord que les voitures sont bien arrêtées."
    },
    {
      id: "PIE4-003", chapitre: "feux-et-policier",
      situation: "Tu arrives au passage piéton. Le bonhomme vert commence à clignoter. Tu n'as pas encore commencé à traverser.",
      panneau: "FEU_PIETON_VERT",
      q: "Que fais-tu ?",
      options: ["J'attends le prochain bonhomme vert", "Je cours pour passer avant le rouge"],
      bonnes: [0],
      explication: "Le bonhomme qui clignote annonce le rouge. Si tu n'es pas encore parti, attends le prochain vert."
    },
    {
      id: "PIE4-004", chapitre: "feux-et-policier",
      situation: "Tu es au milieu du passage piéton quand le bonhomme passe au rouge.",
      panneau: "FEU_PIETON_ROUGE",
      q: "Que fais-tu ?",
      options: ["Je termine ma traversée d'un pas rapide", "Je fais demi-tour", "Je m'arrête au milieu de la route"],
      bonnes: [0],
      explication: "Tu termines ta traversée d'un pas rapide, sans courir. Faire demi-tour ou s'arrêter au milieu, c'est rester plus longtemps sur la chaussée."
    },
    {
      id: "PIE4-005", chapitre: "feux-et-policier",
      situation: "Le bonhomme est vert. Une voiture qui tourne au carrefour s'approche de ton passage piéton.",
      q: "Que fais-tu ?",
      options: ["J'attends qu'elle s'arrête et que le conducteur me voie", "Je passe, c'est vert pour moi, elle se débrouillera"],
      bonnes: [0],
      explication: "Une voiture qui tourne doit te laisser passer, mais le conducteur peut ne pas te voir. Attends qu'il s'arrête."
    },
    {
      id: "PIE4-006", chapitre: "feux-et-policier",
      situation: "Il n'y a pas de feu piéton. Le feu des voitures que tu vas croiser est comme sur l'image.",
      panneau: "FEU_ROUGE",
      q: "Que fais-tu ?",
      options: ["Je vérifie que les voitures sont arrêtées, puis je traverse", "Je n'ai jamais le droit de traverser"],
      bonnes: [0],
      explication: "Sans feu piéton, tu traverses quand le feu est rouge pour les voitures et qu'elles sont bien arrêtées."
    },
    {
      id: "PIE4-007", chapitre: "feux-et-policier",
      situation: "Il n'y a pas de feu piéton. Le feu des voitures que tu vas croiser est comme sur l'image.",
      panneau: "FEU_VERT",
      q: "Puis-je traverser ?",
      options: ["Oui", "Non, les voitures peuvent passer"],
      bonnes: [1],
      explication: "Le feu vert est pour les voitures : elles passent. Toi, tu attends qu'il soit rouge pour elles."
    },
    {
      id: "PIE4-008", chapitre: "feux-et-policier",
      situation: "Le feu des voitures vient de passer à cette couleur.",
      panneau: "FEU_ORANGE",
      q: "Que vont faire les voitures ?",
      options: ["Elles doivent s'arrêter, sauf si elles sont trop près pour freiner", "Certaines peuvent accélérer pour passer", "Elles s'arrêtent toutes immédiatement"],
      bonnes: [0, 1],
      explication: "À l'orange, les voitures doivent s'arrêter si elles le peuvent, mais certaines passent quand même. Ne commence jamais à traverser à ce moment-là."
    },
    {
      id: "PIE4-009", chapitre: "feux-et-policier",
      situation: "Au carrefour, le feu orange clignote pour les voitures. Il n'y a pas de feu piéton.",
      panneau: "FEU_CLIGNOTANT",
      q: "Ce feu veut dire que les voitures :",
      options: ["Peuvent passer en faisant attention", "Doivent toutes s'arrêter"],
      bonnes: [0],
      explication: "Le feu orange clignotant n'arrête pas les voitures. Tu traverses comme s'il n'y avait pas de feu, avec beaucoup de prudence."
    },
    {
      id: "PIE4-010", chapitre: "feux-et-policier",
      situation: "Un policier règle la circulation au carrefour. Le feu piéton est vert, mais le policier lève le bras.",
      q: "À qui obéis-tu ?",
      options: ["Au policier", "Au feu"],
      bonnes: [0],
      explication: "Les gestes de l'agent de circulation passent avant les feux. Bras levé : tout le monde s'arrête."
    },
    {
      id: "PIE4-011", chapitre: "feux-et-policier",
      situation: "Devant l'école, un adulte en gilet jaune tient un panneau rond « Stop ». Il arrête les voitures.",
      q: "Que fais-tu ?",
      options: ["J'attends son signal pour traverser", "Je traverse dès que je le vois", "Je suis ses consignes"],
      bonnes: [0, 2],
      explication: "Le patrouilleur scolaire t'aide à traverser : attends qu'il te fasse signe et suis ses consignes."
    },
    {
      id: "PIE4-012", chapitre: "feux-et-policier",
      situation: "Au passage piéton, il y a un petit boîtier avec un bouton à côté du feu.",
      q: "À quoi sert ce bouton ?",
      options: ["À demander le bonhomme vert", "À appeler la police", "À allumer l'éclairage de la rue"],
      bonnes: [0],
      explication: "Tu appuies sur le bouton pour demander à traverser, puis tu attends que le bonhomme passe au vert."
    },
    {
      id: "PIE4-013", chapitre: "feux-et-policier",
      situation: "Le bonhomme est vert. Tu regardes à gauche : une voiture arrive vite et ne semble pas ralentir.",
      panneau: "FEU_PIETON_VERT",
      q: "Que fais-tu ?",
      options: ["Je reste sur le trottoir", "J'y vais, j'ai le droit"],
      bonnes: [0],
      explication: "Avoir le droit ne protège pas d'un conducteur qui grille le feu. Reste sur le trottoir tant que tu n'es pas sûr."
    },

    // ---------- PIE5 : Les panneaux utiles au piéton ----------
    {
      id: "PIE5-001", chapitre: "panneaux-pieton",
      q: "Un panneau en forme de triangle bordé de rouge veut dire :",
      options: ["Attention, danger", "C'est interdit", "C'est obligatoire"],
      bonnes: [0],
      explication: "Le triangle annonce un danger. Le rond rouge interdit, le rond bleu oblige."
    },
    {
      id: "PIE5-002", chapitre: "panneaux-pieton",
      q: "Un panneau rond bleu veut dire :",
      options: ["C'est obligatoire", "C'est interdit", "Attention, danger"],
      bonnes: [0],
      explication: "Rond bleu = obligatoire. Par exemple, le chemin obligatoire pour les piétons."
    },
    {
      id: "PIE5-003", chapitre: "panneaux-pieton",
      situation: "Tu vois ce panneau au-dessus de bandes blanches.",
      panneau: "C20a",
      q: "Que veut dire ce panneau ?",
      options: ["Passage pour piétons ici", "Interdit aux piétons", "Aire de jeux"],
      bonnes: [0],
      explication: "Ce panneau carré bleu indique un passage pour piétons, juste à cet endroit."
    },
    {
      id: "PIE5-004", chapitre: "panneaux-pieton",
      situation: "Ce panneau est placé sur la route, à quelques dizaines de mètres de ton école.",
      panneau: "A13a",
      q: "Il demande aux conducteurs :",
      options: ["D'être très prudents à cause des enfants", "De klaxonner", "D'accélérer"],
      bonnes: [0],
      explication: "Ce panneau annonce un endroit fréquenté par les enfants : école, terrain de jeux. Les conducteurs doivent ralentir et être prudents."
    },
    {
      id: "PIE5-005", chapitre: "panneaux-pieton",
      situation: "Ce panneau est placé avant le carrefour.",
      panneau: "A13b",
      q: "À qui s'adresse surtout ce panneau ?",
      options: ["Aux conducteurs", "Aux piétons"],
      bonnes: [0],
      explication: "Ce triangle prévient les conducteurs qu'un passage piéton arrive : ils doivent ralentir et se préparer à s'arrêter."
    },
    {
      id: "PIE5-006", chapitre: "panneaux-pieton",
      situation: "Tu vois ce panneau à l'entrée d'un chemin dans le parc.",
      panneau: "B22b",
      q: "Que veut dire ce panneau ?",
      options: ["Chemin réservé aux piétons", "Les voitures peuvent y rouler", "Les piétons sont interdits"],
      bonnes: [0],
      explication: "Ce rond bleu avec un piéton indique un chemin obligatoire pour les piétons : les voitures n'ont pas le droit d'y aller."
    },
    {
      id: "PIE5-007", chapitre: "panneaux-pieton",
      situation: "Tu entres dans une rue du centre-ville avec ce panneau.",
      panneau: "ZONE_REN",
      q: "Dans cette zone :",
      options: ["Les voitures ne roulent pas à plus de 20 km/h", "Les piétons sont prioritaires", "Les piétons sont interdits", "Les voitures peuvent rouler à 50 km/h"],
      bonnes: [0, 1],
      explication: "En zone de rencontre, les voitures roulent à 20 km/h au plus et les piétons sont prioritaires. Reste quand même attentif !"
    },
    {
      id: "PIE5-008", chapitre: "panneaux-pieton",
      situation: "Tu es dans une zone de rencontre. Tu marches sur la chaussée.",
      panneau: "ZONE_REN",
      q: "Une voiture arrive doucement derrière toi. Que fais-tu ?",
      options: ["Je reste attentif et je me range sur le côté pour la laisser passer", "Je joue au milieu de la rue, je suis prioritaire"],
      bonnes: [0],
      explication: "Prioritaire ne veut pas dire invisible : même à 20 km/h, une voiture peut te faire mal. Reste attentif."
    },
    {
      id: "PIE5-009", chapitre: "panneaux-pieton",
      situation: "Tu entres dans une rue avec ce panneau.",
      panneau: "ZONE30",
      q: "Que veut dire ce panneau ?",
      options: ["Les voitures ne doivent pas rouler à plus de 30 km/h", "Je peux marcher au milieu de la rue", "Les voitures sont interdites"],
      bonnes: [0],
      explication: "En zone 30, les voitures roulent à 30 km/h au plus. Toi, tu restes sur le trottoir et tu traverses comme d'habitude."
    },
    {
      id: "PIE5-010", chapitre: "panneaux-pieton",
      situation: "À l'entrée d'une rue, tu vois ce panneau.",
      panneau: "B1",
      q: "Que veut dire ce panneau ?",
      options: ["Les véhicules n'ont pas le droit d'entrer dans la rue par ce côté", "Les piétons n'ont pas le droit d'y marcher"],
      bonnes: [0],
      explication: "C'est un sens interdit pour les véhicules. Toi, piéton, tu peux marcher sur le trottoir de cette rue."
    },
    {
      id: "PIE5-011", chapitre: "panneaux-pieton",
      situation: "Tu veux traverser une rue en sens interdit. Les voitures ne peuvent venir que d'un côté.",
      panneau: "B1",
      q: "Que fais-tu ?",
      options: ["Je regarde quand même des deux côtés", "Je ne regarde que d'un côté"],
      bonnes: [0],
      explication: "Un vélo peut parfois rouler en sens inverse et un conducteur peut se tromper. Regarde toujours des deux côtés."
    },
    {
      id: "PIE5-012", chapitre: "panneaux-pieton",
      situation: "Une voiture arrive à ce panneau.",
      panneau: "AB4",
      q: "Que doit faire le conducteur ?",
      options: ["S'arrêter complètement", "Laisser passer les autres avant de repartir", "Seulement ralentir"],
      bonnes: [0, 1],
      explication: "Au stop, le conducteur doit s'arrêter complètement, puis laisser passer les autres avant de repartir."
    },
    {
      id: "PIE5-013", chapitre: "panneaux-pieton",
      situation: "Une voiture est arrêtée au stop. Tu veux passer juste devant elle.",
      panneau: "AB4",
      q: "Que fais-tu ?",
      options: ["Je cherche d'abord le regard du conducteur", "Je passe vite, elle est arrêtée"],
      bonnes: [0],
      explication: "Au stop, le conducteur regarde les voitures sur les côtés et peut repartir sans te voir. Croise son regard avant de passer."
    },
    {
      id: "PIE5-014", chapitre: "panneaux-pieton",
      situation: "Une voiture arrive à ce panneau. Personne n'arrive sur la route qu'elle va croiser.",
      panneau: "AB3a",
      q: "Le conducteur doit-il forcément s'arrêter ?",
      options: ["Oui", "Non, il ralentit et passe si personne n'arrive"],
      bonnes: [1],
      explication: "Au cédez-le-passage, le conducteur ralentit et laisse passer les autres, mais il n'est pas obligé de s'arrêter si la voie est libre."
    },
    {
      id: "PIE5-015", chapitre: "panneaux-pieton",
      q: "Dans une aire piétonne, les véhicules autorisés (livraisons, secours) roulent :",
      options: ["Au pas, à la vitesse de quelqu'un qui marche", "À 50 km/h", "À 30 km/h"],
      bonnes: [0],
      explication: "Dans une aire piétonne, les rares véhicules autorisés roulent au pas. Pousse-toi quand même pour les laisser passer."
    },
    {
      id: "PIE5-016", chapitre: "panneaux-pieton",
      q: "Lesquels de ces panneaux parlent des piétons ou des enfants ?",
      options: ["Passage pour piétons", "Endroit fréquenté par les enfants", "Chemin obligatoire pour piétons", "Chaussée glissante"],
      bonnes: [0, 1, 2],
      explication: "Passage piéton, enfants et chemin pour piétons te concernent directement. La chaussée glissante concerne surtout les conducteurs."
    },

    // ---------- PIE6 : Les distances et les vitesses ----------
    {
      id: "PIE6-001", chapitre: "distances-vitesses",
      q: "Une voiture peut-elle s'arrêter d'un coup, sur place ?",
      options: ["Oui, si elle freine fort", "Non, elle avance encore plusieurs mètres"],
      bonnes: [1],
      explication: "Une voiture est lourde et va vite : même en freinant très fort, elle avance encore de nombreux mètres avant de s'arrêter."
    },
    {
      id: "PIE6-002", chapitre: "distances-vitesses",
      situation: "Une voiture roule à 50 km/h sur une route sèche.",
      panneau: "B14:50",
      q: "Il lui faut environ combien de mètres pour s'arrêter ?",
      options: ["Environ 28 mètres", "Environ 3 mètres", "Environ 1 mètre"],
      bonnes: [0],
      explication: "À 50 km/h, il faut environ 28 mètres pour s'arrêter : plus de deux bus mis bout à bout !"
    },
    {
      id: "PIE6-003", chapitre: "distances-vitesses",
      situation: "Près de l'école, les voitures roulent à 30 km/h.",
      panneau: "B14:30",
      q: "Il leur faut environ combien de mètres pour s'arrêter ?",
      options: ["Environ 13 mètres", "Environ 1 mètre", "Environ 100 mètres"],
      bonnes: [0],
      explication: "À 30 km/h, il faut environ 13 mètres pour s'arrêter, à peu près la longueur d'un bus. C'est pour ça qu'on roule moins vite près des écoles."
    },
    {
      id: "PIE6-004", chapitre: "distances-vitesses",
      q: "La distance d'arrêt d'une voiture, c'est :",
      options: ["La distance parcourue pendant que le conducteur réagit", "Plus la distance parcourue pendant le freinage", "La distance entre deux voitures garées"],
      bonnes: [0, 1],
      explication: "Distance d'arrêt = distance parcourue pendant le temps de réaction + distance de freinage."
    },
    {
      id: "PIE6-005", chapitre: "distances-vitesses",
      q: "Pendant le temps où le conducteur réagit (environ une seconde), la voiture :",
      options: ["Continue d'avancer à la même vitesse", "Est déjà arrêtée", "Recule"],
      bonnes: [0],
      explication: "Le temps de voir et d'appuyer sur le frein, la voiture continue d'avancer à la même vitesse."
    },
    {
      id: "PIE6-006", chapitre: "distances-vitesses",
      situation: "Il pleut fort. La route est mouillée.",
      panneau: "A4",
      q: "La distance d'arrêt des voitures est :",
      options: ["Plus longue", "Plus courte", "La même"],
      bonnes: [0],
      explication: "Sur une route mouillée ou glissante, les voitures freinent moins bien : il leur faut plus de place pour s'arrêter."
    },
    {
      id: "PIE6-007", chapitre: "distances-vitesses",
      situation: "Tu veux traverser. Une voiture arrive, assez loin, mais tu ne sais pas si elle va vite.",
      q: "Que fais-tu ?",
      options: ["J'attends qu'elle soit passée", "Je cours pour passer avant elle"],
      bonnes: [0],
      explication: "En cas de doute, on n'y va pas. Quelques secondes d'attente, ce n'est rien à côté du danger."
    },
    {
      id: "PIE6-008", chapitre: "distances-vitesses",
      situation: "Une voiture ralentit en arrivant près du passage piéton.",
      q: "Une voiture qui ralentit, c'est une voiture qui s'arrête :",
      options: ["Oui", "Non, pas forcément"],
      bonnes: [1],
      explication: "Elle peut ralentir pour tourner ou pour un ralentisseur. Attends qu'elle soit complètement arrêtée."
    },
    {
      id: "PIE6-009", chapitre: "distances-vitesses",
      situation: "Un conducteur roulant à 50 km/h te voit au dernier moment, quand tu sors sur la chaussée à quelques mètres de lui.",
      q: "Peut-il s'arrêter à temps ?",
      options: ["Oui, s'il freine fort", "Non, il est beaucoup trop près"],
      bonnes: [1],
      explication: "À 50 km/h, il faut environ 28 mètres pour s'arrêter. À quelques mètres, même le meilleur conducteur ne peut rien faire."
    },
    {
      id: "PIE6-010", chapitre: "distances-vitesses",
      q: "Qu'est-ce qui est difficile à voir de loin et arrive vite ?",
      options: ["Un vélo", "Une moto", "Une trottinette électrique", "Un camion de pompiers avec sa sirène"],
      bonnes: [0, 1, 2],
      explication: "Vélos, motos et trottinettes sont petits : on les croit loin alors qu'ils arrivent vite. La sirène des pompiers, elle, s'entend de loin."
    },
    {
      id: "PIE6-011", chapitre: "distances-vitesses",
      situation: "Une voiture s'est arrêtée devant le passage piéton.",
      q: "Comment sais-tu qu'elle est vraiment arrêtée ?",
      options: ["Ses roues ne tournent plus", "Le conducteur me regarde ou me fait signe", "Elle a ses clignotants allumés"],
      bonnes: [0, 1],
      explication: "Roues immobiles et regard du conducteur : tu peux traverser, en vérifiant l'autre côté. Un clignotant veut dire qu'elle va tourner."
    },
    {
      id: "PIE6-012", chapitre: "distances-vitesses",
      q: "Plus une voiture roule vite, plus il lui faut de place pour s'arrêter :",
      options: ["Vrai", "Faux"],
      bonnes: [0],
      explication: "Vrai : à 50 km/h, il faut plus de deux fois plus de place qu'à 30 km/h."
    },
    {
      id: "PIE6-013", chapitre: "distances-vitesses",
      situation: "En ville, tu vois ce panneau.",
      panneau: "ZONE30",
      q: "Pourquoi rouler à 30 km/h près des écoles ?",
      options: ["Pour que les voitures puissent s'arrêter plus vite", "Pour faire moins de mal en cas de choc", "Pour consommer plus d'essence"],
      bonnes: [0, 1],
      explication: "À 30 km/h, une voiture s'arrête sur une distance bien plus courte, et un choc est beaucoup moins grave."
    },

    // ---------- PIE7 : Les situations dangereuses ----------
    {
      id: "PIE7-001", chapitre: "situations-dangereuses",
      situation: "Ton copain t'attend de l'autre côté de la rue. Des voitures sont garées tout le long du trottoir.",
      q: "Puis-je traverser entre deux voitures garées ?",
      options: ["Oui, si je fais vite", "Non, je vais jusqu'au passage piéton"],
      bonnes: [1],
      explication: "Entre deux voitures garées, tu es caché et tu vois mal. Va jusqu'au passage piéton ou à un endroit dégagé."
    },
    {
      id: "PIE7-002", chapitre: "situations-dangereuses",
      q: "Pourquoi est-il dangereux de passer entre deux voitures garées ?",
      options: ["Les conducteurs ne me voient pas", "Je ne vois pas les voitures qui arrivent", "Une voiture garée peut démarrer ou reculer", "Parce que je risque de rayer les voitures"],
      bonnes: [0, 1, 2],
      explication: "Tu es caché, tu vois mal, et une voiture garée peut bouger. C'est une des causes d'accident les plus fréquentes chez les enfants."
    },
    {
      id: "PIE7-003", chapitre: "situations-dangereuses",
      situation: "Tu joues au ballon devant chez toi. Le ballon s'échappe et roule sur la route.",
      q: "Que fais-tu ?",
      options: ["Je m'arrête au bord du trottoir", "Je cours le chercher tout de suite", "Je le récupère plus tard, quand il n'y a plus de voiture, ou je demande à un adulte"],
      bonnes: [0, 2],
      explication: "Quand on court après un ballon, on ne voit plus les voitures. Arrête-toi : un ballon, ça se remplace."
    },
    {
      id: "PIE7-004", chapitre: "situations-dangereuses",
      situation: "Tu descends du car scolaire. Ta maison est de l'autre côté de la route.",
      q: "Quand traverses-tu ?",
      options: ["Quand le car est reparti", "Tout de suite, en passant devant le car", "Tout de suite, en passant derrière le car"],
      bonnes: [0],
      explication: "Le car cache les voitures et les conducteurs ne te voient pas. On attend qu'il soit reparti pour traverser."
    },
    {
      id: "PIE7-005", chapitre: "situations-dangereuses",
      situation: "Le bus arrive à ton arrêt.",
      q: "Quand te lèves-tu pour descendre ?",
      options: ["Quand le bus est complètement arrêté", "Avant qu'il s'arrête, pour gagner du temps"],
      bonnes: [0],
      explication: "Si le bus freine, tu peux tomber. Attends qu'il soit arrêté, puis descends calmement en tenant la rampe."
    },
    {
      id: "PIE7-006", chapitre: "situations-dangereuses",
      situation: "Tu arrives près d'un rond-point. Tu dois aller de l'autre côté.",
      panneau: "AB25",
      q: "Où traverses-tu ?",
      options: ["Sur les passages piétons, un peu avant l'entrée du rond-point", "En coupant par le milieu du rond-point"],
      bonnes: [0],
      explication: "On ne traverse jamais par le milieu d'un giratoire. Utilise les passages piétons placés avant les entrées et sorties."
    },
    {
      id: "PIE7-007", chapitre: "situations-dangereuses",
      situation: "Tu traverses près d'un rond-point. Une voiture sort du rond-point.",
      panneau: "AB25",
      q: "Que fais-tu ?",
      options: ["Je la surveille : le conducteur regarde peut-être ailleurs", "Je ne regarde pas, elle doit me laisser passer"],
      bonnes: [0],
      explication: "En sortant du giratoire, les conducteurs regardent souvent les autres voitures. Surveille-les bien."
    },
    {
      id: "PIE7-008", chapitre: "situations-dangereuses",
      situation: "Tu es au parking du supermarché avec ton papa.",
      panneau: "C1a",
      q: "Que fais-tu ?",
      options: ["Je lui donne la main ou je reste tout près", "Je surveille les voitures qui ont leurs feux de recul allumés", "Je cours entre les voitures jusqu'au magasin"],
      bonnes: [0, 1],
      explication: "Dans un parking, les voitures bougent dans tous les sens et les conducteurs cherchent une place. Reste près de l'adulte et surveille les feux de recul."
    },
    {
      id: "PIE7-009", chapitre: "situations-dangereuses",
      situation: "Au parking, tu veux t'asseoir dans le chariot pendant que ton grand frère court en le poussant.",
      q: "Est-ce une bonne idée ?",
      options: ["Oui", "Non"],
      bonnes: [1],
      explication: "Non : dans un parking, on ne joue pas. Le chariot peut se renverser ou partir vers une voiture."
    },
    {
      id: "PIE7-010", chapitre: "situations-dangereuses",
      situation: "Le trottoir est fermé à cause de travaux. Des barrières indiquent un passage pour les piétons.",
      panneau: "A14",
      q: "Que fais-tu ?",
      options: ["Je suis le passage prévu pour les piétons", "J'entre dans le chantier pour regarder les engins", "Je marche au milieu de la chaussée"],
      bonnes: [0],
      explication: "Suis le passage prévu pour toi. Les conducteurs des engins de chantier voient très mal autour d'eux."
    },
    {
      id: "PIE7-011", chapitre: "situations-dangereuses",
      situation: "Sur le trottoir, tu entends une sonnette de vélo derrière toi.",
      q: "Que fais-tu ?",
      options: ["Je regarde avant de me pousser", "Je fais un grand saut sur le côté sans regarder"],
      bonnes: [0],
      explication: "Marche de façon prévisible. Un écart brusque peut te faire percuter par le vélo ou te pousser vers la chaussée."
    },
    {
      id: "PIE7-012", chapitre: "situations-dangereuses",
      q: "Qui a le droit de rouler à vélo sur le trottoir ?",
      options: ["Les enfants de moins de 8 ans, doucement", "Tous les adultes", "Les trottinettes électriques"],
      bonnes: [0],
      explication: "Seuls les enfants de moins de 8 ans peuvent rouler à vélo sur le trottoir, au pas. Les trottinettes électriques n'y ont pas droit."
    },
    {
      id: "PIE7-013", chapitre: "situations-dangereuses",
      situation: "Tu vas sortir de l'immeuble directement sur le trottoir.",
      q: "Que fais-tu ?",
      options: ["Je ralentis et je regarde : un vélo ou une trottinette peut arriver", "Je sors en courant"],
      bonnes: [0],
      explication: "Trottinettes et vélos électriques arrivent vite et sans bruit. Ralentis toujours avant de sortir."
    },
    {
      id: "PIE7-014", chapitre: "situations-dangereuses",
      situation: "Tu traverses à un carrefour, sur le passage piéton.",
      q: "Quelles voitures dois-tu surveiller ?",
      options: ["Celles qui vont tout droit", "Celles qui tournent vers mon passage", "Celles qui sont garées et vont démarrer"],
      bonnes: [0, 1, 2],
      explication: "Au carrefour, les voitures arrivent de partout. Celles qui tournent arrivent souvent sur ton passage sans prévenir."
    },

    // ---------- PIE8 : En groupe et avec les autres usagers ----------
    {
      id: "PIE8-001", chapitre: "groupe-et-usagers",
      situation: "Ta classe va à la piscine à pied.",
      q: "Comment marchez-vous ?",
      options: ["En rang, deux par deux", "En suivant les consignes de l'enseignant", "Chacun à son rythme, en se doublant"],
      bonnes: [0, 1],
      explication: "En rang et en écoutant les consignes : c'est l'adulte qui décide quand le groupe traverse."
    },
    {
      id: "PIE8-002", chapitre: "groupe-et-usagers",
      situation: "Ta classe traverse la rue sur un passage piéton.",
      q: "Que fais-tu ?",
      options: ["Je traverse avec tout le groupe, sans courir", "Je m'arrête au milieu pour refaire mon lacet", "Je reste attentif, même en rang"],
      bonnes: [0, 2],
      explication: "On traverse tous ensemble, sans s'arrêter au milieu, et en restant attentif : ne te contente pas de suivre les autres."
    },
    {
      id: "PIE8-003", chapitre: "groupe-et-usagers",
      q: "Quand une classe se déplace dans la rue, où se placent les adultes ?",
      options: ["Un devant et un derrière le groupe", "Tous devant", "Tous derrière"],
      bonnes: [0],
      explication: "Un adulte devant et un autre derrière : ainsi, tout le groupe est encadré et surveillé."
    },
    {
      id: "PIE8-004", chapitre: "groupe-et-usagers",
      situation: "Tu ramènes ton petit frère de 4 ans de l'école avec ta maman.",
      q: "Que fais-tu ?",
      options: ["Je lui tiens fermement la main", "Il marche du côté des maisons", "Il marche du côté de la chaussée"],
      bonnes: [0, 1],
      explication: "Un petit peut lâcher la main et partir en courant. Tiens-le bien, et place-le côté maisons."
    },
    {
      id: "PIE8-005", chapitre: "groupe-et-usagers",
      situation: "Ta petite sœur te regarde traverser au bonhomme rouge parce que la rue est vide.",
      q: "Quel est le problème ?",
      options: ["Elle risque de faire pareil un jour, peut-être seule", "Il n'y a aucun problème"],
      bonnes: [0],
      explication: "Les petits copient les grands. Montre-lui le bon exemple : bonhomme rouge, on attend."
    },
    {
      id: "PIE8-006", chapitre: "groupe-et-usagers",
      situation: "Tu promènes le chien de la famille dans la rue.",
      q: "Comment le tiens-tu ?",
      options: ["En laisse courte, du côté des maisons", "En laisse très longue, pour qu'il soit libre", "Sans laisse, il connaît le chemin"],
      bonnes: [0],
      explication: "Un chien peut tirer d'un coup en voyant un chat. En laisse courte et côté maisons, il ne peut pas t'entraîner sur la chaussée."
    },
    {
      id: "PIE8-007", chapitre: "groupe-et-usagers",
      situation: "Le chien de ton voisin est très gros et très fort. Il te propose de le promener seul.",
      q: "Est-ce prudent ?",
      options: ["Non, il pourrait m'entraîner sur la route", "Oui, sans problème"],
      bonnes: [0],
      explication: "Ne promène pas seul un chien trop fort pour toi : s'il tire, tu ne pourras pas le retenir."
    },
    {
      id: "PIE8-008", chapitre: "groupe-et-usagers",
      situation: "Tu vas chez ton copain en trottinette sans moteur.",
      q: "Où roules-tu ?",
      options: ["Sur le trottoir, doucement", "Sur la chaussée, avec les voitures"],
      bonnes: [0],
      explication: "Avec une trottinette sans moteur, tu es un piéton : tu restes sur le trottoir, à la vitesse de la marche."
    },
    {
      id: "PIE8-009", chapitre: "groupe-et-usagers",
      situation: "En trottinette, tu arrives à un passage piéton.",
      panneau: "PASSAGE_PIETON",
      q: "Comment traverses-tu ?",
      options: ["Je descends et je traverse à pied en tenant ma trottinette", "Je traverse en roulant à toute vitesse"],
      bonnes: [0],
      explication: "On descend de la trottinette pour traverser à pied : tu vas moins vite et les conducteurs comprennent mieux ce que tu fais."
    },
    {
      id: "PIE8-010", chapitre: "groupe-et-usagers",
      situation: "Tu pars faire du roller avec ta grande sœur.",
      q: "Que mets-tu pour te protéger ?",
      options: ["Un casque", "Des genouillères et des coudières", "Des protège-poignets", "Des écouteurs"],
      bonnes: [0, 1, 2],
      explication: "Casque, genouillères, coudières et protège-poignets te protègent en cas de chute. Les écouteurs, eux, t'empêchent d'entendre les dangers."
    },
    {
      id: "PIE8-011", chapitre: "groupe-et-usagers",
      q: "À vélo, le casque est obligatoire pour les enfants de moins de :",
      options: ["12 ans", "6 ans", "18 ans"],
      bonnes: [0],
      explication: "Le casque est obligatoire à vélo pour les enfants de moins de 12 ans, qu'ils pédalent ou qu'ils soient passagers."
    },
    {
      id: "PIE8-012", chapitre: "groupe-et-usagers",
      situation: "En rollers, ton copain veut s'accrocher à l'arrière d'un vélo pour aller plus vite.",
      q: "Est-ce une bonne idée ?",
      options: ["Non, c'est très dangereux", "Oui, c'est amusant"],
      bonnes: [0],
      explication: "On ne s'accroche jamais à un vélo, une voiture ou un bus : au moindre freinage, c'est la chute."
    },
    {
      id: "PIE8-013", chapitre: "groupe-et-usagers",
      situation: "Pour aller au parc, tu dois traverser une piste cyclable.",
      q: "Que fais-tu ?",
      options: ["Je regarde avant de traverser, comme pour une route", "Je traverse sans regarder, ce ne sont que des vélos"],
      bonnes: [0],
      explication: "Un vélo est un véhicule : il arrive vite et sans bruit. Regarde avant de traverser une piste cyclable."
    },
    {
      id: "PIE8-014", chapitre: "groupe-et-usagers",
      situation: "Tu te promènes avec ta famille. Il y a une belle piste cyclable bien lisse à côté du trottoir.",
      q: "Peux-tu marcher sur la piste cyclable ?",
      options: ["Non, elle est faite pour les vélos", "Oui, elle est plus confortable"],
      bonnes: [0],
      explication: "La piste cyclable est réservée aux vélos. Toi, tu restes sur le trottoir."
    },
    {
      id: "PIE8-015", chapitre: "groupe-et-usagers",
      situation: "Avec ta classe, vous arrivez devant ce panneau, au début d'un chemin.",
      panneau: "B22b",
      q: "Pouvez-vous emprunter ce chemin à pied ?",
      options: ["Oui, il est réservé aux piétons", "Non, il est réservé aux voitures"],
      bonnes: [0],
      explication: "Ce panneau bleu indique un chemin obligatoire pour les piétons : c'est le chemin fait pour vous."
    },

    // ---------- PIE9 : En cas d'accident ou de problème ----------
    {
      id: "PIE9-001", chapitre: "accident-probleme",
      situation: "Tu vois un accident entre une voiture et un vélo, au milieu de la rue.",
      q: "Que fais-tu d'abord ?",
      options: ["Je reste en sécurité sur le trottoir", "Je préviens un adulte", "Je cours sur la chaussée pour aider"],
      bonnes: [0, 1],
      explication: "D'abord, reste en sécurité : d'autres voitures peuvent arriver. Puis préviens tout de suite un adulte."
    },
    {
      id: "PIE9-002", chapitre: "accident-probleme",
      q: "Quel numéro appelles-tu pour joindre le SAMU ?",
      options: ["15", "17", "18"],
      bonnes: [0],
      explication: "Le 15, c'est le SAMU, pour quelqu'un de malade ou blessé."
    },
    {
      id: "PIE9-003", chapitre: "accident-probleme",
      q: "Quel numéro appelles-tu pour joindre les pompiers ?",
      options: ["18", "15", "17"],
      bonnes: [0],
      explication: "Le 18, ce sont les pompiers : incendie, accident, personne blessée."
    },
    {
      id: "PIE9-004", chapitre: "accident-probleme",
      q: "Quel numéro appelles-tu pour joindre la police ou la gendarmerie ?",
      options: ["17", "18", "15"],
      bonnes: [0],
      explication: "Le 17, c'est la police ou la gendarmerie, quand tu es en danger ou que quelqu'un te fait peur."
    },
    {
      id: "PIE9-005", chapitre: "accident-probleme",
      q: "Le 112, c'est :",
      options: ["Le numéro d'urgence européen", "Un numéro qui marche en France et dans toute l'Europe", "Le numéro de la mairie"],
      bonnes: [0, 1],
      explication: "Le 112 est le numéro d'urgence européen : il fonctionne en France et dans tous les pays d'Europe."
    },
    {
      id: "PIE9-006", chapitre: "accident-probleme",
      situation: "Un enfant est tombé de son vélo sur le trottoir. Il a mal et ne se relève pas.",
      q: "Que fais-tu ?",
      options: ["Je ne le déplace pas", "Je préviens un adulte", "Je le relève de force"],
      bonnes: [0, 1],
      explication: "On ne déplace pas une personne blessée : on pourrait lui faire plus mal. Préviens vite un adulte."
    },
    {
      id: "PIE9-007", chapitre: "accident-probleme",
      q: "Au téléphone avec les secours, que dis-tu ?",
      options: ["Qui je suis", "Où je suis", "Ce qui s'est passé", "Ce que j'ai mangé ce midi"],
      bonnes: [0, 1, 2],
      explication: "Qui, où, quoi : ce sont les trois choses que les secours ont besoin de savoir pour venir vite."
    },
    {
      id: "PIE9-008", chapitre: "accident-probleme",
      situation: "Tu as donné l'alerte au téléphone et expliqué ce qui s'est passé.",
      q: "Quand raccroches-tu ?",
      options: ["Quand la personne des secours me dit que je peux raccrocher", "Tout de suite après avoir parlé"],
      bonnes: [0],
      explication: "On ne raccroche pas le premier : les secours ont peut-être encore des questions ou des conseils à te donner."
    },
    {
      id: "PIE9-009", chapitre: "accident-probleme",
      q: "Appeler le 18 pour faire une blague, c'est :",
      options: ["Interdit", "Dangereux pour les personnes qui ont vraiment besoin d'aide", "Sans conséquence"],
      bonnes: [0, 1],
      explication: "C'est interdit, et pendant ce temps, quelqu'un qui en a vraiment besoin ne peut pas être aidé."
    },
    {
      id: "PIE9-010", chapitre: "accident-probleme",
      situation: "Tu t'es perdu en ville après avoir raté ton bus.",
      q: "Que fais-tu ?",
      options: ["J'entre dans un magasin ou une pharmacie pour demander de l'aide", "Je reste là où il y a du monde", "Je monte dans la voiture d'un inconnu qui me propose de me ramener"],
      bonnes: [0, 1],
      explication: "Demande de l'aide à un adulte qui travaille dans un magasin, et reste là où il y a du monde. Ne monte jamais avec un inconnu."
    },
    {
      id: "PIE9-011", chapitre: "accident-probleme",
      q: "Qu'est-il utile de connaître par cœur ?",
      options: ["Mon adresse et le numéro de téléphone d'un de mes parents", "La plaque d'immatriculation de la voiture du voisin", "Le menu de la cantine"],
      bonnes: [0],
      explication: "Ton adresse et le numéro d'un parent t'aident si tu es perdu ou si tu dois prévenir quelqu'un."
    },
    {
      id: "PIE9-012", chapitre: "accident-probleme",
      q: "Les numéros d'urgence sont :",
      options: ["Gratuits", "Payants"],
      bonnes: [0],
      explication: "Ils sont gratuits et on peut les appeler depuis n'importe quel téléphone."
    }
  );
})();
