/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — Habilitation électrique (NF C 18-510) — fichier 2
   Parcours électriciens : basse tension (thème BT), haute tension (thème HT)
   et photovoltaïque (thème PV). Les parcours et les thèmes sont déclarés
   dans permis-elec-0.js ; le tronc commun est dans permis-elec-1.js.
   ═══════════════════════════════════════════════════════════════════════════ */
window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  /* ───────────── Thème BT — chapitres 1 à 4 ───────────── */
  P.chapitres.push(
    {
      id: "bt-consignation-principes",
      theme: "BT",
      parcours: ["bt", "be", "btht"],
      titre: "La consignation : les six étapes de la mise en sécurité",
      duree: 25,
      objectifs: [
        "Distinguer mise hors tension, mise en sécurité et consignation",
        "Citer dans l'ordre les étapes de la consignation",
        "Savoir ce que recouvrent la séparation et la condamnation",
        "Réaliser une vérification d'absence de tension (VAT) correcte",
        "Savoir quand la mise à la terre et en court-circuit est obligatoire"
      ],
      sections: [
        {
          titre: "Pourquoi consigner ?",
          contenu: `<p>Travailler <strong>hors tension</strong> est la règle de base de la norme NF C 18-510 : on ne travaille sous tension que si c'est techniquement indispensable et par du personnel spécialement habilité (TST). Mais un ouvrage simplement « coupé » n'est pas un ouvrage sûr. Un collègue peut refermer le disjoncteur, une seconde source peut réalimenter le circuit, un câble peut garder une charge électrique, une ligne voisine peut induire une tension.</p>
<p>La <strong>consignation</strong> est l'ensemble des opérations qui permettent de mettre un ouvrage, ou une partie d'ouvrage, en sécurité <strong>de façon certaine et durable</strong> pendant toute la durée des travaux. Elle garantit trois choses :</p>
<ul>
<li>l'ouvrage est <strong>séparé</strong> de toutes ses sources d'énergie ;</li>
<li>il ne peut pas être <strong>remis sous tension</strong> par erreur ;</li>
<li>l'<strong>absence de tension</strong> a été vérifiée sur place.</li>
</ul>
<p>Une simple <strong>mise hors tension</strong> (ouvrir un disjoncteur) ne comporte ni condamnation ni vérification : elle ne suffit pas pour des travaux. Tant que la consignation n'est pas terminée, l'ouvrage doit être considéré comme <strong>sous tension</strong>.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un ouvrage n'est consigné que lorsque toutes les étapes sont faites. Avant la VAT, il est réputé sous tension, même si l'appareil de coupure est ouvert.</div>`
        },
        {
          titre: "Les étapes dans l'ordre",
          contenu: `<p>La norme décrit la consignation en étapes successives, qu'il faut connaître <strong>dans l'ordre</strong> : c'est une question classique du QCM.</p>
<table>
<thead><tr><th>Étape</th><th>Ce que l'on fait</th><th>Objectif</th></tr></thead>
<tbody>
<tr><td>Pré-identification</td><td>Repérer l'ouvrage sur les schémas, plans et documents, et repérer les organes de séparation</td><td>Savoir quoi couper et où, avant d'agir</td></tr>
<tr><td>1. Séparation</td><td>Ouvrir les organes de séparation sur <strong>toutes</strong> les sources possibles (y compris le neutre en BT selon le schéma, les sources de secours, les retours)</td><td>Isoler l'ouvrage de toute alimentation</td></tr>
<tr><td>2. Condamnation</td><td>Bloquer chaque organe en position d'ouverture (cadenas, serrure) et le signaler (pancarte « Consignation : ne pas manœuvrer »)</td><td>Empêcher toute refermeture</td></tr>
<tr><td>3. Identification</td><td>Sur le lieu de travail, reconnaître sans ambiguïté l'ouvrage sur lequel on va travailler</td><td>Être sûr de travailler sur l'ouvrage consigné</td></tr>
<tr><td>4. Vérification d'absence de tension (VAT)</td><td>Vérifier, avec un appareil adapté, l'absence de tension sur tous les conducteurs, au plus près de la zone de travail</td><td>Prouver que l'ouvrage n'est plus sous tension</td></tr>
<tr><td>5. Mise à la terre et en court-circuit (MALT-CC)</td><td>Relier tous les conducteurs entre eux et à la terre, au plus près de la zone de travail</td><td>Écouler une réalimentation accidentelle ou une tension induite</td></tr>
</tbody>
</table>
<p>Moyen mnémotechnique souvent utilisé en formation : <strong>S</strong>éparer, <strong>C</strong>ondamner, <strong>I</strong>dentifier, <strong>V</strong>érifier, <strong>M</strong>ettre à la terre. La pré-identification précède toujours la séparation.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> on ne fait jamais la VAT avant la séparation ni avant la condamnation. Et l'identification se fait <strong>sur le lieu de travail</strong> : elle est différente de la pré-identification, faite sur les documents.</div>`
        },
        {
          titre: "Séparer et condamner",
          contenu: `<p>La <strong>séparation</strong> doit être réalisée avec un organe qui assure une coupure <strong>certaine</strong> : sectionneur, interrupteur-sectionneur, disjoncteur apte au sectionnement, retrait de fusibles, débrochage d'un appareil, ou ouverture visible d'un pont ou d'une connexion. Un simple contacteur commandé par un bouton, un variateur ou un interrupteur électronique <strong>n'assure pas</strong> la séparation.</p>
<p>Il faut séparer <strong>toutes les sources</strong> : alimentation normale, groupe électrogène, onduleur, alimentation de secours, installation photovoltaïque, retour par un transformateur, tension de commande venant d'une autre armoire.</p>
<p>La <strong>condamnation</strong> comporte deux parties indissociables :</p>
<ul>
<li>une <strong>immobilisation matérielle</strong> de l'organe en position ouverte (cadenas personnel, verrou, serrure, retrait et mise sous clé des fusibles, obturateurs) ;</li>
<li>une <strong>signalisation</strong> indiquant que l'organe est condamné et ne doit pas être manœuvré.</li>
</ul>
<p>Une pancarte seule n'est pas une condamnation : elle ne fait qu'informer. La clé du cadenas reste sous la garde de la personne qui a consigné.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> pour consigner le départ d'un moteur, on ouvre l'interrupteur-sectionneur du départ, on y pose un cadenas de consignation et une étiquette, puis on vérifie aussi que le circuit de commande ne vient pas d'une autre source.</div>`
        },
        {
          titre: "La vérification d'absence de tension (VAT)",
          contenu: `<p>La VAT est l'étape qui <strong>prouve</strong> que l'ouvrage est hors tension. Elle se fait avec un <strong>vérificateur d'absence de tension</strong> conforme à sa norme de produit et adapté à la tension de l'ouvrage. Un multimètre n'est pas un VAT : il peut être mal calibré, sur une mauvaise fonction ou avoir un fusible coupé sans que l'on s'en aperçoive.</p>
<ol>
<li>Vérifier le <strong>bon fonctionnement</strong> du VAT juste avant l'opération (sur une source connue ou avec son dispositif de test).</li>
<li>Vérifier l'absence de tension <strong>entre tous les conducteurs actifs</strong>, y compris le neutre, et <strong>entre chacun d'eux et la terre</strong> (ou la masse).</li>
<li>Vérifier à nouveau le bon fonctionnement du VAT <strong>juste après</strong>.</li>
</ol>
<p>La VAT se fait <strong>au plus près possible</strong> de la zone de travail. Tant qu'elle n'est pas terminée, on considère l'ouvrage sous tension : on porte donc les <strong>EPI</strong> prévus (gants isolants, écran facial ou lunettes, vêtement adapté) et on respecte les distances.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> si le VAT ne s'allume pas, cela ne prouve rien tant que l'on n'a pas vérifié qu'il fonctionne. C'est le contrôle avant et après qui donne sa valeur à la mesure.</div>`
        },
        {
          titre: "La mise à la terre et en court-circuit (MALT-CC)",
          contenu: `<p>La MALT-CC relie entre eux tous les conducteurs actifs et les relie à la terre. Si l'ouvrage est remis sous tension par erreur, le court-circuit provoque le déclenchement des protections, et la personne qui travaille n'est pas portée à une tension dangereuse. Elle évacue aussi les charges résiduelles (câbles longs, condensateurs) et les tensions induites.</p>
<ul>
<li>En <strong>haute tension</strong>, la MALT-CC est <strong>obligatoire</strong>, de part et d'autre de la zone de travail.</li>
<li>En <strong>basse tension</strong>, elle est obligatoire lorsqu'il existe un <strong>risque de tension induite</strong>, de <strong>réalimentation</strong> (autre source, groupe, photovoltaïque) ou de <strong>charge résiduelle</strong> (condensateurs, grands câbles). Sinon, elle peut ne pas être réalisée, selon l'analyse du risque.</li>
</ul>
<p>Règle de pose : on raccorde <strong>d'abord à la terre</strong>, puis aux conducteurs. Pour la dépose, on fait l'inverse : on retire d'abord des conducteurs, puis de la terre. Le dispositif doit être dimensionné pour supporter le courant de court-circuit.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> MALT-CC toujours <strong>après</strong> la VAT ; terre en premier à la pose, terre en dernier à la dépose.</div>`
        }
      ],
      points_cles: [
        "La consignation met un ouvrage en sécurité de façon certaine et durable pendant les travaux",
        "Ordre : pré-identification, séparation, condamnation, identification, VAT, MALT-CC",
        "La séparation se fait sur toutes les sources, avec un organe à coupure certaine",
        "La condamnation associe un blocage matériel et une signalisation",
        "La VAT se fait avec un VAT, contrôlé avant et après, entre tous les conducteurs et avec la terre",
        "Avant la fin de la VAT, l'ouvrage est réputé sous tension : EPI obligatoires",
        "La MALT-CC est obligatoire en HT ; en BT, en cas de risque d'induction, de réalimentation ou de charge résiduelle",
        "À la pose de la MALT-CC, on raccorde la terre en premier"
      ]
    },
    {
      id: "bt-consignation-documents",
      theme: "BT",
      parcours: ["bt", "be", "btht"],
      titre: "Consignation en BT : une ou deux étapes, documents et déconsignation",
      duree: 25,
      objectifs: [
        "Connaître le rôle du chargé de consignation (BC)",
        "Distinguer la consignation en une étape et en deux étapes",
        "Savoir quels documents sont échangés et entre qui",
        "Appliquer les règles de la déconsignation",
        "Savoir quand un BR peut consigner pour son propre compte"
      ],
      sections: [
        {
          titre: "Le chargé de consignation BC",
          contenu: `<p>Le <strong>chargé de consignation</strong> (symbole <strong>BC</strong> en basse tension, HC en haute tension) est la personne désignée par l'employeur pour réaliser la consignation d'un ouvrage ou d'une partie d'ouvrage, puis pour le <strong>déconsigner</strong> en fin de travaux. Il agit à la demande du chargé d'exploitation électrique ou dans le cadre de la procédure prévue par l'entreprise.</p>
<p>Ses missions :</p>
<ul>
<li>préparer la consignation (pré-identification sur les schémas, repérage de toutes les sources) ;</li>
<li>réaliser les étapes qui lui reviennent (toutes en une étape, ou la première en deux étapes) ;</li>
<li>remettre au chargé de travaux l'<strong>attestation de consignation</strong> et lui transmettre les informations utiles ;</li>
<li>recevoir l'<strong>avis de fin de travail</strong>, puis déconsigner.</li>
</ul>
<p>Le symbole BC peut être associé à d'autres : un électricien habilité <strong>B2V BC</strong> peut consigner lui-même l'ouvrage sur lequel son équipe va travailler.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le chargé de consignation consigne et déconsigne. Le chargé de travaux organise et dirige les travaux. Ce peut être la même personne si elle détient les deux habilitations.</div>`
        },
        {
          titre: "Consignation en une étape",
          contenu: `<p>Dans la consignation <strong>en une étape</strong>, le chargé de consignation réalise lui-même <strong>toutes</strong> les opérations : pré-identification, séparation, condamnation, identification, VAT et, si nécessaire, MALT-CC. Il remet ensuite l'<strong>attestation de consignation pour travaux</strong> au chargé de travaux.</p>
<p>Le chargé de travaux, avant de laisser travailler ses exécutants, s'assure à son tour de l'identification de l'ouvrage sur le lieu de travail et, selon la procédure de l'entreprise, procède à une VAT sur place. Il délimite la <strong>zone de travail</strong>.</p>
<p>Cette forme est la plus simple. Elle convient quand le chargé de consignation peut se rendre jusqu'au lieu de travail et quand le nombre de points de séparation est réduit.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> dans un atelier, le chargé de consignation consigne le tableau divisionnaire d'une machine, vérifie l'absence de tension au bornier de la machine, puis remet l'attestation au chargé de travaux B2 qui va remplacer le câble d'alimentation avec deux exécutants B1.</div>`
        },
        {
          titre: "Consignation en deux étapes",
          contenu: `<p>Dans la consignation <strong>en deux étapes</strong>, les opérations sont partagées :</p>
<table>
<thead><tr><th>Étape</th><th>Qui ?</th><th>Opérations</th><th>Document</th></tr></thead>
<tbody>
<tr><td>Première étape</td><td>Chargé de consignation</td><td>Pré-identification, séparation, condamnation (et parfois une MALT-CC au point de séparation)</td><td>Il remet une attestation de première étape de consignation au chargé de travaux</td></tr>
<tr><td>Deuxième étape</td><td>Chargé de travaux</td><td>Identification sur le lieu de travail, VAT, MALT-CC au plus près de la zone de travail</td><td>Il complète la consignation avant de laisser commencer les travaux</td></tr>
</tbody>
</table>
<p>Cette organisation est utilisée lorsque le lieu de travail est <strong>éloigné</strong> des organes de séparation (ligne, câble long, installation étendue) ou quand plusieurs équipes travaillent sur un même ouvrage.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> en deux étapes, la VAT est faite par le <strong>chargé de travaux</strong>, sur le lieu de travail, et non par le chargé de consignation. La séparation et la condamnation restent, elles, l'affaire du chargé de consignation.</div>`
        },
        {
          titre: "Les documents",
          contenu: `<p>Les échanges sont formalisés par écrit, ou par <strong>message collationné</strong> (message transmis oralement, répété par le destinataire et confirmé par l'émetteur, puis enregistré). Les principaux documents :</p>
<table>
<thead><tr><th>Document</th><th>De qui</th><th>À qui</th><th>Sens</th></tr></thead>
<tbody>
<tr><td>Attestation de consignation pour travaux</td><td>Chargé de consignation</td><td>Chargé de travaux</td><td>L'ouvrage est consigné : les travaux peuvent être organisés</td></tr>
<tr><td>Attestation de première étape de consignation</td><td>Chargé de consignation</td><td>Chargé de travaux</td><td>Séparation et condamnation faites ; reste la deuxième étape</td></tr>
<tr><td>Autorisation de travail</td><td>Chargé d'exploitation électrique</td><td>Chargé de travaux</td><td>Autorise le début des travaux sur l'ouvrage</td></tr>
<tr><td>Avis de fin de travail</td><td>Chargé de travaux</td><td>Chargé de consignation (ou chargé d'exploitation)</td><td>Les travaux sont terminés, le personnel est retiré : l'ouvrage peut être déconsigné</td></tr>
</tbody>
</table>
<p>Les documents précis et leur circuit dépendent de l'organisation de l'entreprise et des instructions de sécurité ; le principe reste le même : <strong>personne ne remet sous tension sans avoir reçu l'avis de fin de travail</strong>.</p>`
        },
        {
          titre: "La déconsignation",
          contenu: `<p>À la fin des travaux, le <strong>chargé de travaux</strong> :</p>
<ol>
<li>vérifie que les travaux sont terminés et que le matériel et l'outillage sont retirés ;</li>
<li>rassemble son personnel et lui signale que l'ouvrage doit désormais être considéré <strong>sous tension</strong> ;</li>
<li>retire les MALT-CC qu'il a posées sur la zone de travail et le balisage ;</li>
<li>remet l'<strong>avis de fin de travail</strong> au chargé de consignation.</li>
</ol>
<p>Une fois l'avis remis, le chargé de travaux et son équipe <strong>ne peuvent plus intervenir</strong> sur l'ouvrage sans nouvelle consignation. Le <strong>chargé de consignation</strong> retire ensuite ses MALT-CC, lève les condamnations et remet l'ouvrage à la disposition de l'exploitant, qui le remet sous tension.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> on ne retire jamais un cadenas posé par quelqu'un d'autre. Si plusieurs équipes travaillent sur le même ouvrage, il faut l'avis de fin de travail de chacune avant la déconsignation.</div>`
        },
        {
          titre: "La consignation pour son propre compte",
          contenu: `<p>Le <strong>chargé d'intervention générale BR</strong> peut <strong>consigner pour son propre compte</strong> l'installation sur laquelle il intervient : il réalise lui-même les étapes de la consignation, sans attestation, puisqu'il est à la fois celui qui consigne et celui qui intervient. De même, un chargé de travaux habilité BC peut consigner pour son équipe.</p>
<p>Les étapes restent exactement les mêmes : séparation, condamnation, identification, VAT et, si nécessaire, MALT-CC. Le fait de travailler seul ne dispense d'aucune d'entre elles, notamment de la condamnation.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un dépanneur BR doit remplacer un relais thermique. Il ouvre le sectionneur du départ, le cadenasse avec son propre cadenas, vérifie l'absence de tension au plus près du relais, puis intervient.</div>`
        }
      ],
      points_cles: [
        "Le chargé de consignation (BC) consigne et déconsigne ; il remet l'attestation de consignation",
        "En une étape, le chargé de consignation fait toutes les opérations",
        "En deux étapes, il fait séparation et condamnation ; le chargé de travaux fait identification, VAT et MALT-CC",
        "Le chargé de travaux remet l'avis de fin de travail à la fin des travaux",
        "Après l'avis de fin de travail, l'équipe ne doit plus toucher l'ouvrage, réputé sous tension",
        "On ne remet jamais sous tension sans avoir reçu tous les avis de fin de travail",
        "Un BR peut consigner pour son propre compte, sans sauter aucune étape",
        "Un message collationné est répété par le destinataire et confirmé par l'émetteur"
      ]
    },
    {
      id: "bt-travaux-hors-tension",
      theme: "BT",
      parcours: ["bt", "btht"],
      titre: "Travaux hors tension : exécutant B1 et chargé de travaux B2",
      duree: 22,
      objectifs: [
        "Distinguer un travail d'une intervention",
        "Connaître le rôle de l'exécutant B1 et du chargé de travaux B2",
        "Savoir organiser et délimiter une zone de travail",
        "Connaître le rôle du surveillant de sécurité électrique",
        "Appliquer les règles de début et de fin de travaux"
      ],
      sections: [
        {
          titre: "Travaux et interventions",
          contenu: `<p>La norme distingue deux grandes familles d'opérations d'ordre électrique en basse tension :</p>
<ul>
<li>les <strong>travaux</strong> : opérations dont le but est de réaliser, modifier, entretenir ou réparer un ouvrage (poser un tableau, tirer des câbles, remplacer un appareillage dans une installation qui a été consignée). Ils sont préparés et organisés, sur un ouvrage <strong>consigné</strong>. Symboles B1, B2 (et B1V, B2V au voisinage) ;</li>
<li>les <strong>interventions</strong> : opérations de courte durée, sur une petite partie d'installation, souvent pour un dépannage ou un raccordement. Elles sont réservées aux symboles <strong>BR</strong> (intervention générale) et <strong>BS</strong> (intervention élémentaire).</li>
</ul>
<p>Un électricien B1 ou B2 n'est donc <strong>pas</strong> habilité au dépannage : il réalise des travaux préparés, dans une zone de travail délimitée, sur un ouvrage consigné par un chargé de consignation.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « B2 » ne veut pas dire « plus compétent que BR ». Ce sont des habilitations différentes : B2 pour diriger des travaux, BR pour réaliser des interventions (dépannages, raccordements, mesures). Une même personne peut détenir les deux.</div>`
        },
        {
          titre: "Les acteurs des travaux",
          contenu: `<table>
<thead><tr><th>Symbole</th><th>Rôle</th><th>Ce qu'il peut faire</th></tr></thead>
<tbody>
<tr><td>B1</td><td>Exécutant électricien</td><td>Réaliser des travaux d'ordre électrique hors tension, sous la direction d'un chargé de travaux, en respectant ses consignes</td></tr>
<tr><td>B1V</td><td>Exécutant électricien au voisinage</td><td>Idem, y compris en zone de voisinage renforcé BT (zone 4)</td></tr>
<tr><td>B2</td><td>Chargé de travaux</td><td>Diriger les travaux d'ordre électrique hors tension, encadrer des exécutants, assurer leur sécurité</td></tr>
<tr><td>B2V</td><td>Chargé de travaux au voisinage</td><td>Idem, y compris en zone 4</td></tr>
<tr><td>B2V Essai</td><td>Chargé d'essais</td><td>Réaliser ou diriger des essais sur un ouvrage pendant ou à l'issue de travaux</td></tr>
<tr><td>BC</td><td>Chargé de consignation</td><td>Consigner et déconsigner</td></tr>
</tbody>
</table>
<p>L'exécutant <strong>B1</strong> ne travaille jamais seul de sa propre initiative sur un ouvrage : il suit les instructions du chargé de travaux, qui a reçu l'attestation de consignation. S'il constate une anomalie (tension présente, plan différent du terrain, équipement inconnu), il <strong>s'arrête</strong> et prévient le chargé de travaux.</p>`
        },
        {
          titre: "Le chargé de travaux",
          contenu: `<p>Le chargé de travaux <strong>B2</strong> est responsable de la sécurité de son équipe pendant les travaux. Avant de commencer, il :</p>
<ol>
<li>reçoit l'attestation de consignation (ou de première étape) et, le cas échéant, l'autorisation de travail ;</li>
<li>réalise ou fait réaliser la deuxième étape si la consignation est en deux étapes ;</li>
<li>vérifie l'<strong>identification</strong> de l'ouvrage sur le lieu de travail ;</li>
<li>délimite matériellement la <strong>zone de travail</strong> ;</li>
<li>analyse les risques, en particulier les pièces nues sous tension restant à proximité ;</li>
<li>donne à chacun des <strong>instructions</strong> claires et s'assure qu'elles sont comprises.</li>
</ol>
<p>Pendant les travaux, il veille au respect des consignes et à la présence des EPI. Il peut participer lui-même aux travaux. S'il doit s'absenter, il désigne un remplaçant habilité ou fait cesser le travail.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'exécutant obéit au chargé de travaux ; le chargé de travaux répond de la sécurité de l'équipe. Aucun travail ne commence avant que la consignation soit complète.</div>`
        },
        {
          titre: "Zone de travail et balisage",
          contenu: `<p>La <strong>zone de travail</strong> est l'espace dans lequel l'équipe va travailler sur l'ouvrage consigné. Le chargé de travaux la <strong>délimite matériellement</strong> : chaîne ou ruban de balisage, barrières, panneaux, nappes ou cadenas, de façon à ce qu'on ne puisse pas la confondre avec les parties restées sous tension.</p>
<ul>
<li>Le balisage <strong>signale</strong> la zone consignée et empêche les personnes non concernées d'y entrer.</li>
<li>Il permet aussi d'éviter qu'un exécutant sorte de la zone et touche une partie voisine encore sous tension.</li>
<li>Il reste en place jusqu'à la fin des travaux et n'est retiré qu'au moment de la remise de l'avis de fin de travail.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> dans un tableau général où seul un départ est consigné, le chargé de travaux pose une nappe isolante sur le jeu de barres resté sous tension et balise le départ consigné : les exécutants savent précisément où ils peuvent travailler.</div>`
        },
        {
          titre: "Le surveillant de sécurité électrique",
          contenu: `<p>Le <strong>surveillant de sécurité électrique</strong> est une personne désignée pour veiller à la sécurité d'autres personnes qui ne peuvent pas assurer elles-mêmes leur protection contre le risque électrique : personnel non habilité, ou exécutants travaillant près de pièces nues sous tension.</p>
<ul>
<li>Il est habilité, et connaît les distances et les risques de l'ouvrage.</li>
<li>Il <strong>ne fait que surveiller</strong> : il ne participe pas au travail et ne s'absente pas.</li>
<li>Il peut <strong>faire cesser</strong> immédiatement le travail en cas de danger.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> un surveillant qui « donne un coup de main » ne surveille plus. S'il doit quitter les lieux, le travail est interrompu.</div>`
        },
        {
          titre: "Le déroulement d'un chantier type",
          contenu: `<p>Voici, dans l'ordre, ce qui se passe lors de travaux hors tension bien organisés :</p>
<ol>
<li>Le chargé d'exploitation électrique est informé et donne son accord ; les travaux sont préparés (plans, matériel, personnel habilité, analyse des risques).</li>
<li>Le chargé de consignation consigne l'ouvrage et remet l'attestation de consignation au chargé de travaux.</li>
<li>Le chargé de travaux identifie l'ouvrage sur place, délimite et balise la zone de travail, puis réunit son équipe pour lui donner les consignes : limites de la zone, pièces restées sous tension, EPI à porter, rôle de chacun.</li>
<li>Les exécutants travaillent dans la zone, selon les instructions reçues.</li>
<li>À la fin, le chargé de travaux vérifie le travail, fait retirer outils et matériaux, retire ses MALT-CC et le balisage, prévient l'équipe que l'ouvrage est désormais réputé sous tension et remet l'avis de fin de travail.</li>
</ol>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> pour remplacer les câbles d'alimentation de trois machines, le chargé de travaux B2 reçoit l'attestation de consignation du départ correspondant. Il balise l'armoire et le chemin de câbles, explique aux deux exécutants B1 quelles parties de l'armoire restent alimentées, puis les laisse travailler.</div>`
        }
      ],
      points_cles: [
        "Les travaux portent sur un ouvrage consigné ; les interventions (BR, BS) sont des opérations courtes de dépannage ou de raccordement",
        "B1 : exécutant ; B2 : chargé de travaux ; la lettre V ajoute le voisinage renforcé (zone 4)",
        "Le chargé de travaux reçoit l'attestation de consignation et délimite la zone de travail",
        "L'exécutant suit les instructions du chargé de travaux et s'arrête en cas d'anomalie",
        "Le balisage reste en place jusqu'à l'avis de fin de travail",
        "Le surveillant de sécurité électrique surveille sans participer au travail",
        "Un B1 ou un B2 n'est pas habilité à faire des dépannages"
      ]
    },
    {
      id: "bt-voisinage",
      theme: "BT",
      parcours: ["bt", "be", "btht"],
      titre: "Travaux au voisinage : B1V, B2V et la zone 4",
      duree: 22,
      objectifs: [
        "Situer la zone 4 et la DLVR en basse tension",
        "Savoir quand l'attribut V est exigé",
        "Choisir une mesure de protection contre les pièces nues voisines",
        "Utiliser correctement écrans, nappes et protecteurs isolants",
        "Connaître les EPI et outils adaptés au voisinage"
      ],
      sections: [
        {
          titre: "Le voisinage en basse tension",
          contenu: `<p>On parle de <strong>travaux au voisinage</strong> lorsqu'on travaille hors tension sur un ouvrage consigné (ou sur une partie non électrique) alors que des <strong>pièces nues sous tension</strong> restent à proximité. Le danger vient alors d'un contact accidentel avec ces pièces voisines : un outil qui glisse, un câble que l'on tire, un geste réflexe.</p>
<p>En basse tension, la norme définit autour des pièces nues sous tension :</p>
<ul>
<li>la <strong>zone 1</strong>, zone de voisinage simple, entre la DLVS et la DLVR ;</li>
<li>la <strong>zone 4</strong>, zone de <strong>voisinage renforcé BT</strong>, la plus proche des pièces nues sous tension, en deçà de la <strong>DLVR</strong>.</li>
</ul>
<p>En BT, la DLVR et la DMA sont <strong>confondues</strong> et valent <strong>0,30 m</strong>. Il n'existe pas de zone 3 (travaux sous tension HT) en basse tension.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> pour pénétrer en zone 4 dans le cadre de travaux, l'électricien doit porter l'attribut <strong>V</strong> : B1V pour l'exécutant, B2V pour le chargé de travaux.</div>`
        },
        {
          titre: "Qui peut travailler en zone 4 ?",
          contenu: `<table>
<thead><tr><th>Symbole</th><th>Zone 4 (voisinage renforcé BT)</th></tr></thead>
<tbody>
<tr><td>B1, B2</td><td>Non : travaux hors tension, sans pièce nue sous tension à moins de 0,30 m non protégée</td></tr>
<tr><td>B1V, B2V</td><td>Oui, pour des travaux, après mesures de protection</td></tr>
<tr><td>BR, BC, BE (avec leur attribut)</td><td>Oui, pour les opérations propres à leur habilitation</td></tr>
<tr><td>B0, BF, personnel non habilité</td><td>Non</td></tr>
</tbody>
</table>
<p>Le chargé de travaux <strong>B2V</strong> analyse la situation avant d'autoriser ses exécutants à entrer en zone 4. Il choisit les mesures de protection et les fait appliquer.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un électricien B1 qui travaille sur un départ consigné dans un tableau où le jeu de barres reste sous tension, à moins de 0,30 m et sans protection, est <strong>en zone 4</strong> : il lui faut B1V, ou bien il faut supprimer le voisinage (consigner aussi le jeu de barres ou le protéger).</div>`
        },
        {
          titre: "Les mesures de protection",
          contenu: `<p>Avant de travailler au voisinage, le chargé de travaux applique, dans l'ordre de préférence :</p>
<ol>
<li><strong>Supprimer le voisinage</strong> : consigner aussi les parties voisines si c'est possible. Il n'y a alors plus de voisinage, mais un travail hors tension.</li>
<li><strong>Protéger</strong> les pièces nues sous tension : écrans, nappes isolantes, protecteurs, capots, obstacles, qui empêchent tout contact.</li>
<li><strong>Éloigner</strong> : organiser le travail pour rester hors de portée (respect strict des distances, outils et longueurs de matériel adaptés).</li>
<li><strong>Surveiller</strong> : faire surveiller le travail par un surveillant de sécurité électrique lorsque des personnes ne peuvent pas assurer seules leur sécurité.</li>
</ol>
<p>Ces mesures se complètent par les EPI (gants isolants, écran facial, vêtement couvrant non propagateur de flamme) et l'<strong>outillage isolé ou isolant</strong>.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> pour remplacer un disjoncteur divisionnaire consigné dans une rangée où les voisins restent alimentés, le B2V fait poser un protecteur isolant sur les bornes voisines, puis l'exécutant B1V travaille avec des gants isolants et un tournevis isolé.</div>`
        },
        {
          titre: "Écrans, nappes et protecteurs",
          contenu: `<p>Les <strong>écrans</strong> (rigides) et les <strong>nappes isolantes</strong> (souples) s'interposent entre l'opérateur et les pièces nues sous tension. Pour être efficaces :</p>
<ul>
<li>ils doivent être adaptés à la tension et en bon état (pas de trou, pas de coupure, propres et secs) ;</li>
<li>ils doivent couvrir toutes les parties accessibles et être <strong>fixés</strong> (pinces isolantes) pour ne pas glisser ;</li>
<li>leur pose et leur dépose se font <strong>avec les EPI</strong> et en respectant la DMA, par une personne habilitée et formée à cette opération ;</li>
<li>ils sont posés <strong>avant</strong> le début du travail et retirés en dernier.</li>
</ul>
<p>Les obstacles fixes (capots, plastrons d'armoire, portes) jouent le même rôle s'ils restent en place. Retirer un plastron fait souvent apparaître une zone 4 qui n'existait pas.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> la pose d'une nappe isolante se fait au contact potentiel de pièces sous tension : c'est le moment le plus exposé. Gants isolants et écran facial sont indispensables.</div>`
        },
        {
          titre: "Distances et bonnes pratiques",
          contenu: `<p>La distance se mesure entre la pièce nue sous tension et <strong>toute partie</strong> de l'opérateur ou de ce qu'il tient : main, outil, câble, échelle, profilé. On tient compte des <strong>mouvements involontaires</strong> (glissade, chute d'un objet, recul).</p>
<ul>
<li>Ne pas porter d'objets métalliques conducteurs (bague, montre, bracelet, chaîne).</li>
<li>Ne pas faire passer de longs objets conducteurs près des parties sous tension.</li>
<li>Bien éclairer la zone : un mauvais éclairage multiplie les gestes hasardeux.</li>
<li>Arrêter le travail si les conditions changent (protection déplacée, personne étrangère, intempéries pour un ouvrage extérieur).</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en zone 4, on travaille comme si un contact accidentel était possible à chaque geste. Protection, EPI et outillage isolé vont ensemble.</div>`
        },
        {
          titre: "Voisinage simple et autres intervenants",
          contenu: `<p>Au-delà de la DLVR, dans la <strong>zone 1</strong> (voisinage simple), le risque de contact est moins direct : toutes les personnes habilitées peuvent y travailler en respectant les consignes de l'employeur et les distances. Le chargé de travaux veille cependant à ce que personne ne se rapproche des pièces nues sous tension en cours de travail, par exemple en manipulant une longue barre ou un câble.</p>
<p>Lorsque des personnes non électriciennes travaillent dans un local électrique (peintre, maçon, agent d'entretien), elles ont leur propre habilitation (B0, H0V…) et n'entrent jamais en zone 4. Le chargé de travaux ou un surveillant de sécurité électrique les informe des limites à ne pas franchir.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> pendant que des électriciens B1V remplacent un départ dans un tableau, un peintre B0 repeint le mur du local. Le chargé de travaux B2V lui montre le balisage et lui interdit de s'approcher du tableau ouvert.</div>`
        }
      ],
      points_cles: [
        "La zone 4 est la zone de voisinage renforcé BT, en deçà de la DLVR",
        "En BT, DLVR et DMA sont confondues : 0,30 m",
        "L'attribut V (B1V, B2V) est nécessaire pour des travaux en zone 4",
        "Première mesure : supprimer le voisinage en consignant les parties voisines",
        "Sinon, protéger par écrans, nappes ou protecteurs isolants fixés",
        "La pose des protections se fait avec EPI, par une personne habilitée et formée",
        "La distance se mesure aussi depuis l'outil ou l'objet tenu",
        "Retirer un capot ou un plastron peut créer une zone 4"
      ]
    }
  );
})();

