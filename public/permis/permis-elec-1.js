/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — Habilitation électrique (NF C 18-510) — fichier 1
   Tronc commun (DANGER, ZONES, ORGA, PREV, ACCID), parcours non-électricien (NE)
   et parcours interventions élémentaires (BSBE).
   Le contenu vise uniquement le QCM d'évaluation théorique de fin de formation.
   Les parcours et les thèmes sont déclarés dans permis-elec-0.js.
   ═══════════════════════════════════════════════════════════════════════════ */
window.PERMIS_COURS = window.PERMIS_COURS || {};

/* ───────────── Thème DANGER — Le danger électrique ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "courant-effets-corps",
      theme: "DANGER",
      parcours: ["tous"],
      titre: "Le courant électrique et ses effets sur le corps humain",
      duree: 20,
      objectifs: [
        "Distinguer tension, intensité et résistance, et savoir laquelle fait le danger",
        "Connaître les ordres de grandeur des seuils d'effets du courant alternatif et continu",
        "Identifier les facteurs qui aggravent le passage du courant dans le corps",
        "Différencier électrisation et électrocution",
        "Connaître les brûlures et les effets indirects d'un choc électrique"
      ],
      sections: [
        {
          titre: "Tension, intensité, résistance : ce qui fait le danger",
          contenu: `<p>Trois grandeurs suffisent à comprendre le risque électrique. La <strong>tension</strong> (U), mesurée en <strong>volts (V)</strong>, est la « pression » électrique qui pousse le courant. L'<strong>intensité</strong> (I), mesurée en <strong>ampères (A)</strong> ou en milliampères (mA), est la quantité de courant qui circule. La <strong>résistance</strong> (R), mesurée en <strong>ohms (Ω)</strong>, est l'opposition au passage du courant.</p>
<p>Ces trois grandeurs sont liées par la <strong>loi d'Ohm</strong> : <strong>U = R × I</strong>, donc <strong>I = U / R</strong>. Pour une même résistance du corps, plus la tension est élevée, plus l'intensité qui traverse la personne est forte.</p>
<p>Le corps humain se comporte comme une résistance. Sa valeur n'est pas fixe : elle dépend surtout de l'<strong>état de la peau</strong> (sèche, humide, mouillée, immergée), de la <strong>surface de contact</strong>, de la <strong>pression de contact</strong> et de la tension elle-même (au-delà de quelques dizaines de volts, la peau se perce et la résistance chute). Dans les supports de formation, on retient des ordres de grandeur de quelques milliers d'ohms pour une peau sèche et de quelques centaines d'ohms pour une peau mouillée.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une personne touche un conducteur à 230 V et sa résistance totale est d'environ 2 000 Ω. L'intensité qui la traverse vaut 230 / 2 000 ≈ 0,115 A, soit environ 115 mA. C'est largement au-dessus du seuil où le cœur peut entrer en fibrillation.</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> c'est l'<strong>intensité</strong> qui traverse le corps qui produit les effets. La tension est dangereuse parce qu'elle fait circuler cette intensité à travers la résistance du corps.</div>`
        },
        {
          titre: "Les seuils d'effets du courant",
          contenu: `<p>Les effets du courant sur l'organisme ont été étudiés et classés par seuils. Les valeurs ci-dessous sont les <strong>ordres de grandeur</strong> enseignés en formation d'habilitation, pour un courant alternatif à 50 Hz, un trajet main-pieds et une durée de passage de l'ordre de la seconde. Elles varient d'une personne à l'autre.</p>
<table>
<thead><tr><th>Effet</th><th>Courant alternatif 50 Hz</th><th>Courant continu</th></tr></thead>
<tbody>
<tr><td>Seuil de perception (picotement)</td><td>environ 0,5 mA</td><td>environ 2 mA</td></tr>
<tr><td>Seuil de non-lâcher (contraction musculaire : la main se crispe sur la pièce)</td><td>environ 10 mA</td><td>pas de seuil net</td></tr>
<tr><td>Paralysie respiratoire (tétanisation des muscles du thorax)</td><td>environ 30 mA</td><td>—</td></tr>
<tr><td>Seuil de fibrillation ventriculaire (le cœur bat de façon désordonnée et n'éjecte plus le sang)</td><td>environ 75 mA</td><td>environ 130 mA</td></tr>
<tr><td>Arrêt cardiaque, brûlures internes graves</td><td>de l'ordre de 1 A</td><td>—</td></tr>
</tbody>
</table>
<p>Le <strong>seuil de non-lâcher</strong> est essentiel à comprendre : au-delà, les muscles fléchisseurs se contractent et la victime <strong>ne peut plus lâcher</strong> l'objet sous tension. Le temps de passage s'allonge et les effets s'aggravent.</p>
<p>La <strong>fibrillation ventriculaire</strong> est la cause principale de décès par électrocution : le cœur ne pompe plus le sang, le cerveau n'est plus irrigué. Seuls une défibrillation et une réanimation rapides peuvent sauver la victime.</p>
<p>Le <strong>courant continu</strong> est, à intensité égale, un peu moins dangereux que le courant alternatif : ses seuils sont plus élevés. Il reste dangereux (risque de fibrillation, brûlures, effets d'électrolyse) et il est très présent dans les batteries et les installations photovoltaïques.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 0,5 mA perception, 10 mA non-lâcher, 30 mA paralysie respiratoire, autour de 75 mA fibrillation (en alternatif). Le dispositif différentiel de 30 mA est réglé pour couper avant les effets les plus graves.</div>`
        },
        {
          titre: "Les facteurs qui aggravent le choc",
          contenu: `<p>À intensité égale, la gravité d'un choc électrique dépend de plusieurs facteurs :</p>
<ul>
<li><strong>La durée de passage</strong> : plus le courant passe longtemps, plus les effets sont graves. C'est pour cela que les protections doivent couper très vite.</li>
<li><strong>Le trajet</strong> du courant dans le corps : un trajet qui traverse le thorax (main-main, main gauche-pieds) passe par le cœur et les poumons ; il est le plus dangereux.</li>
<li><strong>La fréquence</strong> : le courant alternatif à 50 Hz, celui du réseau, est parmi les plus dangereux pour le cœur.</li>
<li><strong>L'état de la peau et de l'environnement</strong> : une peau mouillée, un sol conducteur, un local humide, une enceinte métallique font chuter la résistance et augmentent l'intensité.</li>
<li><strong>La surface et la pression de contact</strong> : une main entière serrée sur une pièce laisse passer plus de courant que le bout d'un doigt.</li>
</ul>
<p>On parle de <strong>tension limite conventionnelle de sécurité</strong> (UL) : c'est la tension qu'on peut, en principe, toucher sans danger pendant un temps indéfini dans des conditions données. En courant alternatif, on retient <strong>50 V</strong> dans les locaux secs et une valeur plus basse (couramment <strong>25 V</strong>) dans les locaux humides ou mouillés.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une faible tension n'est pas toujours sans danger. Dans un local mouillé ou une cuve métallique, la résistance du corps baisse fortement et une tension de quelques dizaines de volts peut suffire à provoquer un accident.</div>`
        },
        {
          titre: "Électrisation, électrocution et brûlures",
          contenu: `<p>On distingue deux mots que l'examen aime confondre :</p>
<ul>
<li><strong>L'électrisation</strong> est la réaction du corps au passage du courant électrique : picotement, contraction, douleur, brûlure, perte de connaissance… La victime survit.</li>
<li><strong>L'électrocution</strong> est une électrisation qui entraîne la <strong>mort</strong>.</li>
</ul>
<p>Les <strong>brûlures</strong> sont l'autre grand effet du courant :</p>
<ul>
<li><strong>Les brûlures électrothermiques</strong> (par effet Joule) : le courant chauffe les tissus qu'il traverse. Elles sont souvent <strong>internes</strong> et profondes, avec de petites marques d'entrée et de sortie sur la peau. Leur gravité est sous-estimée au premier regard.</li>
<li><strong>Les brûlures par arc</strong> : l'arc électrique dégage une chaleur et un rayonnement intenses. Il brûle la peau exposée, enflamme les vêtements et projette du métal en fusion.</li>
<li><strong>Les lésions des yeux</strong> : le rayonnement ultraviolet de l'arc provoque des brûlures de la cornée (« coup d'arc ») et peut éblouir.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> une personne électrisée qui semble aller bien doit <strong>toujours</strong> être examinée par un médecin. Les brûlures internes et les troubles du rythme cardiaque peuvent se révéler plusieurs heures après l'accident.</div>`
        },
        {
          titre: "Les effets indirects",
          contenu: `<p>Un choc électrique, même faible, peut provoquer un accident grave sans que le courant lui-même soit en cause :</p>
<ul>
<li><strong>La chute</strong> : un simple picotement sur une échelle, un escabeau ou une nacelle provoque un sursaut qui fait tomber l'opérateur. La chute de hauteur est une conséquence fréquente des électrisations.</li>
<li><strong>Les gestes réflexes</strong> : en retirant brusquement le bras, on peut se heurter, se couper, lâcher un outil ou toucher une autre pièce sous tension.</li>
<li><strong>Les effets de l'arc et du court-circuit</strong> : projections de métal, éclatement d'un appareil, incendie, fumées toxiques, bruit très fort.</li>
<li><strong>Les effets différés</strong> : troubles cardiaques, atteintes des reins (liées à la destruction des muscles), séquelles neurologiques.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un peintre sur escabeau effleure un domino dénudé dans un faux plafond. Il ressent une simple secousse, mais perd l'équilibre et chute de 2 mètres. Le courant est faible, la chute est grave : c'est un effet indirect.</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le danger électrique ne se limite pas au cœur. Chute, brûlure par arc et réflexe incontrôlé sont des conséquences tout aussi graves.</div>`
        }
      ],
      points_cles: [
        "Loi d'Ohm : I = U / R. C'est l'intensité traversant le corps qui produit les effets.",
        "La résistance du corps baisse fortement quand la peau est humide ou mouillée.",
        "Ordres de grandeur en alternatif : 0,5 mA perception, 10 mA non-lâcher, 30 mA paralysie respiratoire, environ 75 mA fibrillation.",
        "Le courant continu a des seuils plus élevés mais reste dangereux.",
        "Durée, trajet par le thorax, fréquence 50 Hz et milieu humide aggravent le choc.",
        "Électrisation : réaction au passage du courant ; électrocution : électrisation mortelle.",
        "Les brûlures électriques sont souvent internes ; l'arc brûle la peau et les yeux.",
        "La chute est un effet indirect fréquent : toute personne électrisée doit voir un médecin."
      ]
    },
    {
      id: "dangers-origine-electrique",
      theme: "DANGER",
      parcours: ["tous"],
      titre: "Les dangers d'origine électrique : contacts, court-circuit, arc, amorçage",
      duree: 20,
      objectifs: [
        "Distinguer contact direct et contact indirect et connaître leurs protections",
        "Comprendre ce qu'est un court-circuit et ses conséquences",
        "Connaître les dangers de l'arc électrique",
        "Savoir ce qu'est un amorçage et pourquoi on peut être électrisé sans toucher",
        "Reconnaître les autres sources de danger : charges résiduelles, retours de tension"
      ],
      sections: [
        {
          titre: "Le contact direct",
          contenu: `<p>Il y a <strong>contact direct</strong> quand une personne touche une <strong>partie active</strong> normalement sous tension : un conducteur dénudé, une borne, un jeu de barres, une pièce nue d'un appareil ouvert.</p>
<p>Le courant traverse alors le corps pour rejoindre la terre (contact entre une phase et le sol) ou un autre conducteur (contact entre phase et neutre, ou entre deux phases).</p>
<p>Les situations typiques sont : un câble à l'isolant abîmé, une armoire ouverte, un cache de prise cassé, un appareil démonté sans avoir été mis hors tension, un domino non isolé dans un faux plafond.</p>
<p>On s'en protège principalement par :</p>
<ul>
<li><strong>l'isolation</strong> des parties actives (gaines, isolants) ;</li>
<li><strong>les enveloppes et barrières</strong> (armoires fermées, capots, degré de protection IP2X au minimum) ;</li>
<li><strong>l'éloignement</strong> et les obstacles (pour les lignes aériennes, les jeux de barres) ;</li>
<li>en complément, les <strong>dispositifs différentiels à haute sensibilité de 30 mA</strong>, qui coupent l'alimentation en cas de fuite de courant vers la terre ;</li>
<li>la <strong>mise hors tension</strong> avant toute opération sur une partie active.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> contact <strong>direct</strong> = contact avec une partie <strong>active</strong> (conducteur, borne). C'est la pièce qui est normalement sous tension.</div>`
        },
        {
          titre: "Le contact indirect",
          contenu: `<p>Il y a <strong>contact indirect</strong> quand une personne touche une <strong>masse</strong> mise accidentellement sous tension à la suite d'un <strong>défaut d'isolement</strong>.</p>
<p>Une <strong>masse</strong> est une partie conductrice accessible d'un matériel électrique (carcasse métallique d'une machine, d'un lave-linge, d'un radiateur, d'une armoire) qui n'est <strong>pas</strong> sous tension en temps normal, mais qui peut le devenir si l'isolant interne se dégrade.</p>
<p>Ce danger est sournois : la personne touche un objet qu'elle croit sans danger. Elle ne prend aucune précaution particulière.</p>
<p>La protection repose sur deux mesures associées :</p>
<ul>
<li>la <strong>mise à la terre des masses</strong> par le conducteur de protection (vert-jaune) ;</li>
<li>un <strong>dispositif de coupure automatique</strong>, en général un <strong>dispositif différentiel</strong>, qui coupe le circuit dès qu'un courant de défaut s'écoule vers la terre.</li>
</ul>
<p>On peut aussi utiliser des matériels de <strong>classe II</strong> (double isolation) ou alimentés en <strong>très basse tension de sécurité</strong> (classe III).</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la carcasse métallique d'une perceuse qui « pique » n'est pas une partie active : c'est une <strong>masse</strong> mise sous tension par un défaut. Il s'agit donc d'un contact <strong>indirect</strong>.</div>`
        },
        {
          titre: "Le court-circuit",
          contenu: `<p>Un <strong>court-circuit</strong> est une mise en contact, directe ou par un élément conducteur, de deux points d'un circuit qui sont à des <strong>potentiels différents</strong> (phase et neutre, deux phases, phase et terre), sans résistance notable entre eux.</p>
<p>L'intensité devient alors <strong>très élevée</strong>, bien supérieure au courant normal. Elle provoque :</p>
<ul>
<li>des <strong>effets thermiques</strong> : échauffement brutal, fusion des conducteurs, incendie ;</li>
<li>des <strong>effets mécaniques</strong> : efforts violents sur les conducteurs et les jeux de barres, éclatement d'appareils ;</li>
<li>un <strong>arc électrique</strong> au point de contact, avec projection de métal en fusion.</li>
</ul>
<p>Les causes fréquentes : un outil métallique qui tombe entre deux bornes, une pince qui touche deux conducteurs, un câble écrasé, une erreur de raccordement, une remise sous tension sur un circuit où un court-circuit a été posé.</p>
<p>Les <strong>fusibles</strong> et <strong>disjoncteurs</strong> protègent l'installation contre les surintensités et les courts-circuits. Ils ne protègent pas une personne contre l'électrisation : c'est le rôle du dispositif différentiel.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un technicien fait glisser un tournevis non isolé entre deux bornes d'un tableau resté sous tension. Un éclair et une détonation se produisent, le tournevis fond en partie et des gouttes de métal sont projetées vers son visage.</div>`
        },
        {
          titre: "L'arc électrique",
          contenu: `<p>L'<strong>arc électrique</strong> est un passage de courant à travers l'air ionisé entre deux pièces conductrices. Il apparaît lors d'un court-circuit, à l'ouverture d'un circuit en charge, lors d'un amorçage en haute tension, ou en cas de défaut dans un appareil.</p>
<p>Il libère en une fraction de seconde une énergie considérable : la température atteint <strong>plusieurs milliers de degrés</strong>. Ses dangers sont :</p>
<ul>
<li>les <strong>brûlures</strong> de la peau, du visage et des mains ;</li>
<li>l'inflammation des <strong>vêtements</strong>, surtout s'ils sont en matière synthétique qui fond et colle à la peau ;</li>
<li>les <strong>projections</strong> de métal en fusion ;</li>
<li>le <strong>rayonnement ultraviolet</strong> qui brûle les yeux ;</li>
<li>l'<strong>onde de pression</strong> et le bruit, qui peuvent projeter la personne ou léser les oreilles ;</li>
<li>les <strong>fumées et gaz</strong> toxiques.</li>
</ul>
<p>On s'en protège en travaillant hors tension, en évitant les courts-circuits (outils isolés, nappes isolantes) et, lorsque l'opération l'exige, en portant un <strong>écran facial anti-UV</strong>, des <strong>gants isolants</strong> et des <strong>vêtements de travail non propagateurs de flamme</strong>.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> l'arc électrique peut blesser une personne qui ne touche rien. Il suffit d'être à proximité au moment du court-circuit.</div>`
        },
        {
          titre: "L'amorçage et les autres dangers",
          contenu: `<p>L'<strong>amorçage</strong> est l'établissement d'un arc entre une pièce nue sous tension et une personne, un outil ou un engin qui s'en approche <strong>trop près, sans la toucher</strong>. L'air, normalement isolant, ne suffit plus à empêcher le passage du courant.</p>
<p>Ce phénomène concerne surtout la <strong>haute tension</strong> : plus la tension est élevée, plus la distance à laquelle un amorçage peut se produire est grande. C'est pour cela que la norme fixe des <strong>distances limites</strong> qu'il ne faut pas franchir sans habilitation et sans mesures de prévention.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> près d'une installation haute tension, on peut être électrisé <strong>sans toucher</strong> la pièce sous tension. Ne jamais approcher un bras, une perche, une échelle ou un engin d'une ligne haute tension.</div>
<p>D'autres sources de danger existent, même sur une installation qu'on croit coupée :</p>
<ul>
<li>les <strong>charges résiduelles</strong> : un condensateur ou un câble long peut rester chargé après la coupure ;</li>
<li>les <strong>retours de tension</strong> : groupe électrogène, onduleur, panneaux photovoltaïques, alimentation par une autre source ;</li>
<li>les <strong>tensions induites</strong> par une ligne voisine sous tension ;</li>
<li>une <strong>remise sous tension intempestive</strong> par une autre personne, si l'appareil de coupure n'a pas été condamné.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> tant que l'absence de tension n'a pas été <strong>vérifiée</strong>, une installation doit être considérée comme sous tension.</div>`
        }
      ],
      points_cles: [
        "Contact direct : contact avec une partie active, normalement sous tension.",
        "Contact indirect : contact avec une masse mise accidentellement sous tension par un défaut d'isolement.",
        "Contre le contact indirect : masses reliées à la terre et dispositif différentiel.",
        "Court-circuit : deux points à potentiels différents reliés ; intensité très élevée, arc, incendie.",
        "Fusibles et disjoncteurs protègent l'installation ; le différentiel 30 mA protège les personnes.",
        "L'arc électrique brûle la peau et les yeux, enflamme les vêtements et projette du métal.",
        "L'amorçage peut électriser sans contact, surtout en haute tension.",
        "Charges résiduelles, retours de tension et remises sous tension intempestives : une installation non vérifiée est réputée sous tension."
      ]
    }
  );

  P.questions.push(
    { id: "DANGER-001", chapitre: "courant-effets-corps", situation: "Lors de la formation, le formateur rappelle la loi d'Ohm.",
      q: "Quelle relation est juste ?", options: ["I = U / R", "I = U × R", "I = R / U"], bonnes: [0],
      explication: "La loi d'Ohm s'écrit U = R × I, donc I = U / R. À résistance égale, plus la tension est élevée, plus l'intensité est forte." },
    { id: "DANGER-002", chapitre: "courant-effets-corps",
      q: "Ce qui produit les effets sur le corps humain lors d'un choc électrique, c'est :", options: ["La puissance de l'installation", "L'intensité du courant qui traverse le corps", "La couleur du conducteur"], bonnes: [1],
      explication: "Les effets physiologiques (contraction, fibrillation, brûlure) dépendent de l'intensité qui traverse le corps et de sa durée. La tension est dangereuse parce qu'elle fait circuler ce courant." },
    { id: "DANGER-003", chapitre: "courant-effets-corps", situation: "Un agent d'entretien nettoie un sol à grande eau, les mains mouillées.",
      q: "Par rapport à une peau sèche, la résistance de son corps est :", options: ["Plus élevée", "Identique", "Plus faible"], bonnes: [2],
      explication: "L'humidité fait fortement baisser la résistance de la peau. Pour une même tension, l'intensité qui traverserait le corps serait donc plus grande." },
    { id: "DANGER-004", chapitre: "courant-effets-corps",
      q: "En courant alternatif 50 Hz, le seuil de perception du courant se situe aux environs de :", options: ["10 mA", "30 mA", "500 mA", "0,5 mA"], bonnes: [3],
      explication: "Vers 0,5 mA en alternatif, on ressent un léger picotement. 10 mA correspond au seuil de non-lâcher et 30 mA à la paralysie respiratoire." },
    { id: "DANGER-005", chapitre: "courant-effets-corps", situation: "Un apprenti saisit à pleine main un conducteur sous tension et n'arrive plus à ouvrir la main.",
      q: "Il a dépassé :", options: ["Le seuil de perception", "Le seuil de non-lâcher", "La tension limite de sécurité du local"], bonnes: [1],
      explication: "Au-delà du seuil de non-lâcher (environ 10 mA en alternatif), les muscles se contractent et la victime ne peut plus lâcher la pièce : le temps de passage s'allonge." },
    { id: "DANGER-006", chapitre: "courant-effets-corps",
      q: "En courant alternatif, le seuil de non-lâcher est d'environ :", options: ["1 mA", "1 A", "10 mA"], bonnes: [2],
      explication: "Le seuil de non-lâcher est de l'ordre de 10 mA en alternatif 50 Hz. Au-delà, la contraction des muscles empêche de lâcher l'objet sous tension." },
    { id: "DANGER-007", chapitre: "courant-effets-corps",
      q: "Vers 30 mA en courant alternatif, le risque principal est :", options: ["La paralysie respiratoire", "Un simple picotement", "Aucun effet notable"], bonnes: [0],
      explication: "Vers 30 mA, les muscles du thorax peuvent se tétaniser et bloquer la respiration. C'est pourquoi les dispositifs différentiels de protection des personnes sont de 30 mA." },
    { id: "DANGER-008", chapitre: "courant-effets-corps",
      q: "La fibrillation ventriculaire, c'est :", options: ["Une brûlure de la peau", "Un battement désordonné du cœur qui n'assure plus la circulation du sang", "Un engourdissement passager de la main"], bonnes: [1],
      explication: "En fibrillation, les fibres du cœur se contractent de façon anarchique : le sang ne circule plus. C'est la principale cause de décès par électrocution ; seuls une défibrillation et une réanimation rapides peuvent sauver la victime." },
    { id: "DANGER-009", chapitre: "courant-effets-corps",
      q: "À intensité égale, par rapport au courant alternatif 50 Hz, le courant continu :", options: ["Est sans aucun danger", "A exactement les mêmes seuils", "A des seuils d'effets plus élevés"], bonnes: [2],
      explication: "Les seuils du courant continu sont plus élevés (perception vers 2 mA, fibrillation vers 130 mA), mais il reste dangereux : fibrillation, brûlures, électrolyse." },
    { id: "DANGER-010", chapitre: "courant-effets-corps",
      q: "Quels facteurs aggravent les effets d'un choc électrique ?", options: ["Une peau mouillée", "Un trajet passant par le thorax", "Le port d'une montre en plastique", "Une durée de passage longue"], bonnes: [0, 1, 3],
      explication: "La durée, le trajet par le cœur et les poumons, et l'humidité (qui fait baisser la résistance) aggravent le choc. Une montre en plastique n'a pas d'influence." },
    { id: "DANGER-011", chapitre: "courant-effets-corps", situation: "Deux électrisations ont lieu sous la même tension : l'une main droite-main gauche, l'autre main droite-coude droit.",
      q: "Le trajet le plus dangereux est :", options: ["Main droite-coude droit", "Main droite-main gauche"], bonnes: [1],
      explication: "Le trajet main-main traverse le thorax, donc le cœur et les poumons. Un trajet limité à un bras ne traverse pas ces organes vitaux." },
    { id: "DANGER-012", chapitre: "courant-effets-corps",
      q: "L'électrocution, c'est :", options: ["Toute sensation de picotement électrique", "Une électrisation qui entraîne la mort", "Une brûlure due à l'arc"], bonnes: [1],
      explication: "L'électrisation désigne la réaction du corps au passage du courant. On parle d'électrocution uniquement lorsque l'électrisation est mortelle." },
    { id: "DANGER-013", chapitre: "courant-effets-corps", situation: "Un collègue a reçu une décharge en touchant un câble abîmé. Il est conscient, dit qu'il va bien et veut reprendre son poste.",
      q: "Il s'agit :", options: ["D'une électrocution", "D'une électrisation"], bonnes: [1],
      explication: "La victime a survécu : c'est une électrisation. Elle doit tout de même être examinée par un médecin, car des troubles cardiaques ou des brûlures internes peuvent apparaître plus tard." },
    { id: "DANGER-014", chapitre: "courant-effets-corps", situation: "Même situation : le collègue électrisé dit qu'il va bien.",
      q: "Que faut-il faire ?", options: ["Le laisser reprendre son travail", "Lui faire voir un médecin", "Prévenir sa hiérarchie"], bonnes: [1, 2],
      explication: "Toute personne électrisée doit consulter un médecin, même sans symptôme apparent : les effets peuvent être retardés. L'accident doit aussi être signalé à la hiérarchie." },
    { id: "DANGER-015", chapitre: "courant-effets-corps",
      q: "Les brûlures électrothermiques dues au passage du courant sont souvent :", options: ["Profondes et internes, avec des marques d'entrée et de sortie", "Superficielles et sans gravité", "Limitées aux cheveux"], bonnes: [0],
      explication: "Le courant chauffe les tissus qu'il traverse (effet Joule). Les lésions internes sont souvent bien plus graves que ne le laissent penser les petites marques visibles sur la peau." },
    { id: "DANGER-016", chapitre: "courant-effets-corps", situation: "Un peintre sur un escabeau touche un fil dénudé dans un faux plafond. Il ressent une secousse et tombe.",
      q: "La chute est :", options: ["Un effet direct du courant", "Un effet indirect du choc électrique", "Sans lien avec l'électricité"], bonnes: [1],
      explication: "La chute provoquée par le sursaut est un effet indirect. Même un courant faible peut ainsi entraîner un accident grave lors d'un travail en hauteur." },
    { id: "DANGER-017", chapitre: "courant-effets-corps",
      q: "Le rayonnement d'un arc électrique peut provoquer :", options: ["Des brûlures des yeux", "Des brûlures de la peau", "Une amélioration de la vision"], bonnes: [0, 1],
      explication: "L'arc émet un rayonnement ultraviolet et une chaleur intenses : brûlures de la cornée (coup d'arc) et de la peau exposée. D'où l'écran facial anti-UV." },
    { id: "DANGER-018", chapitre: "courant-effets-corps", situation: "Un agent travaille à l'intérieur d'une cuve métallique humide avec une baladeuse.",
      q: "Dans ce lieu, une tension de quelques dizaines de volts :", options: ["Peut être dangereuse", "Est toujours sans danger"], bonnes: [0],
      explication: "Dans un milieu humide et conducteur, la résistance du corps chute. La tension limite de sécurité y est plus basse qu'en local sec : il faut un matériel adapté, en très basse tension de sécurité." },
    { id: "DANGER-019", chapitre: "courant-effets-corps",
      q: "En courant alternatif, la tension limite conventionnelle de sécurité généralement retenue en local sec est de :", options: ["50 V", "12 V", "230 V"], bonnes: [0],
      explication: "En local sec, la tension limite conventionnelle de sécurité en alternatif est de 50 V. Elle est plus basse en local humide ou mouillé." },
    { id: "DANGER-020", chapitre: "dangers-origine-electrique", situation: "En démontant un luminaire resté sous tension, un employé touche le conducteur de phase dénudé.",
      q: "Il s'agit d'un contact :", options: ["Direct", "Indirect"], bonnes: [0],
      explication: "Le conducteur de phase est une partie active, normalement sous tension. Le toucher est un contact direct." },
    { id: "DANGER-021", chapitre: "dangers-origine-electrique", situation: "Une ouvrière ressent une décharge en touchant la carcasse métallique d'une machine dont l'isolation interne est défaillante.",
      q: "Il s'agit d'un contact :", options: ["Direct", "Indirect"], bonnes: [1],
      explication: "La carcasse est une masse, normalement hors tension, mise sous tension par un défaut d'isolement. C'est un contact indirect." },
    { id: "DANGER-022", chapitre: "dangers-origine-electrique",
      q: "Une masse, c'est :", options: ["Une partie conductrice accessible d'un matériel, normalement hors tension", "Un conducteur de phase", "Le poids d'un appareil électrique"], bonnes: [0],
      explication: "Une masse est une partie conductrice accessible (carcasse, capot métallique) qui n'est pas sous tension en service normal, mais peut le devenir en cas de défaut d'isolement." },
    { id: "DANGER-023", chapitre: "dangers-origine-electrique",
      q: "Quelles mesures protègent contre les contacts indirects ?", options: ["La mise à la terre des masses", "Un dispositif différentiel", "Un matériel de classe II", "Un fusible surdimensionné"], bonnes: [0, 1, 2],
      explication: "Mise à la terre des masses associée à une coupure automatique (différentiel), ou double isolation (classe II). Un fusible protège contre les surintensités, pas contre les contacts indirects." },
    { id: "DANGER-024", chapitre: "dangers-origine-electrique",
      q: "Quelles mesures protègent contre les contacts directs ?", options: ["L'isolation des parties actives", "Les enveloppes et capots fermés", "L'éloignement ou les obstacles"], bonnes: [0, 1, 2],
      explication: "Contre les contacts directs, on rend les parties actives inaccessibles : isolation, enveloppes, barrières, éloignement. Le différentiel 30 mA apporte une protection complémentaire." },
    { id: "DANGER-025", chapitre: "dangers-origine-electrique", situation: "Dans le tableau d'un atelier, un interrupteur différentiel porte l'indication 30 mA.",
      q: "Le rôle principal d'un dispositif différentiel 30 mA est de :", options: ["Protéger les câbles contre les surcharges uniquement", "Protéger les personnes en coupant en cas de fuite de courant", "Économiser l'énergie"], bonnes: [1],
      explication: "Le différentiel compare le courant qui part et celui qui revient. S'il détecte une fuite vers la terre (par un défaut ou par une personne), il coupe. À 30 mA, il est réglé pour protéger les personnes." },
    { id: "DANGER-026", chapitre: "dangers-origine-electrique", situation: "Un technicien laisse tomber une clé métallique qui touche en même temps deux bornes de phases différentes.",
      q: "Il se produit :", options: ["Un contact indirect", "Une mise à la terre", "Un court-circuit"], bonnes: [2],
      explication: "Relier deux points à des potentiels différents sans résistance notable provoque un court-circuit : intensité très élevée, arc, projections." },
    { id: "DANGER-027", chapitre: "dangers-origine-electrique",
      q: "Un court-circuit peut provoquer :", options: ["Un arc électrique", "Un incendie", "Des projections de métal en fusion", "Une baisse de l'intensité"], bonnes: [0, 1, 2],
      explication: "Le court-circuit fait monter l'intensité à une valeur très élevée : arc, échauffement brutal, incendie, projections. L'intensité augmente, elle ne baisse pas." },
    { id: "DANGER-028", chapitre: "dangers-origine-electrique",
      q: "Fusibles et disjoncteurs protègent principalement :", options: ["Les personnes contre l'électrisation", "L'installation contre les surintensités et les courts-circuits"], bonnes: [1],
      explication: "Fusibles et disjoncteurs coupent les surintensités pour protéger les câbles et appareils. Leur seuil est trop élevé pour protéger une personne : c'est le rôle du différentiel à haute sensibilité." },
    { id: "DANGER-029", chapitre: "dangers-origine-electrique",
      q: "La température d'un arc électrique atteint :", options: ["Environ 100 °C", "Plusieurs milliers de degrés", "La température ambiante"], bonnes: [1],
      explication: "L'arc électrique atteint plusieurs milliers de degrés en une fraction de seconde : il brûle, enflamme les vêtements et fait fondre le métal." },
    { id: "DANGER-030", chapitre: "dangers-origine-electrique", situation: "Un ouvrier se tient à côté d'une armoire au moment où un court-circuit s'y produit. Il ne touche rien.",
      q: "Peut-il être blessé ?", options: ["Non, puisqu'il ne touche rien", "Oui, par l'arc électrique et ses projections"], bonnes: [1],
      explication: "L'arc brûle par rayonnement et projections de métal en fusion, sans contact. La proximité suffit pour être blessé." },
    { id: "DANGER-031", chapitre: "dangers-origine-electrique",
      q: "L'amorçage, c'est :", options: ["Un arc qui s'établit quand on s'approche trop près d'une pièce nue sous tension", "Le démarrage d'un moteur", "La vérification d'absence de tension"], bonnes: [0],
      explication: "Quand la distance est trop faible, l'air ne suffit plus à isoler : un arc se forme sans contact. Le risque concerne surtout la haute tension." },
    { id: "DANGER-032", chapitre: "dangers-origine-electrique", situation: "Un cariste lève les fourches d'un engin sous une ligne aérienne haute tension. Les fourches ne touchent pas les câbles.",
      domaine: "HT",
      q: "Y a-t-il un risque électrique ?", options: ["Non, il n'y a aucun contact", "Oui, un amorçage peut se produire"], bonnes: [1],
      explication: "En haute tension, un arc peut s'établir à distance. C'est pourquoi il faut respecter les distances de sécurité et ne pas s'approcher d'une ligne." },
    { id: "DANGER-033", chapitre: "dangers-origine-electrique", situation: "Un circuit vient d'être coupé, mais personne n'a vérifié l'absence de tension.",
      q: "Ce circuit doit être considéré comme :", options: ["Sous tension", "Hors tension"], bonnes: [0],
      explication: "Tant que l'absence de tension n'a pas été vérifiée, l'installation est réputée sous tension : retour de tension, mauvais circuit coupé ou charge résiduelle restent possibles." },
    { id: "DANGER-034", chapitre: "dangers-origine-electrique",
      q: "Une installation coupée peut rester dangereuse à cause :", options: ["D'une remise sous tension par une autre personne", "D'un condensateur resté chargé", "D'une alimentation par une autre source (groupe, onduleur, panneaux solaires)"], bonnes: [0, 1, 2],
      explication: "Charges résiduelles, sources multiples et remise sous tension intempestive sont des dangers classiques. D'où la condamnation et la vérification d'absence de tension." },
    { id: "DANGER-035", chapitre: "courant-effets-corps",
      q: "La résistance du corps humain dépend :", options: ["De l'état de la peau", "De la surface de contact", "De la tension appliquée", "De la couleur des vêtements"], bonnes: [0, 1, 2],
      explication: "Peau sèche ou mouillée, surface et pression de contact, et tension appliquée font varier la résistance du corps. La couleur des vêtements n'a aucune influence." },
    { id: "DANGER-036", chapitre: "dangers-origine-electrique", situation: "Un électricien ouvre une armoire et voit des bornes nues, un câble à l'isolant fendu et une carcasse de moteur reliée à la terre.",
      q: "Lesquels de ces éléments présentent un risque de contact direct ?", options: ["La carcasse reliée à la terre, en l'absence de défaut", "Les bornes nues", "Le câble à l'isolant fendu"], bonnes: [1, 2],
      explication: "Bornes nues et conducteur visible sous un isolant fendu sont des parties actives accessibles : risque de contact direct. Une carcasse saine reliée à la terre est une masse, concernée seulement en cas de défaut (contact indirect)." }
  );
})();

/* ───────────── Thème ZONES — Domaines de tension et zones d'environnement ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "domaines-tension",
      theme: "ZONES",
      parcours: ["tous"],
      titre: "Les domaines de tension",
      duree: 15,
      objectifs: [
        "Connaître les cinq domaines de tension : TBT, BT, HTA, HTB",
        "Connaître leurs limites en courant alternatif et en courant continu",
        "Classer une installation courante dans le bon domaine",
        "Faire le lien entre domaine de tension et lettre B ou H de l'habilitation"
      ],
      sections: [
        {
          titre: "Pourquoi classer les tensions",
          contenu: `<p>Le danger électrique n'est pas le même à 24 V, à 230 V ou à 20 000 V. Plus la tension est élevée, plus l'intensité qui peut traverser le corps est forte, plus les distances d'amorçage sont grandes et plus l'arc électrique est violent.</p>
<p>La réglementation (Code du travail) et la norme <strong>NF C 18-510</strong> classent donc les installations en <strong>domaines de tension</strong>. Ce classement détermine :</p>
<ul>
<li>la <strong>lettre</strong> de l'habilitation : <strong>B</strong> pour la basse et la très basse tension, <strong>H</strong> pour la haute tension ;</li>
<li>les <strong>distances</strong> et les <strong>zones</strong> à respecter autour des pièces nues sous tension ;</li>
<li>les <strong>équipements</strong> de protection à utiliser (classe des gants, par exemple) ;</li>
<li>les <strong>procédures</strong> applicables (consignation, mise à la terre et en court-circuit…).</li>
</ul>
<p>Les valeurs limites ne sont pas les mêmes en <strong>courant alternatif</strong> (celui du réseau, à 50 Hz) et en <strong>courant continu</strong> (batteries, panneaux photovoltaïques, certaines machines), car le continu est, à valeur égale, un peu moins dangereux pour l'organisme.</p>`
        },
        {
          titre: "Le tableau des domaines de tension",
          contenu: `<p>Les valeurs ci-dessous sont celles du Code du travail et de la NF C 18-510. Elles sont à connaître par cœur : elles tombent très souvent au QCM.</p>
<table>
<thead><tr><th>Domaine</th><th>Courant alternatif</th><th>Courant continu</th></tr></thead>
<tbody>
<tr><td><strong>TBT</strong> (très basse tension)</td><td>U ≤ 50 V</td><td>U ≤ 120 V</td></tr>
<tr><td><strong>BT</strong> (basse tension)</td><td>50 V &lt; U ≤ 1 000 V</td><td>120 V &lt; U ≤ 1 500 V</td></tr>
<tr><td><strong>HTA</strong> (haute tension A)</td><td>1 000 V &lt; U ≤ 50 000 V</td><td>1 500 V &lt; U ≤ 75 000 V</td></tr>
<tr><td><strong>HTB</strong> (haute tension B)</td><td>U &gt; 50 000 V</td><td>U &gt; 75 000 V</td></tr>
</tbody>
</table>
<p>Les valeurs sont des valeurs <strong>nominales</strong>, c'est-à-dire la tension pour laquelle l'installation est conçue. Pour un réseau triphasé, on considère la tension entre phases.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en alternatif, les bornes sont <strong>50 V</strong>, <strong>1 000 V</strong> et <strong>50 kV</strong>. En continu, <strong>120 V</strong>, <strong>1 500 V</strong> et <strong>75 kV</strong>.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une tension égale à la borne appartient au domaine inférieur. 50 V alternatif, c'est de la TBT ; 1 000 V alternatif, c'est encore de la BT ; 1 500 V continu, c'est encore de la BT.</div>`
        },
        {
          titre: "Des exemples concrets",
          contenu: `<p>Pour classer une installation, on regarde sa tension nominale et la nature du courant :</p>
<table>
<thead><tr><th>Installation</th><th>Tension</th><th>Domaine</th></tr></thead>
<tbody>
<tr><td>Éclairage de sécurité, sonnerie, automatisme alimenté par transformateur</td><td>12, 24 ou 48 V alternatif</td><td>TBT</td></tr>
<tr><td>Batterie de véhicule</td><td>12 ou 24 V continu</td><td>TBT</td></tr>
<tr><td>Prise de courant domestique, éclairage</td><td>230 V alternatif</td><td>BT</td></tr>
<tr><td>Moteur triphasé d'atelier</td><td>400 V alternatif entre phases</td><td>BT</td></tr>
<tr><td>Chaîne de panneaux photovoltaïques</td><td>plusieurs centaines de volts continus</td><td>BT (continu)</td></tr>
<tr><td>Réseau de distribution public alimentant un poste de transformation</td><td>20 000 V alternatif</td><td>HTA</td></tr>
<tr><td>Lignes de transport à très haute tension</td><td>63 000 V à 400 000 V alternatif</td><td>HTB</td></tr>
</tbody>
</table>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un poste de transformation d'usine reçoit du 20 000 V et délivre du 400 V. Côté arrivée, on est en <strong>HTA</strong> ; côté départ, en <strong>BT</strong>. Les habilitations nécessaires ne sont pas les mêmes des deux côtés.</div>
<p>Attention : la TBT n'est pas forcément sans danger. Une batterie de forte capacité, même à 48 V, peut provoquer un court-circuit violent, un arc et des brûlures. Et dans un milieu humide ou conducteur, la tension limite de sécurité est plus basse que 50 V.</p>`
        },
        {
          titre: "Domaine de tension et lettre de l'habilitation",
          contenu: `<p>Le premier caractère du symbole d'habilitation indique le domaine de tension sur lequel la personne peut opérer :</p>
<ul>
<li><strong>B</strong> : ouvrages et installations du domaine <strong>BT et TBT</strong> ;</li>
<li><strong>H</strong> : ouvrages et installations du domaine <strong>HT</strong> (HTA et HTB).</li>
</ul>
<p>Une habilitation B ne permet pas d'opérer en haute tension, et une habilitation H ne couvre pas automatiquement la basse tension : si une personne intervient dans les deux domaines, son titre porte les deux symboles (par exemple B0 et H0V).</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> dans un poste de transformation, la partie HTA et la partie BT sont souvent dans le même local. Un titulaire d'une habilitation B seule ne doit pas s'approcher de la partie HTA.</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> B = basse et très basse tension ; H = haute tension. Le domaine de tension est toujours le premier caractère du symbole.</div>`
        },
        {
          titre: "Cas particuliers et erreurs fréquentes",
          contenu: `<p>Quelques situations reviennent souvent dans les questions d'examen et sur le terrain :</p>
<ul>
<li><strong>230 V ou 400 V ?</strong> Sur un réseau triphasé basse tension, on mesure 230 V entre une phase et le neutre et 400 V entre deux phases. Dans les deux cas, on reste dans le domaine BT.</li>
<li><strong>Une installation à plusieurs tensions</strong> : une machine peut être alimentée en 400 V pour sa puissance et en 24 V pour ses automatismes. Le domaine à retenir pour l'habilitation est celui de la tension la plus élevée présente dans l'armoire.</li>
<li><strong>Le courant continu des batteries</strong> : un chariot élévateur ou un véhicule électrique peut embarquer une batterie de plusieurs centaines de volts continus. On est alors en BT continu, avec un risque d'arc important.</li>
<li><strong>Les installations photovoltaïques</strong> : les panneaux produisent du courant dès qu'ils sont éclairés. On ne peut pas les « couper » à la source comme un réseau ; leur côté continu reste sous tension en journée.</li>
<li><strong>TBT ne veut pas dire sans risque</strong> : la très basse tension de sécurité (TBTS), obtenue par un transformateur de sécurité, est conçue pour limiter le risque de choc. Mais une forte intensité disponible, même sous faible tension, peut provoquer des brûlures et des arcs.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> la plaque signalétique d'un appareil ou l'étiquette d'une armoire indique la tension d'alimentation. Dans le doute, on considère le domaine de tension le plus élevé et on demande au chargé d'exploitation.</div>`
        }
      ],
      points_cles: [
        "TBT : jusqu'à 50 V en alternatif, 120 V en continu.",
        "BT : de 50 V à 1 000 V en alternatif, de 120 V à 1 500 V en continu.",
        "HTA : de 1 000 V à 50 kV en alternatif, de 1 500 V à 75 kV en continu.",
        "HTB : au-delà de 50 kV en alternatif, 75 kV en continu.",
        "Une valeur égale à la borne appartient au domaine inférieur (1 000 V alternatif = BT).",
        "230 V et 400 V sont de la BT ; le réseau de distribution à 20 kV est de la HTA.",
        "Lettre B = BT et TBT ; lettre H = HTA et HTB."
      ]
    },
    {
      id: "zones-environnement",
      theme: "ZONES",
      parcours: ["tous"],
      titre: "Les zones d'environnement et les locaux réservés aux électriciens",
      duree: 22,
      objectifs: [
        "Connaître les distances limites DLI, DLVS, DLVR et DMA",
        "Situer les zones 0, 1 et 4 en basse tension et les zones 0, 1, 2 et 3 en haute tension",
        "Savoir quelles habilitations permettent d'accéder à chaque zone",
        "Reconnaître un local ou un emplacement d'accès réservé aux électriciens et ses règles d'accès"
      ],
      sections: [
        {
          titre: "Le vocabulaire : pièce nue, environnement, distances",
          contenu: `<p>Les zones d'environnement sont définies autour d'une <strong>pièce nue sous tension</strong>, c'est-à-dire une partie active qui n'est pas protégée contre les contacts (conducteur dénudé, borne accessible, jeu de barres, ligne aérienne nue). Une installation entièrement protégée (degré IP2X ou IPXXB au minimum, armoire fermée) ne crée pas de zone de voisinage.</p>
<p>La NF C 18-510 définit quatre <strong>distances limites</strong>, mesurées à partir de la pièce nue sous tension :</p>
<ul>
<li><strong>DLI</strong> : distance limite d'investigation. Elle borne la zone dans laquelle on doit identifier et prendre en compte l'ouvrage électrique.</li>
<li><strong>DLVS</strong> : distance limite de voisinage simple.</li>
<li><strong>DLVR</strong> : distance limite de voisinage renforcé.</li>
<li><strong>DMA</strong> : distance minimale d'approche. En deçà, on est en contact ou en travaux sous tension.</li>
</ul>
<p>Plus on se rapproche de la pièce nue, plus la zone est dangereuse et plus l'habilitation exigée est élevée. Les valeurs exactes dépendent du domaine de tension ; elles sont fixées par la norme et reprises dans les instructions de sécurité de l'établissement.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> de l'extérieur vers la pièce nue : DLI, puis DLVS, puis DLVR, puis DMA.</div>`
        },
        {
          titre: "Les zones en basse tension",
          contenu: `<p>En basse tension, il existe <strong>trois zones</strong> : la zone 0, la zone 1 et la zone 4.</p>
<table>
<thead><tr><th>Zone</th><th>Nom</th><th>Étendue</th><th>Qui peut y opérer</th></tr></thead>
<tbody>
<tr><td><strong>Zone 0</strong></td><td>Zone d'investigation</td><td>Au-delà de la DLVS (3 m en champ libre)</td><td>Tout le monde, sans habilitation</td></tr>
<tr><td><strong>Zone 1</strong></td><td>Voisinage simple</td><td>Entre la DLVS (3 m) et la DLVR (0,30 m)</td><td>Personnes habilitées, dont B0 pour les travaux d'ordre non électrique</td></tr>
<tr><td><strong>Zone 4</strong></td><td>Voisinage renforcé BT</td><td>À moins de 0,30 m de la pièce nue, jusqu'au contact</td><td>Électriciens habilités (B1V, B2V, BR, BC, BE…) ; interdite aux non-électriciens</td></tr>
</tbody>
</table>
<p>En basse tension, la DLVR et la DMA sont confondues : il n'y a pas de zone intermédiaire entre le voisinage renforcé et le contact.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un maçon B0 perce un mur à 1 mètre d'un tableau BT dont la porte est ouverte et les bornes nues. Il est en zone 1 : son B0 le lui permet. Il ne doit en aucun cas approcher sa main, son outil ou son échelle à moins de 0,30 m des bornes, car il entrerait en zone 4.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> il n'y a ni zone 2 ni zone 3 en basse tension. Le voisinage renforcé BT, c'est la <strong>zone 4</strong>.</div>`
        },
        {
          titre: "Les zones en haute tension",
          contenu: `<p>En haute tension, il existe <strong>quatre zones</strong> : 0, 1, 2 et 3. La zone 4 n'existe pas en haute tension.</p>
<table>
<thead><tr><th>Zone</th><th>Nom</th><th>Étendue</th><th>Qui peut y opérer</th></tr></thead>
<tbody>
<tr><td><strong>Zone 0</strong></td><td>Zone d'investigation</td><td>Entre la DLI (50 m en champ libre) et la DLVS</td><td>Tout le monde, l'ouvrage étant identifié</td></tr>
<tr><td><strong>Zone 1</strong></td><td>Voisinage simple</td><td>Entre la DLVS et la DLVR</td><td>Personnes habilitées, dont H0 pour les travaux d'ordre non électrique</td></tr>
<tr><td><strong>Zone 2</strong></td><td>Voisinage renforcé HT</td><td>Entre la DLVR et la DMA</td><td>Habilitations avec attribut V (H0V, H1V, H2V) et chargés de consignation ou d'opérations spécifiques HT</td></tr>
<tr><td><strong>Zone 3</strong></td><td>Travaux sous tension HT</td><td>En deçà de la DMA</td><td>Uniquement les habilitations de travaux sous tension (T) ou de nettoyage sous tension (N)</td></tr>
</tbody>
</table>
<p>La <strong>DLVS</strong> en haute tension est de <strong>3 m</strong> pour les tensions jusqu'à 50 kV et de <strong>5 m</strong> au-delà. Ces valeurs se retrouvent dans le Code du travail pour les travaux effectués au voisinage des lignes électriques. La DLVR et la DMA dépendent de la tension de l'ouvrage : elles sont données dans la norme et dans les instructions de l'établissement.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> en haute tension, l'amorçage peut se produire sans contact. Le franchissement d'une distance limite, même par un outil, une perche ou la flèche d'un engin, vous fait changer de zone.</div>`
        },
        {
          titre: "Les locaux et emplacements d'accès réservé aux électriciens",
          contenu: `<p>Un <strong>local</strong> ou un <strong>emplacement d'accès réservé aux électriciens</strong> est un lieu dans lequel se trouvent des pièces nues sous tension ou des équipements électriques dangereux : local de tableau général, poste de transformation, armoire électrique de grande taille, salle de machines…</p>
<p>Ces lieux sont :</p>
<ul>
<li><strong>fermés à clé</strong> ou dont l'ouverture nécessite un outil ;</li>
<li><strong>signalés</strong> par le panneau triangulaire jaune à éclair noir (danger électrique) et une mention d'accès réservé ;</li>
<li>accessibles aux seules <strong>personnes habilitées</strong>, ou aux personnes non habilitées placées sous la <strong>surveillance permanente</strong> d'une personne habilitée désignée.</li>
</ul>
<p>Dans un local d'accès réservé aux électriciens, la <strong>zone 0 n'existe pas</strong> : dès qu'on y entre, on est au moins en zone 1. La zone 1 est alors limitée par les parois du local.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une entreprise de peinture doit refaire les murs du local du tableau général basse tension. Les peintres doivent être habilités <strong>B0</strong> (ou être surveillés en permanence par une personne habilitée), et respecter le balisage qui leur interdit d'approcher les parties nues.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> trouver la porte d'un local électrique ouverte ne donne pas le droit d'y entrer. L'accès dépend de l'habilitation et de l'autorisation, pas de l'état de la porte.</div>`
        },
        {
          titre: "Lire une situation de travail",
          contenu: `<p>Pour savoir dans quelle zone on travaille, on se pose toujours les mêmes questions :</p>
<ol>
<li>Y a-t-il des <strong>pièces nues sous tension</strong> à proximité (ou une installation dont on ignore l'état) ?</li>
<li>Quel est le <strong>domaine de tension</strong> : BT ou HT ?</li>
<li>Quelle est la <strong>distance la plus courte</strong> entre la pièce nue et moi, mon outil, ma charge ou mon engin, en tenant compte de mes mouvements ?</li>
<li>Suis-je dans un <strong>local d'accès réservé</strong> ?</li>
</ol>
<p>La distance à prendre en compte inclut les <strong>mouvements prévisibles</strong> : geste involontaire, outil long, échelle qu'on déplace, balancement d'une charge, déplacement d'un engin. On doit raisonner sur la position la plus défavorable.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la zone se détermine avec la distance <strong>minimale</strong> qui peut être atteinte pendant le travail, outils et mouvements compris, et non avec la position du corps au repos.</div>`
        }
      ],
      points_cles: [
        "Les zones se mesurent à partir de la pièce nue sous tension.",
        "Distances, de l'extérieur vers l'intérieur : DLI, DLVS, DLVR, DMA.",
        "BT : zone 0 au-delà de 3 m, zone 1 de 3 m à 0,30 m, zone 4 à moins de 0,30 m.",
        "HT : zone 0 (investigation), zone 1 (voisinage simple), zone 2 (voisinage renforcé), zone 3 (travaux sous tension).",
        "DLVS HT : 3 m jusqu'à 50 kV, 5 m au-delà.",
        "La zone 4 est interdite aux non-électriciens ; la zone 2 exige l'attribut V.",
        "Pas de zone 0 dans un local d'accès réservé aux électriciens.",
        "On tient compte des outils, des charges et des mouvements prévisibles."
      ]
    }
  );

  P.questions.push(
    { id: "ZONES-001", chapitre: "domaines-tension", situation: "Vous intervenez près d'une prise de courant domestique en 230 V alternatif.",
      q: "Cette installation est du domaine :", options: ["BT", "TBT", "HTA"], bonnes: [0],
      explication: "En alternatif, la BT va de plus de 50 V jusqu'à 1 000 V. Le 230 V est donc de la basse tension." },
    { id: "ZONES-002", chapitre: "domaines-tension",
      q: "En courant alternatif, la très basse tension (TBT) correspond à :", options: ["U ≤ 120 V", "U ≤ 50 V", "U ≤ 230 V"], bonnes: [1],
      explication: "En alternatif, la TBT va jusqu'à 50 V inclus. La valeur de 120 V est la limite de la TBT en courant continu." },
    { id: "ZONES-003", chapitre: "domaines-tension",
      q: "En courant continu, la très basse tension (TBT) correspond à :", options: ["U ≤ 50 V", "U ≤ 1 500 V", "U ≤ 120 V"], bonnes: [2],
      explication: "En continu, la TBT va jusqu'à 120 V. 1 500 V est la limite haute de la BT en continu." },
    { id: "ZONES-004", chapitre: "domaines-tension", situation: "Une machine est alimentée en 400 V alternatif triphasé.",
      q: "Elle relève du domaine :", options: ["BT", "HTA", "HTB"], bonnes: [0],
      explication: "400 V alternatif est compris entre 50 V et 1 000 V : c'est de la basse tension." },
    { id: "ZONES-005", chapitre: "domaines-tension", situation: "Un poste de transformation est alimenté par le réseau public en 20 000 V.",
      domaine: "HT",
      q: "L'arrivée de ce poste est du domaine :", options: ["BT", "HTA", "HTB"], bonnes: [1],
      explication: "En alternatif, la HTA va de plus de 1 000 V jusqu'à 50 000 V. Le 20 kV de distribution publique est de la HTA." },
    { id: "ZONES-006", chapitre: "domaines-tension",
      domaine: "HT",
      q: "En courant alternatif, le domaine HTB commence au-delà de :", options: ["1 000 V", "75 000 V", "50 000 V"], bonnes: [2],
      explication: "En alternatif, la HTB correspond aux tensions supérieures à 50 kV. La valeur de 75 kV est la limite HTA/HTB en courant continu." },
    { id: "ZONES-007", chapitre: "domaines-tension", situation: "Un champ de panneaux photovoltaïques produit 900 V en courant continu.",
      q: "Cette tension continue est du domaine :", options: ["BT", "TBT", "HTA"], bonnes: [0],
      explication: "En continu, la BT va de plus de 120 V jusqu'à 1 500 V. 900 V continu est donc de la basse tension." },
    { id: "ZONES-008", chapitre: "domaines-tension",
      q: "Une installation en 1 000 V alternatif est du domaine :", options: ["BT", "HTA"], bonnes: [0],
      explication: "La BT en alternatif va jusqu'à 1 000 V inclus. La HTA commence au-delà de 1 000 V." },
    { id: "ZONES-009", chapitre: "domaines-tension", situation: "Un automatisme est alimenté en 24 V alternatif par un transformateur.",
      q: "Cette tension est du domaine :", options: ["BT", "TBT"], bonnes: [1],
      explication: "24 V alternatif est inférieur à 50 V : c'est de la très basse tension." },
    { id: "ZONES-010", chapitre: "domaines-tension",
      q: "Dans un symbole d'habilitation, la lettre B concerne :", options: ["La très basse tension", "La basse tension", "La haute tension A"], bonnes: [0, 1],
      explication: "La lettre B couvre les domaines BT et TBT. La lettre H couvre la haute tension (HTA et HTB)." },
    { id: "ZONES-011", chapitre: "domaines-tension", situation: "Un agent habilité B0 seulement doit nettoyer un poste de transformation 20 kV / 400 V.",
      domaine: "HT",
      q: "Son habilitation lui permet d'approcher la partie 20 kV :", options: ["Oui", "Non"], bonnes: [1],
      explication: "La partie 20 kV est en HTA : il faut une habilitation de la lettre H (H0 ou H0V selon la zone). Le B0 ne couvre que la BT et la TBT." },
    { id: "ZONES-012", chapitre: "zones-environnement",
      q: "Les zones d'environnement sont définies à partir :", options: ["D'une pièce nue sous tension", "De la porte d'entrée du bâtiment", "Du tableau de l'employeur"], bonnes: [0],
      explication: "Les distances limites et les zones se mesurent à partir des pièces nues sous tension. Une installation entièrement protégée ne crée pas de voisinage." },
    { id: "ZONES-013", chapitre: "zones-environnement",
      q: "En basse tension, quelles zones existent ?", options: ["Zone 0", "Zone 3", "Zone 4", "Zone 1"], bonnes: [0, 2, 3],
      explication: "En BT, on trouve la zone 0 (investigation), la zone 1 (voisinage simple) et la zone 4 (voisinage renforcé BT). Les zones 2 et 3 n'existent qu'en haute tension." },
    { id: "ZONES-014", chapitre: "zones-environnement",
      domaine: "HT",
      q: "En haute tension, quelles zones existent ?", options: ["Zone 3", "Zone 0", "Zone 2", "Zone 4"], bonnes: [0, 1, 2],
      explication: "En HT, on trouve les zones 0, 1, 2 (voisinage renforcé HT) et 3 (travaux sous tension). La zone 4 est propre à la BT." },
    { id: "ZONES-015", chapitre: "zones-environnement",
      q: "La zone 4 correspond :", options: ["Aux travaux sous tension en haute tension", "Au voisinage renforcé en basse tension", "À la zone d'investigation"], bonnes: [1],
      explication: "La zone 4 est la zone de voisinage renforcé BT, de la DLVR (0,30 m) jusqu'au contact. Elle est interdite aux non-électriciens." },
    { id: "ZONES-016", chapitre: "zones-environnement",
      domaine: "HT",
      q: "La zone 3 correspond :", options: ["Au voisinage simple", "Au voisinage renforcé en basse tension", "Aux travaux sous tension en haute tension"], bonnes: [2],
      explication: "La zone 3 se trouve en deçà de la DMA en haute tension : c'est la zone des travaux sous tension, réservée aux habilitations T ou N." },
    { id: "ZONES-017", chapitre: "zones-environnement",
      q: "Dans l'ordre, de la plus éloignée à la plus proche de la pièce nue sous tension, on trouve :", options: ["DLI, DLVS, DLVR, DMA", "DMA, DLVR, DLVS, DLI", "DLVS, DLI, DMA, DLVR"], bonnes: [0],
      explication: "On part de la distance limite d'investigation (DLI), puis le voisinage simple (DLVS), le voisinage renforcé (DLVR), et enfin la distance minimale d'approche (DMA)." },
    { id: "ZONES-018", chapitre: "zones-environnement", situation: "Un peintre habilité B0 travaille dans un local électrique, à 1,50 m d'un jeu de barres BT nu sous tension.",
      q: "Dans quelle zone se trouve-t-il ?", options: ["Zone 0", "Zone 1", "Zone 4"], bonnes: [1],
      explication: "En BT, la zone 1 s'étend de 3 m à 0,30 m de la pièce nue. À 1,50 m, il est en voisinage simple, ce que permet le B0." },
    { id: "ZONES-019", chapitre: "zones-environnement", situation: "Le même peintre doit passer son rouleau à 20 cm du jeu de barres BT nu sous tension.",
      q: "Peut-il le faire ?", options: ["Oui, son B0 le lui permet", "Non, ce serait entrer en zone 4"], bonnes: [1],
      explication: "À moins de 0,30 m, on est en zone 4 (voisinage renforcé BT), interdite aux non-électriciens. Il faut faire mettre hors tension ou protéger les pièces nues." },
    { id: "ZONES-020", chapitre: "zones-environnement",
      q: "En basse tension, la limite entre la zone 0 et la zone 1 (DLVS) est de :", options: ["0,30 m", "50 m", "3 m"], bonnes: [2],
      explication: "En BT, la DLVS est de 3 m : au-delà, on est en zone 0 ; en deçà, en voisinage simple (zone 1). 0,30 m est la DLVR BT." },
    { id: "ZONES-021", chapitre: "zones-environnement",
      domaine: "HT",
      q: "Pour pénétrer en zone 2 (voisinage renforcé HT) pour un travail d'ordre non électrique, il faut au minimum être habilité :", options: ["H0V", "H0", "B0"], bonnes: [0],
      explication: "La zone 2 exige l'attribut V. Le H0V permet les travaux d'ordre non électrique au voisinage renforcé HT ; le H0 est limité à la zone 1." },
    { id: "ZONES-022", chapitre: "zones-environnement", situation: "Vous entrez dans un local d'accès réservé aux électriciens contenant un tableau BT.",
      q: "Dès l'entrée, vous êtes au moins en :", options: ["Zone 0", "Zone 1"], bonnes: [1],
      explication: "La zone 0 n'existe pas dans un local d'accès réservé aux électriciens : on y est au moins en zone 1." },
    { id: "ZONES-023", chapitre: "zones-environnement", situation: "Un livreur trouve ouverte la porte d'un local signalé « Accès réservé aux électriciens ». Il n'est pas habilité.",
      q: "Peut-il y entrer seul pour déposer un carton ?", options: ["Oui, puisque la porte est ouverte", "Non"], bonnes: [1],
      explication: "L'accès est réservé aux personnes habilitées, ou aux non-habilités sous la surveillance permanente d'une personne habilitée. L'état de la porte ne change rien." },
    { id: "ZONES-024", chapitre: "zones-environnement",
      q: "Un local d'accès réservé aux électriciens doit être :", options: ["Signalé", "Fermé à clé ou ouvrable seulement avec un outil", "Laissé ouvert en permanence pour la ventilation"], bonnes: [0, 1],
      explication: "Ces locaux sont fermés à clé (ou par un dispositif nécessitant un outil) et signalés par le panneau de danger électrique et une mention d'accès réservé." },
    { id: "ZONES-025", chapitre: "zones-environnement", situation: "Un ouvrier se tient à 2 m d'un tableau BT ouvert mais manipule une perche métallique de 2,50 m.",
      q: "Pour déterminer sa zone, il faut tenir compte :", options: ["De la perche et de ses mouvements prévisibles", "De la position de son corps uniquement"], bonnes: [0],
      explication: "La zone est déterminée par la distance minimale atteignable, outils, charges et mouvements compris. Avec la perche, il peut entrer en zone 4." },
    { id: "ZONES-026", chapitre: "zones-environnement",
      q: "Une armoire électrique fermée, dont toutes les parties actives sont protégées (IP2X au minimum) :", options: ["Crée une zone de voisinage renforcé", "Ne présente pas de pièce nue accessible"], bonnes: [1],
      explication: "Les zones de voisinage n'existent qu'autour des pièces nues sous tension. Une armoire fermée et protégée n'expose pas de pièce nue accessible." },
    { id: "ZONES-027", chapitre: "zones-environnement",
      domaine: "HT",
      q: "En haute tension, pour une ligne de 20 kV, la distance limite de voisinage simple (DLVS) est de :", options: ["0,30 m", "3 m", "5 m"], bonnes: [1],
      explication: "La DLVS est de 3 m pour les tensions jusqu'à 50 kV et de 5 m au-delà. Ces valeurs se retrouvent dans le Code du travail pour les travaux au voisinage des lignes." },
    { id: "ZONES-028", chapitre: "zones-environnement",
      domaine: "HT",
      q: "Les habilitations qui permettent d'opérer en zone 3 sont :", options: ["Les habilitations de nettoyage sous tension (N)", "H0V", "Les habilitations de travaux sous tension (T)"], bonnes: [0, 2],
      explication: "La zone 3 est réservée aux travaux sous tension HT : seuls les symboles comportant T ou N y donnent accès. H0V est limité au voisinage renforcé (zone 2)." },
    { id: "ZONES-029", chapitre: "domaines-tension",
      q: "Quelles installations relèvent du domaine BT ?", options: ["Un éclairage en 230 V alternatif", "Un moteur en 400 V alternatif", "Une chaîne photovoltaïque de 600 V continu", "Une batterie de 12 V continu"], bonnes: [0, 1, 2],
      explication: "230 V et 400 V alternatifs, ainsi que 600 V continus, sont de la BT. Une batterie de 12 V continu est en TBT (jusqu'à 120 V en continu)." },
    { id: "ZONES-030", chapitre: "zones-environnement",
      domaine: "HT",
      q: "Quelles habilitations permettent de réaliser des travaux d'ordre non électrique en zone 1 ?", options: ["Aucune, la zone 1 est interdite aux non-électriciens", "B0", "H0V", "H0"], bonnes: [1, 2, 3],
      explication: "La zone 1 (voisinage simple) est accessible aux non-électriciens habilités : B0 en basse tension, H0 et H0V en haute tension." }
  );
})();

/* ───────────── Thème ORGA — Organisation, acteurs et habilitation ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "cadre-habilitation",
      theme: "ORGA",
      parcours: ["tous"],
      titre: "Le cadre réglementaire et l'habilitation électrique",
      duree: 25,
      objectifs: [
        "Connaître les textes qui encadrent le risque électrique au travail",
        "Définir l'habilitation et savoir qui la délivre",
        "Lire un symbole d'habilitation : lettres, chiffres, attributs",
        "Connaître le contenu du titre d'habilitation et ses limites",
        "Savoir quand l'habilitation doit être revue et la périodicité de recyclage recommandée"
      ],
      sections: [
        {
          titre: "Les textes : Code du travail, décret de 2010, NF C 18-510",
          contenu: `<p>La prévention du risque électrique au travail repose sur trois niveaux de textes :</p>
<ul>
<li><strong>Le Code du travail</strong> impose à l'employeur d'évaluer les risques et de protéger ses salariés. Ses articles R. 4544-1 et suivants traitent spécialement des opérations sur les installations électriques ou dans leur voisinage.</li>
<li><strong>Le décret n° 2010-1118 du 22 septembre 2010</strong> a introduit ces règles dans le Code du travail. Il a rendu l'<strong>habilitation obligatoire</strong> pour toute personne qui effectue des opérations sur des installations électriques ou dans leur voisinage.</li>
<li><strong>La norme NF C 18-510</strong> (publiée en 2012, modifiée depuis par un amendement) définit les règles pratiques : domaines de tension, zones, symboles d'habilitation, rôles, procédures de consignation. Un arrêté l'a rendue d'application de référence pour satisfaire aux obligations du Code du travail.</li>
</ul>
<p>Le Code du travail fixe <strong>ce qui est obligatoire</strong> ; la norme décrit <strong>comment</strong> le faire en sécurité. Respecter la norme permet à l'employeur de démontrer qu'il a satisfait à ses obligations.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'habilitation électrique est une <strong>obligation légale</strong> (Code du travail, décret de 2010). La NF C 18-510 en est la norme de référence.</div>`
        },
        {
          titre: "Qu'est-ce que l'habilitation ?",
          contenu: `<p>L'<strong>habilitation</strong> est la <strong>reconnaissance, par l'employeur, de la capacité d'une personne placée sous son autorité à accomplir, en sécurité vis-à-vis du risque électrique, les tâches qui lui sont confiées</strong>.</p>
<p>Plusieurs conséquences en découlent :</p>
<ul>
<li>C'est l'<strong>employeur</strong> qui délivre l'habilitation, et non l'organisme de formation. Le formateur délivre seulement un <strong>avis</strong> ou une attestation de formation, sur lequel l'employeur s'appuie.</li>
<li>L'habilitation n'est <strong>pas un diplôme</strong> : elle est liée à un employeur, à des tâches et à des installations précises.</li>
<li>Elle est <strong>personnelle</strong> : on ne peut pas « prêter » son habilitation.</li>
<li>Avant de la délivrer, l'employeur s'assure que la personne a suivi une <strong>formation théorique et pratique</strong> adaptée, et qu'elle est apte et compétente pour les tâches confiées.</li>
<li>L'habilitation ne remplace pas la <strong>qualification</strong> professionnelle : elle atteste de la capacité à travailler en sécurité, pas de la compétence technique d'électricien.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> avoir réussi la formation ne suffit pas pour être habilité. Tant que l'employeur n'a pas signé le titre d'habilitation, la personne n'est pas habilitée.</div>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un salarié habilité B1V chez son ancien employeur change d'entreprise. Son nouvel employeur doit lui délivrer un <strong>nouveau titre</strong>, après s'être assuré de sa formation et l'avoir informé des installations et des consignes propres à l'établissement.</div>`
        },
        {
          titre: "Les symboles d'habilitation",
          contenu: `<p>Le symbole d'habilitation se lit caractère par caractère :</p>
<table>
<thead><tr><th>Position</th><th>Symbole</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>1er caractère : domaine de tension</td><td>B</td><td>Basse tension et très basse tension</td></tr>
<tr><td>1er caractère</td><td>H</td><td>Haute tension (HTA et HTB)</td></tr>
<tr><td>2e caractère : type d'opération</td><td>0</td><td>Travaux d'ordre non électrique (non-électricien)</td></tr>
<tr><td>2e caractère</td><td>1</td><td>Exécutant de travaux d'ordre électrique</td></tr>
<tr><td>2e caractère</td><td>2</td><td>Chargé de travaux d'ordre électrique</td></tr>
<tr><td>2e caractère</td><td>C</td><td>Consignation</td></tr>
<tr><td>2e caractère</td><td>R</td><td>Intervention BT générale (dépannage, raccordement, mesures…)</td></tr>
<tr><td>2e caractère</td><td>S</td><td>Intervention BT élémentaire</td></tr>
<tr><td>2e caractère</td><td>E</td><td>Opérations spécifiques (essai, mesurage, vérification, manœuvre)</td></tr>
<tr><td>2e caractère</td><td>P</td><td>Opérations sur installations photovoltaïques</td></tr>
<tr><td>2e caractère</td><td>F</td><td>Travaux d'ordre non électrique de terrassement à proximité de canalisations isolées enterrées</td></tr>
<tr><td>3e caractère : lettre additionnelle</td><td>V</td><td>Travail au voisinage renforcé (zone 4 en BT, zone 2 en HT)</td></tr>
<tr><td>3e caractère</td><td>T</td><td>Travaux sous tension</td></tr>
<tr><td>3e caractère</td><td>N</td><td>Nettoyage sous tension</td></tr>
<tr><td>Attribut (en toutes lettres)</td><td>Essai, Vérification, Mesurage, Manœuvre</td><td>Précise le type d'opération spécifique ; « Chargé de chantier » précise le rôle d'un B0 ou H0</td></tr>
</tbody>
</table>
<p>Certaines combinaisons n'existent qu'en basse tension : <strong>BR</strong>, <strong>BS</strong> et <strong>BP</strong> n'ont pas d'équivalent en haute tension.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> <strong>B2V Essai</strong> se lit : basse tension (B), chargé de travaux (2), au voisinage renforcé (V), pouvant réaliser des essais (attribut Essai). <strong>H0V</strong> se lit : haute tension, non-électricien, autorisé au voisinage renforcé HT. <strong>BE Manœuvre</strong> : basse tension, opération spécifique de manœuvre.</div>`
        },
        {
          titre: "Le titre d'habilitation",
          contenu: `<p>L'habilitation est matérialisée par un <strong>titre d'habilitation</strong> établi par l'employeur. Il comporte notamment :</p>
<ul>
<li>l'identité du titulaire et son employeur ;</li>
<li>le ou les <strong>symboles</strong> d'habilitation ;</li>
<li>le <strong>champ d'application</strong> : ouvrages ou installations concernés, domaine de tension, locaux ;</li>
<li>les éventuelles <strong>limites</strong> ou indications supplémentaires ;</li>
<li>la date de délivrance et la durée de validité ;</li>
<li>la <strong>signature de l'employeur</strong> (ou de son représentant) et celle du <strong>titulaire</strong>.</li>
</ul>
<p>Le titulaire doit pouvoir présenter son titre <strong>pendant les opérations</strong>. Il ne doit réaliser que les opérations qui y sont inscrites, dans les limites indiquées. Une habilitation de niveau élevé n'autorise pas tout : un B2 n'est pas, par exemple, chargé de consignation s'il n'a pas aussi le symbole BC.</p>
<p>L'employeur remet aussi à la personne habilitée un <strong>recueil des prescriptions</strong> (ou les instructions de sécurité) et le matériel de protection adapté.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> faire une opération qui n'est pas inscrite sur son titre, même « pour rendre service », c'est travailler sans habilitation. En cas d'accident, la responsabilité de chacun peut être engagée.</div>`
        },
        {
          titre: "Durée, recyclage, suspension",
          contenu: `<p>L'habilitation n'est pas définitive. La norme NF C 18-510 recommande un <strong>recyclage tous les 3 ans</strong> pour maintenir les connaissances. L'employeur fixe la périodicité en fonction des tâches et peut la raccourcir.</p>
<p>L'habilitation doit être <strong>réexaminée</strong>, en dehors de la périodicité, dans plusieurs cas :</p>
<ul>
<li><strong>changement d'employeur</strong> ou de fonction ;</li>
<li><strong>interruption prolongée</strong> de la pratique des opérations ;</li>
<li><strong>modification importante</strong> des installations ou des méthodes de travail ;</li>
<li><strong>restriction médicale</strong> ;</li>
<li>constat de <strong>non-respect</strong> des règles de sécurité ou d'erreurs répétées.</li>
</ul>
<p>L'employeur peut <strong>suspendre</strong> ou <strong>retirer</strong> une habilitation à tout moment. Le titulaire, de son côté, doit signaler à son employeur tout élément qui pourrait remettre en cause son habilitation (problème de santé, perte de compétence…).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> recyclage recommandé tous les <strong>3 ans</strong> ; réexamen obligatoire à chaque changement important (employeur, fonction, installation, santé).</div>`
        }
      ],
      points_cles: [
        "L'habilitation est obligatoire (Code du travail, décret n° 2010-1118) ; la NF C 18-510 est la norme de référence.",
        "C'est l'employeur qui délivre et signe l'habilitation ; le formateur ne donne qu'un avis.",
        "L'habilitation est personnelle et liée à un employeur et à des tâches précises.",
        "Le titre est signé par l'employeur et par le titulaire, qui doit pouvoir le présenter.",
        "1er caractère : B ou H ; 2e : 0, 1, 2, C, R, S, E, P, F ; 3e : V, T, N ; puis l'attribut.",
        "On ne réalise que les opérations inscrites sur son titre.",
        "Recyclage recommandé tous les 3 ans, et réexamen à chaque changement important.",
        "L'employeur peut suspendre ou retirer l'habilitation."
      ]
    },
    {
      id: "acteurs-documents",
      theme: "ORGA",
      parcours: ["tous"],
      titre: "Les acteurs et les documents",
      duree: 22,
      objectifs: [
        "Connaître le rôle de chaque acteur : employeur, chargé d'exploitation, chargé de consignation, chargé de travaux, exécutant",
        "Connaître le rôle du surveillant de sécurité électrique, du chargé d'intervention et du chargé de chantier",
        "Savoir qui délivre et qui reçoit l'attestation de consignation et l'avis de fin de travail",
        "Connaître le rôle des instructions de sécurité et de l'autorisation de travail"
      ],
      sections: [
        {
          titre: "L'employeur et le chargé d'exploitation électrique",
          contenu: `<p>L'<strong>employeur</strong> est responsable de la sécurité de ses salariés. Il évalue les risques, organise le travail, fournit le matériel et les équipements de protection, fait former son personnel et délivre les habilitations.</p>
<p>Le <strong>chargé d'exploitation électrique</strong> est la personne désignée pour assurer l'exploitation d'une installation électrique : il en connaît l'état, il en organise l'accès et il assure la sécurité des opérations qui s'y déroulent. Il peut :</p>
<ul>
<li>autoriser l'<strong>accès</strong> aux locaux d'accès réservé aux électriciens ;</li>
<li>délivrer des <strong>instructions de sécurité</strong> et des <strong>autorisations de travail</strong> ;</li>
<li>réaliser ou faire réaliser les <strong>consignations</strong> ;</li>
<li>décider de la <strong>remise sous tension</strong> d'un ouvrage.</li>
</ul>
<p>Lorsqu'une entreprise extérieure intervient, c'est le chargé d'exploitation de l'établissement qui lui transmet les informations sur l'installation et les mesures de sécurité.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le chargé d'exploitation est le « gardien » de l'installation : rien ne s'y fait sans son accord.</div>`
        },
        {
          titre: "Les acteurs des travaux : consignation, chargé de travaux, exécutant",
          contenu: `<ul>
<li><strong>Le chargé de consignation</strong> (habilitation BC ou HC) réalise la <strong>consignation</strong> d'un ouvrage : il le sépare de ses sources, condamne les appareils de séparation, vérifie l'absence de tension et, si nécessaire, met à la terre et en court-circuit. Il remet ensuite une <strong>attestation de consignation</strong> au chargé de travaux. Après les travaux, il réalise la <strong>déconsignation</strong>.</li>
<li><strong>Le chargé de travaux</strong> (B2 ou H2, éventuellement avec V) assure la <strong>direction effective</strong> des travaux d'ordre électrique. Il prend les mesures de sécurité de son chantier, encadre ses exécutants, veille au respect des consignes et rédige l'<strong>avis de fin de travail</strong>.</li>
<li><strong>L'exécutant</strong> (B1 ou H1, éventuellement avec V) réalise les travaux d'ordre électrique <strong>sous la direction</strong> d'un chargé de travaux. Il applique les consignes reçues et veille à sa propre sécurité.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> l'exécutant ne commence pas un travail de sa propre initiative : il agit sur instruction de son chargé de travaux. Et un chargé de travaux n'effectue une consignation que s'il est aussi habilité chargé de consignation (BC ou HC).</div>`
        },
        {
          titre: "Les autres acteurs",
          contenu: `<ul>
<li><strong>Le surveillant de sécurité électrique</strong> est une personne habilitée, désignée pour veiller à la sécurité de personnes qui opèrent au voisinage ou qui ne sont pas habilitées. Il exerce une <strong>surveillance permanente</strong> : il ne fait aucune autre tâche pendant ce temps et il peut faire arrêter le travail.</li>
<li><strong>Le chargé d'intervention générale (BR)</strong> réalise en basse tension des interventions de dépannage, de raccordement, de mesure ou d'essai, en assurant lui-même sa sécurité.</li>
<li><strong>Le chargé d'intervention élémentaire (BS)</strong> réalise des interventions simples en basse tension : remplacement à l'identique de fusibles, lampes, prises, interrupteurs, raccordement sur un circuit en attente.</li>
<li><strong>Le chargé d'opérations spécifiques (BE, HE)</strong> réalise des essais, mesurages, vérifications ou manœuvres, selon l'attribut porté sur son titre.</li>
<li><strong>Le chargé de chantier</strong> (B0, H0 ou H0V chargé de chantier) dirige des <strong>travaux d'ordre non électrique</strong> (peinture, maçonnerie, nettoyage…) dans un environnement électrique. Il fait respecter les consignes de sécurité électrique par son équipe.</li>
<li><strong>L'exécutant non électricien</strong> (B0, H0, H0V) réalise ces travaux d'ordre non électrique sous la conduite du chargé de chantier.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une équipe de maçons non habilités doit percer un mur dans un local électrique. Le chargé d'exploitation désigne un électricien habilité comme <strong>surveillant de sécurité électrique</strong> : il reste en permanence avec eux et les fait arrêter s'ils s'approchent trop des pièces nues.</div>`
        },
        {
          titre: "Les documents",
          contenu: `<p>Les opérations électriques s'appuient sur des documents écrits, qui évitent les malentendus et tracent qui a fait quoi :</p>
<table>
<thead><tr><th>Document</th><th>Rédigé par</th><th>Remis à</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td><strong>Attestation de consignation</strong></td><td>Chargé de consignation</td><td>Chargé de travaux</td><td>Atteste que l'ouvrage est consigné : les travaux peuvent commencer</td></tr>
<tr><td><strong>Avis de fin de travail</strong></td><td>Chargé de travaux</td><td>Chargé de consignation (ou chargé d'exploitation)</td><td>Indique que les travaux sont terminés, le personnel retiré et l'ouvrage prêt à être déconsigné</td></tr>
<tr><td><strong>Autorisation de travail</strong></td><td>Chargé d'exploitation électrique</td><td>Chargé de travaux</td><td>Autorise des travaux sur ou au voisinage d'un ouvrage en précisant les conditions</td></tr>
<tr><td><strong>Instruction de sécurité</strong></td><td>Employeur ou chargé d'exploitation</td><td>Personne qui réalise l'opération</td><td>Fixe les mesures de sécurité propres à une opération ou à un lieu</td></tr>
</tbody>
</table>
<p>D'autres documents existent selon les établissements : ordre de travail, autorisation d'accès, fiche de manœuvre, consignes écrites affichées dans les locaux.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> après avoir remis l'avis de fin de travail, le chargé de travaux et son équipe ne doivent plus toucher à l'ouvrage : celui-ci peut être remis sous tension à tout moment.</div>`
        },
        {
          titre: "Le déroulement type d'un chantier électrique",
          contenu: `<ol>
<li>Le <strong>chargé d'exploitation</strong> prépare l'opération et définit les mesures de sécurité.</li>
<li>Le <strong>chargé de consignation</strong> consigne l'ouvrage et remet l'<strong>attestation de consignation</strong> au chargé de travaux.</li>
<li>Le <strong>chargé de travaux</strong> vérifie les mesures de son chantier, délimite la zone de travail, puis donne ses consignes aux <strong>exécutants</strong>.</li>
<li>Les travaux sont réalisés.</li>
<li>Le chargé de travaux fait retirer le personnel et le matériel, puis remet l'<strong>avis de fin de travail</strong>.</li>
<li>Le chargé de consignation <strong>déconsigne</strong> l'ouvrage et le rend au chargé d'exploitation, qui décide de la remise sous tension.</li>
</ol>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> attestation de consignation : du chargé de consignation <strong>vers</strong> le chargé de travaux, avant les travaux. Avis de fin de travail : du chargé de travaux <strong>vers</strong> le chargé de consignation, après les travaux.</div>`
        }
      ],
      points_cles: [
        "L'employeur forme, équipe et habilite ; le chargé d'exploitation gère l'installation et ses accès.",
        "Le chargé de consignation (BC, HC) consigne et délivre l'attestation de consignation.",
        "Le chargé de travaux (B2, H2) dirige les travaux et remet l'avis de fin de travail.",
        "L'exécutant (B1, H1) travaille sous la direction du chargé de travaux.",
        "Le surveillant de sécurité électrique exerce une surveillance permanente et ne fait rien d'autre.",
        "Le chargé de chantier (B0, H0, H0V) dirige des travaux d'ordre non électrique.",
        "Après l'avis de fin de travail, on ne touche plus à l'ouvrage.",
        "Les instructions de sécurité fixent les mesures propres à une opération."
      ]
    }
  );

  P.questions.push(
    { id: "ORGA-001", chapitre: "cadre-habilitation",
      q: "Qui délivre l'habilitation électrique ?", options: ["L'organisme de formation", "L'inspection du travail", "Le médecin du travail", "L'employeur"], bonnes: [3],
      explication: "L'habilitation est la reconnaissance, par l'employeur, de la capacité d'un salarié à travailler en sécurité. Le formateur ne délivre qu'un avis ou une attestation de formation." },
    { id: "ORGA-002", chapitre: "cadre-habilitation", situation: "Vous venez de terminer votre stage de formation B0 et le formateur vous remet une attestation.",
      q: "Êtes-vous habilité ?", options: ["Oui, dès la fin du stage", "Non, tant que l'employeur n'a pas délivré le titre"], bonnes: [1],
      explication: "L'attestation de formation est un préalable. Seul le titre d'habilitation délivré et signé par l'employeur vous habilite." },
    { id: "ORGA-003", chapitre: "cadre-habilitation",
      q: "L'habilitation électrique est :", options: ["Un diplôme valable à vie", "Personnelle", "Une reconnaissance de l'employeur pour des tâches précises"], bonnes: [1, 2],
      explication: "L'habilitation est personnelle et liée à un employeur, à des tâches et à des installations. Ce n'est pas un diplôme et elle n'est pas définitive." },
    { id: "ORGA-004", chapitre: "cadre-habilitation", situation: "Un électricien habilité B2V chez son ancien employeur est embauché par une nouvelle entreprise.",
      q: "Son nouvel employeur :", options: ["Doit lui délivrer un nouveau titre d'habilitation", "Peut se contenter de l'ancien titre"], bonnes: [0],
      explication: "L'habilitation est liée à l'employeur. Le nouvel employeur doit vérifier la formation, informer le salarié sur ses installations et lui délivrer son propre titre." },
    { id: "ORGA-005", chapitre: "cadre-habilitation",
      q: "Le titre d'habilitation est signé par :", options: ["Le titulaire", "L'employeur ou son représentant", "Le formateur uniquement"], bonnes: [0, 1],
      explication: "Le titre est signé par l'employeur (ou son représentant) et par le titulaire, qui reconnaît ainsi ses limites et ses obligations." },
    { id: "ORGA-006", chapitre: "cadre-habilitation",
      q: "Quel texte a rendu l'habilitation électrique obligatoire dans le Code du travail ?", options: ["Le Code de la route", "Le décret de 2010 relatif aux opérations sur les installations électriques", "Le règlement intérieur de l'entreprise"], bonnes: [1],
      explication: "Le décret n° 2010-1118 du 22 septembre 2010 a introduit dans le Code du travail l'obligation d'habilitation. La NF C 18-510 en précise les modalités." },
    { id: "ORGA-007", chapitre: "cadre-habilitation",
      q: "La norme de référence pour les opérations sur les installations électriques est la :", options: ["NF C 15-100", "NF EN ISO 9001", "NF C 18-510"], bonnes: [2],
      explication: "La NF C 18-510 traite des opérations sur les ouvrages et installations électriques et de l'habilitation. La NF C 15-100 concerne la conception des installations BT." },
    { id: "ORGA-008", chapitre: "cadre-habilitation",
      q: "Dans un symbole d'habilitation, le premier caractère indique :", options: ["Le domaine de tension", "Le type d'opération", "La nature du travail au voisinage"], bonnes: [0],
      explication: "Le premier caractère est B (basse et très basse tension) ou H (haute tension). Le deuxième indique le type d'opération, le troisième une lettre additionnelle." },
    { id: "ORGA-009", chapitre: "cadre-habilitation",
      q: "Le chiffre 0 dans B0 ou H0 signifie :", options: ["Aucune habilitation", "Travaux d'ordre non électrique", "Exécutant électricien"], bonnes: [1],
      explication: "Le 0 désigne une personne qui réalise des travaux d'ordre non électrique (peinture, nettoyage, maçonnerie…) dans un environnement électrique." },
    { id: "ORGA-010", chapitre: "cadre-habilitation",
      q: "Le chiffre 2 dans B2 ou H2 désigne :", options: ["Un exécutant", "Un chargé de consignation", "Un chargé de travaux"], bonnes: [2],
      explication: "1 = exécutant, 2 = chargé de travaux. Le chargé de consignation est désigné par la lettre C (BC, HC)." },
    { id: "ORGA-011", chapitre: "cadre-habilitation",
      q: "La lettre V dans un symbole d'habilitation signifie :", options: ["Voisinage renforcé", "Vérification", "Ventilation"], bonnes: [0],
      explication: "La lettre additionnelle V autorise le travail au voisinage renforcé (zone 4 en BT, zone 2 en HT). Vérification est un attribut écrit en toutes lettres." },
    { id: "ORGA-012", chapitre: "cadre-habilitation",
      q: "Quelles lettres additionnelles concernent les opérations sous tension ?", options: ["T", "V", "N"], bonnes: [0, 2],
      explication: "T désigne les travaux sous tension, N le nettoyage sous tension. V concerne le voisinage renforcé, pas les opérations sous tension." },
    { id: "ORGA-013", chapitre: "cadre-habilitation", situation: "Le titre d'un technicien porte : « B2V Essai ».",
      q: "Ce technicien est :", options: ["Chargé de consignation en haute tension", "Autorisé au voisinage renforcé BT", "Chargé de travaux en basse tension", "Autorisé à réaliser des essais"], bonnes: [1, 2, 3],
      explication: "B = basse tension, 2 = chargé de travaux, V = voisinage renforcé, Essai = attribut. Il n'est pas chargé de consignation (il faudrait le symbole BC ou HC)." },
    { id: "ORGA-014", chapitre: "cadre-habilitation",
      q: "Le symbole BR correspond à :", options: ["Un travail de réparation en haute tension", "Une intervention BT générale", "Un chargé de chantier"], bonnes: [1],
      explication: "BR désigne le chargé d'intervention BT générale (dépannage, raccordement, mesures, essais). Il n'existe pas de HR." },
    { id: "ORGA-015", chapitre: "cadre-habilitation",
      q: "Le symbole BC désigne :", options: ["Un chargé de chantier", "Une habilitation de conduite", "Un chargé de consignation en basse tension"], bonnes: [2],
      explication: "La lettre C en deuxième position désigne la consignation. Le chargé de chantier est un B0 ou H0 portant la mention « chargé de chantier »." },
    { id: "ORGA-016", chapitre: "cadre-habilitation",
      domaine: "HT",
      q: "Quels symboles n'existent qu'en basse tension ?", options: ["BE", "BS", "BR"], bonnes: [1, 2],
      explication: "BR et BS n'ont pas d'équivalent en haute tension (pas de HR ni de HS). Les opérations spécifiques existent dans les deux domaines : BE et HE." },
    { id: "ORGA-017", chapitre: "cadre-habilitation", situation: "Un collègue habilité B1V vous demande de réaliser à sa place un raccordement, parce que vous êtes « électricien dans l'âme ». Vous êtes habilité B0.",
      q: "Vous pouvez le faire :", options: ["Oui, s'il vous surveille", "Non, ce n'est pas inscrit sur votre titre"], bonnes: [1],
      explication: "On ne réalise que les opérations inscrites sur son propre titre. L'habilitation est personnelle : celle du collègue ne vous couvre pas." },
    { id: "ORGA-018", chapitre: "cadre-habilitation",
      q: "La NF C 18-510 recommande un recyclage de l'habilitation :", options: ["Tous les 3 ans", "Tous les ans", "Tous les 10 ans"], bonnes: [0],
      explication: "La norme recommande une périodicité de 3 ans. L'employeur peut fixer une périodicité plus courte selon les tâches." },
    { id: "ORGA-019", chapitre: "cadre-habilitation",
      q: "L'habilitation doit être réexaminée en cas :", options: ["De changement de véhicule personnel", "De changement de fonction", "De modification importante des installations", "D'interruption prolongée de l'activité"], bonnes: [1, 2, 3],
      explication: "Changement de fonction ou d'employeur, longue interruption, modification des installations ou restriction médicale imposent de revoir l'habilitation." },
    { id: "ORGA-020", chapitre: "cadre-habilitation",
      q: "L'employeur peut suspendre ou retirer une habilitation :", options: ["Oui, à tout moment", "Non, elle est acquise jusqu'au recyclage"], bonnes: [0],
      explication: "L'employeur peut suspendre ou retirer l'habilitation, par exemple en cas de non-respect des règles de sécurité ou de problème de santé." },
    { id: "ORGA-021", chapitre: "cadre-habilitation", situation: "Pendant une opération, un responsable de l'entreprise cliente vous demande votre titre d'habilitation.",
      q: "Vous devez :", options: ["Pouvoir le présenter", "Refuser, c'est un document personnel"], bonnes: [0],
      explication: "Le titulaire doit pouvoir présenter son titre pendant les opérations, pour prouver ce qu'il est autorisé à faire." },
    { id: "ORGA-022", chapitre: "acteurs-documents",
      q: "Le chargé d'exploitation électrique :", options: ["Est toujours un exécutant B1", "Assure l'exploitation de l'installation et la sécurité des opérations", "Peut autoriser l'accès aux locaux d'accès réservé"], bonnes: [1, 2],
      explication: "Le chargé d'exploitation gère l'installation : il en autorise l'accès, délivre instructions et autorisations, fait réaliser les consignations." },
    { id: "ORGA-023", chapitre: "acteurs-documents",
      q: "Qui réalise la consignation d'un ouvrage ?", options: ["L'exécutant B1", "Le chargé de chantier", "Le chargé de consignation"], bonnes: [2],
      explication: "La consignation est réalisée par un chargé de consignation (BC ou HC). Un exécutant ou un chargé de chantier ne consigne pas." },
    { id: "ORGA-024", chapitre: "acteurs-documents",
      q: "L'attestation de consignation est remise :", options: ["Par le chargé de consignation au chargé de travaux", "Par le chargé de travaux au chargé de consignation", "Par l'exécutant à l'employeur"], bonnes: [0],
      explication: "Une fois l'ouvrage consigné, le chargé de consignation remet l'attestation de consignation au chargé de travaux, qui peut alors faire commencer les travaux." },
    { id: "ORGA-025", chapitre: "acteurs-documents",
      q: "L'avis de fin de travail est rédigé par :", options: ["Le chargé de consignation", "Le chargé de travaux", "Le surveillant de sécurité électrique"], bonnes: [1],
      explication: "Le chargé de travaux rédige l'avis de fin de travail et le remet au chargé de consignation (ou au chargé d'exploitation), qui pourra déconsigner." },
    { id: "ORGA-026", chapitre: "acteurs-documents", situation: "L'avis de fin de travail vient d'être remis. Un exécutant s'aperçoit qu'il a oublié de resserrer une borne.",
      q: "Il peut retourner la resserrer :", options: ["Oui, rapidement", "Non, l'ouvrage peut être remis sous tension à tout moment"], bonnes: [1],
      explication: "Après l'avis de fin de travail, l'ouvrage n'est plus sous la responsabilité du chargé de travaux et peut être remis sous tension. Il faut prévenir et refaire une procédure." },
    { id: "ORGA-027", chapitre: "acteurs-documents",
      q: "L'exécutant B1 :", options: ["Travaille sous la direction d'un chargé de travaux", "Applique les consignes reçues", "Dirige lui-même le chantier"], bonnes: [0, 1],
      explication: "L'exécutant réalise les travaux d'ordre électrique sous la direction d'un chargé de travaux et applique ses consignes. Il ne dirige pas le chantier." },
    { id: "ORGA-028", chapitre: "acteurs-documents",
      q: "Le chargé de travaux :", options: ["Délivre l'attestation de consignation", "Assure la direction effective des travaux", "Prend les mesures de sécurité de son chantier"], bonnes: [1, 2],
      explication: "Le chargé de travaux dirige et sécurise son chantier. L'attestation de consignation, il la reçoit : c'est le chargé de consignation qui la délivre." },
    { id: "ORGA-029", chapitre: "acteurs-documents", situation: "Un électricien est désigné surveillant de sécurité électrique pour une équipe de peintres non habilités.",
      q: "Pendant la surveillance, il peut :", options: ["Effectuer en même temps un dépannage dans l'armoire voisine", "S'absenter quelques minutes", "Faire arrêter le travail s'il y a un danger"], bonnes: [2],
      explication: "La surveillance est permanente : le surveillant ne fait aucune autre tâche et ne s'absente pas. Il doit pouvoir faire arrêter le travail à tout moment." },
    { id: "ORGA-030", chapitre: "acteurs-documents",
      q: "Le chargé de chantier B0 :", options: ["Fait respecter les consignes de sécurité électrique à son équipe", "Peut consigner un tableau", "Dirige des travaux d'ordre non électrique"], bonnes: [0, 2],
      explication: "Le chargé de chantier dirige des travaux non électriques et veille à la sécurité de son équipe vis-à-vis du risque électrique. Il ne fait aucune opération électrique." },
    { id: "ORGA-031", chapitre: "acteurs-documents",
      q: "Les instructions de sécurité sont :", options: ["Des conseils facultatifs", "Des documents fixant les mesures de sécurité propres à une opération", "Délivrées par l'employeur ou le chargé d'exploitation"], bonnes: [1, 2],
      explication: "Les instructions de sécurité sont des documents écrits qui précisent les mesures à respecter pour une opération ou un lieu. Elles s'imposent à ceux qui les reçoivent." },
    { id: "ORGA-032", chapitre: "acteurs-documents",
      q: "L'autorisation de travail est délivrée par :", options: ["Le chargé d'exploitation électrique", "L'exécutant", "Le fabricant de l'appareil"], bonnes: [0],
      explication: "L'autorisation de travail est délivrée par le chargé d'exploitation électrique au chargé de travaux pour autoriser des travaux sur ou au voisinage d'un ouvrage." },
    { id: "ORGA-033", chapitre: "acteurs-documents",
      q: "Après réception de l'avis de fin de travail, qui déconsigne l'ouvrage ?", options: ["L'exécutant", "Le chargé de consignation", "N'importe quel salarié présent"], bonnes: [1],
      explication: "La déconsignation est réalisée par le chargé de consignation, après réception de l'avis de fin de travail. La remise sous tension relève du chargé d'exploitation." },
    { id: "ORGA-034", chapitre: "acteurs-documents",
      q: "Dans l'ordre, lors de travaux hors tension sur un ouvrage :", options: ["Avis de fin de travail, travaux, attestation de consignation", "Travaux, attestation de consignation, avis de fin de travail", "Attestation de consignation, travaux, avis de fin de travail"], bonnes: [2],
      explication: "L'attestation de consignation est remise avant les travaux ; l'avis de fin de travail est remis quand ils sont terminés et le personnel retiré." },
    { id: "ORGA-035", chapitre: "acteurs-documents",
      q: "Le chargé d'intervention élémentaire est habilité :", options: ["BS", "BR", "B2"], bonnes: [0],
      explication: "BS désigne le chargé d'intervention BT élémentaire (remplacements à l'identique, raccordement sur circuit en attente). BR désigne l'intervention BT générale." },
    { id: "ORGA-036", chapitre: "acteurs-documents",
      q: "Avant de remettre l'avis de fin de travail, le chargé de travaux s'assure que :", options: ["L'ouvrage est déjà remis sous tension", "Les outils et le matériel sont enlevés", "Les travaux sont terminés", "Le personnel est retiré de l'ouvrage"], bonnes: [1, 2, 3],
      explication: "L'avis de fin de travail atteste que les travaux sont finis, que le personnel et le matériel sont retirés. La remise sous tension vient après, à l'initiative du chargé d'exploitation." }
  );
})();

/* ───────────── Thème PREV — Prévention, équipements et matériels ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "prevention-equipements",
      theme: "PREV",
      parcours: ["tous"],
      titre: "Principes de prévention et équipements de protection",
      duree: 22,
      objectifs: [
        "Appliquer les principes généraux de prévention au risque électrique",
        "Savoir pourquoi le travail hors tension est la règle",
        "Connaître les équipements de protection collective : nappes, écrans, balisage, cadenas, VAT",
        "Connaître les équipements de protection individuelle et les classes de gants isolants",
        "Savoir vérifier et utiliser un vérificateur d'absence de tension"
      ],
      sections: [
        {
          titre: "Les principes généraux de prévention",
          contenu: `<p>Le Code du travail fixe neuf <strong>principes généraux de prévention</strong> que l'employeur doit appliquer. Les plus importants pour le risque électrique sont :</p>
<ol>
<li><strong>Éviter les risques</strong> : supprimer le danger, par exemple en travaillant hors tension.</li>
<li><strong>Évaluer les risques</strong> qui ne peuvent pas être évités.</li>
<li><strong>Combattre les risques à la source</strong> : isoler, protéger, éloigner les pièces nues.</li>
<li><strong>Remplacer ce qui est dangereux</strong> par ce qui l'est moins : matériel de classe II ou III, très basse tension de sécurité dans les lieux mouillés.</li>
<li><strong>Donner la priorité aux protections collectives</strong> sur les protections individuelles.</li>
<li><strong>Donner les instructions appropriées</strong> aux travailleurs : formation, habilitation, consignes.</li>
</ol>
<p>Appliquée à l'électricité, cette logique donne une règle simple : <strong>on travaille hors tension</strong>. Le travail sous tension est l'exception ; il demande une habilitation spécifique (lettre T) et des méthodes particulières.</p>
<p>Au voisinage de pièces nues sous tension, on cherche d'abord à <strong>supprimer le voisinage</strong> (mise hors tension), sinon à <strong>empêcher l'approche</strong> (obstacles, écrans, nappes isolantes), sinon à <strong>délimiter et surveiller</strong> (balisage, surveillant de sécurité électrique).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> d'abord supprimer le risque, ensuite protéger collectivement, enfin protéger individuellement. Les EPI ne sont qu'un complément.</div>`
        },
        {
          titre: "Les équipements de protection collective",
          contenu: `<p>Les équipements de protection collective protègent toutes les personnes présentes, sans action de leur part :</p>
<ul>
<li><strong>Les nappes isolantes</strong> : feuilles souples en matière isolante qu'on pose sur des pièces nues sous tension pour empêcher les contacts fortuits.</li>
<li><strong>Les écrans et protecteurs</strong> : plaques rigides isolantes qui séparent la zone de travail des pièces sous tension.</li>
<li><strong>Le balisage</strong> : chaînes, rubans ou barrières de couleur rouge et blanche qui délimitent la zone de travail ou la zone interdite. Un balisage <strong>ne se franchit pas</strong> et ne se déplace pas sans autorisation.</li>
<li><strong>Les dispositifs de condamnation</strong> : cadenas, serrures, verrous qui bloquent un appareil de séparation en position ouverte, accompagnés d'une <strong>pancarte</strong> indiquant l'interdiction de manœuvrer.</li>
<li><strong>Le vérificateur d'absence de tension (VAT)</strong> : il permet de s'assurer qu'un ouvrage est réellement hors tension.</li>
<li><strong>Les dispositifs de mise à la terre et en court-circuit</strong> (MALT-CC), utilisés lors des consignations quand ils sont exigés.</li>
<li><strong>Les tapis et tabourets isolants</strong>, qui isolent l'opérateur du sol lors de certaines manœuvres.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> avant que des peintres interviennent près d'un jeu de barres BT qui doit rester sous tension, l'électricien pose une nappe isolante sur les barres et un balisage rouge et blanc à distance. Les peintres travaillent hors de la zone balisée.</div>`
        },
        {
          titre: "Les équipements de protection individuelle",
          contenu: `<p>Les équipements de protection individuelle (EPI) protègent la personne qui les porte. Pour le risque électrique, les principaux sont :</p>
<ul>
<li><strong>Les gants isolants</strong> : ils protègent contre le contact avec des pièces sous tension. Ils sont choisis selon la tension.</li>
<li><strong>L'écran facial anti-UV</strong> (ou la visière) : il protège le visage et les yeux contre l'arc électrique et ses projections. Des lunettes ne suffisent pas en cas de risque d'arc.</li>
<li><strong>Le casque isolant</strong>, qui protège la tête des chocs et des contacts.</li>
<li><strong>Les vêtements de travail</strong> couvrant les bras et les jambes, <strong>non propagateurs de flamme</strong>, sans parties métalliques apparentes. Les tissus synthétiques qui fondent sont à éviter.</li>
<li><strong>Les chaussures ou bottes isolantes</strong> adaptées.</li>
</ul>
<table>
<thead><tr><th>Classe de gants isolants</th><th>Tension maximale d'utilisation (alternatif)</th><th>Couleur du marquage</th><th>Domaine d'emploi</th></tr></thead>
<tbody>
<tr><td>00</td><td>500 V</td><td>beige</td><td>BT</td></tr>
<tr><td>0</td><td>1 000 V</td><td>rouge</td><td>BT</td></tr>
<tr><td>1</td><td>7 500 V</td><td>blanc</td><td>HTA</td></tr>
<tr><td>2</td><td>17 000 V</td><td>jaune</td><td>HTA</td></tr>
<tr><td>3</td><td>26 500 V</td><td>vert</td><td>HTA</td></tr>
<tr><td>4</td><td>36 000 V</td><td>orange</td><td>HTA</td></tr>
</tbody>
</table>
<p>Avant <strong>chaque utilisation</strong>, les gants isolants sont <strong>contrôlés visuellement et par gonflage</strong> (on les remplit d'air pour détecter un trou ou une fissure). Ils sont rangés dans leur boîte, à l'abri de la lumière, de la chaleur et des objets coupants. Un gant douteux est mis au rebut.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> des gants de manutention en cuir ou des gants de ménage ne sont pas des gants isolants. Seuls les gants marqués avec une classe d'isolation protègent contre le contact électrique.</div>`
        },
        {
          titre: "Le vérificateur d'absence de tension (VAT)",
          contenu: `<p>La <strong>vérification d'absence de tension</strong> est l'étape qui permet de s'assurer qu'un ouvrage est réellement hors tension. Elle se fait avec un <strong>VAT</strong> conforme à sa norme, adapté à la tension de l'installation.</p>
<p>La règle d'utilisation est la suivante :</p>
<ol>
<li><strong>Vérifier le bon fonctionnement du VAT</strong> avant l'opération, sur une source de tension connue ou avec son dispositif d'essai.</li>
<li><strong>Vérifier l'absence de tension</strong> sur l'ouvrage, entre tous les conducteurs actifs (y compris le neutre) et entre chacun d'eux et la terre, au plus près du point de travail.</li>
<li><strong>Vérifier à nouveau le bon fonctionnement du VAT</strong> après l'opération.</li>
</ol>
<p>Cette double vérification garantit que le VAT n'est pas tombé en panne pendant la mesure : un VAT défectueux afficherait « absence de tension » sur une installation sous tension.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un multimètre ou un « tournevis testeur » ne remplace pas un VAT. Une erreur de calibre ou de branchement peut afficher 0 V alors que l'installation est sous tension.</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> VAT vérifié avant, VAT utilisé, VAT vérifié après. Sans VAT, l'installation est réputée sous tension.</div>`
        },
        {
          titre: "Les outils et le comportement",
          contenu: `<p>Les <strong>outils isolés ou isolants</strong> (tournevis, pinces, clés) portent un marquage spécifique, notamment l'indication de la tension (1 000 V) et un symbole en double triangle. Ils limitent le risque de contact et de court-circuit. Un outil dont l'isolant est fendu ne doit plus être utilisé.</p>
<p>Quelques règles de comportement sont aussi des mesures de prévention :</p>
<ul>
<li>retirer <strong>bagues, montres, chaînes</strong> et objets métalliques, qui peuvent provoquer un court-circuit ou une brûlure grave ;</li>
<li>ne jamais <strong>franchir un balisage</strong> ni retirer une nappe ou un écran posé par un électricien ;</li>
<li>ne jamais <strong>retirer un cadenas</strong> ou une pancarte de condamnation qu'on n'a pas posé ;</li>
<li>signaler immédiatement tout matériel endommagé : câble dénudé, prise cassée, armoire ouverte.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un agent remarque une pancarte « Ne pas manœuvrer – Travaux en cours » sur un disjoncteur cadenassé. Son atelier n'a plus de courant. Il ne touche à rien et prévient son responsable.</div>`
        }
      ],
      points_cles: [
        "Principe de base : éviter le risque, donc travailler hors tension.",
        "Les protections collectives passent avant les protections individuelles.",
        "Nappes isolantes, écrans, balisage, cadenas, VAT et MALT-CC sont des protections collectives.",
        "EPI : gants isolants, écran facial anti-UV, casque, vêtements non propagateurs de flamme, chaussures adaptées.",
        "Gants : classe 00 (500 V) et 0 (1 000 V) en BT ; classes 1 à 4 pour la HTA.",
        "Les gants isolants se contrôlent par gonflage avant chaque utilisation.",
        "VAT : vérifier son fonctionnement avant et après la vérification d'absence de tension.",
        "Un multimètre ne remplace pas un VAT ; un balisage ne se franchit pas."
      ]
    },
    {
      id: "materiels-signalisation",
      theme: "PREV",
      parcours: ["tous"],
      titre: "Matériel électrique, classes, indices IP et IK, signalisation",
      duree: 20,
      objectifs: [
        "Utiliser en sécurité le matériel électroportatif",
        "Reconnaître les classes de matériel I, II et III",
        "Lire un indice de protection IP et un indice IK",
        "Reconnaître la signalisation du risque électrique et les couleurs de sécurité"
      ],
      sections: [
        {
          titre: "Le matériel électroportatif",
          contenu: `<p>Perceuses, meuleuses, rallonges, baladeuses, enrouleurs : le matériel électroportatif est à l'origine de nombreux accidents. Il est manipulé, déplacé, soumis aux chocs et à l'humidité.</p>
<p>Avant chaque utilisation, on vérifie :</p>
<ul>
<li>l'état du <strong>câble</strong> (pas de coupure, d'écrasement, de conducteur apparent) ;</li>
<li>l'état de la <strong>fiche</strong> et de la <strong>prise</strong> (pas de fêlure, de trace de brûlure) ;</li>
<li>l'état de l'<strong>enveloppe</strong> de l'appareil ;</li>
<li>l'adéquation du matériel au <strong>lieu</strong> (humide, mouillé, exigu, conducteur).</li>
</ul>
<p>À l'utilisation :</p>
<ul>
<li>on <strong>débranche en tirant sur la fiche</strong>, jamais sur le câble ;</li>
<li>on <strong>déroule entièrement un enrouleur</strong> avant de l'utiliser à forte puissance, pour éviter son échauffement ;</li>
<li>on ne répare jamais soi-même un câble avec du ruban adhésif : le matériel endommagé est <strong>retiré du service</strong> et signalé ;</li>
<li>on branche le matériel sur une prise protégée par un <strong>dispositif différentiel 30 mA</strong>.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> une rallonge dont la gaine est abîmée expose à un contact direct. Elle doit être retirée immédiatement, même si « elle marche encore ».</div>`
        },
        {
          titre: "Les classes de matériel",
          contenu: `<p>La <strong>classe</strong> d'un matériel indique comment il protège l'utilisateur contre les contacts indirects (en cas de défaut d'isolement interne).</p>
<table>
<thead><tr><th>Classe</th><th>Principe de protection</th><th>Symbole et raccordement</th></tr></thead>
<tbody>
<tr><td><strong>Classe 0</strong></td><td>Isolation principale seule, sans liaison à la terre</td><td>Pas de symbole ; à proscrire</td></tr>
<tr><td><strong>Classe I</strong></td><td>Isolation principale et <strong>masse reliée à la terre</strong> par le conducteur de protection</td><td>Symbole de terre sur la borne ; fiche à broche ou contact de terre ; à brancher sur une prise avec terre</td></tr>
<tr><td><strong>Classe II</strong></td><td><strong>Double isolation</strong> ou isolation renforcée, pas de liaison à la terre</td><td>Deux carrés concentriques</td></tr>
<tr><td><strong>Classe III</strong></td><td>Alimentation en <strong>très basse tension de sécurité</strong> (TBTS) par un transformateur de sécurité</td><td>Losange contenant le chiffre III</td></tr>
</tbody>
</table>
<p>Le matériel de <strong>classe I</strong> n'est sûr que si la prise est bien reliée à la terre et si l'installation comporte un dispositif différentiel. Un adaptateur qui supprime la terre le rend dangereux.</p>
<p>Dans les lieux <strong>mouillés</strong> ou très conducteurs (cuves, chaudières, enceintes métalliques), on utilise de préférence du matériel de <strong>classe III</strong>, alimenté en TBTS par un transformateur de sécurité placé à l'extérieur de l'enceinte.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un appareil de classe II n'a pas besoin d'être relié à la terre. Son symbole est le double carré, pas le symbole de terre.</div>`
        },
        {
          titre: "Les indices de protection IP et IK",
          contenu: `<p>L'<strong>indice IP</strong> indique le degré de protection d'une enveloppe (boîtier, armoire, luminaire) contre la pénétration des corps solides et de l'eau. Il comporte deux chiffres :</p>
<table>
<thead><tr><th>Chiffre</th><th>1er chiffre : corps solides et contacts</th><th>2e chiffre : eau</th></tr></thead>
<tbody>
<tr><td>0</td><td>Pas de protection</td><td>Pas de protection</td></tr>
<tr><td>1</td><td>Corps de plus de 50 mm (dos de la main)</td><td>Chutes verticales de gouttes</td></tr>
<tr><td>2</td><td>Corps de plus de 12,5 mm (doigt)</td><td>Gouttes jusqu'à 15° de la verticale</td></tr>
<tr><td>3</td><td>Corps de plus de 2,5 mm (outil)</td><td>Pluie</td></tr>
<tr><td>4</td><td>Corps de plus de 1 mm (fil)</td><td>Projections d'eau de toutes directions</td></tr>
<tr><td>5</td><td>Protégé contre la poussière</td><td>Jets d'eau</td></tr>
<tr><td>6</td><td>Étanche à la poussière</td><td>Jets puissants</td></tr>
<tr><td>7</td><td>—</td><td>Immersion temporaire</td></tr>
<tr><td>8</td><td>—</td><td>Immersion prolongée</td></tr>
</tbody>
</table>
<p>Une enveloppe <strong>IP2X</strong> (ou <strong>IPXXB</strong>, la lettre B désignant le doigt) empêche de toucher une partie active avec le doigt : c'est le niveau minimal pour considérer qu'il n'y a pas de pièce nue accessible. Le X remplace un chiffre non précisé.</p>
<p>L'<strong>indice IK</strong> indique la résistance aux <strong>chocs mécaniques</strong>, de IK00 (aucune protection) à <strong>IK10</strong> (protection contre un choc de 20 joules, la plus élevée).</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un luminaire IP65 IK08 est étanche à la poussière (6), protégé contre les jets d'eau (5) et résistant à des chocs importants (08).</div>`
        },
        {
          titre: "La signalisation",
          contenu: `<p>Le risque électrique est signalé par un <strong>panneau triangulaire à fond jaune, bordure noire et éclair noir</strong>. On le trouve sur les portes des locaux électriques, les armoires, les transformateurs, les clôtures de postes.</p>
<p>Les <strong>couleurs de sécurité</strong> ont une signification fixe :</p>
<table>
<thead><tr><th>Couleur</th><th>Signification</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Rouge</td><td>Interdiction, arrêt, matériel d'incendie</td><td>Panneau « Défense d'entrer », bouton d'arrêt d'urgence</td></tr>
<tr><td>Jaune</td><td>Avertissement, danger</td><td>Panneau triangulaire de danger électrique</td></tr>
<tr><td>Bleu</td><td>Obligation</td><td>Port des gants isolants obligatoire</td></tr>
<tr><td>Vert</td><td>Sauvetage, secours, situation sûre</td><td>Issue de secours, poste de premiers secours</td></tr>
</tbody>
</table>
<p>Le <strong>balisage</strong> des zones de travail utilise des chaînes, rubans ou barrières <strong>rouge et blanc</strong>. Les <strong>pancartes de condamnation</strong> posées sur les appareils de séparation interdisent de les manœuvrer.</p>
<p>Enfin, les conducteurs ont des couleurs normalisées : le <strong>vert-jaune</strong> est réservé au <strong>conducteur de protection</strong> (terre) ; le <strong>bleu clair</strong> au <strong>neutre</strong>.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> triangle jaune à éclair noir = danger électrique. Vert-jaune = conducteur de protection, jamais utilisé pour autre chose.</div>`
        },
        {
          titre: "Rallonges, multiprises et lieux particuliers",
          contenu: `<p>Les rallonges et les multiprises sont des sources fréquentes d'échauffement et d'incendie :</p>
<ul>
<li>on ne branche <strong>pas plusieurs multiprises en cascade</strong> les unes sur les autres ;</li>
<li>on respecte la <strong>puissance maximale</strong> indiquée sur la multiprise ou l'enrouleur ;</li>
<li>on n'utilise pas de rallonge <strong>en installation permanente</strong> : un besoin durable justifie une prise supplémentaire posée par un électricien ;</li>
<li>on fait passer les câbles <strong>hors des zones de passage</strong> des engins et des personnes, ou on les protège contre l'écrasement ;</li>
<li>on utilise à l'extérieur et sur les chantiers du matériel prévu pour cet usage, avec un indice IP adapté à la pluie et aux projections.</li>
</ul>
<p>Certains lieux exigent un matériel particulier : locaux mouillés, chantiers extérieurs, enceintes conductrices exiguës (cuves, gaines métalliques), atmosphères explosives. Dans ces lieux, le choix de la classe du matériel et de son indice IP n'est pas laissé au hasard : on suit les consignes de l'employeur.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> sur un chantier extérieur, un ouvrier branche une rallonge d'intérieur dans une flaque. Le différentiel 30 mA déclenche. Le bon réflexe : utiliser un prolongateur de chantier adapté et surélever les connexions, pas réarmer en boucle.</div>`
        }
      ],
      points_cles: [
        "Avant usage, vérifier câble, fiche, prise et enveloppe du matériel portatif.",
        "Débrancher par la fiche, dérouler entièrement un enrouleur, retirer le matériel abîmé.",
        "Classe I : masse reliée à la terre ; classe II : double isolation (double carré) ; classe III : TBTS (losange III).",
        "En lieu mouillé ou conducteur, préférer la classe III.",
        "IP : 1er chiffre corps solides, 2e chiffre eau ; IP2X ou IPXXB : protégé contre le contact du doigt.",
        "IK : résistance aux chocs, jusqu'à IK10 (20 joules).",
        "Danger électrique : triangle jaune à éclair noir ; balisage rouge et blanc.",
        "Vert-jaune = conducteur de protection ; bleu clair = neutre."
      ]
    }
  );

  P.questions.push(
    { id: "PREV-001", chapitre: "prevention-equipements",
      q: "Le premier principe de prévention face au risque électrique est de :", options: ["Porter des gants isolants", "Supprimer le risque en travaillant hors tension", "Travailler vite"], bonnes: [1],
      explication: "Le premier principe est d'éviter le risque. En électricité, cela signifie travailler hors tension. Les EPI ne viennent qu'en complément." },
    { id: "PREV-002", chapitre: "prevention-equipements",
      q: "Selon les principes de prévention, on donne la priorité :", options: ["Aux protections collectives", "Aux protections individuelles"], bonnes: [0],
      explication: "Les protections collectives (nappes, écrans, balisage…) protègent tout le monde sans dépendre du comportement de chacun. Elles passent avant les EPI." },
    { id: "PREV-003", chapitre: "prevention-equipements",
      q: "Lesquels sont des équipements de protection collective ?", options: ["Un balisage", "Un écran isolant", "Des gants isolants", "Une nappe isolante"], bonnes: [0, 1, 3],
      explication: "Nappes, écrans et balisage protègent collectivement. Les gants isolants sont un équipement de protection individuelle." },
    { id: "PREV-004", chapitre: "prevention-equipements", situation: "Un électricien a posé une nappe isolante sur des bornes sous tension près de votre zone de travail. Elle vous gêne pour peindre.",
      q: "Vous pouvez la retirer :", options: ["Oui, le temps de peindre", "Non, vous demandez à l'électricien ou à votre chargé de chantier"], bonnes: [1],
      explication: "Une protection posée par un électricien ne se retire pas. Elle empêche le contact avec des pièces sous tension. Seule la personne habilitée qui l'a posée peut la déplacer." },
    { id: "PREV-005", chapitre: "prevention-equipements", situation: "Une zone de travail est délimitée par une chaîne rouge et blanche. Votre outil est tombé de l'autre côté.",
      q: "Vous :", options: ["Enjambez la chaîne pour le récupérer", "Ne franchissez pas le balisage et prévenez le responsable"], bonnes: [1],
      explication: "Un balisage ne se franchit pas. Il signale une zone où le risque électrique est présent : demandez au responsable qui fera récupérer l'outil en sécurité." },
    { id: "PREV-006", chapitre: "prevention-equipements",
      q: "Des gants isolants de classe 0 peuvent être utilisés jusqu'à :", options: ["500 V", "1 000 V", "7 500 V"], bonnes: [1],
      explication: "La classe 0 correspond à une tension maximale d'utilisation de 1 000 V en alternatif : elle couvre la basse tension. La classe 00 est limitée à 500 V." },
    { id: "PREV-007", chapitre: "prevention-equipements",
      q: "Quelles classes de gants isolants sont destinées à la basse tension ?", options: ["Classe 00", "Classe 0", "Classe 4", "Classe 2"], bonnes: [0, 1],
      explication: "Les classes 00 (500 V) et 0 (1 000 V) couvrent la BT. Les classes 1 à 4 sont destinées à la haute tension." },
    { id: "PREV-008", chapitre: "prevention-equipements",
      q: "Avant chaque utilisation, les gants isolants doivent être :", options: ["Contrôlés par gonflage", "Contrôlés visuellement", "Lavés à l'eau chaude"], bonnes: [0, 1],
      explication: "On vérifie visuellement l'état des gants et on les gonfle d'air pour détecter un trou ou une fissure. Un gant douteux est mis au rebut." },
    { id: "PREV-009", chapitre: "prevention-equipements", situation: "En gonflant vos gants isolants, vous entendez un léger sifflement d'air.",
      q: "Vous :", options: ["Les utilisez quand même", "Ne les utilisez pas et les signalez"], bonnes: [1],
      explication: "Un sifflement indique une perforation : le gant ne protège plus. Il ne doit pas être utilisé et doit être remplacé." },
    { id: "PREV-010", chapitre: "prevention-equipements",
      q: "Des gants de manutention en cuir :", options: ["Ne sont pas des gants isolants", "Protègent contre le contact électrique"], bonnes: [0],
      explication: "Seuls les gants marqués d'une classe d'isolation protègent contre le contact électrique. Des gants de cuir ou de ménage n'offrent pas cette protection." },
    { id: "PREV-011", chapitre: "prevention-equipements",
      q: "Contre les effets de l'arc électrique sur le visage, on porte :", options: ["Des lunettes de soleil", "Un écran facial anti-UV", "Une casquette"], bonnes: [1],
      explication: "L'écran facial anti-UV protège le visage et les yeux contre le rayonnement et les projections de l'arc." },
    { id: "PREV-012", chapitre: "prevention-equipements",
      q: "Les vêtements de travail adaptés au risque électrique sont :", options: ["Non propagateurs de flamme", "Sans parties métalliques apparentes", "Couvrants (bras et jambes)", "En matière synthétique qui fond facilement"], bonnes: [0, 1, 2],
      explication: "En cas d'arc, un vêtement synthétique fond et colle à la peau. On porte des vêtements couvrants, non propagateurs de flamme, sans métal apparent." },
    { id: "PREV-013", chapitre: "prevention-equipements",
      q: "Pour vérifier l'absence de tension, on utilise :", options: ["Un multimètre", "Un tournevis testeur", "Un vérificateur d'absence de tension (VAT)"], bonnes: [2],
      explication: "Seul un VAT conforme, adapté à la tension, est admis. Un multimètre peut être mal réglé ou mal branché et afficher 0 V sur un circuit sous tension." },
    { id: "PREV-014", chapitre: "prevention-equipements",
      q: "Le bon fonctionnement du VAT doit être vérifié :", options: ["Une fois par an seulement", "Avant la vérification d'absence de tension", "Après la vérification d'absence de tension"], bonnes: [1, 2],
      explication: "On vérifie le VAT avant et après la mesure, pour être sûr qu'il n'est pas tombé en panne pendant l'opération." },
    { id: "PREV-015", chapitre: "prevention-equipements",
      q: "Les cadenas et pancartes posés sur un appareil de séparation servent à :", options: ["Empêcher sa manœuvre", "Décorer le tableau", "Signaler qu'il ne doit pas être manœuvré"], bonnes: [0, 2],
      explication: "La condamnation bloque l'appareil en position ouverte et la pancarte l'indique : personne ne doit remettre sous tension." },
    { id: "PREV-016", chapitre: "prevention-equipements", situation: "Votre atelier est privé de courant. Le disjoncteur général porte un cadenas et une pancarte « Ne pas manœuvrer – Travaux en cours ».",
      q: "Vous :", options: ["Coupez le cadenas pour rétablir le courant", "Ne touchez à rien et prévenez votre responsable"], bonnes: [1],
      explication: "Le cadenas protège quelqu'un qui travaille sur l'installation. Le retirer pourrait l'électrocuter. Seule la personne qui l'a posé peut le retirer." },
    { id: "PREV-017", chapitre: "prevention-equipements",
      q: "Avant une opération dans une armoire électrique, il faut retirer :", options: ["Ses lunettes de vue", "Ses bagues", "Sa montre métallique"], bonnes: [1, 2],
      explication: "Les bijoux et objets métalliques peuvent créer un court-circuit ou une brûlure grave. Les lunettes de vue ne sont pas en cause." },
    { id: "PREV-018", chapitre: "materiels-signalisation", situation: "En prenant une rallonge au magasin, vous constatez que sa gaine est coupée et qu'on voit les conducteurs.",
      q: "Vous :", options: ["La retirez du service et la signalez", "L'entourez de ruban adhésif et l'utilisez"], bonnes: [0],
      explication: "Un câble endommagé expose à un contact direct. Il est retiré du service et signalé ; on ne le répare pas soi-même avec du ruban adhésif." },
    { id: "PREV-019", chapitre: "materiels-signalisation",
      q: "Pour débrancher un appareil, on tire :", options: ["Sur le câble", "Sur la fiche"], bonnes: [1],
      explication: "Tirer sur le câble abîme les connexions dans la fiche et peut mettre un conducteur à nu. On tire toujours sur la fiche." },
    { id: "PREV-020", chapitre: "materiels-signalisation", situation: "Vous branchez un radiateur de chantier puissant sur un enrouleur.",
      q: "Vous devez :", options: ["Dérouler entièrement l'enrouleur", "Laisser le câble enroulé pour gagner de la place"], bonnes: [0],
      explication: "Un câble enroulé s'échauffe sous forte charge et peut fondre ou prendre feu. On déroule entièrement l'enrouleur." },
    { id: "PREV-021", chapitre: "materiels-signalisation",
      q: "Un appareil de classe II :", options: ["Possède une double isolation", "Doit obligatoirement être relié à la terre", "Porte le symbole de deux carrés concentriques"], bonnes: [0, 2],
      explication: "La classe II repose sur une double isolation (ou isolation renforcée) : pas de liaison à la terre. Son symbole est le double carré." },
    { id: "PREV-022", chapitre: "materiels-signalisation",
      q: "Un appareil de classe I est protégé contre les contacts indirects par :", options: ["Une double isolation", "La liaison de sa masse à la terre", "Une alimentation en très basse tension"], bonnes: [1],
      explication: "La classe I a une isolation principale et une masse reliée à la terre par le conducteur de protection. Elle doit être branchée sur une prise avec terre." },
    { id: "PREV-023", chapitre: "materiels-signalisation",
      q: "Un appareil de classe III est alimenté :", options: ["En très basse tension de sécurité", "Directement en 400 V"], bonnes: [0],
      explication: "La classe III est alimentée en TBTS par un transformateur de sécurité. Son symbole est un losange contenant le chiffre III." },
    { id: "PREV-024", chapitre: "materiels-signalisation", situation: "Vous devez nettoyer l'intérieur d'une cuve métallique humide et avez besoin d'un éclairage portatif.",
      q: "Le matériel le plus adapté est :", options: ["Une baladeuse 230 V de classe I", "Une baladeuse de classe III alimentée par un transformateur de sécurité placé hors de la cuve"], bonnes: [1],
      explication: "En enceinte conductrice et humide, la résistance du corps est très faible. On utilise du matériel en TBTS (classe III), le transformateur restant à l'extérieur." },
    { id: "PREV-025", chapitre: "materiels-signalisation",
      q: "Dans l'indice IP, le premier chiffre indique la protection contre :", options: ["L'eau", "Les corps solides et l'accès aux parties dangereuses", "Les chocs mécaniques"], bonnes: [1],
      explication: "Le premier chiffre concerne les corps solides (doigt, outil, poussière), le second l'eau. Les chocs mécaniques relèvent de l'indice IK." },
    { id: "PREV-026", chapitre: "materiels-signalisation",
      q: "Une enveloppe IP2X ou IPXXB :", options: ["Est étanche à l'immersion", "Empêche de toucher les parties actives avec le doigt"], bonnes: [1],
      explication: "Le chiffre 2 (ou la lettre B) correspond à une protection contre l'accès du doigt. C'est le minimum pour considérer qu'il n'y a pas de pièce nue accessible." },
    { id: "PREV-027", chapitre: "materiels-signalisation",
      q: "L'indice IK indique :", options: ["La résistance aux chocs mécaniques", "La protection contre l'eau", "La classe d'isolation"], bonnes: [0],
      explication: "L'indice IK va de IK00 à IK10 et mesure la résistance d'une enveloppe aux chocs. IK10 correspond à un choc de 20 joules." },
    { id: "PREV-028", chapitre: "materiels-signalisation", situation: "Sur un luminaire extérieur, vous lisez IP65.",
      q: "Le chiffre 5 indique une protection contre :", options: ["La poussière", "Les jets d'eau", "Les chocs"], bonnes: [1],
      explication: "Le second chiffre concerne l'eau : 5 = jets d'eau. Le premier chiffre (6) indique l'étanchéité à la poussière." },
    { id: "PREV-029", chapitre: "materiels-signalisation",
      q: "Le panneau signalant le risque électrique est :", options: ["Un rond bleu avec un éclair blanc", "Un carré vert", "Un triangle jaune à bordure noire avec un éclair noir"], bonnes: [2],
      explication: "Le danger électrique est signalé par un triangle d'avertissement jaune, bordé de noir, avec un éclair noir." },
    { id: "PREV-030", chapitre: "materiels-signalisation",
      q: "Le conducteur de couleur vert-jaune est :", options: ["Le conducteur de protection (terre)", "Le neutre", "Une phase"], bonnes: [0],
      explication: "Le vert-jaune est exclusivement réservé au conducteur de protection. Le neutre est bleu clair." },
    { id: "PREV-031", chapitre: "materiels-signalisation",
      q: "En signalisation de sécurité, la couleur bleue indique :", options: ["Une interdiction", "Une obligation", "Un danger"], bonnes: [1],
      explication: "Bleu = obligation (par exemple port des gants obligatoire). Rouge = interdiction, jaune = avertissement, vert = secours." },
    { id: "PREV-032", chapitre: "materiels-signalisation", situation: "Un collègue utilise un adaptateur qui supprime la broche de terre pour brancher une perceuse de classe I.",
      q: "Cette pratique :", options: ["Est sans conséquence", "Supprime la protection contre les contacts indirects"], bonnes: [1],
      explication: "La sécurité d'un appareil de classe I repose sur la liaison de sa masse à la terre. Sans terre, un défaut d'isolement met la carcasse sous tension sans déclencher de protection." },
    { id: "PREV-033", chapitre: "materiels-signalisation",
      q: "Quelles pratiques sont dangereuses avec les multiprises et rallonges ?", options: ["Débrancher en tenant la fiche", "Utiliser une rallonge enroulée sous forte charge", "Dépasser la puissance indiquée", "Brancher plusieurs multiprises en cascade"], bonnes: [1, 2, 3],
      explication: "Les cascades, les surcharges et les enrouleurs non déroulés provoquent des échauffements et des incendies. Débrancher par la fiche est au contraire la bonne pratique." }
  );
})();

/* ───────────── Thème ACCID — Accident et incendie d'origine électrique ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "accident-incendie",
      theme: "ACCID",
      parcours: ["tous"],
      titre: "Conduite à tenir en cas d'accident ou d'incendie d'origine électrique",
      duree: 22,
      objectifs: [
        "Appliquer la règle protéger, alerter, secourir à un accident électrique",
        "Savoir mettre hors tension sans devenir soi-même victime",
        "Connaître les numéros d'urgence et le contenu d'un message d'alerte",
        "Connaître les gestes de secours adaptés à une victime électrisée",
        "Choisir le bon extincteur pour un feu d'origine électrique"
      ],
      sections: [
        {
          titre: "Protéger : ne pas devenir la deuxième victime",
          contenu: `<p>Face à une personne électrisée, le premier réflexe est souvent de lui saisir le bras pour la dégager. C'est le geste le plus dangereux : tant que la victime est en contact avec la source, elle est <strong>sous tension</strong>, et le sauveteur qui la touche est électrisé à son tour.</p>
<p>La protection consiste donc à :</p>
<ol>
<li><strong>Ne pas toucher la victime</strong> tant qu'elle est en contact avec l'installation.</li>
<li><strong>Faire couper le courant</strong> : bouton d'arrêt d'urgence, disjoncteur, interrupteur général, ou débrancher la fiche s'il s'agit d'un appareil portatif.</li>
<li><strong>Empêcher la remise sous tension</strong> (rester devant l'appareil coupé, prévenir les autres).</li>
<li><strong>Baliser</strong> et éloigner les témoins, en particulier en cas de câble au sol.</li>
</ol>
<p>Si la coupure est impossible en basse tension, seule une personne formée et équipée (gants isolants, perche isolante) peut tenter de dégager la victime sans la toucher directement.</p>
<p>En <strong>haute tension</strong>, on ne s'approche <strong>jamais</strong> : l'amorçage peut se produire à distance. On reste éloigné, on empêche quiconque d'approcher et on fait couper l'installation par l'exploitant (en appelant les secours et le gestionnaire du réseau).</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> si une ligne est tombée au sol, le sol autour peut être sous tension. On ne s'approche pas et on fait éloigner tout le monde. Si une ligne touche un véhicule, ses occupants restent à l'intérieur, sauf en cas d'incendie.</div>`
        },
        {
          titre: "Alerter",
          contenu: `<p>Une fois la zone protégée, on alerte (ou on fait alerter par un témoin) les secours :</p>
<table>
<thead><tr><th>Numéro</th><th>Service</th></tr></thead>
<tbody>
<tr><td><strong>15</strong></td><td>SAMU : urgence médicale</td></tr>
<tr><td><strong>18</strong></td><td>Sapeurs-pompiers : secours, incendie</td></tr>
<tr><td><strong>112</strong></td><td>Numéro d'urgence européen, joignable depuis tout téléphone</td></tr>
<tr><td><strong>114</strong></td><td>Numéro d'urgence par SMS pour les personnes sourdes ou malentendantes</td></tr>
</tbody>
</table>
<p>Le message d'alerte précise :</p>
<ul>
<li>le <strong>lieu exact</strong> de l'accident (adresse, bâtiment, accès) ;</li>
<li>la <strong>nature</strong> de l'accident : <strong>électrique</strong>, basse ou haute tension, coupé ou non ;</li>
<li>le <strong>nombre de victimes</strong> et leur état (consciente, respire, brûlée) ;</li>
<li>les <strong>gestes déjà faits</strong>.</li>
</ul>
<p>On ne raccroche que lorsque l'interlocuteur le demande. On prévient aussi le sauveteur secouriste du travail, la hiérarchie et le chargé d'exploitation de l'installation, et on envoie quelqu'un accueillir les secours.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 15 SAMU, 18 pompiers, 112 numéro européen. Préciser qu'il s'agit d'un accident électrique change l'intervention des secours.</div>`
        },
        {
          titre: "Secourir",
          contenu: `<p>Quand la victime n'est plus sous tension, on peut lui porter secours en appliquant les gestes appris en formation de secourisme :</p>
<ul>
<li>la victime <strong>ne répond pas et ne respire pas</strong> : on commence immédiatement la <strong>réanimation cardio-pulmonaire</strong> (compressions thoraciques) et on fait chercher un <strong>défibrillateur automatisé externe</strong> (DAE), qui traite la fibrillation ventriculaire ;</li>
<li>la victime <strong>ne répond pas mais respire</strong> : on la place en <strong>position latérale de sécurité</strong> et on surveille sa respiration ;</li>
<li>la victime présente des <strong>brûlures</strong> : on les refroidit à l'eau tempérée, sans retirer les vêtements collés à la peau ;</li>
<li>la victime est <strong>consciente</strong> : on l'installe au repos, on la rassure, on la surveille jusqu'à l'arrivée des secours.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une victime qui se relève et dit « ça va » n'est pas tirée d'affaire. Les troubles du rythme cardiaque et les brûlures internes peuvent apparaître plus tard : un avis médical est toujours nécessaire.</div>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un technicien est retrouvé inanimé devant une armoire ouverte. Vous ne le touchez pas, vous coupez l'interrupteur général de l'armoire, vous faites appeler le 15 et chercher le DAE, puis vous vérifiez s'il respire avant de commencer les gestes de secours.</div>`
        },
        {
          titre: "L'incendie d'origine électrique",
          contenu: `<p>Un incendie d'origine électrique peut être provoqué par une <strong>surcharge</strong> (trop d'appareils sur une prise, câble sous-dimensionné), un <strong>court-circuit</strong>, une <strong>connexion desserrée</strong> qui chauffe, un <strong>arc électrique</strong> ou un appareil défectueux.</p>
<p>Conduite à tenir :</p>
<ol>
<li><strong>Couper le courant</strong> si c'est possible sans danger.</li>
<li><strong>Donner l'alerte</strong> (18 ou 112, consignes internes de l'établissement).</li>
<li><strong>Attaquer le feu</strong> avec un extincteur adapté, si le feu est naissant et qu'on est formé, en gardant une issue derrière soi.</li>
<li><strong>Évacuer</strong> si le feu ne peut pas être maîtrisé ou si la fumée envahit le local.</li>
</ol>
<table>
<thead><tr><th>Agent extincteur</th><th>Sur une installation électrique sous tension</th><th>Remarque</th></tr></thead>
<tbody>
<tr><td><strong>Dioxyde de carbone (CO2)</strong></td><td>Adapté</td><td>Ne laisse pas de résidu ; idéal pour armoires et tableaux ; ne pas toucher le diffuseur (brûlure par le froid) ; aérer le local après usage</td></tr>
<tr><td><strong>Poudre (ABC ou BC)</strong></td><td>Adaptée</td><td>Efficace, mais laisse un dépôt qui peut abîmer les équipements</td></tr>
<tr><td><strong>Eau en jet</strong></td><td><strong>Interdite</strong></td><td>L'eau conduit le courant : risque d'électrisation de l'utilisateur</td></tr>
<tr><td>Eau pulvérisée avec additif</td><td>Seulement si l'extincteur porte la mention d'utilisation sur feux d'origine électrique</td><td>Respecter la tension et la distance indiquées sur l'étiquette</td></tr>
</tbody>
</table>
<div class="encart" data-type="danger"><strong>Attention :</strong> on ne projette jamais d'eau en jet sur une installation sous tension. Et on lit toujours l'étiquette de l'extincteur avant de l'utiliser.</div>`
        },
        {
          titre: "Utiliser un extincteur",
          contenu: `<p>Les extincteurs portent sur leur étiquette les <strong>classes de feux</strong> pour lesquelles ils sont efficaces :</p>
<table>
<thead><tr><th>Classe</th><th>Nature du feu</th></tr></thead>
<tbody>
<tr><td>A</td><td>Solides (bois, papier, carton, tissu)</td></tr>
<tr><td>B</td><td>Liquides ou solides liquéfiables (essence, huile, plastiques fondus)</td></tr>
<tr><td>C</td><td>Gaz</td></tr>
<tr><td>D</td><td>Métaux</td></tr>
<tr><td>F</td><td>Huiles et graisses de cuisson</td></tr>
</tbody>
</table>
<p>Il n'existe plus de classe dédiée au feu électrique : on vérifie sur l'étiquette la mention d'utilisation sur des feux d'origine électrique, avec la tension maximale et la distance à respecter.</p>
<p>Pour utiliser un extincteur sur un feu naissant :</p>
<ol>
<li>faire couper l'alimentation électrique si possible ;</li>
<li>dégoupiller et faire un essai de percussion en dirigeant l'extincteur vers le sol ;</li>
<li>s'approcher en gardant une <strong>issue derrière soi</strong>, à la distance indiquée ;</li>
<li>viser la <strong>base des flammes</strong>, par balayage ;</li>
<li>ne pas tourner le dos au feu éteint : surveiller la reprise.</li>
</ol>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> feu d'origine électrique : CO2 ou poudre, ou extincteur portant la mention d'utilisation sur les feux électriques. On attaque à la base des flammes avec une issue dans le dos.</div>`
        }
      ],
      points_cles: [
        "Protéger, alerter, secourir : dans cet ordre.",
        "Ne jamais toucher une victime encore en contact avec l'installation.",
        "Couper le courant (arrêt d'urgence, disjoncteur, débranchement) et empêcher la remise sous tension.",
        "En haute tension, ne jamais approcher : faire couper par l'exploitant.",
        "Numéros : 15 SAMU, 18 pompiers, 112 européen, 114 par SMS.",
        "Victime qui ne respire pas : RCP et défibrillateur ; qui respire : position latérale de sécurité.",
        "Toute victime électrisée doit voir un médecin.",
        "Feu électrique : couper le courant, extincteur CO2 ou poudre, jamais d'eau en jet sous tension."
      ]
    }
  );

  P.questions.push(
    { id: "ACCID-001", chapitre: "accident-incendie", situation: "Un collègue est agrippé à une perceuse dont le câble est endommagé. Il tremble et ne lâche pas l'outil.",
      q: "Votre premier geste est de :", options: ["Couper le courant ou débrancher la fiche", "Le tirer par le bras", "Lui jeter un seau d'eau"], bonnes: [0],
      explication: "Toucher la victime encore sous tension vous électriserait. On coupe d'abord le courant (fiche, disjoncteur, arrêt d'urgence). L'eau conduit le courant." },
    { id: "ACCID-002", chapitre: "accident-incendie",
      q: "Dans l'ordre, face à un accident électrique, on doit :", options: ["Secourir, alerter, protéger", "Protéger, alerter, secourir", "Alerter, secourir, protéger"], bonnes: [1],
      explication: "On protège d'abord (mise hors tension, balisage) pour éviter un sur-accident, puis on alerte les secours, puis on porte secours à la victime." },
    { id: "ACCID-003", chapitre: "accident-incendie",
      q: "Tant que la victime est en contact avec l'installation sous tension :", options: ["On ne la touche pas", "On peut la toucher avec des chaussures de sécurité"], bonnes: [0],
      explication: "La victime est elle-même sous tension. Des chaussures de sécurité ne garantissent pas l'isolement : on coupe d'abord le courant." },
    { id: "ACCID-004", chapitre: "accident-incendie", situation: "Un ouvrier est électrisé près d'un poste haute tension. Il est étendu à proximité des équipements.",
      domaine: "HT",
      q: "Vous :", options: ["Vous approchez pour le tirer en arrière", "Alertez les secours", "Restez à distance et faites couper l'installation par l'exploitant"], bonnes: [1, 2],
      explication: "En haute tension, un amorçage peut se produire à distance : on ne s'approche jamais. On alerte et on fait mettre l'installation hors tension par l'exploitant." },
    { id: "ACCID-005", chapitre: "accident-incendie",
      q: "Le numéro du SAMU est le :", options: ["15", "17", "18"], bonnes: [0],
      explication: "15 = SAMU (urgence médicale), 18 = sapeurs-pompiers, 17 = police ou gendarmerie, 112 = numéro d'urgence européen." },
    { id: "ACCID-006", chapitre: "accident-incendie",
      q: "Quels numéros permettent d'alerter les secours pour un accident électrique ?", options: ["3615", "18", "15", "112"], bonnes: [1, 2, 3],
      explication: "Le 15 (SAMU), le 18 (pompiers) et le 112 (numéro européen) permettent d'alerter les secours. Le 114 s'utilise par SMS pour les personnes sourdes ou malentendantes." },
    { id: "ACCID-007", chapitre: "accident-incendie",
      q: "Dans le message d'alerte, il faut préciser :", options: ["Le nombre de victimes et leur état", "Le lieu exact", "Qu'il s'agit d'un accident électrique", "Le nom de l'installateur du tableau"], bonnes: [0, 1, 2],
      explication: "Le lieu, la nature électrique de l'accident (et si le courant est coupé), le nombre de victimes, leur état et les gestes faits permettent d'adapter les secours." },
    { id: "ACCID-008", chapitre: "accident-incendie", situation: "Vous êtes au téléphone avec le SAMU après un accident électrique.",
      q: "Vous raccrochez :", options: ["Lorsque votre interlocuteur vous le demande", "Dès que vous avez donné l'adresse"], bonnes: [0],
      explication: "Le régulateur peut avoir besoin d'informations complémentaires ou vous guider dans les gestes de secours. On ne raccroche que lorsqu'il le demande." },
    { id: "ACCID-009", chapitre: "accident-incendie", situation: "Le courant est coupé. La victime ne répond pas et ne respire pas.",
      q: "Vous :", options: ["Commencez la réanimation cardio-pulmonaire", "La placez en position latérale de sécurité et attendez", "Faites chercher un défibrillateur"], bonnes: [0, 2],
      explication: "Une victime qui ne respire pas est en arrêt cardiaque : on commence immédiatement les compressions et on fait chercher un DAE. La position latérale de sécurité est réservée à la victime qui respire." },
    { id: "ACCID-010", chapitre: "accident-incendie", situation: "Le courant est coupé. La victime ne répond pas mais respire normalement.",
      q: "Vous la placez :", options: ["Debout pour qu'elle reprenne ses esprits", "Assise sur une chaise", "En position latérale de sécurité"], bonnes: [2],
      explication: "Une victime inconsciente qui respire est placée en position latérale de sécurité, pour protéger ses voies respiratoires, et surveillée jusqu'à l'arrivée des secours." },
    { id: "ACCID-011", chapitre: "accident-incendie",
      q: "Le défibrillateur automatisé externe (DAE) est utile car le courant peut provoquer :", options: ["Une fibrillation ventriculaire", "Une fracture"], bonnes: [0],
      explication: "La fibrillation ventriculaire est la principale cause de décès par électrocution. Le DAE délivre un choc qui peut rétablir un rythme cardiaque efficace." },
    { id: "ACCID-012", chapitre: "accident-incendie", situation: "Une victime, hors tension, présente une brûlure à la main.",
      q: "Vous :", options: ["Arrachez les vêtements collés à la peau", "Refroidissez la brûlure à l'eau tempérée", "Appliquez du beurre"], bonnes: [1],
      explication: "On refroidit la brûlure à l'eau tempérée, on ne retire pas ce qui colle à la peau et on n'applique aucun corps gras. Une brûlure électrique demande toujours un avis médical." },
    { id: "ACCID-013", chapitre: "accident-incendie", situation: "Une ligne électrique est tombée sur la chaussée après une tempête. Des passants s'approchent.",
      q: "Vous :", options: ["Faites éloigner tout le monde", "Écartez le câble avec un bâton", "Alertez les secours"], bonnes: [0, 2],
      explication: "Le câble et le sol autour peuvent être sous tension. On fait éloigner les personnes, on alerte, et seul l'exploitant du réseau intervient sur la ligne." },
    { id: "ACCID-014", chapitre: "accident-incendie", situation: "Une ligne électrique est tombée sur la voiture dans laquelle vous vous trouvez. Il n'y a pas d'incendie.",
      q: "Vous :", options: ["Restez à l'intérieur et attendez les secours", "Sortez immédiatement en posant le pied au sol"], bonnes: [0],
      explication: "En sortant, vous toucheriez à la fois la carrosserie et le sol, et seriez traversé par le courant. On reste à l'intérieur, sauf en cas d'incendie." },
    { id: "ACCID-015", chapitre: "accident-incendie", situation: "De la fumée sort d'une armoire électrique. Le feu est naissant.",
      q: "Votre premier geste, si c'est possible sans danger, est de :", options: ["Ouvrir grand l'armoire pour voir", "Couper l'alimentation électrique"], bonnes: [1],
      explication: "On coupe l'alimentation pour supprimer la cause et le risque électrique, on donne l'alerte, puis on attaque le feu avec un extincteur adapté." },
    { id: "ACCID-016", chapitre: "accident-incendie", situation: "Un tableau électrique sous tension prend feu.",
      q: "Quels extincteurs sont adaptés ?", options: ["Poudre", "CO2", "Eau en jet"], bonnes: [0, 1],
      explication: "Le CO2 et la poudre ne conduisent pas le courant. L'eau en jet est interdite sur une installation sous tension." },
    { id: "ACCID-017", chapitre: "accident-incendie",
      q: "Sur une installation électrique sous tension, l'eau en jet est :", options: ["Interdite", "Recommandée"], bonnes: [0],
      explication: "L'eau conduit le courant et pourrait électriser l'utilisateur de l'extincteur ou de la lance." },
    { id: "ACCID-018", chapitre: "accident-incendie",
      q: "L'extincteur CO2 est particulièrement adapté aux armoires électriques car :", options: ["Il ne conduit pas le courant", "Il ne laisse pas de résidu", "Il refroidit durablement le local"], bonnes: [0, 1],
      explication: "Le CO2 est un gaz non conducteur qui ne laisse pas de dépôt sur les équipements. Il faut aérer le local après usage et ne pas toucher le diffuseur très froid." },
    { id: "ACCID-019", chapitre: "accident-incendie", situation: "Vous venez de vider un extincteur CO2 dans un petit local électrique fermé.",
      q: "Il faut :", options: ["Rester dans le local pour surveiller", "Sortir et aérer le local avant d'y revenir"], bonnes: [1],
      explication: "Le CO2 chasse l'oxygène : dans un petit local, il peut provoquer une asphyxie. On sort, puis on aère avant d'y retourner." },
    { id: "ACCID-020", chapitre: "accident-incendie",
      q: "Parmi ces situations, lesquelles peuvent provoquer un incendie d'origine électrique ?", options: ["Un appareil de classe II débranché", "Un court-circuit", "Une connexion desserrée qui chauffe", "Une multiprise surchargée"], bonnes: [1, 2, 3],
      explication: "Surcharge, connexion qui chauffe et court-circuit sont des causes classiques d'incendie électrique. Un appareil débranché n'est pas alimenté." },
    { id: "ACCID-021", chapitre: "accident-incendie", situation: "Après un accident, la victime électrisée a été dégagée et dit se sentir bien.",
      q: "Il faut :", options: ["La surveiller jusqu'à l'avis médical", "La faire examiner par un médecin", "La laisser rentrer chez elle"], bonnes: [0, 1],
      explication: "Les troubles cardiaques et les brûlures internes peuvent apparaître plusieurs heures après. Toute victime électrisée doit être examinée par un médecin." },
    { id: "ACCID-022", chapitre: "accident-incendie", situation: "Le feu dans un local électrique prend de l'ampleur et la fumée envahit la pièce.",
      q: "Vous :", options: ["Donnez l'alerte", "Évacuez en fermant la porte derrière vous", "Continuez à lutter seul"], bonnes: [0, 1],
      explication: "Un feu qui n'est plus naissant et la fumée imposent d'évacuer. Fermer la porte limite la propagation. On alerte et on attend les secours à l'extérieur." },
    { id: "ACCID-023", chapitre: "accident-incendie",
      q: "Pour utiliser un extincteur sur un feu naissant, il faut :", options: ["Viser le haut des flammes", "Garder une issue derrière soi", "Faire couper l'alimentation électrique si possible", "Viser la base des flammes"], bonnes: [1, 2, 3],
      explication: "On coupe l'électricité si possible, on garde une issue dans le dos et on vise la base des flammes par balayage. Viser le haut des flammes est inefficace." }
  );
})();

/* ───────────── Thème NE — Non-électricien : B0, H0, H0V, BF, HF ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "ne-executant-b0-h0",
      theme: "NE",
      parcours: ["b0", "b0h0"],
      titre: "B0, H0 et H0V : travailler sans toucher à l'électricité",
      duree: 22,
      objectifs: [
        "Savoir ce qu'est une opération d'ordre non électrique",
        "Connaître ce que l'exécutant B0, H0 ou H0V peut faire et ne peut pas faire",
        "Situer les zones accessibles à chaque habilitation non électricien",
        "Adopter les bons réflexes face à une anomalie électrique"
      ],
      sections: [
        {
          titre: "Les opérations d'ordre non électrique",
          contenu: `<p>Une <strong>opération d'ordre non électrique</strong> est un travail qui ne porte pas sur l'installation électrique elle-même, mais qui se déroule dans un <strong>environnement électrique</strong> : dans un local d'accès réservé aux électriciens, ou à proximité de pièces nues sous tension.</p>
<p>Exemples typiques :</p>
<ul>
<li>peinture, maçonnerie, plâtrerie, menuiserie, serrurerie dans un local électrique ;</li>
<li>nettoyage d'un local de tableau électrique ou d'un poste de transformation ;</li>
<li>entretien mécanique d'une machine (graissage, changement de courroie) à proximité d'une armoire ;</li>
<li>élagage, travaux de bâtiment ou de levage à proximité d'une ligne aérienne ;</li>
<li>terrassement à proximité d'un câble enterré (habilitations BF et HF).</li>
</ul>
<p>Ces travaux sont réalisés par des personnes <strong>non électriciennes</strong>. Le risque n'est pas dans le travail lui-même, mais dans l'<strong>environnement</strong> : un geste involontaire, un outil long, une échelle, de l'eau de lavage peuvent mettre la personne en contact avec une pièce sous tension.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le chiffre <strong>0</strong> d'une habilitation désigne un travail d'ordre <strong>non électrique</strong>. Un B0 ou un H0 ne réalise <strong>aucune opération électrique</strong>, même simple.</div>`
        },
        {
          titre: "Ce que peut faire l'exécutant B0, H0 ou H0V",
          contenu: `<table>
<thead><tr><th>Habilitation</th><th>Domaine</th><th>Zones où il peut réaliser des travaux d'ordre non électrique</th></tr></thead>
<tbody>
<tr><td><strong>B0</strong></td><td>Basse et très basse tension</td><td>Zone 1 (voisinage simple), y compris dans un local d'accès réservé aux électriciens</td></tr>
<tr><td><strong>H0</strong></td><td>Haute tension</td><td>Zone 1 (voisinage simple HT)</td></tr>
<tr><td><strong>H0V</strong></td><td>Haute tension</td><td>Zone 1 et zone 2 (voisinage renforcé HT), dans les conditions fixées par le chargé d'exploitation</td></tr>
</tbody>
</table>
<p>L'exécutant non électricien peut donc :</p>
<ul>
<li><strong>accéder</strong> aux locaux d'accès réservé aux électriciens pour y réaliser le travail prévu ;</li>
<li>réaliser son travail <strong>en respectant les limites</strong> de la zone et le balisage ;</li>
<li>appliquer les <strong>consignes</strong> de son chargé de chantier.</li>
</ul>
<p>Il n'existe pas d'habilitation non électricien pour le voisinage renforcé en basse tension : la <strong>zone 4 est interdite</strong> au B0. Si un travail doit s'y faire, l'installation doit être mise hors tension ou les pièces nues protégées par un électricien.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un agent H0V est chargé de nettoyer le sol d'une cellule HTA dans un poste. Il peut entrer en zone 2 comme le prévoit son habilitation, mais uniquement dans les limites et avec les protections fixées par le chargé d'exploitation, et jamais en zone 3.</div>`
        },
        {
          titre: "Ce qu'il ne peut pas faire",
          contenu: `<p>L'exécutant B0, H0 ou H0V <strong>ne doit pas</strong> :</p>
<ul>
<li><strong>toucher</strong> une pièce nue, un conducteur, une borne, même s'il pense l'installation coupée ;</li>
<li><strong>ouvrir</strong> une armoire, un coffret, un tableau, ni retirer un capot ;</li>
<li><strong>manœuvrer</strong> un appareil (disjoncteur, interrupteur, sectionneur), y compris pour <strong>réarmer</strong> une protection qui a déclenché, sauf manœuvre d'arrêt d'urgence en cas de danger ;</li>
<li><strong>remplacer</strong> un fusible, une lampe, une prise : c'est une intervention élémentaire qui exige l'habilitation BS ;</li>
<li><strong>déplacer, franchir ou retirer</strong> un balisage, une nappe isolante, un écran, un cadenas ou une pancarte ;</li>
<li><strong>pénétrer</strong> dans une zone qui ne correspond pas à son habilitation (zone 4 pour le B0, zone 2 pour le H0, zone 3 pour tous).</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « réarmer un disjoncteur, ce n'est rien ». Pour un B0, c'est interdit : c'est une manœuvre, réservée aux personnes habilitées BS, BE Manœuvre ou électriciens.</div>
<div class="encart" data-type="danger"><strong>Attention :</strong> un B0 ne doit jamais utiliser de jet d'eau, de nettoyeur haute pression ou de produit liquide projeté près de pièces sous tension. L'eau conduit le courant.</div>`
        },
        {
          titre: "Les bons réflexes face à une anomalie",
          contenu: `<p>Le non-électricien est souvent le premier à remarquer un problème. Il doit savoir réagir sans se mettre en danger :</p>
<ul>
<li>un <strong>câble dénudé</strong>, un <strong>capot cassé</strong>, une <strong>armoire ouverte</strong> : il ne touche pas, s'éloigne, et prévient son chargé de chantier ou le chargé d'exploitation ;</li>
<li>une <strong>odeur de brûlé</strong>, de la fumée, un crépitement : il s'éloigne, alerte, et ne tente pas d'ouvrir l'appareil ;</li>
<li>une <strong>coupure de courant</strong> : il ne réarme pas, il signale ;</li>
<li>un <strong>balisage déplacé</strong> ou une protection tombée : il arrête son travail et prévient.</li>
</ul>
<p>S'il doit modifier son travail (déplacer une échelle, utiliser un outil plus long, faire entrer un engin), il en parle d'abord à son chargé de chantier : la zone dans laquelle il travaille peut changer.</p>
<p>Il adapte aussi son matériel à l'environnement électrique : échelle isolante plutôt que métallique, outils courts, aucun objet métallique long porté à l'épaule, pas de bijoux pendants. Il range son matériel à l'extérieur de la zone balisée, jamais posé sur une armoire ou un tableau. En fin de journée, il ne laisse ni outil ni chiffon dans le local électrique.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> devant une anomalie électrique, le réflexe du non-électricien est toujours le même : <strong>ne pas toucher, s'éloigner, prévenir</strong>.</div>`
        },
        {
          titre: "Non habilité, B0 ou électricien : qui fait quoi ?",
          contenu: `<table>
<thead><tr><th>Situation</th><th>Personne non habilitée</th><th>B0</th><th>Électricien habilité</th></tr></thead>
<tbody>
<tr><td>Travailler en zone 0</td><td>Oui</td><td>Oui</td><td>Oui</td></tr>
<tr><td>Travailler en zone 1 BT ou dans un local d'accès réservé</td><td>Seulement sous surveillance permanente d'une personne habilitée</td><td>Oui</td><td>Oui</td></tr>
<tr><td>Travailler en zone 4 BT</td><td>Non</td><td>Non</td><td>Oui, si son habilitation porte V (ou équivalent)</td></tr>
<tr><td>Remplacer une lampe ou un fusible</td><td>Non</td><td>Non</td><td>Oui (BS au minimum)</td></tr>
</tbody>
</table>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un apprenti peintre, non habilité, accompagne une équipe B0 dans un local électrique. Il ne peut y travailler que si une personne habilitée est désignée pour le surveiller en permanence.</div>`
        }
      ],
      points_cles: [
        "Opération d'ordre non électrique : peinture, maçonnerie, nettoyage, mécanique… dans un environnement électrique.",
        "B0 : zone 1 BT et locaux d'accès réservé ; zone 4 interdite.",
        "H0 : zone 1 HT ; H0V : zones 1 et 2 HT ; la zone 3 est interdite à tous les non-électriciens.",
        "Un B0 ne touche, n'ouvre, ne manœuvre et ne remplace rien d'électrique.",
        "Réarmer un disjoncteur est interdit au B0.",
        "On ne franchit, ne déplace ni ne retire jamais un balisage ou une protection.",
        "Face à une anomalie : ne pas toucher, s'éloigner, prévenir.",
        "Un non-habilité ne travaille en zone 1 que sous surveillance permanente d'une personne habilitée."
      ]
    },
    {
      id: "ne-charge-chantier-voisinage",
      theme: "NE",
      parcours: ["b0", "b0h0"],
      titre: "Le chargé de chantier et les travaux au voisinage",
      duree: 20,
      objectifs: [
        "Connaître le rôle du chargé de chantier B0, H0 ou H0V",
        "Savoir quelles informations il reçoit et transmet",
        "Respecter et faire respecter le balisage et les consignes",
        "Connaître les règles des travaux au voisinage des lignes aériennes"
      ],
      sections: [
        {
          titre: "Le rôle du chargé de chantier",
          contenu: `<p>Le <strong>chargé de chantier</strong> est la personne habilitée (B0, H0 ou H0V avec la mention « chargé de chantier ») qui assure la <strong>direction effective</strong> de travaux d'ordre non électrique dans un environnement électrique. Il peut s'agir d'un chef d'équipe de peintres, de maçons, d'agents de nettoyage, d'un chef de chantier de bâtiment.</p>
<p>Ses missions :</p>
<ul>
<li><strong>recevoir</strong> les informations et les instructions de sécurité du chargé d'exploitation électrique (ou du chargé de travaux électricien qui encadre l'opération) ;</li>
<li><strong>vérifier</strong> sur place que les mesures prévues sont en place : balisage, nappes, écrans, mise hors tension éventuelle ;</li>
<li><strong>informer</strong> ses exécutants des limites de la zone de travail, des pièces sous tension et des consignes ;</li>
<li><strong>faire respecter</strong> ces consignes pendant toute la durée du chantier ;</li>
<li><strong>surveiller</strong> les exécutants, en particulier ceux qui ne sont pas habilités ;</li>
<li><strong>arrêter</strong> le travail en cas de doute ou d'anomalie, et rendre compte en fin de chantier.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le chargé de chantier est le relais de la sécurité électrique pour son équipe. Il ne fait lui-même <strong>aucune opération électrique</strong>.</div>`
        },
        {
          titre: "Avant de commencer : la préparation",
          contenu: `<p>Avant de commencer le travail, le chargé de chantier s'assure de connaître :</p>
<ul>
<li>la <strong>zone de travail</strong> exacte et ses limites matérialisées ;</li>
<li>l'emplacement des <strong>pièces nues sous tension</strong> et le domaine de tension (BT ou HT) ;</li>
<li>la <strong>zone</strong> d'environnement dans laquelle son équipe se trouvera (0, 1 ou 2 en HT) ;</li>
<li>les <strong>mesures de protection</strong> prises par les électriciens (mise hors tension, nappes, écrans, balisage) ;</li>
<li>les <strong>consignes</strong> particulières : outils interdits, longueur maximale des objets manipulés, interdiction d'eau, horaires ;</li>
<li>la <strong>personne à prévenir</strong> en cas de problème et la conduite à tenir en cas d'accident.</li>
</ul>
<p>Il réunit ensuite son équipe pour transmettre ces informations, avant le début des travaux, et à chaque fois qu'un nouvel exécutant arrive.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> avant de repeindre un local de tableau général, le chargé de chantier B0 rencontre le chargé d'exploitation. Celui-ci lui montre le balisage posé à distance des bornes nues et lui remet les instructions de sécurité. Le chargé de chantier les explique à ses deux peintres et leur interdit les perches télescopiques.</div>`
        },
        {
          titre: "Le balisage et les consignes",
          contenu: `<p>Le <strong>balisage</strong> (chaînes, rubans, barrières rouge et blanc, panneaux) matérialise la limite que l'équipe ne doit pas franchir. Il a été posé par une personne habilitée, en fonction des distances de sécurité.</p>
<ul>
<li>Le balisage <strong>ne se franchit pas</strong>, ni avec le corps, ni avec un outil, ni avec une charge.</li>
<li>Il <strong>ne se déplace pas</strong>, même s'il gêne le travail : on demande au chargé d'exploitation.</li>
<li>Si un balisage est tombé ou abîmé, on <strong>arrête</strong> le travail et on prévient.</li>
</ul>
<p>Les consignes doivent être respectées <strong>pendant toute la durée</strong> du chantier. Si le travail évolue (nouvelle tâche, nouveau matériel, autre emplacement), le chargé de chantier en informe le chargé d'exploitation avant de continuer.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le chargé de chantier n'a pas le droit de modifier lui-même le balisage pour « faire de la place » à son équipe, même s'il pense que la distance reste suffisante.</div>`
        },
        {
          titre: "Les travaux au voisinage des lignes aériennes",
          contenu: `<p>Les travaux de bâtiment, d'élagage, de levage ou de manutention près d'une <strong>ligne électrique aérienne</strong> sont à l'origine d'accidents graves : flèche de grue, bras d'une pelle, échelle, perche ou benne qui approche les câbles.</p>
<p>Le Code du travail impose de respecter une <strong>distance minimale</strong> entre toute partie de l'engin, de la charge ou de l'outil et les conducteurs :</p>
<table>
<thead><tr><th>Tension de la ligne</th><th>Distance minimale</th></tr></thead>
<tbody>
<tr><td>Inférieure à 50 000 V</td><td>3 m</td></tr>
<tr><td>Égale ou supérieure à 50 000 V</td><td>5 m</td></tr>
</tbody>
</table>
<p>Cette distance tient compte de tous les <strong>mouvements possibles</strong> : déplacement de l'engin, balancement de la charge, fouettement d'un câble, flèche des conducteurs qui varie avec la température et le vent.</p>
<p>Si ces distances ne peuvent pas être respectées, les travaux ne commencent qu'après accord avec l'<strong>exploitant</strong> de la ligne, qui définit les mesures : mise hors tension, obstacles, surveillance permanente.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> en haute tension, un arc peut s'établir sans contact. On ne « frôle » jamais une ligne : on s'en tient à distance.</div>`
        },
        {
          titre: "Pendant et après le chantier",
          contenu: `<p>Pendant toute la durée du chantier, le chargé de chantier reste <strong>présent</strong> et attentif. S'il doit s'absenter, il fait arrêter le travail ou se fait remplacer par une personne habilitée qui connaît les consignes. Il veille en particulier :</p>
<ul>
<li>aux <strong>déplacements</strong> d'échelles, d'échafaudages, de perches et de charges ;</li>
<li>à l'arrivée de <strong>nouveaux matériels</strong> ou de nouveaux intervenants ;</li>
<li>à l'état du <strong>balisage</strong> et des protections posées par les électriciens ;</li>
<li>au respect des <strong>interdictions</strong> : pas d'eau, pas d'outil long, pas d'ouverture d'armoire.</li>
</ul>
<p>À la fin du travail, il :</p>
<ol>
<li>fait <strong>retirer</strong> le personnel, le matériel et les déchets de la zone ;</li>
<li>vérifie qu'aucun outil n'a été oublié près des installations ;</li>
<li>laisse le balisage et les protections en place : c'est à l'électricien de les retirer ;</li>
<li><strong>rend compte</strong> au chargé d'exploitation de la fin du chantier et des anomalies constatées.</li>
</ol>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> en fin de chantier de peinture dans un poste HTA, le chargé de chantier H0V compte les outils, fait sortir son équipe, referme le local et informe le chargé d'exploitation que les travaux sont terminés. Ce dernier pourra alors faire retirer les protections posées.</div>`
        }
      ],
      points_cles: [
        "Le chargé de chantier dirige les travaux d'ordre non électrique de son équipe.",
        "Il reçoit les instructions de sécurité du chargé d'exploitation et les transmet à ses exécutants.",
        "Il vérifie les protections en place, fait respecter les consignes et arrête le travail en cas d'anomalie.",
        "Le balisage ne se franchit pas, ne se déplace pas ; s'il est abîmé, on arrête et on prévient.",
        "Tout changement dans le travail est signalé avant de continuer.",
        "Près d'une ligne aérienne : 3 m en dessous de 50 kV, 5 m à partir de 50 kV, mouvements compris.",
        "Si la distance ne peut être respectée : accord préalable de l'exploitant de la ligne."
      ]
    },
    {
      id: "ne-bf-hf-terrassement",
      theme: "NE",
      parcours: ["bfhf"],
      titre: "BF et HF : terrassement à proximité de canalisations électriques enterrées",
      duree: 22,
      objectifs: [
        "Connaître le rôle des habilitations BF et HF",
        "Comprendre la procédure DT-DICT et le rôle de chacun",
        "Savoir lire un marquage-piquetage et un grillage avertisseur",
        "Adapter la technique de terrassement à la proximité d'un câble",
        "Connaître la conduite à tenir en cas d'endommagement d'un câble"
      ],
      sections: [
        {
          titre: "Le risque des câbles enterrés",
          contenu: `<p>Les réseaux électriques souterrains (câbles basse tension et haute tension A, éclairage public) sont des <strong>canalisations isolées enterrées</strong>. Tant que leur isolant est intact, ils ne présentent pas de danger. Mais un coup de pelle mécanique, de pioche, de marteau-piqueur ou de tarière peut :</p>
<ul>
<li><strong>percer l'isolant</strong> et mettre l'outil ou l'engin sous tension ;</li>
<li>provoquer un <strong>court-circuit</strong> et un <strong>arc électrique</strong> violent, avec brûlures et projections ;</li>
<li><strong>électriser</strong> l'opérateur ou les personnes proches de l'engin ;</li>
<li>couper l'alimentation de tout un quartier, d'un hôpital, d'une entreprise.</li>
</ul>
<p>Les habilitations <strong>BF</strong> (basse tension) et <strong>HF</strong> (haute tension) concernent les personnes qui réalisent des <strong>travaux d'ordre non électrique de terrassement</strong> à proximité de ces canalisations : exécutants (conducteurs d'engins, terrassiers) et chargés de chantier. Elles ne permettent aucune opération sur le câble lui-même.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> BF et HF = terrassement près de câbles isolés enterrés. Le câble ne se touche pas, ne se déplace pas, ne se répare pas.</div>`
        },
        {
          titre: "La procédure DT-DICT",
          contenu: `<p>La réglementation anti-endommagement des réseaux (Code de l'environnement) impose une procédure de déclaration avant tous travaux à proximité de réseaux :</p>
<table>
<thead><tr><th>Étape</th><th>Qui ?</th><th>Contenu</th></tr></thead>
<tbody>
<tr><td><strong>Consultation du guichet unique</strong></td><td>Maître d'ouvrage et exécutant des travaux</td><td>Service en ligne national qui indique les exploitants de réseaux concernés par la zone de travaux</td></tr>
<tr><td><strong>DT</strong> : déclaration de projet de travaux</td><td>Le <strong>maître d'ouvrage</strong> (le responsable du projet)</td><td>Envoyée aux exploitants au stade du projet ; ils répondent en localisant leurs réseaux</td></tr>
<tr><td><strong>DICT</strong> : déclaration d'intention de commencement de travaux</td><td>L'<strong>exécutant des travaux</strong> (l'entreprise qui terrasse)</td><td>Envoyée avant le début du chantier ; les exploitants répondent avec plans et recommandations</td></tr>
</tbody>
</table>
<p>Les réponses des exploitants (récépissés) précisent la position des réseaux, leur <strong>classe de précision</strong> (certitude sur la localisation), les recommandations techniques et le <strong>numéro à appeler en cas d'endommagement</strong>. Ces documents doivent être <strong>présents sur le chantier</strong>.</p>
<p>Les personnes qui conduisent les engins ou encadrent ces travaux doivent aussi détenir une <strong>AIPR</strong> (autorisation d'intervention à proximité des réseaux), délivrée par leur employeur.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la DT est faite par le maître d'ouvrage ; la DICT est faite par l'entreprise qui exécute les travaux. On ne commence pas à terrasser sans avoir reçu les réponses.</div>`
        },
        {
          titre: "Le marquage-piquetage et le grillage avertisseur",
          contenu: `<p>Avant le début des travaux, les réseaux sont repérés au sol par un <strong>marquage-piquetage</strong> (peinture, piquets, fanions), réalisé sous la responsabilité du maître d'ouvrage d'après les réponses aux déclarations. Ce marquage doit être <strong>maintenu</strong> pendant toute la durée du chantier.</p>
<p>Les couleurs sont normalisées. Les principales sont :</p>
<table>
<thead><tr><th>Couleur</th><th>Réseau</th></tr></thead>
<tbody>
<tr><td><strong>Rouge</strong></td><td>Électricité (BT, HTA, éclairage public)</td></tr>
<tr><td>Jaune</td><td>Gaz et hydrocarbures</td></tr>
<tr><td>Bleu</td><td>Eau potable</td></tr>
<tr><td>Vert</td><td>Télécommunications</td></tr>
</tbody>
</table>
<p>Dans le sol, un câble électrique est en principe signalé par un <strong>grillage avertisseur rouge</strong> posé au-dessus de lui. La découverte de ce grillage signifie que le câble est <strong>juste en dessous</strong> : on arrête le terrassement mécanique et on poursuit avec précaution, à la main.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> l'absence de grillage avertisseur ne prouve pas l'absence de câble. Les réseaux anciens n'en ont pas toujours, et un câble peut avoir été déplacé.</div>`
        },
        {
          titre: "Terrasser à proximité d'un câble",
          contenu: `<p>La position d'un réseau n'est connue qu'avec une certaine <strong>incertitude</strong>, indiquée par sa classe de précision. Plus on s'approche du tracé supposé, plus les techniques doivent être douces :</p>
<ul>
<li>loin du réseau : terrassement mécanique normal ;</li>
<li>à proximité du tracé et dans sa zone d'incertitude : <strong>techniques douces</strong> (aspiration, terrassement manuel à la pelle, engins avec précautions), en suivant les recommandations de l'exploitant ;</li>
<li>pour dégager le câble : <strong>terrassement manuel</strong>, sans outil pointu ni frappe, en dégageant progressivement sur le côté.</li>
</ul>
<p>Une fois découvert, le câble est <strong>protégé et maintenu</strong> dans sa position. On ne le déplace pas, on ne le soulève pas, on ne s'en sert pas comme appui. Les distances et techniques précises sont celles des recommandations de l'exploitant et des instructions de chantier.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un conducteur de pelle BF terrasse une tranchée. Le marquage rouge indique un câble à 2 m. En approchant du marquage, il arrête de creuser avec le godet ; l'équipe termine à la main, dégage le câble et le signale par un balisage.</div>`
        },
        {
          titre: "En cas d'endommagement",
          contenu: `<p>Si un câble est touché, arraché ou même simplement éraflé, on applique immédiatement la conduite suivante :</p>
<ol>
<li><strong>Arrêter</strong> les travaux et les engins à proximité.</li>
<li><strong>Ne pas toucher</strong> le câble ni l'engin en contact avec lui. Si l'engin touche le câble, son conducteur reste en principe dans la cabine (sauf incendie), et personne ne s'approche de l'engin.</li>
<li><strong>Éloigner</strong> les personnes et <strong>baliser</strong> la zone.</li>
<li><strong>Prévenir</strong> immédiatement l'<strong>exploitant du réseau</strong> (numéro d'urgence du récépissé) et son responsable ; appeler les secours en cas de victime ou d'incendie.</li>
<li><strong>Ne pas remblayer</strong> la fouille et ne pas reprendre les travaux avant l'accord de l'exploitant.</li>
</ol>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> même une simple éraflure de la gaine doit être signalée. Un isolant abîmé peut céder plus tard et provoquer un défaut, un incendie ou une électrisation.</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> arrêter, ne pas toucher, éloigner et baliser, prévenir l'exploitant, ne pas remblayer.</div>`
        }
      ],
      points_cles: [
        "BF (BT) et HF (HT) : terrassement à proximité de canalisations isolées enterrées.",
        "DT : faite par le maître d'ouvrage ; DICT : faite par l'exécutant des travaux.",
        "Les récépissés, avec le numéro d'urgence de l'exploitant, sont présents sur le chantier.",
        "Le marquage-piquetage est réalisé avant les travaux et maintenu ; rouge = électricité.",
        "Grillage avertisseur rouge : le câble est juste en dessous, on passe au terrassement manuel.",
        "Près du tracé, techniques douces ; le câble découvert ne se déplace pas.",
        "En cas d'endommagement : arrêter, ne pas toucher, éloigner, baliser, prévenir l'exploitant, ne pas remblayer.",
        "Même une éraflure de la gaine doit être signalée."
      ]
    }
  );

  P.questions.push(
    { id: "NE-001", chapitre: "ne-executant-b0-h0",
      q: "Une opération d'ordre non électrique, c'est par exemple :", options: ["Remplacer un fusible", "Nettoyer le sol d'un poste de transformation", "Repeindre un local de tableau électrique"], bonnes: [1, 2],
      explication: "Peinture et nettoyage ne portent pas sur l'installation électrique : ce sont des travaux d'ordre non électrique. Remplacer un fusible est une intervention électrique (BS au minimum)." },
    { id: "NE-002", chapitre: "ne-executant-b0-h0",
      q: "Le chiffre 0 dans B0 signifie que la personne :", options: ["N'effectue que des travaux d'ordre non électrique", "N'a pas d'habilitation", "Peut faire des opérations électriques simples"], bonnes: [0],
      explication: "Le 0 désigne un travail d'ordre non électrique dans un environnement électrique. Le B0 est bien une habilitation, mais il n'autorise aucune opération électrique." },
    { id: "NE-003", chapitre: "ne-executant-b0-h0", situation: "Vous êtes habilité B0 et devez repeindre un local de tableau général basse tension.",
      q: "Vous pouvez :", options: ["Entrer dans le local pour faire le travail prévu", "Ouvrir le tableau pour peindre l'intérieur de la porte", "Travailler en zone 1"], bonnes: [0, 2],
      explication: "Le B0 peut accéder au local d'accès réservé et travailler en zone 1. Ouvrir le tableau exposerait des pièces nues : c'est interdit." },
    { id: "NE-004", chapitre: "ne-executant-b0-h0",
      q: "Le B0 peut travailler en zone 4 (voisinage renforcé BT) :", options: ["Oui", "Non"], bonnes: [1],
      explication: "La zone 4 est interdite aux non-électriciens. Si un travail doit s'y faire, l'installation doit être mise hors tension ou les pièces nues protégées par un électricien." },
    { id: "NE-005", chapitre: "ne-executant-b0-h0", situation: "Pendant que vous nettoyez un atelier, un disjoncteur déclenche et la lumière s'éteint. Vous êtes habilité B0.",
      q: "Vous :", options: ["Réarmez le disjoncteur", "Prévenez votre chargé de chantier ou le responsable", "Ouvrez le tableau pour voir la cause"], bonnes: [1],
      explication: "Réarmer est une manœuvre, interdite au B0 (elle exige BS, BE Manœuvre ou une habilitation d'électricien). On signale et on laisse faire une personne habilitée." },
    { id: "NE-006", chapitre: "ne-executant-b0-h0", situation: "Dans un bureau, une lampe est grillée. Un agent d'entretien habilité B0 propose de la changer.",
      q: "Peut-il le faire au titre de son B0 ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "Remplacer une lampe est une intervention élémentaire d'ordre électrique, qui exige au minimum l'habilitation BS. Le B0 ne réalise aucune opération électrique." },
    { id: "NE-007", chapitre: "ne-executant-b0-h0",
      domaine: "HT",
      q: "L'habilitation H0 permet des travaux d'ordre non électrique :", options: ["En zone 2 en haute tension", "En zone 3 en haute tension", "En zone 1 en haute tension"], bonnes: [2],
      explication: "Le H0 est limité au voisinage simple HT (zone 1). La zone 2 exige le H0V ; la zone 3 est réservée aux travaux sous tension." },
    { id: "NE-008", chapitre: "ne-executant-b0-h0",
      domaine: "HT",
      q: "L'habilitation H0V permet des travaux d'ordre non électrique :", options: ["En zone 1 HT", "En zone 2 HT", "En zone 3 HT"], bonnes: [0, 1],
      explication: "Le H0V couvre le voisinage simple et le voisinage renforcé HT (zones 1 et 2), dans les conditions fixées par le chargé d'exploitation. La zone 3 lui est interdite." },
    { id: "NE-009", chapitre: "ne-executant-b0-h0",
      q: "Quelles actions sont interdites à un exécutant B0 ?", options: ["Déplacer un balisage qui le gêne", "Respecter les consignes de son chargé de chantier", "Ouvrir une armoire électrique", "Retirer une nappe isolante"], bonnes: [0, 2, 3],
      explication: "Le B0 n'ouvre aucune enveloppe et ne touche à aucune protection (balisage, nappe, écran). Respecter les consignes est au contraire son obligation." },
    { id: "NE-010", chapitre: "ne-executant-b0-h0", situation: "En perçant un mur, un maçon B0 découvre un câble dénudé qui sort d'une boîte de dérivation sans couvercle.",
      q: "Il doit :", options: ["Ne pas toucher, s'éloigner et prévenir", "Remettre le couvercle lui-même", "Continuer en faisant attention"], bonnes: [0],
      explication: "Face à une anomalie électrique, le non-électricien ne touche pas, s'éloigne et prévient son chargé de chantier ou le chargé d'exploitation." },
    { id: "NE-011", chapitre: "ne-executant-b0-h0", situation: "Une agente de nettoyage B0 doit nettoyer le sol d'un local électrique où se trouvent des pièces nues sous tension.",
      q: "Elle peut utiliser un nettoyeur haute pression :", options: ["Oui, s'il est neuf", "Non, l'eau projetée peut conduire le courant"], bonnes: [1],
      explication: "L'eau projetée près de pièces sous tension peut créer un chemin pour le courant. On utilise des méthodes de nettoyage à sec ou validées par le chargé d'exploitation." },
    { id: "NE-012", chapitre: "ne-executant-b0-h0", situation: "Un apprenti non habilité accompagne une équipe B0 dans un local d'accès réservé aux électriciens.",
      q: "Il peut y travailler :", options: ["Seulement sous la surveillance permanente d'une personne habilitée désignée", "Librement, puisqu'il est avec l'équipe"], bonnes: [0],
      explication: "Une personne non habilitée ne peut travailler dans un local d'accès réservé que sous la surveillance permanente d'une personne habilitée désignée." },
    { id: "NE-013", chapitre: "ne-executant-b0-h0", situation: "Vous êtes B0. Vous sentez une odeur de brûlé et entendez un crépitement provenant d'une armoire.",
      q: "Vous :", options: ["Ouvrez l'armoire pour localiser le problème", "Vous éloignez et donnez l'alerte"], bonnes: [1],
      explication: "Un crépitement et une odeur de brûlé peuvent annoncer un arc ou un départ de feu. Le B0 n'ouvre pas : il s'éloigne et alerte." },
    { id: "NE-014", chapitre: "ne-executant-b0-h0",
      domaine: "HT",
      q: "Une personne habilitée B0 peut-elle opérer au voisinage d'installations haute tension ?", options: ["Oui, le B0 couvre toutes les tensions", "Non, il faut une habilitation H0 ou H0V"], bonnes: [1],
      explication: "La lettre B ne couvre que la basse et la très basse tension. Au voisinage de la haute tension, il faut H0 (zone 1) ou H0V (zone 2)." },
    { id: "NE-015", chapitre: "ne-executant-b0-h0", situation: "Un peintre B0 doit changer d'échelle et prendre un modèle plus haut, plus proche d'un jeu de barres.",
      q: "Avant de le faire, il :", options: ["En parle à son chargé de chantier", "Le fait directement, c'est un détail"], bonnes: [0],
      explication: "Un changement de matériel peut modifier la distance aux pièces nues et donc la zone. On en parle au chargé de chantier avant de continuer." },
    { id: "NE-016", chapitre: "ne-executant-b0-h0",
      q: "En cas d'accident grave (personne électrisée, incendie), un B0 peut-il actionner un bouton d'arrêt d'urgence ?", options: ["Oui, c'est une manœuvre d'urgence", "Non, jamais"], bonnes: [0],
      explication: "Les dispositifs d'arrêt d'urgence sont prévus pour être actionnés par toute personne en cas de danger. C'est différent d'une manœuvre d'exploitation comme le réarmement." },
    { id: "NE-017", chapitre: "ne-executant-b0-h0",
      q: "Un mécanicien B0 change une courroie sur une machine dont l'armoire électrique est fermée à côté de lui. Son travail est :", options: ["D'ordre électrique", "D'ordre non électrique"], bonnes: [1],
      explication: "Changer une courroie est un travail mécanique, donc d'ordre non électrique, réalisé dans un environnement électrique." },
    { id: "NE-018", chapitre: "ne-charge-chantier-voisinage",
      q: "Le chargé de chantier B0 :", options: ["Veille à la sécurité de son équipe vis-à-vis du risque électrique", "Peut consigner l'installation", "Dirige des travaux d'ordre non électrique"], bonnes: [0, 2],
      explication: "Le chargé de chantier dirige les travaux non électriques et fait respecter les consignes de sécurité électrique. La consignation est réservée aux chargés de consignation (BC, HC)." },
    { id: "NE-019", chapitre: "ne-charge-chantier-voisinage",
      q: "Le chargé de chantier reçoit les instructions de sécurité :", options: ["De ses exécutants", "D'un fournisseur de peinture", "Du chargé d'exploitation électrique"], bonnes: [2],
      explication: "C'est le chargé d'exploitation (ou le chargé de travaux électricien qui encadre l'opération) qui fixe les mesures de sécurité et les transmet au chargé de chantier." },
    { id: "NE-020", chapitre: "ne-charge-chantier-voisinage",
      q: "Avant le début des travaux, le chargé de chantier doit :", options: ["Informer ses exécutants des limites de la zone de travail", "Ouvrir les armoires pour montrer les pièces nues", "Vérifier que les protections prévues sont en place"], bonnes: [0, 2],
      explication: "Il vérifie sur place les mesures prévues (balisage, nappes…) et informe son équipe. Il n'ouvre aucune enveloppe électrique." },
    { id: "NE-021", chapitre: "ne-charge-chantier-voisinage", situation: "Un nouveau peintre rejoint l'équipe en cours de chantier, dans un local électrique.",
      q: "Le chargé de chantier :", options: ["Le laisse se renseigner auprès de ses collègues", "Lui transmet les consignes avant qu'il commence"], bonnes: [1],
      explication: "Le chargé de chantier informe chaque exécutant des risques, des limites et des consignes avant qu'il commence, y compris en cours de chantier." },
    { id: "NE-022", chapitre: "ne-charge-chantier-voisinage", situation: "Le balisage gêne l'équipe pour installer un échafaudage. Le chargé de chantier B0 estime qu'on peut l'avancer de 50 cm sans danger.",
      q: "Il peut le déplacer lui-même :", options: ["Oui, il est responsable du chantier", "Non, il doit demander au chargé d'exploitation"], bonnes: [1],
      explication: "Le balisage est posé par une personne habilitée en fonction des distances de sécurité. Le chargé de chantier ne le modifie pas : il demande au chargé d'exploitation." },
    { id: "NE-023", chapitre: "ne-charge-chantier-voisinage", situation: "En arrivant le matin, l'équipe constate qu'une chaîne de balisage est tombée au sol.",
      q: "Le chargé de chantier :", options: ["Prévient le chargé d'exploitation", "Fait arrêter le travail dans cette zone", "Remet la chaîne où il pense qu'elle était et continue"], bonnes: [0, 1],
      explication: "Un balisage tombé ne garantit plus la sécurité. On arrête et on prévient : c'est la personne habilitée qui le remet en place." },
    { id: "NE-024", chapitre: "ne-charge-chantier-voisinage",
      q: "Le chargé de chantier peut-il faire arrêter le travail de son équipe en cas de doute sur la sécurité électrique ?", options: ["Oui", "Non, seul le chargé d'exploitation le peut"], bonnes: [0],
      explication: "Le chargé de chantier dirige effectivement les travaux : il doit faire arrêter le travail dès qu'un doute ou une anomalie apparaît." },
    { id: "NE-025", chapitre: "ne-charge-chantier-voisinage", situation: "Une grue doit lever des charges près d'une ligne aérienne de 20 000 V.",
      domaine: "HT",
      q: "La distance minimale à respecter entre la ligne et toute partie de la grue ou de la charge est de :", options: ["1 m", "3 m", "5 m"], bonnes: [1],
      explication: "Pour une ligne de tension inférieure à 50 000 V, le Code du travail impose 3 m au minimum, en tenant compte de tous les mouvements possibles." },
    { id: "NE-026", chapitre: "ne-charge-chantier-voisinage", situation: "Un élagueur doit couper des branches près d'une ligne de 63 000 V.",
      domaine: "HT",
      q: "La distance minimale à respecter est de :", options: ["3 m", "5 m"], bonnes: [1],
      explication: "Pour une tension égale ou supérieure à 50 000 V, la distance minimale est de 5 m, mouvements des outils et des branches compris." },
    { id: "NE-027", chapitre: "ne-charge-chantier-voisinage",
      q: "Pour évaluer la distance à une ligne aérienne, il faut tenir compte :", options: ["Du balancement de la charge", "Des mouvements de l'engin", "De la couleur de l'engin", "Du déplacement des câbles avec le vent"], bonnes: [0, 1, 3],
      explication: "La distance minimale doit être respectée dans la position la plus défavorable : charge qui balance, flèche qui pivote, câbles qui bougent avec le vent et la température." },
    { id: "NE-028", chapitre: "ne-charge-chantier-voisinage", situation: "Sur un chantier, il est impossible de respecter la distance minimale avec une ligne aérienne.",
      q: "Les travaux :", options: ["Ne commencent qu'après accord avec l'exploitant de la ligne sur les mesures à prendre", "Peuvent commencer avec prudence"], bonnes: [0],
      explication: "Si la distance ne peut pas être respectée, l'exploitant de la ligne définit les mesures (mise hors tension, obstacles, surveillance) avant tout travail." },
    { id: "NE-029", chapitre: "ne-charge-chantier-voisinage", situation: "Un ouvrier déplace une échelle métallique de 6 m sous une ligne aérienne.",
      q: "Le risque est :", options: ["Nul tant que l'échelle ne touche pas la ligne", "Réel : l'échelle peut s'approcher ou toucher la ligne et provoquer une électrisation"], bonnes: [1],
      explication: "Une échelle longue, surtout métallique, peut toucher la ligne ou s'en approcher assez pour un amorçage en HT. On la déplace couchée, loin des lignes." },
    { id: "NE-030", chapitre: "ne-charge-chantier-voisinage",
      q: "Le chargé de chantier lui-même peut-il réaliser une opération électrique simple, comme remplacer une prise ?", options: ["Oui, s'il est chargé de chantier", "Non, il n'est pas habilité pour les opérations électriques"], bonnes: [1],
      explication: "Le chargé de chantier B0, H0 ou H0V dirige des travaux non électriques. Toute opération électrique exige une habilitation adaptée (BS au minimum pour une prise)." },
    { id: "NE-031", chapitre: "ne-charge-chantier-voisinage",
      q: "Si la nature du travail change en cours de chantier (nouvel outil, nouvelle zone), le chargé de chantier :", options: ["En informe le chargé d'exploitation avant de continuer", "Continue sans rien dire si cela va plus vite"], bonnes: [0],
      explication: "Les mesures de sécurité ont été définies pour un travail précis. Tout changement est signalé au chargé d'exploitation avant de continuer." },
    { id: "NE-032", chapitre: "ne-charge-chantier-voisinage",
      domaine: "HT",
      q: "Le chargé de chantier H0V peut diriger des travaux d'ordre non électrique :", options: ["En zone 3 HT", "En zone 2 HT"], bonnes: [1],
      explication: "Le H0V couvre le voisinage renforcé HT (zone 2). La zone 3 est la zone des travaux sous tension, réservée aux habilitations T et N." },
    { id: "NE-033", chapitre: "ne-bf-hf-terrassement",
      q: "Les habilitations BF et HF concernent :", options: ["Le remplacement de fusibles", "Les travaux de terrassement à proximité de canalisations électriques isolées enterrées", "Les travaux sur les lignes aériennes sous tension"], bonnes: [1],
      explication: "BF (basse tension) et HF (haute tension) concernent les travaux d'ordre non électrique de terrassement près de câbles enterrés. Elles ne permettent aucune opération sur le câble." },
    { id: "NE-034", chapitre: "ne-bf-hf-terrassement",
      q: "Un câble électrique enterré endommagé par un engin peut provoquer :", options: ["Une coupure d'électricité pour de nombreux usagers", "L'électrisation de personnes proches de l'engin", "Un arc électrique"], bonnes: [0, 1, 2],
      explication: "L'endommagement peut créer un court-circuit et un arc, mettre l'engin sous tension et électriser les personnes proches, et priver d'électricité tout un secteur." },
    { id: "NE-035", chapitre: "ne-bf-hf-terrassement",
      q: "La DT (déclaration de projet de travaux) est faite par :", options: ["L'entreprise qui exécute les travaux", "L'exploitant du réseau", "Le maître d'ouvrage"], bonnes: [2],
      explication: "La DT est faite par le maître d'ouvrage au stade du projet. L'entreprise qui exécute les travaux fait la DICT." },
    { id: "NE-036", chapitre: "ne-bf-hf-terrassement",
      q: "La DICT (déclaration d'intention de commencement de travaux) est faite par :", options: ["L'exécutant des travaux", "Le maître d'ouvrage"], bonnes: [0],
      explication: "C'est l'entreprise qui va réaliser les travaux qui adresse la DICT aux exploitants avant de commencer." },
    { id: "NE-037", chapitre: "ne-bf-hf-terrassement", situation: "Votre chef d'équipe vous demande de commencer à creuser alors que les réponses aux DICT ne sont pas arrivées.",
      q: "Le terrassement peut commencer :", options: ["Oui, si on creuse doucement", "Non, il faut attendre les réponses des exploitants"], bonnes: [1],
      explication: "Les réponses des exploitants localisent les réseaux et donnent les recommandations. Sans elles, on ne sait pas où passent les câbles." },
    { id: "NE-038", chapitre: "ne-bf-hf-terrassement",
      q: "Sur le chantier, les récépissés des déclarations (plans, recommandations, numéro d'urgence) doivent être :", options: ["Conservés au siège de l'entreprise uniquement", "Présents sur le chantier"], bonnes: [1],
      explication: "Les récépissés doivent être accessibles sur le chantier : ils donnent la position des réseaux et le numéro à appeler en cas d'endommagement." },
    { id: "NE-039", chapitre: "ne-bf-hf-terrassement",
      q: "Dans le marquage-piquetage, la couleur des réseaux électriques est :", options: ["Jaune", "Bleu", "Rouge", "Vert"], bonnes: [2],
      explication: "Rouge = électricité. Jaune = gaz et hydrocarbures, bleu = eau potable, vert = télécommunications." },
    { id: "NE-040", chapitre: "ne-bf-hf-terrassement",
      q: "Le marquage-piquetage :", options: ["Peut être effacé dès le premier jour", "Doit être maintenu pendant toute la durée du chantier", "Est réalisé avant le début des travaux"], bonnes: [1, 2],
      explication: "Le marquage-piquetage matérialise au sol la position des réseaux. Il est réalisé avant les travaux et entretenu pendant tout le chantier." },
    { id: "NE-041", chapitre: "ne-bf-hf-terrassement", situation: "En creusant avec une mini-pelle, vous découvrez un grillage plastique rouge dans la fouille.",
      q: "Vous :", options: ["Continuez à creuser avec le godet", "Arrêtez le terrassement mécanique et poursuivez à la main avec précaution"], bonnes: [1],
      explication: "Le grillage avertisseur rouge signale un câble électrique juste en dessous. On arrête le mécanique et on dégage manuellement, avec précaution." },
    { id: "NE-042", chapitre: "ne-bf-hf-terrassement",
      q: "L'absence de grillage avertisseur dans une fouille prouve qu'il n'y a pas de câble :", options: ["Vrai", "Faux"], bonnes: [1],
      explication: "Les réseaux anciens n'ont pas toujours de grillage, et un câble peut avoir été déplacé. On se fie aux plans, au marquage et à la prudence." },
    { id: "NE-043", chapitre: "ne-bf-hf-terrassement",
      q: "À proximité immédiate du tracé d'un câble, on utilise :", options: ["Un brise-roche hydraulique", "Des techniques douces, comme le terrassement manuel", "Une tarière mécanique"], bonnes: [1],
      explication: "Près du tracé et dans sa zone d'incertitude, on emploie des techniques douces (manuelles, aspiration) selon les recommandations de l'exploitant." },
    { id: "NE-044", chapitre: "ne-bf-hf-terrassement", situation: "Un câble enterré a été dégagé et gêne le passage d'une canalisation d'eau.",
      q: "Vous pouvez :", options: ["Le soulever et le décaler de quelques centimètres", "Le laisser en place, le protéger et prévenir le responsable"], bonnes: [1],
      explication: "Un câble découvert ne se déplace pas, ne se soulève pas et ne sert pas d'appui. Toute modification relève de l'exploitant du réseau." },
    { id: "NE-045", chapitre: "ne-bf-hf-terrassement", situation: "Le godet de votre pelle vient d'accrocher un câble électrique. Un arc s'est produit.",
      q: "Vous devez :", options: ["Prévenir l'exploitant du réseau", "Remblayer rapidement pour masquer le câble", "Arrêter immédiatement les travaux", "Faire éloigner les personnes"], bonnes: [0, 2, 3],
      explication: "On arrête, on fait éloigner et on balise, on prévient l'exploitant (numéro d'urgence du récépissé) et son responsable. On ne remblaie jamais une fouille où un câble a été endommagé." },
    { id: "NE-046", chapitre: "ne-bf-hf-terrassement", situation: "Votre engin est resté en contact avec un câble arraché. Il n'y a ni feu ni fumée.",
      q: "En principe, vous :", options: ["Restez dans la cabine sans toucher le sol", "Sautez de l'engin pour vous éloigner au plus vite"], bonnes: [0],
      explication: "L'engin peut être sous tension : en descendant, on toucherait à la fois l'engin et le sol. On reste dans la cabine sauf incendie, et personne ne s'approche." },
    { id: "NE-047", chapitre: "ne-bf-hf-terrassement", situation: "En terrassant, vous éraflez légèrement la gaine d'un câble enterré. Rien ne semble s'être passé.",
      q: "Vous :", options: ["Continuez, la gaine n'est qu'éraflée", "Arrêtez et signalez l'incident à l'exploitant"], bonnes: [1],
      explication: "Une gaine abîmée peut céder plus tard et provoquer un défaut, un incendie ou une électrisation. Tout endommagement, même léger, est signalé." },
    { id: "NE-048", chapitre: "ne-bf-hf-terrassement",
      q: "Les conducteurs d'engins qui travaillent à proximité des réseaux doivent détenir :", options: ["Une AIPR (autorisation d'intervention à proximité des réseaux)", "Un permis poids lourd"], bonnes: [0],
      explication: "L'AIPR, délivrée par l'employeur, est exigée des personnes qui conduisent les engins ou encadrent les travaux à proximité des réseaux." },
    { id: "NE-049", chapitre: "ne-bf-hf-terrassement",
      q: "Un terrassier habilité BF peut réparer un câble basse tension qu'il a endommagé :", options: ["Oui, s'il est habilité BF", "Non, le câble relève de l'exploitant du réseau"], bonnes: [1],
      explication: "BF et HF concernent uniquement des travaux d'ordre non électrique. La réparation d'un câble relève de l'exploitant et d'électriciens habilités." },
    { id: "NE-050", chapitre: "ne-bf-hf-terrassement",
      q: "Après l'endommagement d'un câble, les travaux reprennent :", options: ["Dès que l'arc s'est arrêté", "Après accord de l'exploitant du réseau"], bonnes: [1],
      explication: "Seul l'exploitant peut dire si le câble est hors tension et sécurisé. On ne reprend pas avant son accord." },
    { id: "NE-051", chapitre: "ne-charge-chantier-voisinage",
      q: "À la fin du chantier, le chargé de chantier :", options: ["Rend compte au chargé d'exploitation", "Fait retirer le personnel et le matériel", "Vérifie qu'aucun outil n'a été oublié", "Retire lui-même les nappes isolantes posées par l'électricien"], bonnes: [0, 1, 2],
      explication: "Il libère la zone, contrôle les oublis et rend compte. Les protections posées par l'électricien sont retirées par une personne habilitée, pas par le chargé de chantier." },
    { id: "NE-052", chapitre: "ne-bf-hf-terrassement",
      q: "Les documents à avoir sur le chantier de terrassement sont notamment :", options: ["Le numéro d'urgence de l'exploitant", "Le titre de propriété du terrain", "Les récépissés des DICT", "Les plans des réseaux"], bonnes: [0, 2, 3],
      explication: "Récépissés, plans et numéro d'urgence de l'exploitant doivent être disponibles sur le chantier pour travailler et réagir en cas d'endommagement." }
  );
})();

/* ───────────── Thème BSBE — BS et BE Manœuvre ───────────── */
(function () {
  const P = window.PERMIS_COURS["elec"] = window.PERMIS_COURS["elec"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "bs-intervention-elementaire",
      theme: "BSBE",
      parcours: ["bs", "bsbe"],
      titre: "BS : l'intervention BT élémentaire",
      duree: 25,
      objectifs: [
        "Connaître la liste fermée des opérations autorisées au BS",
        "Connaître les limites du BS : circuits terminaux, tension, intensité, section",
        "Savoir ce qui est interdit au chargé d'intervention élémentaire",
        "Réaliser une mise hors tension pour intervention : séparation, condamnation, VAT",
        "Remettre en service après l'intervention"
      ],
      sections: [
        {
          titre: "Qui est le chargé d'intervention élémentaire ?",
          contenu: `<p>L'habilitation <strong>BS</strong> s'adresse à des personnes qui <strong>ne sont pas électriciennes de métier</strong> mais qui doivent réaliser des opérations électriques simples dans le cadre de leur travail : agent de maintenance de bâtiment, gardien d'immeuble, plombier-chauffagiste, technicien d'entretien, agent des services techniques.</p>
<p>Le titulaire du BS est un <strong>chargé d'intervention élémentaire</strong>. Il :</p>
<ul>
<li>réalise seul des interventions de <strong>courte durée</strong>, sur des installations <strong>basse tension</strong> ;</li>
<li>travaille <strong>hors tension</strong>, après avoir lui-même mis le circuit hors tension ;</li>
<li>assure <strong>sa propre sécurité</strong> ;</li>
<li>n'a <strong>pas d'exécutant</strong> sous ses ordres ;</li>
<li>ne travaille pas au <strong>voisinage renforcé</strong> (zone 4) d'autres pièces nues sous tension.</li>
</ul>
<p>Le BS n'est pas une habilitation d'électricien : c'est une habilitation <strong>limitée</strong> à une <strong>liste fermée</strong> d'opérations.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> BS = basse tension, intervention élémentaire, hors tension, seul, sur une liste fermée d'opérations.</div>`
        },
        {
          titre: "Les opérations autorisées",
          contenu: `<p>Le chargé d'intervention élémentaire peut réaliser :</p>
<ul>
<li>le <strong>remplacement à l'identique</strong> :
<ul>
<li>d'un <strong>fusible</strong> BT ;</li>
<li>d'une <strong>lampe</strong> ou d'un accessoire d'appareil d'éclairage ;</li>
<li>d'un <strong>socle de prise de courant</strong> ;</li>
<li>d'un <strong>interrupteur</strong> ;</li>
</ul></li>
<li>le <strong>raccordement</strong> d'un matériel électrique (chauffe-eau, convecteur, volet roulant, luminaire…) sur un <strong>circuit en attente</strong> : un circuit déjà installé, protégé, laissé hors tension et terminé par un dispositif de connexion (bornier) prévu à cet effet ;</li>
<li>le <strong>réarmement</strong> d'un dispositif de protection.</li>
</ul>
<p>Pour un <strong>fusible</strong>, le remplacement se fait avec un fusible de même type (cartouche, taille) et de même calibre, porte-fusible ouvert et circuit hors tension. On ne remplace jamais un fusible par un fil, un trombone ou une pièce métallique : le circuit ne serait plus protégé et l'échauffement pourrait provoquer un incendie.</p>
<p>« À l'identique » signifie : même type, mêmes caractéristiques (calibre, tension, nombre de pôles, présence de la terre), même emplacement. Remplacer un fusible de 10 A par un fusible de 16 A n'est pas un remplacement à l'identique : c'est une modification, interdite au BS.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une prise 16 A avec terre est cassée dans un bureau. Le BS met le circuit hors tension, vérifie l'absence de tension, puis remplace la prise par une prise 16 A avec terre, au même endroit, raccordée de la même façon.</div>`
        },
        {
          titre: "Les limites du BS",
          contenu: `<p>Le BS ne s'exerce que sur des <strong>circuits terminaux</strong> (ceux qui alimentent directement les prises, l'éclairage, les appareils), et dans des limites précises. Les valeurs couramment retenues dans les formations sont les suivantes ; seules comptent celles inscrites sur votre titre et dans les instructions de votre employeur.</p>
<table>
<thead><tr><th>Limite</th><th>Valeur couramment retenue</th></tr></thead>
<tbody>
<tr><td>Tension</td><td>jusqu'à 400 V en alternatif (600 V en continu)</td></tr>
<tr><td>Intensité (calibre de la protection du circuit)</td><td>jusqu'à 32 A en alternatif (16 A en continu)</td></tr>
<tr><td>Section des conducteurs</td><td>jusqu'à 6 mm² en cuivre (10 mm² en aluminium)</td></tr>
</tbody>
</table>
<p>Au-delà, ou s'il s'agit d'un circuit de distribution (alimentation d'un tableau divisionnaire, colonne montante), l'opération relève d'un électricien habilité.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le BS peut raccorder un appareil sur un circuit <strong>en attente</strong>, mais il ne peut pas <strong>créer</strong> un circuit, prolonger une ligne, ajouter une prise ou modifier un tableau.</div>`
        },
        {
          titre: "Ce qui est interdit au BS",
          contenu: `<p>Le chargé d'intervention élémentaire ne doit <strong>jamais</strong> :</p>
<ul>
<li>travailler <strong>sous tension</strong>, même « juste pour une lampe » ;</li>
<li>réaliser une opération qui n'est <strong>pas dans la liste</strong> : modification, extension, création de circuit, ajout d'une prise, remplacement par un modèle différent ;</li>
<li>faire de la <strong>recherche de panne</strong>, des mesures, des essais : cela relève du BR ou du BE ;</li>
<li>intervenir sur un <strong>circuit de distribution</strong> ou au-delà des limites de son titre ;</li>
<li>intervenir en <strong>voisinage renforcé</strong> d'autres pièces nues sous tension ;</li>
<li><strong>consigner</strong> une installation (c'est le rôle du chargé de consignation) ;</li>
<li>remplacer un fusible par un fusible de <strong>calibre supérieur</strong>, le « ponter » avec un fil, ou réarmer sans fin une protection qui déclenche.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> si une protection déclenche de nouveau ou si un fusible neuf fond aussitôt, il y a un défaut sur le circuit. Le BS n'insiste pas : il laisse le circuit hors tension et fait appel à un électricien.</div>`
        },
        {
          titre: "La mise hors tension pour intervention",
          contenu: `<p>Avant toute intervention, le BS réalise lui-même une <strong>mise hors tension pour intervention BT élémentaire</strong>. Ce n'est pas une consignation complète, mais elle suit la même logique :</p>
<ol>
<li><strong>Identifier</strong> le circuit sur lequel on va intervenir (repérage au tableau, plan, étiquettes).</li>
<li><strong>Séparer</strong> : ouvrir l'appareil de séparation du circuit (disjoncteur, interrupteur-sectionneur, retrait du fusible) ou débrancher la fiche de l'appareil. Un simple interrupteur d'éclairage ne suffit pas.</li>
<li><strong>Condamner</strong> si possible l'appareil de séparation en position ouverte : cadenas, verrou, pancarte, fusible gardé sur soi, fiche gardée sous son contrôle.</li>
<li><strong>Vérifier l'absence de tension</strong> au plus près du point d'intervention, avec un <strong>VAT</strong> dont on contrôle le fonctionnement avant et après.</li>
</ol>
<p>Ce n'est qu'après ces étapes que l'intervention peut commencer.</p>
<p><strong>Après l'intervention</strong>, le BS remet en place les capots et protections, retire ses outils, retire la condamnation, remet sous tension et vérifie le bon fonctionnement.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> couper l'interrupteur mural d'un luminaire ne suffit pas pour changer la douille : l'interrupteur peut couper le neutre au lieu de la phase, et quelqu'un peut le rallumer. On sépare au tableau et on vérifie avec le VAT.</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> identifier, séparer, condamner, VAT (vérifié avant et après). Sans VAT, le circuit est réputé sous tension.</div>`
        }
      ],
      points_cles: [
        "BS : intervention élémentaire en basse tension, seul, hors tension, sans exécutant.",
        "Liste fermée : remplacement à l'identique de fusible, lampe, prise, interrupteur ; raccordement sur circuit en attente ; réarmement.",
        "« À l'identique » : même type, même calibre, même emplacement.",
        "Uniquement sur circuits terminaux, dans les limites de tension, d'intensité et de section du titre.",
        "Interdits : travail sous tension, modification, création de circuit, recherche de panne, consignation.",
        "Mise hors tension : identifier, séparer, condamner si possible, vérifier l'absence de tension.",
        "Un interrupteur d'éclairage ne suffit pas à séparer un circuit.",
        "Une protection qui redéclenche signale un défaut : on fait appel à un électricien."
      ]
    },
    {
      id: "be-manoeuvre",
      theme: "BSBE",
      parcours: ["bem", "bsbe"],
      titre: "BE Manœuvre : manœuvrer en sécurité",
      duree: 20,
      objectifs: [
        "Savoir ce qu'est une manœuvre et ce que permet l'habilitation BE Manœuvre",
        "Distinguer manœuvre d'exploitation, manœuvre d'urgence et consignation",
        "Réarmer correctement un dispositif de protection",
        "Connaître les limites, les documents et les interdits du BE Manœuvre"
      ],
      sections: [
        {
          titre: "Qu'est-ce qu'une manœuvre ?",
          contenu: `<p>Une <strong>manœuvre</strong> est une action sur un <strong>organe de commande</strong> (interrupteur, disjoncteur, bouton-poussoir, commutateur) qui modifie l'<strong>état électrique</strong> d'une installation ou d'un équipement, <strong>sans accéder aux pièces nues</strong>.</p>
<p>L'habilitation <strong>BE Manœuvre</strong> (basse tension, opération spécifique, attribut Manœuvre) permet de réaliser :</p>
<ul>
<li>des <strong>manœuvres de commande</strong> : mise en marche ou arrêt d'un équipement, d'un éclairage, d'une ventilation ;</li>
<li>la <strong>mise hors tension</strong> et la <strong>remise sous tension</strong> d'un équipement, par exemple à la demande d'une équipe qui doit intervenir ou pour l'exploitation ;</li>
<li>le <strong>réarmement</strong> d'un dispositif de protection (disjoncteur, relais thermique) qui a déclenché.</li>
</ul>
<p>Le BE Manœuvre est destiné à des personnes qui exploitent des installations sans être électriciennes : agent de production, technicien de maintenance, agent de sécurité, gardien, personnel d'exploitation d'un bâtiment.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la manœuvre se fait sur un appareil prévu pour cela, de l'extérieur, <strong>enveloppe fermée</strong>. Elle ne donne jamais accès aux pièces nues.</div>`
        },
        {
          titre: "Manœuvre d'exploitation, manœuvre d'urgence, consignation",
          contenu: `<table>
<thead><tr><th>Type</th><th>But</th><th>Qui peut la faire ?</th></tr></thead>
<tbody>
<tr><td><strong>Manœuvre d'exploitation</strong></td><td>Modifier l'état d'un équipement dans le fonctionnement normal : marche, arrêt, mise hors ou sous tension, réarmement</td><td>Personne habilitée BE Manœuvre (ou habilitation supérieure qui l'inclut), sur les installations de son titre</td></tr>
<tr><td><strong>Manœuvre d'urgence</strong></td><td>Couper l'énergie face à un danger immédiat (accident, incendie)</td><td>Toute personne, sur les dispositifs d'arrêt ou de coupure d'urgence prévus</td></tr>
<tr><td><strong>Consignation</strong></td><td>Mettre un ouvrage en sécurité pour des travaux : séparation, condamnation, identification, VAT, mise à la terre et en court-circuit si nécessaire</td><td>Chargé de consignation (BC, HC) uniquement</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> mettre un équipement hors tension n'est pas le consigner. Le BE Manœuvre peut couper un départ, mais il ne délivre pas d'attestation de consignation et ne garantit pas la sécurité d'une équipe de travaux.</div>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> dans une usine, un agent BE Manœuvre reçoit du chargé d'exploitation l'ordre de mettre hors tension la ventilation de l'atelier 2 pour la nuit. Il manœuvre le disjoncteur indiqué, vérifie l'arrêt de la ventilation et rend compte.</div>`
        },
        {
          titre: "Réarmer un dispositif de protection",
          contenu: `<p>Un disjoncteur ou un relais qui déclenche signale une <strong>anomalie</strong> : surcharge, court-circuit, défaut d'isolement (pour un différentiel). Le réarmer sans réfléchir peut provoquer un arc, un incendie ou une électrisation.</p>
<p>La bonne méthode :</p>
<ol>
<li><strong>Identifier</strong> la protection qui a déclenché et le circuit concerné.</li>
<li><strong>Rechercher une cause évidente</strong> sans ouvrir aucune enveloppe : appareil fumant, odeur de brûlé, câble écrasé, eau sur un appareil, trop d'appareils branchés.</li>
<li>Si une cause est visible, <strong>supprimer la cause</strong> si c'est simple (débrancher l'appareil suspect) ou ne pas réarmer et signaler.</li>
<li><strong>Réarmer une seule fois</strong>, en se tenant de côté par rapport à l'appareil et en portant les EPI prévus par les consignes.</li>
<li>Si la protection <strong>déclenche à nouveau</strong>, ne pas insister : laisser hors tension et <strong>faire appel à un électricien</strong>.</li>
</ol>
<div class="encart" data-type="danger"><strong>Attention :</strong> il est interdit de bloquer un disjoncteur en position fermée, de modifier son réglage ou de le remplacer par un calibre plus élevé pour éviter qu'il ne déclenche.</div>`
        },
        {
          titre: "Limites, documents et interdits",
          contenu: `<p>Le titulaire du BE Manœuvre agit dans un cadre précis :</p>
<ul>
<li>il manœuvre uniquement les <strong>installations et appareils désignés</strong> dans son titre et ses consignes ;</li>
<li>il agit sur <strong>ordre</strong> ou selon des <strong>instructions</strong> du chargé d'exploitation (consigne écrite, fiche de manœuvre, ordre oral confirmé selon les règles de l'établissement) ;</li>
<li>il <strong>rend compte</strong> des manœuvres effectuées et des anomalies constatées ;</li>
<li>il utilise les <strong>EPI</strong> prévus par les consignes (gants isolants, écran facial) quand la manœuvre présente un risque d'arc.</li>
</ul>
<p>Il lui est <strong>interdit</strong> :</p>
<ul>
<li>d'<strong>ouvrir</strong> une enveloppe, de retirer un capot, d'accéder aux pièces nues ;</li>
<li>de <strong>remplacer</strong> un fusible, une lampe, une prise (c'est le BS) ;</li>
<li>de faire des <strong>mesures</strong>, des essais, de la recherche de panne ;</li>
<li>de <strong>consigner</strong> ou de délivrer une attestation de consignation ;</li>
<li>de <strong>retirer un cadenas</strong> ou une pancarte de condamnation qu'il n'a pas posé ;</li>
<li>de manœuvrer un appareil <strong>sans y être autorisé</strong> ou hors des installations de son titre.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un appareil portant un cadenas et une pancarte « Ne pas manœuvrer » ne se manœuvre pas, même si l'on est habilité BE Manœuvre et qu'on en a reçu l'ordre oral. On en réfère au chargé d'exploitation.</div>`
        },
        {
          titre: "Préparer et réaliser une manœuvre",
          contenu: `<p>Une manœuvre bien faite suit toujours les mêmes étapes :</p>
<ol>
<li><strong>Recevoir l'ordre</strong> ou consulter l'instruction : quel appareil, quelle action (ouvrir, fermer, réarmer), à quel moment, pour qui.</li>
<li><strong>Identifier l'appareil</strong> sans ambiguïté : repère sur la porte de l'armoire, étiquette, schéma, plan. En cas de doute, on ne manœuvre pas et on demande.</li>
<li><strong>Vérifier l'état</strong> de l'appareil et de son environnement : enveloppe fermée et en bon état, pas de trace de brûlure, pas d'odeur, pas d'eau au sol, pas de condamnation posée.</li>
<li><strong>S'équiper</strong> des EPI prévus et se placer correctement, de côté, sur un sol sec ou un tapis isolant si la consigne le demande.</li>
<li><strong>Manœuvrer franchement</strong>, d'un geste net, sans hésiter à mi-course.</li>
<li><strong>Contrôler le résultat</strong> : position de l'appareil, voyant, arrêt ou démarrage effectif de l'équipement.</li>
<li><strong>Rendre compte</strong> au donneur d'ordre et noter la manœuvre si la consigne le prévoit.</li>
</ol>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un agent BE Manœuvre doit remettre sous tension le départ « Chambre froide » après une coupure. Il repère l'étiquette du disjoncteur, constate que l'armoire est fermée et sèche, se place de côté, ferme le disjoncteur d'un geste franc, vérifie que le compresseur redémarre et prévient le chargé d'exploitation.</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> ordre, identification, vérification, équipement, manœuvre, contrôle, compte rendu.</div>`
        }
      ],
      points_cles: [
        "Manœuvre : action sur un organe de commande, enveloppe fermée, sans accès aux pièces nues.",
        "BE Manœuvre : marche-arrêt, mise hors et sous tension d'un équipement, réarmement d'une protection.",
        "La manœuvre d'urgence est permise à tous ; la consignation est réservée au chargé de consignation.",
        "Mettre hors tension n'est pas consigner.",
        "Réarmer une seule fois, après avoir recherché une cause évidente ; s'il redéclenche, appeler un électricien.",
        "Ne jamais bloquer, dérégler ou surcalibrer une protection.",
        "Le BE Manœuvre agit sur ordre, sur les installations de son titre, et rend compte.",
        "Interdit : ouvrir une enveloppe, remplacer un fusible, mesurer, consigner, toucher à une condamnation."
      ]
    }
  );

  P.questions.push(
    { id: "BSBE-001", chapitre: "bs-intervention-elementaire",
      q: "Le titulaire de l'habilitation BS est :", options: ["Un chargé de travaux", "Un chargé d'intervention élémentaire", "Un chargé de consignation"], bonnes: [1],
      explication: "BS = intervention BT élémentaire. Le titulaire est chargé d'intervention élémentaire : il intervient seul, hors tension, sur une liste fermée d'opérations." },
    { id: "BSBE-002", chapitre: "bs-intervention-elementaire",
      q: "Quelles opérations sont autorisées au BS ?", options: ["Remplacer à l'identique un fusible", "Remplacer à l'identique un socle de prise", "Ajouter une prise supplémentaire sur un circuit", "Remplacer une lampe"], bonnes: [0, 1, 3],
      explication: "Le BS peut remplacer à l'identique fusibles, lampes, prises et interrupteurs. Ajouter une prise est une modification de l'installation, réservée aux électriciens." },
    { id: "BSBE-003", chapitre: "bs-intervention-elementaire", situation: "Un convecteur neuf doit être branché sur un circuit installé par un électricien, protégé, hors tension et terminé par un bornier.",
      q: "Le BS peut-il raccorder ce convecteur ?", options: ["Oui, c'est un raccordement sur un circuit en attente", "Non, c'est réservé au BR"], bonnes: [0],
      explication: "Le raccordement d'un matériel sur un circuit en attente, protégé et équipé d'un dispositif de connexion, fait partie des opérations autorisées au BS." },
    { id: "BSBE-004", chapitre: "bs-intervention-elementaire", situation: "Un fusible de 10 A a fondu. Le magasin n'a que des fusibles de 16 A du même type.",
      q: "Le BS peut-il mettre un fusible de 16 A ?", options: ["Oui, il protège mieux", "Non, ce n'est pas un remplacement à l'identique"], bonnes: [1],
      explication: "Un calibre supérieur ne protège plus correctement le circuit (risque d'échauffement et d'incendie). Le BS remplace uniquement à l'identique." },
    { id: "BSBE-005", chapitre: "bs-intervention-elementaire",
      q: "Le BS intervient :", options: ["Sous tension si l'opération est rapide", "Hors tension"], bonnes: [1],
      explication: "Le BS travaille toujours hors tension, après une mise hors tension pour intervention qu'il réalise lui-même." },
    { id: "BSBE-006", chapitre: "bs-intervention-elementaire",
      q: "Le chargé d'intervention élémentaire peut-il avoir un exécutant sous ses ordres ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "Le BS intervient seul et assure sa propre sécurité. Il n'encadre pas d'exécutant." },
    { id: "BSBE-007", chapitre: "bs-intervention-elementaire",
      q: "Le BS intervient sur :", options: ["Des circuits terminaux", "Des circuits de distribution alimentant des tableaux", "Des installations haute tension"], bonnes: [0],
      explication: "Le BS est limité aux circuits terminaux basse tension (prises, éclairage, appareils). Les circuits de distribution et la HT relèvent d'électriciens habilités." },
    { id: "BSBE-008", chapitre: "bs-intervention-elementaire", situation: "Un collègue demande au BS de prolonger une ligne pour installer une prise dans un nouveau bureau.",
      q: "Le BS peut-il le faire ?", options: ["Oui, s'il coupe le courant", "Non, c'est une création ou modification de circuit"], bonnes: [1],
      explication: "Créer ou prolonger un circuit dépasse la liste fermée du BS. C'est un travail d'électricien." },
    { id: "BSBE-009", chapitre: "bs-intervention-elementaire",
      q: "« Remplacer à l'identique » signifie remplacer par un élément :", options: ["De même type et de mêmes caractéristiques", "Au même emplacement", "D'une marque obligatoirement identique"], bonnes: [0, 1],
      explication: "À l'identique : même type, même calibre, même tension, même nombre de pôles, au même endroit. La marque peut différer si les caractéristiques sont les mêmes." },
    { id: "BSBE-010", chapitre: "bs-intervention-elementaire", situation: "Une prise 16 A avec terre est cassée. Le BS n'a qu'une prise sans terre.",
      q: "Il peut l'installer :", options: ["Oui, provisoirement", "Non"], bonnes: [1],
      explication: "Une prise sans terre n'est pas identique et supprimerait la protection des appareils de classe I contre les contacts indirects. On remplace par une prise avec terre." },
    { id: "BSBE-011", chapitre: "bs-intervention-elementaire",
      q: "Dans l'ordre, la mise hors tension pour intervention BT élémentaire comprend :", options: ["Vérification d'absence de tension, séparation, condamnation", "Séparation, condamnation, vérification d'absence de tension", "Condamnation, intervention, séparation"], bonnes: [1],
      explication: "On identifie le circuit, on le sépare, on condamne si possible l'appareil de séparation, puis on vérifie l'absence de tension au plus près du point d'intervention." },
    { id: "BSBE-012", chapitre: "bs-intervention-elementaire", situation: "Pour changer la douille d'un plafonnier, un agent BS éteint simplement l'interrupteur mural.",
      q: "Cette mise hors tension est-elle suffisante ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "L'interrupteur peut couper le neutre et laisser la phase sur la douille ; quelqu'un peut aussi le rallumer. On sépare au tableau, on condamne si possible et on vérifie avec un VAT." },
    { id: "BSBE-013", chapitre: "bs-intervention-elementaire",
      q: "Pour séparer un circuit avant une intervention BS, on peut :", options: ["Débrancher la fiche de l'appareil", "Ouvrir le disjoncteur du circuit", "Appuyer sur l'interrupteur de l'appareil", "Retirer le fusible du circuit"], bonnes: [0, 1, 3],
      explication: "Disjoncteur, fusible retiré ou fiche débranchée assurent la séparation. L'interrupteur d'un appareil n'assure pas une séparation fiable." },
    { id: "BSBE-014", chapitre: "bs-intervention-elementaire", situation: "Le BS a retiré le fusible du circuit sur lequel il va intervenir. Le tableau est dans un couloir fréquenté.",
      q: "Pour condamner la séparation, il peut :", options: ["Laisser le fusible posé sur le dessus du tableau", "Poser un cadenas ou une pancarte", "Garder le fusible sur lui"], bonnes: [1, 2],
      explication: "Garder le fusible sur soi ou condamner par cadenas et pancarte empêche une remise sous tension par un tiers. Un fusible laissé sur le tableau peut être remis en place." },
    { id: "BSBE-015", chapitre: "bs-intervention-elementaire", situation: "Le BS a ouvert le disjoncteur du circuit. Il n'a pas de VAT avec lui.",
      q: "Il peut commencer à démonter la prise :", options: ["Oui, puisque le disjoncteur est ouvert", "Non, il doit d'abord vérifier l'absence de tension"], bonnes: [1],
      explication: "Une erreur d'identification du circuit ou un retour de tension sont possibles. Sans vérification d'absence de tension, le circuit est réputé sous tension." },
    { id: "BSBE-016", chapitre: "bs-intervention-elementaire",
      q: "La vérification d'absence de tension se fait :", options: ["Au plus près du point d'intervention", "Au compteur du bâtiment uniquement"], bonnes: [0],
      explication: "On vérifie au plus près du point d'intervention, car c'est là qu'on va toucher les conducteurs. Une vérification éloignée ne garantit pas l'absence de tension au point de travail." },
    { id: "BSBE-017", chapitre: "bs-intervention-elementaire",
      q: "Avant et après la vérification d'absence de tension, le BS doit :", options: ["Régler le calibre du multimètre", "Vérifier le bon fonctionnement du VAT"], bonnes: [1],
      explication: "Le VAT est contrôlé avant et après la mesure pour être sûr qu'il fonctionne. Un multimètre ne remplace pas un VAT." },
    { id: "BSBE-018", chapitre: "bs-intervention-elementaire",
      q: "La VAT d'une prise monophasée se fait :", options: ["Entre neutre et terre", "Entre phase et neutre", "Entre phase et terre"], bonnes: [0, 1, 2],
      explication: "On vérifie l'absence de tension entre tous les conducteurs actifs (y compris le neutre) et entre chacun d'eux et la terre." },
    { id: "BSBE-019", chapitre: "bs-intervention-elementaire", situation: "Le BS vient de remplacer un fusible. Dès la remise sous tension, le fusible neuf fond.",
      q: "Il doit :", options: ["Mettre un fusible de calibre supérieur", "Laisser le circuit hors tension et faire appel à un électricien", "Recommencer jusqu'à ce que ça tienne"], bonnes: [1],
      explication: "Un fusible neuf qui fond aussitôt révèle un défaut (court-circuit, surcharge). La recherche de panne n'est pas du ressort du BS : on fait appel à un électricien." },
    { id: "BSBE-020", chapitre: "bs-intervention-elementaire",
      q: "Le BS peut-il réaliser une recherche de panne avec des mesures ?", options: ["Oui", "Non, cela relève notamment du BR"], bonnes: [1],
      explication: "Mesures, essais et recherche de panne sont des interventions générales (BR) ou des opérations spécifiques (BE Mesurage). Le BS en est exclu." },
    { id: "BSBE-021", chapitre: "bs-intervention-elementaire",
      q: "Le BS peut-il consigner une installation ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "Le BS réalise une mise hors tension pour intervention, pas une consignation. La consignation est réservée au chargé de consignation (BC, HC)." },
    { id: "BSBE-022", chapitre: "bs-intervention-elementaire", situation: "Pour remplacer un interrupteur, le BS devrait travailler à quelques centimètres de bornes nues d'un autre circuit qui reste sous tension.",
      q: "Il peut :", options: ["Travailler en faisant attention", "Faire mettre hors tension ou protéger ces bornes, sinon ne pas intervenir"], bonnes: [1],
      explication: "Le BS n'intervient pas au voisinage renforcé de pièces nues sous tension. Il faut supprimer ce voisinage ou faire appel à un électricien habilité." },
    { id: "BSBE-023", chapitre: "bs-intervention-elementaire",
      q: "Après une intervention BS, dans l'ordre :", options: ["Remettre les capots, retirer la condamnation, remettre sous tension, vérifier le fonctionnement", "Remettre sous tension, puis remettre les capots", "Retirer la condamnation, puis remettre les capots sous tension"], bonnes: [0],
      explication: "On remet d'abord tout en sécurité (capots, outils retirés), puis on retire la condamnation, on remet sous tension et on vérifie que tout fonctionne." },
    { id: "BSBE-024", chapitre: "bs-intervention-elementaire",
      q: "Le BS peut-il réarmer un dispositif de protection ?", options: ["Oui", "Non"], bonnes: [0],
      explication: "Le réarmement d'un dispositif de protection fait partie des opérations accessibles au BS. Si la protection déclenche de nouveau, on fait appel à un électricien." },
    { id: "BSBE-025", chapitre: "bs-intervention-elementaire", situation: "Un agent BS doit remplacer la lampe d'un luminaire dans un bureau alimenté en 230 V, circuit protégé par un disjoncteur de 10 A.",
      q: "Cette opération entre-t-elle dans le champ du BS ?", options: ["Oui", "Non"], bonnes: [0],
      explication: "Remplacer une lampe sur un circuit terminal 230 V protégé en 10 A est une intervention élémentaire typique, à réaliser après mise hors tension." },
    { id: "BSBE-026", chapitre: "bs-intervention-elementaire",
      q: "Le BS peut-il remplacer un interrupteur simple par un variateur ?", options: ["Oui, c'est un appareil de commande", "Non, ce n'est pas un remplacement à l'identique"], bonnes: [1],
      explication: "Un variateur n'a pas les mêmes caractéristiques qu'un interrupteur. Remplacer par un autre type d'appareil est une modification." },
    { id: "BSBE-027", chapitre: "bs-intervention-elementaire",
      q: "Le circuit en attente sur lequel le BS peut raccorder un appareil doit être :", options: ["Sous tension pendant le raccordement", "Protégé contre les surintensités", "Équipé d'un dispositif de connexion (bornier)"], bonnes: [1, 2],
      explication: "Le circuit en attente est déjà installé et protégé, terminé par un bornier. Le raccordement se fait hors tension, après séparation, condamnation et VAT." },
    { id: "BSBE-028", chapitre: "bs-intervention-elementaire",
      q: "Le BS assure :", options: ["La sécurité d'une équipe de travaux", "Sa propre sécurité"], bonnes: [1],
      explication: "Le chargé d'intervention élémentaire intervient seul et assure sa propre sécurité. Il ne dirige pas d'équipe." },
    { id: "BSBE-029", chapitre: "be-manoeuvre",
      q: "Une manœuvre, c'est :", options: ["L'ouverture d'une armoire pour resserrer une borne", "Le remplacement d'un fusible", "Une action sur un organe de commande qui modifie l'état électrique d'un équipement"], bonnes: [2],
      explication: "La manœuvre consiste à agir sur un appareil de commande (interrupteur, disjoncteur), enveloppe fermée. Resserrer une borne ou remplacer un fusible n'en est pas une." },
    { id: "BSBE-030", chapitre: "be-manoeuvre",
      q: "L'habilitation BE Manœuvre permet :", options: ["De mettre hors tension ou sous tension un équipement", "De réarmer un dispositif de protection", "De remplacer une prise", "De mettre en marche ou arrêter un équipement"], bonnes: [0, 1, 3],
      explication: "Le BE Manœuvre couvre les manœuvres de commande, la mise hors et sous tension d'un équipement et le réarmement. Remplacer une prise relève du BS." },
    { id: "BSBE-031", chapitre: "be-manoeuvre", situation: "Un agent habilité BE Manœuvre doit réarmer un disjoncteur placé à l'intérieur d'une armoire dont il faudrait retirer le capot pour y accéder.",
      q: "Il peut retirer le capot :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Le BE Manœuvre agit enveloppe fermée, sans accéder aux pièces nues. Retirer un capot est interdit : il faut faire appel à une personne habilitée pour cela." },
    { id: "BSBE-032", chapitre: "be-manoeuvre", situation: "Un disjoncteur a déclenché. L'agent BE Manœuvre constate qu'une bouilloire branchée sur le circuit fume.",
      q: "Il :", options: ["Signale l'appareil défectueux", "Débranche la bouilloire avant d'envisager de réarmer", "Réarme immédiatement"], bonnes: [0, 1],
      explication: "On supprime la cause évidente (débrancher l'appareil défectueux) avant de réarmer, et on signale l'anomalie." },
    { id: "BSBE-033", chapitre: "be-manoeuvre", situation: "L'agent réarme un disjoncteur, qui déclenche de nouveau aussitôt.",
      q: "Il doit :", options: ["Laisser hors tension et faire appel à un électricien", "Réarmer encore plusieurs fois", "Bloquer le levier en position fermée"], bonnes: [0],
      explication: "Un déclenchement répété signale un défaut persistant. On n'insiste pas et on ne bloque jamais une protection : on fait appel à un électricien." },
    { id: "BSBE-034", chapitre: "be-manoeuvre",
      q: "Une protection qui déclenche régulièrement peut être remplacée par un modèle de calibre supérieur par le BE Manœuvre :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Modifier le calibre ou le réglage d'une protection est interdit : elle ne protégerait plus le circuit, avec un risque d'incendie." },
    { id: "BSBE-035", chapitre: "be-manoeuvre",
      q: "En cas d'incendie ou d'accident, qui peut actionner un bouton d'arrêt d'urgence ?", options: ["Toute personne", "Seulement le BE Manœuvre"], bonnes: [0],
      explication: "Les dispositifs de coupure d'urgence sont prévus pour être actionnés par toute personne face à un danger immédiat." },
    { id: "BSBE-036", chapitre: "be-manoeuvre",
      q: "Le BE Manœuvre peut-il consigner un équipement pour une équipe de travaux ?", options: ["Oui", "Non, c'est le rôle du chargé de consignation"], bonnes: [1],
      explication: "Mettre hors tension n'est pas consigner. La consignation et l'attestation de consignation relèvent du chargé de consignation (BC, HC)." },
    { id: "BSBE-037", chapitre: "be-manoeuvre", situation: "Un agent BE Manœuvre reçoit l'ordre oral de remettre sous tension un départ. L'appareil porte un cadenas et une pancarte « Ne pas manœuvrer ».",
      q: "Il :", options: ["Coupe le cadenas et manœuvre", "Ne manœuvre pas et en réfère au chargé d'exploitation"], bonnes: [1],
      explication: "Une condamnation protège une personne qui travaille sur l'ouvrage. Seule la personne qui l'a posée peut la retirer : on en réfère au chargé d'exploitation." },
    { id: "BSBE-038", chapitre: "be-manoeuvre",
      q: "Le BE Manœuvre réalise ses manœuvres :", options: ["Sur ordre ou selon les instructions du chargé d'exploitation", "Sur les installations désignées dans son titre", "Sur n'importe quelle installation de l'entreprise"], bonnes: [0, 1],
      explication: "Il agit dans le cadre fixé par son titre et sur ordre ou instructions du chargé d'exploitation. Il ne manœuvre pas en dehors de ce cadre." },
    { id: "BSBE-039", chapitre: "be-manoeuvre",
      q: "Après avoir effectué une manœuvre, l'agent BE Manœuvre :", options: ["N'a rien à signaler", "Rend compte de la manœuvre effectuée", "Signale les anomalies constatées"], bonnes: [1, 2],
      explication: "Il rend compte au chargé d'exploitation des manœuvres réalisées et des anomalies observées." },
    { id: "BSBE-040", chapitre: "be-manoeuvre",
      q: "Lors du réarmement d'un disjoncteur, on se place :", options: ["De côté par rapport à l'appareil", "Le visage face à l'appareil, au plus près"], bonnes: [0],
      explication: "En cas d'arc à la fermeture sur un défaut, se tenir de côté limite l'exposition du visage et du corps. On porte les EPI prévus par les consignes." },
    { id: "BSBE-041", chapitre: "be-manoeuvre",
      q: "Le BE Manœuvre peut-il remplacer un fusible ?", options: ["Oui", "Non, cela relève du BS"], bonnes: [1],
      explication: "Le remplacement à l'identique d'un fusible est une intervention élémentaire (BS). Le BE Manœuvre ne fait que des manœuvres." },
    { id: "BSBE-042", chapitre: "be-manoeuvre",
      q: "Le BE Manœuvre peut-il faire des mesures pour trouver l'origine d'un déclenchement ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "Les mesures relèvent du BE Mesurage, du BR ou d'électriciens. Le BE Manœuvre se limite aux manœuvres." },
    { id: "BSBE-043", chapitre: "be-manoeuvre", situation: "À la demande du chargé d'exploitation, un agent BE Manœuvre met hors tension l'éclairage d'un parking pour la nuit.",
      q: "Cette opération est :", options: ["Une consignation", "Une manœuvre d'exploitation", "Une intervention de dépannage"], bonnes: [1],
      explication: "Mettre hors tension un équipement dans le cadre du fonctionnement normal est une manœuvre d'exploitation, accessible au BE Manœuvre." },
    { id: "BSBE-044", chapitre: "be-manoeuvre",
      q: "Dans le symbole « BE Manœuvre », le mot Manœuvre est :", options: ["Un attribut qui précise l'opération spécifique autorisée", "Le nom de l'employeur"], bonnes: [0],
      explication: "B = basse tension, E = opération spécifique, Manœuvre = attribut qui précise le type d'opération. D'autres attributs existent : Essai, Mesurage, Vérification." },
    { id: "BSBE-045", chapitre: "be-manoeuvre", situation: "Le chef d'atelier demande à un agent BE Manœuvre de mettre hors tension une machine pour qu'un mécanicien y intervienne.",
      q: "Peut-on considérer que le mécanicien est protégé comme par une consignation ?", options: ["Oui", "Non, une simple mise hors tension n'est pas une consignation"], bonnes: [1],
      explication: "Sans condamnation, vérification d'absence de tension et attestation, la mise hors tension ne garantit pas la sécurité d'une équipe. La consignation relève du chargé de consignation." },
    { id: "BSBE-046", chapitre: "be-manoeuvre",
      q: "Quels EPI peut prévoir une consigne de manœuvre lorsqu'il existe un risque d'arc ?", options: ["Des gants isolants", "Des gants de jardinage", "Un écran facial anti-UV"], bonnes: [0, 2],
      explication: "Selon les consignes, on porte gants isolants et écran facial pour se protéger de l'arc lors d'une manœuvre. Des gants de jardinage n'isolent pas." },
    { id: "BSBE-047", chapitre: "be-manoeuvre",
      q: "Le BE Manœuvre peut manœuvrer un appareil :", options: ["Après avoir retiré la porte de l'armoire pour mieux voir", "Enveloppe fermée"], bonnes: [1],
      explication: "La manœuvre se fait de l'extérieur, sur un appareil prévu pour être manœuvré, sans accès aux pièces nues." },
    { id: "BSBE-048", chapitre: "be-manoeuvre", situation: "Un différentiel 30 mA déclenche chaque fois qu'on branche un nettoyeur haute pression.",
      q: "Le plus probable est :", options: ["Un défaut d'isolement sur le nettoyeur", "Un différentiel trop sensible qu'il faut remplacer par un modèle 300 mA"], bonnes: [0],
      explication: "Le différentiel détecte une fuite de courant : le nettoyeur est probablement en défaut. On le retire du service et on le signale ; on ne modifie jamais la protection." },
    { id: "BSBE-049", chapitre: "bs-intervention-elementaire",
      q: "Pour condamner la séparation d'un circuit, le BS peut utiliser :", options: ["Le fusible retiré, gardé sur lui", "Un morceau de ruban adhésif sur le disjoncteur", "Un cadenas", "Une pancarte d'interdiction de manœuvrer"], bonnes: [0, 2, 3],
      explication: "Cadenas, pancarte et fusible gardé sur soi empêchent ou signalent l'interdiction de remettre sous tension. Un ruban adhésif n'empêche rien et s'arrache facilement." },
    { id: "BSBE-050", chapitre: "bs-intervention-elementaire",
      q: "Quelles opérations sont interdites au BS ?", options: ["Rechercher une panne avec un multimètre", "Travailler sous tension", "Remplacer un interrupteur à l'identique", "Créer un nouveau circuit"], bonnes: [0, 1, 3],
      explication: "Le BS travaille hors tension, ne crée ni ne modifie de circuit et ne fait pas de recherche de panne. Le remplacement à l'identique d'un interrupteur fait partie de ses opérations." },
    { id: "BSBE-051", chapitre: "be-manoeuvre",
      q: "Avant de manœuvrer un appareil, l'agent BE Manœuvre vérifie :", options: ["Que la porte de l'armoire est ouverte", "Qu'aucune condamnation n'est posée", "Que l'enveloppe est fermée et en bon état", "Qu'il a bien identifié l'appareil"], bonnes: [1, 2, 3],
      explication: "On identifie sans ambiguïté l'appareil, on vérifie l'état de l'enveloppe et l'absence de condamnation. La manœuvre se fait enveloppe fermée." },
    { id: "BSBE-052", chapitre: "be-manoeuvre",
      q: "Un agent BE Manœuvre a un doute sur l'appareil à manœuvrer : deux disjoncteurs portent des étiquettes presque identiques.", options: ["Il manœuvre celui qui lui semble le bon", "Il manœuvre les deux pour être sûr", "Il ne manœuvre pas et demande au donneur d'ordre"], bonnes: [2],
      explication: "En cas de doute sur l'identification, on ne manœuvre pas : une erreur peut couper un équipement vital ou remettre sous tension un circuit sur lequel quelqu'un travaille." }
  );
})();
