/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — Habilitation électrique (NF C 18-510) — fichier 3
   Parcours électricien basse et haute tension (btht) : compléments du thème HT.
   Ouvrages HT, acteurs et documents, consignation approfondie, voisinage,
   opérations spécifiques HE, équipements, accident et incendie, risques
   spécifiques. Questions HT-101 et suivantes (HT-001 à HT-060 : fichier 2).
   Les parcours et les thèmes sont déclarés dans permis-elec-0.js.
   ═══════════════════════════════════════════════════════════════════════════ */
window.PERMIS_COURS = window.PERMIS_COURS || {};

/* ───────────── Thème HT — Les ouvrages haute tension ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "ht-ouvrages-reseaux",
      theme: "HT",
      parcours: ["btht"],
      titre: "Les ouvrages haute tension : réseaux, lignes, postes et transformateurs",
      duree: 25,
      objectifs: [
        "Situer les réseaux HTB et HTA et leurs tensions usuelles",
        "Distinguer lignes aériennes et réseaux souterrains et leurs risques propres",
        "Reconnaître les principaux types de postes et leurs modes de raccordement",
        "Identifier le rôle des cellules d'arrivée, de protection et de comptage",
        "Connaître les particularités d'un transformateur HTA/BT",
        "Lire un schéma unifilaire simple de poste"
      ],
      sections: [
        {
          titre: "Du réseau de transport au poste de l'usine",
          contenu: `<p>L'énergie produite dans les centrales est acheminée vers les consommateurs par plusieurs réseaux successifs, de tension de plus en plus basse :</p>
<table>
<thead><tr><th>Réseau</th><th>Domaine</th><th>Tensions usuelles en France</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td>Transport et interconnexion</td><td>HTB</td><td>400 kV, 225 kV</td><td>Grands transits d'énergie sur de longues distances</td></tr>
<tr><td>Répartition</td><td>HTB</td><td>90 kV, 63 kV</td><td>Alimenter les postes sources et les très gros industriels</td></tr>
<tr><td>Distribution</td><td>HTA</td><td>20 kV le plus souvent (parfois 15 kV ou 10 kV sur des réseaux anciens)</td><td>Alimenter les postes HTA/BT publics et les postes de livraison des entreprises</td></tr>
<tr><td>Distribution basse tension</td><td>BT</td><td>400 V entre phases, 230 V entre phase et neutre</td><td>Alimenter les logements, commerces et petits sites</td></tr>
</tbody>
</table>
<p>Le passage de la HTB à la HTA se fait dans un <strong>poste source</strong>. Le passage de la HTA à la BT se fait dans un <strong>poste de transformation HTA/BT</strong>, qu'il soit public (poste de distribution) ou privé (poste de livraison d'un client raccordé en HTA).</p>
<p>Une tension est toujours désignée par sa valeur <strong>entre phases</strong>. Sur un réseau 20 kV, la tension entre une phase et la terre est d'environ 11,5 kV : c'est déjà largement de la haute tension.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'électricien habilité H d'un site industriel travaille le plus souvent sur la partie HTA d'un poste de livraison en 20 kV. Les réseaux HTB relèvent d'exploitants et de procédures spécialisés.</div>`
        },
        {
          titre: "Lignes aériennes et réseaux souterrains",
          contenu: `<p>Une <strong>ligne aérienne</strong> HT est formée de conducteurs <strong>nus</strong>, c'est-à-dire sans isolant : c'est l'air et les isolateurs (chaînes d'assiettes en verre ou en composite, isolateurs rigides) qui les isolent des supports. Conséquences :</p>
<ul>
<li>toute la longueur de la ligne est une <strong>pièce nue sous tension</strong> qui crée des zones de voisinage ;</li>
<li>le nombre et la taille des isolateurs augmentent avec la tension : une longue chaîne d'isolateurs signale une tension élevée ;</li>
<li>les conducteurs bougent : ils se balancent avec le vent et descendent quand ils chauffent (flèche plus grande l'été ou quand la ligne est très chargée) ;</li>
<li>beaucoup de lignes HTA sont équipées d'automatismes de <strong>réenclenchement</strong> : après un défaut, la ligne est remise sous tension automatiquement, parfois en quelques dixièmes de seconde.</li>
</ul>
<p>Un <strong>réseau souterrain</strong> est formé de câbles <strong>isolés</strong>, enterrés en tranchée ou posés en galerie. Chaque câble HTA comporte une âme conductrice, un isolant synthétique et un <strong>écran métallique</strong> relié à la terre aux extrémités. Les câbles sont reliés entre eux par des <strong>jonctions</strong> et raccordés aux cellules par des <strong>extrémités</strong> (ou têtes de câble).</p>
<p>Un câble enterré est invisible : avant toute intervention, son identification repose sur les plans, les repères et des appareils spécifiques. Un câble isolé n'est pas pour autant sans danger : il peut être sous tension, garder une charge électrique après la coupure ou être endommagé.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une ligne aérienne qui « ne fait pas de bruit » et dont les conducteurs paraissent fins n'est pas forcément hors tension, ni en basse tension. Toute ligne doit être considérée comme sous tension tant que son exploitant n'a pas attesté le contraire.</div>`
        },
        {
          titre: "Les postes HTA/BT et leur raccordement",
          contenu: `<p>Selon leur emplacement, on rencontre plusieurs types de postes : poste sur poteau (petit transformateur fixé en haut d'un support de ligne aérienne), poste préfabriqué au sol, poste maçonné ou intégré dans un bâtiment.</p>
<p>Le poste est raccordé au réseau HTA de différentes manières :</p>
<ul>
<li><strong>en antenne</strong> (ou simple dérivation) : une seule arrivée ; si elle est coupée, le poste n'est plus alimenté ;</li>
<li><strong>en coupure d'artère</strong> : le poste est inséré dans une boucle, avec une cellule d'arrivée et une cellule de départ vers le poste suivant. La boucle est normalement ouverte en un point, mais elle peut être refermée par l'exploitant : un câble peut donc être alimenté <strong>par l'un ou l'autre de ses côtés</strong> ;</li>
<li><strong>en double dérivation</strong> : deux arrivées, l'une normale, l'autre de secours, avec un permutateur.</li>
</ul>
<p>Dans un <strong>poste de livraison</strong> d'entreprise, une partie des équipements est exploitée par le gestionnaire du réseau de distribution (arrivées du réseau), une autre par l'entreprise. La limite entre les deux est précisée par les documents de raccordement et les consignes du poste : toute manœuvre ou consignation sur la partie réseau relève du gestionnaire du réseau, selon ses propres procédures.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> sur un poste en coupure d'artère ou en double dérivation, ouvrir une seule cellule ne suffit pas à isoler le jeu de barres. Toutes les sources possibles doivent être repérées sur le schéma avant une consignation.</div>`
        },
        {
          titre: "Les cellules HTA",
          contenu: `<p>Une cellule est une armoire métallique qui regroupe, pour une fonction, les appareils de coupure, le jeu de barres et les raccordements. Les cellules modernes sont <strong>sous enveloppe métallique</strong>, avec des compartiments séparés et des verrouillages.</p>
<table>
<thead><tr><th>Cellule</th><th>Fonction</th><th>Équipement typique</th></tr></thead>
<tbody>
<tr><td>Arrivée (et départ) réseau</td><td>Raccorder le câble du réseau HTA, ouvrir ou fermer la boucle</td><td>Interrupteur-sectionneur et sectionneur de mise à la terre</td></tr>
<tr><td>Protection générale</td><td>Protéger l'installation et la séparer du réseau en cas de défaut</td><td>Disjoncteur avec relais de protection, ou combiné interrupteur-fusibles</td></tr>
<tr><td>Protection transformateur</td><td>Mettre en ou hors service un transformateur et le protéger</td><td>Interrupteur-fusibles ou disjoncteur</td></tr>
<tr><td>Comptage</td><td>Mesurer l'énergie consommée</td><td>Transformateurs de courant (TC) et de tension (TT) reliés au compteur</td></tr>
</tbody>
</table>
<p>Sur la face avant, on trouve le <strong>synoptique</strong> (schéma de la cellule avec la position des appareils), les commandes, les cadenassages possibles et souvent des <strong>indicateurs de présence de tension</strong> (voyants alimentés par des diviseurs capacitifs). Ces voyants renseignent l'exploitant, mais leur valeur dans la procédure de VAT dépend des instructions de l'exploitant : un voyant éteint peut aussi être un voyant en panne.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un poste de livraison d'usine comporte, de gauche à droite, deux cellules arrivée en coupure d'artère, une cellule de protection générale à disjoncteur, une cellule de comptage et deux cellules de protection transformateur.</div>`
        },
        {
          titre: "Le transformateur HTA/BT",
          contenu: `<p>Le transformateur abaisse la tension, par exemple de 20 kV à 410 V à vide (pour 400 V en charge). Sa <strong>plaque signalétique</strong> indique la puissance (en kVA), les tensions primaire et secondaire, le couplage et le type de refroidissement.</p>
<ul>
<li><strong>Transformateur immergé</strong> : bobinages dans un bain d'huile (minérale ou végétale) qui isole et refroidit. Il est souvent équipé d'un bloc de protection qui surveille gaz, pression, température et niveau d'huile, et placé au-dessus d'un dispositif de rétention. Les appareils anciens peuvent contenir des PCB (pyralène), dont la combustion produit des fumées très toxiques.</li>
<li><strong>Transformateur sec</strong> : bobinages enrobés dans une résine. Il convient aux bâtiments recevant du public ou aux immeubles, car il présente un risque d'incendie plus faible.</li>
</ul>
<p>Un transformateur fonctionne <strong>dans les deux sens</strong> : alimenté par son côté BT (groupe électrogène, installation photovoltaïque, autre transformateur mis en parallèle), il produit de la HT sur ses bornes HTA. Après la coupure, ses bornes restent dangereuses tant que la consignation n'est pas achevée des deux côtés.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la surface d'un transformateur sec, recouverte de résine, n'est pas une protection contre le contact. Les bobinages enrobés d'un transformateur sous tension se comportent comme des pièces nues : on ne les touche pas et on respecte les distances.</div>`
        },
        {
          titre: "Lire un schéma unifilaire",
          contenu: `<p>Le <strong>schéma unifilaire</strong> représente un circuit triphasé par un seul trait. Il est affiché dans le poste et doit être <strong>à jour</strong>. On y lit :</p>
<ul>
<li>les arrivées et leur origine (nom du poste amont, numéro du départ) ;</li>
<li>le jeu de barres, souvent figuré par un trait épais horizontal ;</li>
<li>les appareils de coupure, chacun avec son repère : sectionneur, interrupteur, disjoncteur, fusibles, sectionneur de terre ;</li>
<li>les transformateurs (deux cercles entrelacés) avec leurs tensions ;</li>
<li>les autres sources possibles : groupe électrogène, production photovoltaïque, liaison avec un autre poste.</li>
</ul>
<p>Avant toute manœuvre ou consignation, l'opérateur s'en sert pour la <strong>pré-identification</strong> : il suit le trait depuis l'ouvrage à consigner jusqu'à <strong>toutes</strong> ses sources, et note chaque appareil à ouvrir. Sur le terrain, il vérifie que les repères des cellules et l'état réel des appareils correspondent au schéma.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un schéma faux ou non mis à jour après une modification est à l'origine d'erreurs de consignation graves. Toute différence entre le schéma et l'installation est signalée au chargé d'exploitation, et l'opération est suspendue jusqu'à clarification.</div>`
        }
      ],
      points_cles: [
        "HTB : transport et répartition (400, 225, 90, 63 kV) ; HTA : distribution, le plus souvent 20 kV",
        "Une tension se donne entre phases : sur un réseau 20 kV, environ 11,5 kV entre phase et terre",
        "Une ligne aérienne HT est en conducteurs nus ; elle peut être réenclenchée automatiquement",
        "Un câble souterrain est isolé mais invisible : identification certaine obligatoire",
        "Coupure d'artère : un câble ou un jeu de barres peut être alimenté par deux côtés",
        "Cellules : arrivée, protection générale, protection transformateur, comptage (TC et TT)",
        "Un transformateur alimenté par le côté BT produit de la HT sur son côté HTA",
        "Le schéma unifilaire à jour sert à repérer toutes les sources avant toute opération"
      ]
    }
  );

  P.questions.push(
    { id: "HT-101", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "Les lignes de 225 kV et de 400 kV appartiennent :", options: ["Au réseau de transport HTB", "Au réseau de distribution HTA", "Au réseau BT"], bonnes: [0],
      explication: "Au-delà de 50 kV, on est en HTB. Les lignes de 225 et 400 kV forment le réseau de transport et d'interconnexion." },
    { id: "HT-102", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "Où se fait le passage de la HTB à la HTA ?", options: ["Dans le TGBT d'une usine", "Dans une boîte de jonction de câble", "Dans un poste source"], bonnes: [2],
      explication: "Le poste source abaisse la HTB (63 ou 90 kV par exemple) en HTA pour le réseau de distribution." },
    { id: "HT-103", chapitre: "ht-ouvrages-reseaux", domaine: "HT", situation: "Le poste de livraison de votre usine est alimenté en 20 kV.",
      q: "Quelle est, environ, la tension entre une phase et la terre ?", options: ["230 V", "11 500 V", "20 000 V"], bonnes: [1],
      explication: "Une tension se désigne entre phases. Entre phase et terre, on divise par racine de 3 : environ 11,5 kV, ce qui reste de la haute tension." },
    { id: "HT-104", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "Les conducteurs d'une ligne aérienne HTA sont :", options: ["Nus, isolés des supports par des isolateurs", "Isolés par une gaine épaisse", "Toujours hors tension la nuit"], bonnes: [0],
      explication: "Les lignes aériennes sont en conducteurs nus : toute leur longueur est une pièce nue sous tension qui crée des zones de voisinage." },
    { id: "HT-105", chapitre: "ht-ouvrages-reseaux", domaine: "HT", situation: "Une ligne HTA vient de déclencher sur défaut. Plus aucune tension n'est présente depuis quelques secondes.",
      q: "Que faut-il considérer ?", options: ["La ligne peut être réenclenchée automatiquement à tout moment", "La ligne est hors tension, on peut s'en approcher", "La ligne reste sous tension tant que l'exploitant n'a pas attesté le contraire"], bonnes: [0, 2],
      explication: "Beaucoup de lignes HTA sont équipées de réenclencheurs automatiques. Une ligne qui a déclenché n'est ni séparée, ni condamnée, ni à la terre." },
    { id: "HT-106", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "Sur une ligne aérienne, une longue chaîne d'isolateurs indique en général :", options: ["Une ligne basse tension", "Une ligne de télécommunication", "Une tension élevée"], bonnes: [2],
      explication: "Le nombre et la taille des isolateurs augmentent avec la tension. Mais pour connaître la tension exacte, on se renseigne auprès de l'exploitant." },
    { id: "HT-107", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "Un câble HTA souterrain comporte :", options: ["Une âme conductrice", "Un isolant synthétique", "Un écran métallique relié à la terre", "Aucune protection : il est nu dans le sol"], bonnes: [0, 1, 2],
      explication: "Le câble HTA est isolé, avec un écran métallique mis à la terre aux extrémités. Il est raccordé par des jonctions et des extrémités." },
    { id: "HT-108", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "Un poste HTA/BT raccordé en coupure d'artère :", options: ["N'a qu'une seule arrivée", "Est inséré dans une boucle, avec une cellule d'arrivée et une cellule de départ", "Ne peut jamais être réalimenté"], bonnes: [1],
      explication: "En coupure d'artère, le poste est inséré dans une boucle HTA. Le câble peut être alimenté par l'un ou l'autre côté selon les manœuvres de l'exploitant." },
    { id: "HT-109", chapitre: "ht-ouvrages-reseaux", domaine: "HT", situation: "Un câble HTA relie deux postes d'une boucle en coupure d'artère. La boucle est ouverte dans le poste n° 2.",
      q: "Pour consigner ce câble, l'ouverture de la cellule départ du poste n° 1 suffit-elle ?", options: ["Oui, la boucle est déjà ouverte au poste n° 2", "Non, l'appareil du poste n° 2 doit lui aussi être ouvert et condamné"], bonnes: [1],
      explication: "La boucle peut être refermée à tout moment par l'exploitant. Le câble doit être séparé et condamné à ses deux extrémités." },
    { id: "HT-110", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "La cellule de protection générale d'un poste de livraison contient en général :", options: ["Un disjoncteur avec relais de protection ou un combiné interrupteur-fusibles", "Le compteur d'énergie", "Le tableau BT"], bonnes: [0],
      explication: "La protection générale sépare l'installation du réseau en cas de défaut. Le comptage et le TGBT sont ailleurs." },
    { id: "HT-111", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "La cellule de comptage HTA contient :", options: ["Des transformateurs de courant (TC)", "Le transformateur de puissance HTA/BT", "Des transformateurs de tension (TT)"], bonnes: [0, 2],
      explication: "Le comptage utilise des TC et des TT qui ramènent courants et tensions à des valeurs mesurables par le compteur." },
    { id: "HT-112", chapitre: "ht-ouvrages-reseaux", domaine: "HT", situation: "Sur une cellule HTA, le voyant de présence de tension est éteint.",
      q: "Vous en déduisez :", options: ["Que la cellule est consignée", "Que vous pouvez ouvrir le compartiment câbles", "Rien de certain : le voyant peut être en panne, et seule la procédure de consignation permet de travailler"], bonnes: [2],
      explication: "Un voyant renseigne l'exploitant mais ne remplace ni la séparation, ni la condamnation, ni la VAT, ni la MALT-CC." },
    { id: "HT-113", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "Dans un transformateur immergé, l'huile sert à :", options: ["Isoler les bobinages", "Refroidir les bobinages", "Lubrifier le changeur de prises uniquement"], bonnes: [0, 1],
      explication: "L'huile isole et refroidit. C'est aussi un combustible : d'où la rétention et les protections contre l'incendie." },
    { id: "HT-114", chapitre: "ht-ouvrages-reseaux", domaine: "HT", situation: "Dans un poste, un transformateur sec est en service. Ses bobinages sont recouverts de résine.",
      q: "Peut-on toucher la résine des bobinages ?", options: ["Oui, la résine est un isolant", "Non, ils se comportent comme des pièces nues sous tension"], bonnes: [1],
      explication: "La résine n'assure pas la protection contre le contact. Un transformateur sec sous tension se traite comme une pièce nue : distances et protections." },
    { id: "HT-115", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "Un transformateur HTA/BT dont la cellule HTA est ouverte peut-il présenter de la haute tension sur ses bornes HTA ?", options: ["Non, c'est impossible", "Oui, s'il est réalimenté par son côté BT"], bonnes: [1],
      explication: "Un transformateur fonctionne dans les deux sens : un groupe électrogène ou une production photovoltaïque raccordée au TGBT peut faire apparaître de la HT côté HTA." },
    { id: "HT-116", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "Sur un schéma unifilaire, un circuit triphasé est représenté par :", options: ["Trois traits", "Un seul trait", "Quatre traits avec le neutre"], bonnes: [1],
      explication: "C'est le principe de l'unifilaire : un trait par circuit, quel que soit le nombre de conducteurs." },
    { id: "HT-117", chapitre: "ht-ouvrages-reseaux", domaine: "HT", situation: "Avant une consignation, vous constatez que le schéma affiché dans le poste ne correspond pas aux cellules installées.",
      q: "Vous :", options: ["Suspendez l'opération", "Prévenez le chargé d'exploitation", "Suivez l'installation réelle sans rien dire", "Suivez le schéma, il fait foi"], bonnes: [0, 1],
      explication: "Un schéma faux est une cause majeure d'erreur de consignation. On s'arrête et on fait clarifier par le chargé d'exploitation." },
    { id: "HT-118", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "La pré-identification d'un ouvrage HT consiste à :", options: ["Repérer sur le schéma l'ouvrage et toutes ses sources d'alimentation", "Vérifier l'absence de tension sur les câbles", "Poser les pancartes de condamnation"], bonnes: [0],
      explication: "La pré-identification se fait sur le schéma et les documents. VAT et condamnation sont des étapes ultérieures." },
    { id: "HT-119", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "Dans un poste de livraison, les cellules d'arrivée du réseau public :", options: ["Peuvent être manœuvrées librement par tout électricien du site", "N'ont pas de sectionneur de terre", "Relèvent des procédures du gestionnaire du réseau de distribution, selon la répartition prévue au raccordement"], bonnes: [2],
      explication: "La limite d'exploitation entre le gestionnaire du réseau et l'entreprise est fixée par les documents de raccordement et les consignes du poste." },
    { id: "HT-120", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "Les anciens transformateurs au PCB (pyralène) présentent, en cas d'incendie, un risque particulier :", options: ["Aucun, le PCB est ininflammable donc sans danger", "Des fumées très toxiques"], bonnes: [1],
      explication: "La combustion ou la décomposition des PCB produit des composés très toxiques. On n'approche pas et on signale la présence de PCB aux secours." },
    { id: "HT-121", chapitre: "ht-ouvrages-reseaux", domaine: "HT",
      q: "Quelles sources peuvent alimenter le jeu de barres d'un poste HTA/BT ?", options: ["L'arrivée normale du réseau", "Une arrivée de secours (double dérivation)", "Un groupe électrogène raccordé côté BT, à travers un transformateur", "Aucune autre que l'arrivée normale"], bonnes: [0, 1, 2],
      explication: "Toutes les sources possibles se lisent sur le schéma : arrivées, secours, retours par les transformateurs. La consignation les traite toutes." },
    { id: "HT-122", chapitre: "ht-ouvrages-reseaux", domaine: "HT", situation: "Par une journée très chaude, une ligne HTA très chargée passe au-dessus d'un parking.",
      q: "Par rapport à une journée froide, les conducteurs sont en général :", options: ["Plus hauts", "Plus bas", "À la même hauteur"], bonnes: [1],
      explication: "Les conducteurs se dilatent en chauffant : la flèche augmente et la ligne descend. Les distances doivent être appréciées dans la position la plus défavorable." }
  );
})();

/* ───────────── Thème HT — Acteurs, documents et échanges d'information ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "ht-acteurs-documents",
      theme: "HT",
      parcours: ["btht"],
      titre: "Acteurs, documents et échanges d'information en haute tension",
      duree: 25,
      objectifs: [
        "Situer le rôle de chaque acteur d'une opération HT",
        "Savoir qui rédige, qui reçoit et à quoi sert chaque document",
        "Transmettre et recevoir un message collationné",
        "Organiser les échanges quand plusieurs équipes travaillent sur un même ouvrage",
        "Savoir quand une opération doit être suspendue faute d'information"
      ],
      sections: [
        {
          titre: "Le chargé d'exploitation électrique en HT",
          contenu: `<p>Tout ouvrage HT a un <strong>chargé d'exploitation électrique</strong> : la personne désignée par l'employeur (ou par le propriétaire de l'ouvrage) qui en connaît l'état et qui décide de ce qui s'y fait. En HT, son rôle est central :</p>
<ul>
<li>il tient à jour le <strong>schéma</strong> et les consignes du poste ;</li>
<li>il <strong>autorise l'accès</strong> aux locaux et emplacements d'accès réservé ;</li>
<li>il prépare les opérations, délivre les <strong>autorisations de travail</strong> et les <strong>instructions de sécurité</strong> ;</li>
<li>il décide des <strong>manœuvres d'exploitation</strong> et de la <strong>remise sous tension</strong> ;</li>
<li>il fait le lien avec les autres exploitants, en particulier le <strong>gestionnaire du réseau de distribution</strong> pour les arrivées d'un poste de livraison.</li>
</ul>
<p>Le chargé d'exploitation peut cumuler d'autres rôles s'il en a l'habilitation (chargé de consignation HC par exemple). Lorsqu'une entreprise extérieure intervient, c'est lui qui lui transmet les informations sur l'ouvrage et les mesures de sécurité.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> sur un ouvrage HT, aucune manœuvre, aucune consignation et aucun travail ne se fait sans l'accord du chargé d'exploitation, et c'est lui qui décide de la remise sous tension.</div>`
        },
        {
          titre: "Qui fait quoi dans une opération HT ?",
          contenu: `<table>
<thead><tr><th>Acteur</th><th>Symbole</th><th>Rôle</th><th>Document reçu ou remis</th></tr></thead>
<tbody>
<tr><td>Chargé de consignation</td><td>HC</td><td>Consigne et déconsigne l'ouvrage ; réalise les manœuvres de consignation</td><td>Remet l'attestation de consignation ; reçoit l'avis de fin de travail</td></tr>
<tr><td>Chargé de travaux</td><td>H2 ou H2V</td><td>Dirige les travaux et l'équipe, délimite la zone de travail, surveille</td><td>Reçoit l'attestation de consignation ; remet l'avis de fin de travail</td></tr>
<tr><td>Exécutant électricien</td><td>H1 ou H1V</td><td>Réalise les travaux sur instruction du chargé de travaux</td><td>Reçoit les consignes orales ou écrites de son chargé de travaux</td></tr>
<tr><td>Chargé d'opérations spécifiques</td><td>HE + attribut (Manœuvre, Mesurage, Vérification, Essai)</td><td>Réalise l'opération spécifique prévue sur son titre</td><td>Reçoit une instruction de sécurité, une fiche de manœuvre ou un ordre de l'exploitant</td></tr>
<tr><td>Surveillant de sécurité électrique</td><td>Personne habilitée, désignée</td><td>Surveille en permanence des personnes au voisinage ou non habilitées</td><td>Reçoit les consignes du chargé de travaux ou de chantier</td></tr>
<tr><td>Chargé de chantier non électricien</td><td>H0 ou H0V chargé de chantier</td><td>Dirige des travaux d'ordre non électrique dans l'environnement HT</td><td>Reçoit une autorisation de travail ou des consignes écrites</td></tr>
</tbody>
</table>
<p>Une même personne peut tenir plusieurs rôles si elle détient les habilitations correspondantes : un électricien habilité H2V et HC peut consigner l'ouvrage puis diriger les travaux. Dans ce cas, les documents sont quand même établis, ou la consignation est tracée selon les instructions de l'employeur.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le chargé de travaux H2V n'est pas automatiquement chargé de consignation. Sans l'habilitation HC, il ne réalise pas la consignation de l'ouvrage ; dans une consignation en deux étapes, il ne fait que la seconde étape qui lui revient.</div>`
        },
        {
          titre: "Les documents écrits",
          contenu: `<p>En HT, les opérations s'appuient sur des documents <strong>écrits</strong>, datés et signés, qui disent précisément sur quel ouvrage, par qui et dans quelles conditions on opère.</p>
<table>
<thead><tr><th>Document</th><th>Établi par</th><th>Destinataire</th><th>Contenu essentiel</th></tr></thead>
<tbody>
<tr><td>Autorisation de travail</td><td>Chargé d'exploitation</td><td>Chargé de travaux ou de chantier</td><td>Ouvrage, nature des travaux, limites, conditions de sécurité</td></tr>
<tr><td>Instruction de sécurité</td><td>Employeur ou chargé d'exploitation</td><td>Personne qui réalise l'opération</td><td>Mesures de sécurité propres à une opération, un lieu ou un ouvrage</td></tr>
<tr><td>Fiche de manœuvre</td><td>Chargé d'exploitation</td><td>Opérateur (HC, HE Manœuvre)</td><td>Liste ordonnée des manœuvres, appareils et positions attendues</td></tr>
<tr><td>Attestation de consignation pour travaux</td><td>Chargé de consignation HC</td><td>Chargé de travaux H2 ou H2V</td><td>Ouvrage consigné, limites, emplacement des MALT-CC</td></tr>
<tr><td>Attestation de première étape de consignation</td><td>Chargé de consignation HC</td><td>Chargé de travaux</td><td>Séparation et condamnation réalisées ; le chargé de travaux achève la consignation</td></tr>
<tr><td>Avis de fin de travail</td><td>Chargé de travaux</td><td>Chargé de consignation ou chargé d'exploitation</td><td>Travaux terminés ou interrompus, personnel et matériel retirés, MALT-CC de travail déposées</td></tr>
</tbody>
</table>
<p>D'autres documents peuvent exister selon les entreprises : ordre de travail, bon d'accès, carnet de prescriptions du poste, consignes affichées. Les modèles sont fixés par l'employeur ou l'exploitant ; ce qui compte à l'examen, c'est le <strong>sens</strong> de circulation de chaque document.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> une fois l'avis de fin de travail remis, plus personne de l'équipe ne doit toucher l'ouvrage, même pour « une dernière vérification » : il peut être remis sous tension à tout moment.</div>`
        },
        {
          titre: "Le message collationné et l'enregistrement",
          contenu: `<p>Lorsque les personnes ne sont pas au même endroit (le chargé de consignation au poste, le chargé de travaux à l'autre bout d'un câble), les informations sont échangées par <strong>message collationné</strong>, par téléphone ou radio. La méthode supprime les malentendus :</p>
<ol>
<li>L'émetteur rédige son message par écrit, puis le transmet.</li>
<li>Le récepteur l'écrit au fur et à mesure.</li>
<li>Le récepteur <strong>relit intégralement</strong> le message à l'émetteur.</li>
<li>L'émetteur vérifie et <strong>confirme</strong> que la relecture est exacte ; sinon on recommence.</li>
<li>Le message reçoit un <strong>numéro</strong> ou une mention d'<strong>enregistrement</strong>, avec l'heure et les noms : il a alors la même valeur qu'un document écrit remis en main propre.</li>
</ol>
<p>L'enregistrement (carnet de messages numérotés, registre, ou enregistrement sonore selon l'organisation) garde la trace de qui a dit quoi et quand. Il permet de retrouver, en fin d'opération, que tous les avis de fin de travail ont bien été reçus.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> « Ici Martin, chargé de consignation, poste Nord. Câble départ 4 vers poste Sud consigné, MALT-CC posées aux deux extrémités. Attestation de consignation pour travaux numéro 12, 9 h 40. » Le chargé de travaux écrit, relit mot pour mot ; Martin confirme. Le travail peut alors commencer.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un simple appel du type « c'est bon, tu peux y aller » n'est pas un message collationné. Sans écriture, relecture, confirmation et enregistrement, il ne vaut pas attestation.</div>`
        },
        {
          titre: "Les échanges pendant l'opération",
          contenu: `<p>Une opération HT suit une chaîne d'informations qu'on ne court-circuite pas :</p>
<ol>
<li>Le chargé d'exploitation prépare et délivre l'autorisation de travail.</li>
<li>Le chargé de consignation HC consigne et remet l'<strong>attestation de consignation</strong>.</li>
<li>Le chargé de travaux vérifie sur place, délimite et balise la zone de travail, puis donne ses consignes aux exécutants.</li>
<li>En fin de travaux, il fait retirer le personnel et le matériel, dépose ses MALT-CC de travail, et remet l'<strong>avis de fin de travail</strong>.</li>
<li>Le chargé de consignation déconsigne et rend l'ouvrage au chargé d'exploitation, qui décide de la remise sous tension.</li>
</ol>
<p>Quand <strong>plusieurs équipes</strong> travaillent sur le même ouvrage consigné, chaque chargé de travaux reçoit sa propre attestation et remet son propre avis de fin de travail. Le chargé de consignation ne déconsigne qu'après avoir reçu <strong>tous</strong> les avis.</p>
<p>Si une information manque, est contradictoire ou si la situation réelle ne correspond pas aux documents (repère différent, appareil dans une autre position, nouvelle source), on <strong>suspend</strong> l'opération et on interroge l'émetteur ou le chargé d'exploitation.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> attestation de consignation du HC vers le chargé de travaux avant ; avis de fin de travail du chargé de travaux vers le HC après ; une attestation et un avis par chargé de travaux.</div>`
        }
      ],
      points_cles: [
        "Le chargé d'exploitation décide de tout ce qui se fait sur l'ouvrage, y compris la remise sous tension",
        "HC consigne et déconsigne ; H2 ou H2V dirige ; H1 ou H1V exécute ; HE réalise l'opération spécifique de son titre",
        "Le chargé de travaux H2V ne consigne pas sans l'habilitation HC",
        "Fiche de manœuvre : liste ordonnée des manœuvres, établie par l'exploitant",
        "Attestation de consignation : HC vers chargé de travaux ; avis de fin de travail : chargé de travaux vers HC",
        "Message collationné : écrit, transmis, relu intégralement, confirmé, enregistré",
        "Plusieurs équipes : une attestation et un avis de fin de travail par chargé de travaux",
        "Information manquante ou contradictoire : on suspend et on interroge"
      ]
    }
  );

  P.questions.push(
    { id: "HT-123", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "Qui décide de la remise sous tension d'un ouvrage HT après des travaux ?", options: ["Le chargé d'exploitation électrique", "L'exécutant H1V qui a terminé", "N'importe quel électricien habilité HE Manœuvre"], bonnes: [0],
      explication: "Le chargé de consignation déconsigne et rend l'ouvrage ; la décision de remise sous tension appartient au chargé d'exploitation." },
    { id: "HT-124", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "Le chargé d'exploitation électrique d'un ouvrage HT :", options: ["Autorise l'accès aux locaux réservés", "Délivre les autorisations de travail", "Tient à jour le schéma et les consignes du poste", "Réalise obligatoirement lui-même tous les travaux"], bonnes: [0, 1, 2],
      explication: "Il organise et autorise ; il ne fait pas lui-même les travaux, confiés à des chargés de travaux et des exécutants habilités." },
    { id: "HT-125", chapitre: "ht-acteurs-documents", domaine: "HT", situation: "Vous êtes habilité H2V, sans HC. Votre chef vous demande de consigner seul la cellule transformateur avant votre chantier.",
      q: "Vous :", options: ["Consignez, votre H2V suffit", "Refusez la consignation : elle demande l'habilitation HC", "Demandez l'intervention d'un chargé de consignation HC"], bonnes: [1, 2],
      explication: "Le H2V dirige des travaux ; la consignation d'un ouvrage HT relève du HC. Sans ce symbole, on fait appel à un chargé de consignation." },
    { id: "HT-126", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "L'exécutant H1V :", options: ["Choisit lui-même les mesures de sécurité du chantier", "Peut délivrer l'avis de fin de travail", "Réalise les travaux sur instruction de son chargé de travaux"], bonnes: [2],
      explication: "L'exécutant agit sous la direction du chargé de travaux, qui fixe les mesures de sécurité et remet l'avis de fin de travail." },
    { id: "HT-127", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "L'attestation de consignation pour travaux est remise :", options: ["Par le chargé de travaux au chargé de consignation", "Par le chargé de consignation au chargé de travaux", "Par le chargé d'exploitation à l'exécutant"], bonnes: [1],
      explication: "Le HC atteste que l'ouvrage est consigné et la remet au chargé de travaux avant le début des travaux." },
    { id: "HT-128", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "L'avis de fin de travail indique :", options: ["Que les travaux sont terminés ou interrompus", "Que le personnel et le matériel sont retirés", "Que l'ouvrage est déjà remis sous tension", "Que les MALT-CC de travail sont déposées"], bonnes: [0, 1, 3],
      explication: "L'avis de fin de travail permet au HC de déconsigner. La remise sous tension n'intervient qu'après la déconsignation, sur décision de l'exploitant." },
    { id: "HT-129", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "La fiche de manœuvre est :", options: ["La liste ordonnée des manœuvres à réaliser et des positions attendues", "Le compte rendu des travaux réalisés", "L'attestation remise au chargé de travaux"], bonnes: [0],
      explication: "Établie par l'exploitant, elle indique dans quel ordre manœuvrer quels appareils, et quelle position on doit obtenir." },
    { id: "HT-130", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "L'instruction de sécurité :", options: ["Est établie par l'employeur ou le chargé d'exploitation", "Fixe les mesures de sécurité propres à une opération ou à un lieu", "Remplace l'habilitation"], bonnes: [0, 1],
      explication: "Elle précise les mesures à appliquer pour une opération donnée. Elle ne remplace jamais l'habilitation de la personne qui opère." },
    { id: "HT-131", chapitre: "ht-acteurs-documents", domaine: "HT", situation: "Le chargé de consignation est au poste ; vous êtes chargé de travaux à 2 km, à l'autre extrémité du câble.",
      q: "Comment l'attestation de consignation peut-elle vous être transmise ?", options: ["Par un SMS « c'est bon »", "Par un collègue qui passe vous dire que c'est consigné", "Par message collationné"], bonnes: [2],
      explication: "À distance, l'attestation est transmise par message collationné : écrit, relu, confirmé et enregistré." },
    { id: "HT-132", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "Lors d'un message collationné, le récepteur :", options: ["Écrit le message au fur et à mesure", "Relit intégralement le message à l'émetteur", "Se contente de répondre « reçu »"], bonnes: [0, 1],
      explication: "Le collationnement repose sur l'écriture et la relecture complète. L'émetteur confirme ensuite que la relecture est exacte." },
    { id: "HT-133", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "Que se passe-t-il si la relecture d'un message collationné comporte une erreur ?", options: ["On corrige le seul mot faux et on continue", "On recommence la transmission jusqu'à une relecture exacte confirmée", "Le message est valable quand même"], bonnes: [1],
      explication: "Le message n'a de valeur qu'une fois relu exactement et confirmé par l'émetteur." },
    { id: "HT-134", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "L'enregistrement d'un message (numéro, heure, noms) sert à :", options: ["Garder la trace des échanges", "Vérifier en fin d'opération que tous les avis ont été reçus", "Rien, c'est une formalité"], bonnes: [0, 1],
      explication: "L'enregistrement donne au message la valeur d'un document écrit et permet de contrôler la chaîne des avis et attestations." },
    { id: "HT-135", chapitre: "ht-acteurs-documents", domaine: "HT", situation: "Deux chargés de travaux, avec leurs équipes, travaillent sur le même ouvrage HT consigné.",
      q: "Combien d'attestations de consignation le HC remet-il ?", options: ["Une à chaque chargé de travaux", "Une seule, au plus ancien"], bonnes: [0],
      explication: "Chaque chargé de travaux reçoit sa propre attestation et remet son propre avis de fin de travail." },
    { id: "HT-136", chapitre: "ht-acteurs-documents", domaine: "HT", situation: "Trois équipes travaillent sur un ouvrage HT consigné. Le HC a reçu deux avis de fin de travail.",
      q: "Peut-il déconsigner ?", options: ["Non, il attend le troisième avis", "Oui, la majorité a terminé", "Oui, s'il ne voit personne sur l'ouvrage"], bonnes: [0],
      explication: "La déconsignation n'est possible qu'après réception de tous les avis de fin de travail. Ne voir personne ne prouve rien." },
    { id: "HT-137", chapitre: "ht-acteurs-documents", domaine: "HT", situation: "Vous avez remis l'avis de fin de travail. Un exécutant veut resserrer une dernière cosse sur la cellule.",
      q: "C'est :", options: ["Possible si c'est rapide", "Possible s'il porte ses gants isolants", "Interdit : l'ouvrage peut être remis sous tension à tout moment"], bonnes: [2],
      explication: "Après l'avis de fin de travail, l'ouvrage n'est plus sous la protection de la consignation pour l'équipe. Il faudrait une nouvelle consignation." },
    { id: "HT-138", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "L'autorisation de travail est délivrée par :", options: ["Le chargé de travaux", "Le chargé d'exploitation", "L'exécutant"], bonnes: [1],
      explication: "Le chargé d'exploitation autorise les travaux sur ou au voisinage de son ouvrage, en précisant les conditions." },
    { id: "HT-139", chapitre: "ht-acteurs-documents", domaine: "HT", situation: "Sur le lieu de travail, le repère du câble ne correspond pas à celui indiqué sur l'attestation de consignation.",
      q: "Le chargé de travaux :", options: ["Suspend l'opération", "Interroge le chargé de consignation", "Commence par le câble qui lui semble le bon"], bonnes: [0, 1],
      explication: "Toute incohérence entre les documents et le terrain impose d'arrêter et de faire clarifier. On ne travaille jamais sur un ouvrage incertain." },
    { id: "HT-140", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "Le surveillant de sécurité électrique :", options: ["Fait d'autres tâches en même temps pour gagner du temps", "Est habilité et désigné, et exerce une surveillance permanente", "Peut faire arrêter le travail"], bonnes: [1, 2],
      explication: "La surveillance est permanente : le surveillant ne fait rien d'autre et peut arrêter le travail s'il constate un danger." },
    { id: "HT-141", chapitre: "ht-acteurs-documents", domaine: "HT",
      q: "Une équipe de peintres doit intervenir dans un poste HTA dont une partie reste sous tension. Qui les dirige ?", options: ["Un chargé de chantier habilité H0 ou H0V selon la zone", "Un exécutant H1", "Personne, ils se débrouillent"], bonnes: [0],
      explication: "Les travaux d'ordre non électrique sont dirigés par un chargé de chantier H0 (zone 1) ou H0V (zone 2), avec les consignes du chargé d'exploitation." },
    { id: "HT-142", chapitre: "ht-acteurs-documents", domaine: "HT", situation: "Vous êtes habilité HC et H2V. Vous consignez vous-même la cellule puis dirigez les travaux.",
      q: "Est-ce possible ?", options: ["Non, il faut toujours deux personnes différentes", "Oui, si vous détenez les deux habilitations, la consignation étant tracée selon les instructions"], bonnes: [1],
      explication: "Une même personne peut cumuler les rôles si elle détient les habilitations. La consignation reste tracée selon les instructions de l'employeur." }
  );
})();

/* ───────────── Thème HT — Consignation HT approfondie ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "ht-consignation-approfondie",
      theme: "HT",
      parcours: ["btht"],
      titre: "Consignation HT approfondie : étapes, câbles souterrains et déconsignation",
      duree: 28,
      objectifs: [
        "Répartir les opérations d'une consignation HT en une ou en deux étapes",
        "Distinguer séparation visible et séparation certaine",
        "Réaliser condamnation et identification de façon fiable",
        "Prendre en compte les risques propres aux câbles souterrains",
        "Dérouler la déconsignation dans le bon ordre"
      ],
      sections: [
        {
          titre: "Consignation en une étape ou en deux étapes",
          contenu: `<p>La consignation d'un ouvrage HT comporte toujours les mêmes opérations : pré-identification, séparation, condamnation, identification, VAT, MALT-CC. Ce qui change, c'est <strong>qui</strong> les réalise.</p>
<table>
<thead><tr><th>Opération</th><th>En une étape</th><th>En deux étapes</th></tr></thead>
<tbody>
<tr><td>Pré-identification</td><td>Chargé de consignation HC</td><td>HC (1re étape)</td></tr>
<tr><td>Séparation de toutes les sources</td><td>HC</td><td>HC (1re étape)</td></tr>
<tr><td>Condamnation</td><td>HC</td><td>HC (1re étape)</td></tr>
<tr><td>Identification sur le lieu de travail</td><td>HC</td><td>Chargé de travaux (2e étape)</td></tr>
<tr><td>VAT</td><td>HC</td><td>Chargé de travaux (2e étape), et selon les instructions par le HC aux points de séparation</td></tr>
<tr><td>MALT-CC</td><td>HC</td><td>Chargé de travaux au plus près de la zone de travail (2e étape), le HC pouvant en poser aux points de séparation</td></tr>
<tr><td>Document remis</td><td>Attestation de consignation pour travaux</td><td>Attestation de première étape de consignation</td></tr>
</tbody>
</table>
<p>La consignation en deux étapes est utile quand le lieu de travail est <strong>éloigné</strong> des points de séparation (câble entre deux postes, ligne aérienne). Le chargé de travaux qui réalise la seconde étape doit être formé et habilité pour cela, et disposer du matériel adapté (détecteur HT, perche, dispositifs de MALT-CC).</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> après une attestation de première étape, l'ouvrage <strong>n'est pas encore consigné</strong> sur le lieu de travail. Personne ne touche les conducteurs avant que le chargé de travaux ait identifié, vérifié l'absence de tension et posé ses MALT-CC.</div>`
        },
        {
          titre: "Séparation visible ou certaine",
          contenu: `<p>Séparer, c'est isoler l'ouvrage de <strong>toutes</strong> ses sources de tension par un intervalle isolant sûr. En HT, la séparation doit être <strong>visible</strong> ou <strong>certaine</strong> :</p>
<ul>
<li><strong>séparation visible</strong> (ou pleinement apparente) : on voit directement l'ouverture des contacts, par exemple un sectionneur ouvert dans un poste ouvert, des bretelles de ligne aérienne déposées, un appareil débroché sorti de son logement ;</li>
<li><strong>séparation certaine</strong> : les contacts ne sont pas visibles (cellule sous enveloppe métallique), mais la position est garantie par un <strong>indicateur de position</strong> fiable, lié mécaniquement aux contacts, conforme aux règles de construction de l'appareil.</li>
</ul>
<p>On sépare avec des appareils prévus pour la séparation (sectionneur, interrupteur-sectionneur, appareil débrochable). Un disjoncteur seul, sans fonction de sectionnement, ne suffit pas. L'ordre reste le même : on coupe d'abord le courant de charge avec l'appareil qui a le pouvoir de coupure, puis on ouvre l'appareil de sectionnement.</p>
<p>Les sources à séparer comprennent : les arrivées normales et de secours, les liaisons avec d'autres postes, les retours possibles par un transformateur depuis la BT, et les <strong>transformateurs de tension</strong> (TT) dont le secondaire pourrait être alimenté par erreur et renvoyer de la HT au primaire.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> séparation sur toutes les sources, par un appareil de sectionnement dont l'ouverture est visible ou garantie par un indicateur fiable.</div>`
        },
        {
          titre: "Condamnation et identification",
          contenu: `<p>La <strong>condamnation</strong> maintient l'appareil de séparation en position d'ouverture et signale qu'il ne doit pas être manœuvré. Elle comporte deux volets :</p>
<ul>
<li>une <strong>immobilisation</strong> matérielle : cadenas personnel ou de consignation, serrure, verrouillage à clé dont la clé est conservée par le chargé de consignation ;</li>
<li>une <strong>signalisation</strong> : pancarte « Ne pas manœuvrer, travaux » indiquant l'opération en cours.</li>
</ul>
<p>On condamne aussi les <strong>commandes à distance</strong> et automatismes (télécommande, réenclencheur, permutateur de source), sinon l'appareil pourrait se refermer sans qu'on le touche. Les sectionneurs de terre fermés peuvent eux aussi être condamnés en position fermée selon les instructions.</p>
<p>L'<strong>identification</strong> se fait <strong>sur le lieu de travail</strong> : il s'agit d'être certain que l'ouvrage sur lequel on va travailler est bien celui qui a été séparé. On s'appuie sur les repères des cellules, les étiquettes, les plans et le suivi physique du conducteur. Pour un câble souterrain, l'identification est particulièrement délicate (voir plus loin).</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> dans une cellule, l'étiquette indique « Départ TR2 ». Le chargé de consignation vérifie qu'il s'agit bien du câble qui part vers le transformateur 2 : repère sur le câble, cheminement, repère à l'arrivée sur le transformateur. Une étiquette seule, dans une installation modifiée, peut être fausse.</div>`
        },
        {
          titre: "VAT et MALT-CC : ordre et emplacement",
          contenu: `<p>La VAT et la MALT-CC suivent immédiatement l'identification, sur le même ouvrage et sans délai entre les deux :</p>
<ol>
<li>contrôle du détecteur HT avant usage ;</li>
<li>VAT sur <strong>chaque conducteur</strong>, au plus près de la zone de travail et sur chaque point où l'on posera une MALT-CC ;</li>
<li>contrôle du détecteur après usage ;</li>
<li>pose de la MALT-CC : raccordement à la terre d'abord, puis aux conducteurs à l'aide de la perche ;</li>
<li>vérification de la bonne tenue des pinces.</li>
</ol>
<p>La MALT-CC se place <strong>de part et d'autre</strong> de la zone de travail, c'est-à-dire sur tous les conducteurs qui y entrent. L'idéal est qu'elle soit <strong>visible</strong> depuis la zone de travail ; si les points de séparation sont loin, des dispositifs complémentaires sont posés au plus près. Ces dispositifs doivent supporter le courant de court-circuit de l'ouvrage.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> si le détecteur ne réagit pas au contrôle après la VAT, la vérification n'a aucune valeur : il faut changer de détecteur et recommencer la VAT.</div>`
        },
        {
          titre: "Le cas des câbles souterrains",
          contenu: `<p>Les câbles HT enterrés cumulent plusieurs pièges :</p>
<ul>
<li><strong>Identification difficile</strong> : plusieurs câbles identiques dans la même tranchée. On utilise les plans, les repères posés sur les câbles et un appareil d'identification (injection d'un signal à une extrémité, détection sur le câble). Avant de couper ou de percer un câble, les instructions de l'exploitant prévoient souvent un dispositif de <strong>piquage</strong> ou de coupure manœuvré à distance, qui met le câble à la terre et protège l'opérateur si, malgré tout, ce n'était pas le bon.</li>
<li><strong>Capacité résiduelle</strong> : un câble HT se comporte comme un condensateur. Après la séparation, il peut garder une charge dangereuse, d'autant plus que le câble est long. La MALT-CC l'écoule ; elle reste en place pendant toute la durée des travaux.</li>
<li><strong>Tensions induites</strong> : un câble posé à côté d'autres câbles ou d'une ligne en service peut recevoir une tension par induction, même s'il est séparé, voire jamais raccordé.</li>
<li><strong>Alimentation par les deux extrémités</strong> : sur un réseau bouclé, chaque extrémité est une source possible.</li>
<li><strong>Écran métallique</strong> : il est relié à la terre ; en cas de coupure d'un câble, sa continuité et sa mise à la terre doivent être traitées selon les instructions.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un câble séparé à ses deux extrémités et vérifié hors tension n'est pas consigné tant qu'il n'est pas mis à la terre et en court-circuit : la charge résiduelle et les tensions induites restent possibles.</div>`
        },
        {
          titre: "La déconsignation, dans l'ordre",
          contenu: `<p>La déconsignation est l'inverse de la consignation, et elle comporte ses propres risques : dès que les MALT-CC sont retirées, l'ouvrage doit être considéré <strong>sous tension</strong>.</p>
<table>
<thead><tr><th>Ordre</th><th>Qui</th><th>Opération</th></tr></thead>
<tbody>
<tr><td>1</td><td>Chargé de travaux</td><td>Fin des travaux, vérification, rangement, retrait du personnel et du matériel</td></tr>
<tr><td>2</td><td>Chargé de travaux</td><td>Dépose de ses MALT-CC de zone de travail : conducteurs d'abord, terre en dernier</td></tr>
<tr><td>3</td><td>Chargé de travaux</td><td>Remise de l'avis de fin de travail</td></tr>
<tr><td>4</td><td>Chargé de consignation</td><td>Vérification qu'il a reçu tous les avis de fin de travail</td></tr>
<tr><td>5</td><td>Chargé de consignation</td><td>Dépose de ses MALT-CC, ouverture des sectionneurs de terre</td></tr>
<tr><td>6</td><td>Chargé de consignation</td><td>Retrait des condamnations</td></tr>
<tr><td>7</td><td>Chargé d'exploitation</td><td>Décision de remise sous tension et manœuvres de remise en service</td></tr>
</tbody>
</table>
<div class="encart" data-type="danger"><strong>Attention :</strong> si un sectionneur de terre ou un dispositif de MALT-CC reste en place à la remise sous tension, on provoque un court-circuit franc, avec un arc violent. La déconsignation se fait donc avec la même rigueur que la consignation, en suivant la fiche de manœuvre.</div>`
        }
      ],
      points_cles: [
        "Une étape : le HC fait tout et remet l'attestation de consignation pour travaux",
        "Deux étapes : le HC sépare et condamne ; le chargé de travaux identifie, vérifie et met à la terre sur le lieu de travail",
        "Après une attestation de première étape, l'ouvrage n'est pas consigné sur le lieu de travail",
        "Séparation visible ou certaine, sur toutes les sources, y compris retours par transformateurs et TT",
        "Condamnation : immobilisation et signalisation, commandes à distance et automatismes compris",
        "Câble souterrain : identification certaine, capacité résiduelle, tensions induites, deux extrémités",
        "MALT-CC de part et d'autre de la zone de travail, visible si possible",
        "Déconsignation : tous les avis reçus, MALT-CC retirées, condamnations levées, puis décision de l'exploitant"
      ]
    }
  );

  P.questions.push(
    { id: "HT-143", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "Dans une consignation HT en une étape, qui réalise la MALT-CC ?", options: ["L'exécutant H1", "Le chargé d'exploitation, obligatoirement", "Le chargé de consignation HC"], bonnes: [2],
      explication: "En une étape, le HC réalise toutes les opérations, puis remet l'attestation de consignation pour travaux." },
    { id: "HT-144", chapitre: "ht-consignation-approfondie", domaine: "HT", situation: "Vous avez reçu une attestation de première étape de consignation pour un câble HTA. Vous arrivez sur la fouille.",
      q: "Que vous reste-t-il à faire avant de travailler ?", options: ["Rien, le câble est consigné", "Identifier le câble", "Vérifier l'absence de tension", "Poser la MALT-CC au plus près"], bonnes: [1, 2, 3],
      explication: "En deux étapes, le chargé de travaux achève la consignation sur le lieu de travail : identification, VAT, MALT-CC." },
    { id: "HT-145", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "La consignation en deux étapes est surtout utile quand :", options: ["Le travail dure moins d'une heure", "Le lieu de travail est éloigné des points de séparation", "Le chargé de travaux n'a pas de détecteur HT"], bonnes: [1],
      explication: "Elle permet de réaliser identification, VAT et MALT-CC sur place, loin du poste. Le chargé de travaux doit avoir le matériel nécessaire." },
    { id: "HT-146", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "Une séparation « certaine » dans une cellule sous enveloppe métallique repose sur :", options: ["Un indicateur de position fiable lié mécaniquement aux contacts", "L'extinction du voyant de présence de tension", "L'impression de l'opérateur que la manette a bien tourné"], bonnes: [0],
      explication: "Quand les contacts ne sont pas visibles, la position doit être garantie par un indicateur fiable, conforme aux règles de construction." },
    { id: "HT-147", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "Quelles situations réalisent une séparation visible ?", options: ["Un sectionneur ouvert dont on voit les contacts écartés", "Des bretelles de ligne aérienne déposées", "Un disjoncteur ouvert par son bouton, sans voir les contacts", "Un appareil débroché sorti de son logement"], bonnes: [0, 1, 3],
      explication: "On voit directement l'intervalle isolant. Un disjoncteur ouvert sans fonction de sectionnement ni indicateur fiable ne réalise pas la séparation." },
    { id: "HT-148", chapitre: "ht-consignation-approfondie", domaine: "HT", situation: "Un poste de comptage HTA comporte des transformateurs de tension (TT).",
      q: "Pourquoi les TT doivent-ils être pris en compte dans la séparation ?", options: ["Parce qu'ils consomment beaucoup d'énergie", "Ils n'ont pas à être pris en compte", "Parce qu'alimentés par leur secondaire, ils peuvent renvoyer de la HT au primaire"], bonnes: [2],
      explication: "Un TT est un petit transformateur : alimenté par erreur côté secondaire, il produit de la HT côté primaire. C'est une source à traiter." },
    { id: "HT-149", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "La condamnation d'un appareil de séparation comporte :", options: ["Une immobilisation (cadenas, serrure)", "Une signalisation (pancarte)", "La VAT", "La condamnation des commandes à distance"], bonnes: [0, 1, 3],
      explication: "On immobilise, on signale, et on neutralise télécommandes et automatismes. La VAT est une étape distincte." },
    { id: "HT-150", chapitre: "ht-consignation-approfondie", domaine: "HT", situation: "Le départ HTA à consigner est équipé d'un réenclencheur automatique et d'une télécommande depuis le poste de conduite.",
      q: "Que faut-il faire ?", options: ["Condamner l'appareil sur place seulement", "Neutraliser aussi la télécommande et l'automatisme selon les instructions", "Rien de plus, un réenclencheur ne referme jamais un appareil condamné"], bonnes: [1],
      explication: "Une commande à distance ou un automatisme pourrait refermer l'appareil. Ils doivent être neutralisés et signalés." },
    { id: "HT-151", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "L'identification de l'ouvrage se fait :", options: ["Sur le lieu de travail", "Uniquement sur le schéma, au bureau", "Après la MALT-CC, pour vérifier"], bonnes: [0],
      explication: "La pré-identification se fait sur le schéma ; l'identification se fait sur le lieu de travail, avant la VAT et la MALT-CC." },
    { id: "HT-152", chapitre: "ht-consignation-approfondie", domaine: "HT", situation: "Dans une tranchée, trois câbles HTA identiques sont posés côte à côte. Un seul est consigné.",
      q: "Pour l'identifier, vous utilisez :", options: ["Les plans et les repères posés sur les câbles", "Un appareil d'identification de câble", "La couleur de la gaine, toujours différente selon le départ"], bonnes: [0, 1],
      explication: "Plans, repères et appareil d'identification se complètent. La couleur de gaine ne permet pas de distinguer des câbles identiques." },
    { id: "HT-153", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "Avant de couper un câble HTA identifié, les instructions prévoient souvent :", options: ["Un essai de coupure avec une scie à métaux tenue à la main", "Un simple contrôle visuel de la gaine", "Un dispositif de piquage ou de coupure manœuvré à distance"], bonnes: [2],
      explication: "Le piquage à distance met le câble à la terre et protège l'opérateur si, malgré l'identification, le câble était sous tension." },
    { id: "HT-154", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "Pourquoi un câble HT séparé peut-il rester dangereux ?", options: ["À cause de sa capacité : il garde une charge", "À cause des tensions induites par les câbles voisins", "Il ne peut pas rester dangereux"], bonnes: [0, 1],
      explication: "Charge résiduelle et tensions induites sont les deux risques principaux. La MALT-CC les écoule et reste en place pendant les travaux." },
    { id: "HT-155", chapitre: "ht-consignation-approfondie", domaine: "HT", situation: "Un câble HTA neuf, jamais raccordé, est posé dans une galerie à côté de câbles en service.",
      q: "Peut-il présenter une tension dangereuse ?", options: ["Non, il n'est raccordé à rien", "Oui, par induction"], bonnes: [1],
      explication: "Un câble non raccordé peut recevoir une tension induite par ses voisins. On le traite avec VAT et MALT-CC selon les instructions." },
    { id: "HT-156", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "La MALT-CC d'une zone de travail sur un câble HT se pose :", options: ["Sur un seul conducteur", "De part et d'autre de la zone de travail, sur tous les conducteurs", "Seulement si la VAT a révélé une tension"], bonnes: [1],
      explication: "Tous les conducteurs entrant dans la zone sont mis à la terre et en court-circuit, des deux côtés." },
    { id: "HT-157", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "Pendant la consignation, la VAT se fait :", options: ["Juste après l'identification et juste avant la MALT-CC", "Avant l'identification", "Après la MALT-CC"], bonnes: [0],
      explication: "L'ordre est : identification, VAT, MALT-CC, sans délai entre ces opérations, sur le même ouvrage." },
    { id: "HT-158", chapitre: "ht-consignation-approfondie", domaine: "HT", situation: "Après la VAT, le contrôle du détecteur HT ne donne aucune indication.",
      q: "Vous :", options: ["Considérez la VAT comme valable", "Passez directement à la MALT-CC", "Changez de détecteur et recommencez la VAT"], bonnes: [2],
      explication: "Un détecteur muet au contrôle a pu être muet pendant la VAT. La vérification doit être refaite avec un détecteur en bon état." },
    { id: "HT-159", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "Lors de la dépose d'une MALT-CC, on retire en dernier :", options: ["La pince de terre", "La pince du premier conducteur"], bonnes: [0],
      explication: "À la pose, terre en premier ; à la dépose, terre en dernier. Ainsi, les conducteurs ne sont jamais reliés au dispositif sans la terre." },
    { id: "HT-160", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "Dans quel ordre se déroule la déconsignation ?", options: ["Retrait des condamnations, puis avis de fin de travail", "Avis de fin de travail, puis dépose des MALT-CC du HC, puis retrait des condamnations", "Dépose des MALT-CC du HC avant le retrait du personnel"], bonnes: [1],
      explication: "Le HC attend tous les avis de fin de travail, retire ses MALT-CC, puis lève les condamnations. L'exploitant décide ensuite de la remise sous tension." },
    { id: "HT-161", chapitre: "ht-consignation-approfondie", domaine: "HT", situation: "Le HC vient de retirer les MALT-CC d'un ouvrage. Les condamnations sont encore en place.",
      q: "Comment faut-il considérer l'ouvrage ?", options: ["Comme sous tension", "Comme toujours consigné"], bonnes: [0],
      explication: "Sans MALT-CC, l'ouvrage HT n'est plus consigné : il doit être considéré comme sous tension." },
    { id: "HT-162", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "Que se passe-t-il si un sectionneur de terre reste fermé lors de la remise sous tension ?", options: ["Un court-circuit franc, avec un arc violent", "Rien, il s'ouvre tout seul", "La tension baisse légèrement"], bonnes: [0],
      explication: "La remise sous tension sur une MALT-CC provoque un court-circuit. Les verrouillages et la fiche de manœuvre sont là pour l'éviter." },
    { id: "HT-163", chapitre: "ht-consignation-approfondie", domaine: "HT",
      q: "Dans une consignation en deux étapes, le document remis par le HC au chargé de travaux est :", options: ["L'avis de fin de travail", "La fiche de manœuvre", "L'attestation de première étape de consignation"], bonnes: [2],
      explication: "L'attestation de première étape indique que la séparation et la condamnation sont faites ; le chargé de travaux achève la consignation." }
  );
})();

/* ───────────── Thème HT — Le voisinage HT en détail ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "ht-voisinage-detail",
      theme: "HT",
      parcours: ["btht"],
      titre: "Le voisinage HT en détail : distances, protections, lignes aériennes et engins",
      duree: 25,
      objectifs: [
        "Situer précisément les zones 0, 1, 2 et 3 et les distances qui les bornent",
        "Évaluer la distance dans la position la plus défavorable",
        "Préparer un travail H1V ou H2V en zone 2",
        "Appliquer les règles de travail près d'une ligne aérienne avec un engin",
        "Connaître ce qui est interdit au voisinage HT"
      ],
      sections: [
        {
          titre: "Les zones et les distances en haute tension",
          contenu: `<p>Autour d'une pièce nue sous tension HT, la norme définit quatre zones, bornées par des distances qui <strong>augmentent avec la tension</strong> :</p>
<table>
<thead><tr><th>Zone</th><th>Limites</th><th>Opérations possibles</th><th>Habilitation électricien</th></tr></thead>
<tbody>
<tr><td>Zone 0</td><td>Au-delà de la DLVS</td><td>Toute personne, l'ouvrage étant identifié</td><td>Aucune exigée par la zone</td></tr>
<tr><td>Zone 1 : voisinage simple</td><td>Entre la DLVS et la DLVR</td><td>Travaux électriques et non électriques par du personnel habilité</td><td>H1, H2 (H0 pour le non électrique)</td></tr>
<tr><td>Zone 2 : voisinage renforcé HT</td><td>Entre la DLVR et la DMA</td><td>Travaux au voisinage renforcé, opérations HC et HE prévues</td><td>H1V, H2V (H0V pour le non électrique)</td></tr>
<tr><td>Zone 3 : travaux sous tension</td><td>En deçà de la DMA</td><td>Travaux sous tension uniquement, selon des procédures spécifiques</td><td>Habilitations T (ou N pour le nettoyage)</td></tr>
</tbody>
</table>
<p>La <strong>DLVS</strong> vaut <strong>3 m</strong> pour les tensions jusqu'à 50 kV et <strong>5 m</strong> au-delà. La <strong>DMA</strong> est la somme d'une <strong>distance de tension</strong> (qui dépend de la tension de l'ouvrage) et d'une <strong>distance de garde</strong> (qui couvre les mouvements involontaires). La DLVR est plus grande que la DMA. Les valeurs exactes de la DLVR et de la DMA se lisent dans les tableaux de la norme et dans les instructions de sécurité de l'employeur : elles doivent être connues avant de commencer.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> en HT, il n'y a pas de zone 4 (elle n'existe qu'en BT), et la zone 3 n'est pas « un peu plus près » de la zone 2 : c'est la zone des travaux sous tension, interdite aux H1V et H2V.</div>`
        },
        {
          titre: "Apprécier la distance dans la position la plus défavorable",
          contenu: `<p>La distance qui compte est la <strong>plus courte</strong> qui puisse exister, pendant tout le travail, entre la pièce nue sous tension et :</p>
<ul>
<li>le corps de chaque opérateur, bras tendus ;</li>
<li>les outils et objets tenus ou manutentionnés : clé, barre, tube, échelle, câble qu'on déroule ;</li>
<li>les engins et leurs charges : flèche, nacelle, godet, charge suspendue qui se balance ;</li>
<li>les conducteurs eux-mêmes, qui peuvent bouger avec le vent ou descendre en chauffant.</li>
</ul>
<p>La distance de garde comprise dans la DMA couvre de petits mouvements involontaires, pas un outil de deux mètres ni le déplacement d'une échelle. C'est au chargé de travaux de tenir compte de ces mouvements dans la préparation.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un exécutant se tient à 4 m d'un jeu de barres 20 kV et soulève verticalement un profilé de 3 m. Son corps est en zone 0, mais l'extrémité du profilé peut entrer en zone 1, voire 2. C'est la position de l'extrémité qui détermine la zone.</div>`
        },
        {
          titre: "Préparer un travail H1V ou H2V en zone 2",
          contenu: `<p>Le travail en zone 2 n'est jamais improvisé. Le chargé de travaux H2V, avec le chargé d'exploitation :</p>
<ol>
<li>vérifie d'abord si l'ouvrage voisin peut être <strong>consigné</strong> : c'est la solution préférée, car elle supprime le voisinage ;</li>
<li>sinon, recense les pièces nues sous tension et leur tension ;</li>
<li>détermine les distances et la zone de chaque phase du travail ;</li>
<li>choisit les mesures : <strong>éloignement</strong> (organiser le travail pour rester hors zone), <strong>obstacles</strong> (cloisons, portes de cellules fermées et verrouillées), <strong>écrans ou nappes isolantes</strong>, <strong>balisage</strong> et <strong>surveillance</strong> ;</li>
<li>explique à chaque exécutant H1V les limites à ne pas franchir et les gestes interdits ;</li>
<li>désigne si nécessaire un <strong>surveillant de sécurité électrique</strong>.</li>
</ol>
<p>Les <strong>écrans et nappes</strong> isolants sont adaptés à la tension et vérifiés avant usage. Leur pose au plus près de pièces nues HT peut elle-même exposer l'opérateur : elle se fait selon une procédure prévue, par du personnel habilité et équipé pour cela. Une fois posés, on ne s'y appuie pas et on ne les déplace pas.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en zone 2, la sécurité repose sur trois choses : des distances connues, des protections matérielles qui empêchent de les franchir, et une surveillance du chargé de travaux.</div>`
        },
        {
          titre: "Lignes aériennes et engins",
          contenu: `<p>Pour les travaux de bâtiment et de génie civil à proximité d'une ligne aérienne, le Code du travail (article R. 4534-108) impose que personne ne puisse s'approcher, ni directement ni par un outil, un engin ou une charge, à moins de :</p>
<table>
<thead><tr><th>Tension de la ligne</th><th>Distance minimale</th></tr></thead>
<tbody>
<tr><td>Moins de 50 000 V</td><td>3 m</td></tr>
<tr><td>50 000 V et plus</td><td>5 m</td></tr>
</tbody>
</table>
<p>Si ces distances ne peuvent pas être respectées, l'employeur prend contact avec l'<strong>exploitant de la ligne</strong> pour définir les mesures : mise hors tension et consignation par l'exploitant, déplacement de la ligne, ou mesures particulières de protection.</p>
<p>Pour les engins (grue, camion-grue, nacelle, pelle, camion benne), on combine :</p>
<ul>
<li>la limitation matérielle des mouvements : limiteurs de hauteur ou d'orientation, portiques ou gabarits de passage sous la ligne ;</li>
<li>le balisage au sol de la zone interdite à l'engin ;</li>
<li>la prise en compte du balancement de la charge et de la flèche des câbles ;</li>
<li>un <strong>surveillant</strong> qui guide le conducteur, qui voit mal la distance depuis sa cabine.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> l'appréciation à l'œil des distances sous une ligne est très trompeuse : depuis le sol, un conducteur paraît plus haut qu'il ne l'est. On mesure, on matérialise, ou on fait consigner.</div>`
        },
        {
          titre: "Ce qui est interdit au voisinage HT",
          contenu: `<ul>
<li>Pénétrer en <strong>zone 3</strong>, même brièvement, même avec un outil, en dehors des travaux sous tension.</li>
<li>Entrer en zone 2 sans l'attribut <strong>V</strong> (H1V, H2V, H0V) ou sans y être autorisé pour l'opération.</li>
<li>Ouvrir ou démonter le capot d'une cellule restée sous tension, retirer un écran ou un obstacle mis en place.</li>
<li>Utiliser une <strong>échelle métallique</strong> ou un objet long conducteur près des pièces nues.</li>
<li>Franchir le balisage, ou déplacer les limites sans l'accord du chargé de travaux.</li>
<li>Poursuivre le travail lorsque le surveillant prévu s'absente.</li>
<li>Travailler sur des ouvrages extérieurs par <strong>orage</strong>, ou continuer quand la pluie, le vent ou la visibilité ne permettent plus de garantir les distances.</li>
<li>Remplacer une distance insuffisante par le port de gants isolants.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « je ne touche rien » ne suffit pas en HT. On peut être électrisé par amorçage sans contact : c'est la distance qui protège, pas l'absence de contact.</div>`
        }
      ],
      points_cles: [
        "Zones HT : 0, 1 (voisinage simple), 2 (voisinage renforcé), 3 (travaux sous tension) ; pas de zone 4",
        "DLVS : 3 m jusqu'à 50 kV, 5 m au-delà ; DMA = distance de tension + distance de garde",
        "DLVR et DMA dépendent de la tension : valeurs dans la norme et les instructions de l'employeur",
        "La distance se mesure dans la position la plus défavorable, outils, charges et engins compris",
        "Zone 2 : H1V et H2V ; on préfère consigner l'ouvrage voisin",
        "Mesures en zone 2 : éloignement, obstacles, écrans et nappes, balisage, surveillance",
        "Lignes aériennes : 3 m sous 50 kV, 5 m à partir de 50 kV, engins et charges compris",
        "Si la distance ne peut être tenue : consignation ou mesures définies avec l'exploitant"
      ]
    }
  );

  P.questions.push(
    { id: "HT-164", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "En haute tension, entre la DLVR et la DMA, on se trouve en :", options: ["Zone 1", "Zone 3", "Zone 4", "Zone 2"], bonnes: [3],
      explication: "La zone 2 (voisinage renforcé HT) est comprise entre la DLVR et la DMA. La zone 4 n'existe qu'en BT." },
    { id: "HT-165", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "Pour un ouvrage de 20 kV, la DLVS est de :", options: ["3 m", "0,30 m", "5 m"], bonnes: [0],
      explication: "La DLVS est de 3 m jusqu'à 50 kV et de 5 m au-delà." },
    { id: "HT-166", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "Pour un ouvrage de 90 kV, la DLVS est de :", options: ["3 m", "0,30 m", "5 m"], bonnes: [2],
      explication: "Au-delà de 50 kV, la DLVS passe à 5 m." },
    { id: "HT-167", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "La distance de garde comprise dans la DMA tient compte :", options: ["De la longueur des outils manutentionnés", "Des mouvements involontaires de l'opérateur", "De la distance d'amorçage"], bonnes: [1],
      explication: "La distance de garde couvre les petits mouvements involontaires. Les outils et objets longs sont à prendre en compte en plus, dans la préparation." },
    { id: "HT-168", chapitre: "ht-voisinage-detail", domaine: "HT", situation: "Un exécutant se tient à 4 m d'un jeu de barres 20 kV et lève un profilé de 3 m de long.",
      q: "Pour déterminer la zone, on considère :", options: ["La position de l'extrémité du profilé", "La position de ses pieds", "La position de sa tête"], bonnes: [0],
      explication: "La distance s'apprécie à partir de la partie la plus proche de la pièce nue : ici, l'extrémité de l'objet manutentionné." },
    { id: "HT-169", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "Avant d'organiser un travail en zone 2, la première solution à étudier est :", options: ["Poser des nappes isolantes", "Désigner un surveillant", "Consigner l'ouvrage voisin pour supprimer le voisinage"], bonnes: [2],
      explication: "Supprimer le danger passe avant le protéger : si l'ouvrage voisin peut être consigné, il n'y a plus de voisinage." },
    { id: "HT-170", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "Quelles mesures peuvent protéger des exécutants travaillant en zone 2 ?", options: ["Des écrans ou nappes isolants adaptés à la tension", "Des portes de cellules fermées et verrouillées", "Un balisage et une surveillance", "La confiance dans l'expérience des exécutants"], bonnes: [0, 1, 2],
      explication: "Obstacles, écrans, balisage et surveillance se combinent. L'expérience ne remplace pas une protection matérielle." },
    { id: "HT-171", chapitre: "ht-voisinage-detail", domaine: "HT", situation: "Des nappes isolantes ont été posées sur le jeu de barres voisin, resté sous tension.",
      q: "Un exécutant peut-il s'appuyer sur ces nappes pour atteindre sa zone de travail ?", options: ["Oui, elles sont isolantes", "Non, on ne s'appuie pas sur un écran et on ne le déplace pas"], bonnes: [1],
      explication: "Un écran limite le risque de contact fortuit ; il n'est pas fait pour supporter un appui, qui peut le déplacer ou le perforer." },
    { id: "HT-172", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "La pose d'écrans isolants au plus près de pièces nues HT sous tension :", options: ["Peut être faite par n'importe quel exécutant H1", "Se fait selon une procédure prévue, par du personnel habilité et équipé pour cela", "Ne présente aucun risque"], bonnes: [1],
      explication: "Poser un écran oblige à s'approcher des pièces nues : cette opération est elle-même encadrée." },
    { id: "HT-173", chapitre: "ht-voisinage-detail", domaine: "HT", situation: "Une grue doit lever des charges près d'une ligne aérienne de 20 kV.",
      q: "Aucune partie de la grue ni de la charge ne doit s'approcher de la ligne à moins de :", options: ["3 m", "1 m", "5 m"], bonnes: [0],
      explication: "Code du travail : 3 m pour les lignes de moins de 50 kV, 5 m à partir de 50 kV, engin et charge compris." },
    { id: "HT-174", chapitre: "ht-voisinage-detail", domaine: "HT", situation: "Un camion-grue doit travailler sous une ligne de 225 kV.",
      q: "La distance minimale à respecter est de :", options: ["3 m", "5 m"], bonnes: [1],
      explication: "À partir de 50 kV, la distance minimale imposée par le Code du travail est de 5 m." },
    { id: "HT-175", chapitre: "ht-voisinage-detail", domaine: "HT", situation: "Les distances à une ligne aérienne HTA ne peuvent pas être respectées pour un chantier.",
      q: "Que faut-il faire ?", options: ["Travailler quand même en faisant très attention", "Prendre contact avec l'exploitant de la ligne pour définir les mesures", "Faire mettre hors tension et consigner la ligne par l'exploitant"], bonnes: [1, 2],
      explication: "L'exploitant peut consigner la ligne, la déplacer ou définir des mesures particulières. Travailler sans mesure est interdit." },
    { id: "HT-176", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "Pour un engin travaillant près d'une ligne aérienne, quelles mesures sont adaptées ?", options: ["Limiteur de hauteur ou d'orientation", "Portique de passage sous la ligne", "Surveillant qui guide le conducteur", "Estimation à l'œil depuis la cabine"], bonnes: [0, 1, 2],
      explication: "La vue depuis la cabine est trompeuse. On limite physiquement les mouvements, on balise et on fait guider le conducteur." },
    { id: "HT-177", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "Lors du levage d'une charge près d'une ligne, il faut aussi tenir compte :", options: ["Du balancement de la charge", "De la flèche des conducteurs, qui varie avec la température", "De la couleur de la charge"], bonnes: [0, 1],
      explication: "La charge oscille et les conducteurs descendent quand ils chauffent : la distance minimale peut être atteinte sans qu'on s'en rende compte." },
    { id: "HT-178", chapitre: "ht-voisinage-detail", domaine: "HT", situation: "Vous êtes H1V. Le chargé de travaux a balisé la limite de la zone 2 devant une cellule sous tension. Pour aller plus vite, vous voulez passer derrière le balisage.",
      q: "C'est :", options: ["Permis, votre H1V vous autorise toute la zone 2", "Permis si vous gardez les mains dans les poches", "Interdit sans l'accord du chargé de travaux"], bonnes: [2],
      explication: "Le balisage matérialise les limites fixées par le chargé de travaux. On ne le franchit pas et on ne le déplace pas de sa propre initiative." },
    { id: "HT-179", chapitre: "ht-voisinage-detail", domaine: "HT", situation: "Le surveillant de sécurité désigné pour un travail en zone 2 doit s'absenter dix minutes.",
      q: "L'équipe :", options: ["Arrête le travail jusqu'à son retour ou son remplacement", "Continue, dix minutes c'est court"], bonnes: [0],
      explication: "Quand une surveillance permanente est prévue, le travail ne se poursuit pas sans surveillant." },
    { id: "HT-180", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "Quels objets sont à proscrire au voisinage de pièces nues HT ?", options: ["Une échelle métallique", "Un mètre ruban métallique", "Une perche isolante vérifiée et adaptée", "Un tube conducteur de grande longueur"], bonnes: [0, 1, 3],
      explication: "Les objets conducteurs, surtout longs, réduisent la distance et peuvent provoquer un amorçage. La perche isolante adaptée est faite pour ces opérations." },
    { id: "HT-181", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "En haute tension, la zone 4 :", options: ["Est le voisinage renforcé HT", "N'existe pas", "Est réservée aux travaux sous tension"], bonnes: [1],
      explication: "En HT, les zones sont 0, 1, 2 et 3. La zone 4 est le voisinage renforcé en basse tension." },
    { id: "HT-182", chapitre: "ht-voisinage-detail", domaine: "HT", situation: "La distance entre votre zone de travail et une pièce nue HT est inférieure à la DMA.",
      q: "Vous pouvez travailler :", options: ["Seulement après consignation de la pièce voisine (hors travaux sous tension)", "Avec des gants isolants de classe adaptée", "En étant habilité H2V"], bonnes: [0],
      explication: "En deçà de la DMA, c'est la zone 3. Hors travaux sous tension, il faut supprimer le voisinage par la consignation." },
    { id: "HT-183", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "Depuis le sol, la hauteur d'un conducteur de ligne aérienne :", options: ["Est facile à estimer à l'œil", "Est souvent mal estimée : on mesure, on matérialise ou on fait consigner"], bonnes: [1],
      explication: "Les erreurs d'appréciation sont fréquentes. On s'appuie sur des mesures, des gabarits ou la consignation." },
    { id: "HT-184", chapitre: "ht-voisinage-detail", domaine: "HT",
      q: "Quelles habilitations permettent un travail d'ordre électrique en zone 2 HT ?", options: ["H1", "H1V", "H2V", "B2V"], bonnes: [1, 2],
      explication: "L'attribut V est obligatoire en zone 2 : H1V pour l'exécutant, H2V pour le chargé de travaux. B2V concerne la BT." },
    { id: "HT-185", chapitre: "ht-voisinage-detail", domaine: "HT", situation: "Pendant un travail au voisinage d'une ligne HTA extérieure, une pluie forte se met à tomber et le vent fait bouger les conducteurs.",
      q: "Le chargé de travaux :", options: ["Accélère pour finir avant que ce soit pire", "Fait mettre des gants à tout le monde et continue", "Interrompt le travail si les distances ne peuvent plus être garanties"], bonnes: [2],
      explication: "Pluie et vent réduisent l'isolement et déplacent les conducteurs. On interrompt dès que les distances ne sont plus garanties." }
  );
})();

/* ───────────── Thème HT — Opérations spécifiques HE ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "ht-operations-he",
      theme: "HT",
      parcours: ["btht"],
      titre: "Les opérations spécifiques HE : manœuvre, mesurage, vérification, essai",
      duree: 25,
      objectifs: [
        "Distinguer les quatre attributs HE et leurs limites",
        "Situer les manœuvres d'exploitation, de consignation et d'urgence",
        "Réaliser un mesurage HT sans créer de danger (secondaires de TC, appareils adaptés)",
        "Organiser la sécurité d'un essai : zone d'essai, balisage, décharge",
        "Savoir quand une opération spécifique devient un travail"
      ],
      sections: [
        {
          titre: "Les opérations spécifiques en haute tension",
          contenu: `<p>Une <strong>opération spécifique</strong> n'est ni un travail ni une intervention : c'est une opération particulière sur un ouvrage, réalisée par un <strong>chargé d'opérations spécifiques</strong> habilité HE, suivi d'un attribut qui précise ce qu'il peut faire.</p>
<table>
<thead><tr><th>Attribut</th><th>Ce qu'il permet</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>HE Manœuvre</td><td>Manœuvrer des appareils pour modifier l'état électrique d'un ouvrage</td><td>Mettre hors ou sous tension un transformateur, changer de schéma d'alimentation, réarmer une protection selon les consignes</td></tr>
<tr><td>HE Mesurage</td><td>Mesurer des grandeurs électriques ou physiques sur un ouvrage</td><td>Mesures de courant, de tension sur les secondaires, de résistance de terre, d'isolement sur ouvrage consigné</td></tr>
<tr><td>HE Vérification</td><td>Vérifier la conformité ou le bon fonctionnement d'un ouvrage</td><td>Vérifications périodiques, contrôle des protections, contrôle avant mise en service</td></tr>
<tr><td>HE Essai</td><td>Réaliser des essais qui mettent l'ouvrage ou une partie sous tension pour éprouver son comportement</td><td>Essai diélectrique d'un câble, essai fonctionnel d'une cellule, essai de relais de protection</td></tr>
</tbody>
</table>
<p>Le titre d'habilitation indique le ou les attributs, et les ouvrages concernés. Un HE Mesurage ne manœuvre pas, un HE Manœuvre ne fait pas d'essais, et aucun HE ne réalise de travaux sur l'ouvrage.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « HE » seul ne veut rien dire : l'habilitation porte toujours un attribut (Manœuvre, Mesurage, Vérification, Essai). Et il n'existe pas d'intervention en HT : un dépannage HT est un travail sur ouvrage consigné, ou une suite d'opérations spécifiques.</div>`
        },
        {
          titre: "HE Manœuvre : les différentes manœuvres",
          contenu: `<p>On distingue trois sortes de manœuvres :</p>
<ul>
<li>la <strong>manœuvre d'exploitation</strong> : mettre en service ou hors service un ouvrage, changer de schéma, réaliser un délestage ; elle est décidée par le chargé d'exploitation et peut être confiée à un HE Manœuvre ;</li>
<li>la <strong>manœuvre de consignation</strong> : elle fait partie de la consignation et relève du chargé de consignation HC, qui en a la responsabilité ;</li>
<li>la <strong>manœuvre d'urgence</strong> : elle est faite pour supprimer un danger immédiat (accident, incendie, début d'arc), par une personne habilitée présente, qui rend compte ensuite au chargé d'exploitation.</li>
</ul>
<p>Le HE Manœuvre travaille avec une <strong>fiche de manœuvre</strong> ou un ordre précis de l'exploitant, et rend compte de chaque manœuvre réalisée. S'il constate une anomalie (appareil qui ne prend pas la position attendue, verrouillage bloquant, odeur de brûlé, bruit anormal, voyant incohérent), il <strong>s'arrête</strong>, met l'installation dans un état sûr si les consignes le prévoient, et prévient le chargé d'exploitation.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> une manœuvre ne rend jamais un ouvrage apte au travail. Après une mise hors tension par un HE Manœuvre, l'ouvrage doit encore être consigné par un HC avant que quiconque le touche.</div>`
        },
        {
          titre: "HE Mesurage et HE Vérification",
          contenu: `<p>En HT, on ne mesure presque jamais directement sur les conducteurs HT. Les mesures se font :</p>
<ul>
<li>sur les <strong>secondaires</strong> des transformateurs de courant (TC) et de tension (TT), aux bornes prévues (borniers d'essai, boîtes de raccordement) ;</li>
<li>avec des appareils dédiés et intégrés aux cellules (indicateurs, centrales de mesure) ;</li>
<li>sur un ouvrage <strong>consigné</strong>, pour les mesures d'isolement, de résistance de terre ou de continuité des écrans.</li>
</ul>
<p>Deux règles sont essentielles sur les secondaires :</p>
<ul>
<li>on n'<strong>ouvre jamais le secondaire d'un TC en service</strong> : sans charge, il peut développer une tension très élevée, dangereuse et destructrice. On court-circuite d'abord le secondaire par le dispositif prévu ;</li>
<li>on ne <strong>court-circuite jamais le secondaire d'un TT</strong> : il serait détruit, et un TT alimenté par erreur côté secondaire renvoie de la HT au primaire.</li>
</ul>
<p>L'<strong>HE Vérification</strong> concerne le contrôle d'un ouvrage : examen visuel, contrôle des protections, mesures et essais prévus par la procédure de vérification. Le vérificateur ne modifie pas l'installation : il constate et rend compte.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un technicien HE Mesurage doit relever le courant sur un départ HTA. Il se branche sur le bornier d'essai du secondaire des TC, avec une pince adaptée, sans ouvrir aucun circuit. Il n'ouvre pas le compartiment HT de la cellule.</div>`
        },
        {
          titre: "HE Essai et la sécurité des essais",
          contenu: `<p>Un <strong>essai</strong> applique volontairement une tension, souvent élevée, à un ouvrage ou à un câble pour vérifier sa tenue ou son fonctionnement. Pendant l'essai, l'objet essayé est <strong>sous tension</strong>, même s'il est séparé du réseau. L'organisation est donc stricte :</p>
<table>
<thead><tr><th>Étape</th><th>Mesure de sécurité</th></tr></thead>
<tbody>
<tr><td>Préparation</td><td>Ouvrage séparé du réseau et consigné ; procédure d'essai écrite ; matériel d'essai vérifié</td></tr>
<tr><td>Zone d'essai</td><td>Délimitée et <strong>balisée</strong> sur tout le parcours de l'objet essayé, y compris l'autre extrémité d'un câble ; panneaux et signaux lumineux « essai en cours »</td></tr>
<tr><td>Surveillance</td><td>Chaque extrémité éloignée est surveillée ou rendue inaccessible ; liaison avec l'opérateur d'essai</td></tr>
<tr><td>Mise sous tension d'essai</td><td>Après vérification qu'il n'y a plus personne dans la zone ; avertissement de tous les intervenants</td></tr>
<tr><td>Fin d'essai</td><td><strong>Décharge</strong> de l'objet essayé, puis mise à la terre ; retrait du balisage seulement ensuite</td></tr>
</tbody>
</table>
<p>Lorsque l'essai s'inscrit dans des travaux et oblige à lever temporairement une partie des mesures de consignation (retrait d'une MALT-CC par exemple), il est organisé par un <strong>chargé d'essais</strong> (habilitation de chargé de travaux avec l'attribut Essai), selon une procédure qui définit qui fait quoi et quand l'équipe doit être retirée.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> après un essai diélectrique, un câble peut garder une charge très importante. On le décharge avec le dispositif prévu et on le met à la terre avant de le toucher ou de déposer le balisage.</div>`
        },
        {
          titre: "Règles communes et limites",
          contenu: `<ul>
<li>Toute opération spécifique est préparée : objet, mode opératoire, matériel, EPI, zone concernée.</li>
<li>Le chargé d'opérations spécifiques respecte les zones : en zone 2, il applique les mêmes précautions qu'un titulaire de l'attribut V ; la zone 3 lui est interdite.</li>
<li>Il porte les EPI adaptés : gants isolants de la bonne classe, casque avec écran facial, vêtement couvrant contre l'arc.</li>
<li>Il utilise des appareils de mesure et d'essai adaptés à la tension et à la catégorie, vérifiés.</li>
<li>Il ne transforme jamais son opération en travail : s'il faut démonter, remplacer ou raccorder, on organise des travaux sur ouvrage consigné.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> HE Manœuvre manœuvre, HE Mesurage mesure, HE Vérification vérifie, HE Essai essaie. Aucun ne travaille sur l'ouvrage, et chacun reste dans les limites de son titre et des consignes reçues.</div>`
        }
      ],
      points_cles: [
        "HE s'accompagne toujours d'un attribut : Manœuvre, Mesurage, Vérification ou Essai",
        "Manœuvres d'exploitation (HE Manœuvre), de consignation (HC), d'urgence (pour supprimer un danger)",
        "Une manœuvre n'est pas une consignation : l'ouvrage n'est pas apte au travail",
        "Anomalie pendant une manœuvre : on s'arrête et on prévient le chargé d'exploitation",
        "Ne jamais ouvrir le secondaire d'un TC en service ; ne jamais court-circuiter le secondaire d'un TT",
        "Essai : zone d'essai balisée sur tout le parcours, surveillance des extrémités, avertissement",
        "Fin d'essai : décharge puis mise à la terre avant de toucher ou de débaliser",
        "Démonter, remplacer, raccorder : ce sont des travaux, pas des opérations spécifiques"
      ]
    }
  );

  P.questions.push(
    { id: "HT-186", chapitre: "ht-operations-he", domaine: "HT",
      q: "Quels attributs peuvent accompagner le symbole HE ?", options: ["Manœuvre", "Mesurage", "Vérification", "Essai"], bonnes: [0, 1, 2, 3],
      explication: "Les quatre attributs existent en HT. Le titre précise celui ou ceux qui sont accordés." },
    { id: "HT-187", chapitre: "ht-operations-he", domaine: "HT", situation: "Vous êtes habilité HE Mesurage. On vous demande de remplacer un fusible HTA dans une cellule.",
      q: "Vous :", options: ["Le remplacez, c'est une opération simple", "Refusez : c'est un travail qui demande une consignation et l'habilitation adaptée", "Le remplacez avec des gants isolants"], bonnes: [1],
      explication: "Remplacer un fusible HTA n'est pas un mesurage. Il n'y a pas d'intervention en HT : c'est un travail sur ouvrage consigné." },
    { id: "HT-188", chapitre: "ht-operations-he", domaine: "HT",
      q: "Une manœuvre d'exploitation sert à :", options: ["Modifier l'état électrique d'un réseau (mise en ou hors service, changement de schéma)", "Rendre un ouvrage apte au travail", "Vérifier l'absence de tension"], bonnes: [0],
      explication: "La manœuvre d'exploitation modifie l'état du réseau. Rendre un ouvrage apte au travail, c'est la consignation." },
    { id: "HT-189", chapitre: "ht-operations-he", domaine: "HT",
      q: "Les manœuvres réalisées dans le cadre d'une consignation relèvent :", options: ["De l'exécutant H1", "De n'importe quelle personne présente", "Du chargé de consignation HC"], bonnes: [2],
      explication: "La manœuvre de consignation fait partie de la consignation, sous la responsabilité du chargé de consignation." },
    { id: "HT-190", chapitre: "ht-operations-he", domaine: "HT", situation: "Un début d'incendie se déclare sur un câble alimenté par une cellule HTA. Vous êtes habilité et présent dans le poste.",
      q: "Une manœuvre pour mettre hors tension ce départ est :", options: ["Interdite sans fiche de manœuvre signée", "Une manœuvre d'urgence, possible pour supprimer le danger", "Une consignation"], bonnes: [1],
      explication: "La manœuvre d'urgence supprime un danger immédiat. On en rend compte ensuite au chargé d'exploitation. Ce n'est pas une consignation." },
    { id: "HT-191", chapitre: "ht-operations-he", domaine: "HT", situation: "Lors d'une manœuvre selon la fiche, l'interrupteur ne prend pas la position attendue et un bruit anormal se fait entendre.",
      q: "Vous :", options: ["Insistez sur la commande", "Arrêtez la séquence", "Prévenez le chargé d'exploitation", "Passez à la manœuvre suivante"], bonnes: [1, 2],
      explication: "Toute anomalie impose d'arrêter et de rendre compte. Insister ou poursuivre la séquence peut provoquer un arc ou une erreur grave." },
    { id: "HT-192", chapitre: "ht-operations-he", domaine: "HT", situation: "Un HE Manœuvre a mis hors tension un transformateur. Un collègue veut aussitôt démonter les connexions HTA.",
      q: "Est-ce possible ?", options: ["Oui, il est hors tension", "Non, l'ouvrage doit d'abord être consigné par un HC"], bonnes: [1],
      explication: "Une manœuvre n'est pas une consignation. Sans séparation condamnée, identification, VAT et MALT-CC, on ne travaille pas." },
    { id: "HT-193", chapitre: "ht-operations-he", domaine: "HT",
      q: "Sur un ouvrage HT, les mesures de courant et de tension se font en général :", options: ["Sur les secondaires des TC et des TT, aux bornes prévues", "Directement sur les conducteurs HT avec un multimètre", "En ouvrant le compartiment câbles"], bonnes: [0],
      explication: "Les TC et TT ramènent les grandeurs à des valeurs mesurables. On utilise les borniers d'essai prévus." },
    { id: "HT-194", chapitre: "ht-operations-he", domaine: "HT",
      q: "Que ne faut-il jamais faire sur le secondaire d'un transformateur de courant (TC) en service ?", options: ["Le court-circuiter par le dispositif prévu", "Y brancher une pince ampèremétrique", "L'ouvrir"], bonnes: [2],
      explication: "Ouvert en service, le secondaire d'un TC peut développer une tension très élevée. On le court-circuite avant toute déconnexion." },
    { id: "HT-195", chapitre: "ht-operations-he", domaine: "HT",
      q: "Que ne faut-il jamais faire sur le secondaire d'un transformateur de tension (TT) ?", options: ["Mesurer la tension avec un appareil adapté", "Le court-circuiter", "Vérifier ses fusibles"], bonnes: [1],
      explication: "Un TT en court-circuit est détruit. C'est l'inverse du TC, dont le secondaire ne doit jamais être ouvert." },
    { id: "HT-196", chapitre: "ht-operations-he", domaine: "HT",
      q: "Le titulaire de l'HE Vérification :", options: ["Contrôle la conformité et le fonctionnement de l'ouvrage", "Modifie l'installation s'il trouve un défaut", "Rend compte de ses constats"], bonnes: [0, 2],
      explication: "Le vérificateur constate et rend compte. Corriger un défaut est un travail, organisé à part." },
    { id: "HT-197", chapitre: "ht-operations-he", domaine: "HT",
      q: "Pendant un essai diélectrique, le câble essayé est :", options: ["Sous une tension d'essai dangereuse", "Hors tension, puisqu'il est séparé du réseau"], bonnes: [0],
      explication: "L'essai applique volontairement une tension, souvent élevée : l'objet essayé est dangereux pendant toute la durée de l'essai." },
    { id: "HT-198", chapitre: "ht-operations-he", domaine: "HT", situation: "Vous préparez l'essai diélectrique d'un câble HTA qui relie deux postes distants de 800 m.",
      q: "Quelles mesures prenez-vous ?", options: ["Baliser la zone d'essai au poste de départ", "Baliser et surveiller aussi l'autre extrémité du câble", "Prévenir tous les intervenants avant la mise sous tension d'essai", "Laisser l'autre extrémité libre d'accès"], bonnes: [0, 1, 2],
      explication: "La zone d'essai couvre tout l'objet essayé, y compris l'extrémité éloignée, qui doit être surveillée ou rendue inaccessible." },
    { id: "HT-199", chapitre: "ht-operations-he", domaine: "HT",
      q: "À la fin d'un essai sur un câble HT, avant de le toucher, il faut :", options: ["Attendre quelques secondes", "Le décharger avec le dispositif prévu", "Le mettre à la terre"], bonnes: [1, 2],
      explication: "Un câble essayé garde une forte charge. On le décharge puis on le met à la terre ; le balisage n'est retiré qu'ensuite." },
    { id: "HT-200", chapitre: "ht-operations-he", domaine: "HT",
      q: "Le balisage de la zone d'essai est retiré :", options: ["Après décharge et mise à la terre de l'objet essayé", "Dès que l'opérateur coupe l'appareil d'essai", "Avant la mise sous tension d'essai"], bonnes: [0],
      explication: "Tant que l'objet essayé n'est pas déchargé et mis à la terre, il reste dangereux et la zone doit rester interdite." },
    { id: "HT-201", chapitre: "ht-operations-he", domaine: "HT", situation: "Pendant des travaux sur un câble consigné, un essai nécessite de retirer temporairement une MALT-CC.",
      q: "Cet essai est organisé par :", options: ["Un exécutant H1, de sa propre initiative", "Personne, c'est rapide", "Un chargé d'essais, selon une procédure qui prévoit le retrait de l'équipe"], bonnes: [2],
      explication: "Lever une mesure de consignation pour un essai demande un chargé d'essais et une procédure : l'équipe doit être retirée de l'ouvrage." },
    { id: "HT-202", chapitre: "ht-operations-he", domaine: "HT",
      q: "Un chargé d'opérations spécifiques HE peut-il entrer en zone 3 ?", options: ["Oui, pour une mesure rapide", "Non, la zone 3 est réservée aux travaux sous tension"], bonnes: [1],
      explication: "Les HE respectent les zones comme tout le monde : la zone 3 n'est accessible qu'aux habilitations de travaux sous tension." },
    { id: "HT-203", chapitre: "ht-operations-he", domaine: "HT",
      q: "Une mesure d'isolement sur un câble HTA se fait :", options: ["Sur le câble en service", "Sur le câble consigné, avec un appareil adapté", "Sans précaution : l'appareil est alimenté par piles"], bonnes: [1],
      explication: "Une mesure d'isolement se fait sur un ouvrage hors tension. L'appareil peut injecter une tension élevée : la zone est protégée pendant la mesure." },
    { id: "HT-204", chapitre: "ht-operations-he", domaine: "HT",
      q: "Le titulaire de l'HE Manœuvre réalise ses manœuvres :", options: ["Selon une fiche de manœuvre ou un ordre précis de l'exploitant", "De mémoire, s'il connaît le poste", "En rendant compte des manœuvres réalisées"], bonnes: [0, 2],
      explication: "La fiche de manœuvre fixe l'ordre et les positions attendues ; le HE Manœuvre rend compte à l'exploitant." },
    { id: "HT-205", chapitre: "ht-operations-he", domaine: "HT",
      q: "L'habilitation « HE » sans attribut :", options: ["Permet toutes les opérations spécifiques", "N'existe pas : un attribut est toujours précisé"], bonnes: [1],
      explication: "Le titre précise toujours l'attribut : Manœuvre, Mesurage, Vérification ou Essai." }
  );
})();

/* ───────────── Thème HT — Équipements et outillages HT ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "ht-equipements-outillage",
      theme: "HT",
      parcours: ["btht"],
      titre: "Équipements et outillages HT : gants, perches, détecteurs, MALT-CC et protection contre l'arc",
      duree: 25,
      objectifs: [
        "Choisir des gants isolants de classe adaptée à la tension",
        "Utiliser correctement tabouret, tapis et bottes isolants",
        "Reconnaître les parties d'une perche et ses limites d'emploi",
        "Contrôler un détecteur de tension HT et un dispositif de MALT-CC",
        "S'équiper contre les effets d'un arc électrique"
      ],
      sections: [
        {
          titre: "Les gants isolants : classes et usage",
          contenu: `<p>Les gants isolants sont classés selon la tension maximale d'utilisation en courant alternatif :</p>
<table>
<thead><tr><th>Classe</th><th>Tension maximale d'utilisation (alternatif)</th><th>Couleur du marquage</th><th>Domaine</th></tr></thead>
<tbody>
<tr><td>00</td><td>500 V</td><td>Beige</td><td>BT</td></tr>
<tr><td>0</td><td>1 000 V</td><td>Rouge</td><td>BT</td></tr>
<tr><td>1</td><td>7 500 V</td><td>Blanc</td><td>HTA</td></tr>
<tr><td>2</td><td>17 000 V</td><td>Jaune</td><td>HTA</td></tr>
<tr><td>3</td><td>26 500 V</td><td>Vert</td><td>HTA</td></tr>
<tr><td>4</td><td>36 000 V</td><td>Orange</td><td>HTA</td></tr>
</tbody>
</table>
<p>La règle de choix est simple : la tension maximale d'utilisation de la classe doit être <strong>au moins égale</strong> à la tension de l'ouvrage. Les classes à retenir pour chaque ouvrage sont fixées par les instructions de l'employeur. En HT, les gants isolants protègent l'opérateur lors des manœuvres, des VAT et de la pose des MALT-CC, en complément de la perche et des distances : ils ne permettent pas de toucher une pièce nue HT sous tension.</p>
<p>Avant chaque usage : vérification visuelle (coupure, piqûre, craquelure, gonflement, salissure) et <strong>test de gonflage</strong> pour détecter les fuites ; contrôle de la date du dernier essai périodique. Des <strong>surgants</strong> en cuir peuvent être portés par-dessus pour les protéger mécaniquement. Les gants sont rangés à plat dans leur housse, sans être pliés, à l'abri de la chaleur, du soleil et de l'ozone. Les gants de HT font l'objet d'essais diélectriques périodiques selon les prescriptions de leur norme, du fabricant et de l'employeur.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> des gants de classe 0, prévus pour 1 000 V, ne protègent pas sur un ouvrage HTA. Et un gant qui fuit au test de gonflage est retiré, même si la fuite paraît minuscule.</div>`
        },
        {
          titre: "Tabouret, tapis et bottes isolants",
          contenu: `<p>Le <strong>tabouret isolant</strong> et le <strong>tapis isolant</strong> isolent l'opérateur du sol pendant certaines manœuvres. Si un défaut met la commande sous tension, le courant ne peut pas traverser le corps vers le sol. Les <strong>bottes isolantes</strong> jouent un rôle comparable.</p>
<ul>
<li>Ils sont adaptés à la tension de l'ouvrage et vérifiés avant usage : pas de fissure, de trou ni de pied endommagé.</li>
<li>Ils sont propres et secs : la poussière humide ou la boue créent un chemin pour le courant.</li>
<li>Pendant la manœuvre, l'opérateur reste entièrement sur le tabouret ou le tapis, et ne touche ni le mur, ni une autre masse, ni une autre personne.</li>
<li>Le tabouret est placé devant la commande, stable, sur un sol plan et sec.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> pour manœuvrer un sectionneur à commande mécanique dans un poste ouvert, l'opérateur pose le tabouret isolant devant la commande, monte dessus avec ses gants isolants et son casque à écran, puis manœuvre sans s'appuyer sur la charpente métallique.</div>`
        },
        {
          titre: "Les perches",
          contenu: `<p>On distingue la <strong>perche de manœuvre</strong> (pour actionner certains appareils), la perche porte-détecteur (pour la VAT) et la <strong>perche de mise à la terre</strong> (pour poser les pinces de MALT-CC). Une perche comporte :</p>
<ul>
<li>une <strong>tête</strong> ou partie active, qui reçoit l'outil, le détecteur ou la pince ;</li>
<li>une <strong>partie isolante</strong>, dont la longueur dépend de la tension ;</li>
<li>une <strong>garde</strong> (anneau ou repère coloré) qui marque la limite à ne pas dépasser avec les mains ;</li>
<li>une <strong>poignée</strong>.</li>
</ul>
<p>Les mains restent toujours côté poignée, derrière la garde. On n'allonge pas une perche avec un élément de fortune et on ne la raccourcit pas en la tenant plus haut. La perche est propre et sèche ; essuyée si besoin avec le produit prévu ; rangée dans sa housse ou sur un support, sans être posée au sol humide.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> une perche fendue, encrassée ou humide peut conduire le courant le long de sa surface. Elle est retirée du service et signalée.</div>`
        },
        {
          titre: "Les détecteurs de tension HT",
          contenu: `<p>Le détecteur de tension HT signale la présence de tension par un signal <strong>lumineux et sonore</strong>. Il est conçu pour une <strong>plage de tension</strong> nominale donnée et pour un usage intérieur ou extérieur. Avant l'emploi, on vérifie :</p>
<ul>
<li>que la plage de tension marquée correspond à l'ouvrage ;</li>
<li>l'état du boîtier, de l'électrode, de la perche associée ;</li>
<li>le fonctionnement, par le <strong>dispositif de test intégré</strong> ou sur une <strong>source de contrôle</strong>, avant et après la VAT.</li>
</ul>
<p>Le dispositif de test intégré contrôle surtout l'électronique et la pile ; l'essai sur une source sous tension connue vérifie toute la chaîne, quand les instructions le prévoient. Le détecteur peut être influencé par des conducteurs voisins sous tension : on suit le mode opératoire du fabricant pour éviter de fausses indications.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un détecteur HT, c'est une plage de tension précise, un contrôle avant et après, et une utilisation au bout d'une perche adaptée, mains derrière la garde.</div>`
        },
        {
          titre: "Les dispositifs de MALT-CC",
          contenu: `<p>Un dispositif mobile de MALT-CC comprend une <strong>pince de terre</strong>, des <strong>câbles ou tresses</strong> en cuivre souple, des <strong>pinces de phase</strong> et la perche qui permet de les poser. Il est dimensionné pour le <strong>courant de court-circuit</strong> de l'ouvrage : s'il est sous-dimensionné, il fond lors d'une remise sous tension accidentelle et ne protège plus personne.</p>
<ul>
<li>La gaine des câbles est souvent transparente pour voir l'état des brins : un brin coupé ou oxydé est un défaut.</li>
<li>Les pinces doivent serrer franchement sur des surfaces propres ; les points de raccordement prévus sont utilisés.</li>
<li>Un dispositif qui a supporté un court-circuit est retiré et contrôlé avant réemploi.</li>
</ul>
<p>Les MALT-CC fixes sont réalisées par les <strong>sectionneurs de terre</strong> des cellules ; les dispositifs mobiles complètent au plus près de la zone de travail.</p>`
        },
        {
          titre: "Se protéger contre l'arc électrique",
          contenu: `<p>Un arc HT dégage une énergie considérable en quelques fractions de seconde : chaleur intense, rayonnement ultraviolet, projection de métal fondu, onde de pression et gaz chauds. La protection repose d'abord sur l'organisation (consigner, respecter les distances, suivre la fiche de manœuvre), puis sur les équipements :</p>
<table>
<thead><tr><th>Équipement</th><th>Protège contre</th></tr></thead>
<tbody>
<tr><td>Casque avec écran facial anti-UV</td><td>Brûlures du visage, rayonnement UV, projections</td></tr>
<tr><td>Vêtement de protection contre l'arc, couvrant, manches baissées et fermé</td><td>Brûlures par le flux thermique et l'inflammation des vêtements</td></tr>
<tr><td>Sous-vêtements en fibres naturelles ou non fusibles</td><td>Brûlures par fusion de fibres synthétiques sur la peau</td></tr>
<tr><td>Gants isolants (avec surgants si besoin)</td><td>Contact avec une commande mise sous tension, brûlures des mains</td></tr>
</tbody>
</table>
<p>La posture compte aussi : se placer sur le côté plutôt que face à une partie qui pourrait s'ouvrir, ne pas rester devant les volets ou évacuations de gaz d'une cellule, retirer les objets métalliques personnels (bracelet, montre, chaîne).</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un vêtement en tissu synthétique ordinaire est dangereux en cas d'arc : il fond et colle à la peau. La protection contre l'arc demande des vêtements prévus pour cet usage.</div>`
        }
      ],
      points_cles: [
        "Gants : classe 00 (500 V), 0 (1 000 V), 1 (7,5 kV), 2 (17 kV), 3 (26,5 kV), 4 (36 kV)",
        "Tension maximale d'utilisation des gants au moins égale à la tension de l'ouvrage",
        "Gants : contrôle visuel et test de gonflage avant chaque usage, date d'essai périodique",
        "Tabouret ou tapis isolant : propre, sec, stable ; ne toucher aucune masse pendant la manœuvre",
        "Perche : mains derrière la garde ; jamais rallongée ; propre, sèche, non fendue",
        "Détecteur HT : plage de tension adaptée, contrôle avant et après",
        "MALT-CC dimensionnée pour le courant de court-circuit ; brin coupé : retrait",
        "Contre l'arc : écran facial anti-UV, vêtement prévu pour l'arc, pas de synthétique, bonne posture"
      ]
    }
  );

  P.questions.push(
    { id: "HT-206", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Des gants isolants de classe 0 sont prévus pour une tension maximale d'utilisation de :", options: ["500 V", "7 500 V", "1 000 V", "17 000 V"], bonnes: [2],
      explication: "Classe 00 : 500 V ; classe 0 : 1 000 V ; classe 1 : 7 500 V ; classe 2 : 17 000 V." },
    { id: "HT-207", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Quelles classes de gants isolants sont destinées à la haute tension ?", options: ["Classe 00", "Classe 0", "Classe 3", "Classe 4"], bonnes: [2, 3],
      explication: "Les classes 00 et 0 sont pour la BT. Les classes 1 à 4 couvrent la HTA, jusqu'à 36 kV pour la classe 4." },
    { id: "HT-208", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Les gants isolants de classe 4 ont une tension maximale d'utilisation de :", options: ["26 500 V", "17 000 V", "36 000 V"], bonnes: [2],
      explication: "Classe 4 : 36 kV ; classe 3 : 26,5 kV ; classe 2 : 17 kV." },
    { id: "HT-209", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Pour choisir la classe de gants, la tension maximale d'utilisation doit être :", options: ["Inférieure à la tension de l'ouvrage", "Au moins égale à la tension de l'ouvrage", "Sans rapport avec la tension"], bonnes: [1],
      explication: "Le gant doit être prévu pour une tension au moins égale à celle de l'ouvrage, selon les instructions de l'employeur." },
    { id: "HT-210", chapitre: "ht-equipements-outillage", domaine: "HT", situation: "Au test de gonflage, un gant de classe 3 laisse échapper un très léger filet d'air.",
      q: "Vous :", options: ["Le retirez et le signalez", "L'utilisez, la fuite est minime", "Le réparez avec une rustine"], bonnes: [0],
      explication: "Une fuite révèle un trou ou une fissure : l'isolement n'est plus garanti. Le gant est retiré, jamais réparé par l'utilisateur." },
    { id: "HT-211", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Les gants isolants se rangent :", options: ["Pliés en quatre dans la poche", "À plat dans leur housse", "À l'abri de la chaleur et du soleil", "Sur le capot du transformateur pour qu'ils soient secs"], bonnes: [1, 2],
      explication: "Plis, chaleur, soleil et ozone dégradent l'élastomère. On les range à plat, dans leur housse, au frais et à l'abri." },
    { id: "HT-212", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Les gants isolants, en HT, permettent :", options: ["De protéger l'opérateur lors des manœuvres, VAT et poses de MALT-CC, en complément des distances et de la perche", "De toucher une pièce nue HT sous tension"], bonnes: [0],
      explication: "En dehors des travaux sous tension, on ne touche jamais une pièce nue HT, même avec des gants." },
    { id: "HT-213", chapitre: "ht-equipements-outillage", domaine: "HT", situation: "Vous manœuvrez une commande de sectionneur debout sur un tabouret isolant.",
      q: "Pendant la manœuvre :", options: ["Vous pouvez vous appuyer sur la charpente métallique", "Un collègue peut vous tenir par l'épaule", "Vous restez entièrement sur le tabouret sans toucher de masse"], bonnes: [2],
      explication: "Le tabouret n'isole que si l'on ne crée pas d'autre chemin vers la terre : mur, charpente, autre personne." },
    { id: "HT-214", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Un tapis isolant perd de son efficacité s'il est :", options: ["Propre et sec", "Couvert de boue humide", "Troué ou fissuré"], bonnes: [1, 2],
      explication: "Salissures humides et trous créent un chemin pour le courant. On vérifie le tapis avant usage." },
    { id: "HT-215", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "La garde d'une perche isolante indique :", options: ["L'endroit où l'on accroche le détecteur", "La limite que les mains ne doivent pas dépasser", "La longueur maximale de la perche"], bonnes: [1],
      explication: "Au-delà de la garde, la longueur isolante serait réduite. Les mains restent côté poignée." },
    { id: "HT-216", chapitre: "ht-equipements-outillage", domaine: "HT", situation: "La perche disponible est un peu courte pour atteindre le conducteur. Un collègue propose d'y fixer un tube de rallonge.",
      q: "C'est :", options: ["Interdit : on utilise une perche de longueur adaptée", "Acceptable si le tube est en plastique", "Acceptable si on tient la perche par la garde"], bonnes: [0],
      explication: "Une perche ne se rallonge jamais avec un élément de fortune. Si elle est trop courte, on prend la perche prévue." },
    { id: "HT-217", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Avant d'utiliser un détecteur de tension HT, je vérifie :", options: ["Que sa plage de tension correspond à l'ouvrage", "Son fonctionnement par le test intégré ou une source de contrôle", "Qu'il est prévu pour l'intérieur ou l'extérieur selon le cas", "Sa couleur"], bonnes: [0, 1, 2],
      explication: "Plage de tension, usage intérieur ou extérieur, état et fonctionnement : le détecteur doit être adapté et en état." },
    { id: "HT-218", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Un détecteur de tension HT conçu pour 10 à 20 kV peut-il servir sur un ouvrage de 63 kV ?", options: ["Oui, il indiquera plus fort", "Non, il doit être adapté à la tension de l'ouvrage"], bonnes: [1],
      explication: "Hors de sa plage, un détecteur peut donner une indication fausse et exposer l'opérateur à un amorçage." },
    { id: "HT-219", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Un dispositif de MALT-CC doit être dimensionné pour :", options: ["Le courant nominal d'une prise de courant", "La longueur de la perche", "Le courant de court-circuit de l'ouvrage"], bonnes: [2],
      explication: "En cas de remise sous tension accidentelle, il doit supporter le court-circuit sans fondre." },
    { id: "HT-220", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Un dispositif de MALT-CC qui a supporté un court-circuit :", options: ["Est réutilisé directement", "Est retiré et contrôlé avant tout réemploi"], bonnes: [1],
      explication: "L'effort thermique et mécanique du court-circuit a pu l'endommager. Il est retiré du service et contrôlé." },
    { id: "HT-221", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Contre les effets d'un arc électrique, quels équipements portez-vous ?", options: ["Un casque avec écran facial anti-UV", "Un vêtement prévu pour la protection contre l'arc", "Un tee-shirt en polyester", "Des gants isolants"], bonnes: [0, 1, 3],
      explication: "Les fibres synthétiques fondent et collent à la peau sous l'effet de l'arc. On porte des vêtements prévus pour cet usage." },
    { id: "HT-222", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Pendant une manœuvre dans une cellule HTA, on se place de préférence :", options: ["Juste devant les volets d'évacuation des gaz", "Sur le côté, hors de l'axe des parties qui pourraient s'ouvrir", "Le visage collé au hublot pour bien voir"], bonnes: [1],
      explication: "En cas d'arc interne, gaz chauds et projections sortent par les volets et les ouvertures. On se tient hors de leur axe." },
    { id: "HT-223", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Avant une manœuvre HT, je retire :", options: ["Ma montre et mes bijoux métalliques", "Mon casque à écran", "Mon vêtement de protection"], bonnes: [0],
      explication: "Les objets métalliques peuvent conduire le courant ou chauffer en cas d'arc. Les EPI, eux, restent en place." },
    { id: "HT-224", chapitre: "ht-equipements-outillage", domaine: "HT", situation: "La gaine transparente d'un câble de MALT-CC laisse voir plusieurs brins coupés.",
      q: "Vous :", options: ["Le retirez du service et le signalez", "L'utilisez, il reste assez de brins"], bonnes: [0],
      explication: "La section n'est plus garantie : le dispositif pourrait fondre lors d'un court-circuit." },
    { id: "HT-225", chapitre: "ht-equipements-outillage", domaine: "HT",
      q: "Les surgants en cuir portés par-dessus les gants isolants servent à :", options: ["Augmenter la classe des gants", "Protéger mécaniquement les gants isolants"], bonnes: [1],
      explication: "Les surgants protègent l'élastomère des coupures et frottements. Ils ne changent pas la classe d'isolement." }
  );
})();

/* ───────────── Thème HT — Accident et incendie en haute tension ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "ht-accident-incendie",
      theme: "HT",
      parcours: ["btht"],
      titre: "Accident et incendie en haute tension : la conduite à tenir",
      duree: 22,
      objectifs: [
        "Comprendre pourquoi on n'approche jamais une victime en contact avec la HT",
        "Faire couper par l'exploitant et obtenir une mise hors tension certaine",
        "Réagir face à un conducteur tombé au sol ou à un engin au contact d'une ligne",
        "Donner une alerte complète en précisant le caractère HT",
        "Connaître les spécificités d'un incendie dans un poste HT"
      ],
      sections: [
        {
          titre: "Pourquoi la haute tension change tout pour le sauveteur",
          contenu: `<p>En basse tension, un sauveteur formé et équipé peut, dans certains cas, dégager une victime avec une perche ou des gants isolants. En <strong>haute tension, jamais</strong> :</p>
<ul>
<li>l'arc peut s'amorcer à distance : le sauveteur qui s'approche à moins de la distance de sécurité est électrisé sans rien toucher ;</li>
<li>le sol autour d'un point de contact peut être porté à une tension dangereuse (<strong>tension de pas</strong>) ;</li>
<li>une ligne qui a déclenché peut être <strong>réenclenchée automatiquement</strong> quelques instants plus tard ;</li>
<li>le corps de la victime, ou l'engin qu'elle conduisait, peut lui-même être sous tension.</li>
</ul>
<p>Les lésions en HT sont souvent très graves : brûlures profondes aux points d'entrée et de sortie du courant, brûlures internes invisibles, arrêt cardiaque, atteintes des reins, et chutes de hauteur quand la victime travaillait sur un support ou une nacelle.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> la plupart des sauveteurs morts en HT voulaient aider vite. En HT, le geste qui sauve, c'est de rester à distance et de faire couper.</div>`
        },
        {
          titre: "Protéger : distance et mise hors tension par l'exploitant",
          contenu: `<ol>
<li><strong>Ne pas s'approcher</strong> de la victime ni de l'ouvrage ; empêcher toute autre personne de s'approcher et baliser si possible.</li>
<li><strong>Faire couper</strong> l'alimentation par l'exploitant : le chargé d'exploitation du poste, ou le gestionnaire du réseau pour une ligne publique, par son numéro d'urgence. Une personne habilitée présente dans le poste peut réaliser une <strong>manœuvre d'urgence</strong> selon les consignes.</li>
<li><strong>Attendre la confirmation</strong> que l'ouvrage est hors tension et ne sera pas remis sous tension : pour une ligne, l'exploitant doit aussi neutraliser le réenclenchement.</li>
<li>Pour approcher l'ouvrage lui-même, il faut qu'il soit <strong>mis à la terre et en court-circuit</strong> par une personne habilitée et équipée, ou que l'exploitant donne l'autorisation d'approcher.</li>
</ol>
<p>La distance à tenir est au minimum celle du voisinage (3 m jusqu'à 50 kV, 5 m au-delà), et beaucoup plus si un conducteur touche le sol ou un objet conducteur, à cause de la tension de pas.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « la ligne ne fait plus de bruit, les lumières se sont éteintes » ne prouve pas qu'elle est hors tension. Seule la confirmation de l'exploitant compte.</div>`
        },
        {
          titre: "Conducteur au sol et engin au contact d'une ligne",
          contenu: `<p>Quand un conducteur HT touche le sol, le courant se répand dans la terre : le potentiel du sol diminue progressivement en s'éloignant du point de contact. Entre deux pieds écartés, il existe une différence de potentiel : c'est la <strong>tension de pas</strong>, d'autant plus forte que l'on est proche du point de contact et que le pas est grand.</p>
<table>
<thead><tr><th>Situation</th><th>Conduite à tenir</th></tr></thead>
<tbody>
<tr><td>Vous voyez un conducteur au sol</td><td>Rester loin, faire éloigner tout le monde, alerter l'exploitant et les secours</td></tr>
<tr><td>Vous êtes près d'un conducteur au sol</td><td>S'éloigner à tout petits pas, pieds joints ou presque, sans courir</td></tr>
<tr><td>Votre engin touche une ligne</td><td>Rester dans la cabine ; si possible, dégager l'engin en inversant le dernier mouvement ; interdire à quiconque d'approcher</td></tr>
<tr><td>Vous devez quitter l'engin (incendie)</td><td>Sauter pieds joints, loin de l'engin, sans toucher en même temps l'engin et le sol ; s'éloigner à petits pas ou pieds joints</td></tr>
<tr><td>Une personne au sol touche l'engin</td><td>Lui crier de ne pas bouger s'il est encore en contact, de ne rien toucher ; personne n'approche</td></tr>
</tbody>
</table>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> la flèche d'un camion-grue touche une ligne 20 kV. Le grutier reste en cabine et tente de relever la flèche dans l'autre sens. Le chef d'équipe fait reculer les ouvriers, appelle le gestionnaire du réseau puis les secours. Personne ne touche le camion avant la confirmation de la mise hors tension.</div>`
        },
        {
          titre: "Alerter et secourir",
          contenu: `<p>L'alerte (15, 18 ou 112) précise, en plus des informations habituelles :</p>
<ul>
<li>qu'il s'agit d'un accident <strong>haute tension</strong>, avec la tension si on la connaît ;</li>
<li>si l'ouvrage est <strong>coupé ou non</strong>, et qui a été prévenu (exploitant, gestionnaire du réseau) ;</li>
<li>l'identification de l'ouvrage : nom ou numéro du poste, de la ligne, du support ;</li>
<li>la présence éventuelle d'un engin, d'un incendie, d'un conducteur au sol.</li>
</ul>
<p>On envoie quelqu'un accueillir les secours pour les guider et leur indiquer la zone à ne pas approcher. Une fois la mise hors tension confirmée et l'approche autorisée, on applique les gestes de secours : réanimation cardio-pulmonaire et défibrillateur si la victime ne respire pas, refroidissement des brûlures, surveillance. Toute victime d'un accident HT est examinée à l'hôpital, même si elle semble aller bien.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> rester à distance, faire couper par l'exploitant, attendre sa confirmation, alerter en précisant « haute tension », puis seulement secourir.</div>`
        },
        {
          titre: "L'incendie dans un poste HT",
          contenu: `<p>Un poste HT présente des risques d'incendie particuliers :</p>
<ul>
<li>les <strong>transformateurs immergés</strong> contiennent des centaines de litres d'huile : l'incendie est un feu de liquide, contenu par la rétention et parfois par un lit de cailloux qui étouffe les flammes ;</li>
<li>les anciens transformateurs au <strong>PCB</strong> dégagent en brûlant des fumées très toxiques ;</li>
<li>beaucoup de cellules contiennent du gaz <strong>SF6</strong> comme isolant : sous l'effet d'un arc ou d'un incendie, il se décompose en produits toxiques et corrosifs ; après un arc interne, on ventile le local et on suit les consignes avant d'y entrer ;</li>
<li>les câbles en feu dégagent des fumées épaisses et toxiques.</li>
</ul>
<p>La conduite à tenir :</p>
<ol>
<li>donner l'alerte (18 ou 112) en précisant la présence de <strong>haute tension</strong>, et prévenir le chargé d'exploitation ;</li>
<li>faire mettre hors tension le poste par l'exploitant, ou réaliser la manœuvre d'urgence prévue si on est habilité et que cela peut se faire sans danger ;</li>
<li>ne pas pénétrer dans un poste enfumé ; fermer les portes pour limiter l'apport d'air ;</li>
<li>n'attaquer un feu naissant qu'avec un extincteur adapté (CO2 par exemple), après la mise hors tension de la partie HT, et jamais avec de l'eau en jet ;</li>
<li>accueillir les pompiers et leur remettre les informations : tension, état de coupure, présence d'huile, de PCB ou de SF6.</li>
</ol>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> les extincteurs portatifs ne sont pas faits pour être utilisés à proximité de pièces HT sous tension. En HT, on fait d'abord couper.</div>`
        }
      ],
      points_cles: [
        "En HT, on n'approche jamais une victime en contact ou près de l'ouvrage : l'arc s'amorce à distance",
        "Faire couper par l'exploitant et attendre sa confirmation, réenclenchement neutralisé",
        "Approche de l'ouvrage seulement après MALT-CC par une personne habilitée ou autorisation de l'exploitant",
        "Conducteur au sol : tension de pas ; s'éloigner à petits pas, pieds joints",
        "Engin au contact : rester dans la cabine ; en cas d'incendie, sauter pieds joints sans toucher engin et sol en même temps",
        "Alerte : préciser haute tension, état de coupure, identification de l'ouvrage",
        "Toute victime HT va à l'hôpital, même si elle semble aller bien",
        "Incendie de poste : huile, PCB, SF6 ; couper d'abord, jamais d'eau en jet, ne pas entrer dans un poste enfumé"
      ]
    }
  );

  P.questions.push(
    { id: "HT-226", chapitre: "ht-accident-incendie", domaine: "HT", situation: "Un monteur est resté accroché à un conducteur HTA sur un support. Il ne bouge plus.",
      q: "Vous :", options: ["Grimpez le dégager avec des gants isolants", "Restez à distance et empêchez quiconque d'approcher", "Faites couper la ligne par l'exploitant", "Lancez une corde pour le tirer"], bonnes: [1, 2],
      explication: "En HT, on n'approche jamais : l'amorçage et la remise sous tension sont possibles. On fait couper par l'exploitant et on alerte." },
    { id: "HT-227", chapitre: "ht-accident-incendie", domaine: "HT", situation: "Une ligne HTA a déclenché après un accident. Les lumières du voisinage se sont éteintes.",
      q: "Pouvez-vous approcher la victime ?", options: ["Oui, la ligne est coupée", "Non, pas avant la confirmation de l'exploitant, réenclenchement neutralisé"], bonnes: [1],
      explication: "Une ligne qui a déclenché peut être réenclenchée automatiquement. Seule la confirmation de l'exploitant permet d'avancer." },
    { id: "HT-228", chapitre: "ht-accident-incendie", domaine: "HT",
      q: "Pour approcher un ouvrage HT après un accident, il faut :", options: ["Que l'exploitant ait confirmé la mise hors tension", "Que l'ouvrage soit mis à la terre et en court-circuit, ou que l'exploitant autorise l'approche", "Que la victime ne bouge plus"], bonnes: [0, 1],
      explication: "La confirmation de la coupure et la MALT-CC (ou l'autorisation de l'exploitant) sont les conditions de l'approche." },
    { id: "HT-229", chapitre: "ht-accident-incendie", domaine: "HT",
      q: "La tension de pas est :", options: ["La tension entre deux phases", "La tension d'un détecteur de pas", "La tension entre les deux pieds d'une personne debout sur un sol traversé par un courant"], bonnes: [2],
      explication: "Près d'un point de contact à la terre, le potentiel du sol varie avec la distance : deux pieds écartés sont à des potentiels différents." },
    { id: "HT-230", chapitre: "ht-accident-incendie", domaine: "HT", situation: "Un conducteur HTA est tombé au sol à quelques mètres de vous.",
      q: "Comment vous éloignez-vous ?", options: ["En courant à grandes enjambées", "À tout petits pas, pieds joints ou presque", "En rampant"], bonnes: [1],
      explication: "Plus l'écart entre les pieds est grand, plus la tension de pas est forte. Petits pas ou pieds joints la limitent." },
    { id: "HT-231", chapitre: "ht-accident-incendie", domaine: "HT", situation: "La flèche de votre camion-grue touche une ligne 20 kV. Aucun incendie.",
      q: "Vous :", options: ["Restez dans la cabine", "Descendez rapidement par l'échelle", "Tentez de dégager la flèche en inversant le dernier mouvement", "Demandez à un collègue de vous aider à descendre en vous tenant la main"], bonnes: [0, 2],
      explication: "La cabine est un abri tant qu'on ne relie pas l'engin au sol. Descendre ou se faire aider expose à l'électrisation." },
    { id: "HT-232", chapitre: "ht-accident-incendie", domaine: "HT", situation: "Votre engin, au contact d'une ligne HT, prend feu. Vous devez sortir.",
      q: "Vous :", options: ["Descendez normalement en vous tenant à la poignée", "Sautez pieds joints, loin de l'engin, sans toucher en même temps l'engin et le sol", "Vous éloignez ensuite à petits pas ou pieds joints"], bonnes: [1, 2],
      explication: "Il ne faut jamais être en contact simultané avec l'engin et le sol. Après le saut, la tension de pas impose de petits pas." },
    { id: "HT-233", chapitre: "ht-accident-incendie", domaine: "HT",
      q: "Lors de l'alerte pour un accident HT, il faut préciser :", options: ["Qu'il s'agit de haute tension", "Si l'ouvrage est coupé ou non", "Le nom ou le numéro du poste ou de la ligne", "La marque de l'engin"], bonnes: [0, 1, 2],
      explication: "Ces informations changent la manière d'intervenir des secours, qui ne doivent pas approcher un ouvrage non coupé." },
    { id: "HT-234", chapitre: "ht-accident-incendie", domaine: "HT", situation: "Un collègue électrisé par un arc HT se relève, dit qu'il va bien et veut reprendre le travail.",
      q: "Vous :", options: ["Exigez un examen médical à l'hôpital", "Le laissez reprendre"], bonnes: [0],
      explication: "Brûlures internes et troubles cardiaques peuvent apparaître plus tard. Toute victime d'un accident HT est examinée." },
    { id: "HT-235", chapitre: "ht-accident-incendie", domaine: "HT",
      q: "Quelles lésions sont typiques d'un accident en haute tension ?", options: ["Brûlures profondes aux points d'entrée et de sortie", "Brûlures internes invisibles", "Simple picotement sans conséquence", "Arrêt cardiaque"], bonnes: [0, 1, 3],
      explication: "La HT provoque des lésions graves, souvent invisibles en surface, et des troubles cardiaques." },
    { id: "HT-236", chapitre: "ht-accident-incendie", domaine: "HT", situation: "Une fumée sort d'un poste HTA/BT de votre site.",
      q: "Vous :", options: ["Entrez dans le poste pour localiser le feu", "Donnez l'alerte en précisant la présence de haute tension", "Prévenez le chargé d'exploitation"], bonnes: [1, 2],
      explication: "On n'entre pas dans un poste enfumé. On alerte en précisant le caractère HT et on prévient l'exploitant, qui fera couper." },
    { id: "HT-237", chapitre: "ht-accident-incendie", domaine: "HT",
      q: "Sur un début de feu dans un poste HT, avant d'utiliser un extincteur, il faut :", options: ["Faire mettre hors tension la partie HT", "Asperger d'eau en jet pour refroidir", "Ouvrir grand les portes pour aérer"], bonnes: [0],
      explication: "Les extincteurs portatifs ne sont pas prévus près de pièces HT sous tension. L'eau en jet est interdite ; on ferme les portes pour limiter l'air." },
    { id: "HT-238", chapitre: "ht-accident-incendie", domaine: "HT",
      q: "Après un arc interne dans une cellule contenant du SF6, on :", options: ["Ventile le local et suit les consignes avant d'y entrer", "Entre aussitôt, le SF6 est inoffensif dans tous les cas"], bonnes: [0],
      explication: "Sous l'effet d'un arc, le SF6 se décompose en produits toxiques et corrosifs. On ventile et on applique les consignes." },
    { id: "HT-239", chapitre: "ht-accident-incendie", domaine: "HT",
      q: "Dans un poste, l'incendie d'un transformateur immergé est surtout :", options: ["Un feu de métaux", "Un feu de gaz uniquement", "Un feu de liquide (huile)"], bonnes: [2],
      explication: "L'huile du transformateur brûle comme un liquide inflammable. La rétention limite son extension." },
    { id: "HT-240", chapitre: "ht-accident-incendie", domaine: "HT",
      q: "À l'arrivée des pompiers sur un incendie de poste, on leur indique :", options: ["La tension et l'état de coupure", "La présence d'huile, de PCB ou de SF6", "L'emplacement des pièces sous tension à ne pas approcher"], bonnes: [0, 1, 2],
      explication: "Ces informations conditionnent leur intervention. Quelqu'un est envoyé les accueillir et les guider." },
    { id: "HT-241", chapitre: "ht-accident-incendie", domaine: "HT", situation: "Un passant veut toucher un camion dont la benne levée touche une ligne HT.",
      q: "Vous :", options: ["Lui criez de ne pas approcher et faites éloigner tout le monde", "Le laissez faire, les pneus isolent le camion"], bonnes: [0],
      explication: "Le camion est sous tension. Les pneus n'isolent pas de façon fiable et le sol autour est dangereux." },
    { id: "HT-242", chapitre: "ht-accident-incendie", domaine: "HT",
      q: "Une personne habilitée présente dans un poste où se produit un accident peut :", options: ["Remettre sous tension après l'accident sans prévenir personne", "Réaliser une manœuvre d'urgence de mise hors tension, selon les consignes", "Dégager la victime en contact avec la HT à mains nues"], bonnes: [1],
      explication: "La manœuvre d'urgence sert à supprimer le danger. Elle doit être faite sans exposer l'opérateur, et l'exploitant en est informé." },
    { id: "HT-243", chapitre: "ht-accident-incendie", domaine: "HT",
      q: "Une victime d'un accident HT a été dégagée après la mise hors tension confirmée. Elle ne respire pas. Vous :", options: ["Commencez la réanimation cardio-pulmonaire", "Faites chercher un défibrillateur", "Attendez les secours sans rien faire"], bonnes: [0, 1],
      explication: "Une fois le danger électrique supprimé, on applique les gestes de secours : RCP et défibrillateur." }
  );
})();

/* ───────────── Thème HT — Risques spécifiques de la haute tension ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "ht-risques-specifiques",
      theme: "HT",
      parcours: ["btht"],
      titre: "Risques spécifiques HT : défauts à la terre, tensions de pas et de toucher, induction, effets capacitifs",
      duree: 22,
      objectifs: [
        "Comprendre ce qui se passe lors d'un défaut à la terre en HT",
        "Distinguer tension de toucher et tension de pas",
        "Reconnaître les situations d'induction électromagnétique et électrostatique",
        "Prendre en compte la charge des câbles et des condensateurs",
        "Repérer les tensions transférées par des objets conducteurs"
      ],
      sections: [
        {
          titre: "Le défaut à la terre en haute tension",
          contenu: `<p>Un <strong>défaut à la terre</strong> se produit quand un conducteur HT entre en contact avec une masse ou avec le sol : isolateur cassé, câble percé par un engin, conducteur tombé, amorçage vers une charpente. Un courant important s'écoule alors dans la terre jusqu'à ce que la protection coupe, ce qui peut prendre un certain temps.</p>
<p>Pendant ce temps :</p>
<ul>
<li>les <strong>masses</strong> reliées à la prise de terre du poste (charpentes, cuves, carcasses de cellules) montent à un potentiel élevé par rapport à la terre lointaine : c'est la <strong>montée en potentiel</strong> de la terre du poste ;</li>
<li>le sol autour du point de défaut présente des différences de potentiel entre deux points proches ;</li>
<li>des objets conducteurs qui sortent du poste (clôture, rails, canalisations, câbles) peuvent <strong>transférer</strong> ce potentiel loin du poste.</li>
</ul>
<p>C'est pourquoi les postes ont un <strong>réseau de terre maillé</strong> sous le sol et des liaisons équipotentielles entre toutes les masses : elles limitent les différences de potentiel accessibles aux personnes.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en HT, un défaut à la terre ne met pas seulement en danger celui qui touche le conducteur : il rend dangereux le sol et les masses autour du point de défaut.</div>`
        },
        {
          titre: "Tension de toucher et tension de pas",
          contenu: `<table>
<thead><tr><th></th><th>Tension de toucher</th><th>Tension de pas</th></tr></thead>
<tbody>
<tr><td>Définition</td><td>Différence de potentiel entre une masse que l'on touche avec la main et ses pieds</td><td>Différence de potentiel entre les deux pieds écartés sur un sol parcouru par un courant</td></tr>
<tr><td>Situation type</td><td>Toucher la carcasse d'une cellule ou un support métallique pendant un défaut</td><td>Marcher près d'un conducteur tombé ou d'un support en défaut</td></tr>
<tr><td>Trajet du courant</td><td>Main – pieds, à travers le thorax</td><td>Pied – pied, à travers les jambes</td></tr>
<tr><td>Moyens de réduction</td><td>Équipotentialité des masses, maillage de terre, gants isolants, tapis ou tabouret isolant</td><td>Maillage de terre, revêtement de sol, s'éloigner à petits pas ou pieds joints</td></tr>
</tbody>
</table>
<p>La tension de toucher est souvent la plus dangereuse, car le courant traverse le cœur. La tension de pas peut faire chuter la victime, qui se retrouve alors allongée sur le sol avec un trajet bien plus dangereux.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un isolateur casse sur un support métallique de ligne HTA. Le support est porté à un potentiel élevé. Une personne qui s'appuie sur le pied du support subit une tension de toucher ; une personne qui marche à côté subit une tension de pas.</div>`
        },
        {
          titre: "L'induction",
          contenu: `<p>Un ouvrage HT en service crée autour de lui un <strong>champ magnétique</strong> (dû au courant) et un <strong>champ électrique</strong> (dû à la tension). Ces champs peuvent faire apparaître une tension dans un conducteur voisin, même séparé de toute source : c'est l'<strong>induction</strong>.</p>
<table>
<thead><tr><th>Type</th><th>Cause</th><th>Situations</th><th>Parade</th></tr></thead>
<tbody>
<tr><td>Induction électromagnétique</td><td>Courant dans un ouvrage voisin parallèle</td><td>Ligne consignée qui longe une ligne en service ; câbles posés côte à côte sur une grande longueur</td><td>MALT-CC de part et d'autre de la zone de travail, liaisons équipotentielles</td></tr>
<tr><td>Induction électrostatique (couplage capacitif)</td><td>Tension d'un ouvrage voisin</td><td>Conducteur ou objet métallique isolé du sol sous une ligne : clôture, véhicule, câble déroulé, échafaudage</td><td>Mise à la terre des objets et des conducteurs, avant de les toucher</td></tr>
</tbody>
</table>
<p>L'induction électromagnétique augmente avec le courant de la ligne voisine et la longueur du parallélisme. Elle peut créer des tensions dangereuses entre les deux extrémités d'un conducteur consigné ; c'est l'une des raisons pour lesquelles la MALT-CC encadre la zone de travail.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un conducteur séparé de toute source et vérifié hors tension peut quand même présenter une tension par induction. La VAT ne suffit pas : la MALT-CC est indispensable en HT.</div>`
        },
        {
          titre: "Les effets capacitifs : câbles et condensateurs",
          contenu: `<p>Deux conducteurs séparés par un isolant forment un <strong>condensateur</strong>. Un câble HT (âme, isolant, écran) en est un, de grande capacité, d'autant plus que le câble est long. Après la séparation :</p>
<ul>
<li>le câble peut garder une <strong>charge résiduelle</strong> dangereuse pendant longtemps ;</li>
<li>un essai diélectrique ou une mesure d'isolement le charge à son tour ;</li>
<li>la MALT-CC le décharge, et doit rester en place jusqu'à la fin des travaux.</li>
</ul>
<p>Les <strong>batteries de condensateurs</strong> (compensation de l'énergie réactive, filtres) stockent volontairement de l'énergie. Elles sont équipées de résistances de décharge, mais il faut respecter le temps de décharge indiqué, puis les décharger et les mettre à la terre avec le dispositif prévu avant tout contact. Une batterie peut aussi se recharger partiellement après une première décharge : la mise à la terre reste en place pendant les travaux.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> une batterie de condensateurs ou un câble HT séparé depuis plusieurs minutes peut encore foudroyer. Décharge et mise à la terre d'abord, toujours.</div>`
        },
        {
          titre: "Tensions transférées et autres pièges",
          contenu: `<ul>
<li><strong>Tensions transférées</strong> : un objet conducteur long (clôture métallique, rail, canalisation, écran de câble, câble de télécommunication) peut amener le potentiel d'un poste en défaut à un endroit éloigné, ou au contraire amener la terre lointaine dans le poste. On ne relie pas n'importe quoi à la terre du poste, et on suit les consignes sur les clôtures et les canalisations.</li>
<li><strong>Retours de tension</strong> par le côté BT d'un transformateur ou par le secondaire d'un TT : traités à la séparation.</li>
<li><strong>Charges électrostatiques</strong> accumulées sur des objets isolés sous les lignes à très haute tension : petites décharges désagréables qui peuvent provoquer un geste réflexe et une chute.</li>
<li><strong>Arc et amorçage</strong> : la distance d'amorçage augmente avec la tension et l'humidité ; on respecte les distances de la zone.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une équipe déroule un câble neuf le long d'une ligne HTA en service. Avant de manipuler les extrémités, le chargé de travaux fait mettre le câble à la terre : sans cela, la tension induite par la ligne voisine pourrait électriser celui qui le touche.</div>`
        }
      ],
      points_cles: [
        "Défaut à la terre en HT : montée en potentiel des masses et du sol autour du point de défaut",
        "Tension de toucher : main – pieds ; tension de pas : pied – pied",
        "Maillage de terre et équipotentialité limitent les tensions de toucher et de pas",
        "Induction électromagnétique : due au courant d'un ouvrage parallèle",
        "Induction électrostatique : due à la tension d'un ouvrage voisin sur un objet isolé du sol",
        "Un conducteur séparé et vérifié peut présenter une tension induite : MALT-CC indispensable",
        "Câbles HT et condensateurs gardent une charge : décharge et mise à la terre avant contact",
        "Objets conducteurs longs : risque de tensions transférées"
      ]
    }
  );

  P.questions.push(
    { id: "HT-244", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "Lors d'un défaut à la terre dans un poste HT, les masses reliées à la terre du poste :", options: ["Peuvent monter à un potentiel dangereux", "Restent toujours au potentiel zéro", "Sont coupées automatiquement de la terre"], bonnes: [0],
      explication: "Le courant de défaut traverse la prise de terre du poste, dont le potentiel monte par rapport à la terre lointaine." },
    { id: "HT-245", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "La tension de toucher est la différence de potentiel :", options: ["Entre les deux pieds", "Entre deux phases", "Entre la main qui touche une masse et les pieds"], bonnes: [2],
      explication: "Le courant passe alors de la main aux pieds, à travers le thorax : c'est souvent le trajet le plus dangereux." },
    { id: "HT-246", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "Quels moyens limitent les tensions de toucher et de pas dans un poste ?", options: ["Un réseau de terre maillé", "Les liaisons équipotentielles entre masses", "Le retrait des connexions de terre", "Le tapis ou le tabouret isolant pour les manœuvres"], bonnes: [0, 1, 3],
      explication: "Maillage et équipotentialité réduisent les différences de potentiel ; tapis et tabouret isolent l'opérateur. Retirer les terres aggraverait le danger." },
    { id: "HT-247", chapitre: "ht-risques-specifiques", domaine: "HT", situation: "Un isolateur a cassé sur un support métallique de ligne HTA. Un promeneur s'appuie au pied du support.",
      q: "Il est exposé à :", options: ["Aucun risque, le support est relié à la terre", "Une tension de toucher", "Une tension induite par le vent"], bonnes: [1],
      explication: "Pendant le défaut, le support monte en potentiel : main sur le support et pieds au sol, il subit une tension de toucher." },
    { id: "HT-248", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "Pourquoi la tension de pas peut-elle devenir encore plus dangereuse ?", options: ["Parce qu'elle fait chuter la victime, dont le corps se trouve alors allongé sur le sol", "Parce qu'elle traverse toujours le cœur"], bonnes: [0],
      explication: "Le trajet pied-pied épargne en principe le cœur, mais la chute crée un trajet beaucoup plus dangereux à travers le corps." },
    { id: "HT-249", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "L'induction électromagnétique est due :", options: ["Au courant circulant dans un ouvrage parallèle", "À la tension d'une ligne voisine", "À l'humidité de l'air"], bonnes: [0],
      explication: "Le courant crée un champ magnétique qui induit une tension dans les conducteurs parallèles, d'autant plus que le parallélisme est long." },
    { id: "HT-250", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "L'induction électrostatique concerne surtout :", options: ["Les objets reliés à la terre", "Les câbles enterrés hors service, uniquement", "Des objets métalliques isolés du sol sous une ligne"], bonnes: [2],
      explication: "La tension de la ligne charge les objets isolés du sol (clôture, véhicule, câble déroulé). On les met à la terre avant de les toucher." },
    { id: "HT-251", chapitre: "ht-risques-specifiques", domaine: "HT", situation: "Vous travaillez sur une ligne HTA consignée qui longe sur 2 km une autre ligne restée en service.",
      q: "Quels risques sont à prendre en compte ?", options: ["Une tension induite sur la ligne consignée", "Aucun, la ligne est séparée", "Une différence de potentiel entre les deux extrémités du tronçon"], bonnes: [0, 2],
      explication: "Le parallélisme long induit une tension. Les MALT-CC de part et d'autre de la zone de travail protègent l'équipe." },
    { id: "HT-252", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "Un conducteur HT séparé et vérifié hors tension peut-il présenter une tension dangereuse ?", options: ["Oui, par induction ou charge résiduelle", "Non, la VAT l'a prouvé définitivement"], bonnes: [0],
      explication: "Une tension peut apparaître après la VAT (induction, recharge). D'où la MALT-CC obligatoire en HT." },
    { id: "HT-253", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "Un câble HT se comporte comme un condensateur parce que :", options: ["Il est enterré", "Son âme et son écran sont séparés par un isolant", "Il contient de l'huile"], bonnes: [1],
      explication: "Deux conducteurs séparés par un isolant forment un condensateur. Plus le câble est long, plus sa capacité est grande." },
    { id: "HT-254", chapitre: "ht-risques-specifiques", domaine: "HT", situation: "Une batterie de condensateurs de compensation vient d'être séparée.",
      q: "Avant d'y toucher, vous :", options: ["Respectez le temps de décharge indiqué", "La déchargez et la mettez à la terre avec le dispositif prévu", "La touchez du dos de la main pour vérifier", "Laissez la mise à la terre en place pendant les travaux"], bonnes: [0, 1, 3],
      explication: "Les condensateurs stockent de l'énergie et peuvent se recharger partiellement. On attend, on décharge, on met à la terre et on la laisse en place." },
    { id: "HT-255", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "Après une mesure d'isolement sur un long câble HT :", options: ["Le câble peut être chargé par l'appareil de mesure", "Le câble est forcément déchargé"], bonnes: [0],
      explication: "L'appareil applique une tension continue qui charge le câble. On le décharge et on le met à la terre ensuite." },
    { id: "HT-256", chapitre: "ht-risques-specifiques", domaine: "HT", situation: "Une équipe déroule un câble neuf le long d'une ligne HTA en service.",
      q: "Avant de manipuler les extrémités du câble, on :", options: ["Met le câble à la terre", "Le touche rapidement pour vérifier", "Attend qu'il fasse nuit"], bonnes: [0],
      explication: "Le câble déroulé, isolé du sol, peut se charger par induction. Sa mise à la terre supprime le danger." },
    { id: "HT-257", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "Qu'appelle-t-on une tension transférée ?", options: ["La tension secondaire d'un transformateur", "Une tension mesurée avec une pince", "Un potentiel amené à distance par un objet conducteur long (clôture, rail, canalisation)"], bonnes: [2],
      explication: "Un objet conducteur qui sort d'un poste en défaut peut amener sa montée en potentiel loin de lui, ou l'inverse." },
    { id: "HT-258", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "Quels objets peuvent transférer un potentiel dangereux depuis un poste HT ?", options: ["Une clôture métallique", "Une canalisation métallique", "Une haie végétale sèche", "L'écran d'un câble"], bonnes: [0, 1, 3],
      explication: "Tout objet conducteur long peut transférer un potentiel. Une haie sèche n'est pas un conducteur de ce type." },
    { id: "HT-259", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "Sous une ligne à très haute tension, les petites décharges reçues en touchant un véhicule isolé du sol sont dues :", options: ["Au soleil", "À l'induction électrostatique", "À un défaut du véhicule"], bonnes: [1],
      explication: "Le champ électrique de la ligne charge les objets isolés du sol. Ces décharges peuvent surprendre et provoquer une chute." },
    { id: "HT-260", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "Plus l'écart entre les pieds est grand près d'un point de défaut à la terre :", options: ["Plus la tension de pas est faible", "Plus la tension de pas est forte"], bonnes: [1],
      explication: "Le potentiel varie avec la distance au point de défaut : un grand pas embrasse une plus grande différence de potentiel." },
    { id: "HT-261", chapitre: "ht-risques-specifiques", domaine: "HT",
      q: "Pendant un défaut à la terre, le danger existe :", options: ["Aussi pour les personnes qui touchent les masses ou se tiennent près du point de défaut", "Seulement pour celui qui touche le conducteur"], bonnes: [0],
      explication: "Montée en potentiel des masses et du sol : tensions de toucher et de pas menacent toutes les personnes proches." }
  );
})();