(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  /* ───────────── Thème BT — chapitres 5 à 8 ───────────── */
  P.chapitres.push(
    {
      id: "bt-intervention-br",
      theme: "BT",
      parcours: ["bt", "btht"],
      titre: "Interventions BT générales : le chargé d'intervention BR",
      duree: 25,
      objectifs: [
        "Savoir ce qu'est une intervention BT générale",
        "Lister les opérations autorisées au BR",
        "Suivre la démarche d'une intervention de dépannage",
        "Choisir entre intervention hors tension et en présence de tension",
        "Connaître les précautions pour les mesures et la recherche de défaut"
      ],
      sections: [
        {
          titre: "Qu'est-ce qu'une intervention ?",
          contenu: `<p>Une <strong>intervention</strong> est une opération de <strong>courte durée</strong>, sur une <strong>partie limitée</strong> d'une installation basse tension, qui ne nécessite pas l'organisation lourde d'un chantier de travaux. On distingue :</p>
<ul>
<li>l'<strong>intervention élémentaire</strong> (BS), réservée à des remplacements et raccordements simples (fusible, prise, lampe, appareil sur un circuit en attente) par du personnel non électricien formé ;</li>
<li>l'<strong>intervention BT générale</strong> (BR), qui relève d'un électricien : dépannage, recherche de défaut, raccordement, mise en service, essais, mesurages.</li>
</ul>
<p>Le titulaire du <strong>BR</strong> est le <strong>chargé d'intervention générale</strong>. Il prépare et réalise lui-même son intervention et assure sa propre sécurité ainsi que celle des personnes qui l'assistent. Les interventions n'existent <strong>qu'en basse tension</strong> : il n'y a pas d'équivalent « HR » en haute tension.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> BR = dépanner, raccorder, mettre en service, mesurer, essayer, sur une installation BT, pour une opération limitée dans le temps et dans l'espace.</div>`
        },
        {
          titre: "Les opérations autorisées au BR",
          contenu: `<table>
<thead><tr><th>Opération</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>Dépannage</td><td>Rechercher l'origine d'une panne, localiser le défaut, remplacer l'élément défectueux (contacteur, relais, disjoncteur, carte), remettre en service</td></tr>
<tr><td>Raccordement</td><td>Raccorder ou déconnecter un équipement, une machine, un moteur sur un circuit existant</td></tr>
<tr><td>Mise en service partielle ou temporaire</td><td>Remettre en service une partie d'installation, alimenter provisoirement un équipement</td></tr>
<tr><td>Essais</td><td>Vérifier le fonctionnement d'un équipement après réparation (sens de rotation, automatisme, protections)</td></tr>
<tr><td>Mesurages et recherches de défaut</td><td>Mesures de tension, d'intensité, d'isolement, de continuité, de résistance de terre</td></tr>
<tr><td>Consignation pour son propre compte</td><td>Consigner le circuit sur lequel il intervient</td></tr>
</tbody>
</table>
<p>Le BR peut aussi être autorisé à manœuvrer et, selon son titre, à consigner pour d'autres s'il détient aussi le symbole BC. Ce que la personne peut faire précisément est toujours écrit sur <strong>son titre d'habilitation</strong>, délivré par l'employeur.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le BR n'est pas un chargé de travaux. Pour diriger un vrai chantier (pose d'un tableau neuf, rénovation d'un réseau), il faut B2 ou B2V, sur un ouvrage consigné par un chargé de consignation.</div>`
        },
        {
          titre: "La démarche d'une intervention de dépannage",
          contenu: `<ol>
<li><strong>Préparer</strong> : recueillir les informations (symptômes, schémas), prévenir l'exploitant ou le client, obtenir son accord, analyser les risques, prévoir le matériel, les EPI et l'outillage.</li>
<li><strong>Rechercher le défaut</strong> : observations, essais, mesures. Cette phase peut se faire <strong>en présence de tension</strong>, avec les EPI et le matériel adaptés.</li>
<li><strong>Mettre hors tension et consigner</strong> pour son propre compte la partie concernée avant de remplacer ou de réparer.</li>
<li><strong>Éliminer le défaut</strong> : réparer ou remplacer, <strong>hors tension</strong>.</li>
<li><strong>Remettre en service</strong> : déconsigner, réaliser les essais, vérifier le bon fonctionnement.</li>
<li><strong>Rendre compte</strong> à l'exploitant ou au client.</li>
</ol>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous devez remplacer un contacteur qui ne colle plus dans une armoire de commande. Vous mesurez la tension sur la bobine en présence de tension, avec gants et écran facial. Le contacteur est en cause : vous consignez le départ, vérifiez l'absence de tension, remplacez le contacteur hors tension, puis déconsignez et essayez.</div>`
        },
        {
          titre: "Hors tension ou en présence de tension ?",
          contenu: `<p>La règle générale reste : <strong>tout ce qui peut se faire hors tension se fait hors tension</strong>. Le remplacement d'un composant, le serrage d'une connexion, la modification d'un câblage se font après consignation.</p>
<p>Certaines opérations ne peuvent se faire qu'<strong>en présence de tension</strong> : mesurer une tension, observer un fonctionnement, rechercher un défaut intermittent, réaliser un essai. Le BR les réalise alors en respectant les règles suivantes :</p>
<ul>
<li>port des <strong>EPI</strong> : gants isolants, écran facial anti-UV (risque d'arc), vêtement couvrant non propagateur de flamme, casque si nécessaire ;</li>
<li>utilisation d'<strong>outils isolés ou isolants</strong> et d'appareils de mesure adaptés ;</li>
<li>protection des pièces nues voisines (nappes, protecteurs) si nécessaire ;</li>
<li>position stable, mains propres et sèches, retrait des objets métalliques ;</li>
<li>balisage si la zone reste ouverte et accessible à d'autres personnes.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> laisser un tableau ouvert sous tension sans surveillance, même quelques minutes, met en danger toute personne qui passe. On referme, ou on balise et on reste sur place.</div>`
        },
        {
          titre: "Mesures et recherche de défaut",
          contenu: `<p>Les mesures font partie des opérations les plus fréquentes du BR et sont à l'origine de nombreux accidents par arc électrique. Les bonnes pratiques :</p>
<ul>
<li>choisir un appareil de <strong>catégorie de mesure</strong> et de tension adaptées au point de mesure ;</li>
<li>vérifier l'état de l'appareil et des cordons, et la bonne <strong>fonction</strong> et le bon calibre <strong>avant</strong> de toucher le circuit ;</li>
<li>pour une intensité, préférer la <strong>pince ampèremétrique</strong>, qui ne demande pas d'ouvrir le circuit ;</li>
<li>les mesures d'<strong>isolement</strong> et de <strong>continuité</strong> se font <strong>hors tension</strong>, sur un circuit consigné ;</li>
<li>brancher d'abord le cordon de référence (neutre ou terre), puis le cordon de phase ; débrancher dans l'ordre inverse.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un multimètre resté sur la position ampèremètre et posé sur deux phases provoque un court-circuit franc et un arc. Toujours vérifier la fonction sélectionnée avant de poser les pointes.</div>`
        }
      ],
      points_cles: [
        "Le BR est le chargé d'intervention générale en basse tension",
        "Il peut dépanner, raccorder, mettre en service, essayer, mesurer et consigner pour son propre compte",
        "Les interventions n'existent qu'en BT : pas d'intervention en HT",
        "Recherche de défaut parfois en présence de tension ; réparation toujours hors tension",
        "En présence de tension : EPI, outillage isolé, protection des pièces voisines",
        "Mesures d'isolement et de continuité : hors tension",
        "Pour l'intensité, préférer la pince ampèremétrique",
        "Le titre d'habilitation précise ce que la personne peut faire"
      ]
    },
    {
      id: "bt-operations-be",
      theme: "BT",
      parcours: ["bt", "be", "btht"],
      titre: "Opérations spécifiques : BE Mesurage, BE Vérification, BE Essai",
      duree: 20,
      objectifs: [
        "Savoir ce qu'est une opération spécifique et le symbole BE",
        "Distinguer mesurage, vérification et essai",
        "Savoir qui peut réaliser des essais pendant des travaux",
        "Appliquer les règles de sécurité propres à ces opérations"
      ],
      sections: [
        {
          titre: "Les opérations spécifiques",
          contenu: `<p>Certaines personnes ne réalisent ni travaux ni dépannages, mais des opérations bien définies sur les installations : mesurer, vérifier, essayer, manœuvrer. Ce sont des <strong>opérations spécifiques</strong>, identifiées par la lettre <strong>E</strong> suivie d'un <strong>attribut</strong> qui précise l'opération :</p>
<table>
<thead><tr><th>Symbole</th><th>Opération</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>BE Mesurage</td><td>Mesurages</td><td>Mesurer tensions, courants, puissances, isolement, terre, pour exploitation ou maintenance</td></tr>
<tr><td>BE Vérification</td><td>Vérifications</td><td>Contrôler la conformité d'une installation (vérifications initiales ou périodiques), sans réparer</td></tr>
<tr><td>BE Essai</td><td>Essais</td><td>Réaliser des essais de fonctionnement ou diélectriques sur un équipement ou une installation</td></tr>
<tr><td>BE Manœuvre</td><td>Manœuvres</td><td>Manœuvrer des appareils (traité dans le parcours BS et BE Manœuvre)</td></tr>
</tbody>
</table>
<p>L'attribut doit être <strong>écrit en toutes lettres</strong> sur le titre : un « BE » sans attribut ne veut rien dire. On retrouve les mêmes attributs en haute tension (HE Mesurage, HE Vérification, HE Essai, HE Manœuvre).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> BE Mesurage mesure, BE Vérification vérifie, BE Essai essaie. Aucun d'eux n'est habilité à réparer ou modifier l'installation.</div>`
        },
        {
          titre: "BE Mesurage",
          contenu: `<p>Le titulaire du <strong>BE Mesurage</strong> réalise des mesures sur des installations en exploitation, souvent <strong>en présence de tension</strong> : relevé de tension, d'intensité, analyse de réseau, thermographie de tableaux, mesure de la résistance de prise de terre.</p>
<ul>
<li>Il utilise un appareil de mesure adapté (catégorie de mesure, tension) et vérifié.</li>
<li>Il porte les EPI prévus pour le travail à proximité de pièces nues sous tension.</li>
<li>S'il découvre une anomalie, il <strong>la signale</strong> mais ne la répare pas.</li>
</ul>
<p>Les mesures réalisées par un BE Mesurage servent à l'exploitation et à la maintenance : suivi des consommations, équilibrage des phases, recherche d'échauffements, contrôle de la qualité de l'énergie. Elles ne doivent jamais conduire à modifier l'installation sans l'intervention d'une personne habilitée pour cela.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un technicien de maintenance habilité BE Mesurage pose des pinces ampèremétriques sur les départs d'un TGBT pour un bilan de puissance. Il ouvre le tableau, porte gants et écran facial, pose ses pinces, puis referme.</div>`
        },
        {
          titre: "BE Vérification",
          contenu: `<p>Le titulaire du <strong>BE Vérification</strong> contrôle qu'une installation est conforme et en bon état : examen visuel, essais des dispositifs différentiels, mesures d'isolement, de continuité des conducteurs de protection, de résistance de terre. C'est typiquement l'habilitation des vérificateurs qui réalisent les contrôles réglementaires des installations.</p>
<p>Ces vérifications combinent des opérations <strong>en présence de tension</strong> (test des différentiels, mesures de boucle) et <strong>hors tension</strong> (isolement, continuité). Pour les mesures hors tension, le vérificateur fait consigner ou met hors tension selon les procédures de l'entreprise.</p>
<p>Le vérificateur consigne ses constats dans un rapport. Il n'effectue pas lui-même les corrections : elles sont confiées par l'exploitant à des électriciens habilités (BR pour un dépannage, B1 ou B2 pour des travaux).</p>`
        },
        {
          titre: "BE Essai et chargé d'essais",
          contenu: `<p>Un <strong>essai</strong> consiste à vérifier le fonctionnement ou la tenue d'un équipement en l'alimentant, parfois sous une tension spéciale (essai diélectrique, essai de mise en service). On distingue :</p>
<ul>
<li><strong>BE Essai</strong> : essais réalisés dans le cadre d'opérations spécifiques (plateforme d'essais, laboratoire, essai d'un équipement) ;</li>
<li><strong>B2V Essai</strong> : <strong>chargé d'essais</strong> qui réalise des essais sur un ouvrage <strong>en cours de travaux</strong>, ce qui suppose de lever temporairement la consignation sur une partie de l'ouvrage, en accord avec le chargé de consignation.</li>
</ul>
<p>Pendant un essai, des parties de l'ouvrage sont remises sous tension : la zone d'essai doit être <strong>balisée</strong>, les personnes non concernées éloignées, et tout le monde prévenu.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un essai sur un ouvrage en travaux est un des moments les plus dangereux du chantier. Toute l'équipe doit savoir que l'ouvrage n'est plus consigné pendant l'essai.</div>`
        },
        {
          titre: "Règles communes",
          contenu: `<ul>
<li>Avant l'opération : préparer, obtenir l'accord de l'exploitant, repérer l'installation, choisir le matériel.</li>
<li>Pendant : respecter les distances, porter les EPI, ne jamais laisser un tableau ouvert sans surveillance.</li>
<li>Après : refermer, remettre en l'état, rendre compte des résultats et des anomalies.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un BE Vérification qui constate qu'une borne est desserrée ne la resserre pas « en passant » : il le signale. Resserrer est une opération de dépannage (BR) ou de travaux (B1, B2).</div>`
        },
        {
          titre: "Préparer et réaliser une opération spécifique",
          contenu: `<p>Une opération spécifique, même courte, se prépare comme toute opération électrique :</p>
<ol>
<li><strong>Recevoir la demande</strong> et obtenir l'accord du chargé d'exploitation ou du responsable de l'installation.</li>
<li><strong>Repérer l'installation</strong> : schémas, emplacement des tableaux, tensions présentes, régime de neutre.</li>
<li><strong>Analyser les risques</strong> : pièces nues accessibles, encombrement, éclairage, présence d'autres personnes.</li>
<li><strong>Choisir le matériel</strong> : appareil de mesure de catégorie adaptée, VAT si une mise hors tension est prévue, EPI, protections isolantes, balisage.</li>
<li><strong>Réaliser l'opération</strong> sans sortir du cadre de son habilitation.</li>
<li><strong>Remettre en état</strong> (capots, portes refermées) et <strong>rendre compte</strong> : résultats, anomalies, réserves.</li>
</ol>
<p>Si l'opération demande de mettre hors tension une partie d'installation, la personne habilitée BE ne le fait que si sa mission et ses habilitations le prévoient ; sinon, elle demande la consignation à un chargé de consignation.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un vérificateur BE Vérification doit mesurer l'isolement d'un circuit d'atelier. Il demande au chargé d'exploitation de faire consigner le circuit, réalise ses mesures hors tension, puis remet son rapport, avec les anomalies relevées.</div>`
        }
      ],
      points_cles: [
        "Opération spécifique : symbole BE suivi d'un attribut écrit sur le titre",
        "BE Mesurage : mesures ; BE Vérification : contrôles de conformité ; BE Essai : essais",
        "Ces habilitations ne permettent ni de réparer ni de modifier",
        "B2V Essai : chargé d'essais sur un ouvrage en cours de travaux",
        "Pendant un essai, la zone est balisée et le personnel prévenu",
        "Les anomalies constatées sont signalées, pas réparées",
        "Mesures en présence de tension : EPI et appareils adaptés"
      ]
    },
    {
      id: "bt-appareils-mesure",
      theme: "BT",
      parcours: ["bt", "be", "btht"],
      titre: "Appareils de mesure : catégories et règles d'utilisation",
      duree: 20,
      objectifs: [
        "Connaître les catégories de mesure CAT II, III et IV",
        "Choisir un appareil adapté au point de mesure",
        "Distinguer un VAT d'un multimètre",
        "Utiliser correctement cordons, pointes de touche et pinces"
      ],
      sections: [
        {
          titre: "Pourquoi des catégories de mesure ?",
          contenu: `<p>Sur un réseau électrique apparaissent des <strong>surtensions transitoires</strong> (foudre, manœuvres) beaucoup plus élevées que la tension normale. Elles sont d'autant plus fortes que l'on se rapproche de l'<strong>origine</strong> de l'installation, où l'énergie disponible en cas de court-circuit est aussi la plus grande.</p>
<p>Un appareil de mesure non prévu pour ces surtensions peut <strong>exploser</strong> dans la main de l'opérateur et provoquer un arc électrique. Les appareils sont donc classés par <strong>catégorie de mesure</strong>, associée à une <strong>tension</strong> (par exemple CAT III 600 V, CAT IV 600 V).</p>
<p>Le marquage figure sur l'appareil, près des bornes : il indique la catégorie et la tension maximale pour laquelle cette catégorie est garantie. Un appareil peut porter plusieurs marquages, par exemple CAT III 1000 V et CAT IV 600 V. Il faut lire ces deux informations ensemble.</p>`
        },
        {
          titre: "Les catégories",
          contenu: `<table>
<thead><tr><th>Catégorie</th><th>Où ?</th><th>Exemples de points de mesure</th></tr></thead>
<tbody>
<tr><td>CAT II</td><td>Circuits raccordés au réseau par une prise</td><td>Appareils électrodomestiques, outils portatifs, équipements branchés sur prise</td></tr>
<tr><td>CAT III</td><td>Installation fixe du bâtiment</td><td>Tableaux de distribution, câblage fixe, jeux de barres, moteurs et machines raccordés en fixe</td></tr>
<tr><td>CAT IV</td><td>Origine de l'installation basse tension</td><td>Branchement, compteur, protection principale, réseau aérien ou souterrain de distribution</td></tr>
</tbody>
</table>
<p>Plus la catégorie est élevée, plus l'appareil résiste aux surtensions. Un appareil <strong>CAT IV</strong> peut donc être utilisé en CAT III ou CAT II (à tension égale ou inférieure), mais <strong>pas l'inverse</strong>.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> CAT II = la prise, CAT III = le tableau et l'installation fixe, CAT IV = l'origine (branchement, compteur). On choisit une catégorie <strong>au moins égale</strong> à celle du point de mesure, et une tension au moins égale à celle du réseau.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un multimètre CAT II 1000 V ne convient pas pour mesurer dans un tableau de distribution, même si sa tension est élevée : la catégorie est insuffisante. La tension et la catégorie se vérifient toutes les deux.</div>`
        },
        {
          titre: "VAT, multimètre, pince",
          contenu: `<ul>
<li>Le <strong>VAT</strong> (vérificateur d'absence de tension) sert uniquement à <strong>vérifier l'absence de tension</strong> lors d'une consignation. Il est simple, robuste, sans calibre à choisir, et se teste avant et après usage.</li>
<li>Le <strong>multimètre</strong> mesure tension, intensité, résistance... Il ne doit pas servir de VAT : erreur de calibre, fusible interne coupé, pile usée peuvent afficher 0 V sur un circuit sous tension.</li>
<li>La <strong>pince ampèremétrique</strong> mesure une intensité sans ouvrir le circuit : on enserre <strong>un seul</strong> conducteur.</li>
<li>Le <strong>mesureur d'isolement</strong> (mégohmmètre) injecte une tension continue élevée : il s'utilise <strong>hors tension</strong>, en débranchant si besoin les équipements sensibles.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une pince posée autour d'un câble multipolaire complet (phase et neutre ensemble) affiche presque zéro : les courants aller et retour s'annulent. Il faut isoler un seul conducteur.</div>`
        },
        {
          titre: "Cordons, pointes et état du matériel",
          contenu: `<p>Les accessoires doivent avoir <strong>au moins</strong> la même catégorie et la même tension que l'appareil : un appareil CAT IV avec des cordons CAT II est un ensemble CAT II.</p>
<ul>
<li>Vérifier avant chaque usage : gaine sans coupure, fiches intactes, boîtier non fissuré.</li>
<li>Utiliser des <strong>pointes de touche à partie métallique courte</strong> (protecteurs en place) dans les tableaux, pour éviter de court-circuiter deux bornes voisines.</li>
<li>Garder les doigts derrière les <strong>gardes</strong> des pointes de touche.</li>
<li>Vérifier les fusibles internes et le bon fonctionnement sur une source connue.</li>
<li>Choisir la fonction et le calibre <strong>avant</strong> de raccorder, et ne jamais changer de fonction pendant la mesure.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> un appareil endommagé, mouillé ou dont le cordon est fendu ne doit pas être utilisé. Il est retiré et signalé.</div>`
        },
        {
          titre: "Mesurer une tension en sécurité",
          contenu: `<ol>
<li>Vérifier l'appareil et ses cordons (état, catégorie, tension).</li>
<li>Choisir la fonction « tension » et le bon type (alternatif ou continu) avant toute connexion.</li>
<li>Contrôler l'appareil sur une source connue.</li>
<li>Porter les EPI adaptés : gants isolants, écran facial, vêtement couvrant.</li>
<li>Raccorder d'abord le cordon de référence (neutre ou terre), puis le cordon de phase ; garder une main libre de tout contact si possible.</li>
<li>Lire la mesure, retirer d'abord le cordon de phase, puis le cordon de référence.</li>
</ol>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> pour vérifier la présence de 230 V sur la bobine d'un contacteur, l'électricien règle son multimètre sur V alternatif avant d'ouvrir l'armoire, met ses gants et son écran facial, pose le cordon noir sur la borne commune puis le cordon rouge sur l'autre borne.</div>`
        },
        {
          titre: "Les autres appareils",
          contenu: `<table>
<thead><tr><th>Appareil</th><th>Usage</th><th>Hors tension ou en présence de tension ?</th></tr></thead>
<tbody>
<tr><td>VAT</td><td>Vérifier l'absence de tension lors d'une consignation</td><td>Sur un ouvrage réputé sous tension jusqu'au résultat</td></tr>
<tr><td>Multimètre</td><td>Tension, résistance, continuité, parfois intensité</td><td>Les deux, selon la fonction : résistance et continuité hors tension</td></tr>
<tr><td>Pince ampèremétrique</td><td>Intensité sans ouvrir le circuit</td><td>En présence de tension</td></tr>
<tr><td>Mesureur d'isolement</td><td>Résistance d'isolement</td><td>Hors tension uniquement</td></tr>
<tr><td>Contrôleur de terre</td><td>Résistance de la prise de terre</td><td>Selon la méthode et les instructions du fabricant</td></tr>
<tr><td>Testeur de différentiel</td><td>Vérifier le seuil et le temps de déclenchement d'un DDR</td><td>En présence de tension</td></tr>
</tbody>
</table>
<p>Chaque appareil s'utilise en suivant la notice du fabricant. Un appareil « à tout faire » mal réglé est l'une des premières causes d'accidents lors des mesures.</p>`
        }
      ],
      points_cles: [
        "Les catégories de mesure traduisent la résistance aux surtensions selon l'endroit de la mesure",
        "CAT II : prises ; CAT III : installation fixe et tableaux ; CAT IV : origine de l'installation",
        "Choisir une catégorie et une tension au moins égales à celles du point de mesure",
        "Un CAT IV convient en CAT III, l'inverse est interdit",
        "Les cordons doivent avoir au moins la catégorie de l'appareil",
        "Le multimètre ne remplace pas le VAT",
        "La pince ampèremétrique enserre un seul conducteur",
        "La mesure d'isolement se fait hors tension"
      ]
    },
    {
      id: "bt-neutre-protections",
      theme: "BT",
      parcours: ["bt", "be", "btht"],
      titre: "Régimes de neutre et dispositifs de protection",
      duree: 22,
      objectifs: [
        "Lire les lettres d'un schéma de liaison à la terre",
        "Décrire les régimes TT, TN et IT",
        "Savoir quel dispositif coupe le défaut dans chaque régime",
        "Connaître le rôle du différentiel, du disjoncteur et du fusible"
      ],
      sections: [
        {
          titre: "Contacts directs et indirects",
          contenu: `<p>Deux situations d'électrisation sont à distinguer :</p>
<ul>
<li>le <strong>contact direct</strong> : contact avec une partie active normalement sous tension (conducteur dénudé, borne) ;</li>
<li>le <strong>contact indirect</strong> : contact avec une <strong>masse</strong> (carcasse métallique d'un appareil) mise accidentellement sous tension par un <strong>défaut d'isolement</strong>.</li>
</ul>
<p>La protection contre les contacts indirects repose sur l'association d'un <strong>schéma de liaison à la terre</strong> (le « régime de neutre ») et d'un <strong>dispositif de coupure</strong> automatique. Le choix du régime détermine comment se comporte le courant de défaut et quel appareil doit couper.</p>`
        },
        {
          titre: "Lire les lettres",
          contenu: `<p>Le régime est désigné par deux lettres :</p>
<ul>
<li><strong>Première lettre</strong> : situation du <strong>neutre</strong> par rapport à la terre. <strong>T</strong> : neutre relié directement à la terre ; <strong>I</strong> : neutre isolé de la terre ou relié par une impédance.</li>
<li><strong>Deuxième lettre</strong> : situation des <strong>masses</strong>. <strong>T</strong> : masses reliées à la terre ; <strong>N</strong> : masses reliées au neutre.</li>
</ul>
<table>
<thead><tr><th>Régime</th><th>Neutre</th><th>Masses</th><th>Au premier défaut</th><th>Protection qui coupe</th></tr></thead>
<tbody>
<tr><td>TT</td><td>À la terre</td><td>À la terre (prise de terre de l'installation)</td><td>Courant de défaut limité par les prises de terre, tension de contact dangereuse</td><td>Dispositif différentiel (DDR)</td></tr>
<tr><td>TN</td><td>À la terre</td><td>Au neutre (par le conducteur de protection)</td><td>Le défaut est un court-circuit phase-neutre</td><td>Disjoncteur ou fusible (protection contre les surintensités)</td></tr>
<tr><td>IT</td><td>Isolé ou impédant</td><td>À la terre</td><td>Courant de défaut très faible, pas de danger, signalement par le contrôleur permanent d'isolement (CPI)</td><td>Pas de coupure au premier défaut ; coupure au second défaut</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> TT = schéma des logements et des petits bâtiments raccordés au réseau public, protection par différentiel. IT = continuité de service (hôpitaux, process), le premier défaut doit être recherché et éliminé rapidement.</div>`
        },
        {
          titre: "Les variantes TN-C et TN-S",
          contenu: `<ul>
<li>En <strong>TN-C</strong>, le neutre et le conducteur de protection sont <strong>confondus</strong> en un seul conducteur, le <strong>PEN</strong>. Il ne doit jamais être coupé ni sectionné seul.</li>
<li>En <strong>TN-S</strong>, le neutre (N) et le conducteur de protection (PE) sont <strong>séparés</strong>.</li>
</ul>
<p>Le dispositif différentiel ne peut pas fonctionner sur un conducteur PEN, puisque le courant de défaut repasse par le même conducteur : en TN-C, la protection est assurée par les disjoncteurs et les fusibles.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> lors d'une consignation, la question du neutre dépend du schéma : en TN-C, le PEN ne se sectionne pas ; dans les autres cas, la séparation porte sur tous les conducteurs actifs, y compris le neutre lorsque l'organe le permet. Suivez toujours les schémas et les instructions de l'installation.</div>`
        },
        {
          titre: "Les dispositifs de protection",
          contenu: `<table>
<thead><tr><th>Dispositif</th><th>Protège contre</th><th>Principe</th></tr></thead>
<tbody>
<tr><td>Fusible</td><td>Surcharges et courts-circuits</td><td>Un élément fond et coupe le circuit ; il se remplace par un fusible de même calibre et de même type (gG usage général, aM accompagnement moteur)</td></tr>
<tr><td>Disjoncteur</td><td>Surcharges (déclencheur thermique) et courts-circuits (déclencheur magnétique)</td><td>Coupe automatiquement et se réarme</td></tr>
<tr><td>Dispositif différentiel (DDR)</td><td>Défauts d'isolement : protection des personnes contre les contacts indirects</td><td>Compare le courant aller et le courant retour : s'il y a une différence (fuite à la terre) supérieure à son seuil, il coupe</td></tr>
<tr><td>Disjoncteur différentiel</td><td>Les deux</td><td>Associe la fonction disjoncteur et la fonction différentielle</td></tr>
</tbody>
</table>
<p>Un différentiel <strong>30 mA</strong> (haute sensibilité) apporte en plus une <strong>protection complémentaire contre les contacts directs</strong> : il coupe un courant de fuite qui traverserait une personne en contact avec la terre. Il ne protège pas une personne qui toucherait à la fois la phase et le neutre, car aucun courant ne fuit alors vers la terre.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un disjoncteur ou un fusible ne protège pas les personnes contre l'électrisation : ils protègent les <strong>circuits</strong> contre les surintensités. Seul le différentiel détecte un courant de fuite à la terre.</div>`
        },
        {
          titre: "Ce qu'il faut savoir faire",
          contenu: `<ul>
<li>Ne jamais remplacer un fusible par un fusible de calibre supérieur, ni le « shunter ».</li>
<li>Avant de réarmer un disjoncteur ou un différentiel qui a déclenché, rechercher la cause.</li>
<li>Tester régulièrement les différentiels avec leur bouton test.</li>
<li>Ne jamais déconnecter un conducteur de protection (PE ou PEN) d'un appareil sous tension.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un différentiel déclenche dès que l'on remet la machine à laver en marche. Le réarmer plusieurs fois de suite ne résout rien : il signale un défaut d'isolement à rechercher, hors tension, par une mesure d'isolement.</div>`
        },
        {
          titre: "Régime de neutre et opérations de l'électricien",
          contenu: `<p>Connaître le régime de neutre de l'installation est utile pour plusieurs opérations du QCM :</p>
<ul>
<li><strong>Consignation</strong> : savoir s'il faut séparer le neutre, repérer un éventuel PEN, savoir si un défaut peut porter des masses à un potentiel dangereux.</li>
<li><strong>Recherche de défaut</strong> : en TT, un déclenchement du différentiel oriente vers un défaut d'isolement ; en IT, l'alarme du contrôleur permanent d'isolement impose de rechercher le premier défaut sans couper l'exploitation.</li>
<li><strong>VAT</strong> : vérifier aussi entre chaque conducteur et la terre, car un neutre peut être porté à un potentiel non nul.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le régime de neutre figure sur les schémas de l'installation. En cas de doute, on se renseigne avant d'agir.</div>`
        }
      ],
      points_cles: [
        "Contact direct : partie active ; contact indirect : masse mise sous tension par un défaut",
        "1re lettre : le neutre (T à la terre, I isolé) ; 2e lettre : les masses (T à la terre, N au neutre)",
        "TT : coupure par différentiel ; TN : par disjoncteur ou fusible ; IT : pas de coupure au premier défaut",
        "En IT, le contrôleur permanent d'isolement signale le premier défaut",
        "En TN-C, neutre et protection forment le PEN, qui ne se coupe pas",
        "Fusibles et disjoncteurs protègent les circuits contre les surintensités",
        "Le différentiel 30 mA protège les personnes et ajoute une protection complémentaire contre les contacts directs",
        "Avant de réarmer, rechercher la cause du déclenchement"
      ]
    }
  );
})();

