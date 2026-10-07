/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — Permis B (ETG) — fichier 2 : thèmes P, A, M, S, E
   Cours et banque de questions du code de la route.
   ═══════════════════════════════════════════════════════════════════════════ */
window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème P — Premiers secours ───────────── */
  P.chapitres.push(
    {
      id: "secours-proteger-alerter",
      theme: "P",
      titre: "Témoin d'un accident : protéger et alerter",
      duree: 20,
      objectifs: [
        "Connaître l'ordre des trois actions : protéger, alerter, secourir",
        "Se protéger soi-même et baliser les lieux d'un accident",
        "Utiliser correctement le gilet, le triangle et les feux de détresse",
        "Choisir le bon numéro d'urgence : 112, 15, 18, 17 ou 114",
        "Transmettre un message d'alerte complet et utile"
      ],
      sections: [
        {
          titre: "Les trois réflexes : protéger, alerter, secourir",
          contenu: `<p>Tout conducteur peut un jour être le premier sur les lieux d'un accident. Les secours professionnels mettent plusieurs minutes à arriver : pendant ce temps, ce que font les témoins peut éviter un second accident (le <strong>sur-accident</strong>) et sauver des vies. La conduite à tenir tient en trois verbes, toujours dans le même ordre : <strong>protéger</strong>, <strong>alerter</strong>, <strong>secourir</strong>.</p>
<ol>
<li><strong>Protéger</strong> : se protéger soi-même, puis protéger les victimes et les autres usagers en balisant l'accident.</li>
<li><strong>Alerter</strong> : appeler les secours avec un message clair et précis.</li>
<li><strong>Secourir</strong> : faire les gestes simples qui maintiennent les victimes en vie jusqu'à l'arrivée des secours.</li>
</ol>
<p>Cet ordre n'est pas arbitraire. Un témoin qui se précipite vers un blessé sans avoir sécurisé la zone risque d'être lui-même renversé : il y a alors une victime de plus et une personne de moins pour aider. De même, des gestes de secours sans alerte ne remplacent pas l'intervention d'une équipe médicale.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> protéger, alerter, secourir. On ne secourt jamais avant d'avoir protégé, et on alerte le plus tôt possible. Si vous êtes plusieurs, répartissez les tâches : l'un balise, l'autre appelle, un troisième s'occupe des victimes.</div>
<p>La loi impose d'ailleurs de porter assistance : ne pas intervenir alors qu'on pouvait le faire sans risque pour soi constitue le délit de <strong>non-assistance à personne en danger</strong>. Appeler les secours est déjà une forme d'assistance ; personne n'exige d'un témoin qu'il réalise des gestes qu'il ne connaît pas.</p>`
        },
        {
          titre: "Se protéger et protéger : gilet, détresse, triangle",
          contenu: `<p>Dès que vous apercevez un accident, <strong>allumez vos feux de détresse</strong> pour prévenir les conducteurs qui vous suivent, puis ralentissez et garez-vous si possible <strong>après</strong> l'accident, hors de la chaussée (sur l'accotement ou la bande d'arrêt d'urgence). Vous évitez ainsi de gêner l'arrivée des secours et vous ne vous placez pas dans la trajectoire d'un véhicule qui percuterait l'obstacle.</p>
<p>Avant de sortir de votre voiture, <strong>enfilez votre gilet de haute visibilité</strong>. C'est pour cette raison qu'il doit être rangé à portée de main dans l'habitacle, et non dans le coffre. Faites descendre vos passagers du côté opposé à la circulation et mettez-les à l'abri, derrière la glissière de sécurité s'il y en a une.</p>
<p>Ensuite, il faut <strong>baliser</strong> l'accident pour que les autres usagers ralentissent à temps :</p>
<ul>
<li>le <strong>triangle de présignalisation</strong> se place à au moins <strong>30 mètres</strong> en amont du véhicule ou de l'obstacle, de façon à être visible de loin ;</li>
<li>sur une route fréquentée, il est utile de faire signe aux conducteurs de ralentir, de part et d'autre de l'accident, à une distance d'environ <strong>150 à 200 mètres</strong>, en restant hors de la chaussée ;</li>
<li>la nuit, éclairez si possible la zone avec les feux de votre véhicule, et utilisez une lampe pour vous rendre visible.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> sur autoroute et voie rapide, poser le triangle peut être plus dangereux qu'utile. Si vous ne pouvez pas le faire sans risque, n'y allez pas : restez derrière la glissière avec votre gilet et alertez.</div>
<p>Pensez aussi aux dangers propres à l'accident : <strong>coupez le contact</strong> des véhicules accidentés pour limiter le risque d'incendie, interdisez de fumer à proximité et éloignez les curieux. En cas de fuite de produit dangereux (camion signalé par un panneau orange), restez à bonne distance.</p>
<table>
<thead><tr><th>Équipement</th><th>Où le ranger</th><th>Quand l'utiliser</th></tr></thead>
<tbody>
<tr><td>Gilet de haute visibilité</td><td>Dans l'habitacle, accessible sans sortir</td><td>Avant de descendre du véhicule, en cas d'arrêt d'urgence</td></tr>
<tr><td>Triangle de présignalisation</td><td>Dans le véhicule (souvent le coffre)</td><td>À au moins 30 m en amont, si on peut le poser sans danger</td></tr>
<tr><td>Feux de détresse</td><td>Commande au tableau de bord</td><td>Dès l'approche de l'accident et pendant l'arrêt</td></tr>
</tbody>
</table>`
        },
        {
          titre: "Les numéros d'urgence",
          contenu: `<p>Les appels vers les numéros d'urgence sont <strong>gratuits</strong> et possibles depuis n'importe quel téléphone, même sans crédit et, pour le 112, même avec un réseau qui n'est pas celui de votre opérateur. Chaque numéro aboutit à un service précis, mais tous les services se transmettent les appels entre eux : l'essentiel est d'appeler vite.</p>
<table>
<thead><tr><th>Numéro</th><th>Service</th><th>Pour quoi ?</th></tr></thead>
<tbody>
<tr><td><strong>112</strong></td><td>Numéro d'urgence européen</td><td>Toute urgence, dans tous les pays de l'Union européenne</td></tr>
<tr><td><strong>15</strong></td><td>SAMU</td><td>Urgence médicale : malaise, blessé grave, détresse vitale</td></tr>
<tr><td><strong>18</strong></td><td>Sapeurs-pompiers</td><td>Accident, incendie, victime incarcérée, secours à personne</td></tr>
<tr><td><strong>17</strong></td><td>Police ou gendarmerie</td><td>Infraction, danger sur la voie publique, délit de fuite</td></tr>
<tr><td><strong>114</strong></td><td>Urgence par SMS ou application</td><td>Personnes sourdes, malentendantes ou ne pouvant pas parler</td></tr>
</tbody>
</table>
<p>Sur autoroute, des <strong>bornes d'appel d'urgence</strong> orange sont installées environ tous les <strong>2 kilomètres</strong>. Des flèches sur les glissières indiquent la direction de la plus proche. L'avantage de la borne est que l'opérateur sait immédiatement où vous êtes. Le téléphone portable reste utilisable, mais il faut alors repérer le point kilométrique et le sens de circulation.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le 112 n'est pas un numéro « de secours » de seconde zone : c'est le numéro d'urgence européen, valable partout en France. Le 114 n'est pas un numéro vocal, il fonctionne par SMS, visio ou application.</div>
<p>De nombreux véhicules récents sont équipés de l'<strong>eCall</strong> : en cas de choc violent, la voiture appelle automatiquement le 112 et transmet sa position. Un bouton SOS permet aussi de déclencher l'appel manuellement.</p>`
        },
        {
          titre: "Le message d'alerte",
          contenu: `<p>Un appel efficace permet aux secours d'envoyer les bons moyens, au bon endroit, du premier coup. Parlez calmement et donnez, dans cet ordre si possible :</p>
<ol>
<li>le <strong>numéro de téléphone</strong> d'où vous appelez, pour être rappelé ;</li>
<li>la <strong>nature du problème</strong> : accident entre deux voitures, voiture seule sortie de route, piéton renversé… ;</li>
<li>la <strong>localisation précise</strong> : commune, nom de la route, sens de circulation, point kilométrique ou repère visible (sortie, pont, station-service) ;</li>
<li>le <strong>nombre de victimes</strong> et leur <strong>état apparent</strong> : parle-t-elle ? respire-t-elle ? saigne-t-elle ? est-elle coincée ?</li>
<li>les <strong>risques particuliers</strong> : incendie, fuite de carburant, matières dangereuses, véhicule instable ;</li>
<li>les <strong>gestes déjà effectués</strong> : balisage, position latérale de sécurité, compression…</li>
</ol>
<p>Ne raccrochez <strong>jamais le premier</strong> : c'est l'opérateur qui met fin à l'appel. Il peut vous poser des questions complémentaires ou vous guider pas à pas dans les gestes à faire (massage cardiaque, par exemple).</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> « J'appelle du 06… Une voiture a quitté la route et percuté un arbre, sur la D 12 entre Saint-Jean et Lavaur, dans le sens Lavaur vers Saint-Jean, juste après le pont. Le conducteur est seul, il est conscient mais saigne beaucoup de la jambe. Le moteur fume. J'ai allumé mes feux de détresse et posé le triangle. »</div>
<p>Si vous êtes seul face à une victime qui ne respire pas, appelez immédiatement (haut-parleur activé) avant de commencer le massage : l'alerte précoce fait partie de la chaîne de survie.</p>`
        },
        {
          titre: "Repérer les lieux et éviter le sur-accident",
          contenu: `<p>Pour donner une localisation précise, prenez l'habitude de lire les repères qui jalonnent la route : bornes kilométriques, numéros de sortie, panneaux de direction. Sur autoroute, des panneaux rappellent régulièrement le nom de l'autoroute et le sens de circulation.</p>
<p>Le sur-accident est un risque majeur : un véhicule arrive vite, découvre l'obstacle au dernier moment et percute les véhicules arrêtés ou les personnes présentes. Pour le limiter :</p>
<ul>
<li>ne vous arrêtez pas au milieu de la chaussée, et ne laissez pas votre voiture dans un virage ou derrière un sommet de côte ;</li>
<li>ne restez jamais entre deux véhicules ni devant ou derrière un véhicule immobilisé ;</li>
<li>sur une route à grande circulation, mettez-vous à l'abri derrière une glissière, un talus ou un fossé ;</li>
<li>si vous passez à côté d'un accident déjà pris en charge, ne ralentissez pas brutalement par curiosité : restez concentré sur la route.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> la nuit, un piéton sans gilet sur le bord d'une route non éclairée est quasiment invisible. Le gilet permet d'être vu de beaucoup plus loin dans la lumière des phares.</div>`
        }
      ],
      points_cles: [
        "Ordre des actions : protéger, alerter, secourir",
        "Feux de détresse dès l'approche, stationnement après l'accident et hors de la chaussée",
        "Gilet enfilé avant de sortir du véhicule, rangé dans l'habitacle",
        "Triangle à au moins 30 m en amont, seulement si on peut le poser sans danger",
        "112 : urgence européenne ; 15 : SAMU ; 18 : pompiers ; 17 : police-gendarmerie ; 114 : par SMS",
        "Message : numéro de rappel, nature, lieu précis, victimes, risques, gestes faits",
        "Ne jamais raccrocher le premier",
        "Couper le contact des véhicules accidentés et interdire de fumer"
      ]
    },
    {
      id: "secours-gestes",
      theme: "P",
      titre: "Secourir : les gestes qui sauvent",
      duree: 22,
      objectifs: [
        "Savoir ce qu'il ne faut pas faire face à un blessé",
        "Mettre une victime inconsciente qui respire en position latérale de sécurité",
        "Arrêter une hémorragie par compression",
        "Reconnaître un arrêt cardiaque et pratiquer massage et défibrillation",
        "Refroidir une brûlure et surveiller une victime jusqu'à l'arrivée des secours"
      ],
      sections: [
        {
          titre: "Ce qu'il ne faut pas faire",
          contenu: `<p>Le premier principe du secours est de <strong>ne pas aggraver l'état de la victime</strong>. Après un accident de la route, une lésion de la colonne vertébrale est toujours possible : un mouvement maladroit peut transformer une fracture en paralysie.</p>
<ul>
<li><strong>Ne pas déplacer un blessé</strong>, sauf danger réel, immédiat et impossible à écarter autrement (incendie, risque d'explosion, sur-accident inévitable).</li>
<li><strong>Ne pas retirer le casque d'un motard ou d'un cycliste</strong> : seuls les secouristes formés peuvent le faire, en maintenant la tête et le cou dans l'axe.</li>
<li><strong>Ne pas donner à boire ni à manger</strong>, même si la victime le demande : une opération peut être nécessaire, et une personne somnolente risque de s'étouffer.</li>
<li><strong>Ne pas sortir une victime coincée</strong> dans son véhicule : la désincarcération est l'affaire des pompiers.</li>
<li><strong>Ne pas laisser la victime seule</strong> : parlez-lui, rassurez-la, couvrez-la pour la protéger du froid.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un motard conscient demande qu'on lui enlève son casque parce qu'il étouffe. La bonne réponse reste de ne pas le retirer. On peut seulement relever la visière ou ouvrir la mentonnière pour l'aider à respirer, sans bouger la tête.</div>
<p>Le déplacement d'urgence reste une exception. Si un véhicule prend feu et que la victime est consciente et peut bouger, aidez-la à s'éloigner. Dans les autres cas, attendez les secours en surveillant la victime.</p>`
        },
        {
          titre: "Victime inconsciente qui respire : la position latérale de sécurité",
          contenu: `<p>Une victime <strong>inconsciente</strong> ne répond pas quand on lui parle et ne réagit pas quand on lui demande de serrer la main. Allongée sur le dos, elle risque de s'étouffer : sa langue peut tomber au fond de la gorge et des vomissements peuvent obstruer ses voies respiratoires.</p>
<p>Il faut d'abord vérifier qu'elle <strong>respire</strong> : basculez doucement sa tête en arrière en soulevant le menton, puis regardez si le ventre et la poitrine se soulèvent, écoutez et sentez le souffle pendant une dizaine de secondes.</p>
<ul>
<li>Si elle respire : placez-la en <strong>position latérale de sécurité (PLS)</strong>, sur le côté, la tête basculée en arrière et la bouche orientée vers le sol, pour que les liquides s'écoulent. Alertez, puis surveillez sa respiration en permanence.</li>
<li>Si elle ne respire pas, ou respire de façon anormale (bruyante, par à-coups) : c'est un <strong>arrêt cardiaque</strong>, il faut masser.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> inconsciente et respire = PLS ; inconsciente et ne respire pas = massage cardiaque et défibrillateur. Un motard inconscient qui respire n'est pas mis en PLS par un témoin seul s'il porte un casque intégral : on le laisse sur place, on alerte et on surveille.</div>
<p>Une victime <strong>consciente</strong> est laissée dans la position où elle se sent le mieux, sans être déplacée. On lui parle, on la couvre et on note l'évolution de son état pour le transmettre aux secours.</p>`
        },
        {
          titre: "Arrêter une hémorragie",
          contenu: `<p>Une hémorragie est un saignement abondant qui ne s'arrête pas spontanément. Elle peut entraîner la mort en quelques minutes. Le geste à faire est simple : <strong>appuyer fort et directement sur la plaie</strong>.</p>
<ol>
<li>Appuyez sur l'endroit qui saigne avec la main, en interposant si possible un tissu propre (mouchoir, vêtement) ou en protégeant votre main avec un gant ou un sac plastique.</li>
<li>Allongez la victime, pour limiter le risque de malaise.</li>
<li>Faites alerter, ou alertez vous-même dès que possible.</li>
<li>Maintenez la compression sans la relâcher jusqu'à l'arrivée des secours. Si vous devez vous libérer, remplacez la main par un pansement compressif (tissu maintenu serré par un lien large).</li>
</ol>
<div class="encart" data-type="danger"><strong>Attention :</strong> on ne retire jamais un objet planté dans une plaie, il limite parfois le saignement. Le garrot n'est utilisé qu'en dernier recours, quand la compression est impossible ou inefficace sur un membre, et de préférence par une personne formée.</div>
<p>Si du sang s'écoule par la bouche ou le nez, ne cherchez pas à comprimer : placez la victime, si elle est consciente, dans la position où elle respire le mieux, et signalez-le aux secours.</p>`
        },
        {
          titre: "Arrêt cardiaque : masser et défibriller",
          contenu: `<p>Une personne en arrêt cardiaque est <strong>inconsciente</strong> et <strong>ne respire pas</strong> (ou respire de façon anormale). Chaque minute sans massage réduit fortement ses chances de survie : il faut agir sans attendre.</p>
<ol>
<li><strong>Alerter</strong> : appelez le 15, le 18 ou le 112, ou faites appeler, et demandez qu'on apporte un défibrillateur.</li>
<li><strong>Masser</strong> : la victime est allongée sur le dos sur une surface dure. Placez le talon d'une main au centre de la poitrine, l'autre main par-dessus, bras tendus. Enfoncez la poitrine de <strong>5 à 6 cm</strong> chez l'adulte, à un rythme de <strong>100 à 120 compressions par minute</strong>, en laissant la poitrine remonter entre chaque compression.</li>
<li><strong>Défibriller</strong> : dès qu'un défibrillateur automatisé externe (DAE) est disponible, allumez-le et suivez ses instructions vocales. Il analyse lui-même le rythme du cœur et ne délivre un choc que si c'est nécessaire.</li>
</ol>
<p>Le massage ne s'interrompt que pendant l'analyse du défibrillateur et la délivrance du choc, puis reprend aussitôt, jusqu'à l'arrivée des secours ou la reprise d'une respiration normale. Si vous êtes plusieurs, relayez-vous toutes les deux minutes environ : le massage est épuisant.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> tout le monde peut et doit utiliser un défibrillateur, même sans formation. L'appareil est conçu pour cela et ne peut pas délivrer de choc à une personne dont le cœur bat normalement.</div>
<table>
<thead><tr><th>État de la victime</th><th>Geste</th></tr></thead>
<tbody>
<tr><td>Consciente, saigne abondamment</td><td>Compression directe, allonger, alerter</td></tr>
<tr><td>Consciente, sans saignement</td><td>Ne pas la déplacer, la rassurer, la couvrir, alerter</td></tr>
<tr><td>Inconsciente, respire</td><td>Position latérale de sécurité, alerter, surveiller</td></tr>
<tr><td>Inconsciente, ne respire pas</td><td>Alerter, massage cardiaque, défibrillateur</td></tr>
</tbody>
</table>`
        },
        {
          titre: "Brûlures et surveillance",
          contenu: `<p>Une brûlure doit être <strong>refroidie immédiatement</strong> avec de l'eau tempérée (ni glacée, ni chaude), en arrosant doucement pendant au moins une dizaine de minutes. Le refroidissement limite l'étendue et la profondeur de la lésion et calme la douleur.</p>
<ul>
<li>Ne retirez pas les vêtements collés à la peau ; retirez en revanche ce qui peut serrer (bagues, montre) avant que la zone ne gonfle.</li>
<li>N'appliquez ni corps gras, ni pommade, ni glace.</li>
<li>Ne percez pas les cloques.</li>
<li>Alertez les secours si la brûlure est étendue, touche le visage, les mains ou les parties génitales, ou si la victime est un enfant.</li>
</ul>
<p>Si les vêtements d'une personne prennent feu, empêchez-la de courir (cela attise les flammes), allongez-la au sol et étouffez le feu avec une couverture ou un vêtement en matière naturelle, puis arrosez.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un conducteur s'est brûlé l'avant-bras en ouvrant le bouchon du radiateur moteur chaud. Vous lui faites passer l'avant-bras sous l'eau du robinet d'une station-service pendant au moins dix minutes, sans appliquer de crème, et vous demandez un avis médical.</div>
<p>Dans tous les cas, jusqu'à l'arrivée des secours, <strong>surveillez</strong> les victimes : conscience, respiration, saignement, plaintes. Notez l'heure des changements et transmettez ces informations aux secouristes. Une formation courte, comme le PSC (prévention et secours civiques de niveau 1) ou les « gestes qui sauvent », permet d'acquérir ces réflexes en quelques heures.</p>`
        }
      ],
      points_cles: [
        "Ne pas déplacer un blessé, sauf danger réel, immédiat et non maîtrisable",
        "Ne jamais retirer le casque d'un motard",
        "Ne pas donner à boire à une victime",
        "Inconsciente et respire : position latérale de sécurité",
        "Inconsciente et ne respire pas : alerter, masser (100 à 120 par minute, 5 à 6 cm), défibrillateur",
        "Le défibrillateur peut être utilisé par tout le monde",
        "Hémorragie : compression directe et ferme, victime allongée",
        "Brûlure : refroidir à l'eau tempérée au moins une dizaine de minutes, sans pommade"
      ]
    }
  );

  /* ───────────── Thème P — questions P-001 à P-032 ───────────── */
  P.questions.push(
    { id: "P-001", chapitre: "secours-proteger-alerter", situation: "Vous êtes le premier conducteur à arriver sur les lieux d'un accident qui vient de se produire.",
      q: "Dans quel ordre dois-je agir ?", options: ["Secourir, protéger, alerter", "Protéger, alerter, secourir", "Alerter, secourir, protéger"], bonnes: [1],
      explication: "On protège d'abord pour éviter un sur-accident, on alerte ensuite, puis on porte secours. Secourir sans avoir protégé expose à devenir soi-même victime." },
    { id: "P-002", chapitre: "secours-proteger-alerter", situation: "Hors agglomération, une voiture accidentée est immobilisée sur la chaussée. Vous décidez de vous arrêter.",
      q: "Je stationne de préférence :", options: ["Avant l'accident, pour protéger la scène avec ma voiture", "Après l'accident", "Hors de la chaussée si possible"], bonnes: [1, 2],
      explication: "On se gare après l'accident et hors de la chaussée : on ne crée pas un nouvel obstacle et on laisse la place aux secours." },
    { id: "P-003", chapitre: "secours-proteger-alerter", situation: "Vous vous êtes arrêté sur l'accotement pour aider les occupants d'une voiture accidentée.",
      q: "Avant de sortir de mon véhicule :", options: ["J'allume mes feux de détresse", "J'enfile mon gilet de haute visibilité", "Je pose le triangle depuis ma portière"], bonnes: [0, 1],
      explication: "Feux de détresse et gilet se mettent avant de sortir. Le triangle se pose à pied, à au moins 30 m en amont, une fois le gilet enfilé." },
    { id: "P-004", chapitre: "secours-proteger-alerter", situation: "Vous devez baliser un véhicule en panne sur une route secondaire, hors agglomération.",
      q: "Je place le triangle de présignalisation à au moins :", options: ["10 mètres", "30 mètres", "100 mètres"], bonnes: [1],
      explication: "Le triangle se place à au moins 30 m en amont du véhicule ou de l'obstacle, de manière à être visible des conducteurs qui arrivent." },
    { id: "P-005", chapitre: "secours-proteger-alerter", situation: "Votre voiture tombe en panne sur la bande d'arrêt d'urgence d'une autoroute très chargée.",
      q: "Je dois obligatoirement aller poser le triangle :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Sur autoroute, poser le triangle peut être très dangereux. Si on ne peut pas le faire sans risque, on y renonce : feux de détresse, gilet, et mise à l'abri derrière la glissière." },
    { id: "P-006", chapitre: "secours-proteger-alerter",
      q: "Le gilet de haute visibilité doit être rangé :", options: ["Dans le coffre, avec le triangle", "À portée de main du conducteur", "Dans la boîte à gants ou la portière, par exemple"], bonnes: [1, 2],
      explication: "Le gilet doit pouvoir être enfilé avant de sortir du véhicule : il se range donc dans l'habitacle, à portée de main, et non dans le coffre." },
    { id: "P-007", chapitre: "secours-proteger-alerter", situation: "Vous êtes témoin d'un accident grave sur une route de campagne.",
      q: "Le numéro d'urgence européen est le :", options: ["15", "17", "112"], bonnes: [2],
      explication: "Le 112 est le numéro d'urgence européen, valable dans toute l'Union européenne. Le 15 est le SAMU, le 17 la police ou la gendarmerie." },
    { id: "P-008", chapitre: "secours-proteger-alerter", situation: "Un passager de votre voiture fait un malaise grave. Vous vous arrêtez en sécurité.",
      q: "Pour une urgence médicale, je peux appeler :", options: ["Le 15", "Le 18", "Le 112"], bonnes: [0, 1, 2],
      explication: "Le 15 (SAMU) est le numéro de l'urgence médicale, mais le 18 (pompiers) et le 112 (numéro européen) traiteront aussi l'appel : les services se transmettent les appels." },
    { id: "P-009", chapitre: "secours-proteger-alerter", situation: "Une personne sourde est témoin d'un accident et veut prévenir les secours.",
      q: "Elle peut contacter les secours :", options: ["Par SMS au 114", "En appelant le 17 par la voix", "Uniquement par une borne d'appel"], bonnes: [0],
      explication: "Le 114 est le numéro d'urgence pour les personnes sourdes, malentendantes ou ne pouvant pas parler. Il fonctionne par SMS, visio ou application." },
    { id: "P-010", chapitre: "secours-proteger-alerter", situation: "Vous signalez un accident aux secours par téléphone.",
      q: "Dans mon message, j'indique :", options: ["Le lieu précis de l'accident", "Le nombre de victimes et leur état apparent", "Les marques des véhicules impliqués", "Le numéro de téléphone d'où j'appelle"], bonnes: [0, 1, 3],
      explication: "Les secours ont besoin du lieu précis, du nombre et de l'état des victimes, des risques et d'un numéro de rappel. La marque des véhicules ne leur sert à rien." },
    { id: "P-011", chapitre: "secours-proteger-alerter", situation: "Vous avez donné toutes les informations à l'opérateur du 18.",
      q: "Je peux raccrocher dès que j'ai fini de parler :", options: ["Oui", "Non"], bonnes: [1],
      explication: "On ne raccroche jamais le premier : l'opérateur peut avoir besoin de précisions ou vous guider dans les gestes de secours." },
    { id: "P-012", chapitre: "secours-proteger-alerter", situation: "Sur autoroute, vous êtes témoin d'un accident. Vous apercevez une flèche sur la glissière de sécurité.",
      q: "Cette flèche m'indique :", options: ["La direction de la borne d'appel d'urgence la plus proche", "La sortie la plus proche", "Le sens de circulation"], bonnes: [0],
      explication: "Les flèches sur les glissières indiquent la borne d'appel d'urgence la plus proche. Ces bornes sont installées environ tous les 2 km et localisent l'appel automatiquement." },
    { id: "P-013", chapitre: "secours-proteger-alerter", situation: "Une voiture accidentée fume légèrement, son moteur tourne encore. Le conducteur est blessé mais conscient.",
      q: "Pour limiter le risque d'incendie, je :", options: ["Coupe le contact", "Interdis de fumer autour du véhicule", "Sors immédiatement le conducteur en le tirant par les bras"], bonnes: [0, 1],
      explication: "Couper le contact et interdire de fumer réduisent le risque d'incendie. On ne déplace pas un blessé, sauf danger immédiat et non maîtrisable comme un incendie déclaré." },
    { id: "P-014", chapitre: "secours-proteger-alerter", situation: "La nuit, sur une route non éclairée, vous vous arrêtez pour aider des accidentés.",
      q: "Pour éviter un sur-accident :", options: ["Je fais signe aux conducteurs de ralentir, à distance de l'accident", "Je reste debout entre les deux véhicules accidentés", "Je porte mon gilet de haute visibilité"], bonnes: [0, 2],
      explication: "On fait ralentir les usagers en amont, en restant hors de la chaussée et visible grâce au gilet. Se tenir entre deux véhicules immobilisés est très dangereux." },
    { id: "P-015", chapitre: "secours-proteger-alerter", situation: "Vous passez à côté d'un accident déjà pris en charge par les pompiers.",
      q: "Je ralentis fortement pour regarder ce qui s'est passé :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Le ralentissement par curiosité provoque des collisions en chaîne. On adapte son allure aux consignes et on reste concentré sur la route." },
    { id: "P-016", chapitre: "secours-gestes", situation: "Un motard est allongé sur la chaussée après une chute. Il est conscient et demande qu'on lui enlève son casque.",
      q: "Je lui retire son casque :", options: ["Oui", "Non"], bonnes: [1],
      explication: "On ne retire jamais le casque d'un motard : un mouvement de la tête peut aggraver une lésion de la colonne. Seuls les secouristes formés le font." },
    { id: "P-017", chapitre: "secours-gestes", situation: "Un blessé conscient, assis au bord de la route après un accident, réclame à boire.",
      q: "Je lui donne de l'eau :", options: ["Oui, un peu", "Non"], bonnes: [1],
      explication: "On ne donne ni à boire ni à manger à une victime : une opération peut être nécessaire et elle risque de s'étouffer si son état se dégrade." },
    { id: "P-018", chapitre: "secours-gestes", situation: "Après un choc, le conducteur d'une voiture est coincé à sa place. Il est conscient. Aucun incendie n'est visible.",
      q: "Je dois :", options: ["Le sortir du véhicule le plus vite possible", "Le laisser en place et alerter", "Lui parler et le rassurer"], bonnes: [1, 2],
      explication: "Sans danger immédiat, on ne déplace pas un blessé : on alerte, on le rassure et on le surveille. La désincarcération est l'affaire des pompiers." },
    { id: "P-019", chapitre: "secours-gestes", situation: "Une voiture accidentée commence à brûler. Son conducteur est conscient et peut bouger, mais il est sonné.",
      q: "Je peux l'aider à s'éloigner du véhicule :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Le déplacement d'un blessé est permis en cas de danger réel, immédiat et impossible à maîtriser, comme un incendie." },
    { id: "P-020", chapitre: "secours-gestes", situation: "Une victime ne répond pas quand vous lui parlez et ne réagit pas quand vous lui prenez la main. Sa poitrine se soulève régulièrement.",
      q: "Je la place :", options: ["En position latérale de sécurité", "Assise contre un arbre", "Sur le dos, jambes surélevées"], bonnes: [0],
      explication: "Une victime inconsciente qui respire est mise en position latérale de sécurité : ses voies respiratoires restent libres et les liquides s'écoulent vers l'extérieur." },
    { id: "P-021", chapitre: "secours-gestes", situation: "Une victime est inconsciente et ne respire pas.",
      q: "Je dois :", options: ["La mettre en position latérale de sécurité", "Alerter les secours", "Commencer un massage cardiaque", "Faire chercher un défibrillateur"], bonnes: [1, 2, 3],
      explication: "Inconsciente et sans respiration : c'est un arrêt cardiaque. On alerte, on masse sans attendre et on utilise un défibrillateur dès qu'il est disponible. La PLS est réservée aux victimes qui respirent." },
    { id: "P-022", chapitre: "secours-gestes", situation: "Vous pratiquez un massage cardiaque sur un adulte.",
      q: "Le rythme des compressions est d'environ :", options: ["30 à 50 par minute", "60 à 80 par minute", "100 à 120 par minute"], bonnes: [2],
      explication: "Chez l'adulte, on comprime la poitrine de 5 à 6 cm à un rythme de 100 à 120 compressions par minute, en la laissant remonter entre chaque compression." },
    { id: "P-023", chapitre: "secours-gestes", situation: "Un défibrillateur est disponible près des lieux d'un arrêt cardiaque. Personne n'a de formation au secourisme.",
      q: "Le défibrillateur peut être utilisé :", options: ["Par n'importe quel témoin", "Uniquement par un médecin", "Uniquement par un secouriste diplômé"], bonnes: [0],
      explication: "Le défibrillateur automatisé externe est conçu pour être utilisé par tous : il guide l'utilisateur par la voix et ne délivre un choc que si c'est nécessaire." },
    { id: "P-024", chapitre: "secours-gestes", situation: "Un piéton renversé saigne abondamment de la cuisse. Il est conscient.",
      q: "Je dois :", options: ["Appuyer fortement sur la plaie", "L'allonger", "Le faire marcher jusqu'à l'ombre"], bonnes: [0, 1],
      explication: "Face à une hémorragie, on comprime directement et fortement la plaie, on allonge la victime pour limiter le malaise, et on alerte." },
    { id: "P-025", chapitre: "secours-gestes", situation: "Un éclat de verre est planté dans le bras d'un blessé, qui saigne autour.",
      q: "Je retire l'éclat pour mieux comprimer :", options: ["Oui", "Non"], bonnes: [1],
      explication: "On ne retire jamais un objet planté dans une plaie : il limite parfois le saignement. On alerte et on maintient la victime au calme." },
    { id: "P-026", chapitre: "secours-gestes", situation: "Vous comprimez une plaie qui saignait abondamment. Le saignement semble s'être arrêté.",
      q: "Je peux relâcher la compression :", options: ["Oui", "Non, je la maintiens jusqu'à l'arrivée des secours"], bonnes: [1],
      explication: "Relâcher la compression peut faire repartir l'hémorragie. On la maintient, ou on la remplace par un pansement compressif, jusqu'à l'arrivée des secours." },
    { id: "P-027", chapitre: "secours-gestes", situation: "Un conducteur s'est brûlé la main sur une pièce du moteur.",
      q: "Je dois :", options: ["Refroidir la brûlure à l'eau tempérée", "Appliquer un corps gras ou une pommade", "Percer les cloques"], bonnes: [0],
      explication: "Une brûlure se refroidit immédiatement à l'eau tempérée, pendant au moins une dizaine de minutes. On n'applique ni corps gras ni glace et on ne perce pas les cloques." },
    { id: "P-028", chapitre: "secours-gestes", situation: "Un blessé a les vêtements brûlés et collés à la peau de l'avant-bras.",
      q: "J'enlève ces vêtements :", options: ["Oui", "Non"], bonnes: [1],
      explication: "On ne retire pas les vêtements collés à la peau : on risquerait d'arracher les tissus. On arrose et on alerte." },
    { id: "P-029", chapitre: "secours-gestes", situation: "Après un accident, une victime est consciente, ne saigne pas et se plaint du dos.",
      q: "Je dois :", options: ["La laisser dans la position où elle se trouve", "La couvrir pour la protéger du froid", "L'aider à se lever pour vérifier qu'elle peut marcher"], bonnes: [0, 1],
      explication: "Une victime consciente n'est pas déplacée, surtout si elle se plaint du dos : on la couvre, on la rassure, on alerte et on surveille son état." },
    { id: "P-030", chapitre: "secours-gestes", situation: "Un motard inconscient, casqué, respire normalement. Vous êtes seul.",
      q: "Je dois :", options: ["Lui retirer son casque pour le mettre en position latérale de sécurité", "Le laisser sur place, alerter et surveiller sa respiration", "Le transporter jusqu'à ma voiture"], bonnes: [1],
      explication: "On ne retire pas le casque et on ne déplace pas le motard. On alerte, on protège la zone et on surveille sa respiration jusqu'à l'arrivée des secours." },
    { id: "P-031", chapitre: "secours-gestes", situation: "Un défibrillateur est en cours d'utilisation sur une victime en arrêt cardiaque. L'appareil annonce qu'il analyse le rythme cardiaque.",
      q: "Pendant l'analyse :", options: ["Je continue à masser", "Je ne touche pas la victime", "Je la mets en position latérale de sécurité"], bonnes: [1],
      explication: "Pendant l'analyse et le choc, personne ne doit toucher la victime. Le massage reprend aussitôt après, selon les instructions vocales de l'appareil." },
    { id: "P-032", chapitre: "secours-gestes", situation: "Vous êtes seul face à une personne en arrêt cardiaque, votre téléphone à la main.",
      q: "Le mieux est de :", options: ["Masser d'abord pendant dix minutes, puis appeler", "Appeler les secours en haut-parleur, puis masser", "Chercher quelqu'un pour masser à ma place avant toute chose"], bonnes: [1],
      explication: "L'alerte précoce fait partie de la chaîne de survie : on appelle tout de suite, haut-parleur activé, et on commence le massage en suivant les conseils de l'opérateur." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème A — Prendre et quitter son véhicule ───────────── */
  P.chapitres.push(
    {
      id: "installation-depart",
      theme: "A",
      titre: "S'installer, vérifier et démarrer",
      duree: 22,
      objectifs: [
        "Régler le siège, le volant et l'appuie-tête pour conduire en sécurité",
        "Régler les rétroviseurs avant de partir et connaître leurs limites",
        "Boucler correctement sa ceinture",
        "Faire les vérifications utiles avant un départ",
        "Démarrer et s'insérer dans la circulation sans gêner ni surprendre"
      ],
      sections: [
        {
          titre: "Le siège et le volant",
          contenu: `<p>Une bonne installation n'est pas une question de confort seulement : elle conditionne la qualité de vos réactions et l'efficacité de la ceinture et des airbags en cas de choc. Elle se fait <strong>avant de démarrer</strong>, jamais en roulant.</p>
<ul>
<li><strong>Distance du siège</strong> : asseyez-vous au fond du siège, le dos bien appuyé. En enfonçant complètement la pédale d'embrayage (ou le frein sur une boîte automatique), la jambe doit rester <strong>légèrement fléchie</strong>. Une jambe tendue au maximum n'a plus de réserve pour freiner fort.</li>
<li><strong>Dossier</strong> : il doit être proche de la verticale. Bras tendus, les poignets doivent pouvoir se poser sur le haut du volant tout en gardant les épaules contre le dossier. En conduisant, les bras restent ainsi légèrement fléchis.</li>
<li><strong>Hauteur</strong> : vous devez voir la route au-dessus du volant et lire le tableau de bord à travers lui, avec un espace suffisant entre la tête et le pavillon.</li>
<li><strong>Volant</strong> : s'il est réglable, ajustez-le en hauteur et en profondeur pour respecter les positions ci-dessus. Gardez une distance d'environ 25 cm entre le volant et le sternum, pour laisser l'airbag se déployer.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> régler son siège en roulant est dangereux : le siège peut glisser brusquement et vous éloigner des pédales. Faites-le à l'arrêt, frein de stationnement serré.</div>
<p>Les mains se placent de part et d'autre du volant, à la position « 9 h 15 » (ou « 10 h 10 »). Évitez de tenir le volant par l'intérieur ou avec une seule main posée en haut : en cas de déclenchement de l'airbag, vos bras seraient projetés vers votre visage.</p>`
        },
        {
          titre: "L'appuie-tête et la ceinture",
          contenu: `<p>L'<strong>appuie-tête</strong> protège la nuque lors d'un choc arrière, qui projette la tête violemment en arrière (le « coup du lapin »). Il est efficace seulement s'il est bien réglé : son <strong>haut doit arriver au niveau du sommet du crâne</strong>, et il doit être le plus près possible de l'arrière de la tête. Un appuie-tête trop bas peut au contraire servir de point de bascule et aggraver la blessure.</p>
<p>La <strong>ceinture</strong> se boucle avant de démarrer, par tous les occupants, à l'avant comme à l'arrière :</p>
<ul>
<li>la sangle <strong>diagonale</strong> passe sur l'épaule et au milieu de la poitrine, sans toucher le cou ni glisser sous le bras ;</li>
<li>la sangle <strong>abdominale</strong> passe bas, sur les os du bassin, et non sur le ventre ;</li>
<li>elle doit être bien tendue, sans vrille, et sans vêtement épais (doudoune) entre elle et le corps ;</li>
<li>chez la femme enceinte, la sangle abdominale passe sous le ventre, sur le haut des cuisses.</li>
</ul>
<table>
<thead><tr><th>Réglage</th><th>Bonne position</th></tr></thead>
<tbody>
<tr><td>Siège (distance)</td><td>Jambe légèrement fléchie pédale enfoncée</td></tr>
<tr><td>Dossier</td><td>Poignets sur le haut du volant, bras tendus, dos collé au siège</td></tr>
<tr><td>Appuie-tête</td><td>Haut au niveau du sommet du crâne, proche de la tête</td></tr>
<tr><td>Ceinture</td><td>Sur la clavicule et le bassin, tendue, sans vrille</td></tr>
<tr><td>Rétroviseurs</td><td>Réglés avant le départ, en position de conduite</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « je règle mes rétroviseurs puis mon siège » est le mauvais ordre. On règle d'abord le siège, car la position de la tête détermine le réglage des rétroviseurs.</div>`
        },
        {
          titre: "Les rétroviseurs et les angles morts",
          contenu: `<p>Les rétroviseurs se règlent <strong>après le siège</strong>, en position de conduite :</p>
<ul>
<li>le <strong>rétroviseur intérieur</strong> doit encadrer toute la lunette arrière ;</li>
<li>les <strong>rétroviseurs extérieurs</strong> montrent un léger morceau du flanc de votre voiture (un repère pour juger les distances) et l'horizon vers le milieu du miroir.</li>
</ul>
<p>Même bien réglés, les rétroviseurs laissent des <strong>angles morts</strong> : des zones situées sur les côtés et légèrement en arrière de la voiture, où un véhicule, un deux-roues ou un piéton peut être invisible dans les miroirs. Avant tout déplacement latéral (démarrage, changement de voie, dépassement, sortie de stationnement), il faut donc <strong>tourner brièvement la tête</strong> pour contrôler l'angle mort du côté où l'on se déplace.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> rétroviseur intérieur, rétroviseur extérieur, puis coup d'œil dans l'angle mort : c'est la séquence de contrôle avant chaque déplacement latéral. Les systèmes de détection d'angle mort sont une aide, pas un substitut.</div>
<p>Les rétroviseurs extérieurs convexes (bombés) donnent un champ de vision plus large, mais ils <strong>font paraître les véhicules plus éloignés</strong> qu'ils ne le sont réellement. Gardez-le à l'esprit avant de vous rabattre ou de changer de voie.</p>`
        },
        {
          titre: "Les vérifications avant le départ",
          contenu: `<p>Avant un trajet, et en particulier avant un long voyage, quelques contrôles simples évitent bien des pannes et des accidents.</p>
<h4>Autour du véhicule</h4>
<ul>
<li>l'état et le gonflage apparent des <strong>pneus</strong> ;</li>
<li>la propreté des <strong>vitres, rétroviseurs et feux</strong> (boue, neige, givre) : il faut dégivrer entièrement le pare-brise et les vitres, pas seulement un petit hublot ;</li>
<li>l'absence d'obstacle ou d'enfant autour de la voiture, notamment derrière elle avant une marche arrière ;</li>
<li>l'absence de fuite sous le véhicule (taches au sol).</li>
</ul>
<h4>À l'intérieur</h4>
<ul>
<li>les réglages du poste de conduite et les ceintures de tous les passagers ;</li>
<li>les <strong>voyants</strong> au tableau de bord : à la mise du contact, ils s'allument puis doivent s'éteindre après le démarrage ;</li>
<li>le niveau de <strong>carburant</strong> ou la charge de la batterie pour un véhicule électrique ;</li>
<li>l'arrimage des objets : rien ne doit traîner sur la plage arrière ou sous les pédales.</li>
</ul>
<p>Avant un long trajet, ajoutez le contrôle des <strong>niveaux</strong> (huile, liquide de refroidissement, lave-glace), de la <strong>pression des pneus à froid</strong> (roue de secours comprise) et de l'éclairage. Vérifiez aussi la présence du gilet et du triangle, et réglez le GPS et la musique avant de partir.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un matin d'hiver, votre pare-brise est givré. Gratter un petit carré devant vous ne suffit pas : vous ne verriez ni les piétons sur les côtés ni les véhicules aux intersections. Il faut dégager toutes les vitres et les rétroviseurs avant de partir.</div>`
        },
        {
          titre: "Démarrer et s'insérer dans la circulation",
          contenu: `<p>Une fois installé et le moteur démarré, la sortie de stationnement est une manœuvre délicate : vous n'êtes pas prioritaire et vous devez <strong>céder le passage</strong> aux usagers qui circulent déjà.</p>
<ol>
<li>Vérifiez que le levier de vitesses est au point mort (boîte manuelle) ou en position P ou N (boîte automatique) avant de démarrer.</li>
<li>Contrôlez la circulation : rétroviseur intérieur, rétroviseur extérieur, <strong>angle mort</strong>.</li>
<li><strong>Mettez votre clignotant</strong> pour indiquer votre intention de partir.</li>
<li>Attendez un intervalle suffisant pour vous insérer sans obliger quiconque à freiner ou à se déporter.</li>
<li>Desserrez le frein de stationnement et démarrez franchement, en contrôlant à nouveau l'angle mort au moment de vous déporter.</li>
</ol>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> mettre son clignotant ne donne aucune priorité. Il annonce une intention ; si un véhicule arrive, vous devez le laisser passer avant de quitter votre place.</div>
<p>Moteur froid, démarrez en roulant souplement plutôt qu'en le laissant tourner longtemps sur place : le moteur chauffe plus vite en roulant et pollue moins. Sur les véhicules équipés du système stop and start, le moteur peut se couper automatiquement à l'arrêt : c'est normal, il redémarre dès que vous relâchez le frein ou appuyez sur l'embrayage.</p>
<p>Si vous êtes stationné en épi ou en bataille et devez sortir en marche arrière, la visibilité est réduite : reculez très lentement, en surveillant les deux côtés, et n'hésitez pas à vous faire guider par un passager descendu du véhicule.</p>`
        }
      ],
      points_cles: [
        "Installation avant de démarrer : siège, volant, appuie-tête, rétroviseurs, ceinture",
        "Jambe légèrement fléchie pédale enfoncée, poignets sur le haut du volant bras tendus",
        "Appuie-tête : haut au niveau du sommet du crâne, proche de la tête",
        "Ceinture sur la clavicule et le bassin, bien tendue, pour tous les occupants",
        "Rétroviseurs réglés après le siège ; contrôle de l'angle mort en tournant la tête",
        "Voyants allumés à la mise du contact, éteints après le démarrage",
        "Dégivrer et nettoyer toutes les vitres avant de partir",
        "En quittant une place : contrôles, clignotant, et céder le passage"
      ]
    },
    {
      id: "quitter-vehicule-enfants-chargement",
      theme: "A",
      titre: "Quitter son véhicule, transporter des enfants et du chargement",
      duree: 24,
      objectifs: [
        "Immobiliser correctement son véhicule, y compris en pente",
        "Ouvrir une portière sans danger grâce à l'ouverture à la hollandaise",
        "Choisir et installer le bon dispositif de retenue pour un enfant",
        "Connaître les règles de l'airbag passager avec un siège dos à la route",
        "Charger et arrimer correctement bagages et objets"
      ],
      sections: [
        {
          titre: "Immobiliser le véhicule",
          contenu: `<p>Pour quitter son véhicule, il faut d'abord s'assurer qu'il ne pourra pas se déplacer seul. La procédure habituelle est la suivante :</p>
<ol>
<li>arrêter le véhicule à un emplacement autorisé, dans le sens de la circulation ;</li>
<li><strong>serrer le frein de stationnement</strong> (frein à main ou frein électrique) ;</li>
<li>sur une boîte manuelle, engager une vitesse ; sur une boîte automatique, placer le levier sur <strong>P</strong> ;</li>
<li><strong>couper le moteur</strong> et retirer la clé (ou s'assurer que le contact est coupé sur un véhicule à démarrage sans clé) ;</li>
<li>éteindre les feux, sauf si le véhicule doit être signalé la nuit hors d'un lieu éclairé.</li>
</ol>
<h4>En pente</h4>
<p>En pente, on engage de préférence la <strong>première</strong> en montée et la <strong>marche arrière</strong> en descente. On peut aussi <strong>braquer les roues</strong> de façon que, si la voiture se mettait à rouler, elle soit arrêtée par le trottoir : roues tournées vers le trottoir en descente.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> ne laissez jamais un enfant ou un animal seul dans une voiture, même quelques minutes. Par temps chaud, la température de l'habitacle monte très vite et peut être mortelle ; un enfant peut aussi desserrer le frein ou manipuler les commandes.</div>
<p>Il est interdit de laisser un véhicule le moteur en marche en votre absence. Verrouillez les portières et ne laissez aucun objet de valeur en vue : un véhicule ouvert facilite le vol et un véhicule volé peut provoquer un accident.</p>`
        },
        {
          titre: "Ouvrir la portière : l'ouverture à la hollandaise",
          contenu: `<p>Ouvrir une portière sans regarder est l'une des causes classiques d'accidents avec les cyclistes et les deux-roues motorisés, qui circulent souvent près des voitures en stationnement. Le Code de la route interdit d'ouvrir une portière lorsque cela constitue un danger pour soi ou pour les autres usagers. Cette règle s'applique au conducteur comme aux passagers.</p>
<p>La méthode recommandée est l'<strong>ouverture à la hollandaise</strong> : le conducteur ouvre sa portière avec la <strong>main droite</strong> (la main la plus éloignée de la portière). Ce geste oblige le buste à pivoter, et le regard se porte naturellement vers l'arrière, dans le rétroviseur puis dans l'angle mort.</p>
<ul>
<li>Regardez dans le rétroviseur extérieur puis tournez la tête.</li>
<li>Ouvrez d'abord la portière de quelques centimètres, puis entièrement seulement si personne n'arrive.</li>
<li>Descendez rapidement et refermez aussitôt.</li>
<li>Faites descendre les passagers, et surtout les enfants, <strong>côté trottoir</strong>.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> ouverture à la hollandaise = main opposée à la portière. Elle force à regarder derrière soi avant d'ouvrir. De nombreuses voitures récentes sont équipées de sécurités enfants sur les portières arrière : activez-les si vous transportez de jeunes enfants.</div>`
        },
        {
          titre: "Transporter des enfants : les dispositifs de retenue",
          contenu: `<p>Les enfants de <strong>moins de 10 ans</strong> doivent être installés dans un <strong>système de retenue homologué</strong> adapté à leur morphologie (siège auto, coque, rehausseur), sauf exceptions rares (par exemple certaines contre-indications médicales). La ceinture d'un adulte n'est pas adaptée à un enfant : elle passe sur le cou et le ventre et peut provoquer des blessures graves.</p>
<p>Deux normes d'homologation coexistent : l'ancienne norme <strong>R44</strong>, qui classe les sièges par poids de l'enfant, et la norme <strong>R129</strong> (dite i-Size), qui les classe par taille et renforce les exigences, notamment pour les chocs latéraux.</p>
<table>
<thead><tr><th>Âge indicatif</th><th>Dispositif</th><th>Installation</th></tr></thead>
<tbody>
<tr><td>De la naissance à environ 15 mois au moins</td><td>Coque ou siège dos à la route</td><td>Dos à la route obligatoire avec la norme R129 jusqu'à 15 mois au moins</td></tr>
<tr><td>Jusqu'à 4 ans environ</td><td>Siège à harnais ou bouclier, dos ou face à la route</td><td>Dos à la route le plus longtemps possible</td></tr>
<tr><td>De 4 ans environ à 10 ans</td><td>Rehausseur avec dossier, puis rehausseur</td><td>La ceinture du véhicule est alors bien positionnée sur l'enfant</td></tr>
</tbody>
</table>
<p>Le siège doit être fixé selon la notice : par la ceinture du véhicule ou par le système <strong>Isofix</strong> (points d'ancrage rigides), qui réduit les erreurs de montage. Le harnais doit être bien serré : on ne doit pas pouvoir glisser plus d'un ou deux doigts entre lui et l'épaule de l'enfant.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un enfant de 6 ans voyage sur un rehausseur à l'arrière. La sangle diagonale de la ceinture passe sur son épaule et sa clavicule, et non sur son cou ; la sangle abdominale passe sur ses cuisses, sous les guides du rehausseur.</div>`
        },
        {
          titre: "Les enfants à l'avant et l'airbag passager",
          contenu: `<p>En principe, un enfant de moins de 10 ans ne peut pas voyager à l'avant. Il existe toutefois des exceptions, notamment :</p>
<ul>
<li>un bébé installé dans un siège <strong>dos à la route</strong> ;</li>
<li>un véhicule sans siège arrière, ou dont les sièges arrière sont inutilisables ou déjà occupés par des enfants de moins de 10 ans ;</li>
<li>un véhicule dont les places arrière ne sont pas équipées de ceintures de sécurité.</li>
</ul>
<p>Lorsqu'un siège <strong>dos à la route</strong> est installé à l'avant, l'<strong>airbag frontal passager doit obligatoirement être désactivé</strong>. En se déployant, l'airbag frapperait violemment le dossier du siège, juste derrière la tête du bébé, avec des conséquences souvent mortelles. Un voyant ou un message au tableau de bord confirme la désactivation.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> désactiver l'airbag est obligatoire pour un siège dos à la route à l'avant. Pour un enfant plus grand voyageant à l'avant face à la route (lorsque c'est permis), on recule le siège au maximum et on laisse l'airbag actif, conformément à la notice du véhicule.</div>
<p>Le conducteur est responsable de l'installation des passagers de <strong>moins de 18 ans</strong> : s'ils ne sont pas attachés ou pas installés dans un dispositif adapté, c'est lui qui est sanctionné. Pensez à réactiver l'airbag lorsqu'un adulte reprend la place passager.</p>`
        },
        {
          titre: "Charger et arrimer",
          contenu: `<p>En cas de choc ou de freinage brutal, tout objet libre dans l'habitacle continue sa course à la vitesse du véhicule : il devient un <strong>projectile</strong> dont la force d'impact équivaut à plusieurs dizaines de fois son poids. Une bouteille sur la plage arrière ou un sac sur la banquette peut blesser gravement un occupant.</p>
<ul>
<li>Placez les bagages lourds dans le <strong>coffre</strong>, au plus bas et contre le dossier des sièges arrière.</li>
<li>Ne laissez rien sur la plage arrière ni sur le tableau de bord.</li>
<li>Un objet qui roule sous les pédales peut empêcher de freiner : rien ne doit traîner au sol du côté conducteur.</li>
<li>Utilisez des sangles, un filet ou une grille de séparation pour un chargement volumineux. Un animal se transporte dans une caisse fixée ou attaché par un harnais adapté.</li>
<li>Utilisez les ceintures des places arrière inoccupées pour retenir le dossier ou des bagages.</li>
</ul>
<p>Le chargement modifie le comportement du véhicule : la distance de freinage s'allonge, la voiture est moins stable en virage et l'avant peut se soulever, ce qui dérègle les phares. Respectez le <strong>poids total autorisé en charge</strong> (PTAC) indiqué sur le certificat d'immatriculation, ajustez la pression des pneus pour la charge (voir la notice), et abaissez les phares avec le correcteur de portée si nécessaire.</p>
<p>Un chargement sur le toit (galerie, coffre de toit) ne doit pas masquer les feux ni la plaque, doit être solidement arrimé et augmente la prise au vent et la consommation. Un chargement qui dépasse à l'arrière de plus d'un mètre doit être signalé.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> rien de libre dans l'habitacle. Le lourd en bas dans le coffre, le chargement arrimé, le PTAC respecté et les phares réglés en fonction de la charge.</div>`
        }
      ],
      points_cles: [
        "Quitter le véhicule : frein de stationnement, vitesse engagée ou position P, moteur coupé, clé retirée",
        "En pente : première en montée, marche arrière en descente, roues braquées vers le trottoir",
        "Ouverture à la hollandaise : main opposée à la portière, regard vers l'arrière",
        "Passagers et enfants descendent côté trottoir",
        "Moins de 10 ans : système de retenue homologué adapté",
        "Siège dos à la route à l'avant : airbag passager obligatoirement désactivé",
        "Le conducteur répond des passagers mineurs non attachés",
        "Objets arrimés, lourd en bas dans le coffre, rien sur la plage arrière ni sous les pédales",
        "Respecter le PTAC et adapter pression des pneus et réglage des phares à la charge"
      ]
    }
  );

  /* ───────────── Thème A — questions A-001 à A-032 ───────────── */
  P.questions.push(
    { id: "A-001", chapitre: "installation-depart", situation: "Vous montez dans une voiture que conduisait une autre personne avant vous.",
      q: "Je règle en premier :", options: ["Les rétroviseurs", "Le siège", "La radio"], bonnes: [1],
      explication: "On règle d'abord le siège : la position de la tête qui en résulte détermine ensuite le réglage des rétroviseurs." },
    { id: "A-002", chapitre: "installation-depart", situation: "Assis au poste de conduite, vous enfoncez complètement la pédale d'embrayage.",
      q: "Ma jambe gauche doit être :", options: ["Complètement tendue", "Légèrement fléchie", "Repliée à angle droit"], bonnes: [1],
      explication: "Pédale enfoncée, la jambe doit rester légèrement fléchie : on garde ainsi de la force et de la réserve pour freiner fort." },
    { id: "A-003", chapitre: "installation-depart", situation: "Vous réglez le dossier de votre siège, le dos bien appuyé.",
      q: "Bras tendus, mes poignets doivent se poser :", options: ["Sur le haut du volant", "Au centre du volant", "Sur le bas du volant"], bonnes: [0],
      explication: "Poignets posés sur le haut du volant bras tendus, épaules contre le dossier : en conduisant, les bras sont alors légèrement fléchis." },
    { id: "A-004", chapitre: "installation-depart", situation: "Vous réglez l'appuie-tête de votre siège.",
      q: "Le haut de l'appuie-tête doit être au niveau :", options: ["De la nuque", "Du sommet du crâne", "Des épaules"], bonnes: [1],
      explication: "Le haut de l'appuie-tête doit arriver au niveau du sommet du crâne, au plus près de la tête, pour retenir celle-ci en cas de choc arrière." },
    { id: "A-005", chapitre: "installation-depart", situation: "Vous roulez sur une route droite et vous trouvez votre siège un peu trop reculé.",
      q: "Je peux le régler en roulant :", options: ["Oui, la route est droite", "Non, je le règle à l'arrêt"], bonnes: [1],
      explication: "Le siège peut glisser brusquement pendant le réglage et vous éloigner des pédales. Tous les réglages du poste de conduite se font à l'arrêt." },
    { id: "A-006", chapitre: "installation-depart", situation: "Votre passager boucle sa ceinture.",
      q: "La sangle diagonale doit passer :", options: ["Sur le cou", "Sur l'épaule et la clavicule", "Sous le bras"], bonnes: [1],
      explication: "La sangle diagonale passe sur l'épaule et au milieu de la poitrine, sans toucher le cou. Sous le bras, elle ne retient plus le haut du corps." },
    { id: "A-007", chapitre: "installation-depart", situation: "Une passagère enceinte s'installe à l'avant.",
      q: "Elle doit porter la ceinture :", options: ["Oui, sangle abdominale sous le ventre", "Non, elle en est dispensée", "Oui, sangle abdominale au-dessus du ventre"], bonnes: [0],
      explication: "La femme enceinte doit porter la ceinture. La sangle abdominale passe sous le ventre, sur le haut des cuisses, pour ne pas comprimer l'utérus en cas de choc." },
    { id: "A-008", chapitre: "installation-depart", situation: "Vous venez de régler votre rétroviseur intérieur.",
      q: "Il est bien réglé s'il encadre :", options: ["Toute la lunette arrière", "Mes passagers arrière", "La moitié droite de la lunette"], bonnes: [0],
      explication: "Le rétroviseur intérieur doit encadrer toute la lunette arrière pour voir l'ensemble de la circulation derrière vous." },
    { id: "A-009", chapitre: "installation-depart", situation: "Vous allez changer de voie sur une route à deux voies dans le même sens. Le rétroviseur extérieur gauche ne montre aucun véhicule.",
      q: "Avant de me déporter :", options: ["Je peux y aller sans autre contrôle", "Je tourne brièvement la tête pour contrôler l'angle mort", "Je mets mon clignotant"], bonnes: [1, 2],
      explication: "Les rétroviseurs laissent des angles morts : un coup d'œil sur le côté est indispensable avant un déplacement latéral, que l'on annonce par le clignotant." },
    { id: "A-010", chapitre: "installation-depart", situation: "Votre rétroviseur extérieur est bombé (convexe).",
      q: "Les véhicules qu'il montre paraissent :", options: ["Plus proches qu'en réalité", "Plus éloignés qu'en réalité", "À leur distance réelle"], bonnes: [1],
      explication: "Un miroir convexe élargit le champ de vision mais fait paraître les véhicules plus éloignés qu'ils ne le sont. Il faut en tenir compte avant de se rabattre." },
    { id: "A-011", chapitre: "installation-depart", situation: "Ce matin d'hiver, votre pare-brise et vos vitres latérales sont recouverts de givre. Vous êtes pressé.",
      q: "Je peux partir après avoir dégagé :", options: ["Un carré devant moi sur le pare-brise", "Le pare-brise, les vitres et les rétroviseurs"], bonnes: [1],
      explication: "Il faut une visibilité complète : pare-brise, vitres latérales et rétroviseurs doivent être dégagés pour voir les piétons et les véhicules sur les côtés." },
    { id: "A-012", chapitre: "installation-depart", situation: "Vous mettez le contact. Plusieurs voyants s'allument au tableau de bord.",
      q: "C'est normal :", options: ["Oui, ils doivent s'éteindre après le démarrage", "Non, je dois appeler un garagiste"], bonnes: [0],
      explication: "À la mise du contact, les voyants s'allument pour vérifier leur fonctionnement. Ils doivent s'éteindre une fois le moteur démarré ; un voyant qui reste allumé signale une anomalie." },
    { id: "A-013", chapitre: "installation-depart", situation: "Vous préparez un long trajet pour les vacances.",
      q: "Avant de partir, je vérifie :", options: ["La pression des pneus, à froid", "Les niveaux (huile, refroidissement, lave-glace)", "Le bon fonctionnement des feux", "Le kilométrage total du véhicule"], bonnes: [0, 1, 2],
      explication: "Pression à froid, niveaux et éclairage font partie des vérifications avant un long trajet. Le kilométrage total n'a pas d'intérêt pour la sécurité du départ." },
    { id: "A-014", chapitre: "installation-depart", situation: "Vous êtes garé le long du trottoir et voulez repartir. Un cycliste arrive derrière vous.",
      q: "Je peux partir dès que j'ai mis mon clignotant :", options: ["Oui", "Non, je laisse passer le cycliste"], bonnes: [1],
      explication: "En quittant un stationnement, vous devez céder le passage aux usagers qui circulent. Le clignotant annonce une intention mais ne donne aucune priorité." },
    { id: "A-015", chapitre: "installation-depart", situation: "Au moment de démarrer le moteur d'une voiture à boîte manuelle.",
      q: "Le levier de vitesses doit être :", options: ["Au point mort", "En première", "En marche arrière"], bonnes: [0],
      explication: "On démarre au point mort (ou en position P ou N sur une boîte automatique), pour que la voiture ne bondisse pas au démarrage." },
    { id: "A-016", chapitre: "installation-depart", situation: "Il fait froid et votre moteur est froid.",
      q: "Pour qu'il chauffe, il vaut mieux :", options: ["Le laisser tourner plusieurs minutes à l'arrêt", "Partir rapidement en roulant souplement"], bonnes: [1],
      explication: "Un moteur chauffe plus vite en roulant souplement qu'au ralenti, et pollue moins. Le faire tourner longtemps à l'arrêt consomme pour rien." },
    { id: "A-017", chapitre: "quitter-vehicule-enfants-chargement", situation: "Vous vous garez dans une rue en forte descente, avec une boîte manuelle.",
      q: "Pour bien immobiliser la voiture, je :", options: ["Serre le frein de stationnement", "Engage la marche arrière", "Braque les roues vers le trottoir", "Laisse le levier au point mort"], bonnes: [0, 1, 2],
      explication: "En descente : frein de stationnement serré, marche arrière engagée et roues braquées vers le trottoir. Au point mort, seul le frein retiendrait la voiture." },
    { id: "A-018", chapitre: "quitter-vehicule-enfants-chargement", situation: "Vous vous garez en montée, avec une boîte manuelle.",
      q: "J'engage de préférence :", options: ["La première", "La marche arrière", "Le point mort"], bonnes: [0],
      explication: "En montée, la première vitesse retient le véhicule en complément du frein de stationnement ; en descente, on engage la marche arrière." },
    { id: "A-019", chapitre: "quitter-vehicule-enfants-chargement", situation: "Votre voiture a une boîte automatique. Vous vous garez pour la nuit.",
      q: "Je place le levier sur :", options: ["N", "D", "P"], bonnes: [2],
      explication: "La position P (parking) bloque la transmission. On serre aussi le frein de stationnement. N correspond au point mort et D à la marche avant." },
    { id: "A-020", chapitre: "quitter-vehicule-enfants-chargement", situation: "Garé le long d'un trottoir à droite, vous allez descendre côté rue.",
      q: "Pour ouvrir ma portière, j'utilise :", options: ["Ma main gauche", "Ma main droite"], bonnes: [1],
      explication: "L'ouverture à la hollandaise se fait avec la main opposée à la portière : le conducteur pivote et voit naturellement les usagers qui arrivent par l'arrière." },
    { id: "A-021", chapitre: "quitter-vehicule-enfants-chargement", situation: "Vous êtes garé en ville. Un cycliste arrive derrière votre voiture.",
      q: "J'ouvre ma portière :", options: ["Immédiatement, c'est au cycliste de faire attention", "Après son passage"], bonnes: [1],
      explication: "Ouvrir une portière est interdit lorsque cela crée un danger pour les autres usagers. On attend le passage du cycliste avant d'ouvrir." },
    { id: "A-022", chapitre: "quitter-vehicule-enfants-chargement", situation: "Vous transportez deux jeunes enfants à l'arrière. Vous vous garez le long d'un trottoir.",
      q: "Je les fais descendre :", options: ["Côté trottoir", "Côté chaussée", "Du côté le plus rapide"], bonnes: [0],
      explication: "Les passagers, et surtout les enfants, descendent côté trottoir, à l'abri de la circulation. Les sécurités enfants des portières arrière évitent les ouvertures intempestives." },
    { id: "A-023", chapitre: "quitter-vehicule-enfants-chargement", situation: "Par une chaude journée, vous devez faire une course de cinq minutes. Votre enfant de 3 ans dort dans son siège.",
      q: "Je peux le laisser seul dans la voiture, vitres entrouvertes :", options: ["Oui", "Non"], bonnes: [1],
      explication: "La température d'un habitacle au soleil monte très vite et peut être mortelle pour un enfant. On ne laisse jamais un enfant seul dans un véhicule." },
    { id: "A-024", chapitre: "quitter-vehicule-enfants-chargement", situation: "Vous transportez votre neveu de 7 ans.",
      q: "Il doit être installé :", options: ["Sur un rehausseur, attaché avec la ceinture", "Simplement attaché avec la ceinture du véhicule", "Sur les genoux d'un adulte attaché"], bonnes: [0],
      explication: "Jusqu'à 10 ans, un enfant doit voyager dans un système de retenue homologué adapté. À 7 ans, c'est généralement un rehausseur qui positionne correctement la ceinture." },
    { id: "A-025", chapitre: "quitter-vehicule-enfants-chargement", situation: "Vous installez le siège de votre bébé, dos à la route, sur le siège passager avant.",
      q: "L'airbag frontal passager doit être :", options: ["Activé", "Désactivé"], bonnes: [1],
      explication: "Avec un siège dos à la route à l'avant, l'airbag frontal passager doit être désactivé : en se déployant, il frapperait le siège juste derrière la tête du bébé." },
    { id: "A-026", chapitre: "quitter-vehicule-enfants-chargement", situation: "Un enfant de 8 ans voyage dans votre voiture. Les places arrière sont libres et équipées de ceintures.",
      q: "Il peut voyager à l'avant :", options: ["Oui, sur un rehausseur", "Non, il doit voyager à l'arrière"], bonnes: [1],
      explication: "Avant 10 ans, un enfant voyage à l'arrière, sauf exceptions : siège dos à la route, places arrière absentes, inutilisables, sans ceintures ou déjà occupées par des enfants de moins de 10 ans." },
    { id: "A-027", chapitre: "quitter-vehicule-enfants-chargement", situation: "Lors d'un contrôle, votre passager de 15 ans n'a pas bouclé sa ceinture.",
      q: "La sanction concerne :", options: ["Le passager", "Le conducteur"], bonnes: [1],
      explication: "Le conducteur est responsable du port de la ceinture et des dispositifs de retenue des passagers mineurs. Un passager majeur est sanctionné personnellement." },
    { id: "A-028", chapitre: "quitter-vehicule-enfants-chargement", situation: "Vous installez un siège enfant muni du système Isofix.",
      q: "Le système Isofix :", options: ["Fixe le siège sur des points d'ancrage rigides du véhicule", "Réduit les erreurs de montage", "Dispense d'attacher l'enfant"], bonnes: [0, 1],
      explication: "L'Isofix relie le siège à des points d'ancrage rigides et limite les erreurs de montage. L'enfant doit toujours être attaché par le harnais ou la ceinture." },
    { id: "A-029", chapitre: "quitter-vehicule-enfants-chargement", situation: "Avant de partir en vacances, vous avez posé un sac et une bouteille d'eau sur la plage arrière.",
      q: "En cas de choc, ces objets :", options: ["Restent en place", "Peuvent être projetés et blesser les occupants"], bonnes: [1],
      explication: "Lors d'un choc, un objet libre est projeté avec une force équivalant à plusieurs dizaines de fois son poids. Rien ne doit rester sur la plage arrière." },
    { id: "A-030", chapitre: "quitter-vehicule-enfants-chargement", situation: "Vous chargez le coffre pour un long trajet avec des valises lourdes et des sacs légers.",
      q: "Je place les valises lourdes :", options: ["En bas, contre le dossier des sièges arrière", "Au-dessus des sacs légers", "Sur la banquette arrière"], bonnes: [0],
      explication: "Le lourd se place au plus bas et contre le dossier des sièges arrière : le centre de gravité reste bas et les bagages ne peuvent pas être projetés vers les occupants." },
    { id: "A-031", chapitre: "quitter-vehicule-enfants-chargement", situation: "Votre voiture est lourdement chargée à l'arrière pour les vacances.",
      q: "Je pense à :", options: ["Adapter la pression des pneus à la charge", "Abaisser les phares avec le correcteur de portée", "Allonger mes distances de freinage prévues"], bonnes: [0, 1, 2],
      explication: "La charge allonge les distances de freinage, relève l'avant (les phares éblouissent) et demande une pression de pneus adaptée, indiquée dans la notice." },
    { id: "A-032", chapitre: "quitter-vehicule-enfants-chargement", situation: "Une bouteille d'eau a glissé sous les pédales pendant que vous rouliez.",
      q: "Ce danger peut :", options: ["M'empêcher de freiner", "Être sans conséquence"], bonnes: [0],
      explication: "Un objet coincé sous la pédale de frein peut empêcher de freiner. On s'arrête en sécurité pour le retirer, et l'on veille à ce que rien ne traîne au sol côté conducteur." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème M — Éléments mécaniques liés à la sécurité ───────────── */
  P.chapitres.push(
    {
      id: "pneus-freinage",
      theme: "M",
      titre: "Pneumatiques et freinage",
      duree: 24,
      objectifs: [
        "Contrôler l'usure des pneus et connaître la profondeur minimale légale",
        "Vérifier et adapter la pression des pneus",
        "Connaître les équipements d'hiver et l'obligation de la loi Montagne",
        "Comprendre le rôle de l'ABS et la bonne façon de freiner en urgence",
        "Surveiller le liquide de frein et utiliser le frein de stationnement"
      ],
      sections: [
        {
          titre: "Le pneu, seul contact avec la route",
          contenu: `<p>Une voiture ne touche la route que par quatre surfaces grandes chacune comme une carte postale. Tout passe par elles : l'accélération, le freinage et la direction. Un pneu usé ou mal gonflé dégrade directement la tenue de route et la distance de freinage.</p>
<p>Les <strong>sculptures</strong> (les rainures de la bande de roulement) ont pour rôle d'évacuer l'eau. Lorsqu'elles sont trop usées, une pellicule d'eau s'intercale entre le pneu et la route : c'est l'<strong>aquaplanage</strong>. La voiture glisse sur l'eau, la direction devient légère et les freins sont inefficaces.</p>
<h4>La profondeur minimale</h4>
<p>La profondeur des sculptures doit être d'au moins <strong>1,6 mm</strong> sur toute la bande de roulement. Des <strong>témoins d'usure</strong>, petits bossages placés au fond des rainures, permettent de le vérifier : lorsque la bande de roulement arrive à leur niveau, le pneu doit être remplacé. Un pneu usé en dessous de cette limite, présentant une hernie (bosse sur le flanc), une coupure profonde ou une déchirure, est dangereux et non conforme.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 1,6 mm est un minimum légal, pas une valeur de sécurité confortable. Sur route mouillée, les performances d'un pneu se dégradent bien avant cette limite : beaucoup de professionnels conseillent de le changer vers 3 mm.</div>
<p>Les pneus d'un même essieu doivent être identiques (même dimension, même structure, même catégorie d'usage). Une <strong>usure anormale</strong> renseigne sur un problème : usure sur les deux bords, sous-gonflage ; usure au centre, surgonflage ; usure d'un seul côté, défaut de parallélisme ou de géométrie.</p>`
        },
        {
          titre: "La pression des pneus",
          contenu: `<p>La pression recommandée par le constructeur figure sur une étiquette (souvent dans la feuillure de la portière conducteur ou sur la trappe à carburant) et dans la notice. Elle varie selon la charge et parfois selon la vitesse.</p>
<ul>
<li>Vérifiez la pression <strong>au moins une fois par mois</strong> et avant chaque long trajet.</li>
<li>Faites-le <strong>à froid</strong> (après moins de quelques kilomètres) : un pneu chaud affiche une pression plus élevée, et dégonfler un pneu chaud le laisserait sous-gonflé une fois refroidi.</li>
<li>N'oubliez pas la roue de secours, si le véhicule en possède une.</li>
</ul>
<table>
<thead><tr><th>Défaut</th><th>Conséquences</th></tr></thead>
<tbody>
<tr><td>Sous-gonflage</td><td>Échauffement et risque d'éclatement, tenue de route dégradée, distance de freinage allongée, usure des bords, surconsommation de carburant</td></tr>
<tr><td>Surgonflage</td><td>Surface de contact réduite, moins d'adhérence, usure du centre, confort dégradé</td></tr>
</tbody>
</table>
<p>Les voitures récentes sont équipées d'un <strong>système de surveillance de la pression</strong> qui allume un voyant orange en cas de perte de pression. Il ne dispense pas des contrôles réguliers.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous partez en vacances avec quatre personnes et un coffre plein. La notice indique une pression « pleine charge » plus élevée que la pression habituelle : gonflez vos pneus à cette valeur, à froid, avant de partir.</div>`
        },
        {
          titre: "L'hiver et la loi Montagne",
          contenu: `<p>En dessous d'environ 7 °C, la gomme d'un pneu été durcit et perd de son adhérence. Les <strong>pneus hiver</strong> (ou « quatre saisons » certifiés hiver) utilisent une gomme plus tendre et des sculptures plus profondes et lamellées, efficaces sur route froide, mouillée, enneigée ou verglacée.</p>
<p>Depuis l'entrée en vigueur de la <strong>loi Montagne</strong>, dans les communes de massifs montagneux désignées par arrêté préfectoral, les véhicules doivent, du <strong>1er novembre au 31 mars</strong> :</p>
<ul>
<li>soit être équipés de <strong>quatre pneus hiver</strong> portant le marquage <strong>3PMSF</strong> (symbole d'une montagne à trois pics avec un flocon) ;</li>
<li>soit détenir dans le coffre des <strong>chaînes</strong> ou des <strong>chaussettes à neige</strong> permettant d'équiper au moins deux roues motrices.</li>
</ul>
<p>Ces zones sont signalées par des panneaux à leur entrée et à leur sortie. Sur une route enneigée, un panneau peut en outre rendre obligatoire le montage effectif des équipements spéciaux.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le simple marquage M+S (boue et neige) ne suffit plus pour satisfaire à l'obligation de la loi Montagne ; seul le marquage 3PMSF est reconnu. Et posséder des chaînes dans le coffre est une alternative valable aux pneus hiver.</div>
<p>Les chaînes se montent sur les roues <strong>motrices</strong>. Entraînez-vous à les installer chez vous, au sec, avant d'en avoir besoin dans le froid et la neige. Avec des chaînes, roulez lentement et retirez-les dès que la route est dégagée.</p>`
        },
        {
          titre: "Le système de freinage et l'ABS",
          contenu: `<p>Lorsque vous appuyez sur la pédale de frein, un <strong>liquide de frein</strong> transmet la pression aux freins des roues (disques ou tambours), où des plaquettes viennent frotter. Ce circuit doit être parfaitement étanche et le liquide en bon état.</p>
<ul>
<li>Le niveau du liquide de frein se contrôle dans un réservoir transparent, entre les repères <strong>MINI</strong> et <strong>MAXI</strong>. Une baisse progressive traduit l'usure des plaquettes ; une baisse rapide, une fuite.</li>
<li>Le liquide de frein absorbe l'humidité et perd de son efficacité avec le temps : il se remplace selon les préconisations du constructeur, souvent tous les deux ans environ.</li>
<li>Une <strong>pédale molle</strong> qui s'enfonce trop, un bruit de frottement métallique ou une voiture qui tire d'un côté au freinage doivent vous conduire au garage sans tarder.</li>
</ul>
<h4>L'ABS</h4>
<p>L'<strong>ABS</strong> (système antiblocage des roues) empêche les roues de se bloquer lors d'un freinage puissant. Son principal intérêt : vous <strong>conservez la possibilité de diriger le véhicule</strong> pendant le freinage, pour contourner un obstacle. Il ne réduit pas forcément la distance de freinage, notamment sur neige ou gravillons.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> avec l'ABS, en cas d'urgence, on freine fort et on maintient la pression sur la pédale, sans pomper. Des vibrations et un bruit dans la pédale sont normaux : c'est l'ABS qui travaille. L'aide au freinage d'urgence complète l'ABS en amplifiant automatiquement un freinage brusque.</div>
<p>En longue descente, freiner en continu fait chauffer les freins jusqu'à les rendre inefficaces. Utilisez le <strong>frein moteur</strong> en engageant un rapport inférieur, et freinez par appuis francs et brefs.</p>`
        },
        {
          titre: "Le frein de stationnement",
          contenu: `<p>Le <strong>frein de stationnement</strong> (frein à main ou frein électrique commandé par un bouton) maintient le véhicule immobile à l'arrêt. Il agit généralement sur les roues arrière. Il doit être serré à chaque stationnement et à l'arrêt en pente.</p>
<p>Sur les véhicules équipés d'un frein de stationnement électrique, celui-ci se serre souvent automatiquement à la coupure du moteur et se desserre au démarrage. Un voyant rouge indique qu'il est serré : rouler avec le frein serré use les freins et peut les faire chauffer.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> en cas de défaillance totale du frein principal, le frein de stationnement peut servir de frein de secours, mais il faut l'actionner progressivement : serré brutalement à vitesse élevée, il bloque les roues arrière et provoque un tête-à-queue. Rétrogradez pour utiliser le frein moteur.</div>
<table>
<thead><tr><th>Élément</th><th>Contrôle</th><th>Signe d'alerte</th></tr></thead>
<tbody>
<tr><td>Pneus</td><td>Profondeur et pression une fois par mois, à froid</td><td>Témoins d'usure atteints, hernie, usure irrégulière</td></tr>
<tr><td>Liquide de frein</td><td>Niveau entre MINI et MAXI</td><td>Voyant rouge, baisse rapide, pédale molle</td></tr>
<tr><td>Plaquettes et disques</td><td>Au garage, lors de l'entretien</td><td>Bruit métallique, vibrations, voyant d'usure</td></tr>
<tr><td>Frein de stationnement</td><td>Efficacité en pente</td><td>Véhicule qui bouge, voyant allumé en roulant</td></tr>
</tbody>
</table>`
        }
      ],
      points_cles: [
        "Profondeur minimale des sculptures : 1,6 mm, vérifiable grâce aux témoins d'usure",
        "Pression contrôlée à froid, au moins une fois par mois et avant un long trajet",
        "Sous-gonflage : échauffement, éclatement, freinage allongé, surconsommation",
        "Loi Montagne : du 1er novembre au 31 mars, pneus hiver 3PMSF ou chaînes et chaussettes dans le coffre",
        "Pneus identiques sur un même essieu",
        "ABS : pas de blocage des roues, possibilité de diriger ; freiner fort sans pomper",
        "Liquide de frein entre MINI et MAXI, remplacé périodiquement",
        "En descente, frein moteur pour éviter l'échauffement des freins"
      ]
    },
    {
      id: "eclairage-signalisation-vehicule",
      theme: "M",
      titre: "L'éclairage et la signalisation du véhicule",
      duree: 20,
      objectifs: [
        "Connaître le rôle de chaque feu : position, croisement, route, brouillard, détresse",
        "Savoir quand utiliser les feux de croisement et les feux de route",
        "Utiliser les feux de brouillard avant et arrière à bon escient",
        "Utiliser les feux de détresse et les clignotants correctement",
        "Entretenir et régler son éclairage"
      ],
      sections: [
        {
          titre: "Voir et être vu",
          contenu: `<p>L'éclairage a deux fonctions : <strong>voir</strong> la route et ses dangers, et <strong>être vu</strong> par les autres usagers. La nuit ou par mauvaise visibilité, une bonne utilisation des feux est indispensable. Le jour, les <strong>feux de circulation diurne</strong> (qui s'allument automatiquement sur les voitures récentes) améliorent la détection du véhicule, mais ils n'éclairent pas la route et n'allument pas toujours les feux arrière.</p>
<table>
<thead><tr><th>Feux</th><th>Voyant</th><th>Rôle et portée</th></tr></thead>
<tbody>
<tr><td>Position (veilleuses)</td><td>Vert</td><td>Être vu, à l'arrêt ou en stationnement la nuit ; n'éclairent pas la route</td></tr>
<tr><td>Croisement (codes)</td><td>Vert</td><td>Éclairer environ 30 m sans éblouir</td></tr>
<tr><td>Route (phares)</td><td>Bleu</td><td>Éclairer environ 100 m, hors agglomération, sans personne en face ni devant</td></tr>
<tr><td>Brouillard avant</td><td>Vert</td><td>Éclairer le bas-côté et la chaussée proche par brouillard, neige ou forte pluie</td></tr>
<tr><td>Brouillard arrière</td><td>Orange</td><td>Être vu de l'arrière, par brouillard ou chute de neige seulement</td></tr>
<tr><td>Détresse</td><td>Vert (les deux flèches clignotent)</td><td>Signaler un danger ou un véhicule immobilisé</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un seul voyant bleu au tableau de bord : celui des feux de route. Le voyant des feux de brouillard arrière est orange ; ceux des feux de position, de croisement et de brouillard avant sont verts.</div>`
        },
        {
          titre: "Feux de croisement et feux de route",
          contenu: `<p>Les <strong>feux de croisement</strong> éclairent la route sur une trentaine de mètres environ, avec un faisceau abaissé qui n'éblouit pas les autres usagers. On les utilise :</p>
<ul>
<li>la nuit en agglomération ;</li>
<li>la nuit hors agglomération, dès qu'on croise ou suit un autre usager ;</li>
<li>le jour, par mauvaise visibilité (pluie, chute de neige, brouillard) et dans les tunnels.</li>
</ul>
<p>Les <strong>feux de route</strong> éclairent beaucoup plus loin, environ <strong>100 mètres</strong>. Ils s'utilisent la nuit hors agglomération, lorsque la route n'est pas éclairée et qu'aucun usager n'arrive en face ni ne circule devant vous à courte distance. Il faut les remplacer par les feux de croisement :</p>
<ul>
<li>dès qu'un véhicule arrive en face, suffisamment tôt pour ne pas l'éblouir ;</li>
<li>lorsque vous suivez un véhicule de près ;</li>
<li>à l'approche d'un piéton ou d'un cycliste.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> la nuit, hors agglomération, vous roulez en feux de route. Un véhicule apparaît en face au loin : vous passez en feux de croisement. S'il vous éblouit, regardez vers le bord droit de la chaussée et ralentissez, plutôt que de lui répondre par des appels de phares.</div>
<p>Par temps de brouillard, les feux de route sont inefficaces : la lumière se réfléchit sur les gouttelettes et forme un mur blanc. Utilisez alors les feux de croisement et, si besoin, les feux de brouillard.</p>`
        },
        {
          titre: "Les feux de brouillard",
          contenu: `<p>Les <strong>feux de brouillard avant</strong> ont un faisceau large et bas qui éclaire les bords de la chaussée sous le brouillard. Ils peuvent être utilisés par <strong>brouillard, chute de neige ou forte pluie</strong>, en complément ou à la place des feux de croisement.</p>
<p>Le <strong>feu de brouillard arrière</strong> est un feu rouge très puissant, destiné à rendre le véhicule visible de loin dans un brouillard épais. Il ne doit être allumé <strong>que par brouillard ou chute de neige</strong>, jamais par simple pluie : par temps de pluie, il éblouit les conducteurs qui suivent et peut être confondu avec les feux stop, masquant vos freinages.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « forte pluie » autorise les feux de brouillard avant mais pas le feu de brouillard arrière. Pensez aussi à éteindre ce dernier dès que le brouillard se lève.</div>
<p>Pour mémoire, par visibilité inférieure à 50 mètres, la vitesse est limitée à 50 km/h sur toutes les routes, autoroutes comprises.</p>`
        },
        {
          titre: "Clignotants, feux stop et feux de détresse",
          contenu: `<p>Les <strong>clignotants</strong> (indicateurs de changement de direction) annoncent vos intentions : changement de direction, changement de voie, dépassement, sortie de stationnement. Leur voyant est vert et clignote au même rythme. Un <strong>clignotement accéléré</strong> du voyant indique en général qu'une ampoule de clignotant est grillée.</p>
<p>Les <strong>feux stop</strong> s'allument automatiquement quand vous freinez. Ils doivent tous fonctionner : demandez de temps en temps à quelqu'un de vérifier derrière, ou regardez leur reflet sur une vitrine ou un mur.</p>
<p>Les <strong>feux de détresse</strong> font clignoter simultanément tous les clignotants. Ils servent à signaler :</p>
<ul>
<li>un véhicule immobilisé sur la chaussée ou l'accotement à la suite d'une panne ou d'un accident ;</li>
<li>un danger aux usagers qui suivent, par exemple un ralentissement brusque ou un bouchon soudain sur autoroute ;</li>
<li>la présence d'un accident que vous venez de découvrir.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> les feux de détresse ne permettent pas de stationner n'importe où, en double file par exemple. Ils signalent un danger réel, ils ne créent pas un droit.</div>`
        },
        {
          titre: "Entretien et réglage de l'éclairage",
          contenu: `<p>Un éclairage défaillant est une cause d'accident et une infraction. Contrôlez régulièrement tous vos feux, à l'avant comme à l'arrière, et gardez dans le véhicule des ampoules de rechange si votre voiture le permet.</p>
<ul>
<li>Nettoyez les optiques : la boue ou la neige peut réduire fortement l'éclairage.</li>
<li>Faites contrôler le <strong>réglage des phares</strong> : trop hauts, ils éblouissent ; trop bas, ils éclairent trop court.</li>
<li>Utilisez le <strong>correcteur de portée</strong> lorsque le véhicule est chargé à l'arrière, pour abaisser le faisceau.</li>
<li>Remplacez les ampoules par paires (gauche et droite) pour garder un éclairage homogène.</li>
</ul>
<p>Un feu en panne vous rend moins visible et peut tromper les autres usagers : avec un seul feu avant allumé, votre voiture peut être prise de loin pour une moto, ce qui fausse l'appréciation de sa largeur et de sa position. Avec un feu stop hors service, le conducteur qui vous suit perçoit plus tard votre freinage. Faites réparer sans attendre, et en attendant redoublez de prudence la nuit.</p>
<p>La nuit, ou le jour par mauvaise visibilité, un véhicule à l'arrêt ou en stationnement sur la chaussée doit rester visible : ses feux de position (ou de stationnement) sont allumés lorsque l'éclairage public ne permet pas de le voir distinctement. Une voiture en panne sur le bord d'une route de campagne, sans aucun feu, constitue un obstacle très dangereux.</p>
<p>Certaines voitures disposent de <strong>feux adaptatifs</strong> qui suivent les virages ou basculent automatiquement entre feux de route et de croisement. Ces systèmes ne dispensent pas de surveiller : ils peuvent ne pas détecter un cycliste mal éclairé ou un piéton.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les règles de l'éclairage pour l'examen : croisement environ 30 m, route environ 100 m, brouillard arrière seulement par brouillard ou neige, détresse pour signaler un danger ou un véhicule immobilisé.</div>`
        }
      ],
      points_cles: [
        "Feux de position : être vu ; ils n'éclairent pas la route",
        "Feux de croisement : environ 30 m, sans éblouir",
        "Feux de route : environ 100 m, hors agglomération, sans usager devant ou en face",
        "Voyant bleu = feux de route ; voyant orange = brouillard arrière",
        "Brouillard avant : brouillard, neige, forte pluie",
        "Brouillard arrière : brouillard ou neige uniquement, jamais par simple pluie",
        "Feux de détresse : véhicule immobilisé, danger, ralentissement brusque",
        "Clignotement accéléré du voyant : ampoule de clignotant grillée",
        "Phares réglés et abaissés quand le véhicule est chargé"
      ]
    },
    {
      id: "voyants-entretien-aides",
      theme: "M",
      titre: "Voyants, entretien et aides à la conduite",
      duree: 24,
      objectifs: [
        "Interpréter la couleur d'un voyant et réagir en conséquence",
        "Reconnaître les principaux voyants d'alerte",
        "Contrôler les niveaux, la batterie et les essuie-glaces",
        "Comprendre le fonctionnement des aides à la conduite et leurs limites",
        "Connaître le rythme du contrôle technique"
      ],
      sections: [
        {
          titre: "Lire les voyants : la couleur d'abord",
          contenu: `<p>Le tableau de bord communique avec vous par des <strong>voyants</strong> (ou témoins). Leur couleur indique le degré d'urgence, sur le modèle des feux tricolores.</p>
<table>
<thead><tr><th>Couleur</th><th>Signification</th><th>Réaction</th></tr></thead>
<tbody>
<tr><td>Rouge</td><td>Danger, anomalie grave ou interdiction de rouler</td><td>S'arrêter dès que possible en sécurité, couper le moteur, consulter la notice</td></tr>
<tr><td>Orange (ou jaune)</td><td>Anomalie ou alerte, fonction dégradée</td><td>Rouler prudemment et faire vérifier rapidement</td></tr>
<tr><td>Vert</td><td>Fonction en service (feux de croisement, clignotants…)</td><td>Information</td></tr>
<tr><td>Bleu</td><td>Feux de route allumés</td><td>Information ; penser à les couper pour ne pas éblouir</td></tr>
</tbody>
</table>
<p>À la mise du contact, tous les voyants s'allument brièvement : c'est un test de fonctionnement. Ils doivent s'éteindre au démarrage du moteur. Un voyant rouge qui reste allumé ou s'allume en roulant impose un arrêt.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> rouge, je m'arrête ; orange, je fais vérifier ; vert ou bleu, c'est une information.</div>`
        },
        {
          titre: "Les principaux voyants d'alerte",
          contenu: `<h4>Voyants rouges</h4>
<ul>
<li><strong>Pression d'huile</strong> (burette d'huile) : le moteur n'est plus lubrifié. S'arrêter immédiatement et couper le moteur, sous peine de le détruire.</li>
<li><strong>Température du liquide de refroidissement</strong> (thermomètre dans des vagues) : le moteur surchauffe. S'arrêter, couper le moteur et ne jamais ouvrir le bouchon du radiateur moteur chaud : le liquide sous pression peut provoquer de graves brûlures.</li>
<li><strong>Charge de la batterie</strong> (symbole de batterie) : l'alternateur ne recharge plus la batterie ; la voiture finira par s'arrêter. Souvent lié à une courroie cassée.</li>
<li><strong>Freinage</strong> (point d'exclamation dans un cercle) : niveau de liquide de frein insuffisant ou défaut du circuit, à moins que le frein de stationnement soit simplement serré.</li>
<li><strong>Ceinture non bouclée</strong> : un occupant n'est pas attaché, souvent accompagné d'un signal sonore.</li>
</ul>
<h4>Voyants orange</h4>
<ul>
<li><strong>Défaut ABS</strong> : le freinage classique fonctionne, mais sans antiblocage.</li>
<li><strong>Défaut airbag</strong> : les airbags pourraient ne pas se déclencher.</li>
<li><strong>Moteur</strong> ou <strong>système antipollution</strong> : anomalie à faire diagnostiquer.</li>
<li><strong>Réserve de carburant</strong> : faire le plein rapidement.</li>
<li><strong>Pression des pneus</strong> : un pneu a perdu de la pression.</li>
<li><strong>Préchauffage</strong> (diesel) : attendre qu'il s'éteigne avant de démarrer.</li>
<li><strong>ESP</strong> : clignotant, le système est en train d'agir (adhérence précaire) ; fixe, il est désactivé ou en défaut.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le voyant de liquide de refroidissement s'allume en roulant. La bonne réaction est de s'arrêter et de couper le moteur, puis d'attendre qu'il refroidisse avant d'ouvrir le réservoir. Ouvrir tout de suite le bouchon est la mauvaise réponse.</div>`
        },
        {
          titre: "Niveaux, batterie et essuie-glaces",
          contenu: `<p>Contrôlez régulièrement les niveaux, moteur arrêté et voiture sur un sol plat :</p>
<table>
<thead><tr><th>Niveau</th><th>Comment</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td>Huile moteur</td><td>Jauge, moteur froid ou arrêté depuis quelques minutes, entre MINI et MAXI</td><td>Lubrifier le moteur</td></tr>
<tr><td>Liquide de refroidissement</td><td>Vase d'expansion, moteur froid uniquement</td><td>Évacuer la chaleur du moteur</td></tr>
<tr><td>Liquide de frein</td><td>Réservoir transparent, entre MINI et MAXI</td><td>Transmettre l'effort de freinage</td></tr>
<tr><td>Lave-glace</td><td>Réservoir, avec un produit antigel en hiver</td><td>Nettoyer le pare-brise</td></tr>
</tbody>
</table>
<p>Ne dépassez pas le repère MAXI d'huile : un excès est aussi nuisible qu'un manque. La vidange se fait selon le carnet d'entretien du constructeur.</p>
<h4>La batterie</h4>
<p>La batterie alimente le démarreur et les équipements électriques. Elle souffre du froid et des trajets très courts. Un démarrage laborieux, des phares qui faiblissent au démarrage annoncent sa fin de vie. Pour démarrer avec des câbles depuis une autre voiture, respectez l'ordre de branchement indiqué par la notice.</p>
<h4>Les essuie-glaces</h4>
<p>Des balais usés laissent des traînées qui gênent la vision, surtout la nuit et face au soleil bas. Changez-les dès qu'ils ne nettoient plus correctement, en général au moins une fois par an. Par temps de gel, ne mettez pas en marche des balais collés au pare-brise : vous les abîmeriez.</p>`
        },
        {
          titre: "Les aides à la conduite",
          contenu: `<p>Les voitures modernes embarquent de nombreux systèmes d'aide à la conduite. Ils améliorent la sécurité, mais <strong>le conducteur reste responsable</strong> : ces systèmes ont des limites et peuvent être pris en défaut (marquage effacé, pluie, neige, capteur sale).</p>
<ul>
<li><strong>ESP</strong> (contrôle électronique de trajectoire) : il détecte un début de dérapage et freine individuellement une ou plusieurs roues, en réduisant au besoin la puissance du moteur, pour remettre la voiture dans la trajectoire voulue. Il ne peut pas compenser une vitesse excessive.</li>
<li><strong>Régulateur de vitesse</strong> : maintient la vitesse choisie sans action sur l'accélérateur. Il se désactive dès qu'on freine ou débraye. À éviter sur chaussée glissante, en ville et en circulation dense.</li>
<li><strong>Régulateur adaptatif</strong> : il ajuste en plus la vitesse pour garder une distance avec le véhicule qui précède.</li>
<li><strong>Limiteur de vitesse</strong> : empêche de dépasser la vitesse choisie, sauf en enfonçant franchement l'accélérateur (point dur), utile pour un dépassement ou une urgence.</li>
<li><strong>Alerte de franchissement de ligne</strong> et <strong>aide au maintien dans la voie</strong> : alerte ou corrige légèrement la direction si la voiture quitte sa voie sans clignotant.</li>
<li><strong>Freinage d'urgence automatique</strong> : détecte un obstacle (véhicule, piéton, cycliste) et freine si le conducteur ne réagit pas.</li>
<li><strong>Détection d'angle mort</strong>, <strong>radar de recul</strong> et <strong>caméra</strong> : aident aux manœuvres et aux changements de voie.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> faire confiance aveuglément aux aides entraîne une baisse de vigilance. Le régulateur sur une route mouillée, par exemple, peut maintenir la vitesse au moment où la voiture commence à faire de l'aquaplanage.</div>`
        },
        {
          titre: "Entretien et contrôle technique",
          contenu: `<p>Un véhicule bien entretenu est plus sûr, consomme moins et pollue moins. Suivez le <strong>carnet d'entretien</strong> du constructeur (vidanges, filtres, courroie de distribution, freins).</p>
<p>Le <strong>contrôle technique</strong> est obligatoire pour les voitures particulières :</p>
<ul>
<li>un premier contrôle dans les <strong>six mois précédant le 4e anniversaire</strong> de la première mise en circulation ;</li>
<li>puis <strong>tous les 2 ans</strong> ;</li>
<li>et avant la vente d'un véhicule de plus de 4 ans (contrôle de moins de 6 mois).</li>
</ul>
<p>Si des défaillances majeures sont relevées, une <strong>contre-visite</strong> doit être faite dans un délai de <strong>2 mois</strong>. En cas de défaillance critique, le véhicule ne peut circuler que le jour du contrôle, pour être réparé.</p>
<h4>En cas de crevaison</h4>
<p>Si un pneu crève en roulant, la voiture tire d'un côté et la direction devient lourde ou flottante. Tenez fermement le volant, ne freinez pas brutalement, ralentissez progressivement et garez-vous hors de la chaussée, feux de détresse allumés. Selon l'équipement, vous remplacerez la roue par la roue de secours ou une roue « galette » (à vitesse limitée, voir la notice), ou utiliserez le kit anti-crevaison fourni. Ces solutions sont provisoires : faites réparer ou remplacer le pneu au plus vite.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> votre voiture a été mise en circulation en mai 2022. Son premier contrôle technique doit être fait au plus tard en mai 2026, puis en mai 2028.</div>`
        }
      ],
      points_cles: [
        "Voyant rouge : s'arrêter dès que possible ; orange : faire vérifier ; vert et bleu : information",
        "Pression d'huile ou température moteur au rouge : arrêt immédiat, moteur coupé",
        "Ne jamais ouvrir le circuit de refroidissement moteur chaud",
        "Niveaux contrôlés moteur arrêté, sur sol plat, entre MINI et MAXI",
        "ESP : corrige un début de dérapage en freinant certaines roues",
        "Régulateur : maintient une vitesse ; limiteur : empêche de la dépasser",
        "Les aides à la conduite ne remplacent pas la vigilance du conducteur",
        "Contrôle technique : avant les 4 ans du véhicule, puis tous les 2 ans ; contre-visite sous 2 mois"
      ]
    }
  );

  /* ───────────── Thème M — questions M-001 à M-039 ───────────── */
  P.questions.push(
    { id: "M-001", chapitre: "pneus-freinage", situation: "Vous contrôlez vos pneus. La bande de roulement arrive au niveau des petits bossages situés au fond des rainures.",
      q: "Ces bossages sont :", options: ["Des témoins d'usure", "Des renforts décoratifs", "Des indicateurs de pression"], bonnes: [0],
      explication: "Ce sont les témoins d'usure : lorsque la bande de roulement les atteint, la profondeur minimale de 1,6 mm est atteinte et le pneu doit être remplacé." },
    { id: "M-002", chapitre: "pneus-freinage",
      q: "La profondeur minimale légale des sculptures d'un pneu de voiture est de :", options: ["1 mm", "1,6 mm", "3 mm"], bonnes: [1],
      explication: "La profondeur des sculptures doit être d'au moins 1,6 mm sur toute la bande de roulement. Pour la sécurité sur sol mouillé, mieux vaut changer de pneu avant." },
    { id: "M-003", chapitre: "pneus-freinage", situation: "Il pleut abondamment. Vos pneus sont proches de la limite d'usure. Vous roulez vite sur une grande flaque.",
      q: "Je risque :", options: ["L'aquaplanage", "Une perte de contrôle", "Un freinage plus efficace"], bonnes: [0, 1],
      explication: "Des sculptures usées n'évacuent plus l'eau : le pneu flotte sur une pellicule d'eau (aquaplanage) et l'on peut perdre le contrôle du véhicule." },
    { id: "M-004", chapitre: "pneus-freinage", situation: "Vous voulez vérifier la pression de vos pneus avant de partir en vacances.",
      q: "Je la contrôle de préférence :", options: ["À froid", "Après une heure de route", "Une fois par an seulement"], bonnes: [0],
      explication: "La pression se contrôle à froid : un pneu chaud affiche une pression plus élevée. Le contrôle se fait au moins une fois par mois et avant un long trajet." },
    { id: "M-005", chapitre: "pneus-freinage", situation: "Vos pneus sont nettement sous-gonflés.",
      q: "Cela peut entraîner :", options: ["Un risque d'éclatement", "Une surconsommation de carburant", "Une distance de freinage allongée", "Une meilleure adhérence en virage"], bonnes: [0, 1, 2],
      explication: "Un pneu sous-gonflé chauffe (risque d'éclatement), augmente la consommation, allonge le freinage et dégrade la tenue de route." },
    { id: "M-006", chapitre: "pneus-freinage", situation: "Vous constatez que vos deux pneus avant sont usés sur les deux bords, mais pas au centre.",
      q: "Cette usure révèle plutôt :", options: ["Un sous-gonflage", "Un surgonflage"], bonnes: [0],
      explication: "Un pneu sous-gonflé s'appuie sur ses bords, qui s'usent plus vite. Le surgonflage, à l'inverse, use le centre de la bande de roulement." },
    { id: "M-007", chapitre: "pneus-freinage", situation: "Un pneu présente une bosse sur son flanc.",
      q: "Je peux continuer à l'utiliser :", options: ["Oui, si la profondeur des sculptures est suffisante", "Non, il doit être remplacé"], bonnes: [1],
      explication: "Une hernie sur le flanc révèle une rupture de la structure interne du pneu : il peut éclater à tout moment et doit être remplacé." },
    { id: "M-008", chapitre: "pneus-freinage", situation: "En novembre, vous vous rendez en station de ski dans une commune soumise à la loi Montagne.",
      q: "Pour respecter l'obligation, je peux :", options: ["Équiper ma voiture de quatre pneus hiver marqués 3PMSF", "Avoir des chaînes ou des chaussettes à neige dans le coffre", "Rouler avec des pneus été à vitesse réduite"], bonnes: [0, 1],
      explication: "Du 1er novembre au 31 mars, dans les communes concernées, il faut soit quatre pneus hiver marqués 3PMSF, soit des chaînes ou chaussettes dans le coffre pour équiper au moins deux roues motrices." },
    { id: "M-009", chapitre: "pneus-freinage", situation: "Vous équipez votre voiture de chaînes à neige.",
      q: "Je les monte sur les roues :", options: ["Motrices", "Arrière, quel que soit le véhicule", "Non motrices"], bonnes: [0],
      explication: "Les chaînes se montent sur les roues motrices, celles qui transmettent la puissance du moteur et doivent donc garder l'adhérence." },
    { id: "M-010", chapitre: "pneus-freinage", situation: "Votre voiture est équipée de l'ABS. Un obstacle surgit, vous devez freiner en urgence.",
      q: "Je dois :", options: ["Freiner fort et maintenir la pression sur la pédale", "Pomper sur la pédale de frein", "Relâcher le frein dès que la pédale vibre"], bonnes: [0],
      explication: "Avec l'ABS, on freine fort et on maintient l'appui. Les vibrations de la pédale sont normales : c'est l'ABS qui empêche les roues de se bloquer." },
    { id: "M-011", chapitre: "pneus-freinage",
      q: "L'ABS permet :", options: ["De garder le contrôle de la direction pendant un freinage d'urgence", "D'empêcher le blocage des roues", "De réduire toujours la distance de freinage"], bonnes: [0, 1],
      explication: "L'ABS évite le blocage des roues et permet de continuer à diriger le véhicule. Il ne raccourcit pas toujours la distance de freinage, notamment sur neige ou gravillons." },
    { id: "M-012", chapitre: "pneus-freinage", situation: "Le niveau du liquide de frein a nettement baissé en peu de temps et la pédale s'enfonce plus que d'habitude.",
      q: "Il s'agit probablement :", options: ["D'une fuite dans le circuit de freinage", "D'un phénomène normal"], bonnes: [0],
      explication: "Une baisse rapide du niveau, associée à une pédale molle, révèle une fuite. Il faut faire réparer immédiatement : les freins peuvent lâcher." },
    { id: "M-013", chapitre: "pneus-freinage", situation: "Vous abordez une longue descente de montagne.",
      q: "Pour éviter l'échauffement des freins :", options: ["J'utilise le frein moteur en engageant un rapport inférieur", "Je freine en continu, légèrement", "Je descends au point mort"], bonnes: [0],
      explication: "Le frein moteur retient le véhicule sans chauffer les freins. Freiner en continu les surchauffe ; au point mort, on perd le frein moteur et le contrôle." },
    { id: "M-014", chapitre: "pneus-freinage", situation: "Vous remplacez un seul pneu avant, crevé.",
      q: "Les deux pneus avant doivent être :", options: ["De même dimension et de même type", "De marques obligatoirement différentes", "Peu importe"], bonnes: [0],
      explication: "Les pneus d'un même essieu doivent être identiques (dimension, structure, catégorie). Des pneus différents sur un essieu déséquilibrent le freinage et la tenue de route." },
    { id: "M-015", chapitre: "eclairage-signalisation-vehicule", situation: "La nuit, hors agglomération, sur une route non éclairée. Aucun véhicule devant ni en face.",
      q: "J'utilise :", options: ["Les feux de position", "Les feux de croisement", "Les feux de route"], bonnes: [2],
      explication: "Sans usager devant ni en face, on utilise les feux de route, qui éclairent à environ 100 m. Les feux de position ne servent qu'à être vu." },
    { id: "M-016", chapitre: "eclairage-signalisation-vehicule", situation: "La nuit, hors agglomération, en feux de route, un véhicule arrive en face au loin.",
      q: "Je passe en feux de croisement :", options: ["Oui, suffisamment tôt pour ne pas l'éblouir", "Non, seulement s'il me fait un appel de phares"], bonnes: [0],
      explication: "On passe en feux de croisement dès qu'un usager arrive en face, assez tôt pour ne pas l'éblouir, sans attendre qu'il le demande." },
    { id: "M-017", chapitre: "eclairage-signalisation-vehicule",
      q: "Les feux de croisement éclairent la route sur environ :", options: ["10 mètres", "30 mètres", "100 mètres"], bonnes: [1],
      explication: "Les feux de croisement portent à environ 30 m sans éblouir ; les feux de route éclairent à environ 100 m." },
    { id: "M-018", chapitre: "eclairage-signalisation-vehicule", situation: "Un voyant bleu est allumé à votre tableau de bord.",
      q: "Il indique que :", options: ["Les feux de route sont allumés", "Le moteur est froid", "Les feux de brouillard arrière sont allumés"], bonnes: [0],
      explication: "Le seul voyant bleu du tableau de bord est celui des feux de route. Le voyant des feux de brouillard arrière est orange." },
    { id: "M-019", chapitre: "eclairage-signalisation-vehicule", situation: "Il pleut très fort, en plein jour. La visibilité est réduite mais il n'y a ni brouillard ni neige.",
      q: "Je peux allumer :", options: ["Les feux de croisement", "Les feux de brouillard avant", "Le feu de brouillard arrière"], bonnes: [0, 1],
      explication: "Par forte pluie, les feux de croisement et de brouillard avant sont autorisés. Le feu de brouillard arrière est réservé au brouillard et à la neige : sous la pluie, il éblouit." },
    { id: "M-020", chapitre: "eclairage-signalisation-vehicule", situation: "Vous roulez dans un brouillard épais.",
      q: "Les feux de route :", options: ["Améliorent la visibilité", "Sont inefficaces et éblouissent par réflexion"], bonnes: [1],
      explication: "Dans le brouillard, la lumière des feux de route se réfléchit sur les gouttelettes et forme un écran blanc. On utilise les feux de croisement et les feux de brouillard." },
    { id: "M-021", chapitre: "eclairage-signalisation-vehicule", situation: "Le brouillard s'est levé, la visibilité est redevenue bonne. Votre feu de brouillard arrière est toujours allumé.",
      q: "Je l'éteins :", options: ["Oui, immédiatement", "Non, il améliore ma sécurité"], bonnes: [0],
      explication: "Le feu de brouillard arrière est très puissant : sans brouillard ni neige, il éblouit le conducteur qui suit et masque les feux stop. On l'éteint dès que la visibilité revient." },
    { id: "M-022", chapitre: "eclairage-signalisation-vehicule", situation: "Sur autoroute, vous découvrez un bouchon soudain devant vous et freinez fortement.",
      q: "Pour prévenir les conducteurs qui me suivent, j'allume :", options: ["Mes feux de détresse", "Mes feux de route", "Mon feu de brouillard arrière"], bonnes: [0],
      explication: "Les feux de détresse signalent un danger ou un ralentissement brusque aux usagers qui suivent. Les autres feux ne sont pas faits pour cela." },
    { id: "M-023", chapitre: "eclairage-signalisation-vehicule", situation: "Le voyant vert de votre clignotant droit clignote beaucoup plus vite que d'habitude.",
      q: "Cela indique probablement :", options: ["Une ampoule de clignotant grillée", "Un défaut de la batterie", "Un fonctionnement normal"], bonnes: [0],
      explication: "Un clignotement accéléré du voyant signale le plus souvent une ampoule de clignotant hors service. Il faut la remplacer rapidement." },
    { id: "M-024", chapitre: "eclairage-signalisation-vehicule", situation: "Votre coffre est très chargé, l'avant de la voiture est relevé. Vous roulez de nuit.",
      q: "Je dois :", options: ["Abaisser le faisceau avec le correcteur de portée", "Rouler en feux de position", "Ne rien changer"], bonnes: [0],
      explication: "Une charge à l'arrière relève le faisceau des phares, qui éblouissent alors les autres usagers. Le correcteur de portée permet de l'abaisser." },
    { id: "M-025", chapitre: "eclairage-signalisation-vehicule", situation: "La nuit, votre feu de croisement gauche est grillé.",
      q: "Pour les usagers venant en face, ma voiture peut être confondue avec :", options: ["Une moto", "Un camion"], bonnes: [0],
      explication: "Avec un seul feu avant, une voiture peut être prise pour une moto : les autres conducteurs sous-estiment sa largeur. Il faut faire réparer sans attendre." },
    { id: "M-026", chapitre: "eclairage-signalisation-vehicule", situation: "Vous devez vous arrêter quelques instants pour décharger un colis en pleine rue.",
      q: "Allumer mes feux de détresse me permet de stationner en double file :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Les feux de détresse signalent un danger réel ; ils n'autorisent pas un arrêt ou un stationnement interdit, comme la double file." },
    { id: "M-027", chapitre: "voyants-entretien-aides", situation: "Un voyant rouge s'allume au tableau de bord pendant que vous roulez.",
      q: "Je dois :", options: ["M'arrêter dès que possible en sécurité", "Continuer et le signaler à la prochaine révision", "Accélérer pour arriver plus vite au garage"], bonnes: [0],
      explication: "Un voyant rouge signale une anomalie grave ou un danger : on s'arrête dès que possible en sécurité, on coupe le moteur et on consulte la notice." },
    { id: "M-028", chapitre: "voyants-entretien-aides", situation: "Un voyant orange s'allume pendant que vous roulez.",
      q: "Il signale :", options: ["Une anomalie à faire vérifier rapidement", "Un arrêt immédiat obligatoire", "Une fonction normalement en service"], bonnes: [0],
      explication: "Un voyant orange indique une anomalie ou une fonction dégradée : on peut continuer prudemment, mais il faut faire vérifier rapidement." },
    { id: "M-029", chapitre: "voyants-entretien-aides", situation: "Le voyant rouge de pression d'huile s'allume en roulant.",
      q: "Je dois :", options: ["M'arrêter et couper le moteur au plus vite", "Rouler doucement jusqu'à chez moi"], bonnes: [0],
      explication: "Sans pression d'huile, le moteur n'est plus lubrifié et peut être détruit en quelques minutes. On s'arrête en sécurité et on coupe le moteur." },
    { id: "M-030", chapitre: "voyants-entretien-aides", situation: "Le voyant rouge de température du liquide de refroidissement s'allume. Vous vous arrêtez sur une aire.",
      q: "J'ouvre immédiatement le bouchon du vase d'expansion pour vérifier :", options: ["Oui", "Non, j'attends que le moteur refroidisse"], bonnes: [1],
      explication: "Moteur chaud, le liquide est sous pression et brûlant : ouvrir le bouchon peut provoquer de graves brûlures. On attend le refroidissement complet." },
    { id: "M-031", chapitre: "voyants-entretien-aides", situation: "Le voyant orange ABS reste allumé au tableau de bord.",
      q: "Mes freins :", options: ["Ne fonctionnent plus du tout", "Fonctionnent, mais sans antiblocage"], bonnes: [1],
      explication: "Un défaut ABS laisse le freinage classique opérationnel, mais les roues peuvent se bloquer en freinage d'urgence. Il faut faire vérifier rapidement." },
    { id: "M-032", chapitre: "voyants-entretien-aides", situation: "Vous contrôlez le niveau d'huile moteur.",
      q: "Je le fais :", options: ["Moteur arrêté, sur un sol plat", "Moteur en marche", "En lisant la jauge, entre MINI et MAXI"], bonnes: [0, 2],
      explication: "Le niveau d'huile se lit sur la jauge, moteur arrêté depuis quelques minutes et voiture à plat. Il doit se situer entre les repères MINI et MAXI." },
    { id: "M-033", chapitre: "voyants-entretien-aides", situation: "Sur une route mouillée, le voyant orange ESP clignote quelques instants dans un virage.",
      q: "Cela signifie :", options: ["Que l'ESP est en train de corriger la trajectoire", "Que l'ESP est en panne", "Que l'adhérence est précaire"], bonnes: [0, 2],
      explication: "Un voyant ESP qui clignote indique que le système agit pour éviter un dérapage : l'adhérence est précaire, il faut ralentir. Fixe, il signalerait un défaut ou une désactivation." },
    { id: "M-034", chapitre: "voyants-entretien-aides", situation: "Il pleut fortement sur l'autoroute.",
      q: "J'utilise le régulateur de vitesse :", options: ["Oui, il me rend plus attentif", "Non, il est déconseillé sur chaussée glissante"], bonnes: [1],
      explication: "Sur chaussée glissante, le régulateur peut maintenir la vitesse au moment d'un début d'aquaplanage. On garde la maîtrise directe de l'accélérateur." },
    { id: "M-035", chapitre: "voyants-entretien-aides",
      q: "Le limiteur de vitesse :", options: ["Empêche de dépasser la vitesse choisie", "Peut être dépassé en enfonçant franchement l'accélérateur", "Freine automatiquement à l'approche d'un obstacle"], bonnes: [0, 1],
      explication: "Le limiteur empêche de dépasser la vitesse programmée, sauf en franchissant le point dur de l'accélérateur. Le freinage automatique devant un obstacle relève d'un autre système." },
    { id: "M-036", chapitre: "voyants-entretien-aides", situation: "Votre voiture est équipée d'une aide au maintien dans la voie et d'un freinage d'urgence automatique.",
      q: "Je peux relâcher mon attention :", options: ["Oui, la voiture corrige mes erreurs", "Non, je reste responsable de ma conduite"], bonnes: [1],
      explication: "Les aides à la conduite ont des limites (marquage effacé, pluie, capteur sale). Le conducteur reste responsable et doit rester vigilant en permanence." },
    { id: "M-037", chapitre: "voyants-entretien-aides", situation: "Votre voiture a été mise en circulation pour la première fois il y a trois ans et demi.",
      q: "Je dois effectuer son premier contrôle technique :", options: ["Avant le 4e anniversaire de sa mise en circulation", "Au bout de 5 ans", "Uniquement en cas de vente"], bonnes: [0],
      explication: "Le premier contrôle technique se fait dans les six mois précédant le 4e anniversaire de la première mise en circulation, puis tous les 2 ans." },
    { id: "M-038", chapitre: "voyants-entretien-aides", situation: "Le contrôle technique de votre voiture a relevé une défaillance majeure.",
      q: "Je dois faire la contre-visite dans un délai de :", options: ["15 jours", "2 mois", "1 an"], bonnes: [1],
      explication: "En cas de défaillance majeure, le véhicule doit être réparé et présenté à une contre-visite dans un délai de 2 mois." },
    { id: "M-039", chapitre: "voyants-entretien-aides", situation: "Vos essuie-glaces laissent des traînées sur le pare-brise, qui vous gênent la nuit.",
      q: "Je dois :", options: ["Remplacer les balais", "Rouler en feux de route pour mieux voir", "Attendre le contrôle technique"], bonnes: [0],
      explication: "Des balais usés réduisent la visibilité, surtout la nuit et sous la pluie. On les remplace dès qu'ils ne nettoient plus correctement, en général au moins une fois par an." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème S — Équipements de sécurité des véhicules ───────────── */
  P.chapitres.push(
    {
      id: "ceinture-airbags-retenue",
      theme: "S",
      titre: "Ceinture, airbags et dispositifs de retenue",
      duree: 22,
      objectifs: [
        "Comprendre pourquoi la ceinture sauve des vies, même à faible vitesse",
        "Connaître l'obligation du port de la ceinture et les sanctions",
        "Savoir comment fonctionnent les airbags et les précautions qu'ils imposent",
        "Comprendre le rôle de l'appuie-tête",
        "Connaître les obligations de retenue des enfants"
      ],
      sections: [
        {
          titre: "Ce que représente un choc",
          contenu: `<p>Lors d'un choc frontal, la voiture s'arrête brutalement, mais ses occupants continuent leur course à la vitesse qu'ils avaient. Sans retenue, ils sont projetés contre le volant, le pare-brise, les sièges avant ou hors du véhicule.</p>
<p>Pour se représenter la violence d'un choc, on la compare souvent à une chute :</p>
<table>
<thead><tr><th>Vitesse au moment du choc</th><th>Équivaut à une chute d'environ</th></tr></thead>
<tbody>
<tr><td>50 km/h</td><td>10 mètres (3e étage d'un immeuble)</td></tr>
<tr><td>90 km/h</td><td>32 mètres (environ 10 étages)</td></tr>
<tr><td>130 km/h</td><td>66 mètres (plus de 20 étages)</td></tr>
</tbody>
</table>
<p>Personne ne peut se retenir avec les bras dans de telles conditions. Même à 20 ou 30 km/h, un choc sans ceinture peut entraîner des blessures graves, notamment à la tête et au thorax.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'énergie d'un choc augmente avec le carré de la vitesse. Doubler la vitesse multiplie par quatre la violence du choc. La ceinture et les airbags limitent les conséquences, mais seule une vitesse modérée les réduit vraiment.</div>`
        },
        {
          titre: "La ceinture de sécurité : obligation et sanctions",
          contenu: `<p>Le port de la ceinture est <strong>obligatoire pour tous les occupants</strong>, à l'avant comme à l'arrière, en ville comme sur route, dès lors que le siège en est équipé. Il ne dépend ni de la durée du trajet ni de la vitesse.</p>
<p>La ceinture moderne est à <strong>trois points</strong> d'ancrage. Elle est souvent associée à :</p>
<ul>
<li>un <strong>prétensionneur</strong>, qui retend la sangle au tout début du choc pour plaquer l'occupant contre son siège ;</li>
<li>un <strong>limiteur d'effort</strong>, qui laisse filer un peu la sangle pour éviter que la pression sur le thorax ne devienne elle-même dangereuse.</li>
</ul>
<p>Un passager arrière non attaché est dangereux pour lui-même mais aussi pour les occupants avant : projeté vers l'avant lors d'un choc, il peut les écraser contre la planche de bord, avec une force de plusieurs tonnes.</p>
<table>
<thead><tr><th>Qui n'est pas attaché ?</th><th>Qui est sanctionné ?</th><th>Sanction</th></tr></thead>
<tbody>
<tr><td>Le conducteur</td><td>Le conducteur</td><td>Amende de 135 € et retrait de 3 points</td></tr>
<tr><td>Un passager majeur</td><td>Le passager lui-même</td><td>Amende de 135 €</td></tr>
<tr><td>Un passager mineur, ou un enfant sans dispositif adapté</td><td>Le conducteur</td><td>Amende de 135 €</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « en ville, à faible vitesse, je peux ne pas boucler ma ceinture » est faux. L'obligation s'applique partout. Les rares dispenses relèvent de cas particuliers (certificat médical d'exemption, certaines professions dans l'exercice de leurs fonctions).</div>
<p>Les causes de non-port sont connues : trajets courts, places arrière, idée fausse qu'on pourrait se retenir avec les bras. Les études d'accidents montrent pourtant qu'une part importante des personnes tuées dans une voiture n'étaient pas attachées. Le conducteur a un rôle à jouer : il ne démarre que lorsque tous ses passagers sont attachés, et le signal sonore de ceinture non bouclée, présent aussi aux places arrière sur les voitures récentes, l'y aide.</p>
<p>Une ceinture qui a subi un choc violent, effilochée ou dont l'enrouleur fonctionne mal doit être remplacée.</p>`
        },
        {
          titre: "Les airbags",
          contenu: `<p>L'<strong>airbag</strong> (coussin gonflable de sécurité) se gonfle en quelques millisecondes lors d'un choc violent, puis se dégonfle aussitôt pour amortir le mouvement de l'occupant. Il en existe plusieurs : frontaux (volant et planche de bord), latéraux (dans les sièges), rideaux (le long des vitres), parfois aux genoux.</p>
<p>L'airbag est un <strong>complément</strong> de la ceinture, jamais un substitut. Sans ceinture, l'occupant est projeté vers l'airbag au moment où celui-ci se déploie à grande vitesse, ce qui peut causer des blessures graves.</p>
<ul>
<li>Gardez une distance d'environ 25 cm entre le volant et votre thorax.</li>
<li>Ne posez rien sur la planche de bord ou le volant (téléphone, support, objet décoratif) : il serait projeté au visage.</li>
<li>Le passager ne doit pas mettre ses <strong>pieds sur la planche de bord</strong> : au déploiement, ses jambes seraient violemment repoussées vers son visage.</li>
<li>Ne vous appuyez pas contre la portière ou la vitre, zone de déploiement des airbags latéraux et rideaux.</li>
<li>N'installez jamais un siège enfant <strong>dos à la route</strong> devant un airbag frontal actif.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> un voyant airbag orange qui reste allumé signale un défaut : les airbags risquent de ne pas se déclencher, ou de se déclencher de manière intempestive. Faites vérifier le système sans tarder. Après un déploiement, l'airbag doit être remplacé par un professionnel.</div>`
        },
        {
          titre: "L'appuie-tête",
          contenu: `<p>Lors d'un <strong>choc arrière</strong>, le siège pousse le dos de l'occupant vers l'avant tandis que la tête, plus lente, part violemment en arrière : c'est le « coup du lapin », responsable de nombreuses lésions des cervicales.</p>
<p>L'<strong>appuie-tête</strong> limite ce mouvement à condition d'être bien réglé :</p>
<ul>
<li>son <strong>haut au niveau du sommet du crâne</strong> ;</li>
<li><strong>au plus près</strong> de l'arrière de la tête.</li>
</ul>
<p>Un appuie-tête trop bas (au niveau de la nuque) est dangereux : il agit comme un pivot sur lequel la tête bascule. Pensez aussi aux appuie-têtes arrière, souvent baissés et oubliés.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> à l'arrêt à un feu rouge, vous êtes percuté par l'arrière à faible vitesse. Avec un appuie-tête bien réglé, votre tête est retenue tout de suite. Avec un appuie-tête trop bas, elle bascule par-dessus, et les cervicales encaissent tout le mouvement.</div>
<p>Certains sièges disposent d'appuie-têtes actifs, qui se rapprochent automatiquement de la tête au moment d'un choc arrière.</p>`
        },
        {
          titre: "Les dispositifs de retenue pour enfants",
          contenu: `<p>Les enfants de moins de 10 ans doivent voyager dans un <strong>dispositif de retenue homologué</strong>, adapté à leur taille ou à leur poids. Ces dispositifs portent une étiquette d'homologation (norme R44 ou R129).</p>
<table>
<thead><tr><th>Dispositif</th><th>Pour qui</th><th>Points d'attention</th></tr></thead>
<tbody>
<tr><td>Coque ou siège dos à la route</td><td>Nourrissons et jeunes enfants</td><td>Airbag frontal passager désactivé s'il est installé à l'avant</td></tr>
<tr><td>Siège à harnais</td><td>Jeunes enfants</td><td>Harnais bien serré, sans manteau épais</td></tr>
<tr><td>Rehausseur avec dossier</td><td>Enfants plus grands</td><td>Positionne la ceinture du véhicule sur l'épaule et les cuisses</td></tr>
</tbody>
</table>
<p>Le <strong>dos à la route</strong> est la position la plus protectrice pour les jeunes enfants, dont la tête est lourde par rapport au cou : en cas de choc frontal, le dossier du siège répartit l'effort sur tout le dos. La norme R129 l'impose au moins jusqu'à 15 mois.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un dispositif mal installé ou mal attaché perd une grande partie de son efficacité. Suivez la notice, préférez l'Isofix quand c'est possible, serrez bien le harnais, et n'utilisez pas un siège d'occasion qui a subi un accident.</div>
<p>Un enfant ne doit jamais voyager dans les bras d'un adulte : en cas de choc, même à faible vitesse, personne ne peut le retenir, et l'adulte peut l'écraser. Le conducteur est responsable de la bonne retenue des passagers mineurs.</p>`
        }
      ],
      points_cles: [
        "Un choc à 50 km/h équivaut à une chute d'environ 10 m",
        "Ceinture obligatoire pour tous les occupants, à l'avant et à l'arrière, partout",
        "Conducteur non attaché : 135 € et retrait de 3 points",
        "Passager majeur non attaché : il paie lui-même l'amende ; passager mineur : c'est le conducteur",
        "L'airbag complète la ceinture, il ne la remplace pas",
        "Pas de pieds sur la planche de bord, pas d'objet devant un airbag",
        "Voyant airbag allumé : faire vérifier rapidement",
        "Appuie-tête : haut au niveau du sommet du crâne, au plus près de la tête",
        "Enfant de moins de 10 ans : dispositif de retenue homologué ; jamais dans les bras"
      ]
    },
    {
      id: "securite-active-passive-visibilite",
      theme: "S",
      titre: "Sécurité active et passive, visibilité et équipements obligatoires",
      duree: 22,
      objectifs: [
        "Distinguer sécurité active et sécurité passive",
        "Connaître les équipements obligatoires à bord : gilet, triangle, éthylotest",
        "Comprendre les règles applicables aux vitrages",
        "Utiliser les rétroviseurs et maîtriser les angles morts",
        "Connaître l'appel d'urgence automatique eCall"
      ],
      sections: [
        {
          titre: "Sécurité active et sécurité passive",
          contenu: `<p>Les équipements de sécurité d'un véhicule se rangent en deux grandes familles.</p>
<ul>
<li>La <strong>sécurité active</strong> regroupe tout ce qui aide à <strong>éviter l'accident</strong> : freins, pneus, suspensions, direction, éclairage, visibilité, ABS, ESP, aides à la conduite.</li>
<li>La <strong>sécurité passive</strong> regroupe tout ce qui <strong>limite les conséquences</strong> d'un accident qui n'a pas pu être évité : ceinture, airbags, appuie-tête, structure de la carrosserie, sièges enfants.</li>
</ul>
<table>
<thead><tr><th>Sécurité active (éviter)</th><th>Sécurité passive (protéger)</th></tr></thead>
<tbody>
<tr><td>Freins et ABS</td><td>Ceinture avec prétensionneur</td></tr>
<tr><td>Pneumatiques</td><td>Airbags</td></tr>
<tr><td>ESP, freinage d'urgence automatique</td><td>Appuie-tête</td></tr>
<tr><td>Éclairage, essuie-glaces, rétroviseurs</td><td>Habitacle rigide, zones de déformation programmée</td></tr>
<tr><td>Suspensions, direction</td><td>Colonne de direction rétractable, renforts latéraux</td></tr>
</tbody>
</table>
<p>La carrosserie d'une voiture moderne est conçue avec des <strong>zones de déformation programmée</strong> à l'avant et à l'arrière : elles s'écrasent pour absorber l'énergie du choc, tandis que l'<strong>habitacle</strong>, très rigide, reste indéformable pour protéger les occupants. Une voiture très déformée après un accident a donc bien joué son rôle.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> l'ABS et l'ESP relèvent de la sécurité active (ils aident à éviter l'accident). La ceinture et l'airbag relèvent de la sécurité passive.</div>
<p>On parle parfois de <strong>sécurité tertiaire</strong> pour ce qui facilite l'intervention des secours après l'accident : l'<strong>eCall</strong>, système d'appel d'urgence automatique, qui compose le 112 et transmet la position du véhicule en cas de choc violent, est obligatoire sur les modèles de voitures homologués depuis 2018.</p>`
        },
        {
          titre: "Gilet, triangle et éthylotest",
          contenu: `<p>Tout véhicule doit contenir :</p>
<ul>
<li>un <strong>gilet de haute visibilité</strong> homologué, rangé à portée de main du conducteur, à enfiler avant de sortir du véhicule en cas d'arrêt d'urgence ;</li>
<li>un <strong>triangle de présignalisation</strong> homologué, à placer à au moins 30 m en amont du véhicule immobilisé, quand on peut le faire sans danger.</li>
</ul>
<p>L'absence de l'un ou l'autre de ces équipements est sanctionnée par une amende. Il est conseillé d'avoir un gilet pour chaque occupant, même si la loi n'en impose qu'un.</p>
<p>La réglementation prévoit aussi la présence d'un <strong>éthylotest</strong> à bord, mais son absence n'est pas sanctionnée. Il reste un outil utile pour vérifier, avant de prendre le volant, qu'on n'a pas dépassé le taux d'alcool autorisé. Ne confondez pas avec l'<strong>éthylotest antidémarrage</strong> (EAD), un dispositif qui empêche le démarrage du véhicule si le conducteur a bu ; il équipe les autocars et peut être imposé par le juge ou le préfet à un conducteur après une infraction liée à l'alcool.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> gilet et triangle sont obligatoires et leur absence est sanctionnée. Le gilet se range dans l'habitacle, pas dans le coffre.</div>
<p>D'autres équipements, non obligatoires, sont fortement recommandés : une trousse de premiers secours, une lampe torche, une couverture de survie, un extincteur, des ampoules de rechange.</p>`
        },
        {
          titre: "Les vitrages",
          contenu: `<p>Le <strong>pare-brise</strong> est en verre feuilleté : en cas de choc, il se fissure mais reste en un seul morceau, retenu par un film plastique. Il participe à la rigidité de la caisse et sert d'appui à l'airbag passager. Les <strong>vitres latérales</strong> et la lunette arrière sont le plus souvent en verre trempé, qui se brise en petits morceaux peu coupants.</p>
<p>Un impact sur le pare-brise doit être réparé rapidement : avec les variations de température et les vibrations, il peut se transformer en fissure. Un pare-brise fissuré dans le champ de vision du conducteur est un motif de contre-visite au contrôle technique.</p>
<h4>Les vitres teintées</h4>
<p>Le pare-brise et les <strong>vitres latérales avant</strong> doivent laisser passer au moins <strong>70 %</strong> de la lumière. Ces vitres permettent au conducteur de voir et d'être vu, notamment d'échanger un regard avec un piéton ou un autre conducteur. Les vitres surteintées au-delà de cette limite sont sanctionnées par une <strong>amende de 135 € et un retrait de 3 points</strong>, sauf dérogation médicale. Les vitres arrière et la lunette arrière ne sont pas concernées.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous achetez une voiture d'occasion dont les vitres avant ont été assombries avec un film très foncé. Vous devez le faire retirer avant de circuler : les vitres latérales avant doivent laisser passer au moins 70 % de la lumière.</div>
<p>Gardez les vitres <strong>propres</strong>, à l'intérieur comme à l'extérieur : un pare-brise sale se voile face au soleil bas ou aux phares. Utilisez la ventilation dirigée vers le pare-brise et la lunette arrière dégivrante pour lutter contre la buée.</p>`
        },
        {
          titre: "Rétroviseurs et angles morts",
          contenu: `<p>Les <strong>rétroviseurs</strong> vous informent sur ce qui se passe derrière et sur les côtés. Ils doivent être propres, bien réglés et consultés régulièrement, pas seulement avant une manœuvre : savoir en permanence qui vous suit vous permet de freiner ou de vous écarter en connaissant la situation.</p>
<p>Un <strong>angle mort</strong> est une zone que le conducteur ne voit ni directement ni dans ses rétroviseurs. Il en existe sur les côtés, légèrement en arrière de la voiture, mais aussi derrière les montants du pare-brise, qui peuvent masquer un piéton ou un cycliste à une intersection ou dans un virage.</p>
<ul>
<li>Avant chaque déplacement latéral, un <strong>coup d'œil par-dessus l'épaule</strong> couvre l'angle mort latéral.</li>
<li>À une intersection, déplacez légèrement la tête pour regarder autour des montants du pare-brise.</li>
<li>Ne restez pas dans l'angle mort d'un autre véhicule, surtout d'un poids lourd : si vous ne voyez pas ses rétroviseurs, son conducteur ne vous voit pas.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> les poids lourds et les autocars ont des angles morts très étendus, devant, sur les côtés et derrière. Ils portent d'ailleurs un autocollant signalant ces zones. Évitez de vous y attarder et ne les dépassez jamais par la droite.</div>
<p>Les systèmes de <strong>détection d'angle mort</strong> allument un témoin dans le rétroviseur extérieur lorsqu'un véhicule s'y trouve. Ils peuvent ne pas détecter un deux-roues rapide ou un piéton : le contrôle visuel reste obligatoire.</p>`
        },
        {
          titre: "Entretenir ses équipements de sécurité",
          contenu: `<p>Les équipements de sécurité ne sont efficaces que s'ils sont en bon état :</p>
<ul>
<li><strong>ceintures</strong> : sangles non effilochées, boucles qui se verrouillent, enrouleurs qui bloquent lors d'une traction brusque ;</li>
<li><strong>airbags</strong> : voyant éteint après le démarrage ;</li>
<li><strong>appuie-têtes</strong> : présents et réglés à toutes les places occupées ;</li>
<li><strong>rétroviseurs et vitrages</strong> : propres, sans fissure gênante ;</li>
<li><strong>gilet et triangle</strong> : présents, accessibles, en bon état ;</li>
<li><strong>sièges enfants</strong> : remplacés après un accident, utilisés dans les limites de taille ou de poids indiquées.</li>
</ul>
<p>Les rappels des constructeurs, notamment pour des airbags défectueux, doivent être pris au sérieux : un airbag défaillant peut blesser au lieu de protéger. Si vous recevez une lettre de rappel, prenez rapidement rendez-vous chez un réparateur agréé.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la sécurité passive ne se voit pas tant qu'on n'en a pas besoin. C'est justement pour cela qu'il faut la contrôler régulièrement.</div>`
        }
      ],
      points_cles: [
        "Sécurité active : éviter l'accident (freins, pneus, ABS, ESP, éclairage)",
        "Sécurité passive : limiter les conséquences (ceinture, airbags, appuie-tête, structure)",
        "Zones de déformation programmée et habitacle rigide",
        "Gilet et triangle obligatoires, gilet rangé dans l'habitacle",
        "Éthylotest : présence prévue par la réglementation, absence non sanctionnée",
        "Pare-brise et vitres latérales avant : au moins 70 % de lumière transmise",
        "Vitres surteintées : 135 € et retrait de 3 points",
        "Angle mort : contrôle par-dessus l'épaule avant tout déplacement latéral",
        "eCall : appel automatique du 112 en cas de choc violent"
      ]
    }
  );

  /* ───────────── Thème S — questions S-001 à S-030 ───────────── */
  P.questions.push(
    { id: "S-001", chapitre: "ceinture-airbags-retenue", situation: "Vous faites un trajet de 500 mètres en ville pour aller à la boulangerie.",
      q: "Je dois boucler ma ceinture :", options: ["Oui", "Non, le trajet est court et la vitesse faible"], bonnes: [0],
      explication: "La ceinture est obligatoire partout et quelle que soit la durée du trajet. Même à faible vitesse, un choc sans ceinture peut être grave." },
    { id: "S-002", chapitre: "ceinture-airbags-retenue", situation: "Un passager adulte s'installe à l'arrière de votre voiture.",
      q: "Il doit boucler sa ceinture :", options: ["Oui", "Non, seulement à l'avant"], bonnes: [0],
      explication: "Le port de la ceinture est obligatoire à toutes les places équipées, à l'avant comme à l'arrière." },
    { id: "S-003", chapitre: "ceinture-airbags-retenue", situation: "Lors d'un contrôle, vous conduisez sans avoir bouclé votre ceinture.",
      q: "Je risque :", options: ["Une amende de 135 €", "Un retrait de 3 points", "Une suspension immédiate du permis"], bonnes: [0, 1],
      explication: "Le défaut de port de la ceinture par le conducteur est puni d'une amende de 135 € et d'un retrait de 3 points." },
    { id: "S-004", chapitre: "ceinture-airbags-retenue", situation: "Votre passager avant, âgé de 30 ans, n'a pas bouclé sa ceinture lors d'un contrôle.",
      q: "L'amende est payée par :", options: ["Moi, le conducteur", "Le passager"], bonnes: [1],
      explication: "Un passager majeur non attaché est personnellement sanctionné. Le conducteur n'est responsable que des passagers mineurs." },
    { id: "S-005", chapitre: "ceinture-airbags-retenue", situation: "Un passager arrière adulte refuse de boucler sa ceinture : « Ce n'est dangereux que pour moi. »",
      q: "En cas de choc frontal, il peut :", options: ["Blesser gravement les passagers avant", "Être éjecté du véhicule", "Être protégé par l'airbag avant"], bonnes: [0, 1],
      explication: "Projeté vers l'avant, un passager arrière non attaché peut écraser les occupants avant ou être éjecté. Les airbags frontaux ne protègent pas les places arrière." },
    { id: "S-006", chapitre: "ceinture-airbags-retenue",
      q: "Un choc à 50 km/h équivaut à une chute d'environ :", options: ["3 mètres", "10 mètres", "50 mètres"], bonnes: [1],
      explication: "Un choc à 50 km/h équivaut à une chute d'une dizaine de mètres, soit à peu près du 3e étage d'un immeuble." },
    { id: "S-007", chapitre: "ceinture-airbags-retenue", situation: "Votre vitesse au moment d'un choc passe de 50 à 100 km/h.",
      q: "La violence du choc est multipliée par environ :", options: ["2", "4", "10"], bonnes: [1],
      explication: "L'énergie d'un choc augmente avec le carré de la vitesse : doubler la vitesse multiplie la violence du choc par quatre." },
    { id: "S-008", chapitre: "ceinture-airbags-retenue", situation: "Votre voiture est équipée d'airbags frontaux et latéraux.",
      q: "Je peux me dispenser de la ceinture :", options: ["Oui, l'airbag me protège", "Non, l'airbag complète la ceinture"], bonnes: [1],
      explication: "L'airbag est un complément de la ceinture. Sans ceinture, l'occupant est projeté contre l'airbag en plein déploiement et peut être gravement blessé." },
    { id: "S-009", chapitre: "ceinture-airbags-retenue", situation: "Pendant un long trajet, votre passagère avant pose ses pieds sur la planche de bord.",
      q: "C'est dangereux :", options: ["Oui, en cas de déploiement de l'airbag", "Non, si elle est attachée"], bonnes: [0],
      explication: "Si l'airbag se déploie, les jambes sont violemment repoussées vers le visage et le bassin glisse sous la ceinture. Les pieds restent au plancher." },
    { id: "S-010", chapitre: "ceinture-airbags-retenue", situation: "Vous voulez fixer votre téléphone sur un support collé au centre du volant.",
      q: "C'est une bonne idée :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Tout objet placé dans la zone de déploiement d'un airbag peut être projeté au visage lors d'un choc. Rien ne doit être fixé sur le volant ou la planche de bord à cet endroit." },
    { id: "S-011", chapitre: "ceinture-airbags-retenue", situation: "Le voyant orange de l'airbag reste allumé après le démarrage.",
      q: "Cela signifie que :", options: ["Les airbags risquent de ne pas fonctionner", "Les airbags sont prêts à se déclencher", "Je dois faire vérifier le système rapidement"], bonnes: [0, 2],
      explication: "Un voyant airbag allumé en permanence signale un défaut du système : les airbags pourraient ne pas se déclencher. Il faut faire vérifier sans tarder." },
    { id: "S-012", chapitre: "ceinture-airbags-retenue",
      q: "L'appuie-tête protège surtout lors :", options: ["D'un choc arrière", "D'un tonneau", "D'un freinage d'urgence sans choc"], bonnes: [0],
      explication: "Lors d'un choc arrière, la tête part violemment en arrière : l'appuie-tête bien réglé la retient et limite les lésions des cervicales (coup du lapin)." },
    { id: "S-013", chapitre: "ceinture-airbags-retenue", situation: "Votre appuie-tête arrive à hauteur de votre nuque.",
      q: "Il est :", options: ["Bien réglé", "Trop bas et dangereux"], bonnes: [1],
      explication: "Trop bas, l'appuie-tête agit comme un pivot sur lequel la tête bascule lors d'un choc arrière. Son haut doit arriver au niveau du sommet du crâne." },
    { id: "S-014", chapitre: "ceinture-airbags-retenue",
      q: "Le prétensionneur de ceinture :", options: ["Retend la sangle au début du choc", "Plaque l'occupant contre son siège", "Remplace l'airbag"], bonnes: [0, 1],
      explication: "Le prétensionneur retend la sangle dès le début du choc pour plaquer l'occupant contre le siège. Il complète l'airbag mais ne le remplace pas." },
    { id: "S-015", chapitre: "ceinture-airbags-retenue", situation: "Pour un court trajet, une passagère propose de garder son bébé de 6 mois dans ses bras, ceinture bouclée.",
      q: "J'accepte :", options: ["Oui, elle est attachée", "Non, le bébé doit être dans un dispositif de retenue homologué"], bonnes: [1],
      explication: "En cas de choc, personne ne peut retenir un enfant dans ses bras ; l'adulte peut même l'écraser. Le bébé doit voyager dans un dispositif homologué adapté." },
    { id: "S-016", chapitre: "ceinture-airbags-retenue", situation: "Un ami vous propose un siège auto d'occasion qui était dans sa voiture lors d'un accident.",
      q: "Je peux l'utiliser :", options: ["Oui, s'il ne paraît pas abîmé", "Non, il doit être remplacé"], bonnes: [1],
      explication: "Un siège enfant qui a subi un accident peut avoir des dommages invisibles : il doit être remplacé." },
    { id: "S-017", chapitre: "securite-active-passive-visibilite",
      q: "Font partie de la sécurité active :", options: ["L'ABS", "Les pneumatiques", "L'airbag", "L'ESP"], bonnes: [0, 1, 3],
      explication: "La sécurité active aide à éviter l'accident : ABS, ESP, pneus, freins, éclairage. L'airbag relève de la sécurité passive, qui limite les conséquences du choc." },
    { id: "S-018", chapitre: "securite-active-passive-visibilite",
      q: "Font partie de la sécurité passive :", options: ["La ceinture de sécurité", "L'appuie-tête", "Les essuie-glaces"], bonnes: [0, 1],
      explication: "Ceinture et appuie-tête limitent les blessures lors d'un choc : c'est la sécurité passive. Les essuie-glaces, qui assurent la visibilité, relèvent de la sécurité active." },
    { id: "S-019", chapitre: "securite-active-passive-visibilite", situation: "Après un choc frontal, l'avant d'une voiture moderne est très écrasé, mais l'habitacle est intact.",
      q: "Cela montre que :", options: ["La voiture est de mauvaise qualité", "Les zones de déformation ont absorbé l'énergie du choc"], bonnes: [1],
      explication: "L'avant et l'arrière sont conçus pour s'écraser et absorber l'énergie, tandis que l'habitacle rigide protège les occupants." },
    { id: "S-020", chapitre: "securite-active-passive-visibilite", situation: "Votre voiture récente est équipée du système eCall. Vous avez un accident grave.",
      q: "Ce système :", options: ["Appelle automatiquement le 112", "Transmet la position du véhicule", "Dispense les témoins d'alerter"], bonnes: [0, 1],
      explication: "L'eCall compose automatiquement le 112 et transmet la position du véhicule en cas de choc violent. Les témoins doivent quand même alerter s'ils le peuvent." },
    { id: "S-021", chapitre: "securite-active-passive-visibilite", situation: "Vous faites le tour des équipements de votre voiture.",
      q: "Sont obligatoires à bord :", options: ["Un gilet de haute visibilité", "Un triangle de présignalisation", "Un extincteur"], bonnes: [0, 1],
      explication: "Gilet et triangle sont obligatoires dans une voiture particulière. L'extincteur est recommandé mais pas obligatoire." },
    { id: "S-022", chapitre: "securite-active-passive-visibilite",
      q: "L'absence d'éthylotest à bord de la voiture est sanctionnée par une amende :", options: ["Oui", "Non"], bonnes: [1],
      explication: "La réglementation prévoit un éthylotest à bord, mais son absence n'est pas sanctionnée. Il reste utile pour contrôler son alcoolémie avant de conduire." },
    { id: "S-023", chapitre: "securite-active-passive-visibilite",
      q: "Le pare-brise et les vitres latérales avant doivent laisser passer au moins :", options: ["50 % de la lumière", "70 % de la lumière", "90 % de la lumière"], bonnes: [1],
      explication: "Le pare-brise et les vitres latérales avant doivent avoir un taux de transmission de la lumière d'au moins 70 %." },
    { id: "S-024", chapitre: "securite-active-passive-visibilite", situation: "Vos vitres latérales avant sont recouvertes d'un film très foncé. Vous n'avez aucune dérogation médicale.",
      q: "Je risque :", options: ["Une amende de 135 €", "Un retrait de 3 points", "Aucune sanction, seules les vitres arrière sont réglementées"], bonnes: [0, 1],
      explication: "Les vitres avant surteintées (moins de 70 % de lumière transmise) sont punies d'une amende de 135 € et d'un retrait de 3 points." },
    { id: "S-025", chapitre: "securite-active-passive-visibilite", situation: "Un petit impact est apparu sur votre pare-brise après la projection d'un gravillon.",
      q: "Je le fais réparer rapidement, car il peut :", options: ["Se transformer en fissure", "Réduire ma visibilité", "Améliorer la résistance du pare-brise"], bonnes: [0, 1],
      explication: "Avec les vibrations et les écarts de température, un impact peut s'étendre en fissure et gêner la visibilité. Une réparation rapide évite souvent le remplacement." },
    { id: "S-026", chapitre: "securite-active-passive-visibilite", situation: "Sur une route à deux voies dans le même sens, vous voulez vous rabattre à droite. Votre rétroviseur extérieur droit ne montre personne.",
      q: "Un véhicule peut pourtant se trouver :", options: ["Dans mon angle mort", "Nulle part, mon rétroviseur couvre tout"], bonnes: [0],
      explication: "Les rétroviseurs ne couvrent pas tout : une zone sur le côté, légèrement en arrière, reste invisible. On la contrôle d'un coup d'œil par-dessus l'épaule." },
    { id: "S-027", chapitre: "securite-active-passive-visibilite", situation: "Vous roulez à côté d'un poids lourd, à hauteur de ses roues arrière. Vous ne voyez pas ses rétroviseurs.",
      q: "Je dois :", options: ["Rester à côté de lui", "Me dégager de cette zone", "Considérer que son conducteur ne me voit pas"], bonnes: [1, 2],
      explication: "Si vous ne voyez pas les rétroviseurs d'un poids lourd, son conducteur ne vous voit pas : vous êtes dans son angle mort. Ralentissez ou dépassez franchement pour en sortir." },
    { id: "S-028", chapitre: "securite-active-passive-visibilite", situation: "Votre voiture est équipée d'un système de détection d'angle mort. Le témoin du rétroviseur gauche est éteint.",
      q: "Je peux changer de voie sans tourner la tête :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Ces systèmes peuvent ne pas détecter un deux-roues rapide ou un piéton. Le contrôle visuel de l'angle mort reste indispensable." },
    { id: "S-029", chapitre: "securite-active-passive-visibilite", situation: "À une intersection, un piéton s'apprête à traverser du côté gauche, mais il est masqué par le montant gauche de votre pare-brise.",
      q: "Pour le voir, je :", options: ["Bouge légèrement la tête", "Me fie à mes rétroviseurs", "Ralentis et observe"], bonnes: [0, 2],
      explication: "Les montants du pare-brise créent des angles morts vers l'avant. Bouger la tête et ralentir permet de découvrir un piéton ou un cycliste masqué." },
    { id: "S-030", chapitre: "securite-active-passive-visibilite", situation: "Vous recevez une lettre du constructeur de votre voiture concernant un rappel pour défaut d'airbag.",
      q: "Je dois :", options: ["Prendre rapidement rendez-vous chez un réparateur agréé", "Attendre le prochain contrôle technique", "Ignorer la lettre si le voyant airbag est éteint"], bonnes: [0],
      explication: "Un airbag défectueux peut blesser au lieu de protéger, même si le voyant est éteint. Les rappels doivent être traités rapidement." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["voiture"] = window.PERMIS_COURS["voiture"] || { chapitres: [], questions: [] };

  /* ───────────── Thème E — Environnement ───────────── */
  P.chapitres.push(
    {
      id: "ecoconduite",
      theme: "E",
      titre: "L'écoconduite : consommer moins, conduire plus sûr",
      duree: 22,
      objectifs: [
        "Comprendre le lien entre consommation, pollution et style de conduite",
        "Anticiper pour rouler avec souplesse et utiliser le frein moteur",
        "Choisir le bon rapport et le bon régime moteur",
        "Limiter les consommations inutiles : pneus, climatisation, charge, moteur à l'arrêt",
        "Savoir que l'écoconduite améliore aussi la sécurité"
      ],
      sections: [
        {
          titre: "Pourquoi l'écoconduite ?",
          contenu: `<p>Le transport est le premier secteur émetteur de gaz à effet de serre en France, et la voiture particulière y prend une large part. Chaque litre de carburant brûlé rejette du <strong>dioxyde de carbone (CO2)</strong>, principal gaz à effet de serre : moins consommer, c'est directement moins polluer.</p>
<p>L'<strong>écoconduite</strong> est une manière de conduire qui réduit la consommation sans allonger sensiblement les temps de trajet. Elle repose sur quelques principes simples : anticiper, rouler avec souplesse, utiliser les bons rapports et éviter les consommations inutiles.</p>
<p>Elle a un double bénéfice :</p>
<ul>
<li><strong>économique et écologique</strong> : moins de carburant, moins d'émissions, moins d'usure des freins, des pneus et de l'embrayage ;</li>
<li><strong>sécuritaire</strong> : un conducteur qui anticipe et roule souplement garde des marges, freine moins brutalement et réduit son risque d'accident.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> écoconduite et conduite sûre vont dans le même sens. Les accélérations brutales et les freinages tardifs coûtent du carburant et réduisent les marges de sécurité.</div>`
        },
        {
          titre: "Anticiper et rouler avec souplesse",
          contenu: `<p>L'<strong>anticipation</strong> est la clé de l'écoconduite. En regardant loin devant, vous repérez tôt un feu qui va passer au rouge, un ralentissement, un rond-point. Vous pouvez alors <strong>lever le pied</strong> plutôt que de freiner au dernier moment.</p>
<ul>
<li><strong>Utilisez le frein moteur</strong> : lorsque vous relâchez l'accélérateur en gardant une vitesse engagée, la plupart des moteurs modernes coupent l'injection. La voiture ralentit sans consommer de carburant.</li>
<li><strong>Accélérez progressivement</strong> : les démarrages rapides et les accélérations franches augmentent fortement la consommation.</li>
<li><strong>Gardez une vitesse stable</strong> : les variations de vitesse inutiles coûtent cher. Sur route dégagée, le régulateur de vitesse peut y aider.</li>
<li><strong>Respectez les distances de sécurité</strong> : elles vous laissent le temps de ralentir en douceur au lieu de freiner.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> à 300 mètres, vous voyez un feu passer à l'orange. Plutôt que de garder votre allure puis de freiner fort, vous relâchez l'accélérateur, vitesse engagée : la voiture décélère sans consommer. Le feu repasse parfois au vert avant que vous ne soyez arrêté, et vous repartez sans avoir eu à redémarrer de l'arrêt complet.</div>
<p>La <strong>vitesse</strong> elle-même pèse lourd : la résistance de l'air augmente très vite avec elle. Rouler un peu moins vite sur autoroute réduit nettement la consommation pour un temps de parcours à peine allongé.</p>`
        },
        {
          titre: "Le bon rapport au bon moment",
          contenu: `<p>Un moteur consomme moins lorsqu'il tourne à <strong>bas régime</strong> sur un rapport élevé. L'écoconduite consiste donc à passer les rapports assez tôt :</p>
<table>
<thead><tr><th>Moteur</th><th>Passage au rapport supérieur (indicatif)</th></tr></thead>
<tbody>
<tr><td>Essence</td><td>Vers 2 000 à 2 500 tours par minute</td></tr>
<tr><td>Diesel</td><td>Vers 1 500 à 2 000 tours par minute</td></tr>
</tbody>
</table>
<p>Roulez sur le <strong>rapport le plus élevé possible</strong> compatible avec la vitesse et la situation, sans faire « cogner » le moteur à trop bas régime. De nombreuses voitures affichent un <strong>indicateur de changement de rapport</strong> qui suggère le moment de monter ou de descendre une vitesse.</p>
<p>Il est possible de <strong>sauter un rapport</strong> (par exemple de la 3e à la 5e) lorsque la vitesse le permet, notamment en fin d'accélération sur une route dégagée. À l'inverse, rétrograder reste nécessaire pour disposer du frein moteur en descente ou de la puissance pour dépasser en sécurité.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> rouler au point mort en descente (« en roue libre ») ne fait pas économiser de carburant sur une voiture moderne : le moteur au ralenti consomme, alors que vitesse engagée et pied levé, il ne consomme rien. En plus, au point mort, on perd le frein moteur et une partie du contrôle.</div>
<p>Avec une boîte automatique, adoptez une conduite souple sur l'accélérateur : la boîte choisira d'elle-même des rapports élevés. Certains véhicules proposent un mode « éco » qui adoucit les réactions de l'accélérateur.</p>`
        },
        {
          titre: "Chasser les consommations inutiles",
          contenu: `<p>Plusieurs facteurs augmentent la consommation sans que le conducteur s'en rende compte :</p>
<ul>
<li><strong>Pression des pneus</strong> : des pneus sous-gonflés augmentent la résistance au roulement, donc la consommation, et usent les pneus plus vite. Contrôlez la pression une fois par mois, à froid.</li>
<li><strong>Climatisation</strong> : elle entraîne une surconsommation notable, surtout en ville. Utilisez-la avec modération, sans écart excessif avec la température extérieure, et aérez d'abord l'habitacle d'une voiture restée au soleil.</li>
<li><strong>Vitres ouvertes à vitesse élevée</strong> : elles augmentent la résistance à l'air. Sur autoroute, la ventilation est préférable.</li>
<li><strong>Charge et accessoires</strong> : chaque kilo transporté inutilement se paie. Un coffre de toit ou une galerie, même vide, augmente fortement la prise au vent : démontez-les quand vous n'en avez pas besoin.</li>
<li><strong>Équipements électriques</strong> : dégivrage, sièges chauffants et autres consommateurs sollicitent l'alternateur, donc le moteur ; coupez-les quand ils ne servent plus.</li>
</ul>
<h4>Le moteur à l'arrêt</h4>
<p>Un moteur qui tourne au ralenti consomme sans faire avancer la voiture. Lors d'un <strong>arrêt prolongé</strong> (attente devant une école, passage à niveau fermé, embouteillage totalement arrêté), coupez le moteur. Le système <strong>stop and start</strong> le fait automatiquement à chaque arrêt. Ne faites pas chauffer le moteur à l'arrêt avant de partir : il chauffe plus vite en roulant doucement.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> couper le moteur en roulant pour économiser est dangereux : vous perdez l'assistance de direction et une partie de l'assistance de freinage, et le volant peut se bloquer si la clé est retirée.</div>`
        },
        {
          titre: "Préparer ses trajets",
          contenu: `<p>L'écoconduite commence avant de monter en voiture. Les trajets courts, moteur froid, sont les plus consommateurs et les plus polluants : le moteur et le catalyseur n'atteignent pas leur température normale de fonctionnement.</p>
<ul>
<li>Pour quelques centaines de mètres, la <strong>marche</strong> ou le <strong>vélo</strong> sont souvent plus rapides et ne polluent pas.</li>
<li>Regroupez vos déplacements pour éviter plusieurs démarrages à froid.</li>
<li>Préparez votre itinéraire pour éviter les détours et les heures de pointe.</li>
<li>Pensez aux <strong>transports en commun</strong> et au <strong>covoiturage</strong>.</li>
</ul>
<table>
<thead><tr><th>Geste</th><th>Effet</th></tr></thead>
<tbody>
<tr><td>Anticiper, utiliser le frein moteur</td><td>Moins de carburant, moins d'usure des freins</td></tr>
<tr><td>Passer les rapports tôt</td><td>Moteur à bas régime, consommation réduite</td></tr>
<tr><td>Pneus bien gonflés</td><td>Moins de résistance au roulement, sécurité accrue</td></tr>
<tr><td>Climatisation modérée</td><td>Surconsommation limitée</td></tr>
<tr><td>Coffre de toit retiré quand il ne sert pas</td><td>Moins de prise au vent</td></tr>
<tr><td>Moteur coupé lors d'un arrêt prolongé</td><td>Aucune consommation à l'arrêt</td></tr>
</tbody>
</table>
<p>Un véhicule bien <strong>entretenu</strong> (filtres, vidanges, réglages) consomme et pollue moins : l'entretien fait partie de l'écoconduite.</p>`
        }
      ],
      points_cles: [
        "Moins de carburant consommé = moins de CO2 rejeté",
        "Anticiper et lever le pied plutôt que freiner tard",
        "Frein moteur : vitesse engagée et pied levé, l'injection est coupée",
        "Passer les rapports tôt : vers 2 000 à 2 500 tr/min en essence, 1 500 à 2 000 en diesel",
        "Le point mort en descente ne fait pas économiser et fait perdre le frein moteur",
        "Pneus bien gonflés, climatisation modérée, coffre de toit retiré",
        "Couper le moteur lors d'un arrêt prolongé ; ne jamais le couper en roulant",
        "Éviter les trajets courts moteur froid : marche, vélo, transports en commun, covoiturage"
      ]
    },
    {
      id: "pollution-critair-zfe",
      theme: "E",
      titre: "Pollution, Crit'Air, bruit et mobilités partagées",
      duree: 22,
      objectifs: [
        "Connaître les principaux polluants émis par les véhicules",
        "Comprendre le rôle du catalyseur et du filtre à particules",
        "Connaître la vignette Crit'Air et son usage dans les zones à faibles émissions",
        "Savoir comment réagir lors d'un épisode de pollution",
        "Limiter les nuisances sonores et connaître le covoiturage"
      ],
      sections: [
        {
          titre: "Ce que rejette une voiture",
          contenu: `<p>Un moteur thermique rejette plusieurs types de substances. Il faut distinguer les <strong>gaz à effet de serre</strong>, qui agissent sur le climat, et les <strong>polluants locaux</strong>, qui dégradent la qualité de l'air que nous respirons.</p>
<table>
<thead><tr><th>Substance</th><th>Origine principale</th><th>Effets</th></tr></thead>
<tbody>
<tr><td>Dioxyde de carbone (CO2)</td><td>Toute combustion de carburant</td><td>Principal gaz à effet de serre, réchauffement climatique</td></tr>
<tr><td>Oxydes d'azote (NOx)</td><td>Surtout les moteurs diesel</td><td>Irritation des voies respiratoires, formation d'ozone</td></tr>
<tr><td>Particules fines</td><td>Diesel, mais aussi usure des freins, des pneus et de la route</td><td>Maladies respiratoires et cardiovasculaires</td></tr>
<tr><td>Monoxyde de carbone (CO)</td><td>Combustion incomplète, moteur froid</td><td>Gaz toxique, inodore</td></tr>
<tr><td>Hydrocarbures imbrûlés</td><td>Combustion incomplète</td><td>Toxiques, formation d'ozone</td></tr>
</tbody>
</table>
<p>Les émissions de CO2 sont directement proportionnelles à la consommation de carburant. Les autres polluants dépendent aussi de l'état du moteur et de ses dispositifs de dépollution.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> ne laissez jamais tourner un moteur dans un garage fermé : le monoxyde de carbone, invisible et sans odeur, peut être mortel en quelques minutes.</div>`
        },
        {
          titre: "Les dispositifs de dépollution",
          contenu: `<p>Les véhicules modernes sont soumis aux <strong>normes européennes d'émissions</strong> (normes Euro), de plus en plus strictes au fil des années. Pour les respecter, ils sont équipés de dispositifs de dépollution :</p>
<ul>
<li>le <strong>pot catalytique</strong> transforme une partie des gaz toxiques (monoxyde de carbone, hydrocarbures, oxydes d'azote) en substances moins nocives ; il n'est pleinement efficace qu'une fois chaud ;</li>
<li>le <strong>filtre à particules</strong> (FAP), surtout sur les diesels, retient les particules fines et les brûle périodiquement (régénération), ce qui demande de rouler régulièrement sur route à allure soutenue ;</li>
<li>sur de nombreux diesels récents, un système de réduction des oxydes d'azote utilise un additif, l'AdBlue, à remplir régulièrement.</li>
</ul>
<p>Retirer ou neutraliser le filtre à particules ou le catalyseur est <strong>interdit</strong> : le véhicule n'est plus conforme et le contrôle technique contrôle les émissions polluantes.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> votre voiture diesel ne fait que de petits trajets en ville. Un voyant orange signale que le filtre à particules est encrassé. La notice recommande souvent de rouler une vingtaine de minutes sur voie rapide pour permettre sa régénération ; si le voyant persiste, faites-le vérifier.</div>
<p>Un moteur mal entretenu (filtre à air encrassé, huile usagée, injecteurs défaillants) consomme davantage et rejette plus de polluants. Une fumée noire ou bleue à l'échappement doit vous alerter. Les huiles de vidange, batteries et pneus usagés doivent être déposés dans les filières de collecte : ne les jetez jamais dans la nature.</p>`
        },
        {
          titre: "La vignette Crit'Air et les zones à faibles émissions",
          contenu: `<p>Le <strong>certificat qualité de l'air</strong>, appelé <strong>Crit'Air</strong>, est une vignette ronde collée sur le pare-brise. Elle classe les véhicules selon leurs émissions polluantes, en fonction de leur motorisation et de leur norme Euro. Elle se commande uniquement sur le site officiel de l'État, pour un coût modique : méfiez-vous des sites qui la revendent plus cher.</p>
<table>
<thead><tr><th>Vignette</th><th>Couleur</th><th>Exemples de véhicules</th></tr></thead>
<tbody>
<tr><td>Crit'Air 0</td><td>Verte</td><td>Électriques et à hydrogène</td></tr>
<tr><td>Crit'Air 1</td><td>Violette</td><td>Gaz, hybrides rechargeables, essence récents (Euro 5 et 6)</td></tr>
<tr><td>Crit'Air 2</td><td>Jaune</td><td>Essence Euro 4, diesel récents (Euro 5 et 6)</td></tr>
<tr><td>Crit'Air 3</td><td>Orange</td><td>Essence Euro 2 et 3, diesel Euro 4</td></tr>
<tr><td>Crit'Air 4</td><td>Bordeaux</td><td>Diesel Euro 3</td></tr>
<tr><td>Crit'Air 5</td><td>Grise</td><td>Diesel Euro 2</td></tr>
</tbody>
</table>
<p>Plus le chiffre est petit, moins le véhicule pollue. Les véhicules les plus anciens ne peuvent obtenir aucune vignette (« non classés »).</p>
<h4>Les zones à faibles émissions</h4>
<p>Certaines agglomérations ont mis en place des <strong>zones à faibles émissions</strong> (ZFE), signalées par des panneaux à leur entrée, dans lesquelles la circulation des véhicules les plus polluants est restreinte selon leur vignette Crit'Air. Les règles (périmètre, horaires, vignettes autorisées, dérogations) sont fixées localement et peuvent évoluer : renseignez-vous avant de vous rendre dans une grande ville. Circuler dans une zone où la vignette est exigée sans l'avoir apposée expose à une amende.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la vignette Crit'Air 0 (verte) correspond aux véhicules les plus propres, pas aux plus anciens. Plus le numéro augmente, plus le véhicule est polluant.</div>`
        },
        {
          titre: "Les épisodes de pollution",
          contenu: `<p>Lors d'un <strong>épisode de pollution</strong> (pic de particules fines, d'ozone ou de dioxyde d'azote), le préfet peut prendre des mesures temporaires :</p>
<ul>
<li>un <strong>abaissement des vitesses maximales autorisées</strong> sur certains axes ;</li>
<li>la <strong>circulation différenciée</strong> : seuls les véhicules ayant certaines vignettes Crit'Air peuvent circuler dans la zone concernée ;</li>
<li>des mesures incitatives : gratuité ou tarifs réduits des transports en commun, du stationnement résidentiel…</li>
</ul>
<p>Ces mesures sont annoncées par les médias, les panneaux à messages variables et les sites des préfectures. En cas d'épisode de pollution, privilégiez les transports en commun, le covoiturage ou le télétravail, et adoptez une conduite souple.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en cas de circulation différenciée, un véhicule sans vignette Crit'Air, ou avec une vignette non autorisée ce jour-là, ne peut pas circuler dans la zone concernée.</div>`
        },
        {
          titre: "Le bruit et le covoiturage",
          contenu: `<h4>Limiter le bruit</h4>
<p>Le bruit routier est une nuisance majeure pour les riverains, avec des effets sur le sommeil et la santé. Le conducteur peut le réduire :</p>
<ul>
<li>en conduisant souplement, sans accélérations ni régimes moteur élevés inutiles ;</li>
<li>en évitant de laisser tourner le moteur à l'arrêt et de claquer les portières la nuit ;</li>
<li>en réservant l'<strong>avertisseur sonore</strong> au danger immédiat en agglomération ;</li>
<li>en ne modifiant pas son échappement : un pot d'échappement modifié ou défectueux, trop bruyant, est interdit ;</li>
<li>en gardant la musique à un volume raisonnable, qui permet aussi d'entendre les sirènes des véhicules d'urgence.</li>
</ul>
<h4>Le covoiturage</h4>
<p>Le <strong>covoiturage</strong> consiste à partager un véhicule pour un trajet commun, les passagers participant aux frais sans que le conducteur réalise de bénéfice. Il réduit le nombre de voitures en circulation, donc la pollution, la congestion et les coûts.</p>
<p>Des <strong>voies réservées au covoiturage</strong> existent sur certains axes : elles sont signalées par des panneaux et par un marquage en forme de <strong>losange blanc</strong> sur la chaussée. Elles sont réservées, lorsqu'elles sont activées, aux véhicules transportant un nombre minimal d'occupants indiqué par la signalisation, ainsi qu'à certaines catégories de véhicules (transports en commun, taxis, véhicules à très faibles émissions selon les cas).</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> trois collègues habitant le même quartier font chaque jour 25 km pour aller au travail. En covoiturant, ils divisent par trois les frais, les émissions et le nombre de voitures sur la route.</div>`
        }
      ],
      points_cles: [
        "CO2 : gaz à effet de serre, proportionnel à la consommation",
        "NOx et particules fines : polluants locaux, surtout liés au diesel",
        "Catalyseur et filtre à particules : interdits de les retirer",
        "Crit'Air : de 0 (vert, électrique) à 5 ; plus le chiffre est petit, moins le véhicule pollue",
        "Zones à faibles émissions : accès selon la vignette Crit'Air, règles fixées localement",
        "Épisode de pollution : baisse des vitesses, circulation différenciée possible",
        "Avertisseur sonore en agglomération réservé au danger immédiat ; échappement modifié interdit",
        "Voies de covoiturage signalées par un losange blanc"
      ]
    },
    {
      id: "vehicules-electriques-hybrides",
      theme: "E",
      titre: "Véhicules électriques et hybrides",
      duree: 20,
      objectifs: [
        "Distinguer véhicule électrique, hybride et hybride rechargeable",
        "Connaître les facteurs qui influencent l'autonomie",
        "Savoir recharger un véhicule électrique en sécurité",
        "Comprendre le freinage régénératif",
        "Connaître les risques liés au silence de ces véhicules"
      ],
      sections: [
        {
          titre: "Les différentes motorisations",
          contenu: `<p>Les véhicules électrifiés se développent rapidement. Il faut savoir les distinguer :</p>
<table>
<thead><tr><th>Type</th><th>Fonctionnement</th><th>Recharge</th></tr></thead>
<tbody>
<tr><td>Électrique</td><td>Uniquement un ou plusieurs moteurs électriques alimentés par une batterie</td><td>Sur une prise ou une borne</td></tr>
<tr><td>Hybride (non rechargeable)</td><td>Moteur thermique associé à un moteur électrique et une petite batterie</td><td>Par le moteur thermique et le freinage, pas de prise</td></tr>
<tr><td>Hybride rechargeable</td><td>Moteur thermique et moteur électrique, batterie plus grande permettant plusieurs dizaines de kilomètres en électrique</td><td>Sur une prise ou une borne, et en roulant</td></tr>
<tr><td>Hydrogène</td><td>Moteur électrique alimenté par une pile à combustible</td><td>Plein d'hydrogène en station</td></tr>
</tbody>
</table>
<p>Un véhicule électrique n'émet <strong>aucun gaz d'échappement</strong> en roulant : il ne rejette ni CO2 ni oxydes d'azote localement, ce qui améliore la qualité de l'air en ville. Il émet toutefois des particules liées à l'usure des freins et des pneus, et sa fabrication, notamment celle de la batterie, a un impact environnemental.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'hybride rechargeable n'est vraiment intéressant que s'il est rechargé régulièrement : sinon, il roule surtout au thermique en transportant le poids de sa batterie.</div>`
        },
        {
          titre: "L'autonomie",
          contenu: `<p>L'<strong>autonomie</strong> est la distance qu'un véhicule électrique peut parcourir avec une batterie chargée. Elle varie fortement selon les conditions d'utilisation :</p>
<ul>
<li><strong>la vitesse</strong> : à vitesse élevée, la résistance de l'air fait chuter l'autonomie ; sur autoroute, elle est nettement inférieure à celle obtenue en ville ;</li>
<li><strong>la température</strong> : par grand froid, la batterie est moins performante et le chauffage consomme de l'énergie ;</li>
<li><strong>le chauffage et la climatisation</strong> ;</li>
<li><strong>le relief et la charge</strong> transportée ;</li>
<li><strong>le style de conduite</strong> : les accélérations vives consomment beaucoup.</li>
</ul>
<p>À l'inverse d'un véhicule thermique, un véhicule électrique est souvent <strong>plus économe en ville</strong> que sur autoroute : les ralentissements fréquents permettent de récupérer de l'énergie.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un hiver, vous partez pour un trajet d'autoroute de 250 km avec une voiture dont l'autonomie annoncée est de 400 km. Le froid, le chauffage et la vitesse vont réduire l'autonomie réelle : prévoyez une recharge en route, repérez les bornes sur votre itinéraire et préchauffez l'habitacle pendant que la voiture est encore branchée.</div>
<p>Pour éviter la panne, ne laissez pas la batterie descendre trop bas et anticipez les recharges sur les longs trajets. Le tableau de bord indique l'autonomie restante estimée ; elle évolue selon votre conduite.</p>`
        },
        {
          titre: "Recharger en sécurité",
          contenu: `<p>Un véhicule électrique se recharge de plusieurs façons :</p>
<table>
<thead><tr><th>Solution</th><th>Puissance</th><th>Usage</th></tr></thead>
<tbody>
<tr><td>Prise domestique</td><td>Faible, recharge lente (souvent une nuit ou plus)</td><td>Dépannage ou petits rouleurs ; installation électrique à faire vérifier</td></tr>
<tr><td>Borne murale à domicile (wallbox)</td><td>Moyenne</td><td>Recharge quotidienne, la nuit</td></tr>
<tr><td>Borne publique en courant alternatif</td><td>Moyenne</td><td>Parkings, voirie, pendant une course ou au travail</td></tr>
<tr><td>Borne rapide en courant continu</td><td>Élevée</td><td>Longs trajets, sur autoroute ou en périphérie</td></tr>
</tbody>
</table>
<ul>
<li>Utilisez les câbles fournis ou homologués, jamais de rallonge domestique ni de multiprise.</li>
<li>Sur borne rapide, la recharge ralentit fortement au-delà d'environ 80 % : il est souvent plus efficace de repartir à ce niveau.</li>
<li>Ne restez pas stationné sur une place de recharge une fois la recharge terminée : ces places sont réservées aux véhicules en charge.</li>
<li>Les places réservées à la recharge sont interdites aux véhicules thermiques.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> un véhicule électrique accidenté peut présenter un risque électrique ou d'incendie de la batterie. Comme pour tout accident, coupez le contact si possible, éloignez les personnes et signalez aux secours qu'il s'agit d'un véhicule électrique.</div>`
        },
        {
          titre: "Le freinage régénératif",
          contenu: `<p>Lorsque vous relâchez l'accélérateur ou freinez, le moteur électrique fonctionne en <strong>générateur</strong> : il transforme une partie de l'énergie du mouvement en électricité, qui recharge la batterie. C'est le <strong>freinage régénératif</strong> (ou récupération d'énergie).</p>
<p>Il produit un ralentissement comparable à un frein moteur, parfois très marqué selon le mode choisi. Certaines voitures permettent de conduire presque uniquement avec la pédale d'accélérateur : on ralentit en la relâchant. Le frein classique reste indispensable pour les arrêts complets et les urgences.</p>
<ul>
<li>Anticiper permet de récupérer un maximum d'énergie et d'utiliser moins les freins.</li>
<li>En descente, la récupération recharge la batterie tout en retenant la voiture.</li>
<li>Quand la batterie est pleine (ou très froide), la récupération peut être limitée : le ralentissement est alors moins fort qu'à l'habitude.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le freinage régénératif ne remplace pas le frein. En cas d'obstacle, on freine franchement avec la pédale de frein.</div>
<p>Sur une voiture hybride, le même principe recharge la petite batterie qui alimente le moteur électrique lors des démarrages et à basse vitesse.</p>`
        },
        {
          titre: "Silence et vigilance",
          contenu: `<p>À basse vitesse, un véhicule électrique ou hybride roulant en mode électrique est presque <strong>silencieux</strong>. Les piétons, les cyclistes et en particulier les personnes aveugles ou malvoyantes peuvent ne pas l'entendre arriver.</p>
<p>C'est pourquoi les véhicules électriques et hybrides récents doivent être équipés d'un <strong>avertisseur sonore</strong> qui émet automatiquement un son à basse vitesse et en marche arrière. Au-delà, le bruit de roulement des pneus suffit à signaler le véhicule.</p>
<ul>
<li>Redoublez d'attention près des passages piétons, des écoles, des parkings et dans les zones de rencontre.</li>
<li>N'attendez pas qu'un piéton vous ait entendu : vérifiez qu'il vous a vu.</li>
<li>En marche arrière dans un parking, roulez au pas.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le silence est un avantage pour les riverains mais un risque pour les piétons. Le conducteur d'un véhicule électrique doit être particulièrement vigilant à basse vitesse.</div>
<p>Enfin, les accélérations d'un véhicule électrique sont souvent vives et immédiates : dosez l'accélérateur avec soin, en particulier sur chaussée glissante et en ville.</p>`
        },
        {
          titre: "Utiliser et entretenir un véhicule électrifié",
          contenu: `<p>Conduire un véhicule électrique demande quelques adaptations. Il n'y a ni embrayage ni boîte de vitesses classique : un sélecteur permet de choisir la marche avant, la marche arrière, le neutre et la position de stationnement. Le véhicule est prêt à rouler sans bruit de moteur : un témoin au tableau de bord (souvent « READY ») l'indique. Avant de quitter le véhicule, vérifiez qu'il est bien éteint et en position de stationnement.</p>
<p>Les véhicules électriques sont souvent plus <strong>lourds</strong> que leurs équivalents thermiques, à cause de la batterie. Leur poids allonge les distances de freinage et sollicite davantage les pneus : surveillez leur usure et leur pression.</p>
<p>L'entretien est plus simple (pas de vidange, moins de pièces d'usure), mais il ne disparaît pas : pneus, freins, liquide de frein, liquide de refroidissement de la batterie, essuie-glaces et éclairage doivent être contrôlés comme sur toute voiture. Les freins, moins sollicités grâce à la récupération d'énergie, peuvent se corroder faute d'usage : freiner franchement de temps en temps les nettoie.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> votre voiture électrique dort dehors pendant une vague de froid. Programmez la recharge pour qu'elle se termine juste avant le départ et préchauffez l'habitacle pendant que la voiture est branchée : la batterie est à bonne température et l'énergie du chauffage est prise sur le réseau plutôt que sur l'autonomie.</div>`
        }
      ],
      points_cles: [
        "Électrique : aucun gaz d'échappement en roulant ; hybride rechargeable : à recharger régulièrement",
        "L'autonomie baisse avec la vitesse, le froid, le chauffage et la climatisation",
        "Électrique : souvent plus économe en ville que sur autoroute",
        "Recharge : câbles homologués, pas de rallonge ni de multiprise",
        "Recharge rapide : ralentit au-delà d'environ 80 %",
        "Places de recharge réservées aux véhicules en charge",
        "Freinage régénératif : recharge la batterie, ne remplace pas le frein",
        "Véhicule silencieux à basse vitesse : vigilance accrue envers les piétons",
        "Véhicule plus lourd : distances de freinage et usure des pneus à surveiller"
      ]
    }
  );

  /* ───────────── Thème E — questions E-001 à E-036 ───────────── */
  P.questions.push(
    { id: "E-001", chapitre: "ecoconduite", situation: "Au loin, le feu tricolore vers lequel vous roulez passe au rouge.",
      q: "Pour économiser du carburant, je :", options: ["Relâche l'accélérateur en gardant une vitesse engagée", "Garde mon allure et freine au dernier moment", "Passe au point mort pour finir en roue libre"], bonnes: [0],
      explication: "Pied levé, vitesse engagée, la plupart des moteurs coupent l'injection : la voiture ralentit sans consommer. Au point mort, le moteur au ralenti consomme." },
    { id: "E-002", chapitre: "ecoconduite", situation: "Vous descendez une longue côte avec une voiture récente à moteur essence.",
      q: "Je consomme le moins :", options: ["Au point mort", "Vitesse engagée, sans accélérer"], bonnes: [1],
      explication: "Vitesse engagée et pied levé, l'injection est coupée : la consommation est nulle. Au point mort, le moteur tourne au ralenti et consomme, et l'on perd le frein moteur." },
    { id: "E-003", chapitre: "ecoconduite", situation: "Votre voiture à moteur essence accélère sur une route dégagée.",
      q: "Pour économiser, je passe la vitesse supérieure vers :", options: ["2 000 à 2 500 tr/min", "4 000 à 4 500 tr/min", "Le régime maximal"], bonnes: [0],
      explication: "En écoconduite, on passe les rapports tôt : vers 2 000 à 2 500 tr/min en essence, 1 500 à 2 000 tr/min en diesel. Un moteur à bas régime consomme moins." },
    { id: "E-004", chapitre: "ecoconduite", situation: "Vous roulez à vitesse stable sur une route plate.",
      q: "Pour consommer le moins possible, je roule :", options: ["Sur le rapport le plus élevé possible", "Sur un rapport intermédiaire, moteur à haut régime"], bonnes: [0],
      explication: "Le rapport le plus élevé compatible avec la vitesse fait tourner le moteur à bas régime, ce qui réduit la consommation." },
    { id: "E-005", chapitre: "ecoconduite", situation: "Vous êtes en 3e et votre vitesse permet de rouler en 5e sur une route dégagée.",
      q: "Je peux passer directement de la 3e à la 5e :", options: ["Oui", "Non, c'est interdit"], bonnes: [0],
      explication: "Sauter un rapport est possible lorsque la vitesse le permet. Cela évite des passages inutiles et réduit la consommation." },
    { id: "E-006", chapitre: "ecoconduite",
      q: "L'écoconduite permet :", options: ["De réduire la consommation", "De diminuer le risque d'accident", "De réduire l'usure des freins et des pneus", "De rouler toujours plus vite"], bonnes: [0, 1, 2],
      explication: "Anticiper et rouler avec souplesse réduisent la consommation, l'usure et les émissions, tout en laissant davantage de marges de sécurité." },
    { id: "E-007", chapitre: "ecoconduite", situation: "Vous partez en vacances avec un coffre de toit. De retour chez vous, vous n'en avez plus besoin.",
      q: "Je le laisse en place pour la prochaine fois :", options: ["Oui, vide il ne change rien", "Non, je le démonte"], bonnes: [1],
      explication: "Même vide, un coffre de toit augmente fortement la prise au vent et donc la consommation. On le démonte dès qu'il ne sert plus." },
    { id: "E-008", chapitre: "ecoconduite", situation: "Les pneus de votre voiture sont sous-gonflés.",
      q: "Cela entraîne :", options: ["Une augmentation de la consommation", "Une usure plus rapide des pneus", "Une diminution de la consommation"], bonnes: [0, 1],
      explication: "Un pneu sous-gonflé augmente la résistance au roulement : la consommation augmente et le pneu s'use plus vite, sans parler du risque pour la sécurité." },
    { id: "E-009", chapitre: "ecoconduite", situation: "Vous attendez devant un passage à niveau dont les barrières viennent de se fermer.",
      q: "Pour économiser du carburant, je peux :", options: ["Couper le moteur", "Laisser tourner le moteur en accélérant de temps en temps"], bonnes: [0],
      explication: "Lors d'un arrêt prolongé, couper le moteur évite de consommer pour rien. Le système stop and start le fait automatiquement." },
    { id: "E-010", chapitre: "ecoconduite", situation: "Vous voulez économiser du carburant dans une longue descente.",
      q: "Je coupe le moteur en roulant :", options: ["Oui", "Non, c'est dangereux"], bonnes: [1],
      explication: "Moteur coupé, on perd l'assistance de direction et une partie de l'assistance de freinage ; le volant peut même se bloquer. C'est dangereux et inutile, puisque pied levé, le moteur ne consomme pas." },
    { id: "E-011", chapitre: "ecoconduite", situation: "Il fait chaud. Votre voiture est restée au soleil toute la journée.",
      q: "Pour limiter la consommation de la climatisation :", options: ["J'aère d'abord l'habitacle en ouvrant les vitres quelques instants", "Je règle la climatisation au plus froid", "J'évite un écart excessif avec la température extérieure"], bonnes: [0, 2],
      explication: "La climatisation augmente la consommation. On évacue d'abord l'air chaud, puis on l'utilise avec modération, sans viser une température trop basse." },
    { id: "E-012", chapitre: "ecoconduite", situation: "Vous roulez à 130 km/h sur autoroute, toutes vitres ouvertes.",
      q: "Les vitres ouvertes à cette vitesse :", options: ["Augmentent la consommation", "N'ont aucun effet sur la consommation"], bonnes: [0],
      explication: "À vitesse élevée, des vitres ouvertes augmentent la résistance à l'air. La ventilation est alors préférable." },
    { id: "E-013", chapitre: "ecoconduite", situation: "Ce matin d'hiver, vous allez acheter le pain à 400 mètres de chez vous.",
      q: "Le choix le plus écologique est :", options: ["De prendre la voiture, moteur froid", "D'y aller à pied ou à vélo"], bonnes: [1],
      explication: "Les trajets très courts, moteur froid, sont les plus consommateurs et les plus polluants : le catalyseur n'a pas atteint sa température de fonctionnement." },
    { id: "E-014", chapitre: "pollution-critair-zfe",
      q: "Le principal gaz à effet de serre rejeté par une voiture est :", options: ["Le dioxyde de carbone (CO2)", "La vapeur de plomb", "L'oxygène"], bonnes: [0],
      explication: "Le CO2 est le principal gaz à effet de serre émis par la combustion du carburant. Ses émissions sont proportionnelles à la consommation." },
    { id: "E-015", chapitre: "pollution-critair-zfe",
      q: "Les moteurs diesel émettent surtout :", options: ["Des oxydes d'azote", "Des particules fines", "Uniquement de la vapeur d'eau"], bonnes: [0, 1],
      explication: "Les diesels émettent davantage d'oxydes d'azote et de particules fines, nocifs pour la santé. Le filtre à particules et les systèmes de réduction des NOx les limitent." },
    { id: "E-016", chapitre: "pollution-critair-zfe", situation: "Un garagiste vous propose de retirer le filtre à particules de votre diesel pour « gagner en puissance ».",
      q: "C'est autorisé :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Retirer ou neutraliser le filtre à particules ou le catalyseur est interdit : le véhicule n'est plus conforme et pollue beaucoup plus." },
    { id: "E-017", chapitre: "pollution-critair-zfe", situation: "Vous voulez faire chauffer votre moteur dans votre garage fermé.",
      q: "C'est dangereux car le moteur rejette :", options: ["Du monoxyde de carbone, toxique et inodore", "De l'azote pur"], bonnes: [0],
      explication: "Le monoxyde de carbone, invisible et inodore, peut être mortel en quelques minutes dans un local fermé. On ne fait jamais tourner un moteur dans un garage fermé." },
    { id: "E-018", chapitre: "pollution-critair-zfe", situation: "Votre voiture est électrique.",
      q: "Elle peut obtenir la vignette :", options: ["Crit'Air 0 (verte)", "Crit'Air 3 (orange)", "Crit'Air 5 (grise)"], bonnes: [0],
      explication: "Les véhicules électriques et à hydrogène reçoivent la vignette Crit'Air 0, de couleur verte, qui correspond aux véhicules les moins polluants." },
    { id: "E-019", chapitre: "pollution-critair-zfe",
      q: "Concernant les vignettes Crit'Air :", options: ["Plus le chiffre est élevé, plus le véhicule pollue", "Plus le chiffre est élevé, moins le véhicule pollue"], bonnes: [0],
      explication: "Les vignettes vont de 0 (véhicules électriques) à 5 (anciens diesels). Plus le numéro est grand, plus le véhicule est polluant." },
    { id: "E-020", chapitre: "pollution-critair-zfe",
      q: "La vignette Crit'Air se commande :", options: ["Sur le site officiel de l'État", "Sur n'importe quel site, le prix est libre", "Au contrôle technique uniquement"], bonnes: [0],
      explication: "La vignette se commande uniquement sur le site officiel, pour un coût modique. Des sites non officiels la revendent beaucoup plus cher." },
    { id: "E-021", chapitre: "pollution-critair-zfe", situation: "Vous voulez circuler dans une grande ville qui a mis en place une zone à faibles émissions.",
      q: "Mon droit d'y circuler dépend :", options: ["De la vignette Crit'Air de mon véhicule", "Des règles fixées localement", "De la couleur de ma carrosserie"], bonnes: [0, 1],
      explication: "L'accès aux zones à faibles émissions dépend de la vignette Crit'Air du véhicule, selon des règles (périmètre, horaires, vignettes autorisées) fixées localement." },
    { id: "E-022", chapitre: "pollution-critair-zfe", situation: "Un épisode de pollution est en cours. Le préfet a décidé la circulation différenciée.",
      q: "Cela signifie que :", options: ["Seuls certains véhicules, selon leur vignette Crit'Air, peuvent circuler", "Tous les véhicules circulent normalement", "Seuls les véhicules à plaque paire circulent"], bonnes: [0],
      explication: "La circulation différenciée réserve la circulation dans la zone aux véhicules munis de certaines vignettes Crit'Air." },
    { id: "E-023", chapitre: "pollution-critair-zfe", situation: "Un épisode de pollution est annoncé dans votre région.",
      q: "Je peux contribuer à le limiter :", options: ["En prenant les transports en commun", "En covoiturant", "En adoptant une conduite souple", "En roulant plus vite pour passer moins de temps sur la route"], bonnes: [0, 1, 2],
      explication: "Transports en commun, covoiturage et conduite souple réduisent les émissions. Rouler plus vite augmente la consommation et la pollution." },
    { id: "E-024", chapitre: "pollution-critair-zfe", situation: "Vous circulez en agglomération et un piéton traverse lentement devant vous, loin de tout danger.",
      q: "Je klaxonne pour qu'il se dépêche :", options: ["Oui", "Non"], bonnes: [1],
      explication: "En agglomération, l'avertisseur sonore est réservé au danger immédiat. L'utiliser pour presser un usager est interdit et contribue aux nuisances sonores." },
    { id: "E-025", chapitre: "pollution-critair-zfe", situation: "Vous envisagez de modifier l'échappement de votre voiture pour qu'il soit plus sonore.",
      q: "C'est autorisé :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Un échappement modifié ou trop bruyant est interdit : le bruit routier est une nuisance importante pour la santé des riverains." },
    { id: "E-026", chapitre: "pollution-critair-zfe", situation: "Sur une voie rapide, un marquage en forme de losange blanc est peint sur la voie de gauche, accompagné de panneaux.",
      q: "Cette voie peut être réservée :", options: ["Au covoiturage", "Aux poids lourds", "Aux véhicules en panne"], bonnes: [0],
      explication: "Le losange blanc signale les voies réservées à certains véhicules, notamment au covoiturage : lorsqu'elles sont activées, seuls les véhicules autorisés par la signalisation peuvent les emprunter." },
    { id: "E-027", chapitre: "pollution-critair-zfe",
      q: "Le covoiturage :", options: ["Réduit le nombre de voitures en circulation", "Permet au conducteur de partager les frais", "Permet au conducteur de réaliser un bénéfice"], bonnes: [0, 1],
      explication: "Le covoiturage consiste à partager un trajet et ses frais, sans bénéfice pour le conducteur. Il réduit la congestion et la pollution." },
    { id: "E-028", chapitre: "vehicules-electriques-hybrides", situation: "Vous roulez à faible allure dans un parking avec une voiture électrique.",
      q: "Je dois être particulièrement vigilant car :", options: ["Les piétons peuvent ne pas m'entendre", "Mon véhicule est très bruyant", "Les personnes malvoyantes peuvent ne pas me détecter"], bonnes: [0, 2],
      explication: "À basse vitesse, un véhicule électrique est très silencieux, même avec son avertisseur sonore. Les piétons, surtout malvoyants, peuvent ne pas le percevoir." },
    { id: "E-029", chapitre: "vehicules-electriques-hybrides", situation: "En hiver, vous partez pour un long trajet sur autoroute en voiture électrique.",
      q: "Mon autonomie réelle risque d'être réduite par :", options: ["Le froid", "Le chauffage", "La vitesse élevée"], bonnes: [0, 1, 2],
      explication: "Le froid réduit les performances de la batterie, le chauffage consomme de l'énergie et la vitesse élevée augmente la résistance de l'air : l'autonomie baisse nettement." },
    { id: "E-030", chapitre: "vehicules-electriques-hybrides", situation: "Vous relâchez l'accélérateur de votre voiture électrique avant un rond-point.",
      q: "Le freinage régénératif :", options: ["Recharge une partie de la batterie", "Ralentit le véhicule", "Remplace totalement la pédale de frein"], bonnes: [0, 1],
      explication: "En décélération, le moteur fonctionne en générateur : il ralentit la voiture et recharge la batterie. Le frein reste indispensable pour les arrêts et les urgences." },
    { id: "E-031", chapitre: "vehicules-electriques-hybrides", situation: "Vous devez recharger votre voiture électrique chez vous, mais la prise est un peu loin.",
      q: "J'utilise une rallonge domestique :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Les rallonges et multiprises domestiques ne sont pas faites pour supporter une recharge longue et puissante : risque d'échauffement et d'incendie. On utilise un câble homologué et une installation vérifiée." },
    { id: "E-032", chapitre: "vehicules-electriques-hybrides", situation: "Votre voiture électrique est garée sur une place de recharge publique. La recharge est terminée depuis une heure.",
      q: "Je peux y laisser mon véhicule :", options: ["Oui, c'est une voiture électrique", "Non, je libère la place"], bonnes: [1],
      explication: "Les places de recharge sont destinées aux véhicules en cours de charge. Une fois la recharge terminée, on libère la place pour les autres utilisateurs." },
    { id: "E-033", chapitre: "vehicules-electriques-hybrides", situation: "Vous possédez une voiture hybride rechargeable que vous ne branchez jamais.",
      q: "Dans ce cas :", options: ["Elle roule surtout grâce à son moteur thermique", "Elle consomme plus que si elle était rechargée régulièrement", "Elle n'émet aucun gaz d'échappement"], bonnes: [0, 1],
      explication: "Sans recharge, l'hybride rechargeable roule surtout au thermique en transportant le poids de sa batterie : elle consomme et émet davantage." },
    { id: "E-034", chapitre: "vehicules-electriques-hybrides", situation: "Vous utilisez une borne de recharge rapide sur l'autoroute. Votre batterie atteint 80 %.",
      q: "Il est souvent plus efficace de :", options: ["Repartir, car la recharge ralentit fortement au-delà", "Attendre impérativement 100 %"], bonnes: [0],
      explication: "Sur borne rapide, la recharge ralentit fortement au-delà d'environ 80 %. Repartir à ce niveau fait gagner du temps et libère la borne." },
    { id: "E-035", chapitre: "vehicules-electriques-hybrides",
      q: "En roulant, une voiture 100 % électrique :", options: ["N'émet aucun gaz d'échappement", "Émet des particules liées à l'usure des freins et des pneus", "Rejette autant de CO2 qu'une voiture diesel"], bonnes: [0, 1],
      explication: "Une voiture électrique n'a pas d'échappement, mais elle émet des particules dues à l'usure des freins, des pneus et de la route." },
    { id: "E-036", chapitre: "vehicules-electriques-hybrides", situation: "Votre voiture électrique est nettement plus lourde que votre ancienne voiture thermique.",
      q: "Je dois en tenir compte pour :", options: ["Mes distances de freinage", "La surveillance de l'usure des pneus", "Ma consommation d'huile moteur"], bonnes: [0, 1],
      explication: "Un véhicule plus lourd allonge les distances de freinage et use davantage les pneus. Une voiture électrique n'a pas d'huile moteur à surveiller." }
  );
})();
