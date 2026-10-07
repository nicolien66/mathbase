/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — Permis plaisance, option côtière (« code de la mer »)
   Cours et banque de questions : balisage, règles de barre, feux, sécurité,
   météo et marée, réglementation, navigation.
   Références : RIPAM (COLREG 1972), système de balisage AISM région A,
   division 240 (matériel d'armement des navires de plaisance).
   ═══════════════════════════════════════════════════════════════════════════ */
window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["mer"] = window.PERMIS_COURS["mer"] || { chapitres: [], questions: [] };

  P.themes = {
    BAL: "Le balisage",
    BARRE: "Règles de barre et de route",
    FEUX: "Feux et marques des navires",
    SECU: "Sécurité et matériel d'armement",
    METEO: "Météorologie et marée",
    REGL: "Réglementation et environnement",
    NAV: "Navigation et pratique"
  };

  /* ───────────── Thème BAL — Le balisage ───────────── */
  P.chapitres.push(
    {
      id: "balisage-lateral",
      theme: "BAL",
      titre: "Le balisage latéral et l'entrée au port",
      duree: 25,
      objectifs: [
        "Connaître le principe du système de balisage AISM région A utilisé en France",
        "Reconnaître une marque bâbord et une marque tribord à leur couleur, leur forme et leur feu",
        "Savoir de quel côté laisser une marque latérale en entrant et en sortant du port",
        "Comprendre les marques de chenal préféré",
        "Interpréter les feux de jetée, les alignements et les signaux d'entrée de port"
      ],
      sections: [
        {
          titre: "Pourquoi un balisage, et lequel ?",
          contenu: `<p>En mer, il n'y a ni routes ni bas-côtés. Les dangers (roches, hauts-fonds, épaves) sont souvent invisibles sous la surface, et les passages navigables peuvent être étroits. Le <strong>balisage</strong> est l'ensemble des marques fixes (tourelles, perches, balises) ou flottantes (bouées) et des feux qui permettent au navigateur de savoir où il peut passer sans danger.</p>
<p>Le système utilisé dans le monde est celui de l'<strong>AISM</strong> (Association internationale de signalisation maritime). Il comporte deux régions qui ne diffèrent que par les couleurs du balisage latéral :</p>
<ul>
<li><strong>Région A</strong> : Europe, Afrique, Océanie et la plus grande partie de l'Asie. En entrant au port, le <strong>rouge est à bâbord</strong> (à gauche) et le <strong>vert à tribord</strong> (à droite).</li>
<li><strong>Région B</strong> : continent américain, Japon, Corée, Philippines. Les couleurs sont inversées : rouge à tribord en entrant.</li>
</ul>
<p>Les côtes françaises de métropole relèvent de la <strong>région A</strong>. Certains territoires d'outre-mer situés aux Antilles relèvent de la région B : on y retrouve les mêmes formes, mais les couleurs sont inversées. À l'examen, on raisonne toujours en région A.</p>
<p>Le système comprend cinq familles de marques : les marques <strong>latérales</strong>, les marques <strong>cardinales</strong>, les marques de <strong>danger isolé</strong>, les marques d'<strong>eaux saines</strong> et les marques <strong>spéciales</strong>, auxquelles s'ajoute le balisage des <strong>nouveaux dangers</strong>. Ce chapitre traite des marques latérales, qui bordent les chenaux.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en France métropolitaine (région A), en entrant au port, on laisse le <strong>rouge à gauche (bâbord)</strong> et le <strong>vert à droite (tribord)</strong>.</div>`
        },
        {
          titre: "Les marques bâbord et tribord",
          contenu: `<p>Les marques latérales indiquent les <strong>limites d'un chenal</strong>. Elles se lisent dans le <strong>sens conventionnel du balisage</strong>, c'est-à-dire en venant du large vers le port, le fleuve ou l'estuaire.</p>
<table>
<thead><tr><th></th><th>Marque bâbord</th><th>Marque tribord</th></tr></thead>
<tbody>
<tr><td>Dessin</td><td><span class="panneau" data-code="MER_BABORD"></span></td><td><span class="panneau" data-code="MER_TRIBORD"></span></td></tr>
<tr><td>Couleur</td><td>Rouge</td><td>Verte</td></tr>
<tr><td>Forme de la bouée (si elle est caractéristique)</td><td>Cylindrique (« plate » en haut)</td><td>Conique</td></tr>
<tr><td>Voyant (marque de sommet)</td><td>Un cylindre rouge</td><td>Un cône vert, pointe en haut</td></tr>
<tr><td>Feu (s'il existe)</td><td>Rouge, rythme quelconque sauf 2+1</td><td>Vert, rythme quelconque sauf 2+1</td></tr>
<tr><td>Numérotation (si elle existe)</td><td>Numéros pairs</td><td>Numéros impairs</td></tr>
<tr><td>En entrant au port</td><td>À laisser à bâbord (à gauche)</td><td>À laisser à tribord (à droite)</td></tr>
<tr><td>En sortant du port</td><td>À laisser à tribord (à droite)</td><td>À laisser à bâbord (à gauche)</td></tr>
</tbody>
</table>
<p>Les numéros croissent en général du large vers le port. Ils aident à se repérer sur la carte : la bouée n° 6 est la troisième marque bâbord après l'entrée du chenal.</p>
<p>Retenez l'image : en entrant, un chenal ressemble à une route encadrée de rouge à gauche et de vert à droite. Les feux de côté des navires suivent la même convention (rouge à bâbord, vert à tribord), ce qui aide à mémoriser l'ensemble.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la question précise souvent si vous <strong>entrez</strong> ou si vous <strong>sortez</strong> du port. En sortant, tout s'inverse : la marque rouge se laisse à droite (tribord), la verte à gauche (bâbord).</div>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous rentrez au port et une bouée rouge cylindrique apparaît légèrement sur votre droite, devant vous. Pour la laisser à bâbord, vous venez sur tribord afin qu'elle passe sur votre gauche. Si vous la laissiez à droite, vous sortiriez du chenal.</div>`
        },
        {
          titre: "Le sens conventionnel et les marques de chenal préféré",
          contenu: `<p>Dans un chenal d'accès, le sens du balisage est évident : on vient du large. Le long d'une côte ou entre des îles, ce n'est pas toujours le cas. Le <strong>sens conventionnel du balisage</strong> est alors indiqué sur les cartes marines par un symbole (une flèche pleine accompagnée de deux cercles). Avant de naviguer dans une zone inconnue, on le vérifie sur la carte.</p>
<p>Lorsqu'un chenal se divise en deux, on utilise des <strong>marques latérales modifiées</strong>, dites de <strong>chenal préféré</strong>. Elles indiquent quelle branche est le chenal principal :</p>
<table>
<thead><tr><th>Marque</th><th>Aspect</th><th>Feu</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>Bâbord modifiée</td><td>Rouge avec une large bande horizontale verte, voyant cylindre rouge</td><td>Rouge, 2+1 éclats</td><td>Chenal principal à <strong>tribord</strong> ; on la laisse à bâbord en suivant le chenal principal</td></tr>
<tr><td>Tribord modifiée</td><td>Verte avec une large bande horizontale rouge, voyant cône vert pointe en haut</td><td>Vert, 2+1 éclats</td><td>Chenal principal à <strong>bâbord</strong> ; on la laisse à tribord en suivant le chenal principal</td></tr>
</tbody>
</table>
<p>La couleur dominante (celle du haut) et le voyant donnent la règle à suivre pour le chenal principal ; la bande d'une autre couleur signale qu'un chenal secondaire existe de l'autre côté. Le rythme de feu <strong>2+1 éclats</strong> est réservé à ces marques : une marque latérale ordinaire ne l'utilise jamais.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> pour une marque de chenal préféré, on lit d'abord la couleur du haut et le voyant : ils disent comment la laisser si l'on suit le chenal principal.</div>`
        },
        {
          titre: "Feux de jetée, alignements et feux à secteurs",
          contenu: `<p>À l'entrée de la plupart des ports, les <strong>extrémités des jetées</strong> (les musoirs) portent des feux qui suivent la même logique que les marques latérales : le feu <strong>rouge</strong> est sur la jetée à laisser à <strong>bâbord</strong> en entrant, le feu <strong>vert</strong> sur la jetée à laisser à <strong>tribord</strong>. De nuit, on entre donc en passant entre le feu rouge (à gauche) et le feu vert (à droite).</p>
<p>Un <strong>alignement</strong> est formé de deux marques ou deux feux placés l'un derrière l'autre, le plus éloigné étant plus haut. Quand on voit les deux feux exactement l'un au-dessus de l'autre, on se trouve sur l'axe tracé sur la carte, qui mène en sécurité dans la passe. Si le feu haut (arrière) paraît décalé à droite du feu bas (avant), le bateau se trouve à droite de l'axe : il faut revenir vers la gauche jusqu'à ce que les feux se superposent à nouveau.</p>
<p>Un <strong>feu à secteurs</strong> montre des couleurs différentes selon la direction d'où on le regarde. En règle générale, le <strong>secteur blanc</strong> couvre la route sûre et les <strong>secteurs rouge ou vert</strong> couvrent des zones de dangers. Ce n'est pas une règle absolue : seule la carte indique précisément ce que couvre chaque secteur.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> si vous passez d'un secteur blanc à un secteur coloré en approchant de la côte, votre route vous conduit peut-être sur des roches. Vérifiez immédiatement votre position sur la carte.</div>`
        },
        {
          titre: "Les signaux d'entrée de port",
          contenu: `<p>Dans les ports de commerce ou les ports dont la passe est étroite, un <strong>mât de signaux</strong> règle les mouvements des navires. Le système international uniformisé utilise trois feux superposés :</p>
<table>
<thead><tr><th>Feux (de haut en bas)</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>Trois feux rouges clignotants</td><td>Urgence grave : tous les navires s'arrêtent ou se déroutent selon les instructions</td></tr>
<tr><td>Trois feux rouges fixes</td><td>Mouvement interdit : on n'entre pas et on ne sort pas</td></tr>
<tr><td>Trois feux verts fixes</td><td>Mouvement autorisé, circulation à sens unique</td></tr>
<tr><td>Vert, vert, blanc</td><td>Mouvement autorisé, circulation dans les deux sens</td></tr>
</tbody>
</table>
<p>Des feux complémentaires (souvent jaunes, placés à côté) peuvent prévoir des exceptions pour les petits navires ; leur signification est publiée dans les instructions nautiques et sur les panneaux du port.</p>
<p>En pratique, le plaisancier qui s'approche d'un grand port <strong>s'informe avant d'arriver</strong> : instructions nautiques, guide du port, veille VHF sur le canal du port. Il reste à l'écart des navires de commerce, qui manœuvrent dans un espace restreint et ne peuvent pas s'arrêter rapidement.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> trois feux verts ne signifient pas « liberté totale » : le mouvement est autorisé, mais à sens unique. Vous devez toujours respecter les règles de barre et la vitesse limite du port.</div>`
        },
        {
          titre: "Lire un chenal en pratique",
          contenu: `<p>Suivre un chenal, c'est enchaîner les marques en anticipant. Quelques réflexes :</p>
<ul>
<li>Avant de partir, repérer sur la carte les marques et leurs numéros, pour savoir dans quel ordre elles apparaîtront.</li>
<li>Toujours identifier la marque suivante avant de dépasser la précédente : une bouée peut être masquée par un bateau ou par les vagues.</li>
<li>Ne pas « couper » entre deux marques d'un même côté : le chenal ne suit pas forcément une ligne droite et la profondeur peut diminuer brusquement.</li>
<li>Ne pas serrer une bouée de trop près : elle évite autour de son corps-mort et sa chaîne peut accrocher l'hélice.</li>
<li>Se tenir sur la partie <strong>droite</strong> du chenal (règle de barre des chenaux étroits) et ne pas gêner les navires qui ne peuvent naviguer qu'à l'intérieur.</li>
</ul>
<p>De nuit, on identifie chaque feu par sa <strong>couleur</strong>, son <strong>rythme</strong> et sa <strong>période</strong>, à comparer avec la carte. Un feu rouge à éclats peut être une bouée bâbord ; un feu rouge fixe peut être un feu de jetée, ou les feux d'un navire. La lecture des rythmes est détaillée dans un chapitre suivant.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> en sortant du port de nuit, vous voyez devant vous un feu vert à éclats légèrement à gauche et un feu rouge à éclats légèrement à droite. En sortie, vous laissez le vert à bâbord et le rouge à tribord : vous passez entre les deux.</div>`
        }
      ],
      points_cles: [
        "La France métropolitaine utilise le système AISM région A",
        "En entrant au port : rouge à bâbord (gauche), vert à tribord (droite) ; en sortant, c'est l'inverse",
        "Marque bâbord : rouge, cylindre ; marque tribord : verte, cône pointe en haut",
        "Numéros pairs pour les marques bâbord, impairs pour les marques tribord",
        "Le rythme 2+1 éclats est réservé aux marques de chenal préféré",
        "Le sens conventionnel du balisage est indiqué sur la carte quand il n'est pas évident",
        "Deux feux d'alignement superposés indiquent que l'on est sur l'axe sûr",
        "Trois feux rouges au mât de signaux : mouvement interdit ; trois feux verts : autorisé à sens unique"
      ],
      panneaux: ["MER_BABORD", "MER_TRIBORD"]
    },
    {
      id: "balisage-cardinal-dangers",
      theme: "BAL",
      titre: "Marques cardinales, danger isolé, eaux saines et marques spéciales",
      duree: 25,
      objectifs: [
        "Reconnaître les quatre marques cardinales et savoir de quel côté passer",
        "Identifier une marque de danger isolé et une marque d'eaux saines",
        "Savoir ce que délimitent les marques spéciales jaunes",
        "Connaître le balisage des nouveaux dangers et des épaves récentes"
      ],
      sections: [
        {
          titre: "Le principe des marques cardinales",
          contenu: `<p>Une marque cardinale est placée par rapport à un danger (roche, haut-fond, épave) selon l'un des quatre <strong>points cardinaux</strong> du compas. Son nom indique <strong>le côté où se trouvent les eaux saines</strong>, donc le côté par lequel il faut passer :</p>
<ul>
<li>la cardinale <strong>Nord</strong> est placée au nord du danger : on passe <strong>au nord</strong> de la marque ;</li>
<li>la cardinale <strong>Sud</strong> est au sud du danger : on passe <strong>au sud</strong> ;</li>
<li>la cardinale <strong>Est</strong> est à l'est du danger : on passe <strong>à l'est</strong> ;</li>
<li>la cardinale <strong>Ouest</strong> est à l'ouest du danger : on passe <strong>à l'ouest</strong>.</li>
</ul>
<p>Le danger se trouve donc à l'opposé : derrière une cardinale Nord, il y a du danger au sud. Les marques cardinales ne dépendent pas du sens d'entrée au port : elles se lisent avec le compas, quelle que soit la direction d'où l'on vient.</p>
<p>Elles servent aussi à signaler le côté le plus profond d'un passage, l'extrémité d'un banc, une bifurcation ou un coude de chenal.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> on passe toujours du côté indiqué par le nom de la marque. Cardinale Nord : je passe au nord. Le danger est de l'autre côté.</div>`
        },
        {
          titre: "Reconnaître les quatre cardinales",
          contenu: `<p>Toutes les cardinales sont <strong>noires et jaunes</strong> et portent un voyant fait de <strong>deux cônes noirs</strong> superposés. La clé de lecture : <strong>les pointes des cônes indiquent où se trouve le noir</strong> sur la marque.</p>
<table>
<thead><tr><th>Marque</th><th>Dessin</th><th>Voyant</th><th>Couleurs</th><th>Feu blanc</th></tr></thead>
<tbody>
<tr><td>Nord</td><td><span class="panneau" data-code="MER_CARD_NORD"></span></td><td>Deux cônes pointes en haut</td><td>Noir au-dessus du jaune</td><td>Scintillant continu</td></tr>
<tr><td>Est</td><td><span class="panneau" data-code="MER_CARD_EST"></span></td><td>Deux cônes opposés par la base</td><td>Noir, jaune, noir</td><td>3 scintillements</td></tr>
<tr><td>Sud</td><td><span class="panneau" data-code="MER_CARD_SUD"></span></td><td>Deux cônes pointes en bas</td><td>Jaune au-dessus du noir</td><td>6 scintillements suivis d'un éclat long</td></tr>
<tr><td>Ouest</td><td><span class="panneau" data-code="MER_CARD_OUEST"></span></td><td>Deux cônes opposés par la pointe</td><td>Jaune, noir, jaune</td><td>9 scintillements</td></tr>
</tbody>
</table>
<p>Pour la Nord, les pointes vers le haut : le noir est en haut. Pour la Sud, pointes vers le bas : le noir est en bas. Pour l'Est, les pointes s'écartent vers le haut et le bas : le noir est en haut et en bas, avec une bande jaune au milieu. Pour l'Ouest, les pointes se rejoignent au milieu : le noir forme une bande au milieu, entre deux parties jaunes.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> ne confondez pas l'Est (cônes opposés par la base, forme de losange) et l'Ouest (cônes opposés par la pointe, forme de sablier). Le nom de la marque n'indique pas où est le danger, mais où passer.</div>`
        },
        {
          titre: "Les feux des cardinales : le cadran de l'horloge",
          contenu: `<p>Les feux des cardinales sont toujours <strong>blancs</strong> et <strong>scintillants</strong> (Q) ou <strong>très scintillants</strong> (VQ). Le nombre de scintillements se retient grâce au <strong>cadran d'une horloge</strong> :</p>
<ul>
<li>Est = 3 heures : <strong>3</strong> scintillements ;</li>
<li>Sud = 6 heures : <strong>6</strong> scintillements, suivis d'un <strong>éclat long</strong> qui évite de les confondre avec 3 ou 9 ;</li>
<li>Ouest = 9 heures : <strong>9</strong> scintillements ;</li>
<li>Nord = midi : scintillement <strong>continu</strong>.</li>
</ul>
<p>Les périodes usuelles sont : Est Q(3) 10 s ou VQ(3) 5 s ; Sud Q(6)+LFl 15 s ou VQ(6)+LFl 10 s ; Ouest Q(9) 15 s ou VQ(9) 10 s. Le scintillant compte de 50 à 79 éclats par minute (le plus souvent 60), le très scintillant de 80 à 159 (le plus souvent 100 ou 120).</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> de nuit, vous comptez une série de scintillements blancs, puis un éclat plus long, puis l'obscurité. Six scintillements et un éclat long : c'est une cardinale Sud. Vous restez au sud de ce feu.</div>`
        },
        {
          titre: "Danger isolé et eaux saines",
          contenu: `<p>La <strong>marque de danger isolé</strong> <span class="panneau" data-code="MER_DANGER"></span> est posée <strong>sur</strong> un danger de faible étendue (une roche isolée, une épave) entouré d'eaux navigables. Elle est <strong>noire avec une ou plusieurs larges bandes horizontales rouges</strong> et porte un voyant de <strong>deux sphères noires</strong> superposées. Son feu est <strong>blanc, à groupes de 2 éclats</strong> : Fl(2). On peut passer de n'importe quel côté, mais <strong>à bonne distance</strong>, puisque le danger est sous la marque.</p>
<p>La <strong>marque d'eaux saines</strong> <span class="panneau" data-code="MER_EAUX_SAINES"></span> indique au contraire que les eaux sont navigables tout autour. Elle porte des <strong>rayures verticales rouges et blanches</strong> et un voyant d'<strong>une sphère rouge</strong>. Son feu est <strong>blanc</strong> : isophase, à occultations, à un éclat long toutes les 10 secondes, ou en Morse « A ». Elle marque souvent un <strong>point d'atterrissage</strong> (l'arrivée sur une côte), l'<strong>axe</strong> ou le milieu d'un chenal.</p>
<table>
<thead><tr><th>Marque</th><th>Couleurs</th><th>Voyant</th><th>Feu</th><th>Conduite</th></tr></thead>
<tbody>
<tr><td>Danger isolé</td><td>Noir, bande(s) horizontale(s) rouge(s)</td><td>Deux sphères noires</td><td>Blanc, Fl(2)</td><td>S'en écarter, de n'importe quel côté</td></tr>
<tr><td>Eaux saines</td><td>Rayures verticales rouges et blanches</td><td>Une sphère rouge</td><td>Blanc, Iso, Oc, LFl 10 s ou Mo(A)</td><td>Passage libre tout autour</td></tr>
</tbody>
</table>
<div class="encart" data-type="danger"><strong>Attention :</strong> une marque de danger isolé est plantée sur l'obstacle. Il ne faut surtout pas la frôler en pensant qu'elle balise un passage.</div>`
        },
        {
          titre: "Les marques spéciales",
          contenu: `<p>Les <strong>marques spéciales</strong> <span class="panneau" data-code="MER_SPECIALE"></span> sont <strong>jaunes</strong> et portent, si elles ont un voyant, une <strong>croix de Saint-André (X) jaune</strong>. Leur feu, quand elles en ont un, est <strong>jaune</strong>, avec un rythme qui ne doit pas pouvoir être confondu avec celui des marques à feu blanc. Leur forme est libre, à condition de ne pas prêter à confusion avec une autre marque.</p>
<p>Elles n'ont pas pour but principal d'aider à la navigation : elles signalent une <strong>zone ou une installation particulière</strong>, décrite sur la carte ou dans les documents nautiques :</p>
<ul>
<li>zones de <strong>baignade</strong> réservées le long des plages (en général des bouées jaunes sphériques) ;</li>
<li><strong>chenaux d'accès au rivage</strong> (chenaux traversiers) réservés à la sortie et au retour des embarcations ;</li>
<li>zones de ski nautique, de mouillage réglementé, d'aquaculture ;</li>
<li>câbles ou conduites sous-marines, zones militaires, dépôts de matériaux, bouées de mesures.</li>
</ul>
<p>En été, la frange côtière est ainsi parsemée de bouées jaunes : avant d'approcher d'une plage, on cherche le chenal balisé et on respecte les zones de baignade, interdites aux bateaux.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> jaune ne signifie pas « cardinale ». Une bouée entièrement jaune avec un X est une marque spéciale ; une cardinale est toujours noire et jaune, avec deux cônes.</div>`
        },
        {
          titre: "Les nouveaux dangers",
          contenu: `<p>Un <strong>nouveau danger</strong> est un obstacle récemment découvert ou apparu (une épave après un naufrage, un haut-fond nouveau) qui n'est pas encore indiqué dans les documents nautiques. Il est balisé avec les marques habituelles (cardinales, latérales, danger isolé). Lorsque le danger est jugé grave, une au moins de ces marques peut être <strong>doublée</strong>, c'est-à-dire répétée par une marque identique.</p>
<p>Pour signaler une <strong>épave récente</strong>, on peut aussi mouiller une <strong>bouée de balisage d'urgence d'épave</strong> : rayures verticales <strong>bleues et jaunes</strong>, voyant en croix jaune droite, feu <strong>alternativement bleu et jaune</strong>. Elle reste en place le temps que l'épave soit portée sur les cartes ou balisée de façon permanente.</p>
<p>Les nouveaux dangers font aussi l'objet d'avis urgents aux navigateurs, diffusés par radio (messages « SÉCURITÉ » des CROSS) et publiés dans les avis aux navigateurs du SHOM. Le chef de bord se tient informé avant de partir.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un balisage doublé ou une bouée bleue et jaune signale un danger récent, absent de la carte : prudence redoublée et large détour.</div>`
        }
      ],
      points_cles: [
        "Une cardinale indique le côté où passer : cardinale Nord, je passe au nord",
        "Les pointes des cônes indiquent la position du noir sur la marque",
        "Feux des cardinales blancs : Nord continu, Est 3, Sud 6 + éclat long, Ouest 9 (cadran d'horloge)",
        "Danger isolé : noir et rouge, deux sphères noires, feu blanc 2 éclats ; posé sur le danger",
        "Eaux saines : rayures verticales rouges et blanches, sphère rouge, feu blanc",
        "Marques spéciales : jaunes, voyant en X, feu jaune ; elles délimitent des zones",
        "Un nouveau danger peut être signalé par un balisage doublé ou une bouée bleue et jaune"
      ],
      panneaux: ["MER_CARD_NORD", "MER_CARD_EST", "MER_CARD_SUD", "MER_CARD_OUEST", "MER_DANGER", "MER_EAUX_SAINES", "MER_SPECIALE"]
    },
    {
      id: "balisage-feux-rythmes",
      theme: "BAL",
      titre: "Les feux du balisage : couleurs, rythmes et périodes",
      duree: 20,
      objectifs: [
        "Connaître les principaux rythmes de feux et leurs abréviations",
        "Lire la description d'un feu sur la carte marine",
        "Associer un feu de nuit à la marque qui le porte",
        "Comprendre la notion de portée d'un feu"
      ],
      sections: [
        {
          titre: "Identifier un feu : couleur, rythme, période",
          contenu: `<p>De nuit, les marques deviennent invisibles ; seuls leurs <strong>feux</strong> permettent de les reconnaître. Chaque feu est décrit par trois caractéristiques :</p>
<ul>
<li>sa <strong>couleur</strong> : blanc, rouge, vert, jaune (et bleu pour la bouée d'épave) ;</li>
<li>son <strong>rythme</strong> : la façon dont alternent lumière et obscurité ;</li>
<li>sa <strong>période</strong> : la durée, en secondes, d'un cycle complet du rythme avant qu'il ne recommence.</li>
</ul>
<p>Pour identifier un feu, on observe et on <strong>chronomètre</strong> plusieurs cycles, puis on compare avec la carte. Deux feux voisins n'ont jamais exactement les mêmes caractéristiques, justement pour éviter les confusions.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> couleur + rythme + période = la carte d'identité d'un feu. On compte et on chronomètre avant de conclure.</div>`
        },
        {
          titre: "Les principaux rythmes",
          contenu: `<table>
<thead><tr><th>Abréviation</th><th>Nom</th><th>Description</th></tr></thead>
<tbody>
<tr><td>F</td><td>Fixe</td><td>Lumière continue, sans interruption</td></tr>
<tr><td>Fl</td><td>À éclats</td><td>La durée de lumière est plus courte que la durée d'obscurité ; les éclats peuvent être groupés : Fl(2), Fl(3)…</td></tr>
<tr><td>LFl</td><td>À éclat long</td><td>Éclat d'au moins 2 secondes</td></tr>
<tr><td>Oc</td><td>À occultations</td><td>La durée de lumière est plus longue que la durée d'obscurité ; occultations simples ou groupées : Oc(2)…</td></tr>
<tr><td>Iso</td><td>Isophase</td><td>Durées de lumière et d'obscurité égales</td></tr>
<tr><td>Q</td><td>Scintillant</td><td>Éclats rapides, de 50 à 79 par minute (souvent 60)</td></tr>
<tr><td>VQ</td><td>Très scintillant</td><td>De 80 à 159 éclats par minute (souvent 100 ou 120)</td></tr>
<tr><td>Al</td><td>Alternatif</td><td>Change de couleur au cours du cycle</td></tr>
<tr><td>Mo</td><td>Morse</td><td>Reproduit une lettre du code Morse, par exemple Mo(A)</td></tr>
</tbody>
</table>
<p>La différence entre <strong>éclats</strong> et <strong>occultations</strong> est classique : un feu à éclats est surtout éteint et s'allume brièvement ; un feu à occultations est surtout allumé et s'éteint brièvement.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « isophase » ne veut pas dire « fixe ». Un feu isophase s'éteint et s'allume, avec des durées égales de lumière et d'obscurité.</div>`
        },
        {
          titre: "Lire un feu sur la carte",
          contenu: `<p>Sur la carte marine, chaque feu est accompagné d'une inscription abrégée. Les couleurs s'écrivent avec les initiales internationales : <strong>R</strong> (rouge), <strong>G</strong> (vert), <strong>W</strong> (blanc, souvent omis), <strong>Y</strong> (jaune), <strong>Bu</strong> (bleu). Viennent ensuite la période (en secondes, s), la hauteur du feu (en mètres, m) pour les feux fixes à terre, et la portée (en milles, M).</p>
<table>
<thead><tr><th>Inscription</th><th>Lecture</th></tr></thead>
<tbody>
<tr><td>Fl(3) G 12s</td><td>Feu vert, groupes de 3 éclats, cycle de 12 secondes : probablement une marque tribord</td></tr>
<tr><td>Fl R 4s</td><td>Feu rouge à un éclat toutes les 4 secondes : marque bâbord</td></tr>
<tr><td>Fl(2+1) R 10s</td><td>Feu rouge, groupe de 2 éclats puis 1 éclat : marque de chenal préféré (chenal principal à tribord)</td></tr>
<tr><td>Q(3) 10s</td><td>Feu blanc, 3 scintillements toutes les 10 secondes : cardinale Est</td></tr>
<tr><td>Fl(2) 5s</td><td>Feu blanc, groupes de 2 éclats : danger isolé</td></tr>
<tr><td>LFl 10s</td><td>Feu blanc, un éclat long toutes les 10 secondes : eaux saines</td></tr>
<tr><td>Fl Y 4s</td><td>Feu jaune à éclats : marque spéciale</td></tr>
<tr><td>Oc(2) WRG 6s 15m 12M</td><td>Feu à secteurs blanc, rouge et vert, 2 occultations en 6 s, à 15 m de haut, portée 12 milles</td></tr>
</tbody>
</table>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> « Q(9) 15s » se lit : feu blanc (la couleur n'est pas indiquée), groupes de 9 scintillements, cycle de 15 secondes. C'est une cardinale Ouest.</div>`
        },
        {
          titre: "La portée et les feux des phares",
          contenu: `<p>La <strong>portée</strong> d'un feu est la distance maximale, en milles, à laquelle il peut être vu par temps clair. Celle inscrite sur la carte est la <strong>portée nominale</strong>, qui dépend de l'intensité lumineuse. La portée réelle dépend aussi de la visibilité (brume, pluie) et de la hauteur du feu et de l'œil de l'observateur, à cause de la rotondité de la Terre.</p>
<p>Les <strong>phares</strong> sont les grands feux côtiers : leur portée dépasse souvent 20 milles. Ils servent à reconnaître la côte de loin (feux d'atterrissage). Les <strong>feux de jalonnement</strong> et les feux portés par les bouées ont des portées plus faibles, de quelques milles.</p>
<p>Un feu peut être :</p>
<ul>
<li><strong>à secteurs</strong> : sa couleur change selon le relèvement sous lequel on le voit ; les limites des secteurs sont tracées sur la carte ;</li>
<li><strong>de direction</strong> : un secteur blanc très étroit, encadré de rouge et de vert, indique l'axe d'une passe ;</li>
<li><strong>d'alignement</strong> : deux feux à superposer.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> les feux à terre sont parfois noyés parmi les lumières de la ville. Repérez d'abord le rythme : un éclairage public est fixe, un feu de navigation a presque toujours un rythme.</div>`
        },
        {
          titre: "Tableau de synthèse des feux du balisage",
          contenu: `<table>
<thead><tr><th>Marque</th><th>Couleur du feu</th><th>Rythme</th></tr></thead>
<tbody>
<tr><td>Latérale bâbord <span class="panneau" data-code="MER_BABORD"></span></td><td>Rouge</td><td>Quelconque sauf 2+1</td></tr>
<tr><td>Latérale tribord <span class="panneau" data-code="MER_TRIBORD"></span></td><td>Vert</td><td>Quelconque sauf 2+1</td></tr>
<tr><td>Chenal préféré</td><td>Rouge ou vert</td><td>2+1 éclats</td></tr>
<tr><td>Cardinale Nord <span class="panneau" data-code="MER_CARD_NORD"></span></td><td>Blanc</td><td>Scintillant ou très scintillant continu</td></tr>
<tr><td>Cardinale Est <span class="panneau" data-code="MER_CARD_EST"></span></td><td>Blanc</td><td>3 scintillements</td></tr>
<tr><td>Cardinale Sud <span class="panneau" data-code="MER_CARD_SUD"></span></td><td>Blanc</td><td>6 scintillements + éclat long</td></tr>
<tr><td>Cardinale Ouest <span class="panneau" data-code="MER_CARD_OUEST"></span></td><td>Blanc</td><td>9 scintillements</td></tr>
<tr><td>Danger isolé <span class="panneau" data-code="MER_DANGER"></span></td><td>Blanc</td><td>2 éclats</td></tr>
<tr><td>Eaux saines <span class="panneau" data-code="MER_EAUX_SAINES"></span></td><td>Blanc</td><td>Isophase, occultations, éclat long 10 s ou Morse A</td></tr>
<tr><td>Spéciale <span class="panneau" data-code="MER_SPECIALE"></span></td><td>Jaune</td><td>Quelconque, sans confusion avec les feux blancs</td></tr>
<tr><td>Épave récente</td><td>Bleu et jaune</td><td>Alternatif</td></tr>
</tbody>
</table>
<p>Remarquez la logique d'ensemble : les feux <strong>colorés</strong> rouge et vert sont ceux des marques latérales ; les feux <strong>blancs</strong> appartiennent aux cardinales, au danger isolé et aux eaux saines, qu'on distingue par le rythme ; le <strong>jaune</strong> est réservé aux marques spéciales.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> feu blanc à éclats groupés par 2 = danger isolé ; feu blanc scintillant = cardinale ; feu blanc à éclat long, isophase ou à occultations = eaux saines.</div>`
        },
        {
          titre: "Exercice : identifier les feux d'une approche de nuit",
          contenu: `<p>Imaginons une arrivée de nuit vers un port inconnu, carte en main. Voici comment raisonner, feu par feu :</p>
<ol>
<li>Au loin, un feu blanc puissant à <strong>groupes de 3 éclats</strong> toutes les 15 secondes, visible bien avant les autres : c'est le <strong>phare</strong> d'atterrissage, reconnu grâce à la carte. Il confirme qu'on arrive au bon endroit.</li>
<li>Plus près, un feu blanc à <strong>éclat long toutes les 10 secondes</strong> : la bouée d'<strong>eaux saines</strong> qui marque l'entrée du chenal. On peut la laisser d'un côté ou de l'autre.</li>
<li>Puis, de part et d'autre de la route, des feux <strong>rouges</strong> à gauche et <strong>verts</strong> à droite, à éclats : les marques latérales du chenal, que l'on suit en passant entre elles.</li>
<li>Sur le côté, un feu blanc à <strong>9 scintillements</strong> : une cardinale Ouest qui protège une roche ; on reste à l'ouest de ce feu.</li>
<li>Enfin, un feu rouge et un feu vert plus hauts, fixes ou à occultations : les feux des musoirs de jetée.</li>
</ol>
<p>À chaque étape, on compte, on chronomètre et on compare avec la carte avant d'agir. Si un feu ne correspond à rien sur la carte, on ralentit et on cherche : ce peut être un navire, un feu temporaire, ou une erreur d'identification.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> de nuit, on n'avance que vers des feux identifiés. Un feu non identifié est un signal d'alerte, pas un repère.</div>`
        }
      ],
      points_cles: [
        "Un feu s'identifie par sa couleur, son rythme et sa période",
        "Éclats : plus d'obscurité que de lumière ; occultations : plus de lumière que d'obscurité ; isophase : durées égales",
        "Q = scintillant (50 à 79 par minute), VQ = très scintillant (80 à 159 par minute)",
        "Sur la carte : R rouge, G vert, Y jaune, W blanc (souvent omis), M = milles de portée",
        "Feux rouges et verts : marques latérales ; feux blancs : cardinales, danger isolé, eaux saines ; feux jaunes : marques spéciales",
        "Un feu à secteurs change de couleur selon la direction ; le secteur coloré couvre souvent un danger",
        "La portée nominale est donnée en milles pour une visibilité normale"
      ]
    }
  );

  P.questions.push(
    { id: "BAL-001", chapitre: "balisage-lateral", situation: "Vous rentrez au port en venant du large. Cette bouée se trouve devant vous, dans le chenal.", panneau: "MER_BABORD",
      q: "Je dois la laisser :", options: ["À tribord (sur ma droite)", "À bâbord (sur ma gauche)"], bonnes: [1],
      explication: "En région A, la marque rouge est une marque bâbord : en entrant au port, on la laisse à bâbord, c'est-à-dire sur sa gauche." },
    { id: "BAL-002", chapitre: "balisage-lateral", situation: "Vous rentrez au port en venant du large et apercevez cette bouée.", panneau: "MER_TRIBORD",
      q: "Je dois la laisser :", options: ["À tribord (sur ma droite)", "À bâbord (sur ma gauche)"], bonnes: [0],
      explication: "La marque verte à voyant conique est une marque tribord : en entrant au port, on la laisse à tribord, sur sa droite." },
    { id: "BAL-003", chapitre: "balisage-lateral", situation: "Vous quittez le port pour gagner le large en suivant le chenal. Cette bouée est devant vous.", panneau: "MER_BABORD",
      q: "Je la laisse :", options: ["À tribord", "À bâbord"], bonnes: [0],
      explication: "Le balisage latéral se lit en venant du large. En sortant, tout s'inverse : la marque bâbord (rouge) se laisse à tribord." },
    { id: "BAL-004", chapitre: "balisage-lateral", situation: "Vous sortez du port. Cette bouée est sur votre route.", panneau: "MER_TRIBORD",
      q: "Je la laisse :", options: ["À bâbord", "À tribord"], bonnes: [0],
      explication: "En sortie de port, la marque tribord (verte) se laisse à bâbord, sur la gauche." },
    { id: "BAL-005", chapitre: "balisage-lateral", panneau: "MER_BABORD",
      q: "Si cette marque porte un feu, il est :", options: ["Jaune", "Rouge", "Blanc", "Vert"], bonnes: [1],
      explication: "Une marque bâbord porte un feu rouge, de rythme quelconque sauf 2+1 éclats, réservé aux marques de chenal préféré." },
    { id: "BAL-006", chapitre: "balisage-lateral", panneau: "MER_TRIBORD",
      q: "Si cette marque porte un feu, il est :", options: ["Blanc", "Vert", "Rouge"], bonnes: [1],
      explication: "Une marque tribord porte un feu vert. Les feux blancs sont réservés aux cardinales, au danger isolé et aux eaux saines." },
    { id: "BAL-007", chapitre: "balisage-lateral", panneau: "MER_BABORD",
      q: "Le voyant (marque de sommet) de cette marque est :", options: ["Un cylindre rouge", "Un cône vert pointe en haut", "Une sphère rouge"], bonnes: [0],
      explication: "La marque bâbord porte un voyant cylindrique rouge ; la marque tribord, un cône vert pointe en haut ; la sphère rouge est celle des eaux saines." },
    { id: "BAL-008", chapitre: "balisage-lateral", panneau: "MER_TRIBORD",
      q: "Cette marque est :", options: ["Une marque latérale tribord", "Une marque latérale bâbord", "Une marque cardinale"], bonnes: [0],
      explication: "Verte avec un voyant conique pointe en haut : c'est une marque latérale tribord, à laisser sur la droite en entrant au port." },
    { id: "BAL-009", chapitre: "balisage-lateral",
      q: "Sur les côtes de France métropolitaine, le balisage latéral appartient :", options: ["À la région A de l'AISM", "À la région B de l'AISM"], bonnes: [0],
      explication: "L'Europe utilise la région A : rouge à bâbord en entrant au port. En région B (Amériques, Japon…), les couleurs sont inversées." },
    { id: "BAL-010", chapitre: "balisage-lateral", panneau: "MER_BABORD",
      q: "Si cette marque est numérotée, elle porte en principe un numéro :", options: ["Pair", "Impair"], bonnes: [0],
      explication: "Les marques bâbord portent des numéros pairs, les marques tribord des numéros impairs, croissant en général du large vers le port." },
    { id: "BAL-011", chapitre: "balisage-lateral", situation: "Vous rentrez au port. Une bouée rouge cylindrique se trouve devant vous, légèrement sur votre droite.", panneau: "MER_BABORD",
      q: "Pour la laisser du bon côté, je dois :", options: ["Venir sur tribord pour qu'elle passe sur ma gauche", "Passer indifféremment d'un côté ou de l'autre", "Venir sur bâbord pour qu'elle passe sur ma droite"], bonnes: [0],
      explication: "En entrant, la bouée rouge se laisse à bâbord : je viens sur tribord pour qu'elle passe à ma gauche. La laisser à droite me ferait sortir du chenal." },
    { id: "BAL-012", chapitre: "balisage-lateral", situation: "En entrant dans un estuaire, vous apercevez une bouée rouge portant une large bande horizontale verte et un voyant cylindrique rouge.",
      q: "Cette marque indique :", options: ["Que le chenal principal est à tribord", "Que je la laisse à bâbord si je suis le chenal principal", "Que le chenal principal est à bâbord"], bonnes: [0, 1],
      explication: "C'est une marque bâbord modifiée (chenal préféré) : le chenal principal est à tribord, et on la laisse à bâbord en le suivant. La bande verte signale un chenal secondaire de l'autre côté." },
    { id: "BAL-013", chapitre: "balisage-lateral", situation: "De nuit, vous observez un feu rouge à groupes de 2 éclats suivis d'un éclat isolé.",
      q: "Ce feu signale :", options: ["Une marque de danger isolé", "Une marque cardinale", "Une marque de chenal préféré"], bonnes: [2],
      explication: "Le rythme 2+1 éclats est réservé aux marques de chenal préféré. Le danger isolé a un feu blanc à 2 éclats ; les cardinales, des feux blancs scintillants." },
    { id: "BAL-014", chapitre: "balisage-lateral", situation: "De nuit, vous entrez au port. Vous voyez un feu vert à éclats sur l'avant légèrement à droite et un feu rouge à éclats sur l'avant légèrement à gauche.",
      q: "Je dois :", options: ["Laisser le feu rouge à tribord", "Laisser le feu vert à tribord", "Passer entre les deux feux"], bonnes: [1, 2],
      explication: "En entrant, le feu rouge (marque bâbord) se laisse à gauche et le feu vert (marque tribord) à droite : on passe entre les deux." },
    { id: "BAL-015", chapitre: "balisage-lateral", situation: "De nuit, vous quittez le port. Un feu rouge à éclats apparaît devant vous.",
      q: "Je laisse ce feu :", options: ["Sur ma droite (tribord)", "Sur ma gauche (bâbord)"], bonnes: [0],
      explication: "Un feu rouge à éclats est celui d'une marque bâbord. En sortant du port, elle se laisse à tribord, sur la droite." },
    { id: "BAL-016", chapitre: "balisage-lateral", situation: "Vous entrez au port de nuit. Les deux jetées portent chacune un feu à leur extrémité.",
      q: "Le feu vert se trouve sur la jetée que je laisse :", options: ["À bâbord", "À tribord"], bonnes: [1],
      explication: "Les feux de jetée suivent le balisage latéral : en entrant, le feu vert est sur la jetée à laisser à tribord, le feu rouge sur celle à laisser à bâbord." },
    { id: "BAL-017", chapitre: "balisage-lateral", situation: "Vous approchez d'un port de commerce. Au mât de signaux, vous voyez trois feux rouges fixes superposés.",
      q: "Je peux entrer dans le port :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Trois feux rouges fixes superposés signifient que le mouvement est interdit : on n'entre pas et on ne sort pas." },
    { id: "BAL-018", chapitre: "balisage-lateral", situation: "Au mât de signaux d'entrée d'un port, trois feux verts fixes sont allumés l'un au-dessus de l'autre.",
      q: "Ce signal signifie :", options: ["Mouvement interdit", "Mouvement autorisé, circulation à sens unique", "Port fermé pour mauvais temps"], bonnes: [1],
      explication: "Trois feux verts superposés : le mouvement est autorisé, à sens unique. Les règles de barre et la vitesse limite du port continuent de s'appliquer." },
    { id: "BAL-019", chapitre: "balisage-lateral", situation: "Au mât de signaux d'un port, trois feux rouges clignotent.",
      q: "Je dois :", options: ["Considérer que le passage est libre", "M'arrêter", "Suivre les instructions données", "Entrer rapidement pour me mettre à l'abri"], bonnes: [1, 2],
      explication: "Trois feux rouges clignotants signalent une urgence grave : tous les navires s'arrêtent ou se déroutent selon les instructions." },
    { id: "BAL-020", chapitre: "balisage-lateral", situation: "Pour entrer dans une passe de nuit, vous suivez un alignement de deux feux. Le feu haut, le plus éloigné, apparaît exactement au-dessus du feu bas.",
      q: "Cela signifie :", options: ["Que je m'en écarte vers la droite", "Que je suis sur l'axe de l'alignement", "Que je dois changer de cap immédiatement"], bonnes: [1],
      explication: "Quand les deux feux d'alignement sont superposés, le bateau se trouve sur l'axe tracé sur la carte, qui mène en sécurité dans la passe." },
    { id: "BAL-021", chapitre: "balisage-lateral", situation: "Vous suivez un alignement. Le feu haut (arrière) apparaît décalé à droite du feu bas (avant).",
      q: "Pour revenir sur l'alignement, je viens :", options: ["Vers la gauche", "Vers la droite"], bonnes: [0],
      explication: "Si le feu arrière paraît à droite du feu avant, le bateau se trouve à droite de l'axe : il faut revenir vers la gauche jusqu'à superposer les feux." },
    { id: "BAL-022", chapitre: "balisage-lateral", situation: "De nuit, en approchant de la côte, vous passez du secteur blanc au secteur rouge d'un feu à secteurs.",
      q: "Je dois :", options: ["Ralentir le temps de vérifier", "Vérifier ma position sur la carte : le secteur rouge couvre peut-être un danger", "Continuer, le secteur rouge indique la passe sûre"], bonnes: [0, 1],
      explication: "En général, le secteur blanc couvre la route sûre et les secteurs colorés des dangers. On ralentit et l'on vérifie sur la carte ce que couvre ce secteur." },
    { id: "BAL-023", chapitre: "balisage-lateral",
      q: "Le long d'une côte, quand le sens du balisage latéral n'est pas évident, on le trouve :", options: ["Dans le bulletin météo", "Sur la carte marine", "Sur la marque elle-même, grâce à une flèche peinte"], bonnes: [1],
      explication: "Le sens conventionnel du balisage est indiqué sur les cartes marines par un symbole. On le vérifie avant de naviguer dans une zone inconnue." },
    { id: "BAL-024", chapitre: "balisage-lateral", situation: "Vous suivez un chenal balisé par plusieurs bouées rouges et vertes.",
      q: "Je peux :", options: ["Tenir la partie droite du chenal", "Couper entre deux bouées rouges successives pour raccourcir", "Serrer les bouées de très près"], bonnes: [0],
      explication: "On suit le chenal en tenant sa partie droite. Couper entre deux marques d'un même côté peut mener sur un haut-fond, et une bouée frôlée de trop près peut accrocher l'hélice avec sa chaîne." },
    { id: "BAL-025", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_NORD",
      q: "Je dois passer :", options: ["Au nord de cette marque", "Au sud de cette marque", "Indifféremment"], bonnes: [0],
      explication: "C'est une cardinale Nord (cônes pointes en haut, noir au-dessus du jaune) : on passe au nord. Le danger est au sud." },
    { id: "BAL-026", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_SUD",
      q: "Je dois passer :", options: ["Au sud de cette marque", "Au nord de cette marque", "À l'est de cette marque"], bonnes: [0],
      explication: "C'est une cardinale Sud (cônes pointes en bas, jaune au-dessus du noir) : on passe au sud de la marque." },
    { id: "BAL-027", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_EST",
      q: "Je dois passer :", options: ["À l'ouest de cette marque", "À l'est de cette marque"], bonnes: [1],
      explication: "Cônes opposés par la base, noir-jaune-noir : c'est une cardinale Est. On passe à l'est ; le danger est à l'ouest." },
    { id: "BAL-028", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_OUEST",
      q: "Je dois passer :", options: ["À l'ouest de cette marque", "À l'est de cette marque"], bonnes: [0],
      explication: "Cônes opposés par la pointe, jaune-noir-jaune : c'est une cardinale Ouest. On passe à l'ouest." },
    { id: "BAL-029", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_OUEST",
      q: "Le danger signalé par cette marque se trouve :", options: ["À l'est de la marque", "Sous la marque", "À l'ouest de la marque"], bonnes: [0],
      explication: "Une cardinale Ouest est placée à l'ouest du danger : les eaux saines sont à l'ouest, le danger à l'est." },
    { id: "BAL-030", chapitre: "balisage-cardinal-dangers", situation: "Vous faites route cap au nord. Droit devant vous, vous apercevez cette marque.", panneau: "MER_CARD_SUD",
      q: "Je dois :", options: ["Rester au sud de la marque", "Considérer que le danger est au nord de la marque", "Continuer cap au nord en la laissant sur le côté"], bonnes: [0, 1],
      explication: "Une cardinale Sud signale des eaux saines au sud et un danger au nord. En continuant cap au nord, vous iriez sur le danger : il faut rester au sud et faire le tour." },
    { id: "BAL-031", chapitre: "balisage-cardinal-dangers", situation: "Vous faites route cap à l'est. Devant vous se dresse cette marque.", panneau: "MER_CARD_EST",
      q: "Je peux continuer cap à l'est jusqu'à la marque :", options: ["Oui, je suis du côté des eaux saines", "Non, le danger se trouve à l'ouest de la marque, entre elle et moi"], bonnes: [1],
      explication: "Une cardinale Est a les eaux saines à l'est et le danger à l'ouest. Venant de l'ouest, vous faites route vers le danger : il faut le contourner largement pour passer à l'est de la marque." },
    { id: "BAL-032", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_NORD",
      q: "De nuit, le feu de cette marque est :", options: ["Blanc, 3 scintillements", "Blanc, scintillant continu", "Jaune, à éclats", "Rouge, à éclats"], bonnes: [1],
      explication: "La cardinale Nord porte un feu blanc scintillant (ou très scintillant) continu. Midi sur le cadran de l'horloge : pas de groupe." },
    { id: "BAL-033", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_EST",
      q: "De nuit, le feu de cette marque montre :", options: ["3 scintillements blancs", "9 scintillements blancs", "6 scintillements blancs suivis d'un éclat long"], bonnes: [0],
      explication: "Est = 3 heures sur le cadran : groupes de 3 scintillements blancs." },
    { id: "BAL-034", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_SUD",
      q: "De nuit, le feu de cette marque montre :", options: ["3 scintillements", "6 scintillements suivis d'un éclat long", "9 scintillements"], bonnes: [1],
      explication: "Sud = 6 heures : 6 scintillements suivis d'un éclat long, qui évite de confondre avec 3 ou 9." },
    { id: "BAL-035", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_OUEST",
      q: "De nuit, le feu de cette marque montre :", options: ["6 scintillements et un éclat long", "9 scintillements", "Un scintillement continu"], bonnes: [1],
      explication: "Ouest = 9 heures sur le cadran de l'horloge : groupes de 9 scintillements blancs." },
    { id: "BAL-036", chapitre: "balisage-cardinal-dangers", situation: "De nuit, vous comptez des séries de 9 scintillements blancs, séparées par une obscurité.",
      q: "Il s'agit :", options: ["D'une cardinale Ouest", "D'une cardinale Est", "D'un danger isolé"], bonnes: [0],
      explication: "Neuf scintillements blancs : cardinale Ouest. On passe à l'ouest de ce feu." },
    { id: "BAL-037", chapitre: "balisage-cardinal-dangers", situation: "De nuit, vous voyez un feu blanc qui scintille sans interruption.",
      q: "Il s'agit d'une marque cardinale :", options: ["Est", "Nord", "Sud"], bonnes: [1],
      explication: "Un feu blanc scintillant continu est celui d'une cardinale Nord. On passe au nord." },
    { id: "BAL-038", chapitre: "balisage-cardinal-dangers",
      q: "Sur une marque cardinale, les pointes des deux cônes indiquent :", options: ["Le côté du danger", "La direction du port le plus proche", "La position du noir sur la marque"], bonnes: [2],
      explication: "Les pointes des cônes montrent où se trouve le noir : vers le haut pour la Nord (noir en haut), vers le bas pour la Sud (noir en bas)." },
    { id: "BAL-039", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_EST",
      q: "Les cônes de cette marque sont :", options: ["Opposés par la pointe", "Tous deux pointe en haut", "Opposés par la base"], bonnes: [2],
      explication: "La cardinale Est a des cônes opposés par la base (forme de losange) : les pointes vers le haut et le bas désignent le noir en haut et en bas." },
    { id: "BAL-040", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_OUEST",
      q: "Les couleurs de cette marque sont, de haut en bas :", options: ["Noir, jaune, noir", "Jaune, noir, jaune", "Noir sur jaune"], bonnes: [1],
      explication: "Cardinale Ouest : jaune, noir, jaune. Ses cônes opposés par la pointe désignent la bande noire au milieu." },
    { id: "BAL-041", chapitre: "balisage-cardinal-dangers",
      q: "Le sens dans lequel on lit une marque cardinale dépend :", options: ["Du sens d'entrée au port", "Des points cardinaux, quelle que soit ma route", "Du côté d'où vient le vent"], bonnes: [1],
      explication: "Les cardinales se lisent avec le compas : elles ne dépendent ni du sens d'entrée au port ni du vent." },
    { id: "BAL-042", chapitre: "balisage-cardinal-dangers", panneau: "MER_DANGER",
      q: "Cette marque signale :", options: ["Une zone de baignade", "Un danger de faible étendue entouré d'eaux navigables", "Un obstacle situé sous la marque", "L'axe d'un chenal"], bonnes: [1, 2],
      explication: "Noire avec une bande rouge et deux sphères noires, c'est une marque de danger isolé, posée sur un danger de faible étendue autour duquel les eaux sont navigables." },
    { id: "BAL-043", chapitre: "balisage-cardinal-dangers", panneau: "MER_DANGER",
      q: "Face à cette marque, je dois :", options: ["La frôler, elle balise un passage", "Passer à bonne distance", "Passer obligatoirement à l'est"], bonnes: [1],
      explication: "La marque de danger isolé est plantée sur le danger : on peut la contourner de n'importe quel côté, mais à bonne distance." },
    { id: "BAL-044", chapitre: "balisage-cardinal-dangers", panneau: "MER_DANGER",
      q: "De nuit, le feu de cette marque est :", options: ["Blanc, scintillant continu", "Rouge fixe", "Blanc, à groupes de 2 éclats"], bonnes: [2],
      explication: "Le danger isolé porte un feu blanc à groupes de 2 éclats, Fl(2), comme ses deux sphères." },
    { id: "BAL-045", chapitre: "balisage-cardinal-dangers", panneau: "MER_DANGER",
      q: "Le voyant de cette marque est composé de :", options: ["Deux cônes noirs", "Une sphère rouge", "Deux sphères noires"], bonnes: [2],
      explication: "Deux sphères noires superposées : danger isolé. Une sphère rouge seule correspond aux eaux saines ; deux cônes noirs, aux cardinales." },
    { id: "BAL-046", chapitre: "balisage-cardinal-dangers", panneau: "MER_EAUX_SAINES",
      q: "Cette marque indique :", options: ["Des eaux saines tout autour", "Souvent un point d'atterrissage ou l'axe d'un chenal", "Un danger sous la marque"], bonnes: [0, 1],
      explication: "Les rayures verticales rouges et blanches et la sphère rouge désignent une marque d'eaux saines : navigables tout autour, elle marque souvent l'atterrissage ou le milieu d'un chenal." },
    { id: "BAL-047", chapitre: "balisage-cardinal-dangers", panneau: "MER_EAUX_SAINES",
      q: "Je peux passer de n'importe quel côté de cette marque :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Une marque d'eaux saines n'a pas de danger autour d'elle : on peut la laisser d'un côté ou de l'autre." },
    { id: "BAL-048", chapitre: "balisage-cardinal-dangers", panneau: "MER_EAUX_SAINES",
      q: "De nuit, son feu peut être :", options: ["Blanc isophase", "Vert scintillant", "Blanc à 2 éclats", "Blanc, à un éclat long toutes les 10 secondes"], bonnes: [0, 3],
      explication: "Feu blanc isophase, à occultations, à éclat long toutes les 10 s ou en Morse A. Le feu blanc à 2 éclats est celui du danger isolé." },
    { id: "BAL-049", chapitre: "balisage-cardinal-dangers", panneau: "MER_SPECIALE",
      q: "Cette marque peut délimiter :", options: ["Un chenal d'accès au rivage", "Une zone de baignade", "Un danger isolé", "Une zone de câbles sous-marins"], bonnes: [0, 1, 3],
      explication: "Les marques spéciales jaunes signalent des zones particulières (baignade, chenaux traversiers, câbles, zones militaires, ski nautique…). Un danger isolé a sa propre marque." },
    { id: "BAL-050", chapitre: "balisage-cardinal-dangers", panneau: "MER_SPECIALE",
      q: "Si cette marque porte un feu, il est :", options: ["Blanc", "Rouge", "Jaune"], bonnes: [2],
      explication: "Les marques spéciales portent un feu jaune, dont le rythme ne doit pas être confondu avec celui des marques à feu blanc." },
    { id: "BAL-051", chapitre: "balisage-cardinal-dangers", panneau: "MER_SPECIALE",
      q: "Cette marque est :", options: ["Une cardinale", "Une marque spéciale", "Une marque de danger isolé"], bonnes: [1],
      explication: "Entièrement jaune avec un voyant en X : marque spéciale. Une cardinale est toujours noire et jaune, avec deux cônes." },
    { id: "BAL-052", chapitre: "balisage-cardinal-dangers", situation: "Le long d'une plage, en été, une ligne de bouées jaunes sphériques est mouillée parallèlement au rivage.", panneau: "MER_SPECIALE",
      q: "Avec mon bateau à moteur, je peux entrer dans la zone située entre ces bouées et la plage :", options: ["Oui, à 5 nœuds au plus", "Non, c'est une zone réservée à la baignade"], bonnes: [1],
      explication: "Une zone de baignade balisée par des bouées jaunes est interdite aux bateaux. Pour rejoindre le rivage, on emprunte le chenal balisé prévu à cet effet." },
    { id: "BAL-053", chapitre: "balisage-cardinal-dangers", situation: "Vous apercevez une bouée à rayures verticales bleues et jaunes qui ne figure pas sur votre carte.",
      q: "Elle signale :", options: ["Le milieu d'un chenal", "Une épave récente", "Une zone de baignade"], bonnes: [1],
      explication: "La bouée à rayures verticales bleues et jaunes, à feu alternatif bleu et jaune, balise en urgence une épave récente non encore portée sur les cartes." },
    { id: "BAL-054", chapitre: "balisage-cardinal-dangers",
      q: "Un nouveau danger, pas encore porté sur les documents nautiques, peut être signalé :", options: ["Par une marque d'eaux saines", "Par une bouée bleue et jaune s'il s'agit d'une épave", "Par des marques doublées"], bonnes: [1, 2],
      explication: "Un nouveau danger est balisé avec les marques habituelles, dont une au moins peut être doublée ; une épave récente peut recevoir une bouée bleue et jaune. La marque d'eaux saines signale au contraire l'absence de danger." },
    { id: "BAL-055", chapitre: "balisage-cardinal-dangers", situation: "Vous apercevez deux bouées cardinales Nord identiques, mouillées l'une près de l'autre.", panneau: "MER_CARD_NORD",
      q: "Ce doublement signale probablement :", options: ["Une zone de mouillage", "Un danger nouveau, non encore porté sur la carte", "Une erreur de balisage sans importance"], bonnes: [1],
      explication: "Une marque doublée signale un nouveau danger jugé grave. On passe au nord, avec une prudence redoublée." },
    { id: "BAL-056", chapitre: "balisage-feux-rythmes",
      q: "Un feu dont la durée de lumière est plus longue que la durée d'obscurité est un feu :", options: ["Isophase", "À éclats", "À occultations"], bonnes: [2],
      explication: "À occultations : surtout allumé, il s'éteint brièvement. À éclats : surtout éteint. Isophase : durées égales." },
    { id: "BAL-057", chapitre: "balisage-feux-rythmes",
      q: "Un feu isophase est un feu :", options: ["Allumé en permanence", "Dont les durées de lumière et d'obscurité sont égales", "Qui change de couleur"], bonnes: [1],
      explication: "Isophase signifie durées égales de lumière et d'obscurité. Un feu allumé en permanence est fixe (F) ; un feu qui change de couleur est alternatif (Al)." },
    { id: "BAL-058", chapitre: "balisage-feux-rythmes",
      q: "La période d'un feu est :", options: ["La durée d'un cycle complet de son rythme", "La hauteur du feu au-dessus de l'eau", "La distance à laquelle on le voit"], bonnes: [0],
      explication: "La période, en secondes, est la durée d'un cycle complet. La distance de visibilité est la portée, en milles." },
    { id: "BAL-059", chapitre: "balisage-feux-rythmes", situation: "Sur la carte, près d'une bouée, vous lisez : Fl(3) G 12s 8M.",
      q: "Cette inscription indique :", options: ["Un cycle de 12 secondes", "Un feu vert à groupes de 3 éclats", "Une profondeur de 8 mètres", "Une portée de 8 milles"], bonnes: [0, 1, 3],
      explication: "Fl(3) = groupes de 3 éclats, G = vert, 12s = période, 8M = portée de 8 milles. Il s'agit probablement d'une marque tribord." },
    { id: "BAL-060", chapitre: "balisage-feux-rythmes", situation: "Sur la carte, un feu est décrit ainsi : Q(6)+LFl 15s.",
      q: "Il s'agit d'une marque :", options: ["De danger isolé", "Cardinale Sud", "Cardinale Est"], bonnes: [1],
      explication: "Six scintillements suivis d'un éclat long, en blanc : cardinale Sud." },
    { id: "BAL-061", chapitre: "balisage-feux-rythmes", situation: "De nuit, vous observez un feu blanc qui émet deux éclats, puis reste éteint quelques secondes, puis recommence.",
      q: "Ce feu est probablement celui :", options: ["D'une marque d'eaux saines", "D'une marque de danger isolé", "D'une cardinale Nord"], bonnes: [1],
      explication: "Un feu blanc à groupes de 2 éclats, Fl(2), désigne un danger isolé. Il faut s'en écarter." },
    { id: "BAL-062", chapitre: "balisage-feux-rythmes", situation: "De nuit, vous voyez un feu jaune à éclats au large d'une plage.",
      q: "Ce feu est celui :", options: ["D'une cardinale", "D'une marque spéciale", "D'une marque latérale"], bonnes: [1],
      explication: "Le feu jaune est réservé aux marques spéciales. Les latérales sont rouges ou vertes ; les cardinales, blanches." },
    { id: "BAL-063", chapitre: "balisage-feux-rythmes",
      q: "Un feu « très scintillant » (VQ) émet environ :", options: ["Un éclat toutes les 10 secondes", "De 50 à 79 éclats par minute", "De 80 à 159 éclats par minute"], bonnes: [2],
      explication: "Le scintillant (Q) compte de 50 à 79 éclats par minute, le très scintillant (VQ) de 80 à 159, le plus souvent 100 ou 120." },
    { id: "BAL-064", chapitre: "balisage-feux-rythmes",
      q: "Les feux blancs du balisage sont portés par :", options: ["Les marques latérales", "Les cardinales", "Les eaux saines", "Le danger isolé"], bonnes: [1, 2, 3],
      explication: "Les cardinales, le danger isolé et les eaux saines ont des feux blancs, qu'on distingue par le rythme. Les latérales ont des feux rouges ou verts." },
    { id: "BAL-065", chapitre: "balisage-feux-rythmes",
      q: "Sur une carte marine, l'abréviation « Oc » désigne un feu :", options: ["À occultations", "Orange clignotant", "Océanique"], bonnes: [0],
      explication: "Oc = à occultations. Les autres abréviations courantes sont F (fixe), Fl (éclats), Iso (isophase), Q (scintillant) et LFl (éclat long)." },
    { id: "BAL-066", chapitre: "balisage-feux-rythmes",
      q: "La portée d'un feu indiquée sur la carte s'exprime en :", options: ["Milles", "Kilomètres", "Mètres"], bonnes: [0],
      explication: "La portée nominale est donnée en milles marins (M). La hauteur d'un feu est, elle, donnée en mètres (m)." },
    { id: "BAL-067", chapitre: "balisage-feux-rythmes", situation: "De nuit, en approchant d'une ville côtière, vous cherchez un feu de port parmi de nombreuses lumières.",
      q: "Pour le reconnaître, je m'appuie surtout sur :", options: ["Sa couleur et son rythme, comparés à la carte", "Son rythme et sa période", "Son intensité, toujours plus forte que les lumières de la ville"], bonnes: [0, 1],
      explication: "Un feu de navigation se reconnaît à sa couleur, son rythme et sa période, que l'on compare avec la carte. L'éclairage public est le plus souvent fixe." },
    { id: "BAL-068", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_NORD",
      q: "Cette marque peut être placée :", options: ["À l'extrémité nord d'un banc", "Au milieu d'un chenal, comme marque d'axe", "Au nord d'un danger"], bonnes: [0, 2],
      explication: "Une cardinale Nord est placée au nord du danger ou de l'extrémité d'un banc. L'axe d'un chenal est signalé par une marque d'eaux saines." },
    { id: "BAL-069", chapitre: "balisage-lateral", situation: "De nuit, vous sortez du port. Cette marque est devant vous.", panneau: "MER_TRIBORD",
      q: "Je sais que :", options: ["Elle porte un feu vert", "Je la laisse sur ma gauche (bâbord)", "Je la laisse sur ma droite (tribord)"], bonnes: [0, 1],
      explication: "La marque tribord porte un feu vert. En sortant du port, on la laisse à bâbord, sur sa gauche." },
    { id: "BAL-070", chapitre: "balisage-cardinal-dangers", panneau: "MER_DANGER",
      q: "Je peux contourner cette marque :", options: ["Par le sud", "Par le nord", "Par l'est ou par l'ouest"], bonnes: [0, 1, 2],
      explication: "Les eaux sont navigables tout autour d'un danger isolé : on peut le contourner de n'importe quel côté, à bonne distance." },
    { id: "BAL-071", chapitre: "balisage-cardinal-dangers", panneau: "MER_EAUX_SAINES",
      q: "Le voyant de cette marque est :", options: ["Deux sphères noires", "Une sphère rouge", "Une croix jaune"], bonnes: [1],
      explication: "La marque d'eaux saines porte une sphère rouge. Deux sphères noires : danger isolé ; croix jaune : marque spéciale." },
    { id: "BAL-072", chapitre: "balisage-cardinal-dangers", panneau: "MER_CARD_SUD",
      q: "Les couleurs de cette marque sont, de haut en bas :", options: ["Noir puis jaune", "Jaune puis noir", "Noir, jaune, noir"], bonnes: [1],
      explication: "Cardinale Sud : jaune au-dessus du noir. Ses cônes pointent vers le bas, là où se trouve le noir." },
    { id: "BAL-073", chapitre: "balisage-cardinal-dangers", panneau: "MER_SPECIALE",
      q: "Cette marque :", options: ["Peut porter un feu jaune", "Signale une zone ou une installation décrite dans les documents nautiques", "Impose de passer d'un côté précis, comme une latérale"], bonnes: [0, 1],
      explication: "La marque spéciale signale une zone ou une installation particulière ; son feu éventuel est jaune. Ce n'est pas une marque latérale." },
    { id: "BAL-074", chapitre: "balisage-lateral", panneau: "MER_BABORD",
      q: "Cette marque :", options: ["Porte un voyant cylindrique", "Est rouge", "Porte en principe un numéro impair", "Se laisse à bâbord en entrant au port"], bonnes: [0, 1, 3],
      explication: "Marque bâbord : rouge, voyant cylindrique, laissée à bâbord en entrant. Elle porte un numéro pair ; les impairs sont pour les marques tribord." },
    { id: "BAL-075", chapitre: "balisage-lateral", panneau: "MER_TRIBORD",
      q: "Cette marque :", options: ["Porte un feu rouge", "Est verte", "Porte un voyant conique pointe en haut", "Se laisse à bâbord en sortant du port"], bonnes: [1, 2, 3],
      explication: "Marque tribord : verte, cône pointe en haut, laissée à tribord en entrant et donc à bâbord en sortant. Son feu est vert." },
    { id: "BAL-076", chapitre: "balisage-cardinal-dangers", situation: "De nuit, cap au sud, vous voyez droit devant cette marque, dont le feu blanc scintille sans interruption.", panneau: "MER_CARD_NORD",
      q: "Je dois :", options: ["Continuer cap au sud jusqu'à la dépasser", "Rester au nord de la marque"], bonnes: [1],
      explication: "Feu blanc scintillant continu : cardinale Nord. Le danger est au sud ; venant du nord, vous êtes du bon côté et devez y rester." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["mer"] = window.PERMIS_COURS["mer"] || { chapitres: [], questions: [] };

  /* ───────────── Thème BARRE — Règles de barre et de route ───────────── */
  P.chapitres.push(
    {
      id: "ripam-principes",
      theme: "BARRE",
      titre: "Le RIPAM : veille, risque d'abordage et hiérarchie des navires",
      duree: 25,
      objectifs: [
        "Savoir ce qu'est le RIPAM et à qui il s'applique",
        "Connaître les obligations de veille et de vitesse de sécurité",
        "Détecter un risque d'abordage par le relèvement",
        "Distinguer navire privilégié et navire non privilégié et leurs obligations",
        "Connaître l'ordre de priorité entre catégories de navires"
      ],
      sections: [
        {
          titre: "Le RIPAM, code de la route de la mer",
          contenu: `<p>Le <strong>RIPAM</strong> (Règlement international pour prévenir les abordages en mer) est la version française de la convention internationale COLREG de 1972. Il s'applique à <strong>tous les navires</strong> en haute mer et dans les eaux qui y sont rattachées et accessibles aux navires de mer : du pétrolier au petit bateau à moteur, en passant par le voilier et le kayak. Des règles locales (règlements de port, de fleuve, arrêtés du préfet maritime) peuvent le compléter.</p>
<p>Le RIPAM règle les <strong>rencontres entre navires</strong> (qui doit manœuvrer), les <strong>feux et marques</strong> qu'ils montrent et les <strong>signaux sonores et lumineux</strong> qu'ils échangent. Il pose aussi un principe de <strong>responsabilité</strong> : aucune règle ne dispense de prendre les précautions que commandent le sens marin et les circonstances. Si respecter une règle à la lettre conduirait à l'abordage, il faut s'en écarter pour éviter un danger immédiat.</p>
<p>Quelques définitions utiles :</p>
<ul>
<li><strong>navire à propulsion mécanique</strong> : tout navire mû par une machine ;</li>
<li><strong>navire à voile</strong> : navire manœuvrant à la voile, <strong>dont la machine n'est pas utilisée</strong> ; un voilier qui fait route au moteur est un navire à propulsion mécanique ;</li>
<li><strong>faisant route</strong> : se dit d'un navire qui n'est ni au mouillage, ni amarré à terre, ni échoué ;</li>
<li><strong>navire en train de pêcher</strong> : navire pêchant avec des filets, lignes ou chaluts qui réduisent sa capacité de manœuvre (pas un plaisancier qui traîne une ligne de traîne).</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un voilier qui utilise son moteur, même avec les voiles hissées, est considéré comme un navire à moteur et suit les règles de celui-ci.</div>`
        },
        {
          titre: "La veille et la vitesse de sécurité",
          contenu: `<p>Tout navire doit assurer en permanence une <strong>veille visuelle et auditive</strong> appropriée, en utilisant aussi tous les moyens disponibles (radar, VHF, AIS s'il y en a), afin d'apprécier pleinement la situation et le risque d'abordage. Sur un petit bateau, cela signifie regarder régulièrement tout autour, y compris <strong>derrière</strong>, et ne jamais laisser la barre sans surveillance.</p>
<p>Tout navire doit aussi naviguer à une <strong>vitesse de sécurité</strong> : une vitesse qui lui permet de prendre des mesures efficaces pour éviter un abordage et de s'arrêter sur une distance adaptée. Elle dépend notamment :</p>
<ul>
<li>de la <strong>visibilité</strong> ;</li>
<li>de la <strong>densité du trafic</strong>, y compris des bateaux de pêche ou de plaisance ;</li>
<li>de la <strong>capacité de manœuvre</strong> du bateau (distance d'arrêt, rayon de giration) ;</li>
<li>de l'état de la <strong>mer</strong>, du <strong>vent</strong> et des <strong>courants</strong>, et de la proximité des dangers ;</li>
<li>de nuit, des lumières de la côte qui peuvent masquer les feux des autres navires.</li>
</ul>
<p>Il n'existe pas de vitesse de sécurité chiffrée dans le RIPAM. Les limitations chiffrées (5 nœuds dans la bande des 300 mètres, vitesse dans les ports) viennent de la réglementation locale.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> la plupart des abordages entre plaisanciers résultent d'un défaut de veille. Un navire de commerce ne vous voit pas toujours : vous devez le voir, et tôt.</div>`
        },
        {
          titre: "Reconnaître un risque d'abordage",
          contenu: `<p>Le moyen le plus sûr de détecter un risque d'abordage est de surveiller le <strong>relèvement</strong> du navire qui approche, c'est-à-dire l'angle sous lequel on le voit (au compas de relèvement ou, à défaut, par rapport à un point fixe du bateau : un hauban, un chandelier).</p>
<ul>
<li>Si le relèvement <strong>ne change pas sensiblement</strong> et que la <strong>distance diminue</strong>, il y a <strong>risque d'abordage</strong>.</li>
<li>Si le relèvement change nettement, les routes ne se croisent pas au même point au même moment.</li>
</ul>
<p>Prudence avec les grands navires et à courte distance : même si le relèvement change un peu, le risque peut exister. <strong>Dans le doute, on considère qu'il y a risque d'abordage.</strong></p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un cargo apparaît sur votre tribord avant. Vous le visez par-dessus un chandelier. Deux minutes plus tard, il est toujours dans l'alignement du même chandelier, mais il a grossi : son relèvement est constant et la distance diminue. Il y a risque d'abordage.</div>`
        },
        {
          titre: "Navire privilégié, navire non privilégié",
          contenu: `<p>Dans chaque rencontre, le RIPAM désigne un navire qui doit <strong>s'écarter de la route</strong> de l'autre (le navire <strong>non privilégié</strong>) et un navire qui doit <strong>maintenir son cap et sa vitesse</strong> (le navire <strong>privilégié</strong>).</p>
<table>
<thead><tr><th>Navire non privilégié</th><th>Navire privilégié</th></tr></thead>
<tbody>
<tr><td>Manœuvre <strong>tôt</strong>, de façon <strong>franche</strong> et <strong>nettement visible</strong> : un grand changement de cap plutôt qu'une série de petits</td><td>Maintient son <strong>cap</strong> et sa <strong>vitesse</strong> pour que l'autre puisse prévoir sa trajectoire</td></tr>
<tr><td>Évite, si possible, de couper la route de l'autre <strong>sur l'avant</strong></td><td>Peut manœuvrer seul dès qu'il apparaît que l'autre ne fait pas le nécessaire, en signalant son doute</td></tr>
<tr><td>Peut aussi réduire sa vitesse, stopper ou battre en arrière</td><td>Doit manœuvrer lorsque l'abordage ne peut plus être évité par la seule manœuvre de l'autre</td></tr>
</tbody>
</table>
<p>Lorsque le privilégié est amené à manœuvrer seul face à un navire à moteur qui le croise, il évite, si les circonstances le permettent, de venir sur <strong>bâbord</strong> pour un navire situé sur son propre bâbord : il risquerait de se jeter sous l'étrave de l'autre au moment où celui-ci se décide enfin à venir sur tribord.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> être privilégié ne donne pas un « droit de passage » absolu. Le privilégié garde cap et vitesse, mais il reste responsable : si l'autre ne manœuvre pas, il doit agir pour éviter l'abordage.</div>`
        },
        {
          titre: "La hiérarchie entre catégories de navires",
          contenu: `<p>Hors des cas particuliers (rattrapant, chenal étroit, dispositif de séparation du trafic), la règle 18 du RIPAM établit un ordre de priorité fondé sur la <strong>capacité de manœuvre</strong> : celui qui manœuvre le plus facilement s'écarte de celui qui manœuvre le plus difficilement.</p>
<table>
<thead><tr><th>Ce navire…</th><th>…s'écarte de la route de</th></tr></thead>
<tbody>
<tr><td>Navire à propulsion mécanique faisant route</td><td>Navire non maître de sa manœuvre, navire à capacité de manœuvre restreinte, navire en train de pêcher, navire à voile</td></tr>
<tr><td>Navire à voile faisant route</td><td>Navire non maître de sa manœuvre, navire à capacité de manœuvre restreinte, navire en train de pêcher</td></tr>
<tr><td>Navire en train de pêcher faisant route</td><td>Navire non maître de sa manœuvre, navire à capacité de manœuvre restreinte</td></tr>
</tbody>
</table>
<p>En outre, tout navire autre qu'un navire non maître de sa manœuvre ou à capacité de manœuvre restreinte évite, si les circonstances le permettent, de <strong>gêner le passage</strong> d'un navire <strong>handicapé par son tirant d'eau</strong>, qui montre trois feux rouges ou un cylindre.</p>
<p>Un moyen de mémoriser l'ordre, du plus « prioritaire » au moins prioritaire : <strong>non maître de sa manœuvre, capacité restreinte, pêche, voile, moteur</strong>. Le bateau à moteur de plaisance est presque toujours celui qui s'écarte.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le navire à moteur s'écarte du voilier, du pêcheur au travail, du navire non maître de sa manœuvre et du navire à capacité de manœuvre restreinte. Le voilier s'écarte des trois derniers.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un chalutier qui rentre au port, filets à bord, n'est pas « en train de pêcher » : c'est un simple navire à moteur. Seuls les feux ou marques de pêche lui donnent cette priorité.</div>`
        }
      ],
      points_cles: [
        "Le RIPAM s'applique à tous les navires, du cargo à la petite embarcation",
        "Veille visuelle et auditive permanente, vitesse de sécurité adaptée aux circonstances",
        "Relèvement constant et distance qui diminue : risque d'abordage",
        "Le non-privilégié manœuvre tôt, franchement, et évite de passer sur l'avant de l'autre",
        "Le privilégié maintient cap et vitesse, mais doit agir si l'autre ne manœuvre pas",
        "Ordre de priorité : non maître de sa manœuvre, capacité restreinte, pêche, voile, moteur",
        "Un voilier au moteur est un navire à propulsion mécanique",
        "On évite de gêner un navire handicapé par son tirant d'eau"
      ]
    },
    {
      id: "ripam-rencontres",
      theme: "BARRE",
      titre: "Les rencontres : routes opposées, croisement, rattrapage et voiliers",
      duree: 25,
      objectifs: [
        "Appliquer la règle des routes opposées entre navires à moteur",
        "Appliquer la règle de croisement : céder au navire vu par tribord",
        "Savoir que le rattrapant s'écarte toujours, quel que soit son type",
        "Résoudre une rencontre entre deux voiliers à l'aide des amures",
        "Résoudre une rencontre entre un voilier et un bateau à moteur"
      ],
      sections: [
        {
          titre: "Deux navires à moteur face à face",
          contenu: `<p>Lorsque deux navires à propulsion mécanique font des <strong>routes directement opposées</strong> ou presque, de sorte qu'il existe un risque d'abordage, <strong>chacun vient sur tribord</strong> (sur sa droite) pour que les deux navires se croisent <strong>bâbord sur bâbord</strong>, comme deux voitures sur une route.</p>
<p>On reconnaît cette situation :</p>
<ul>
<li>de jour, quand on voit l'autre navire droit devant ou presque, ses mâts alignés ;</li>
<li>de nuit, quand on voit ses <strong>deux feux de côté</strong> (rouge et vert) à la fois, et éventuellement ses feux de tête de mât alignés.</li>
</ul>
<p>Dans le doute, on considère qu'on est dans cette situation et on vient sur tribord. Le changement de cap doit être <strong>franc</strong>, et on peut l'annoncer par <strong>un son bref</strong> au sifflet (« je viens sur tribord »).</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> de nuit, vous voyez droit devant un feu blanc, un feu rouge et un feu vert. C'est un navire à moteur qui vient vers vous. Vous venez nettement sur tribord ; il doit faire de même.</div>`
        },
        {
          titre: "Deux navires à moteur dont les routes se croisent",
          contenu: `<p>Lorsque deux navires à propulsion mécanique ont des <strong>routes qui se croisent</strong> avec risque d'abordage, celui qui voit l'autre <strong>sur son tribord</strong> doit s'écarter de sa route. C'est l'équivalent, en mer, de la priorité à droite.</p>
<ul>
<li>Le navire qui voit l'autre <strong>sur tribord</strong> est <strong>non privilégié</strong> : il manœuvre tôt, et évite de passer sur l'avant de l'autre. Le plus souvent, il vient sur tribord pour passer derrière, ou il ralentit.</li>
<li>Le navire qui voit l'autre <strong>sur bâbord</strong> est <strong>privilégié</strong> : il maintient son cap et sa vitesse.</li>
</ul>
<p>De nuit, la règle est facile à appliquer : si vous voyez le <strong>feu rouge</strong> (bâbord) de l'autre navire, c'est qu'il vous présente son côté gauche, donc qu'il est sur votre tribord ou devant vous en train de croiser de droite à gauche : <strong>vous devez vous écarter</strong>. Si vous voyez son <strong>feu vert</strong>, c'est lui qui doit s'écarter.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> « rouge, je m'écarte ; vert, je passe » (en maintenant cap et vitesse et en surveillant l'autre). Les feux de côté sont faits pour ça.</div>`
        },
        {
          titre: "Le navire rattrapant",
          contenu: `<p>Un navire est <strong>rattrapant</strong> lorsqu'il s'approche d'un autre en venant d'une direction de plus de <strong>22,5° sur l'arrière du travers</strong> de celui-ci. De nuit, il ne verrait que le <strong>feu de poupe</strong> (blanc) de l'autre, sans aucun de ses feux de côté.</p>
<p>La règle est simple et absolue : <strong>le navire rattrapant s'écarte de la route du navire rattrapé</strong>, quelle que soit la catégorie des deux navires. Un voilier qui rattrape un bateau à moteur doit s'en écarter ; un bateau à moteur rapide qui rattrape un chalutier au travail aussi, évidemment.</p>
<p>Le rattrapant le reste jusqu'à ce qu'il soit <strong>complètement paré et clair</strong> du navire rattrapé : un changement de relèvement en cours de dépassement ne le transforme pas en navire « qui croise ». En cas de doute sur sa situation, il se considère comme rattrapant.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la hiérarchie moteur, voile, pêche ne joue pas pour le rattrapage. Un voilier qui en rattrape un autre, ou qui rattrape un bateau à moteur, doit s'écarter.</div>`
        },
        {
          titre: "Deux voiliers : les amures",
          contenu: `<p>Entre deux navires à voile, la priorité dépend des <strong>amures</strong>, c'est-à-dire du côté d'où vient le vent :</p>
<ul>
<li>un voilier est <strong>tribord amures</strong> quand il reçoit le vent par tribord (sa bôme est à bâbord) ;</li>
<li>il est <strong>bâbord amures</strong> quand il reçoit le vent par bâbord (sa bôme est à tribord).</li>
</ul>
<p>Pour la règle, on considère que le vent vient du bord opposé à celui où se trouve la <strong>grand-voile</strong> (ou la plus grande voile aurique sur un navire à phares carrés).</p>
<table>
<thead><tr><th>Situation</th><th>Qui s'écarte ?</th></tr></thead>
<tbody>
<tr><td>Amures différentes</td><td>Le voilier <strong>bâbord amures</strong> s'écarte du voilier tribord amures</td></tr>
<tr><td>Même amure</td><td>Le voilier <strong>au vent</strong> s'écarte du voilier sous le vent</td></tr>
<tr><td>Voilier bâbord amures qui ne peut pas savoir si l'autre, au vent, est bâbord ou tribord amures</td><td>Il s'écarte</td></tr>
</tbody>
</table>
<p>Le navire « au vent » est celui qui est le plus près de la direction d'où vient le vent ; le navire « sous le vent » est de l'autre côté.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> deux voiliers font route tribord amures sur des routes convergentes. Celui qui est au vent, plus proche de l'origine du vent, doit s'écarter de celui qui est sous le vent.</div>`
        },
        {
          titre: "Voilier et bateau à moteur",
          contenu: `<p>Le navire à propulsion mécanique faisant route <strong>s'écarte de la route du navire à voile</strong>, sauf dans trois cas :</p>
<ul>
<li>le voilier est <strong>rattrapant</strong> : il doit s'écarter ;</li>
<li>dans un <strong>chenal étroit</strong>, le voilier ne doit pas gêner le passage d'un navire qui ne peut naviguer qu'à l'intérieur du chenal ;</li>
<li>dans un <strong>dispositif de séparation du trafic</strong>, le voilier ne doit pas gêner un navire à propulsion mécanique qui suit une voie de circulation.</li>
</ul>
<p>Attention aussi au voilier qui fait route <strong>au moteur</strong> : c'est un navire à propulsion mécanique. De jour, il doit montrer un <strong>cône pointe en bas</strong> s'il a des voiles établies ; de nuit, il montre les feux d'un navire à moteur.</p>
<p>Enfin, un petit bateau de plaisance, quel qu'il soit, a tout intérêt à rester à l'écart des grands navires : leur distance d'arrêt se compte en milles et leur visibilité vers l'avant est réduite.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un voilier sous voiles est privilégié face à un bateau à moteur en pleine mer, mais il reste tenu de veiller et de manœuvrer si l'autre ne le voit pas.</div>`
        },
        {
          titre: "Méthode pour résoudre une situation",
          contenu: `<ol>
<li><strong>Identifier</strong> le type de chaque navire : moteur, voile, pêche, non maître de sa manœuvre, capacité restreinte (de nuit, par ses feux ; de jour, par ses marques).</li>
<li>Vérifier s'il y a <strong>rattrapage</strong> : si oui, le rattrapant s'écarte, quel que soit le type.</li>
<li>Vérifier si l'on est dans un <strong>chenal étroit</strong> ou un <strong>dispositif de séparation du trafic</strong> : règles particulières.</li>
<li>Sinon, appliquer la <strong>hiérarchie</strong> entre catégories.</li>
<li>Entre deux navires de même catégorie : moteur contre moteur, <strong>routes opposées</strong> (chacun sur tribord) ou <strong>croisement</strong> (celui qui voit l'autre sur tribord s'écarte) ; voile contre voile, <strong>amures</strong>.</li>
<li>Manœuvrer <strong>tôt et franchement</strong> si l'on est non privilégié ; maintenir cap et vitesse si l'on est privilégié, en surveillant l'autre.</li>
</ol>
<table>
<thead><tr><th>Rencontre</th><th>Qui manœuvre</th></tr></thead>
<tbody>
<tr><td>Moteur / moteur, face à face</td><td>Les deux, sur tribord</td></tr>
<tr><td>Moteur / moteur, routes croisées</td><td>Celui qui voit l'autre sur tribord</td></tr>
<tr><td>Rattrapage (tous types)</td><td>Le rattrapant</td></tr>
<tr><td>Moteur / voilier</td><td>Le moteur (sauf rattrapage, chenal, DST)</td></tr>
<tr><td>Voilier / voilier, amures différentes</td><td>Le bâbord amures</td></tr>
<tr><td>Voilier / voilier, même amure</td><td>Celui qui est au vent</td></tr>
<tr><td>Moteur ou voilier / pêcheur au travail</td><td>Le moteur ou le voilier</td></tr>
</tbody>
</table>`
        }
      ],
      points_cles: [
        "Moteur contre moteur, face à face : chacun vient sur tribord",
        "Routes croisées entre navires à moteur : celui qui voit l'autre sur tribord s'écarte",
        "De nuit : je vois le feu rouge de l'autre, je m'écarte ; je vois son vert, je maintiens cap et vitesse",
        "Le rattrapant s'écarte toujours, quel que soit son type",
        "Rattrapant : il vient de plus de 22,5° sur l'arrière du travers, il ne voit que le feu de poupe",
        "Voiliers d'amures différentes : bâbord amures s'écarte",
        "Voiliers de même amure : celui qui est au vent s'écarte",
        "Le moteur s'écarte du voilier, sauf rattrapage, chenal étroit et dispositif de séparation du trafic"
      ]
    },
    {
      id: "ripam-chenaux-sons",
      theme: "BARRE",
      titre: "Chenaux étroits, séparation du trafic, visibilité réduite et signaux sonores",
      duree: 25,
      objectifs: [
        "Appliquer les règles de conduite dans un chenal étroit",
        "Savoir naviguer dans ou à proximité d'un dispositif de séparation du trafic",
        "Adapter sa conduite par visibilité réduite",
        "Connaître les signaux sonores de manœuvre et de brume"
      ],
      sections: [
        {
          titre: "Les chenaux étroits",
          contenu: `<p>Dans un <strong>chenal étroit</strong> ou une voie d'accès, tout navire faisant route se tient aussi près que possible de la <strong>limite extérieure du chenal qui se trouve sur son tribord</strong>, c'est-à-dire sur la droite du chenal.</p>
<p>Plusieurs obligations protègent les grands navires qui ne peuvent naviguer qu'à l'intérieur du chenal :</p>
<ul>
<li>les navires de <strong>moins de 20 mètres</strong> et les <strong>voiliers</strong> ne doivent pas gêner le passage d'un navire qui ne peut naviguer en sécurité qu'à l'intérieur du chenal ;</li>
<li>les navires en train de pêcher ne doivent pas gêner le passage d'un autre navire naviguant dans le chenal ;</li>
<li>un navire ne doit pas <strong>couper</strong> un chenal si cela gêne un navire qui ne peut naviguer qu'à l'intérieur ;</li>
<li>on évite de <strong>mouiller</strong> dans un chenal étroit.</li>
</ul>
<p>À l'approche d'un <strong>coude</strong> ou d'un endroit où la vue est masquée, on émet <strong>un son prolongé</strong> ; tout navire qui l'entend de l'autre côté du coude répond par un son prolongé.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> dans un chenal, je tiens ma droite, je ne gêne pas les gros navires qui y sont contraints, je ne m'y arrête pas et je ne le coupe pas devant eux.</div>`
        },
        {
          titre: "Les dispositifs de séparation du trafic",
          contenu: `<p>Dans les zones de trafic intense (Pas-de-Calais, Ouessant, Casquets), des <strong>dispositifs de séparation du trafic</strong> (DST) organisent la circulation comme une autoroute : deux <strong>voies de circulation</strong> de sens opposés, séparées par une <strong>zone de séparation</strong>, et, entre le dispositif et la côte, une <strong>zone de navigation côtière</strong>.</p>
<ul>
<li>Un navire qui utilise le dispositif suit la voie appropriée dans le <strong>sens général du trafic</strong>, se tient à l'écart de la zone de séparation et rejoint ou quitte la voie de préférence à ses extrémités, ou sous un angle aussi faible que possible.</li>
<li>Un navire qui doit <strong>traverser</strong> une voie le fait en suivant un <strong>cap aussi perpendiculaire que possible</strong> à la direction du trafic, pour rester le moins longtemps possible dans la voie.</li>
<li>Les navires de <strong>moins de 20 mètres</strong>, les <strong>voiliers</strong> et les navires en train de pêcher <strong>ne doivent pas gêner</strong> le passage d'un navire à propulsion mécanique qui suit une voie de circulation.</li>
<li>Les petits navires (moins de 20 m), les voiliers et les pêcheurs peuvent utiliser la <strong>zone de navigation côtière</strong>.</li>
<li>On évite de mouiller dans un DST et à proximité de ses extrémités.</li>
</ul>
<p>Les DST sont surveillés par les CROSS, qui peuvent relever les infractions et appeler les navires en VHF.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> pour traverser une voie, c'est le <strong>cap</strong> qui doit être perpendiculaire, pas la route sur le fond. Le courant peut vous faire dériver : peu importe, on garde le cap à angle droit.</div>`
        },
        {
          titre: "Naviguer par visibilité réduite",
          contenu: `<p>Par brume, brouillard, forte pluie ou neige, la règle 19 du RIPAM s'applique aux navires qui <strong>ne sont pas en vue</strong> les uns des autres. Les règles de priorité habituelles (privilégié, non privilégié) ne s'appliquent pas tant que les navires ne se voient pas : chacun doit agir pour éviter l'abordage.</p>
<ul>
<li>Naviguer à une <strong>vitesse de sécurité</strong> adaptée à la visibilité, moteur prêt à manœuvrer immédiatement.</li>
<li>Émettre les <strong>signaux sonores de brume</strong> prévus et allumer les <strong>feux de navigation</strong>, même de jour.</li>
<li>Renforcer la <strong>veille</strong> : un équipier à l'avant, écoute attentive, radar et réflecteur radar si le bateau en est équipé.</li>
<li>Si l'on entend <strong>sur l'avant du travers</strong> le signal de brume d'un navire, ou si l'on ne peut éviter une situation très rapprochée avec un navire sur l'avant du travers, on <strong>réduit la vitesse au minimum</strong> nécessaire pour gouverner, et on <strong>casse l'erre</strong> (on s'arrête) si nécessaire, en naviguant avec une extrême prudence jusqu'à ce que le risque soit écarté.</li>
</ul>
<p>Pour un petit bateau de plaisance, la meilleure décision est souvent de <strong>ne pas sortir</strong> quand la brume est annoncée, ou de se mettre à l'abri en eau peu profonde, hors des routes des navires, en attendant qu'elle se lève.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un bateau en polyester renvoie très mal les ondes radar. Sans réflecteur radar, un cargo peut ne jamais vous voir sur son écran.</div>`
        },
        {
          titre: "Les signaux sonores de manœuvre",
          contenu: `<p>Un <strong>son bref</strong> dure environ <strong>1 seconde</strong> ; un <strong>son prolongé</strong> dure de <strong>4 à 6 secondes</strong>. Les navires en vue l'un de l'autre utilisent les signaux suivants (ils peuvent être doublés par des éclats lumineux blancs) :</p>
<table>
<thead><tr><th>Signal</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>1 son bref</td><td>Je viens sur tribord</td></tr>
<tr><td>2 sons brefs</td><td>Je viens sur bâbord</td></tr>
<tr><td>3 sons brefs</td><td>Je bats en arrière (machine en arrière)</td></tr>
<tr><td>Au moins 5 sons brefs et rapides</td><td>Je ne comprends pas vos intentions, je doute que vous manœuvriez suffisamment</td></tr>
<tr><td>1 son prolongé</td><td>Approche d'un coude ou d'un endroit masqué d'un chenal</td></tr>
<tr><td>2 prolongés + 1 bref</td><td>Dans un chenal : j'ai l'intention de vous rattraper sur votre tribord</td></tr>
<tr><td>2 prolongés + 2 brefs</td><td>Dans un chenal : j'ai l'intention de vous rattraper sur votre bâbord</td></tr>
<tr><td>Prolongé, bref, prolongé, bref</td><td>Réponse du navire rattrapé : je suis d'accord</td></tr>
</tbody>
</table>
<p>Pour mémoriser : 1 = tribord (le « premier » côté, la droite), 2 = bâbord, 3 = arrière.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> 3 sons brefs ne veulent pas dire « danger » mais « je bats en arrière ». Le signal de doute est d'au moins 5 sons brefs.</div>`
        },
        {
          titre: "Les signaux sonores par visibilité réduite",
          contenu: `<p>Par visibilité réduite, de jour comme de nuit, les navires émettent les signaux suivants à <strong>intervalles de 2 minutes au plus</strong> :</p>
<table>
<thead><tr><th>Navire</th><th>Signal</th></tr></thead>
<tbody>
<tr><td>À propulsion mécanique, ayant de l'erre</td><td>1 son prolongé</td></tr>
<tr><td>À propulsion mécanique, faisant route mais stoppé (sans erre)</td><td>2 sons prolongés</td></tr>
<tr><td>Voilier, pêcheur, non maître de sa manœuvre, capacité restreinte, handicapé par son tirant d'eau, navire qui remorque ou pousse</td><td>1 prolongé + 2 brefs</td></tr>
<tr><td>Navire remorqué (s'il a un équipage)</td><td>1 prolongé + 3 brefs</td></tr>
<tr><td>Navire au mouillage</td><td>Cloche tintée rapidement pendant environ 5 secondes, toutes les minutes</td></tr>
<tr><td>Navire échoué</td><td>3 coups de cloche distincts, cloche rapide, puis 3 coups distincts, toutes les minutes</td></tr>
</tbody>
</table>
<p>Un navire de <strong>moins de 12 mètres</strong> n'est pas tenu d'émettre ces signaux, mais il doit, à défaut, émettre un <strong>autre signal sonore efficace</strong> à intervalles de 2 minutes au plus. Il doit donc avoir à bord un moyen d'émettre des signaux sonores (corne de brume, avertisseur).</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> dans le brouillard, vous entendez toutes les deux minutes un son prolongé suivi de deux sons brefs. Il peut s'agir d'un voilier, d'un pêcheur au travail ou d'un navire à manœuvre limitée : vous ralentissez au minimum et redoublez d'attention.</div>`
        }
      ],
      points_cles: [
        "Dans un chenal étroit, on tient sa droite et on ne gêne pas les navires contraints d'y rester",
        "Les navires de moins de 20 m et les voiliers ne doivent pas gêner les grands navires dans un chenal ou une voie de DST",
        "On traverse une voie de circulation en suivant un cap aussi perpendiculaire que possible",
        "Par visibilité réduite : vitesse de sécurité, feux allumés, signaux de brume, veille renforcée",
        "Signal de brume entendu sur l'avant du travers : vitesse minimale, voire arrêt",
        "1 bref : tribord ; 2 brefs : bâbord ; 3 brefs : machine arrière ; 5 brefs ou plus : doute",
        "Brume : moteur avec erre, 1 prolongé ; moteur stoppé, 2 prolongés ; voilier, 1 prolongé + 2 brefs ; toutes les 2 minutes au plus",
        "Un navire de moins de 12 m émet au moins un signal sonore efficace toutes les 2 minutes"
      ]
    }
  );

  P.questions.push(
    { id: "BARRE-001", chapitre: "ripam-principes",
      q: "Le RIPAM s'applique :", options: ["Seulement aux navires de plus de 12 mètres", "À tous les navires en mer", "Seulement aux navires de commerce"], bonnes: [1],
      explication: "Le RIPAM s'applique à tous les navires en haute mer et dans les eaux qui y sont rattachées, y compris les petits bateaux de plaisance." },
    { id: "BARRE-002", chapitre: "ripam-principes", situation: "Un voilier a hissé sa grand-voile mais fait route avec son moteur en marche, hélice embrayée.",
      q: "Au regard du RIPAM, ce voilier est :", options: ["Un navire à voile", "Un navire à propulsion mécanique"], bonnes: [1],
      explication: "Un voilier dont la machine est utilisée est un navire à propulsion mécanique. Il suit les règles des navires à moteur et montre de jour un cône pointe en bas." },
    { id: "BARRE-003", chapitre: "ripam-principes", situation: "Un cargo apparaît sur votre tribord avant. Vous le visez par-dessus un chandelier. Quelques minutes plus tard, il est toujours dans l'alignement du même chandelier et il paraît plus gros.",
      q: "Il y a risque d'abordage :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Un relèvement constant avec une distance qui diminue signifie un risque d'abordage. Il faut agir sans attendre." },
    { id: "BARRE-004", chapitre: "ripam-principes", situation: "Vous observez un navire qui approche. Son relèvement change nettement d'une observation à l'autre.",
      q: "En règle générale :", options: ["Le risque d'abordage est maximal", "Les routes ne conduisent pas à une collision"], bonnes: [1],
      explication: "Un relèvement qui change nettement indique en principe l'absence de risque. Prudence toutefois à courte distance ou avec un très grand navire : dans le doute, on considère qu'il y a risque." },
    { id: "BARRE-005", chapitre: "ripam-principes",
      q: "Le navire non privilégié doit manœuvrer :", options: ["En passant de préférence sur l'avant de l'autre", "Tôt", "Par une série de petits changements de cap", "Franchement, de façon visible"], bonnes: [1, 3],
      explication: "La manœuvre doit être faite tôt et être assez nette pour être perçue par l'autre navire. Une série de petits changements de cap n'est pas visible, et passer sur l'avant est à éviter." },
    { id: "BARRE-006", chapitre: "ripam-principes",
      q: "Le navire privilégié doit en principe :", options: ["Accélérer pour passer plus vite", "Maintenir son cap et sa vitesse", "Venir sur bâbord pour faciliter la manœuvre de l'autre"], bonnes: [1],
      explication: "Le privilégié maintient cap et vitesse pour que l'autre puisse prévoir sa trajectoire et manœuvrer en conséquence." },
    { id: "BARRE-007", chapitre: "ripam-principes", situation: "Vous êtes privilégié. Le navire qui doit s'écarter de votre route continue tout droit et la distance diminue rapidement.",
      q: "Je peux :", options: ["Manœuvrer moi-même pour éviter l'abordage", "Émettre au moins 5 sons brefs", "Garder mon cap jusqu'au bout puisque j'ai la priorité"], bonnes: [0, 1],
      explication: "Le privilégié signale son doute par au moins 5 sons brefs et peut manœuvrer seul ; il doit le faire quand l'abordage ne peut plus être évité par l'autre seul." },
    { id: "BARRE-008", chapitre: "ripam-principes",
      q: "La vitesse de sécurité dépend notamment :", options: ["De la capacité de manœuvre de mon bateau", "De la visibilité", "De l'heure de marée haute au port", "De la densité du trafic"], bonnes: [0, 1, 3],
      explication: "La vitesse de sécurité tient compte de la visibilité, du trafic, de la manœuvrabilité, de l'état de la mer, du vent, des courants et des dangers proches. Elle n'est pas chiffrée par le RIPAM." },
    { id: "BARRE-009", chapitre: "ripam-principes",
      q: "La veille à bord doit être :", options: ["Assurée en permanence, y compris vers l'arrière", "Visuelle", "Réservée aux heures de nuit", "Auditive"], bonnes: [0, 1, 3],
      explication: "Le RIPAM impose une veille visuelle et auditive permanente, avec tous les moyens disponibles, tout autour du bateau." },
    { id: "BARRE-010", chapitre: "ripam-principes", situation: "Vous naviguez avec un bateau à moteur. Un voilier sous voiles, sans moteur, croise votre route.",
      q: "Je dois :", options: ["M'écarter de sa route", "Manœuvrer tôt et franchement", "Maintenir mon cap et ma vitesse"], bonnes: [0, 1],
      explication: "Le navire à propulsion mécanique s'écarte de la route du navire à voile (hors rattrapage, chenal étroit et dispositif de séparation du trafic), par une manœuvre faite tôt et bien visible." },
    { id: "BARRE-011", chapitre: "ripam-principes", situation: "Vous naviguez sous voiles. Un chalutier en train de pêcher, qui montre ses marques de pêche, croise votre route.",
      q: "Je dois :", options: ["M'écarter de sa route", "Maintenir mon cap et ma vitesse, je suis un voilier", "Passer à bonne distance de ses engins de pêche"], bonnes: [0, 2],
      explication: "Le voilier s'écarte du navire en train de pêcher, dont les engins réduisent la capacité de manœuvre et peuvent s'étendre loin du bateau." },
    { id: "BARRE-012", chapitre: "ripam-principes", situation: "Un chalutier rentre au port, chaluts rangés à bord. Il ne montre aucune marque de pêche. Vous êtes à la voile, sans moteur.",
      q: "Dans une situation de croisement, ce chalutier doit :", options: ["Être considéré comme en train de pêcher", "S'écarter de ma route"], bonnes: [1],
      explication: "Sans engins de pêche à l'eau, le chalutier est un simple navire à moteur : il s'écarte du voilier." },
    { id: "BARRE-013", chapitre: "ripam-principes",
      q: "Un navire à propulsion mécanique faisant route s'écarte de la route :", options: ["D'un navire à voile", "D'un navire en train de pêcher", "D'un navire à capacité de manœuvre restreinte", "D'un navire non maître de sa manœuvre"], bonnes: [0, 1, 2, 3],
      explication: "Le navire à moteur est en bas de la hiérarchie : il s'écarte de toutes ces catégories." },
    { id: "BARRE-014", chapitre: "ripam-principes",
      q: "Un voilier faisant route s'écarte de la route :", options: ["D'un navire non maître de sa manœuvre", "D'un navire à capacité de manœuvre restreinte", "D'un navire à moteur de plaisance qui le croise", "D'un navire en train de pêcher"], bonnes: [0, 1, 3],
      explication: "Le voilier s'écarte des navires non maîtres de leur manœuvre, à capacité de manœuvre restreinte et en train de pêcher. Le navire à moteur qui croise doit, lui, s'écarter du voilier." },
    { id: "BARRE-015", chapitre: "ripam-principes",
      q: "Parmi ces navires, lequel est le plus « prioritaire » dans la hiérarchie du RIPAM ?", options: ["Le navire non maître de sa manœuvre", "Le navire à voile", "Le navire en train de pêcher"], bonnes: [0],
      explication: "L'ordre est : non maître de sa manœuvre et capacité de manœuvre restreinte, puis pêche, voile, et enfin moteur." },
    { id: "BARRE-016", chapitre: "ripam-principes", situation: "Un grand navire montrant trois feux rouges superposés navigue dans votre zone.",
      q: "Je dois :", options: ["Lui couper la route, il doit s'écarter de moi", "Éviter de gêner son passage"], bonnes: [1],
      explication: "Trois feux rouges superposés : navire handicapé par son tirant d'eau. Les autres navires évitent de gêner son passage." },
    { id: "BARRE-017", chapitre: "ripam-principes",
      q: "Si l'application stricte d'une règle du RIPAM conduit à l'abordage :", options: ["Je l'applique quand même, je serai dans mon droit", "Je dois m'en écarter pour éviter le danger immédiat"], bonnes: [1],
      explication: "Le RIPAM impose de s'écarter des règles quand c'est nécessaire pour éviter un danger immédiat. Aucune règle ne dispense du sens marin." },
    { id: "BARRE-018", chapitre: "ripam-rencontres", situation: "De nuit, vous naviguez au moteur. Droit devant, vous voyez un feu blanc au-dessus d'un feu rouge et d'un feu vert, visibles en même temps.",
      q: "Je dois :", options: ["Venir sur bâbord", "Maintenir mon cap", "Venir sur tribord"], bonnes: [2],
      explication: "Feux rouge et vert visibles ensemble droit devant : navire à moteur en route opposée. Chacun vient sur tribord pour se croiser bâbord sur bâbord." },
    { id: "BARRE-019", chapitre: "ripam-rencontres", situation: "Deux bateaux à moteur font des routes directement opposées et se rapprochent.",
      q: "Lequel doit manœuvrer ?", options: ["Le plus petit seulement", "Le plus rapide seulement", "Les deux, en venant chacun sur tribord"], bonnes: [2],
      explication: "En routes opposées, chacun des deux navires à moteur vient sur tribord. La taille et la vitesse n'y changent rien." },
    { id: "BARRE-020", chapitre: "ripam-rencontres", situation: "Vous naviguez au moteur. Un autre bateau à moteur arrive par votre tribord avant, sur une route qui croise la vôtre. Son relèvement reste constant.",
      q: "Je dois :", options: ["Maintenir mon cap et ma vitesse", "Ralentir pour passer derrière lui", "Passer sur son avant en accélérant", "M'écarter de sa route"], bonnes: [1, 3],
      explication: "Entre deux navires à moteur dont les routes se croisent, celui qui voit l'autre sur tribord s'écarte. On évite de passer sur l'avant : on vient sur tribord ou on ralentit pour passer derrière." },
    { id: "BARRE-021", chapitre: "ripam-rencontres", situation: "Vous naviguez au moteur. Un autre bateau à moteur arrive par votre bâbord, sur une route qui croise la vôtre avec risque d'abordage.",
      q: "Je dois :", options: ["Venir sur bâbord pour passer derrière lui", "Maintenir mon cap et ma vitesse", "M'écarter de sa route"], bonnes: [1],
      explication: "L'autre navire vous voit sur son tribord : c'est lui qui doit s'écarter. Vous êtes privilégié et maintenez cap et vitesse en le surveillant." },
    { id: "BARRE-022", chapitre: "ripam-rencontres", situation: "De nuit, vous êtes au moteur. Sur votre tribord avant, vous apercevez un feu blanc de tête de mât et un feu rouge. Le relèvement est constant.",
      q: "Je dois :", options: ["M'écarter de sa route", "Maintenir mon cap et ma vitesse"], bonnes: [0],
      explication: "Vous voyez le feu rouge (bâbord) d'un navire à moteur qui croise par votre tribord : vous êtes non privilégié et devez vous écarter." },
    { id: "BARRE-023", chapitre: "ripam-rencontres", situation: "De nuit, vous êtes au moteur. Sur votre bâbord avant, vous voyez un feu blanc de tête de mât et un feu vert. Le relèvement est constant.",
      q: "En principe, je :", options: ["Viens immédiatement sur bâbord", "Maintiens mon cap et ma vitesse", "Surveille que l'autre navire manœuvre"], bonnes: [1, 2],
      explication: "Vous voyez le feu vert d'un navire à moteur qui croise par votre bâbord : il doit s'écarter. Vous maintenez cap et vitesse en le surveillant. Venir sur bâbord est à éviter." },
    { id: "BARRE-024", chapitre: "ripam-rencontres",
      q: "Un navire est rattrapant lorsqu'il s'approche d'un autre en venant d'une direction située :", options: ["À plus de 22,5° sur l'arrière du travers de l'autre", "Sur l'avant du travers de l'autre", "Exactement par son travers"], bonnes: [0],
      explication: "Le rattrapant vient de plus de 22,5° sur l'arrière du travers : de nuit, il ne voit que le feu de poupe de l'autre navire." },
    { id: "BARRE-025", chapitre: "ripam-rencontres", situation: "Vous naviguez à la voile, plus vite qu'un bateau à moteur lent que vous rattrapez par l'arrière.",
      q: "Qui doit s'écarter ?", options: ["Le bateau à moteur, car je suis à la voile", "Moi, voilier rattrapant"], bonnes: [1],
      explication: "Le rattrapant s'écarte toujours, quel que soit son type. La hiérarchie moteur, voile ne s'applique pas au rattrapage." },
    { id: "BARRE-026", chapitre: "ripam-rencontres", situation: "De nuit, devant vous, vous ne voyez qu'un feu blanc fixe. Vous gagnez sur lui.",
      q: "Il s'agit probablement :", options: ["D'un navire qui vient vers moi", "Du feu de poupe d'un navire que je rattrape"], bonnes: [1],
      explication: "Un feu blanc seul, dont on se rapproche, est souvent un feu de poupe : vous êtes rattrapant et devez vous écarter. Ce peut aussi être un navire au mouillage : on reste prudent." },
    { id: "BARRE-027", chapitre: "ripam-rencontres", situation: "Vous dépassez un bateau à moteur par l'arrière. Pendant la manœuvre, vous vous retrouvez à son travers.",
      q: "Je reste tenu de m'écarter de sa route :", options: ["Oui, jusqu'à être complètement paré et clair", "Non, nous sommes désormais en situation de croisement"], bonnes: [0],
      explication: "Un rattrapant le reste jusqu'à ce qu'il soit paré et clair du navire rattrapé : un changement de relèvement ne le rend pas privilégié." },
    { id: "BARRE-028", chapitre: "ripam-rencontres",
      q: "Un voilier est « tribord amures » lorsqu'il reçoit le vent :", options: ["Par tribord", "Par bâbord"], bonnes: [0],
      explication: "Tribord amures : vent reçu par tribord, bôme et grand-voile du côté bâbord." },
    { id: "BARRE-029", chapitre: "ripam-rencontres", situation: "Deux voiliers se rapprochent. L'un est bâbord amures, l'autre tribord amures.",
      q: "Celui qui doit s'écarter est :", options: ["Le voilier bâbord amures", "Le voilier tribord amures", "Le plus rapide des deux"], bonnes: [0],
      explication: "Entre voiliers d'amures différentes, le bâbord amures s'écarte du tribord amures." },
    { id: "BARRE-030", chapitre: "ripam-rencontres", situation: "Deux voiliers, tous deux tribord amures, ont des routes qui convergent. L'un est au vent de l'autre.",
      q: "Celui qui doit s'écarter est :", options: ["Le voilier au vent", "Le voilier sous le vent"], bonnes: [0],
      explication: "Entre voiliers de même amure, celui qui est au vent s'écarte de celui qui est sous le vent." },
    { id: "BARRE-031", chapitre: "ripam-rencontres", situation: "Vous êtes à la voile, votre grand-voile est établie sur bâbord. Un autre voilier arrive.",
      q: "Mon bateau est :", options: ["Tribord amures", "Bâbord amures"], bonnes: [0],
      explication: "On considère que le vent vient du côté opposé à la grand-voile : grand-voile à bâbord, vent par tribord, donc tribord amures." },
    { id: "BARRE-032", chapitre: "ripam-rencontres", situation: "Vous naviguez bâbord amures. Un voilier au vent de vous approche, mais vous ne pouvez pas déterminer de quel côté il reçoit le vent.",
      q: "Je dois :", options: ["Maintenir mon cap et ma vitesse", "M'écarter de sa route"], bonnes: [1],
      explication: "Un voilier bâbord amures qui ne peut déterminer l'amure d'un voilier au vent doit s'écarter de sa route." },
    { id: "BARRE-033", chapitre: "ripam-rencontres", situation: "Votre bateau à moteur croise un voilier qui fait route au moteur, voiles hissées, en montrant un cône pointe en bas.",
      q: "Ce voilier doit être considéré comme :", options: ["Un navire à voile prioritaire sur moi", "Un navire à propulsion mécanique"], bonnes: [1],
      explication: "Le cône pointe en bas indique un voilier qui utilise son moteur : il suit les règles des navires à moteur (croisement, routes opposées)." },
    { id: "BARRE-034", chapitre: "ripam-rencontres", situation: "Vous êtes au moteur. Un kayak de mer traverse devant vous à quelques encablures.",
      q: "Je dois :", options: ["Ralentir et m'en écarter largement", "Maintenir mon cap, le kayak doit s'écarter"], bonnes: [0],
      explication: "Une embarcation à rames manœuvre peu et se voit mal. Le sens marin, que le RIPAM impose en toutes circonstances, commande au bateau à moteur, bien plus manœuvrant, de s'en écarter largement et de ralentir pour limiter son sillage." },
    { id: "BARRE-035", chapitre: "ripam-rencontres", situation: "Un bateau à moteur croise votre route en venant de votre tribord. Vous devez vous écarter.",
      q: "La meilleure manœuvre consiste souvent à :", options: ["Venir légèrement sur bâbord", "Venir franchement sur tribord pour passer derrière lui", "Accélérer pour passer devant lui"], bonnes: [1],
      explication: "Le non-privilégié évite de passer sur l'avant de l'autre. Venir franchement sur tribord ou ralentir permet de passer derrière." },
    { id: "BARRE-036", chapitre: "ripam-chenaux-sons", situation: "Vous empruntez un chenal étroit d'accès à un port.",
      q: "Je me tiens :", options: ["Le plus près possible de la limite du chenal sur mon tribord", "Au milieu du chenal", "Sur la gauche du chenal"], bonnes: [0],
      explication: "Dans un chenal étroit, on se tient aussi près que possible de la limite extérieure située sur son tribord, si c'est sans danger." },
    { id: "BARRE-037", chapitre: "ripam-chenaux-sons", situation: "À bord d'un voilier de 9 mètres, vous remontez un chenal étroit. Un ferry, qui ne peut naviguer qu'à l'intérieur du chenal, arrive derrière vous.",
      q: "Je dois :", options: ["Ne pas gêner son passage", "Me rapprocher de la limite du chenal située sur mon tribord", "Garder mon cap, je suis un voilier"], bonnes: [0, 1],
      explication: "Dans un chenal étroit, les navires de moins de 20 m et les voiliers ne doivent pas gêner un navire qui ne peut naviguer qu'à l'intérieur. La priorité du voilier ne joue pas." },
    { id: "BARRE-038", chapitre: "ripam-chenaux-sons", situation: "Vous voulez traverser un chenal étroit où arrive un cargo qui ne peut naviguer qu'à l'intérieur.",
      q: "Je peux traverser devant lui :", options: ["Oui, si cela ne le gêne pas", "Non, si cela gêne son passage", "Oui, toujours, car je suis plus petit"], bonnes: [0, 1],
      explication: "Un navire ne doit pas couper un chenal étroit si cela gêne un navire qui ne peut naviguer qu'à l'intérieur. S'il n'y a aucune gêne, la traversée reste possible." },
    { id: "BARRE-039", chapitre: "ripam-chenaux-sons", situation: "Vous arrivez à un coude d'un chenal où la vue est masquée par une jetée.",
      q: "Je peux signaler mon approche par :", options: ["Cinq sons brefs", "Trois sons brefs", "Un son prolongé"], bonnes: [2],
      explication: "À l'approche d'un coude masqué, on émet un son prolongé ; un navire de l'autre côté répond par un son prolongé." },
    { id: "BARRE-040", chapitre: "ripam-chenaux-sons",
      q: "Pour mouiller, un chenal étroit est un endroit :", options: ["Recommandé, car l'eau y est profonde", "À éviter"], bonnes: [1],
      explication: "Tout navire évite de mouiller dans un chenal étroit, où il gênerait la navigation." },
    { id: "BARRE-041", chapitre: "ripam-chenaux-sons", situation: "Vous devez traverser une voie de circulation d'un dispositif de séparation du trafic.",
      q: "Je la traverse :", options: ["En longeant la zone de séparation", "En suivant un cap aussi perpendiculaire que possible à la direction du trafic", "En biais, pour profiter du courant"], bonnes: [1],
      explication: "On traverse une voie de DST en suivant un cap aussi perpendiculaire que possible au trafic, pour y rester le moins longtemps possible." },
    { id: "BARRE-042", chapitre: "ripam-chenaux-sons", situation: "Avec votre bateau de plaisance de 8 mètres, vous naviguez près d'un dispositif de séparation du trafic.",
      q: "Je peux :", options: ["Utiliser la zone de navigation côtière", "Naviguer dans la zone de séparation entre les deux voies", "Remonter une voie à contresens"], bonnes: [0],
      explication: "Les navires de moins de 20 m peuvent utiliser la zone de navigation côtière. La zone de séparation est à éviter, et une voie se suit dans le sens général du trafic." },
    { id: "BARRE-043", chapitre: "ripam-chenaux-sons", situation: "Dans une voie d'un dispositif de séparation du trafic, un porte-conteneurs suit la voie. Vous êtes à la voile.",
      q: "Je dois :", options: ["Maintenir mon cap, je suis privilégié en tant que voilier", "Ne pas gêner son passage", "Manœuvrer suffisamment tôt pour lui laisser le passage"], bonnes: [1, 2],
      explication: "Dans un DST, les voiliers et les navires de moins de 20 m ne doivent pas gêner le passage d'un navire à propulsion mécanique qui suit une voie : on agit tôt." },
    { id: "BARRE-044", chapitre: "ripam-chenaux-sons", situation: "Le brouillard tombe brusquement pendant votre sortie au moteur.",
      q: "Je dois :", options: ["Émettre les signaux sonores de brume", "Accélérer pour rentrer au plus vite", "Allumer mes feux de navigation", "Réduire ma vitesse"], bonnes: [0, 2, 3],
      explication: "Par visibilité réduite : vitesse de sécurité, feux allumés même de jour, signaux de brume et veille renforcée." },
    { id: "BARRE-045", chapitre: "ripam-chenaux-sons", situation: "Dans le brouillard, vous entendez sur votre avant le signal de brume d'un navire que vous ne voyez pas.",
      q: "Je dois :", options: ["Casser mon erre si nécessaire", "Réduire ma vitesse au minimum pour gouverner", "Maintenir ma vitesse en attendant de le voir"], bonnes: [0, 1],
      explication: "Un signal de brume entendu sur l'avant du travers impose de réduire la vitesse au minimum et, si nécessaire, de s'arrêter." },
    { id: "BARRE-046", chapitre: "ripam-chenaux-sons", situation: "Un navire à moteur, en vue, émet un son bref.",
      q: "Ce signal signifie :", options: ["Je viens sur bâbord", "Je bats en arrière", "Je viens sur tribord"], bonnes: [2],
      explication: "1 son bref : je viens sur tribord ; 2 sons brefs : je viens sur bâbord ; 3 sons brefs : je bats en arrière." },
    { id: "BARRE-047", chapitre: "ripam-chenaux-sons", situation: "Un navire, en vue, émet deux sons brefs.",
      q: "Ce signal signifie :", options: ["Je viens sur tribord", "Je viens sur bâbord", "Je suis au mouillage"], bonnes: [1],
      explication: "Deux sons brefs annoncent un changement de cap vers bâbord." },
    { id: "BARRE-048", chapitre: "ripam-chenaux-sons", situation: "Un cargo qui manœuvre dans le port émet trois sons brefs.",
      q: "Ce signal signifie :", options: ["Je bats en arrière", "Je viens sur tribord", "Je suis en danger"], bonnes: [0],
      explication: "Trois sons brefs : ma machine est en arrière. Ce n'est pas un signal de danger." },
    { id: "BARRE-049", chapitre: "ripam-chenaux-sons", situation: "Un navire vers lequel vous vous dirigez émet au moins cinq sons brefs et rapides.",
      q: "Ce signal signifie :", options: ["Il me souhaite la bienvenue", "Il vient sur tribord", "Il doute que je manœuvre suffisamment pour éviter l'abordage"], bonnes: [2],
      explication: "Au moins 5 sons brefs et rapides expriment un doute sur les intentions ou la manœuvre de l'autre navire. Il faut réagir immédiatement." },
    { id: "BARRE-050", chapitre: "ripam-chenaux-sons",
      q: "Un son prolongé dure environ :", options: ["De 4 à 6 secondes", "10 secondes", "1 seconde"], bonnes: [0],
      explication: "Son prolongé : 4 à 6 secondes. Son bref : environ 1 seconde." },
    { id: "BARRE-051", chapitre: "ripam-chenaux-sons", situation: "Dans le brouillard, vous entendez toutes les deux minutes un son prolongé.",
      q: "Il s'agit probablement :", options: ["D'un navire à moteur faisant route avec de l'erre", "D'un voilier", "D'un navire au mouillage"], bonnes: [0],
      explication: "Un son prolongé toutes les 2 minutes au plus : navire à propulsion mécanique ayant de l'erre. Le voilier émet un prolongé suivi de deux brefs." },
    { id: "BARRE-052", chapitre: "ripam-chenaux-sons", situation: "Dans le brouillard, vous entendez toutes les deux minutes deux sons prolongés.",
      q: "Il s'agit :", options: ["D'un navire à moteur stoppé, sans erre", "D'un navire qui remorque", "D'un navire échoué"], bonnes: [0],
      explication: "Deux sons prolongés : navire à propulsion mécanique faisant route, mais stoppé et sans erre." },
    { id: "BARRE-053", chapitre: "ripam-chenaux-sons", situation: "Vous naviguez à la voile dans la brume.",
      q: "Le signal sonore que je dois émettre est :", options: ["Un son prolongé suivi de deux sons brefs", "Trois sons brefs", "Un son prolongé"], bonnes: [0],
      explication: "Par visibilité réduite, le voilier émet un prolongé suivi de deux brefs, à intervalles de 2 minutes au plus." },
    { id: "BARRE-054", chapitre: "ripam-chenaux-sons", situation: "Dans la brume, vous entendez une cloche tintée rapidement pendant environ cinq secondes, chaque minute.",
      q: "Ce signal est celui :", options: ["D'un navire au mouillage", "D'un navire à moteur faisant route", "D'une bouée cardinale"], bonnes: [0],
      explication: "La cloche tintée rapidement environ 5 secondes, toutes les minutes, signale un navire au mouillage." },
    { id: "BARRE-055", chapitre: "ripam-chenaux-sons", situation: "Votre bateau à moteur mesure 7 mètres. Vous êtes surpris par la brume.",
      q: "En matière de signaux sonores :", options: ["Je dois émettre un signal sonore efficace toutes les 2 minutes au plus", "Je n'ai aucune obligation, mon bateau mesure moins de 12 mètres"], bonnes: [0],
      explication: "Un navire de moins de 12 m n'est pas tenu d'émettre les signaux réglementaires, mais doit émettre un autre signal sonore efficace à intervalles de 2 minutes au plus." },
    { id: "BARRE-056", chapitre: "ripam-chenaux-sons", situation: "Dans un chenal, un navire qui vous suit émet deux sons prolongés suivis d'un son bref.",
      q: "Il annonce :", options: ["Qu'il bat en arrière", "Son intention de me rattraper sur mon tribord", "Son intention de me rattraper sur mon bâbord"], bonnes: [1],
      explication: "Deux prolongés et un bref : je compte vous rattraper sur votre tribord. Deux prolongés et deux brefs : sur votre bâbord." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["mer"] = window.PERMIS_COURS["mer"] || { chapitres: [], questions: [] };

  /* ───────────── Thème FEUX — Feux et marques des navires ───────────── */
  P.chapitres.push(
    {
      id: "feux-navigation",
      theme: "FEUX",
      titre: "Les feux de navigation : secteurs, portées, navire à moteur et voilier",
      duree: 25,
      objectifs: [
        "Connaître les feux de base : tête de mât, côté, poupe, remorquage, tout horizon",
        "Connaître leurs secteurs de visibilité et leurs portées",
        "Reconnaître de nuit un navire à moteur et un voilier",
        "Déduire la route approximative d'un navire à partir des feux visibles"
      ],
      sections: [
        {
          titre: "Quand montrer les feux et les marques",
          contenu: `<p>Le RIPAM impose aux navires de montrer des <strong>feux</strong> du <strong>coucher au lever du soleil</strong>, ainsi que de jour par <strong>visibilité réduite</strong>, et chaque fois qu'on le juge nécessaire. Pendant ce temps, aucun autre feu ne doit pouvoir être confondu avec eux ni gêner la veille (projecteur de pont mal orienté, éclairage de cockpit trop fort).</p>
<p>De jour, certains navires montrent des <strong>marques</strong> (boules, cônes, cylindres) qui indiquent leur situation particulière. Les feux et marques permettent de savoir, d'un coup d'œil, à quel type de navire on a affaire, quelle est sa route, et donc qui doit manœuvrer.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les feux s'allument du coucher au lever du soleil et par visibilité réduite. Lire les feux, c'est savoir qui est en face et dans quel sens il va.</div>`
        },
        {
          titre: "Les feux de base et leurs secteurs",
          contenu: `<table>
<thead><tr><th>Feu</th><th>Couleur</th><th>Secteur de visibilité</th><th>Position</th></tr></thead>
<tbody>
<tr><td>Tête de mât</td><td>Blanc</td><td>225°, de l'avant jusqu'à 22,5° sur l'arrière du travers de chaque bord</td><td>Dans l'axe, en hauteur</td></tr>
<tr><td>Feu de côté tribord</td><td>Vert</td><td>112,5°, de l'avant jusqu'à 22,5° sur l'arrière du travers tribord</td><td>Côté droit</td></tr>
<tr><td>Feu de côté bâbord</td><td>Rouge</td><td>112,5°, de l'avant jusqu'à 22,5° sur l'arrière du travers bâbord</td><td>Côté gauche</td></tr>
<tr><td>Feu de poupe</td><td>Blanc</td><td>135°, vers l'arrière (67,5° de chaque côté de l'arrière)</td><td>À l'arrière</td></tr>
<tr><td>Feu de remorquage</td><td>Jaune</td><td>135°, comme le feu de poupe</td><td>Au-dessus du feu de poupe</td></tr>
<tr><td>Feu visible sur tout l'horizon</td><td>Selon le cas</td><td>360°</td><td>Selon le cas</td></tr>
</tbody>
</table>
<p>Les secteurs sont calculés pour se compléter : le feu de tête de mât (225°) et le feu de poupe (135°) couvrent ensemble tout l'horizon (360°). Les deux feux de côté (2 × 112,5° = 225°) couvrent le même secteur que le feu de tête de mât.</p>
<p>La limite de <strong>22,5° sur l'arrière du travers</strong> est celle qui définit le navire rattrapant : celui qui voit seulement le feu de poupe d'un autre navire est rattrapant.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous voyez un feu blanc au-dessus d'un feu vert. Vous voyez le côté tribord d'un navire à moteur : il passe de votre gauche vers votre droite, et c'est lui qui doit s'écarter si vos routes se croisent.</div>`
        },
        {
          titre: "Les portées minimales",
          contenu: `<p>Le RIPAM fixe une portée lumineuse minimale selon la longueur du navire :</p>
<table>
<thead><tr><th>Longueur du navire</th><th>Tête de mât</th><th>Côté</th><th>Poupe, remorquage, tout horizon</th></tr></thead>
<tbody>
<tr><td>Moins de 12 m</td><td>2 milles</td><td>1 mille</td><td>2 milles</td></tr>
<tr><td>De 12 à moins de 20 m</td><td>3 milles</td><td>2 milles</td><td>2 milles</td></tr>
<tr><td>De 20 à moins de 50 m</td><td>5 milles</td><td>2 milles</td><td>2 milles</td></tr>
<tr><td>50 m et plus</td><td>6 milles</td><td>3 milles</td><td>3 milles</td></tr>
</tbody>
</table>
<p>Conséquence pratique : les feux de côté d'un petit bateau ne se voient qu'à <strong>un mille</strong>. Un cargo lancé à 20 nœuds parcourt un mille en 3 minutes : les petits bateaux doivent donc être particulièrement vigilants de nuit et ne pas compter sur le fait d'être vus.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> les feux d'un petit bateau, placés bas sur l'eau, sont souvent masqués par les vagues. Ne naviguez pas de nuit sans des feux en parfait état et une lampe puissante pour éclairer vos voiles ou votre coque en cas de besoin.</div>`
        },
        {
          titre: "Le navire à propulsion mécanique",
          contenu: `<p>Un navire à moteur faisant route montre :</p>
<ul>
<li>un <strong>feu de tête de mât</strong> à l'avant ;</li>
<li>un <strong>second feu de tête de mât</strong>, plus haut et en arrière du premier, <strong>obligatoire à partir de 50 m</strong> (facultatif en dessous) ;</li>
<li>les deux <strong>feux de côté</strong> ;</li>
<li>un <strong>feu de poupe</strong>.</li>
</ul>
<p>Allègements pour les petits navires :</p>
<ul>
<li>moins de <strong>12 m</strong> : il peut remplacer le feu de tête de mât et le feu de poupe par un <strong>feu blanc visible sur tout l'horizon</strong>, avec les feux de côté ;</li>
<li>moins de <strong>7 m</strong> et vitesse maximale de <strong>7 nœuds</strong> ou moins : un seul <strong>feu blanc visible sur tout l'horizon</strong> suffit, avec si possible les feux de côté.</li>
</ul>
<p>Les feux de côté d'un navire de moins de 20 m peuvent être réunis dans une <strong>lanterne bicolore</strong> placée dans l'axe, à l'avant.</p>
<p>Deux feux de tête de mât donnent une indication précieuse : un grand navire, et sa route. S'ils sont <strong>alignés verticalement</strong>, le navire vient droit sur vous ; s'ils s'écartent, il présente son flanc ; le feu le plus bas est à l'avant.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un feu blanc seul peut être un petit bateau à moteur lent, un feu de poupe, un navire au mouillage ou une embarcation à rames. Il faut observer son évolution et compléter par d'autres indices.</div>`
        },
        {
          titre: "Le voilier et l'embarcation à rames",
          contenu: `<p>Un navire <strong>à voile</strong> faisant route montre ses <strong>feux de côté</strong> et son <strong>feu de poupe</strong>, mais <strong>aucun feu de tête de mât</strong> : c'est ce qui le distingue d'un navire à moteur.</p>
<ul>
<li>Un voilier de <strong>moins de 20 m</strong> peut réunir ces trois feux dans une <strong>lanterne tricolore</strong> placée en tête de mât, très visible de loin.</li>
<li>Il peut aussi montrer, en tête de mât, deux feux visibles sur tout l'horizon, <strong>rouge au-dessus de vert</strong>, en plus de ses feux de côté et de poupe ; ces deux feux ne doivent pas être utilisés avec la lanterne tricolore.</li>
<li>Un voilier de <strong>moins de 7 m</strong> qui ne peut pas porter ces feux doit avoir à portée de main une <strong>lampe électrique</strong> ou un fanal à feu blanc, à montrer assez tôt pour éviter un abordage.</li>
<li>Une <strong>embarcation à l'aviron</strong> peut montrer les feux d'un voilier ou, à défaut, avoir une lampe à feu blanc prête à être montrée.</li>
</ul>
<p>Dès qu'il utilise son moteur, le voilier montre les <strong>feux d'un navire à moteur</strong> : feu de tête de mât, feux de côté et feu de poupe. Il ne doit alors plus allumer sa lanterne tricolore.</p>
<table>
<thead><tr><th>Ce que je vois de nuit</th><th>Ce que c'est probablement</th></tr></thead>
<tbody>
<tr><td>Blanc au-dessus de rouge et vert</td><td>Navire à moteur qui vient vers moi</td></tr>
<tr><td>Rouge et vert seuls, sans blanc au-dessus</td><td>Voilier qui vient vers moi</td></tr>
<tr><td>Blanc et vert</td><td>Navire à moteur vu par son tribord</td></tr>
<tr><td>Blanc et rouge</td><td>Navire à moteur vu par son bâbord</td></tr>
<tr><td>Vert seul</td><td>Voilier vu par son tribord</td></tr>
<tr><td>Rouge seul</td><td>Voilier vu par son bâbord</td></tr>
<tr><td>Blanc seul</td><td>Feu de poupe, navire au mouillage ou petit bateau</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> pas de feu blanc au-dessus des feux de côté = voilier. Un feu blanc de tête de mât = navire à moteur.</div>`
        }
      ],
      points_cles: [
        "Feux allumés du coucher au lever du soleil et par visibilité réduite",
        "Tête de mât blanc 225°, côtés 112,5° (vert tribord, rouge bâbord), poupe blanc 135°",
        "Petit navire (moins de 12 m) : feux de côté visibles à 1 mille seulement",
        "Navire à moteur : tête de mât, côtés, poupe ; second feu de tête de mât obligatoire à partir de 50 m",
        "Moins de 12 m à moteur : un feu blanc tout horizon peut remplacer tête de mât et poupe",
        "Voilier : côtés et poupe, jamais de feu de tête de mât ; tricolore possible en dessous de 20 m",
        "Rouge sur vert en tête de mât : voilier (feux facultatifs)",
        "Deux feux de tête de mât alignés : le navire vient droit sur moi"
      ]
    },
    {
      id: "feux-navires-speciaux",
      theme: "FEUX",
      titre: "Feux des navires particuliers : pêche, remorquage, manœuvre limitée, mouillage",
      duree: 25,
      objectifs: [
        "Reconnaître les feux des navires de pêche : chalutier et autre pêche",
        "Reconnaître un remorqueur et le navire remorqué",
        "Reconnaître un navire non maître de sa manœuvre, à capacité de manœuvre restreinte ou handicapé par son tirant d'eau",
        "Reconnaître un navire au mouillage, échoué, ou un bateau pilote"
      ],
      sections: [
        {
          titre: "Le principe : des feux visibles sur tout l'horizon superposés",
          contenu: `<p>Les navires qui ont une situation particulière montrent, en plus ou à la place des feux de route, des <strong>feux visibles sur tout l'horizon</strong>, superposés verticalement. Les combinaisons de couleurs sont codifiées :</p>
<ul>
<li>le <strong>rouge</strong> superposé évoque une difficulté de manœuvre (non maître de sa manœuvre, tirant d'eau, échoué) ;</li>
<li>le <strong>vert</strong> évoque le chalut ;</li>
<li>le <strong>blanc</strong> sert de repère de hauteur dans les combinaisons de pêche, de pilote et de capacité restreinte.</li>
</ul>
<p>Une règle générale aide beaucoup : si le navire a de l'<strong>erre</strong> (il avance dans l'eau), il montre en plus ses <strong>feux de côté</strong> et son <strong>feu de poupe</strong>. Si on aperçoit les feux superposés <strong>sans</strong> feux de côté, il est stoppé ou n'a pas d'erre.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> d'abord identifier les feux superposés (le type de navire), puis regarder les feux de côté (s'il avance, et dans quel sens).</div>`
        },
        {
          titre: "Les navires de pêche",
          contenu: `<p>Un navire <strong>en train de pêcher</strong> montre ses feux de pêche, et, s'il a de l'erre, ses feux de côté et de poupe.</p>
<table>
<thead><tr><th>Navire</th><th>Feux tout horizon (haut vers bas)</th><th>Complément</th></tr></thead>
<tbody>
<tr><td>Chalutier en pêche</td><td><strong>Vert au-dessus de blanc</strong></td><td>Feu de tête de mât en arrière et au-dessus du vert (obligatoire à partir de 50 m)</td></tr>
<tr><td>Autre navire de pêche (filets, lignes)</td><td><strong>Rouge au-dessus de blanc</strong></td><td>Si les engins s'étendent à plus de 150 m : un feu blanc tout horizon (ou de jour un cône pointe en haut) dans la direction des engins</td></tr>
</tbody>
</table>
<p>Pour mémoriser : le chalutier « vert sur blanc », le fileyeur « rouge sur blanc ». On dit parfois « <strong>vert, c'est le chalut</strong> ; rouge, c'est le reste ».</p>
<p>Un navire de pêche à l'arrêt, engins à l'eau, peut être entouré de filets ou de lignes longues de plusieurs centaines de mètres : passez à bonne distance, et jamais entre deux navires de pêche qui travaillent ensemble.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> rouge sur blanc = pêche ; blanc sur rouge = pilote. L'ordre des couleurs compte.</div>`
        },
        {
          titre: "Remorquage et poussage",
          contenu: `<p>Un navire qui <strong>remorque</strong> montre :</p>
<ul>
<li><strong>deux feux de tête de mât</strong> superposés à l'avant, ou <strong>trois</strong> si la longueur de la remorque (de l'arrière du remorqueur à l'arrière de la remorque) dépasse <strong>200 m</strong> ;</li>
<li>ses feux de côté et son feu de poupe ;</li>
<li>un <strong>feu de remorquage jaune</strong> au-dessus du feu de poupe ;</li>
<li>de jour, si la remorque dépasse 200 m, une marque en <strong>bicône</strong> (deux cônes base contre base).</li>
</ul>
<p>Le navire <strong>remorqué</strong> montre ses feux de côté et son feu de poupe, et, si la remorque dépasse 200 m, un bicône de jour.</p>
<p>Un navire qui <strong>pousse</strong> un autre navire en avant montre deux feux de tête de mât superposés, ses feux de côté et son feu de poupe, mais pas de feu de remorquage.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> ne passez jamais entre un remorqueur et son remorqué : la remorque, parfois longue de plusieurs centaines de mètres, peut se tendre brusquement et être invisible de nuit.</div>`
        },
        {
          titre: "Manœuvre limitée : non maître, capacité restreinte, tirant d'eau",
          contenu: `<table>
<thead><tr><th>Navire</th><th>Feux tout horizon</th><th>Marque de jour</th></tr></thead>
<tbody>
<tr><td>Non maître de sa manœuvre (avarie de barre, de machine)</td><td><strong>Deux rouges</strong> superposés</td><td>Deux boules</td></tr>
<tr><td>À capacité de manœuvre restreinte (travaux, pose de câbles, dragage, ravitaillement)</td><td><strong>Rouge, blanc, rouge</strong></td><td>Boule, bicône, boule</td></tr>
<tr><td>Handicapé par son tirant d'eau</td><td><strong>Trois rouges</strong> superposés</td><td>Un cylindre</td></tr>
<tr><td>Dragueur de mines en opération</td><td><strong>Trois verts</strong> (un en tête de mât, un à chaque bout de vergue)</td><td>Trois boules ; rester à plus de 1 000 m</td></tr>
</tbody>
</table>
<p>S'ils ont de l'erre, ces navires montrent en plus leurs feux de côté et de poupe ; le navire à capacité de manœuvre restreinte montre aussi ses feux de tête de mât.</p>
<p>Un navire qui effectue des travaux formant une obstruction (dragage, travaux sous-marins) montre, en plus de rouge-blanc-rouge, <strong>deux feux rouges</strong> superposés (ou deux boules de jour) du côté où se trouve l'obstruction, et <strong>deux feux verts</strong> superposés (ou deux bicônes) du côté où l'on peut passer.</p>
<p>Lorsque des <strong>plongeurs</strong> travaillent depuis une petite embarcation qui ne peut pas montrer ces marques, celle-ci arbore une reproduction rigide du <strong>pavillon « A »</strong> du code international (Alpha, blanc et bleu), d'au moins un mètre de haut.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> de nuit, vous voyez deux feux rouges superposés, accompagnés d'un feu vert. C'est un navire non maître de sa manœuvre qui a de l'erre et vous montre son tribord. Vous vous en écartez largement.</div>`
        },
        {
          titre: "Mouillage, échouage et pilote",
          contenu: `<table>
<thead><tr><th>Situation</th><th>Feux</th><th>Marque de jour</th></tr></thead>
<tbody>
<tr><td>Navire au mouillage de moins de 50 m</td><td>Un <strong>feu blanc</strong> visible sur tout l'horizon, là où il se voit le mieux</td><td>Une <strong>boule</strong> à l'avant</td></tr>
<tr><td>Navire au mouillage de 50 m et plus</td><td>Un feu blanc à l'avant et un feu blanc plus bas à l'arrière</td><td>Une boule à l'avant</td></tr>
<tr><td>Navire échoué</td><td>Feux de mouillage + <strong>deux rouges</strong> superposés</td><td><strong>Trois boules</strong> superposées</td></tr>
<tr><td>Bateau pilote en service</td><td><strong>Blanc au-dessus de rouge</strong> ; plus feux de côté et de poupe s'il fait route</td><td>Pavillon « H » du code international</td></tr>
</tbody>
</table>
<p>Un navire de <strong>moins de 7 m</strong> au mouillage n'est pas tenu de montrer ces feux et marques s'il ne se trouve pas dans ou près d'un chenal, d'un mouillage fréquenté ou d'une route habituellement suivie par d'autres navires. Mais un bateau qui passe la nuit dans une crique fréquentée allume son feu de mouillage.</p>
<p>Un navire de <strong>moins de 12 m</strong> échoué n'est pas tenu de montrer les feux et marques d'échouage.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> mouillage = un feu blanc (une boule) ; échoué = mouillage + deux rouges (trois boules) ; pilote = blanc sur rouge.</div>`
        },
        {
          titre: "Tableau de synthèse",
          contenu: `<table>
<thead><tr><th>Feux tout horizon superposés</th><th>Navire</th></tr></thead>
<tbody>
<tr><td>Rouge sur vert (en tête de mât, avec feux de côté)</td><td>Voilier</td></tr>
<tr><td>Vert sur blanc</td><td>Chalutier en pêche</td></tr>
<tr><td>Rouge sur blanc</td><td>Pêche autre que chalut</td></tr>
<tr><td>Blanc sur rouge</td><td>Pilote</td></tr>
<tr><td>Rouge, rouge</td><td>Non maître de sa manœuvre</td></tr>
<tr><td>Rouge, blanc, rouge</td><td>Capacité de manœuvre restreinte</td></tr>
<tr><td>Rouge, rouge, rouge</td><td>Handicapé par son tirant d'eau</td></tr>
<tr><td>Vert, vert, vert</td><td>Dragueur de mines</td></tr>
<tr><td>Blanc seul</td><td>Mouillage (ou petit bateau, ou feu de poupe)</td></tr>
<tr><td>Blanc + rouge, rouge</td><td>Échoué</td></tr>
<tr><td>Deux ou trois blancs superposés + jaune à l'arrière</td><td>Remorqueur</td></tr>
</tbody>
</table>
<p>À l'examen, on vous décrit des feux : commencez toujours par ceux qui sont <strong>superposés</strong> pour identifier le navire, puis servez-vous des <strong>feux de côté</strong> pour savoir s'il avance et de quel côté il vous présente.</p>`
        }
      ],
      points_cles: [
        "Chalutier : vert sur blanc ; autre pêche : rouge sur blanc",
        "Pilote : blanc sur rouge",
        "Non maître de sa manœuvre : deux rouges (deux boules)",
        "Capacité de manœuvre restreinte : rouge, blanc, rouge (boule, bicône, boule)",
        "Handicapé par son tirant d'eau : trois rouges (cylindre)",
        "Remorqueur : deux feux de tête de mât (trois si remorque de plus de 200 m) et feu jaune au-dessus du feu de poupe",
        "Au mouillage : feu blanc tout horizon (boule) ; échoué : feux de mouillage + deux rouges (trois boules)",
        "Feux de côté et de poupe en plus = le navire a de l'erre"
      ]
    },
    {
      id: "marques-de-jour",
      theme: "FEUX",
      titre: "Les marques de jour des navires",
      duree: 15,
      objectifs: [
        "Reconnaître les formes utilisées : boule, cône, bicône, cylindre",
        "Associer chaque combinaison de marques au type de navire",
        "Faire le lien entre les marques de jour et les feux de nuit"
      ],
      sections: [
        {
          titre: "Les quatre formes",
          contenu: `<p>De jour, les feux ne servent à rien : les navires qui se trouvent dans une situation particulière l'indiquent par des <strong>marques</strong> noires, hissées là où elles se voient le mieux. Il n'existe que quatre formes de base :</p>
<ul>
<li>la <strong>boule</strong> (sphère) ;</li>
<li>le <strong>cône</strong>, pointe en haut ou pointe en bas ;</li>
<li>le <strong>bicône</strong> : deux cônes réunis par leur base, qui forment un losange ;</li>
<li>le <strong>cylindre</strong>.</li>
</ul>
<p>Pour les grands navires, la boule mesure au moins 0,6 m de diamètre ; les navires de moins de 20 m peuvent utiliser des marques plus petites, proportionnées à leur taille.</p>
<p>Ces marques ne sont pas les voyants des bouées : sur une bouée, le voyant aide à identifier une marque de balisage ; sur un navire, la marque renseigne sur la situation du navire. Le principe est pourtant le même : une silhouette simple, reconnaissable de loin, même à contre-jour.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> boule, cône, bicône, cylindre : quatre formes seulement, combinées entre elles.</div>`
        },
        {
          titre: "Les marques à connaître",
          contenu: `<table>
<thead><tr><th>Marque de jour</th><th>Navire</th><th>Équivalent de nuit</th></tr></thead>
<tbody>
<tr><td>Un cône pointe en bas</td><td>Voilier faisant route au moteur</td><td>Feux d'un navire à moteur</td></tr>
<tr><td>Deux cônes réunis par la pointe</td><td>Navire en train de pêcher</td><td>Vert sur blanc (chalut) ou rouge sur blanc (autre pêche)</td></tr>
<tr><td>Un cône pointe en haut, en plus</td><td>Pêche avec engins s'étendant à plus de 150 m, dans leur direction</td><td>Un feu blanc tout horizon dans la direction des engins</td></tr>
<tr><td>Deux boules</td><td>Non maître de sa manœuvre</td><td>Deux rouges</td></tr>
<tr><td>Boule, bicône, boule</td><td>Capacité de manœuvre restreinte</td><td>Rouge, blanc, rouge</td></tr>
<tr><td>Un cylindre</td><td>Handicapé par son tirant d'eau</td><td>Trois rouges</td></tr>
<tr><td>Une boule à l'avant</td><td>Au mouillage</td><td>Un feu blanc tout horizon</td></tr>
<tr><td>Trois boules</td><td>Échoué</td><td>Feu de mouillage + deux rouges</td></tr>
<tr><td>Un bicône</td><td>Remorqueur et remorqué, si la remorque dépasse 200 m</td><td>Feux de remorquage</td></tr>
<tr><td>Trois boules (tête de mât et vergues)</td><td>Dragueur de mines</td><td>Trois verts</td></tr>
</tbody>
</table>
<p>Remarquez les correspondances : <strong>deux rouges</strong> de nuit, <strong>deux boules</strong> de jour (non maître) ; <strong>rouge-blanc-rouge</strong> de nuit, <strong>boule-bicône-boule</strong> de jour (le blanc devient le bicône).</p>`
        },
        {
          titre: "Les cas qui piègent",
          contenu: `<ul>
<li><strong>Échoué et dragueur de mines</strong> montrent tous deux trois boules, mais pas disposées de la même façon : superposées pour l'échoué, en triangle (tête de mât et extrémités de vergue) pour le dragueur.</li>
<li><strong>Cône pointe en bas</strong> (voilier au moteur) et <strong>cône pointe en haut</strong> (direction des engins de pêche) ne doivent pas être confondus.</li>
<li><strong>Deux cônes réunis par la pointe</strong> (pêche, forme de sablier) et <strong>bicône</strong> (deux cônes réunis par la base, forme de losange) n'ont pas du tout le même sens.</li>
<li>Un <strong>navire au mouillage</strong> qui ne montre pas sa boule reste un navire au mouillage : on s'en méfie de la même façon.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la marque des cardinales Ouest ressemble aux deux cônes de pêche, et celle des cardinales Est au bicône. Mais une cardinale est une bouée jaune et noire, pas un navire : le contexte lève le doute.</div>`
        },
        {
          titre: "Les pavillons utiles au plaisancier",
          contenu: `<p>Certains pavillons du <strong>code international des signaux</strong> complètent les marques :</p>
<table>
<thead><tr><th>Pavillon</th><th>Aspect</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>Alpha (A)</td><td>Guidon blanc et bleu, à queue d'aronde</td><td>J'ai des scaphandriers en plongée : tenez-vous à distance et passez lentement</td></tr>
<tr><td>H</td><td>Blanc et rouge, partagé verticalement</td><td>J'ai un pilote à bord</td></tr>
<tr><td>N au-dessus de C</td><td>Deux pavillons superposés</td><td>Signal de détresse</td></tr>
</tbody>
</table>
<p>En France, à proximité d'un bateau arborant le <strong>pavillon Alpha</strong>, il faut rester à au moins <strong>100 mètres</strong> et réduire sa vitesse : des plongeurs peuvent remonter à tout moment, loin de leur bateau, et sont invisibles sous la surface.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> une hélice tue. Si vous voyez des bulles en surface ou une bouée de plongeur, débrayez et éloignez-vous lentement.</div>`
        },
        {
          titre: "Méthode d'identification",
          contenu: `<p>Face à un navire qui montre une marque, posez-vous trois questions :</p>
<ol>
<li><strong>Quelle forme ?</strong> Boule, cône, bicône, cylindre.</li>
<li><strong>Combien et dans quel ordre ?</strong> Une boule seule à l'avant (mouillage), deux boules (non maître), trois boules superposées (échoué), boule-bicône-boule (capacité restreinte).</li>
<li><strong>Qu'est-ce que cela change pour moi ?</strong> Dans tous les cas, ces navires manœuvrent mal ou pas du tout : le bateau de plaisance, à moteur ou à voile, s'en écarte.</li>
</ol>
<p>Le lien entre jour et nuit est logique : le même navire raconte la même chose, de jour par des formes, de nuit par des couleurs. Apprendre les deux ensemble, par paires, est la meilleure façon de les retenir pour l'examen.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un navire immobile montre une boule, un losange et une boule superposés. Il est à capacité de manœuvre restreinte, par exemple en train de poser une bouée ou de draguer : vous vous écartez de sa route et ralentissez.</div>`
        },
        {
          titre: "Les petits navires et les situations combinées",
          contenu: `<p>Les navires de <strong>moins de 20 mètres</strong> peuvent utiliser des marques de dimensions réduites, proportionnées à leur taille. Un petit chalutier de moins de 20 m peut aussi remplacer les deux cônes réunis par la pointe par un <strong>panier</strong>, marque traditionnelle des pêcheurs.</p>
<p>Un navire peut cumuler plusieurs situations, et donc plusieurs marques :</p>
<ul>
<li>un navire à capacité de manœuvre restreinte <strong>au mouillage</strong> montre boule-bicône-boule, plus la boule de mouillage ;</li>
<li>un navire qui effectue des travaux formant une <strong>obstruction</strong> ajoute deux boules du côté obstrué et deux bicônes du côté où l'on peut passer ;</li>
<li>un remorqueur dont la remorque dépasse 200 m et qui ne peut pas s'écarter de sa route peut aussi montrer les marques de capacité de manœuvre restreinte.</li>
</ul>
<p>Pour le plaisancier, la conclusion pratique est toujours la même : dès qu'un navire montre une marque, c'est qu'il manœuvre difficilement, ou pas du tout, ou qu'il occupe un espace plus grand qu'il n'y paraît. On l'identifie, on ralentit, on s'en écarte largement et on ne passe jamais du côté obstrué.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une drague immobile montre boule-bicône-boule, deux boules sur son bâbord et deux bicônes sur son tribord. Vous la contournez par son tribord, à vitesse réduite, en surveillant les tuyaux flottants.</div>`
        }
      ],
      points_cles: [
        "Quatre formes : boule, cône, bicône, cylindre",
        "Cône pointe en bas : voilier au moteur",
        "Deux cônes réunis par la pointe : navire en train de pêcher",
        "Deux boules : non maître de sa manœuvre ; boule-bicône-boule : capacité restreinte",
        "Cylindre : handicapé par son tirant d'eau",
        "Une boule : mouillage ; trois boules superposées : échoué",
        "Pavillon Alpha : plongeurs, rester à au moins 100 m et ralentir"
      ]
    }
  );

  P.questions.push(
    { id: "FEUX-001", chapitre: "feux-navigation",
      q: "Les feux de navigation doivent être allumés :", options: ["Uniquement dans les chenaux", "Par visibilité réduite, même de jour", "Du coucher au lever du soleil"], bonnes: [1, 2],
      explication: "Le RIPAM impose de montrer les feux du coucher au lever du soleil et par visibilité réduite, quel que soit l'endroit." },
    { id: "FEUX-002", chapitre: "feux-navigation",
      q: "Le feu de côté tribord est :", options: ["Rouge", "Vert", "Blanc"], bonnes: [1],
      explication: "Feu de côté tribord : vert ; bâbord : rouge. Comme le balisage latéral en entrant au port." },
    { id: "FEUX-003", chapitre: "feux-navigation",
      q: "Le feu de tête de mât est visible sur un secteur de :", options: ["225°", "135°", "112,5°", "360°"], bonnes: [0],
      explication: "Feu de tête de mât : blanc, 225°, de l'avant jusqu'à 22,5° sur l'arrière du travers de chaque bord. Les feux de côté couvrent 112,5° chacun, le feu de poupe 135°." },
    { id: "FEUX-004", chapitre: "feux-navigation",
      q: "Le feu de poupe est :", options: ["Blanc", "Jaune", "Visible sur un secteur de 135° vers l'arrière"], bonnes: [0, 2],
      explication: "Le feu de poupe est blanc, visible sur 135° vers l'arrière. Le feu jaune, au-dessus du feu de poupe, est le feu de remorquage." },
    { id: "FEUX-005", chapitre: "feux-navigation", situation: "De nuit, vous voyez droit devant vous un feu blanc au-dessus d'un feu rouge et d'un feu vert.",
      q: "Il s'agit :", options: ["D'un navire à moteur qui vient vers moi", "D'un voilier qui s'éloigne", "D'un navire au mouillage"], bonnes: [0],
      explication: "Feu de tête de mât au-dessus des deux feux de côté : navire à moteur vu de face. Chacun doit venir sur tribord." },
    { id: "FEUX-006", chapitre: "feux-navigation", situation: "De nuit, droit devant, vous voyez un feu rouge et un feu vert côte à côte, sans aucun feu blanc au-dessus.",
      q: "Il s'agit probablement :", options: ["D'un voilier qui vient vers moi", "D'un navire à moteur qui vient vers moi", "D'un navire qui s'éloigne"], bonnes: [0],
      explication: "Les feux de côté sans feu de tête de mât désignent un voilier, ici vu de face." },
    { id: "FEUX-007", chapitre: "feux-navigation", situation: "De nuit, vous voyez un feu blanc au-dessus d'un feu vert.",
      q: "Ce navire :", options: ["Me présente son côté tribord", "Est un voilier", "Est un navire à moteur"], bonnes: [0, 2],
      explication: "Un feu blanc de tête de mât au-dessus d'un feu de côté désigne un navire à moteur. Le feu vert est celui de son côté tribord. Un voilier ne montre pas de feu de tête de mât." },
    { id: "FEUX-008", chapitre: "feux-navigation", situation: "De nuit, au moteur, vous apercevez un feu rouge seul qui se rapproche.",
      q: "Il s'agit probablement :", options: ["D'un navire à moteur vu de face", "D'un voilier vu par son bâbord"], bonnes: [1],
      explication: "Un feu de côté seul, sans feu blanc au-dessus, est celui d'un voilier ; le rouge indique qu'on voit son bâbord. Un navire à moteur vu de face montrerait un feu blanc, un rouge et un vert." },
    { id: "FEUX-009", chapitre: "feux-navigation", situation: "De nuit, vous voyez au loin deux feux blancs l'un au-dessus de l'autre, parfaitement alignés, et sous eux un feu rouge et un feu vert.",
      q: "Il s'agit :", options: ["D'un navire au mouillage", "D'un remorqueur vu de l'arrière", "D'un grand navire à moteur qui vient droit sur moi"], bonnes: [2],
      explication: "Deux feux de tête de mât alignés et les deux feux de côté : grand navire à moteur (souvent 50 m ou plus) qui fait route vers vous." },
    { id: "FEUX-010", chapitre: "feux-navigation", situation: "De nuit, vous apercevez un grand navire dont les deux feux de tête de mât sont décalés : le plus bas est à droite du plus haut.",
      q: "Le navire se dirige :", options: ["Vers ma droite", "Vers ma gauche"], bonnes: [0],
      explication: "Le feu de tête de mât le plus bas est à l'avant : s'il est à droite du plus haut, l'avant du navire pointe vers ma droite." },
    { id: "FEUX-011", chapitre: "feux-navigation",
      q: "Le second feu de tête de mât d'un navire à moteur est obligatoire :", options: ["À partir de 50 m de longueur", "À partir de 12 m de longueur", "Pour tous les navires"], bonnes: [0],
      explication: "Le second feu de tête de mât, en arrière et plus haut, est obligatoire à partir de 50 m ; il est facultatif en dessous." },
    { id: "FEUX-012", chapitre: "feux-navigation", situation: "Votre bateau à moteur mesure 6,50 m.",
      q: "De nuit, je peux montrer :", options: ["Des feux de côté et un feu de poupe seulement", "Uniquement des feux de côté", "Un feu blanc tout horizon et des feux de côté"], bonnes: [2],
      explication: "Un navire à moteur de moins de 12 m peut remplacer feu de tête de mât et feu de poupe par un feu blanc visible sur tout l'horizon, avec ses feux de côté. Sans feu blanc, il ressemblerait à un voilier." },
    { id: "FEUX-013", chapitre: "feux-navigation",
      q: "Sur un bateau de moins de 12 m, les feux de côté doivent être visibles à au moins :", options: ["2 milles", "1 mille", "3 milles"], bonnes: [1],
      explication: "Pour un navire de moins de 12 m, la portée minimale des feux de côté est de 1 mille ; celle des feux de tête de mât et de poupe, de 2 milles." },
    { id: "FEUX-014", chapitre: "feux-navigation",
      q: "Un voilier faisant route à la voile montre :", options: ["Un feu de tête de mât", "Ses feux de côté", "Son feu de poupe"], bonnes: [1, 2],
      explication: "Le voilier montre ses feux de côté et son feu de poupe, jamais de feu de tête de mât : c'est ce qui le distingue d'un navire à moteur." },
    { id: "FEUX-015", chapitre: "feux-navigation", situation: "Votre voilier mesure 11 m.",
      q: "Je peux réunir mes feux de côté et de poupe :", options: ["Dans un feu blanc tout horizon", "Dans une lanterne tricolore en tête de mât"], bonnes: [1],
      explication: "Un voilier de moins de 20 m peut réunir ses feux de côté et de poupe dans une lanterne tricolore en tête de mât." },
    { id: "FEUX-016", chapitre: "feux-navigation", situation: "De nuit, vous naviguez à la voile avec votre lanterne tricolore allumée. Le vent tombe et vous mettez le moteur en route.",
      q: "Je dois :", options: ["Éteindre la tricolore", "Garder la tricolore, je reste un voilier", "Allumer mon feu de tête de mât, mes feux de côté et mon feu de poupe"], bonnes: [0, 2],
      explication: "Au moteur, le voilier devient un navire à propulsion mécanique : il montre feu de tête de mât, feux de côté et feu de poupe. La tricolore est réservée à la navigation à la voile." },
    { id: "FEUX-017", chapitre: "feux-navigation", situation: "De nuit, vous apercevez en tête de mât d'un navire deux feux tout horizon superposés, rouge au-dessus de vert, et plus bas un feu vert de côté.",
      q: "Il s'agit :", options: ["D'un voilier", "D'un chalutier", "D'un pilote"], bonnes: [0],
      explication: "Rouge au-dessus de vert en tête de mât : feux facultatifs d'un voilier, montrés en plus de ses feux de côté et de poupe." },
    { id: "FEUX-018", chapitre: "feux-navigation", situation: "Vous naviguez de nuit dans une annexe à l'aviron.",
      q: "Je dois au minimum :", options: ["Ne rien faire, je suis à l'aviron", "Avoir à portée de main une lampe à feu blanc à montrer à temps", "Montrer deux feux rouges superposés"], bonnes: [1],
      explication: "Une embarcation à l'aviron peut montrer les feux d'un voilier ou, à défaut, doit avoir une lampe à feu blanc prête à être montrée assez tôt pour éviter un abordage." },
    { id: "FEUX-019", chapitre: "feux-navigation", situation: "De nuit, vous ne voyez qu'un feu blanc fixe devant vous.",
      q: "Il peut s'agir :", options: ["D'un chalutier en pêche", "D'un navire au mouillage", "D'un petit bateau à moteur", "Du feu de poupe d'un navire"], bonnes: [1, 2, 3],
      explication: "Un feu blanc seul peut être un feu de poupe, un feu de mouillage ou le feu tout horizon d'un petit bateau. Le chalutier montre vert sur blanc." },
    { id: "FEUX-020", chapitre: "feux-navigation", situation: "De nuit, vous voyez un feu blanc au-dessus d'un feu rouge.",
      q: "Il s'agit :", options: ["D'un voilier vu par son tribord", "D'un navire à moteur qui me présente son bâbord"], bonnes: [1],
      explication: "Feu blanc de tête de mât et feu rouge : navire à moteur vu par son côté bâbord. Un voilier n'a pas de feu de tête de mât, et son côté tribord serait vert." },
    { id: "FEUX-021", chapitre: "feux-navires-speciaux", situation: "De nuit, vous voyez deux feux tout horizon superposés : vert au-dessus de blanc.",
      q: "Il s'agit :", options: ["D'un pilote", "D'un chalutier en pêche", "D'un navire au mouillage"], bonnes: [1],
      explication: "Vert sur blanc : chalutier en train de pêcher. Le voilier et le bateau à moteur s'en écartent." },
    { id: "FEUX-022", chapitre: "feux-navires-speciaux", situation: "De nuit, vous voyez deux feux tout horizon superposés : rouge au-dessus de blanc.",
      q: "Il s'agit :", options: ["D'un navire en train de pêcher, autrement qu'au chalut", "D'un navire échoué", "D'un bateau pilote"], bonnes: [0],
      explication: "Rouge sur blanc : navire de pêche (filets, lignes) en action. Le pilote montre l'inverse, blanc sur rouge." },
    { id: "FEUX-023", chapitre: "feux-navires-speciaux", situation: "De nuit, vous voyez deux feux tout horizon superposés : blanc au-dessus de rouge.",
      q: "Il s'agit :", options: ["D'un fileyeur en pêche", "D'un bateau pilote en service"], bonnes: [1],
      explication: "Blanc sur rouge : bateau pilote en service. Rouge sur blanc serait un navire de pêche." },
    { id: "FEUX-024", chapitre: "feux-navires-speciaux", situation: "De nuit, vous voyez vert au-dessus de blanc, ainsi qu'un feu rouge plus bas.",
      q: "Ce chalutier :", options: ["Est au mouillage", "A de l'erre", "Me présente son bâbord"], bonnes: [1, 2],
      explication: "Un navire de pêche qui a de l'erre montre ses feux de côté. Le feu rouge indique qu'on voit son bâbord." },
    { id: "FEUX-025", chapitre: "feux-navires-speciaux", situation: "De nuit, vous voyez deux feux rouges superposés, visibles sur tout l'horizon, sans autre feu.",
      q: "Il s'agit :", options: ["D'un navire échoué", "D'un navire handicapé par son tirant d'eau", "D'un navire non maître de sa manœuvre, sans erre"], bonnes: [2],
      explication: "Deux feux rouges superposés : non maître de sa manœuvre. Sans feux de côté, il n'a pas d'erre. Le tirant d'eau en montre trois ; l'échoué ajoute ses feux de mouillage blancs." },
    { id: "FEUX-026", chapitre: "feux-navires-speciaux", situation: "De nuit, vous voyez trois feux superposés tout horizon : rouge, blanc, rouge.",
      q: "Il s'agit :", options: ["D'un navire à capacité de manœuvre restreinte", "D'un navire non maître de sa manœuvre", "D'un pilote"], bonnes: [0],
      explication: "Rouge-blanc-rouge : capacité de manœuvre restreinte (travaux, dragage, pose de câbles). De jour : boule, bicône, boule." },
    { id: "FEUX-027", chapitre: "feux-navires-speciaux", situation: "De nuit, un grand navire montre trois feux rouges superposés en plus de ses feux de route.",
      q: "Il s'agit :", options: ["D'un remorqueur", "D'un navire échoué", "D'un navire handicapé par son tirant d'eau"], bonnes: [2],
      explication: "Trois feux rouges superposés : navire handicapé par son tirant d'eau. On évite de gêner son passage." },
    { id: "FEUX-028", chapitre: "feux-navires-speciaux", situation: "De nuit, un navire montre deux feux blancs de tête de mât superposés à l'avant, un feu jaune au-dessus du feu de poupe et ses feux de côté.",
      q: "Il s'agit :", options: ["D'un navire de plus de 50 m", "D'un chalutier", "D'un navire qui remorque"], bonnes: [2],
      explication: "Deux feux de tête de mât superposés et un feu de remorquage jaune au-dessus du feu de poupe : navire qui remorque. Les feux superposés indiquent une remorque de 200 m au plus." },
    { id: "FEUX-029", chapitre: "feux-navires-speciaux", situation: "Un remorqueur montre trois feux blancs de tête de mât superposés.",
      q: "Cela indique :", options: ["Une remorque de moins de 50 m", "Une remorque de plus de 200 m", "Un navire au mouillage"], bonnes: [1],
      explication: "Trois feux de tête de mât superposés signalent une remorque de plus de 200 m. Ne jamais passer entre le remorqueur et le remorqué." },
    { id: "FEUX-030", chapitre: "feux-navires-speciaux", situation: "De nuit, vous voyez devant vous un remorqueur et, loin derrière lui, les feux d'un navire remorqué.",
      q: "Je peux passer entre les deux :", options: ["Non", "Oui, s'il y a assez de place"], bonnes: [0],
      explication: "La remorque peut être très longue, invisible de nuit, et se tendre brusquement. On ne passe jamais entre un remorqueur et sa remorque." },
    { id: "FEUX-031", chapitre: "feux-navires-speciaux",
      q: "Le feu de remorquage est :", options: ["Rouge", "Placé au-dessus du feu de poupe", "Jaune"], bonnes: [1, 2],
      explication: "Le feu de remorquage est jaune, visible sur 135° vers l'arrière, placé au-dessus du feu de poupe." },
    { id: "FEUX-032", chapitre: "feux-navires-speciaux", situation: "De nuit, dans un mouillage, vous apercevez un feu blanc visible sur tout l'horizon sur un voilier de 10 m immobile.",
      q: "Ce voilier est :", options: ["Au mouillage", "En train de pêcher", "Non maître de sa manœuvre"], bonnes: [0],
      explication: "Un navire de moins de 50 m au mouillage montre un feu blanc tout horizon là où il se voit le mieux." },
    { id: "FEUX-033", chapitre: "feux-navires-speciaux", situation: "De nuit, vous voyez un feu blanc tout horizon et, en dessous, deux feux rouges superposés. Le navire est immobile près d'un haut-fond.",
      q: "Il s'agit :", options: ["D'un navire échoué", "D'un navire non maître de sa manœuvre faisant route", "D'un pilote"], bonnes: [0],
      explication: "Feux de mouillage plus deux rouges superposés : navire échoué. De jour, il montre trois boules superposées." },
    { id: "FEUX-034", chapitre: "feux-navires-speciaux", situation: "Vous passez la nuit au mouillage avec votre voilier de 9 m dans une crique fréquentée.",
      q: "Je dois montrer :", options: ["Ma lanterne tricolore", "Mes feux de côté", "Un feu blanc tout horizon"], bonnes: [2],
      explication: "Au mouillage, un navire de moins de 50 m montre un feu blanc tout horizon. Les feux de côté et la tricolore sont des feux de route." },
    { id: "FEUX-035", chapitre: "feux-navires-speciaux", situation: "De nuit, vous voyez deux feux rouges superposés et, plus bas, un feu vert.",
      q: "Ce navire :", options: ["A de l'erre", "Me montre son tribord", "Est non maître de sa manœuvre", "Doit s'écarter de ma route"], bonnes: [0, 1, 2],
      explication: "Deux rouges : non maître de sa manœuvre. Le feu vert montre qu'il a de l'erre et présente son tribord. Il ne peut pas manœuvrer : c'est à moi de m'écarter." },
    { id: "FEUX-036", chapitre: "feux-navires-speciaux", situation: "Un navire en travaux montre rouge-blanc-rouge, deux feux rouges superposés d'un côté et deux feux verts superposés de l'autre.",
      q: "Je peux passer :", options: ["Du côté des deux feux verts", "Du côté des deux feux rouges"], bonnes: [0],
      explication: "Deux feux verts (ou deux bicônes) indiquent le côté où l'on peut passer ; deux rouges (ou deux boules), le côté de l'obstruction." },
    { id: "FEUX-037", chapitre: "feux-navires-speciaux", situation: "De nuit, vous voyez trois feux verts disposés en triangle sur un navire militaire.",
      q: "Il s'agit :", options: ["D'un pilote", "D'un dragueur de mines en opération, à tenir à plus de 1 000 m", "D'un chalutier"], bonnes: [1],
      explication: "Trois feux verts : dragueur de mines en opération. Il est dangereux de s'en approcher à moins de 1 000 m." },
    { id: "FEUX-038", chapitre: "feux-navires-speciaux", situation: "Un fileyeur en pêche montre rouge sur blanc et, à côté, un feu blanc tout horizon supplémentaire.",
      q: "Ce feu blanc supplémentaire indique :", options: ["La direction de ses engins, qui s'étendent à plus de 150 m", "Qu'il est au mouillage"], bonnes: [0],
      explication: "Lorsque les engins de pêche s'étendent à plus de 150 m, un feu blanc tout horizon (de jour, un cône pointe en haut) en indique la direction." },
    { id: "FEUX-039", chapitre: "feux-navires-speciaux",
      q: "Parmi ces combinaisons de feux superposés, lesquelles comportent du rouge en haut ?", options: ["Non maître de sa manœuvre", "Navire de pêche autre que chalutier", "Pilote", "Chalutier"], bonnes: [0, 1],
      explication: "Non maître : rouge, rouge ; pêche autre : rouge sur blanc. Le pilote montre blanc sur rouge et le chalutier vert sur blanc." },
    { id: "FEUX-040", chapitre: "marques-de-jour", situation: "De jour, un voilier, voiles établies, montre un cône noir pointe en bas.",
      q: "Ce voilier :", options: ["Fait route au moteur", "Est prioritaire sur les bateaux à moteur", "Doit être considéré comme un navire à moteur"], bonnes: [0, 2],
      explication: "Le cône pointe en bas signale un voilier qui utilise son moteur : il suit les règles des navires à propulsion mécanique." },
    { id: "FEUX-041", chapitre: "marques-de-jour", situation: "De jour, un navire montre deux cônes noirs réunis par la pointe.",
      q: "Il s'agit :", options: ["D'un remorqueur", "D'un navire en train de pêcher", "D'un navire au mouillage"], bonnes: [1],
      explication: "Deux cônes réunis par la pointe (en sablier) : navire en train de pêcher. Le voilier et le bateau à moteur s'en écartent." },
    { id: "FEUX-042", chapitre: "marques-de-jour", situation: "De jour, un navire immobile montre deux boules noires superposées.",
      q: "Il s'agit :", options: ["D'un navire non maître de sa manœuvre", "D'un navire échoué", "D'un navire au mouillage"], bonnes: [0],
      explication: "Deux boules : non maître de sa manœuvre (de nuit, deux feux rouges). Le mouillage se signale par une boule, l'échouage par trois." },
    { id: "FEUX-043", chapitre: "marques-de-jour", situation: "De jour, un navire montre, superposés, une boule, un bicône et une boule.",
      q: "Il s'agit :", options: ["D'un navire qui pêche", "D'un navire à capacité de manœuvre restreinte", "D'un voilier au moteur"], bonnes: [1],
      explication: "Boule-bicône-boule : capacité de manœuvre restreinte (de nuit, rouge-blanc-rouge)." },
    { id: "FEUX-044", chapitre: "marques-de-jour", situation: "De jour, un grand navire montre un cylindre noir.",
      q: "Il s'agit :", options: ["D'un navire au mouillage", "D'un remorqueur", "D'un navire handicapé par son tirant d'eau"], bonnes: [2],
      explication: "Le cylindre signale un navire handicapé par son tirant d'eau (de nuit, trois feux rouges)." },
    { id: "FEUX-045", chapitre: "marques-de-jour", situation: "De jour, un voilier immobile montre une boule noire à l'avant.",
      q: "Il est :", options: ["Échoué", "En train de pêcher", "Au mouillage"], bonnes: [2],
      explication: "Une boule à l'avant : navire au mouillage. Échoué : trois boules superposées." },
    { id: "FEUX-046", chapitre: "marques-de-jour", situation: "De jour, près d'un banc de sable, un navire montre trois boules noires superposées.",
      q: "Il s'agit :", options: ["D'un navire au mouillage", "D'un navire échoué", "D'un navire non maître de sa manœuvre"], bonnes: [1],
      explication: "Trois boules superposées : navire échoué. Les fonds sont probablement insuffisants à cet endroit." },
    { id: "FEUX-047", chapitre: "marques-de-jour", situation: "De jour, un remorqueur et le navire qu'il remorque montrent chacun un bicône.",
      q: "Cela signifie :", options: ["Qu'ils sont échoués", "Qu'ils pêchent ensemble", "Que la remorque dépasse 200 m"], bonnes: [2],
      explication: "Le bicône est montré par le remorqueur et le remorqué lorsque la remorque dépasse 200 m." },
    { id: "FEUX-048", chapitre: "marques-de-jour",
      q: "Un bicône est formé de :", options: ["Deux boules", "Deux cônes réunis par leur pointe", "Deux cônes réunis par leur base"], bonnes: [2],
      explication: "Le bicône est un losange : deux cônes réunis par leur base. Deux cônes réunis par la pointe signalent un navire de pêche." },
    { id: "FEUX-049", chapitre: "marques-de-jour", situation: "Un petit bateau mouillé arbore un pavillon blanc et bleu à queue d'aronde.",
      q: "Je dois :", options: ["M'en tenir à au moins 100 m", "M'en approcher pour proposer mon aide", "Réduire ma vitesse"], bonnes: [0, 2],
      explication: "Le pavillon Alpha signale des plongeurs en immersion. On s'en tient à au moins 100 m et on réduit sa vitesse." },
    { id: "FEUX-050", chapitre: "marques-de-jour",
      q: "Le pavillon Alpha signifie :", options: ["Je suis en détresse", "J'ai un pilote à bord", "J'ai des plongeurs en immersion"], bonnes: [2],
      explication: "Alpha : plongeurs en immersion. Le pavillon H signifie « j'ai un pilote à bord » ; N sur C est un signal de détresse." },
    { id: "FEUX-051", chapitre: "marques-de-jour", situation: "De jour, un navire de pêche montre deux cônes réunis par la pointe et, à côté, un cône pointe en haut.",
      q: "Ce cône pointe en haut indique :", options: ["Que le navire fait route au moteur", "La direction des engins de pêche, qui s'étendent à plus de 150 m"], bonnes: [1],
      explication: "Le cône pointe en haut indique la direction d'engins de pêche s'étendant à plus de 150 m. Le cône pointe en bas est celui du voilier au moteur." },
    { id: "FEUX-052", chapitre: "marques-de-jour", situation: "De jour, vous avez croisé un navire qui montrait deux boules. Vous le retrouvez de nuit.",
      q: "Je m'attends à voir :", options: ["Trois feux rouges", "Deux feux rouges superposés", "Rouge, blanc, rouge"], bonnes: [1],
      explication: "Deux boules de jour, deux feux rouges de nuit : navire non maître de sa manœuvre." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["mer"] = window.PERMIS_COURS["mer"] || { chapitres: [], questions: [] };

  /* ───────────── Thème SECU — Sécurité et matériel d'armement ───────────── */
  P.chapitres.push(
    {
      id: "materiel-armement",
      theme: "SECU",
      titre: "Le matériel d'armement et de sécurité (division 240)",
      duree: 25,
      objectifs: [
        "Savoir ce qu'est un abri et comment se calculent les zones de navigation",
        "Connaître le matériel basique et le matériel côtier",
        "Choisir les équipements individuels de flottabilité adaptés",
        "Entretenir et vérifier le matériel de sécurité avant de partir"
      ],
      sections: [
        {
          titre: "La division 240 et la notion d'abri",
          contenu: `<p>Le matériel de sécurité qu'un bateau de plaisance doit avoir à bord est fixé par la <strong>division 240</strong> du règlement annexé à l'arrêté du 23 novembre 1987 relatif à la sécurité des navires. Il ne dépend pas de la taille du bateau ni du permis du chef de bord, mais de la <strong>distance à laquelle on s'éloigne d'un abri</strong>.</p>
<p>Un <strong>abri</strong> est un endroit de la côte où un bateau et son équipage peuvent se mettre en sécurité, en mouillant, en accostant ou en atterrissant, puis repartir. Un port est un abri ; une crique bien protégée peut en être un selon le vent et la mer. Une plage exposée à la houle n'en est pas un.</p>
<table>
<thead><tr><th>Zone de navigation</th><th>Distance d'un abri</th><th>Armement</th></tr></thead>
<tbody>
<tr><td>Basique</td><td>Jusqu'à 2 milles</td><td>Matériel basique</td></tr>
<tr><td>Côtière</td><td>Jusqu'à 6 milles</td><td>Matériel basique + matériel côtier</td></tr>
<tr><td>Semi-hauturière</td><td>Jusqu'à 60 milles</td><td>Matériel côtier + compléments (radeau, VHF fixe…)</td></tr>
<tr><td>Hauturière</td><td>Au-delà de 60 milles</td><td>Matériel semi-hauturier + compléments</td></tr>
</tbody>
</table>
<p>Le permis option côtière permet de naviguer jusqu'à 6 milles d'un abri : c'est donc le matériel <strong>basique</strong> et le matériel <strong>côtier</strong> qu'il faut connaître parfaitement. La conception du bateau (catégorie de conception A, B, C ou D) fixe en plus les conditions de vent et de mer qu'il peut affronter.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 2 milles d'un abri = basique ; 6 milles = côtier. On compte la distance à l'abri le plus proche, pas au port de départ.</div>`
        },
        {
          titre: "Le matériel basique",
          contenu: `<p>Pour une navigation jusqu'à 2 milles d'un abri, le bateau embarque notamment :</p>
<ul>
<li>un <strong>équipement individuel de flottabilité</strong> (gilet) adapté pour chaque personne à bord ;</li>
<li>un <strong>moyen de repérage lumineux</strong> étanche (lampe), utile pour être vu de nuit et pour signaler sa présence ;</li>
<li>un ou plusieurs <strong>extincteurs</strong> adaptés, selon la motorisation et les équipements du bord (moteur, cuisinière) ;</li>
<li>un dispositif d'<strong>assèchement</strong> manuel (écope ou pompe) si le bateau n'est pas autovideur ;</li>
<li>un <strong>dispositif de remorquage</strong> : un point d'amarrage solide et un bout de longueur et de résistance suffisantes ;</li>
<li>une <strong>ligne de mouillage</strong> appropriée (ancre, chaîne et bout), sauf pour les plus petites embarcations, qui permet de s'arrêter en cas de panne avant de dériver sur la côte ;</li>
<li>le <strong>pavillon national</strong> pour les bateaux francisés qui sortent des eaux territoriales.</li>
</ul>
<p>Le bateau doit aussi être équipé des <strong>feux de navigation</strong> s'il navigue de nuit, et d'un moyen d'émettre des <strong>signaux sonores</strong> (corne de brume), comme l'exige le RIPAM. Un moyen de remonter à bord une personne tombée à l'eau (échelle de bain, bout à boucle) est indispensable en pratique.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> les feux à main, le compas et la carte marine ne font pas partie du matériel basique : ils s'ajoutent au-delà de 2 milles d'un abri, avec le matériel côtier.</div>`
        },
        {
          titre: "Le matériel côtier",
          contenu: `<p>Au-delà de 2 milles et jusqu'à 6 milles d'un abri, on ajoute au matériel basique :</p>
<table>
<thead><tr><th>Matériel côtier</th><th>Utilité</th></tr></thead>
<tbody>
<tr><td><strong>Trois feux rouges automatiques à main</strong></td><td>Signaler une détresse, de jour comme de nuit</td></tr>
<tr><td>Un <strong>dispositif de repérage et d'assistance</strong> pour personne tombée à l'eau</td><td>Bouée (souvent en fer à cheval) à lancer immédiatement, avec si possible un feu</td></tr>
<tr><td>Un <strong>compas magnétique</strong></td><td>Tenir un cap, prendre des relèvements</td></tr>
<tr><td>Les <strong>cartes marines officielles</strong> de la zone (papier ou électroniques)</td><td>Connaître les fonds, les dangers, le balisage</td></tr>
<tr><td>Le <strong>RIPAM</strong> et un <strong>document de synthèse du balisage</strong></td><td>Connaître les règles de barre et identifier les marques rencontrées</td></tr>
</tbody>
</table>
<p>Une <strong>VHF</strong> n'est pas exigée en zone côtière pour tous les bateaux, mais elle est fortement recommandée : c'est le moyen le plus efficace pour alerter le CROSS et les navires proches. Au-delà de 6 milles, une VHF fixe devient obligatoire.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> les feux à main ont une date de péremption. Périmés, ils peuvent ne pas s'allumer, ou mal fonctionner. On ne les jette pas à la poubelle : on les rapporte aux points de collecte des produits pyrotechniques.</div>`
        },
        {
          titre: "Les équipements individuels de flottabilité",
          contenu: `<p>Les gilets sont classés selon leur <strong>flottabilité</strong>, exprimée en newtons (N). La flottabilité minimale dépend de la zone de navigation :</p>
<table>
<thead><tr><th>Distance d'un abri</th><th>Flottabilité minimale</th></tr></thead>
<tbody>
<tr><td>Jusqu'à 2 milles</td><td>50 N</td></tr>
<tr><td>Jusqu'à 6 milles</td><td>100 N</td></tr>
<tr><td>Au-delà de 6 milles</td><td>150 N</td></tr>
</tbody>
</table>
<p>Un gilet de 50 N est une simple aide à la flottabilité : il ne retourne pas une personne inconsciente sur le dos. Les gilets de 100 N et 150 N, à gonflage automatique ou à mousse, sont conçus pour maintenir les voies respiratoires hors de l'eau.</p>
<p>Le gilet doit être <strong>adapté à la taille et au poids</strong> de chacun, y compris des enfants, être en bon état et, pour les gilets gonflables, révisé selon les indications du fabricant (cartouche de gaz, déclencheur). Le port du gilet n'est pas imposé en permanence par la division 240 au plaisancier, mais le chef de bord peut et doit l'imposer dès que les conditions l'exigent ; c'est la principale cause de survie lors des chutes à la mer.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous partez à 5 milles de la côte pour pêcher, sans abri plus proche. Chaque personne à bord doit disposer d'un gilet d'au moins 100 N, et il est sage que tout le monde le porte.</div>`
        },
        {
          titre: "Vérifier avant de partir",
          contenu: `<p>Avant chaque sortie, le chef de bord vérifie :</p>
<ul>
<li>la <strong>météo</strong> et la <strong>marée</strong> sur toute la durée de la sortie ;</li>
<li>le <strong>carburant</strong> : règle du tiers (un tiers pour l'aller, un tiers pour le retour, un tiers de réserve) ;</li>
<li>le <strong>matériel de sécurité</strong> : présent, accessible, en état et non périmé ;</li>
<li>le fonctionnement du <strong>moteur</strong>, de la <strong>batterie</strong>, des <strong>feux</strong> et de la <strong>VHF</strong> ;</li>
<li>l'absence d'eau dans les <strong>fonds</strong> et le bon état des <strong>nables</strong> (bouchons de vidange) ;</li>
<li>que l'équipage sait où se trouve le matériel et comment l'utiliser.</li>
</ul>
<p>Il est aussi prudent de <strong>prévenir un proche à terre</strong> de son programme (zone, heure de retour prévue) et de lui dire quoi faire en cas de retard : appeler le CROSS.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un matériel présent mais inaccessible, périmé ou inconnu de l'équipage ne sert à rien. Le briefing sécurité avant le départ fait partie du rôle du chef de bord.</div>`
        }
      ],
      points_cles: [
        "Le matériel exigé dépend de la distance à un abri : 2 milles (basique), 6 milles (côtier)",
        "Un abri permet de mettre bateau et équipage en sécurité, puis de repartir",
        "Basique : gilets, repérage lumineux, extincteur adapté, assèchement, remorquage, ligne de mouillage",
        "Côtier : en plus, 3 feux rouges à main, dispositif de repérage pour personne à la mer, compas, carte marine, RIPAM et document de balisage",
        "Gilets : 50 N jusqu'à 2 milles, 100 N jusqu'à 6 milles, 150 N au-delà",
        "Les feux à main périmés se rapportent aux points de collecte",
        "Règle du tiers pour le carburant et information d'un proche avant le départ"
      ]
    },
    {
      id: "alerte-secours",
      theme: "SECU",
      titre: "Donner l'alerte : VHF, CROSS et signaux de détresse",
      duree: 25,
      objectifs: [
        "Connaître le rôle des CROSS et les moyens de les joindre",
        "Utiliser la VHF et le canal 16",
        "Distinguer les messages MAYDAY, PAN PAN et SÉCURITÉ",
        "Rédiger un message de détresse complet",
        "Reconnaître les signaux de détresse visuels et sonores"
      ],
      sections: [
        {
          titre: "Les CROSS et les numéros d'urgence",
          contenu: `<p>Les <strong>CROSS</strong> (centres régionaux opérationnels de surveillance et de sauvetage) coordonnent le <strong>sauvetage en mer</strong>, surveillent la navigation et diffusent les informations de sécurité, dont les bulletins météo. En métropole, ils sont implantés à Gris-Nez, Jobourg, Corsen, Étel et La Garde (avec une antenne en Corse). Ils engagent les moyens les plus adaptés : canots de la SNSM, hélicoptères, navires de l'État, navires à proximité.</p>
<p>Pour les joindre :</p>
<ul>
<li>par <strong>VHF</strong>, sur le <strong>canal 16</strong>, ou par un appel <strong>ASN</strong> (appel sélectif numérique) sur une VHF qui en est équipée ;</li>
<li>par <strong>téléphone</strong>, en composant le <strong>196</strong> (numéro d'urgence en mer, gratuit) ;</li>
<li>le <strong>112</strong> fonctionne aussi, mais l'appel passe par un centre à terre qui le transmet.</li>
</ul>
<p>La VHF a un avantage décisif sur le téléphone : un appel sur le canal 16 est entendu à la fois par le CROSS et par <strong>tous les navires proches</strong>, qui sont souvent les premiers à pouvoir aider. Le téléphone portable, lui, capte mal en mer et n'atteint qu'un seul correspondant.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en mer, l'alerte se donne d'abord à la VHF, canal 16 ; par téléphone, on compose le 196.</div>`
        },
        {
          titre: "La VHF : canaux et règles d'usage",
          contenu: `<p>La <strong>VHF marine</strong> est une radio à courte portée (quelques milles avec une VHF portable, une vingtaine de milles avec une VHF fixe et une antenne en tête de mât). Les principaux canaux :</p>
<table>
<thead><tr><th>Canal</th><th>Usage</th></tr></thead>
<tbody>
<tr><td>16</td><td>Veille permanente, appels de détresse, d'urgence et de sécurité, premier contact</td></tr>
<tr><td>70</td><td>Réservé à l'ASN (appels numériques), jamais utilisé en phonie</td></tr>
<tr><td>Canaux de travail</td><td>Conversations entre navires ou avec le port, après un premier contact sur le 16 ; bulletins météo annoncés sur le 16 puis diffusés sur un canal dédié</td></tr>
</tbody>
</table>
<p>Règles d'usage : on <strong>écoute avant de parler</strong>, on reste bref, on dégage le canal 16 dès que le contact est établi, on ne l'encombre jamais de bavardages. En cas de détresse, tout trafic non urgent cesse sur le canal.</p>
<p>Une VHF avec <strong>ASN</strong> dispose d'un bouton de détresse (souvent rouge, protégé par un clapet) : maintenu quelques secondes, il envoie automatiquement un appel de détresse avec l'identifiant du bateau (MMSI) et, si la VHF est reliée à un GPS, sa position.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un appel de détresse injustifié mobilise des moyens de sauvetage pour rien et est sanctionné. En cas de déclenchement par erreur, on annule immédiatement en le signalant sur le canal 16.</div>`
        },
        {
          titre: "Les trois niveaux de messages",
          contenu: `<table>
<thead><tr><th>Message</th><th>Situation</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td><strong>MAYDAY</strong> (détresse)</td><td>Danger <strong>grave et imminent</strong> menaçant le navire ou des personnes, assistance immédiate requise</td><td>Voie d'eau qu'on ne maîtrise pas, incendie, homme à la mer qu'on ne voit plus, naufrage</td></tr>
<tr><td><strong>PAN PAN</strong> (urgence)</td><td>Message urgent concernant la <strong>sécurité</strong> d'un navire ou d'une personne, sans danger immédiat</td><td>Panne de moteur près de la côte avec vent qui forcit, blessé à bord à évacuer, démâtage sans danger immédiat</td></tr>
<tr><td><strong>SÉCURITÉ</strong></td><td>Avis concernant la <strong>sécurité de la navigation</strong> ou un avertissement météo</td><td>Conteneur à la dérive, bouée déplacée, avis de coup de vent</td></tr>
</tbody>
</table>
<p>Chaque mot-clé est prononcé <strong>trois fois</strong> au début du message. Les messages SÉCURITÉ sont surtout émis par les CROSS, mais un plaisancier peut en émettre un pour signaler un danger qu'il a découvert.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une panne de moteur n'est pas automatiquement une détresse. Si vous êtes au large, par beau temps, sans danger immédiat, c'est un PAN PAN. Elle devient MAYDAY si vous dérivez vers des roches.</div>`
        },
        {
          titre: "Le message de détresse MAYDAY",
          contenu: `<p>Sur le canal 16, puissance maximale, on énonce lentement et distinctement :</p>
<ol>
<li><strong>MAYDAY, MAYDAY, MAYDAY</strong></li>
<li>Ici <strong>nom du bateau</strong>, trois fois (et indicatif ou MMSI s'il existe)</li>
<li><strong>MAYDAY</strong> nom du bateau</li>
<li><strong>Position</strong> : latitude et longitude, ou relèvement et distance d'un point connu</li>
<li><strong>Nature de la détresse</strong> : voie d'eau, incendie, homme à la mer…</li>
<li><strong>Assistance demandée</strong></li>
<li><strong>Nombre de personnes</strong> à bord, blessés éventuels</li>
<li>Toute <strong>information utile</strong> : type et couleur du bateau, intention (évacuer, rester à bord), moyens de sauvetage</li>
<li><strong>Terminé</strong> (« à vous »)</li>
</ol>
<p>Si personne ne répond, on <strong>répète</strong> le message à intervalles réguliers. Un navire qui entend un MAYDAY sans réponse du CROSS l'accuse réception et le relaie si nécessaire (MAYDAY RELAY).</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> « MAYDAY, MAYDAY, MAYDAY. Ici Goéland, Goéland, Goéland. MAYDAY Goéland. Position : 1 mille au sud de la pointe du Grouin. Voie d'eau importante, nous coulons. Demandons assistance immédiate. Trois personnes à bord, pas de blessé. Bateau à moteur blanc de 6 mètres. Nous mettons les gilets. Terminé. »</div>`
        },
        {
          titre: "Les signaux de détresse visuels et sonores",
          contenu: `<p>Sans VHF, ou en complément, le RIPAM (annexe IV) prévoit des signaux de détresse reconnus partout :</p>
<ul>
<li><strong>feux rouges à main</strong> ou fusées à parachute rouges ;</li>
<li><strong>signal fumigène orange</strong> (visible de jour) ;</li>
<li><strong>mouvements lents et répétés des bras étendus</strong> de chaque côté, en les levant et en les abaissant ;</li>
<li>le signal <strong>SOS</strong> (· · · — — — · · ·) par tout moyen, lumineux ou sonore ;</li>
<li>un <strong>son continu</strong> produit par un appareil de signalisation sonore ;</li>
<li>les pavillons <strong>N au-dessus de C</strong> ;</li>
<li>des <strong>flammes</strong> sur le navire (un seau d'huile enflammé, par exemple) ;</li>
<li>le déclenchement d'une <strong>balise de détresse</strong> (406 MHz) ou d'un appel ASN.</li>
</ul>
<p>Un feu à main se tient <strong>sous le vent</strong>, bras tendu, à l'extérieur du bateau, pour ne pas se brûler et ne pas mettre le feu au bord. On l'utilise quand on voit ou entend un navire ou un aéronef susceptible de le repérer, pas au hasard.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> saluer quelqu'un en agitant un bras n'est pas un signal de détresse ; ce sont les <strong>deux bras</strong>, étendus, levés et abaissés lentement, qui en constituent un.</div>`
        }
      ],
      points_cles: [
        "Les CROSS coordonnent le sauvetage en mer ; on les joint par VHF canal 16 ou par le 196",
        "Le canal 16 sert à la veille et aux appels de détresse, d'urgence et de sécurité ; le 70 est réservé à l'ASN",
        "MAYDAY : danger grave et imminent ; PAN PAN : urgence sans danger immédiat ; SÉCURITÉ : avis de navigation ou météo",
        "Chaque mot-clé se prononce trois fois",
        "Message de détresse : identité, position, nature, assistance demandée, nombre de personnes",
        "Signaux de détresse : feux rouges à main, fumigène orange, bras levés et abaissés, SOS, son continu, N sur C",
        "Le feu à main se tient sous le vent, bras tendu à l'extérieur du bateau"
      ]
    },
    {
      id: "incidents-a-bord",
      theme: "SECU",
      titre: "Homme à la mer, incendie, voie d'eau et avaries",
      duree: 25,
      objectifs: [
        "Appliquer la procédure d'homme à la mer",
        "Réagir à un début d'incendie à bord",
        "Faire face à une voie d'eau",
        "Adopter les bons réflexes en cas de panne, d'échouement ou de chavirage"
      ],
      sections: [
        {
          titre: "Homme à la mer : les premiers réflexes",
          contenu: `<p>Une chute à la mer est l'accident le plus redouté : en eau froide, une personne perd rapidement ses moyens, et une tête dans les vagues se perd de vue en quelques secondes. Dès la chute :</p>
<ol>
<li><strong>Crier</strong> « Un homme à la mer ! » pour alerter tout l'équipage.</li>
<li><strong>Lancer</strong> immédiatement la bouée (le dispositif de repérage et d'assistance) et tout objet flottant.</li>
<li><strong>Désigner</strong> un équipier qui ne quitte <strong>jamais des yeux</strong> la personne et la montre du bras.</li>
<li><strong>Marquer la position</strong> : touche MOB du GPS, ou noter l'heure et le cap.</li>
<li><strong>Débrayer</strong> immédiatement le moteur si la personne est près de l'arrière : l'hélice est mortelle.</li>
</ol>
<p>Si la personne est perdue de vue, ou si l'on ne peut pas la récupérer rapidement, on lance un <strong>MAYDAY</strong> sans attendre.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> crier, lancer la bouée, garder la personne en vue, marquer la position, alerter si nécessaire.</div>`
        },
        {
          titre: "Homme à la mer : revenir et récupérer",
          contenu: `<p>Avec un bateau à moteur, on revient vers la personne <strong>à faible vitesse</strong>, en décrivant une boucle qui permet de se présenter à elle de préférence <strong>face au vent</strong> (ou face au courant s'il domine), ce qui permet de contrôler la vitesse d'approche. On s'arrête à son côté, <strong>moteur débrayé</strong> dès qu'elle est proche, et on ne s'approche jamais hélice embrayée.</p>
<p>La récupération à bord est souvent la phase la plus difficile : une personne trempée, habillée et fatiguée est très lourde. On utilise l'échelle de bain (moteur arrêté), un bout avec une boucle, une sangle ou un palan. Une fois à bord, on la sèche, on la réchauffe et on surveille l'<strong>hypothermie</strong> ; si elle a bu la tasse, est inconsciente ou très choquée, on demande un avis médical au CROSS.</p>
<p>La meilleure prévention : porter le gilet, s'attacher par gros temps ou de nuit, ne pas uriner par-dessus bord, garder une main pour soi et une pour le bateau.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> ne sautez pas à l'eau pour aller chercher la personne, sauf si vous êtes équipé et attaché au bateau. On risquerait d'avoir deux victimes au lieu d'une.</div>`
        },
        {
          titre: "L'incendie",
          contenu: `<p>Un feu a besoin de trois éléments : un <strong>combustible</strong>, un <strong>comburant</strong> (l'oxygène de l'air) et une source de <strong>chaleur</strong>. Supprimer l'un des trois l'éteint. À bord, les causes les plus fréquentes sont le <strong>carburant</strong> (fuite, plein mal fait), le <strong>gaz</strong> de cuisine et les <strong>courts-circuits</strong>.</p>
<ul>
<li><strong>Couper l'arrivée de carburant</strong> ou le <strong>robinet de gaz</strong>, et couper le moteur et le circuit électrique concerné.</li>
<li>Utiliser l'<strong>extincteur</strong> en visant la <strong>base des flammes</strong>, par courtes pressions.</li>
<li>Placer le bateau de façon que le <strong>foyer soit sous le vent</strong> : feu à l'arrière, on se met face au vent ; feu à l'avant, on se met vent arrière. Les flammes et la fumée sont ainsi chassées loin de l'équipage et du reste du bateau.</li>
<li>Ne pas projeter d'<strong>eau</strong> sur un feu d'hydrocarbure ni sur un feu électrique ; une couverture anti-feu étouffe efficacement un feu de cuisine.</li>
<li>Faire mettre les gilets, préparer l'évacuation et <strong>alerter</strong> (MAYDAY) si le feu n'est pas maîtrisé immédiatement.</li>
</ul>
<p>Prévention : faire le plein moteur arrêté, sans fumer, sans passagers à bord si possible, puis <strong>ventiler</strong> le compartiment moteur avant de démarrer un moteur à essence in-bord ; fermer le robinet de gaz après usage. Le butane est plus lourd que l'air : une fuite s'accumule dans les fonds et peut exploser.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> on ne vise pas les flammes, mais leur base. Et l'on oriente le bateau pour que le feu soit sous le vent, jamais au vent de l'équipage.</div>`
        },
        {
          titre: "La voie d'eau",
          contenu: `<p>Une voie d'eau peut venir d'un choc contre un objet flottant ou une roche, mais aussi d'un <strong>passe-coque</strong> défectueux, d'une durite rompue, d'un <strong>nable</strong> oublié ou du presse-étoupe de l'arbre d'hélice.</p>
<ol>
<li><strong>Localiser</strong> l'entrée d'eau : goûter l'eau (salée ou douce, une fuite d'eau douce vient du réservoir ou du circuit de refroidissement).</li>
<li><strong>Colmater</strong> : fermer la vanne du passe-coque, enfoncer une pinoche (cône en bois), bourrer avec des chiffons, un coussin, un sac.</li>
<li><strong>Évacuer</strong> l'eau : pompe électrique, pompe manuelle, seau, écope.</li>
<li><strong>Alerter</strong> : PAN PAN si la situation est sous contrôle, MAYDAY si l'eau monte malgré tout.</li>
<li>Faire mettre les <strong>gilets</strong> et rejoindre l'abri le plus proche ; si le bateau coule, ne l'abandonner qu'au dernier moment.</li>
</ol>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> au mouillage, vous constatez de l'eau dans les fonds. Elle est salée et arrive près de l'arbre d'hélice : le presse-étoupe fuit. Vous le resserrez, pompez, puis regagnez le port à vitesse réduite en surveillant le niveau.</div>`
        },
        {
          titre: "Panne, échouement, chavirage",
          contenu: `<ul>
<li><strong>Panne de moteur</strong> : si le bateau dérive vers la côte ou un danger, <strong>mouiller</strong> sans attendre pour arrêter la dérive, puis chercher la cause (carburant, filtre, hélice prise dans un bout). Demander une assistance si nécessaire : un plaisancier peut accepter un remorquage, en se faisant préciser s'il est gracieux ou payant.</li>
<li><strong>Échouement</strong> : stopper le moteur pour ne pas aspirer de sable ni abîmer l'hélice, vérifier l'absence de voie d'eau, attendre la marée montante si elle arrive, ou alléger le bateau et se faire déhaler. Par marée descendante, l'échouement durera plusieurs heures.</li>
<li><strong>Chavirage</strong> : <strong>rester avec le bateau</strong>, qui flotte souvent et se voit bien mieux qu'une tête dans l'eau ; s'y agripper, compter l'équipage, utiliser les moyens de signalisation.</li>
</ul>
<p>Dans tous les cas, garder son calme, compter et rassurer l'équipage, faire porter les gilets et anticiper : une situation qui se dégrade lentement doit être signalée tôt, tant qu'il fait jour et que les secours peuvent intervenir facilement.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> panne près de la côte : je mouille. Chavirage : je reste avec le bateau. Danger qui grandit : j'alerte tôt.</div>`
        }
      ],
      points_cles: [
        "Homme à la mer : crier, lancer la bouée, désigner un équipier qui garde la personne en vue, marquer la position",
        "On revient à faible vitesse, de préférence face au vent, moteur débrayé près de la personne",
        "Incendie : couper carburant ou gaz, extincteur à la base des flammes, foyer placé sous le vent",
        "Pas d'eau sur un feu d'hydrocarbure ou électrique ; ventiler le compartiment moteur avant de démarrer",
        "Voie d'eau : localiser, colmater, pomper, alerter",
        "Panne près d'une côte dangereuse : mouiller immédiatement",
        "Chavirage : rester avec le bateau"
      ]
    }
  );

  P.questions.push(
    { id: "SECU-001", chapitre: "materiel-armement",
      q: "Le matériel de sécurité obligatoire dépend principalement :", options: ["De la longueur du bateau", "Du permis du chef de bord", "De la distance à laquelle je m'éloigne d'un abri"], bonnes: [2],
      explication: "La division 240 fixe l'armement selon la distance d'un abri : basique jusqu'à 2 milles, côtier jusqu'à 6 milles, puis semi-hauturier et hauturier." },
    { id: "SECU-002", chapitre: "materiel-armement",
      q: "Le matériel basique permet de naviguer jusqu'à :", options: ["2 milles d'un abri", "300 mètres du rivage", "6 milles d'un abri"], bonnes: [0],
      explication: "Le matériel basique couvre la navigation jusqu'à 2 milles d'un abri ; au-delà et jusqu'à 6 milles, il faut le matériel côtier en plus." },
    { id: "SECU-003", chapitre: "materiel-armement", situation: "Vous prévoyez une sortie de pêche à 4 milles de l'abri le plus proche.",
      q: "Je dois embarquer :", options: ["Le matériel basique", "Le matériel côtier", "Le matériel semi-hauturier"], bonnes: [0, 1],
      explication: "Entre 2 et 6 milles d'un abri, l'armement côtier s'ajoute à l'armement basique. Le semi-hauturier n'est exigé qu'au-delà de 6 milles." },
    { id: "SECU-004", chapitre: "materiel-armement",
      q: "Un abri est :", options: ["N'importe quelle plage", "Uniquement un port de commerce", "Un lieu où le bateau et son équipage peuvent se mettre en sécurité, puis repartir"], bonnes: [2],
      explication: "Un abri permet de mouiller, d'accoster ou d'atterrir en sécurité, puis de repartir. Un port de plaisance ou une crique protégée peut en être un ; une plage exposée, non." },
    { id: "SECU-005", chapitre: "materiel-armement",
      q: "Le matériel côtier comprend notamment :", options: ["Un compas magnétique", "Les cartes marines officielles de la zone", "Un radeau de survie", "Trois feux rouges automatiques à main"], bonnes: [0, 1, 3],
      explication: "Le matériel côtier ajoute trois feux rouges à main, un dispositif de repérage pour personne à la mer, un compas, les cartes marines, le RIPAM et un document de balisage. Le radeau n'est exigé qu'au-delà de 6 milles." },
    { id: "SECU-006", chapitre: "materiel-armement", situation: "Vous naviguez à 1 mille d'un port, avec le matériel basique.",
      q: "Les feux rouges à main sont obligatoires à bord :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Les trois feux rouges à main font partie du matériel côtier, exigé au-delà de 2 milles d'un abri. Ils restent utiles à bord en toutes circonstances." },
    { id: "SECU-007", chapitre: "materiel-armement",
      q: "Jusqu'à 6 milles d'un abri, chaque personne doit disposer d'un gilet d'une flottabilité d'au moins :", options: ["100 N", "150 N", "50 N"], bonnes: [0],
      explication: "50 N jusqu'à 2 milles d'un abri, 100 N jusqu'à 6 milles, 150 N au-delà." },
    { id: "SECU-008", chapitre: "materiel-armement", situation: "Vous partez à 1,5 mille de la plage pour une baignade au large, par beau temps.",
      q: "La flottabilité minimale des gilets est :", options: ["50 N", "100 N", "150 N"], bonnes: [0],
      explication: "Jusqu'à 2 milles d'un abri, un équipement de 50 N au minimum est exigé. Un gilet plus flottant reste préférable pour les enfants et les personnes peu à l'aise." },
    { id: "SECU-009", chapitre: "materiel-armement",
      q: "Les gilets à bord doivent être :", options: ["Rangés au fond d'un coffre fermé à clé", "En bon état et révisés pour les gonflables", "En nombre égal au nombre de personnes à bord", "Adaptés à la taille et au poids de chaque personne"], bonnes: [1, 2, 3],
      explication: "Un gilet par personne, adapté à sa morphologie (y compris les enfants), en bon état et accessible. Rangé sous clé, il ne servirait à rien en urgence." },
    { id: "SECU-010", chapitre: "materiel-armement", situation: "En préparant votre sortie, vous constatez que vos feux à main sont périmés depuis un an.",
      q: "Je dois :", options: ["Rapporter les anciens à un point de collecte", "Les remplacer", "Les tirer pour m'en débarrasser", "Les jeter à la poubelle ménagère"], bonnes: [0, 1],
      explication: "Des feux périmés peuvent ne pas fonctionner : on les remplace et on rapporte les anciens aux points de collecte de produits pyrotechniques. Les tirer sans détresse est un faux signal." },
    { id: "SECU-011", chapitre: "materiel-armement",
      q: "Le matériel basique comprend notamment :", options: ["Un dispositif de remorquage", "Un moyen de repérage lumineux", "Un radeau de survie", "Un dispositif d'assèchement manuel si le bateau n'est pas autovideur"], bonnes: [0, 1, 3],
      explication: "Le matériel basique comprend gilets, moyen de repérage lumineux, extincteur adapté, assèchement, remorquage et ligne de mouillage. Le radeau est exigé bien plus loin." },
    { id: "SECU-012", chapitre: "materiel-armement",
      q: "Pour le carburant, la règle prudente consiste à prévoir :", options: ["Un tiers pour l'aller, un tiers pour le retour, un tiers de réserve", "Juste ce qu'il faut pour l'aller et le retour"], bonnes: [0],
      explication: "La règle du tiers garde une réserve pour un vent contraire, un détour ou une assistance à apporter." },
    { id: "SECU-013", chapitre: "materiel-armement",
      q: "Avant de partir, il est recommandé :", options: ["De vérifier la météo", "De montrer à l'équipage où est le matériel de sécurité", "De laisser la VHF éteinte pour économiser la batterie", "De prévenir un proche de son programme et de son heure de retour"], bonnes: [0, 1, 3],
      explication: "Météo, information d'un proche et briefing sécurité font partie de la préparation. La VHF se garde allumée en veille sur le canal 16." },
    { id: "SECU-014", chapitre: "alerte-secours",
      q: "Le numéro de téléphone d'urgence en mer est le :", options: ["15", "17", "196"], bonnes: [2],
      explication: "Le 196 met en relation directe avec le CROSS. Le 112 fonctionne aussi, mais passe par un centre à terre." },
    { id: "SECU-015", chapitre: "alerte-secours",
      q: "Le canal VHF de veille et de détresse est le :", options: ["16", "9", "70"], bonnes: [0],
      explication: "Le canal 16 sert à la veille et aux appels de détresse, d'urgence et de sécurité. Le 70 est réservé à l'ASN, sans phonie." },
    { id: "SECU-016", chapitre: "alerte-secours",
      q: "Le canal 70 de la VHF est :", options: ["Le canal des bulletins météo", "Réservé aux appels numériques ASN", "Le canal de conversation entre plaisanciers"], bonnes: [1],
      explication: "Le canal 70 est exclusivement réservé à l'appel sélectif numérique ; on n'y parle jamais." },
    { id: "SECU-017", chapitre: "alerte-secours",
      q: "Les CROSS :", options: ["Coordonnent le sauvetage en mer", "Surveillent la navigation", "Diffusent des bulletins météo et des avis de sécurité", "Délivrent les permis bateau"], bonnes: [0, 1, 2],
      explication: "Les CROSS coordonnent le sauvetage, surveillent la navigation et diffusent les informations de sécurité. Les permis sont délivrés par l'administration des affaires maritimes." },
    { id: "SECU-018", chapitre: "alerte-secours",
      q: "Pour donner l'alerte en mer, la VHF est préférable au téléphone portable car :", options: ["Elle est entendue par le CROSS et par tous les navires proches", "Elle est payante", "Le téléphone capte souvent mal en mer"], bonnes: [0, 2],
      explication: "Un appel sur le canal 16 est entendu par tous, dont les navires proches qui peuvent intervenir les premiers ; le réseau mobile est aléatoire en mer." },
    { id: "SECU-019", chapitre: "alerte-secours", situation: "Votre bateau a une importante voie d'eau que vous ne parvenez pas à maîtriser. Il commence à couler.",
      q: "Le message à émettre commence par :", options: ["PAN PAN", "MAYDAY", "SÉCURITÉ"], bonnes: [1],
      explication: "Danger grave et imminent menaçant le bateau et les personnes : message de détresse MAYDAY." },
    { id: "SECU-020", chapitre: "alerte-secours", situation: "Au large, par beau temps, votre moteur tombe en panne. Vous ne dérivez vers aucun danger.",
      q: "Le message approprié commence par :", options: ["MAYDAY", "PAN PAN", "SÉCURITÉ"], bonnes: [1],
      explication: "Il y a urgence sans danger grave et imminent : PAN PAN. La situation deviendrait MAYDAY si le bateau dérivait vers des roches." },
    { id: "SECU-021", chapitre: "alerte-secours", situation: "Vous apercevez un conteneur flottant à la dérive, dangereux pour la navigation.",
      q: "Je peux émettre un message :", options: ["MAYDAY", "PAN PAN", "SÉCURITÉ"], bonnes: [2],
      explication: "Un danger pour la navigation, sans détresse ni urgence pour votre bateau, se signale par un message SÉCURITÉ." },
    { id: "SECU-022", chapitre: "alerte-secours",
      q: "Dans un message de détresse, il faut indiquer :", options: ["Le nombre de personnes à bord", "La nature de la détresse", "La position", "Le nom du bateau"], bonnes: [0, 1, 2, 3],
      explication: "Le message MAYDAY comprend l'identité, la position, la nature de la détresse, l'assistance demandée, le nombre de personnes et toute information utile." },
    { id: "SECU-023", chapitre: "alerte-secours",
      q: "Les mots MAYDAY, PAN PAN ou SÉCURITÉ se prononcent en début de message :", options: ["Une fois", "Cinq fois", "Trois fois"], bonnes: [2],
      explication: "Le mot-clé est répété trois fois pour être bien compris malgré les parasites." },
    { id: "SECU-024", chapitre: "alerte-secours",
      q: "Sont des signaux de détresse :", options: ["Un pavillon Alpha", "Un fumigène orange", "Un feu rouge à main", "Des mouvements lents et répétés des bras étendus, levés et abaissés"], bonnes: [1, 2, 3],
      explication: "Feux rouges, fumigène orange et mouvements des bras étendus sont des signaux de détresse. Le pavillon Alpha signale des plongeurs." },
    { id: "SECU-025", chapitre: "alerte-secours",
      q: "Un feu rouge à main se tient :", options: ["Au vent, au-dessus du cockpit", "Bras tendu, à l'extérieur du bateau", "Sous le vent"], bonnes: [1, 2],
      explication: "On le tient sous le vent et bras tendu à l'extérieur pour éviter les brûlures et ne pas mettre le feu au bateau." },
    { id: "SECU-026", chapitre: "alerte-secours", situation: "Vous avez appuyé par erreur sur le bouton de détresse ASN de votre VHF.",
      q: "Je dois :", options: ["Ne rien dire en espérant que personne n'a reçu l'appel", "Annuler immédiatement l'alerte en le signalant sur le canal 16"], bonnes: [1],
      explication: "Une fausse alerte mobilise des moyens de sauvetage. On l'annule aussitôt à la voix sur le canal 16." },
    { id: "SECU-027", chapitre: "alerte-secours", situation: "Vous entendez sur le canal 16 un MAYDAY auquel personne ne répond. Vous êtes proche de la position donnée.",
      q: "Je dois :", options: ["Accuser réception et me porter au secours si je le peux", "Changer de canal pour ne pas encombrer", "Relayer le message au CROSS si nécessaire"], bonnes: [0, 2],
      explication: "Tout navire doit porter assistance à une personne en détresse en mer dans la mesure de ses moyens, et relayer l'appel si le CROSS ne l'a pas reçu." },
    { id: "SECU-028", chapitre: "incidents-a-bord", situation: "Un équipier tombe à l'eau alors que vous naviguez au moteur.",
      q: "Mes premiers réflexes sont :", options: ["Lancer la bouée", "Crier « un homme à la mer »", "Accélérer pour faire demi-tour au plus vite", "Désigner quelqu'un pour garder la personne en vue"], bonnes: [0, 1, 3],
      explication: "Crier, lancer la bouée, garder la personne en vue et marquer la position. On revient à faible vitesse, en débrayant près de la personne." },
    { id: "SECU-029", chapitre: "incidents-a-bord", situation: "Vous revenez au moteur vers un équipier tombé à l'eau. Vous êtes tout près de lui.",
      q: "Je dois :", options: ["Débrayer le moteur", "Arriver à faible vitesse", "Le récupérer par l'arrière moteur en marche", "M'approcher hélice embrayée pour aller plus vite"], bonnes: [0, 1],
      explication: "L'hélice est mortelle : on arrive lentement, on débraye dès qu'on est proche, et l'on récupère la personne moteur débrayé, voire arrêté pour utiliser l'échelle arrière." },
    { id: "SECU-030", chapitre: "incidents-a-bord", situation: "L'équipier tombé à l'eau a disparu de votre vue dans les vagues.",
      q: "Je dois :", options: ["Continuer à chercher seul sans prévenir personne", "Marquer la position au GPS", "Lancer immédiatement un MAYDAY"], bonnes: [1, 2],
      explication: "Une personne perdue de vue est en danger grave et imminent : MAYDAY sans attendre, en donnant la position de la chute." },
    { id: "SECU-031", chapitre: "incidents-a-bord", situation: "Un feu se déclare dans le compartiment moteur, à l'arrière du bateau.",
      q: "Je dois :", options: ["Mettre le bateau face au vent", "Couper l'arrivée de carburant et le moteur", "Viser la base des flammes avec l'extincteur", "Jeter des seaux d'eau sur le carburant en feu"], bonnes: [0, 1, 2],
      explication: "On supprime le combustible, on place le foyer sous le vent (feu à l'arrière : face au vent) et on vise la base des flammes. L'eau étale un feu d'hydrocarbure." },
    { id: "SECU-032", chapitre: "incidents-a-bord",
      q: "Avec un extincteur, on vise :", options: ["Le sommet des flammes", "La fumée", "La base des flammes"], bonnes: [2],
      explication: "L'agent extincteur doit atteindre le combustible qui brûle, à la base des flammes." },
    { id: "SECU-033", chapitre: "incidents-a-bord", situation: "Votre bateau est équipé d'un moteur in-bord à essence.",
      q: "Avant de démarrer, je dois :", options: ["Vérifier l'absence d'odeur d'essence", "Ventiler le compartiment moteur", "Démarrer immédiatement pour chasser les vapeurs"], bonnes: [0, 1],
      explication: "Les vapeurs d'essence accumulées peuvent exploser au démarrage : on ventile et on vérifie l'absence d'odeur avant de lancer le moteur." },
    { id: "SECU-034", chapitre: "incidents-a-bord",
      q: "Le gaz butane qui fuit :", options: ["S'échappe naturellement vers le haut", "S'accumule dans les fonds du bateau"], bonnes: [1],
      explication: "Le butane est plus lourd que l'air : il s'accumule dans les fonds et peut exploser à la moindre étincelle. On ferme le robinet après usage." },
    { id: "SECU-035", chapitre: "incidents-a-bord", situation: "Vous découvrez de l'eau qui monte dans les fonds de votre bateau.",
      q: "Dans l'ordre, je :", options: ["Attends de voir si cela s'arrête", "Saute à l'eau immédiatement", "Cherche d'où vient l'eau, puis colmate et pompe"], bonnes: [2],
      explication: "Voie d'eau : localiser, colmater (vanne, pinoche, chiffons), pomper, puis alerter si nécessaire et faire porter les gilets." },
    { id: "SECU-036", chapitre: "incidents-a-bord", situation: "Votre moteur tombe en panne à 300 m d'une côte rocheuse. Le vent vous pousse vers les rochers.",
      q: "Je dois :", options: ["Attendre qu'un bateau passe", "Mouiller l'ancre pour arrêter la dérive", "Chercher la panne en laissant dériver", "Demander assistance si je ne peux pas réparer rapidement"], bonnes: [1, 3],
      explication: "On arrête d'abord la dérive en mouillant, puis on cherche la cause de la panne et on demande assistance si besoin, sans attendre que la situation empire." },
    { id: "SECU-037", chapitre: "incidents-a-bord", situation: "Votre petit bateau a chaviré à 1 mille de la côte. Il flotte à l'envers.",
      q: "Je dois :", options: ["Compter les équipiers", "Nager vers la côte", "Rester avec le bateau"], bonnes: [0, 2],
      explication: "Un bateau chaviré flotte souvent et se repère bien mieux qu'une tête dans l'eau. On reste agrippé à lui et on vérifie que personne ne manque." },
    { id: "SECU-038", chapitre: "incidents-a-bord", situation: "Votre bateau à moteur s'échoue sur un banc de sable.",
      q: "Je dois :", options: ["Stopper le moteur", "Mettre plein gaz en marche arrière pour me dégager", "Vérifier qu'il n'y a pas de voie d'eau"], bonnes: [0, 2],
      explication: "Plein gaz, l'hélice et le circuit de refroidissement aspirent du sable et s'abîment. On stoppe, on contrôle la coque, puis on attend la marée montante ou on se fait déhaler." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["mer"] = window.PERMIS_COURS["mer"] || { chapitres: [], questions: [] };

  /* ───────────── Thème METEO — Météorologie et marée ───────────── */
  P.chapitres.push(
    {
      id: "meteo-marine",
      theme: "METEO",
      titre: "La météo marine : vent, échelle de Beaufort et bulletins",
      duree: 25,
      objectifs: [
        "Lire une direction et une force de vent",
        "Connaître l'échelle de Beaufort et les seuils d'avis",
        "Savoir où et quand obtenir les bulletins météo marine",
        "Repérer les signes d'une dégradation du temps"
      ],
      sections: [
        {
          titre: "Le vent : direction et force",
          contenu: `<p>En mer, la météo, c'est d'abord le <strong>vent</strong>, qui fait la mer. On le décrit par :</p>
<ul>
<li>sa <strong>direction</strong> : celle <strong>d'où il vient</strong>. Un vent de nord-ouest vient du nord-ouest et souffle vers le sud-est ;</li>
<li>sa <strong>force</strong> : exprimée en <strong>nœuds</strong> (milles par heure) ou en <strong>force Beaufort</strong> ;</li>
<li>ses <strong>rafales</strong> : pointes de vent brèves, souvent bien plus fortes que le vent moyen.</li>
</ul>
<p>Le vent se lève sous l'effet des différences de <strong>pression</strong> atmosphérique. Il souffle des hautes pressions (<strong>anticyclones</strong>, généralement beau temps) vers les basses pressions (<strong>dépressions</strong>, généralement mauvais temps). Dans l'hémisphère nord, il tourne autour d'une dépression dans le <strong>sens inverse des aiguilles d'une montre</strong>. Sur une carte météo, plus les <strong>isobares</strong> (lignes d'égale pression) sont serrées, plus le vent est fort.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un vent « de sud » vient du sud : il pousse le bateau vers le nord. Un courant, lui, se désigne par la direction <strong>vers laquelle</strong> il porte.</div>`
        },
        {
          titre: "L'échelle de Beaufort",
          contenu: `<table>
<thead><tr><th>Force</th><th>Appellation</th><th>Vitesse (nœuds)</th><th>État de la mer</th></tr></thead>
<tbody>
<tr><td>0</td><td>Calme</td><td>Moins de 1</td><td>Mer d'huile</td></tr>
<tr><td>1</td><td>Très légère brise</td><td>1 à 3</td><td>Rides</td></tr>
<tr><td>2</td><td>Légère brise</td><td>4 à 6</td><td>Vaguelettes</td></tr>
<tr><td>3</td><td>Petite brise</td><td>7 à 10</td><td>Quelques moutons épars</td></tr>
<tr><td>4</td><td>Jolie brise</td><td>11 à 16</td><td>Moutons nombreux</td></tr>
<tr><td>5</td><td>Bonne brise</td><td>17 à 21</td><td>Vagues modérées, beaucoup de moutons</td></tr>
<tr><td>6</td><td>Vent frais</td><td>22 à 27</td><td>Lames, crêtes d'écume blanche</td></tr>
<tr><td>7</td><td>Grand frais</td><td>28 à 33</td><td>L'écume est soufflée en traînées</td></tr>
<tr><td>8</td><td>Coup de vent</td><td>34 à 40</td><td>Lames hautes, tourbillons d'écume</td></tr>
<tr><td>9</td><td>Fort coup de vent</td><td>41 à 47</td><td>Visibilité réduite par les embruns</td></tr>
<tr><td>10</td><td>Tempête</td><td>48 à 55</td><td>Mer blanche, très grosses lames</td></tr>
<tr><td>11</td><td>Violente tempête</td><td>56 à 63</td><td>Lames exceptionnellement hautes</td></tr>
<tr><td>12</td><td>Ouragan</td><td>64 et plus</td><td>Air plein d'écume et d'embruns</td></tr>
</tbody>
</table>
<p>Pour un petit bateau à moteur, la navigation devient inconfortable dès <strong>force 4</strong> et souvent dangereuse à partir de <strong>force 6</strong>. La catégorie de conception du bateau, inscrite sur sa plaque constructeur, indique la force de vent et la hauteur de vagues maximales pour lesquelles il a été conçu.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> force 7 = grand frais (28 à 33 nœuds) ; force 8 = coup de vent (34 à 40 nœuds).</div>`
        },
        {
          titre: "Les bulletins météo marine",
          contenu: `<p><strong>Météo-France</strong> établit plusieurs bulletins :</p>
<ul>
<li>le bulletin <strong>côte</strong>, qui couvre la bande des <strong>20 milles</strong> le long du littoral, découpée en zones : c'est celui du plaisancier côtier ;</li>
<li>les bulletins <strong>large</strong> et <strong>grand large</strong>, pour la navigation plus éloignée ;</li>
<li>les <strong>bulletins météorologiques spéciaux</strong> (BMS), émis dès qu'un vent fort est observé ou prévu : sur le bulletin côte, à partir de <strong>force 7</strong>.</li>
</ul>
<p>Un bulletin donne : les <strong>avis</strong> en cours (grand frais, coup de vent…), la <strong>situation générale</strong> (position des dépressions et anticyclones), puis les <strong>prévisions</strong> pour chaque zone : vent (direction, force, rafales), état de la mer, houle, temps, visibilité, et souvent une <strong>tendance</strong> pour la suite.</p>
<table>
<thead><tr><th>Avis</th><th>Force Beaufort</th></tr></thead>
<tbody>
<tr><td>Avis de grand frais</td><td>7</td></tr>
<tr><td>Avis de coup de vent</td><td>8</td></tr>
<tr><td>Avis de fort coup de vent</td><td>9</td></tr>
<tr><td>Avis de tempête</td><td>10 et plus</td></tr>
</tbody>
</table>
<div class="encart" data-type="danger"><strong>Attention :</strong> un avis de grand frais ou de coup de vent en cours sur votre zone suffit à justifier de ne pas sortir avec un bateau de plaisance de petite taille.</div>`
        },
        {
          titre: "Où trouver l'information",
          contenu: `<ul>
<li>Les <strong>CROSS</strong> diffusent les bulletins côte par <strong>VHF</strong> plusieurs fois par jour : ils sont <strong>annoncés sur le canal 16</strong> puis lus sur un canal de travail indiqué dans l'annonce. Les BMS sont diffusés dès leur réception.</li>
<li>Les <strong>capitaineries</strong> affichent le bulletin du jour.</li>
<li>Les <strong>sémaphores</strong> de la Marine nationale observent le temps sur la côte et peuvent renseigner par VHF.</li>
<li>Le site et l'application de <strong>Météo-France</strong>, ainsi que des répondeurs téléphoniques, donnent les bulletins officiels.</li>
<li>Les applications grand public sont pratiques, mais elles ne remplacent pas le bulletin officiel ni ses avis.</li>
</ul>
<p>Le bon réflexe : consulter la météo <strong>la veille</strong> pour décider de la sortie, <strong>le matin</strong> pour confirmer, et <strong>pendant</strong> la navigation pour surveiller l'évolution.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> le bulletin du matin annonce un vent d'ouest force 4, « fraîchissant 6 en fin d'après-midi ». Vous prévoyez une sortie courte, le matin, avec un retour au port bien avant la dégradation.</div>`
        },
        {
          titre: "Observer et anticiper",
          contenu: `<p>En navigation, on surveille en permanence les signes d'évolution :</p>
<ul>
<li>un <strong>baromètre en baisse rapide</strong> annonce une dégradation, souvent avec un renforcement du vent ;</li>
<li>des nuages qui s'épaississent et s'abaissent, un ciel qui se voile à l'ouest annoncent souvent l'arrivée d'une perturbation ;</li>
<li>des <strong>cumulonimbus</strong> (gros nuages d'orage en enclume) peuvent provoquer des rafales violentes et soudaines ;</li>
<li>la <strong>brise thermique</strong> : par beau temps, en été, le vent souffle souvent de la mer vers la terre l'après-midi (brise de mer) et de la terre vers la mer la nuit (brise de terre) ;</li>
<li>le <strong>vent contre le courant</strong> lève une mer courte et hachée, dangereuse pour les petits bateaux, notamment dans les passages et les raz.</li>
</ul>
<p>Le <strong>brouillard</strong> se forme souvent quand de l'air chaud et humide passe sur une mer plus froide. Il peut tomber en quelques minutes : c'est une raison de plus pour savoir où l'on est en permanence.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en cas de doute sur la météo, on ne part pas. En mer, si le temps se dégrade, on rentre tôt, avant d'y être contraint.</div>`
        },
        {
          titre: "Décider de sortir : la météo et le bateau",
          contenu: `<p>La décision de sortir dépend de la météo, mais aussi du <strong>bateau</strong> et de l'<strong>équipage</strong>. La plaque du constructeur indique la <strong>catégorie de conception</strong> du bateau :</p>
<table>
<thead><tr><th>Catégorie</th><th>Conçu pour</th></tr></thead>
<tbody>
<tr><td>A</td><td>Des vents pouvant dépasser force 8 et de fortes vagues : grandes traversées</td></tr>
<tr><td>B</td><td>Des vents jusqu'à force 8 et des vagues jusqu'à 4 m : navigation au large</td></tr>
<tr><td>C</td><td>Des vents jusqu'à force 6 et des vagues jusqu'à 2 m : navigation côtière, baies, estuaires</td></tr>
<tr><td>D</td><td>Des vents jusqu'à force 4 et des vagues jusqu'à 0,3 m : eaux protégées</td></tr>
</tbody>
</table>
<p>Ces valeurs sont des limites de conception, pas des conditions confortables. Un équipage peu expérimenté, des enfants à bord, une sortie longue ou un retour prévu contre le vent sont autant de raisons de rester bien en deçà.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le bulletin donne un vent moyen. Les rafales peuvent être nettement plus fortes, et c'est en rafale que se produisent les accidents.</div>`
        }
      ],
      points_cles: [
        "La direction du vent est celle d'où il vient",
        "Force 6 : vent frais (22 à 27 nœuds) ; force 7 : grand frais (28 à 33) ; force 8 : coup de vent (34 à 40)",
        "Le bulletin côte couvre la bande des 20 milles",
        "Avis de grand frais = force 7 ; avis de coup de vent = force 8",
        "Les CROSS annoncent les bulletins sur le canal 16, puis les diffusent sur un canal de travail",
        "Un baromètre en baisse rapide annonce une dégradation",
        "Vent contre courant : mer hachée et dangereuse"
      ]
    },
    {
      id: "marees",
      theme: "METEO",
      titre: "Les marées : coefficients, hauteurs d'eau et règle des douzièmes",
      duree: 25,
      objectifs: [
        "Comprendre le phénomène de la marée et son rythme",
        "Utiliser les coefficients de marée",
        "Calculer une hauteur d'eau à partir de la sonde et de la hauteur de marée",
        "Appliquer la règle des douzièmes",
        "Connaître l'effet des courants de marée"
      ],
      sections: [
        {
          titre: "Le phénomène de la marée",
          contenu: `<p>La marée est la variation périodique du niveau de la mer, due à l'attraction de la <strong>Lune</strong> et, dans une moindre mesure, du <strong>Soleil</strong>. Sur les côtes françaises de la Manche et de l'Atlantique, la marée est <strong>semi-diurne</strong> : on observe environ <strong>deux pleines mers</strong> et <strong>deux basses mers</strong> par jour.</p>
<ul>
<li>La <strong>pleine mer</strong> (PM) est le niveau le plus haut ; la <strong>basse mer</strong> (BM) le plus bas.</li>
<li>La mer <strong>monte</strong> (flot) pendant environ <strong>6 heures</strong>, puis <strong>descend</strong> (jusant) pendant environ 6 heures. Un cycle complet dure environ <strong>12 h 25</strong> : les heures de marée se décalent donc d'environ 50 minutes d'un jour à l'autre.</li>
<li>Le <strong>marnage</strong> est la différence de hauteur entre une pleine mer et la basse mer qui la précède ou la suit.</li>
<li>L'<strong>étale</strong> est la courte période, autour de la pleine ou de la basse mer, pendant laquelle le niveau varie peu.</li>
</ul>
<p>En <strong>Méditerranée</strong>, la marée est très faible (quelques dizaines de centimètres) ; les variations de niveau y dépendent surtout de la pression et du vent.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> deux pleines mers et deux basses mers par jour environ ; environ 6 heures de montée et 6 heures de descente.</div>`
        },
        {
          titre: "Les coefficients de marée",
          contenu: `<p>Le <strong>coefficient</strong> de marée indique l'amplitude de la marée, de <strong>20</strong> (marée très faible) à <strong>120</strong> (marée exceptionnelle).</p>
<table>
<thead><tr><th>Coefficient</th><th>Type de marée</th></tr></thead>
<tbody>
<tr><td>Environ 45</td><td>Morte-eau moyenne</td></tr>
<tr><td>Environ 70</td><td>Marée moyenne</td></tr>
<tr><td>Environ 95</td><td>Vive-eau moyenne</td></tr>
<tr><td>Au-delà de 100</td><td>Grande marée</td></tr>
</tbody>
</table>
<p>Les <strong>vives-eaux</strong> (forts coefficients) se produisent peu après la <strong>nouvelle lune</strong> et la <strong>pleine lune</strong>, quand Lune et Soleil sont alignés avec la Terre ; les <strong>mortes-eaux</strong> (faibles coefficients) peu après les <strong>quartiers</strong> de lune. Les plus grandes marées de l'année ont lieu autour des équinoxes.</p>
<p>Plus le coefficient est fort, plus le <strong>marnage</strong> est grand, plus la basse mer est basse et plus les <strong>courants de marée</strong> sont violents.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> par fort coefficient, des roches habituellement couvertes découvrent à basse mer, et un bateau mouillé trop près de la côte peut se retrouver échoué.</div>`
        },
        {
          titre: "Sonde, zéro des cartes et hauteur d'eau",
          contenu: `<p>Les profondeurs indiquées sur les cartes marines, appelées <strong>sondes</strong>, sont mesurées à partir du <strong>zéro des cartes</strong>, un niveau très bas, proche des plus basses mers possibles. Ainsi, la profondeur réelle est presque toujours <strong>supérieure ou égale</strong> à la sonde de la carte.</p>
<p>Pour connaître la profondeur réelle à un instant donné :</p>
<p><strong>Hauteur d'eau = sonde + hauteur de la marée au-dessus du zéro des cartes</strong></p>
<p>Les zones qui <strong>découvrent</strong> à basse mer (estran, rochers) portent sur la carte des <strong>sondes soulignées</strong> : ce sont des hauteurs au-dessus du zéro des cartes. Il faut alors les <strong>soustraire</strong> de la hauteur de marée pour obtenir la profondeur.</p>
<p>Les heures et hauteurs des pleines et basses mers sont publiées dans l'<strong>annuaire des marées</strong> du SHOM, pour des <strong>ports de référence</strong> ; d'autres ports s'en déduisent par des corrections.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> la carte indique une sonde de 1,5 m. La hauteur de marée est de 2 m. La hauteur d'eau est 1,5 + 2 = 3,5 m. Votre bateau a un tirant d'eau de 0,8 m : il reste 2,7 m sous la coque. Sur une sonde soulignée de 1 m (zone découvrante), la même marée donne 2 − 1 = 1 m d'eau.</div>`
        },
        {
          titre: "La règle des douzièmes",
          contenu: `<p>La mer ne monte pas de façon régulière : lentement au début, vite au milieu, lentement à la fin. La <strong>règle des douzièmes</strong> donne une approximation de la variation de hauteur pour chacune des 6 heures de la marée, en douzièmes du marnage :</p>
<table>
<thead><tr><th>Heure de marée</th><th>1re</th><th>2e</th><th>3e</th><th>4e</th><th>5e</th><th>6e</th></tr></thead>
<tbody>
<tr><td>Variation</td><td>1/12</td><td>2/12</td><td>3/12</td><td>3/12</td><td>2/12</td><td>1/12</td></tr>
<tr><td>Cumul</td><td>1/12</td><td>3/12</td><td>6/12</td><td>9/12</td><td>11/12</td><td>12/12</td></tr>
</tbody>
</table>
<p>À mi-marée (au bout de 3 heures), la mer a parcouru la <strong>moitié</strong> du marnage. Les 3e et 4e heures sont celles où le niveau varie le plus vite.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> basse mer à 10 h avec une hauteur de 1 m, pleine mer à 16 h avec 5 m. Marnage : 4 m, soit 1 douzième = 0,33 m. À 12 h (2 heures après la basse mer), la mer est montée de 3/12 × 4 = 1 m : hauteur 2 m. À 13 h, de 6/12 × 4 = 2 m : hauteur 3 m.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la règle des douzièmes est une approximation, valable pour une marée régulière d'environ 6 heures. Gardez toujours une marge de sécurité sous la coque.</div>`
        },
        {
          titre: "Les courants de marée",
          contenu: `<p>La marée provoque des <strong>courants</strong> alternatifs : le courant de flot pendant la montée, le courant de jusant pendant la descente. Leur vitesse suit à peu près le même rythme que la règle des douzièmes : <strong>faibles</strong> autour de l'étale, <strong>maximaux</strong> pendant les 3e et 4e heures. Ils sont plus forts en <strong>vive-eau</strong> qu'en morte-eau.</p>
<p>Près des caps, dans les passages entre îles et dans les <strong>raz</strong>, ils peuvent dépasser la vitesse d'un petit bateau. Combinés à un vent contraire, ils lèvent une mer courte et dangereuse.</p>
<p>Les cartes marines et les <strong>atlas de courants</strong> du SHOM indiquent leur direction et leur vitesse heure par heure, par rapport à l'heure de pleine mer d'un port de référence. On choisit son heure de départ pour avoir le courant avec soi, et l'on franchit les passages délicats à l'étale.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> préparer une sortie en zone à marée, c'est consulter l'annuaire des marées (heures, hauteurs, coefficient) et les courants, en plus de la météo.</div>`
        },
        {
          titre: "Méthode : préparer une sortie en zone à marée",
          contenu: `<ol>
<li>Relever dans l'annuaire les heures et hauteurs de <strong>pleine et basse mer</strong> du jour, et le <strong>coefficient</strong>.</li>
<li>Repérer sur la carte les passages délicats : seuils, bancs, entrée de port qui <strong>assèche</strong> ou dont l'accès n'est possible qu'autour de la pleine mer.</li>
<li>Calculer la <strong>hauteur d'eau</strong> à l'heure prévue de passage (sonde + hauteur de marée, avec la règle des douzièmes) et la comparer au <strong>tirant d'eau</strong> du bateau, en gardant un pied de pilote (une marge de sécurité sous la coque).</li>
<li>Consulter les <strong>courants</strong> pour choisir les heures de départ et de retour et franchir les passages à l'étale.</li>
<li>Vérifier que le <strong>retour</strong> reste possible si l'on prend du retard : un port qui assèche peut se fermer pendant plusieurs heures.</li>
</ol>
<p>Au mouillage, on tient compte de la marée dans les deux sens : il faut assez d'eau à basse mer pour ne pas échouer, et assez de longueur de ligne à pleine mer pour que l'ancre tienne.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> le chenal de votre port découvre de 1 m (sonde soulignée). Votre bateau cale 0,8 m et vous voulez 0,5 m de marge : il vous faut une hauteur de marée d'au moins 1 + 0,8 + 0,5 = 2,3 m pour passer.</div>`
        }
      ],
      points_cles: [
        "Marée semi-diurne : environ 2 pleines mers et 2 basses mers par jour, cycle d'environ 12 h 25",
        "Coefficients de 20 à 120 : 45 morte-eau moyenne, 70 moyenne, 95 vive-eau moyenne",
        "Vives-eaux après la nouvelle et la pleine lune ; mortes-eaux après les quartiers",
        "Hauteur d'eau = sonde + hauteur de marée ; une sonde soulignée se soustrait",
        "Règle des douzièmes : 1, 2, 3, 3, 2, 1",
        "Courants de marée maximaux aux 3e et 4e heures et en vive-eau",
        "Annuaire des marées et atlas de courants du SHOM pour préparer la sortie"
      ]
    }
  );

  P.questions.push(
    { id: "METEO-001", chapitre: "meteo-marine",
      q: "Un vent de nord-ouest :", options: ["Souffle vers le nord-ouest", "Vient du nord-ouest"], bonnes: [1],
      explication: "La direction d'un vent est celle d'où il vient. Un vent de nord-ouest souffle vers le sud-est." },
    { id: "METEO-002", chapitre: "meteo-marine",
      q: "Un vent de force 7 Beaufort est appelé :", options: ["Grand frais", "Jolie brise", "Coup de vent"], bonnes: [0],
      explication: "Force 7 : grand frais (28 à 33 nœuds). Force 8 : coup de vent. Force 4 : jolie brise." },
    { id: "METEO-003", chapitre: "meteo-marine",
      q: "Un « coup de vent » correspond à la force :", options: ["6", "10", "8"], bonnes: [2],
      explication: "Force 8 : coup de vent, de 34 à 40 nœuds. Force 10 : tempête." },
    { id: "METEO-004", chapitre: "meteo-marine", situation: "Le bulletin annonce un vent de 22 à 27 nœuds.",
      q: "Il s'agit de la force :", options: ["4", "8", "6"], bonnes: [2],
      explication: "De 22 à 27 nœuds : force 6, vent frais. Pour un petit bateau de plaisance, c'est déjà dangereux." },
    { id: "METEO-005", chapitre: "meteo-marine",
      q: "Un avis de grand frais signale un vent atteignant au moins la force :", options: ["6", "7", "9"], bonnes: [1],
      explication: "Avis de grand frais : force 7 ; avis de coup de vent : force 8 ; avis de fort coup de vent : force 9." },
    { id: "METEO-006", chapitre: "meteo-marine",
      q: "Le bulletin météo côte couvre une bande littorale de :", options: ["60 milles", "6 milles", "20 milles"], bonnes: [2],
      explication: "Le bulletin côte de Météo-France couvre la bande des 20 milles le long du littoral." },
    { id: "METEO-007", chapitre: "meteo-marine",
      q: "Je peux obtenir le bulletin météo marine :", options: ["Sur le site de Météo-France", "À la capitainerie", "En appelant le 196", "Par VHF, auprès des CROSS"], bonnes: [0, 1, 3],
      explication: "VHF des CROSS, affichage en capitainerie et site de Météo-France donnent les bulletins. Le 196 est un numéro d'urgence, pas un service météo." },
    { id: "METEO-008", chapitre: "meteo-marine",
      q: "Les bulletins météo diffusés par les CROSS sont annoncés :", options: ["Directement et uniquement sur le canal 16", "Sur le canal 16, puis diffusés sur un canal de travail", "Sur le canal 70"], bonnes: [1],
      explication: "Le CROSS annonce le bulletin sur le canal 16 et indique le canal de travail sur lequel il le lit, pour ne pas encombrer le canal de détresse." },
    { id: "METEO-009", chapitre: "meteo-marine", situation: "En navigation, vous constatez que le baromètre baisse rapidement depuis deux heures.",
      q: "Cela annonce probablement :", options: ["Une dégradation du temps", "Une amélioration durable", "Un renforcement du vent"], bonnes: [0, 2],
      explication: "Une baisse rapide de la pression annonce l'approche d'une dépression, souvent avec un renforcement du vent. On envisage de rentrer." },
    { id: "METEO-010", chapitre: "meteo-marine",
      q: "Sur une carte météo, des isobares très serrées indiquent :", options: ["Du brouillard", "Un vent fort", "Un vent faible"], bonnes: [1],
      explication: "Plus les isobares sont rapprochées, plus la différence de pression est forte sur une courte distance, et plus le vent est fort." },
    { id: "METEO-011", chapitre: "meteo-marine", situation: "Vous devez franchir un passage où le courant de marée porte contre un vent de force 5.",
      q: "Je peux m'attendre à :", options: ["Une mer plus calme qu'ailleurs", "Une mer courte et hachée"], bonnes: [1],
      explication: "Le vent contre le courant lève une mer courte, creuse et dangereuse. Il vaut mieux attendre la renverse ou l'étale." },
    { id: "METEO-012", chapitre: "meteo-marine", situation: "Par une belle journée d'été, il n'y a pas de vent le matin.",
      q: "L'après-midi, près de la côte, une brise thermique souffle généralement :", options: ["De la mer vers la terre", "De la terre vers la mer"], bonnes: [0],
      explication: "La terre se réchauffe plus vite que la mer : l'après-midi, la brise de mer souffle de la mer vers la terre. La nuit, c'est l'inverse." },
    { id: "METEO-013", chapitre: "meteo-marine", situation: "Un avis de coup de vent est en cours sur votre zone de navigation.",
      q: "Avec un petit bateau de plaisance, je :", options: ["Reporte ma sortie", "Reste au port", "Sors en restant dans la bande des 300 m", "Sors, l'avis ne concerne que les navires de commerce"], bonnes: [0, 1],
      explication: "Un avis de coup de vent annonce un vent de force 8 ou plus : aucun petit bateau de plaisance ne doit sortir." },
    { id: "METEO-014", chapitre: "marees",
      q: "Sur les côtes de la Manche et de l'Atlantique, il y a chaque jour environ :", options: ["Deux pleines mers et deux basses mers", "Quatre pleines mers", "Une pleine mer et une basse mer"], bonnes: [0],
      explication: "La marée y est semi-diurne : deux pleines mers et deux basses mers par jour environ, pour un cycle d'environ 12 h 25." },
    { id: "METEO-015", chapitre: "marees",
      q: "Le marnage est :", options: ["La vitesse du courant de marée", "La différence de hauteur entre pleine mer et basse mer", "La durée de la marée montante"], bonnes: [1],
      explication: "Le marnage est la différence de hauteur d'eau entre une pleine mer et une basse mer consécutives." },
    { id: "METEO-016", chapitre: "marees",
      q: "Un coefficient de marée de 95 correspond à :", options: ["Une marée exceptionnelle maximale", "Une vive-eau moyenne", "Une morte-eau moyenne"], bonnes: [1],
      explication: "Environ 95 : vive-eau moyenne ; 70 : marée moyenne ; 45 : morte-eau moyenne. Les coefficients vont de 20 à 120." },
    { id: "METEO-017", chapitre: "marees",
      q: "Les marées de vive-eau se produisent :", options: ["Peu après la pleine lune", "Aux quartiers de lune", "Peu après la nouvelle lune"], bonnes: [0, 2],
      explication: "Les vives-eaux suivent la nouvelle et la pleine lune, quand Lune et Soleil sont alignés avec la Terre ; les mortes-eaux suivent les quartiers." },
    { id: "METEO-018", chapitre: "marees",
      q: "Par fort coefficient :", options: ["Les basses mers sont plus basses", "La mer ne monte presque pas", "Les courants de marée sont plus forts", "Le marnage est important"], bonnes: [0, 2, 3],
      explication: "Un fort coefficient signifie une grande amplitude : marnage important, basses mers très basses et courants plus forts." },
    { id: "METEO-019", chapitre: "marees", situation: "La carte indique une sonde de 2 m à l'endroit où vous voulez mouiller. La hauteur de la marée est de 3 m.",
      q: "La hauteur d'eau est de :", options: ["3 m", "5 m", "1 m"], bonnes: [1],
      explication: "Hauteur d'eau = sonde + hauteur de marée = 2 + 3 = 5 m." },
    { id: "METEO-020", chapitre: "marees", situation: "Vous voulez passer sur un banc qui découvre, marqué sur la carte par une sonde soulignée de 1 m. La hauteur de marée est de 3 m.",
      q: "La hauteur d'eau sur le banc est de :", options: ["4 m", "1 m", "2 m"], bonnes: [2],
      explication: "Une sonde soulignée est une hauteur au-dessus du zéro des cartes : on la soustrait. 3 − 1 = 2 m d'eau." },
    { id: "METEO-021", chapitre: "marees",
      q: "Selon la règle des douzièmes, la mer varie le plus vite :", options: ["Pendant les 3e et 4e heures", "Pendant la 1re heure", "Pendant la 6e heure"], bonnes: [0],
      explication: "La variation suit la suite 1, 2, 3, 3, 2, 1 douzièmes : les 3e et 4e heures sont les plus rapides." },
    { id: "METEO-022", chapitre: "marees", situation: "Basse mer à 8 h, hauteur 1 m ; pleine mer à 14 h, hauteur 7 m. Le marnage est donc de 6 m.",
      q: "Selon la règle des douzièmes, à 11 h, la hauteur de marée est d'environ :", options: ["4 m", "5,5 m", "3 m"], bonnes: [0],
      explication: "Au bout de 3 heures, la mer a monté de 6/12 du marnage, soit 3 m : 1 + 3 = 4 m." },
    { id: "METEO-023", chapitre: "marees",
      q: "Les sondes des cartes marines sont mesurées à partir :", options: ["Du niveau moyen de la mer", "Du zéro des cartes, proche des plus basses mers", "Du niveau des pleines mers"], bonnes: [1],
      explication: "Le zéro des cartes est un niveau très bas : la profondeur réelle est presque toujours au moins égale à la sonde." },
    { id: "METEO-024", chapitre: "marees",
      q: "Les heures et hauteurs des pleines et basses mers se trouvent :", options: ["Sur les bouées du chenal", "Dans le bulletin météo côte", "Dans l'annuaire des marées"], bonnes: [2],
      explication: "L'annuaire des marées (SHOM et ses déclinaisons) donne heures, hauteurs et coefficients pour les ports de référence." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["mer"] = window.PERMIS_COURS["mer"] || { chapitres: [], questions: [] };

  /* ───────────── Thème REGL — Réglementation et environnement ───────────── */
  P.chapitres.push(
    {
      id: "permis-chef-de-bord",
      theme: "REGL",
      titre: "Le permis, le chef de bord et la navigation près du rivage",
      duree: 25,
      objectifs: [
        "Savoir quand le permis plaisance est obligatoire et ce que permet l'option côtière",
        "Connaître les responsabilités du chef de bord",
        "Respecter les règles de la bande littorale des 300 mètres",
        "Naviguer en sécurité près des baigneurs, des plongeurs et dans les chenaux d'accès aux plages"
      ],
      sections: [
        {
          titre: "Le permis plaisance et ses options",
          contenu: `<p>Le <strong>permis plaisance</strong> est obligatoire pour conduire un bateau de plaisance à moteur dont la puissance dépasse <strong>4,5 kW (6 ch)</strong>, en mer comme en eaux intérieures. Il n'est pas exigé pour un voilier sans moteur, ni pour un bateau dont le moteur ne dépasse pas cette puissance. Les <strong>véhicules nautiques à moteur</strong> (scooters des mers, motos des mers) sont concernés au même titre que les bateaux.</p>
<table>
<thead><tr><th>Permis ou extension</th><th>Ce qu'il permet</th></tr></thead>
<tbody>
<tr><td>Option côtière</td><td>Naviguer de jour comme de nuit jusqu'à <strong>6 milles d'un abri</strong>, sans limite de taille ni de puissance du bateau</td></tr>
<tr><td>Extension hauturière</td><td>Naviguer sans limite de distance (elle s'ajoute à l'option côtière)</td></tr>
<tr><td>Option eaux intérieures</td><td>Naviguer sur les fleuves, rivières, canaux et lacs</td></tr>
</tbody>
</table>
<p>L'option côtière s'obtient à partir de <strong>16 ans</strong>, après une formation dans un établissement agréé. Elle comprend une <strong>épreuve théorique</strong> (questionnaire à choix multiples de 30 questions, 5 erreurs au plus) et une <strong>formation pratique</strong> à la barre. Le permis est valable sans limitation de durée.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> permis obligatoire au-delà de 6 ch (4,5 kW). L'option côtière autorise la navigation jusqu'à 6 milles d'un abri, de jour comme de nuit.</div>`
        },
        {
          titre: "Le chef de bord et ses responsabilités",
          contenu: `<p>Le <strong>chef de bord</strong> est la personne responsable du bateau et de l'équipage. Il est responsable de :</p>
<ul>
<li>la <strong>préparation</strong> de la sortie : météo, marée, itinéraire, carburant, état du bateau ;</li>
<li>la présence et le bon état du <strong>matériel de sécurité</strong> adapté à la zone de navigation ;</li>
<li>la <strong>sécurité de l'équipage</strong> : briefing, gilets, consignes, nombre de personnes conforme à la plaque du constructeur ;</li>
<li>le respect des <strong>règles de navigation</strong> (RIPAM, balisage, arrêtés locaux) et de l'<strong>environnement</strong> ;</li>
<li>la présence à bord des <strong>documents</strong> : titre de conduite (permis) et titre de navigation du bateau.</li>
</ul>
<p>Le chef de bord doit garder en toutes circonstances la <strong>maîtrise de sa vitesse</strong>, l'adapter aux conditions, et naviguer avec toute sa vigilance. La conduite d'un bateau sous l'emprise de l'<strong>alcool</strong> ou de stupéfiants est dangereuse et sanctionnée ; la réglementation sur ce point a été renforcée récemment et continue d'évoluer.</p>
<p>Il a enfin une obligation morale et légale : <strong>porter assistance</strong> à toute personne en danger en mer, dans la mesure où il peut le faire sans danger grave pour son bateau et son équipage.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> l'alcool diminue la vigilance et l'équilibre, et aggrave l'hypothermie en cas de chute à l'eau. En mer, on ne boit pas quand on est à la barre.</div>`
        },
        {
          titre: "La bande littorale des 300 mètres",
          contenu: `<p>La <strong>bande des 300 mètres</strong> est la zone qui s'étend du rivage jusqu'à 300 mètres au large. C'est là que se concentrent les baigneurs, les engins de plage, les plongeurs en apnée et les kayaks. Les arrêtés des préfets maritimes y imposent notamment :</p>
<ul>
<li>une <strong>vitesse limitée à 5 nœuds</strong> pour tous les bateaux et engins, sauf dans certains chenaux ou zones réservées balisés et autorisés ;</li>
<li>l'<strong>interdiction</strong> de pénétrer dans les <strong>zones de baignade balisées</strong> (bouées jaunes) ;</li>
<li>l'obligation d'emprunter les <strong>chenaux balisés</strong> d'accès au rivage, lorsqu'ils existent, pour rejoindre ou quitter la plage.</li>
</ul>
<p>Les <strong>engins de plage</strong> (petites embarcations gonflables, matelas, pédalos) ne doivent pas s'éloigner au-delà de 300 mètres du rivage. Les maires peuvent compléter ces règles par des arrêtés municipaux affichés sur les plages et les cales.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> dans la bande des 300 m : 5 nœuds maximum, pas de navigation dans les zones de baignade, et passage par les chenaux balisés.</div>`
        },
        {
          titre: "Les chenaux d'accès au rivage",
          contenu: `<p>Les <strong>chenaux traversiers</strong> sont des couloirs, perpendiculaires à la plage, balisés par des <strong>bouées jaunes</strong> (marques spéciales) <span class="panneau" data-code="MER_SPECIALE"></span>, qui permettent aux bateaux et aux engins de rejoindre le large ou de revenir sur la plage en traversant la zone de baignade.</p>
<ul>
<li>On y navigue à <strong>vitesse réduite</strong>, en respectant la limitation affichée.</li>
<li>On n'y <strong>stationne pas</strong> et on n'y mouille pas.</li>
<li>La <strong>baignade</strong> y est interdite.</li>
<li>On y tient sa droite et on reste vigilant à l'égard des engins qui arrivent en sens inverse.</li>
</ul>
<p>Le <strong>ski nautique</strong> et la traction d'engins tractés partent généralement de ces chenaux ou de zones réservées, et nécessitent un équipier qui surveille la personne tractée.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous voulez débarquer des amis sur une plage surveillée. Vous cherchez le chenal balisé de bouées jaunes, vous y entrez à vitesse réduite et vous en ressortez sans y stationner.</div>`
        },
        {
          titre: "Plongeurs, baigneurs et usagers vulnérables",
          contenu: `<p>Un bateau qui arbore le <strong>pavillon Alpha</strong> (blanc et bleu à queue d'aronde) signale des <strong>plongeurs</strong> en immersion. Les autres navires doivent s'en tenir à <strong>au moins 100 mètres</strong> et réduire leur vitesse. Les plongeurs peuvent aussi signaler leur présence par une bouée de surface.</p>
<p>Près des côtes, on rencontre aussi des <strong>nageurs</strong> hors des zones balisées, des <strong>chasseurs sous-marins</strong> en apnée, des kayaks, des planches à voile ou des kitesurfs. Le plaisancier :</p>
<ul>
<li>réduit sa vitesse dès qu'il approche d'une zone fréquentée ;</li>
<li>surveille la surface (bouées, bulles, têtes de nageurs) ;</li>
<li><strong>débraye</strong> immédiatement si une personne est proche de l'hélice ;</li>
<li>limite son <strong>sillage</strong>, qui peut déséquilibrer un kayak ou un petit voilier.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> hors zone balisée, la baignade n'est pas interdite. L'absence de bouées jaunes ne signifie pas l'absence de nageurs : la limitation à 5 nœuds dans les 300 m s'applique partout.</div>`
        },
        {
          titre: "L'équipage et les passagers",
          contenu: `<p>La <strong>plaque du constructeur</strong> indique le nombre maximal de personnes que le bateau peut transporter, ainsi que la charge et la puissance maximales. Le chef de bord ne doit jamais les dépasser : un bateau surchargé est instable, se remplit plus facilement et chavire plus vite.</p>
<p>Avant le départ, il fait un <strong>briefing</strong> à tous les passagers :</p>
<ul>
<li>où se trouvent les gilets, comment les mettre, et quand les porter ;</li>
<li>où se trouvent les feux à main, l'extincteur, la VHF, et comment appeler les secours ;</li>
<li>la conduite à tenir en cas de chute à la mer ;</li>
<li>les zones dangereuses à bord (hélice, bôme, taquets) et les règles de déplacement.</li>
</ul>
<p>Il est prudent qu'au moins une autre personne à bord sache conduire le bateau, utiliser la VHF et donner la position : si le chef de bord tombe à l'eau ou se blesse, c'est elle qui devra agir. Les <strong>enfants</strong> portent en permanence un gilet adapté à leur poids.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> respecter le nombre de personnes de la plaque constructeur, briefer l'équipage, et former un équipier capable de prendre le relais.</div>`
        }
      ],
      points_cles: [
        "Permis obligatoire pour un bateau à moteur de plus de 4,5 kW (6 ch)",
        "Option côtière : jusqu'à 6 milles d'un abri, de jour comme de nuit, dès 16 ans",
        "Épreuve théorique : 30 questions, 5 erreurs au plus",
        "Le chef de bord est responsable de la préparation, du matériel, de l'équipage et du respect des règles",
        "Dans la bande des 300 m : 5 nœuds maximum",
        "Zones de baignade balisées interdites aux bateaux ; chenaux traversiers pour rejoindre la plage",
        "Pavillon Alpha : rester à au moins 100 m des plongeurs et ralentir",
        "Obligation de porter assistance à toute personne en danger en mer"
      ],
      panneaux: ["MER_SPECIALE"]
    },
    {
      id: "environnement-marin",
      theme: "REGL",
      titre: "Protéger l'environnement marin",
      duree: 20,
      objectifs: [
        "Connaître les interdictions de rejet en mer",
        "Gérer ses déchets et ses eaux usées",
        "Respecter les aires marines protégées et les herbiers",
        "Adopter un comportement responsable envers la faune et la pêche de loisir"
      ],
      sections: [
        {
          titre: "Les rejets interdits",
          contenu: `<p>La mer n'est pas une poubelle. La réglementation internationale (convention MARPOL) et française interdit en particulier :</p>
<ul>
<li>tout rejet d'<strong>hydrocarbures</strong> (carburant, huile de vidange, eaux de cale souillées) ;</li>
<li>tout rejet de <strong>plastiques</strong> et de déchets non biodégradables ;</li>
<li>le rejet des <strong>déchets ménagers</strong> près des côtes ;</li>
<li>le rejet de produits chimiques (peintures, solvants, produits d'entretien concentrés).</li>
</ul>
<p>Les déchets sont ramenés à terre et triés dans les points de collecte des ports. Les <strong>huiles usagées</strong>, les <strong>batteries</strong>, les <strong>feux à main périmés</strong> et les filtres ont leurs propres filières de collecte.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> tout ce qui est embarqué revient à terre. Aucun rejet d'hydrocarbure, aucun plastique à la mer.</div>`
        },
        {
          titre: "Le plein, la cale et les eaux usées",
          contenu: `<p>La pollution par hydrocarbures commence souvent au <strong>ponton carburant</strong> : un plein trop rempli déborde par l'évent. On fait le plein lentement, moteur arrêté, en surveillant le niveau, avec un absorbant à portée de main.</p>
<p>Les <strong>eaux de cale</strong> mélangées à de l'huile ou du carburant ne doivent pas être pompées à la mer : on utilise un absorbant et on vide la cale aux installations du port.</p>
<p>Les <strong>eaux noires</strong> (toilettes) et les <strong>eaux grises</strong> (vaisselle, douche) sont une source de pollution bactérienne dans les ports, les mouillages et les zones de baignade. Les bateaux équipés de cuves de rétention les vident aux <strong>pompes de récupération</strong> des ports. On ne vide jamais ses toilettes dans un port, un mouillage fréquenté ou près d'une plage.</p>
<p>On privilégie des produits d'entretien biodégradables, des peintures antisalissures autorisées, et l'on effectue le carénage sur une aire équipée qui récupère les eaux de lavage.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous constatez une irisation de gasoil dans les fonds. Vous ne déclenchez pas la pompe de cale : vous épongez avec un absorbant, que vous déposez ensuite dans le conteneur adapté du port.</div>`
        },
        {
          titre: "Les aires marines protégées et les herbiers",
          contenu: `<p>Les côtes françaises comptent de nombreuses <strong>aires marines protégées</strong> : parcs nationaux (Port-Cros, Calanques…), parcs naturels marins (Iroise, golfe du Lion…), réserves naturelles, sites Natura 2000. Chacune a sa réglementation : limitation de vitesse, interdiction de mouiller dans certaines zones, interdiction ou encadrement de la pêche, de la plongée ou du débarquement.</p>
<p>Avant de naviguer dans une zone inconnue, on se renseigne à la <strong>capitainerie</strong>, auprès du gestionnaire de l'aire protégée et dans les <strong>arrêtés du préfet maritime</strong>.</p>
<p>En Méditerranée, les <strong>herbiers de posidonie</strong> sont des prairies sous-marines essentielles (nurseries pour les poissons, production d'oxygène, protection des plages contre l'érosion). L'ancre et la chaîne les arrachent. Le mouillage sur ces herbiers est réglementé par les préfets maritimes et doit être évité : on mouille sur le sable (taches claires) ou sur les bouées des zones de mouillage organisées.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une zone protégée n'est pas forcément balisée en mer. C'est au chef de bord de connaître la réglementation avant de partir.</div>`
        },
        {
          titre: "La faune et la pêche de loisir",
          contenu: `<p>Les <strong>mammifères marins</strong> (dauphins, baleines, phoques) et les <strong>oiseaux</strong> sont protégés : il est interdit de les perturber intentionnellement. Si l'on en croise, on ralentit, on ne les poursuit pas, on ne coupe pas leur route et l'on garde ses distances. Au printemps, on évite de débarquer sur les îlots où nichent les oiseaux.</p>
<p>La <strong>pêche de loisir</strong> est libre mais encadrée :</p>
<ul>
<li>respect des <strong>tailles minimales</strong> de capture pour chaque espèce ;</li>
<li><strong>marquage</strong> obligatoire de certaines espèces capturées (coupe d'une partie de la nageoire caudale), pour lutter contre la vente illégale ;</li>
<li>interdiction de <strong>vendre</strong> le produit de sa pêche ;</li>
<li>respect des zones et périodes d'interdiction, et des limites de matériel.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> on ralentit et on garde ses distances avec les animaux marins ; on respecte les tailles minimales et on ne vend jamais sa pêche.</div>`
        },
        {
          titre: "Les bons gestes du plaisancier",
          contenu: `<ul>
<li>Préparer la sortie en vérifiant la réglementation locale (aires protégées, zones interdites).</li>
<li>Faire le plein sans débordement et surveiller sa cale.</li>
<li>Ramener tous ses déchets, y compris les mégots et les lignes de pêche.</li>
<li>Utiliser les bouées de mouillage organisé quand elles existent, et éviter les herbiers.</li>
<li>Limiter sa vitesse et son sillage près des côtes, pour la sécurité et pour éviter l'érosion des rives.</li>
<li>Réduire le bruit à proximité des côtes et des mouillages.</li>
<li>Signaler au CROSS une pollution importante observée en mer (nappe d'hydrocarbure, conteneur, filet dérivant).</li>
</ul>
<p>La protection de l'environnement fait partie des connaissances évaluées à l'examen : on attend du futur chef de bord qu'il sache non seulement conduire son bateau, mais aussi se comporter de façon responsable.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> en mer, vous croisez une large nappe irisée qui sent le carburant. Vous la signalez au CROSS par VHF en indiquant sa position et son étendue approximative.</div>`
        },
        {
          titre: "Le mouillage organisé et le respect des fonds",
          contenu: `<p>Dans de nombreux sites fréquentés, les communes ou les gestionnaires d'aires protégées installent des <strong>zones de mouillage organisé</strong>, équipées de bouées reliées à des ancrages fixes. Elles évitent que des centaines d'ancres raclent chaque jour les mêmes fonds.</p>
<ul>
<li>On utilise la bouée prévue, en respectant la taille de bateau indiquée.</li>
<li>On ne mouille pas sa propre ancre à l'intérieur de la zone, sauf si le règlement l'autorise.</li>
<li>Une redevance peut être demandée ; elle finance l'entretien des installations.</li>
</ul>
<p>Hors de ces zones, on choisit un fond de sable, on file une longueur de ligne raisonnable et, au départ, on remonte l'ancre à la verticale plutôt que de l'arracher en avançant, pour ne pas labourer le fond.</p>
<p>Le <strong>bruit</strong> et le <strong>sillage</strong> sont aussi des atteintes à l'environnement : un sillage fort érode les berges des estuaires et dérange les oiseaux ; un moteur poussé près des côtes perturbe la faune et les autres usagers.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> en arrivant dans une baie de parc national, vous trouvez un champ de bouées blanches numérotées. Vous prenez une bouée libre adaptée à votre taille plutôt que de mouiller votre ancre à côté.</div>`
        }
      ],
      points_cles: [
        "Aucun rejet d'hydrocarbure ni de plastique à la mer",
        "Les déchets, huiles usagées, batteries et feux périmés sont ramenés à terre",
        "Eaux de cale souillées et eaux noires vidées aux installations du port",
        "Les aires marines protégées ont leur propre réglementation : se renseigner avant de partir",
        "Éviter de mouiller sur les herbiers de posidonie",
        "Ne pas perturber les mammifères marins : ralentir et garder ses distances",
        "Pêche de loisir : tailles minimales, marquage de certaines espèces, vente interdite"
      ]
    }
  );

  P.questions.push(
    { id: "REGL-001", chapitre: "permis-chef-de-bord",
      q: "Le permis plaisance est obligatoire pour conduire un bateau à moteur d'une puissance supérieure à :", options: ["15 kW (20 ch)", "4,5 kW (6 ch)", "75 kW (100 ch)"], bonnes: [1],
      explication: "Au-delà de 4,5 kW, soit 6 ch, le permis plaisance est obligatoire, quelle que soit la taille du bateau." },
    { id: "REGL-002", chapitre: "permis-chef-de-bord",
      q: "Avec l'option côtière, je peux naviguer :", options: ["De jour comme de nuit", "Sans limite de distance", "Jusqu'à 6 milles d'un abri"], bonnes: [0, 2],
      explication: "L'option côtière autorise la navigation jusqu'à 6 milles d'un abri, de jour comme de nuit. L'extension hauturière lève la limite de distance." },
    { id: "REGL-003", chapitre: "permis-chef-de-bord",
      q: "L'option côtière limite-t-elle la taille ou la puissance du bateau ?", options: ["Non", "Oui, à 12 m", "Oui, à 100 ch"], bonnes: [0],
      explication: "L'option côtière ne limite ni la longueur ni la puissance du bateau ; elle limite la distance d'éloignement d'un abri." },
    { id: "REGL-004", chapitre: "permis-chef-de-bord",
      q: "L'âge minimum pour obtenir l'option côtière est de :", options: ["14 ans", "18 ans", "16 ans"], bonnes: [2],
      explication: "L'option côtière du permis plaisance peut être obtenue à partir de 16 ans." },
    { id: "REGL-005", chapitre: "permis-chef-de-bord",
      q: "L'épreuve théorique de l'option côtière comporte :", options: ["20 questions, sans erreur", "40 questions, avec 5 erreurs au plus", "30 questions, avec 5 erreurs au plus"], bonnes: [2],
      explication: "Le questionnaire compte 30 questions ; il faut au moins 25 bonnes réponses." },
    { id: "REGL-006", chapitre: "permis-chef-de-bord", situation: "Un ami veut louer un voilier de 8 m sans moteur pour la journée.",
      q: "Un permis plaisance est exigé :", options: ["Non", "Oui"], bonnes: [0],
      explication: "Le permis plaisance ne concerne que les bateaux à moteur de plus de 4,5 kW. Un voilier sans moteur n'en demande pas." },
    { id: "REGL-007", chapitre: "permis-chef-de-bord",
      q: "Le chef de bord est responsable :", options: ["De la présence du matériel de sécurité", "De la sécurité de l'équipage", "Des prévisions météo de Météo-France", "Du respect des règles de navigation"], bonnes: [0, 1, 3],
      explication: "Le chef de bord répond de son bateau, de son équipage et du respect des règles. Il doit consulter la météo, pas la produire." },
    { id: "REGL-008", chapitre: "permis-chef-de-bord", situation: "Vous apercevez une personne en difficulté dans l'eau, loin de tout autre bateau.",
      q: "Je dois :", options: ["Alerter le CROSS si nécessaire", "Lui porter assistance, si je peux le faire sans danger grave pour mon bord", "Poursuivre ma route, ce n'est pas mon rôle"], bonnes: [0, 1],
      explication: "Tout chef de bord doit porter assistance à une personne en danger en mer dans la mesure de ses moyens, et alerter les secours." },
    { id: "REGL-009", chapitre: "permis-chef-de-bord", situation: "Vous avez bu plusieurs verres d'alcool au déjeuner et vous devez ramener le bateau au port.",
      q: "Le plus sage est :", options: ["De confier la barre à une personne titulaire du permis qui n'a pas bu", "D'attendre d'être en état de conduire", "De barrer quand même, la mer n'est pas une route"], bonnes: [0, 1],
      explication: "L'alcool réduit la vigilance et les réflexes et aggrave les risques en cas de chute à l'eau. Conduire un bateau en état d'ivresse est sanctionné." },
    { id: "REGL-010", chapitre: "permis-chef-de-bord", situation: "Vous naviguez à 200 m d'une plage, hors de tout chenal.",
      q: "Ma vitesse ne doit pas dépasser :", options: ["Aucune limite, si la mer est calme", "5 nœuds", "10 nœuds"], bonnes: [1],
      explication: "Dans la bande littorale des 300 m, les arrêtés des préfets maritimes limitent la vitesse à 5 nœuds, sauf zones ou chenaux spécialement autorisés." },
    { id: "REGL-011", chapitre: "permis-chef-de-bord", situation: "Vous voulez débarquer un équipier sur une plage. Une zone de baignade est balisée par des bouées jaunes et un chenal balisé traverse la zone.", panneau: "MER_SPECIALE",
      q: "Pour rejoindre la plage, je dois :", options: ["Arrêter le moteur et dériver jusqu'à la plage à travers la zone de baignade", "Emprunter le chenal balisé à vitesse réduite", "Traverser la zone de baignade à 5 nœuds"], bonnes: [1],
      explication: "La zone de baignade balisée est interdite aux bateaux ; on passe par le chenal traversier prévu à cet effet." },
    { id: "REGL-012", chapitre: "permis-chef-de-bord", situation: "Vous naviguez dans un chenal d'accès à la plage balisé par des bouées jaunes.", panneau: "MER_SPECIALE",
      q: "Dans ce chenal, je peux :", options: ["M'y arrêter pour une baignade", "Y circuler à vitesse réduite", "Y mouiller pour déjeuner"], bonnes: [1],
      explication: "Un chenal traversier sert uniquement au passage : on y circule à vitesse réduite, sans s'arrêter, et la baignade y est interdite." },
    { id: "REGL-013", chapitre: "permis-chef-de-bord", situation: "Vous apercevez un bateau mouillé qui arbore un pavillon blanc et bleu à queue d'aronde.",
      q: "Je dois m'en tenir à une distance d'au moins :", options: ["1 mille", "20 mètres", "100 mètres"], bonnes: [2],
      explication: "Le pavillon Alpha signale des plongeurs : on reste à au moins 100 m et on ralentit." },
    { id: "REGL-014", chapitre: "permis-chef-de-bord",
      q: "Les engins de plage (matelas, petites embarcations gonflables) peuvent s'éloigner du rivage jusqu'à :", options: ["300 mètres", "6 milles", "2 milles"], bonnes: [0],
      explication: "Les engins de plage ne doivent pas dépasser la bande des 300 m." },
    { id: "REGL-015", chapitre: "permis-chef-de-bord", situation: "Vous naviguez à 250 m de la côte, sans bouée de zone de baignade. Vous apercevez des nageurs.",
      q: "Je dois :", options: ["Surveiller la surface autour de moi", "Ralentir et m'en écarter largement", "Garder ma vitesse, la baignade est interdite hors zone balisée"], bonnes: [0, 1],
      explication: "La baignade est autorisée hors des zones balisées. On ralentit, on s'écarte et on surveille la surface." },
    { id: "REGL-016", chapitre: "permis-chef-de-bord",
      q: "Doivent se trouver à bord :", options: ["Le titre de navigation du bateau", "Le permis du conducteur", "Le livret de famille"], bonnes: [0, 1],
      explication: "Le titre de conduite et le titre de navigation du bateau doivent pouvoir être présentés lors d'un contrôle." },
    { id: "REGL-017", chapitre: "environnement-marin",
      q: "En mer, je peux rejeter :", options: ["Mon huile de vidange, si je suis au large", "Aucun déchet plastique", "Aucun hydrocarbure"], bonnes: [1, 2],
      explication: "Tout rejet d'hydrocarbure et de plastique est interdit. Les huiles usagées sont rapportées dans les points de collecte des ports." },
    { id: "REGL-018", chapitre: "environnement-marin", situation: "En faisant le plein, du carburant déborde par l'évent.",
      q: "J'aurais dû :", options: ["Faire le plein moteur en marche", "Remplir lentement en surveillant le niveau", "Avoir un absorbant à portée de main"], bonnes: [1, 2],
      explication: "On fait le plein lentement, moteur arrêté, en surveillant le niveau, avec un absorbant prêt pour éviter toute pollution." },
    { id: "REGL-019", chapitre: "environnement-marin", situation: "Vous constatez que l'eau de vos fonds est irisée de gasoil.",
      q: "Je :", options: ["Utilise un absorbant et vide la cale aux installations du port", "Pompe la cale à la mer en navigation"], bonnes: [0],
      explication: "Des eaux de cale souillées ne doivent pas être rejetées à la mer : absorbant, puis récupération au port." },
    { id: "REGL-020", chapitre: "environnement-marin",
      q: "Les eaux noires (toilettes) d'un bateau équipé d'une cuve se vident :", options: ["Dans un mouillage fréquenté", "Dans le port, la nuit", "Aux pompes de récupération des ports"], bonnes: [2],
      explication: "Les cuves de rétention se vident aux installations de récupération des ports, jamais dans un port, un mouillage ou une zone de baignade." },
    { id: "REGL-021", chapitre: "environnement-marin", situation: "Vous voulez mouiller dans une calanque, en Méditerranée. Le fond est en partie couvert d'une prairie sous-marine verte, en partie sableux.",
      q: "Je peux m'arrêter :", options: ["Sur une bouée de mouillage organisé, s'il en existe", "En mouillant dans l'herbier, la tenue y est meilleure", "En mouillant sur le sable"], bonnes: [0, 2],
      explication: "Les herbiers de posidonie sont protégés et réglementés : l'ancre et la chaîne les arrachent. On mouille sur le sable ou sur une bouée de mouillage organisé." },
    { id: "REGL-022", chapitre: "environnement-marin",
      q: "Avant de naviguer dans une aire marine protégée, je dois :", options: ["Vérifier les zones où le mouillage ou la pêche sont interdits", "Rien, elle est forcément balisée en mer", "Me renseigner sur sa réglementation"], bonnes: [0, 2],
      explication: "Chaque aire protégée a ses règles (vitesse, mouillage, pêche) et n'est pas toujours balisée : le chef de bord se renseigne avant de partir." },
    { id: "REGL-023", chapitre: "environnement-marin", situation: "Un groupe de dauphins nage près de votre bateau.",
      q: "Je dois :", options: ["Couper leur route pour mieux les voir", "Accélérer pour les accompagner", "Garder mes distances", "Ralentir et ne pas les poursuivre"], bonnes: [2, 3],
      explication: "Les mammifères marins sont protégés : il est interdit de les perturber intentionnellement. On ralentit et on garde ses distances." },
    { id: "REGL-024", chapitre: "environnement-marin",
      q: "En pêche de loisir :", options: ["Je respecte les tailles minimales de capture", "Je peux vendre mes prises", "Je marque les espèces concernées par l'obligation de marquage"], bonnes: [0, 2],
      explication: "Le pêcheur de loisir respecte les tailles minimales et marque certaines espèces. La vente du produit de la pêche de loisir est interdite." },
    { id: "REGL-025", chapitre: "environnement-marin",
      q: "Les feux à main périmés et les batteries usagées :", options: ["Se rapportent aux points de collecte adaptés", "Se mettent dans la poubelle du port avec les ordures", "Se jettent à la mer au large"], bonnes: [0],
      explication: "Produits pyrotechniques et batteries ont leurs filières de collecte ; ils ne vont ni à la mer ni dans les ordures ménagères." },
    { id: "REGL-026", chapitre: "environnement-marin", situation: "Vous découvrez en mer une large nappe d'hydrocarbure.",
      q: "Je peux :", options: ["La signaler au CROSS en donnant sa position", "Ne rien faire, ce n'est pas mon bateau qui l'a causée"], bonnes: [0],
      explication: "Signaler une pollution au CROSS permet d'en rechercher l'origine et d'organiser la lutte. On indique la position et l'étendue approximative." }
  );
})();

window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["mer"] = window.PERMIS_COURS["mer"] || { chapitres: [], questions: [] };

  /* ───────────── Thème NAV — Navigation et pratique ───────────── */
  P.chapitres.push(
    {
      id: "carte-cap-route",
      theme: "NAV",
      titre: "La carte marine, le cap et la route",
      duree: 25,
      objectifs: [
        "Lire une carte marine : coordonnées, échelles, sondes, dangers",
        "Mesurer une distance en milles et calculer une durée de trajet",
        "Distinguer cap et route, et comprendre l'effet du vent et du courant",
        "Faire le point par relèvements et utiliser un alignement"
      ],
      sections: [
        {
          titre: "Lire une carte marine",
          contenu: `<p>La <strong>carte marine</strong> est le document de base du navigateur. Les cartes françaises officielles sont publiées par le <strong>SHOM</strong>. Elles représentent surtout ce qui intéresse le marin : les <strong>profondeurs</strong>, les <strong>dangers</strong> (roches, épaves, hauts-fonds), le <strong>balisage</strong>, les <strong>feux</strong>, les <strong>amers</strong> (points remarquables à terre : clochers, châteaux d'eau, phares) et la nature des fonds.</p>
<p>Toute position s'exprime par :</p>
<ul>
<li>sa <strong>latitude</strong>, de 0° à l'équateur à 90° aux pôles, nord ou sud ; elle se lit sur les <strong>bords verticaux</strong> (gauche et droit) de la carte ;</li>
<li>sa <strong>longitude</strong>, de 0° au méridien de Greenwich à 180°, est ou ouest ; elle se lit sur les <strong>bords horizontaux</strong> (haut et bas).</li>
</ul>
<p>Le <strong>nord</strong> est en haut de la carte. Les profondeurs (sondes) sont données en mètres, au-dessus du zéro des cartes. Les zones qui découvrent à marée basse sont teintées et leurs hauteurs sont soulignées. La carte comporte aussi une <strong>rose des vents</strong> qui indique la déclinaison magnétique.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> latitude sur les côtés, longitude en haut et en bas. Les sondes sont des profondeurs minimales, mesurées depuis le zéro des cartes.</div>`
        },
        {
          titre: "Distances, vitesses et durées",
          contenu: `<p>En mer, les distances se mesurent en <strong>milles marins</strong> : <strong>1 mille = 1 852 mètres</strong>, ce qui correspond à <strong>une minute de latitude</strong>. On mesure donc une distance avec un compas à pointes sèches, que l'on reporte sur l'<strong>échelle des latitudes</strong> (sur le bord vertical de la carte), à la hauteur de la zone mesurée, et <strong>jamais sur l'échelle des longitudes</strong>.</p>
<p>La vitesse s'exprime en <strong>nœuds</strong> : <strong>1 nœud = 1 mille par heure</strong>. Le calcul de base est :</p>
<p><strong>Distance (milles) = vitesse (nœuds) × temps (heures)</strong></p>
<table>
<thead><tr><th>Vitesse</th><th>Temps</th><th>Distance parcourue</th></tr></thead>
<tbody>
<tr><td>6 nœuds</td><td>30 minutes</td><td>3 milles</td></tr>
<tr><td>12 nœuds</td><td>15 minutes</td><td>3 milles</td></tr>
<tr><td>20 nœuds</td><td>1 h 30</td><td>30 milles</td></tr>
<tr><td>5 nœuds</td><td>12 minutes</td><td>1 mille</td></tr>
</tbody>
</table>
<p>Une <strong>encablure</strong> vaut un dixième de mille, soit environ 185 mètres ; on l'utilise pour les courtes distances.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous devez parcourir 9 milles à 12 nœuds. Temps = 9 / 12 = 0,75 h, soit 45 minutes.</div>`
        },
        {
          titre: "Le compas et les caps",
          contenu: `<p>Le <strong>compas</strong> indique la direction du nord magnétique. Le <strong>cap</strong> est l'angle entre le nord et l'axe du bateau, compté de <strong>0° à 360°</strong> dans le sens des aiguilles d'une montre : 0° (ou 360°) nord, 090° est, 180° sud, 270° ouest.</p>
<p>Le compas ne montre pas exactement le nord géographique de la carte, pour deux raisons :</p>
<ul>
<li>la <strong>déclinaison magnétique</strong> (D) : écart entre nord géographique et nord magnétique, indiquée sur la rose de la carte, et qui varie selon le lieu et les années ;</li>
<li>la <strong>déviation</strong> (d) : erreur due aux masses métalliques et aux appareils électriques du bord, propre à chaque bateau et à chaque cap.</li>
</ul>
<p>Leur somme s'appelle la <strong>variation</strong> (W = D + d). Avec la convention habituelle (est positif, ouest négatif) : <strong>cap vrai = cap compas + W</strong>. Sur les côtes françaises, la déclinaison est aujourd'hui faible, de l'ordre de quelques degrés, mais il faut en tenir compte sur de longues distances.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un téléphone, une radio portable ou un outil posé près du compas peut le dévier de plusieurs dizaines de degrés. On ne pose rien de métallique ou d'électronique à côté.</div>`
        },
        {
          titre: "Cap et route : l'effet du vent et du courant",
          contenu: `<p>Le <strong>cap</strong> est la direction vers laquelle pointe l'avant du bateau. La <strong>route</strong> est la direction réellement suivie. Elles diffèrent à cause :</p>
<ul>
<li>de la <strong>dérive</strong> : le vent pousse le bateau sur le côté, surtout s'il est haut sur l'eau ;</li>
<li>du <strong>courant</strong> : la masse d'eau entière se déplace et emporte le bateau.</li>
</ul>
<p>La <strong>route fond</strong>, celle que donne le GPS, intègre ces effets. Pour suivre une route donnée sur la carte, il faut donc <strong>corriger le cap</strong> du côté d'où viennent le courant et le vent. Un courant traversier de 2 nœuds sur un bateau qui avance à 6 nœuds produit un écart important.</p>
<p>Un courant se désigne par la direction <strong>vers laquelle il porte</strong> : un courant portant au 090 emmène le bateau vers l'est. Un vent, lui, se désigne par la direction d'où il vient.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> garder le cap vers un point ne garantit pas d'y arriver en ligne droite. Avec du courant traversier, on décrit une courbe et l'on peut passer sur un danger. Vérifiez votre position régulièrement.</div>`
        },
        {
          titre: "Faire le point",
          contenu: `<p>Faire le point, c'est déterminer sa position. Le <strong>GPS</strong> le fait en continu, mais il peut tomber en panne ou être mal configuré : le chef de bord doit savoir se situer autrement.</p>
<ul>
<li>Le <strong>relèvement</strong> d'un amer est l'angle entre le nord et la direction de cet amer, mesuré avec un compas de relèvement. On le trace sur la carte : le bateau est quelque part sur cette ligne.</li>
<li>Avec <strong>deux ou trois relèvements</strong> d'amers bien identifiés et bien écartés, les lignes se croisent : le bateau se trouve à l'intersection (souvent un petit triangle).</li>
<li>Un <strong>alignement</strong> de deux amers repérés sur la carte donne une ligne de position très précise, sans compas.</li>
<li>La <strong>sonde</strong> lue au sondeur, comparée à la carte, permet de vérifier la cohérence de la position.</li>
</ul>
<p>Sur un petit bateau côtier, la meilleure méthode reste de <strong>suivre sa progression sur la carte</strong> en permanence, en reconnaissant les amers et les marques au fur et à mesure.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous relevez le phare au 030 et le clocher au 300. Vous tracez les deux droites depuis chaque amer, dans la direction opposée (210 depuis le phare, 120 depuis le clocher) : leur croisement donne votre position.</div>`
        },
        {
          titre: "Préparer sa route",
          contenu: `<p>Avant une navigation côtière, on prépare sa route sur la carte :</p>
<ol>
<li>Tracer la route en segments droits, en passant à bonne distance des dangers (roches, hauts-fonds, épaves) et des zones interdites.</li>
<li>Relever pour chaque segment le <strong>cap</strong> à suivre et la <strong>distance</strong>, puis en déduire la <strong>durée</strong> selon la vitesse prévue.</li>
<li>Noter les <strong>amers</strong> et les <strong>marques</strong> qui permettront de vérifier sa progression, et les points de changement de route.</li>
<li>Repérer les <strong>abris</strong> possibles en cas de dégradation du temps ou de panne.</li>
<li>Tenir compte de la marée (hauteur d'eau aux passages) et des courants.</li>
</ol>
<p>En route, on compare régulièrement la position réelle à la route prévue. Un GPS ou une application de navigation facilitent beaucoup les choses, mais il faut toujours pouvoir revenir à la carte papier et au compas si l'électronique tombe en panne.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> une route se prépare à terre : caps, distances, durées, dangers, amers et abris.</div>`
        }
      ],
      points_cles: [
        "Latitude lue sur les bords verticaux de la carte, longitude sur les bords horizontaux",
        "1 mille = 1 852 m = 1 minute de latitude ; on mesure les distances sur l'échelle des latitudes",
        "1 nœud = 1 mille par heure ; distance = vitesse × temps",
        "Cap de 0 à 360°, compté dans le sens des aiguilles d'une montre depuis le nord",
        "Déclinaison + déviation = variation ; cap vrai = cap compas + variation",
        "Le vent et le courant écartent la route du cap : il faut corriger",
        "Un courant se désigne par la direction vers laquelle il porte, un vent par celle d'où il vient",
        "Point par deux ou trois relèvements d'amers, ou par alignement"
      ]
    },
    {
      id: "manoeuvres-mouillage",
      theme: "NAV",
      titre: "Manœuvres de port, mouillage, prise de coffre et nœuds",
      duree: 25,
      objectifs: [
        "Préparer et réaliser une sortie et une entrée de port",
        "Comprendre l'effet du vent, du courant et de l'hélice sur la manœuvre",
        "Accoster et s'amarrer correctement",
        "Choisir un mouillage, mouiller et prendre un coffre",
        "Connaître les nœuds utiles à bord"
      ],
      sections: [
        {
          titre: "Sortir du port et y rentrer",
          contenu: `<p>Avant de larguer les amarres, on vérifie le moteur (niveau, circuit de refroidissement : un jet d'eau doit sortir du témoin sur un hors-bord), on prépare les <strong>pare-battages</strong> et les <strong>amarres</strong>, et l'on répartit les rôles dans l'équipage.</p>
<p>Dans le port et ses chenaux :</p>
<ul>
<li>on respecte la <strong>vitesse limite</strong> du port (souvent 3 nœuds) et l'on ne fait <strong>pas de sillage</strong> ;</li>
<li>on tient sa <strong>droite</strong> dans les chenaux et les allées de pontons ;</li>
<li>on respecte les <strong>signaux</strong> d'entrée et de sortie et les instructions de la capitainerie ;</li>
<li>on reste à l'écart des navires de commerce, des ferries et des bateaux de pêche qui manœuvrent.</li>
</ul>
<p>En rentrant, on se signale si besoin à la capitainerie par VHF pour obtenir une place, et l'on prépare amarres et pare-battages <strong>avant</strong> d'arriver à proximité des pontons.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> au port, vitesse minimale, pas de sillage, on tient sa droite. Tout se prépare avant la manœuvre, pas pendant.</div>`
        },
        {
          titre: "Les forces qui agissent sur le bateau",
          contenu: `<p>Un bateau n'a pas de freins et il ne tourne pas comme une voiture : c'est l'<strong>arrière</strong> qui pivote, autour d'un point situé vers l'avant. Trois éléments influencent toute manœuvre :</p>
<ul>
<li>le <strong>vent</strong> : il pousse surtout l'avant des bateaux à moteur, plus haut et plus léger ; à faible vitesse, l'avant « tombe » sous le vent ;</li>
<li>le <strong>courant</strong> : il déplace le bateau tout entier, y compris quand le moteur est au point mort ;</li>
<li>l'<strong>effet de pas</strong> de l'hélice : une hélice dite « à pas à droite » tend, <strong>en marche arrière</strong>, à faire partir l'arrière du bateau <strong>vers bâbord</strong>. Cet effet, sensible à faible vitesse, s'utilise pour accoster plus facilement d'un côté que de l'autre.</li>
</ul>
<p>Règle d'or : on manœuvre <strong>lentement</strong>, de préférence <strong>face au vent ou au courant</strong> (celui des deux qui est le plus fort), ce qui permet de contrôler sa vitesse et de s'arrêter. On procède par impulsions brèves de moteur, en repassant au point mort.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un bateau à moteur n'a de gouverne qu'avec un flux d'eau sur la barre ou l'embase. Moteur au point mort, à l'arrêt, il ne se dirige plus.</div>`
        },
        {
          titre: "Accoster et s'amarrer",
          contenu: `<p>Pour accoster le long d'un ponton, on arrive <strong>lentement</strong>, sous un angle faible (environ 30°), de préférence vent ou courant de face. On met au point mort, on redresse, on donne un peu de marche arrière pour casser l'erre et rapprocher l'arrière. Un équipier passe une amarre dès que c'est possible, <strong>sans sauter</strong> sur le ponton et sans mettre les mains ou les pieds entre la coque et le quai.</p>
<p>Les amarres classiques :</p>
<table>
<thead><tr><th>Amarre</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td>Pointe avant</td><td>Retient l'avant, part vers l'avant du bateau</td></tr>
<tr><td>Pointe arrière</td><td>Retient l'arrière, part vers l'arrière</td></tr>
<tr><td>Garde avant (dite descendante)</td><td>Part de l'avant du bateau vers l'arrière sur le quai : empêche le bateau d'avancer</td></tr>
<tr><td>Garde arrière (dite montante)</td><td>Part de l'arrière du bateau vers l'avant sur le quai : empêche le bateau de reculer</td></tr>
</tbody>
</table>
<p>Les <strong>pare-battages</strong> protègent la coque ; on les règle à la hauteur du ponton. En zone à marée, le long d'un quai fixe, on laisse du mou aux amarres ou on les surveille, car le niveau de l'eau varie de plusieurs mètres.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> ne retenez jamais un bateau en mouvement avec la main, le pied ou le corps : utilisez une amarre tournée sur un taquet ou un pare-battage à main.</div>`
        },
        {
          titre: "Mouiller l'ancre",
          contenu: `<p>Choisir un <strong>mouillage</strong> :</p>
<ul>
<li>abrité du vent et de la houle prévus pour toute la durée de l'arrêt ;</li>
<li>sur un fond de bonne tenue (sable, vase) et <strong>hors des herbiers</strong>, des câbles sous-marins et des zones interdites ;</li>
<li>hors des <strong>chenaux</strong> et des zones de baignade ;</li>
<li>avec assez de place pour l'<strong>évitage</strong> : le bateau tourne autour de son ancre au gré du vent et du courant ;</li>
<li>avec une profondeur suffisante à <strong>basse mer</strong>, en zone à marée.</li>
</ul>
<p>Pour mouiller : on vient <strong>face au vent</strong> (ou au courant) à l'endroit choisi, on stoppe, on laisse descendre l'ancre jusqu'au fond, puis on <strong>recule lentement</strong> en filant la chaîne pour que l'ancre croche. En règle pratique, on file au moins <strong>3 fois la hauteur d'eau</strong> avec une ligne tout chaîne et au moins <strong>5 fois</strong> avec une ligne en cordage, davantage si le vent forcit.</p>
<p>On vérifie ensuite que l'ancre <strong>tient</strong> : en repérant deux amers alignés par le travers, on s'assure que le bateau ne dérive pas. On montre la <strong>boule</strong> de jour et le <strong>feu de mouillage</strong> de nuit si nécessaire.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous mouillez par 4 m d'eau, à marée haute, avec une ligne tout chaîne. Vous filez au moins 12 m de chaîne, et vous tenez compte de la place nécessaire pour l'évitage et de la profondeur restante à basse mer.</div>`
        },
        {
          titre: "Prendre un coffre ou une bouée",
          contenu: `<p>Un <strong>coffre</strong> (ou bouée de corps-mort) est une bouée reliée au fond par une chaîne et un lest. Dans les zones de mouillage organisé, il remplace l'ancre et protège les fonds.</p>
<ol>
<li>On s'approche <strong>lentement</strong>, <strong>face au vent ou au courant</strong>, en visant le coffre par l'avant.</li>
<li>Un équipier, à l'avant, guide le barreur par gestes, car le coffre disparaît sous l'étrave dans les derniers mètres.</li>
<li>Il saisit l'anneau (l'organeau) ou le bout de reprise avec une <strong>gaffe</strong>, et passe une amarre.</li>
<li>Le barreur met au <strong>point mort</strong> dès que le coffre est saisi, pour ne pas prendre le bout dans l'hélice.</li>
</ol>
<p>Pour repartir, on largue l'amarre et l'on recule ou l'on s'écarte lentement en surveillant le bout qui pend de la bouée.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> coffre, accostage, mouillage, homme à la mer : toutes les approches se font lentement, face au vent ou au courant.</div>`
        },
        {
          titre: "Les nœuds utiles",
          contenu: `<table>
<thead><tr><th>Nœud</th><th>Usage</th></tr></thead>
<tbody>
<tr><td>Nœud de chaise</td><td>Faire une boucle fixe qui ne coulisse pas, au bout d'une amarre ou autour d'une personne ; facile à défaire même après avoir forcé</td></tr>
<tr><td>Tour mort et deux demi-clés</td><td>Amarrer un bout sur un anneau, un piquet ou un organeau</td></tr>
<tr><td>Nœud de taquet</td><td>Tourner une amarre sur un taquet (un tour, des huit, une clé)</td></tr>
<tr><td>Nœud de cabestan</td><td>Fixer rapidement un pare-battage sur une filière ou un chandelier</td></tr>
<tr><td>Nœud en huit</td><td>Nœud d'arrêt au bout d'une écoute ou d'un bout, pour qu'il ne sorte pas d'une poulie</td></tr>
<tr><td>Nœud plat</td><td>Réunir deux bouts de même diamètre (prise de ris)</td></tr>
<tr><td>Nœud d'écoute</td><td>Réunir deux bouts de diamètres différents</td></tr>
</tbody>
</table>
<p>Un bon nœud marin se fait vite, tient sous la charge et se défait facilement. À l'épreuve pratique, on vous demandera souvent de réaliser un nœud de chaise et un nœud de taquet.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le nœud de cabestan sert à fixer un pare-battage ; il ne convient pas pour amarrer durablement un bateau soumis à des à-coups, car il peut glisser.</div>`
        }
      ],
      points_cles: [
        "Au port : vitesse limitée, pas de sillage, on tient sa droite",
        "On manœuvre lentement, de préférence face au vent ou au courant le plus fort",
        "Hélice à pas à droite : en marche arrière, l'arrière part vers bâbord",
        "Amarres : pointes avant et arrière ; les gardes empêchent le bateau d'avancer ou de reculer le long du quai",
        "Mouillage : abrité, bon fond, hors chenal et herbiers, place pour l'évitage",
        "Filer au moins 3 fois la hauteur d'eau en chaîne, 5 fois en cordage",
        "Prise de coffre : approche lente face au vent ou au courant, gaffe, point mort",
        "Chaise : boucle fixe ; cabestan : pare-battage ; huit : nœud d'arrêt"
      ]
    }
  );

  P.questions.push(
    { id: "NAV-001", chapitre: "carte-cap-route",
      q: "Un mille marin mesure :", options: ["1 852 mètres", "1 000 mètres", "1 609 mètres"], bonnes: [0],
      explication: "Le mille marin vaut 1 852 m, soit une minute de latitude. 1 609 m est le mille terrestre anglo-saxon." },
    { id: "NAV-002", chapitre: "carte-cap-route",
      q: "Sur une carte marine, je mesure une distance en milles :", options: ["Sur l'échelle des longitudes, en haut de la carte", "Sur l'échelle des latitudes, sur le bord vertical"], bonnes: [1],
      explication: "Une minute de latitude vaut un mille : on reporte la distance sur l'échelle des latitudes, à hauteur de la zone mesurée. La minute de longitude, elle, varie avec la latitude." },
    { id: "NAV-003", chapitre: "carte-cap-route",
      q: "Une vitesse de 1 nœud correspond à :", options: ["1 mille par heure", "1 kilomètre par heure", "1 mètre par seconde"], bonnes: [0],
      explication: "1 nœud = 1 mille marin par heure, soit 1,852 km/h." },
    { id: "NAV-004", chapitre: "carte-cap-route", situation: "Vous naviguez à 12 nœuds pendant 30 minutes.",
      q: "Je parcours :", options: ["24 milles", "12 milles", "6 milles"], bonnes: [2],
      explication: "Distance = vitesse × temps = 12 × 0,5 = 6 milles." },
    { id: "NAV-005", chapitre: "carte-cap-route", situation: "Vous devez parcourir 10 milles à la vitesse de 5 nœuds.",
      q: "Le trajet durera :", options: ["5 heures", "2 heures", "50 minutes"], bonnes: [1],
      explication: "Temps = distance / vitesse = 10 / 5 = 2 heures." },
    { id: "NAV-006", chapitre: "carte-cap-route",
      q: "La latitude d'un point se lit :", options: ["Sur les bords horizontaux de la carte", "Sur les bords verticaux de la carte"], bonnes: [1],
      explication: "La latitude se lit sur les côtés gauche et droit ; la longitude, en haut et en bas." },
    { id: "NAV-007", chapitre: "carte-cap-route",
      q: "Un bateau qui suit le cap 270 se dirige vers :", options: ["L'est", "L'ouest", "Le sud"], bonnes: [1],
      explication: "Les caps se comptent de 0 à 360° dans le sens des aiguilles d'une montre : 000 nord, 090 est, 180 sud, 270 ouest." },
    { id: "NAV-008", chapitre: "carte-cap-route",
      q: "L'écart entre le cap compas et le cap vrai provient :", options: ["De la déviation propre au bateau", "Du coefficient de marée", "De la déclinaison magnétique"], bonnes: [0, 2],
      explication: "La variation est la somme de la déclinaison (liée au lieu) et de la déviation (liée au bateau et au cap). La marée n'y joue aucun rôle." },
    { id: "NAV-009", chapitre: "carte-cap-route", situation: "Vous posez votre téléphone portable juste à côté du compas.",
      q: "Cela peut :", options: ["Fausser l'indication du compas", "N'avoir aucun effet"], bonnes: [0],
      explication: "Les objets métalliques et les appareils électroniques dévient l'aiguille du compas. On ne pose rien à proximité." },
    { id: "NAV-010", chapitre: "carte-cap-route", situation: "Vous tenez un cap constant vers un port, mais un courant traversier porte vers le sud.",
      q: "Mon bateau :", options: ["Est déporté vers le sud", "Peut passer sur un danger situé au sud de ma route prévue", "Suit exactement la direction de son cap"], bonnes: [0, 1],
      explication: "Le courant emporte le bateau : la route fond diffère du cap. Il faut corriger le cap du côté d'où vient le courant et vérifier sa position." },
    { id: "NAV-011", chapitre: "carte-cap-route",
      q: "Un courant « portant au 090 » :", options: ["Emmène le bateau vers l'est", "Vient de l'est"], bonnes: [0],
      explication: "Un courant se désigne par la direction vers laquelle il porte, contrairement au vent, désigné par la direction d'où il vient." },
    { id: "NAV-012", chapitre: "carte-cap-route",
      q: "Pour faire le point sans GPS, je peux utiliser :", options: ["La direction du vent", "Deux ou trois relèvements d'amers", "Un alignement de deux amers", "La sonde lue au sondeur, comparée à la carte"], bonnes: [1, 2, 3],
      explication: "Relèvements croisés, alignements et sondes permettent de déterminer ou de vérifier sa position. La direction du vent ne donne aucune position." },
    { id: "NAV-013", chapitre: "carte-cap-route",
      q: "Un amer est :", options: ["Un point remarquable à terre, porté sur la carte", "Un instrument de mesure", "Un haut-fond dangereux"], bonnes: [0],
      explication: "Les amers (clochers, phares, châteaux d'eau, pointes) servent de repères pour se situer et prendre des relèvements." },
    { id: "NAV-014", chapitre: "carte-cap-route",
      q: "Une encablure vaut environ :", options: ["Un dixième de mille, soit environ 185 m", "Un mille", "10 mètres"], bonnes: [0],
      explication: "L'encablure vaut un dixième de mille, environ 185 mètres ; on l'utilise pour les courtes distances." },
    { id: "NAV-015", chapitre: "manoeuvres-mouillage", situation: "Vous sortez du port de plaisance au milieu des pontons.",
      q: "Je dois :", options: ["Tenir ma droite", "Accélérer pour sortir rapidement", "Respecter la vitesse limite du port", "Éviter de faire du sillage"], bonnes: [0, 2, 3],
      explication: "Dans un port, on navigue à vitesse réduite, sans sillage, en tenant sa droite." },
    { id: "NAV-016", chapitre: "manoeuvres-mouillage",
      q: "Pour accoster, prendre un coffre ou mouiller, je m'approche de préférence :", options: ["Lentement, face au vent ou au courant", "Vite, vent arrière"], bonnes: [0],
      explication: "Face au vent ou au courant le plus fort, on contrôle sa vitesse et on peut s'arrêter facilement." },
    { id: "NAV-017", chapitre: "manoeuvres-mouillage", situation: "Votre bateau est équipé d'une hélice à pas à droite. Vous enclenchez la marche arrière.",
      q: "L'arrière du bateau a tendance à partir :", options: ["Vers tribord", "Vers bâbord"], bonnes: [1],
      explication: "En marche arrière, l'effet de pas d'une hélice à pas à droite fait chasser l'arrière vers bâbord. On l'utilise pour accoster." },
    { id: "NAV-018", chapitre: "manoeuvres-mouillage",
      situation: "Le long d'un quai, vous frappez une amarre à l'avant du bateau et la tournez sur le quai, en arrière de ce point.",
      q: "Cette garde empêche le bateau :", options: ["De reculer le long du quai", "De s'écarter du quai", "D'avancer le long du quai"], bonnes: [2],
      explication: "Une garde qui part de l'avant du bateau vers l'arrière sur le quai se tend quand le bateau avance : elle l'empêche d'avancer. La garde partant de l'arrière vers l'avant l'empêche de reculer." },
    { id: "NAV-019", chapitre: "manoeuvres-mouillage", situation: "Pendant l'accostage, votre bateau arrive un peu vite contre le ponton.",
      q: "Un équipier doit :", options: ["Utiliser une amarre ou un pare-battage", "Repousser le bateau avec le pied", "Sauter sur le ponton pour le retenir"], bonnes: [0],
      explication: "On ne retient jamais un bateau avec le corps et l'on ne saute pas : risque d'écrasement ou de chute entre la coque et le quai." },
    { id: "NAV-020", chapitre: "manoeuvres-mouillage",
      q: "Pour choisir un mouillage, je cherche :", options: ["Assez de place pour l'évitage", "Un fond de sable ou de vase", "Un endroit dans le chenal, où l'eau est profonde", "Un endroit abrité du vent prévu"], bonnes: [0, 1, 3],
      explication: "Un bon mouillage est abrité, sur un fond de bonne tenue, hors chenal et avec de la place pour tourner autour de l'ancre." },
    { id: "NAV-021", chapitre: "manoeuvres-mouillage", situation: "Vous mouillez par 5 m de fond avec une ligne tout chaîne.",
      q: "En règle pratique, je file au moins :", options: ["50 m de chaîne", "5 m de chaîne", "15 m de chaîne"], bonnes: [2],
      explication: "On file au moins 3 fois la hauteur d'eau avec une ligne tout chaîne (5 fois avec un cordage), davantage si le vent forcit." },
    { id: "NAV-022", chapitre: "manoeuvres-mouillage", situation: "Vous venez de mouiller. Vous voulez savoir si l'ancre tient.",
      q: "Je peux :", options: ["Surveiller deux amers alignés par le travers", "Considérer que l'ancre tient dès qu'elle touche le fond", "Vérifier ma position au GPS à intervalles réguliers"], bonnes: [0, 2],
      explication: "Un alignement d'amers ou la position GPS permettent de vérifier que le bateau ne dérape pas. L'ancre ne tient qu'une fois crochée." },
    { id: "NAV-023", chapitre: "manoeuvres-mouillage", situation: "Vous prenez un coffre. L'équipier vient de saisir l'organeau avec la gaffe.",
      q: "Le barreur doit :", options: ["Accélérer pour tendre l'amarre", "Mettre au point mort", "Veiller à ce que le bout ne passe pas sous la coque vers l'hélice"], bonnes: [1, 2],
      explication: "Dès que le coffre est saisi, on débraye pour ne pas prendre le bout ou la chaîne dans l'hélice." },
    { id: "NAV-024", chapitre: "manoeuvres-mouillage",
      q: "Pour faire une boucle fixe au bout d'une amarre, j'utilise :", options: ["Le nœud plat", "Le nœud de cabestan", "Le nœud de chaise"], bonnes: [2],
      explication: "Le nœud de chaise forme une boucle qui ne coulisse pas et se défait facilement même après avoir été chargée." },
    { id: "NAV-025", chapitre: "manoeuvres-mouillage",
      q: "Pour fixer rapidement un pare-battage sur une filière, j'utilise :", options: ["Le nœud de cabestan", "Le nœud d'écoute", "Le nœud en huit"], bonnes: [0],
      explication: "Le cabestan se fait et se règle vite : c'est le nœud du pare-battage. Le huit est un nœud d'arrêt ; l'écoute réunit deux bouts." },
    { id: "NAV-026", chapitre: "manoeuvres-mouillage",
      q: "Le nœud en huit sert à :", options: ["Empêcher un bout de sortir d'une poulie", "Amarrer le bateau à un anneau"], bonnes: [0],
      explication: "Le huit est un nœud d'arrêt. Pour amarrer sur un anneau, on utilise le tour mort et deux demi-clés." },
    { id: "NAV-027", chapitre: "manoeuvres-mouillage", situation: "Vous êtes amarré le long d'un quai fixe, dans un port à forte marée.",
      q: "Je dois :", options: ["Tendre les amarres au maximum", "Laisser assez de mou aux amarres ou les surveiller"], bonnes: [1],
      explication: "Le niveau de l'eau varie de plusieurs mètres : des amarres trop tendues peuvent suspendre le bateau ou casser à marée descendante." },
    { id: "NAV-028", chapitre: "manoeuvres-mouillage", situation: "Vous cherchez un mouillage. Un plateau rocheux est signalé par cette marque.", panneau: "MER_CARD_EST",
      q: "Je peux mouiller :", options: ["À l'est de la marque, à bonne distance", "Juste à l'ouest de la marque, à l'abri de la bouée"], bonnes: [0],
      explication: "Une cardinale Est a les eaux saines à l'est et le danger à l'ouest. On mouille du côté des eaux saines, en gardant de la place pour l'évitage." }
  );
})();