(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  /* ───────────── Thème BT — questions BT-001 à BT-072 ───────────── */
  P.questions.push(
    /* Consignation : principes et étapes */
    { id: "BT-001", chapitre: "bt-consignation-principes", situation: "Vous devez remplacer un contacteur dans une armoire. Un collègue a ouvert le disjoncteur du départ et vous dit : « C'est coupé, tu peux y aller. »",
      q: "Le départ est-il consigné ?", options: ["Oui, puisque le disjoncteur est ouvert", "Non, il manque au moins la condamnation et la VAT"], bonnes: [1],
      explication: "Ouvrir un disjoncteur n'est qu'une mise hors tension. La consignation exige aussi la condamnation, l'identification, la VAT et, si nécessaire, la MALT-CC." },
    { id: "BT-002", chapitre: "bt-consignation-principes",
      q: "Quelle étape vient juste après la séparation ?", options: ["La vérification d'absence de tension", "La condamnation", "L'identification", "La mise à la terre"], bonnes: [1],
      explication: "L'ordre est : pré-identification, séparation, condamnation, identification, VAT, MALT-CC. On condamne l'organe ouvert aussitôt après l'avoir ouvert." },
    { id: "BT-003", chapitre: "bt-consignation-principes",
      q: "Quelle est la dernière étape d'une consignation, lorsqu'elle est nécessaire ?", options: ["La condamnation", "La VAT", "La mise à la terre et en court-circuit"], bonnes: [2],
      explication: "La MALT-CC se fait toujours après la VAT : on ne relie pas à la terre un ouvrage dont on n'a pas vérifié qu'il est hors tension." },
    { id: "BT-004", chapitre: "bt-consignation-principes",
      q: "La pré-identification consiste à :", options: ["Vérifier l'absence de tension sur le lieu de travail", "Poser un cadenas sur le sectionneur", "Repérer l'ouvrage et les organes de séparation sur les schémas et documents"], bonnes: [2],
      explication: "La pré-identification se fait avant toute manœuvre, à partir des plans, schémas et repères, pour savoir quoi séparer et où." },
    { id: "BT-005", chapitre: "bt-consignation-principes", situation: "Vous consignez le départ d'une pompe.",
      q: "Quels organes permettent une séparation correcte ?", options: ["Un interrupteur-sectionneur", "Un contacteur commandé par un bouton d'arrêt", "Le retrait des fusibles du départ", "Un variateur de vitesse mis à l'arrêt"], bonnes: [0, 2],
      explication: "La séparation exige une coupure certaine : sectionneur, interrupteur-sectionneur, retrait de fusibles. Un contacteur ou un variateur électronique peut se refermer ou laisser passer une tension." },
    { id: "BT-006", chapitre: "bt-consignation-principes",
      q: "La condamnation d'un organe de séparation comprend :", options: ["Une vérification d'absence de tension", "Un blocage matériel en position ouverte", "Une signalisation indiquant l'interdiction de manœuvrer"], bonnes: [1, 2],
      explication: "La condamnation associe une immobilisation (cadenas, serrure) et une signalisation. La VAT est une étape distincte, qui vient ensuite." },
    { id: "BT-007", chapitre: "bt-consignation-principes", situation: "Faute de cadenas, un collègue propose d'accrocher simplement une pancarte « Ne pas manœuvrer » sur le sectionneur.",
      q: "L'organe est-il condamné ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "Une pancarte seule informe mais n'empêche pas la manœuvre. Sans immobilisation matérielle, il n'y a pas de condamnation." },
    { id: "BT-008", chapitre: "bt-consignation-principes", situation: "Vous allez vérifier l'absence de tension sur un départ triphasé avec neutre.",
      q: "Vous devez vérifier l'absence de tension :", options: ["Entre les phases seulement", "Entre tous les conducteurs actifs, y compris le neutre", "Entre chaque conducteur et la terre"], bonnes: [1, 2],
      explication: "La VAT se fait entre tous les conducteurs actifs, neutre compris, et entre chacun d'eux et la terre ou la masse. Se limiter aux phases peut laisser passer un neutre porté à un potentiel dangereux." },
    { id: "BT-009", chapitre: "bt-consignation-principes",
      q: "Pour faire une VAT, j'utilise :", options: ["Un multimètre réglé sur volts", "Un vérificateur d'absence de tension adapté à la tension", "Un tournevis testeur"], bonnes: [1],
      explication: "Seul un VAT conforme et adapté à la tension de l'ouvrage convient. Un multimètre peut être sur une mauvaise fonction ou avoir un fusible coupé ; un tournevis testeur n'est pas fiable." },
    { id: "BT-010", chapitre: "bt-consignation-principes",
      q: "Le bon fonctionnement du VAT se vérifie :", options: ["Une fois par an", "Juste avant la vérification", "Juste après la vérification"], bonnes: [1, 2],
      explication: "On teste le VAT immédiatement avant et immédiatement après la VAT. Sinon, un VAT défaillant pourrait indiquer à tort l'absence de tension." },
    { id: "BT-011", chapitre: "bt-consignation-principes", situation: "Vous avez séparé et condamné un départ. Vous n'avez pas encore fait la VAT.",
      q: "Pendant la VAT, l'ouvrage doit être considéré comme :", options: ["Hors tension", "Sous tension"], bonnes: [1],
      explication: "Tant que l'absence de tension n'est pas vérifiée, l'ouvrage est réputé sous tension : EPI et distances s'imposent pendant la VAT." },
    { id: "BT-012", chapitre: "bt-consignation-principes",
      q: "Pendant une VAT en basse tension, je porte notamment :", options: ["Des gants isolants", "Un écran facial ou des lunettes adaptées", "Des gants de manutention en cuir"], bonnes: [0, 1],
      explication: "La VAT se fait sur un ouvrage réputé sous tension : gants isolants et protection du visage contre l'arc. Des gants de manutention ne sont pas isolants." },
    { id: "BT-013", chapitre: "bt-consignation-principes",
      q: "Où faut-il réaliser la VAT ?", options: ["Au tableau général, quel que soit le lieu de travail", "Uniquement sur l'organe de séparation", "Au plus près possible de la zone de travail"], bonnes: [2],
      explication: "La VAT se fait au plus près de la zone de travail, pour être sûr que c'est bien l'ouvrage sur lequel on travaille qui est hors tension." },
    { id: "BT-014", chapitre: "bt-consignation-principes", situation: "Vous consignez un départ basse tension alimenté aussi par un groupe électrogène de secours.",
      q: "Que devez-vous faire ?", options: ["Séparer et condamner aussi la source de secours", "Couper seulement l'alimentation normale", "Envisager une MALT-CC à cause du risque de réalimentation"], bonnes: [0, 2],
      explication: "La séparation porte sur toutes les sources. En BT, la MALT-CC est obligatoire s'il existe un risque de réalimentation." },
    { id: "BT-015", chapitre: "bt-consignation-principes",
      domaine: "HT",
      q: "En haute tension, la mise à la terre et en court-circuit est :", options: ["Facultative", "Obligatoire", "Interdite"], bonnes: [1],
      explication: "En HT, la MALT-CC est obligatoire, de part et d'autre de la zone de travail. En BT, elle dépend des risques d'induction, de réalimentation ou de charge résiduelle." },
    { id: "BT-016", chapitre: "bt-consignation-principes",
      q: "En basse tension, la MALT-CC est obligatoire en cas de :", options: ["Travail de moins d'une heure", "Risque de tension induite", "Présence de condensateurs ou de câbles de grande longueur", "Risque de réalimentation par une autre source"], bonnes: [1, 2, 3],
      explication: "En BT, la MALT-CC est exigée lorsqu'il existe un risque de tension induite, de réalimentation ou de charge résiduelle. La durée du travail n'entre pas en compte." },
    { id: "BT-017", chapitre: "bt-consignation-principes",
      q: "Lors de la pose d'un dispositif de MALT-CC, on raccorde en premier :", options: ["Les conducteurs actifs", "La terre"], bonnes: [1],
      explication: "On raccorde d'abord la terre, puis les conducteurs. Si un conducteur était encore sous tension, le courant s'écoulerait à la terre au lieu de traverser l'opérateur." },
    { id: "BT-018", chapitre: "bt-consignation-principes",
      q: "L'identification, étape de la consignation, se fait :", options: ["Uniquement sur les schémas", "Après la MALT-CC", "Sur le lieu de travail"], bonnes: [2],
      explication: "L'identification consiste à reconnaître avec certitude, sur place, l'ouvrage à traiter. Elle vient après la condamnation et avant la VAT." },

    /* Consignation BT : documents, étapes, déconsignation */
    { id: "BT-019", chapitre: "bt-consignation-documents",
      q: "Le chargé de consignation en basse tension est habilité :", options: ["B2", "BR", "BC"], bonnes: [2],
      explication: "Le symbole BC désigne le chargé de consignation en basse tension (HC en haute tension). Il consigne et déconsigne." },
    { id: "BT-020", chapitre: "bt-consignation-documents",
      q: "Dans une consignation en une étape, qui réalise la VAT ?", options: ["Le chargé de consignation", "L'exécutant B1", "Le chargé d'exploitation"], bonnes: [0],
      explication: "En une étape, le chargé de consignation réalise lui-même toutes les opérations, VAT et MALT-CC comprises, puis remet l'attestation de consignation." },
    { id: "BT-021", chapitre: "bt-consignation-documents", situation: "Une consignation est réalisée en deux étapes pour des travaux sur un câble éloigné du tableau.",
      q: "Le chargé de consignation réalise :", options: ["La séparation", "La condamnation", "La VAT sur le lieu de travail", "La MALT-CC au plus près de la zone de travail"], bonnes: [0, 1],
      explication: "En deux étapes, le chargé de consignation fait la première étape (séparation, condamnation). Le chargé de travaux réalise la seconde : identification, VAT et MALT-CC sur place." },
    { id: "BT-022", chapitre: "bt-consignation-documents", situation: "Consignation en deux étapes. Vous êtes chargé de travaux et venez de recevoir l'attestation de première étape.",
      q: "Que vous reste-t-il à faire avant de commencer ?", options: ["Rien, l'ouvrage est consigné", "L'identification de l'ouvrage sur place", "La VAT", "La MALT-CC si nécessaire"], bonnes: [1, 2, 3],
      explication: "La seconde étape revient au chargé de travaux : identification, VAT, MALT-CC. L'ouvrage n'est pas consigné tant qu'elle n'est pas faite." },
    { id: "BT-023", chapitre: "bt-consignation-documents",
      q: "L'attestation de consignation pour travaux est remise :", options: ["Par le chargé de travaux au chargé de consignation", "Par l'exécutant au chargé de travaux", "Par le chargé de consignation au chargé de travaux"], bonnes: [2],
      explication: "Le chargé de consignation remet l'attestation au chargé de travaux : elle lui indique que l'ouvrage est consigné." },
    { id: "BT-024", chapitre: "bt-consignation-documents",
      q: "L'avis de fin de travail est remis :", options: ["Par le chargé de travaux", "Par le chargé de consignation", "Au chargé de consignation ou au chargé d'exploitation"], bonnes: [0, 2],
      explication: "À la fin des travaux, le chargé de travaux remet l'avis de fin de travail au chargé de consignation (ou au chargé d'exploitation selon l'organisation), qui peut alors déconsigner." },
    { id: "BT-025", chapitre: "bt-consignation-documents", situation: "Vous avez remis l'avis de fin de travail. Vous remarquez qu'une vis de borne n'est pas serrée.",
      q: "Pouvez-vous la resserrer ?", options: ["Oui, l'ouvrage est encore coupé", "Non, l'ouvrage doit être considéré sous tension"], bonnes: [1],
      explication: "Après la remise de l'avis de fin de travail, l'ouvrage est réputé sous tension. Toute nouvelle opération demande une nouvelle consignation." },
    { id: "BT-026", chapitre: "bt-consignation-documents",
      q: "Avant de remettre l'avis de fin de travail, le chargé de travaux :", options: ["Vérifie que le personnel et l'outillage sont retirés", "Prévient son équipe que l'ouvrage est désormais réputé sous tension", "Remet lui-même l'ouvrage sous tension", "Retire les MALT-CC qu'il a posées"], bonnes: [0, 1, 3],
      explication: "Le chargé de travaux libère l'ouvrage : personnel et outils retirés, équipe prévenue, MALT-CC de la zone de travail retirées. C'est le chargé de consignation qui déconsigne, et la remise sous tension suit." },
    { id: "BT-027", chapitre: "bt-consignation-documents", situation: "Deux équipes travaillent sur le même ouvrage consigné. La première a terminé et remis son avis de fin de travail.",
      q: "Le chargé de consignation peut-il déconsigner ?", options: ["Oui", "Non, il doit attendre l'avis de fin de travail de la seconde équipe"], bonnes: [1],
      explication: "On ne déconsigne qu'après avoir reçu les avis de fin de travail de toutes les équipes intervenant sur l'ouvrage." },
    { id: "BT-028", chapitre: "bt-consignation-documents", situation: "En fin de journée, vous trouvez sur un sectionneur un cadenas de consignation qui n'est pas le vôtre. Son propriétaire est parti.",
      q: "Vous pouvez :", options: ["Couper le cadenas pour remettre en service", "Laisser le cadenas et prévenir votre responsable", "Demander la clé au gardien et retirer le cadenas"], bonnes: [1],
      explication: "On ne retire jamais un cadenas posé par quelqu'un d'autre : son propriétaire travaille peut-être encore sur l'ouvrage. Le retrait exceptionnel suit une procédure de l'entreprise." },
    { id: "BT-029", chapitre: "bt-consignation-documents",
      q: "Un message collationné est un message :", options: ["Écrit et signé par les deux parties", "Envoyé par SMS sans réponse", "Transmis oralement, répété par le destinataire et confirmé par l'émetteur"], bonnes: [2],
      explication: "Le message collationné est répété par celui qui le reçoit et confirmé par celui qui l'émet, puis enregistré. Il évite les erreurs de compréhension." },
    { id: "BT-030", chapitre: "bt-consignation-documents", situation: "Vous êtes habilité BR. Vous devez remplacer un relais thermique sur un départ moteur.",
      q: "Pouvez-vous consigner vous-même le départ ?", options: ["Oui, pour mon propre compte", "Non, seul un BC peut consigner"], bonnes: [0],
      explication: "Le BR peut consigner pour son propre compte l'installation sur laquelle il intervient. Il doit réaliser toutes les étapes, y compris la condamnation." },
    { id: "BT-031", chapitre: "bt-consignation-documents", situation: "Vous êtes BR et consignez pour votre propre compte. Vous travaillez seul, à deux mètres du sectionneur que vous voyez en permanence.",
      q: "La condamnation est-elle nécessaire ?", options: ["Non, je vois le sectionneur", "Oui, toujours"], bonnes: [1],
      explication: "Aucune étape n'est facultative, même si l'on voit l'organe de séparation : une manœuvre peut survenir pendant un instant d'inattention." },
    { id: "BT-032", chapitre: "bt-consignation-documents",
      q: "La consignation en deux étapes est surtout utilisée lorsque :", options: ["Le lieu de travail est éloigné des organes de séparation", "Le travail dure moins de dix minutes", "L'ouvrage n'a qu'une seule source"], bonnes: [0],
      explication: "Quand les organes de séparation sont loin du lieu de travail (câble long, réseau étendu), le chargé de travaux réalise sur place la seconde étape." },
    { id: "BT-033", chapitre: "bt-consignation-documents",
      q: "Qui déconsigne l'ouvrage ?", options: ["L'exécutant qui a fini le dernier", "N'importe quel électricien habilité B2", "Le chargé de consignation"], bonnes: [2],
      explication: "Le chargé de consignation déconsigne après avoir reçu le ou les avis de fin de travail : il retire ses MALT-CC et lève les condamnations." },
    { id: "BT-034", chapitre: "bt-consignation-documents",
      q: "Un électricien habilité B2V BC peut :", options: ["Diriger des travaux au voisinage", "Consigner l'ouvrage pour son équipe", "Réaliser des dépannages"], bonnes: [0, 1],
      explication: "B2V : chargé de travaux, y compris au voisinage ; BC : chargé de consignation. Le dépannage relève du BR, qu'il ne possède pas." },
    { id: "BT-035", chapitre: "bt-consignation-documents",
      q: "L'autorisation de travail est délivrée par :", options: ["Le chargé d'exploitation électrique", "L'exécutant", "Le surveillant de sécurité"], bonnes: [0],
      explication: "Le chargé d'exploitation électrique, responsable de l'installation, autorise les travaux sur l'ouvrage qu'il exploite." },
    { id: "BT-036", chapitre: "bt-consignation-documents", situation: "Le chargé de consignation vous remet l'attestation de consignation d'un départ. Arrivé sur place, vous constatez que le repère du câble ne correspond pas à celui de l'attestation.",
      q: "Vous :", options: ["Commencez, l'attestation fait foi", "Faites une VAT et commencez si elle est bonne", "Arrêtez et prévenez le chargé de consignation"], bonnes: [2],
      explication: "Un doute sur l'identification arrête tout. La VAT ne suffit pas : on pourrait travailler sur un ouvrage voisin qui serait remis sous tension plus tard." },

    /* Travaux hors tension B1 / B2 */
    { id: "BT-037", chapitre: "bt-travaux-hors-tension",
      q: "Le symbole B1 désigne :", options: ["Un exécutant électricien pour travaux hors tension", "Un chargé de travaux", "Un chargé d'intervention générale"], bonnes: [0],
      explication: "B1 : exécutant de travaux d'ordre électrique hors tension. B2 : chargé de travaux. BR : chargé d'intervention générale." },
    { id: "BT-038", chapitre: "bt-travaux-hors-tension",
      q: "Le symbole B2 désigne :", options: ["Un exécutant", "Un chargé de consignation", "Un chargé de travaux d'ordre électrique"], bonnes: [2],
      explication: "Le B2 dirige des travaux d'ordre électrique hors tension et assure la sécurité de son équipe. Le chargé de consignation est BC." },
    { id: "BT-039", chapitre: "bt-travaux-hors-tension", situation: "Vous êtes habilité B1. Une machine de l'atelier tombe en panne et votre chef d'atelier vous demande de la dépanner.",
      q: "Votre habilitation vous permet-elle ce dépannage ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "Le dépannage est une intervention, qui relève du BR. Le B1 réalise des travaux hors tension, sous la direction d'un chargé de travaux." },
    { id: "BT-040", chapitre: "bt-travaux-hors-tension",
      q: "Parmi ces opérations, lesquelles sont des travaux (et non des interventions) ?", options: ["Rechercher la cause d'une panne", "Installer un tableau neuf dans un atelier", "Remplacer un fusible grillé", "Rénover le câblage de tout un étage"], bonnes: [1, 3],
      explication: "Les travaux réalisent ou modifient un ouvrage et s'organisent sur un ouvrage consigné. Remplacer un fusible et rechercher une panne sont des interventions." },
    { id: "BT-041", chapitre: "bt-travaux-hors-tension",
      q: "Qui délimite la zone de travail ?", options: ["Le chargé de travaux", "Le chargé de consignation", "Chaque exécutant pour lui-même"], bonnes: [0],
      explication: "Le chargé de travaux délimite matériellement la zone de travail et indique à ses exécutants où ils peuvent travailler." },
    { id: "BT-042", chapitre: "bt-travaux-hors-tension", situation: "Vous êtes exécutant B1. En débranchant un câble sur un ouvrage consigné, votre VAT de contrôle s'allume.",
      q: "Vous devez :", options: ["Continuer avec des gants isolants", "Arrêter le travail", "Prévenir le chargé de travaux"], bonnes: [1, 2],
      explication: "Une présence de tension sur un ouvrage censé être consigné est une anomalie grave : on s'arrête, on s'éloigne et on prévient le chargé de travaux." },
    { id: "BT-043", chapitre: "bt-travaux-hors-tension",
      q: "Avant de commencer les travaux, le chargé de travaux :", options: ["Reçoit l'attestation de consignation", "S'assure de l'identification de l'ouvrage sur place", "Donne des instructions précises à ses exécutants", "Remet l'avis de fin de travail"], bonnes: [0, 1, 2],
      explication: "L'avis de fin de travail se remet à la fin. Avant de commencer, le chargé de travaux reçoit l'attestation, identifie l'ouvrage, balise et donne ses instructions." },
    { id: "BT-044", chapitre: "bt-travaux-hors-tension",
      q: "Le balisage de la zone de travail est retiré :", options: ["Dès que le travail principal est fini", "Par le chargé de consignation avant les travaux", "À la fin des travaux, au moment de remettre l'avis de fin de travail"], bonnes: [2],
      explication: "Le balisage reste en place pendant tous les travaux. Il est retiré à la fin, quand le chargé de travaux libère l'ouvrage." },
    { id: "BT-045", chapitre: "bt-travaux-hors-tension",
      q: "Le surveillant de sécurité électrique :", options: ["Participe au travail quand il en a le temps", "Peut faire cesser le travail en cas de danger", "Ne doit pas s'absenter pendant la surveillance"], bonnes: [1, 2],
      explication: "Le surveillant se consacre uniquement à la surveillance. Il ne participe pas au travail, reste présent et peut faire arrêter le travail." },
    { id: "BT-046", chapitre: "bt-travaux-hors-tension", situation: "Le surveillant de sécurité électrique doit s'absenter pour répondre à un appel urgent.",
      q: "Le travail surveillé :", options: ["Continue normalement", "Est interrompu jusqu'à son retour ou son remplacement"], bonnes: [1],
      explication: "Sans surveillant, les personnes surveillées ne peuvent plus assurer leur sécurité : le travail s'arrête." },
    { id: "BT-047", chapitre: "bt-travaux-hors-tension",
      q: "Un chargé de travaux B2 peut participer lui-même aux travaux :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Le chargé de travaux peut travailler avec son équipe, à condition de continuer à assurer la direction et la sécurité de l'ensemble." },
    { id: "BT-048", chapitre: "bt-travaux-hors-tension", situation: "Vous êtes chargé de travaux B2. Vous devez quitter le chantier une heure.",
      q: "Que faites-vous ?", options: ["Je laisse les exécutants continuer seuls", "Je désigne un remplaçant habilité pour diriger les travaux", "Je fais cesser le travail pendant mon absence"], bonnes: [1, 2],
      explication: "Une équipe ne reste pas sans chargé de travaux : soit un remplaçant habilité prend la direction, soit le travail est interrompu." },
    { id: "BT-049", chapitre: "bt-travaux-hors-tension",
      q: "Un exécutant B1 peut commencer à travailler :", options: ["Dès son arrivée sur le chantier", "Lorsque le chargé de travaux lui en donne l'instruction"], bonnes: [1],
      explication: "L'exécutant attend les instructions du chargé de travaux, qui ne les donne qu'une fois la consignation complète et la zone de travail délimitée." },
    { id: "BT-050", chapitre: "bt-travaux-hors-tension",
      q: "L'électricien B2V Essai est :", options: ["Un chargé d'essais", "Un vérificateur réglementaire", "Un exécutant de dépannage"], bonnes: [0],
      explication: "L'attribut Essai associé à B2V désigne le chargé d'essais, qui réalise des essais sur un ouvrage en cours de travaux." },
    { id: "BT-051", chapitre: "bt-travaux-hors-tension",
      q: "Le balisage de la zone de travail sert à :", options: ["Signaler la zone consignée", "Empêcher l'entrée de personnes non concernées", "Remplacer la condamnation", "Éviter de confondre la zone avec des parties restées sous tension"], bonnes: [0, 1, 3],
      explication: "Le balisage signale et délimite. Il ne remplace en aucun cas la condamnation des organes de séparation." },
    { id: "BT-052", chapitre: "bt-travaux-hors-tension", situation: "Sur le chantier, vous découvrez un câble qui n'apparaît pas sur les plans et qui passe dans votre zone de travail.",
      q: "Vous :", options: ["Le coupez, puisqu'il n'est pas sur les plans", "Arrêtez et prévenez le chargé de travaux", "Le considérez comme sous tension"], bonnes: [1, 2],
      explication: "Un élément inconnu est réputé sous tension. On s'arrête et on prévient le chargé de travaux, qui fera vérifier l'origine du câble." },
    { id: "BT-053", chapitre: "bt-travaux-hors-tension",
      q: "Un électricien B2 sans attribut V peut diriger des travaux :", options: ["En zone 4 sans protection", "Sous tension", "Hors tension, sans pièce nue sous tension non protégée à proximité immédiate"], bonnes: [2],
      explication: "Sans l'attribut V, le B2 dirige des travaux hors tension en dehors de la zone 4. Le voisinage renforcé exige B2V ; le travail sous tension exige B2T." },
    { id: "BT-054", chapitre: "bt-travaux-hors-tension",
      q: "Qui répond de la sécurité de l'équipe pendant les travaux ?", options: ["Le chargé de consignation", "Le chargé de travaux", "Le surveillant de sécurité dans tous les cas"], bonnes: [1],
      explication: "Le chargé de travaux dirige l'équipe et répond de sa sécurité. Le chargé de consignation garantit la consignation de l'ouvrage." },

    /* Voisinage BT */
    { id: "BT-055", chapitre: "bt-voisinage",
      q: "En basse tension, la zone de voisinage renforcé est la :", options: ["Zone 1", "Zone 2", "Zone 4"], bonnes: [2],
      explication: "La zone 4 est la zone de voisinage renforcé BT. Les zones 2 et 3 sont propres à la haute tension ; la zone 1 est le voisinage simple." },
    { id: "BT-056", chapitre: "bt-voisinage",
      q: "En basse tension, la DLVR (confondue avec la DMA) vaut :", options: ["1 m", "3 m", "0,30 m"], bonnes: [2],
      explication: "En BT, la distance limite de voisinage renforcé est confondue avec la distance minimale d'approche : 0,30 m des pièces nues sous tension." },
    { id: "BT-057", chapitre: "bt-voisinage", situation: "Vous êtes habilité B1. Dans un tableau, vous devez remplacer un câble sur un départ consigné. Le jeu de barres, nu et sous tension, est à 15 cm de vos mains.",
      q: "Votre habilitation suffit-elle ?", options: ["Oui, le départ est consigné", "Non, vous êtes en zone 4 : il faut B1V ou supprimer le voisinage"], bonnes: [1],
      explication: "À moins de 0,30 m d'une pièce nue sous tension, vous êtes en zone 4. Il faut l'attribut V, ou supprimer le voisinage (consigner ou protéger le jeu de barres)." },
    { id: "BT-058", chapitre: "bt-voisinage",
      q: "Pour réaliser des travaux en zone 4, un exécutant doit être habilité :", options: ["B1", "B1V", "B0"], bonnes: [1],
      explication: "L'attribut V autorise les travaux en zone de voisinage renforcé. B1 seul ne le permet pas ; B0 est un non-électricien." },
    { id: "BT-059", chapitre: "bt-voisinage",
      q: "Quelle mesure est à privilégier en premier pour un travail au voisinage ?", options: ["Faire surveiller le travail", "Travailler avec des gants isolants sans autre mesure", "Supprimer le voisinage en consignant les parties voisines"], bonnes: [2],
      explication: "Supprimer le voisinage en consignant aussi les pièces voisines est la meilleure solution : le danger disparaît. Les autres mesures ne viennent qu'ensuite." },
    { id: "BT-060", chapitre: "bt-voisinage", situation: "Il est impossible de consigner le jeu de barres voisin du départ sur lequel vous travaillez.",
      q: "Quelles mesures pouvez-vous mettre en place ?", options: ["Poser une nappe isolante fixée sur le jeu de barres", "Travailler avec gants isolants et outils isolés", "Retirer le plastron pour mieux voir", "Poser un écran isolant rigide"], bonnes: [0, 1, 3],
      explication: "On protège les pièces nues par nappes ou écrans fixés, et on travaille avec EPI et outillage isolé. Retirer un plastron augmente au contraire l'exposition." },
    { id: "BT-061", chapitre: "bt-voisinage",
      q: "Une nappe isolante doit être :", options: ["Adaptée à la tension et en bon état", "Fixée pour ne pas glisser", "Posée après le début du travail"], bonnes: [0, 1],
      explication: "Les protections sont posées avant le travail, sont adaptées et en bon état, et maintenues par des pinces isolantes." },
    { id: "BT-062", chapitre: "bt-voisinage",
      q: "La pose d'une nappe isolante sur des pièces nues sous tension se fait :", options: ["Avec les EPI (gants isolants, écran facial)", "À mains nues pour plus de précision", "Par n'importe quel membre de l'équipe"], bonnes: [0],
      explication: "La pose expose à un contact avec les pièces sous tension : elle se fait avec EPI, par une personne habilitée et formée à cette opération." },
    { id: "BT-063", chapitre: "bt-voisinage",
      q: "La distance au voisinage se mesure entre la pièce nue sous tension et :", options: ["Le pied de l'échelle seulement", "Le corps de l'opérateur", "Les outils et objets qu'il tient"], bonnes: [1, 2],
      explication: "On prend en compte toute partie du corps et tout objet tenu ou manipulé (outil, câble, profilé), ainsi que les mouvements involontaires." },
    { id: "BT-064", chapitre: "bt-voisinage", situation: "Vous travaillez au voisinage de pièces nues sous tension dans une armoire.",
      q: "Que retirez-vous avant de commencer ?", options: ["Bague et alliance", "Montre à bracelet métallique", "Chaussures de sécurité"], bonnes: [0, 1],
      explication: "Les bijoux et objets métalliques peuvent créer un contact ou un court-circuit et provoquer de graves brûlures. Les chaussures de sécurité restent aux pieds." },
    { id: "BT-065", chapitre: "bt-voisinage", situation: "Vous avez démonté le capot qui protégeait les bornes d'arrivée d'un tableau, restées sous tension.",
      q: "Quelle est la conséquence ?", options: ["Aucune, le tableau est consigné en aval", "Une zone 4 apparaît autour des bornes désormais accessibles"], bonnes: [1],
      explication: "Retirer un capot ou un plastron rend accessibles des pièces nues sous tension : une zone de voisinage renforcé apparaît, avec les règles qui vont avec." },
    { id: "BT-066", chapitre: "bt-voisinage",
      q: "Qui décide des mesures de protection avant d'autoriser les exécutants à travailler en zone 4 ?", options: ["Chaque exécutant", "Le chargé d'exploitation seul", "Le chargé de travaux B2V"], bonnes: [2],
      explication: "Le chargé de travaux B2V analyse le voisinage, choisit les protections et les fait mettre en place avant de laisser travailler ses exécutants B1V." },
    { id: "BT-067", chapitre: "bt-voisinage",
      q: "Un électricien B0 peut-il pénétrer en zone 4 ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "La zone 4 est réservée aux personnes habilitées avec l'attribut V ou à celles dont l'habilitation le permet (BR, BC, BE avec attribut). Un B0 est un non-électricien." },
    { id: "BT-068", chapitre: "bt-voisinage",
      q: "En zone de voisinage renforcé BT, l'outillage utilisé doit être :", options: ["Isolé ou isolant", "Métallique pour être plus solide", "Quelconque si l'on porte des gants"], bonnes: [0],
      explication: "L'outillage isolé ou isolant complète les EPI : un outil métallique nu peut provoquer un court-circuit en touchant deux pièces voisines." },
    { id: "BT-069", chapitre: "bt-voisinage",
      q: "En basse tension, il existe :", options: ["Une zone 3 de travaux sous tension", "Une zone 4 de voisinage renforcé", "Une zone 1 de voisinage simple"], bonnes: [1, 2],
      explication: "En BT, on trouve la zone 1 (voisinage simple) et la zone 4 (voisinage renforcé). Les zones 2 et 3 sont propres à la haute tension." },
    { id: "BT-070", chapitre: "bt-voisinage", situation: "Vous êtes B1V. Pendant votre travail, la nappe isolante qui protège le jeu de barres voisin glisse.",
      q: "Vous :", options: ["Arrêtez le travail", "La remettez en place à mains nues", "Prévenez le chargé de travaux"], bonnes: [0, 2],
      explication: "Une protection déplacée change les conditions de sécurité : on s'arrête et on prévient le chargé de travaux. La remise en place se fait avec les EPI." },
    { id: "BT-071", chapitre: "bt-voisinage",
      q: "La zone 4 se situe :", options: ["Entre la DLVS et la DLVR", "Au-delà de la DLVS", "En deçà de la DLVR, au plus près des pièces nues sous tension"], bonnes: [2],
      explication: "La zone 4 est la plus proche des pièces nues sous tension, en deçà de la DLVR. Entre la DLVS et la DLVR, c'est la zone 1 de voisinage simple." },
    { id: "BT-072", chapitre: "bt-voisinage", situation: "Vous travaillez au voisinage d'un tableau sous tension, dans un local mal éclairé.",
      q: "Avant de commencer, vous :", options: ["Installez un éclairage suffisant", "Commencez sans attendre : l'éclairage n'a pas d'influence sur le risque", "Vérifiez la mise en place des protections"], bonnes: [0, 2],
      explication: "Un bon éclairage limite les gestes hasardeux près des pièces sous tension. Il complète, sans les remplacer, les protections, les EPI et l'outillage isolé." }
  );
})();

(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  /* ───────────── Thème BT — questions BT-073 à BT-144 ───────────── */
  P.questions.push(
    /* Interventions BR */
    { id: "BT-073", chapitre: "bt-intervention-br",
      q: "Le symbole BR désigne :", options: ["Un chargé de travaux", "Un chargé d'intervention BT générale", "Un chargé de consignation"], bonnes: [1],
      explication: "BR : chargé d'intervention générale en basse tension (dépannage, raccordement, mise en service, essais, mesurages)." },
    { id: "BT-074", chapitre: "bt-intervention-br",
      q: "Quelles opérations relèvent de l'habilitation BR ?", options: ["Dépanner un moteur", "Raccorder une machine sur un circuit existant", "Diriger une équipe pour câbler un bâtiment neuf", "Réaliser des mesures pour rechercher un défaut"], bonnes: [0, 1, 3],
      explication: "Dépannage, raccordement et mesures sont des interventions BR. Câbler un bâtiment neuf est un chantier de travaux, qui relève d'un chargé de travaux B2." },
    { id: "BT-075", chapitre: "bt-intervention-br",
      domaine: "HT",
      q: "En haute tension, existe-t-il une habilitation d'intervention équivalente au BR ?", options: ["Oui, le HR", "Non, les interventions n'existent qu'en basse tension"], bonnes: [1],
      explication: "La norme ne prévoit d'interventions qu'en BT. En HT, toute opération est un travail ou une opération spécifique (HE, HC)." },
    { id: "BT-076", chapitre: "bt-intervention-br", situation: "Vous devez remplacer un contacteur défectueux dans une armoire de commande.",
      q: "Le remplacement se fait :", options: ["En présence de tension avec des gants isolants", "Hors tension, après consignation du départ"], bonnes: [1],
      explication: "Tout ce qui peut se faire hors tension se fait hors tension. Le remplacement d'un composant se fait après consignation, même si la recherche du défaut a eu lieu sous tension." },
    { id: "BT-077", chapitre: "bt-intervention-br",
      q: "Quelles opérations peuvent nécessiter d'être faites en présence de tension ?", options: ["Mesurer la tension d'alimentation d'une bobine", "Remplacer un disjoncteur", "Observer le fonctionnement d'un automatisme pour trouver une panne"], bonnes: [0, 2],
      explication: "Mesurer une tension et observer un fonctionnement exigent la présence de tension. Remplacer un appareil se fait hors tension." },
    { id: "BT-078", chapitre: "bt-intervention-br", situation: "Vous allez mesurer des tensions dans un tableau ouvert, sous tension.",
      q: "Quels EPI portez-vous ?", options: ["Gants de manutention", "Gants isolants", "Écran facial anti-UV", "Vêtement couvrant non propagateur de flamme"], bonnes: [1, 2, 3],
      explication: "Gants isolants contre le contact, écran facial et vêtement couvrant contre l'arc électrique. Les gants de manutention ne protègent pas du risque électrique." },
    { id: "BT-079", chapitre: "bt-intervention-br",
      q: "Quelle est la première phase d'une intervention de dépannage ?", options: ["Remplacer l'élément suspect", "Remettre sous tension pour voir", "Préparer : informations, accord de l'exploitant, analyse des risques"], bonnes: [2],
      explication: "Une intervention commence par sa préparation : recueillir les symptômes et les schémas, obtenir l'accord de l'exploitant, analyser les risques et prévoir le matériel." },
    { id: "BT-080", chapitre: "bt-intervention-br", situation: "Vous avez fini un dépannage et remis l'installation en service.",
      q: "Que vous reste-t-il à faire ?", options: ["Réaliser les essais de bon fonctionnement", "Rendre compte à l'exploitant ou au client", "Partir sans prévenir"], bonnes: [0, 1],
      explication: "L'intervention se termine par les essais et le compte rendu à l'exploitant ou au client." },
    { id: "BT-081", chapitre: "bt-intervention-br", situation: "Vous recherchez une panne dans un tableau ouvert sous tension. Vous devez aller chercher une pièce au magasin.",
      q: "Que faites-vous du tableau ?", options: ["Je le laisse ouvert, je reviens vite", "Je le referme, ou je balise et fais garder la zone"], bonnes: [1],
      explication: "Un tableau ouvert sous tension laissé sans surveillance expose toute personne qui passe. On referme, ou on balise et on garde la zone." },
    { id: "BT-082", chapitre: "bt-intervention-br",
      q: "Pour mesurer l'intensité absorbée par un moteur, je privilégie :", options: ["Un multimètre en série dans le circuit", "Une pince ampèremétrique"], bonnes: [1],
      explication: "La pince ampèremétrique mesure sans ouvrir le circuit ni toucher les conducteurs : elle est beaucoup plus sûre qu'un ampèremètre inséré en série." },
    { id: "BT-083", chapitre: "bt-intervention-br",
      q: "La mesure d'isolement d'un câble se fait :", options: ["Hors tension, câble consigné", "En présence de tension", "Indifféremment"], bonnes: [0],
      explication: "Le mesureur d'isolement injecte sa propre tension : la mesure se fait hors tension, sur un circuit consigné, pour la sécurité et la validité du résultat." },
    { id: "BT-084", chapitre: "bt-intervention-br", situation: "Vous posez les cordons d'un multimètre pour mesurer une tension entre phase et neutre.",
      q: "Dans quel ordre raccordez-vous les cordons ?", options: ["D'abord le neutre, puis la phase", "D'abord la phase, puis le neutre"], bonnes: [0],
      explication: "On raccorde d'abord le conducteur de référence (neutre ou terre), puis la phase. On débranche dans l'ordre inverse : phase d'abord." },
    { id: "BT-085", chapitre: "bt-intervention-br", situation: "Votre multimètre est resté sur la position ampèremètre après une mesure précédente.",
      q: "Si vous le posez entre deux phases, que se passe-t-il ?", options: ["Il affiche la tension", "Il crée un court-circuit et peut provoquer un arc"], bonnes: [1],
      explication: "En position ampèremètre, l'appareil a une résistance très faible : posé entre deux phases, il fait un court-circuit. Vérifiez toujours la fonction avant de poser les pointes." },
    { id: "BT-086", chapitre: "bt-intervention-br",
      q: "Ce que peut faire exactement une personne habilitée figure :", options: ["Sur son attestation de formation seulement", "Dans sa fiche de poste uniquement", "Sur son titre d'habilitation délivré par l'employeur"], bonnes: [2],
      explication: "L'habilitation est délivrée par l'employeur, sur un titre qui précise les symboles, les attributs et le domaine. L'attestation de formation ne vaut pas habilitation." },
    { id: "BT-087", chapitre: "bt-intervention-br", situation: "Un client vous demande, en tant que BR, de remplacer tout le tableau électrique de son atelier et de reprendre tous les circuits.",
      q: "Ce chantier relève :", options: ["D'une intervention BR", "De travaux, dirigés par un chargé de travaux B2 ou B2V"], bonnes: [1],
      explication: "Remplacer un tableau et reprendre les circuits est un chantier de travaux, sur un ouvrage consigné, dirigé par un chargé de travaux." },
    { id: "BT-088", chapitre: "bt-intervention-br",
      q: "Le BR assure :", options: ["La consignation de tout le site", "Sa propre sécurité", "La sécurité des personnes qui l'assistent"], bonnes: [1, 2],
      explication: "Le BR prépare et réalise son intervention en assurant sa sécurité et celle des personnes qui l'assistent. Il ne consigne que pour son propre compte." },
    { id: "BT-089", chapitre: "bt-intervention-br", situation: "Pendant une recherche de défaut en présence de tension, des pièces nues voisines sont à portée de main.",
      q: "Vous :", options: ["Posez des protections isolantes sur les pièces voisines", "Utilisez des outils isolés", "Travaillez plus vite pour réduire l'exposition"], bonnes: [0, 1],
      explication: "On protège les pièces voisines et on utilise des outils isolés, en plus des EPI. Se précipiter augmente au contraire le risque de geste malheureux." },
    { id: "BT-090", chapitre: "bt-intervention-br",
      q: "L'intervention BT générale porte sur :", options: ["Une partie limitée de l'installation, pour une durée courte", "Toute une installation, sur plusieurs semaines", "Les ouvrages haute tension"], bonnes: [0],
      explication: "L'intervention est limitée dans l'espace et dans le temps, en basse tension. Les opérations longues et étendues sont des travaux." },
    { id: "BT-091", chapitre: "bt-intervention-br", situation: "Vous êtes BR. Un disjoncteur déclenche régulièrement sur le départ d'une machine.",
      q: "Que faites-vous en premier ?", options: ["Remplacer le disjoncteur par un calibre supérieur", "Réarmer jusqu'à ce que ça tienne", "Rechercher la cause du déclenchement"], bonnes: [2],
      explication: "Un déclenchement signale une surcharge, un court-circuit ou un défaut : on en recherche la cause. Augmenter le calibre supprime la protection du câble." },
    { id: "BT-092", chapitre: "bt-intervention-br",
      q: "Pendant une intervention en présence de tension, les mains doivent être :", options: ["Propres et sèches", "Humides pour une meilleure prise", "Protégées par des gants isolants"], bonnes: [0, 2],
      explication: "L'humidité diminue la résistance du corps. On porte des gants isolants vérifiés, sur des mains propres et sèches." },

    /* Opérations spécifiques BE */
    { id: "BT-093", chapitre: "bt-operations-be",
      q: "Un technicien chargé de relever les consommations des départs d'un TGBT avec des pinces doit être habilité au minimum :", options: ["BE Mesurage", "BE Manœuvre", "B0"], bonnes: [0],
      explication: "Les mesures sur une installation BT relèvent du BE Mesurage (ou d'un BR). BE Manœuvre ne permet que des manœuvres ; B0 est un non-électricien." },
    { id: "BT-094", chapitre: "bt-operations-be",
      q: "Le symbole « BE » sans attribut :", options: ["Autorise toutes les opérations spécifiques", "N'a pas de sens : l'attribut doit être précisé"], bonnes: [1],
      explication: "Le BE est toujours suivi d'un attribut écrit en toutes lettres : Mesurage, Vérification, Essai ou Manœuvre." },
    { id: "BT-095", chapitre: "bt-operations-be", situation: "Habilité BE Vérification, vous contrôlez une installation et trouvez une borne desserrée.",
      q: "Vous :", options: ["La resserrez immédiatement", "Signalez l'anomalie dans votre rapport", "Prévenez l'exploitant"], bonnes: [1, 2],
      explication: "Le BE Vérification contrôle, il ne répare pas. Resserrer une borne est un dépannage (BR) ou un travail (B1, B2)." },
    { id: "BT-096", chapitre: "bt-operations-be",
      q: "Quelles opérations un BE Vérification peut-il réaliser ?", options: ["Remplacer un différentiel défectueux", "Tester le fonctionnement des dispositifs différentiels", "Mesurer la continuité des conducteurs de protection"], bonnes: [1, 2],
      explication: "Tests et mesures de vérification relèvent du BE Vérification. Le remplacement d'un appareil est un dépannage ou un travail." },
    { id: "BT-097", chapitre: "bt-operations-be",
      q: "Le chargé d'essais qui réalise des essais sur un ouvrage en cours de travaux est habilité :", options: ["BE Mesurage", "B1", "B2V Essai"], bonnes: [2],
      explication: "Le chargé d'essais, intervenant sur un ouvrage en travaux, est habilité B2V Essai. Les essais hors chantier de travaux relèvent du BE Essai." },
    { id: "BT-098", chapitre: "bt-operations-be", situation: "Un essai doit être réalisé sur une partie d'un ouvrage en cours de travaux.",
      q: "Quelles précautions s'imposent ?", options: ["Baliser la zone d'essai", "Prévenir tout le personnel que l'ouvrage n'est plus consigné pendant l'essai", "Laisser les exécutants continuer leurs travaux sur la partie essayée"], bonnes: [0, 1],
      explication: "Pendant l'essai, une partie de l'ouvrage est remise sous tension : on balise, on éloigne et on prévient tout le monde. Personne ne travaille sur la partie essayée." },
    { id: "BT-099", chapitre: "bt-operations-be",
      q: "Les attributs possibles d'une opération spécifique en BT sont :", options: ["Dépannage", "Mesurage", "Vérification", "Essai"], bonnes: [1, 2, 3],
      explication: "Les attributs sont Mesurage, Vérification, Essai et Manœuvre. Le dépannage est une intervention (BR)." },
    { id: "BT-100", chapitre: "bt-operations-be", situation: "Habilité BE Mesurage, vous constatez lors d'une mesure qu'un départ est en surcharge.",
      q: "Pouvez-vous changer le calibre du disjoncteur ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "Le BE Mesurage mesure et signale. Toute modification de l'installation sort de son habilitation." },
    { id: "BT-101", chapitre: "bt-operations-be",
      q: "Une mesure de résistance de prise de terre réalisée lors d'un contrôle périodique relève :", options: ["Du BE Vérification", "Du BS", "Du B0"], bonnes: [0],
      explication: "Les contrôles de conformité, dont la mesure de la prise de terre, relèvent du BE Vérification (ou d'un BR selon le cadre)." },
    { id: "BT-102", chapitre: "bt-operations-be",
      domaine: "HT",
      q: "En haute tension, les opérations spécifiques équivalentes se notent :", options: ["HR", "H0V", "HE suivi de l'attribut"], bonnes: [2],
      explication: "On retrouve en HT les mêmes attributs : HE Mesurage, HE Vérification, HE Essai, HE Manœuvre." },
    { id: "BT-103", chapitre: "bt-operations-be", situation: "Vous êtes BE Mesurage et devez poser des pinces dans un tableau dont les borniers sont nus.",
      q: "Vous :", options: ["Portez gants isolants et écran facial", "Utilisez un appareil adapté et vérifié", "Laissez le tableau ouvert à la fin pour la prochaine mesure"], bonnes: [0, 1],
      explication: "Mesurer en présence de tension exige EPI et appareil adapté. À la fin, on referme le tableau et on remet en l'état." },
    { id: "BT-104", chapitre: "bt-operations-be",
      q: "Un BE Essai peut-il réparer l'équipement qu'il vient d'essayer ?", options: ["Oui, s'il est compétent", "Non, sauf s'il détient aussi l'habilitation correspondante (BR, B1, B2)"], bonnes: [1],
      explication: "Chaque habilitation couvre des opérations précises. Pour réparer, il faut l'habilitation adaptée, inscrite sur le titre." },
    { id: "BT-105", chapitre: "bt-operations-be",
      q: "Avant une opération de mesurage, il faut :", options: ["Démonter les protections pour gagner du temps", "Obtenir l'accord de l'exploitant", "Repérer l'installation", "Choisir le matériel adapté"], bonnes: [1, 2, 3],
      explication: "On prépare : accord, repérage, matériel. On ne démonte pas des protections sans nécessité : cela crée des zones de voisinage." },
    { id: "BT-106", chapitre: "bt-operations-be",
      q: "Les mesures d'isolement réalisées lors d'une vérification se font :", options: ["Hors tension", "En présence de tension"], bonnes: [0],
      explication: "La mesure d'isolement se fait toujours hors tension. Le vérificateur fait consigner ou met hors tension selon les procédures." },
    { id: "BT-107", chapitre: "bt-operations-be",
      q: "Quel est l'objectif d'un essai ?", options: ["Vérifier le fonctionnement ou la tenue d'un équipement en l'alimentant", "Mettre en sécurité un ouvrage", "Délimiter une zone de travail"], bonnes: [0],
      explication: "L'essai consiste à alimenter un équipement, parfois sous une tension spéciale, pour vérifier son fonctionnement ou sa tenue." },
    { id: "BT-108", chapitre: "bt-operations-be", situation: "Une personne habilitée BE Manœuvre vous propose de faire à sa place des mesures de tension dans un tableau.",
      q: "Est-ce possible ?", options: ["Oui", "Non, il lui faut BE Mesurage ou BR"], bonnes: [1],
      explication: "BE Manœuvre autorise seulement des manœuvres. Les mesures demandent BE Mesurage, BE Vérification selon le cas, ou BR." },

    /* Appareils de mesure */
    { id: "BT-109", chapitre: "bt-appareils-mesure",
      q: "La catégorie de mesure CAT IV correspond :", options: ["Aux prises de courant", "Aux circuits électroniques", "À l'origine de l'installation (branchement, compteur)"], bonnes: [2],
      explication: "CAT IV : origine de l'installation BT et réseau de distribution. CAT III : installation fixe ; CAT II : appareils sur prise." },
    { id: "BT-110", chapitre: "bt-appareils-mesure",
      q: "Une mesure dans un tableau de distribution d'atelier relève de la catégorie :", options: ["CAT II", "CAT III", "CAT I"], bonnes: [1],
      explication: "Les tableaux de distribution et le câblage fixe du bâtiment relèvent de la CAT III." },
    { id: "BT-111", chapitre: "bt-appareils-mesure",
      q: "Une mesure sur un appareil électroménager branché sur une prise relève de la catégorie :", options: ["CAT III", "CAT IV", "CAT II"], bonnes: [2],
      explication: "Les équipements raccordés par une prise relèvent de la CAT II." },
    { id: "BT-112", chapitre: "bt-appareils-mesure", situation: "Vous devez mesurer la tension au niveau du compteur, à l'origine de l'installation.",
      q: "Quel appareil convient ?", options: ["CAT II 1000 V", "CAT III 600 V", "CAT IV 600 V"], bonnes: [2],
      explication: "À l'origine de l'installation, il faut un appareil CAT IV, de tension suffisante. Une tension élevée ne compense pas une catégorie insuffisante." },
    { id: "BT-113", chapitre: "bt-appareils-mesure", situation: "Vous possédez un multimètre CAT IV 600 V.",
      q: "Pouvez-vous l'utiliser dans un tableau de distribution 400 V ?", options: ["Oui", "Non"], bonnes: [0],
      explication: "Une catégorie supérieure convient pour une catégorie inférieure : un CAT IV 600 V peut servir en CAT III sur un réseau 400 V." },
    { id: "BT-114", chapitre: "bt-appareils-mesure",
      q: "Pour choisir un appareil de mesure, je vérifie :", options: ["Sa catégorie de mesure", "Sa tension assignée", "La catégorie de ses cordons", "Sa couleur"], bonnes: [0, 1, 2],
      explication: "Catégorie et tension doivent être au moins égales à celles du point de mesure, pour l'appareil comme pour ses cordons." },
    { id: "BT-115", chapitre: "bt-appareils-mesure", situation: "Votre multimètre est CAT IV, mais vous avez emprunté des cordons marqués CAT II.",
      q: "L'ensemble est de catégorie :", options: ["CAT IV", "CAT II"], bonnes: [1],
      explication: "La catégorie d'un ensemble est celle de son élément le plus faible : avec des cordons CAT II, l'ensemble est CAT II." },
    { id: "BT-116", chapitre: "bt-appareils-mesure",
      q: "Pourquoi les catégories de mesure existent-elles ?", options: ["Pour tenir compte des surtensions transitoires selon l'endroit de la mesure", "Pour classer les appareils selon leur prix", "Pour indiquer la précision de la mesure"], bonnes: [0],
      explication: "Les surtensions et l'énergie disponible augmentent vers l'origine de l'installation. La catégorie garantit que l'appareil y résiste sans exploser." },
    { id: "BT-117", chapitre: "bt-appareils-mesure",
      q: "Un multimètre peut-il remplacer un VAT pour une consignation ?", options: ["Oui, s'il est bien réglé", "Non"], bonnes: [1],
      explication: "La VAT se fait avec un VAT conforme. Un multimètre peut afficher 0 V sur un circuit sous tension (mauvaise fonction, fusible interne coupé, pile usée)." },
    { id: "BT-118", chapitre: "bt-appareils-mesure", situation: "Vous placez une pince ampèremétrique autour d'un câble d'alimentation monophasé complet (phase et neutre dans la même gaine).",
      q: "Que va afficher la pince ?", options: ["Le courant consommé", "Une valeur proche de zéro"], bonnes: [1],
      explication: "Les courants aller et retour s'annulent dans la pince. Il faut enserrer un seul conducteur." },
    { id: "BT-119", chapitre: "bt-appareils-mesure",
      q: "Dans un tableau, on utilise de préférence des pointes de touche :", options: ["À partie métallique courte, protecteurs en place", "À longue pointe nue pour atteindre les bornes"], bonnes: [0],
      explication: "Une pointe courte limite le risque de court-circuiter deux bornes voisines et donc de provoquer un arc." },
    { id: "BT-120", chapitre: "bt-appareils-mesure", situation: "Avant une mesure, vous remarquez que la gaine d'un cordon est fendue.",
      q: "Vous :", options: ["Mettez du ruban adhésif et mesurez", "Mesurez en tenant le cordon par la partie saine", "N'utilisez pas le cordon et le faites remplacer"], bonnes: [2],
      explication: "Un accessoire endommagé ne doit pas être utilisé : il est retiré et remplacé." },
    { id: "BT-121", chapitre: "bt-appareils-mesure",
      q: "La fonction et le calibre d'un multimètre se choisissent :", options: ["Avant de raccorder les cordons au circuit", "Pendant la mesure, si l'affichage est incohérent"], bonnes: [0],
      explication: "On ne change jamais de fonction pendant la mesure : on règle avant, puis on raccorde." },
    { id: "BT-122", chapitre: "bt-appareils-mesure",
      q: "Le mesureur d'isolement :", options: ["Sert de VAT", "Injecte une tension continue élevée", "S'utilise sur un circuit hors tension", "Peut endommager des équipements électroniques s'ils restent branchés"], bonnes: [1, 2, 3],
      explication: "Le mégohmmètre injecte sa propre tension, s'utilise hors tension et peut détériorer les équipements sensibles. Ce n'est pas un VAT." },
    { id: "BT-123", chapitre: "bt-appareils-mesure",
      q: "Pendant une mesure, les doigts doivent rester :", options: ["Derrière les gardes des pointes de touche", "Au plus près de la pointe pour plus de précision"], bonnes: [0],
      explication: "Les gardes délimitent la partie que l'on peut tenir sans risque de glisser vers la pointe métallique." },
    { id: "BT-124", chapitre: "bt-appareils-mesure", situation: "Vous choisissez un appareil pour mesurer sur une prise de courant d'un bureau.",
      q: "Quels appareils conviennent (tension assignée suffisante) ?", options: ["CAT II", "CAT III", "CAT IV", "Un appareil sans marquage de catégorie"], bonnes: [0, 1, 2],
      explication: "La prise relève de la CAT II : un appareil CAT II, III ou IV convient, puisqu'une catégorie supérieure peut être utilisée en catégorie inférieure. Un appareil sans marquage ne garantit aucune tenue aux surtensions." },
    { id: "BT-125", chapitre: "bt-appareils-mesure",
      q: "Que faut-il vérifier régulièrement sur un multimètre ?", options: ["L'état de ses fusibles internes", "Son fonctionnement sur une source connue", "Le type de sa sacoche"], bonnes: [0, 1],
      explication: "Un fusible interne coupé ou un appareil défaillant donne des mesures fausses. On vérifie fusibles et fonctionnement." },
    { id: "BT-126", chapitre: "bt-appareils-mesure", situation: "Vous mesurez la tension sur le jeu de barres d'un TGBT, en aval du compteur et de la protection principale.",
      q: "La catégorie minimale de l'appareil est :", options: ["CAT II", "CAT III", "CAT IV"], bonnes: [1],
      explication: "Le TGBT fait partie de l'installation fixe du bâtiment, en aval de l'origine : la CAT III est le minimum. Un CAT IV convient aussi." },

    /* Régimes de neutre et protections */
    { id: "BT-127", chapitre: "bt-neutre-protections",
      q: "Dans le régime TT :", options: ["Les masses sont reliées au neutre", "Le neutre est relié à la terre", "Les masses sont reliées à la terre"], bonnes: [1, 2],
      explication: "TT : première lettre, neutre à la terre ; seconde lettre, masses à la terre. Les masses reliées au neutre correspondent au TN." },
    { id: "BT-128", chapitre: "bt-neutre-protections",
      q: "En régime TT, le dispositif qui coupe un défaut d'isolement est :", options: ["Le fusible", "Le contrôleur permanent d'isolement", "Le dispositif différentiel"], bonnes: [2],
      explication: "En TT, le courant de défaut est limité par les prises de terre et souvent insuffisant pour faire fondre un fusible : c'est le différentiel qui coupe." },
    { id: "BT-129", chapitre: "bt-neutre-protections",
      q: "En régime TN, un défaut d'isolement se comporte comme :", options: ["Un court-circuit phase-neutre", "Une fuite négligeable", "Une surtension"], bonnes: [0],
      explication: "En TN, les masses sont reliées au neutre : le défaut devient un court-circuit, coupé par les disjoncteurs ou les fusibles." },
    { id: "BT-130", chapitre: "bt-neutre-protections",
      q: "En régime IT, au premier défaut d'isolement :", options: ["L'installation est coupée immédiatement", "Il n'y a pas de coupure, le défaut est signalé", "Le défaut doit être recherché et éliminé rapidement"], bonnes: [1, 2],
      explication: "En IT, le premier défaut n'est pas dangereux : le contrôleur permanent d'isolement le signale. Il faut le rechercher rapidement, car un second défaut provoquerait la coupure." },
    { id: "BT-131", chapitre: "bt-neutre-protections",
      q: "Dans le sigle d'un régime de neutre, la première lettre indique :", options: ["La situation des masses", "Le type de protection", "La situation du neutre par rapport à la terre"], bonnes: [2],
      explication: "Première lettre : le neutre (T relié à la terre, I isolé ou impédant). Seconde lettre : les masses (T à la terre, N au neutre)." },
    { id: "BT-132", chapitre: "bt-neutre-protections",
      q: "Le conducteur PEN se rencontre dans le régime :", options: ["TN-C", "TN-S", "TT"], bonnes: [0],
      explication: "En TN-C, neutre et conducteur de protection sont confondus en un seul conducteur, le PEN. En TN-S, ils sont séparés." },
    { id: "BT-133", chapitre: "bt-neutre-protections",
      q: "Un disjoncteur protège contre :", options: ["Les surcharges", "Les courts-circuits", "L'électrisation des personnes par contact direct"], bonnes: [0, 1],
      explication: "Le disjoncteur protège les circuits contre les surintensités (thermique pour les surcharges, magnétique pour les courts-circuits). Il ne protège pas les personnes contre l'électrisation." },
    { id: "BT-134", chapitre: "bt-neutre-protections",
      q: "Le dispositif différentiel détecte :", options: ["Une surcharge du circuit", "Une baisse de tension", "Une différence entre le courant aller et le courant retour"], bonnes: [2],
      explication: "Le différentiel compare les courants entrant et sortant : une différence signifie qu'un courant fuit à la terre, par exemple à travers une personne ou une masse." },
    { id: "BT-135", chapitre: "bt-neutre-protections",
      q: "Un différentiel 30 mA est dit :", options: ["À haute sensibilité", "À basse sensibilité"], bonnes: [0],
      explication: "Le 30 mA est un différentiel haute sensibilité : il apporte une protection complémentaire contre les contacts directs." },
    { id: "BT-136", chapitre: "bt-neutre-protections", situation: "Une personne isolée du sol touche à la fois la phase et le neutre d'un circuit protégé par un différentiel 30 mA.",
      q: "Le différentiel va-t-il couper ?", options: ["Oui", "Non, aucun courant ne fuit vers la terre"], bonnes: [1],
      explication: "Le courant entre par la phase et ressort par le neutre en traversant la personne : il n'y a pas de différence entre aller et retour, le différentiel ne voit rien." },
    { id: "BT-137", chapitre: "bt-neutre-protections",
      q: "Un contact indirect est un contact avec :", options: ["Une masse mise accidentellement sous tension", "Un conducteur actif dénudé", "Une borne de prise sous tension"], bonnes: [0],
      explication: "Contact indirect : avec une masse mise sous tension par un défaut d'isolement. Le contact avec une partie active est un contact direct." },
    { id: "BT-138", chapitre: "bt-neutre-protections", situation: "Un fusible gG de 16 A a fondu sur un circuit d'éclairage.",
      q: "Vous le remplacez par :", options: ["Un fusible gG de 25 A pour éviter que cela recommence", "Un fil de cuivre en attendant", "Un fusible gG de 16 A"], bonnes: [2],
      explication: "On remplace un fusible par un fusible de même type et même calibre, après avoir recherché la cause. Un calibre supérieur ou un shunt supprime la protection du câble." },
    { id: "BT-139", chapitre: "bt-neutre-protections",
      q: "En régime IT, le premier défaut est signalé par :", options: ["Le contrôleur permanent d'isolement", "Le disjoncteur", "Le compteur"], bonnes: [0],
      explication: "Le CPI surveille en permanence l'isolement de l'installation et signale le premier défaut." },
    { id: "BT-140", chapitre: "bt-neutre-protections",
      q: "Le régime IT est choisi principalement pour :", options: ["Réduire le prix de l'installation", "Supprimer les protections", "La continuité de service"], bonnes: [2],
      explication: "En IT, l'installation n'est pas coupée au premier défaut : on l'emploie quand l'arrêt est dangereux ou très coûteux (blocs opératoires, process industriels)." },
    { id: "BT-141", chapitre: "bt-neutre-protections", situation: "Un différentiel déclenche chaque fois qu'on remet en marche une machine.",
      q: "Vous :", options: ["Réarmez plusieurs fois jusqu'à ce qu'il tienne", "Recherchez un défaut d'isolement, hors tension", "Remplacez le différentiel par un disjoncteur simple"], bonnes: [1],
      explication: "Le différentiel signale une fuite à la terre. On recherche le défaut, hors tension, par une mesure d'isolement. Supprimer le différentiel supprime la protection des personnes." },
    { id: "BT-142", chapitre: "bt-neutre-protections",
      q: "Un fusible de type aM est destiné :", options: ["À l'usage général", "À l'éclairage uniquement", "À l'accompagnement moteur"], bonnes: [2],
      explication: "aM : accompagnement moteur, il supporte la pointe de démarrage et protège contre les courts-circuits. gG : usage général." },
    { id: "BT-143", chapitre: "bt-neutre-protections",
      q: "Quels dispositifs protègent les circuits contre les surintensités ?", options: ["Le différentiel seul (interrupteur différentiel)", "Le fusible", "Le disjoncteur"], bonnes: [1, 2],
      explication: "Fusibles et disjoncteurs protègent contre les surcharges et les courts-circuits. Un interrupteur différentiel seul ne détecte que les fuites à la terre." },
    { id: "BT-144", chapitre: "bt-neutre-protections",
      q: "Dans un logement raccordé au réseau public de distribution, le régime de neutre est généralement :", options: ["TT", "IT", "TN-C"], bonnes: [0],
      explication: "Les installations domestiques raccordées au réseau public en France sont en TT : la protection contre les contacts indirects y est assurée par les différentiels." }
  );
})();

(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  /* ───────────── Thème HT — chapitres ───────────── */
  P.chapitres.push(
    {
      id: "ht-habilitations-zones",
      theme: "HT",
      parcours: ["btht"],
      titre: "Habilitations HT, zones et risque d'amorçage",
      duree: 25,
      objectifs: [
        "Connaître les domaines de tension HTA et HTB",
        "Distinguer H1, H1V, H2, H2V, HC et HE",
        "Situer les zones 1, 2 et 3 et les distances DLVS, DLVR, DMA",
        "Comprendre le risque d'amorçage sans contact",
        "Savoir qu'il n'existe pas d'intervention en haute tension"
      ],
      sections: [
        {
          titre: "La haute tension",
          contenu: `<p>En courant alternatif, la haute tension commence <strong>au-delà de 1 000 V</strong>. Elle se divise en deux domaines :</p>
<table>
<thead><tr><th>Domaine</th><th>Courant alternatif</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>HTA</td><td>Plus de 1 000 V jusqu'à 50 000 V</td><td>Réseau de distribution 20 kV, postes de livraison d'usines, postes de transformation HTA/BT</td></tr>
<tr><td>HTB</td><td>Plus de 50 000 V</td><td>Lignes de transport 63 kV, 90 kV, 225 kV, 400 kV</td></tr>
</tbody>
</table>
<p>En courant continu, la HT commence au-delà de 1 500 V. Les opérations sur les ouvrages HT sont préparées par écrit, encadrées par des procédures et réservées à des électriciens habilités avec un symbole commençant par la lettre <strong>H</strong>.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en HT, l'électrisation peut survenir <strong>sans contact</strong>, par amorçage d'un arc dans l'air. Les distances de sécurité sont donc beaucoup plus grandes qu'en BT.</div>`
        },
        {
          titre: "Les symboles des électriciens HT",
          contenu: `<table>
<thead><tr><th>Symbole</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td>H1</td><td>Exécutant de travaux d'ordre électrique hors tension en HT</td></tr>
<tr><td>H1V</td><td>Exécutant, y compris au voisinage renforcé HT (zone 2)</td></tr>
<tr><td>H2</td><td>Chargé de travaux d'ordre électrique hors tension en HT</td></tr>
<tr><td>H2V</td><td>Chargé de travaux, y compris au voisinage renforcé HT</td></tr>
<tr><td>H2V Essai</td><td>Chargé d'essais en HT</td></tr>
<tr><td>HC</td><td>Chargé de consignation en HT</td></tr>
<tr><td>HE Manœuvre, HE Mesurage, HE Vérification, HE Essai</td><td>Opérations spécifiques en HT</td></tr>
</tbody>
</table>
<p>Il n'existe <strong>pas d'intervention</strong> en haute tension : pas de « HR » ni de « HS ». Un dépannage sur un ouvrage HT est organisé comme un travail, sur un ouvrage consigné, ou comme une opération spécifique (manœuvre, mesurage, essai).</p>
<p>Les travaux sous tension (H1T, H2T) et le nettoyage sous tension (H1N, H2N) sont réservés à du personnel spécialement formé et ne sont pas traités ici.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une habilitation HT ne vaut pas habilitation BT. Un électricien qui travaille dans un poste HTA/BT et touche aussi au tableau BT doit détenir les deux, par exemple H2V et B2V.</div>`
        },
        {
          titre: "Les zones autour d'un ouvrage HT",
          contenu: `<p>Autour des pièces nues sous tension HT, la norme définit des zones délimitées par des distances qui <strong>augmentent avec la tension</strong> :</p>
<table>
<thead><tr><th>Zone</th><th>Nom</th><th>Limites</th><th>Qui peut y entrer ?</th></tr></thead>
<tbody>
<tr><td>Zone 1</td><td>Voisinage simple</td><td>Entre la DLVS et la DLVR</td><td>Personnel habilité, avec les consignes de l'employeur</td></tr>
<tr><td>Zone 2</td><td>Voisinage renforcé HT</td><td>Entre la DLVR et la DMA</td><td>Habilitations portant l'attribut V (H0V, H1V, H2V) et HC, HE dans le cadre de leurs opérations</td></tr>
<tr><td>Zone 3</td><td>Travaux sous tension HT</td><td>En deçà de la DMA</td><td>Uniquement les travaux sous tension, selon des procédures spécifiques</td></tr>
</tbody>
</table>
<p>La <strong>DMA</strong> (distance minimale d'approche) est la somme d'une <strong>distance de tension</strong>, qui dépend de la tension, et d'une <strong>distance de garde</strong>, qui tient compte des mouvements involontaires. La <strong>DLVS</strong> est de l'ordre de quelques mètres (3 m jusqu'à 50 kV d'après les tableaux de la norme). Les valeurs précises de DLVR et de DMA dépendent de la tension de l'ouvrage : elles sont reprises dans les instructions de sécurité de l'employeur, qu'il faut consulter.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> franchir la DMA, même avec un objet tenu à la main (perche non isolante, échelle, profilé), c'est entrer dans la zone où l'arc peut s'amorcer.</div>`
        },
        {
          titre: "Le risque d'amorçage",
          contenu: `<p>L'air est un isolant, mais il a ses limites. Quand on approche d'un conducteur HT à une distance trop faible, l'air se « claque » : un <strong>arc électrique</strong> s'établit entre le conducteur et la personne ou l'objet qui s'approche, <strong>sans qu'il y ait eu contact</strong>.</p>
<ul>
<li>La distance d'amorçage augmente avec la <strong>tension</strong>.</li>
<li>L'humidité, la pluie, la pollution, la poussière favorisent l'amorçage.</li>
<li>Un arc HT provoque des brûlures très graves (température de plusieurs milliers de degrés), une projection de métal en fusion et un rayonnement ultraviolet intense.</li>
</ul>
<p>C'est pourquoi on ne s'approche jamais à moins de la DMA d'une pièce nue sous tension HT en dehors des procédures de travaux sous tension, et pourquoi les manœuvres se font avec des EPI de protection contre l'arc.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un électricien qui lève un tube métallique près d'un jeu de barres HTA, sans le toucher, peut être victime d'un arc : la distance s'apprécie depuis l'extrémité de l'objet.</div>`
        },
        {
          titre: "Les acteurs dans un ouvrage HT",
          contenu: `<p>Les rôles sont les mêmes qu'en BT : un <strong>chargé d'exploitation électrique</strong> responsable de l'ouvrage, un <strong>chargé de consignation HC</strong> qui consigne et déconsigne, un <strong>chargé de travaux H2</strong> ou <strong>H2V</strong> qui dirige l'équipe, des <strong>exécutants H1</strong> ou <strong>H1V</strong>.</p>
<p>En HT, la préparation est particulièrement formalisée : documents écrits ou messages collationnés, fiche de manœuvre, attestation de consignation, avis de fin de travail.</p>`
        },
        {
          titre: "Choisir la bonne habilitation",
          contenu: `<table>
<thead><tr><th>Situation</th><th>Habilitation adaptée</th></tr></thead>
<tbody>
<tr><td>Raccorder un câble HTA sur une cellule consignée, sous la direction d'un chargé de travaux</td><td>H1 (H1V si des pièces restent sous tension en zone 2)</td></tr>
<tr><td>Diriger le remplacement d'un transformateur dans un poste dont une cellule reste sous tension</td><td>H2V</td></tr>
<tr><td>Consigner une cellule HTA et remettre l'attestation</td><td>HC</td></tr>
<tr><td>Ouvrir et fermer des interrupteurs HTA selon une fiche de manœuvre</td><td>HE Manœuvre</td></tr>
<tr><td>Réaliser des mesures sur un ouvrage HT</td><td>HE Mesurage</td></tr>
</tbody>
</table>
<p>Comme en BT, l'habilitation est délivrée par l'employeur, après une formation et l'avis sur l'aptitude de la personne, et le titre précise les symboles, les attributs et les ouvrages concernés.</p>`
        }
      ],
      points_cles: [
        "HTA : plus de 1 kV à 50 kV en alternatif ; HTB : plus de 50 kV",
        "H1 exécutant, H2 chargé de travaux, V pour le voisinage renforcé, HC chargé de consignation, HE opérations spécifiques",
        "Il n'existe pas d'intervention en HT",
        "Zone 1 : voisinage simple ; zone 2 : voisinage renforcé HT ; zone 3 : travaux sous tension",
        "DMA = distance de tension + distance de garde ; elle augmente avec la tension",
        "En HT, un arc peut s'amorcer sans contact",
        "L'humidité et la pollution favorisent l'amorçage",
        "Une habilitation HT ne vaut pas habilitation BT"
      ]
    },
    {
      id: "ht-postes-manoeuvres",
      theme: "HT",
      parcours: ["btht"],
      titre: "Postes HTA, cellules, verrouillages et manœuvres",
      duree: 25,
      objectifs: [
        "Décrire la composition d'un poste HTA/BT",
        "Distinguer sectionneur, interrupteur et disjoncteur",
        "Comprendre le rôle des verrouillages",
        "Réaliser une manœuvre HT en sécurité"
      ],
      sections: [
        {
          titre: "Le poste HTA/BT",
          contenu: `<p>Un <strong>poste de livraison</strong> ou de transformation reçoit l'énergie du réseau HTA (souvent 20 kV) et l'abaisse en basse tension (400 V) pour l'installation. On y trouve :</p>
<ul>
<li>des <strong>cellules HTA</strong> : arrivée et départ du réseau, protection générale, protection du transformateur, comptage ;</li>
<li>un ou plusieurs <strong>transformateurs</strong> HTA/BT ;</li>
<li>le <strong>tableau général basse tension</strong> (TGBT) ;</li>
<li>le matériel de sécurité : EPI, perches, VAT HT, dispositifs de MALT-CC, schéma du poste, consignes.</li>
</ul>
<p>Le poste est un <strong>local réservé aux électriciens</strong> : il est fermé à clé, et son accès est limité aux personnes habilitées ou accompagnées.</p>
<p>À l'entrée du poste, l'opérateur trouve le <strong>schéma unifilaire</strong> à jour, les consignes de sécurité et la liste du matériel. Avant toute opération, il vérifie que l'état réel des appareils correspond à ce qu'indique ce schéma.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un transformateur peut être réalimenté <strong>par le côté BT</strong> (groupe électrogène, installation photovoltaïque, autre transformateur couplé). Il produit alors de la HT sur son côté HTA. Toute consignation d'un transformateur prend en compte ses deux côtés.</div>`
        },
        {
          titre: "Les appareils de coupure",
          contenu: `<table>
<thead><tr><th>Appareil</th><th>Coupure en charge</th><th>Coupure d'un court-circuit</th><th>Rôle principal</th></tr></thead>
<tbody>
<tr><td>Sectionneur</td><td>Non</td><td>Non</td><td>Isoler un circuit à vide, assurer la séparation</td></tr>
<tr><td>Interrupteur (ou interrupteur-sectionneur)</td><td>Oui</td><td>Non</td><td>Établir et couper le courant de service</td></tr>
<tr><td>Disjoncteur</td><td>Oui</td><td>Oui</td><td>Protéger et couper automatiquement en cas de défaut</td></tr>
<tr><td>Combiné interrupteur-fusibles</td><td>Oui</td><td>Oui (par les fusibles)</td><td>Protection d'un transformateur</td></tr>
<tr><td>Sectionneur de mise à la terre</td><td>—</td><td>—</td><td>Mettre à la terre et en court-circuit les câbles d'une cellule</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un <strong>sectionneur ne se manœuvre jamais en charge</strong>. Il n'a pas de pouvoir de coupure : l'ouvrir en charge provoque un arc violent. On ouvre d'abord l'interrupteur ou le disjoncteur, puis le sectionneur.</div>`
        },
        {
          titre: "Les verrouillages",
          contenu: `<p>Les cellules sont équipées de <strong>verrouillages</strong> qui empêchent les manœuvres dangereuses :</p>
<ul>
<li><strong>verrouillages mécaniques</strong> internes : impossible de fermer le sectionneur de terre tant que l'interrupteur est fermé, impossible d'ouvrir le panneau d'accès aux câbles tant que le sectionneur de terre n'est pas fermé ;</li>
<li><strong>verrouillages par serrures</strong> à clé prisonnière : une clé n'est libérée que lorsqu'un appareil est dans une position donnée, et sert à ouvrir l'appareil suivant. Par exemple, la porte du transformateur ne s'ouvre qu'avec la clé libérée par la cellule ouverte et mise à la terre.</li>
</ul>
<p>Ces verrouillages imposent un <strong>ordre de manœuvre</strong>. Ils ne doivent jamais être forcés ni contournés (double de clé, outil).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un verrouillage qui bloque une manœuvre signale une erreur de séquence. On ne force pas : on reprend la fiche de manœuvre et on vérifie l'état du poste.</div>`
        },
        {
          titre: "Réaliser une manœuvre",
          contenu: `<p>Les manœuvres HT sont réalisées par une personne habilitée (HE Manœuvre, HC, ou chargé d'exploitation selon l'organisation), en suivant une <strong>fiche de manœuvre</strong> ou des instructions précises.</p>
<ol>
<li>Identifier la cellule et l'appareil à manœuvrer (repères, schéma du poste).</li>
<li>Vérifier l'état de l'appareil et la position des autres appareils.</li>
<li>S'équiper : gants isolants adaptés à la tension, casque avec écran facial, vêtement de protection ; tabouret ou tapis isolant si les instructions le prévoient.</li>
<li>Manœuvrer franchement, avec les poignées et leviers prévus.</li>
<li>Vérifier la position obtenue (indicateur de position, voyants).</li>
</ol>
<p>La manœuvre d'un appareil n'est pas une consignation : pour travailler, il faut ensuite condamner, identifier, vérifier l'absence de tension et mettre à la terre.</p>
<p>La manœuvre se fait en position stable, sans se placer face à une partie qui pourrait projeter des gaz ou du métal en cas d'arc interne (panneaux, volets de surpression), et en gardant l'autre main éloignée de toute masse.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> par temps d'orage, les manœuvres et travaux sur les ouvrages extérieurs ou les lignes aériennes sont interrompus.</div>`
        },
        {
          titre: "Exemple de séquence : mise hors tension d'un transformateur",
          contenu: `<p>Voici une séquence typique dans un poste équipé d'une cellule de protection transformateur à interrupteur-fusibles. L'ordre exact est toujours celui de la <strong>fiche de manœuvre</strong> du poste.</p>
<ol>
<li>Ouvrir le disjoncteur général BT, pour couper la charge.</li>
<li>Ouvrir l'interrupteur de la cellule de protection du transformateur.</li>
<li>Fermer le sectionneur de terre de la cellule : le verrouillage ne le permet que si l'interrupteur est ouvert.</li>
<li>Récupérer la clé libérée par la cellule pour ouvrir l'accès au transformateur.</li>
<li>Condamner les appareils et poursuivre les étapes de la consignation (identification, VAT, MALT-CC complémentaire si nécessaire).</li>
</ol>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> si une installation photovoltaïque ou un groupe électrogène est raccordé au TGBT, leurs appareils de séparation sont eux aussi ouverts et condamnés, sinon le transformateur pourrait être réalimenté par son côté BT.</div>`
        },
        {
          titre: "Ce que permet et ne permet pas une manœuvre",
          contenu: `<ul>
<li>Une <strong>manœuvre d'exploitation</strong> modifie l'état électrique d'un réseau (mettre en ou hors service un départ, changer de schéma d'alimentation).</li>
<li>Une <strong>manœuvre de consignation</strong> fait partie de la consignation, réalisée par le chargé de consignation HC.</li>
<li>Une <strong>manœuvre d'urgence</strong> peut être faite pour supprimer un danger (incendie, accident), par une personne habilitée.</li>
</ul>
<p>Le titulaire du <strong>HE Manœuvre</strong> réalise les manœuvres qui lui sont demandées, mais il ne consigne pas pour des travaux et ne travaille pas sur l'ouvrage. Les cellules ne s'ouvrent jamais « pour voir » : ouvrir un compartiment HT, c'est s'exposer directement aux pièces nues.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> manœuvrer n'est ni consigner ni travailler. Chaque rôle demande son habilitation.</div>`
        }
      ],
      points_cles: [
        "Un poste HTA/BT est un local réservé, fermé à clé",
        "Un sectionneur ne se manœuvre jamais en charge",
        "L'interrupteur coupe le courant de service ; le disjoncteur coupe aussi les courts-circuits",
        "Le sectionneur de terre met à la terre les câbles d'une cellule",
        "Les verrouillages imposent l'ordre des manœuvres et ne se forcent jamais",
        "Un transformateur peut être réalimenté par son côté BT",
        "Manœuvre HT : fiche de manœuvre, identification, EPI, vérification de la position",
        "Une manœuvre n'est pas une consignation"
      ]
    },
    {
      id: "ht-consignation",
      theme: "HT",
      parcours: ["btht"],
      titre: "La consignation en haute tension",
      duree: 22,
      objectifs: [
        "Appliquer les étapes de la consignation à un ouvrage HT",
        "Réaliser une VAT en HT avec le matériel adapté",
        "Poser et déposer une MALT-CC en HT",
        "Connaître le rôle du HC et les documents échangés"
      ],
      sections: [
        {
          titre: "Les étapes en HT",
          contenu: `<p>Les étapes sont les mêmes qu'en BT, mais avec des exigences renforcées :</p>
<table>
<thead><tr><th>Étape</th><th>Particularités en HT</th></tr></thead>
<tbody>
<tr><td>Pré-identification</td><td>Sur le schéma du poste et les documents d'exploitation</td></tr>
<tr><td>Séparation</td><td>Ouvrir les interrupteurs ou disjoncteurs, puis les sectionneurs, sur toutes les sources, y compris un éventuel retour par le côté BT d'un transformateur</td></tr>
<tr><td>Condamnation</td><td>Cadenas, serrures de verrouillage, pancartes ; condamnation aussi des commandes à distance</td></tr>
<tr><td>Identification</td><td>Sur le lieu de travail : repères de cellule, de câble, de ligne</td></tr>
<tr><td>VAT</td><td>Avec un VAT HT adapté à la tension, généralement monté sur perche isolante</td></tr>
<tr><td>MALT-CC</td><td><strong>Obligatoire</strong>, de part et d'autre de la zone de travail, et au plus près</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en HT, la MALT-CC n'est jamais facultative. Un ouvrage HT sans MALT-CC n'est pas consigné.</div>`
        },
        {
          titre: "La VAT en haute tension",
          contenu: `<p>La VAT HT se fait avec un <strong>détecteur de tension HT</strong> adapté à la tension nominale de l'ouvrage, utilisé avec une <strong>perche isolante</strong> de la longueur et de la classe prévues. On l'approche ou on le pose sur chaque conducteur, depuis une position qui respecte les distances.</p>
<ul>
<li>Contrôler le détecteur avant et après la vérification (dispositif de test intégré ou source de contrôle).</li>
<li>Vérifier l'absence de tension sur <strong>chaque phase</strong>.</li>
<li>Porter les EPI : gants isolants, casque avec écran facial, vêtement de protection.</li>
<li>Tenir la perche au-delà de la garde, par la poignée.</li>
</ul>
<p>Certaines cellules disposent d'indicateurs de présence de tension intégrés ; leur usage dans la procédure dépend des instructions de l'exploitant.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un VAT BT ne doit jamais être utilisé sur un ouvrage HT, et un VAT HT prévu pour une plage de tension donnée ne convient pas en dehors de cette plage.</div>`
        },
        {
          titre: "La MALT-CC en haute tension",
          contenu: `<p>La MALT-CC protège le personnel contre une remise sous tension accidentelle, une tension induite par une ligne voisine ou la charge résiduelle des câbles (un câble HT se comporte comme un condensateur et peut garder une charge dangereuse après la coupure).</p>
<ul>
<li>Elle se place <strong>de part et d'autre</strong> de la zone de travail, pour encadrer l'équipe.</li>
<li>On raccorde <strong>d'abord la terre</strong>, puis chaque conducteur, avec une perche isolante.</li>
<li>À la dépose, on retire d'abord les pinces des conducteurs, puis la terre.</li>
<li>Le sectionneur de terre d'une cellule réalise une MALT-CC des câbles raccordés à cette cellule ; des dispositifs mobiles complètent si besoin au plus près de la zone de travail.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> pour refaire l'extrémité d'un câble HTA entre deux postes, on consigne aux deux bouts : ouverture et condamnation dans chaque poste, VAT, puis mise à la terre aux deux extrémités du câble.</div>`
        },
        {
          titre: "Documents et déconsignation",
          contenu: `<p>Le <strong>chargé de consignation HC</strong> remet au chargé de travaux H2 ou H2V une <strong>attestation de consignation</strong>, directement ou par message collationné. En deux étapes, il remet une attestation de première étape et le chargé de travaux réalise identification, VAT et MALT-CC sur le lieu de travail.</p>
<p>En fin de travaux, le chargé de travaux retire ses MALT-CC de zone de travail, rassemble son équipe et remet l'<strong>avis de fin de travail</strong>. Le HC retire ses propres MALT-CC, lève les condamnations, et l'ouvrage peut être remis sous tension par l'exploitant.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> une remise sous tension HT par erreur, sur une équipe encore présente, est presque toujours mortelle. La règle « pas de remise sous tension sans tous les avis de fin de travail » est absolue.</div>`
        },
        {
          titre: "Exemple complet : consigner un départ de câble HTA",
          contenu: `<ol>
<li><strong>Pré-identification</strong> : le chargé de consignation HC repère sur le schéma la cellule départ et le poste à l'autre extrémité du câble.</li>
<li><strong>Séparation</strong> : il ouvre l'interrupteur de la cellule départ dans le premier poste et, si le câble peut être alimenté par l'autre extrémité, l'appareil correspondant dans le second poste.</li>
<li><strong>Condamnation</strong> : cadenas et pancartes sur les commandes, condamnation des télécommandes.</li>
<li><strong>Identification</strong> : sur le lieu de travail, repérage certain du câble (étiquettes, plans, éventuellement appareil d'identification de câble).</li>
<li><strong>VAT</strong> sur chaque phase, aux extrémités accessibles, avec un détecteur adapté.</li>
<li><strong>MALT-CC</strong> : fermeture des sectionneurs de terre aux deux extrémités et, si nécessaire, dispositifs mobiles au plus près de la zone de travail.</li>
</ol>
<p>L'attestation de consignation est ensuite remise au chargé de travaux, qui délimite sa zone de travail.</p>`
        },
        {
          titre: "Points de vigilance",
          contenu: `<ul>
<li>Un réseau HTA peut être <strong>bouclé</strong> : un même câble peut être alimenté par ses deux extrémités.</li>
<li>Les <strong>tensions induites</strong> par une ligne parallèle restée sous tension peuvent être élevées : la MALT-CC les écoule.</li>
<li>Les condensateurs et les câbles longs gardent une <strong>charge résiduelle</strong> après la séparation.</li>
<li>Les sources BT (groupe, photovoltaïque, onduleur) peuvent réalimenter un transformateur.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une équipe travaille sur une ligne aérienne HTA consignée qui longe une autre ligne restée en service. Sans MALT-CC de part et d'autre de la zone de travail, la tension induite par la ligne voisine suffirait à électriser les monteurs.</div>`
        }
      ],
      points_cles: [
        "Mêmes étapes qu'en BT, avec MALT-CC obligatoire en HT",
        "Séparation : interrupteur ou disjoncteur d'abord, sectionneur ensuite",
        "Penser au retour de tension par le côté BT d'un transformateur",
        "VAT HT avec un détecteur adapté à la tension, sur perche isolante, contrôlé avant et après",
        "MALT-CC de part et d'autre de la zone de travail",
        "Terre en premier à la pose, en dernier à la dépose",
        "Un câble HT peut garder une charge résiduelle dangereuse",
        "Le HC remet l'attestation de consignation et reçoit l'avis de fin de travail"
      ]
    },
    {
      id: "ht-voisinage-materiel",
      theme: "HT",
      parcours: ["btht"],
      titre: "Travaux au voisinage HT, EPI et outillage",
      duree: 20,
      objectifs: [
        "Organiser un travail au voisinage d'un ouvrage HT (H1V, H2V)",
        "Choisir et vérifier les EPI adaptés à la HT",
        "Utiliser perches, VAT et dispositifs de MALT-CC",
        "Tenir compte des conditions atmosphériques"
      ],
      sections: [
        {
          titre: "Le voisinage en HT",
          contenu: `<p>Dans un poste, il est fréquent de travailler sur une cellule consignée alors que les cellules voisines ou le jeu de barres restent sous tension. On est alors en <strong>voisinage</strong> :</p>
<ul>
<li>en <strong>zone 1</strong> (voisinage simple), les habilitations H1 et H2 permettent de travailler, en respectant les consignes ;</li>
<li>en <strong>zone 2</strong> (voisinage renforcé), il faut l'attribut <strong>V</strong> : H1V pour l'exécutant, H2V pour le chargé de travaux ;</li>
<li>la <strong>zone 3</strong> reste interdite en dehors des travaux sous tension.</li>
</ul>
<p>Le chargé de travaux H2V repère les pièces voisines sous tension, matérialise les limites (balisage, écrans, cloisons), indique à chacun la distance à respecter et surveille le respect de ces limites.</p>
<p>Le voisinage existe aussi pour des travaux <strong>non électriques</strong> dans un poste ou près d'une ligne (peinture, génie civil, élagage). Ces opérations sont confiées à du personnel habilité H0 ou H0V, encadré par un chargé de chantier, et les mêmes distances s'appliquent.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> pour remplacer le transformateur d'un poste, la cellule de protection est consignée et mise à la terre. La cellule d'arrivée voisine reste sous tension : le chargé de travaux H2V balise le passage et rappelle à ses exécutants H1V de ne pas ouvrir ou approcher cette cellule.</div>`
        },
        {
          titre: "Les EPI pour la HT",
          contenu: `<table>
<thead><tr><th>EPI</th><th>Usage</th><th>Vérification</th></tr></thead>
<tbody>
<tr><td>Gants isolants de classe adaptée à la tension</td><td>Manœuvres, VAT, pose de MALT-CC</td><td>Vérification visuelle et test de gonflage avant chaque usage ; date de contrôle</td></tr>
<tr><td>Casque avec écran facial anti-UV</td><td>Protection contre l'arc et les projections</td><td>Écran propre, non rayé, bien fixé</td></tr>
<tr><td>Vêtement de protection contre l'arc, couvrant</td><td>Protection contre les brûlures</td><td>Manches baissées, fermé</td></tr>
<tr><td>Chaussures ou bottes isolantes, tabouret ou tapis isolant</td><td>Isoler de la terre lors de certaines manœuvres</td><td>Propres et secs, sans dégradation</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> des gants isolants BT ne protègent pas en HT. La classe des gants doit correspondre à la tension de l'ouvrage.</div>`
        },
        {
          titre: "Perches et outillage",
          contenu: `<p>La <strong>perche isolante</strong> permet d'agir à distance sur un ouvrage HT : VAT, pose des dispositifs de MALT-CC, manœuvres de certains appareils. Pour être sûre :</p>
<ul>
<li>elle doit être adaptée à la tension et à l'opération ;</li>
<li>elle est tenue <strong>derrière la garde</strong> (la partie isolante ne doit pas être raccourcie par la main) ;</li>
<li>elle est propre, sèche, non fendue, rangée dans sa housse ;</li>
<li>elle est vérifiée visuellement avant chaque usage.</li>
</ul>
<p>Les dispositifs de MALT-CC (pinces, tresses, câbles) sont adaptés à la section et au courant de court-circuit de l'ouvrage. Une tresse coupée ou une pince fissurée ne doit pas être utilisée.</p>
<p>Les <strong>tapis</strong> et <strong>tabourets isolants</strong> isolent l'opérateur du sol lors de certaines manœuvres : ils doivent être propres, secs et adaptés à la tension. Un tabouret posé sur un sol mouillé, ou dont les pieds sont sales, perd une partie de son efficacité.</p>`
        },
        {
          titre: "Conditions atmosphériques et environnement",
          contenu: `<ul>
<li>La <strong>pluie</strong>, le brouillard et l'humidité réduisent les qualités isolantes de l'air et des surfaces : ils favorisent l'amorçage.</li>
<li>En cas d'<strong>orage</strong>, on interrompt les travaux et manœuvres sur les ouvrages extérieurs et les lignes aériennes.</li>
<li>Un éclairage insuffisant interdit les opérations de précision au voisinage.</li>
</ul>
<p>Le vent peut aussi déplacer des câbles, des bâches ou des écrans mal fixés et rapprocher des objets des parties sous tension : on adapte ou on reporte le travail lorsque les conditions ne permettent plus de garantir les distances.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en HT, on ne compense pas une distance trop faible par des gants. On respecte la distance, on consigne, ou on protège par des écrans adaptés posés selon une procédure.</div>`
        },
        {
          titre: "Organiser un travail au voisinage HT",
          contenu: `<p>Avant de commencer, le chargé de travaux H2V :</p>
<ol>
<li>identifie toutes les pièces nues restées sous tension autour de la zone de travail ;</li>
<li>détermine les distances à respecter, d'après les instructions de sécurité de l'employeur ;</li>
<li>met en place les moyens qui empêchent de franchir ces distances : balisage, écrans, cloisons, portes de cellules fermées et verrouillées ;</li>
<li>explique ces limites à chaque exécutant et désigne, si nécessaire, un surveillant de sécurité électrique ;</li>
<li>surveille en permanence le respect des limites, en particulier lors des manutentions d'objets longs.</li>
</ol>
<div class="encart" data-type="danger"><strong>Attention :</strong> les engins de levage, échelles et tubes métalliques sont à l'origine de nombreux accidents au voisinage des ouvrages HT : leurs mouvements doivent être pris en compte dans le calcul des distances.</div>`
        },
        {
          titre: "Entretien et contrôle du matériel",
          contenu: `<ul>
<li>Le matériel de sécurité (gants, perches, VAT, MALT-CC, tapis, tabourets) est <strong>rangé</strong> au sec, à l'abri des rayons du soleil et des objets coupants.</li>
<li>Il fait l'objet de <strong>contrôles périodiques</strong> selon les prescriptions du fabricant et de l'employeur ; la date de contrôle figure sur le matériel ou dans un registre.</li>
<li>Avant chaque usage, l'utilisateur fait une <strong>vérification visuelle</strong> et les essais prévus (gonflage des gants, test du détecteur).</li>
<li>Tout matériel douteux est <strong>retiré</strong> et signalé ; on ne le répare pas soi-même.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> un EPI ou un outil isolant n'est fiable que s'il est adapté, en bon état et vérifié juste avant l'emploi.</div>`
        }
      ],
      points_cles: [
        "Zone 2 : attribut V obligatoire (H1V, H2V) ; zone 3 : interdite hors travaux sous tension",
        "Le chargé de travaux H2V matérialise les limites et surveille leur respect",
        "Gants isolants de classe adaptée à la tension, testés avant chaque usage",
        "Casque avec écran facial et vêtement couvrant contre l'arc",
        "La perche isolante se tient derrière la garde",
        "Le matériel endommagé n'est pas utilisé",
        "Humidité et pluie favorisent l'amorçage ; orage : arrêt sur ouvrages extérieurs"
      ]
    }
  );
})();

(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  /* ───────────── Thème HT — questions HT-001 à HT-060 ───────────── */
  P.questions.push(
    /* Habilitations HT, zones, amorçage */
    { id: "HT-001", chapitre: "ht-habilitations-zones",
      q: "En courant alternatif, le domaine HTA concerne les tensions :", options: ["De plus de 50 000 V", "De 50 V à 1 000 V", "De plus de 1 000 V jusqu'à 50 000 V"], bonnes: [2],
      explication: "HTA : plus de 1 kV jusqu'à 50 kV. Au-delà de 50 kV, c'est la HTB. De 50 V à 1 000 V, c'est la BT." },
    { id: "HT-002", chapitre: "ht-habilitations-zones",
      q: "Un réseau de distribution de 20 000 V appartient au domaine :", options: ["BT", "HTA", "HTB"], bonnes: [1],
      explication: "20 kV est compris entre 1 kV et 50 kV : c'est de la HTA." },
    { id: "HT-003", chapitre: "ht-habilitations-zones",
      q: "Le symbole H2V désigne :", options: ["Un exécutant au voisinage HT", "Un chargé de consignation HT", "Un chargé de travaux HT, y compris au voisinage renforcé"], bonnes: [2],
      explication: "H2 : chargé de travaux HT ; V : voisinage renforcé. L'exécutant est H1V, le chargé de consignation HC." },
    { id: "HT-004", chapitre: "ht-habilitations-zones",
      q: "Le chargé de consignation en haute tension est habilité :", options: ["HC", "BC", "H2"], bonnes: [0],
      explication: "HC : chargé de consignation HT. BC est son équivalent en BT." },
    { id: "HT-005", chapitre: "ht-habilitations-zones", situation: "Une cellule HTA d'un poste est en défaut. Votre responsable vous demande « une petite intervention rapide ».",
      q: "En haute tension, cette opération :", options: ["Peut être faite en intervention avec un HR", "Doit être organisée comme un travail sur ouvrage consigné ou une opération spécifique"], bonnes: [1],
      explication: "Il n'existe pas d'intervention en HT : pas de HR. L'opération est un travail, sur ouvrage consigné, ou une opération spécifique (HE)." },
    { id: "HT-006", chapitre: "ht-habilitations-zones",
      q: "Quels symboles existent en haute tension ?", options: ["H1V", "HC", "HE Manœuvre", "HR"], bonnes: [0, 1, 2],
      explication: "H1V, HC et HE Manœuvre existent. HR n'existe pas : les interventions sont propres à la BT." },
    { id: "HT-007", chapitre: "ht-habilitations-zones",
      q: "En HT, la zone de voisinage renforcé est la :", options: ["Zone 4", "Zone 3", "Zone 2"], bonnes: [2],
      explication: "Zone 2 : voisinage renforcé HT. Zone 3 : travaux sous tension HT. Zone 4 : voisinage renforcé BT." },
    { id: "HT-008", chapitre: "ht-habilitations-zones",
      q: "La zone 3 correspond :", options: ["À l'espace en deçà de la DMA, réservé aux travaux sous tension", "Au voisinage simple", "À l'extérieur du poste"], bonnes: [0],
      explication: "En deçà de la DMA, on est en zone 3 : seuls les travaux sous tension, par du personnel habilité T, y sont réalisés." },
    { id: "HT-009", chapitre: "ht-habilitations-zones",
      q: "La DMA est égale à :", options: ["Toujours 0,30 m", "La DLVS divisée par deux", "La distance de tension plus la distance de garde"], bonnes: [2],
      explication: "DMA = distance de tension (fonction de la tension) + distance de garde (mouvements involontaires). Le 0,30 m est la valeur BT." },
    { id: "HT-010", chapitre: "ht-habilitations-zones",
      q: "En haute tension, peut-on être électrisé sans toucher une pièce sous tension ?", options: ["Oui, par amorçage d'un arc", "Non, il faut toujours un contact"], bonnes: [0],
      explication: "En HT, un arc peut s'amorcer dans l'air quand on s'approche trop près d'une pièce nue sous tension, sans contact." },
    { id: "HT-011", chapitre: "ht-habilitations-zones",
      q: "Quels facteurs favorisent l'amorçage ?", options: ["Un air sec et propre", "Une tension plus élevée", "L'humidité et la pluie", "La pollution ou la poussière"], bonnes: [1, 2, 3],
      explication: "La distance d'amorçage augmente avec la tension ; humidité, pluie et pollution dégradent l'isolement de l'air et des surfaces." },
    { id: "HT-012", chapitre: "ht-habilitations-zones", situation: "Un exécutant transporte une barre métallique de 3 m dans un poste HTA dont le jeu de barres reste sous tension.",
      q: "La distance de sécurité s'apprécie :", options: ["Depuis son corps seulement", "Depuis l'extrémité de la barre qu'il porte"], bonnes: [1],
      explication: "Tout objet tenu prolonge l'opérateur : l'amorçage peut se produire par l'extrémité de la barre." },
    { id: "HT-013", chapitre: "ht-habilitations-zones",
      q: "Pour travailler en zone 2, un exécutant doit être habilité au minimum :", options: ["H1", "H1V", "H0"], bonnes: [1],
      explication: "L'attribut V est obligatoire en zone 2 de voisinage renforcé HT." },
    { id: "HT-014", chapitre: "ht-habilitations-zones", situation: "Habilité H2V, vous devez aussi intervenir sur le TGBT du poste après le transformateur.",
      q: "Votre habilitation HT suffit-elle pour le TGBT ?", options: ["Oui, la HT inclut la BT", "Non, il faut une habilitation BT adaptée"], bonnes: [1],
      explication: "Les habilitations HT et BT sont distinctes. Pour les opérations sur le TGBT, il faut un symbole B adapté (B2V, BR…)." },
    { id: "HT-015", chapitre: "ht-habilitations-zones",
      q: "Un arc électrique en HT peut provoquer :", options: ["Des brûlures graves", "Des projections de métal en fusion", "Des lésions oculaires par rayonnement UV"], bonnes: [0, 1, 2],
      explication: "L'arc atteint plusieurs milliers de degrés, projette du métal fondu et émet un intense rayonnement ultraviolet." },
    { id: "HT-016", chapitre: "ht-habilitations-zones",
      q: "Lorsque la tension augmente, les distances de sécurité :", options: ["Restent identiques", "Diminuent", "Augmentent"], bonnes: [2],
      explication: "La distance de tension, et donc la DMA et les limites des zones, augmentent avec la tension de l'ouvrage." },

    /* Postes, cellules, verrouillages, manœuvres */
    { id: "HT-017", chapitre: "ht-postes-manoeuvres",
      q: "Un sectionneur :", options: ["Peut être manœuvré en charge", "Ne doit jamais être manœuvré en charge", "Coupe les courts-circuits"], bonnes: [1],
      explication: "Le sectionneur n'a pas de pouvoir de coupure. On l'ouvre à vide, après l'ouverture de l'interrupteur ou du disjoncteur." },
    { id: "HT-018", chapitre: "ht-postes-manoeuvres",
      q: "Quel appareil peut couper un courant de court-circuit ?", options: ["Le sectionneur", "L'interrupteur seul", "Le disjoncteur"], bonnes: [2],
      explication: "Le disjoncteur coupe les courts-circuits. L'interrupteur coupe le courant de service, le sectionneur ne coupe aucun courant." },
    { id: "HT-019", chapitre: "ht-postes-manoeuvres", situation: "Vous devez isoler un départ HTA équipé d'un disjoncteur et de sectionneurs.",
      q: "Dans quel ordre manœuvrez-vous ?", options: ["Sectionneur puis disjoncteur", "Disjoncteur puis sectionneur"], bonnes: [1],
      explication: "On coupe d'abord le courant avec le disjoncteur (ou l'interrupteur), puis on ouvre le sectionneur à vide pour assurer la séparation." },
    { id: "HT-020", chapitre: "ht-postes-manoeuvres",
      q: "Le sectionneur de mise à la terre d'une cellule sert à :", options: ["Mettre à la terre et en court-circuit les câbles de la cellule", "Couper le courant en charge", "Mesurer la résistance de terre"], bonnes: [0],
      explication: "Le sectionneur de terre réalise la MALT-CC des câbles raccordés à la cellule." },
    { id: "HT-021", chapitre: "ht-postes-manoeuvres", situation: "Vous voulez fermer le sectionneur de terre d'une cellule, mais la manœuvre est bloquée par un verrouillage.",
      q: "Vous :", options: ["Forcez la poignée", "Vérifiez l'état de la cellule : l'interrupteur est sans doute encore fermé", "Reprenez la fiche de manœuvre"], bonnes: [1, 2],
      explication: "Le verrouillage interdit de mettre à la terre un circuit encore alimenté. On ne force jamais : on vérifie la séquence de manœuvre." },
    { id: "HT-022", chapitre: "ht-postes-manoeuvres",
      q: "Les verrouillages par serrures à clé prisonnière servent à :", options: ["Imposer un ordre de manœuvre", "Empêcher l'accès à un compartiment tant que les conditions ne sont pas réunies", "Remplacer la consignation"], bonnes: [0, 1],
      explication: "Les verrouillages imposent la séquence et protègent l'accès. Ils aident à la sécurité mais ne remplacent pas la consignation." },
    { id: "HT-023", chapitre: "ht-postes-manoeuvres", situation: "Un collègue propose d'utiliser un double de clé pour ouvrir la porte du transformateur sans passer par la cellule.",
      q: "C'est :", options: ["Acceptable si l'on est pressé", "Interdit : un verrouillage ne se contourne jamais"], bonnes: [1],
      explication: "Contourner un verrouillage supprime la protection : on pourrait accéder à un transformateur encore sous tension." },
    { id: "HT-024", chapitre: "ht-postes-manoeuvres",
      q: "Un transformateur HTA/BT consigné côté HTA peut-il être remis sous tension ?", options: ["Non, jamais", "Oui, par le côté BT (groupe, photovoltaïque, autre source)"], bonnes: [1],
      explication: "Une source BT peut réalimenter le transformateur qui produit alors de la HT. On sépare et condamne aussi le côté BT." },
    { id: "HT-025", chapitre: "ht-postes-manoeuvres",
      q: "Pour réaliser une manœuvre HT, je porte :", options: ["Une montre métallique pour noter l'heure", "Des gants isolants de classe adaptée", "Un casque avec écran facial", "Un vêtement couvrant de protection"], bonnes: [1, 2, 3],
      explication: "Gants isolants adaptés, casque à écran facial et vêtement couvrant protègent contre le contact et l'arc. Les objets métalliques sont retirés." },
    { id: "HT-026", chapitre: "ht-postes-manoeuvres",
      q: "Une manœuvre HT se réalise :", options: ["En suivant une fiche de manœuvre ou des instructions précises", "De mémoire, si l'on connaît le poste"], bonnes: [0],
      explication: "La fiche de manœuvre fixe l'ordre des opérations et évite les erreurs de cellule ou de séquence." },
    { id: "HT-027", chapitre: "ht-postes-manoeuvres", situation: "Vous avez ouvert l'interrupteur d'une cellule HTA.",
      q: "Pouvez-vous commencer à travailler sur les câbles de cette cellule ?", options: ["Oui, puisque l'interrupteur est ouvert", "Non, il faut d'abord terminer la consignation"], bonnes: [1],
      explication: "Une manœuvre n'est pas une consignation : il faut condamner, identifier, vérifier l'absence de tension et mettre à la terre." },
    { id: "HT-028", chapitre: "ht-postes-manoeuvres",
      q: "L'accès à un poste HTA/BT est :", options: ["Libre pour le personnel de l'entreprise", "Libre pendant les heures ouvrables", "Réservé aux personnes habilitées ou accompagnées"], bonnes: [2],
      explication: "Le poste est un local réservé aux électriciens, fermé à clé." },
    { id: "HT-029", chapitre: "ht-postes-manoeuvres",
      q: "Après une manœuvre, je vérifie :", options: ["La position obtenue sur l'indicateur de l'appareil", "Rien, la manœuvre a été faite", "La cohérence avec la fiche de manœuvre"], bonnes: [0, 2],
      explication: "On contrôle la position réelle de l'appareil et on la compare à ce que prévoit la fiche de manœuvre." },
    { id: "HT-030", chapitre: "ht-postes-manoeuvres", situation: "Un orage éclate pendant que vous devez manœuvrer un interrupteur aérien sur une ligne HTA.",
      q: "Vous :", options: ["Manœuvrez rapidement avant que l'orage s'intensifie", "Interrompez l'opération"], bonnes: [1],
      explication: "Par temps d'orage, on interrompt les manœuvres et travaux sur les ouvrages extérieurs et les lignes aériennes." },
    { id: "HT-031", chapitre: "ht-postes-manoeuvres",
      q: "La protection d'un transformateur dans une cellule HTA peut être assurée par :", options: ["Un combiné interrupteur-fusibles", "Un disjoncteur", "Un sectionneur seul"], bonnes: [0, 1],
      explication: "Le combiné interrupteur-fusibles ou le disjoncteur protègent le transformateur. Un sectionneur seul n'a aucune fonction de protection." },
    { id: "HT-032", chapitre: "ht-postes-manoeuvres",
      q: "Que contient normalement un poste HTA pour la sécurité des opérateurs ?", options: ["Une échelle métallique pour atteindre le jeu de barres", "Les EPI et le matériel de VAT et de MALT-CC", "Le schéma du poste et les consignes"], bonnes: [1, 2],
      explication: "Le poste doit contenir EPI, perches, VAT, dispositifs de MALT-CC, schéma et consignes. Une échelle métallique près des parties sous tension est un danger." },

    /* Consignation HT */
    { id: "HT-033", chapitre: "ht-consignation",
      q: "En HT, la MALT-CC est :", options: ["Facultative si le travail est court", "Obligatoire"], bonnes: [1],
      explication: "En haute tension, la mise à la terre et en court-circuit fait toujours partie de la consignation." },
    { id: "HT-034", chapitre: "ht-consignation",
      q: "Où place-t-on les MALT-CC en HT ?", options: ["De part et d'autre de la zone de travail", "Au plus près de la zone de travail", "Uniquement au poste source, loin du chantier"], bonnes: [0, 1],
      explication: "Les MALT-CC encadrent la zone de travail, au plus près, pour que l'équipe soit protégée de tous les côtés." },
    { id: "HT-035", chapitre: "ht-consignation",
      q: "La VAT sur un ouvrage HTA se fait avec :", options: ["Un VAT BT", "Un détecteur de tension HT adapté à la tension, sur perche isolante", "Un multimètre haute impédance"], bonnes: [1],
      explication: "Il faut un détecteur prévu pour la tension de l'ouvrage, utilisé avec une perche isolante adaptée." },
    { id: "HT-036", chapitre: "ht-consignation",
      q: "Le détecteur de tension HT est contrôlé :", options: ["Une fois en début de semaine", "Avant la vérification", "Après la vérification"], bonnes: [1, 2],
      explication: "Comme en BT, le bon fonctionnement du détecteur est contrôlé juste avant et juste après la VAT." },
    { id: "HT-037", chapitre: "ht-consignation", situation: "Vous posez un dispositif mobile de MALT-CC sur un câble HTA consigné, après la VAT.",
      q: "Vous raccordez en premier :", options: ["La pince de terre", "Les pinces sur les conducteurs"], bonnes: [0],
      explication: "On raccorde d'abord la terre, puis les conducteurs avec la perche. À la dépose, on retire d'abord les conducteurs, puis la terre." },
    { id: "HT-038", chapitre: "ht-consignation",
      q: "Pourquoi un câble HT coupé peut-il rester dangereux ?", options: ["Il peut garder une charge résiduelle", "Il peut être soumis à une tension induite", "Il est toujours relié à la terre"], bonnes: [0, 1],
      explication: "Un câble HT se comporte comme un condensateur et peut subir des tensions induites. La MALT-CC écoule ces charges." },
    { id: "HT-039", chapitre: "ht-consignation", situation: "Vous consignez un transformateur HTA/BT. Une installation photovoltaïque est raccordée au TGBT.",
      q: "La séparation doit porter :", options: ["Sur le côté HTA seulement", "Sur le côté HTA et sur le côté BT"], bonnes: [1],
      explication: "L'installation photovoltaïque peut réalimenter le transformateur par le côté BT. Les deux côtés doivent être séparés et condamnés." },
    { id: "HT-040", chapitre: "ht-consignation",
      q: "En HT, la condamnation porte aussi sur :", options: ["Les commandes à distance des appareils", "Les seuls organes manuels"], bonnes: [0],
      explication: "Un appareil télécommandé peut être refermé à distance : sa commande doit aussi être condamnée." },
    { id: "HT-041", chapitre: "ht-consignation",
      q: "Qui remet l'attestation de consignation au chargé de travaux H2V ?", options: ["L'exécutant H1V", "Le chargé de travaux lui-même", "Le chargé de consignation HC"], bonnes: [2],
      explication: "Le HC consigne et remet l'attestation de consignation au chargé de travaux, directement ou par message collationné." },
    { id: "HT-042", chapitre: "ht-consignation", situation: "Consignation HT en deux étapes : vous êtes chargé de travaux sur un câble éloigné du poste.",
      q: "Vous réalisez :", options: ["La séparation au poste", "L'identification du câble sur place", "La VAT", "La MALT-CC au plus près de la zone de travail"], bonnes: [1, 2, 3],
      explication: "La seconde étape revient au chargé de travaux : identification, VAT, MALT-CC. La séparation est faite par le HC en première étape." },
    { id: "HT-043", chapitre: "ht-consignation",
      q: "Pendant la VAT HT, je tiens la perche :", options: ["Derrière la garde, par la poignée", "Au milieu, pour être plus précis"], bonnes: [0],
      explication: "La main reste derrière la garde pour conserver toute la longueur isolante de la perche." },
    { id: "HT-044", chapitre: "ht-consignation",
      q: "La VAT HT se fait :", options: ["Sur chaque phase", "Sur une seule phase, les autres sont forcément identiques"], bonnes: [0],
      explication: "Chaque conducteur doit être vérifié : une phase peut rester alimentée (pôle d'appareil mal ouvert, retour)." },
    { id: "HT-045", chapitre: "ht-consignation", situation: "À la fin des travaux sur une cellule, le chargé de travaux a remis l'avis de fin de travail.",
      q: "Qui retire les MALT-CC posées par le chargé de consignation ?", options: ["Le chargé de consignation", "L'exécutant le plus proche", "Le chargé de travaux avant de remettre l'avis"], bonnes: [0],
      explication: "Le chargé de travaux retire les MALT-CC qu'il a posées sur la zone de travail ; celles du chargé de consignation sont retirées par lui lors de la déconsignation." },
    { id: "HT-046", chapitre: "ht-consignation",
      q: "Un ouvrage HT séparé, condamné et vérifié, mais sans MALT-CC, est-il consigné ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "En HT, la MALT-CC est une étape obligatoire : sans elle, la consignation n'est pas terminée." },
    { id: "HT-047", chapitre: "ht-consignation",
      q: "Lors de la séparation d'un départ HT, on ouvre :", options: ["D'abord l'appareil de coupure en charge (interrupteur ou disjoncteur)", "Ensuite le sectionneur", "D'abord le sectionneur"], bonnes: [0, 1],
      explication: "On coupe le courant avec l'appareil prévu, puis on ouvre le sectionneur, qui ne se manœuvre jamais en charge." },
    { id: "HT-048", chapitre: "ht-consignation", situation: "Une remise sous tension est demandée alors que l'avis de fin de travail d'une des deux équipes n'est pas arrivé.",
      q: "Le chargé de consignation :", options: ["Remet sous tension, l'équipe a sûrement fini", "Attend l'avis de fin de travail de la seconde équipe"], bonnes: [1],
      explication: "Aucune remise sous tension sans tous les avis de fin de travail : une équipe peut encore être sur l'ouvrage." },

    /* Voisinage HT, EPI, outillage */
    { id: "HT-049", chapitre: "ht-voisinage-materiel",
      q: "Pour travailler en zone 2, un chargé de travaux doit être habilité :", options: ["H2", "B2V", "H2V"], bonnes: [2],
      explication: "La zone 2 de voisinage renforcé HT exige l'attribut V : H2V pour le chargé de travaux." },
    { id: "HT-050", chapitre: "ht-voisinage-materiel",
      q: "Avant chaque usage, des gants isolants font l'objet :", options: ["D'un lavage obligatoire", "D'une vérification visuelle", "D'un test de gonflage"], bonnes: [1, 2],
      explication: "On vérifie visuellement les gants et on les gonfle pour détecter un trou ou une fissure. On vérifie aussi leur date de contrôle." },
    { id: "HT-051", chapitre: "ht-voisinage-materiel",
      q: "Des gants isolants prévus pour la basse tension conviennent-ils pour une manœuvre HTA ?", options: ["Oui", "Non, la classe doit être adaptée à la tension"], bonnes: [1],
      explication: "Chaque classe de gants correspond à une tension maximale d'utilisation. En HT, il faut une classe adaptée à la tension de l'ouvrage." },
    { id: "HT-052", chapitre: "ht-voisinage-materiel", situation: "Avant une VAT, vous constatez que la perche isolante est fendue et humide.",
      q: "Vous :", options: ["L'utilisez en la tenant plus près de la tête", "Ne l'utilisez pas et la signalez", "L'essuyez et l'utilisez malgré la fente"], bonnes: [1],
      explication: "Une perche fendue ou humide a perdu ses qualités isolantes : elle est retirée et signalée." },
    { id: "HT-053", chapitre: "ht-voisinage-materiel",
      q: "En zone 3, un électricien H2V peut-il travailler ?", options: ["Oui", "Non, la zone 3 est réservée aux travaux sous tension"], bonnes: [1],
      explication: "La zone 3, en deçà de la DMA, est réservée aux travaux sous tension réalisés par du personnel habilité T, selon des procédures spécifiques." },
    { id: "HT-054", chapitre: "ht-voisinage-materiel", situation: "Vous travaillez sur une cellule consignée ; la cellule voisine reste sous tension.",
      q: "Le chargé de travaux H2V :", options: ["Matérialise les limites à ne pas franchir", "Indique à chacun les distances à respecter", "Laisse chaque exécutant juger par lui-même"], bonnes: [0, 1],
      explication: "Le chargé de travaux repère les pièces sous tension, balise et rappelle les distances, puis veille à leur respect." },
    { id: "HT-055", chapitre: "ht-voisinage-materiel",
      q: "Le casque avec écran facial protège contre :", options: ["Les effets de l'arc (brûlures, projections, UV)", "Le contact direct par les mains"], bonnes: [0],
      explication: "L'écran facial protège le visage et les yeux contre l'arc. Les mains sont protégées par les gants isolants." },
    { id: "HT-056", chapitre: "ht-voisinage-materiel",
      q: "La pluie et l'humidité, lors d'opérations au voisinage d'un ouvrage HT extérieur :", options: ["N'ont aucune influence", "Améliorent l'isolement", "Favorisent l'amorçage"], bonnes: [2],
      explication: "L'humidité réduit les qualités isolantes de l'air et des surfaces, ce qui facilite l'amorçage d'un arc." },
    { id: "HT-057", chapitre: "ht-voisinage-materiel",
      q: "Un dispositif de MALT-CC dont une tresse est en partie coupée :", options: ["Peut être utilisé s'il reste assez de brins", "Ne doit pas être utilisé"], bonnes: [1],
      explication: "Une tresse abîmée peut fondre lors d'un court-circuit. Le matériel endommagé est retiré." },
    { id: "HT-058", chapitre: "ht-voisinage-materiel",
      q: "La perche isolante peut servir à :", options: ["Remplacer les gants isolants", "Vérifier l'absence de tension", "Poser les dispositifs de MALT-CC", "Manœuvrer certains appareils"], bonnes: [1, 2, 3],
      explication: "La perche permet d'agir à distance pour la VAT, la MALT-CC et certaines manœuvres. Elle s'utilise avec les gants, elle ne les remplace pas." },
    { id: "HT-059", chapitre: "ht-voisinage-materiel", situation: "Votre exécutant H1 (sans attribut V) doit passer à proximité immédiate d'une cellule restée sous tension, en zone 2.",
      q: "Est-ce permis ?", options: ["Oui, s'il fait attention", "Non, il lui faut l'habilitation H1V"], bonnes: [1],
      explication: "La zone 2 est réservée aux personnes dont l'habilitation porte l'attribut V (ou HC, HE dans le cadre de leurs opérations)." },
    { id: "HT-060", chapitre: "ht-voisinage-materiel",
      q: "Si la distance à une pièce nue HT est insuffisante pour travailler en sécurité, il faut :", options: ["Consigner la partie voisine", "Mettre en place des protections adaptées selon une procédure", "Simplement porter des gants isolants"], bonnes: [0, 1],
      explication: "On ne compense pas une distance trop faible par des gants : on consigne la partie voisine ou on met en place des protections selon une procédure." }
  );
})();

(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  /* ───────────── Thème PV — chapitres ───────────── */
  P.chapitres.push(
    {
      id: "pv-installation-dangers",
      theme: "PV",
      parcours: ["bp"],
      titre: "L'installation photovoltaïque et ses dangers",
      duree: 25,
      objectifs: [
        "Décrire les éléments d'une installation photovoltaïque",
        "Comprendre comment s'additionnent tensions et courants dans un champ PV",
        "Identifier les dangers propres au courant continu",
        "Comprendre pourquoi un module éclairé ne peut pas être mis hors tension",
        "Prendre en compte le travail en hauteur"
      ],
      sections: [
        {
          titre: "De la cellule au réseau",
          contenu: `<p>Une installation photovoltaïque transforme la lumière en électricité. Elle comprend :</p>
<table>
<thead><tr><th>Élément</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td>Cellule</td><td>Produit une faible tension continue dès qu'elle reçoit de la lumière</td></tr>
<tr><td>Module (panneau)</td><td>Assemble des cellules ; il possède deux câbles de sortie munis de <strong>connecteurs débrochables</strong></td></tr>
<tr><td>Chaîne (string)</td><td>Modules raccordés <strong>en série</strong> : leurs tensions s'additionnent</td></tr>
<tr><td>Champ PV</td><td>Ensemble des chaînes, parfois raccordées <strong>en parallèle</strong> : leurs courants s'additionnent</td></tr>
<tr><td>Boîte de jonction</td><td>Regroupe les chaînes ; contient selon les cas protections, parafoudres et interrupteur-sectionneur DC</td></tr>
<tr><td>Onduleur</td><td>Transforme le courant continu (DC) en courant alternatif (AC) synchronisé avec le réseau</td></tr>
<tr><td>Partie AC</td><td>Protections, tableau, raccordement au réseau ou à l'installation du bâtiment</td></tr>
</tbody>
</table>
<p>L'installation a donc <strong>deux parties</strong> : le côté <strong>courant continu</strong>, des modules à l'onduleur, et le côté <strong>courant alternatif</strong>, de l'onduleur au réseau.</p>`
        },
        {
          titre: "Tensions et courants en jeu",
          contenu: `<ul>
<li>Un module délivre en général quelques dizaines de volts. Mis en série, une chaîne atteint <strong>plusieurs centaines de volts</strong>, souvent jusqu'à 1 000 V ou plus : c'est du domaine de la <strong>basse tension en courant continu</strong>.</li>
<li>La <strong>tension à vide</strong> (circuit ouvert, sans courant) est la plus élevée. Elle <strong>augmente par temps froid</strong>.</li>
<li>La tension dépend peu de l'ensoleillement : même sous un ciel couvert, elle est presque à sa valeur normale. C'est le <strong>courant</strong> qui varie avec la lumière.</li>
<li>Le courant de court-circuit d'un module n'est que <strong>légèrement supérieur</strong> à son courant de fonctionnement.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « il fait gris, les panneaux ne produisent presque rien, donc pas de danger » est faux. Par temps couvert, le courant baisse mais la tension reste dangereuse.</div>`
        },
        {
          titre: "Le module produit dès qu'il est éclairé",
          contenu: `<p>Il n'existe <strong>pas d'interrupteur</strong> sur un module : il produit une tension dès qu'il reçoit de la lumière, naturelle ou artificielle. Conséquences :</p>
<ul>
<li>on ne peut pas mettre hors tension un module ou une chaîne éclairés en ouvrant un appareil côté onduleur : les câbles en amont de l'appareil restent sous tension ;</li>
<li>couper le réseau ou l'onduleur arrête la production d'électricité vers le réseau, mais <strong>pas la tension</strong> aux bornes des modules ;</li>
<li>le seul moyen de faire disparaître la tension des modules est de les priver de lumière (<strong>occultation</strong>), ce qui est rarement total.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> côté continu, un champ photovoltaïque éclairé est toujours considéré sous tension.</div>`
        },
        {
          titre: "Les dangers du courant continu",
          contenu: `<p>En courant alternatif, le courant passe par zéro cent fois par seconde, ce qui aide l'arc à s'éteindre lors d'une ouverture. En <strong>courant continu</strong>, il n'y a pas de passage par zéro : un arc qui s'amorce peut <strong>se maintenir</strong> longtemps.</p>
<ul>
<li>Débrocher un connecteur <strong>en charge</strong> (alors que le courant circule) provoque un arc qui brûle les mains et les yeux et peut mettre le feu.</li>
<li>Un mauvais contact, un connecteur mal serti ou incompatible peut chauffer et créer un <strong>arc série</strong>, source d'incendie.</li>
<li>Comme le courant de court-circuit est proche du courant normal, un défaut peut ne pas faire fonctionner les protections classiques.</li>
<li>L'onduleur contient des <strong>condensateurs</strong> qui restent chargés quelque temps après la coupure : il faut respecter le temps d'attente indiqué par le fabricant.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> on ne débranche jamais un connecteur de module ou de chaîne lorsque le courant circule. On arrête d'abord la circulation du courant (coupure côté AC et ouverture de l'interrupteur-sectionneur DC).</div>`
        },
        {
          titre: "Travail en hauteur et double source",
          contenu: `<p>La plupart des installations sont en <strong>toiture</strong>. Le risque de <strong>chute de hauteur</strong> y est au moins aussi grave que le risque électrique, et un choc électrique, même faible, peut provoquer un geste réflexe et une chute. Les protections collectives (garde-corps, filets) et, à défaut, individuelles (harnais) sont indispensables, ainsi que la vérification de la résistance de la toiture.</p>
<p>Une installation PV a aussi <strong>deux sources</strong> : les modules côté continu et le réseau côté alternatif. Des étiquettes le signalent sur les tableaux et les boîtes de jonction. Toute mise en sécurité traite les deux côtés.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un poseur reçoit une petite décharge en manipulant un câble de chaîne mal isolé. Sans gravité électrique, ce sursaut le déséquilibre sur un toit en pente : c'est la chute qui le blesse grièvement.</div>`
        },
        {
          titre: "Les autres risques d'une installation PV",
          contenu: `<ul>
<li><strong>Incendie</strong> : un arc en courant continu ou un connecteur qui chauffe peut enflammer la toiture ; en cas de feu, les modules éclairés restent sous tension, ce que les secours doivent savoir.</li>
<li><strong>Manutention</strong> : un module pèse souvent une vingtaine de kilos et offre une grande prise au vent.</li>
<li><strong>Bris de module</strong> : un verre cassé ou un cadre déformé peut mettre à nu des parties sous tension.</li>
<li><strong>Intempéries</strong> : pluie et rosée rendent le toit glissant et réduisent l'isolement des matériels endommagés.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> sur une installation PV, le risque électrique s'ajoute aux risques du travail en toiture ; les deux se préparent ensemble.</div>`
        }
      ],
      points_cles: [
        "Une installation PV a un côté continu (modules, chaînes, boîte de jonction) et un côté alternatif (après l'onduleur)",
        "En série, les tensions s'additionnent ; en parallèle, les courants s'additionnent",
        "Une chaîne peut atteindre plusieurs centaines de volts en continu",
        "La tension à vide est la plus élevée et augmente par temps froid",
        "Un module produit dès qu'il est éclairé, même par temps couvert",
        "En continu, l'arc ne s'éteint pas de lui-même : jamais de débrochage en charge",
        "L'onduleur peut rester chargé après la coupure",
        "Le risque de chute de hauteur est majeur"
      ]
    },
    {
      id: "pv-bp-securite",
      theme: "PV",
      parcours: ["bp"],
      titre: "L'habilitation BP et la mise en sécurité d'une installation PV",
      duree: 22,
      objectifs: [
        "Connaître les opérations autorisées au titulaire du BP",
        "Savoir ce que le BP ne permet pas",
        "Mettre en sécurité le côté alternatif et le côté continu",
        "Utiliser correctement les connecteurs et l'occultation"
      ],
      sections: [
        {
          titre: "Ce que permet le BP",
          contenu: `<p>Le symbole <strong>BP</strong> concerne les opérations sur les <strong>chaînes photovoltaïques</strong>. Il vise surtout les poseurs et monteurs : il leur permet de <strong>manipuler et connecter les modules</strong> entre eux à l'aide des <strong>connecteurs débrochables</strong>, lors de l'installation d'une chaîne.</p>
<table>
<thead><tr><th>Opération</th><th>Avec le BP ?</th></tr></thead>
<tbody>
<tr><td>Poser et fixer des modules</td><td>Oui</td></tr>
<tr><td>Connecter les modules d'une chaîne par leurs connecteurs débrochables</td><td>Oui, dans les limites fixées par la norme et le titre</td></tr>
<tr><td>Raccorder la chaîne à la boîte de jonction ou à l'onduleur</td><td>Non : opération d'électricien (B1, B2, BR selon le cas)</td></tr>
<tr><td>Dépanner, rechercher un défaut</td><td>Non : BR</td></tr>
<tr><td>Faire des mesures</td><td>Non : BR ou BE Mesurage</td></tr>
<tr><td>Consigner</td><td>Non : BC ou BR pour son propre compte</td></tr>
<tr><td>Intervenir côté alternatif</td><td>Non</td></tr>
</tbody>
</table>
<p>La norme encadre aussi la tension à laquelle le titulaire du BP peut être exposé en zone de voisinage renforcé. Le détail de ce qui est autorisé est toujours écrit sur le <strong>titre d'habilitation</strong>.</p>
<p>Le titulaire du BP travaille sous la responsabilité de son employeur, qui l'affecte à des tâches compatibles avec son titre. S'il reçoit une demande qui en sort (raccordement, mesure, dépannage), il doit la refuser et faire appel à une personne habilitée.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le BP n'est pas une « habilitation photovoltaïque complète ». Il ne permet ni de mesurer, ni de dépanner, ni de consigner, ni de raccorder l'onduleur.</div>`
        },
        {
          titre: "Bonnes pratiques lors de la pose",
          contenu: `<ul>
<li>Laisser les modules dans leur emballage ou face cachée tant que possible.</li>
<li>Ne connecter les modules qu'au fur et à mesure, en gardant les <strong>extrémités de la chaîne</strong> déconnectées et protégées : tant qu'elles ne sont pas reliées, aucun courant ne circule.</li>
<li>Ne jamais toucher simultanément les deux extrémités d'une chaîne ou d'une portion de chaîne.</li>
<li>Utiliser des connecteurs de même marque et même modèle, correctement emboîtés jusqu'au verrouillage ; ne jamais assembler des connecteurs incompatibles.</li>
<li>Porter les EPI et utiliser l'outillage prévus par l'employeur.</li>
<li>Signaler tout module ou câble endommagé, sans tenter de le réparer.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> une chaîne ouverte (extrémités non raccordées) a une tension à ses bornes mais aucun courant ne circule : on peut connecter les modules intermédiaires sans créer d'arc. Si la chaîne était fermée sur l'onduleur, débrocher créerait un arc.</div>`
        },
        {
          titre: "Mise en sécurité côté alternatif",
          contenu: `<p>Le côté AC se traite comme toute installation BT : séparation par l'appareil prévu (disjoncteur ou interrupteur-sectionneur AC), condamnation, identification, VAT, par une personne habilitée pour cela.</p>
<p>Couper le côté alternatif <strong>arrête l'onduleur</strong> : il cesse d'injecter et le courant dans les chaînes devient nul ou presque. C'est pourquoi on commence généralement par ce côté. Mais <strong>la tension reste présente</strong> sur tout le côté continu tant que les modules sont éclairés.</p>
<p>L'onduleur est conçu pour se déconnecter automatiquement quand le réseau disparaît : il n'injecte pas de courant sur un réseau coupé. Cette protection ne dispense pas de séparer et de condamner, car un onduleur défaillant ou une autre source peut subsister.</p>`
        },
        {
          titre: "Mise en sécurité côté continu",
          contenu: `<p>Côté DC, on ne peut pas consigner les modules eux-mêmes. La mise en sécurité vise à <strong>supprimer le courant</strong>, à <strong>isoler</strong> la partie sur laquelle on intervient et à <strong>limiter</strong> la tension présente :</p>
<ol>
<li>Couper le côté alternatif : l'onduleur s'arrête.</li>
<li>Ouvrir l'<strong>interrupteur-sectionneur DC</strong> (près de l'onduleur ou dans la boîte de jonction) : c'est un appareil prévu pour couper en charge, contrairement aux connecteurs.</li>
<li>Condamner les appareils ouverts et attendre la décharge des condensateurs de l'onduleur.</li>
<li>Seulement ensuite, déconnecter les chaînes concernées au niveau de leurs connecteurs.</li>
<li>Si nécessaire, <strong>occulter</strong> les modules (bâche opaque) pour réduire la tension.</li>
</ol>
<p>Ces opérations sont réalisées par des personnes habilitées pour cela, selon la procédure de l'installation.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> même après ouverture de l'interrupteur-sectionneur DC, les câbles situés entre les modules et cet appareil restent sous tension tant que les modules sont éclairés.</div>`
        },
        {
          titre: "L'occultation",
          contenu: `<p>L'<strong>occultation</strong> consiste à couvrir les modules d'une bâche opaque pour les priver de lumière. Elle réduit fortement la tension, mais :</p>
<ul>
<li>la bâche doit être réellement opaque et couvrir toute la surface ;</li>
<li>le vent peut la déplacer : elle doit être fixée ;</li>
<li>une lumière parasite (bord non couvert, éclairage artificiel) suffit à faire réapparaître une tension ;</li>
<li>sa pose se fait en toiture, avec les protections contre les chutes.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> travailler de nuit ne garantit pas l'absence de tension : un projecteur de chantier ou l'éclairage public peut suffire à faire produire un module.</div>`
        },
        {
          titre: "Que faire en cas d'anomalie ?",
          contenu: `<ul>
<li>Un connecteur fond, fume ou un arc apparaît : ne pas toucher, s'éloigner, prévenir le responsable du chantier ; si l'installation est raccordée, faire couper le côté AC et ouvrir l'interrupteur-sectionneur DC par une personne habilitée.</li>
<li>Un collègue est électrisé : ne pas le toucher tant qu'il est en contact avec la partie sous tension ; faire couper si possible, alerter les secours, puis appliquer les gestes appris.</li>
<li>Un module est cassé ou un câble endommagé : arrêter, baliser, signaler ; ne pas tenter de réparation.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> sur un toit, toute réaction précipitée peut entraîner une chute. On se met d'abord en sécurité soi-même avant d'agir.</div>`
        }
      ],
      points_cles: [
        "Le BP permet de manipuler et connecter les modules d'une chaîne par leurs connecteurs débrochables",
        "Le BP ne permet ni mesure, ni dépannage, ni consignation, ni raccordement à l'onduleur, ni intervention côté AC",
        "Garder les extrémités de chaîne déconnectées pendant la pose",
        "Jamais de débrochage de connecteur en charge",
        "Mise en sécurité : couper le côté AC, puis ouvrir l'interrupteur-sectionneur DC, puis déconnecter",
        "Après ouverture du sectionneur DC, les câbles côté modules restent sous tension",
        "L'occultation réduit la tension mais doit être totale et maintenue",
        "Le titre d'habilitation précise les opérations autorisées"
      ]
    }
  );
})();

