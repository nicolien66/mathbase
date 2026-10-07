/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — Permis B (ETG) — fichier 1 : thèmes L, C, R, U, D
   Cours et banque de questions du code de la route.
   ═══════════════════════════════════════════════════════════════════════════ */
window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème L — chapitres 1 à 3 ───────────── */
  P.chapitres.push(
    {
      id: "signalisation-verticale",
      theme: "L",
      titre: "La signalisation verticale : les familles de panneaux",
      duree: 25,
      objectifs: [
        "Reconnaître une famille de panneaux à sa forme et à sa couleur",
        "Distinguer danger, intersection, interdiction, obligation et indication",
        "Savoir où commence et où s'arrête la validité d'un panneau",
        "Comprendre la valeur d'un panonceau et d'une signalisation temporaire",
        "Hiérarchiser les ordres : agent, feux, panneaux temporaires, panneaux permanents, marquages"
      ],
      sections: [
        {
          titre: "Lire un panneau : forme, couleur, symbole",
          contenu: `<p>La signalisation verticale regroupe tous les panneaux plantés au bord de la chaussée ou suspendus au-dessus d'elle. Avant même de lire le symbole, la <strong>forme</strong> et la <strong>couleur</strong> vous disent quel type de message vous recevez. C'est ce réflexe que l'examen cherche à vérifier : en une fraction de seconde, vous devez savoir s'il s'agit d'un danger, d'une interdiction ou d'une simple information.</p>
<table>
<thead><tr><th>Forme et couleur</th><th>Famille</th><th>Ce qu'elle exprime</th></tr></thead>
<tbody>
<tr><td>Triangle pointe en haut, bord rouge</td><td>Danger</td><td>Un danger existe plus loin : ralentir, redoubler d'attention</td></tr>
<tr><td>Triangle, losange, octogone</td><td>Intersection et priorité</td><td>Le régime de priorité à la prochaine intersection ou sur la route suivie</td></tr>
<tr><td>Rond à bord rouge</td><td>Interdiction</td><td>Ce que vous ne devez pas faire</td></tr>
<tr><td>Rond blanc ou gris barré de noir</td><td>Fin d'interdiction</td><td>L'interdiction cesse</td></tr>
<tr><td>Rond bleu</td><td>Obligation</td><td>Ce que vous devez faire</td></tr>
<tr><td>Carré ou rectangle bleu</td><td>Indication</td><td>Une information utile (sens unique, stationnement, passage piéton…)</td></tr>
<tr><td>Rectangle blanc, vert ou bleu avec flèches</td><td>Direction</td><td>Les destinations et itinéraires</td></tr>
<tr><td>Fond jaune ou orange</td><td>Temporaire</td><td>Chantier, déviation, danger provisoire</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> rouge = danger ou interdiction, bleu = obligation ou indication, jaune = temporaire. La forme ronde exprime toujours un ordre (interdire ou obliger).</div>`
        },
        {
          titre: "Les panneaux de danger",
          contenu: `<p>Les panneaux de danger sont triangulaires, pointe en haut, avec un bord rouge. Ils annoncent un danger que vous ne voyez pas encore : un virage <span class="panneau" data-code="A1a"></span>, une chaussée glissante <span class="panneau" data-code="A4"></span>, une chaussée rétrécie <span class="panneau" data-code="A3"></span>, un endroit fréquenté par les enfants <span class="panneau" data-code="A13a"></span>, un passage pour piétons <span class="panneau" data-code="A13b"></span>, une descente dangereuse <span class="panneau" data-code="A20"></span>, ou un danger non précisé <span class="panneau" data-code="A14"></span> (un panonceau en précise souvent la nature).</p>
<p>Ces panneaux sont placés <strong>hors agglomération à environ 150 mètres</strong> du danger et <strong>en agglomération à environ 50 mètres</strong>. Un panonceau peut indiquer une distance différente ou l'étendue de la zone dangereuse (par exemple « sur 3 km »).</p>
<p>Un panneau de danger n'impose pas de vitesse précise : il vous demande d'<strong>adapter votre allure</strong> et de vous préparer à réagir. Ralentir avant le danger, et non pas au moment où on le découvre, est la bonne attitude.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le triangle A13b (passage pour piétons) annonce un passage à venir ; le carré bleu C20a <span class="panneau" data-code="C20a"></span> signale l'emplacement même du passage. Le premier est un panneau de danger, le second un panneau d'indication.</div>`
        },
        {
          titre: "Les panneaux d'intersection et de priorité",
          contenu: `<p>Cette famille règle la priorité aux intersections. Elle est la plus importante à connaître, car une erreur de priorité provoque des collisions graves.</p>
<ul>
<li><span class="panneau" data-code="AB1"></span> <strong>AB1</strong> : intersection où vous devez céder le passage aux véhicules venant de droite (priorité à droite annoncée).</li>
<li><span class="panneau" data-code="AB2"></span> <strong>AB2</strong> : à la prochaine intersection, vous êtes prioritaire sur les routes qui débouchent.</li>
<li><span class="panneau" data-code="AB3a"></span> <strong>AB3a</strong> : cédez le passage. Vous ralentissez, vous vous arrêtez si nécessaire.</li>
<li><span class="panneau" data-code="AB4"></span> <strong>AB4</strong> : stop. Arrêt obligatoire, marqué à la ligne d'arrêt, même si personne n'arrive.</li>
<li><span class="panneau" data-code="AB6"></span> <strong>AB6</strong> : route à caractère prioritaire. Vous êtes prioritaire à toutes les intersections jusqu'au panneau de fin <span class="panneau" data-code="AB7"></span> <strong>AB7</strong>.</li>
<li><span class="panneau" data-code="AB25"></span> <strong>AB25</strong> : carrefour à sens giratoire. Associé à un cédez-le-passage, il signifie que les usagers déjà engagés dans l'anneau sont prioritaires.</li>
</ul>
<p>Le panneau AB3a est placé à l'intersection même ; il peut être annoncé à 150 m par un panneau identique muni d'un panonceau de distance. Le stop est annoncé de la même manière, par un cédez-le-passage avec panonceau « STOP à 150 m ».</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le losange jaune (AB6) vaut pour toutes les intersections de la route ; le triangle AB2 ne vaut que pour la prochaine intersection.</div>`
        },
        {
          titre: "Les panneaux d'interdiction et de fin d'interdiction",
          contenu: `<p>Ronds à bord rouge, ils interdisent : l'accès <span class="panneau" data-code="B0"></span> (circulation interdite à tout véhicule dans les deux sens), le sens interdit <span class="panneau" data-code="B1"></span>, le changement de direction <span class="panneau" data-code="B2a"></span> <span class="panneau" data-code="B2b"></span>, le demi-tour <span class="panneau" data-code="B2c"></span>, le dépassement <span class="panneau" data-code="B3"></span>, le stationnement <span class="panneau" data-code="B6a1"></span>, l'arrêt et le stationnement <span class="panneau" data-code="B6d"></span>, ou une vitesse supérieure à une valeur <span class="panneau" data-code="B14:70"></span>.</p>
<p>Une interdiction s'applique <strong>à partir du panneau</strong>. Les interdictions de tourner (B2a, B2b) valent à la <strong>prochaine intersection</strong> seulement. Les autres interdictions de circulation (dépassement, vitesse) valent jusqu'au panneau de fin ou, à défaut, jusqu'à la <strong>prochaine intersection</strong> : en franchissant une intersection, l'interdiction cesse si elle n'est pas répétée.</p>
<p>Les fins d'interdiction sont rondes, blanches, barrées de noir : fin de limitation <span class="panneau" data-code="B33:70"></span>, fin d'interdiction de dépasser <span class="panneau" data-code="B34"></span>, fin de toutes les interdictions précédemment signalées <span class="panneau" data-code="B31"></span>.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> après un panneau B33 (fin de limitation à 70), vous ne roulez pas « à volonté » : la vitesse redevient celle de la réglementation générale (80 km/h sur une route bidirectionnelle hors agglomération, par exemple).</div>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une limitation à 70 km/h est placée après un village. Vous tournez à droite à la première intersection. La limitation ne vous concerne plus sur la nouvelle route, sauf si elle y est rappelée.</div>`
        },
        {
          titre: "Les panneaux d'obligation",
          contenu: `<p>Ronds et bleus, ils imposent un comportement. Obligation de tourner à droite avant le panneau <span class="panneau" data-code="B21_1"></span>, à gauche avant le panneau <span class="panneau" data-code="B21_2"></span>, contournement par la droite <span class="panneau" data-code="B21a1"></span>, direction tout droit <span class="panneau" data-code="B21c1"></span>, chemin réservé aux piétons <span class="panneau" data-code="B22b"></span>, vitesse minimale <span class="panneau" data-code="B25:30"></span>.</p>
<p>Le panneau de vitesse minimale (chiffre blanc sur fond bleu) s'adresse aux véhicules qui empruntent la voie : on ne doit pas rouler plus lentement que la valeur indiquée, sauf si les conditions de circulation l'imposent (bouchon, brouillard).</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> ne confondez pas le rond rouge à chiffre noir (vitesse maximale, interdiction) et le rond bleu à chiffre blanc (vitesse minimale, obligation).</div>`
        },
        {
          titre: "Indication, direction, signalisation temporaire",
          contenu: `<p>Les panneaux d'<strong>indication</strong> sont carrés ou rectangulaires, le plus souvent bleus : parking <span class="panneau" data-code="C1a"></span>, sens unique <span class="panneau" data-code="C12"></span>, passage pour piétons <span class="panneau" data-code="C20a"></span>, ralentisseur <span class="panneau" data-code="C27"></span>, conditions particulières par voie <span class="panneau" data-code="C24a"></span>, route pour automobiles <span class="panneau" data-code="C107"></span>, début et fin d'autoroute <span class="panneau" data-code="C207"></span> <span class="panneau" data-code="C208"></span>. Ils n'imposent rien par eux-mêmes, mais ils annoncent souvent un régime particulier (par exemple les règles propres à l'autoroute).</p>
<p>Les panneaux d'<strong>entrée et de sortie d'agglomération</strong> <span class="panneau" data-code="EB10:Ville"></span> <span class="panneau" data-code="EB20:Ville"></span> ont une valeur réglementaire : ils marquent le début et la fin des règles de l'agglomération, dont la limitation à 50 km/h.</p>
<p>Les panneaux de <strong>direction</strong> utilisent un code couleur : fond bleu pour les autoroutes, fond vert pour les grands itinéraires, fond blanc pour les autres destinations.</p>
<p>La <strong>signalisation temporaire</strong> (fond jaune) prévient d'un chantier, d'une déviation, d'un accident. Elle <strong>l'emporte sur la signalisation permanente</strong> : si un panneau jaune et un panneau ordinaire se contredisent, vous obéissez au panneau jaune.</p>
<div class="encart" data-type="retenir"><strong>À retenir — ordre de priorité des signaux :</strong> 1) l'agent qui règle la circulation, 2) les feux, 3) la signalisation temporaire, 4) les panneaux permanents, 5) les marquages au sol, puis les règles générales (priorité à droite).</div>`
        }
      ],
      points_cles: [
        "Triangle à bord rouge : danger, placé à 150 m hors agglomération et 50 m en agglomération",
        "Rond à bord rouge : interdiction ; rond bleu : obligation",
        "Une interdiction de tourner vaut à la prochaine intersection seulement",
        "Une limitation de vitesse cesse au panneau de fin ou à la prochaine intersection si elle n'est pas répétée",
        "Après une fin de limitation, la vitesse générale s'applique de nouveau",
        "Le panneau d'entrée d'agglomération impose les règles de l'agglomération (50 km/h)",
        "La signalisation temporaire jaune prime sur la signalisation permanente",
        "L'agent de circulation prime sur tous les autres signaux"
      ],
      panneaux: ["A1a", "A1b", "A3", "A4", "A13a", "A13b", "A14", "A20", "AB1", "AB2", "AB3a", "AB4", "AB6", "AB7", "AB25", "B0", "B1", "B2a", "B2b", "B2c", "B3", "B6a1", "B6d", "B14:70", "B31", "B33:70", "B34", "B21_1", "B21_2", "B21a1", "B21c1", "B22b", "B25:30", "C1a", "C12", "C20a", "C24a", "C27", "C107", "C207", "C208", "EB10:Ville", "EB20:Ville"]
    },
    {
      id: "feux-marquages",
      theme: "L",
      titre: "Signalisation lumineuse et marquages au sol",
      duree: 20,
      objectifs: [
        "Savoir comment réagir à chaque couleur de feu tricolore",
        "Comprendre les feux clignotants et les flèches lumineuses",
        "Identifier les lignes longitudinales et leur règle de franchissement",
        "Reconnaître les lignes transversales d'arrêt et de cédez-le-passage",
        "Connaître la signification des marquages de couleur et des flèches de rabattement"
      ],
      sections: [
        {
          titre: "Le feu tricolore",
          contenu: `<p>Le feu tricolore règle les intersections chargées. Il se lit de haut en bas : rouge, jaune (appelé orange à l'examen), vert.</p>
<ul>
<li><span class="panneau" data-code="FEU_VERT"></span> <strong>Vert</strong> : le passage est autorisé, à condition que l'intersection soit dégagée. Vous ne vous engagez pas si vous risquez d'être bloqué au milieu du carrefour et de gêner la circulation transversale.</li>
<li><span class="panneau" data-code="FEU_ORANGE"></span> <strong>Orange fixe</strong> : arrêt obligatoire, sauf si l'arrêt ne peut plus se faire dans des conditions de sécurité suffisantes (vous êtes trop près du feu, un véhicule vous suit de très près).</li>
<li><span class="panneau" data-code="FEU_ROUGE"></span> <strong>Rouge</strong> : arrêt absolu, à la ligne d'arrêt ou, à défaut, avant le feu.</li>
</ul>
<p>Griller un feu rouge est puni d'une amende forfaitaire de 135 € et d'un retrait de <strong>4 points</strong>, avec une suspension possible du permis.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> l'orange ne veut pas dire « accélérer ». La règle est de s'arrêter ; on ne passe que si un arrêt brusque serait dangereux.</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> au vert, on vérifie quand même que le carrefour est libre : un piéton attardé ou un véhicule bloqué peut encore s'y trouver.</div>`
        },
        {
          titre: "Les feux clignotants et les flèches",
          contenu: `<p>Le <strong>feu jaune clignotant</strong> <span class="panneau" data-code="FEU_CLIGNOTANT"></span> autorise le passage avec une prudence particulière. Il est utilisé quand les feux sont en panne ou hors service la nuit, ou pour signaler un danger. Il ne donne aucune priorité : ce sont les panneaux présents qui s'appliquent ou, à défaut, la priorité à droite.</p>
<p>Le <strong>feu rouge clignotant</strong> (deux feux rouges alternés) se rencontre aux passages à niveau, aux sorties de pompiers, aux ponts mobiles : il impose l'arrêt absolu.</p>
<p>Les <strong>flèches</strong> peuvent compléter le feu tricolore :</p>
<ul>
<li>une flèche verte, dans un feu à flèche, autorise seulement la direction indiquée ;</li>
<li>une <strong>flèche jaune clignotante</strong> placée à côté d'un feu rouge autorise à franchir le feu dans la direction de la flèche, <strong>en cédant le passage</strong> aux piétons et aux véhicules qui circulent normalement sur la voie à rejoindre ;</li>
<li>un panonceau vélo avec flèche (tourne-à-droite cycliste) ne concerne que les cyclistes.</li>
</ul>
<p>Sur les voies à affectation variable (ponts, tunnels, péages), une <strong>croix rouge</strong> au-dessus d'une voie interdit de l'emprunter et une <strong>flèche verte</strong> vers le bas l'autorise.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> le feu est rouge, une flèche jaune clignote vers la droite. Vous pouvez tourner à droite après avoir laissé passer les piétons qui traversent la rue où vous allez.</div>`
        },
        {
          titre: "Les feux pour piétons et autres signaux",
          contenu: `<p>Les feux pour piétons <span class="panneau" data-code="FEU_PIETON_VERT"></span> <span class="panneau" data-code="FEU_PIETON_ROUGE"></span> s'adressent aux piétons, mais ils renseignent le conducteur : quand le bonhomme passe au vert, des piétons vont s'engager. Lorsque vous tournez à un carrefour à feux, les piétons qui traversent la voie où vous entrez peuvent avoir le vert en même temps que vous : vous leur cédez le passage.</p>
<p>Les feux des tramways et des bus (barres blanches, formes géométriques) ne concernent que ces véhicules. Ne vous laissez pas guider par eux.</p>
<p>Un <strong>agent</strong> qui règle la circulation prime sur les feux : bras levé verticalement, tout le monde s'arrête ; bras tendus à l'horizontale, les usagers qui lui font face ou dos s'arrêtent, ceux qui arrivent par ses côtés peuvent passer.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un piéton engagé sur la chaussée alors que son feu est passé au rouge doit pouvoir finir de traverser. Le feu vert ne vous autorise jamais à le mettre en danger.</div>`
        },
        {
          titre: "Les lignes longitudinales",
          contenu: `<p>Les lignes blanches tracées dans le sens de la circulation séparent les voies ou les sens de circulation.</p>
<table>
<thead><tr><th>Ligne</th><th>Règle</th></tr></thead>
<tbody>
<tr><td><span class="panneau" data-code="LIGNE_CONTINUE"></span> Continue</td><td>Interdiction de la franchir et de la chevaucher</td></tr>
<tr><td><span class="panneau" data-code="LIGNE_DISCONTINUE"></span> Discontinue (traits courts, intervalles longs)</td><td>Franchissement autorisé pour dépasser ou tourner, si la manœuvre est sans danger</td></tr>
<tr><td>Ligne d'annonce (traits longs, intervalles courts)</td><td>Annonce l'approche d'une ligne continue : on termine ou on renonce au dépassement</td></tr>
<tr><td><span class="panneau" data-code="LIGNE_MIXTE"></span> Mixte</td><td>On tient compte de la ligne la plus proche de soi : discontinue de votre côté, vous pouvez franchir ; continue de votre côté, non</td></tr>
<tr><td>Flèches de rabattement</td><td>Obligation de se rabattre : la voie va se réduire ou une ligne continue arrive</td></tr>
</tbody>
</table>
<p>Franchir ou chevaucher une ligne continue coûte 135 € et <strong>3 points</strong>. La seule exception est le contournement d'un obstacle immobile qui obstrue votre voie, en l'absence de toute autre solution et sans danger.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> avec une ligne mixte, c'est la ligne <strong>de votre côté</strong> qui compte, y compris pour revenir dans votre voie après un dépassement commencé régulièrement.</div>`
        },
        {
          titre: "Les lignes transversales et les marquages divers",
          contenu: `<p>Les lignes tracées en travers de la chaussée indiquent où s'arrêter :</p>
<ul>
<li><span class="panneau" data-code="LIGNE_STOP"></span> <strong>ligne continue</strong> transversale : ligne d'arrêt, associée au stop ou au feu. L'arrêt se fait avant cette ligne ;</li>
<li><span class="panneau" data-code="LIGNE_CEDEZ"></span> <strong>ligne discontinue</strong> transversale : ligne de cédez-le-passage. Vous marquez l'arrêt à cet endroit si un usager prioritaire arrive ;</li>
<li><span class="panneau" data-code="PASSAGE_PIETON"></span> <strong>bandes blanches</strong> parallèles : passage pour piétons.</li>
</ul>
<p>D'autres marquages complètent l'information : les <strong>zébras</strong> (surfaces hachurées) interdisent la circulation et l'arrêt ; une ligne <strong>jaune discontinue</strong> le long du trottoir interdit l'arrêt et le stationnement, une ligne jaune continue interdit le stationnement ; les <strong>marquages jaunes</strong> tracés sur la chaussée sont temporaires et priment sur les marquages blancs. Les lignes bleues délimitent une zone de stationnement réglementé (disque).</p>
<p>Un <strong>sas vélo</strong>, tracé entre la ligne d'arrêt des voitures et le feu, est réservé aux cyclistes : la voiture s'arrête à la première ligne.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> marquage jaune = provisoire, il l'emporte sur le marquage blanc. Pas de marquage, pas de panneau : priorité à droite.</div>`
        },
        {
          titre: "Cas pratiques : feux et marquages combinés",
          contenu: `<p>À l'examen, plusieurs signaux sont souvent visibles en même temps. Il faut alors appliquer l'ordre de priorité : l'agent, puis les feux, puis les panneaux, puis les marquages.</p>
<ul>
<li><strong>Feu en panne</strong> (éteint) et panneau stop sous le feu : le stop s'applique. Feu éteint sans aucun panneau : priorité à droite.</li>
<li><strong>Feu vert et carrefour encombré</strong> : vous attendez avant la ligne d'arrêt. S'engager pour rester bloqué au milieu est une infraction et paralyse le carrefour.</li>
<li><strong>Feu vert et piétons</strong> qui traversent la rue dans laquelle vous tournez : vous leur cédez le passage. Le refus de priorité à un piéton coûte <strong>6 points</strong>.</li>
<li><strong>Marquage jaune</strong> de chantier qui dévie la voie et ligne blanche continue ancienne : vous suivez le marquage jaune.</li>
<li><strong>Voie réservée</strong> aux bus (marquage « BUS » et ligne large) : vous ne l'empruntez pas, sauf pour tourner à droite lorsque la ligne est discontinue à cet endroit.</li>
</ul>
<p>Lorsque vous êtes arrêté au feu rouge, restez derrière la ligne d'arrêt sans empiéter sur le passage pour piétons ni sur le sas vélo. Si un véhicule prioritaire en intervention arrive derrière vous, décalez-vous sans franchir le carrefour si la manœuvre est dangereuse.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> le feu passe à l'orange alors que vous êtes à quelques mètres de la ligne à 50 km/h. Un freinage brutal ferait perdre le contrôle ou provoquerait une collision arrière : vous pouvez passer. À 40 mètres, en revanche, vous avez le temps de vous arrêter et vous devez le faire.</div>`
        }
      ],
      points_cles: [
        "Feu orange fixe : arrêt obligatoire sauf si l'arrêt est dangereux",
        "Feu rouge non respecté : 135 € et 4 points",
        "Feu jaune clignotant : passage avec prudence, priorités selon panneaux ou priorité à droite",
        "Flèche jaune clignotante : franchissement possible dans le sens de la flèche en cédant le passage",
        "Ligne continue : ni franchir ni chevaucher (3 points)",
        "Ligne mixte : on suit la ligne la plus proche de soi",
        "Ligne transversale continue = arrêt ; discontinue = cédez le passage",
        "Marquages jaunes temporaires prioritaires sur les marquages blancs",
        "Le sas vélo est réservé aux cyclistes"
      ],
      panneaux: ["FEU_ROUGE", "FEU_ORANGE", "FEU_VERT", "FEU_CLIGNOTANT", "FEU_PIETON_ROUGE", "FEU_PIETON_VERT", "LIGNE_CONTINUE", "LIGNE_DISCONTINUE", "LIGNE_MIXTE", "LIGNE_STOP", "LIGNE_CEDEZ", "PASSAGE_PIETON"]
    },
    {
      id: "intersections-priorites",
      theme: "L",
      titre: "Intersections et régimes de priorité",
      duree: 25,
      objectifs: [
        "Appliquer la priorité à droite en l'absence de signalisation",
        "Respecter le stop et le cédez-le-passage",
        "Entrer, circuler et sortir d'un carrefour giratoire",
        "Comprendre la route à caractère prioritaire",
        "Réagir face aux véhicules prioritaires et d'intérêt général"
      ],
      sections: [
        {
          titre: "La priorité à droite",
          contenu: `<p>C'est la règle par défaut : à une intersection sans panneau, sans feu et sans agent, vous cédez le passage aux véhicules qui arrivent par votre <strong>droite</strong>. Elle s'applique en agglomération comme hors agglomération. Le panneau <span class="panneau" data-code="AB1"></span> AB1 l'annonce lorsqu'elle risque de surprendre, mais elle s'applique même sans ce panneau.</p>
<p>Céder le passage signifie que l'autre usager ne doit pas avoir à modifier sa vitesse ou sa trajectoire. Vous ralentissez, vous vous arrêtez si nécessaire, puis vous repartez quand le passage est libre.</p>
<p>La priorité à droite ne s'applique pas aux usagers qui sortent d'un chemin de terre, d'une propriété, d'un parking, d'une station-service ou d'une aire de stationnement : <strong>quiconque sort d'un accès privé ou d'un chemin non revêtu cède le passage</strong> à tous.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> en lotissement, aucune signalisation. Une voiture arrive par une rue à votre droite. Même si vous êtes sur une rue plus large, vous la laissez passer.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une route plus large, plus fréquentée ou en meilleur état n'est pas prioritaire pour autant. Seule la signalisation change la règle.</div>`
        },
        {
          titre: "Le stop et le cédez-le-passage",
          contenu: `<p>Au <strong>stop</strong> <span class="panneau" data-code="AB4"></span>, l'arrêt est <strong>obligatoire</strong> à la limite de la chaussée abordée, matérialisée par une ligne continue <span class="panneau" data-code="LIGNE_STOP"></span>. Les roues doivent s'immobiliser, même si aucun véhicule n'est visible. Vous cédez ensuite le passage aux usagers circulant sur la route que vous abordez, à droite comme à gauche, puis vous repartez.</p>
<p>Au <strong>cédez-le-passage</strong> <span class="panneau" data-code="AB3a"></span>, l'arrêt n'est obligatoire que si un usager arrive. La ligne transversale est discontinue <span class="panneau" data-code="LIGNE_CEDEZ"></span>. Vous devez pouvoir observer la route principale : ralentissez suffisamment tôt.</p>
<p>Ne pas marquer l'arrêt au stop ou ne pas céder le passage coûte 135 € et <strong>4 points</strong>.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> stop = arrêt toujours ; cédez-le-passage = arrêt seulement si nécessaire. Dans les deux cas, on laisse passer tout le monde sur la route abordée.</div>`
        },
        {
          titre: "La route prioritaire et l'intersection prioritaire",
          contenu: `<p>Le triangle <span class="panneau" data-code="AB2"></span> AB2 annonce que vous êtes prioritaire à la <strong>prochaine intersection seulement</strong>. Le losange jaune <span class="panneau" data-code="AB6"></span> AB6 signale une <strong>route à caractère prioritaire</strong> : vous êtes prioritaire à toutes les intersections jusqu'au panneau de fin <span class="panneau" data-code="AB7"></span> AB7. Après ce panneau, les règles normales reprennent, en général la priorité à droite.</p>
<p>Être prioritaire n'autorise pas à ignorer les autres : restez attentif à un conducteur qui pourrait ne pas respecter son stop, et aux usagers qui tournent.</p>
<p>Lorsque vous <strong>tournez à gauche</strong>, vous laissez passer les véhicules qui arrivent en face, sauf s'ils doivent eux-mêmes vous céder le passage. Dans un carrefour à feux, les véhicules de face qui vont tout droit ou à droite passent avant vous.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un panneau AB6 en agglomération est rare. Vérifiez à chaque carrefour qu'un panneau de stop ou de cédez-le-passage est bien présent sur les rues latérales.</div>`
        },
        {
          titre: "Le carrefour à sens giratoire",
          contenu: `<p>Le carrefour giratoire est annoncé par le panneau <span class="panneau" data-code="AB25"></span> AB25. À l'entrée, un panneau cédez-le-passage indique que les véhicules <strong>déjà engagés dans l'anneau sont prioritaires</strong>. On tourne toujours dans le sens inverse des aiguilles d'une montre, en laissant le terre-plein central à gauche.</p>
<ul>
<li><strong>Pour sortir à la première sortie</strong> : on reste dans la voie de droite, clignotant à droite dès l'entrée.</li>
<li><strong>Pour aller tout droit</strong> : on peut rester à droite, clignotant à droite après avoir dépassé la sortie précédant la sienne.</li>
<li><strong>Pour sortir plus loin ou faire demi-tour</strong> : on peut se placer à gauche, puis on se décale vers la droite en temps utile, en mettant le clignotant à droite avant sa sortie.</li>
</ul>
<p>Le clignotant à gauche à l'entrée n'est pas obligatoire mais il est recommandé quand on se place sur la voie de gauche.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un « rond-point » sans panneau AB25 ni cédez-le-passage est soumis à la priorité à droite : ce sont les véhicules qui entrent qui sont prioritaires. Cette situation existe encore, notamment en Île-de-France (place de l'Étoile).</div>`
        },
        {
          titre: "Les véhicules prioritaires et d'intérêt général",
          contenu: `<p>Les <strong>véhicules d'intérêt général prioritaires</strong> (police, gendarmerie, douanes, pompiers, SAMU, SMUR…) annoncent leur approche par des <strong>feux bleus</strong> clignotants et un avertisseur spécial deux tons. Vous devez leur <strong>céder le passage</strong> en toutes circonstances : vous vous rangez sur le côté, vous vous arrêtez si nécessaire, sans créer de danger. À un feu rouge, vous ne devez pas franchir la ligne d'arrêt au risque de provoquer un accident : décalez-vous si c'est possible.</p>
<p>Les <strong>véhicules bénéficiant de facilités de passage</strong> (dépanneuses, véhicules de transport de fonds, engins de service hivernal, véhicules d'intervention des services de gaz ou d'électricité…) utilisent un <strong>feu spécial orange</strong> clignotant. Vous devez leur faciliter le passage, mais ils ne sont pas prioritaires aux intersections.</p>
<p>Le <strong>tramway</strong> est prioritaire sur les autres usagers en toutes circonstances lorsqu'il circule sur sa plateforme, sauf indication contraire.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> feu bleu + deux tons = céder le passage. Feu orange = faciliter le passage.</div>`
        },
        {
          titre: "Situations délicates aux intersections",
          contenu: `<p>Certaines configurations reviennent souvent à l'examen, car elles piègent les conducteurs pressés.</p>
<h4>Quatre véhicules à un carrefour à priorité à droite</h4>
<p>Si quatre véhicules arrivent en même temps à un carrefour sans signalisation, chacun a quelqu'un à sa droite : la situation est bloquée. Un conducteur doit renoncer à sa priorité, de façon visible et prudente, pour débloquer le carrefour. Le contact visuel et la courtoisie sont alors essentiels.</p>
<h4>Le carrefour encombré</h4>
<p>Même prioritaire, même au feu vert, vous ne devez pas vous engager dans une intersection si vous risquez d'y être immobilisé. Vous attendez que la voie de sortie soit libre.</p>
<h4>Les intersections successives</h4>
<p>Un panneau AB2 ne vaut que pour une intersection. Si une deuxième intersection suit de près, sans nouveau panneau, la priorité à droite peut s'y appliquer. Le losange AB6, lui, vous couvre jusqu'au panneau de fin.</p>
<h4>Le changement de direction</h4>
<p>Pour tourner à droite, serrez à droite et méfiez-vous des cyclistes qui vous longent. Pour tourner à gauche sur une route à double sens, serrez l'axe médian ; sur une voie à sens unique, serrez à gauche. Avant de tourner, regardez dans le rétroviseur et dans l'angle mort, puis mettez votre clignotant suffisamment tôt.</p>
<h4>Les usagers sortant d'une zone particulière</h4>
<p>Un véhicule qui sort d'une aire piétonne, d'une station-service, d'un parking ou d'un chemin de terre doit céder le passage. Un conducteur qui recule ou qui fait demi-tour doit aussi laisser passer tous les autres usagers.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « je suis prioritaire, donc je passe sans regarder » est toujours une mauvaise réponse. La priorité se prend en vérifiant que l'autre usager vous l'accorde.</div>`
        }
      ],
      points_cles: [
        "Sans signalisation : priorité à droite, quelle que soit la largeur des routes",
        "Celui qui sort d'un chemin de terre, d'un parking ou d'une propriété cède le passage à tous",
        "Stop : arrêt obligatoire même sans trafic ; cédez-le-passage : arrêt si nécessaire",
        "Non-respect d'un stop ou d'un cédez-le-passage : 4 points",
        "AB2 : prioritaire à la prochaine intersection ; AB6 : prioritaire jusqu'au panneau AB7",
        "Giratoire avec AB25 et cédez-le-passage : les véhicules dans l'anneau sont prioritaires",
        "Feu bleu et deux tons : céder le passage ; feu orange : faciliter le passage",
        "Pour tourner à gauche, on laisse passer les véhicules arrivant en face"
      ],
      panneaux: ["AB1", "AB2", "AB3a", "AB4", "AB6", "AB7", "AB25", "LIGNE_STOP", "LIGNE_CEDEZ"]
    }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème L — chapitres 4 à 6 ───────────── */
  P.chapitres.push(
    {
      id: "vitesses-maximales",
      theme: "L",
      titre: "Les vitesses maximales autorisées",
      duree: 20,
      objectifs: [
        "Connaître les vitesses maximales selon le type de route",
        "Appliquer les réductions par temps de pluie et en cas de visibilité inférieure à 50 m",
        "Connaître les limites propres aux conducteurs en permis probatoire",
        "Savoir où commence et où cesse une limitation",
        "Mesurer les sanctions des excès de vitesse"
      ],
      sections: [
        {
          titre: "Le tableau général des vitesses",
          contenu: `<p>En France, la vitesse maximale dépend du <strong>type de route</strong>, des <strong>conditions météorologiques</strong> et de l'<strong>ancienneté du permis</strong>. Ces valeurs sont des maximums : elles ne sont jamais un objectif, et la vitesse doit toujours être adaptée aux circonstances.</p>
<table>
<thead><tr><th>Type de route</th><th>Temps sec</th><th>Pluie ou autres précipitations</th><th>Permis probatoire</th></tr></thead>
<tbody>
<tr><td>Autoroute</td><td>130 km/h</td><td>110 km/h</td><td>110 km/h</td></tr>
<tr><td>Route à chaussées séparées par un terre-plein central (2 x 2 voies)</td><td>110 km/h</td><td>100 km/h</td><td>100 km/h</td></tr>
<tr><td>Route bidirectionnelle hors agglomération (cas général)</td><td>80 km/h</td><td>70 km/h</td><td>80 km/h</td></tr>
<tr><td>Route hors agglomération relevée à 90 km/h par l'autorité (panneau)</td><td>90 km/h</td><td>80 km/h</td><td>80 km/h</td></tr>
<tr><td>Agglomération</td><td>50 km/h</td><td>50 km/h</td><td>50 km/h</td></tr>
</tbody>
</table>
<p>La limite de 80 km/h s'applique depuis 2018 sur les routes à double sens sans séparateur central. Depuis 2020, les présidents de département ou les maires peuvent relever cette vitesse à 90 km/h sur certaines sections : c'est alors un panneau <span class="panneau" data-code="B14:90"></span> qui vous l'indique. Sans panneau, la règle reste 80 km/h.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 130 / 110 / 80 / 50 par temps sec ; 110 / 100 / 70 / 50 sous la pluie.</div>`
        },
        {
          titre: "Pluie, brouillard, neige : les vitesses réduites",
          contenu: `<p>Dès qu'il pleut ou qu'il tombe d'autres précipitations (neige, grêle), les distances de freinage s'allongent et la visibilité diminue. Le Code impose alors des vitesses plus basses : <strong>110 km/h sur autoroute</strong>, <strong>100 km/h sur route à chaussées séparées</strong>, <strong>70 km/h</strong> sur les routes limitées à 80 (et 80 km/h sur celles relevées à 90). En agglomération, la limite reste 50 km/h.</p>
<p>Quand la <strong>visibilité est inférieure à 50 mètres</strong> (brouillard épais, fortes chutes de neige, pluie diluvienne), la vitesse est limitée à <strong>50 km/h sur toutes les routes</strong>, autoroute comprise. Un repère pratique : sur autoroute, les balises de bord sont espacées de 50 mètres ; si vous ne voyez pas la balise suivante, la visibilité est inférieure à 50 m.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la route est encore mouillée mais il ne pleut plus. La réduction réglementaire est liée aux précipitations, mais la prudence impose de rester modéré : la chaussée humide reste glissante.</div>
<div class="encart" data-type="danger"><strong>Attention :</strong> sur neige ou verglas, aucune vitesse réglementaire n'est fixée : c'est à vous de rouler très lentement. 50 km/h sur verglas peut déjà être bien trop rapide.</div>`
        },
        {
          titre: "Les jeunes conducteurs",
          contenu: `<p>Pendant la période probatoire (3 ans, ou 2 ans après un apprentissage anticipé), les conducteurs novices doivent respecter des limites abaissées, quelle que soit la météo : <strong>110 km/h sur autoroute</strong>, <strong>100 km/h sur route à chaussées séparées</strong>, <strong>80 km/h sur les autres routes</strong> hors agglomération (y compris celles relevées à 90). En agglomération, rien ne change.</p>
<p>Le <strong>disque « A »</strong> (lettre rouge sur fond blanc) apposé à l'arrière du véhicule signale aux autres usagers un conducteur novice. Il est obligatoire pendant toute la période probatoire.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> titulaire du permis depuis 8 mois, vous roulez sur autoroute sous la pluie. La limite est de 110 km/h : c'est à la fois la limite « pluie » et la limite « jeune conducteur ». Elle ne se cumule pas en une baisse supplémentaire.</div>`
        },
        {
          titre: "Les limitations locales et les zones particulières",
          contenu: `<p>Le panneau <span class="panneau" data-code="B14:70"></span> impose une vitesse maximale. Il est valable jusqu'au panneau de fin <span class="panneau" data-code="B33:70"></span>, jusqu'à un nouveau panneau de limitation, ou jusqu'à la prochaine intersection s'il n'est pas répété. Un panneau de limitation peut aussi être suivi d'un panneau de fin de toutes les interdictions <span class="panneau" data-code="B31"></span>.</p>
<p>En agglomération, certaines zones abaissent la vitesse : <span class="panneau" data-code="ZONE30"></span> la <strong>zone 30</strong>, <span class="panneau" data-code="ZONE_REN"></span> la <strong>zone de rencontre</strong> limitée à <strong>20 km/h</strong>, et l'<strong>aire piétonne</strong> où l'on roule <strong>au pas</strong>. Inversement, une section d'agglomération peut être relevée à 70 km/h par un panneau.</p>
<p>Sur autoroute, une vitesse inférieure peut être imposée par panneau ou par panneau à message variable : pollution, travaux, bouchons. En cas de <strong>pic de pollution</strong>, les préfets peuvent abaisser les vitesses de 20 km/h.</p>
<p>Certains véhicules ont leurs propres limites (poids lourds, ensembles de plus de 3,5 t, véhicules transportant des matières dangereuses). Un véhicule léger tractant une remorque de PTAC élevé peut aussi être limité : renseignez-vous avant de partir.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> une limitation de vitesse vaut jusqu'à la prochaine intersection si elle n'est pas répétée, et jusqu'au panneau de fin ou à un nouveau panneau dans tous les cas.</div>`
        },
        {
          titre: "Adapter sa vitesse",
          contenu: `<p>Le Code de la route impose au conducteur de rester constamment <strong>maître de sa vitesse</strong> et de la régler en fonction de l'état de la chaussée, des difficultés de circulation et des obstacles prévisibles. Rouler à 80 km/h dans un brouillard léger, une nuit de pluie ou près d'une école à la sortie des classes peut être une faute, même si la limite est respectée.</p>
<p>La vitesse influe sur trois éléments décisifs :</p>
<ul>
<li>la <strong>distance d'arrêt</strong>, qui augmente beaucoup plus vite que la vitesse (elle est à peu près proportionnelle au carré de la vitesse pour la partie freinage) ;</li>
<li>le <strong>champ visuel</strong>, qui se rétrécit quand la vitesse augmente ;</li>
<li>la <strong>violence du choc</strong> : l'énergie à dissiper est proportionnelle au carré de la vitesse. Un choc à 50 km/h équivaut à une chute d'environ 10 mètres, soit trois étages.</li>
</ul>
<p>Pour un piéton heurté, le risque de mourir est faible à 30 km/h, mais il devient très élevé au-delà de 50 km/h. C'est la raison d'être des zones 30.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> doubler la vitesse ne double pas la distance de freinage : elle la multiplie environ par quatre.</div>`
        },
        {
          titre: "Les sanctions des excès de vitesse",
          contenu: `<p>Les sanctions dépendent de l'importance de l'excès, mesuré après déduction de la marge technique du radar.</p>
<table>
<thead><tr><th>Excès de vitesse</th><th>Retrait de points</th><th>Amende forfaitaire</th></tr></thead>
<tbody>
<tr><td>Moins de 20 km/h</td><td>1 point</td><td>68 € si la limite est supérieure à 50 km/h ; 135 € si elle est inférieure ou égale à 50 km/h</td></tr>
<tr><td>De 20 à moins de 30 km/h</td><td>2 points</td><td>135 €</td></tr>
<tr><td>De 30 à moins de 40 km/h</td><td>3 points</td><td>135 €, suspension possible</td></tr>
<tr><td>De 40 à moins de 50 km/h</td><td>4 points</td><td>135 €, suspension possible</td></tr>
<tr><td>50 km/h et plus</td><td>6 points</td><td>Sanction très lourde : amende jusqu'à 1 500 € et davantage, suspension, confiscation possible du véhicule</td></tr>
</tbody>
</table>
<p>Pour un très petit excès (moins de 5 km/h), le retrait de point a été supprimé à partir de 2024, mais l'amende reste due.</p>
<p>Un excès de 40 km/h ou plus peut entraîner la <strong>rétention immédiate du permis</strong> par les forces de l'ordre, puis une suspension administrative.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> pour un conducteur en permis probatoire qui dispose de 6 points, un grand excès de vitesse (6 points) suffit à rendre le permis invalide.</div>`
        }
      ],
      points_cles: [
        "Temps sec : 130 autoroute, 110 route à chaussées séparées, 80 route, 50 agglomération",
        "Pluie : 110, 100, 70 (ou 80 sur une route relevée à 90), 50 en agglomération",
        "Visibilité inférieure à 50 m : 50 km/h partout",
        "Permis probatoire : 110 autoroute, 100 chaussées séparées, 80 sur les autres routes",
        "Zone 30 : 30 km/h ; zone de rencontre : 20 km/h ; aire piétonne : au pas",
        "Une limitation cesse au panneau de fin ou à la prochaine intersection si elle n'est pas répétée",
        "La distance de freinage est multipliée par 4 quand la vitesse double",
        "Excès de 40 km/h ou plus : rétention immédiate possible du permis"
      ],
      panneaux: ["B14:50", "B14:70", "B14:90", "B14:110", "B14:130", "B33:70", "B31", "ZONE30", "ZONE_REN"]
    },
    {
      id: "depassement-croisement",
      theme: "L",
      titre: "Dépassement et croisement",
      duree: 20,
      objectifs: [
        "Préparer et exécuter un dépassement en sécurité",
        "Connaître les situations où le dépassement est interdit",
        "Savoir quand dépasser par la droite est permis",
        "Se comporter quand on est dépassé",
        "Croiser un autre véhicule sur route étroite ou en montagne"
      ],
      sections: [
        {
          titre: "Les conditions d'un dépassement",
          contenu: `<p>Dépasser est l'une des manœuvres les plus dangereuses : un dépassement raté provoque souvent un choc frontal. Avant de dépasser, vous devez vous assurer que :</p>
<ul>
<li>la <strong>visibilité</strong> est suffisante vers l'avant et que la voie de gauche est libre sur une distance suffisante ;</li>
<li>personne n'a commencé à vous dépasser (contrôle des <strong>rétroviseurs</strong> et de l'<strong>angle mort</strong>) ;</li>
<li>le conducteur qui vous précède n'a pas signalé son intention de dépasser ou de tourner à gauche ;</li>
<li>vous pourrez vous <strong>rabattre</strong> sans gêner le véhicule dépassé ;</li>
<li>la différence de vitesse est suffisante pour que la manœuvre soit brève, sans dépasser la vitesse maximale autorisée.</li>
</ul>
<p>La manœuvre se fait en quatre temps : contrôle et clignotant gauche, déboîtement franc, dépassement en laissant un espace latéral suffisant, puis clignotant droit et rabattement quand le véhicule dépassé est visible dans le rétroviseur intérieur.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'écart latéral minimal pour dépasser un cycliste, un piéton, un cavalier ou un véhicule à traction animale est de <strong>1 mètre en agglomération</strong> et de <strong>1,50 mètre hors agglomération</strong>.</div>`
        },
        {
          titre: "Les interdictions de dépasser",
          contenu: `<p>Le dépassement est interdit :</p>
<ul>
<li>lorsqu'il faut franchir ou chevaucher une <strong>ligne continue</strong> <span class="panneau" data-code="LIGNE_CONTINUE"></span> ;</li>
<li>en présence du panneau <span class="panneau" data-code="B3"></span> B3, qui interdit de dépasser tous les véhicules à moteur autres que les deux-roues sans side-car, jusqu'au panneau de fin <span class="panneau" data-code="B34"></span> ;</li>
<li>à l'approche d'un <strong>sommet de côte</strong> et dans un <strong>virage</strong> lorsque la visibilité est insuffisante, sauf si la manœuvre laisse libre la partie de chaussée réservée à la circulation en sens inverse ;</li>
<li>aux <strong>intersections</strong>, sauf si vous êtes sur la route prioritaire, si le carrefour est réglé par des feux ou un agent, ou s'il s'agit de dépasser un deux-roues ;</li>
<li>sur et à l'approche des <strong>passages à niveau</strong> sans barrière ni demi-barrière ;</li>
<li>à l'approche d'un <strong>passage pour piétons</strong> lorsqu'un piéton est engagé ou s'apprête à traverser, et de manière générale quand un véhicule s'est arrêté pour laisser passer un piéton ;</li>
<li>lorsque le véhicule devant vous dépasse lui-même ou tourne à gauche après l'avoir signalé.</li>
</ul>
<p>Le dépassement dangereux et le franchissement de ligne continue sont punis de 135 € et de 3 points.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le panneau B3 n'interdit pas de dépasser une moto, un cyclomoteur ou un vélo, tant qu'aucune ligne continue ne vous oblige à la franchir.</div>`
        },
        {
          titre: "Dépasser par la droite",
          contenu: `<p>En principe, on dépasse par la <strong>gauche</strong>. Le dépassement par la droite est cependant <strong>obligatoire</strong> ou autorisé dans quelques cas :</p>
<ul>
<li>un véhicule qui a signalé qu'il <strong>tourne à gauche</strong> et qui s'est placé à gauche de la chaussée se dépasse par la droite ;</li>
<li>le <strong>tramway</strong> se dépasse par la droite lorsque l'espace est suffisant (par la gauche seulement en sens unique ou si l'espace à droite manque) ;</li>
<li>en circulation dense, quand les files roulent de façon ininterrompue, le fait que la file de droite avance plus vite que celle de gauche n'est pas considéré comme un dépassement.</li>
</ul>
<p>Sur autoroute et sur voie rapide, dépasser par la droite volontairement (déboîter à droite pour doubler un véhicule lent sur la voie de gauche) est interdit.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un conducteur devant vous met son clignotant à gauche et serre l'axe médian pour entrer dans une cour. Vous le dépassez par la droite, s'il y a assez de place, sans chevaucher l'accotement.</div>`
        },
        {
          titre: "Être dépassé",
          contenu: `<p>Quand un autre usager vous dépasse, vous devez faciliter sa manœuvre : <strong>serrer à droite</strong> et <strong>ne pas accélérer</strong>. Accélérer pendant qu'on est dépassé est une infraction. Si le dépassement échoue et que l'autre conducteur a besoin de se rabattre, ralentissez pour lui laisser la place.</p>
<p>Sur une route étroite, sinueuse ou en montagne, les véhicules lents ou encombrants (poids lourds, camping-cars, tracteurs) doivent ralentir ou se ranger pour laisser passer les véhicules plus rapides lorsque la file s'allonge derrière eux.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> la nuit, si un véhicule vous dépasse, repassez en feux de croisement dès qu'il arrive à votre hauteur pour ne pas l'éblouir dans ses rétroviseurs.</div>`
        },
        {
          titre: "Le croisement",
          contenu: `<p>Pour croiser un véhicule venant en sens inverse, chacun <strong>serre à droite</strong> autant que nécessaire. La nuit, vous passez en feux de croisement pour ne pas éblouir.</p>
<p>Lorsque la chaussée est trop étroite ou encombrée :</p>
<ul>
<li>si un <strong>obstacle</strong> se trouve dans votre voie, c'est vous qui laissez passer le véhicule qui arrive en face ;</li>
<li>sur une <strong>route de montagne</strong> ou en forte pente, c'est le véhicule qui <strong>descend</strong> qui doit s'arrêter ou reculer le premier, sauf s'il est plus facile pour le véhicule montant de rejoindre un refuge tout proche ;</li>
<li>entre véhicules de gabarits différents, le plus maniable fait la manœuvre : la voiture recule devant le poids lourd, le véhicule isolé devant l'ensemble de véhicules.</li>
</ul>
<p>Le panneau de chaussée rétrécie <span class="panneau" data-code="A3"></span> annonce un passage où le croisement peut être difficile. Un panneau carré indique parfois qui est prioritaire dans le passage étroit (flèche blanche plus grande que la flèche rouge).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> obstacle de votre côté = vous cédez. En montagne = le véhicule qui descend cède.</div>`
        },
        {
          titre: "Évaluer le temps et la distance d'un dépassement",
          contenu: `<p>Un dépassement prend beaucoup plus de temps et de place qu'on ne l'imagine. Pour dépasser un poids lourd de 16 mètres qui roule à 70 km/h, une voiture à 90 km/h doit parcourir plusieurs centaines de mètres sur la voie de gauche. Pendant ce temps, un véhicule venant en face à 80 km/h parcourt lui aussi une distance comparable : il faut donc disposer d'une visibilité libre très longue.</p>
<p>Quelques réflexes limitent le risque :</p>
<ul>
<li>restez à distance suffisante du véhicule à dépasser avant de déboîter, pour garder la visibilité vers l'avant et pouvoir prendre de l'élan ;</li>
<li>renoncez au moindre doute : un dépassement abandonné à temps ne coûte que quelques secondes ;</li>
<li>ne dépassez jamais plusieurs véhicules à la suite si vous n'êtes pas sûr de pouvoir vous rabattre entre eux ;</li>
<li>méfiez-vous des intersections, des entrées de chemins et des accès riverains, d'où un véhicule peut surgir ou tourner ;</li>
<li>sur une route à trois voies, n'utilisez la voie centrale que si elle est libre et si personne en face ne s'apprête à l'emprunter.</li>
</ul>
<p>Le dépassement des véhicules lents (tracteurs, engins agricoles, cyclistes en groupe) demande une patience particulière : attendez une ligne discontinue et une visibilité suffisante, en respectant l'écart latéral réglementaire.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une ligne discontinue autorise le franchissement, mais ne garantit jamais que le dépassement est sans danger. C'est à vous de juger la visibilité et la vitesse des autres.</div>`
        }
      ],
      points_cles: [
        "Avant de dépasser : visibilité, rétroviseurs, angle mort, place pour se rabattre",
        "Écart latéral : 1 m en agglomération, 1,50 m hors agglomération pour cyclistes et piétons",
        "Dépassement interdit en franchissant une ligne continue et au panneau B3",
        "Dépassement interdit en sommet de côte ou virage sans visibilité et à l'approche d'une intersection non prioritaire",
        "Un véhicule qui tourne à gauche et le tramway se dépassent par la droite",
        "Quand on est dépassé : serrer à droite, ne pas accélérer",
        "Obstacle dans votre voie : vous cédez le passage",
        "En montagne : le véhicule qui descend cède le passage"
      ],
      panneaux: ["B3", "B34", "LIGNE_CONTINUE", "LIGNE_DISCONTINUE", "LIGNE_MIXTE", "A3"]
    },
    {
      id: "arret-stationnement",
      theme: "L",
      titre: "Arrêt et stationnement",
      duree: 20,
      objectifs: [
        "Distinguer l'arrêt du stationnement",
        "Savoir où l'arrêt et le stationnement sont interdits",
        "Identifier les stationnements gênants, très gênants et dangereux",
        "Utiliser correctement les zones bleues et le stationnement payant",
        "Stationner en sécurité, de jour comme de nuit"
      ],
      sections: [
        {
          titre: "Arrêt ou stationnement ?",
          contenu: `<p>L'<strong>arrêt</strong> est l'immobilisation momentanée d'un véhicule, le conducteur restant au volant ou à proximité pour pouvoir le déplacer : faire monter ou descendre un passager, charger un colis. Le <strong>stationnement</strong> est l'immobilisation au-delà de ces circonstances, en particulier lorsque le conducteur s'éloigne du véhicule.</p>
<p>Le panneau <span class="panneau" data-code="B6a1"></span> interdit le <strong>stationnement</strong> : l'arrêt reste permis. Le panneau <span class="panneau" data-code="B6d"></span> interdit <strong>l'arrêt et le stationnement</strong>. Ces interdictions s'appliquent du côté de la chaussée où le panneau est implanté.</p>
<p>Un panonceau peut préciser la portée de l'interdiction : jours et heures, catégorie de véhicules, longueur de la zone. Sans panonceau, l'interdiction vaut jusqu'à la prochaine intersection. Les règles de stationnement peuvent aussi être fixées pour toute une zone par un panneau d'entrée de zone, valable jusqu'au panneau de sortie.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> sous un panneau B6a1, vous pouvez déposer un ami et repartir aussitôt. Sous un panneau B6d, vous ne pouvez même pas vous immobiliser pour cela.</div>`
        },
        {
          titre: "Où et comment s'arrêter",
          contenu: `<p>En agglomération, on s'arrête et on stationne <strong>sur le côté droit</strong> de la chaussée, dans le sens de la circulation. Sur une chaussée à <strong>sens unique</strong>, on peut aussi s'arrêter à <strong>gauche</strong>. On utilise en priorité les emplacements aménagés <span class="panneau" data-code="C1a"></span>.</p>
<p>Hors agglomération, l'arrêt et le stationnement se font de préférence <strong>hors de la chaussée</strong>, sur l'accotement si cela ne présente pas de danger.</p>
<p>Avant de quitter le véhicule : moteur coupé, frein de stationnement serré, vitesse engagée (ou position P), roues braquées vers le trottoir dans une pente, portes verrouillées. Avant d'ouvrir la portière, regardez dans le rétroviseur et par-dessus l'épaule : un cycliste peut arriver. La technique de la « main opposée » (ouvrir la portière avec la main droite) oblige à tourner la tête.</p>
<p>La nuit, hors agglomération, un véhicule arrêté sur la chaussée doit être signalé par ses feux de position. En agglomération, si l'éclairage public suffit à le rendre visible, ce n'est pas nécessaire.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> ouvrir sa portière sans regarder est une cause fréquente d'accidents graves de cyclistes (« emportiérage »).</div>`
        },
        {
          titre: "Le stationnement gênant et très gênant",
          contenu: `<p>Le Code distingue plusieurs niveaux de gravité.</p>
<table>
<thead><tr><th>Catégorie</th><th>Exemples</th><th>Sanction</th></tr></thead>
<tbody>
<tr><td>Stationnement gênant</td><td>Devant une entrée carrossable, en double file, sur un emplacement de livraison</td><td>35 €, enlèvement possible</td></tr>
<tr><td>Stationnement très gênant</td><td>Sur un trottoir, une piste ou une bande cyclable, un passage pour piétons, une place réservée aux personnes handicapées, un emplacement réservé aux véhicules de transport public, sur une voie verte</td><td>135 €, enlèvement possible</td></tr>
<tr><td>Arrêt ou stationnement dangereux</td><td>À proximité d'une intersection, d'un virage, d'un sommet de côte, d'un passage à niveau, lorsque la visibilité est insuffisante</td><td>135 € et 3 points</td></tr>
</tbody>
</table>
<p>Pour améliorer la visibilité entre piétons et conducteurs, la loi d'orientation des mobilités prévoit qu'aucune place de stationnement pour véhicule motorisé ne soit aménagée dans les <strong>5 mètres</strong> en amont d'un passage pour piétons (seuls des emplacements pour vélos ou engins de déplacement personnel peuvent y être installés). Même là où une place existe encore, garez-vous de façon à ne jamais masquer un piéton qui s'apprête à traverser.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « je reste au volant avec les warnings » ne transforme pas un arrêt en double file en arrêt autorisé. Les feux de détresse ne donnent aucun droit.</div>`
        },
        {
          titre: "Les autres interdictions",
          contenu: `<p>L'arrêt et le stationnement sont aussi interdits :</p>
<ul>
<li>sur les <strong>voies réservées</strong> aux bus et aux tramways ;</li>
<li>sur les <strong>ponts</strong>, dans les <strong>tunnels</strong>, dans les passages souterrains, sauf aménagement ;</li>
<li>sur les voies de circulation des <strong>autoroutes</strong>, sur leur bande d'arrêt d'urgence (sauf nécessité absolue) et sur leurs bretelles ;</li>
<li>au droit des <strong>lignes continues</strong>, quand un autre véhicule serait obligé de la franchir pour passer ;</li>
<li>le long d'une <strong>bordure jaune</strong> discontinue (arrêt et stationnement interdits) ou continue (stationnement interdit).</li>
</ul>
<p>Un stationnement ininterrompu de plus de <strong>7 jours</strong> au même endroit de la voie publique est considéré comme <strong>abusif</strong> : le véhicule peut être mis en fourrière.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> au-delà de 7 jours sans bouger, le stationnement est abusif, même sur une place autorisée.</div>`
        },
        {
          titre: "Zones bleues et stationnement payant",
          contenu: `<p>En <strong>zone bleue</strong>, signalée par des panneaux et souvent par un marquage bleu au sol, le stationnement est gratuit mais limité dans le temps. Vous devez placer le <strong>disque de stationnement</strong> européen derrière le pare-brise, réglé sur votre heure d'arrivée. Ne pas mettre de disque ou dépasser la durée autorisée est sanctionné.</p>
<p>Le <strong>stationnement payant</strong> relève depuis 2018 d'une redevance fixée par la commune. Ne pas payer, ou dépasser la durée payée, entraîne un <strong>forfait post-stationnement</strong> (FPS), dont le montant varie selon la commune. Ce n'est pas une amende pénale et il n'entraîne aucun retrait de point.</p>
<p>Le panneau de stationnement alterné semi-mensuel impose de stationner du côté des numéros impairs du 1er au 15 du mois, puis du côté des numéros pairs du 16 à la fin du mois. Le changement de côté s'effectue le dernier jour de chaque période, entre 20 h 30 et 21 h.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous arrivez en zone bleue à 14 h 10. Vous réglez le disque sur l'heure d'arrivée, en tenant compte de la graduation par demi-heure (14 h 30 sur la plupart des disques).</div>`
        },
        {
          titre: "Stationner en pente et la nuit",
          contenu: `<p>Dans une <strong>montée</strong>, laissez le véhicule avec la <strong>première</strong> engagée et les roues braquées vers l'extérieur (côté chaussée) si le trottoir peut caler la roue avant ; dans une <strong>descente</strong>, la <strong>marche arrière</strong> engagée et les roues braquées vers le trottoir. Dans tous les cas, serrez fermement le frein de stationnement. Avec une boîte automatique, utilisez la position P.</p>
<p>La nuit ou par mauvaise visibilité, un véhicule en stationnement hors agglomération sur la chaussée doit être éclairé (feux de position ou feux de stationnement). En cas de panne sur une route, éloignez le véhicule de la chaussée si possible, allumez les feux de détresse, enfilez le gilet de haute visibilité avant de sortir et placez le triangle de présignalisation à 30 mètres au moins, s'il peut être posé sans danger.</p>
<p>Sur une route sans accotement, si la panne immobilise le véhicule sur la chaussée, faites sortir les passagers du côté opposé à la circulation et mettez-les à l'abri derrière une glissière ou loin de la route. Ne restez jamais à l'intérieur ni debout derrière la voiture.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> gilet d'abord, triangle ensuite à 30 m au moins, et seulement si cela ne vous met pas en danger.</div>`
        }
      ],
      points_cles: [
        "Arrêt : immobilisation momentanée, conducteur au volant ou à proximité",
        "B6a1 interdit le stationnement ; B6d interdit l'arrêt et le stationnement",
        "En agglomération : côté droit, ou des deux côtés sur une voie à sens unique",
        "Stationnement très gênant (trottoir, passage piéton, place handicapé) : 135 €",
        "Arrêt ou stationnement dangereux : 135 € et 3 points",
        "Pas de place de stationnement aménagée dans les 5 m avant un passage piéton : ne jamais masquer les piétons",
        "Stationnement abusif au-delà de 7 jours au même endroit",
        "Regarder dans le rétroviseur et l'angle mort avant d'ouvrir la portière"
      ],
      panneaux: ["B6a1", "B6d", "C1a"]
    }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème L — chapitres 7 et 8 ───────────── */
  P.chapitres.push(
    {
      id: "circulation-agglomeration",
      theme: "L",
      titre: "Circuler en agglomération : zones 30, zones de rencontre, voies réservées",
      duree: 20,
      objectifs: [
        "Connaître les règles générales de la circulation en agglomération",
        "Distinguer zone 30, zone de rencontre et aire piétonne",
        "Respecter les voies réservées aux bus et aux cyclistes",
        "Anticiper les double-sens cyclables",
        "Partager la rue avec les usagers vulnérables"
      ],
      sections: [
        {
          titre: "L'agglomération : un espace partagé",
          contenu: `<p>L'agglomération commence au panneau d'entrée <span class="panneau" data-code="EB10:Ville"></span> et se termine au panneau de sortie <span class="panneau" data-code="EB20:Ville"></span>. Ce n'est pas le nombre de maisons qui compte, mais ces panneaux. Entre les deux s'appliquent des règles particulières :</p>
<ul>
<li>la vitesse est limitée à <strong>50 km/h</strong>, sauf panneau contraire (30, 70…) ;</li>
<li>l'<strong>avertisseur sonore</strong> est interdit, sauf en cas de danger immédiat ;</li>
<li>les panneaux de danger sont placés à environ <strong>50 mètres</strong> du danger ;</li>
<li>l'arrêt et le stationnement se font sur la chaussée, côté droit, ou des deux côtés sur une voie à sens unique.</li>
</ul>
<p>La ville concentre les usagers vulnérables : piétons, enfants, personnes âgées, cyclistes, trottinettes, livreurs. Le conducteur d'un véhicule motorisé doit faire preuve d'une <strong>prudence accrue</strong> envers eux : c'est un principe inscrit dans le Code de la route.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le panneau d'entrée d'agglomération, et lui seul, déclenche la limite de 50 km/h et l'interdiction du klaxon hors danger immédiat.</div>`
        },
        {
          titre: "La zone 30",
          contenu: `<p>La <strong>zone 30</strong> <span class="panneau" data-code="ZONE30"></span> est un ensemble de rues où la vitesse est limitée à <strong>30 km/h</strong>. Elle commence au panneau d'entrée et se termine au panneau de sortie de zone (le même panneau barré). Elle vise à faire cohabiter tous les usagers sur la chaussée.</p>
<p>Dans une zone 30, sauf disposition contraire prise par le maire, <strong>toutes les chaussées sont à double sens pour les cyclistes</strong>, même lorsqu'elles sont à sens unique pour les voitures. Vous pouvez donc rencontrer un vélo en face dans une rue en sens unique.</p>
<p>Les piétons n'y sont pas prioritaires partout : ils doivent utiliser les trottoirs et traverser sur les passages piétons s'il en existe à moins de 50 mètres. Mais ils peuvent traverser à tout endroit si aucun passage n'est proche, et le conducteur doit toujours céder le passage au piéton qui s'engage régulièrement.</p>
<p>Les zones 30 sont souvent équipées de ralentisseurs <span class="panneau" data-code="C27"></span>, de plateaux surélevés, de chicanes ou de rétrécissements.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous entrez dans une rue à sens unique d'une zone 30. Un cycliste arrive en face, sur votre gauche, dans le couloir qui lui est réservé. Il circule régulièrement : serrez à droite et ralentissez.</div>`
        },
        {
          titre: "La zone de rencontre et l'aire piétonne",
          contenu: `<p>La <strong>zone de rencontre</strong> <span class="panneau" data-code="ZONE_REN"></span> est une rue ou un quartier où tous les usagers partagent l'espace. Les règles sont précises :</p>
<ul>
<li>la vitesse des véhicules est limitée à <strong>20 km/h</strong> ;</li>
<li>les <strong>piétons sont prioritaires</strong> sur tous les véhicules (sauf le tramway) et peuvent circuler sur la chaussée sans y stationner ;</li>
<li>toutes les chaussées sont à <strong>double sens pour les cyclistes</strong>, sauf décision contraire ;</li>
<li>le stationnement n'est autorisé que sur les emplacements aménagés.</li>
</ul>
<p>L'<strong>aire piétonne</strong> est réservée aux piétons. Seuls certains véhicules peuvent y entrer (desserte, livraisons, riverains, services publics), selon l'arrêté du maire. Ils circulent <strong>à l'allure du pas</strong> et cèdent la priorité aux piétons. Les cyclistes y sont admis, sauf interdiction, à l'allure du pas également. Le stationnement y est interdit, sauf pour les véhicules autorisés sur des emplacements prévus.</p>
<table>
<thead><tr><th>Zone</th><th>Vitesse maximale</th><th>Piétons prioritaires</th><th>Double sens cyclable</th></tr></thead>
<tbody>
<tr><td>Agglomération</td><td>50 km/h</td><td>Sur les passages et quand ils s'engagent</td><td>Selon signalisation</td></tr>
<tr><td>Zone 30</td><td>30 km/h</td><td>Sur les passages et quand ils s'engagent</td><td>Oui, par principe</td></tr>
<tr><td>Zone de rencontre</td><td>20 km/h</td><td>Oui, partout</td><td>Oui, par principe</td></tr>
<tr><td>Aire piétonne</td><td>Allure du pas</td><td>Oui, partout</td><td>Cyclistes admis au pas</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> en zone de rencontre, un piéton qui marche au milieu de la chaussée est dans son droit. C'est à vous d'adapter votre allure.</div>`
        },
        {
          titre: "Voies de bus, couloirs et voies réservées",
          contenu: `<p>Les <strong>voies réservées aux bus</strong> sont signalées par un marquage « BUS » au sol et une ligne large, continue ou discontinue. Elles sont interdites aux voitures pour la circulation, l'arrêt et le stationnement. Les taxis, les cyclistes ou d'autres véhicules peuvent y être autorisés par panneau.</p>
<p>Lorsque la ligne qui sépare la voie de bus est <strong>discontinue</strong>, vous pouvez la franchir pour tourner à droite ou pour accéder à une place de stationnement. Si elle est continue, vous ne pouvez pas la franchir.</p>
<p>Le panneau <span class="panneau" data-code="C24a"></span> indique des conditions particulières par voie, par exemple une voie réservée à certains véhicules ou une voie dont la vitesse est différente.</p>
<p>Les <strong>pistes cyclables</strong> (séparées de la chaussée) et les <strong>bandes cyclables</strong> (sur la chaussée, délimitées par une ligne) sont réservées aux cycles et, selon le cas, aux engins de déplacement personnel motorisés. Vous ne devez ni y circuler ni y stationner. Pour tourner à droite, vous coupez la bande cyclable en cédant le passage aux cyclistes qui y circulent.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> le bus qui quitte son arrêt en agglomération, après avoir mis son clignotant, bénéficie d'une priorité : vous devez ralentir et au besoin vous arrêter pour le laisser repartir.</div>`
        },
        {
          titre: "Le double-sens cyclable et les autres aménagements",
          contenu: `<p>Le <strong>double-sens cyclable</strong> permet aux cyclistes de circuler dans les deux sens d'une rue à sens unique pour les autres véhicules. Il est signalé par un panonceau « sauf cyclistes » sous le sens interdit <span class="panneau" data-code="B1"></span>, et par un panonceau vélo sous le panneau de sens unique <span class="panneau" data-code="C12"></span>. Il est généralisé dans les zones 30 et les zones de rencontre.</p>
<p>La <strong>chaussée à voie centrale banalisée</strong> (« chaucidou ») présente deux rives réservées aux cyclistes et une voie centrale partagée par les véhicules dans les deux sens. Vous roulez au centre et vous vous rabattez sur la rive, après avoir vérifié qu'aucun cycliste n'y circule, pour croiser un autre véhicule.</p>
<p>Le <strong>sas vélo</strong> est une zone tracée devant les feux, entre la ligne d'arrêt des véhicules motorisés et celle des cyclistes. Il permet aux cyclistes de démarrer en tête et d'être vus. Vous devez vous arrêter avant ce sas, sous peine d'amende.</p>
<p>La <strong>voie verte</strong> est réservée aux piétons, aux cyclistes, aux cavaliers et aux véhicules non motorisés. Les voitures n'y ont pas accès.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> sens interdit + panonceau « sauf cyclistes » = attendez-vous à rencontrer des vélos en face dans la rue où vous entrez par l'autre extrémité.</div>`
        },
        {
          titre: "Le comportement en ville",
          contenu: `<p>En ville, les situations changent très vite. Quelques règles de conduite permettent de les anticiper :</p>
<ul>
<li>regarder <strong>loin et large</strong> : entre les véhicules en stationnement, un enfant peut surgir ; une portière peut s'ouvrir ;</li>
<li>ralentir à l'approche des <strong>passages pour piétons</strong>, des écoles <span class="panneau" data-code="A13a"></span>, des arrêts de bus ;</li>
<li>laisser un <strong>écart d'au moins 1 mètre</strong> pour dépasser un cycliste ;</li>
<li>contrôler l'<strong>angle mort</strong> avant de tourner à droite, où un cycliste ou une trottinette peut se trouver ;</li>
<li>éviter les accélérations inutiles : en ville, elles font gagner très peu de temps et augmentent le risque, le bruit et la pollution.</li>
</ul>
<p>Les engins de déplacement personnel motorisés (trottinettes électriques, gyroroues) circulent sur les pistes et bandes cyclables lorsqu'il y en a, sinon sur la chaussée des routes limitées à 50 km/h au plus. Leur vitesse est bridée à 25 km/h.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un ballon roule sur la chaussée entre deux voitures garées. Vous freinez immédiatement : un enfant risque de le suivre.</div>`
        }
      ],
      points_cles: [
        "L'agglomération commence et finit aux panneaux d'entrée et de sortie",
        "En agglomération : 50 km/h et avertisseur sonore seulement en cas de danger immédiat",
        "Zone 30 : 30 km/h et double sens cyclable par principe",
        "Zone de rencontre : 20 km/h, piétons prioritaires partout, double sens cyclable",
        "Aire piétonne : véhicules autorisés seulement, à l'allure du pas",
        "Voie de bus : ligne discontinue franchissable pour tourner à droite",
        "Le sas vélo est réservé aux cyclistes : arrêt avant lui",
        "Le bus qui quitte son arrêt en agglomération doit pouvoir repartir"
      ],
      panneaux: ["EB10:Ville", "EB20:Ville", "ZONE30", "ZONE_REN", "C27", "C24a", "B1", "C12", "A13a"]
    },
    {
      id: "autoroute-tunnels-passages-niveau",
      theme: "L",
      titre: "Autoroutes, routes pour automobiles, tunnels et passages à niveau",
      duree: 25,
      objectifs: [
        "Connaître les règles propres aux autoroutes et routes pour automobiles",
        "Savoir quels usagers sont interdits sur autoroute",
        "Appliquer les règles de circulation dans les tunnels",
        "Franchir un passage à niveau en sécurité",
        "Réagir en cas de panne ou d'incident dans ces lieux"
      ],
      sections: [
        {
          titre: "L'autoroute : un régime particulier",
          contenu: `<p>L'autoroute commence au panneau <span class="panneau" data-code="C207"></span> et se termine au panneau <span class="panneau" data-code="C208"></span>. Entre les deux, des règles spécifiques s'appliquent. Elle est conçue pour une circulation rapide et sans intersection : les chaussées sont séparées, les accès se font par des bretelles et il n'y a ni feux, ni carrefours à niveau.</p>
<p>L'accès à l'autoroute est <strong>interdit</strong> notamment :</p>
<ul>
<li>aux <strong>piétons</strong> ;</li>
<li>aux <strong>cyclistes</strong> et aux engins de déplacement personnel ;</li>
<li>aux <strong>cyclomoteurs</strong> (50 cm³) et aux quadricycles légers (« voiturettes ») ;</li>
<li>aux tracteurs et matériels agricoles ;</li>
<li>aux véhicules remorqués par un moyen de fortune (corde, sangle).</li>
</ul>
<p>Les <strong>élèves conducteurs</strong> en apprentissage avec un enseignant ou en conduite accompagnée peuvent emprunter l'autoroute.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> sur autoroute, la vitesse maximale est de 130 km/h par temps sec, 110 km/h sous la pluie et pour les jeunes conducteurs, 50 km/h si la visibilité est inférieure à 50 m.</div>`
        },
        {
          titre: "Les interdictions sur autoroute",
          contenu: `<p>Sur l'autoroute, il est interdit :</p>
<ul>
<li>de faire <strong>demi-tour</strong>, de faire <strong>marche arrière</strong>, de traverser le terre-plein central ;</li>
<li>de <strong>s'arrêter</strong> ou de <strong>stationner</strong>, sauf en cas de nécessité absolue sur la bande d'arrêt d'urgence ou sur les aires prévues ;</li>
<li>de <strong>circuler sur la bande d'arrêt d'urgence</strong> (135 € et 3 points) ;</li>
<li>de dépasser par la droite en déboîtant à droite ;</li>
<li>de rouler à moins de <strong>80 km/h sur la voie la plus à gauche</strong>, lorsque la circulation est fluide, la visibilité suffisante et la chaussée sèche.</li>
</ul>
<p>Le péage se franchit à vitesse réduite, en choisissant la voie adaptée à votre mode de paiement (télépéage, carte, espèces) et en respectant les panneaux qui l'annoncent. Les aires de repos et de service sont les seuls endroits prévus pour une pause : arrêtez-vous au moins toutes les deux heures.</p>
<p>Si vous avez manqué votre sortie, vous continuez jusqu'à la suivante. Si vous constatez qu'un véhicule circule à contresens, alertez immédiatement les secours par le 112 ou par une borne d'appel d'urgence.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> sur la bretelle de sortie, la marche arrière est aussi interdite. Une sortie manquée ne se rattrape jamais en reculant.</div>`
        },
        {
          titre: "La route pour automobiles et la voie rapide",
          contenu: `<p>La <strong>route pour automobiles</strong> <span class="panneau" data-code="C107"></span> (souvent appelée voie express ou voie rapide) est une route à accès réglementé. Elle est soumise à des règles proches de celles de l'autoroute : interdiction aux piétons, cyclistes, cyclomoteurs, véhicules agricoles ; pas de demi-tour ni de marche arrière ; arrêt et stationnement interdits sur la chaussée. Elle comporte en général des accès sans intersection à niveau.</p>
<p>La vitesse maximale y dépend de sa configuration : <strong>110 km/h</strong> si les chaussées sont séparées par un terre-plein central, sinon <strong>80 km/h</strong> (ou la vitesse affichée). Un panneau de fin de route pour automobiles marque le retour aux règles ordinaires.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une 2 x 2 voies sans panneau C107 est une route ordinaire à chaussées séparées : 110 km/h, mais les tracteurs et les cyclistes peuvent y circuler sauf interdiction. Avec le panneau C107, ils en sont exclus.</div>`
        },
        {
          titre: "Les tunnels",
          contenu: `<p>Un tunnel est un lieu à risque particulier : en cas d'accident ou d'incendie, la fumée envahit rapidement l'espace et l'évacuation est difficile. Les règles sont donc strictes :</p>
<ul>
<li><strong>feux de croisement allumés</strong>, même si le tunnel est éclairé ;</li>
<li>respect des <strong>limitations de vitesse</strong> et des <strong>distances</strong> indiquées (marquages ou panneaux d'interdistance) ;</li>
<li>interdiction de <strong>s'arrêter</strong>, de <strong>stationner</strong>, de faire <strong>demi-tour</strong> et <strong>marche arrière</strong> ;</li>
<li>interdiction de dépasser lorsque la signalisation le prévoit ;</li>
<li>écoute recommandée de la radio indiquée à l'entrée pour recevoir les messages de sécurité.</li>
</ul>
<p>En cas de <strong>bouchon</strong>, gardez une distance d'au moins 5 mètres avec le véhicule qui précède et, si l'arrêt se prolonge, coupez le moteur.</p>
<p>En cas de <strong>panne</strong> : feux de détresse, rangez-vous au plus à droite ou dans un garage, coupez le moteur, enfilez le gilet et appelez depuis une niche de sécurité. En cas d'<strong>incendie</strong> : laissez la clé sur le véhicule, et évacuez à pied par les issues de secours, dans le sens opposé aux fumées.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> on n'attend jamais dans sa voiture lorsqu'un incendie se déclare dans un tunnel. La fumée tue plus vite que les flammes.</div>`
        },
        {
          titre: "Les passages à niveau",
          contenu: `<p>Le passage à niveau est le croisement d'une route et d'une voie ferrée. Le train est <strong>toujours prioritaire</strong> : il ne peut ni s'arrêter rapidement (plusieurs centaines de mètres, souvent plus d'un kilomètre), ni dévier.</p>
<p>Les passages à niveau peuvent être <strong>munis de barrières</strong> ou de demi-barrières, ou <strong>sans barrière</strong> (signalés alors par une croix de Saint-André). Beaucoup sont équipés de <strong>feux rouges clignotants</strong> et d'une sonnerie qui annoncent le train.</p>
<ul>
<li>Dès que les feux rouges clignotent, l'<strong>arrêt est obligatoire</strong>, même si les barrières ne sont pas encore baissées.</li>
<li>On ne s'engage que si l'on est certain de pouvoir <strong>dégager entièrement</strong> le passage : en cas d'encombrement à la sortie, on attend avant les voies.</li>
<li>L'arrêt et le stationnement sur le passage, ainsi que le <strong>dépassement</strong> à l'approche d'un passage sans barrière, sont interdits.</li>
<li>Après le passage d'un train, attendez l'extinction des feux : un second train peut arriver en sens inverse.</li>
</ul>
<p>Si votre véhicule s'immobilise sur les voies, faites sortir immédiatement tous les passagers, éloignez-vous des voies, et prévenez au plus vite à l'aide du téléphone d'urgence s'il existe, ou du 112.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> les barrières sont en train de se lever mais les feux clignotent toujours : vous restez à l'arrêt.</div>`
        },
        {
          titre: "Panneaux et repères à connaître",
          contenu: `<p>Plusieurs panneaux annoncent ces lieux particuliers :</p>
<ul>
<li><span class="panneau" data-code="C207"></span> début d'autoroute et <span class="panneau" data-code="C208"></span> fin d'autoroute ;</li>
<li><span class="panneau" data-code="C107"></span> route pour automobiles ;</li>
<li><span class="panneau" data-code="B25:80"></span> vitesse minimale, parfois imposée sur certaines voies ;</li>
<li><span class="panneau" data-code="C24a"></span> conditions particulières par voie (voie réservée, voie lente pour poids lourds) ;</li>
<li><span class="panneau" data-code="A14"></span> autre danger, complété par un panonceau (passage à niveau, travaux, bouchon).</li>
</ul>
<p>Sur autoroute, des <strong>bornes d'appel d'urgence</strong> sont installées environ tous les 2 kilomètres. Elles permettent d'être localisé immédiatement par les services d'exploitation. Une flèche sur les balises de bord indique la direction de la borne la plus proche.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> borne d'appel environ tous les 2 km sur autoroute ; à défaut, le 112 depuis un téléphone portable, en se plaçant à l'abri derrière la glissière.</div>`
        }
      ],
      points_cles: [
        "Autoroute interdite aux piétons, cyclistes, cyclomoteurs, voiturettes, engins agricoles",
        "Sur autoroute : ni demi-tour, ni marche arrière, ni arrêt sauf nécessité absolue",
        "Circuler sur la bande d'arrêt d'urgence : 135 € et 3 points",
        "Voie de gauche de l'autoroute : 80 km/h minimum en conditions normales",
        "Route pour automobiles : règles proches de l'autoroute, 110 km/h si chaussées séparées",
        "Tunnel : feux de croisement, distances, ni arrêt ni demi-tour ; évacuer à pied en cas d'incendie",
        "Passage à niveau : arrêt dès que les feux rouges clignotent ; ne s'engager que si l'on peut dégager",
        "Véhicule bloqué sur les voies : évacuer les passagers puis alerter"
      ],
      panneaux: ["C207", "C208", "C107", "B25:80", "C24a", "A14"]
    }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème L — questions L-001 à L-050 ───────────── */
  P.questions.push(
    { id: "L-001", chapitre: "signalisation-verticale", situation: "Vous circulez hors agglomération et apercevez ce panneau.", panneau: "A4",
      q: "Ce panneau m'annonce :", options: ["Une chaussée glissante", "Une route en travaux", "Un virage dangereux"], bonnes: [0],
      explication: "Le panneau A4 annonce une chaussée glissante. Hors agglomération, il est placé à environ 150 m du danger : ralentissez et évitez les freinages brusques." },
    { id: "L-002", chapitre: "signalisation-verticale", situation: "Hors agglomération, un panneau triangulaire à bord rouge apparaît au bord de la route.", panneau: "A1a",
      q: "Le danger annoncé se trouve à environ :", options: ["50 mètres", "150 mètres", "300 mètres"], bonnes: [1],
      explication: "Hors agglomération, les panneaux de danger sont implantés à environ 150 m du danger ; en agglomération, à environ 50 m. Un panonceau peut indiquer une autre distance." },
    { id: "L-003", chapitre: "signalisation-verticale", situation: "Vous roulez en agglomération et voyez ce panneau.", panneau: "A13a",
      q: "Je dois :", options: ["Ralentir", "Klaxonner pour prévenir les enfants", "Être prêt à m'arrêter", "Accélérer pour dégager la zone rapidement"], bonnes: [0, 2],
      explication: "Le panneau A13a signale un endroit fréquenté par les enfants : on ralentit et on se prépare à s'arrêter. En agglomération, l'avertisseur sonore est réservé aux dangers immédiats." },
    { id: "L-004", chapitre: "signalisation-verticale", panneau: "A13b",
      q: "Ce panneau est un panneau :", options: ["De danger", "D'indication", "D'obligation"], bonnes: [0],
      explication: "Triangulaire à bord rouge, le panneau A13b annonce un passage pour piétons à venir : c'est un panneau de danger. Le carré bleu C20a, lui, indique l'emplacement même du passage." },
    { id: "L-005", chapitre: "signalisation-verticale", panneau: "C20a",
      q: "Ce panneau indique :", options: ["L'emplacement d'un passage pour piétons", "Une zone piétonne", "Un chemin obligatoire pour piétons"], bonnes: [0],
      explication: "Le panneau carré bleu C20a est un panneau d'indication placé à l'endroit du passage pour piétons. Le chemin obligatoire pour piétons est un panneau rond bleu (B22b)." },
    { id: "L-006", chapitre: "signalisation-verticale", situation: "Vous apercevez ce panneau avant une intersection.", panneau: "B2a",
      q: "À la prochaine intersection, je peux :", options: ["Tourner à gauche", "Tourner à droite", "Aller tout droit"], bonnes: [1, 2],
      explication: "Le panneau B2a interdit de tourner à gauche à la prochaine intersection. Tourner à droite et continuer tout droit restent autorisés, sauf autre signalisation." },
    { id: "L-007", chapitre: "signalisation-verticale", panneau: "B2c",
      q: "Ce panneau m'interdit :", options: ["De faire demi-tour", "De tourner à gauche", "De faire marche arrière"], bonnes: [0],
      explication: "Le panneau B2c interdit de faire demi-tour jusqu'à la prochaine intersection incluse. Tourner à gauche reste possible." },
    { id: "L-008", chapitre: "signalisation-verticale", situation: "Vous avez dépassé ce panneau, puis vous franchissez une intersection. Aucun autre panneau n'est visible.", panneau: "B14:70",
      q: "Après l'intersection, la limitation à 70 km/h :", options: ["S'applique toujours", "Ne s'applique plus"], bonnes: [1],
      explication: "Une limitation de vitesse cesse à la prochaine intersection si elle n'est pas répétée. Vous revenez alors à la vitesse de la réglementation générale." },
    { id: "L-009", chapitre: "signalisation-verticale", situation: "Hors agglomération, sur une route à double sens sans séparateur central, vous passez ce panneau.", panneau: "B33:70",
      q: "Par temps sec, je peux désormais rouler au maximum à :", options: ["70 km/h", "80 km/h", "90 km/h", "La vitesse de mon choix"], bonnes: [1],
      explication: "Le panneau B33 met fin à la limitation à 70 km/h. La règle générale reprend : 80 km/h sur une route bidirectionnelle hors agglomération, sauf panneau de relèvement à 90 km/h." },
    { id: "L-010", chapitre: "signalisation-verticale", panneau: "B31",
      q: "Ce panneau marque la fin :", options: ["De toutes les interdictions précédemment signalées", "De l'agglomération", "De la route prioritaire"], bonnes: [0],
      explication: "Le panneau B31 (rond blanc barré de plusieurs traits noirs) met fin à toutes les interdictions signalées auparavant pour les véhicules en mouvement, comme les limitations de vitesse ou les interdictions de dépasser." },
    { id: "L-011", chapitre: "signalisation-verticale", panneau: "B25:30",
      q: "Ce panneau m'impose :", options: ["De ne pas dépasser 30 km/h", "De ne pas rouler à moins de 30 km/h, si les conditions le permettent", "De rouler exactement à 30 km/h"], bonnes: [1],
      explication: "Le rond bleu à chiffre blanc indique une vitesse minimale obligatoire. Il ne faut pas confondre avec le rond rouge à chiffre noir, qui fixe une vitesse maximale." },
    { id: "L-012", chapitre: "signalisation-verticale", situation: "Vous arrivez face à ce panneau.", panneau: "B1",
      q: "Je peux m'engager dans cette voie :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Le panneau B1 est un sens interdit à tout véhicule. Seuls les usagers désignés par un panonceau (par exemple « sauf cyclistes ») peuvent l'emprunter." },
    { id: "L-013", chapitre: "signalisation-verticale", panneau: "B0",
      q: "Ce panneau interdit la circulation :", options: ["À tout véhicule, dans les deux sens", "Aux seuls poids lourds", "Dans un seul sens"], bonnes: [0],
      explication: "Le panneau B0 (rond blanc à bord rouge, vide) interdit la circulation à tout véhicule dans les deux sens. Les piétons qui conduisent un vélo à la main restent autorisés." },
    { id: "L-014", chapitre: "signalisation-verticale", situation: "Sur une route nationale, un panneau à fond jaune indique une limitation à 50 km/h. Juste à côté, un panneau permanent indique 70 km/h.", panneau: "B14:50",
      q: "Je respecte la limite de :", options: ["50 km/h", "70 km/h"], bonnes: [0],
      explication: "La signalisation temporaire (fond jaune) prime sur la signalisation permanente. On respecte donc la limitation provisoire à 50 km/h." },
    { id: "L-015", chapitre: "signalisation-verticale", situation: "Un agent de police règle la circulation à un carrefour. Il vous fait signe de passer alors que votre feu est rouge.",
      q: "Je dois :", options: ["Attendre le feu vert", "Obéir à l'agent et passer", "Klaxonner pour prévenir les autres usagers"], bonnes: [1],
      explication: "Les injonctions d'un agent priment sur toute autre signalisation, y compris les feux. Vous passez en restant attentif." },
    { id: "L-016", chapitre: "signalisation-verticale", panneau: "B21_1",
      q: "Ce panneau m'impose de :", options: ["Tourner à droite avant le panneau", "Tourner à droite après le panneau", "Contourner un obstacle par la droite"], bonnes: [0],
      explication: "Le panneau B21-1 oblige à tourner à droite avant le panneau. Le contournement par la droite est indiqué par une flèche oblique vers le bas (B21a1)." },
    { id: "L-017", chapitre: "signalisation-verticale", situation: "Vous sortez d'une commune et passez ce panneau.", panneau: "EB20:Ville",
      q: "Ce panneau m'indique :", options: ["La fin de l'agglomération", "La fin des règles propres à l'agglomération", "La fin de toute limitation de vitesse"], bonnes: [0, 1],
      explication: "Le panneau de sortie d'agglomération met fin aux règles de l'agglomération (50 km/h, avertisseur sonore limité). Les vitesses hors agglomération s'appliquent alors : la vitesse reste limitée." },
    { id: "L-018", chapitre: "signalisation-verticale", panneau: "C12",
      q: "Ce panneau carré bleu est un panneau :", options: ["D'indication", "D'obligation", "D'interdiction"], bonnes: [0],
      explication: "Le panneau C12 indique une circulation à sens unique. Les panneaux carrés ou rectangulaires bleus sont des panneaux d'indication ; les ronds bleus, d'obligation." },
    { id: "L-019", chapitre: "feux-marquages", situation: "Vous arrivez à un carrefour. Le feu passe à l'orange alors que vous êtes encore à 40 mètres, à 50 km/h, sans personne derrière vous.", panneau: "FEU_ORANGE",
      q: "Je dois :", options: ["M'arrêter", "Accélérer pour passer", "Passer à vitesse constante"], bonnes: [0],
      explication: "Le feu orange fixe impose l'arrêt, sauf si l'arrêt ne peut se faire dans des conditions de sécurité suffisantes. À 40 m et 50 km/h, sans véhicule derrière, l'arrêt est possible." },
    { id: "L-020", chapitre: "feux-marquages", situation: "Le feu est vert, mais le carrefour est encombré : des voitures sont arrêtées juste après l'intersection.", panneau: "FEU_VERT",
      q: "Je m'engage dans le carrefour :", options: ["Oui, car le feu est vert", "Non, j'attends que la sortie se libère"], bonnes: [1],
      explication: "Il est interdit de s'engager dans une intersection si l'on risque d'y être immobilisé et d'empêcher le passage des véhicules circulant sur les autres voies, même au feu vert." },
    { id: "L-021", chapitre: "feux-marquages", situation: "À un carrefour, le feu est jaune clignotant. Aucun panneau n'est visible. Une voiture arrive par votre droite.", panneau: "FEU_CLIGNOTANT",
      q: "Je dois laisser passer cette voiture :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Le feu jaune clignotant autorise le passage avec prudence mais ne donne aucune priorité. Sans panneau, la priorité à droite s'applique." },
    { id: "L-022", chapitre: "feux-marquages", situation: "Le feu tricolore est rouge. Une flèche jaune clignote vers la droite à côté du feu. Des piétons traversent la rue dans laquelle vous voulez tourner.", panneau: "FEU_ROUGE",
      q: "Je peux tourner à droite :", options: ["Immédiatement", "Après avoir laissé passer les piétons", "Seulement quand le feu passe au vert"], bonnes: [1],
      explication: "La flèche jaune clignotante autorise à franchir le feu dans le sens indiqué en cédant le passage aux piétons et aux véhicules qui circulent sur la voie à rejoindre." },
    { id: "L-023", chapitre: "feux-marquages",
      q: "Ne pas respecter un feu rouge entraîne un retrait de :", options: ["2 points", "3 points", "4 points", "6 points"], bonnes: [2],
      explication: "Le franchissement d'un feu rouge est puni d'une amende forfaitaire de 135 € et d'un retrait de 4 points, avec une suspension possible du permis." },
    { id: "L-024", chapitre: "feux-marquages", situation: "Vous tournez à droite au feu vert. Le bonhomme du feu piéton de la rue où vous entrez est également vert.", panneau: "FEU_PIETON_VERT",
      q: "Je dois :", options: ["Céder le passage aux piétons qui traversent", "Passer car mon feu est vert", "Klaxonner pour qu'ils se pressent"], bonnes: [0],
      explication: "Quand vous changez de direction, vous devez céder le passage aux piétons qui traversent régulièrement la chaussée que vous allez emprunter, même si votre feu est vert." },
    { id: "L-025", chapitre: "feux-marquages", situation: "Une ligne continue sépare les deux sens de circulation.", panneau: "LIGNE_CONTINUE",
      q: "Je peux la chevaucher pour mieux voir devant moi :", options: ["Oui", "Non"], bonnes: [1],
      explication: "La ligne continue ne doit être ni franchie ni chevauchée. Cette infraction coûte 135 € et 3 points." },
    { id: "L-026", chapitre: "feux-marquages", situation: "La ligne qui sépare les sens de circulation est mixte : discontinue de votre côté, continue de l'autre.", panneau: "LIGNE_MIXTE",
      q: "Je peux la franchir pour dépasser :", options: ["Oui, si la manœuvre est sans danger", "Non, jamais"], bonnes: [0],
      explication: "Avec une ligne mixte, on tient compte de la ligne la plus proche de soi. Discontinue de votre côté : vous pouvez franchir si le dépassement est sans danger." },
    { id: "L-027", chapitre: "feux-marquages", situation: "Vous arrivez à une intersection où la ligne transversale est discontinue. Personne n'arrive sur la route principale.", panneau: "LIGNE_CEDEZ",
      q: "Je suis obligé de marquer l'arrêt :", options: ["Oui", "Non"], bonnes: [1],
      explication: "La ligne transversale discontinue est une ligne de cédez-le-passage : on ne s'arrête que si un usager prioritaire arrive. Une ligne continue imposerait l'arrêt (stop ou feu)." },
    { id: "L-028", chapitre: "feux-marquages", situation: "Une ligne transversale continue est tracée à l'intersection, avec un panneau stop.", panneau: "LIGNE_STOP",
      q: "Je dois m'arrêter :", options: ["Avant la ligne", "Sur la ligne", "Seulement si un véhicule arrive"], bonnes: [0],
      explication: "Au stop, l'arrêt est obligatoire même sans trafic, et il se fait à la limite de la chaussée abordée, matérialisée par la ligne continue : avant la ligne." },
    { id: "L-029", chapitre: "feux-marquages", situation: "Dans une zone de travaux, des lignes jaunes dévient votre voie, alors que d'anciennes lignes blanches sont encore visibles.",
      q: "Je suis :", options: ["Les lignes jaunes", "Les lignes blanches"], bonnes: [0],
      explication: "Les marquages jaunes sont temporaires et priment sur les marquages blancs permanents." },
    { id: "L-030", chapitre: "feux-marquages", situation: "Au feu rouge, un sas vélo est tracé entre la ligne d'arrêt des voitures et le feu. Il est vide.",
      q: "Je peux m'arrêter dans le sas :", options: ["Oui, puisqu'il est vide", "Non, il est réservé aux cyclistes"], bonnes: [1],
      explication: "Le sas vélo est réservé aux cyclistes (et, selon le cas, aux engins de déplacement personnel). La voiture s'arrête à la première ligne d'arrêt, même si le sas est vide." },
    { id: "L-031", chapitre: "feux-marquages", situation: "Des flèches de rabattement apparaissent sur la ligne discontinue qui sépare les sens de circulation.",
      q: "Ces flèches m'indiquent :", options: ["Que je dois me rabattre", "Qu'une ligne continue va suivre", "Que je peux commencer un dépassement"], bonnes: [0, 1],
      explication: "Les flèches de rabattement annoncent qu'il faut regagner sa voie, en général parce qu'une ligne continue ou un rétrécissement arrive. Ce n'est pas le moment de commencer un dépassement." },
    { id: "L-032", chapitre: "feux-marquages", situation: "Le feu est vert. Un piéton a commencé à traverser au bonhomme vert, mais son feu vient de passer au rouge ; il est encore sur la chaussée.", panneau: "FEU_PIETON_ROUGE",
      q: "Je peux démarrer avant qu'il ait fini de traverser :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Un piéton engagé doit pouvoir terminer sa traversée. Le feu vert ne vous autorise jamais à mettre un piéton en danger." },
    { id: "L-033", chapitre: "feux-marquages", situation: "Les feux d'un carrefour sont éteints. Un panneau stop est implanté sous le feu de votre voie.",
      q: "Je dois :", options: ["Appliquer la priorité à droite", "Respecter le stop", "Passer prudemment sans m'arrêter"], bonnes: [1],
      explication: "Quand les feux sont éteints ou clignotent en jaune, ce sont les panneaux qui s'appliquent. Ici, le stop impose l'arrêt." },
    { id: "L-034", chapitre: "feux-marquages", situation: "Au-dessus de la voie de gauche d'un pont, une croix rouge est allumée ; au-dessus de la voie de droite, une flèche verte pointe vers le bas.",
      q: "Je peux circuler :", options: ["Sur la voie de gauche", "Sur la voie de droite"], bonnes: [1],
      explication: "Sur les voies à affectation variable, la croix rouge interdit d'emprunter la voie, la flèche verte l'autorise." },
    { id: "L-035", chapitre: "intersections-priorites", situation: "Vous arrivez à un carrefour sans aucun panneau ni marquage. Un cycliste arrive par votre droite.",
      q: "Je dois le laisser passer :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Sans signalisation, la priorité à droite s'applique à tous les véhicules, y compris aux cyclistes." },
    { id: "L-036", chapitre: "intersections-priorites", situation: "Vous circulez sur une large avenue. Une petite rue sans signalisation débouche sur votre droite, d'où une voiture va sortir.",
      q: "La voiture qui sort de la petite rue :", options: ["Est prioritaire", "Doit me céder le passage", "Doit s'arrêter car la rue est plus petite"], bonnes: [0],
      explication: "La largeur de la route ne compte pas : sans signalisation, la priorité à droite s'applique. La voiture venant de droite est prioritaire." },
    { id: "L-037", chapitre: "intersections-priorites", situation: "Un véhicule sort d'un chemin de terre sur votre droite.",
      q: "Ce véhicule doit me céder le passage :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Un usager qui débouche d'un chemin de terre, d'un accès privé, d'un parking ou d'une station-service doit céder le passage à tous. La priorité à droite ne s'applique pas." },
    { id: "L-038", chapitre: "intersections-priorites", situation: "Vous apercevez ce panneau à l'approche d'une intersection.", panneau: "AB2",
      q: "À la prochaine intersection, je suis :", options: ["Prioritaire", "Non prioritaire", "Soumis à la priorité à droite"], bonnes: [0],
      explication: "Le panneau AB2 annonce une intersection où les usagers des routes latérales doivent vous céder le passage. Il ne vaut que pour cette intersection." },
    { id: "L-039", chapitre: "intersections-priorites", panneau: "AB1",
      q: "Ce panneau m'annonce :", options: ["Une intersection où la priorité à droite s'applique", "Une route prioritaire", "Un carrefour à sens giratoire"], bonnes: [0],
      explication: "Le panneau AB1 (croix noire dans un triangle) annonce une intersection où vous devez céder le passage aux véhicules venant de droite." },
    { id: "L-040", chapitre: "intersections-priorites", situation: "Vous arrivez à ce panneau. La route que vous abordez est parfaitement dégagée sur une longue distance.", panneau: "AB4",
      q: "Je dois marquer l'arrêt :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Au stop, l'arrêt est obligatoire en toutes circonstances, même si aucun véhicule n'est visible. Le non-respect coûte 135 € et 4 points." },
    { id: "L-041", chapitre: "intersections-priorites", situation: "Vous êtes arrêté à ce panneau. Une voiture arrive par la gauche et une autre par la droite sur la route que vous abordez.", panneau: "AB3a",
      q: "Je dois laisser passer :", options: ["La voiture de gauche", "La voiture de droite", "Aucune des deux"], bonnes: [0, 1],
      explication: "Au cédez-le-passage, vous devez laisser passer tous les usagers circulant sur la route abordée, qu'ils viennent de gauche ou de droite." },
    { id: "L-042", chapitre: "intersections-priorites", situation: "Vous circulez depuis plusieurs kilomètres après avoir passé ce panneau. Vous arrivez à une nouvelle intersection, sans autre panneau.", panneau: "AB6",
      q: "À cette intersection, je suis :", options: ["Prioritaire", "Soumis à la priorité à droite"], bonnes: [0],
      explication: "Le panneau AB6 indique une route à caractère prioritaire : vous êtes prioritaire à toutes les intersections jusqu'au panneau de fin AB7." },
    { id: "L-043", chapitre: "intersections-priorites", situation: "Vous venez de passer ce panneau. Une voiture débouche d'une route à votre droite à la prochaine intersection, sans panneau.", panneau: "AB7",
      q: "Je dois lui céder le passage :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Le panneau AB7 marque la fin de la route prioritaire. Sauf autre signalisation, la priorité à droite s'applique de nouveau." },
    { id: "L-044", chapitre: "intersections-priorites", situation: "Vous arrivez à un carrefour annoncé par ce panneau, avec un cédez-le-passage à l'entrée. Un véhicule circule déjà dans l'anneau, sur votre gauche.", panneau: "AB25",
      q: "Je dois :", options: ["Le laisser passer", "Passer, car il vient de ma gauche", "M'arrêter obligatoirement, même si personne n'arrive"], bonnes: [0],
      explication: "Au giratoire signalé avec un cédez-le-passage, les véhicules déjà engagés dans l'anneau sont prioritaires. L'arrêt n'est obligatoire que si un véhicule arrive." },
    { id: "L-045", chapitre: "intersections-priorites", situation: "Vous voulez prendre la première sortie d'un carrefour giratoire.",
      q: "Je me place :", options: ["Sur la voie de droite", "Sur la voie de gauche", "Indifféremment"], bonnes: [0],
      explication: "Pour prendre la première sortie, on reste sur la voie de droite et on met le clignotant à droite dès l'entrée." },
    { id: "L-046", chapitre: "intersections-priorites", situation: "Dans votre rétroviseur, une voiture de pompiers arrive, feux bleus allumés et avertisseur deux tons en marche.",
      q: "Je dois :", options: ["Lui céder le passage", "Me ranger sur le côté si possible", "Accélérer pour lui ouvrir la voie", "Continuer normalement"], bonnes: [0, 1],
      explication: "Les véhicules d'intérêt général prioritaires (feux bleus et deux tons) doivent pouvoir passer : vous vous rangez et vous vous arrêtez si nécessaire, sans créer de danger." },
    { id: "L-047", chapitre: "intersections-priorites", situation: "Une dépanneuse, feu spécial orange allumé, arrive derrière vous.",
      q: "Ce véhicule :", options: ["Est prioritaire aux intersections", "Bénéficie de facilités de passage", "Doit être laissé passer si cela est possible"], bonnes: [1, 2],
      explication: "Le feu orange signale un véhicule bénéficiant de facilités de passage : vous lui facilitez la circulation, mais il n'est pas prioritaire aux intersections." },
    { id: "L-048", chapitre: "intersections-priorites", situation: "Au feu vert, vous voulez tourner à gauche. Une voiture arrive en face et va tout droit.",
      q: "Je peux tourner avant elle :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Pour tourner à gauche, vous devez laisser passer les véhicules arrivant en face qui vont tout droit ou à droite." },
    { id: "L-049", chapitre: "intersections-priorites", situation: "Quatre voitures arrivent simultanément à un carrefour sans signalisation, une par chaque route.",
      q: "Pour débloquer la situation :", options: ["Un conducteur doit renoncer à sa priorité", "Le premier qui klaxonne passe", "La voiture la plus grosse passe en premier"], bonnes: [0],
      explication: "Chaque conducteur a quelqu'un à sa droite : la situation est bloquée. L'un d'eux doit renoncer clairement à sa priorité, en communiquant avec les autres." },
    { id: "L-050", chapitre: "intersections-priorites", situation: "Vous sortez d'un parking de supermarché pour rejoindre la rue. Une voiture arrive par votre gauche.",
      q: "Je dois la laisser passer :", options: ["Oui", "Non, elle vient de ma gauche"], bonnes: [0],
      explication: "Celui qui quitte un parking, une propriété ou une station-service doit céder le passage à tous les usagers de la route." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème L — questions L-051 à L-103 ───────────── */
  P.questions.push(
    { id: "L-051", chapitre: "vitesses-maximales", situation: "Vous roulez sur autoroute par temps sec. Vous avez votre permis depuis 5 ans.", panneau: "C207",
      q: "La vitesse maximale autorisée est de :", options: ["110 km/h", "120 km/h", "130 km/h"], bonnes: [2],
      explication: "Sur autoroute, par temps sec, la vitesse maximale est de 130 km/h. Elle passe à 110 km/h en cas de pluie et pour les conducteurs en permis probatoire." },
    { id: "L-052", chapitre: "vitesses-maximales", situation: "Il pleut. Vous circulez sur autoroute.",
      q: "La vitesse maximale est de :", options: ["90 km/h", "100 km/h", "110 km/h", "130 km/h"], bonnes: [2],
      explication: "Par temps de pluie ou d'autres précipitations, la vitesse est limitée à 110 km/h sur autoroute." },
    { id: "L-053", chapitre: "vitesses-maximales", situation: "Hors agglomération, sur une route à double sens sans séparateur central et sans panneau de limitation. Il pleut.",
      q: "Je peux rouler au maximum à :", options: ["60 km/h", "70 km/h", "80 km/h"], bonnes: [1],
      explication: "Sur une route bidirectionnelle limitée à 80 km/h, la vitesse maximale est abaissée à 70 km/h par temps de pluie." },
    { id: "L-054", chapitre: "vitesses-maximales", situation: "Sur une route à deux chaussées séparées par un terre-plein central, vous êtes en permis probatoire. Il fait beau.",
      q: "La vitesse maximale est de :", options: ["90 km/h", "100 km/h", "110 km/h"], bonnes: [1],
      explication: "Sur les routes à chaussées séparées limitées à 110 km/h, les conducteurs en permis probatoire sont limités à 100 km/h." },
    { id: "L-055", chapitre: "vitesses-maximales", situation: "Un brouillard épais réduit la visibilité à 40 mètres. Vous êtes sur autoroute.",
      q: "Je ne dois pas dépasser :", options: ["50 km/h", "70 km/h", "90 km/h", "110 km/h"], bonnes: [0],
      explication: "Lorsque la visibilité est inférieure à 50 mètres, la vitesse est limitée à 50 km/h sur toutes les routes, autoroute comprise." },
    { id: "L-056", chapitre: "vitesses-maximales", situation: "Vous avez votre permis depuis un an. Vous circulez sur une route départementale où ce panneau a été installé.", panneau: "B14:90",
      q: "Je peux rouler au maximum à :", options: ["70 km/h", "80 km/h", "90 km/h"], bonnes: [1],
      explication: "En permis probatoire, la vitesse est limitée à 80 km/h sur les routes hors agglomération autres que les autoroutes et les routes à chaussées séparées, même relevées à 90 km/h." },
    { id: "L-057", chapitre: "vitesses-maximales", situation: "Vous entrez dans cette commune un jour de pluie.", panneau: "EB10:Ville",
      q: "La vitesse maximale autorisée est de :", options: ["30 km/h", "40 km/h", "50 km/h"], bonnes: [2],
      explication: "En agglomération, la vitesse est limitée à 50 km/h, par temps sec comme par temps de pluie, sauf panneau contraire." },
    { id: "L-058", chapitre: "vitesses-maximales", panneau: "ZONE_REN",
      q: "Dans cette zone, la vitesse maximale est de :", options: ["10 km/h", "20 km/h", "30 km/h"], bonnes: [1],
      explication: "La zone de rencontre est limitée à 20 km/h et les piétons y sont prioritaires sur les véhicules." },
    { id: "L-059", chapitre: "vitesses-maximales", situation: "Vous circulez à 100 km/h, puis à 50 km/h.",
      q: "Par rapport à 50 km/h, la distance de freinage à 100 km/h est environ :", options: ["Deux fois plus longue", "Trois fois plus longue", "Quatre fois plus longue"], bonnes: [2],
      explication: "La distance de freinage est proportionnelle au carré de la vitesse : doubler la vitesse la multiplie environ par quatre." },
    { id: "L-060", chapitre: "vitesses-maximales",
      q: "Un excès de vitesse de 35 km/h entraîne un retrait de :", options: ["2 points", "3 points", "4 points"], bonnes: [1],
      explication: "Un excès compris entre 30 et moins de 40 km/h est puni d'un retrait de 3 points et d'une amende forfaitaire de 135 €, avec une suspension possible du permis." },
    { id: "L-061", chapitre: "vitesses-maximales",
      q: "Un excès de vitesse de 50 km/h ou plus entraîne un retrait de :", options: ["4 points", "6 points", "8 points"], bonnes: [1],
      explication: "Un grand excès de vitesse (50 km/h et plus) entraîne un retrait de 6 points, avec des sanctions lourdes : amende élevée, suspension, confiscation possible du véhicule." },
    { id: "L-062", chapitre: "vitesses-maximales", situation: "Vous circulez sur une route limitée à 80 km/h. Il fait nuit, il pleut fort et la chaussée est couverte de feuilles mortes.",
      q: "Rouler à 70 km/h :", options: ["Est forcément adapté puisque c'est la limite par temps de pluie", "Peut être trop rapide : je dois adapter ma vitesse aux circonstances"], bonnes: [1],
      explication: "Les vitesses réglementaires sont des maximums. Le conducteur doit rester maître de sa vitesse et la régler selon l'état de la chaussée, la visibilité et les obstacles prévisibles." },
    { id: "L-063", chapitre: "vitesses-maximales", situation: "Vous arrivez à ce panneau.", panneau: "ZONE30",
      q: "Dans cette zone :", options: ["La vitesse est limitée à 30 km/h", "Je peux rencontrer des cyclistes à contresens dans les rues à sens unique", "Les piétons sont prioritaires partout"], bonnes: [0, 1],
      explication: "En zone 30, la vitesse est limitée à 30 km/h et les rues à sens unique sont, par principe, à double sens pour les cyclistes. La priorité absolue des piétons concerne la zone de rencontre." },
    { id: "L-064", chapitre: "vitesses-maximales", situation: "Vous roulez à 140 km/h sur une route départementale limitée à 90 km/h.",
      q: "Les forces de l'ordre peuvent :", options: ["Retenir immédiatement mon permis", "Me retirer 6 points", "Seulement me donner un avertissement"], bonnes: [0, 1],
      explication: "Un excès de 50 km/h est un grand excès de vitesse : retrait de 6 points et rétention immédiate du permis possible, suivie d'une suspension." },
    { id: "L-065", chapitre: "depassement-croisement", situation: "Vous apercevez ce panneau. Devant vous, un motocycliste roule lentement ; la ligne médiane est discontinue et la voie d'en face est libre.", panneau: "B3",
      q: "Je peux dépasser la moto :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Le panneau B3 interdit de dépasser les véhicules à moteur autres que les deux-roues sans side-car. Une moto peut donc être dépassée, si la ligne est discontinue et la manœuvre sans danger." },
    { id: "L-066", chapitre: "depassement-croisement", situation: "Vous suivez une voiture après ce panneau. La ligne médiane est discontinue.", panneau: "B3",
      q: "Je peux dépasser la voiture :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Le panneau B3 interdit de dépasser tous les véhicules à moteur autres que les deux-roues, jusqu'au panneau de fin d'interdiction ou à la prochaine intersection." },
    { id: "L-067", chapitre: "depassement-croisement", panneau: "B34",
      q: "Ce panneau signifie :", options: ["Fin d'interdiction de dépasser", "Interdiction de dépasser pour les poids lourds", "Fin de route prioritaire"], bonnes: [0],
      explication: "Le panneau B34 met fin à l'interdiction de dépasser signalée par le panneau B3." },
    { id: "L-068", chapitre: "depassement-croisement", situation: "Hors agglomération, vous voulez dépasser un cycliste.",
      q: "Je dois laisser un écart latéral d'au moins :", options: ["0,50 m", "1 m", "1,50 m", "2 m"], bonnes: [2],
      explication: "Hors agglomération, l'écart latéral minimal pour dépasser un cycliste est de 1,50 m ; en agglomération, il est de 1 m." },
    { id: "L-069", chapitre: "depassement-croisement", situation: "Vous approchez d'un sommet de côte. La ligne est discontinue et vous ne voyez pas ce qui arrive de l'autre côté. Un tracteur roule devant vous.",
      q: "Je dépasse le tracteur maintenant :", options: ["Oui, la ligne est discontinue", "Non, la visibilité est insuffisante"], bonnes: [1],
      explication: "Le dépassement est interdit à l'approche d'un sommet de côte lorsque la visibilité est insuffisante. Une ligne discontinue ne garantit jamais que la manœuvre est sans danger." },
    { id: "L-070", chapitre: "depassement-croisement", situation: "Le conducteur devant vous a mis son clignotant gauche et s'est placé près de l'axe médian pour tourner.",
      q: "Je peux le dépasser :", options: ["Par la gauche", "Par la droite, s'il y a la place", "Je ne peux pas le dépasser"], bonnes: [1],
      explication: "Un véhicule qui a signalé son intention de tourner à gauche et s'est déporté à gauche se dépasse par la droite, si l'espace le permet." },
    { id: "L-071", chapitre: "depassement-croisement", situation: "Un véhicule est en train de vous dépasser sur une route bidirectionnelle.",
      q: "Je dois :", options: ["Serrer à droite", "Ne pas accélérer", "Accélérer pour qu'il se rabatte plus vite"], bonnes: [0, 1],
      explication: "Quand on est dépassé, on facilite la manœuvre : on serre à droite et on ne doit pas accélérer. Si le dépassement tourne mal, on ralentit pour laisser l'autre se rabattre." },
    { id: "L-072", chapitre: "depassement-croisement", situation: "Sur une route de montagne étroite, vous descendez. Une voiture monte en face ; le croisement est impossible.",
      q: "Qui doit manœuvrer le premier ?", options: ["Moi, qui descends", "La voiture qui monte"], bonnes: [0],
      explication: "En montagne, c'est le véhicule descendant qui doit s'arrêter ou reculer le premier, sauf s'il est plus facile au véhicule montant de rejoindre un refuge tout proche." },
    { id: "L-073", chapitre: "depassement-croisement", situation: "Une camionnette en panne occupe votre voie. Une voiture arrive en face et la chaussée est trop étroite pour passer à deux.",
      q: "Je dois :", options: ["Laisser passer la voiture d'en face", "Passer le premier car j'arrive avant"], bonnes: [0],
      explication: "Lorsque l'obstacle se trouve dans votre voie, c'est vous qui devez céder le passage au véhicule qui arrive en sens inverse." },
    { id: "L-074", chapitre: "depassement-croisement", situation: "À l'approche d'un passage pour piétons, la voiture devant vous s'arrête pour laisser traverser un piéton.",
      q: "Je peux la dépasser :", options: ["Oui, en ralentissant", "Non"], bonnes: [1],
      explication: "Il est interdit de dépasser un véhicule qui s'est arrêté pour laisser passer un piéton : le piéton est masqué et risque d'être renversé." },
    { id: "L-075", chapitre: "depassement-croisement", situation: "Vous suivez un tramway qui circule sur la chaussée, dans une rue à double sens. Il y a suffisamment d'espace à sa droite.",
      q: "Je le dépasse :", options: ["Par la droite", "Par la gauche"], bonnes: [0],
      explication: "Le tramway se dépasse par la droite si l'espace est suffisant. Le dépassement par la gauche n'est permis que dans une rue à sens unique ou si l'espace à droite est insuffisant." },
    { id: "L-076", chapitre: "depassement-croisement", situation: "La nuit, un véhicule vous dépasse. Vos feux de route sont allumés.",
      q: "Je passe en feux de croisement :", options: ["Dès qu'il arrive à ma hauteur", "Seulement quand il s'est rabattu", "Jamais, c'est à lui de s'adapter"], bonnes: [0],
      explication: "Pour ne pas éblouir le conducteur qui vous dépasse dans ses rétroviseurs, vous passez en feux de croisement dès qu'il arrive à votre hauteur." },
    { id: "L-077", chapitre: "arret-stationnement", situation: "Vous voulez déposer un passager à cet endroit, en restant au volant.", panneau: "B6a1",
      q: "Je peux m'arrêter :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Le panneau B6a1 interdit le stationnement mais pas l'arrêt. Déposer un passager en restant au volant est un arrêt." },
    { id: "L-078", chapitre: "arret-stationnement", situation: "Vous voulez déposer un passager à cet endroit.", panneau: "B6d",
      q: "Je peux m'arrêter :", options: ["Oui, très brièvement", "Non"], bonnes: [1],
      explication: "Le panneau B6d interdit à la fois l'arrêt et le stationnement, du côté de la chaussée où il est implanté." },
    { id: "L-079", chapitre: "arret-stationnement", situation: "En agglomération, vous voulez stationner dans une rue à sens unique.", panneau: "C12",
      q: "Je peux stationner :", options: ["Du côté droit", "Du côté gauche", "Au milieu de la chaussée"], bonnes: [0, 1],
      explication: "En agglomération, sur une chaussée à sens unique, l'arrêt et le stationnement sont autorisés à droite comme à gauche, sauf signalisation contraire." },
    { id: "L-080", chapitre: "arret-stationnement",
      q: "Parmi ces stationnements, lesquels sont très gênants ?", options: ["Sur un trottoir", "Sur un passage pour piétons", "Sur une place réservée aux personnes handicapées, sans carte", "Devant chez moi, sur une place autorisée"], bonnes: [0, 1, 2],
      explication: "Le stationnement sur un trottoir, un passage piéton ou une place réservée aux personnes handicapées est très gênant : 135 € et enlèvement possible." },
    { id: "L-081", chapitre: "arret-stationnement", situation: "Vous vous arrêtez à proximité immédiate d'un virage sans visibilité, hors agglomération, sur la chaussée.",
      q: "Cet arrêt est :", options: ["Gênant", "Dangereux", "Autorisé si les feux de détresse sont allumés"], bonnes: [1],
      explication: "L'arrêt ou le stationnement près d'un virage, d'un sommet de côte ou d'une intersection, quand la visibilité est insuffisante, est dangereux : 135 € et 3 points." },
    { id: "L-082", chapitre: "arret-stationnement", situation: "Votre voiture est garée au même endroit dans la rue depuis 8 jours sans avoir bougé.",
      q: "Ce stationnement :", options: ["Est abusif", "Peut entraîner la mise en fourrière", "Est autorisé sans limite de durée"], bonnes: [0, 1],
      explication: "Le stationnement ininterrompu d'un véhicule au même point de la voie publique pendant plus de 7 jours est abusif : la mise en fourrière est possible." },
    { id: "L-083", chapitre: "arret-stationnement", situation: "Vous êtes garé le long du trottoir et vous voulez descendre de voiture côté chaussée.",
      q: "Avant d'ouvrir la portière, je dois :", options: ["Regarder dans le rétroviseur", "Regarder par-dessus mon épaule", "Klaxonner"], bonnes: [0, 1],
      explication: "Une portière ouverte sans regarder peut faire chuter un cycliste. On contrôle le rétroviseur et l'angle mort ; ouvrir avec la main opposée aide à tourner la tête." },
    { id: "L-084", chapitre: "arret-stationnement", situation: "Pour faire une course rapide, vous laissez votre voiture à cheval sur ce passage pour piétons, feux de détresse allumés.", panneau: "PASSAGE_PIETON",
      q: "Ce stationnement est :", options: ["Toléré grâce aux feux de détresse", "Très gênant", "Passible d'une amende de 135 €"], bonnes: [1, 2],
      explication: "Le stationnement sur un passage pour piétons est très gênant : 135 € et enlèvement possible. Les feux de détresse ne donnent aucun droit de stationner." },
    { id: "L-085", chapitre: "arret-stationnement", situation: "Votre voiture tombe en panne la nuit sur une route hors agglomération, sans accotement.",
      q: "Je dois :", options: ["Allumer les feux de détresse", "Enfiler le gilet de haute visibilité avant de sortir", "Placer le triangle à 30 m au moins si c'est sans danger", "Rester dans la voiture avec les passagers"], bonnes: [0, 1, 2],
      explication: "On allume les feux de détresse, on enfile le gilet avant de sortir, on met les passagers à l'abri hors de la chaussée puis on pose le triangle à 30 m au moins si cela ne présente pas de danger." },
    { id: "L-086", chapitre: "arret-stationnement", situation: "Vous laissez votre voiture en stationnement dans une forte descente.",
      q: "Je :", options: ["Serre le frein de stationnement", "Engage la marche arrière", "Braque les roues vers le trottoir", "Laisse le levier au point mort"], bonnes: [0, 1, 2],
      explication: "Dans une descente : frein de stationnement serré, marche arrière engagée et roues braquées vers le trottoir pour que celui-ci bloque le véhicule s'il se déplaçait." },
    { id: "L-087", chapitre: "circulation-agglomeration", situation: "En agglomération, un conducteur devant vous tarde à démarrer au feu vert.",
      q: "Je peux utiliser l'avertisseur sonore :", options: ["Oui", "Non"], bonnes: [1],
      explication: "En agglomération, l'avertisseur sonore est interdit sauf en cas de danger immédiat. Un conducteur qui tarde à démarrer ne constitue pas un danger." },
    { id: "L-088", chapitre: "circulation-agglomeration", situation: "Vous entrez dans une zone de rencontre. Un piéton marche au milieu de la chaussée devant vous.", panneau: "ZONE_REN",
      q: "Ce piéton :", options: ["Est en infraction", "Est prioritaire", "Doit se ranger pour me laisser passer"], bonnes: [1],
      explication: "En zone de rencontre, les piétons peuvent circuler sur la chaussée et sont prioritaires sur tous les véhicules, à l'exception du tramway." },
    { id: "L-089", chapitre: "circulation-agglomeration", situation: "Vous circulez dans une aire piétonne avec une autorisation de livraison.",
      q: "Je dois rouler :", options: ["À 30 km/h au maximum", "À 20 km/h au maximum", "À l'allure du pas"], bonnes: [2],
      explication: "Dans une aire piétonne, les véhicules autorisés circulent à l'allure du pas et cèdent la priorité aux piétons." },
    { id: "L-090", chapitre: "circulation-agglomeration", situation: "Une voie de bus longe la chaussée, séparée par une ligne discontinue à l'approche d'une rue à droite que vous voulez prendre.",
      q: "Je peux emprunter la voie de bus pour tourner à droite :", options: ["Oui, en cédant le passage aux bus et aux cyclistes qui y circulent", "Non, jamais"], bonnes: [0],
      explication: "Lorsque la ligne est discontinue, on peut franchir la voie de bus pour tourner à droite, en cédant le passage aux usagers qui y circulent régulièrement." },
    { id: "L-091", chapitre: "circulation-agglomeration", situation: "Ce panneau est complété d'un panonceau « sauf cyclistes ». Vous arrivez par l'autre extrémité de la rue, dans le sens autorisé.", panneau: "B1",
      q: "Dans cette rue, je risque de croiser :", options: ["Des cyclistes venant en face", "Des voitures venant en face"], bonnes: [0],
      explication: "Le panonceau « sauf cyclistes » crée un double-sens cyclable : les vélos peuvent circuler en sens inverse du vôtre." },
    { id: "L-092", chapitre: "circulation-agglomeration", situation: "En agglomération, un bus a mis son clignotant pour quitter son arrêt, juste devant vous.",
      q: "Je dois :", options: ["Ralentir et le laisser repartir", "Le dépasser rapidement", "Klaxonner pour qu'il attende"], bonnes: [0],
      explication: "En agglomération, les conducteurs doivent ralentir et au besoin s'arrêter pour permettre aux véhicules de transport en commun de quitter leur arrêt." },
    { id: "L-093", chapitre: "circulation-agglomeration", situation: "Vous circulez sur une chaussée à voie centrale banalisée : deux rives cyclables et une voie centrale. Une voiture arrive en face.",
      q: "Pour la croiser :", options: ["Je me décale sur la rive après avoir vérifié qu'aucun cycliste n'y circule", "Je reste au centre, c'est à elle de se pousser"], bonnes: [0],
      explication: "Sur une chaussée à voie centrale banalisée, on roule au centre et on se rabat sur la rive pour croiser, en cédant la place aux cyclistes qui y circulent." },
    { id: "L-094", chapitre: "circulation-agglomeration", situation: "Vous voulez tourner à droite. Une bande cyclable longe votre voie à droite et un cycliste y arrive derrière vous.",
      q: "Je dois :", options: ["Le laisser passer avant de tourner", "Tourner devant lui car je suis devant", "Contrôler mon angle mort"], bonnes: [0, 2],
      explication: "Pour tourner à droite, vous coupez la bande cyclable : vous cédez le passage au cycliste qui y circule et vous contrôlez votre angle mort." },
    { id: "L-095", chapitre: "autoroute-tunnels-passages-niveau", situation: "Vous apercevez ce panneau.", panneau: "C207",
      q: "Sur cette route, sont interdits :", options: ["Les piétons", "Les cyclomoteurs", "Les élèves en conduite accompagnée", "Les tracteurs agricoles"], bonnes: [0, 1, 3],
      explication: "L'autoroute est interdite notamment aux piétons, cyclistes, cyclomoteurs et engins agricoles. Les élèves en apprentissage, avec un enseignant ou en conduite accompagnée, peuvent l'emprunter." },
    { id: "L-096", chapitre: "autoroute-tunnels-passages-niveau", situation: "Sur autoroute, vous avez manqué votre sortie.",
      q: "Je peux :", options: ["Faire marche arrière sur la bande d'arrêt d'urgence", "Continuer jusqu'à la sortie suivante", "Faire demi-tour au prochain passage dans le terre-plein central"], bonnes: [1],
      explication: "Sur autoroute, la marche arrière, le demi-tour et la traversée du terre-plein central sont interdits. Il faut continuer jusqu'à la sortie suivante." },
    { id: "L-097", chapitre: "autoroute-tunnels-passages-niveau", situation: "Sur autoroute, la circulation est fluide, la chaussée sèche et la visibilité bonne. Vous circulez sur la voie la plus à gauche.",
      q: "Je dois rouler au moins à :", options: ["60 km/h", "80 km/h", "100 km/h"], bonnes: [1],
      explication: "Sur autoroute, la vitesse minimale sur la voie la plus à gauche est de 80 km/h lorsque la circulation est fluide, la visibilité suffisante et la chaussée sèche." },
    { id: "L-098", chapitre: "autoroute-tunnels-passages-niveau", panneau: "C107",
      q: "Sur cette route, je peux rencontrer :", options: ["Des cyclistes", "Des voitures", "Des tracteurs agricoles"], bonnes: [1],
      explication: "Le panneau C107 signale une route pour automobiles, interdite notamment aux piétons, aux cyclistes, aux cyclomoteurs et aux engins agricoles." },
    { id: "L-099", chapitre: "autoroute-tunnels-passages-niveau", situation: "Vous entrez dans un tunnel bien éclairé, de jour.",
      q: "J'allume :", options: ["Les feux de croisement", "Les feux de brouillard arrière", "Aucun feu, le tunnel est éclairé"], bonnes: [0],
      explication: "Dans un tunnel, les feux de croisement sont obligatoires, même s'il est éclairé. Les feux de brouillard arrière sont réservés au brouillard et à la neige." },
    { id: "L-100", chapitre: "autoroute-tunnels-passages-niveau", situation: "Dans un tunnel, un incendie se déclare plus loin devant vous ; la fumée approche.",
      q: "Je dois :", options: ["Rester dans ma voiture, vitres fermées", "Évacuer à pied par une issue de secours", "Faire demi-tour"], bonnes: [1],
      explication: "En cas d'incendie, on arrête le véhicule, on laisse la clé et on évacue à pied par les issues de secours. Le demi-tour est interdit et rester dans la voiture est très dangereux." },
    { id: "L-101", chapitre: "autoroute-tunnels-passages-niveau", situation: "À un passage à niveau, les feux rouges se mettent à clignoter. Les barrières ne sont pas encore baissées.",
      q: "Je peux m'engager rapidement :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Dès que les feux rouges clignotent, l'arrêt est obligatoire, que les barrières soient baissées ou non." },
    { id: "L-102", chapitre: "autoroute-tunnels-passages-niveau", situation: "À la sortie d'un passage à niveau, la circulation est arrêtée et vous ne pourriez pas dégager complètement les voies.",
      q: "Je dois :", options: ["Attendre avant le passage à niveau", "M'engager car les feux sont éteints", "M'arrêter sur les voies en attendant"], bonnes: [0],
      explication: "On ne s'engage sur un passage à niveau que si l'on est sûr de pouvoir le dégager entièrement. Sinon, on attend avant les voies." },
    { id: "L-103", chapitre: "autoroute-tunnels-passages-niveau", situation: "Votre voiture cale et reste bloquée sur un passage à niveau.",
      q: "Je dois en priorité :", options: ["Faire sortir tous les passagers et s'éloigner des voies", "Prévenir au plus vite, par le téléphone d'urgence ou le 112", "Rester dans la voiture et essayer de redémarrer"], bonnes: [0, 1],
      explication: "La vie passe avant le véhicule : on évacue immédiatement les occupants loin des voies, puis on alerte pour faire arrêter les trains." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème C — chapitres ───────────── */
  P.chapitres.push(
    {
      id: "alcool-stupefiants-medicaments",
      theme: "C",
      titre: "Alcool, stupéfiants et médicaments",
      duree: 25,
      objectifs: [
        "Connaître les taux d'alcool autorisés et leur équivalence dans l'air expiré",
        "Comprendre les effets de l'alcool sur la conduite et le temps d'élimination",
        "Connaître les sanctions de la conduite sous alcool et sous stupéfiants",
        "Lire les pictogrammes des médicaments",
        "Savoir organiser son retour quand on a bu"
      ],
      sections: [
        {
          titre: "Les taux légaux",
          contenu: `<p>L'alcool est présent dans environ un accident mortel sur trois. Le Code de la route fixe des taux maximaux, mesurés dans le sang (en grammes par litre) ou dans l'air expiré (en milligrammes par litre). Le rapport entre les deux est de <strong>2 000</strong> : 0,5 g/L de sang correspondent à 0,25 mg/L d'air expiré.</p>
<table>
<thead><tr><th>Conducteur</th><th>Taux dans le sang</th><th>Taux dans l'air expiré</th></tr></thead>
<tbody>
<tr><td>Cas général</td><td>0,5 g/L</td><td>0,25 mg/L</td></tr>
<tr><td>Permis probatoire, conducteurs de transport en commun</td><td>0,2 g/L</td><td>0,10 mg/L</td></tr>
<tr><td>Seuil du délit (tous conducteurs)</td><td>0,8 g/L</td><td>0,40 mg/L</td></tr>
</tbody>
</table>
<p>Pour un conducteur novice, le taux de 0,2 g/L revient en pratique à <strong>zéro verre</strong> : un seul verre peut suffire à l'atteindre.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 0,5 g/L de sang = 0,25 mg/L d'air ; 0,2 g/L = 0,10 mg/L ; délit à partir de 0,8 g/L = 0,40 mg/L.</div>`
        },
        {
          titre: "L'alcool dans le corps",
          contenu: `<p>Les boissons servies dans les bars et restaurants (un demi de bière, un verre de vin, une coupe de champagne, une dose de whisky) contiennent à peu près la même quantité d'alcool pur, environ 10 grammes : c'est le <strong>verre standard</strong>. Chaque verre standard fait monter l'alcoolémie d'environ <strong>0,20 à 0,25 g/L</strong>, selon le poids, le sexe, l'état de fatigue et le fait d'avoir mangé ou non.</p>
<p>Le taux maximal est atteint environ <strong>30 minutes</strong> après l'absorption à jeun, et environ <strong>une heure</strong> au cours d'un repas. L'organisme élimine ensuite l'alcool lentement : de <strong>0,10 à 0,15 g/L par heure</strong>. Rien n'accélère cette élimination : ni le café, ni l'eau, ni le sucre, ni le sport, ni une douche froide. Seul le temps fait baisser l'alcoolémie.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un conducteur atteint 1 g/L à minuit après une soirée. À raison de 0,15 g/L par heure au mieux, il lui faudra plus de 3 heures pour redescendre sous 0,5 g/L, et environ 7 heures pour éliminer totalement l'alcool. Le lendemain matin, il peut encore être positif.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « boire un café fort » ou « manger avant de repartir » ne fait pas baisser le taux d'alcool. Manger avant de boire retarde et atténue un peu le pic, c'est tout.</div>`
        },
        {
          titre: "Les effets de l'alcool sur la conduite",
          contenu: `<p>Même à faible dose, l'alcool modifie le comportement et les capacités du conducteur :</p>
<ul>
<li><strong>allongement du temps de réaction</strong> : le conducteur freine plus tard ;</li>
<li><strong>rétrécissement du champ visuel</strong> et mauvaise perception des distances et des vitesses ;</li>
<li>sensibilité accrue à l'<strong>éblouissement</strong> ;</li>
<li><strong>euphorie</strong> et désinhibition : le conducteur surestime ses capacités et prend plus de risques ;</li>
<li>troubles de la coordination et <strong>somnolence</strong>, surtout la nuit.</li>
</ul>
<p>Le risque d'être responsable d'un accident mortel est multiplié par environ 2 à 0,5 g/L et augmente ensuite très rapidement avec le taux. Associé au cannabis, l'alcool multiplie le risque bien davantage que chacun des deux produits pris séparément.</p>
<p>Les solutions sont simples : désigner un <strong>conducteur sobre</strong> (« Sam, celui qui conduit, c'est celui qui ne boit pas »), prendre un taxi ou les transports en commun, dormir sur place, ou utiliser un <strong>éthylotest</strong> avant de prendre le volant en cas de doute.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> ne laissez pas repartir un ami qui a trop bu. Proposer de le raccompagner ou de l'héberger peut lui sauver la vie.</div>`
        },
        {
          titre: "Contrôles et sanctions de l'alcool au volant",
          contenu: `<p>Les forces de l'ordre peuvent effectuer un <strong>dépistage</strong> (éthylotest) à tout moment, même sans infraction. S'il est positif, une <strong>vérification</strong> est faite par éthylomètre ou prise de sang. Refuser de se soumettre à ces vérifications est puni comme la conduite en état alcoolique.</p>
<table>
<thead><tr><th>Taux</th><th>Nature</th><th>Sanctions principales</th></tr></thead>
<tbody>
<tr><td>De 0,5 à moins de 0,8 g/L (de 0,2 à moins de 0,8 g/L en probatoire)</td><td>Contravention</td><td>Amende forfaitaire de 135 €, retrait de 6 points, immobilisation du véhicule, suspension du permis jusqu'à 3 ans</td></tr>
<tr><td>0,8 g/L et plus</td><td>Délit</td><td>Jusqu'à 2 ans d'emprisonnement et 4 500 € d'amende, retrait de 6 points, suspension ou annulation du permis, éthylotest antidémarrage possible, stage obligatoire possible</td></tr>
<tr><td>Récidive de délit</td><td>Délit</td><td>Annulation automatique du permis, confiscation obligatoire du véhicule sauf décision motivée</td></tr>
</tbody>
</table>
<p>Pour un titulaire de permis probatoire qui ne dispose que de 6 points, un contrôle positif suffit à <strong>invalider le permis</strong>.</p>
<p>Le préfet peut aussi décider une <strong>suspension administrative</strong> immédiate après une rétention du permis par les forces de l'ordre (jusqu'à 72 heures).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> alcool au volant = toujours 6 points, que ce soit une contravention ou un délit.</div>`
        },
        {
          titre: "Les stupéfiants",
          contenu: `<p>Conduire après avoir fait usage de <strong>stupéfiants</strong> (cannabis, cocaïne, ecstasy, opiacés, amphétamines…) est un <strong>délit</strong>, quelle que soit la quantité consommée. Il n'existe aucun seuil de tolérance.</p>
<ul>
<li>Sanctions : jusqu'à <strong>2 ans d'emprisonnement</strong> et <strong>4 500 € d'amende</strong>, retrait de <strong>6 points</strong>, suspension ou annulation du permis.</li>
<li>En cas de cumul avec l'alcool : jusqu'à <strong>3 ans</strong> d'emprisonnement et <strong>9 000 €</strong> d'amende.</li>
</ul>
<p>Le dépistage se fait par un test salivaire, confirmé par une analyse. Le cannabis reste détectable plusieurs heures, voire plusieurs jours, après la consommation, même quand ses effets ne sont plus ressentis.</p>
<p>Le cannabis diminue la vigilance, ralentit les réflexes, perturbe la perception des distances et la coordination ; il provoque une somnolence. La cocaïne et les amphétamines entraînent une surestimation de soi et une prise de risque, puis une fatigue intense à la descente.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « une petite quantité de cannabis est tolérée » est faux : le simple usage, établi par analyse, suffit pour l'infraction.</div>`
        },
        {
          titre: "Les médicaments",
          contenu: `<p>Environ un médicament sur trois peut modifier les capacités de conduite : somnifères, anxiolytiques, antihistaminiques, certains antidouleurs, antidépresseurs, médicaments contre le rhume ou le mal des transports. Les boîtes concernées portent un <strong>pictogramme triangulaire</strong> à trois niveaux :</p>
<table>
<thead><tr><th>Niveau</th><th>Couleur</th><th>Message</th></tr></thead>
<tbody>
<tr><td>Niveau 1</td><td>Jaune</td><td>« Soyez prudent. Ne pas conduire sans avoir lu la notice. »</td></tr>
<tr><td>Niveau 2</td><td>Orange</td><td>« Soyez très prudent. Ne pas conduire sans l'avis d'un professionnel de santé. »</td></tr>
<tr><td>Niveau 3</td><td>Rouge</td><td>« Attention, danger : ne pas conduire. Pour la reprise de la conduite, demandez l'avis d'un médecin. »</td></tr>
</tbody>
</table>
<p>Les effets d'un médicament sont souvent renforcés par l'alcool. En cas de doute, demandez conseil à votre médecin ou à votre pharmacien, et ne prenez jamais de médicament prescrit à quelqu'un d'autre.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> votre médecin vous prescrit un somnifère portant un pictogramme rouge. Vous ne conduisez pas tant que le médecin ne vous a pas autorisé à reprendre le volant, même si vous vous sentez en forme le matin.</div>`
        }
      ],
      points_cles: [
        "Taux maximal : 0,5 g/L de sang (0,25 mg/L d'air) ; 0,2 g/L (0,10 mg/L) en permis probatoire",
        "À partir de 0,8 g/L (0,40 mg/L) : délit",
        "Un verre standard fait monter l'alcoolémie de 0,20 à 0,25 g/L environ",
        "Élimination : 0,10 à 0,15 g/L par heure ; seul le temps fait baisser le taux",
        "Alcool ou stupéfiants au volant : retrait de 6 points",
        "Stupéfiants : délit quelle que soit la quantité ; cumul avec l'alcool jusqu'à 3 ans et 9 000 €",
        "Médicaments : pictogramme jaune (niveau 1), orange (niveau 2), rouge (niveau 3 : ne pas conduire)",
        "Refuser le dépistage est puni comme la conduite sous l'emprise de l'alcool"
      ]
    },
    {
      id: "vigilance-perception-distances",
      theme: "C",
      titre: "Vigilance, perception, temps de réaction et distances d'arrêt",
      duree: 25,
      objectifs: [
        "Reconnaître les signes de fatigue et de somnolence",
        "Mesurer le danger du téléphone et des autres distractions",
        "Comprendre le fonctionnement de la perception visuelle",
        "Calculer de façon approchée la distance parcourue pendant le temps de réaction",
        "Estimer la distance d'arrêt et la distance de sécurité"
      ],
      sections: [
        {
          titre: "Fatigue et somnolence",
          contenu: `<p>La fatigue diminue la vigilance, allonge le temps de réaction et peut aboutir à l'endormissement au volant. La <strong>somnolence</strong> est l'une des premières causes d'accidents mortels sur autoroute, où la monotonie de la route favorise l'assoupissement.</p>
<p>Les signes qui doivent alerter :</p>
<ul>
<li>bâillements répétés, picotements des yeux, paupières lourdes ;</li>
<li>raideur de la nuque, douleurs dans le dos, besoin de changer de position ;</li>
<li>difficulté à maintenir une trajectoire ou une vitesse constante ;</li>
<li>impression de ne pas se souvenir des derniers kilomètres.</li>
</ul>
<p>Les heures les plus dangereuses sont la nuit, entre <strong>2 heures et 5 heures</strong>, et le début d'après-midi, entre 13 heures et 15 heures. Un repas copieux, la chaleur, certains médicaments et l'alcool favorisent la somnolence.</p>
<p>Il est recommandé de faire une <strong>pause d'au moins un quart d'heure toutes les deux heures</strong>. Dès les premiers signes de somnolence, le seul remède efficace est de <strong>s'arrêter et dormir</strong>, même 15 à 20 minutes. Ouvrir la fenêtre, monter le son de la radio ou boire un café ne font que retarder l'endormissement de quelques minutes.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> une pause toutes les 2 heures ; au premier signe de somnolence, on s'arrête et on dort.</div>`
        },
        {
          titre: "Le téléphone et les autres distractions",
          contenu: `<p>Conduire demande toute l'attention du conducteur. Une distraction de deux secondes à 50 km/h, c'est près de <strong>30 mètres</strong> parcourus sans regarder la route. Le téléphone multiplie le risque d'accident : écrire un message le multiplie par plus de vingt.</p>
<ul>
<li><strong>Tenir son téléphone en main</strong> en conduisant est interdit : 135 € et <strong>3 points</strong>.</li>
<li>Porter des <strong>écouteurs, une oreillette ou un casque</strong> est interdit : 135 € et 3 points. Seuls les systèmes mains libres intégrés au véhicule (haut-parleurs) restent autorisés, mais ils détournent aussi l'attention.</li>
<li>Si l'usage du téléphone en main s'accompagne d'une autre infraction (feu rouge, excès de vitesse, franchissement de ligne…), le permis peut être <strong>retenu</strong> immédiatement puis <strong>suspendu</strong>.</li>
<li>Placer dans le champ de vision du conducteur un écran sans rapport avec la conduite (film, vidéo) est puni de 1 500 € et 3 points.</li>
</ul>
<p>Le téléphone n'est pas la seule distraction : réglage du GPS ou de la radio, conversation animée, enfants turbulents, cigarette, repas en roulant, panneaux publicitaires. Réglez votre itinéraire et votre musique avant de partir, et arrêtez-vous dans un lieu adapté pour téléphoner.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> être arrêté au feu rouge, c'est toujours être en circulation : tenir son téléphone en main y est interdit.</div>`
        },
        {
          titre: "La perception visuelle",
          contenu: `<p>Environ <strong>90 % des informations</strong> utiles à la conduite sont visuelles. L'œil comprend deux zones : la <strong>vision centrale</strong>, nette mais très étroite, qui permet de lire et d'identifier, et la <strong>vision périphérique</strong>, floue mais très sensible aux mouvements, qui détecte ce qui arrive sur les côtés.</p>
<p>Le <strong>champ visuel</strong> se rétrécit quand la vitesse augmente : à l'arrêt, il couvre environ 180 degrés ; à grande vitesse, il se réduit fortement, et le conducteur perçoit mal ce qui se passe sur les côtés. C'est l'<strong>effet tunnel</strong>. L'alcool, la fatigue et certains médicaments ont le même effet.</p>
<p>Une bonne stratégie consiste à <strong>balayer</strong> régulièrement la scène : loin devant, près, sur les côtés, dans les rétroviseurs. Fixer un point trop longtemps (un accident, un panneau, l'écran du GPS) fait perdre l'information ailleurs.</p>
<p>L'<strong>angle mort</strong> est la zone autour du véhicule que les rétroviseurs ne montrent pas. Il faut tourner la tête pour la contrôler avant de déboîter, de changer de voie ou de tourner.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> à 130 km/h, un enfant qui s'approche du bord de la route sur le côté peut passer inaperçu, alors qu'à 30 km/h vous le verriez sans effort.</div>`
        },
        {
          titre: "Le temps de réaction",
          contenu: `<p>Le <strong>temps de réaction</strong> est le délai entre le moment où le conducteur perçoit un danger et le moment où il commence à agir (freiner). Pour un conducteur attentif et en forme, il est d'environ <strong>1 seconde</strong>. Il peut doubler, ou plus, avec la fatigue, l'alcool, les médicaments, le téléphone ou l'inattention.</p>
<p>Pendant ce temps, le véhicule continue à rouler à la même vitesse. Pour estimer la distance parcourue en 1 seconde, on multiplie le chiffre des dizaines de la vitesse par 3.</p>
<table>
<thead><tr><th>Vitesse</th><th>Distance parcourue en 1 seconde (calcul approché)</th></tr></thead>
<tbody>
<tr><td>50 km/h</td><td>5 x 3 = 15 m (valeur exacte : 14 m)</td></tr>
<tr><td>90 km/h</td><td>9 x 3 = 27 m (valeur exacte : 25 m)</td></tr>
<tr><td>130 km/h</td><td>13 x 3 = 39 m (valeur exacte : 36 m)</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> distance parcourue pendant le temps de réaction ≈ chiffre des dizaines x 3.</div>`
        },
        {
          titre: "Distance de freinage et distance d'arrêt",
          contenu: `<p>La <strong>distance de freinage</strong> est la distance parcourue entre le début du freinage et l'arrêt. Elle dépend de la vitesse (elle est proportionnelle à son carré), de l'état des pneus, des freins et surtout de l'<strong>adhérence</strong> de la chaussée.</p>
<p>La <strong>distance d'arrêt</strong> est la somme de la distance parcourue pendant le temps de réaction et de la distance de freinage. Sur route sèche, on l'estime simplement en <strong>multipliant le chiffre des dizaines par lui-même</strong>. Sur route mouillée, on ajoute la moitié.</p>
<table>
<thead><tr><th>Vitesse</th><th>Distance d'arrêt sur route sèche (approchée)</th><th>Sur route mouillée (approchée)</th></tr></thead>
<tbody>
<tr><td>50 km/h</td><td>5 x 5 = 25 m</td><td>environ 37 m</td></tr>
<tr><td>90 km/h</td><td>9 x 9 = 81 m</td><td>environ 120 m</td></tr>
<tr><td>110 km/h</td><td>11 x 11 = 121 m</td><td>environ 180 m</td></tr>
<tr><td>130 km/h</td><td>13 x 13 = 169 m</td><td>environ 250 m</td></tr>
</tbody>
</table>
<p>Sur neige, la distance de freinage peut être multipliée par 3 ou 4 ; sur verglas, par 10 environ.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> l'ABS empêche les roues de se bloquer et permet de garder la direction en freinant fort, mais il ne raccourcit pas nécessairement la distance de freinage.</div>`
        },
        {
          titre: "La distance de sécurité",
          contenu: `<p>Pour éviter de percuter le véhicule qui vous précède s'il freine brusquement, vous devez laisser entre lui et vous un intervalle correspondant à au moins <strong>2 secondes</strong> de parcours. Ce délai vous laisse le temps de réagir.</p>
<p>Méthode pratique : repérez un point fixe (un poteau, un pont) ; quand le véhicule de devant le passe, comptez « un crocodile, deux crocodiles ». Si vous atteignez ce point avant la fin, vous êtes trop près.</p>
<p>En mètres, on peut l'estimer en multipliant le chiffre des dizaines par 6 : à 90 km/h, 54 m environ ; à 130 km/h, 78 m environ. Sur autoroute, la distance entre deux traits de la bande de rive vaut environ 38 mètres (trait de 38 m et intervalle de 14 m) : garder <strong>deux traits</strong> correspond à une distance de sécurité suffisante à 130 km/h par temps sec.</p>
<p>Ne pas respecter la distance de sécurité coûte 135 € et <strong>3 points</strong>. Par temps de pluie, de nuit ou en cas de fatigue, augmentez cette distance.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 2 secondes au minimum ; sur autoroute, au moins deux traits de la bande d'arrêt d'urgence.</div>`
        }
      ],
      points_cles: [
        "Pause d'au moins 15 minutes toutes les 2 heures ; au premier signe de somnolence, s'arrêter et dormir",
        "Téléphone tenu en main ou écouteurs : 135 € et 3 points",
        "Le champ visuel se rétrécit quand la vitesse augmente",
        "Temps de réaction d'environ 1 seconde ; distance parcourue ≈ dizaines x 3",
        "Distance d'arrêt sur sol sec ≈ dizaines x dizaines ; sur sol mouillé, ajouter la moitié",
        "Distance de sécurité : au moins 2 secondes ; non-respect : 3 points",
        "Sur autoroute : garder au moins deux traits de bande de rive",
        "L'angle mort se contrôle en tournant la tête"
      ]
    },
    {
      id: "permis-points-sanctions",
      theme: "C",
      titre: "Le permis à points, les infractions et les sanctions",
      duree: 25,
      objectifs: [
        "Comprendre le fonctionnement du capital de points",
        "Connaître le régime du permis probatoire",
        "Retenir les retraits de points des principales infractions",
        "Savoir comment récupérer des points",
        "Distinguer amende, suspension, annulation et invalidation"
      ],
      sections: [
        {
          titre: "Le capital de points",
          contenu: `<p>Le permis de conduire est doté d'un capital de <strong>12 points</strong>. Chaque infraction grave entraîne un retrait de points, qui devient effectif après le paiement de l'amende forfaitaire, l'émission du titre exécutoire de l'amende forfaitaire majorée ou une condamnation définitive.</p>
<p>Le nombre de points retirés dépend de l'infraction. En cas d'infractions simultanées, le retrait est plafonné à <strong>8 points</strong>.</p>
<p>Lorsque le solde tombe à zéro, le permis perd sa validité : c'est l'<strong>invalidation</strong>. Le conducteur reçoit une lettre recommandée (lettre « 48SI ») et doit restituer son permis à la préfecture dans les 10 jours.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 12 points au maximum ; 8 points au plus retirés en une seule fois ; 0 point = permis invalidé.</div>`
        },
        {
          titre: "Le permis probatoire",
          contenu: `<p>Le jeune conducteur commence avec un capital de <strong>6 points</strong>, pendant une période probatoire de <strong>3 ans</strong>, ou de <strong>2 ans</strong> s'il a suivi l'apprentissage anticipé de la conduite (conduite accompagnée).</p>
<ul>
<li>Sans infraction ayant donné lieu à retrait de points, il gagne <strong>2 points par an</strong> (3 points par an après une conduite accompagnée), pour atteindre 12 points à la fin de la période probatoire.</li>
<li>Une formation complémentaire facultative, suivie entre le 6e et le 12e mois après l'obtention du permis, permet de réduire la durée de la période probatoire.</li>
<li>Le jeune conducteur est soumis à des <strong>vitesses réduites</strong> (110, 100 et 80 km/h) et à un taux d'alcool de <strong>0,2 g/L</strong>.</li>
<li>Il doit apposer le <strong>disque « A »</strong> à l'arrière de son véhicule.</li>
</ul>
<p>Si un conducteur en période probatoire commet une infraction entraînant un retrait d'<strong>au moins 3 points</strong>, il reçoit une lettre recommandée (« 48N ») et doit suivre un <strong>stage de sensibilisation</strong> à la sécurité routière dans un délai de 4 mois. Ne pas le suivre l'expose à une amende et à une suspension de permis.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> avec 6 points, une seule infraction à 6 points (alcool, stupéfiants, grand excès de vitesse) invalide le permis d'un conducteur novice.</div>`
        },
        {
          titre: "Les principales infractions et leurs retraits de points",
          contenu: `<table>
<thead><tr><th>Points retirés</th><th>Infractions</th></tr></thead>
<tbody>
<tr><td>1 point</td><td>Excès de vitesse inférieur à 20 km/h</td></tr>
<tr><td>2 points</td><td>Excès de vitesse de 20 à moins de 30 km/h ; accélérer quand on est dépassé</td></tr>
<tr><td>3 points</td><td>Téléphone tenu en main ; écouteurs ; ceinture non bouclée ; distance de sécurité non respectée ; franchissement d'une ligne continue ; changement de direction sans clignotant ; circulation sur la bande d'arrêt d'urgence ; excès de 30 à moins de 40 km/h ; arrêt ou stationnement dangereux</td></tr>
<tr><td>4 points</td><td>Feu rouge ou stop non respecté ; refus de priorité ; circulation en sens interdit ; excès de 40 à moins de 50 km/h</td></tr>
<tr><td>6 points</td><td>Alcool (contravention ou délit) ; stupéfiants ; excès de 50 km/h et plus ; refus de priorité à un piéton ; délit de fuite ; refus d'obtempérer ; homicide ou blessures involontaires</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> ne pas céder le passage à un piéton qui traverse coûte plus cher en points (6) que griller un feu rouge (4).</div>`
        },
        {
          titre: "Récupérer des points",
          contenu: `<p>Les points se récupèrent de plusieurs façons :</p>
<ul>
<li><strong>Après 6 mois</strong> sans nouvelle infraction, le point retiré pour une infraction n'ayant entraîné qu'un retrait d'un point est restitué.</li>
<li><strong>Après 2 ans</strong> sans nouvelle infraction, le capital initial est entièrement reconstitué si la dernière infraction était une contravention des trois premières classes.</li>
<li><strong>Après 3 ans</strong> sans nouvelle infraction, le capital est reconstitué si la dernière infraction était une contravention de 4e ou 5e classe ou un délit.</li>
<li>En tout état de cause, chaque retrait est effacé <strong>au bout de 10 ans</strong>, sauf invalidation.</li>
<li>Le <strong>stage de sensibilisation</strong> à la sécurité routière, de deux jours, permet de récupérer jusqu'à <strong>4 points</strong>, dans la limite du capital maximal. On ne peut en suivre qu'un par an pour récupérer des points.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un conducteur perd 3 points pour avoir tenu son téléphone en main (contravention de 4e classe). S'il ne commet aucune infraction retirant des points pendant 3 ans, il retrouve ses 12 points.</div>`
        },
        {
          titre: "Amendes, suspension, annulation",
          contenu: `<p>Les contraventions sont réparties en cinq classes. L'amende forfaitaire est de 11 € (1re classe), 35 € (2e), 68 € (3e), <strong>135 €</strong> (4e). Les contraventions de 5e classe vont jusqu'à 1 500 €. L'amende peut être minorée si elle est payée rapidement, et majorée si elle est payée en retard.</p>
<p>Les infractions les plus graves sont des <strong>délits</strong>, jugés par le tribunal correctionnel : conduite avec 0,8 g/L ou plus, stupéfiants, défaut de permis, défaut d'assurance, délit de fuite, refus d'obtempérer, récidive de grand excès de vitesse.</p>
<ul>
<li>La <strong>rétention</strong> du permis est immédiate, décidée par les forces de l'ordre, pour une durée de 72 heures au plus.</li>
<li>La <strong>suspension</strong> interdit de conduire pendant une durée fixée par le préfet ou le juge ; à son terme, le permis est rendu.</li>
<li>L'<strong>annulation</strong> est décidée par le juge : le conducteur doit repasser le permis après un délai fixé.</li>
<li>L'<strong>invalidation</strong> résulte de la perte de tous les points.</li>
</ul>
<p>Après une invalidation, il faut attendre <strong>6 mois</strong> (1 an si une autre invalidation est intervenue dans les 5 ans) avant de demander un nouveau permis, passer un examen médical et psychotechnique, et repasser l'examen.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> conduire pendant une suspension ou après une invalidation est un délit, puni de 2 ans d'emprisonnement et de 4 500 € d'amende.</div>`
        },
        {
          titre: "Responsabilité et comportement",
          contenu: `<p>Le permis à points n'est pas qu'un système de sanctions : il vise à faire prendre conscience des comportements dangereux. La plupart des accidents graves résultent d'un petit nombre de facteurs : vitesse excessive, alcool, stupéfiants, inattention (téléphone), fatigue, non-port de la ceinture.</p>
<p>Le conducteur est responsable pénalement des infractions qu'il commet. Pour les infractions relevées automatiquement (radar), le titulaire du certificat d'immatriculation reçoit l'avis de contravention ; s'il n'était pas au volant, il doit désigner le conducteur. Une société qui ne désigne pas le conducteur d'un véhicule de fonction est sanctionnée par une amende spécifique.</p>
<p>Enfin, un conducteur impliqué dans un accident a l'obligation de s'arrêter. Prendre la fuite est un délit puni de lourdes peines et du retrait de 6 points.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> votre parent reçoit un avis de contravention pour un excès de vitesse que vous avez commis avec sa voiture. Il doit vous désigner : c'est votre permis qui perdra des points.</div>`
        }
      ],
      points_cles: [
        "Capital de 12 points ; permis probatoire : 6 points au départ",
        "Probatoire : 3 ans (2 ans après conduite accompagnée), +2 points par an (+3 après AAC)",
        "Retrait de 3 points ou plus en probatoire : stage obligatoire (lettre 48N)",
        "Retrait maximal de 8 points pour des infractions simultanées",
        "Téléphone, ceinture, ligne continue : 3 points ; feu rouge, stop : 4 points ; alcool, piéton : 6 points",
        "Stage de sensibilisation : jusqu'à 4 points, une fois par an",
        "Capital reconstitué après 2 ou 3 ans sans infraction selon la gravité",
        "Invalidation : attendre 6 mois avant de repasser le permis"
      ]
    }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème C — questions C-001 à C-054 ───────────── */
  P.questions.push(
    { id: "C-001", chapitre: "alcool-stupefiants-medicaments", situation: "Vous avez le permis depuis 5 ans. Lors d'un contrôle, l'éthylomètre indique 0,30 mg/L d'air expiré.",
      q: "Je suis en infraction :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Le taux maximal est de 0,25 mg/L d'air expiré (0,5 g/L de sang). Avec 0,30 mg/L, vous commettez une contravention ; le délit commence à 0,40 mg/L." },
    { id: "C-002", chapitre: "alcool-stupefiants-medicaments", situation: "Vous avez obtenu votre permis il y a 1 an. L'éthylomètre indique 0,15 mg/L d'air expiré.",
      q: "Je suis en infraction :", options: ["Oui", "Non"], bonnes: [0],
      explication: "En permis probatoire, le taux maximal est de 0,2 g/L de sang, soit 0,10 mg/L d'air expiré. 0,15 mg/L dépasse cette limite." },
    { id: "C-003", chapitre: "alcool-stupefiants-medicaments",
      q: "Un taux de 0,8 g/L de sang correspond, dans l'air expiré, à :", options: ["0,40 mg/L", "0,80 mg/L", "0,08 mg/L"], bonnes: [0],
      explication: "Le rapport entre le sang et l'air expiré est de 2 000 : il suffit de diviser le taux sanguin par deux. 0,8 g/L de sang = 0,40 mg/L d'air, seuil du délit." },
    { id: "C-004", chapitre: "alcool-stupefiants-medicaments", situation: "Vous avez bu deux verres au cours d'un repas et souhaitez reprendre le volant rapidement.",
      q: "Ce qui fait baisser mon taux d'alcool :", options: ["Un café fort", "Le temps", "Une douche froide", "Un morceau de sucre"], bonnes: [1],
      explication: "Seul le temps fait baisser l'alcoolémie, de 0,10 à 0,15 g/L par heure. Café, eau, sucre ou douche n'accélèrent pas l'élimination." },
    { id: "C-005", chapitre: "alcool-stupefiants-medicaments",
      q: "L'alcool, même à faible dose :", options: ["Allonge le temps de réaction", "Rétrécit le champ visuel", "Améliore la concentration", "Augmente la sensibilité à l'éblouissement"], bonnes: [0, 1, 3],
      explication: "L'alcool ralentit les réflexes, réduit le champ visuel et rend plus sensible à l'éblouissement. Il donne une impression de confiance, mais diminue la concentration." },
    { id: "C-006", chapitre: "alcool-stupefiants-medicaments", situation: "Vous avez le permis depuis 10 ans. À 1 heure du matin, votre alcoolémie est de 1 g/L.",
      q: "À 3 heures du matin, je pourrai conduire légalement :", options: ["Oui", "Non"], bonnes: [1],
      explication: "L'organisme élimine au mieux 0,10 à 0,15 g/L par heure : après 2 heures, le taux est encore d'au moins 0,7 g/L, au-dessus de la limite de 0,5 g/L." },
    { id: "C-007", chapitre: "alcool-stupefiants-medicaments",
      q: "Conduire avec 0,9 g/L d'alcool dans le sang constitue :", options: ["Une contravention", "Un délit"], bonnes: [1],
      explication: "À partir de 0,8 g/L de sang (0,40 mg/L d'air), la conduite sous l'empire d'un état alcoolique est un délit, puni jusqu'à 2 ans d'emprisonnement et 4 500 € d'amende." },
    { id: "C-008", chapitre: "alcool-stupefiants-medicaments", situation: "Titulaire du permis depuis 8 ans, vous êtes contrôlé avec 0,6 g/L de sang.",
      q: "Je perds :", options: ["3 points", "4 points", "6 points"], bonnes: [2],
      explication: "L'alcool au volant coûte toujours 6 points, qu'il s'agisse d'une contravention (de 0,5 à moins de 0,8 g/L) ou d'un délit (0,8 g/L et plus)." },
    { id: "C-009", chapitre: "alcool-stupefiants-medicaments", situation: "Vous avez fumé du cannabis la veille au soir. Ce matin, vous vous sentez en forme, mais le test salivaire est positif.",
      q: "Je suis en infraction :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Conduire après avoir fait usage de stupéfiants est un délit dès lors que l'usage est établi par analyse, sans seuil de tolérance. Le cannabis reste détectable longtemps après ses effets ressentis." },
    { id: "C-010", chapitre: "alcool-stupefiants-medicaments", situation: "Un conducteur est contrôlé positif aux stupéfiants et présente 0,9 g/L d'alcool dans le sang.",
      q: "Il encourt une peine d'emprisonnement maximale de :", options: ["2 ans", "3 ans", "5 ans"], bonnes: [1],
      explication: "Le cumul alcool et stupéfiants est puni jusqu'à 3 ans d'emprisonnement et 9 000 € d'amende, contre 2 ans et 4 500 € pour chaque infraction seule." },
    { id: "C-011", chapitre: "alcool-stupefiants-medicaments", situation: "Votre médecin vous prescrit un médicament dont la boîte porte un pictogramme triangulaire rouge.",
      q: "Je peux conduire :", options: ["Oui, si je me sens bien", "Non, tant qu'un médecin ne m'y a pas autorisé"], bonnes: [1],
      explication: "Le pictogramme rouge (niveau 3) signifie « Attention, danger : ne pas conduire ». La reprise de la conduite se fait sur avis médical, même si l'on se sent en forme." },
    { id: "C-012", chapitre: "alcool-stupefiants-medicaments", situation: "La boîte d'un médicament porte un pictogramme triangulaire orange.",
      q: "Il s'agit du niveau :", options: ["1", "2", "3"], bonnes: [1],
      explication: "Jaune = niveau 1 (soyez prudent), orange = niveau 2 (soyez très prudent, avis d'un professionnel de santé), rouge = niveau 3 (ne pas conduire)." },
    { id: "C-013", chapitre: "alcool-stupefiants-medicaments", situation: "Lors d'un contrôle routier, vous refusez de souffler dans l'éthylomètre.",
      q: "Je m'expose à :", options: ["Un retrait de 6 points", "Une simple amende de 35 €", "Une suspension de mon permis"], bonnes: [0, 2],
      explication: "Le refus de se soumettre aux vérifications est puni comme la conduite en état alcoolique délictuel : 6 points, amende, emprisonnement possible et suspension du permis." },
    { id: "C-014", chapitre: "alcool-stupefiants-medicaments", situation: "En fin de soirée, vous avez bu plusieurs verres.",
      q: "Pour rentrer, je peux :", options: ["Laisser conduire un ami resté sobre", "Dormir sur place", "Rouler doucement par les petites routes", "Prendre un taxi"], bonnes: [0, 1, 3],
      explication: "Conducteur désigné, taxi, transports en commun ou nuit sur place sont les bonnes solutions. Rouler doucement ne supprime ni l'infraction ni les effets de l'alcool." },
    { id: "C-015", chapitre: "alcool-stupefiants-medicaments",
      q: "Un verre standard (demi de bière, verre de vin…) fait monter l'alcoolémie d'environ :", options: ["0,05 g/L", "0,20 à 0,25 g/L", "0,50 g/L"], bonnes: [1],
      explication: "Chaque verre standard contient environ 10 g d'alcool pur et augmente le taux d'environ 0,20 à 0,25 g/L, selon la personne et les circonstances." },
    { id: "C-016", chapitre: "alcool-stupefiants-medicaments", situation: "Vous avez obtenu votre permis il y a 4 mois et disposez de 6 points. Vous êtes contrôlé avec 0,3 g/L de sang.",
      q: "Que va-t-il se passer ?", options: ["Je perds 6 points", "Mon permis sera invalidé faute de points", "Rien, car je suis sous 0,5 g/L"], bonnes: [0, 1],
      explication: "En permis probatoire, la limite est de 0,2 g/L : 0,3 g/L est une infraction qui coûte 6 points. Avec un capital de 6 points, le solde tombe à zéro et le permis est invalidé." },
    { id: "C-017", chapitre: "vigilance-perception-distances", situation: "Vous roulez depuis deux heures sur autoroute. Vous bâillez souvent et vos paupières sont lourdes.",
      q: "Je dois :", options: ["M'arrêter sur la prochaine aire et dormir un moment", "Ouvrir la fenêtre et continuer", "Augmenter le volume de la radio"], bonnes: [0],
      explication: "Aux premiers signes de somnolence, le seul remède efficace est de s'arrêter et de dormir, même 15 à 20 minutes. Air frais et musique ne retardent l'endormissement que de quelques minutes." },
    { id: "C-018", chapitre: "vigilance-perception-distances",
      q: "Le risque de somnolence au volant est particulièrement élevé :", options: ["Entre 2 h et 5 h du matin", "Entre 13 h et 15 h", "Entre 9 h et 11 h"], bonnes: [0, 1],
      explication: "L'horloge biologique favorise l'endormissement la nuit, entre 2 h et 5 h, et en début d'après-midi, entre 13 h et 15 h, surtout après un repas copieux." },
    { id: "C-019", chapitre: "vigilance-perception-distances", situation: "Vous préparez un long trajet de 600 km.",
      q: "Il est recommandé de faire une pause :", options: ["Toutes les 2 heures", "Toutes les 4 heures", "Uniquement si je me sens fatigué"], bonnes: [0],
      explication: "Une pause d'au moins un quart d'heure toutes les deux heures permet de maintenir la vigilance. Attendre de se sentir fatigué, c'est souvent attendre trop tard." },
    { id: "C-020", chapitre: "vigilance-perception-distances", situation: "Vous êtes arrêté à ce feu. Votre téléphone vibre.", panneau: "FEU_ROUGE",
      q: "Je peux lire le message en tenant mon téléphone en main :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Arrêté à un feu, vous êtes toujours en circulation : tenir son téléphone en main est interdit (135 € et 3 points). Pour l'utiliser, il faut être stationné à un endroit autorisé." },
    { id: "C-021", chapitre: "vigilance-perception-distances", situation: "Vous devez absolument prendre un appel pendant un trajet.",
      q: "En conduisant, je peux téléphoner avec :", options: ["Une oreillette", "Un casque audio", "Le système de haut-parleurs intégré au véhicule"], bonnes: [2],
      explication: "Oreillettes, écouteurs et casques sont interdits au volant. Seul un système mains libres sans rien dans l'oreille reste autorisé, mais il détourne aussi l'attention : mieux vaut s'arrêter." },
    { id: "C-022", chapitre: "vigilance-perception-distances",
      q: "Tenir son téléphone en main en conduisant est sanctionné par :", options: ["Une amende de 135 €", "Un retrait de 3 points", "Un retrait de 6 points"], bonnes: [0, 1],
      explication: "Le téléphone tenu en main est une contravention de 4e classe : 135 € d'amende forfaitaire et retrait de 3 points." },
    { id: "C-023", chapitre: "vigilance-perception-distances", situation: "Tout en tenant votre téléphone en main, vous franchissez cette ligne pour éviter un obstacle.", panneau: "LIGNE_CONTINUE",
      q: "Je m'expose à :", options: ["Une rétention immédiate de mon permis", "Une suspension de mon permis", "Une simple amende, sans autre conséquence"], bonnes: [0, 1],
      explication: "Lorsque l'usage du téléphone tenu en main s'accompagne d'une autre infraction, comme le franchissement d'une ligne continue, le permis peut être retenu sur place puis suspendu." },
    { id: "C-024", chapitre: "vigilance-perception-distances",
      q: "La vision périphérique :", options: ["Détecte les mouvements sur les côtés", "Est nette et permet de lire les panneaux", "Se réduit quand la vitesse augmente"], bonnes: [0, 2],
      explication: "La vision périphérique est floue mais très sensible aux mouvements. Elle se réduit avec la vitesse (effet tunnel) ; c'est la vision centrale qui permet de lire." },
    { id: "C-025", chapitre: "vigilance-perception-distances",
      q: "Quand ma vitesse augmente, mon champ visuel :", options: ["S'élargit", "Se rétrécit", "Ne change pas"], bonnes: [1],
      explication: "Plus la vitesse est élevée, plus le regard se porte loin et plus le champ visuel se réduit : on perçoit mal ce qui arrive sur les côtés." },
    { id: "C-026", chapitre: "vigilance-perception-distances",
      q: "Mon temps de réaction est allongé par :", options: ["La fatigue", "L'alcool", "Une conversation téléphonique", "Le port de la ceinture"], bonnes: [0, 1, 2],
      explication: "Fatigue, alcool, médicaments, stupéfiants et distractions comme le téléphone allongent le temps de réaction. La ceinture n'a aucun effet sur lui." },
    { id: "C-027", chapitre: "vigilance-perception-distances", situation: "Vous roulez à la vitesse indiquée par ce panneau. Un obstacle surgit.", panneau: "B14:90",
      q: "Pendant mon temps de réaction d'une seconde, je parcours environ :", options: ["9 m", "27 m", "81 m"], bonnes: [1],
      explication: "La distance parcourue en une seconde s'estime en multipliant le chiffre des dizaines par 3 : 9 x 3 = 27 m (25 m exactement). 81 m est la distance d'arrêt approchée." },
    { id: "C-028", chapitre: "vigilance-perception-distances", situation: "En agglomération, vous roulez à 50 km/h sur une chaussée sèche.",
      q: "Ma distance d'arrêt est d'environ :", options: ["15 m", "25 m", "50 m"], bonnes: [1],
      explication: "Sur route sèche, la distance d'arrêt s'estime en multipliant le chiffre des dizaines par lui-même : 5 x 5 = 25 m. 15 m correspond seulement au temps de réaction." },
    { id: "C-029", chapitre: "vigilance-perception-distances", situation: "Vous circulez sur autoroute, chaussée sèche, à la vitesse indiquée par ce panneau.", panneau: "B14:130",
      q: "Ma distance d'arrêt est d'environ :", options: ["80 m", "170 m", "300 m"], bonnes: [1],
      explication: "13 x 13 = 169 m, soit environ 170 m sur route sèche. Sur route mouillée, elle atteint environ 250 m." },
    { id: "C-030", chapitre: "vigilance-perception-distances",
      q: "La distance de freinage dépend :", options: ["De la vitesse", "De l'état des pneumatiques", "De l'adhérence de la chaussée", "De la couleur du véhicule"], bonnes: [0, 1, 2],
      explication: "La distance de freinage augmente avec le carré de la vitesse et dépend de l'état des pneus, des freins et de l'adhérence de la route." },
    { id: "C-031", chapitre: "vigilance-perception-distances",
      q: "La distance d'arrêt est égale à :", options: ["La distance de freinage seule", "La distance parcourue pendant le temps de réaction plus la distance de freinage", "La distance de sécurité"], bonnes: [1],
      explication: "Avant même de freiner, le véhicule parcourt une distance pendant le temps de réaction. La distance d'arrêt additionne cette distance et la distance de freinage." },
    { id: "C-032", chapitre: "vigilance-perception-distances", situation: "La voiture qui vous précède passe à hauteur d'un poteau. Vous y arrivez une seconde plus tard.",
      q: "Ma distance de sécurité est :", options: ["Suffisante", "Insuffisante"], bonnes: [1],
      explication: "L'intervalle minimal est de 2 secondes. Avec une seconde, vous n'auriez pas le temps de réagir si le véhicule de devant freinait brusquement." },
    { id: "C-033", chapitre: "vigilance-perception-distances", situation: "Vous circulez sur cette route à 130 km/h, par temps sec, derrière une autre voiture.", panneau: "C207",
      q: "Je laisse devant moi au moins :", options: ["Un trait de la bande d'arrêt d'urgence", "Deux traits de la bande d'arrêt d'urgence"], bonnes: [1],
      explication: "Sur autoroute, garder deux traits de la ligne de rive entre vous et le véhicule qui précède correspond à une distance de sécurité suffisante à 130 km/h par temps sec." },
    { id: "C-034", chapitre: "vigilance-perception-distances",
      q: "Ne pas respecter la distance de sécurité est sanctionné par :", options: ["Un retrait de 3 points", "Une amende de 135 €", "La confiscation du véhicule"], bonnes: [0, 1],
      explication: "Le non-respect des distances de sécurité est une contravention de 4e classe : 135 € et 3 points." },
    { id: "C-035", chapitre: "vigilance-perception-distances", situation: "Sur une route à deux voies de même sens, vous voulez déboîter pour dépasser.",
      q: "Avant de déboîter, je contrôle :", options: ["Le rétroviseur intérieur", "Le rétroviseur extérieur gauche", "L'angle mort, en tournant la tête"], bonnes: [0, 1, 2],
      explication: "Les rétroviseurs ne montrent pas toute la zone autour du véhicule : après les avoir consultés, on tourne la tête pour vérifier l'angle mort." },
    { id: "C-036", chapitre: "vigilance-perception-distances",
      q: "L'ABS permet :", options: ["De garder le contrôle de la direction en freinant fort", "De raccourcir à coup sûr la distance de freinage", "D'éviter le blocage des roues"], bonnes: [0, 2],
      explication: "L'ABS empêche les roues de se bloquer, ce qui permet de continuer à diriger le véhicule. Il ne garantit pas une distance de freinage plus courte." },
    { id: "C-037", chapitre: "vigilance-perception-distances", situation: "À 50 km/h, vous quittez la route des yeux pendant 2 secondes pour régler le GPS.",
      q: "Pendant ce temps, je parcours environ :", options: ["3 m", "30 m", "100 m"], bonnes: [1],
      explication: "À 50 km/h, on parcourt environ 14 m par seconde, donc près de 30 m en 2 secondes sans regarder la route. Réglez le GPS avant de partir." },
    { id: "C-038", chapitre: "permis-points-sanctions",
      q: "Le capital maximal de points d'un permis de conduire est de :", options: ["6 points", "10 points", "12 points"], bonnes: [2],
      explication: "Le permis compte 12 points au maximum. Un conducteur novice commence avec 6 points et atteint 12 points à la fin de sa période probatoire s'il ne commet pas d'infraction." },
    { id: "C-039", chapitre: "permis-points-sanctions", situation: "Vous obtenez votre permis après une formation traditionnelle en auto-école, sans conduite accompagnée.",
      q: "Ma période probatoire dure :", options: ["2 ans", "3 ans", "5 ans"], bonnes: [1],
      explication: "La période probatoire dure 3 ans, ramenés à 2 ans après un apprentissage anticipé de la conduite (conduite accompagnée)." },
    { id: "C-040", chapitre: "permis-points-sanctions", situation: "Vous obtenez votre permis après une conduite accompagnée. Vous ne commettez aucune infraction.",
      q: "Chaque année, je gagne :", options: ["2 points", "3 points", "6 points"], bonnes: [1],
      explication: "Après un apprentissage anticipé de la conduite, le jeune conducteur gagne 3 points par an pendant 2 ans (6 + 3 + 3 = 12). Sans AAC, c'est 2 points par an pendant 3 ans." },
    { id: "C-041", chapitre: "permis-points-sanctions", situation: "Vous franchissez ce feu alors qu'il est allumé.", panneau: "FEU_ROUGE",
      q: "Je perds :", options: ["2 points", "4 points", "6 points"], bonnes: [1],
      explication: "Le non-respect d'un feu rouge coûte 4 points et 135 € d'amende forfaitaire, avec une suspension de permis possible." },
    { id: "C-042", chapitre: "permis-points-sanctions", situation: "Vous ne marquez pas l'arrêt à ce panneau, car aucun véhicule n'arrive.", panneau: "AB4",
      q: "Je risque :", options: ["Un retrait de 4 points", "Une amende de 135 €", "Aucune sanction puisque la voie était libre"], bonnes: [0, 1],
      explication: "L'arrêt au stop est obligatoire même si la voie est libre. Le non-respect du stop coûte 135 € et 4 points." },
    { id: "C-043", chapitre: "permis-points-sanctions", situation: "Vous êtes contrôlé sur cette route avec une vitesse retenue de 105 km/h.", panneau: "B14:80",
      q: "Je perds :", options: ["1 point", "2 points", "3 points"], bonnes: [1],
      explication: "L'excès est de 25 km/h : entre 20 et moins de 30 km/h, le retrait est de 2 points. De 30 à moins de 40 km/h, il serait de 3 points." },
    { id: "C-044", chapitre: "permis-points-sanctions", situation: "En agglomération, après ce panneau, vous êtes contrôlé avec une vitesse retenue de 101 km/h.", panneau: "B14:50",
      q: "Je m'expose à :", options: ["Un retrait de 6 points", "Une suspension de mon permis", "Une simple amende de 68 €"], bonnes: [0, 1],
      explication: "Un excès de 50 km/h ou plus entraîne un retrait de 6 points, la rétention immédiate du permis et une suspension. Ce n'est jamais une simple amende." },
    { id: "C-045", chapitre: "permis-points-sanctions", situation: "Vous ne cédez pas le passage à un piéton engagé sur le passage signalé par ce panneau.", panneau: "C20a",
      q: "Je perds :", options: ["3 points", "4 points", "6 points"], bonnes: [2],
      explication: "Le refus de priorité à un piéton est sanctionné par 135 € d'amende et un retrait de 6 points, plus qu'un feu rouge grillé (4 points)." },
    { id: "C-046", chapitre: "permis-points-sanctions",
      q: "Un stage de sensibilisation à la sécurité routière permet de récupérer :", options: ["Jusqu'à 4 points", "Jusqu'à 6 points", "Tous les points perdus"], bonnes: [0],
      explication: "Le stage de deux jours permet de récupérer jusqu'à 4 points, sans dépasser le capital maximal. On ne peut en suivre qu'un par an pour récupérer des points." },
    { id: "C-047", chapitre: "permis-points-sanctions", situation: "Vous êtes en période probatoire et perdez 3 points pour avoir tenu votre téléphone en main.",
      q: "Je dois :", options: ["Suivre un stage de sensibilisation obligatoire", "Repasser l'examen du code", "Rien de particulier"], bonnes: [0],
      explication: "En période probatoire, une infraction entraînant un retrait d'au moins 3 points oblige à suivre un stage de sensibilisation dans les 4 mois (lettre 48N)." },
    { id: "C-048", chapitre: "permis-points-sanctions", situation: "Lors d'un même contrôle, plusieurs infractions sont relevées : au total, elles représentent 11 points.",
      q: "Le nombre de points retirés est au maximum de :", options: ["6 points", "8 points", "11 points"], bonnes: [1],
      explication: "Pour des infractions commises simultanément, le retrait de points est plafonné à 8 points." },
    { id: "C-049", chapitre: "permis-points-sanctions", situation: "Votre solde de points tombe à zéro.",
      q: "Mon permis est :", options: ["Invalidé", "Simplement suspendu pour 1 mois", "Toujours valable jusqu'à mon prochain contrôle"], bonnes: [0],
      explication: "La perte de tous les points entraîne l'invalidation du permis. Il faut le restituer et attendre au moins 6 mois avant de repasser l'examen." },
    { id: "C-050", chapitre: "permis-points-sanctions", situation: "Vous perdez 1 point pour un petit excès de vitesse.",
      q: "Sans nouvelle infraction, je récupère ce point au bout de :", options: ["6 mois", "2 ans", "10 ans"], bonnes: [0],
      explication: "Le point retiré pour une infraction n'ayant entraîné qu'un retrait d'un point est restitué après 6 mois sans nouvelle infraction." },
    { id: "C-051", chapitre: "permis-points-sanctions", situation: "Votre permis a été suspendu pour 3 mois. Vous prenez quand même le volant.",
      q: "Conduire malgré une suspension est :", options: ["Un délit", "Une contravention de 1re classe", "Autorisé pour les trajets professionnels"], bonnes: [0],
      explication: "Conduire pendant une suspension ou après une invalidation est un délit puni de 2 ans d'emprisonnement et de 4 500 € d'amende." },
    { id: "C-052", chapitre: "permis-points-sanctions", situation: "Vous recevez un avis de contravention pour un excès de vitesse commis par votre frère avec votre voiture.",
      q: "Pour que les points soient retirés du bon permis, je :", options: ["Désigne mon frère comme conducteur", "Paie l'amende sans rien signaler"], bonnes: [0],
      explication: "Le titulaire du certificat d'immatriculation peut désigner le conducteur réel. S'il paie sans le désigner, les points sont retirés de son propre permis." },
    { id: "C-053", chapitre: "permis-points-sanctions", situation: "Vous circulez sans avoir bouclé votre ceinture de sécurité.",
      q: "Je risque un retrait de :", options: ["1 point", "3 points", "6 points"], bonnes: [1],
      explication: "Le défaut de port de la ceinture par le conducteur est sanctionné par 135 € et 3 points." },
    { id: "C-054", chapitre: "vigilance-perception-distances",
      q: "Pour un conducteur en forme et attentif, le temps de réaction est d'environ :", options: ["0,1 seconde", "1 seconde", "3 secondes"], bonnes: [1],
      explication: "Le temps de réaction d'un conducteur attentif est d'environ 1 seconde. Il peut doubler ou plus avec la fatigue, l'alcool ou une distraction." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème R — chapitres (1/2) ───────────── */
  P.chapitres.push(
    {
      id: "nuit-eclairage",
      theme: "R",
      titre: "Circuler de nuit : éclairage et visibilité",
      duree: 20,
      objectifs: [
        "Comprendre pourquoi la conduite de nuit est plus dangereuse",
        "Connaître les différents feux du véhicule et leur portée",
        "Choisir les bons feux selon le lieu et la situation",
        "Réagir à l'éblouissement",
        "Voir et être vu : piétons, cyclistes, véhicule en panne"
      ],
      sections: [
        {
          titre: "La nuit, un environnement plus dangereux",
          contenu: `<p>La nuit, le trafic est moins dense, mais les accidents y sont proportionnellement beaucoup plus graves. Plusieurs facteurs se cumulent :</p>
<ul>
<li>la <strong>visibilité</strong> est limitée à la zone éclairée par les phares : on voit moins loin et moins large ;</li>
<li>les <strong>couleurs et les reliefs</strong> sont mal perçus, les distances et les vitesses des autres véhicules sont plus difficiles à estimer ;</li>
<li>les <strong>usagers vulnérables</strong> (piétons, cyclistes, animaux) sont très difficiles à repérer, surtout s'ils portent des vêtements sombres ;</li>
<li>la <strong>fatigue</strong> et la somnolence sont plus fréquentes, en particulier entre 2 heures et 5 heures du matin ;</li>
<li>la consommation d'<strong>alcool</strong> et de stupéfiants est plus fréquente le soir et le week-end.</li>
</ul>
<p>La règle d'or de la conduite de nuit : <strong>adapter sa vitesse à la distance éclairée</strong>. Vous devez pouvoir vous arrêter dans la zone que vos phares vous permettent de voir. En feux de croisement, qui éclairent environ 30 mètres, rouler vite revient à rouler à l'aveugle.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> de nuit, on réduit sa vitesse, on augmente les distances de sécurité et on redouble d'attention aux usagers vulnérables.</div>`
        },
        {
          titre: "Les feux du véhicule",
          contenu: `<p>Chaque voiture est équipée de plusieurs types de feux, qui n'ont pas la même fonction. Les uns servent à <strong>voir</strong>, les autres à <strong>être vu</strong>.</p>
<table>
<thead><tr><th>Feux</th><th>Rôle</th><th>Quand les utiliser</th></tr></thead>
<tbody>
<tr><td>Feux de position</td><td>Être vu ; ils n'éclairent pas la route</td><td>Stationnement de nuit sur une chaussée non éclairée hors agglomération ; à l'aube et au crépuscule</td></tr>
<tr><td>Feux de croisement</td><td>Voir à environ 30 m sans éblouir</td><td>En agglomération, en croisant ou en suivant un véhicule, dans les tunnels, par visibilité réduite</td></tr>
<tr><td>Feux de route</td><td>Voir à au moins 100 m</td><td>Hors agglomération, la nuit, quand on ne croise ni ne suit personne</td></tr>
<tr><td>Feux de brouillard avant</td><td>Éclairer large et bas</td><td>Brouillard, chute de neige, forte pluie</td></tr>
<tr><td>Feu de brouillard arrière</td><td>Être vu de loin par l'arrière</td><td>Brouillard ou chute de neige uniquement, jamais sous la pluie</td></tr>
<tr><td>Feux de détresse</td><td>Signaler un danger</td><td>Panne, accident, ralentissement brutal ou bouchon sur voie rapide</td></tr>
</tbody>
</table>
<p>Les voitures récentes ont aussi des <strong>feux de jour</strong>, qui s'allument automatiquement au démarrage. Ils rendent le véhicule plus visible le jour, mais ne remplacent jamais les feux de croisement la nuit, dans un tunnel ou par mauvaise visibilité : ils n'éclairent pas la route et, souvent, n'allument pas les feux arrière.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> les feux de position ne permettent pas de rouler la nuit hors agglomération : ils ne servent qu'à signaler la présence du véhicule.</div>`
        },
        {
          titre: "Choisir ses feux selon la situation",
          contenu: `<p><strong>Hors agglomération, la nuit</strong>, on utilise les <strong>feux de route</strong> dès que la route est libre. On passe en <strong>feux de croisement</strong> :</p>
<ul>
<li>dès qu'un véhicule arrive en face, suffisamment tôt pour ne pas éblouir son conducteur ;</li>
<li>quand on suit un autre véhicule de près ;</li>
<li>à l'approche d'un piéton, d'un cycliste ou d'un cavalier ;</li>
<li>lorsque la route est éclairée de façon continue.</li>
</ul>
<p><strong>En agglomération</strong>, la route est en général éclairée : on circule en <strong>feux de croisement</strong>, qui permettent à la fois de voir et d'être vu. Les feux de route y éblouiraient les autres usagers.</p>
<p>Le <strong>jour</strong>, les feux de croisement sont obligatoires dans les <strong>tunnels</strong> et dès que la visibilité est insuffisante (pluie, brouillard, neige). Les motocyclistes doivent rouler en feux de croisement de jour comme de nuit.</p>
<p>Pour avertir un autre usager de sa présence, de nuit, on remplace l'avertisseur sonore par des <strong>appels lumineux</strong> (passage bref des feux de croisement aux feux de route). L'avertisseur sonore n'est utilisé la nuit qu'en cas d'absolue nécessité.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> la nuit, sur une route de campagne, vous rattrapez un cycliste. Vous passez en feux de croisement pour ne pas l'éblouir et vous le dépassez en vous écartant d'au moins 1,50 m.</div>`
        },
        {
          titre: "L'éblouissement",
          contenu: `<p>Être ébloui, c'est être aveuglé quelques secondes par une source lumineuse intense : feux d'un véhicule venant en sens inverse, feux de route dans le rétroviseur, soleil rasant. Après l'éblouissement, l'œil met plusieurs secondes à retrouver une vision normale. À 90 km/h, cela représente des dizaines de mètres parcourus presque à l'aveugle.</p>
<p>Si vous êtes ébloui par un véhicule qui arrive en face :</p>
<ul>
<li><strong>ralentissez</strong>, et arrêtez-vous si nécessaire ;</li>
<li>portez votre regard vers le <strong>bord droit de la chaussée</strong> pour garder un repère ;</li>
<li>ne répondez jamais en allumant vos feux de route : vous éblouiriez à votre tour l'autre conducteur.</li>
</ul>
<p>Si vous êtes ébloui par le véhicule qui vous suit, basculez le <strong>rétroviseur intérieur en position nuit</strong>. Un pare-brise sale ou rayé, ainsi que la fatigue et l'alcool, augmentent la sensibilité à l'éblouissement.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> des feux mal réglés, par exemple après un chargement lourd dans le coffre qui fait pointer les phares vers le haut, éblouissent les autres usagers. Utilisez le correcteur de portée des phares.</div>`
        },
        {
          titre: "Être vu : véhicule et usagers vulnérables",
          contenu: `<p>Être vu est aussi important que voir. Vos feux et vos catadioptres doivent être <strong>propres</strong> et <strong>en état de marche</strong>. Vérifiez régulièrement les ampoules et faites régler les phares si nécessaire.</p>
<p>La nuit, un piéton habillé de sombre n'est visible qu'à une vingtaine de mètres en feux de croisement ; avec un vêtement clair ou un brassard réfléchissant, il peut être vu de beaucoup plus loin. Pour cette raison :</p>
<ul>
<li>les <strong>cyclistes</strong> doivent porter un <strong>gilet de haute visibilité</strong> la nuit hors agglomération, et leur vélo doit être équipé de feux avant et arrière ;</li>
<li>les cyclistes doivent circuler en <strong>file simple</strong> dès la chute du jour ;</li>
<li>en cas de panne, le conducteur et les passagers enfilent leur <strong>gilet de haute visibilité</strong> avant de sortir du véhicule.</li>
</ul>
<p>En cas d'arrêt forcé de nuit sur la chaussée, allumez les <strong>feux de détresse</strong> et placez le triangle de présignalisation à au moins 30 mètres en arrière, si cela peut se faire sans danger.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> de nuit, hors agglomération, un véhicule stationné sur une chaussée non éclairée doit être signalé par ses feux de position.</div>`
        },
        {
          titre: "Brouillard, neige et forte pluie : quels feux ?",
          contenu: `<p>Par mauvaise visibilité, de jour comme de nuit, les feux de croisement sont obligatoires. Les <strong>feux de brouillard avant</strong> peuvent compléter ou remplacer les feux de croisement en cas de <strong>brouillard</strong>, de <strong>chute de neige</strong> ou de <strong>forte pluie</strong>.</p>
<p>Le <strong>feu de brouillard arrière</strong>, très puissant, n'est autorisé que par <strong>brouillard ou chute de neige</strong>. Sous la pluie, il est interdit : il éblouirait le conducteur qui vous suit et pourrait être confondu avec un feu stop. Il faut l'éteindre dès que la visibilité redevient normale.</p>
<p>En cas de brouillard, n'utilisez <strong>jamais les feux de route</strong> : la lumière se réfléchit sur les gouttelettes et forme un mur blanc qui réduit encore la visibilité.</p>
<table>
<thead><tr><th>Situation</th><th>Feux autorisés en plus des feux de position</th></tr></thead>
<tbody>
<tr><td>Forte pluie</td><td>Croisement, brouillard avant</td></tr>
<tr><td>Brouillard</td><td>Croisement, brouillard avant, brouillard arrière</td></tr>
<tr><td>Chute de neige</td><td>Croisement, brouillard avant, brouillard arrière</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « Il pleut fort, j'allume mon feu de brouillard arrière » : c'est faux, ce feu est réservé au brouillard et à la neige.</div>`
        }
      ],
      points_cles: [
        "De nuit, adapter sa vitesse à la distance éclairée par les phares",
        "Feux de croisement : environ 30 m ; feux de route : au moins 100 m",
        "Hors agglomération, passer en feux de croisement pour croiser, suivre ou approcher un usager vulnérable",
        "En agglomération éclairée : feux de croisement",
        "Ébloui : ralentir et regarder le bord droit de la chaussée",
        "Feux de croisement obligatoires dans les tunnels, même éclairés",
        "Feu de brouillard arrière : brouillard ou neige uniquement, jamais sous la pluie",
        "Cyclistes : gilet de haute visibilité la nuit hors agglomération"
      ]
    },
    {
      id: "meteo-adherence",
      theme: "R",
      titre: "Météo, adhérence et aquaplaning",
      duree: 25,
      objectifs: [
        "Comprendre ce qu'est l'adhérence et ce qui la réduit",
        "Reconnaître et éviter l'aquaplaning",
        "Adapter sa conduite à la pluie, au brouillard, à la neige et au verglas",
        "Connaître les vitesses réglementaires par mauvais temps",
        "Anticiper le vent et le soleil rasant"
      ],
      sections: [
        {
          titre: "L'adhérence, contact entre le pneu et la route",
          contenu: `<p>Un véhicule ne tient à la route que par la petite surface de contact de ses quatre pneus, chacune grande comme une carte postale. L'<strong>adhérence</strong> est la capacité de ces pneus à « accrocher » la chaussée. C'est elle qui permet de freiner, d'accélérer et de tourner.</p>
<p>L'adhérence dépend :</p>
<ul>
<li>de l'<strong>état des pneumatiques</strong> : usure, pression, type de pneu (été, hiver, toutes saisons). La profondeur des rainures doit être d'au moins <strong>1,6 mm</strong> ;</li>
<li>de l'<strong>état de la chaussée</strong> : revêtement neuf ou usé, présence d'eau, de gravillons, de feuilles mortes, de boue, de gazole, de neige ou de verglas ;</li>
<li>de la <strong>vitesse</strong> : plus elle est élevée, plus l'adhérence disponible diminue ;</li>
<li>de l'<strong>état des suspensions</strong>, qui maintiennent les roues en contact avec le sol.</li>
</ul>
<p>Le panneau <span class="panneau" data-code="A4"></span> signale une chaussée particulièrement glissante. Il impose de ralentir et d'éviter tout geste brusque.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> les premières gouttes de pluie après une période sèche sont très dangereuses : l'eau se mélange à la poussière et aux dépôts de gomme et d'huile, formant un film gras très glissant.</div>`
        },
        {
          titre: "La pluie et l'aquaplaning",
          contenu: `<p>Sur route mouillée, l'adhérence peut être réduite de moitié : la distance de freinage s'allonge nettement. Le Code impose donc des vitesses plus basses dès qu'il pleut :</p>
<table>
<thead><tr><th>Route</th><th>Temps sec</th><th>Pluie</th></tr></thead>
<tbody>
<tr><td>Autoroute</td><td>130 km/h</td><td>110 km/h</td></tr>
<tr><td>Route à chaussées séparées</td><td>110 km/h</td><td>100 km/h</td></tr>
<tr><td>Autre route hors agglomération</td><td>80 km/h</td><td>70 km/h</td></tr>
</tbody>
</table>
<p>L'<strong>aquaplaning</strong> (ou aquaplanage) se produit lorsque les pneus n'arrivent plus à évacuer l'eau : une pellicule d'eau se forme entre le pneu et la route, et le véhicule « flotte ». Le conducteur perd alors toute possibilité de diriger et de freiner. Le risque augmente avec :</p>
<ul>
<li>la <strong>vitesse</strong> ;</li>
<li>la <strong>hauteur d'eau</strong> sur la chaussée (flaques, ornières remplies d'eau) ;</li>
<li>l'<strong>usure des pneus</strong> et un sous-gonflage.</li>
</ul>
<p>Signes : la direction devient soudain très légère et le moteur s'emballe. Réaction : <strong>lever le pied</strong> de l'accélérateur, <strong>tenir fermement le volant</strong> en gardant les roues droites, et <strong>ne pas freiner brusquement</strong>, jusqu'à ce que les pneus retrouvent le contact.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'aquaplaning se prévient en réduisant sa vitesse sous la pluie et en ayant des pneus en bon état, correctement gonflés.</div>`
        },
        {
          titre: "Le brouillard",
          contenu: `<p>Le brouillard réduit la visibilité, parfois à quelques mètres, et déforme la perception des distances : les véhicules semblent plus loin qu'ils ne le sont. Il est souvent localisé (fonds de vallée, abords de rivières) et peut surprendre brutalement.</p>
<p>Lorsque la <strong>visibilité est inférieure à 50 mètres</strong>, la vitesse est limitée à <strong>50 km/h sur toutes les routes</strong>, autoroute comprise. Sur autoroute et sur certaines routes, les balises de bord sont espacées de 50 mètres : si vous ne voyez pas la balise suivante, la visibilité est inférieure à 50 m.</p>
<ul>
<li>Allumez les feux de croisement, éventuellement les feux de brouillard avant et arrière.</li>
<li>Augmentez fortement la distance avec le véhicule qui précède.</li>
<li>Ne dépassez pas : vous ne voyez pas ce qui arrive en face.</li>
<li>Ne suivez pas aveuglément les feux arrière d'un autre véhicule : il peut freiner brusquement ou quitter la route.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> les carambolages sur autoroute se produisent souvent dans des bancs de brouillard. Ralentissez dès l'entrée dans le brouillard, sans attendre de ne plus rien voir.</div>`
        },
        {
          titre: "Neige et verglas",
          contenu: `<p>Sur neige, la distance de freinage peut être multipliée par 3 ou 4 ; sur verglas, par 10 environ. Aucune vitesse réglementaire particulière n'est fixée : c'est au conducteur de rouler <strong>très lentement</strong> et avec <strong>souplesse</strong>.</p>
<ul>
<li>Démarrez doucement, si possible en deuxième vitesse, pour éviter le patinage.</li>
<li>Évitez les freinages, les accélérations et les coups de volant brusques ; utilisez le frein moteur.</li>
<li>Multipliez les distances de sécurité.</li>
<li>Avant de partir, dégagez entièrement la neige et le givre des vitres, des feux, des rétroviseurs et du toit.</li>
</ul>
<p>Le <strong>verglas</strong> est d'autant plus dangereux qu'il est souvent invisible. Il se forme en priorité sur les <strong>ponts</strong>, dans les <strong>zones ombragées</strong> (forêts, versants nord) et à proximité des cours d'eau, lorsque la température est proche de 0 °C. Beaucoup de véhicules affichent un témoin à l'approche de cette température.</p>
<p>Dans les communes de montagne désignées par le préfet, il est obligatoire, du <strong>1er novembre au 31 mars</strong>, de détenir des chaînes ou des chaussettes à neige dans le coffre ou d'être équipé de pneus hiver ou toutes saisons. Les chaînes se montent sur les roues motrices.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un matin d'hiver à 1 °C, la route est sèche, mais un pont au-dessus d'une rivière peut être verglacé. Vous ralentissez avant le pont et le franchissez sans freiner ni tourner brusquement.</div>`
        },
        {
          titre: "Vent, chaleur et soleil",
          contenu: `<p>Le <strong>vent latéral</strong> peut déporter brutalement un véhicule, surtout s'il est haut ou léger, ou s'il tracte une caravane. Les rafales sont les plus dangereuses à la <strong>sortie d'une forêt</strong>, d'une tranchée ou d'un tunnel, sur les <strong>ponts et viaducs</strong>, et au moment où l'on <strong>dépasse un poids lourd</strong> (effet d'abri puis de rafale). Tenez fermement le volant et réduisez votre vitesse. Les deux-roues, eux aussi, peuvent être déportés : laissez-leur plus de place.</p>
<p>La <strong>chaleur</strong> ramollit parfois le revêtement et fait remonter le bitume, ce qui le rend glissant ; elle favorise aussi la fatigue. Le <strong>soleil rasant</strong>, le matin ou le soir, éblouit et empêche de voir les feux, les panneaux et les usagers. Utilisez le pare-soleil, gardez un pare-brise propre, portez des lunettes de soleil adaptées et ralentissez.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le danger météo se combat toujours de la même façon : ralentir, augmenter les distances, éviter les gestes brusques et anticiper.</div>`
        },
        {
          titre: "Synthèse : adapter sa conduite au temps qu'il fait",
          contenu: `<p>Face à une météo défavorable, le premier réflexe est de se demander si le déplacement est vraiment nécessaire. Consultez les prévisions et les informations routières avant de partir, et reportez le trajet en cas de vigilance orange ou rouge pour la neige, le verglas ou les inondations.</p>
<table>
<thead><tr><th>Conditions</th><th>Risque principal</th><th>Bon comportement</th></tr></thead>
<tbody>
<tr><td>Pluie</td><td>Freinage allongé, aquaplaning, projections d'eau</td><td>Vitesses réduites, feux de croisement, distances augmentées</td></tr>
<tr><td>Brouillard</td><td>Visibilité très réduite</td><td>50 km/h si moins de 50 m de visibilité, feux de brouillard, pas de dépassement</td></tr>
<tr><td>Neige</td><td>Perte d'adhérence, visibilité réduite</td><td>Équipements hivernaux, conduite très souple, frein moteur</td></tr>
<tr><td>Verglas</td><td>Adhérence presque nulle, danger invisible</td><td>Vitesse très faible, aucun geste brusque, prudence sur les ponts</td></tr>
<tr><td>Vent fort</td><td>Déport latéral</td><td>Volant tenu fermement, vitesse réduite, distance latérale avec les deux-roues</td></tr>
</tbody>
</table>
<p>Une route <strong>inondée</strong> ne doit jamais être franchie : quelques dizaines de centimètres d'eau suffisent à emporter une voiture, et la chaussée peut avoir été arrachée sous l'eau. Faites demi-tour lorsque c'est possible sans danger et cherchez un autre itinéraire.</p>
<p>Après avoir traversé une flaque profonde, les freins peuvent être moins efficaces : freinez légèrement à plusieurs reprises pour les sécher.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> une grande partie des victimes des inondations meurent dans leur véhicule. N'empruntez jamais une route submergée, même si vous la connaissez bien.</div>`
        }
      ],
      points_cles: [
        "L'adhérence dépend des pneus, de la chaussée, de la vitesse et des suspensions",
        "Profondeur minimale des rainures des pneus : 1,6 mm",
        "Pluie : 110 km/h sur autoroute, 100 km/h sur chaussées séparées, 70 km/h sur les routes à 80",
        "Aquaplaning : lever le pied, tenir le volant droit, ne pas freiner brusquement",
        "Visibilité inférieure à 50 m : 50 km/h sur toutes les routes",
        "Verglas : ponts, zones ombragées, température proche de 0 °C",
        "Zones de montagne désignées : équipements hivernaux obligatoires du 1er novembre au 31 mars",
        "Vent latéral : sorties de forêt, ponts, dépassement des poids lourds"
      ],
      panneaux: ["A4", "B14:110", "B14:70"]
    }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème R — chapitres (2/2) ───────────── */
  P.chapitres.push(
    {
      id: "virages-montagne",
      theme: "R",
      titre: "Virages et routes de montagne",
      duree: 20,
      objectifs: [
        "Aborder un virage à la bonne vitesse et sur la bonne trajectoire",
        "Comprendre l'effet de la force centrifuge",
        "Savoir qui doit manœuvrer lors d'un croisement difficile en montagne",
        "Descendre une forte pente sans surchauffer les freins",
        "Connaître les panneaux associés"
      ],
      sections: [
        {
          titre: "Pourquoi les virages sont dangereux",
          contenu: `<p>Une part importante des accidents mortels hors agglomération sont des <strong>sorties de route</strong>, très souvent dans un virage. Dans une courbe, le véhicule est soumis à la <strong>force centrifuge</strong>, qui le pousse vers l'extérieur du virage. Cette force augmente avec :</p>
<ul>
<li>la <strong>vitesse</strong>, et très fortement : elle est proportionnelle à son carré. À vitesse doublée, la force est multipliée par quatre ;</li>
<li>la <strong>courbure</strong> du virage : plus il est serré, plus elle est forte ;</li>
<li>la <strong>masse</strong> du véhicule (chargement, passagers, remorque).</li>
</ul>
<p>Si la force centrifuge dépasse l'adhérence des pneus, le véhicule quitte sa trajectoire. Sur route mouillée, gravillonnée ou verglacée, cette limite est atteinte à des vitesses beaucoup plus faibles.</p>
<p>Les virages dangereux sont annoncés par les panneaux <span class="panneau" data-code="A1a"></span> (virage à droite) et <span class="panneau" data-code="A1b"></span> (virage à gauche), implantés à environ 150 m hors agglomération. Des balises de virage (chevrons blancs sur fond rouge ou bleu) peuvent matérialiser la courbe.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> doubler sa vitesse, c'est multiplier par quatre la force qui pousse le véhicule hors du virage.</div>`
        },
        {
          titre: "Aborder un virage : avant, pendant, après",
          contenu: `<p>Un virage se prépare <strong>avant</strong> d'y entrer. La technique se résume en trois temps :</p>
<ol>
<li><strong>Avant le virage</strong>, en ligne droite : on observe sa courbure, on ralentit et l'on choisit le rapport de vitesse adapté. Tout le freinage se fait à ce moment-là, roues droites.</li>
<li><strong>Dans le virage</strong> : on garde une vitesse stable, on maintient une légère accélération pour stabiliser le véhicule, et l'on porte le regard <strong>vers la sortie</strong> du virage, là où l'on veut aller.</li>
<li><strong>À la sortie</strong> : lorsque la route redevient droite et que la visibilité est dégagée, on peut accélérer progressivement.</li>
</ol>
<p>Freiner fort en plein virage déstabilise le véhicule et peut provoquer un dérapage. Si vous êtes entré trop vite, freinez avec modération en gardant le volant ferme, mais l'erreur est de ne pas avoir ralenti avant.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « je freine dans le virage » est presque toujours la mauvaise réponse. On freine avant, on garde l'allure dans le virage.</div>`
        },
        {
          titre: "La position sur la chaussée",
          contenu: `<p>Dans un virage, le conducteur doit rester <strong>dans sa voie</strong>, sans jamais couper le virage par la gauche :</p>
<ul>
<li>dans un <strong>virage à gauche</strong>, on reste bien à droite : la visibilité est réduite et un véhicule peut arriver en face, parfois en mordant sur votre voie ;</li>
<li>dans un <strong>virage à droite</strong>, on se tient au centre de sa voie, sans serrer excessivement le bord, où peuvent se trouver un piéton, un cycliste ou un véhicule arrêté.</li>
</ul>
<p>Le <strong>dépassement</strong> est interdit à l'approche d'un virage et dans un virage lorsque la visibilité vers l'avant est insuffisante. Une <strong>ligne continue</strong> <span class="panneau" data-code="LIGNE_CONTINUE"></span> y est souvent tracée : il est interdit de la franchir ou de la chevaucher, y compris avec les roues de gauche.</p>
<p>Dans une série de virages, l'enchaînement exige de l'anticipation : on adopte une vitesse régulière, adaptée au virage le plus serré. Le panneau de virage peut être complété par un panonceau indiquant « succession de virages ».</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> dans un virage à gauche sans visibilité, un camion arrive en face en débordant légèrement de sa voie. En restant à droite et à vitesse modérée, vous avez la place et le temps de le croiser.</div>`
        },
        {
          titre: "Croiser sur une route de montagne",
          contenu: `<p>En montagne, les routes sont souvent étroites et sinueuses, bordées d'un ravin ou d'une paroi. Le croisement peut y être difficile. La règle est la suivante :</p>
<ul>
<li>lorsque le croisement est difficile, c'est le <strong>véhicule qui descend</strong> qui doit s'arrêter le premier, à temps ;</li>
<li>si une <strong>marche arrière</strong> est nécessaire entre deux véhicules de même catégorie (deux voitures, par exemple), c'est aussi le <strong>véhicule descendant</strong> qui recule jusqu'à un endroit permettant le croisement ;</li>
<li>exception : si le véhicule qui monte se trouve juste à côté d'une <strong>place d'évitement</strong>, c'est à lui de s'y ranger, car c'est manifestement plus facile.</li>
</ul>
<p>Cette règle s'explique : un véhicule qui monte redémarre difficilement en côte, alors que celui qui descend manœuvre plus aisément. Entre véhicules de catégories différentes, c'est le plus maniable qui recule : un véhicule seul plutôt qu'un ensemble avec remorque, un véhicule léger plutôt qu'un poids lourd, un camion plutôt qu'un autocar.</p>
<p>Hors agglomération, l'<strong>avertisseur sonore</strong> peut être utilisé de jour pour signaler son approche avant un virage sans visibilité sur une route étroite de montagne ; la nuit, on utilise plutôt les appels lumineux.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en montagne, en cas de croisement difficile, le véhicule descendant s'arrête le premier ; entre deux voitures, c'est lui qui recule si besoin, sauf si le montant est près d'une place d'évitement. Face à un poids lourd ou un autocar, c'est la voiture qui recule.</div>`
        },
        {
          titre: "Monter et descendre une forte pente",
          contenu: `<p>Le panneau <span class="panneau" data-code="A20"></span> annonce une <strong>descente dangereuse</strong> ; le pourcentage indiqué est la pente (10 % : 10 mètres de dénivelé pour 100 mètres parcourus).</p>
<p>En <strong>descente</strong>, le véhicule accélère seul. Si l'on freine en continu avec la pédale, les freins chauffent et perdent leur efficacité : c'est l'<strong>échauffement des freins</strong> (fading), qui peut conduire à une perte totale de freinage. Il faut donc :</p>
<ul>
<li>engager un <strong>rapport inférieur</strong> avant la descente, en général le même rapport qu'à la montée, pour utiliser le <strong>frein moteur</strong> ;</li>
<li>freiner <strong>par intermittence</strong>, fermement puis relâcher, plutôt que garder le pied appuyé en permanence ;</li>
<li>ne jamais descendre au point mort, ce qui supprime le frein moteur.</li>
</ul>
<p>Sur certaines longues descentes, des <strong>voies de détresse</strong> (lits d'arrêt en gravier) permettent à un véhicule privé de freins de s'immobiliser. Elles sont réservées à cet usage.</p>
<p>En <strong>montée</strong>, on anticipe le changement de rapport pour ne pas caler. Les véhicules lents peuvent disposer d'une voie supplémentaire à droite ; le dépassement n'est permis que si la visibilité est suffisante.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> une odeur de brûlé et une pédale de frein qui s'enfonce sans effet en descente signalent des freins surchauffés. Rétrogradez et arrêtez-vous dès que possible pour les laisser refroidir.</div>`
        },
        {
          titre: "La montagne en hiver",
          contenu: `<p>En montagne, la neige et le verglas sont fréquents de l'automne au printemps, parfois dès le début de soirée. Dans les communes désignées par le préfet, les véhicules doivent, du <strong>1er novembre au 31 mars</strong>, être équipés de pneus hiver ou toutes saisons, ou transporter des chaînes ou des chaussettes à neige.</p>
<table>
<thead><tr><th>Situation</th><th>Bon réflexe</th></tr></thead>
<tbody>
<tr><td>Montée enneigée</td><td>Garder un élan régulier, éviter de s'arrêter, ne pas patiner</td></tr>
<tr><td>Descente enneigée</td><td>Rapport inférieur, frein moteur, freinages très doux</td></tr>
<tr><td>Virage verglacé</td><td>Vitesse très réduite avant le virage, aucun geste brusque</td></tr>
<tr><td>Engin de déneigement</td><td>Rester derrière, à bonne distance, sans tenter de le dépasser</td></tr>
</tbody>
</table>
<p>Exercez-vous à monter les chaînes avant d'en avoir besoin, et installez-les sur une aire de chaînage, à l'abri de la circulation.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> en descendant vers la vallée, vous suivez un chasse-neige qui roule lentement. Vous restez derrière lui : la route qu'il a dégagée est plus sûre que celle qui se trouve devant lui.</div>`
        }
      ],
      points_cles: [
        "La force centrifuge augmente avec le carré de la vitesse",
        "Ralentir et freiner avant le virage, roues droites ; regarder vers la sortie",
        "Dans un virage à gauche, rester bien à droite ; ne jamais couper",
        "Panneaux A1a et A1b : virage dangereux à environ 150 m hors agglomération",
        "Croisement difficile en montagne : le véhicule descendant s'arrête ; entre véhicules de même catégorie, il recule si besoin",
        "En descente : rapport inférieur, frein moteur, freinage par intermittence",
        "Ne jamais descendre au point mort",
        "Zones de montagne désignées : équipements hivernaux du 1er novembre au 31 mars"
      ],
      panneaux: ["A1a", "A1b", "A20", "LIGNE_CONTINUE"]
    },
    {
      id: "voies-rapides-route-3-voies",
      theme: "R",
      titre: "Autoroute en pratique, route à trois voies et tunnels",
      duree: 25,
      objectifs: [
        "S'insérer sur une autoroute en sécurité",
        "Choisir sa voie et dépasser sur une chaussée à plusieurs voies",
        "Utiliser correctement la bande d'arrêt d'urgence",
        "Maintenir une distance de sécurité d'au moins 2 secondes",
        "Circuler sur une route à trois voies et dans un tunnel"
      ],
      sections: [
        {
          titre: "S'insérer sur l'autoroute",
          contenu: `<p>L'entrée sur l'autoroute <span class="panneau" data-code="C207"></span> se fait par une <strong>bretelle d'accès</strong>, prolongée par une <strong>voie d'accélération</strong>. Cette voie sert à atteindre une vitesse proche de celle des véhicules qui circulent sur l'autoroute, pour s'insérer sans les gêner.</p>
<ol>
<li>Sur la voie d'accélération, mettez le <strong>clignotant gauche</strong> et accélérez franchement.</li>
<li>Observez la circulation dans le <strong>rétroviseur intérieur</strong>, le <strong>rétroviseur gauche</strong>, puis contrôlez l'<strong>angle mort</strong> en tournant la tête.</li>
<li>Repérez un intervalle suffisant et insérez-vous progressivement sur la voie de droite.</li>
</ol>
<p>Le conducteur qui s'insère doit <strong>céder le passage</strong> aux véhicules qui circulent sur l'autoroute, sauf signalisation contraire. Ces derniers peuvent faciliter l'insertion en se décalant sur la voie de gauche si elle est libre, mais ils n'y sont pas obligés.</p>
<p>S'arrêter au bout de la voie d'accélération est très dangereux : il devient presque impossible de repartir. Il faut anticiper et adapter son allure dès le début de la voie.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> sur la voie d'accélération, on accélère, on ne ralentit pas « pour regarder ». Une insertion trop lente oblige les autres à freiner.</div>`
        },
        {
          titre: "Circuler et dépasser sur une chaussée à plusieurs voies",
          contenu: `<p>Sur une autoroute ou une route à chaussées séparées, on circule sur la <strong>voie la plus à droite</strong>. Les voies de gauche servent au <strong>dépassement</strong> : une fois le dépassement terminé, on se rabat à droite dès que possible, sans couper la route du véhicule dépassé.</p>
<ul>
<li>Le dépassement se fait <strong>par la gauche</strong>. Déboîter à droite pour doubler un véhicule lent sur la voie de gauche est interdit.</li>
<li>Lorsque la circulation s'est établie en <strong>files ininterrompues</strong> sur toutes les voies, le fait qu'une file de droite avance plus vite qu'une file de gauche n'est pas considéré comme un dépassement par la droite.</li>
<li>Sur la voie la plus à gauche, il est interdit de rouler à moins de <strong>80 km/h</strong> lorsque la circulation est fluide, la visibilité suffisante et la chaussée sèche.</li>
<li>Un panneau <span class="panneau" data-code="C24a"></span> peut affecter les voies : voie réservée, voie interdite aux poids lourds, nombre de voies ouvertes.</li>
</ul>
<p>Pour quitter l'autoroute, on se place sur la voie de droite suffisamment tôt, on met le clignotant droit et on <strong>ralentit sur la voie de décélération</strong>, pas sur la voie principale. La vitesse conseillée sur la bretelle doit être respectée.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> la voie de droite est libre et vous roulez sur la voie du milieu à vitesse constante : vous devez vous rabattre à droite. Rester sur la voie du milieu sans raison gêne les autres usagers.</div>`
        },
        {
          titre: "Distance de sécurité et marquages",
          contenu: `<p>Sur autoroute, les vitesses élevées rendent la distance de sécurité vitale : au moins <strong>2 secondes</strong> entre vous et le véhicule qui précède, davantage sous la pluie, de nuit ou en cas de fatigue.</p>
<table>
<thead><tr><th>Repère</th><th>Ce qu'il permet de vérifier</th></tr></thead>
<tbody>
<tr><td>Compter « un crocodile, deux crocodiles » à partir d'un point fixe</td><td>L'intervalle de 2 secondes, à toute vitesse</td></tr>
<tr><td>Les traits de la ligne qui borde la bande d'arrêt d'urgence</td><td>Garder au moins deux traits d'écart convient à 130 km/h par temps sec</td></tr>
<tr><td>Les chevrons peints au sol sur certaines sections</td><td>Un panneau rappelle qu'il faut garder au moins deux chevrons d'écart ; un seul chevron signale le danger</td></tr>
</tbody>
</table>
<p>Les <strong>lignes</strong> tracées sur la chaussée séparent les voies : une ligne discontinue <span class="panneau" data-code="LIGNE_DISCONTINUE"></span> peut être franchie pour changer de voie après avoir contrôlé rétroviseurs et angle mort ; une ligne continue ne peut pas l'être. Les zones hachurées, notamment à la séparation des bretelles, ne doivent pas être chevauchées.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 2 secondes au minimum ; sur autoroute, deux traits de la bande d'arrêt d'urgence ou deux chevrons.</div>`
        },
        {
          titre: "La bande d'arrêt d'urgence et la panne",
          contenu: `<p>La <strong>bande d'arrêt d'urgence</strong> (BAU) est réservée aux arrêts en cas de <strong>nécessité absolue</strong> : panne, malaise, accident. Il est interdit d'y circuler (135 € et 3 points), de s'y arrêter pour se reposer, téléphoner, consulter une carte ou satisfaire un besoin naturel. Elle doit rester libre pour les secours.</p>
<p>En cas de panne :</p>
<ol>
<li>allumez les <strong>feux de détresse</strong> et rangez-vous le plus à droite possible sur la BAU, roues braquées vers l'extérieur ;</li>
<li>enfilez le <strong>gilet de haute visibilité</strong> avant de sortir, et faites sortir tous les occupants <strong>par les portières côté droit</strong> ;</li>
<li>mettez-vous à l'abri <strong>derrière la glissière de sécurité</strong> ;</li>
<li>appelez les secours depuis une <strong>borne d'appel d'urgence</strong> (environ tous les 2 km) ou par le 112.</li>
</ol>
<p>Sur autoroute, ne posez le triangle de présignalisation que si cela peut se faire sans vous mettre en danger. Pour repartir, prenez de la vitesse sur la BAU avant de vous insérer, comme sur une voie d'accélération.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> sur la bande d'arrêt d'urgence, on ne reste jamais dans le véhicule. De nombreux accidents mortels sont des collisions avec des véhicules arrêtés sur la BAU.</div>`
        },
        {
          titre: "La route à trois voies",
          contenu: `<p>Certaines routes à double sens comportent <strong>trois voies</strong>. La voie de gauche est réservée au sens inverse. La <strong>voie centrale</strong> sert au dépassement et peut être plus ou moins partagée :</p>
<ul>
<li>si elle est séparée des deux autres par des <strong>lignes discontinues</strong>, elle peut être utilisée pour dépasser par les usagers des <strong>deux sens</strong> : c'est la situation la plus dangereuse, car un véhicule venant d'en face peut s'y engager en même temps ;</li>
<li>si une <strong>ligne mixte</strong> <span class="panneau" data-code="LIGNE_MIXTE"></span> ou une ligne continue la sépare de votre voie, seul le sens qui a la ligne discontinue de son côté peut l'utiliser ;</li>
<li>dans tous les cas, on ne doit <strong>jamais emprunter la voie la plus à gauche</strong>.</li>
</ul>
<p>Avant d'utiliser la voie centrale, assurez-vous qu'aucun véhicule venant en sens inverse ne s'apprête à faire de même, et que le dépassement est court. Si les deux sens sont alternativement affectés, respectez les lignes et les flèches de rabattement qui annoncent la fin de votre possibilité de dépasser.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> sur une route à trois voies, la voie centrale n'appartient pas automatiquement à votre sens. Lisez les lignes avant de vous y engager.</div>`
        },
        {
          titre: "Les tunnels : compléments pratiques",
          contenu: `<p>Dans un tunnel, on allume les <strong>feux de croisement</strong> avant d'entrer, on retire ses lunettes de soleil et l'on écoute la fréquence radio indiquée. Le passage de la lumière à l'obscurité demande quelques secondes d'adaptation de l'œil : ralentissez légèrement à l'entrée.</p>
<ul>
<li>Respectez la vitesse affichée et la <strong>distance</strong> imposée par la signalisation ou par les marquages ; certains tunnels comportent des repères lumineux pour l'estimer.</li>
<li>Ne dépassez pas lorsque c'est interdit, ne faites jamais demi-tour ni marche arrière, ne vous arrêtez pas sauf urgence.</li>
<li>En cas de bouchon, allumez les feux de détresse, gardez au moins 5 mètres avec le véhicule de devant et coupez le moteur si l'arrêt se prolonge.</li>
</ul>
<p>En cas de panne, rangez-vous sur la droite ou dans un garage, feux de détresse allumés, moteur coupé, et appelez depuis une niche de sécurité. En cas d'incendie, laissez la clé sur le véhicule et évacuez à pied par la sortie de secours la plus proche.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> tunnel = feux de croisement, distance respectée, ni arrêt ni demi-tour ; en cas de fumée, on évacue à pied.</div>`
        }
      ],
      points_cles: [
        "Sur la voie d'accélération : clignotant, accélération, rétroviseurs et angle mort, puis céder le passage",
        "On circule sur la voie de droite ; on dépasse par la gauche et on se rabat dès que possible",
        "Voie de gauche de l'autoroute : pas moins de 80 km/h en conditions normales",
        "On ralentit sur la voie de décélération, pas sur la voie principale",
        "Distance de sécurité : 2 secondes, deux traits de BAU ou deux chevrons",
        "BAU : arrêt seulement en cas de nécessité absolue ; occupants derrière la glissière",
        "Route à trois voies : la voie de gauche est interdite ; la voie centrale dépend des lignes",
        "Tunnel : feux de croisement, distances, ni arrêt ni demi-tour"
      ],
      panneaux: ["C207", "C208", "C24a", "B25:80", "LIGNE_DISCONTINUE", "LIGNE_MIXTE"]
    }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème R — questions R-001 à R-056 ───────────── */
  P.questions.push(
    { id: "R-001", chapitre: "nuit-eclairage", situation: "De nuit, hors agglomération, vous circulez sur une route non éclairée. Personne devant vous, personne en face.",
      q: "J'utilise mes feux :", options: ["De position", "De croisement", "De route"], bonnes: [2],
      explication: "Hors agglomération, la nuit, on utilise les feux de route, qui éclairent à au moins 100 m, dès que l'on ne croise ni ne suit personne." },
    { id: "R-002", chapitre: "nuit-eclairage", situation: "De nuit, hors agglomération, vous roulez en feux de route.",
      q: "Je passe en feux de croisement :", options: ["Quand un véhicule arrive en face", "Quand je suis un véhicule de près", "Quand la route est libre et non éclairée"], bonnes: [0, 1],
      explication: "On passe en feux de croisement pour croiser ou suivre un véhicule, afin de ne pas éblouir son conducteur. Sur une route libre et non éclairée, les feux de route sont adaptés." },
    { id: "R-003", chapitre: "nuit-eclairage",
      q: "Les feux de croisement éclairent la route sur environ :", options: ["30 mètres", "100 mètres", "200 mètres"], bonnes: [0],
      explication: "Les feux de croisement éclairent environ 30 m sans éblouir ; les feux de route éclairent au moins 100 m. En feux de croisement, il faut donc modérer sa vitesse." },
    { id: "R-004", chapitre: "nuit-eclairage", situation: "De nuit, vous êtes ébloui par les phares d'un véhicule qui arrive en face.",
      q: "Je :", options: ["Ralentis", "Regarde vers le bord droit de la chaussée", "Allume mes feux de route pour le prévenir"], bonnes: [0, 1],
      explication: "Ébloui, on ralentit et l'on fixe le bord droit de la chaussée pour garder un repère. Répondre avec ses feux de route éblouirait l'autre conducteur." },
    { id: "R-005", chapitre: "nuit-eclairage", situation: "De nuit, vous venez de passer ce panneau. Les rues sont bien éclairées.", panneau: "EB10:Ville",
      q: "J'utilise mes feux :", options: ["De croisement", "De route"], bonnes: [0],
      explication: "En agglomération éclairée, on circule en feux de croisement : ils permettent de voir et d'être vu sans éblouir les autres usagers." },
    { id: "R-006", chapitre: "nuit-eclairage", situation: "Il pleut très fort et la visibilité est réduite.",
      q: "Je peux allumer :", options: ["Les feux de croisement", "Les feux de brouillard avant", "Le feu de brouillard arrière"], bonnes: [0, 1],
      explication: "Par forte pluie, les feux de croisement et les feux de brouillard avant sont autorisés. Le feu de brouillard arrière est réservé au brouillard et à la chute de neige." },
    { id: "R-007", chapitre: "nuit-eclairage", situation: "De nuit, vous entrez dans un épais banc de brouillard.",
      q: "J'évite d'utiliser :", options: ["Les feux de route", "Les feux de croisement"], bonnes: [0],
      explication: "Dans le brouillard, la lumière des feux de route se réfléchit sur les gouttelettes et forme un mur blanc. On utilise les feux de croisement et, si besoin, les feux de brouillard." },
    { id: "R-008", chapitre: "nuit-eclairage", situation: "En plein jour, vous entrez dans un tunnel bien éclairé.",
      q: "Je dois allumer mes feux de croisement :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Les feux de croisement sont obligatoires dans les tunnels, même éclairés et même de jour : ils permettent d'être vu, notamment dans les rétroviseurs des autres usagers." },
    { id: "R-009", chapitre: "nuit-eclairage", situation: "Votre voiture est équipée de feux de jour qui s'allument automatiquement au démarrage. La nuit tombe.",
      q: "Mes feux de jour suffisent pour circuler :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Les feux de jour servent à être vu de jour. Ils n'éclairent pas la route et n'allument souvent pas les feux arrière : la nuit, il faut les feux de croisement ou de route." },
    { id: "R-010", chapitre: "nuit-eclairage", situation: "De nuit, hors agglomération, vous voulez signaler votre approche à un véhicule que vous allez dépasser.",
      q: "J'utilise de préférence :", options: ["L'avertisseur sonore", "Des appels lumineux"], bonnes: [1],
      explication: "La nuit, les avertissements se font par appels lumineux. L'avertisseur sonore n'est utilisé qu'en cas d'absolue nécessité." },
    { id: "R-011", chapitre: "nuit-eclairage", situation: "De nuit, hors agglomération, vous rattrapez un cycliste.",
      q: "Ce cycliste est tenu de porter un gilet de haute visibilité :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Hors agglomération, de nuit ou lorsque la visibilité est insuffisante, le cycliste et son passager doivent porter un gilet de haute visibilité." },
    { id: "R-012", chapitre: "nuit-eclairage", situation: "De nuit, hors agglomération, vous devez laisser votre véhicule stationné sur une chaussée non éclairée.",
      q: "Mon véhicule doit être signalé par :", options: ["Ses feux de position", "Ses feux de route", "Aucun feu"], bonnes: [0],
      explication: "Un véhicule stationné de nuit sur une chaussée non éclairée hors agglomération doit être signalé par ses feux de position pour être vu des autres usagers." },
    { id: "R-013", chapitre: "nuit-eclairage", situation: "Vous partez de nuit avec un coffre très chargé. Les conducteurs venant en face vous font des appels lumineux.",
      q: "Pour ne pas les éblouir, je :", options: ["Règle la portée de mes phares avec le correcteur", "Roule en feux de position"], bonnes: [0],
      explication: "Un chargement lourd à l'arrière fait pointer les phares vers le haut. Le correcteur de portée permet de les abaisser ; les feux de position ne permettent pas de voir la route." },
    { id: "R-014", chapitre: "meteo-adherence", panneau: "A4",
      q: "Ce panneau m'invite à :", options: ["Ralentir", "Éviter les freinages brusques", "Accélérer pour franchir rapidement la zone"], bonnes: [0, 1],
      explication: "Le panneau A4 signale une chaussée glissante : on ralentit et l'on évite tout geste brusque, au freinage comme au volant." },
    { id: "R-015", chapitre: "meteo-adherence", situation: "Il commence à pleuvoir après plusieurs semaines de temps sec.",
      q: "La chaussée est :", options: ["Particulièrement glissante", "Plus adhérente que d'habitude"], bonnes: [0],
      explication: "Les premières gouttes mélangent l'eau à la poussière, à la gomme et aux traces d'huile : il se forme un film gras très glissant." },
    { id: "R-016", chapitre: "meteo-adherence", situation: "Il pleut. Vous avez le permis depuis 10 ans et circulez sur cette route.", panneau: "C207",
      q: "Ma vitesse maximale est de :", options: ["130 km/h", "110 km/h", "90 km/h"], bonnes: [1],
      explication: "Sur autoroute, la vitesse maximale passe de 130 à 110 km/h en cas de pluie ou d'autres précipitations." },
    { id: "R-017", chapitre: "meteo-adherence", situation: "Il pleut. Vous circulez hors agglomération sur une route à double sens sans séparateur central, sans panneau particulier.",
      q: "Ma vitesse maximale est de :", options: ["80 km/h", "70 km/h", "50 km/h"], bonnes: [1],
      explication: "Sur une route limitée à 80 km/h, la vitesse maximale est abaissée à 70 km/h en cas de précipitations." },
    { id: "R-018", chapitre: "meteo-adherence",
      q: "Le risque d'aquaplaning augmente avec :", options: ["La vitesse", "L'usure des pneus", "La hauteur d'eau sur la chaussée", "L'âge du conducteur"], bonnes: [0, 1, 2],
      explication: "L'aquaplaning survient quand les pneus ne peuvent plus évacuer l'eau : plus la vitesse est élevée, les pneus usés ou sous-gonflés, et l'eau abondante, plus le risque est grand." },
    { id: "R-019", chapitre: "meteo-adherence", situation: "Sous une pluie battante, votre direction devient soudain très légère et le moteur s'emballe.",
      q: "Je :", options: ["Freine fortement", "Lève le pied de l'accélérateur", "Tiens fermement le volant, roues droites"], bonnes: [1, 2],
      explication: "C'est un aquaplaning. On lève le pied et l'on garde les roues droites jusqu'à retrouver l'adhérence ; un freinage brutal ferait perdre le contrôle." },
    { id: "R-020", chapitre: "meteo-adherence", situation: "Sur cette route, un brouillard épais limite la visibilité à environ 40 mètres.", panneau: "C207",
      q: "Ma vitesse maximale est de :", options: ["50 km/h", "70 km/h", "90 km/h"], bonnes: [0],
      explication: "Quand la visibilité est inférieure à 50 m, la vitesse est limitée à 50 km/h sur toutes les routes, autoroute comprise." },
    { id: "R-021", chapitre: "meteo-adherence", situation: "Sur autoroute, dans le brouillard, vous ne distinguez plus la balise de bord suivante.",
      q: "La visibilité est :", options: ["Inférieure à 50 mètres", "Supérieure à 100 mètres"], bonnes: [0],
      explication: "Les balises de bord sont espacées de 50 m. Si la suivante n'est pas visible, la visibilité est inférieure à 50 m : 50 km/h au maximum." },
    { id: "R-022", chapitre: "meteo-adherence", situation: "Un matin d'hiver, le thermomètre indique 1 °C.",
      q: "Le verglas risque de se former en priorité :", options: ["Sur les ponts", "Dans les zones ombragées", "Dans les lignes droites ensoleillées"], bonnes: [0, 1],
      explication: "Le verglas apparaît d'abord là où la route refroidit le plus ou reste à l'ombre : ponts, sous-bois, versants nord, abords de cours d'eau." },
    { id: "R-023", chapitre: "meteo-adherence", situation: "Votre voiture est garée sur une route enneigée.",
      q: "Pour démarrer, je :", options: ["Démarre en douceur, si possible en deuxième vitesse", "Accélère fortement en première"], bonnes: [0],
      explication: "Sur la neige, une accélération trop forte fait patiner les roues motrices. Démarrer en douceur, en deuxième, limite le patinage." },
    { id: "R-024", chapitre: "meteo-adherence", situation: "En janvier, vous traversez une commune de montagne où les équipements hivernaux sont obligatoires.",
      q: "Je respecte cette obligation si :", options: ["Mon véhicule a des pneus hiver", "J'ai des chaînes à neige dans le coffre", "J'ai seulement une pelle dans le coffre"], bonnes: [0, 1],
      explication: "Du 1er novembre au 31 mars, dans les communes désignées, il faut des pneus hiver ou toutes saisons, ou bien des chaînes ou chaussettes à neige dans le coffre." },
    { id: "R-025", chapitre: "meteo-adherence", situation: "Un fort vent souffle de côté.",
      q: "Le risque d'être déporté est particulièrement important :", options: ["À la sortie d'une forêt", "Sur un viaduc", "Au moment de dépasser un poids lourd"], bonnes: [0, 1, 2],
      explication: "Les rafales surprennent quand on quitte un abri (forêt, tranchée, poids lourd) et sur les ouvrages exposés comme les ponts et viaducs." },
    { id: "R-026", chapitre: "meteo-adherence", situation: "Après un orage, la route devant vous est recouverte d'eau sur plusieurs dizaines de mètres.",
      q: "Je :", options: ["Fais demi-tour quand c'est possible sans danger et prends un autre itinéraire", "Traverse lentement en première"], bonnes: [0],
      explication: "Quelques dizaines de centimètres d'eau peuvent emporter une voiture, et la chaussée peut être endommagée sous l'eau. On ne s'engage jamais sur une route inondée." },
    { id: "R-027", chapitre: "meteo-adherence",
      q: "La profondeur minimale des rainures des pneumatiques est de :", options: ["1 mm", "1,6 mm", "3 mm"], bonnes: [1],
      explication: "En dessous de 1,6 mm, les pneus doivent être remplacés. Bien avant cette limite, leur capacité à évacuer l'eau diminue, ce qui augmente le risque d'aquaplaning." },
    { id: "R-028", chapitre: "virages-montagne", panneau: "A1b",
      q: "Ce panneau annonce :", options: ["Un virage à gauche", "Un virage à droite", "Une chaussée rétrécie"], bonnes: [0],
      explication: "Le panneau A1b annonce un virage dangereux à gauche. Le panneau A1a annonce un virage à droite ; A3 une chaussée rétrécie." },
    { id: "R-029", chapitre: "virages-montagne", situation: "Hors agglomération, vous apercevez ce panneau.", panneau: "A1a",
      q: "Je ralentis :", options: ["Avant d'entrer dans le virage", "Une fois dans le virage"], bonnes: [0],
      explication: "On adapte sa vitesse en ligne droite, roues droites, avant le virage. Freiner fort dans le virage peut déstabiliser le véhicule." },
    { id: "R-030", chapitre: "virages-montagne", situation: "Vous abordez ce virage sans visibilité, sur une route à double sens.", panneau: "A1b",
      q: "Je me place :", options: ["Bien à droite de ma voie", "Vers le centre de la chaussée pour mieux voir"], bonnes: [0],
      explication: "Dans un virage à gauche, on reste à droite : un véhicule venant en face peut mordre sur votre voie. Couper le virage est très dangereux." },
    { id: "R-031", chapitre: "virages-montagne",
      q: "Si je double ma vitesse dans un virage, la force centrifuge est multipliée par :", options: ["2", "4", "8"], bonnes: [1],
      explication: "La force centrifuge est proportionnelle au carré de la vitesse : vitesse x 2 = force x 4." },
    { id: "R-032", chapitre: "virages-montagne", situation: "Vous êtes dans un long virage.",
      q: "Je porte mon regard :", options: ["Vers la sortie du virage", "Juste devant le capot"], bonnes: [0],
      explication: "Le véhicule va là où le regard se porte. Regarder vers la sortie du virage permet d'anticiper et de garder une trajectoire régulière." },
    { id: "R-033", chapitre: "virages-montagne", situation: "Dans un virage sans visibilité, vous suivez un tracteur. Cette ligne est tracée au centre de la chaussée.", panneau: "LIGNE_CONTINUE",
      q: "Je peux le dépasser :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Le dépassement est interdit dans un virage sans visibilité, et la ligne continue ne doit être ni franchie ni chevauchée. On patiente jusqu'à une portion dégagée." },
    { id: "R-034", chapitre: "virages-montagne", panneau: "A20",
      q: "Ce panneau m'annonce :", options: ["Une descente dangereuse", "Une montée dangereuse", "Une chaussée glissante"], bonnes: [0],
      explication: "Le panneau A20 annonce une descente dangereuse ; le pourcentage indique la pente. La chaussée glissante est signalée par le panneau A4." },
    { id: "R-035", chapitre: "virages-montagne", situation: "Vous allez emprunter la longue descente annoncée par ce panneau.", panneau: "A20",
      q: "Pour descendre, je :", options: ["Utilise le frein moteur", "Engage un rapport inférieur", "Me mets au point mort pour économiser du carburant"], bonnes: [0, 1],
      explication: "En descente, on engage un rapport inférieur pour profiter du frein moteur et soulager les freins. Le point mort supprime le frein moteur et fait surchauffer les freins." },
    { id: "R-036", chapitre: "virages-montagne", situation: "Dans une longue descente de montagne, vous gardez le pied appuyé en permanence sur la pédale de frein.",
      q: "Cela peut provoquer :", options: ["Un échauffement des freins", "Une perte d'efficacité du freinage", "Une meilleure adhérence des pneus"], bonnes: [0, 1],
      explication: "Un freinage continu fait chauffer les freins, qui perdent leur efficacité. On utilise le frein moteur et l'on freine par intermittence." },
    { id: "R-037", chapitre: "virages-montagne", situation: "Sur une route de montagne étroite, vous descendez en voiture. Une autre voiture monte en face ; le croisement est impossible et il n'y a pas de place d'évitement près d'elle.",
      q: "Je dois :", options: ["M'arrêter et reculer jusqu'à un endroit permettant le croisement", "Attendre que l'autre voiture recule"], bonnes: [0],
      explication: "Entre deux véhicules de même catégorie, c'est le véhicule descendant qui s'arrête et fait marche arrière : un véhicule qui monte redémarre plus difficilement." },
    { id: "R-038", chapitre: "virages-montagne", situation: "Sur une route de montagne étroite, vous montez en voiture. Un autocar descend en face ; une marche arrière est nécessaire pour se croiser.",
      q: "C'est à moi de reculer :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Lorsqu'une marche arrière est nécessaire entre véhicules de catégories différentes, c'est le véhicule léger qui recule par rapport au véhicule lourd, même s'il monte." },
    { id: "R-039", chapitre: "virages-montagne", situation: "Sur une route de montagne étroite, vous montez en voiture et arrivez juste à hauteur d'une place d'évitement. Une voiture descend en face.",
      q: "Je me range dans la place d'évitement :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Le véhicule descendant manœuvre en principe, sauf si c'est manifestement plus facile pour le véhicule montant, notamment quand il est près d'une place d'évitement." },
    { id: "R-040", chapitre: "virages-montagne", situation: "En montagne, sur une route enneigée, vous suivez un engin de déneigement en action.",
      q: "Je :", options: ["Reste derrière lui à bonne distance", "Le dépasse dès que possible pour gagner du temps"], bonnes: [0],
      explication: "La route est dégagée derrière l'engin et souvent enneigée devant lui. Le dépasser est très dangereux : on reste derrière, à bonne distance." },
    { id: "R-041", chapitre: "voies-rapides-route-3-voies", situation: "Vous êtes sur la voie d'accélération qui permet d'entrer sur cette route.", panneau: "C207",
      q: "Je :", options: ["Mets mon clignotant gauche", "Accélère pour atteindre une vitesse proche de celle du trafic", "M'arrête au bout de la voie pour bien regarder"], bonnes: [0, 1],
      explication: "La voie d'accélération sert à prendre de la vitesse pour s'insérer sans gêner. S'arrêter au bout de cette voie rend l'insertion très dangereuse." },
    { id: "R-042", chapitre: "voies-rapides-route-3-voies", situation: "Vous vous insérez sur l'autoroute par la voie d'accélération. Un véhicule arrive sur la voie de droite de l'autoroute.",
      q: "Je suis prioritaire sur ce véhicule :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Sauf signalisation contraire, le conducteur qui s'insère doit céder le passage aux véhicules circulant sur l'autoroute. Ceux-ci peuvent faciliter l'insertion, sans y être obligés." },
    { id: "R-043", chapitre: "voies-rapides-route-3-voies", situation: "Sur une autoroute à trois voies, la voie de droite est libre et vous ne dépassez personne.",
      q: "Je circule sur :", options: ["La voie de droite", "La voie du milieu", "La voie de gauche"], bonnes: [0],
      explication: "On circule sur la voie la plus à droite ; les autres servent au dépassement. Rester sur la voie du milieu sans raison gêne les autres usagers." },
    { id: "R-044", chapitre: "voies-rapides-route-3-voies", situation: "Sur autoroute, la circulation est dense et s'est établie en files ininterrompues sur toutes les voies. Votre file, à droite, avance plus vite que celle de gauche.",
      q: "Je commets un dépassement par la droite interdit :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Lorsque la circulation est établie en files ininterrompues, le fait qu'une file avance plus vite qu'une autre n'est pas considéré comme un dépassement par la droite." },
    { id: "R-045", chapitre: "voies-rapides-route-3-voies", situation: "Sur autoroute, par temps sec et circulation fluide, vous êtes sur la voie la plus à gauche.",
      q: "Je peux y rouler à 70 km/h :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Sur la voie la plus à gauche, il est interdit de rouler à moins de 80 km/h lorsque la circulation est fluide, la visibilité suffisante et la chaussée sèche." },
    { id: "R-046", chapitre: "voies-rapides-route-3-voies", situation: "Vous allez quitter l'autoroute par la prochaine sortie.",
      q: "Je ralentis :", options: ["Sur la voie de décélération", "Sur la voie de droite de l'autoroute, avant la sortie"], bonnes: [0],
      explication: "On se place à droite à temps, on met le clignotant et l'on ralentit sur la voie de décélération, pour ne pas surprendre les véhicules qui suivent." },
    { id: "R-047", chapitre: "voies-rapides-route-3-voies", situation: "Vous circulez sur autoroute.",
      q: "Je peux m'arrêter sur la bande d'arrêt d'urgence :", options: ["Pour me reposer", "En cas de panne", "Pour téléphoner"], bonnes: [1],
      explication: "La bande d'arrêt d'urgence est réservée à la nécessité absolue (panne, malaise). Pour se reposer ou téléphoner, on utilise une aire." },
    { id: "R-048", chapitre: "voies-rapides-route-3-voies", situation: "Votre voiture tombe en panne sur autoroute. Vous êtes arrêté sur la bande d'arrêt d'urgence.",
      q: "Je :", options: ["Enfile mon gilet de haute visibilité avant de sortir", "Fais sortir les passagers par les portières côté droit", "Attends les secours à l'intérieur du véhicule"], bonnes: [0, 1],
      explication: "Gilet enfilé, on sort côté droit et l'on se met à l'abri derrière la glissière. Rester dans le véhicule sur la BAU expose au risque d'être percuté." },
    { id: "R-049", chapitre: "voies-rapides-route-3-voies", situation: "Sur une section d'autoroute, des chevrons sont peints sur la chaussée pour aider à estimer les distances.",
      q: "Je laisse devant moi au moins :", options: ["Un chevron", "Deux chevrons"], bonnes: [1],
      explication: "Deux chevrons d'écart correspondent à une distance de sécurité suffisante ; un seul chevron signale le danger." },
    { id: "R-050", chapitre: "voies-rapides-route-3-voies", situation: "Sur une route à double sens à trois voies, la voie centrale est séparée des deux autres par ce type de ligne.", panneau: "LIGNE_DISCONTINUE",
      q: "La voie centrale peut être utilisée pour dépasser :", options: ["Par moi", "Par les véhicules venant en face"], bonnes: [0, 1],
      explication: "Si la voie centrale est bordée de lignes discontinues des deux côtés, les deux sens peuvent l'utiliser pour dépasser. Il faut donc vérifier qu'aucun véhicule d'en face ne s'y engage." },
    { id: "R-051", chapitre: "voies-rapides-route-3-voies", situation: "Sur une route à double sens à trois voies, la voie centrale est occupée par un véhicule qui dépasse.",
      q: "Je peux utiliser la voie la plus à gauche pour dépasser :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Sur une route à trois voies, la voie la plus à gauche est réservée au sens inverse : il est interdit de l'emprunter." },
    { id: "R-052", chapitre: "voies-rapides-route-3-voies", situation: "Sur une route à trois voies, la voie centrale est séparée de votre voie par cette ligne, dont le trait continu est de votre côté.", panneau: "LIGNE_MIXTE",
      q: "Je peux utiliser la voie centrale pour dépasser :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Avec une ligne mixte, seul le conducteur qui a le trait discontinu de son côté peut la franchir. Ici, la voie centrale est affectée au sens inverse." },
    { id: "R-053", chapitre: "voies-rapides-route-3-voies", situation: "Dans un tunnel, la circulation s'arrête à cause d'un bouchon.",
      q: "Je :", options: ["Allume mes feux de détresse", "Garde au moins 5 mètres avec le véhicule de devant", "Fais demi-tour pour ressortir"], bonnes: [0, 1],
      explication: "En cas de bouchon dans un tunnel, on signale l'arrêt avec les feux de détresse et l'on garde au moins 5 m. Le demi-tour y est toujours interdit." },
    { id: "R-054", chapitre: "voies-rapides-route-3-voies", situation: "Un incendie se déclare dans le tunnel où vous êtes arrêté. La fumée se rapproche.",
      q: "Je :", options: ["Évacue à pied par l'issue de secours la plus proche", "Laisse la clé sur le véhicule", "Reste dans ma voiture vitres fermées"], bonnes: [0, 1],
      explication: "En cas d'incendie, on laisse la clé pour que les secours puissent déplacer le véhicule et l'on évacue à pied. La fumée tue plus vite que les flammes." },
    { id: "R-055", chapitre: "voies-rapides-route-3-voies", situation: "Ce panneau est placé au-dessus de la voie de gauche d'une autoroute.", panneau: "B25:80",
      q: "Il m'impose, sur cette voie :", options: ["Une vitesse minimale de 80 km/h", "Une vitesse maximale de 80 km/h"], bonnes: [0],
      explication: "Le panneau rond bleu B25 indique une vitesse minimale obligatoire. La vitesse maximale est indiquée par un panneau rond à bord rouge (B14)." },
    { id: "R-056", chapitre: "voies-rapides-route-3-voies", panneau: "C208",
      q: "Ce panneau indique :", options: ["La fin de l'autoroute", "Le début de l'autoroute", "Une sortie d'autoroute"], bonnes: [0],
      explication: "Le panneau C208 marque la fin de la section d'autoroute : les règles ordinaires s'appliquent de nouveau, notamment en matière de vitesse." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème U — chapitres ───────────── */
  P.chapitres.push(
    {
      id: "pietons-enfants-ages",
      theme: "U",
      titre: "Les piétons, les enfants et les personnes âgées",
      duree: 20,
      objectifs: [
        "Comprendre la vulnérabilité des piétons",
        "Connaître les règles de priorité accordées aux piétons et leurs sanctions",
        "Anticiper le comportement des enfants",
        "Adapter sa conduite aux personnes âgées ou à mobilité réduite",
        "Dépasser un piéton en laissant une distance latérale suffisante"
      ],
      sections: [
        {
          titre: "Le piéton, usager le plus vulnérable",
          contenu: `<p>Le piéton n'a ni carrosserie, ni ceinture, ni airbag. Lors d'un choc avec une voiture, même à vitesse modérée, il peut être gravement blessé ou tué. Le risque de décès augmente très fortement avec la vitesse au moment du choc : c'est l'une des raisons pour lesquelles la vitesse est limitée à 50 km/h en agglomération, et souvent à 30 km/h près des écoles et dans les quartiers résidentiels.</p>
<p>Sont considérés comme des <strong>piétons</strong> :</p>
<ul>
<li>les personnes qui marchent ;</li>
<li>les personnes qui circulent en <strong>fauteuil roulant</strong> ;</li>
<li>les personnes qui poussent à la main un vélo, un cyclomoteur, une poussette ou une voiture d'enfant ;</li>
<li>les utilisateurs de rollers, de trottinettes sans moteur et de planches à roulettes.</li>
</ul>
<p>Le conducteur doit toujours considérer que le piéton peut commettre une erreur : traverser hors du passage, surgir entre deux voitures, ne pas avoir entendu le véhicule (écouteurs, véhicule électrique silencieux). C'est au conducteur, protégé et rapide, d'anticiper.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> face à un piéton, le conducteur est toujours le plus fort : il doit être prêt à ralentir et à s'arrêter, même si le piéton est en tort.</div>`
        },
        {
          titre: "La priorité aux piétons",
          contenu: `<p>Le conducteur doit <strong>céder le passage</strong> au piéton :</p>
<ul>
<li>qui est <strong>régulièrement engagé</strong> dans la traversée de la chaussée ;</li>
<li>qui <strong>manifeste clairement l'intention</strong> de traverser, par exemple en se tenant au bord du trottoir face au passage ;</li>
<li>qui circule dans une <strong>zone de rencontre</strong> <span class="panneau" data-code="ZONE_REN"></span> ou une aire piétonne, où il est prioritaire sur tous les véhicules.</li>
</ul>
<p>Le passage pour piétons est annoncé par le panneau de danger <span class="panneau" data-code="A13b"></span> et signalé à son emplacement par le panneau <span class="panneau" data-code="C20a"></span> et par des bandes blanches au sol <span class="panneau" data-code="PASSAGE_PIETON"></span>.</p>
<p>Aux <strong>feux</strong>, lorsque vous tournez à droite ou à gauche alors que votre feu est vert, les piétons qui traversent la rue dans laquelle vous vous engagez ont souvent eux aussi le feu vert : vous devez leur céder le passage.</p>
<table>
<thead><tr><th>Infraction</th><th>Sanction</th></tr></thead>
<tbody>
<tr><td>Ne pas céder le passage à un piéton</td><td>135 € et retrait de 6 points</td></tr>
<tr><td>S'arrêter ou stationner sur un passage pour piétons</td><td>Arrêt ou stationnement très gênant : 135 €</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le piéton attend au bord du trottoir, face au passage, sans avoir encore posé le pied sur la chaussée. Il manifeste clairement son intention : vous devez vous arrêter.</div>`
        },
        {
          titre: "Les enfants",
          contenu: `<p>Les enfants sont des usagers imprévisibles. Jusqu'à 10 ou 12 ans environ, ils :</p>
<ul>
<li>sont <strong>petits</strong> : ils sont masqués par les voitures en stationnement et voient mal par-dessus ;</li>
<li>ont un <strong>champ visuel</strong> plus étroit que celui des adultes ;</li>
<li>évaluent mal les <strong>vitesses et les distances</strong> des véhicules, et ne savent pas toujours d'où vient un bruit ;</li>
<li>agissent souvent de façon <strong>soudaine</strong> : ils courent après un ballon, rejoignent un ami de l'autre côté de la rue, descendent d'un bus en courant.</li>
</ul>
<p>Le panneau <span class="panneau" data-code="A13a"></span> signale un endroit fréquenté par les enfants (école, terrain de jeux). Aux heures d'entrée et de sortie des classes, on réduit fortement sa vitesse et on se prépare à s'arrêter.</p>
<p>Un <strong>car de ramassage scolaire</strong> à l'arrêt allume ses feux de détresse pendant la montée et la descente des enfants. Ralentissez fortement : un enfant peut traverser devant ou derrière le car.</p>
<p>Devant les écoles, ne vous arrêtez jamais en double file ni sur le trottoir pour déposer un enfant : vous masquez la vue des autres enfants et des conducteurs, et vous obligez les piétons à descendre sur la chaussée. Faites descendre les enfants côté trottoir, jamais côté circulation. Méfiez-vous aussi des enfants à vélo ou à trottinette, qui peuvent quitter le trottoir brusquement.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un ballon traverse la rue devant vous. Vous freinez immédiatement : un enfant risque de surgir à sa poursuite quelques secondes plus tard.</div>`
        },
        {
          titre: "Les personnes âgées et les personnes à mobilité réduite",
          contenu: `<p>Avec l'âge, la vue, l'ouïe et la mobilité diminuent. Une personne âgée met plus de temps à traverser, perçoit moins bien l'arrivée des véhicules et peut hésiter, s'arrêter ou faire demi-tour au milieu de la chaussée. Les personnes âgées représentent une part importante des piétons tués.</p>
<ul>
<li>Laissez-leur le <strong>temps de traverser</strong> entièrement, même si votre feu passe au vert.</li>
<li>Ne les pressez pas en klaxonnant ou en avançant.</li>
<li>Soyez attentif aux personnes qui se déplacent avec une canne, un déambulateur ou en fauteuil roulant.</li>
</ul>
<p>Une personne qui se déplace avec une <strong>canne blanche</strong> ou accompagnée d'un <strong>chien guide</strong> est aveugle ou malvoyante : elle ne peut pas voir votre véhicule. Arrêtez-vous et laissez-la traverser en toute sécurité.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un piéton malentendant ou muni d'écouteurs n'entend pas votre véhicule, surtout s'il est électrique ou hybride et roule lentement. Ne comptez pas sur le bruit pour être repéré.</div>`
        },
        {
          titre: "Les piétons hors agglomération et la distance latérale",
          contenu: `<p>Hors agglomération, les piétons circulent sur les <strong>accotements</strong> ou, à défaut, au bord de la chaussée. Ils doivent en principe marcher sur le bord <strong>gauche</strong>, face aux véhicules, pour les voir arriver. La nuit, un piéton vêtu de sombre est presque invisible : ralentissez dès que vous apercevez une silhouette.</p>
<p>Pour dépasser un piéton, un cycliste, un cavalier ou un animal, le conducteur doit s'écarter d'au moins :</p>
<table>
<thead><tr><th>Lieu</th><th>Distance latérale minimale</th></tr></thead>
<tbody>
<tr><td>En agglomération</td><td>1 mètre</td></tr>
<tr><td>Hors agglomération</td><td>1,50 mètre</td></tr>
</tbody>
</table>
<p>Si la largeur de la route ne permet pas de respecter cet écart, on attend derrière, à faible vitesse, qu'une portion plus large ou dégagée le permette.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 1 m en agglomération, 1,50 m hors agglomération pour dépasser un piéton, un cycliste, un cavalier ou un animal.</div>`
        },
        {
          titre: "Les espaces où le piéton est roi",
          contenu: `<p>Certains espaces urbains sont aménagés pour favoriser les piétons :</p>
<table>
<thead><tr><th>Espace</th><th>Vitesse maximale</th><th>Place du piéton</th></tr></thead>
<tbody>
<tr><td>Zone 30</td><td>30 km/h</td><td>Règles de priorité habituelles ; la vitesse réduite rend les traversées plus sûres</td></tr>
<tr><td>Zone de rencontre</td><td>20 km/h</td><td>Il peut circuler sur la chaussée et il est prioritaire sur tous les véhicules</td></tr>
<tr><td>Aire piétonne</td><td>Allure du pas</td><td>Il est prioritaire ; seuls certains véhicules y sont autorisés</td></tr>
</tbody>
</table>
<p>Dans une <strong>zone 30</strong> <span class="panneau" data-code="ZONE30"></span>, les passages pour piétons ne sont pas toujours matérialisés : attendez-vous à voir des piétons traverser en n'importe quel point de la chaussée. La vitesse réduite permet au conducteur de s'arrêter très rapidement.</p>
<p>Sur un <strong>trottoir</strong>, le stationnement d'une voiture est considéré comme très gênant : il oblige les piétons, les poussettes et les fauteuils roulants à descendre sur la chaussée.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> dans une zone de rencontre, un groupe de piétons marche au milieu de la chaussée. Vous roulez au pas derrière eux, sans klaxonner, jusqu'à ce qu'ils vous laissent passer.</div>`
        }
      ],
      points_cles: [
        "Céder le passage au piéton engagé ou qui manifeste clairement l'intention de traverser : sinon 135 € et 6 points",
        "Fauteuil roulant, vélo poussé à la main, rollers : ce sont des piétons",
        "Enfants : petits, imprévisibles, mauvaise estimation des vitesses ; un ballon annonce un enfant",
        "Car scolaire arrêté avec feux de détresse : ralentir fortement",
        "Canne blanche ou chien guide : s'arrêter et laisser traverser",
        "Distance latérale pour dépasser un piéton : 1 m en agglomération, 1,50 m hors agglomération",
        "Zone de rencontre : 20 km/h, piétons prioritaires ; aire piétonne : allure du pas"
      ],
      panneaux: ["A13a", "A13b", "C20a", "ZONE30", "ZONE_REN"]
    },
    {
      id: "cyclistes-deux-roues",
      theme: "U",
      titre: "Cyclistes, deux-roues motorisés et engins de déplacement personnel",
      duree: 25,
      objectifs: [
        "Dépasser un cycliste en sécurité",
        "Connaître les aménagements cyclables : sas vélo, double sens cyclable, pistes et bandes",
        "Anticiper les comportements des cyclistes",
        "Percevoir les deux-roues motorisés et comprendre leurs risques",
        "Connaître les règles des trottinettes électriques et autres EDPM"
      ],
      sections: [
        {
          titre: "Comprendre le cycliste",
          contenu: `<p>Le cycliste est un usager vulnérable : sans protection, il est aussi sensible aux <strong>écarts de trajectoire</strong>. Il peut faire un écart pour éviter un trou, une grille d'égout, des gravillons, une portière qui s'ouvre, ou être déporté par une rafale de vent ou l'aspiration d'un poids lourd. Il n'est pas tenu de rouler collé au trottoir.</p>
<p>Quelques règles applicables aux cyclistes, utiles pour anticiper leur comportement :</p>
<ul>
<li>ils peuvent rouler <strong>à deux de front</strong>, jamais plus, mais doivent se mettre en <strong>file simple</strong> dès la chute du jour et lorsqu'un véhicule voulant les dépasser annonce son approche ;</li>
<li>le <strong>casque</strong> est obligatoire pour les enfants de moins de 12 ans, conducteurs ou passagers ;</li>
<li>hors agglomération, la nuit ou par mauvaise visibilité, ils doivent porter un <strong>gilet de haute visibilité</strong> ;</li>
<li>ils signalent leurs changements de direction en tendant le bras ;</li>
<li>l'autoroute et les routes pour automobiles leur sont interdites.</li>
</ul>
<p>Les <strong>vélos à assistance électrique</strong>, dont l'assistance cesse à 25 km/h, sont des cycles. Ils roulent plus vite qu'on ne l'imagine : évaluez leur vitesse avec prudence, notamment avant de leur couper la route à une intersection.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> avant d'ouvrir votre portière, regardez dans le rétroviseur et tournez la tête. Une portière ouverte devant un cycliste peut le tuer.</div>`
        },
        {
          titre: "Dépasser un cycliste",
          contenu: `<p>Dépasser un cycliste est un dépassement comme un autre : il faut de la visibilité et de la place. La distance latérale minimale est de :</p>
<table>
<thead><tr><th>Lieu</th><th>Écart minimal</th></tr></thead>
<tbody>
<tr><td>En agglomération</td><td>1 mètre</td></tr>
<tr><td>Hors agglomération</td><td>1,50 mètre</td></tr>
</tbody>
</table>
<p>Si la route est trop étroite ou si une ligne continue <span class="panneau" data-code="LIGNE_CONTINUE"></span> vous empêche de vous écarter suffisamment, vous restez derrière le cycliste, à distance, jusqu'à ce que le dépassement soit possible.</p>
<p>Après le dépassement, ne vous rabattez pas trop tôt. Et ne dépassez jamais un cycliste juste avant de tourner à droite : vous lui couperiez la route au moment où il continue tout droit. Dans ce cas, restez derrière lui et tournez après son passage.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> pour dépasser un cycliste hors agglomération, il faut 1,50 m d'écart, pas 1 m. Le mètre ne vaut qu'en agglomération.</div>`
        },
        {
          titre: "Les aménagements cyclables",
          contenu: `<p>Plusieurs aménagements sont réservés aux cyclistes ou partagés avec eux :</p>
<ul>
<li>la <strong>piste cyclable</strong>, séparée de la chaussée, et la <strong>bande cyclable</strong>, voie de la chaussée délimitée par une ligne et un marquage vélo. L'arrêt et le stationnement d'une voiture sur une piste ou une bande cyclable sont <strong>très gênants</strong> (135 €) ;</li>
<li>le <strong>sas vélo</strong> : à un feu, c'est l'espace compris entre deux lignes d'arrêt, marqué d'un vélo. Il est réservé aux cyclistes, qui peuvent s'y placer devant les voitures pour être vus et démarrer en premier. Les automobilistes doivent s'arrêter à la <strong>première ligne</strong> <span class="panneau" data-code="LIGNE_STOP"></span>, avant le sas ;</li>
<li>le <strong>double sens cyclable</strong> : dans une rue à sens unique <span class="panneau" data-code="C12"></span>, un panonceau peut autoriser les cyclistes à circuler dans les deux sens. Le panneau de sens interdit <span class="panneau" data-code="B1"></span> est alors complété par un panonceau « sauf cycles ». Dans les zones 30 et les zones de rencontre, les rues à sens unique sont en principe à double sens pour les cyclistes ;</li>
<li>le <strong>cédez-le-passage cycliste au feu</strong> : un petit panonceau fixé sous le feu autorise les cyclistes à franchir le feu rouge, dans la direction indiquée, en cédant le passage aux autres usagers. Cette autorisation ne concerne pas les voitures.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> dans une rue à sens unique de zone 30, vous croisez un cycliste qui roule face à vous. Il n'est pas en infraction : c'est un double sens cyclable. Serrez à droite et ralentissez.</div>`
        },
        {
          titre: "Les deux-roues motorisés",
          contenu: `<p>Les <strong>motocyclistes</strong> et les conducteurs de <strong>cyclomoteurs</strong> représentent une part très importante des tués sur la route, alors qu'ils ne comptent que pour une faible part du trafic. Plusieurs raisons :</p>
<ul>
<li>leur <strong>silhouette étroite</strong> les rend difficiles à voir et à repérer dans les rétroviseurs ; ils se cachent facilement dans l'<strong>angle mort</strong> ;</li>
<li>leur <strong>vitesse et leur distance</strong> sont souvent mal estimées par les automobilistes, en particulier aux intersections ;</li>
<li>ils sont <strong>sensibles à l'adhérence</strong> : gravillons, marquages mouillés, plaques d'égout, gasoil ;</li>
<li>ils ne bénéficient d'aucune carrosserie en cas de choc.</li>
</ul>
<p>Le <strong>cyclomoteur</strong> (jusqu'à 50 cm³) est limité par construction à <strong>45 km/h</strong> ; il est interdit sur l'autoroute et sur les routes pour automobiles. Les conducteurs de deux-roues motorisés et leurs passagers doivent porter un casque homologué et des gants homologués ; les motocyclistes roulent feux de croisement allumés, même de jour.</p>
<p>Avant de changer de voie, notamment dans un ralentissement, vérifiez vos rétroviseurs et votre angle mort : un deux-roues peut remonter entre les files. Aux intersections, regardez deux fois avant de vous engager : un phare unique qui approche est souvent plus proche et plus rapide qu'il n'y paraît.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un deux-roues se voit mal et se juge mal. Rétroviseurs, angle mort et double contrôle aux intersections.</div>`
        },
        {
          titre: "Les engins de déplacement personnel motorisés (EDPM)",
          contenu: `<p>Les <strong>trottinettes électriques</strong>, gyroroues, gyropodes et hoverboards sont des engins de déplacement personnel motorisés. Leurs règles :</p>
<table>
<thead><tr><th>Règle</th><th>Contenu</th></tr></thead>
<tbody>
<tr><td>Âge minimal</td><td>14 ans</td></tr>
<tr><td>Vitesse maximale par construction</td><td>25 km/h</td></tr>
<tr><td>Nombre de personnes</td><td>Une seule, pas de passager</td></tr>
<tr><td>Trottoir</td><td>Interdit en roulant, sauf autorisation locale ; l'engin peut y être conduit à la main</td></tr>
<tr><td>En agglomération</td><td>Pistes et bandes cyclables quand elles existent ; sinon routes limitées à 50 km/h au plus</td></tr>
<tr><td>Hors agglomération</td><td>Interdits, sauf sur les voies vertes, les pistes cyclables et les routes où l'autorité locale les autorise</td></tr>
<tr><td>Interdictions</td><td>Écouteurs et téléphone tenu en main</td></tr>
</tbody>
</table>
<p>Ces engins sont silencieux, rapides et peuvent surgir d'une piste cyclable ou d'un trottoir. Leurs utilisateurs sont aussi vulnérables que les cyclistes, avec des petites roues sensibles aux trous et aux bordures : appliquez-leur les mêmes distances latérales qu'aux cyclistes.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une trottinette électrique n'a pas le droit de circuler sur le trottoir en roulant, et ne peut transporter qu'une seule personne.</div>`
        },
        {
          titre: "Cyclistes et deux-roues aux intersections",
          contenu: `<p>La plupart des collisions entre voitures et deux-roues ont lieu aux <strong>intersections</strong>. Les situations les plus fréquentes sont connues :</p>
<ul>
<li>la voiture qui <strong>tourne à gauche</strong> et coupe la route d'un deux-roues arrivant en face, dont la vitesse a été mal estimée ;</li>
<li>la voiture qui <strong>tourne à droite</strong> et heurte un cycliste qui continuait tout droit sur la bande cyclable ou le long du trottoir ;</li>
<li>la voiture qui <strong>sort d'une rue ou d'un parking</strong> sans avoir vu le deux-roues masqué par un véhicule en stationnement ;</li>
<li>dans un <strong>giratoire</strong>, le cycliste qui reste sur l'extérieur de l'anneau et que l'automobiliste coupe en sortant.</li>
</ul>
<p>Pour les éviter : contrôlez rétroviseur et angle mort droit avant de tourner à droite, laissez passer les deux-roues qui arrivent en face avant de tourner à gauche, et regardez deux fois avant de vous engager. Le cycliste qui se trouve dans un sas vélo ou devant vous au feu démarrera souvent plus lentement : laissez-lui le temps de s'éloigner.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> avant de tourner à droite, rétroviseur droit et angle mort ; avant de tourner à gauche, on laisse passer les deux-roues venant en face.</div>`
        }
      ],
      points_cles: [
        "Dépasser un cycliste : 1 m en agglomération, 1,50 m hors agglomération",
        "Cyclistes à deux de front au maximum, en file simple la nuit et quand on veut les dépasser",
        "Sas vélo : l'automobiliste s'arrête à la première ligne",
        "Double sens cyclable : un cycliste peut arriver en face dans une rue à sens unique",
        "Arrêt ou stationnement sur une piste ou bande cyclable : très gênant, 135 €",
        "Deux-roues motorisés : silhouette étroite, vitesse mal estimée, angle mort",
        "Cyclomoteur : 45 km/h, interdit sur autoroute",
        "Trottinette électrique : 14 ans minimum, 25 km/h, une seule personne, pas de trottoir"
      ],
      panneaux: ["C12", "B1", "LIGNE_STOP", "LIGNE_CONTINUE"]
    },
    {
      id: "poids-lourds-transports-lents",
      theme: "U",
      titre: "Poids lourds, transports en commun, véhicules lents et animaux",
      duree: 20,
      objectifs: [
        "Connaître les angles morts des poids lourds et s'en tenir éloigné",
        "Dépasser et suivre un poids lourd en sécurité",
        "Faciliter la circulation des bus et des tramways",
        "Adopter le bon comportement face aux véhicules lents",
        "Réagir face aux cavaliers, troupeaux et animaux sauvages"
      ],
      sections: [
        {
          titre: "Les poids lourds et leurs angles morts",
          contenu: `<p>Un poids lourd peut peser plus de 40 tonnes et mesurer plus de 16 mètres. Sa masse allonge sa <strong>distance de freinage</strong> et son gabarit réduit fortement ce que son conducteur peut voir. Autour de lui se trouvent de larges <strong>angles morts</strong> : devant la cabine, sur toute la longueur du côté droit, sur le côté gauche et derrière la remorque.</p>
<p>Depuis 2021, les véhicules de plus de 3,5 tonnes doivent porter un <strong>autocollant « angles morts »</strong> à l'arrière et sur les côtés, pour rappeler ce danger aux usagers vulnérables et aux automobilistes.</p>
<ul>
<li>Règle simple : <strong>si vous ne voyez pas les rétroviseurs du camion, son conducteur ne vous voit pas</strong>.</li>
<li>Ne vous arrêtez pas à côté d'un poids lourd, surtout à sa droite, à un feu ou dans un giratoire.</li>
<li>Ne suivez pas un poids lourd de trop près : il vous cache la route et son conducteur ne vous voit pas.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> pas de rétroviseur visible = pas de conducteur qui vous voit. On ne stationne jamais dans l'angle mort d'un camion.</div>`
        },
        {
          titre: "Tourner, dépasser, croiser un poids lourd",
          contenu: `<p>Pour <strong>tourner à droite</strong>, un poids lourd doit souvent se déporter d'abord vers la gauche, afin que ses roues arrière ne montent pas sur le trottoir. Il occupe alors toute la largeur de la chaussée. Ne vous glissez jamais entre lui et le trottoir : vous seriez dans son angle mort et sur sa trajectoire. Dans un carrefour à sens giratoire <span class="panneau" data-code="AB25"></span>, il peut aussi avoir besoin de plusieurs voies.</p>
<p>Pour <strong>dépasser</strong> un poids lourd, il faut une distance et un temps plus importants qu'avec une voiture : vérifiez que la visibilité est largement suffisante. Pendant le dépassement, attendez-vous à un effet d'<strong>aspiration</strong> puis à une rafale de vent latéral en sortant de son abri. Ne vous rabattez qu'après l'avoir vu en entier dans votre rétroviseur intérieur. Sur les routes où le panneau <span class="panneau" data-code="B3"></span> interdit de dépasser, le dépassement d'un poids lourd est lui aussi interdit.</p>
<p>Lorsque vous <strong>croisez</strong> un poids lourd sur une route étroite, ralentissez, serrez à droite et tenez fermement le volant. Sur autoroute, les camions de plus de 3,5 tonnes sont limités à 90 km/h : anticipez leur présence sur la voie de droite et les écarts de vitesse lorsqu'un camion en dépasse un autre.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> à un carrefour, un camion qui veut tourner à droite se décale sur la gauche. Vous restez derrière lui, sans chercher à le dépasser par la droite.</div>`
        },
        {
          titre: "Les transports en commun",
          contenu: `<p>Les bus et les cars transportent de nombreux passagers, souvent debout : ils démarrent et freinent avec douceur, et leurs arrêts sont fréquents.</p>
<ul>
<li>En agglomération, vous devez <strong>ralentir et au besoin vous arrêter</strong> pour laisser un bus <strong>quitter son arrêt</strong> signalé lorsqu'il met son clignotant.</li>
<li>Méfiez-vous des piétons qui traversent devant ou derrière un bus à l'arrêt pour l'attraper ou après en être descendus.</li>
<li>Les <strong>voies réservées</strong> aux bus sont interdites aux autres véhicules, sauf signalisation contraire. L'arrêt et le stationnement sur un arrêt de bus sont très gênants.</li>
</ul>
<p>Le <strong>tramway</strong> circule sur des rails : il ne peut pas se déporter pour vous éviter, et sa distance de freinage est très longue. Sauf signalisation contraire, il est <strong>prioritaire</strong> sur les autres véhicules. Ne vous arrêtez jamais sur les voies et ne vous engagez dans un carrefour traversé par le tramway que si vous pouvez le dégager.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> à une intersection sans signalisation, le tramway arrive par votre gauche. La priorité à droite ne s'applique pas face à lui : sauf signalisation contraire, vous lui cédez le passage.</div>`
        },
        {
          titre: "Les véhicules lents et les véhicules d'intérêt général",
          contenu: `<p>Sur les routes de campagne, vous rencontrez des <strong>véhicules lents</strong> : tracteurs et machines agricoles, engins de travaux, cyclomoteurs, voiturettes, véhicules hippomobiles. Leur vitesse est souvent inférieure à 40 km/h, ce qui crée des écarts de vitesse importants.</p>
<ul>
<li>Anticipez en ralentissant tôt dès que vous en rattrapez un.</li>
<li>Ne dépassez que si la visibilité et la place sont suffisantes, et en respectant les lignes continues et les panneaux.</li>
<li>Les engins agricoles peuvent être larges, porter des outils saillants et tourner à gauche vers un champ sans voie d'accès visible.</li>
</ul>
<p>Les <strong>convois exceptionnels</strong> sont précédés ou suivis d'un véhicule d'accompagnement équipé d'un gyrophare orange : suivez ses indications. Les <strong>véhicules d'intérêt général</strong> à gyrophare orange (dépanneuses, véhicules d'entretien des routes) ne sont pas prioritaires, mais il faut leur faciliter le passage. Les véhicules d'intérêt général prioritaires (police, gendarmerie, pompiers, SAMU) utilisent des feux bleus et un avertisseur spécial : on doit leur céder le passage.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> de nombreuses collisions graves impliquent un tracteur qui tourne à gauche pendant qu'une voiture le dépasse. Avant de dépasser un véhicule lent, vérifiez qu'il ne s'apprête pas à tourner.</div>`
        },
        {
          titre: "Les cavaliers et les animaux",
          contenu: `<p>Les <strong>cavaliers</strong> circulent sur la chaussée. Un cheval peut s'effrayer d'un bruit ou d'un mouvement brusque. Ralentissez, ne klaxonnez pas et dépassez en laissant au moins <strong>1 mètre</strong> en agglomération et <strong>1,50 mètre</strong> hors agglomération.</p>
<p>Face à un <strong>troupeau</strong> (vaches, moutons) qui traverse ou occupe la route, arrêtez-vous ou avancez au pas, sans avertisseur sonore, et suivez les indications du berger.</p>
<p>Les <strong>animaux sauvages</strong> (cerfs, chevreuils, sangliers) traversent surtout à l'aube et au crépuscule, en lisière de forêt. Leur présence est annoncée par un panneau de danger spécifique, ou par un panneau <span class="panneau" data-code="A14"></span> complété d'un panonceau. Un animal est rarement seul : quand l'un traverse, d'autres peuvent suivre.</p>
<table>
<thead><tr><th>Situation</th><th>Bon réflexe</th></tr></thead>
<tbody>
<tr><td>Animal aperçu au bord de la route</td><td>Ralentir fortement, appels lumineux la nuit, prêt à s'arrêter</td></tr>
<tr><td>Collision inévitable</td><td>Freiner fort en ligne droite, ne pas donner de coup de volant</td></tr>
<tr><td>Après le choc</td><td>Sécuriser les lieux, prévenir les forces de l'ordre, ne pas toucher l'animal blessé</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> mieux vaut heurter un animal en freinant droit que perdre le contrôle en l'évitant et finir contre un arbre ou face à un autre véhicule.</div>`
        },
        {
          titre: "Synthèse : partager la route",
          contenu: `<p>Chaque catégorie d'usagers présente des risques propres. Le conducteur d'une voiture doit connaître ces particularités pour anticiper.</p>
<table>
<thead><tr><th>Usager</th><th>Particularité</th><th>Bon comportement</th></tr></thead>
<tbody>
<tr><td>Poids lourd</td><td>Angles morts étendus, freinage long, trajectoire large</td><td>Se tenir hors des angles morts, ne pas s'intercaler à droite</td></tr>
<tr><td>Bus</td><td>Arrêts fréquents, piétons autour</td><td>Le laisser repartir en agglomération, surveiller les piétons</td></tr>
<tr><td>Tramway</td><td>Ne peut pas dévier, freinage très long</td><td>Lui céder le passage, ne jamais s'arrêter sur les voies</td></tr>
<tr><td>Tracteur, engin lent</td><td>Vitesse faible, gabarit large, tourne sans prévenir</td><td>Ralentir tôt, ne dépasser qu'avec visibilité</td></tr>
<tr><td>Cavalier, troupeau</td><td>Animaux sensibles au bruit</td><td>Ralentir, pas de klaxon, écart latéral</td></tr>
</tbody>
</table>
<p>Le principe général est inscrit dans le Code de la route : le conducteur doit faire preuve d'une <strong>prudence accrue</strong> à l'égard des usagers les plus vulnérables. Plus votre véhicule est lourd et rapide par rapport à l'autre usager, plus votre responsabilité est grande.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> sur une route de campagne, un tracteur roule à 25 km/h devant vous dans une zone de virages. Plutôt que de prendre un risque, vous patientez jusqu'à la prochaine ligne droite dégagée : vous perdez au plus une minute.</div>`
        }
      ],
      points_cles: [
        "Si vous ne voyez pas les rétroviseurs du camion, son conducteur ne vous voit pas",
        "Autocollant « angles morts » obligatoire sur les véhicules de plus de 3,5 t",
        "Un poids lourd se déporte à gauche pour tourner à droite : ne pas s'intercaler",
        "En agglomération, laisser un bus quitter son arrêt",
        "Le tramway est prioritaire sauf signalisation contraire",
        "Gyrophare orange : faciliter le passage ; feux bleus et avertisseur spécial : céder le passage",
        "Cavalier : 1 m en agglomération, 1,50 m hors agglomération ; troupeau : au pas, sans klaxon",
        "Animal sauvage : freiner droit, sans coup de volant"
      ],
      panneaux: ["AB25", "B3", "A14"]
    }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème U — questions U-001 à U-051 ───────────── */
  P.questions.push(
    { id: "U-001", chapitre: "pietons-enfants-ages", situation: "Vous circulez hors agglomération et apercevez ce panneau.", panneau: "A13b",
      q: "Je m'attends à rencontrer :", options: ["Un passage pour piétons", "Une école", "Une zone piétonne"], bonnes: [0],
      explication: "Le panneau de danger A13b annonce un passage pour piétons. L'école est annoncée par le panneau A13a (endroit fréquenté par les enfants)." },
    { id: "U-002", chapitre: "pietons-enfants-ages", situation: "Un piéton attend au bord du trottoir, face au passage signalé par ce panneau, et regarde dans votre direction.", panneau: "C20a",
      q: "Je dois :", options: ["M'arrêter pour le laisser traverser", "Klaxonner pour lui signaler que je passe", "Continuer, car il n'est pas encore engagé"], bonnes: [0],
      explication: "Le conducteur doit céder le passage au piéton qui manifeste clairement son intention de traverser, et pas seulement à celui qui est déjà engagé." },
    { id: "U-003", chapitre: "pietons-enfants-ages", situation: "Un piéton vient de quitter le trottoir de gauche et s'engage sur ce passage.", panneau: "PASSAGE_PIETON",
      q: "Je m'arrête pour le laisser traverser :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Le piéton régulièrement engagé dans la traversée est prioritaire, quel que soit le côté d'où il vient. On s'arrête avant le passage." },
    { id: "U-004", chapitre: "pietons-enfants-ages",
      q: "Ne pas céder le passage à un piéton engagé dans la traversée est sanctionné par :", options: ["Un retrait de 6 points", "Une amende de 135 €", "Un retrait de 2 points"], bonnes: [0, 1],
      explication: "Le refus de priorité à un piéton coûte 135 € d'amende forfaitaire et 6 points, soit davantage qu'un feu rouge (4 points)." },
    { id: "U-005", chapitre: "pietons-enfants-ages", situation: "Votre feu est vert. Vous tournez à droite ; des piétons traversent la rue dans laquelle vous vous engagez.", panneau: "FEU_VERT",
      q: "Je :", options: ["Leur cède le passage", "Passe, car mon feu est vert"], bonnes: [0],
      explication: "En tournant, on croise souvent des piétons qui ont, eux aussi, le feu vert. Ils sont engagés dans la traversée : on leur cède le passage." },
    { id: "U-006", chapitre: "pietons-enfants-ages",
      q: "Sont considérés comme des piétons :", options: ["Une personne en fauteuil roulant", "Un cycliste qui pousse son vélo à la main", "Un cycliste qui roule sur la chaussée", "Un enfant en rollers"], bonnes: [0, 1, 3],
      explication: "Les personnes en fauteuil roulant, celles qui poussent un cycle à la main et les utilisateurs de rollers sont des piétons. Le cycliste qui roule est un conducteur de véhicule." },
    { id: "U-007", chapitre: "pietons-enfants-ages", situation: "Il est 16 h 30, heure de sortie des classes, et vous passez ce panneau.", panneau: "A13a",
      q: "Je :", options: ["Ralentis fortement", "Suis prêt à m'arrêter", "Klaxonne pour prévenir les enfants"], bonnes: [0, 1],
      explication: "Près d'une école, aux heures d'entrée et de sortie, les enfants peuvent surgir à tout moment. En agglomération, l'avertisseur sonore est réservé au danger immédiat." },
    { id: "U-008", chapitre: "pietons-enfants-ages", situation: "En ville, un ballon traverse la rue à quelques mètres devant vous.",
      q: "Je :", options: ["Freine, car un enfant risque de le suivre", "Continue, puisque le ballon est passé"], bonnes: [0],
      explication: "Un ballon qui traverse annonce souvent un enfant qui court derrière sans regarder. On freine immédiatement." },
    { id: "U-009", chapitre: "pietons-enfants-ages", situation: "Hors agglomération, un car de ramassage scolaire est arrêté au bord de la route, feux de détresse allumés.",
      q: "Je :", options: ["Ralentis fortement", "M'attends à voir un enfant traverser", "Accélère pour le dépasser avant qu'il reparte"], bonnes: [0, 1],
      explication: "Les feux de détresse signalent la montée ou la descente d'enfants. Un enfant peut traverser devant ou derrière le car : on ralentit fortement." },
    { id: "U-010", chapitre: "pietons-enfants-ages",
      q: "Un jeune enfant :", options: ["Évalue mal la vitesse des véhicules", "Est facilement masqué par les voitures en stationnement", "Voit aussi bien sur les côtés qu'un adulte"], bonnes: [0, 1],
      explication: "L'enfant est petit, son champ visuel est plus étroit que celui d'un adulte et il estime mal les vitesses et les distances." },
    { id: "U-011", chapitre: "pietons-enfants-ages", situation: "Une personne munie d'une canne blanche s'apprête à traverser devant vous.",
      q: "Je :", options: ["M'arrête et la laisse traverser", "Klaxonne pour l'avertir de ma présence"], bonnes: [0],
      explication: "La canne blanche signale une personne aveugle ou malvoyante, qui ne peut pas voir votre véhicule. On s'arrête et on la laisse traverser sans la presser." },
    { id: "U-012", chapitre: "pietons-enfants-ages", situation: "Votre feu passe au vert alors qu'une personne âgée n'a pas fini de traverser devant vous.",
      q: "Je :", options: ["Attends qu'elle ait terminé sa traversée", "Avance doucement pour l'inciter à se presser"], bonnes: [0],
      explication: "Le feu vert ne dispense pas de céder le passage au piéton encore engagé. Les personnes âgées traversent plus lentement : on leur en laisse le temps." },
    { id: "U-013", chapitre: "pietons-enfants-ages", situation: "Après ce panneau, vous dépassez un piéton qui marche au bord de la chaussée.", panneau: "EB20:Ville",
      q: "Je m'écarte de lui d'au moins :", options: ["50 cm", "1 m", "1,50 m"], bonnes: [2],
      explication: "Ce panneau marque la sortie d'agglomération. Hors agglomération, l'écart latéral minimal pour dépasser un piéton est de 1,50 m ; en agglomération, il est de 1 m." },
    { id: "U-014", chapitre: "pietons-enfants-ages", situation: "Après ce panneau, vous dépassez un piéton qui marche sur le bord d'une rue sans trottoir.", panneau: "EB10:Ville",
      q: "Je m'écarte de lui d'au moins :", options: ["50 cm", "1 m", "1,50 m"], bonnes: [1],
      explication: "En agglomération, on laisse au moins 1 m d'écart pour dépasser un piéton, un cycliste, un cavalier ou un animal ; hors agglomération, 1,50 m." },
    { id: "U-015", chapitre: "pietons-enfants-ages", situation: "Vous venez de passer ce panneau. Des piétons marchent au milieu de la chaussée.", panneau: "ZONE_REN",
      q: "Dans cette zone :", options: ["Les piétons sont prioritaires sur moi", "Je roule à 20 km/h au maximum", "Je klaxonne pour qu'ils regagnent le trottoir"], bonnes: [0, 1],
      explication: "Dans une zone de rencontre, la vitesse est limitée à 20 km/h et les piétons peuvent circuler sur la chaussée, avec priorité sur tous les véhicules." },
    { id: "U-016", chapitre: "pietons-enfants-ages", situation: "Vous voulez déposer un passager rapidement. Le seul espace libre se trouve sur ce passage.", panneau: "PASSAGE_PIETON",
      q: "M'arrêter sur ce passage quelques instants est :", options: ["Autorisé si je reste au volant", "Interdit"], bonnes: [1],
      explication: "L'arrêt et le stationnement sur un passage pour piétons sont très gênants (135 €), même pour quelques secondes : ils obligent les piétons à contourner le véhicule." },
    { id: "U-017", chapitre: "pietons-enfants-ages", situation: "De nuit, hors agglomération, vous roulez en feux de route et apercevez une silhouette au bord de la route.",
      q: "Je :", options: ["Ralentis", "Passe en feux de croisement", "Garde mes feux de route pour l'éblouir et la prévenir"], bonnes: [0, 1],
      explication: "On ralentit et l'on passe en feux de croisement pour ne pas éblouir le piéton, tout en restant prêt à s'écarter ou à s'arrêter." },
    { id: "U-018", chapitre: "cyclistes-deux-roues", situation: "Sur cette route hors agglomération, vous allez dépasser un cycliste.", panneau: "B14:80",
      q: "Je laisse entre lui et moi au moins :", options: ["1 m", "1,50 m", "2 m"], bonnes: [1],
      explication: "Hors agglomération, l'écart latéral minimal pour dépasser un cycliste est de 1,50 m. En agglomération, il est de 1 m." },
    { id: "U-019", chapitre: "cyclistes-deux-roues", situation: "Dans cette zone, vous allez dépasser un cycliste.", panneau: "ZONE30",
      q: "Je laisse entre lui et moi au moins :", options: ["50 cm", "1 m", "1,50 m"], bonnes: [1],
      explication: "Une zone 30 se trouve en agglomération : l'écart latéral minimal est de 1 m. Si la rue est trop étroite, on reste derrière le cycliste." },
    { id: "U-020", chapitre: "cyclistes-deux-roues", situation: "Hors agglomération, sur une route étroite, vous suivez un cycliste. Pour vous écarter de 1,50 m, il faudrait franchir cette ligne.", panneau: "LIGNE_CONTINUE",
      q: "Je :", options: ["Reste derrière le cycliste", "Le dépasse en franchissant la ligne", "Le dépasse en m'écartant de 50 cm seulement"], bonnes: [0],
      explication: "On ne franchit pas une ligne continue et l'on ne dépasse pas un cycliste sans l'écart réglementaire. On patiente jusqu'à ce que le dépassement soit possible." },
    { id: "U-021", chapitre: "cyclistes-deux-roues", situation: "De jour, hors agglomération, deux cyclistes roulent côte à côte devant vous. Vous ne vous êtes pas encore signalé.",
      q: "Ils sont en infraction :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Les cyclistes peuvent rouler à deux de front, jamais plus. Ils doivent se mettre en file simple la nuit et lorsqu'un véhicule voulant les dépasser annonce son approche." },
    { id: "U-022", chapitre: "cyclistes-deux-roues", situation: "Deux cyclistes roulent côte à côte. Vous annoncez votre approche pour les dépasser.",
      q: "Ils doivent :", options: ["Se mettre en file simple", "Rester côte à côte"], bonnes: [0],
      explication: "Dès qu'un véhicule voulant les dépasser annonce son approche, les cyclistes qui roulent à deux de front doivent se mettre en file simple." },
    { id: "U-023", chapitre: "cyclistes-deux-roues", situation: "À ce feu, deux lignes d'arrêt délimitent un espace marqué d'un vélo.", panneau: "FEU_ROUGE",
      q: "En voiture, je m'arrête :", options: ["Avant la première ligne", "Sur l'espace marqué d'un vélo", "À la seconde ligne"], bonnes: [0],
      explication: "L'espace entre les deux lignes est un sas vélo, réservé aux cyclistes. L'automobiliste s'arrête avant la première ligne." },
    { id: "U-024", chapitre: "cyclistes-deux-roues", situation: "À un feu, vous voyez un sas vélo devant la file de voitures.",
      q: "Ce sas permet aux cyclistes :", options: ["D'être vus des automobilistes", "De démarrer en premier au feu vert", "De stationner leur vélo"], bonnes: [0, 1],
      explication: "Placés devant les voitures, les cyclistes sont visibles et démarrent en premier, ce qui limite les collisions, notamment avec les véhicules qui tournent." },
    { id: "U-025", chapitre: "cyclistes-deux-roues", situation: "Vous circulez dans cette rue à sens unique d'une zone 30. Un cycliste arrive en face de vous.", panneau: "C12",
      q: "Ce cycliste peut être en règle :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Dans les zones 30 et les zones de rencontre, les rues à sens unique sont en principe à double sens pour les cyclistes. On serre à droite et on ralentit." },
    { id: "U-026", chapitre: "cyclistes-deux-roues", situation: "Ce panneau est complété d'un panonceau « sauf cycles ».", panneau: "B1",
      q: "En voiture, je peux m'engager dans cette rue :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Le sens interdit s'applique à tous les véhicules sauf aux cycles : c'est un double sens cyclable. Les voitures n'y entrent pas par ce côté." },
    { id: "U-027", chapitre: "cyclistes-deux-roues", situation: "Vous laissez votre voiture quelques minutes sur une bande cyclable, le temps d'une course.",
      q: "Ce stationnement est :", options: ["Autorisé pour quelques minutes", "Très gênant et sanctionné de 135 €"], bonnes: [1],
      explication: "L'arrêt et le stationnement sur une piste ou une bande cyclable sont très gênants : ils obligent les cyclistes à se déporter dans la circulation." },
    { id: "U-028", chapitre: "cyclistes-deux-roues", situation: "Garé le long du trottoir, vous allez ouvrir votre portière côté circulation.",
      q: "Avant d'ouvrir, je :", options: ["Regarde dans le rétroviseur", "Tourne la tête pour vérifier l'arrivée d'un cycliste", "Ouvre en grand rapidement pour sortir vite"], bonnes: [0, 1],
      explication: "Une portière ouverte sans précaution devant un cycliste peut provoquer une chute grave. On contrôle rétroviseur et angle mort, puis on ouvre progressivement." },
    { id: "U-029", chapitre: "cyclistes-deux-roues", situation: "Vous allez tourner à droite. Un cycliste roule à votre droite sur la bande cyclable et continue tout droit.",
      q: "Je :", options: ["Contrôle mon rétroviseur droit et mon angle mort", "Laisse passer le cycliste avant de tourner", "Tourne devant lui puisque j'ai mis mon clignotant"], bonnes: [0, 1],
      explication: "Le cycliste qui continue tout droit sur la bande cyclable doit pouvoir passer. On vérifie l'angle mort droit et l'on tourne après lui." },
    { id: "U-030", chapitre: "cyclistes-deux-roues",
      q: "Le port du casque à vélo est obligatoire :", options: ["Pour les enfants de moins de 12 ans", "Pour tous les cyclistes, quel que soit leur âge"], bonnes: [0],
      explication: "Le casque est obligatoire pour les enfants de moins de 12 ans, conducteurs ou passagers. Il est vivement recommandé pour tous." },
    { id: "U-031", chapitre: "cyclistes-deux-roues",
      q: "Les motocyclistes sont difficiles à percevoir parce que :", options: ["Leur silhouette est étroite", "Ils se cachent facilement dans l'angle mort", "Ils roulent toujours lentement"], bonnes: [0, 1],
      explication: "Un deux-roues motorisé est étroit, se dissimule dans l'angle mort et sa vitesse est souvent mal estimée, notamment aux intersections." },
    { id: "U-032", chapitre: "cyclistes-deux-roues", situation: "Vous allez tourner à gauche à une intersection. Une moto arrive en face.",
      q: "Je :", options: ["La laisse passer avant de tourner", "Tourne rapidement avant qu'elle n'arrive"], bonnes: [0],
      explication: "Les véhicules venant en face sont prioritaires sur celui qui tourne à gauche. La vitesse d'une moto est souvent sous-estimée : on la laisse passer." },
    { id: "U-033", chapitre: "cyclistes-deux-roues", situation: "Vous apercevez ce panneau à l'entrée d'une bretelle.", panneau: "C207",
      q: "Un cyclomoteur peut emprunter cette route :", options: ["Oui", "Non"], bonnes: [1],
      explication: "L'autoroute est interdite aux cyclomoteurs, aux cyclistes, aux piétons et aux engins de déplacement personnel." },
    { id: "U-034", chapitre: "cyclistes-deux-roues",
      q: "Un cyclomoteur est limité par construction à :", options: ["25 km/h", "45 km/h", "80 km/h"], bonnes: [1],
      explication: "Le cyclomoteur (jusqu'à 50 cm³) ne peut pas dépasser 45 km/h. 25 km/h est la vitesse maximale des trottinettes électriques." },
    { id: "U-035", chapitre: "cyclistes-deux-roues",
      q: "L'âge minimal pour conduire une trottinette électrique est de :", options: ["12 ans", "14 ans", "16 ans"], bonnes: [1],
      explication: "La conduite d'une trottinette électrique ou d'un autre engin de déplacement personnel motorisé est interdite aux moins de 14 ans." },
    { id: "U-036", chapitre: "cyclistes-deux-roues", situation: "En agglomération, un adolescent circule sur une trottinette électrique.",
      q: "Une trottinette électrique :", options: ["Peut transporter un passager", "Doit emprunter la piste cyclable quand il y en a une", "Peut rouler sur le trottoir"], bonnes: [1],
      explication: "L'EDPM transporte une seule personne, roule sur les pistes et bandes cyclables quand elles existent et n'a pas le droit de rouler sur le trottoir." },
    { id: "U-037", chapitre: "cyclistes-deux-roues",
      q: "La vitesse maximale par construction d'une trottinette électrique est de :", options: ["25 km/h", "45 km/h", "50 km/h"], bonnes: [0],
      explication: "Les engins de déplacement personnel motorisés sont bridés à 25 km/h. Ils sont rapides et silencieux : on les anticipe comme des cyclistes." },
    { id: "U-038", chapitre: "poids-lourds-transports-lents", situation: "Vous suivez un poids lourd et ne voyez pas ses rétroviseurs.",
      q: "Dans cette situation :", options: ["Son conducteur ne me voit pas", "Je suis trop près de lui", "Je suis à bonne distance"], bonnes: [0, 1],
      explication: "Si vous ne voyez pas les rétroviseurs d'un camion, son conducteur ne vous voit pas : vous êtes dans son angle mort et trop près. Augmentez la distance." },
    { id: "U-039", chapitre: "poids-lourds-transports-lents", situation: "À une intersection, le poids lourd qui vous précède met son clignotant à droite et se décale vers la gauche.",
      q: "Je :", options: ["Reste derrière lui", "Le dépasse par la droite"], bonnes: [0],
      explication: "Le poids lourd se déporte à gauche pour pouvoir tourner à droite sans monter sur le trottoir. S'intercaler à sa droite place dans son angle mort et sur sa trajectoire." },
    { id: "U-040", chapitre: "poids-lourds-transports-lents", situation: "À l'arrière d'un autocar, vous voyez un autocollant montrant des silhouettes dans des zones triangulaires.",
      q: "Cet autocollant signale :", options: ["Les angles morts du véhicule", "Un transport de matières dangereuses", "Un véhicule prioritaire"], bonnes: [0],
      explication: "Depuis 2021, les véhicules de plus de 3,5 tonnes doivent porter une signalisation matérialisant leurs angles morts, à l'arrière et sur les côtés." },
    { id: "U-041", chapitre: "poids-lourds-transports-lents", situation: "Vous circulez après ce panneau.", panneau: "B3",
      q: "Je peux dépasser :", options: ["Un camion", "Un cyclomoteur", "Une voiture"], bonnes: [1],
      explication: "Le panneau B3 interdit de dépasser tous les véhicules à moteur, sauf les deux-roues sans side-car. Le cyclomoteur peut donc être dépassé, pas le camion ni la voiture." },
    { id: "U-042", chapitre: "poids-lourds-transports-lents", situation: "Sur une route à double sens, vous dépassez un poids lourd par vent fort.",
      q: "Pendant le dépassement, je m'attends à :", options: ["Un effet d'aspiration", "Une rafale de vent latéral en sortant de son abri", "Une meilleure visibilité vers l'avant"], bonnes: [0, 1],
      explication: "Le poids lourd crée un effet d'aspiration puis, en le quittant, on reçoit le vent latéral. Il masque la route : le dépassement demande une visibilité large." },
    { id: "U-043", chapitre: "poids-lourds-transports-lents", situation: "Après ce panneau, un bus arrêté à un arrêt signalé met son clignotant pour repartir.", panneau: "EB10:Ville",
      q: "Je :", options: ["Ralentis", "M'arrête si nécessaire pour le laisser repartir", "Accélère pour passer avant lui"], bonnes: [0, 1],
      explication: "En agglomération, on doit ralentir et au besoin s'arrêter pour permettre aux véhicules de transport en commun de quitter leurs arrêts signalés." },
    { id: "U-044", chapitre: "poids-lourds-transports-lents", situation: "À une intersection sans signalisation particulière, un tramway arrive par votre gauche.",
      q: "Je lui cède le passage :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Sauf signalisation contraire, le tramway est prioritaire sur les autres véhicules ; la priorité à droite ne s'applique pas face à lui." },
    { id: "U-045", chapitre: "poids-lourds-transports-lents", situation: "Votre feu passe au vert, mais la sortie du carrefour, traversé par les rails du tramway, est encombrée.",
      q: "Je :", options: ["Attends avant les rails", "M'avance et m'arrête sur les rails"], bonnes: [0],
      explication: "On ne s'engage pas si l'on risque de s'immobiliser sur les voies : le tramway ne peut ni dévier ni s'arrêter rapidement." },
    { id: "U-046", chapitre: "poids-lourds-transports-lents", situation: "Une dépanneuse équipée d'un gyrophare orange allumé roule derrière vous.",
      q: "Dans cette situation :", options: ["Elle est prioritaire comme une ambulance", "Je lui facilite le passage si possible"], bonnes: [1],
      explication: "Le gyrophare orange signale un véhicule d'intérêt général non prioritaire : on facilite son passage. Seuls les feux bleus avec avertisseur spécial imposent de céder le passage." },
    { id: "U-047", chapitre: "poids-lourds-transports-lents", situation: "Hors agglomération, vous suivez un tracteur qui ralentit et se rapproche du centre de la chaussée.",
      q: "Je :", options: ["Le dépasse rapidement", "Reste derrière lui : il va peut-être tourner à gauche"], bonnes: [1],
      explication: "Un véhicule lent qui ralentit et se décale vers le centre s'apprête souvent à tourner à gauche. Le dépasser à ce moment est très dangereux." },
    { id: "U-048", chapitre: "poids-lourds-transports-lents", situation: "Hors agglomération, vous rattrapez un cavalier qui longe la route.",
      q: "Pour le dépasser, je :", options: ["Ralentis", "M'écarte d'au moins 1,50 m", "Klaxonne pour le prévenir"], bonnes: [0, 1],
      explication: "Un cheval peut s'effrayer. On ralentit, sans klaxonner, et l'on s'écarte d'au moins 1,50 m hors agglomération (1 m en agglomération)." },
    { id: "U-049", chapitre: "poids-lourds-transports-lents", situation: "Un troupeau de vaches traverse la route devant vous, guidé par un berger.",
      q: "Je :", options: ["M'arrête ou avance au pas", "Klaxonne pour faire avancer les animaux", "Suis les indications du berger"], bonnes: [0, 2],
      explication: "Face à un troupeau, on s'arrête ou l'on avance au pas en suivant les indications du berger. L'avertisseur sonore affolerait les animaux." },
    { id: "U-050", chapitre: "poids-lourds-transports-lents", situation: "Un panonceau sous ce panneau signale le passage d'animaux sauvages. Un chevreuil surgit juste devant vous ; la collision semble inévitable.", panneau: "A14",
      q: "Je :", options: ["Freine fort en ligne droite", "Donne un coup de volant pour l'éviter"], bonnes: [0],
      explication: "Un coup de volant risque d'envoyer le véhicule contre un arbre ou sur l'autre voie. Mieux vaut freiner fort en gardant la trajectoire." },
    { id: "U-051", chapitre: "poids-lourds-transports-lents", situation: "Dans ce carrefour, un poids lourd occupe deux voies pour tourner.", panneau: "AB25",
      q: "Je peux me placer à sa droite pour sortir plus vite :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Un poids lourd a besoin de toute la largeur pour manœuvrer dans un giratoire. À sa droite, vous êtes dans son angle mort et sur sa trajectoire." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème D — chapitres ───────────── */
  P.chapitres.push(
    {
      id: "documents-controle-accident",
      theme: "D",
      titre: "Documents, assurance, contrôle technique et accident",
      duree: 25,
      objectifs: [
        "Savoir quels documents présenter lors d'un contrôle",
        "Comprendre l'obligation d'assurance et le bonus-malus",
        "Connaître le calendrier du contrôle technique",
        "Remplir correctement un constat amiable",
        "Adopter le bon comportement après un accident"
      ],
      sections: [
        {
          titre: "Les documents à présenter",
          contenu: `<p>Lors d'un contrôle par les forces de l'ordre, le conducteur doit pouvoir présenter :</p>
<ul>
<li>son <strong>permis de conduire</strong>, en carte ou sous forme numérique dans l'application officielle France Identité ;</li>
<li>le <strong>certificat d'immatriculation</strong> du véhicule (la « carte grise ») ;</li>
<li>le cas échéant, d'autres justificatifs liés à sa situation (livret d'apprentissage en conduite accompagnée, par exemple).</li>
</ul>
<p>Depuis le 1er avril 2024, la vignette d'assurance collée sur le pare-brise et la carte verte ne sont plus délivrées en France : les forces de l'ordre vérifient l'assurance en consultant le <strong>fichier des véhicules assurés</strong>, à partir de la plaque d'immatriculation. Le véhicule doit néanmoins être assuré.</p>
<p>Ne pas pouvoir présenter immédiatement son permis ou son certificat d'immatriculation est sanctionné d'une amende. Si le document n'est pas présenté aux forces de l'ordre dans les <strong>5 jours</strong>, l'amende est plus lourde.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> au volant, j'ai sur moi mon permis et la carte grise du véhicule. L'assurance est contrôlée par fichier.</div>`
        },
        {
          titre: "Le certificat d'immatriculation",
          contenu: `<p>Le certificat d'immatriculation identifie le véhicule et son titulaire. Il indique notamment la marque, le modèle, la date de première mise en circulation, le poids total autorisé en charge (PTAC) et le nombre de places assises.</p>
<ul>
<li>En cas de <strong>déménagement</strong>, le titulaire doit faire modifier l'adresse dans le délai d'<strong>un mois</strong>.</li>
<li>En cas de <strong>vente</strong>, le vendeur remet à l'acheteur le certificat barré avec la mention « vendu le », un <strong>certificat de cession</strong> et, pour un véhicule de plus de 4 ans, un procès-verbal de <strong>contrôle technique de moins de 6 mois</strong>. Il déclare la cession dans les 15 jours.</li>
<li>L'acheteur doit faire immatriculer le véhicule à son nom dans le délai d'un mois.</li>
</ul>
<p>Les démarches se font en ligne, sur le site de l'Agence nationale des titres sécurisés. Rouler avec un certificat qui ne correspond pas à la situation réelle est sanctionné.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous achetez une voiture d'occasion de 7 ans. Le vendeur doit vous remettre un procès-verbal de contrôle technique datant de moins de 6 mois, le certificat de cession et l'ancienne carte grise barrée.</div>`
        },
        {
          titre: "L'assurance obligatoire",
          contenu: `<p>Tout véhicule terrestre à moteur doit être assuré, même s'il ne roule pas. L'assurance minimale obligatoire est la <strong>responsabilité civile</strong>, dite « assurance au tiers » : elle indemnise les dommages causés aux autres (passagers, piétons, autres véhicules). Les garanties complémentaires (vol, incendie, bris de glace, dommages tous accidents, protection du conducteur) sont facultatives.</p>
<p>Conduire sans assurance est un <strong>délit</strong>, puni d'une amende pouvant atteindre 3 750 €, avec des peines complémentaires (suspension du permis, confiscation du véhicule). Les victimes d'un conducteur non assuré ou non identifié sont indemnisées par le <strong>Fonds de garantie</strong> des assurances obligatoires, qui se retourne ensuite contre le responsable.</p>
<p>La prime d'assurance dépend du <strong>coefficient de réduction-majoration</strong>, ou bonus-malus :</p>
<table>
<thead><tr><th>Situation</th><th>Effet sur le coefficient</th></tr></thead>
<tbody>
<tr><td>Année sans accident responsable</td><td>Réduction de 5 % (coefficient multiplié par 0,95)</td></tr>
<tr><td>Accident dont on est entièrement responsable</td><td>Majoration de 25 % (coefficient multiplié par 1,25)</td></tr>
<tr><td>Accident avec responsabilité partagée</td><td>Majoration de 12,5 %</td></tr>
</tbody>
</table>
<p>Le coefficient de départ est 1 ; il ne peut descendre sous 0,50 ni dépasser 3,50.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> l'assurance au tiers ne rembourse pas les dégâts de votre propre voiture si vous êtes responsable de l'accident. Elle couvre les dommages causés aux autres.</div>`
        },
        {
          titre: "Le contrôle technique",
          contenu: `<p>Le contrôle technique vérifie l'état des organes de sécurité et de pollution du véhicule : freins, direction, éclairage, pneus, suspension, carrosserie, émissions polluantes.</p>
<table>
<thead><tr><th>Étape</th><th>Délai</th></tr></thead>
<tbody>
<tr><td>Premier contrôle d'une voiture particulière</td><td>Dans les 6 mois précédant le 4e anniversaire de sa première mise en circulation</td></tr>
<tr><td>Contrôles suivants</td><td>Tous les 2 ans</td></tr>
<tr><td>Contre-visite après une défaillance majeure ou critique</td><td>Dans un délai de 2 mois</td></tr>
<tr><td>Vente d'un véhicule de plus de 4 ans</td><td>Contrôle de moins de 6 mois</td></tr>
</tbody>
</table>
<p>Les défauts relevés sont classés en trois niveaux : <strong>mineurs</strong> (à réparer, sans contre-visite), <strong>majeurs</strong> (réparation et contre-visite obligatoires) et <strong>critiques</strong> (danger direct : réparation et contre-visite, et circulation très limitée en attendant). Un véhicule non contrôlé dans les délais expose son conducteur à une amende de 135 € et à une immobilisation possible.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une voiture mise en circulation le 10 mars 2022 doit passer son premier contrôle technique entre le 10 septembre 2025 et le 10 mars 2026, puis tous les 2 ans.</div>`
        },
        {
          titre: "Le constat amiable",
          contenu: `<p>Après un accident matériel entre deux véhicules, les conducteurs remplissent ensemble <strong>un seul constat amiable</strong>, en deux exemplaires autocopiants. Il peut aussi être rempli sur smartphone (e-constat). Le constat ne détermine pas les responsabilités : ce sont les assureurs qui le feront à partir de ses éléments.</p>
<ol>
<li>Remplissez le recto ensemble, sur place : date, lieu, identités, assurances, véhicule A et véhicule B.</li>
<li>Cochez les <strong>circonstances</strong> qui correspondent à votre situation et indiquez le nombre de cases cochées.</li>
<li>Réalisez un <strong>croquis</strong> clair : voies, sens de circulation, position des véhicules, signalisation.</li>
<li>Indiquez vos éventuelles remarques dans la case « observations », puis <strong>signez tous les deux</strong>.</li>
<li>Chacun garde un exemplaire et l'envoie à son assureur dans les <strong>5 jours ouvrés</strong>.</li>
</ol>
<p>Une fois signé, le recto ne doit plus être modifié. Si vous n'êtes pas d'accord avec l'autre conducteur, ne signez pas une version qui ne correspond pas aux faits : notez votre désaccord dans la case observations. S'il refuse de remplir le constat, relevez son immatriculation et le nom de témoins.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> pour un accident entre deux véhicules, on ne remplit pas deux constats différents : un seul constat, signé par les deux conducteurs, chacun en conservant un exemplaire.</div>`
        },
        {
          titre: "En cas d'accident",
          contenu: `<p>Tout conducteur impliqué dans un accident doit <strong>s'arrêter</strong>. Prendre la fuite est un délit, sanctionné notamment par le retrait de 6 points.</p>
<p>Devant un accident, appliquez la démarche <strong>Protéger, Alerter, Secourir</strong> :</p>
<ul>
<li><strong>Protéger</strong> : allumez vos feux de détresse, garez-vous après l'accident, enfilez votre gilet de haute visibilité, placez le triangle si cela peut se faire sans danger, et éloignez les témoins de la chaussée ;</li>
<li><strong>Alerter</strong> : appelez le 112 (numéro d'urgence européen), le 15 (SAMU), le 17 (police, gendarmerie) ou le 18 (pompiers), en indiquant le lieu exact, le nombre de victimes et leur état ;</li>
<li><strong>Secourir</strong> : ne déplacez pas un blessé sauf danger vital (incendie), ne retirez pas le casque d'un motard, couvrez la victime et parlez-lui.</li>
</ul>
<p>En cas d'accident <strong>sans blessé</strong>, si les véhicules peuvent rouler, dégagez la chaussée après avoir pris des photos et rempli le constat dans un lieu sûr. En cas d'accident <strong>avec blessé</strong>, les forces de l'ordre interviennent et le constat reste utile pour l'assurance.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> sur une voie rapide, ne restez jamais sur la chaussée ou près de votre véhicule accidenté : mettez-vous à l'abri derrière la glissière avant d'appeler les secours.</div>`
        }
      ],
      points_cles: [
        "Documents à présenter : permis de conduire et certificat d'immatriculation",
        "Depuis avril 2024, plus de vignette ni de carte verte : l'assurance est vérifiée par fichier",
        "Responsabilité civile obligatoire ; conduire sans assurance est un délit",
        "Bonus-malus : -5 % par an sans accident responsable, +25 % par accident responsable",
        "Premier contrôle technique avant les 4 ans du véhicule, puis tous les 2 ans ; contre-visite sous 2 mois",
        "Changement d'adresse sur la carte grise : dans le mois",
        "Constat amiable : un seul pour deux véhicules, signé par les deux, envoyé sous 5 jours ouvrés",
        "Accident : s'arrêter, puis protéger, alerter (112), secourir"
      ]
    },
    {
      id: "permis-categories-apprentissage",
      theme: "D",
      titre: "Apprentissage, catégories de permis, remorques et permis probatoire",
      duree: 25,
      objectifs: [
        "Connaître les filières d'apprentissage : traditionnelle, accompagnée, supervisée",
        "Savoir quels véhicules le permis B permet de conduire",
        "Distinguer les règles de remorquage : B, B96 et BE",
        "Comprendre le fonctionnement du permis probatoire",
        "Connaître les principales catégories de permis"
      ],
      sections: [
        {
          titre: "L'examen et les filières d'apprentissage",
          contenu: `<p>Pour obtenir le permis B, il faut réussir l'<strong>épreuve théorique générale</strong> (le code), puis l'<strong>épreuve pratique</strong>. L'examen du code comporte 40 questions ; il faut au moins <strong>35 bonnes réponses</strong>. Il reste valable <strong>5 ans</strong>, dans la limite de 5 présentations à l'épreuve pratique.</p>
<p>Le permis B peut être passé dès <strong>17 ans</strong>. Plusieurs filières existent :</p>
<table>
<thead><tr><th>Filière</th><th>Âge de début</th><th>Principe</th></tr></thead>
<tbody>
<tr><td>Traditionnelle</td><td>Examen pratique dès 17 ans</td><td>Leçons avec un enseignant d'auto-école, au minimum 20 heures de conduite</td></tr>
<tr><td>Apprentissage anticipé de la conduite (conduite accompagnée)</td><td>15 ans</td><td>Formation initiale, puis au moins 1 an et 3 000 km avec un accompagnateur</td></tr>
<tr><td>Conduite supervisée</td><td>18 ans</td><td>Formation initiale, puis au moins 1 000 km avec un accompagnateur</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> code = 35 bonnes réponses sur 40, valable 5 ans ; permis B possible dès 17 ans.</div>`
        },
        {
          titre: "Conduite accompagnée et conduite supervisée",
          contenu: `<p>L'<strong>apprentissage anticipé de la conduite</strong> (AAC) commence dès 15 ans. Après une formation initiale en auto-école et la réussite du code, l'élève conduit avec un <strong>accompagnateur</strong> pendant au moins <strong>1 an</strong> et <strong>3 000 km</strong>. Deux <strong>rendez-vous pédagogiques</strong> avec l'enseignant permettent de faire le point.</p>
<p>La <strong>conduite supervisée</strong> est ouverte aux élèves d'au moins 18 ans, après la formation initiale, par exemple après un échec à l'épreuve pratique. Elle impose au moins <strong>1 000 km</strong> avec un accompagnateur, sans durée minimale.</p>
<p>Dans les deux cas, l'accompagnateur :</p>
<ul>
<li>doit être titulaire du <strong>permis B depuis au moins 5 ans</strong>, sans interruption ;</li>
<li>doit avoir obtenu l'<strong>accord de l'assureur</strong> du véhicule ;</li>
<li>peut être un parent, un proche ou toute personne remplissant ces conditions, et il peut y avoir plusieurs accompagnateurs.</li>
</ul>
<p>Le véhicule porte un <strong>disque « conduite accompagnée »</strong> à l'arrière. L'élève respecte les mêmes vitesses que les conducteurs novices (110, 100 et 80 km/h) et un taux d'alcool maximal de 0,2 g/L. Il peut emprunter l'autoroute <span class="panneau" data-code="C207"></span>.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> votre oncle a obtenu son permis B il y a 6 ans, sans suspension ni annulation. Avec l'accord de son assureur, il peut être votre accompagnateur.</div>`
        },
        {
          titre: "Le permis probatoire",
          contenu: `<p>Après l'obtention du permis, le conducteur entre dans une <strong>période probatoire</strong> pendant laquelle il dispose d'un capital réduit et de règles plus strictes.</p>
<table>
<thead><tr><th>Filière</th><th>Durée</th><th>Points gagnés par an sans infraction</th></tr></thead>
<tbody>
<tr><td>Traditionnelle ou supervisée</td><td>3 ans</td><td>+2 points (6 → 8 → 10 → 12)</td></tr>
<tr><td>Conduite accompagnée</td><td>2 ans</td><td>+3 points (6 → 9 → 12)</td></tr>
</tbody>
</table>
<ul>
<li>Capital initial : <strong>6 points</strong>.</li>
<li>Vitesses maximales : <strong>110 km/h</strong> sur autoroute <span class="panneau" data-code="B14:110"></span>, 100 km/h sur les routes à chaussées séparées, 80 km/h sur les autres routes.</li>
<li>Taux d'alcool maximal : <strong>0,2 g/L</strong> de sang.</li>
<li>Disque <strong>« A »</strong> obligatoire à l'arrière du véhicule.</li>
<li>Une <strong>formation complémentaire</strong> facultative, suivie entre le 6e et le 12e mois, réduit la période probatoire (de 3 à 2 ans, ou de 2 ans à 18 mois après une conduite accompagnée), à condition de ne pas avoir commis d'infraction entraînant un retrait de points.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> une infraction de 3 points ou plus pendant la période probatoire oblige à suivre un stage de sensibilisation. Une infraction de 6 points avec un capital de 6 points invalide le permis.</div>`
        },
        {
          titre: "Les véhicules que permet de conduire le permis B",
          contenu: `<p>Le permis B autorise la conduite des véhicules :</p>
<ul>
<li>dont le <strong>poids total autorisé en charge</strong> (PTAC) n'excède pas <strong>3 500 kg</strong> ;</li>
<li>qui comportent au maximum <strong>9 places assises</strong>, conducteur compris (8 passagers au plus) ;</li>
<li>comme les voitures, les camionnettes et les camping-cars dans ces limites.</li>
</ul>
<p>Il permet aussi de conduire les véhicules de la catégorie AM (cyclomoteurs, voiturettes). Pour conduire une <strong>motocyclette légère de 125 cm³</strong> au plus (11 kW au maximum), le titulaire du permis B doit avoir son permis depuis au moins <strong>2 ans</strong> et suivre une <strong>formation de 7 heures</strong>.</p>
<p>En revanche, un camping-car de plus de 3 500 kg ou un minibus de plus de 9 places exige un autre permis (C1 ou D1, par exemple).</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> 9 places, c'est conducteur compris. Un véhicule de 10 places assises ne se conduit pas avec le permis B, même s'il ne pèse que 3 000 kg.</div>`
        },
        {
          titre: "Tracter une remorque : B, B96 et BE",
          contenu: `<p>Le permis B permet aussi de tracter une remorque, dans certaines limites. On raisonne avec les <strong>PTAC</strong> (poids total autorisé en charge) inscrits sur les certificats d'immatriculation.</p>
<table>
<thead><tr><th>Remorque</th><th>Somme des PTAC (voiture + remorque)</th><th>Permis nécessaire</th></tr></thead>
<tbody>
<tr><td>PTAC de 750 kg au plus</td><td>Indifférente</td><td>B</td></tr>
<tr><td>PTAC de plus de 750 kg</td><td>3 500 kg au plus</td><td>B</td></tr>
<tr><td>PTAC de plus de 750 kg</td><td>Plus de 3 500 kg et 4 250 kg au plus</td><td>B avec la mention B96 (formation de 7 heures)</td></tr>
<tr><td>PTAC de plus de 750 kg, jusqu'à 3 500 kg</td><td>Plus de 4 250 kg</td><td>BE (examen spécifique)</td></tr>
</tbody>
</table>
<p>La formation B96 dure <strong>7 heures</strong> et ne comporte pas d'examen. Le permis BE nécessite une épreuve pratique. Avec une remorque, les distances de freinage s'allongent, le gabarit augmente et les vitesses maximales peuvent être réduites pour les ensembles lourds. Une remorque dont le PTAC dépasse 500 kg doit avoir sa propre immatriculation et son propre certificat d'immatriculation.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> votre voiture a un PTAC de 1 900 kg et vous voulez tracter une caravane de 1 500 kg de PTAC. La somme fait 3 400 kg : le permis B suffit. Avec une caravane de 2 000 kg (total 3 900 kg), il faut la mention B96.</div>`
        },
        {
          titre: "Les principales catégories de permis",
          contenu: `<table>
<thead><tr><th>Catégorie</th><th>Véhicules</th></tr></thead>
<tbody>
<tr><td>AM</td><td>Cyclomoteurs (50 cm³, 45 km/h) et voiturettes</td></tr>
<tr><td>A1</td><td>Motocyclettes légères (125 cm³ au plus, 11 kW au plus)</td></tr>
<tr><td>A2</td><td>Motocyclettes de puissance limitée à 35 kW</td></tr>
<tr><td>A</td><td>Toutes motocyclettes</td></tr>
<tr><td>B</td><td>Voitures et véhicules de 3 500 kg au plus, 9 places au plus</td></tr>
<tr><td>C1 et C</td><td>Poids lourds de transport de marchandises</td></tr>
<tr><td>D1 et D</td><td>Transport en commun de personnes</td></tr>
<tr><td>BE, C1E, CE, D1E, DE</td><td>Mêmes véhicules avec une remorque lourde</td></tr>
</tbody>
</table>
<p>Le permis de conduire au format carte de crédit a une durée de validité administrative de 15 ans : il faut alors renouveler le titre, sans repasser d'examen. Ce renouvellement ne remet pas en cause les droits à conduire.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le permis B donne aussi accès à la catégorie AM ; la moto 125 cm³ demande 2 ans de permis B et 7 heures de formation.</div>`
        }
      ],
      points_cles: [
        "Code : 40 questions, 35 bonnes réponses au minimum, valable 5 ans",
        "Permis B possible dès 17 ans ; conduite accompagnée dès 15 ans",
        "AAC : au moins 1 an et 3 000 km ; conduite supervisée : au moins 1 000 km, dès 18 ans",
        "Accompagnateur : permis B depuis au moins 5 ans sans interruption, accord de l'assureur",
        "Probatoire : 6 points, 3 ans (2 ans après AAC), disque A, 0,2 g/L",
        "Permis B : PTAC 3 500 kg au plus et 9 places au plus, conducteur compris",
        "Remorque de 750 kg au plus : permis B ; somme des PTAC jusqu'à 4 250 kg : B96 ; au-delà : BE",
        "Moto 125 cm³ avec le permis B : 2 ans de permis et 7 heures de formation"
      ],
      panneaux: ["C207", "B14:110"]
    }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème D — questions D-001 à D-039 ───────────── */
  P.questions.push(
    { id: "D-001", chapitre: "documents-controle-accident", situation: "Les forces de l'ordre vous arrêtent pour un contrôle routier.",
      q: "Je dois pouvoir présenter :", options: ["Mon permis de conduire", "Le certificat d'immatriculation du véhicule", "La facture d'achat du véhicule"], bonnes: [0, 1],
      explication: "Le conducteur doit présenter son permis et le certificat d'immatriculation. La facture d'achat n'est pas un document de circulation." },
    { id: "D-002", chapitre: "documents-controle-accident", situation: "Votre véhicule est assuré, mais aucune vignette n'est collée sur le pare-brise.",
      q: "Lors d'un contrôle, l'assurance est vérifiée :", options: ["Grâce à la vignette collée sur le pare-brise", "En consultant le fichier des véhicules assurés"], bonnes: [1],
      explication: "Depuis le 1er avril 2024, la vignette et la carte verte ne sont plus délivrées : les forces de l'ordre consultent le fichier des véhicules assurés à partir de la plaque." },
    { id: "D-003", chapitre: "documents-controle-accident",
      q: "Je peux présenter mon permis de conduire sous forme numérique, dans l'application officielle France Identité :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Le permis de conduire numérique, enregistré dans l'application France Identité, peut être présenté lors d'un contrôle en France." },
    { id: "D-004", chapitre: "documents-controle-accident", situation: "Vous déménagez dans une autre ville.",
      q: "Je dois faire modifier l'adresse de mon certificat d'immatriculation dans un délai de :", options: ["1 mois", "6 mois", "1 an"], bonnes: [0],
      explication: "Le changement d'adresse doit être déclaré dans le mois qui suit le déménagement, en ligne." },
    { id: "D-005", chapitre: "documents-controle-accident", situation: "Vous vendez votre voiture, mise en circulation il y a 6 ans.",
      q: "Je remets à l'acheteur :", options: ["Un certificat de cession", "Un procès-verbal de contrôle technique de moins de 6 mois", "Mon permis de conduire"], bonnes: [0, 1],
      explication: "Pour un véhicule de plus de 4 ans, le vendeur remet un contrôle technique de moins de 6 mois, le certificat de cession et la carte grise barrée." },
    { id: "D-006", chapitre: "documents-controle-accident",
      q: "L'assurance minimale obligatoire (responsabilité civile) couvre :", options: ["Les dommages causés aux autres", "Les dommages de mon propre véhicule lorsque je suis responsable"], bonnes: [0],
      explication: "La responsabilité civile, ou assurance au tiers, indemnise les dommages causés aux autres. La réparation de son propre véhicule relève de garanties facultatives." },
    { id: "D-007", chapitre: "documents-controle-accident",
      q: "Conduire un véhicule non assuré :", options: ["Est un délit", "Peut entraîner la confiscation du véhicule", "Est toléré pendant un mois"], bonnes: [0, 1],
      explication: "Le défaut d'assurance est un délit, puni d'une amende pouvant atteindre 3 750 € et de peines complémentaires comme la confiscation du véhicule." },
    { id: "D-008", chapitre: "documents-controle-accident", situation: "Vous avez roulé toute l'année sans accident responsable.",
      q: "Mon coefficient de bonus-malus :", options: ["Baisse de 5 %", "Augmente de 25 %", "Ne change pas"], bonnes: [0],
      explication: "Chaque année sans accident responsable, le coefficient est multiplié par 0,95, soit une baisse de 5 %, jusqu'à 0,50 au minimum." },
    { id: "D-009", chapitre: "documents-controle-accident", situation: "Vous êtes entièrement responsable d'un accident.",
      q: "Mon coefficient de bonus-malus :", options: ["Augmente de 25 %", "Augmente de 5 %", "Double"], bonnes: [0],
      explication: "Un accident dont on est entièrement responsable multiplie le coefficient par 1,25 (+25 %) ; en cas de responsabilité partagée, la majoration est de 12,5 %." },
    { id: "D-010", chapitre: "documents-controle-accident", situation: "Votre voiture a été mise en circulation il y a 3 ans et 8 mois. Elle n'a jamais passé de contrôle technique.",
      q: "Son premier contrôle technique :", options: ["Doit être effectué avant le 4e anniversaire de sa mise en circulation", "N'est obligatoire qu'à ses 5 ans"], bonnes: [0],
      explication: "Le premier contrôle technique d'une voiture particulière a lieu dans les 6 mois précédant le 4e anniversaire de sa première mise en circulation." },
    { id: "D-011", chapitre: "documents-controle-accident",
      q: "Après le premier contrôle technique, une voiture particulière est contrôlée :", options: ["Chaque année", "Tous les 2 ans", "Tous les 4 ans"], bonnes: [1],
      explication: "Après le premier contrôle, la périodicité est de 2 ans pour une voiture particulière." },
    { id: "D-012", chapitre: "documents-controle-accident", situation: "Le contrôle technique de votre voiture révèle une défaillance majeure.",
      q: "Je dois faire réparer et passer une contre-visite dans un délai de :", options: ["15 jours", "2 mois", "6 mois"], bonnes: [1],
      explication: "Une défaillance majeure ou critique impose une réparation et une contre-visite dans les 2 mois." },
    { id: "D-013", chapitre: "documents-controle-accident", situation: "Après un accrochage sans blessé entre deux voitures, vous allez remplir un constat amiable.",
      q: "Nous remplissons :", options: ["Un seul constat, signé par les deux conducteurs", "Chacun son propre constat"], bonnes: [0],
      explication: "Un seul constat, en deux exemplaires autocopiants, est rempli et signé par les deux conducteurs ; chacun en garde un exemplaire." },
    { id: "D-014", chapitre: "documents-controle-accident", situation: "Vous avez rempli et signé un constat amiable.",
      q: "Je l'envoie à mon assureur dans un délai de :", options: ["5 jours ouvrés", "1 mois", "3 mois"], bonnes: [0],
      explication: "Le constat doit être transmis à son assureur dans les 5 jours ouvrés suivant l'accident." },
    { id: "D-015", chapitre: "documents-controle-accident", situation: "Rentré chez vous, vous constatez une erreur au recto du constat que vous avez signé avec l'autre conducteur.",
      q: "Je peux la corriger seul sur mon exemplaire :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Une fois signé par les deux conducteurs, le recto ne doit plus être modifié. On peut en revanche apporter des précisions à son assureur au verso ou séparément." },
    { id: "D-016", chapitre: "documents-controle-accident", situation: "Vous remplissez un constat amiable après un accrochage.",
      q: "Sur le constat, je dois :", options: ["Cocher les cases des circonstances", "Faire un croquis de l'accident", "Indiquer qui est responsable"], bonnes: [0, 1],
      explication: "Le constat décrit les faits : circonstances cochées et croquis. Ce sont les assureurs qui déterminent ensuite les responsabilités." },
    { id: "D-017", chapitre: "documents-controle-accident", situation: "Vous arrivez sur un accident : un motard est blessé et reste allongé sur la chaussée.",
      q: "Je :", options: ["Allume mes feux de détresse et me gare après l'accident", "Appelle le 112", "Retire le casque du motard pour qu'il respire mieux"], bonnes: [0, 1],
      explication: "On protège la zone, puis on alerte les secours. On ne retire jamais le casque d'un motard blessé, ce qui pourrait aggraver une lésion de la colonne." },
    { id: "D-018", chapitre: "documents-controle-accident", situation: "En manœuvrant, vous rayez une voiture en stationnement et partez sans laisser vos coordonnées.",
      q: "Je commets :", options: ["Un délit de fuite", "Aucune infraction si les dégâts sont légers"], bonnes: [0],
      explication: "Tout conducteur impliqué dans un accident, même matériel, doit s'arrêter et permettre son identification. Sinon, il commet un délit de fuite (6 points)." },
    { id: "D-019", chapitre: "documents-controle-accident", situation: "Accrochage sans blessé sur une voie rapide. Les deux véhicules peuvent encore rouler.",
      q: "Je :", options: ["Dégage la chaussée", "Prends des photos avant de déplacer les véhicules", "Remplis le constat au milieu des voies"], bonnes: [0, 1],
      explication: "On photographie la scène, puis on dégage les véhicules pour éviter un suraccident. Le constat se remplit ensuite dans un lieu sûr." },
    { id: "D-020", chapitre: "permis-categories-apprentissage",
      q: "Pour réussir l'examen du code, il faut au moins :", options: ["30 bonnes réponses sur 40", "35 bonnes réponses sur 40", "38 bonnes réponses sur 40"], bonnes: [1],
      explication: "L'épreuve théorique générale comporte 40 questions ; il faut au moins 35 bonnes réponses." },
    { id: "D-021", chapitre: "permis-categories-apprentissage",
      q: "Une fois obtenu, l'examen du code reste valable :", options: ["2 ans", "5 ans", "Sans limite de durée"], bonnes: [1],
      explication: "Le code est valable 5 ans, dans la limite de 5 présentations à l'épreuve pratique." },
    { id: "D-022", chapitre: "permis-categories-apprentissage",
      q: "Le permis B peut être obtenu dès :", options: ["16 ans", "17 ans", "18 ans"], bonnes: [1],
      explication: "Depuis 2024, l'épreuve pratique du permis B peut être passée dès 17 ans, quelle que soit la filière." },
    { id: "D-023", chapitre: "permis-categories-apprentissage",
      q: "L'apprentissage anticipé de la conduite (conduite accompagnée) peut commencer dès :", options: ["14 ans", "15 ans", "16 ans"], bonnes: [1],
      explication: "La conduite accompagnée est accessible dès 15 ans, après une formation initiale en auto-école." },
    { id: "D-024", chapitre: "permis-categories-apprentissage", situation: "Vous êtes en conduite accompagnée.",
      q: "Avant de passer l'examen pratique, je dois avoir conduit au minimum :", options: ["Pendant 1 an", "3 000 km", "10 000 km"], bonnes: [0, 1],
      explication: "La phase de conduite accompagnée dure au moins 1 an et 3 000 km, avec deux rendez-vous pédagogiques." },
    { id: "D-025", chapitre: "permis-categories-apprentissage", situation: "Vous cherchez un accompagnateur pour votre conduite accompagnée.",
      q: "Mon accompagnateur doit :", options: ["Être titulaire du permis B depuis au moins 5 ans sans interruption", "Avoir l'accord de l'assureur du véhicule", "Être obligatoirement mon père ou ma mère"], bonnes: [0, 1],
      explication: "Tout titulaire du permis B depuis au moins 5 ans, sans interruption, peut être accompagnateur avec l'accord de l'assureur. Ce n'est pas forcément un parent." },
    { id: "D-026", chapitre: "permis-categories-apprentissage", situation: "Vous avez 19 ans et venez d'échouer à l'épreuve pratique. Vous choisissez la conduite supervisée.",
      q: "Je dois parcourir au minimum :", options: ["1 000 km", "3 000 km", "5 000 km"], bonnes: [0],
      explication: "La conduite supervisée, ouverte dès 18 ans, impose au moins 1 000 km avec un accompagnateur, sans durée minimale." },
    { id: "D-027", chapitre: "permis-categories-apprentissage", situation: "Vous êtes en conduite accompagnée avec votre accompagnateur.", panneau: "C207",
      q: "Je peux emprunter cette route :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Les élèves en conduite accompagnée peuvent emprunter l'autoroute, en respectant la vitesse maximale de 110 km/h." },
    { id: "D-028", chapitre: "permis-categories-apprentissage", situation: "Vous avez obtenu votre permis il y a 6 mois. Il fait beau et vous circulez après ce panneau, sur autoroute.", panneau: "B14:130",
      q: "Ma vitesse maximale est de :", options: ["130 km/h", "110 km/h", "90 km/h"], bonnes: [1],
      explication: "Pendant la période probatoire, la vitesse maximale sur autoroute est de 110 km/h, même si le panneau indique 130 km/h." },
    { id: "D-029", chapitre: "permis-categories-apprentissage", situation: "Vous venez d'obtenir votre permis.",
      q: "Pendant ma période probatoire, je dois :", options: ["Apposer le disque A à l'arrière du véhicule", "Respecter un taux d'alcool de 0,2 g/L au maximum", "Rouler à 70 km/h au plus sur toutes les routes"], bonnes: [0, 1],
      explication: "Le conducteur novice appose le disque A et respecte un taux de 0,2 g/L. Ses vitesses sont abaissées à 110, 100 et 80 km/h, pas à 70 km/h." },
    { id: "D-030", chapitre: "permis-categories-apprentissage",
      q: "Avec le permis B, je peux conduire un véhicule dont le PTAC est de :", options: ["3 200 kg", "3 500 kg", "3 800 kg"], bonnes: [0, 1],
      explication: "Le permis B autorise les véhicules dont le PTAC ne dépasse pas 3 500 kg. Au-delà, il faut un permis de la catégorie C1 ou C." },
    { id: "D-031", chapitre: "permis-categories-apprentissage", situation: "On vous propose de conduire un minibus de 3 200 kg de PTAC.",
      q: "Avec le permis B, je peux le conduire s'il comporte :", options: ["8 places assises, conducteur compris", "9 places assises, conducteur compris", "10 places assises, conducteur compris"], bonnes: [0, 1],
      explication: "Le permis B autorise au maximum 9 places assises, conducteur compris, soit 8 passagers." },
    { id: "D-032", chapitre: "permis-categories-apprentissage", situation: "Votre voiture a un PTAC de 2 000 kg. Vous attelez une remorque de 700 kg de PTAC.",
      q: "Le permis B suffit :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Une remorque dont le PTAC ne dépasse pas 750 kg peut toujours être tractée avec le permis B." },
    { id: "D-033", chapitre: "permis-categories-apprentissage", situation: "Votre voiture a un PTAC de 1 900 kg. Vous attelez une caravane de 1 500 kg de PTAC.",
      q: "Le permis B suffit :", options: ["Oui", "Non"], bonnes: [0],
      explication: "La remorque dépasse 750 kg, mais la somme des PTAC (3 400 kg) ne dépasse pas 3 500 kg : le permis B suffit." },
    { id: "D-034", chapitre: "permis-categories-apprentissage", situation: "Votre voiture a un PTAC de 2 000 kg. Vous voulez atteler une caravane de 2 000 kg de PTAC.",
      q: "Il me faut :", options: ["Le permis B seul", "Le permis B avec la mention B96", "Le permis C"], bonnes: [1],
      explication: "La somme des PTAC est de 4 000 kg : entre 3 500 et 4 250 kg, il faut la mention B96, obtenue après une formation de 7 heures." },
    { id: "D-035", chapitre: "permis-categories-apprentissage", situation: "Votre voiture a un PTAC de 2 200 kg. Vous voulez atteler une remorque de 2 500 kg de PTAC.",
      q: "Il me faut :", options: ["Le permis B avec la mention B96", "Le permis BE", "Le permis B seul"], bonnes: [1],
      explication: "La somme des PTAC (4 700 kg) dépasse 4 250 kg et la remorque dépasse 750 kg : le permis BE est nécessaire." },
    { id: "D-036", chapitre: "permis-categories-apprentissage",
      q: "La mention B96 :", options: ["S'obtient après une formation de 7 heures", "Ne comporte pas d'examen", "Permet de tracter n'importe quelle remorque"], bonnes: [0, 1],
      explication: "La B96 s'obtient après 7 heures de formation, sans examen. Elle concerne les ensembles dont la somme des PTAC est comprise entre 3 500 et 4 250 kg." },
    { id: "D-037", chapitre: "permis-categories-apprentissage", situation: "Vous êtes titulaire du permis B depuis 3 ans et souhaitez conduire une moto de 125 cm³.",
      q: "Je peux la conduire :", options: ["Sans aucune formation", "Après une formation de 7 heures"], bonnes: [1],
      explication: "Avec au moins 2 ans de permis B, une formation de 7 heures permet de conduire une motocyclette légère de 125 cm³ au plus." },
    { id: "D-038", chapitre: "permis-categories-apprentissage", situation: "Vous avez obtenu votre permis il y a 8 mois après une formation traditionnelle et n'avez commis aucune infraction.",
      q: "Suivre la formation complémentaire post-permis me permet de :", options: ["Réduire la durée de ma période probatoire", "Récupérer 4 points", "Rouler à 130 km/h sur autoroute dès le lendemain"], bonnes: [0],
      explication: "Suivie entre le 6e et le 12e mois, la formation complémentaire réduit la période probatoire de 3 à 2 ans (de 2 ans à 18 mois après une conduite accompagnée)." },
    { id: "D-039", chapitre: "permis-categories-apprentissage",
      q: "Avec le permis B, je peux conduire une voiturette (quadricycle léger de la catégorie AM) :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Le permis B inclut la catégorie AM : cyclomoteurs et voiturettes." }
  );
})();
