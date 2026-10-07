/* Polymates — Médecine — Embryologie (PASS / 1re année) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["embryologie"] = {
  id: "embryologie",
  nom: "Embryologie",
  icone: "🧬",
  couleur: "#a07ac8",
  intro: "L'embryologie décrit le développement humain de la fécondation à la naissance : gamètes et fécondation, les quatre premières semaines (segmentation, implantation, gastrulation, neurulation), les annexes et la période fœtale, puis l'organogenèse appareil par appareil. Chaque chapitre associe chronologie précise, tableaux récapitulatifs, encarts, points clés, lexique et QCM de type concours.",
  parties: [
    {
      titre: "Partie 1 — Reproduction et gamètes",
      chapitres: [
        {
          id: "intro-chronologie",
          titre: "Introduction à l'embryologie et chronologie du développement",
          duree: 25,
          objectifs: [
            "Définir l'embryologie et situer ses trois grandes périodes (pré-embryonnaire, embryonnaire, fœtale).",
            "Convertir sans erreur une datation en semaines de développement (SD) en semaines d'aménorrhée (SA) et inversement.",
            "Connaître les repères chronologiques majeurs des huit premières semaines.",
            "Comprendre le principe des stades de Carnegie et leur intérêt.",
            "Savoir à quelle période l'embryon est le plus sensible aux agents tératogènes."
          ],
          sections: [
            {
              titre: "Définition et champ de l'embryologie",
              contenu: `<p>L'<strong>embryologie</strong> est la science qui étudie le développement d'un organisme depuis la fécondation jusqu'à la naissance. Elle décrit la succession des événements qui transforment une cellule unique, le <strong>zygote</strong>, en un organisme pluricellulaire organisé en tissus et en organes. On distingue classiquement l'embryologie <em>descriptive</em> (morphogenèse : description des formes successives), l'embryologie <em>causale</em> ou expérimentale (mécanismes moléculaires et cellulaires : inductions, gradients de morphogènes, gènes du développement) et la <em>tératologie</em> (étude des malformations congénitales).</p>
<p>Le développement humain fait appel à un nombre limité de mécanismes cellulaires fondamentaux, qu'il faut connaître car ils reviennent dans tous les chapitres :</p>
<ul>
<li>la <strong>prolifération</strong> (multiplication cellulaire par mitoses) ;</li>
<li>la <strong>différenciation</strong> (acquisition d'un phénotype spécialisé par expression sélective de gènes) ;</li>
<li>la <strong>migration</strong> (déplacement de cellules ou de populations cellulaires, par exemple les cellules des crêtes neurales ou les cellules germinales primordiales) ;</li>
<li>l'<strong>induction</strong> (une population cellulaire modifie le devenir d'une population voisine par des signaux, par exemple la notochorde induit la plaque neurale) ;</li>
<li>l'<strong>apoptose</strong> (mort cellulaire programmée, indispensable par exemple à la séparation des doigts) ;</li>
<li>la <strong>transition épithélio-mésenchymateuse</strong> (des cellules épithéliales perdent leurs jonctions et deviennent des cellules migratrices, comme lors de la gastrulation).</li>
</ul>
<p>La <strong>période prénatale</strong> dure en moyenne <strong>266 jours</strong> (38 semaines) à partir de la fécondation, soit <strong>280 jours</strong> (40 semaines) à partir du premier jour des dernières règles. Elle est suivie de la période post-natale (nouveau-né jusqu'à 28 jours, nourrisson jusqu'à 2 ans, enfant, adolescent) qui relève de la pédiatrie. Le développement ne s'arrête d'ailleurs pas à la naissance : la maturation du système nerveux, des poumons, des reins et du squelette se poursuit pendant des années, et l'embryologie éclaire de nombreuses pathologies de l'enfant et de l'adulte (malformations, tumeurs embryonnaires, vestiges).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'embryon est le produit du développement de la fécondation à la fin de la 8<sup>e</sup> semaine de développement ; à partir de la 9<sup>e</sup> semaine, on parle de <strong>fœtus</strong>. Ce passage correspond au moment où toutes les ébauches d'organes sont en place (fin de l'organogenèse).</div>`
            },
            {
              titre: "Les trois grandes périodes du développement",
              contenu: `<p>Le développement prénatal est découpé en trois périodes de durée très inégale, mais chacune marquée par des événements spécifiques.</p>
<h4>1. La période pré-embryonnaire (semaines 1 à 2)</h4>
<p>Elle commence à la fécondation (jour 0) et se termine à la fin de la 2<sup>e</sup> semaine. Elle est dominée par la <strong>segmentation</strong> (divisions mitotiques du zygote sans croissance), la formation du <strong>blastocyste</strong>, la <strong>migration tubaire</strong>, puis l'<strong>implantation</strong> dans l'endomètre (du 6<sup>e</sup> au 12<sup>e</sup> jour environ) et la constitution du <strong>disque embryonnaire didermique</strong> (épiblaste et hypoblaste). Durant cette période, les cellules sont encore largement <em>totipotentes</em> puis <em>pluripotentes</em> : une agression entraîne soit la mort de l'embryon, soit une compensation complète (loi du <strong>« tout ou rien »</strong>). C'est aussi la période où la séparation du matériel embryonnaire peut donner des jumeaux monozygotes.</p>
<h4>2. La période embryonnaire (semaines 3 à 8)</h4>
<p>Elle débute avec la <strong>gastrulation</strong> (3<sup>e</sup> semaine), qui met en place les trois feuillets primitifs (ectoblaste, mésoblaste, entoblaste) et l'axe du corps. Elle comprend ensuite la <strong>neurulation</strong>, la <strong>délimitation</strong> de l'embryon (4<sup>e</sup> semaine) et l'<strong>organogenèse</strong>, c'est-à-dire la mise en place des ébauches de tous les organes (semaines 4 à 8). C'est la période de <strong>morphogenèse</strong> par excellence : l'embryon passe d'un disque plat de 0,2 mm à un organisme de 30 mm (longueur vertex-coccyx) à la fin de la 8<sup>e</sup> semaine, avec une face, des membres, un cœur battant et des organes reconnaissables. C'est aussi la période de <strong>sensibilité maximale aux agents tératogènes</strong> : une agression provoque des <strong>malformations majeures</strong>.</p>
<h4>3. La période fœtale (semaines 9 à 38)</h4>
<p>Elle est caractérisée par la <strong>croissance</strong> (le fœtus passe de 30 mm et 8 g à environ 50 cm et 3 300 g) et par la <strong>maturation histologique et fonctionnelle</strong> des organes déjà formés. Les agressions tératogènes y provoquent surtout des anomalies fonctionnelles (retard mental, surdité), des retards de croissance ou des malformations mineures, à l'exception du système nerveux central, des yeux et des organes génitaux externes qui restent sensibles plus longtemps.</p>
<table>
<thead><tr><th>Période</th><th>Bornes</th><th>Événements dominants</th><th>Effet d'une agression</th></tr></thead>
<tbody>
<tr><td>Pré-embryonnaire</td><td>Semaines 1 et 2</td><td>Segmentation, blastocyste, implantation, disque didermique</td><td>Loi du tout ou rien (mort ou récupération)</td></tr>
<tr><td>Embryonnaire</td><td>Semaines 3 à 8</td><td>Gastrulation, neurulation, délimitation, organogenèse</td><td>Malformations majeures</td></tr>
<tr><td>Fœtale</td><td>Semaines 9 à 38</td><td>Croissance, maturation des organes</td><td>Anomalies fonctionnelles, retard de croissance</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Datation : semaines de développement et semaines d'aménorrhée",
              contenu: `<p>Deux systèmes de datation coexistent et sont une source classique d'erreurs au concours.</p>
<p>L'<strong>âge réel</strong> ou <strong>âge de développement</strong> est compté à partir de la <strong>fécondation</strong> (jour 0 ou jour 1 selon les ouvrages ; nous retenons la fécondation comme point de départ). Il s'exprime en jours ou en <strong>semaines de développement (SD)</strong>, parfois appelées semaines de grossesse (SG) ou semaines post-conceptionnelles. C'est le système utilisé par les embryologistes.</p>
<p>L'<strong>âge gestationnel</strong> ou <strong>âge obstétrical</strong> est compté à partir du <strong>premier jour des dernières règles</strong> (date des dernières règles, DDR). Il s'exprime en <strong>semaines d'aménorrhée (SA)</strong>. C'est le système utilisé par les cliniciens, car la date des dernières règles est connue de la patiente alors que la date exacte de la fécondation ne l'est pas. Dans un cycle théorique de 28 jours, l'ovulation (et donc la fécondation) survient au 14<sup>e</sup> jour, soit deux semaines après le début des règles.</p>
<div class="encart" data-type="methode"><strong>Méthode :</strong> <strong>SA = SD + 2</strong>. Une grossesse dure 38 SD soit 40 SA ; l'embryon de 8 SD a 10 SA ; le terme est fixé à 41 SA en France (datation à 40 SA + 6 jours avec une marge). La première échographie dite « de datation » est réalisée entre 11 et 13 SA + 6 jours, soit entre 9 et 11 SD + 6 jours.</div>
<p>Repères pratiques :</p>
<ul>
<li>Le <strong>test de grossesse</strong> urinaire se positive vers 4 SA (soit 14 jours après la fécondation, date théorique des règles manquantes) ; l'hCG plasmatique est détectable dès le 8<sup>e</sup>-10<sup>e</sup> jour de développement.</li>
<li>L'<strong>activité cardiaque</strong> est visible à l'échographie endovaginale à partir de 6 SA environ.</li>
<li>La <strong>longueur cranio-caudale (LCC)</strong> mesurée à l'échographie du premier trimestre permet de dater la grossesse à plus ou moins 3 à 5 jours : elle est d'environ 45 mm à 11 SA et 84 mm à 13 SA + 6 jours.</li>
<li>La <strong>viabilité</strong> fœtale est admise à partir de 22 SA ou d'un poids de 500 g (critères de l'OMS).</li>
<li>La naissance est dite <strong>prématurée</strong> avant 37 SA, <strong>à terme</strong> entre 37 et 41 SA, et <strong>post-terme</strong> au-delà de 42 SA.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> les énoncés d'embryologie utilisent presque toujours les semaines de développement, les énoncés de gynécologie-obstétrique les semaines d'aménorrhée. Toujours vérifier l'unité. « La gastrulation a lieu à la 3<sup>e</sup> semaine » signifie 3<sup>e</sup> SD, soit 5<sup>e</sup> SA ; une proposition affirmant qu'elle survient « à 3 SA » est fausse (à 3 SA, la fécondation vient à peine d'avoir lieu).</div>`
            },
            {
              titre: "Les stades de Carnegie",
              contenu: `<p>La datation en jours ou en semaines a l'inconvénient d'être imprécise, car deux embryons du même âge chronologique peuvent présenter des degrés de développement différents (variabilité individuelle de 1 à 3 jours). Pour comparer les embryons entre eux, les embryologistes utilisent une classification fondée non pas sur l'âge mais sur des <strong>critères morphologiques</strong> : les <strong>stades de Carnegie</strong>, établis à partir de la collection d'embryons humains de la Carnegie Institution de Washington (Streeter, puis O'Rahilly et Müller).</p>
<p>Il existe <strong>23 stades</strong>, qui couvrent exclusivement la <strong>période embryonnaire</strong> (de la fécondation à la fin de la 8<sup>e</sup> semaine, soit environ 56 à 60 jours). Au-delà, la période fœtale n'est plus décrite par stades, mais par l'âge et les mensurations (longueur vertex-coccyx, longueur vertex-talon, poids).</p>
<table>
<thead><tr><th>Stade de Carnegie</th><th>Âge approximatif</th><th>Taille</th><th>Critères morphologiques</th></tr></thead>
<tbody>
<tr><td>1</td><td>Jour 1</td><td>0,1 mm</td><td>Zygote (ovocyte fécondé)</td></tr>
<tr><td>2</td><td>Jours 2 à 3</td><td>0,1 mm</td><td>Segmentation, de 2 à 16 cellules (morula)</td></tr>
<tr><td>3</td><td>Jours 4 à 5</td><td>0,1 à 0,2 mm</td><td>Blastocyste libre</td></tr>
<tr><td>4</td><td>Jour 6</td><td>0,1 à 0,2 mm</td><td>Blastocyste accolé à l'endomètre</td></tr>
<tr><td>5</td><td>Jours 7 à 12</td><td>0,1 à 0,2 mm</td><td>Implantation, disque didermique, cavité amniotique</td></tr>
<tr><td>6</td><td>Jours 13 à 15</td><td>0,2 mm</td><td>Villosités choriales, apparition de la ligne primitive</td></tr>
<tr><td>7</td><td>Jours 15 à 17</td><td>0,4 mm</td><td>Gastrulation, processus notochordal</td></tr>
<tr><td>8</td><td>Jours 17 à 19</td><td>1 à 1,5 mm</td><td>Canal neurentérique, plaque neurale</td></tr>
<tr><td>9</td><td>Jours 19 à 21</td><td>1,5 à 2,5 mm</td><td>Premiers somites (1 à 3 paires), gouttière neurale</td></tr>
<tr><td>10</td><td>Jours 22 à 23</td><td>2 à 3,5 mm</td><td>Début de fermeture du tube neural, 4 à 12 somites, premiers battements cardiaques</td></tr>
<tr><td>11</td><td>Jours 23 à 26</td><td>2,5 à 4,5 mm</td><td>Fermeture du neuropore rostral, 13 à 20 somites</td></tr>
<tr><td>12</td><td>Jours 26 à 30</td><td>3 à 5 mm</td><td>Fermeture du neuropore caudal, bourgeons des membres supérieurs, 3 arcs pharyngiens</td></tr>
<tr><td>13</td><td>Jours 28 à 32</td><td>4 à 6 mm</td><td>Bourgeons des membres inférieurs, 4 arcs pharyngiens, placode optique</td></tr>
<tr><td>14 à 16</td><td>Jours 32 à 40</td><td>5 à 11 mm</td><td>Cupule optique, palettes des mains, vésicule otique, rayons digitaux</td></tr>
<tr><td>17 à 19</td><td>Jours 41 à 50</td><td>11 à 18 mm</td><td>Doigts individualisés, pavillon de l'oreille, paupières</td></tr>
<tr><td>20 à 23</td><td>Jours 51 à 56</td><td>18 à 30 mm</td><td>Orteils séparés, fusion des paupières, aspect humain reconnaissable</td></tr>
</tbody>
</table>
<p>Il n'est pas demandé au concours de connaître les 23 stades par cœur, mais il faut retenir le principe (classification morphologique, 23 stades, période embryonnaire uniquement) et quelques correspondances clés : stade 3 = blastocyste, stade 7 = gastrulation, stade 9 = premiers somites, stade 10 = début de fermeture du tube neural, stade 23 = fin de la période embryonnaire.</p>`
            },
            {
              titre: "Chronologie synthétique des huit premières semaines",
              contenu: `<p>Le tableau suivant constitue le squelette de tout le cours : chaque ligne sera détaillée dans les chapitres correspondants. Il doit être parfaitement connu.</p>
<table>
<thead><tr><th>Semaine de développement</th><th>Événements majeurs</th></tr></thead>
<tbody>
<tr><td><strong>1<sup>re</sup> semaine</strong> (jours 0 à 7)</td><td>Fécondation dans l'ampoule tubaire (J0). Segmentation : 2 cellules (J1, 30 h), 4 cellules (J2), 8 cellules et compaction (J3), morula de 16 à 32 cellules (J4), blastocyste (J5), éclosion hors de la zone pellucide (J5-J6), début de l'implantation (J6-J7).</td></tr>
<tr><td><strong>2<sup>e</sup> semaine</strong> (jours 8 à 14)</td><td>« Semaine des deux » : implantation interstitielle ; trophoblaste en 2 couches (cytotrophoblaste et syncytiotrophoblaste) ; disque embryonnaire didermique (épiblaste et hypoblaste) ; 2 cavités (cavité amniotique, vésicule vitelline primaire puis secondaire) ; mésoderme extra-embryonnaire en 2 lames (somatopleure et splanchnopleure) ; cœlome extra-embryonnaire ; lacunes trophoblastiques et sécrétion d'hCG ; implantation terminée vers J12.</td></tr>
<tr><td><strong>3<sup>e</sup> semaine</strong> (jours 15 à 21)</td><td>« Semaine des trois » : gastrulation à partir de la ligne primitive (J15) ; 3 feuillets (ectoblaste, mésoblaste, entoblaste) ; notochorde ; début de la neurulation (plaque neurale J18) ; allantoïde ; villosités choriales primaires, secondaires puis tertiaires ; apparition des premiers vaisseaux et de l'ébauche cardiaque ; cellules germinales primordiales dans la paroi vitelline.</td></tr>
<tr><td><strong>4<sup>e</sup> semaine</strong> (jours 22 à 28)</td><td>Fermeture du tube neural (neuropore rostral J25, neuropore caudal J27-28) ; crêtes neurales ; somites (3 paires par jour, 30 paires à J28) ; délimitation de l'embryon ; premiers battements cardiaques (J22) ; bourgeons des membres supérieurs (J26) et inférieurs (J28) ; arcs pharyngiens ; bourgeon pulmonaire ; placodes.</td></tr>
<tr><td><strong>5<sup>e</sup> à 8<sup>e</sup> semaines</strong></td><td>Organogenèse : cloisonnement cardiaque, développement de la face, des membres (palettes puis doigts), rotation de l'anse intestinale, gonades, vésicules cérébrales. L'embryon mesure 30 mm à la fin de la 8<sup>e</sup> semaine.</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le moyen mnémotechnique « 1 = segmentation, 2 = disque à deux feuillets, 3 = trois feuillets, 4 = délimitation et fermeture du tube neural » résume les quatre premières semaines.</div>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> connaître la chronologie permet de dater une agression tératogène à partir de la malformation observée. Une anomalie de fermeture du tube neural (spina bifida, anencéphalie) témoigne d'un trouble survenu avant le 28<sup>e</sup> jour, souvent avant même que la femme ne sache qu'elle est enceinte ; d'où la recommandation de supplémentation en acide folique (0,4 mg par jour) dès le projet de grossesse et jusqu'à 12 SA.</div>`
            }
          ],
          points_cles: [
            "La période pré-embryonnaire couvre les semaines 1 et 2 (segmentation, implantation, disque didermique) et obéit à la loi du tout ou rien.",
            "La période embryonnaire s'étend de la 3e à la 8e semaine de développement : gastrulation, neurulation, délimitation puis organogenèse ; c'est la période de sensibilité maximale aux tératogènes.",
            "La période fœtale (9e à 38e semaine) est dominée par la croissance et la maturation fonctionnelle des organes.",
            "SA = SD + 2 : la grossesse dure 38 semaines de développement soit 40 semaines d'aménorrhée ; le terme est fixé à 41 SA.",
            "Les stades de Carnegie (23 stades) sont une classification morphologique, et non chronologique, de la seule période embryonnaire.",
            "Repères : premiers battements cardiaques vers J22, fermeture du neuropore rostral vers J25 et du neuropore caudal vers J27-28, bourgeons des membres supérieurs à J26 et inférieurs à J28.",
            "L'embryon mesure 0,2 mm à la fin de la 2e semaine, 4 mm à la fin de la 4e semaine et 30 mm à la fin de la 8e semaine.",
            "La viabilité fœtale est admise à partir de 22 SA ou 500 g ; la prématurité se définit par une naissance avant 37 SA."
          ],
          lexique: [
            { terme: "Zygote", def: "Cellule diploïde unique issue de la fécondation, première cellule du nouvel individu." },
            { terme: "Embryon", def: "Produit du développement de la fécondation à la fin de la 8e semaine de développement." },
            { terme: "Fœtus", def: "Produit du développement de la 9e semaine de développement à la naissance." },
            { terme: "Semaine d'aménorrhée (SA)", def: "Unité de datation obstétricale comptée à partir du premier jour des dernières règles ; SA = SD + 2." },
            { terme: "Semaine de développement (SD)", def: "Unité de datation embryologique comptée à partir de la fécondation." },
            { terme: "Stades de Carnegie", def: "Classification en 23 stades morphologiques des embryons humains de la fécondation à la fin de la 8e semaine." },
            { terme: "Organogenèse", def: "Mise en place des ébauches de tous les organes, de la 4e à la 8e semaine de développement." },
            { terme: "Loi du tout ou rien", def: "Principe selon lequel une agression durant les deux premières semaines entraîne soit la mort de l'embryon, soit une récupération complète sans malformation." },
            { terme: "Induction", def: "Mécanisme par lequel un tissu modifie le destin d'un tissu voisin par l'émission de signaux moléculaires." }
          ],
          qcm: [
            {
              q: "Concernant la chronologie du développement humain, quelles sont les propositions exactes ?",
              options: [
                "A. La période embryonnaire s'étend de la fécondation à la fin de la 8e semaine de développement.",
                "B. La période fœtale débute à la 9e semaine de développement.",
                "C. La gastrulation a lieu au cours de la 2e semaine de développement.",
                "D. Les premiers battements cardiaques apparaissent vers le 22e jour.",
                "E. La durée moyenne de la grossesse est de 38 semaines d'aménorrhée."
              ],
              bonnes: [1, 3],
              explication: "A est fausse : au sens strict, la période embryonnaire va de la 3e à la 8e semaine, les deux premières semaines constituant la période pré-embryonnaire (certains auteurs incluent toutefois les 8 premières semaines dans la période embryonnaire au sens large ; dans un QCM distinguant les trois périodes, retenir la distinction). B est vraie : le fœtus se définit à partir de la 9e semaine. C est fausse : la gastrulation a lieu à la 3e semaine. D est vraie : le tube cardiaque commence à battre vers J21-J22. E est fausse : la grossesse dure 38 semaines de développement soit 40 semaines d'aménorrhée."
            },
            {
              q: "À propos de la datation de la grossesse :",
              options: [
                "A. Les semaines d'aménorrhée sont comptées à partir de la date présumée de la fécondation.",
                "B. Une grossesse de 10 semaines d'aménorrhée correspond à un embryon de 8 semaines de développement.",
                "C. Le terme théorique est fixé à 41 semaines d'aménorrhée en France.",
                "D. L'échographie de datation du premier trimestre se fonde sur la longueur cranio-caudale.",
                "E. Un enfant né à 36 semaines d'aménorrhée est considéré comme né à terme."
              ],
              bonnes: [1, 2, 3],
              explication: "A est fausse : les SA sont comptées à partir du premier jour des dernières règles, soit deux semaines avant la fécondation. B est vraie : SD = SA - 2. C est vraie. D est vraie : la LCC entre 11 et 13 SA + 6 jours date la grossesse à 3-5 jours près. E est fausse : la naissance à terme se situe entre 37 et 41 SA ; à 36 SA l'enfant est prématuré."
            },
            {
              q: "Concernant les stades de Carnegie :",
              options: [
                "A. Ils sont au nombre de 23.",
                "B. Ils reposent sur l'âge chronologique exact de l'embryon.",
                "C. Ils couvrent la totalité de la période prénatale, jusqu'à la naissance.",
                "D. Le stade 23 correspond à la fin de la période embryonnaire.",
                "E. Deux embryons du même âge peuvent appartenir à des stades différents."
              ],
              bonnes: [0, 3, 4],
              explication: "A est vraie. B est fausse : les stades sont définis par des critères morphologiques, précisément parce que l'âge chronologique est imprécis. C est fausse : ils ne couvrent que la période embryonnaire (8 premières semaines). D est vraie. E est vraie : la variabilité individuelle explique que l'âge et le stade ne coïncident pas toujours."
            },
            {
              q: "Parmi les événements suivants, lesquels surviennent au cours de la 4e semaine de développement ?",
              options: [
                "A. La fermeture du neuropore caudal.",
                "B. L'apparition de la ligne primitive.",
                "C. L'apparition des bourgeons des membres.",
                "D. L'implantation du blastocyste.",
                "E. La délimitation de l'embryon."
              ],
              bonnes: [0, 2, 4],
              explication: "A est vraie : le neuropore caudal se ferme vers J27-28. B est fausse : la ligne primitive apparaît au début de la 3e semaine (J15). C est vraie : bourgeons des membres supérieurs vers J26, inférieurs vers J28. D est fausse : l'implantation a lieu de J6 à J12 (1re et 2e semaines). E est vraie : les plicatures de délimitation ont lieu durant la 4e semaine."
            },
            {
              q: "Concernant la sensibilité aux agents tératogènes :",
              options: [
                "A. Pendant les deux premières semaines, une agression entraîne généralement soit la mort de l'embryon, soit une récupération complète.",
                "B. La période de sensibilité maximale aux malformations majeures est la période embryonnaire (semaines 3 à 8).",
                "C. Au cours de la période fœtale, aucun organe ne peut plus être atteint.",
                "D. Le système nerveux central reste sensible aux tératogènes pendant la période fœtale.",
                "E. Une anomalie de fermeture du tube neural résulte d'une agression survenue après le 2e mois."
              ],
              bonnes: [0, 1, 3],
              explication: "A est vraie : c'est la loi du tout ou rien. B est vraie. C est fausse : la période fœtale est moins sensible, mais des anomalies fonctionnelles ou de croissance restent possibles. D est vraie : le SNC, les yeux, les dents et les organes génitaux externes restent sensibles au-delà de la 8e semaine. E est fausse : le tube neural se ferme avant la fin de la 4e semaine, l'agression est donc antérieure à J28."
            },
            {
              q: "Quelles mesures ou repères sont exacts ?",
              options: [
                "A. L'embryon mesure environ 30 mm (longueur vertex-coccyx) à la fin de la 8e semaine de développement.",
                "B. Le disque embryonnaire mesure environ 0,2 mm à la fin de la 2e semaine.",
                "C. La viabilité fœtale est admise à partir de 22 SA ou 500 g.",
                "D. Le test de grossesse urinaire se positive dès le lendemain de la fécondation.",
                "E. L'activité cardiaque embryonnaire est visible à l'échographie vers 6 SA."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'hCG n'est sécrétée qu'après l'implantation (à partir de J7-J8) et le test urinaire ne se positive qu'au moment des règles manquantes, soit environ 14 jours après la fécondation."
            }
          ]
        },
        {
          id: "spermatogenese",
          titre: "La spermatogenèse",
          duree: 35,
          objectifs: [
            "Décrire l'organisation du testicule et du tube séminifère (cellules germinales, cellules de Sertoli, cellules de Leydig).",
            "Détailler les trois phases de la spermatogenèse et leur durée : spermatocytogenèse, méiose, spermiogenèse.",
            "Décrire la structure du spermatozoïde mature et le rôle de chacune de ses parties.",
            "Expliquer la régulation hormonale par l'axe hypothalamo-hypophyso-testiculaire.",
            "Connaître les paramètres du spermogramme et leurs valeurs seuils (OMS 2010 et 2021)."
          ],
          sections: [
            {
              titre: "Le testicule et le tube séminifère",
              contenu: `<p>La <strong>spermatogenèse</strong> est l'ensemble des processus qui conduisent, chez l'homme, de la cellule souche germinale (spermatogonie) au gamète mâle différencié (spermatozoïde). Elle se déroule dans les <strong>tubes séminifères</strong> du testicule, de la puberté jusqu'à la fin de la vie, de façon <strong>continue</strong>, ce qui l'oppose à l'ovogenèse, discontinue et limitée dans le temps.</p>
<p>Le <strong>testicule</strong> adulte est un organe ovoïde de 4 à 5 cm de long, 2,5 cm de large, pesant 15 à 20 g, de volume 15 à 25 mL, logé dans le scrotum où la température (<strong>34 à 35 °C</strong>, soit 2 à 3 °C de moins que la température centrale) est indispensable au bon déroulement de la spermatogenèse. Il est entouré d'une capsule conjonctive épaisse, l'<strong>albuginée</strong>, qui envoie des cloisons délimitant 200 à 300 <strong>lobules</strong>. Chaque lobule contient 1 à 4 tubes séminifères contournés, de 30 à 80 cm de long et 150 à 250 µm de diamètre ; mis bout à bout, les tubes séminifères d'un testicule mesurent 250 à 500 m. Ils se poursuivent par les tubes droits, le rete testis, puis les canaux efférents qui gagnent l'épididyme.</p>
<p>Entre les tubes se trouve le <strong>tissu interstitiel</strong>, qui contient les vaisseaux, les nerfs et les <strong>cellules de Leydig</strong>, cellules endocrines sécrétant la <strong>testostérone</strong> sous l'action de la LH.</p>
<h4>La paroi du tube séminifère</h4>
<p>Le tube séminifère est limité par une <strong>gaine péritubulaire</strong> (lame basale et cellules myoïdes contractiles) et bordé par l'<strong>épithélium séminifère</strong>, formé de deux populations cellulaires :</p>
<ul>
<li>les <strong>cellules germinales</strong>, disposées en couches concentriques de la périphérie (spermatogonies, sur la lame basale) vers la lumière (spermatocytes, spermatides, spermatozoïdes) ;</li>
<li>les <strong>cellules de Sertoli</strong>, cellules somatiques de soutien, hautes, pyramidales, s'étendant de la lame basale jusqu'à la lumière, qui enserrent les cellules germinales dans leurs replis cytoplasmiques.</li>
</ul>
<h4>Les cellules de Sertoli</h4>
<p>Les cellules de Sertoli ne se divisent plus après la puberté. Leur nombre (environ 1 milliard par testicule) conditionne la production de spermatozoïdes. Leurs fonctions sont multiples :</p>
<ul>
<li><strong>Soutien et nutrition</strong> des cellules germinales (apport de lactate, de transferrine).</li>
<li><strong>Barrière hémato-testiculaire</strong> : les jonctions serrées entre cellules de Sertoli voisines divisent l'épithélium en un <strong>compartiment basal</strong> (spermatogonies et spermatocytes I en préleptotène) et un <strong>compartiment adluminal</strong> (spermatocytes en méiose, spermatides). Cette barrière protège les cellules haploïdes, porteuses d'antigènes « étrangers » apparaissant après la puberté, du système immunitaire, et crée un microenvironnement spécifique.</li>
<li><strong>Phagocytose</strong> des corps résiduels et des cellules germinales dégénérées.</li>
<li><strong>Fonction endocrine et paracrine</strong> : sécrétion de l'<strong>ABP</strong> (androgen binding protein, qui concentre la testostérone dans le tube), de l'<strong>inhibine B</strong> (rétrocontrôle négatif sur la FSH), de l'AMH (hormone antimüllérienne, surtout pendant la vie fœtale), d'activine, de facteurs de croissance et du fluide tubulaire.</li>
<li><strong>Spermiation</strong> : libération des spermatozoïdes dans la lumière.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> cellules de Sertoli = cibles de la <strong>FSH</strong>, sécrètent l'inhibine B et l'ABP ; cellules de Leydig = cibles de la <strong>LH</strong>, sécrètent la testostérone. Les cellules de Sertoli sont dans le tube, les cellules de Leydig en dehors.</div>`
            },
            {
              titre: "Vue d'ensemble : trois phases et une durée de 74 jours",
              contenu: `<p>La spermatogenèse dure environ <strong>74 jours</strong> chez l'homme (64 à 74 jours selon les auteurs), auxquels s'ajoutent 10 à 14 jours de transit épididymaire. Elle comporte trois phases successives :</p>
<ol>
<li>La <strong>spermatocytogenèse</strong> (phase de multiplication, environ 27 jours) : les spermatogonies se multiplient par mitoses et donnent les spermatocytes I.</li>
<li>La <strong>méiose</strong> (phase de maturation, environ 24 jours) : chaque spermatocyte I (2n, diploïde, 46 chromosomes) donne 2 spermatocytes II puis 4 <strong>spermatides</strong> (n, haploïdes, 23 chromosomes).</li>
<li>La <strong>spermiogenèse</strong> (phase de différenciation, environ 23 jours) : les spermatides rondes se transforment, sans division, en spermatozoïdes.</li>
</ol>
<table>
<thead><tr><th>Phase</th><th>Cellules de départ</th><th>Cellules d'arrivée</th><th>Mécanisme</th><th>Ploïdie</th><th>Durée</th></tr></thead>
<tbody>
<tr><td>Spermatocytogenèse</td><td>Spermatogonies Ad, Ap, B</td><td>Spermatocytes I</td><td>Mitoses</td><td>2n (46 chromosomes, 2C puis 4C ADN)</td><td>27 jours</td></tr>
<tr><td>Méiose I</td><td>Spermatocyte I</td><td>2 spermatocytes II</td><td>Division réductionnelle</td><td>n (23 chromosomes à 2 chromatides, 2C)</td><td>23 jours (prophase I longue)</td></tr>
<tr><td>Méiose II</td><td>Spermatocyte II</td><td>2 spermatides</td><td>Division équationnelle</td><td>n (23 chromosomes à 1 chromatide, 1C)</td><td>Quelques heures (moins d'un jour)</td></tr>
<tr><td>Spermiogenèse</td><td>Spermatide</td><td>Spermatozoïde</td><td>Différenciation sans division</td><td>n, 1C</td><td>23 jours</td></tr>
</tbody>
</table>
<p>Au total, un spermatocyte I donne théoriquement <strong>4 spermatozoïdes</strong> (contre 1 seul ovocyte fonctionnel pour un ovocyte I). La production journalière est de l'ordre de 100 à 200 millions de spermatozoïdes, soit environ 1 000 par seconde. Le rendement n'est toutefois pas parfait : 25 à 75 % des cellules germinales dégénèrent par apoptose au cours du processus.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la durée de la spermatogenèse (74 jours) est une constante : elle n'est pas modifiée par la FSH ou la testostérone, qui agissent sur la <em>quantité</em> de cellules engagées et non sur la vitesse. Une agression (fièvre, chimiothérapie) a des conséquences visibles sur le spermogramme avec un décalage d'environ 2 à 3 mois.</div>`
            },
            {
              titre: "La spermatocytogenèse et la méiose",
              contenu: `<h4>Les spermatogonies</h4>
<p>Les <strong>spermatogonies</strong> sont les cellules souches de la lignée germinale. Elles dérivent des <strong>cellules germinales primordiales</strong> (gonocytes) qui ont colonisé la gonade à la 5<sup>e</sup> semaine du développement et sont restées quiescentes jusqu'à la puberté. Situées contre la lame basale (compartiment basal), elles sont de petite taille (10 à 12 µm). On en distingue trois types chez l'homme :</p>
<ul>
<li>les spermatogonies <strong>Ad</strong> (<em>dark</em>, à noyau sombre) : cellules souches de réserve, se divisant rarement, assurant le renouvellement du stock ;</li>
<li>les spermatogonies <strong>Ap</strong> (<em>pale</em>, à noyau clair) : cellules souches engagées, qui se divisent par mitoses pour donner d'autres Ap et des spermatogonies B ;</li>
<li>les spermatogonies <strong>B</strong> : cellules de différenciation qui se divisent une dernière fois par mitose pour donner les <strong>spermatocytes I</strong> (spermatocytes de premier ordre, ou primaires).</li>
</ul>
<p>Une particularité importante : les cytodiérèses sont incomplètes, de sorte que les cellules issues d'une même spermatogonie restent reliées par des <strong>ponts cytoplasmiques</strong> et évoluent de manière synchrone en « clones » jusqu'à la spermiation.</p>
<h4>La méiose</h4>
<p>Le spermatocyte I, après la réplication de son ADN (phase S, il devient 2n/4C), franchit la barrière hémato-testiculaire et passe dans le compartiment adluminal pour entrer en <strong>méiose</strong>. La <strong>prophase I</strong> est très longue (environ 3 semaines) et comprend les stades classiques :</p>
<ul>
<li><strong>leptotène</strong> : condensation des chromosomes en fins filaments ;</li>
<li><strong>zygotène</strong> : appariement des chromosomes homologues (synapsis) grâce au complexe synaptonémal, formation des bivalents (tétrades) ;</li>
<li><strong>pachytène</strong> : stade le plus long ; <strong>crossing-over</strong> (recombinaison génétique) entre chromatides homologues ;</li>
<li><strong>diplotène</strong> : séparation partielle des homologues, qui restent unis par les <strong>chiasmas</strong> ;</li>
<li><strong>diacinèse</strong> : condensation maximale, disparition de l'enveloppe nucléaire.</li>
</ul>
<p>Le spermatocyte I est la plus grosse cellule de la lignée (15 à 20 µm). La métaphase, l'anaphase et la télophase I conduisent à deux <strong>spermatocytes II</strong> (haploïdes, 23 chromosomes à deux chromatides, n/2C), plus petits et à durée de vie très brève (quelques heures, ce qui les rend rares sur les coupes histologiques). La <strong>méiose II</strong>, sans réplication préalable, sépare les chromatides sœurs et produit quatre <strong>spermatides</strong> (n/1C), petites cellules rondes de 7 à 8 µm situées près de la lumière.</p>
<p>La méiose a deux fonctions : la <strong>réduction de moitié</strong> du nombre de chromosomes (indispensable pour que la fécondation restaure la diploïdie) et le <strong>brassage génétique</strong> (brassage interchromosomique par répartition aléatoire des homologues, brassage intrachromosomique par crossing-over). Chez l'homme, la moitié des spermatozoïdes porte un chromosome X et l'autre moitié un chromosome Y : c'est le <strong>spermatozoïde qui détermine le sexe génétique</strong>.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les erreurs de méiose (non-disjonction) produisent des gamètes aneuploïdes (24 ou 22 chromosomes). Chez l'homme, les non-disjonctions concernent surtout les chromosomes sexuels : la moitié des syndromes de Klinefelter (47,XXY) et la totalité des 47,XYY sont d'origine paternelle. La trisomie 21 est en revanche d'origine maternelle dans 90 % des cas.</div>`
            },
            {
              titre: "La spermiogenèse",
              contenu: `<p>La <strong>spermiogenèse</strong> est la transformation de la spermatide ronde en spermatozoïde, sans division cellulaire. Elle dure environ 23 jours et comporte quatre processus simultanés qui aboutissent à une cellule hautement spécialisée, mobile, au cytoplasme réduit au minimum.</p>
<h4>1. Formation de l'acrosome</h4>
<p>L'appareil de Golgi produit des vésicules riches en enzymes hydrolytiques qui fusionnent en une <strong>vésicule acrosomique</strong> ; celle-ci se plaque contre le pôle antérieur du noyau et s'étale en un <strong>capuchon acrosomique</strong> recouvrant les deux tiers antérieurs du noyau. L'acrosome est un lysosome modifié qui contient notamment l'<strong>hyaluronidase</strong>, l'<strong>acrosine</strong> (protéase à sérine), des phosphatases acides et de la neuraminidase. Ces enzymes seront libérées lors de la réaction acrosomique pour traverser les enveloppes ovocytaires.</p>
<h4>2. Condensation et remaniement du noyau</h4>
<p>Le noyau s'allonge, s'aplatit et sa chromatine se condense fortement par remplacement des <strong>histones</strong> par des protéines de transition puis par les <strong>protamines</strong>, riches en arginine et en cystéine, dont les ponts disulfures compactent l'ADN d'un facteur 6 par rapport à une cellule somatique. Le noyau devient transcriptionnellement inactif : toutes les protéines nécessaires ont été synthétisées en amont, souvent à partir d'ARNm stockés.</p>
<h4>3. Formation du flagelle</h4>
<p>Le <strong>centriole distal</strong> migre au pôle opposé à l'acrosome et sert de base à l'<strong>axonème</strong>, structure de microtubules « 9 doublets + 2 centraux » (9 + 2), identique à celle d'un cil. Autour de l'axonème s'organisent les <strong>fibres denses externes</strong> (9) et, dans la pièce principale, la <strong>gaine fibreuse</strong>. Les <strong>mitochondries</strong> se regroupent en hélice autour de la partie proximale du flagelle pour former la <strong>gaine mitochondriale</strong> de la pièce intermédiaire, source d'ATP pour la dynéine.</p>
<h4>4. Élimination du cytoplasme et spermiation</h4>
<p>L'excès de cytoplasme est rejeté sous forme de <strong>corps résiduels</strong>, phagocytés par les cellules de Sertoli ; il ne reste qu'une fine <strong>gouttelette cytoplasmique</strong> au niveau du col, qui disparaît normalement pendant le transit épididymaire. La <strong>spermiation</strong> est la libération des spermatozoïdes dans la lumière du tube par les cellules de Sertoli : à ce stade, ils sont morphologiquement complets mais <strong>immobiles et non fécondants</strong>.</p>
<h4>Le cycle de l'épithélium séminifère</h4>
<p>Sur une coupe de tube séminifère, on observe des <strong>associations cellulaires</strong> constantes : à un stade donné de spermatide correspondent toujours les mêmes stades de spermatocyte et de spermatogonie. Chez l'homme, on décrit <strong>6 associations</strong> (stades I à VI) qui se succèdent au même point du tube toutes les <strong>16 jours</strong> : c'est le <strong>cycle de l'épithélium séminifère</strong>. Une spermatogenèse complète correspond à environ 4,6 cycles (4,6 × 16 = 74 jours). Chez l'homme, contrairement au rat, les associations ne sont pas disposées en segments successifs le long du tube mais en <strong>mosaïque hélicoïdale</strong>, de sorte qu'une coupe transversale montre plusieurs stades juxtaposés.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> spermiogenèse = acrosome (Golgi) + condensation nucléaire (protamines) + flagelle (centriole distal, axonème 9 + 2) + élimination du cytoplasme (corps résiduels). Aucune division.</div>`
            },
            {
              titre: "Le spermatozoïde mature",
              contenu: `<p>Le <strong>spermatozoïde</strong> humain mesure environ <strong>60 µm</strong> de long. C'est une cellule haploïde, mobile, dépourvue de la plupart des organites (pas de réticulum, pas de ribosomes, pas de Golgi). On lui décrit une tête et un flagelle, unis par le col.</p>
<table>
<thead><tr><th>Partie</th><th>Dimensions</th><th>Contenu</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td><strong>Tête</strong></td><td>4 à 5 µm de long, 2,5 à 3,5 µm de large, 1 µm d'épaisseur (ovalaire, aplatie)</td><td>Noyau très condensé (protamines) coiffé de l'acrosome sur ses 2/3 antérieurs ; segment équatorial à la limite postérieure de l'acrosome ; région post-acrosomique</td><td>Transport du génome paternel ; l'acrosome contient les enzymes de pénétration ; la région équatoriale est le site de fusion avec l'ovocyte</td></tr>
<tr><td><strong>Col</strong> (pièce connective)</td><td>1 µm</td><td>Centriole proximal, plaque basale, colonnes segmentées</td><td>Articulation tête-flagelle ; le centriole proximal est apporté à l'ovocyte et organise le premier fuseau de division du zygote</td></tr>
<tr><td><strong>Pièce intermédiaire</strong></td><td>5 à 7 µm</td><td>Axonème + 9 fibres denses + gaine mitochondriale hélicoïdale ; se termine par l'annulus</td><td>Production d'ATP pour la mobilité</td></tr>
<tr><td><strong>Pièce principale</strong></td><td>45 µm</td><td>Axonème + fibres denses (7 puis diminuant) + gaine fibreuse</td><td>Propulsion par battements flagellaires</td></tr>
<tr><td><strong>Pièce terminale</strong></td><td>5 µm</td><td>Axonème seul, désorganisé à l'extrémité</td><td>—</td></tr>
</tbody>
</table>
<p>Les spermatozoïdes acquièrent leur <strong>mobilité</strong> et une partie de leur <strong>pouvoir fécondant</strong> au cours du <strong>transit épididymaire</strong> (10 à 14 jours), sous la dépendance des androgènes : modifications des protéines membranaires, stabilisation de la chromatine, perte de la gouttelette cytoplasmique, acquisition de la capacité à être capacités. Ils sont stockés dans la queue de l'épididyme et le canal déférent jusqu'à l'éjaculation. Lors de l'éjaculation, ils sont mélangés aux sécrétions des <strong>vésicules séminales</strong> (60 à 70 % du volume : fructose, prostaglandines, semenogélines responsables de la coagulation), de la <strong>prostate</strong> (20 à 30 % : zinc, citrate, phosphatases acides, PSA qui liquéfie le coagulum) et des glandes bulbo-urétrales. La vitesse de progression d'un spermatozoïde est de 25 à 50 µm/s dans les voies génitales féminines, où il peut survivre <strong>2 à 5 jours</strong>.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le spermatozoïde apporte à l'ovocyte son noyau et son <strong>centriole</strong> (centriole proximal), mais <strong>pas ses mitochondries</strong> : les mitochondries paternelles, situées dans la pièce intermédiaire, sont éliminées après la fécondation. L'ADN mitochondrial est donc d'hérédité strictement maternelle.</div>`
            },
            {
              titre: "Régulation hormonale de la spermatogenèse",
              contenu: `<p>La spermatogenèse est sous le contrôle de l'<strong>axe hypothalamo-hypophyso-testiculaire</strong>, qui devient fonctionnel à la puberté (vers 12-13 ans), après une période d'activité transitoire pendant la vie fœtale et les premiers mois de vie (« mini-puberté »).</p>
<ul>
<li>L'<strong>hypothalamus</strong> sécrète la <strong>GnRH</strong> (gonadolibérine), décapeptide libéré de façon <strong>pulsatile</strong> (un pic toutes les 90 à 120 minutes environ chez l'homme) dans le système porte hypothalamo-hypophysaire. La pulsatilité est indispensable : une administration continue de GnRH désensibilise les récepteurs hypophysaires et bloque l'axe (principe des agonistes de la GnRH utilisés dans le cancer de la prostate).</li>
<li>L'<strong>antéhypophyse</strong> répond par la sécrétion de deux glycoprotéines, la <strong>FSH</strong> et la <strong>LH</strong>, constituées d'une sous-unité alpha commune (également commune à la TSH et à l'hCG) et d'une sous-unité bêta spécifique.</li>
<li>La <strong>LH</strong> agit sur les <strong>cellules de Leydig</strong>, qui synthétisent la <strong>testostérone</strong> à partir du cholestérol (6 à 7 mg par jour ; concentration plasmatique chez l'homme adulte : 3 à 10 ng/mL, soit 10 à 35 nmol/L). La concentration intratesticulaire est 50 à 100 fois supérieure à la concentration plasmatique grâce à l'ABP. La testostérone est indispensable à la méiose et à la spermiogenèse, ainsi qu'au maintien des caractères sexuels secondaires, de la libido et des glandes annexes. Dans les tissus cibles, elle est convertie en <strong>dihydrotestostérone (DHT)</strong> par la 5-alpha-réductase (prostate, peau, organes génitaux externes) ou en <strong>œstradiol</strong> par l'aromatase.</li>
<li>La <strong>FSH</strong> agit sur les <strong>cellules de Sertoli</strong> : elle stimule la synthèse de l'ABP, de l'inhibine B, de l'aromatase et des facteurs nécessaires à la spermatogenèse ; elle est surtout indispensable à l'initiation pubertaire de la spermatogenèse et au maintien d'une production quantitativement normale.</li>
</ul>
<h4>Rétrocontrôles</h4>
<p>La <strong>testostérone</strong> (et son dérivé l'œstradiol) exerce un <strong>rétrocontrôle négatif</strong> sur la sécrétion de GnRH et de LH (et, dans une moindre mesure, de FSH). L'<strong>inhibine B</strong>, sécrétée par les cellules de Sertoli, exerce un rétrocontrôle négatif <strong>sélectif sur la FSH</strong>. Ainsi, en cas d'atteinte isolée de l'épithélium séminifère (azoospermie sécrétoire), l'inhibine B s'effondre et la <strong>FSH s'élève</strong>, alors que la testostérone et la LH restent normales ; c'est un élément clé de l'exploration de l'infertilité masculine.</p>
<table>
<thead><tr><th>Hormone</th><th>Origine</th><th>Cible</th><th>Effet principal</th><th>Rétrocontrôle</th></tr></thead>
<tbody>
<tr><td>GnRH</td><td>Hypothalamus (noyau arqué)</td><td>Cellules gonadotropes hypophysaires</td><td>Libération pulsatile de LH et FSH</td><td>Inhibée par la testostérone</td></tr>
<tr><td>LH</td><td>Antéhypophyse</td><td>Cellules de Leydig</td><td>Synthèse de testostérone</td><td>Inhibée par la testostérone et l'œstradiol</td></tr>
<tr><td>FSH</td><td>Antéhypophyse</td><td>Cellules de Sertoli</td><td>ABP, inhibine B, soutien de la spermatogenèse</td><td>Inhibée par l'inhibine B (et la testostérone)</td></tr>
<tr><td>Testostérone</td><td>Cellules de Leydig</td><td>Tube séminifère, organes cibles</td><td>Méiose, spermiogenèse, caractères sexuels</td><td>Rétrocontrôle négatif sur GnRH et LH</td></tr>
<tr><td>Inhibine B</td><td>Cellules de Sertoli</td><td>Hypophyse</td><td>Marqueur de la fonction sertolienne</td><td>Rétrocontrôle négatif sélectif sur la FSH</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'hypogonadisme peut être <strong>périphérique</strong> (hypergonadotrope : testostérone basse, LH et FSH élevées, par exemple syndrome de Klinefelter, orchite, chimiothérapie) ou <strong>central</strong> (hypogonadotrope : testostérone, LH et FSH basses, par exemple syndrome de Kallmann par défaut de migration des neurones à GnRH, adénome hypophysaire, hyperprolactinémie). La chaleur (varicocèle, cryptorchidie, bains chauds), le tabac, l'alcool, le cannabis, les perturbateurs endocriniens et certains médicaments (sulfasalazine, chimiothérapies alkylantes) altèrent la spermatogenèse.</div>`
            },
            {
              titre: "Le spermogramme et ses valeurs normales",
              contenu: `<p>Le <strong>spermogramme</strong> est l'examen de première intention dans l'exploration de l'infertilité d'un couple (qui concerne 15 % des couples ; une cause masculine est retrouvée, seule ou associée, dans près de la moitié des cas). Il est réalisé après <strong>2 à 7 jours d'abstinence</strong> (idéalement 3 à 5), sur un recueil par masturbation au laboratoire, analysé dans l'heure. Compte tenu de la grande variabilité intra-individuelle, tout résultat anormal doit être <strong>contrôlé sur un deuxième prélèvement à 3 mois</strong> (durée d'une spermatogenèse complète).</p>
<table>
<thead><tr><th>Paramètre</th><th>Valeur seuil (OMS 2010)</th><th>Valeur seuil (OMS 2021)</th><th>Anomalie</th></tr></thead>
<tbody>
<tr><td>Volume de l'éjaculat</td><td>≥ 1,5 mL</td><td>≥ 1,4 mL</td><td>Hypospermie (&lt; 1,5 mL) ; hyperspermie (&gt; 6 mL) ; aspermie (absence d'éjaculat)</td></tr>
<tr><td>pH</td><td>≥ 7,2</td><td>≥ 7,2</td><td>pH acide avec hypospermie : agénésie des vésicules séminales ou des déférents</td></tr>
<tr><td>Concentration</td><td>≥ 15 millions/mL</td><td>≥ 16 millions/mL</td><td>Oligozoospermie (&lt; 15 M/mL) ; azoospermie (absence totale, confirmée après centrifugation) ; cryptozoospermie (spermatozoïdes seulement au culot)</td></tr>
<tr><td>Numération totale</td><td>≥ 39 millions par éjaculat</td><td>≥ 39 millions</td><td>Oligozoospermie</td></tr>
<tr><td>Mobilité totale (progressive + non progressive)</td><td>≥ 40 %</td><td>≥ 42 %</td><td>Asthénozoospermie</td></tr>
<tr><td>Mobilité progressive</td><td>≥ 32 %</td><td>≥ 30 %</td><td>Asthénozoospermie</td></tr>
<tr><td>Vitalité</td><td>≥ 58 % de vivants</td><td>≥ 54 %</td><td>Nécrozoospermie</td></tr>
<tr><td>Formes typiques (morphologie)</td><td>≥ 4 % (critères stricts de Kruger) ; ≥ 23 % (classification de David modifiée, utilisée en France)</td><td>≥ 4 %</td><td>Tératozoospermie</td></tr>
<tr><td>Leucocytes</td><td>&lt; 1 million/mL</td><td>&lt; 1 million/mL</td><td>Leucospermie (infection)</td></tr>
</tbody>
</table>
<p>L'association d'une oligozoospermie, d'une asthénozoospermie et d'une tératozoospermie est appelée <strong>OATS</strong> (oligo-asthéno-tératozoospermie), la situation la plus fréquente. Devant une <strong>azoospermie</strong>, on distingue l'azoospermie <strong>sécrétoire</strong> (non obstructive : défaut de production, FSH élevée, volume testiculaire réduit, inhibine B basse) et l'azoospermie <strong>excrétoire</strong> (obstructive : obstacle sur les voies, FSH normale, testicules normaux, par exemple agénésie bilatérale des déférents liée à une mutation du gène <em>CFTR</em>, ou séquelle d'infection). Les examens complémentaires comprennent la spermoculture, le test de migration-survie, le bilan hormonal (FSH, LH, testostérone, inhibine B), le caryotype (anomalies dans 5 à 15 % des azoospermies) et la recherche de microdélétions du chromosome Y (régions AZF).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les seuils OMS 2010 à connaître par cœur : volume 1,5 mL ; concentration 15 millions/mL ; numération 39 millions ; mobilité progressive 32 % et totale 40 % ; vitalité 58 % ; formes typiques 4 % (Kruger). Oligo = nombre, asthéno = mobilité, térato = forme, nécro = vitalité, azoo = absence.</div>`
            }
          ],
          points_cles: [
            "La spermatogenèse se déroule dans les tubes séminifères, de la puberté à la mort, de façon continue, à 34-35 °C ; elle dure environ 74 jours plus 10 à 14 jours de transit épididymaire.",
            "Trois phases : spermatocytogenèse (mitoses des spermatogonies Ad, Ap, B, 27 jours), méiose (spermatocyte I -> 2 spermatocytes II -> 4 spermatides, 24 jours), spermiogenèse (différenciation sans division, 23 jours).",
            "Un spermatocyte I donne 4 spermatozoïdes haploïdes ; la moitié porte X, l'autre moitié Y : le spermatozoïde détermine le sexe génétique.",
            "La barrière hémato-testiculaire est formée par les jonctions serrées entre cellules de Sertoli et sépare un compartiment basal (spermatogonies) d'un compartiment adluminal (méiose, spermatides).",
            "La spermiogenèse comprend la formation de l'acrosome (Golgi), la condensation du noyau (protamines), la formation du flagelle (axonème 9 + 2 à partir du centriole distal) et l'élimination du cytoplasme (corps résiduels).",
            "Le spermatozoïde mesure 60 µm : tête 4-5 µm (noyau + acrosome), pièce intermédiaire (gaine mitochondriale), pièce principale (45 µm), pièce terminale.",
            "LH -> cellules de Leydig -> testostérone ; FSH -> cellules de Sertoli -> ABP et inhibine B. La testostérone freine GnRH et LH ; l'inhibine B freine sélectivement la FSH.",
            "Le cycle de l'épithélium séminifère dure 16 jours chez l'homme et comporte 6 associations cellulaires disposées en mosaïque hélicoïdale.",
            "Spermogramme (OMS 2010) : volume 1,5 mL, 15 M/mL, 39 M par éjaculat, mobilité progressive 32 %, vitalité 58 %, formes typiques 4 % (Kruger) ; à contrôler à 3 mois."
          ],
          lexique: [
            { terme: "Spermatogonie", def: "Cellule souche germinale diploïde du compartiment basal du tube séminifère, de type Ad (réserve), Ap (engagée) ou B (différenciation)." },
            { terme: "Spermatocyte I", def: "Cellule diploïde (2n/4C après réplication) qui entre en méiose I ; la plus grosse cellule de la lignée germinale mâle." },
            { terme: "Spermatide", def: "Cellule haploïde ronde issue de la méiose II, qui se différencie en spermatozoïde au cours de la spermiogenèse." },
            { terme: "Spermiogenèse", def: "Phase de différenciation sans division transformant la spermatide en spermatozoïde (acrosome, condensation nucléaire, flagelle, élimination du cytoplasme)." },
            { terme: "Spermiation", def: "Libération des spermatozoïdes dans la lumière du tube séminifère par les cellules de Sertoli." },
            { terme: "Acrosome", def: "Vésicule dérivée du Golgi coiffant les deux tiers antérieurs du noyau du spermatozoïde et contenant les enzymes hydrolytiques (hyaluronidase, acrosine)." },
            { terme: "Barrière hémato-testiculaire", def: "Ensemble de jonctions serrées entre cellules de Sertoli isolant le compartiment adluminal du milieu sanguin et du système immunitaire." },
            { terme: "Inhibine B", def: "Hormone peptidique sécrétée par les cellules de Sertoli exerçant un rétrocontrôle négatif sélectif sur la FSH ; marqueur de la fonction séminifère." },
            { terme: "Azoospermie", def: "Absence totale de spermatozoïdes dans l'éjaculat, confirmée après centrifugation ; sécrétoire (défaut de production) ou excrétoire (obstacle)." },
            { terme: "OATS", def: "Oligo-asthéno-tératozoospermie : association d'une diminution du nombre, de la mobilité et du pourcentage de formes typiques." }
          ],
          qcm: [
            {
              q: "Concernant le tube séminifère et ses cellules :",
              options: [
                "A. Les cellules de Leydig sont situées dans l'épithélium séminifère, entre les cellules germinales.",
                "B. Les cellules de Sertoli sécrètent l'inhibine B et l'ABP.",
                "C. La barrière hémato-testiculaire est constituée par les jonctions serrées entre cellules de Sertoli.",
                "D. Les spermatogonies sont situées dans le compartiment adluminal.",
                "E. Les cellules de Sertoli continuent de se multiplier tout au long de la vie adulte."
              ],
              bonnes: [1, 2],
              explication: "A est fausse : les cellules de Leydig sont dans le tissu interstitiel, en dehors des tubes. B est vraie. C est vraie. D est fausse : les spermatogonies et les spermatocytes I en préleptotène sont dans le compartiment basal ; les cellules en méiose et les spermatides sont adluminales. E est fausse : les cellules de Sertoli cessent de se diviser à la puberté."
            },
            {
              q: "Concernant la chronologie de la spermatogenèse :",
              options: [
                "A. Elle dure environ 74 jours.",
                "B. La spermiogenèse comporte une division cellulaire.",
                "C. Le cycle de l'épithélium séminifère dure 16 jours chez l'homme.",
                "D. La méiose II est beaucoup plus longue que la méiose I.",
                "E. Un traitement par FSH accélère la vitesse de la spermatogenèse."
              ],
              bonnes: [0, 2],
              explication: "A est vraie. B est fausse : la spermiogenèse est une différenciation sans division. C est vraie : 6 associations cellulaires se succèdent tous les 16 jours. D est fausse : la méiose I dure environ 3 semaines (prophase I longue) et la méiose II quelques heures. E est fausse : la durée de la spermatogenèse est constante ; les hormones agissent sur la quantité de cellules engagées."
            },
            {
              q: "Concernant les cellules de la lignée germinale mâle :",
              options: [
                "A. Le spermatocyte I contient 46 chromosomes et 4C d'ADN après la phase S.",
                "B. Le spermatocyte II est haploïde avec 23 chromosomes à deux chromatides.",
                "C. Un spermatocyte I donne naissance à deux spermatozoïdes.",
                "D. Les spermatogonies Ad constituent les cellules souches de réserve.",
                "E. Le crossing-over a lieu au stade pachytène de la prophase I."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A est vraie. B est vraie : après la division réductionnelle, 23 chromosomes à 2 chromatides (n/2C). C est fausse : un spermatocyte I donne 4 spermatides donc 4 spermatozoïdes. D est vraie. E est vraie."
            },
            {
              q: "Concernant le spermatozoïde mature :",
              options: [
                "A. Il mesure environ 60 µm de long.",
                "B. L'acrosome dérive du réticulum endoplasmique.",
                "C. L'axonème a une structure 9 doublets + 2 microtubules centraux.",
                "D. Les mitochondries sont situées dans la pièce principale.",
                "E. Les mitochondries du spermatozoïde sont transmises à l'embryon."
              ],
              bonnes: [0, 2],
              explication: "A est vraie. B est fausse : l'acrosome dérive de l'appareil de Golgi. C est vraie. D est fausse : la gaine mitochondriale est dans la pièce intermédiaire. E est fausse : les mitochondries paternelles sont éliminées après la fécondation ; l'ADN mitochondrial est d'origine maternelle."
            },
            {
              q: "Concernant la régulation hormonale de la spermatogenèse :",
              options: [
                "A. La LH stimule la sécrétion de testostérone par les cellules de Leydig.",
                "B. La FSH agit directement sur les spermatogonies, qui possèdent des récepteurs à la FSH.",
                "C. L'inhibine B exerce un rétrocontrôle négatif sélectif sur la FSH.",
                "D. Une administration continue de GnRH stimule durablement la sécrétion de LH et de FSH.",
                "E. Une azoospermie sécrétoire s'accompagne typiquement d'une FSH élevée."
              ],
              bonnes: [0, 2, 4],
              explication: "A est vraie. B est fausse : les récepteurs à la FSH sont portés par les cellules de Sertoli, non par les cellules germinales. C est vraie. D est fausse : la GnRH doit être pulsatile ; une administration continue désensibilise l'hypophyse et bloque l'axe. E est vraie : l'atteinte de l'épithélium séminifère fait chuter l'inhibine B, levant le frein sur la FSH."
            },
            {
              q: "Concernant le spermogramme (normes OMS 2010) :",
              options: [
                "A. Il est réalisé après 2 à 7 jours d'abstinence.",
                "B. La concentration normale est supérieure ou égale à 15 millions de spermatozoïdes par mL.",
                "C. Une asthénozoospermie désigne une anomalie de la morphologie des spermatozoïdes.",
                "D. Un résultat anormal doit être contrôlé sur un second prélèvement à 3 mois.",
                "E. La mobilité progressive normale est supérieure ou égale à 32 %."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : l'asthénozoospermie est une diminution de la mobilité ; l'anomalie de la morphologie est la tératozoospermie."
            },
            {
              q: "Concernant les anomalies du sperme :",
              options: [
                "A. L'azoospermie est définie par une concentration inférieure à 15 millions/mL.",
                "B. Une azoospermie excrétoire s'accompagne généralement d'une FSH normale.",
                "C. L'agénésie bilatérale des canaux déférents est associée à des mutations du gène CFTR.",
                "D. La nécrozoospermie correspond à une diminution du pourcentage de spermatozoïdes vivants.",
                "E. Un pH acide associé à une hypospermie oriente vers une anomalie des vésicules séminales."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : l'azoospermie est l'absence totale de spermatozoïdes ; une concentration inférieure à 15 M/mL définit l'oligozoospermie. B est vraie : les testicules produisent normalement, l'obstacle est en aval. C est vraie. D est vraie. E est vraie : les vésicules séminales produisent un liquide alcalin représentant 60-70 % du volume."
            }
          ]
        },
        {
          id: "ovogenese-folliculogenese",
          titre: "L'ovogenèse et la folliculogenèse",
          duree: 35,
          objectifs: [
            "Décrire les étapes de l'ovogenèse de la vie fœtale à la ménopause et situer les deux blocages méiotiques.",
            "Connaître l'évolution quantitative du stock d'ovocytes (7 millions, 1 à 2 millions, 400 000, 400).",
            "Décrire les stades de la folliculogenèse, du follicule primordial au follicule de De Graaf, avec leurs dimensions.",
            "Expliquer l'ovulation, la formation et l'évolution du corps jaune.",
            "Comparer la spermatogenèse et l'ovogenèse.",
            "Comprendre la notion de réserve ovarienne et ses marqueurs."
          ],
          sections: [
            {
              titre: "L'ovaire : organisation générale",
              contenu: `<p>L'<strong>ovogenèse</strong> est la formation du gamète féminin, l'<strong>ovocyte</strong> ; elle est indissociable de la <strong>folliculogenèse</strong>, c'est-à-dire de l'évolution des follicules ovariens, structures somatiques qui entourent et accompagnent l'ovocyte. Les deux processus ont lieu dans l'<strong>ovaire</strong>.</p>
<p>L'ovaire adulte est un organe pair, ovoïde, de 3 à 4 cm de long, 2 cm de large et 1 cm d'épaisseur, pesant 6 à 8 g, situé dans la cavité pelvienne, maintenu par le mésovarium, le ligament utéro-ovarien et le ligament suspenseur (lombo-ovarien). Il est recouvert d'un épithélium simple cubique (épithélium ovarien, improprement appelé épithélium germinatif) reposant sur une condensation conjonctive, l'<strong>albuginée</strong>. On distingue :</p>
<ul>
<li>le <strong>cortex</strong> (zone corticale), périphérique, qui contient les <strong>follicules</strong> à tous les stades, les corps jaunes et les corps blancs, au sein d'un stroma conjonctif riche en cellules fusiformes ;</li>
<li>la <strong>médullaire</strong> (zone médullaire), centrale, formée d'un tissu conjonctif lâche contenant les vaisseaux (artère ovarienne spiralée, veines), les nerfs et quelques cellules du hile sécrétant des androgènes.</li>
</ul>
<p>Contrairement au testicule, qui produit des gamètes de façon continue jusqu'à un âge avancé, l'ovaire fonctionne de manière <strong>cyclique</strong> (cycle d'environ 28 jours), de la <strong>puberté</strong> (ménarche vers 12-13 ans) à la <strong>ménopause</strong> (vers 50-51 ans), et ne libère en règle qu'<strong>un seul ovocyte par cycle</strong>. L'ovaire a une double fonction : <strong>exocrine</strong> (production de l'ovocyte) et <strong>endocrine</strong> (sécrétion d'œstrogènes, de progestérone et d'un peu d'androgènes).</p>`
            },
            {
              titre: "L'ovogenèse : une histoire qui commence avant la naissance",
              contenu: `<p>L'ovogenèse a la particularité de débuter pendant la <strong>vie fœtale</strong>, de s'interrompre pendant toute l'enfance, de reprendre à la puberté de façon cyclique et de s'achever à la ménopause. Elle comporte trois phases : multiplication, croissance, maturation.</p>
<h4>Phase de multiplication (vie fœtale)</h4>
<p>Les <strong>cellules germinales primordiales</strong> (gonocytes), apparues dans la paroi de la vésicule vitelline vers la 3<sup>e</sup> semaine, migrent et colonisent l'ébauche gonadique vers la 5<sup>e</sup>-6<sup>e</sup> semaine. Dans l'ovaire fœtal, elles deviennent des <strong>ovogonies</strong>, cellules diploïdes qui se multiplient activement par <strong>mitoses</strong> du 2<sup>e</sup> au 5<sup>e</sup> mois. Le stock atteint un <strong>maximum d'environ 7 millions</strong> de cellules germinales vers le <strong>5<sup>e</sup> mois</strong> (20<sup>e</sup> semaine) de la vie fœtale. Puis les mitoses cessent définitivement : <strong>il n'y a plus jamais formation de nouvelles ovogonies</strong> après la naissance (du moins selon le dogme classique).</p>
<h4>Entrée en méiose et premier blocage (vie fœtale)</h4>
<p>Dès le 3<sup>e</sup> mois fœtal, les ovogonies entrent en <strong>méiose</strong> et deviennent des <strong>ovocytes I</strong> (ovocytes primaires). Ils franchissent les stades leptotène, zygotène et pachytène (crossing-over) de la prophase I, puis se <strong>bloquent au stade diplotène</strong>, dans un état de repos appelé <strong>dictyotène</strong> (ou dictyé), avec un gros noyau clair, la <strong>vésicule germinative</strong>. Ce <strong>premier blocage méiotique</strong> est acquis pour tous les ovocytes à la naissance (au plus tard vers le 7<sup>e</sup> mois) et persiste jusqu'à la puberté au minimum, et jusqu'à 50 ans au maximum. Chaque ovocyte I s'entoure d'une couche de cellules folliculaires aplaties : c'est le <strong>follicule primordial</strong>.</p>
<p>Parallèlement, une <strong>atrésie</strong> massive détruit la majorité des cellules germinales : des 7 millions du 5<sup>e</sup> mois, il ne reste que <strong>1 à 2 millions</strong> d'ovocytes I à la <strong>naissance</strong>, et <strong>300 000 à 400 000</strong> à la <strong>puberté</strong>. Seuls <strong>400 à 500</strong> seront ovulés au cours de la vie génitale (un par cycle pendant environ 35 à 40 ans) ; tous les autres dégénèrent par atrésie.</p>
<h4>Reprise de la méiose et second blocage (à chaque cycle, de la puberté à la ménopause)</h4>
<p>À chaque cycle, sous l'effet du <strong>pic de LH</strong>, l'ovocyte I du follicule dominant <strong>reprend sa méiose</strong> environ 36 heures avant l'ovulation : la vésicule germinative disparaît, la méiose I s'achève avec une <strong>cytodiérèse très inégale</strong> qui donne un gros <strong>ovocyte II</strong> (ovocyte secondaire, haploïde, 23 chromosomes à deux chromatides) et un minuscule <strong>premier globule polaire</strong>, qui reçoit un lot de chromosomes mais presque pas de cytoplasme. L'ovocyte II entame immédiatement la méiose II et se <strong>bloque en métaphase II</strong> : c'est le <strong>second blocage méiotique</strong>. C'est à ce stade (ovocyte II bloqué en métaphase II, entouré de la zone pellucide et de la corona radiata) qu'il est <strong>ovulé</strong>.</p>
<h4>Achèvement de la méiose (seulement en cas de fécondation)</h4>
<p>La méiose II ne s'achève que si l'ovocyte est <strong>fécondé</strong> : la pénétration du spermatozoïde lève le blocage ; l'anaphase et la télophase II expulsent le <strong>deuxième globule polaire</strong> et l'ovocyte devient un <strong>ovotide</strong> dont le noyau haploïde forme le pronucléus féminin. Sans fécondation, l'ovocyte II dégénère en 24 heures environ. Ainsi, au sens strict, <strong>il n'existe pas d'ovule</strong> (gamète féminin ayant achevé sa méiose) libre chez la femme : la méiose féminine s'achève dans le cytoplasme d'une cellule déjà fécondée.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> deux blocages : <strong>prophase I (diplotène, stade dictyotène)</strong> de la vie fœtale jusqu'à la reprise avant l'ovulation ; <strong>métaphase II</strong> de l'ovulation à la fécondation. Un ovocyte I donne <strong>un seul ovocyte fonctionnel</strong> et 2 (ou 3) globules polaires, contre 4 spermatozoïdes pour un spermatocyte I.</div>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> l'ovocyte ovulé est un <strong>ovocyte II bloqué en métaphase II</strong>, et non un ovocyte I ni un ovule. Le premier globule polaire est émis <em>avant</em> l'ovulation (juste avant, dans le follicule), le second <em>après</em> la fécondation.</div>`
            },
            {
              titre: "La folliculogenèse : du follicule primordial au follicule de De Graaf",
              contenu: `<p>La <strong>folliculogenèse</strong> est l'évolution d'un follicule depuis le stade primordial jusqu'à l'ovulation ou, bien plus souvent, jusqu'à l'atrésie. Elle dure en réalité très longtemps : on estime qu'un follicule primordial a besoin de <strong>plusieurs mois</strong> (environ 85 jours pour les dernières étapes, et au total près d'un an) pour atteindre le stade pré-ovulatoire ; seule la <strong>phase terminale</strong> (environ 14 jours, phase folliculaire du cycle) est dépendante des gonadotrophines et visible cliniquement.</p>
<table>
<thead><tr><th>Stade</th><th>Diamètre</th><th>Ovocyte</th><th>Cellules folliculaires</th><th>Autres caractéristiques</th></tr></thead>
<tbody>
<tr><td><strong>Follicule primordial</strong></td><td>30 à 50 µm</td><td>Ovocyte I de 30 à 40 µm, dictyotène</td><td>Une couche de cellules aplaties (pré-granulosa)</td><td>Stade de repos ; constitue la réserve ovarienne ; 90 % des follicules</td></tr>
<tr><td><strong>Follicule primaire</strong></td><td>50 à 80 µm</td><td>Croissance de l'ovocyte (jusqu'à 60 µm) ; début de synthèse de la zone pellucide</td><td>Une couche de cellules cubiques (granulosa)</td><td>Entrée en croissance ; indépendante des gonadotrophines</td></tr>
<tr><td><strong>Follicule secondaire</strong> (pré-antral)</td><td>80 à 200 µm</td><td>Ovocyte de 80 à 100 µm entouré de la <strong>zone pellucide</strong></td><td>Plusieurs couches (granulosa stratifiée) ; apparition de récepteurs à la FSH</td><td>Différenciation de la <strong>thèque interne</strong> (cellules endocrines, récepteurs à la LH) et de la <strong>thèque externe</strong> (fibreuse) ; vascularisation</td></tr>
<tr><td><strong>Follicule tertiaire</strong> (antral, cavitaire)</td><td>0,2 à 10 mm</td><td>Ovocyte de 120 µm (taille définitive) excentré</td><td>Granulosa avec apparition de cavités remplies de liquide folliculaire qui confluent en un <strong>antrum</strong></td><td>Devient dépendant de la FSH à partir de 2 mm ; recrutement, sélection, dominance</td></tr>
<tr><td><strong>Follicule de De Graaf</strong> (mûr, pré-ovulatoire)</td><td>18 à 25 mm</td><td>Ovocyte de 120 à 150 µm (avec zone pellucide) rattaché à la granulosa par le <strong>cumulus oophorus</strong> et entouré de la <strong>corona radiata</strong></td><td>Granulosa murale refoulée en périphérie</td><td>Antrum volumineux ; follicule faisant saillie à la surface de l'ovaire ; stigma</td></tr>
</tbody>
</table>
<h4>Structure du follicule mûr, de dedans en dehors</h4>
<ol>
<li>L'<strong>ovocyte</strong> (ovocyte I jusqu'à 36 heures avant l'ovulation, puis ovocyte II), 120 µm, cytoplasme riche en granules corticaux, mitochondries, ribosomes et ARNm maternels stockés.</li>
<li>La <strong>zone pellucide</strong> : enveloppe glycoprotéique de 15 à 20 µm d'épaisseur, sécrétée par l'ovocyte (glycoprotéines <strong>ZP1, ZP2, ZP3</strong> et ZP4), traversée par les prolongements des cellules de la corona radiata qui établissent des jonctions communicantes (gap) avec l'ovocyte.</li>
<li>La <strong>corona radiata</strong> : première couche de cellules de la granulosa, disposées radialement autour de la zone pellucide ; elle accompagne l'ovocyte lors de l'ovulation.</li>
<li>Le <strong>cumulus oophorus</strong> : massif de cellules de la granulosa reliant l'ovocyte à la paroi folliculaire.</li>
<li>L'<strong>antrum</strong> : cavité remplie de liquide folliculaire (transsudat plasmatique enrichi en œstrogènes, inhibine, hyaluronate).</li>
<li>La <strong>granulosa</strong> murale : épithélium stratifié avasculaire, récepteurs à la FSH (et à la LH dans le follicule mûr), siège de l'aromatase ; elle repose sur la <strong>membrane de Slavjanski</strong> (lame basale).</li>
<li>La <strong>thèque interne</strong> : cellules endocrines vascularisées, récepteurs à la LH, synthèse des <strong>androgènes</strong> (androstènedione) à partir du cholestérol.</li>
<li>La <strong>thèque externe</strong> : couche conjonctive fibreuse, en continuité avec le stroma.</li>
</ol>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la synthèse des œstrogènes par le follicule obéit à la <strong>théorie des deux cellules et des deux gonadotrophines</strong> : la LH stimule la thèque interne qui produit des androgènes ; ceux-ci diffusent vers la granulosa où, sous l'effet de la FSH, l'<strong>aromatase</strong> les convertit en œstradiol.</div>`
            },
            {
              titre: "Recrutement, sélection, dominance et atrésie",
              contenu: `<p>À tout moment, des follicules primordiaux quittent la réserve de repos et entrent en croissance (<strong>initiation</strong>), indépendamment des gonadotrophines, sous l'influence de facteurs locaux (KIT ligand, GDF-9, BMP-15, inhibition par l'AMH). Cette croissance basale dure plusieurs mois et aboutit à des follicules antraux de 2 à 5 mm. La suite dépend des gonadotrophines et s'inscrit dans le cycle menstruel :</p>
<ul>
<li><strong>Recrutement</strong> (fin du cycle précédent et premiers jours du cycle, J1 à J5) : l'élévation de la FSH consécutive à la chute de la progestérone et de l'inhibine A en fin de phase lutéale « sauve » de l'atrésie une <strong>cohorte</strong> de 5 à 10 follicules antraux de 2 à 5 mm par ovaire.</li>
<li><strong>Sélection</strong> (J5 à J7) : le follicule le plus sensible à la FSH (le plus grand nombre de récepteurs, la plus forte activité aromatase) croît plus vite, sécrète plus d'œstradiol et d'inhibine B, ce qui fait <strong>baisser la FSH</strong> (rétrocontrôle négatif) sous le seuil nécessaire aux autres follicules de la cohorte, qui entrent en atrésie. Un seul follicule, le <strong>follicule dominant</strong>, est sélectionné vers J7 (diamètre d'environ 10 mm).</li>
<li><strong>Dominance</strong> (J7 à J14) : le follicule dominant acquiert des <strong>récepteurs à la LH</strong> sur sa granulosa, devient moins dépendant de la FSH et grandit de 2 mm par jour jusqu'à 18-25 mm. Sa production d'œstradiol (jusqu'à 200 à 400 pg/mL en pré-ovulatoire) déclenche le pic de LH.</li>
</ul>
<p>L'<strong>atrésie</strong> est le destin de 99,9 % des follicules : il s'agit d'une dégénérescence par <strong>apoptose</strong> des cellules de la granulosa et de l'ovocyte, laissant au stade antral une cicatrice fibreuse (corps fibreux) et parfois des cellules thécales persistantes (glande interstitielle). L'atrésie touche les follicules à tous les stades, de la vie fœtale à la ménopause.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la folliculogenèse n'est pas « déclenchée » à chaque cycle : elle est continue, et le cycle ne fait que recruter des follicules déjà parvenus au stade antral après plusieurs mois de croissance autonome. En revanche, l'<em>ovogenèse</em> (reprise de la méiose) n'a lieu qu'au moment du pic de LH.</div>`
            },
            {
              titre: "L'ovulation et le corps jaune",
              contenu: `<h4>L'ovulation</h4>
<p>L'<strong>ovulation</strong> est la rupture du follicule mûr et l'expulsion de l'ovocyte II entouré de la zone pellucide, de la corona radiata et de cellules du cumulus, hors de l'ovaire, dans la cavité péritonéale où il est immédiatement capté par le pavillon de la trompe. Dans un cycle de 28 jours, elle a lieu au <strong>14<sup>e</sup> jour</strong>, soit <strong>36 heures après le début du pic de LH</strong> (et 10 à 12 heures après son maximum). Elle est déclenchée par le pic de LH, qui provoque successivement :</p>
<ul>
<li>la <strong>reprise de la méiose</strong> de l'ovocyte I (levée du premier blocage par rupture des jonctions gap entre cumulus et ovocyte et chute de l'AMPc intra-ovocytaire), avec émission du premier globule polaire et blocage en métaphase II ;</li>
<li>l'<strong>expansion du cumulus</strong> (sécrétion d'acide hyaluronique, « mucification ») qui détache l'ovocyte de la paroi ;</li>
<li>la <strong>lutéinisation</strong> débutante de la granulosa, avec passage de la synthèse d'œstradiol à celle de progestérone ;</li>
<li>la <strong>rupture de la paroi folliculaire</strong> au niveau du <strong>stigma</strong> (zone avasculaire et amincie faisant saillie à la surface de l'ovaire) sous l'effet de collagénases, de plasmine, de prostaglandines (PGE2, PGF2 alpha) et de la contraction des cellules musculaires lisses de la thèque externe ; l'ovocyte est entraîné par le liquide folliculaire, sans que la pression intrafolliculaire n'augmente notablement.</li>
</ul>
<p>L'ovocyte ovulé a une durée de vie fécondable de <strong>12 à 24 heures</strong>. Cliniquement, l'ovulation peut s'accompagner d'une douleur pelvienne brève (syndrome intermenstruel), d'une légère élévation de la température basale (plateau thermique de 0,3 à 0,5 °C lié à la progestérone) et d'une glaire cervicale abondante et filante.</p>
<h4>Le corps jaune</h4>
<p>Après l'ovulation, le follicule rompu se transforme en <strong>corps jaune</strong> (corpus luteum), glande endocrine temporaire. La membrane de Slavjanski se rompt, les vaisseaux de la thèque envahissent la granulosa (le corps jaune est l'un des tissus les plus vascularisés de l'organisme) et les cellules se <strong>lutéinisent</strong> : elles s'hypertrophient, se chargent en lipides et en pigment caroténoïde jaune (lutéine) et acquièrent l'équipement enzymatique de la stéroïdogenèse. On distingue les <strong>grandes cellules lutéales</strong> (issues de la granulosa, sécrétant la <strong>progestérone</strong>, l'œstradiol et l'inhibine A) et les <strong>petites cellules lutéales</strong> (issues de la thèque interne, sécrétant des androgènes aromatisés en œstrogènes). La progestérone atteint un maximum de 10 à 25 ng/mL vers J21-J22.</p>
<p>L'évolution du corps jaune dépend de la survenue d'une grossesse :</p>
<ul>
<li>En l'absence de fécondation, c'est le <strong>corps jaune progestatif</strong> (ou cyclique, ou menstruel) : il fonctionne <strong>14 jours</strong> (durée remarquablement constante, ce qui explique que la phase lutéale soit toujours de 14 jours, les variations de longueur du cycle portant sur la phase folliculaire), soutenu par la LH ; puis il régresse (<strong>lutéolyse</strong>) par apoptose, se fibrose et devient un <strong>corps blanc</strong> (corpus albicans), cicatrice qui disparaît en quelques mois. La chute de la progestérone et des œstrogènes déclenche les règles.</li>
<li>En cas de grossesse, l'<strong>hCG</strong> sécrétée par le trophoblaste dès J7-J8 après la fécondation se fixe sur les récepteurs de la LH et <strong>maintient le corps jaune</strong> : c'est le <strong>corps jaune gravidique</strong> (gestatif), de 2 à 3 cm, qui sécrète la progestérone indispensable au maintien de l'endomètre pendant les <strong>8 à 10 premières semaines</strong>, jusqu'au relais placentaire (relais lutéo-placentaire vers 8-10 SA). Il régresse ensuite lentement.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'ablation du corps jaune ou un traitement anti-progestérone (mifépristone, RU 486) avant 8 semaines interrompt la grossesse ; en fécondation in vitro avec stimulation, une supplémentation en progestérone est administrée en phase lutéale car la ponction folliculaire et les agonistes de la GnRH altèrent la fonction du corps jaune.</div>`
            },
            {
              titre: "Réserve ovarienne et comparaison des deux gamétogenèses",
              contenu: `<h4>La réserve ovarienne</h4>
<p>La <strong>réserve ovarienne</strong> désigne le stock de follicules primordiaux restant à un moment donné. Constituée une fois pour toutes pendant la vie fœtale, elle décroît inexorablement : 1 à 2 millions à la naissance, 400 000 à la puberté, environ 25 000 à 37 ans (âge à partir duquel la décroissance s'accélère) et moins de 1 000 à la <strong>ménopause</strong> (épuisement du stock, en moyenne à 51 ans). La fécondité féminine diminue nettement après 35 ans, en nombre et en qualité des ovocytes (augmentation des aneuploïdies par vieillissement des mécanismes de cohésion des chromatides : le risque de trisomie 21 passe de 1/1 500 à 20 ans à 1/100 à 40 ans).</p>
<p>La réserve ovarienne s'évalue par :</p>
<ul>
<li>le dosage de l'<strong>AMH</strong> (hormone antimüllérienne), sécrétée par la granulosa des petits follicules en croissance (pré-antraux et petits antraux), indépendante du cycle : c'est le meilleur marqueur ; des valeurs inférieures à 1 ng/mL témoignent d'une réserve diminuée ;</li>
<li>le <strong>compte des follicules antraux</strong> (CFA) à l'échographie endovaginale à J2-J4 : nombre de follicules de 2 à 10 mm (normal : 10 à 20 au total) ;</li>
<li>le dosage de la <strong>FSH</strong> et de l'<strong>œstradiol</strong> à J2-J4 : une FSH supérieure à 10-12 UI/L signe une insuffisance ovarienne débutante ;</li>
<li>l'<strong>inhibine B</strong> (moins utilisée).</li>
</ul>
<p>L'<strong>insuffisance ovarienne prématurée</strong> (anciennement ménopause précoce) se définit par une aménorrhée avec FSH élevée avant 40 ans (1 % des femmes) ; elle peut être d'origine génétique (syndrome de Turner 45,X, prémutation du gène <em>FMR1</em>), auto-immune ou iatrogène (chimiothérapie, radiothérapie), d'où les techniques de <strong>préservation de la fertilité</strong> (vitrification d'ovocytes, congélation de tissu ovarien).</p>
<h4>Comparaison spermatogenèse / ovogenèse</h4>
<table>
<thead><tr><th>Critère</th><th>Spermatogenèse</th><th>Ovogenèse</th></tr></thead>
<tbody>
<tr><td>Début</td><td>Puberté</td><td>Vie fœtale (3<sup>e</sup> mois)</td></tr>
<tr><td>Fin</td><td>Jamais (diminution progressive)</td><td>Ménopause (épuisement du stock)</td></tr>
<tr><td>Rythme</td><td>Continu</td><td>Discontinu : blocages prolongés, reprise cyclique</td></tr>
<tr><td>Multiplication des cellules souches</td><td>Toute la vie (spermatogonies)</td><td>Limitée à la vie fœtale (ovogonies) ; stock définitif à la naissance</td></tr>
<tr><td>Durée d'une méiose</td><td>Environ 24 jours</td><td>De 12 à 50 ans (blocage en prophase I) ; achèvement après la fécondation</td></tr>
<tr><td>Rendement d'une méiose</td><td>4 spermatozoïdes identiques en taille</td><td>1 ovocyte fonctionnel + 2 ou 3 globules polaires (cytodiérèses inégales)</td></tr>
<tr><td>Production</td><td>100 à 200 millions par jour</td><td>1 ovocyte par cycle, 400 à 500 au cours de la vie</td></tr>
<tr><td>Gamète</td><td>Petit (60 µm), mobile, cytoplasme réduit, méiose achevée</td><td>Gros (120 µm), immobile, cytoplasme abondant (réserves, ARNm), méiose non achevée (métaphase II)</td></tr>
<tr><td>Chromosome sexuel</td><td>X ou Y</td><td>Toujours X</td></tr>
<tr><td>Erreurs méiotiques</td><td>Plutôt chromosomes sexuels</td><td>Plutôt autosomes (trisomie 21), fréquence croissante avec l'âge</td></tr>
</tbody>
</table>`
            }
          ],
          points_cles: [
            "Les ovogonies se multiplient par mitoses uniquement pendant la vie fœtale ; le stock maximal de 7 millions est atteint au 5e mois, puis il n'y a plus jamais de nouvelles ovogonies.",
            "Stock : 7 millions au 5e mois fœtal, 1 à 2 millions à la naissance, 300 000 à 400 000 à la puberté, 400 à 500 ovulés au total, moins de 1 000 à la ménopause.",
            "Premier blocage méiotique en prophase I (diplotène, stade dictyotène) de la vie fœtale à la reprise 36 heures avant l'ovulation ; second blocage en métaphase II de l'ovulation à la fécondation.",
            "L'ovocyte ovulé est un ovocyte II bloqué en métaphase II, de 120 µm, entouré de la zone pellucide (ZP1 à ZP4) et de la corona radiata ; le premier globule polaire est émis avant l'ovulation, le second après la fécondation.",
            "Follicules : primordial (30-50 µm, cellules aplaties), primaire (cellules cubiques), secondaire (granulosa stratifiée, zone pellucide, thèques), tertiaire (antrum), de De Graaf (18-25 mm).",
            "Théorie des deux cellules : LH -> thèque interne -> androgènes ; FSH -> granulosa -> aromatase -> œstradiol.",
            "Recrutement d'une cohorte par la FSH (J1-J5), sélection d'un follicule dominant vers J7, ovulation au 14e jour, 36 heures après le début du pic de LH.",
            "Le corps jaune progestatif vit 14 jours (phase lutéale constante) ; le corps jaune gravidique est maintenu par l'hCG jusqu'au relais placentaire (8-10 semaines).",
            "La réserve ovarienne s'évalue par l'AMH, le compte des follicules antraux et la FSH à J3 ; 99,9 % des follicules subissent l'atrésie."
          ],
          lexique: [
            { terme: "Ovogonie", def: "Cellule germinale diploïde de l'ovaire fœtal qui se multiplie par mitoses entre le 2e et le 5e mois puis entre en méiose." },
            { terme: "Ovocyte I", def: "Ovocyte primaire, diploïde, bloqué en prophase I (diplotène) de la vie fœtale jusqu'à la reprise de la méiose précédant l'ovulation." },
            { terme: "Ovocyte II", def: "Ovocyte secondaire, haploïde, bloqué en métaphase II ; c'est le stade ovulé, qui n'achève sa méiose qu'en cas de fécondation." },
            { terme: "Dictyotène", def: "État de repos prolongé de l'ovocyte I au stade diplotène de la prophase I, caractérisé par la vésicule germinative." },
            { terme: "Globule polaire", def: "Petite cellule abortive, presque dépourvue de cytoplasme, émise lors des divisions méiotiques inégales de l'ovocyte." },
            { terme: "Zone pellucide", def: "Enveloppe glycoprotéique (ZP1 à ZP4) de 15-20 µm sécrétée par l'ovocyte à partir du stade de follicule primaire." },
            { terme: "Follicule de De Graaf", def: "Follicule mûr pré-ovulatoire de 18 à 25 mm, avec antrum, cumulus oophorus et corona radiata." },
            { terme: "Thèque interne", def: "Couche cellulaire endocrine du follicule, vascularisée, porteuse de récepteurs à la LH, produisant les androgènes aromatisés par la granulosa." },
            { terme: "Corps jaune", def: "Glande endocrine temporaire issue du follicule rompu, sécrétant la progestérone ; progestatif (14 jours) ou gravidique (maintenu par l'hCG)." },
            { terme: "Atrésie folliculaire", def: "Dégénérescence par apoptose des follicules à tous les stades ; destin de 99,9 % des follicules." }
          ],
          qcm: [
            {
              q: "Concernant l'ovogenèse :",
              options: [
                "A. Les ovogonies se multiplient par mitoses pendant toute la vie génitale de la femme.",
                "B. Le stock maximal de cellules germinales (environ 7 millions) est atteint vers le 5e mois de la vie fœtale.",
                "C. À la naissance, tous les ovocytes sont des ovocytes I bloqués en prophase I.",
                "D. L'ovocyte achève sa seconde division méiotique au moment de l'ovulation.",
                "E. Environ 400 à 500 ovocytes sont ovulés au cours de la vie d'une femme."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : les mitoses des ovogonies cessent avant la naissance. B est vraie. C est vraie : blocage au stade diplotène (dictyotène). D est fausse : la méiose II n'est achevée qu'en cas de fécondation ; l'ovocyte est ovulé bloqué en métaphase II. E est vraie."
            },
            {
              q: "Concernant les blocages méiotiques de l'ovocyte :",
              options: [
                "A. Le premier blocage a lieu au stade diplotène de la prophase I.",
                "B. Le premier blocage est levé par le pic de FSH.",
                "C. Le second blocage a lieu en métaphase II.",
                "D. Le premier globule polaire est expulsé après la fécondation.",
                "E. Le second blocage est levé par la pénétration du spermatozoïde."
              ],
              bonnes: [0, 2, 4],
              explication: "A est vraie. B est fausse : c'est le pic de LH qui provoque la reprise de la méiose, environ 36 heures avant l'ovulation. C est vraie. D est fausse : le premier globule polaire est émis juste avant l'ovulation ; c'est le second qui est émis après la fécondation. E est vraie."
            },
            {
              q: "Concernant les follicules ovariens :",
              options: [
                "A. Le follicule primordial est constitué d'un ovocyte I entouré d'une seule couche de cellules folliculaires aplaties.",
                "B. La zone pellucide apparaît au stade de follicule primordial.",
                "C. La thèque interne possède des récepteurs à la LH et synthétise des androgènes.",
                "D. Le follicule de De Graaf mesure 18 à 25 mm de diamètre.",
                "E. L'antrum apparaît dès le stade de follicule primaire."
              ],
              bonnes: [0, 2, 3],
              explication: "A est vraie. B est fausse : la zone pellucide commence à se former au stade de follicule primaire et est bien visible au stade secondaire. C est vraie. D est vraie. E est fausse : l'antrum définit le follicule tertiaire (cavitaire)."
            },
            {
              q: "Concernant la synthèse des œstrogènes et la sélection folliculaire :",
              options: [
                "A. L'aromatase est localisée dans les cellules de la granulosa.",
                "B. La FSH stimule la production d'androgènes par la thèque interne.",
                "C. Le follicule dominant est sélectionné vers le 7e jour du cycle.",
                "D. La baisse de la FSH en milieu de phase folliculaire entraîne l'atrésie des follicules non dominants.",
                "E. L'ensemble de la folliculogenèse, du follicule primordial à l'ovulation, dure 14 jours."
              ],
              bonnes: [0, 2, 3],
              explication: "A est vraie. B est fausse : c'est la LH qui stimule la thèque interne ; la FSH agit sur la granulosa. C est vraie. D est vraie : c'est le mécanisme de la sélection. E est fausse : la folliculogenèse complète dure plusieurs mois ; seule la phase terminale gonadodépendante dure environ 14 jours."
            },
            {
              q: "Concernant l'ovulation :",
              options: [
                "A. Elle survient environ 36 heures après le début du pic de LH.",
                "B. Elle libère un ovocyte I entouré de sa zone pellucide.",
                "C. Elle est due à une forte augmentation de la pression intrafolliculaire.",
                "D. L'ovocyte ovulé reste fécondable 12 à 24 heures.",
                "E. L'ovocyte est accompagné des cellules de la corona radiata."
              ],
              bonnes: [0, 3, 4],
              explication: "A est vraie. B est fausse : c'est un ovocyte II bloqué en métaphase II. C est fausse : la rupture résulte d'une digestion enzymatique de la paroi au niveau du stigma, sans augmentation notable de la pression. D est vraie. E est vraie."
            },
            {
              q: "Concernant le corps jaune :",
              options: [
                "A. Le corps jaune progestatif a une durée de vie d'environ 14 jours.",
                "B. Le corps jaune gravidique est maintenu par la FSH.",
                "C. Les grandes cellules lutéales dérivent de la granulosa et sécrètent la progestérone.",
                "D. Le corps jaune est une structure avasculaire comme la granulosa dont il dérive.",
                "E. En l'absence de grossesse, il se transforme en corps blanc."
              ],
              bonnes: [0, 2, 4],
              explication: "A est vraie : c'est ce qui fixe la durée de la phase lutéale. B est fausse : il est maintenu par l'hCG, qui agit sur les récepteurs de la LH. C est vraie. D est fausse : après rupture de la membrane de Slavjanski, le corps jaune est intensément vascularisé. E est vraie."
            },
            {
              q: "En comparant spermatogenèse et ovogenèse :",
              options: [
                "A. Une méiose complète dure environ 24 jours chez l'homme et peut durer plusieurs dizaines d'années chez la femme.",
                "B. Un ovocyte I donne quatre ovocytes fonctionnels.",
                "C. Les gamètes féminins portent tous un chromosome X.",
                "D. L'AMH est le meilleur marqueur biologique de la réserve ovarienne.",
                "E. La fréquence des trisomies 21 d'origine maternelle augmente avec l'âge de la femme."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A est vraie. B est fausse : un ovocyte I donne un seul ovocyte fonctionnel et des globules polaires. C est vraie. D est vraie : l'AMH, produite par les petits follicules en croissance, est indépendante du cycle. E est vraie : 1/1 500 à 20 ans contre 1/100 à 40 ans."
            }
          ]
        },
        {
          id: "cycles-regulation-hormonale",
          titre: "Les cycles ovarien et menstruel et leur régulation hormonale",
          duree: 30,
          objectifs: [
            "Décrire l'axe hypothalamo-hypophyso-ovarien et le rôle de la GnRH, de la FSH et de la LH.",
            "Décrire les phases du cycle ovarien (folliculaire, ovulatoire, lutéale) et l'évolution des taux hormonaux.",
            "Expliquer l'alternance des rétrocontrôles négatifs et positifs de l'œstradiol au cours du cycle.",
            "Décrire le cycle de l'endomètre (menstruelle, proliférative, sécrétoire) et ses rapports avec les hormones ovariennes.",
            "Connaître les effets des œstrogènes et de la progestérone sur les organes cibles (glaire, température, seins)."
          ],
          sections: [
            {
              titre: "Vue d'ensemble du cycle féminin",
              contenu: `<p>De la puberté à la ménopause, l'appareil génital féminin est le siège de modifications cycliques coordonnées, dont la manifestation la plus visible est la <strong>menstruation</strong> (règles). Par convention, le <strong>premier jour des règles</strong> est le <strong>jour 1</strong> du cycle. Un cycle normal dure <strong>28 jours</strong> en moyenne (extrêmes physiologiques : 21 à 35 jours), et les règles durent 3 à 6 jours (perte sanguine de 30 à 80 mL).</p>
<p>On distingue, de manière superposée :</p>
<ul>
<li>le <strong>cycle ovarien</strong>, avec une <strong>phase folliculaire</strong> (J1 à J14, de durée variable), l'<strong>ovulation</strong> (J14) et une <strong>phase lutéale</strong> (J15 à J28, de durée fixe de 14 jours) ;</li>
<li>le <strong>cycle utérin</strong> ou endométrial, avec une <strong>phase menstruelle</strong> (J1 à J4), une <strong>phase proliférative</strong> (J5 à J14) et une <strong>phase sécrétoire</strong> (J15 à J28) ;</li>
<li>les cycles de la glaire cervicale, de l'épithélium vaginal, de la température basale et des seins.</li>
</ul>
<p>Le chef d'orchestre de ces cycles est l'<strong>axe hypothalamo-hypophyso-ovarien</strong> : l'hypothalamus commande l'hypophyse, qui commande l'ovaire, dont les hormones (œstrogènes et progestérone) agissent sur les organes cibles et exercent en retour des rétrocontrôles sur l'hypothalamus et l'hypophyse.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> quand un cycle est plus long ou plus court que 28 jours, c'est la <strong>phase folliculaire</strong> qui varie ; la phase lutéale est fixe (14 jours, durée de vie du corps jaune). Dans un cycle de 35 jours, l'ovulation a lieu vers J21 ; dans un cycle de 21 jours, vers J7.</div>`
            },
            {
              titre: "L'axe hypothalamo-hypophyso-ovarien",
              contenu: `<h4>L'hypothalamus et la GnRH</h4>
<p>Les neurones à <strong>GnRH</strong> (gonadolibérine, LHRH), situés dans le noyau arqué et l'aire préoptique de l'hypothalamus, libèrent ce décapeptide dans le système porte hypothalamo-hypophysaire de façon <strong>pulsatile</strong>. La fréquence des pulses varie au cours du cycle : environ un pulse toutes les <strong>60 à 90 minutes</strong> en phase folliculaire, ralentissant à un pulse toutes les <strong>3 à 4 heures</strong> en phase lutéale sous l'effet de la progestérone. Une fréquence rapide favorise la sécrétion de LH, une fréquence lente celle de FSH. Les neurones à GnRH sont eux-mêmes régulés par les neurones à <strong>kisspeptine</strong> (relais des rétrocontrôles stéroïdiens et de la leptine, d'où l'aménorrhée en cas de dénutrition ou de stress intense).</p>
<h4>L'antéhypophyse et les gonadotrophines</h4>
<p>Les cellules gonadotropes sécrètent la <strong>FSH</strong> (hormone folliculo-stimulante) et la <strong>LH</strong> (hormone lutéinisante), glycoprotéines à deux sous-unités (alpha commune, bêta spécifique).</p>
<ul>
<li>La <strong>FSH</strong> recrute les follicules antraux, stimule la prolifération de la granulosa, induit l'<strong>aromatase</strong> (conversion des androgènes en œstrogènes) et l'expression des récepteurs à la LH sur la granulosa du follicule dominant. Elle stimule aussi la sécrétion d'<strong>inhibine B</strong>.</li>
<li>La <strong>LH</strong> stimule la thèque interne (synthèse des androgènes), déclenche par son pic l'<strong>ovulation</strong> et la <strong>reprise de la méiose</strong>, puis entretient le <strong>corps jaune</strong> (lutéinisation, sécrétion de progestérone).</li>
</ul>
<h4>L'ovaire et ses hormones</h4>
<ul>
<li>Les <strong>œstrogènes</strong> : principalement l'<strong>œstradiol (E2)</strong>, le plus actif, produit par la granulosa (phase folliculaire) puis par le corps jaune ; l'œstrone (E1) et l'œstriol (E3, surtout placentaire pendant la grossesse) sont moins actifs. Taux plasmatiques d'œstradiol : 30 à 50 pg/mL en début de phase folliculaire, pic pré-ovulatoire de <strong>200 à 400 pg/mL</strong>, plateau lutéal de 100 à 150 pg/mL.</li>
<li>La <strong>progestérone</strong> : stéroïde en C21 produit par le corps jaune ; taux inférieur à 1 ng/mL en phase folliculaire, légère ascension pré-ovulatoire, maximum de <strong>10 à 25 ng/mL</strong> vers J21, chute brutale à J26-J28. Un dosage supérieur à 5 ng/mL en deuxième partie de cycle est un bon témoin de l'ovulation.</li>
<li>Les <strong>androgènes</strong> (androstènedione, testostérone) de la thèque et du stroma, substrats de l'aromatase.</li>
<li>Les hormones peptidiques : <strong>inhibine B</strong> (granulosa des follicules en croissance, phase folliculaire), <strong>inhibine A</strong> (corps jaune, phase lutéale), activine, <strong>AMH</strong>.</li>
</ul>
<table>
<thead><tr><th>Hormone</th><th>Origine</th><th>Nature</th><th>Moment du maximum</th><th>Valeur maximale approximative</th></tr></thead>
<tbody>
<tr><td>FSH</td><td>Antéhypophyse</td><td>Glycoprotéine</td><td>J2-J4 (petit pic) et J13-J14 (pic ovulatoire)</td><td>5 à 10 UI/L en début de cycle ; 15 à 20 UI/L au pic</td></tr>
<tr><td>LH</td><td>Antéhypophyse</td><td>Glycoprotéine</td><td>J13-J14 (pic de 48 heures)</td><td>Pic de 30 à 100 UI/L (10 fois le taux basal)</td></tr>
<tr><td>Œstradiol</td><td>Granulosa puis corps jaune</td><td>Stéroïde C18</td><td>J12-J13 (24 à 36 heures avant le pic de LH) ; second maximum J21</td><td>200 à 400 pg/mL</td></tr>
<tr><td>Progestérone</td><td>Corps jaune</td><td>Stéroïde C21</td><td>J21-J22</td><td>10 à 25 ng/mL</td></tr>
<tr><td>Inhibine B</td><td>Granulosa</td><td>Peptide</td><td>Phase folliculaire</td><td>—</td></tr>
<tr><td>Inhibine A</td><td>Corps jaune</td><td>Peptide</td><td>Phase lutéale</td><td>—</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Le cycle ovarien phase par phase",
              contenu: `<h4>Phase folliculaire (J1 à J14)</h4>
<p>Elle débute avec les règles. La chute de la progestérone, de l'œstradiol et de l'inhibine A en fin de cycle précédent lève le rétrocontrôle négatif : la <strong>FSH s'élève</strong> dès les derniers jours du cycle précédent et les premiers jours du nouveau cycle (« fenêtre de FSH »). Cette élévation <strong>recrute</strong> une cohorte de follicules antraux de 2 à 5 mm. Les follicules recrutés produisent de l'œstradiol et de l'inhibine B, qui exercent un <strong>rétrocontrôle négatif</strong> sur la FSH ; celle-ci diminue à partir de J5-J7, ce qui aboutit à la <strong>sélection</strong> du seul follicule capable de poursuivre sa croissance avec moins de FSH : le <strong>follicule dominant</strong>. Celui-ci grandit d'environ 2 mm par jour et sa sécrétion d'œstradiol augmente de façon exponentielle en fin de phase folliculaire. L'endomètre, sous l'effet des œstrogènes, prolifère.</p>
<h4>Phase ovulatoire (J13 à J15)</h4>
<p>Lorsque l'œstradiol dépasse un seuil (environ 200 pg/mL) pendant une durée suffisante (36 à 48 heures), son effet sur l'hypothalamus et l'hypophyse s'inverse : le rétrocontrôle devient <strong>positif</strong>. Il en résulte une décharge massive de LH (<strong>pic de LH</strong>, d'une durée de 48 heures environ, débutant à J13 ou J14) accompagnée d'un pic plus modeste de FSH. Le pic de LH déclenche la reprise de la méiose (ovocyte I vers ovocyte II), la lutéinisation débutante de la granulosa (petite ascension de progestérone pré-ovulatoire qui amplifie le pic), et la rupture folliculaire <strong>36 heures après le début du pic</strong> (10 à 12 heures après son maximum). L'œstradiol chute transitoirement juste après l'ovulation.</p>
<h4>Phase lutéale (J15 à J28)</h4>
<p>Le corps jaune sécrète la <strong>progestérone</strong> (maximum J21), de l'<strong>œstradiol</strong> (second plateau) et de l'<strong>inhibine A</strong>. Ces trois hormones exercent un fort <strong>rétrocontrôle négatif</strong> : FSH et LH sont basses, aucun follicule n'est recruté (la progestérone ralentit en outre les pulses de GnRH). Le corps jaune dépend de la LH basale pour sa survie ; en l'absence d'hCG, il régresse spontanément après 14 jours. La chute hormonale qui en résulte provoque la <strong>menstruation</strong> et libère la FSH, ce qui enclenche le cycle suivant.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le rétrocontrôle de l'œstradiol est <strong>négatif</strong> à faible concentration (début de phase folliculaire, phase lutéale) et <strong>positif</strong> à forte concentration soutenue (fin de phase folliculaire), ce qui déclenche le pic de LH. La progestérone exerce toujours un rétrocontrôle négatif (sauf potentialisation du pic de LH lorsqu'elle apparaît en présence d'œstradiol élevé).</div>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les tests d'ovulation urinaires détectent le pic de LH ; la fenêtre de fertilité maximale s'étend des 2 à 3 jours précédant l'ovulation au jour de l'ovulation (survie des spermatozoïdes de 2 à 5 jours, de l'ovocyte de 12 à 24 heures). La courbe de température montre un <strong>décalage thermique</strong> (plateau supérieur de 0,3 à 0,5 °C) dû à l'effet hyperthermisant de la progestérone, qui apparaît le lendemain de l'ovulation : il confirme l'ovulation a posteriori mais ne permet pas de la prévoir.</div>`
            },
            {
              titre: "Le cycle de l'endomètre",
              contenu: `<p>L'<strong>endomètre</strong> (muqueuse utérine) est formé d'un épithélium simple prismatique (cellules ciliées et cellules sécrétrices) qui s'invagine en <strong>glandes tubuleuses</strong> dans un <strong>chorion</strong> (stroma) richement vascularisé. On lui distingue deux couches : la <strong>couche fonctionnelle</strong> (superficielle, les deux tiers de l'épaisseur, comprenant la zone compacte et la zone spongieuse), qui est éliminée à chaque menstruation, et la <strong>couche basale</strong> (profonde, 1 mm), qui persiste et régénère la couche fonctionnelle. La vascularisation est particulière : les artères radiales du myomètre donnent des <strong>artères droites</strong> courtes pour la couche basale et des <strong>artères spiralées</strong> pour la couche fonctionnelle ; ces dernières sont très sensibles aux hormones.</p>
<table>
<thead><tr><th>Phase</th><th>Jours</th><th>Hormone dominante</th><th>Épaisseur</th><th>Aspect histologique</th></tr></thead>
<tbody>
<tr><td><strong>Menstruelle</strong></td><td>J1 à J4</td><td>Chute d'œstradiol et de progestérone</td><td>De 5 mm à 0,5-1 mm</td><td>Vasoconstriction des artères spiralées, ischémie, nécrose et desquamation de la couche fonctionnelle ; saignement de 30 à 80 mL, incoagulable (fibrinolyse)</td></tr>
<tr><td><strong>Proliférative</strong> (œstrogénique, folliculaire)</td><td>J5 à J14</td><td>Œstradiol</td><td>De 1 à 5 mm (jusqu'à 8-10 mm à l'échographie)</td><td>Régénération à partir de la couche basale ; glandes droites, étroites, à cellules en mitoses ; stroma dense ; artères spiralées peu développées ; apparition des récepteurs à la progestérone (induits par les œstrogènes)</td></tr>
<tr><td><strong>Sécrétoire</strong> (progestative, lutéale)</td><td>J15 à J28</td><td>Progestérone (+ œstradiol)</td><td>5 à 7 mm (épaisseur maximale vers J21-J22)</td><td>Glandes contournées, en « dents de scie », dilatées, remplies de glycogène et de mucus (vacuoles basales à J16-J17, puis sécrétion apicale) ; stroma œdématié ; artères spiralées très développées ; réaction prédéciduale du stroma en fin de phase. L'endomètre est <strong>réceptif</strong> à l'implantation entre J20 et J24 (« fenêtre d'implantation »)</td></tr>
</tbody>
</table>
<p>La <strong>dentelle utérine</strong> de la phase sécrétoire (J21) est l'image classique de l'endomètre prêt à recevoir le blastocyste : glandes sinueuses, lumières festonnées, stroma œdémateux. Si l'implantation a lieu, la progestérone du corps jaune gravidique transforme l'endomètre en <strong>caduque</strong> (décidue). Sinon, la chute de la progestérone entraîne la <strong>vasoconstriction spasmodique</strong> des artères spiralées (médiée par les prostaglandines PGF2 alpha), l'ischémie, la nécrose puis l'élimination de la couche fonctionnelle : ce sont les <strong>règles</strong>, hémorragie de privation hormonale.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> les récepteurs à la progestérone de l'endomètre sont <strong>induits par les œstrogènes</strong> : la progestérone ne peut agir que sur un endomètre préalablement œstrogénisé. À l'inverse, la progestérone diminue les récepteurs aux œstrogènes (effet anti-œstrogénique, antiprolifératif, qui protège l'endomètre du cancer).</div>`
            },
            {
              titre: "Effets des hormones ovariennes sur les autres cibles",
              contenu: `<table>
<thead><tr><th>Cible</th><th>Effets des œstrogènes (phase folliculaire)</th><th>Effets de la progestérone (phase lutéale)</th></tr></thead>
<tbody>
<tr><td><strong>Endomètre</strong></td><td>Prolifération, croissance des glandes et des artères spiralées, induction des récepteurs à la progestérone</td><td>Arrêt des mitoses, sécrétion glandulaire (glycogène), œdème du stroma, préparation à la nidation</td></tr>
<tr><td><strong>Myomètre</strong></td><td>Hypertrophie, excitabilité, contractilité, récepteurs à l'ocytocine</td><td>Relâchement, diminution de la contractilité (« gardienne de la grossesse »)</td></tr>
<tr><td><strong>Glaire cervicale</strong></td><td>Abondante, claire, filante, cristallisant en « feuille de fougère », pH alcalin, perméable aux spermatozoïdes (maximum péri-ovulatoire : 300 à 700 mg par jour)</td><td>Rare, épaisse, opaque, imperméable aux spermatozoïdes ; bouchon muqueux</td></tr>
<tr><td><strong>Épithélium vaginal</strong></td><td>Épaississement, maturation, cellules superficielles éosinophiles chargées en glycogène (acidification par les lactobacilles, pH 4 à 4,5)</td><td>Desquamation, cellules intermédiaires plicaturées, leucocytes</td></tr>
<tr><td><strong>Trompes</strong></td><td>Ciliogenèse, activité des cils et contractions favorisant le transport</td><td>Sécrétion nutritive, ralentissement du transit tubaire</td></tr>
<tr><td><strong>Seins</strong></td><td>Développement des canaux galactophores et du stroma</td><td>Développement des acini (lobulo-alvéolaire), tension mammaire prémenstruelle</td></tr>
<tr><td><strong>Température basale</strong></td><td>Plateau bas (36,5 °C environ), nadir au moment de l'ovulation</td><td>Plateau haut (+ 0,3 à 0,5 °C) pendant 12 à 14 jours ; persistance en cas de grossesse</td></tr>
<tr><td><strong>Hypothalamus-hypophyse</strong></td><td>Rétrocontrôle négatif puis positif (pic de LH)</td><td>Rétrocontrôle négatif, ralentissement des pulses de GnRH</td></tr>
<tr><td><strong>Effets généraux</strong></td><td>Croissance osseuse puis soudure des cartilages de conjugaison, protection osseuse, effets métaboliques (HDL), rétention hydrosodée, caractères sexuels secondaires</td><td>Effet hyperthermisant, natriurétique, sédatif</td></tr>
</tbody>
</table>
<h4>Les règles</h4>
<p>Les règles normales durent 3 à 6 jours, avec une perte de 30 à 80 mL de sang incoagulable mêlé de débris endométriaux. On parle de <strong>ménorragies</strong> pour des règles trop abondantes ou prolongées, de <strong>métrorragies</strong> pour des saignements en dehors des règles, d'<strong>aménorrhée</strong> pour l'absence de règles (primaire si jamais eu de règles à 16 ans, secondaire si arrêt depuis plus de 3 mois ; la grossesse est la première cause d'aménorrhée secondaire), de <strong>spanioménorrhée</strong> pour des cycles longs de plus de 35 à 45 jours. Les cycles <strong>anovulatoires</strong> (fréquents dans les deux années suivant la ménarche et à la périménopause, ou dans le syndrome des ovaires polykystiques) s'accompagnent de règles irrégulières par hémorragie de privation œstrogénique.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le bilan hormonal d'un trouble du cycle est prélevé à <strong>J2-J4</strong> (FSH, LH, œstradiol, prolactine, AMH) pour évaluer la réserve ovarienne et la commande centrale, et à <strong>J21-J22</strong> pour la progestérone (témoin d'ovulation). Une FSH élevée avec œstradiol bas signe une insuffisance ovarienne ; une FSH et une LH basses avec œstradiol bas orientent vers une cause hypothalamo-hypophysaire (aménorrhée hypothalamique fonctionnelle, hyperprolactinémie, tumeur) ; une LH élevée avec rapport LH/FSH supérieur à 2 évoque un syndrome des ovaires polykystiques.</div>`
            }
          ],
          points_cles: [
            "Le cycle dure 28 jours en moyenne (21 à 35) ; J1 est le premier jour des règles ; l'ovulation a lieu 14 jours avant les règles suivantes car la phase lutéale est fixe (14 jours).",
            "La GnRH hypothalamique est pulsatile (toutes les 60-90 min en phase folliculaire, 3-4 h en phase lutéale) ; les pulses rapides favorisent la LH, les pulses lents la FSH.",
            "FSH : recrutement folliculaire, prolifération de la granulosa, aromatase, inhibine B. LH : androgènes thécaux, pic ovulatoire, reprise de la méiose, corps jaune.",
            "Œstradiol : 30-50 pg/mL en début de cycle, pic pré-ovulatoire de 200-400 pg/mL 24 à 36 h avant le pic de LH. Progestérone : < 1 ng/mL en phase folliculaire, 10-25 ng/mL à J21.",
            "L'œstradiol exerce un rétrocontrôle négatif à faible dose et positif à forte dose soutenue, ce qui déclenche le pic de LH ; l'ovulation survient 36 h après le début du pic.",
            "La progestérone et l'inhibine A du corps jaune freinent FSH et LH pendant la phase lutéale ; leur chute déclenche les règles et la remontée de la FSH.",
            "Endomètre : phase menstruelle (J1-J4), proliférative (J5-J14, œstrogènes, glandes droites), sécrétoire (J15-J28, progestérone, glandes en dents de scie, glycogène, dentelle utérine à J21) ; fenêtre d'implantation J20-J24.",
            "Les règles résultent de la vasoconstriction des artères spiralées après la chute de la progestérone ; seule la couche fonctionnelle est éliminée, la couche basale régénère.",
            "Les récepteurs à la progestérone de l'endomètre sont induits par les œstrogènes ; la progestérone est hyperthermisante (plateau de + 0,3 à 0,5 °C) et rend la glaire imperméable."
          ],
          lexique: [
            { terme: "GnRH", def: "Gonadolibérine, décapeptide hypothalamique libéré de façon pulsatile, stimulant la sécrétion de FSH et de LH." },
            { terme: "Pic de LH", def: "Décharge massive de LH d'environ 48 heures déclenchée par le rétrocontrôle positif de l'œstradiol ; l'ovulation survient 36 heures après son début." },
            { terme: "Phase folliculaire", def: "Première phase du cycle ovarien (J1 à J14), de durée variable, marquée par la croissance du follicule dominant et la sécrétion d'œstradiol." },
            { terme: "Phase lutéale", def: "Seconde phase du cycle ovarien (J15 à J28), de durée fixe de 14 jours, dominée par la sécrétion de progestérone du corps jaune." },
            { terme: "Phase proliférative", def: "Phase du cycle endométrial (J5 à J14) sous dépendance œstrogénique, caractérisée par la régénération et la croissance de la muqueuse." },
            { terme: "Phase sécrétoire", def: "Phase du cycle endométrial (J15 à J28) sous dépendance progestative, avec glandes contournées riches en glycogène (dentelle utérine)." },
            { terme: "Artères spiralées", def: "Artères de la couche fonctionnelle de l'endomètre, hormono-sensibles, dont la vasoconstriction déclenche la menstruation." },
            { terme: "Fenêtre d'implantation", def: "Période de réceptivité de l'endomètre au blastocyste, entre J20 et J24 du cycle (6 à 10 jours après l'ovulation)." },
            { terme: "Inhibine", def: "Hormone peptidique ovarienne exerçant un rétrocontrôle négatif sélectif sur la FSH ; inhibine B (granulosa, phase folliculaire) et inhibine A (corps jaune, phase lutéale)." }
          ],
          qcm: [
            {
              q: "Concernant le cycle menstruel :",
              options: [
                "A. Le premier jour du cycle correspond au premier jour des règles.",
                "B. Dans un cycle de 35 jours, l'ovulation a lieu vers le 14e jour.",
                "C. La phase lutéale dure de façon constante environ 14 jours.",
                "D. La phase folliculaire a une durée variable d'une femme à l'autre.",
                "E. Les règles correspondent à l'élimination de la couche basale de l'endomètre."
              ],
              bonnes: [0, 2, 3],
              explication: "A est vraie. B est fausse : dans un cycle de 35 jours, l'ovulation a lieu vers J21 (35 - 14). C et D sont vraies. E est fausse : c'est la couche fonctionnelle qui est éliminée ; la couche basale persiste et régénère l'endomètre."
            },
            {
              q: "Concernant la régulation hormonale du cycle :",
              options: [
                "A. La GnRH est sécrétée de façon continue par l'hypothalamus.",
                "B. Le pic de LH est déclenché par le rétrocontrôle positif de l'œstradiol.",
                "C. L'ovulation survient environ 36 heures après le début du pic de LH.",
                "D. La progestérone exerce un rétrocontrôle positif sur la sécrétion de FSH en phase lutéale.",
                "E. L'inhibine B freine sélectivement la sécrétion de FSH."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : la sécrétion est pulsatile. B est vraie. C est vraie. D est fausse : la progestérone exerce un rétrocontrôle négatif. E est vraie."
            },
            {
              q: "Concernant les hormones ovariennes au cours du cycle :",
              options: [
                "A. Le pic d'œstradiol précède le pic de LH de 24 à 36 heures.",
                "B. La progestérone est maximale vers le 21e jour du cycle.",
                "C. L'œstradiol est produit par la thèque interne sous l'action de la FSH.",
                "D. La progestérone plasmatique en phase folliculaire est inférieure à 1 ng/mL.",
                "E. L'inhibine A est sécrétée par le corps jaune."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : l'œstradiol est produit par la granulosa (aromatase stimulée par la FSH) à partir des androgènes de la thèque interne (stimulée par la LH)."
            },
            {
              q: "Concernant l'endomètre :",
              options: [
                "A. La phase proliférative est sous la dépendance des œstrogènes.",
                "B. En phase sécrétoire, les glandes sont droites et étroites, avec de nombreuses mitoses.",
                "C. La « dentelle utérine » s'observe vers le 21e jour du cycle.",
                "D. Les récepteurs à la progestérone de l'endomètre sont induits par les œstrogènes.",
                "E. La fenêtre d'implantation se situe entre le 20e et le 24e jour du cycle."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A est vraie. B est fausse : glandes droites et mitoses caractérisent la phase proliférative ; en phase sécrétoire les glandes sont contournées, dilatées et chargées de glycogène. C, D et E sont vraies."
            },
            {
              q: "Concernant la menstruation :",
              options: [
                "A. Elle résulte de la chute de la progestérone et des œstrogènes.",
                "B. Elle est précédée d'une vasoconstriction des artères spiralées.",
                "C. Le sang menstruel est normalement coagulable.",
                "D. La perte sanguine normale est de 30 à 80 mL.",
                "E. Elle est déclenchée par l'élévation de la FSH."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : le sang menstruel est incoagulable du fait de la fibrinolyse locale. E est fausse : la FSH remonte en conséquence de la chute des hormones ovariennes, elle n'est pas la cause des règles."
            },
            {
              q: "Concernant les effets des hormones ovariennes :",
              options: [
                "A. Les œstrogènes rendent la glaire cervicale abondante, filante et perméable aux spermatozoïdes.",
                "B. La progestérone élève la température basale de 0,3 à 0,5 °C.",
                "C. La progestérone augmente la contractilité du myomètre.",
                "D. Le décalage thermique permet de prévoir l'ovulation 48 heures à l'avance.",
                "E. Un taux de progestérone supérieur à 5 ng/mL à J21 témoigne d'une ovulation."
              ],
              bonnes: [0, 1, 4],
              explication: "A, B et E sont vraies. C est fausse : la progestérone relâche le myomètre. D est fausse : le décalage thermique apparaît après l'ovulation et ne la confirme que rétrospectivement."
            }
          ]
        },
        {
          id: "fecondation",
          titre: "La fécondation",
          duree: 35,
          objectifs: [
            "Situer le lieu et le moment de la fécondation et décrire le trajet des gamètes.",
            "Définir la capacitation et la réaction acrosomique et en connaître les mécanismes moléculaires.",
            "Décrire la traversée du cumulus et de la zone pellucide, la fusion des membranes et l'activation ovocytaire.",
            "Expliquer le blocage de la polyspermie (réaction corticale, modification de la zone pellucide).",
            "Décrire la formation des pronuclei, l'amphimixie et la détermination du sexe génétique.",
            "Connaître les principales conséquences de la fécondation et ses anomalies (polyspermie, polygynie, môle)."
          ],
          sections: [
            {
              titre: "Définition, lieu et conditions de la fécondation",
              contenu: `<p>La <strong>fécondation</strong> est la rencontre et la fusion d'un gamète mâle, le spermatozoïde, et d'un gamète femelle, l'ovocyte II, aboutissant à la formation d'une cellule diploïde unique, le <strong>zygote</strong>, point de départ d'un nouvel individu génétiquement unique. Chez l'espèce humaine, elle est <strong>interne</strong> et <strong>monospermique</strong> (un seul spermatozoïde pénètre l'ovocyte).</p>
<p>Elle a lieu dans le <strong>tiers externe de la trompe utérine</strong>, au niveau de l'<strong>ampoule tubaire</strong>, dans les <strong>12 à 24 heures</strong> qui suivent l'ovulation (durée de vie fécondable de l'ovocyte). Le processus complet, de la pénétration du spermatozoïde à la première division du zygote, dure environ <strong>24 à 30 heures</strong>.</p>
<h4>Le trajet des spermatozoïdes</h4>
<p>Lors de l'éjaculation, 2 à 6 mL de sperme contenant 40 à 300 millions de spermatozoïdes sont déposés au fond du vagin, milieu acide (pH 4) rapidement hostile. Le sperme coagule puis se liquéfie en 15 à 30 minutes. Seuls quelques millions de spermatozoïdes franchissent la <strong>glaire cervicale</strong> (perméable uniquement en période péri-ovulatoire, filtre sélectionnant les spermatozoïdes mobiles et morphologiquement normaux) ; les <strong>cryptes du col</strong> constituent un réservoir qui libère les spermatozoïdes progressivement pendant 2 à 5 jours. Quelques centaines de milliers atteignent la cavité utérine, quelques milliers les trompes, et seulement <strong>quelques dizaines à quelques centaines</strong> parviennent dans l'ampoule au contact de l'ovocyte. Les premiers spermatozoïdes atteignent l'ampoule en 30 minutes à 1 heure (progression grâce à leur mobilité propre, aux contractions du myomètre et des trompes, et aux mouvements ciliaires), mais ils ne sont pas encore fécondants. L'ensemble de ce trajet concourt à la <strong>capacitation</strong>.</p>
<h4>Le trajet de l'ovocyte</h4>
<p>L'ovocyte II, entouré de sa zone pellucide, de la corona radiata et des cellules du cumulus mucifié, est capté par les <strong>franges du pavillon</strong> tubaire, qui coiffent l'ovaire au moment de l'ovulation, puis transporté passivement vers l'ampoule par le courant du liquide tubaire et les battements des cils de l'épithélium tubaire. Il est immobile et ne survit que 12 à 24 heures.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> fécondation dans l'<strong>ampoule</strong> de la trompe, dans les <strong>24 heures</strong> suivant l'ovulation, par un seul spermatozoïde <strong>capacité</strong>. La fenêtre de fertilité du couple couvre les 5 jours précédant l'ovulation et le jour de l'ovulation (survie des spermatozoïdes jusqu'à 5 jours).</div>`
            },
            {
              titre: "La capacitation",
              contenu: `<p>À leur sortie de l'épididyme et dans l'éjaculat, les spermatozoïdes sont mobiles mais <strong>incapables de féconder</strong>. Ils acquièrent ce pouvoir fécondant au cours de leur séjour dans les voies génitales féminines (glaire cervicale, utérus, trompe) : c'est la <strong>capacitation</strong>, qui dure <strong>5 à 7 heures</strong> et qui peut être reproduite <em>in vitro</em> dans un milieu adapté (ce qui est indispensable en fécondation in vitro).</p>
<p>La capacitation est un ensemble de <strong>modifications membranaires et métaboliques</strong>, sans changement morphologique visible :</p>
<ul>
<li>élimination des <strong>protéines de surface</strong> (facteurs décapacitants) fixées pendant le transit épididymaire et apportées par le plasma séminal, qui masquaient les récepteurs de la zone pellucide ;</li>
<li>perte de <strong>cholestérol</strong> membranaire (capté par l'albumine du liquide tubaire), ce qui augmente la fluidité de la membrane plasmatique et la rend fusiogène ;</li>
<li>entrée de <strong>calcium</strong> et de <strong>bicarbonate</strong>, activation de l'adénylate cyclase soluble, élévation de l'AMPc et de la protéine kinase A, entraînant une <strong>hyperphosphorylation des protéines sur tyrosine</strong> ;</li>
<li>modification du <strong>potentiel de membrane</strong> (hyperpolarisation) ;</li>
<li>acquisition d'une mobilité particulière, l'<strong>hyperactivation</strong> : battements flagellaires de grande amplitude, asymétriques, qui donnent une trajectoire en « fouet » et facilitent la progression dans le liquide tubaire visqueux et la traversée du cumulus et de la zone pellucide.</li>
</ul>
<p>Au terme de la capacitation, le spermatozoïde est capable de reconnaître la zone pellucide, de réaliser la réaction acrosomique et de fusionner avec l'ovocyte. Les spermatozoïdes capacités ont une durée de vie limitée (quelques heures), ce qui explique l'intérêt du réservoir cervical qui en libère de façon échelonnée. On pense que les spermatozoïdes sont guidés vers l'ovocyte par <strong>chimiotactisme</strong> (progestérone sécrétée par les cellules du cumulus, agissant sur le canal CatSper du flagelle) et par <strong>thermotaxie</strong> (gradient de température de 1 à 2 °C entre l'isthme et l'ampoule).</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la capacitation a lieu dans les <strong>voies génitales féminines</strong> (ou in vitro), jamais dans l'épididyme. L'épididyme confère la <em>mobilité</em> et la <em>capacité à être capacité</em>, pas le pouvoir fécondant immédiat. La capacitation précède et conditionne la réaction acrosomique, mais ne la déclenche pas : le déclencheur est le contact avec la zone pellucide (et la progestérone du cumulus).</div>`
            },
            {
              titre: "Traversée du cumulus, réaction acrosomique et traversée de la zone pellucide",
              contenu: `<h4>Traversée du cumulus oophorus et de la corona radiata</h4>
<p>Le spermatozoïde capacité et hyperactivé traverse d'abord la masse des cellules du cumulus, dispersées dans une matrice riche en <strong>acide hyaluronique</strong>. Cette traversée est facilitée par la mobilité hyperactivée et par une <strong>hyaluronidase</strong> membranaire (PH-20) ; l'acrosome est encore intact à ce stade (une réaction acrosomique prématurée, dans le cumulus, rend le spermatozoïde incapable de se fixer à la zone pellucide).</p>
<h4>Fixation à la zone pellucide</h4>
<p>Le spermatozoïde se <strong>fixe</strong> à la zone pellucide par la face externe de sa membrane plasmatique, au niveau de la tête. Cette fixation est <strong>spécifique d'espèce</strong> : la glycoprotéine <strong>ZP3</strong> (et son réseau avec ZP2, ZP1 et ZP4) de la zone pellucide est reconnue par des récepteurs de la membrane spermatique (dont la galactosyl-transférase, SED1 et d'autres protéines). Chez l'homme, la reconnaissance implique le domaine N-terminal de <strong>ZP2</strong> et ZP3, et les oligosaccharides de la zone.</p>
<h4>La réaction acrosomique</h4>
<p>La fixation à la zone pellucide (signal ZP3 relayé par une entrée massive de calcium) et la progestérone déclenchent la <strong>réaction acrosomique</strong> : la <strong>membrane plasmatique</strong> de la région antérieure de la tête fusionne en de multiples points avec la <strong>membrane acrosomique externe</strong>, créant des pores puis des vésicules hybrides qui se détachent. Le contenu de l'acrosome est libéré : <strong>hyaluronidase</strong>, <strong>acrosine</strong> (protéase à sérine), neuraminidase, phosphatase acide, estérases. La <strong>membrane acrosomique interne</strong> est exposée et devient la nouvelle surface antérieure du spermatozoïde ; elle porte des molécules permettant la liaison secondaire à <strong>ZP2</strong>. Le <strong>segment équatorial</strong> conserve sa membrane plasmatique intacte : c'est lui qui fusionnera avec l'ovocyte.</p>
<h4>Traversée de la zone pellucide</h4>
<p>Grâce aux enzymes acrosomiques (lyse locale) et à la force mécanique des battements flagellaires hyperactivés, le spermatozoïde creuse un <strong>tunnel oblique</strong> dans la zone pellucide (15 à 20 µm d'épaisseur) en 5 à 20 minutes, puis parvient dans l'<strong>espace périvitellin</strong>, entre la zone pellucide et la membrane plasmatique de l'ovocyte (ovolemme).</p>
<table>
<thead><tr><th>Étape</th><th>Lieu</th><th>Acteurs moléculaires</th><th>Durée</th></tr></thead>
<tbody>
<tr><td>Capacitation</td><td>Voies génitales féminines</td><td>Perte de cholestérol, Ca<sup>2+</sup>, HCO<sub>3</sub><sup>-</sup>, AMPc, phosphorylation sur tyrosine</td><td>5 à 7 heures</td></tr>
<tr><td>Traversée du cumulus</td><td>Ampoule tubaire</td><td>Hyaluronidase membranaire PH-20, hyperactivation</td><td>Minutes</td></tr>
<tr><td>Fixation primaire</td><td>Surface de la zone pellucide</td><td>ZP3 (et ZP2) / récepteurs membranaires spermatiques</td><td>—</td></tr>
<tr><td>Réaction acrosomique</td><td>Zone pellucide</td><td>Ca<sup>2+</sup>, fusion membrane plasmatique-membrane acrosomique externe, libération d'acrosine et d'hyaluronidase</td><td>Minutes</td></tr>
<tr><td>Fixation secondaire et traversée</td><td>Zone pellucide</td><td>ZP2 / membrane acrosomique interne ; acrosine</td><td>5 à 20 minutes</td></tr>
<tr><td>Fusion</td><td>Espace périvitellin, ovolemme</td><td>IZUMO1 (spermatozoïde) / JUNO (ovocyte), CD9, tétraspanines</td><td>—</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Fusion des gamètes et activation de l'ovocyte",
              contenu: `<h4>La fusion</h4>
<p>Dans l'espace périvitellin, le spermatozoïde se couche tangentiellement contre l'<strong>ovolemme</strong> et s'y fixe par la membrane plasmatique de son <strong>segment équatorial</strong> (la membrane acrosomique interne, elle, ne fusionne pas). La reconnaissance met en jeu la protéine spermatique <strong>IZUMO1</strong> et son récepteur ovocytaire <strong>JUNO</strong> (récepteur du folate 4), ainsi que la tétraspanine <strong>CD9</strong> de l'ovocyte. Les membranes fusionnent et le spermatozoïde <strong>tout entier</strong> (tête, col et flagelle) est incorporé dans le cytoplasme ovocytaire par un mécanisme proche de la phagocytose ; les microvillosités de l'ovocyte (absentes au-dessus du fuseau de métaphase II) l'engloutissent. La membrane plasmatique du spermatozoïde reste incorporée à l'ovolemme.</p>
<p>Dans l'ovocyte, le flagelle et les <strong>mitochondries paternelles</strong> dégénèrent (élimination par autophagie et ubiquitinylation : l'ADN mitochondrial est donc d'origine exclusivement maternelle). Le <strong>centriole proximal</strong> est conservé et formera le <strong>centrosome</strong> du zygote (l'ovocyte humain est dépourvu de centriole), organisant l'aster spermatique qui rapproche les pronuclei puis le fuseau de la première mitose. Le noyau se décondense : les protamines sont remplacées par des histones d'origine ovocytaire.</p>
<h4>L'activation ovocytaire</h4>
<p>La fusion déclenche l'<strong>activation</strong> de l'ovocyte, jusque-là quiescent et bloqué en métaphase II. Le facteur déclenchant est une <strong>phospholipase C zêta</strong> (PLC zêta) d'origine spermatique, libérée dans le cytoplasme, qui produit de l'IP3 et provoque la libération de <strong>calcium</strong> par le réticulum endoplasmique sous forme d'<strong>oscillations calciques</strong> répétées pendant plusieurs heures (une vague calcique partant du point de fusion toutes les 10 à 30 minutes). Ces oscillations entraînent en cascade :</p>
<ol>
<li>la <strong>réaction corticale</strong> : exocytose des <strong>granules corticaux</strong> (plusieurs milliers de vésicules de 0,5 µm situées sous l'ovolemme), dont le contenu enzymatique modifie la zone pellucide ;</li>
<li>la <strong>reprise et l'achèvement de la méiose II</strong> : dégradation de la cycline B (inactivation du MPF et du facteur cytostatique CSF), anaphase II, télophase II, expulsion du <strong>deuxième globule polaire</strong> dans l'espace périvitellin ; l'ovocyte devient un <strong>ovotide</strong> (23 chromosomes à une chromatide) ;</li>
<li>les <strong>modifications métaboliques</strong> : augmentation de la consommation d'oxygène, du pH intracellulaire, de la synthèse protéique à partir des ARNm maternels stockés, début de la réplication de l'ADN ;</li>
<li>l'<strong>activation du génome</strong> embryonnaire ne surviendra que plus tard (stade 4 à 8 cellules chez l'homme) : les premières divisions sont sous contrôle maternel.</li>
</ol>
<h4>Le blocage de la polyspermie</h4>
<p>L'entrée de plusieurs spermatozoïdes (<strong>polyspermie</strong>) donnerait un embryon polyploïde non viable. Chez l'homme, le blocage de la polyspermie est principalement <strong>lent</strong> et repose sur la réaction corticale (il n'y a pas, contrairement à l'oursin, de blocage rapide électrique significatif) :</p>
<ul>
<li><strong>Réaction de zone</strong> : les enzymes des granules corticaux (en particulier l'<strong>ovastacine</strong>, métalloprotéase) clivent <strong>ZP2</strong> et modifient les oligosaccharides de <strong>ZP3</strong> ; la zone pellucide <strong>durcit</strong>, perd ses sites de fixation et devient imperméable aux spermatozoïdes surnuméraires, qui ne peuvent plus ni se fixer ni la traverser.</li>
<li><strong>Modification de l'ovolemme</strong> : perte du récepteur <strong>JUNO</strong> (éliminé en quelques minutes dans des vésicules), empêchant toute nouvelle fusion ; les spermatozoïdes déjà présents dans l'espace périvitellin ne peuvent pas fusionner.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la fusion se fait par le <strong>segment équatorial</strong> ; le spermatozoïde entre <strong>en entier</strong> ; il apporte son noyau, son centriole et la PLC zêta, mais ses mitochondries sont détruites. L'activation = oscillations calciques -> réaction corticale (blocage de la polyspermie) + achèvement de la méiose II (2<sup>e</sup> globule polaire).</div>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> en ICSI (injection intracytoplasmique d'un spermatozoïde), toutes les étapes de reconnaissance et de traversée sont contournées ; un échec d'activation ovocytaire après ICSI (absence de pronuclei) peut être lié à un déficit en PLC zêta du spermatozoïde (globozoospermie, spermatozoïdes à tête ronde sans acrosome) et se traite par activation artificielle au ionophore calcique.</div>`
            },
            {
              titre: "Pronuclei, amphimixie et première division",
              contenu: `<p>Après l'achèvement de la méiose II, l'ovotide contient deux lots haploïdes de chromosomes qui s'entourent chacun d'une enveloppe nucléaire pour former deux <strong>pronuclei</strong> (pronucléus féminin et pronucléus masculin), visibles <strong>12 à 18 heures après la pénétration</strong> (c'est le critère de fécondation normale recherché en FIV : « zygote à 2 pronuclei et 2 globules polaires »). Le pronucléus masculin est généralement un peu plus gros. Chacun contient 23 chromosomes à une chromatide (1C) ; les deux pronuclei <strong>répliquent leur ADN</strong> (phase S, chacun passe à 2C) tout en se rapprochant l'un de l'autre le long des microtubules de l'aster organisé par le centrosome d'origine paternelle.</p>
<p>L'<strong>amphimixie</strong> (ou syngamie) est la mise en commun des deux lots chromosomiques : chez les mammifères, les enveloppes des pronuclei se <strong>dissolvent</strong> sans fusion préalable des deux noyaux, les chromosomes paternels et maternels (46 chromosomes à 2 chromatides, soit 4C) se placent sur un <strong>fuseau unique</strong> en métaphase : c'est la <strong>première division de segmentation</strong>, qui s'achève environ <strong>30 heures</strong> après la fécondation par la formation de deux cellules diploïdes (2n/2C), les deux premiers <strong>blastomères</strong>. Au sens strict, il n'existe donc jamais de « noyau zygotique » diploïde unique en interphase : la diploïdie se constitue sur la plaque métaphasique de la première mitose.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> les pronuclei ne fusionnent pas en un noyau diploïde ; leurs enveloppes disparaissent et les chromosomes se rassemblent directement sur le fuseau de la première mitose. Le zygote reste au stade « 1 cellule » environ 24 à 30 heures.</div>
<h4>Le zygote et la mise en place de l'asymétrie</h4>
<p>Le zygote mesure environ 120 µm (sans la zone pellucide) : il est à peine plus gros que l'ovocyte, puisque le spermatozoïde n'apporte presque pas de cytoplasme. Il est encore entouré de la <strong>zone pellucide</strong>, qui l'empêche d'adhérer à la paroi tubaire (ce qui préviendrait une implantation ectopique) et maintient la cohésion des premiers blastomères. L'<strong>empreinte parentale</strong> (méthylation différentielle de certains gènes selon l'origine paternelle ou maternelle) fait que les deux génomes ne sont pas équivalents : un embryon ne peut se développer qu'avec un génome paternel et un génome maternel (échec des embryons gynogénétiques ou androgénétiques).</p>`
            },
            {
              titre: "Conséquences de la fécondation et anomalies",
              contenu: `<h4>Les conséquences de la fécondation</h4>
<ul>
<li><strong>Rétablissement de la diploïdie</strong> : 23 + 23 = 46 chromosomes.</li>
<li><strong>Détermination du sexe génétique</strong> : l'ovocyte apporte toujours un X ; le spermatozoïde apporte soit un X (zygote 46,XX, sexe féminin), soit un Y (46,XY, sexe masculin). Le sexe est donc déterminé par le <strong>spermatozoïde</strong>, dès la fécondation ; le gène <strong>SRY</strong> du bras court de l'Y commandera la différenciation testiculaire à partir de la 7<sup>e</sup> semaine. Le sex-ratio à la fécondation est d'environ 1,05 garçon pour 1 fille.</li>
<li><strong>Brassage génétique</strong> : combinaison aléatoire de deux génomes eux-mêmes recombinés par la méiose : chaque zygote est <strong>génétiquement unique</strong> (sauf jumeaux monozygotes).</li>
<li><strong>Activation métabolique</strong> de l'ovocyte et <strong>achèvement de la méiose II</strong>.</li>
<li><strong>Début de la segmentation</strong> et du programme de développement.</li>
<li>Apport du <strong>centriole</strong> paternel ; transmission <strong>maternelle</strong> exclusive de l'ADN mitochondrial.</li>
</ul>
<h4>Les anomalies de la fécondation</h4>
<table>
<thead><tr><th>Anomalie</th><th>Mécanisme</th><th>Conséquence</th></tr></thead>
<tbody>
<tr><td><strong>Dispermie (polyspermie)</strong></td><td>Pénétration de deux spermatozoïdes (défaut du blocage de la polyspermie, ovocyte vieilli)</td><td>Zygote triploïde (69 chromosomes) à 3 pronuclei : avortement précoce ; <strong>môle hydatiforme partielle</strong> (triploïdie diandrique)</td></tr>
<tr><td><strong>Digynie</strong></td><td>Non-expulsion du 2<sup>e</sup> globule polaire (ou du 1<sup>er</sup>)</td><td>Triploïdie d'origine maternelle, non viable</td></tr>
<tr><td><strong>Fécondation d'un ovocyte « vide »</strong> (androgénote)</td><td>Ovocyte sans noyau fécondé par un spermatozoïde dont le génome se duplique (46,XX le plus souvent, parfois dispermie)</td><td><strong>Môle hydatiforme complète</strong> : prolifération trophoblastique sans embryon, hCG très élevée, risque de choriocarcinome</td></tr>
<tr><td><strong>Aneuploïdie</strong></td><td>Gamète à 22 ou 24 chromosomes (non-disjonction méiotique, surtout maternelle et liée à l'âge)</td><td>Trisomies (21, 18, 13, 47,XXY, 47,XXX) ou monosomies (45,X ; les autres sont létales) ; première cause de fausses couches précoces (50 à 60 % des fausses couches du premier trimestre sont dues à une anomalie chromosomique)</td></tr>
<tr><td><strong>Fécondation tardive</strong></td><td>Ovocyte de plus de 24 heures</td><td>Risque accru d'anomalies, polyspermie, échec de développement</td></tr>
<tr><td><strong>Parthénogenèse</strong></td><td>Activation de l'ovocyte sans spermatozoïde</td><td>Pas de développement viable chez les mammifères (empreinte parentale) ; tératome ovarien</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> environ 15 % des ovocytes fécondés ne s'implantent pas et 15 à 20 % des grossesses cliniques se terminent par une fausse couche spontanée précoce, le plus souvent par anomalie chromosomique. En FIV, les zygotes à 3 pronuclei (dispermie) ou à 1 pronucléus (activation anormale ou parthénogénétique) sont écartés du transfert.</div>`
            }
          ],
          points_cles: [
            "La fécondation a lieu dans l'ampoule de la trompe, dans les 12 à 24 heures suivant l'ovulation ; l'ensemble du processus dure environ 24 à 30 heures jusqu'à la première division.",
            "La capacitation (5 à 7 heures, dans les voies génitales féminines) comprend la perte de cholestérol et des facteurs décapacitants, l'entrée de calcium et de bicarbonate, l'hyperphosphorylation sur tyrosine et l'hyperactivation flagellaire.",
            "La fixation à la zone pellucide (ZP3, puis ZP2) déclenche la réaction acrosomique : fusion de la membrane plasmatique avec la membrane acrosomique externe et libération d'acrosine et d'hyaluronidase.",
            "La fusion se fait entre le segment équatorial du spermatozoïde (IZUMO1) et l'ovolemme (JUNO, CD9) ; le spermatozoïde entre en entier.",
            "L'activation ovocytaire par la PLC zêta spermatique provoque des oscillations calciques, la réaction corticale et l'achèvement de la méiose II avec émission du 2e globule polaire.",
            "Le blocage de la polyspermie est lent chez l'homme : clivage de ZP2 par l'ovastacine, durcissement de la zone pellucide, perte de JUNO.",
            "Les pronuclei (visibles à 12-18 h) répliquent leur ADN puis leurs enveloppes disparaissent : les 46 chromosomes se placent sur le fuseau de la première mitose (amphimixie), achevée vers 30 heures.",
            "Le spermatozoïde détermine le sexe génétique (X ou Y) et apporte le centriole ; les mitochondries paternelles sont détruites.",
            "Anomalies : dispermie (triploïdie, môle partielle), digynie, môle complète (androgénote), aneuploïdies (première cause de fausses couches précoces)."
          ],
          lexique: [
            { terme: "Capacitation", def: "Ensemble de modifications membranaires et métaboliques acquises par le spermatozoïde dans les voies génitales féminines (5 à 7 heures) et lui conférant le pouvoir fécondant." },
            { terme: "Hyperactivation", def: "Mobilité flagellaire de grande amplitude et asymétrique acquise lors de la capacitation, facilitant la traversée du cumulus et de la zone pellucide." },
            { terme: "Réaction acrosomique", def: "Exocytose du contenu de l'acrosome par fusion de la membrane plasmatique et de la membrane acrosomique externe, déclenchée par le contact avec la zone pellucide." },
            { terme: "Acrosine", def: "Protéase à sérine de l'acrosome participant à la digestion locale de la zone pellucide." },
            { terme: "Segment équatorial", def: "Région de la tête du spermatozoïde, à la limite postérieure de l'acrosome, dont la membrane plasmatique fusionne avec l'ovolemme." },
            { terme: "IZUMO1 / JUNO", def: "Couple de protéines (spermatique / ovocytaire) indispensable à la reconnaissance et à la fusion des gamètes." },
            { terme: "Réaction corticale", def: "Exocytose des granules corticaux de l'ovocyte déclenchée par les oscillations calciques, responsable de la modification de la zone pellucide et du blocage lent de la polyspermie." },
            { terme: "Pronucléus", def: "Noyau haploïde du zygote (féminin ou masculin), visible 12 à 18 heures après la fécondation, qui réplique son ADN avant l'amphimixie." },
            { terme: "Amphimixie", def: "Réunion des chromosomes paternels et maternels sur le fuseau de la première division de segmentation, sans fusion des pronuclei." },
            { terme: "Môle hydatiforme", def: "Prolifération anormale du trophoblaste liée à une anomalie de la fécondation : complète (génome exclusivement paternel, pas d'embryon) ou partielle (triploïdie)." }
          ],
          qcm: [
            {
              q: "Concernant la fécondation :",
              options: [
                "A. Elle a lieu normalement dans l'ampoule de la trompe utérine.",
                "B. L'ovocyte reste fécondable pendant 3 à 5 jours après l'ovulation.",
                "C. Les spermatozoïdes peuvent survivre jusqu'à 5 jours dans les voies génitales féminines.",
                "D. Plusieurs millions de spermatozoïdes parviennent au contact de l'ovocyte.",
                "E. Les premiers spermatozoïdes qui atteignent l'ampoule sont immédiatement fécondants."
              ],
              bonnes: [0, 2],
              explication: "A est vraie. B est fausse : l'ovocyte n'est fécondable que 12 à 24 heures. C est vraie. D est fausse : seulement quelques dizaines à quelques centaines y parviennent. E est fausse : ils doivent d'abord être capacités (5 à 7 heures)."
            },
            {
              q: "Concernant la capacitation :",
              options: [
                "A. Elle a lieu dans l'épididyme.",
                "B. Elle s'accompagne d'une perte de cholestérol de la membrane plasmatique du spermatozoïde.",
                "C. Elle dure environ 5 à 7 heures.",
                "D. Elle correspond à la libération des enzymes de l'acrosome.",
                "E. Elle peut être obtenue in vitro."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : elle a lieu dans les voies génitales féminines. B, C et E sont vraies. D est fausse : la libération des enzymes acrosomiques est la réaction acrosomique, événement distinct et postérieur."
            },
            {
              q: "Concernant la réaction acrosomique :",
              options: [
                "A. Elle est déclenchée par la fixation du spermatozoïde à la zone pellucide.",
                "B. Elle consiste en la fusion de la membrane plasmatique avec la membrane acrosomique interne.",
                "C. Elle libère l'acrosine et la hyaluronidase.",
                "D. Elle doit avoir lieu avant la traversée du cumulus oophorus.",
                "E. Après la réaction acrosomique, la membrane acrosomique interne devient la surface antérieure du spermatozoïde."
              ],
              bonnes: [0, 2, 4],
              explication: "A est vraie (ZP3, calcium, progestérone). B est fausse : la fusion se fait avec la membrane acrosomique externe. C est vraie. D est fausse : une réaction acrosomique prématurée empêche la fixation à la zone pellucide ; l'acrosome doit être intact pendant la traversée du cumulus. E est vraie."
            },
            {
              q: "Concernant la fusion des gamètes et l'activation ovocytaire :",
              options: [
                "A. La fusion se fait au niveau du segment équatorial du spermatozoïde.",
                "B. Seule la tête du spermatozoïde pénètre dans l'ovocyte, le flagelle restant à l'extérieur.",
                "C. L'activation est déclenchée par des oscillations du calcium intracytoplasmique.",
                "D. La réaction corticale participe au blocage de la polyspermie.",
                "E. L'achèvement de la méiose II s'accompagne de l'émission du deuxième globule polaire."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le spermatozoïde pénètre en entier ; le flagelle et les mitochondries sont ensuite dégradés."
            },
            {
              q: "Concernant les pronuclei et l'amphimixie :",
              options: [
                "A. Les deux pronuclei sont visibles 12 à 18 heures après la pénétration du spermatozoïde.",
                "B. Chaque pronucléus réplique son ADN avant la première division.",
                "C. Les deux pronuclei fusionnent pour former un noyau diploïde en interphase.",
                "D. La première division de segmentation s'achève environ 30 heures après la fécondation.",
                "E. Le fuseau de la première mitose est organisé par le centriole d'origine paternelle."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : les enveloppes des pronuclei se dissolvent et les chromosomes se rassemblent directement sur le fuseau de la première mitose, sans fusion nucléaire."
            },
            {
              q: "Concernant les conséquences et les anomalies de la fécondation :",
              options: [
                "A. Le sexe génétique est déterminé par le spermatozoïde.",
                "B. L'ADN mitochondrial de l'embryon provient pour moitié du père.",
                "C. La pénétration de deux spermatozoïdes aboutit à un zygote triploïde.",
                "D. La môle hydatiforme complète contient un génome exclusivement paternel.",
                "E. Les anomalies chromosomiques sont une cause majeure de fausses couches précoces."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : l'ADN mitochondrial est exclusivement maternel, les mitochondries paternelles étant détruites après la fécondation."
            },
            {
              q: "Parmi les molécules suivantes, lesquelles interviennent dans la reconnaissance ou la fusion des gamètes ?",
              options: [
                "A. ZP3, glycoprotéine de la zone pellucide reconnue lors de la fixation primaire.",
                "B. IZUMO1, protéine membranaire du spermatozoïde.",
                "C. JUNO, récepteur ovocytaire d'IZUMO1.",
                "D. L'hCG, sécrétée par l'ovocyte pour attirer les spermatozoïdes.",
                "E. L'ovastacine, enzyme des granules corticaux clivant ZP2."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B et C sont vraies. D est fausse : l'hCG est sécrétée par le trophoblaste après l'implantation ; le chimiotactisme est attribué à la progestérone du cumulus. E est vraie : l'ovastacine participe au blocage de la polyspermie."
            }
          ]
        },
        {
          id: "pma-contraception",
          titre: "Procréation médicalement assistée et contraception",
          duree: 30,
          objectifs: [
            "Définir l'infertilité et connaître ses principales causes féminines et masculines.",
            "Décrire les principales techniques d'assistance médicale à la procréation : stimulation, insémination, FIV, ICSI, don de gamètes.",
            "Comprendre les étapes d'une FIV et les critères d'évaluation des embryons.",
            "Connaître le cadre légal français de l'AMP et du diagnostic préimplantatoire dans ses grandes lignes.",
            "Classer les méthodes contraceptives selon leur mécanisme d'action embryologique et connaître leur efficacité (indice de Pearl)."
          ],
          sections: [
            {
              titre: "L'infertilité : définitions et causes",
              contenu: `<p>L'<strong>infertilité</strong> (ou infécondité) se définit par l'absence de grossesse après <strong>12 mois</strong> de rapports sexuels réguliers sans contraception. Elle concerne environ <strong>un couple sur six à un couple sur huit</strong> (15 % des couples) en France. La <strong>stérilité</strong> désigne une incapacité définitive et totale. La fécondabilité (probabilité de concevoir au cours d'un cycle) est d'environ 25 % à 25 ans et chute à 12 % à 35 ans et 6 % à 40 ans ; 85 % des couples conçoivent dans l'année.</p>
<p>Les causes sont féminines dans environ un tiers des cas, masculines dans un tiers, mixtes ou inexpliquées dans le dernier tiers.</p>
<table>
<thead><tr><th>Origine</th><th>Causes principales</th><th>Exploration</th></tr></thead>
<tbody>
<tr><td><strong>Féminine ovulatoire</strong> (20 à 30 %)</td><td>Syndrome des ovaires polykystiques (première cause), insuffisance ovarienne prématurée, aménorrhée hypothalamique (anorexie, sport intensif), hyperprolactinémie, dysthyroïdie</td><td>Courbe de température, progestérone à J21, FSH-LH-œstradiol à J3, AMH, prolactine, TSH, échographie (compte des follicules antraux)</td></tr>
<tr><td><strong>Féminine tubaire</strong> (15 à 25 %)</td><td>Séquelles d'infections sexuellement transmissibles (Chlamydia trachomatis), salpingites, endométriose, chirurgie, grossesse extra-utérine</td><td>Hystérosalpingographie, hystérosonographie, cœlioscopie avec épreuve au bleu</td></tr>
<tr><td><strong>Féminine utérine et cervicale</strong></td><td>Malformations utérines (cloison), fibromes, polypes, synéchies, glaire insuffisante</td><td>Échographie, hystéroscopie, test post-coïtal (de Hühner, peu utilisé désormais)</td></tr>
<tr><td><strong>Masculine</strong> (30 à 40 %)</td><td>OATS idiopathique, varicocèle, cryptorchidie, infections, obstruction (agénésie des déférents, CFTR), causes génétiques (Klinefelter, microdélétions AZF), hypogonadisme central, toxiques (tabac, cannabis, chaleur), chimiothérapie, troubles de l'éjaculation</td><td>Spermogramme (répété à 3 mois), spermoculture, FSH-LH-testostérone-inhibine B, caryotype, échographie scrotale, recherche de microdélétions de l'Y</td></tr>
<tr><td><strong>Inexpliquée</strong> (10 à 15 %)</td><td>Bilan normal</td><td>—</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>endométriose</strong> (présence de tissu endométrial en dehors de l'utérus, 10 % des femmes) est une cause fréquente d'infertilité par altération tubaire, inflammation pelvienne et baisse de la réserve ovarienne (endométriomes). Le <strong>syndrome des ovaires polykystiques</strong> associe anovulation, hyperandrogénie et aspect échographique d'ovaires multifolliculaires (plus de 20 follicules de 2 à 9 mm par ovaire).</div>`
            },
            {
              titre: "Les techniques d'assistance médicale à la procréation",
              contenu: `<p>L'<strong>assistance médicale à la procréation (AMP)</strong>, ou procréation médicalement assistée (PMA), regroupe les pratiques cliniques et biologiques permettant la conception <em>in vitro</em>, le transfert d'embryons, l'insémination artificielle et la conservation des gamètes et des embryons. En France, environ 3,5 % des enfants naissent après AMP (près de 25 000 par an).</p>
<h4>1. La stimulation ovarienne simple (induction de l'ovulation)</h4>
<p>Indiquée dans les anovulations ou dysovulations (syndrome des ovaires polykystiques). Elle utilise le <strong>citrate de clomifène</strong> (anti-œstrogène qui lève le rétrocontrôle négatif hypothalamique et augmente la FSH endogène), le <strong>létrozole</strong> (inhibiteur de l'aromatase) ou des <strong>gonadotrophines</strong> injectables (FSH recombinante) à faibles doses, sous surveillance échographique et hormonale (monitorage) pour obtenir un à deux follicules mûrs puis déclencher l'ovulation par une injection d'<strong>hCG</strong> (qui mime le pic de LH : ovulation 36 à 40 heures plus tard). Risque principal : grossesses multiples.</p>
<h4>2. L'insémination intra-utérine (IIU)</h4>
<p>Après stimulation modérée et déclenchement par hCG, le sperme du conjoint (IAC) ou d'un donneur (IAD) est <strong>préparé</strong> au laboratoire (sélection des spermatozoïdes mobiles par gradient de densité ou migration ascendante, ce qui réalise une capacitation in vitro) puis déposé dans la <strong>cavité utérine</strong> par un fin cathéter, 36 heures après le déclenchement. Indications : infertilité cervicale, OATS modérée, infertilité inexpliquée, troubles de l'éjaculation. Il faut au moins un million de spermatozoïdes mobiles inséminés et des trompes perméables. Taux de grossesse : 10 à 15 % par cycle ; six tentatives maximum sont remboursées.</p>
<h4>3. La fécondation in vitro (FIV) classique</h4>
<p>La fécondation a lieu <strong>hors de l'organisme</strong>, au laboratoire. Indications : infertilité <strong>tubaire</strong> (indication historique : première naissance en 1978, Louise Brown ; en France, Amandine en 1982), endométriose, échecs d'IIU, OATS modérée, infertilité inexpliquée. Les étapes sont détaillées dans la section suivante.</p>
<h4>4. L'ICSI (injection intracytoplasmique de spermatozoïde)</h4>
<p>Variante de la FIV mise au point en 1992 : un <strong>seul spermatozoïde</strong>, sélectionné et immobilisé, est <strong>micro-injecté</strong> directement dans le cytoplasme de l'ovocyte débarrassé de son cumulus (décoronisation par hyaluronidase), sous microscope avec micromanipulateurs. Toutes les étapes naturelles (capacitation, réaction acrosomique, traversée de la zone, fusion) sont contournées. Indications : infertilité <strong>masculine sévère</strong> (OATS sévère, spermatozoïdes prélevés chirurgicalement dans l'épididyme ou le testicule en cas d'azoospermie), échecs de fécondation en FIV classique. L'ICSI représente aujourd'hui les deux tiers des FIV en France.</p>
<h4>5. Le don de gamètes et l'accueil d'embryons</h4>
<p>Le <strong>don de spermatozoïdes</strong> (azoospermie sécrétoire, maladie génétique grave transmissible) et le <strong>don d'ovocytes</strong> (insuffisance ovarienne prématurée, Turner, échecs répétés) sont gratuits et, depuis la loi de 2021, non anonymes à la majorité de l'enfant qui le demande. L'<strong>accueil d'embryons</strong> concerne les embryons congelés de couples ayant renoncé à leur projet parental.</p>
<h4>6. La préservation de la fertilité</h4>
<p>Avant un traitement gonadotoxique (chimiothérapie, radiothérapie) ou, depuis 2021, sans motif médical (autoconservation entre 29 et 37 ans pour les femmes, 29 et 45 ans pour les hommes) : <strong>congélation de spermatozoïdes</strong>, <strong>vitrification d'ovocytes</strong> (congélation ultrarapide évitant la formation de cristaux de glace), congélation de tissu ovarien ou testiculaire.</p>`
            },
            {
              titre: "Déroulement d'une FIV et évaluation embryonnaire",
              contenu: `<ol>
<li><strong>Blocage de l'axe hypothalamo-hypophysaire</strong> par un <strong>agoniste</strong> de la GnRH (administration continue : désensibilisation en 10 à 15 jours, protocole long) ou un <strong>antagoniste</strong> de la GnRH (blocage immédiat, protocole court), pour éviter un pic de LH spontané et une ovulation prématurée.</li>
<li><strong>Stimulation ovarienne contrôlée</strong> par <strong>FSH</strong> recombinante ou gonadotrophines urinaires (150 à 300 UI par jour pendant 10 à 12 jours) pour obtenir une croissance <strong>multifolliculaire</strong> (8 à 15 follicules), avec monitorage échographique et dosages d'œstradiol tous les 2 à 3 jours.</li>
<li><strong>Déclenchement</strong> de la maturation ovocytaire finale par <strong>hCG</strong> (5 000 à 10 000 UI) ou par un agoniste de la GnRH (effet « flare-up ») lorsque au moins 3 follicules atteignent 17 à 18 mm : il reproduit le pic de LH et provoque la reprise de la méiose.</li>
<li><strong>Ponction folliculaire</strong> <strong>34 à 36 heures</strong> après le déclenchement, juste avant l'ovulation, par voie transvaginale sous contrôle échographique et sous anesthésie ; le liquide folliculaire est aspiré et les complexes cumulo-ovocytaires isolés. En moyenne 8 à 12 ovocytes sont recueillis, dont 80 % sont matures (métaphase II, premier globule polaire visible).</li>
<li><strong>Préparation du sperme</strong> recueilli le même jour (ou décongelé) : sélection des spermatozoïdes mobiles et capacitation in vitro.</li>
<li><strong>Mise en fécondation</strong> : en FIV classique, chaque ovocyte est mis en contact avec 50 000 à 100 000 spermatozoïdes mobiles dans un milieu de culture à 37 °C sous 5 à 6 % de CO<sub>2</sub> ; en ICSI, un spermatozoïde est injecté par ovocyte mature.</li>
<li><strong>Vérification de la fécondation</strong> à <strong>16 à 20 heures</strong> : présence de <strong>2 pronuclei et 2 globules polaires</strong> (zygote normal). Les zygotes à 1 ou 3 pronuclei sont écartés. Taux de fécondation : 60 à 70 %.</li>
<li><strong>Culture embryonnaire</strong> : J2 (4 cellules), J3 (8 cellules), J5-J6 (blastocyste). Les embryons sont évalués sur le <strong>nombre de cellules</strong> et leur régularité, le <strong>pourcentage de fragments</strong> cytoplasmiques (bonne qualité si moins de 10 à 20 %), la cinétique de division (incubateurs time-lapse) et, au stade blastocyste, le degré d'expansion, la qualité de la masse cellulaire interne et du trophectoderme (classification de Gardner).</li>
<li><strong>Transfert embryonnaire</strong> à J2-J3 ou de préférence à J5 (blastocyste), d'<strong>un seul embryon</strong> le plus souvent (transfert électif d'un embryon unique pour limiter les grossesses multiples), par un cathéter souple introduit dans la cavité utérine, sans anesthésie. Soutien de la phase lutéale par progestérone vaginale.</li>
<li><strong>Vitrification</strong> des embryons surnuméraires de bonne qualité pour des transferts ultérieurs (TEC, transfert d'embryons congelés), avec conservation 5 ans renouvelable.</li>
<li><strong>Test de grossesse</strong> (hCG plasmatique) 12 à 14 jours après le transfert.</li>
</ol>
<p>Résultats : environ 20 à 25 % d'accouchements par ponction, 30 à 40 % par transfert de blastocyste chez les femmes de moins de 35 ans, taux cumulé de 50 à 60 % après 4 tentatives (4 tentatives de FIV sont prises en charge jusqu'au 43<sup>e</sup> anniversaire de la femme).</p>
<p>Complications : <strong>syndrome d'hyperstimulation ovarienne</strong> (ovaires volumineux, ascite, hémoconcentration, risque thromboembolique, favorisé par l'hCG et le nombre élevé de follicules), grossesses multiples (10 à 15 %), grossesse extra-utérine (2 à 5 %), complications de la ponction (hémorragie, infection).</p>
<h4>Le diagnostic préimplantatoire (DPI)</h4>
<p>Il consiste à prélever une ou quelques cellules de l'embryon obtenu par FIV-ICSI (biopsie de blastomères à J3 ou de cellules du trophectoderme au stade blastocyste, à J5) pour rechercher une <strong>anomalie génétique ou chromosomique grave et incurable</strong> déjà identifiée chez les parents (mucoviscidose, myopathie de Duchenne, maladie de Huntington, translocations), puis ne transférer que les embryons indemnes. Il est strictement encadré en France (autorisation par un centre pluridisciplinaire de diagnostic prénatal, pas de dépistage généralisé des aneuploïdies). Le DPI-HLA (« bébé médicament ») est autorisé dans des conditions exceptionnelles.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> chronologie d'une FIV : blocage de l'axe, stimulation par FSH (10-12 jours), déclenchement par hCG, ponction 36 heures après, fécondation, contrôle à 16-20 heures (2 pronuclei), culture jusqu'au blastocyste (J5), transfert d'un embryon, hCG 12 jours après.</div>`
            },
            {
              titre: "Cadre légal et éthique de l'AMP en France",
              contenu: `<p>L'AMP est régie par les <strong>lois de bioéthique</strong> (1994, révisées en 2004, 2011 et 2021) et placée sous le contrôle de l'<strong>Agence de la biomédecine</strong>. Les grands principes à connaître :</p>
<ul>
<li><strong>Accès</strong> : depuis la loi du 2 août 2021, l'AMP est ouverte aux <strong>couples hétérosexuels</strong>, aux <strong>couples de femmes</strong> et aux <strong>femmes non mariées</strong>, sans condition d'infertilité médicale. Elle est prise en charge par l'Assurance maladie jusqu'au 43<sup>e</sup> anniversaire de la femme (prélèvement d'ovocytes) et au 60<sup>e</sup> anniversaire pour l'homme ; les deux membres du couple doivent être vivants et consentants (pas d'insémination post mortem).</li>
<li><strong>Don de gamètes</strong> : gratuit, volontaire ; levée possible de l'anonymat à la demande de l'enfant devenu majeur (accès à l'identité du donneur pour les dons réalisés après septembre 2022) ; le double don de gamètes est désormais autorisé.</li>
<li><strong>Embryons</strong> : conservés 5 ans (consultation annuelle du couple) ; devenir possible : poursuite du projet parental, accueil par un autre couple, don à la recherche (encadrée), arrêt de la conservation. La création d'embryons à des fins de recherche ou commerciales est interdite ; la recherche sur embryons surnuméraires est autorisée sous conditions, dans la limite de 14 jours de culture.</li>
<li><strong>Interdits</strong> : <strong>gestation pour autrui</strong> (GPA, interdite en France), clonage reproductif, sélection du sexe sans raison médicale, modification du génome de l'embryon transférée, eugénisme.</li>
<li><strong>DPI</strong> : limité aux maladies génétiques d'une particulière gravité, reconnues incurables au moment du diagnostic ; DPN encadré par les centres pluridisciplinaires de diagnostic prénatal.</li>
<li><strong>Autoconservation</strong> de gamètes sans motif médical autorisée depuis 2021.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> l'AMP est prise en charge jusqu'au 43<sup>e</sup> anniversaire de la femme, avec au maximum <strong>6 inséminations</strong> et <strong>4 FIV</strong> (une naissance remet les compteurs à zéro). La « 4<sup>e</sup> tentative » désigne une ponction suivie de transfert ; un transfert d'embryon congelé ne compte pas pour une tentative.</div>`
            },
            {
              titre: "La contraception : mécanismes et efficacité",
              contenu: `<p>La <strong>contraception</strong> regroupe les méthodes réversibles empêchant la survenue d'une grossesse. Son <strong>efficacité</strong> se mesure par l'<strong>indice de Pearl</strong> : nombre de grossesses pour 100 femmes utilisant la méthode pendant un an (100 années-femmes). On distingue l'efficacité théorique (utilisation parfaite) et l'efficacité pratique (utilisation courante, incluant les oublis). Sans contraception, l'indice est de 85.</p>
<p>D'un point de vue embryologique, une méthode peut agir sur l'<strong>ovulation</strong>, sur la <strong>rencontre des gamètes</strong> (glaire, trompes, barrière mécanique), sur la <strong>fécondation</strong> ou sur l'<strong>implantation</strong>. Les méthodes contraceptives au sens strict agissent avant l'implantation ; l'interruption d'une grossesse implantée relève de l'<strong>IVG</strong> (autorisée en France jusqu'à 14 SA, soit 16 SA depuis 2022, par voie médicamenteuse avec mifépristone anti-progestérone et misoprostol jusqu'à 9 SA en ville, ou par voie instrumentale).</p>
<table>
<thead><tr><th>Méthode</th><th>Composition / principe</th><th>Mécanisme d'action principal</th><th>Indice de Pearl (théorique / pratique)</th></tr></thead>
<tbody>
<tr><td><strong>Pilule œstroprogestative</strong> (combinée)</td><td>Éthinylœstradiol (15 à 35 µg) ou œstradiol + progestatif ; 21 jours sur 28 ou en continu ; aussi patch et anneau vaginal</td><td><strong>Blocage de l'ovulation</strong> par rétrocontrôle négatif sur l'axe (pas de pic de LH) ; épaississement de la glaire ; atrophie de l'endomètre</td><td>0,3 / 8 à 9</td></tr>
<tr><td><strong>Pilule microprogestative</strong></td><td>Progestatif seul en continu (désogestrel 75 µg, drospirénone, lévonorgestrel 30 µg)</td><td>Glaire cervicale imperméable, atrophie endométriale ; inhibition de l'ovulation dans 97 % des cas pour le désogestrel (moins pour le lévonorgestrel)</td><td>0,3 / 8 à 9 (prise à heure fixe, retard toléré 12 h pour le désogestrel, 3 h pour le lévonorgestrel)</td></tr>
<tr><td><strong>Implant sous-cutané</strong></td><td>Étonogestrel, 3 ans</td><td>Blocage de l'ovulation + glaire</td><td>0,05 / 0,05 (méthode la plus efficace)</td></tr>
<tr><td><strong>Progestatif injectable</strong></td><td>Médroxyprogestérone retard, tous les 3 mois</td><td>Blocage de l'ovulation</td><td>0,2 / 6</td></tr>
<tr><td><strong>DIU au cuivre</strong> (stérilet)</td><td>Dispositif intra-utérin, 5 à 10 ans</td><td>Effet <strong>spermicide et cytotoxique</strong> du cuivre, réaction inflammatoire endométriale empêchant la fécondation et l'implantation ; pas d'effet sur l'ovulation</td><td>0,6 / 0,8</td></tr>
<tr><td><strong>DIU au lévonorgestrel</strong></td><td>Libération locale de 8 à 20 µg par jour, 3 à 8 ans</td><td>Atrophie endométriale, glaire épaisse ; ovulation généralement conservée</td><td>0,2 / 0,2</td></tr>
<tr><td><strong>Préservatif</strong> masculin ou féminin</td><td>Barrière mécanique</td><td>Empêche la rencontre des gamètes ; seule méthode protégeant des IST</td><td>2 / 13 à 18</td></tr>
<tr><td><strong>Diaphragme, cape, spermicides</strong></td><td>Barrière + agent spermicide</td><td>Rencontre des gamètes</td><td>6 à 16 / 12 à 28</td></tr>
<tr><td><strong>Méthodes naturelles</strong></td><td>Abstinence périodique (Ogino, température, glaire, symptothermie), retrait</td><td>Évitement de la fenêtre de fertilité</td><td>1 à 9 / 20 à 25</td></tr>
<tr><td><strong>Stérilisation</strong></td><td>Ligature ou pose de clips tubaires ; vasectomie</td><td>Interruption du trajet des gamètes ; considérée définitive ; autorisée à partir de 18 ans après délai de réflexion de 4 mois</td><td>0,5 / 0,5 ; vasectomie 0,1</td></tr>
</tbody>
</table>
<h4>La contraception d'urgence</h4>
<ul>
<li><strong>Lévonorgestrel</strong> 1,5 mg en prise unique, dans les <strong>72 heures</strong> (efficacité maximale dans les 12 premières heures, décroissante ensuite) : retarde ou inhibe l'ovulation si elle n'a pas encore eu lieu ; inefficace après l'ovulation ; en vente libre et gratuit.</li>
<li><strong>Ulipristal acétate</strong> 30 mg (modulateur sélectif des récepteurs à la progestérone), dans les <strong>120 heures</strong> (5 jours) : retarde l'ovulation même en période pré-ovulatoire immédiate (inhibe la rupture folliculaire malgré le début du pic de LH) ; plus efficace que le lévonorgestrel.</li>
<li><strong>DIU au cuivre</strong> posé dans les <strong>5 jours</strong> : méthode la plus efficace (échec inférieur à 0,1 %), agit sur la fécondation et l'implantation, et assure ensuite une contraception durable.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les œstroprogestatifs et l'implant <strong>bloquent l'ovulation</strong> ; le DIU au cuivre agit sur la <strong>fécondation et l'implantation</strong> sans bloquer l'ovulation ; les microprogestatifs agissent surtout sur la <strong>glaire</strong>. L'implant est la méthode la plus efficace (Pearl 0,05) ; le préservatif est la seule protection contre les IST.</div>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les contre-indications des œstroprogestatifs tiennent au risque <strong>thromboembolique</strong> veineux (multiplié par 3 à 4, davantage avec les progestatifs de 3<sup>e</sup> génération) et artériel : antécédents thromboemboliques, tabac après 35 ans, migraine avec aura, hypertension, diabète compliqué, cancer du sein. Les progestatifs seuls et les DIU n'ont pas ces contre-indications vasculaires.</div>`
            }
          ],
          points_cles: [
            "L'infertilité est définie par l'absence de grossesse après 12 mois de rapports réguliers sans contraception ; elle concerne 15 % des couples ; causes féminines, masculines et mixtes ou inexpliquées à parts à peu près égales.",
            "Le bilan de première intention associe spermogramme, courbe de température ou progestérone à J21, bilan hormonal à J3 (FSH, LH, œstradiol, AMH), échographie pelvienne et hystérosalpingographie.",
            "L'insémination intra-utérine dépose des spermatozoïdes préparés dans la cavité utérine 36 heures après déclenchement par hCG ; elle nécessite des trompes perméables ; 6 tentatives remboursées.",
            "La FIV classique met en contact ovocytes et spermatozoïdes in vitro ; l'ICSI injecte un spermatozoïde dans l'ovocyte et contourne capacitation, réaction acrosomique et fusion ; indication : infertilité masculine sévère.",
            "Déroulement d'une FIV : blocage de l'axe (agoniste ou antagoniste GnRH), stimulation par FSH, déclenchement par hCG, ponction à 36 heures, contrôle des 2 pronuclei à 16-20 heures, culture jusqu'à J5, transfert d'un embryon, vitrification des surnuméraires.",
            "En France (loi de 2021), l'AMP est ouverte aux couples hétérosexuels, couples de femmes et femmes seules ; prise en charge jusqu'à 43 ans ; 4 FIV ; don de gamètes gratuit avec levée possible de l'anonymat ; GPA interdite.",
            "Le DPI recherche sur l'embryon in vitro une maladie génétique grave et incurable connue dans la famille ; il est strictement encadré.",
            "L'indice de Pearl mesure l'efficacité contraceptive (grossesses pour 100 femmes par an) ; l'implant est la méthode la plus efficace (0,05), les œstroprogestatifs bloquent l'ovulation, le DIU au cuivre empêche la fécondation et l'implantation.",
            "Contraception d'urgence : lévonorgestrel (72 h), ulipristal (120 h), DIU au cuivre (5 jours, le plus efficace) ; elle agit en retardant l'ovulation et n'est pas abortive."
          ],
          lexique: [
            { terme: "Infertilité", def: "Absence de grossesse après 12 mois de rapports sexuels réguliers sans contraception." },
            { terme: "Fécondabilité", def: "Probabilité de concevoir au cours d'un cycle menstruel (environ 25 % à 25 ans)." },
            { terme: "Insémination intra-utérine", def: "Dépôt de spermatozoïdes préparés dans la cavité utérine au moment de l'ovulation, après stimulation et déclenchement par hCG." },
            { terme: "FIV", def: "Fécondation in vitro : mise en contact des ovocytes ponctionnés et des spermatozoïdes au laboratoire, puis transfert embryonnaire." },
            { terme: "ICSI", def: "Injection intracytoplasmique d'un spermatozoïde unique dans l'ovocyte, indiquée dans les infertilités masculines sévères." },
            { terme: "Vitrification", def: "Congélation ultrarapide des ovocytes ou des embryons évitant la formation de cristaux de glace." },
            { terme: "Diagnostic préimplantatoire", def: "Analyse génétique de cellules prélevées sur l'embryon in vitro avant transfert, pour une maladie grave et incurable connue chez les parents." },
            { terme: "Indice de Pearl", def: "Nombre de grossesses survenant chez 100 femmes utilisant une méthode contraceptive pendant un an." },
            { terme: "Syndrome d'hyperstimulation ovarienne", def: "Complication de la stimulation ovarienne associant gros ovaires, ascite, hémoconcentration et risque thromboembolique." }
          ],
          qcm: [
            {
              q: "Concernant l'infertilité du couple :",
              options: [
                "A. Elle se définit par l'absence de grossesse après 6 mois de rapports réguliers sans contraception.",
                "B. Elle concerne environ 15 % des couples.",
                "C. Les causes masculines sont retrouvées, seules ou associées, dans environ un tiers à la moitié des cas.",
                "D. Le syndrome des ovaires polykystiques est la première cause d'infertilité par anovulation.",
                "E. Les infections à Chlamydia trachomatis sont une cause majeure d'infertilité tubaire."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : la définition retient 12 mois. B, C, D et E sont vraies."
            },
            {
              q: "Concernant l'insémination intra-utérine :",
              options: [
                "A. Elle nécessite des trompes perméables.",
                "B. Le sperme est préparé au laboratoire, ce qui réalise une capacitation in vitro.",
                "C. Elle est réalisée environ 36 heures après le déclenchement de l'ovulation par hCG.",
                "D. Elle est la technique de choix en cas d'azoospermie.",
                "E. La fécondation a lieu in vitro."
              ],
              bonnes: [0, 1, 2],
              explication: "A, B et C sont vraies. D est fausse : en l'absence de spermatozoïdes dans l'éjaculat, on recourt au prélèvement chirurgical suivi d'ICSI ou au don de spermatozoïdes. E est fausse : la fécondation a lieu in vivo, dans la trompe."
            },
            {
              q: "Concernant la fécondation in vitro :",
              options: [
                "A. La ponction folliculaire est réalisée 34 à 36 heures après l'injection d'hCG.",
                "B. Un zygote normalement fécondé présente deux pronuclei et deux globules polaires 16 à 20 heures après la mise en fécondation.",
                "C. En ICSI, le spermatozoïde doit réaliser sa réaction acrosomique avant d'être injecté.",
                "D. Le transfert d'un blastocyste a lieu au 5e jour de culture.",
                "E. Les agonistes de la GnRH en administration continue sont utilisés pour empêcher un pic de LH prématuré."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : en ICSI, le spermatozoïde est injecté directement dans le cytoplasme, la réaction acrosomique est contournée."
            },
            {
              q: "Concernant le cadre légal de l'AMP en France :",
              options: [
                "A. Elle est accessible aux couples de femmes et aux femmes non mariées depuis 2021.",
                "B. La gestation pour autrui est autorisée sous conditions.",
                "C. Le don de gamètes est gratuit.",
                "D. La prise en charge concerne au maximum 4 tentatives de FIV.",
                "E. Le diagnostic préimplantatoire peut être réalisé pour choisir le sexe de l'enfant à la demande des parents."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : la GPA est interdite en France. E est fausse : la sélection du sexe sans raison médicale est interdite ; le DPI est réservé aux maladies génétiques graves et incurables."
            },
            {
              q: "Concernant les mécanismes d'action des contraceptifs :",
              options: [
                "A. La pilule œstroprogestative agit principalement en bloquant l'ovulation.",
                "B. Le DIU au cuivre bloque l'ovulation.",
                "C. Les pilules microprogestatives agissent principalement sur la glaire cervicale.",
                "D. Le préservatif est la seule méthode protégeant contre les infections sexuellement transmissibles.",
                "E. L'implant à l'étonogestrel est la méthode contraceptive la plus efficace."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le DIU au cuivre n'agit pas sur l'ovulation mais sur la fécondation (effet spermicide) et l'implantation (réaction inflammatoire endométriale)."
            },
            {
              q: "Concernant l'efficacité contraceptive et la contraception d'urgence :",
              options: [
                "A. L'indice de Pearl correspond au nombre de grossesses pour 100 femmes utilisant une méthode pendant un an.",
                "B. Le lévonorgestrel en contraception d'urgence peut être pris jusqu'à 120 heures après le rapport.",
                "C. L'ulipristal acétate agit en retardant l'ovulation.",
                "D. La contraception d'urgence hormonale provoque l'expulsion d'un embryon déjà implanté.",
                "E. Le DIU au cuivre peut être utilisé comme contraception d'urgence dans les 5 jours."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : le lévonorgestrel est indiqué dans les 72 heures ; c'est l'ulipristal qui peut être pris jusqu'à 120 heures. D est fausse : la contraception d'urgence hormonale agit avant l'ovulation ; elle n'est pas abortive et est inefficace une fois l'implantation réalisée."
            }
          ]
        }
      ]
    },
    {
      titre: "Partie 2 — Les quatre premières semaines",
      chapitres: [
        {
          id: "premiere-semaine",
          titre: "Première semaine : segmentation, blastocyste et migration tubaire",
          duree: 30,
          objectifs: [
            "Décrire la segmentation : chronologie, caractéristiques des divisions, notion de blastomère.",
            "Expliquer la compaction et la formation de la morula.",
            "Décrire la structure du blastocyste (trophoblaste, bouton embryonnaire, blastocèle) et la première différenciation cellulaire.",
            "Expliquer l'éclosion et son rôle dans l'implantation.",
            "Décrire la migration tubaire et sa chronologie, et ses anomalies (grossesse extra-utérine)."
          ],
          sections: [
            {
              titre: "La segmentation : des divisions sans croissance",
              contenu: `<p>La <strong>segmentation</strong> (ou clivage) est la succession de divisions mitotiques du zygote qui débute environ 30 heures après la fécondation et se poursuit pendant la migration dans la trompe. Les cellules filles sont appelées <strong>blastomères</strong>. La segmentation a plusieurs caractéristiques fondamentales :</p>
<ul>
<li>Elle se déroule <strong>à l'intérieur de la zone pellucide</strong>, qui reste intacte jusqu'au 5<sup>e</sup>-6<sup>e</sup> jour : le volume total de l'embryon <strong>ne change pas</strong> (environ 120 µm de diamètre). Les divisions se font donc <strong>sans croissance</strong> : chaque blastomère est deux fois plus petit que la cellule mère, et le rapport nucléo-cytoplasmique augmente progressivement pour retrouver celui d'une cellule somatique. Les cycles cellulaires sont dépourvus de phases G1 et G2 significatives.</li>
<li>Les divisions sont <strong>holoblastiques</strong> (totales : tout le cytoplasme est partagé, ce qui est possible car l'ovocyte humain est pauvre en réserves vitellines, œuf dit alécithe ou oligolécithe), <strong>égales</strong> ou subégales (blastomères de taille voisine) et <strong>asynchrones</strong> : les blastomères ne se divisent pas tous en même temps, d'où l'existence de stades à nombre impair de cellules (3, 5, 7 cellules).</li>
<li>Elles sont <strong>rotationnelles</strong> : la première division est méridienne (passe par les pôles), puis l'un des deux blastomères se divise de façon méridienne et l'autre de façon équatoriale.</li>
<li>Les premières divisions sont sous <strong>contrôle maternel</strong> : elles utilisent les ARNm et les protéines stockés dans l'ovocyte ; l'<strong>activation du génome embryonnaire</strong> (transition materno-zygotique) a lieu entre le stade 4 et le stade 8 cellules (J2-J3) chez l'homme. Un embryon porteur d'une anomalie génétique létale peut donc paraître normal jusqu'au stade 8 cellules.</li>
<li>Elles sont lentes au début (un cycle toutes les 12 à 24 heures), beaucoup plus que chez les autres espèces.</li>
</ul>
<h4>Chronologie</h4>
<table>
<thead><tr><th>Moment</th><th>Stade</th><th>Localisation</th><th>Remarques</th></tr></thead>
<tbody>
<tr><td>J0</td><td>Fécondation, zygote</td><td>Ampoule tubaire</td><td>Pronuclei visibles à 12-18 h</td></tr>
<tr><td>J1 (environ 30 heures)</td><td>2 blastomères</td><td>Ampoule</td><td>Première division de segmentation</td></tr>
<tr><td>J2 (40 à 50 heures)</td><td>4 blastomères</td><td>Ampoule puis isthme</td><td>Activation du génome embryonnaire débutante</td></tr>
<tr><td>J3 (72 heures)</td><td>8 blastomères, <strong>compaction</strong></td><td>Isthme</td><td>Première acquisition de polarité ; biopsie embryonnaire possible (DPI)</td></tr>
<tr><td>J4 (96 heures)</td><td>16 à 32 blastomères : <strong>morula</strong></td><td>Jonction utéro-tubaire, entrée dans l'utérus</td><td>Cellules internes et externes distinctes</td></tr>
<tr><td>J5</td><td><strong>Blastocyste</strong> (environ 100 cellules) : cavitation</td><td>Cavité utérine</td><td>Trophoblaste et bouton embryonnaire</td></tr>
<tr><td>J5-J6</td><td><strong>Éclosion</strong> (hatching) : sortie de la zone pellucide</td><td>Cavité utérine</td><td>Blastocyste de 150 à 200 µm, expansion</td></tr>
<tr><td>J6-J7</td><td>Début de l'<strong>implantation</strong></td><td>Endomètre (face postérieure ou antérieure du fond utérin)</td><td>Stade 4 de Carnegie</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la segmentation se fait <strong>sans augmentation de volume</strong> : l'embryon de 8 cellules a la même taille que le zygote. Le blastocyste ne grossit qu'après l'éclosion, lorsque la zone pellucide ne le contraint plus.</div>`
            },
            {
              titre: "La compaction et la morula",
              contenu: `<p>Jusqu'au stade 8 cellules, les blastomères sont des sphères lâchement accolées, encore <strong>totipotentes</strong> : chacun pris isolément peut donner un embryon complet avec ses annexes (c'est le fondement de la biopsie embryonnaire au 3<sup>e</sup> jour pour le DPI, et l'un des mécanismes des jumeaux monozygotes). Au stade 8 cellules (J3) survient la <strong>compaction</strong> : les blastomères s'aplatissent les uns contre les autres, maximisent leurs contacts et établissent des <strong>jonctions</strong> intercellulaires : jonctions serrées (étanchéité) entre cellules externes, desmosomes et jonctions communicantes (gap) entre toutes les cellules. La compaction dépend de la <strong>E-cadhérine</strong> (uvomoruline), molécule d'adhérence calcium-dépendante qui se redistribue aux zones de contact. Les contours cellulaires ne sont plus visibles : l'embryon prend l'aspect d'une masse lisse.</p>
<p>La compaction induit la première <strong>polarisation</strong> cellulaire : chaque blastomère externe acquiert un <strong>pôle apical</strong> (libre, portant des microvillosités, exposé au milieu) et un <strong>pôle basolatéral</strong> (en contact avec les voisins). Les divisions suivantes, selon leur orientation, produisent soit deux cellules externes polarisées, soit une cellule externe et une cellule interne non polarisée : c'est l'origine des deux premières populations cellulaires.</p>
<p>Au stade <strong>16 à 32 cellules</strong> (J4), l'embryon est une <strong>morula</strong> (petite mûre), encore entourée de la zone pellucide. On y distingue :</p>
<ul>
<li>des <strong>cellules externes</strong> (une couche périphérique), polarisées, unies par des jonctions serrées, qui expriment le facteur de transcription <strong>CDX2</strong> et deviendront le <strong>trophoblaste</strong> ;</li>
<li>des <strong>cellules internes</strong> (quelques cellules au centre), non polarisées, exprimant <strong>OCT4</strong>, <strong>NANOG</strong> et SOX2, qui deviendront le <strong>bouton embryonnaire</strong> (masse cellulaire interne).</li>
</ul>
<p>La morula franchit la jonction utéro-tubaire et pénètre dans la <strong>cavité utérine</strong> vers J4.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> compaction à <strong>8 cellules (J3)</strong>, grâce à la <strong>E-cadhérine</strong> ; morula de <strong>16 à 32 cellules (J4)</strong> ; les cellules externes donneront le trophoblaste, les cellules internes le bouton embryonnaire. Avant la compaction, les blastomères sont totipotents.</div>`
            },
            {
              titre: "Le blastocyste : la première différenciation",
              contenu: `<p>Vers le 5<sup>e</sup> jour (stade d'environ 60 à 100 cellules), les cellules externes de la morula, unies par leurs jonctions serrées, se comportent comme un épithélium de transport : grâce à des pompes Na<sup>+</sup>/K<sup>+</sup> ATPase basolatérales, elles font passer du sodium puis de l'eau vers l'intérieur. Les espaces intercellulaires se remplissent de liquide et confluent en une cavité unique : c'est la <strong>cavitation</strong>, qui transforme la morula en <strong>blastocyste</strong> (stade 3 de Carnegie). Le blastocyste comporte trois éléments :</p>
<ul>
<li>le <strong>trophoblaste</strong> (ou trophectoderme) : couche périphérique unistratifiée de cellules aplaties qui forme la paroi du blastocyste (environ 70 à 80 % des cellules) ; il est à l'origine de la partie fœtale du <strong>placenta</strong> et des membranes (chorion) et ne participe jamais à la constitution de l'embryon lui-même ;</li>
<li>le <strong>bouton embryonnaire</strong> (masse cellulaire interne, embryoblaste) : amas de 20 à 30 cellules pluripotentes plaqué contre le trophoblaste à un pôle, le <strong>pôle embryonnaire</strong> ; il donnera l'<strong>embryon</strong> tout entier ainsi que l'amnios, la vésicule vitelline et l'allantoïde. C'est de lui que sont dérivées les cellules souches embryonnaires ;</li>
<li>le <strong>blastocèle</strong> (cavité blastocystique) : cavité remplie de liquide occupant le pôle opposé, dit <strong>pôle abembryonnaire</strong>.</li>
</ul>
<p>Le trophoblaste au contact du bouton embryonnaire est appelé <strong>trophoblaste polaire</strong> ; celui qui borde le blastocèle est le <strong>trophoblaste mural</strong>. Le blastocyste présente ainsi pour la première fois un <strong>axe</strong> (embryonnaire-abembryonnaire) : c'est l'implantation par le pôle embryonnaire qui orientera l'embryon.</p>
<h4>La première différenciation</h4>
<p>La séparation trophoblaste / bouton embryonnaire est la <strong>première différenciation</strong> du développement. Elle repose sur l'exclusion mutuelle de deux facteurs de transcription : <strong>CDX2</strong> (cellules externes, trophoblaste, sous le contrôle de la voie Hippo inactivée par la polarité) et <strong>OCT4</strong> (cellules internes, pluripotence). Les cellules du bouton embryonnaire ne sont plus totipotentes mais <strong>pluripotentes</strong> : elles peuvent donner tous les tissus de l'embryon, mais plus le trophoblaste.</p>
<p>Dès J5-J6, une <strong>seconde différenciation</strong> s'amorce au sein du bouton embryonnaire : les cellules situées face au blastocèle s'aplatissent en une couche, l'<strong>hypoblaste</strong> (endoderme primitif, exprimant GATA6), tandis que les cellules restantes constituent l'<strong>épiblaste</strong> (exprimant NANOG). Cette différenciation sera complète au début de la 2<sup>e</sup> semaine (disque didermique).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> en FIV, le blastocyste à J5 est coté selon Gardner par son degré d'expansion (1 à 6), la qualité de la masse cellulaire interne (A à C) et celle du trophectoderme (A à C) : un blastocyste « 4AA » est de très bonne qualité. La biopsie de 5 à 10 cellules du trophectoderme à J5 est la méthode actuelle du DPI, car elle ne touche pas aux cellules qui formeront l'embryon.</div>`
            },
            {
              titre: "L'éclosion du blastocyste",
              contenu: `<p>Entre le 5<sup>e</sup> et le 6<sup>e</sup> jour, le blastocyste doit se débarrasser de la <strong>zone pellucide</strong>, qui l'a protégé pendant la migration et a empêché son adhésion à l'épithélium tubaire. C'est l'<strong>éclosion</strong> (hatching). Elle résulte de deux mécanismes :</p>
<ul>
<li>la <strong>lyse enzymatique</strong> locale de la zone pellucide par des protéases sécrétées par le trophoblaste (dont la strypsine, trypsin-like) et par l'endomètre ;</li>
<li>les <strong>contractions et expansions</strong> rythmiques du blastocyste, dont le volume augmente par accumulation de liquide dans le blastocèle (passage de 120 à 150-200 µm, puis à 300 µm) : la pression amincit et fissure la zone, par laquelle le blastocyste s'extrait en « sablier » en quelques heures.</li>
</ul>
<p>Une fois libéré (blastocyste <strong>éclos</strong> ou libre), le trophoblaste est <strong>directement exposé</strong> à l'endomètre : il peut alors y adhérer. L'éclosion est donc la condition préalable indispensable à l'implantation. Elle a lieu dans la <strong>cavité utérine</strong>, le blastocyste étant alors maintenu en vie par les sécrétions des glandes endométriales (« lait utérin », riche en glycogène et glycoprotéines) et flottant librement 1 à 2 jours.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la zone pellucide persiste pendant toute la segmentation et disparaît <strong>avant l'implantation</strong> (J5-J6), et non lors de la fécondation ni pendant la 2<sup>e</sup> semaine. Son rôle est triple : filtre spécifique d'espèce et blocage de la polyspermie à la fécondation ; maintien de la cohésion des blastomères ; prévention de l'adhésion prématurée à la trompe (prévention des grossesses extra-utérines).</div>`
            },
            {
              titre: "La migration tubaire et ses anomalies",
              contenu: `<p>Pendant la segmentation, l'embryon est <strong>transporté passivement</strong> de l'ampoule tubaire vers la cavité utérine : c'est la <strong>migration tubaire</strong>, qui dure <strong>3 à 4 jours</strong> (arrivée dans l'utérus à J4 au stade de morula). L'embryon n'a aucune mobilité propre ; il est déplacé par :</p>
<ul>
<li>les <strong>battements des cils</strong> de l'épithélium tubaire, orientés vers l'utérus et stimulés par les œstrogènes ;</li>
<li>le <strong>péristaltisme</strong> de la musculeuse tubaire ;</li>
<li>le <strong>courant du liquide tubaire</strong>.</li>
</ul>
<p>Le passage de l'<strong>isthme</strong> (portion étroite proche de l'utérus) est ralenti pendant 1 à 2 jours par un spasme sphinctérien levé par la progestérone, ce qui synchronise l'arrivée de l'embryon dans l'utérus avec la réceptivité de l'endomètre (fenêtre d'implantation à J6-J10 après l'ovulation, soit J20-J24 du cycle). Ce synchronisme est capital : un embryon arrivé trop tôt ou trop tard ne s'implante pas.</p>
<p>Pendant le trajet, l'embryon se nourrit de ses propres réserves puis des sécrétions tubaires (pyruvate, lactate, puis glucose au stade blastocyste) : son métabolisme passe d'une utilisation du pyruvate à une utilisation du glucose, ce que reproduisent les milieux de culture séquentiels de FIV.</p>
<h4>Anomalies de la migration</h4>
<ul>
<li>La <strong>grossesse extra-utérine (GEU)</strong> : implantation en dehors de la cavité utérine, dans <strong>95 à 98 % des cas dans la trompe</strong> (ampoule 70 %, isthme 12 %, pavillon, portion interstitielle), plus rarement dans l'ovaire, la cavité abdominale ou le col. Elle résulte d'un retard de migration (altération des cils ou de la motricité tubaire par des <strong>séquelles de salpingite</strong>, surtout à Chlamydia, l'endométriose, le tabac, une chirurgie tubaire antérieure, la stimulation ovarienne, le DIU en place) ou d'une éclosion prématurée. Fréquence : 1 à 2 % des grossesses. L'embryon se développe quelques semaines puis la trompe se rompt vers 6 à 8 SA : hémorragie interne (hémopéritoine) mettant en jeu la vie de la femme, première cause de mortalité maternelle au premier trimestre. Le diagnostic repose sur des douleurs pelviennes, des métrorragies, une hCG positive mais à <strong>cinétique anormale</strong> (ne doublant pas en 48 heures) et une échographie montrant un utérus vide avec une masse latéro-utérine. Traitement : méthotrexate (antifolique) ou salpingectomie cœlioscopique.</li>
<li>La <strong>rétention tubaire</strong> prolongée ou l'<strong>arrêt de développement</strong> embryonnaire : la plupart des embryons porteurs d'anomalies chromosomiques majeures s'arrêtent de se développer avant l'implantation ou ne s'implantent pas (perte préclinique estimée à 30 %).</li>
<li>Le <strong>passage trop rapide</strong> (DIU, hyperœstrogénie) empêche l'implantation par désynchronisation.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> migration tubaire passive de 3 à 4 jours, arrivée dans l'utérus à J4 (morula), blastocyste à J5, éclosion à J5-J6, implantation à partir de J6-J7. La GEU est tubaire dans plus de 95 % des cas (ampoule surtout) ; principal facteur de risque : les antécédents d'infection génitale haute.</div>`
            }
          ],
          points_cles: [
            "La segmentation est une suite de mitoses sans croissance à l'intérieur de la zone pellucide : les blastomères sont de plus en plus petits, l'embryon garde un diamètre de 120 µm.",
            "Chronologie : 2 cellules à 30 h (J1), 4 cellules à J2, 8 cellules et compaction à J3, morula de 16-32 cellules à J4, blastocyste à J5, éclosion à J5-J6, implantation à partir de J6-J7.",
            "Les divisions sont holoblastiques, égales, asynchrones et rotationnelles ; le génome embryonnaire s'active entre les stades 4 et 8 cellules.",
            "La compaction au stade 8 cellules dépend de la E-cadhérine et polarise les cellules externes ; avant elle, les blastomères sont totipotents.",
            "Le blastocyste comprend le trophoblaste (CDX2, futur placenta), le bouton embryonnaire (OCT4, NANOG, futur embryon et annexes) et le blastocèle ; c'est la première différenciation.",
            "L'embryon s'implante par son pôle embryonnaire ; le trophoblaste polaire est au contact du bouton embryonnaire.",
            "L'éclosion (J5-J6) libère le blastocyste de la zone pellucide par lyse enzymatique et expansion : elle est indispensable à l'adhésion à l'endomètre.",
            "La migration tubaire est passive (cils, péristaltisme, liquide tubaire), dure 3 à 4 jours et est synchronisée avec la fenêtre d'implantation (J20-J24 du cycle).",
            "La grossesse extra-utérine (1 à 2 % des grossesses) est tubaire dans 95 % des cas, surtout ampullaire, favorisée par les séquelles de salpingite ; la cinétique de l'hCG est anormale."
          ],
          lexique: [
            { terme: "Segmentation", def: "Succession de divisions mitotiques du zygote, sans croissance, à l'intérieur de la zone pellucide, produisant les blastomères." },
            { terme: "Blastomère", def: "Cellule issue de la segmentation du zygote." },
            { terme: "Compaction", def: "Resserrement des blastomères au stade 8 cellules par des jonctions E-cadhérine-dépendantes, avec polarisation des cellules externes." },
            { terme: "Morula", def: "Embryon de 16 à 32 cellules (J4), compacté, encore entouré de la zone pellucide, formé de cellules externes et internes." },
            { terme: "Blastocyste", def: "Embryon de J5 formé d'un trophoblaste périphérique, d'un bouton embryonnaire et d'une cavité, le blastocèle." },
            { terme: "Trophoblaste", def: "Couche cellulaire périphérique du blastocyste, à l'origine de la partie fœtale du placenta et du chorion ; ne participe pas à l'embryon." },
            { terme: "Bouton embryonnaire", def: "Masse cellulaire interne pluripotente du blastocyste, à l'origine de l'embryon et de certaines annexes (amnios, vésicule vitelline, allantoïde)." },
            { terme: "Éclosion", def: "Sortie du blastocyste hors de la zone pellucide (J5-J6), préalable indispensable à l'implantation." },
            { terme: "Totipotence / pluripotence", def: "Capacité d'une cellule à donner un organisme entier avec ses annexes (totipotence, blastomères avant compaction) ou tous les tissus embryonnaires sans le trophoblaste (pluripotence, bouton embryonnaire)." },
            { terme: "Grossesse extra-utérine", def: "Implantation en dehors de la cavité utérine, tubaire dans 95 % des cas, avec risque de rupture et d'hémopéritoine." }
          ],
          qcm: [
            {
              q: "Concernant la segmentation :",
              options: [
                "A. Elle s'accompagne d'une augmentation progressive du volume de l'embryon.",
                "B. Les divisions sont asynchrones, ce qui explique l'existence de stades à nombre impair de cellules.",
                "C. Le stade 2 cellules est atteint environ 30 heures après la fécondation.",
                "D. Le génome embryonnaire est actif dès la première division.",
                "E. Elle se déroule à l'intérieur de la zone pellucide."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : le volume reste constant, les blastomères sont de plus en plus petits. B, C et E sont vraies. D est fausse : les premières divisions dépendent des ARNm et protéines maternels ; l'activation du génome embryonnaire survient entre les stades 4 et 8 cellules."
            },
            {
              q: "Concernant la compaction et la morula :",
              options: [
                "A. La compaction survient au stade 8 cellules, vers le 3e jour.",
                "B. La compaction dépend de la E-cadhérine.",
                "C. Les cellules externes de la morula sont à l'origine du bouton embryonnaire.",
                "D. La morula pénètre dans la cavité utérine vers le 4e jour.",
                "E. Après la compaction, chaque blastomère reste totipotent."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : les cellules externes donnent le trophoblaste ; les cellules internes donnent le bouton embryonnaire. E est fausse : la compaction et la polarisation marquent la perte de la totipotence."
            },
            {
              q: "Concernant le blastocyste :",
              options: [
                "A. Il se forme vers le 5e jour par accumulation de liquide entre les cellules (cavitation).",
                "B. Le trophoblaste est à l'origine de l'embryon.",
                "C. Le bouton embryonnaire est situé au pôle embryonnaire, contre le trophoblaste polaire.",
                "D. Le facteur de transcription CDX2 caractérise les cellules du trophoblaste.",
                "E. Les cellules du bouton embryonnaire sont pluripotentes."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le trophoblaste donne la partie fœtale du placenta et le chorion, jamais l'embryon ; celui-ci dérive du bouton embryonnaire."
            },
            {
              q: "Concernant la zone pellucide et l'éclosion :",
              options: [
                "A. La zone pellucide disparaît au moment de la fécondation.",
                "B. L'éclosion a lieu vers le 5e-6e jour, dans la cavité utérine.",
                "C. L'éclosion est indispensable pour que le trophoblaste adhère à l'endomètre.",
                "D. La zone pellucide empêche l'adhésion de l'embryon à la paroi tubaire pendant la migration.",
                "E. L'éclosion fait intervenir des protéases sécrétées par le trophoblaste."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : la zone pellucide persiste pendant toute la segmentation et ne disparaît qu'à l'éclosion (J5-J6). B, C, D et E sont vraies."
            },
            {
              q: "Concernant la migration tubaire :",
              options: [
                "A. L'embryon se déplace activement grâce à des mouvements amiboïdes.",
                "B. Elle dure environ 3 à 4 jours.",
                "C. Les cils de l'épithélium tubaire et le péristaltisme participent au transport.",
                "D. L'embryon arrive dans la cavité utérine au stade de zygote.",
                "E. La progestérone lève le spasme de l'isthme tubaire."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : le transport est entièrement passif. B, C et E sont vraies. D est fausse : il arrive au stade de morula (J4)."
            },
            {
              q: "Concernant la grossesse extra-utérine :",
              options: [
                "A. Elle est tubaire dans plus de 95 % des cas.",
                "B. Sa localisation tubaire la plus fréquente est l'ampoule.",
                "C. Les antécédents de salpingite constituent un facteur de risque majeur.",
                "D. L'hCG est toujours négative en cas de grossesse extra-utérine.",
                "E. Le risque principal est la rupture tubaire avec hémopéritoine."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'hCG est positive puisqu'il y a un trophoblaste, mais sa cinétique est anormale (pas de doublement en 48 heures)."
            }
          ]
        },
        {
          id: "deuxieme-semaine",
          titre: "Deuxième semaine : implantation et disque didermique",
          duree: 40,
          objectifs: [
            "Décrire les trois phases de l'implantation (apposition, adhésion, invasion) et leur chronologie.",
            "Différencier cytotrophoblaste et syncytiotrophoblaste et connaître leurs rôles.",
            "Décrire la formation du disque didermique (épiblaste, hypoblaste), de la cavité amniotique et des vésicules vitellines primaire puis secondaire.",
            "Décrire le mésoderme extra-embryonnaire, le cœlome extra-embryonnaire et le pédicule embryonnaire.",
            "Connaître la sécrétion d'hCG, son rôle et son utilisation diagnostique.",
            "Connaître les anomalies d'implantation (sites ectopiques, placenta praevia, môle)."
          ],
          sections: [
            {
              titre: "L'implantation : conditions et phases",
              contenu: `<p>L'<strong>implantation</strong> (ou <strong>nidation</strong>) est la pénétration du blastocyste dans l'endomètre. Elle débute vers le <strong>6<sup>e</sup>-7<sup>e</sup> jour</strong> après la fécondation (soit J20-J22 du cycle) et s'achève vers le <strong>12<sup>e</sup> jour</strong> (J26 du cycle) : elle chevauche donc la fin de la 1<sup>re</sup> semaine et la 2<sup>e</sup> semaine. Chez l'espèce humaine, elle est dite <strong>interstitielle</strong> : le blastocyste s'enfouit complètement dans l'épaisseur de la muqueuse, et l'épithélium se referme au-dessus de lui.</p>
<h4>Conditions</h4>
<ul>
<li>Un <strong>blastocyste éclos</strong>, au stade adéquat, orienté par son <strong>pôle embryonnaire</strong> vers l'endomètre.</li>
<li>Un <strong>endomètre réceptif</strong>, en phase sécrétoire (J20 à J24 du cycle : <strong>fenêtre d'implantation</strong>), préparé par les œstrogènes puis la <strong>progestérone</strong> : glandes sécrétant glycogène et mucus, stroma œdématié, artères spiralées développées, et expression à la surface de l'épithélium de molécules d'adhérence (intégrines alpha-v bêta-3, L-sélectine et ses ligands, mucine MUC1 disparaissant au site d'implantation) et de <strong>pinopodes</strong> (protrusions apicales qui absorbent le liquide utérin et rapprochent le blastocyste de la paroi).</li>
<li>Un <strong>dialogue moléculaire</strong> entre les deux partenaires : LIF (leukemia inhibitory factor), interleukine 1, HB-EGF, prostaglandines, hCG précoce.</li>
<li>Une <strong>tolérance immunitaire</strong> : le trophoblaste n'exprime pas les molécules HLA classiques de classe I (HLA-A et B) mais HLA-G, qui inhibe les cellules NK utérines et protège l'embryon semi-allogénique du rejet.</li>
</ul>
<h4>Les trois phases</h4>
<ol>
<li><strong>Apposition</strong> (J6) : le blastocyste se place contre l'épithélium endométrial, par son pôle embryonnaire, le plus souvent sur la <strong>face postérieure</strong> (ou antérieure) du <strong>fond utérin</strong>, entre les orifices glandulaires. Il est encore mobile.</li>
<li><strong>Adhésion</strong> (J6-J7) : le trophoblaste polaire adhère fermement à l'épithélium par des interactions intégrines-ligands (fibronectine, laminine, ostéopontine) et des molécules de type sélectines, trophinine ; la liaison devient irréversible.</li>
<li><strong>Invasion</strong> (J7 à J12) : le trophoblaste au contact de l'endomètre se différencie en <strong>syncytiotrophoblaste</strong> invasif qui détruit l'épithélium, traverse la lame basale et pénètre dans le stroma en digérant la matrice extracellulaire (métalloprotéases) et en phagocytant les cellules déciduales. Le blastocyste s'enfonce progressivement ; à J9, il est presque entièrement enfoui et l'orifice de pénétration est fermé par un <strong>bouchon de fibrine</strong> (caillot de fermeture) ; à J12, l'épithélium a cicatrisé au-dessus de lui et l'implantation est <strong>terminée</strong>.</li>
</ol>
<h4>La réaction déciduale</h4>
<p>Sous l'effet de la progestérone et des signaux embryonnaires, les cellules du stroma endométrial au voisinage du site d'implantation s'hypertrophient, se chargent de glycogène et de lipides et deviennent des <strong>cellules déciduales</strong> : c'est la <strong>réaction déciduale</strong>, qui s'étend ensuite à tout l'endomètre, désormais appelé <strong>caduque</strong> (décidue) parce qu'il sera expulsé à l'accouchement. Elle nourrit l'embryon (histiotrophe) avant l'établissement de la circulation placentaire et limite l'invasion trophoblastique. On distingue la <strong>caduque basale</strong> (sous l'embryon, future partie maternelle du placenta), la <strong>caduque ovulaire</strong> ou capsulaire (recouvrant l'embryon du côté de la cavité utérine) et la <strong>caduque pariétale</strong> (le reste de l'utérus) ; les caduques ovulaire et pariétale fusionnent vers le 3<sup>e</sup>-4<sup>e</sup> mois lorsque l'embryon remplit la cavité utérine.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> implantation de <strong>J6-J7 à J12</strong>, interstitielle, par le pôle embryonnaire, dans un endomètre en phase sécrétoire (fenêtre J20-J24 du cycle), le plus souvent sur la face postérieure du fond utérin. Trois phases : apposition, adhésion, invasion. La réaction déciduale transforme l'endomètre en caduque.</div>`
            },
            {
              titre: "Le trophoblaste : cytotrophoblaste et syncytiotrophoblaste",
              contenu: `<p>Dès le 7<sup>e</sup> jour, le trophoblaste au contact de l'endomètre se différencie en deux couches :</p>
<ul>
<li>le <strong>cytotrophoblaste</strong> (couche interne, couche de Langhans) : cellules <strong>individualisées</strong>, cubiques, mononucléées, à limites nettes, en <strong>mitoses actives</strong> ; c'est la couche <strong>souche</strong> : ses cellules prolifèrent et fusionnent pour alimenter en permanence la couche externe ;</li>
<li>le <strong>syncytiotrophoblaste</strong> (couche externe) : masse cytoplasmique <strong>multinucléée</strong> sans limites cellulaires, formée par la <strong>fusion</strong> des cellules du cytotrophoblaste (grâce à des protéines fusiogènes d'origine rétrovirale, les syncytines) ; ses noyaux ne se divisent pas. Il est <strong>invasif</strong> (protéases) et <strong>endocrine</strong> (sécrétion d'hCG, puis d'hPL, de progestérone et d'œstrogènes).</li>
</ul>
<table>
<thead><tr><th>Caractère</th><th>Cytotrophoblaste</th><th>Syncytiotrophoblaste</th></tr></thead>
<tbody>
<tr><td>Position</td><td>Interne (au contact du mésoderme extra-embryonnaire)</td><td>Externe (au contact des tissus maternels)</td></tr>
<tr><td>Organisation</td><td>Cellules individualisées, mononucléées</td><td>Syncytium plurinucléé sans limites cellulaires</td></tr>
<tr><td>Mitoses</td><td>Oui, nombreuses</td><td>Non</td></tr>
<tr><td>Origine</td><td>Trophoblaste du blastocyste</td><td>Fusion des cellules cytotrophoblastiques</td></tr>
<tr><td>Fonctions</td><td>Réserve souche, formation des villosités, coque cytotrophoblastique, trophoblaste extravilleux (ancrage, remodelage des artères spiralées)</td><td>Invasion, érosion des vaisseaux maternels, échanges, sécrétion hormonale (hCG, hPL, stéroïdes)</td></tr>
<tr><td>Devenir</td><td>Disparaît presque de la barrière placentaire au 3<sup>e</sup> trimestre (cellules de Langhans résiduelles)</td><td>Persiste jusqu'à terme</td></tr>
</tbody>
</table>
<h4>Les lacunes et le début de la circulation utéro-placentaire</h4>
<p>Vers le <strong>9<sup>e</sup> jour</strong>, des vacuoles apparaissent dans le syncytiotrophoblaste, confluent et forment des <strong>lacunes</strong> : c'est le <strong>stade lacunaire</strong> du trophoblaste (J9 à J13). Vers le <strong>11<sup>e</sup>-12<sup>e</sup> jour</strong>, le syncytiotrophoblaste érode les parois des <strong>capillaires sinusoïdes</strong> maternels (dilatés par la réaction déciduale) : le sang maternel pénètre dans les lacunes, qui communiquent entre elles. C'est le début de la <strong>circulation utéro-placentaire</strong>, à sens unique au départ (le sang pénètre et stagne) puis véritable circulation (artérioles afférentes et veinules efférentes) : le futur placenta sera de type <strong>hémochorial</strong> (le sang maternel baigne directement le trophoblaste). Ce saignement microscopique au site d'implantation, vers J12 (soit le 26<sup>e</sup>-28<sup>e</sup> jour du cycle), peut s'extérioriser et être pris pour des règles peu abondantes (<strong>signe de Hartman</strong>), source d'erreur de datation.</p>
<p>À la fin de la 2<sup>e</sup> semaine (J13-J14), des colonnes de cytotrophoblaste pénètrent dans les travées de syncytiotrophoblaste séparant les lacunes : ce sont les <strong>villosités primaires</strong> (axe de cytotrophoblaste recouvert de syncytiotrophoblaste), premières ébauches des villosités placentaires. Les villosités s'étendent d'abord sur toute la circonférence puis se concentrent au pôle embryonnaire.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le syncytiotrophoblaste ne se divise pas ; il est <strong>alimenté</strong> par le cytotrophoblaste. Le sang maternel n'entre dans les lacunes qu'à partir de J11-J12 ; avant, la nutrition est <strong>histiotrophe</strong> (digestion des tissus endométriaux et des sécrétions glandulaires), et il n'existe pas encore de vaisseaux embryonnaires (ils apparaissent à la 3<sup>e</sup> semaine).</div>`
            },
            {
              titre: "Le disque embryonnaire didermique et la cavité amniotique",
              contenu: `<p>Pendant que le trophoblaste envahit l'endomètre, le bouton embryonnaire s'organise. Vers le <strong>7<sup>e</sup>-8<sup>e</sup> jour</strong>, il se transforme en un <strong>disque embryonnaire didermique</strong> (bilaminaire), constitué de deux feuillets accolés :</p>
<ul>
<li>l'<strong>épiblaste</strong> (ectoblaste primaire, ectophylle) : feuillet <strong>dorsal</strong>, du côté du trophoblaste polaire, formé de cellules hautes, prismatiques, pseudostratifiées ; c'est le feuillet qui donnera <strong>l'embryon tout entier</strong> (les trois feuillets définitifs dérivent de l'épiblaste lors de la gastrulation) ainsi que l'amnios ;</li>
<li>l'<strong>hypoblaste</strong> (entoblaste primaire, endophylle) : feuillet <strong>ventral</strong>, du côté du blastocèle, formé de petites cellules cubiques ; il tapisse la vésicule vitelline et ne donne que des structures <strong>extra-embryonnaires</strong> (il ne participe pas à l'embryon définitif, hormis une contribution minime discutée), mais il joue un rôle inducteur majeur dans l'établissement de l'axe antéro-postérieur (endoderme viscéral antérieur).</li>
</ul>
<p>Le disque est ovalaire, d'environ <strong>0,1 à 0,2 mm</strong> de diamètre. À ce stade, il est déjà possible de définir un axe dorso-ventral (dos = épiblaste, ventre = hypoblaste) ; l'axe antéro-postérieur ne sera morphologiquement visible qu'à la 3<sup>e</sup> semaine (ligne primitive en arrière).</p>
<h4>La cavité amniotique</h4>
<p>Dès le <strong>8<sup>e</sup> jour</strong>, un espace apparaît entre l'épiblaste et le trophoblaste polaire : c'est la <strong>cavité amniotique</strong>. Elle se forme par écartement des cellules de l'épiblaste (certains auteurs décrivent une cavitation au sein de l'épiblaste). Les cellules épiblastiques qui bordent cette cavité du côté du trophoblaste s'aplatissent et constituent les <strong>amnioblastes</strong>, qui forment le <strong>toit</strong> de la cavité : la membrane amniotique ou <strong>amnios</strong>. Le plancher de la cavité amniotique est constitué par l'<strong>épiblaste</strong> lui-même. La cavité amniotique s'agrandit progressivement et finira par entourer complètement l'embryon après la délimitation (4<sup>e</sup> semaine) ; elle contient le liquide amniotique.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'épiblaste est dorsal, forme le plancher de la cavité amniotique et donne tout l'embryon ; l'hypoblaste est ventral, forme le toit de la vésicule vitelline et ne donne que des annexes. La 2<sup>e</sup> semaine est la « semaine des deux » : 2 couches de trophoblaste, 2 feuillets, 2 cavités, 2 lames de mésoderme extra-embryonnaire.</div>`
            },
            {
              titre: "Les vésicules vitellines primaire et secondaire",
              contenu: `<h4>La vésicule vitelline primaire (J9)</h4>
<p>Vers le <strong>9<sup>e</sup> jour</strong>, des cellules issues de l'<strong>hypoblaste</strong> migrent le long de la face interne du trophoblaste mural et tapissent entièrement le blastocèle : elles forment une fine membrane, la <strong>membrane de Heuser</strong> (membrane exocœlomique). La cavité ainsi délimitée, bordée par l'hypoblaste (toit) et la membrane de Heuser (parois), est la <strong>vésicule vitelline primaire</strong> (ou lécithocèle primaire, cavité exocœlomique). Elle est volumineuse et remplace le blastocèle.</p>
<h4>Le mésoderme extra-embryonnaire et le cœlome extra-embryonnaire (J10 à J12)</h4>
<p>Entre la membrane de Heuser et le cytotrophoblaste apparaît un tissu lâche, le <strong>mésoderme extra-embryonnaire</strong> (ou mésenchyme extra-embryonnaire), dont l'origine est discutée (cellules de l'hypoblaste et de la membrane de Heuser, voire du trophoblaste et plus tard de l'épiblaste via la ligne primitive). Il comble tout l'espace entre le trophoblaste d'une part, l'amnios et la vésicule vitelline d'autre part. Vers <strong>J11-J12</strong>, des cavités apparaissent dans ce mésoderme, confluent et forment une grande cavité unique : le <strong>cœlome extra-embryonnaire</strong> (ou cavité choriale). Le mésoderme extra-embryonnaire est ainsi dédoublé en deux lames :</p>
<ul>
<li>la <strong>somatopleure extra-embryonnaire</strong> (lame pariétale, somatique) : tapisse la face interne du cytotrophoblaste et la face externe de l'amnios ; cytotrophoblaste + syncytiotrophoblaste + somatopleure = <strong>chorion</strong> ;</li>
<li>la <strong>splanchnopleure extra-embryonnaire</strong> (lame viscérale) : recouvre la face externe de la vésicule vitelline.</li>
</ul>
<p>Le cœlome extra-embryonnaire sépare complètement l'ensemble embryon-amnios-vésicule vitelline du chorion, <strong>sauf en un point</strong> : au niveau du futur pôle caudal, une condensation de mésoderme extra-embryonnaire persiste et relie l'amnios au chorion : c'est le <strong>pédicule embryonnaire</strong> (pédicule de fixation), futur <strong>cordon ombilical</strong>. L'embryon et ses deux vésicules sont donc suspendus dans la cavité choriale par ce pédicule.</p>
<h4>La vésicule vitelline secondaire (J12 à J13)</h4>
<p>Vers le <strong>12<sup>e</sup>-13<sup>e</sup> jour</strong>, une nouvelle vague de cellules hypoblastiques prolifère et migre le long de la face interne de la membrane de Heuser, repoussant la vésicule vitelline primaire, qui se <strong>pince</strong> et se réduit : la portion proche de l'embryon devient la <strong>vésicule vitelline secondaire</strong> (lécithocèle secondaire, vésicule vitelline définitive), bordée exclusivement par de l'hypoblaste ; la portion distale se détache en <strong>kystes exocœlomiques</strong> (reliquats de la vésicule vitelline primaire) qui flottent dans le cœlome extra-embryonnaire et disparaissent. La vésicule vitelline secondaire est plus petite que la primaire. Elle sera le site de la première hématopoïèse et de l'apparition des cellules germinales primordiales (3<sup>e</sup> semaine), et son toit (hypoblaste puis entoblaste) donnera l'intestin primitif lors de la délimitation.</p>
<table>
<thead><tr><th>Jour</th><th>Événement</th></tr></thead>
<tbody>
<tr><td>J6-J7</td><td>Apposition, adhésion ; début de l'invasion ; différenciation cyto / syncytiotrophoblaste</td></tr>
<tr><td>J7-J8</td><td>Disque didermique (épiblaste, hypoblaste) ; apparition de la cavité amniotique</td></tr>
<tr><td>J9</td><td>Membrane de Heuser, vésicule vitelline primaire ; lacunes dans le syncytiotrophoblaste ; bouchon de fibrine</td></tr>
<tr><td>J10-J11</td><td>Mésoderme extra-embryonnaire</td></tr>
<tr><td>J11-J12</td><td>Cœlome extra-embryonnaire (somatopleure et splanchnopleure) ; sang maternel dans les lacunes ; fin de l'enfouissement</td></tr>
<tr><td>J12-J13</td><td>Vésicule vitelline secondaire, kystes exocœlomiques ; pédicule embryonnaire ; villosités primaires</td></tr>
<tr><td>J14</td><td>Épaississement de l'hypoblaste à l'extrémité céphalique : <strong>plaque préchordale</strong>, premier repère de l'axe antéro-postérieur ; apparition imminente de la ligne primitive</td></tr>
</tbody>
</table>`
            },
            {
              titre: "L'hCG : hormone de la grossesse débutante",
              contenu: `<p>L'<strong>hCG</strong> (hormone chorionique gonadotrope humaine) est une glycoprotéine de 36 à 40 kDa sécrétée par le <strong>syncytiotrophoblaste</strong> dès son apparition (<strong>J7-J8</strong>). Elle est formée d'une sous-unité <strong>alpha</strong> (92 acides aminés), commune à la LH, la FSH et la TSH, et d'une sous-unité <strong>bêta</strong> (145 acides aminés) spécifique, proche de celle de la LH (dont elle partage le récepteur) mais plus longue, ce qui prolonge sa demi-vie (24 à 36 heures contre 20 minutes pour la LH). Les dosages spécifiques utilisent des anticorps dirigés contre la sous-unité bêta (<strong>bêta-hCG</strong>).</p>
<h4>Rôles</h4>
<ul>
<li><strong>Maintien du corps jaune</strong> : en se fixant sur les récepteurs de la LH des cellules lutéales, l'hCG empêche la lutéolyse et transforme le corps jaune progestatif en <strong>corps jaune gravidique</strong>, qui continue de sécréter la progestérone (et l'œstradiol) indispensable au maintien de la caduque et à l'absence de règles, jusqu'au relais placentaire (8 à 10 semaines). C'est le « signal » que l'embryon envoie à la mère.</li>
<li>Stimulation de la sécrétion de <strong>testostérone</strong> par les cellules de Leydig du testicule fœtal (8<sup>e</sup> à 20<sup>e</sup> semaine), avant que la LH fœtale ne prenne le relais.</li>
<li>Effets sur le trophoblaste (différenciation, angiogenèse), <strong>immunomodulation</strong> locale, stimulation de la thyroïde maternelle (activité TSH-like, responsable de la baisse de la TSH au premier trimestre).</li>
<li>Impliquée dans les <strong>nausées et vomissements</strong> du premier trimestre (maximum au pic d'hCG).</li>
</ul>
<h4>Cinétique</h4>
<p>L'hCG est détectable dans le <strong>sang maternel</strong> dès le <strong>8<sup>e</sup>-10<sup>e</sup> jour</strong> après la fécondation (seuil 5 UI/L) et dans les <strong>urines</strong> vers le 14<sup>e</sup> jour, soit à la date présumée des règles (tests urinaires de sensibilité 25 à 50 UI/L). Son taux <strong>double toutes les 48 heures</strong> (temps de doublement 1,5 à 2 jours) pendant les premières semaines, atteint un <strong>maximum vers 8 à 10 SA</strong> (50 000 à 100 000 UI/L, voire plus), puis décroît pour se stabiliser en plateau à 10 000-20 000 UI/L à partir de 16-20 SA jusqu'au terme. Elle disparaît 1 à 2 semaines après l'accouchement ou une fausse couche.</p>
<table>
<thead><tr><th>Situation</th><th>Cinétique de l'hCG</th></tr></thead>
<tbody>
<tr><td>Grossesse intra-utérine évolutive</td><td>Doublement en 48 heures ; sac visible à l'échographie endovaginale au-delà de 1 500 UI/L</td></tr>
<tr><td>Grossesse extra-utérine</td><td>Taux bas, stagnation ou ascension lente (moins de 50 % en 48 heures), utérus vide</td></tr>
<tr><td>Fausse couche</td><td>Taux décroissant</td></tr>
<tr><td>Môle hydatiforme</td><td>Taux très élevé (souvent supérieur à 200 000 UI/L), persistant</td></tr>
<tr><td>Grossesse multiple</td><td>Taux plus élevés que pour une grossesse unique</td></tr>
<tr><td>Trisomie 21</td><td>hCG libre bêta augmentée au premier trimestre (marqueur sérique du dépistage, avec la PAPP-A diminuée)</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le dosage de la bêta-hCG plasmatique est l'examen de référence pour affirmer une grossesse ; sa <strong>cinétique</strong> (dosages à 48 heures d'intervalle) et sa confrontation à l'<strong>échographie endovaginale</strong> (sac gestationnel visible à partir de 1 500 UI/L, soit vers 5 SA ; embryon avec activité cardiaque vers 6 SA) permettent de distinguer grossesse évolutive, fausse couche et grossesse extra-utérine. L'hCG (ou son analogue la LH) est aussi utilisée en thérapeutique pour déclencher l'ovulation (FIV) et pour traiter la cryptorchidie.</div>`
            },
            {
              titre: "Anomalies de l'implantation",
              contenu: `<h4>Implantations ectopiques</h4>
<p>Toute implantation hors de la face postérieure ou antérieure du corps utérin est anormale. On distingue :</p>
<ul>
<li>Les implantations <strong>extra-utérines</strong> (voir chapitre précédent) : <strong>tubaires</strong> (95 %, surtout ampullaires), <strong>ovariennes</strong> (fécondation et implantation sur l'ovaire, 1 %), <strong>abdominales</strong> (implantation sur le péritoine, l'épiploon, le cul-de-sac de Douglas : rarissime, peut exceptionnellement évoluer jusqu'à un terme avancé, très hémorragique), <strong>cervicales</strong> (implantation dans le col : hémorragies cataclysmiques), sur cicatrice de césarienne.</li>
<li>Les implantations <strong>intra-utérines anormales</strong> : implantation <strong>basse</strong>, près de l'orifice interne du col, conduisant au <strong>placenta praevia</strong> (placenta inséré sur le segment inférieur, recouvrant ou non l'orifice cervical : 0,5 % des grossesses, cause majeure d'hémorragie du 3<sup>e</sup> trimestre, indication de césarienne s'il est recouvrant) ; implantation dans la corne utérine (grossesse interstitielle ou cornuale, grave).</li>
</ul>
<h4>Anomalies de la profondeur d'invasion</h4>
<ul>
<li><strong>Invasion insuffisante</strong> : défaut de remodelage des artères spiralées par le trophoblaste extravilleux, à l'origine de la <strong>pré-éclampsie</strong> (hypertension et protéinurie après 20 SA) et du retard de croissance intra-utérin d'origine vasculaire.</li>
<li><strong>Invasion excessive</strong> : <strong>placenta accreta</strong> (villosités adhérant au myomètre sans caduque interposée), <strong>increta</strong> (envahissant le myomètre), <strong>percreta</strong> (traversant la séreuse, parfois jusqu'à la vessie) ; favorisé par les cicatrices utérines (césariennes) et le placenta praevia ; risque hémorragique majeur à la délivrance, pouvant imposer une hystérectomie.</li>
</ul>
<h4>Anomalies du trophoblaste : les maladies trophoblastiques gestationnelles</h4>
<ul>
<li>La <strong>môle hydatiforme complète</strong> : dégénérescence kystique de toutes les villosités (« grappe de raisin »), hyperplasie trophoblastique, <strong>absence d'embryon</strong> ; génome entièrement paternel (fécondation d'un ovocyte sans noyau par un spermatozoïde 23,X qui duplique son génome : 46,XX diploïde androgénétique dans 80 % des cas, ou dispermie) ; hCG très élevée, utérus trop gros, vomissements, parfois kystes lutéiniques ovariens. Évacuation par aspiration et surveillance de la décroissance de l'hCG, car 15 à 20 % évoluent vers une <strong>môle invasive</strong> ou un <strong>choriocarcinome</strong> (tumeur maligne du trophoblaste, très chimiosensible).</li>
<li>La <strong>môle partielle</strong> : triploïdie (69 chromosomes, deux lots paternels : dispermie) avec un embryon anormal présent ; risque de choriocarcinome plus faible (1 à 5 %).</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la môle complète résulte d'un génome exclusivement <strong>paternel</strong> (pas d'embryon) ; la môle partielle est une <strong>triploïdie</strong> avec embryon. Toutes deux s'accompagnent d'une hCG très élevée, et non basse.</div>`
            }
          ],
          points_cles: [
            "L'implantation est interstitielle, débute à J6-J7 par le pôle embryonnaire, dans un endomètre sécrétoire (fenêtre J20-J24 du cycle), le plus souvent sur la face postérieure du fond utérin, et se termine à J12.",
            "Trois phases : apposition, adhésion (intégrines, sélectines, pinopodes), invasion par le syncytiotrophoblaste ; la réaction déciduale transforme l'endomètre en caduque (basale, ovulaire, pariétale).",
            "Le cytotrophoblaste est la couche interne, cellulaire et mitotique ; le syncytiotrophoblaste est la couche externe, plurinucléée, invasive et endocrine, formée par fusion des cellules du cytotrophoblaste.",
            "Lacunes dans le syncytiotrophoblaste à J9 ; érosion des capillaires maternels et entrée du sang maternel à J11-J12 (début de la circulation utéro-placentaire, signe de Hartman) ; villosités primaires à J13-J14.",
            "Le disque didermique (J7-J8) comprend l'épiblaste dorsal (plancher de la cavité amniotique, donne tout l'embryon) et l'hypoblaste ventral (toit de la vésicule vitelline, annexes uniquement).",
            "La cavité amniotique apparaît à J8 dans l'épiblaste ; son toit est formé par les amnioblastes.",
            "Vésicule vitelline primaire (J9, membrane de Heuser issue de l'hypoblaste) puis secondaire (J12-J13, nouvelle migration hypoblastique, kystes exocœlomiques).",
            "Le mésoderme extra-embryonnaire (J10-J11) se creuse du cœlome extra-embryonnaire (J11-J12) et se dédouble en somatopleure (chorion, amnios) et splanchnopleure (vésicule vitelline) ; le pédicule embryonnaire relie l'embryon au chorion.",
            "L'hCG, sécrétée par le syncytiotrophoblaste dès J7-J8, maintient le corps jaune gravidique ; détectable dans le sang à J8-J10, elle double toutes les 48 heures et culmine à 8-10 SA.",
            "Anomalies : grossesse extra-utérine, placenta praevia, placenta accreta, pré-éclampsie (invasion insuffisante), môle hydatiforme complète (génome paternel, pas d'embryon, hCG très élevée) ou partielle (triploïdie)."
          ],
          lexique: [
            { terme: "Implantation (nidation)", def: "Pénétration interstitielle du blastocyste dans l'endomètre, de J6-J7 à J12." },
            { terme: "Fenêtre d'implantation", def: "Période de réceptivité de l'endomètre, de J20 à J24 du cycle, sous dépendance de la progestérone." },
            { terme: "Cytotrophoblaste", def: "Couche interne, cellulaire et mitotique du trophoblaste, souche du syncytiotrophoblaste et des villosités." },
            { terme: "Syncytiotrophoblaste", def: "Couche externe plurinucléée du trophoblaste, invasive et endocrine (hCG), formée par fusion des cellules du cytotrophoblaste." },
            { terme: "Caduque (décidue)", def: "Endomètre gravidique transformé par la réaction déciduale ; caduque basale, ovulaire et pariétale." },
            { terme: "Épiblaste", def: "Feuillet dorsal du disque didermique, formant le plancher de la cavité amniotique et à l'origine de tout l'embryon." },
            { terme: "Hypoblaste", def: "Feuillet ventral du disque didermique, formant le toit de la vésicule vitelline et à l'origine de structures extra-embryonnaires." },
            { terme: "Membrane de Heuser", def: "Membrane exocœlomique issue de l'hypoblaste tapissant le blastocèle et délimitant la vésicule vitelline primaire (J9)." },
            { terme: "Cœlome extra-embryonnaire", def: "Cavité choriale creusée dans le mésoderme extra-embryonnaire (J11-J12), séparant somatopleure et splanchnopleure extra-embryonnaires." },
            { terme: "Pédicule embryonnaire", def: "Condensation de mésoderme extra-embryonnaire reliant l'embryon et l'amnios au chorion, future ébauche du cordon ombilical." },
            { terme: "hCG", def: "Hormone chorionique gonadotrope, glycoprotéine du syncytiotrophoblaste maintenant le corps jaune gravidique ; base des tests de grossesse." }
          ],
          qcm: [
            {
              q: "Concernant l'implantation :",
              options: [
                "A. Elle débute vers le 6e-7e jour après la fécondation et s'achève vers le 12e jour.",
                "B. Le blastocyste s'implante par son pôle abembryonnaire.",
                "C. Elle a lieu dans un endomètre en phase proliférative.",
                "D. Elle est de type interstitiel chez l'espèce humaine.",
                "E. Le site normal est le plus souvent la face postérieure du fond utérin."
              ],
              bonnes: [0, 3, 4],
              explication: "A, D et E sont vraies. B est fausse : l'implantation se fait par le pôle embryonnaire. C est fausse : l'endomètre est en phase sécrétoire (fenêtre d'implantation J20-J24)."
            },
            {
              q: "Concernant le trophoblaste au cours de la 2e semaine :",
              options: [
                "A. Le syncytiotrophoblaste est formé de cellules individualisées en mitose.",
                "B. Le cytotrophoblaste est la couche interne.",
                "C. Le syncytiotrophoblaste sécrète l'hCG.",
                "D. Les lacunes apparaissent dans le cytotrophoblaste.",
                "E. Le sang maternel pénètre dans les lacunes vers le 11e-12e jour."
              ],
              bonnes: [1, 2, 4],
              explication: "A est fausse : le syncytiotrophoblaste est un syncytium plurinucléé sans mitoses ; c'est le cytotrophoblaste qui est cellulaire et mitotique. B, C et E sont vraies. D est fausse : les lacunes se creusent dans le syncytiotrophoblaste."
            },
            {
              q: "Concernant le disque embryonnaire didermique :",
              options: [
                "A. L'épiblaste est situé du côté de la cavité amniotique.",
                "B. L'hypoblaste donne naissance aux trois feuillets de l'embryon.",
                "C. La cavité amniotique apparaît vers le 8e jour.",
                "D. Les amnioblastes dérivent de l'épiblaste.",
                "E. L'hypoblaste forme le toit de la vésicule vitelline."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : c'est l'épiblaste qui donne les trois feuillets définitifs lors de la gastrulation ; l'hypoblaste ne donne que des structures extra-embryonnaires."
            },
            {
              q: "Concernant les vésicules vitellines et le mésoderme extra-embryonnaire :",
              options: [
                "A. La membrane de Heuser dérive de l'hypoblaste.",
                "B. La vésicule vitelline secondaire est plus volumineuse que la primaire.",
                "C. Le cœlome extra-embryonnaire se creuse dans le mésoderme extra-embryonnaire.",
                "D. La splanchnopleure extra-embryonnaire recouvre la vésicule vitelline.",
                "E. Le chorion est formé du trophoblaste et de la somatopleure extra-embryonnaire."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la vésicule vitelline secondaire est plus petite que la primaire, dont les restes forment les kystes exocœlomiques."
            },
            {
              q: "Concernant le pédicule embryonnaire et la chronologie de la 2e semaine :",
              options: [
                "A. Le pédicule embryonnaire est une condensation de mésoderme extra-embryonnaire reliant l'embryon au chorion.",
                "B. Il est situé au futur pôle céphalique de l'embryon.",
                "C. Il est à l'origine du cordon ombilical.",
                "D. Les villosités primaires apparaissent à la fin de la 2e semaine.",
                "E. La vésicule vitelline primaire se forme vers le 9e jour."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le pédicule embryonnaire est au pôle caudal de l'embryon."
            },
            {
              q: "Concernant l'hCG :",
              options: [
                "A. Elle est sécrétée par le cytotrophoblaste.",
                "B. Sa sous-unité alpha est commune avec la LH, la FSH et la TSH.",
                "C. Elle maintient le corps jaune en se fixant sur les récepteurs de la LH.",
                "D. Son taux plasmatique double environ toutes les 48 heures en début de grossesse.",
                "E. Son taux est maximal au moment de l'accouchement."
              ],
              bonnes: [1, 2, 3],
              explication: "A est fausse : l'hCG est sécrétée par le syncytiotrophoblaste. B, C et D sont vraies. E est fausse : le pic se situe vers 8-10 SA, puis le taux décroît et se stabilise en plateau."
            },
            {
              q: "Concernant les anomalies de l'implantation :",
              options: [
                "A. Le placenta praevia résulte d'une implantation basse, près de l'orifice interne du col.",
                "B. La môle hydatiforme complète comporte un embryon normal.",
                "C. La môle complète est associée à un taux d'hCG très élevé.",
                "D. Le placenta accreta correspond à une invasion trophoblastique excessive.",
                "E. La pré-éclampsie est liée à un défaut d'invasion trophoblastique des artères spiralées."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la môle complète ne comporte pas d'embryon (génome exclusivement paternel) ; c'est la môle partielle (triploïdie) qui comporte un embryon, anormal."
            }
          ]
        },
        {
          id: "troisieme-semaine",
          titre: "Troisième semaine : la gastrulation",
          duree: 40,
          objectifs: [
            "Définir la gastrulation et décrire la ligne primitive et le nœud primitif.",
            "Expliquer la formation des trois feuillets (entoblaste, mésoblaste, ectoblaste) à partir de l'épiblaste.",
            "Décrire la formation de la notochorde (processus notochordal, canal notochordal, plaque notochordale, notochorde définitive) et ses rôles.",
            "Situer la plaque préchordale et la membrane cloacale et comprendre leur signification.",
            "Décrire le début de la neurulation, l'allantoïde, l'évolution des villosités et le début de la vasculogenèse et de l'ébauche cardiaque.",
            "Connaître les anomalies de la gastrulation (tératome sacrococcygien, sirénomélie, situs inversus)."
          ],
          sections: [
            {
              titre: "Définition et vue d'ensemble de la gastrulation",
              contenu: `<p>La <strong>gastrulation</strong> est l'événement majeur de la <strong>3<sup>e</sup> semaine</strong> (J15 à J21). Elle transforme le disque embryonnaire <strong>didermique</strong> (épiblaste et hypoblaste) en un disque <strong>tridermique</strong>, formé des trois feuillets primitifs définitifs :</p>
<ul>
<li>l'<strong>ectoblaste</strong> (ectoderme), dorsal ;</li>
<li>le <strong>mésoblaste</strong> (mésoderme) intra-embryonnaire, intermédiaire ;</li>
<li>l'<strong>entoblaste</strong> (endoderme), ventral.</li>
</ul>
<p>Ces trois feuillets dérivent <strong>tous de l'épiblaste</strong> : la gastrulation est fondamentalement une <strong>migration</strong> de cellules épiblastiques à travers la ligne primitive, qui vont remplacer l'hypoblaste (entoblaste) et s'insinuer entre les deux feuillets (mésoblaste), tandis que les cellules restées en surface constituent l'ectoblaste. Ce mouvement implique une <strong>transition épithélio-mésenchymateuse</strong> : les cellules épiblastiques perdent leur E-cadhérine et leurs jonctions, adoptent une forme en bouteille, s'invaginent et migrent comme des cellules mésenchymateuses.</p>
<p>La gastrulation met aussi en place les <strong>trois axes</strong> de l'embryon : l'axe <strong>antéro-postérieur</strong> (céphalo-caudal : la ligne primitive est caudale), l'axe <strong>dorso-ventral</strong> (déjà esquissé par le disque didermique) et l'axe <strong>droite-gauche</strong> (asymétrie établie par le nœud primitif). Elle crée la <strong>notochorde</strong>, axe de symétrie et inducteur du système nerveux. C'est la période de sensibilité tératogène la plus précoce : la 3<sup>e</sup> semaine correspond à 5 SA, moment où la femme apprend souvent sa grossesse.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> « semaine des trois » : 3<sup>e</sup> semaine, 3 feuillets, 3 axes. Tous les feuillets dérivent de l'épiblaste ; l'hypoblaste est repoussé et ne participe pas à l'embryon.</div>`
            },
            {
              titre: "La ligne primitive et le nœud primitif",
              contenu: `<p>Vers le <strong>15<sup>e</sup> jour</strong> apparaît, à la surface dorsale de l'épiblaste, dans la <strong>moitié caudale</strong> du disque et sur sa <strong>ligne médiane</strong>, un épaississement linéaire : la <strong>ligne primitive</strong>. Elle résulte de la prolifération et de la convergence de cellules épiblastiques vers l'axe médian, sous l'influence de signaux du pédicule embryonnaire et de l'hypoblaste (voies Nodal, Wnt3, BMP4, FGF8). Elle s'allonge d'arrière en avant jusqu'à occuper environ la moitié de la longueur du disque, puis régresse progressivement vers l'arrière à partir de J19-J20 pour disparaître à la fin de la 4<sup>e</sup> semaine.</p>
<p>La ligne primitive comporte :</p>
<ul>
<li>un <strong>sillon primitif</strong> médian, dépression linéaire par laquelle les cellules s'invaginent ;</li>
<li>deux <strong>bourrelets primitifs</strong> latéraux ;</li>
<li>à son extrémité antérieure (céphalique), un renflement : le <strong>nœud primitif</strong> (nœud de Hensen), creusé de la <strong>fossette primitive</strong>. Le nœud est l'<strong>organisateur</strong> de l'embryon des mammifères (équivalent de la lèvre dorsale du blastopore des amphibiens) : il produit les signaux d'induction de l'axe dorsal (Chordin, Noggin, antagonistes des BMP) et est à l'origine de la notochorde.</li>
</ul>
<p>L'apparition de la ligne primitive est le <strong>premier signe morphologique</strong> de l'axe céphalo-caudal et de la symétrie bilatérale : son extrémité à nœud est céphalique, son extrémité opposée (au contact du pédicule embryonnaire) est caudale ; elle définit la ligne médiane, la droite et la gauche. Le disque, auparavant circulaire, s'allonge et devient <strong>piriforme</strong> (en poire), la partie large étant céphalique.</p>
<h4>Les migrations à travers la ligne primitive</h4>
<p>Les cellules de l'épiblaste convergent vers la ligne, s'invaginent par le sillon et le nœud (<strong>ingression</strong>) et se dirigent ensuite selon trois trajets :</p>
<ol>
<li>Les premières cellules à migrer (J15-J16) <strong>s'intercalent dans l'hypoblaste</strong> et le <strong>remplacent</strong> entièrement, repoussant les cellules hypoblastiques vers la vésicule vitelline : elles forment l'<strong>entoblaste</strong> définitif (endoderme embryonnaire).</li>
<li>Les cellules suivantes migrent <strong>entre l'épiblaste et l'entoblaste</strong>, latéralement et vers l'avant, et forment le <strong>mésoblaste intra-embryonnaire</strong> (mésoderme), qui s'étend dans tout le disque sauf en deux zones (voir plus loin) ; une partie gagne le mésoderme extra-embryonnaire.</li>
<li>Les cellules passant par le <strong>nœud primitif</strong> migrent vers l'avant sur la ligne médiane et forment le <strong>processus notochordal</strong>.</li>
</ol>
<p>Les cellules restées à la surface dorsale constituent l'<strong>ectoblaste</strong>. La position d'origine des cellules dans la ligne détermine leur destin : les cellules passant par la partie antérieure donnent le mésoderme para-axial, celles de la partie moyenne le mésoderme intermédiaire et les lames latérales, celles de la partie postérieure le mésoderme extra-embryonnaire.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la ligne primitive apparaît au <strong>pôle caudal</strong>, sur la face <strong>dorsale</strong> (épiblastique) ; le nœud primitif est à son extrémité <strong>céphalique</strong>. L'épiblaste donne les trois feuillets ; une proposition affirmant que « le mésoblaste dérive de l'hypoblaste » est fausse.</div>`
            },
            {
              titre: "La notochorde",
              contenu: `<p>La <strong>notochorde</strong> (chorde dorsale) est une tige cellulaire médiane qui s'étend du nœud primitif à la plaque préchordale. Sa formation chez l'homme passe par plusieurs stades successifs, entre J16 et J22 :</p>
<ol>
<li><strong>Processus notochordal</strong> (J16-J17) : les cellules passant par le nœud primitif migrent vers l'avant, sur la ligne médiane, entre épiblaste et entoblaste, jusqu'à la plaque préchordale qu'elles ne dépassent pas. Il s'agit d'un cordon cellulaire plein.</li>
<li><strong>Canal notochordal</strong> (J17-J18) : la fossette primitive s'étend dans le processus, qui se creuse d'une lumière : le processus devient un tube, le canal notochordal, ouvert en arrière dans la cavité amniotique par la fossette.</li>
<li><strong>Plaque notochordale</strong> (J18-J19) : le plancher du canal notochordal fusionne avec l'entoblaste sous-jacent puis se résorbe ; le canal s'ouvre ainsi dans la vésicule vitelline et le toit du canal, intercalé dans l'entoblaste, forme la plaque notochordale. Il existe alors transitoirement une communication entre la cavité amniotique et la vésicule vitelline à travers la fossette primitive : le <strong>canal neurentérique</strong>, qui disparaît rapidement.</li>
<li><strong>Notochorde définitive</strong> (J19-J22) : la plaque notochordale s'enroule, se détache de l'entoblaste (qui se reconstitue en dessous) et forme un cordon plein, la notochorde, située sur la ligne médiane entre le tube neural (au-dessus) et l'entoblaste (en dessous), entourée de mésoblaste.</li>
</ol>
<h4>Rôles de la notochorde</h4>
<ul>
<li><strong>Axe de symétrie</strong> et <strong>squelette axial primitif</strong> de l'embryon (rôle de soutien transitoire).</li>
<li><strong>Induction</strong> : elle induit la <strong>plaque neurale</strong> dans l'ectoblaste sus-jacent (première induction, neurulation primaire), puis la <strong>plaque du plancher</strong> du tube neural et la différenciation ventrale de la moelle (motoneurones) par sécrétion de <strong>Sonic Hedgehog (SHH)</strong> ; elle induit aussi la différenciation des <strong>sclérotomes</strong> en corps vertébraux.</li>
<li><strong>Devenir</strong> : la notochorde régresse ; elle est incorporée dans les corps vertébraux où elle disparaît, et ne persiste chez l'adulte que dans le <strong>nucleus pulposus</strong> des disques intervertébraux (centre gélatineux). Des reliquats peuvent donner une tumeur rare, le <strong>chordome</strong> (sacrum, clivus).</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> processus -> canal -> plaque -> notochorde définitive. La notochorde induit la plaque neurale et la plaque du plancher (SHH) ; elle ne persiste que dans le nucleus pulposus. Elle ne donne <strong>pas</strong> la colonne vertébrale (qui dérive des sclérotomes) ni la moelle épinière (qui dérive de l'ectoblaste).</div>`
            },
            {
              titre: "Plaque préchordale, membrane cloacale et limites du mésoblaste",
              contenu: `<p>Le mésoblaste intra-embryonnaire s'étend entre ectoblaste et entoblaste dans tout le disque, <strong>sauf en deux zones médianes</strong> où l'ectoblaste et l'entoblaste restent directement accolés :</p>
<ul>
<li>La <strong>plaque préchordale</strong> (membrane pharyngienne, future membrane bucco-pharyngienne) : à l'extrémité <strong>céphalique</strong>, juste en avant de la notochorde. Elle apparaît dès J14 comme un épaississement de l'hypoblaste (puis de l'entoblaste) et constitue le premier repère de l'axe antéro-postérieur ; elle est un centre organisateur de la tête (induction du prosencéphale). Elle devient la <strong>membrane pharyngienne</strong> (bucco-pharyngienne), qui fermera transitoirement le stomodeum (bouche primitive) et se rompra à la 4<sup>e</sup> semaine (J26-J28) pour ouvrir la cavité buccale dans l'intestin antérieur.</li>
<li>La <strong>membrane cloacale</strong> : à l'extrémité <strong>caudale</strong>, en arrière de la ligne primitive. Elle fermera le cloaque (partie terminale de l'intestin postérieur) et se rompra à la 7<sup>e</sup>-8<sup>e</sup> semaine après son cloisonnement en membrane urogénitale et membrane anale.</li>
</ul>
<p>En avant de la plaque préchordale, le mésoblaste des deux côtés se rejoint sur la ligne médiane : c'est l'<strong>aire cardiogène</strong> (mésoderme cardiogénique, en forme de fer à cheval), dont la position céphalique initiale explique que le cœur se trouve d'abord en avant de la tête, avant la plicature céphalique qui le ramène en position thoracique.</p>
<h4>Devenir du mésoblaste intra-embryonnaire</h4>
<p>Dès la fin de la 3<sup>e</sup> semaine (J19-J20), le mésoblaste s'organise, de part et d'autre de la notochorde, en trois bandes longitudinales qui seront détaillées au chapitre suivant : le <strong>mésoblaste para-axial</strong> (qui se segmentera en somites à partir de J20), le <strong>mésoblaste intermédiaire</strong> et le <strong>mésoblaste latéral</strong> (lames latérales, qui se dédoubleront en somatopleure et splanchnopleure intra-embryonnaires autour du cœlome intra-embryonnaire). Les premiers somites (occipitaux) apparaissent à J20 : c'est le début de la <strong>métamérisation</strong>.</p>
<h4>L'asymétrie droite-gauche</h4>
<p>Le <strong>nœud primitif</strong> porte des cellules ciliées dont le battement crée un courant orienté vers la gauche dans le liquide amniotique local ; il en résulte une expression asymétrique de gènes (<strong>Nodal</strong>, Lefty, <strong>Pitx2</strong> à gauche ; SHH, FGF8) qui fixe la latéralité des organes (cœur à gauche, foie à droite, rotation intestinale). Un défaut de ce mécanisme (anomalies ciliaires, syndrome de Kartagener avec dyskinésie ciliaire primitive) entraîne un <strong>situs inversus</strong> (inversion en miroir de tous les viscères, 1/10 000) ou une hétérotaxie (inversion partielle, associée à des cardiopathies complexes).</p>`
            },
            {
              titre: "Autres événements de la 3e semaine : neurulation débutante, allantoïde, villosités, vaisseaux",
              contenu: `<h4>Début de la neurulation (J18)</h4>
<p>Dès le 18<sup>e</sup> jour, sous l'induction de la notochorde et du mésoblaste para-axial (antagonistes des BMP : Noggin, Chordin, Follistatine), l'ectoblaste médian situé au-dessus de la notochorde s'épaissit en cellules hautes : c'est la <strong>plaque neurale</strong> (neuroectoblaste), en forme de raquette dont la partie large est céphalique (futur encéphale) et la partie étroite caudale (future moelle). Dès J19-J20, ses bords se soulèvent en <strong>bourrelets neuraux</strong> et sa partie médiane se déprime en <strong>gouttière neurale</strong>. La fermeture en tube neural n'aura lieu qu'à la 4<sup>e</sup> semaine. La neurulation primaire concerne le tube neural jusqu'au niveau sacré (S2) ; la neurulation secondaire (à partir de l'éminence caudale, ancienne ligne primitive) forme la partie la plus caudale.</p>
<h4>L'allantoïde (J16)</h4>
<p>Vers le 16<sup>e</sup> jour, un petit diverticule entoblastique se développe à partir de la paroi caudale de la vésicule vitelline et s'engage dans le <strong>pédicule embryonnaire</strong> : c'est l'<strong>allantoïde</strong>. Chez l'homme, elle reste rudimentaire (quelques millimètres) et n'a pas de rôle de réservoir urinaire comme chez les oiseaux. Son importance tient à son mésoderme, où se développent les <strong>vaisseaux ombilicaux</strong> (deux artères et deux veines, dont une seule persiste), et à sa partie proximale, qui participe à la formation de la <strong>vessie</strong> ; sa partie intra-embryonnaire se transforme en un cordon fibreux, l'<strong>ouraque</strong> (ligament ombilical médian). Une persistance anormale donne une fistule ou un kyste de l'ouraque.</p>
<h4>Les villosités choriales</h4>
<p>Les villosités évoluent rapidement au cours de la 3<sup>e</sup> semaine :</p>
<ul>
<li><strong>Villosités primaires</strong> (J13-J15) : axe de cytotrophoblaste recouvert de syncytiotrophoblaste.</li>
<li><strong>Villosités secondaires</strong> (J16-J18) : le mésoderme extra-embryonnaire (somatopleure) pénètre dans l'axe cytotrophoblastique ; la villosité comporte alors, de dedans en dehors : mésenchyme, cytotrophoblaste, syncytiotrophoblaste.</li>
<li><strong>Villosités tertiaires</strong> (J18-J21) : des <strong>capillaires</strong> apparaissent dans le mésenchyme de la villosité (vasculogenèse in situ), puis se connectent aux vaisseaux du pédicule embryonnaire et à ceux de l'embryon : la circulation fœto-placentaire est fonctionnelle à la fin de la 3<sup>e</sup> semaine, dès que le cœur bat (J21-J22).</li>
</ul>
<p>Parallèlement, les cellules du cytotrophoblaste prolifèrent à l'extrémité des villosités, traversent le syncytiotrophoblaste et s'étalent au contact de la caduque pour former la <strong>coque cytotrophoblastique</strong>, qui ancre l'œuf dans l'endomètre ; les villosités fixées à la coque sont les <strong>villosités crampons</strong>, les autres sont des <strong>villosités libres</strong> flottant dans le sang maternel de la chambre intervilleuse (anciennes lacunes).</p>
<h4>Vasculogenèse, hématopoïèse et ébauche cardiaque</h4>
<p>Les premiers vaisseaux apparaissent vers <strong>J17-J18</strong> dans le mésoderme <strong>extra-embryonnaire</strong> de la vésicule vitelline, du pédicule et du chorion : des amas de cellules mésenchymateuses (<strong>îlots de Wolff et Pander</strong>, îlots sanguins) se différencient en <strong>hémangioblastes</strong> ; les cellules périphériques deviennent des cellules endothéliales (angioblastes) qui délimitent des vésicules confluant en réseaux, et les cellules centrales des cellules souches hématopoïétiques primitives (premiers érythroblastes nucléés, à hémoglobine embryonnaire). La vésicule vitelline est donc le premier site d'<strong>hématopoïèse</strong> (3<sup>e</sup> à 8<sup>e</sup> semaine), relayée par le foie (à partir de la 6<sup>e</sup> semaine), la rate, puis la moelle osseuse (à partir du 4<sup>e</sup>-5<sup>e</sup> mois). Dans l'embryon, la vasculogenèse débute vers J18-J19 dans la splanchnopleure, où se forment notamment les deux <strong>tubes endocardiques</strong> de l'aire cardiogène, qui fusionnent en un <strong>tube cardiaque</strong> unique lors de la plicature (J21-J22) et commencent à battre vers <strong>J22</strong>. Les aortes dorsales, les veines vitellines, ombilicales et cardinales s'établissent en même temps.</p>
<p>Les <strong>cellules germinales primordiales</strong> sont identifiables vers J21-J24 dans la paroi de la vésicule vitelline, près de l'allantoïde ; elles migreront vers les crêtes génitales au cours des 5<sup>e</sup> et 6<sup>e</sup> semaines.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> à la fin de la 3<sup>e</sup> semaine (5 SA), le sac gestationnel mesure 5 à 10 mm et est visible en échographie endovaginale ; la vésicule vitelline secondaire est la première structure identifiable dans le sac (vers 5,5 SA), avant l'embryon lui-même (visible dès 2 mm, avec activité cardiaque vers 6 SA).</div>`
            },
            {
              titre: "Anomalies de la gastrulation",
              contenu: `<ul>
<li><strong>Tératome sacrococcygien</strong> : tumeur de la région sacrée du nouveau-né (1/35 000 naissances, prédominance féminine) issue de <strong>restes de la ligne primitive</strong> (cellules pluripotentes persistantes), contenant des dérivés des trois feuillets (peau, dents, os, tissu nerveux, glandes). Généralement bénigne, parfois volumineuse, elle doit être excisée en période néonatale en raison du risque de transformation maligne.</li>
<li><strong>Dysgénésie caudale</strong> (syndrome de régression caudale, dont la forme extrême est la <strong>sirénomélie</strong>) : insuffisance de mésoblaste caudal (défaut de la ligne primitive postérieure), entraînant hypoplasie ou fusion des membres inférieurs, agénésie sacrée, anomalies rénales (agénésie), vésicales, ano-rectales et génitales. Elle est favorisée par le <strong>diabète maternel</strong> mal équilibré.</li>
<li><strong>Anomalies de la latéralité</strong> : situs inversus totalis (viscères en miroir, souvent sans conséquence fonctionnelle, associé à la dyskinésie ciliaire dans le syndrome de Kartagener), hétérotaxies (isomérisme droit ou gauche avec cardiopathies complexes, asplénie ou polysplénie).</li>
<li><strong>Chordome</strong> : tumeur rare dérivée de reliquats notochordaux, siégeant au sacrum ou à la base du crâne (clivus), de l'adulte.</li>
<li><strong>Holoprosencéphalie</strong> : défaut de clivage du prosencéphale lié notamment à des anomalies de la plaque préchordale et de la voie SHH (voir chapitre système nerveux), associée à des anomalies faciales médianes.</li>
<li><strong>Jumeaux conjoints</strong> : séparation incomplète du disque embryonnaire à ce stade (deux lignes primitives sur un même disque, ou division tardive après J13), voir chapitre sur les grossesses gémellaires.</li>
<li><strong>Exposition aux tératogènes</strong> : la 3<sup>e</sup> semaine est très sensible ; de fortes doses d'alcool à ce stade provoquent des anomalies de la ligne médiane (holoprosencéphalie, syndrome d'alcoolisation fœtale).</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le tératome sacrococcygien dérive de la <strong>ligne primitive</strong> (cellules pluripotentes), et non des cellules germinales primordiales ; il contient des tissus des trois feuillets, ce qui le distingue d'une simple tumeur mésenchymateuse.</div>`
            }
          ],
          points_cles: [
            "La gastrulation (3e semaine, J15-J21) transforme le disque didermique en disque tridermique (ectoblaste, mésoblaste, entoblaste) ; les trois feuillets dérivent de l'épiblaste.",
            "La ligne primitive apparaît à J15 à la face dorsale, dans la moitié caudale du disque, sur la ligne médiane ; le nœud primitif (de Hensen) est à son extrémité céphalique ; elle régresse à partir de J19-J20 et disparaît à la fin de la 4e semaine.",
            "Les cellules épiblastiques s'invaginent par le sillon primitif (transition épithélio-mésenchymateuse) : les premières remplacent l'hypoblaste (entoblaste), les suivantes forment le mésoblaste ; celles passant par le nœud forment le processus notochordal.",
            "Formation de la notochorde : processus notochordal (J16-J17), canal notochordal (J17-J18), plaque notochordale avec canal neurentérique transitoire (J18-J19), notochorde définitive (J19-J22).",
            "La notochorde induit la plaque neurale et la plaque du plancher (SHH), structure l'axe de l'embryon et ne persiste que dans le nucleus pulposus des disques intervertébraux.",
            "Le mésoblaste est absent en deux zones médianes : la plaque préchordale (future membrane pharyngienne, céphalique) et la membrane cloacale (caudale) ; l'aire cardiogène est en avant de la plaque préchordale.",
            "La plaque neurale apparaît à J18 (induction par la notochorde), la gouttière neurale à J19-J20 ; l'allantoïde apparaît à J16 dans le pédicule embryonnaire.",
            "Les villosités deviennent secondaires (axe mésenchymateux, J16-J18) puis tertiaires (capillaires, J18-J21) ; la coque cytotrophoblastique ancre l'œuf.",
            "La vasculogenèse débute à J17-J18 dans la vésicule vitelline (îlots de Wolff et Pander, première hématopoïèse) puis dans l'embryon ; le tube cardiaque bat vers J22.",
            "Le nœud primitif établit l'asymétrie droite-gauche (cils, Nodal, Pitx2) ; anomalies : tératome sacrococcygien (restes de ligne primitive), sirénomélie, situs inversus."
          ],
          lexique: [
            { terme: "Gastrulation", def: "Processus de la 3e semaine par lequel l'épiblaste donne naissance aux trois feuillets primitifs et à la notochorde, par migration de cellules à travers la ligne primitive." },
            { terme: "Ligne primitive", def: "Épaississement médian de la moitié caudale de l'épiblaste (J15), site d'invagination des cellules lors de la gastrulation." },
            { terme: "Nœud primitif (de Hensen)", def: "Renflement de l'extrémité céphalique de la ligne primitive, organisateur de l'embryon, à l'origine de la notochorde et de l'asymétrie droite-gauche." },
            { terme: "Transition épithélio-mésenchymateuse", def: "Transformation de cellules épithéliales jointives en cellules migratrices isolées, par perte de la E-cadhérine ; mécanisme de l'ingression lors de la gastrulation." },
            { terme: "Notochorde", def: "Tige cellulaire axiale médiane issue du nœud primitif, inductrice de la plaque neurale, persistant dans le nucleus pulposus." },
            { terme: "Canal neurentérique", def: "Communication transitoire entre la cavité amniotique et la vésicule vitelline à travers la fossette primitive, lors de la formation de la plaque notochordale." },
            { terme: "Plaque préchordale", def: "Zone médiane céphalique d'accolement de l'ectoblaste et de l'entoblaste, en avant de la notochorde, future membrane pharyngienne." },
            { terme: "Membrane cloacale", def: "Zone médiane caudale d'accolement de l'ectoblaste et de l'entoblaste, fermant le cloaque jusqu'à la 7e-8e semaine." },
            { terme: "Allantoïde", def: "Diverticule entoblastique caudal de la vésicule vitelline s'engageant dans le pédicule embryonnaire (J16), à l'origine des vaisseaux ombilicaux et d'une partie de la vessie." },
            { terme: "Îlots de Wolff et Pander", def: "Amas de cellules mésenchymateuses de la vésicule vitelline à l'origine des premiers vaisseaux et des premières cellules sanguines (J17-J18)." }
          ],
          qcm: [
            {
              q: "Concernant la ligne primitive :",
              options: [
                "A. Elle apparaît vers le 15e jour à la face dorsale du disque embryonnaire.",
                "B. Elle se situe dans la moitié céphalique du disque.",
                "C. Le nœud primitif est situé à son extrémité céphalique.",
                "D. Elle persiste jusqu'à la naissance.",
                "E. Son apparition marque la mise en place de l'axe céphalo-caudal."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : la ligne primitive est dans la moitié caudale. D est fausse : elle régresse à partir de J19-J20 et disparaît à la fin de la 4e semaine ; sa persistance peut donner un tératome sacrococcygien."
            },
            {
              q: "Concernant les feuillets issus de la gastrulation :",
              options: [
                "A. L'entoblaste dérive de l'hypoblaste.",
                "B. Les trois feuillets dérivent de l'épiblaste.",
                "C. Le mésoblaste intra-embryonnaire s'insinue entre l'ectoblaste et l'entoblaste.",
                "D. L'ectoblaste correspond aux cellules de l'épiblaste restées en surface.",
                "E. La migration des cellules fait intervenir une transition épithélio-mésenchymateuse."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : l'entoblaste définitif est formé de cellules épiblastiques qui remplacent l'hypoblaste, lequel est repoussé vers la vésicule vitelline. B, C, D et E sont vraies."
            },
            {
              q: "Concernant la notochorde :",
              options: [
                "A. Elle dérive des cellules passant par le nœud primitif.",
                "B. Le processus notochordal précède le canal notochordal.",
                "C. Le canal neurentérique relie transitoirement la cavité amniotique à la vésicule vitelline.",
                "D. Elle donne naissance aux corps vertébraux.",
                "E. Elle persiste chez l'adulte dans le nucleus pulposus des disques intervertébraux."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : les corps vertébraux dérivent des sclérotomes (mésoblaste para-axial) ; la notochorde les induit mais disparaît en leur sein."
            },
            {
              q: "Concernant les rôles inducteurs lors de la 3e semaine :",
              options: [
                "A. La notochorde induit la formation de la plaque neurale dans l'ectoblaste sus-jacent.",
                "B. Sonic Hedgehog, sécrété par la notochorde, induit la plaque du plancher du tube neural.",
                "C. La plaque neurale apparaît vers le 18e jour.",
                "D. La plaque préchordale est située à l'extrémité caudale du disque.",
                "E. Le mésoblaste est absent au niveau de la membrane cloacale."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la plaque préchordale est céphalique, en avant de la notochorde ; c'est la membrane cloacale qui est caudale."
            },
            {
              q: "Concernant les autres événements de la 3e semaine :",
              options: [
                "A. L'allantoïde est un diverticule de la vésicule vitelline s'engageant dans le pédicule embryonnaire.",
                "B. Les villosités tertiaires se caractérisent par la présence de capillaires dans leur axe mésenchymateux.",
                "C. Les premiers vaisseaux sanguins apparaissent dans le mésoderme intra-embryonnaire.",
                "D. La vésicule vitelline est le premier site de l'hématopoïèse.",
                "E. Le cœur commence à battre vers le 22e jour."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : les premiers vaisseaux apparaissent dans le mésoderme extra-embryonnaire (vésicule vitelline, pédicule, chorion) vers J17-J18, avant les vaisseaux intra-embryonnaires."
            },
            {
              q: "Concernant les anomalies liées à la gastrulation :",
              options: [
                "A. Le tératome sacrococcygien dérive de restes de la ligne primitive.",
                "B. Le tératome sacrococcygien contient des tissus dérivés des trois feuillets.",
                "C. La sirénomélie est favorisée par le diabète maternel.",
                "D. Le situs inversus résulte d'une anomalie du cloisonnement cardiaque.",
                "E. Le chordome dérive de reliquats de la notochorde."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : le situs inversus résulte d'une anomalie de l'établissement de l'asymétrie droite-gauche au niveau du nœud primitif (cils, voie Nodal), non du cloisonnement cardiaque."
            }
          ]
        },
        {
          id: "quatrieme-semaine",
          titre: "Quatrième semaine : neurulation, métamérisation et délimitation",
          duree: 45,
          objectifs: [
            "Décrire la neurulation : plaque, gouttière, tube neural, fermeture des neuropores, crêtes neurales, placodes.",
            "Décrire la métamérisation du mésoblaste : somites (sclérotome, myotome, dermatome), mésoblaste intermédiaire, lames latérales et cœlome intra-embryonnaire.",
            "Expliquer la délimitation de l'embryon par les plicatures céphalo-caudale et latérales et ses conséquences (intestin primitif, cordon ombilical, cavité amniotique).",
            "Connaître le tableau complet des dérivés des trois feuillets.",
            "Décrire l'aspect externe de l'embryon à la fin de la 4e semaine."
          ],
          sections: [
            {
              titre: "La neurulation : du neuroectoblaste au tube neural",
              contenu: `<p>La <strong>neurulation</strong> est la formation du <strong>tube neural</strong>, ébauche du système nerveux central, à partir de l'ectoblaste. Débutée à J18 (plaque neurale) et J19-J20 (gouttière neurale), elle se poursuit et s'achève au cours de la <strong>4<sup>e</sup> semaine</strong>.</p>
<ol>
<li><strong>Plaque neurale</strong> (J18) : épaississement de l'ectoblaste médian dorsal, induit par la notochorde et le mésoblaste para-axial (inhibition des BMP par Noggin, Chordin). Ses cellules, hautes et prismatiques, constituent le <strong>neuroectoblaste</strong> ; le reste de l'ectoblaste, plus mince, est l'<strong>ectoblaste de surface</strong> (épiblaste de revêtement, future épiderme). La plaque est large en avant (encéphale) et étroite en arrière (moelle).</li>
<li><strong>Gouttière neurale</strong> (J19-J21) : les bords de la plaque se soulèvent (<strong>bourrelets</strong> ou plis neuraux) tandis que la ligne médiane se déprime (point d'articulation médian au-dessus de la notochorde, par constriction apicale des cellules), formant une gouttière longitudinale.</li>
<li><strong>Tube neural</strong> (J21-J28) : les bourrelets neuraux convergent et <strong>fusionnent</strong> sur la ligne médiane dorsale, transformant la gouttière en un tube fermé. La fusion débute vers <strong>J21-J22</strong> au niveau de la future région <strong>cervicale</strong> (au niveau des 4<sup>e</sup>-5<sup>e</sup> somites) et progresse <strong>en « fermeture éclair » vers l'avant et vers l'arrière</strong> (chez l'homme, il existe probablement plusieurs sites d'initiation). Simultanément, l'ectoblaste de surface des deux côtés fusionne au-dessus du tube neural, qui se trouve ainsi <strong>enfoui</strong> sous l'ectoderme et séparé de lui : il est désormais entouré de mésoblaste.</li>
<li><strong>Neuropores</strong> : tant que la fermeture n'est pas complète, le tube neural communique avec la cavité amniotique par deux orifices : le <strong>neuropore antérieur</strong> (rostral, céphalique), qui se ferme vers <strong>J25</strong> (stade 11 de Carnegie, 18 à 20 somites), et le <strong>neuropore postérieur</strong> (caudal), qui se ferme vers <strong>J27-J28</strong> (stade 12, 25 somites). La partie du tube neural située au-delà du 2<sup>e</sup> segment sacré se forme par <strong>neurulation secondaire</strong> (cavitation d'un cordon mésenchymateux issu de l'éminence caudale) jusqu'à la 6<sup>e</sup>-7<sup>e</sup> semaine.</li>
</ol>
<p>Le tube neural comporte une lumière, le <strong>canal neural</strong> (futur canal épendymaire et ventricules), bordée par un neuroépithélium pseudostratifié en prolifération intense. Dès la fin de la 4<sup>e</sup> semaine, sa partie céphalique, dilatée, se divise en trois <strong>vésicules cérébrales primitives</strong> : <strong>prosencéphale</strong>, <strong>mésencéphale</strong>, <strong>rhombencéphale</strong> ; sa partie caudale, étroite, forme la <strong>moelle épinière</strong>. Les détails de l'histogenèse sont traités dans le chapitre consacré au système nerveux.</p>
<h4>Les placodes</h4>
<p>Dans l'ectoblaste de surface de la région céphalique apparaissent des épaississements localisés, les <strong>placodes</strong> : <strong>placode otique</strong> (J22-J24, qui s'invagine en vésicule otique à J28, future oreille interne), <strong>placode optique</strong> (J22, ébauche du cristallin), <strong>placode olfactive</strong> (fin de la 4<sup>e</sup> semaine, épithélium olfactif), placodes épibranchiales (ganglions sensoriels des nerfs crâniens VII, IX, X) et <strong>placode adénohypophysaire</strong> (poche de Rathke, antéhypophyse).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> fermeture du tube neural de J21-J22 à J28, débutant en région cervicale ; <strong>neuropore antérieur fermé à J25, neuropore postérieur à J27-J28</strong>. Un défaut de fermeture donne les anomalies de fermeture du tube neural (anencéphalie en avant, spina bifida en arrière), toutes antérieures au 28<sup>e</sup> jour.</div>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les anomalies de fermeture du tube neural (1 à 2/1 000 naissances) sont prévenues par la supplémentation en <strong>acide folique (vitamine B9)</strong>, 0,4 mg par jour (5 mg en cas d'antécédent ou de traitement antiépileptique), à débuter <strong>au moins 4 semaines avant la conception</strong> et à poursuivre jusqu'à 12 SA, puisque la fermeture est achevée à J28 (6 SA), avant la première consultation prénatale. Le dépistage repose sur l'échographie et l'alpha-fœtoprotéine (élevée dans le liquide amniotique et le sérum maternel en cas de défaut ouvert).</div>`
            },
            {
              titre: "Les crêtes neurales (présentation)",
              contenu: `<p>Au moment où les bourrelets neuraux fusionnent, les cellules situées à la <strong>jonction</strong> entre le neuroectoblaste et l'ectoblaste de surface (le sommet des bourrelets) se détachent : ce sont les cellules des <strong>crêtes neurales</strong>. Elles subissent une transition épithélio-mésenchymateuse, perdent leurs jonctions (N-cadhérine), expriment des gènes spécifiques (Snail, Slug, Sox10, FoxD3) et <strong>migrent</strong> à travers le mésoblaste selon des voies définies, pour se différencier en une variété étonnante de types cellulaires : neurones et cellules gliales du système nerveux <strong>périphérique</strong> (ganglions rachidiens, ganglions sympathiques et parasympathiques, cellules de Schwann), <strong>mélanocytes</strong>, <strong>médullosurrénale</strong>, cellules C de la thyroïde, et, dans la région céphalique, le squelette et le tissu conjonctif de la face et du cou (<strong>ectomésenchyme</strong>). Parce qu'elles donnent des dérivés habituellement attribués au mésoderme, on les qualifie parfois de « quatrième feuillet ». Elles font l'objet du chapitre suivant.</p>`
            },
            {
              titre: "La métamérisation du mésoblaste",
              contenu: `<p>Dès la fin de la 3<sup>e</sup> semaine et surtout au cours de la 4<sup>e</sup>, le mésoblaste intra-embryonnaire, de part et d'autre de la notochorde et du tube neural, s'organise en trois territoires longitudinaux, de la ligne médiane vers la périphérie : le mésoblaste <strong>para-axial</strong>, le mésoblaste <strong>intermédiaire</strong> et le mésoblaste <strong>latéral</strong>.</p>
<h4>1. Le mésoblaste para-axial et les somites</h4>
<p>Le mésoblaste para-axial forme deux cordons épais, de part et d'autre de la notochorde. Dans la région céphalique (en avant de la vésicule otique), il reste non segmenté ou forme des <strong>somitomères</strong> incomplets qui participent aux muscles de la face et de l'œil. À partir de la région occipitale, il se segmente de l'avant vers l'arrière en blocs cubiques pairs, les <strong>somites</strong> : c'est la <strong>métamérisation</strong> (segmentation métamérique). Les premiers somites apparaissent vers <strong>J20</strong> dans la région occipitale, puis au rythme d'environ <strong>3 paires par jour</strong> (une paire toutes les 6 à 8 heures, sous le contrôle d'une horloge moléculaire oscillante impliquant Notch, Wnt et FGF). On compte 4 paires à J22, 20 paires à J25, 30 paires à J28 et au total <strong>42 à 44 paires</strong> à la fin de la 5<sup>e</sup> semaine : 4 occipitales, 8 cervicales, 12 thoraciques, 5 lombaires, 5 sacrées et 8 à 10 coccygiennes (les dernières régressent, ainsi que la 1<sup>re</sup> occipitale). Le nombre de somites sert à dater précisément l'embryon entre J20 et J30.</p>
<p>Chaque somite, initialement une sphère épithéliale creuse (somitocèle), se différencie rapidement (J25-J28) en trois parties :</p>
<ul>
<li>le <strong>sclérotome</strong> : partie ventro-médiale, qui perd son organisation épithéliale (transition épithélio-mésenchymateuse induite par SHH de la notochorde) et migre autour de la notochorde et du tube neural pour former les <strong>vertèbres</strong> (corps, arcs), les <strong>disques intervertébraux</strong>, les <strong>côtes</strong> et les méninges (dure-mère). Chaque vertèbre dérive de la moitié caudale d'un sclérotome et de la moitié céphalique du suivant (<strong>resegmentation</strong>), ce qui explique que les muscles d'un myotome enjambent deux vertèbres et que les nerfs rachidiens sortent entre les vertèbres ;</li>
<li>le <strong>dermomyotome</strong> : partie dorso-latérale, qui se divise en <strong>myotome</strong> (muscles striés squelettiques du tronc : muscles épaxiaux du dos, muscles hypaxiaux de la paroi antéro-latérale, et myoblastes des membres) et <strong>dermatome</strong> (derme et hypoderme du dos). Chaque myotome est innervé par le nerf rachidien de son segment : c'est l'origine de la <strong>métamérie</strong> de l'innervation (dermatomes sensitifs, myotomes moteurs).</li>
</ul>
<h4>2. Le mésoblaste intermédiaire</h4>
<p>Cordon plus fin, latéral au mésoblaste para-axial, il est segmenté dans sa partie cervico-thoracique (<strong>néphrotomes</strong>) et continu plus bas (<strong>cordon néphrogène</strong>). Il donne l'<strong>appareil urinaire</strong> (pronéphros, mésonéphros, métanéphros) et une grande partie de l'<strong>appareil génital</strong> (gonades en partie, voies génitales : canaux de Wolff et de Müller). Il relie le mésoblaste para-axial aux lames latérales.</p>
<h4>3. Le mésoblaste latéral et le cœlome intra-embryonnaire</h4>
<p>Le mésoblaste latéral (<strong>lames latérales</strong>) se creuse vers J19-J21 de petites cavités qui confluent en une fente : le <strong>cœlome intra-embryonnaire</strong>, qui communique latéralement avec le cœlome extra-embryonnaire avant la délimitation. Il dédouble les lames latérales en deux feuillets :</p>
<ul>
<li>la <strong>somatopleure intra-embryonnaire</strong> (lame pariétale, somatique), accolée à l'ectoblaste, qui donne la <strong>paroi du corps</strong> (derme et tissu conjonctif de la paroi ventrale et latérale, os et tissu conjonctif des <strong>membres</strong>, séreuses pariétales : plèvre, péricarde et péritoine pariétaux) ;</li>
<li>la <strong>splanchnopleure intra-embryonnaire</strong> (lame viscérale), accolée à l'entoblaste, qui donne la <strong>paroi des viscères</strong> (musculeuse lisse, tissu conjonctif et séreuses viscérales du tube digestif et de l'appareil respiratoire), le <strong>cœur</strong> (myocarde, épicarde) et les vaisseaux, le mésenchyme de la rate et du cortex surrénalien, les cellules sanguines.</li>
</ul>
<p>Le cœlome intra-embryonnaire est en forme de fer à cheval : sa partie médiane, en avant de la plaque préchordale, est la <strong>cavité péricardique</strong> primitive ; ses deux branches latérales deviendront les <strong>canaux pleuro-péricardiques</strong> puis les cavités pleurales et la <strong>cavité péritonéale</strong>. Il donnera donc les trois grandes cavités séreuses du corps.</p>
<table>
<thead><tr><th>Territoire mésoblastique</th><th>Position</th><th>Dérivés principaux</th></tr></thead>
<tbody>
<tr><td>Para-axial (somites)</td><td>De part et d'autre de la notochorde</td><td>Sclérotome : vertèbres, côtes, disques, dure-mère ; myotome : muscles squelettiques du tronc et des membres ; dermatome : derme du dos</td></tr>
<tr><td>Intermédiaire</td><td>Entre para-axial et latéral</td><td>Reins et voies urinaires (hors vessie et urètre), gonades (partie), canaux de Wolff et de Müller</td></tr>
<tr><td>Latéral : somatopleure</td><td>Contre l'ectoblaste</td><td>Derme ventral et latéral, os et conjonctif des membres, séreuses pariétales, paroi du corps</td></tr>
<tr><td>Latéral : splanchnopleure</td><td>Contre l'entoblaste</td><td>Cœur, vaisseaux, sang, musculeuse et conjonctif des viscères digestifs et respiratoires, séreuses viscérales, rate, cortex surrénalien</td></tr>
<tr><td>Cœlome intra-embryonnaire</td><td>Entre les deux lames</td><td>Cavités péricardique, pleurales et péritonéale</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> les muscles des membres dérivent des <strong>myotomes</strong> (somites), mais le squelette et le conjonctif des membres dérivent de la <strong>somatopleure</strong>. Les muscles striés de la tête dérivent du mésoblaste para-axial non segmenté et des arcs pharyngiens. Le muscle lisse des viscères dérive de la splanchnopleure, sauf celui de l'iris et des glandes sudoripares (ectoderme) et des vaisseaux de la face (crêtes neurales).</div>`
            },
            {
              titre: "La délimitation de l'embryon",
              contenu: `<p>À la fin de la 3<sup>e</sup> semaine, l'embryon est encore un <strong>disque plat</strong> tridermique, étalé entre la cavité amniotique (au-dessus) et la vésicule vitelline (au-dessous), avec le pédicule embryonnaire au pôle caudal. Au cours de la <strong>4<sup>e</sup> semaine</strong>, il acquiert sa forme cylindrique à trois dimensions : c'est la <strong>délimitation</strong> (ou plicature, enroulement). Elle résulte de la <strong>croissance différentielle</strong> : le disque embryonnaire, et surtout le tube neural et les somites, croissent beaucoup plus vite que la vésicule vitelline et l'amnios ; l'embryon se bombe dans la cavité amniotique et se replie autour d'un point fixe, la région ombilicale. On décrit deux plicatures simultanées.</p>
<h4>La plicature céphalo-caudale (longitudinale)</h4>
<p>La croissance considérable du tube neural céphalique (vésicules cérébrales) fait basculer l'extrémité céphalique vers l'avant et le bas (<strong>plicature céphalique</strong>, J22-J24) : l'aire cardiogène et la membrane pharyngienne, initialement en avant de la plaque neurale, se retrouvent en position <strong>ventrale</strong>, sous le futur stomodeum ; le cœur passe ainsi d'une position « pré-céphalique » à une position thoracique, et le septum transversum (futur diaphragme) se place en arrière de lui. Du côté caudal, l'<strong>éminence caudale</strong> se replie également vers le ventre (<strong>plicature caudale</strong>) : la membrane cloacale et le pédicule embryonnaire (avec l'allantoïde) basculent vers la face ventrale, et le pédicule se rapproche de la vésicule vitelline.</p>
<h4>La plicature latérale (transversale)</h4>
<p>Les bords latéraux du disque se replient ventralement et convergent vers la ligne médiane ventrale. L'ectoblaste de surface enveloppe progressivement l'embryon ; la somatopleure forme les parois latérales et ventrales du corps ; la splanchnopleure et l'entoblaste pincent la partie dorsale de la vésicule vitelline et l'incorporent dans l'embryon.</p>
<h4>Conséquences de la délimitation</h4>
<ul>
<li>La partie dorsale de la vésicule vitelline, incorporée, devient l'<strong>intestin primitif</strong>, tube entoblastique fermé en avant par la membrane pharyngienne et en arrière par la membrane cloacale, divisé en <strong>intestin antérieur</strong>, <strong>intestin moyen</strong> (encore largement ouvert dans la vésicule vitelline) et <strong>intestin postérieur</strong>. La vésicule vitelline, extra-embryonnaire, ne communique plus avec l'intestin moyen que par le <strong>canal vitellin</strong> (conduit omphalo-mésentérique), de plus en plus étroit.</li>
<li>La <strong>cavité amniotique</strong> s'étend tout autour de l'embryon ; l'amnios s'insère désormais sur la face ventrale, autour du <strong>pédicule embryonnaire</strong>, du <strong>canal vitellin</strong> et de l'<strong>allantoïde</strong>, qu'il engaine progressivement : c'est le <strong>cordon ombilical</strong> primitif, qui contient donc le pédicule embryonnaire (avec les vaisseaux ombilicaux et l'allantoïde), le canal vitellin avec ses vaisseaux vitellins, et un reliquat de cœlome extra-embryonnaire (dans lequel l'intestin fera hernie transitoirement entre la 6<sup>e</sup> et la 10<sup>e</sup> semaine).</li>
<li>Le <strong>cœlome intra-embryonnaire</strong>, fermé par les plicatures, est isolé du cœlome extra-embryonnaire (sauf au niveau du cordon) et forme les cavités péricardique, pleurales et péritonéale.</li>
<li>Les deux <strong>tubes endocardiques</strong>, rapprochés par la plicature latérale, fusionnent en un <strong>tube cardiaque</strong> unique (J21-J22) dans la cavité péricardique.</li>
<li>Le <strong>mésentère dorsal</strong> primitif suspend l'intestin à la paroi dorsale ; le <strong>mésentère ventral</strong> n'existe qu'au niveau de l'intestin antérieur (septum transversum, futurs ligaments falciforme et petit omentum).</li>
<li>L'embryon devient cylindrique, incurvé en forme de C, avec un <strong>pôle céphalique</strong> volumineux et une extrémité caudale, et flotte dans le liquide amniotique, relié au placenta par le cordon.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la délimitation enroule le disque autour de la région ombilicale ; elle crée l'intestin primitif (à partir du toit de la vésicule vitelline), le cordon ombilical (pédicule embryonnaire + canal vitellin + allantoïde engainés par l'amnios), place le cœur en position thoracique et ferme le cœlome intra-embryonnaire.</div>`
            },
            {
              titre: "Les dérivés des trois feuillets",
              contenu: `<p>Le tableau suivant récapitule les dérivés des trois feuillets primitifs ; il est l'un des plus demandés au concours.</p>
<table>
<thead><tr><th>Feuillet</th><th>Subdivision</th><th>Dérivés</th></tr></thead>
<tbody>
<tr><td rowspan="3"><strong>Ectoblaste</strong></td><td>Ectoblaste de surface</td><td>Épiderme et ses annexes (poils, ongles, glandes sudoripares, sébacées et mammaires), émail des dents, cristallin, cornée (épithélium), épithélium de la cavité buccale antérieure, des fosses nasales, des sinus, du conduit auditif externe, de la partie terminale du canal anal et de l'urètre distal ; adénohypophyse (poche de Rathke) ; glandes salivaires (parotide) ; placodes (oreille interne, épithélium olfactif, ganglions de certains nerfs crâniens)</td></tr>
<tr><td>Neuroectoblaste (tube neural)</td><td>Système nerveux central (encéphale, moelle), rétine et nerf optique, épithélium pigmentaire, neurohypophyse, épiphyse, muscles de l'iris, épendyme et plexus choroïdes</td></tr>
<tr><td>Crêtes neurales</td><td>Système nerveux périphérique (ganglions sensitifs et autonomes, cellules de Schwann, cellules satellites), médullosurrénale, mélanocytes, cellules C de la thyroïde, leptoméninges, odontoblastes, ectomésenchyme de la face (os, cartilage, derme, conjonctif de la face et du cou), septum aortico-pulmonaire, cellules paraganglionnaires (voir chapitre dédié)</td></tr>
<tr><td rowspan="4"><strong>Mésoblaste</strong></td><td>Para-axial (somites)</td><td>Squelette axial (vertèbres, côtes, base du crâne en partie), muscles striés squelettiques du tronc et des membres, derme du dos, dure-mère</td></tr>
<tr><td>Intermédiaire</td><td>Reins, uretères, voies génitales (canaux de Wolff et de Müller et leurs dérivés), une partie des gonades</td></tr>
<tr><td>Latéral</td><td>Cœur, vaisseaux, cellules sanguines, séreuses, musculeuse et conjonctif des viscères, squelette et conjonctif des membres, derme ventral, rate, cortex surrénalien</td></tr>
<tr><td>Céphalique non segmenté</td><td>Muscles extrinsèques de l'œil, muscles de la langue (avec les somites occipitaux), muscles des arcs pharyngiens (mastication, mimique, pharynx, larynx)</td></tr>
<tr><td rowspan="2"><strong>Entoblaste</strong></td><td>Intestin primitif</td><td>Épithélium du tube digestif (du pharynx au canal anal, sauf ses extrémités ectodermiques), parenchyme (hépatocytes, cellules acineuses et endocrines du pancréas) et épithélium des glandes annexes (foie, pancréas, vésicule biliaire), épithélium de l'appareil respiratoire (trachée, bronches, pneumocytes), épithélium de la vessie et de l'urètre (sauf partie distale), vagin (partie inférieure, discuté)</td></tr>
<tr><td>Intestin pharyngien (poches)</td><td>Thyroïde (cellules folliculaires), parathyroïdes, thymus (épithélium), amygdales (épithélium), oreille moyenne (épithélium de la caisse du tympan et de la trompe auditive), corps ultimobranchial</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> quelques dérivés contre-intuitifs à retenir : la <strong>médullosurrénale</strong> dérive des crêtes neurales, le <strong>cortex surrénalien</strong> du mésoblaste ; l'<strong>adénohypophyse</strong> dérive de l'ectoblaste de surface (stomodeum), la <strong>neurohypophyse</strong> du neuroectoblaste ; les <strong>muscles de l'iris</strong> sont d'origine neuroectoblastique ; l'<strong>émail</strong> est ectoblastique mais la dentine (odontoblastes) vient des crêtes neurales ; les <strong>cellules C</strong> de la thyroïde sont d'origine crête neurale alors que les cellules folliculaires sont entoblastiques ; la <strong>rate</strong> et les <strong>cellules sanguines</strong> sont mésoblastiques (pas entoblastiques).</div>`
            },
            {
              titre: "L'embryon à la fin de la 4e semaine",
              contenu: `<p>À J28 (stade 12-13 de Carnegie), l'embryon mesure <strong>4 à 5 mm</strong> (longueur vertex-coccyx) et possède déjà une forme caractéristique :</p>
<ul>
<li>il est <strong>incurvé en C</strong>, avec un pôle céphalique volumineux (vésicules cérébrales) fléchi sur la saillie cardiaque ;</li>
<li>le <strong>tube neural</strong> est fermé (neuropore postérieur à J27-J28) ; les vésicules otique et optique sont visibles ;</li>
<li>on compte environ <strong>30 paires de somites</strong>, visibles sous la peau dorsale ;</li>
<li>la région cervicale présente <strong>3 à 4 arcs pharyngiens</strong> (branchiaux) séparés par des fentes, avec le stomodeum (bouche primitive) dont la membrane pharyngienne s'est rompue vers J26-J28 ;</li>
<li>le <strong>cœur</strong>, volumineux, fait saillie ventralement et bat depuis J22 ; la circulation est établie ;</li>
<li>les <strong>bourgeons des membres supérieurs</strong> apparaissent vers <strong>J26</strong> (en regard des somites C5 à T1) et ceux des <strong>membres inférieurs</strong> vers <strong>J28</strong> (en regard de L2 à S2) ;</li>
<li>le <strong>cordon ombilical</strong> est formé ; l'embryon flotte dans la cavité amniotique ;</li>
<li>à l'intérieur, les ébauches des principaux organes sont présentes : bourgeon pulmonaire (J26-J28), bourgeon hépatique (J22-J24), bourgeons pancréatiques, mésonéphros, bourgeon urétéral (fin de la 4<sup>e</sup>-début de la 5<sup>e</sup> semaine), poche de Rathke, vésicule thyroïdienne (J24), etc.</li>
</ul>
<p>Le passage du disque plat à cet embryon cylindrique pourvu de toutes ses ébauches en une seule semaine rend la 4<sup>e</sup> semaine particulièrement sensible : c'est le début de la période de <strong>sensibilité maximale aux tératogènes</strong>, qui se prolonge jusqu'à la 8<sup>e</sup> semaine.</p>`
            }
          ],
          points_cles: [
            "La neurulation forme le tube neural à partir du neuroectoblaste : plaque neurale (J18), gouttière (J19-J21), fermeture débutant en région cervicale (J21-J22), neuropore antérieur fermé à J25, neuropore postérieur à J27-J28.",
            "Les crêtes neurales se détachent du sommet des bourrelets neuraux lors de la fermeture et migrent dans le mésoblaste.",
            "Le mésoblaste para-axial se segmente en somites à partir de J20 (3 paires par jour, 30 paires à J28, 42-44 au total) ; chaque somite donne un sclérotome (vertèbres, côtes), un myotome (muscles squelettiques) et un dermatome (derme dorsal).",
            "Le mésoblaste intermédiaire donne l'appareil urinaire et une grande partie de l'appareil génital.",
            "Les lames latérales se dédoublent autour du cœlome intra-embryonnaire en somatopleure (paroi du corps, membres, séreuses pariétales) et splanchnopleure (cœur, vaisseaux, sang, paroi des viscères, séreuses viscérales).",
            "La délimitation (plicatures céphalo-caudale et latérales) résulte de la croissance différentielle et transforme le disque en cylindre ; elle incorpore le toit de la vésicule vitelline en intestin primitif relié par le canal vitellin.",
            "Le cordon ombilical primitif réunit le pédicule embryonnaire (vaisseaux ombilicaux, allantoïde) et le canal vitellin, engainés par l'amnios ; le cœur est ramené en position thoracique.",
            "Ectoblaste : épiderme et annexes, SNC, rétine, hypophyse, crêtes neurales ; mésoblaste : squelette, muscles, cœur, vaisseaux, sang, reins, gonades, séreuses, cortex surrénalien ; entoblaste : épithéliums digestif et respiratoire, foie, pancréas, thyroïde, parathyroïdes, thymus, vessie.",
            "Pièges : médullosurrénale (crêtes neurales) contre cortex surrénalien (mésoblaste) ; adénohypophyse (ectoblaste de surface) contre neurohypophyse (neuroectoblaste) ; muscles de l'iris (neuroectoblaste).",
            "À J28, l'embryon mesure 4-5 mm, est incurvé en C, a 30 paires de somites, 3 à 4 arcs pharyngiens, un cœur battant, des bourgeons de membres supérieurs (J26) et inférieurs (J28)."
          ],
          lexique: [
            { terme: "Neurulation", def: "Formation du tube neural à partir de la plaque neurale, par soulèvement des bourrelets et fusion dorsale, du 18e au 28e jour." },
            { terme: "Neuropore", def: "Orifice transitoire du tube neural communiquant avec la cavité amniotique ; l'antérieur se ferme à J25, le postérieur à J27-J28." },
            { terme: "Placode", def: "Épaississement localisé de l'ectoblaste de surface céphalique à l'origine d'organes sensoriels ou de ganglions (placodes otique, optique, olfactive, adénohypophysaire)." },
            { terme: "Somite", def: "Bloc métamérique pair de mésoblaste para-axial, apparaissant à raison de 3 paires par jour à partir de J20, à l'origine du sclérotome, du myotome et du dermatome." },
            { terme: "Sclérotome", def: "Partie ventro-médiale du somite donnant les vertèbres, les côtes, les disques intervertébraux et la dure-mère." },
            { terme: "Myotome", def: "Partie du dermomyotome donnant les muscles striés squelettiques du tronc et des membres." },
            { terme: "Somatopleure intra-embryonnaire", def: "Lame pariétale du mésoblaste latéral, accolée à l'ectoblaste, donnant la paroi du corps, le squelette des membres et les séreuses pariétales." },
            { terme: "Splanchnopleure intra-embryonnaire", def: "Lame viscérale du mésoblaste latéral, accolée à l'entoblaste, donnant le cœur, les vaisseaux et la paroi des viscères." },
            { terme: "Cœlome intra-embryonnaire", def: "Cavité creusée dans le mésoblaste latéral, à l'origine des cavités péricardique, pleurales et péritonéale." },
            { terme: "Délimitation", def: "Enroulement du disque embryonnaire par les plicatures céphalo-caudale et latérales (4e semaine), transformant l'embryon plat en cylindre." },
            { terme: "Canal vitellin", def: "Conduit omphalo-mésentérique reliant l'intestin moyen à la vésicule vitelline après la délimitation." }
          ],
          qcm: [
            {
              q: "Concernant la neurulation :",
              options: [
                "A. La plaque neurale est induite par la notochorde.",
                "B. La fermeture du tube neural débute au niveau de la région cervicale.",
                "C. Le neuropore antérieur se ferme vers le 25e jour.",
                "D. Le neuropore postérieur se ferme avant le neuropore antérieur.",
                "E. Le tube neural dérive de l'ectoblaste."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : le neuropore antérieur se ferme à J25, le postérieur à J27-J28."
            },
            {
              q: "Concernant les somites :",
              options: [
                "A. Les premiers somites apparaissent vers le 20e jour dans la région occipitale.",
                "B. Ils se forment à raison d'environ 3 paires par jour.",
                "C. Le sclérotome donne les muscles squelettiques du tronc.",
                "D. Le dermatome donne le derme de la région dorsale.",
                "E. Le nombre de somites permet de dater l'embryon entre J20 et J30."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le sclérotome donne les vertèbres, les côtes et les disques ; les muscles dérivent du myotome."
            },
            {
              q: "Concernant le mésoblaste latéral :",
              options: [
                "A. Il se dédouble en somatopleure et splanchnopleure autour du cœlome intra-embryonnaire.",
                "B. La splanchnopleure est accolée à l'ectoblaste.",
                "C. Le cœur dérive de la splanchnopleure.",
                "D. Le squelette des membres dérive de la somatopleure.",
                "E. Le cœlome intra-embryonnaire est à l'origine des cavités pleurales, péricardique et péritonéale."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la splanchnopleure est accolée à l'entoblaste ; c'est la somatopleure qui est accolée à l'ectoblaste."
            },
            {
              q: "Concernant la délimitation de l'embryon :",
              options: [
                "A. Elle résulte de la croissance différentielle du disque embryonnaire par rapport à la vésicule vitelline.",
                "B. La plicature céphalique place le cœur en position thoracique.",
                "C. L'intestin primitif dérive de la partie dorsale de la vésicule vitelline.",
                "D. Après la délimitation, l'intestin moyen communique avec la vésicule vitelline par le canal vitellin.",
                "E. Le cordon ombilical ne contient que le pédicule embryonnaire."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : le cordon ombilical primitif contient le pédicule embryonnaire (vaisseaux ombilicaux, allantoïde), le canal vitellin et ses vaisseaux, et un reliquat de cœlome extra-embryonnaire, le tout engainé par l'amnios."
            },
            {
              q: "Concernant les dérivés des feuillets :",
              options: [
                "A. La médullosurrénale dérive des crêtes neurales.",
                "B. Le cortex surrénalien dérive de l'entoblaste.",
                "C. L'adénohypophyse dérive de l'ectoblaste de surface.",
                "D. L'épithélium respiratoire dérive de l'entoblaste.",
                "E. Les cellules sanguines dérivent du mésoblaste."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le cortex surrénalien dérive du mésoblaste (splanchnopleure, épithélium cœlomique)."
            },
            {
              q: "Parmi les structures suivantes, lesquelles dérivent de l'entoblaste ?",
              options: [
                "A. Les cellules folliculaires de la thyroïde.",
                "B. Les hépatocytes.",
                "C. Les cellules C de la thyroïde.",
                "D. L'épithélium de la vessie.",
                "E. L'émail dentaire."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : les cellules C dérivent des crêtes neurales (via le corps ultimobranchial). E est fausse : l'émail dérive de l'ectoblaste de surface."
            },
            {
              q: "Concernant l'embryon à la fin de la 4e semaine :",
              options: [
                "A. Il mesure environ 4 à 5 mm.",
                "B. Les bourgeons des membres supérieurs apparaissent avant ceux des membres inférieurs.",
                "C. Il possède environ 30 paires de somites.",
                "D. Il est encore un disque plat.",
                "E. Son cœur bat."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B (J26 contre J28), C et E sont vraies. D est fausse : la délimitation l'a transformé en un cylindre incurvé en C."
            }
          ]
        },
        {
          id: "cretes-neurales",
          titre: "Les crêtes neurales et leurs dérivés",
          duree: 30,
          objectifs: [
            "Définir les crêtes neurales, leur origine et le moment de leur apparition.",
            "Décrire les mécanismes de la délamination et de la migration des cellules des crêtes neurales.",
            "Distinguer les crêtes neurales céphaliques, troncales, vagales et sacrées et leurs dérivés respectifs.",
            "Connaître la liste complète des dérivés des crêtes neurales.",
            "Connaître les principales neurocristopathies."
          ],
          sections: [
            {
              titre: "Définition et origine",
              contenu: `<p>Les <strong>crêtes neurales</strong> sont une population cellulaire transitoire, propre aux vertébrés, qui apparaît lors de la neurulation à la <strong>jonction entre le neuroectoblaste (plaque neurale) et l'ectoblaste de surface</strong>, c'est-à-dire au sommet des <strong>bourrelets neuraux</strong>. Ces cellules sont donc d'<strong>origine ectoblastique</strong>. Au moment de la fusion des bourrelets (J21 à J28, et un peu plus tôt dans la région céphalique), elles se détachent du tube neural en formation et de l'ectoblaste de surface, acquièrent un phénotype mésenchymateux et <strong>migrent</strong> à travers l'embryon pour coloniser des sites très variés où elles se différencient en de nombreux types cellulaires.</p>
<p>Leur induction résulte de la combinaison de signaux à la frontière de la plaque neurale : niveaux <strong>intermédiaires de BMP</strong> (entre le niveau élevé de l'ectoblaste de surface et le niveau faible de la plaque neurale), <strong>Wnt</strong>, <strong>FGF</strong> et acide rétinoïque. Ces signaux induisent l'expression de gènes « spécificateurs » de la bordure de plaque neurale (Pax3, Pax7, Zic1, Msx1) puis de gènes spécificateurs des crêtes neurales (<strong>Snail/Slug</strong>, <strong>FoxD3</strong>, <strong>Sox9</strong>, <strong>Sox10</strong>, Twist, AP-2).</p>
<p>Les cellules des crêtes neurales sont <strong>multipotentes</strong> (chaque cellule peut donner plusieurs types cellulaires selon l'environnement rencontré) et donnent des dérivés habituellement considérés comme <strong>ectodermiques</strong> (neurones, cellules gliales, mélanocytes) mais aussi des dérivés de type <strong>mésodermique</strong> (os, cartilage, derme, muscle lisse) dans la région céphalique, d'où leur appellation d'<strong>ectomésenchyme</strong> et le qualificatif de « <strong>quatrième feuillet</strong> embryonnaire ».</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> origine ectoblastique, à la jonction plaque neurale / ectoblaste de surface, séparation lors de la fermeture du tube neural (4<sup>e</sup> semaine), migration, multipotence, dérivés nerveux périphériques, pigmentaires, endocriniens et squelettiques faciaux.</div>`
            },
            {
              titre: "Délamination et migration",
              contenu: `<h4>La délamination</h4>
<p>Pour quitter le neuroépithélium, les cellules des crêtes neurales réalisent une <strong>transition épithélio-mésenchymateuse</strong> : sous le contrôle de Snail/Slug et de Sox10, elles répriment les cadhérines épithéliales (<strong>N-cadhérine</strong>, cadhérine 6B), perdent leurs jonctions, dégradent localement la lame basale par des métalloprotéases, modifient leur cytosquelette et acquièrent des <strong>intégrines</strong> leur permettant d'adhérer à la matrice extracellulaire (fibronectine, laminine, collagènes). Dans la région troncale, la délamination a lieu après la fermeture du tube neural ; dans la région céphalique, elle précède la fermeture (les cellules quittent les bourrelets encore ouverts).</p>
<h4>Les voies de migration</h4>
<p>La migration se fait le long de voies définies, guidée par des signaux attractifs et répulsifs de l'environnement (éphrines, sémaphorines, chimiokine SDF-1, molécules de la matrice : la fibronectine et la laminine sont permissives, les chondroïtine-sulfates et le versican sont inhibiteurs). Dans le tronc, on distingue deux voies principales :</p>
<ul>
<li>la <strong>voie ventrale</strong> (ou ventromédiale), empruntée en premier : les cellules passent entre le tube neural et les somites, à travers la moitié <strong>antérieure</strong> (rostrale) de chaque sclérotome (la moitié postérieure, riche en éphrines et sémaphorine 3F, est répulsive), ce qui explique la <strong>segmentation</strong> des ganglions rachidiens et sympathiques ; elles donnent les <strong>ganglions sensitifs rachidiens</strong> (les cellules qui s'arrêtent tôt), les <strong>ganglions sympathiques</strong> paravertébraux et prévertébraux, les <strong>cellules de Schwann</strong> le long des nerfs et la <strong>médullosurrénale</strong> (les cellules qui migrent le plus loin) ;</li>
<li>la <strong>voie dorso-latérale</strong>, empruntée plus tardivement : les cellules passent entre le dermomyotome et l'ectoblaste de surface, sous l'épiderme, et donnent les <strong>mélanocytes</strong> de la peau, des poils et de l'œil (choroïde, iris) ainsi que de l'oreille interne.</li>
</ul>
<p>Dans la région céphalique, les cellules migrent en <strong>courants</strong> massifs à partir du prosencéphale postérieur, du mésencéphale et des rhombomères du rhombencéphale vers les <strong>bourgeons faciaux</strong> et les <strong>arcs pharyngiens</strong> : les crêtes du mésencéphale et des rhombomères 1 et 2 colonisent le 1<sup>er</sup> arc, celles du rhombomère 4 le 2<sup>e</sup> arc, celles des rhombomères 6 et 7 les 3<sup>e</sup>, 4<sup>e</sup> et 6<sup>e</sup> arcs. Les rhombomères 3 et 5 produisent peu de cellules (apoptose), ce qui sépare les courants. Les cellules emportent avec elles un code d'identité positionnelle (gènes <strong>Hox</strong> pour les arcs 2 et suivants, absence de Hox pour le 1<sup>er</sup> arc) qui détermine le squelette qu'elles formeront.</p>
<p>La <strong>différenciation</strong> finale dépend des signaux rencontrés au site d'arrivée : par exemple, les BMP sécrétées par l'aorte dorsale induisent le phénotype sympathique (noradrénergique) ; les glucocorticoïdes du cortex surrénalien induisent le phénotype chromaffine de la médullosurrénale ; les neurégulines favorisent la différenciation gliale ; Wnt et l'endothéline 3 le phénotype mélanocytaire.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> les cellules des crêtes neurales traversent la moitié <strong>antérieure</strong> (rostrale) de chaque sclérotome. Cette ségrégation est aussi celle des axones moteurs : c'est elle qui segmente le système nerveux périphérique, et non la segmentation du tube neural (qui n'est pas métamérisé dans la moelle).</div>`
            },
            {
              titre: "Les dérivés selon la région d'origine",
              contenu: `<p>On distingue classiquement quatre régions de crêtes neurales le long de l'axe, aux dérivés partiellement différents.</p>
<table>
<thead><tr><th>Région</th><th>Niveau d'origine</th><th>Dérivés spécifiques</th></tr></thead>
<tbody>
<tr><td><strong>Crêtes neurales céphaliques</strong> (crâniennes)</td><td>Du prosencéphale postérieur (diencéphale) au rhombomère 8 (niveau du 4<sup>e</sup> somite)</td><td><strong>Ectomésenchyme</strong> de la face et du cou : os du squelette facial (maxillaire, mandibule, os zygomatique, os nasaux, lacrymaux, palatins) et une partie de la voûte du crâne (os frontal, partie squameuse du temporal), cartilages des arcs pharyngiens (cartilage de Meckel, osselets de l'oreille moyenne, os hyoïde, cartilages laryngés en partie), derme et tissu conjonctif de la face, muscle lisse des vaisseaux de la face et des arcs aortiques, <strong>odontoblastes</strong> (dentine) et pulpe dentaire, péricytes, stroma de la cornée, sclère, muscles ciliaires, tissu conjonctif des glandes (thyroïde, parathyroïdes, thymus, salivaires, lacrymales), ganglions sensitifs des nerfs crâniens (V, VII, IX, X, en partie avec les placodes), ganglions parasympathiques de la tête (ciliaire, ptérygopalatin, otique, submandibulaire), cellules de Schwann, mélanocytes, leptoméninges du prosencéphale</td></tr>
<tr><td><strong>Crêtes neurales vagales</strong></td><td>Somites 1 à 7 (région occipito-cervicale)</td><td><strong>Système nerveux entérique</strong> (plexus de Meissner et d'Auerbach) de tout le tube digestif, ganglions parasympathiques du cou et du thorax, <strong>crêtes cardiaques</strong> : <strong>septum aortico-pulmonaire</strong> (cloisonnement du tronc artériel), paroi des gros vaisseaux (média des arcs aortiques), valves semi-lunaires, tissu de conduction en partie, cellules C de la thyroïde (via les corps ultimobranchiaux), cellules de Schwann</td></tr>
<tr><td><strong>Crêtes neurales troncales</strong></td><td>Somites 8 à 28</td><td>Ganglions sensitifs <strong>rachidiens</strong> (neurones pseudo-unipolaires et cellules satellites), ganglions <strong>sympathiques</strong> (chaînes paravertébrales, ganglions prévertébraux), <strong>médullosurrénale</strong> (cellules chromaffines, à partir des somites 18 à 24) et paraganglions, <strong>cellules de Schwann</strong> et cellules satellites, <strong>mélanocytes</strong>, cellules neuro-endocrines ; pas de dérivé squelettique</td></tr>
<tr><td><strong>Crêtes neurales sacrées</strong> (lombo-sacrées)</td><td>En arrière du somite 28</td><td>Ganglions parasympathiques pelviens, contribution au système nerveux entérique du côlon distal (avec les crêtes vagales), ganglions rachidiens et sympathiques lombo-sacrés</td></tr>
</tbody>
</table>
<p>Les <strong>cellules des crêtes neurales céphaliques</strong> sont les seules à produire du squelette : elles forment la quasi-totalité du <strong>viscérocrâne</strong> (squelette facial) et la partie antérieure du <strong>neurocrâne</strong>, le reste du crâne (os occipital, pariétaux, base du crâne postérieure) dérivant du mésoblaste para-axial et des somites occipitaux. Cette particularité explique la fréquence des anomalies associant la face et le système nerveux périphérique.</p>`
            },
            {
              titre: "Tableau récapitulatif des dérivés des crêtes neurales",
              contenu: `<table>
<thead><tr><th>Catégorie</th><th>Dérivés</th></tr></thead>
<tbody>
<tr><td><strong>Système nerveux périphérique</strong></td><td>Neurones des ganglions sensitifs rachidiens et de certains ganglions des nerfs crâniens (V, VII, IX, X : partie proximale) ; neurones des ganglions sympathiques et parasympathiques (système autonome) ; neurones et cellules gliales du système nerveux entérique ; <strong>cellules de Schwann</strong> ; cellules satellites des ganglions ; cellules gliales entériques</td></tr>
<tr><td><strong>Cellules endocrines et paraendocrines</strong></td><td><strong>Cellules chromaffines de la médullosurrénale</strong> ; paraganglions (corps carotidien, glomus) ; <strong>cellules C (parafolliculaires) de la thyroïde</strong> (calcitonine) ; certaines cellules neuro-endocrines diffuses</td></tr>
<tr><td><strong>Cellules pigmentaires</strong></td><td><strong>Mélanocytes</strong> de l'épiderme, des follicules pileux, de la choroïde, de l'iris (stroma), de la strie vasculaire de l'oreille interne (mais pas l'épithélium pigmentaire de la rétine, d'origine neuroectoblastique)</td></tr>
<tr><td><strong>Ectomésenchyme céphalique</strong></td><td>Os, cartilage, tendons, derme et tissu conjonctif de la face et de la partie antérieure du crâne ; cartilages des arcs pharyngiens (Meckel, Reichert, hyoïde, laryngés en partie) ; <strong>odontoblastes</strong> et pulpe dentaire ; stroma cornéen, sclère, muscles ciliaires ; muscle lisse des vaisseaux de la face et des arcs aortiques ; tissu conjonctif des glandes de la tête et du cou ; adipocytes de la face</td></tr>
<tr><td><strong>Cœur et gros vaisseaux</strong></td><td><strong>Septum aortico-pulmonaire</strong> (cloison du tronc artériel) ; média des gros troncs issus des arcs aortiques ; contribution aux valves semi-lunaires et au tissu de conduction</td></tr>
<tr><td><strong>Méninges</strong></td><td><strong>Leptoméninges</strong> (arachnoïde et pie-mère) du prosencéphale (celles du reste du SNC et la dure-mère sont mésoblastiques)</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> ne dérivent <strong>pas</strong> des crêtes neurales : les neurones du SNC et les astrocytes, oligodendrocytes (neuroectoblaste) ; les cellules microgliales (origine mésodermique, monocytaire) ; l'épithélium pigmentaire de la rétine (neuroectoblaste) ; les cellules folliculaires de la thyroïde (entoblaste) ; le cortex surrénalien (mésoblaste) ; l'émail dentaire (ectoblaste de surface) ; les muscles striés de la face (mésoblaste) ; les cellules endothéliales (mésoblaste).</div>`
            },
            {
              titre: "Les neurocristopathies",
              contenu: `<p>Les <strong>neurocristopathies</strong> sont les maladies résultant d'une anomalie de l'induction, de la migration, de la prolifération ou de la différenciation des cellules des crêtes neurales. Leur diversité reflète celle des dérivés.</p>
<table>
<thead><tr><th>Pathologie</th><th>Mécanisme / gènes</th><th>Manifestations</th></tr></thead>
<tbody>
<tr><td><strong>Maladie de Hirschsprung</strong> (mégacôlon aganglionnaire congénital)</td><td>Arrêt prématuré de la migration des crêtes vagales dans l'intestin (gènes <em>RET</em>, <em>EDNRB</em>, <em>GDNF</em>, <em>SOX10</em>) ; 1/5 000 naissances</td><td>Absence de plexus entériques dans le rectum et le côlon distal : segment spastique non péristaltique, occlusion néonatale, retard d'émission du méconium, mégacôlon en amont</td></tr>
<tr><td><strong>Syndrome de Waardenburg</strong></td><td>Mutations de <em>PAX3</em>, <em>MITF</em>, <em>SOX10</em>, <em>EDNRB</em> ; défaut de mélanocytes et de la strie vasculaire</td><td>Surdité neurosensorielle, mèche blanche frontale, hétérochromie irienne, dystopie des canthi (type 1), parfois Hirschsprung (type 4)</td></tr>
<tr><td><strong>Piébaldisme, albinisme partiel</strong></td><td>Mutation de <em>KIT</em> ; défaut de migration ou de survie des mélanoblastes</td><td>Plages de peau et de cheveux dépigmentées</td></tr>
<tr><td><strong>Syndrome de Di George</strong> (microdélétion 22q11)</td><td>Défaut de migration des crêtes céphaliques et cardiaques dans les 3<sup>e</sup> et 4<sup>e</sup> poches et le cœur (gène <em>TBX1</em>)</td><td>Hypoplasie du thymus (déficit immunitaire T) et des parathyroïdes (hypocalcémie), cardiopathies conotroncales (tronc artériel commun, interruption de l'arc aortique, tétralogie de Fallot), dysmorphie faciale, fente palatine</td></tr>
<tr><td><strong>Syndrome de Treacher Collins</strong> (dysostose mandibulo-faciale)</td><td>Mutation de <em>TCOF1</em> : apoptose excessive des crêtes du 1<sup>er</sup> et 2<sup>e</sup> arcs</td><td>Hypoplasie malaire et mandibulaire, fentes palpébrales obliques en bas et en dehors, colobome palpébral, malformations des oreilles, surdité</td></tr>
<tr><td><strong>Séquence de Pierre Robin, microsomie hémifaciale</strong></td><td>Déficit en crêtes du 1<sup>er</sup> arc</td><td>Micrognathie, glossoptose, fente palatine ; asymétrie faciale</td></tr>
<tr><td><strong>Cardiopathies conotroncales</strong></td><td>Déficit des crêtes cardiaques</td><td>Tronc artériel commun (persistance du truncus), transposition des gros vaisseaux, tétralogie de Fallot, interruption de l'arc aortique</td></tr>
<tr><td><strong>Tumeurs</strong></td><td>Transformation de dérivés des crêtes</td><td><strong>Neuroblastome</strong> (tumeur solide extracrânienne la plus fréquente de l'enfant, surrénale ou chaîne sympathique), <strong>phéochromocytome</strong> et paragangliomes, <strong>mélanome</strong>, <strong>schwannome</strong> et neurofibromes (neurofibromatose de type 1, gène <em>NF1</em>), <strong>carcinome médullaire de la thyroïde</strong> (cellules C, syndrome NEM 2 par mutation de <em>RET</em>), ganglioneurome</td></tr>
<tr><td><strong>Neurofibromatose de type 1</strong> (maladie de Recklinghausen)</td><td>Mutation de <em>NF1</em> (neurofibromine)</td><td>Taches café au lait (mélanocytes), neurofibromes (cellules de Schwann), nodules de Lisch de l'iris, gliomes du nerf optique</td></tr>
<tr><td><strong>Embryofœtopathie à l'acide rétinoïque (isotrétinoïne)</strong></td><td>Toxicité pour les crêtes céphaliques (l'acide rétinoïque régule les gènes Hox)</td><td>Malformations crâniofaciales, cardiaques conotroncales, thymiques et du SNC</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le syndrome de Di George illustre la logique des neurocristopathies : une seule population cellulaire (les crêtes des 3<sup>e</sup> et 4<sup>e</sup> arcs et les crêtes cardiaques) explique l'association, à première vue disparate, d'une hypocalcémie néonatale (parathyroïdes), d'infections (thymus), d'une cardiopathie et d'une dysmorphie. Le diagnostic repose sur la FISH ou la CGH-array révélant la microdélétion 22q11.2 (1/4 000 naissances).</div>`
            }
          ],
          points_cles: [
            "Les crêtes neurales naissent de l'ectoblaste, à la jonction entre plaque neurale et ectoblaste de surface, et se détachent lors de la fermeture du tube neural (4e semaine).",
            "Leur induction dépend de niveaux intermédiaires de BMP, de Wnt et de FGF ; leur spécification implique Snail/Slug, FoxD3, Sox9 et Sox10.",
            "Elles quittent le neuroépithélium par transition épithélio-mésenchymateuse (perte de N-cadhérine, acquisition d'intégrines) puis migrent le long de voies définies.",
            "Dans le tronc, la voie ventrale traverse la moitié antérieure des sclérotomes (ganglions rachidiens, sympathiques, cellules de Schwann, médullosurrénale) ; la voie dorso-latérale sous-épidermique donne les mélanocytes.",
            "Les crêtes céphaliques sont les seules à donner du squelette : os et cartilages de la face, cartilages des arcs pharyngiens, odontoblastes, derme facial (ectomésenchyme).",
            "Les crêtes vagales donnent le système nerveux entérique, le septum aortico-pulmonaire et les cellules C de la thyroïde ; les crêtes sacrées complètent l'innervation du côlon distal.",
            "Dérivés à connaître : SNP (ganglions sensitifs et autonomes, Schwann), médullosurrénale, mélanocytes, cellules C, leptoméninges antérieures, ectomésenchyme facial, septum aortico-pulmonaire.",
            "Ne dérivent pas des crêtes neurales : neurones du SNC, épithélium pigmentaire rétinien, cortex surrénalien, cellules folliculaires thyroïdiennes, émail, microglie, endothélium.",
            "Neurocristopathies : Hirschsprung (RET), Waardenburg (PAX3, SOX10), Di George (22q11, TBX1), Treacher Collins (TCOF1), cardiopathies conotroncales, neuroblastome, phéochromocytome, mélanome, NF1."
          ],
          lexique: [
            { terme: "Crêtes neurales", def: "Population cellulaire transitoire, multipotente, née à la jonction plaque neurale / ectoblaste de surface, qui migre et donne le SNP, les mélanocytes, la médullosurrénale et l'ectomésenchyme facial." },
            { terme: "Ectomésenchyme", def: "Tissu mésenchymateux d'origine ectoblastique (crêtes neurales céphaliques) formant le squelette et le conjonctif de la face." },
            { terme: "Délamination", def: "Détachement des cellules des crêtes neurales du neuroépithélium par transition épithélio-mésenchymateuse." },
            { terme: "Voie ventrale de migration", def: "Trajet des cellules des crêtes troncales entre tube neural et somites, à travers la moitié antérieure des sclérotomes, vers les ganglions et la médullosurrénale." },
            { terme: "Voie dorso-latérale", def: "Trajet sous-épidermique des cellules des crêtes troncales à l'origine des mélanocytes." },
            { terme: "Crêtes cardiaques", def: "Sous-population des crêtes vagales colonisant le cœur et formant le septum aortico-pulmonaire et la paroi des gros vaisseaux." },
            { terme: "Neurocristopathie", def: "Maladie due à une anomalie de développement des cellules des crêtes neurales (migration, prolifération, différenciation ou transformation tumorale)." },
            { terme: "Maladie de Hirschsprung", def: "Absence congénitale de plexus entériques dans le côlon distal par arrêt de migration des crêtes vagales (gène RET), cause de mégacôlon." },
            { terme: "Syndrome de Di George", def: "Microdélétion 22q11 responsable d'une hypoplasie du thymus et des parathyroïdes, de cardiopathies conotroncales et d'une dysmorphie faciale, par défaut des crêtes neurales." }
          ],
          qcm: [
            {
              q: "Concernant l'origine des crêtes neurales :",
              options: [
                "A. Elles dérivent du mésoblaste para-axial.",
                "B. Elles naissent à la jonction entre la plaque neurale et l'ectoblaste de surface.",
                "C. Elles se détachent lors de la fermeture du tube neural.",
                "D. Leur induction nécessite des niveaux intermédiaires de BMP.",
                "E. Leurs cellules sont multipotentes."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : les crêtes neurales sont d'origine ectoblastique. B, C, D et E sont vraies."
            },
            {
              q: "Concernant la migration des cellules des crêtes neurales troncales :",
              options: [
                "A. Elle fait intervenir une transition épithélio-mésenchymateuse.",
                "B. La voie ventrale traverse la moitié postérieure de chaque sclérotome.",
                "C. La voie dorso-latérale donne les mélanocytes.",
                "D. Les cellules empruntant la voie ventrale donnent les ganglions rachidiens et sympathiques.",
                "E. La médullosurrénale dérive des cellules ayant migré par la voie ventrale."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : les cellules traversent la moitié antérieure (rostrale) des sclérotomes, la moitié postérieure étant répulsive."
            },
            {
              q: "Parmi les structures suivantes, lesquelles dérivent des crêtes neurales ?",
              options: [
                "A. Les cellules de Schwann.",
                "B. Les cellules chromaffines de la médullosurrénale.",
                "C. Les cellules folliculaires de la thyroïde.",
                "D. Les odontoblastes.",
                "E. L'épithélium pigmentaire de la rétine."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : les cellules folliculaires sont entoblastiques ; ce sont les cellules C qui dérivent des crêtes. E est fausse : l'épithélium pigmentaire de la rétine dérive du neuroectoblaste (cupule optique)."
            },
            {
              q: "Concernant les crêtes neurales céphaliques :",
              options: [
                "A. Elles donnent les os du squelette facial.",
                "B. Elles donnent les muscles striés de la face.",
                "C. Elles donnent les cartilages des arcs pharyngiens.",
                "D. Elles colonisent les arcs pharyngiens en courants distincts selon leur rhombomère d'origine.",
                "E. Les crêtes neurales troncales donnent également du cartilage et de l'os."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : les muscles striés de la face dérivent du mésoblaste (para-axial céphalique et arcs pharyngiens). E est fausse : seules les crêtes céphaliques ont un potentiel squelettique."
            },
            {
              q: "Concernant les crêtes neurales vagales et cardiaques :",
              options: [
                "A. Les crêtes vagales donnent le système nerveux entérique.",
                "B. Le septum aortico-pulmonaire dérive des crêtes cardiaques.",
                "C. Un arrêt de migration des crêtes vagales dans l'intestin est responsable de la maladie de Hirschsprung.",
                "D. Les cellules C de la thyroïde dérivent des crêtes vagales via les corps ultimobranchiaux.",
                "E. Le cortex surrénalien dérive des crêtes neurales."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : le cortex surrénalien est d'origine mésoblastique ; seule la médullosurrénale dérive des crêtes neurales."
            },
            {
              q: "Concernant les neurocristopathies :",
              options: [
                "A. Le syndrome de Di George associe hypoplasie du thymus et des parathyroïdes et cardiopathies conotroncales.",
                "B. Le syndrome de Waardenburg associe surdité et troubles pigmentaires.",
                "C. Le neuroblastome est une tumeur dérivée des crêtes neurales.",
                "D. Le phéochromocytome se développe à partir du cortex surrénalien.",
                "E. L'acide rétinoïque à forte dose est toxique pour les crêtes neurales céphaliques."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : le phéochromocytome dérive des cellules chromaffines de la médullosurrénale, d'origine crête neurale."
            }
          ]
        }
      ]
    },
    {
      titre: "Partie 3 — Annexes et période fœtale",
      chapitres: [
        {
          id: "annexes-embryonnaires",
          titre: "Les annexes embryonnaires : amnios, vésicule vitelline, allantoïde, cordon ombilical",
          duree: 30,
          objectifs: [
            "Définir les annexes embryonnaires et connaître leur origine (feuillets extra-embryonnaires).",
            "Décrire l'amnios, la cavité amniotique et le liquide amniotique (volume, composition, origine, résorption, rôles).",
            "Connaître les anomalies du liquide amniotique (oligoamnios, hydramnios) et leurs causes.",
            "Décrire la vésicule vitelline et l'allantoïde, leur devenir et leurs anomalies (diverticule de Meckel, ouraque).",
            "Décrire la structure du cordon ombilical à terme et ses anomalies."
          ],
          sections: [
            {
              titre: "Généralités sur les annexes",
              contenu: `<p>Les <strong>annexes embryonnaires</strong> (ou fœtales) sont les structures qui se développent à partir de l'œuf en même temps que l'embryon, mais qui <strong>ne font pas partie de l'embryon</strong> et sont éliminées à la naissance : l'<strong>amnios</strong>, la <strong>vésicule vitelline</strong>, l'<strong>allantoïde</strong>, le <strong>cordon ombilical</strong>, le <strong>chorion</strong> et le <strong>placenta</strong>. Elles assurent la <strong>protection</strong>, la <strong>nutrition</strong>, la <strong>respiration</strong>, l'<strong>excrétion</strong> et la fonction <strong>endocrine</strong> nécessaires au développement intra-utérin.</p>
<p>Elles dérivent des feuillets extra-embryonnaires mis en place pendant les deux premières semaines :</p>
<table>
<thead><tr><th>Annexe</th><th>Origine</th><th>Apparition</th></tr></thead>
<tbody>
<tr><td>Trophoblaste puis chorion et placenta (partie fœtale)</td><td>Trophoblaste du blastocyste + somatopleure extra-embryonnaire</td><td>J5 (trophoblaste), J13 (villosités)</td></tr>
<tr><td>Amnios</td><td>Amnioblastes (épiblaste) + somatopleure extra-embryonnaire</td><td>J8</td></tr>
<tr><td>Vésicule vitelline</td><td>Hypoblaste (membrane de Heuser puis 2<sup>e</sup> migration) + splanchnopleure extra-embryonnaire</td><td>J9 (primaire), J12-J13 (secondaire)</td></tr>
<tr><td>Allantoïde</td><td>Entoblaste (diverticule de la vésicule vitelline) + mésoderme du pédicule</td><td>J16</td></tr>
<tr><td>Cordon ombilical</td><td>Pédicule embryonnaire + canal vitellin + allantoïde, engainés par l'amnios</td><td>4<sup>e</sup> semaine</td></tr>
</tbody>
</table>
<p>À la fin de la grossesse, l'ensemble constitue les <strong>membranes</strong> (amnios et chorion lisse accolés, puis caduque), le <strong>placenta</strong> et le <strong>cordon</strong>, expulsés lors de la <strong>délivrance</strong>, troisième temps de l'accouchement.</p>`
            },
            {
              titre: "L'amnios et la cavité amniotique",
              contenu: `<p>L'<strong>amnios</strong> est une membrane mince (0,02 à 0,5 mm), transparente, résistante et avasculaire, qui délimite la <strong>cavité amniotique</strong>. Il est formé de deux couches :</p>
<ul>
<li>un <strong>épithélium amniotique</strong> simple, cubique puis aplati, dérivé des <strong>amnioblastes</strong> (épiblaste), tourné vers la cavité ; ses cellules portent des microvillosités et participent aux échanges d'eau et de solutés ;</li>
<li>une couche de <strong>mésenchyme</strong> (somatopleure extra-embryonnaire), avasculaire, riche en collagène, qui lui donne sa résistance.</li>
</ul>
<p>La cavité amniotique apparaît au <strong>8<sup>e</sup> jour</strong> entre l'épiblaste et le trophoblaste polaire. Elle s'agrandit progressivement : lors de la <strong>délimitation</strong> (4<sup>e</sup> semaine), elle enveloppe l'embryon et son insertion se réduit au pourtour du cordon ombilical, qu'elle engaine. Entre la 8<sup>e</sup> et la 12<sup>e</sup> semaine, la cavité amniotique, en expansion rapide, <strong>comble entièrement le cœlome extra-embryonnaire</strong> (cavité choriale) : l'amnios s'accole au <strong>chorion</strong> pour former les <strong>membranes</strong> amnio-choriales (fusion amnio-choriale, visible à l'échographie vers 14-16 SA, date après laquelle la disparition de la cavité choriale est normale). Enfin, vers le 3<sup>e</sup>-4<sup>e</sup> mois, les membranes, en s'étendant, refoulent la caduque ovulaire contre la caduque pariétale et comblent la cavité utérine.</p>
<h4>Le liquide amniotique</h4>
<p>La cavité est remplie de <strong>liquide amniotique</strong>, liquide clair, légèrement opalescent en fin de grossesse (vernix, lanugo, cellules desquamées), de pH 7, de densité 1 006, contenant 98 à 99 % d'eau, des électrolytes (proche du plasma pour le sodium, 130 mmol/L à terme), des protéines (0,2 à 0,5 g/L, dont l'<strong>alpha-fœtoprotéine</strong> d'origine fœtale), du glucose, de l'urée et de la créatinine (qui augmentent au cours de la grossesse avec la maturation rénale), des lipides (phospholipides du surfactant à partir de 34-35 SA), des hormones, des enzymes et des <strong>cellules fœtales</strong> desquamées (peau, voies urinaires, digestives, amnios), qui permettent les analyses génétiques après amniocentèse.</p>
<table>
<thead><tr><th>Terme</th><th>Volume moyen</th></tr></thead>
<tbody>
<tr><td>10 SA</td><td>30 mL</td></tr>
<tr><td>16 SA</td><td>200 mL</td></tr>
<tr><td>20 SA</td><td>350 à 400 mL</td></tr>
<tr><td>28 SA</td><td>700 à 800 mL</td></tr>
<tr><td>34-36 SA (maximum)</td><td>900 à 1 000 mL</td></tr>
<tr><td>40 SA (terme)</td><td>700 à 800 mL</td></tr>
<tr><td>42 SA</td><td>400 mL (diminution après terme)</td></tr>
</tbody>
</table>
<h4>Origine et renouvellement</h4>
<p>Le liquide amniotique est <strong>renouvelé</strong> en permanence (en 3 heures environ à terme, soit un flux d'échanges de l'ordre de 500 à 1 000 mL par jour). Son origine varie avec l'âge :</p>
<ul>
<li><strong>Première moitié de la grossesse</strong> : <strong>transsudation</strong> à travers l'amnios (à partir du plasma maternel via les membranes et du plasma fœtal via le cordon et le placenta) et à travers la <strong>peau fœtale</strong>, non kératinisée et perméable jusqu'à 20-24 SA. Le liquide est alors isotonique au plasma fœtal.</li>
<li><strong>Seconde moitié</strong> : production dominée par l'<strong>urine fœtale</strong> (le rein fonctionne dès 10-12 SA ; la diurèse atteint 500 à 1 000 mL par jour à terme : le liquide devient hypotonique et riche en urée et créatinine) et par les <strong>sécrétions pulmonaires</strong> (200 à 400 mL par jour, dont la moitié est déglutie et la moitié passe dans la cavité). Les sécrétions salivaires et nasales y contribuent marginalement.</li>
</ul>
<p>La <strong>résorption</strong> se fait par la <strong>déglutition fœtale</strong> (500 à 1 000 mL par jour à terme ; le liquide absorbé par l'intestin regagne la circulation fœtale puis le placenta), par la voie <strong>intramembranaire</strong> (passage à travers l'amnios vers les vaisseaux de la plaque choriale) et par la voie transmembranaire (vers la caduque).</p>
<h4>Rôles du liquide amniotique</h4>
<ul>
<li><strong>Protection mécanique</strong> de l'embryon et du fœtus contre les chocs, les compressions et les adhérences avec l'amnios.</li>
<li><strong>Thermorégulation</strong> et milieu à température constante.</li>
<li><strong>Liberté de mouvement</strong> indispensable au développement musculo-squelettique (prévention des arthrogryposes) et à la maturation pulmonaire (le liquide dans les voies aériennes exerce une pression de distension nécessaire à la croissance alvéolaire).</li>
<li>Rôle dans le <strong>développement du tube digestif</strong> (déglutition) et de l'<strong>appareil urinaire</strong> (le fœtus urine dans le liquide).</li>
<li><strong>Barrière anti-infectieuse</strong> (lysozyme, immunoglobulines, peptides antimicrobiens).</li>
<li>Lors de l'accouchement : formation de la <strong>poche des eaux</strong> qui aide la dilatation du col, lubrification de la filière génitale, protection du cordon.</li>
<li>Intérêt <strong>diagnostique</strong> : amniocentèse (caryotype, biologie moléculaire, dosages), évaluation échographique de la quantité.</li>
</ul>`
            },
            {
              titre: "Anomalies du liquide amniotique et des membranes",
              contenu: `<p>La quantité de liquide amniotique est évaluée à l'échographie par la mesure de la <strong>plus grande citerne</strong> (normale entre 2 et 8 cm) ou par l'<strong>index de liquide amniotique</strong> (somme des plus grandes citernes des 4 quadrants, normal entre 8 et 25 cm).</p>
<h4>Oligoamnios (oligo-hydramnios)</h4>
<p>Diminution du volume (plus grande citerne inférieure à 2 cm, index inférieur à 5 cm ; <strong>anamnios</strong> si absence totale) ; 1 à 5 % des grossesses. Causes principales :</p>
<ul>
<li><strong>Rupture prématurée des membranes</strong> (cause la plus fréquente) ;</li>
<li><strong>Anomalies de l'appareil urinaire fœtal</strong> : agénésie rénale bilatérale (séquence de <strong>Potter</strong> : anamnios, hypoplasie pulmonaire, faciès aplati, pieds en varus équin, décès néonatal), polykystose rénale, uropathie obstructive (valves de l'urètre postérieur) ;</li>
<li><strong>Insuffisance placentaire</strong> avec retard de croissance intra-utérin (redistribution vasculaire au détriment des reins), pré-éclampsie, dépassement de terme ;</li>
<li>médicaments : inhibiteurs de l'enzyme de conversion, anti-inflammatoires non stéroïdiens (fermeture du canal artériel et baisse de la diurèse).</li>
</ul>
<p>Conséquences : <strong>hypoplasie pulmonaire</strong> (si précoce et sévère), déformations des membres et de la face par compression, brides amniotiques, compression funiculaire pendant le travail (anomalies du rythme cardiaque fœtal).</p>
<h4>Hydramnios (polyhydramnios)</h4>
<p>Excès de liquide (plus grande citerne supérieure à 8 cm, index supérieur à 25 cm ; volume supérieur à 2 L) ; 1 à 2 % des grossesses. Causes :</p>
<ul>
<li><strong>Défaut de déglutition ou de transit digestif haut</strong> : atrésie de l'œsophage, atrésie duodénale, hernie diaphragmatique, troubles neurologiques de la déglutition (anencéphalie, myopathies, trisomie 18) ;</li>
<li><strong>Diabète maternel</strong> (polyurie fœtale par hyperglycémie) : cause la plus fréquente d'hydramnios modéré ;</li>
<li>anomalies de fermeture du tube neural (transsudation par la malformation), anasarque fœto-placentaire, infections (parvovirus B19, CMV), <strong>grossesses gémellaires</strong> monochoriales (syndrome transfuseur-transfusé : hydramnios chez le receveur), tumeurs placentaires ;</li>
<li>idiopathique dans 40 à 60 % des cas.</li>
</ul>
<p>Conséquences : surdistension utérine, menace d'accouchement prématuré, rupture prématurée des membranes, présentations anormales, procidence du cordon, hémorragie de la délivrance.</p>
<h4>Autres anomalies</h4>
<ul>
<li><strong>Brides amniotiques</strong> (syndrome des brides) : rupture précoce de l'amnios avec formation de bandes fibreuses qui enserrent des membres ou des doigts, provoquant constrictions, amputations ou fentes atypiques (disruption).</li>
<li><strong>Rupture prématurée des membranes</strong> (avant le début du travail, 8 à 10 % des grossesses) : risque d'infection (chorioamniotite) et de prématurité.</li>
<li><strong>Chorioamniotite</strong> : infection des membranes et du liquide, souvent par voie ascendante.</li>
<li><strong>Méconium dans le liquide</strong> (liquide teinté) : signe possible de souffrance fœtale ; risque d'inhalation méconiale à la naissance.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> oligoamnios = penser <strong>reins</strong> (urine) ou rupture des membranes ; hydramnios = penser <strong>déglutition</strong> (atrésie de l'œsophage), <strong>diabète</strong> maternel, anomalies neurologiques. Le liquide est produit par l'urine et les poumons, résorbé par la déglutition.</div>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>amniocentèse</strong> (ponction transabdominale de 15 à 20 mL de liquide sous contrôle échographique, à partir de 15 SA) permet le caryotype fœtal, les analyses d'ADN, le dosage de l'alpha-fœtoprotéine et de l'acétylcholinestérase (anomalies ouvertes du tube neural), la recherche d'infection (PCR CMV, toxoplasmose). Risque de fausse couche : 0,5 à 1 %. Elle est de plus en plus remplacée pour le dépistage par le DPNI (ADN fœtal libre dans le sang maternel).</div>`
            },
            {
              titre: "La vésicule vitelline",
              contenu: `<p>La <strong>vésicule vitelline</strong> (sac vitellin, lécithocèle) est une annexe <strong>transitoire</strong>, bordée par l'hypoblaste puis l'entoblaste extra-embryonnaire et recouverte de splanchnopleure extra-embryonnaire. Chez les mammifères, elle ne contient pas de vitellus (réserves nutritives) : son nom est hérité des espèces ovipares. Elle n'en est pas moins indispensable pendant les premières semaines.</p>
<h4>Évolution</h4>
<ul>
<li><strong>Vésicule vitelline primaire</strong> (J9) : vaste, bordée par la membrane de Heuser.</li>
<li><strong>Vésicule vitelline secondaire</strong> (J12-J13) : plus petite, bordée par l'hypoblaste.</li>
<li>Lors de la <strong>délimitation</strong> (4<sup>e</sup> semaine), sa partie dorsale est incorporée dans l'embryon et devient l'<strong>intestin primitif</strong> ; la partie extra-embryonnaire reste reliée à l'intestin moyen par le <strong>canal vitellin</strong> (conduit omphalo-mésentérique), inclus dans le cordon ombilical.</li>
<li>Elle atteint sa taille maximale (5 à 6 mm) vers la 7<sup>e</sup>-8<sup>e</sup> semaine, puis <strong>régresse</strong> : le canal vitellin s'oblitère vers la 6<sup>e</sup>-7<sup>e</sup> semaine, la vésicule se réduit à un petit reliquat kystique entre amnios et chorion, parfois retrouvé sur la plaque choriale du placenta à terme.</li>
</ul>
<h4>Rôles</h4>
<ol>
<li><strong>Transfert nutritif</strong> au cours des 2<sup>e</sup> et 3<sup>e</sup> semaines, avant l'établissement de la circulation placentaire (absorption des nutriments du cœlome extra-embryonnaire).</li>
<li><strong>Première hématopoïèse</strong> (hématopoïèse primitive, 3<sup>e</sup> à 8<sup>e</sup> semaine) dans les îlots de Wolff et Pander de sa paroi : érythroblastes nucléés à hémoglobines embryonnaires (Gower 1, Gower 2, Portland). Les cellules souches hématopoïétiques définitives naissent toutefois dans l'embryon lui-même (région aorte-gonades-mésonéphros, AGM) vers la 5<sup>e</sup> semaine puis colonisent le foie.</li>
<li><strong>Vasculogenèse</strong> : les premiers vaisseaux (vitellins) y apparaissent ; les veines vitellines participeront à la formation du système porte et des sinusoïdes hépatiques ; les artères vitellines donnent le tronc cœliaque, l'artère mésentérique supérieure et l'artère mésentérique inférieure (vascularisation des trois segments de l'intestin).</li>
<li>Siège de l'apparition des <strong>cellules germinales primordiales</strong> (3<sup>e</sup> semaine, paroi caudale près de l'allantoïde), qui migrent ensuite vers les crêtes génitales.</li>
<li>Origine de l'<strong>épithélium de l'intestin primitif</strong> (par son toit incorporé).</li>
</ol>
<h4>Anomalies</h4>
<p>La persistance du canal vitellin donne, selon son étendue :</p>
<ul>
<li>le <strong>diverticule de Meckel</strong> (2 à 3 % de la population) : persistance du segment intestinal du canal vitellin, diverticule iléal situé sur le bord <strong>antimésentérique</strong> de l'iléon, à 40 à 100 cm de la valvule iléo-cæcale, long de 2 à 5 cm. Le plus souvent asymptomatique, il peut contenir de la muqueuse gastrique ectopique responsable d'ulcération et d'hémorragie digestive (surtout chez l'enfant), s'enflammer en simulant une appendicite, ou provoquer une occlusion (invagination, volvulus). « Règle des 2 » : 2 % de la population, 2 pieds (60 cm) de la valvule, 2 pouces (5 cm) de long, 2 types de muqueuse ectopique, symptomatique avant 2 ans, 2 fois plus fréquent chez le garçon ;</li>
<li>la <strong>fistule omphalo-mésentérique</strong> (ou vitelline) : persistance complète du canal, communication entre l'iléon et l'ombilic avec écoulement de matières ;</li>
<li>le <strong>kyste vitellin</strong> (entérokystome) : persistance d'une portion intermédiaire ;</li>
<li>la <strong>bride vitelline</strong> (ligament fibreux reliant l'iléon à l'ombilic) : risque de volvulus.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> en échographie précoce, la vésicule vitelline secondaire est la première structure visible dans le sac gestationnel (dès 5-5,5 SA, diamètre normal de 3 à 6 mm) ; une vésicule absente, trop grande (supérieure à 7 mm) ou calcifiée est un signe pronostique défavorable de la grossesse.</div>`
            },
            {
              titre: "L'allantoïde",
              contenu: `<p>L'<strong>allantoïde</strong> apparaît au <strong>16<sup>e</sup> jour</strong> comme un diverticule <strong>entoblastique</strong> issu de la paroi caudale de la vésicule vitelline (futur intestin postérieur, région du cloaque) et s'engageant dans le mésoderme du <strong>pédicule embryonnaire</strong>. Chez les reptiles et les oiseaux, l'allantoïde est un vaste sac qui stocke les déchets urinaires et assure la respiration ; chez l'homme, elle reste <strong>rudimentaire</strong> (quelques millimètres) et n'a pas de fonction excrétrice. Son importance tient à deux dérivés :</p>
<ul>
<li>le <strong>mésoderme allantoïdien</strong> est le siège de la formation des <strong>vaisseaux ombilicaux</strong> (deux artères et, initialement, deux veines dont la droite disparaît), qui assurent la circulation fœto-placentaire ;</li>
<li>sa <strong>portion intra-embryonnaire</strong> proximale participe, avec le sinus urogénital, à la formation de la <strong>vessie</strong> (dôme vésical), tandis que sa partie allant du dôme vésical à l'ombilic se transforme (du 2<sup>e</sup> au 5<sup>e</sup> mois) en un cordon fibreux, l'<strong>ouraque</strong>, qui devient le <strong>ligament ombilical médian</strong> de l'adulte.</li>
</ul>
<p>La portion extra-embryonnaire (dans le cordon) régresse vers la 8<sup>e</sup> semaine ; on peut en retrouver un reliquat (canal allantoïdien) dans le cordon à terme, près de l'insertion fœtale.</p>
<h4>Anomalies de l'ouraque</h4>
<ul>
<li><strong>Fistule de l'ouraque</strong> (ouraque perméable) : communication entre la vessie et l'ombilic, avec écoulement d'urine par l'ombilic chez le nouveau-né.</li>
<li><strong>Kyste de l'ouraque</strong> : persistance d'une portion intermédiaire, pouvant s'infecter ou dégénérer (adénocarcinome de l'ouraque, rare).</li>
<li><strong>Sinus de l'ouraque</strong> : persistance de l'extrémité ombilicale, avec écoulement séreux ombilical.</li>
<li><strong>Diverticule vésical</strong> de l'ouraque : persistance de l'extrémité vésicale.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> l'allantoïde est d'origine <strong>entoblastique</strong> et apparaît <strong>à la 3<sup>e</sup> semaine (J16)</strong>, avant la délimitation ; elle est logée dans le pédicule embryonnaire, au pôle <strong>caudal</strong>. Les vaisseaux ombilicaux se développent dans son mésoderme, mais l'allantoïde elle-même ne transporte rien. Ne pas confondre le ligament ombilical <strong>médian</strong> (ouraque, allantoïde) et les ligaments ombilicaux <strong>médiaux</strong> (artères ombilicales oblitérées).</div>`
            },
            {
              titre: "Le cordon ombilical",
              contenu: `<p>Le <strong>cordon ombilical</strong> se constitue au cours de la <strong>4<sup>e</sup> semaine</strong>, lors de la délimitation, par le rapprochement puis la réunion, sous l'engainement de l'amnios, du <strong>pédicule embryonnaire</strong> (avec les vaisseaux ombilicaux et l'allantoïde) et du <strong>pédicule vitellin</strong> (canal vitellin et vaisseaux vitellins), avec un reliquat de <strong>cœlome extra-embryonnaire</strong> dans lequel les anses intestinales font transitoirement hernie (<strong>hernie ombilicale physiologique</strong>) de la 6<sup>e</sup> à la 10<sup>e</sup> semaine. Après la réintégration des anses (10<sup>e</sup> semaine), l'oblitération du canal vitellin et la régression de l'allantoïde, le cordon acquiert sa structure définitive.</p>
<h4>Structure à terme</h4>
<ul>
<li>Longueur moyenne <strong>50 à 60 cm</strong> (extrêmes normaux 30 à 100 cm ; cordon court si inférieur à 30 cm, long si supérieur à 80 cm), diamètre <strong>1 à 2 cm</strong>, aspect blanc nacré, spiralé (torsion le plus souvent sénestre, liée aux mouvements fœtaux : 10 à 40 tours).</li>
<li>Il s'insère d'un côté sur l'<strong>ombilic</strong> du fœtus, de l'autre, en règle, au centre ou près du centre de la <strong>plaque choriale du placenta</strong> (insertion centrale ou paracentrale ; insertion marginale « en raquette » dans 7 % des cas ; insertion vélamenteuse sur les membranes dans 1 % des cas, dangereuse).</li>
<li>Il est revêtu de l'<strong>épithélium amniotique</strong> (en continuité avec l'amnios d'un côté et avec l'épiderme fœtal de l'autre).</li>
<li>Il contient <strong>deux artères ombilicales</strong> (branches des artères iliaques internes du fœtus, transportant le sang <strong>pauvre en oxygène</strong> du fœtus vers le placenta, saturation 55 à 60 %) et <strong>une veine ombilicale</strong> (la veine gauche ; la droite a disparu au 2<sup>e</sup> mois), plus large, ramenant le sang <strong>oxygéné</strong> (saturation 80 à 85 %) du placenta vers le fœtus (vers la veine porte et le canal d'Arantius). Les artères s'anastomosent entre elles près du placenta (anastomose de Hyrtl) et s'enroulent en spirale autour de la veine.</li>
<li>Les vaisseaux sont noyés dans la <strong>gelée de Wharton</strong>, tissu conjonctif muqueux dérivé du mésoderme extra-embryonnaire, riche en acide hyaluronique, en eau et en cellules mésenchymateuses (source actuelle de cellules souches), qui protège les vaisseaux de la compression et de la plicature. Le cordon ne contient <strong>ni nerfs, ni vaisseaux lymphatiques, ni capillaires propres</strong>.</li>
<li>Reliquats possibles : canal vitellin, canal allantoïdien près de l'insertion fœtale.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> cordon à terme : 50-60 cm, 1-2 cm de diamètre, <strong>2 artères</strong> (sang désaturé) et <strong>1 veine</strong> (sang oxygéné), gelée de Wharton, revêtement amniotique, pas de nerfs. Le sens du flux est l'inverse de la circulation adulte : les artères ombilicales portent le sang pauvre en oxygène.</div>
<h4>Anomalies du cordon</h4>
<ul>
<li><strong>Artère ombilicale unique</strong> (0,5 à 1 % des grossesses) : agénésie ou atrophie d'une artère ; associée dans 20 à 30 % des cas à d'autres malformations (cardiaques, rénales, chromosomiques, surtout trisomie 18), d'où une échographie attentive.</li>
<li><strong>Anomalies de longueur</strong> : cordon court (moins de 30 cm : associé à une réduction des mouvements fœtaux, risque de décollement placentaire, d'omphalocèle), cordon long (plus de 80 cm : risque de nœuds vrais, de circulaires autour du cou, de procidence).</li>
<li><strong>Insertion vélamenteuse</strong> : les vaisseaux cheminent sans gelée de Wharton dans les membranes avant d'atteindre le placenta ; risque de compression et de déchirure (<strong>vasa praevia</strong> si les vaisseaux passent devant le col : hémorragie fœtale à la rupture des membranes).</li>
<li><strong>Nœuds</strong> (vrais, 1 % ; faux nœuds par pelotonnement vasculaire, sans gravité), <strong>circulaires</strong> (20 à 30 % des naissances, le plus souvent bénins), <strong>procidence</strong> (passage du cordon devant la présentation après rupture des membranes : urgence obstétricale par compression), <strong>latérocidence</strong>, <strong>thrombose</strong>, <strong>hématome</strong>, kystes du cordon.</li>
<li><strong>Omphalocèle</strong> : défaut de réintégration des anses intestinales dans l'abdomen après la 10<sup>e</sup> semaine, les viscères (intestin, foie) restant dans la base du cordon, recouverts d'amnios et de péritoine (à distinguer du laparoschisis : défaut de la paroi abdominale latéral, sans sac, à droite du cordon normalement inséré) ; associée à des anomalies chromosomiques dans 30 à 50 % des cas.</li>
<li><strong>Hernie ombilicale</strong> congénitale : défaut de fermeture de l'anneau ombilical, bénigne, se fermant souvent spontanément avant 4 ans.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> à la naissance, le cordon est clampé et sectionné ; le <strong>sang de cordon</strong> peut être prélevé pour le groupe sanguin, les gaz du sang (pH artériel ombilical normal supérieur à 7,20, reflet de l'oxygénation fœtale pendant le travail) ou la conservation de cellules souches hématopoïétiques. Les vaisseaux ombilicaux s'oblitèrent et deviennent le ligament rond du foie (veine) et les ligaments ombilicaux médiaux (artères) ; le cordon se dessèche et tombe en 5 à 15 jours.</div>`
            }
          ],
          points_cles: [
            "Les annexes (amnios, vésicule vitelline, allantoïde, cordon, chorion, placenta) ne font pas partie de l'embryon et sont expulsées à la délivrance ; elles dérivent des feuillets extra-embryonnaires.",
            "L'amnios (épithélium amniotique issu de l'épiblaste + mésenchyme avasculaire) apparaît à J8 ; la cavité amniotique comble le cœlome extra-embryonnaire vers 8-12 semaines, l'amnios s'accole au chorion pour former les membranes.",
            "Volume du liquide amniotique : 30 mL à 10 SA, 400 mL à 20 SA, maximum de 900-1 000 mL vers 34-36 SA, 700-800 mL à terme ; renouvelé en 3 heures.",
            "Origine du liquide : transsudation et peau fœtale en première moitié ; urine fœtale (500-1 000 mL/j) et sécrétions pulmonaires ensuite ; résorption par déglutition fœtale et voie intramembranaire.",
            "Oligoamnios : rupture des membranes, anomalies rénales (séquence de Potter), insuffisance placentaire ; hydramnios : atrésie de l'œsophage, troubles de la déglutition, diabète maternel, anomalies du tube neural, syndrome transfuseur-transfusé.",
            "La vésicule vitelline assure la nutrition précoce, la première hématopoïèse (îlots de Wolff et Pander) et la première vasculogenèse, héberge les cellules germinales primordiales et donne l'intestin primitif ; sa persistance donne le diverticule de Meckel (antimésentérique, 2 %).",
            "L'allantoïde (J16, entoblastique, pédicule embryonnaire) est rudimentaire ; son mésoderme forme les vaisseaux ombilicaux et sa partie proximale participe à la vessie puis devient l'ouraque (ligament ombilical médian).",
            "Le cordon ombilical (4e semaine) réunit pédicule embryonnaire et canal vitellin sous l'amnios ; à terme : 50-60 cm, 1-2 cm, 2 artères (sang désaturé) et 1 veine (sang oxygéné), gelée de Wharton, pas de nerfs.",
            "Anomalies du cordon : artère ombilicale unique (associée à des malformations dans 20-30 % des cas), insertion vélamenteuse et vasa praevia, nœuds, circulaires, procidence, omphalocèle."
          ],
          lexique: [
            { terme: "Amnios", def: "Membrane avasculaire formée d'un épithélium amniotique d'origine épiblastique et d'un mésenchyme extra-embryonnaire, délimitant la cavité amniotique." },
            { terme: "Liquide amniotique", def: "Liquide clair de la cavité amniotique, produit par transsudation puis par l'urine fœtale et les sécrétions pulmonaires, résorbé par déglutition ; 700-800 mL à terme." },
            { terme: "Oligoamnios", def: "Diminution du volume de liquide amniotique (plus grande citerne inférieure à 2 cm), évoquant une rupture des membranes ou une anomalie rénale fœtale." },
            { terme: "Hydramnios", def: "Excès de liquide amniotique (plus grande citerne supérieure à 8 cm), évoquant un défaut de déglutition fœtale ou un diabète maternel." },
            { terme: "Séquence de Potter", def: "Ensemble de conséquences de l'anamnios par agénésie rénale bilatérale : hypoplasie pulmonaire, faciès aplati, déformations des membres." },
            { terme: "Vésicule vitelline", def: "Annexe transitoire bordée d'hypoblaste puis d'entoblaste, siège de la nutrition précoce, de la première hématopoïèse et de l'apparition des cellules germinales primordiales." },
            { terme: "Diverticule de Meckel", def: "Persistance de la portion intestinale du canal vitellin, diverticule iléal antimésentérique présent chez 2 % de la population." },
            { terme: "Allantoïde", def: "Diverticule entoblastique caudal de la vésicule vitelline engagé dans le pédicule embryonnaire, dont le mésoderme forme les vaisseaux ombilicaux et dont la partie proximale devient l'ouraque." },
            { terme: "Ouraque", def: "Cordon fibreux reliant le dôme vésical à l'ombilic, reliquat de l'allantoïde, devenant le ligament ombilical médian." },
            { terme: "Gelée de Wharton", def: "Tissu conjonctif muqueux riche en acide hyaluronique entourant les vaisseaux du cordon ombilical." }
          ],
          qcm: [
            {
              q: "Concernant l'amnios et la cavité amniotique :",
              options: [
                "A. L'épithélium amniotique dérive de l'épiblaste.",
                "B. La cavité amniotique apparaît vers le 8e jour.",
                "C. L'amnios est une membrane richement vascularisée.",
                "D. La cavité amniotique comble le cœlome extra-embryonnaire au cours du 3e mois.",
                "E. Après la délimitation, l'amnios engaine le cordon ombilical."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : l'amnios est avasculaire."
            },
            {
              q: "Concernant le liquide amniotique :",
              options: [
                "A. Son volume est maximal à terme.",
                "B. En seconde moitié de grossesse, il est principalement produit par l'urine fœtale.",
                "C. Il est résorbé principalement par la déglutition fœtale.",
                "D. Il est renouvelé en environ 3 heures à terme.",
                "E. Il contient des cellules fœtales utilisables pour le caryotype."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : le volume est maximal vers 34-36 SA (900-1 000 mL) puis diminue (700-800 mL à terme). B, C, D et E sont vraies."
            },
            {
              q: "Concernant les anomalies du liquide amniotique :",
              options: [
                "A. L'agénésie rénale bilatérale entraîne un hydramnios.",
                "B. L'atrésie de l'œsophage est une cause d'hydramnios.",
                "C. Le diabète maternel est une cause fréquente d'hydramnios.",
                "D. La rupture prématurée des membranes est la cause la plus fréquente d'oligoamnios.",
                "E. L'oligoamnios sévère et précoce expose à une hypoplasie pulmonaire."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : l'agénésie rénale entraîne un anamnios (séquence de Potter), car le fœtus ne produit pas d'urine. B, C, D et E sont vraies."
            },
            {
              q: "Concernant la vésicule vitelline :",
              options: [
                "A. Elle contient d'abondantes réserves nutritives (vitellus).",
                "B. Elle est le siège de la première hématopoïèse.",
                "C. Les cellules germinales primordiales apparaissent dans sa paroi.",
                "D. Sa partie dorsale est incorporée dans l'embryon pour former l'intestin primitif.",
                "E. Le diverticule de Meckel résulte de la persistance du canal vitellin."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : chez les mammifères, la vésicule vitelline ne contient pas de vitellus. B, C, D et E sont vraies."
            },
            {
              q: "Concernant l'allantoïde :",
              options: [
                "A. Elle apparaît vers le 16e jour comme un diverticule entoblastique.",
                "B. Elle se développe dans le pédicule embryonnaire, au pôle caudal.",
                "C. Chez l'homme, elle sert de réservoir urinaire pendant la vie fœtale.",
                "D. Les vaisseaux ombilicaux se développent dans son mésoderme.",
                "E. Sa portion intra-embryonnaire devient l'ouraque, futur ligament ombilical médian."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : l'allantoïde humaine est rudimentaire et n'a pas de fonction excrétrice."
            },
            {
              q: "Concernant le cordon ombilical à terme :",
              options: [
                "A. Il mesure en moyenne 50 à 60 cm.",
                "B. Il contient une artère et deux veines ombilicales.",
                "C. Les artères ombilicales transportent du sang pauvre en oxygène.",
                "D. Il contient des fibres nerveuses.",
                "E. Les vaisseaux sont entourés de gelée de Wharton."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : il contient deux artères et une seule veine. D est fausse : le cordon ne contient ni nerfs ni lymphatiques."
            },
            {
              q: "Concernant les anomalies du cordon et de la région ombilicale :",
              options: [
                "A. L'artère ombilicale unique est associée à un risque accru de malformations.",
                "B. L'insertion vélamenteuse expose au risque de vasa praevia.",
                "C. L'omphalocèle correspond à un défaut de réintégration des anses intestinales dans l'abdomen.",
                "D. Dans l'omphalocèle, les viscères sont recouverts d'une membrane amnio-péritonéale.",
                "E. La fistule de l'ouraque entraîne un écoulement de matières fécales par l'ombilic."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : la fistule de l'ouraque donne un écoulement d'urine ; l'écoulement de matières fécales caractérise la fistule omphalo-mésentérique (canal vitellin)."
            }
          ]
        },
        {
          id: "placenta",
          titre: "Le placenta",
          duree: 40,
          objectifs: [
            "Décrire la formation du placenta : évolution des villosités, chorion villeux et chorion lisse, caduque basale, chambre intervilleuse.",
            "Décrire la structure d'une villosité et l'évolution de la barrière placentaire au cours de la grossesse.",
            "Décrire la circulation fœto-placentaire et utéro-placentaire et le remodelage des artères spiralées.",
            "Connaître les fonctions d'échange (mécanismes de transfert) et les fonctions endocrines (hCG, hPL, progestérone, œstrogènes) du placenta.",
            "Décrire le placenta à terme et ses principales anomalies."
          ],
          sections: [
            {
              titre: "Définition et formation du placenta",
              contenu: `<p>Le <strong>placenta</strong> est l'organe d'échanges entre la mère et le fœtus. Il est constitué d'une <strong>partie fœtale</strong>, le <strong>chorion villeux</strong> (plaque choriale et villosités, dérivées du trophoblaste et du mésoderme extra-embryonnaire), et d'une <strong>partie maternelle</strong>, la <strong>caduque basale</strong> (endomètre transformé). Le placenta humain est de type <strong>hémochorial</strong> (le sang maternel baigne directement le trophoblaste des villosités, sans interposition de tissu maternel), <strong>discoïde</strong>, <strong>villeux</strong>, <strong>décidual</strong> (une partie de l'endomètre est éliminée à la délivrance) et <strong>chorio-allantoïdien</strong> (les vaisseaux fœtaux proviennent du mésoderme de l'allantoïde).</p>
<h4>Les étapes</h4>
<ul>
<li><strong>J6-J12</strong> : implantation ; cytotrophoblaste et syncytiotrophoblaste ; lacunes (J9) ; sang maternel dans les lacunes (J11-J12).</li>
<li><strong>J13-J15</strong> : <strong>villosités primaires</strong> (cytotrophoblaste recouvert de syncytiotrophoblaste).</li>
<li><strong>J16-J18</strong> : <strong>villosités secondaires</strong> (axe de mésenchyme extra-embryonnaire).</li>
<li><strong>J18-J21</strong> : <strong>villosités tertiaires</strong> (capillaires fœtaux dans l'axe) ; connexion aux vaisseaux ombilicaux et au cœur : circulation fœto-placentaire établie à J21-J22.</li>
<li><strong>Fin de la 3<sup>e</sup> semaine</strong> : <strong>coque cytotrophoblastique</strong> ; distinction entre <strong>villosités crampons</strong> (fixées à la coque) et <strong>villosités libres</strong> (flottant dans la chambre intervilleuse). Les lacunes confluentes deviennent la <strong>chambre intervilleuse</strong>.</li>
<li><strong>2<sup>e</sup> mois</strong> : les villosités sont d'abord présentes sur toute la circonférence du chorion (<strong>chorion villeux</strong> diffus). Celles orientées vers la cavité utérine (en regard de la caduque ovulaire), moins bien vascularisées, régressent entre la 8<sup>e</sup> et la 12<sup>e</sup> semaine : c'est le <strong>chorion lisse</strong> (chorion laeve), qui formera avec l'amnios les membranes. Les villosités en regard de la caduque basale, au pôle embryonnaire, se développent et se ramifient : <strong>chorion villeux</strong> (chorion frondosum), qui constitue le placenta définitif.</li>
<li><strong>À partir du 3<sup>e</sup> mois</strong> : le placenta a acquis sa forme discoïde ; il croît en surface jusqu'au 4<sup>e</sup> mois (il recouvre alors 25 à 30 % de la surface utérine) puis en épaisseur par ramification des villosités. Il est fonctionnel comme organe d'échanges dès la 3<sup>e</sup> semaine et prend le relais hormonal du corps jaune vers 8-10 SA.</li>
<li><strong>Du 4<sup>e</sup> mois au terme</strong> : des cloisons issues de la caduque basale, les <strong>septa intercotylédonaires</strong>, s'élèvent entre les groupes de villosités et divisent incomplètement la face maternelle en <strong>15 à 20 cotylédons</strong>.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> placenta hémochorial, discoïde, chorio-allantoïdien ; partie fœtale = chorion villeux (plaque choriale + villosités), partie maternelle = caduque basale (plaque basale). Chorion villeux au pôle embryonnaire, chorion lisse en regard de la caduque ovulaire.</div>`
            },
            {
              titre: "Structure du placenta et des villosités",
              contenu: `<h4>Les deux plaques et la chambre intervilleuse</h4>
<ul>
<li>La <strong>plaque choriale</strong> (face fœtale) : formée de l'amnios (épithélium amniotique), du mésenchyme chorial contenant les branches des vaisseaux ombilicaux, et de trophoblaste. Les <strong>troncs villositaires</strong> de premier ordre en partent.</li>
<li>La <strong>plaque basale</strong> (face maternelle) : constituée de la <strong>caduque basale</strong> (cellules déciduales, glandes, vaisseaux maternels) et de la coque cytotrophoblastique mêlée de fibrinoïde (couche de Nitabuch, plan de clivage de la délivrance). Les artères spiralées remaniées s'y ouvrent et les veines utéro-placentaires y drainent le sang.</li>
<li>Entre les deux, la <strong>chambre intervilleuse</strong> (espace intervilleux), remplie de <strong>sang maternel</strong> (150 mL à terme), dans laquelle baignent les <strong>villosités</strong>.</li>
</ul>
<h4>L'arbre villositaire</h4>
<p>Chaque tronc villositaire de premier ordre se ramifie en villosités de 2<sup>e</sup> et 3<sup>e</sup> ordres, puis en <strong>villosités terminales</strong> (libres), le tout formant un <strong>cotylédon fœtal</strong> (ou arbre villositaire ; il en existe 60 à 100, regroupés en 15 à 20 cotylédons maternels délimités par les septa). Certaines villosités, les villosités <strong>crampons</strong>, atteignent la plaque basale et y sont ancrées par le trophoblaste extravilleux. La surface totale d'échange des villosités à terme est de <strong>12 à 14 m<sup>2</sup></strong>, pour une longueur cumulée de capillaires de 50 km.</p>
<h4>Structure d'une villosité : la barrière placentaire</h4>
<p>Une villosité tertiaire comporte, de dehors en dedans :</p>
<ol>
<li>le <strong>syncytiotrophoblaste</strong> : couche continue, plurinucléée, à bordure en brosse (microvillosités), en contact direct avec le sang maternel ; siège des échanges (transporteurs, récepteurs, enzymes) et de la synthèse hormonale ;</li>
<li>le <strong>cytotrophoblaste</strong> (cellules de Langhans) : couche continue au 1<sup>er</sup> trimestre, devenant discontinue puis quasiment absente au 3<sup>e</sup> trimestre (quelques cellules isolées) ;</li>
<li>la <strong>membrane basale</strong> du trophoblaste ;</li>
<li>le <strong>mésenchyme</strong> (stroma villositaire) : tissu conjonctif lâche contenant des fibroblastes, des <strong>cellules de Hofbauer</strong> (macrophages fœtaux) et les vaisseaux fœtaux ;</li>
<li>la <strong>membrane basale</strong> des capillaires fœtaux ;</li>
<li>l'<strong>endothélium</strong> des capillaires fœtaux (continu).</li>
</ol>
<p>La <strong>barrière placentaire</strong> (membrane placentaire) est l'ensemble des tissus séparant le sang maternel du sang fœtal. Elle s'amincit au cours de la grossesse pour faciliter les échanges :</p>
<table>
<thead><tr><th>Caractère</th><th>1<sup>er</sup> trimestre (barrière « épaisse »)</th><th>3<sup>e</sup> trimestre (barrière « mince »)</th></tr></thead>
<tbody>
<tr><td>Épaisseur</td><td>20 à 25 µm</td><td>2 à 4 µm</td></tr>
<tr><td>Couches</td><td>6 : syncytiotrophoblaste, cytotrophoblaste continu, membrane basale trophoblastique, mésenchyme abondant, membrane basale capillaire, endothélium</td><td>4 : syncytiotrophoblaste aminci, membranes basales fusionnées (vasculo-syncytiale), endothélium ; cytotrophoblaste discontinu, mésenchyme réduit</td></tr>
<tr><td>Vaisseaux fœtaux</td><td>Centraux, peu nombreux</td><td>Nombreux, périphériques, dilatés en sinusoïdes sous le syncytium (membranes vasculo-syncytiales)</td></tr>
<tr><td>Diamètre des villosités</td><td>150 à 200 µm</td><td>40 à 60 µm (villosités terminales)</td></tr>
<tr><td>Autres</td><td>Cellules de Hofbauer nombreuses</td><td>Nœuds syncytiaux (amas de noyaux), dépôts de fibrinoïde, calcifications</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> il n'y a <strong>jamais de mélange</strong> normal entre le sang maternel et le sang fœtal : ils sont toujours séparés par la barrière placentaire. Le placenta humain est « hémochorial », pas « hémo-hémal ». Des micro-passages d'hématies fœtales dans la circulation maternelle existent toutefois (surtout lors de l'accouchement), ce qui explique l'allo-immunisation Rhésus.</div>`
            },
            {
              titre: "Circulations placentaires",
              contenu: `<h4>La circulation fœto-placentaire</h4>
<p>Le sang fœtal <strong>désaturé</strong> arrive au placenta par les <strong>deux artères ombilicales</strong>, qui se divisent sur la plaque choriale en artères choriales, puis en artères des troncs villositaires et en capillaires des villosités terminales ; le sang <strong>réoxygéné</strong> et enrichi en nutriments repart par les veines villositaires, les veines choriales, puis la <strong>veine ombilicale</strong> unique. Le débit ombilical est d'environ <strong>250 mL par minute à terme</strong> (soit 40 % du débit cardiaque fœtal), avec une pression artérielle ombilicale de 50 mmHg et une pression capillaire villositaire de 30 mmHg environ. Le lit vasculaire placentaire est à basse résistance : à l'échographie Doppler, l'index de résistance de l'artère ombilicale diminue au cours de la grossesse ; son élévation (diastole nulle ou inversée) signe une insuffisance placentaire.</p>
<h4>La circulation utéro-placentaire</h4>
<p>Le sang maternel arrive dans la chambre intervilleuse par <strong>80 à 100 artères spiralées</strong> (branches des artères utérines, via les artères arquées et radiales), sous forme de jets dirigés vers la plaque choriale, puis baigne les villosités et est drainé par les <strong>veines utéro-placentaires</strong> qui s'ouvrent dans la plaque basale. Le débit utérin passe de 50 mL/min en début de grossesse à <strong>500 à 700 mL par minute à terme</strong> (10 à 15 % du débit cardiaque maternel), dont 80 % pour le placenta. La pression dans la chambre intervilleuse est basse (10 mmHg), ce qui permet un écoulement lent favorable aux échanges.</p>
<h4>Le remodelage des artères spiralées</h4>
<p>Au cours du 1<sup>er</sup> trimestre et jusqu'à 18-20 SA, des cellules du <strong>cytotrophoblaste extravilleux</strong> issues des villosités crampons envahissent la caduque et le tiers interne du myomètre (<strong>trophoblaste interstitiel</strong>) et pénètrent dans la lumière des artères spiralées (<strong>trophoblaste endovasculaire</strong>), où elles remplacent l'endothélium et détruisent la média musculo-élastique. Les artères spiralées deviennent des <strong>conduits larges, flasques, insensibles aux agents vasoconstricteurs</strong>, assurant un débit élevé et constant. Pendant les premières semaines, des bouchons trophoblastiques obstruent les artères spiralées : l'embryon se développe dans un environnement <strong>hypoxique</strong> (PO<sub>2</sub> de 20 mmHg), protecteur vis-à-vis du stress oxydatif ; la circulation maternelle intervilleuse ne devient pleinement effective qu'à la fin du 1<sup>er</sup> trimestre (10-12 SA).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> un <strong>défaut de remodelage</strong> des artères spiralées (invasion trophoblastique insuffisante, limitée à la caduque) entraîne une hypoperfusion placentaire, un stress oxydatif et la libération dans la circulation maternelle de facteurs anti-angiogéniques (sFlt-1, endogline soluble) et de débris syncytiaux responsables d'une dysfonction endothéliale maternelle généralisée : c'est la <strong>pré-éclampsie</strong> (hypertension et protéinurie après 20 SA, 2 à 5 % des grossesses), avec ses complications (éclampsie, HELLP syndrome, hématome rétroplacentaire) et le <strong>retard de croissance intra-utérin</strong> vasculaire. Le dépistage précoce associe Doppler des artères utérines (notch) et dosages (PAPP-A, PlGF), et la prévention repose sur l'aspirine à faible dose débutée avant 16 SA chez les femmes à risque.</div>`
            },
            {
              titre: "Fonctions d'échange du placenta",
              contenu: `<p>Le placenta est le <strong>poumon</strong>, l'<strong>intestin</strong>, le <strong>rein</strong> et en partie le <strong>foie</strong> du fœtus. Les échanges se font à travers la barrière placentaire par plusieurs mécanismes :</p>
<table>
<thead><tr><th>Mécanisme</th><th>Principe</th><th>Substances</th></tr></thead>
<tbody>
<tr><td><strong>Diffusion simple</strong></td><td>Selon le gradient de concentration, à travers la membrane ; dépend de la liposolubilité, de la taille (inférieure à 500 à 1 000 Da) et de la surface d'échange</td><td>O<sub>2</sub>, CO<sub>2</sub>, eau, urée, électrolytes (Na<sup>+</sup>, K<sup>+</sup>, Cl<sup>-</sup>), gaz anesthésiques, la majorité des <strong>médicaments</strong> liposolubles non ionisés, alcool, nicotine, monoxyde de carbone</td></tr>
<tr><td><strong>Diffusion facilitée</strong></td><td>Transporteur membranaire, sans énergie, selon le gradient</td><td><strong>Glucose</strong> (transporteurs GLUT1 et GLUT3 ; la glycémie fœtale est de 70 à 80 % de la glycémie maternelle), lactate</td></tr>
<tr><td><strong>Transport actif</strong></td><td>Transporteur consommant de l'ATP, contre le gradient (concentration fœtale supérieure à la concentration maternelle)</td><td><strong>Acides aminés</strong>, <strong>calcium</strong>, phosphore, <strong>fer</strong> (transferrine), iode, vitamines hydrosolubles (C, B), magnésium</td></tr>
<tr><td><strong>Endocytose / transcytose par récepteur</strong></td><td>Fixation sur un récepteur du syncytiotrophoblaste, internalisation en vésicules, libération côté fœtal</td><td><strong>IgG</strong> maternelles (récepteur FcRn, à partir du 2<sup>e</sup> trimestre, massif au 3<sup>e</sup> trimestre : immunité passive du nouveau-né pendant 6 mois ; les IgM, IgA et IgE ne passent pas), LDL-cholestérol, transferrine, vitamine B12</td></tr>
<tr><td><strong>Pinocytose</strong></td><td>Englobement non spécifique de liquide</td><td>Protéines en faible quantité</td></tr>
<tr><td><strong>Effraction (rupture de la barrière)</strong></td><td>Passage de cellules entières par brèches</td><td>Hématies fœtales vers la mère (allo-immunisation Rhésus), cellules fœtales (base du DPNI avec l'ADN fœtal libre), leucocytes maternels vers le fœtus (rare)</td></tr>
</tbody>
</table>
<h4>Échanges gazeux</h4>
<p>L'oxygène diffuse de la mère (PO<sub>2</sub> de 90 à 100 mmHg dans les artères utérines, 40 à 50 mmHg dans la chambre intervilleuse) vers le fœtus (PO<sub>2</sub> de 30 à 35 mmHg dans la veine ombilicale). Le transfert est favorisé par la <strong>plus grande affinité de l'hémoglobine fœtale (HbF, alpha2-gamma2)</strong> pour l'oxygène (P50 de 19 mmHg contre 27 mmHg pour l'HbA, car l'HbF fixe peu le 2,3-DPG), par la concentration élevée d'hémoglobine fœtale (16 à 18 g/dL) et par l'<strong>effet Bohr double</strong> : le CO<sub>2</sub> fœtal passant côté maternel acidifie le sang maternel (diminution de son affinité pour l'O<sub>2</sub>) tandis que le sang fœtal s'alcalinise (augmentation de son affinité). Le CO<sub>2</sub> diffuse en sens inverse (PCO<sub>2</sub> fœtale 40 à 45 mmHg contre 30 à 35 mmHg chez la mère, qui est en hyperventilation physiologique).</p>
<h4>Nutrition et excrétion</h4>
<p>Le glucose est le substrat énergétique principal du fœtus (il ne pratique pas de néoglucogenèse) ; les acides aminés sont concentrés activement ; les acides gras libres et le cholestérol passent en quantité limitée (le fœtus synthétise ses lipides) ; l'eau et les électrolytes s'échangent massivement (3,5 L d'eau par heure). Les déchets fœtaux (urée, créatinine, acide urique, bilirubine non conjuguée) passent vers la mère, qui les élimine.</p>
<h4>Rôle de barrière : protection et limites</h4>
<p>La barrière placentaire protège le fœtus de nombreuses macromolécules et de la plupart des bactéries (la <strong>syphilis</strong>, la <strong>listériose</strong> et la tuberculose la franchissent) et exprime des enzymes de détoxification et des pompes d'efflux (P-glycoprotéine). Mais elle est très imparfaite : elle laisse passer la majorité des <strong>virus</strong> (rubéole, CMV, varicelle, parvovirus B19, VIH, Zika), le <strong>toxoplasme</strong>, la plupart des <strong>médicaments</strong> et des <strong>toxiques</strong> (alcool, tabac, drogues, plomb, mercure), ainsi que les <strong>anticorps IgG</strong> maternels, bénéfiques (immunité passive) ou pathogènes (anticorps anti-D dans l'allo-immunisation Rhésus, anticorps anti-récepteur de la TSH dans la maladie de Basedow, anti-SSA dans le lupus, anti-plaquettes). Le placenta est une barrière <strong>sélective</strong>, non une barrière étanche.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> O<sub>2</sub>, CO<sub>2</sub>, eau, médicaments : diffusion simple ; glucose : diffusion facilitée (GLUT) ; acides aminés, Ca, Fe : transport actif ; IgG : endocytose par récepteur (seule classe d'immunoglobulines qui passe). HbF : affinité supérieure pour l'O<sub>2</sub> (P50 = 19 mmHg).</div>`
            },
            {
              titre: "Fonctions endocrines du placenta",
              contenu: `<p>Le placenta, par son <strong>syncytiotrophoblaste</strong>, est une glande endocrine majeure qui produit des hormones peptidiques et stéroïdes. Il remplace l'hypophyse (hCG, hPL) et l'ovaire (progestérone, œstrogènes) maternels pour la grossesse, mais il est enzymatiquement <strong>incomplet</strong> et dépend de précurseurs maternels et fœtaux : c'est l'<strong>unité fœto-placentaire</strong>.</p>
<h4>Hormones peptidiques</h4>
<ul>
<li><strong>hCG</strong> (gonadotrophine chorionique) : sécrétée dès J7-J8, maximum à 8-10 SA (100 000 UI/L), plateau bas ensuite. Maintient le corps jaune gravidique (progestérone) jusqu'au relais placentaire, stimule le testicule fœtal (testostérone), rôle immunomodulateur et angiogénique. Marqueur de grossesse et de maladie trophoblastique.</li>
<li><strong>hPL</strong> (hormone lactogène placentaire, hCS, somatomammotrophine chorionique) : polypeptide de 191 acides aminés, proche de la GH et de la prolactine (96 % d'homologie avec la GH). Sécrétée à partir de la 3<sup>e</sup> semaine, son taux augmente <strong>proportionnellement à la masse placentaire</strong> jusqu'au terme (5 à 7 µg/mL, soit 1 g par jour : la plus abondante des hormones placentaires). Effets <strong>métaboliques maternels</strong> : diabétogène (insulinorésistance), lipolytique, qui orientent le glucose et les acides aminés vers le fœtus et les acides gras vers la mère ; préparation de la glande mammaire (avec la prolactine). Son effet GH-like est faible. Elle participe au <strong>diabète gestationnel</strong>.</li>
<li>Autres : <strong>hormone de croissance placentaire</strong> (GH-V), <strong>CRH placentaire</strong> (augmente exponentiellement et participe au déclenchement de l'accouchement : « horloge placentaire »), <strong>leptine</strong>, <strong>PAPP-A</strong> (pregnancy-associated plasma protein A, protéase de l'IGFBP-4, marqueur du dépistage de la trisomie 21 au 1<sup>er</sup> trimestre : abaissée), PP14, activine, inhibine A, relaxine (corps jaune et placenta), facteurs de croissance (PlGF, VEGF) et neuropeptides.</li>
</ul>
<h4>Hormones stéroïdes</h4>
<ul>
<li><strong>Progestérone</strong> : produite par le corps jaune jusqu'à 8-10 SA, puis par le syncytiotrophoblaste à partir du <strong>cholestérol maternel</strong> (LDL) ; le placenta possède la 3-bêta-HSD mais <strong>pas la 17-alpha-hydroxylase</strong>, il ne peut donc pas transformer la progestérone en androgènes. Le taux croît régulièrement jusqu'au terme (100 à 250 ng/mL, 250 mg par jour à terme). Rôles : <strong>quiescence du myomètre</strong> (« gardienne de la grossesse »), maintien de la caduque, immunosuppression locale, préparation de la glande mammaire et inhibition de la lactation pendant la grossesse, effet hyperthermisant ; précurseur des glucocorticoïdes et minéralocorticoïdes fœtaux. Sa sécrétion est <strong>indépendante du fœtus</strong> (elle persiste en cas de mort fœtale in utero tant que le placenta est fonctionnel).</li>
<li><strong>Œstrogènes</strong> : le placenta possède l'<strong>aromatase</strong> et la sulfatase mais pas la 17-alpha-hydroxylase/17,20-lyase : il ne peut synthétiser d'androgènes et doit utiliser les <strong>androgènes fournis par la surrénale fœtale</strong> (DHEA-S), convertis dans le foie fœtal (16-hydroxylation) puis aromatisés dans le placenta en <strong>œstriol (E3)</strong>, l'œstrogène prédominant de la grossesse (1 000 fois le taux hors grossesse), et en œstradiol et œstrone à partir du DHEA-S maternel et fœtal. L'œstriol est donc un <strong>marqueur de la vitalité fœtale</strong> (unité fœto-placentaire). Rôles : croissance utérine et mammaire, augmentation du débit utérin, induction des récepteurs à l'ocytocine et des prostaglandines (préparation du travail), effets métaboliques.</li>
</ul>
<table>
<thead><tr><th>Hormone</th><th>Origine</th><th>Cinétique</th><th>Rôles principaux</th></tr></thead>
<tbody>
<tr><td>hCG</td><td>Syncytiotrophoblaste</td><td>Pic à 8-10 SA, puis plateau</td><td>Maintien du corps jaune, testostérone fœtale</td></tr>
<tr><td>hPL</td><td>Syncytiotrophoblaste</td><td>Croissance jusqu'au terme (masse placentaire)</td><td>Insulinorésistance et lipolyse maternelles, glande mammaire</td></tr>
<tr><td>Progestérone</td><td>Corps jaune puis placenta (cholestérol maternel)</td><td>Croissance continue</td><td>Relâchement du myomètre, caduque, immunotolérance</td></tr>
<tr><td>Œstriol</td><td>Placenta à partir du DHEA-S fœtal</td><td>Croissance continue</td><td>Croissance utérine, préparation du travail ; témoin de vitalité fœtale</td></tr>
<tr><td>PAPP-A, PlGF</td><td>Trophoblaste</td><td>1<sup>er</sup> trimestre</td><td>Marqueurs de dépistage (trisomie 21, pré-éclampsie)</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le placenta <strong>ne peut pas</strong> fabriquer de cholestérol (il l'importe de la mère) ni d'androgènes (pas de 17-alpha-hydroxylase) : la synthèse des œstrogènes nécessite les androgènes de la <strong>surrénale fœtale</strong>. La progestérone, en revanche, ne dépend que du cholestérol maternel. Une anencéphalie (surrénales fœtales atrophiques) ou un déficit en sulfatase placentaire donnent un œstriol effondré avec progestérone normale.</div>`
            },
            {
              titre: "Le placenta à terme et ses anomalies",
              contenu: `<h4>Le placenta normal à terme</h4>
<ul>
<li><strong>Disque</strong> de <strong>15 à 20 cm</strong> de diamètre, <strong>2 à 3 cm</strong> d'épaisseur au centre, pesant <strong>500 à 600 g</strong> (environ <strong>1/6<sup>e</sup> du poids fœtal</strong> ; le rapport poids placentaire / poids fœtal diminue au cours de la grossesse, de 1 à 10 SA à 1/6 à terme).</li>
<li><strong>Face fœtale</strong> : lisse, luisante, recouverte d'amnios (translucide, laissant voir les vaisseaux choriaux), avec l'insertion du cordon en son centre.</li>
<li><strong>Face maternelle</strong> : rouge sombre, charnue, divisée par des sillons (septa) en <strong>15 à 20 cotylédons</strong>, recouverte de lambeaux de caduque.</li>
<li>Les <strong>membranes</strong> s'insèrent sur le bord et se composent de l'amnios (interne), du chorion lisse et de restes de caduque (externe).</li>
<li>Vieillissement physiologique : dépôts de fibrinoïde, calcifications, infarctus marginaux, nœuds syncytiaux ; le placenta à terme est « mature » et sa fonction décline après 41-42 SA (sénescence placentaire).</li>
</ul>
<h4>Anomalies de forme et d'insertion</h4>
<ul>
<li><strong>Placenta bilobé ou bipartite</strong>, <strong>cotylédon aberrant</strong> (succenturié, relié par des vaisseaux membranaires : risque de rétention et d'hémorragie à la délivrance), placenta <strong>membraneux</strong> (diffus, mince), <strong>circumvallé</strong> (extrachorial : insertion des membranes en retrait du bord, avec bourrelet ; associé à des saignements et à la prématurité).</li>
<li><strong>Placenta praevia</strong> : insertion sur le <strong>segment inférieur</strong> (bas inséré, marginal, recouvrant partiel ou total) ; 0,5 % des grossesses, favorisé par les cicatrices utérines, l'âge, la multiparité, le tabac ; cause d'<strong>hémorragies du 3<sup>e</sup> trimestre</strong> (sang rouge, indolores) et indication de césarienne s'il est recouvrant. Le placenta « migre » apparemment vers le haut au cours de la grossesse par développement préférentiel du segment inférieur : un placenta bas inséré à 20 SA n'est praevia à terme que dans 10 % des cas.</li>
<li><strong>Placenta accreta, increta, percreta</strong> : invasion anormale du myomètre par absence de caduque basale (cicatrice de césarienne, curetage) ; absence de plan de clivage, hémorragie massive de la délivrance, parfois hystérectomie d'hémostase.</li>
</ul>
<h4>Anomalies de fonctionnement et pathologies</h4>
<ul>
<li><strong>Insuffisance placentaire</strong> (vasculaire) : défaut de remodelage des artères spiralées, infarctus, hypotrophie placentaire ; responsable de <strong>retard de croissance intra-utérin</strong>, d'oligoamnios, de pré-éclampsie, de mort fœtale in utero. Diagnostic par biométries échographiques et Doppler ombilical et utérin.</li>
<li><strong>Hématome rétroplacentaire</strong> (décollement prématuré d'un placenta normalement inséré) : urgence vitale (douleur brutale, utérus de bois, hémorragie noirâtre, souffrance fœtale aiguë), favorisé par l'hypertension, la pré-éclampsie, le tabac, la cocaïne, les traumatismes.</li>
<li><strong>Chorioamniotite</strong> et infections placentaires (villites : CMV, syphilis, listériose, toxoplasmose, paludisme).</li>
<li><strong>Maladies trophoblastiques</strong> : môle hydatiforme complète et partielle, môle invasive, choriocarcinome, tumeur du site d'implantation.</li>
<li><strong>Tumeurs bénignes</strong> : chorioangiome (hémangiome placentaire ; s'il est volumineux, hydramnios et anasarque par shunt).</li>
<li><strong>Anomalies de la délivrance</strong> : rétention placentaire (délivrance artificielle), hémorragie de la délivrance (perte supérieure à 500 mL ; première cause de mortalité maternelle évitable), inversion utérine.</li>
<li><strong>Placenta de la grossesse gémellaire</strong> : voir chapitre suivant (chorionicité, anastomoses).</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>examen du placenta</strong> en salle de naissance (intégrité des cotylédons et des membranes, nombre de vaisseaux du cordon, insertion, poids) est systématique : un placenta incomplet impose une révision utérine pour prévenir l'hémorragie et l'infection ; un placenta de poids inférieur à 350 g oriente vers une insuffisance placentaire ; un examen anatomopathologique est demandé en cas de pathologie fœtale ou maternelle.</div>`
            }
          ],
          points_cles: [
            "Le placenta humain est hémochorial, discoïde, villeux, décidual et chorio-allantoïdien ; sa partie fœtale est le chorion villeux (plaque choriale + villosités), sa partie maternelle la caduque basale (plaque basale).",
            "Villosités primaires (J13), secondaires (J16, mésenchyme), tertiaires (J18-J21, capillaires) ; villosités crampons et villosités libres ; chorion villeux au pôle embryonnaire, chorion lisse en regard de la caduque ovulaire (régression 8-12 semaines).",
            "La barrière placentaire passe de 6 couches et 20-25 µm au 1er trimestre à 4 couches et 2-4 µm au 3e trimestre (disparition du cytotrophoblaste, membranes vasculo-syncytiales) ; surface d'échange de 12-14 m2 ; les sangs maternel et fœtal ne se mélangent jamais.",
            "Circulation fœto-placentaire : 2 artères ombilicales (sang désaturé) et 1 veine ombilicale (sang oxygéné), débit 250 mL/min ; circulation utéro-placentaire : 80-100 artères spiralées, chambre intervilleuse à basse pression, débit 500-700 mL/min à terme.",
            "Le remodelage des artères spiralées par le trophoblaste extravilleux (jusqu'à 18-20 SA) est indispensable ; son défaut provoque pré-éclampsie et retard de croissance.",
            "Transferts : diffusion simple (gaz, eau, médicaments liposolubles), diffusion facilitée (glucose, GLUT), transport actif (acides aminés, fer, calcium), endocytose par récepteur (IgG, seule classe qui passe) ; l'HbF a une affinité supérieure pour l'O2 (P50 = 19 mmHg).",
            "La barrière est sélective mais imparfaite : passage des virus, du toxoplasme, de Listeria, de Treponema, de la plupart des médicaments et toxiques, et des IgG pathogènes (anti-D).",
            "Hormones : hCG (pic 8-10 SA, maintien du corps jaune), hPL (croissance jusqu'au terme, insulinorésistance maternelle), progestérone (cholestérol maternel, relâchement du myomètre, indépendante du fœtus), œstriol (androgènes de la surrénale fœtale, aromatase placentaire, témoin de vitalité fœtale).",
            "Placenta à terme : 15-20 cm, 2-3 cm, 500-600 g (1/6 du poids fœtal), 15-20 cotylédons, face fœtale lisse (amnios), face maternelle charnue.",
            "Anomalies : placenta praevia (hémorragies du 3e trimestre), accreta (invasion du myomètre), hématome rétroplacentaire, insuffisance placentaire, chorioangiome, maladies trophoblastiques."
          ],
          lexique: [
            { terme: "Placenta hémochorial", def: "Type de placenta dans lequel le sang maternel baigne directement le trophoblaste des villosités, sans interposition de tissu maternel." },
            { terme: "Chorion villeux (frondosum)", def: "Partie du chorion portant les villosités développées, située au pôle embryonnaire, constituant la partie fœtale du placenta." },
            { terme: "Chorion lisse (laeve)", def: "Partie du chorion dont les villosités ont régressé (8-12 semaines), formant avec l'amnios les membranes." },
            { terme: "Chambre intervilleuse", def: "Espace rempli de sang maternel, dérivé des lacunes trophoblastiques, dans lequel baignent les villosités." },
            { terme: "Barrière placentaire", def: "Ensemble des tissus séparant le sang maternel du sang fœtal dans la villosité : syncytiotrophoblaste, cytotrophoblaste, membranes basales, mésenchyme, endothélium." },
            { terme: "Trophoblaste extravilleux", def: "Cellules cytotrophoblastiques quittant les villosités crampons pour envahir la caduque et les artères spiralées (trophoblaste interstitiel et endovasculaire)." },
            { terme: "Cotylédon", def: "Unité fonctionnelle du placenta : arbre villositaire issu d'un tronc villositaire (cotylédon fœtal) ou lobe de la face maternelle délimité par les septa (15 à 20 cotylédons maternels)." },
            { terme: "hPL", def: "Hormone lactogène placentaire, polypeptide proche de la GH, dont le taux croît avec la masse placentaire ; responsable de l'insulinorésistance maternelle." },
            { terme: "Unité fœto-placentaire", def: "Coopération métabolique entre la surrénale et le foie du fœtus (androgènes) et le placenta (aromatase) pour la synthèse des œstrogènes, notamment de l'œstriol." },
            { terme: "Placenta praevia", def: "Insertion du placenta sur le segment inférieur de l'utérus, recouvrant ou non l'orifice cervical, cause d'hémorragies du 3e trimestre." }
          ],
          qcm: [
            {
              q: "Concernant la structure du placenta :",
              options: [
                "A. Le placenta humain est de type hémochorial.",
                "B. La partie maternelle du placenta est la caduque ovulaire.",
                "C. Le chorion lisse se forme par régression des villosités en regard de la caduque basale.",
                "D. Les villosités tertiaires contiennent des capillaires fœtaux.",
                "E. Les septa intercotylédonaires dérivent de la caduque basale."
              ],
              bonnes: [0, 3, 4],
              explication: "A, D et E sont vraies. B est fausse : la partie maternelle est la caduque basale. C est fausse : le chorion lisse résulte de la régression des villosités en regard de la caduque ovulaire ; le chorion villeux persiste en regard de la caduque basale."
            },
            {
              q: "Concernant la barrière placentaire :",
              options: [
                "A. Au 1er trimestre, elle comporte un cytotrophoblaste continu.",
                "B. Elle s'épaissit au cours de la grossesse pour mieux protéger le fœtus.",
                "C. Au 3e trimestre, elle mesure 2 à 4 µm d'épaisseur.",
                "D. Le sang maternel et le sang fœtal se mélangent dans la chambre intervilleuse.",
                "E. Les cellules de Hofbauer sont des macrophages fœtaux du stroma villositaire."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : elle s'amincit (de 20-25 µm à 2-4 µm). D est fausse : les deux sangs ne se mélangent jamais normalement."
            },
            {
              q: "Concernant les circulations placentaires :",
              options: [
                "A. Les artères ombilicales apportent au placenta du sang fœtal pauvre en oxygène.",
                "B. Le sang maternel arrive dans la chambre intervilleuse par les artères spiralées.",
                "C. Le remodelage des artères spiralées est réalisé par le trophoblaste extravilleux.",
                "D. Un défaut de remodelage des artères spiralées est à l'origine de la pré-éclampsie.",
                "E. Le débit utéro-placentaire à terme est d'environ 50 mL par minute."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : le débit utérin à terme est de 500 à 700 mL par minute."
            },
            {
              q: "Concernant les échanges placentaires :",
              options: [
                "A. L'oxygène traverse la barrière par diffusion simple.",
                "B. Le glucose traverse par transport actif contre le gradient de concentration.",
                "C. Les acides aminés sont transportés activement vers le fœtus.",
                "D. Les IgG maternelles traversent le placenta par endocytose médiée par récepteur.",
                "E. Les IgM maternelles traversent le placenta aussi facilement que les IgG."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le glucose passe par diffusion facilitée (GLUT1), selon le gradient. E est fausse : seules les IgG traversent le placenta."
            },
            {
              q: "Concernant l'hémoglobine fœtale et les gaz :",
              options: [
                "A. L'hémoglobine fœtale a une affinité pour l'oxygène supérieure à celle de l'hémoglobine adulte.",
                "B. L'HbF est constituée de deux chaînes alpha et deux chaînes bêta.",
                "C. La PO2 dans la veine ombilicale est d'environ 30 à 35 mmHg.",
                "D. Le double effet Bohr favorise le transfert d'oxygène vers le fœtus.",
                "E. Le CO2 fœtal est éliminé par les poumons du fœtus in utero."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : l'HbF est alpha2-gamma2 (les chaînes bêta caractérisent l'HbA). E est fausse : le CO2 fœtal diffuse à travers le placenta vers la mère."
            },
            {
              q: "Concernant les hormones placentaires :",
              options: [
                "A. L'hPL est sécrétée en quantité croissante jusqu'au terme, proportionnellement à la masse placentaire.",
                "B. La progestérone placentaire est synthétisée à partir du cholestérol maternel.",
                "C. Le placenta synthétise les œstrogènes à partir d'androgènes produits par la surrénale fœtale.",
                "D. Le placenta possède la 17-alpha-hydroxylase.",
                "E. La sécrétion de progestérone s'effondre immédiatement en cas de mort fœtale in utero."
              ],
              bonnes: [0, 1, 2],
              explication: "A, B et C sont vraies. D est fausse : le placenta ne possède pas la 17-alpha-hydroxylase, d'où sa dépendance aux androgènes fœtaux. E est fausse : la progestérone ne dépend pas du fœtus et persiste tant que le placenta est fonctionnel ; c'est l'œstriol qui s'effondre."
            },
            {
              q: "Concernant le placenta à terme et ses anomalies :",
              options: [
                "A. Il pèse environ 500 à 600 g, soit un sixième du poids fœtal.",
                "B. Sa face fœtale est charnue et divisée en cotylédons.",
                "C. Le placenta praevia est inséré sur le segment inférieur de l'utérus.",
                "D. Le placenta accreta se caractérise par une invasion anormale du myomètre.",
                "E. L'hématome rétroplacentaire est favorisé par l'hypertension artérielle maternelle."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la face fœtale est lisse et recouverte d'amnios ; c'est la face maternelle qui est charnue et divisée en 15 à 20 cotylédons."
            }
          ]
        },
        {
          id: "grossesses-gemellaires",
          titre: "Les grossesses gémellaires",
          duree: 25,
          objectifs: [
            "Distinguer jumeaux dizygotes et monozygotes : fréquence, mécanisme, facteurs favorisants.",
            "Relier la date de division de l'œuf à la chorionicité et à l'amnionicité des jumeaux monozygotes.",
            "Décrire les types de placentation gémellaire et savoir les reconnaître à l'échographie.",
            "Connaître les complications spécifiques des grossesses monochoriales (syndrome transfuseur-transfusé, jumeau acardiaque, enchevêtrement des cordons).",
            "Comprendre le mécanisme des jumeaux conjoints et leur classification."
          ],
          sections: [
            {
              titre: "Épidémiologie et types de jumeaux",
              contenu: `<p>Une <strong>grossesse gémellaire</strong> est une grossesse comportant deux fœtus. Sa fréquence spontanée est d'environ <strong>1 sur 80 à 90 naissances</strong> (règle de Hellin : triplés 1/80<sup>2</sup> soit 1/6 400 à 1/8 000, quadruplés 1/80<sup>3</sup>), mais elle a augmenté avec l'assistance médicale à la procréation et l'âge maternel : les grossesses multiples représentent aujourd'hui 1,5 à 1,7 % des naissances en France (3 % des enfants). Il existe deux types fondamentaux de jumeaux.</p>
<h4>Les jumeaux dizygotes (« faux jumeaux », biovulaires)</h4>
<p>Ils résultent de la <strong>fécondation de deux ovocytes</strong>, issus d'une double ovulation (deux follicules dominants) au cours du même cycle, par <strong>deux spermatozoïdes</strong> différents. Ils représentent <strong>deux tiers (65 à 70 %)</strong> des grossesses gémellaires. Génétiquement, ils ne sont pas plus proches que des frères et sœurs ordinaires (50 % de gènes en commun en moyenne) : ils peuvent être de <strong>sexes différents</strong> (dans 50 % des cas) et ne se ressemblent pas plus que deux membres d'une fratrie. Leur fréquence dépend de facteurs qui favorisent la double ovulation :</p>
<ul>
<li><strong>hérédité</strong> maternelle (gènes de la FSH et de ses récepteurs ; une femme jumelle dizygote ou dont la mère a eu des jumeaux a un risque 2 à 3 fois plus élevé) ;</li>
<li><strong>âge maternel</strong> (maximum entre 35 et 39 ans, par élévation de la FSH) et <strong>parité</strong> ;</li>
<li><strong>origine ethnique</strong> : 1/20 naissances au Nigeria (Yorubas), 1/80 en Europe, 1/150 en Asie ;</li>
<li><strong>inducteurs de l'ovulation</strong> (clomifène, gonadotrophines) et transferts de plusieurs embryons en FIV ;</li>
<li>arrêt récent d'une contraception orale, grande taille, obésité.</li>
</ul>
<p>Chaque embryon dizygote s'implante séparément et possède ses <strong>propres annexes</strong> : deux chorions, deux amnios, deux placentas (<strong>bichoriale biamniotique</strong>). Si les deux implantations sont proches, les placentas peuvent fusionner en apparence, mais les circulations restent indépendantes (pas d'anastomoses vasculaires, sauf exception).</p>
<h4>Les jumeaux monozygotes (« vrais jumeaux », uniovulaires)</h4>
<p>Ils résultent de la <strong>fécondation d'un seul ovocyte</strong> par un seul spermatozoïde, suivie de la <strong>division</strong> du produit de la fécondation en deux ébauches embryonnaires à un moment variable des deux premières semaines. Ils représentent <strong>un tiers (30 à 35 %)</strong> des grossesses gémellaires. Leur fréquence est <strong>constante</strong> dans toutes les populations (3,5 à 4 pour 1 000 naissances), indépendante de l'hérédité et de l'âge (mais légèrement augmentée par la FIV, surtout après culture prolongée et éclosion assistée). Ils ont le <strong>même génome</strong> (sauf mutations post-zygotiques, différences épigénétiques et d'inactivation de l'X), sont donc toujours du <strong>même sexe</strong>, du même groupe sanguin, et se ressemblent fortement. Leur placentation dépend du <strong>moment de la division</strong>.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> les facteurs favorisants (hérédité, âge, ethnie, inducteurs de l'ovulation) ne concernent que les jumeaux <strong>dizygotes</strong>. Des jumeaux de <strong>sexes différents</strong> sont toujours dizygotes ; des jumeaux de même sexe peuvent être l'un ou l'autre (le diagnostic de zygotie repose alors sur la chorionicité, puis sur les groupes sanguins et l'ADN).</div>`
            },
            {
              titre: "Jumeaux monozygotes : date de division, chorionicité et amnionicité",
              contenu: `<p>La règle fondamentale est la suivante : <strong>plus la division est tardive, plus les jumeaux partagent d'annexes</strong>. Le trophoblaste (futur chorion) se différencie à J5 et l'amnios à J8 : une division avant J3-J4 (avant la différenciation du trophoblaste) donne deux œufs complets ; une division entre J4 et J8 (après la différenciation du trophoblaste mais avant celle de l'amnios) donne deux boutons embryonnaires dans un même trophoblaste ; une division après J8-J9 (après la différenciation de l'amnios) donne deux embryons dans une seule cavité amniotique.</p>
<table>
<thead><tr><th>Moment de la division</th><th>Stade</th><th>Type de placentation</th><th>Fréquence parmi les monozygotes</th><th>Caractéristiques</th></tr></thead>
<tbody>
<tr><td><strong>J0 à J3</strong></td><td>Zygote, 2 à 8 cellules (avant la compaction / avant la différenciation du trophoblaste)</td><td><strong>Bichoriale biamniotique</strong></td><td>25 à 30 %</td><td>Deux blastocystes, deux implantations, deux chorions, deux amnios, deux placentas (séparés ou fusionnés) ; identique en apparence à la grossesse dizygote</td></tr>
<tr><td><strong>J4 à J8</strong></td><td>Blastocyste : division du bouton embryonnaire dans un trophoblaste unique</td><td><strong>Monochoriale biamniotique</strong></td><td>70 à 75 % (la plus fréquente)</td><td>Un seul chorion et un seul placenta, deux cavités amniotiques séparées par une cloison fine (deux amnios) ; anastomoses vasculaires placentaires quasi constantes</td></tr>
<tr><td><strong>J8 à J13</strong></td><td>Disque didermique : division de l'épiblaste après la formation de la cavité amniotique</td><td><strong>Monochoriale monoamniotique</strong></td><td>1 à 2 %</td><td>Un chorion, un amnios, une cavité amniotique unique, un placenta, deux cordons insérés très près l'un de l'autre ; mortalité élevée (enchevêtrement des cordons)</td></tr>
<tr><td><strong>Après J13-J14</strong></td><td>Disque embryonnaire, ligne primitive : division incomplète</td><td><strong>Monochoriale monoamniotique, jumeaux conjoints</strong></td><td>Exceptionnel (1/50 000 à 1/100 000 naissances)</td><td>Séparation incomplète : jumeaux siamois unis par une région variable</td></tr>
</tbody>
</table>
<p>Au total, environ <strong>deux tiers des monozygotes sont monochoriaux</strong> ; toute grossesse monochoriale est monozygote (sauf exceptions anecdotiques après FIV), alors qu'une grossesse bichoriale peut être dizygote (le plus souvent) ou monozygote. Sur l'ensemble des grossesses gémellaires, environ <strong>20 % sont monochoriales</strong> et 80 % bichoriales.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> J0-J3 : bichoriale biamniotique (2 placentas) ; J4-J8 : monochoriale biamniotique (1 placenta, 2 poches, le plus fréquent) ; J8-J13 : monochoriale monoamniotique (1 placenta, 1 poche) ; après J13 : jumeaux conjoints. Monochorial implique monozygote ; sexes différents impliquent dizygote.</div>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour retrouver le type de placentation, se demander quelles annexes étaient déjà formées au moment de la division : trophoblaste à J5, amnios à J8. Tout ce qui est déjà formé est partagé ; tout ce qui n'est pas encore formé sera dupliqué.</div>`
            },
            {
              titre: "Diagnostic de la chorionicité et placentas gémellaires",
              contenu: `<p>La détermination de la <strong>chorionicité</strong> est l'élément pronostique majeur d'une grossesse gémellaire ; elle doit être faite à l'<strong>échographie du premier trimestre</strong> (idéalement entre 11 et 14 SA), car elle devient difficile plus tard.</p>
<ul>
<li>Grossesse <strong>bichoriale</strong> : deux sacs gestationnels distincts avant 10 SA ; deux masses placentaires ou une masse unique avec un <strong>signe du lambda</strong> (ou « twin peak ») : projection triangulaire de tissu chorial dans la base de la cloison inter-amniotique, qui est <strong>épaisse</strong> (supérieure à 2 mm, 4 couches : amnios-chorion-chorion-amnios) ; fœtus pouvant être de sexes différents.</li>
<li>Grossesse <strong>monochoriale biamniotique</strong> : un seul placenta, cloison <strong>fine</strong> (inférieure à 2 mm, 2 couches d'amnios) s'insérant à angle droit sur le placenta : <strong>signe du T</strong> ; fœtus de même sexe.</li>
<li>Grossesse <strong>monoamniotique</strong> : absence de cloison, cordons entremêlés.</li>
</ul>
<p>Après la naissance, l'examen du placenta confirme : dans la placentation bichoriale, la cloison comprend deux chorions entre les deux amnios (4 feuillets, cloison opaque, difficile à décoller du placenta) ; dans la placentation monochoriale, la cloison ne comporte que deux amnios (translucide, se décollant facilement) et l'injection des vaisseaux montre des <strong>anastomoses</strong> (artério-artérielles superficielles, veino-veineuses, et artério-veineuses profondes au niveau d'un cotylédon partagé). Ces anastomoses existent dans 95 % des placentas monochoriaux et sont à l'origine des complications spécifiques.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les grossesses gémellaires sont des grossesses à risque : prématurité (50 % des jumeaux naissent avant 37 SA, terme moyen 36 SA), retard de croissance et discordance pondérale, pré-éclampsie et diabète gestationnel maternels, hydramnios, malformations (2 fois plus fréquentes chez les monozygotes), mortalité périnatale multipliée par 4 à 6, et par 2 encore pour les monochoriales par rapport aux bichoriales. Le suivi est mensuel pour les bichoriales et bimensuel (toutes les 2 semaines) pour les monochoriales à partir de 16 SA. L'accouchement est programmé vers 38-39 SA pour les bichoriales, 36-37 SA pour les monochoriales biamniotiques et 32-34 SA pour les monoamniotiques.</div>`
            },
            {
              titre: "Complications spécifiques des grossesses monochoriales",
              contenu: `<h4>Le syndrome transfuseur-transfusé (STT)</h4>
<p>Il complique <strong>10 à 15 %</strong> des grossesses monochoriales biamniotiques et résulte d'un <strong>déséquilibre hémodynamique chronique</strong> à travers des anastomoses <strong>artério-veineuses</strong> profondes unidirectionnelles non compensées : le sang d'un jumeau (le <strong>donneur</strong> ou transfuseur) passe dans la circulation de l'autre (le <strong>receveur</strong> ou transfusé).</p>
<ul>
<li>Le <strong>donneur</strong> est <strong>hypovolémique</strong>, anémique, en retard de croissance ; il réduit sa diurèse : <strong>oligoamnios</strong> (jumeau « coincé » contre la paroi, stuck twin), vessie non visible, Doppler ombilical anormal.</li>
<li>Le <strong>receveur</strong> est <strong>hypervolémique</strong>, polyglobulique, polyurique : <strong>hydramnios</strong>, grosse vessie, surcharge cardiaque (cardiomégalie, insuffisance tricuspide, hypertension), évoluant vers l'anasarque et la mort in utero.</li>
</ul>
<p>Le diagnostic échographique repose sur la séquence oligoamnios / hydramnios (plus grande citerne inférieure à 2 cm chez l'un et supérieure à 8 cm chez l'autre) entre 16 et 26 SA ; la classification de Quintero en 5 stades guide le traitement. Sans traitement, la mortalité dépasse 80 à 90 %. Le traitement de référence est la <strong>coagulation laser fœtoscopique des anastomoses</strong> sur la plaque choriale (survie d'au moins un jumeau dans 80 à 90 % des cas), ou les amniodrainages répétés. La mort d'un jumeau expose le survivant à une exsanguination aiguë dans la circulation du mort (anémie, lésions cérébrales ischémiques dans 20 à 30 % des cas).</p>
<h4>La séquence anémie-polyglobulie (TAPS)</h4>
<p>Forme chronique sans discordance de liquide amniotique, par anastomoses de très petit calibre : un jumeau anémique, l'autre polyglobulique ; diagnostic par Doppler de l'artère cérébrale moyenne (pic de vitesse systolique).</p>
<h4>Le retard de croissance sélectif</h4>
<p>Partage inégal du placenta (insertion marginale ou vélamenteuse du cordon du plus petit) : discordance de poids supérieure à 20 à 25 %, avec risque de mort du petit jumeau et de lésions chez le survivant.</p>
<h4>Le jumeau acardiaque (séquence TRAP)</h4>
<p>Twin reversed arterial perfusion : par une anastomose artério-artérielle, un jumeau (la « pompe ») perfuse à contre-courant l'autre, dont le cœur ne se développe pas (<strong>acardiaque</strong>) et dont la partie supérieure du corps est atrophique (acéphale). Le jumeau pompe est menacé d'insuffisance cardiaque. Traitement par occlusion du cordon de l'acardiaque. Fréquence : 1 % des monochoriales.</p>
<h4>Les complications des grossesses monoamniotiques</h4>
<p>L'<strong>enchevêtrement des cordons</strong> (quasi constant) et les nœuds entre les deux cordons sont responsables d'une mortalité de 10 à 20 % par compression funiculaire aiguë, d'où une surveillance rapprochée et une naissance programmée par césarienne vers 32-34 SA.</p>
<h4>Le jumeau évanescent et le fœtus papyracé</h4>
<p>Dans 20 à 30 % des grossesses gémellaires diagnostiquées très tôt, l'un des embryons disparaît au premier trimestre (<strong>jumeau évanescent</strong>, vanishing twin), résorbé sans conséquence pour le survivant. Une mort plus tardive laisse un <strong>fœtus papyracé</strong>, aplati et momifié contre les membranes, retrouvé à l'accouchement.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> dans le syndrome transfuseur-transfusé, le <strong>donneur</strong> est petit avec <strong>oligoamnios</strong> et le <strong>receveur</strong> est gros avec <strong>hydramnios</strong> et insuffisance cardiaque ; le pronostic est mauvais pour les deux, et c'est souvent le receveur, surchargé, qui meurt le premier. Le STT ne survient que dans les grossesses <strong>monochoriales</strong> (anastomoses).</div>`
            },
            {
              titre: "Les jumeaux conjoints",
              contenu: `<p>Les <strong>jumeaux conjoints</strong> (siamois) résultent d'une <strong>division incomplète</strong> du disque embryonnaire après le 13<sup>e</sup> jour, au moment de l'apparition de la ligne primitive : deux lignes primitives se forment sur un disque trop petit pour permettre une séparation complète, ou deux axes embryonnaires fusionnent secondairement (hypothèse de la fusion). Ils sont toujours <strong>monozygotes, monochoriaux et monoamniotiques</strong>, et donc toujours de même sexe (70 % de filles). Fréquence : 1/50 000 à 1/100 000 naissances (1/200 grossesses monozygotes), 40 % de morts in utero et 35 % de décès dans les premières 24 heures.</p>
<p>On les classe selon la région d'union (suffixe « -pages », du grec « fixé ») :</p>
<table>
<thead><tr><th>Type</th><th>Région d'union</th><th>Fréquence</th><th>Remarques</th></tr></thead>
<tbody>
<tr><td><strong>Thoracopages</strong></td><td>Thorax (face à face)</td><td>40 % (le plus fréquent)</td><td>Cœur souvent partagé (75 %), foie fusionné : séparation très difficile</td></tr>
<tr><td><strong>Omphalopages</strong></td><td>Abdomen (région ombilicale)</td><td>30 %</td><td>Foie partagé, cordon unique ; séparation souvent possible</td></tr>
<tr><td><strong>Pygopages</strong></td><td>Sacrum, dos à dos</td><td>18 %</td><td>Partage du rectum, du sacrum, parfois de la moelle</td></tr>
<tr><td><strong>Ischiopages</strong></td><td>Bassin</td><td>6 %</td><td>Partage du bassin, des organes génito-urinaires</td></tr>
<tr><td><strong>Craniopages</strong></td><td>Crâne</td><td>2 à 6 %</td><td>Partage éventuel des sinus veineux et du cerveau</td></tr>
<tr><td><strong>Céphalopages, rachipages</strong></td><td>Tête et face, colonne vertébrale</td><td>Rares</td><td>Non séparables</td></tr>
<tr><td><strong>Parasites</strong></td><td>Jumeau incomplet rattaché à un jumeau complet (autosite)</td><td>Rares</td><td>Formes asymétriques ; <strong>fœtus in fetu</strong> (jumeau inclus dans l'abdomen de l'autre, à distinguer d'un tératome)</td></tr>
</tbody>
</table>
<p>Le diagnostic est échographique au premier trimestre (absence de cloison, position fixe des fœtus l'un par rapport à l'autre, continuité des contours cutanés, cordon unique à plus de 3 vaisseaux). La prise en charge dépend des organes partagés : interruption médicale de grossesse, ou naissance par césarienne programmée suivie d'une séparation chirurgicale lorsqu'elle est possible (omphalopages surtout).</p>
<h4>Autres grossesses multiples</h4>
<p>Les <strong>triplés</strong> et plus résultent le plus souvent de l'AMP (polyovulation ou transferts multiples) et combinent les mécanismes : par exemple, deux ovocytes fécondés dont l'un se divise (triplés « dizygotes » avec une paire de monozygotes). La <strong>superfécondation</strong> (fécondation de deux ovocytes du même cycle par des spermatozoïdes de deux rapports différents, voire de deux pères) est possible ; la <strong>superfétation</strong> (fécondation au cours d'une grossesse déjà en cours) est exceptionnelle chez l'humain.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> pour réduire le risque de grossesses multiples en AMP, la politique actuelle est le <strong>transfert d'un seul embryon</strong> (eSET) et la limitation du nombre de follicules en stimulation simple. Le nombre de grossesses triples a ainsi fortement diminué depuis les années 2000.</div>`
            }
          ],
          points_cles: [
            "Les grossesses gémellaires représentent 1/80 à 1/90 naissances spontanées (1,5 à 1,7 % avec l'AMP) ; deux tiers sont dizygotes, un tiers monozygotes.",
            "Les dizygotes résultent de deux ovocytes fécondés par deux spermatozoïdes ; leur fréquence dépend de l'hérédité, de l'âge maternel, de l'ethnie et des inducteurs de l'ovulation ; ils sont toujours bichoriaux biamniotiques et peuvent être de sexes différents.",
            "Les monozygotes résultent de la division d'un seul zygote ; fréquence constante (3,5-4/1 000), même génome et même sexe ; leur placentation dépend du moment de la division.",
            "Division J0-J3 : bichoriale biamniotique (25-30 %) ; J4-J8 : monochoriale biamniotique (70-75 %) ; J8-J13 : monochoriale monoamniotique (1-2 %) ; après J13 : jumeaux conjoints.",
            "Toute grossesse monochoriale est monozygote ; une grossesse bichoriale peut être dizygote ou monozygote ; des sexes différents imposent la dizygotie.",
            "La chorionicité se détermine à l'échographie du 1er trimestre : signe du lambda et cloison épaisse (bichoriale) ou signe du T et cloison fine (monochoriale).",
            "Les placentas monochoriaux comportent des anastomoses vasculaires (95 %) responsables du syndrome transfuseur-transfusé (10-15 % des monochoriales biamniotiques) : donneur petit avec oligoamnios, receveur gros avec hydramnios et insuffisance cardiaque ; traitement par laser fœtoscopique.",
            "Autres complications monochoriales : séquence TAPS, retard de croissance sélectif, jumeau acardiaque (TRAP), enchevêtrement des cordons dans les monoamniotiques.",
            "Les jumeaux conjoints (1/50 000 à 1/100 000) sont monozygotes monoamniotiques, classés selon la région d'union : thoracopages (40 %), omphalopages, pygopages, ischiopages, craniopages."
          ],
          lexique: [
            { terme: "Jumeaux dizygotes", def: "Jumeaux issus de deux ovocytes fécondés par deux spermatozoïdes au cours du même cycle ; génétiquement différents, toujours bichoriaux biamniotiques." },
            { terme: "Jumeaux monozygotes", def: "Jumeaux issus de la division d'un seul zygote ; génétiquement identiques, de même sexe ; placentation variable selon la date de division." },
            { terme: "Chorionicité", def: "Nombre de chorions (donc de placentas) d'une grossesse multiple : bichoriale ou monochoriale ; principal facteur pronostique." },
            { terme: "Amnionicité", def: "Nombre de cavités amniotiques : biamniotique ou monoamniotique." },
            { terme: "Signe du lambda", def: "Projection triangulaire de tissu chorial à la base de la cloison inter-amniotique, signant une grossesse bichoriale à l'échographie du 1er trimestre." },
            { terme: "Signe du T", def: "Insertion à angle droit d'une cloison fine sur le placenta, signant une grossesse monochoriale biamniotique." },
            { terme: "Syndrome transfuseur-transfusé", def: "Complication des grossesses monochoriales par anastomoses artério-veineuses déséquilibrées : donneur hypovolémique avec oligoamnios, receveur hypervolémique avec hydramnios." },
            { terme: "Séquence TRAP", def: "Twin reversed arterial perfusion : jumeau acardiaque perfusé à contre-courant par un jumeau pompe via une anastomose artério-artérielle." },
            { terme: "Jumeaux conjoints", def: "Jumeaux monozygotes unis par une partie du corps, par division incomplète du disque embryonnaire après le 13e jour." },
            { terme: "Fœtus papyracé", def: "Jumeau mort in utero, aplati et momifié contre les membranes, découvert à l'accouchement." }
          ],
          qcm: [
            {
              q: "Concernant les jumeaux dizygotes :",
              options: [
                "A. Ils représentent environ deux tiers des grossesses gémellaires.",
                "B. Ils résultent de la division précoce d'un zygote unique.",
                "C. Ils peuvent être de sexes différents.",
                "D. Leur fréquence augmente avec l'âge maternel et les inducteurs de l'ovulation.",
                "E. Ils sont toujours bichoriaux biamniotiques."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : ils résultent de la fécondation de deux ovocytes différents par deux spermatozoïdes."
            },
            {
              q: "Concernant les jumeaux monozygotes :",
              options: [
                "A. Leur fréquence est constante dans toutes les populations.",
                "B. Ils sont toujours de même sexe.",
                "C. Ils sont toujours monochoriaux.",
                "D. La placentation la plus fréquente est monochoriale biamniotique.",
                "E. Une division entre J4 et J8 aboutit à une grossesse monochoriale biamniotique."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : une division avant J3 (25-30 % des cas) donne une grossesse bichoriale biamniotique."
            },
            {
              q: "Concernant la relation entre date de division et placentation :",
              options: [
                "A. Une division au stade 2 cellules donne deux placentas.",
                "B. Une division du bouton embryonnaire au stade blastocyste donne un placenta unique et deux cavités amniotiques.",
                "C. Une division après la formation de la cavité amniotique (J8-J13) donne une grossesse monochoriale monoamniotique.",
                "D. Les jumeaux conjoints résultent d'une division survenue avant le 5e jour.",
                "E. La grossesse monochoriale monoamniotique représente environ 50 % des grossesses monozygotes."
              ],
              bonnes: [0, 1, 2],
              explication: "A, B et C sont vraies. D est fausse : les jumeaux conjoints résultent d'une division incomplète après le 13e jour. E est fausse : elle ne représente que 1 à 2 % des monozygotes."
            },
            {
              q: "Concernant le diagnostic de chorionicité :",
              options: [
                "A. Il doit être réalisé de préférence à l'échographie du premier trimestre.",
                "B. Le signe du lambda indique une grossesse monochoriale.",
                "C. Une cloison inter-amniotique fine insérée en T évoque une grossesse monochoriale biamniotique.",
                "D. Deux fœtus de sexes différents permettent d'affirmer la dizygotie.",
                "E. Une grossesse monochoriale a un pronostic meilleur qu'une grossesse bichoriale."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le signe du lambda indique une grossesse bichoriale. E est fausse : les grossesses monochoriales ont une morbi-mortalité plus élevée (anastomoses, STT)."
            },
            {
              q: "Concernant le syndrome transfuseur-transfusé :",
              options: [
                "A. Il survient dans les grossesses bichoriales.",
                "B. Il résulte d'anastomoses artério-veineuses placentaires déséquilibrées.",
                "C. Le jumeau donneur présente un hydramnios.",
                "D. Le jumeau receveur est exposé à l'insuffisance cardiaque.",
                "E. Le traitement de référence est la coagulation laser fœtoscopique des anastomoses."
              ],
              bonnes: [1, 3, 4],
              explication: "A est fausse : il ne survient que dans les grossesses monochoriales. B, D et E sont vraies. C est fausse : le donneur, hypovolémique, présente un oligoamnios ; c'est le receveur qui a un hydramnios."
            },
            {
              q: "Concernant les jumeaux conjoints :",
              options: [
                "A. Ils sont toujours monozygotes.",
                "B. Ils sont monochoriaux monoamniotiques.",
                "C. Les thoracopages sont la forme la plus fréquente.",
                "D. Ils peuvent être de sexes différents.",
                "E. Leur fréquence est d'environ 1 naissance sur 80."
              ],
              bonnes: [0, 1, 2],
              explication: "A, B et C sont vraies. D est fausse : étant monozygotes, ils sont toujours de même sexe. E est fausse : leur fréquence est de 1/50 000 à 1/100 000 ; 1/80 est la fréquence des grossesses gémellaires en général."
            }
          ]
        },
        {
          id: "periode-foetale",
          titre: "La période fœtale",
          duree: 35,
          objectifs: [
            "Connaître les repères de croissance du fœtus (taille, poids) au cours des trimestres.",
            "Décrire les grandes étapes de la maturation des organes mois par mois.",
            "Décrire la circulation fœtale et ses trois shunts (canal d'Arantius, foramen ovale, canal artériel).",
            "Expliquer les adaptations cardio-respiratoires à la naissance et le devenir des shunts.",
            "Connaître les particularités du métabolisme et de l'hématopoïèse fœtale."
          ],
          sections: [
            {
              titre: "Caractères généraux de la période fœtale",
              contenu: `<p>La <strong>période fœtale</strong> s'étend du début de la <strong>9<sup>e</sup> semaine de développement</strong> (11 SA) à la naissance (38 SD, 40 SA). Toutes les ébauches d'organes étant en place à la fin de la période embryonnaire, elle est dominée par deux phénomènes : la <strong>croissance</strong> (en longueur surtout aux 2<sup>e</sup> trimestre, en poids surtout au 3<sup>e</sup>) et la <strong>maturation</strong> histologique et fonctionnelle des organes (différenciation tissulaire, mise en route des fonctions). Les changements de forme sont modestes par rapport à la période embryonnaire, mais les proportions évoluent : la tête, qui représente la moitié de la longueur à 9 semaines, n'en représente plus qu'un quart à la naissance.</p>
<p>La croissance fœtale dépend de facteurs <strong>génétiques</strong> (taille des parents, sexe), <strong>placentaires</strong> (débit utéro-placentaire, surface d'échange) et <strong>maternels</strong> (nutrition, tabac, pathologies), ainsi que d'hormones fœtales : l'<strong>insuline</strong> et les <strong>IGF (IGF-1 et IGF-2)</strong> sont les principaux facteurs de croissance fœtaux ; l'hormone de croissance a peu de rôle avant la naissance (les enfants déficients en GH ont une taille de naissance normale) ; les hormones thyroïdiennes sont indispensables à la maturation cérébrale et osseuse.</p>
<table>
<thead><tr><th>Âge</th><th>Longueur vertex-coccyx (LCC)</th><th>Longueur totale (vertex-talon)</th><th>Poids</th></tr></thead>
<tbody>
<tr><td>8 SD (10 SA, fin de la période embryonnaire)</td><td>30 mm</td><td>—</td><td>8 g</td></tr>
<tr><td>12 SD (14 SA, fin du 1<sup>er</sup> trimestre)</td><td>8 cm</td><td>12 cm</td><td>45 g</td></tr>
<tr><td>16 SD (18 SA)</td><td>12 cm</td><td>18 cm</td><td>200 g</td></tr>
<tr><td>20 SD (22 SA, seuil de viabilité OMS)</td><td>16 cm</td><td>25 cm</td><td>450 à 500 g</td></tr>
<tr><td>24 SD (26 SA, fin du 2<sup>e</sup> trimestre)</td><td>21 cm</td><td>32 cm</td><td>800 à 1 000 g</td></tr>
<tr><td>28 SD (30 SA)</td><td>25 cm</td><td>38 cm</td><td>1 500 g</td></tr>
<tr><td>32 SD (34 SA)</td><td>29 cm</td><td>43 cm</td><td>2 300 g</td></tr>
<tr><td>36 SD (38 SA)</td><td>33 cm</td><td>48 cm</td><td>3 000 g</td></tr>
<tr><td>38 SD (40 SA, terme)</td><td>35 cm</td><td>50 cm</td><td>3 300 à 3 500 g</td></tr>
</tbody>
</table>
<p>La prise de poids est de 5 g par jour à 20 SA, 15 à 20 g par jour à 28 SA et 30 à 35 g par jour en fin de grossesse ; le fœtus prend la moitié de son poids de naissance au cours des deux derniers mois. La <strong>règle de Haase</strong> permet d'estimer approximativement la longueur totale en cm : au cours des 5 premiers mois, le carré du mois (1<sup>er</sup> mois : 1 cm, 3<sup>e</sup> mois : 9 cm, 5<sup>e</sup> mois : 25 cm), puis le mois multiplié par 5 (6<sup>e</sup> mois : 30 cm, 9<sup>e</sup> mois : 45 cm, 10<sup>e</sup> mois lunaire : 50 cm).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la croissance est surveillée par les <strong>biométries échographiques</strong> : LCC au 1<sup>er</sup> trimestre (datation), puis diamètre bipariétal, périmètre crânien, périmètre abdominal et longueur fémorale aux échographies de 22 et 32 SA (estimation de poids fœtal). Un <strong>retard de croissance intra-utérin</strong> (poids inférieur au 10<sup>e</sup> percentile avec arrêt de croissance) peut être d'origine vasculaire (insuffisance placentaire : RCIU dysharmonieux, tardif, épargnant le périmètre crânien) ou constitutionnel, infectieux, chromosomique ou toxique (RCIU harmonieux, précoce). La <strong>macrosomie</strong> (poids supérieur à 4 000 g ou au 90<sup>e</sup> percentile) est la conséquence classique du diabète maternel (hyperinsulinisme fœtal).</div>`
            },
            {
              titre: "Chronologie de la maturation des organes",
              contenu: `<table>
<thead><tr><th>Période</th><th>Événements principaux</th></tr></thead>
<tbody>
<tr><td><strong>9<sup>e</sup>-12<sup>e</sup> semaines</strong> (3<sup>e</sup> mois)</td><td>Tête encore volumineuse (moitié de la LCC) ; les paupières fusionnent (10<sup>e</sup> semaine) ; <strong>réintégration des anses intestinales</strong> dans l'abdomen (10<sup>e</sup> semaine) ; les <strong>organes génitaux externes</strong> deviennent reconnaissables (12<sup>e</sup> semaine, sexe déterminable à l'échographie dès 12-14 SA) ; <strong>début de la production d'urine</strong> (9<sup>e</sup>-10<sup>e</sup> semaine) ; l'hématopoïèse hépatique est prédominante, la rate s'y associe ; apparition des centres d'ossification primaires dans la plupart des os longs et du crâne ; premiers mouvements fœtaux visibles à l'échographie (non perçus) ; ébauches des ongles ; le fœtus déglutit du liquide amniotique.</td></tr>
<tr><td><strong>13<sup>e</sup>-16<sup>e</sup> semaines</strong> (4<sup>e</sup> mois)</td><td>Croissance rapide ; les yeux se rapprochent (face plus humaine), les oreilles prennent leur position définitive ; les membres inférieurs s'allongent ; <strong>ossification active</strong> (squelette visible à la radiographie) ; mouvements coordonnés ; différenciation des ovaires (follicules primordiaux) ; apparition du <strong>lanugo</strong> et des cheveux ; le fœtus urine et déglutit ; début de la myélinisation de la moelle.</td></tr>
<tr><td><strong>17<sup>e</sup>-20<sup>e</sup> semaines</strong> (5<sup>e</sup> mois)</td><td><strong>Mouvements actifs perçus par la mère</strong> (18-20 SA chez la primipare, 16-18 SA chez la multipare) ; <strong>vernix caseosa</strong> (sécrétion sébacée protectrice) et lanugo recouvrent la peau ; sourcils, cils ; <strong>graisse brune</strong> (nuque, région interscapulaire, périrénale) ; testicules en voie de descente (canal inguinal) ; <strong>stock définitif d'ovocytes</strong> (maximum de 7 millions à 20 semaines) ; bruits du cœur audibles au stéthoscope ; début de la formation de la <strong>myéline</strong> dans l'encéphale.</td></tr>
<tr><td><strong>21<sup>e</sup>-25<sup>e</sup> semaines</strong> (6<sup>e</sup> mois)</td><td>Prise de poids notable mais fœtus encore maigre, peau ridée, rouge et translucide (vaisseaux visibles) ; <strong>début de la sécrétion de surfactant</strong> par les pneumocytes II (vers 24 SA, en quantité insuffisante) ; mouvements respiratoires ; réponse aux sons ; <strong>ongles</strong> formés ; empreintes digitales ; le fœtus peut survivre en cas de naissance prématurée au prix d'une réanimation lourde (viabilité à partir de 22-24 SA et 500 g).</td></tr>
<tr><td><strong>26<sup>e</sup>-29<sup>e</sup> semaines</strong> (7<sup>e</sup> mois)</td><td><strong>Réouverture des paupières</strong> (26<sup>e</sup> semaine), réflexe pupillaire ; développement de la <strong>graisse sous-cutanée blanche</strong> ; le système nerveux central contrôle les mouvements respiratoires rythmiques et la température ; l'hématopoïèse passe à la <strong>moelle osseuse</strong> (prédominante à partir du 7<sup>e</sup> mois) ; les poumons et les vaisseaux pulmonaires sont suffisamment développés pour permettre des échanges gazeux ; la rate cesse son hématopoïèse ; le prématuré a de bonnes chances de survie.</td></tr>
<tr><td><strong>30<sup>e</sup>-34<sup>e</sup> semaines</strong> (8<sup>e</sup> mois)</td><td>Peau rose et lisse, membres potelés ; descente des <strong>testicules dans le scrotum</strong> (achevée vers 32-34 semaines dans 97 % des cas à terme) ; <strong>surfactant en quantité suffisante</strong> à partir de 34-35 SA ; réflexe de succion ; cycles veille-sommeil ; retournement en présentation céphalique.</td></tr>
<tr><td><strong>35<sup>e</sup>-38<sup>e</sup> semaines</strong> (9<sup>e</sup> mois)</td><td>Le fœtus occupe tout l'utérus, mouvements moins amples ; disparition du lanugo (sauf épaules) ; <strong>stockage du glycogène</strong> hépatique et des graisses (le fœtus à terme a 16 % de graisse) ; ongles dépassant l'extrémité des doigts ; périmètre crânien 35 cm ; circonférence thoracique inférieure à la circonférence céphalique ; <strong>points d'ossification</strong> de l'extrémité inférieure du fémur (Béclard, 36 SA) et supérieure du tibia (Todt, 38-40 SA), témoins de la maturité ; maturation pulmonaire achevée.</td></tr>
</tbody>
</table>
<h4>Les fonctions fœtales</h4>
<ul>
<li><strong>Rein</strong> : urine produite dès 9-10 semaines, 500 à 1 000 mL/j à terme ; l'épuration est assurée par le placenta, le rein fœtal produit une urine hypotonique et contribue surtout au liquide amniotique.</li>
<li><strong>Tube digestif</strong> : déglutition dès 12 semaines ; le <strong>méconium</strong> (débris cellulaires, bile, mucus, lanugo dégluti) s'accumule dans le côlon et n'est émis qu'après la naissance (sauf souffrance fœtale).</li>
<li><strong>Système nerveux</strong> : mouvements dès 8 semaines, réflexes de succion et de déglutition, audition fonctionnelle vers 24-26 SA, cycles d'activité ; la myélinisation débute au 5<sup>e</sup> mois et se poursuit jusqu'à l'adolescence.</li>
<li><strong>Système endocrinien</strong> : thyroïde fonctionnelle vers 12 semaines (indispensable au cerveau : l'hypothyroïdie congénitale est dépistée à la naissance) ; surrénales fœtales très volumineuses (zone fœtale, DHEA-S pour l'œstriol placentaire) ; pancréas sécrétant de l'insuline dès 12 semaines ; hypophyse fonctionnelle (ACTH, GH, TSH, LH, FSH) ; testicule sécrétant la testostérone dès 8 semaines.</li>
<li><strong>Immunité</strong> : thymus colonisé dès 10 semaines, lymphocytes B produisant des IgM dès 20 semaines (les IgM présentes à la naissance signent une infection congénitale) ; les IgG sont maternelles.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> repères : urine à 10 semaines, sexe visible à 12 semaines, mouvements perçus à 18-20 SA, surfactant débutant à 24 SA et suffisant à 34-35 SA, paupières fermées de 10 à 26 semaines, testicules dans le scrotum à 32-34 semaines, point de Béclard à 36 SA. Hématopoïèse : vésicule vitelline (3<sup>e</sup>-8<sup>e</sup> semaine), foie (6<sup>e</sup> semaine au 7<sup>e</sup> mois, maximal au 5<sup>e</sup> mois), rate, puis moelle osseuse (à partir du 4<sup>e</sup>-5<sup>e</sup> mois, prédominante au 7<sup>e</sup> mois).</div>`
            },
            {
              titre: "La circulation fœtale",
              contenu: `<p>La circulation fœtale est adaptée à une situation où les <strong>poumons ne fonctionnent pas</strong> (remplis de liquide, à très haute résistance vasculaire par vasoconstriction hypoxique) et où l'<strong>oxygénation est assurée par le placenta</strong>. Elle est caractérisée par une circulation <strong>en parallèle</strong> (les deux ventricules éjectent dans la circulation systémique) grâce à <strong>trois shunts</strong> : le canal d'Arantius, le foramen ovale et le canal artériel.</p>
<h4>Le trajet du sang</h4>
<ol>
<li>Le sang <strong>oxygéné</strong> (saturation 80 à 85 %, PO<sub>2</sub> 30-35 mmHg) quitte le placenta par la <strong>veine ombilicale</strong> et pénètre dans le fœtus à l'ombilic, gagne le foie dans le ligament falciforme.</li>
<li>Au niveau du foie, environ <strong>50 à 60 %</strong> du sang court-circuite les sinusoïdes hépatiques par le <strong>canal veineux d'Arantius</strong> (ductus venosus), qui relie la veine ombilicale à la <strong>veine cave inférieure</strong> ; le reste traverse le foie (veine porte gauche, sinusoïdes, veines sus-hépatiques).</li>
<li>Dans la <strong>veine cave inférieure</strong>, le sang ombilical oxygéné se mélange partiellement au sang désaturé des membres inférieurs et des reins, mais un flux préférentiel (grâce à la vitesse élevée du jet du canal d'Arantius et à la valvule d'Eustachi) dirige le sang oxygéné vers l'<strong>atrium droit</strong> puis, à travers le <strong>foramen ovale</strong> (trou de Botal), vers l'<strong>atrium gauche</strong> : c'est le second shunt. Ce sang passe dans le <strong>ventricule gauche</strong> et l'<strong>aorte ascendante</strong>, et irrigue en priorité les <strong>coronaires</strong>, la <strong>tête</strong> et les <strong>membres supérieurs</strong> (saturation 65 %) : le cerveau reçoit le sang le mieux oxygéné.</li>
<li>Le sang désaturé de la <strong>veine cave supérieure</strong> (retour de la tête et des membres supérieurs, saturation 40 %) traverse l'atrium droit en direction de la <strong>valve tricuspide</strong>, du <strong>ventricule droit</strong> et du <strong>tronc pulmonaire</strong>. Les poumons collabés n'en reçoivent que <strong>10 à 15 %</strong> ; <strong>85 à 90 %</strong> passent par le <strong>canal artériel</strong> (ductus arteriosus), qui relie le tronc pulmonaire à l'<strong>aorte descendante</strong> juste après la naissance de l'artère sous-clavière gauche : c'est le troisième shunt.</li>
<li>L'<strong>aorte descendante</strong> contient donc un sang de saturation intermédiaire (55 à 60 %) qui irrigue le tronc, les viscères abdominaux et les membres inférieurs, et retourne pour 40 % du débit au placenta par les <strong>deux artères ombilicales</strong>, branches des artères iliaques internes.</li>
</ol>
<table>
<thead><tr><th>Shunt</th><th>Relie</th><th>Court-circuite</th><th>Devenir après la naissance</th><th>Vestige adulte</th></tr></thead>
<tbody>
<tr><td><strong>Canal veineux d'Arantius</strong></td><td>Veine ombilicale à veine cave inférieure</td><td>Le foie</td><td>Fermeture fonctionnelle dans les heures suivant la ligature du cordon, anatomique en 1 à 3 semaines</td><td><strong>Ligament veineux</strong> du foie</td></tr>
<tr><td><strong>Foramen ovale</strong> (trou de Botal)</td><td>Atrium droit à atrium gauche</td><td>Le ventricule droit et les poumons</td><td>Fermeture fonctionnelle dès les premières respirations (inversion des pressions atriales), anatomique en quelques mois à 1 an (fusion du septum primum sur le septum secundum)</td><td><strong>Fosse ovale</strong> ; perméable à la sonde chez 20 à 25 % des adultes</td></tr>
<tr><td><strong>Canal artériel</strong></td><td>Tronc pulmonaire à aorte descendante</td><td>Les poumons</td><td>Fermeture fonctionnelle en 10 à 15 heures (constriction par la hausse de PO<sub>2</sub> et la chute des prostaglandines), anatomique en 2 à 3 semaines (fibrose)</td><td><strong>Ligament artériel</strong></td></tr>
<tr><td>Veine ombilicale</td><td>Placenta à foie</td><td>—</td><td>Oblitération</td><td><strong>Ligament rond</strong> du foie</td></tr>
<tr><td>Artères ombilicales</td><td>Artères iliaques internes à placenta</td><td>—</td><td>Oblitération de la partie distale ; la partie proximale persiste (artères vésicales supérieures)</td><td><strong>Ligaments ombilicaux médiaux</strong></td></tr>
</tbody>
</table>
<p>Caractéristiques hémodynamiques : fréquence cardiaque fœtale de <strong>110 à 160 battements par minute</strong> ; débit cardiaque combiné de 400 à 500 mL/min/kg, dont environ 60 % éjectés par le ventricule <strong>droit</strong> (dominant chez le fœtus, d'où l'hypertrophie ventriculaire droite physiologique du nouveau-né) ; pression artérielle de 50 à 70 mmHg à terme ; résistances pulmonaires élevées et résistances systémiques basses (placenta).</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le sang le <strong>plus oxygéné</strong> du fœtus est dans la <strong>veine ombilicale</strong> (85 %), puis dans le canal d'Arantius, la veine cave inférieure, l'atrium gauche et l'aorte ascendante ; le sang le moins oxygéné est dans la veine cave supérieure et les <strong>artères ombilicales</strong> (55-60 %). Le foramen ovale est un passage de <strong>droite à gauche</strong> chez le fœtus. Le canal artériel va du <strong>tronc pulmonaire vers l'aorte</strong> chez le fœtus (le flux s'inverse transitoirement à la naissance avant la fermeture).</div>`
            },
            {
              titre: "L'adaptation à la naissance",
              contenu: `<p>La naissance impose en quelques minutes un passage de la circulation fœtale en parallèle à la circulation adulte en série, avec mise en route de la respiration pulmonaire. Deux événements déclenchent la transition : les <strong>premières inspirations</strong> et la <strong>ligature du cordon</strong> (suppression de la circulation placentaire).</p>
<h4>Modifications respiratoires</h4>
<ul>
<li>Le <strong>premier cri</strong> survient dans les 30 à 60 secondes, déclenché par l'hypoxie et l'hypercapnie relatives, l'acidose, le refroidissement, les stimulations tactiles et la compression thoracique lors du passage de la filière. Les premières inspirations génèrent une pression négative de 40 à 80 cmH<sub>2</sub>O qui déplisse les alvéoles.</li>
<li>Le <strong>liquide pulmonaire</strong> (30 mL/kg) est expulsé par la bouche (compression thoracique) et surtout résorbé par les capillaires et lymphatiques pulmonaires (stimulé par les catécholamines qui activent les canaux sodiques épithéliaux).</li>
<li>Le <strong>surfactant</strong> (phospholipides, surtout dipalmitoyl-phosphatidylcholine, et protéines SP-A à SP-D, sécrété par les pneumocytes II) abaisse la tension superficielle et empêche le collapsus alvéolaire en fin d'expiration (établissement de la capacité résiduelle fonctionnelle).</li>
</ul>
<h4>Modifications circulatoires</h4>
<ol>
<li>L'expansion pulmonaire et l'<strong>élévation de la PO<sub>2</sub></strong> alvéolaire lèvent la vasoconstriction hypoxique : les <strong>résistances vasculaires pulmonaires chutent</strong> brutalement (d'un facteur 5 à 10), le débit pulmonaire est multiplié par 8 à 10 ; la pression dans l'atrium gauche (retour veineux pulmonaire) s'élève.</li>
<li>La <strong>ligature du cordon</strong> supprime le lit vasculaire placentaire à basse résistance : les <strong>résistances systémiques augmentent</strong>, la pression aortique s'élève ; le retour veineux par la veine cave inférieure diminue, et la pression dans l'atrium droit baisse.</li>
<li>L'inversion du gradient de pression entre les atria (pression gauche supérieure à la pression droite) plaque le <strong>septum primum</strong> (valvule) contre le <strong>septum secundum</strong> : <strong>fermeture fonctionnelle du foramen ovale</strong> dès les premières respirations ; la fusion anatomique survient en quelques mois (fosse ovale). Elle reste incomplète chez 20 à 25 % des adultes (foramen ovale perméable, sans shunt tant que les pressions gauches sont supérieures).</li>
<li>L'inversion des pressions entre l'aorte et le tronc pulmonaire inverse transitoirement le flux dans le <strong>canal artériel</strong> (de gauche à droite) ; la paroi musculaire du canal se <strong>contracte</strong> sous l'effet de l'augmentation de la PO<sub>2</sub> et de la chute des <strong>prostaglandines E2</strong> circulantes (d'origine placentaire, et dégradées par les poumons désormais perfusés), et de la bradykinine : fermeture fonctionnelle en <strong>10 à 15 heures</strong> (souffle systolique transitoire fréquent chez le nouveau-né), oblitération fibreuse définitive en 2 à 3 semaines (ligament artériel).</li>
<li>La disparition du flux ombilical entraîne la fermeture du <strong>canal d'Arantius</strong> (quelques heures à quelques jours) et l'oblitération des vaisseaux ombilicaux (contraction du muscle lisse, puis fibrose).</li>
</ol>
<p>La circulation devient ainsi <strong>en série</strong> : tout le débit du ventricule droit traverse les poumons, le ventricule gauche assume la circulation systémique et s'hypertrophie progressivement (inversion de la prédominance ventriculaire en quelques semaines). La saturation en oxygène atteint 90 % en 10 minutes et 95 % à une heure.</p>
<h4>Autres adaptations</h4>
<ul>
<li><strong>Thermorégulation</strong> : la perte thermique est brutale ; la <strong>graisse brune</strong> (thermogenèse sans frisson par la thermogénine UCP1 mitochondriale, stimulée par les catécholamines) est la principale source de chaleur.</li>
<li><strong>Métabolisme</strong> : arrêt des apports placentaires de glucose, mobilisation du <strong>glycogène hépatique</strong> (glucagon, catécholamines), lipolyse et cétogenèse ; nadir glycémique physiologique à 1-2 heures de vie, puis relais par l'alimentation (risque d'hypoglycémie chez le prématuré, l'hypotrophe et l'enfant de mère diabétique).</li>
<li><strong>Fonction rénale</strong> : filtration glomérulaire basse (immaturité), première miction dans les 24 heures.</li>
<li><strong>Hémoglobine</strong> : passage progressif de l'HbF (70 à 80 % à la naissance) à l'HbA (HbF inférieure à 2 % à 1 an) ; polyglobulie physiologique (hémoglobine 17 à 19 g/dL) puis anémie physiologique du 2<sup>e</sup>-3<sup>e</sup> mois ; <strong>ictère physiologique</strong> par hémolyse et immaturité de la glucuronoconjugaison hépatique.</li>
<li><strong>Tube digestif</strong> : émission du <strong>méconium</strong> dans les 24 à 48 heures ; colonisation bactérienne ; <strong>colostrum</strong> riche en IgA.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>persistance du canal artériel</strong> est fréquente chez le prématuré (immaturité de la réponse à l'oxygène, prostaglandines élevées) : shunt gauche-droite avec surcharge pulmonaire, souffle continu ; traitement par inhibiteurs de la synthèse des prostaglandines (ibuprofène, paracétamol) ou fermeture par cathétérisme ; à l'inverse, dans certaines cardiopathies ducto-dépendantes (atrésie pulmonaire, hypoplasie du cœur gauche), on <strong>maintient le canal ouvert</strong> par perfusion de prostaglandine E1 en attendant la chirurgie. La <strong>maladie des membranes hyalines</strong> du prématuré résulte du déficit en surfactant : prévention par la corticothérapie anténatale (bétaméthasone) en cas de menace d'accouchement avant 34 SA, traitement par surfactant exogène intratrachéal.</div>`
            },
            {
              titre: "Hématopoïèse et métabolisme fœtal",
              contenu: `<h4>L'hématopoïèse fœtale</h4>
<p>Elle se déroule en trois phases successives et chevauchantes :</p>
<ol>
<li><strong>Phase mésoblastique</strong> (vitelline), de la 3<sup>e</sup> à la 8<sup>e</sup>-10<sup>e</sup> semaine : îlots de Wolff et Pander de la vésicule vitelline ; érythroblastes <strong>nucléés</strong> (mégaloblastes primitifs) à hémoglobines <strong>embryonnaires</strong> (Gower 1 : zêta2-epsilon2 ; Gower 2 : alpha2-epsilon2 ; Portland : zêta2-gamma2). Les cellules souches hématopoïétiques définitives apparaissent dans la région AGM (aorte-gonades-mésonéphros) de l'embryon vers la 5<sup>e</sup> semaine.</li>
<li><strong>Phase hépatique</strong> (hépato-splénique), de la 6<sup>e</sup> semaine au 7<sup>e</sup> mois, maximale au <strong>5<sup>e</sup> mois</strong> : le foie est le principal organe hématopoïétique (ce qui explique sa taille relative : 10 % du poids du fœtus au 3<sup>e</sup> mois) ; la rate (du 3<sup>e</sup> au 7<sup>e</sup> mois) et le thymus (lymphocytes T) participent ; érythrocytes anucléés à <strong>hémoglobine fœtale</strong> (HbF, alpha2-gamma2), qui représente 90 % de l'hémoglobine à 6 mois de vie fœtale.</li>
<li><strong>Phase médullaire</strong>, à partir du 4<sup>e</sup>-5<sup>e</sup> mois, prédominante dès le 7<sup>e</sup> mois et exclusive après la naissance ; début de la synthèse d'<strong>HbA</strong> (alpha2-bêta2), qui ne représente que 20 à 30 % de l'hémoglobine à la naissance ; la commutation (switch) gamma vers bêta s'achève vers 6 mois à 1 an de vie post-natale.</li>
</ol>
<p>La <strong>numération</strong> fœtale évolue : hémoglobine de 10 g/dL à 20 SA à 17-19 g/dL à terme ; les leucocytes et les plaquettes atteignent des valeurs proches de l'adulte au 3<sup>e</sup> trimestre. Les <strong>groupes sanguins</strong> ABO et Rhésus sont exprimés dès la 6<sup>e</sup> semaine (antigène D) : les hématies fœtales Rh positif passant chez une mère Rh négatif peuvent entraîner une allo-immunisation anti-D, et les IgG anti-D maternelles, traversant le placenta, provoquent chez le fœtus suivant une <strong>anémie hémolytique</strong> (maladie hémolytique du nouveau-né, anasarque), prévenue par l'injection d'immunoglobulines anti-D à 28 SA et après l'accouchement.</p>
<h4>Le métabolisme fœtal</h4>
<ul>
<li>Le <strong>glucose</strong> est le substrat énergétique principal (environ 50 % des besoins), apporté par diffusion facilitée depuis la mère ; le fœtus ne fait pas de néoglucogenèse et stocke le glycogène (foie, muscles, cœur) au 3<sup>e</sup> trimestre.</li>
<li>Les <strong>acides aminés</strong> sont transportés activement et servent à la synthèse protéique et pour 25 % à la production d'énergie.</li>
<li>Le <strong>lactate</strong> placentaire est également utilisé.</li>
<li>Les <strong>lipides</strong> sont surtout synthétisés par le fœtus à partir du glucose ; les acides gras essentiels et le cholestérol passent en quantité limitée ; la graisse sous-cutanée s'accumule au 3<sup>e</sup> trimestre (de 1 % du poids à 24 SA à 16 % à terme).</li>
<li>Le fœtus a une <strong>consommation d'oxygène</strong> élevée (7 à 8 mL/min/kg, double de celle de l'adulte) malgré une PO<sub>2</sub> basse (« Everest in utero »), compensée par l'HbF, la polyglobulie et le débit cardiaque élevé.</li>
<li>La <strong>calcification</strong> du squelette nécessite un transfert actif de calcium et de phosphore (30 g de calcium, surtout au 3<sup>e</sup> trimestre), régulé par la PTH-related protein placentaire.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> hémoglobines : embryonnaires (Gower, Portland) jusqu'à 8-10 semaines, HbF (alpha2-gamma2) dominante pendant toute la vie fœtale (70-80 % à la naissance), HbA (alpha2-bêta2) majoritaire après 6 mois de vie. Sites : vésicule vitelline (3<sup>e</sup> semaine), foie (6<sup>e</sup> semaine, maximum au 5<sup>e</sup> mois), rate, moelle osseuse (prédominante au 7<sup>e</sup> mois).</div>`
            }
          ],
          points_cles: [
            "La période fœtale (9e à 38e semaine de développement) est marquée par la croissance et la maturation fonctionnelle des organes ; l'insuline et les IGF sont les principaux facteurs de croissance fœtaux.",
            "Repères : 30 mm et 8 g à 8 semaines ; 12 cm et 45 g à 12 semaines ; 25 cm et 500 g à 20 semaines (22 SA) ; 50 cm et 3 300-3 500 g à terme ; la moitié du poids est acquise dans les deux derniers mois.",
            "Chronologie : urine à 9-10 semaines, réintégration des anses à 10 semaines, sexe visible à 12 semaines, mouvements perçus à 18-20 SA, surfactant débutant à 24 SA et suffisant à 34-35 SA, paupières rouvertes à 26 semaines, testicules dans le scrotum à 32-34 semaines, point de Béclard à 36 SA.",
            "Circulation fœtale en parallèle avec trois shunts : canal d'Arantius (veine ombilicale vers veine cave inférieure, court-circuite le foie), foramen ovale (atrium droit vers atrium gauche), canal artériel (tronc pulmonaire vers aorte descendante, court-circuite les poumons).",
            "Le sang le plus oxygéné est dans la veine ombilicale (85 %) et irrigue préférentiellement le cœur et le cerveau via le foramen ovale et l'aorte ascendante ; les artères ombilicales ramènent au placenta un sang à 55-60 %.",
            "À la naissance, l'expansion pulmonaire fait chuter les résistances pulmonaires et la ligature du cordon augmente les résistances systémiques : inversion des pressions atriales (fermeture du foramen ovale), constriction du canal artériel par l'oxygène et la chute des prostaglandines (10-15 h), fermeture du canal d'Arantius.",
            "Vestiges : ligament veineux (Arantius), fosse ovale (foramen ovale, perméable chez 20-25 % des adultes), ligament artériel (canal artériel), ligament rond (veine ombilicale), ligaments ombilicaux médiaux (artères ombilicales).",
            "Hématopoïèse : vésicule vitelline (3e-8e semaine, Hb embryonnaires), foie (6e semaine au 7e mois, maximum au 5e mois, HbF), rate, moelle osseuse (prédominante au 7e mois, HbA) ; HbF 70-80 % à la naissance.",
            "Adaptations néonatales : premier cri, résorption du liquide pulmonaire, surfactant, thermogenèse par la graisse brune, mobilisation du glycogène, ictère physiologique ; persistance du canal artériel et maladie des membranes hyalines chez le prématuré."
          ],
          lexique: [
            { terme: "Période fœtale", def: "Période du développement allant de la 9e semaine de développement à la naissance, caractérisée par la croissance et la maturation des organes." },
            { terme: "Lanugo", def: "Fin duvet recouvrant la peau du fœtus à partir du 4e-5e mois et disparaissant avant le terme." },
            { terme: "Vernix caseosa", def: "Enduit gras protecteur de la peau fœtale, formé de sécrétions sébacées et de cellules desquamées, apparaissant au 5e mois." },
            { terme: "Canal d'Arantius", def: "Ductus venosus reliant la veine ombilicale à la veine cave inférieure en court-circuitant le foie ; devient le ligament veineux." },
            { terme: "Foramen ovale", def: "Orifice du septum interatrial (trou de Botal) permettant au sang oxygéné de passer de l'atrium droit à l'atrium gauche ; devient la fosse ovale." },
            { terme: "Canal artériel", def: "Ductus arteriosus reliant le tronc pulmonaire à l'aorte descendante en court-circuitant les poumons ; se ferme par l'oxygène et la chute des prostaglandines ; devient le ligament artériel." },
            { terme: "Surfactant", def: "Film tensioactif de phospholipides et de protéines sécrété par les pneumocytes II à partir de 24 SA (suffisant vers 34-35 SA), empêchant le collapsus alvéolaire." },
            { terme: "Hémoglobine fœtale (HbF)", def: "Hémoglobine alpha2-gamma2 prédominante pendant la vie fœtale, à forte affinité pour l'oxygène, remplacée par l'HbA après la naissance." },
            { terme: "Graisse brune", def: "Tissu adipeux thermogénique (UCP1) de la nuque, du dos et des régions périrénales, principale source de chaleur du nouveau-né." },
            { terme: "Point de Béclard", def: "Noyau d'ossification de l'extrémité inférieure du fémur apparaissant vers 36 SA, témoin de maturité fœtale." }
          ],
          qcm: [
            {
              q: "Concernant la croissance fœtale :",
              options: [
                "A. La période fœtale débute à la 9e semaine de développement.",
                "B. Le fœtus pèse environ 500 g à 22 SA.",
                "C. L'hormone de croissance est le principal facteur de croissance fœtal.",
                "D. Le fœtus acquiert la moitié de son poids de naissance au cours des deux derniers mois.",
                "E. À la naissance, la tête représente la moitié de la longueur du corps."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : l'insuline et les IGF sont les principaux facteurs de croissance fœtaux ; la GH a peu de rôle avant la naissance. E est fausse : la tête représente la moitié de la longueur à 9 semaines mais un quart à la naissance."
            },
            {
              q: "Concernant la chronologie de la maturation fœtale :",
              options: [
                "A. Le fœtus produit de l'urine dès la 9e-10e semaine.",
                "B. Les mouvements fœtaux sont perçus par la mère dès la 10e semaine.",
                "C. Le surfactant est produit en quantité suffisante à partir de 34-35 SA.",
                "D. Les paupières sont fermées entre la 10e et la 26e semaine environ.",
                "E. Les testicules descendent dans le scrotum au cours du 3e mois."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : les mouvements sont perçus vers 18-20 SA. E est fausse : la descente dans le scrotum s'achève vers 32-34 semaines."
            },
            {
              q: "Concernant la circulation fœtale :",
              options: [
                "A. Le canal d'Arantius relie la veine ombilicale à la veine cave inférieure.",
                "B. Le foramen ovale permet le passage du sang de l'atrium gauche vers l'atrium droit.",
                "C. Le canal artériel relie le tronc pulmonaire à l'aorte descendante.",
                "D. Le sang le plus oxygéné se trouve dans les artères ombilicales.",
                "E. Les poumons fœtaux reçoivent seulement 10 à 15 % du débit du ventricule droit."
              ],
              bonnes: [0, 2, 4],
              explication: "A, C et E sont vraies. B est fausse : le passage se fait de droite à gauche chez le fœtus. D est fausse : le sang le plus oxygéné est dans la veine ombilicale ; les artères ombilicales ramènent le sang désaturé au placenta."
            },
            {
              q: "Concernant l'adaptation circulatoire à la naissance :",
              options: [
                "A. L'expansion pulmonaire entraîne une chute des résistances vasculaires pulmonaires.",
                "B. La ligature du cordon diminue les résistances vasculaires systémiques.",
                "C. L'élévation de la pression dans l'atrium gauche ferme fonctionnellement le foramen ovale.",
                "D. La fermeture du canal artériel est favorisée par l'élévation de la PO2 et la chute des prostaglandines.",
                "E. Le canal artériel devient le ligament veineux du foie."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : la ligature du cordon supprime le lit placentaire à basse résistance et augmente les résistances systémiques. E est fausse : le canal artériel devient le ligament artériel ; le ligament veineux dérive du canal d'Arantius."
            },
            {
              q: "Concernant les vestiges de la circulation fœtale chez l'adulte :",
              options: [
                "A. La veine ombilicale devient le ligament rond du foie.",
                "B. Les artères ombilicales deviennent les ligaments ombilicaux médiaux.",
                "C. Le foramen ovale devient la fosse ovale.",
                "D. Le foramen ovale reste perméable chez environ 20 à 25 % des adultes.",
                "E. L'allantoïde devient le ligament artériel."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : l'allantoïde devient l'ouraque puis le ligament ombilical médian ; le ligament artériel dérive du canal artériel."
            },
            {
              q: "Concernant l'hématopoïèse fœtale :",
              options: [
                "A. Elle débute dans la vésicule vitelline à la 3e semaine.",
                "B. Le foie est le principal organe hématopoïétique au 5e mois.",
                "C. La moelle osseuse devient le site prédominant à partir du 7e mois.",
                "D. L'hémoglobine fœtale est constituée de deux chaînes alpha et deux chaînes gamma.",
                "E. À la naissance, l'HbA représente plus de 90 % de l'hémoglobine."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : à la naissance, l'HbF représente encore 70 à 80 % ; l'HbA ne devient largement majoritaire qu'après 6 mois de vie."
            },
            {
              q: "Concernant les adaptations néonatales :",
              options: [
                "A. La graisse brune assure la thermogenèse du nouveau-né.",
                "B. La maladie des membranes hyalines du prématuré est due à un déficit en surfactant.",
                "C. La corticothérapie anténatale accélère la maturation pulmonaire.",
                "D. La persistance du canal artériel est plus fréquente chez le prématuré.",
                "E. Le méconium est normalement émis in utero au 3e trimestre."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : le méconium n'est normalement émis qu'après la naissance ; son émission in utero est un signe de souffrance fœtale."
            }
          ]
        },
        {
          id: "teratogenese-malformations",
          titre: "Tératogenèse, malformations et diagnostic prénatal",
          duree: 35,
          objectifs: [
            "Définir malformation, déformation, disruption, dysplasie, séquence et syndrome.",
            "Connaître l'épidémiologie et les causes des anomalies congénitales.",
            "Décrire les périodes de sensibilité aux tératogènes et les principes de la tératogenèse (Wilson).",
            "Connaître les principaux agents tératogènes : alcool, médicaments, infections, radiations, maladies maternelles, et leurs effets.",
            "Décrire les outils du diagnostic prénatal : échographies, marqueurs sériques, DPNI, amniocentèse, biopsie de trophoblaste."
          ],
          sections: [
            {
              titre: "Définitions et classification des anomalies congénitales",
              contenu: `<p>Une <strong>anomalie congénitale</strong> est toute anomalie structurale ou fonctionnelle présente à la naissance, qu'elle soit ou non diagnostiquée à ce moment. Environ <strong>3 % des nouveau-nés</strong> présentent une anomalie majeure (nécessitant une prise en charge médicale ou chirurgicale, ou ayant des conséquences esthétiques ou fonctionnelles importantes), et 6 % à l'âge de 5 ans lorsque les anomalies de révélation tardive sont comptées ; 10 à 15 % présentent une anomalie mineure (sans conséquence). Les anomalies congénitales sont la première cause de mortalité infantile dans les pays développés (20 à 25 % des décès). La <strong>tératologie</strong> est la science qui les étudie ; un <strong>tératogène</strong> est un agent capable de produire une anomalie du développement.</p>
<table>
<thead><tr><th>Terme</th><th>Définition</th><th>Mécanisme</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td><strong>Malformation</strong></td><td>Anomalie morphologique d'un organe ou d'une région résultant d'un <strong>processus de développement intrinsèquement anormal</strong> dès l'origine</td><td>Erreur de morphogenèse (génétique ou tératogène précoce), pendant l'organogenèse</td><td>Fente labio-palatine, spina bifida, communication interventriculaire, polydactylie, atrésie de l'œsophage</td></tr>
<tr><td><strong>Déformation</strong></td><td>Anomalie de forme ou de position d'une partie du corps <strong>normalement formée</strong>, due à des <strong>forces mécaniques</strong> anormales</td><td>Contrainte extrinsèque (oligoamnios, utérus malformé, grossesse multiple, position) ou intrinsèque (hypotonie), surtout en période fœtale</td><td>Pied bot positionnel, plagiocéphalie, luxation congénitale de hanche, torticolis congénital, faciès de Potter</td></tr>
<tr><td><strong>Disruption</strong></td><td><strong>Destruction</strong> d'une structure normalement formée par un processus extrinsèque</td><td>Interruption vasculaire, infection, bride amniotique, agent physique</td><td>Amputation par bride amniotique, atrésie intestinale ischémique, porencéphalie, embryopathie à la thalidomide (partiellement)</td></tr>
<tr><td><strong>Dysplasie</strong></td><td>Organisation anormale des <strong>cellules en tissu</strong>, touchant un type tissulaire dans tout l'organisme</td><td>Anomalie génétique de l'histogenèse</td><td>Dysplasies squelettiques (achondroplasie, ostéogenèse imparfaite), dysplasie ectodermique, hamartomes</td></tr>
<tr><td><strong>Séquence</strong></td><td>Ensemble d'anomalies dérivant en <strong>cascade</strong> d'une anomalie initiale unique</td><td>Une cause, plusieurs conséquences mécaniques successives</td><td>Séquence de Pierre Robin (micrognathie -> glossoptose -> fente palatine), séquence de Potter (agénésie rénale -> anamnios -> hypoplasie pulmonaire et déformations)</td></tr>
<tr><td><strong>Syndrome</strong></td><td>Ensemble d'anomalies <strong>reconnaissable</strong> dont on sait ou suppose qu'elles ont une <strong>cause commune</strong> unique, sans relation de cascade</td><td>Cause génétique, chromosomique ou tératogène connue</td><td>Trisomie 21, syndrome d'alcoolisation fœtale, syndrome de Turner, syndrome de Marfan</td></tr>
<tr><td><strong>Association</strong></td><td>Survenue non fortuite de plusieurs anomalies sans cause unique identifiée</td><td>Statistique</td><td>Association VACTERL (anomalies vertébrales, anales, cardiaques, trachéo-œsophagiennes, rénales, des membres)</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> malformation = erreur de formation dès l'origine (organogenèse) ; déformation = structure normale déformée par une contrainte mécanique ; disruption = structure normale détruite ; dysplasie = tissu anormal. Les malformations surviennent pendant la période embryonnaire, les déformations surtout pendant la période fœtale.</div>`
            },
            {
              titre: "Causes des anomalies congénitales et principes de la tératogenèse",
              contenu: `<h4>Étiologies</h4>
<ul>
<li><strong>Génétiques</strong> (20 à 30 %) : <strong>anomalies chromosomiques</strong> (6 à 10 % : trisomies 21, 18, 13, monosomie X, microdélétions comme 22q11), <strong>mutations monogéniques</strong> (7 à 8 % : achondroplasie, mucoviscidose, syndrome de Marfan, polykystose rénale) ;</li>
<li><strong>Environnementales</strong> (tératogènes, 5 à 10 %) : maladies maternelles (diabète, phénylcétonurie, lupus), infections, médicaments et toxiques, agents physiques, carences nutritionnelles ;</li>
<li><strong>Multifactorielles</strong> (20 à 25 %) : interaction de prédispositions génétiques et de facteurs d'environnement (fentes labio-palatines, anomalies de fermeture du tube neural, cardiopathies, pied bot, luxation de hanche, hypospadias) ;</li>
<li><strong>Inconnues</strong> (40 à 50 %).</li>
</ul>
<h4>Les principes de la tératogenèse (Wilson, 1959)</h4>
<ol>
<li><strong>Le génotype</strong> du conceptus et de la mère module la sensibilité à un agent (polymorphismes des enzymes de détoxification, par exemple hydantoïne).</li>
<li><strong>Le stade du développement</strong> au moment de l'exposition détermine la nature des lésions : c'est le principe de la <strong>période critique</strong> (voir ci-dessous).</li>
<li><strong>Le mécanisme d'action</strong> est spécifique de chaque agent (mort cellulaire, inhibition de la prolifération, défaut de migration, perturbation d'une voie de signalisation, altération vasculaire).</li>
<li><strong>La relation dose-effet</strong> : il existe en général une dose seuil au-dessous de laquelle il n'y a pas d'effet, et l'effet augmente avec la dose.</li>
<li><strong>La nature de l'agent</strong> et son accès au conceptus (passage placentaire, métabolisme maternel) conditionnent l'effet.</li>
<li>Les manifestations sont : <strong>mort</strong>, <strong>malformation</strong>, <strong>retard de croissance</strong>, <strong>déficit fonctionnel</strong> (les quatre « D » anglo-saxons : death, dysmorphogenesis, delayed growth, dysfunction).</li>
</ol>
<h4>Les périodes de sensibilité</h4>
<table>
<thead><tr><th>Période</th><th>Sensibilité</th><th>Conséquence d'une agression</th></tr></thead>
<tbody>
<tr><td><strong>Pré-embryonnaire</strong> (semaines 1-2)</td><td>Loi du <strong>tout ou rien</strong></td><td>Mort de l'embryon (avortement souvent méconnu) ou compensation complète par les cellules totipotentes ; pas de malformation (exception discutée : jumeaux monozygotes). C'est la période des « deux semaines de latence » qui rassure en cas d'exposition avant le retard de règles.</td></tr>
<tr><td><strong>Embryonnaire</strong> (semaines 3-8)</td><td><strong>Maximale</strong> : organogenèse</td><td><strong>Malformations majeures</strong> ; chaque organe a sa propre période critique correspondant à sa morphogenèse : SNC (J18-J28 pour la fermeture, puis jusqu'à la naissance), cœur (J20-J50, maximum semaines 3-6), membres (J24-J46, maximum semaines 4-5), yeux (semaines 4-8), oreille (semaines 4-9), lèvre (semaines 5-7), palais (semaines 6-9 ; fermeture à la 12<sup>e</sup>), organes génitaux externes (semaines 7-12, puis jusqu'au terme pour les fonctions), dents (semaines 6-8 pour l'ébauche).</td></tr>
<tr><td><strong>Fœtale</strong> (semaine 9 au terme)</td><td>Décroissante</td><td><strong>Anomalies fonctionnelles</strong> (retard mental, surdité, troubles du comportement), <strong>retard de croissance</strong>, malformations mineures ; le SNC, les yeux, les dents, les organes génitaux et le palais restent sensibles ; les agents agissant au 3<sup>e</sup> trimestre perturbent surtout le cerveau (migration neuronale, synaptogenèse, myélinisation).</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le <strong>même agent</strong> peut produire des anomalies différentes selon la date d'exposition (la rubéole donne des cataractes et une cardiopathie à la 6<sup>e</sup> semaine, une surdite à la 9<sup>e</sup>) et des agents <strong>différents</strong> peuvent produire la même anomalie s'ils agissent au même moment. Une exposition pendant les deux premières semaines n'entraîne pas de malformation.</div>`
            },
            {
              titre: "Les principaux agents tératogènes : toxiques et médicaments",
              contenu: `<h4>L'alcool : premier tératogène évitable</h4>
<p>L'alcool traverse librement le placenta (alcoolémie fœtale égale à l'alcoolémie maternelle, avec une élimination plus lente) et est toxique à <strong>tous les stades</strong> de la grossesse. Il n'existe <strong>pas de seuil</strong> démontré d'innocuité : la recommandation est « zéro alcool pendant la grossesse ». Il agit par apoptose neuronale, perturbation de la migration, du métabolisme de l'acide rétinoïque, et stress oxydatif. L'ensemble des <strong>troubles causés par l'alcoolisation fœtale (TCAF)</strong> touche environ 1 % des naissances (première cause de handicap mental non génétique) ; la forme complète, le <strong>syndrome d'alcoolisation fœtale (SAF)</strong>, concerne 1 à 3 naissances pour 1 000 et associe :</p>
<ul>
<li>un <strong>retard de croissance</strong> pré- et post-natal (harmonieux) ;</li>
<li>une <strong>dysmorphie faciale</strong> caractéristique : fentes palpébrales courtes, <strong>philtrum lisse</strong> et long, <strong>lèvre supérieure fine</strong>, hypoplasie de l'étage moyen, nez court retroussé, épicanthus, microcéphalie ;</li>
<li>des <strong>anomalies du système nerveux central</strong> : microcéphalie, retard mental (QI moyen 70), troubles de l'attention, de l'apprentissage et du comportement, agénésie du corps calleux, hypoplasie cérébelleuse ;</li>
<li>parfois des malformations cardiaques (CIV), squelettiques, rénales et oculaires.</li>
</ul>
<h4>Le tabac et les drogues</h4>
<p>Le <strong>tabac</strong> (nicotine vasoconstrictrice, monoxyde de carbone) n'est pas malformatif au sens strict mais provoque <strong>retard de croissance</strong> (diminution de 200 g du poids de naissance en moyenne), prématurité, fausses couches, grossesses extra-utérines, placenta praevia, hématome rétroplacentaire, mort subite du nourrisson ; légère augmentation des fentes orales. La <strong>cocaïne</strong> (vasoconstriction) entraîne des disruptions (atrésies intestinales, anomalies des membres, infarctus cérébraux), un hématome rétroplacentaire et un retard de croissance. Les <strong>opiacés</strong> donnent un syndrome de sevrage néonatal ; le <strong>cannabis</strong> des troubles neurocomportementaux.</p>
<h4>Les médicaments tératogènes majeurs</h4>
<table>
<thead><tr><th>Médicament</th><th>Période critique</th><th>Anomalies</th></tr></thead>
<tbody>
<tr><td><strong>Thalidomide</strong> (sédatif, retiré en 1961 ; utilisé aujourd'hui dans le myélome et la lèpre sous contraception stricte)</td><td>J20 à J36 (fenêtre très étroite)</td><td><strong>Phocomélie</strong>, amélie, anomalies des membres, de l'oreille (anotie), cardiaques, intestinales ; 10 000 enfants atteints ; a fondé la pharmacovigilance moderne</td></tr>
<tr><td><strong>Isotrétinoïne et rétinoïdes</strong> (acide rétinoïque, traitement de l'acné)</td><td>Semaines 3 à 8</td><td>Embryopathie aux rétinoïdes (30 % des expositions) : anomalies crâniofaciales (microtie, hypoplasie faciale), cardiaques conotroncales, thymiques, du SNC (hydrocéphalie, retard mental) par atteinte des crêtes neurales ; contraception obligatoire 1 mois avant, pendant et 1 mois après</td></tr>
<tr><td><strong>Antiépileptiques</strong> : <strong>acide valproïque</strong>, carbamazépine, phénytoïne, phénobarbital</td><td>Semaines 3 à 8 (tube neural J18-J28)</td><td>Valproate : <strong>spina bifida</strong> (risque multiplié par 10 à 20, 1 à 2 %), dysmorphie, cardiopathies, hypospadias, et surtout <strong>troubles neurodéveloppementaux</strong> (30 à 40 %, autisme, baisse du QI) : contre-indiqué chez la femme en âge de procréer sans contraception efficace. Phénytoïne : syndrome fœtal des hydantoïnes (hypoplasie des ongles et phalanges distales, dysmorphie, retard)</td></tr>
<tr><td><strong>Anticoagulants coumariniques</strong> (warfarine)</td><td>Semaines 6 à 9, puis 2<sup>e</sup>-3<sup>e</sup> trimestre</td><td>Embryopathie warfarinique : hypoplasie nasale, chondrodysplasie ponctuée, anomalies des membres ; puis hémorragies fœtales et anomalies du SNC. Relais par héparine (ne passe pas le placenta)</td></tr>
<tr><td><strong>Inhibiteurs de l'enzyme de conversion et sartans</strong></td><td>2<sup>e</sup> et 3<sup>e</sup> trimestres</td><td>Fœtotoxicité : insuffisance rénale fœtale, oligoamnios, hypoplasie pulmonaire, anomalies de la voûte crânienne, mort fœtale</td></tr>
<tr><td><strong>Anti-inflammatoires non stéroïdiens</strong></td><td>À partir de 24 SA, formellement contre-indiqués</td><td>Fermeture prématurée du canal artériel (hypertension artérielle pulmonaire), insuffisance rénale fœtale et oligoamnios</td></tr>
<tr><td><strong>Lithium</strong></td><td>Semaines 3 à 8</td><td>Cardiopathies, en particulier <strong>maladie d'Ebstein</strong> (valve tricuspide)</td></tr>
<tr><td><strong>Antifoliques</strong> : méthotrexate, aminoptérine, triméthoprime</td><td>1<sup>er</sup> trimestre</td><td>Anomalies du tube neural, crâniofaciales, des membres ; avortements (le méthotrexate est utilisé pour cela dans la GEU)</td></tr>
<tr><td><strong>Diéthylstilbestrol</strong> (DES, œstrogène de synthèse, prescrit de 1950 à 1977)</td><td>Semaines 6 à 16</td><td>Chez les filles exposées in utero : <strong>adénose vaginale</strong>, <strong>adénocarcinome à cellules claires</strong> du vagin et du col (à l'adolescence), malformations utérines (utérus en T, hypoplasie), infertilité, grossesses extra-utérines, prématurité ; chez les garçons : hypospadias, kystes de l'épididyme ; effets transgénérationnels (hypospadias chez les petits-fils)</td></tr>
<tr><td><strong>Androgènes et progestatifs androgéniques</strong></td><td>Semaines 8 à 12</td><td>Virilisation des fœtus féminins (hypertrophie clitoridienne, fusion labiale)</td></tr>
<tr><td><strong>Antithyroïdiens de synthèse</strong> (carbimazole), iode radioactif</td><td>Après 10-12 SA (thyroïde fonctionnelle)</td><td>Goitre et hypothyroïdie fœtale ; l'iode 131 détruit la thyroïde fœtale (contre-indiqué)</td></tr>
<tr><td><strong>Tétracyclines</strong></td><td>2<sup>e</sup> et 3<sup>e</sup> trimestres</td><td>Coloration jaune-brun des dents, hypoplasie de l'émail, ralentissement de la croissance osseuse</td></tr>
<tr><td><strong>Aminosides</strong> (streptomycine, gentamicine)</td><td>2<sup>e</sup> et 3<sup>e</sup> trimestres</td><td>Atteinte cochléo-vestibulaire (surdité)</td></tr>
<tr><td><strong>Misoprostol</strong></td><td>1<sup>er</sup> trimestre (tentative d'IVG échouée)</td><td>Séquence de Mœbius (paralysie faciale), anomalies des membres par disruption vasculaire</td></tr>
<tr><td><strong>Mycophénolate</strong>, cyclophosphamide et autres cytotoxiques</td><td>1<sup>er</sup> trimestre</td><td>Anomalies de l'oreille, fentes, cardiopathies ; avortements</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> en France, le <strong>CRAT</strong> (Centre de référence sur les agents tératogènes) fournit une information actualisée sur les risques de chaque médicament. Les règles pratiques : évaluer toute femme en âge de procréer avant une prescription à risque, ne jamais interrompre brutalement un traitement indispensable (épilepsie) sans avis spécialisé, préférer les molécules anciennes bien documentées, et se souvenir que la plupart des médicaments ne sont pas tératogènes (le risque de base de 3 % de malformations existe de toute façon).</div>`
            },
            {
              titre: "Agents infectieux, physiques et maladies maternelles",
              contenu: `<h4>Les infections : le groupe TORCH et les autres</h4>
<table>
<thead><tr><th>Agent</th><th>Risque de transmission et période critique</th><th>Embryofœtopathie</th><th>Prévention / dépistage</th></tr></thead>
<tbody>
<tr><td><strong>Toxoplasme</strong> (protozoaire, viande crue, chats)</td><td>Transmission croissante avec le terme (10 % au 1<sup>er</sup> trimestre, 70 % au 3<sup>e</sup>) mais gravité inversement proportionnelle</td><td>Choriorétinite (séquelle la plus fréquente, parfois tardive), hydrocéphalie, calcifications intracrâniennes, microcéphalie, retard mental ; avortement</td><td>Sérologie mensuelle des femmes non immunes (50 % en France), mesures hygiéno-diététiques ; spiramycine puis pyriméthamine-sulfadiazine si infection</td></tr>
<tr><td><strong>Rubéole</strong> (virus à ARN)</td><td>90 % avant 11 SA, 30 % entre 11 et 18 SA, quasi nul après 18-20 SA</td><td><strong>Triade de Gregg</strong> : <strong>cataracte</strong> (et microphtalmie, rétinopathie), <strong>cardiopathie</strong> (persistance du canal artériel, sténose pulmonaire), <strong>surdité</strong> neurosensorielle ; retard de croissance, microcéphalie, purpura thrombopénique, hépatosplénomégalie, diabète ultérieur</td><td><strong>Vaccination</strong> (ROR, contre-indiqué pendant la grossesse) ; sérologie en début de grossesse ; interruption médicale possible en cas d'infection avant 12 SA</td></tr>
<tr><td><strong>Cytomégalovirus</strong> (CMV, herpèsvirus)</td><td>Infection congénitale la plus fréquente (0,5 à 1 % des naissances) ; transmission 30 à 40 % en cas de primo-infection ; 10 % des infectés sont symptomatiques</td><td>Microcéphalie, calcifications périventriculaires, retard mental, <strong>surdité</strong> (première cause de surdité non génétique), choriorétinite, retard de croissance, hépatosplénomégalie, thrombopénie</td><td>Mesures d'hygiène (contact avec les jeunes enfants) ; pas de vaccin ; valaciclovir en cas de primo-infection</td></tr>
<tr><td><strong>Herpès simplex</strong></td><td>Surtout transmission <strong>per-natale</strong> (passage dans la filière génitale lors d'une poussée)</td><td>Herpès néonatal (encéphalite, forme disséminée, mortalité élevée) ; rarement embryopathie (microcéphalie, choriorétinite)</td><td>Césarienne en cas de lésions au moment du travail, aciclovir</td></tr>
<tr><td><strong>Varicelle</strong> (VZV)</td><td>Risque de 1 à 2 % avant 20 SA ; grave si varicelle maternelle dans les 5 jours avant ou 2 jours après la naissance</td><td>Cicatrices cutanées dermatomales, hypoplasie des membres, microphtalmie, cataracte, atrophie corticale ; varicelle néonatale sévère</td><td>Vaccination avant la grossesse ; immunoglobulines spécifiques, aciclovir</td></tr>
<tr><td><strong>Parvovirus B19</strong></td><td>Infection fœtale dans 30 % des cas</td><td>Anémie fœtale sévère (atteinte des érythroblastes), <strong>anasarque fœto-placentaire</strong> non immune, mort fœtale ; pas de malformation</td><td>Surveillance Doppler, transfusion in utero</td></tr>
<tr><td><strong>Syphilis</strong> (Treponema pallidum)</td><td>Transmission à partir de 16-18 SA (passage du tréponème)</td><td>Syphilis congénitale : mort fœtale, prématurité, hépatosplénomégalie, rhinite, lésions cutanées, ostéochondrite ; forme tardive : triade de Hutchinson (dents, kératite, surdité), nez en selle, tibias en lame de sabre</td><td>Sérologie obligatoire au 1<sup>er</sup> trimestre ; pénicilline</td></tr>
<tr><td><strong>Listeria</strong> (bactérie, fromages au lait cru, charcuterie)</td><td>Passage transplacentaire à tout terme</td><td>Avortement, mort fœtale, accouchement prématuré, infection néonatale (granulomatose septique), méningite</td><td>Mesures alimentaires ; amoxicilline devant toute fièvre inexpliquée</td></tr>
<tr><td><strong>Zika</strong> (flavivirus, moustique)</td><td>Surtout 1<sup>er</sup> et 2<sup>e</sup> trimestres</td><td><strong>Microcéphalie</strong> sévère, calcifications, anomalies oculaires, arthrogrypose</td><td>Protection anti-moustiques, report de voyages</td></tr>
<tr><td><strong>VIH, hépatite B</strong></td><td>Transmission surtout per-natale et post-natale (allaitement pour le VIH)</td><td>Pas de malformation ; infection de l'enfant</td><td>Traitement antirétroviral (transmission inférieure à 1 %), sérovaccination du nouveau-né pour l'hépatite B</td></tr>
</tbody>
</table>
<h4>Les agents physiques</h4>
<ul>
<li><strong>Radiations ionisantes</strong> : effet déterministe avec seuil (environ <strong>100 à 200 mGy</strong>, soit 100-200 mSv) pour les malformations (microcéphalie, retard mental, anomalies oculaires, retard de croissance), maximal entre la 2<sup>e</sup> et la 15<sup>e</sup> semaine (Hiroshima et Nagasaki) ; effet stochastique (cancers, leucémies) sans seuil démontré. Les examens radiologiques diagnostiques délivrent des doses très inférieures (radiographie pulmonaire : 0,01 mGy ; scanner abdomino-pelvien : 10 à 30 mGy) : aucun examen diagnostique n'atteint le seuil, et une exposition accidentelle n'est jamais une indication d'interruption en dessous de 100 mGy. La radiothérapie et l'iode 131 sont contre-indiqués.</li>
<li><strong>Hyperthermie</strong> maternelle importante (fièvre supérieure à 38,5-39 °C prolongée, sauna, bains très chauds) au 1<sup>er</sup> trimestre : anomalies de fermeture du tube neural, microcéphalie.</li>
<li><strong>Agents chimiques</strong> : <strong>mercure</strong> organique (méthylmercure, maladie de Minamata : atrophie cérébrale, paralysie cérébrale), <strong>plomb</strong> (retard mental, avortements), solvants, pesticides, perturbateurs endocriniens (bisphénol A, phtalates : hypospadias, cryptorchidie, troubles de la fertilité), <strong>monoxyde de carbone</strong> (hypoxie fœtale).</li>
</ul>
<h4>Les maladies maternelles</h4>
<ul>
<li><strong>Diabète</strong> prégestationnel mal équilibré : risque de malformations multiplié par 2 à 4 (proportionnel à l'HbA1c périconceptionnelle) : cardiopathies (transposition, CIV), anomalies du tube neural, <strong>syndrome de régression caudale</strong> (sirénomélie), anomalies rénales ; <strong>macrosomie</strong>, hypoglycémie néonatale, détresse respiratoire (retard de maturation du surfactant), cardiomyopathie hypertrophique. Prévention : équilibre glycémique avant la conception.</li>
<li><strong>Phénylcétonurie</strong> maternelle non traitée : microcéphalie, retard mental, cardiopathies (régime strict avant la conception).</li>
<li><strong>Lupus</strong> avec anticorps anti-SSA/Ro : <strong>bloc auriculo-ventriculaire congénital</strong> (atteinte du tissu de conduction), lupus néonatal.</li>
<li><strong>Maladie de Basedow</strong> : passage des anticorps anti-récepteur de la TSH : hyperthyroïdie fœtale et néonatale ; <strong>hypothyroïdie</strong> et carence en iode : retard mental (crétinisme).</li>
<li><strong>Épilepsie</strong> (via les traitements et les crises), <strong>obésité</strong> (anomalies du tube neural, cardiopathies), <strong>carence en acide folique</strong> (anomalies du tube neural), <strong>hyperthermie</strong>, <strong>allo-immunisation Rhésus</strong> (anémie, anasarque).</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> rubéole = cataracte, cardiopathie, surdité (triade de Gregg), risque maximal avant 11 SA ; CMV = infection congénitale la plus fréquente, surdité et microcéphalie ; toxoplasmose = choriorétinite, hydrocéphalie, calcifications, transmission croissante mais gravité décroissante avec le terme ; parvovirus B19 = anémie et anasarque sans malformation ; varicelle = cicatrices et hypoplasie des membres ; Zika = microcéphalie. Radiations : seuil de 100 mGy, jamais atteint par un examen diagnostique.</div>`
            },
            {
              titre: "Le diagnostic prénatal",
              contenu: `<p>Le <strong>diagnostic prénatal</strong> (DPN) regroupe les pratiques médicales ayant pour but de détecter in utero une affection d'une particulière gravité. Il comprend des examens de <strong>dépistage</strong>, proposés à toutes les femmes (échographies, marqueurs sériques, DPNI) et des examens <strong>diagnostiques</strong> invasifs, proposés aux femmes à risque (amniocentèse, biopsie de trophoblaste, cordocentèse). Il est encadré en France par les <strong>centres pluridisciplinaires de diagnostic prénatal</strong> (CPDPN), qui peuvent attester de la particulière gravité et de l'incurabilité d'une affection pour autoriser une <strong>interruption médicale de grossesse</strong> (IMG), possible sans limite de terme.</p>
<h4>Les trois échographies de dépistage</h4>
<table>
<thead><tr><th>Échographie</th><th>Terme</th><th>Objectifs</th></tr></thead>
<tbody>
<tr><td><strong>1<sup>re</sup> (« de datation »)</strong></td><td><strong>11 à 13 SA + 6 jours</strong></td><td>Vitalité, <strong>datation</strong> par la LCC (45 à 84 mm), nombre d'embryons et <strong>chorionicité</strong>, mesure de la <strong>clarté nucale</strong> (normale inférieure à 3 mm ; épaissie dans les trisomies 21, 18, 13, le Turner, les cardiopathies), morphologie précoce (crâne, paroi abdominale, membres, vessie, estomac)</td></tr>
<tr><td><strong>2<sup>e</sup> (« morphologique »)</strong></td><td><strong>20 à 25 SA</strong> (idéalement 22 SA)</td><td><strong>Étude morphologique complète</strong> (cerveau, face, cœur à 4 cavités et gros vaisseaux, rachis, reins, membres, paroi), biométries, placenta, liquide amniotique ; c'est l'examen qui détecte la majorité des malformations (sensibilité globale 60 à 70 %, variable selon l'organe)</td></tr>
<tr><td><strong>3<sup>e</sup> (« de croissance »)</strong></td><td><strong>30 à 35 SA</strong> (idéalement 32 SA)</td><td><strong>Croissance</strong> (estimation du poids), <strong>présentation</strong>, localisation placentaire (praevia), liquide amniotique, Doppler si besoin, malformations de révélation tardive (reins, cerveau, cœur)</td></tr>
</tbody>
</table>
<h4>Le dépistage de la trisomie 21</h4>
<p>Il est proposé à toutes les femmes, non obligatoire. Le <strong>dépistage combiné du 1<sup>er</sup> trimestre</strong> calcule un risque à partir de l'<strong>âge maternel</strong>, de la <strong>clarté nucale</strong> (11-13 SA + 6 j) et des <strong>marqueurs sériques</strong> dosés entre 11 et 13 SA + 6 j : <strong>bêta-hCG libre</strong> (élevée dans la trisomie 21) et <strong>PAPP-A</strong> (abaissée). Si ce dépistage n'a pas pu être fait, les marqueurs du 2<sup>e</sup> trimestre (14 à 17 SA + 6 j) sont l'hCG totale (élevée), l'<strong>alpha-fœtoprotéine</strong> (abaissée dans la trisomie 21, élevée dans les anomalies ouvertes du tube neural et de la paroi) et l'œstriol non conjugué (abaissé). Le résultat est un <strong>risque</strong> :</p>
<ul>
<li>risque <strong>supérieur à 1/50</strong> : caryotype fœtal d'emblée (amniocentèse ou biopsie de trophoblaste) ;</li>
<li>risque <strong>entre 1/51 et 1/1 000</strong> : <strong>DPNI</strong> (dépistage prénatal non invasif) ;</li>
<li>risque <strong>inférieur à 1/1 000</strong> : pas d'examen supplémentaire.</li>
</ul>
<p>Le <strong>DPNI</strong> analyse l'<strong>ADN fœtal libre</strong> circulant dans le plasma maternel (10 % de l'ADN libre total, d'origine trophoblastique, détectable dès 10 SA) par séquençage haut débit : sensibilité supérieure à 99 % pour la trisomie 21, faux positifs inférieurs à 0,1 %. C'est un test de dépistage : un résultat positif doit être <strong>confirmé par un caryotype</strong> (prélèvement invasif).</p>
<h4>Les prélèvements invasifs</h4>
<ul>
<li><strong>Biopsie de trophoblaste</strong> (choriocentèse, prélèvement de villosités choriales) : dès <strong>11 SA</strong>, par voie transabdominale ou transcervicale ; résultat rapide (caryotype direct en 48 heures sur les cytotrophoblastes en mitose, culture en 2 semaines) ; risque de fausse couche 0,5 à 1 % ; limite : mosaïques confinées au placenta (1 %).</li>
<li><strong>Amniocentèse</strong> : à partir de <strong>15 SA</strong>, ponction de 15 à 20 mL de liquide ; caryotype sur cellules fœtales cultivées (2 à 3 semaines ; techniques rapides par FISH ou PCR en 48 heures), analyse chromosomique sur puce (CGH-array), biologie moléculaire, dosages (alpha-fœtoprotéine, acétylcholinestérase), recherche d'infections (PCR) ; risque de fausse couche 0,5 à 1 %.</li>
<li><strong>Cordocentèse</strong> (ponction de sang fœtal au cordon) : après 18-20 SA, pour hématologie fœtale (anémie, thrombopénie), caryotype rapide, infections ; risque de 1 à 2 % ; permet aussi la transfusion in utero.</li>
<li><strong>Fœtoscopie</strong> et chirurgie fœtale (laser du STT, occlusion trachéale dans la hernie diaphragmatique, chirurgie du spina bifida).</li>
</ul>
<h4>Indications du caryotype fœtal</h4>
<p>Âge maternel avancé (anciennement 38 ans, remplacé par le calcul de risque), risque combiné supérieur à 1/50, DPNI positif, clarté nucale supérieure à 3,5 mm, anomalie échographique (malformation, retard de croissance précoce, hydramnios), antécédent d'anomalie chromosomique, remaniement chromosomique parental, diagnostic de sexe pour une maladie liée à l'X.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>alpha-fœtoprotéine (AFP)</strong>, protéine fœtale majeure synthétisée par le foie et la vésicule vitelline, est le marqueur des <strong>anomalies ouvertes</strong> (spina bifida aperta, anencéphalie, laparoschisis, omphalocèle) où elle fuit dans le liquide amniotique puis le sérum maternel ; elle est au contraire <strong>abaissée</strong> dans la trisomie 21. Son dosage dans le sérum maternel au 2<sup>e</sup> trimestre est donc interprété dans les deux sens.</div>`
            }
          ],
          points_cles: [
            "Environ 3 % des nouveau-nés ont une anomalie majeure ; causes : chromosomiques 6-10 %, monogéniques 7-8 %, environnementales 5-10 %, multifactorielles 20-25 %, inconnues 40-50 %.",
            "Malformation (défaut de formation intrinsèque, période embryonnaire), déformation (contrainte mécanique sur une structure normale, période fœtale), disruption (destruction d'une structure normale), dysplasie (tissu anormal), séquence (cascade), syndrome (cause unique).",
            "Principes de Wilson : génotype, stade de développement (période critique), mécanisme spécifique, relation dose-effet ; manifestations : mort, malformation, retard de croissance, déficit fonctionnel.",
            "Semaines 1-2 : tout ou rien ; semaines 3-8 : malformations majeures (chaque organe a sa période critique : tube neural J18-J28, cœur semaines 3-6, membres semaines 4-5, palais semaines 6-9) ; période fœtale : anomalies fonctionnelles et de croissance.",
            "Alcool : tératogène à tous les stades sans seuil ; SAF = retard de croissance, dysmorphie (philtrum lisse, lèvre supérieure fine, fentes palpébrales courtes), microcéphalie et retard mental ; première cause de handicap mental non génétique.",
            "Médicaments : thalidomide (phocomélie, J20-J36), rétinoïdes (crêtes neurales), valproate (spina bifida, troubles neurodéveloppementaux), warfarine, IEC et AINS (fœtotoxicité rénale et canal artériel), lithium (Ebstein), DES (adénocarcinome vaginal, utérus en T), androgènes (virilisation), tétracyclines (dents), aminosides (surdité).",
            "Infections : rubéole (triade de Gregg : cataracte, cardiopathie, surdité ; risque maximal avant 11 SA), CMV (la plus fréquente, surdité, microcéphalie), toxoplasmose (choriorétinite, hydrocéphalie, calcifications), varicelle, parvovirus B19 (anémie, anasarque), syphilis, Listeria, Zika (microcéphalie).",
            "Radiations : seuil de 100-200 mGy pour les malformations, jamais atteint par les examens diagnostiques ; diabète maternel : cardiopathies, tube neural, régression caudale, macrosomie.",
            "Dépistage : échographies à 11-13 SA + 6 j (LCC, clarté nucale, chorionicité), 20-25 SA (morphologie) et 30-35 SA (croissance) ; trisomie 21 : risque combiné (âge, clarté nucale, bêta-hCG libre élevée, PAPP-A basse), DPNI entre 1/51 et 1/1 000, caryotype si supérieur à 1/50.",
            "Prélèvements invasifs : biopsie de trophoblaste dès 11 SA, amniocentèse dès 15 SA (risque de fausse couche 0,5-1 %), cordocentèse après 18-20 SA ; l'AFP est élevée dans les anomalies ouvertes et basse dans la trisomie 21."
          ],
          lexique: [
            { terme: "Tératogène", def: "Agent (chimique, physique, infectieux, métabolique) capable de provoquer une anomalie du développement embryonnaire ou fœtal." },
            { terme: "Malformation", def: "Anomalie morphologique résultant d'un processus de développement intrinsèquement anormal dès l'origine, survenant pendant l'organogenèse." },
            { terme: "Déformation", def: "Anomalie de forme ou de position d'une structure normalement formée, due à des forces mécaniques, le plus souvent en période fœtale." },
            { terme: "Disruption", def: "Destruction d'une structure normalement formée par un processus extrinsèque (vasculaire, infectieux, mécanique)." },
            { terme: "Séquence", def: "Ensemble d'anomalies dérivant en cascade d'une anomalie initiale unique (exemples : Pierre Robin, Potter)." },
            { terme: "Période critique", def: "Fenêtre temporelle pendant laquelle un organe en morphogenèse est particulièrement sensible aux agents tératogènes." },
            { terme: "Syndrome d'alcoolisation fœtale", def: "Forme complète des troubles causés par l'alcoolisation fœtale : retard de croissance, dysmorphie faciale caractéristique et atteinte du système nerveux central." },
            { terme: "Triade de Gregg", def: "Cataracte, cardiopathie et surdité, caractéristiques de la rubéole congénitale." },
            { terme: "Clarté nucale", def: "Épaisseur de l'espace sous-cutané de la nuque fœtale mesurée entre 11 et 13 SA + 6 j ; son augmentation (supérieure à 3 mm) est un marqueur d'aneuploïdie et de cardiopathie." },
            { terme: "DPNI", def: "Dépistage prénatal non invasif des trisomies par séquençage de l'ADN fœtal libre circulant dans le sang maternel, dès 10 SA." },
            { terme: "Alpha-fœtoprotéine", def: "Protéine plasmatique fœtale majeure, élevée dans le liquide amniotique et le sérum maternel en cas d'anomalie ouverte du tube neural ou de la paroi, abaissée dans la trisomie 21." }
          ],
          qcm: [
            {
              q: "Concernant la classification des anomalies congénitales :",
              options: [
                "A. Une malformation résulte d'un processus de développement intrinsèquement anormal.",
                "B. Une déformation touche une structure normalement formée, soumise à des forces mécaniques.",
                "C. L'amputation d'un doigt par une bride amniotique est une malformation.",
                "D. La séquence de Potter résulte en cascade d'une agénésie rénale bilatérale.",
                "E. Environ 3 % des nouveau-nés présentent une anomalie congénitale majeure."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la destruction d'une structure normalement formée par une bride est une disruption."
            },
            {
              q: "Concernant les périodes de sensibilité aux tératogènes :",
              options: [
                "A. Une exposition pendant les deux premières semaines de développement entraîne généralement des malformations majeures.",
                "B. La période embryonnaire (semaines 3 à 8) est la période de sensibilité maximale.",
                "C. Chaque organe possède sa propre période critique.",
                "D. Le système nerveux central reste sensible pendant toute la période fœtale.",
                "E. Un même agent produit toujours la même anomalie quelle que soit la date d'exposition."
              ],
              bonnes: [1, 2, 3],
              explication: "A est fausse : c'est la loi du tout ou rien (mort ou récupération complète). B, C et D sont vraies. E est fausse : les anomalies dépendent de la date d'exposition."
            },
            {
              q: "Concernant le syndrome d'alcoolisation fœtale :",
              options: [
                "A. L'alcool n'est tératogène qu'au premier trimestre.",
                "B. Il existe un seuil de consommation en dessous duquel l'alcool est sans risque.",
                "C. La dysmorphie associe un philtrum lisse, une lèvre supérieure fine et des fentes palpébrales courtes.",
                "D. Il s'accompagne d'un retard de croissance et d'une microcéphalie.",
                "E. C'est la première cause de handicap mental d'origine non génétique."
              ],
              bonnes: [2, 3, 4],
              explication: "A est fausse : l'alcool est toxique à tous les stades, en particulier pour le cerveau au 3e trimestre. B est fausse : aucun seuil n'est démontré. C, D et E sont vraies."
            },
            {
              q: "Concernant les médicaments tératogènes :",
              options: [
                "A. La thalidomide provoque des phocomélies pour une exposition entre J20 et J36.",
                "B. L'acide valproïque augmente le risque de spina bifida.",
                "C. L'isotrétinoïne est responsable d'anomalies crâniofaciales et cardiaques par atteinte des crêtes neurales.",
                "D. Les inhibiteurs de l'enzyme de conversion sont surtout toxiques au 1er trimestre.",
                "E. Le diéthylstilbestrol expose les filles à un adénocarcinome à cellules claires du vagin."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la fœtotoxicité des IEC (insuffisance rénale, oligoamnios) concerne les 2e et 3e trimestres."
            },
            {
              q: "Concernant les infections tératogènes :",
              options: [
                "A. La rubéole congénitale associe cataracte, cardiopathie et surdité.",
                "B. Le risque d'embryopathie rubéolique est maximal après 20 SA.",
                "C. Le cytomégalovirus est l'infection congénitale la plus fréquente.",
                "D. Le risque de transmission de la toxoplasmose augmente avec le terme de la grossesse.",
                "E. Le parvovirus B19 est responsable de malformations cardiaques."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le risque est maximal avant 11 SA et quasi nul après 18-20 SA. E est fausse : le parvovirus B19 provoque une anémie et une anasarque, sans malformation."
            },
            {
              q: "Concernant les agents physiques et les maladies maternelles :",
              options: [
                "A. Une radiographie pulmonaire pendant la grossesse justifie une interruption de grossesse.",
                "B. Le seuil d'effet malformatif des radiations ionisantes est d'environ 100 à 200 mGy.",
                "C. Le diabète maternel mal équilibré augmente le risque de cardiopathies et d'anomalies du tube neural.",
                "D. Le diabète maternel expose à la macrosomie fœtale.",
                "E. Les anticorps anti-SSA maternels exposent le fœtus à un bloc auriculo-ventriculaire."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : la dose délivrée (0,01 mGy) est très inférieure au seuil ; aucun examen diagnostique n'atteint 100 mGy. B, C, D et E sont vraies."
            },
            {
              q: "Concernant le diagnostic prénatal :",
              options: [
                "A. La clarté nucale est mesurée entre 11 et 13 SA + 6 jours.",
                "B. Dans la trisomie 21, la PAPP-A est abaissée et la bêta-hCG libre est élevée.",
                "C. Le DPNI repose sur l'analyse de l'ADN fœtal libre circulant dans le sang maternel.",
                "D. Un DPNI positif permet d'affirmer le diagnostic de trisomie 21 sans autre examen.",
                "E. L'amniocentèse est réalisée à partir de 15 SA avec un risque de fausse couche de 0,5 à 1 %."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : le DPNI est un test de dépistage ; un résultat positif doit être confirmé par un caryotype sur prélèvement invasif."
            },
            {
              q: "Concernant l'alpha-fœtoprotéine et les échographies :",
              options: [
                "A. L'alpha-fœtoprotéine est élevée dans le liquide amniotique en cas de spina bifida ouvert.",
                "B. L'alpha-fœtoprotéine sérique maternelle est élevée dans la trisomie 21.",
                "C. L'échographie du 2e trimestre (20-25 SA) est l'examen principal de dépistage morphologique.",
                "D. La datation de la grossesse repose sur la longueur cranio-caudale au 1er trimestre.",
                "E. L'échographie du 3e trimestre évalue la croissance et la localisation placentaire."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : l'AFP est abaissée dans la trisomie 21."
            }
          ]
        }
      ]
    },
    {
      titre: "Partie 4 — Organogenèse",
      chapitres: [
        {
          id: "appareil-cardiovasculaire",
          titre: "Développement de l'appareil cardiovasculaire",
          duree: 45,
          objectifs: [
            "Décrire la formation du tube cardiaque, ses segments et la boucle cardiaque.",
            "Expliquer le cloisonnement des atria (septum primum, septum secundum, foramen ovale), du canal atrio-ventriculaire, des ventricules et du cône-tronc.",
            "Connaître le devenir des arcs aortiques et des grands systèmes veineux (vitellin, ombilical, cardinal).",
            "Expliquer la circulation fœtale et le devenir des shunts à la naissance.",
            "Connaître les principales cardiopathies congénitales et leur mécanisme embryologique."
          ],
          sections: [
            {
              titre: "L'aire cardiogène et le tube cardiaque",
              contenu: `<p>Le système cardiovasculaire est le <strong>premier système fonctionnel</strong> de l'embryon : le cœur bat dès le <strong>22<sup>e</sup> jour</strong>, car la diffusion simple ne suffit plus à nourrir un embryon de plus de 2 mm. Il dérive presque entièrement du <strong>mésoblaste</strong> (splanchnopleure), avec une contribution des crêtes neurales (septum aortico-pulmonaire) et de l'ectoblaste (péricarde en partie non).</p>
<h4>L'aire cardiogène (J18-J19)</h4>
<p>À la fin de la 3<sup>e</sup> semaine, des cellules de la <strong>splanchnopleure</strong> situées en avant de la plaque préchordale et du neuroectoblaste, en forme de <strong>fer à cheval</strong> (croissant cardiogénique), se différencient sous l'induction de l'entoblaste sous-jacent (BMP2, FGF8, inhibition de Wnt) : elles expriment NKX2-5, GATA4 et donnent le <strong>champ cardiaque primaire</strong> (futurs ventricule gauche et atria) et le <strong>champ cardiaque secondaire</strong> (futurs ventricule droit et voies d'éjection). Des amas angioblastiques forment deux <strong>tubes endocardiques</strong> latéraux dans le mésoderme de l'aire cardiogène, au-dessus desquels le cœlome intra-embryonnaire forme la cavité péricardique primitive.</p>
<h4>Le tube cardiaque (J20-J22)</h4>
<p>La <strong>plicature céphalique</strong> bascule l'aire cardiogène vers la face ventrale, en position cervicale puis thoracique, et la <strong>plicature latérale</strong> rapproche les deux tubes endocardiques, qui <strong>fusionnent</strong> sur la ligne médiane (de l'avant vers l'arrière) en un <strong>tube cardiaque unique</strong> vers J21-J22. Ce tube comporte trois couches : l'<strong>endocarde</strong> (endothélium), la <strong>gelée cardiaque</strong> (matrice extracellulaire acellulaire épaisse) et le <strong>myocarde</strong> (manteau myo-épicardique issu de la splanchnopleure) ; l'<strong>épicarde</strong> provient de l'organe pro-épicardique (près du sinus venosus) qui le recouvre secondairement. Le tube est suspendu dans la cavité péricardique par le <strong>mésocarde dorsal</strong>, qui se résorbe rapidement (sauf à ses extrémités) et laisse un passage, le <strong>sinus transverse du péricarde</strong>.</p>
<p>De l'extrémité caudale (veineuse, afférente) à l'extrémité céphalique (artérielle, efférente), le tube se segmente en dilatations séparées par des sillons :</p>
<table>
<thead><tr><th>Segment (caudal vers céphalique)</th><th>Devenir</th></tr></thead>
<tbody>
<tr><td><strong>Sinus venosus</strong> (deux cornes, recevant les veines vitellines, ombilicales et cardinales communes)</td><td>Corne droite : partie lisse de l'atrium droit (sinus des veines caves) ; corne gauche : sinus coronaire et veine oblique de l'atrium gauche</td></tr>
<tr><td><strong>Atrium primitif</strong></td><td>Parties trabéculées (auricules) des deux atria</td></tr>
<tr><td><strong>Ventricule primitif</strong> (ventricule gauche primitif)</td><td>Partie trabéculée du <strong>ventricule gauche</strong></td></tr>
<tr><td><strong>Bulbus cordis</strong>, dont la partie proximale</td><td>Partie trabéculée du <strong>ventricule droit</strong></td></tr>
<tr><td>Bulbus cordis, partie moyenne : <strong>cône artériel</strong> (conus)</td><td>Chambres de chasse (infundibulum) des deux ventricules</td></tr>
<tr><td>Bulbus cordis, partie distale : <strong>tronc artériel</strong> (truncus)</td><td>Racines de l'aorte et du tronc pulmonaire, valves semi-lunaires</td></tr>
<tr><td><strong>Sac aortique</strong></td><td>Arcs aortiques</td></tr>
</tbody>
</table>
<p>Le tube cardiaque commence à <strong>battre à J22</strong> (contractions péristaltiques, puis rythme imposé par la région du sinus venosus, futur nœud sinusal), et la <strong>circulation</strong> est effective dès la fin de la 4<sup>e</sup> semaine : le sang entre par le sinus venosus et sort par le sac aortique.</p>`
            },
            {
              titre: "La boucle cardiaque et le canal atrio-ventriculaire",
              contenu: `<h4>La boucle cardiaque (J23-J28)</h4>
<p>Le tube cardiaque croît plus vite que la cavité péricardique qui le contient : il s'incurve et se tord (<strong>looping</strong>) entre J23 et J28. Le segment bulbo-ventriculaire se déplace <strong>ventralement, caudalement et vers la droite</strong>, tandis que l'atrium et le sinus venosus se déplacent <strong>dorsalement, crânialement et vers la gauche</strong>. Le tube initialement rectiligne prend une forme de <strong>S</strong> puis de <strong>U</strong> (anse bulbo-ventriculaire), avec le bulbus à droite et le ventricule primitif à gauche. Cette boucle est <strong>asymétrique</strong>, orientée à <strong>droite</strong> (D-loop) sous le contrôle des gènes de latéralité (Nodal, Pitx2 exprimé à gauche) : c'est la première manifestation morphologique de l'asymétrie droite-gauche. À la fin de la 4<sup>e</sup> semaine, la disposition est celle du cœur définitif : atria en arrière et en haut, ventricules en avant et en bas, ventricule droit à droite, voie d'éjection en avant. Une inversion de la boucle (L-loop) donne une <strong>dextrocardie</strong>.</p>
<h4>Le canal atrio-ventriculaire et les bourrelets endocardiques</h4>
<p>Entre l'atrium primitif et le ventricule primitif, le tube reste étroit : c'est le <strong>canal atrio-ventriculaire</strong> (CAV), initialement unique et à gauche, qui s'élargit vers la droite pour se placer au-dessus des deux ventricules. Dans sa paroi, la gelée cardiaque s'épaissit et se peuple de cellules mésenchymateuses issues de l'endocarde par <strong>transition endothélio-mésenchymateuse</strong> (induite par TGF-bêta et BMP du myocarde) : ce sont les <strong>bourrelets endocardiques</strong> (coussins endocardiques), supérieur (dorsal) et inférieur (ventral), accessoirement latéraux. Les bourrelets supérieur et inférieur <strong>fusionnent</strong> au cours de la 5<sup>e</sup> semaine en un <strong>septum intermedium</strong> qui divise le canal en <strong>orifice atrio-ventriculaire droit</strong> (futur orifice tricuspide) et <strong>orifice atrio-ventriculaire gauche</strong> (mitral). Les bourrelets participent ensuite à la formation des <strong>valves atrio-ventriculaires</strong> (avec le myocarde sous-jacent, qui se creuse pour former les cordages et les piliers), à la fermeture du foramen ovale primitif (septum primum) et à la partie membraneuse du septum interventriculaire.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le ventricule <strong>gauche</strong> dérive du ventricule <strong>primitif</strong> et le ventricule <strong>droit</strong> du <strong>bulbus cordis</strong> proximal ; la boucle cardiaque est tournée vers la <strong>droite</strong> ; les coussins endocardiques sont impliqués dans les trois cloisonnements (atrial, atrio-ventriculaire et ventriculaire), ce qui explique le canal atrio-ventriculaire commun de la trisomie 21.</div>`
            },
            {
              titre: "Le cloisonnement des atria",
              contenu: `<p>Le cloisonnement des atria (5<sup>e</sup>-6<sup>e</sup> semaine) aboutit à un septum interatrial qui doit rester <strong>perméable pendant toute la vie fœtale</strong> (passage du sang oxygéné de droite à gauche) et se fermer à la naissance. Il repose sur <strong>deux septa</strong> successifs et <strong>deux orifices</strong> successifs.</p>
<ol>
<li>Au début de la 5<sup>e</sup> semaine, une crête en forme de croissant, le <strong>septum primum</strong>, descend du <strong>toit</strong> de l'atrium primitif vers les coussins endocardiques, délimitant un orifice entre son bord libre et les coussins : l'<strong>ostium primum</strong> (foramen primum).</li>
<li>Avant que le septum primum n'atteigne les coussins (ce qui fermerait complètement l'ostium primum), des <strong>perforations</strong> apparaissent par apoptose dans sa <strong>partie supérieure</strong> et confluent en un second orifice : l'<strong>ostium secundum</strong> (foramen secundum). Le septum primum fusionne alors avec les coussins endocardiques et l'ostium primum disparaît (fin de la 5<sup>e</sup> semaine), mais le passage droite-gauche est maintenu par l'ostium secundum.</li>
<li>Au cours de la 6<sup>e</sup> semaine, une seconde cloison, épaisse et musculaire, le <strong>septum secundum</strong>, descend du toit de l'atrium <strong>à droite</strong> du septum primum. Il recouvre progressivement l'ostium secundum mais reste <strong>incomplet</strong> : son bord libre inférieur concave délimite un orifice ovalaire, le <strong>foramen ovale</strong> (trou de Botal).</li>
<li>La partie supérieure du septum primum disparaît ; sa partie restante, mince et souple, forme la <strong>valvule du foramen ovale</strong>, appliquée du côté gauche du septum secundum. Pendant la vie fœtale, la pression de l'atrium droit (retour veineux cave inférieur abondant) écarte cette valvule et le sang passe de l'atrium droit à l'atrium gauche à travers le foramen ovale puis l'ostium secundum (les deux orifices sont décalés : le trajet est en « chicane »). Le passage inverse est impossible (effet de clapet).</li>
<li>À la naissance, l'élévation de la pression dans l'atrium gauche plaque la valvule (septum primum) contre le septum secundum : <strong>fermeture fonctionnelle</strong> immédiate ; la <strong>fusion anatomique</strong> s'effectue en quelques mois, laissant la <strong>fosse ovale</strong> bordée par le limbe de la fosse ovale (bord du septum secundum). Chez 20 à 25 % des adultes, la fusion est incomplète (foramen ovale perméable).</li>
</ol>
<h4>Autres transformations des atria</h4>
<ul>
<li>L'<strong>atrium droit</strong> incorpore la corne droite du <strong>sinus venosus</strong> (partie lisse, sinus des veines caves, recevant les veines caves et le sinus coronaire) ; la paroi d'origine atriale primitive, trabéculée, forme l'auricule droite ; la limite est la <strong>crête terminale</strong>. Les valvules du sinus venosus donnent la valvule d'Eustachi (veine cave inférieure) et la valvule de Thébésius (sinus coronaire).</li>
<li>L'<strong>atrium gauche</strong> incorpore la <strong>veine pulmonaire primitive</strong> (bourgeonnée à partir de sa paroi dorsale) et ses quatre branches, dont la paroi forme la partie lisse de l'atrium gauche (les quatre veines pulmonaires s'abouchent séparément) ; la partie trabéculée se réduit à l'auricule gauche.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> septum primum (mince, à gauche) -> ostium primum (fermé par fusion avec les coussins) -> ostium secundum (perforations hautes du septum primum) -> septum secundum (épais, à droite, incomplet) -> foramen ovale fermé par la valvule (reste du septum primum) à la naissance.</div>`
            },
            {
              titre: "Le cloisonnement des ventricules et du cône-tronc",
              contenu: `<h4>Le septum interventriculaire</h4>
<p>À la fin de la 4<sup>e</sup> semaine, les deux ventricules primitifs (ventricule gauche issu du ventricule primitif, ventricule droit issu du bulbus) se dilatent de part et d'autre d'un sillon ; la paroi médiane correspondante forme une crête musculaire qui s'élève du plancher vers les coussins endocardiques : c'est le <strong>septum interventriculaire musculaire</strong> (septum inferius). Sa croissance résulte de l'expansion des deux ventricules et de la fusion des trabécules médianes plus que d'une croissance active. Il laisse persister, jusqu'à la fin de la <strong>7<sup>e</sup> semaine</strong>, un orifice entre son bord libre et les coussins : le <strong>foramen interventriculaire</strong>.</p>
<p>Ce foramen est fermé par la <strong>partie membraneuse</strong> du septum interventriculaire, petite et fibreuse, formée par la fusion de trois contributions : le <strong>coussin endocardique inférieur</strong> (septum intermedium), le <strong>bourrelet conal droit</strong> et le <strong>bourrelet conal gauche</strong> (prolongements des crêtes du cône-tronc). Cette fermeture (7<sup>e</sup> semaine) place définitivement l'aorte au-dessus du ventricule gauche et le tronc pulmonaire au-dessus du ventricule droit.</p>
<h4>Le cloisonnement du cône et du tronc artériel</h4>
<p>Au cours de la 5<sup>e</sup> semaine, deux crêtes longitudinales en spirale, les <strong>crêtes (ou bourrelets) troncales et conales</strong>, se développent dans la lumière du tronc et du cône artériel. Elles sont colonisées par des cellules des <strong>crêtes neurales cardiaques</strong> (migrant par les arcs pharyngiens 3, 4 et 6). Leur fusion, de haut en bas et en <strong>spirale</strong> (rotation de 180 degrés), forme le <strong>septum aortico-pulmonaire</strong>, qui divise :</p>
<ul>
<li>le <strong>tronc artériel</strong> en <strong>aorte ascendante</strong> et <strong>tronc pulmonaire</strong>, enroulés l'un autour de l'autre (ce qui explique que le tronc pulmonaire naisse en avant et à gauche puis passe en arrière de l'aorte) ;</li>
<li>le <strong>cône artériel</strong> en <strong>chambre de chasse du ventricule droit</strong> (infundibulum pulmonaire, musculaire) et <strong>chambre de chasse du ventricule gauche</strong> (vestibule aortique).</li>
</ul>
<p>Les <strong>valves semi-lunaires</strong> (aortique et pulmonaire, trois valvules chacune) se forment à partir de tubercules des crêtes troncales et de deux tubercules accessoires, creusés et amincis à la jonction tronc-cône (6<sup>e</sup>-9<sup>e</sup> semaine).</p>
<h4>Le tissu de conduction</h4>
<p>Le <strong>nœud sinusal</strong> dérive du myocarde de la corne droite du sinus venosus ; le <strong>nœud atrio-ventriculaire</strong> et le <strong>faisceau de His</strong> du myocarde du canal atrio-ventriculaire et du septum ; l'<strong>anneau fibreux</strong> isolant atria et ventricules provient du mésenchyme épicardique.</p>
<table>
<thead><tr><th>Cloisonnement</th><th>Semaines</th><th>Structures</th><th>Participation des coussins endocardiques</th></tr></thead>
<tbody>
<tr><td>Canal atrio-ventriculaire</td><td>4-5</td><td>Coussins supérieur et inférieur -> septum intermedium ; valves mitrale et tricuspide</td><td>Oui (principale)</td></tr>
<tr><td>Atria</td><td>5-6</td><td>Septum primum, ostium primum, ostium secundum, septum secundum, foramen ovale</td><td>Oui (fermeture de l'ostium primum)</td></tr>
<tr><td>Ventricules</td><td>4-7</td><td>Septum musculaire (plancher), septum membraneux (coussins + bourrelets conaux)</td><td>Oui (partie membraneuse)</td></tr>
<tr><td>Cône-tronc</td><td>5-8</td><td>Crêtes conotroncales spiralées -> septum aortico-pulmonaire ; valves semi-lunaires</td><td>Non (crêtes neurales)</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Les arcs aortiques et le système artériel",
              contenu: `<p>Le <strong>sac aortique</strong> donne naissance à <strong>six paires d'arcs aortiques</strong> successifs (qui ne coexistent jamais tous : les premiers régressent quand les derniers apparaissent, entre la 4<sup>e</sup> et la 7<sup>e</sup> semaine), qui traversent les arcs pharyngiens correspondants pour rejoindre les deux <strong>aortes dorsales</strong>. Celles-ci fusionnent en une aorte dorsale unique en arrière du 4<sup>e</sup> segment thoracique. Le 5<sup>e</sup> arc est rudimentaire ou absent chez l'homme. Le remaniement est <strong>asymétrique</strong> : les arcs du côté droit régressent en grande partie, ceux du côté gauche persistent (crosse aortique à gauche).</p>
<table>
<thead><tr><th>Arc aortique</th><th>Dérivés</th></tr></thead>
<tbody>
<tr><td><strong>1<sup>er</sup></strong></td><td>Régresse en grande partie ; <strong>artère maxillaire</strong> (et une partie de la carotide externe)</td></tr>
<tr><td><strong>2<sup>e</sup></strong></td><td>Régresse ; <strong>artère stapédienne</strong> (transitoire chez l'homme) et artère hyoïdienne</td></tr>
<tr><td><strong>3<sup>e</sup></strong></td><td><strong>Artère carotide commune</strong> et segment proximal de l'<strong>artère carotide interne</strong> (le reste de la carotide interne provient de l'aorte dorsale crâniale ; la carotide externe bourgeonne du 3<sup>e</sup> arc)</td></tr>
<tr><td><strong>4<sup>e</sup></strong></td><td><strong>Gauche</strong> : portion de la <strong>crosse de l'aorte</strong> entre la carotide commune gauche et la sous-clavière gauche. <strong>Droit</strong> : segment proximal de l'<strong>artère sous-clavière droite</strong> (le reste venant de l'aorte dorsale droite et de la 7<sup>e</sup> artère intersegmentaire)</td></tr>
<tr><td><strong>5<sup>e</sup></strong></td><td>Absent ou rudimentaire</td></tr>
<tr><td><strong>6<sup>e</sup></strong></td><td><strong>Gauche</strong> : segment proximal de l'<strong>artère pulmonaire gauche</strong> et <strong>canal artériel</strong> (ductus arteriosus). <strong>Droit</strong> : segment proximal de l'<strong>artère pulmonaire droite</strong> (la partie distale régresse, d'où l'absence de canal artériel droit)</td></tr>
<tr><td>Sac aortique</td><td>Tronc brachio-céphalique (corne droite) et portion proximale de la crosse (corne gauche)</td></tr>
<tr><td>Aorte dorsale droite</td><td>Régresse entre la 7<sup>e</sup> intersegmentaire et la fusion ; sa partie crâniale participe à la sous-clavière droite</td></tr>
<tr><td>Aorte dorsale gauche</td><td>Aorte descendante</td></tr>
<tr><td>7<sup>e</sup> artères intersegmentaires</td><td>Artères sous-clavières (gauche en totalité, droite en partie)</td></tr>
</tbody>
</table>
<p>La régression différentielle explique le trajet des <strong>nerfs laryngés récurrents</strong> (branches du X) : ils contournent initialement le 6<sup>e</sup> arc des deux côtés ; à droite, la disparition de la partie distale du 6<sup>e</sup> arc et du 5<sup>e</sup> permet au nerf de remonter jusqu'au 4<sup>e</sup> arc (artère sous-clavière droite), tandis qu'à gauche il reste accroché au canal artériel (futur ligament artériel), sous la crosse de l'aorte.</p>
<h4>Les autres artères</h4>
<ul>
<li>Les <strong>artères vitellines</strong> donnent les trois artères impaires de l'intestin : <strong>tronc cœliaque</strong> (intestin antérieur), <strong>artère mésentérique supérieure</strong> (intestin moyen), <strong>artère mésentérique inférieure</strong> (intestin postérieur).</li>
<li>Les <strong>artères ombilicales</strong> (branches des artères iliaques internes) transportent le sang vers le placenta ; après la naissance, la portion proximale persiste (artères vésicales supérieures) et la portion distale s'oblitère (ligaments ombilicaux médiaux).</li>
<li>Les <strong>artères intersegmentaires</strong> (branches dorsales de l'aorte) donnent les artères vertébrales, intercostales, lombaires et les sous-clavières (7<sup>e</sup>).</li>
</ul>
<h4>Anomalies des arcs aortiques</h4>
<ul>
<li><strong>Coarctation de l'aorte</strong> (rétrécissement de l'isthme près du canal artériel ; fréquente dans le syndrome de Turner) : hypertension des membres supérieurs, pouls fémoraux faibles.</li>
<li><strong>Double arc aortique</strong> ou <strong>arc aortique droit</strong> (persistance de l'aorte dorsale droite) : anneau vasculaire comprimant la trachée et l'œsophage ; <strong>artère sous-clavière droite rétro-œsophagienne</strong> (arteria lusoria, régression anormale du 4<sup>e</sup> arc droit) : dysphagie.</li>
<li><strong>Interruption de l'arc aortique</strong> (syndrome de Di George) ; <strong>persistance du canal artériel</strong> (prématuré, rubéole).</li>
</ul>`
            },
            {
              titre: "Le système veineux",
              contenu: `<p>Trois systèmes veineux pairs se jettent dans le sinus venosus à la 4<sup>e</sup> semaine :</p>
<ul>
<li>Les <strong>veines vitellines</strong> (omphalo-mésentériques), drainant la vésicule vitelline et l'intestin : elles traversent le septum transversum (futur foie), s'anastomosent autour du duodénum et sont fragmentées par les cordons hépatiques en <strong>sinusoïdes hépatiques</strong>. Dérivés : <strong>veine porte</strong>, veines mésentériques supérieure et splénique (anastomoses), <strong>veines sus-hépatiques</strong> et segment hépatique de la veine cave inférieure (veine vitelline droite proximale, dite veine hépato-cardiaque). La veine vitelline gauche proximale disparaît.</li>
<li>Les <strong>veines ombilicales</strong>, ramenant le sang du placenta : elles passent de part et d'autre du foie ; la <strong>veine ombilicale droite</strong> et la partie proximale de la gauche <strong>disparaissent</strong> (2<sup>e</sup> mois) ; la veine ombilicale gauche distale persiste et se connecte aux sinusoïdes puis directement à la veine cave inférieure par le <strong>canal d'Arantius</strong> (ductus venosus), shunt intra-hépatique. Après la naissance : <strong>ligament rond</strong> (veine ombilicale) et <strong>ligament veineux</strong> (canal d'Arantius).</li>
<li>Les <strong>veines cardinales</strong>, drainant le corps de l'embryon : <strong>cardinales antérieures</strong> (tête, cou) et <strong>postérieures</strong> (tronc), réunies en <strong>veines cardinales communes</strong> (canaux de Cuvier) qui se jettent dans les cornes du sinus venosus ; puis veines <strong>subcardinales</strong> (reins) et <strong>supracardinales</strong>. Dérivés : <strong>veine cave supérieure</strong> (cardinale antérieure droite et cardinale commune droite), <strong>tronc brachio-céphalique gauche</strong> (anastomose entre les cardinales antérieures), <strong>sinus coronaire</strong> (corne gauche du sinus venosus et cardinale commune gauche), veines azygos (supracardinales), veines rénales et gonadiques (subcardinales) ; la <strong>veine cave inférieure</strong> est composite : segment hépatique (veine vitelline droite), pré-rénal (subcardinale droite), rénal (anastomose), post-rénal (supracardinale droite).</li>
</ul>
<p>Le drainage veineux se latéralise vers la <strong>droite</strong> par régression des structures gauches et anastomoses gauche-droite. Anomalies souvent asymptomatiques : <strong>veine cave supérieure gauche persistante</strong> (drainée dans le sinus coronaire), double veine cave inférieure, <strong>retour veineux pulmonaire anormal</strong> (cardiopathie cyanogène si total).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> veines vitellines -> système porte et sinusoïdes hépatiques ; veine ombilicale gauche -> canal d'Arantius puis ligament rond ; veines cardinales -> veines caves, azygos, brachio-céphalique, sinus coronaire. La veine cave inférieure a quatre origines ; la droite domine.</div>`
            },
            {
              titre: "Les cardiopathies congénitales",
              contenu: `<p>Les <strong>cardiopathies congénitales</strong> sont les malformations les plus fréquentes : <strong>8 pour 1 000 naissances</strong> (1 %), soit 6 000 à 8 000 enfants par an en France ; 25 % sont critiques en période néonatale. Leur étiologie est multifactorielle (90 %) ; les causes identifiées comprennent les anomalies chromosomiques (trisomie 21 : 40 à 50 % de cardiopathies, surtout canal atrio-ventriculaire ; trisomies 18 et 13 ; Turner : coarctation ; microdélétion 22q11 : conotroncales), les syndromes monogéniques (Noonan, Marfan, Williams, Holt-Oram, Alagille) et les tératogènes (rubéole, alcool, lithium, rétinoïdes, antiépileptiques, diabète maternel, phénylcétonurie). On distingue classiquement les cardiopathies <strong>non cyanogènes</strong> avec shunt gauche-droite, les <strong>obstructives</strong> et les <strong>cyanogènes</strong> (shunt droite-gauche : sang désaturé dans la circulation systémique).</p>
<table>
<thead><tr><th>Cardiopathie</th><th>Fréquence</th><th>Mécanisme embryologique</th><th>Physiopathologie</th></tr></thead>
<tbody>
<tr><td><strong>Communication interventriculaire (CIV)</strong></td><td>25 à 30 % (la plus fréquente)</td><td>Défaut de fermeture du foramen interventriculaire, le plus souvent <strong>partie membraneuse</strong> (défaut de fusion des coussins et des bourrelets conaux) ; parfois musculaire</td><td>Shunt gauche-droite, souffle systolique ; fermeture spontanée fréquente des petites CIV ; hyperdébit pulmonaire si large</td></tr>
<tr><td><strong>Communication interatriale (CIA)</strong></td><td>10 %</td><td><strong>Ostium secundum</strong> (80 % : résorption excessive du septum primum ou septum secundum trop court) ; <strong>ostium primum</strong> (défaut des coussins, associé à une fente mitrale, forme partielle du CAV) ; sinus venosus ; sinus coronaire</td><td>Shunt gauche-droite, souvent asymptomatique jusqu'à l'âge adulte ; à distinguer du foramen ovale perméable (pas de défaut de tissu)</td></tr>
<tr><td><strong>Canal atrio-ventriculaire commun (CAV)</strong></td><td>4 à 5 % ; 40 % des cardiopathies de la <strong>trisomie 21</strong></td><td>Défaut de fusion des <strong>coussins endocardiques</strong> : CIA ostium primum + CIV haute + valve atrio-ventriculaire unique</td><td>Shunt important, insuffisance cardiaque précoce, hypertension pulmonaire</td></tr>
<tr><td><strong>Persistance du canal artériel</strong></td><td>5 à 10 % (surtout prématurés)</td><td>Absence de fermeture du 6<sup>e</sup> arc gauche distal</td><td>Shunt aorte-pulmonaire gauche-droite, souffle continu</td></tr>
<tr><td><strong>Tétralogie de Fallot</strong></td><td>5 à 10 % ; cardiopathie <strong>cyanogène la plus fréquente</strong></td><td>Déplacement antérieur et droit du septum conal (crêtes neurales) : 1) <strong>sténose pulmonaire</strong> (infundibulaire), 2) <strong>CIV</strong>, 3) <strong>aorte à cheval</strong> sur la CIV (dextroposition), 4) <strong>hypertrophie ventriculaire droite</strong></td><td>Shunt droite-gauche par la CIV, cyanose dépendant du degré de sténose ; malaises anoxiques ; associée au 22q11</td></tr>
<tr><td><strong>Transposition des gros vaisseaux</strong></td><td>5 % ; première cause de cyanose néonatale</td><td>Défaut de spiralisation du <strong>septum aortico-pulmonaire</strong> (rectiligne) : aorte sur le ventricule droit, tronc pulmonaire sur le ventricule gauche</td><td>Deux circulations en parallèle incompatibles avec la vie sans shunt (foramen ovale, canal artériel, CIV) ; cyanose majeure dès la naissance ; prostaglandines et atrioseptostomie de Rashkind puis switch artériel</td></tr>
<tr><td><strong>Tronc artériel commun</strong> (truncus)</td><td>1 à 2 %</td><td>Absence de septum aortico-pulmonaire (crêtes neurales, 22q11) : un seul vaisseau avec CIV</td><td>Mélange complet, cyanose modérée, hyperdébit pulmonaire</td></tr>
<tr><td><strong>Coarctation de l'aorte</strong></td><td>5 à 8 %</td><td>Rétrécissement de l'isthme aortique (anomalie du 4<sup>e</sup> arc gauche / migration de tissu ductal) ; Turner</td><td>Hypertension des membres supérieurs, pouls fémoraux abolis ; forme pré-ductale néonatale sévère</td></tr>
<tr><td><strong>Sténoses valvulaires</strong> (pulmonaire, aortique), <strong>bicuspidie aortique</strong></td><td>Sténose pulmonaire 5 à 8 % ; bicuspidie 1 à 2 % de la population</td><td>Anomalie de formation des valves semi-lunaires (fusion de commissures)</td><td>Obstruction, souffle ; la bicuspidie est la malformation cardiaque la plus fréquente de l'adulte (sténose aortique calcifiée)</td></tr>
<tr><td><strong>Hypoplasie du cœur gauche</strong></td><td>2 à 3 %</td><td>Atrésie ou hypoplasie de la mitrale et/ou de l'aorte avec ventricule gauche hypoplasique</td><td>Circulation systémique ducto-dépendante ; décès rapide sans chirurgie palliative (Norwood)</td></tr>
<tr><td><strong>Maladie d'Ebstein</strong></td><td>Rare</td><td>Insertion basse de la valve tricuspide dans le ventricule droit (atrialisation) ; lithium</td><td>Insuffisance tricuspide, cyanose, troubles du rythme</td></tr>
<tr><td><strong>Dextrocardie, situs inversus</strong></td><td>Rare</td><td>Boucle cardiaque inversée (L-loop) ; anomalies de latéralité</td><td>Isolée : souvent asymptomatique ; hétérotaxie : cardiopathies complexes</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le dépistage anténatal des cardiopathies repose sur la coupe des <strong>quatre cavités</strong> et l'étude des <strong>voies d'éjection</strong> à l'échographie de 22 SA (sensibilité 40 à 60 %, meilleure pour les cardiopathies complexes), complétée par une échocardiographie fœtale spécialisée en cas de risque (antécédent familial, diabète, clarté nucale épaisse, anomalie chromosomique). Toute cardiopathie conotroncale fait rechercher une microdélétion 22q11 ; tout canal atrio-ventriculaire fait rechercher une trisomie 21. À la naissance, la mesure de la saturation en oxygène (dépistage des cardiopathies cyanogènes critiques) et la palpation des pouls fémoraux (coarctation) sont systématiques.</div>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la tétralogie de Fallot comporte une sténose <strong>pulmonaire</strong> (pas aortique) et une <strong>aorte</strong> à cheval ; la cyanose y est variable, alors que dans la transposition des gros vaisseaux elle est constante et majeure dès la naissance. La CIV est la cardiopathie la plus fréquente ; le CAV est celle de la trisomie 21 ; les cardiopathies conotroncales (Fallot, truncus, interruption de l'arc) sont celles du 22q11 (crêtes neurales).</div>`
            }
          ],
          points_cles: [
            "L'aire cardiogène (splanchnopleure en fer à cheval en avant de la plaque préchordale) forme deux tubes endocardiques qui fusionnent en un tube cardiaque unique à J21-J22 lors des plicatures ; le cœur bat à J22.",
            "Segments du tube (caudal vers céphalique) : sinus venosus (parties lisses des atria, sinus coronaire), atrium primitif (auricules), ventricule primitif (ventricule gauche), bulbus cordis (ventricule droit, cône, tronc), sac aortique (arcs).",
            "La boucle cardiaque (J23-J28) est orientée à droite (D-loop, Pitx2) ; son inversion donne une dextrocardie.",
            "Les coussins endocardiques fusionnent en septum intermedium (orifices tricuspide et mitral) et participent aux valves AV, à la fermeture de l'ostium primum et au septum membraneux ; leur défaut donne le canal atrio-ventriculaire (trisomie 21).",
            "Cloisonnement atrial : septum primum (ostium primum, puis ostium secundum par perforations hautes), septum secundum à droite, incomplet (foramen ovale) ; valvule du foramen ovale = reste du septum primum ; fermeture à la naissance par inversion des pressions.",
            "Cloisonnement ventriculaire : septum musculaire du plancher, foramen interventriculaire fermé à la 7e semaine par le septum membraneux (coussins + bourrelets conaux) ; cloisonnement conotroncal par les crêtes spiralées des crêtes neurales (septum aortico-pulmonaire, 180 degrés).",
            "Arcs aortiques : 1er maxillaire, 2e stapédienne, 3e carotides, 4e gauche crosse aortique / 4e droit sous-clavière droite, 5e absent, 6e artères pulmonaires et canal artériel (gauche) ; nerf récurrent gauche sous la crosse, droit sous la sous-clavière.",
            "Veines : vitellines (système porte, sinusoïdes, segment hépatique de la VCI), ombilicales (gauche persiste, canal d'Arantius, ligament rond), cardinales (veines caves, azygos, brachio-céphalique gauche, sinus coronaire) ; la VCI a quatre origines.",
            "Cardiopathies congénitales : 8/1 000 naissances ; CIV la plus fréquente (membraneuse) ; CIA ostium secundum ; CAV (trisomie 21) ; Fallot (sténose pulmonaire, CIV, aorte à cheval, HVD, cyanogène la plus fréquente) ; transposition (septum rectiligne, cyanose néonatale) ; truncus et interruption de l'arc (22q11) ; coarctation (Turner) ; persistance du canal artériel (prématuré, rubéole)."
          ],
          lexique: [
            { terme: "Aire cardiogène", def: "Région de splanchnopleure en fer à cheval, en avant de la plaque préchordale, d'où dérivent les tubes endocardiques et le tube cardiaque." },
            { terme: "Bulbus cordis", def: "Segment céphalique du tube cardiaque donnant le ventricule droit (partie proximale), le cône artériel et le tronc artériel." },
            { terme: "Boucle cardiaque", def: "Incurvation et torsion du tube cardiaque vers la droite (J23-J28) plaçant les ventricules en avant et en bas et les atria en arrière et en haut." },
            { terme: "Coussins endocardiques", def: "Bourrelets mésenchymateux du canal atrio-ventriculaire issus de l'endocarde, à l'origine du septum intermedium, des valves atrio-ventriculaires et de la partie membraneuse du septum interventriculaire." },
            { terme: "Septum primum / septum secundum", def: "Première cloison interatriale mince (dont le reste forme la valvule du foramen ovale) et seconde cloison épaisse, à droite, incomplète, délimitant le foramen ovale." },
            { terme: "Ostium primum / ostium secundum", def: "Orifice entre le septum primum et les coussins (fermé à la 5e semaine), puis orifice formé par perforation de la partie haute du septum primum (maintenu pendant la vie fœtale)." },
            { terme: "Septum aortico-pulmonaire", def: "Cloison spiralée issue des crêtes conotroncales colonisées par les crêtes neurales, séparant aorte et tronc pulmonaire." },
            { terme: "Arcs aortiques", def: "Six paires d'artères reliant le sac aortique aux aortes dorsales à travers les arcs pharyngiens, remaniées asymétriquement en gros vaisseaux du cou et du thorax." },
            { terme: "Tétralogie de Fallot", def: "Cardiopathie cyanogène associant sténose pulmonaire infundibulaire, CIV, aorte à cheval et hypertrophie ventriculaire droite, par déplacement antérieur du septum conal." },
            { terme: "Transposition des gros vaisseaux", def: "Cardiopathie cyanogène par défaut de spiralisation du septum aortico-pulmonaire : aorte issue du ventricule droit, tronc pulmonaire du ventricule gauche." }
          ],
          qcm: [
            {
              q: "Concernant la formation du tube cardiaque :",
              options: [
                "A. L'aire cardiogène dérive de la splanchnopleure intra-embryonnaire.",
                "B. Les deux tubes endocardiques fusionnent lors de la plicature latérale.",
                "C. Le cœur commence à battre à la fin de la 6e semaine.",
                "D. Le ventricule gauche dérive du bulbus cordis.",
                "E. Le sinus venosus reçoit les veines vitellines, ombilicales et cardinales communes."
              ],
              bonnes: [0, 1, 4],
              explication: "A, B et E sont vraies. C est fausse : le cœur bat dès J22. D est fausse : le ventricule gauche dérive du ventricule primitif ; le bulbus cordis donne le ventricule droit, le cône et le tronc."
            },
            {
              q: "Concernant le cloisonnement des atria :",
              options: [
                "A. Le septum primum se développe à partir du toit de l'atrium primitif.",
                "B. L'ostium secundum résulte de perforations dans la partie supérieure du septum primum.",
                "C. Le septum secundum se développe à gauche du septum primum.",
                "D. Le foramen ovale est délimité par le bord libre du septum secundum.",
                "E. La valvule du foramen ovale est constituée par le reste du septum primum."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le septum secundum se développe à droite du septum primum."
            },
            {
              q: "Concernant le cloisonnement des ventricules et du cône-tronc :",
              options: [
                "A. La partie membraneuse du septum interventriculaire se forme avant la partie musculaire.",
                "B. Le foramen interventriculaire se ferme à la fin de la 7e semaine.",
                "C. Le septum aortico-pulmonaire est spiralé et dérive des crêtes neurales.",
                "D. Les coussins endocardiques participent à la partie membraneuse du septum interventriculaire.",
                "E. Un défaut de spiralisation du septum aortico-pulmonaire est à l'origine de la transposition des gros vaisseaux."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : la partie musculaire se forme d'abord (4e-5e semaine), le foramen est fermé secondairement par la partie membraneuse (7e semaine). B, C, D et E sont vraies."
            },
            {
              q: "Concernant les arcs aortiques :",
              options: [
                "A. Le 3e arc donne l'artère carotide commune.",
                "B. Le 4e arc gauche donne une portion de la crosse de l'aorte.",
                "C. Le 6e arc gauche donne le canal artériel.",
                "D. Le 1er arc donne l'artère sous-clavière droite.",
                "E. Le 5e arc est bien développé chez l'homme et donne les artères pulmonaires."
              ],
              bonnes: [0, 1, 2],
              explication: "A, B et C sont vraies. D est fausse : le 1er arc donne l'artère maxillaire ; la sous-clavière droite dérive du 4e arc droit. E est fausse : le 5e arc est absent ou rudimentaire ; les artères pulmonaires dérivent du 6e arc."
            },
            {
              q: "Concernant le système veineux :",
              options: [
                "A. Les veines vitellines sont à l'origine du système porte.",
                "B. La veine ombilicale droite persiste et forme le canal d'Arantius.",
                "C. La veine cave supérieure dérive de la veine cardinale antérieure droite et de la cardinale commune droite.",
                "D. Le sinus coronaire dérive de la corne gauche du sinus venosus.",
                "E. La veine cave inférieure a une origine unique à partir de la veine cardinale postérieure gauche."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : c'est la veine ombilicale gauche qui persiste, la droite disparaît. E est fausse : la VCI est composite (vitelline droite, subcardinale, anastomose, supracardinale droite)."
            },
            {
              q: "Concernant les cardiopathies congénitales :",
              options: [
                "A. La communication interventriculaire est la cardiopathie congénitale la plus fréquente.",
                "B. Le canal atrio-ventriculaire commun est fréquent dans la trisomie 21.",
                "C. La tétralogie de Fallot comporte une sténose aortique.",
                "D. La transposition des gros vaisseaux est responsable d'une cyanose néonatale majeure.",
                "E. Les cardiopathies conotroncales sont associées à la microdélétion 22q11."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la tétralogie de Fallot comporte une sténose pulmonaire, une CIV, une aorte à cheval et une hypertrophie ventriculaire droite."
            },
            {
              q: "Concernant la tétralogie de Fallot et les shunts :",
              options: [
                "A. La tétralogie de Fallot est la cardiopathie cyanogène la plus fréquente.",
                "B. Elle résulte d'un déplacement antérieur du septum conal.",
                "C. La communication interatriale de type ostium secundum résulte d'un défaut des coussins endocardiques.",
                "D. La persistance du canal artériel entraîne un shunt gauche-droite.",
                "E. La coarctation de l'aorte est fréquente dans le syndrome de Turner."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la CIA ostium secundum résulte d'une résorption excessive du septum primum ou d'un septum secundum court ; c'est la CIA ostium primum qui relève d'un défaut des coussins endocardiques."
            }
          ]
        },
        {
          id: "appareil-respiratoire",
          titre: "Développement de l'appareil respiratoire",
          duree: 30,
          objectifs: [
            "Décrire l'origine du bourgeon respiratoire à partir de l'intestin antérieur et la formation du septum trachéo-œsophagien.",
            "Décrire la ramification de l'arbre bronchique et l'origine des différents tissus du poumon (entoblaste et mésoblaste).",
            "Connaître les cinq stades de la maturation pulmonaire et leur chronologie.",
            "Expliquer la synthèse du surfactant, sa maturation et son rôle à la naissance.",
            "Connaître les principales malformations : atrésie de l'œsophage et fistule trachéo-œsophagienne, hernie diaphragmatique, hypoplasie pulmonaire, séquestration, malformation adénomatoïde kystique."
          ],
          sections: [
            {
              titre: "Le bourgeon respiratoire et la séparation trachéo-œsophagienne",
              contenu: `<p>L'appareil respiratoire se développe à partir de deux sources : l'<strong>entoblaste</strong> de l'intestin antérieur, qui donne l'<strong>épithélium</strong> de tout l'arbre respiratoire (larynx, trachée, bronches, bronchioles, alvéoles) et de ses glandes, et le <strong>mésoblaste splanchnique</strong> (splanchnopleure) qui l'entoure, qui donne le <strong>cartilage</strong>, le <strong>muscle lisse</strong>, le <strong>tissu conjonctif</strong>, les <strong>vaisseaux</strong> et la <strong>plèvre viscérale</strong>. La plèvre pariétale dérive de la somatopleure.</p>
<h4>Le diverticule respiratoire (J26-J28)</h4>
<p>Vers le <strong>26<sup>e</sup>-28<sup>e</sup> jour</strong> (4<sup>e</sup> semaine), la paroi <strong>ventrale</strong> de l'intestin antérieur (intestin pharyngien, au niveau de la future région laryngée, juste en arrière des poches pharyngiennes) s'épaissit puis bourgeonne : c'est le <strong>diverticule respiratoire</strong> (ou bourgeon laryngo-trachéal, bourgeon pulmonaire), précédé d'une dépression médiane, le <strong>sillon laryngo-trachéal</strong>. Son apparition est induite par le mésoderme adjacent via l'acide rétinoïque, le FGF10 et l'expression du facteur de transcription <strong>NKX2-1</strong> (TTF-1) dans l'entoblaste ventral, tandis que l'entoblaste dorsal exprime <strong>SOX2</strong> (devenir œsophagien).</p>
<h4>La séparation de la trachée et de l'œsophage</h4>
<p>Le diverticule s'allonge vers le bas et vers l'avant, parallèlement à l'intestin antérieur. Deux <strong>crêtes</strong> (replis trachéo-œsophagiens) longitudinales se développent sur les parois latérales de l'intestin antérieur, de part et d'autre du sillon, et <strong>fusionnent sur la ligne médiane</strong> pour former le <strong>septum trachéo-œsophagien</strong> (ou éperon trachéo-œsophagien), qui sépare, de bas en haut, le tube en deux conduits : en <strong>avant</strong>, le <strong>tube laryngo-trachéal</strong> (futurs larynx, trachée et poumons) ; en <strong>arrière</strong>, l'<strong>œsophage</strong>. La séparation est achevée vers la 5<sup>e</sup> semaine (J35), mais la communication persiste en haut au niveau de l'<strong>orifice laryngé</strong> (aditus), qui s'ouvre dans le pharynx.</p>
<h4>Le larynx</h4>
<p>L'<strong>épithélium</strong> du larynx est entoblastique, mais ses <strong>cartilages</strong> et ses <strong>muscles</strong> dérivent des <strong>4<sup>e</sup> et 6<sup>e</sup> arcs pharyngiens</strong> (cartilages thyroïde, cricoïde, aryténoïdes : mésoderme et crêtes neurales des arcs ; muscles innervés par le X : nerf laryngé supérieur pour le 4<sup>e</sup> arc, nerf laryngé récurrent pour le 6<sup>e</sup>). L'épiglotte dérive de la partie caudale de l'éminence hypopharyngienne (3<sup>e</sup>-4<sup>e</sup> arcs). La prolifération rapide de l'épithélium laryngé <strong>oblitère</strong> transitoirement la lumière du larynx (6<sup>e</sup>-8<sup>e</sup> semaine), qui se <strong>recanalise</strong> vers la 10<sup>e</sup> semaine en formant les ventricules laryngés et les plis vocaux ; un défaut de recanalisation donne une atrésie ou une palmure (diaphragme) laryngée.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> bourgeon respiratoire = diverticule <strong>ventral</strong> de l'intestin antérieur à J26-J28 ; septum trachéo-œsophagien = trachée en avant, œsophage en arrière ; épithélium entoblastique (NKX2-1), tout le reste mésoblastique. Larynx : cartilages et muscles des 4<sup>e</sup> et 6<sup>e</sup> arcs.</div>`
            },
            {
              titre: "Trachée, bronches et ramification de l'arbre respiratoire",
              contenu: `<p>Le diverticule respiratoire s'allonge en <strong>trachée</strong> et son extrémité distale se divise à J28-J30 en deux <strong>bourgeons bronchiques</strong> primitifs (asymétriques : le droit est plus gros et plus vertical, le gauche plus petit et plus horizontal, disposition qui persiste chez l'adulte et explique la fréquence des corps étrangers dans la bronche droite). Ces bourgeons s'enfoncent dans le <strong>mésoblaste splanchnique</strong> des <strong>canaux pleuro-péritonéaux</strong> (futures cavités pleurales), avec lequel ils dialoguent en permanence (induction réciproque, FGF10 du mésenchyme, SHH, BMP4 de l'épithélium).</p>
<ul>
<li>5<sup>e</sup> semaine : les bourgeons bronchiques primaires donnent les <strong>bourgeons bronchiques secondaires</strong> (lobaires) : <strong>trois à droite, deux à gauche</strong>, préfigurant les lobes.</li>
<li>6<sup>e</sup> semaine : <strong>bourgeons tertiaires</strong> (segmentaires) : <strong>10 à droite, 8 à gauche</strong> (puis 10 et 9 ou 10 selon les classifications), ébauches des <strong>segments broncho-pulmonaires</strong>.</li>
<li>De la 6<sup>e</sup> à la 16<sup>e</sup> semaine : <strong>ramification dichotomique</strong> répétée (branching morphogenesis) ; à 16 semaines, toutes les voies aériennes de conduction jusqu'aux <strong>bronchioles terminales</strong> sont formées (environ <strong>17 générations</strong> de divisions) ; les 6 à 7 dernières générations (bronchioles respiratoires, canaux alvéolaires, alvéoles) se développent ensuite et surtout après la naissance.</li>
</ul>
<p>Le mésoblaste se différencie autour des bourgeons : <strong>cartilage</strong> (anneaux trachéaux et plaques bronchiques, à partir de la 10<sup>e</sup> semaine), <strong>muscle lisse</strong>, tissu conjonctif, vaisseaux (les artères pulmonaires dérivent du 6<sup>e</sup> arc aortique et suivent les bronches ; les veines pulmonaires rejoignent l'atrium gauche) ; le mésoblaste qui recouvre les bourgeons devient la <strong>plèvre viscérale</strong>, celui qui tapisse la paroi la <strong>plèvre pariétale</strong>. Les poumons croissent dans les canaux pleuro-péritonéaux, en direction caudale et latérale, puis en avant autour du cœur ; les cavités pleurales sont séparées de la cavité péricardique par les <strong>membranes pleuro-péricardiques</strong> (futur péricarde fibreux, 5<sup>e</sup>-7<sup>e</sup> semaine) et de la cavité péritonéale par les <strong>membranes pleuro-péritonéales</strong> (7<sup>e</sup> semaine, participant au diaphragme).</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> l'épithélium respiratoire est <strong>entoblastique</strong>, mais le muscle lisse, le cartilage, les vaisseaux et la plèvre sont <strong>mésoblastiques</strong>. L'arbre bronchique de conduction est achevé à <strong>16 semaines</strong> (fin du stade pseudo-glandulaire) : une agression ultérieure n'altère plus la ramification mais réduit le nombre d'alvéoles.</div>`
            },
            {
              titre: "Les stades de la maturation pulmonaire",
              contenu: `<p>Le développement histologique du poumon se déroule en cinq stades successifs, qui se chevauchent et se poursuivent après la naissance (le poumon n'est mature qu'à l'âge de 8 ans environ). Leur connaissance est indispensable pour comprendre la viabilité du prématuré.</p>
<table>
<thead><tr><th>Stade</th><th>Période</th><th>Événements</th><th>Viabilité</th></tr></thead>
<tbody>
<tr><td><strong>Embryonnaire</strong></td><td>4<sup>e</sup> à 7<sup>e</sup> semaine (J26 à 7 SD)</td><td>Bourgeon respiratoire, trachée, bronches principales, lobaires et segmentaires ; séparation trachéo-œsophagienne</td><td>Non</td></tr>
<tr><td><strong>Pseudo-glandulaire</strong></td><td>5<sup>e</sup> à <strong>16<sup>e</sup></strong> semaine</td><td>Ramification complète de l'arbre de conduction jusqu'aux bronchioles terminales ; aspect de glande exocrine (tubes bordés d'un épithélium cubique haut, dans un mésenchyme abondant) ; différenciation des cellules ciliées, caliciformes et neuro-endocrines ; cartilage et muscle lisse ; <strong>pas d'échanges gazeux possibles</strong></td><td>Non</td></tr>
<tr><td><strong>Canaliculaire</strong></td><td><strong>16<sup>e</sup> à 26<sup>e</sup></strong> semaine</td><td>Formation des <strong>bronchioles respiratoires</strong> et des <strong>canaux alvéolaires</strong> (acini) ; élargissement des lumières ; <strong>vascularisation intense</strong> : les capillaires se rapprochent de l'épithélium ; aplatissement de l'épithélium en <strong>pneumocytes I</strong> ; apparition des <strong>pneumocytes II</strong> et début de la synthèse du <strong>surfactant</strong> (20-24 semaines) ; échanges gazeux rudimentaires possibles en fin de stade</td><td>Limite à partir de 22-24 SA (poids 500 g)</td></tr>
<tr><td><strong>Sacculaire</strong></td><td><strong>26<sup>e</sup> à 36<sup>e</sup></strong> semaine</td><td>Formation des <strong>saccules terminaux</strong> (alvéoles primitives) à paroi mince ; multiplication des capillaires ; les <strong>membranes alvéolo-capillaires</strong> s'amincissent (fusion des lames basales) ; augmentation de la production de surfactant ; réduction du mésenchyme interstitiel</td><td>Oui, avec assistance ; détresse respiratoire par déficit en surfactant avant 34 SA</td></tr>
<tr><td><strong>Alvéolaire</strong></td><td><strong>36<sup>e</sup> semaine à 8 ans</strong> (surtout jusqu'à 2-3 ans)</td><td>Formation des <strong>alvéoles définitives</strong> par septation secondaire des saccules (crêtes contenant des fibres élastiques) ; <strong>multiplication</strong> du nombre d'alvéoles : 20 à 50 millions à la naissance (environ 1/6 à 1/8 du nombre adulte), <strong>300 millions à 8 ans</strong> ; puis croissance en taille jusqu'à la fin de la croissance thoracique</td><td>Oui</td></tr>
</tbody>
</table>
<p>La croissance pulmonaire fœtale dépend de facteurs mécaniques : le <strong>liquide pulmonaire</strong> sécrété par l'épithélium (futur liquide amniotique, maintenu dans les voies aériennes par le larynx fermé) exerce une pression de distension indispensable ; les <strong>mouvements respiratoires fœtaux</strong> (dès 10-11 semaines, 30 à 40 % du temps au 3<sup>e</sup> trimestre) et un <strong>volume thoracique suffisant</strong> sont nécessaires. Toute entrave (oligoamnios, hernie diaphragmatique, épanchements, anomalies de la cage thoracique, absence de mouvements par atteinte neuromusculaire) entraîne une <strong>hypoplasie pulmonaire</strong>.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> embryonnaire (4-7 semaines), pseudo-glandulaire (5-16), canaliculaire (16-26, apparition des pneumocytes II et du surfactant), sacculaire (26-36), alvéolaire (36 semaines à 8 ans). Viabilité à partir du stade canaliculaire tardif (22-24 SA) ; surfactant suffisant à 34-35 SA ; 300 millions d'alvéoles à 8 ans.</div>`
            },
            {
              titre: "Le surfactant et la préparation à la respiration",
              contenu: `<p>Le <strong>surfactant</strong> est un film tensioactif qui tapisse la surface interne des alvéoles. Il est synthétisé et sécrété par les <strong>pneumocytes de type II</strong> (cellules cubiques, 15 % des cellules alvéolaires mais 5 % de la surface, caractérisées par leurs <strong>corps lamellaires</strong>, organites de stockage), et stocké sous forme de myéline tubulaire avant de s'étaler en monocouche à l'interface air-liquide. Les pneumocytes II sont aussi les cellules souches de l'épithélium alvéolaire (elles régénèrent les pneumocytes I).</p>
<h4>Composition</h4>
<ul>
<li><strong>Lipides (90 %)</strong> : phospholipides pour 80 à 85 %, dont la <strong>dipalmitoyl-phosphatidylcholine (DPPC)</strong>, principal agent tensioactif (40 à 50 %), le phosphatidylglycérol (marqueur de maturité, apparaissant vers 35 SA), le phosphatidylinositol, et du cholestérol.</li>
<li><strong>Protéines (10 %)</strong> : protéines spécifiques <strong>SP-A</strong> et <strong>SP-D</strong> (hydrophiles, rôle dans la défense immunitaire innée et le recyclage), <strong>SP-B</strong> et <strong>SP-C</strong> (hydrophobes, indispensables à l'étalement et à la stabilité du film ; le déficit congénital en SP-B est létal).</li>
</ul>
<h4>Rôles</h4>
<ul>
<li><strong>Abaisser la tension superficielle</strong> à l'interface air-liquide (de 70 à moins de 10 mN/m), ce qui réduit la pression nécessaire pour ouvrir les alvéoles (loi de Laplace) et empêche leur <strong>collapsus en fin d'expiration</strong> : établissement d'une capacité résiduelle fonctionnelle et stabilisation des alvéoles de tailles différentes.</li>
<li>Réduire le <strong>travail respiratoire</strong>, diminuer la filtration de liquide vers l'alvéole (anti-œdème), participer à la défense antimicrobienne (SP-A, SP-D).</li>
</ul>
<h4>Chronologie et régulation</h4>
<p>La synthèse débute vers <strong>20-24 SA</strong> (stade canaliculaire), reste insuffisante jusqu'à <strong>34-35 SA</strong>, puis augmente rapidement : le surfactant est <strong>suffisant en quantité et en qualité à partir de 34-36 SA</strong>. Sa maturation est <strong>accélérée</strong> par les <strong>glucocorticoïdes</strong> (cortisol fœtal endogène, dont le pic précède la naissance, et bétaméthasone exogène), les hormones thyroïdiennes, les catécholamines du travail et le stress chronique (retard de croissance, rupture prolongée des membranes) ; elle est <strong>retardée</strong> par l'<strong>insuline</strong> (diabète maternel : risque de détresse respiratoire malgré un terme avancé), les androgènes (les garçons sont plus exposés) et la naissance par césarienne programmée sans travail. L'<strong>analyse du liquide amniotique</strong> (rapport lécithine/sphingomyéline supérieur à 2, présence de phosphatidylglycérol, corps lamellaires) permettait d'évaluer la maturité pulmonaire.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la <strong>maladie des membranes hyalines</strong> (syndrome de détresse respiratoire du prématuré) résulte du déficit en surfactant : alvéoles collabées, atélectasies, exsudat fibrineux (membranes hyalines), hypoxémie ; elle touche 60 % des prématurés nés avant 28 SA et moins de 5 % après 34 SA. Prévention : <strong>corticothérapie anténatale</strong> (bétaméthasone, 2 injections à 24 heures d'intervalle, efficace 24 heures après et pendant 7 jours) en cas de menace d'accouchement prématuré avant 34 SA, qui réduit de 50 % la mortalité et les hémorragies intraventriculaires. Traitement : <strong>surfactant exogène</strong> intratrachéal (d'origine porcine ou bovine) et ventilation non invasive (pression positive continue). La <strong>dysplasie bronchopulmonaire</strong> est la séquelle chronique de la prématurité et de la ventilation (arrêt de l'alvéolisation).</div>`
            },
            {
              titre: "Le diaphragme",
              contenu: `<p>Le <strong>diaphragme</strong> sépare les cavités pleurales de la cavité péritonéale. Il se forme entre la 4<sup>e</sup> et la 12<sup>e</sup> semaine à partir de quatre composants :</p>
<ol>
<li>le <strong>septum transversum</strong> : masse de mésoderme située entre la cavité péricardique et le pédicule vitellin, initialement en position cervicale (en regard des somites C3-C5, ce qui explique l'innervation par le <strong>nerf phrénique</strong>, C3-C4-C5) ; il descend avec la croissance et la délimitation jusqu'au niveau thoracique inférieur (T12 pour ses insertions dorsales) et forme le <strong>centre phrénique</strong> (partie tendineuse centrale) ; il héberge aussi le développement du foie ;</li>
<li>les <strong>membranes pleuro-péritonéales</strong> : replis qui ferment les canaux pleuro-péritonéaux (communications entre cavités pleurales et péritonéale) à la 7<sup>e</sup> semaine en fusionnant avec le septum transversum et le mésentère de l'œsophage ; le canal <strong>gauche</strong> se ferme plus tard que le droit (foie à droite), d'où la prédominance gauche des hernies ;</li>
<li>le <strong>mésentère dorsal de l'œsophage</strong> : donne les <strong>piliers</strong> (crus) du diaphragme ;</li>
<li>la <strong>paroi du corps</strong> : le mésoderme pariétal (somatopleure) des parois latérales est incorporé en périphérie lors de l'expansion des cavités pleurales (9<sup>e</sup>-12<sup>e</sup> semaine) et forme la partie <strong>musculaire périphérique</strong> ; les myoblastes proviennent des <strong>somites cervicaux C3 à C5</strong> et migrent avec le nerf phrénique.</li>
</ol>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le diaphragme est innervé par le <strong>nerf phrénique (C3-C5)</strong> parce que le septum transversum et ses myoblastes ont une origine <strong>cervicale</strong> avant leur descente ; la périphérie reçoit une innervation sensitive des nerfs intercostaux inférieurs. Une douleur diaphragmatique est projetée à l'<strong>épaule</strong> (dermatomes C3-C5).</div>`
            },
            {
              titre: "Malformations de l'appareil respiratoire",
              contenu: `<h4>Atrésie de l'œsophage et fistule trachéo-œsophagienne</h4>
<p>Anomalie de la séparation trachéo-œsophagienne (déviation postérieure du septum trachéo-œsophagien), fréquente (<strong>1/3 000 à 1/4 000</strong> naissances), souvent associée à d'autres malformations (association <strong>VACTERL</strong> dans 50 % des cas : vertébrales, anales, cardiaques, trachéo-œsophagiennes, rénales, membres ; trisomie 18). Classification de Ladd / Vogt :</p>
<ul>
<li><strong>Type III</strong> (85 à 90 %) : atrésie de l'œsophage avec cul-de-sac supérieur borgne et <strong>fistule</strong> entre la trachée et le segment œsophagien inférieur ;</li>
<li>type I (8 %) : atrésie sans fistule (grand écart entre les deux segments) ;</li>
<li>type II (1 %) : fistule sur le cul-de-sac supérieur ;</li>
<li>type IV (1 %) : double fistule ;</li>
<li>fistule en H sans atrésie (4 %), de révélation plus tardive.</li>
</ul>
<p>Signes : <strong>hydramnios</strong> anténatal (le fœtus ne déglutit pas) avec estomac non visible, puis à la naissance hypersalivation, fausses routes, toux, cyanose à la première tétée, ballonnement abdominal (air passant par la fistule) ; diagnostic par le <strong>test de la seringue</strong> ou la butée de la sonde gastrique (systématique en salle de naissance), confirmé par la radiographie. Traitement chirurgical précoce (ligature de la fistule, anastomose).</p>
<h4>Hernie diaphragmatique congénitale</h4>
<p>Défaut de fermeture d'un canal pleuro-péritonéal (<strong>hernie de Bochdalek</strong>, postéro-latérale, <strong>gauche dans 85 % des cas</strong>), <strong>1/3 000 à 1/5 000</strong> naissances : les viscères abdominaux (intestin, estomac, rate, parfois foie) remontent dans le thorax dès la 8<sup>e</sup>-10<sup>e</sup> semaine, comprimant le poumon en développement : <strong>hypoplasie pulmonaire</strong> bilatérale (prédominant du côté de la hernie) et <strong>hypertension artérielle pulmonaire</strong> persistante. Diagnostic échographique anténatal (estomac intrathoracique, déviation du cœur), détresse respiratoire néonatale immédiate, abdomen plat, bruits hydro-aériques dans le thorax. Mortalité 30 à 50 %. Traitement : stabilisation puis chirurgie ; occlusion trachéale fœtoscopique par ballonnet (FETO) dans les formes sévères pour stimuler la croissance pulmonaire. La hernie rétrosternale de <strong>Morgagni</strong> (antérieure) est plus rare et bénigne ; l'<strong>éventration</strong> diaphragmatique correspond à un diaphragme aminci, amusculaire.</p>
<h4>Autres malformations</h4>
<ul>
<li><strong>Hypoplasie pulmonaire</strong> : secondaire à une compression (hernie diaphragmatique, épanchements, hydrothorax), à un <strong>oligoamnios</strong> prolongé (agénésie rénale : séquence de Potter ; rupture prématurée des membranes), à une anomalie thoracique ou neuromusculaire.</li>
<li><strong>Agénésie</strong> ou <strong>aplasie pulmonaire</strong> (absence d'un poumon, compatible avec la vie), <strong>sténose</strong> ou <strong>atrésie trachéale</strong> (létale), <strong>trachéomalacie</strong> (anneaux cartilagineux insuffisants), <strong>bronche trachéale</strong> (naissance directe d'une bronche sur la trachée, variante).</li>
<li><strong>Malformation adénomatoïde kystique</strong> (malformation congénitale des voies aériennes pulmonaires, CPAM) : prolifération anormale des bronchioles terminales formant des kystes (hamartome), détectée à l'échographie ; risque de compression, d'infection et de dégénérescence ; exérèse.</li>
<li><strong>Séquestration pulmonaire</strong> : territoire pulmonaire non connecté à l'arbre bronchique, vascularisé par une artère systémique (aorte), intra- ou extralobaire (bourgeon accessoire de l'intestin antérieur) ; infections récidivantes.</li>
<li><strong>Kystes bronchogéniques</strong> : bourgeonnements aberrants de la trachée ou des bronches, kystes médiastinaux bordés d'épithélium respiratoire.</li>
<li><strong>Lobe azygos</strong> (variante par trajet anormal de la veine azygos), <strong>emphysème lobaire congénital</strong>.</li>
<li><strong>Fentes laryngées</strong>, palmure et <strong>atrésie laryngée</strong> (défaut de recanalisation ; syndrome CHAOS avec poumons hyperéchogènes distendus).</li>
<li><strong>Dyskinésie ciliaire primitive</strong> (syndrome de Kartagener : infections respiratoires, situs inversus dans 50 % des cas, infertilité).</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> devant un <strong>hydramnios</strong> avec estomac non visualisé à l'échographie, évoquer une <strong>atrésie de l'œsophage</strong> ; devant une détresse respiratoire néonatale immédiate avec abdomen plat et déviation des bruits du cœur, évoquer une <strong>hernie diaphragmatique</strong> (ne pas ventiler au masque, qui distend l'estomac intrathoracique : intubation d'emblée). Le passage systématique d'une sonde gastrique en salle de naissance dépiste l'atrésie de l'œsophage avant toute alimentation.</div>`
            }
          ],
          points_cles: [
            "L'épithélium de tout l'arbre respiratoire dérive de l'entoblaste de l'intestin antérieur (diverticule respiratoire ventral à J26-J28, NKX2-1) ; cartilage, muscle lisse, vaisseaux et plèvre dérivent du mésoblaste splanchnique.",
            "Le septum trachéo-œsophagien (fusion des crêtes latérales) sépare la trachée (en avant) de l'œsophage (en arrière) vers la 5e semaine ; son défaut donne l'atrésie de l'œsophage avec fistule trachéo-œsophagienne (type III, 85 %).",
            "Les bourgeons bronchiques se ramifient : 2 bronches principales (J28-J30), 3 lobaires à droite et 2 à gauche (5e semaine), 10 segmentaires à droite et 8 à gauche (6e semaine), 17 générations jusqu'aux bronchioles terminales à 16 semaines.",
            "Cinq stades : embryonnaire (4-7 semaines), pseudo-glandulaire (5-16), canaliculaire (16-26 : bronchioles respiratoires, capillaires, pneumocytes II, début du surfactant), sacculaire (26-36), alvéolaire (36 semaines à 8 ans : 300 millions d'alvéoles).",
            "Le surfactant (DPPC, phosphatidylglycérol, SP-A à SP-D) est produit par les pneumocytes II à partir de 20-24 SA et suffisant à partir de 34-35 SA ; maturation accélérée par les glucocorticoïdes, retardée par l'insuline.",
            "La maladie des membranes hyalines du prématuré est prévenue par la corticothérapie anténatale (bétaméthasone avant 34 SA) et traitée par surfactant exogène.",
            "Le diaphragme se forme à partir du septum transversum (centre phrénique), des membranes pleuro-péritonéales, du mésentère de l'œsophage (piliers) et de la paroi du corps (muscle), innervé par le nerf phrénique (C3-C5) du fait de son origine cervicale.",
            "La hernie diaphragmatique de Bochdalek (postéro-latérale gauche, 85 %) entraîne une hypoplasie pulmonaire et une hypertension pulmonaire ; détresse respiratoire néonatale immédiate.",
            "L'hypoplasie pulmonaire est secondaire à une compression, un oligoamnios (Potter) ou une absence de mouvements respiratoires ; autres malformations : séquestration, malformation adénomatoïde kystique, kyste bronchogénique, atrésie laryngée."
          ],
          lexique: [
            { terme: "Diverticule respiratoire", def: "Bourgeon ventral de l'intestin antérieur apparaissant à J26-J28, à l'origine de l'épithélium du larynx, de la trachée et des poumons." },
            { terme: "Septum trachéo-œsophagien", def: "Cloison formée par la fusion des crêtes trachéo-œsophagiennes séparant la trachée (ventrale) de l'œsophage (dorsal)." },
            { terme: "Stade pseudo-glandulaire", def: "Stade de la 5e à la 16e semaine durant lequel l'arbre bronchique de conduction se ramifie complètement, sans possibilité d'échanges gazeux." },
            { terme: "Stade canaliculaire", def: "Stade de la 16e à la 26e semaine marqué par la formation des bronchioles respiratoires, la vascularisation et l'apparition des pneumocytes II." },
            { terme: "Stade sacculaire", def: "Stade de la 26e à la 36e semaine avec formation des saccules terminaux et amincissement des membranes alvéolo-capillaires." },
            { terme: "Stade alvéolaire", def: "Stade débutant à 36 semaines et se poursuivant jusqu'à 8 ans, caractérisé par la septation et la multiplication des alvéoles (300 millions)." },
            { terme: "Surfactant", def: "Film tensioactif (DPPC, protéines SP-A à SP-D) sécrété par les pneumocytes II, abaissant la tension superficielle alvéolaire et prévenant le collapsus." },
            { terme: "Septum transversum", def: "Masse mésodermique d'origine cervicale, entre cavité péricardique et pédicule vitellin, à l'origine du centre phrénique du diaphragme et du stroma hépatique." },
            { terme: "Hernie de Bochdalek", def: "Hernie diaphragmatique congénitale postéro-latérale, gauche dans 85 % des cas, par défaut de fermeture du canal pleuro-péritonéal." },
            { terme: "Maladie des membranes hyalines", def: "Syndrome de détresse respiratoire du prématuré par déficit en surfactant, prévenu par la corticothérapie anténatale." }
          ],
          qcm: [
            {
              q: "Concernant l'origine de l'appareil respiratoire :",
              options: [
                "A. L'épithélium trachéo-bronchique dérive de l'entoblaste de l'intestin antérieur.",
                "B. Le diverticule respiratoire naît de la paroi dorsale de l'intestin antérieur.",
                "C. Le cartilage et le muscle lisse des bronches dérivent du mésoblaste splanchnique.",
                "D. Le bourgeon respiratoire apparaît vers la fin de la 4e semaine.",
                "E. La plèvre viscérale dérive de l'entoblaste."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le diverticule naît de la paroi ventrale. E est fausse : la plèvre viscérale dérive du mésoblaste splanchnique."
            },
            {
              q: "Concernant la séparation trachéo-œsophagienne :",
              options: [
                "A. Le septum trachéo-œsophagien résulte de la fusion de deux crêtes latérales.",
                "B. La trachée se situe en arrière de l'œsophage.",
                "C. Une anomalie du septum est responsable de l'atrésie de l'œsophage avec fistule trachéo-œsophagienne.",
                "D. La forme la plus fréquente d'atrésie de l'œsophage associe un cul-de-sac supérieur borgne et une fistule entre la trachée et l'œsophage inférieur.",
                "E. L'atrésie de l'œsophage se manifeste in utero par un oligoamnios."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : la trachée est en avant de l'œsophage. E est fausse : l'absence de déglutition entraîne un hydramnios."
            },
            {
              q: "Concernant la ramification bronchique :",
              options: [
                "A. Il existe trois bourgeons bronchiques lobaires à droite et deux à gauche.",
                "B. L'arbre bronchique de conduction est complet jusqu'aux bronchioles terminales vers 16 semaines.",
                "C. La bronche principale droite est plus horizontale que la gauche.",
                "D. La ramification dépend d'interactions entre l'épithélium entoblastique et le mésenchyme (FGF10).",
                "E. Les alvéoles définitives sont toutes formées à la naissance."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : la bronche droite est plus verticale et plus large. E est fausse : seulement 20 à 50 millions d'alvéoles sont présentes à la naissance ; l'alvéolisation se poursuit jusqu'à 8 ans (300 millions)."
            },
            {
              q: "Concernant les stades de maturation pulmonaire :",
              options: [
                "A. Le stade pseudo-glandulaire s'étend de la 5e à la 16e semaine.",
                "B. Les échanges gazeux sont possibles dès le stade pseudo-glandulaire.",
                "C. Les pneumocytes de type II apparaissent au stade canaliculaire.",
                "D. Le stade sacculaire s'étend de la 26e à la 36e semaine.",
                "E. Le stade alvéolaire se poursuit après la naissance."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : au stade pseudo-glandulaire, il n'y a ni alvéoles ni capillaires au contact de l'épithélium ; les échanges sont impossibles."
            },
            {
              q: "Concernant le surfactant :",
              options: [
                "A. Il est sécrété par les pneumocytes de type I.",
                "B. Son principal constituant tensioactif est la dipalmitoyl-phosphatidylcholine.",
                "C. Il est produit en quantité suffisante à partir de 34-35 SA.",
                "D. Les glucocorticoïdes accélèrent sa maturation.",
                "E. L'insuline accélère sa maturation, ce qui protège les enfants de mère diabétique."
              ],
              bonnes: [1, 2, 3],
              explication: "A est fausse : le surfactant est produit par les pneumocytes de type II. B, C et D sont vraies. E est fausse : l'insuline retarde la maturation du surfactant ; les enfants de mère diabétique sont plus exposés à la détresse respiratoire."
            },
            {
              q: "Concernant le diaphragme et ses malformations :",
              options: [
                "A. Le septum transversum donne le centre phrénique.",
                "B. Le diaphragme est innervé par le nerf phrénique du fait de son origine cervicale.",
                "C. La hernie de Bochdalek est le plus souvent située à droite.",
                "D. La hernie diaphragmatique congénitale entraîne une hypoplasie pulmonaire.",
                "E. Les piliers du diaphragme dérivent du mésentère dorsal de l'œsophage."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la hernie de Bochdalek est gauche dans 85 % des cas, le canal pleuro-péritonéal gauche se fermant plus tard."
            }
          ]
        },
        {
          id: "appareil-digestif",
          titre: "Développement de l'appareil digestif",
          duree: 45,
          objectifs: [
            "Décrire l'intestin primitif et ses trois segments (antérieur, moyen, postérieur) avec leurs limites, leurs dérivés et leur vascularisation.",
            "Expliquer le développement de l'œsophage, de l'estomac (rotations) et du duodénum.",
            "Décrire la formation du foie, des voies biliaires, du pancréas et de la rate.",
            "Expliquer la hernie physiologique et la rotation de l'anse intestinale primitive (270 degrés) et la fixation du côlon.",
            "Décrire le cloisonnement du cloaque et la formation du canal anal.",
            "Connaître les principales malformations : atrésies, sténose du pylore, omphalocèle, laparoschisis, diverticule de Meckel, malrotations, maladie de Hirschsprung, imperforation anale."
          ],
          sections: [
            {
              titre: "L'intestin primitif et ses trois segments",
              contenu: `<p>Le tube digestif dérive de l'<strong>intestin primitif</strong>, tube <strong>entoblastique</strong> formé lors de la délimitation (4<sup>e</sup> semaine) par l'incorporation du toit de la vésicule vitelline dans l'embryon. L'<strong>entoblaste</strong> donne l'<strong>épithélium</strong> de revêtement et le <strong>parenchyme</strong> des glandes (foie, pancréas, glandes de la paroi) ; le <strong>mésoblaste splanchnique</strong> (splanchnopleure) donne le <strong>tissu conjonctif</strong>, la <strong>musculeuse</strong> lisse et la <strong>séreuse</strong> ; les <strong>crêtes neurales</strong> (vagales et sacrées) fournissent les <strong>plexus nerveux entériques</strong> (Meissner et Auerbach). Les deux extrémités du tube sont tapissées d'<strong>ectoblaste</strong> (stomodeum et proctodeum).</p>
<p>L'intestin primitif est fermé en avant par la <strong>membrane pharyngienne</strong> (bucco-pharyngienne, rompue à J26-J28) et en arrière par la <strong>membrane cloacale</strong> (rompue à la 7<sup>e</sup>-8<sup>e</sup> semaine). Il est suspendu à la paroi dorsale par le <strong>mésentère dorsal</strong> (mésogastre, mésoduodénum, mésentère, mésocôlon) et, pour l'intestin antérieur seulement, relié à la paroi ventrale par le <strong>mésentère ventral</strong> (dérivé du septum transversum : futurs petit omentum et ligament falciforme). Il comporte trois segments, définis par leur vascularisation, chacun irrigué par l'une des trois artères impaires issues des artères vitellines :</p>
<table>
<thead><tr><th>Segment</th><th>Limites</th><th>Dérivés</th><th>Artère</th><th>Innervation parasympathique</th></tr></thead>
<tbody>
<tr><td><strong>Intestin antérieur</strong> (proentéron)</td><td>De la membrane pharyngienne à l'abouchement du canal cholédoque (partie moyenne du 2<sup>e</sup> duodénum, en aval de l'ampoule)</td><td>Intestin pharyngien (pharynx, poches pharyngiennes, thyroïde), appareil respiratoire, <strong>œsophage</strong>, <strong>estomac</strong>, <strong>duodénum</strong> proximal (D1 et D2 jusqu'à l'ampoule), <strong>foie</strong>, <strong>voies biliaires</strong>, <strong>pancréas</strong></td><td><strong>Tronc cœliaque</strong> (la partie pharyngienne et œsophagienne par les arcs aortiques et les branches de l'aorte thoracique)</td><td>Nerf vague (X)</td></tr>
<tr><td><strong>Intestin moyen</strong> (mésentéron)</td><td>De l'abouchement du cholédoque aux deux tiers proximaux du côlon transverse</td><td>Duodénum distal (D2 distal, D3, D4), <strong>jéjunum</strong>, <strong>iléon</strong>, <strong>cæcum</strong>, <strong>appendice</strong>, <strong>côlon ascendant</strong>, deux tiers droits du <strong>côlon transverse</strong></td><td><strong>Artère mésentérique supérieure</strong></td><td>Nerf vague (X)</td></tr>
<tr><td><strong>Intestin postérieur</strong> (métentéron)</td><td>Du tiers distal du côlon transverse à la partie supérieure du canal anal (ligne pectinée)</td><td>Tiers gauche du côlon transverse, <strong>côlon descendant</strong>, <strong>sigmoïde</strong>, <strong>rectum</strong>, partie supérieure du <strong>canal anal</strong> ; <strong>cloaque</strong> donnant aussi le sinus urogénital (vessie, urètre)</td><td><strong>Artère mésentérique inférieure</strong></td><td>Nerfs pelviens (S2-S4)</td></tr>
</tbody>
</table>
<p>L'intestin moyen reste largement ouvert dans la vésicule vitelline au début, puis la communication se réduit au <strong>canal vitellin</strong>. La <strong>rate</strong> ne dérive pas de l'entoblaste mais du mésoblaste du mésogastre dorsal. La <strong>différenciation régionale</strong> de l'intestin est contrôlée par des gradients de facteurs (SHH de l'entoblaste, gènes Hox et facteurs de transcription régionaux : SOX2 en avant, CDX2 en arrière, PDX1 pour le duodénum et le pancréas).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la limite intestin antérieur / intestin moyen est l'<strong>abouchement du cholédoque</strong> dans le duodénum ; la limite intestin moyen / intestin postérieur est au <strong>tiers distal du côlon transverse</strong>. Les trois artères : tronc cœliaque, mésentérique supérieure, mésentérique inférieure. La ligne pectinée marque la frontière entoblaste / ectoblaste du canal anal.</div>`
            },
            {
              titre: "Œsophage, estomac et duodénum",
              contenu: `<h4>L'œsophage</h4>
<p>Il s'individualise par la séparation d'avec le tube laryngo-trachéal (septum trachéo-œsophagien, 4<sup>e</sup>-5<sup>e</sup> semaine) et s'allonge rapidement avec la descente du cœur et des poumons (un allongement insuffisant provoque une hernie hiatale congénitale ou un estomac thoracique). Son épithélium, d'abord cylindrique puis cilié, prolifère et <strong>oblitère</strong> transitoirement la lumière (7<sup>e</sup>-8<sup>e</sup> semaine), qui se <strong>recanalise</strong> par vacuolisation à la 8<sup>e</sup>-10<sup>e</sup> semaine (un défaut donne une sténose ou une atrésie) ; il devient malpighien au 4<sup>e</sup> mois. Sa musculeuse est striée dans le tiers supérieur (dérivée du mésoderme des arcs pharyngiens caudaux, innervée par le X) et lisse dans les deux tiers inférieurs (splanchnopleure).</p>
<h4>L'estomac</h4>
<p>L'estomac apparaît à la 4<sup>e</sup> semaine comme une dilatation <strong>fusiforme</strong> de l'intestin antérieur, suspendue par le <strong>mésogastre dorsal</strong> et le <strong>mésogastre ventral</strong>. Sa face dorsale croît plus vite que la ventrale, ce qui crée la <strong>grande courbure</strong> (dorsale) et la <strong>petite courbure</strong> (ventrale). Il subit ensuite deux rotations au cours des 5<sup>e</sup> à 8<sup>e</sup> semaines :</p>
<ul>
<li>une <strong>rotation de 90 degrés autour de son axe longitudinal</strong>, dans le sens des aiguilles d'une montre (vu d'en haut, de la tête de l'embryon) : la face gauche devient <strong>antérieure</strong>, la face droite devient <strong>postérieure</strong> ; la grande courbure (dorsale) passe à <strong>gauche</strong>, la petite courbure (ventrale) à <strong>droite</strong>. Conséquence : le <strong>nerf vague gauche</strong> innerve la face <strong>antérieure</strong> et le vague droit la face postérieure. Le mésogastre dorsal, entraîné vers la gauche, se déploie en une poche, la <strong>bourse omentale</strong> (arrière-cavité des épiploons), qui s'étend derrière l'estomac et dont le prolongement caudal, le <strong>grand omentum</strong> (grand épiploon), pend en tablier devant l'intestin ;</li>
<li>une <strong>rotation autour de l'axe antéro-postérieur</strong> : l'extrémité caudale (pylore) remonte vers la <strong>droite</strong> et le haut, l'extrémité crâniale (cardia) descend vers la <strong>gauche</strong> ; l'estomac prend sa position oblique définitive.</li>
</ul>
<p>Les dérivés du <strong>mésogastre dorsal</strong> sont la bourse omentale, le grand omentum, le ligament gastro-splénique et le ligament spléno-rénal (la <strong>rate</strong> se développe dans son épaisseur) ; ceux du <strong>mésogastre ventral</strong> (septum transversum) sont le <strong>petit omentum</strong> (ligament hépato-gastrique et hépato-duodénal, contenant le pédicule hépatique) et le <strong>ligament falciforme</strong> (contenant la veine ombilicale puis le ligament rond), le foie se développant entre les deux feuillets.</p>
<h4>Le duodénum</h4>
<p>Il se forme à la jonction intestin antérieur / intestin moyen, à partir des deux segments. Avec la rotation de l'estomac, il forme une boucle en <strong>C</strong> à concavité gauche, bascule vers la <strong>droite</strong> et se plaque contre la paroi postérieure : son mésoduodénum s'accole au péritoine pariétal (<strong>fascia de Treitz</strong>) et le duodénum devient <strong>rétropéritonéal</strong> (sauf le bulbe). Comme l'œsophage, sa lumière s'oblitère transitoirement (5<sup>e</sup>-6<sup>e</sup> semaine) puis se recanalise (8<sup>e</sup>-10<sup>e</sup> semaine) ; sa double vascularisation (tronc cœliaque et mésentérique supérieure) reflète sa double origine.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la grande courbure est d'origine <strong>dorsale</strong> et finit à <strong>gauche</strong> ; le vague <strong>gauche</strong> devient <strong>antérieur</strong>. La bourse omentale est un dérivé du mésogastre <strong>dorsal</strong>, le petit omentum du mésogastre <strong>ventral</strong>. La rate est <strong>mésoblastique</strong> et se forme dans le mésogastre dorsal.</div>`
            },
            {
              titre: "Foie, voies biliaires, pancréas et rate",
              contenu: `<h4>Le foie et les voies biliaires</h4>
<p>Vers <strong>J22-J24</strong> (fin de la 3<sup>e</sup>, début de la 4<sup>e</sup> semaine), la paroi <strong>ventrale</strong> de l'intestin antérieur distal (futur duodénum) bourgeonne : c'est le <strong>diverticule hépatique</strong> (bourgeon hépatique), induit par le mésoderme cardiaque (FGF) et le septum transversum (BMP). Il se divise en :</p>
<ul>
<li>une <strong>partie crâniale</strong>, volumineuse (<strong>pars hepatica</strong>) : les cordons entoblastiques (hépatoblastes) prolifèrent dans le mésoderme du <strong>septum transversum</strong>, s'entrelacent avec les <strong>veines vitellines et ombilicales</strong> qu'ils fragmentent en <strong>sinusoïdes</strong>, et donnent les <strong>hépatocytes</strong> et l'épithélium des <strong>canaux biliaires intra-hépatiques</strong> (par remodelage de la plaque ductale autour des branches portes) ; le septum transversum fournit le stroma, les cellules de Kupffer (en partie), les cellules étoilées, la capsule et le mésothélium ;</li>
<li>une <strong>partie caudale</strong>, plus petite (<strong>pars cystica</strong>) : <strong>vésicule biliaire</strong> et <strong>canal cystique</strong> ; le pédicule du diverticule devient le <strong>canal cholédoque</strong> (et le canal hépatique commun), d'abord ventral puis, avec la rotation du duodénum, <strong>dorsal</strong>, s'abouchant sur la face postéro-médiale de D2 avec le canal de Wirsung (ampoule hépato-pancréatique).</li>
</ul>
<p>Le foie croît très vite : il représente <strong>10 % du poids</strong> de l'embryon à la 10<sup>e</sup> semaine (5 % à la naissance) en raison de son rôle <strong>hématopoïétique</strong> (6<sup>e</sup> semaine au 7<sup>e</sup> mois). La <strong>sécrétion biliaire</strong> débute à la 12<sup>e</sup> semaine, colorant le méconium. Le lobe gauche, initialement aussi volumineux que le droit, régresse relativement. Les <strong>cellules de Kupffer</strong> sont d'origine hématopoïétique (vitelline puis monocytaire).</p>
<h4>Le pancréas</h4>
<p>Il se forme à partir de <strong>deux bourgeons</strong> entoblastiques du duodénum, apparaissant à la 4<sup>e</sup>-5<sup>e</sup> semaine (PDX1) :</p>
<ul>
<li>le <strong>bourgeon dorsal</strong>, le plus gros, apparaissant le premier dans le mésoduodénum dorsal, en face du diverticule hépatique ; il donne la <strong>partie supérieure de la tête</strong>, l'<strong>isthme</strong>, le <strong>corps</strong> et la <strong>queue</strong> ;</li>
<li>le <strong>bourgeon ventral</strong>, plus petit, naissant à la base du diverticule hépatique (au niveau du cholédoque) ; lors de la rotation du duodénum, il <strong>migre vers l'arrière et la droite</strong> en passant derrière le duodénum (avec le cholédoque) pour se placer sous et derrière le bourgeon dorsal ; il donne la <strong>partie inférieure de la tête</strong> et le <strong>processus unciné</strong> (crochet).</li>
</ul>
<p>Les deux bourgeons <strong>fusionnent</strong> à la <strong>7<sup>e</sup> semaine</strong>, ainsi que leurs canaux : le <strong>canal pancréatique principal (de Wirsung)</strong> est formé par le canal du bourgeon ventral en totalité et la partie distale du canal du bourgeon dorsal ; il s'abouche avec le cholédoque dans la <strong>papille majeure</strong> (grande caroncule, D2). La partie proximale du canal dorsal persiste souvent comme <strong>canal accessoire (de Santorini)</strong>, s'abouchant dans la <strong>papille mineure</strong>, 2 cm au-dessus. Les <strong>îlots de Langerhans</strong> (cellules endocrines, dérivées de l'entoblaste des canaux, par bourgeonnement et délamination sous le contrôle de Ngn3) apparaissent au 3<sup>e</sup> mois et sécrètent l'<strong>insuline</strong> dès la 10<sup>e</sup>-12<sup>e</sup> semaine (14<sup>e</sup> SA) ; le glucagon est détectable encore plus tôt. Le tissu conjonctif dérive du mésoblaste splanchnique. Le pancréas devient secondairement rétropéritonéal (sauf la queue).</p>
<h4>La rate</h4>
<p>La rate est d'origine <strong>mésoblastique</strong> : elle se développe à la 5<sup>e</sup> semaine par condensation de cellules mésenchymateuses entre les deux feuillets du <strong>mésogastre dorsal</strong>, puis est entraînée à <strong>gauche</strong> par la rotation de l'estomac. Elle est lobulée chez le fœtus (persistance possible sous forme d'incisures et de <strong>rates accessoires</strong>, 10 % de la population). Elle est hématopoïétique du 3<sup>e</sup> au 7<sup>e</sup> mois, puis lymphoïde. Ses ligaments (gastro-splénique, spléno-rénal) et l'artère splénique (branche du tronc cœliaque cheminant dans le ligament spléno-rénal) traduisent son origine mésogastrique.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> foie et pancréas <strong>ventral</strong> naissent du diverticule hépatique (ventral), pancréas <strong>dorsal</strong> du mésoduodénum dorsal ; le bourgeon ventral migre en arrière du duodénum et donne la tête inférieure et le processus unciné ; Wirsung = canal ventral + canal dorsal distal ; Santorini = canal dorsal proximal. Le foie se développe dans le septum transversum ; les hépatocytes sont entoblastiques, le stroma mésoblastique.</div>`
            },
            {
              titre: "L'intestin moyen : hernie physiologique et rotation",
              contenu: `<p>L'intestin moyen forme, à la 5<sup>e</sup> semaine, une longue boucle en <strong>U</strong> à convexité ventrale, l'<strong>anse intestinale primitive</strong>, suspendue par un mésentère dorsal étroit dans lequel chemine l'<strong>artère mésentérique supérieure</strong>, qui constitue l'<strong>axe</strong> de l'anse. Le sommet de l'anse est relié à la vésicule vitelline par le <strong>canal vitellin</strong>, qui partage l'anse en une <strong>branche crâniale</strong> (pré-artérielle : futurs duodénum distal, jéjunum, iléon proximal) et une <strong>branche caudale</strong> (post-artérielle : iléon distal, cæcum, appendice, côlon ascendant, deux tiers du transverse). Sur la branche caudale apparaît à la 6<sup>e</sup> semaine une dilatation, le <strong>bourgeon cæcal</strong> (futurs cæcum et appendice).</p>
<h4>La hernie ombilicale physiologique (6<sup>e</sup> à 10<sup>e</sup> semaine)</h4>
<p>La croissance rapide de l'anse (surtout de la branche crâniale, qui forme les anses jéjuno-iléales) et du <strong>foie</strong> dépasse la capacité de la cavité abdominale, encore petite et occupée par les reins mésonéphriques : à la <strong>6<sup>e</sup> semaine</strong>, l'anse intestinale fait <strong>hernie dans le cœlome extra-embryonnaire</strong> de la base du <strong>cordon ombilical</strong>. C'est la hernie ombilicale physiologique, visible à l'échographie jusqu'à 11-12 SA (ne pas la confondre avec une omphalocèle avant ce terme). La <strong>réintégration</strong> a lieu à la <strong>10<sup>e</sup> semaine</strong> (12 SA), lorsque la cavité abdominale s'est agrandie (régression du mésonéphros, ralentissement de la croissance hépatique) : le jéjunum rentre le premier et se place à <strong>gauche</strong>, le cæcum rentre le dernier et se place à <strong>droite</strong> sous le foie, avant de descendre en fosse iliaque droite.</p>
<h4>La rotation de l'anse intestinale</h4>
<p>Pendant la hernie et la réintégration, l'anse effectue une <strong>rotation totale de 270 degrés</strong> dans le <strong>sens inverse des aiguilles d'une montre</strong> (vue de face, du côté ventral de l'embryon), autour de l'axe de l'artère mésentérique supérieure :</p>
<ul>
<li><strong>90 degrés</strong> pendant la hernie (6<sup>e</sup>-8<sup>e</sup> semaine) : la branche crâniale passe à <strong>droite</strong>, la branche caudale à <strong>gauche</strong> ; l'anse devient horizontale ;</li>
<li><strong>180 degrés</strong> supplémentaires pendant la réintégration (10<sup>e</sup> semaine) : la branche crâniale (jéjuno-iléon) passe <strong>en bas et à gauche</strong>, derrière l'artère, et la branche caudale (côlon) <strong>en haut et à droite</strong>, puis le côlon transverse passe <strong>en avant</strong> de l'artère mésentérique supérieure et du duodénum (D3), qui est ainsi « coincé » dans la pince aorto-mésentérique.</li>
</ul>
<p>À l'issue de la rotation, le <strong>côlon</strong> forme un cadre autour des anses grêles : le cæcum, d'abord sous-hépatique, descend en <strong>fosse iliaque droite</strong> (3<sup>e</sup>-4<sup>e</sup> mois) en formant le côlon ascendant ; l'appendice, initialement à l'apex du cæcum, se déplace vers sa face médiale par croissance asymétrique. Les mésos du côlon ascendant et du côlon descendant s'accolent au péritoine pariétal postérieur (<strong>fascias de Toldt</strong>) : ces segments deviennent <strong>secondairement rétropéritonéaux</strong> (fixes), alors que le jéjuno-iléon, le côlon transverse et le sigmoïde gardent un méso et restent mobiles. La racine du mésentère s'étend de l'angle duodéno-jéjunal à la jonction iléo-cæcale.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> hernie physiologique de la <strong>6<sup>e</sup> à la 10<sup>e</sup> semaine</strong> ; rotation de <strong>270 degrés</strong> antihoraire (vue de face) autour de l'artère mésentérique supérieure : 90 pendant la hernie, 180 pendant la réintégration ; le côlon transverse passe <strong>devant</strong> l'artère et D3 ; cæcum à droite en dernier ; côlons ascendant et descendant accolés (Toldt).</div>`
            },
            {
              titre: "L'intestin postérieur et le cloaque",
              contenu: `<p>L'intestin postérieur donne le tiers gauche du côlon transverse, le côlon descendant, le sigmoïde, le rectum et la partie supérieure du canal anal. Sa partie terminale, dilatée, est le <strong>cloaque</strong>, cavité entoblastique commune au tube digestif et à l'appareil urogénital, fermée ventralement par la <strong>membrane cloacale</strong> (accolement entoblaste-ectoblaste, sans mésoblaste) et recevant en avant l'<strong>allantoïde</strong> et les deux <strong>canaux de Wolff</strong> (mésonéphriques).</p>
<h4>Le cloisonnement du cloaque (5<sup>e</sup> à 7<sup>e</sup> semaine)</h4>
<p>Un éperon de mésoblaste, le <strong>septum urorectal</strong> (éperon périnéal, de Tourneux et Rathke), formé dans l'angle entre l'allantoïde et l'intestin postérieur, descend vers la membrane cloacale (par croissance et fusion de replis latéraux) et divise le cloaque en :</p>
<ul>
<li>une partie <strong>ventrale</strong>, le <strong>sinus urogénital</strong> primitif (futurs vessie, urètre, et chez la femme vestibule du vagin ; voir chapitres urinaire et génital) ;</li>
<li>une partie <strong>dorsale</strong>, le <strong>canal ano-rectal</strong> (rectum et canal anal supérieur).</li>
</ul>
<p>Le septum atteint la membrane cloacale à la <strong>7<sup>e</sup> semaine</strong> et la divise en <strong>membrane urogénitale</strong> (en avant) et <strong>membrane anale</strong> (en arrière), séparées par le futur <strong>périnée</strong> (corps périnéal, point de fusion du septum). La <strong>membrane anale</strong>, au fond d'une dépression ectoblastique, le <strong>proctodeum</strong> (fossette anale), se <strong>rompt</strong> à la <strong>8<sup>e</sup> semaine</strong> (fin de la 7<sup>e</sup>), ouvrant le rectum à l'extérieur.</p>
<h4>Le canal anal : une double origine</h4>
<p>Le canal anal dérive pour ses <strong>deux tiers supérieurs</strong> de l'<strong>entoblaste</strong> de l'intestin postérieur et pour son <strong>tiers inférieur</strong> de l'<strong>ectoblaste</strong> du proctodeum ; la jonction est la <strong>ligne pectinée</strong> (ancienne membrane anale, au niveau des valvules anales). Cette double origine explique les différences anatomiques de part et d'autre de la ligne :</p>
<table>
<thead><tr><th>Caractère</th><th>Au-dessus de la ligne pectinée (entoblaste)</th><th>Au-dessous (ectoblaste)</th></tr></thead>
<tbody>
<tr><td>Épithélium</td><td>Cylindrique (glandulaire), puis transitionnel</td><td>Malpighien non kératinisé puis peau</td></tr>
<tr><td>Vascularisation artérielle</td><td>Artère rectale supérieure (mésentérique inférieure)</td><td>Artères rectales inférieures (pudendale interne, iliaque interne)</td></tr>
<tr><td>Drainage veineux</td><td>Veine rectale supérieure -> veine mésentérique inférieure -> système <strong>porte</strong></td><td>Veines rectales inférieures -> veine pudendale interne -> système <strong>cave</strong> (anastomose porto-cave : hémorroïdes)</td></tr>
<tr><td>Drainage lymphatique</td><td>Ganglions mésentériques inférieurs, iliaques internes</td><td>Ganglions <strong>inguinaux</strong> superficiels</td></tr>
<tr><td>Innervation</td><td>Végétative (plexus hypogastrique) : sensibilité à la distension seulement</td><td>Somatique (nerf pudendal, S2-S4) : sensibilité à la douleur, à la température, au toucher</td></tr>
<tr><td>Cancers</td><td>Adénocarcinomes</td><td>Carcinomes épidermoïdes</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le canal anal <strong>au-dessus</strong> de la ligne pectinée est entoblastique, insensible à la douleur et drainé vers le système porte ; <strong>au-dessous</strong>, il est ectoblastique, très sensible (nerf pudendal) et drainé vers la veine cave et les ganglions inguinaux. Le périnée dérive du septum urorectal (mésoblaste).</div>`
            },
            {
              titre: "Malformations de l'appareil digestif",
              contenu: `<table>
<thead><tr><th>Malformation</th><th>Mécanisme embryologique</th><th>Caractéristiques cliniques</th></tr></thead>
<tbody>
<tr><td><strong>Atrésie de l'œsophage</strong> (1/3 500)</td><td>Déviation du septum trachéo-œsophagien ; fistule trachéo-œsophagienne dans 90 %</td><td>Hydramnios, hypersalivation, fausses routes ; VACTERL</td></tr>
<tr><td><strong>Sténose hypertrophique du pylore</strong> (1/300 à 1/1 000, garçons 4 fois plus)</td><td>Hypertrophie de la musculeuse circulaire du pylore (non malformative au sens strict, acquise en période néonatale ; prédisposition génétique)</td><td>Vomissements en jet, non bilieux, à 3-6 semaines de vie, olive pylorique palpable, alcalose hypochlorémique ; pylorotomie</td></tr>
<tr><td><strong>Atrésie et sténose duodénales</strong> (1/5 000 à 1/10 000)</td><td><strong>Défaut de recanalisation</strong> (8<sup>e</sup>-10<sup>e</sup> semaine), surtout de D2-D3 ; <strong>pancréas annulaire</strong> (bourgeon ventral bifide enserrant le duodénum) ; 30 % de trisomies 21</td><td>Hydramnios, image en « double bulle » à l'échographie et à la radiographie, vomissements bilieux précoces</td></tr>
<tr><td><strong>Atrésies du jéjuno-iléon</strong> (1/5 000)</td><td><strong>Accident vasculaire</strong> (disruption ischémique in utero, volvulus, invagination) plus que défaut de recanalisation ; mucoviscidose (iléus méconial)</td><td>Occlusion néonatale, vomissements bilieux, absence d'émission de méconium, niveaux hydro-aériques</td></tr>
<tr><td><strong>Omphalocèle</strong> (1/4 000 à 1/6 000)</td><td><strong>Défaut de réintégration</strong> des anses dans l'abdomen à la 10<sup>e</sup> semaine (ou défaut de fermeture de la paroi) : viscères (intestin, foie dans 50 %) herniés <strong>dans la base du cordon</strong>, recouverts d'un <strong>sac</strong> (amnios + péritoine), cordon inséré au sommet</td><td>Associée dans 50 à 70 % à d'autres malformations et à des anomalies chromosomiques (trisomies 13, 18) et au syndrome de Beckwith-Wiedemann ; fermeture chirurgicale</td></tr>
<tr><td><strong>Laparoschisis</strong> (gastroschisis, 1/4 000, en augmentation, mères jeunes, tabac)</td><td><strong>Défaut de la paroi abdominale</strong> para-ombilical, le plus souvent à <strong>droite</strong> du cordon normalement inséré (involution anormale de la veine ombilicale droite ou de l'artère omphalo-mésentérique) ; anses <strong>sans sac</strong>, baignant dans le liquide amniotique (épaissies, inflammatoires)</td><td>Rarement associé à d'autres malformations ou à des anomalies chromosomiques ; bon pronostic après chirurgie ; le foie n'est jamais hernié</td></tr>
<tr><td><strong>Diverticule de Meckel</strong> (2 %)</td><td>Persistance du <strong>canal vitellin</strong> (segment intestinal) : diverticule antimésentérique de l'iléon à 40-100 cm de la valvule</td><td>Asymptomatique ou hémorragie (muqueuse gastrique ectopique), diverticulite, occlusion ; fistule omphalo-mésentérique, kyste, bride vitellines</td></tr>
<tr><td><strong>Anomalies de rotation</strong> (malrotation, 1/500)</td><td><strong>Absence de rotation</strong> (côlon à gauche, grêle à droite), <strong>rotation incomplète</strong> (90 degrés : cæcum sous-hépatique, mésentère commun étroit), <strong>rotation inverse</strong> (horaire : côlon transverse derrière l'artère mésentérique supérieure)</td><td>Risque de <strong>volvulus du grêle</strong> sur mésentère commun étroit (urgence néonatale : ischémie), brides de Ladd comprimant le duodénum, appendicite de localisation atypique</td></tr>
<tr><td><strong>Duplications digestives</strong>, kystes entériques</td><td>Anomalie de recanalisation ou bourgeonnement aberrant</td><td>Masse, occlusion, hémorragie</td></tr>
<tr><td><strong>Maladie de Hirschsprung</strong> (mégacôlon aganglionnaire, 1/5 000, garçons 4/1)</td><td>Arrêt de la <strong>migration cranio-caudale des crêtes neurales vagales</strong> : absence de plexus de Meissner et d'Auerbach dans le rectum et le côlon distal (segment court dans 80 %) ; gènes <em>RET</em>, <em>EDNRB</em> ; associée à la trisomie 21 (5 %)</td><td>Retard d'émission du méconium (plus de 48 h), occlusion basse, mégacôlon en amont du segment spastique ; biopsie rectale (absence de cellules ganglionnaires, hypertrophie des filets nerveux) ; résection</td></tr>
<tr><td><strong>Malformations ano-rectales</strong> (1/5 000)</td><td><strong>Imperforation anale</strong> (persistance de la membrane anale), <strong>atrésie rectale</strong>, agénésie ano-rectale avec <strong>fistules</strong> (recto-urétrale, recto-vésicale, recto-vaginale, recto-périnéale) par <strong>cloisonnement incomplet du cloaque</strong> (septum urorectal dévié ou insuffisant) ; <strong>cloaque persistant</strong> chez la fille (orifice unique)</td><td>Absence d'anus visible, méconium dans les urines ou le vagin ; formes hautes (au-dessus du plancher pelvien, pronostic fonctionnel réservé) et basses ; VACTERL</td></tr>
<tr><td><strong>Atrésie des voies biliaires</strong> (1/10 000 à 1/15 000)</td><td>Oblitération inflammatoire progressive des voies biliaires extra-hépatiques (périnatale, probable origine virale ou immune) ou malformative</td><td>Ictère cholestatique persistant après 15 jours, selles décolorées, urines foncées ; intervention de Kasai avant 45 jours, puis transplantation</td></tr>
<tr><td><strong>Pancréas annulaire, pancréas divisum</strong></td><td>Bourgeon ventral bifide encerclant D2 ; absence de fusion des canaux (divisum : 5 à 10 %, drainage par Santorini)</td><td>Sténose duodénale ; pancréatites récidivantes</td></tr>
<tr><td><strong>Hernie hiatale congénitale, estomac thoracique</strong></td><td>Œsophage trop court</td><td>Reflux</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> <strong>omphalocèle</strong> et <strong>laparoschisis</strong> sont deux anomalies de paroi à ne pas confondre : l'omphalocèle est médiane, dans le cordon, recouverte d'un sac, souvent associée à des anomalies chromosomiques ou syndromiques (caryotype indispensable) ; le laparoschisis est latéral (droit), sans sac, isolé, de meilleur pronostic. Les deux élèvent l'alpha-fœtoprotéine maternelle et sont diagnostiqués à l'échographie du 1<sup>er</sup> ou du 2<sup>e</sup> trimestre (après 12 SA pour l'omphalocèle, en raison de la hernie physiologique).</div>`
            }
          ],
          points_cles: [
            "L'intestin primitif entoblastique donne l'épithélium et les glandes ; le mésoblaste splanchnique donne conjonctif, musculeuse et séreuse ; les crêtes neurales donnent les plexus entériques ; les extrémités (stomodeum, proctodeum) sont ectoblastiques.",
            "Trois segments : intestin antérieur (jusqu'au cholédoque, tronc cœliaque : œsophage, estomac, D1-D2, foie, pancréas), intestin moyen (jusqu'au tiers distal du transverse, mésentérique supérieure), intestin postérieur (rectum et canal anal supérieur, mésentérique inférieure).",
            "L'estomac tourne de 90 degrés autour de son axe longitudinal (grande courbure dorsale à gauche, vague gauche antérieur) et bascule (pylore à droite) ; le mésogastre dorsal donne la bourse omentale, le grand omentum et héberge la rate ; le mésogastre ventral donne le petit omentum et le ligament falciforme.",
            "Le foie naît du diverticule hépatique ventral (J22-J24) dans le septum transversum : hépatocytes et canaux biliaires entoblastiques, stroma mésoblastique ; hématopoïèse de la 6e semaine au 7e mois ; la pars cystica donne la vésicule et le cystique.",
            "Le pancréas naît de deux bourgeons : dorsal (tête supérieure, isthme, corps, queue) et ventral (tête inférieure, processus unciné), qui fusionnent à la 7e semaine ; Wirsung = canal ventral + canal dorsal distal ; Santorini = canal dorsal proximal ; insuline dès la 10e-12e semaine.",
            "L'anse intestinale primitive fait une hernie physiologique dans le cordon de la 6e à la 10e semaine et tourne de 270 degrés dans le sens antihoraire autour de l'artère mésentérique supérieure (90 pendant la hernie, 180 à la réintégration) ; le cæcum rentre en dernier à droite.",
            "Les côlons ascendant et descendant, le duodénum et le pancréas deviennent secondairement rétropéritonéaux par accolement (fascias de Toldt et de Treitz).",
            "Le septum urorectal cloisonne le cloaque (5e-7e semaine) en sinus urogénital (ventral) et canal ano-rectal (dorsal) ; la membrane anale se rompt à la 8e semaine ; la ligne pectinée sépare le canal anal entoblastique (porte, insensible) du canal anal ectoblastique (cave, inguinal, nerf pudendal).",
            "Malformations : atrésie de l'œsophage (septum trachéo-œsophagien), atrésie duodénale (défaut de recanalisation, trisomie 21, double bulle), atrésies du grêle (ischémiques), omphalocèle (défaut de réintégration, sac, anomalies associées) contre laparoschisis (paroi, pas de sac, isolé), Meckel (canal vitellin), malrotation (volvulus), Hirschsprung (crêtes neurales, RET), imperforation anale et fistules (septum urorectal)."
          ],
          lexique: [
            { terme: "Intestin primitif", def: "Tube entoblastique formé par incorporation du toit de la vésicule vitelline lors de la délimitation, divisé en intestin antérieur, moyen et postérieur." },
            { terme: "Mésogastre dorsal", def: "Mésentère dorsal de l'estomac, à l'origine de la bourse omentale, du grand omentum, des ligaments spléniques, et dans lequel se développe la rate." },
            { terme: "Septum transversum", def: "Masse mésodermique entre cavité péricardique et pédicule vitellin, dans laquelle se développe le foie et qui donne le mésentère ventral (petit omentum, ligament falciforme) et le centre phrénique." },
            { terme: "Diverticule hépatique", def: "Bourgeon entoblastique ventral du duodénum (J22-J24) à l'origine du foie (pars hepatica), des voies biliaires et de la vésicule (pars cystica)." },
            { terme: "Bourgeons pancréatiques", def: "Deux bourgeons entoblastiques du duodénum, dorsal (corps, queue, tête supérieure) et ventral (tête inférieure, processus unciné), fusionnant à la 7e semaine." },
            { terme: "Hernie ombilicale physiologique", def: "Passage transitoire de l'anse intestinale primitive dans le cœlome extra-embryonnaire du cordon, de la 6e à la 10e semaine." },
            { terme: "Rotation de l'anse intestinale", def: "Rotation de 270 degrés dans le sens antihoraire (vue de face) autour de l'artère mésentérique supérieure, plaçant le côlon en cadre autour du grêle." },
            { terme: "Cloaque", def: "Dilatation terminale commune de l'intestin postérieur et de l'allantoïde, fermée par la membrane cloacale, cloisonnée par le septum urorectal en sinus urogénital et canal ano-rectal." },
            { terme: "Ligne pectinée", def: "Jonction entre les parties entoblastique (supérieure) et ectoblastique (inférieure) du canal anal, au niveau de l'ancienne membrane anale." },
            { terme: "Omphalocèle", def: "Hernie des viscères dans la base du cordon ombilical, recouverte d'un sac amnio-péritonéal, par défaut de réintégration des anses à la 10e semaine." },
            { terme: "Laparoschisis", def: "Défaut de la paroi abdominale para-ombilical droit laissant les anses herniées sans sac dans le liquide amniotique, cordon normalement inséré." }
          ],
          qcm: [
            {
              q: "Concernant les segments de l'intestin primitif :",
              options: [
                "A. L'intestin antérieur est vascularisé par le tronc cœliaque.",
                "B. La limite entre intestin antérieur et intestin moyen est l'abouchement du canal cholédoque.",
                "C. Le côlon descendant dérive de l'intestin moyen.",
                "D. L'intestin moyen est vascularisé par l'artère mésentérique supérieure.",
                "E. Le foie et le pancréas dérivent de l'intestin antérieur."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le côlon descendant dérive de l'intestin postérieur (artère mésentérique inférieure)."
            },
            {
              q: "Concernant l'estomac et ses mésos :",
              options: [
                "A. La grande courbure est d'origine dorsale.",
                "B. Après rotation, le nerf vague gauche innerve la face postérieure de l'estomac.",
                "C. La bourse omentale dérive du mésogastre dorsal.",
                "D. Le petit omentum dérive du mésogastre ventral.",
                "E. La rate dérive de l'entoblaste de l'intestin antérieur."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le vague gauche devient antérieur. E est fausse : la rate est d'origine mésoblastique (mésogastre dorsal)."
            },
            {
              q: "Concernant le foie et le pancréas :",
              options: [
                "A. Les hépatocytes dérivent de l'entoblaste du diverticule hépatique.",
                "B. Le foie se développe dans le septum transversum.",
                "C. Le bourgeon pancréatique ventral donne le corps et la queue du pancréas.",
                "D. Le canal de Wirsung est formé par le canal du bourgeon ventral et la partie distale du canal du bourgeon dorsal.",
                "E. Le processus unciné dérive du bourgeon pancréatique ventral."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le bourgeon ventral donne la partie inférieure de la tête et le processus unciné ; corps et queue dérivent du bourgeon dorsal."
            },
            {
              q: "Concernant la hernie physiologique et la rotation intestinale :",
              options: [
                "A. La hernie ombilicale physiologique a lieu de la 6e à la 10e semaine.",
                "B. La rotation totale de l'anse intestinale est de 270 degrés.",
                "C. La rotation s'effectue autour de l'axe de l'artère mésentérique inférieure.",
                "D. Le cæcum réintègre l'abdomen en dernier et se place à droite.",
                "E. Le côlon transverse passe en arrière de l'artère mésentérique supérieure."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : l'axe de rotation est l'artère mésentérique supérieure. E est fausse : le côlon transverse passe en avant de l'artère mésentérique supérieure et de D3."
            },
            {
              q: "Concernant le cloaque et le canal anal :",
              options: [
                "A. Le septum urorectal divise le cloaque en sinus urogénital ventral et canal ano-rectal dorsal.",
                "B. La membrane anale se rompt vers la 8e semaine.",
                "C. Le canal anal est entièrement d'origine entoblastique.",
                "D. Au-dessus de la ligne pectinée, le drainage veineux se fait vers le système porte.",
                "E. Au-dessous de la ligne pectinée, la sensibilité est assurée par le nerf pudendal."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le tiers inférieur du canal anal, sous la ligne pectinée, dérive de l'ectoblaste du proctodeum."
            },
            {
              q: "Concernant omphalocèle et laparoschisis :",
              options: [
                "A. L'omphalocèle correspond à un défaut de réintégration des anses intestinales dans l'abdomen.",
                "B. Dans l'omphalocèle, les viscères sont recouverts d'un sac amnio-péritonéal.",
                "C. Le laparoschisis est le plus souvent situé à droite du cordon normalement inséré.",
                "D. Le laparoschisis est plus souvent associé à des anomalies chromosomiques que l'omphalocèle.",
                "E. Le foie peut être hernié dans l'omphalocèle."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : c'est l'omphalocèle qui est fréquemment associée à des anomalies chromosomiques (trisomies 13, 18) ; le laparoschisis est le plus souvent isolé."
            },
            {
              q: "Concernant les autres malformations digestives :",
              options: [
                "A. L'atrésie duodénale résulte le plus souvent d'un défaut de recanalisation et est associée à la trisomie 21.",
                "B. La maladie de Hirschsprung est due à un arrêt de migration des cellules des crêtes neurales.",
                "C. Le diverticule de Meckel est situé sur le bord mésentérique de l'iléon.",
                "D. Une malrotation intestinale expose au volvulus du grêle.",
                "E. La sténose hypertrophique du pylore se manifeste par des vomissements bilieux dès la naissance."
              ],
              bonnes: [0, 1, 3],
              explication: "A, B et D sont vraies. C est fausse : le diverticule de Meckel est antimésentérique. E est fausse : la sténose du pylore donne des vomissements non bilieux (obstacle en amont du duodénum) apparaissant vers 3-6 semaines de vie."
            }
          ]
        },
        {
          id: "appareil-urinaire",
          titre: "Développement de l'appareil urinaire",
          duree: 35,
          objectifs: [
            "Décrire les trois systèmes rénaux successifs (pronéphros, mésonéphros, métanéphros) et leur chronologie.",
            "Expliquer la formation du rein définitif par induction réciproque entre le bourgeon urétéral et le blastème métanéphrogène, et préciser l'origine de chaque segment du néphron et des voies excrétrices.",
            "Décrire l'ascension et la rotation du rein et leurs anomalies.",
            "Décrire la formation de la vessie et de l'urètre à partir du sinus urogénital et le devenir de l'allantoïde et des canaux de Wolff.",
            "Connaître les principales malformations urinaires : agénésie, hypoplasie, rein en fer à cheval, ectopies, duplications, polykystoses, exstrophie, valves de l'urètre, reflux."
          ],
          sections: [
            {
              titre: "Origine et vue d'ensemble : le mésoblaste intermédiaire",
              contenu: `<p>L'appareil urinaire et l'appareil génital dérivent tous deux du <strong>mésoblaste intermédiaire</strong>, ce qui explique leurs relations anatomiques et leurs malformations associées. Le mésoblaste intermédiaire forme, de chaque côté, une bande longitudinale entre le mésoblaste para-axial et les lames latérales ; au cours de la 4<sup>e</sup> semaine, il se détache des somites et bombe dans le cœlome intra-embryonnaire sous la forme d'une <strong>crête urogénitale</strong> (pli urogénital) longitudinale, de part et d'autre de l'aorte, dont la partie latérale est le <strong>cordon néphrogène</strong> (appareil urinaire) et la partie médiale la <strong>crête génitale</strong> (gonade). L'<strong>épithélium</strong> des voies urinaires (du néphron à l'uretère) est donc d'origine <strong>mésoblastique</strong>, à l'exception de la <strong>vessie</strong> et de l'<strong>urètre</strong>, dont l'épithélium dérive de l'<strong>entoblaste</strong> du sinus urogénital (cloaque).</p>
<p>Chez l'homme, comme chez tous les vertébrés supérieurs, trois systèmes rénaux se succèdent dans le cordon néphrogène, de l'avant vers l'arrière (gradient cranio-caudal), chacun induit par le précédent et le remplaçant :</p>
<table>
<thead><tr><th>Système</th><th>Apparition</th><th>Localisation</th><th>Structure</th><th>Fonction</th><th>Devenir</th></tr></thead>
<tbody>
<tr><td><strong>Pronéphros</strong> (rein primitif, prorein)</td><td>Début de la 4<sup>e</sup> semaine (J22)</td><td>Région cervicale (somites 7 à 14)</td><td>7 à 10 paires de <strong>néphrotomes</strong> rudimentaires (vésicules sans glomérule) reliés à un canal collecteur, le <strong>canal pronéphrotique</strong></td><td><strong>Aucune</strong> chez l'homme (fonctionnel chez les poissons)</td><td>Régresse complètement à la fin de la 4<sup>e</sup> semaine ; son canal, qui se prolonge vers le cloaque, devient le <strong>canal mésonéphrotique (canal de Wolff)</strong> ; rôle inducteur</td></tr>
<tr><td><strong>Mésonéphros</strong> (corps de Wolff)</td><td>Fin de la 4<sup>e</sup> semaine (J24-J26)</td><td>Régions thoracique et lombaire haute (somites 14 à 26)</td><td>Environ <strong>40 paires de tubules mésonéphrotiques</strong> en S, chacun avec un <strong>glomérule</strong> (branche de l'aorte) coiffé par une capsule, et débouchant latéralement dans le <strong>canal de Wolff</strong>, qui s'abouche dans le cloaque (J28) ; forme deux gros organes allongés faisant saillie dans le cœlome</td><td><strong>Fonction excrétrice transitoire</strong> (6<sup>e</sup> à 10<sup>e</sup> semaine), urine primitive</td><td>Régresse de la 8<sup>e</sup> à la 12<sup>e</sup> semaine (de l'avant vers l'arrière) ; <strong>persistance de dérivés</strong> : chez l'homme, le canal de Wolff devient l'<strong>épididyme</strong>, le <strong>canal déférent</strong>, la <strong>vésicule séminale</strong> et le <strong>canal éjaculateur</strong>, et quelques tubules deviennent les <strong>canaux efférents</strong> ; chez la femme, vestiges (époophore, paroophore, canal de Gartner) ; le canal de Wolff émet le <strong>bourgeon urétéral</strong></td></tr>
<tr><td><strong>Métanéphros</strong> (rein définitif)</td><td>5<sup>e</sup> semaine (J28-J32)</td><td>Région sacrée (somites 26 à 28), puis ascension lombaire</td><td><strong>Bourgeon urétéral</strong> (voies excrétrices) + <strong>blastème métanéphrogène</strong> (néphrons)</td><td>Urine dès la <strong>9<sup>e</sup>-12<sup>e</sup> semaine</strong>, se poursuivant toute la vie</td><td>Rein définitif</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> pronéphros (cervical, J22, non fonctionnel, régresse mais laisse le canal de Wolff), mésonéphros (thoraco-lombaire, J24, fonctionnel transitoirement, canal de Wolff -> voies génitales masculines et bourgeon urétéral), métanéphros (sacré puis lombaire, J28, rein définitif). Le rein définitif se forme à partir de <strong>deux ébauches</strong> : le bourgeon urétéral et le blastème métanéphrogène.</div>`
            },
            {
              titre: "Le métanéphros : bourgeon urétéral et blastème métanéphrogène",
              contenu: `<p>Le rein définitif résulte de l'<strong>induction réciproque</strong> de deux tissus d'origine mésoblastique intermédiaire :</p>
<ul>
<li>le <strong>bourgeon urétéral</strong> : diverticule <strong>dorsal</strong> de la partie caudale du <strong>canal de Wolff</strong>, près de son abouchement dans le cloaque, apparaissant à la <strong>5<sup>e</sup> semaine</strong> (J28). Il croît dorsalement et crânialement vers le mésoblaste intermédiaire sacré, induit par le <strong>GDNF</strong> sécrété par le blastème (récepteur RET sur le bourgeon : la mutation de <em>RET</em> ou de <em>GDNF</em> donne une agénésie rénale) ;</li>
<li>le <strong>blastème métanéphrogène</strong> (mésenchyme métanéphrogène) : condensation de la partie <strong>caudale</strong> (sacrée) du cordon néphrogène, qui exprime WT1, PAX2 et GDNF et coiffe l'extrémité du bourgeon urétéral comme un bonnet.</li>
</ul>
<h4>Les dérivés du bourgeon urétéral : les voies excrétrices</h4>
<p>Au contact du blastème, l'extrémité du bourgeon se dilate en <strong>bassinet</strong> primitif puis se divise de façon <strong>dichotomique</strong> répétée (12 à 15 générations) : les deux premières divisions donnent les <strong>calices majeurs</strong> (2 à 3), les divisions suivantes les <strong>calices mineurs</strong> (8 à 12) par absorption des 3<sup>e</sup> et 4<sup>e</sup> générations, puis les <strong>tubes collecteurs</strong> (canaux de Bellini, puis collecteurs droits et arqués) ; chaque calice mineur reçoit un faisceau de tubes collecteurs formant une <strong>pyramide de Malpighi</strong> (futur lobe rénal : 10 à 14 lobes visibles chez le fœtus et le nouveau-né, qui s'effacent ensuite). Le bourgeon urétéral donne ainsi : <strong>uretère, bassinet, calices majeurs et mineurs, tubes collecteurs</strong>.</p>
<h4>Les dérivés du blastème métanéphrogène : les néphrons</h4>
<p>Chaque extrémité de tube collecteur (ampoule) induit, dans le blastème qui la coiffe, la condensation d'un amas de cellules (<strong>vésicule rénale</strong>) qui se creuse, s'allonge en <strong>tubule en S</strong> (corps en virgule puis en S) et se différencie par <strong>transition mésenchymo-épithéliale</strong> (Wnt4, Wnt9b) : l'extrémité proximale du S s'invagine autour d'un bouquet capillaire (branche de l'artère rénale) pour former la <strong>capsule de Bowman</strong> et le <strong>glomérule</strong> (corpuscule rénal) ; le reste du tubule forme le <strong>tube contourné proximal</strong>, l'<strong>anse de Henlé</strong> et le <strong>tube contourné distal</strong> ; l'extrémité distale du S se <strong>connecte</strong> au tube collecteur inducteur (segment de connexion). Les cellules endothéliales et mésangiales du glomérule viennent du mésenchyme environnant (vasculogenèse). Le blastème donne aussi le tissu interstitiel et la capsule du rein.</p>
<table>
<thead><tr><th>Origine</th><th>Dérivés</th></tr></thead>
<tbody>
<tr><td><strong>Bourgeon urétéral</strong> (diverticule du canal de Wolff)</td><td>Uretère, bassinet, calices majeurs, calices mineurs, tubes collecteurs</td></tr>
<tr><td><strong>Blastème métanéphrogène</strong> (mésoblaste intermédiaire caudal)</td><td>Néphrons : capsule de Bowman, tube contourné proximal, anse de Henlé, tube contourné distal, segment de connexion ; stroma, capsule</td></tr>
</tbody>
</table>
<p>La <strong>néphrogenèse</strong> se poursuit jusqu'à la <strong>34<sup>e</sup>-36<sup>e</sup> semaine</strong> : à ce terme, le stock définitif d'environ <strong>un million de néphrons par rein</strong> (300 000 à 1,8 million) est constitué ; <strong>aucun néphron ne se forme après la naissance</strong> (ni après 36 SA), la croissance ultérieure du rein se faisant par hypertrophie des néphrons existants (allongement des tubules). Le grand prématuré et l'hypotrophe naissent donc avec un capital néphronique réduit, facteur de risque d'hypertension et d'insuffisance rénale à l'âge adulte. Le rein fœtal produit de l'<strong>urine dès la 9<sup>e</sup>-12<sup>e</sup> semaine</strong> (vessie visible à 12-14 SA), composant majeur du liquide amniotique au 2<sup>e</sup> et 3<sup>e</sup> trimestre, mais la fonction d'épuration est assurée par le placenta : un fœtus sans reins survit jusqu'à la naissance.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> les <strong>tubes collecteurs</strong> dérivent du <strong>bourgeon urétéral</strong>, pas du blastème ; le <strong>néphron</strong> (de Bowman au tube distal) dérive du <strong>blastème</strong>. Le canal de Wolff est à l'origine du bourgeon urétéral mais ne participe pas au néphron. La néphrogenèse s'arrête à 34-36 SA : le nombre de néphrons est fixé à la naissance.</div>`
            },
            {
              titre: "Ascension, rotation et vascularisation du rein",
              contenu: `<p>Le métanéphros apparaît dans la région <strong>sacrée</strong> (pelvienne), en regard de S1-S2, les deux ébauches étant très proches l'une de l'autre, en avant du sacrum, hiles tournés vers l'<strong>avant</strong>. Entre la <strong>6<sup>e</sup> et la 9<sup>e</sup> semaine</strong>, les reins « montent » jusqu'à leur position lombaire définitive (T12-L3), de part et d'autre de l'aorte, sous les surrénales. Cette <strong>ascension</strong> est en réalité <strong>relative</strong> : elle résulte surtout de la <strong>croissance de la région lombo-sacrée</strong> de l'embryon (redressement de la courbure caudale) et de la régression du mésonéphros, plus que d'une migration active. Au cours de l'ascension, le rein subit une <strong>rotation de 90 degrés</strong> autour de son axe longitudinal : le hile, d'abord ventral, devient <strong>médial</strong>.</p>
<p>La <strong>vascularisation</strong> change au cours de l'ascension : le rein est successivement irrigué par des branches de plus en plus hautes de l'aorte (artères iliaques communes, puis sacrées, puis aorte abdominale), les branches inférieures régressant au fur et à mesure : l'<strong>artère rénale</strong> définitive est la dernière de ces branches (L1-L2). La persistance de branches inférieures explique la fréquence (25 à 30 % de la population) des <strong>artères rénales multiples</strong> ou <strong>polaires inférieures</strong> (qui peuvent comprimer l'uretère et provoquer une hydronéphrose).</p>
<p>La <strong>surrénale</strong> se développe indépendamment, au-dessus du rein, à partir du mésoblaste cœlomique (cortex, 6<sup>e</sup> semaine : zone fœtale puis cortex définitif) et des crêtes neurales (médullaire, 7<sup>e</sup> semaine) ; elle est très volumineuse chez le fœtus (aussi grosse que le rein au 4<sup>e</sup> mois) ; en cas d'agénésie rénale, elle est à sa place normale mais aplatie (« en disque »).</p>
<h4>Anomalies de l'ascension et de la rotation</h4>
<ul>
<li><strong>Rein pelvien</strong> (ectopie rénale) : arrêt de l'ascension, rein resté dans le bassin (1/2 000 à 1/3 000), hile antérieur, vascularisé par l'iliaque ; généralement asymptomatique, parfois reflux, lithiase ou compression ; risque lors de l'accouchement ou de la chirurgie.</li>
<li><strong>Rein en fer à cheval</strong> (1/400 à 1/600) : fusion des <strong>pôles inférieurs</strong> des deux reins (90 %) par un isthme parenchymateux ou fibreux qui passe <strong>en avant de l'aorte et de la veine cave</strong> ; l'ascension est bloquée par l'<strong>artère mésentérique inférieure</strong> (isthme à hauteur de L3-L5) ; rotation incomplète (hiles antérieurs), uretères passant devant l'isthme ; prédispose aux infections, lithiases, hydronéphrose, tumeur de Wilms ; associé au syndrome de Turner (7 %) et à la trisomie 18.</li>
<li><strong>Ectopie croisée</strong> (avec ou sans fusion) : un rein passe de l'autre côté de la ligne médiane, les deux reins étant du même côté, l'uretère du rein ectopique croisant pour s'aboucher à sa place normale.</li>
<li><strong>Malrotation</strong> : hile antérieur ou latéral.</li>
<li><strong>Rein thoracique</strong> (exceptionnel).</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> ascension <strong>relative</strong> du rein de la région sacrée à la région lombaire entre la 6<sup>e</sup> et la 9<sup>e</sup> semaine, avec rotation de 90 degrés (hile ventral puis médial) et changement successif d'artères (d'où les artères polaires surnuméraires). Le rein en fer à cheval est bloqué par l'artère mésentérique inférieure.</div>`
            },
            {
              titre: "Vessie, urètre et devenir du sinus urogénital",
              contenu: `<p>Le cloisonnement du cloaque par le <strong>septum urorectal</strong> (5<sup>e</sup>-7<sup>e</sup> semaine) isole ventralement le <strong>sinus urogénital primitif</strong>, en continuité avec l'<strong>allantoïde</strong> en haut et recevant les deux <strong>canaux de Wolff</strong> (porteurs des bourgeons urétéraux) sur sa face dorsale. On lui distingue trois parties :</p>
<ol>
<li>la <strong>partie vésicale</strong> (supérieure, la plus large) : la <strong>vessie</strong>. Son épithélium (urothélium) est <strong>entoblastique</strong> ; sa musculeuse (détrusor) et son conjonctif sont issus du mésoblaste splanchnique environnant. Le sommet de la vessie se continue par l'<strong>allantoïde</strong>, qui s'oblitère en un cordon fibreux, l'<strong>ouraque</strong> (ligament ombilical médian) ;</li>
<li>la <strong>partie pelvienne</strong> (étroite) : chez l'homme, l'<strong>urètre prostatique</strong> (jusqu'à l'abouchement des canaux éjaculateurs) et l'<strong>urètre membraneux</strong>, avec les bourgeons de la <strong>prostate</strong> (bourgeonnement entoblastique de l'urètre prostatique à la 10<sup>e</sup>-12<sup>e</sup> semaine, sous l'effet de la DHT ; le stroma est mésoblastique) et des glandes bulbo-urétrales ; chez la femme, la totalité de l'<strong>urètre</strong> (court) et les glandes para-urétrales (de Skene) ;</li>
<li>la <strong>partie phallique</strong> (inférieure, aplatie) : chez l'homme, l'<strong>urètre spongieux (pénien)</strong> jusqu'à la fosse naviculaire (l'urètre balanique terminal provient d'une invagination ectoblastique du gland qui rejoint l'urètre entoblastique) ; chez la femme, le <strong>vestibule</strong> du vagin où s'ouvrent l'urètre et le vagin (et les glandes de Bartholin).</li>
</ol>
<h4>L'incorporation des canaux de Wolff et des uretères dans la vessie (trigone)</h4>
<p>Initialement, chaque <strong>canal de Wolff</strong> s'abouche dans le sinus urogénital en portant le <strong>bourgeon urétéral</strong> sur sa face dorsale. Avec la croissance de la vessie, la portion terminale commune du canal de Wolff est <strong>incorporée</strong> dans la paroi vésicale : les orifices de l'<strong>uretère</strong> et du <strong>canal de Wolff</strong> se séparent, l'orifice urétéral <strong>migrant vers le haut et le dehors</strong> (angle supéro-latéral du trigone) tandis que l'orifice wolffien <strong>descend</strong> vers l'urètre prostatique (canaux éjaculateurs s'ouvrant sur le colliculus séminal chez l'homme ; régression chez la femme). Le mésoblaste wolffien incorporé forme le <strong>trigone vésical</strong>, zone triangulaire lisse entre les deux orifices urétéraux et l'orifice urétral ; son épithélium est secondairement remplacé par de l'urothélium entoblastique. Le trajet oblique intramural de l'uretère est le mécanisme anti-reflux.</p>
<table>
<thead><tr><th>Structure</th><th>Origine de l'épithélium</th></tr></thead>
<tbody>
<tr><td>Néphron, tubes collecteurs, calices, bassinet, uretère</td><td>Mésoblaste intermédiaire (blastème et bourgeon urétéral)</td></tr>
<tr><td>Trigone (mésoblaste initialement)</td><td>Canaux de Wolff incorporés, épithélium remplacé par de l'entoblaste</td></tr>
<tr><td>Vessie, urètre prostatique et membraneux (homme), urètre (femme)</td><td>Entoblaste du sinus urogénital</td></tr>
<tr><td>Urètre spongieux (homme)</td><td>Entoblaste (partie phallique) ; gland : ectoblaste</td></tr>
<tr><td>Prostate, glandes bulbo-urétrales, glandes de Skene</td><td>Entoblaste de l'urètre (stroma mésoblastique)</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> l'épithélium des <strong>uretères</strong> et des <strong>calices</strong> est mésoblastique (bourgeon urétéral), celui de la <strong>vessie</strong> est entoblastique (sinus urogénital) : deux origines différentes pour un même urothélium. L'allantoïde ne donne pas la vessie (sauf une contribution discutée au dôme) mais l'ouraque.</div>`
            },
            {
              titre: "Malformations de l'appareil urinaire",
              contenu: `<p>Les malformations de l'appareil urinaire sont parmi les plus fréquentes (3 à 4 % des naissances si l'on compte les anomalies mineures), souvent découvertes à l'échographie anténatale (dilatation des voies urinaires, anomalie du liquide amniotique). Elles sont fréquemment associées aux anomalies génitales et à d'autres syndromes (VACTERL, trisomies, Turner).</p>
<table>
<thead><tr><th>Malformation</th><th>Mécanisme</th><th>Caractéristiques</th></tr></thead>
<tbody>
<tr><td><strong>Agénésie rénale</strong></td><td>Absence de bourgeon urétéral ou défaut d'induction du blastème (mutations <em>RET</em>, <em>GDNF</em>, <em>PAX2</em>) ; le blastème non induit dégénère</td><td><strong>Unilatérale</strong> (1/1 000, souvent asymptomatique, rein unique hypertrophié, anomalies génitales associées du même côté chez la fille : utérus unicorne) ; <strong>bilatérale</strong> (1/4 000 à 1/10 000, garçons 3/1) : <strong>anamnios</strong>, <strong>séquence de Potter</strong> (hypoplasie pulmonaire létale, faciès aplati, oreilles basses, pieds en varus), incompatible avec la vie</td></tr>
<tr><td><strong>Hypoplasie rénale</strong></td><td>Induction insuffisante : petit rein avec moins de néphrons (oligoméganéphronie)</td><td>Insuffisance rénale progressive si bilatérale</td></tr>
<tr><td><strong>Dysplasie rénale multikystique</strong></td><td>Atrésie précoce de l'uretère ou induction anarchique : parenchyme désorganisé, kystes, pas de fonction</td><td>1/4 000, le plus souvent unilatérale ; involue souvent spontanément</td></tr>
<tr><td><strong>Polykystose rénale autosomique récessive</strong> (infantile, <em>PKHD1</em>)</td><td>Dilatation kystique des tubes collecteurs (fibrocystine) ; fibrose hépatique associée</td><td>1/20 000 ; gros reins hyperéchogènes, oligoamnios, insuffisance rénale néonatale ou infantile</td></tr>
<tr><td><strong>Polykystose rénale autosomique dominante</strong> (adulte, <em>PKD1</em>, <em>PKD2</em>)</td><td>Kystes développés à partir de tous les segments du néphron (polycystines, cils primaires)</td><td>1/1 000, révélation à l'âge adulte (hypertension, insuffisance rénale), kystes hépatiques, anévrismes cérébraux</td></tr>
<tr><td><strong>Duplications</strong> (duplicité pyélo-urétérale, bifidité)</td><td><strong>Division précoce</strong> ou <strong>double bourgeon urétéral</strong> : deux uretères (complets ou se réunissant en Y) pour un seul rein ; <strong>loi de Weigert-Meyer</strong> : l'uretère du <strong>pôle supérieur</strong> s'abouche <strong>plus bas et plus médialement</strong> dans la vessie (voire dans l'urètre, le vagin, la vésicule séminale : uretère ectopique) et est souvent obstrué (urétérocèle) ; l'uretère du pôle inférieur s'abouche plus haut et latéralement et reflue</td><td>1 % de la population ; souvent asymptomatique ; infections, reflux, incontinence par uretère ectopique chez la fille</td></tr>
<tr><td><strong>Rein en fer à cheval</strong></td><td>Fusion des pôles inférieurs, bloqué par l'artère mésentérique inférieure</td><td>1/500 ; Turner ; lithiase, infection</td></tr>
<tr><td><strong>Ectopie rénale</strong> (pelvienne, croisée)</td><td>Défaut d'ascension</td><td>Souvent asymptomatique</td></tr>
<tr><td><strong>Syndrome de la jonction pyélo-urétérale</strong></td><td>Sténose fonctionnelle ou organique de la jonction (anomalie de la musculeuse, défaut de recanalisation, artère polaire)</td><td>Première cause d'<strong>hydronéphrose</strong> anténatale (dilatation du bassinet et des calices sans dilatation urétérale)</td></tr>
<tr><td><strong>Reflux vésico-urétéral</strong></td><td>Trajet intramural de l'uretère trop court (orifice latéral), insuffisance du mécanisme anti-reflux du trigone</td><td>1 à 2 % des enfants ; infections urinaires fébriles, néphropathie de reflux ; souvent maturation spontanée</td></tr>
<tr><td><strong>Méga-uretère</strong>, atrésie urétérale</td><td>Anomalie de la musculeuse ou de la recanalisation de l'uretère (lumière transitoirement oblitérée)</td><td>Dilatation urétérale</td></tr>
<tr><td><strong>Valves de l'urètre postérieur</strong> (garçons, 1/5 000 à 1/8 000)</td><td>Replis muqueux obstructifs de l'urètre prostatique (anomalie d'intégration des canaux de Wolff ou de la membrane urogénitale)</td><td>Obstruction sous-vésicale : <strong>mégavessie</strong>, urétéro-hydronéphrose bilatérale, dysplasie rénale, oligoamnios et hypoplasie pulmonaire dans les formes sévères ; résection endoscopique</td></tr>
<tr><td><strong>Exstrophie vésicale</strong> (1/30 000 à 1/50 000, garçons 2/1)</td><td>Défaut de migration du mésoblaste dans la paroi abdominale infra-ombilicale et la membrane cloacale, trop étendue, qui se rompt : vessie ouverte à l'extérieur</td><td>Vessie exposée sur la paroi abdominale, épispadias (urètre ouvert sur le dos du pénis), diastasis pubien ; reconstruction chirurgicale complexe</td></tr>
<tr><td><strong>Anomalies de l'ouraque</strong></td><td>Persistance de l'allantoïde intra-embryonnaire</td><td>Fistule (urine à l'ombilic), kyste, sinus, diverticule</td></tr>
<tr><td><strong>Syndrome de Prune-Belly</strong></td><td>Absence de musculature abdominale, mégavessie, cryptorchidie (obstruction urétrale précoce probable)</td><td>Rare, garçons</td></tr>
<tr><td><strong>Tumeur de Wilms</strong> (néphroblastome)</td><td>Persistance de blastème métanéphrogène embryonnaire (restes néphrogéniques), gène <em>WT1</em>, syndrome WAGR, Beckwith-Wiedemann, Denys-Drash</td><td>Tumeur rénale la plus fréquente de l'enfant (pic 3 ans) ; masse abdominale ; bon pronostic</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> une <strong>dilatation des voies urinaires</strong> à l'échographie anténatale (bassinet supérieur à 7 mm au 3<sup>e</sup> trimestre) impose un bilan post-natal (échographie, cystographie rétrograde à la recherche d'un reflux ou de valves) et une antibioprophylaxie éventuelle. Un <strong>oligoamnios</strong> avec vessie non visible ou mégavessie oriente vers une agénésie rénale ou une obstruction urétrale ; la fonction rénale fœtale s'évalue sur le liquide amniotique et l'échostructure du parenchyme (kystes, hyperéchogénicité). L'<strong>artère ombilicale unique</strong> est souvent associée à une malformation rénale.</div>`
            }
          ],
          points_cles: [
            "L'appareil urinaire dérive du mésoblaste intermédiaire (cordon néphrogène), sauf l'épithélium de la vessie et de l'urètre, d'origine entoblastique (sinus urogénital).",
            "Trois reins successifs : pronéphros (cervical, J22, non fonctionnel, laisse le canal de Wolff), mésonéphros (thoraco-lombaire, J24, transitoirement fonctionnel, 40 tubules à glomérule, canal de Wolff), métanéphros (sacré, J28, rein définitif).",
            "Le rein définitif naît de l'induction réciproque (GDNF/RET, WT1, PAX2, Wnt) du bourgeon urétéral (diverticule dorsal du canal de Wolff) et du blastème métanéphrogène.",
            "Le bourgeon urétéral donne uretère, bassinet, calices majeurs et mineurs et tubes collecteurs ; le blastème donne les néphrons (Bowman, tube proximal, anse de Henlé, tube distal) par transition mésenchymo-épithéliale.",
            "La néphrogenèse s'achève à 34-36 SA avec environ un million de néphrons par rein ; aucun néphron ne se forme après ; l'urine est produite dès la 9e-12e semaine.",
            "Le rein monte de la région sacrée à la région lombaire (6e-9e semaine) par croissance différentielle, tourne de 90 degrés (hile médial) et change d'artères (artères polaires surnuméraires) ; anomalies : rein pelvien, rein en fer à cheval (bloqué par l'artère mésentérique inférieure), ectopie croisée.",
            "Le sinus urogénital donne la vessie (partie vésicale), l'urètre prostatique et membraneux ou l'urètre féminin (partie pelvienne), l'urètre spongieux ou le vestibule (partie phallique) ; l'allantoïde devient l'ouraque ; les canaux de Wolff incorporés forment le trigone.",
            "Les orifices urétéraux migrent vers le haut et le dehors, les orifices wolffiens vers le bas (canaux éjaculateurs) ; loi de Weigert-Meyer en cas de duplication.",
            "Malformations : agénésie bilatérale (séquence de Potter, anamnios, hypoplasie pulmonaire), dysplasie multikystique, polykystoses récessive (PKHD1) et dominante (PKD1/2), duplications, syndrome de la jonction (hydronéphrose), reflux vésico-urétéral, valves de l'urètre postérieur (mégavessie), exstrophie vésicale, tumeur de Wilms (WT1)."
          ],
          lexique: [
            { terme: "Cordon néphrogène", def: "Partie latérale de la crête urogénitale, dérivée du mésoblaste intermédiaire, où se forment successivement pronéphros, mésonéphros et métanéphros." },
            { terme: "Pronéphros", def: "Premier rein, cervical, rudimentaire et non fonctionnel chez l'homme (J22), dont le canal persiste sous forme de canal de Wolff." },
            { terme: "Mésonéphros", def: "Second rein, thoraco-lombaire, transitoirement fonctionnel (6e-10e semaine), formé de tubules à glomérule débouchant dans le canal de Wolff." },
            { terme: "Canal de Wolff", def: "Canal mésonéphrotique drainant le mésonéphros vers le cloaque, émettant le bourgeon urétéral et devenant chez l'homme épididyme, déférent, vésicule séminale et canal éjaculateur." },
            { terme: "Bourgeon urétéral", def: "Diverticule dorsal du canal de Wolff (5e semaine) à l'origine de l'uretère, du bassinet, des calices et des tubes collecteurs." },
            { terme: "Blastème métanéphrogène", def: "Mésenchyme du cordon néphrogène sacré induit par le bourgeon urétéral, à l'origine des néphrons." },
            { terme: "Sinus urogénital", def: "Partie ventrale du cloaque isolée par le septum urorectal, à l'origine de la vessie, de l'urètre et, chez la femme, du vestibule." },
            { terme: "Trigone vésical", def: "Zone triangulaire du plancher vésical entre les orifices urétéraux et urétral, formée par incorporation des portions terminales des canaux de Wolff." },
            { terme: "Séquence de Potter", def: "Conséquences de l'anamnios par agénésie rénale bilatérale : hypoplasie pulmonaire létale, faciès aplati, déformations des membres." },
            { terme: "Loi de Weigert-Meyer", def: "En cas de duplication urétérale, l'uretère du pôle supérieur s'abouche plus bas et plus médialement (souvent obstrué), celui du pôle inférieur plus haut et latéralement (souvent refluant)." }
          ],
          qcm: [
            {
              q: "Concernant les trois systèmes rénaux :",
              options: [
                "A. Le pronéphros est fonctionnel pendant la vie fœtale chez l'homme.",
                "B. Le mésonéphros possède des tubules à glomérule et une fonction excrétrice transitoire.",
                "C. Le canal de Wolff est le canal collecteur du mésonéphros.",
                "D. Le métanéphros apparaît dans la région cervicale.",
                "E. Le mésonéphros régresse complètement sans laisser de dérivé."
              ],
              bonnes: [1, 2],
              explication: "A est fausse : le pronéphros n'a aucune fonction chez l'homme. B et C sont vraies. D est fausse : le métanéphros apparaît dans la région sacrée. E est fausse : le canal de Wolff et quelques tubules persistent chez l'homme (épididyme, déférent, canaux efférents)."
            },
            {
              q: "Concernant la formation du rein définitif :",
              options: [
                "A. Le bourgeon urétéral est un diverticule du canal de Wolff.",
                "B. Les tubes collecteurs dérivent du blastème métanéphrogène.",
                "C. La capsule de Bowman et le tube contourné proximal dérivent du blastème métanéphrogène.",
                "D. Le développement du rein repose sur une induction réciproque entre le bourgeon urétéral et le blastème.",
                "E. De nouveaux néphrons se forment pendant toute l'enfance."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : les tubes collecteurs dérivent du bourgeon urétéral. E est fausse : la néphrogenèse s'arrête à 34-36 SA ; le nombre de néphrons est fixé à la naissance."
            },
            {
              q: "Concernant l'ascension du rein :",
              options: [
                "A. Le rein se forme dans la région pelvienne puis gagne la région lombaire.",
                "B. L'ascension résulte principalement d'une migration active du rein.",
                "C. Le hile rénal, d'abord ventral, devient médial par rotation de 90 degrés.",
                "D. Les artères polaires surnuméraires s'expliquent par la persistance de branches aortiques inférieures.",
                "E. Le rein en fer à cheval est bloqué dans son ascension par l'artère mésentérique supérieure."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : l'ascension est relative, liée à la croissance de la région lombo-sacrée. E est fausse : l'isthme est bloqué par l'artère mésentérique inférieure."
            },
            {
              q: "Concernant la vessie et l'urètre :",
              options: [
                "A. L'épithélium vésical dérive de l'entoblaste du sinus urogénital.",
                "B. L'épithélium de l'uretère dérive de l'entoblaste.",
                "C. Le trigone vésical se forme par incorporation des portions terminales des canaux de Wolff.",
                "D. L'allantoïde devient l'ouraque puis le ligament ombilical médian.",
                "E. La prostate dérive de bourgeons entoblastiques de l'urètre prostatique."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : l'épithélium de l'uretère dérive du bourgeon urétéral (mésoblaste intermédiaire)."
            },
            {
              q: "Concernant les malformations rénales :",
              options: [
                "A. L'agénésie rénale bilatérale est responsable d'un anamnios et d'une hypoplasie pulmonaire.",
                "B. L'agénésie rénale résulte le plus souvent d'un défaut de formation ou d'induction du bourgeon urétéral.",
                "C. Le rein en fer à cheval résulte de la fusion des pôles supérieurs.",
                "D. La polykystose rénale autosomique dominante se révèle habituellement à l'âge adulte.",
                "E. La tumeur de Wilms dérive de restes de blastème métanéphrogène."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le rein en fer à cheval résulte de la fusion des pôles inférieurs dans 90 % des cas."
            },
            {
              q: "Concernant les anomalies des voies excrétrices :",
              options: [
                "A. En cas de duplication urétérale, l'uretère du pôle supérieur s'abouche plus bas et plus médialement dans la vessie.",
                "B. Les valves de l'urètre postérieur touchent exclusivement les garçons.",
                "C. Le syndrome de la jonction pyélo-urétérale est la première cause d'hydronéphrose anténatale.",
                "D. L'exstrophie vésicale résulte d'un défaut de migration du mésoblaste dans la paroi abdominale infra-ombilicale.",
                "E. Le reflux vésico-urétéral est lié à un trajet intramural de l'uretère trop long."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : le reflux est lié à un trajet intramural trop court, insuffisant pour assurer le mécanisme anti-reflux."
            }
          ]
        },
        {
          id: "appareil-genital",
          titre: "Développement de l'appareil génital",
          duree: 45,
          objectifs: [
            "Décrire le stade indifférencié : gonade primitive, cellules germinales primordiales, canaux de Wolff et de Müller, sinus urogénital, tubercule génital.",
            "Expliquer la détermination testiculaire (SRY, SOX9) et la différenciation du testicule, puis la différenciation ovarienne.",
            "Décrire le rôle de la testostérone, de la DHT et de l'AMH dans la différenciation des voies génitales et des organes génitaux externes.",
            "Connaître le tableau des dérivés homologues des canaux de Wolff, de Müller, du sinus urogénital et du tubercule génital dans les deux sexes.",
            "Décrire la descente testiculaire et ses anomalies, et les principales anomalies de la différenciation sexuelle."
          ],
          sections: [
            {
              titre: "Les trois niveaux du sexe et le stade indifférencié",
              contenu: `<p>Le sexe d'un individu se construit en trois étapes successives : le <strong>sexe génétique</strong> (chromosomique) est fixé à la fécondation (XX ou XY, selon le spermatozoïde) ; le <strong>sexe gonadique</strong> est déterminé à la <strong>7<sup>e</sup> semaine</strong> par la différenciation de la gonade indifférenciée en testicule ou en ovaire ; le <strong>sexe phénotypique</strong> (voies génitales, organes génitaux externes) est acquis entre la 8<sup>e</sup> et la 12<sup>e</sup>-14<sup>e</sup> semaine sous l'influence des hormones gonadiques. Jusqu'à la <strong>7<sup>e</sup> semaine</strong>, l'appareil génital est <strong>identique dans les deux sexes</strong> : c'est le <strong>stade indifférencié</strong> (ambisexué), au cours duquel coexistent toutes les ébauches masculines et féminines.</p>
<h4>Les cellules germinales primordiales</h4>
<p>Les <strong>cellules germinales primordiales</strong> (gonocytes primordiaux) sont individualisées dès la 3<sup>e</sup> semaine (origine épiblastique, spécification par BMP4) dans la paroi de la <strong>vésicule vitelline</strong>, près de l'allantoïde. Elles <strong>migrent</strong> par mouvements amiboïdes, de la 4<sup>e</sup> à la 6<sup>e</sup> semaine, le long du mésentère dorsal de l'intestin postérieur jusqu'aux <strong>crêtes génitales</strong>, guidées par des signaux chimiotactiques (SDF-1, KIT ligand), tout en se multipliant. Elles sont indispensables au développement de la gonade : en leur absence, la gonade reste une <strong>bandelette fibreuse</strong>. Des cellules égarées sur le trajet peuvent donner des <strong>tératomes</strong> ou des germinomes extragonadiques (médiastin, région sacrococcygienne).</p>
<h4>La gonade indifférenciée</h4>
<p>La <strong>crête génitale</strong> apparaît à la 5<sup>e</sup> semaine comme un épaississement de l'<strong>épithélium cœlomique</strong> et du <strong>mésenchyme</strong> sous-jacent, sur la face médiale du mésonéphros. L'épithélium cœlomique prolifère et envoie dans le mésenchyme des <strong>cordons sexuels primitifs</strong> (6<sup>e</sup> semaine) qui s'organisent autour des cellules germinales. La gonade indifférenciée comporte ainsi un <strong>cortex</strong> (cordons superficiels) et une <strong>médullaire</strong> (cordons profonds, mésenchyme, vaisseaux). Trois lignées y coexistent : les <strong>cellules germinales</strong>, les <strong>cellules de soutien</strong> (futures cellules de Sertoli ou de la granulosa, issues de l'épithélium cœlomique) et les <strong>cellules stéroïdogènes</strong> (futures cellules de Leydig ou de la thèque, issues du mésenchyme et du mésonéphros). Sa formation requiert les gènes WT1, SF1 (NR5A1), LHX9, GATA4 et EMX2.</p>
<h4>Les voies génitales indifférenciées : deux paires de canaux</h4>
<ul>
<li>Les <strong>canaux de Wolff</strong> (mésonéphriques), déjà présents (drainage du mésonéphros), s'abouchent dans le sinus urogénital.</li>
<li>Les <strong>canaux de Müller</strong> (paramésonéphriques) apparaissent à la <strong>6<sup>e</sup> semaine</strong> par invagination de l'<strong>épithélium cœlomique</strong> sur la face latérale de la crête urogénitale ; chaque canal s'ouvre en haut dans la cavité cœlomique (futur pavillon de la trompe), descend latéralement au canal de Wolff, puis le croise en avant pour gagner la ligne médiane où les deux canaux de Müller <strong>fusionnent</strong> dans leur partie caudale et viennent buter contre la paroi dorsale du sinus urogénital, formant un relief, le <strong>tubercule de Müller</strong> (tubercule sinusal), entre les orifices des canaux de Wolff.</li>
</ul>
<h4>Les organes génitaux externes indifférenciés</h4>
<p>Autour de la membrane cloacale, le mésoblaste forme, à la 4<sup>e</sup>-5<sup>e</sup> semaine, le <strong>tubercule génital</strong> (médian), les <strong>replis génitaux</strong> (de part et d'autre de la membrane urogénitale) et les <strong>bourrelets génitaux</strong> (labio-scrotaux, latéraux). Après la rupture de la membrane urogénitale (7<sup>e</sup> semaine), la <strong>gouttière urogénitale</strong> s'ouvre entre les replis. Ces structures restent identiques dans les deux sexes jusqu'à la 9<sup>e</sup>-10<sup>e</sup> semaine.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> stade indifférencié jusqu'à la 7<sup>e</sup> semaine : gonade bipotentielle, canaux de Wolff et de Müller présents tous les deux, sinus urogénital, tubercule génital, replis et bourrelets génitaux. Le canal de Müller est une invagination de l'épithélium cœlomique ; le canal de Wolff est l'ancien canal du mésonéphros.</div>`
            },
            {
              titre: "La détermination et la différenciation du testicule",
              contenu: `<h4>SRY : le déclencheur</h4>
<p>La différenciation masculine est un processus <strong>actif</strong> déclenché par le gène <strong>SRY</strong> (sex-determining region of Y), situé sur le <strong>bras court du chromosome Y</strong> (Yp11.3), juste en dessous de la région pseudo-autosomique. SRY code un facteur de transcription (boîte HMG) exprimé transitoirement, vers la <strong>6<sup>e</sup>-7<sup>e</sup> semaine</strong>, dans les <strong>cellules de soutien</strong> de la gonade (futures cellules de Sertoli). Il active, avec SF1, le gène <strong>SOX9</strong> (chromosome 17), véritable effecteur de la différenciation testiculaire : SOX9 induit la différenciation des <strong>cellules de Sertoli</strong>, qui organisent ensuite tout le testicule, et active FGF9 (boucle d'amplification, répression de la voie ovarienne Wnt4/RSPO1) et l'<strong>AMH</strong>. Chez la femme, en l'absence de SRY, la voie <strong>RSPO1/WNT4/bêta-caténine</strong> et <strong>FOXL2</strong> répriment SOX9 et orientent la gonade vers l'ovaire : la différenciation ovarienne n'est donc pas purement « passive » (par défaut), même si elle ne nécessite pas de signal de type SRY.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> les anomalies de SRY illustrent son rôle : un homme <strong>46,XX</strong> (1/20 000) résulte le plus souvent d'une translocation de SRY sur un X lors de la méiose paternelle ; une femme <strong>46,XY</strong> avec dysgénésie gonadique pure (syndrome de Swyer) résulte d'une mutation ou délétion de SRY (ou d'autres gènes de la cascade : SOX9, SF1, WT1, DHH). Une duplication de SOX9 chez un 46,XX donne un testicule ; une mutation de SOX9 donne une dysplasie campomélique avec inversion sexuelle chez les XY.</div>
<h4>La différenciation du testicule (7<sup>e</sup> à 8<sup>e</sup> semaine)</h4>
<ul>
<li>Les <strong>cordons sexuels primitifs</strong> prolifèrent en profondeur, dans la <strong>médullaire</strong>, et deviennent les <strong>cordons testiculaires</strong> (cordons séminifères), pleins, en forme de fer à cheval, constitués de cellules de Sertoli entourant les cellules germinales (<strong>prospermatogonies</strong>, qui s'arrêtent de se diviser et restent quiescentes jusqu'à la puberté, sans entrer en méiose : rôle inhibiteur des cellules de Sertoli). Ils se continuent vers le hile par les cordons du <strong>rete testis</strong>, qui se connectent aux tubules mésonéphriques persistants (futurs <strong>canaux efférents</strong>) et au canal de Wolff.</li>
<li>Les cordons se séparent de l'épithélium de surface par une couche conjonctive dense, l'<strong>albuginée</strong> (caractéristique précoce du testicule, dès la 7<sup>e</sup> semaine) ; le cortex régresse.</li>
<li>Les <strong>cellules de Leydig</strong> se différencient dans le mésenchyme interstitiel à la <strong>8<sup>e</sup> semaine</strong> et sécrètent la <strong>testostérone</strong> (stimulées par l'<strong>hCG</strong> placentaire, puis par la LH fœtale au 2<sup>e</sup> trimestre), avec un pic entre la 12<sup>e</sup> et la 18<sup>e</sup> semaine ; elles sécrètent aussi l'<strong>INSL3</strong> (descente testiculaire).</li>
<li>Les cellules de <strong>Sertoli</strong> sécrètent l'<strong>AMH</strong> (hormone antimüllérienne, glycoprotéine de la famille du TGF-bêta) dès la 7<sup>e</sup>-8<sup>e</sup> semaine, et l'inhibine.</li>
<li>Les cordons restent <strong>pleins</strong> jusqu'à la puberté, où ils se creusent d'une lumière et deviennent les <strong>tubes séminifères</strong>.</li>
</ul>
<h4>Les trois hormones de la masculinisation</h4>
<table>
<thead><tr><th>Hormone</th><th>Origine</th><th>Cible</th><th>Effet</th></tr></thead>
<tbody>
<tr><td><strong>AMH</strong></td><td>Cellules de Sertoli (dès la 7<sup>e</sup>-8<sup>e</sup> semaine)</td><td>Canaux de Müller (récepteur AMHR2 sur le mésenchyme)</td><td><strong>Régression</strong> des canaux de Müller (8<sup>e</sup>-10<sup>e</sup> semaine) : pas d'utérus, de trompes ni de partie supérieure du vagin ; action locale (paracrine), unilatérale</td></tr>
<tr><td><strong>Testostérone</strong></td><td>Cellules de Leydig (dès la 8<sup>e</sup> semaine), sous hCG puis LH</td><td>Canaux de Wolff (récepteur des androgènes)</td><td><strong>Maintien et différenciation</strong> des canaux de Wolff en épididyme, canal déférent, vésicule séminale, canal éjaculateur (action locale, forte concentration par diffusion directe depuis le testicule du même côté)</td></tr>
<tr><td><strong>Dihydrotestostérone (DHT)</strong></td><td>Conversion de la testostérone par la <strong>5-alpha-réductase de type 2</strong> dans les tissus cibles</td><td>Sinus urogénital et organes génitaux externes</td><td><strong>Prostate</strong>, glandes bulbo-urétrales, <strong>urètre pénien</strong>, <strong>pénis</strong>, <strong>scrotum</strong> (masculinisation des organes génitaux externes, 9<sup>e</sup>-12<sup>e</sup> semaine)</td></tr>
<tr><td><strong>INSL3</strong> (insulin-like 3)</td><td>Cellules de Leydig</td><td>Gubernaculum</td><td>Phase trans-abdominale de la descente testiculaire</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> l'AMH et la testostérone agissent <strong>localement</strong>, du côté du testicule qui les produit : un testicule unilatéral donne des voies masculines de son côté et des voies féminines de l'autre (ovotestis, dysgénésie asymétrique). La <strong>DHT</strong>, et non la testostérone, est responsable de la masculinisation des organes génitaux <strong>externes</strong> et de la prostate : un déficit en 5-alpha-réductase donne des voies génitales internes masculines normales avec des organes externes féminins ou ambigus.</div>`
            },
            {
              titre: "La différenciation de l'ovaire",
              contenu: `<p>En l'absence de SRY (et grâce à l'expression de <strong>RSPO1</strong>, <strong>WNT4</strong>, <strong>FOXL2</strong> et à la présence de deux chromosomes X), la gonade se différencie en <strong>ovaire</strong>, plus tardivement que le testicule : les premiers signes histologiques apparaissent vers la <strong>8<sup>e</sup>-10<sup>e</sup> semaine</strong>, et la différenciation n'est nette qu'au <strong>3<sup>e</sup>-4<sup>e</sup> mois</strong>.</p>
<ul>
<li>Les <strong>cordons sexuels primitifs</strong> (médullaires) <strong>dégénèrent</strong> et sont remplacés par un stroma vasculaire : la médullaire ovarienne.</li>
<li>L'épithélium de surface continue de proliférer et émet une <strong>seconde génération de cordons</strong>, les <strong>cordons corticaux</strong> (cordons de Valentin-Pflüger, 7<sup>e</sup> semaine), qui restent superficiels, dans le <strong>cortex</strong>, et incorporent les cellules germinales : la gonade féminine se développe donc dans le <strong>cortex</strong>, la masculine dans la <strong>médullaire</strong>.</li>
<li>Les cellules germinales, devenues <strong>ovogonies</strong>, se multiplient intensément par mitoses (maximum de 7 millions au 5<sup>e</sup> mois), puis entrent en <strong>méiose</strong> à partir du <strong>3<sup>e</sup> mois</strong> (induite par l'<strong>acide rétinoïque</strong> d'origine mésonéphrique, via STRA8 ; dans le testicule, l'enzyme CYP26B1 des cellules de Sertoli dégrade l'acide rétinoïque et empêche l'entrée en méiose) et se bloquent en diplotène (ovocytes I).</li>
<li>Vers le <strong>4<sup>e</sup> mois</strong>, les cordons corticaux se fragmentent en amas isolés : chaque ovocyte I s'entoure d'une couche de cellules folliculaires aplaties dérivées des cordons (<strong>cellules de la granulosa</strong>, homologues des cellules de Sertoli) : ce sont les <strong>follicules primordiaux</strong>, tous constitués avant la naissance (au 7<sup>e</sup> mois). Les cellules de la <strong>thèque</strong> (homologues des cellules de Leydig) dérivent du mésenchyme.</li>
<li>Il n'y a <strong>pas d'albuginée</strong> épaisse précoce ; l'épithélium de surface persiste comme épithélium ovarien.</li>
<li>L'ovaire fœtal <strong>ne sécrète pas</strong> d'hormones en quantité significative : la différenciation féminine se fait en l'absence d'AMH et de testostérone et ne nécessite pas les œstrogènes (une femme 45,X sans ovaires a des voies génitales féminines normales mais infantiles).</li>
</ul>
<table>
<thead><tr><th>Caractère</th><th>Testicule</th><th>Ovaire</th></tr></thead>
<tbody>
<tr><td>Signal déclencheur</td><td>SRY -> SOX9 (7<sup>e</sup> semaine)</td><td>Absence de SRY ; RSPO1, WNT4, FOXL2 (8<sup>e</sup>-10<sup>e</sup> semaine)</td></tr>
<tr><td>Zone de développement</td><td>Médullaire (cordons sexuels primitifs)</td><td>Cortex (cordons corticaux, seconde génération)</td></tr>
<tr><td>Cellules germinales</td><td>Prospermatogonies quiescentes, pas de méiose avant la puberté (CYP26B1)</td><td>Ovogonies en mitoses puis méiose dès le 3<sup>e</sup> mois (acide rétinoïque), blocage en diplotène</td></tr>
<tr><td>Cellules de soutien</td><td>Sertoli (AMH)</td><td>Granulosa (pas d'AMH fœtale significative)</td></tr>
<tr><td>Cellules stéroïdogènes</td><td>Leydig (testostérone, INSL3) actives dès la 8<sup>e</sup> semaine</td><td>Thèque, inactives pendant la vie fœtale</td></tr>
<tr><td>Albuginée</td><td>Précoce et épaisse</td><td>Absente ou tardive et mince</td></tr>
<tr><td>Rete</td><td>Rete testis fonctionnel (connexion aux canaux efférents)</td><td>Rete ovarii vestigial</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Différenciation des voies génitales : dérivés de Wolff, de Müller et du sinus urogénital",
              contenu: `<h4>Chez l'homme</h4>
<p>Sous l'effet de la <strong>testostérone</strong>, les <strong>canaux de Wolff</strong> persistent et se différencient (8<sup>e</sup>-12<sup>e</sup> semaine) : les tubules mésonéphriques voisins du testicule deviennent les <strong>canaux efférents</strong> ; la partie supérieure du canal, pelotonnée, devient l'<strong>épididyme</strong> ; la partie moyenne, entourée de muscle lisse, le <strong>canal déférent</strong> ; un bourgeon de sa partie terminale (12<sup>e</sup> semaine) donne la <strong>vésicule séminale</strong> ; le segment terminal devient le <strong>canal éjaculateur</strong>, qui s'ouvre dans l'urètre prostatique. Sous l'effet de l'<strong>AMH</strong>, les <strong>canaux de Müller</strong> régressent (8<sup>e</sup>-10<sup>e</sup> semaine), ne laissant que l'<strong>appendice du testicule</strong> (hydatide de Morgagni) et l'<strong>utricule prostatique</strong>. La <strong>prostate</strong> et les glandes bulbo-urétrales dérivent de l'<strong>entoblaste</strong> du sinus urogénital sous l'effet de la DHT.</p>
<h4>Chez la femme</h4>
<p>En l'absence de testostérone, les <strong>canaux de Wolff régressent</strong> (10<sup>e</sup> semaine), laissant des vestiges : <strong>époophore</strong>, <strong>paroophore</strong>, <strong>canal de Gartner</strong> (le long de l'utérus et du vagin, source de kystes). En l'absence d'AMH, les <strong>canaux de Müller</strong> se développent :</p>
<ul>
<li>la <strong>partie crâniale</strong>, verticale et non fusionnée, devient la <strong>trompe utérine</strong> (le pavillon correspondant à l'ouverture cœlomique initiale) ;</li>
<li>la <strong>partie caudale</strong>, horizontale puis médiane, où les deux canaux <strong>fusionnent</strong> (7<sup>e</sup>-9<sup>e</sup> semaine) en un <strong>canal utéro-vaginal</strong> : la cloison médiane disparaît (9<sup>e</sup>-12<sup>e</sup> semaine, de bas en haut), donnant une cavité unique : l'<strong>utérus</strong> (corps et col ; le myomètre et le périmètre dérivent du mésenchyme environnant) et la <strong>partie supérieure du vagin</strong> (tiers ou deux tiers supérieurs). Le rapprochement des canaux entraîne les replis péritonéaux qui deviennent les <strong>ligaments larges</strong>.</li>
</ul>
<p>Le <strong>vagin</strong> a une double origine : le canal utéro-vaginal müllérien bute sur le sinus urogénital au niveau du tubercule de Müller ; en réponse, l'<strong>entoblaste</strong> du sinus prolifère en deux <strong>bulbes sino-vaginaux</strong> qui fusionnent en une <strong>lame vaginale</strong> pleine, laquelle s'allonge (3<sup>e</sup> mois) puis se <strong>recanalise</strong> (5<sup>e</sup> mois) pour former la lumière de la <strong>partie inférieure</strong> du vagin et les culs-de-sac autour du col. L'<strong>hymen</strong>, cloison perforée entre la lumière vaginale et le vestibule, persiste jusqu'à la naissance.</p>
<table>
<thead><tr><th>Ébauche indifférenciée</th><th>Dérivés masculins</th><th>Dérivés féminins</th></tr></thead>
<tbody>
<tr><td><strong>Gonade indifférenciée</strong> : cordons sexuels</td><td>Cordons séminifères (tubes séminifères), rete testis</td><td>Follicules ovariens (granulosa), rete ovarii (vestige)</td></tr>
<tr><td>Cellules de soutien / stéroïdogènes</td><td>Cellules de Sertoli / cellules de Leydig</td><td>Cellules de la granulosa / cellules de la thèque</td></tr>
<tr><td><strong>Tubules mésonéphriques</strong></td><td>Canaux efférents ; paradidyme (vestige)</td><td>Époophore, paroophore (vestiges)</td></tr>
<tr><td><strong>Canal de Wolff</strong> (mésonéphrique)</td><td><strong>Épididyme, canal déférent, vésicule séminale, canal éjaculateur</strong> ; appendice de l'épididyme ; bourgeon urétéral (uretère, trigone)</td><td>Vestiges : canal de Gartner ; bourgeon urétéral (uretère, trigone)</td></tr>
<tr><td><strong>Canal de Müller</strong> (paramésonéphrique)</td><td>Vestiges : appendice du testicule (hydatide de Morgagni), utricule prostatique</td><td><strong>Trompes utérines, utérus, partie supérieure du vagin</strong></td></tr>
<tr><td><strong>Sinus urogénital</strong> (entoblaste)</td><td>Vessie, urètre prostatique et membraneux, <strong>prostate</strong>, glandes bulbo-urétrales (Cowper), urètre spongieux</td><td>Vessie, urètre, glandes para-urétrales (Skene), <strong>partie inférieure du vagin</strong> (lame vaginale), hymen, vestibule, glandes vestibulaires (Bartholin)</td></tr>
<tr><td><strong>Tubercule génital</strong></td><td><strong>Pénis</strong> (gland, corps caverneux, corps spongieux)</td><td><strong>Clitoris</strong> (gland, corps caverneux, bulbes vestibulaires)</td></tr>
<tr><td><strong>Replis génitaux</strong> (urogénitaux)</td><td>Fusion : <strong>urètre pénien</strong> et face ventrale du pénis (raphé pénien)</td><td>Pas de fusion : <strong>petites lèvres</strong></td></tr>
<tr><td><strong>Bourrelets génitaux</strong> (labio-scrotaux)</td><td>Fusion : <strong>scrotum</strong> (raphé scrotal)</td><td>Pas de fusion : <strong>grandes lèvres</strong></td></tr>
<tr><td><strong>Gubernaculum</strong></td><td>Ligament scrotal (gubernaculum testis)</td><td>Ligament utéro-ovarien et ligament rond de l'utérus</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> Wolff = voies masculines (épididyme, déférent, vésicule séminale, éjaculateur : « E-D-V-E ») ; Müller = voies féminines (trompes, utérus, vagin supérieur) ; le vagin inférieur et la prostate viennent du sinus urogénital (entoblaste). Homologues : pénis / clitoris, scrotum / grandes lèvres, urètre pénien / petites lèvres, prostate / glandes de Skene, Cowper / Bartholin, Sertoli / granulosa, Leydig / thèque.</div>`
            },
            {
              titre: "Organes génitaux externes et descente testiculaire",
              contenu: `<h4>Différenciation masculine (9<sup>e</sup> à 14<sup>e</sup> semaine), sous l'effet de la DHT</h4>
<ul>
<li>Le <strong>tubercule génital</strong> s'allonge rapidement en <strong>pénis</strong>, entraînant les replis génitaux : la gouttière urogénitale s'étend sur sa face ventrale.</li>
<li>Les <strong>replis génitaux</strong> <strong>fusionnent</strong> sur la ligne médiane, d'arrière en avant, au-dessus de la gouttière urogénitale, dont la lumière devient l'<strong>urètre pénien</strong> (entoblastique) ; la fusion laisse le <strong>raphé pénien</strong>. La partie distale de l'urètre (fosse naviculaire) se forme à partir d'une invagination <strong>ectoblastique</strong> du gland qui rejoint l'urètre pénien au 4<sup>e</sup> mois ; le <strong>prépuce</strong> est un repli cutané.</li>
<li>Les <strong>bourrelets génitaux</strong> fusionnent en arrière du pénis pour former le <strong>scrotum</strong> (raphé scrotal), vide jusqu'à la descente des testicules.</li>
<li>Le sexe masculin est reconnaissable à l'échographie dès 12-14 SA.</li>
</ul>
<h4>Différenciation féminine (9<sup>e</sup> à 14<sup>e</sup> semaine), en l'absence d'androgènes</h4>
<ul>
<li>Le tubercule génital s'allonge peu et s'incurve : <strong>clitoris</strong>.</li>
<li>Les replis génitaux <strong>ne fusionnent pas</strong> : <strong>petites lèvres</strong> ; la gouttière urogénitale reste ouverte : <strong>vestibule</strong>, où s'ouvrent l'urètre (en avant) et le vagin (en arrière).</li>
<li>Les bourrelets génitaux ne fusionnent pas (sauf en arrière, commissure postérieure, et en avant, mont du pubis) : <strong>grandes lèvres</strong>.</li>
</ul>
<h4>La descente testiculaire</h4>
<p>Le testicule, formé dans la région <strong>lombaire</strong> (en regard de L1-L2) sur la face médiale du mésonéphros, descend jusqu'au <strong>scrotum</strong> en deux phases, guidé par le <strong>gubernaculum testis</strong>, cordon mésenchymateux reliant son pôle inférieur à la région inguinale puis aux bourrelets scrotaux :</p>
<ol>
<li><strong>Phase trans-abdominale</strong> (10<sup>e</sup> à 15<sup>e</sup> semaine) : le testicule gagne l'<strong>orifice inguinal profond</strong>, surtout par la croissance de l'embryon et la régression du mésonéphros, sous le contrôle de l'<strong>INSL3</strong> (épaississement du gubernaculum) et de l'AMH ; le ligament suspenseur crânial régresse (sous l'effet des androgènes ; chez la femme, il persiste et maintient l'ovaire : ligament suspenseur de l'ovaire).</li>
<li><strong>Phase inguino-scrotale</strong> (<strong>26<sup>e</sup> à 35<sup>e</sup> semaine</strong>, 7<sup>e</sup> au 9<sup>e</sup> mois) : <strong>androgéno-dépendante</strong> (testostérone, DHT, via le nerf génito-fémoral et le CGRP), le testicule traverse le <strong>canal inguinal</strong> et gagne le scrotum, précédé d'une évagination du péritoine, le <strong>processus vaginal</strong> (canal péritonéo-vaginal), qui l'accompagne et dont la partie distale forme la <strong>vaginale testiculaire</strong> ; la partie proximale s'oblitère normalement avant ou peu après la naissance. La descente est achevée à la naissance chez <strong>97 %</strong> des garçons à terme (70 % des prématurés), avec un achèvement spontané dans les 3 à 6 premiers mois pour la plupart des autres.</li>
</ol>
<p>Chez la femme, l'ovaire descend aussi mais s'arrête dans le <strong>pelvis</strong> ; son gubernaculum devient le <strong>ligament utéro-ovarien</strong> et le <strong>ligament rond de l'utérus</strong> (traversant le canal inguinal jusqu'aux grandes lèvres).</p>
<h4>Anomalies de la descente</h4>
<ul>
<li><strong>Cryptorchidie</strong> (2 à 4 % des garçons à terme, 1 % à 1 an) : testicule arrêté sur son trajet normal (abdominal, inguinal), unilatéral dans 70 % des cas ; favorisée par la prématurité et le déficit en androgènes ou en INSL3 ; risques : <strong>infertilité</strong> (température abdominale), <strong>cancer du testicule</strong> (risque multiplié par 5 à 10), torsion ; orchidopexie entre 6 et 18 mois. L'<strong>ectopie</strong> désigne un testicule hors du trajet normal (périnéal, fémoral).</li>
<li><strong>Persistance du canal péritonéo-vaginal</strong> : <strong>hernie inguinale</strong> congénitale si large, <strong>hydrocèle</strong> communicante si étroit, kyste du cordon.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la phase <strong>trans-abdominale</strong> dépend de l'<strong>INSL3</strong> (et peu des androgènes), la phase <strong>inguino-scrotale</strong> dépend des <strong>androgènes</strong>. Le testicule traverse le canal inguinal au <strong>7<sup>e</sup> mois</strong>, ce qui explique la fréquence de la cryptorchidie chez le prématuré. Le ligament rond de l'utérus est l'homologue du gubernaculum testis.</div>`
            },
            {
              titre: "Anomalies de la différenciation sexuelle",
              contenu: `<p>Les <strong>anomalies (variations) du développement sexuel</strong> (DSD) sont des discordances entre le sexe chromosomique, gonadique et phénotypique. Elles se révèlent par des organes génitaux externes ambigus à la naissance (1/4 500), par une discordance entre caryotype prénatal et phénotype, ou plus tard (aménorrhée primaire, infertilité). La classification de Chicago (2006) distingue trois groupes selon le caryotype.</p>
<table>
<thead><tr><th>Groupe</th><th>Entité</th><th>Mécanisme</th><th>Phénotype</th></tr></thead>
<tbody>
<tr><td rowspan="2"><strong>DSD par anomalie des chromosomes sexuels</strong></td><td><strong>Syndrome de Turner</strong> (45,X ; 1/2 500 filles)</td><td>Monosomie X ; dysgénésie gonadique (bandelettes fibreuses par dégénérescence accélérée des ovocytes)</td><td>Phénotype féminin, petite taille, pterygium colli, coarctation aortique, rein en fer à cheval ; <strong>aménorrhée primaire</strong>, impubérisme, infertilité</td></tr>
<tr><td><strong>Syndrome de Klinefelter</strong> (47,XXY ; 1/600 garçons)</td><td>Non-disjonction ; testicules petits, hyalinisation des tubes</td><td>Phénotype masculin, grande taille, gynécomastie, <strong>azoospermie</strong>, hypogonadisme hypergonadotrope</td></tr>
<tr><td rowspan="3"><strong>DSD 46,XY</strong> (sous-virilisation)</td><td><strong>Dysgénésie gonadique pure</strong> (syndrome de Swyer)</td><td>Mutation de SRY, SOX9, SF1, WT1 : bandelettes fibreuses, ni AMH ni testostérone</td><td>Phénotype <strong>féminin</strong> avec utérus et trompes (pas d'AMH), aménorrhée primaire, risque de gonadoblastome</td></tr>
<tr><td><strong>Insensibilité complète aux androgènes</strong> (syndrome de Morris, 1/20 000 à 1/60 000)</td><td>Mutation du <strong>récepteur des androgènes</strong> (gène AR, lié à l'X) ; testicules normaux sécrétant testostérone et AMH</td><td>Phénotype féminin, <strong>absence d'utérus et de trompes</strong> (AMH active), vagin borgne, <strong>pas de pilosité</strong>, testicules intra-abdominaux ou inguinaux (hernie bilatérale chez une fille), aménorrhée primaire</td></tr>
<tr><td><strong>Déficit en 5-alpha-réductase de type 2</strong></td><td>Pas de conversion de la testostérone en DHT</td><td>Voies génitales internes masculines normales (Wolff), organes génitaux externes féminins ou ambigus, pas de prostate ; <strong>virilisation à la puberté</strong></td></tr>
<tr><td><strong>DSD 46,XX</strong> (virilisation)</td><td><strong>Hyperplasie congénitale des surrénales</strong> (déficit en <strong>21-hydroxylase</strong> dans 95 % ; 1/15 000 ; autosomique récessif)</td><td>Bloc de la synthèse du cortisol : hypersécrétion d'ACTH, précurseurs (17-OH-progestérone) déviés vers les <strong>androgènes surrénaliens</strong> dès la vie fœtale</td><td>Fille avec <strong>ovaires, utérus et trompes normaux</strong>, mais organes génitaux externes <strong>virilisés</strong> (hypertrophie clitoridienne, fusion des bourrelets : stades de Prader) ; <strong>syndrome de perte de sel</strong> néonatal ; <strong>cause la plus fréquente d'ambiguïté sexuelle</strong> ; dépistage néonatal (17-OHP à J3) ; hydrocortisone et fludrocortisone</td></tr>
</tbody>
</table>
<h4>Les malformations isolées</h4>
<ul>
<li><strong>Hypospadias</strong> (1/250 à 1/300 garçons) : <strong>défaut de fusion des replis génitaux</strong>, l'urètre s'ouvrant sur la face <strong>ventrale</strong> du pénis (balanique 70 %, pénien, scrotal, périnéal) ; les formes postérieures imposent un bilan de DSD. <strong>Épispadias</strong> : urètre ouvert sur la face <strong>dorsale</strong>, associé à l'exstrophie vésicale.</li>
<li><strong>Malformations utérines</strong> (1 à 5 % des femmes) par défaut de fusion ou de résorption des canaux de Müller : <strong>utérus didelphe</strong> (absence de fusion), <strong>bicorne</strong> (fusion partielle), <strong>cloisonné</strong> (défaut de résorption, le plus fréquent : fausses couches), <strong>unicorne</strong> (souvent avec agénésie rénale homolatérale), utérus en T (DES), <strong>agénésie utéro-vaginale</strong> (syndrome de <strong>Mayer-Rokitansky-Küster-Hauser</strong>, 1/4 500 : aménorrhée primaire avec ovaires normaux et caryotype 46,XX), <strong>imperforation de l'hymen</strong> (hématocolpos pubertaire).</li>
<li><strong>Kystes</strong> des vestiges : canal de Gartner (paroi vaginale), hydatide de Morgagni, époophore.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> devant une <strong>ambiguïté sexuelle néonatale</strong>, il faut éliminer en urgence l'<strong>hyperplasie congénitale des surrénales</strong> (risque de perte de sel : ionogramme, 17-OH-progestérone), réaliser un caryotype (FISH SRY) et une échographie pelvienne (présence d'un utérus : donc pas d'AMH active, donc pas de testicule fonctionnel), doser testostérone, AMH, LH, FSH, et ne déclarer le sexe qu'après concertation pluridisciplinaire. Une fille avec une <strong>hernie inguinale bilatérale</strong> ou une aménorrhée primaire sans utérus doit faire évoquer une insensibilité aux androgènes (caryotype 46,XY).</div>`
            }
          ],
          points_cles: [
            "Sexe génétique à la fécondation (spermatozoïde X ou Y), sexe gonadique à la 7e semaine (SRY), sexe phénotypique de la 8e à la 12e-14e semaine (hormones) ; stade indifférencié jusqu'à la 7e semaine avec coexistence des canaux de Wolff et de Müller.",
            "Les cellules germinales primordiales naissent dans la paroi de la vésicule vitelline (3e semaine) et migrent le long du mésentère dorsal vers les crêtes génitales (4e-6e semaine) ; sans elles, la gonade reste une bandelette.",
            "SRY (bras court de l'Y), exprimé à la 7e semaine dans les cellules de soutien, active SOX9 et la différenciation des cellules de Sertoli ; le testicule se développe dans la médullaire (cordons séminifères pleins, albuginée précoce) ; l'ovaire (RSPO1, WNT4, FOXL2) se développe dans le cortex (cordons corticaux, follicules primordiaux au 4e mois), plus tardivement.",
            "AMH (Sertoli, dès la 7e-8e semaine) : régression des canaux de Müller ; testostérone (Leydig, dès la 8e semaine, sous hCG) : différenciation des canaux de Wolff en épididyme, déférent, vésicule séminale, canal éjaculateur ; DHT (5-alpha-réductase) : prostate, urètre pénien, pénis, scrotum ; actions locales.",
            "Chez la femme, sans AMH ni testostérone : Müller donne trompes, utérus et vagin supérieur ; Wolff régresse (époophore, paroophore, canal de Gartner) ; le vagin inférieur dérive de la lame vaginale (sinus urogénital, entoblaste) ; les œstrogènes ne sont pas nécessaires.",
            "Homologues : pénis / clitoris (tubercule génital), urètre pénien / petites lèvres (replis génitaux), scrotum / grandes lèvres (bourrelets génitaux), prostate / glandes de Skene, Cowper / Bartholin, Sertoli / granulosa, Leydig / thèque, gubernaculum testis / ligaments utéro-ovarien et rond.",
            "Descente testiculaire : phase trans-abdominale (10e-15e semaine, INSL3) jusqu'à l'orifice inguinal profond, phase inguino-scrotale (26e-35e semaine, androgènes) avec le processus vaginal ; achevée chez 97 % des garçons à terme ; cryptorchidie (2-4 %) : infertilité et cancer ; persistance du canal péritonéo-vaginal : hernie, hydrocèle.",
            "DSD chromosomiques : Turner (45,X, bandelettes, aménorrhée primaire), Klinefelter (47,XXY, azoospermie) ; DSD 46,XY : Swyer (SRY), insensibilité aux androgènes (phénotype féminin sans utérus, testicules, pas de pilosité), déficit en 5-alpha-réductase (virilisation pubertaire) ; DSD 46,XX : hyperplasie congénitale des surrénales (21-hydroxylase, virilisation, perte de sel, cause la plus fréquente d'ambiguïté).",
            "Malformations isolées : hypospadias (défaut de fusion des replis génitaux, urètre ventral), épispadias, malformations utérines par défaut de fusion ou de résorption des canaux de Müller (cloisonné, bicorne, didelphe, unicorne), agénésie utéro-vaginale (Rokitansky), imperforation de l'hymen."
          ],
          lexique: [
            { terme: "Cellules germinales primordiales", def: "Précurseurs des gamètes apparaissant dans la paroi de la vésicule vitelline à la 3e semaine et migrant vers les crêtes génitales entre la 4e et la 6e semaine." },
            { terme: "Crête génitale", def: "Épaississement de l'épithélium cœlomique et du mésenchyme sur la face médiale du mésonéphros (5e semaine), ébauche de la gonade indifférenciée." },
            { terme: "SRY", def: "Gène du bras court du chromosome Y codant un facteur de transcription qui déclenche, via SOX9, la différenciation testiculaire à la 7e semaine." },
            { terme: "Canal de Müller", def: "Canal paramésonéphrique formé par invagination de l'épithélium cœlomique (6e semaine), à l'origine des trompes, de l'utérus et du vagin supérieur ; régresse sous l'effet de l'AMH chez l'homme." },
            { terme: "AMH", def: "Hormone antimüllérienne, glycoprotéine sécrétée par les cellules de Sertoli dès la 7e-8e semaine, provoquant la régression des canaux de Müller." },
            { terme: "Dihydrotestostérone", def: "Androgène issu de la testostérone par la 5-alpha-réductase, responsable de la masculinisation des organes génitaux externes, de l'urètre pénien et de la prostate." },
            { terme: "Lame vaginale", def: "Prolifération entoblastique du sinus urogénital (bulbes sino-vaginaux) qui se recanalise au 5e mois pour former la partie inférieure du vagin." },
            { terme: "Gubernaculum", def: "Cordon mésenchymateux reliant la gonade à la région inguinale, guidant la descente testiculaire ; devient les ligaments utéro-ovarien et rond chez la femme." },
            { terme: "Cryptorchidie", def: "Absence de descente complète du testicule, arrêté sur son trajet normal (2 à 4 % des garçons à terme), exposant à l'infertilité et au cancer." },
            { terme: "Hyperplasie congénitale des surrénales", def: "Déficit enzymatique (21-hydroxylase le plus souvent) de la synthèse du cortisol entraînant une hyperproduction d'androgènes surrénaliens virilisant le fœtus féminin ; cause la plus fréquente d'ambiguïté sexuelle." },
            { terme: "Insensibilité aux androgènes", def: "Mutation du récepteur des androgènes (liée à l'X) chez un sujet 46,XY : phénotype féminin avec testicules, absence d'utérus (AMH active) et de pilosité." }
          ],
          qcm: [
            {
              q: "Concernant le stade indifférencié de l'appareil génital :",
              options: [
                "A. Les cellules germinales primordiales apparaissent dans la crête génitale.",
                "B. La gonade indifférenciée est identique dans les deux sexes jusqu'à la 7e semaine.",
                "C. Les canaux de Müller dérivent d'une invagination de l'épithélium cœlomique.",
                "D. Les canaux de Wolff et de Müller coexistent chez l'embryon des deux sexes.",
                "E. Les canaux de Wolff sont les anciens canaux collecteurs du mésonéphros."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : les cellules germinales primordiales apparaissent dans la paroi de la vésicule vitelline et migrent secondairement vers les crêtes génitales. B, C, D et E sont vraies."
            },
            {
              q: "Concernant la détermination testiculaire :",
              options: [
                "A. Le gène SRY est situé sur le bras long du chromosome Y.",
                "B. SRY active l'expression de SOX9 dans les cellules de soutien de la gonade.",
                "C. Les cellules de Sertoli dérivent de l'épithélium cœlomique.",
                "D. Le testicule se développe à partir des cordons de la médullaire.",
                "E. Les cellules de Leydig sécrètent de la testostérone dès la 8e semaine sous l'effet de l'hCG."
              ],
              bonnes: [1, 2, 3, 4],
              explication: "A est fausse : SRY est sur le bras court de l'Y (Yp). B, C, D et E sont vraies."
            },
            {
              q: "Concernant les hormones de la différenciation sexuelle :",
              options: [
                "A. L'AMH est sécrétée par les cellules de Leydig.",
                "B. L'AMH provoque la régression des canaux de Müller.",
                "C. La testostérone est responsable de la différenciation des canaux de Wolff.",
                "D. La DHT est responsable de la masculinisation des organes génitaux externes.",
                "E. Les œstrogènes ovariens sont indispensables à la formation de l'utérus."
              ],
              bonnes: [1, 2, 3],
              explication: "A est fausse : l'AMH est sécrétée par les cellules de Sertoli. B, C et D sont vraies. E est fausse : la différenciation féminine des voies génitales ne nécessite pas d'hormone ovarienne (une femme 45,X a un utérus normal)."
            },
            {
              q: "Concernant les dérivés des canaux génitaux :",
              options: [
                "A. L'épididyme et le canal déférent dérivent du canal de Wolff.",
                "B. La vésicule séminale dérive du canal de Müller.",
                "C. Les trompes utérines dérivent des canaux de Müller.",
                "D. La partie inférieure du vagin dérive du sinus urogénital.",
                "E. La prostate dérive du canal de Wolff."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : la vésicule séminale est un bourgeon du canal de Wolff. E est fausse : la prostate dérive de l'entoblaste de l'urètre prostatique (sinus urogénital)."
            },
            {
              q: "Concernant les organes génitaux externes et la descente testiculaire :",
              options: [
                "A. Le scrotum et les grandes lèvres sont homologues (bourrelets génitaux).",
                "B. L'hypospadias résulte d'un défaut de fusion des replis génitaux.",
                "C. La phase inguino-scrotale de la descente testiculaire a lieu entre la 26e et la 35e semaine.",
                "D. La phase trans-abdominale de la descente dépend principalement de la DHT.",
                "E. La cryptorchidie augmente le risque de cancer du testicule."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la phase trans-abdominale dépend de l'INSL3 ; c'est la phase inguino-scrotale qui est androgéno-dépendante."
            },
            {
              q: "Concernant les anomalies de la différenciation sexuelle :",
              options: [
                "A. Dans l'insensibilité complète aux androgènes, le sujet 46,XY a un phénotype féminin sans utérus.",
                "B. L'hyperplasie congénitale des surrénales par déficit en 21-hydroxylase virilise le fœtus féminin.",
                "C. Dans le syndrome de Turner, les gonades sont des bandelettes fibreuses.",
                "D. Dans le déficit en 5-alpha-réductase, les canaux de Wolff ne se développent pas.",
                "E. Le syndrome de Klinefelter (47,XXY) s'accompagne d'une azoospermie."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la testostérone est normale, les canaux de Wolff se différencient normalement ; seules les structures DHT-dépendantes (organes génitaux externes, prostate) sont atteintes."
            },
            {
              q: "Concernant les malformations utérines et vaginales :",
              options: [
                "A. L'utérus cloisonné résulte d'un défaut de résorption de la cloison entre les deux canaux de Müller.",
                "B. L'utérus didelphe résulte d'une absence de fusion des canaux de Müller.",
                "C. L'utérus unicorne peut s'associer à une agénésie rénale homolatérale.",
                "D. Le syndrome de Mayer-Rokitansky-Küster-Hauser associe agénésie utéro-vaginale et caryotype 46,XY.",
                "E. Le kyste du canal de Gartner est un vestige du canal de Wolff."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : le syndrome de Rokitansky survient chez des femmes 46,XX avec ovaires normaux."
            }
          ]
        },
        {
          id: "systeme-nerveux",
          titre: "Développement du système nerveux",
          duree: 45,
          objectifs: [
            "Décrire les vésicules cérébrales primaires et secondaires et leurs dérivés (structures et cavités).",
            "Expliquer l'histogenèse du tube neural : zones ventriculaire, intermédiaire et marginale, lames alaires et fondamentales, cellules gliales.",
            "Décrire le développement de la moelle épinière et l'ascension apparente de la moelle.",
            "Décrire les grandes lignes du développement de l'encéphale (cervelet, cortex, ventricules) et de l'hypophyse.",
            "Connaître les anomalies de fermeture du tube neural et leur prévention par l'acide folique, ainsi que les principales malformations cérébrales."
          ],
          sections: [
            {
              titre: "Du tube neural aux vésicules cérébrales",
              contenu: `<p>Le <strong>système nerveux central</strong> dérive du <strong>tube neural</strong> (neuroectoblaste), fermé à la fin de la 4<sup>e</sup> semaine ; le <strong>système nerveux périphérique</strong> dérive principalement des <strong>crêtes neurales</strong> (ganglions, nerfs périphériques, cellules de Schwann) et des <strong>placodes</strong> ectoblastiques (ganglions de certains nerfs crâniens). Dès la fermeture, la partie céphalique du tube neural, élargie, se segmente en <strong>trois vésicules cérébrales primaires</strong> (fin de la 4<sup>e</sup> semaine), tandis que la partie caudale, étroite, forme la <strong>moelle épinière</strong>. À la 5<sup>e</sup> semaine, deux de ces vésicules se subdivisent, donnant <strong>cinq vésicules secondaires</strong> :</p>
<table>
<thead><tr><th>Vésicule primaire</th><th>Vésicule secondaire</th><th>Dérivés (parois)</th><th>Cavité (dérivé du canal neural)</th></tr></thead>
<tbody>
<tr><td rowspan="2"><strong>Prosencéphale</strong> (cerveau antérieur)</td><td><strong>Télencéphale</strong></td><td><strong>Hémisphères cérébraux</strong> (cortex, substance blanche), <strong>noyaux gris centraux</strong> (striatum : noyau caudé et putamen ; pallidum d'origine diencéphalique selon les auteurs), hippocampe, bulbes olfactifs, corps calleux et commissures</td><td><strong>Ventricules latéraux</strong> (et partie antérieure du 3<sup>e</sup> ventricule)</td></tr>
<tr><td><strong>Diencéphale</strong></td><td><strong>Thalamus</strong>, <strong>hypothalamus</strong>, épithalamus (<strong>épiphyse</strong>, habénula), sous-thalamus, <strong>neurohypophyse</strong> (infundibulum), <strong>rétine et nerf optique</strong> (vésicules optiques), corps mamillaires</td><td><strong>3<sup>e</sup> ventricule</strong></td></tr>
<tr><td><strong>Mésencéphale</strong> (cerveau moyen)</td><td><strong>Mésencéphale</strong> (non subdivisé)</td><td><strong>Tectum</strong> (colliculi supérieurs et inférieurs), <strong>tegmentum</strong> (noyaux rouges, substance noire, noyaux des nerfs III et IV), pédoncules cérébraux</td><td><strong>Aqueduc du mésencéphale</strong> (de Sylvius)</td></tr>
<tr><td rowspan="2"><strong>Rhombencéphale</strong> (cerveau postérieur)</td><td><strong>Métencéphale</strong></td><td><strong>Pont</strong> (protubérance) et <strong>cervelet</strong></td><td>Partie supérieure du <strong>4<sup>e</sup> ventricule</strong></td></tr>
<tr><td><strong>Myélencéphale</strong></td><td><strong>Moelle allongée</strong> (bulbe rachidien)</td><td>Partie inférieure du 4<sup>e</sup> ventricule, se continuant par le canal de l'épendyme</td></tr>
<tr><td>Tube neural caudal</td><td>—</td><td><strong>Moelle épinière</strong></td><td><strong>Canal central</strong> (épendymaire)</td></tr>
</tbody>
</table>
<p>Le tube neural se courbe en même temps qu'il se segmente : la <strong>courbure céphalique</strong> (mésencéphalique, J25, convexe vers le dos, au niveau du mésencéphale), la <strong>courbure cervicale</strong> (à la jonction rhombencéphale-moelle, concavité ventrale) et la <strong>courbure pontique</strong> (5<sup>e</sup> semaine, convexe vers l'avant, entre métencéphale et myélencéphale) qui ouvre le 4<sup>e</sup> ventricule en losange et rabat ses parois latérales (lames alaires) vers l'extérieur, de sorte que dans le bulbe et le pont les noyaux sensitifs deviennent <strong>latéraux</strong> et les noyaux moteurs <strong>médiaux</strong>. Le rhombencéphale est transitoirement segmenté en <strong>8 rhombomères</strong> (expression des gènes <strong>Hox</strong>), qui préfigurent l'origine des nerfs crâniens et des courants de crêtes neurales vers les arcs pharyngiens. Le toit du 4<sup>e</sup> ventricule reste mince (lame épithéliale) et forme avec la pie-mère vascularisée les <strong>plexus choroïdes</strong>, de même que la paroi médiale des ventricules latéraux et le toit du 3<sup>e</sup> ventricule.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 3 vésicules à la 4<sup>e</sup> semaine, 5 à la 5<sup>e</sup> : télencéphale (hémisphères, ventricules latéraux), diencéphale (thalamus, hypothalamus, rétine, neurohypophyse, 3<sup>e</sup> ventricule), mésencéphale (aqueduc), métencéphale (pont, cervelet, 4<sup>e</sup> ventricule), myélencéphale (bulbe). La rétine est une évagination du <strong>diencéphale</strong>.</div>`
            },
            {
              titre: "Histogenèse du tube neural",
              contenu: `<p>La paroi du tube neural est initialement un <strong>neuroépithélium pseudostratifié</strong> dont les cellules, les <strong>cellules neuroépithéliales</strong> (cellules souches neurales), s'étendent de la lumière (surface ventriculaire) à la surface externe (lame basale). Elles se divisent intensément près de la lumière (mitoses « interkinétiques » avec migration du noyau) : c'est la <strong>zone ventriculaire</strong> (zone germinative). À partir de la 5<sup>e</sup> semaine, les cellules filles cessent de se diviser et migrent vers la périphérie pour se différencier : la paroi s'organise en <strong>trois zones</strong> concentriques :</p>
<ol>
<li>la <strong>zone ventriculaire</strong> (épendymaire), interne, germinative, qui persiste chez l'adulte sous forme de l'<strong>épendyme</strong> (épithélium cubique cilié bordant les cavités) ;</li>
<li>la <strong>zone intermédiaire</strong> (du manteau), où s'accumulent les corps cellulaires des neurones : elle devient la <strong>substance grise</strong> ;</li>
<li>la <strong>zone marginale</strong>, externe, contenant les prolongements axonaux (et plus tard la myéline) : elle devient la <strong>substance blanche</strong>.</li>
</ol>
<p>Cette disposition (gris dedans, blanc dehors) persiste dans la <strong>moelle</strong> et le tronc cérébral ; dans le <strong>cortex</strong> cérébral et cérébelleux, elle est inversée par une <strong>migration secondaire</strong> des neurones à travers la zone marginale, le long des <strong>cellules gliales radiaires</strong>, pour former la plaque corticale en surface (gris dehors, blanc dedans).</p>
<h4>Les lignées cellulaires</h4>
<ul>
<li>Les cellules neuroépithéliales donnent d'abord les <strong>neuroblastes</strong> (neurogenèse, du 2<sup>e</sup> au 5<sup>e</sup> mois pour l'essentiel ; les neurones ne se divisent plus), puis les <strong>glioblastes</strong> (gliogenèse, à partir du 3<sup>e</sup>-4<sup>e</sup> mois) à l'origine des <strong>astrocytes</strong> et des <strong>oligodendrocytes</strong> (myélinisation du SNC à partir du 4<sup>e</sup>-5<sup>e</sup> mois, se poursuivant après la naissance jusqu'à l'adolescence, les voies motrices pyramidales étant myélinisées au cours de la première année), et enfin les <strong>cellules épendymaires</strong>. Les <strong>cellules gliales radiaires</strong> guident la migration neuronale puis se transforment en astrocytes.</li>
<li>La <strong>microglie</strong> ne dérive pas du neuroectoblaste : ce sont des macrophages d'origine <strong>mésodermique</strong> (vitelline, monocytaire) qui colonisent le tube neural avec les vaisseaux.</li>
<li>Les <strong>cellules de Schwann</strong> et les cellules satellites des ganglions dérivent des <strong>crêtes neurales</strong>.</li>
<li>Les <strong>méninges</strong> : la dure-mère dérive du mésoblaste ; les leptoméninges (arachnoïde, pie-mère) du mésoblaste pour la moelle et le tronc, et des crêtes neurales pour le prosencéphale.</li>
</ul>
<h4>Lames alaires et lames fondamentales</h4>
<p>Dans la moelle et le tronc cérébral, la prolifération de la zone intermédiaire forme de chaque côté deux épaississements longitudinaux séparés par le <strong>sillon limitant</strong> : la <strong>lame alaire</strong> (dorsale, <strong>sensitive</strong>, recevant les afférences des ganglions rachidiens) et la <strong>lame fondamentale</strong> (ventrale, <strong>motrice</strong>, contenant les motoneurones). Entre les deux, dans la région thoraco-lombaire, se trouvent les neurones <strong>végétatifs</strong> (colonne intermédio-latérale). Le toit (<strong>plaque du toit</strong>) et le plancher (<strong>plaque du plancher</strong>, induite par SHH de la notochorde) restent minces et dépourvus de neurones ; la plaque du plancher sécrète elle-même SHH, qui spécifie les types neuronaux ventraux (motoneurones, interneurones) selon un gradient, tandis que les BMP du toit spécifient les types dorsaux. Les axones des motoneurones sortent par les <strong>racines ventrales</strong> ; les neurones des ganglions rachidiens (crêtes neurales) envoient leur prolongement central dans la lame alaire par les <strong>racines dorsales</strong>.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la <strong>microglie</strong> est d'origine mésodermique (non neuroectoblastique) ; les <strong>ganglions rachidiens</strong> et les <strong>cellules de Schwann</strong> viennent des crêtes neurales ; les <strong>motoneurones</strong> sont les seuls neurones du SNC dont l'axone sort du système nerveux central. La lame alaire est <strong>dorsale</strong> et sensitive, la lame fondamentale <strong>ventrale</strong> et motrice.</div>`
            },
            {
              titre: "La moelle épinière",
              contenu: `<p>La moelle dérive de la partie caudale du tube neural (en arrière du 4<sup>e</sup> somite). Son organisation suit le plan histogénétique général : la lame alaire donne la <strong>corne dorsale</strong> (sensitive), la lame fondamentale la <strong>corne ventrale</strong> (motrice), et la zone intermédio-latérale la <strong>corne latérale</strong> (sympathique, T1-L2) ; la zone marginale forme les <strong>cordons</strong> de substance blanche (dorsal, latéral, ventral) où montent et descendent les axones, myélinisés à partir du 4<sup>e</sup> mois. Le canal neural se réduit au <strong>canal central</strong> (épendymaire). Les deux moitiés sont reliées par les commissures ventrales et dorsales (plaques du plancher et du toit).</p>
<p>La partie la plus caudale de la moelle (sacro-coccygienne) se forme par <strong>neurulation secondaire</strong> : condensation puis cavitation d'un cordon de cellules mésenchymateuses de l'<strong>éminence caudale</strong> (reste de la ligne primitive), qui se raccorde au tube neural primaire ; la partie terminale régresse en <strong>filum terminale</strong>.</p>
<h4>L'ascension apparente de la moelle</h4>
<p>Jusqu'au <strong>3<sup>e</sup> mois</strong>, la moelle occupe toute la longueur du canal vertébral, et chaque nerf rachidien sort horizontalement par le foramen intervertébral correspondant à son segment. Ensuite, la <strong>colonne vertébrale</strong> et la dure-mère <strong>croissent plus vite</strong> que la moelle : l'extrémité caudale de la moelle (<strong>cône médullaire</strong>) « remonte » relativement : elle est en regard de <strong>S1</strong> au 5<sup>e</sup> mois, de <strong>L3</strong> à la naissance et de <strong>L1-L2</strong> chez l'adulte (acquis vers 2 ans). Conséquences :</p>
<ul>
<li>les <strong>racines</strong> lombaires et sacrées s'allongent et descendent obliquement dans le canal pour rejoindre leurs foramens : c'est la <strong>queue de cheval</strong> ;</li>
<li>le <strong>filum terminale</strong> (reliquat pial de la moelle régressée) relie le cône au coccyx ;</li>
<li>le <strong>sac dural</strong> descend jusqu'à <strong>S2</strong>, créant sous le cône un espace sous-arachnoïdien rempli de liquide cérébro-spinal sans moelle : la <strong>citerne lombaire</strong>, où l'on pratique la <strong>ponction lombaire</strong> (entre L3-L4 ou L4-L5 chez l'adulte, plus bas chez le nourrisson : L4-L5 ou L5-S1) sans risque de lésion médullaire ;</li>
<li>un segment médullaire ne correspond plus à la vertèbre de même numéro (le segment médullaire T12 est en regard de la vertèbre T9-T10).</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le niveau du cône médullaire (L3 à la naissance, L1-L2 à l'âge adulte) explique pourquoi la ponction lombaire se fait au-dessous de L3 et pourquoi une anomalie de fermeture caudale (spina bifida, lipome) peut <strong>attacher</strong> la moelle (syndrome de la <strong>moelle attachée</strong>, cône bas situé), avec traction progressive lors de la croissance et déficit neurologique des membres inférieurs et de la vessie.</div>`
            },
            {
              titre: "Le développement de l'encéphale",
              contenu: `<h4>Le tronc cérébral et le cervelet</h4>
<p>Dans le <strong>myélencéphale</strong> (bulbe) et le <strong>métencéphale</strong> (pont), la courbure pontique rabat les lames alaires latéralement : les noyaux moteurs des nerfs crâniens (lames fondamentales : somatomoteurs médians XII, VI, IV, III ; branchiomoteurs V, VII, IX, X, XI ; viscéromoteurs) sont <strong>médiaux</strong> et les noyaux sensitifs (lames alaires : somatosensitifs V, VIII ; viscérosensitifs IX, X) <strong>latéraux</strong>. Les noyaux du pont et les olives bulbaires proviennent de neurones des lames alaires migrant ventralement. Le <strong>cervelet</strong> se forme à partir des parties dorsales des <strong>lames alaires du métencéphale</strong> (lèvres rhombiques), qui s'épaississent, convergent sur la ligne médiane au-dessus du 4<sup>e</sup> ventricule (plaque cérébelleuse, 6<sup>e</sup>-8<sup>e</sup> semaine) et donnent le <strong>vermis</strong> (médian) et les <strong>hémisphères</strong> cérébelleux ; une migration secondaire forme le <strong>cortex cérébelleux</strong> (cellules de Purkinje issues de la zone ventriculaire ; cellules des grains issues d'une seconde zone germinative, la <strong>couche granulaire externe</strong>, qui migrent vers l'intérieur jusqu'à 1 à 2 ans de vie) et les <strong>noyaux cérébelleux</strong> profonds. Le vermis et le lobe flocculo-nodulaire (archéocervelet, vestibulaire) sont les parties les plus anciennes.</p>
<h4>Le mésencéphale</h4>
<p>Le mésencéphale garde l'organisation tubulaire : lames alaires dorsales donnant le <strong>tectum</strong> (colliculi supérieurs visuels et inférieurs auditifs), lames fondamentales donnant les noyaux des nerfs III et IV et le <strong>noyau rouge</strong>, zone marginale ventrale épaissie par les voies descendantes (<strong>pédoncules cérébraux</strong>) ; la <strong>substance noire</strong> dérive des lames alaires migrées ; la lumière reste étroite : <strong>aqueduc</strong>.</p>
<h4>Le diencéphale</h4>
<p>Ses parois latérales s'épaississent en trois masses séparées par des sillons : l'<strong>épithalamus</strong> (dorsal, épiphyse ou glande pinéale par évagination du toit, habénula), le <strong>thalamus</strong> (le plus volumineux ; les deux thalami fusionnent souvent sur la ligne médiane : adhérence interthalamique) et l'<strong>hypothalamus</strong> (ventral, séparé du thalamus par le sillon hypothalamique, incluant les corps mamillaires et l'<strong>infundibulum</strong>, évagination du plancher qui forme la <strong>neurohypophyse</strong>). La <strong>vésicule optique</strong> (évagination latérale du diencéphale, J22-J28) donne la rétine, l'épithélium pigmentaire et le nerf optique (voir chapitre organes des sens). Le toit forme les plexus choroïdes du 3<sup>e</sup> ventricule.</p>
<h4>Le télencéphale</h4>
<p>Deux évaginations latérales, les <strong>vésicules télencéphaliques</strong> (5<sup>e</sup> semaine), croissent énormément et deviennent les <strong>hémisphères cérébraux</strong>, qui recouvrent progressivement le diencéphale (avec lequel ils fusionnent, 3<sup>e</sup> mois), le mésencéphale et le cervelet (naissance). Leur cavité forme les <strong>ventricules latéraux</strong>, communiquant avec le 3<sup>e</sup> ventricule par les <strong>foramens interventriculaires</strong> (de Monro). Dans leur plancher, une prolifération donne le <strong>striatum</strong> (corps strié : noyau caudé et putamen, séparés secondairement par les fibres de la <strong>capsule interne</strong>) et l'<strong>amygdale</strong>. La paroi mince médiale forme les plexus choroïdes et l'<strong>hippocampe</strong>. Le <strong>cortex</strong> (pallium) se forme par migrations successives de neurones le long de la glie radiaire, selon un mode « <strong>inside-out</strong> » : les premiers neurones occupent les couches profondes (VI), les suivants les traversent pour former les couches plus superficielles (jusqu'à la couche II), entre la 8<sup>e</sup> et la 20<sup>e</sup>-24<sup>e</sup> semaine ; le néocortex à six couches est reconnaissable au 6<sup>e</sup> mois. La surface des hémisphères, lisse jusqu'au 4<sup>e</sup>-5<sup>e</sup> mois (lissencéphalie physiologique), se plisse en <strong>sillons et gyri</strong> à partir du 5<sup>e</sup>-6<sup>e</sup> mois (sillon latéral, puis central, puis sillons secondaires et tertiaires jusqu'à la naissance), ce qui triple la surface corticale ; l'<strong>insula</strong>, qui croît moins vite, est recouverte par les opercules. Les <strong>commissures</strong> (commissure antérieure, fornix, <strong>corps calleux</strong>) se forment à partir de la lame terminale (paroi antérieure du télencéphale), le corps calleux entre la 10<sup>e</sup> et la 20<sup>e</sup> semaine, d'avant en arrière. Les <strong>bulbes olfactifs</strong> sont des évaginations antérieures.</p>
<h4>L'hypophyse : une double origine</h4>
<table>
<thead><tr><th>Partie</th><th>Origine</th><th>Dérivés</th></tr></thead>
<tbody>
<tr><td><strong>Adénohypophyse</strong> (antéhypophyse)</td><td><strong>Ectoblaste de surface</strong> : évagination du toit du <strong>stomodeum</strong> (bouche primitive), la <strong>poche de Rathke</strong> (3<sup>e</sup>-4<sup>e</sup> semaine), qui monte vers le diencéphale, perd sa connexion avec le pharynx (8<sup>e</sup> semaine) et s'accole à l'infundibulum</td><td>Lobe antérieur (pars distalis : cellules à GH, PRL, ACTH, TSH, LH, FSH), pars tuberalis (autour de la tige), pars intermedia (vestige de la paroi postérieure de la poche ; fente de Rathke)</td></tr>
<tr><td><strong>Neurohypophyse</strong> (posthypophyse)</td><td><strong>Neuroectoblaste</strong> : évagination du plancher du <strong>diencéphale</strong> (hypothalamus), l'<strong>infundibulum</strong></td><td>Tige pituitaire (infundibulum), lobe postérieur (pars nervosa : terminaisons axonales des neurones supra-optiques et paraventriculaires sécrétant ADH et ocytocine, pituicytes), éminence médiane</td></tr>
</tbody>
</table>
<p>Des reliquats de la poche de Rathke peuvent persister dans le pharynx (hypophyse pharyngée) ou donner un <strong>craniopharyngiome</strong> (tumeur suprasellaire de l'enfant, kystique et calcifiée). L'<strong>épiphyse</strong> dérive du toit du diencéphale (neuroectoblaste).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> cervelet = lames <strong>alaires</strong> du métencéphale ; cortex = migration inside-out le long de la glie radiaire, sillons à partir du 5<sup>e</sup>-6<sup>e</sup> mois ; corps calleux 10<sup>e</sup>-20<sup>e</sup> semaine ; adénohypophyse = <strong>ectoblaste</strong> (poche de Rathke du stomodeum), neurohypophyse = <strong>neuroectoblaste</strong> (infundibulum du diencéphale).</div>`
            },
            {
              titre: "Les anomalies de fermeture du tube neural et l'acide folique",
              contenu: `<p>Les <strong>anomalies de fermeture du tube neural</strong> (AFTN, dysraphies) sont des défauts de fusion des bourrelets neuraux survenant avant le <strong>28<sup>e</sup> jour</strong>, souvent accompagnés d'un défaut de fermeture des structures sus-jacentes (arcs vertébraux ou crâne, méninges, peau), car l'induction du mésoblaste et de l'ectoblaste par le tube neural fermé fait défaut. Leur fréquence est de <strong>1 à 2 pour 1 000</strong> naissances (variable selon les régions, en baisse avec la supplémentation et le dépistage), d'origine multifactorielle (gènes du métabolisme des folates comme <em>MTHFR</em>, carence en folates, diabète, obésité, hyperthermie, <strong>acide valproïque</strong> et carbamazépine, antifoliques).</p>
<h4>Anomalies de fermeture du neuropore antérieur (dysraphies crâniennes)</h4>
<ul>
<li><strong>Anencéphalie</strong> (1/1 000 à 1/5 000, prédominance féminine) : absence de fermeture du neuropore rostral avant J25 ; le tissu nerveux exposé au liquide amniotique dégénère : absence de voûte crânienne (acranie), des hémisphères et du diencéphale, avec persistance du tronc cérébral ; incompatible avec la vie (décès en quelques heures ou jours) ; diagnostic échographique dès 11-12 SA ; hydramnios (défaut de déglutition), AFP élevée.</li>
<li><strong>Encéphalocèle</strong> (céphalocèle) : hernie de méninges (méningocèle crânienne) ou de méninges et de tissu cérébral (encéphalocèle) par un défaut osseux, le plus souvent <strong>occipital</strong> (75 % en Europe), parfois frontal ou nasal ; associée au syndrome de Meckel-Gruber.</li>
<li><strong>Iniencéphalie</strong> : défaut occipito-cervical avec rétroflexion de la tête.</li>
</ul>
<h4>Anomalies de fermeture du neuropore postérieur (spina bifida)</h4>
<p>Le <strong>spina bifida</strong> est un défaut de fermeture des <strong>arcs vertébraux</strong> postérieurs, siégeant surtout en région <strong>lombo-sacrée</strong>, avec ou sans atteinte du tube neural (défaut de fermeture du neuropore caudal avant J27-J28, ou défaut de neurulation secondaire pour les formes basses).</p>
<table>
<thead><tr><th>Forme</th><th>Anatomie</th><th>Fréquence et conséquences</th></tr></thead>
<tbody>
<tr><td><strong>Spina bifida occulta</strong></td><td>Simple défaut de fusion des arcs vertébraux (L5-S1), moelle et méninges normales, peau intacte (parfois touffe de poils, fossette, angiome, lipome sous-cutané)</td><td>10 % de la population ; asymptomatique ; formes « fermées » plus complexes : lipomyéloméningocèle, sinus dermique, diastématomyélie, moelle attachée</td></tr>
<tr><td><strong>Méningocèle</strong></td><td>Hernie des <strong>méninges</strong> et de liquide cérébro-spinal à travers le défaut osseux, sous une peau souvent intacte ; moelle en place</td><td>10 % des spina bifida ouverts ; déficit neurologique absent ou modéré ; chirurgie</td></tr>
<tr><td><strong>Myéloméningocèle</strong></td><td>Hernie des méninges <strong>et de la moelle</strong> (ou des racines), moelle malformée (plaque neurale non fermée, placode) exposée (spina bifida aperta) ou recouverte d'une membrane</td><td>Forme la plus fréquente (80 à 90 % des spina bifida ouverts) : <strong>paraplégie</strong> flasque de niveau variable, troubles sphinctériens (vessie neurologique), pieds bots, <strong>hydrocéphalie</strong> (80 à 90 %, par malformation de <strong>Chiari II</strong> : descente du cervelet et du bulbe dans le foramen magnum), fuite de LCS, infection ; chirurgie dans les 48 heures ou chirurgie fœtale (avant 26 SA)</td></tr>
<tr><td><strong>Myéloschisis</strong> (rachischisis)</td><td>Moelle totalement ouverte, étalée à la surface, sans sac</td><td>Forme la plus grave ; peut être associé à l'anencéphalie (craniorachischisis)</td></tr>
</tbody>
</table>
<h4>Dépistage et prévention</h4>
<ul>
<li><strong>Dépistage</strong> : échographie (12 SA pour l'anencéphalie, 22 SA pour le spina bifida : défaut des arcs postérieurs, signes crâniens indirects « citron » et « banane » du Chiari II, ventriculomégalie) ; <strong>alpha-fœtoprotéine</strong> élevée dans le sérum maternel et le liquide amniotique (avec acétylcholinestérase) pour les formes ouvertes.</li>
<li><strong>Prévention par l'acide folique</strong> (vitamine B9), cofacteur de la synthèse des nucléotides et de la méthylation, dont la carence (fréquente : 50 % des femmes en âge de procréer) multiplie le risque ; la supplémentation réduit le risque de <strong>50 à 70 %</strong> : <strong>0,4 mg par jour</strong> pour toutes les femmes, à débuter <strong>au moins 4 semaines avant la conception</strong> et à poursuivre jusqu'à <strong>12 SA</strong> (la fermeture est achevée à 6 SA, avant le diagnostic de grossesse) ; <strong>5 mg par jour</strong> en cas d'antécédent d'AFTN (risque de récidive 3 à 4 %), de traitement antiépileptique, de diabète ou d'obésité. Plusieurs pays enrichissent les farines en acide folique.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> l'acide folique doit être pris <strong>avant la conception</strong> (période périconceptionnelle) : débuté au premier retard de règles, il arrive trop tard pour la fermeture du neuropore antérieur (J25) et presque trop tard pour le postérieur (J28). Le spina bifida occulta est fréquent (10 %) et bénin ; l'<strong>hydrocéphalie</strong> du myéloméningocèle est liée à la malformation de Chiari II.</div>`
            },
            {
              titre: "Autres malformations du système nerveux central",
              contenu: `<table>
<thead><tr><th>Malformation</th><th>Mécanisme</th><th>Caractéristiques</th></tr></thead>
<tbody>
<tr><td><strong>Hydrocéphalie congénitale</strong> (1/1 000)</td><td>Accumulation de liquide cérébro-spinal par <strong>obstruction</strong> (sténose de l'<strong>aqueduc</strong> de Sylvius, forme la plus fréquente, parfois liée à l'X : gène <em>L1CAM</em> ; malformations de Chiari II et de Dandy-Walker ; infections : toxoplasmose, CMV ; hémorragie) ou, rarement, par défaut de résorption</td><td>Dilatation ventriculaire (ventriculomégalie supérieure à 10-15 mm à l'échographie), macrocrânie, fontanelles tendues, disjonction des sutures ; dérivation ventriculo-péritonéale</td></tr>
<tr><td><strong>Holoprosencéphalie</strong> (1/10 000 naissances, 1/250 conceptions)</td><td>Défaut de <strong>clivage du prosencéphale</strong> en deux hémisphères (3<sup>e</sup>-5<sup>e</sup> semaine) par anomalie de la ligne médiane (voie <strong>SHH</strong>, ZIC2, SIX3 ; trisomie 13 ; <strong>diabète</strong> maternel, <strong>alcool</strong>)</td><td>Formes alobaire (ventricule unique, pas de faux du cerveau), semi-lobaire, lobaire ; anomalies faciales médianes : <strong>cyclopie</strong>, proboscis, hypotélorisme, fente labiale médiane, incisive centrale unique ; retard mental sévère</td></tr>
<tr><td><strong>Microcéphalie</strong> (périmètre crânien inférieur à - 2 ou - 3 DS)</td><td>Défaut de prolifération neuronale (gènes des centrosomes : <em>ASPM</em>, <em>MCPH1</em>), infections (<strong>CMV, Zika</strong>, rubéole, toxoplasmose), <strong>alcool</strong>, radiations, phénylcétonurie maternelle, anoxie</td><td>Petit crâne, retard mental</td></tr>
<tr><td><strong>Anomalies de la migration neuronale</strong></td><td>Défaut de migration le long de la glie radiaire (gènes <em>LIS1</em>, <em>DCX</em>, <em>TUBA1A</em> ; CMV, alcool)</td><td><strong>Lissencéphalie</strong> (cerveau lisse, agyrie, cortex épais à 4 couches), pachygyrie, <strong>hétérotopies</strong> (amas de neurones en position anormale, périventriculaires ou en bande), <strong>polymicrogyrie</strong>, schizencéphalie ; épilepsie sévère, retard</td></tr>
<tr><td><strong>Agénésie du corps calleux</strong> (1/4 000)</td><td>Défaut de formation des fibres commissurales (10<sup>e</sup>-20<sup>e</sup> semaine), isolé ou syndromique (Aicardi, trisomies, alcool, métabolique)</td><td>Ventricules latéraux écartés et parallèles (« colpocéphalie »), 3<sup>e</sup> ventricule ascensionné ; pronostic variable (normal à retard)</td></tr>
<tr><td><strong>Malformation de Dandy-Walker</strong></td><td>Agénésie ou hypoplasie du <strong>vermis</strong> cérébelleux avec dilatation kystique du 4<sup>e</sup> ventricule et grande fosse postérieure</td><td>Hydrocéphalie, troubles cérébelleux</td></tr>
<tr><td><strong>Malformation de Chiari</strong></td><td>Type I : descente des amygdales cérébelleuses dans le foramen magnum (révélation adulte, syringomyélie) ; type II : descente du vermis, du bulbe et du 4<sup>e</sup> ventricule, associée au myéloméningocèle</td><td>Hydrocéphalie, troubles bulbaires</td></tr>
<tr><td><strong>Craniosténoses</strong> (1/2 000)</td><td>Fermeture prématurée d'une ou plusieurs sutures crâniennes (gènes <em>FGFR2</em>, <em>FGFR3</em>, <em>TWIST</em> : syndromes de Crouzon, Apert, Pfeiffer ; ou isolée)</td><td>Déformation crânienne selon la suture (scaphocéphalie : sagittale ; brachycéphalie : coronales ; trigonocéphalie : métopique ; plagiocéphalie : une coronale) ; risque d'hypertension intracrânienne si plusieurs sutures</td></tr>
<tr><td><strong>Syringomyélie, diastématomyélie</strong></td><td>Cavitation anormale de la moelle ; dédoublement de la moelle par un éperon</td><td>Troubles sensitifs suspendus ; moelle attachée</td></tr>
<tr><td><strong>Craniopharyngiome, kystes de la poche de Rathke</strong></td><td>Reliquats de la poche de Rathke</td><td>Tumeur suprasellaire calcifiée de l'enfant : hypopituitarisme, troubles visuels, hypertension intracrânienne</td></tr>
<tr><td><strong>Anomalies acquises anténatales</strong></td><td>Infections (CMV : calcifications périventriculaires ; toxoplasmose), hémorragies, ischémie (porencéphalie, hydranencéphalie), alcool</td><td>Variable</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'<strong>échographie de 22 SA</strong> examine systématiquement les ventricules latéraux (carrefour inférieur à 10 mm), le cavum du septum pellucidum (dont l'absence oriente vers une agénésie du corps calleux ou une holoprosencéphalie), le cervelet et le vermis, la fosse postérieure, le rachis sur toute sa hauteur et le profil de la face ; l'<strong>IRM fœtale</strong> (après 28-30 SA) précise les anomalies de la gyration et de la migration. La <strong>microcéphalie</strong> et les calcifications intracrâniennes font rechercher une infection congénitale (CMV, toxoplasmose, Zika).</div>`
            }
          ],
          points_cles: [
            "Trois vésicules primaires (prosencéphale, mésencéphale, rhombencéphale) à la 4e semaine, cinq secondaires à la 5e : télencéphale (hémisphères, striatum, ventricules latéraux), diencéphale (thalamus, hypothalamus, rétine, neurohypophyse, épiphyse, 3e ventricule), mésencéphale (aqueduc), métencéphale (pont, cervelet, 4e ventricule), myélencéphale (bulbe).",
            "La paroi du tube neural s'organise en zone ventriculaire (germinative, épendyme), zone intermédiaire (substance grise) et zone marginale (substance blanche) ; le cortex inverse cette disposition par migration inside-out le long de la glie radiaire.",
            "Lame alaire dorsale sensitive, lame fondamentale ventrale motrice, séparées par le sillon limitant ; SHH de la notochorde et de la plaque du plancher spécifie les neurones ventraux ; les noyaux moteurs du tronc deviennent médiaux et les sensitifs latéraux par la courbure pontique.",
            "Neurones et macroglie (astrocytes, oligodendrocytes, épendyme) dérivent du neuroectoblaste ; la microglie est mésodermique ; les ganglions et cellules de Schwann dérivent des crêtes neurales ; la myélinisation débute au 4e-5e mois et se poursuit jusqu'à l'adolescence.",
            "Ascension apparente de la moelle : cône médullaire en S1 au 5e mois, L3 à la naissance, L1-L2 chez l'adulte ; queue de cheval, filum terminale, citerne lombaire (ponction lombaire sous L3).",
            "Cervelet issu des lames alaires du métencéphale (lèvres rhombiques) ; cortex cérébral plissé à partir du 5e-6e mois ; corps calleux formé entre la 10e et la 20e semaine ; adénohypophyse issue de l'ectoblaste du stomodeum (poche de Rathke), neurohypophyse du diencéphale (infundibulum).",
            "Anomalies de fermeture du tube neural (1-2/1 000, avant J28) : anencéphalie (neuropore antérieur, létale), encéphalocèle, spina bifida occulta (10 %, bénin), méningocèle, myéloméningocèle (paraplégie, vessie neurologique, hydrocéphalie par Chiari II), myéloschisis.",
            "Prévention par l'acide folique 0,4 mg/j (5 mg si antécédent, antiépileptiques, diabète) débuté au moins 4 semaines avant la conception et poursuivi jusqu'à 12 SA ; dépistage par échographie et alpha-fœtoprotéine.",
            "Autres malformations : hydrocéphalie (sténose de l'aqueduc), holoprosencéphalie (défaut de clivage du prosencéphale, SHH, trisomie 13, alcool, diabète ; cyclopie), microcéphalie (CMV, Zika, alcool), lissencéphalie et hétérotopies (migration), agénésie du corps calleux, Dandy-Walker, Chiari, craniosténoses (FGFR)."
          ],
          lexique: [
            { terme: "Vésicules cérébrales", def: "Dilatations successives du tube neural céphalique : trois primaires (prosencéphale, mésencéphale, rhombencéphale) puis cinq secondaires (télencéphale, diencéphale, mésencéphale, métencéphale, myélencéphale)." },
            { terme: "Zone ventriculaire", def: "Couche germinative interne du tube neural, siège des mitoses des cellules neuroépithéliales, devenant l'épendyme." },
            { terme: "Lame alaire / lame fondamentale", def: "Épaississements dorsal (sensitif) et ventral (moteur) de la zone intermédiaire du tube neural, séparés par le sillon limitant." },
            { terme: "Glie radiaire", def: "Cellules gliales s'étendant de la zone ventriculaire à la surface, guidant la migration des neurones vers le cortex, puis se transformant en astrocytes." },
            { terme: "Ascension de la moelle", def: "Remontée apparente du cône médullaire (S1 au 5e mois, L3 à la naissance, L1-L2 chez l'adulte) due à la croissance plus rapide de la colonne vertébrale, créant la queue de cheval." },
            { terme: "Poche de Rathke", def: "Évagination de l'ectoblaste du toit du stomodeum à l'origine de l'adénohypophyse." },
            { terme: "Infundibulum", def: "Évagination du plancher du diencéphale à l'origine de la neurohypophyse et de la tige pituitaire." },
            { terme: "Anencéphalie", def: "Absence de fermeture du neuropore antérieur avant J25, avec absence de voûte crânienne et des hémisphères ; létale." },
            { terme: "Myéloméningocèle", def: "Forme la plus fréquente de spina bifida ouvert : hernie des méninges et de la moelle malformée, responsable de paraplégie, de vessie neurologique et d'hydrocéphalie (Chiari II)." },
            { terme: "Holoprosencéphalie", def: "Défaut de clivage du prosencéphale en deux hémisphères, lié à des anomalies de la ligne médiane (SHH, trisomie 13, alcool), associé à des anomalies faciales médianes." }
          ],
          qcm: [
            {
              q: "Concernant les vésicules cérébrales :",
              options: [
                "A. Le télencéphale donne les hémisphères cérébraux et les ventricules latéraux.",
                "B. La rétine dérive du télencéphale.",
                "C. Le cervelet dérive du métencéphale.",
                "D. La cavité du mésencéphale devient l'aqueduc.",
                "E. Le thalamus et l'hypothalamus dérivent du diencéphale."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : la rétine dérive des vésicules optiques, évaginations du diencéphale."
            },
            {
              q: "Concernant l'histogenèse du tube neural :",
              options: [
                "A. La zone ventriculaire est la zone germinative, siège des mitoses.",
                "B. La zone marginale devient la substance grise.",
                "C. La microglie dérive du neuroectoblaste.",
                "D. Les neurones du cortex cérébral migrent le long des cellules gliales radiaires selon un mode inside-out.",
                "E. La lame alaire est dorsale et sensitive."
              ],
              bonnes: [0, 3, 4],
              explication: "A, D et E sont vraies. B est fausse : la zone marginale devient la substance blanche ; la zone intermédiaire devient la substance grise. C est fausse : la microglie est d'origine mésodermique."
            },
            {
              q: "Concernant la moelle épinière :",
              options: [
                "A. Jusqu'au 3e mois, la moelle occupe toute la longueur du canal vertébral.",
                "B. Le cône médullaire est en regard de L1-L2 chez l'adulte.",
                "C. À la naissance, le cône médullaire est en regard de L3.",
                "D. L'ascension de la moelle est due à une migration active du tissu nerveux vers le haut.",
                "E. La queue de cheval résulte de l'allongement des racines lombo-sacrées."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'ascension est apparente, due à la croissance plus rapide de la colonne vertébrale."
            },
            {
              q: "Concernant l'encéphale et l'hypophyse :",
              options: [
                "A. L'adénohypophyse dérive de l'ectoblaste du stomodeum (poche de Rathke).",
                "B. La neurohypophyse dérive du plancher du diencéphale.",
                "C. Le cervelet dérive des lames fondamentales du métencéphale.",
                "D. Les sillons et gyri apparaissent à partir du 5e-6e mois.",
                "E. Le corps calleux se forme entre la 10e et la 20e semaine."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le cervelet dérive des lames alaires (lèvres rhombiques) du métencéphale."
            },
            {
              q: "Concernant les anomalies de fermeture du tube neural :",
              options: [
                "A. Elles surviennent avant le 28e jour de développement.",
                "B. L'anencéphalie résulte d'un défaut de fermeture du neuropore postérieur.",
                "C. Le myéloméningocèle s'associe fréquemment à une hydrocéphalie par malformation de Chiari II.",
                "D. Le spina bifida occulta touche environ 10 % de la population et est généralement asymptomatique.",
                "E. L'alpha-fœtoprotéine est abaissée dans le liquide amniotique en cas de spina bifida ouvert."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : l'anencéphalie résulte d'un défaut de fermeture du neuropore antérieur. E est fausse : l'AFP est élevée dans les formes ouvertes."
            },
            {
              q: "Concernant la prévention des anomalies de fermeture du tube neural :",
              options: [
                "A. L'acide folique réduit le risque de 50 à 70 %.",
                "B. La dose recommandée pour toutes les femmes est de 0,4 mg par jour.",
                "C. La supplémentation doit débuter au moins 4 semaines avant la conception.",
                "D. Il suffit de débuter la supplémentation à la confirmation de la grossesse.",
                "E. En cas d'antécédent d'anomalie de fermeture du tube neural, la dose est de 5 mg par jour."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la fermeture du tube neural est achevée à 6 SA, avant le diagnostic habituel de grossesse ; la supplémentation doit être périconceptionnelle."
            },
            {
              q: "Concernant les autres malformations du système nerveux central :",
              options: [
                "A. L'holoprosencéphalie résulte d'un défaut de clivage du prosencéphale et s'associe à des anomalies faciales médianes.",
                "B. La sténose de l'aqueduc est une cause fréquente d'hydrocéphalie congénitale.",
                "C. La lissencéphalie résulte d'une anomalie de la migration neuronale.",
                "D. Le cytomégalovirus et le virus Zika sont des causes de microcéphalie.",
                "E. Le craniopharyngiome dérive de reliquats de l'infundibulum."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : le craniopharyngiome dérive de reliquats de la poche de Rathke (adénohypophyse, ectoblaste)."
            }
          ]
        },
        {
          id: "face-cou-arcs-pharyngiens",
          titre: "Développement de la face, du cou et des arcs pharyngiens",
          duree: 45,
          objectifs: [
            "Décrire la constitution d'un arc pharyngien (ectoblaste, mésoblaste, crêtes neurales, entoblaste) et le nombre d'arcs chez l'homme.",
            "Connaître les dérivés squelettiques, musculaires, nerveux et artériels de chaque arc pharyngien.",
            "Connaître les dérivés des poches pharyngiennes (entoblastiques) et des fentes pharyngiennes (ectoblastiques).",
            "Décrire la formation de la face à partir des cinq bourgeons faciaux, du palais primaire et secondaire, de la langue et de la thyroïde.",
            "Connaître les malformations : fentes labio-palatines, kystes et fistules cervicaux, syndromes du 1er arc, kyste du tractus thyréoglosse, syndrome de Di George."
          ],
          sections: [
            {
              titre: "L'appareil pharyngien : arcs, poches et fentes",
              contenu: `<p>L'<strong>appareil pharyngien</strong> (branchial) se met en place entre la <strong>4<sup>e</sup> et la 5<sup>e</sup> semaine</strong> de part et d'autre de l'<strong>intestin pharyngien</strong> (partie crâniale de l'intestin antérieur). Il comprend des <strong>arcs</strong>, séparés à l'extérieur par des <strong>fentes</strong> (sillons) ectoblastiques et à l'intérieur par des <strong>poches</strong> entoblastiques. Chez les poissons, ces structures forment les branchies ; chez l'homme, elles sont transitoires et donnent la <strong>face</strong>, le <strong>cou</strong>, le <strong>pharynx</strong>, le <strong>larynx</strong>, l'<strong>oreille</strong> et plusieurs glandes.</p>
<h4>Les arcs pharyngiens</h4>
<p>Il existe <strong>cinq arcs</strong> chez l'homme, numérotés <strong>1, 2, 3, 4 et 6</strong> (le <strong>5<sup>e</sup> arc</strong> est rudimentaire et disparaît, ou n'apparaît pas ; il est sans dérivé). Ils apparaissent successivement de l'avant vers l'arrière : le 1<sup>er</sup> à J22-J24, les 2<sup>e</sup> et 3<sup>e</sup> à J26-J28, les 4<sup>e</sup> et 6<sup>e</sup> à J29-J32. Ce sont des bourrelets arciformes de la paroi latérale de l'embryon, s'étendant du tube neural jusqu'à la ligne médiane ventrale, autour du <strong>stomodeum</strong> (bouche primitive) et du pharynx. Chaque arc a la même constitution :</p>
<ul>
<li>un revêtement <strong>ectoblastique</strong> externe (future peau de la face et du cou) ;</li>
<li>un revêtement <strong>entoblastique</strong> interne (muqueuse du pharynx) ;</li>
<li>un noyau <strong>mésenchymateux</strong> d'origine double : <strong>mésoblaste</strong> (para-axial et latéral) qui donne les <strong>muscles</strong> striés et l'<strong>endothélium</strong> de l'artère, et <strong>crêtes neurales céphaliques</strong> (ectomésenchyme) qui donnent le <strong>squelette</strong> (cartilage puis os), le tissu conjonctif, le derme et la paroi (média) des vaisseaux ;</li>
<li>une <strong>artère</strong> : l'<strong>arc aortique</strong> correspondant (reliant le sac aortique à l'aorte dorsale) ;</li>
<li>un <strong>nerf crânien</strong> propre, mixte, issu du tube neural (rhombomères), qui innerve les muscles dérivés de l'arc (branchiomoteur) et la muqueuse et la peau correspondantes (sensitif) ;</li>
<li>une baguette <strong>cartilagineuse</strong> (cartilage de l'arc).</li>
</ul>
<p>Les muscles d'un arc <strong>gardent toute leur vie l'innervation du nerf de cet arc</strong>, même s'ils migrent loin (par exemple le muscle stylo-hyoïdien ou le ventre postérieur du digastrique, innervés par le VII, ou le trapèze et le sterno-cléido-mastoïdien, en partie dérivés des arcs caudaux et innervés par le XI). Ce principe permet de retrouver l'origine embryologique de toute structure de la tête et du cou à partir de son innervation.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 5 arcs (1, 2, 3, 4, 6), chacun avec un cartilage et un conjonctif (crêtes neurales), des muscles (mésoblaste), une artère (arc aortique) et un nerf crânien (V, VII, IX, X supérieur, X récurrent). L'innervation d'un muscle révèle son arc d'origine. Poches = entoblaste (dedans), fentes = ectoblaste (dehors).</div>`
            },
            {
              titre: "Dérivés des arcs pharyngiens",
              contenu: `<table>
<thead><tr><th>Arc</th><th>Nerf crânien</th><th>Cartilage et dérivés squelettiques</th><th>Muscles</th><th>Artère</th></tr></thead>
<tbody>
<tr><td><strong>1<sup>er</sup> arc</strong> (mandibulaire), divisé en bourgeon maxillaire et bourgeon mandibulaire</td><td><strong>Trijumeau (V)</strong> : V2 (maxillaire) et V3 (mandibulaire) ; V1 (ophtalmique) pour le bourgeon frontonasal</td><td><strong>Cartilage de Meckel</strong> : <strong>marteau</strong> (malleus) et <strong>enclume</strong> (incus), ligament antérieur du marteau, <strong>ligament sphéno-mandibulaire</strong> ; la <strong>mandibule</strong> se forme par ossification de membrane autour du cartilage de Meckel (qui disparaît) ; bourgeon maxillaire : <strong>maxillaire</strong>, <strong>os zygomatique</strong>, <strong>os palatin</strong>, partie squameuse de l'<strong>os temporal</strong>, vomer (ossification de membrane)</td><td><strong>Muscles masticateurs</strong> (temporal, masséter, ptérygoïdiens médial et latéral), <strong>mylo-hyoïdien</strong>, <strong>ventre antérieur du digastrique</strong>, <strong>tenseur du tympan</strong>, <strong>tenseur du voile du palais</strong></td><td>1<sup>er</sup> arc aortique : artère maxillaire (partie)</td></tr>
<tr><td><strong>2<sup>e</sup> arc</strong> (hyoïdien)</td><td><strong>Facial (VII)</strong></td><td><strong>Cartilage de Reichert</strong> : <strong>étrier</strong> (stapes), <strong>processus styloïde</strong> du temporal, <strong>ligament stylo-hyoïdien</strong>, <strong>petite corne</strong> et <strong>partie supérieure du corps de l'os hyoïde</strong></td><td><strong>Muscles de la mimique</strong> (peauciers de la face : orbiculaires, buccinateur, frontal, platysma), <strong>stylo-hyoïdien</strong>, <strong>ventre postérieur du digastrique</strong>, <strong>muscle de l'étrier</strong> (stapédien), auriculaires</td><td>2<sup>e</sup> arc aortique : artère stapédienne (transitoire), hyoïdienne</td></tr>
<tr><td><strong>3<sup>e</sup> arc</strong></td><td><strong>Glossopharyngien (IX)</strong></td><td><strong>Grande corne</strong> et <strong>partie inférieure du corps de l'os hyoïde</strong></td><td><strong>Stylo-pharyngien</strong> (seul muscle du 3<sup>e</sup> arc)</td><td>3<sup>e</sup> arc aortique : <strong>carotide commune</strong> et carotide interne proximale</td></tr>
<tr><td><strong>4<sup>e</sup> arc</strong></td><td><strong>Vague (X)</strong> : <strong>nerf laryngé supérieur</strong></td><td><strong>Cartilage thyroïde</strong>, <strong>épiglotte</strong> (en partie), cartilages cunéiformes</td><td><strong>Muscles du pharynx</strong> (constricteurs), <strong>muscles du voile</strong> (élévateur du voile, palato-glosse, palato-pharyngien, uvulaire ; sauf le tenseur du voile : 1<sup>er</sup> arc), <strong>crico-thyroïdien</strong></td><td>4<sup>e</sup> arc aortique : <strong>crosse de l'aorte</strong> (gauche), <strong>artère sous-clavière droite</strong> (droit)</td></tr>
<tr><td><strong>6<sup>e</sup> arc</strong></td><td><strong>Vague (X)</strong> : <strong>nerf laryngé récurrent</strong> (inférieur)</td><td><strong>Cartilage cricoïde</strong>, <strong>cartilages aryténoïdes</strong>, corniculés</td><td><strong>Muscles intrinsèques du larynx</strong> (sauf le crico-thyroïdien), muscles striés de l'œsophage supérieur</td><td>6<sup>e</sup> arc aortique : <strong>artères pulmonaires</strong> proximales, <strong>canal artériel</strong> (gauche)</td></tr>
</tbody>
</table>
<p>Le nerf de chaque arc comporte aussi une <strong>branche prétrématique</strong> qui innerve l'arc précédent (corde du tympan du VII gagnant la langue du 1<sup>er</sup> arc), ce qui explique certaines innervations croisées. Le <strong>XII</strong> (hypoglosse) n'est pas un nerf d'arc : il innerve les muscles de la langue, dérivés des <strong>somites occipitaux</strong>.</p>
<h4>Mnémotechnique</h4>
<p>Marteau et enclume : 1<sup>er</sup> arc (Meckel, V) ; étrier : 2<sup>e</sup> arc (Reichert, VII) ; os hyoïde : petite corne et haut du corps du 2<sup>e</sup>, grande corne et bas du corps du 3<sup>e</sup> ; cartilage thyroïde : 4<sup>e</sup> ; cricoïde et aryténoïdes : 6<sup>e</sup>. Les muscles de l'oreille moyenne suivent : tenseur du tympan (V) sur le marteau, stapédien (VII) sur l'étrier.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> le <strong>tenseur du voile du palais</strong> est le seul muscle du voile innervé par le <strong>V</strong> (1<sup>er</sup> arc), les autres par le X (4<sup>e</sup> arc) ; le <strong>crico-thyroïdien</strong> est le seul muscle intrinsèque du larynx innervé par le <strong>nerf laryngé supérieur</strong> (4<sup>e</sup> arc), les autres par le récurrent (6<sup>e</sup>). Le digastrique a deux ventres de deux arcs différents (antérieur : V ; postérieur : VII). La mandibule n'est pas une ossification du cartilage de Meckel mais une ossification de membrane qui le remplace.</div>`
            },
            {
              titre: "Les poches et les fentes pharyngiennes",
              contenu: `<h4>Les poches pharyngiennes (entoblaste)</h4>
<p>Entre les arcs, la paroi latérale de l'intestin pharyngien forme <strong>quatre poches</strong> bien développées (la 5<sup>e</sup>, rudimentaire, est souvent considérée comme une partie de la 4<sup>e</sup>). Leur épithélium entoblastique donne des organes glandulaires et lymphoïdes, qui migrent souvent loin de leur origine.</p>
<table>
<thead><tr><th>Poche</th><th>Dérivés</th></tr></thead>
<tbody>
<tr><td><strong>1<sup>re</sup> poche</strong></td><td><strong>Récessus tubo-tympanique</strong> : <strong>trompe auditive</strong> (d'Eustache) et <strong>cavité tympanique</strong> (caisse du tympan, oreille moyenne) ; participe à la face interne de la <strong>membrane du tympan</strong> (épithélium entoblastique interne)</td></tr>
<tr><td><strong>2<sup>e</sup> poche</strong></td><td><strong>Amygdale palatine</strong> (tonsille palatine) : l'épithélium entoblastique forme les <strong>cryptes</strong>, le tissu lymphoïde (mésoblastique) la colonise au 3<sup>e</sup>-5<sup>e</sup> mois ; <strong>fosse supra-tonsillaire</strong> (reste de la poche)</td></tr>
<tr><td><strong>3<sup>e</sup> poche</strong></td><td>Partie <strong>dorsale</strong> : <strong>parathyroïde inférieure</strong> (parathyroïde III) ; partie <strong>ventrale</strong> : <strong>thymus</strong> (épithélium thymique, réticulum épithélial ; les lymphocytes T sont d'origine hématopoïétique). Les deux migrent <strong>vers le bas</strong> avec le thymus, qui gagne le médiastin antérieur ; la parathyroïde inférieure s'arrête au pôle inférieur de la thyroïde (elle a « dépassé » la parathyroïde issue de la 4<sup>e</sup> poche, d'où l'inversion des positions)</td></tr>
<tr><td><strong>4<sup>e</sup> poche</strong></td><td>Partie <strong>dorsale</strong> : <strong>parathyroïde supérieure</strong> (parathyroïde IV), qui reste au pôle supérieur de la thyroïde ; partie <strong>ventrale</strong> (ou 5<sup>e</sup> poche) : <strong>corps ultimobranchial</strong>, qui s'incorpore à la thyroïde et apporte les <strong>cellules C</strong> (parafolliculaires, à calcitonine), d'origine <strong>crête neurale</strong> ayant colonisé la poche</td></tr>
</tbody>
</table>
<h4>Les fentes pharyngiennes (ectoblaste)</h4>
<p>À l'extérieur, les arcs sont séparés par quatre <strong>fentes</strong> (sillons branchiaux) ectoblastiques. Seule la <strong>1<sup>re</sup> fente</strong> donne un dérivé : le <strong>méat acoustique externe</strong> (conduit auditif externe) et l'<strong>épithélium externe de la membrane du tympan</strong> (la membrane du tympan est donc constituée de trois couches : ectoblaste de la 1<sup>re</sup> fente, mésoblaste intermédiaire, entoblaste de la 1<sup>re</sup> poche ; c'est le seul endroit où fente et poche restent au contact, sans fusion). Les <strong>fentes 2, 3 et 4</strong> sont recouvertes par la <strong>croissance caudale du 2<sup>e</sup> arc</strong> (opercule), qui fusionne avec l'épicarde (saillie cardiaque) au-dessous : elles forment une cavité ectoblastique transitoire, le <strong>sinus cervical</strong>, qui s'oblitère normalement à la 7<sup>e</sup> semaine, donnant le contour lisse du cou.</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la persistance du sinus cervical ou des fentes donne les <strong>anomalies branchiales latérales</strong> : <strong>kyste branchial</strong> (kyste amygdaloïde, masse latérale du cou en avant du bord antérieur du sterno-cléido-mastoïdien, sous l'angle de la mandibule, révélé souvent à l'adolescence par une infection), <strong>fistule branchiale</strong> (s'ouvrant à la peau au bord antérieur du sterno-cléido-mastoïdien, dans le tiers inférieur du cou, et éventuellement dans la fosse supra-tonsillaire : fistule de la 2<sup>e</sup> poche et fente, la plus fréquente). Les anomalies de la 1<sup>re</sup> fente donnent des fistules pré-auriculaires ou sous-mandibulaires en rapport avec le conduit auditif externe ; celles des 3<sup>e</sup> et 4<sup>e</sup> poches, des fistules du sinus piriforme (thyroïdites suppurées gauches récidivantes).</div>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> les parathyroïdes <strong>inférieures</strong> dérivent de la <strong>3<sup>e</sup></strong> poche (avec le thymus, qui les entraîne vers le bas) et les parathyroïdes <strong>supérieures</strong> de la <strong>4<sup>e</sup></strong> poche : les numéros sont inversés par rapport à la position définitive. Des parathyroïdes ectopiques (médiastinales) ou du tissu thymique ectopique cervical s'expliquent par cette migration. Les cellules C de la thyroïde ne sont pas entoblastiques mais issues des crêtes neurales via le corps ultimobranchial.</div>`
            },
            {
              titre: "La formation de la face et du palais",
              contenu: `<h4>Les cinq bourgeons faciaux (4<sup>e</sup>-5<sup>e</sup> semaine)</h4>
<p>La face se forme autour du <strong>stomodeum</strong>, dépression ectoblastique fermée par la membrane pharyngienne (rompue à J26-J28), à partir de <strong>cinq bourgeons</strong> (processus) mésenchymateux comblés d'ectomésenchyme des crêtes neurales :</p>
<ul>
<li>le <strong>bourgeon frontonasal</strong> (frontal), impair, médian, au-dessus du stomodeum, dérivé du mésenchyme en avant du prosencéphale (innervé par V1) ; il porte les <strong>placodes olfactives</strong> ;</li>
<li>les deux <strong>bourgeons maxillaires</strong>, latéraux, issus de la partie dorsale du 1<sup>er</sup> arc (V2) ;</li>
<li>les deux <strong>bourgeons mandibulaires</strong>, au-dessous du stomodeum, issus de la partie ventrale du 1<sup>er</sup> arc (V3), qui fusionnent très tôt sur la ligne médiane (4<sup>e</sup> semaine) pour former la <strong>mandibule</strong>, la <strong>lèvre inférieure</strong> et le <strong>menton</strong>.</li>
</ul>
<p>Au cours de la <strong>5<sup>e</sup> semaine</strong>, les placodes olfactives s'invaginent en <strong>fossettes olfactives</strong> (futures narines et cavités nasales) ; le mésenchyme qui les entoure se soulève de chaque côté en un <strong>bourgeon nasal médial</strong> (interne) et un <strong>bourgeon nasal latéral</strong> (externe). Entre la 6<sup>e</sup> et la 8<sup>e</sup> semaine, les bourgeons convergent et fusionnent :</p>
<ul>
<li>les deux <strong>bourgeons nasaux médiaux</strong> fusionnent entre eux sur la ligne médiane pour former le <strong>segment intermaxillaire</strong>, qui donne le <strong>philtrum</strong> de la lèvre supérieure, la partie médiane du <strong>maxillaire</strong> portant les <strong>quatre incisives</strong> (prémaxillaire) et le <strong>palais primaire</strong> (partie antérieure triangulaire du palais, en avant du foramen incisif) ; ils donnent aussi la pointe et le dos du nez, la columelle, le septum nasal ;</li>
<li>les <strong>bourgeons maxillaires</strong> croissent vers la ligne médiane, fusionnent avec les bourgeons nasaux médiaux (6<sup>e</sup>-7<sup>e</sup> semaine) pour former les <strong>parties latérales de la lèvre supérieure</strong>, les <strong>joues</strong> et la plus grande partie du <strong>maxillaire</strong> ; la fusion des bourgeons maxillaires et mandibulaires aux commissures réduit la taille de la bouche ;</li>
<li>les <strong>bourgeons nasaux latéraux</strong> donnent les <strong>ailes du nez</strong> ; ils sont séparés des bourgeons maxillaires par le <strong>sillon naso-lacrymal</strong>, dont l'ectoblaste s'enfonce en un cordon qui se creuse pour former le <strong>canal naso-lacrymal</strong> et le sac lacrymal (reliant l'orbite au méat nasal inférieur) ; la fusion maxillo-naso-latérale ferme ce sillon ;</li>
<li>le <strong>bourgeon frontonasal</strong> donne le <strong>front</strong>, la racine du nez et la région glabellaire.</li>
</ul>
<p>Les <strong>yeux</strong>, initialement latéraux, se rapprochent (face plus plate) ; les <strong>oreilles</strong>, basses au départ (au niveau du cou, à partir des 1<sup>er</sup> et 2<sup>e</sup> arcs), remontent avec la croissance de la mandibule. La face est reconnaissable à la 8<sup>e</sup> semaine ; les lèvres sont fermées à la <strong>7<sup>e</sup> semaine</strong>.</p>
<h4>Le palais (6<sup>e</sup> à 12<sup>e</sup> semaine)</h4>
<p>Le palais sépare la cavité buccale des cavités nasales. Il a deux composants :</p>
<ul>
<li>le <strong>palais primaire</strong> : partie antérieure, issue du <strong>segment intermaxillaire</strong> (bourgeons nasaux médiaux), en avant du <strong>foramen incisif</strong> ; il porte les incisives ;</li>
<li>le <strong>palais secondaire</strong> : les deux <strong>processus palatins</strong> (lames palatines), excroissances des <strong>bourgeons maxillaires</strong>, apparaissent à la 6<sup>e</sup> semaine, d'abord <strong>verticaux</strong> de part et d'autre de la <strong>langue</strong> ; à la <strong>7<sup>e</sup>-8<sup>e</sup> semaine</strong>, la langue s'abaisse (croissance de la mandibule, extension de la tête) et les processus palatins se <strong>redressent à l'horizontale</strong> en quelques heures (hydratation de la matrice, acide hyaluronique), puis <strong>fusionnent</strong> entre eux sur la ligne médiane (raphé palatin), <strong>d'avant en arrière</strong>, avec le palais primaire (point de jonction : foramen incisif) et avec le <strong>septum nasal</strong> (cloison médiane issue du bourgeon frontonasal) qui descend. La fusion débute à la 8<sup>e</sup> semaine et s'achève à la <strong>12<sup>e</sup> semaine</strong> (voile et luette) ; elle nécessite la disparition de l'épithélium de la ligne de fusion (apoptose, transition épithélio-mésenchymateuse ; gènes <em>TGFB3</em>, <em>IRF6</em>). La partie antérieure s'ossifie (<strong>palais dur</strong> : processus palatins du maxillaire et des os palatins), la partie postérieure reste musculaire (<strong>voile du palais</strong>, uvule).</li>
</ul>
<p>Les cavités nasales communiquent avec le stomodeum après la rupture des <strong>membranes oro-nasales</strong> (7<sup>e</sup> semaine : choanes primitives), puis, après la formation du palais secondaire, avec le pharynx par les <strong>choanes définitives</strong>. Les <strong>sinus paranasaux</strong> apparaissent en fin de vie fœtale et se développent surtout après la naissance (frontal après 2 ans).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> lèvre supérieure = bourgeons nasaux médiaux (philtrum) + bourgeons maxillaires (parties latérales) ; lèvre inférieure et mandibule = bourgeons mandibulaires ; ailes du nez = bourgeons nasaux latéraux ; palais primaire = segment intermaxillaire ; palais secondaire = processus palatins des bourgeons maxillaires, fusion d'avant en arrière de la 8<sup>e</sup> à la 12<sup>e</sup> semaine ; foramen incisif = limite palais primaire / secondaire.</div>`
            },
            {
              titre: "La langue, la thyroïde et les glandes salivaires",
              contenu: `<h4>La langue</h4>
<p>La langue se forme à partir du plancher du pharynx, entre la 4<sup>e</sup> et la 8<sup>e</sup> semaine, à partir de bourgeons de plusieurs arcs :</p>
<ul>
<li>les <strong>deux tiers antérieurs</strong> (corps) dérivent du <strong>1<sup>er</sup> arc</strong> : <strong>deux bourgeons linguaux latéraux</strong> et un <strong>tubercule impair</strong> médian (tuberculum impar), qui fusionnent (le tubercule impar ne laisse que peu de dérivés) ; <strong>sensibilité</strong> générale par le <strong>V3</strong> (nerf lingual), <strong>gustation</strong> par le <strong>VII</strong> (corde du tympan, branche prétrématique) ;</li>
<li>le <strong>tiers postérieur</strong> (base) dérive de la <strong>copula</strong> (2<sup>e</sup> arc, qui régresse) et surtout de l'<strong>éminence hypopharyngienne</strong> (3<sup>e</sup> et 4<sup>e</sup> arcs) ; sensibilité et gustation par le <strong>IX</strong> (3<sup>e</sup> arc) et, pour la partie la plus postérieure et l'épiglotte, le <strong>X</strong> ; la limite entre les deux parties est le <strong>V lingual</strong> (sillon terminal), dont le sommet est le <strong>foramen cæcum</strong> ;</li>
<li>les <strong>muscles</strong> de la langue proviennent des <strong>somites occipitaux</strong> (myoblastes migrant avec le nerf <strong>XII</strong>, hypoglosse, qui les innerve tous sauf le palato-glosse, innervé par le X).</li>
</ul>
<p>Le <strong>frein</strong> de la langue résulte de la libération incomplète du plancher ; un frein court (ankyloglossie) gêne la succion. Les papilles gustatives apparaissent à la 8<sup>e</sup> semaine, les bourgeons du goût vers la 11<sup>e</sup>-13<sup>e</sup> semaine.</p>
<h4>La thyroïde</h4>
<p>La thyroïde est la <strong>première glande endocrine</strong> à apparaître : vers <strong>J24</strong>, un bourgeon entoblastique médian, le <strong>diverticule thyroïdien</strong>, naît du plancher du pharynx entre le tubercule impair et la copula, au point correspondant au futur <strong>foramen cæcum</strong>. Il descend en avant de l'intestin pharyngien, de l'os hyoïde et des cartilages laryngés, relié à la langue par le <strong>tractus thyréoglosse</strong> (canal thyréoglosse), qui s'oblitère normalement à la <strong>7<sup>e</sup> semaine</strong>. La glande atteint sa position définitive (en avant de la trachée, sous le cartilage cricoïde) à la <strong>7<sup>e</sup> semaine</strong>, se divise en deux <strong>lobes</strong> unis par l'<strong>isthme</strong> et reçoit les <strong>corps ultimobranchiaux</strong> (4<sup>e</sup>-5<sup>e</sup> poches) porteurs des <strong>cellules C</strong>. Les <strong>cellules folliculaires</strong> (entoblaste) s'organisent en follicules au 3<sup>e</sup> mois ; la synthèse de <strong>thyroglobuline</strong> et la captation d'iode débutent à la <strong>10<sup>e</sup>-12<sup>e</sup> semaine</strong> : la thyroïde fœtale est fonctionnelle à partir de 12 SA (la T4 maternelle traverse le placenta en quantité limitée mais indispensable au cerveau au 1<sup>er</sup> trimestre).</p>
<p>Anomalies : la partie distale du tractus peut persister en <strong>lobe pyramidal</strong> (50 % des individus, sur l'isthme) ; la persistance d'un segment donne un <strong>kyste du tractus thyréoglosse</strong> (masse <strong>médiane</strong> du cou, sous l'os hyoïde le plus souvent, <strong>ascensionnant à la protraction de la langue</strong>, pouvant s'infecter ou se fistuliser : exérèse incluant le corps de l'hyoïde, intervention de Sistrunk) ; un arrêt de la migration donne une <strong>thyroïde ectopique</strong> (<strong>linguale</strong> au foramen cæcum le plus souvent, parfois seul tissu thyroïdien fonctionnel : ne pas l'enlever sans scintigraphie) ; l'<strong>athyréose</strong> ou l'ectopie sont les causes principales de l'<strong>hypothyroïdie congénitale</strong> (1/3 500, dépistage néonatal par TSH à J3, traitement précoce indispensable pour éviter le retard mental).</p>
<h4>Glandes salivaires et dents</h4>
<p>Les glandes salivaires bourgeonnent de l'épithélium buccal (6<sup>e</sup>-8<sup>e</sup> semaine) : la <strong>parotide</strong> est <strong>ectoblastique</strong>, les glandes <strong>submandibulaire</strong> et <strong>sublinguale</strong> sont considérées comme <strong>entoblastiques</strong> ; le stroma vient des crêtes neurales. Les dents ont une double origine : l'<strong>émail</strong> est produit par les <strong>améloblastes</strong>, d'origine <strong>ectoblastique</strong> (lame dentaire, 6<sup>e</sup> semaine, puis bourgeon, cupule et cloche) ; la <strong>dentine</strong> (odontoblastes), la <strong>pulpe</strong>, le cément et le ligament alvéolo-dentaire dérivent de l'<strong>ectomésenchyme des crêtes neurales</strong>. Les 20 dents temporaires se forment dès la 6<sup>e</sup>-8<sup>e</sup> semaine (éruption de 6 mois à 2 ans et demi) ; les 32 dents définitives bourgeonnent à partir du 5<sup>e</sup> mois fœtal (éruption de 6 à 25 ans).</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la langue a une innervation sensitive de trois nerfs (V3, IX, X) et gustative de trois nerfs (VII, IX, X), mais une innervation motrice par le seul <strong>XII</strong>, car ses muscles viennent des somites occipitaux et non des arcs. Le kyste du tractus thyréoglosse est <strong>médian</strong> ; le kyste branchial est <strong>latéral</strong>.</div>`
            },
            {
              titre: "Malformations de la face et du cou",
              contenu: `<h4>Les fentes labio-palatines</h4>
<p>Les <strong>fentes orofaciales</strong> sont les malformations faciales les plus fréquentes (<strong>1/700 naissances</strong>). Elles résultent d'un <strong>défaut de fusion des bourgeons faciaux</strong> (hypoplasie du mésenchyme ou défaut d'adhésion-fusion épithéliale), d'origine multifactorielle (gènes <em>IRF6</em>, <em>MSX1</em>, <em>TBX22</em> ; tabac, alcool, antiépileptiques, rétinoïdes, carence en folates ; syndromes : Van der Woude, Pierre Robin, trisomie 13). On distingue, parce qu'elles ont des mécanismes, des dates et des facteurs différents, deux groupes séparés par le <strong>foramen incisif</strong> :</p>
<table>
<thead><tr><th>Type</th><th>Mécanisme</th><th>Formes</th><th>Fréquence</th></tr></thead>
<tbody>
<tr><td><strong>Fentes antérieures</strong> (fente labiale, fente labio-maxillaire, du palais primaire)</td><td>Défaut de fusion entre le <strong>bourgeon maxillaire</strong> et le <strong>bourgeon nasal médial</strong> (6<sup>e</sup>-7<sup>e</sup> semaine) ; la fente est <strong>latérale</strong> (paramédiane), sous la narine, et peut s'étendre à l'arcade alvéolaire (entre incisive latérale et canine) jusqu'au foramen incisif</td><td>Fente labiale simple (« bec-de-lièvre »), fente labio-alvéolaire, uni- ou <strong>bilatérale</strong> ; prédominance <strong>masculine</strong>, côté <strong>gauche</strong></td><td>Fentes labiales avec ou sans fente palatine : 1/1 000 ; plus fréquentes en Asie</td></tr>
<tr><td><strong>Fentes postérieures</strong> (fente palatine isolée, du palais secondaire)</td><td>Défaut de fusion des <strong>processus palatins</strong> entre eux et avec le septum (8<sup>e</sup>-12<sup>e</sup> semaine) ; la fente est <strong>médiane</strong>, en arrière du foramen incisif ; la fermeture allant d'avant en arrière, les formes mineures sont postérieures</td><td>Fente du voile, luette bifide (forme mineure, 1 %), fente du palais dur et du voile, fente sous-muqueuse</td><td>1/2 500 ; prédominance <strong>féminine</strong> (fermeture plus tardive du palais d'environ une semaine chez la fille) ; souvent syndromique (50 %)</td></tr>
<tr><td><strong>Fentes totales</strong> (labio-maxillo-palatines)</td><td>Association des deux : fente labiale + alvéolaire + palatine, uni- ou bilatérale (dans la forme bilatérale, le segment intermaxillaire est isolé en avant)</td><td>Formes les plus sévères</td><td>—</td></tr>
<tr><td><strong>Fentes rares</strong></td><td>Fente labiale <strong>médiane</strong> (défaut de fusion des deux bourgeons nasaux médiaux : holoprosencéphalie), <strong>fente faciale oblique</strong> (sillon naso-lacrymal non fermé, de la lèvre à l'orbite), <strong>macrostomie</strong> (fente transverse : défaut de fusion maxillo-mandibulaire), fente mandibulaire médiane</td><td>—</td><td>Rares</td></tr>
</tbody>
</table>
<p>Conséquences : troubles de la <strong>succion</strong> (impossibilité de faire le vide), fausses routes, <strong>otites</strong> séreuses (dysfonction de la trompe auditive par atteinte des muscles du voile), troubles de la <strong>phonation</strong> (voix nasonnée), dentaires, esthétiques et psychologiques. Diagnostic anténatal échographique des fentes labiales (22 SA, 70 % de détection) ; prise en charge pluridisciplinaire : fermeture de la lèvre vers 3 à 6 mois, du palais vers 6 à 18 mois, orthophonie, orthodontie.</p>
<h4>Les syndromes du 1<sup>er</sup> arc et autres anomalies</h4>
<ul>
<li><strong>Séquence de Pierre Robin</strong> (1/8 500) : <strong>micro-rétrognathie</strong> -> <strong>glossoptose</strong> (langue restée haute entre les processus palatins) -> <strong>fente palatine</strong> postérieure ; détresse respiratoire néonatale ; isolée ou syndromique (Stickler, 22q11).</li>
<li><strong>Syndrome de Treacher Collins</strong> (<em>TCOF1</em>) : défaut des crêtes neurales des 1<sup>er</sup> et 2<sup>e</sup> arcs : hypoplasie malaire et mandibulaire, colobome palpébral, malformations des oreilles avec surdité de transmission, fente palatine. <strong>Microsomie hémifaciale</strong> (Goldenhar) : atteinte unilatérale des 1<sup>er</sup> et 2<sup>e</sup> arcs (hypoplasie mandibulaire, microtie, appendices pré-auriculaires).</li>
<li><strong>Syndrome de Di George</strong> (22q11) : anomalies des 3<sup>e</sup> et 4<sup>e</sup> poches (aplasie thymique, hypoparathyroïdie), cardiopathies conotroncales, fente palatine.</li>
<li><strong>Kystes et fistules</strong> : <strong>kyste du tractus thyréoglosse</strong> (médian), <strong>kyste et fistule branchiaux</strong> (latéraux, 2<sup>e</sup> poche et fente), fistules pré-auriculaires (1<sup>re</sup> fente), kyste dermoïde médian.</li>
<li><strong>Hypertélorisme</strong> (bourgeon frontonasal large), <strong>hypotélorisme</strong> et <strong>cyclopie</strong> (holoprosencéphalie), <strong>atrésie des choanes</strong> (persistance de la membrane oro-nasale, détresse respiratoire si bilatérale, syndrome CHARGE), <strong>macroglossie</strong> (Beckwith-Wiedemann, trisomie 21, hypothyroïdie), oreilles basses (retard de croissance mandibulaire des trisomies).</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> devant une masse cervicale de l'enfant, la <strong>topographie</strong> oriente l'embryologie : <strong>médiane</strong>, mobile à la déglutition et à la protraction de la langue = kyste du tractus thyréoglosse (vérifier par échographie l'existence d'une thyroïde normale avant toute exérèse) ; <strong>latérale</strong>, au bord antérieur du sterno-cléido-mastoïdien = kyste branchial de la 2<sup>e</sup> fente ; <strong>pré-auriculaire</strong> = 1<sup>re</sup> fente.</div>`
            }
          ],
          points_cles: [
            "Cinq arcs pharyngiens (1, 2, 3, 4, 6 ; le 5e est absent) apparaissent entre la 4e et la 5e semaine ; chacun comporte un revêtement ectoblastique et entoblastique, un mésenchyme mixte (mésoblaste pour les muscles, crêtes neurales pour le squelette et le conjonctif), un arc aortique, un cartilage et un nerf crânien ; un muscle garde toujours le nerf de son arc.",
            "1er arc (V) : marteau, enclume, cartilage de Meckel (ligament sphéno-mandibulaire), mandibule et maxillaire (os de membrane), muscles masticateurs, mylo-hyoïdien, ventre antérieur du digastrique, tenseur du tympan, tenseur du voile.",
            "2e arc (VII) : étrier, processus styloïde, ligament stylo-hyoïdien, petite corne et haut du corps de l'hyoïde, muscles de la mimique, stapédien, stylo-hyoïdien, ventre postérieur du digastrique ; 3e arc (IX) : grande corne et bas du corps de l'hyoïde, stylo-pharyngien, carotides.",
            "4e arc (X, laryngé supérieur) : cartilage thyroïde, épiglotte, muscles du pharynx et du voile, crico-thyroïdien, crosse aortique et sous-clavière droite ; 6e arc (X, récurrent) : cricoïde, aryténoïdes, muscles intrinsèques du larynx, artères pulmonaires et canal artériel.",
            "Poches (entoblaste) : 1re = trompe auditive et caisse du tympan ; 2e = amygdale palatine ; 3e = parathyroïdes inférieures et thymus ; 4e = parathyroïdes supérieures et corps ultimobranchial (cellules C des crêtes neurales). Fentes (ectoblaste) : 1re = conduit auditif externe et face externe du tympan ; 2e à 4e = sinus cervical, oblitéré (kystes et fistules branchiaux latéraux).",
            "La face se forme à partir de cinq bourgeons (frontonasal, deux maxillaires, deux mandibulaires) ; les bourgeons nasaux médiaux fusionnent en segment intermaxillaire (philtrum, prémaxillaire avec les incisives, palais primaire) ; les bourgeons maxillaires donnent les parties latérales de la lèvre supérieure et les processus palatins ; les nasaux latéraux les ailes du nez ; les mandibulaires la lèvre inférieure et la mandibule.",
            "Le palais secondaire se forme par redressement et fusion des processus palatins d'avant en arrière de la 8e à la 12e semaine, avec le palais primaire et le septum nasal ; le foramen incisif sépare les fentes antérieures (labio-maxillaires, latérales, garçons) des fentes postérieures (palatines, médianes, filles) ; fréquence totale 1/700.",
            "Langue : deux tiers antérieurs du 1er arc (V3 sensitif, VII gustatif), tiers postérieur des 3e-4e arcs (IX, X), muscles des somites occipitaux (XII) ; thyroïde : diverticule entoblastique médian du plancher pharyngien (J24, foramen cæcum), descente par le tractus thyréoglosse (oblitéré à la 7e semaine), fonctionnelle à 12 SA ; kyste du tractus thyréoglosse médian, thyroïde linguale.",
            "Syndromes du 1er arc (Pierre Robin : micrognathie, glossoptose, fente palatine ; Treacher Collins ; microsomie hémifaciale), Di George (3e et 4e poches), atrésie des choanes, émail ectoblastique et dentine des crêtes neurales."
          ],
          lexique: [
            { terme: "Arc pharyngien", def: "Bourrelet mésenchymateux pair de la région cervicale de l'embryon (4e-5e semaine), revêtu d'ectoblaste et d'entoblaste, contenant un cartilage, des muscles, une artère et un nerf crânien propres ; cinq arcs chez l'homme (1, 2, 3, 4, 6)." },
            { terme: "Cartilage de Meckel", def: "Cartilage du 1er arc, à l'origine du marteau, de l'enclume et du ligament sphéno-mandibulaire ; la mandibule s'ossifie en membrane autour de lui." },
            { terme: "Cartilage de Reichert", def: "Cartilage du 2e arc, à l'origine de l'étrier, du processus styloïde, du ligament stylo-hyoïdien et de la petite corne de l'os hyoïde." },
            { terme: "Poche pharyngienne", def: "Évagination entoblastique latérale de l'intestin pharyngien entre deux arcs, à l'origine de la caisse du tympan, de l'amygdale, du thymus, des parathyroïdes et des corps ultimobranchiaux." },
            { terme: "Sinus cervical", def: "Cavité ectoblastique transitoire formée par le recouvrement des 2e, 3e et 4e fentes par le 2e arc, normalement oblitérée à la 7e semaine ; sa persistance donne kystes et fistules branchiaux." },
            { terme: "Segment intermaxillaire", def: "Structure médiane issue de la fusion des bourgeons nasaux médiaux, donnant le philtrum, le prémaxillaire (incisives) et le palais primaire." },
            { terme: "Processus palatins", def: "Lames issues des bourgeons maxillaires qui se redressent et fusionnent d'avant en arrière (8e-12e semaine) pour former le palais secondaire." },
            { terme: "Foramen incisif", def: "Point de jonction entre le palais primaire et le palais secondaire, limite entre les fentes antérieures (labio-maxillaires) et postérieures (palatines)." },
            { terme: "Tractus thyréoglosse", def: "Canal reliant la thyroïde en migration au foramen cæcum de la langue, normalement oblitéré à la 7e semaine ; sa persistance donne le kyste du tractus thyréoglosse, médian." },
            { terme: "Séquence de Pierre Robin", def: "Micro-rétrognathie entraînant une glossoptose puis une fente palatine postérieure, avec détresse respiratoire néonatale." }
          ],
          qcm: [
            {
              q: "Concernant les arcs pharyngiens :",
              options: [
                "A. Il existe cinq arcs pharyngiens chez l'homme, numérotés 1, 2, 3, 4 et 6.",
                "B. Le squelette des arcs dérive du mésoblaste para-axial.",
                "C. Les muscles des arcs dérivent du mésoblaste.",
                "D. Chaque arc possède un nerf crânien propre qui innerve ses muscles dérivés.",
                "E. Le 5e arc donne les cartilages du larynx."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le squelette des arcs dérive des crêtes neurales céphaliques. E est fausse : le 5e arc est rudimentaire et sans dérivé ; les cartilages laryngés viennent des 4e et 6e arcs."
            },
            {
              q: "Concernant les dérivés des arcs pharyngiens :",
              options: [
                "A. Le marteau et l'enclume dérivent du cartilage du 1er arc.",
                "B. L'étrier dérive du 2e arc.",
                "C. Les muscles de la mimique sont innervés par le nerf trijumeau.",
                "D. Le muscle stylo-pharyngien est le seul muscle du 3e arc.",
                "E. Les muscles intrinsèques du larynx, sauf le crico-thyroïdien, dérivent du 6e arc."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : les muscles de la mimique dérivent du 2e arc et sont innervés par le nerf facial (VII)."
            },
            {
              q: "Concernant les poches et fentes pharyngiennes :",
              options: [
                "A. La 1re poche pharyngienne donne la trompe auditive et la caisse du tympan.",
                "B. Le thymus dérive de la 3e poche.",
                "C. Les parathyroïdes supérieures dérivent de la 3e poche.",
                "D. Les cellules C de la thyroïde proviennent du corps ultimobranchial.",
                "E. Le conduit auditif externe dérive de la 1re fente pharyngienne."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : les parathyroïdes supérieures dérivent de la 4e poche ; les inférieures dérivent de la 3e poche et descendent avec le thymus."
            },
            {
              q: "Concernant la formation de la face :",
              options: [
                "A. Le philtrum de la lèvre supérieure dérive des bourgeons nasaux médiaux.",
                "B. Les ailes du nez dérivent des bourgeons maxillaires.",
                "C. Le palais primaire dérive du segment intermaxillaire.",
                "D. Les processus palatins dérivent des bourgeons maxillaires.",
                "E. La lèvre inférieure dérive des bourgeons mandibulaires."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : les ailes du nez dérivent des bourgeons nasaux latéraux."
            },
            {
              q: "Concernant le palais et les fentes :",
              options: [
                "A. La fusion des processus palatins s'effectue d'avant en arrière entre la 8e et la 12e semaine.",
                "B. Le foramen incisif marque la limite entre palais primaire et palais secondaire.",
                "C. La fente labiale résulte d'un défaut de fusion entre le bourgeon maxillaire et le bourgeon nasal médial.",
                "D. La fente palatine isolée est plus fréquente chez le garçon.",
                "E. La luette bifide est une forme mineure de fente du palais secondaire."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la fente palatine isolée prédomine chez la fille ; c'est la fente labiale qui prédomine chez le garçon."
            },
            {
              q: "Concernant la langue et la thyroïde :",
              options: [
                "A. Les deux tiers antérieurs de la langue dérivent du 1er arc.",
                "B. Les muscles de la langue dérivent des arcs pharyngiens et sont innervés par le V.",
                "C. La thyroïde naît d'un diverticule entoblastique médian du plancher pharyngien au niveau du futur foramen cæcum.",
                "D. Le kyste du tractus thyréoglosse est une masse médiane du cou.",
                "E. La thyroïde fœtale est fonctionnelle dès la 4e semaine."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : les muscles de la langue dérivent des somites occipitaux et sont innervés par le XII. E est fausse : la thyroïde ne capte l'iode et ne synthétise la thyroglobuline qu'à partir de la 10e-12e semaine."
            },
            {
              q: "Concernant les malformations de la face et du cou :",
              options: [
                "A. La séquence de Pierre Robin associe micrognathie, glossoptose et fente palatine.",
                "B. Le kyste branchial est une masse médiane du cou.",
                "C. Le syndrome de Treacher Collins résulte d'une atteinte des crêtes neurales des 1er et 2e arcs.",
                "D. Le syndrome de Di George comporte une hypoplasie du thymus et des parathyroïdes.",
                "E. L'émail dentaire dérive des crêtes neurales."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : le kyste branchial est latéral (bord antérieur du sterno-cléido-mastoïdien) ; la masse médiane est le kyste du tractus thyréoglosse. E est fausse : l'émail est ectoblastique (améloblastes) ; la dentine et la pulpe dérivent des crêtes neurales."
            }
          ]
        },
        {
          id: "membres-squelette",
          titre: "Développement des membres et du squelette",
          duree: 35,
          objectifs: [
            "Décrire l'apparition et la chronologie des bourgeons des membres et leur constitution (mésoblaste de la somatopleure, ectoblaste, myoblastes des somites).",
            "Expliquer le rôle de la crête ectodermique apicale, de la zone d'activité polarisante et des gènes du développement dans la mise en place des trois axes du membre.",
            "Décrire la formation du squelette des membres (condensation, chondrification, ossification endochondrale) et la rotation des membres.",
            "Décrire la formation du squelette axial (vertèbres, côtes, sternum) à partir des sclérotomes et du crâne (neurocrâne, viscérocrâne).",
            "Connaître les principales malformations des membres et du squelette (amélie, phocomélie, syndactylie, polydactylie, pied bot, luxation de hanche, achondroplasie, anomalies vertébrales)."
          ],
          sections: [
            {
              titre: "Les bourgeons des membres",
              contenu: `<p>Les membres apparaissent sous la forme de <strong>bourgeons</strong> à la fin de la <strong>4<sup>e</sup> semaine</strong> : les <strong>bourgeons des membres supérieurs</strong> vers <strong>J26-J28</strong> (en regard des somites C5 à T1, soit des segments médullaires C5-C8/T1, d'où l'innervation du membre supérieur par le plexus brachial) et les <strong>bourgeons des membres inférieurs</strong> vers <strong>J28-J30</strong> (en regard de L2 à S2, plexus lombo-sacré). Le membre supérieur garde cette <strong>avance de 1 à 2 jours</strong> sur le membre inférieur pendant tout le développement (les mains sont formées avant les pieds), et son développement s'effectue de la 4<sup>e</sup> à la 8<sup>e</sup> semaine, période critique très sensible aux tératogènes (thalidomide : J24 à J36).</p>
<p>Chaque bourgeon est une saillie de la paroi latérale du corps (lame latérale) constituée de :</p>
<ul>
<li>un noyau de <strong>mésenchyme</strong> dérivé de la <strong>somatopleure</strong> (mésoblaste latéral, lame pariétale), qui donnera le <strong>squelette</strong> (cartilage, os), les <strong>tendons</strong>, les <strong>ligaments</strong>, le <strong>derme</strong> et les vaisseaux du membre ; sa prolifération est entretenue par des facteurs de croissance (FGF10) ;</li>
<li>un revêtement d'<strong>ectoblaste</strong> (futur épiderme), épaissi à l'extrémité distale du bourgeon en une <strong>crête ectodermique apicale</strong> (CEA ou AER), bande d'épithélium pseudostratifié le long du bord distal ;</li>
<li>des <strong>myoblastes</strong> qui <strong>migrent secondairement</strong> dans le bourgeon à partir des <strong>myotomes</strong> (partie hypaxiale des somites correspondants, sous le contrôle de Pax3 et c-Met) et forment deux masses musculaires, <strong>dorsale</strong> (extenseurs, supinateurs, abducteurs) et <strong>ventrale</strong> (flexseurs, pronateurs, adducteurs) ; les <strong>nerfs</strong> rachidiens correspondants pénètrent ensuite, les rameaux dorsaux pour la masse dorsale (nerfs radial et axillaire ; fémoral et péronier) et les rameaux ventraux pour la masse ventrale (nerfs médian, ulnaire et musculo-cutané ; obturateur et tibial) ;</li>
<li>des <strong>cellules des crêtes neurales</strong> qui apportent les <strong>mélanocytes</strong> et les cellules de Schwann ;</li>
<li>une <strong>artère axiale</strong> (branche de l'artère intersegmentaire : artère axillaire-brachiale-interosseuse pour le membre supérieur ; artère sciatique puis fémorale pour le membre inférieur), terminée par un plexus marginal sous la crête.</li>
</ul>
<p>Le bourgeon, d'abord en forme de palette aplatie, s'allonge et se segmente de proximal en distal par deux constrictions circulaires : la <strong>palette</strong> distale (future main ou pied, 5<sup>e</sup> semaine : J33 pour la main, J37 pour le pied), un segment moyen (<strong>zeugopode</strong> : avant-bras ou jambe) et un segment proximal (<strong>stylopode</strong> : bras ou cuisse), apparus à la 6<sup>e</sup> semaine (le segment distal est l'<strong>autopode</strong>). Dans la palette, le mésenchyme se condense en <strong>rayons digitaux</strong> (J41-J44 pour la main) séparés par des zones qui dégénèrent par <strong>apoptose</strong> (mort cellulaire programmée induite par les BMP), individualisant les <strong>doigts</strong> (J48-J51) puis les <strong>orteils</strong> (J52-J56). Les <strong>articulations</strong> se forment par apoptose et cavitation dans les interzones des condensations cartilagineuses ; les <strong>mouvements</strong> fœtaux sont indispensables à leur modelage (une akinésie donne des arthrogryposes). À la fin de la 8<sup>e</sup> semaine, les membres ont leur forme définitive ; les <strong>ongles</strong> apparaissent au 3<sup>e</sup> mois (doigts) et au 5<sup>e</sup> mois (orteils) et atteignent l'extrémité des doigts à terme.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> bourgeons des membres supérieurs à J26-J28 (C5-T1), inférieurs à J28-J30 (L2-S2) ; squelette, tendons et derme de la <strong>somatopleure</strong> ; muscles des <strong>myotomes</strong> (somites) ; épiderme de l'<strong>ectoblaste</strong> ; mélanocytes et Schwann des crêtes neurales. Doigts individualisés par apoptose à J48-J51 ; membres achevés à 8 semaines.</div>`
            },
            {
              titre: "Les axes du membre et les centres de signalisation",
              contenu: `<p>Le membre est un modèle classique de l'embryologie causale : sa morphogenèse repose sur trois centres de signalisation qui fixent ses trois axes.</p>
<table>
<thead><tr><th>Axe</th><th>Centre organisateur</th><th>Molécules</th><th>Effets</th></tr></thead>
<tbody>
<tr><td><strong>Proximo-distal</strong> (épaule -> doigts)</td><td><strong>Crête ectodermique apicale</strong> (CEA), induite par le FGF10 du mésenchyme et maintenue par Wnt</td><td><strong>FGF8</strong> (et FGF4, FGF9, FGF17) sécrétés par la crête</td><td>Maintient le mésenchyme sous-jacent (<strong>zone de progression</strong>) à l'état <strong>indifférencié et prolifératif</strong> ; l'allongement du membre et la spécification des segments (stylopode, zeugopode, autopode, via les gènes <em>Meis</em>, <em>Hoxa11</em>, <em>Hoxa13</em>) en dépendent. L'ablation de la crête arrête la croissance (membre tronqué) ; sa greffe induit un membre surnuméraire</td></tr>
<tr><td><strong>Antéro-postérieur</strong> (pouce -> petit doigt ; radial -> ulnaire)</td><td><strong>Zone d'activité polarisante</strong> (ZPA), amas de mésenchyme au bord <strong>postérieur</strong> (caudal) du bourgeon</td><td><strong>Sonic Hedgehog (SHH)</strong>, dont le gradient (et la durée d'exposition) détermine l'identité des doigts, via les gènes <strong>Hoxd</strong> (Hoxd9 à Hoxd13) et Gli3</td><td>Les doigts postérieurs (5<sup>e</sup>, 4<sup>e</sup>) se forment à forte concentration de SHH, le pouce (1<sup>er</sup>) en son absence. Une greffe de ZPA au bord antérieur donne une duplication en miroir des doigts (polydactylie) ; une mutation de GLI3 donne les polydactylies des syndromes de Greig et de Pallister-Hall</td></tr>
<tr><td><strong>Dorso-ventral</strong> (dos de la main -> paume)</td><td><strong>Ectoblaste dorsal</strong> et <strong>ectoblaste ventral</strong></td><td><strong>Wnt7a</strong> (ectoblaste dorsal) -> <strong>Lmx1b</strong> (mésenchyme dorsal) ; <strong>Engrailed-1 (En1)</strong> dans l'ectoblaste ventral réprime Wnt7a</td><td>Lmx1b spécifie le caractère dorsal (ongles, tendons extenseurs, poils) ; les mutations de <em>LMX1B</em> donnent le syndrome nail-patella (dysplasie des ongles, absence de rotule)</td></tr>
</tbody>
</table>
<p>L'<strong>identité</strong> du membre (supérieur ou inférieur) et sa <strong>position</strong> le long de l'axe du corps dépendent du code <strong>Hox</strong> de la lame latérale et des facteurs de transcription <strong>Tbx5</strong> (membre supérieur, dont la mutation donne le syndrome de Holt-Oram : anomalies du pouce et du radius, cardiopathie) et <strong>Tbx4</strong> / <strong>Pitx1</strong> (membre inférieur). Les trois centres sont interdépendants : la ZPA maintient la crête (SHH -> Gremlin -> inhibition des BMP -> FGF), la crête maintient la ZPA (FGF -> SHH), et Wnt7a dorsal participe au maintien de SHH : une boucle de rétroaction positive qui s'interrompt lorsque les doigts sont spécifiés, provoquant la régression de la crête.</p>
<p>Les <strong>BMP</strong> jouent un rôle central dans l'<strong>apoptose interdigitale</strong> (séparation des doigts ; chez les oiseaux palmipèdes, l'expression de Gremlin, antagoniste des BMP, maintient les palmures) et dans la chondrogenèse des rayons digitaux. Le nombre de phalanges est déterminé par la durée de signalisation de la crête à l'extrémité de chaque rayon.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> la crête ectodermique apicale commande l'axe <strong>proximo-distal</strong> par les <strong>FGF</strong> ; la zone d'activité polarisante (mésenchyme postérieur) commande l'axe <strong>antéro-postérieur</strong> par <strong>SHH</strong> ; l'ectoblaste dorsal commande l'axe dorso-ventral par <strong>Wnt7a</strong>. SHH est aussi le signal de la notochorde et de la plaque du plancher dans le tube neural : même molécule, contextes différents.</div>`
            },
            {
              titre: "Squelette des membres et rotation",
              contenu: `<h4>Chondrification et ossification</h4>
<p>Au cours de la <strong>5<sup>e</sup> semaine</strong>, le mésenchyme central du bourgeon se <strong>condense</strong> (Sox9) en un modèle préfigurant chaque os ; à la <strong>6<sup>e</sup> semaine</strong>, ces condensations se différencient en <strong>cartilage hyalin</strong> (chondrification), de proximal en distal (humérus avant le radius, avant les métacarpiens), formant une maquette cartilagineuse complète du squelette du membre à la fin de la 6<sup>e</sup> semaine. L'<strong>ossification endochondrale</strong> commence à la <strong>7<sup>e</sup>-8<sup>e</sup> semaine</strong> par l'apparition d'un <strong>centre d'ossification primaire</strong> dans la diaphyse de chaque os long (hypertrophie des chondrocytes, calcification, invasion vasculaire par le bourgeon périostique, ostéoblastes), après la formation d'un manchon périosté. À la <strong>12<sup>e</sup> semaine</strong>, tous les os longs ont un centre primaire ; les diaphyses sont ossifiées à la naissance, mais les <strong>épiphyses</strong> restent cartilagineuses (sauf les épiphyses inférieure du fémur, point de Béclard à 36 SA, et supérieure du tibia, point de Todt, utilisées pour estimer la maturité). Les <strong>centres d'ossification secondaires</strong> épiphysaires apparaissent surtout après la naissance (jusqu'à l'adolescence) ; entre diaphyse et épiphyse persiste le <strong>cartilage de conjugaison</strong> (plaque de croissance), responsable de la croissance en longueur jusqu'à sa soudure (16-25 ans), sous le contrôle de la GH, des hormones thyroïdiennes et des stéroïdes sexuels (qui provoquent sa fermeture). Les os du <strong>carpe</strong> et du <strong>tarse</strong> (sauf le calcanéus, le talus et le cuboïde, ossifiés avant la naissance) s'ossifient après la naissance, ce qui permet d'estimer l'<strong>âge osseux</strong> sur une radiographie de la main.</p>
<p>La <strong>clavicule</strong> est le premier os à s'ossifier (J39-J45, 6<sup>e</sup>-7<sup>e</sup> semaine), par ossification en partie <strong>membraneuse</strong> (comme les os de la voûte du crâne) : c'est une exception parmi les os des membres. La <strong>ceinture</strong> scapulaire et le bassin dérivent aussi de la somatopleure.</p>
<h4>La rotation des membres (7<sup>e</sup>-8<sup>e</sup> semaine)</h4>
<p>À la 6<sup>e</sup> semaine, les deux membres sont disposés de la même manière : bourgeons perpendiculaires au corps, face <strong>ventrale</strong> (future paume et plante) tournée vers le tronc, <strong>pouce et gros orteil du côté crânial</strong> (préaxial), bord radial et tibial crâniaux, coude et genou pointant <strong>latéralement</strong>. Les membres fléchissent ensuite et subissent une <strong>rotation de 90 degrés en sens inverse</strong> autour de leur axe longitudinal :</p>
<ul>
<li>le <strong>membre supérieur</strong> tourne <strong>latéralement</strong> (en dehors) : le coude pointe vers l'<strong>arrière</strong>, la face ventrale (paume, muscles fléchisseurs) regarde vers l'<strong>avant</strong> en position anatomique, le pouce est <strong>latéral</strong> ; les extenseurs sont postérieurs ;</li>
<li>le <strong>membre inférieur</strong> tourne <strong>médialement</strong> (en dedans) : le genou pointe vers l'<strong>avant</strong>, la face ventrale primitive (plante, fléchisseurs) regarde vers l'<strong>arrière</strong>, le gros orteil est <strong>médial</strong> ; les extenseurs (quadriceps) sont antérieurs.</li>
</ul>
<p>Cette rotation explique la disposition <strong>spiralée des dermatomes</strong> du membre inférieur (L1 à L3 en avant de la cuisse, L4 à la face médiale de la jambe, L5 à sa face antéro-latérale, S1 à la face postérieure), l'orientation opposée des articulations du coude et du genou, et le trajet oblique des muscles et des vaisseaux.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> maquette cartilagineuse à la 6<sup>e</sup> semaine, ossification endochondrale primaire à partir de la 7<sup>e</sup>-8<sup>e</sup> semaine (clavicule première, 6<sup>e</sup> semaine, ossification de membrane) ; épiphyses cartilagineuses à la naissance sauf Béclard (fémur inférieur, 36 SA) ; rotation de 90 degrés latérale du membre supérieur (pouce latéral, coude en arrière) et médiale du membre inférieur (gros orteil médial, genou en avant).</div>`
            },
            {
              titre: "Le squelette axial : vertèbres, côtes, sternum",
              contenu: `<h4>Les vertèbres</h4>
<p>Les vertèbres dérivent des <strong>sclérotomes</strong> (partie ventro-médiale des somites, 4<sup>e</sup> semaine), dont les cellules, sous l'induction de la notochorde et de la plaque du plancher (SHH, Pax1, Pax9), perdent leur organisation épithéliale et migrent en trois directions : <strong>autour de la notochorde</strong> (futur corps vertébral), <strong>autour du tube neural</strong> (futur arc vertébral : pédicules, lames, processus épineux et transverses) et <strong>dans la paroi du corps</strong> (processus costaux, futures côtes). Chaque sclérotome comporte une moitié <strong>crâniale</strong>, lâche, et une moitié <strong>caudale</strong>, dense. Au cours de la 5<sup>e</sup> semaine survient la <strong>resegmentation</strong> : la moitié caudale dense d'un sclérotome fusionne avec la moitié crâniale lâche du sclérotome suivant pour former un <strong>corps vertébral</strong> (vertèbre précartilagineuse) : chaque vertèbre est donc <strong>intersegmentaire</strong>, formée de deux demi-sclérotomes adjacents. Conséquences :</p>
<ul>
<li>les <strong>myotomes</strong>, qui conservent la segmentation primitive, enjambent chaque articulation intervertébrale et relient deux vertèbres adjacentes, ce qui permet les mouvements de la colonne ;</li>
<li>les <strong>artères intersegmentaires</strong>, initialement entre deux somites, passent au <strong>milieu des corps vertébraux</strong> ;</li>
<li>les <strong>nerfs rachidiens</strong>, qui sortent en regard de chaque myotome, passent dans les <strong>foramens intervertébraux</strong>, entre deux vertèbres ;</li>
<li>la partie restante du mésenchyme entre deux corps vertébraux, en regard de la fissure intrasclérotomique, forme l'<strong>anneau fibreux</strong> du <strong>disque intervertébral</strong>, dont le centre, le <strong>nucleus pulposus</strong>, est le seul vestige de la <strong>notochorde</strong> (qui disparaît dans les corps vertébraux, où elle régresse par apoptose).</li>
</ul>
<p>Les vertèbres passent par les stades mésenchymateux (4<sup>e</sup>-5<sup>e</sup> semaine), <strong>cartilagineux</strong> (6<sup>e</sup> semaine, deux centres de chondrification pour le corps, un pour chaque demi-arc) et <strong>osseux</strong> : trois <strong>centres d'ossification primaires</strong> (un pour le corps, un pour chaque demi-arc) apparaissent entre la 8<sup>e</sup> et la 12<sup>e</sup> semaine (d'abord dans la région thoraco-lombaire), et les deux demi-arcs ne fusionnent dorsalement qu'après la naissance (1 à 3 ans : un défaut de fusion donne le spina bifida occulta) ; les arcs se soudent au corps entre 3 et 6 ans ; cinq centres secondaires (processus, plateaux) apparaissent à la puberté et se soudent vers 25 ans. Il y a <strong>33 vertèbres</strong> (7 cervicales, 12 thoraciques, 5 lombaires, 5 sacrées soudées en sacrum, 4 coccygiennes soudées), correspondant aux somites après disparition de la 1<sup>re</sup> paire occipitale (les 4 somites occipitaux forment la base du crâne) et des derniers somites coccygiens. Les <strong>courbures</strong> primaires (thoracique et sacrée, concaves en avant) existent chez le fœtus ; les courbures secondaires (cervicale, lombaire) apparaissent avec la tenue de la tête et la marche. Les <strong>gènes Hox</strong> déterminent l'identité régionale de chaque vertèbre (une mutation ou un excès d'acide rétinoïque transforme une vertèbre en type adjacent : transformations homéotiques, par exemple côte cervicale sur C7 ou vertèbre lombaire surnuméraire).</p>
<h4>Les côtes et le sternum</h4>
<p>Les <strong>côtes</strong> dérivent des <strong>processus costaux</strong> des sclérotomes <strong>thoraciques</strong> (12 paires ; les processus des autres régions restent courts : processus transverses cervicaux et lombaires, ailes du sacrum), par chondrification à la 6<sup>e</sup> semaine et ossification endochondrale à partir de la 8<sup>e</sup>-9<sup>e</sup> semaine ; les cartilages costaux restent cartilagineux. Le <strong>sternum</strong> a une origine indépendante : deux <strong>bandes sternales</strong> de mésenchyme de la <strong>somatopleure</strong> de la paroi ventrale, qui convergent et fusionnent sur la ligne médiane de haut en bas (7<sup>e</sup>-10<sup>e</sup> semaine) après s'être connectées aux extrémités des 7 premiers cartilages costaux ; l'ossification (manubrium, sternèbres, processus xiphoïde) est tardive (5<sup>e</sup> mois à la puberté). Un défaut de fusion donne la fente sternale ; des asymétries donnent le thorax en entonnoir (pectus excavatum) ou en carène.</p>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> les vertèbres sont <strong>intersegmentaires</strong> (deux demi-sclérotomes) alors que les muscles, les nerfs et les artères gardent la segmentation des somites : le nerf passe <strong>entre</strong> deux vertèbres, l'artère intersegmentaire passe au <strong>milieu</strong> du corps vertébral. La notochorde ne persiste que dans le <strong>nucleus pulposus</strong>, jamais dans le corps vertébral.</div>`
            },
            {
              titre: "Le crâne",
              contenu: `<p>Le crâne a une origine complexe, à la fois <strong>mésoblastique</strong> (mésoblaste para-axial céphalique et somites occipitaux) et <strong>crête neurale</strong> (ectomésenchyme céphalique), et une ossification mixte, <strong>endochondrale</strong> (base) et <strong>membraneuse</strong> (voûte et face). On distingue le <strong>neurocrâne</strong>, qui protège l'encéphale, et le <strong>viscérocrâne</strong> (splanchnocrâne), squelette de la face dérivé des arcs pharyngiens.</p>
<table>
<thead><tr><th>Partie</th><th>Ossification</th><th>Origine</th><th>Os</th></tr></thead>
<tbody>
<tr><td><strong>Neurocrâne cartilagineux</strong> (chondrocrâne, base du crâne)</td><td><strong>Endochondrale</strong> : fusion de cartilages (parachordaux, hypophysaires, trabéculaires, capsules otiques et nasales) à partir de la 6<sup>e</sup>-7<sup>e</sup> semaine, ossification à partir de la 8<sup>e</sup>-12<sup>e</sup> semaine ; la synchondrose sphéno-occipitale se soude vers 18-20 ans</td><td><strong>Mésoblaste</strong> (somites occipitaux et mésoblaste para-axial) pour la partie postérieure (en arrière de l'hypophyse : occipital, partie pétreuse du temporal, corps du sphénoïde postérieur) ; <strong>crêtes neurales</strong> pour la partie antérieure (ethmoïde, pré-sphénoïde, capsule nasale)</td><td>Occipital (base et partie basilaire), corps et petites ailes du sphénoïde, ethmoïde, partie pétreuse et mastoïdienne du temporal</td></tr>
<tr><td><strong>Neurocrâne membraneux</strong> (desmocrâne, voûte)</td><td><strong>Membraneuse</strong> (intramembraneuse) : ossification directe du mésenchyme en plaques osseuses à partir de centres apparus à la 8<sup>e</sup> semaine, irradiant vers les bords ; les os restent séparés par les <strong>sutures</strong> et les <strong>fontanelles</strong> à la naissance</td><td><strong>Crêtes neurales</strong> pour l'os frontal et la partie squameuse du temporal ; <strong>mésoblaste</strong> para-axial pour les pariétaux et l'écaille de l'occipital (interpariétal)</td><td>Frontal, pariétaux, partie squameuse de l'occipital et du temporal, grandes ailes du sphénoïde (en partie)</td></tr>
<tr><td><strong>Viscérocrâne cartilagineux</strong></td><td>Endochondrale à partir des cartilages des arcs</td><td><strong>Crêtes neurales</strong> (arcs pharyngiens)</td><td>Osselets de l'oreille (marteau, enclume : 1<sup>er</sup> arc ; étrier : 2<sup>e</sup>), processus styloïde, os hyoïde, cartilages du larynx</td></tr>
<tr><td><strong>Viscérocrâne membraneux</strong></td><td>Membraneuse dans le mésenchyme des bourgeons faciaux</td><td><strong>Crêtes neurales</strong></td><td>Maxillaire, os zygomatique, os palatin, vomer, os nasaux, lacrymaux, <strong>mandibule</strong> (autour du cartilage de Meckel), partie tympanique du temporal</td></tr>
</tbody>
</table>
<h4>Les fontanelles et les sutures</h4>
<p>À la naissance, les os de la voûte sont séparés par des bandes de tissu conjonctif, les <strong>sutures</strong> (sagittale, coronale, lambdoïde, métopique, squameuse), élargies à leurs intersections en <strong>six fontanelles</strong> : la <strong>fontanelle antérieure</strong> (bregmatique, losangique, 3 à 4 cm, entre frontaux et pariétaux, fermée vers <strong>18 mois</strong> à 2 ans ; sa palpation renseigne sur la pression intracrânienne et l'hydratation), la <strong>fontanelle postérieure</strong> (lambdatique, triangulaire, fermée à <strong>2-3 mois</strong>), et les fontanelles latérales paires (sphénoïdales ou ptériques, mastoïdiennes ou astériques, fermées à 6 mois - 2 ans). Les sutures permettent le <strong>modelage</strong> de la tête lors de l'accouchement (chevauchement des os) et la <strong>croissance</strong> rapide du crâne avec l'encéphale pendant les deux premières années (le périmètre crânien passe de 35 cm à la naissance à 47 cm à 1 an) ; elles se soudent progressivement entre 20 et 40 ans (la suture métopique dès 2 ans). Le crâne du nouveau-né est caractérisé par un <strong>neurocrâne volumineux</strong> (rapport face/crâne de 1/8, contre 1/2 chez l'adulte) et une face petite (absence de dents et de sinus) ; la face croît surtout après la naissance (dents, sinus, mastication).</p>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> la fermeture prématurée d'une suture (<strong>craniosténose</strong>) empêche la croissance du crâne perpendiculairement à cette suture et provoque une déformation compensatrice (scaphocéphalie pour la suture sagittale, la plus fréquente ; brachycéphalie pour les coronales ; trigonocéphalie pour la métopique ; plagiocéphalie pour une coronale ou une lambdoïde) ; les formes syndromiques (Crouzon, Apert, Pfeiffer, mutations de <em>FGFR2</em>) associent des anomalies faciales et des membres. À l'inverse, une fontanelle large et des sutures disjointes évoquent une hydrocéphalie, une hypothyroïdie ou un rachitisme ; une fontanelle fermée trop tôt avec un petit périmètre crânien, une microcéphalie.</div>`
            },
            {
              titre: "Malformations des membres et du squelette",
              contenu: `<p>Les malformations des membres touchent environ 1 naissance sur 500 à 1 000 ; leurs causes sont génétiques (mutations des gènes du développement, anomalies chromosomiques), tératogènes (thalidomide, alcool, acide valproïque, misoprostol, diabète) ou mécaniques (brides amniotiques, accidents vasculaires). Elles sont classées selon leur mécanisme.</p>
<table>
<thead><tr><th>Catégorie</th><th>Malformation</th><th>Mécanisme et caractéristiques</th></tr></thead>
<tbody>
<tr><td rowspan="5"><strong>Défauts de formation</strong> (réduction de membre, « méromélies »)</td><td><strong>Amélie</strong></td><td>Absence complète d'un membre (défaut d'initiation du bourgeon : Tbx, FGF10)</td></tr>
<tr><td><strong>Phocomélie</strong></td><td>Absence des segments proximaux, main ou pied directement attachés au tronc (« membre de phoque ») : défaut de la zone de progression ; typique de la <strong>thalidomide</strong> (J24-J36)</td></tr>
<tr><td><strong>Hémimélie</strong>, ectromélie</td><td>Absence d'un segment distal ou d'un rayon (agénésie du radius : syndrome de Holt-Oram, anémie de Fanconi, trisomie 18 ; agénésie du péroné, la plus fréquente des hémimélies longitudinales)</td></tr>
<tr><td><strong>Ectrodactylie</strong> (main ou pied fendu, « en pince de homard »)</td><td>Absence des rayons centraux, défaut de la crête apicale médiane (gène <em>TP63</em>)</td></tr>
<tr><td><strong>Brachydactylie</strong>, aphalangie, adactylie</td><td>Doigts courts par hypoplasie des phalanges ou des métacarpiens (gènes <em>IHH</em>, <em>BMPR1B</em>, <em>HOXD13</em>)</td></tr>
<tr><td><strong>Défauts de différenciation</strong></td><td><strong>Syndactylie</strong> (1/2 000 à 1/3 000, la plus fréquente)</td><td><strong>Défaut d'apoptose interdigitale</strong> : doigts unis par une palmure cutanée ou une fusion osseuse ; surtout 3<sup>e</sup>-4<sup>e</sup> doigts ; isolée ou syndromique (Apert, Poland) ; clinodactylie du 5<sup>e</sup> doigt dans la trisomie 21</td></tr>
<tr><td><strong>Duplications</strong></td><td><strong>Polydactylie</strong> (1/500 à 1/1 000)</td><td>Doigt surnuméraire par anomalie de l'axe antéro-postérieur (SHH, GLI3) ; <strong>postaxiale</strong> (côté ulnaire, fréquente, souvent autosomique dominante), <strong>préaxiale</strong> (pouce dupliqué, plus souvent syndromique) ; trisomie 13, Bardet-Biedl, Meckel-Gruber</td></tr>
<tr><td><strong>Anomalies par brides</strong></td><td><strong>Amputations congénitales</strong>, sillons de constriction</td><td><strong>Disruption</strong> par brides amniotiques</td></tr>
<tr><td rowspan="2"><strong>Déformations</strong></td><td><strong>Pied bot varus équin</strong> (1/1 000, garçons 2/1, bilatéral dans 50 %)</td><td>Pied en équin, varus, adduction et supination, irréductible ; origine multifactorielle ; traitement par plâtres successifs (méthode de Ponseti) ; à distinguer des déformations positionnelles réductibles</td></tr>
<tr><td><strong>Luxation congénitale de hanche</strong> (1/1 000, filles 6/1)</td><td>Cotyle peu profond et laxité capsulaire, aggravés par la position en siège, l'oligoamnios, les antécédents familiaux ; dépistage clinique systématique (Barlow, Ortolani, limitation de l'abduction), échographie à 1 mois si facteur de risque ; traitement par abduction</td></tr>
<tr><td rowspan="2"><strong>Ostéochondrodysplasies</strong> (1/4 000)</td><td><strong>Achondroplasie</strong> (1/15 000 à 1/25 000)</td><td>Mutation activatrice de <strong><em>FGFR3</em></strong> (autosomique dominante, 80 % de néomutations) inhibant la prolifération des chondrocytes du cartilage de conjugaison : <strong>nanisme à membres courts</strong> (rhizomélique), macrocrânie, ensellure nasale, mains en trident ; intelligence normale ; forme létale : dysplasie thanatophore</td></tr>
<tr><td><strong>Ostéogenèse imparfaite</strong>, dysplasie cléido-crânienne</td><td>Mutations du <strong>collagène I</strong> : fractures multiples, sclérotiques bleues ; <em>RUNX2</em> : absence de clavicules, fontanelles persistantes</td></tr>
<tr><td rowspan="2"><strong>Anomalies vertébrales et thoraciques</strong></td><td><strong>Hémivertèbre, vertèbre en papillon, bloc vertébral</strong></td><td>Défaut de formation d'un demi-sclérotome ou de segmentation : <strong>scoliose congénitale</strong> ; VACTERL ; syndrome de Klippel-Feil (fusion des vertèbres cervicales, cou court)</td></tr>
<tr><td><strong>Côte cervicale</strong> (0,5 à 1 %), <strong>pectus excavatum</strong>, fente sternale</td><td>Transformations homéotiques (gènes Hox) : la côte cervicale sur C7 peut comprimer le plexus brachial (syndrome du défilé thoraco-brachial) ; défauts de fusion des bandes sternales</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> à l'échographie du 2<sup>e</sup> trimestre, la <strong>longueur fémorale</strong> (biométrie de routine) et l'étude des quatre membres (segments, nombre de doigts, position des pieds et des mains) dépistent les anomalies de réduction, les nanismes (fémur court et courbé avec thorax étroit dans la dysplasie thanatophore), le pied bot et la polydactylie (qui, associée à d'autres anomalies, fait rechercher une trisomie 13). Une anomalie isolée des membres a un bon pronostic ; associée à d'autres malformations, elle impose un bilan génétique.</div>`
            }
          ],
          points_cles: [
            "Les bourgeons des membres supérieurs apparaissent à J26-J28 (C5-T1) et ceux des membres inférieurs à J28-J30 (L2-S2), avec une avance constante de 1 à 2 jours du membre supérieur ; la période critique s'étend de la 4e à la 8e semaine.",
            "Le squelette, les tendons et le derme du membre dérivent de la somatopleure, les muscles des myotomes (migration des myoblastes en masses dorsale et ventrale), l'épiderme de l'ectoblaste, les mélanocytes et cellules de Schwann des crêtes neurales.",
            "La crête ectodermique apicale (FGF8) commande la croissance proximo-distale, la zone d'activité polarisante postérieure (SHH, gènes Hoxd) l'axe antéro-postérieur (identité des doigts), l'ectoblaste dorsal (Wnt7a, Lmx1b) l'axe dorso-ventral ; Tbx5 spécifie le membre supérieur, Tbx4/Pitx1 l'inférieur.",
            "Les doigts se séparent par apoptose interdigitale (BMP) à J48-J51 (mains) et J52-J56 (pieds) ; un défaut d'apoptose donne la syndactylie, une anomalie de SHH/GLI3 la polydactylie.",
            "Maquette cartilagineuse à la 6e semaine, centres d'ossification primaires diaphysaires à partir de la 7e-8e semaine (clavicule la première, ossification de membrane) ; épiphyses cartilagineuses à la naissance (point de Béclard à 36 SA), cartilages de conjugaison jusqu'à 16-25 ans.",
            "Rotation de 90 degrés des membres à la 7e-8e semaine : latérale pour le membre supérieur (coude en arrière, pouce latéral, fléchisseurs antérieurs), médiale pour le membre inférieur (genou en avant, gros orteil médial, fléchisseurs postérieurs), d'où les dermatomes spiralés.",
            "Les vertèbres dérivent des sclérotomes par resegmentation (moitié caudale d'un sclérotome + moitié crâniale du suivant) : vertèbres intersegmentaires, myotomes et nerfs segmentaires, nucleus pulposus seul vestige de la notochorde ; côtes des processus costaux thoraciques, sternum des bandes sternales de la somatopleure ; identité vertébrale par les gènes Hox.",
            "Le crâne associe un neurocrâne cartilagineux (base, ossification endochondrale, mésoblaste en arrière et crêtes neurales en avant), un neurocrâne membraneux (voûte, ossification de membrane, sutures et fontanelles) et un viscérocrâne (face et osselets, crêtes neurales des arcs) ; fontanelle antérieure fermée vers 18 mois, postérieure vers 2-3 mois.",
            "Malformations : amélie, phocomélie (thalidomide J24-J36), ectrodactylie (TP63), syndactylie (défaut d'apoptose, la plus fréquente), polydactylie (SHH/GLI3, trisomie 13), brides amniotiques, pied bot varus équin (1/1 000), luxation congénitale de hanche (filles, siège), achondroplasie (FGFR3, membres courts), ostéogenèse imparfaite (collagène I), hémivertèbres, côte cervicale, craniosténoses (FGFR2)."
          ],
          lexique: [
            { terme: "Bourgeon de membre", def: "Saillie de la paroi latérale du corps apparaissant à J26-J28 (supérieur) et J28-J30 (inférieur), formée de mésenchyme somatopleural recouvert d'ectoblaste, colonisée par les myoblastes des somites." },
            { terme: "Crête ectodermique apicale", def: "Épaississement ectoblastique du bord distal du bourgeon sécrétant les FGF qui maintiennent la prolifération de la zone de progression et commandent la croissance proximo-distale." },
            { terme: "Zone d'activité polarisante", def: "Amas de mésenchyme du bord postérieur du bourgeon sécrétant Sonic Hedgehog, qui détermine l'axe antéro-postérieur et l'identité des doigts." },
            { terme: "Apoptose interdigitale", def: "Mort cellulaire programmée (BMP) du mésenchyme entre les rayons digitaux individualisant les doigts (J48-J51) et les orteils (J52-J56) ; son défaut donne la syndactylie." },
            { terme: "Ossification endochondrale", def: "Ossification remplaçant une maquette cartilagineuse (os longs, base du crâne, vertèbres), à partir de centres primaires diaphysaires puis secondaires épiphysaires." },
            { terme: "Ossification membraneuse", def: "Ossification directe du mésenchyme sans stade cartilagineux (voûte du crâne, os de la face, mandibule, clavicule en partie)." },
            { terme: "Resegmentation", def: "Fusion de la moitié caudale d'un sclérotome avec la moitié crâniale du sclérotome suivant, rendant les vertèbres intersegmentaires par rapport aux myotomes et aux nerfs." },
            { terme: "Fontanelle", def: "Espace conjonctif entre les os de la voûte du crâne à la naissance ; la fontanelle antérieure se ferme vers 18 mois, la postérieure vers 2-3 mois." },
            { terme: "Phocomélie", def: "Absence des segments proximaux d'un membre, la main ou le pied étant attaché directement au tronc ; typique de l'embryopathie à la thalidomide." },
            { terme: "Achondroplasie", def: "Nanisme à membres courts par mutation activatrice de FGFR3 inhibant la croissance du cartilage de conjugaison ; autosomique dominant, néomutations fréquentes." }
          ],
          qcm: [
            {
              q: "Concernant les bourgeons des membres :",
              options: [
                "A. Les bourgeons des membres supérieurs apparaissent avant ceux des membres inférieurs.",
                "B. Le squelette des membres dérive des sclérotomes.",
                "C. Les muscles des membres dérivent de myoblastes ayant migré depuis les somites.",
                "D. Les bourgeons des membres supérieurs se forment en regard des somites C5 à T1.",
                "E. Les membres ont leur forme définitive à la fin de la 8e semaine."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : le squelette des membres dérive de la somatopleure (mésoblaste latéral) ; les sclérotomes donnent le squelette axial."
            },
            {
              q: "Concernant les centres de signalisation du membre :",
              options: [
                "A. La crête ectodermique apicale sécrète des FGF et commande la croissance proximo-distale.",
                "B. La zone d'activité polarisante est située au bord antérieur (préaxial) du bourgeon.",
                "C. Sonic Hedgehog détermine l'identité des doigts selon l'axe antéro-postérieur.",
                "D. Wnt7a, exprimé par l'ectoblaste dorsal, spécifie le caractère dorsal du membre.",
                "E. L'ablation de la crête ectodermique apicale entraîne une duplication des doigts."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : la ZPA est au bord postérieur (postaxial) du bourgeon. E est fausse : l'ablation de la crête arrête la croissance (membre tronqué) ; la duplication des doigts résulte d'une greffe de ZPA ou d'une anomalie de la voie SHH."
            },
            {
              q: "Concernant le squelette des membres et leur rotation :",
              options: [
                "A. La maquette cartilagineuse du membre est constituée à la fin de la 6e semaine.",
                "B. La clavicule est le premier os à s'ossifier.",
                "C. Les épiphyses des os longs sont entièrement ossifiées à la naissance.",
                "D. Le membre supérieur subit une rotation latérale plaçant le pouce en position latérale.",
                "E. Le membre inférieur subit une rotation médiale plaçant le genou vers l'avant."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : les épiphyses sont encore cartilagineuses à la naissance, à l'exception de quelques points (Béclard, Todt)."
            },
            {
              q: "Concernant le squelette axial :",
              options: [
                "A. Chaque vertèbre dérive de la fusion de la moitié caudale d'un sclérotome et de la moitié crâniale du sclérotome suivant.",
                "B. Les nerfs rachidiens sortent au milieu des corps vertébraux.",
                "C. Le nucleus pulposus est un vestige de la notochorde.",
                "D. Les côtes dérivent des processus costaux des sclérotomes thoraciques.",
                "E. Le sternum dérive des sclérotomes."
              ],
              bonnes: [0, 2, 3],
              explication: "A, C et D sont vraies. B est fausse : les nerfs passent entre deux vertèbres (foramens intervertébraux) ; ce sont les artères intersegmentaires qui passent au milieu des corps. E est fausse : le sternum dérive des bandes sternales de la somatopleure."
            },
            {
              q: "Concernant le crâne :",
              options: [
                "A. La base du crâne s'ossifie par ossification endochondrale.",
                "B. La voûte du crâne s'ossifie par ossification membraneuse.",
                "C. Les os de la face dérivent des crêtes neurales.",
                "D. La fontanelle antérieure se ferme vers l'âge de 2 à 3 mois.",
                "E. La craniosténose de la suture sagittale donne une scaphocéphalie."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : la fontanelle antérieure se ferme vers 18 mois à 2 ans ; c'est la postérieure qui se ferme à 2-3 mois."
            },
            {
              q: "Concernant les malformations des membres :",
              options: [
                "A. La syndactylie résulte d'un défaut d'apoptose interdigitale.",
                "B. La phocomélie est caractéristique de l'embryopathie à la thalidomide.",
                "C. La polydactylie postaxiale correspond à un doigt surnuméraire du côté du pouce.",
                "D. L'achondroplasie est due à une mutation activatrice de FGFR3.",
                "E. La luxation congénitale de hanche est plus fréquente chez la fille et en cas de présentation du siège."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : la polydactylie postaxiale est du côté ulnaire (petit doigt) ; le pouce surnuméraire définit la polydactylie préaxiale."
            }
          ]
        },
        {
          id: "organes-sens-peau",
          titre: "Développement des organes des sens et de la peau",
          duree: 40,
          objectifs: [
            "Décrire le développement de l'œil : vésicule et cupule optiques, rétine, nerf optique, cristallin, cornée, uvée, sclère, paupières, et l'origine embryologique de chaque structure.",
            "Décrire le développement de l'oreille interne (placode et vésicule otiques), de l'oreille moyenne (1re poche, osselets des arcs) et de l'oreille externe (1re fente, monticules auriculaires).",
            "Connaître les principales malformations oculaires et auditives (colobome, cataracte congénitale, microphtalmie, surdités, microtie, atrésie du conduit).",
            "Décrire la formation de l'épiderme, du derme et des annexes cutanées (poils, glandes sébacées et sudoripares, ongles, glande mammaire) et leur chronologie.",
            "Connaître les principales anomalies cutanées congénitales (ichtyoses, albinisme, épidermolyses, polythélie, mamelons surnuméraires)."
          ],
          sections: [
            {
              titre: "L'œil : vésicule optique, cupule et cristallin",
              contenu: `<p>L'œil a une <strong>triple origine</strong> : le <strong>neuroectoblaste</strong> (diencéphale) donne la rétine, l'épithélium pigmentaire, le nerf optique et les muscles de l'iris ; l'<strong>ectoblaste de surface</strong> donne le cristallin, l'épithélium de la cornée, de la conjonctive et des paupières et les glandes lacrymales ; le <strong>mésenchyme</strong>, en grande partie issu des <strong>crêtes neurales</strong> (avec une contribution mésoblastique pour les vaisseaux et les muscles extrinsèques), donne la sclère, le stroma de la cornée, l'uvée (choroïde, corps ciliaire, stroma de l'iris), le corps vitré et les vaisseaux.</p>
<h4>La vésicule optique (J22-J28)</h4>
<p>Dès <strong>J22</strong>, deux <strong>sillons optiques</strong> apparaissent sur les parois latérales du <strong>prosencéphale</strong> (futur diencéphale) et s'évaginent en <strong>vésicules optiques</strong> (J25-J28), reliées au diencéphale par le <strong>pédicule optique</strong> creux. La vésicule optique vient au contact de l'<strong>ectoblaste de surface</strong>, qu'elle <strong>induit</strong> à s'épaissir en <strong>placode cristallinienne</strong> (J28 ; induction réciproque ; gènes PAX6, SOX2).</p>
<h4>La cupule optique et la fissure optique (5<sup>e</sup>-6<sup>e</sup> semaine)</h4>
<p>La vésicule optique s'<strong>invagine</strong> (5<sup>e</sup> semaine) et se transforme en <strong>cupule optique</strong> (calice optique) à double paroi :</p>
<ul>
<li>la <strong>paroi externe</strong>, mince, devient l'<strong>épithélium pigmentaire</strong> de la rétine (pigmentation dès la 5<sup>e</sup> semaine : le pigment de l'œil n'est pas d'origine mélanocytaire mais neuroectoblastique) ;</li>
<li>la <strong>paroi interne</strong>, épaisse, devient la <strong>rétine neurale</strong> (neurorétine) : couche de photorécepteurs (cônes et bâtonnets), neurones bipolaires, cellules ganglionnaires dont les axones forment le nerf optique, cellules horizontales, amacrines et gliales de Müller ; l'organisation en couches s'effectue du 3<sup>e</sup> au 8<sup>e</sup> mois, la <strong>macula</strong> (fovéa) ne se différencie qu'après la naissance (vision précise vers 4-6 mois) ;</li>
<li>entre les deux persiste l'<strong>espace intrarétinien</strong> (reste de la lumière de la vésicule), qui disparaît par accolement des deux couches (sans fusion véritable : plan de clivage du <strong>décollement de rétine</strong>).</li>
</ul>
<p>La partie antérieure de la cupule, mince, donne les deux épithéliums (pigmentés) de l'<strong>iris</strong> et du <strong>corps ciliaire</strong> (partie « aveugle » de la rétine, pars iridica et pars ciliaris retinae) ; le bord de la cupule forme le <strong>bord pupillaire</strong> ; les <strong>muscles sphincter et dilatateur de la pupille</strong> dérivent de l'épithélium de la cupule, et sont donc d'origine <strong>neuroectoblastique</strong> (seuls muscles de cette origine avec le myoépithélium de l'iris). L'invagination est oblique et se prolonge sur la face inférieure de la cupule et du pédicule par une gouttière, la <strong>fissure optique</strong> (fente colobomique, fissure choroïdienne), par laquelle le <strong>mésenchyme</strong> et l'<strong>artère hyaloïde</strong> (branche de l'artère ophtalmique) pénètrent dans la cupule pour vasculariser le cristallin et le vitré primitif. La fissure se <strong>ferme à la 7<sup>e</sup> semaine</strong> (fin de la 6<sup>e</sup>) ; un défaut de fermeture donne le <strong>colobome</strong>.</p>
<h4>Le cristallin</h4>
<p>La <strong>placode cristallinienne</strong> s'invagine (J29-J31) en <strong>fossette</strong> puis en <strong>vésicule cristallinienne</strong> (J33-J35), qui se détache de l'ectoblaste et se loge dans l'ouverture de la cupule. Les cellules de sa <strong>paroi postérieure</strong> s'allongent vers l'avant, perdent noyau et organites et se remplissent de <strong>cristallines</strong> : ce sont les <strong>fibres primaires</strong>, qui comblent la vésicule (7<sup>e</sup> semaine). Les cellules de la <strong>paroi antérieure</strong> restent cubiques (<strong>épithélium cristallinien</strong>) et, à l'<strong>équateur</strong>, produisent toute la vie des <strong>fibres secondaires</strong> en couches concentriques (le cristallin ne perd jamais ses cellules, d'où la cataracte sénile). Il est entouré d'une <strong>capsule</strong> et nourri pendant la vie fœtale par la <strong>tunique vasculaire du cristallin</strong>, issue de l'artère hyaloïde (dont la partie antérieure forme la <strong>membrane pupillaire</strong>), qui régresse au 7<sup>e</sup>-8<sup>e</sup> mois en laissant le canal hyaloïde dans le vitré.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la rétine (y compris l'épithélium pigmentaire), le nerf optique et les muscles de l'iris dérivent du <strong>diencéphale</strong> (neuroectoblaste) ; le cristallin et l'épithélium cornéen de l'<strong>ectoblaste de surface</strong> ; sclère, stroma cornéen, choroïde et vitré du mésenchyme des <strong>crêtes neurales</strong>. La fissure optique se ferme à la 7<sup>e</sup> semaine.</div>`
            },
            {
              titre: "L'œil : nerf optique, enveloppes, cornée, paupières et anomalies",
              contenu: `<h4>Le nerf optique</h4>
<p>Les axones des <strong>cellules ganglionnaires</strong> de la rétine convergent vers le pédicule optique, cheminent dans sa paroi (avec l'artère hyaloïde devenue <strong>artère centrale de la rétine</strong>) et oblitèrent sa lumière : le pédicule devient le <strong>nerf optique</strong> (8<sup>e</sup> semaine), en réalité un <strong>faisceau de substance blanche du SNC</strong> (méninges, oligodendrocytes, pas de régénération). Les fibres nasales croisent au <strong>chiasma</strong> (7<sup>e</sup> semaine).</p>
<h4>Les enveloppes et la cornée</h4>
<p>Le <strong>mésenchyme</strong> entourant la cupule (crêtes neurales surtout) se différencie en deux couches comparables aux méninges : une couche interne vasculaire, la <strong>choroïde</strong>, poursuivie en avant par le <strong>stroma du corps ciliaire</strong> (muscle ciliaire) et le <strong>stroma de l'iris</strong> ; une couche externe fibreuse, la <strong>sclère</strong>, poursuivie en avant par le <strong>stroma de la cornée</strong>. La <strong>chambre antérieure</strong> se forme par une fente dans le mésenchyme entre cristallin et ectoblaste (7<sup>e</sup> semaine) ; la <strong>chambre postérieure</strong> se creuse entre l'iris et le cristallin. Le <strong>corps vitré</strong> dérive du mésenchyme entré par la fissure (vitré primaire) puis d'une sécrétion rétinienne (vitré secondaire). L'<strong>angle irido-cornéen</strong> et le canal de Schlemm se forment au 6<sup>e</sup>-7<sup>e</sup> mois ; leur défaut donne le glaucome congénital. La <strong>cornée</strong> comporte un <strong>épithélium</strong> ectoblastique, un <strong>stroma</strong> et un <strong>endothélium</strong> d'origine crête neurale, dont la transparence est acquise par déshydratation au 4<sup>e</sup> mois.</p>
<h4>Les annexes</h4>
<p>Les <strong>paupières</strong> se forment à la 6<sup>e</sup>-7<sup>e</sup> semaine par deux replis d'ectoblaste et de mésenchyme ; elles <strong>fusionnent</strong> à la <strong>10<sup>e</sup> semaine</strong> et restent closes jusqu'au <strong>7<sup>e</sup> mois</strong> (26<sup>e</sup>-28<sup>e</sup> semaine), période de différenciation des cils, des glandes de Meibomius et de la conjonctive. Les <strong>glandes lacrymales</strong> bourgeonnent de l'ectoblaste du cul-de-sac supéro-latéral (8<sup>e</sup> semaine) et ne sont fonctionnelles que 6 semaines après la naissance. Le <strong>canal naso-lacrymal</strong> dérive du cordon ectoblastique du sillon naso-lacrymal ; son imperforation distale est fréquente (larmoiement du nourrisson, 5 %, résolutif avant 1 an). Les <strong>muscles extrinsèques</strong> dérivent du mésoblaste para-axial préotique (III, IV, VI). Les yeux, initialement latéraux, se rapprochent vers l'avant avec la croissance de la face.</p>
<h4>Anomalies du développement oculaire</h4>
<table>
<thead><tr><th>Anomalie</th><th>Mécanisme</th><th>Remarques</th></tr></thead>
<tbody>
<tr><td><strong>Colobome</strong></td><td>Défaut de fermeture de la <strong>fissure optique</strong> (7<sup>e</sup> semaine) : fente <strong>inféro-nasale</strong> de l'iris (pupille en trou de serrure), de la rétine, de la choroïde ou du nerf optique</td><td>Isolé ou syndromique (CHARGE, trisomie 13)</td></tr>
<tr><td><strong>Cataracte congénitale</strong> (1/2 000)</td><td>Opacification du cristallin : <strong>rubéole</strong> (6<sup>e</sup>-7<sup>e</sup> semaine), toxoplasmose, galactosémie, mutations des cristallines, trisomie 21</td><td>Leucocorie ; chirurgie précoce pour éviter l'amblyopie</td></tr>
<tr><td><strong>Microphtalmie, anophtalmie, aniridie</strong></td><td>Défaut de développement de la vésicule optique (<em>SOX2</em>, <em>OTX2</em>), infections, alcool ; aniridie par mutation de <strong><em>PAX6</em></strong>, gène maître de l'œil (syndrome WAGR)</td><td>Souvent associées à un colobome ou une cataracte</td></tr>
<tr><td><strong>Glaucome congénital</strong></td><td>Anomalie de l'angle irido-cornéen et du drainage de l'humeur aqueuse ; rubéole</td><td>Buphtalmie, larmoiement, photophobie</td></tr>
<tr><td><strong>Cyclopie</strong></td><td>Défaut de séparation des champs optiques (holoprosencéphalie, SHH)</td><td>Létale</td></tr>
<tr><td><strong>Persistance de la membrane pupillaire</strong> ou de l'artère hyaloïde</td><td>Défaut de régression du système vasculaire hyaloïde</td><td>Le plus souvent sans conséquence</td></tr>
<tr><td><strong>Rétinopathie du prématuré</strong></td><td>Vascularisation rétinienne inachevée (elle progresse jusqu'au 8<sup>e</sup> mois), néovascularisation sous l'effet de l'oxygène</td><td>Dépistage par fond d'œil avant 31 SA</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège du concours :</strong> l'<strong>épithélium pigmentaire</strong> de la rétine est neuroectoblastique (paroi externe de la cupule), alors que les mélanocytes de la choroïde et du stroma irien dérivent des <strong>crêtes neurales</strong> ; le <strong>cristallin</strong> est le seul dérivé ectoblastique profond de l'œil ; les <strong>muscles de l'iris</strong> sont neuroectoblastiques ; le <strong>nerf optique</strong> est une voie du SNC (oligodendrocytes, méninges), non un nerf périphérique.</div>`
            },
            {
              titre: "L'oreille interne",
              contenu: `<p>L'oreille a une triple origine : l'<strong>oreille interne</strong> dérive de l'<strong>ectoblaste</strong> (placode otique) ; l'<strong>oreille moyenne</strong> de l'<strong>entoblaste</strong> (1<sup>re</sup> poche) pour sa cavité et des <strong>arcs pharyngiens</strong> pour ses osselets ; l'<strong>oreille externe</strong> de l'<strong>ectoblaste</strong> (1<sup>re</sup> fente) et du mésenchyme des 1<sup>er</sup> et 2<sup>e</sup> arcs. L'oreille interne est le premier organe sensoriel achevé (taille adulte au 5<sup>e</sup> mois).</p>
<h4>De la placode à la vésicule otique (J22-J30)</h4>
<p>Vers <strong>J22</strong>, l'ectoblaste de surface s'épaissit de chaque côté du rhombencéphale (au niveau des rhombomères 5-6), sous l'induction du tube neural et du mésoderme (FGF3, FGF10) : c'est la <strong>placode otique</strong> (auditive). Elle s'<strong>invagine</strong> en <strong>fossette otique</strong> (J24-J26), puis se ferme et se détache de l'ectoblaste en une <strong>vésicule otique</strong> (otocyste) à la fin de la <strong>4<sup>e</sup> semaine</strong> (J28-J30), logée dans le mésenchyme à côté du rhombencéphale. Des cellules se détachent de sa paroi ventrale et, avec des cellules des crêtes neurales, forment le <strong>ganglion statoacoustique</strong> (vestibulo-cochléaire, nerf VIII), qui se divise en ganglion vestibulaire et ganglion spiral (cochléaire).</p>
<h4>Le labyrinthe membraneux (5<sup>e</sup> semaine au 3<sup>e</sup> mois)</h4>
<p>La vésicule otique s'allonge et se divise par un étranglement en deux parties, reliées par le canal utriculo-sacculaire :</p>
<ul>
<li>la partie <strong>dorsale</strong> (utriculaire, pars superior) donne l'<strong>utricule</strong>, les <strong>trois canaux semi-circulaires</strong> (6<sup>e</sup>-8<sup>e</sup> semaine : trois évaginations aplaties dont les parois centrales s'accolent et se résorbent, laissant un canal périphérique avec une ampoule ; le canal antérieur et le postérieur d'abord, le latéral en dernier) et le <strong>canal endolymphatique</strong> (prolongement dorso-médial avec le sac endolymphatique) ;</li>
<li>la partie <strong>ventrale</strong> (sacculaire, pars inferior) donne le <strong>saccule</strong> et, par un diverticule tubulaire qui s'allonge et s'enroule, le <strong>canal cochléaire</strong> : il effectue <strong>2,5 tours de spire</strong> à la <strong>8<sup>e</sup> semaine</strong> et reste relié au saccule par le <strong>ductus reuniens</strong> (canal de Hensen).</li>
</ul>
<p>Les <strong>épithéliums sensoriels</strong> se différencient à partir de l'épithélium de la vésicule : <strong>macules</strong> de l'utricule et du saccule (gravité, accélérations linéaires, avec les otolithes), <strong>crêtes ampullaires</strong> des canaux semi-circulaires (accélérations angulaires), et <strong>organe spiral de Corti</strong> dans le canal cochléaire (cellules ciliées internes et externes, cellules de soutien, membrane tectoriale ; différenciation de la base vers l'apex entre la 10<sup>e</sup> et la 20<sup>e</sup> semaine ; les cellules ciliées, qui ne se renouvellent pas, sont au complet dès la naissance). Le canal cochléaire est séparé des rampes périlymphatiques par la <strong>membrane vestibulaire</strong> (de Reissner) et la <strong>membrane basilaire</strong>. L'oreille interne est <strong>fonctionnelle vers 24-26 SA</strong> : le fœtus entend.</p>
<h4>Le labyrinthe osseux</h4>
<p>Le mésenchyme entourant le labyrinthe membraneux se condense en <strong>capsule otique cartilagineuse</strong> ; au 3<sup>e</sup> mois, le cartilage au contact de l'épithélium se résorbe, créant l'<strong>espace périlymphatique</strong>, tandis que la capsule s'ossifie (4<sup>e</sup>-6<sup>e</sup> mois) en <strong>labyrinthe osseux</strong>, incorporé dans la partie pétreuse du temporal ; il a sa taille définitive au 5<sup>e</sup>-6<sup>e</sup> mois (ce qui autorise les implants cochléaires précoces).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> placode otique à J22 (ectoblaste, rhombencéphale), vésicule otique à J28-J30 ; partie dorsale -> utricule, canaux semi-circulaires, canal endolymphatique ; partie ventrale -> saccule et canal cochléaire (2,5 tours à 8 semaines) ; organe de Corti différencié de 10 à 20 semaines ; audition fonctionnelle à 24-26 SA ; labyrinthe osseux par ossification de la capsule otique après résorption péri-épithéliale.</div>`
            },
            {
              titre: "Oreille moyenne, oreille externe et surdités congénitales",
              contenu: `<h4>L'oreille moyenne</h4>
<p>La <strong>cavité tympanique</strong> (caisse du tympan) et la <strong>trompe auditive</strong> dérivent de la <strong>1<sup>re</sup> poche pharyngienne</strong> (entoblaste), dont l'extrémité se dilate en <strong>récessus tubo-tympanique</strong> au contact de la 1<sup>re</sup> fente. Les <strong>osselets</strong> se forment dans le mésenchyme (crêtes neurales) des arcs au-dessus de ce récessus : <strong>marteau</strong> et <strong>enclume</strong> du <strong>1<sup>er</sup> arc</strong> (cartilage de Meckel), <strong>étrier</strong> du <strong>2<sup>e</sup> arc</strong> (cartilage de Reichert), avec leurs muscles (<strong>tenseur du tympan</strong>, V ; <strong>stapédien</strong>, VII). Ossifiés dès le 4<sup>e</sup> mois (seuls os de taille adulte à la naissance), ils restent noyés dans le mésenchyme jusqu'au <strong>8<sup>e</sup> mois</strong>, où celui-ci se résorbe : l'épithélium entoblastique de la caisse les enveloppe et ils deviennent libres dans la cavité. L'<strong>antre mastoïdien</strong> apparaît en fin de vie fœtale, les cellules mastoïdiennes après la naissance. La <strong>membrane du tympan</strong> a une <strong>triple origine</strong> : couche externe <strong>ectoblastique</strong> (1<sup>re</sup> fente), couche moyenne <strong>mésenchymateuse</strong>, couche interne <strong>entoblastique</strong> (1<sup>re</sup> poche).</p>
<h4>L'oreille externe</h4>
<p>Le <strong>méat acoustique externe</strong> dérive de la <strong>1<sup>re</sup> fente pharyngienne</strong> (ectoblaste) ; au 3<sup>e</sup> mois, l'épithélium de son fond prolifère et <strong>oblitère</strong> le conduit (<strong>bouchon méatal</strong>), qui se <strong>recanalise</strong> au <strong>7<sup>e</sup> mois</strong> (sa persistance donne une atrésie du conduit). Le <strong>pavillon</strong> se forme à partir de <strong>six monticules auriculaires</strong> (6<sup>e</sup> semaine), trois sur le <strong>1<sup>er</sup> arc</strong> (tragus, racine de l'hélix, hélix) et trois sur le <strong>2<sup>e</sup> arc</strong> (anthélix, antitragus, lobule), qui fusionnent au 3<sup>e</sup> mois. Les oreilles, initialement <strong>basses</strong>, remontent avec la croissance de la mandibule ; des oreilles bas implantées témoignent d'un retard du 1<sup>er</sup> arc (trisomies, syndromes du 1<sup>er</sup> arc).</p>
<table>
<thead><tr><th>Partie de l'oreille</th><th>Structure</th><th>Origine</th></tr></thead>
<tbody>
<tr><td rowspan="3"><strong>Interne</strong></td><td>Labyrinthe membraneux (utricule, saccule, canaux semi-circulaires, cochlée, épithéliums sensoriels)</td><td>Ectoblaste (placode otique)</td></tr>
<tr><td>Ganglions vestibulaire et spiral (VIII)</td><td>Placode otique + crêtes neurales</td></tr>
<tr><td>Labyrinthe osseux, périlymphe</td><td>Mésenchyme (capsule otique : crêtes neurales et mésoblaste)</td></tr>
<tr><td rowspan="3"><strong>Moyenne</strong></td><td>Caisse du tympan, trompe auditive, épithélium interne du tympan</td><td>Entoblaste (1<sup>re</sup> poche)</td></tr>
<tr><td>Marteau, enclume, tenseur du tympan (V)</td><td>1<sup>er</sup> arc (cartilage de Meckel, crêtes neurales ; muscle mésoblastique)</td></tr>
<tr><td>Étrier, muscle stapédien (VII)</td><td>2<sup>e</sup> arc (cartilage de Reichert)</td></tr>
<tr><td rowspan="2"><strong>Externe</strong></td><td>Conduit auditif externe, épithélium externe du tympan</td><td>Ectoblaste (1<sup>re</sup> fente)</td></tr>
<tr><td>Pavillon</td><td>Six monticules auriculaires des 1<sup>er</sup> et 2<sup>e</sup> arcs</td></tr>
</tbody>
</table>
<h4>Les surdités congénitales</h4>
<p>La <strong>surdité</strong> congénitale touche <strong>1 à 2 nouveau-nés sur 1 000</strong>, d'où le <strong>dépistage néonatal universel</strong> (otoémissions acoustiques ou potentiels évoqués auditifs automatisés). On distingue :</p>
<ul>
<li>les <strong>surdités de perception</strong> (80 %), par atteinte de l'oreille interne ou du nerf : <strong>génétiques</strong> (60 à 70 % : mutations de la <strong>connexine 26</strong>, gène <em>GJB2</em>, cause la plus fréquente ; syndromes de <strong>Waardenburg</strong>, de Pendred, d'Usher, branchio-oto-rénal) ou <strong>acquises</strong> : <strong>CMV</strong> congénital (première cause non génétique), rubéole, toxoplasmose, aminosides, prématurité, anoxie ; malformations du labyrinthe (dysplasie de Mondini) ;</li>
<li>les <strong>surdités de transmission</strong> (20 %), par atteinte de l'oreille moyenne ou externe : atrésie du conduit (bouchon méatal persistant), <strong>microtie</strong> et anotie (défaut des monticules ; isotrétinoïne, thalidomide), malformations ou <strong>fixation des osselets</strong> (syndromes du 1<sup>er</sup> et du 2<sup>e</sup> arc : Treacher Collins, microsomie hémifaciale), otite séreuse des fentes palatines. Les <strong>appendices et fistules pré-auriculaires</strong> (0,5 à 1 %) sont des reliquats des monticules ou de la 1<sup>re</sup> fente, parfois associés à des anomalies rénales.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> le dépistage de la surdité à la naissance permet un appareillage ou un <strong>implant cochléaire</strong> avant 1 an, période critique pour le développement du langage ; l'implant est possible dès 10-12 mois parce que la cochlée a sa taille adulte dès le 5<sup>e</sup> mois fœtal. Toute surdité de perception congénitale fait rechercher une infection à <strong>CMV</strong> (PCR sur le sang séché du test de Guthrie) et une mutation de <em>GJB2</em>.</div>`
            },
            {
              titre: "La peau : épiderme, derme et annexes",
              contenu: `<h4>L'épiderme (ectoblaste)</h4>
<p>L'<strong>épiderme</strong> dérive de l'<strong>ectoblaste de surface</strong>, initialement une couche unique de cellules cubiques. Vers la <strong>5<sup>e</sup>-6<sup>e</sup> semaine</strong>, celle-ci se divise en deux couches : une couche basale germinative et une couche superficielle aplatie, le <strong>périderme</strong> (épitrichium), couche transitoire de cellules qui échangent avec le liquide amniotique et desquament progressivement jusqu'au 5<sup>e</sup>-6<sup>e</sup> mois (elles participent au <strong>vernix caseosa</strong>). Au cours du <strong>3<sup>e</sup>-4<sup>e</sup> mois</strong>, la couche basale prolifère et donne une couche intermédiaire, puis l'épiderme acquiert sa <strong>stratification définitive</strong> (couches basale, spineuse, granuleuse, cornée) avec <strong>kératinisation</strong> à partir du <strong>5<sup>e</sup>-6<sup>e</sup> mois</strong> ; la barrière cutanée est fonctionnelle vers 34 SA (le grand prématuré a une peau très perméable). La prolifération de la couche basale forme les <strong>crêtes épidermiques</strong> (3<sup>e</sup>-4<sup>e</sup> mois), responsables des <strong>empreintes digitales</strong> (dermatoglyphes, définitives dès le 5<sup>e</sup> mois et génétiquement déterminées : pli palmaire transverse unique de la trisomie 21). L'épiderme est colonisé par trois populations cellulaires venues d'ailleurs :</p>
<ul>
<li>les <strong>mélanocytes</strong>, dérivés des <strong>crêtes neurales</strong> (mélanoblastes migrant par la voie dorso-latérale, atteignant l'épiderme à la 6<sup>e</sup>-8<sup>e</sup> semaine) : ils synthétisent la mélanine (tyrosinase) à partir du 4<sup>e</sup>-5<sup>e</sup> mois et la transfèrent aux kératinocytes ; la pigmentation s'accentue après la naissance ; des amas de mélanocytes dermiques persistants forment la <strong>tache mongoloïde</strong> lombo-sacrée ;</li>
<li>les <strong>cellules de Langerhans</strong>, cellules présentatrices d'antigène d'origine <strong>hématopoïétique</strong>, arrivées vers la 7<sup>e</sup> semaine ;</li>
<li>les <strong>cellules de Merkel</strong> (mécanorécepteurs), d'origine ectoblastique, apparues au 3<sup>e</sup>-4<sup>e</sup> mois.</li>
</ul>
<h4>Le derme et l'hypoderme (mésenchyme)</h4>
<p>Le <strong>derme</strong> dérive du <strong>mésenchyme</strong> sous-jacent : du <strong>dermatome</strong> des somites pour le derme du <strong>dos</strong>, de la <strong>somatopleure</strong> pour le derme des parois ventro-latérales et des <strong>membres</strong>, et des <strong>crêtes neurales</strong> pour le derme de la <strong>face et du cou</strong>. Les fibroblastes synthétisent le collagène et l'élastine dès le 3<sup>e</sup> mois ; les <strong>papilles dermiques</strong> s'engrènent avec les crêtes épidermiques. L'<strong>hypoderme</strong> (graisse blanche de réserve, graisse brune de la nuque et du dos) se constitue au 3<sup>e</sup> trimestre : la peau du fœtus, rouge et translucide jusqu'au 6<sup>e</sup> mois, devient lisse et rose à terme.</p>
<h4>Les annexes épidermiques</h4>
<p>Toutes les annexes se forment par <strong>bourgeonnement de l'épiderme dans le derme</strong>, sous l'effet d'inductions réciproques épiderme-mésenchyme (Wnt, SHH, BMP, EDA) :</p>
<table>
<thead><tr><th>Annexe</th><th>Formation</th><th>Chronologie</th></tr></thead>
<tbody>
<tr><td><strong>Poils</strong></td><td>Bourgeon épidermique plein (germe pileux) s'enfonçant dans le derme, dont le <strong>bulbe</strong> coiffe une <strong>papille dermique</strong> ; les cellules de la matrice prolifèrent et se kératinisent en <strong>tige pilaire</strong>, colorée par les mélanocytes du bulbe ; le <strong>muscle arrecteur</strong> dérive du mésenchyme</td><td>Premiers germes au 3<sup>e</sup> mois (sourcils, lèvre, menton), généralisés au 4<sup>e</sup> ; <strong>lanugo</strong> (duvet fin) à partir du 5<sup>e</sup> mois, perdu avant la naissance et remplacé par le vellus puis les poils terminaux</td></tr>
<tr><td><strong>Glandes sébacées</strong></td><td>Bourgeon latéral de la gaine du follicule pileux (holocrines) ; glandes libres des lèvres, paupières, aréoles</td><td>4<sup>e</sup>-5<sup>e</sup> mois ; actives in utero (sébum du vernix caseosa) puis quiescentes jusqu'à la puberté</td></tr>
<tr><td><strong>Glandes sudoripares eccrines</strong></td><td>Bourgeon épidermique indépendant des poils, pelotonné en glomérule ; cellules sécrétrices et myoépithéliales ectoblastiques</td><td>Paumes et plantes au 4<sup>e</sup> mois, reste du corps au 5<sup>e</sup> ; sudation immature chez le nouveau-né</td></tr>
<tr><td><strong>Glandes sudoripares apocrines</strong></td><td>Bourgeon du follicule pileux s'ouvrant dans le canal pilaire (aisselles, aréoles, pubis, cérumineuses)</td><td>5<sup>e</sup>-6<sup>e</sup> mois ; fonctionnelles à la puberté</td></tr>
<tr><td><strong>Ongles</strong></td><td><strong>Champ unguéal</strong> dorsal (Lmx1b) bordé de replis ; la <strong>matrice</strong> produit la <strong>tablette unguéale</strong> qui glisse sur le lit</td><td>Champs au 3<sup>e</sup> mois (doigts), 4<sup>e</sup> (orteils) ; la tablette atteint l'extrémité du doigt au 8<sup>e</sup> mois et de l'orteil à terme (critère de maturité)</td></tr>
<tr><td><strong>Glande mammaire</strong></td><td>Glande apocrine modifiée : <strong>crêtes mammaires</strong> (lignes lactées) ectoblastiques de l'aisselle à l'aine (4<sup>e</sup>-5<sup>e</sup> semaine), régressant sauf en région pectorale ; le bourgeon primaire émet 15 à 25 <strong>bourgeons secondaires</strong> (5<sup>e</sup> mois) creusés en canaux galactophores s'ouvrant dans la <strong>fossette mammaire</strong>, évaginée en <strong>mamelon</strong> à la naissance</td><td>Identique dans les deux sexes jusqu'à la puberté ; tuméfaction néonatale transitoire sous l'effet des œstrogènes maternels</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> épiderme et toutes ses annexes (poils, glandes sébacées, sudoripares, mammaires, ongles) = <strong>ectoblaste</strong> ; mélanocytes = <strong>crêtes neurales</strong> ; cellules de Langerhans = <strong>moelle osseuse</strong> ; derme = <strong>dermatome</strong> (dos), <strong>somatopleure</strong> (ventre, membres), <strong>crêtes neurales</strong> (face). Périderme transitoire, kératinisation au 5<sup>e</sup>-6<sup>e</sup> mois, lanugo au 5<sup>e</sup> mois.</div>`
            },
            {
              titre: "Anomalies congénitales de la peau et des annexes",
              contenu: `<table>
<thead><tr><th>Anomalie</th><th>Mécanisme</th><th>Caractéristiques</th></tr></thead>
<tbody>
<tr><td><strong>Ichtyoses congénitales</strong></td><td>Anomalies génétiques de la kératinisation (filaggrine, transglutaminase 1, stéroïde sulfatase)</td><td>Peau sèche « en écailles de poisson » ; formes sévères : bébé collodion, ichtyose arlequin</td></tr>
<tr><td><strong>Épidermolyses bulleuses</strong></td><td>Mutations des protéines de la jonction dermo-épidermique (kératines 5 et 14, laminine 332, collagène VII)</td><td>Bulles au moindre frottement dès la naissance</td></tr>
<tr><td><strong>Albinisme oculo-cutané</strong> (1/17 000)</td><td>Déficit de synthèse de la mélanine (<strong>tyrosinase</strong>), mélanocytes présents ; autosomique récessif</td><td>Peau et cheveux blancs, iris translucide, nystagmus, baisse d'acuité visuelle, photosensibilité</td></tr>
<tr><td><strong>Piébaldisme, syndrome de Waardenburg</strong></td><td>Défaut de migration des <strong>mélanoblastes</strong> des crêtes neurales (<em>KIT</em> ; <em>PAX3</em>, <em>SOX10</em>) : absence localisée de mélanocytes</td><td>Mèche blanche, plages dépigmentées ; Waardenburg : surdité associée</td></tr>
<tr><td><strong>Nævus</strong> congénitaux, <strong>tache mongoloïde</strong>, taches café au lait</td><td>Amas de mélanocytes épidermiques ou dermiques ; taches café au lait multiples : neurofibromatose 1</td><td>Risque de mélanome des nævus géants</td></tr>
<tr><td><strong>Angiomes</strong></td><td>Hémangiome infantile : prolifération endothéliale post-natale régressive ; angiome plan : malformation capillaire dermique congénitale</td><td>Angiome plan du territoire V1 : syndrome de Sturge-Weber</td></tr>
<tr><td><strong>Dysplasie ectodermique anhidrotique</strong></td><td>Mutations de la voie <strong>ectodysplasine</strong> (<em>EDA</em>, lié à l'X) : défaut d'induction des annexes</td><td>Absence de glandes sudoripares (hyperthermie), hypotrichose, hypodontie</td></tr>
<tr><td><strong>Polythélie</strong> (1 à 5 %) et <strong>polymastie</strong></td><td>Persistance de segments de la <strong>crête mammaire</strong> (ligne lactée)</td><td>Mamelons ou seins surnuméraires sur la ligne lactée, souvent pris pour des nævus</td></tr>
<tr><td><strong>Athélie, amastie</strong></td><td>Absence de bourgeon mammaire</td><td>Syndrome de Poland (amastie, agénésie du grand pectoral, anomalies de la main)</td></tr>
<tr><td><strong>Aplasie cutanée, sinus dermiques, kystes dermoïdes</strong></td><td>Absence localisée de peau (vertex) ; inclusions ectoblastiques (défaut de séparation ectoblaste / tube neural)</td><td>Un sinus dermique sacré expose aux méningites</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Application clinique :</strong> l'examen cutané du nouveau-né recherche des signes de syndrome : <strong>taches café au lait</strong> multiples (neurofibromatose), <strong>taches achromiques</strong> (sclérose tubéreuse), <strong>angiome plan</strong> facial (Sturge-Weber), <strong>fossette ou touffe de poils sacrée</strong> (dysraphie occulte), <strong>mamelons surnuméraires</strong>, <strong>fistules pré-auriculaires</strong> (syndrome branchio-oto-rénal), <strong>pli palmaire unique</strong> (trisomie 21). L'aspect de la peau (lanugo, vernix, plis plantaires, cartilages de l'oreille, tissu mammaire) sert à estimer l'âge gestationnel (score de Ballard).</div>`
            }
          ],
          points_cles: [
            "L'œil a une triple origine : neuroectoblaste du diencéphale (rétine neurale et épithélium pigmentaire, nerf optique, muscles de l'iris), ectoblaste de surface (cristallin, épithélium cornéen et conjonctival, paupières, glandes lacrymales), mésenchyme des crêtes neurales (sclère, stroma cornéen, choroïde, iris, corps ciliaire, vitré).",
            "Vésicule optique à J25-J28 (évagination du prosencéphale) induisant la placode cristallinienne (J28) ; cupule optique à double paroi à la 5e semaine (externe : épithélium pigmentaire ; interne : rétine neurale) ; fissure optique fermée à la 7e semaine (colobome inféro-nasal si défaut).",
            "Le cristallin dérive de la vésicule cristallinienne : fibres primaires de la paroi postérieure, épithélium antérieur, fibres secondaires équatoriales toute la vie ; la tunique vasculaire hyaloïde régresse au 7e-8e mois ; les paupières sont soudées de la 10e semaine au 7e mois.",
            "Le nerf optique est une voie du SNC (axones des cellules ganglionnaires dans le pédicule optique, oligodendrocytes, méninges) ; cataracte congénitale (rubéole), microphtalmie et aniridie (PAX6), glaucome congénital, cyclopie (holoprosencéphalie).",
            "L'oreille interne dérive de la placode otique ectoblastique (J22) devenue vésicule otique (J28-J30) : partie dorsale (utricule, canaux semi-circulaires, canal endolymphatique) et partie ventrale (saccule, canal cochléaire à 2,5 tours à 8 semaines) ; organe de Corti de 10 à 20 semaines ; audition dès 24-26 SA ; labyrinthe osseux de taille adulte au 5e mois.",
            "L'oreille moyenne dérive de la 1re poche (caisse, trompe, entoblaste) et des arcs (marteau et enclume du 1er arc, étrier du 2e) ; l'oreille externe de la 1re fente (conduit, recanalisé au 7e mois) et de six monticules des 1er et 2e arcs (pavillon) ; le tympan a trois couches d'origines différentes.",
            "Surdité congénitale : 1-2/1 000, dépistage néonatal ; perception (80 % : connexine 26 GJB2, Waardenburg, Pendred, Usher ; CMV, rubéole, aminosides) ou transmission (atrésie du conduit, osselets, syndromes du 1er arc) ; implant cochléaire précoce possible car la cochlée est de taille adulte.",
            "L'épiderme et toutes ses annexes (poils, glandes sébacées, sudoripares eccrines et apocrines, glande mammaire, ongles) dérivent de l'ectoblaste ; le périderme est transitoire ; stratification et kératinisation au 5e-6e mois ; mélanocytes des crêtes neurales, cellules de Langerhans hématopoïétiques, cellules de Merkel ectoblastiques.",
            "Le derme dérive du dermatome (dos), de la somatopleure (parois ventrales et membres) et des crêtes neurales (face) ; l'hypoderme se constitue au 3e trimestre ; lanugo au 5e mois, vernix caseosa (sébum + périderme), ongles atteignant le bout des doigts au 8e mois.",
            "La glande mammaire dérive de la crête mammaire (ligne lactée aisselle-aine, 4e-5e semaine) ; polythélie et polymastie par persistance de segments de la ligne ; albinisme (tyrosinase, mélanocytes présents) contre piébaldisme et Waardenburg (absence de mélanocytes, crêtes neurales) ; ichtyoses, épidermolyses bulleuses, dysplasie ectodermique (EDA), angiomes."
          ],
          lexique: [
            { terme: "Vésicule optique", def: "Évagination latérale du prosencéphale (diencéphale) apparaissant à J25-J28, reliée au cerveau par le pédicule optique, qui s'invagine en cupule optique." },
            { terme: "Cupule optique", def: "Structure à double paroi issue de l'invagination de la vésicule optique : paroi externe = épithélium pigmentaire, paroi interne = rétine neurale ; son bord antérieur donne l'iris et le corps ciliaire." },
            { terme: "Fissure optique", def: "Gouttière de la face inférieure de la cupule et du pédicule optiques laissant passer le mésenchyme et l'artère hyaloïde ; sa fermeture à la 7e semaine, incomplète, donne le colobome." },
            { terme: "Placode cristallinienne", def: "Épaississement de l'ectoblaste de surface induit par la vésicule optique (J28), qui s'invagine en vésicule cristallinienne à l'origine du cristallin." },
            { terme: "Placode otique", def: "Épaississement de l'ectoblaste de surface en regard du rhombencéphale (J22), qui s'invagine en vésicule otique à l'origine du labyrinthe membraneux." },
            { terme: "Vésicule otique", def: "Otocyste ectoblastique (J28-J30) dont la partie dorsale donne utricule et canaux semi-circulaires et la partie ventrale saccule et canal cochléaire." },
            { terme: "Monticules auriculaires", def: "Six bourgeons mésenchymateux des 1er et 2e arcs autour de la 1re fente pharyngienne, fusionnant au 3e mois pour former le pavillon de l'oreille." },
            { terme: "Périderme", def: "Couche épidermique superficielle transitoire du fœtus (5e semaine au 6e mois), desquamant dans le liquide amniotique et participant au vernix caseosa." },
            { terme: "Crête mammaire", def: "Ligne lactée ectoblastique s'étendant de l'aisselle à l'aine (4e-5e semaine), dont seule la portion pectorale persiste normalement ; sa persistance donne des mamelons surnuméraires." },
            { terme: "Albinisme oculo-cutané", def: "Défaut génétique de synthèse de la mélanine (tyrosinase) avec mélanocytes présents, à distinguer du piébaldisme (absence de mélanocytes par défaut de migration des crêtes neurales)." }
          ],
          qcm: [
            {
              q: "Concernant le développement de l'œil :",
              options: [
                "A. La vésicule optique est une évagination du diencéphale.",
                "B. L'épithélium pigmentaire de la rétine dérive des mélanocytes des crêtes neurales.",
                "C. Le cristallin dérive de l'ectoblaste de surface.",
                "D. La fissure optique se ferme à la 7e semaine.",
                "E. Les muscles de l'iris sont d'origine neuroectoblastique."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : l'épithélium pigmentaire dérive de la paroi externe de la cupule optique (neuroectoblaste), non des crêtes neurales."
            },
            {
              q: "Concernant les structures oculaires et leurs anomalies :",
              options: [
                "A. Le nerf optique est constitué par les axones des cellules ganglionnaires de la rétine cheminant dans le pédicule optique.",
                "B. La sclère et le stroma de la cornée dérivent du mésenchyme des crêtes neurales.",
                "C. Le colobome résulte d'un défaut de fermeture de la fissure optique.",
                "D. Les paupières restent soudées de la 10e semaine jusqu'au 7e mois.",
                "E. La cataracte congénitale est une complication classique de la toxoplasmose mais jamais de la rubéole."
              ],
              bonnes: [0, 1, 2, 3],
              explication: "A, B, C et D sont vraies. E est fausse : la cataracte congénitale est l'une des manifestations majeures de la rubéole congénitale (triade de Gregg)."
            },
            {
              q: "Concernant l'oreille interne :",
              options: [
                "A. Elle dérive de la placode otique, épaississement de l'ectoblaste de surface.",
                "B. La vésicule otique se forme à la fin de la 4e semaine.",
                "C. Le canal cochléaire dérive de la partie dorsale de la vésicule otique.",
                "D. La cochlée effectue 2,5 tours de spire à la 8e semaine.",
                "E. L'oreille interne est fonctionnelle vers 24-26 SA."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : le canal cochléaire et le saccule dérivent de la partie ventrale ; la partie dorsale donne l'utricule et les canaux semi-circulaires."
            },
            {
              q: "Concernant l'oreille moyenne et l'oreille externe :",
              options: [
                "A. La caisse du tympan dérive de la 1re poche pharyngienne.",
                "B. L'étrier dérive du 1er arc pharyngien.",
                "C. Le conduit auditif externe dérive de la 1re fente pharyngienne.",
                "D. La membrane du tympan a une triple origine : ectoblaste, mésenchyme, entoblaste.",
                "E. Le pavillon de l'oreille se forme à partir de six monticules auriculaires des 1er et 2e arcs."
              ],
              bonnes: [0, 2, 3, 4],
              explication: "A, C, D et E sont vraies. B est fausse : l'étrier dérive du 2e arc (cartilage de Reichert) ; le marteau et l'enclume dérivent du 1er arc."
            },
            {
              q: "Concernant les surdités congénitales :",
              options: [
                "A. Elles touchent environ 1 à 2 nouveau-nés sur 1 000.",
                "B. La mutation de la connexine 26 (GJB2) est la cause génétique la plus fréquente.",
                "C. L'infection congénitale à cytomégalovirus est la première cause non génétique.",
                "D. L'atrésie du conduit auditif externe entraîne une surdité de perception.",
                "E. L'implant cochléaire précoce est possible car la cochlée a atteint sa taille adulte dès la vie fœtale."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : l'atrésie du conduit donne une surdité de transmission."
            },
            {
              q: "Concernant le développement de la peau :",
              options: [
                "A. L'épiderme dérive de l'ectoblaste de surface.",
                "B. Les mélanocytes dérivent des crêtes neurales.",
                "C. Les cellules de Langerhans dérivent de l'ectoblaste.",
                "D. Le derme du dos dérive des dermatomes des somites.",
                "E. Le périderme est une couche transitoire qui desquame dans le liquide amniotique."
              ],
              bonnes: [0, 1, 3, 4],
              explication: "A, B, D et E sont vraies. C est fausse : les cellules de Langerhans sont d'origine hématopoïétique (moelle osseuse)."
            },
            {
              q: "Concernant les annexes cutanées et leurs anomalies :",
              options: [
                "A. Les glandes sébacées bourgeonnent à partir de la gaine épithéliale du follicule pileux.",
                "B. La glande mammaire dérive de la crête mammaire ectoblastique (ligne lactée).",
                "C. Les mamelons surnuméraires résultent de la persistance de segments de la ligne lactée.",
                "D. Dans l'albinisme oculo-cutané, les mélanocytes sont absents de l'épiderme.",
                "E. Le lanugo apparaît vers le 5e mois et disparaît en grande partie avant la naissance."
              ],
              bonnes: [0, 1, 2, 4],
              explication: "A, B, C et E sont vraies. D est fausse : dans l'albinisme, les mélanocytes sont présents mais ne synthétisent pas de mélanine (déficit en tyrosinase) ; c'est dans le piébaldisme et le syndrome de Waardenburg que les mélanocytes manquent localement."
            }
          ]
        }
      ]
    }
  ]
};