(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  /* ───────────── Thème PV — questions PV-001 à PV-040 ───────────── */
  P.questions.push(
    /* Installation et dangers */
    { id: "PV-001", chapitre: "pv-installation-dangers",
      q: "Un module photovoltaïque produit une tension :", options: ["Dès qu'il est éclairé", "Seulement quand l'onduleur est en marche", "Seulement en plein soleil"], bonnes: [0],
      explication: "Le module produit dès qu'il reçoit de la lumière, naturelle ou artificielle. L'onduleur n'a aucune influence sur la tension des modules." },
    { id: "PV-002", chapitre: "pv-installation-dangers",
      q: "Dans une chaîne, les modules sont raccordés en série. Leurs :", options: ["Tensions s'additionnent", "Courants s'additionnent"], bonnes: [0],
      explication: "En série, les tensions s'additionnent : une chaîne atteint plusieurs centaines de volts. En parallèle, ce sont les courants." },
    { id: "PV-003", chapitre: "pv-installation-dangers",
      q: "L'onduleur sert à :", options: ["Stocker l'énergie", "Mettre les modules hors tension", "Transformer le courant continu en courant alternatif"], bonnes: [2],
      explication: "L'onduleur convertit le courant continu des modules en courant alternatif. Il ne supprime pas la tension aux bornes des modules." },
    { id: "PV-004", chapitre: "pv-installation-dangers", situation: "Le ciel est très couvert. Un collègue affirme que les panneaux ne présentent aucun danger aujourd'hui.",
      q: "A-t-il raison ?", options: ["Oui", "Non, la tension reste presque à sa valeur normale"], bonnes: [1],
      explication: "Par temps couvert, le courant baisse mais la tension reste proche de sa valeur normale : elle reste dangereuse." },
    { id: "PV-005", chapitre: "pv-installation-dangers",
      q: "La tension à vide d'une chaîne :", options: ["Est nulle la nuit si un éclairage artificiel l'éclaire", "Est la tension la plus élevée de la chaîne", "Augmente par temps froid"], bonnes: [1, 2],
      explication: "La tension à vide est maximale et augmente avec le froid. Un éclairage artificiel suffit à faire produire un module." },
    { id: "PV-006", chapitre: "pv-installation-dangers",
      q: "Pourquoi un arc en courant continu est-il particulièrement dangereux ?", options: ["Le courant ne passe pas par zéro, l'arc peut se maintenir", "Le courant continu ne peut pas créer d'arc", "L'arc s'éteint tout seul en un centième de seconde"], bonnes: [0],
      explication: "En alternatif, le passage par zéro aide l'arc à s'éteindre. En continu, il n'y en a pas : l'arc peut durer et provoquer brûlures et incendie." },
    { id: "PV-007", chapitre: "pv-installation-dangers", situation: "L'installation fonctionne et injecte sur le réseau. Vous voulez débrancher le connecteur d'une chaîne.",
      q: "Vous pouvez le débrancher :", options: ["Oui, ce sont des connecteurs débrochables", "Non, pas tant que le courant circule"], bonnes: [1],
      explication: "Débrocher en charge un connecteur DC provoque un arc. Il faut d'abord arrêter la circulation du courant." },
    { id: "PV-008", chapitre: "pv-installation-dangers",
      q: "Une installation photovoltaïque raccordée au réseau comporte :", options: ["Une source côté continu (les modules)", "Une source côté alternatif (le réseau)", "Une seule source, le réseau"], bonnes: [0, 1],
      explication: "Il y a deux sources : les modules côté DC et le réseau côté AC. La mise en sécurité doit traiter les deux." },
    { id: "PV-009", chapitre: "pv-installation-dangers", situation: "Le réseau a été coupé et l'onduleur est à l'arrêt. Le soleil brille.",
      q: "Les câbles entre les modules et l'onduleur sont :", options: ["Hors tension", "Sous tension"], bonnes: [1],
      explication: "Couper le réseau arrête l'onduleur mais pas les modules : le côté continu reste sous tension tant qu'ils sont éclairés." },
    { id: "PV-010", chapitre: "pv-installation-dangers",
      q: "Le courant de court-circuit d'un module est :", options: ["Beaucoup plus élevé que son courant de fonctionnement", "Légèrement supérieur à son courant de fonctionnement"], bonnes: [1],
      explication: "Le courant de court-circuit d'un module est à peine supérieur à son courant normal : un défaut peut ne pas être détecté par des protections classiques." },
    { id: "PV-011", chapitre: "pv-installation-dangers",
      q: "Après la coupure, l'onduleur :", options: ["Est immédiatement sans danger", "Doit être ouvert tout de suite pour vérifier", "Peut rester chargé quelque temps"], bonnes: [2],
      explication: "Les condensateurs de l'onduleur restent chargés : on respecte le temps d'attente indiqué par le fabricant." },
    { id: "PV-012", chapitre: "pv-installation-dangers",
      q: "Sur un toit, quels risques faut-il prendre en compte ?", options: ["Aucun si l'installation n'est pas raccordée", "La chute de hauteur", "L'électrisation", "La chute après un sursaut dû à une décharge"], bonnes: [1, 2, 3],
      explication: "Chute, électrisation et chute consécutive à un choc se cumulent. Une installation non raccordée reste sous tension dès que les modules sont éclairés et connectés en série." },
    { id: "PV-013", chapitre: "pv-installation-dangers",
      q: "Un connecteur mal emboîté ou mal serti peut provoquer :", options: ["Un échauffement et un arc", "Un incendie", "Une baisse de tension sans danger"], bonnes: [0, 1],
      explication: "Un mauvais contact chauffe et peut créer un arc série, source d'incendie, notamment en courant continu." },
    { id: "PV-014", chapitre: "pv-installation-dangers",
      q: "Une chaîne de modules atteint couramment :", options: ["Quelques volts", "Plusieurs centaines de volts en courant continu"], bonnes: [1],
      explication: "La mise en série de nombreux modules donne plusieurs centaines de volts en continu, voire davantage : c'est de la basse tension continue, dangereuse." },
    { id: "PV-015", chapitre: "pv-installation-dangers",
      q: "Dans un champ PV, des chaînes raccordées en parallèle :", options: ["Additionnent leurs courants", "Additionnent leurs tensions"], bonnes: [0],
      explication: "En parallèle, les courants s'additionnent ; la tension reste celle d'une chaîne." },
    { id: "PV-016", chapitre: "pv-installation-dangers",
      q: "Un module photovoltaïque possède-t-il un interrupteur pour le mettre hors tension ?", options: ["Oui, au dos", "Non"], bonnes: [1],
      explication: "Un module n'a pas d'interrupteur : il produit tant qu'il est éclairé. Seule l'occultation réduit sa tension." },
    { id: "PV-017", chapitre: "pv-installation-dangers",
      q: "Que signalent les étiquettes apposées sur les tableaux et boîtes de jonction d'une installation PV ?", options: ["La couleur des modules", "La présence de deux sources de tension", "La présence de courant continu"], bonnes: [1, 2],
      explication: "Les étiquettes avertissent de la double alimentation et de la présence de tension continue même après coupure du réseau." },
    { id: "PV-018", chapitre: "pv-installation-dangers",
      q: "Lorsque l'ensoleillement diminue, c'est surtout :", options: ["Le courant qui diminue", "La tension qui s'annule"], bonnes: [0],
      explication: "Le courant varie avec la lumière ; la tension, elle, reste élevée même sous faible éclairement." },
    { id: "PV-019", chapitre: "pv-installation-dangers",
      q: "La boîte de jonction peut contenir :", options: ["Un interrupteur-sectionneur DC", "Des parafoudres", "Des protections des chaînes", "L'onduleur"], bonnes: [0, 1, 2],
      explication: "La boîte de jonction regroupe les chaînes et peut contenir protections, parafoudres et interrupteur-sectionneur DC. L'onduleur est un équipement séparé." },
    { id: "PV-020", chapitre: "pv-installation-dangers", situation: "Vous travaillez de nuit sur un toit équipé de modules, éclairé par un projecteur de chantier.",
      q: "Les modules éclairés par le projecteur :", options: ["Ne produisent rien la nuit", "Peuvent produire une tension"], bonnes: [1],
      explication: "Un éclairage artificiel suffit à faire produire un module : travailler de nuit ne garantit pas l'absence de tension." },

    /* BP et mise en sécurité */
    { id: "PV-021", chapitre: "pv-bp-securite",
      q: "L'habilitation BP permet :", options: ["De manipuler et connecter les modules d'une chaîne par leurs connecteurs débrochables", "De dépanner un onduleur", "De consigner une installation PV"], bonnes: [0],
      explication: "Le BP concerne la manipulation et la connexion des modules d'une chaîne. Dépannage et consignation relèvent d'autres habilitations." },
    { id: "PV-022", chapitre: "pv-bp-securite",
      q: "Quelles opérations sont interdites au titulaire du seul BP ?", options: ["Connecter entre eux les modules lors de la pose", "Raccorder la chaîne à l'onduleur", "Faire des mesures de tension sur la chaîne", "Intervenir sur le tableau AC"], bonnes: [1, 2, 3],
      explication: "Le BP permet de connecter les modules lors de la pose. Raccorder l'onduleur, mesurer ou intervenir côté AC demande une autre habilitation." },
    { id: "PV-023", chapitre: "pv-bp-securite", situation: "Vous êtes habilité BP. Un client signale que son installation ne produit plus et vous demande de chercher la panne.",
      q: "Pouvez-vous le faire ?", options: ["Oui", "Non, la recherche de panne relève d'un BR"], bonnes: [1],
      explication: "Le dépannage et la recherche de défaut sont des interventions BR. Le BP ne les couvre pas." },
    { id: "PV-024", chapitre: "pv-bp-securite",
      q: "Pendant la pose d'une chaîne, les extrémités de la chaîne :", options: ["Restent déconnectées et protégées", "Sont raccordées à l'onduleur dès le premier module"], bonnes: [0],
      explication: "Tant que les extrémités ne sont pas reliées, aucun courant ne circule : on peut connecter les modules sans créer d'arc." },
    { id: "PV-025", chapitre: "pv-bp-securite",
      q: "Pendant la pose, je ne dois jamais :", options: ["Toucher simultanément les deux extrémités d'une portion de chaîne", "Assembler des connecteurs de marques différentes", "Emboîter les connecteurs jusqu'au verrouillage"], bonnes: [0, 1],
      explication: "Toucher les deux extrémités expose à toute la tension de la portion. Des connecteurs incompatibles créent des mauvais contacts. L'emboîtement jusqu'au verrouillage est au contraire obligatoire." },
    { id: "PV-026", chapitre: "pv-bp-securite",
      q: "Pour mettre en sécurité une installation PV, on commence généralement par :", options: ["Débrancher les connecteurs des modules", "Couvrir les modules en plein fonctionnement", "Couper le côté alternatif"], bonnes: [2],
      explication: "Couper le côté AC arrête l'onduleur et la circulation du courant ; on ouvre ensuite l'interrupteur-sectionneur DC." },
    { id: "PV-027", chapitre: "pv-bp-securite",
      q: "Quel appareil permet de couper le courant continu en charge ?", options: ["L'interrupteur-sectionneur DC", "Un connecteur débrochable", "Le bouton test du différentiel"], bonnes: [0],
      explication: "L'interrupteur-sectionneur DC est prévu pour couper en charge. Les connecteurs ne doivent jamais être débrochés en charge." },
    { id: "PV-028", chapitre: "pv-bp-securite", situation: "L'interrupteur-sectionneur DC situé près de l'onduleur est ouvert. Il fait jour.",
      q: "Les câbles entre les modules et cet interrupteur-sectionneur sont :", options: ["Hors tension", "Toujours sous tension"], bonnes: [1],
      explication: "L'interrupteur-sectionneur isole l'onduleur, mais les câbles en amont restent sous la tension des modules éclairés." },
    { id: "PV-029", chapitre: "pv-bp-securite",
      q: "Quelles étapes doivent précéder la déconnexion des chaînes ?", options: ["La remise sous tension", "L'ouverture de l'interrupteur-sectionneur DC", "La coupure côté AC"], bonnes: [1, 2],
      explication: "On coupe le côté AC, on ouvre l'interrupteur-sectionneur DC, on attend la décharge de l'onduleur, puis on déconnecte les chaînes." },
    { id: "PV-030", chapitre: "pv-bp-securite",
      q: "L'occultation des modules consiste à :", options: ["Les débrancher un par un", "Les arroser pour les refroidir", "Les couvrir d'une bâche opaque"], bonnes: [2],
      explication: "Priver les modules de lumière avec une bâche opaque réduit fortement leur tension." },
    { id: "PV-031", chapitre: "pv-bp-securite",
      q: "Pour être efficace, une bâche d'occultation doit être :", options: ["Opaque", "Fixée contre le vent", "Couvrir toute la surface des modules", "Transparente pour surveiller les modules"], bonnes: [0, 1, 2],
      explication: "Une bâche opaque, couvrante et fixée prive réellement les modules de lumière. Un bord découvert suffit à faire réapparaître une tension." },
    { id: "PV-032", chapitre: "pv-bp-securite",
      q: "Après avoir coupé l'onduleur, avant d'y accéder, il faut :", options: ["Attendre le temps de décharge indiqué par le fabricant", "L'ouvrir immédiatement"], bonnes: [0],
      explication: "Les condensateurs de l'onduleur restent chargés après la coupure : on respecte le temps d'attente." },
    { id: "PV-033", chapitre: "pv-bp-securite", situation: "Pendant la pose, vous remarquez qu'un module a la face arrière fendue et un câble entaillé.",
      q: "Vous :", options: ["Le connectez quand même, il produit encore", "Ne l'utilisez pas et le signalez", "Réparez le câble avec du ruban adhésif"], bonnes: [1],
      explication: "Un module ou un câble endommagé présente un risque d'électrisation et d'arc. On le met de côté et on le signale, sans réparer." },
    { id: "PV-034", chapitre: "pv-bp-securite",
      q: "Le côté alternatif d'une installation PV se met en sécurité :", options: ["Comme toute installation BT (séparation, condamnation, identification, VAT)", "En couvrant les modules"], bonnes: [0],
      explication: "Le côté AC est une installation BT ordinaire : il se consigne selon les étapes habituelles, par une personne habilitée pour cela." },
    { id: "PV-035", chapitre: "pv-bp-securite",
      q: "Ce qu'un titulaire du BP peut faire exactement est précisé :", options: ["Par le fabricant des modules", "Par le client", "Sur son titre d'habilitation"], bonnes: [2],
      explication: "Le titre d'habilitation, délivré par l'employeur, précise le symbole et les limites des opérations autorisées." },
    { id: "PV-036", chapitre: "pv-bp-securite", situation: "La chaîne que vous montez est terminée. Le chef de chantier vous demande de la brancher sur l'onduleur.",
      q: "Avec le seul BP, vous :", options: ["Branchez la chaîne sur l'onduleur", "Refusez et faites appel à un électricien habilité"], bonnes: [1],
      explication: "Le raccordement à l'onduleur ou à la boîte de jonction est une opération d'électricien, hors du champ du BP." },
    { id: "PV-037", chapitre: "pv-bp-securite",
      q: "Pourquoi peut-on connecter les modules intermédiaires d'une chaîne ouverte sans créer d'arc ?", options: ["Parce qu'aucun courant ne circule dans une chaîne ouverte", "Parce qu'il n'y a aucune tension", "Parce que les connecteurs coupent l'arc"], bonnes: [0],
      explication: "Dans une chaîne ouverte, une tension existe mais aucun courant ne circule : la connexion ne crée pas d'arc. La tension reste toutefois présente." },
    { id: "PV-038", chapitre: "pv-bp-securite",
      q: "Après ouverture de l'interrupteur-sectionneur DC, on doit aussi :", options: ["Condamner l'appareil ouvert", "Le laisser libre pour pouvoir refermer vite"], bonnes: [0],
      explication: "Comme pour toute mise en sécurité, l'appareil ouvert est condamné pour empêcher une refermeture." },
    { id: "PV-039", chapitre: "pv-bp-securite",
      q: "Travailler de nuit sur une installation PV :", options: ["Garantit l'absence de tension", "Ne garantit pas l'absence de tension"], bonnes: [1],
      explication: "L'éclairage public ou un projecteur peut faire produire un module : la nuit réduit le risque mais ne le supprime pas." },
    { id: "PV-040", chapitre: "pv-bp-securite",
      q: "Quelles opérations exigent une autre habilitation que le BP ?", options: ["Une mesure d'isolement d'une chaîne", "La consignation du côté alternatif", "La fixation mécanique d'un module sur son rail", "Le remplacement d'un onduleur"], bonnes: [0, 1, 3],
      explication: "Mesures, consignation et remplacement d'onduleur sont des opérations d'électricien. La pose mécanique des modules fait partie du travail du titulaire du BP." }
  );
})();
