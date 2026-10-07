/* Polymates — Voie professionnelle — Prévention Santé Environnement (bac pro, seconde à terminale, programme 2019) */
window.MED_COURS = window.MED_COURS || {};
window.MED_COURS["pse"] = {
  id: "pse",
  nom: "Prévention Santé Environnement",
  icone: "🦺",
  couleur: "#82b4d2",
  intro: "La PSE apprend à prendre soin de sa santé, à agir de façon responsable dans son environnement et à devenir acteur de la prévention au travail. Le cours suit les trois thématiques du programme du baccalauréat professionnel (modules A1 à A9, B1 à B5 et C1 à C12, de la seconde à la terminale), puis présente les méthodes d'analyse et de rédaction attendues.",
  parties: [
    {
      titre: "Partie A — L'individu responsable de son capital santé",
      chapitres: [
        {
          id: "systeme-de-sante",
          titre: "A1 — La santé et le système de santé",
          duree: 15,
          objectifs: [
            "Définir la santé et la notion de capital santé.",
            "Identifier les facteurs internes et externes qui influencent la santé.",
            "Décrire l'organisation de la protection sociale et le rôle de l'Assurance maladie.",
            "Expliquer le parcours de soins coordonnés et le rôle du médecin traitant.",
            "Distinguer prévention individuelle et prévention collective."
          ],
          sections: [
            {
              titre: "La santé, un capital à préserver",
              contenu: `<p>Selon l'<strong>Organisation mondiale de la santé (OMS)</strong>, la santé est « un état de complet bien-être physique, mental et social, et ne consiste pas seulement en une absence de maladie ou d'infirmité ». Cette définition, adoptée en 1946, montre que la santé ne se limite pas au corps : se sentir bien dans sa tête et avoir des relations sociales satisfaisantes en fait aussi partie.</p>
<p>Le <strong>capital santé</strong> désigne l'ensemble des ressources de santé dont dispose une personne. Il est en partie hérité à la naissance (patrimoine génétique) et il évolue tout au long de la vie selon les comportements et l'environnement. Comme un capital financier, il peut être entretenu, dépensé ou gaspillé : manque de sommeil, tabac, sédentarité ou exposition au bruit l'abîment, alors qu'une alimentation équilibrée et une activité physique régulière le préservent.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la santé a trois dimensions (physique, mentale, sociale). Chacun est responsable d'une partie de son capital santé, mais la société a aussi un rôle à jouer pour le protéger.</div>`
            },
            {
              titre: "Les facteurs qui influencent la santé",
              contenu: `<p>On appelle <strong>déterminants de santé</strong> (ou facteurs de santé) tout ce qui agit sur l'état de santé. On les classe en deux grandes catégories.</p>
<table>
<thead><tr><th>Type de facteur</th><th>Exemples</th><th>Peut-on agir dessus ?</th></tr></thead>
<tbody>
<tr><td>Facteurs internes (propres à la personne)</td><td>Âge, sexe, hérédité, maladies génétiques, état psychologique</td><td>Peu ou pas pour l'âge et la génétique ; en partie pour l'état psychologique</td></tr>
<tr><td>Facteurs externes liés aux comportements</td><td>Alimentation, sommeil, activité physique, consommation de tabac ou d'alcool, hygiène</td><td>Oui, ce sont des choix individuels</td></tr>
<tr><td>Facteurs externes liés à l'environnement</td><td>Qualité de l'air et de l'eau, bruit, logement, conditions de travail</td><td>En partie individuellement, surtout collectivement</td></tr>
<tr><td>Facteurs socio-économiques</td><td>Revenus, niveau d'éducation, accès aux soins, isolement</td><td>Surtout par des politiques publiques</td></tr>
</tbody>
</table>
<p>Ces facteurs se combinent. Un salarié qui travaille de nuit (facteur professionnel), dort mal (comportement) et vit dans un logement bruyant (environnement) cumule plusieurs facteurs défavorables.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un apprenti boulanger se lève à 3 h du matin. Ses horaires sont imposés par le métier (facteur externe professionnel), mais il peut protéger sa santé en se couchant tôt, en évitant les écrans le soir et en prenant de vrais repas.</div>`
            },
            {
              titre: "La protection sociale et la Sécurité sociale",
              contenu: `<p>La <strong>protection sociale</strong> regroupe l'ensemble des dispositifs qui aident les personnes face aux « risques sociaux » de la vie : maladie, accident du travail, maternité, vieillesse, charges de famille, chômage, perte d'autonomie. Elle repose sur le principe de <strong>solidarité</strong> : chacun cotise selon ses moyens et reçoit selon ses besoins.</p>
<p>La <strong>Sécurité sociale</strong>, créée en 1945, en est le pilier. Elle est organisée en branches :</p>
<ul>
<li><strong>branche maladie</strong> (Assurance maladie, caisses primaires CPAM) : remboursement des soins, indemnités en cas d'arrêt maladie, maternité ;</li>
<li><strong>branche accidents du travail et maladies professionnelles (AT/MP)</strong> : indemnisation des victimes et prévention des risques professionnels ;</li>
<li><strong>branche vieillesse</strong> : retraites ;</li>
<li><strong>branche famille</strong> (CAF) : allocations familiales, aides au logement ;</li>
<li><strong>branche autonomie</strong> : aide aux personnes âgées dépendantes et aux personnes handicapées ;</li>
<li>la <strong>branche recouvrement</strong> (URSSAF) collecte les cotisations.</li>
</ul>
<p>Le chômage, lui, relève de l'assurance chômage (France Travail), qui ne fait pas partie de la Sécurité sociale au sens strict.</p>
<p>L'Assurance maladie ne rembourse en général qu'une partie des frais de santé. La part restante, appelée <strong>ticket modérateur</strong>, peut être prise en charge par une <strong>complémentaire santé</strong> (mutuelle, assurance). Les salariés du privé bénéficient d'une complémentaire d'entreprise financée en partie par l'employeur. Les personnes aux revenus modestes peuvent obtenir la <strong>Complémentaire santé solidaire (C2S)</strong>.</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> ne pas confondre la Sécurité sociale (régime obligatoire, public) et la mutuelle (complémentaire, souscrite en plus). La carte Vitale prouve les droits à l'Assurance maladie, pas à la mutuelle.</div>`
            },
            {
              titre: "Le parcours de soins coordonnés",
              contenu: `<p>Le <strong>parcours de soins coordonnés</strong> organise le suivi médical autour d'un <strong>médecin traitant</strong>, que chaque assuré déclare auprès de l'Assurance maladie. Dès <strong>16 ans</strong>, un jeune peut choisir lui-même son médecin traitant et obtenir sa propre carte Vitale.</p>
<ol>
<li>Le patient consulte d'abord son médecin traitant (généraliste le plus souvent).</li>
<li>Si nécessaire, le médecin traitant l'oriente vers un spécialiste ou un examen.</li>
<li>Les informations circulent entre professionnels (dossier médical, espace numérique de santé « Mon espace santé »).</li>
</ol>
<p>Respecter ce parcours permet d'être <strong>mieux remboursé</strong>. Hors parcours, le remboursement est réduit. Certains spécialistes restent accessibles directement : gynécologue, ophtalmologue, psychiatre (pour les 16-25 ans), dentiste.</p>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour se faire soigner sans avancer trop d'argent, présenter sa carte Vitale (télétransmission), avoir déclaré un médecin traitant et vérifier les garanties de sa complémentaire santé. Le site et l'application ameli permettent de suivre ses remboursements.</div>`
            },
            {
              titre: "La prévention : individuelle et collective",
              contenu: `<p>La <strong>prévention</strong> regroupe les actions qui visent à éviter l'apparition d'une maladie ou d'un accident, ou à limiter leurs conséquences. On distingue souvent trois niveaux :</p>
<ul>
<li><strong>prévention primaire</strong> : empêcher l'apparition du problème (vaccination, port du casque, campagnes contre le tabac) ;</li>
<li><strong>prévention secondaire</strong> : repérer tôt la maladie pour mieux la soigner (dépistages, examens de santé) ;</li>
<li><strong>prévention tertiaire</strong> : limiter les complications et les rechutes (rééducation, réadaptation au poste de travail).</li>
</ul>
<p>La prévention est <strong>individuelle</strong> quand elle dépend des choix de chacun (bien dormir, se protéger lors des rapports sexuels) et <strong>collective</strong> quand elle est organisée par la société : plans nationaux de santé publique, vaccinations recommandées ou obligatoires, contrôle de la qualité de l'eau, interdiction de fumer dans les lieux publics, examens de santé gratuits proposés par l'Assurance maladie.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> dans un salon de coiffure, porter des gants pour les colorations est une mesure individuelle ; installer une ventilation efficace dans le salon est une mesure collective qui protège tout le monde.</div>`
            }
          ],
          points_cles: [
            "Pour l'OMS, la santé est un état de complet bien-être physique, mental et social.",
            "Le capital santé dépend de facteurs internes (âge, hérédité) et externes (comportements, environnement, conditions sociales).",
            "La Sécurité sociale, créée en 1945, repose sur la solidarité et comporte plusieurs branches (maladie, AT/MP, vieillesse, famille, autonomie).",
            "La complémentaire santé rembourse tout ou partie du ticket modérateur.",
            "Dès 16 ans, on peut déclarer son médecin traitant ; respecter le parcours de soins garantit un meilleur remboursement.",
            "La prévention est primaire, secondaire ou tertiaire, et elle peut être individuelle ou collective."
          ],
          lexique: [
            { terme: "Capital santé", def: "Ensemble des ressources de santé d'une personne, en partie héritées, que les comportements et l'environnement entretiennent ou dégradent." },
            { terme: "Déterminant de santé", def: "Facteur personnel, comportemental, environnemental ou social qui influence l'état de santé." },
            { terme: "Protection sociale", def: "Ensemble des mécanismes de solidarité qui protègent les personnes contre les risques sociaux (maladie, vieillesse, famille, chômage…)." },
            { terme: "Ticket modérateur", def: "Part des frais de santé qui reste à la charge de l'assuré après le remboursement de l'Assurance maladie." },
            { terme: "Médecin traitant", def: "Médecin déclaré par l'assuré, qui coordonne son suivi et l'oriente vers les spécialistes." },
            { terme: "Prévention", def: "Ensemble des mesures visant à éviter l'apparition d'un problème de santé ou à en réduire les conséquences." }
          ]
        },
        {
          id: "rythmes-biologiques-sommeil",
          titre: "A2 — Les rythmes biologiques et le sommeil",
          duree: 15,
          objectifs: [
            "Définir un rythme biologique et citer des exemples.",
            "Décrire l'organisation du sommeil en cycles et en phases.",
            "Expliquer le rôle de l'horloge biologique et de la lumière.",
            "Identifier les conséquences d'une désynchronisation, notamment en cas de travail de nuit ou posté.",
            "Proposer des règles d'hygiène du sommeil."
          ],
          sections: [
            {
              titre: "Les rythmes biologiques",
              contenu: `<p>Un <strong>rythme biologique</strong> est la variation régulière et répétée d'une fonction de l'organisme au cours du temps. Il se caractérise par sa <strong>période</strong> (durée d'un cycle complet) et sa <strong>fréquence</strong> (nombre de cycles par unité de temps).</p>
<table>
<thead><tr><th>Type de rythme</th><th>Période</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>Ultradien</td><td>Moins de 24 h</td><td>Battements du cœur, respiration, cycles du sommeil (environ 90 min)</td></tr>
<tr><td>Circadien</td><td>Environ 24 h</td><td>Alternance veille-sommeil, température du corps, sécrétion de mélatonine et de cortisol</td></tr>
<tr><td>Infradien</td><td>Plus de 24 h</td><td>Cycle menstruel (environ 28 jours), rythmes saisonniers</td></tr>
</tbody>
</table>
<p>La température corporelle, par exemple, est plus basse en fin de nuit (vers 4-5 h) et plus élevée en fin d'après-midi. La vigilance suit la même courbe : elle chute en pleine nuit et connaît un « creux » en début d'après-midi.</p>`
            },
            {
              titre: "L'horloge biologique et ses synchroniseurs",
              contenu: `<p>Les rythmes circadiens sont commandés par une <strong>horloge biologique interne</strong> située dans le cerveau (dans l'hypothalamus). Laissée seule, cette horloge a une période un peu différente de 24 h. Elle doit donc être remise à l'heure chaque jour par des <strong>synchroniseurs</strong> (ou donneurs de temps) :</p>
<ul>
<li>la <strong>lumière</strong>, principal synchroniseur : l'obscurité déclenche la sécrétion de <strong>mélatonine</strong>, l'hormone qui favorise l'endormissement ; la lumière, surtout la lumière bleue des écrans, la freine ;</li>
<li>les <strong>rythmes sociaux</strong> : horaires des repas, de travail, de cours, activités physiques, contacts sociaux.</li>
</ul>
<p>Quand l'horloge interne et les horaires imposés ne coïncident plus, on parle de <strong>désynchronisation</strong>. C'est le cas lors d'un décalage horaire (jet lag), d'un travail de nuit ou en horaires décalés, ou chez l'adolescent qui se couche très tard le week-end et doit se lever tôt le lundi.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la lumière est le principal donneur de temps. Les écrans le soir retardent l'endormissement en freinant la sécrétion de mélatonine.</div>`
            },
            {
              titre: "L'organisation du sommeil",
              contenu: `<p>Le sommeil n'est pas un état uniforme. Une nuit se compose de <strong>4 à 6 cycles</strong> d'environ <strong>90 minutes</strong> chacun. Chaque cycle comprend plusieurs phases :</p>
<table>
<thead><tr><th>Phase</th><th>Caractéristiques</th><th>Rôle principal</th></tr></thead>
<tbody>
<tr><td>Endormissement</td><td>Transition entre veille et sommeil, quelques minutes</td><td>Passage au sommeil, à ne pas manquer (« porte » du sommeil)</td></tr>
<tr><td>Sommeil lent léger</td><td>Activité cérébrale ralentie, réveil encore facile</td><td>Transition, consolidation de la mémoire</td></tr>
<tr><td>Sommeil lent profond</td><td>Ondes cérébrales très lentes, réveil difficile, surtout en début de nuit</td><td>Récupération physique, sécrétion de l'hormone de croissance, réparation des tissus</td></tr>
<tr><td>Sommeil paradoxal</td><td>Cerveau très actif, rêves, muscles relâchés, mouvements rapides des yeux, plus long en fin de nuit</td><td>Récupération mentale, mémorisation, équilibre émotionnel</td></tr>
</tbody>
</table>
<p>Entre deux cycles, de brefs éveils se produisent sans qu'on s'en souvienne. Les besoins de sommeil varient selon l'âge et les personnes : il est généralement recommandé <strong>8 à 10 heures par nuit pour un adolescent</strong> et <strong>7 à 9 heures pour un adulte</strong>. Beaucoup de lycéens dorment nettement moins, ce qui crée une <strong>dette de sommeil</strong>.</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> « rattraper » le week-end ne compense pas complètement une semaine de manque de sommeil ; au contraire, de très grasses matinées décalent l'horloge et rendent le lundi encore plus difficile.</div>`
            },
            {
              titre: "Conséquences du manque de sommeil et de la désynchronisation",
              contenu: `<p>Un sommeil insuffisant ou décalé a des effets immédiats et des effets à long terme :</p>
<ul>
<li><strong>effets immédiats</strong> : somnolence, baisse de la vigilance et de l'attention, irritabilité, troubles de la mémoire, temps de réaction allongé, augmentation du risque d'accident (sur la route comme au travail) ;</li>
<li><strong>effets à long terme</strong> : fatigue chronique, troubles de l'humeur, prise de poids, troubles digestifs, risques cardiovasculaires accrus, baisse des défenses immunitaires.</li>
</ul>
<p>Le <strong>travail de nuit</strong> et le <strong>travail posté</strong> (équipes qui se relaient, par exemple en 3 × 8) obligent à travailler quand l'horloge biologique commande de dormir et à dormir le jour, dans un environnement lumineux et bruyant. Le sommeil de jour est plus court et moins réparateur.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un conducteur routier qui roule de nuit traverse le « creux » de vigilance de 2 h à 5 h. Le risque d'endormissement au volant y est maximal : les pauses régulières et la sieste courte (10 à 20 minutes) font partie de la prévention.</div>`
            },
            {
              titre: "Le travail de nuit : cadre réglementaire",
              contenu: `<p>Le Code du travail considère comme <strong>travail de nuit</strong> tout travail effectué entre <strong>21 h et 6 h</strong> (une autre période de 9 heures incluant l'intervalle minuit-5 h peut être fixée par accord). Le travail de nuit doit rester <strong>exceptionnel</strong> et justifié par la nécessité d'assurer la continuité de l'activité (soins, transports, sécurité, industrie en continu…).</p>
<ul>
<li>Le travailleur de nuit bénéficie de <strong>contreparties</strong> (repos compensateur, éventuellement majoration de salaire) et d'un <strong>suivi de santé adapté</strong> par le service de santé au travail.</li>
<li>Le travail de nuit est en principe <strong>interdit aux jeunes de moins de 18 ans</strong>, sauf dérogations limitées prévues pour certains secteurs (boulangerie, hôtellerie-restauration, spectacle…).</li>
<li>Le travail de nuit et le travail en équipes successives alternantes font partie des facteurs de risques professionnels pris en compte par le <strong>compte professionnel de prévention (C2P)</strong> : au-delà de certains seuils d'exposition, le salarié acquiert des points utilisables pour se former, travailler à temps partiel sans perte de salaire ou partir plus tôt à la retraite.</li>
</ul>`
            },
            {
              titre: "L'hygiène du sommeil",
              contenu: `<p>Quelques règles simples améliorent la qualité du sommeil :</p>
<ul>
<li>se coucher et se lever à des <strong>heures régulières</strong>, y compris le week-end autant que possible ;</li>
<li>se coucher dès les premiers signes de fatigue (bâillements, yeux qui piquent) pour ne pas manquer le « train » du sommeil ;</li>
<li><strong>éviter les écrans</strong> au moins une heure avant le coucher et les laisser hors de la chambre ;</li>
<li>éviter les excitants (café, boissons énergisantes, sodas caféinés, nicotine) en fin de journée, ainsi que les repas trop copieux le soir ;</li>
<li>pratiquer une activité physique dans la journée, mais pas juste avant de dormir ;</li>
<li>dormir dans une chambre calme, sombre, aérée et fraîche (autour de 18-19 °C) ;</li>
<li>pour le travail de nuit : dormir dans une pièce occultée, prendre une collation légère, faire une courte sieste avant la prise de poste, s'exposer à la lumière pendant le travail et porter des lunettes de soleil sur le trajet du retour.</li>
</ul>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour repérer ses besoins, tenir un agenda du sommeil pendant deux semaines (heure de coucher, de lever, réveils, forme dans la journée). Si l'on est en forme sans réveil, la durée est suffisante.</div>`
            }
          ],
          points_cles: [
            "Un rythme biologique se caractérise par sa période et sa fréquence ; le rythme veille-sommeil est circadien (environ 24 h).",
            "L'horloge biologique est remise à l'heure par la lumière et les rythmes sociaux ; la mélatonine favorise l'endormissement.",
            "Une nuit compte 4 à 6 cycles d'environ 90 minutes, avec sommeil lent (léger puis profond) et sommeil paradoxal.",
            "Un adolescent a besoin de 8 à 10 heures de sommeil, un adulte de 7 à 9 heures en général.",
            "Le manque de sommeil diminue la vigilance et augmente le risque d'accident.",
            "Le travail de nuit (21 h-6 h) est encadré, en principe interdit aux mineurs, et ouvre droit à un suivi de santé adapté.",
            "Régularité des horaires, absence d'écran le soir et chambre calme et sombre sont les bases de l'hygiène du sommeil."
          ],
          lexique: [
            { terme: "Rythme circadien", def: "Rythme biologique dont la période est d'environ 24 heures, comme l'alternance veille-sommeil." },
            { terme: "Horloge biologique", def: "Structure du cerveau qui génère les rythmes circadiens et doit être synchronisée chaque jour." },
            { terme: "Synchroniseur", def: "Facteur extérieur (lumière, horaires sociaux) qui remet l'horloge biologique à l'heure." },
            { terme: "Mélatonine", def: "Hormone sécrétée dans l'obscurité, qui favorise l'endormissement." },
            { terme: "Sommeil paradoxal", def: "Phase du sommeil où le cerveau est très actif et où surviennent la plupart des rêves ; elle participe à la récupération mentale." },
            { terme: "Désynchronisation", def: "Décalage entre l'horloge biologique interne et les horaires imposés par la vie sociale ou professionnelle." },
            { terme: "Travail posté", def: "Organisation où des équipes se succèdent sur un même poste selon des horaires alternés." }
          ]
        },
        {
          id: "activite-physique",
          titre: "A3 — L'activité physique",
          duree: 14,
          objectifs: [
            "Décrire le muscle strié squelettique et ses propriétés.",
            "Expliquer les besoins du muscle en énergie et la production de déchets.",
            "Décrire les adaptations du cœur, de la respiration et de la température lors d'un effort.",
            "Distinguer activité physique et sédentarité et connaître les recommandations.",
            "Citer les bienfaits de l'activité physique et les précautions à prendre."
          ],
          sections: [
            {
              titre: "Le muscle strié squelettique",
              contenu: `<p>Le corps humain compte plus de 600 muscles. Les <strong>muscles striés squelettiques</strong> sont fixés aux os par des <strong>tendons</strong> ; ils permettent les mouvements et le maintien des postures. Ils sont <strong>volontaires</strong> : leur contraction est commandée par le système nerveux. Un muscle est formé de faisceaux de <strong>fibres musculaires</strong> (cellules très allongées) entourés de tissu conjonctif et parcourus de vaisseaux sanguins et de nerfs.</p>
<p>Les muscles fonctionnent par paires : quand le biceps se contracte pour plier le coude, le triceps se relâche (muscles <strong>antagonistes</strong>).</p>
<table>
<thead><tr><th>Propriété</th><th>Définition</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Excitabilité</td><td>Capacité à réagir à un message nerveux</td><td>Le muscle répond à l'ordre du cerveau</td></tr>
<tr><td>Contractilité</td><td>Capacité à se raccourcir en développant une force</td><td>Soulever un carton</td></tr>
<tr><td>Élasticité</td><td>Capacité à reprendre sa forme après étirement</td><td>Retour du muscle après un étirement</td></tr>
<tr><td>Tonicité (tonus)</td><td>État de légère contraction permanente, même au repos</td><td>Maintien de la posture debout</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Les besoins du muscle et la production de déchets",
              contenu: `<p>Pour se contracter, le muscle consomme de l'<strong>énergie</strong>. Il la produit à partir de <strong>nutriments</strong> (surtout le glucose et les acides gras) apportés par le sang. En présence de <strong>dioxygène</strong> (O<sub>2</sub>), la respiration cellulaire libère beaucoup d'énergie et produit des déchets : <strong>dioxyde de carbone</strong> (CO<sub>2</sub>), eau et <strong>chaleur</strong>.</p>
<p>Lors d'un effort intense et bref, quand l'oxygène manque, le muscle utilise une voie sans oxygène, moins efficace, qui produit de l'<strong>acide lactique</strong> (lactate). Une grande partie de l'énergie consommée par le muscle est perdue sous forme de chaleur : c'est pourquoi on a chaud pendant un effort.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> nutriments + dioxygène → énergie + dioxyde de carbone + eau + chaleur. Plus l'effort est intense, plus les besoins augmentent et plus les déchets sont nombreux.</div>`
            },
            {
              titre: "Les adaptations de l'organisme à l'effort",
              contenu: `<p>Pendant l'effort, l'organisme s'adapte pour apporter plus de nutriments et d'O<sub>2</sub> aux muscles et éliminer les déchets :</p>
<table>
<thead><tr><th>Paramètre</th><th>Au repos (adulte)</th><th>Pendant l'effort</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td>Fréquence cardiaque</td><td>Environ 60 à 80 battements par minute</td><td>Augmente (jusqu'à la fréquence maximale, estimée à 220 moins l'âge)</td><td>Augmenter le débit de sang vers les muscles</td></tr>
<tr><td>Fréquence respiratoire</td><td>Environ 12 à 20 cycles par minute</td><td>Augmente, la respiration devient plus ample</td><td>Apporter plus d'O<sub>2</sub>, rejeter plus de CO<sub>2</sub></td></tr>
<tr><td>Température corporelle</td><td>Environ 37 °C</td><td>Tend à augmenter</td><td>Compensée par la transpiration et la dilatation des vaisseaux de la peau (thermorégulation)</td></tr>
</tbody>
</table>
<p>La <strong>thermorégulation</strong> maintient la température du corps à peu près constante. La transpiration fait perdre de l'eau et des sels minéraux : il faut boire régulièrement, surtout en ambiance chaude.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un couvreur qui travaille en plein soleil l'été cumule effort physique et chaleur. Sans pauses à l'ombre ni eau fraîche à disposition, il risque le coup de chaleur. L'employeur doit mettre à disposition de l'eau potable et fraîche et adapter les horaires lors des fortes chaleurs.</div>`
            },
            {
              titre: "Activité physique et sédentarité",
              contenu: `<p>L'<strong>activité physique</strong> désigne tout mouvement du corps produit par les muscles qui augmente la dépense d'énergie au-dessus du repos : marcher, monter des escaliers, jardiner, faire du sport, mais aussi certaines tâches professionnelles. Le <strong>sport</strong> n'en est qu'une partie.</p>
<p>La <strong>sédentarité</strong> correspond au temps passé assis ou allongé en étant éveillé, avec une très faible dépense d'énergie (écrans, transports assis, travail de bureau). On peut être actif (faire du sport deux fois par semaine) et pourtant très sédentaire (rester assis 10 heures par jour) : les deux notions sont différentes.</p>
<ul>
<li>Pour les <strong>5-17 ans</strong>, l'OMS recommande en moyenne <strong>au moins 60 minutes par jour</strong> d'activité physique d'intensité modérée à soutenue.</li>
<li>Pour les <strong>adultes</strong>, elle recommande <strong>150 à 300 minutes par semaine</strong> d'activité modérée (ou 75 à 150 minutes d'activité soutenue), avec du renforcement musculaire.</li>
<li>Pour tous : <strong>limiter le temps assis</strong> et l'interrompre régulièrement (se lever, bouger quelques minutes au moins toutes les heures, voire plus souvent).</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège :</strong> un travail physique (manutention, service en salle) n'est pas forcément une activité physique favorable à la santé : les gestes répétitifs et les charges lourdes peuvent au contraire user le corps. Une activité de loisir variée reste utile.</div>`
            },
            {
              titre: "Bienfaits et précautions",
              contenu: `<p>Une activité physique régulière apporte de nombreux <strong>bienfaits</strong> :</p>
<ul>
<li><strong>physiques</strong> : renforcement du cœur et des muscles, solidité des os, maintien d'un poids de forme, prévention du diabète, de l'hypertension et de certains cancers, meilleure posture et moins de douleurs du dos ;</li>
<li><strong>mentaux</strong> : réduction du stress et de l'anxiété, meilleure qualité de sommeil, amélioration de la concentration et de la confiance en soi ;</li>
<li><strong>sociaux</strong> : rencontres, esprit d'équipe, intégration.</li>
</ul>
<p>Quelques <strong>précautions</strong> s'imposent : s'échauffer et s'étirer, augmenter l'intensité progressivement, s'hydrater, adapter l'effort à son état de santé (consulter un médecin en cas de douleur thoracique, de malaise ou de maladie chronique), porter un équipement adapté, ne pas pratiquer en cas de fièvre.</p>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour bouger plus au quotidien, intégrer l'activité dans les trajets (marche, vélo), prendre les escaliers, faire des pauses actives en cas de travail assis et choisir une activité que l'on aime pour la pratiquer durablement.</div>`
            }
          ],
          points_cles: [
            "Le muscle strié squelettique est volontaire ; il est excitable, contractile, élastique et tonique.",
            "Le muscle transforme les nutriments en énergie grâce au dioxygène et produit CO2, eau et chaleur.",
            "À l'effort, la fréquence cardiaque, la fréquence respiratoire et la transpiration augmentent.",
            "La thermorégulation maintient la température du corps proche de 37 °C ; il faut boire pour compenser la sueur.",
            "Activité physique et sédentarité sont deux notions différentes : il faut bouger plus ET rester moins longtemps assis.",
            "L'OMS recommande au moins 60 minutes d'activité par jour chez les 5-17 ans.",
            "L'activité physique a des bienfaits physiques, mentaux et sociaux."
          ],
          lexique: [
            { terme: "Muscle strié squelettique", def: "Muscle fixé aux os par des tendons, dont la contraction volontaire permet le mouvement." },
            { terme: "Contractilité", def: "Propriété du muscle de se raccourcir en produisant une force." },
            { terme: "Fréquence cardiaque", def: "Nombre de battements du cœur par minute." },
            { terme: "Thermorégulation", def: "Ensemble des mécanismes qui maintiennent la température du corps à peu près constante." },
            { terme: "Sédentarité", def: "Situation d'éveil en position assise ou allongée avec une très faible dépense d'énergie." },
            { terme: "Activité physique", def: "Tout mouvement corporel produit par les muscles qui augmente la dépense d'énergie au-dessus du repos." }
          ]
        },
        {
          id: "addictions",
          titre: "A4 — Les addictions",
          duree: 17,
          objectifs: [
            "Définir l'addiction et la dépendance, et identifier les facteurs de risque.",
            "Expliquer le fonctionnement du circuit de la récompense et l'action des substances psychoactives.",
            "Décrire les effets immédiats et à long terme de l'alcool, du tabac et du cannabis.",
            "Reconnaître les addictions sans substance (écrans, jeux vidéo, jeux d'argent).",
            "Connaître la réglementation et les ressources d'aide."
          ],
          sections: [
            {
              titre: "Qu'est-ce qu'une addiction ?",
              contenu: `<p>Une <strong>addiction</strong> est une perte de contrôle de sa consommation d'un produit ou de la pratique d'une activité, qui se poursuit malgré les conséquences négatives. Elle se traduit par une <strong>dépendance</strong> :</p>
<ul>
<li><strong>dépendance psychique</strong> : besoin irrésistible de consommer (« craving »), pensées tournées vers le produit ;</li>
<li><strong>dépendance physique</strong> : l'organisme s'est habitué ; l'arrêt provoque un <strong>syndrome de manque</strong> (tremblements, sueurs, irritabilité, troubles du sommeil).</li>
</ul>
<p>Avec le temps s'installe souvent une <strong>tolérance</strong> : il faut des doses plus fortes pour obtenir le même effet.</p>
<p>On ne devient pas dépendant par hasard. Le risque résulte de la rencontre entre trois groupes de <strong>facteurs</strong> :</p>
<table>
<thead><tr><th>Facteurs liés au produit</th><th>Facteurs liés à la personne</th><th>Facteurs liés à l'environnement</th></tr></thead>
<tbody>
<tr><td>Pouvoir addictif plus ou moins fort, mode de consommation (fumé, injecté), précocité et fréquence des usages</td><td>Âge (le cerveau de l'adolescent est plus vulnérable), mal-être, stress, recherche de sensations, antécédents familiaux</td><td>Pression du groupe, facilité d'accès, prix, publicité, consommation dans la famille, contexte festif ou professionnel</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Le circuit de la récompense",
              contenu: `<p>Le système nerveux est formé de cellules appelées <strong>neurones</strong>, qui transmettent des <strong>messages nerveux</strong>. Entre deux neurones se trouve une zone de communication, la <strong>synapse</strong>. Le message y est transmis par des substances chimiques, les <strong>neurotransmetteurs</strong>, libérées par le premier neurone et captées par des récepteurs du second.</p>
<p>Le cerveau possède un <strong>circuit de la récompense</strong> qui procure une sensation de plaisir lors d'actions utiles à la survie (manger, boire, relations sociales). Il fonctionne grâce à un neurotransmetteur, la <strong>dopamine</strong>.</p>
<p>Les <strong>substances psychoactives</strong> (alcool, nicotine, cannabis, cocaïne…) et certaines activités (jeux, réseaux sociaux) provoquent une libération de dopamine bien plus forte ou plus rapide que les plaisirs naturels. Le cerveau s'adapte : il devient moins sensible, et la personne a besoin du produit pour ressentir du plaisir ou simplement se sentir « normale ». C'est la base biologique de la dépendance.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> une substance psychoactive agit sur le cerveau au niveau des synapses ; elle modifie la perception, l'humeur ou le comportement et détourne le circuit de la récompense.</div>`
            },
            {
              titre: "Alcool, tabac, cannabis : effets et risques",
              contenu: `<table>
<thead><tr><th>Produit</th><th>Substance active</th><th>Effets immédiats</th><th>Effets à long terme</th></tr></thead>
<tbody>
<tr><td>Alcool</td><td>Éthanol</td><td>Désinhibition, euphorie puis somnolence, troubles de l'équilibre et de la vision, allongement du temps de réaction, coma éthylique en cas d'ivresse massive</td><td>Dépendance, maladies du foie (cirrhose), cancers (bouche, gorge, œsophage, sein…), maladies cardiovasculaires, troubles de la mémoire, problèmes familiaux et professionnels</td></tr>
<tr><td>Tabac</td><td>Nicotine (dépendance), goudrons (cancérogènes), monoxyde de carbone (prend la place de l'oxygène dans le sang)</td><td>Accélération du cœur, essoufflement, baisse des performances physiques, mauvaise haleine</td><td>Forte dépendance, cancers (poumon surtout), bronchite chronique, infarctus, artérite ; le tabac reste la première cause de mortalité évitable en France (environ 75 000 décès par an)</td></tr>
<tr><td>Cannabis</td><td>THC (tétrahydrocannabinol)</td><td>Ivresse, rires, troubles de la mémoire et de l'attention, temps de réaction allongé, parfois angoisse ou « bad trip »</td><td>Dépendance, démotivation, échec scolaire, troubles psychiatriques favorisés chez les personnes vulnérables, atteintes respiratoires (souvent fumé avec du tabac)</td></tr>
</tbody>
</table>
<p>Les <strong>repères de consommation d'alcool</strong> à moindre risque recommandés en France pour les adultes sont : <strong>pas plus de 10 verres standard par semaine</strong>, <strong>pas plus de 2 verres standard par jour</strong>, et <strong>des jours sans consommation</strong> dans la semaine. Un verre standard contient environ <strong>10 g d'alcool pur</strong> (un demi de bière, un verre de vin de 10 cl ou un verre d'alcool fort de 3 cl servis au bar). Pour les jeunes, les femmes enceintes et au travail, le meilleur choix est de ne pas boire.</p>
<p>La <strong>polyconsommation</strong> (mélanger alcool, cannabis, médicaments, boissons énergisantes) multiplie les risques.</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> le café, la douche froide ou le fait de manger ne font pas baisser l'alcoolémie. Seul le temps permet à l'organisme d'éliminer l'alcool (environ 0,10 à 0,15 g/L par heure).</div>`
            },
            {
              titre: "Les addictions sans substance",
              contenu: `<p>On peut devenir dépendant à une <strong>activité</strong>, sans produit : jeux vidéo, réseaux sociaux, smartphone, jeux d'argent et de hasard (paris sportifs, poker en ligne, grattage), achats compulsifs. Le mécanisme est le même : le circuit de la récompense est fortement stimulé (notifications, récompenses aléatoires, « likes »). L'OMS reconnaît le <strong>trouble du jeu vidéo</strong> comme une maladie.</p>
<p>Signes d'alerte : perte de contrôle du temps passé, priorité donnée au jeu ou à l'écran sur les autres activités, poursuite malgré les conséquences (fatigue, notes en baisse, conflits, dettes), irritabilité en cas d'impossibilité de jouer, isolement.</p>
<p>Les <strong>jeux d'argent</strong> (y compris les paris sportifs en ligne) sont <strong>interdits aux mineurs</strong>.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> une vendeuse en prêt-à-porter passe ses nuits sur les réseaux sociaux. Elle arrive fatiguée, manque d'attention à la caisse et fait des erreurs de rendu de monnaie. L'usage excessif des écrans a ici des conséquences sur la santé (sommeil) et sur la vie professionnelle.</div>`
            },
            {
              titre: "Conséquences, réglementation et prévention",
              contenu: `<p>Les conduites addictives ont des <strong>conséquences personnelles</strong> (santé, échec scolaire, isolement, accidents, violences, dettes) et <strong>sociales</strong> (coût pour l'Assurance maladie, accidents de la route et du travail, absentéisme, délinquance).</p>
<h4>Réglementation</h4>
<ul>
<li>Vente d'alcool et de tabac <strong>interdite aux mineurs</strong> ; interdiction de fumer et de vapoter dans de nombreux lieux à usage collectif, dans les établissements scolaires et dans les lieux de travail fermés.</li>
<li>Au volant : taux d'alcool maximal de <strong>0,5 g/L de sang</strong> (0,25 mg/L d'air expiré), abaissé à <strong>0,2 g/L</strong> pour les conducteurs en permis probatoire et les conducteurs de transport en commun. Conduire après avoir consommé du cannabis ou d'autres stupéfiants est un délit.</li>
<li>Le cannabis et les autres stupéfiants sont des <strong>produits illicites</strong> : leur usage, leur détention et leur vente sont punis par la loi (amende forfaitaire pour usage, peines plus lourdes pour le trafic).</li>
<li>Au travail, l'employeur peut encadrer ou interdire l'alcool par le règlement intérieur, notamment pour les postes de sécurité.</li>
</ul>
<h4>Prévention et aide</h4>
<p>La prévention combine des <strong>mesures collectives</strong> (interdictions, prix élevés du tabac, campagnes d'information, paquet neutre) et des <strong>mesures individuelles</strong> (savoir dire non, connaître les risques, demander de l'aide). Des structures accueillent gratuitement et anonymement les jeunes et leur entourage : <strong>Consultations jeunes consommateurs (CJC)</strong>, CSAPA, service Tabac info service (39 89), Drogues info service, Joueurs info service, médecin traitant, infirmier scolaire.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la loi distingue produits licites (alcool, tabac), dont la vente est réglementée, et produits illicites (cannabis, cocaïne…). Prévenir n'est pas seulement interdire : c'est aussi informer et aider.</div>`
            }
          ],
          points_cles: [
            "L'addiction est une perte de contrôle qui persiste malgré les conséquences ; la dépendance peut être psychique et physique.",
            "Le risque dépend du produit, de la personne et de l'environnement.",
            "Les substances psychoactives agissent au niveau des synapses et détournent le circuit de la récompense (dopamine).",
            "Repères alcool pour un adulte : maximum 10 verres standard par semaine, 2 par jour, et des jours sans alcool.",
            "Le tabac est la première cause de mortalité évitable en France.",
            "Écrans, jeux vidéo et jeux d'argent peuvent entraîner une addiction sans substance.",
            "Alcool et tabac sont interdits à la vente aux mineurs ; le cannabis est illicite ; le taux d'alcool au volant est limité à 0,5 g/L (0,2 g/L en permis probatoire)."
          ],
          lexique: [
            { terme: "Addiction", def: "Perte de contrôle de la consommation d'un produit ou d'une activité, poursuivie malgré ses effets négatifs." },
            { terme: "Dépendance", def: "État où la personne ne peut plus se passer du produit ou de l'activité sans souffrance psychique ou physique." },
            { terme: "Substance psychoactive", def: "Produit qui agit sur le cerveau et modifie la perception, l'humeur, la conscience ou le comportement." },
            { terme: "Synapse", def: "Zone de contact entre deux neurones où le message nerveux est transmis par des neurotransmetteurs." },
            { terme: "Neurotransmetteur", def: "Substance chimique libérée dans la synapse qui transmet le message nerveux, comme la dopamine." },
            { terme: "Circuit de la récompense", def: "Ensemble de zones du cerveau qui procurent une sensation de plaisir et poussent à répéter certains comportements." },
            { terme: "Polyconsommation", def: "Consommation de plusieurs substances psychoactives au cours d'une même période, qui augmente les risques." }
          ]
        },
        {
          id: "sexualite-contraception",
          titre: "A5 — La sexualité et la contraception",
          duree: 16,
          objectifs: [
            "Décrire l'anatomie des appareils reproducteurs féminin et masculin.",
            "Expliquer le cycle ovarien, la fécondation et la nidation.",
            "Comprendre le contrôle hormonal de la reproduction et la puberté.",
            "Présenter les principales méthodes de contraception et leur mode d'action.",
            "Connaître la contraception d'urgence, l'IVG et les droits des jeunes."
          ],
          sections: [
            {
              titre: "Les appareils reproducteurs",
              contenu: `<p>La reproduction humaine repose sur la rencontre de deux <strong>gamètes</strong> (cellules reproductrices) : l'<strong>ovule</strong> (ou ovocyte) chez la femme et le <strong>spermatozoïde</strong> chez l'homme.</p>
<table>
<thead><tr><th></th><th>Appareil reproducteur féminin</th><th>Appareil reproducteur masculin</th></tr></thead>
<tbody>
<tr><td>Glandes (gonades)</td><td>2 <strong>ovaires</strong> : produisent les ovules et des hormones (œstrogènes, progestérone)</td><td>2 <strong>testicules</strong> : produisent en continu les spermatozoïdes et la testostérone</td></tr>
<tr><td>Voies génitales</td><td><strong>Trompes</strong> (lieu de la fécondation), <strong>utérus</strong> (accueille l'embryon), col de l'utérus, <strong>vagin</strong></td><td>Épididymes, canaux déférents, urètre, <strong>pénis</strong></td></tr>
<tr><td>Glandes annexes</td><td>—</td><td>Vésicules séminales et prostate (produisent le liquide du sperme)</td></tr>
<tr><td>Organes externes</td><td>Vulve (grandes et petites lèvres, clitoris)</td><td>Pénis, scrotum (bourses)</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Puberté, cycle ovarien et contrôle hormonal",
              contenu: `<p>La <strong>puberté</strong> est la période de transformation du corps qui rend la reproduction possible (en général entre 10 et 16 ans). Elle est déclenchée par le cerveau : l'<strong>hypothalamus</strong> et l'<strong>hypophyse</strong> sécrètent des hormones (FSH et LH) qui stimulent les ovaires ou les testicules. Ceux-ci produisent alors les hormones sexuelles responsables des caractères sexuels secondaires (pilosité, mue de la voix, développement des seins, premières règles, premières éjaculations).</p>
<p>Chez la femme, le fonctionnement est <strong>cyclique</strong>. Un cycle dure en moyenne <strong>28 jours</strong> (souvent entre 25 et 35 jours) :</p>
<ol>
<li><strong>Jours 1 à 5 environ</strong> : les règles (élimination de la muqueuse de l'utérus) ; un follicule se développe dans l'ovaire.</li>
<li><strong>Vers le 14<sup>e</sup> jour</strong> (dans un cycle de 28 jours) : <strong>ovulation</strong>, libération d'un ovule par l'ovaire, déclenchée par un pic de LH.</li>
<li><strong>Après l'ovulation</strong> : le follicule devient corps jaune et sécrète de la progestérone, qui prépare la muqueuse utérine à une éventuelle nidation. Sans fécondation, le taux d'hormones chute et les règles apparaissent.</li>
</ol>
<p>Les hormones agissent sur des organes cibles qui possèdent des <strong>récepteurs hormonaux</strong>. Les ovaires et l'hypophyse s'influencent mutuellement : on parle de <strong>rétrocontrôle</strong>. C'est sur ce mécanisme que reposent les contraceptifs hormonaux.</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> la date de l'ovulation varie d'un cycle à l'autre, et les spermatozoïdes peuvent survivre plusieurs jours dans les voies génitales. Il n'existe donc pas de période « sans risque » fiable pour éviter une grossesse.</div>`
            },
            {
              titre: "Fécondation et nidation",
              contenu: `<p>Lors d'un rapport sexuel, des millions de spermatozoïdes sont déposés dans le vagin. Quelques-uns remontent jusqu'à la trompe. La <strong>fécondation</strong> est la fusion d'un spermatozoïde et d'un ovule : elle forme une cellule-œuf qui contient le patrimoine génétique des deux parents.</p>
<p>La cellule-œuf se divise en descendant vers l'utérus. Environ une semaine après la fécondation, l'embryon s'implante dans la muqueuse utérine : c'est la <strong>nidation</strong>. La grossesse commence ; les règles s'arrêtent. Un test de grossesse urinaire détecte une hormone produite par l'embryon dès les premiers jours de retard des règles.</p>`
            },
            {
              titre: "Les méthodes de contraception",
              contenu: `<p>La <strong>contraception</strong> est l'ensemble des moyens qui empêchent une grossesse non désirée, de façon temporaire et réversible. Son choix se fait avec un professionnel de santé (médecin, sage-femme) selon l'âge, la santé et le mode de vie.</p>
<table>
<thead><tr><th>Méthode</th><th>Mode d'action</th><th>Remarques</th></tr></thead>
<tbody>
<tr><td>Pilule œstroprogestative ou progestative</td><td>Hormones qui bloquent l'ovulation et/ou épaississent la glaire du col</td><td>Prise quotidienne, oubli = risque de grossesse</td></tr>
<tr><td>Implant</td><td>Petit bâtonnet sous la peau du bras libérant un progestatif</td><td>Efficace jusqu'à 3 ans, pas d'oubli possible</td></tr>
<tr><td>Patch, anneau vaginal</td><td>Hormones diffusées par la peau ou le vagin</td><td>Changement hebdomadaire ou mensuel</td></tr>
<tr><td>Dispositif intra-utérin (DIU, « stérilet ») au cuivre ou hormonal</td><td>Placé dans l'utérus, il empêche la fécondation et/ou la nidation</td><td>Longue durée (plusieurs années), possible chez une femme sans enfant</td></tr>
<tr><td>Préservatif externe (masculin) ou interne (féminin)</td><td>Barrière mécanique qui empêche le passage des spermatozoïdes</td><td><strong>Seule méthode qui protège aussi des IST</strong></td></tr>
</tbody>
</table>
<p>En France, la contraception est <strong>prise en charge à 100 % pour les jeunes de moins de 26 ans</strong> (consultation, examens et contraceptifs remboursables), et les préservatifs sont délivrés gratuitement en pharmacie aux moins de 26 ans. Les mineurs peuvent obtenir une contraception <strong>de façon confidentielle</strong>, sans autorisation parentale.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la « double protection » associe un contraceptif efficace (pilule, implant, DIU…) et le préservatif, qui protège des IST.</div>`
            },
            {
              titre: "Contraception d'urgence et IVG",
              contenu: `<p>Après un rapport non ou mal protégé (oubli de pilule, préservatif qui a craqué), on peut recourir à la <strong>contraception d'urgence</strong> :</p>
<ul>
<li>la <strong>pilule d'urgence</strong>, à prendre <strong>le plus tôt possible</strong> : selon le type, jusqu'à 3 jours (72 heures) ou 5 jours (120 heures) après le rapport ; elle retarde ou bloque l'ovulation ; elle est délivrée en pharmacie <strong>sans ordonnance et gratuitement</strong>, de façon anonyme pour les mineures, et par l'infirmier scolaire ;</li>
<li>le <strong>DIU au cuivre</strong>, posé par un professionnel jusqu'à 5 jours après le rapport.</li>
</ul>
<p>La pilule d'urgence n'est <strong>pas une méthode de contraception régulière</strong> et ne protège pas des IST.</p>
<p>L'<strong>interruption volontaire de grossesse (IVG)</strong> est un droit pour toute femme qui ne souhaite pas poursuivre une grossesse. Elle est possible jusqu'à la fin de la <strong>14<sup>e</sup> semaine de grossesse</strong> (16 semaines après le début des dernières règles), par méthode médicamenteuse (en début de grossesse) ou instrumentale. Elle est prise en charge à 100 %. Une mineure peut y recourir sans consentement parental, accompagnée d'un adulte de son choix. Depuis 2024, la liberté de recourir à l'IVG est inscrite dans la Constitution.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> une apprentie en boulangerie, qui commence très tôt, oublie sa pilule deux jours de suite. Elle peut demander une pilule d'urgence en pharmacie avant d'aller travailler, puis consulter pour choisir une contraception mieux adaptée à ses horaires, comme un implant ou un DIU.</div>
<p>Des lieux d'écoute et d'information existent : centres de santé sexuelle (anciens centres de planification), infirmerie scolaire, site et numéro vert national d'information sur la sexualité, la contraception et l'IVG.</p>`
            }
          ],
          points_cles: [
            "Les ovaires produisent les ovules et les hormones féminines ; les testicules produisent les spermatozoïdes et la testostérone.",
            "Un cycle féminin dure en moyenne 28 jours ; l'ovulation a lieu environ 14 jours avant les règles suivantes.",
            "La fécondation a lieu dans la trompe ; la nidation correspond à l'implantation de l'embryon dans l'utérus.",
            "Les contraceptifs hormonaux agissent surtout en bloquant l'ovulation.",
            "Seul le préservatif protège à la fois d'une grossesse et des IST.",
            "La pilule d'urgence se prend le plus tôt possible, au plus tard 3 à 5 jours selon le type ; elle est gratuite et sans ordonnance.",
            "L'IVG est possible jusqu'à 14 semaines de grossesse ; une mineure peut y recourir sans accord parental."
          ],
          lexique: [
            { terme: "Gamète", def: "Cellule reproductrice : ovule chez la femme, spermatozoïde chez l'homme." },
            { terme: "Ovulation", def: "Libération d'un ovule par l'ovaire, environ au milieu du cycle." },
            { terme: "Fécondation", def: "Fusion d'un spermatozoïde et d'un ovule qui donne une cellule-œuf." },
            { terme: "Nidation", def: "Implantation de l'embryon dans la muqueuse de l'utérus, environ une semaine après la fécondation." },
            { terme: "Contraception", def: "Ensemble des méthodes qui évitent temporairement et de façon réversible une grossesse." },
            { terme: "IVG", def: "Interruption volontaire de grossesse, droit encadré par la loi et pris en charge par l'Assurance maladie." }
          ]
        },
        {
          id: "infections-sexuellement-transmissibles",
          titre: "A6 — Les infections sexuellement transmissibles",
          duree: 14,
          objectifs: [
            "Définir une IST et identifier les micro-organismes en cause.",
            "Décrire les modes de contamination et les principaux symptômes.",
            "Distinguer séropositivité au VIH et sida.",
            "Connaître les moyens de prévention, de dépistage et de traitement.",
            "Expliquer la recrudescence actuelle de certaines IST."
          ],
          sections: [
            {
              titre: "Définition et micro-organismes en cause",
              contenu: `<p>Une <strong>infection sexuellement transmissible (IST)</strong> est une infection due à un <strong>micro-organisme</strong> (bactérie, virus, parasite ou champignon) qui se transmet principalement lors de rapports sexuels (vaginaux, anaux ou bucco-génitaux), sans préservatif.</p>
<table>
<thead><tr><th>IST</th><th>Agent</th><th>Signes possibles</th><th>Traitement</th></tr></thead>
<tbody>
<tr><td>Chlamydiose</td><td>Bactérie (<em>Chlamydia trachomatis</em>)</td><td>Souvent aucun signe ; parfois brûlures en urinant, écoulements</td><td>Antibiotiques ; non traitée, risque de stérilité</td></tr>
<tr><td>Gonococcie (« chaude-pisse »)</td><td>Bactérie (gonocoque)</td><td>Écoulement purulent, brûlures</td><td>Antibiotiques</td></tr>
<tr><td>Syphilis</td><td>Bactérie (tréponème)</td><td>Chancre (petite plaie indolore), puis éruptions</td><td>Antibiotiques (pénicilline)</td></tr>
<tr><td>Infection à papillomavirus (HPV)</td><td>Virus</td><td>Souvent aucun signe ; verrues génitales ; certains types provoquent des cancers (col de l'utérus, anus, gorge)</td><td>Prévention par la vaccination ; surveillance par frottis</td></tr>
<tr><td>Herpès génital</td><td>Virus</td><td>Petites vésicules douloureuses, récidives</td><td>Traitements qui réduisent les poussées, pas de guérison définitive</td></tr>
<tr><td>Hépatite B</td><td>Virus</td><td>Fatigue, jaunisse ; peut devenir chronique (cirrhose, cancer du foie)</td><td>Prévention par la vaccination</td></tr>
<tr><td>Infection par le VIH</td><td>Virus de l'immunodéficience humaine</td><td>Parfois syndrome grippal au début, puis longue phase sans signe</td><td>Traitements antirétroviraux à vie</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège :</strong> beaucoup d'IST ne donnent <strong>aucun symptôme</strong>. On peut être infecté et contaminer ses partenaires sans le savoir : seul un dépistage permet d'être sûr.</div>`
            },
            {
              titre: "Les modes de contamination",
              contenu: `<p>La contamination se fait par contact avec les <strong>liquides biologiques</strong> d'une personne infectée (sperme, liquide pré-séminal, sécrétions vaginales, sang) ou par contact direct de muqueuses ou de lésions (herpès, syphilis, HPV).</p>
<ul>
<li><strong>Voie sexuelle</strong> : rapports vaginaux, anaux ou oraux non protégés (voie principale).</li>
<li><strong>Voie sanguine</strong> : partage de seringues, de matériel de tatouage ou de piercing non stérile, accident d'exposition au sang (piqûre avec une aiguille souillée) ; concerne surtout le VIH et les hépatites B et C.</li>
<li><strong>Transmission de la mère à l'enfant</strong> : pendant la grossesse, l'accouchement ou l'allaitement (VIH, hépatite B, syphilis).</li>
</ul>
<p>Le VIH ne se transmet <strong>pas</strong> par la salive, la sueur, les larmes, les piqûres de moustique, une poignée de main, des toilettes ou des couverts partagés.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un agent de propreté qui vide une poubelle se pique avec une seringue abandonnée. C'est un <strong>accident d'exposition au sang</strong> : il faut nettoyer la plaie à l'eau et au savon, rincer, désinfecter, puis consulter en urgence (dans les heures qui suivent) pour évaluer le besoin d'un traitement post-exposition, et déclarer l'accident du travail.</div>`
            },
            {
              titre: "VIH et sida",
              contenu: `<p>Le <strong>VIH</strong> s'attaque à certaines cellules du système immunitaire (les lymphocytes T4), chargées de défendre l'organisme. Après la contamination, l'organisme fabrique des anticorps dirigés contre le virus : la personne devient <strong>séropositive</strong>. Un test de dépistage détecte ces anticorps (et le virus lui-même).</p>
<p>Sans traitement, le virus détruit progressivement les défenses immunitaires. Après plusieurs années apparaît le <strong>sida</strong> (syndrome d'immunodéficience acquise) : l'organisme ne peut plus se défendre contre des infections et des cancers dits « opportunistes ».</p>
<p>Aujourd'hui, les <strong>traitements antirétroviraux</strong>, pris à vie, empêchent le virus de se multiplier. Une personne séropositive traitée efficacement, dont la charge virale est devenue indétectable, <strong>ne transmet plus le virus</strong> à ses partenaires sexuels. On ne guérit pas du VIH, mais on vit avec, avec une espérance de vie proche de la normale si le diagnostic est précoce.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> séropositif ne veut pas dire malade du sida. Le sida est le stade avancé de l'infection par le VIH, en l'absence de traitement.</div>`
            },
            {
              titre: "Prévention, dépistage et traitement",
              contenu: `<h4>Se protéger</h4>
<ul>
<li>Le <strong>préservatif</strong> (externe ou interne) protège du VIH et de la plupart des IST ; il est gratuit en pharmacie pour les moins de 26 ans.</li>
<li>La <strong>vaccination</strong> protège contre l'hépatite B et contre les papillomavirus (recommandée pour les filles et les garçons à partir de 11 ans, avec un rattrapage possible).</li>
<li>La <strong>PrEP</strong> (prophylaxie pré-exposition) est un traitement préventif contre le VIH, prescrit aux personnes les plus exposées.</li>
<li>Le <strong>traitement post-exposition (TPE)</strong> se prend après une prise de risque, le plus tôt possible et au plus tard dans les 48 heures, sur prescription aux urgences ou dans un centre spécialisé.</li>
<li>Ne jamais partager de seringue ni de matériel coupant ; exiger du matériel stérile pour tatouages et piercings.</li>
</ul>
<h4>Se faire dépister</h4>
<p>Le <strong>dépistage</strong> est recommandé après une prise de risque, en cas de nouveau partenaire, ou avant d'arrêter le préservatif dans un couple. Il est possible gratuitement dans les <strong>CeGIDD</strong> (centres gratuits d'information, de dépistage et de diagnostic), les centres de santé sexuelle, et en laboratoire sans ordonnance pour le VIH et, pour les jeunes, plusieurs autres IST. Des autotests VIH sont vendus en pharmacie.</p>
<p>En cas d'IST, il faut se soigner, prévenir ses partenaires pour qu'ils se fassent dépister et traiter, et se protéger pendant le traitement.</p>`
            },
            {
              titre: "Une recrudescence des IST",
              contenu: `<p>Depuis plusieurs années, les autorités sanitaires observent une <strong>recrudescence</strong> (augmentation) des IST bactériennes (chlamydiose, gonococcie, syphilis), en particulier chez les jeunes. Plusieurs raisons l'expliquent : diminution de l'utilisation du préservatif, multiplication des partenaires, méconnaissance des IST, absence de symptômes qui retarde le dépistage.</p>
<p>La prévention passe donc par l'<strong>information</strong> (éducation à la sexualité au collège et au lycée), l'<strong>accès gratuit</strong> aux préservatifs et au dépistage, et la <strong>vaccination</strong>. Elle repose aussi sur le respect : une relation sexuelle suppose le <strong>consentement</strong> libre et éclairé de chaque partenaire.</p>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour répondre à une question sur une IST, préciser : l'agent responsable (bactérie ou virus), le mode de transmission, les signes (ou leur absence), le dépistage, le traitement et les mesures de prévention.</div>`
            }
          ],
          points_cles: [
            "Une IST est due à une bactérie, un virus ou un parasite transmis principalement lors de rapports sexuels non protégés.",
            "Beaucoup d'IST sont sans symptômes : seul le dépistage permet de savoir si l'on est infecté.",
            "Les IST bactériennes se soignent par antibiotiques ; les IST virales comme le VIH ou l'herpès ne se guérissent pas définitivement.",
            "Le préservatif est le seul moyen de protection contre la plupart des IST lors des rapports.",
            "Des vaccins existent contre l'hépatite B et les papillomavirus.",
            "Être séropositif au VIH ne signifie pas avoir le sida ; une personne traitée avec une charge virale indétectable ne transmet pas le virus.",
            "Le dépistage est gratuit dans les CeGIDD et les centres de santé sexuelle."
          ],
          lexique: [
            { terme: "IST", def: "Infection sexuellement transmissible, due à un micro-organisme transmis principalement lors des rapports sexuels." },
            { terme: "Micro-organisme", def: "Être vivant invisible à l'œil nu (bactérie, virus, champignon, parasite microscopique)." },
            { terme: "Séropositivité", def: "Présence dans le sang d'anticorps dirigés contre un virus, signe que la personne a été infectée." },
            { terme: "Sida", def: "Stade avancé de l'infection par le VIH, marqué par l'effondrement des défenses immunitaires." },
            { terme: "Dépistage", def: "Examen qui recherche une infection chez une personne, même sans symptôme." },
            { terme: "Recrudescence", def: "Augmentation du nombre de cas d'une maladie après une période de baisse ou de stabilité." }
          ]
        },
        {
          id: "pratiques-alimentaires",
          titre: "A7 — Les pratiques alimentaires et l'alimentation équilibrée",
          duree: 16,
          objectifs: [
            "Décrire l'appareil digestif, la digestion et l'absorption intestinale.",
            "Identifier les nutriments, leurs rôles et leur valeur énergétique.",
            "Expliquer les besoins nutritionnels et les règles d'une alimentation équilibrée.",
            "Repérer les conséquences des carences et des excès.",
            "Analyser une pratique alimentaire choisie ou subie et lire une étiquette (additifs, allergènes, aliments ultratransformés)."
          ],
          sections: [
            {
              titre: "L'appareil digestif et la digestion",
              contenu: `<p>Les aliments que nous mangeons sont trop gros pour passer dans le sang. La <strong>digestion</strong> les transforme en petites molécules, les <strong>nutriments</strong>, grâce à deux types d'actions : <strong>mécaniques</strong> (mastication, brassage de l'estomac) et <strong>chimiques</strong> (enzymes contenues dans les sucs digestifs).</p>
<table>
<thead><tr><th>Organe</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td>Bouche</td><td>Mastication, salive (début de la digestion de l'amidon)</td></tr>
<tr><td>Œsophage</td><td>Conduit les aliments vers l'estomac</td></tr>
<tr><td>Estomac</td><td>Brassage, suc gastrique acide (début de la digestion des protéines)</td></tr>
<tr><td>Intestin grêle</td><td>Fin de la digestion grâce au suc pancréatique, à la bile (fabriquée par le foie) et au suc intestinal ; <strong>absorption</strong> des nutriments</td></tr>
<tr><td>Gros intestin (côlon)</td><td>Absorption de l'eau, formation des selles, action du microbiote intestinal</td></tr>
</tbody>
</table>
<p>L'<strong>absorption intestinale</strong> est le passage des nutriments de l'intestin grêle vers le sang (et la lymphe). La paroi de l'intestin grêle est couverte de replis et de <strong>villosités</strong> qui forment une immense surface d'échange, riche en vaisseaux sanguins. Les nutriments sont ensuite distribués à toutes les cellules par le sang.</p>`
            },
            {
              titre: "Les nutriments et leurs rôles",
              contenu: `<table>
<thead><tr><th>Nutriment</th><th>Rôle principal</th><th>Sources</th><th>Énergie</th></tr></thead>
<tbody>
<tr><td>Glucides (sucres simples et complexes)</td><td>Énergétique (carburant des muscles et du cerveau)</td><td>Féculents, pain, fruits, produits sucrés</td><td>4 kcal par gramme</td></tr>
<tr><td>Lipides (graisses)</td><td>Énergétique, réserve, construction des membranes</td><td>Huiles, beurre, fromages, charcuterie, poissons gras</td><td>9 kcal par gramme</td></tr>
<tr><td>Protides (protéines)</td><td>Bâtisseur : construction et renouvellement des muscles et des tissus</td><td>Viandes, poissons, œufs, produits laitiers, légumineuses</td><td>4 kcal par gramme</td></tr>
<tr><td>Eau</td><td>Constituant principal du corps, transport, thermorégulation</td><td>Boissons, aliments</td><td>0</td></tr>
<tr><td>Sels minéraux (calcium, fer…)</td><td>Fonctionnel et bâtisseur (os, sang)</td><td>Produits laitiers, viandes, légumes</td><td>0</td></tr>
<tr><td>Vitamines</td><td>Fonctionnel (bon fonctionnement de l'organisme)</td><td>Fruits, légumes, produits laitiers</td><td>0</td></tr>
<tr><td>Fibres</td><td>Transit intestinal, satiété</td><td>Fruits, légumes, céréales complètes</td><td>Très faible</td></tr>
</tbody>
</table>
<p>La <strong>valeur énergétique</strong> d'un aliment s'exprime en kilocalories (kcal) ou en kilojoules (kJ). Elle se calcule à partir de sa composition. Par exemple, 100 g d'un aliment contenant 20 g de glucides, 10 g de lipides et 5 g de protides apportent : 20 × 4 + 10 × 9 + 5 × 4 = 190 kcal.</p>`
            },
            {
              titre: "Besoins nutritionnels et alimentation équilibrée",
              contenu: `<p>Les <strong>besoins nutritionnels</strong> varient selon l'âge, le sexe, la taille, l'activité physique et l'état physiologique (croissance, grossesse). Un adolescent en croissance ou un salarié qui fait un travail physique (maçon, déménageur) a des besoins énergétiques plus élevés qu'un employé de bureau.</p>
<p>Une alimentation équilibrée apporte chaque jour la bonne quantité d'énergie et tous les nutriments. Repères principaux (Programme national nutrition santé) :</p>
<ul>
<li>au moins <strong>5 portions de fruits et légumes</strong> par jour ;</li>
<li>des <strong>féculents</strong> à chaque repas, de préférence complets, et des <strong>légumineuses</strong> (lentilles, pois chiches) au moins deux fois par semaine ;</li>
<li>des <strong>produits laitiers</strong> en quantité suffisante ;</li>
<li>viande, poisson ou œufs avec modération ; poisson deux fois par semaine dont un gras ; limiter la charcuterie et la viande rouge ;</li>
<li>limiter les produits gras, sucrés, salés et les boissons sucrées ;</li>
<li>l'<strong>eau</strong> est la seule boisson indispensable.</li>
</ul>
<p>La répartition sur la journée compte aussi : un <strong>petit-déjeuner</strong>, un déjeuner, éventuellement un goûter, un dîner, sans grignotage.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un serveur en restauration mange souvent debout, vite et à des horaires décalés. Il peut prendre un repas complet avant le service, garder une bouteille d'eau à portée de main et éviter de compenser la fatigue par des boissons sucrées ou énergisantes.</div>`
            },
            {
              titre: "Carences, excès et pratiques alimentaires",
              contenu: `<p>Un apport insuffisant crée une <strong>carence</strong> ; un apport trop important, un <strong>excès</strong>.</p>
<table>
<thead><tr><th>Déséquilibre</th><th>Conséquences possibles</th></tr></thead>
<tbody>
<tr><td>Carence en fer</td><td>Anémie, fatigue, essoufflement</td></tr>
<tr><td>Carence en calcium et vitamine D</td><td>Fragilité osseuse</td></tr>
<tr><td>Apport énergétique insuffisant</td><td>Amaigrissement, fatigue, baisse de concentration, malaise (hypoglycémie)</td></tr>
<tr><td>Excès de sucres et de graisses</td><td>Surpoids, obésité, diabète de type 2, maladies cardiovasculaires</td></tr>
<tr><td>Excès de sel</td><td>Hypertension artérielle</td></tr>
</tbody>
</table>
<p>Une <strong>pratique alimentaire</strong> est la manière dont une personne s'alimente. Elle peut être :</p>
<ul>
<li><strong>choisie</strong> : végétarisme, régime lié à une religion, choix éthique ou écologique, régime sportif ;</li>
<li><strong>subie</strong> : allergie ou intolérance (gluten, lactose), maladie (diabète), budget limité, horaires de travail décalés, restauration rapide imposée par les contraintes.</li>
</ul>
<p>Toute pratique peut être équilibrée si elle est bien organisée : par exemple, un végétarien associe céréales et légumineuses pour couvrir ses besoins en protéines. Les régimes très restrictifs sans suivi médical sont déconseillés, en particulier pendant la croissance.</p>`
            },
            {
              titre: "Lire une étiquette : additifs, allergènes, ultratransformés",
              contenu: `<p>L'étiquette d'un produit préemballé donne des informations obligatoires : dénomination, liste des ingrédients (par ordre décroissant de quantité), déclaration nutritionnelle, date limite, quantité, conditions de conservation, origine dans certains cas.</p>
<ul>
<li>Les <strong>additifs</strong> (colorants, conservateurs, émulsifiants, édulcorants…) sont identifiés par un code commençant par <strong>E</strong> suivi de chiffres (ex. E330). Ils sont autorisés après évaluation, mais certains font l'objet de débats et de réévaluations.</li>
<li>Les <strong>allergènes</strong> : la réglementation européenne impose de signaler <strong>14 allergènes majeurs</strong> (gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, sésame, sulfites, lupin, mollusques). Ils doivent apparaître en évidence dans la liste des ingrédients et être indiqués aussi pour les plats non préemballés, en restaurant ou en boulangerie.</li>
<li>Les <strong>aliments ultratransformés</strong> sont fabriqués industriellement avec de nombreux ingrédients et additifs qu'on n'utiliserait pas en cuisine (sodas, biscuits industriels, plats préparés, nuggets). Une consommation importante est associée à un risque accru d'obésité et de maladies chroniques.</li>
<li>Le <strong>Nutri-Score</strong> (de A vert à E rouge) résume la qualité nutritionnelle d'un produit pour comparer des produits d'une même catégorie.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège :</strong> une allergie alimentaire (réaction du système immunitaire, parfois grave : œdème, choc anaphylactique) n'est pas une intolérance (trouble digestif sans réaction immunitaire). En restauration, une erreur sur un allergène peut mettre la vie d'un client en danger.</div>`
            }
          ],
          points_cles: [
            "La digestion transforme les aliments en nutriments par des actions mécaniques et chimiques (enzymes).",
            "L'absorption des nutriments se fait dans l'intestin grêle grâce aux villosités.",
            "Glucides et protides apportent 4 kcal/g, lipides 9 kcal/g.",
            "Les besoins dépendent de l'âge, du sexe, de l'activité physique et de l'état physiologique.",
            "Repères : 5 fruits et légumes par jour, féculents à chaque repas, eau comme seule boisson indispensable, limiter gras, sucre et sel.",
            "Une pratique alimentaire peut être choisie ou subie ; elle doit rester équilibrée.",
            "14 allergènes majeurs doivent être signalés, y compris en restauration."
          ],
          lexique: [
            { terme: "Nutriment", def: "Petite molécule issue de la digestion, capable de passer dans le sang et utilisée par les cellules." },
            { terme: "Absorption intestinale", def: "Passage des nutriments de l'intestin grêle vers le sang et la lymphe." },
            { terme: "Enzyme", def: "Molécule qui accélère la transformation chimique des aliments lors de la digestion." },
            { terme: "Valeur énergétique", def: "Quantité d'énergie apportée par un aliment, exprimée en kcal ou en kJ." },
            { terme: "Carence", def: "Apport insuffisant d'un nutriment par rapport aux besoins de l'organisme." },
            { terme: "Allergène", def: "Substance capable de déclencher une réaction allergique chez une personne sensible." },
            { terme: "Aliment ultratransformé", def: "Produit industriel contenant de nombreux ingrédients et additifs non utilisés en cuisine domestique." }
          ]
        },
        {
          id: "stress-sante-mentale",
          titre: "A8 — Le stress au quotidien et la santé mentale",
          duree: 14,
          objectifs: [
            "Définir le stress et distinguer stress aigu et stress chronique.",
            "Identifier les facteurs de stress et les facteurs de vulnérabilité.",
            "Expliquer les réactions de l'organisme (adrénaline, cortisol) et les phases d'adaptation.",
            "Citer les conséquences pathologiques d'un stress prolongé.",
            "Proposer des mesures individuelles de gestion du stress et savoir où demander de l'aide."
          ],
          sections: [
            {
              titre: "Qu'est-ce que le stress ?",
              contenu: `<p>Le <strong>stress</strong> est la réaction de l'organisme face à une situation perçue comme une menace ou une exigence importante. Il apparaît quand une personne ressent un <strong>déséquilibre entre les contraintes</strong> qu'elle subit et les <strong>ressources</strong> dont elle pense disposer pour y faire face.</p>
<ul>
<li>Le <strong>stress aigu</strong> est ponctuel : il survient face à un événement précis (examen, entretien d'embauche, coup de feu en cuisine) et disparaît quand la situation est passée. Il peut même être utile : il mobilise l'énergie et la concentration.</li>
<li>Le <strong>stress chronique</strong> s'installe quand les situations stressantes durent ou se répètent sans possibilité de récupérer. Il devient alors nocif pour la santé.</li>
</ul>
<p>Le stress dépend autant de la <strong>perception</strong> de la situation que de la situation elle-même. Deux élèves face au même oral de stage ne ressentent pas la même pression : celui qui s'est entraîné et qui se sent capable perçoit moins de menace. C'est pourquoi la préparation, l'expérience et la confiance en soi réduisent le stress.</p>
<p>En période de formation, les jeunes cumulent souvent plusieurs sources de pression : examens, découverte du monde du travail pendant les périodes de formation en milieu professionnel (PFMP), choix d'orientation, vie sociale. Reconnaître que ces tensions sont normales est déjà une première étape pour les gérer.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le stress n'est pas une maladie mais une réaction d'adaptation. C'est sa durée et son intensité qui le rendent dangereux.</div>`
            },
            {
              titre: "Facteurs de stress et vulnérabilité",
              contenu: `<p>Les <strong>facteurs de stress</strong> (ou « stresseurs ») sont très variés :</p>
<table>
<thead><tr><th>Domaine</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>Scolaire et professionnel</td><td>Examens, surcharge de travail, pression du temps, conflits avec un collègue ou un tuteur, peur de l'erreur, clients agressifs</td></tr>
<tr><td>Personnel et familial</td><td>Disputes, séparation, deuil, maladie d'un proche, déménagement</td></tr>
<tr><td>Social et relationnel</td><td>Harcèlement, isolement, regard des autres, réseaux sociaux</td></tr>
<tr><td>Matériel et environnemental</td><td>Difficultés financières, logement bruyant ou insalubre, transports longs</td></tr>
</tbody>
</table>
<p>Face à une même situation, tout le monde ne réagit pas de la même façon. La <strong>vulnérabilité</strong> dépend de facteurs individuels : personnalité, expériences passées, état de fatigue, santé, consommation de produits, et surtout <strong>soutien social</strong> (famille, amis, collègues). Être entouré protège.</p>`
            },
            {
              titre: "Les réactions de l'organisme",
              contenu: `<p>Le chercheur Hans Selye a décrit le <strong>syndrome général d'adaptation</strong>, qui comporte trois phases :</p>
<ol>
<li><strong>Phase d'alarme</strong> : le cerveau perçoit le danger et commande aux glandes surrénales de libérer de l'<strong>adrénaline</strong>. En quelques secondes : accélération du cœur et de la respiration, augmentation de la pression artérielle, libération de sucre dans le sang, muscles tendus, sueurs, pupilles dilatées. L'organisme est prêt à « combattre ou fuir ».</li>
<li><strong>Phase de résistance</strong> : si la situation dure, les surrénales sécrètent du <strong>cortisol</strong>, qui maintient un niveau élevé d'énergie disponible. L'organisme s'adapte, mais au prix d'une forte dépense.</li>
<li><strong>Phase d'épuisement</strong> : si le stress se prolonge, les ressources s'épuisent. L'organisme ne parvient plus à s'adapter et des troubles apparaissent.</li>
</ol>
<div class="encart" data-type="piege"><strong>Piège :</strong> ne pas confondre les deux hormones. L'<strong>adrénaline</strong> agit très vite et brièvement (réaction immédiate) ; le <strong>cortisol</strong> agit plus lentement et plus longtemps (adaptation au stress qui dure).</div>`
            },
            {
              titre: "Les conséquences d'un stress chronique",
              contenu: `<p>Un stress qui dure peut entraîner des <strong>conséquences pathologiques</strong> :</p>
<ul>
<li><strong>physiques</strong> : maux de tête, douleurs musculaires (dos, nuque), troubles digestifs, troubles du sommeil, hypertension, maladies cardiovasculaires, baisse des défenses immunitaires (infections plus fréquentes) ;</li>
<li><strong>psychologiques</strong> : irritabilité, anxiété, difficultés de concentration, perte de confiance, dépression, idées suicidaires dans les cas graves ;</li>
<li><strong>comportementales</strong> : repli sur soi, agressivité, troubles alimentaires, consommation accrue de tabac, d'alcool, de cannabis ou de médicaments, absentéisme.</li>
</ul>
<p>La <strong>santé mentale</strong> fait partie intégrante de la santé. Elle n'est pas seulement l'absence de troubles psychiques : c'est la capacité à faire face aux difficultés normales de la vie, à apprendre, à travailler et à entretenir des relations.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> une aide-soignante enchaîne les journées en sous-effectif. Elle dort mal, a mal au dos, s'énerve facilement et augmente sa consommation de cigarettes. Ces signes doivent l'alerter : en parler à son médecin traitant ou au médecin du travail permet d'agir avant l'épuisement.</div>`
            },
            {
              titre: "Gérer son stress et demander de l'aide",
              contenu: `<p>Certaines <strong>mesures individuelles</strong> aident à mieux gérer le stress :</p>
<ul>
<li>identifier les sources de stress et ce qui dépend de soi ;</li>
<li><strong>organiser son temps</strong> : planifier, fixer des priorités, découper un travail en étapes, anticiper les révisions ;</li>
<li>préserver une bonne <strong>hygiène de vie</strong> : sommeil suffisant, activité physique, alimentation régulière, limitation des excitants et des écrans ;</li>
<li>pratiquer des techniques de <strong>relaxation</strong> : respiration lente et profonde (par exemple la cohérence cardiaque), méditation, étirements ;</li>
<li><strong>parler</strong> à quelqu'un de confiance, garder des loisirs et des moments de plaisir ;</li>
<li>éviter les « fausses solutions » (alcool, cannabis, médicaments sans avis médical).</li>
</ul>
<p>Quand le stress devient envahissant, il faut <strong>demander de l'aide</strong> : infirmier ou psychologue de l'établissement, médecin traitant, Maisons des adolescents, Fil Santé Jeunes (0 800 235 236, gratuit et anonyme). En cas d'idées suicidaires, le <strong>3114</strong> est le numéro national de prévention du suicide, joignable 24 h/24 et gratuitement. En cas d'urgence vitale, appeler le 15 ou le 112.</p>
<div class="encart" data-type="methode"><strong>Méthode :</strong> exercice de respiration à faire avant une épreuve ou une situation tendue : inspirer lentement par le nez pendant 5 secondes, expirer lentement par la bouche pendant 5 secondes, pendant 3 à 5 minutes.</div>`
            }
          ],
          points_cles: [
            "Le stress naît d'un déséquilibre perçu entre les contraintes et les ressources de la personne.",
            "Le stress aigu est ponctuel et peut être utile ; le stress chronique est nocif.",
            "La vulnérabilité au stress varie selon les personnes ; le soutien social protège.",
            "Le syndrome général d'adaptation comporte trois phases : alarme, résistance, épuisement.",
            "L'adrénaline agit immédiatement ; le cortisol permet l'adaptation à un stress qui dure.",
            "Le stress chronique a des conséquences physiques, psychologiques et comportementales.",
            "Organisation, hygiène de vie, relaxation et parole sont des moyens de gestion ; le 3114 est le numéro national de prévention du suicide."
          ],
          lexique: [
            { terme: "Stress", def: "Réaction de l'organisme face à une situation perçue comme menaçante ou trop exigeante." },
            { terme: "Facteur de stress", def: "Situation ou événement qui déclenche une réaction de stress." },
            { terme: "Vulnérabilité", def: "Fragilité plus ou moins grande d'une personne face aux facteurs de stress." },
            { terme: "Adrénaline", def: "Hormone sécrétée par les glandes surrénales qui prépare très rapidement l'organisme à réagir." },
            { terme: "Cortisol", def: "Hormone des glandes surrénales qui maintient l'organisme en état d'adaptation lors d'un stress prolongé." },
            { terme: "Santé mentale", def: "État de bien-être qui permet de faire face aux difficultés de la vie, de travailler et d'avoir des relations satisfaisantes." }
          ]
        },
        {
          id: "securite-alimentaire",
          titre: "A9 — La sécurité alimentaire et les risques d'intoxication",
          duree: 16,
          objectifs: [
            "Définir la sécurité alimentaire et distinguer qualité microbiologique et qualité chimique.",
            "Identifier les agents contaminants et les conditions de développement des micro-organismes.",
            "Expliquer la toxi-infection alimentaire et ses conséquences.",
            "Appliquer les règles d'hygiène : chaîne du froid, modes de conservation, lavage des mains, dates limites.",
            "Connaître la réglementation et le principe de précaution."
          ],
          sections: [
            {
              titre: "Qualité microbiologique et qualité chimique",
              contenu: `<p>La <strong>sécurité alimentaire</strong> (ou sécurité sanitaire des aliments) vise à garantir que les aliments consommés ne présentent pas de danger pour la santé. Un aliment sûr doit avoir :</p>
<ul>
<li>une bonne <strong>qualité microbiologique</strong> : pas de micro-organismes pathogènes (qui rendent malade) ni de quantités excessives de micro-organismes d'altération ;</li>
<li>une bonne <strong>qualité chimique</strong> : pas de résidus de pesticides, de métaux lourds (plomb, mercure), de produits de nettoyage, de substances issues des emballages au-delà des seuils autorisés, ni d'allergène non signalé.</li>
</ul>
<p>On distingue aussi des <strong>contaminants physiques</strong> : morceaux de verre, d'os, de métal, cheveux.</p>
<p>Parmi les micro-organismes présents dans les aliments, on distingue :</p>
<table>
<thead><tr><th>Flore</th><th>Effet</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>Flore utile</td><td>Utilisée pour fabriquer des aliments</td><td>Levures du pain, ferments du yaourt et du fromage</td></tr>
<tr><td>Flore d'altération (de décomposition)</td><td>Modifie l'aspect, l'odeur, le goût ; l'aliment se dégrade mais n'est pas toujours dangereux</td><td>Moisissures sur le pain, lait qui tourne</td></tr>
<tr><td>Flore pathogène</td><td>Provoque des maladies, souvent <strong>sans modifier</strong> l'aspect ni le goût de l'aliment</td><td>Salmonelles, staphylocoque doré, <em>Listeria</em>, <em>Clostridium perfringens</em>, certaines <em>Escherichia coli</em>, <em>Campylobacter</em></td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège :</strong> un aliment qui a bon aspect et bonne odeur peut être dangereux. Les bactéries pathogènes ne se voient pas et ne se sentent pas.</div>`
            },
            {
              titre: "Contamination et multiplication des micro-organismes",
              contenu: `<p>Les sources de contamination peuvent être résumées par la <strong>méthode des 5 M</strong> :</p>
<ul>
<li><strong>Main-d'œuvre</strong> : mains sales, porteur de germes (nez, gorge, plaie infectée), tenue souillée ;</li>
<li><strong>Matières premières</strong> : viandes, œufs, légumes terreux, produits mal conservés ;</li>
<li><strong>Matériel</strong> : plans de travail, couteaux, planches mal nettoyés ;</li>
<li><strong>Milieu</strong> : air, poussières, nuisibles (rongeurs, insectes), locaux ;</li>
<li><strong>Méthodes</strong> : mauvaises pratiques, croisement entre le « propre » et le « sale », rupture de la chaîne du froid.</li>
</ul>
<p>Les bactéries se multiplient très vite quand les conditions sont favorables : <strong>humidité</strong>, <strong>nutriments</strong>, <strong>temps</strong> et surtout <strong>température</strong>. La plupart des bactéries pathogènes se multiplient activement entre <strong>+10 °C et +63 °C</strong>, avec un maximum vers 37 °C, où une population peut doubler en une vingtaine de minutes.</p>
<table>
<thead><tr><th>Température</th><th>Effet sur les bactéries</th></tr></thead>
<tbody>
<tr><td>Au-dessus de +63 °C</td><td>Multiplication arrêtée ; destruction progressive à la cuisson</td></tr>
<tr><td>De +10 °C à +63 °C</td><td>Zone dangereuse : multiplication rapide</td></tr>
<tr><td>De 0 °C à +4 °C (réfrigération)</td><td>Multiplication très ralentie (mais <em>Listeria</em> peut encore se multiplier)</td></tr>
<tr><td>−18 °C et moins (congélation, surgélation)</td><td>Multiplication arrêtée, mais les bactéries ne sont pas tuées</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Les toxi-infections alimentaires",
              contenu: `<p>Une <strong>toxi-infection alimentaire</strong> est une maladie provoquée par la consommation d'un aliment contaminé par des bactéries pathogènes ou par les <strong>toxines</strong> qu'elles produisent. Quand au moins <strong>deux personnes</strong> présentent des symptômes semblables (souvent digestifs) dont on peut rapporter la cause à une même origine alimentaire, on parle de <strong>toxi-infection alimentaire collective (TIAC)</strong>. Toute TIAC doit être <strong>déclarée</strong> aux autorités sanitaires (agence régionale de santé) par le médecin ou le responsable de l'établissement.</p>
<p>Symptômes fréquents : nausées, vomissements, diarrhées, douleurs abdominales, fièvre. Ils apparaissent de quelques heures à quelques jours après le repas. Les formes graves (déshydratation, listériose chez la femme enceinte, syndrome hémolytique et urémique chez le jeune enfant) touchent surtout les personnes fragiles.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> lors d'un banquet, une mayonnaise maison préparée avec des œufs crus est laissée plusieurs heures à température ambiante. Le lendemain, une trentaine d'invités souffrent de diarrhées et de fièvre : il s'agit d'une TIAC, probablement à salmonelles. Il fallait utiliser des ovoproduits pasteurisés et garder la préparation au froid.</div>`
            },
            {
              titre: "Les règles d'hygiène et de conservation",
              contenu: `<h4>L'hygiène du personnel</h4>
<p>Le <strong>lavage des mains</strong> est la mesure la plus importante : à la prise de poste, après être allé aux toilettes, après s'être mouché, après avoir manipulé des produits crus, des déchets ou de l'argent, et à chaque changement de tâche. Tenue propre, cheveux couverts, ongles courts, pas de bijoux, plaies protégées par un pansement et un gant.</p>
<h4>La chaîne du froid</h4>
<p>La <strong>chaîne du froid</strong> est le maintien sans interruption d'un produit à basse température, depuis sa fabrication jusqu'à sa consommation. Lors des courses, on achète les produits frais et surgelés en dernier, on utilise un sac isotherme et on les range rapidement. Un produit décongelé ne doit <strong>jamais être recongelé</strong> cru.</p>
<h4>Les modes de conservation</h4>
<ul>
<li>par le <strong>froid</strong> : réfrigération, congélation, surgélation ;</li>
<li>par la <strong>chaleur</strong> : pasteurisation (lait, jus), stérilisation et appertisation (conserves) ;</li>
<li>par d'autres moyens : séchage, salage, sucrage, fumage, mise sous vide ou sous atmosphère modifiée.</li>
</ul>
<h4>Les dates à lire</h4>
<table>
<thead><tr><th>Mention</th><th>Nom</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>« À consommer jusqu'au… »</td><td>Date limite de consommation (DLC)</td><td>Produits très périssables (viandes, yaourts, plats frais) : après cette date, le produit peut être dangereux, il ne doit plus être vendu ni consommé</td></tr>
<tr><td>« À consommer de préférence avant… »</td><td>Date de durabilité minimale (DDM)</td><td>Produits secs ou stables (pâtes, biscuits, conserves) : après cette date, le produit peut perdre en qualité (goût, croquant) mais n'est pas dangereux s'il a été bien conservé</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en restauration, on applique le principe de la « marche en avant » (les produits vont toujours du sale vers le propre, sans retour en arrière) et on refroidit rapidement les plats cuisinés à l'avance (de +63 °C à moins de +10 °C en moins de 2 heures).</div>`
            },
            {
              titre: "Réglementation et principe de précaution",
              contenu: `<p>La réglementation européenne (le « paquet hygiène ») rend les professionnels de l'alimentation <strong>responsables</strong> de la sécurité des aliments qu'ils produisent, transforment ou vendent. Ils doivent mettre en place un <strong>plan de maîtrise sanitaire</strong> fondé sur la méthode <strong>HACCP</strong> (analyse des dangers et maîtrise des points critiques), assurer la <strong>traçabilité</strong> des produits (savoir d'où ils viennent et où ils sont partis) et retirer ou rappeler un produit dangereux.</p>
<p>Les contrôles sont réalisés par les services de l'État (services vétérinaires, répression des fraudes). Les résultats des contrôles d'hygiène des restaurants et commerces sont rendus publics (dispositif « Alim'confiance »). Le consommateur peut aussi consulter les rappels de produits sur le site officiel Rappel Conso.</p>
<p>Le <strong>principe de précaution</strong> permet aux autorités de prendre des mesures (retrait d'un produit, interdiction d'une substance) <strong>même quand le risque n'est pas encore scientifiquement prouvé</strong>, s'il existe un doute sérieux sur un danger grave pour la santé ou l'environnement.</p>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour analyser une intoxication alimentaire, rechercher : l'aliment en cause, le micro-organisme ou la substance probable, la source de contamination (5 M), la condition qui a permis la multiplication (température, temps), puis proposer les mesures qui auraient évité l'accident.</div>`
            }
          ],
          points_cles: [
            "Un aliment sûr a une bonne qualité microbiologique et chimique, sans contaminant physique.",
            "La flore pathogène ne modifie généralement ni l'aspect ni le goût de l'aliment.",
            "Les bactéries se multiplient surtout entre +10 °C et +63 °C ; le froid ralentit ou bloque leur multiplication sans les tuer.",
            "Une TIAC concerne au moins deux personnes ayant les mêmes symptômes liés à un même aliment ; elle doit être déclarée.",
            "Le lavage des mains et le respect de la chaîne du froid sont les mesures de base.",
            "La DLC est une limite de sécurité ; la DDM est une limite de qualité.",
            "Les professionnels appliquent la méthode HACCP et assurent la traçabilité ; le principe de précaution permet d'agir en cas de doute sérieux."
          ],
          lexique: [
            { terme: "Micro-organisme pathogène", def: "Micro-organisme capable de provoquer une maladie." },
            { terme: "Toxine", def: "Substance toxique produite par certaines bactéries, parfois résistante à la cuisson." },
            { terme: "TIAC", def: "Toxi-infection alimentaire collective : au moins deux cas de symptômes semblables liés à un même aliment." },
            { terme: "Chaîne du froid", def: "Maintien ininterrompu d'un produit à basse température de sa fabrication à sa consommation." },
            { terme: "DLC", def: "Date limite de consommation, au-delà de laquelle un produit périssable peut être dangereux." },
            { terme: "Traçabilité", def: "Possibilité de suivre un produit à toutes les étapes de sa production et de sa distribution." },
            { terme: "Principe de précaution", def: "Principe qui autorise des mesures de protection en cas de doute sérieux sur un danger grave, même sans certitude scientifique." }
          ]
        },
      ]
    },
    {
      titre: "Partie B — L'individu responsable dans son environnement",
      chapitres: [
        {
          id: "alimentation-ecoresponsable",
          titre: "B1 — L'alimentation écoresponsable, la consommation et les déchets",
          duree: 15,
          objectifs: [
            "Définir le développement durable et ses trois piliers.",
            "Identifier l'impact environnemental de l'alimentation, de la production au déchet.",
            "Expliquer l'intérêt des circuits courts, des produits de saison et des modes de production durables.",
            "Reconnaître les principaux labels.",
            "Proposer des comportements écoresponsables face à la surconsommation, au gaspillage et aux déchets."
          ],
          sections: [
            {
              titre: "Le développement durable",
              contenu: `<p>Le <strong>développement durable</strong> est « un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures de répondre aux leurs » (rapport Brundtland, 1987). Il repose sur <strong>trois piliers</strong> qui doivent être conciliés :</p>
<table>
<thead><tr><th>Pilier</th><th>Objectif</th><th>Exemple dans l'alimentation</th></tr></thead>
<tbody>
<tr><td>Environnemental</td><td>Préserver les ressources, la biodiversité, le climat</td><td>Limiter les pesticides, les emballages et le transport</td></tr>
<tr><td>Social</td><td>Satisfaire les besoins de tous, équité, santé</td><td>Accès de tous à une alimentation saine, conditions de travail correctes des producteurs</td></tr>
<tr><td>Économique</td><td>Créer des richesses de façon viable</td><td>Rémunération juste des agriculteurs, emplois locaux</td></tr>
</tbody>
</table>
<p>En 2015, les pays de l'ONU ont adopté <strong>17 objectifs de développement durable (ODD)</strong> à atteindre d'ici 2030, parmi lesquels « faim zéro », « consommation et production responsables » ou « lutte contre les changements climatiques ».</p>`
            },
            {
              titre: "L'impact environnemental de l'alimentation",
              contenu: `<p>L'alimentation représente une part importante de l'empreinte environnementale d'un ménage. Chaque étape a un impact :</p>
<ul>
<li><strong>production</strong> : engrais et pesticides (pollution des sols et de l'eau), consommation d'eau, déforestation, émissions de gaz à effet de serre (en particulier l'élevage de ruminants, qui produit du méthane) ;</li>
<li><strong>transformation</strong> : consommation d'énergie des usines, additifs ;</li>
<li><strong>transport</strong> : produits venus de loin, surtout par avion ;</li>
<li><strong>emballage</strong> : plastique, suremballage ;</li>
<li><strong>conservation et cuisson</strong> : énergie des réfrigérateurs, congélateurs, fours ;</li>
<li><strong>déchets</strong> : emballages et restes alimentaires.</li>
</ul>
<p>Les produits d'origine animale, en particulier la viande de bœuf, ont en général un impact beaucoup plus élevé que les produits végétaux (céréales, légumineuses, légumes). Les fruits et légumes cultivés hors saison sous serre chauffée ou importés par avion ont aussi un fort impact.</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> « local » ne veut pas toujours dire « moins polluant ». Une tomate locale cultivée en hiver sous serre chauffée peut émettre plus qu'une tomate de saison transportée par camion. L'idéal est de combiner <strong>local et de saison</strong>.</div>`
            },
            {
              titre: "Consommer autrement : circuits courts, saisonnalité, labels",
              contenu: `<p>Un <strong>circuit court</strong> est un mode de vente qui comporte <strong>au plus un intermédiaire</strong> entre le producteur et le consommateur : vente à la ferme, marché, AMAP (association pour le maintien d'une agriculture paysanne), magasin de producteurs, drive fermier. Il rémunère mieux le producteur et réduit souvent le transport et les emballages.</p>
<p>Manger des <strong>produits de saison</strong> évite les serres chauffées et les longs transports, et les produits sont souvent moins chers et plus savoureux.</p>
<p>L'<strong>agriculture biologique</strong> interdit les pesticides et engrais chimiques de synthèse et les OGM. L'<strong>agriculture durable</strong> (ou raisonnée, agroécologie) cherche à limiter les intrants et à préserver les sols.</p>
<table>
<thead><tr><th>Label ou logo</th><th>Ce qu'il garantit</th></tr></thead>
<tbody>
<tr><td>AB et Eurofeuille (logo bio européen)</td><td>Mode de production biologique</td></tr>
<tr><td>Label Rouge</td><td>Qualité gustative supérieure</td></tr>
<tr><td>AOP, AOC, IGP</td><td>Origine géographique et savoir-faire traditionnel</td></tr>
<tr><td>Haute valeur environnementale (HVE)</td><td>Exploitation agricole respectant certains critères environnementaux</td></tr>
<tr><td>MSC (pêche durable)</td><td>Poisson issu d'une pêche qui préserve les stocks</td></tr>
<tr><td>Commerce équitable</td><td>Rémunération juste des producteurs, souvent dans les pays du Sud</td></tr>
</tbody>
</table>
<p>La loi impose à la <strong>restauration collective</strong> publique (cantines, hôpitaux) de proposer une part de produits durables et de qualité, dont des produits bio, ainsi qu'un menu végétarien régulier.</p>`
            },
            {
              titre: "Surconsommation, gaspillage et déchets",
              contenu: `<p>La <strong>surconsommation</strong> consiste à acheter plus que ce dont on a besoin, souvent poussé par la publicité, les promotions et les effets de mode. Elle épuise les ressources et produit beaucoup de déchets.</p>
<p>Le <strong>gaspillage alimentaire</strong> représente en France plusieurs millions de tonnes de nourriture perdue chaque année, à toutes les étapes : production, transformation, distribution, restauration et foyers. Les causes à la maison : achats excessifs, mauvaise lecture des dates, mauvaise conservation, portions trop grandes.</p>
<p>Les <strong>déchets</strong> issus de l'alimentation (emballages, biodéchets) doivent être triés. Depuis 2024, le tri à la source des <strong>biodéchets</strong> (restes alimentaires, épluchures) est généralisé : compostage individuel ou collecte séparée. La hiérarchie de gestion des déchets est :</p>
<ol>
<li><strong>réduire</strong> (ne pas produire le déchet : acheter en vrac, refuser les objets inutiles) ;</li>
<li><strong>réutiliser</strong> (contenants réutilisables, réemploi, réparation) ;</li>
<li><strong>recycler</strong> (tri sélectif, compost) ;</li>
<li><strong>valoriser</strong> en énergie (incinération avec récupération de chaleur) ;</li>
<li>en dernier recours, <strong>éliminer</strong> (enfouissement).</li>
</ol>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> une boulangerie donne ses invendus du jour à une association d'aide alimentaire ou les vend à prix réduit via une application anti-gaspillage. Un restaurant propose des « doggy bags » pour que les clients emportent leurs restes : c'est d'ailleurs une obligation pour la restauration commerciale qui doit mettre à disposition des contenants réutilisables ou recyclables à la demande.</div>`
            },
            {
              titre: "Les comportements écoresponsables",
              contenu: `<p>Un <strong>comportement écoresponsable</strong> est une manière d'agir qui limite son impact sur l'environnement tout en respectant sa santé et les autres. Les mesures sont :</p>
<ul>
<li><strong>individuelles</strong> : établir une liste de courses, acheter de saison et local, privilégier le vrac et les produits peu emballés, manger plus de végétaux, cuisiner les restes, comprendre la différence entre DLC et DDM, trier ses déchets, boire l'eau du robinet ;</li>
<li><strong>collectives</strong> : lois contre le gaspillage (interdiction pour les grandes surfaces de jeter des invendus encore consommables, obligation de les proposer à des associations), interdiction progressive des plastiques à usage unique, menus végétariens en cantine, aides au compostage, étiquetage environnemental.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> manger écoresponsable, c'est manger de saison, local si possible, moins de produits animaux et transformés, peu emballé, et sans gaspiller. Ce qui est bon pour la planète est souvent bon pour la santé.</div>`
            }
          ],
          points_cles: [
            "Le développement durable concilie trois piliers : environnemental, social et économique.",
            "L'alimentation a un impact à chaque étape : production, transformation, transport, emballage, conservation, déchets.",
            "Un circuit court comporte au plus un intermédiaire entre producteur et consommateur.",
            "Les produits de saison, locaux et d'origine végétale ont généralement un impact plus faible.",
            "Les labels (AB, Label Rouge, AOP, IGP, MSC, commerce équitable) garantissent des critères précis.",
            "La hiérarchie des déchets : réduire, réutiliser, recycler, valoriser, éliminer en dernier recours.",
            "La lutte contre le gaspillage alimentaire repose sur des gestes individuels et des lois collectives."
          ],
          lexique: [
            { terme: "Développement durable", def: "Développement qui répond aux besoins du présent sans compromettre ceux des générations futures." },
            { terme: "Circuit court", def: "Mode de commercialisation avec au plus un intermédiaire entre producteur et consommateur." },
            { terme: "Saisonnalité", def: "Fait de consommer les fruits et légumes à la période où ils poussent naturellement." },
            { terme: "Agriculture biologique", def: "Mode de production sans pesticides ni engrais chimiques de synthèse et sans OGM." },
            { terme: "Surconsommation", def: "Consommation excessive, au-delà des besoins réels." },
            { terme: "Gaspillage alimentaire", def: "Nourriture destinée à la consommation humaine qui est perdue ou jetée." },
            { terme: "Biodéchet", def: "Déchet organique biodégradable (restes alimentaires, épluchures), qui peut être composté." }
          ]
        },
        {
          id: "risques-majeurs",
          titre: "B2 — Les risques majeurs",
          duree: 15,
          objectifs: [
            "Définir un risque majeur à partir des notions d'aléa et d'enjeu.",
            "Distinguer risques naturels et risques technologiques.",
            "Identifier les risques de sa commune et les documents d'information.",
            "Reconnaître le signal national d'alerte et les autres moyens d'alerte.",
            "Appliquer la conduite à tenir avant, pendant et après un événement."
          ],
          sections: [
            {
              titre: "Qu'est-ce qu'un risque majeur ?",
              contenu: `<p>Un <strong>risque majeur</strong> est la possibilité qu'un événement d'origine naturelle ou humaine se produise et provoque des dommages très importants (nombreuses victimes, dégâts matériels considérables, atteintes à l'environnement), dépassant les capacités de réaction habituelles de la société.</p>
<p>Il résulte de la rencontre de deux éléments :</p>
<ul>
<li>l'<strong>aléa</strong> : l'événement potentiellement dangereux (crue d'une rivière, séisme, explosion d'une usine) ;</li>
<li>les <strong>enjeux</strong> : les personnes, les biens, les activités et l'environnement exposés à cet aléa.</li>
</ul>
<p>Une crue dans une vallée inhabitée n'est pas un risque majeur ; la même crue dans une ville l'est. Le risque majeur se caractérise par une <strong>faible fréquence</strong> (il se produit rarement, on a tendance à l'oublier) et une <strong>énorme gravité</strong>.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> risque majeur = aléa × enjeux. Faible fréquence, forte gravité.</div>`
            },
            {
              titre: "Risques naturels et risques technologiques",
              contenu: `<table>
<thead><tr><th>Famille</th><th>Exemples</th><th>Dangers principaux</th></tr></thead>
<tbody>
<tr><td>Risques naturels</td><td>Inondation, séisme, mouvement de terrain, tempête, cyclone, avalanche, feu de forêt, éruption volcanique, submersion marine, canicule</td><td>Noyade, ensevelissement, chutes d'objets, effondrement des bâtiments, brûlures, isolement</td></tr>
<tr><td>Risques technologiques</td><td>Risque industriel (sites classés « Seveso » : usines chimiques, dépôts de produits pétroliers), risque nucléaire, rupture de barrage, transport de matières dangereuses (route, rail, canalisations), risque minier</td><td>Incendie, explosion, nuage toxique, contamination radioactive, onde de submersion</td></tr>
</tbody>
</table>
<p>La France connaît surtout des inondations (premier risque naturel en France), des tempêtes, des feux de forêt dans le Sud et des séismes surtout aux Antilles et dans certaines zones de montagne. Des catastrophes passées ont marqué la réglementation : explosion de l'usine AZF à Toulouse en 2001, incendie de l'usine Lubrizol à Rouen en 2019, tempête Xynthia en 2010.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un chauffeur routier transportant du carburant a un accident sur l'autoroute. C'est un accident de <strong>transport de matières dangereuses</strong>. Le camion porte des plaques orange avec des codes qui indiquent aux secours la nature du danger et de la matière transportée.</div>`
            },
            {
              titre: "L'information préventive",
              contenu: `<p>Tout citoyen a le <strong>droit d'être informé</strong> sur les risques majeurs auxquels il est exposé et sur les mesures de sauvegarde. Plusieurs documents existent :</p>
<table>
<thead><tr><th>Document</th><th>Réalisé par</th><th>Contenu</th></tr></thead>
<tbody>
<tr><td>DDRM (dossier départemental sur les risques majeurs)</td><td>Préfet</td><td>Liste des risques du département et des communes concernées</td></tr>
<tr><td>DICRIM (document d'information communal sur les risques majeurs)</td><td>Maire</td><td>Risques de la commune, consignes, moyens d'alerte ; consultable en mairie</td></tr>
<tr><td>PCS (plan communal de sauvegarde)</td><td>Maire</td><td>Organisation de la commune pour protéger la population en cas de crise</td></tr>
<tr><td>PPR (plan de prévention des risques)</td><td>État</td><td>Règles d'urbanisme : zones où il est interdit ou réglementé de construire</td></tr>
<tr><td>PPMS (plan particulier de mise en sûreté)</td><td>Établissement scolaire</td><td>Organisation de la mise à l'abri des élèves et des personnels</td></tr>
</tbody>
</table>
<p>Lors de l'achat ou de la location d'un logement, le vendeur ou le bailleur doit informer l'acquéreur ou le locataire des risques connus. Le site officiel Géorisques permet de connaître les risques près de chez soi.</p>`
            },
            {
              titre: "L'alerte",
              contenu: `<p>En cas d'événement grave, la population est alertée par plusieurs moyens :</p>
<ul>
<li>le <strong>signal national d'alerte</strong>, diffusé par les sirènes : un son <strong>modulé</strong> (montant et descendant) composé de <strong>trois séquences d'une minute et 41 secondes</strong>, séparées par un silence de 5 secondes ;</li>
<li>la <strong>fin d'alerte</strong> : un son <strong>continu de 30 secondes</strong> ;</li>
<li>les sirènes sont testées <strong>le premier mercredi de chaque mois à midi</strong> (son plus court) ;</li>
<li>le dispositif <strong>FR-Alert</strong> envoie une notification sur les téléphones portables présents dans la zone concernée, avec un signal sonore spécifique, même en mode silencieux ;</li>
<li>les radios (Radio France, radios locales conventionnées), les véhicules munis de haut-parleurs, les automates d'appel de la commune, les réseaux sociaux officiels de la préfecture et de la mairie.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège :</strong> ne pas confondre le signal national d'alerte (son modulé, montant et descendant) et la fin d'alerte (son continu). Le test mensuel du premier mercredi n'est pas une alerte.</div>`
            },
            {
              titre: "La conduite à tenir",
              contenu: `<h4>Avant : se préparer</h4>
<p>Connaître les risques de sa commune et de son lieu de travail, repérer les consignes, préparer un <strong>kit d'urgence</strong> (radio à piles, lampe de poche, piles, eau, nourriture non périssable, médicaments, copies des papiers importants, vêtements chauds, trousse de secours).</p>
<h4>Pendant : les consignes générales</h4>
<ul>
<li><strong>se mettre à l'abri</strong> dans un bâtiment (sauf consigne d'évacuation), fermer portes et fenêtres en cas de nuage toxique ;</li>
<li><strong>écouter la radio</strong> et suivre les consignes des autorités ;</li>
<li><strong>ne pas aller chercher les enfants à l'école</strong> : ils sont pris en charge par les personnels dans le cadre du PPMS ;</li>
<li><strong>ne pas téléphoner</strong> sauf urgence, pour laisser les réseaux libres aux secours ;</li>
<li>ne pas fumer, ne pas provoquer de flamme ni d'étincelle (risque de fuite de gaz).</li>
</ul>
<table>
<thead><tr><th>Événement</th><th>Consignes spécifiques</th></tr></thead>
<tbody>
<tr><td>Inondation</td><td>Monter dans les étages, couper gaz et électricité, ne pas prendre sa voiture ni traverser une zone inondée</td></tr>
<tr><td>Séisme</td><td>Pendant la secousse, s'abriter sous un meuble solide, s'éloigner des fenêtres ; à l'extérieur, s'éloigner des bâtiments et des fils électriques ; après, évacuer sans prendre l'ascenseur</td></tr>
<tr><td>Nuage toxique</td><td>Se confiner dans un local clos, boucher les aérations, arrêter la ventilation</td></tr>
<tr><td>Accident nucléaire</td><td>Se mettre à l'abri, prendre l'iode stable uniquement sur ordre des autorités</td></tr>
<tr><td>Tempête</td><td>Rester chez soi, rentrer les objets qui peuvent s'envoler, ne pas monter sur les toits</td></tr>
<tr><td>Feu de forêt</td><td>Ne pas sortir si le feu approche, fermer les volets, arroser les abords si possible</td></tr>
</tbody>
</table>
<h4>Après</h4>
<p>Respecter la fin d'alerte, ne rentrer chez soi que sur autorisation, signaler les dégâts, aider les voisins vulnérables, déclarer les dommages à son assureur (la reconnaissance de l'état de catastrophe naturelle permet une indemnisation).</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> dans un magasin situé près d'un site industriel, les sirènes retentissent. Les employés ferment les portes, font entrer les clients présents sur le parking, arrêtent la ventilation et écoutent la radio en attendant la fin d'alerte.</div>`
            }
          ],
          points_cles: [
            "Un risque majeur résulte de la rencontre d'un aléa et d'enjeux ; il est peu fréquent mais très grave.",
            "On distingue les risques naturels (inondation, séisme, tempête…) et technologiques (industriel, nucléaire, transport de matières dangereuses, rupture de barrage).",
            "Le DICRIM, réalisé par le maire, informe sur les risques de la commune et les consignes.",
            "Le signal national d'alerte est un son modulé de trois fois 1 min 41 s ; la fin d'alerte est un son continu de 30 s.",
            "FR-Alert envoie les alertes sur les téléphones portables de la zone concernée.",
            "Consignes générales : se mettre à l'abri, écouter la radio, ne pas aller chercher les enfants à l'école, ne pas téléphoner.",
            "Le kit d'urgence permet de tenir plusieurs jours en autonomie."
          ],
          lexique: [
            { terme: "Risque majeur", def: "Possibilité d'un événement naturel ou technologique aux conséquences très graves pour la population, les biens et l'environnement." },
            { terme: "Aléa", def: "Événement potentiellement dangereux, défini par sa probabilité et son intensité." },
            { terme: "Enjeux", def: "Personnes, biens, activités et milieux exposés à un aléa." },
            { terme: "DICRIM", def: "Document d'information communal sur les risques majeurs, établi par le maire." },
            { terme: "Confinement", def: "Mise à l'abri dans un local clos, portes et aérations fermées, pour se protéger d'un nuage toxique." },
            { terme: "Signal national d'alerte", def: "Son de sirène modulé qui avertit la population d'un danger imminent et l'invite à se mettre à l'abri." }
          ]
        },
        {
          id: "bruit-au-quotidien",
          titre: "B3 — Le bruit au quotidien",
          duree: 15,
          objectifs: [
            "Caractériser un son par sa fréquence, son intensité et sa durée.",
            "Décrire le fonctionnement de l'oreille.",
            "Distinguer surdité de transmission et surdité de perception.",
            "Identifier les effets auditifs et extra-auditifs du bruit.",
            "Connaître la réglementation et les moyens de protection individuels et collectifs."
          ],
          sections: [
            {
              titre: "Son et bruit : les caractéristiques",
              contenu: `<p>Un <strong>son</strong> est une vibration de l'air (onde sonore) perçue par l'oreille. Un <strong>bruit</strong> est un son ou un mélange de sons jugé désagréable, gênant ou dangereux. La même musique peut être un plaisir pour l'un et un bruit pour le voisin.</p>
<table>
<thead><tr><th>Caractéristique</th><th>Définition</th><th>Unité</th><th>Repères</th></tr></thead>
<tbody>
<tr><td>Fréquence</td><td>Nombre de vibrations par seconde ; distingue les sons graves (basse fréquence) et aigus (haute fréquence)</td><td>Hertz (Hz)</td><td>L'oreille humaine perçoit environ de 20 Hz à 20 000 Hz</td></tr>
<tr><td>Intensité (niveau sonore)</td><td>Force du son, liée à la pression acoustique</td><td>Décibel, noté dB ou dB(A) (pondéré pour correspondre à la sensibilité de l'oreille)</td><td>0 dB : seuil d'audibilité ; environ 80-85 dB(A) : seuil de risque ; 120 dB(A) : seuil de douleur</td></tr>
<tr><td>Durée d'exposition</td><td>Temps pendant lequel on est exposé</td><td>Heures, minutes</td><td>Plus le niveau est élevé, plus la durée sans risque est courte</td></tr>
</tbody>
</table>
<p>L'échelle des décibels est <strong>logarithmique</strong> : une augmentation de <strong>3 dB</strong> correspond à un <strong>doublement</strong> de l'énergie sonore. Deux machines de 80 dB(A) chacune ne font pas 160 dB(A), mais environ 83 dB(A). Pour la même dose de bruit reçue, quand le niveau augmente de 3 dB, la durée d'exposition doit être divisée par deux.</p>
<table>
<thead><tr><th>Niveau approximatif</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>30 dB(A)</td><td>Chambre calme la nuit</td></tr>
<tr><td>60 dB(A)</td><td>Conversation, restaurant calme</td></tr>
<tr><td>80 à 90 dB(A)</td><td>Rue à fort trafic, tondeuse, cuisine de restaurant en plein service</td></tr>
<tr><td>100 dB(A)</td><td>Marteau-piqueur, baladeur à fort volume</td></tr>
<tr><td>110 à 120 dB(A)</td><td>Concert, discothèque, près d'une sirène</td></tr>
<tr><td>140 dB(A)</td><td>Coup de feu, avion au décollage tout près</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Le fonctionnement de l'oreille",
              contenu: `<table>
<thead><tr><th>Partie</th><th>Éléments</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td>Oreille externe</td><td>Pavillon, conduit auditif</td><td>Capter et conduire le son jusqu'au tympan</td></tr>
<tr><td>Oreille moyenne</td><td>Tympan, chaîne des osselets (marteau, enclume, étrier), trompe d'Eustache</td><td>Transmettre et amplifier les vibrations jusqu'à l'oreille interne</td></tr>
<tr><td>Oreille interne</td><td>Cochlée (limaçon) contenant les <strong>cellules ciliées</strong>, nerf auditif ; vestibule (équilibre)</td><td>Transformer les vibrations en message nerveux envoyé au cerveau</td></tr>
</tbody>
</table>
<p>Le cerveau interprète le message nerveux : c'est là que le son est réellement « entendu ». Les <strong>cellules ciliées</strong> de la cochlée sont fragiles : un bruit trop fort ou trop long les abîme ou les détruit. Elles <strong>ne se régénèrent pas</strong>.</p>`
            },
            {
              titre: "Les effets du bruit sur la santé",
              contenu: `<h4>Effets auditifs</h4>
<ul>
<li><strong>Fatigue auditive</strong> : après une exposition (concert), on entend moins bien et on peut avoir des sifflements ; ces troubles disparaissent en principe après quelques heures de repos auditif.</li>
<li><strong>Acouphènes</strong> : bourdonnements ou sifflements perçus sans source extérieure, parfois permanents.</li>
<li><strong>Hyperacousie</strong> : sensibilité douloureuse aux sons ordinaires.</li>
<li><strong>Surdité</strong> (perte d'audition), qui peut être brutale (traumatisme sonore aigu après une explosion) ou progressive (exposition répétée).</li>
</ul>
<table>
<thead><tr><th>Type de surdité</th><th>Partie atteinte</th><th>Causes</th><th>Évolution</th></tr></thead>
<tbody>
<tr><td>Surdité de transmission</td><td>Oreille externe ou moyenne</td><td>Bouchon de cérumen, otite, tympan perforé</td><td>Souvent réversible ou soignable</td></tr>
<tr><td>Surdité de perception</td><td>Oreille interne (cellules ciliées) ou nerf auditif</td><td>Bruit, vieillissement, certains médicaments</td><td><strong>Irréversible</strong> ; seuls des appareils auditifs compensent</td></tr>
</tbody>
</table>
<h4>Effets extra-auditifs</h4>
<p>Le bruit agit sur tout l'organisme : troubles du sommeil, fatigue, stress, irritabilité, difficultés de concentration, augmentation de la pression artérielle et de la fréquence cardiaque, troubles digestifs. Il augmente aussi le risque d'accident en masquant les signaux d'alerte et en gênant la communication.</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> la surdité due au bruit est <strong>indolore et progressive</strong>. On ne s'en rend compte que lorsqu'elle est installée, et elle est définitive.</div>`
            },
            {
              titre: "La réglementation",
              contenu: `<ul>
<li><strong>Lieux diffusant de la musique amplifiée</strong> (discothèques, salles de concert, festivals) : le niveau moyen ne doit pas dépasser <strong>102 dB(A)</strong> sur 15 minutes ; l'exploitant doit afficher les niveaux, proposer gratuitement des protections auditives et prévoir des zones de repos auditif.</li>
<li><strong>Baladeurs et smartphones</strong> : la puissance maximale de sortie est limitée et un message d'avertissement doit s'afficher lorsqu'on monte le volume.</li>
<li><strong>Bruits de voisinage</strong> : un bruit gênant par sa durée, sa répétition ou son intensité peut être sanctionné, de jour comme de nuit (on parle de tapage nocturne la nuit).</li>
<li><strong>Bruit au travail</strong> : des valeurs d'exposition déclenchent des obligations pour l'employeur (80, 85 et 87 dB(A)) ; elles sont étudiées dans le chapitre sur les risques spécifiques au milieu professionnel.</li>
</ul>`
            },
            {
              titre: "Se protéger",
              contenu: `<p>La protection combine des mesures <strong>collectives</strong> (qui agissent sur la source ou la propagation) et <strong>individuelles</strong>.</p>
<ul>
<li><strong>Collectives</strong> : murs antibruit le long des routes, isolation phonique des logements, matériaux absorbants dans les cantines, réglementation des horaires de travaux, limiteurs de son dans les salles de concert.</li>
<li><strong>Individuelles</strong> : baisser le volume des écouteurs (pas plus de 60 % du volume maximal, pas plus d'une heure d'affilée), faire des pauses auditives, s'éloigner des enceintes, porter des <strong>bouchons d'oreille</strong> en concert ou des protections moulées sur mesure pour les musiciens, faire contrôler son audition en cas de sifflements persistants.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un élève en bac pro métiers de la musique ou un technicien son en salle de spectacle porte des protections auditives à atténuation linéaire, qui baissent le volume sans déformer le son.</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les trois facteurs du danger sont le <strong>niveau</strong>, la <strong>durée</strong> et la <strong>répétition</strong> des expositions. Après une soirée bruyante, il faut accorder à ses oreilles un repos auditif.</div>`
            }
          ],
          points_cles: [
            "Un son se caractérise par sa fréquence (Hz), son intensité (dB) et sa durée.",
            "L'oreille humaine perçoit environ de 20 à 20 000 Hz ; le seuil de douleur est d'environ 120 dB(A).",
            "+3 dB correspond à un doublement de l'énergie sonore : la durée d'exposition sans risque est alors divisée par deux.",
            "Les cellules ciliées de la cochlée détruites par le bruit ne se régénèrent pas.",
            "La surdité de transmission touche l'oreille externe ou moyenne ; la surdité de perception touche l'oreille interne et est irréversible.",
            "Le bruit a aussi des effets extra-auditifs : stress, troubles du sommeil, hypertension, accidents.",
            "Dans les lieux de musique amplifiée, le niveau est limité à 102 dB(A) en moyenne sur 15 minutes."
          ],
          lexique: [
            { terme: "Décibel (dB)", def: "Unité de mesure du niveau sonore ; le dB(A) est pondéré selon la sensibilité de l'oreille humaine." },
            { terme: "Fréquence", def: "Nombre de vibrations par seconde d'un son, exprimé en hertz ; elle distingue les graves des aigus." },
            { terme: "Cochlée", def: "Partie de l'oreille interne, en forme de limaçon, qui contient les cellules ciliées." },
            { terme: "Acouphène", def: "Sifflement ou bourdonnement perçu sans source sonore extérieure." },
            { terme: "Surdité de perception", def: "Perte d'audition due à une atteinte de l'oreille interne ou du nerf auditif, irréversible." },
            { terme: "Effet extra-auditif", def: "Conséquence du bruit sur la santé autre que l'audition (stress, sommeil, cœur…)." }
          ]
        },
        {
          id: "eau-developpement-durable",
          titre: "B4 — L'eau et le développement durable",
          duree: 14,
          objectifs: [
            "Décrire la répartition de l'eau sur Terre et définir le stress hydrique.",
            "Décrire le circuit urbain de l'eau, de la production d'eau potable à l'épuration.",
            "Identifier les sources de pollution de l'eau et leurs conséquences.",
            "Expliquer la notion d'empreinte eau.",
            "Proposer des mesures individuelles et collectives pour préserver la ressource."
          ],
          sections: [
            {
              titre: "Une ressource abondante mais limitée",
              contenu: `<p>L'eau recouvre environ 70 % de la surface de la Terre, mais <strong>environ 97,5 % de cette eau est salée</strong> (mers et océans). L'<strong>eau douce</strong> ne représente qu'environ 2,5 %, et elle est en grande partie bloquée dans les glaciers et les calottes polaires ou enfouie en profondeur. Moins de 1 % de l'eau de la planète est facilement accessible pour les besoins humains (lacs, rivières, nappes souterraines peu profondes).</p>
<p>Cette eau douce est très <strong>inégalement répartie</strong>. On parle de <strong>stress hydrique</strong> lorsque la demande en eau dépasse la quantité disponible ou lorsque sa qualité en limite l'usage. Quand la ressource ne suffit plus à couvrir les besoins essentiels, c'est la <strong>pénurie</strong>. Le changement climatique (sécheresses plus fréquentes), la croissance démographique, l'irrigation agricole et la pollution aggravent la situation, y compris en France, où des restrictions d'usage de l'eau sont désormais fréquentes en été.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'eau douce accessible est rare. Dans le monde, plus de deux milliards de personnes n'ont pas accès à une eau potable gérée en toute sécurité.</div>`
            },
            {
              titre: "Le circuit urbain de l'eau",
              contenu: `<p>L'<strong>eau potable</strong> est une eau que l'on peut boire sans risque pour la santé. Elle doit respecter des normes de qualité microbiologique et chimique strictes. En France, l'eau du robinet est l'un des aliments les plus contrôlés.</p>
<ol>
<li><strong>Captage</strong> : l'eau est prélevée dans une nappe souterraine ou une rivière. Des périmètres de protection entourent les captages.</li>
<li><strong>Potabilisation</strong> dans une usine de traitement : dégrillage et tamisage (retrait des gros déchets), floculation et décantation (les particules s'agglomèrent et tombent au fond), filtration (sable, charbon actif), puis <strong>désinfection</strong> (chlore, ozone ou rayons ultraviolets).</li>
<li><strong>Stockage</strong> dans des réservoirs ou châteaux d'eau.</li>
<li><strong>Distribution</strong> par un réseau de canalisations jusqu'au robinet.</li>
<li><strong>Collecte des eaux usées</strong> (toilettes, douches, lave-linge, eaux industrielles) par le réseau d'assainissement (égouts).</li>
<li><strong>Épuration</strong> en station d'épuration : prétraitement (dégrillage, dessablage, déshuilage), traitement primaire (décantation), traitement biologique (des bactéries dégradent la matière organique), clarification ; les boues sont valorisées (épandage, méthanisation) ou éliminées.</li>
<li><strong>Rejet</strong> de l'eau épurée dans le milieu naturel (rivière), où le cycle recommence.</li>
</ol>
<div class="encart" data-type="piege"><strong>Piège :</strong> l'eau qui sort de la station d'épuration est <strong>épurée</strong>, pas <strong>potable</strong>. Elle est assez propre pour ne pas polluer la rivière, mais elle ne peut pas être bue directement.</div>`
            },
            {
              titre: "La pollution de l'eau",
              contenu: `<table>
<thead><tr><th>Origine</th><th>Polluants</th><th>Conséquences</th></tr></thead>
<tbody>
<tr><td>Agricole</td><td>Nitrates et phosphates (engrais), pesticides, effluents d'élevage</td><td>Prolifération d'algues (eutrophisation), eau non potable, algues vertes sur les côtes</td></tr>
<tr><td>Industrielle</td><td>Métaux lourds, hydrocarbures, solvants, substances chimiques persistantes</td><td>Intoxication des espèces, contamination de la chaîne alimentaire</td></tr>
<tr><td>Domestique</td><td>Détergents, médicaments, lingettes, huiles de friture, microplastiques</td><td>Surcharge des stations d'épuration, pollution des rivières et des mers</td></tr>
<tr><td>Accidentelle</td><td>Marées noires, rejets accidentels</td><td>Catastrophes écologiques</td></tr>
</tbody>
</table>
<p>Une eau polluée peut provoquer des maladies : diarrhées infectieuses, choléra ou typhoïde dans les pays sans assainissement, intoxications chimiques. La pollution détruit aussi la biodiversité aquatique.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un garage automobile récupère les huiles de vidange et les solvants dans des bidons étanches confiés à une entreprise de collecte agréée, au lieu de les jeter dans l'évier. Un restaurant équipe ses cuisines d'un bac à graisse et fait collecter ses huiles de friture usagées.</div>`
            },
            {
              titre: "L'empreinte eau",
              contenu: `<p>La consommation domestique directe d'un Français est de l'ordre de <strong>150 litres par jour</strong> (douche, toilettes, lessive, vaisselle, cuisine, boisson). Mais nous consommons aussi beaucoup d'<strong>eau « cachée »</strong>, ou eau virtuelle : celle qui a été nécessaire pour produire nos aliments et nos objets.</p>
<p>L'<strong>empreinte eau</strong> est le volume total d'eau douce utilisé pour produire les biens et services consommés par une personne, une entreprise ou un pays. Par exemple, produire un kilogramme de viande de bœuf nécessite beaucoup plus d'eau (plusieurs milliers de litres, surtout pour nourrir les animaux) que produire un kilogramme de céréales ou de légumes. La fabrication d'un jean ou d'un smartphone demande aussi plusieurs milliers de litres d'eau.</p>`
            },
            {
              titre: "Préserver la ressource",
              contenu: `<h4>Mesures individuelles</h4>
<ul>
<li>préférer la douche au bain, couper l'eau pendant le brossage des dents ou le savonnage ;</li>
<li>réparer les fuites (un robinet qui goutte peut perdre des milliers de litres par an) ;</li>
<li>installer des réducteurs de débit, des chasses d'eau à double commande ;</li>
<li>faire tourner lave-linge et lave-vaisselle pleins ;</li>
<li>récupérer l'eau de pluie pour arroser, arroser le soir ;</li>
<li>ne rien jeter dans les toilettes ou l'évier (lingettes, médicaments, huiles, peintures) ;</li>
<li>boire l'eau du robinet plutôt que de l'eau en bouteille (moins de plastique et de transport) ;</li>
<li>réduire son empreinte eau en consommant moins de viande et en achetant moins de vêtements neufs.</li>
</ul>
<h4>Mesures collectives</h4>
<ul>
<li>protection des captages, normes de qualité et contrôles de l'eau potable ;</li>
<li>construction et modernisation des stations d'épuration ;</li>
<li>arrêtés préfectoraux de restriction d'eau en cas de sécheresse ;</li>
<li>réduction des pesticides, irrigation économe (goutte-à-goutte) ;</li>
<li>réutilisation des eaux usées traitées pour certains usages (arrosage de golfs, nettoyage des voiries) ;</li>
<li>recyclage de l'eau dans les procédés industriels.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> économiser l'eau, c'est agir sur la quantité (moins consommer) et sur la qualité (moins polluer).</div>`
            }
          ],
          points_cles: [
            "Environ 97,5 % de l'eau sur Terre est salée ; l'eau douce facilement accessible est très rare.",
            "Le stress hydrique apparaît quand la demande dépasse la ressource disponible.",
            "Le circuit urbain de l'eau : captage, potabilisation, stockage, distribution, collecte, épuration, rejet.",
            "L'eau épurée n'est pas potable ; elle est rendue au milieu naturel.",
            "Les pollutions de l'eau sont agricoles, industrielles, domestiques ou accidentelles.",
            "L'empreinte eau inclut l'eau cachée utilisée pour produire nos aliments et nos objets.",
            "Préserver l'eau, c'est consommer moins et polluer moins, par des gestes individuels et des mesures collectives."
          ],
          lexique: [
            { terme: "Eau potable", def: "Eau qui respecte des normes de qualité permettant de la boire sans risque pour la santé." },
            { terme: "Stress hydrique", def: "Situation où la demande en eau dépasse la quantité disponible ou utilisable." },
            { terme: "Potabilisation", def: "Ensemble des traitements qui rendent une eau brute propre à la consommation." },
            { terme: "Épuration", def: "Traitement des eaux usées avant leur rejet dans le milieu naturel." },
            { terme: "Eutrophisation", def: "Enrichissement excessif d'un milieu aquatique en nutriments, qui provoque la prolifération d'algues et l'asphyxie du milieu." },
            { terme: "Empreinte eau", def: "Volume total d'eau douce utilisé pour produire les biens et services consommés." }
          ]
        },
        {
          id: "energie-developpement-durable",
          titre: "B5 — Les ressources en énergie, le climat et la qualité de l'air",
          duree: 16,
          objectifs: [
            "Classer les sources d'énergie : renouvelables ou non, épuisables ou non.",
            "Identifier les principaux postes de consommation d'énergie.",
            "Expliquer l'effet de serre et le réchauffement climatique.",
            "Calculer et interpréter la notion d'empreinte carbone.",
            "Décrire les effets de la pollution de l'air sur la santé et proposer des mesures collectives et des gestes écocitoyens."
          ],
          sections: [
            {
              titre: "Les sources d'énergie",
              contenu: `<p>L'<strong>énergie</strong> permet de se chauffer, de s'éclairer, de se déplacer, de produire et de faire fonctionner les appareils. On distingue l'<strong>énergie primaire</strong> (disponible dans la nature : pétrole, vent, soleil) et l'<strong>énergie finale</strong> (celle qui est livrée au consommateur : électricité, carburant).</p>
<table>
<thead><tr><th>Type</th><th>Exemples</th><th>Avantages</th><th>Inconvénients</th></tr></thead>
<tbody>
<tr><td>Énergies fossiles (non renouvelables, épuisables)</td><td>Pétrole, gaz naturel, charbon</td><td>Faciles à stocker et à transporter, très utilisées</td><td>Stocks limités, émissions de CO<sub>2</sub>, pollution de l'air, dépendance aux pays producteurs</td></tr>
<tr><td>Énergie nucléaire (non renouvelable)</td><td>Uranium (centrales nucléaires)</td><td>Production importante et régulière, peu d'émissions de CO<sub>2</sub></td><td>Déchets radioactifs durables, risque d'accident, ressource limitée</td></tr>
<tr><td>Énergies renouvelables (non épuisables à l'échelle humaine)</td><td>Solaire, éolien, hydraulique, biomasse (bois, biogaz), géothermie, énergies marines</td><td>Peu d'émissions de CO<sub>2</sub>, ressources locales et inépuisables</td><td>Production parfois intermittente (vent, soleil), impact sur les paysages, coût d'installation</td></tr>
</tbody>
</table>
<p>Les ressources énergétiques sont <strong>inégalement réparties</strong> dans le monde, ce qui crée des dépendances et des tensions géopolitiques. Les ressources fossiles, formées en des millions d'années, s'épuisent à l'échelle de quelques générations.</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> l'électricité n'est pas une source d'énergie mais un <strong>vecteur</strong> : elle est produite à partir d'autres sources (nucléaire, hydraulique, gaz, éolien…). Une voiture électrique est plus ou moins « propre » selon la manière dont l'électricité est produite et selon la fabrication de sa batterie.</div>`
            },
            {
              titre: "Les postes de consommation",
              contenu: `<p>En France, les grands secteurs consommateurs d'énergie sont le <strong>bâtiment</strong> (résidentiel et tertiaire : chauffage, eau chaude, éclairage, appareils), les <strong>transports</strong> (surtout routiers, très dépendants du pétrole) et l'<strong>industrie</strong>, devant l'agriculture.</p>
<p>Dans un logement, le <strong>chauffage</strong> représente de loin le premier poste de consommation, devant l'eau chaude sanitaire, la cuisson et les appareils électriques. Le <strong>diagnostic de performance énergétique (DPE)</strong> classe les logements de A (très économe) à G (très énergivore) ; la location des logements les plus énergivores (« passoires thermiques ») est progressivement interdite.</p>
<p>Le <strong>numérique</strong> consomme aussi beaucoup d'énergie : fabrication des appareils (le poste le plus lourd), centres de données, réseaux, streaming vidéo.</p>`
            },
            {
              titre: "Effet de serre et réchauffement climatique",
              contenu: `<p>L'<strong>effet de serre</strong> est un phénomène <strong>naturel</strong> : certains gaz de l'atmosphère retiennent une partie de la chaleur émise par la Terre réchauffée par le Soleil. Sans lui, la température moyenne de la Terre serait d'environ −18 °C au lieu de +15 °C.</p>
<p>Les principaux <strong>gaz à effet de serre (GES)</strong> sont la vapeur d'eau, le <strong>dioxyde de carbone</strong> (CO<sub>2</sub>, issu surtout de la combustion des énergies fossiles et de la déforestation), le <strong>méthane</strong> (CH<sub>4</sub>, élevage de ruminants, rizières, décharges, fuites de gaz), le protoxyde d'azote (engrais) et les gaz fluorés (climatisation, réfrigération).</p>
<p>Depuis la révolution industrielle, les activités humaines ont fortement augmenté la concentration de ces gaz : l'effet de serre est <strong>renforcé</strong> et la Terre se réchauffe. Selon les scientifiques du GIEC, la température moyenne mondiale a déjà augmenté d'environ 1,1 à 1,2 °C par rapport à l'ère préindustrielle.</p>
<p><strong>Conséquences</strong> : vagues de chaleur plus fréquentes, sécheresses, incendies, pluies intenses et inondations, fonte des glaciers, élévation du niveau de la mer, perte de biodiversité, baisse de certaines récoltes, déplacements de populations, extension de maladies transmises par les moustiques (le moustique tigre est installé dans une grande partie de la France).</p>
<p>L'<strong>accord de Paris</strong> (2015) engage les pays à limiter le réchauffement nettement en dessous de 2 °C, en poursuivant l'effort pour le limiter à 1,5 °C. La France vise la <strong>neutralité carbone en 2050</strong>.</p>`
            },
            {
              titre: "L'empreinte carbone",
              contenu: `<p>L'<strong>empreinte carbone</strong> est la quantité totale de gaz à effet de serre émise pour satisfaire la consommation d'une personne, d'une entreprise ou d'un pays, y compris les émissions liées aux produits importés. Elle s'exprime en <strong>tonnes équivalent CO<sub>2</sub></strong> (t CO<sub>2</sub>e).</p>
<p>L'empreinte moyenne d'un Français est de l'ordre de <strong>9 tonnes</strong> équivalent CO<sub>2</sub> par an. Pour respecter l'accord de Paris, il faudrait descendre vers environ <strong>2 tonnes</strong> d'ici 2050. Les grands postes sont les <strong>transports</strong> (voiture, avion), le <strong>logement</strong> (chauffage), l'<strong>alimentation</strong> (surtout la viande), les <strong>biens de consommation</strong> (vêtements, électronique) et les services.</p>
<div class="encart" data-type="methode"><strong>Méthode :</strong> des simulateurs officiels (comme « Nos gestes climat » de l'ADEME) permettent d'estimer son empreinte carbone en répondant à des questions sur ses déplacements, son logement, son alimentation et ses achats, puis de repérer les actions les plus efficaces.</div>`
            },
            {
              titre: "La pollution de l'air et ses effets sur la santé",
              contenu: `<p>La combustion des énergies (moteurs, chauffage au bois mal maîtrisé, industries) et certaines activités (agriculture, chantiers) rejettent des <strong>polluants atmosphériques</strong> :</p>
<table>
<thead><tr><th>Polluant</th><th>Principales sources</th><th>Effets sur la santé</th></tr></thead>
<tbody>
<tr><td>Particules fines (PM10, PM2,5)</td><td>Trafic routier (diesel, freins, pneus), chauffage au bois, industrie, agriculture</td><td>Pénètrent profondément dans les poumons ; maladies respiratoires et cardiovasculaires, cancers</td></tr>
<tr><td>Dioxyde d'azote (NO<sub>2</sub>)</td><td>Trafic routier</td><td>Irritation des voies respiratoires, crises d'asthme</td></tr>
<tr><td>Ozone (O<sub>3</sub>) au sol</td><td>Se forme sous l'effet du soleil à partir d'autres polluants, surtout l'été</td><td>Toux, essoufflement, irritation des yeux</td></tr>
<tr><td>Monoxyde de carbone (CO)</td><td>Appareils de chauffage mal entretenus, moteurs dans un local fermé</td><td>Gaz inodore et mortel : maux de tête, vertiges, perte de connaissance, décès</td></tr>
</tbody>
</table>
<p>Selon Santé publique France, la pollution de l'air par les particules fines est responsable de dizaines de milliers de décès prématurés chaque année en France. L'<strong>air intérieur</strong> peut aussi être pollué (produits ménagers, peintures, fumée de tabac, moisissures) : il faut <strong>aérer au moins 10 minutes par jour</strong>.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> sur un chantier, faire fonctionner un groupe électrogène ou une découpeuse thermique dans une cave fermée peut provoquer une intoxication au monoxyde de carbone. Ces appareils doivent être utilisés à l'extérieur ou avec une ventilation adaptée.</div>`
            },
            {
              titre: "Mesures collectives et gestes écocitoyens",
              contenu: `<ul>
<li><strong>Mesures collectives</strong> : développement des énergies renouvelables, aides à la rénovation énergétique des logements (isolation, pompes à chaleur), transports en commun et pistes cyclables, zones à faibles émissions dans certaines villes, normes sur les véhicules et les appareils (étiquette énergie), alertes et mesures en cas de pic de pollution, taxe carbone, quotas d'émissions pour les industries.</li>
<li><strong>Gestes écocitoyens</strong> : se déplacer à pied, à vélo, en transports en commun ou en covoiturage ; baisser le chauffage (19 °C dans les pièces de vie) ; éteindre les appareils plutôt que les laisser en veille ; garder plus longtemps son smartphone et le faire réparer ; limiter le streaming en haute définition ; manger moins de viande et plus de produits de saison ; limiter l'avion.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> économiser l'énergie, c'est à la fois réduire le réchauffement climatique, améliorer la qualité de l'air (donc la santé) et faire des économies.</div>`
            }
          ],
          points_cles: [
            "Les énergies fossiles et le nucléaire sont non renouvelables ; le solaire, l'éolien, l'hydraulique, la biomasse et la géothermie sont renouvelables.",
            "Le bâtiment (surtout le chauffage) et les transports sont de grands postes de consommation d'énergie.",
            "L'effet de serre est naturel, mais les activités humaines le renforcent et provoquent le réchauffement climatique.",
            "Les principaux gaz à effet de serre d'origine humaine sont le CO2 et le méthane.",
            "L'empreinte carbone d'un Français est d'environ 9 tonnes équivalent CO2 par an ; l'objectif est d'environ 2 tonnes en 2050.",
            "Particules fines, dioxyde d'azote et ozone dégradent la santé respiratoire et cardiovasculaire ; le monoxyde de carbone est un gaz mortel.",
            "Aérer son logement au moins 10 minutes par jour améliore la qualité de l'air intérieur."
          ],
          lexique: [
            { terme: "Énergie renouvelable", def: "Énergie issue de sources naturelles qui se renouvellent rapidement à l'échelle humaine (soleil, vent, eau)." },
            { terme: "Énergie fossile", def: "Énergie issue de matières formées en des millions d'années (pétrole, gaz, charbon), épuisable et émettrice de CO2." },
            { terme: "Effet de serre", def: "Phénomène naturel de rétention de la chaleur par certains gaz de l'atmosphère, renforcé par les activités humaines." },
            { terme: "Empreinte carbone", def: "Quantité totale de gaz à effet de serre émise pour satisfaire une consommation, exprimée en tonnes équivalent CO2." },
            { terme: "Particules fines", def: "Très petites particules en suspension dans l'air qui pénètrent profondément dans l'appareil respiratoire." },
            { terme: "Neutralité carbone", def: "Équilibre entre les émissions de gaz à effet de serre et leur absorption par les puits de carbone (forêts, sols)." }
          ]
        },
      ]
    },
    {
      titre: "Partie C — L'individu acteur de la prévention dans son milieu professionnel",
      chapitres: [
        {
          id: "enjeux-sante-securite-travail",
          titre: "C1 — Les enjeux de la santé et de la sécurité au travail",
          duree: 14,
          objectifs: [
            "Mesurer l'importance des accidents du travail et des maladies professionnelles.",
            "Identifier les enjeux humains, sociaux et économiques de la prévention.",
            "Situer le cadre juridique de la santé et de la sécurité au travail.",
            "Connaître les obligations et responsabilités de l'employeur et du salarié.",
            "Repérer les règles de protection propres aux jeunes travailleurs et aux nouveaux embauchés."
          ],
          sections: [
            {
              titre: "Le travail peut nuire à la santé",
              contenu: `<p>Le travail apporte un revenu, une place dans la société, des relations et de la fierté. Mais il peut aussi porter atteinte à la santé de deux façons :</p>
<ul>
<li>par une <strong>atteinte brutale</strong> : c'est l'<strong>accident du travail</strong> (chute, coupure, brûlure, écrasement), qui provoque une <strong>lésion</strong> immédiate ;</li>
<li>par une <strong>exposition prolongée</strong> (chronique) à un risque : c'est la <strong>maladie professionnelle</strong> (surdité due au bruit, troubles musculosquelettiques, asthme du boulanger, cancer dû à l'amiante), qui apparaît après des mois ou des années.</li>
</ul>
<p>Chaque année en France, on compte plus d'un demi-million d'accidents du travail avec arrêt dans le seul régime général de la Sécurité sociale, plusieurs centaines d'accidents mortels, et des dizaines de milliers de maladies professionnelles reconnues, dont une grande majorité de troubles musculosquelettiques. Les secteurs du BTP, du transport, de l'intérim, de l'aide à la personne et du commerce alimentaire sont particulièrement touchés.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> accident du travail = événement soudain, lésion immédiate. Maladie professionnelle = exposition prolongée, effets différés.</div>`
            },
            {
              titre: "Les enjeux de la prévention",
              contenu: `<table>
<thead><tr><th>Enjeu</th><th>Pour le salarié</th><th>Pour l'entreprise et la société</th></tr></thead>
<tbody>
<tr><td>Humain</td><td>Souffrance physique et morale, handicap, décès ; conséquences sur la famille</td><td>Dégradation du climat de travail, choc pour les collègues</td></tr>
<tr><td>Social</td><td>Perte d'emploi possible, isolement, difficultés de reclassement</td><td>Image de l'entreprise dégradée, difficultés de recrutement, conflits</td></tr>
<tr><td>Économique</td><td>Perte de revenus, frais non couverts</td><td>Coûts directs (cotisations AT/MP, qui augmentent avec les accidents) et coûts indirects (remplacement, formation, retards, matériel endommagé, perte de production) ; coût pour la Sécurité sociale</td></tr>
<tr><td>Juridique</td><td>—</td><td>Responsabilité civile et pénale de l'employeur, sanctions</td></tr>
</tbody>
</table>
<p>Les <strong>coûts indirects</strong> d'un accident sont souvent bien plus élevés que les coûts directs, mais moins visibles : on les représente souvent par un <strong>iceberg</strong> dont seule une petite partie émerge.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> dans une entreprise de déménagement, un salarié se blesse au dos. Au-delà des soins et des indemnités, l'entreprise doit trouver un remplaçant, le former, réorganiser les plannings, et peut perdre un client à cause d'un retard. La prévention (diables, monte-meubles, formation) coûte moins cher que l'accident.</div>`
            },
            {
              titre: "Le cadre juridique",
              contenu: `<p>La santé et la sécurité au travail sont encadrées par plusieurs sources de droit :</p>
<ul>
<li>les <strong>directives européennes</strong>, notamment la directive-cadre de 1989 qui a fixé les principes généraux de prévention ;</li>
<li>le <strong>Code du travail</strong> (sa quatrième partie est consacrée à la santé et à la sécurité au travail) ;</li>
<li>le <strong>Code de la Sécurité sociale</strong> (reconnaissance et indemnisation des AT/MP) ;</li>
<li>les <strong>conventions collectives</strong> et accords d'entreprise ;</li>
<li>le <strong>règlement intérieur</strong>, obligatoire dans les entreprises d'au moins 50 salariés, qui fixe notamment les règles d'hygiène et de sécurité.</li>
</ul>
<p>L'employeur a une <strong>obligation de sécurité</strong> : il doit prendre les mesures nécessaires pour assurer la sécurité et protéger la santé physique et mentale des travailleurs (actions de prévention, information et formation, organisation et moyens adaptés).</p>`
            },
            {
              titre: "Obligations et responsabilités de chacun",
              contenu: `<table>
<thead><tr><th>Employeur</th><th>Salarié</th></tr></thead>
<tbody>
<tr><td>Évaluer les risques et les transcrire dans le document unique (DUERP)</td><td>Prendre soin de sa santé et de sa sécurité <strong>et de celles des autres</strong> personnes concernées par ses actes</td></tr>
<tr><td>Appliquer les principes généraux de prévention</td><td>Respecter les consignes et le règlement intérieur</td></tr>
<tr><td>Informer et former les salariés à la sécurité (à l'embauche, au changement de poste…)</td><td>Utiliser correctement les équipements de travail et porter les équipements de protection individuelle fournis</td></tr>
<tr><td>Fournir gratuitement les équipements de protection et les entretenir</td><td>Signaler à l'employeur toute situation dangereuse</td></tr>
<tr><td>Organiser le suivi de santé des salariés</td><td>Se rendre aux visites du service de santé au travail</td></tr>
</tbody>
</table>
<p>Le salarié dispose d'un <strong>droit d'alerte et de retrait</strong> : s'il a un motif raisonnable de penser qu'une situation présente un <strong>danger grave et imminent</strong> pour sa vie ou sa santé, il doit alerter immédiatement l'employeur et peut se retirer de cette situation, sans sanction ni retenue de salaire, à condition de ne pas créer de nouveau danger pour d'autres.</p>
<p>En cas de manquement, l'employeur peut voir engagée sa <strong>responsabilité civile</strong> (réparation des dommages) et <strong>pénale</strong> (amendes, prison). Le salarié qui ne respecte pas les consignes peut être sanctionné par l'employeur (avertissement, voire licenciement pour faute).</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> le droit de retrait ne s'applique qu'à un danger <strong>grave et imminent</strong>. Un simple désaccord sur l'organisation du travail ou une gêne ne le justifie pas.</div>`
            },
            {
              titre: "Les jeunes et les nouveaux embauchés",
              contenu: `<p>Les <strong>jeunes</strong> et les <strong>nouveaux embauchés</strong> (y compris intérimaires et stagiaires) sont proportionnellement plus souvent victimes d'accidents : manque d'expérience, méconnaissance des risques et des consignes, envie de bien faire et d'aller vite, difficulté à oser poser des questions.</p>
<ul>
<li>L'employeur doit organiser une <strong>formation pratique et appropriée à la sécurité</strong> lors de l'embauche, d'un changement de poste ou de technique ; elle est renforcée pour les salariés en contrat précaire affectés à des postes à risques.</li>
<li>Les <strong>mineurs</strong> sont protégés : certains <strong>travaux dangereux leur sont interdits</strong> (par exemple exposition à certains agents chimiques ou biologiques dangereux, travaux en hauteur sans protection collective, conduite de certains engins) ; d'autres sont possibles dans le cadre de la formation professionnelle, par dérogation déclarée à l'inspection du travail, sous encadrement et après avis médical.</li>
<li>Leur durée de travail est limitée (en principe 8 heures par jour et 35 heures par semaine) et le travail de nuit leur est en principe interdit.</li>
<li>Pendant les périodes de formation en milieu professionnel, l'élève reste sous statut scolaire ; une <strong>convention</strong> signée par l'établissement, l'entreprise et l'élève (ou ses parents) précise les activités et l'encadrement par un tuteur.</li>
</ul>
<div class="encart" data-type="methode"><strong>Méthode :</strong> en arrivant dans une entreprise, poser systématiquement trois questions : quels sont les risques de mon poste ? quelles sont les consignes et les protections ? à qui m'adresser en cas de problème ou d'accident ?</div>`
            }
          ],
          points_cles: [
            "L'accident du travail est soudain et provoque une lésion ; la maladie professionnelle résulte d'une exposition prolongée.",
            "Les enjeux de la prévention sont humains, sociaux, économiques et juridiques.",
            "Les coûts indirects d'un accident dépassent souvent les coûts directs (image de l'iceberg).",
            "L'employeur a une obligation de sécurité : protéger la santé physique et mentale des salariés.",
            "Le salarié doit prendre soin de sa sécurité et de celle des autres, et respecter les consignes.",
            "En cas de danger grave et imminent, le salarié dispose d'un droit d'alerte et de retrait.",
            "Les jeunes et les nouveaux embauchés sont plus exposés ; certains travaux dangereux sont interdits aux mineurs, sauf dérogation encadrée."
          ],
          lexique: [
            { terme: "Accident du travail", def: "Accident survenu par le fait ou à l'occasion du travail, qui entraîne une lésion." },
            { terme: "Maladie professionnelle", def: "Maladie résultant d'une exposition prolongée à un risque lors de l'activité professionnelle." },
            { terme: "Obligation de sécurité", def: "Devoir de l'employeur de prendre toutes les mesures pour protéger la santé physique et mentale des salariés." },
            { terme: "Droit de retrait", def: "Droit du salarié de se retirer d'une situation présentant un danger grave et imminent, après avoir alerté l'employeur." },
            { terme: "Coût indirect", def: "Coût d'un accident peu visible : remplacement, désorganisation, retards, image de l'entreprise." },
            { terme: "Règlement intérieur", def: "Document écrit fixant notamment les règles d'hygiène, de sécurité et de discipline dans l'entreprise." }
          ]
        },
        {
          id: "notions-base-prevention",
          titre: "C2 — Les notions de base en prévention des risques professionnels",
          duree: 13,
          objectifs: [
            "Distinguer une consigne et une information.",
            "Décrire une situation de travail à partir de ses composantes.",
            "Définir danger, situation dangereuse, événement déclencheur et dommage.",
            "Expliquer le processus d'apparition d'un dommage.",
            "Identifier les grandes familles de risques professionnels."
          ],
          sections: [
            {
              titre: "Consigne et information",
              contenu: `<p>Dans une entreprise, on rencontre de nombreux messages écrits, oraux ou visuels. Il faut savoir les distinguer :</p>
<table>
<thead><tr><th></th><th>Consigne</th><th>Information</th></tr></thead>
<tbody>
<tr><td>Nature</td><td>Ordre, règle à appliquer obligatoirement</td><td>Renseignement, connaissance utile</td></tr>
<tr><td>Formulation</td><td>Verbe à l'infinitif ou à l'impératif : « Porter des lunettes de protection », « Interdit de fumer »</td><td>Phrase descriptive : « Ce produit est irritant pour les yeux »</td></tr>
<tr><td>Conséquence</td><td>Son non-respect peut être sanctionné</td><td>Permet de comprendre et d'agir en connaissance de cause</td></tr>
<tr><td>Exemples</td><td>Consignes de sécurité incendie, mode opératoire, panneau d'obligation</td><td>Fiche de données de sécurité, affichage des risques, notice d'une machine</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la consigne dit <strong>ce qu'il faut faire</strong> ; l'information explique <strong>pourquoi</strong>. Une consigne bien comprise est mieux appliquée.</div>`
            },
            {
              titre: "La situation de travail",
              contenu: `<p>Toute <strong>activité de travail</strong> peut être décrite à partir de quatre composantes en interaction (on retient souvent le moyen mnémotechnique <strong>I.T.Ma.Mi.</strong>) :</p>
<ul>
<li><strong>Individu</strong> (l'opérateur) : âge, formation, expérience, état de santé, fatigue ;</li>
<li><strong>Tâche</strong> : ce qui est demandé, les gestes, les cadences, les horaires ;</li>
<li><strong>Matériel</strong> : machines, outils, produits, équipements de protection ;</li>
<li><strong>Milieu</strong> : environnement physique (bruit, éclairage, température, espace) et social (collègues, clients, organisation).</li>
</ul>
<p>Un changement dans l'une de ces composantes (nouveau salarié, nouvelle machine, sol mouillé, cadence accélérée) peut faire apparaître un risque.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un commis de cuisine (individu) découpe des légumes (tâche) avec un couteau (matériel) dans une cuisine encombrée et glissante pendant le coup de feu (milieu).</div>`
            },
            {
              titre: "Danger, situation dangereuse, dommage",
              contenu: `<table>
<thead><tr><th>Notion</th><th>Définition</th><th>Exemple (commis de cuisine)</th></tr></thead>
<tbody>
<tr><td><strong>Danger</strong></td><td>Propriété ou capacité intrinsèque d'un équipement, d'une substance, d'une méthode, de causer un dommage</td><td>La lame coupante du couteau</td></tr>
<tr><td><strong>Situation dangereuse</strong></td><td>Situation dans laquelle une personne est exposée à un ou plusieurs dangers</td><td>Le commis manipule le couteau près de sa main</td></tr>
<tr><td><strong>Événement dangereux</strong> (déclencheur)</td><td>Événement qui transforme la situation dangereuse en dommage</td><td>Il est bousculé par un collègue, le couteau ripe</td></tr>
<tr><td><strong>Dommage</strong></td><td>Atteinte à la santé : lésion physique ou atteinte psychique</td><td>Coupure profonde du doigt</td></tr>
<tr><td><strong>Risque</strong></td><td>Possibilité que le dommage survienne ; il s'évalue selon la probabilité et la gravité</td><td>Risque de coupure</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège :</strong> le danger et le risque ne sont pas synonymes. Un produit dangereux enfermé dans une armoire fermée présente un danger, mais le risque est faible tant que personne n'y est exposé. <strong>Sans exposition, pas de risque.</strong></div>`
            },
            {
              titre: "Le processus d'apparition du dommage",
              contenu: `<p>On représente l'apparition d'un dommage par un enchaînement :</p>
<p><strong>Danger + Personne → Situation dangereuse → (Événement dangereux) → Dommage</strong></p>
<p>Lorsque la personne est exposée au danger (situation dangereuse), il suffit qu'un événement survienne pour que le dommage se produise. Dans le cas d'une exposition chronique (bruit, produits chimiques, postures), il n'y a pas forcément d'événement brutal : c'est la <strong>répétition</strong> et la <strong>durée</strong> de l'exposition qui provoquent le dommage (maladie professionnelle).</p>
<p>Ce schéma montre où agir pour prévenir :</p>
<ul>
<li><strong>supprimer le danger</strong> (meilleure solution) ;</li>
<li><strong>éviter l'exposition</strong> de la personne (éloigner, isoler, protéger) ;</li>
<li><strong>empêcher l'événement dangereux</strong> (organisation, rangement, formation) ;</li>
<li><strong>limiter le dommage</strong> (protections individuelles, premiers secours).</li>
</ul>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour appliquer le processus, partir de la situation décrite et répondre successivement : quel est le danger ? qui est exposé et comment ? quel événement peut survenir ? quel dommage peut en résulter ?</div>`
            },
            {
              titre: "Exposition aiguë ou chronique, incident et presque-accident",
              contenu: `<p>L'exposition à un danger peut être :</p>
<ul>
<li><strong>aiguë</strong> : brève et souvent intense ; ses effets apparaissent rapidement (projection de produit caustique dans l'œil, coupure, chute) ;</li>
<li><strong>chronique</strong> : répétée sur une longue durée, souvent à faible dose ; ses effets apparaissent tardivement, parfois des années plus tard (surdité, asthme, troubles musculosquelettiques, cancer).</li>
</ul>
<p>Toutes les situations dangereuses ne conduisent pas à un accident. Un <strong>presque-accident</strong> (ou « accident évité de justesse ») est un événement qui aurait pu provoquer un dommage mais qui, par chance, n'en a pas causé : un carton tombe d'une étagère juste à côté d'un préparateur de commandes, un client glisse sans tomber. Un <strong>incident</strong> est un événement imprévu qui perturbe le travail sans blesser personne (fuite de produit, panne de machine).</p>
<p>Ces événements sont des <strong>signaux d'alerte</strong> précieux : les signaler et les analyser permet de corriger la situation avant qu'un accident ne se produise. Beaucoup d'entreprises tiennent un registre des presque-accidents.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> dans un supermarché, un employé de rayon remarque qu'il a failli tomber deux fois de l'escabeau dont un patin est usé. Il le signale à son responsable, qui retire l'escabeau et le remplace : un accident a peut-être été évité.</div>`
            },
            {
              titre: "Les familles de risques professionnels",
              contenu: `<table>
<thead><tr><th>Famille de risques</th><th>Exemples de situations</th><th>Dommages possibles</th></tr></thead>
<tbody>
<tr><td>Risques liés à l'activité physique (manutention, postures, gestes répétitifs)</td><td>Port de charges en logistique, travail penché en coiffure</td><td>Lombalgies, troubles musculosquelettiques</td></tr>
<tr><td>Chutes de plain-pied et de hauteur</td><td>Sol glissant en cuisine, travail sur échafaudage</td><td>Entorses, fractures, décès</td></tr>
<tr><td>Risques mécaniques</td><td>Machines, outils coupants, pièces en mouvement</td><td>Coupures, écrasements, amputations</td></tr>
<tr><td>Risques chimiques</td><td>Produits d'entretien, solvants, peintures, poussières de bois</td><td>Brûlures, irritations, allergies, intoxications, cancers</td></tr>
<tr><td>Risques biologiques</td><td>Soins, déchets, contact avec des animaux</td><td>Infections</td></tr>
<tr><td>Risques physiques (bruit, vibrations, rayonnements, ambiances thermiques)</td><td>Atelier bruyant, marteau-piqueur, four, chambre froide</td><td>Surdité, troubles circulatoires, coup de chaleur</td></tr>
<tr><td>Risque électrique</td><td>Intervention sur une installation sous tension</td><td>Électrisation, électrocution, brûlures</td></tr>
<tr><td>Risque incendie et explosion</td><td>Stockage de produits inflammables, friteuses</td><td>Brûlures, intoxication par les fumées</td></tr>
<tr><td>Risque routier</td><td>Livraisons, déplacements professionnels</td><td>Traumatismes, décès</td></tr>
<tr><td>Risques psychosociaux</td><td>Surcharge, violences de clients, harcèlement</td><td>Stress, épuisement, dépression</td></tr>
</tbody>
</table>
<p>Le risque routier est la <strong>première cause de décès</strong> liés au travail lorsqu'on additionne les accidents de mission et les accidents de trajet.</p>`
            }
          ],
          points_cles: [
            "Une consigne est une règle obligatoire ; une information est un renseignement qui aide à comprendre.",
            "Une situation de travail se décrit par l'Individu, la Tâche, le Matériel et le Milieu.",
            "Le danger est une propriété intrinsèque ; la situation dangereuse apparaît quand une personne y est exposée.",
            "Sans exposition, il n'y a pas de risque.",
            "Le dommage survient à la suite d'un événement dangereux, ou de la répétition d'une exposition.",
            "Le processus d'apparition du dommage montre où agir : supprimer le danger, éviter l'exposition, empêcher l'événement, limiter le dommage.",
            "Les principales familles de risques sont : activité physique, chutes, mécanique, chimique, biologique, physique, électrique, incendie, routier, psychosocial."
          ],
          lexique: [
            { terme: "Consigne", def: "Instruction obligatoire qui indique ce qu'il faut faire ou ne pas faire." },
            { terme: "Danger", def: "Propriété intrinsèque d'un produit, d'un équipement ou d'une situation, capable de causer un dommage." },
            { terme: "Situation dangereuse", def: "Situation dans laquelle une personne est exposée à un danger." },
            { terme: "Événement dangereux", def: "Fait qui déclenche le passage de la situation dangereuse au dommage." },
            { terme: "Dommage", def: "Atteinte physique ou psychique à la santé d'une personne." },
            { terme: "Risque", def: "Possibilité qu'un dommage survienne, évaluée selon sa probabilité et sa gravité." }
          ]
        },
        {
          id: "acteurs-prevention",
          titre: "C3 — Les acteurs de la prévention",
          duree: 14,
          objectifs: [
            "Identifier les acteurs internes de la prévention dans l'entreprise et leurs missions.",
            "Décrire le rôle du comité social et économique en matière de santé et de sécurité.",
            "Identifier les acteurs externes : service de prévention et de santé au travail, inspection du travail, CARSAT, INRS, autres organismes.",
            "Savoir à quel acteur s'adresser selon la situation."
          ],
          sections: [
            {
              titre: "Les acteurs internes à l'entreprise",
              contenu: `<p>La prévention est l'affaire de tous, mais chacun a un rôle précis.</p>
<ul>
<li><strong>L'employeur</strong> est le premier responsable de la santé et de la sécurité des salariés. Il évalue les risques, décide des mesures de prévention et les finance.</li>
<li><strong>L'encadrement</strong> (chefs d'équipe, responsables) fait appliquer les consignes au quotidien et fait remonter les problèmes.</li>
<li><strong>Les salariés</strong> respectent les consignes, utilisent les protections, signalent les dangers et participent à l'évaluation des risques par leur connaissance du terrain.</li>
<li><strong>Le salarié compétent en santé et sécurité</strong> : l'employeur doit désigner un ou plusieurs salariés pour s'occuper des activités de protection et de prévention des risques (dans une petite entreprise, ce peut être l'employeur lui-même s'il est formé). Dans les grandes entreprises, il existe souvent un service prévention (animateur ou responsable QSE).</li>
<li><strong>Le sauveteur secouriste du travail (SST)</strong> : salarié formé pour porter secours à une victime en attendant les secours, et pour participer à la prévention dans son entreprise.</li>
<li><strong>Les représentants du personnel</strong>, au sein du comité social et économique.</li>
</ul>`
            },
            {
              titre: "Le comité social et économique (CSE)",
              contenu: `<p>Le <strong>CSE</strong> est l'instance qui représente les salariés. Il est obligatoire dans les entreprises d'au moins <strong>11 salariés</strong>. Ses membres sont élus par les salariés pour quatre ans en général.</p>
<table>
<thead><tr><th>Taille de l'entreprise</th><th>Rôle du CSE en santé et sécurité</th></tr></thead>
<tbody>
<tr><td>11 à 49 salariés</td><td>Présente les réclamations des salariés, contribue à promouvoir la santé et la sécurité, peut saisir l'inspection du travail</td></tr>
<tr><td>50 salariés et plus</td><td>Attributions élargies : analyse des risques, inspections, enquêtes après un accident grave, consultation sur les aménagements importants et les conditions de travail, droit d'alerte en cas de danger grave et imminent ; un référent harcèlement sexuel et agissements sexistes est désigné parmi ses membres</td></tr>
<tr><td>300 salariés et plus (et sites à risques)</td><td>Création obligatoire d'une <strong>commission santé, sécurité et conditions de travail (CSSCT)</strong> au sein du CSE</td></tr>
</tbody>
</table>
<p>Le CSE a remplacé depuis 2020 les anciennes instances (délégués du personnel, comité d'entreprise et CHSCT).</p>`
            },
            {
              titre: "Le service de prévention et de santé au travail",
              contenu: `<p>Tout employeur doit adhérer à un <strong>service de prévention et de santé au travail (SPST)</strong> ou en organiser un dans l'entreprise. Son rôle est <strong>exclusivement préventif</strong> : éviter toute altération de la santé des travailleurs du fait de leur travail.</p>
<ul>
<li>Le <strong>médecin du travail</strong> assure le suivi de l'état de santé des salariés, conseille l'employeur et les salariés, peut proposer des aménagements de poste, et se prononce sur l'aptitude ou l'inaptitude au poste. Il est soumis au <strong>secret médical</strong> et indépendant.</li>
<li>L'<strong>infirmier en santé au travail</strong> réalise une partie des visites (visites d'information et de prévention).</li>
<li>Les <strong>intervenants en prévention des risques professionnels (IPRP)</strong> : ergonomes, toxicologues, psychologues du travail, techniciens.</li>
<li>Le service participe à l'action sur le milieu de travail (visites des locaux, études de postes, conseils sur le document unique).</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège :</strong> le médecin du travail ne soigne pas et ne prescrit pas d'arrêt maladie (sauf urgence). Il prévient. Pour se soigner, on consulte son médecin traitant.</div>`
            },
            {
              titre: "Les acteurs institutionnels externes",
              contenu: `<table>
<thead><tr><th>Acteur</th><th>Statut</th><th>Missions principales</th></tr></thead>
<tbody>
<tr><td><strong>Inspection du travail</strong></td><td>Service de l'État (ministère du Travail, directions régionales)</td><td><strong>Contrôler</strong> l'application du Code du travail (visites d'entreprises, enquêtes après accident), <strong>conseiller</strong> employeurs et salariés, <strong>sanctionner</strong> : observations, mises en demeure, procès-verbaux transmis au procureur, arrêt temporaire de travaux en cas de danger grave (chute de hauteur, amiante…)</td></tr>
<tr><td><strong>CARSAT</strong> (caisse d'assurance retraite et de la santé au travail ; CRAMIF en Île-de-France, CGSS en outre-mer)</td><td>Organisme de la Sécurité sociale (branche AT/MP)</td><td>Fixer le taux de cotisation AT/MP des entreprises, conseiller et contrôler grâce à ses ingénieurs-conseils et contrôleurs de sécurité, accorder des aides financières pour la prévention, élaborer des recommandations, former</td></tr>
<tr><td><strong>INRS</strong> (Institut national de recherche et de sécurité)</td><td>Association financée par la branche AT/MP</td><td>Études et recherches, publications (brochures, affiches, fiches toxicologiques), site internet de référence, formations</td></tr>
<tr><td><strong>ANACT et ARACT</strong></td><td>Agence nationale et associations régionales</td><td>Amélioration des conditions de travail, organisation du travail, qualité de vie au travail</td></tr>
<tr><td><strong>OPPBTP</strong></td><td>Organisme de branche</td><td>Prévention dans le bâtiment et les travaux publics</td></tr>
<tr><td><strong>MSA</strong> (Mutualité sociale agricole)</td><td>Régime agricole</td><td>Équivalent de la CPAM et de la CARSAT pour les salariés agricoles</td></tr>
<tr><td><strong>CPAM</strong></td><td>Caisse de l'Assurance maladie</td><td>Reconnaissance des accidents du travail et maladies professionnelles, versement des prestations</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'inspection du travail <strong>contrôle et sanctionne</strong> ; la CARSAT <strong>tarifie, conseille et aide</strong> financièrement ; l'INRS <strong>étudie et informe</strong> ; le médecin du travail <strong>suit la santé</strong> des salariés.</div>`
            },
            {
              titre: "À qui s'adresser ?",
              contenu: `<table>
<thead><tr><th>Situation</th><th>Acteur à contacter</th></tr></thead>
<tbody>
<tr><td>Un salarié constate qu'une protection de machine est retirée</td><td>Son responsable hiérarchique (employeur), éventuellement un membre du CSE</td></tr>
<tr><td>Une vendeuse souffre du dos et voudrait un siège adapté</td><td>Le médecin du travail (aménagement de poste)</td></tr>
<tr><td>Un apprenti signale que son employeur l'oblige à travailler sans protection sur un toit</td><td>L'inspection du travail (et son centre de formation)</td></tr>
<tr><td>Un artisan veut acheter un équipement de manutention moins pénible</td><td>La CARSAT (aides financières)</td></tr>
<tr><td>Un responsable cherche une documentation sur un solvant</td><td>L'INRS (fiche toxicologique) et la fiche de données de sécurité du fournisseur</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> dans une entreprise de 60 salariés de l'industrie agroalimentaire, après une chute grave sur un sol glissant, les membres du CSE mènent une enquête avec l'employeur, le médecin du travail est consulté sur les conséquences pour la victime, l'inspecteur du travail peut venir constater, et la CARSAT peut aider à financer un revêtement de sol antidérapant.</div>`
            }
          ],
          points_cles: [
            "L'employeur est le premier responsable de la prévention ; les salariés y participent.",
            "L'employeur désigne un salarié compétent pour s'occuper de la prévention des risques.",
            "Le CSE est obligatoire dès 11 salariés ; ses attributions en santé et sécurité s'élargissent à partir de 50 salariés.",
            "Le service de prévention et de santé au travail a un rôle exclusivement préventif ; le médecin du travail est indépendant et soumis au secret médical.",
            "L'inspection du travail contrôle, conseille et sanctionne.",
            "La CARSAT fixe les cotisations AT/MP, conseille, contrôle et accorde des aides financières.",
            "L'INRS réalise des études et diffuse de l'information sur la prévention."
          ],
          lexique: [
            { terme: "CSE", def: "Comité social et économique : instance élue représentant les salariés, compétente notamment en santé et sécurité." },
            { terme: "Salarié compétent", def: "Salarié désigné par l'employeur pour s'occuper des activités de protection et de prévention des risques." },
            { terme: "SST", def: "Sauveteur secouriste du travail : salarié formé aux premiers secours et à la prévention." },
            { terme: "Médecin du travail", def: "Médecin du service de prévention et de santé au travail chargé du suivi de la santé des salariés en lien avec leur poste." },
            { terme: "Inspection du travail", def: "Service de l'État qui contrôle l'application du droit du travail, conseille et peut sanctionner." },
            { terme: "CARSAT", def: "Caisse régionale de la Sécurité sociale qui gère les cotisations AT/MP et agit pour la prévention." },
            { terme: "INRS", def: "Institut national de recherche et de sécurité, organisme de référence en prévention des risques professionnels." }
          ]
        },
        {
          id: "assistance-secours",
          titre: "C4 — L'assistance et le secours en milieu professionnel",
          duree: 15,
          objectifs: [
            "Connaître le cadre législatif de l'organisation des secours dans l'entreprise et la responsabilité de chacun.",
            "Appliquer la démarche du sauveteur secouriste du travail : protéger, examiner, faire alerter, secourir.",
            "Transmettre une alerte complète aux services de secours.",
            "Lire la signalisation de sécurité et un plan d'évacuation.",
            "Connaître les procédures en cas d'incendie et d'évacuation."
          ],
          sections: [
            {
              titre: "Le cadre législatif et la responsabilité",
              contenu: `<p>L'employeur doit <strong>organiser les premiers secours</strong> dans son entreprise : matériel de premiers secours adapté (trousse, éventuellement défibrillateur), consignes affichées précisant les numéros d'urgence et l'adresse des secours, et présence de personnel formé. La présence d'au moins un salarié formé aux premiers secours est obligatoire dans chaque atelier où sont effectués des travaux dangereux et sur les chantiers employant un certain nombre de personnes pendant une durée prolongée ; elle est recommandée partout.</p>
<p>La formation de <strong>sauveteur secouriste du travail (SST)</strong>, élaborée par l'INRS, dure en général deux jours et doit être actualisée régulièrement (maintien et actualisation des compétences, en principe tous les 24 mois).</p>
<p>Tout citoyen a une obligation : le Code pénal punit la <strong>non-assistance à personne en danger</strong>. Chacun doit porter secours à une personne en péril, soit en agissant lui-même, soit en provoquant un secours (en appelant les services d'urgence), dès lors qu'il peut le faire sans risque pour lui ou pour les autres.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> personne n'est obligé de faire des gestes qu'il ne maîtrise pas, mais tout le monde doit au minimum <strong>alerter</strong> les secours.</div>`
            },
            {
              titre: "La conduite à tenir du sauveteur secouriste",
              contenu: `<p>Face à un accident, le sauveteur suit une démarche en quatre étapes :</p>
<table>
<thead><tr><th>Étape</th><th>Objectif</th><th>Actions</th></tr></thead>
<tbody>
<tr><td>1. <strong>Protéger</strong></td><td>Éviter un sur-accident (pour la victime, le sauveteur et les témoins)</td><td>Identifier les dangers persistants, les supprimer ou les isoler (couper le courant, arrêter la machine, baliser) ; si c'est impossible et que le danger est vital, dégager la victime en urgence</td></tr>
<tr><td>2. <strong>Examiner</strong></td><td>Repérer ce qui menace la vie de la victime</td><td>Rechercher un saignement abondant, vérifier si la victime répond, si elle respire, si elle s'étouffe, si elle se plaint d'un malaise ou de douleurs</td></tr>
<tr><td>3. <strong>Faire alerter ou alerter</strong></td><td>Déclencher l'arrivée des secours adaptés</td><td>Selon l'organisation de l'entreprise, faire appeler par un témoin ou appeler soi-même les secours</td></tr>
<tr><td>4. <strong>Secourir</strong></td><td>Réaliser les gestes adaptés jusqu'à l'arrivée des secours</td><td>Compression d'un saignement, position latérale de sécurité si la victime respire mais ne répond pas, réanimation cardio-pulmonaire et défibrillateur si elle ne respire pas, surveillance</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège :</strong> se précipiter vers la victime sans protéger est la cause de nombreux sur-accidents (électrisation du sauveteur, intoxication dans une cuve, deuxième collision sur la route). La protection vient toujours en premier.</div>`
            },
            {
              titre: "L'alerte",
              contenu: `<table>
<thead><tr><th>Numéro</th><th>Service</th><th>Quand l'appeler</th></tr></thead>
<tbody>
<tr><td>15</td><td>SAMU</td><td>Problème médical urgent, malaise, blessure grave</td></tr>
<tr><td>18</td><td>Sapeurs-pompiers</td><td>Incendie, accident, victime à dégager, danger matériel</td></tr>
<tr><td>17</td><td>Police ou gendarmerie</td><td>Violence, agression, problème de sécurité publique</td></tr>
<tr><td>112</td><td>Numéro d'urgence européen</td><td>Toute urgence, depuis n'importe quel pays de l'Union européenne</td></tr>
<tr><td>114</td><td>Numéro d'urgence par SMS ou application</td><td>Personnes sourdes, malentendantes, ou qui ne peuvent pas parler</td></tr>
</tbody>
</table>
<p>Le <strong>message d'alerte</strong> doit permettre aux secours d'intervenir vite et de façon adaptée :</p>
<ol>
<li>se présenter et donner un numéro de téléphone pour être rappelé ;</li>
<li>indiquer la <strong>localisation précise</strong> (adresse, bâtiment, étage, point de repère, accès) ;</li>
<li>décrire la <strong>nature du problème</strong> (chute, brûlure, malaise, incendie) et les risques éventuels (produit chimique, électricité) ;</li>
<li>indiquer le <strong>nombre de victimes</strong> et leur <strong>état</strong> (saigne, répond, respire) ;</li>
<li>préciser les gestes déjà effectués ;</li>
<li><strong>ne raccrocher que lorsque l'interlocuteur le demande</strong>, et suivre ses conseils.</li>
</ol>
<p>Il faut aussi envoyer quelqu'un accueillir les secours à l'entrée pour les guider.</p>`
            },
            {
              titre: "La signalisation de sécurité et le plan d'évacuation",
              contenu: `<p>La signalisation de santé et de sécurité utilise des formes et des couleurs normalisées :</p>
<table>
<thead><tr><th>Type de panneau</th><th>Forme et couleur</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Interdiction</td><td>Rond, bord et barre rouges, fond blanc, pictogramme noir</td><td>Défense de fumer, accès interdit aux piétons</td></tr>
<tr><td>Obligation</td><td>Rond, fond bleu, pictogramme blanc</td><td>Port obligatoire du casque, des gants, du casque antibruit</td></tr>
<tr><td>Avertissement (danger)</td><td>Triangle, bord noir, fond jaune, pictogramme noir</td><td>Danger électrique, chariots élévateurs, sol glissant</td></tr>
<tr><td>Sauvetage et secours</td><td>Carré ou rectangle, fond vert, pictogramme blanc</td><td>Sortie de secours, trousse de secours, défibrillateur, douche de sécurité</td></tr>
<tr><td>Matériel de lutte contre l'incendie</td><td>Carré ou rectangle, fond rouge, pictogramme blanc</td><td>Extincteur, robinet d'incendie armé, alarme incendie</td></tr>
</tbody>
</table>
<p>Le <strong>plan d'évacuation</strong>, affiché à chaque niveau, indique le point « vous êtes ici », les cheminements vers les sorties de secours, l'emplacement des extincteurs, des alarmes, des organes de coupure (électricité, gaz) et le <strong>point de rassemblement</strong>. Les consignes de sécurité incendie y sont associées.</p>`
            },
            {
              titre: "Incendie et évacuation",
              contenu: `<p>Un feu ne peut naître que si trois éléments sont réunis : un <strong>combustible</strong> (bois, papier, carton, huile), un <strong>comburant</strong> (l'oxygène de l'air) et une <strong>source d'énergie</strong> (flamme, étincelle, chaleur, court-circuit). C'est le <strong>triangle du feu</strong> : supprimer un des trois éléments empêche ou éteint le feu.</p>
<table>
<thead><tr><th>Classe de feu</th><th>Combustible</th><th>Extincteur adapté</th></tr></thead>
<tbody>
<tr><td>A</td><td>Solides (bois, papier, tissus)</td><td>Eau pulvérisée avec additif, poudre ABC</td></tr>
<tr><td>B</td><td>Liquides et solides liquéfiables (essence, solvants, plastiques)</td><td>Poudre, CO<sub>2</sub>, mousse</td></tr>
<tr><td>C</td><td>Gaz</td><td>Poudre (après fermeture de l'arrivée de gaz)</td></tr>
<tr><td>D</td><td>Métaux</td><td>Poudre spéciale</td></tr>
<tr><td>F</td><td>Huiles et graisses de cuisson</td><td>Extincteur spécifique classe F ou couverture anti-feu ; <strong>jamais d'eau</strong></td></tr>
</tbody>
</table>
<p>Pour un feu d'origine électrique, on coupe d'abord le courant et on utilise un extincteur à CO<sub>2</sub>.</p>
<p><strong>Conduite à tenir en cas d'évacuation</strong> : au signal sonore, arrêter son travail et mettre les machines en sécurité si c'est rapide, ne pas prendre ses affaires, suivre les consignes du guide-file et du serre-file, emprunter les itinéraires balisés, <strong>ne jamais prendre l'ascenseur</strong>, fermer les portes derrière soi, se baisser en cas de fumée (l'air est plus respirable près du sol), rejoindre le point de rassemblement et ne pas revenir en arrière. Des exercices d'évacuation doivent être organisés régulièrement.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> dans une cuisine de restaurant, une friteuse prend feu. Le cuisinier coupe l'alimentation, pose le couvercle ou une couverture anti-feu pour étouffer les flammes et ne jette surtout pas d'eau : l'eau au contact de l'huile brûlante provoquerait une projection enflammée explosive.</div>`
            }
          ],
          points_cles: [
            "L'employeur organise les premiers secours ; la non-assistance à personne en danger est punie par la loi.",
            "La démarche du SST : protéger, examiner, faire alerter ou alerter, secourir.",
            "Protéger vient toujours en premier pour éviter le sur-accident.",
            "Numéros d'urgence : 15 SAMU, 18 pompiers, 17 police, 112 européen, 114 par SMS.",
            "Le message d'alerte précise le lieu, la nature de l'accident, le nombre et l'état des victimes ; on raccroche quand on y est invité.",
            "Signalisation : rond rouge = interdiction, rond bleu = obligation, triangle jaune = danger, vert = secours, rouge carré = matériel incendie.",
            "Triangle du feu : combustible, comburant, énergie ; on n'éteint jamais un feu d'huile avec de l'eau."
          ],
          lexique: [
            { terme: "Sur-accident", def: "Nouvel accident survenant après le premier, touchant la victime, le sauveteur ou des témoins." },
            { terme: "Alerte", def: "Transmission aux services de secours des informations nécessaires à leur intervention." },
            { terme: "Non-assistance à personne en danger", def: "Délit consistant à ne pas porter secours ou ne pas provoquer de secours à une personne en péril, alors qu'on pouvait le faire sans risque." },
            { terme: "Plan d'évacuation", def: "Plan affiché indiquant les sorties, les cheminements, les moyens de secours et le point de rassemblement." },
            { terme: "Point de rassemblement", def: "Lieu extérieur où se regroupent les personnes évacuées pour être comptées." },
            { terme: "Triangle du feu", def: "Réunion des trois éléments nécessaires à un feu : combustible, comburant et source d'énergie." }
          ]
        },
        {
          id: "analyse-risques-professionnels",
          titre: "C5 — L'analyse et l'évaluation des risques professionnels",
          duree: 17,
          objectifs: [
            "Analyser une situation de travail par l'approche par le risque.",
            "Évaluer un risque selon la gravité et la probabilité d'occurrence et en déduire un niveau de priorité.",
            "Connaître le document unique d'évaluation des risques professionnels (DUERP).",
            "Citer les neuf principes généraux de prévention.",
            "Hiérarchiser les mesures de prévention : supprimer, réduire, protéger collectivement puis individuellement, former et informer."
          ],
          sections: [
            {
              titre: "L'approche par le risque",
              contenu: `<p>L'<strong>approche par le risque</strong> (ou analyse a priori) consiste à repérer et évaluer les risques <strong>avant</strong> qu'un accident ne se produise. Elle s'appuie sur le processus d'apparition du dommage étudié précédemment.</p>
<ol>
<li><strong>Décrire la situation de travail</strong> : opérateur, tâche, matériel, milieu.</li>
<li><strong>Identifier les dangers</strong> présents dans chaque composante.</li>
<li><strong>Décrire la situation dangereuse</strong> : comment l'opérateur est exposé.</li>
<li><strong>Repérer les événements dangereux</strong> possibles.</li>
<li><strong>Préciser les dommages</strong> possibles.</li>
<li><strong>Évaluer le risque</strong> (gravité et probabilité).</li>
<li><strong>Proposer des mesures de prévention</strong> hiérarchisées.</li>
</ol>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> une agente d'entretien nettoie les sanitaires d'un bureau avec un détartrant acide. Danger : produit corrosif. Situation dangereuse : elle verse le produit sans gants, à hauteur du visage. Événement dangereux : éclaboussure. Dommage : brûlure des mains ou des yeux.</div>`
            },
            {
              titre: "Évaluer et hiérarchiser les risques",
              contenu: `<p>Pour décider par quoi commencer, on évalue chaque risque selon deux critères :</p>
<ul>
<li>la <strong>gravité</strong> du dommage possible : de 1 (faible, sans arrêt de travail) à 4 (très grave : incapacité permanente ou décès) ;</li>
<li>la <strong>probabilité d'occurrence</strong> (ou fréquence d'exposition) : de 1 (très improbable ou exposition rare) à 4 (très probable ou exposition permanente).</li>
</ul>
<p>Le <strong>niveau de risque</strong> s'obtient souvent en multipliant les deux : <strong>Risque = Gravité × Probabilité</strong>. Il permet de fixer une <strong>priorité d'action</strong>.</p>
<table>
<thead><tr><th>Gravité × Probabilité</th><th>Niveau de priorité</th><th>Action</th></tr></thead>
<tbody>
<tr><td>de 9 à 16</td><td>Priorité 1 (risque élevé)</td><td>Agir immédiatement</td></tr>
<tr><td>de 4 à 8</td><td>Priorité 2 (risque moyen)</td><td>Agir à court terme</td></tr>
<tr><td>de 1 à 3</td><td>Priorité 3 (risque faible)</td><td>Agir à moyen terme, surveiller</td></tr>
</tbody>
</table>
<p>Les échelles et les seuils varient selon les entreprises et les outils ; l'important est d'appliquer la même grille à tous les risques pour les comparer.</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> un risque très grave mais rare (chute mortelle d'un toit) peut avoir le même score qu'un risque fréquent mais bénin. Dans la pratique, les risques de gravité maximale (décès possible) sont traités en priorité, même si leur probabilité paraît faible.</div>`
            },
            {
              titre: "Le document unique d'évaluation des risques (DUERP)",
              contenu: `<p>Tout employeur, <strong>dès le premier salarié</strong>, doit évaluer les risques et transcrire les résultats dans le <strong>document unique d'évaluation des risques professionnels (DUERP)</strong>. Ce document :</p>
<ul>
<li>recense les risques par <strong>unité de travail</strong> (poste, atelier, métier) ;</li>
<li>est élaboré par l'employeur avec l'aide du salarié compétent, du CSE et du service de prévention et de santé au travail ; les salariés doivent être associés ;</li>
<li>doit être <strong>mis à jour</strong> au moins chaque année dans les entreprises d'au moins 11 salariés, et dans tous les cas lors d'un aménagement important modifiant les conditions de travail ou quand une information nouvelle sur un risque est connue (après un accident par exemple) ;</li>
<li>débouche sur un <strong>programme annuel de prévention</strong> (entreprises d'au moins 50 salariés) ou une liste d'actions de prévention (moins de 50 salariés) ;</li>
<li>est tenu à la disposition des salariés, du médecin du travail, de l'inspection du travail et de la CARSAT, et conservé pendant au moins 40 ans dans ses versions successives.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> l'absence de DUERP est une infraction. C'est le document de base de toute la politique de prévention de l'entreprise.</div>`
            },
            {
              titre: "Les neuf principes généraux de prévention",
              contenu: `<p>Le Code du travail impose à l'employeur de mettre en œuvre les mesures de prévention en respectant <strong>neuf principes généraux</strong> :</p>
<ol>
<li><strong>Éviter les risques</strong> (supprimer le danger ou l'exposition).</li>
<li><strong>Évaluer les risques</strong> qui ne peuvent pas être évités.</li>
<li><strong>Combattre les risques à la source</strong>.</li>
<li><strong>Adapter le travail à l'homme</strong> (conception des postes, choix des équipements, des méthodes et des rythmes de travail).</li>
<li><strong>Tenir compte de l'évolution de la technique</strong>.</li>
<li><strong>Remplacer ce qui est dangereux</strong> par ce qui ne l'est pas ou qui l'est moins.</li>
<li><strong>Planifier la prévention</strong> en intégrant la technique, l'organisation, les conditions de travail, les relations sociales, les risques liés au harcèlement moral et sexuel et aux agissements sexistes.</li>
<li><strong>Prendre des mesures de protection collective en leur donnant la priorité</strong> sur les mesures de protection individuelle.</li>
<li><strong>Donner les instructions appropriées</strong> aux travailleurs.</li>
</ol>`
            },
            {
              titre: "La hiérarchie des mesures de prévention",
              contenu: `<p>Les mesures de prévention se classent par ordre d'efficacité décroissante. On commence toujours par la plus efficace possible :</p>
<table>
<thead><tr><th>Ordre</th><th>Type de mesure</th><th>Principe</th><th>Exemple (agente d'entretien et détartrant)</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>Prévention intrinsèque</strong> (supprimer le danger ou le remplacer)</td><td>Agir sur le danger lui-même, dès la conception</td><td>Remplacer le détartrant corrosif par un produit moins dangereux ou par le nettoyage vapeur</td></tr>
<tr><td>2</td><td><strong>Protection collective</strong></td><td>Protège toutes les personnes exposées, sans action de leur part ; éloigne ou isole le danger</td><td>Doseur automatique, flacon pulvérisateur moussant à faible hauteur, ventilation des locaux</td></tr>
<tr><td>3</td><td><strong>Protection individuelle</strong> (EPI)</td><td>Protège uniquement la personne qui la porte, quand le risque ne peut pas être supprimé</td><td>Gants résistants aux produits chimiques, lunettes de protection</td></tr>
<tr><td>4</td><td><strong>Formation et information</strong></td><td>Accompagne toujours les autres mesures</td><td>Formation à la lecture des étiquettes, consigne affichée, fiche de poste</td></tr>
</tbody>
</table>
<p>Les mesures peuvent aussi être <strong>organisationnelles</strong> : rotation des postes, pauses, réduction du temps d'exposition, rangement, procédures.</p>
<p>Les <strong>équipements de protection individuelle (EPI)</strong> doivent être fournis gratuitement par l'employeur, adaptés au risque et à la personne, conformes (marquage CE), entretenus et remplacés. Leur port est obligatoire quand il est prescrit.</p>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour proposer des mesures, se demander dans l'ordre : peut-on <strong>supprimer</strong> le danger ? sinon, peut-on le <strong>réduire</strong> ou le <strong>remplacer</strong> ? peut-on <strong>protéger tout le monde</strong> ? quels <strong>EPI</strong> sont nécessaires ? quelles <strong>formations et consignes</strong> faut-il donner ?</div>
<div class="encart" data-type="piege"><strong>Piège :</strong> proposer uniquement des EPI est une réponse incomplète. L'EPI est la dernière barrière, pas la première.</div>`
            }
          ],
          points_cles: [
            "L'approche par le risque analyse une situation avant tout accident : danger, situation dangereuse, événement, dommage.",
            "Un risque s'évalue selon sa gravité et sa probabilité ; le produit donne un niveau de priorité.",
            "Le DUERP est obligatoire dès le premier salarié et doit être mis à jour régulièrement.",
            "Le DUERP débouche sur un programme ou une liste d'actions de prévention.",
            "Les neuf principes généraux de prévention commencent par « éviter les risques ».",
            "La protection collective est prioritaire sur la protection individuelle.",
            "Hiérarchie des mesures : prévention intrinsèque, protection collective, protection individuelle, formation et information."
          ],
          lexique: [
            { terme: "Évaluation des risques", def: "Démarche qui identifie les dangers, analyse les conditions d'exposition et classe les risques par priorité." },
            { terme: "Gravité", def: "Importance du dommage que peut provoquer un risque." },
            { terme: "Probabilité d'occurrence", def: "Chance que le dommage se produise, liée notamment à la fréquence et à la durée d'exposition." },
            { terme: "DUERP", def: "Document unique d'évaluation des risques professionnels, obligatoire dans toute entreprise employant au moins un salarié." },
            { terme: "Prévention intrinsèque", def: "Mesure qui supprime ou réduit le danger à la source, dès la conception." },
            { terme: "Protection collective", def: "Mesure qui protège simultanément toutes les personnes exposées (garde-corps, capotage, ventilation)." },
            { terme: "EPI", def: "Équipement de protection individuelle, porté par le salarié pour se protéger d'un risque résiduel." }
          ]
        },
        {
          id: "risque-chimique",
          titre: "C6 — Risque spécifique : le risque chimique",
          duree: 16,
          objectifs: [
            "Identifier les secteurs et situations exposant aux agents chimiques.",
            "Décrire les voies de pénétration des produits dans l'organisme et leurs effets aigus et chroniques.",
            "Lire une étiquette et reconnaître les pictogrammes de danger du système général harmonisé (SGH).",
            "Exploiter une fiche de données de sécurité.",
            "Proposer des mesures de prévention hiérarchisées."
          ],
          sections: [
            {
              titre: "Le risque chimique dans les métiers",
              contenu: `<p>Le <strong>risque chimique</strong> est la possibilité de subir un dommage lors de l'exposition à un <strong>agent chimique dangereux</strong> : produit (détergent, solvant, peinture, colle, carburant, produit de coiffure, pesticide) ou substance émise par une activité (fumées de soudage, poussières de bois, de silice ou de farine, gaz d'échappement).</p>
<p>Presque tous les secteurs sont concernés : nettoyage, coiffure et esthétique (colorations, vernis, décolorants), BTP (ciment, solvants, poussières), garages (huiles, solvants, fumées), boulangerie (farine), santé (désinfectants), agriculture (pesticides), industrie, restauration (produits de plonge et de nettoyage des fours).</p>`
            },
            {
              titre: "Voies de pénétration et effets sur la santé",
              contenu: `<table>
<thead><tr><th>Voie de pénétration</th><th>Comment ?</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Respiratoire (inhalation)</td><td>Gaz, vapeurs, poussières, aérosols respirés ; c'est la voie principale en milieu professionnel</td><td>Vapeurs de solvant en carrosserie, poussière de farine</td></tr>
<tr><td>Cutanée (et oculaire)</td><td>Contact avec la peau ou les yeux, passage à travers la peau</td><td>Projection de décapant, contact répété avec l'eau et les détergents</td></tr>
<tr><td>Digestive (ingestion)</td><td>Mains sales portées à la bouche, manger ou fumer sur le poste, produit transvasé dans une bouteille alimentaire</td><td>Ingestion accidentelle d'un produit mis dans une bouteille d'eau</td></tr>
</tbody>
</table>
<p>Les effets peuvent être :</p>
<ul>
<li><strong>aigus</strong> (immédiats, après une exposition brève) : brûlures, irritations, intoxications, vertiges, perte de connaissance ;</li>
<li><strong>chroniques</strong> (après des expositions répétées) : eczéma, asthme professionnel, atteintes du foie, des reins ou du système nerveux, et pour les agents <strong>CMR</strong> : <strong>cancers</strong> (Cancérogènes), atteintes de l'ADN (Mutagènes), troubles de la fertilité ou du développement de l'enfant à naître (toxiques pour la Reproduction).</li>
</ul>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> une coiffeuse développe un eczéma des mains et des difficultés respiratoires après plusieurs années de colorations et de décolorations. Ces affections peuvent être reconnues comme maladies professionnelles.</div>`
            },
            {
              titre: "L'étiquetage et les pictogrammes SGH",
              contenu: `<p>Le règlement européen <strong>CLP</strong>, qui applique le <strong>système général harmonisé (SGH)</strong> de l'ONU, impose un étiquetage des produits dangereux. Les pictogrammes de danger sont des <strong>losanges à bordure rouge sur fond blanc</strong> avec un symbole noir.</p>
<table>
<thead><tr><th>Pictogramme (description)</th><th>Signification</th><th>Exemples de produits</th></tr></thead>
<tbody>
<tr><td>SGH01 : bombe qui explose</td><td>Explosif</td><td>Feux d'artifice, munitions</td></tr>
<tr><td>SGH02 : flamme</td><td>Inflammable (s'enflamme facilement)</td><td>Solvants, essence, aérosols, alcool à brûler</td></tr>
<tr><td>SGH03 : flamme au-dessus d'un cercle</td><td>Comburant (peut provoquer ou aggraver un incendie)</td><td>Eau oxygénée concentrée, certains engrais, oxygène</td></tr>
<tr><td>SGH04 : bouteille de gaz</td><td>Gaz sous pression (peut exploser sous l'effet de la chaleur ; gaz réfrigéré : brûlures par le froid)</td><td>Bouteilles de gaz, azote liquide</td></tr>
<tr><td>SGH05 : corrosion (liquide rongeant une main et une surface)</td><td>Corrosif : brûle la peau et les yeux, attaque les métaux</td><td>Déboucheurs, détartrants acides, soude</td></tr>
<tr><td>SGH06 : tête de mort sur deux tibias</td><td>Toxicité aiguë : peut tuer rapidement, même à faible dose</td><td>Certains pesticides, raticides</td></tr>
<tr><td>SGH07 : point d'exclamation</td><td>Nocif, irritant, sensibilisant cutané, narcotique</td><td>Produits ménagers, colles, certains détergents</td></tr>
<tr><td>SGH08 : silhouette humaine avec une étoile sur la poitrine</td><td>Danger grave pour la santé : CMR, sensibilisant respiratoire, toxique pour certains organes, mortel en cas d'aspiration</td><td>White-spirit, certains solvants et carburants</td></tr>
<tr><td>SGH09 : arbre mort et poisson mort</td><td>Dangereux pour l'environnement aquatique</td><td>Pesticides, eau de Javel, certains produits d'entretien</td></tr>
</tbody>
</table>
<p>L'étiquette comporte aussi : l'identité du produit et du fournisseur, une <strong>mention d'avertissement</strong> (« Danger » pour les dangers les plus graves, « Attention » pour les moins graves), des <strong>mentions de danger</strong> (codes H, par exemple « Provoque de graves brûlures de la peau ») et des <strong>conseils de prudence</strong> (codes P, par exemple « Porter des gants de protection »).</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> l'absence de pictogramme ne signifie pas qu'un produit est sans danger (par exemple les poussières de bois ou les fumées de soudage n'ont pas d'étiquette). Et un produit transvasé doit être réétiqueté.</div>`
            },
            {
              titre: "La fiche de données de sécurité",
              contenu: `<p>Le fournisseur d'un produit dangereux doit remettre à l'employeur une <strong>fiche de données de sécurité (FDS)</strong>. Elle comporte <strong>16 rubriques</strong>, parmi lesquelles : identification des dangers, composition, premiers secours, mesures de lutte contre l'incendie, manipulation et stockage, contrôle de l'exposition et protection individuelle, propriétés physiques et chimiques, informations toxicologiques, élimination.</p>
<p>L'employeur s'en sert pour évaluer le risque et rédiger une <strong>notice de poste</strong> à destination des salariés, plus courte et plus concrète. Les FDS doivent être accessibles aux salariés et transmises au médecin du travail.</p>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour connaître la conduite à tenir en cas de projection dans l'œil, consulter la rubrique « premiers secours » de la FDS ; pour savoir quels gants choisir, consulter la rubrique « contrôle de l'exposition, protection individuelle ».</div>`
            },
            {
              titre: "La prévention du risque chimique",
              contenu: `<table>
<thead><tr><th>Niveau</th><th>Mesures</th></tr></thead>
<tbody>
<tr><td>Supprimer, substituer</td><td>Remplacer un produit dangereux par un produit moins dangereux (peinture à l'eau au lieu d'une peinture aux solvants) ou changer de procédé (nettoyage vapeur) ; la substitution des CMR est obligatoire quand elle est techniquement possible</td></tr>
<tr><td>Protection collective</td><td>Travail en vase clos, captage des polluants à la source (aspiration sur la torche de soudage, cabine de peinture), ventilation générale, stockage dans des armoires ventilées, bacs de rétention, séparation des produits incompatibles</td></tr>
<tr><td>Protection individuelle</td><td>Gants adaptés au produit, lunettes ou écran facial, appareil de protection respiratoire avec filtre adapté, vêtements de protection</td></tr>
<tr><td>Formation, information, organisation</td><td>Formation à la lecture des étiquettes et des FDS, notice de poste, interdiction de manger, boire ou fumer sur le poste, lavage des mains, limitation du nombre de personnes exposées et de la durée, ne jamais mélanger les produits (eau de Javel et acide dégagent un gaz toxique), suivi médical</td></tr>
</tbody>
</table>
<p>Pour certains agents, il existe des <strong>valeurs limites d'exposition professionnelle</strong> (VLEP), concentrations dans l'air à ne pas dépasser. Les salariés exposés aux agents CMR bénéficient d'un suivi individuel renforcé et d'une traçabilité de leurs expositions.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> en cas de projection sur la peau ou dans les yeux, rincer immédiatement et abondamment à l'eau (au moins 15 minutes pour les yeux) et alerter ; en cas d'ingestion, ne pas faire vomir et appeler le 15 ou un centre antipoison.</div>`
            }
          ],
          points_cles: [
            "Les agents chimiques dangereux sont présents dans presque tous les métiers, y compris sous forme de poussières ou de fumées.",
            "Les trois voies de pénétration sont respiratoire (la principale au travail), cutanée et digestive.",
            "Les effets peuvent être aigus (brûlures, intoxications) ou chroniques (eczéma, asthme, cancers).",
            "Les neuf pictogrammes SGH sont des losanges à bordure rouge ; « Danger » signale les dangers les plus graves, « Attention » les moins graves.",
            "Les mentions H décrivent le danger, les mentions P donnent les conseils de prudence.",
            "La fiche de données de sécurité comporte 16 rubriques et sert à évaluer le risque et choisir les protections.",
            "La substitution est la première mesure ; on ne mélange jamais les produits et on ne transvase pas dans des contenants alimentaires."
          ],
          lexique: [
            { terme: "Agent chimique dangereux", def: "Substance ou mélange pouvant nuire à la santé ou à la sécurité, étiqueté ou émis par une activité." },
            { terme: "SGH", def: "Système général harmonisé de classification et d'étiquetage des produits chimiques, appliqué en Europe par le règlement CLP." },
            { terme: "Pictogramme de danger", def: "Losange à bordure rouge et symbole noir indiquant la nature du danger d'un produit." },
            { terme: "FDS", def: "Fiche de données de sécurité : document en 16 rubriques fourni par le fabricant d'un produit dangereux." },
            { terme: "CMR", def: "Agent cancérogène, mutagène ou toxique pour la reproduction." },
            { terme: "Substitution", def: "Remplacement d'un produit ou d'un procédé dangereux par un autre qui l'est moins." },
            { terme: "VLEP", def: "Valeur limite d'exposition professionnelle : concentration dans l'air d'un agent chimique à ne pas dépasser." }
          ]
        },
        {
          id: "bruit-ambiances-ecran",
          titre: "C6 — Risques spécifiques : bruit au travail, ambiances physiques et travail sur écran",
          duree: 16,
          objectifs: [
            "Connaître les valeurs d'exposition au bruit au travail (80, 85, 87 dB(A)) et les obligations associées.",
            "Identifier les risques liés aux vibrations et aux ambiances thermiques.",
            "Décrire les effets du travail sur écran sur la santé.",
            "Proposer un aménagement de poste de travail sur écran.",
            "Hiérarchiser les mesures de prévention pour ces risques physiques."
          ],
          sections: [
            {
              titre: "Le bruit au travail : valeurs réglementaires",
              contenu: `<p>Au travail, le bruit est évalué par l'<strong>exposition quotidienne</strong> du salarié, ramenée à une journée de <strong>8 heures</strong>, et par le niveau des bruits brefs et intenses (niveau de crête, exprimé en dB(C)). Le Code du travail fixe trois seuils :</p>
<table>
<thead><tr><th>Seuil</th><th>Exposition sur 8 h</th><th>Niveau de crête</th><th>Obligations de l'employeur</th></tr></thead>
<tbody>
<tr><td>Valeur d'exposition inférieure déclenchant l'action</td><td><strong>80 dB(A)</strong></td><td>135 dB(C)</td><td>Mettre à disposition des protecteurs individuels contre le bruit (PICB), informer et former les salariés, proposer un examen audiométrique préventif</td></tr>
<tr><td>Valeur d'exposition supérieure déclenchant l'action</td><td><strong>85 dB(A)</strong></td><td>137 dB(C)</td><td>Veiller au <strong>port effectif</strong> des PICB, signaler les zones bruyantes et en limiter l'accès, mettre en place un programme de mesures techniques et organisationnelles pour réduire l'exposition, assurer un contrôle de l'audition</td></tr>
<tr><td>Valeur limite d'exposition</td><td><strong>87 dB(A)</strong></td><td>140 dB(C)</td><td>Ne doit <strong>jamais être dépassée</strong>, compte tenu de l'atténuation apportée par les PICB ; en cas de dépassement, mesures immédiates</td></tr>
</tbody>
</table>
<p>Rappel : chaque fois que le niveau augmente de 3 dB, la durée d'exposition équivalente est divisée par deux. Être exposé à 83 dB(A) pendant 4 heures équivaut à 80 dB(A) pendant 8 heures. Un repère simple : si l'on doit élever la voix pour parler à un collègue situé à un mètre, le niveau est probablement supérieur à 80 dB(A).</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> la valeur limite de 87 dB(A) se calcule <strong>en tenant compte</strong> du port des protections ; les deux autres seuils (80 et 85) se calculent <strong>sans</strong> tenir compte des protections.</div>`
            },
            {
              titre: "Prévenir le bruit au travail",
              contenu: `<ul>
<li><strong>À la source</strong> : choisir des machines moins bruyantes, les entretenir, installer des silencieux, capoter les machines, poser des plots antivibratiles.</li>
<li><strong>Sur la propagation</strong> : encoffrement, écrans acoustiques, cabine insonorisée pour l'opérateur, matériaux absorbants au plafond et aux murs, éloignement des postes calmes.</li>
<li><strong>Par l'organisation</strong> : réduire le temps d'exposition, rotation des postes, travaux bruyants à des moments où peu de salariés sont présents.</li>
<li><strong>Protection individuelle</strong> : bouchons d'oreille (jetables ou moulés), arceaux, casques (coquilles) ; ils doivent être portés <strong>pendant toute la durée</strong> de l'exposition, car quelques minutes sans protection réduisent fortement leur efficacité.</li>
<li><strong>Information et suivi médical</strong> : audiométrie, formation au port des PICB.</li>
</ul>
<p>La surdité provoquée par le bruit est une <strong>maladie professionnelle</strong> reconnue.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> dans une menuiserie, la scie circulaire et la raboteuse dépassent 90 dB(A). L'entreprise installe des capotages et une aspiration, puis fournit des bouchons moulés aux menuisiers et signale l'atelier par un panneau d'obligation « port de protections auditives ».</div>`
            },
            {
              titre: "Vibrations et ambiances thermiques",
              contenu: `<table>
<thead><tr><th>Risque</th><th>Situations</th><th>Effets</th><th>Prévention</th></tr></thead>
<tbody>
<tr><td>Vibrations main-bras</td><td>Marteau-piqueur, meuleuse, perforateur, tronçonneuse</td><td>Troubles vasculaires (doigts blancs et engourdis, surtout au froid), troubles des articulations, des nerfs et des tendons</td><td>Outils antivibratiles, entretien, limitation de la durée, gants anti-vibrations</td></tr>
<tr><td>Vibrations corps entier</td><td>Conduite d'engins de chantier, de chariots, de tracteurs, de poids lourds</td><td>Douleurs lombaires, atteintes de la colonne vertébrale</td><td>Sièges suspendus, entretien des pistes, vitesse adaptée, pauses</td></tr>
<tr><td>Chaleur</td><td>Fours, cuisines, fonderies, toitures et chantiers en été</td><td>Fatigue, crampes, déshydratation, malaise, <strong>coup de chaleur</strong> potentiellement mortel</td><td>Ventilation, protections solaires, adaptation des horaires, pauses à l'ombre, eau potable fraîche à disposition</td></tr>
<tr><td>Froid</td><td>Chambres froides, entrepôts frigorifiques, travaux extérieurs en hiver</td><td>Engelures, gelures, hypothermie, aggravation des TMS</td><td>Vêtements adaptés, pauses en local chauffé, boissons chaudes</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Le travail sur écran : effets sur la santé",
              contenu: `<p>Le travail sur écran (bureau, accueil, caisse, conception assistée par ordinateur, centres d'appels, télétravail) expose à plusieurs troubles :</p>
<ul>
<li><strong>fatigue visuelle</strong> : yeux secs, picotements, vision floue, maux de tête, liés à la fixation prolongée, aux reflets et à un éclairage mal adapté ;</li>
<li><strong>troubles musculosquelettiques</strong> : douleurs de la nuque, des épaules, du dos, des poignets (souris), dues aux postures statiques prolongées ;</li>
<li><strong>sédentarité</strong> : plusieurs heures assis sans bouger ;</li>
<li><strong>charge mentale et stress</strong> : flux de courriels, interruptions, contrôle permanent, hyperconnexion. Le droit à la <strong>déconnexion</strong> doit être organisé dans l'entreprise.</li>
</ul>`
            },
            {
              titre: "Aménager un poste de travail sur écran",
              contenu: `<table>
<thead><tr><th>Élément</th><th>Règle d'aménagement</th></tr></thead>
<tbody>
<tr><td>Écran</td><td>Placé face à l'opérateur, à une distance d'environ 50 à 70 cm (longueur d'un bras), le haut de l'écran à hauteur des yeux ou légèrement en dessous</td></tr>
<tr><td>Position par rapport aux fenêtres</td><td>Écran perpendiculaire aux fenêtres pour éviter reflets et éblouissement ; stores réglables</td></tr>
<tr><td>Siège</td><td>Réglable en hauteur, dossier soutenant le bas du dos ; pieds à plat sur le sol ou sur un repose-pieds</td></tr>
<tr><td>Clavier et souris</td><td>Proches du corps, avant-bras à l'horizontale et posés, coudes à environ 90°, poignets droits</td></tr>
<tr><td>Ordinateur portable</td><td>Utiliser un support pour surélever l'écran et un clavier et une souris séparés</td></tr>
<tr><td>Organisation</td><td>Alterner régulièrement avec d'autres tâches, faire des pauses brèves et fréquentes, regarder au loin, se lever et bouger</td></tr>
</tbody>
</table>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour vérifier son poste, s'asseoir au fond du siège et contrôler de haut en bas : regard (haut de l'écran), épaules (relâchées), coudes (à 90°, près du corps), poignets (droits), dos (soutenu), pieds (à plat).</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les salariés travaillant sur écran peuvent bénéficier d'un examen de la vue par le médecin du travail ; l'employeur doit organiser l'activité pour permettre des pauses ou des changements d'activité.</div>`
            }
          ],
          points_cles: [
            "L'exposition au bruit au travail est calculée sur une journée de 8 heures, en dB(A).",
            "80 dB(A) : protections mises à disposition, information, audiométrie proposée.",
            "85 dB(A) : port des protections obligatoire, signalisation, programme de réduction du bruit.",
            "87 dB(A) : valeur limite à ne jamais dépasser, protections comprises.",
            "Les vibrations main-bras touchent les mains et les bras ; les vibrations corps entier touchent surtout le dos.",
            "La chaleur et le froid exposent à des risques graves (coup de chaleur, hypothermie).",
            "Le travail sur écran provoque fatigue visuelle, TMS et sédentarité ; l'écran se place à 50-70 cm, haut de l'écran à hauteur des yeux, perpendiculaire aux fenêtres."
          ],
          lexique: [
            { terme: "Exposition quotidienne au bruit", def: "Niveau moyen de bruit reçu par un salarié, ramené à une journée de 8 heures." },
            { terme: "PICB", def: "Protecteur individuel contre le bruit : bouchons d'oreille, arceaux ou casque antibruit." },
            { terme: "Valeur limite d'exposition", def: "Niveau qui ne doit jamais être dépassé ; pour le bruit, 87 dB(A) en tenant compte des protections." },
            { terme: "Vibrations main-bras", def: "Vibrations transmises par les outils tenus en main, qui atteignent vaisseaux, nerfs et articulations des membres supérieurs." },
            { terme: "Coup de chaleur", def: "Élévation dangereuse de la température du corps lors d'un travail en ambiance chaude, urgence vitale." },
            { terme: "Fatigue visuelle", def: "Ensemble de troubles oculaires (yeux secs, vision floue, maux de tête) liés à un travail visuel prolongé." }
          ]
        },
        {
          id: "risque-electrique",
          titre: "C6 — Risque spécifique : le risque électrique",
          duree: 14,
          objectifs: [
            "Identifier les situations d'exposition au risque électrique.",
            "Distinguer électrisation et électrocution, contact direct et contact indirect.",
            "Expliquer les facteurs qui déterminent la gravité des effets du courant.",
            "Connaître les mesures de prévention : protections, consignation, habilitation.",
            "Appliquer la conduite à tenir face à une victime d'un accident électrique."
          ],
          sections: [
            {
              titre: "Qui est exposé ?",
              contenu: `<p>Le <strong>risque électrique</strong> concerne bien sûr les électriciens, mais aussi tous ceux qui travaillent <strong>au voisinage</strong> d'installations électriques ou qui utilisent des appareils électriques : maçons et plombiers qui percent un mur, peintres, agents d'entretien qui nettoient près de prises, cuisiniers utilisant des appareils électriques dans un milieu humide, conducteurs d'engins qui passent près de lignes aériennes, coiffeurs avec leurs sèche-cheveux, agents de maintenance.</p>
<p>Les accidents d'origine électrique sont moins nombreux que d'autres types d'accidents, mais ils sont souvent <strong>très graves</strong> (brûlures profondes, décès).</p>`
            },
            {
              titre: "Les effets du courant sur le corps humain",
              contenu: `<p>Le corps humain conduit l'électricité. Quand une personne touche un élément sous tension et un autre élément à un potentiel différent (ou le sol), le courant la traverse.</p>
<ul>
<li>L'<strong>électrisation</strong> est le passage du courant dans le corps, avec des effets plus ou moins graves.</li>
<li>L'<strong>électrocution</strong> est une électrisation qui entraîne la <strong>mort</strong>.</li>
</ul>
<table>
<thead><tr><th>Effet</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Sensation, secousse</td><td>Picotement ou choc à faible intensité ; peut provoquer une chute (par exemple d'une échelle)</td></tr>
<tr><td>Tétanisation des muscles</td><td>Contraction involontaire : la victime ne peut plus lâcher l'objet sous tension</td></tr>
<tr><td>Arrêt respiratoire</td><td>Paralysie des muscles respiratoires</td></tr>
<tr><td>Arrêt cardiaque</td><td>Le cœur bat de façon désordonnée (fibrillation ventriculaire) et ne pompe plus le sang</td></tr>
<tr><td>Brûlures</td><td>Externes (points d'entrée et de sortie du courant) et internes, souvent plus graves qu'elles ne paraissent</td></tr>
<tr><td>Effets de l'arc électrique</td><td>Brûlures, projections de métal en fusion, lésions des yeux par le rayonnement</td></tr>
</tbody>
</table>
<p>La gravité dépend surtout de l'<strong>intensité</strong> du courant qui traverse le corps, de la <strong>durée</strong> du passage et du <strong>trajet</strong> (un trajet passant par le cœur, de la main à la main ou de la main aux pieds, est le plus dangereux). L'intensité dépend elle-même de la <strong>tension</strong> et de la <strong>résistance du corps</strong>, qui diminue fortement quand la peau est mouillée. Une intensité de quelques dizaines de milliampères peut déjà être mortelle : c'est pourquoi les dispositifs différentiels de protection des personnes sont réglés à <strong>30 mA</strong>.</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> le courant domestique (230 volts) est tout à fait capable de tuer. Il n'y a pas besoin de « haute tension » pour qu'un accident soit mortel, surtout en milieu humide.</div>`
            },
            {
              titre: "Contacts directs et indirects",
              contenu: `<table>
<thead><tr><th>Type de contact</th><th>Définition</th><th>Exemple</th><th>Protection</th></tr></thead>
<tbody>
<tr><td>Contact direct</td><td>Contact avec une partie active, normalement sous tension</td><td>Toucher un fil dénudé, introduire un objet métallique dans une prise</td><td>Isolation des conducteurs, enveloppes (coffrets fermés), éloignement, obstacles, très basse tension de sécurité</td></tr>
<tr><td>Contact indirect</td><td>Contact avec une masse métallique mise accidentellement sous tension à la suite d'un défaut</td><td>Toucher la carcasse d'une machine à laver dont un fil interne s'est dénudé</td><td>Mise à la terre des masses associée à un dispositif différentiel qui coupe le courant, appareils à double isolation</td></tr>
</tbody>
</table>
<p>Les tensions sont classées en domaines : <strong>très basse tension</strong> (jusqu'à 50 V en courant alternatif), <strong>basse tension</strong> (de 50 à 1 000 V, ce qui inclut le 230 V et le 400 V) et <strong>haute tension</strong> (au-delà de 1 000 V, lignes et postes de distribution).</p>`
            },
            {
              titre: "Prévenir le risque électrique",
              contenu: `<h4>Mesures techniques</h4>
<ul>
<li>installations conformes aux normes et vérifiées périodiquement par un organisme ou une personne qualifiée ;</li>
<li>dispositifs différentiels à haute sensibilité (30 mA), mise à la terre ;</li>
<li>matériel adapté au milieu (étanche en milieu humide), câbles et rallonges en bon état ;</li>
<li>très basse tension de sécurité pour les baladeuses dans les lieux humides ou exigus.</li>
</ul>
<h4>La consignation</h4>
<p>Avant toute intervention sur une installation, celle-ci doit être <strong>mise hors tension de façon sûre</strong> : c'est la <strong>consignation</strong>, réalisée par une personne habilitée, selon des étapes précises : séparer l'installation de sa source d'énergie, condamner l'organe de séparation (cadenas), identifier l'ouvrage, <strong>vérifier l'absence de tension</strong> avec un appareil adapté, et, si nécessaire, mettre à la terre et en court-circuit.</p>
<h4>L'habilitation électrique</h4>
<p>Seules les personnes <strong>habilitées</strong> peuvent effectuer des travaux ou interventions d'ordre électrique, ou des travaux non électriques au voisinage de pièces nues sous tension. L'<strong>habilitation</strong> est délivrée <strong>par l'employeur</strong> après une formation adaptée. Elle est désignée par un symbole (par exemple B0 ou H0 pour des travaux d'ordre non électrique au voisinage, BR pour des interventions de dépannage en basse tension, BC pour la consignation). Elle doit être renouvelée régulièrement.</p>
<h4>Pour tous</h4>
<p>Ne jamais intervenir sur une installation sans habilitation, signaler tout matériel détérioré (prise cassée, câble écrasé), ne pas surcharger les multiprises, ne pas manipuler d'appareil électrique avec les mains mouillées, débrancher en tirant sur la fiche et non sur le câble.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un peintre en bâtiment doit travailler dans une pièce où des fils pendent du plafond. Non habilité, il ne touche pas les fils et demande à l'électricien du chantier de couper et de condamner le circuit avant de commencer.</div>`
            },
            {
              titre: "Conduite à tenir face à une victime",
              contenu: `<ol>
<li><strong>Ne pas toucher la victime</strong> tant qu'elle est en contact avec le courant : le sauveteur serait électrisé à son tour.</li>
<li><strong>Couper le courant</strong> (disjoncteur, arrêt d'urgence, débrancher la prise). En haute tension, ne jamais s'approcher : alerter et faire couper par l'exploitant.</li>
<li><strong>Alerter</strong> les secours (15, 18 ou 112) en précisant qu'il s'agit d'un accident électrique.</li>
<li><strong>Secourir</strong> : examiner la victime, pratiquer si nécessaire la réanimation cardio-pulmonaire avec un défibrillateur, refroidir les brûlures à l'eau.</li>
</ol>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> toute victime d'électrisation, même si elle semble aller bien, doit être vue par un médecin : des troubles du rythme cardiaque ou des brûlures internes peuvent apparaître secondairement.</div>`
            }
          ],
          points_cles: [
            "L'électrisation est le passage du courant dans le corps ; l'électrocution est une électrisation mortelle.",
            "La gravité dépend de l'intensité, de la durée et du trajet du courant ; la peau humide diminue la résistance du corps.",
            "Le courant de 230 V peut tuer ; les dispositifs différentiels de 30 mA protègent les personnes.",
            "Contact direct : partie active sous tension ; contact indirect : masse mise accidentellement sous tension.",
            "La consignation met une installation hors tension de façon sûre, avec vérification d'absence de tension.",
            "L'habilitation électrique est délivrée par l'employeur après formation ; sans habilitation, on n'intervient pas.",
            "Face à une victime : ne pas la toucher, couper le courant, alerter, secourir."
          ],
          lexique: [
            { terme: "Électrisation", def: "Passage d'un courant électrique à travers le corps, avec des effets plus ou moins graves." },
            { terme: "Électrocution", def: "Électrisation entraînant la mort." },
            { terme: "Contact indirect", def: "Contact avec une masse métallique mise accidentellement sous tension par un défaut d'isolement." },
            { terme: "Dispositif différentiel", def: "Appareil qui coupe automatiquement le courant lorsqu'il détecte une fuite vers la terre." },
            { terme: "Consignation", def: "Ensemble des opérations qui mettent une installation électrique hors tension en sécurité et l'y maintiennent." },
            { terme: "Habilitation électrique", def: "Reconnaissance par l'employeur de la capacité d'une personne formée à réaliser des opérations en sécurité vis-à-vis du risque électrique." }
          ]
        },
        {
          id: "suivi-sante-risque-biologique",
          titre: "C7 — Le suivi de la santé au travail, le risque biologique et les défenses de l'organisme",
          duree: 17,
          objectifs: [
            "Décrire les différentes visites du suivi de l'état de santé des salariés.",
            "Identifier les situations d'exposition au risque biologique et la chaîne de transmission.",
            "Expliquer les défenses non spécifiques et spécifiques de l'organisme.",
            "Définir antigène, anticorps et mémoire immunitaire et expliquer le principe de la vaccination.",
            "Proposer des mesures de protection collective et individuelle contre le risque biologique."
          ],
          sections: [
            {
              titre: "Le suivi de l'état de santé des salariés",
              contenu: `<p>Chaque salarié bénéficie d'un suivi de son état de santé par le <strong>service de prévention et de santé au travail</strong>. Ce suivi est adapté aux risques du poste, à l'âge et à l'état de santé.</p>
<table>
<thead><tr><th>Visite</th><th>Pour qui et quand ?</th><th>Objectif</th></tr></thead>
<tbody>
<tr><td><strong>Visite d'information et de prévention (VIP)</strong></td><td>Tout salarié, dans les 3 mois suivant la prise de poste (avant l'affectation pour les mineurs et les travailleurs de nuit), renouvelée au plus tous les 5 ans (3 ans pour certains salariés)</td><td>Interroger sur l'état de santé, informer sur les risques du poste et les moyens de prévention, orienter si besoin vers le médecin du travail ; réalisée par le médecin ou l'infirmier</td></tr>
<tr><td><strong>Examen médical d'aptitude</strong> (suivi individuel renforcé)</td><td>Salariés affectés à un poste à risques particuliers (amiante, plomb, agents CMR, certains agents biologiques, rayonnements, risque de chute de hauteur lors du montage d'échafaudages…), <strong>avant l'affectation</strong>, renouvelé au plus tous les 4 ans avec une visite intermédiaire</td><td>Vérifier la compatibilité de l'état de santé avec le poste ; le médecin du travail délivre un avis d'aptitude ou d'inaptitude</td></tr>
<tr><td><strong>Visite de pré-reprise</strong></td><td>Pendant un arrêt de travail long, à la demande du salarié ou de son médecin</td><td>Préparer le retour au travail (aménagement de poste, formation)</td></tr>
<tr><td><strong>Visite de reprise</strong></td><td>Après un congé maternité, une maladie professionnelle, un accident du travail ayant entraîné un arrêt d'au moins 30 jours, ou une maladie ou un accident non professionnel ayant entraîné un arrêt d'au moins 60 jours</td><td>Vérifier que le poste est compatible avec l'état de santé</td></tr>
<tr><td><strong>Visite de mi-carrière</strong></td><td>Autour de 45 ans</td><td>Faire le point sur l'adéquation entre le poste et l'état de santé, prévenir la désinsertion professionnelle</td></tr>
<tr><td><strong>Visite à la demande</strong></td><td>À tout moment, à la demande du salarié, de l'employeur ou du médecin</td><td>Répondre à un problème de santé lié au travail</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les visites ont lieu pendant le temps de travail et sont rémunérées. Les informations médicales restent couvertes par le secret médical : l'employeur ne reçoit qu'un avis sur le poste, jamais le diagnostic.</div>`
            },
            {
              titre: "Le risque biologique au travail",
              contenu: `<p>Le <strong>risque biologique</strong> (ou microbiologique) est la possibilité de contracter une infection, une allergie ou une intoxication à cause d'<strong>agents biologiques</strong> : bactéries, virus, champignons microscopiques, parasites. Ces agents sont classés en <strong>quatre groupes</strong> selon leur danger, du groupe 1 (pas de maladie connue chez l'homme) au groupe 4 (maladie grave, forte propagation, pas de traitement efficace).</p>
<p>Les métiers concernés sont nombreux : soins et aide à la personne, laboratoires, petite enfance, collecte et tri des déchets, assainissement (égouts), nettoyage, élevage, abattoirs, métiers des animaux, agriculture, espaces verts, funéraire.</p>
<p>Une infection suppose une <strong>chaîne de transmission</strong> :</p>
<ol>
<li>un <strong>réservoir</strong> où l'agent vit et se multiplie (personne malade, animal, sang, déchets, eau stagnante, sol) ;</li>
<li>une <strong>transmission</strong> : par contact (mains, objets), par voie aérienne (gouttelettes, poussières), par le sang (piqûre, coupure), par un animal (morsure, griffure) ou un insecte vecteur ;</li>
<li>une <strong>porte d'entrée</strong> dans l'organisme : voies respiratoires, peau lésée, muqueuses (yeux, bouche), voie digestive ;</li>
<li>un <strong>hôte</strong> réceptif (personne non immunisée, fatiguée, fragile).</li>
</ol>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un égoutier peut contracter la leptospirose, maladie transmise par l'urine de rats présente dans les eaux usées, qui pénètre par une petite plaie de la peau ou par les muqueuses. Gants, bottes, protection des plaies, lavage des mains et vaccination dans certains cas coupent la chaîne.</div>`
            },
            {
              titre: "Les défenses de l'organisme",
              contenu: `<p>L'organisme dispose de deux lignes de défense contre les micro-organismes.</p>
<h4>Les défenses non spécifiques (innées)</h4>
<p>Elles agissent contre <strong>tous</strong> les agents, rapidement :</p>
<ul>
<li>les <strong>barrières naturelles</strong> : peau intacte, muqueuses et leur mucus, larmes, salive, acidité de l'estomac, cils des voies respiratoires ;</li>
<li>la <strong>réaction inflammatoire</strong>, qui se manifeste par quatre signes : rougeur, chaleur, gonflement, douleur ;</li>
<li>la <strong>phagocytose</strong> : certains globules blancs (les phagocytes) englobent et digèrent les micro-organismes.</li>
</ul>
<h4>Les défenses spécifiques (acquises)</h4>
<p>Elles visent <strong>un agent précis</strong>. Elles sont plus lentes à se mettre en place lors du premier contact, mais très efficaces. Tout élément reconnu comme étranger par l'organisme est un <strong>antigène</strong> (molécule à la surface d'un microbe, toxine…). Deux types de globules blancs, les <strong>lymphocytes</strong>, interviennent :</p>
<ul>
<li>les <strong>lymphocytes B</strong> produisent des <strong>anticorps</strong>, protéines qui se fixent spécifiquement sur un antigène et le neutralisent, facilitant sa destruction ;</li>
<li>les <strong>lymphocytes T</strong> détruisent les cellules infectées et coordonnent la réponse immunitaire.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège :</strong> ne pas inverser antigène et anticorps. L'<strong>antigène</strong> vient de l'agresseur ; l'<strong>anticorps</strong> est fabriqué par l'organisme pour le neutraliser.</div>`
            },
            {
              titre: "La mémoire immunitaire et la vaccination",
              contenu: `<p>Après un premier contact avec un antigène, l'organisme conserve des <strong>lymphocytes mémoire</strong>. Lors d'un second contact avec le même antigène, la réponse est <strong>plus rapide, plus intense et plus durable</strong> : la personne est souvent protégée avant même d'être malade. C'est la <strong>mémoire immunitaire</strong>.</p>
<p>La <strong>vaccination</strong> utilise ce principe : on introduit dans l'organisme un antigène rendu inoffensif (microbe tué ou atténué, fragment de microbe, toxine inactivée, ou instructions génétiques permettant aux cellules de fabriquer un fragment d'antigène). L'organisme fabrique des anticorps et des cellules mémoire sans subir la maladie. Des <strong>rappels</strong> sont souvent nécessaires pour entretenir la protection.</p>
<p>La vaccination protège la personne vaccinée et, quand une grande partie de la population est vaccinée, elle freine la circulation du microbe et protège aussi les personnes fragiles (immunité collective).</p>
<p>Au travail, certaines vaccinations sont <strong>obligatoires</strong> pour les professionnels exposés, comme la vaccination contre l'hépatite B pour certains personnels de santé ; d'autres sont <strong>recommandées</strong> selon les métiers (par exemple contre la leptospirose pour certains égoutiers, contre la rage pour certains métiers au contact d'animaux, contre la grippe pour les soignants). Le médecin du travail conseille et vérifie les vaccinations.</p>`
            },
            {
              titre: "Prévenir le risque biologique",
              contenu: `<table>
<thead><tr><th>Niveau</th><th>Mesures</th></tr></thead>
<tbody>
<tr><td>Agir sur le réservoir</td><td>Nettoyage et désinfection des locaux et du matériel, élimination des déchets d'activités de soins à risques infectieux (DASRI) dans des filières spécifiques, lutte contre les rongeurs et les insectes</td></tr>
<tr><td>Agir sur la transmission (protection collective)</td><td>Ventilation, matériel à usage unique, collecteurs pour objets piquants et tranchants, matériels sécurisés (aiguilles rétractables), organisation des circuits propre et sale</td></tr>
<tr><td>Protéger les portes d'entrée (protection individuelle)</td><td>Gants, masques, lunettes, surblouses, protection des plaies</td></tr>
<tr><td>Renforcer l'hôte</td><td>Vaccination, suivi médical</td></tr>
<tr><td>Former et informer</td><td>Hygiène des mains (lavage ou friction hydroalcoolique), précautions standard, conduite à tenir en cas d'accident d'exposition au sang</td></tr>
</tbody>
</table>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour analyser un risque biologique, reconstituer la chaîne de transmission (réservoir, transmission, porte d'entrée, hôte) puis proposer au moins une mesure pour chaque maillon : chaque maillon coupé interrompt la chaîne.</div>`
            }
          ],
          points_cles: [
            "Tout salarié bénéficie d'une visite d'information et de prévention dans les 3 mois suivant sa prise de poste.",
            "Les postes à risques particuliers relèvent d'un suivi individuel renforcé avec examen médical d'aptitude avant l'affectation.",
            "Une visite de reprise est obligatoire après certains arrêts (maternité, maladie professionnelle, accident du travail d'au moins 30 jours…).",
            "Le risque biologique suppose une chaîne : réservoir, transmission, porte d'entrée, hôte.",
            "Les défenses non spécifiques comprennent les barrières naturelles, l'inflammation et la phagocytose.",
            "Les lymphocytes B produisent des anticorps dirigés contre un antigène ; les lymphocytes T détruisent les cellules infectées.",
            "La vaccination crée une mémoire immunitaire sans provoquer la maladie."
          ],
          lexique: [
            { terme: "Visite d'information et de prévention", def: "Visite réalisée par un professionnel du service de santé au travail après l'embauche, pour informer sur les risques et faire le point sur la santé." },
            { terme: "Agent biologique", def: "Micro-organisme (bactérie, virus, champignon, parasite) susceptible de provoquer une infection, une allergie ou une intoxication." },
            { terme: "Réservoir", def: "Lieu ou être vivant où un agent biologique vit et se multiplie." },
            { terme: "Antigène", def: "Élément reconnu comme étranger par l'organisme et qui déclenche une réponse immunitaire." },
            { terme: "Anticorps", def: "Protéine produite par les lymphocytes B, qui se fixe spécifiquement sur un antigène pour le neutraliser." },
            { terme: "Mémoire immunitaire", def: "Capacité de l'organisme à réagir plus vite et plus fort lors d'un nouveau contact avec un antigène déjà rencontré." },
            { terme: "Phagocytose", def: "Mécanisme par lequel certains globules blancs englobent et détruisent les micro-organismes." }
          ]
        },
        {
          id: "accidents-travail-maladies-professionnelles",
          titre: "C8 — Accidents du travail et maladies professionnelles : déclaration, réparation et analyse",
          duree: 18,
          objectifs: [
            "Définir et distinguer accident du travail, accident de trajet et maladie professionnelle.",
            "Connaître les démarches et les délais de déclaration.",
            "Décrire les prestations en nature et en espèces versées à la victime.",
            "Distinguer responsabilité civile et pénale et définir la faute inexcusable.",
            "Analyser un accident par la méthode de l'arbre des causes (approche par l'accident)."
          ],
          sections: [
            {
              titre: "Trois situations reconnues",
              contenu: `<table>
<thead><tr><th></th><th>Accident du travail (AT)</th><th>Accident de trajet</th><th>Maladie professionnelle (MP)</th></tr></thead>
<tbody>
<tr><td>Définition</td><td>Accident survenu, quelle qu'en soit la cause, <strong>par le fait ou à l'occasion du travail</strong>, sur le lieu et pendant le temps de travail (ou en mission)</td><td>Accident survenu pendant le trajet <strong>aller-retour</strong> entre la résidence et le lieu de travail, ou entre le lieu de travail et le lieu où le salarié prend habituellement ses repas</td><td>Maladie résultant de l'exposition plus ou moins prolongée à un risque au cours de l'activité professionnelle</td></tr>
<tr><td>Caractéristiques</td><td>Fait soudain, date certaine, lésion</td><td>Trajet le plus direct ; détours admis pour les nécessités de la vie courante (déposer un enfant chez la nourrice) ou pour le covoiturage régulier</td><td>Apparition progressive ; le plus souvent inscrite dans un <strong>tableau de maladies professionnelles</strong></td></tr>
<tr><td>Exemples</td><td>Une serveuse se brûle avec un plat ; un livreur se blesse en déchargeant</td><td>Un apprenti chute à scooter en se rendant à l'entreprise</td><td>Surdité d'un chaudronnier, tendinite de l'épaule d'une caissière, asthme d'un boulanger</td></tr>
</tbody>
</table>
<p>Il existe plus d'une centaine de <strong>tableaux de maladies professionnelles</strong> pour le régime général. Chaque tableau précise la maladie, le <strong>délai de prise en charge</strong> (temps maximal entre la fin de l'exposition et la constatation de la maladie), et la liste des travaux ou la durée d'exposition. Si toutes les conditions sont remplies, la maladie est <strong>présumée</strong> d'origine professionnelle : la victime n'a pas à prouver le lien. Sinon, un comité régional de reconnaissance des maladies professionnelles peut être saisi.</p>`
            },
            {
              titre: "Les démarches de déclaration",
              contenu: `<h4>Accident du travail ou de trajet</h4>
<ol>
<li>La <strong>victime</strong> informe (ou fait informer) son employeur <strong>dans la journée</strong> où l'accident s'est produit ou <strong>au plus tard dans les 24 heures</strong>, en précisant les circonstances et les témoins.</li>
<li>Elle consulte un médecin, qui établit un <strong>certificat médical initial</strong> décrivant les lésions et, si besoin, un arrêt de travail.</li>
<li>L'<strong>employeur</strong> déclare l'accident à la caisse primaire d'assurance maladie (CPAM) <strong>dans les 48 heures</strong> (dimanches et jours fériés non compris), même s'il a des doutes ; il peut alors émettre des réserves motivées. Il remet à la victime une <strong>feuille d'accident</strong> qui lui évite d'avancer les frais.</li>
<li>La CPAM instruit le dossier et se prononce sur le caractère professionnel de l'accident dans les délais fixés par la réglementation (plus longs en cas d'enquête).</li>
</ol>
<p>Si l'employeur ne déclare pas l'accident, la victime peut le faire elle-même auprès de la CPAM, dans un délai de deux ans.</p>
<h4>Maladie professionnelle</h4>
<p>C'est la <strong>victime</strong> qui déclare la maladie à la CPAM, avec un certificat médical qui établit le lien possible avec le travail, en principe <strong>dans les 15 jours</strong> suivant l'arrêt de travail (la déclaration reste possible dans un délai de deux ans à compter du moment où la victime a été informée de ce lien par un certificat médical).</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> pour un accident, c'est l'<strong>employeur</strong> qui déclare à la CPAM ; pour une maladie professionnelle, c'est la <strong>victime</strong>. Ne pas confondre non plus 24 heures (délai pour prévenir l'employeur) et 48 heures (délai pour que l'employeur déclare).</div>`
            },
            {
              titre: "La réparation : prestations versées à la victime",
              contenu: `<table>
<thead><tr><th>Type de prestation</th><th>Contenu</th></tr></thead>
<tbody>
<tr><td><strong>Prestations en nature</strong></td><td>Prise en charge à 100 % (dans la limite des tarifs de la Sécurité sociale) des soins : consultations, médicaments, hospitalisation, rééducation, appareillage ; pas d'avance de frais grâce à la feuille d'accident</td></tr>
<tr><td><strong>Indemnités journalières</strong> (prestations en espèces)</td><td>Versées pendant l'arrêt, sans jour de carence, dès le lendemain de l'accident (le jour de l'accident est payé par l'employeur) : 60 % du salaire journalier de référence pendant les 28 premiers jours, puis 80 % à partir du 29<sup>e</sup> jour, dans la limite d'un plafond</td></tr>
<tr><td><strong>Incapacité permanente</strong></td><td>Après consolidation, un taux d'incapacité est fixé : en dessous de 10 %, la victime reçoit une <strong>indemnité en capital</strong> (versée une fois) ; à partir de 10 %, une <strong>rente</strong> versée à vie</td></tr>
<tr><td><strong>Décès</strong></td><td>Frais funéraires et rente versée aux ayants droit (conjoint, enfants)</td></tr>
</tbody>
</table>
<p>Ces prestations sont plus favorables que celles d'une maladie ordinaire. En contrepartie, la réparation est <strong>forfaitaire</strong> : elle ne couvre pas l'ensemble des préjudices. Pendant l'arrêt, le contrat de travail est suspendu et le salarié est protégé contre le licenciement, sauf exceptions. Il peut aussi bénéficier d'une réadaptation, d'une formation ou d'un reclassement.</p>`
            },
            {
              titre: "Les responsabilités",
              contenu: `<ul>
<li>La <strong>responsabilité civile</strong> a pour objet de <strong>réparer</strong> un dommage (indemnisation).</li>
<li>La <strong>responsabilité pénale</strong> a pour objet de <strong>punir</strong> une infraction (amende, prison). Après un accident grave, l'employeur, mais aussi un responsable ou un salarié, peut être poursuivi pour blessures involontaires, homicide involontaire ou mise en danger de la vie d'autrui.</li>
</ul>
<p>La <strong>faute inexcusable de l'employeur</strong> est reconnue lorsque l'employeur <strong>avait ou aurait dû avoir conscience du danger</strong> auquel était exposé le salarié et <strong>n'a pas pris les mesures nécessaires</strong> pour l'en préserver. Elle permet à la victime d'obtenir une majoration de sa rente et l'indemnisation d'autres préjudices (souffrances, préjudice esthétique, perte de possibilités de promotion). Elle est présumée, par exemple, lorsqu'un salarié en contrat court ou intérimaire affecté à un poste à risques n'a pas reçu la formation renforcée à la sécurité.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un intérimaire de 19 ans, affecté sans formation sur une presse dont le dispositif de protection avait été neutralisé, se fait écraser la main. La faute inexcusable de l'employeur pourra être reconnue et sa responsabilité pénale engagée.</div>`
            },
            {
              titre: "L'approche par l'accident : l'arbre des causes",
              contenu: `<p>L'<strong>approche par l'accident</strong> (ou analyse a posteriori) analyse un accident <strong>après</strong> qu'il s'est produit, pour en comprendre toutes les causes et éviter qu'il se reproduise. La méthode de référence est l'<strong>arbre des causes</strong>, qui repose sur l'idée qu'un accident résulte presque toujours de <strong>plusieurs causes</strong> combinées, et non de la seule « faute » ou « maladresse » d'une personne.</p>
<h4>1. Recueillir les faits</h4>
<p>Le plus tôt possible, sur les lieux, avec la victime, les témoins et l'encadrement. On recherche des <strong>faits</strong> concrets et vérifiables, pas des opinions ni des jugements (« Le sol était mouillé » et non « Il n'a pas fait attention »). On les classe selon l'Individu, la Tâche, le Matériel et le Milieu, et on repère surtout les <strong>variations</strong> (ce qui était inhabituel ce jour-là).</p>
<h4>2. Construire l'arbre</h4>
<p>On part du <strong>fait ultime</strong> (la lésion) et on remonte en posant pour chaque fait les questions : « Qu'a-t-il fallu pour que ce fait se produise ? », « Est-ce nécessaire ? », « Est-ce suffisant ? ». On obtient trois types de liaisons :</p>
<table>
<thead><tr><th>Liaison</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>Enchaînement</td><td>Un seul fait suffit à provoquer le suivant</td></tr>
<tr><td>Conjonction</td><td>Plusieurs faits sont nécessaires ensemble pour produire un fait</td></tr>
<tr><td>Disjonction</td><td>Un même fait est à l'origine de plusieurs faits différents</td></tr>
</tbody>
</table>
<h4>3. Proposer des mesures</h4>
<p>Pour chaque fait de l'arbre, on cherche une mesure qui l'aurait supprimé, puis on choisit les mesures les plus efficaces et les plus durables, en appliquant la hiérarchie des mesures de prévention.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> une préparatrice de commandes se tord la cheville en descendant d'un escabeau. Faits recueillis : le chariot habituel était en panne (variation), elle utilisait un escabeau de dépannage instable, le colis était lourd et cachait la vue des marches, la commande était urgente. La lésion résulte de la conjonction de ces faits. Mesures : réparer ou doubler le chariot, fournir une plateforme individuelle roulante avec garde-corps, revoir l'organisation des urgences.</div>`
            }
          ],
          points_cles: [
            "L'accident du travail survient par le fait ou à l'occasion du travail ; l'accident de trajet survient entre domicile et travail ; la maladie professionnelle résulte d'une exposition prolongée.",
            "La victime prévient l'employeur dans les 24 heures ; l'employeur déclare l'accident à la CPAM dans les 48 heures.",
            "La maladie professionnelle est déclarée par la victime ; elle est présumée professionnelle si elle répond aux conditions d'un tableau.",
            "Les soins sont pris en charge à 100 % sans avance de frais ; les indemnités journalières sont de 60 % puis 80 % du salaire journalier de référence.",
            "Un taux d'incapacité permanente d'au moins 10 % ouvre droit à une rente.",
            "La faute inexcusable de l'employeur suppose qu'il avait conscience du danger et n'a pas pris les mesures nécessaires.",
            "L'arbre des causes part de la lésion et remonte aux faits en se demandant ce qui a été nécessaire et suffisant."
          ],
          lexique: [
            { terme: "Accident de trajet", def: "Accident survenu sur le parcours normal entre le domicile et le lieu de travail, ou entre le travail et le lieu habituel de repas." },
            { terme: "Tableau de maladies professionnelles", def: "Liste officielle précisant une maladie, le délai de prise en charge et les travaux qui l'exposent, ouvrant une présomption d'origine professionnelle." },
            { terme: "Prestations en nature", def: "Prise en charge des frais de santé (soins, médicaments, hospitalisation)." },
            { terme: "Indemnités journalières", def: "Sommes versées à la victime pour compenser la perte de salaire pendant l'arrêt de travail." },
            { terme: "Rente", def: "Somme versée régulièrement et à vie à une victime dont l'incapacité permanente est d'au moins 10 %, ou à ses ayants droit." },
            { terme: "Faute inexcusable", def: "Faute de l'employeur qui avait ou aurait dû avoir conscience d'un danger et n'a pas pris les mesures pour en protéger le salarié." },
            { terme: "Arbre des causes", def: "Méthode d'analyse d'un accident qui représente graphiquement l'enchaînement et la combinaison des faits qui l'ont produit." }
          ]
        },
        {
          id: "risques-psychosociaux",
          titre: "C9 — Les risques psychosociaux",
          duree: 15,
          objectifs: [
            "Définir les risques psychosociaux et en identifier les principales formes.",
            "Repérer les facteurs de risques psychosociaux liés au travail.",
            "Distinguer violences internes et violences externes, harcèlement moral, harcèlement sexuel et agissement sexiste.",
            "Décrire les conséquences pour le salarié et pour l'entreprise.",
            "Proposer des mesures de prévention collectives, de formation et d'information."
          ],
          sections: [
            {
              titre: "Définition et formes",
              contenu: `<p>Les <strong>risques psychosociaux (RPS)</strong> sont les risques pour la <strong>santé mentale, physique et sociale</strong> engendrés par les conditions d'emploi et par des facteurs organisationnels et relationnels susceptibles d'interagir avec le fonctionnement mental. Ils menacent l'<strong>intégrité physique et mentale</strong> des salariés.</p>
<p>Ils se manifestent principalement sous trois formes, souvent liées :</p>
<ul>
<li>le <strong>stress au travail</strong>, lorsque le salarié ressent un déséquilibre entre les exigences de son travail et ses ressources pour y faire face ;</li>
<li>les <strong>violences internes</strong>, commises au sein de l'entreprise par des collègues ou la hiérarchie : conflits graves, harcèlement moral ou sexuel, agissements sexistes ;</li>
<li>les <strong>violences externes</strong>, commises par des personnes extérieures : clients, usagers, patients (insultes, menaces, agressions physiques).</li>
</ul>
<p>L'<strong>épuisement professionnel</strong> (ou burn-out) est un état d'épuisement physique, émotionnel et mental qui résulte d'un investissement prolongé dans des situations de travail exigeantes.</p>`
            },
            {
              titre: "Les facteurs de risques psychosociaux",
              contenu: `<p>Les experts regroupent les facteurs de RPS en <strong>six grandes familles</strong> :</p>
<table>
<thead><tr><th>Famille de facteurs</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>Intensité et temps de travail</td><td>Surcharge, cadences élevées, objectifs irréalistes, horaires atypiques, interruptions fréquentes, difficulté à concilier vie professionnelle et vie personnelle</td></tr>
<tr><td>Exigences émotionnelles</td><td>Contact avec la souffrance (soins, aide sociale), devoir cacher ses émotions, relation avec un public difficile, peur de l'agression</td></tr>
<tr><td>Manque d'autonomie</td><td>Impossibilité d'organiser son travail, tâches répétitives et monotones, absence de possibilité d'apprendre</td></tr>
<tr><td>Rapports sociaux dégradés</td><td>Manque de soutien des collègues ou de la hiérarchie, absence de reconnaissance, conflits, management autoritaire</td></tr>
<tr><td>Conflits de valeurs</td><td>Devoir faire un travail contraire à ses valeurs (vendre un produit inutile à une personne âgée), qualité empêchée (ne pas avoir le temps de bien faire)</td></tr>
<tr><td>Insécurité de la situation de travail</td><td>Peur de perdre son emploi, contrats précaires, réorganisations fréquentes, changements non expliqués</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un agent d'accueil d'une agence de transport reçoit chaque jour des usagers mécontents des retards, sans pouvoir apporter de solution. Il subit des insultes (violences externes), des exigences émotionnelles fortes et un manque d'autonomie : plusieurs facteurs se cumulent.</div>`
            },
            {
              titre: "Harcèlement et agissements sexistes",
              contenu: `<table>
<thead><tr><th>Notion</th><th>Définition simplifiée</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td><strong>Harcèlement moral</strong></td><td>Agissements <strong>répétés</strong> qui ont pour objet ou pour effet une dégradation des conditions de travail susceptible de porter atteinte aux droits et à la dignité du salarié, d'altérer sa santé physique ou mentale ou de compromettre son avenir professionnel</td><td>Critiques et humiliations répétées, mise à l'écart, tâches dévalorisantes, consignes contradictoires volontaires</td></tr>
<tr><td><strong>Harcèlement sexuel</strong></td><td>Propos ou comportements à connotation sexuelle ou sexiste <strong>répétés</strong> qui portent atteinte à la dignité ou créent une situation intimidante, hostile ou offensante ; est aussi assimilée au harcèlement sexuel toute pression grave, même non répétée, exercée dans le but d'obtenir un acte de nature sexuelle</td><td>Remarques répétées sur le physique, messages à caractère sexuel, chantage à l'embauche ou à la promotion</td></tr>
<tr><td><strong>Agissement sexiste</strong></td><td>Tout agissement lié au sexe d'une personne, ayant pour objet ou pour effet de porter atteinte à sa dignité ou de créer un environnement intimidant, hostile, dégradant, humiliant ou offensant</td><td>« Blagues » sexistes, remarques sur la place des femmes dans le métier</td></tr>
</tbody>
</table>
<p>Le harcèlement moral et le harcèlement sexuel sont des <strong>délits</strong> punis par le Code pénal. La victime et les témoins sont protégés contre toute sanction ou discrimination en raison de leur témoignage. L'employeur doit prévenir ces agissements, y mettre fin et les sanctionner. Un <strong>référent</strong> en matière de harcèlement sexuel et d'agissements sexistes est désigné par le CSE et, dans les entreprises d'au moins 250 salariés, par l'employeur.</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> un conflit ponctuel ou une critique justifiée du travail ne constitue pas un harcèlement moral. Celui-ci suppose des agissements <strong>répétés</strong> et une dégradation des conditions de travail.</div>`
            },
            {
              titre: "Les conséquences",
              contenu: `<table>
<thead><tr><th>Pour le salarié</th><th>Pour l'entreprise</th></tr></thead>
<tbody>
<tr><td>Troubles du sommeil, fatigue, irritabilité, anxiété, dépression, épuisement professionnel, idées suicidaires</td><td>Absentéisme, arrêts maladie, turn-over (départs fréquents)</td></tr>
<tr><td>Troubles musculosquelettiques, maladies cardiovasculaires, troubles digestifs</td><td>Baisse de la qualité et de la productivité, erreurs, accidents</td></tr>
<tr><td>Consommations addictives (tabac, alcool, médicaments)</td><td>Dégradation du <strong>climat social</strong>, conflits, image de l'entreprise ternie, difficultés de recrutement</td></tr>
<tr><td>Isolement, difficultés familiales</td><td><strong>Coûts</strong> directs et indirects, responsabilité juridique de l'employeur</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Prévenir les risques psychosociaux",
              contenu: `<p>Les RPS doivent être évalués et inscrits dans le <strong>DUERP</strong>, comme les autres risques. La prévention s'organise à trois niveaux :</p>
<ul>
<li><strong>prévention primaire</strong> (la plus efficace, car elle agit sur les causes) : organisation du travail (charge réaliste, effectifs suffisants, horaires prévisibles), marges d'autonomie, soutien de l'encadrement, reconnaissance, communication sur les changements, aménagement des espaces d'accueil pour limiter les tensions avec le public, procédures en cas d'agression ;</li>
<li><strong>prévention secondaire</strong> : <strong>formation</strong> des salariés et des managers (gestion des situations de tension, repérage des signaux d'alerte), <strong>information</strong> sur les ressources disponibles ;</li>
<li><strong>prévention tertiaire</strong> : prise en charge des salariés en souffrance (médecin du travail, psychologue, cellule d'écoute), accompagnement après une agression, aide au retour au travail.</li>
</ul>
<p>Les acteurs mobilisés sont l'employeur, l'encadrement, le CSE, le service de prévention et de santé au travail, et au besoin l'inspection du travail.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les RPS ne sont pas un problème individuel de « fragilité » : ils naissent principalement de l'<strong>organisation du travail</strong>. La prévention collective est donc prioritaire sur les mesures individuelles.</div>`
            }
          ],
          points_cles: [
            "Les RPS regroupent le stress au travail, les violences internes et les violences externes.",
            "Six familles de facteurs : intensité et temps de travail, exigences émotionnelles, manque d'autonomie, rapports sociaux dégradés, conflits de valeurs, insécurité de la situation de travail.",
            "Le harcèlement moral suppose des agissements répétés dégradant les conditions de travail.",
            "Le harcèlement moral et le harcèlement sexuel sont des délits ; les victimes et les témoins sont protégés.",
            "Les RPS ont des conséquences sur la santé du salarié et sur le fonctionnement et le climat social de l'entreprise.",
            "Les RPS doivent figurer dans le DUERP.",
            "La prévention primaire, qui agit sur l'organisation du travail, est la plus efficace."
          ],
          lexique: [
            { terme: "Risques psychosociaux", def: "Risques pour la santé mentale, physique et sociale liés aux conditions d'emploi et à l'organisation du travail." },
            { terme: "Violence externe", def: "Insulte, menace ou agression commise par une personne extérieure à l'entreprise (client, usager)." },
            { terme: "Harcèlement moral", def: "Agissements répétés entraînant une dégradation des conditions de travail qui peut porter atteinte aux droits, à la dignité ou à la santé du salarié." },
            { terme: "Agissement sexiste", def: "Comportement lié au sexe d'une personne qui porte atteinte à sa dignité ou crée un environnement hostile." },
            { terme: "Épuisement professionnel", def: "État d'épuisement physique, émotionnel et mental lié à un investissement prolongé dans un travail exigeant (burn-out)." },
            { terme: "Climat social", def: "Qualité des relations et de l'ambiance de travail dans une entreprise." }
          ]
        },
        {
          id: "risques-activite-physique-tms",
          titre: "C10 — Les risques liés à l'activité physique et les TMS",
          duree: 16,
          objectifs: [
            "Distinguer activité physique statique et dynamique au travail.",
            "Décrire la colonne vertébrale et les atteintes du dos.",
            "Définir les troubles musculosquelettiques, leurs localisations et leurs facteurs.",
            "Appliquer les principes de sécurité physique et d'économie d'effort.",
            "Proposer des mesures pour supprimer ou réduire le risque."
          ],
          sections: [
            {
              titre: "L'activité physique au travail",
              contenu: `<p>De nombreux métiers sollicitent fortement le corps : manutention en logistique, port de patients dans les soins, travail en hauteur dans le bâtiment, gestes répétitifs à la caisse ou en agroalimentaire, station debout prolongée en coiffure ou en vente.</p>
<ul>
<li>L'<strong>activité dynamique</strong> correspond à des mouvements : soulever, porter, pousser, tirer, se pencher, répéter un geste. Elle sollicite les muscles en alternant contraction et relâchement.</li>
<li>L'<strong>activité statique</strong> correspond au maintien d'une posture ou d'un effort sans mouvement : bras levés pour peindre un plafond, station debout immobile, tenue d'un outil, position penchée prolongée. Le muscle reste contracté, le sang circule mal, la fatigue arrive vite.</li>
</ul>
<p>Les risques liés à l'activité physique sont la <strong>première cause d'accidents du travail</strong> avec arrêt (la manutention manuelle en représente une très grande part) et à l'origine de la grande majorité des maladies professionnelles reconnues.</p>`
            },
            {
              titre: "La colonne vertébrale et les atteintes du dos",
              contenu: `<p>La <strong>colonne vertébrale</strong> soutient le tronc et la tête, permet les mouvements et protège la moelle épinière. Elle comprend <strong>33 vertèbres</strong> environ réparties en 5 régions : <strong>7 cervicales</strong> (cou), <strong>12 dorsales</strong> ou thoraciques (porteuses des côtes), <strong>5 lombaires</strong> (bas du dos, les plus sollicitées lors du port de charges), le <strong>sacrum</strong> et le <strong>coccyx</strong> (vertèbres soudées). Vue de profil, elle présente des courbures naturelles qui amortissent les chocs.</p>
<p>Entre les vertèbres se trouvent les <strong>disques intervertébraux</strong>, sortes de coussins constitués d'un anneau fibreux et d'un noyau gélatineux. Lorsqu'on se penche dos rond, la pression sur le disque augmente fortement et le noyau est chassé vers l'arrière.</p>
<table>
<thead><tr><th>Atteinte</th><th>Description</th><th>Caractère</th></tr></thead>
<tbody>
<tr><td>Lumbago</td><td>Douleur brutale du bas du dos, blocage, souvent après un effort ou un faux mouvement</td><td><strong>Aigu</strong> (accident du travail)</td></tr>
<tr><td>Hernie discale</td><td>Le noyau du disque sort de l'anneau et peut comprimer une racine nerveuse</td><td>Aigu ou évoluant dans le temps</td></tr>
<tr><td>Sciatique</td><td>Douleur qui descend dans la fesse et la jambe, due à la compression du nerf sciatique</td><td>Souvent conséquence d'une hernie</td></tr>
<tr><td>Lombalgie chronique, usure des disques</td><td>Douleurs persistantes au-delà de quelques mois</td><td><strong>Chronique</strong> (peut être reconnue comme maladie professionnelle pour certaines expositions : manutention lourde, vibrations)</td></tr>
</tbody>
</table>`
            },
            {
              titre: "Les troubles musculosquelettiques (TMS)",
              contenu: `<p>Les <strong>troubles musculosquelettiques</strong> regroupent des affections touchant les muscles, les tendons, les nerfs et les articulations, principalement des membres supérieurs et du dos. Ils représentent de loin la <strong>première cause de maladies professionnelles reconnues</strong> en France (environ 9 sur 10).</p>
<table>
<thead><tr><th>Localisation</th><th>Exemple de TMS</th><th>Métiers exposés</th></tr></thead>
<tbody>
<tr><td>Épaule</td><td>Tendinite de la coiffe des rotateurs</td><td>Peintres, plaquistes, caissiers, préparateurs de commandes</td></tr>
<tr><td>Coude</td><td>Épicondylite (« tennis elbow »)</td><td>Maçons, bouchers, ouvriers à la chaîne</td></tr>
<tr><td>Poignet, main</td><td>Syndrome du canal carpien (compression d'un nerf : fourmillements, perte de force)</td><td>Coiffeurs, caissières, travail sur écran avec souris, agroalimentaire</td></tr>
<tr><td>Genou</td><td>Hygroma (inflammation)</td><td>Carreleurs, poseurs de sols</td></tr>
<tr><td>Dos, nuque</td><td>Lombalgies, cervicalgies</td><td>Manutentionnaires, aides-soignants, chauffeurs</td></tr>
</tbody>
</table>
<p>Les TMS sont <strong>multifactoriels</strong> :</p>
<ul>
<li><strong>facteurs biomécaniques</strong> : répétitivité des gestes, efforts excessifs, postures extrêmes, travail statique, vibrations, froid ;</li>
<li><strong>facteurs organisationnels</strong> : cadences élevées, manque de pauses, absence de rotation, délais serrés ;</li>
<li><strong>facteurs psychosociaux</strong> : stress, manque d'autonomie et de reconnaissance (le stress augmente les tensions musculaires) ;</li>
<li><strong>facteurs individuels</strong> : âge, état de santé, ancienneté dans le poste.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège :</strong> un TMS n'est pas un accident : il s'installe <strong>progressivement</strong>, avec d'abord une gêne ou une douleur qui disparaît au repos, puis une douleur permanente. Signaler tôt les premiers symptômes au médecin du travail permet d'éviter l'aggravation.</div>`
            },
            {
              titre: "Les principes de sécurité physique et d'économie d'effort",
              contenu: `<p>Quand une manutention manuelle ne peut pas être évitée, on applique les <strong>principes de sécurité physique et d'économie d'effort</strong> enseignés dans les formations à la prévention des risques liés à l'activité physique (PRAP) :</p>
<ol>
<li><strong>Évaluer la charge</strong> avant de la soulever (poids, prise, stabilité) et dégager le chemin.</li>
<li><strong>Rapprocher la charge</strong> au plus près du corps.</li>
<li><strong>Fixer la colonne vertébrale</strong> : garder le dos droit (en gardant ses courbures naturelles) et le bassin basculé, en contractant les abdominaux.</li>
<li><strong>Utiliser la force des jambes</strong> : fléchir les genoux plutôt que le dos.</li>
<li><strong>Assurer une base d'appui</strong> stable : pieds écartés, un pied légèrement en avant.</li>
<li><strong>Assurer une prise solide</strong> de la charge, avec la paume et les doigts, et non du bout des doigts.</li>
<li><strong>Éviter les torsions</strong> : tourner avec les pieds et non avec le tronc ; utiliser le poids du corps pour pousser ou tirer.</li>
</ol>
<p>Le Code du travail limite les charges pouvant être portées de façon habituelle : un homme ne peut porter habituellement des charges de plus de 55 kg que s'il a été reconnu apte par le médecin du travail, et jamais plus de 105 kg ; pour les femmes, la limite est de 25 kg. Pour les jeunes de moins de 18 ans, les charges importantes au regard de leur poids nécessitent un avis médical. Ces limites sont des maximums légaux ; les recommandations de prévention sont bien plus basses.</p>`
            },
            {
              titre: "Supprimer ou réduire le risque",
              contenu: `<table>
<thead><tr><th>Niveau</th><th>Exemples de mesures</th></tr></thead>
<tbody>
<tr><td>Supprimer la manutention</td><td>Convoyeurs, livraisons directement à hauteur de travail, réorganisation des flux</td></tr>
<tr><td>Aides mécaniques (protection collective)</td><td>Transpalettes électriques, diables, tables élévatrices, monte-matériaux, lève-personnes et rails au plafond dans les soins, potences</td></tr>
<tr><td>Aménagement du poste (ergonomie)</td><td>Plan de travail réglable en hauteur, outils légers et adaptés à la main, sièges assis-debout, tapis anti-fatigue, réduction du poids des colis</td></tr>
<tr><td>Organisation</td><td>Pauses, rotation entre postes différents, cadences adaptées, travail à deux pour les charges lourdes</td></tr>
<tr><td>Protection individuelle</td><td>Gants assurant une bonne prise, chaussures de sécurité, genouillères</td></tr>
<tr><td>Formation et information</td><td>Formation PRAP, échauffement avant la prise de poste, information sur les premiers signes de TMS</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> dans un EHPAD, l'installation de rails de transfert au plafond et l'utilisation de draps de glisse ont permis de supprimer la plupart des portés de résidents par les aides-soignants, avec une forte baisse des lombalgies.</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> les bonnes postures ne suffisent pas. La priorité est d'éviter ou de réduire la manutention et d'adapter le poste et l'organisation.</div>`
            }
          ],
          points_cles: [
            "L'activité dynamique met le corps en mouvement ; l'activité statique maintient une posture et fatigue vite les muscles.",
            "La colonne compte 7 vertèbres cervicales, 12 dorsales, 5 lombaires, puis le sacrum et le coccyx ; les disques intervertébraux amortissent les pressions.",
            "Le lumbago est une atteinte aiguë ; la lombalgie chronique et les TMS s'installent progressivement.",
            "Les TMS sont la première cause de maladies professionnelles reconnues (environ 9 sur 10).",
            "Les TMS sont multifactoriels : biomécaniques, organisationnels, psychosociaux, individuels.",
            "Principes d'économie d'effort : charge près du corps, dos droit, force des jambes, base stable, prise solide, pas de torsion.",
            "Priorité à la suppression de la manutention et aux aides mécaniques, avant les gestes et postures."
          ],
          lexique: [
            { terme: "Activité statique", def: "Maintien d'une posture ou d'un effort sans mouvement, qui fatigue rapidement les muscles." },
            { terme: "Disque intervertébral", def: "Coussin fibreux à noyau gélatineux situé entre deux vertèbres, qui amortit les pressions." },
            { terme: "Lumbago", def: "Douleur aiguë et brutale de la région lombaire, souvent après un effort ou un faux mouvement." },
            { terme: "TMS", def: "Troubles musculosquelettiques : affections des muscles, tendons, nerfs et articulations liées notamment aux gestes répétitifs et aux efforts." },
            { terme: "Syndrome du canal carpien", def: "Compression d'un nerf au niveau du poignet provoquant fourmillements et perte de force dans la main." },
            { terme: "Économie d'effort", def: "Ensemble de principes visant à réaliser une manutention en sollicitant le moins possible le dos." },
            { terme: "Ergonomie", def: "Discipline qui vise à adapter le travail, les outils et l'environnement à l'être humain." }
          ]
        },
        {
          id: "analyse-situation-travail",
          titre: "C11 — L'analyse d'une situation de travail : l'approche par le travail",
          duree: 14,
          objectifs: [
            "Distinguer travail prescrit et travail réel.",
            "Identifier les déterminants d'une situation de travail.",
            "Expliquer la démarche ergonomique et l'approche multifactorielle.",
            "Établir des liens de causalité entre déterminants, activité et effets.",
            "Proposer des mesures de prévention adaptées à la situation."
          ],
          sections: [
            {
              titre: "Travail prescrit et travail réel",
              contenu: `<p>L'<strong>approche par le travail</strong> s'intéresse à l'activité réelle de l'opérateur pour comprendre les difficultés qu'il rencontre et leurs effets sur sa santé et sur la production.</p>
<ul>
<li>Le <strong>travail prescrit</strong> (la tâche) est ce qui est demandé par l'entreprise : objectifs, consignes, procédures, modes opératoires, moyens, délais.</li>
<li>Le <strong>travail réel</strong> (l'activité) est ce que fait réellement l'opérateur pour atteindre les objectifs, en tenant compte des imprévus : pannes, manque de matériel, client pressé, collègue absent.</li>
</ul>
<p>Il existe toujours un <strong>écart</strong> entre les deux. Pour combler cet écart, l'opérateur développe des <strong>stratégies</strong> et des savoir-faire, parfois au prix de prises de risques ou d'efforts supplémentaires.</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> la procédure d'une boulangerie prévoit que les sacs de farine de 25 kg soient déplacés avec un diable (travail prescrit). Mais le diable est rangé dans la réserve encombrée et le boulanger, pressé par la fournée, porte les sacs à la main (travail réel). L'écart s'explique par l'organisation, pas par la négligence.</div>`
            },
            {
              titre: "Les déterminants de la situation de travail",
              contenu: `<p>Les <strong>déterminants</strong> sont les éléments qui influencent l'activité de travail. On les classe en deux catégories :</p>
<table>
<thead><tr><th>Déterminants liés à l'entreprise</th><th>Déterminants liés à l'opérateur</th></tr></thead>
<tbody>
<tr><td>Objectifs de production, cadences, délais</td><td>Âge, sexe, caractéristiques physiques</td></tr>
<tr><td>Organisation du travail (horaires, effectifs, répartition des tâches)</td><td>Formation, qualification, expérience</td></tr>
<tr><td>Moyens matériels (outils, machines, aménagement des locaux)</td><td>État de santé, fatigue</td></tr>
<tr><td>Environnement physique (bruit, éclairage, température, espace)</td><td>Motivation, vie personnelle</td></tr>
<tr><td>Relations (hiérarchie, collègues, clients), règles et procédures</td><td>Stratégies personnelles, savoir-faire</td></tr>
</tbody>
</table>
<p>Ces déterminants agissent ensemble sur l'activité, qui produit à son tour des <strong>effets</strong> :</p>
<ul>
<li>sur l'<strong>opérateur</strong> : fatigue, douleurs, accidents, stress, mais aussi satisfaction et développement des compétences ;</li>
<li>sur l'<strong>entreprise</strong> : quantité et qualité de la production, délais, retours clients, absentéisme, coûts.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> déterminants → activité réelle → effets sur l'opérateur et sur l'entreprise. Agir sur les déterminants permet d'améliorer à la fois la santé et la performance.</div>`
            },
            {
              titre: "L'ergonomie et l'approche multifactorielle",
              contenu: `<p>L'<strong>ergonomie</strong> a pour objectif d'<strong>adapter le travail à l'homme</strong> (et non l'inverse) : concevoir des postes, des outils, des locaux et une organisation compatibles avec les capacités et les limites humaines, pour préserver la santé tout en permettant l'efficacité.</p>
<p>L'approche est <strong>multifactorielle</strong> : un problème de santé au travail a rarement une seule cause. Une douleur à l'épaule chez une caissière peut résulter à la fois de la hauteur du tapis (matériel), du poids des packs d'eau (tâche), de la cadence aux heures de pointe (organisation), du froid près des portes (milieu) et du stress face à la file d'attente (relations). Il faut donc établir des <strong>liens de causalité</strong> entre les déterminants et les effets observés.</p>
<p>L'ergonome procède par observation de l'activité réelle, entretiens avec les opérateurs (qui sont les mieux placés pour expliquer leurs difficultés), mesures (bruit, éclairage, dimensions) et analyse de documents (absentéisme, accidents).</p>`
            },
            {
              titre: "La démarche d'analyse d'une situation de travail",
              contenu: `<ol>
<li><strong>Décrire la situation</strong> : l'opérateur, la tâche prescrite, l'activité réelle, le matériel, le milieu, l'organisation.</li>
<li><strong>Repérer l'écart</strong> entre le travail prescrit et le travail réel.</li>
<li><strong>Identifier les déterminants</strong> liés à l'entreprise et à l'opérateur.</li>
<li><strong>Identifier les effets</strong> sur l'opérateur (santé, sécurité) et sur l'entreprise (production, qualité).</li>
<li><strong>Établir les liens</strong> entre déterminants et effets (causalité).</li>
<li><strong>Proposer des mesures</strong> de prévention agissant sur les déterminants, en respectant la hiérarchie des mesures et les principes généraux de prévention.</li>
</ol>
<div class="encart" data-type="methode"><strong>Méthode :</strong> présenter l'analyse sous forme de schéma : déterminants à gauche (entreprise / opérateur), activité réelle au centre, effets à droite (opérateur / entreprise), puis relier par des flèches. Les mesures de prévention se placent sur les déterminants.</div>`
            },
            {
              titre: "Un exemple d'analyse",
              contenu: `<p><strong>Situation</strong> : Lucas, 17 ans, apprenti en commerce, met en rayon des bouteilles d'eau dans un supermarché le matin avant l'ouverture.</p>
<table>
<thead><tr><th>Élément</th><th>Analyse</th></tr></thead>
<tbody>
<tr><td>Travail prescrit</td><td>Mettre en rayon toutes les palettes avant 9 h, utiliser le transpalette, respecter le plan de rayon</td></tr>
<tr><td>Travail réel</td><td>Le transpalette électrique est souvent pris par l'équipe des produits frais ; Lucas tire une palette manuelle, porte les packs à bout de bras jusqu'aux étagères basses, se penche dos rond, accélère en fin de créneau</td></tr>
<tr><td>Déterminants entreprise</td><td>Un seul transpalette électrique, horaire serré, packs de 9 kg, étagères basses, effectif réduit le matin</td></tr>
<tr><td>Déterminants opérateur</td><td>Jeune, peu expérimenté, pas encore formé aux gestes et postures, veut montrer qu'il est efficace</td></tr>
<tr><td>Effets opérateur</td><td>Douleurs au bas du dos et aux épaules, fatigue, risque de lumbago</td></tr>
<tr><td>Effets entreprise</td><td>Retards de mise en rayon, risque d'arrêt de travail, casse de bouteilles</td></tr>
<tr><td>Mesures proposées</td><td>Deuxième transpalette électrique, palettes à hauteur variable, réorganisation des horaires de livraison, travail en binôme, formation PRAP, vérification par le tuteur que les travaux confiés à un mineur respectent la réglementation</td></tr>
</tbody>
</table>`
            }
          ],
          points_cles: [
            "Le travail prescrit est ce qui est demandé ; le travail réel est ce que fait réellement l'opérateur.",
            "L'écart entre prescrit et réel s'explique par des contraintes et des imprévus, pas seulement par le comportement de l'opérateur.",
            "Les déterminants sont liés à l'entreprise (organisation, matériel, environnement) et à l'opérateur (âge, formation, santé).",
            "L'activité produit des effets sur l'opérateur (santé) et sur l'entreprise (production, qualité).",
            "L'ergonomie vise à adapter le travail à l'homme.",
            "L'approche est multifactorielle : il faut établir des liens de causalité entre déterminants et effets.",
            "Les mesures de prévention agissent sur les déterminants."
          ],
          lexique: [
            { terme: "Travail prescrit", def: "Ce que l'entreprise demande de faire : objectifs, consignes, procédures, moyens." },
            { terme: "Travail réel", def: "Ce que l'opérateur fait effectivement pour atteindre les objectifs, compte tenu des aléas." },
            { terme: "Déterminant", def: "Élément lié à l'entreprise ou à l'opérateur qui influence l'activité de travail." },
            { terme: "Ergonomie", def: "Discipline qui adapte le travail, les outils et l'environnement aux caractéristiques de l'être humain." },
            { terme: "Approche multifactorielle", def: "Analyse qui recherche l'ensemble des causes combinées d'un problème plutôt qu'une cause unique." },
            { terme: "Causalité", def: "Lien de cause à effet entre un déterminant et une conséquence observée." }
          ]
        },
        {
          id: "egalite-traitement-travail",
          titre: "C12 — L'égalité de traitement au travail et la lutte contre les discriminations",
          duree: 15,
          objectifs: [
            "Définir la discrimination et citer les principaux critères interdits par la loi.",
            "Distinguer discrimination directe et indirecte.",
            "Expliquer le principe d'égalité professionnelle entre les femmes et les hommes et les obligations légales des entreprises.",
            "Connaître les règles relatives à l'emploi des personnes en situation de handicap.",
            "Identifier les recours et le rôle du CSE, du Défenseur des droits et de l'inspection du travail."
          ],
          sections: [
            {
              titre: "Qu'est-ce qu'une discrimination ?",
              contenu: `<p>Une <strong>discrimination</strong> est une <strong>inégalité de traitement</strong> fondée sur un <strong>critère interdit par la loi</strong>, dans un domaine visé par la loi (emploi, logement, accès à un bien ou à un service, éducation). Au travail, elle peut intervenir à toutes les étapes : offre d'emploi, recrutement, rémunération, formation, promotion, affectation, sanction, licenciement.</p>
<p>La loi française retient <strong>plus de 25 critères</strong> de discrimination, parmi lesquels :</p>
<ul>
<li>l'<strong>origine</strong>, l'appartenance vraie ou supposée à une ethnie, une nation ou une prétendue race, le nom de famille, le lieu de résidence ;</li>
<li>le <strong>sexe</strong>, l'orientation sexuelle, l'identité de genre, la grossesse, la situation de famille ;</li>
<li>l'<strong>âge</strong>, l'apparence physique, l'état de santé, le <strong>handicap</strong>, la perte d'autonomie ;</li>
<li>les <strong>convictions religieuses</strong>, les opinions politiques, les activités syndicales ;</li>
<li>la particulière vulnérabilité résultant de la situation économique, la capacité à s'exprimer dans une autre langue que le français, la qualité de lanceur d'alerte.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> une discrimination suppose deux éléments : un <strong>traitement défavorable</strong> et un <strong>critère interdit</strong>. Une différence de traitement fondée sur un critère objectif (diplôme exigé, expérience) n'est pas une discrimination.</div>`
            },
            {
              titre: "Discrimination directe et indirecte",
              contenu: `<table>
<thead><tr><th>Forme</th><th>Définition</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Discrimination <strong>directe</strong></td><td>Une personne est traitée moins favorablement qu'une autre, dans une situation comparable, en raison d'un critère interdit</td><td>Un restaurant refuse d'embaucher un serveur en raison de son origine ; une entreprise écarte une candidate parce qu'elle est enceinte</td></tr>
<tr><td>Discrimination <strong>indirecte</strong></td><td>Une règle ou une pratique apparemment neutre désavantage particulièrement certaines personnes, sans justification objective</td><td>Exiger une taille minimale sans lien avec le poste, ce qui écarte davantage de femmes ; réserver une prime aux salariés à temps plein, majoritairement des hommes</td></tr>
</tbody>
</table>
<p>Constituent aussi une discrimination le <strong>harcèlement</strong> lié à un critère interdit et le fait d'<strong>ordonner</strong> à quelqu'un de discriminer.</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> une offre d'emploi ne peut mentionner ni le sexe, ni l'âge, ni la situation de famille du candidat recherché (« jeune vendeuse dynamique » est illégal). Lors d'un entretien, les questions doivent porter uniquement sur les compétences et l'aptitude à occuper le poste.</div>`
            },
            {
              titre: "L'égalité professionnelle entre les femmes et les hommes",
              contenu: `<p>Le principe d'<strong>égalité professionnelle</strong> impose l'égalité des droits et des chances entre les femmes et les hommes au travail : accès à l'emploi, formation, promotion, conditions de travail et rémunération. L'employeur doit assurer, pour un même travail ou un <strong>travail de valeur égale</strong>, l'<strong>égalité de rémunération</strong>.</p>
<p>Les inégalités persistent pourtant : en France, le salaire moyen des femmes reste inférieur à celui des hommes, même à temps de travail identique, et une partie de l'écart subsiste à poste comparable. Les femmes occupent plus souvent des emplois à temps partiel, sont moins présentes dans les postes de direction, et certains métiers restent très peu mixtes (BTP, aide à la personne).</p>
<h4>Obligations légales des entreprises</h4>
<ul>
<li>Les entreprises d'au moins <strong>50 salariés</strong> doivent calculer et publier chaque année un <strong>index de l'égalité professionnelle</strong>, noté sur 100 points (écarts de rémunération, d'augmentations, de promotions, augmentations au retour de congé maternité, femmes parmi les plus hautes rémunérations). En dessous d'un certain score, elles doivent prendre des mesures de correction, sous peine de pénalité financière. Ces obligations évoluent avec la transposition de la directive européenne sur la transparence des rémunérations.</li>
<li>Négociation sur l'égalité professionnelle et la qualité de vie au travail dans les entreprises où existent des délégués syndicaux.</li>
<li>Affichage des textes relatifs à l'égalité de rémunération et à la lutte contre le harcèlement dans les locaux de travail.</li>
</ul>`
            },
            {
              titre: "Handicap et égalité des chances",
              contenu: `<p>Les personnes en situation de handicap ont le droit d'accéder à l'emploi dans les mêmes conditions que les autres. Plusieurs dispositifs existent :</p>
<ul>
<li>l'<strong>obligation d'emploi des travailleurs handicapés</strong> : les entreprises d'au moins 20 salariés doivent employer des travailleurs handicapés à hauteur de <strong>6 %</strong> de leur effectif, ou verser une contribution financière ;</li>
<li>la <strong>reconnaissance de la qualité de travailleur handicapé (RQTH)</strong>, demandée auprès de la maison départementale des personnes handicapées (MDPH), qui ouvre l'accès à des aides ;</li>
<li>l'obligation pour l'employeur de prendre des <strong>mesures appropriées</strong> (aménagement du poste, des horaires, des outils) pour permettre à une personne handicapée d'accéder à un emploi ou de le conserver ; le refus injustifié de ces aménagements peut constituer une discrimination ;</li>
<li>des organismes d'aide (Agefiph pour le secteur privé, Cap emploi) accompagnent salariés et employeurs.</li>
</ul>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> un mécanicien automobile atteint d'une maladie du dos obtient une RQTH. Avec l'aide du médecin du travail et d'un financement de l'Agefiph, son employeur installe un pont élévateur supplémentaire et un siège mobile de garage : il peut conserver son emploi.</div>`
            },
            {
              titre: "Les recours et les acteurs",
              contenu: `<p>La discrimination est un <strong>délit</strong> : le Code pénal la punit de peines pouvant aller jusqu'à <strong>3 ans d'emprisonnement et 45 000 € d'amende</strong>. Une décision discriminatoire (licenciement, sanction) est <strong>nulle</strong>.</p>
<p>Devant le juge civil (conseil de prud'hommes), la <strong>charge de la preuve est aménagée</strong> : la personne qui s'estime discriminée présente des éléments de fait laissant supposer une discrimination, et c'est à l'employeur de prouver que sa décision est justifiée par des éléments objectifs.</p>
<table>
<thead><tr><th>Acteur</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td><strong>CSE</strong></td><td>Dispose d'un droit d'alerte en cas d'atteinte aux droits des personnes ou aux libertés individuelles (notamment discrimination), qui oblige l'employeur à mener une enquête ; il est consulté sur la politique sociale et l'égalité professionnelle</td></tr>
<tr><td><strong>Défenseur des droits</strong></td><td>Autorité administrative indépendante, inscrite dans la Constitution, qui peut être saisie gratuitement par toute personne s'estimant discriminée ; il enquête, propose une médiation, peut présenter des observations devant les tribunaux ; une plateforme d'écoute (téléphone 39 28 et site antidiscriminations) oriente les victimes et les témoins</td></tr>
<tr><td><strong>Inspection du travail</strong></td><td>Contrôle le respect des règles d'égalité et de non-discrimination dans les entreprises, peut dresser des procès-verbaux transmis au procureur</td></tr>
<tr><td><strong>Syndicats et associations</strong></td><td>Conseillent les victimes, peuvent agir en justice à leurs côtés</td></tr>
<tr><td><strong>Conseil de prud'hommes</strong></td><td>Juge les litiges individuels entre salariés et employeurs (réintégration, dommages et intérêts)</td></tr>
</tbody>
</table>
<div class="encart" data-type="methode"><strong>Méthode :</strong> face à une situation de discrimination, garder des traces (courriels, offres d'emploi, témoignages, dates), en parler à un représentant du personnel ou au Défenseur des droits, et ne pas rester seul.</div>`
            }
          ],
          points_cles: [
            "Une discrimination est un traitement défavorable fondé sur l'un des plus de 25 critères interdits par la loi.",
            "La discrimination peut être directe ou indirecte (règle apparemment neutre qui désavantage un groupe).",
            "L'employeur doit garantir l'égalité de rémunération pour un même travail ou un travail de valeur égale.",
            "Les entreprises d'au moins 50 salariés publient chaque année un index de l'égalité professionnelle.",
            "Les entreprises d'au moins 20 salariés doivent employer 6 % de travailleurs handicapés ou verser une contribution.",
            "La discrimination est un délit puni jusqu'à 3 ans de prison et 45 000 € d'amende.",
            "Le CSE, le Défenseur des droits et l'inspection du travail sont des recours essentiels."
          ],
          lexique: [
            { terme: "Discrimination", def: "Inégalité de traitement fondée sur un critère interdit par la loi, dans un domaine visé par la loi." },
            { terme: "Discrimination indirecte", def: "Règle ou pratique apparemment neutre qui désavantage particulièrement un groupe de personnes sans justification objective." },
            { terme: "Égalité professionnelle", def: "Égalité des droits et des chances entre les femmes et les hommes en matière d'emploi, de formation, de promotion et de rémunération." },
            { terme: "Index de l'égalité professionnelle", def: "Note sur 100 que les entreprises d'au moins 50 salariés calculent et publient pour mesurer les écarts entre femmes et hommes." },
            { terme: "RQTH", def: "Reconnaissance de la qualité de travailleur handicapé, délivrée par la MDPH." },
            { terme: "Défenseur des droits", def: "Autorité indépendante chargée notamment de lutter contre les discriminations, qui peut être saisie gratuitement." }
          ]
        },
      ]
    },
    {
      titre: "Partie D — Méthodes de travail en PSE",
      chapitres: [
        {
          id: "methode-analyse-situation",
          titre: "M1 — La démarche d'analyse d'une situation : identifier, analyser, proposer",
          duree: 13,
          objectifs: [
            "Connaître les étapes de la démarche d'analyse utilisée en PSE.",
            "Identifier le problème posé dans une situation de la vie quotidienne ou professionnelle.",
            "Choisir l'approche adaptée : par le risque, par le travail ou par l'accident.",
            "Proposer et justifier des solutions ou des mesures de prévention hiérarchisées."
          ],
          sections: [
            {
              titre: "Une démarche commune à toute la PSE",
              contenu: `<p>En PSE, on part presque toujours d'une <strong>situation</strong> concrète : un salarié qui a mal au dos, une famille qui gaspille de la nourriture, un adolescent qui dort mal, une commune exposée aux inondations. La démarche consiste à comprendre cette situation pour agir de façon <strong>responsable</strong>. Elle se résume en trois verbes :</p>
<table>
<thead><tr><th>Étape</th><th>Question à se poser</th><th>Ce qu'on produit</th></tr></thead>
<tbody>
<tr><td><strong>1. Identifier</strong></td><td>Que se passe-t-il ? Quel est le problème ? Qui est concerné ?</td><td>Une description de la situation et la formulation du problème</td></tr>
<tr><td><strong>2. Analyser</strong></td><td>Pourquoi ? Quelles sont les causes, les facteurs, les conséquences ? Que disent les connaissances et la réglementation ?</td><td>Des liens de cause à effet appuyés sur les connaissances du cours</td></tr>
<tr><td><strong>3. Proposer</strong></td><td>Que faire ? Quelles solutions, à quel niveau (individuel, collectif) ?</td><td>Des mesures justifiées et hiérarchisées</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> une bonne réponse ne se contente pas de proposer des solutions : elle montre <strong>pourquoi</strong> elles répondent au problème identifié.</div>`
            },
            {
              titre: "Identifier le problème",
              contenu: `<p>Pour décrire la situation, on peut utiliser la méthode <strong>QQOQCP</strong> : <strong>Qui</strong> est concerné ? <strong>Quoi</strong> (que se passe-t-il) ? <strong>Où</strong> ? <strong>Quand</strong> ? <strong>Comment</strong> ? <strong>Pourquoi</strong> ? Dans une situation professionnelle, on décrit aussi l'Individu, la Tâche, le Matériel et le Milieu.</p>
<p>Le <strong>problème</strong> se formule en une phrase qui relie la situation à ses conséquences sur la santé, la sécurité ou l'environnement. Par exemple : « Les horaires de travail de nuit de Sami perturbent son sommeil, ce qui diminue sa vigilance au volant et augmente le risque d'accident. »</p>
<div class="encart" data-type="methode"><strong>Méthode :</strong> une formulation de problème contient généralement : une personne ou un groupe, une situation ou un comportement, et une conséquence (atteinte à la santé, risque, impact environnemental). Éviter les formulations vagues comme « il a un problème de santé ».</div>`
            },
            {
              titre: "Analyser : choisir la bonne approche",
              contenu: `<p>Dans le milieu professionnel, trois approches complémentaires sont utilisées :</p>
<table>
<thead><tr><th>Approche</th><th>Quand l'utiliser ?</th><th>Outil principal</th><th>Moment</th></tr></thead>
<tbody>
<tr><td><strong>Approche par le risque</strong></td><td>Pour repérer les risques d'un poste ou d'une activité et les évaluer</td><td>Processus d'apparition du dommage (danger, situation dangereuse, événement, dommage) ; évaluation gravité × probabilité ; DUERP</td><td><strong>Avant</strong> l'accident (a priori)</td></tr>
<tr><td><strong>Approche par le travail</strong></td><td>Pour comprendre les difficultés d'une activité et leurs effets sur la santé et la production</td><td>Travail prescrit et travail réel ; déterminants ; effets ; ergonomie</td><td>Avant ou après, à partir de l'activité réelle</td></tr>
<tr><td><strong>Approche par l'accident</strong></td><td>Pour comprendre toutes les causes d'un accident qui s'est produit</td><td>Recueil des faits, arbre des causes</td><td><strong>Après</strong> l'accident (a posteriori)</td></tr>
</tbody>
</table>
<p>Dans la vie quotidienne (santé, environnement), l'analyse consiste à relier la situation aux <strong>connaissances</strong> : mécanisme biologique (circuit de la récompense, mélatonine, système auditif), facteurs (internes, externes), réglementation, données chiffrées. Une analyse est solide quand chaque affirmation peut être justifiée par une notion du cours ou un document.</p>
<div class="encart" data-type="piege"><strong>Piège :</strong> ne pas s'arrêter à la « faute » de la personne (« il n'a pas fait attention »). En prévention, on recherche les <strong>causes multiples</strong>, notamment liées à l'organisation, au matériel et à l'environnement.</div>`
            },
            {
              titre: "Proposer des solutions et des mesures",
              contenu: `<p>Les propositions doivent être <strong>réalistes</strong>, <strong>adaptées</strong> à la situation et <strong>justifiées</strong>. On les classe :</p>
<ul>
<li>selon leur <strong>niveau</strong> : mesures <strong>individuelles</strong> (ce que la personne peut faire elle-même) et mesures <strong>collectives</strong> (ce que l'entreprise, la commune, l'État organisent) ;</li>
<li>selon leur <strong>efficacité</strong> dans le milieu professionnel, en respectant la hiérarchie : supprimer le danger, réduire le risque à la source, protection collective, protection individuelle, formation et information ;</li>
<li>selon le <strong>moment</strong> : prévention primaire (éviter), secondaire (dépister, repérer tôt), tertiaire (limiter les conséquences).</li>
</ul>
<p>Pour chaque mesure, on indique <strong>ce qu'elle permet</strong> : « Installer un transpalette électrique <em>supprime le port manuel des charges</em> et donc le risque de lombalgie. »</p>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> situation d'une serveuse qui glisse régulièrement sur le sol de la cuisine. Identifier : risque de chute de plain-pied. Analyser (approche par le risque) : danger = sol glissant (graisses, eau) ; situation dangereuse = elle traverse la cuisine les mains chargées ; événement = flaque non nettoyée ; dommage = entorse, fracture. Proposer : revêtement antidérapant et nettoyage immédiat des salissures (collectif), séparation des circuits salle et plonge (organisation), chaussures antidérapantes (individuel), consigne de signalement des salissures (information).</div>`
            },
            {
              titre: "Vérifier sa démarche",
              contenu: `<p>Avant de terminer une analyse, on vérifie :</p>
<ul>
<li>que le <strong>problème</strong> est clairement formulé ;</li>
<li>que l'analyse utilise le <strong>vocabulaire</strong> du programme (danger, situation dangereuse, déterminant, facteur de risque…) ;</li>
<li>que chaque affirmation est <strong>justifiée</strong> (par une connaissance ou un document) ;</li>
<li>que les mesures proposées répondent bien aux causes identifiées et sont <strong>hiérarchisées</strong> ;</li>
<li>que les <strong>acteurs</strong> concernés sont cités quand c'est utile (médecin du travail, CSE, employeur, mairie…).</li>
</ul>
<div class="encart" data-type="methode"><strong>Méthode :</strong> une phrase-modèle pour conclure : « Cette mesure est prioritaire car elle agit sur [la cause] et protège [qui], alors que [autre mesure] ne fait que limiter les conséquences. »</div>`
            }
          ],
          points_cles: [
            "La démarche de PSE suit trois étapes : identifier, analyser, proposer.",
            "Le problème se formule en reliant une situation à une conséquence sur la santé, la sécurité ou l'environnement.",
            "QQOQCP et I.T.Ma.Mi. aident à décrire une situation.",
            "L'approche par le risque est utilisée avant l'accident ; l'approche par l'accident après ; l'approche par le travail part de l'activité réelle.",
            "En prévention, on recherche des causes multiples, pas un coupable.",
            "Les mesures proposées sont justifiées, réalistes et hiérarchisées (individuelles ou collectives, de la suppression du danger à l'information)."
          ],
          lexique: [
            { terme: "Situation", def: "Ensemble de faits concrets de la vie quotidienne ou professionnelle servant de point de départ à l'analyse." },
            { terme: "Problème", def: "Écart entre une situation et ce qui serait souhaitable pour la santé, la sécurité ou l'environnement." },
            { terme: "Analyse a priori", def: "Analyse des risques réalisée avant qu'un accident ne survienne." },
            { terme: "Analyse a posteriori", def: "Analyse réalisée après un accident pour en rechercher les causes." },
            { terme: "QQOQCP", def: "Méthode de questionnement : Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ?" },
            { terme: "Hiérarchisation", def: "Classement de mesures selon leur efficacité ou leur priorité." }
          ]
        },
        {
          id: "methode-documents-argumentation",
          titre: "M2 — Exploiter un document et rédiger une réponse argumentée",
          duree: 13,
          objectifs: [
            "Identifier la nature, la source et l'intérêt d'un document.",
            "Extraire et interpréter des informations d'un texte, d'un tableau, d'un graphique ou d'un document réglementaire.",
            "Comprendre les verbes de consigne utilisés en PSE.",
            "Rédiger une réponse argumentée structurée (affirmation, justification, exemple)."
          ],
          sections: [
            {
              titre: "Présenter un document",
              contenu: `<p>Avant d'exploiter un document, il faut le <strong>situer</strong> :</p>
<ul>
<li><strong>Nature</strong> : texte (article de presse, témoignage), texte réglementaire (article du Code du travail), tableau de données, graphique, schéma, affiche de prévention, étiquette, fiche de données de sécurité, plan d'évacuation, extrait de DUERP.</li>
<li><strong>Source</strong> : qui l'a produit ? (organisme officiel comme l'INRS, Santé publique France, l'Assurance maladie, l'ADEME, un ministère ; un journal ; une entreprise ; un particulier). Une source officielle est en général plus fiable.</li>
<li><strong>Date</strong> : les données et la réglementation évoluent ; un document ancien peut être dépassé.</li>
<li><strong>Thème</strong> : de quoi parle-t-il ? quel est son objectif (informer, alerter, convaincre, vendre) ?</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège :</strong> sur internet et les réseaux sociaux, de nombreuses informations de santé sont fausses ou commerciales. Toujours vérifier la source et croiser avec un site officiel.</div>`
            },
            {
              titre: "Lire des données chiffrées",
              contenu: `<h4>Un tableau</h4>
<p>Lire le titre, les intitulés des lignes et des colonnes, les <strong>unités</strong> (%, dB(A), kcal, mg/L, nombre de cas). Repérer les valeurs extrêmes (la plus grande, la plus petite) et les évolutions.</p>
<h4>Un graphique</h4>
<ul>
<li><strong>Courbe</strong> : montre une évolution dans le temps (le nombre d'accidents du travail entre deux dates, la température au cours d'une journée). On décrit la tendance (hausse, baisse, stabilité) en citant des valeurs précises.</li>
<li><strong>Histogramme ou diagramme en barres</strong> : compare des valeurs (consommation d'énergie par secteur).</li>
<li><strong>Diagramme circulaire</strong> : montre une répartition, la somme faisant 100 % (répartition des maladies professionnelles).</li>
</ul>
<div class="encart" data-type="methode"><strong>Méthode :</strong> pour décrire une donnée, utiliser la formule « D'après le document [n°], [sujet] est passé de [valeur, unité] en [année] à [valeur, unité] en [année], soit une hausse / une baisse de [écart]. » Toujours citer l'unité.</div>
<p>Attention à la différence entre <strong>valeur absolue</strong> (nombre de cas) et <strong>valeur relative</strong> (pourcentage, taux pour 1 000 salariés). Un secteur peut avoir peu d'accidents en nombre mais un taux élevé s'il compte peu de salariés.</p>`
            },
            {
              titre: "Lire un document réglementaire ou technique",
              contenu: `<p>Un <strong>texte réglementaire</strong> (article du Code du travail, du Code de la santé publique, décret) est précis et chaque mot compte. Pour l'exploiter :</p>
<ol>
<li>repérer <strong>qui</strong> est concerné (l'employeur, le salarié, les jeunes de moins de 18 ans…) ;</li>
<li>repérer l'<strong>obligation</strong> ou l'<strong>interdiction</strong> (verbes « doit », « est tenu de », « il est interdit ») ;</li>
<li>repérer les <strong>conditions</strong> et les <strong>seuils</strong> (« dans les entreprises d'au moins 50 salariés », « au-delà de 85 dB(A) ») ;</li>
<li>reformuler avec ses propres mots.</li>
</ol>
<p>Pour un <strong>document technique</strong> (étiquette, fiche de données de sécurité, notice), aller directement à la rubrique utile : pictogrammes et mentions de danger pour identifier le danger, conseils de prudence et protections individuelles pour les mesures, premiers secours pour la conduite à tenir.</p>
<p>Pour une <strong>affiche de prévention</strong>, identifier le public visé, le message principal, le slogan, les images et l'organisme émetteur, puis juger de son efficacité.</p>`
            },
            {
              titre: "Comprendre les verbes de consigne",
              contenu: `<table>
<thead><tr><th>Verbe</th><th>Ce qui est attendu</th></tr></thead>
<tbody>
<tr><td>Citer, nommer, lister</td><td>Donner des éléments sans explication</td></tr>
<tr><td>Identifier, repérer, relever</td><td>Trouver une information dans la situation ou un document</td></tr>
<tr><td>Définir</td><td>Donner le sens précis d'un mot ou d'une notion du cours</td></tr>
<tr><td>Décrire</td><td>Présenter les caractéristiques de façon organisée, sans expliquer les causes</td></tr>
<tr><td>Expliquer</td><td>Dire pourquoi ou comment, en reliant causes et conséquences (« car », « donc »)</td></tr>
<tr><td>Comparer</td><td>Mettre en évidence les ressemblances et les différences</td></tr>
<tr><td>Analyser</td><td>Décomposer une situation et mettre en relation ses éléments</td></tr>
<tr><td>Justifier, argumenter</td><td>Donner des raisons appuyées sur des connaissances ou des documents</td></tr>
<tr><td>Proposer</td><td>Formuler des solutions adaptées et, si demandé, les justifier</td></tr>
<tr><td>Hiérarchiser, classer</td><td>Ordonner selon un critère (efficacité, priorité, gravité)</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège :</strong> « citer » et « expliquer » n'appellent pas la même longueur de réponse. Répondre par une liste quand on demande d'expliquer fait perdre l'essentiel des points.</div>`
            },
            {
              titre: "Rédiger une réponse argumentée",
              contenu: `<p>Une <strong>réponse argumentée</strong> défend une idée en s'appuyant sur des arguments. Chaque argument suit la structure <strong>A.J.E.</strong> :</p>
<ul>
<li><strong>Affirmation</strong> : l'idée que l'on défend ;</li>
<li><strong>Justification</strong> : la raison, appuyée sur une connaissance du cours, un chiffre, un texte de loi ;</li>
<li><strong>Exemple</strong> : une illustration concrète tirée du document ou de la vie quotidienne ou professionnelle.</li>
</ul>
<p>La réponse est organisée : une phrase d'<strong>introduction</strong> qui reprend la question, deux ou trois <strong>arguments</strong> en paragraphes distincts, une <strong>conclusion</strong> qui répond clairement. Les <strong>connecteurs logiques</strong> rendent le raisonnement visible :</p>
<table>
<thead><tr><th>Fonction</th><th>Connecteurs</th></tr></thead>
<tbody>
<tr><td>Ajouter</td><td>de plus, en outre, par ailleurs, ensuite</td></tr>
<tr><td>Expliquer la cause</td><td>car, en effet, parce que, puisque</td></tr>
<tr><td>Exprimer la conséquence</td><td>donc, ainsi, c'est pourquoi, par conséquent</td></tr>
<tr><td>Opposer</td><td>mais, cependant, pourtant, en revanche</td></tr>
<tr><td>Illustrer</td><td>par exemple, comme, notamment</td></tr>
<tr><td>Conclure</td><td>en conclusion, finalement, pour conclure</td></tr>
</tbody>
</table>
<div class="encart" data-type="clinique"><strong>Exemple :</strong> à la question « Faut-il porter des bouchons d'oreille en concert ? », un argument rédigé peut être : « Il est nécessaire de se protéger en concert (affirmation), <em>car</em> le niveau sonore peut approcher les 102 dB(A) autorisés, alors que le risque pour l'oreille commence autour de 80 dB(A) et que les cellules ciliées détruites ne se régénèrent pas (justification). <em>Par exemple</em>, après un concert sans protection, beaucoup de spectateurs ressentent des sifflements, signe d'une fatigue auditive (exemple). »</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> utiliser le vocabulaire précis du cours, faire des phrases complètes, citer les documents (« d'après le document 2… ») et vérifier que la conclusion répond bien à la question posée.</div>`
            }
          ],
          points_cles: [
            "Présenter un document, c'est préciser sa nature, sa source, sa date et son thème.",
            "Toujours citer les unités et distinguer valeur absolue et valeur relative.",
            "Dans un texte réglementaire, repérer qui est concerné, l'obligation ou l'interdiction, les conditions et les seuils.",
            "Chaque verbe de consigne appelle un type de réponse précis : citer n'est pas expliquer.",
            "Un argument suit la structure Affirmation, Justification, Exemple.",
            "Les connecteurs logiques rendent le raisonnement clair (car, donc, cependant, par exemple)."
          ],
          lexique: [
            { terme: "Source", def: "Auteur ou organisme qui a produit un document, permettant d'en juger la fiabilité." },
            { terme: "Valeur relative", def: "Donnée exprimée par rapport à un total (pourcentage, taux), qui permet de comparer des groupes de tailles différentes." },
            { terme: "Verbe de consigne", def: "Verbe d'une question qui indique le type de réponse attendu." },
            { terme: "Argument", def: "Raison qui appuie une affirmation, justifiée par des connaissances ou des documents." },
            { terme: "Connecteur logique", def: "Mot qui relie les idées et indique le lien logique entre elles (cause, conséquence, opposition)." },
            { terme: "Réponse argumentée", def: "Réponse structurée qui défend une position à l'aide d'arguments justifiés et illustrés." }
          ]
        },
      ]
    },
  ]
};
