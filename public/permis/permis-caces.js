/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — CACES — préparation au test théorique (QCM)
   Tronc commun (réglementation, sécurité, électricité) et connaissances
   propres aux recommandations R489 (chariots), R486 (PEMP) et R482 (engins).
   Le contenu vise uniquement le QCM d'évaluation théorique.
   ═══════════════════════════════════════════════════════════════════════════ */
window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["caces"] = window.PERMIS_COURS["caces"] || { chapitres: [], questions: [] };

  P.themes = {
    REGL: "Réglementation et responsabilités",
    SECU: "Risques et prévention",
    R489: "Chariots de manutention automoteurs (R489)",
    R486: "Plates-formes élévatrices mobiles de personnes (R486)",
    R482: "Engins de chantier (R482)",
    ELEC: "Risques électriques"
  };

  /* ───────────── Thème REGL — Réglementation et responsabilités ───────────── */
  P.chapitres.push(
    {
      id: "cadre-caces-autorisation",
      theme: "REGL",
      titre: "Le cadre réglementaire : CACES, formation et autorisation de conduite",
      duree: 20,
      objectifs: [
        "Savoir quels textes encadrent la conduite des engins mobiles en entreprise",
        "Distinguer le CACES, la formation et l'autorisation de conduite",
        "Connaître les trois conditions de délivrance de l'autorisation de conduite",
        "Associer chaque recommandation CNAM à sa famille d'engins",
        "Connaître la durée de validité des principaux CACES"
      ],
      sections: [
        {
          titre: "Ce qu'impose le Code du travail",
          contenu: `<p>La conduite d'un chariot élévateur, d'une nacelle ou d'un engin de chantier n'est pas libre : elle est encadrée par le <strong>Code du travail</strong>. Deux articles sont à connaître pour le test théorique.</p>
<ul>
<li>L'article <strong>R4323-55</strong> impose que la conduite des équipements de travail mobiles automoteurs et des équipements servant au levage soit réservée aux travailleurs qui ont reçu une <strong>formation adéquate</strong>. Cette formation doit être <strong>complétée et réactualisée</strong> chaque fois que nécessaire.</li>
<li>L'article <strong>R4323-56</strong> ajoute que, pour certains équipements présentant des risques particuliers (chariots à conducteur porté, plates-formes élévatrices mobiles de personnes, engins de chantier, grues…), le conducteur doit en plus être titulaire d'une <strong>autorisation de conduite</strong> délivrée par l'employeur.</li>
</ul>
<p>Un <strong>arrêté du 2 décembre 1998</strong> précise la liste de ces équipements et les conditions de délivrance de l'autorisation de conduite. Ces textes s'appliquent à toutes les entreprises, quelle que soit leur taille, et aussi bien aux salariés permanents qu'aux intérimaires.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le Code du travail exige une <strong>formation</strong> pour tous les conducteurs d'engins mobiles, et une <strong>autorisation de conduite</strong> écrite de l'employeur pour les engins les plus dangereux (chariots, nacelles, engins de chantier, grues).</div>`
        },
        {
          titre: "Les recommandations CNAM et le CACES",
          contenu: `<p>Pour aider l'employeur à vérifier que le conducteur sait conduire en sécurité, l'Assurance maladie – Risques professionnels (CNAM) a rédigé des <strong>recommandations</strong>. Elles décrivent un dispositif de formation et d'évaluation appelé <strong>CACES</strong> : <em>Certificat d'Aptitude à la Conduite En Sécurité</em>. Une recommandation n'est pas une loi : c'est un texte de bonnes pratiques, mais il sert de référence en cas d'accident et il est très largement exigé par les entreprises.</p>
<table>
<thead><tr><th>Recommandation</th><th>Équipements concernés</th></tr></thead>
<tbody>
<tr><td>R482</td><td>Engins de chantier (pelles, chargeuses, bouteurs, compacteurs, tombereaux, chariots tout-terrain…)</td></tr>
<tr><td>R483</td><td>Grues mobiles</td></tr>
<tr><td>R484</td><td>Ponts roulants et portiques</td></tr>
<tr><td>R485</td><td>Chariots de manutention automoteurs gerbeurs à conducteur accompagnant</td></tr>
<tr><td>R486</td><td>Plates-formes élévatrices mobiles de personnes (PEMP, « nacelles »)</td></tr>
<tr><td>R487</td><td>Grues à tour</td></tr>
<tr><td>R489</td><td>Chariots de manutention automoteurs à conducteur porté (chariots élévateurs)</td></tr>
<tr><td>R490</td><td>Grues auxiliaires de chargement de véhicules</td></tr>
</tbody>
</table>
<p>Chaque recommandation découpe les engins en <strong>catégories</strong>. Un CACES est délivré pour une ou plusieurs catégories précises : un CACES R489 catégorie 3 ne permet pas, à lui seul, de conduire un chariot à mât rétractable (catégorie 5).</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le chariot gerbeur à conducteur <em>accompagnant</em> (on marche à côté) relève de la R485, pas de la R489. La R489 vise les chariots à conducteur <em>porté</em> (le conducteur est debout ou assis sur l'engin).</div>`
        },
        {
          titre: "L'autorisation de conduite : trois conditions",
          contenu: `<p>L'autorisation de conduite est un <strong>document écrit</strong>, établi et signé par le <strong>chef d'entreprise</strong> (ou son représentant). Elle précise les engins que le salarié peut conduire. Avant de la délivrer, l'employeur doit s'assurer de trois choses :</p>
<ol>
<li><strong>L'aptitude médicale</strong> : un examen par le <strong>médecin du travail</strong> qui vérifie que le salarié ne présente pas de contre-indication à la conduite (vue, audition, troubles de la vigilance…).</li>
<li><strong>Le contrôle des connaissances et du savoir-faire</strong> pour la conduite en sécurité. Le CACES est le moyen le plus courant et le plus reconnu de faire ce contrôle.</li>
<li><strong>La connaissance des lieux et des instructions</strong> à respecter sur le ou les sites d'utilisation : plan de circulation, zones interdites, consignes particulières, procédures d'urgence.</li>
</ol>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> Karim obtient son CACES R489 catégorie 3 dans un centre de formation. Il est embauché dans une plate-forme logistique. Il ne pourra conduire qu'après la visite médicale, une présentation du site et de ses règles, puis la remise de l'autorisation de conduite signée par son employeur.</div>
<p>L'autorisation n'est <strong>pas transférable</strong> d'une entreprise à l'autre : si le salarié change d'employeur, le nouvel employeur doit en délivrer une nouvelle. Elle peut aussi être <strong>retirée</strong> par l'employeur, par exemple après un comportement dangereux ou une inaptitude médicale.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le CACES n'est pas un « permis » qui autorise à lui seul à conduire. C'est l'<strong>autorisation de conduite de l'employeur</strong> qui permet de conduire dans l'entreprise. Le CACES sert à prouver les connaissances et le savoir-faire.</div>`
        },
        {
          titre: "La formation et le déroulement des tests",
          contenu: `<p>Le CACES est délivré par un <strong>organisme testeur certifié</strong> après deux épreuves : un <strong>test théorique</strong> (le QCM que vous préparez ici) et un <strong>test pratique</strong> sur l'engin, pour chaque catégorie. Il faut réussir le test théorique pour se présenter au test pratique.</p>
<ul>
<li>Le test est conduit par un <strong>testeur</strong> qualifié, qui ne doit pas être le formateur du candidat : l'évaluation est indépendante de la formation.</li>
<li>La formation est adaptée au niveau du candidat ; elle peut être initiale ou de recyclage.</li>
<li>Le CACES prend la forme d'une carte ou d'un certificat nominatif indiquant la recommandation, les catégories obtenues et la date de fin de validité.</li>
</ul>
<p>Le conducteur doit en principe être <strong>âgé d'au moins 18 ans</strong>. Des jeunes de moins de 18 ans en formation professionnelle peuvent être autorisés à utiliser certains engins dans le cadre d'une procédure de dérogation encadrée par le Code du travail.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> théorie puis pratique, testeur distinct du formateur, un CACES par catégorie. En cas d'échec à une catégorie, les autres catégories réussies restent acquises.</div>`
        },
        {
          titre: "Validité et renouvellement",
          contenu: `<p>Le CACES a une <strong>durée de validité limitée</strong>. À son échéance, il faut repasser les tests, en général après une formation de recyclage. Les durées couramment retenues par les recommandations sont les suivantes :</p>
<table>
<thead><tr><th>Recommandation</th><th>Validité du CACES</th></tr></thead>
<tbody>
<tr><td>R489 (chariots à conducteur porté)</td><td>5 ans</td></tr>
<tr><td>R486 (PEMP)</td><td>5 ans</td></tr>
<tr><td>R482 (engins de chantier)</td><td>10 ans</td></tr>
</tbody>
</table>
<p>Attention : la validité du CACES ne remplace pas le jugement de l'employeur. Même avec un CACES en cours de validité, l'employeur doit faire <strong>compléter ou réactualiser la formation</strong> si nécessaire : nouvel engin, nouvelle technique, accident ou presque-accident, longue période sans conduire.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un CACES périmé ne permet plus de justifier du contrôle des connaissances. L'autorisation de conduite qui s'appuie dessus doit alors être revue.</div>
<p>Enfin, l'aptitude médicale est suivie dans le temps par le médecin du travail : une aptitude peut être remise en cause à tout moment (problème de vue, malaise, traitement médicamenteux…), et l'autorisation de conduite doit suivre.</p>`
        }
      ],
      points_cles: [
        "Code du travail : formation adéquate (R4323-55) et autorisation de conduite pour les engins à risques (R4323-56)",
        "L'autorisation de conduite est écrite et délivrée par l'employeur, pas par l'organisme de formation",
        "Trois conditions : aptitude médicale, contrôle des connaissances et savoir-faire, connaissance des lieux et instructions",
        "Le CACES est le moyen reconnu de contrôler les connaissances et le savoir-faire",
        "R489 = chariots à conducteur porté, R486 = PEMP, R482 = engins de chantier, R485 = gerbeurs à conducteur accompagnant",
        "Un CACES est délivré par catégorie, après un test théorique puis un test pratique",
        "Validité : 5 ans pour R489 et R486, 10 ans pour R482",
        "Changement d'employeur : nouvelle autorisation de conduite obligatoire"
      ]
    },
    {
      id: "acteurs-responsabilites-verifications",
      theme: "REGL",
      titre: "Acteurs de la prévention, responsabilités et vérifications des engins",
      duree: 20,
      objectifs: [
        "Connaître le rôle de l'employeur, du salarié et des acteurs de la prévention",
        "Comprendre les responsabilités civile, pénale et disciplinaire",
        "Savoir quand et comment exercer le droit d'alerte et de retrait",
        "Connaître les vérifications générales périodiques et le registre de sécurité"
      ],
      sections: [
        {
          titre: "Les obligations de l'employeur et du salarié",
          contenu: `<p>L'<strong>employeur</strong> a une obligation générale de sécurité : il doit prendre les mesures nécessaires pour assurer la sécurité et protéger la santé physique et mentale des travailleurs. Concrètement, il doit :</p>
<ul>
<li>évaluer les risques et les inscrire dans le <strong>document unique</strong> d'évaluation des risques professionnels (DUERP) ;</li>
<li>mettre à disposition des équipements conformes et maintenus en bon état ;</li>
<li>former les conducteurs et leur délivrer l'autorisation de conduite ;</li>
<li>organiser la circulation (plan de circulation, allées, éclairage) et fournir les EPI ;</li>
<li>faire réaliser les vérifications réglementaires des équipements.</li>
</ul>
<p>Le <strong>salarié</strong> n'est pas pour autant dégagé de toute obligation. Selon le Code du travail, chaque travailleur doit prendre soin, en fonction de sa formation et selon ses possibilités, de <strong>sa propre santé et sécurité ainsi que de celles des autres personnes</strong> concernées par ses actes ou ses omissions. Le conducteur doit donc respecter les consignes, utiliser l'engin conformément à sa destination, porter ses EPI et <strong>signaler toute anomalie</strong> à sa hiérarchie.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le conducteur est responsable de la façon dont il conduit, même s'il a été formé et autorisé. Signaler une anomalie fait partie de son travail.</div>`
        },
        {
          titre: "Les acteurs de la prévention",
          contenu: `<table>
<thead><tr><th>Acteur</th><th>Rôle principal</th></tr></thead>
<tbody>
<tr><td>Inspection du travail</td><td>Contrôle l'application du Code du travail dans les entreprises ; peut dresser des procès-verbaux et, dans certaines situations de danger grave, ordonner l'arrêt temporaire de travaux</td></tr>
<tr><td>CARSAT (CRAMIF en Île-de-France, CGSS outre-mer)</td><td>Caisse régionale de l'Assurance maladie : prévention des risques professionnels, conseil, tarification des accidents du travail ; peut inciter financièrement ou imposer des cotisations supplémentaires</td></tr>
<tr><td>CNAM</td><td>Élabore les recommandations (R482, R486, R489…) avec les partenaires sociaux</td></tr>
<tr><td>INRS</td><td>Institut national de recherche et de sécurité : études, brochures, outils de prévention</td></tr>
<tr><td>Médecin du travail (service de prévention et de santé au travail)</td><td>Suit l'état de santé des salariés, se prononce sur l'aptitude, conseille l'employeur</td></tr>
<tr><td>CSE</td><td>Comité social et économique : représentants du personnel, contribue à la prévention, enquête après les accidents, peut déclencher un droit d'alerte</td></tr>
<tr><td>OPPBTP</td><td>Organisme de prévention propre au bâtiment et aux travaux publics</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> ce n'est pas l'inspection du travail qui délivre le CACES ni l'autorisation de conduite. Le CACES est délivré par un organisme testeur certifié, l'autorisation par l'employeur.</div>`
        },
        {
          titre: "Droit d'alerte et droit de retrait",
          contenu: `<p>Si le conducteur a un <strong>motif raisonnable de penser</strong> qu'une situation de travail présente un <strong>danger grave et imminent</strong> pour sa vie ou sa santé, ou s'il constate une défectuosité dans les systèmes de protection, il doit <strong>alerter immédiatement</strong> l'employeur. Il peut alors se <strong>retirer</strong> de cette situation.</p>
<ul>
<li>Aucune sanction ni aucune retenue de salaire ne peut être prise contre un salarié qui a exercé ce droit de façon légitime.</li>
<li>Le retrait ne doit pas créer pour autrui une nouvelle situation de danger grave et imminent : on ne laisse pas une charge suspendue au-dessus d'une allée de passage, on ne laisse pas un engin en travers d'une voie de circulation.</li>
<li>L'employeur ne peut pas demander de reprendre le travail tant que le danger persiste.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> les freins d'un chariot ne répondent plus correctement. Le cariste s'arrête dans un endroit sûr, pose la charge, prévient son responsable et refuse de reprendre la conduite de cet engin tant qu'il n'est pas réparé : c'est un usage légitime du droit d'alerte et de retrait.</div>`
        },
        {
          titre: "Responsabilités civile, pénale et disciplinaire",
          contenu: `<p>En cas d'accident, plusieurs responsabilités peuvent être recherchées :</p>
<ul>
<li><strong>Responsabilité civile</strong> : elle vise à <strong>réparer le dommage</strong> (indemniser la victime). L'employeur répond en principe des dommages causés par ses salariés dans l'exercice de leurs fonctions. Si l'accident est dû à une <strong>faute inexcusable</strong> de l'employeur (il avait ou aurait dû avoir conscience du danger et n'a pas pris les mesures nécessaires), la victime obtient une indemnisation majorée.</li>
<li><strong>Responsabilité pénale</strong> : elle vise à <strong>sanctionner une infraction</strong> (amende, prison). Elle est <strong>personnelle</strong> : elle peut concerner l'employeur, un responsable délégué, mais aussi le <strong>conducteur</strong> lui-même s'il a commis une faute (imprudence, non-respect des consignes, conduite sous l'emprise de l'alcool…). Personne ne peut s'assurer contre une sanction pénale.</li>
<li><strong>Responsabilité disciplinaire</strong> : l'employeur peut sanctionner un salarié qui ne respecte pas les règles de sécurité (avertissement, mise à pied, retrait de l'autorisation de conduite, voire licenciement).</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> civile = réparer, pénale = punir, disciplinaire = sanction de l'employeur. Le conducteur peut voir sa responsabilité pénale engagée, même s'il est salarié.</div>`
        },
        {
          titre: "Vérifications des engins et registre de sécurité",
          contenu: `<p>Les engins de levage (chariots élévateurs, PEMP, grues…) font l'objet de vérifications réglementaires réalisées par une <strong>personne compétente</strong>, interne ou externe à l'entreprise (souvent un organisme de contrôle).</p>
<table>
<thead><tr><th>Vérification</th><th>Quand ?</th></tr></thead>
<tbody>
<tr><td>Vérification de mise en service</td><td>À la première mise en service dans l'entreprise</td></tr>
<tr><td>Vérification de remise en service</td><td>Après démontage et remontage, modification, réparation importante, accident</td></tr>
<tr><td>Vérification générale périodique (VGP)</td><td>À intervalles réguliers ; tous les <strong>6 mois</strong> pour les chariots à conducteur porté et les PEMP</td></tr>
<tr><td>Vérification de prise de poste</td><td>Chaque jour ou à chaque prise de poste, par le conducteur</td></tr>
</tbody>
</table>
<p>Les résultats des vérifications sont consignés dans le <strong>registre de sécurité</strong> de l'entreprise. Les appareils de levage ont aussi un <strong>carnet de maintenance</strong> où sont notées les opérations d'entretien et de réparation. Le conducteur doit pouvoir s'assurer que la dernière VGP est à jour avant d'utiliser l'engin.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> la VGP ne remplace pas la vérification de prise de poste. Un défaut peut apparaître le lendemain d'une VGP : c'est au conducteur de le détecter et de le signaler.</div>`
        }
      ],
      points_cles: [
        "L'employeur a une obligation de sécurité : évaluer les risques (DUERP), former, fournir des engins conformes et vérifiés",
        "Le salarié doit veiller à sa sécurité et à celle des autres, respecter les consignes et signaler les anomalies",
        "Inspection du travail = contrôle ; CARSAT = prévention et tarification ; médecin du travail = aptitude ; CSE = représentants du personnel",
        "Droit de retrait : danger grave et imminent, alerte immédiate, sans créer de nouveau danger",
        "Responsabilité civile = réparer ; pénale = punir, elle est personnelle et peut viser le conducteur",
        "VGP tous les 6 mois pour les chariots à conducteur porté et les PEMP",
        "Résultats des vérifications dans le registre de sécurité ; entretien dans le carnet de maintenance"
      ]
    }
  );

  P.questions.push(
    { id: "REGL-001", chapitre: "cadre-caces-autorisation", situation: "Vous venez d'obtenir votre CACES R489 catégorie 3 dans un centre de formation.",
      q: "Pour conduire un chariot dans votre entreprise, il vous faut aussi :", options: ["Une autorisation de conduite délivrée par votre employeur", "Un permis de conduire B", "Une attestation de l'inspection du travail"], bonnes: [0],
      explication: "Le Code du travail impose une autorisation de conduite écrite, délivrée par l'employeur. Ni le permis B ni une attestation de l'inspection du travail ne sont exigés pour conduire dans l'entreprise." },
    { id: "REGL-002", chapitre: "cadre-caces-autorisation",
      q: "L'autorisation de conduite est délivrée par :", options: ["L'organisme testeur", "Le chef d'entreprise", "Le médecin du travail", "La CARSAT"], bonnes: [1],
      explication: "C'est le chef d'entreprise (ou son représentant) qui délivre l'autorisation de conduite. L'organisme testeur délivre le CACES et le médecin du travail se prononce sur l'aptitude." },
    { id: "REGL-003", chapitre: "cadre-caces-autorisation",
      q: "Avant de délivrer l'autorisation de conduite, l'employeur doit s'assurer :", options: ["De l'aptitude médicale du salarié", "Du contrôle de ses connaissances et savoir-faire", "De sa connaissance des lieux et des instructions", "Qu'il possède un véhicule personnel"], bonnes: [0, 1, 2],
      explication: "Les trois conditions sont l'aptitude médicale, le contrôle des connaissances et du savoir-faire (le CACES le plus souvent) et la connaissance des lieux et des instructions du site." },
    { id: "REGL-004", chapitre: "cadre-caces-autorisation",
      q: "Le sigle CACES signifie :", options: ["Certificat d'Aptitude à la Conduite En Sécurité", "Carte d'Accès aux Chantiers et Entrepôts Sécurisés", "Contrôle Annuel de la Conduite des Engins Spéciaux"], bonnes: [0],
      explication: "CACES signifie Certificat d'Aptitude à la Conduite En Sécurité. Il atteste qu'on a réussi les tests théorique et pratique d'une catégorie d'engins." },
    { id: "REGL-005", chapitre: "cadre-caces-autorisation",
      q: "Les chariots élévateurs à conducteur porté relèvent de la recommandation :", options: ["R482", "R486", "R489", "R490"], bonnes: [2],
      explication: "La R489 vise les chariots de manutention automoteurs à conducteur porté. La R482 concerne les engins de chantier, la R486 les PEMP et la R490 les grues auxiliaires de chargement." },
    { id: "REGL-006", chapitre: "cadre-caces-autorisation", situation: "Dans l'entrepôt, vous devez utiliser un gerbeur que l'on conduit en marchant à côté, à l'aide d'un timon.",
      q: "Cet engin relève de la recommandation :", options: ["R485", "R489", "R486"], bonnes: [0],
      explication: "Les gerbeurs à conducteur accompagnant relèvent de la R485. La R489 vise uniquement les chariots où le conducteur est porté par l'engin." },
    { id: "REGL-007", chapitre: "cadre-caces-autorisation",
      q: "Les nacelles (plates-formes élévatrices mobiles de personnes) relèvent de la recommandation :", options: ["R484", "R486", "R487"], bonnes: [1],
      explication: "Les PEMP relèvent de la R486. La R484 vise les ponts roulants et portiques, la R487 les grues à tour." },
    { id: "REGL-008", chapitre: "cadre-caces-autorisation",
      q: "La durée de validité d'un CACES R489 est de :", options: ["2 ans", "5 ans", "10 ans", "Illimitée"], bonnes: [1],
      explication: "Le CACES R489 est valable 5 ans, comme le CACES R486. Le CACES R482 (engins de chantier) est valable 10 ans." },
    { id: "REGL-009", chapitre: "cadre-caces-autorisation",
      q: "La durée de validité d'un CACES R482 (engins de chantier) est de :", options: ["5 ans", "10 ans", "15 ans"], bonnes: [1],
      explication: "Le CACES R482 est valable 10 ans, contre 5 ans pour les CACES R489 et R486." },
    { id: "REGL-010", chapitre: "cadre-caces-autorisation", situation: "Vous quittez votre entreprise pour un nouvel emploi de cariste. Votre CACES R489 est valable encore trois ans.",
      q: "Dans votre nouvelle entreprise :", options: ["Votre ancienne autorisation de conduite reste valable", "Votre nouvel employeur doit vous délivrer une nouvelle autorisation de conduite", "Votre CACES reste valable jusqu'à sa date d'échéance"], bonnes: [1, 2],
      explication: "Le CACES suit le salarié jusqu'à son échéance, mais l'autorisation de conduite est propre à chaque entreprise : le nouvel employeur doit en délivrer une nouvelle après visite médicale et présentation du site." },
    { id: "REGL-011", chapitre: "cadre-caces-autorisation",
      q: "Le CACES permet à lui seul de conduire un chariot dans n'importe quelle entreprise :", options: ["Vrai", "Faux"], bonnes: [1],
      explication: "Faux : le CACES prouve les connaissances et le savoir-faire, mais c'est l'autorisation de conduite de l'employeur qui permet de conduire dans l'entreprise." },
    { id: "REGL-012", chapitre: "cadre-caces-autorisation",
      q: "Les recommandations de la CNAM (R482, R486, R489…) sont :", options: ["Des lois dont le non-respect est puni d'une amende", "Des textes de bonnes pratiques servant de référence", "Des normes de fabrication des engins"], bonnes: [1],
      explication: "Les recommandations sont des textes de bonnes pratiques, élaborés avec les partenaires sociaux. Elles ne sont pas des lois, mais elles servent de référence, notamment en cas d'accident." },
    { id: "REGL-013", chapitre: "cadre-caces-autorisation",
      q: "Le testeur qui vous fait passer les tests du CACES :", options: ["Peut être votre formateur", "Ne doit pas être votre formateur", "Doit être votre chef d'équipe"], bonnes: [1],
      explication: "Pour garantir l'indépendance de l'évaluation, le testeur ne doit pas avoir assuré la formation du candidat." },
    { id: "REGL-014", chapitre: "cadre-caces-autorisation", situation: "Vous avez réussi le test théorique et le test pratique de la catégorie 3, mais échoué au test pratique de la catégorie 5.",
      q: "Vous obtenez :", options: ["Le CACES pour la catégorie 3", "Le CACES pour les catégories 3 et 5", "Aucun CACES, il faut tout repasser"], bonnes: [0],
      explication: "Le CACES est délivré catégorie par catégorie : la catégorie 3 réussie est acquise, la catégorie 5 devra être repassée." },
    { id: "REGL-015", chapitre: "cadre-caces-autorisation",
      q: "L'aptitude médicale à la conduite est vérifiée par :", options: ["Le médecin du travail", "Le médecin traitant", "Le formateur"], bonnes: [0],
      explication: "C'est le médecin du travail (service de prévention et de santé au travail) qui se prononce sur l'absence de contre-indication médicale à la conduite." },
    { id: "REGL-016", chapitre: "cadre-caces-autorisation", situation: "Votre CACES R486 est encore valable deux ans, mais votre entreprise vient d'acheter une nacelle d'un modèle très différent.",
      q: "L'employeur doit :", options: ["Ne rien faire, votre CACES est valable", "Compléter votre formation sur ce nouvel engin si nécessaire", "Vous présenter les consignes propres à ce nouvel engin"], bonnes: [1, 2],
      explication: "Le Code du travail impose que la formation soit complétée et réactualisée chaque fois que nécessaire, notamment lors de l'arrivée d'un nouvel équipement. La validité du CACES ne dispense pas de cette adaptation." },
    { id: "REGL-017", chapitre: "cadre-caces-autorisation",
      q: "L'autorisation de conduite peut être retirée par l'employeur :", options: ["Oui", "Non, seul l'organisme testeur peut la retirer"], bonnes: [0],
      explication: "L'employeur qui délivre l'autorisation peut la retirer, par exemple en cas de comportement dangereux ou d'inaptitude médicale." },
    { id: "REGL-018", chapitre: "cadre-caces-autorisation",
      q: "Le test théorique du CACES :", options: ["Doit être réussi pour pouvoir passer le test pratique", "Est facultatif si le test pratique est excellent", "Remplace la formation"], bonnes: [0],
      explication: "Le test théorique précède le test pratique et doit être réussi. Il ne remplace pas la formation, qui prépare aux deux épreuves." },
    { id: "REGL-019", chapitre: "acteurs-responsabilites-verifications",
      q: "L'inspection du travail a pour mission principale :", options: ["De contrôler l'application du Code du travail", "De délivrer les CACES", "De réparer les engins défectueux"], bonnes: [0],
      explication: "L'inspection du travail contrôle l'application de la réglementation du travail dans les entreprises. Elle ne délivre pas les CACES." },
    { id: "REGL-020", chapitre: "acteurs-responsabilites-verifications",
      q: "La CARSAT intervient notamment pour :", options: ["La prévention des risques professionnels", "La tarification des accidents du travail", "La délivrance des autorisations de conduite"], bonnes: [0, 1],
      explication: "La CARSAT conseille les entreprises en prévention et fixe la tarification des accidents du travail et maladies professionnelles. L'autorisation de conduite relève de l'employeur." },
    { id: "REGL-021", chapitre: "acteurs-responsabilites-verifications",
      q: "Le CSE (comité social et économique) :", options: ["Représente le personnel, y compris pour les questions de santé et de sécurité", "Peut enquêter après un accident du travail", "Délivre les CACES"], bonnes: [0, 1],
      explication: "Le CSE contribue à la prévention, peut enquêter sur les accidents et exercer un droit d'alerte. Les CACES sont délivrés par des organismes testeurs certifiés." },
    { id: "REGL-022", chapitre: "acteurs-responsabilites-verifications", situation: "En début de poste, vous constatez que le frein de service de votre chariot est inefficace.",
      q: "Je dois :", options: ["Utiliser le chariot en roulant doucement", "Ne pas utiliser le chariot et prévenir ma hiérarchie", "Freiner avec le frein de parc pendant la journée"], bonnes: [1],
      explication: "Un engin présentant un défaut de sécurité ne doit pas être utilisé. Le conducteur doit signaler l'anomalie à sa hiérarchie : c'est une obligation, pas une option." },
    { id: "REGL-023", chapitre: "acteurs-responsabilites-verifications",
      q: "Le droit de retrait peut être exercé en cas :", options: ["De danger grave et imminent", "De désaccord sur les horaires", "De défectuosité constatée dans les systèmes de protection"], bonnes: [0, 2],
      explication: "Le salarié alerte et peut se retirer s'il a un motif raisonnable de penser qu'il existe un danger grave et imminent, ou s'il constate une défectuosité des systèmes de protection. Un désaccord sur les horaires n'est pas un motif." },
    { id: "REGL-024", chapitre: "acteurs-responsabilites-verifications",
      q: "Un salarié qui exerce légitimement son droit de retrait :", options: ["Peut subir une retenue de salaire", "Ne peut être ni sanctionné ni subir de retenue de salaire", "Doit d'abord obtenir l'accord écrit de l'inspection du travail"], bonnes: [1],
      explication: "Aucune sanction ni retenue de salaire ne peut être prise contre un salarié qui s'est retiré d'une situation de danger grave et imminent. Aucun accord préalable n'est nécessaire, mais l'alerte de l'employeur est obligatoire." },
    { id: "REGL-025", chapitre: "acteurs-responsabilites-verifications", situation: "Votre charge est levée à 4 m au-dessus d'une allée quand vous constatez une fuite importante d'huile hydraulique.",
      q: "Avant de vous retirer, vous devez :", options: ["Laisser la charge en hauteur et quitter le chariot immédiatement", "Si possible, descendre et poser la charge pour ne pas créer de nouveau danger", "Prévenir votre responsable"], bonnes: [1, 2],
      explication: "Le droit de retrait ne doit pas créer de nouveau danger pour autrui : on met la situation en sécurité si on peut le faire sans risque, puis on alerte immédiatement le responsable." },
    { id: "REGL-026", chapitre: "acteurs-responsabilites-verifications",
      q: "La responsabilité civile a pour but :", options: ["De réparer le dommage subi par la victime", "De punir l'auteur d'une infraction", "De retirer le CACES"], bonnes: [0],
      explication: "La responsabilité civile vise à indemniser la victime. Punir une infraction relève de la responsabilité pénale." },
    { id: "REGL-027", chapitre: "acteurs-responsabilites-verifications", situation: "Un cariste, sans tenir compte des consignes, transporte un collègue debout sur les fourches. Le collègue chute et se blesse gravement.",
      q: "La responsabilité pénale du cariste peut être engagée :", options: ["Oui", "Non, seul l'employeur est responsable"], bonnes: [0],
      explication: "La responsabilité pénale est personnelle : le conducteur qui commet une faute, ici le transport d'une personne sur les fourches en violation des consignes, peut être poursuivi, en plus de l'éventuelle responsabilité de l'employeur." },
    { id: "REGL-028", chapitre: "acteurs-responsabilites-verifications",
      q: "On peut s'assurer contre les conséquences d'une condamnation pénale :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Une sanction pénale (amende, prison) est personnelle et ne peut pas être prise en charge par une assurance, contrairement à la réparation civile des dommages." },
    { id: "REGL-029", chapitre: "acteurs-responsabilites-verifications",
      q: "La faute inexcusable de l'employeur est retenue lorsque :", options: ["Il avait ou aurait dû avoir conscience du danger et n'a pas pris les mesures nécessaires", "Le salarié a commis une erreur de conduite", "L'engin a moins de cinq ans"], bonnes: [0],
      explication: "La faute inexcusable suppose que l'employeur avait ou aurait dû avoir conscience du danger auquel était exposé le salarié et n'a pas pris les mesures pour l'en préserver. Elle majore l'indemnisation de la victime." },
    { id: "REGL-030", chapitre: "acteurs-responsabilites-verifications",
      q: "Les vérifications générales périodiques (VGP) d'un chariot élévateur à conducteur porté ont lieu :", options: ["Tous les 6 mois", "Tous les ans", "Tous les 5 ans"], bonnes: [0],
      explication: "Les chariots à conducteur porté, comme les PEMP, font l'objet d'une vérification générale périodique tous les 6 mois." },
    { id: "REGL-031", chapitre: "acteurs-responsabilites-verifications",
      q: "Les résultats des vérifications générales périodiques sont consignés :", options: ["Dans le registre de sécurité", "Sur la carte CACES du conducteur", "Dans le document unique uniquement"], bonnes: [0],
      explication: "Les résultats des vérifications sont inscrits au registre de sécurité de l'entreprise, que le conducteur et l'inspection du travail peuvent consulter." },
    { id: "REGL-032", chapitre: "acteurs-responsabilites-verifications", situation: "Le chariot que vous utilisez vient d'être réparé après un accident ayant endommagé le mât.",
      q: "Avant sa remise en service :", options: ["Une vérification de remise en service doit être faite", "Il suffit que vous fassiez un essai à vide", "Il faut attendre la prochaine VGP"], bonnes: [0],
      explication: "Après un accident ou une réparation importante touchant la sécurité, l'engin doit faire l'objet d'une vérification de remise en service par une personne compétente." },
    { id: "REGL-033", chapitre: "acteurs-responsabilites-verifications",
      q: "La VGP du chariot a été faite hier. Ce matin, je peux me dispenser de la vérification de prise de poste :", options: ["Oui", "Non"], bonnes: [1],
      explication: "La VGP ne remplace pas la vérification de prise de poste : un défaut peut apparaître à tout moment. Le conducteur fait ses contrôles à chaque prise de poste." },
    { id: "REGL-034", chapitre: "acteurs-responsabilites-verifications",
      q: "Le document unique d'évaluation des risques (DUERP) est établi par :", options: ["L'employeur", "Le conducteur", "L'organisme de formation"], bonnes: [0],
      explication: "L'employeur doit évaluer les risques professionnels et les transcrire dans le document unique. Il le met à jour, notamment après un accident ou un changement important." },
    { id: "REGL-035", chapitre: "acteurs-responsabilites-verifications",
      q: "En tant que salarié, je dois :", options: ["Prendre soin de ma santé et de ma sécurité", "Prendre soin de la sécurité des personnes concernées par mes actes", "Respecter les consignes de sécurité seulement si mon chef est présent"], bonnes: [0, 1],
      explication: "Le Code du travail impose à chaque salarié de veiller à sa propre sécurité et à celle des autres, en fonction de sa formation. Les consignes s'appliquent en permanence." },
    { id: "REGL-036", chapitre: "acteurs-responsabilites-verifications", situation: "Vous ne respectez pas à plusieurs reprises la limitation de vitesse fixée par le plan de circulation de l'entrepôt.",
      q: "Votre employeur peut :", options: ["Vous sanctionner", "Vous retirer votre autorisation de conduite", "Annuler votre CACES"], bonnes: [0, 1],
      explication: "L'employeur peut prendre une sanction disciplinaire et retirer l'autorisation de conduite qu'il a délivrée. Il ne peut pas annuler le CACES, délivré par l'organisme testeur." },
    { id: "REGL-037", chapitre: "acteurs-responsabilites-verifications",
      q: "Les opérations d'entretien et de réparation d'un appareil de levage sont notées :", options: ["Dans le carnet de maintenance", "Sur la plaque de charge", "Dans le plan de circulation"], bonnes: [0],
      explication: "Le carnet de maintenance de l'appareil de levage retrace l'entretien et les réparations. La plaque de charge indique les capacités de l'engin." },
    { id: "REGL-038", chapitre: "acteurs-responsabilites-verifications",
      q: "Le médecin du travail peut :", options: ["Déclarer un salarié inapte à la conduite", "Conseiller l'employeur sur les postes de travail", "Délivrer l'autorisation de conduite"], bonnes: [0, 1],
      explication: "Le médecin du travail se prononce sur l'aptitude et conseille l'employeur. L'autorisation de conduite reste délivrée par l'employeur, en tenant compte de l'avis médical." },
    { id: "REGL-039", chapitre: "acteurs-responsabilites-verifications",
      q: "Parmi ces obligations, lesquelles incombent à l'employeur ?", options: ["Évaluer les risques", "Fournir des engins conformes et vérifiés", "Former les conducteurs", "Faire passer le test CACES lui-même"], bonnes: [0, 1, 2],
      explication: "L'employeur évalue les risques, fournit des équipements conformes et vérifiés et forme les conducteurs. Les tests CACES sont conduits par un testeur d'un organisme certifié." }
  );
})();

/* ───────────── Thème SECU — Risques et prévention ───────────── */
(function () {
  const P = window.PERMIS_COURS["caces"] = window.PERMIS_COURS["caces"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "risques-prevention",
      theme: "SECU",
      titre: "Les risques liés aux engins et leur prévention",
      duree: 20,
      objectifs: [
        "Connaître les principaux types d'accidents liés aux engins mobiles",
        "Identifier les facteurs d'un accident : individu, tâche, matériel, milieu",
        "Connaître les neuf principes généraux de prévention et leur ordre de priorité",
        "Savoir quels EPI porter et pourquoi",
        "Mesurer les effets de l'alcool, des drogues, des médicaments et de la fatigue"
      ],
      sections: [
        {
          titre: "Les accidents types",
          contenu: `<p>Les engins de manutention et de chantier sont à l'origine d'accidents souvent graves, voire mortels. Le test théorique vérifie que vous savez les reconnaître et les prévenir.</p>
<table>
<thead><tr><th>Accident</th><th>Causes fréquentes</th><th>Prévention</th></tr></thead>
<tbody>
<tr><td>Renversement de l'engin</td><td>Virage trop rapide, charge haute en circulation, surcharge, pente prise en travers, sol instable, bord de quai</td><td>Vitesse adaptée, charge basse, respect de la capacité, port de la ceinture</td></tr>
<tr><td>Chute de la charge</td><td>Charge mal équilibrée ou mal arrimée, palette abîmée, freinage brusque, mât incliné vers l'avant en circulation</td><td>Contrôle de la charge, fourches bien engagées, mât incliné vers l'arrière</td></tr>
<tr><td>Collision, heurt de piéton</td><td>Visibilité réduite, vitesse, absence d'allées séparées, marche arrière sans regarder</td><td>Plan de circulation, regarder dans le sens de la marche, avertisseur aux endroits masqués</td></tr>
<tr><td>Écrasement, coincement</td><td>Personne entre l'engin et un obstacle, sous une charge levée, membre hors du gabarit de l'engin</td><td>Personne dans la zone d'évolution, garder les membres à l'intérieur du poste</td></tr>
<tr><td>Chute de hauteur</td><td>Personne transportée sur les fourches ou sur une palette, chute depuis un quai ou depuis une nacelle</td><td>Interdiction de lever des personnes avec un engin non prévu pour cela, garde-corps, harnais</td></tr>
</tbody>
</table>
<p>Le renversement latéral d'un chariot élévateur est l'un des accidents les plus graves : le conducteur éjecté est écrasé par le protège-conducteur. D'où une règle absolue : <strong>porter le dispositif de retenue</strong> (ceinture, portillon, cabine fermée) quand l'engin en est équipé.</p>`
        },
        {
          titre: "Comprendre un accident : les facteurs",
          contenu: `<p>Un accident a rarement une seule cause. On analyse généralement quatre composantes :</p>
<ul>
<li><strong>L'individu</strong> : formation, expérience, fatigue, état de santé, alcool, précipitation.</li>
<li><strong>La tâche</strong> : cadence, consignes, mode opératoire, charge inhabituelle.</li>
<li><strong>Le matériel</strong> : état de l'engin, entretien, adaptation à la tâche, accessoires.</li>
<li><strong>Le milieu</strong> : sol, éclairage, encombrement, bruit, météo, coactivité avec les piétons.</li>
</ul>
<p>Le <strong>presque-accident</strong> (un incident qui aurait pu blesser quelqu'un) doit aussi être signalé : il révèle un danger avant qu'il ne provoque un accident.</p>
<p>Un <strong>accident du travail</strong> est un accident survenu par le fait ou à l'occasion du travail. La victime doit en informer son employeur dans la journée ou au plus tard dans les <strong>24 heures</strong> ; l'employeur doit le déclarer à la caisse primaire d'assurance maladie dans les <strong>48 heures</strong>.</p>
<p>Si vous êtes témoin d'un accident : <strong>Protéger</strong> (arrêter l'engin, baliser, éviter le suraccident), <strong>Alerter</strong> (secouriste du travail, 15, 18 ou 112 selon les consignes du site), <strong>Secourir</strong> dans la limite de vos compétences.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> ne déplacez pas un blessé coincé sous un engin ou une charge sans avoir écarté le risque de nouvel accident : protéger vient toujours avant secourir.</div>`
        },
        {
          titre: "Les principes généraux de prévention",
          contenu: `<p>Le Code du travail fixe <strong>neuf principes généraux de prévention</strong> que l'employeur doit appliquer, dans cet ordre de logique :</p>
<ol>
<li>Éviter les risques.</li>
<li>Évaluer les risques qui ne peuvent pas être évités.</li>
<li>Combattre les risques à la source.</li>
<li>Adapter le travail à l'homme.</li>
<li>Tenir compte de l'état d'évolution de la technique.</li>
<li>Remplacer ce qui est dangereux par ce qui n'est pas dangereux ou par ce qui l'est moins.</li>
<li>Planifier la prévention.</li>
<li>Prendre des mesures de <strong>protection collective</strong> en leur donnant la <strong>priorité</strong> sur les mesures de protection individuelle.</li>
<li>Donner les instructions appropriées aux travailleurs.</li>
</ol>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> pour éviter les collisions entre chariots et piétons, on sépare d'abord physiquement les allées (protection collective, par exemple des barrières), avant de compter sur le gilet haute visibilité porté par chaque piéton (protection individuelle).</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la protection individuelle (EPI) n'est jamais la première solution. Elle vient en complément, quand le risque ne peut pas être supprimé ou suffisamment réduit par des mesures collectives.</div>`
        },
        {
          titre: "Les équipements de protection individuelle",
          contenu: `<p>Les EPI sont <strong>fournis gratuitement par l'employeur</strong>, qui veille à leur entretien et à leur remplacement. Le salarié doit les <strong>porter</strong> selon les consignes et signaler tout EPI détérioré.</p>
<table>
<thead><tr><th>EPI</th><th>Contre quel risque ?</th></tr></thead>
<tbody>
<tr><td>Chaussures de sécurité (embout renforcé)</td><td>Écrasement des pieds, chute d'objets, glissade</td></tr>
<tr><td>Gilet ou vêtement haute visibilité</td><td>Ne pas être vu (chantier, cour, quai)</td></tr>
<tr><td>Casque</td><td>Chute d'objets, heurt de la tête (chantier, sortie d'engin sous charge)</td></tr>
<tr><td>Gants</td><td>Coupures, échardes, produits chimiques (acide de batterie)</td></tr>
<tr><td>Lunettes ou écran facial</td><td>Projections (électrolyte de batterie, poussières)</td></tr>
<tr><td>Protections auditives</td><td>Bruit des engins et des machines</td></tr>
<tr><td>Harnais antichute</td><td>Chute ou éjection depuis une nacelle lorsque la notice ou les consignes l'exigent</td></tr>
</tbody>
</table>
<p>Le <strong>dispositif de retenue</strong> de l'engin (ceinture de sécurité, portillons, cabine fermée) n'est pas un EPI : c'est un équipement de l'engin. Il doit être utilisé à chaque fois qu'il existe, même pour un court trajet.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> EPI fournis par l'employeur, portés par le salarié. Un EPI abîmé ne protège plus : on le fait remplacer.</div>`
        },
        {
          titre: "Alcool, drogues, médicaments, fatigue",
          contenu: `<p>La conduite d'un engin demande une vigilance totale. Or l'<strong>alcool</strong> allonge le temps de réaction, rétrécit le champ visuel, perturbe l'appréciation des distances et donne une fausse impression de maîtrise. Les <strong>stupéfiants</strong> (cannabis, cocaïne…) ont des effets comparables ou pires, et leurs effets peuvent durer bien au-delà de la consommation.</p>
<ul>
<li>Le Code du travail interdit d'introduire ou de distribuer sur le lieu de travail des boissons alcoolisées autres que le vin, la bière, le cidre et le poiré. Le <strong>règlement intérieur</strong> peut limiter davantage, voire interdire toute consommation, pour les postes de sécurité comme la conduite d'engins.</li>
<li>Il est interdit de laisser entrer ou séjourner dans l'entreprise des personnes en état d'ivresse. Un conducteur dans cet état doit être écarté de la conduite.</li>
<li>Si le règlement intérieur le prévoit, un <strong>contrôle d'alcoolémie</strong> peut être réalisé sur les salariés occupant un poste à risque.</li>
</ul>
<p>Certains <strong>médicaments</strong> diminuent la vigilance. Leur boîte porte un pictogramme en triangle : niveau 1 jaune (soyez prudent), niveau 2 orange (soyez très prudent), niveau 3 rouge (attention, danger : ne pas conduire). En cas de doute, parlez-en au médecin du travail.</p>
<p>La <strong>fatigue</strong>, le manque de sommeil, le travail de nuit et la précipitation sont aussi des facteurs d'accident. Le téléphone portable est à proscrire en conduisant.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> il n'existe aucun moyen d'éliminer l'alcool plus vite (café, douche froide…). Seul le temps fait baisser l'alcoolémie.</div>`
        }
      ],
      points_cles: [
        "Accidents types : renversement, chute de charge, collision avec un piéton, écrasement, chute de hauteur",
        "Toujours utiliser le dispositif de retenue de l'engin (ceinture, portillon, cabine)",
        "Neuf principes de prévention : éviter le risque d'abord, protection collective avant protection individuelle",
        "EPI fournis gratuitement par l'employeur, portés obligatoirement par le salarié",
        "Accident du travail : informer l'employeur sous 24 h ; déclaration par l'employeur sous 48 h",
        "Protéger, alerter, secourir",
        "Alcool, drogues, médicaments à pictogramme et fatigue sont incompatibles avec la conduite d'engins"
      ]
    },
    {
      id: "signalisation-gestes",
      theme: "SECU",
      titre: "Signalisation de sécurité, balisage et gestes de commandement",
      duree: 20,
      objectifs: [
        "Reconnaître une famille de panneaux de sécurité à sa forme et à sa couleur",
        "Connaître le balisage des obstacles et des zones dangereuses",
        "Respecter le plan de circulation d'un site",
        "Interpréter les gestes de commandement normalisés"
      ],
      sections: [
        {
          titre: "Les panneaux de santé et de sécurité au travail",
          contenu: `<p>Dans l'entreprise et sur les chantiers, la signalisation de sécurité suit une réglementation précise (arrêté du 4 novembre 1993, pictogrammes harmonisés). Comme pour le code de la route, la <strong>forme</strong> et la <strong>couleur</strong> indiquent la nature du message.</p>
<table>
<thead><tr><th>Type de panneau</th><th>Forme</th><th>Couleurs</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>Interdiction</td><td>Ronde</td><td>Pictogramme noir sur fond blanc, bord et barre diagonale rouges</td><td>Interdit de fumer, accès interdit aux piétons, interdit aux chariots</td></tr>
<tr><td>Avertissement (danger)</td><td>Triangulaire</td><td>Pictogramme noir sur fond jaune, bord noir</td><td>Danger électrique, circulation de chariots, matières inflammables</td></tr>
<tr><td>Obligation</td><td>Ronde</td><td>Pictogramme blanc sur fond bleu</td><td>Port du casque, des chaussures de sécurité, du gilet, du harnais obligatoire</td></tr>
<tr><td>Sauvetage ou secours</td><td>Carrée ou rectangulaire</td><td>Pictogramme blanc sur fond vert</td><td>Issue de secours, premiers secours, douche de sécurité</td></tr>
<tr><td>Matériel de lutte contre l'incendie</td><td>Carrée ou rectangulaire</td><td>Pictogramme blanc sur fond rouge</td><td>Extincteur, robinet d'incendie armé</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> rond rouge = interdit ; triangle jaune = danger ; rond bleu = obligation ; carré vert = secours ; carré rouge = incendie.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> au travail, les panneaux d'avertissement ont un <strong>fond jaune</strong> et un bord noir, alors que les panneaux de danger routiers ont un fond blanc et un bord rouge. Le rouge sur un carré signale du matériel incendie, pas une interdiction.</div>`
        },
        {
          titre: "Balisage et marquage au sol",
          contenu: `<p>Les obstacles et les zones dangereuses (bords de quai, poteaux, piliers de palettier, passages bas, fouilles) sont signalés par un <strong>balisage</strong> à bandes alternées inclinées d'environ 45 degrés :</p>
<ul>
<li><strong>jaune et noir</strong> pour signaler un risque d'obstacle, de chute ou de heurt ;</li>
<li><strong>rouge et blanc</strong>, utilisées notamment pour les barrières et les zones dont l'accès est interdit.</li>
</ul>
<p>Le <strong>marquage au sol</strong> délimite les allées de circulation des engins, les cheminements piétons, les zones de stockage et les emplacements de stationnement. Une zone de stockage tracée au sol ne doit jamais déborder sur une allée de circulation.</p>
<p>Les engins sont souvent équipés de <strong>signaux lumineux</strong> (feu à éclats ou gyrophare, projection lumineuse au sol) et <strong>sonores</strong> (avertisseur, alarme de recul). Ces signaux préviennent les piétons mais ne dispensent jamais le conducteur de regarder.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un signal sonore de recul n'est pas une autorisation de reculer sans regarder. Le conducteur reste responsable de la vérification de la zone.</div>`
        },
        {
          titre: "Le plan de circulation",
          contenu: `<p>Chaque site doit disposer d'un <strong>plan de circulation</strong> établi par l'employeur. Il fixe les sens de circulation, les vitesses, les zones interdites aux engins, les cheminements piétons et les points de croisement. Il est souvent matérialisé par des <strong>panneaux identiques à ceux du code de la route</strong> : stop <span class="panneau" data-code="AB4"></span>, sens interdit <span class="panneau" data-code="B1"></span>, limitation de vitesse <span class="panneau" data-code="B14:10"></span>, passage pour piétons <span class="panneau" data-code="C20a"></span>.</p>
<ul>
<li>Le conducteur respecte ces panneaux comme sur la voie publique.</li>
<li>Aux intersections masquées et aux sorties de bâtiment, il ralentit, utilise l'avertisseur et s'arrête si nécessaire.</li>
<li>Il ne circule jamais dans une zone réservée aux piétons, ni sur un passage non prévu pour l'engin.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> à la sortie de l'entrepôt, un panneau stop <span class="panneau" data-code="AB4"></span> est implanté avant la cour où circulent les camions. Le cariste marque l'arrêt complet, même si la cour paraît vide.</div>`
        },
        {
          titre: "Les gestes de commandement",
          contenu: `<p>Quand le conducteur manque de visibilité (manœuvre de levage, recul, approche d'un obstacle), il est guidé par un <strong>chef de manœuvre</strong> ou un <strong>guide</strong>. Celui-ci utilise des <strong>gestes normalisés</strong>. Le conducteur n'obéit qu'à <strong>une seule personne</strong> désignée, sauf pour le signal d'arrêt d'urgence, qui doit être respecté quel que soit celui qui le donne.</p>
<table>
<thead><tr><th>Signification</th><th>Geste</th></tr></thead>
<tbody>
<tr><td>Début, attention, prise de commandement</td><td>Les deux bras étendus à l'horizontale, paumes vers l'avant</td></tr>
<tr><td>Stop, interruption, fin du mouvement</td><td>Bras droit tendu vers le haut, paume vers l'avant</td></tr>
<tr><td>Fin des opérations</td><td>Les deux mains jointes à hauteur de la poitrine</td></tr>
<tr><td>Monter</td><td>Bras droit tendu vers le haut, paume vers l'avant, décrivant lentement un cercle</td></tr>
<tr><td>Descendre</td><td>Bras droit tendu vers le bas, paume vers l'intérieur, décrivant lentement un cercle</td></tr>
<tr><td>Avancer (venir vers le signaleur)</td><td>Les deux bras repliés, paumes vers l'intérieur, avant-bras faisant des mouvements lents vers le corps</td></tr>
<tr><td>Reculer (s'éloigner du signaleur)</td><td>Les deux bras repliés, paumes vers l'extérieur, avant-bras faisant des mouvements lents s'éloignant du corps</td></tr>
<tr><td>À droite ou à gauche (par rapport au signaleur)</td><td>Bras tendu à l'horizontale du côté voulu, paume vers le bas, petits mouvements lents dans la direction</td></tr>
<tr><td>Distance verticale ou horizontale</td><td>Les mains indiquent la distance restante</td></tr>
<tr><td>Danger, arrêt d'urgence</td><td>Les deux bras tendus vers le haut, paumes vers l'avant</td></tr>
</tbody>
</table>
<p>Un mouvement <strong>rapide</strong> est demandé par des gestes exécutés plus vite ; un mouvement <strong>lent</strong>, par des gestes très lents.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « droite » et « gauche » s'entendent <strong>par rapport au signaleur</strong>, pas par rapport au conducteur. Face à face, la droite du signaleur est la gauche du conducteur.</div>`
        },
        {
          titre: "Travailler avec un guide",
          contenu: `<p>Le recours à un guide est nécessaire chaque fois que le conducteur ne voit pas correctement la zone de manœuvre : charge volumineuse masquant la vue, recul dans un endroit encombré, approche d'une ligne électrique, mise en place d'une nacelle près d'un obstacle.</p>
<ul>
<li>Avant la manœuvre, conducteur et guide se mettent d'accord sur les gestes ou le moyen de communication (radio, par exemple) et sur la zone d'évolution.</li>
<li>Le guide se place de manière à <strong>voir la zone de travail</strong> et à <strong>être vu du conducteur</strong>, hors de la trajectoire de l'engin et de la charge.</li>
<li>Si le conducteur perd le guide de vue ou ne comprend pas un geste, il <strong>s'arrête</strong> immédiatement et ne reprend la manœuvre qu'après avoir rétabli le contact.</li>
<li>Le guide ne doit être chargé d'aucune autre tâche pendant la manœuvre.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> pas de contact visuel avec le guide = arrêt de la manœuvre. Le guide se tient toujours hors de la trajectoire de l'engin.</div>`
        }
      ],
      points_cles: [
        "Interdiction : rond, bord et barre rouges, pictogramme noir sur fond blanc",
        "Avertissement : triangle à fond jaune et bord noir",
        "Obligation : rond à fond bleu, pictogramme blanc",
        "Secours : carré ou rectangle vert ; matériel incendie : carré ou rectangle rouge",
        "Balisage des obstacles par bandes alternées jaunes et noires ou rouges et blanches",
        "Le plan de circulation du site s'impose au conducteur, avec des panneaux de type code de la route",
        "Un seul guide désigné ; l'arrêt d'urgence (deux bras levés) s'impose quel que soit celui qui le donne",
        "Droite et gauche des gestes s'entendent par rapport au signaleur"
      ],
      panneaux: ["AB4", "B1", "B14:10", "C20a"]
    }
  );

  P.questions.push(
    { id: "SECU-001", chapitre: "risques-prevention", situation: "Vous circulez avec un chariot élévateur et devez prendre un virage serré.",
      q: "Le principal risque d'un virage pris trop vite est :", options: ["Le renversement latéral du chariot", "La surchauffe du moteur", "L'usure des fourches"], bonnes: [0],
      explication: "Un virage pris trop vite, surtout avec une charge haute, provoque le renversement latéral, l'un des accidents les plus graves pour le conducteur." },
    { id: "SECU-002", chapitre: "risques-prevention", situation: "Votre chariot est équipé d'une ceinture de sécurité. Vous ne devez parcourir que 20 mètres.",
      q: "Je dois boucler ma ceinture :", options: ["Oui", "Non, le trajet est trop court"], bonnes: [0],
      explication: "Le dispositif de retenue doit être utilisé à chaque fois que l'engin en est équipé, même pour un court trajet : un renversement peut survenir à tout moment." },
    { id: "SECU-003", chapitre: "risques-prevention",
      q: "Parmi ces situations, lesquelles peuvent provoquer la chute de la charge ?", options: ["Un freinage brusque", "Une palette endommagée", "Une charge bien centrée, mât incliné vers l'arrière", "Un mât incliné vers l'avant pendant le déplacement"], bonnes: [0, 1, 3],
      explication: "Freinage brusque, palette abîmée et mât incliné vers l'avant favorisent la chute de la charge. Une charge centrée avec le mât incliné vers l'arrière est la bonne position de transport." },
    { id: "SECU-004", chapitre: "risques-prevention",
      q: "Selon les principes généraux de prévention, la première chose à faire est :", options: ["Fournir des EPI", "Éviter les risques", "Donner des consignes"], bonnes: [1],
      explication: "Le premier principe est d'éviter les risques. Les EPI et les instructions viennent ensuite, en complément." },
    { id: "SECU-005", chapitre: "risques-prevention",
      q: "Les mesures de protection collective :", options: ["Sont prioritaires sur les mesures de protection individuelle", "Viennent après les EPI", "Sont facultatives si les salariés portent leurs EPI"], bonnes: [0],
      explication: "Le Code du travail impose de donner la priorité aux mesures de protection collective sur les mesures de protection individuelle." },
    { id: "SECU-006", chapitre: "risques-prevention", situation: "Dans un entrepôt, chariots et piétons se croisent souvent dans la même allée.",
      q: "Quelle mesure est une protection collective ?", options: ["Séparer les allées piétons et chariots par des barrières", "Faire porter un gilet haute visibilité aux piétons", "Équiper les piétons de chaussures de sécurité"], bonnes: [0],
      explication: "La séparation physique des flux protège tout le monde : c'est une protection collective. Le gilet et les chaussures de sécurité sont des EPI." },
    { id: "SECU-007", chapitre: "risques-prevention",
      q: "Les EPI sont :", options: ["Fournis gratuitement par l'employeur", "Achetés par le salarié", "À porter selon les consignes"], bonnes: [0, 2],
      explication: "L'employeur fournit gratuitement les EPI et veille à leur entretien ; le salarié doit les porter conformément aux consignes." },
    { id: "SECU-008", chapitre: "risques-prevention", situation: "Vous devez compléter le niveau d'eau d'une batterie de chariot.",
      q: "Je porte :", options: ["Des lunettes de protection", "Des gants adaptés", "Des protections auditives"], bonnes: [0, 1],
      explication: "L'électrolyte des batteries au plomb est corrosif : lunettes et gants protègent des projections. Les protections auditives ne sont pas utiles pour ce risque." },
    { id: "SECU-009", chapitre: "risques-prevention",
      q: "Les chaussures de sécurité protègent principalement contre :", options: ["L'écrasement des pieds", "Le bruit", "Les projections dans les yeux"], bonnes: [0],
      explication: "Les chaussures de sécurité, avec leur embout renforcé, protègent contre l'écrasement et la chute d'objets sur les pieds." },
    { id: "SECU-010", chapitre: "risques-prevention",
      q: "La ceinture de sécurité d'un chariot est :", options: ["Un équipement de protection individuelle", "Un dispositif de retenue de l'engin"], bonnes: [1],
      explication: "La ceinture fait partie de l'engin : c'est un dispositif de retenue, pas un EPI. Elle doit être utilisée chaque fois qu'elle existe." },
    { id: "SECU-011", chapitre: "risques-prevention", situation: "Un collègue s'est blessé au poignet en manipulant une palette.",
      q: "Il doit informer son employeur :", options: ["Dans la journée ou au plus tard dans les 24 heures", "Dans le mois", "Seulement s'il a un arrêt de travail"], bonnes: [0],
      explication: "La victime informe l'employeur dans la journée ou au plus tard dans les 24 heures ; l'employeur déclare ensuite l'accident à la caisse primaire dans les 48 heures." },
    { id: "SECU-012", chapitre: "risques-prevention",
      q: "L'employeur doit déclarer un accident du travail à la caisse primaire d'assurance maladie dans un délai de :", options: ["24 heures", "48 heures", "15 jours"], bonnes: [1],
      explication: "La déclaration d'accident du travail par l'employeur doit être faite dans les 48 heures après qu'il en a eu connaissance." },
    { id: "SECU-013", chapitre: "risques-prevention", situation: "Vous êtes témoin d'une collision entre un chariot et un piéton dans une allée.",
      q: "Dans l'ordre, je dois :", options: ["Protéger, alerter, secourir", "Secourir, alerter, protéger", "Alerter, secourir, protéger"], bonnes: [0],
      explication: "On protège d'abord (arrêt des engins, balisage) pour éviter le suraccident, on alerte les secours, puis on secourt dans la limite de ses compétences." },
    { id: "SECU-014", chapitre: "risques-prevention",
      q: "L'alcool :", options: ["Allonge le temps de réaction", "Rétrécit le champ visuel", "Améliore la concentration à faible dose"], bonnes: [0, 1],
      explication: "Même à faible dose, l'alcool allonge le temps de réaction, réduit le champ visuel et donne une fausse impression de maîtrise. Il n'améliore jamais la concentration." },
    { id: "SECU-015", chapitre: "risques-prevention", situation: "Vous avez bu plusieurs verres au déjeuner. Vous reprenez votre poste de cariste dans 30 minutes.",
      q: "Pour éliminer l'alcool plus vite, je peux :", options: ["Boire un café fort", "Prendre l'air", "Rien : seul le temps fait baisser l'alcoolémie"], bonnes: [2],
      explication: "Aucun moyen n'accélère l'élimination de l'alcool. Si vous n'êtes pas en état de conduire, vous devez le signaler et ne pas conduire." },
    { id: "SECU-016", chapitre: "risques-prevention",
      q: "Le règlement intérieur de l'entreprise peut interdire toute consommation d'alcool aux conducteurs d'engins :", options: ["Oui", "Non, le vin et la bière sont toujours autorisés"], bonnes: [0],
      explication: "Le Code du travail limite les boissons autorisées au vin, à la bière, au cidre et au poiré, et le règlement intérieur peut aller plus loin pour les postes de sécurité, jusqu'à l'interdiction totale." },
    { id: "SECU-017", chapitre: "risques-prevention", situation: "Votre médecin vous a prescrit un médicament dont la boîte porte un triangle rouge de niveau 3.",
      q: "Je peux conduire un chariot :", options: ["Oui, en roulant doucement", "Non"], bonnes: [1],
      explication: "Le pictogramme rouge de niveau 3 signifie « attention, danger : ne pas conduire ». Prévenez votre responsable et parlez-en au médecin du travail." },
    { id: "SECU-018", chapitre: "risques-prevention",
      q: "Un presque-accident (incident sans blessure) :", options: ["Doit être signalé", "N'a aucune importance puisque personne n'est blessé"], bonnes: [0],
      explication: "Le presque-accident révèle un danger réel. Le signaler permet de corriger la situation avant qu'un accident ne se produise." },
    { id: "SECU-019", chapitre: "risques-prevention",
      q: "Pour analyser un accident, on examine notamment :", options: ["L'individu", "Le matériel", "Le milieu", "La tâche"], bonnes: [0, 1, 2, 3],
      explication: "Un accident résulte en général de plusieurs facteurs combinés : l'individu, la tâche, le matériel et le milieu de travail." },
    { id: "SECU-020", chapitre: "risques-prevention", situation: "Un collègue vous demande de le monter sur les fourches pour attraper un carton en hauteur.",
      q: "Je peux le faire :", options: ["Oui, s'il se tient au tablier", "Oui, en levant doucement", "Non, c'est interdit"], bonnes: [2],
      explication: "Lever une personne sur les fourches ou sur une palette est interdit : le risque de chute de hauteur est majeur. Il faut utiliser un moyen prévu pour le travail en hauteur." },
    { id: "SECU-021", chapitre: "signalisation-gestes",
      q: "Un panneau rond, avec un bord et une barre rouges et un pictogramme noir sur fond blanc, est un panneau :", options: ["D'interdiction", "D'obligation", "D'avertissement"], bonnes: [0],
      explication: "Le panneau rond à bord et barre rouges exprime une interdiction (par exemple, interdit aux piétons)." },
    { id: "SECU-022", chapitre: "signalisation-gestes",
      q: "Un panneau rond à fond bleu avec un pictogramme blanc indique :", options: ["Une obligation", "Une interdiction", "Une issue de secours"], bonnes: [0],
      explication: "Le rond bleu exprime une obligation, par exemple le port du casque ou des chaussures de sécurité." },
    { id: "SECU-023", chapitre: "signalisation-gestes",
      q: "Au travail, un panneau d'avertissement de danger est :", options: ["Triangulaire à fond jaune et bord noir", "Rond à fond bleu", "Carré à fond vert"], bonnes: [0],
      explication: "Les panneaux d'avertissement sont triangulaires, avec un pictogramme noir sur fond jaune et un bord noir." },
    { id: "SECU-024", chapitre: "signalisation-gestes",
      q: "Un panneau carré à fond vert avec un pictogramme blanc signale :", options: ["Un équipement de secours ou une issue de secours", "Un extincteur", "Une zone interdite"], bonnes: [0],
      explication: "Le vert est la couleur du sauvetage et du secours : issues de secours, trousse de premiers secours, douche de sécurité." },
    { id: "SECU-025", chapitre: "signalisation-gestes",
      q: "Un panneau carré à fond rouge avec un pictogramme blanc d'extincteur signale :", options: ["Une interdiction", "Le matériel de lutte contre l'incendie", "Un danger électrique"], bonnes: [1],
      explication: "Sur un panneau carré ou rectangulaire, le rouge signale le matériel de lutte contre l'incendie. Le rond rouge, lui, exprime une interdiction." },
    { id: "SECU-026", chapitre: "signalisation-gestes",
      q: "Un pilier de palettier est protégé et signalé par des bandes alternées :", options: ["Jaunes et noires", "Vertes et blanches", "Bleues et blanches"], bonnes: [0],
      explication: "Les obstacles présentant un risque de heurt ou de chute sont balisés par des bandes alternées jaunes et noires (ou rouges et blanches), inclinées d'environ 45 degrés." },
    { id: "SECU-027", chapitre: "signalisation-gestes", situation: "Le plan de circulation de l'usine fixe la vitesse des engins dans la cour.", panneau: "B14:10",
      q: "Ce panneau implanté dans la cour :", options: ["S'impose au cariste", "Ne concerne que les camions", "N'a pas de valeur dans une enceinte privée"], bonnes: [0],
      explication: "Le plan de circulation établi par l'employeur s'impose à tous les conducteurs du site, y compris aux caristes. Ici, la vitesse est limitée à 10 km/h." },
    { id: "SECU-028", chapitre: "signalisation-gestes", situation: "À la sortie du bâtiment, ce panneau est implanté avant une voie où circulent les camions. La voie semble libre.", panneau: "AB4",
      q: "Je dois :", options: ["Marquer l'arrêt complet", "Ralentir sans m'arrêter puisque la voie est libre", "Utiliser l'avertisseur et passer"], bonnes: [0],
      explication: "Le stop impose un arrêt complet, même si personne n'arrive, comme sur la voie publique." },
    { id: "SECU-029", chapitre: "signalisation-gestes",
      q: "Mon chariot est équipé d'une alarme de recul. En marche arrière :", options: ["Je peux reculer sans regarder, les piétons sont prévenus", "Je dois quand même regarder dans le sens de la marche"], bonnes: [1],
      explication: "Les signaux sonores et lumineux préviennent les piétons mais ne dispensent jamais le conducteur de regarder dans le sens de déplacement." },
    { id: "SECU-030", chapitre: "signalisation-gestes", situation: "Le chef de manœuvre étend les deux bras à l'horizontale, paumes vers l'avant.",
      q: "Ce geste signifie :", options: ["Début, prise de commandement", "Arrêt d'urgence", "Fin des opérations"], bonnes: [0],
      explication: "Les deux bras étendus à l'horizontale, paumes vers l'avant, signalent le début de la manœuvre et la prise de commandement." },
    { id: "SECU-031", chapitre: "signalisation-gestes", situation: "Le chef de manœuvre lève le bras droit tendu vers le haut, paume vers l'avant, sans bouger.",
      q: "Ce geste signifie :", options: ["Monter", "Stop, fin du mouvement", "Avancer"], bonnes: [1],
      explication: "Le bras droit tendu vers le haut, paume vers l'avant et immobile, demande l'arrêt du mouvement. S'il décrit lentement un cercle, il demande de monter." },
    { id: "SECU-032", chapitre: "signalisation-gestes", situation: "Le guide lève les deux bras tendus vers le haut, paumes vers l'avant.",
      q: "Je dois :", options: ["Arrêter immédiatement la manœuvre", "Monter la charge", "Terminer le mouvement en cours puis m'arrêter"], bonnes: [0],
      explication: "Les deux bras levés, paumes vers l'avant, signalent un danger ou un arrêt d'urgence : on arrête immédiatement." },
    { id: "SECU-033", chapitre: "signalisation-gestes", situation: "Le chef de manœuvre joint les deux mains à hauteur de la poitrine.",
      q: "Ce geste signifie :", options: ["Fin des opérations", "Descendre", "Attention"], bonnes: [0],
      explication: "Les deux mains jointes à hauteur de la poitrine signalent la fin des opérations." },
    { id: "SECU-034", chapitre: "signalisation-gestes", situation: "Le bras droit du signaleur est tendu vers le bas, paume vers l'intérieur, et décrit lentement un cercle.",
      q: "Le signaleur me demande de :", options: ["Descendre", "Reculer", "M'arrêter"], bonnes: [0],
      explication: "Bras droit vers le bas, paume vers l'intérieur, décrivant lentement un cercle : c'est le geste « descendre »." },
    { id: "SECU-035", chapitre: "signalisation-gestes", situation: "Le guide, face à vous, a les deux bras repliés, paumes vers l'intérieur, et fait des mouvements lents des avant-bras vers son corps.",
      q: "Il me demande :", options: ["D'avancer vers lui", "De reculer", "De m'arrêter"], bonnes: [0],
      explication: "Avant-bras ramenés vers le corps, paumes vers l'intérieur : le guide demande d'avancer vers lui. Paumes vers l'extérieur avec un mouvement qui s'éloigne du corps, il demande de reculer." },
    { id: "SECU-036", chapitre: "signalisation-gestes", situation: "Pendant une manœuvre guidée, un collègue qui n'est pas le guide désigné vous fait le signe d'arrêt d'urgence.",
      q: "Je dois :", options: ["L'ignorer, je n'obéis qu'au guide", "M'arrêter immédiatement"], bonnes: [1],
      explication: "Le conducteur n'obéit qu'à un seul guide désigné, sauf pour l'arrêt d'urgence, qui doit être respecté quel que soit celui qui le donne." },
    { id: "SECU-037", chapitre: "signalisation-gestes", situation: "Le guide, face à vous, tend son bras droit à l'horizontale, paume vers le bas, et fait de petits mouvements dans cette direction.",
      q: "Le guide demande un déplacement :", options: ["Vers sa droite", "Vers ma droite"], bonnes: [0],
      explication: "Les indications de direction s'entendent par rapport au signaleur. Face à face, sa droite correspond à votre gauche." },
    { id: "SECU-038", chapitre: "signalisation-gestes",
      q: "Dans une zone de stockage tracée au sol, les palettes peuvent :", options: ["Déborder sur l'allée si la place manque", "Rester strictement dans la zone tracée"], bonnes: [1],
      explication: "Les zones de stockage ne doivent jamais empiéter sur les allées de circulation, qui doivent rester dégagées pour les engins et les piétons." },
    { id: "SECU-039", chapitre: "signalisation-gestes", situation: "Vous reculez guidé par un collègue. Une pile de cartons vous le cache soudain.",
      q: "Je dois :", options: ["Continuer à reculer lentement", "M'arrêter immédiatement", "Reprendre la manœuvre une fois le contact visuel rétabli"], bonnes: [1, 2],
      explication: "Sans contact visuel avec le guide, le conducteur s'arrête et ne reprend la manœuvre qu'après avoir rétabli ce contact." },
    { id: "SECU-040", chapitre: "signalisation-gestes",
      q: "Pendant une manœuvre, le guide doit se placer :", options: ["Dans la trajectoire de l'engin pour mieux voir", "Hors de la trajectoire, en vue du conducteur", "Là où il voit la zone de travail"], bonnes: [1, 2],
      explication: "Le guide voit la zone de travail, reste visible du conducteur et se tient hors de la trajectoire de l'engin et de la charge." },
    { id: "SECU-041", chapitre: "risques-prevention", situation: "Vous arrivez sur un chantier de terrassement pour conduire une chargeuse.",
      q: "Les EPI adaptés sont notamment :", options: ["Des chaussures de sécurité", "Un gilet haute visibilité", "Un casque pour sortir de l'engin"], bonnes: [0, 1, 2],
      explication: "Sur un chantier, chaussures de sécurité, vêtement haute visibilité et casque hors de la cabine sont les EPI de base, complétés selon les risques (protections auditives, gants)." },
    { id: "SECU-042", chapitre: "signalisation-gestes",
      q: "Le plan de circulation d'un site fixe notamment :", options: ["Les sens de circulation", "Les vitesses limites", "Les cheminements piétons", "Les horaires de pause"], bonnes: [0, 1, 2],
      explication: "Le plan de circulation organise les flux : sens, vitesses, zones interdites aux engins, cheminements piétons et points de croisement." }
  );
})();

/* ───────────── Thème R489 — Chariots de manutention automoteurs à conducteur porté ───────────── */
(function () {
  const P = window.PERMIS_COURS["caces"] = window.PERMIS_COURS["caces"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "r489-categories-technologie",
      theme: "R489",
      titre: "R489 : catégories de chariots et technologie",
      duree: 20,
      objectifs: [
        "Associer chaque catégorie R489 au type de chariot qu'elle couvre",
        "Savoir ce que permet la catégorie 7 (conduite hors production)",
        "Nommer les principaux organes d'un chariot élévateur",
        "Connaître les sources d'énergie et leurs risques propres",
        "Comprendre le comportement d'un chariot à roues arrière directrices"
      ],
      sections: [
        {
          titre: "Les catégories de la recommandation R489",
          contenu: `<p>La recommandation R489 couvre les <strong>chariots de manutention automoteurs à conducteur porté</strong>. Elle les classe en catégories ; il faut un CACES pour chaque catégorie conduite.</p>
<table>
<thead><tr><th>Catégorie</th><th>Chariots concernés</th></tr></thead>
<tbody>
<tr><td>1A</td><td>Transpalettes à conducteur porté et préparateurs de commandes au sol (faible hauteur de levée)</td></tr>
<tr><td>1B</td><td>Gerbeurs à conducteur porté</td></tr>
<tr><td>2A</td><td>Chariots à plateau porteur de capacité inférieure ou égale à 2 000 kg</td></tr>
<tr><td>2B</td><td>Chariots tracteurs industriels de capacité de traction inférieure ou égale à 25 000 kg</td></tr>
<tr><td>3</td><td>Chariots élévateurs en porte-à-faux de capacité inférieure ou égale à 6 000 kg</td></tr>
<tr><td>4</td><td>Chariots élévateurs en porte-à-faux de capacité supérieure à 6 000 kg</td></tr>
<tr><td>5</td><td>Chariots élévateurs à mât rétractable</td></tr>
<tr><td>6</td><td>Chariots élévateurs à poste de conduite élevable</td></tr>
<tr><td>7</td><td>Conduite hors production des chariots de toutes les catégories</td></tr>
</tbody>
</table>
<p>Le chariot « en porte-à-faux » (catégories 3 et 4) est le chariot élévateur frontal classique : la charge est portée <strong>en avant des roues avant</strong>, et elle est équilibrée par un <strong>contrepoids</strong> à l'arrière. Le chariot à <strong>mât rétractable</strong> (catégorie 5), très utilisé en entrepôt, a un mât qui avance et recule entre les longerons de stabilisation : la charge est transportée à l'intérieur de la base de l'engin, ce qui le rend compact.</p>
<p>Sur le chariot à <strong>poste de conduite élevable</strong> (catégorie 6), le conducteur monte avec la charge pour préparer des commandes en hauteur : il est exposé au risque de chute de hauteur et doit utiliser les protections prévues (garde-corps, portillons, harnais si la notice l'impose).</p>`
        },
        {
          titre: "La catégorie 7 et les engins hors R489",
          contenu: `<p>La <strong>catégorie 7</strong> permet la conduite <strong>hors production</strong> des chariots de toutes les catégories : les déplacer, les charger sur un porte-engins ou les en décharger, les conduire pour la maintenance, les essais ou la démonstration. Elle <strong>ne permet pas</strong> de faire de la manutention de charges en production.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un mécanicien titulaire de la seule catégorie 7 peut amener un chariot de catégorie 4 à l'atelier pour une réparation, puis faire les essais. Il ne peut pas l'utiliser pour décharger un camion.</div>
<p>Certains engins proches ne relèvent pas de la R489 :</p>
<ul>
<li>les gerbeurs et transpalettes à <strong>conducteur accompagnant</strong> (timon) relèvent de la <strong>R485</strong> ;</li>
<li>les <strong>chariots de manutention tout-terrain</strong>, y compris les chariots télescopiques, relèvent de la <strong>R482 catégorie F</strong> ;</li>
<li>les nacelles de travail en hauteur relèvent de la <strong>R486</strong>.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la catégorie 3 ne couvre pas la catégorie 5, ni l'inverse : un frontal en porte-à-faux et un chariot à mât rétractable ont des comportements différents. Chaque catégorie s'obtient séparément.</div>`
        },
        {
          titre: "Les organes du chariot élévateur",
          contenu: `<table>
<thead><tr><th>Organe</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td>Mât</td><td>Structure verticale qui guide le tablier lors de la levée ; il peut être simple, duplex ou triplex (plusieurs sections coulissantes)</td></tr>
<tr><td>Tablier (porte-fourches)</td><td>Pièce qui monte et descend le long du mât et sur laquelle sont accrochées les fourches</td></tr>
<tr><td>Fourches</td><td>Bras porteurs de la charge ; elles comportent un talon (partie coudée) et une lame</td></tr>
<tr><td>Dosseret d'appui de charge</td><td>Grille au-dessus du tablier qui empêche la charge de tomber vers le conducteur</td></tr>
<tr><td>Chaînes de levage</td><td>Transmettent l'effort des vérins de levée au tablier</td></tr>
<tr><td>Vérins de levage et d'inclinaison</td><td>Lèvent le tablier et inclinent le mât vers l'avant ou vers l'arrière</td></tr>
<tr><td>Contrepoids</td><td>Masse à l'arrière du chariot qui équilibre la charge</td></tr>
<tr><td>Protège-conducteur</td><td>Toit de protection contre la chute d'objets</td></tr>
<tr><td>Dispositif de retenue</td><td>Ceinture, portillons ou cabine qui maintiennent le conducteur en cas de renversement</td></tr>
</tbody>
</table>
<p>Sur un chariot frontal, les <strong>roues avant sont porteuses</strong> (elles supportent la charge) et les <strong>roues arrière sont directrices</strong>. Conséquence : en virage, c'est l'<strong>arrière du chariot qui balaie</strong> largement l'espace. Un piéton ou un rayonnage situé à côté de l'arrière de l'engin peut être heurté.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> en braquant, vérifiez toujours l'espace libre à l'arrière et sur les côtés. Le contrepoids pivote vers l'extérieur du virage.</div>`
        },
        {
          titre: "Les énergies : électrique, thermique, gaz",
          contenu: `<table>
<thead><tr><th>Énergie</th><th>Usage habituel</th><th>Risques principaux</th></tr></thead>
<tbody>
<tr><td>Électrique (batterie)</td><td>Intérieur des bâtiments, entrepôts</td><td>Hydrogène explosif dégagé pendant la charge, électrolyte corrosif, poids de la batterie, court-circuit</td></tr>
<tr><td>Thermique diesel</td><td>Extérieur, cours, parcs</td><td>Gaz d'échappement toxiques (monoxyde de carbone), bruit, incendie lors du remplissage</td></tr>
<tr><td>Gaz de pétrole liquéfié (GPL)</td><td>Extérieur ou locaux bien ventilés</td><td>Fuite de gaz, explosion, gaz plus lourd que l'air qui s'accumule en partie basse, brûlure par le froid lors d'une fuite</td></tr>
</tbody>
</table>
<p>Un chariot thermique ne doit pas être utilisé dans un local fermé ou mal ventilé, à cause des gaz d'échappement. Le chariot électrique est silencieux : les piétons l'entendent mal arriver, ce qui impose une vigilance accrue.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> électrique = hydrogène à la charge ; diesel = gaz d'échappement ; GPL = gaz lourd qui s'accumule dans les points bas.</div>`
        },
        {
          titre: "Les dispositifs de sécurité de l'engin",
          contenu: `<p>Un chariot conforme comporte plusieurs dispositifs de sécurité que le conducteur doit connaître et ne jamais neutraliser :</p>
<ul>
<li>le <strong>frein de service</strong> et le <strong>frein de stationnement</strong> (frein de parc) ;</li>
<li>l'<strong>avertisseur sonore</strong>, les feux, éventuellement un gyrophare et une alarme de recul ;</li>
<li>le <strong>protège-conducteur</strong> et le <strong>dosseret d'appui de charge</strong> ;</li>
<li>le <strong>dispositif de retenue</strong> du conducteur ;</li>
<li>la <strong>plaque de charge</strong> lisible ;</li>
<li>les <strong>clés ou codes</strong> de démarrage, qui empêchent l'utilisation par une personne non autorisée ;</li>
<li>l'<strong>arrêt d'urgence</strong> (coupure batterie sur un chariot électrique).</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> neutraliser un dispositif de sécurité (shunter un contacteur de siège, retirer un protège-conducteur, ajouter un lest sur le contrepoids pour lever plus lourd) est strictement interdit et engage la responsabilité de celui qui le fait.</div>`
        }
      ],
      points_cles: [
        "1A transpalettes à conducteur porté, 1B gerbeurs à conducteur porté",
        "2A chariots à plateau porteur (≤ 2 000 kg), 2B tracteurs industriels (≤ 25 000 kg de traction)",
        "3 frontaux en porte-à-faux ≤ 6 000 kg, 4 frontaux > 6 000 kg",
        "5 mât rétractable, 6 poste de conduite élevable, 7 conduite hors production",
        "Chariots tout-terrain et télescopiques : R482 catégorie F ; gerbeurs à conducteur accompagnant : R485",
        "Frontal : roues avant porteuses, roues arrière directrices, l'arrière balaie en virage",
        "Électrique = hydrogène à la charge ; thermique = gaz d'échappement ; GPL = gaz plus lourd que l'air",
        "Ne jamais neutraliser un dispositif de sécurité ni ajouter de contrepoids"
      ]
    },
    {
      id: "r489-stabilite-plaque-charge",
      theme: "R489",
      titre: "R489 : stabilité, plaque de charge et centre de gravité",
      duree: 25,
      objectifs: [
        "Comprendre l'équilibre entre la charge et le contrepoids",
        "Lire une plaque de charge et un abaque",
        "Calculer de façon approchée la capacité pour un centre de gravité éloigné",
        "Connaître le triangle de stabilité et les causes de renversement",
        "Savoir comment réagir en cas de renversement"
      ],
      sections: [
        {
          titre: "Le principe de l'équilibre",
          contenu: `<p>Un chariot élévateur frontal fonctionne comme une <strong>balance</strong> : le <strong>pivot</strong> est l'<strong>essieu avant</strong>. D'un côté, la charge portée en avant des roues ; de l'autre, le poids du chariot et de son <strong>contrepoids</strong>. Tant que le poids du chariot l'emporte, le chariot reste stable ; si la charge l'emporte, l'arrière se soulève et le chariot bascule vers l'avant.</p>
<p>Ce qui compte n'est pas seulement le poids de la charge, mais aussi <strong>sa distance</strong> par rapport aux roues avant. Plus le <strong>centre de gravité</strong> de la charge est éloigné du talon des fourches, plus son effet de basculement (son <strong>moment</strong>) est important. Une charge légère mais très longue peut donc faire basculer un chariot qui soulèverait sans problème une charge plus lourde et compacte.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> c'est le principe de la balançoire à bascule : un enfant assis tout au bout fait basculer un adulte assis près du centre.</div>
<p>Le <strong>centre de gravité</strong> d'une charge est le point où l'on peut considérer que tout son poids est concentré. Pour une charge homogène posée sur une palette, il est au milieu. Pour une charge hétérogène (machine, caisse mal remplie), il peut être décentré : il faut alors s'informer avant de lever.</p>`
        },
        {
          titre: "La plaque de charge",
          contenu: `<p>Chaque chariot porte une <strong>plaque de charge</strong> (plaque de capacité), fixée par le constructeur et visible depuis le poste de conduite. Elle indique :</p>
<ul>
<li>la <strong>capacité nominale</strong> : la charge maximale que le chariot peut lever à une hauteur donnée, pour un <strong>centre de charge</strong> de référence (par exemple 500 mm du talon des fourches) ;</li>
<li>les <strong>capacités réduites</strong> selon la hauteur de levée et la distance du centre de gravité, souvent sous forme de tableau ou d'<strong>abaque</strong> ;</li>
<li>le cas échéant, les capacités avec l'<strong>accessoire</strong> monté (pince, potence, rallonges de fourches…).</li>
</ul>
<p>Il ne faut <strong>jamais dépasser</strong> la capacité indiquée. La plaque constructeur porte aussi l'identification de l'engin (marque, type, numéro de série, masse à vide) et le marquage CE.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la capacité nominale n'est valable que pour le centre de charge de référence. Si le centre de gravité de la charge est plus éloigné, ou si la charge est levée plus haut, la capacité admissible <strong>diminue</strong>.</div>
<div class="encart" data-type="danger"><strong>Attention :</strong> un accessoire ajoute son propre poids et éloigne souvent la charge : il réduit la capacité. Sans plaque de charge correspondant à l'accessoire monté, on ne l'utilise pas.</div>`
        },
        {
          titre: "Lire un abaque et faire un calcul approché",
          contenu: `<p>L'<strong>abaque</strong> est un graphique (ou un tableau) qui donne, pour chaque distance du centre de gravité, la charge maximale admissible. On cherche la distance du centre de gravité de la charge, puis on lit la capacité correspondante. Si la valeur exacte n'y figure pas, on prend la <strong>valeur la plus défavorable</strong> (la distance supérieure).</p>
<p>En l'absence d'abaque, on utilise un <strong>calcul simplifié</strong> qui donne une valeur prudente :</p>
<p><strong>Capacité admissible = capacité nominale × centre de charge nominal ÷ distance réelle du centre de gravité</strong></p>
<table>
<thead><tr><th>Capacité nominale</th><th>Centre de charge nominal</th><th>Centre de gravité réel</th><th>Capacité admissible (approchée)</th></tr></thead>
<tbody>
<tr><td>2 000 kg</td><td>500 mm</td><td>500 mm</td><td>2 000 kg</td></tr>
<tr><td>2 000 kg</td><td>500 mm</td><td>1 000 mm</td><td>1 000 kg</td></tr>
<tr><td>2 500 kg</td><td>500 mm</td><td>600 mm</td><td>environ 2 080 kg</td></tr>
<tr><td>1 500 kg</td><td>600 mm</td><td>900 mm</td><td>1 000 kg</td></tr>
</tbody>
</table>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> vous devez lever une palette de 1 200 kg dont le centre de gravité est à 600 mm. Votre chariot a une capacité nominale de 1 600 kg à 500 mm. Capacité approchée : 1 600 × 500 ÷ 600 ≈ 1 333 kg. La palette de 1 200 kg peut être levée, sous réserve de la hauteur de levée indiquée sur la plaque.</div>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> centre de gravité deux fois plus loin = capacité environ deux fois plus faible. En cas de doute sur le poids ou le centre de gravité, on ne lève pas.</div>`
        },
        {
          titre: "Le triangle de stabilité",
          contenu: `<p>La plupart des chariots frontaux ont un <strong>essieu arrière oscillant</strong>, articulé en son milieu. Le chariot repose donc en réalité sur <strong>trois points</strong> : les deux roues avant et l'articulation de l'essieu arrière. Ces trois points forment le <strong>triangle de stabilité</strong>.</p>
<p>Tant que le <strong>centre de gravité de l'ensemble</strong> (chariot + charge) reste à l'intérieur de ce triangle, le chariot est stable. S'il en sort, le chariot se renverse.</p>
<ul>
<li>Lever la charge fait <strong>monter</strong> le centre de gravité : le chariot devient beaucoup plus sensible au moindre déséquilibre.</li>
<li>Incliner le mât vers l'avant, charge levée, déplace le centre de gravité <strong>vers l'avant</strong> : risque de basculement frontal.</li>
<li>Tourner, surtout vite, crée une force qui pousse le centre de gravité <strong>vers l'extérieur du virage</strong> : risque de renversement latéral, d'autant plus fort que le chariot est <strong>à vide</strong> (le centre de gravité est alors près de la pointe arrière du triangle) ou que la charge est haute.</li>
<li>Rouler en <strong>dévers</strong> (pente transversale) ou sur un sol déformé déplace aussi le centre de gravité vers le côté.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un chariot à vide n'est pas « plus stable » en virage. Son centre de gravité est près de l'arrière, à la pointe étroite du triangle : un virage pris trop vite à vide peut le renverser sur le côté.</div>`
        },
        {
          titre: "Causes de renversement et conduite à tenir",
          contenu: `<p>Les causes de renversement les plus fréquentes sont :</p>
<ul>
<li>une <strong>vitesse excessive en virage</strong> ou un braquage brutal ;</li>
<li>la <strong>circulation avec la charge haute</strong> ;</li>
<li>une <strong>surcharge</strong> ou un centre de gravité trop éloigné ;</li>
<li>la circulation <strong>en travers d'une pente</strong> ou un demi-tour en pente ;</li>
<li>un <strong>sol défectueux</strong> (trou, bordure, plaque d'égout), une roue qui tombe d'un bord de quai ;</li>
<li>un <strong>freinage brutal</strong> en marche avant avec une charge haute.</li>
</ul>
<p>Si le chariot commence à se renverser, il ne faut <strong>surtout pas sauter</strong> : le conducteur serait écrasé par le protège-conducteur ou le mât. Il faut :</p>
<ol>
<li>rester dans le poste de conduite, ceinture attachée ;</li>
<li>tenir fermement le volant ;</li>
<li>s'arc-bouter avec les pieds ;</li>
<li>se pencher du côté <strong>opposé</strong> à la chute.</li>
</ol>
<div class="encart" data-type="danger"><strong>Attention :</strong> ajouter un lest ou faire monter une personne sur le contrepoids pour compenser une charge trop lourde est interdit et extrêmement dangereux.</div>`
        }
      ],
      points_cles: [
        "Chariot frontal = balance dont le pivot est l'essieu avant",
        "Le moment de la charge dépend de son poids et de la distance de son centre de gravité",
        "La plaque de charge donne la capacité pour un centre de charge de référence ; plus loin ou plus haut, la capacité baisse",
        "Calcul approché : capacité nominale × centre nominal ÷ centre réel",
        "Un accessoire réduit la capacité et doit avoir sa propre plaque de charge",
        "Triangle de stabilité : deux roues avant + articulation de l'essieu arrière",
        "Charge haute, virage rapide, dévers et chariot à vide en virage : risques de renversement",
        "En cas de renversement : ne pas sauter, rester attaché, s'agripper, se pencher à l'opposé de la chute"
      ]
    },
    {
      id: "r489-circulation",
      theme: "R489",
      titre: "R489 : règles de circulation",
      duree: 20,
      objectifs: [
        "Adopter la position de transport de la charge",
        "Circuler en adaptant sa vitesse et en gardant la visibilité",
        "Monter et descendre une pente, à vide et en charge",
        "Franchir quais, ponts de liaison, portes et passages étroits en sécurité",
        "Connaître les interdits absolus de la circulation en chariot"
      ],
      sections: [
        {
          titre: "La position de transport",
          contenu: `<p>En circulation, la charge doit toujours être dans la <strong>position de transport</strong> :</p>
<ul>
<li>fourches et charge en <strong>position basse</strong>, juste assez haut pour ne pas toucher le sol ni les obstacles (une quinzaine de centimètres environ) ;</li>
<li><strong>mât incliné vers l'arrière</strong>, pour plaquer la charge contre le dosseret ;</li>
<li>charge bien engagée et calée contre le talon des fourches.</li>
</ul>
<p>À vide, on circule aussi <strong>fourches basses</strong> : des fourches levées sont dangereuses pour les piétons et peuvent accrocher des installations.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> on ne lève ni ne descend une charge en roulant. Levée et descente se font <strong>chariot arrêté</strong>, frein serré, face à l'emplacement.</div>`
        },
        {
          titre: "Vitesse, visibilité, piétons",
          contenu: `<p>Le cariste adapte sa vitesse à l'état du sol, à la charge, à la visibilité, à la densité de circulation et aux limitations du plan de circulation <span class="panneau" data-code="B14:10"></span>. Il ralentit aux <strong>intersections</strong>, dans les <strong>virages</strong>, aux <strong>sorties de bâtiment</strong> et à l'approche des <strong>piétons</strong>.</p>
<ul>
<li>Le conducteur regarde <strong>toujours dans le sens de la marche</strong>.</li>
<li>Si la charge <strong>masque la vue vers l'avant</strong>, il circule en <strong>marche arrière</strong> en regardant derrière lui, ou il se fait guider.</li>
<li>Aux endroits sans visibilité, il utilise l'avertisseur sonore et s'arrête si nécessaire.</li>
<li>Il garde une distance suffisante avec le véhicule qui le précède et ne double pas un autre chariot aux intersections ni dans les endroits sans visibilité.</li>
<li>Il ne transporte <strong>jamais de passager</strong>, sauf si le chariot dispose d'un siège prévu pour cela.</li>
<li>Il garde bras, jambes et tête <strong>à l'intérieur</strong> du gabarit du chariot.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> le piéton ne voit pas toujours le chariot et ne l'entend pas forcément (chariot électrique silencieux). C'est au cariste d'anticiper : il ne compte jamais sur le piéton pour s'écarter.</div>`
        },
        {
          titre: "Les pentes",
          contenu: `<p>En pente, la règle est simple : la <strong>charge doit toujours être côté amont</strong> (du côté du haut de la pente), pour qu'elle ne glisse pas et ne fasse pas basculer le chariot.</p>
<table>
<thead><tr><th>Situation</th><th>Montée</th><th>Descente</th></tr></thead>
<tbody>
<tr><td>Chariot chargé</td><td>En <strong>marche avant</strong> (charge devant, vers le haut)</td><td>En <strong>marche arrière</strong> (charge derrière le conducteur, vers le haut)</td></tr>
<tr><td>Chariot à vide</td><td>En <strong>marche arrière</strong> (fourches vers le bas)</td><td>En <strong>marche avant</strong> (fourches vers le bas)</td></tr>
</tbody>
</table>
<p>À vide, ce sont les fourches qui doivent être côté aval : le contrepoids, la partie lourde, reste ainsi côté amont.</p>
<ul>
<li>Ne jamais <strong>tourner</strong>, faire demi-tour ou circuler <strong>en travers</strong> d'une pente.</li>
<li>Ne jamais prendre ni déposer une charge en pente.</li>
<li>Respecter la pente maximale admise par le constructeur et rouler lentement, mât incliné vers l'arrière.</li>
<li>Ne pas stationner en pente ; en cas d'arrêt forcé, serrer le frein de parc et caler les roues.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « charge en haut » est la seule chose à retenir. Chargé, je descends donc <strong>en marche arrière</strong> ; à vide, je monte <strong>en marche arrière</strong>.</div>`
        },
        {
          titre: "Sols, quais, portes et passages",
          contenu: `<ul>
<li>Avant de rouler sur un plancher, une passerelle ou un monte-charge, vérifier qu'il supporte le <strong>poids total</strong> : chariot + charge + conducteur.</li>
<li>Franchir un <strong>pont de liaison</strong> ou un niveleur de quai lentement et perpendiculairement, après avoir vérifié qu'il est bien en place.</li>
<li>Ne jamais circuler trop près d'un <strong>bord de quai</strong> : une roue dans le vide entraîne le renversement.</li>
<li>Franchir les <strong>portes</strong> lentement, en vérifiant la hauteur disponible (mât, protège-conducteur, charge) et la présence de piétons de l'autre côté.</li>
<li>Franchir les <strong>rails</strong>, caniveaux ou seuils en biais pour éviter le choc, et à faible vitesse.</li>
<li>Éviter les sols mouillés, huileux ou encombrés ; signaler les trous et déformations.</li>
</ul>
<p>À l'<strong>extérieur</strong>, la pluie, le gel, les feuilles mortes ou le gravillon rendent le sol glissant et allongent les distances de freinage : le cariste réduit sa vitesse et évite les manœuvres brusques. La nuit ou par mauvaise visibilité, il allume les feux de l'engin et ne circule que dans les zones éclairées prévues.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> pour entrer dans un monte-charge, le cariste vérifie la charge maximale autorisée de l'appareil, entre fourches en avant, coupe le contact et serre le frein de parc. Personne d'autre ne monte avec lui.</div>`
        },
        {
          titre: "Les interdits absolus",
          contenu: `<ul>
<li>Transporter ou lever une <strong>personne</strong> sur les fourches, sur une palette ou sur la charge.</li>
<li>Laisser une personne passer ou stationner <strong>sous une charge levée</strong> ou sous les fourches.</li>
<li>Circuler <strong>charge haute</strong> ou avec le mât incliné vers l'avant.</li>
<li>Conduire sans <strong>autorisation de conduite</strong>, ou un chariot d'une catégorie pour laquelle on n'est pas formé.</li>
<li>Utiliser son téléphone en conduisant.</li>
<li>Pousser ou tracter une charge ou un véhicule avec les fourches, sauf si le chariot est prévu pour cela.</li>
<li>Quitter le poste de conduite charge levée.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> personne sous la charge, personne sur les fourches, jamais de charge haute en roulant.</div>
<h4>Charges longues, volumineuses ou instables</h4>
<p>Une charge longue (profilés, tubes, panneaux) dépasse largement de part et d'autre du chariot : en virage, ses extrémités balaient un espace bien plus large que l'engin. Le cariste roule alors très lentement, vérifie le dégagement des deux côtés et se fait guider dans les passages étroits. Une charge volumineuse offre aussi une prise au vent à l'extérieur. Une charge liquide (cuve, fût partiellement rempli) peut se déplacer pendant le freinage : on évite les accélérations et freinages brusques. Dans tous les cas, si la charge ne peut pas être transportée de façon stable, on la fait arrimer ou reconditionner avant de partir.</p>`
        }
      ],
      points_cles: [
        "Position de transport : charge basse, mât incliné vers l'arrière",
        "Lever et descendre uniquement chariot à l'arrêt",
        "Regarder dans le sens de la marche ; charge masquant la vue : marche arrière ou guidage",
        "En pente, la charge toujours côté amont : chargé, monter en marche avant et descendre en marche arrière",
        "À vide en pente : monter en marche arrière, descendre en marche avant",
        "Jamais de virage, de demi-tour ni de circulation en travers d'une pente",
        "Vérifier la résistance des planchers, ponts de liaison et monte-charges",
        "Aucun passager, personne sous la charge, aucune personne levée sur les fourches"
      ],
      panneaux: ["B14:10"]
    }
  );

  P.chapitres.push(
    {
      id: "r489-manutention-stockage",
      theme: "R489",
      titre: "R489 : prise et dépose de charge, gerbage, palettiers et chargement des camions",
      duree: 25,
      objectifs: [
        "Préparer la prise d'une charge : poids, centre de gravité, état de la palette",
        "Prendre et déposer une charge au sol et en hauteur dans le bon ordre",
        "Gerber et stocker en palettier en respectant les capacités",
        "Charger et décharger un camion à quai en sécurité",
        "Utiliser un accessoire de manutention en connaissant ses effets"
      ],
      sections: [
        {
          titre: "Avant de prendre une charge",
          contenu: `<p>Avant toute manutention, le cariste se pose trois questions :</p>
<ol>
<li><strong>Quel est le poids de la charge ?</strong> Il le trouve sur l'étiquette, le bon de livraison ou le colis. S'il ne le connaît pas, il se renseigne : on ne lève pas une charge « pour voir ».</li>
<li><strong>Où est son centre de gravité ?</strong> Charge homogène ou non, longue, haute, décentrée ?</li>
<li><strong>Mon chariot peut-il la lever à la hauteur voulue ?</strong> Il compare avec la plaque de charge et l'abaque.</li>
</ol>
<p>Il vérifie aussi l'<strong>état de la palette</strong> (planches cassées, clous, déformation) et la <strong>stabilité de la charge</strong> (filmage, cerclage, colis bien empilés). Une palette en mauvais état ou une charge instable doit être reconditionnée avant d'être levée.</p>
<p>Enfin, il règle l'<strong>écartement des fourches</strong> au maximum possible compatible avec la palette, symétriquement par rapport à l'axe du chariot, pour bien répartir la charge.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une charge dont on ne connaît pas le poids ne se « teste » pas en la soulevant un peu : si l'arrière du chariot se soulève, il est déjà trop tard. On cherche l'information avant.</div>`
        },
        {
          titre: "Prendre une charge",
          contenu: `<p>La prise de charge suit toujours le même ordre :</p>
<ol>
<li>Arriver <strong>perpendiculairement</strong> à la charge, lentement, fourches basses.</li>
<li>S'arrêter devant la charge, serrer le frein.</li>
<li>Mettre les fourches <strong>horizontales</strong> et à la bonne hauteur (au niveau des ouvertures de la palette).</li>
<li>Avancer pour <strong>engager les fourches à fond</strong>, jusqu'à ce que la charge touche le talon des fourches ou le dosseret.</li>
<li>Lever légèrement la charge pour la décoller de son support.</li>
<li><strong>Incliner le mât vers l'arrière</strong>.</li>
<li>Reculer en vérifiant l'espace derrière, puis, une fois dégagé, <strong>descendre la charge en position de transport</strong>.</li>
</ol>
<p>Les fourches doivent dépasser assez la charge pour la porter sur toute sa profondeur, sans dépasser au point de toucher une charge située derrière.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> une charge prise du bout des fourches éloigne le centre de gravité et réduit fortement la capacité. Elle risque aussi de basculer.</div>`
        },
        {
          titre: "Déposer une charge et gerber",
          contenu: `<p>Pour déposer une charge, en particulier en hauteur sur une pile (gerbage) ou dans un palettier :</p>
<ol>
<li>Arriver lentement, charge en position de transport, <strong>perpendiculairement</strong> à l'emplacement, et s'arrêter tout près.</li>
<li>Serrer le frein, puis <strong>lever la charge</strong> à la hauteur voulue, chariot arrêté. On peut redresser le mât à la verticale à ce moment.</li>
<li>Avancer lentement jusqu'à l'aplomb de l'emplacement.</li>
<li>Mettre les fourches <strong>horizontales</strong>, puis descendre la charge pour la poser.</li>
<li>Dégager les fourches en reculant, en vérifiant derrière.</li>
<li>Descendre les fourches en position basse <strong>avant</strong> de repartir.</li>
</ol>
<ul>
<li>On ne gerbe que des charges <strong>gerbables</strong>, stables, de dimensions compatibles, sur un sol plat et résistant.</li>
<li>La hauteur de gerbage est limitée par la stabilité de la pile et par les consignes du site.</li>
<li>Personne ne doit se trouver dans l'allée ou de l'autre côté du rayonnage pendant la manœuvre.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> monter la charge chariot arrêté, avancer, poser, reculer, puis seulement descendre les fourches.</div>`
        },
        {
          titre: "Les palettiers",
          contenu: `<p>Le palettier (rayonnage à palettes) est un équipement de stockage dont la résistance est limitée. Chaque palettier doit porter une <strong>plaque de charge</strong> qui indique la charge maximale par niveau (par alvéole ou par paire de lisses) et par échelle.</p>
<ul>
<li>Respecter la <strong>charge maximale par alvéole</strong> et la répartition prévue.</li>
<li>Déposer la palette bien centrée, sans la pousser contre le fond ni la faire dépasser dans l'allée.</li>
<li>Ne jamais heurter les échelles (montants) ni les lisses : un montant déformé affaiblit tout le rayonnage.</li>
<li>Tout choc ou toute déformation doit être <strong>signalé immédiatement</strong> ; un emplacement endommagé ne doit plus être chargé tant qu'il n'a pas été vérifié.</li>
<li>On ne monte jamais sur un palettier, ni sur les fourches pour atteindre un emplacement.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> en sortant une palette, vous accrochez une lisse qui se déforme. Vous posez la charge en sécurité, signalez immédiatement le dommage à votre responsable et n'utilisez plus cet emplacement.</div>`
        },
        {
          titre: "Chargement et déchargement des camions",
          contenu: `<p>Avant d'entrer dans un camion ou une remorque à quai :</p>
<ul>
<li>le véhicule est <strong>immobilisé</strong> : frein de stationnement serré, moteur arrêté, cales ou système de blocage à quai en place, selon le protocole de sécurité du site ;</li>
<li>une <strong>semi-remorque dételée</strong> repose sur ses béquilles et, si les consignes le prévoient, sur une béquille supplémentaire à l'avant pour éviter le basculement ;</li>
<li>le <strong>niveleur</strong> ou le <strong>pont de liaison</strong> est correctement posé et adapté au poids ;</li>
<li>le <strong>plancher</strong> du véhicule est en bon état et supporte le chariot chargé ;</li>
<li>le chauffeur du camion se tient hors de la zone de manœuvre.</li>
</ul>
<p>On circule lentement dans le véhicule, on <strong>répartit les charges</strong> pour équilibrer le chargement et on respecte l'ordre de chargement prévu. Un chargement latéral depuis le sol (camion bâché) se fait chariot perpendiculaire au plateau, sur un sol plat.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> le départ intempestif d'un camion pendant que le chariot est à l'intérieur ou sur le pont de liaison provoque des chutes mortelles. On ne commence jamais sans être sûr que le véhicule est immobilisé.</div>
<h4>Les accessoires</h4>
<p>Potence, pince, rallonges de fourches, éperon : un accessoire doit être <strong>compatible</strong> avec le chariot, correctement fixé, et le chariot doit disposer d'une <strong>plaque de charge</strong> tenant compte de l'accessoire. Avec une potence, la charge est <strong>suspendue</strong> : elle peut se balancer, ce qui impose une conduite très lente et sans à-coups.</p>`
        }
      ],
      points_cles: [
        "Connaître le poids et le centre de gravité de la charge avant de la lever",
        "Fourches écartées au maximum compatible avec la palette, engagées à fond",
        "Prise : arriver perpendiculaire, fourches horizontales, engager, décoller, incliner le mât en arrière, reculer, descendre",
        "Dépose en hauteur : lever chariot à l'arrêt, avancer, poser, reculer, puis descendre les fourches",
        "Respecter la plaque de charge du palettier et signaler tout choc ou déformation",
        "Camion immobilisé et calé, pont de liaison en place, plancher vérifié avant d'entrer",
        "Un accessoire réduit la capacité et exige une plaque de charge adaptée"
      ]
    },
    {
      id: "r489-verifications-energie-fin-poste",
      theme: "R489",
      titre: "R489 : prise de poste, énergie et fin de poste",
      duree: 20,
      objectifs: [
        "Réaliser les vérifications de prise de poste",
        "Savoir réagir face à une anomalie",
        "Charger une batterie en sécurité",
        "Faire le plein ou changer une bouteille de GPL sans risque",
        "Stationner le chariot correctement en fin de poste"
      ],
      sections: [
        {
          titre: "Les vérifications de prise de poste",
          contenu: `<p>À chaque prise de poste, le conducteur contrôle son chariot avant de l'utiliser.</p>
<table>
<thead><tr><th>Élément</th><th>Ce qu'on vérifie</th></tr></thead>
<tbody>
<tr><td>Documents</td><td>Plaque de charge lisible, VGP à jour, notice disponible</td></tr>
<tr><td>Tour de l'engin</td><td>Absence de fuite (huile, carburant, électrolyte), pneus ou bandages en bon état, absence de choc visible</td></tr>
<tr><td>Fourches et tablier</td><td>Pas de fissure, de déformation ni d'usure anormale ; verrous des fourches en place</td></tr>
<tr><td>Mât et chaînes</td><td>Chaînes tendues de façon égale, graissées, sans maillon abîmé ; mât sans déformation</td></tr>
<tr><td>Niveaux</td><td>Huile moteur, liquide de refroidissement, carburant ou charge de la batterie, huile hydraulique</td></tr>
<tr><td>Freins</td><td>Frein de service et frein de stationnement efficaces</td></tr>
<tr><td>Direction</td><td>Pas de jeu anormal</td></tr>
<tr><td>Commandes hydrauliques</td><td>Levée, descente, inclinaison et accessoires fonctionnent correctement, sans à-coups</td></tr>
<tr><td>Sécurité</td><td>Avertisseur, feux, gyrophare, alarme de recul, dispositif de retenue, protège-conducteur, arrêt d'urgence</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la vérification de prise de poste est faite par le conducteur, chaque jour d'utilisation. Elle complète, sans les remplacer, les VGP semestrielles.</div>`
        },
        {
          titre: "En cas d'anomalie",
          contenu: `<p>Si le conducteur constate une anomalie touchant la sécurité (freins, direction, fourches fissurées, fuite importante, chaîne abîmée, dispositif de retenue hors service…), il doit :</p>
<ol>
<li><strong>ne pas utiliser</strong> le chariot, ou l'arrêter dès que possible dans un endroit sûr ;</li>
<li><strong>signaler</strong> l'anomalie à sa hiérarchie, selon la procédure du site (fiche, cahier de suivi) ;</li>
<li>identifier le chariot comme hors service si les consignes le prévoient (étiquette, retrait de la clé).</li>
</ol>
<p>Le conducteur <strong>ne répare pas lui-même</strong> l'engin, sauf petites opérations prévues par les consignes et pour lesquelles il est formé (par exemple compléter un niveau). Les réparations sont confiées à un personnel qualifié.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « je l'utilise en faisant attention » n'est jamais la bonne réponse face à un défaut de sécurité. On arrête et on signale.</div>
<p>Une anomalie peut aussi apparaître <strong>en cours de poste</strong> : bruit inhabituel, voyant d'alerte allumé, direction plus dure, freinage moins efficace, odeur de brûlé, fumée. Le réflexe est le même : poser la charge si c'est possible sans danger, s'arrêter dans un endroit qui ne gêne pas la circulation, couper le moteur ou l'énergie, puis prévenir. En cas de début d'incendie, le conducteur coupe l'énergie, s'éloigne, donne l'alerte et n'utilise l'extincteur que s'il a été formé et si cela ne le met pas en danger.</p>`
        },
        {
          titre: "La batterie des chariots électriques",
          contenu: `<p>Pendant la charge, les batteries au plomb dégagent de l'<strong>hydrogène</strong>, un gaz très <strong>explosif</strong>. La charge se fait donc :</p>
<ul>
<li>dans un <strong>local ou un emplacement réservé et ventilé</strong>, signalé ;</li>
<li>à l'écart de toute <strong>flamme, étincelle</strong> ou point chaud : interdiction de fumer ;</li>
<li>capot ou coffre de batterie <strong>ouvert</strong> si la notice le prévoit, pour évacuer les gaz ;</li>
<li>en <strong>arrêtant le chargeur avant de débrancher</strong> la prise de la batterie (et inversement, brancher avant de mettre en marche), pour éviter l'étincelle à la déconnexion.</li>
</ul>
<p>L'<strong>électrolyte</strong> (acide sulfurique dilué) est corrosif : lunettes et gants sont nécessaires pour toute intervention, et un point d'eau doit être à proximité pour le rinçage. Le complément de niveau se fait avec de l'<strong>eau déminéralisée</strong>, selon les consignes du constructeur.</p>
<p>La batterie est très lourde et participe au <strong>contrepoids</strong> : on ne la remplace jamais par une batterie plus légère que celle prévue par le constructeur.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> ne jamais poser d'outil métallique sur une batterie : il peut créer un court-circuit entre deux bornes, avec étincelles et brûlures.</div>`
        },
        {
          titre: "Carburant et gaz",
          contenu: `<p>Pour un chariot <strong>thermique diesel</strong>, le plein se fait <strong>moteur arrêté</strong>, à l'emplacement prévu, sans fumer, en évitant les débordements. On n'utilise pas un chariot thermique dans un local mal ventilé à cause du <strong>monoxyde de carbone</strong>.</p>
<p>Pour un chariot au <strong>GPL</strong> :</p>
<ul>
<li>la bouteille se change <strong>à l'extérieur</strong> ou dans un endroit bien ventilé, moteur arrêté, loin de toute flamme ;</li>
<li>on <strong>ferme le robinet</strong> de la bouteille avant de la débrancher ;</li>
<li>on porte des <strong>gants</strong> : le gaz qui s'échappe provoque des brûlures par le froid ;</li>
<li>on vérifie l'absence de fuite après le branchement, selon la méthode prévue (jamais avec une flamme) ;</li>
<li>le GPL étant <strong>plus lourd que l'air</strong>, on ne stationne pas le chariot près d'une fosse, d'un sous-sol, d'une bouche d'égout ou d'une cave où le gaz pourrait s'accumuler.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> GPL = gaz lourd ; il s'accumule dans les points bas et peut exploser. Robinet fermé pour les stationnements prolongés, selon les consignes du site.</div>`
        },
        {
          titre: "La fin de poste",
          contenu: `<p>En fin de poste, ou chaque fois qu'il quitte son chariot, le conducteur le laisse en sécurité :</p>
<ul>
<li>stationnement sur l'<strong>emplacement prévu</strong>, sur un sol plat, <strong>hors des allées</strong> de circulation, des issues de secours et de l'accès aux équipements de sécurité (extincteurs, armoires électriques) ;</li>
<li><strong>fourches posées au sol</strong>, mât légèrement incliné vers l'avant pour que les pointes touchent le sol ;</li>
<li><strong>frein de stationnement</strong> serré, commandes au neutre ;</li>
<li><strong>moteur arrêté</strong>, <strong>clé retirée</strong> (ou code désactivé) pour empêcher toute utilisation par une personne non autorisée ;</li>
<li>mise en charge de la batterie ou plein de carburant si nécessaire ;</li>
<li><strong>signalement</strong> des anomalies constatées pendant le poste.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> pour une courte absence (aller chercher un document), le cariste pose quand même la charge au sol, serre le frein et retire la clé s'il perd de vue son chariot.</div>`
        }
      ],
      points_cles: [
        "Vérifications de prise de poste par le conducteur à chaque utilisation : documents, tour de l'engin, fourches, chaînes, niveaux, freins, sécurité",
        "Anomalie de sécurité : ne pas utiliser, signaler, ne pas réparer soi-même",
        "Charge de batterie : local ventilé, pas de flamme, couper le chargeur avant de débrancher",
        "Électrolyte corrosif : lunettes et gants ; complément avec de l'eau déminéralisée",
        "Ne jamais remplacer la batterie par une plus légère : elle fait partie du contrepoids",
        "GPL : changement à l'extérieur, robinet fermé, gants ; gaz plus lourd que l'air",
        "Fin de poste : emplacement prévu hors allées, fourches au sol, frein serré, clé retirée"
      ]
    }
  );

  P.questions.push(
    { id: "R489-001", chapitre: "r489-categories-technologie", situation: "Vous devez conduire un chariot élévateur frontal à contrepoids d'une capacité de 2 500 kg.",
      q: "Il me faut un CACES R489 de catégorie :", options: ["1B", "3", "4", "5"], bonnes: [1],
      explication: "Les chariots élévateurs en porte-à-faux de capacité inférieure ou égale à 6 000 kg relèvent de la catégorie 3. Au-delà de 6 000 kg, c'est la catégorie 4." },
    { id: "R489-002", chapitre: "r489-categories-technologie", situation: "Sur un port, vous devez conduire un chariot frontal en porte-à-faux de 10 000 kg de capacité.",
      q: "La catégorie R489 concernée est la :", options: ["3", "4", "6"], bonnes: [1],
      explication: "La catégorie 4 couvre les chariots élévateurs en porte-à-faux de capacité supérieure à 6 000 kg." },
    { id: "R489-003", chapitre: "r489-categories-technologie",
      q: "Un chariot élévateur à mât rétractable relève de la catégorie R489 :", options: ["3", "5", "6"], bonnes: [1],
      explication: "Les chariots à mât rétractable forment la catégorie 5. La catégorie 6 concerne les chariots à poste de conduite élevable." },
    { id: "R489-004", chapitre: "r489-categories-technologie",
      q: "Un transpalette sur lequel le conducteur se tient debout sur une plate-forme relève de la catégorie R489 :", options: ["1A", "1B", "2A"], bonnes: [0],
      explication: "La catégorie 1A couvre les transpalettes à conducteur porté et les préparateurs de commandes au sol. La 1B vise les gerbeurs à conducteur porté." },
    { id: "R489-005", chapitre: "r489-categories-technologie", situation: "Dans un entrepôt, vous préparez des commandes en montant avec la cabine jusqu'aux niveaux hauts du rayonnage.",
      q: "Ce chariot relève de la catégorie R489 :", options: ["1A", "5", "6"], bonnes: [2],
      explication: "Les chariots à poste de conduite élevable, qui permettent au conducteur de monter avec la charge, relèvent de la catégorie 6." },
    { id: "R489-006", chapitre: "r489-categories-technologie",
      q: "Un chariot tracteur industriel qui tire des remorques relève de la catégorie R489 :", options: ["2A", "2B", "7"], bonnes: [1],
      explication: "La catégorie 2B couvre les chariots tracteurs industriels (capacité de traction jusqu'à 25 000 kg). La 2A vise les chariots à plateau porteur." },
    { id: "R489-007", chapitre: "r489-categories-technologie", situation: "Titulaire de la seule catégorie 7, vous devez intervenir sur un chariot de catégorie 3.",
      q: "Je peux :", options: ["Le déplacer jusqu'à l'atelier de maintenance", "Le charger sur un porte-engins", "L'utiliser pour décharger un camion"], bonnes: [0, 1],
      explication: "La catégorie 7 autorise la conduite hors production : déplacement, chargement sur porte-engins, maintenance, essais. Elle n'autorise pas la manutention de charges en production." },
    { id: "R489-008", chapitre: "r489-categories-technologie",
      q: "Un chariot télescopique tout-terrain utilisé sur un chantier relève :", options: ["De la R489 catégorie 3", "De la R482 catégorie F", "De la R486"], bonnes: [1],
      explication: "Les chariots de manutention tout-terrain, dont les télescopiques, relèvent de la R482 catégorie F, et non de la R489." },
    { id: "R489-009", chapitre: "r489-categories-technologie",
      q: "Je possède le CACES R489 catégorie 3. Je peux conduire un chariot à mât rétractable :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Chaque catégorie s'obtient séparément. Le chariot à mât rétractable relève de la catégorie 5, qui n'est pas couverte par la catégorie 3." },
    { id: "R489-010", chapitre: "r489-categories-technologie",
      q: "Sur un chariot élévateur frontal, les roues directrices sont :", options: ["Les roues avant", "Les roues arrière"], bonnes: [1],
      explication: "Sur un frontal, les roues avant sont porteuses et les roues arrière directrices. En virage, l'arrière du chariot balaie largement l'espace." },
    { id: "R489-011", chapitre: "r489-categories-technologie", situation: "Vous braquez fortement pour tourner à gauche dans une allée étroite. Un piéton se tient près de l'arrière droit du chariot.",
      q: "Le risque principal est :", options: ["Que l'arrière du chariot heurte le piéton", "Que les fourches touchent le piéton", "Aucun, le piéton est derrière"], bonnes: [0],
      explication: "Les roues arrière étant directrices, l'arrière du chariot pivote vers l'extérieur du virage : la personne placée à l'arrière peut être heurtée par le contrepoids." },
    { id: "R489-012", chapitre: "r489-categories-technologie",
      q: "Le dosseret d'appui de charge sert à :", options: ["Empêcher la charge de tomber vers le conducteur", "Protéger le conducteur des chutes d'objets venant d'en haut", "Équilibrer le chariot"], bonnes: [0],
      explication: "Le dosseret empêche la charge de basculer vers l'arrière, sur le conducteur. La protection contre les chutes d'objets d'en haut est assurée par le protège-conducteur, l'équilibre par le contrepoids." },
    { id: "R489-013", chapitre: "r489-categories-technologie",
      q: "Le contrepoids d'un chariot frontal sert à :", options: ["Équilibrer la charge portée à l'avant", "Augmenter la vitesse", "Protéger le conducteur"], bonnes: [0],
      explication: "Le contrepoids, à l'arrière, équilibre la charge portée en avant des roues avant. Il ne faut jamais l'alourdir pour lever plus." },
    { id: "R489-014", chapitre: "r489-categories-technologie",
      q: "Un chariot à moteur diesel :", options: ["Peut être utilisé sans restriction dans un local fermé", "Ne doit pas être utilisé dans un local mal ventilé", "Rejette du monoxyde de carbone"], bonnes: [1, 2],
      explication: "Les gaz d'échappement contiennent du monoxyde de carbone, toxique. Un chariot thermique ne doit pas être utilisé dans un local fermé ou mal ventilé." },
    { id: "R489-015", chapitre: "r489-categories-technologie",
      q: "Un chariot électrique en circulation présente un risque particulier pour les piétons car :", options: ["Il est silencieux", "Il est plus rapide qu'un chariot thermique", "Il n'a pas de freins"], bonnes: [0],
      explication: "Le chariot électrique est silencieux : les piétons l'entendent mal arriver. Le cariste doit redoubler de vigilance et utiliser l'avertisseur aux endroits masqués." },
    { id: "R489-016", chapitre: "r489-stabilite-plaque-charge",
      q: "Sur un chariot élévateur frontal, le point de basculement vers l'avant se situe :", options: ["Au niveau de l'essieu avant", "Au niveau du contrepoids", "Au bout des fourches"], bonnes: [0],
      explication: "Le chariot frontal fonctionne comme une balance dont le pivot est l'essieu avant : la charge d'un côté, le chariot et son contrepoids de l'autre." },
    { id: "R489-017", chapitre: "r489-stabilite-plaque-charge", situation: "La plaque de charge indique 2 000 kg à 500 mm. Vous devez lever une charge de 2 000 kg dont le centre de gravité est à 800 mm.",
      q: "Je peux lever cette charge :", options: ["Oui, le poids ne dépasse pas la capacité nominale", "Non, la capacité diminue quand le centre de gravité s'éloigne"], bonnes: [1],
      explication: "La capacité nominale n'est valable que pour le centre de charge de référence (500 mm). À 800 mm, la capacité approchée est 2 000 × 500 ÷ 800 = 1 250 kg : la charge est trop lourde." },
    { id: "R489-018", chapitre: "r489-stabilite-plaque-charge", situation: "Votre chariot a une capacité nominale de 1 600 kg à 500 mm. Vous devez déplacer une palette de 1 200 kg dont le centre de gravité est à 600 mm.",
      q: "Par le calcul approché, la capacité à 600 mm est d'environ :", options: ["1 920 kg", "1 333 kg", "1 000 kg"], bonnes: [1],
      explication: "Capacité approchée = 1 600 × 500 ÷ 600 ≈ 1 333 kg. La palette de 1 200 kg peut donc être levée, sous réserve de la hauteur de levée prévue par la plaque." },
    { id: "R489-019", chapitre: "r489-stabilite-plaque-charge", situation: "Plaque de charge : 3 000 kg à 500 mm. Charge à lever : 1 400 kg, centre de gravité à 1 000 mm.",
      q: "Je peux lever cette charge :", options: ["Oui", "Non"], bonnes: [0],
      explication: "Capacité approchée = 3 000 × 500 ÷ 1 000 = 1 500 kg. La charge de 1 400 kg est sous cette limite : la manœuvre est possible, en vérifiant la hauteur de levée sur la plaque." },
    { id: "R489-020", chapitre: "r489-stabilite-plaque-charge",
      q: "Si le centre de gravité de la charge est deux fois plus éloigné que le centre de charge nominal, la capacité est environ :", options: ["Deux fois plus grande", "Inchangée", "Deux fois plus faible"], bonnes: [2],
      explication: "Le moment de la charge double quand sa distance double : la capacité admissible est alors environ divisée par deux." },
    { id: "R489-021", chapitre: "r489-stabilite-plaque-charge",
      q: "La plaque de charge d'un chariot indique notamment :", options: ["La capacité nominale et son centre de charge", "Les capacités selon la hauteur de levée", "La date de la prochaine VGP"], bonnes: [0, 1],
      explication: "La plaque de charge donne la capacité nominale à un centre de charge de référence et les capacités réduites selon la hauteur et la distance. La date de VGP figure dans le registre de sécurité." },
    { id: "R489-022", chapitre: "r489-stabilite-plaque-charge", situation: "On vient de monter une potence sur votre chariot. Aucune plaque de charge ne correspond à cet accessoire.",
      q: "Je peux utiliser le chariot avec la potence :", options: ["Oui, en respectant la capacité nominale du chariot", "Non"], bonnes: [1],
      explication: "Un accessoire modifie la capacité (poids propre, charge éloignée). Sans plaque de charge tenant compte de l'accessoire, on ne l'utilise pas." },
    { id: "R489-023", chapitre: "r489-stabilite-plaque-charge",
      q: "Le triangle de stabilité d'un chariot frontal à essieu arrière oscillant est formé par :", options: ["Les deux roues avant et l'articulation de l'essieu arrière", "Les quatre roues", "Les fourches et les roues arrière"], bonnes: [0],
      explication: "L'essieu arrière est articulé en son milieu : le chariot repose sur trois points, les deux roues avant et l'articulation arrière." },
    { id: "R489-024", chapitre: "r489-stabilite-plaque-charge",
      q: "Le chariot reste stable tant que le centre de gravité de l'ensemble :", options: ["Reste à l'intérieur du triangle de stabilité", "Se trouve au-dessus du contrepoids", "Se trouve en avant des roues avant"], bonnes: [0],
      explication: "Si le centre de gravité de l'ensemble chariot et charge sort du triangle de stabilité, le chariot se renverse." },
    { id: "R489-025", chapitre: "r489-stabilite-plaque-charge",
      q: "Lever la charge en hauteur :", options: ["Fait monter le centre de gravité de l'ensemble", "Rend le chariot plus sensible aux déséquilibres", "Améliore la stabilité latérale"], bonnes: [0, 1],
      explication: "Plus la charge est haute, plus le centre de gravité monte et plus le chariot devient instable : c'est pourquoi on circule toujours charge basse." },
    { id: "R489-026", chapitre: "r489-stabilite-plaque-charge", situation: "Vous roulez à vide à vive allure et prenez un virage serré.",
      q: "Je risque :", options: ["Un renversement latéral", "Aucun risque, le chariot est à vide"], bonnes: [0],
      explication: "À vide, le centre de gravité est près de l'arrière, à la pointe étroite du triangle de stabilité : un virage rapide peut renverser le chariot sur le côté." },
    { id: "R489-027", chapitre: "r489-stabilite-plaque-charge", situation: "Votre chariot commence à se renverser sur le côté.",
      q: "Je dois :", options: ["Sauter du côté opposé à la chute", "Rester dans le poste, ceinture attachée", "Tenir fermement le volant et m'arc-bouter", "Me pencher du côté opposé à la chute"], bonnes: [1, 2, 3],
      explication: "Il ne faut jamais sauter : le conducteur serait écrasé par le protège-conducteur. On reste attaché, on s'agrippe au volant, on s'arc-boute et on se penche à l'opposé de la chute." },
    { id: "R489-028", chapitre: "r489-stabilite-plaque-charge", situation: "La charge à lever est un peu trop lourde : l'arrière du chariot se soulève. Un collègue propose de s'asseoir sur le contrepoids.",
      q: "J'accepte :", options: ["Oui, c'est une solution temporaire", "Non, c'est interdit"], bonnes: [1],
      explication: "Lester le contrepoids, avec une masse ou une personne, est interdit et très dangereux. On utilise un chariot de capacité suffisante ou on fractionne la charge." },
    { id: "R489-029", chapitre: "r489-stabilite-plaque-charge",
      q: "Parmi ces situations, lesquelles favorisent le renversement ?", options: ["Circuler charge haute", "Rouler en travers d'une pente", "Circuler lentement, charge basse, mât incliné vers l'arrière", "Freiner brutalement avec une charge levée"], bonnes: [0, 1, 3],
      explication: "Charge haute, dévers et freinage brutal charge levée favorisent le renversement. La position de transport, à vitesse adaptée, est au contraire la position sûre." },
    { id: "R489-030", chapitre: "r489-stabilite-plaque-charge", situation: "L'abaque de votre chariot indique 1 800 kg à 500 mm, 1 500 kg à 600 mm et 1 300 kg à 700 mm. Le centre de gravité de la charge est à 650 mm.",
      q: "Je retiens comme capacité :", options: ["1 500 kg", "1 300 kg", "1 400 kg"], bonnes: [1],
      explication: "Quand la valeur exacte ne figure pas sur l'abaque, on retient la plus défavorable, celle de la distance supérieure : 1 300 kg à 700 mm." },
    { id: "R489-031", chapitre: "r489-circulation",
      q: "En circulation avec une charge, la position correcte est :", options: ["Charge basse, mât incliné vers l'arrière", "Charge haute pour mieux voir", "Charge basse, mât incliné vers l'avant"], bonnes: [0],
      explication: "La position de transport est charge basse, juste au-dessus du sol, et mât incliné vers l'arrière pour plaquer la charge contre le dosseret." },
    { id: "R489-032", chapitre: "r489-circulation",
      q: "Je peux lever ma charge tout en roulant pour gagner du temps :", options: ["Oui, à faible vitesse", "Non, jamais"], bonnes: [1],
      explication: "On ne lève et ne descend la charge que chariot arrêté. Lever en roulant fait monter le centre de gravité pendant le déplacement et peut provoquer un renversement." },
    { id: "R489-033", chapitre: "r489-circulation", situation: "Vous transportez une charge volumineuse qui vous masque complètement la vue vers l'avant.",
      q: "Je dois :", options: ["Circuler en marche arrière en regardant dans le sens de la marche", "Lever la charge pour voir dessous", "Me faire guider par une personne qualifiée"], bonnes: [0, 2],
      explication: "On circule en marche arrière en regardant derrière soi, ou on se fait guider. Lever la charge pour voir dessous rend le chariot instable." },
    { id: "R489-034", chapitre: "r489-circulation", situation: "Chariot chargé, vous devez descendre une rampe.",
      q: "Je descends :", options: ["En marche avant", "En marche arrière"], bonnes: [1],
      explication: "En pente, la charge doit toujours être côté amont. Chargé, on descend donc en marche arrière, la charge restant vers le haut." },
    { id: "R489-035", chapitre: "r489-circulation", situation: "Chariot chargé, vous devez monter une rampe.",
      q: "Je monte :", options: ["En marche avant", "En marche arrière"], bonnes: [0],
      explication: "Chargé, on monte en marche avant : la charge, devant, reste côté amont." },
    { id: "R489-036", chapitre: "r489-circulation", situation: "Chariot à vide, vous devez monter une rampe d'accès à un quai.",
      q: "Je monte :", options: ["En marche avant", "En marche arrière"], bonnes: [1],
      explication: "À vide, les fourches doivent être côté aval et le contrepoids côté amont : on monte donc en marche arrière, et on descend en marche avant." },
    { id: "R489-037", chapitre: "r489-circulation", situation: "Vous êtes au milieu d'une pente avec une charge.",
      q: "Je peux :", options: ["Faire demi-tour", "Tourner pour prendre une allée latérale", "Continuer dans l'axe de la pente"], bonnes: [2],
      explication: "On ne tourne jamais et on ne fait jamais demi-tour en pente : le chariot se mettrait en travers et pourrait se renverser. On reste dans l'axe de la pente." },
    { id: "R489-038", chapitre: "r489-circulation", situation: "Vous circulez dans une allée de l'entrepôt.", panneau: "B14:10",
      q: "Ce panneau m'impose :", options: ["De ne pas dépasser 10 km/h", "De rouler au moins à 10 km/h"], bonnes: [0],
      explication: "Le panneau rond à bord rouge indique une vitesse maximale. Le plan de circulation du site s'impose au cariste, qui doit aussi adapter sa vitesse aux circonstances, même en dessous de cette limite." },
    { id: "R489-039", chapitre: "r489-circulation", situation: "Un collègue vous demande de l'emmener à l'autre bout de l'entrepôt. Votre chariot n'a qu'un siège.",
      q: "Je peux le transporter :", options: ["Debout sur le marchepied", "Assis sur la palette", "Non, c'est interdit"], bonnes: [2],
      explication: "Le transport de personnes est interdit, sauf si le chariot dispose d'un siège prévu pour un passager." },
    { id: "R489-040", chapitre: "r489-circulation", situation: "Vous devez entrer dans un monte-charge avec votre chariot chargé.",
      q: "Je vérifie d'abord :", options: ["Que la charge maximale du monte-charge supporte chariot, charge et conducteur", "La couleur des portes", "Que le monte-charge est bien à niveau"], bonnes: [0, 2],
      explication: "Le monte-charge doit supporter le poids total, et être à niveau pour qu'on puisse y entrer sans choc ni risque de chute." },
    { id: "R489-041", chapitre: "r489-circulation",
      q: "Je franchis des rails ou un caniveau :", options: ["Lentement et en biais", "Rapidement pour ne pas rester bloqué", "Charge haute pour éviter les chocs"], bonnes: [0],
      explication: "Les obstacles au sol se franchissent lentement et en biais pour limiter les chocs, toujours charge basse." },
    { id: "R489-042", chapitre: "r489-circulation", situation: "Vous approchez d'une intersection sans visibilité entre deux rayonnages.",
      q: "Je dois :", options: ["Ralentir", "Utiliser l'avertisseur sonore", "Être prêt à m'arrêter", "Accélérer pour dégager rapidement l'intersection"], bonnes: [0, 1, 2],
      explication: "Aux intersections masquées, on ralentit, on avertit et on est prêt à s'arrêter. Accélérer augmente le risque de collision avec un piéton ou un autre chariot." },
    { id: "R489-043", chapitre: "r489-circulation",
      q: "Pendant la conduite, je peux sortir le bras du gabarit du chariot pour écarter un carton :", options: ["Oui, si je roule doucement", "Non"], bonnes: [1],
      explication: "Bras, jambes et tête doivent rester à l'intérieur du chariot : un membre sorti peut être écrasé contre un obstacle." },
    { id: "R489-044", chapitre: "r489-circulation", situation: "Un piéton traverse l'allée devant vous sans vous regarder.",
      q: "Je dois :", options: ["Ralentir et m'arrêter si nécessaire", "Klaxonner et maintenir ma vitesse", "Compter sur lui pour s'écarter"], bonnes: [0],
      explication: "Le cariste anticipe et adapte sa conduite : il ne compte jamais sur le piéton pour s'écarter, surtout avec un chariot électrique silencieux." },
    { id: "R489-045", chapitre: "r489-circulation",
      q: "Une personne peut passer sous une charge levée si elle fait vite :", options: ["Vrai", "Faux"], bonnes: [1],
      explication: "Faux : aucune personne ne doit se trouver ou passer sous une charge levée. Le cariste arrête sa manœuvre tant que la zone n'est pas libre." },
    { id: "R489-046", chapitre: "r489-manutention-stockage", situation: "Vous devez lever une palette dont le poids n'est indiqué nulle part.",
      q: "Je dois :", options: ["La soulever légèrement pour tester", "Me renseigner sur son poids avant de la lever", "La lever si elle ne paraît pas trop lourde"], bonnes: [1],
      explication: "On ne teste pas une charge en la soulevant : si l'arrière se soulève, il est déjà trop tard. On recherche le poids (étiquette, bon de livraison, responsable) avant toute manœuvre." },
    { id: "R489-047", chapitre: "r489-manutention-stockage",
      q: "L'écartement des fourches doit être :", options: ["Le plus large possible compatible avec la palette", "Le plus serré possible", "Indifférent"], bonnes: [0],
      explication: "Des fourches écartées au maximum compatible avec la palette, et symétriques par rapport à l'axe du chariot, répartissent mieux la charge et la rendent plus stable." },
    { id: "R489-048", chapitre: "r489-manutention-stockage", situation: "Vous vous présentez devant une palette posée au sol.",
      q: "Pour la prendre, je dois :", options: ["Arriver perpendiculairement à la palette", "Mettre les fourches horizontales", "Engager les fourches à fond", "Lever la palette en reculant"], bonnes: [0, 1, 2],
      explication: "On arrive perpendiculairement, fourches horizontales, on engage à fond, on décolle la charge, on incline le mât vers l'arrière, puis on recule. On ne lève pas en roulant." },
    { id: "R489-049", chapitre: "r489-manutention-stockage",
      q: "Après avoir engagé les fourches et décollé la charge, l'étape suivante est :", options: ["Incliner le mât vers l'arrière", "Lever la charge à hauteur des yeux", "Repartir en marche avant"], bonnes: [0],
      explication: "On incline le mât vers l'arrière pour plaquer la charge contre le dosseret, puis on recule et on descend la charge en position de transport." },
    { id: "R489-050", chapitre: "r489-manutention-stockage", situation: "Une palette n'est engagée que sur le premier tiers des fourches.",
      q: "Cette situation :", options: ["Éloigne le centre de gravité de la charge", "Réduit la capacité du chariot", "Est sans conséquence si la charge est légère"], bonnes: [0, 1],
      explication: "Une charge prise du bout des fourches a un centre de gravité plus éloigné : la capacité admissible diminue et la charge risque de basculer. Les fourches doivent être engagées à fond." },
    { id: "R489-051", chapitre: "r489-manutention-stockage", situation: "Vous devez déposer une palette au troisième niveau d'un palettier.",
      q: "Je lève la charge à la hauteur voulue :", options: ["Chariot arrêté, devant l'emplacement", "En m'approchant du palettier pour gagner du temps"], bonnes: [0],
      explication: "La levée se fait chariot arrêté, frein serré, face à l'emplacement. Lever en roulant déstabilise le chariot et peut provoquer un choc contre le rayonnage." },
    { id: "R489-052", chapitre: "r489-manutention-stockage", situation: "Vous venez de déposer une palette en hauteur dans un palettier et de dégager les fourches.",
      q: "Avant de repartir, je dois :", options: ["Descendre les fourches en position basse", "Repartir fourches hautes pour la prochaine palette"], bonnes: [0],
      explication: "On ne circule jamais fourches hautes : on descend les fourches en position basse avant de repartir." },
    { id: "R489-053", chapitre: "r489-manutention-stockage",
      q: "La charge maximale admise par un niveau de palettier est indiquée :", options: ["Sur la plaque de charge du palettier", "Sur la plaque de charge du chariot", "Nulle part, il faut estimer"], bonnes: [0],
      explication: "Chaque palettier porte une plaque de charge qui indique la charge maximale par niveau et par échelle. Elle ne doit jamais être dépassée." },
    { id: "R489-054", chapitre: "r489-manutention-stockage", situation: "En manœuvrant, vous heurtez un montant de palettier qui se déforme légèrement.",
      q: "Je dois :", options: ["Signaler immédiatement le choc", "Continuer à charger cet emplacement", "Ne plus utiliser l'emplacement avant vérification"], bonnes: [0, 2],
      explication: "Un montant déformé affaiblit tout le rayonnage. On signale immédiatement le dommage et on n'utilise plus l'emplacement tant qu'il n'a pas été vérifié." },
    { id: "R489-055", chapitre: "r489-manutention-stockage",
      q: "Pendant une dépose en hauteur, une personne peut se trouver dans l'allée de l'autre côté du rayonnage :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Une charge peut tomber de l'autre côté du rayonnage. Personne ne doit se trouver dans la zone d'évolution ni dans l'allée opposée pendant la manœuvre." },
    { id: "R489-056", chapitre: "r489-manutention-stockage", situation: "Vous devez entrer dans une semi-remorque à quai pour la décharger.",
      q: "Avant d'entrer, je vérifie :", options: ["Que le véhicule est immobilisé et calé selon le protocole du site", "Que le pont de liaison est bien en place", "Que le plancher de la remorque est en bon état", "Que le chauffeur reste dans sa cabine moteur tournant"], bonnes: [0, 1, 2],
      explication: "Avant d'entrer, on s'assure que le véhicule est immobilisé (frein, moteur arrêté, calage), que le pont de liaison est en place et que le plancher supporte le chariot chargé. Le moteur doit être arrêté." },
    { id: "R489-057", chapitre: "r489-manutention-stockage",
      q: "Une semi-remorque dételée à quai présente un risque particulier :", options: ["De basculement vers l'avant quand le chariot entre", "Aucun, elle est plus stable sans tracteur"], bonnes: [0],
      explication: "Dételée, la semi-remorque repose sur ses béquilles : le poids du chariot à l'avant peut la faire basculer. On utilise une béquille supplémentaire si les consignes le prévoient." },
    { id: "R489-058", chapitre: "r489-manutention-stockage",
      q: "Une charge suspendue à une potence montée sur les fourches :", options: ["Peut se balancer", "Impose une conduite lente et sans à-coups", "Augmente la capacité du chariot"], bonnes: [0, 1],
      explication: "La charge suspendue peut se balancer et déstabiliser le chariot : on conduit lentement, sans à-coups. Une potence réduit la capacité, elle ne l'augmente jamais." },
    { id: "R489-059", chapitre: "r489-manutention-stockage", situation: "La palette que vous devez lever a deux planches cassées et la charge penche.",
      q: "Je dois :", options: ["La lever avec précaution", "Faire reconditionner la charge avant de la lever"], bonnes: [1],
      explication: "Une palette en mauvais état ou une charge instable risque de tomber : elle doit être reconditionnée avant toute manutention." },
    { id: "R489-060", chapitre: "r489-manutention-stockage",
      q: "Je peux pousser une autre palette au sol avec le bout des fourches pour la déplacer :", options: ["Oui", "Non, sauf si le chariot est prévu pour cela"], bonnes: [1],
      explication: "Pousser ou tirer une charge avec les fourches peut abîmer les fourches et déstabiliser la charge. Ce n'est permis que si l'équipement est prévu pour cela." },
    { id: "R489-061", chapitre: "r489-verifications-energie-fin-poste",
      q: "Les vérifications de prise de poste sont réalisées :", options: ["Par le conducteur, à chaque prise de poste", "Par un organisme de contrôle, tous les 6 mois", "Une fois par an"], bonnes: [0],
      explication: "Le conducteur vérifie son chariot à chaque prise de poste. Les VGP semestrielles, réalisées par une personne compétente, ne les remplacent pas." },
    { id: "R489-062", chapitre: "r489-verifications-energie-fin-poste",
      q: "Lors de la prise de poste, je contrôle notamment :", options: ["L'état des fourches et des chaînes", "L'efficacité des freins", "Le fonctionnement de l'avertisseur", "La couleur de la carrosserie"], bonnes: [0, 1, 2],
      explication: "Fourches, chaînes, freins, avertisseur, direction, niveaux, absence de fuite, dispositif de retenue et plaque de charge font partie des contrôles. La couleur n'a pas d'incidence sur la sécurité." },
    { id: "R489-063", chapitre: "r489-verifications-energie-fin-poste", situation: "Lors de votre tour du chariot, vous découvrez une fissure au talon d'une fourche.",
      q: "Je dois :", options: ["Utiliser le chariot pour des charges légères", "Ne pas utiliser le chariot et signaler l'anomalie", "Réparer la fourche par soudure"], bonnes: [1],
      explication: "Une fourche fissurée peut casser sous la charge. Le chariot ne doit pas être utilisé, l'anomalie est signalée ; les réparations ne sont pas faites par le conducteur." },
    { id: "R489-064", chapitre: "r489-verifications-energie-fin-poste", situation: "En levant à vide, vous remarquez qu'une chaîne de levage est nettement plus détendue que l'autre.",
      q: "C'est :", options: ["Une anomalie à signaler", "Normal sur un chariot ancien"], bonnes: [0],
      explication: "Les chaînes doivent être tendues de façon égale. Une différence de tension est une anomalie qui doit être signalée avant toute utilisation." },
    { id: "R489-065", chapitre: "r489-verifications-energie-fin-poste",
      q: "Pendant la charge d'une batterie au plomb, le gaz dégagé est :", options: ["De l'hydrogène, explosif", "Du monoxyde de carbone", "De l'azote, sans danger"], bonnes: [0],
      explication: "La charge des batteries au plomb dégage de l'hydrogène, très explosif. D'où la charge en local ventilé, sans flamme ni étincelle." },
    { id: "R489-066", chapitre: "r489-verifications-energie-fin-poste", situation: "La charge de votre batterie est terminée.",
      q: "Pour débrancher la batterie :", options: ["J'arrête d'abord le chargeur", "Je débranche directement la prise, chargeur en marche"], bonnes: [0],
      explication: "On arrête le chargeur avant de débrancher, pour éviter une étincelle à la déconnexion dans une atmosphère qui peut contenir de l'hydrogène." },
    { id: "R489-067", chapitre: "r489-verifications-energie-fin-poste",
      q: "Le local de charge des batteries doit être :", options: ["Ventilé", "Interdit aux flammes et à la cigarette", "Fermé hermétiquement pour retenir les gaz"], bonnes: [0, 1],
      explication: "La ventilation évacue l'hydrogène et toute source d'inflammation est interdite. Un local fermé hermétiquement laisserait s'accumuler le gaz explosif." },
    { id: "R489-068", chapitre: "r489-verifications-energie-fin-poste",
      q: "La batterie d'un chariot électrique peut être remplacée par un modèle plus léger :", options: ["Oui, cela économise l'énergie", "Non, elle participe au contrepoids"], bonnes: [1],
      explication: "La batterie fait partie du contrepoids prévu par le constructeur. Une batterie plus légère réduirait la stabilité du chariot." },
    { id: "R489-069", chapitre: "r489-verifications-energie-fin-poste", situation: "Vous devez changer la bouteille de GPL de votre chariot.",
      q: "Je dois :", options: ["Faire l'échange à l'extérieur ou dans un lieu bien ventilé", "Fermer le robinet de la bouteille avant de la débrancher", "Porter des gants", "Vérifier l'étanchéité avec un briquet"], bonnes: [0, 1, 2],
      explication: "Le changement se fait à l'extérieur, moteur arrêté, robinet fermé et avec des gants contre les brûlures par le froid. On ne cherche jamais une fuite avec une flamme." },
    { id: "R489-070", chapitre: "r489-verifications-energie-fin-poste",
      q: "Un chariot au GPL ne doit pas être stationné près d'une fosse ou d'un sous-sol car :", options: ["Le GPL est plus lourd que l'air et s'y accumule", "Le GPL est plus léger que l'air et s'y concentre"], bonnes: [0],
      explication: "Plus lourd que l'air, le GPL qui fuit descend et s'accumule dans les points bas, où il peut exploser." },
    { id: "R489-071", chapitre: "r489-verifications-energie-fin-poste", situation: "C'est la fin de votre poste.",
      q: "Je stationne mon chariot :", options: ["Sur l'emplacement prévu, hors des allées", "Fourches posées au sol", "Frein serré et clé retirée", "Devant l'armoire électrique pour qu'il soit à l'abri"], bonnes: [0, 1, 2],
      explication: "En fin de poste, le chariot est rangé à l'emplacement prévu, fourches au sol, frein serré, clé retirée. On ne bloque jamais l'accès aux armoires électriques, extincteurs ou issues de secours." },
    { id: "R489-072", chapitre: "r489-verifications-energie-fin-poste",
      q: "En fin de poste, je retire la clé du chariot pour :", options: ["Empêcher son utilisation par une personne non autorisée", "Économiser la batterie uniquement"], bonnes: [0],
      explication: "Retirer la clé (ou désactiver le code) empêche qu'une personne non autorisée utilise le chariot." },
    { id: "R489-073", chapitre: "r489-verifications-energie-fin-poste",
      q: "Le plein de carburant d'un chariot diesel se fait :", options: ["Moteur arrêté", "Moteur au ralenti pour gagner du temps", "Sans fumer"], bonnes: [0, 2],
      explication: "Le plein se fait moteur arrêté, sans fumer et à l'emplacement prévu, pour éviter tout risque d'incendie." },
    { id: "R489-074", chapitre: "r489-verifications-energie-fin-poste", situation: "Pendant votre poste, un voyant d'alerte s'allume et la direction devient dure.",
      q: "Je dois :", options: ["Poser la charge si c'est possible sans danger", "M'arrêter dans un endroit qui ne gêne pas la circulation", "Prévenir mon responsable", "Finir ma tournée avant de signaler"], bonnes: [0, 1, 2],
      explication: "Une anomalie en cours de poste impose de mettre la charge et le chariot en sécurité, puis de prévenir. On ne termine pas la tournée avec un chariot défaillant." },
    { id: "R489-075", chapitre: "r489-verifications-energie-fin-poste",
      q: "Pour compléter le niveau d'électrolyte d'une batterie, j'utilise :", options: ["De l'eau déminéralisée", "De l'eau du robinet", "De l'acide pur"], bonnes: [0],
      explication: "Le complément se fait avec de l'eau déminéralisée, selon les consignes du constructeur, avec lunettes et gants." },
    { id: "R489-076", chapitre: "r489-verifications-energie-fin-poste",
      q: "Je ne dois pas poser d'outil métallique sur une batterie car :", options: ["Il peut provoquer un court-circuit", "Il peut créer des étincelles en présence d'hydrogène", "Il raye le capot"], bonnes: [0, 1],
      explication: "Un outil métallique entre deux bornes provoque un court-circuit, des étincelles et des brûlures, dangereux près de l'hydrogène dégagé par la batterie." },
    { id: "R489-077", chapitre: "r489-categories-technologie",
      q: "Il est interdit :", options: ["De neutraliser le contacteur de siège", "D'ajouter un lest sur le contrepoids", "De retirer le protège-conducteur", "D'utiliser l'avertisseur aux intersections"], bonnes: [0, 1, 2],
      explication: "Neutraliser un dispositif de sécurité, lester le contrepoids ou retirer le protège-conducteur est interdit. L'avertisseur est au contraire recommandé aux endroits sans visibilité." },
    { id: "R489-078", chapitre: "r489-circulation", situation: "Vous transportez des tubes de 6 m de long sur un chariot frontal.",
      q: "Je dois :", options: ["Rouler très lentement", "Vérifier le dégagement des deux côtés dans les virages", "Me faire guider dans les passages étroits", "Lever la charge pour passer au-dessus des obstacles"], bonnes: [0, 1, 2],
      explication: "Une charge longue balaie un large espace en virage : on roule lentement, on vérifie les deux côtés et on se fait guider. On ne circule jamais charge haute." },
    { id: "R489-079", chapitre: "r489-circulation", situation: "Vous allez franchir une porte souple à lanières entre deux halls.",
      q: "Je dois :", options: ["Ralentir", "Vérifier la hauteur disponible", "Me méfier des piétons de l'autre côté"], bonnes: [0, 1, 2],
      explication: "On franchit les portes lentement en vérifiant la hauteur pour le mât, le protège-conducteur et la charge, et en anticipant la présence de piétons derrière." },
    { id: "R489-080", chapitre: "r489-manutention-stockage", situation: "Avant de lever une palette, vous consultez la plaque de charge de votre chariot.",
      q: "Je compare :", options: ["Le poids de la charge", "La distance de son centre de gravité", "La hauteur à laquelle je dois la lever"], bonnes: [0, 1, 2],
      explication: "La capacité dépend du poids, de la distance du centre de gravité et de la hauteur de levée : les trois sont à comparer avec la plaque de charge et l'abaque." }
  );
})();

/* ───────────── Thème R486 — Plates-formes élévatrices mobiles de personnes ───────────── */
(function () {
  const P = window.PERMIS_COURS["caces"] = window.PERMIS_COURS["caces"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "r486-pemp-categories-stabilite",
      theme: "R486",
      titre: "R486 : groupes, types, catégories et stabilité des PEMP",
      duree: 25,
      objectifs: [
        "Distinguer les PEMP du groupe A et du groupe B",
        "Reconnaître les types 1, 2 et 3",
        "Associer chaque catégorie R486 aux machines qu'elle couvre",
        "Évaluer le sol, le vent et la pente avant de travailler",
        "Respecter la charge et le nombre de personnes admis sur la plate-forme"
      ],
      sections: [
        {
          titre: "Qu'est-ce qu'une PEMP ?",
          contenu: `<p>Une <strong>plate-forme élévatrice mobile de personnes</strong> (PEMP, souvent appelée « nacelle ») est une machine destinée à <strong>déplacer des personnes</strong> jusqu'à une position de travail en hauteur, avec leurs outils et matériaux. Elle comprend un <strong>châssis</strong>, une <strong>structure extensible</strong> (ciseaux, mât, bras articulé ou télescopique) et une <strong>plate-forme de travail</strong> entourée de garde-corps.</p>
<p>La PEMP est un <strong>équipement de travail en hauteur</strong> : elle n'est pas faite pour lever des charges comme un engin de levage. On ne l'utilise ni comme monte-charge, ni comme grue, sauf si le constructeur a prévu un équipement spécifique pour cela.</p>
<p>Elle dispose de deux postes de commande : les <strong>commandes de la plate-forme</strong>, utilisées en travail, et les <strong>commandes au sol</strong> (ou de secours), qui permettent de ramener la plate-forme si l'opérateur ne peut plus le faire.</p>
<p>Les PEMP existent en version <strong>électrique</strong> (silencieuse, sans gaz d'échappement, adaptée à l'intérieur), <strong>thermique</strong> (diesel, pour l'extérieur et les terrains accidentés) ou <strong>bi-énergie</strong>. Elles peuvent être <strong>automotrices</strong> (elles se déplacent par leurs propres moyens), <strong>tractées</strong> ou montées sur un <strong>porteur</strong> (camion ou fourgon). Le choix de la machine dépend de la hauteur et du déport nécessaires, du sol, de l'accès au chantier et du lieu (intérieur ou extérieur) : utiliser une machine inadaptée est une source fréquente d'accident.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> PEMP = travail en hauteur de personnes. Charge maximale, nombre de personnes et vitesse de vent admissible sont indiqués par le constructeur sur la machine.</div>`
        },
        {
          titre: "Groupes et types",
          contenu: `<p>Les PEMP sont classées selon deux critères.</p>
<h4>Le groupe : où peut aller la plate-forme ?</h4>
<ul>
<li><strong>Groupe A</strong> : la projection verticale du centre de gravité de la charge reste <strong>toujours à l'intérieur</strong> des lignes de basculement. La plate-forme monte à la verticale du châssis. Exemples : nacelles à ciseaux, à mât vertical.</li>
<li><strong>Groupe B</strong> : la projection verticale du centre de gravité de la charge <strong>peut se trouver à l'extérieur</strong> des lignes de basculement. La plate-forme peut s'écarter du châssis. Exemples : nacelles à bras articulé ou télescopique, nacelles sur camion.</li>
</ul>
<h4>Le type : comment se déplace la machine ?</h4>
<table>
<thead><tr><th>Type</th><th>Translation (déplacement de la machine)</th></tr></thead>
<tbody>
<tr><td>Type 1</td><td>Uniquement en <strong>position de transport</strong> (plate-forme repliée)</td></tr>
<tr><td>Type 2</td><td>Plate-forme en position haute, translation <strong>commandée depuis le châssis</strong></td></tr>
<tr><td>Type 3</td><td>Plate-forme en position haute, translation <strong>commandée depuis la plate-forme</strong></td></tr>
</tbody>
</table>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une nacelle à ciseaux automotrice que l'on déplace depuis la plate-forme en hauteur est du groupe A, type 3. Une nacelle sur porteur, que l'on ne déplace que bras replié, est du groupe B, type 1.</div>`
        },
        {
          titre: "Les catégories de la recommandation R486",
          contenu: `<table>
<thead><tr><th>Catégorie</th><th>Machines concernées</th></tr></thead>
<tbody>
<tr><td>A</td><td>PEMP du <strong>groupe A</strong> (élévation verticale), de type 1 ou de type 3</td></tr>
<tr><td>B</td><td>PEMP du <strong>groupe B</strong> (élévation multidirectionnelle), de type 1 ou de type 3</td></tr>
<tr><td>C</td><td><strong>Conduite hors production</strong> des PEMP des catégories A ou B (déplacement, chargement sur porte-engins, maintenance, démonstration)</td></tr>
</tbody>
</table>
<p>Comme pour les chariots, l'employeur délivre l'<strong>autorisation de conduite</strong> au vu de l'aptitude médicale, du contrôle des connaissances (CACES) et de la connaissance du site. Le CACES R486 est valable <strong>5 ans</strong>.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la catégorie C ne permet pas de travailler en hauteur dans la plate-forme : elle sert à déplacer et charger la machine, hors production.</div>`
        },
        {
          titre: "Sol, pente et stabilisateurs",
          contenu: `<p>La stabilité d'une PEMP dépend d'abord du <strong>sol</strong>. Avant de s'installer, l'opérateur vérifie :</p>
<ul>
<li>la <strong>portance</strong> du sol : un sol meuble, un remblai récent, une dalle creuse, une plaque d'égout ou une tranchée rebouchée peuvent céder sous une roue ou un stabilisateur ;</li>
<li>la <strong>pente</strong> et le <strong>dévers</strong> : ils ne doivent pas dépasser les valeurs admises par le constructeur. La plupart des machines ont une <strong>alarme de dévers</strong> qui bloque certains mouvements ;</li>
<li>l'absence de trous, de bordures et d'obstacles sur le trajet de la machine.</li>
</ul>
<p>Sur les machines équipées de <strong>stabilisateurs</strong>, ceux-ci sont déployés et calés <strong>avant toute élévation</strong>. Sur un sol peu porteur, on place sous chaque patin une <strong>plaque de répartition</strong> pour étaler la charge. La machine est mise de niveau à l'aide de l'indicateur prévu.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> ne jamais neutraliser l'alarme de dévers ni le contrôleur de charge. Ils empêchent la machine de travailler hors de son domaine de stabilité.</div>`
        },
        {
          titre: "Vent et charge de la plate-forme",
          contenu: `<p>Le <strong>vent</strong> exerce une poussée sur la plate-forme, les personnes et les matériaux (en particulier les panneaux et bâches). Chaque PEMP porte l'indication de la <strong>vitesse de vent maximale</strong> admissible :</p>
<ul>
<li>la plupart des machines utilisables en extérieur sont prévues pour un vent maximal de l'ordre de <strong>12,5 m/s (environ 45 km/h)</strong> ;</li>
<li>certaines machines légères sont réservées à l'<strong>intérieur</strong> (vent admissible nul) et ne doivent pas être utilisées dehors.</li>
</ul>
<p>C'est toujours la valeur indiquée par le <strong>constructeur</strong> qui fait foi. La vitesse du vent se mesure avec un <strong>anémomètre</strong> ; le vent est plus fort en hauteur qu'au sol, et des rafales peuvent apparaître entre les bâtiments. Si la limite est atteinte, on redescend.</p>
<p>La plate-forme a une <strong>charge maximale d'utilisation</strong> et un <strong>nombre maximal de personnes</strong>. La charge comprend les personnes, leurs outils et les matériaux. On répartit la charge sur la plate-forme et on ne la fait jamais dépasser des garde-corps.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> vent maximal, charge maximale et nombre de personnes : trois limites du constructeur, inscrites sur la machine, à ne jamais dépasser.</div>`
        }
      ],
      points_cles: [
        "Groupe A : élévation verticale, centre de gravité toujours dans les lignes de basculement (ciseaux, mâts)",
        "Groupe B : la plate-forme peut sortir des lignes de basculement (bras articulés ou télescopiques)",
        "Type 1 : translation en position transport ; type 2 : commandée du châssis ; type 3 : commandée de la plate-forme",
        "Catégorie A = groupe A, catégorie B = groupe B, catégorie C = conduite hors production",
        "Vérifier la portance du sol, la pente, et déployer les stabilisateurs avant l'élévation",
        "Vent maximal indiqué par le constructeur, souvent 12,5 m/s ; certaines machines sont réservées à l'intérieur",
        "Ne jamais dépasser la charge maximale ni le nombre de personnes ; ne pas utiliser la PEMP comme engin de levage"
      ]
    },
    {
      id: "r486-risques-harnais-secours",
      theme: "R486",
      titre: "R486 : risques, harnais, secours et vérifications",
      duree: 20,
      objectifs: [
        "Identifier les risques propres au travail en PEMP",
        "Savoir quand et comment porter un harnais",
        "Organiser le secours et la redescente d'urgence",
        "Baliser la zone de travail",
        "Réaliser les vérifications de prise de poste"
      ],
      sections: [
        {
          titre: "Les risques du travail en PEMP",
          contenu: `<table>
<thead><tr><th>Risque</th><th>Situations</th><th>Prévention</th></tr></thead>
<tbody>
<tr><td>Renversement de la machine</td><td>Sol qui cède, dévers, surcharge, vent, translation sur obstacle</td><td>Reconnaissance du sol, stabilisateurs, respect des limites</td></tr>
<tr><td>Chute ou éjection de l'opérateur</td><td>Garde-corps escaladé, portillon ouvert, à-coup en translation (effet catapulte sur nacelle à bras)</td><td>Rester sur le plancher, portillon fermé, harnais attaché si prévu</td></tr>
<tr><td>Écrasement, coincement</td><td>Opérateur coincé entre la plate-forme et une poutre, un plafond, une structure</td><td>Mouvements lents près des obstacles, regard dans le sens du mouvement</td></tr>
<tr><td>Chute d'objets</td><td>Outils ou matériaux qui tombent de la plate-forme</td><td>Balisage au sol, outils attachés, rien posé sur les garde-corps</td></tr>
<tr><td>Électrisation</td><td>Approche d'une ligne électrique aérienne</td><td>Respect des distances de sécurité, guidage</td></tr>
<tr><td>Heurt par un véhicule</td><td>Travail en bord de route ou dans une zone de circulation</td><td>Balisage, signalisation, déviation de la circulation</td></tr>
</tbody>
</table>
<ul>
<li>On ne monte <strong>jamais</strong> sur les garde-corps ni sur un objet posé sur le plancher pour gagner de la hauteur.</li>
<li>On ne <strong>quitte pas</strong> la plate-forme en hauteur pour accéder à un toit ou à une structure, sauf procédure spécifique prévue et organisée.</li>
<li>Le <strong>portillon</strong> ou la lisse d'accès est refermé avant tout mouvement.</li>
</ul>`
        },
        {
          titre: "Le harnais",
          contenu: `<p>Les garde-corps de la plate-forme protègent contre la chute. Mais sur une nacelle <strong>à bras (groupe B)</strong>, un choc ou un à-coup (roue qui tombe dans un trou, heurt d'un obstacle) peut faire fouetter le bras et <strong>éjecter</strong> l'opérateur par-dessus le garde-corps : c'est l'<strong>effet catapulte</strong>.</p>
<ul>
<li>Sur les nacelles du <strong>groupe B</strong>, le port d'un <strong>harnais</strong> relié à un <strong>point d'ancrage de la plate-forme</strong> est exigé par les constructeurs et les règles de la plupart des sites, et recommandé par les organismes de prévention.</li>
<li>Sur les nacelles du <strong>groupe A</strong> (ciseaux), les garde-corps assurent en principe la protection ; le harnais est porté lorsque la <strong>notice</strong> ou les <strong>consignes</strong> l'imposent.</li>
<li>La longe est <strong>courte</strong> (elle sert à retenir l'opérateur dans la plate-forme) et elle est accrochée uniquement aux <strong>points d'ancrage prévus</strong> par le constructeur, jamais à une structure extérieure ni à un élément non conçu pour cela.</li>
<li>Le harnais est vérifié avant chaque utilisation (sangles, coutures, connecteurs) et ajusté à la morphologie.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> en nacelle, le harnais ne s'accroche pas à la charpente ou au bâtiment : si la nacelle bouge, l'opérateur serait arraché de la plate-forme. On s'accroche au point d'ancrage de la plate-forme.</div>`
        },
        {
          titre: "Secours et redescente d'urgence",
          contenu: `<p>Un opérateur en hauteur peut faire un malaise, rester coincé contre une structure, ou se retrouver bloqué par une panne. Il faut donc que quelqu'un puisse le redescendre. Pour cela :</p>
<ul>
<li>l'opérateur ne travaille <strong>jamais seul</strong> : une <strong>personne au sol</strong>, désignée et formée, connaît les <strong>commandes de secours</strong> et la <strong>procédure de dépannage</strong> de la machine ;</li>
<li>les commandes au sol permettent de reprendre la main sur la plate-forme ; un dispositif de <strong>descente de secours</strong> (manuel ou électrique de secours) permet de ramener la plate-forme en cas de panne d'énergie ;</li>
<li>la procédure de secours est connue <strong>avant</strong> de monter : emplacement des commandes, ordre des manœuvres, numéros d'urgence.</li>
</ul>
<p>Si un opérateur reste suspendu dans son harnais après une chute, il doit être secouru <strong>rapidement</strong> : la suspension prolongée immobile est dangereuse pour la circulation sanguine.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> la plate-forme est coincée sous une poutre et l'opérateur, pris contre le garde-corps, ne peut plus atteindre les commandes. La personne au sol coupe les mouvements en cours, puis, avec les commandes au sol, fait les mouvements inverses pour dégager la plate-forme, selon la procédure du constructeur, et alerte les secours.</div>`
        },
        {
          titre: "Balisage et organisation du chantier",
          contenu: `<ul>
<li>La zone au sol sous la plate-forme et autour de la machine est <strong>balisée</strong> pour empêcher le passage sous la charge et le heurt par des piétons ou des véhicules.</li>
<li>En bord de voie, la signalisation temporaire de chantier est mise en place selon les règles de la voirie et les autorisations obtenues.</li>
<li>On repère au préalable les <strong>obstacles en hauteur</strong> (poutres, câbles, branches) et les <strong>lignes électriques</strong>.</li>
<li>Les déplacements plate-forme haute (type 3) se font lentement, sur un sol plat et dégagé, en regardant dans le sens de la marche et en surveillant les obstacles au-dessus.</li>
<li>Les outils sont rangés ou attachés ; rien n'est posé sur les garde-corps.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> une machine thermique ne doit pas fonctionner dans un local fermé mal ventilé ; une machine électrique ou bi-énergie est alors choisie.</div>`
        },
        {
          titre: "Vérifications de la PEMP",
          contenu: `<p>Comme les chariots, les PEMP font l'objet d'une <strong>vérification générale périodique tous les 6 mois</strong>, consignée au registre de sécurité, et d'une vérification de remise en service après réparation importante ou accident.</p>
<p>À la <strong>prise de poste</strong>, l'opérateur vérifie notamment :</p>
<table>
<thead><tr><th>Élément</th><th>Contrôle</th></tr></thead>
<tbody>
<tr><td>Documents</td><td>Notice présente, VGP à jour, plaques lisibles (charge maximale, nombre de personnes, vent)</td></tr>
<tr><td>Structure</td><td>Absence de fissure, de déformation, de fuite hydraulique ; pneus et stabilisateurs en bon état</td></tr>
<tr><td>Plate-forme</td><td>Garde-corps complets, portillon qui se referme, points d'ancrage en bon état</td></tr>
<tr><td>Commandes</td><td>Fonctionnement des commandes de la plate-forme et des commandes au sol</td></tr>
<tr><td>Sécurités</td><td>Arrêt d'urgence, alarme de dévers, contrôleur de charge, avertisseur, dispositif de descente de secours</td></tr>
<tr><td>Énergie</td><td>Niveau de carburant ou charge de batterie, niveau d'huile hydraulique</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> on essaie les commandes au sol avant de monter. Une PEMP dont un dispositif de sécurité ne fonctionne pas n'est pas utilisée.</div>`
        }
      ],
      points_cles: [
        "Risques majeurs : renversement, éjection, écrasement contre une structure, chute d'objets, électrisation",
        "Ne jamais monter sur les garde-corps ni quitter la plate-forme en hauteur",
        "Nacelle à bras (groupe B) : harnais attaché au point d'ancrage de la plate-forme",
        "Longe courte, accrochée uniquement aux points d'ancrage prévus par le constructeur",
        "Jamais seul : une personne au sol formée aux commandes de secours",
        "Baliser la zone au sol sous la plate-forme",
        "VGP tous les 6 mois ; essai des commandes au sol et des sécurités à la prise de poste"
      ]
    }
  );

  P.questions.push(
    { id: "R486-001", chapitre: "r486-pemp-categories-stabilite",
      q: "Une nacelle à ciseaux, dont la plate-forme monte à la verticale du châssis, appartient au :", options: ["Groupe A", "Groupe B"], bonnes: [0],
      explication: "Dans le groupe A, la projection verticale du centre de gravité de la charge reste toujours à l'intérieur des lignes de basculement : c'est le cas des nacelles à ciseaux ou à mât vertical." },
    { id: "R486-002", chapitre: "r486-pemp-categories-stabilite",
      q: "Une nacelle à bras articulé appartient au :", options: ["Groupe A", "Groupe B"], bonnes: [1],
      explication: "Le bras peut porter la plate-forme hors des lignes de basculement : la nacelle à bras articulé ou télescopique est du groupe B." },
    { id: "R486-003", chapitre: "r486-pemp-categories-stabilite",
      q: "Une PEMP de type 3 est une machine dont :", options: ["La translation n'est possible qu'en position de transport", "La translation plate-forme haute est commandée depuis le châssis", "La translation plate-forme haute est commandée depuis la plate-forme"], bonnes: [2],
      explication: "Type 1 : translation en position de transport ; type 2 : translation plate-forme haute commandée du châssis ; type 3 : translation plate-forme haute commandée de la plate-forme." },
    { id: "R486-004", chapitre: "r486-pemp-categories-stabilite",
      q: "Une PEMP de type 1 :", options: ["Ne peut être déplacée qu'en position de transport", "Peut être déplacée plate-forme haute"], bonnes: [0],
      explication: "Sur une PEMP de type 1, la translation n'est possible qu'en position de transport, plate-forme repliée." },
    { id: "R486-005", chapitre: "r486-pemp-categories-stabilite", situation: "Vous devez travailler dans une nacelle à bras télescopique automotrice, que l'on déplace depuis la plate-forme.",
      q: "Il me faut le CACES R486 de catégorie :", options: ["A", "B", "C"], bonnes: [1],
      explication: "La catégorie B couvre les PEMP du groupe B (élévation multidirectionnelle), de type 1 ou 3. La nacelle à bras télescopique est du groupe B." },
    { id: "R486-006", chapitre: "r486-pemp-categories-stabilite",
      q: "La catégorie C de la R486 permet :", options: ["De travailler en hauteur sur toutes les PEMP", "De déplacer et de charger les PEMP sur un porte-engins, hors production", "De conduire les chariots élévateurs"], bonnes: [1],
      explication: "La catégorie C concerne la conduite hors production des PEMP des catégories A ou B : déplacement, chargement, maintenance, démonstration. Elle ne permet pas de travailler en hauteur." },
    { id: "R486-007", chapitre: "r486-pemp-categories-stabilite",
      q: "Une PEMP peut servir à monter des matériaux lourds comme un monte-charge :", options: ["Oui, dans la limite de sa charge maximale", "Non, sauf équipement spécifique prévu par le constructeur"], bonnes: [1],
      explication: "La PEMP est conçue pour élever des personnes avec leurs outils et matériaux de travail. Elle ne s'utilise pas comme monte-charge ni comme grue, sauf équipement prévu par le constructeur." },
    { id: "R486-008", chapitre: "r486-pemp-categories-stabilite", situation: "La plaque de votre nacelle indique 230 kg et 2 personnes. Vous êtes deux opérateurs de 85 kg chacun et vous emportez 80 kg de matériel.",
      q: "Je peux monter :", options: ["Oui", "Non, la charge maximale est dépassée"], bonnes: [1],
      explication: "85 + 85 + 80 = 250 kg, au-delà des 230 kg admis. La charge maximale comprend les personnes, les outils et les matériaux." },
    { id: "R486-009", chapitre: "r486-pemp-categories-stabilite",
      q: "Avant d'installer la nacelle, je vérifie :", options: ["La portance du sol", "La pente et le dévers", "La présence de plaques d'égout ou de tranchées rebouchées", "La couleur du bâtiment"], bonnes: [0, 1, 2],
      explication: "Un sol trop meuble, une pente excessive, une plaque d'égout ou une tranchée rebouchée peuvent provoquer le renversement de la machine." },
    { id: "R486-010", chapitre: "r486-pemp-categories-stabilite", situation: "Votre nacelle sur porteur est équipée de stabilisateurs. Le sol est un terrain en herbe.",
      q: "Je dois :", options: ["Déployer les stabilisateurs avant toute élévation", "Placer des plaques de répartition sous les patins", "Lever d'abord la plate-forme puis sortir les stabilisateurs"], bonnes: [0, 1],
      explication: "Les stabilisateurs sont déployés et calés avant l'élévation ; sur un sol peu porteur, des plaques de répartition étalent la charge sous les patins." },
    { id: "R486-011", chapitre: "r486-pemp-categories-stabilite", situation: "L'alarme de dévers de votre nacelle se déclenche en hauteur.",
      q: "Je dois :", options: ["Neutraliser l'alarme pour finir le travail", "Redescendre et repositionner la machine", "Continuer en limitant les mouvements"], bonnes: [1],
      explication: "L'alarme de dévers signale que la machine sort de son domaine de stabilité. On ramène la plate-forme selon la procédure du constructeur et on réinstalle la machine sur un sol conforme. On ne neutralise jamais une sécurité." },
    { id: "R486-012", chapitre: "r486-pemp-categories-stabilite",
      q: "La vitesse maximale de vent admissible pour une PEMP :", options: ["Est indiquée par le constructeur sur la machine", "Est la même pour toutes les machines", "Peut être nulle pour une machine réservée à l'intérieur"], bonnes: [0, 2],
      explication: "C'est la valeur du constructeur qui fait foi. Beaucoup de machines d'extérieur admettent environ 12,5 m/s, mais certaines machines sont réservées à l'intérieur (vent nul)." },
    { id: "R486-013", chapitre: "r486-pemp-categories-stabilite",
      q: "La vitesse du vent se mesure avec :", options: ["Un anémomètre", "Un baromètre", "Un niveau à bulle"], bonnes: [0],
      explication: "L'anémomètre mesure la vitesse du vent. Le baromètre mesure la pression atmosphérique, le niveau à bulle l'horizontalité." },
    { id: "R486-014", chapitre: "r486-pemp-categories-stabilite", situation: "Au sol, le vent est faible. Vous devez travailler à 18 m de haut entre deux bâtiments.",
      q: "Je dois tenir compte du fait que :", options: ["Le vent est souvent plus fort en hauteur", "Des rafales peuvent se produire entre les bâtiments", "Le vent n'a pas d'effet sur une nacelle"], bonnes: [0, 1],
      explication: "Le vent augmente avec la hauteur et s'accélère entre les bâtiments. Il exerce une poussée sur la plate-forme et peut déstabiliser la machine." },
    { id: "R486-015", chapitre: "r486-pemp-categories-stabilite", situation: "Vous devez installer de grands panneaux de bardage depuis la plate-forme par vent modéré.",
      q: "Ces panneaux :", options: ["Augmentent la prise au vent", "Peuvent déstabiliser la machine", "N'ont aucune influence"], bonnes: [0, 1],
      explication: "Les grandes surfaces (panneaux, bâches) offrent une forte prise au vent et augmentent l'effort sur la machine. Il faut en tenir compte et respecter la notice." },
    { id: "R486-016", chapitre: "r486-pemp-categories-stabilite",
      q: "Le contrôleur de charge d'une PEMP :", options: ["Empêche certains mouvements en cas de surcharge", "Peut être neutralisé si le chef de chantier l'autorise"], bonnes: [0],
      explication: "Le contrôleur de charge bloque les mouvements en cas de surcharge. Un dispositif de sécurité ne doit jamais être neutralisé." },
    { id: "R486-017", chapitre: "r486-risques-harnais-secours", situation: "Vous travaillez dans une nacelle à bras articulé.",
      q: "J'accroche mon harnais :", options: ["Au point d'ancrage prévu dans la plate-forme", "À la charpente du bâtiment", "Au garde-corps, n'importe où"], bonnes: [0],
      explication: "La longe s'accroche au point d'ancrage prévu par le constructeur dans la plate-forme. Accrochée au bâtiment, elle arracherait l'opérateur de la plate-forme si la nacelle bougeait." },
    { id: "R486-018", chapitre: "r486-risques-harnais-secours",
      q: "L'effet catapulte, qui peut éjecter l'opérateur, concerne surtout :", options: ["Les nacelles à bras (groupe B)", "Les nacelles à ciseaux (groupe A)"], bonnes: [0],
      explication: "Sur une nacelle à bras, un choc ou une roue qui tombe dans un trou fait fouetter le bras et peut éjecter l'opérateur : d'où le harnais attaché à la plate-forme." },
    { id: "R486-019", chapitre: "r486-risques-harnais-secours",
      q: "Pour atteindre un point un peu trop haut, je peux monter sur le garde-corps de la plate-forme :", options: ["Oui, si je suis attaché", "Non, jamais"], bonnes: [1],
      explication: "On ne monte jamais sur les garde-corps ni sur un objet posé sur le plancher. On repositionne la plate-forme." },
    { id: "R486-020", chapitre: "r486-risques-harnais-secours", situation: "Vous devez intervenir seul avec une nacelle sur un site isolé.",
      q: "Cette organisation est :", options: ["Acceptable si j'ai mon CACES", "À refuser : une personne formée doit rester au sol"], bonnes: [1],
      explication: "L'opérateur ne travaille jamais seul : une personne au sol, formée aux commandes de secours, doit pouvoir le redescendre en cas de malaise ou de blocage." },
    { id: "R486-021", chapitre: "r486-risques-harnais-secours",
      q: "La personne restée au sol doit :", options: ["Connaître l'emplacement et l'usage des commandes de secours", "Connaître la procédure de dépannage de la machine", "Savoir alerter les secours"], bonnes: [0, 1, 2],
      explication: "La personne au sol doit pouvoir reprendre la main sur la plate-forme, appliquer la procédure de dépannage et alerter les secours." },
    { id: "R486-022", chapitre: "r486-risques-harnais-secours", situation: "La nacelle tombe en panne d'énergie, plate-forme en hauteur.",
      q: "Pour redescendre l'opérateur, on utilise :", options: ["Le dispositif de descente de secours prévu par le constructeur", "Une échelle posée contre la plate-forme", "Un chariot élévateur pour lever un collègue"], bonnes: [0],
      explication: "Chaque PEMP dispose d'un dispositif de descente de secours, utilisé selon la procédure du constructeur. Les autres solutions exposent à des chutes graves." },
    { id: "R486-023", chapitre: "r486-risques-harnais-secours",
      q: "Une personne restée suspendue dans son harnais après une chute :", options: ["Doit être secourue rapidement", "Peut attendre sans risque la fin du chantier"], bonnes: [0],
      explication: "La suspension prolongée immobile dans un harnais perturbe la circulation sanguine et peut devenir grave : le secours doit être rapide." },
    { id: "R486-024", chapitre: "r486-risques-harnais-secours",
      q: "Sous la zone de travail de la nacelle, je dois :", options: ["Baliser la zone au sol", "Laisser circuler les piétons", "Interdire le passage sous la plate-forme"], bonnes: [0, 2],
      explication: "Des outils ou matériaux peuvent tomber de la plate-forme : la zone au sol est balisée et le passage dessous interdit." },
    { id: "R486-025", chapitre: "r486-risques-harnais-secours", situation: "Vous travaillez sous une charpente métallique avec une nacelle à bras.",
      q: "Le risque particulier est :", options: ["D'être écrasé entre la plate-forme et une poutre", "Aucun, la charpente protège du vent"], bonnes: [0],
      explication: "Près d'une structure, l'opérateur peut être coincé entre la plate-forme et un élément fixe. On manœuvre lentement en regardant dans le sens du mouvement." },
    { id: "R486-026", chapitre: "r486-risques-harnais-secours",
      q: "Le portillon d'accès de la plate-forme :", options: ["Doit être fermé avant tout mouvement", "Peut rester ouvert pour faciliter le travail"], bonnes: [0],
      explication: "Le portillon fait partie de la protection collective contre la chute : il est refermé avant tout mouvement." },
    { id: "R486-027", chapitre: "r486-risques-harnais-secours", situation: "Votre plate-forme est à 8 m, contre le toit d'un bâtiment. Vous aimeriez passer sur le toit pour gagner du temps.",
      q: "Je peux le faire :", options: ["Oui, en restant attaché à la plate-forme", "Non, sauf procédure spécifique prévue et organisée"], bonnes: [1],
      explication: "On ne quitte pas la plate-forme en hauteur, sauf procédure spécifique prévue, organisée et autorisée. Sinon, on se retrouve sans protection, ou relié à une machine qui peut bouger." },
    { id: "R486-028", chapitre: "r486-risques-harnais-secours",
      q: "Les vérifications générales périodiques d'une PEMP ont lieu :", options: ["Tous les 6 mois", "Tous les 2 ans", "Seulement à l'achat"], bonnes: [0],
      explication: "Les PEMP sont soumises à une vérification générale périodique tous les 6 mois, consignée dans le registre de sécurité." },
    { id: "R486-029", chapitre: "r486-risques-harnais-secours",
      q: "À la prise de poste, je vérifie :", options: ["Le fonctionnement des commandes au sol", "L'arrêt d'urgence", "L'état des garde-corps et du portillon", "Que la notice est présente"], bonnes: [0, 1, 2, 3],
      explication: "Commandes au sol, arrêt d'urgence, garde-corps, portillon, documents (notice, VGP) font partie des vérifications de prise de poste." },
    { id: "R486-030", chapitre: "r486-risques-harnais-secours", situation: "Avant d'utiliser votre harnais, vous constatez qu'une sangle est effilochée.",
      q: "Je dois :", options: ["L'utiliser quand même, une sangle suffit", "Ne pas l'utiliser et le faire remplacer"], bonnes: [1],
      explication: "Un EPI détérioré ne protège plus. Le harnais est vérifié avant chaque usage et remplacé s'il est abîmé." },
    { id: "R486-031", chapitre: "r486-risques-harnais-secours", situation: "Vous déplacez une nacelle de type 3 plate-forme haute dans un hall.",
      q: "Je dois :", options: ["Rouler lentement sur un sol plat et dégagé", "Surveiller les obstacles en hauteur", "Regarder dans le sens de la marche"], bonnes: [0, 1, 2],
      explication: "La translation plate-forme haute se fait lentement, sur sol plat, en surveillant le sol, les obstacles en hauteur et le sens de la marche." },
    { id: "R486-032", chapitre: "r486-risques-harnais-secours",
      q: "Dans une nacelle à ciseaux (groupe A), le harnais est porté :", options: ["Lorsque la notice ou les consignes l'imposent", "Jamais, il est interdit"], bonnes: [0],
      explication: "Sur les nacelles du groupe A, les garde-corps assurent en principe la protection ; le harnais est porté si la notice du constructeur ou les consignes du site l'imposent." }
  );
})();

/* ───────────── Thème R482 — Engins de chantier ───────────── */
(function () {
  const P = window.PERMIS_COURS["caces"] = window.PERMIS_COURS["caces"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "r482-categories-stabilite",
      theme: "R482",
      titre: "R482 : catégories d'engins, stabilité et protection du conducteur",
      duree: 25,
      objectifs: [
        "Associer chaque catégorie R482 aux engins qu'elle couvre",
        "Comprendre les causes de renversement d'un engin de chantier",
        "Connaître le rôle des structures ROPS et FOPS et de la ceinture",
        "Monter, descendre et quitter un engin en sécurité",
        "Travailler en sécurité autour de l'engin et près des fouilles"
      ],
      sections: [
        {
          titre: "Les catégories de la recommandation R482",
          contenu: `<p>La recommandation R482 couvre les <strong>engins de chantier</strong> mobiles. Le CACES R482 est valable <strong>10 ans</strong>.</p>
<table>
<thead><tr><th>Catégorie</th><th>Engins</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>A</td><td>Engins compacts (masse jusqu'à 6 tonnes)</td><td>Mini-pelles, mini-chargeuses, petits compacteurs, petits dumpers</td></tr>
<tr><td>B1</td><td>Engins d'extraction à déplacement séquentiel</td><td>Pelles hydrauliques sur chenilles ou sur pneus</td></tr>
<tr><td>B2</td><td>Engins de forage à déplacement séquentiel</td><td>Foreuses</td></tr>
<tr><td>B3</td><td>Engins rail-route à déplacement séquentiel</td><td>Pelles rail-route</td></tr>
<tr><td>C1</td><td>Engins de chargement à déplacement alternatif</td><td>Chargeuses, chargeuses-pelleteuses</td></tr>
<tr><td>C2</td><td>Engins de réglage à déplacement alternatif</td><td>Bouteurs, tracteurs à chenilles</td></tr>
<tr><td>C3</td><td>Niveleuses automotrices</td><td>Niveleuses</td></tr>
<tr><td>D</td><td>Engins de compactage</td><td>Compacteurs</td></tr>
<tr><td>E</td><td>Engins de transport ou d'extraction-transport</td><td>Tombereaux, dumpers, décapeuses</td></tr>
<tr><td>F</td><td>Chariots de manutention tout-terrain</td><td>Chariots télescopiques, chariots tout-terrain à mât</td></tr>
<tr><td>G</td><td>Conduite d'engins hors production</td><td>Déplacement, chargement sur porte-engins, maintenance, démonstration</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le chariot télescopique de chantier n'est pas un chariot R489 : c'est un engin R482 de catégorie F. Et la catégorie G, comme la catégorie 7 de la R489, n'autorise pas le travail de production.</div>`
        },
        {
          titre: "Stabilité et risques de renversement",
          contenu: `<p>Le renversement est la première cause d'accident mortel avec les engins de chantier. Il survient surtout :</p>
<ul>
<li>en <strong>circulant en travers d'une pente</strong> ou sur un dévers ;</li>
<li>au <strong>bord d'une fouille, d'un talus ou d'un remblai</strong> qui s'effondre sous le poids de l'engin ;</li>
<li>en circulant avec l'<strong>équipement levé</strong> (godet, bras, flèche, benne) : le centre de gravité monte ;</li>
<li>par <strong>vitesse excessive</strong>, braquage brutal, obstacle heurté ;</li>
<li>lors d'une <strong>surcharge</strong> ou d'une manutention hors des capacités de l'engin.</li>
</ul>
<p>Les bonnes pratiques : circuler <strong>équipement en position basse</strong> (godet près du sol, benne baissée), monter et descendre les pentes <strong>dans l'axe</strong>, garder une <strong>distance suffisante</strong> avec les bords de fouille et de talus, adapter la vitesse au terrain.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un tombereau vient vider ses matériaux en haut d'un talus. Le conducteur s'arrête à distance du bord, derrière un merlon de butée, et vide sur un sol stable : le bord du talus, chargé, pourrait s'effondrer sous les roues.</div>
<p>Une pelle hydraulique peut lever une charge accrochée (tuyau, regard) uniquement si elle est <strong>équipée et prévue</strong> pour cela par le constructeur : point d'accrochage, dispositif contre la descente non contrôlée de la flèche, tableau des charges, avertisseur de surcharge.</p>`
        },
        {
          titre: "ROPS, FOPS et ceinture",
          contenu: `<table>
<thead><tr><th>Sigle</th><th>Signification</th><th>Protège contre</th></tr></thead>
<tbody>
<tr><td>ROPS</td><td>Structure de protection en cas de retournement</td><td>L'écrasement du conducteur si l'engin se retourne</td></tr>
<tr><td>FOPS</td><td>Structure de protection contre les chutes d'objets</td><td>Les chutes de pierres, de matériaux ou d'objets sur le poste de conduite</td></tr>
</tbody>
</table>
<p>La structure ROPS ne protège le conducteur <strong>que s'il reste à l'intérieur</strong>. C'est pourquoi la <strong>ceinture de sécurité</strong> doit être bouclée chaque fois que l'engin en est équipé. Sans ceinture, le conducteur est projeté hors de la cabine et écrasé par l'engin.</p>
<p>En cas de renversement, la conduite à tenir est la même que pour un chariot : <strong>ne pas sauter</strong>, rester attaché, se tenir fermement et s'arc-bouter.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> une structure ROPS ou FOPS déformée, percée ou modifiée (soudure, perçage pour fixer un accessoire) ne garantit plus la protection. Toute anomalie est signalée.</div>`
        },
        {
          titre: "Monter, descendre et quitter l'engin",
          contenu: `<p>Les chutes en montant ou en descendant de l'engin sont fréquentes (entorses, fractures). On utilise les marchepieds et poignées prévus, en gardant <strong>trois points d'appui</strong> (deux mains et un pied, ou deux pieds et une main), <strong>face à l'engin</strong>. On ne <strong>saute jamais</strong> de la cabine, et on ne se tient pas aux leviers de commande pour monter.</p>
<p>Avant de quitter le poste, même brièvement :</p>
<ul>
<li>stationner sur un sol plat et stable, hors des zones de circulation et à distance des fouilles ;</li>
<li><strong>poser l'équipement au sol</strong> (godet, lame, bras) ;</li>
<li>serrer le frein de stationnement, verrouiller les commandes (levier de sécurité) ;</li>
<li>arrêter le moteur et <strong>retirer la clé</strong>.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> trois points d'appui, face à l'engin. En quittant l'engin : équipement au sol, frein, commandes verrouillées, clé retirée.</div>`
        },
        {
          titre: "Autour de l'engin : zone d'évolution et coactivité",
          contenu: `<p>La zone d'évolution d'un engin est dangereuse pour les personnes à pied. Une <strong>pelle</strong> qui pivote balaie avec son <strong>contrepoids</strong> un cercle souvent mal visible depuis la cabine ; une chargeuse ou un tombereau en marche arrière a des <strong>angles morts</strong> importants.</p>
<ul>
<li>Personne ne doit se trouver dans le <strong>rayon d'action</strong> de l'engin ; la zone est balisée si nécessaire.</li>
<li>Le conducteur vérifie la zone (rétroviseurs, caméra, tour de l'engin) avant de démarrer, de pivoter ou de reculer.</li>
<li>Un piéton qui doit s'approcher (pour un réglage, un guidage) attire l'attention du conducteur et attend son accord ; le conducteur arrête les mouvements et pose l'équipement.</li>
<li>Dans une fouille, personne ne travaille sous le godet ou à portée de l'engin.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> une tranchée dont les parois ne sont pas blindées ou talutées peut s'effondrer. L'engin reste à distance du bord, car son poids augmente le risque d'éboulement sur les personnes qui travaillent au fond.</div>`
        },
        {
          titre: "Vérifications de prise de poste",
          contenu: `<p>Avant de démarrer, le conducteur fait le <strong>tour de l'engin</strong> et contrôle :</p>
<ul>
<li>l'absence de fuite (huile, carburant, liquide de refroidissement) et de pièce desserrée ou cassée ;</li>
<li>l'état des pneumatiques ou des chenilles, des dents de godet, des axes et de leurs arrêtoirs ;</li>
<li>l'état de la cabine, de la structure ROPS ou FOPS, des vitres, des rétroviseurs et de la caméra éventuelle ;</li>
<li>les niveaux, puis, moteur en marche, les voyants, les freins, la direction, l'avertisseur, l'alarme de recul, les feux et le gyrophare ;</li>
<li>le fonctionnement de la ceinture et des commandes de l'équipement ;</li>
<li>pour un attache-rapide, le <strong>verrouillage effectif</strong> de l'outil avant de l'utiliser.</li>
</ul>
<p>Toute anomalie touchant la sécurité est signalée et l'engin n'est pas utilisé tant qu'elle n'est pas réparée. Les engins utilisés pour lever des charges font en plus l'objet des vérifications générales périodiques des appareils de levage.</p>`
        }
      ],
      points_cles: [
        "A engins compacts (jusqu'à 6 t), B1 pelles, C1 chargeuses, C2 bouteurs, D compacteurs, E tombereaux, F chariots tout-terrain, G hors production",
        "CACES R482 valable 10 ans",
        "Renversement : pente prise en travers, bord de fouille, équipement levé, vitesse",
        "Circuler équipement en position basse et monter ou descendre les pentes dans l'axe",
        "ROPS = protection en cas de retournement ; FOPS = protection contre les chutes d'objets",
        "La ROPS ne protège que si la ceinture est bouclée",
        "Trois points d'appui face à l'engin ; ne jamais sauter de la cabine",
        "Personne dans le rayon d'action de l'engin, ni sous le godet"
      ]
    },
    {
      id: "r482-reseaux-circulation-transport",
      theme: "R482",
      titre: "R482 : réseaux, circulation sur chantier et transport de l'engin",
      duree: 20,
      objectifs: [
        "Connaître la procédure DT-DICT et le rôle de l'AIPR",
        "Lire le marquage-piquetage et les couleurs des réseaux",
        "Réagir en cas d'endommagement d'un réseau",
        "Circuler sur un chantier en respectant le plan de circulation",
        "Charger un engin sur un porte-engins en sécurité"
      ],
      sections: [
        {
          titre: "Les réseaux enterrés : DT et DICT",
          contenu: `<p>Le sous-sol contient de nombreux réseaux : électricité, gaz, eau, assainissement, télécommunications… Les endommager peut provoquer une <strong>explosion</strong>, une <strong>électrocution</strong>, une pollution ou une coupure de service. Une réglementation spécifique encadre donc les travaux à proximité des réseaux :</p>
<ul>
<li>la <strong>DT</strong> (déclaration de projet de travaux) est faite par le <strong>responsable du projet</strong> (le maître d'ouvrage) ;</li>
<li>la <strong>DICT</strong> (déclaration d'intention de commencement de travaux) est faite par l'<strong>entreprise qui exécute les travaux</strong> ;</li>
<li>ces déclarations passent par le <strong>guichet unique</strong> national, qui identifie les exploitants de réseaux concernés ; ceux-ci répondent en indiquant la localisation de leurs ouvrages et les recommandations à suivre.</li>
</ul>
<p>Le conducteur d'engin qui travaille à proximité des réseaux doit être titulaire d'une <strong>AIPR</strong> (autorisation d'intervention à proximité des réseaux), délivrée par l'employeur après un examen. L'AIPR existe pour trois profils : concepteur, encadrant et opérateur. Le conducteur d'engin relève du profil <strong>opérateur</strong>.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> DT par le maître d'ouvrage, DICT par l'entreprise de travaux, AIPR pour le conducteur. Pas de terrassement sans connaître l'emplacement des réseaux.</div>`
        },
        {
          titre: "Marquage-piquetage et couleurs des réseaux",
          contenu: `<p>Avant les travaux, l'emplacement des réseaux est matérialisé sur le terrain par un <strong>marquage-piquetage</strong> (peinture au sol, piquets, fanions). Chaque type de réseau a sa <strong>couleur conventionnelle</strong>, que l'on retrouve aussi sur le <strong>grillage avertisseur</strong> posé au-dessus des canalisations enterrées.</p>
<table>
<thead><tr><th>Couleur</th><th>Réseau</th></tr></thead>
<tbody>
<tr><td>Rouge</td><td>Électricité (et éclairage public)</td></tr>
<tr><td>Jaune</td><td>Gaz combustible, hydrocarbures</td></tr>
<tr><td>Orange</td><td>Produits chimiques</td></tr>
<tr><td>Bleu</td><td>Eau potable</td></tr>
<tr><td>Marron</td><td>Assainissement, eaux pluviales</td></tr>
<tr><td>Vert</td><td>Télécommunications</td></tr>
<tr><td>Violet</td><td>Chauffage et climatisation</td></tr>
</tbody>
</table>
<p>À proximité immédiate d'un réseau, dans la zone où sa position n'est pas connue avec précision, on n'utilise pas le godet pour creuser : on emploie des <strong>techniques douces</strong> (terrassement manuel, aspiration) selon les recommandations de l'exploitant.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la découverte d'un grillage avertisseur signifie qu'un réseau est <strong>juste en dessous</strong>. On arrête de creuser à l'engin.</div>`
        },
        {
          titre: "En cas d'endommagement d'un réseau",
          contenu: `<p>Si l'engin accroche ou endommage un réseau, la conduite à tenir suit la règle dite des <strong>« 4 A »</strong> :</p>
<ol>
<li><strong>Arrêter</strong> les travaux et les engins à proximité (sans provoquer d'étincelle en cas de fuite de gaz).</li>
<li><strong>Alerter</strong> : l'exploitant du réseau (numéro d'urgence figurant sur le récépissé de DICT), les secours (18 ou 112) en cas de fuite de gaz ou de danger, et son encadrement.</li>
<li><strong>Aménager</strong> une zone de sécurité : éloigner les personnes, interdire l'accès, supprimer les sources d'inflammation (pas de cigarette, pas de flamme).</li>
<li><strong>Accueillir</strong> les secours et l'exploitant, et leur donner les informations.</li>
</ol>
<div class="encart" data-type="danger"><strong>Attention :</strong> ne jamais tenter de colmater une fuite, de reboucher la fouille ou de déplacer soi-même un câble endommagé. Un câble électrique arraché doit être considéré comme sous tension.</div>
<p>Même un dommage qui paraît léger (gaine éraflée, revêtement d'une conduite de gaz rayé) doit être <strong>signalé à l'exploitant</strong> : il peut provoquer une fuite ou un défaut plus tard.</p>`
        },
        {
          titre: "Circulation sur chantier",
          contenu: `<p>Le chantier doit disposer d'un <strong>plan de circulation</strong> : pistes réservées aux engins, cheminements piétons, sens de circulation, zones de demi-tour, vitesses limites <span class="panneau" data-code="B14:20"></span>. Le conducteur :</p>
<ul>
<li>respecte les pistes, les vitesses et la signalisation du chantier ;</li>
<li>circule <strong>équipement en position basse</strong> et ceinture bouclée ;</li>
<li>regarde dans le sens de la marche et utilise rétroviseurs et caméras, en particulier en marche arrière ;</li>
<li>s'arrête si un piéton entre dans sa zone d'évolution ;</li>
<li>ne transporte <strong>aucun passager</strong> hors d'un siège prévu, ni personne dans le godet ;</li>
<li>est guidé lorsque la visibilité est insuffisante.</li>
</ul>
<p>Sur la voie publique, l'engin est soumis au Code de la route : le conducteur doit être titulaire des titres de conduite exigés pour ce véhicule, et l'engin doit être équipé et signalé en conséquence.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un tombereau doit reculer jusqu'au point de déchargement, où travaillent des ouvriers. Un guide, en vue du conducteur, dirige la manœuvre ; si le conducteur le perd de vue, il s'arrête.</div>`
        },
        {
          titre: "Transport de l'engin",
          contenu: `<p>Le chargement d'un engin sur un <strong>porte-engins</strong> est une opération à risque de renversement. Elle relève de la conduite hors production (catégorie G) ou de la catégorie de l'engin.</p>
<ol>
<li>Le porte-engins est stationné sur un sol plat et stable, freiné, moteur arrêté.</li>
<li>Les rampes sont correctement fixées, écartées à la largeur de l'engin et adaptées à son poids.</li>
<li>L'engin monte <strong>lentement, dans l'axe</strong>, sans changer de direction sur les rampes, guidé par une personne placée hors de la trajectoire.</li>
<li>Une fois en place, l'engin est centré, l'<strong>équipement posé</strong> sur le plateau, le frein serré, la tourelle verrouillée si elle existe, le moteur arrêté et la clé retirée.</li>
<li>L'engin est <strong>arrimé</strong> sur les points d'arrimage prévus avant le départ.</li>
</ol>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> rampes alignées, montée lente dans l'axe, jamais de virage sur les rampes, équipement posé, arrimage avant le départ.</div>
<p>Pendant le transport, la <strong>hauteur totale</strong> du convoi doit être compatible avec les ponts, les portiques et les <strong>lignes électriques aériennes</strong> du trajet : un bras de pelle mal replié peut accrocher un ouvrage ou s'approcher d'une ligne. Au déchargement, on applique les mêmes règles qu'au chargement : sol plat, rampes alignées, descente lente dans l'axe.</p>
<h4>Les lignes aériennes sur le chantier</h4>
<p>Les lignes électriques aériennes sont aussi dangereuses que les réseaux enterrés : un bras de pelle, une benne levée ou la flèche d'un télescopique peuvent s'en approcher sans que le conducteur s'en rende compte. Elles sont repérées avant les travaux, signalées et, si nécessaire, protégées par des <strong>portiques de gabarit</strong> ou un balisage qui empêche de passer dessous équipement levé. Les distances à respecter sont détaillées dans le chapitre consacré au risque électrique.</p>`
        }
      ],
      points_cles: [
        "DT par le maître d'ouvrage, DICT par l'entreprise de travaux, via le guichet unique",
        "AIPR obligatoire pour le conducteur d'engin travaillant à proximité des réseaux",
        "Couleurs : rouge électricité, jaune gaz, bleu eau potable, marron assainissement, vert télécoms, violet chauffage",
        "Grillage avertisseur = réseau juste en dessous : arrêt du terrassement à l'engin",
        "Réseau endommagé : arrêter, alerter, aménager une zone de sécurité, accueillir les secours",
        "Ne jamais colmater une fuite ni toucher un câble arraché",
        "Sur chantier : plan de circulation, équipement bas, ceinture, aucun passager",
        "Chargement sur porte-engins : rampes alignées, montée lente dans l'axe, équipement posé, arrimage"
      ],
      panneaux: ["B14:20"]
    }
  );

  P.questions.push(
    { id: "R482-001", chapitre: "r482-categories-stabilite", situation: "Vous devez conduire une mini-pelle de 2,5 tonnes.",
      q: "La catégorie R482 concernée est la :", options: ["A", "B1", "C1"], bonnes: [0],
      explication: "Les engins compacts, d'une masse jusqu'à 6 tonnes, relèvent de la catégorie A. Les pelles plus lourdes relèvent de la B1." },
    { id: "R482-002", chapitre: "r482-categories-stabilite",
      q: "Une pelle hydraulique sur chenilles de 20 tonnes relève de la catégorie R482 :", options: ["A", "B1", "C2"], bonnes: [1],
      explication: "Les engins d'extraction à déplacement séquentiel, comme les pelles hydrauliques, relèvent de la catégorie B1." },
    { id: "R482-003", chapitre: "r482-categories-stabilite",
      q: "Un bouteur relève de la catégorie R482 :", options: ["C1", "C2", "D"], bonnes: [1],
      explication: "La catégorie C2 couvre les engins de réglage à déplacement alternatif : bouteurs et tracteurs à chenilles. La C1 vise les chargeuses, la D les compacteurs." },
    { id: "R482-004", chapitre: "r482-categories-stabilite",
      q: "Un tombereau (dumper) de chantier relève de la catégorie R482 :", options: ["D", "E", "F"], bonnes: [1],
      explication: "La catégorie E couvre les engins de transport ou d'extraction-transport : tombereaux, dumpers, décapeuses." },
    { id: "R482-005", chapitre: "r482-categories-stabilite",
      q: "Un chariot télescopique de chantier relève :", options: ["De la R482 catégorie F", "De la R489 catégorie 5", "De la R486 catégorie B"], bonnes: [0],
      explication: "Les chariots de manutention tout-terrain, dont les chariots télescopiques, relèvent de la R482 catégorie F." },
    { id: "R482-006", chapitre: "r482-categories-stabilite",
      q: "Une chargeuse-pelleteuse relève de la catégorie R482 :", options: ["B1", "C1", "E"], bonnes: [1],
      explication: "Les engins de chargement à déplacement alternatif, chargeuses et chargeuses-pelleteuses, relèvent de la catégorie C1." },
    { id: "R482-007", chapitre: "r482-categories-stabilite",
      q: "La catégorie G de la R482 permet :", options: ["De déplacer un engin et de le charger sur un porte-engins", "De conduire un engin pour la maintenance ou une démonstration", "De réaliser des terrassements en production"], bonnes: [0, 1],
      explication: "La catégorie G concerne la conduite hors production : déplacement, chargement, maintenance, démonstration. Elle n'autorise pas le travail de production." },
    { id: "R482-008", chapitre: "r482-categories-stabilite",
      q: "Parmi ces situations, lesquelles exposent au renversement d'un engin ?", options: ["Circuler en travers d'une pente", "S'approcher du bord d'une fouille", "Circuler godet levé", "Monter une pente dans l'axe, godet bas"], bonnes: [0, 1, 2],
      explication: "Dévers, bord de fouille et équipement levé favorisent le renversement. Monter dans l'axe de la pente, équipement bas, est la bonne pratique." },
    { id: "R482-009", chapitre: "r482-categories-stabilite",
      q: "Le sigle ROPS désigne une structure de protection :", options: ["En cas de retournement", "Contre les chutes d'objets", "Contre le bruit"], bonnes: [0],
      explication: "ROPS : structure de protection en cas de retournement. FOPS : structure de protection contre les chutes d'objets." },
    { id: "R482-010", chapitre: "r482-categories-stabilite",
      q: "Le sigle FOPS désigne une structure de protection :", options: ["En cas de retournement", "Contre les chutes d'objets"], bonnes: [1],
      explication: "La FOPS protège le conducteur des chutes de pierres, de matériaux ou d'objets sur le poste de conduite." },
    { id: "R482-011", chapitre: "r482-categories-stabilite", situation: "Votre engin est équipé d'une cabine ROPS et d'une ceinture.",
      q: "Je boucle ma ceinture :", options: ["Toujours", "Seulement sur la voie publique", "Seulement en pente"], bonnes: [0],
      explication: "La ROPS ne protège que si le conducteur reste dans la cabine : la ceinture doit être bouclée en permanence." },
    { id: "R482-012", chapitre: "r482-categories-stabilite",
      q: "Pour descendre de la cabine, je dois :", options: ["Descendre face à l'engin", "Garder trois points d'appui", "Sauter pour aller plus vite"], bonnes: [0, 1],
      explication: "On descend face à l'engin, en gardant trois points d'appui sur les marchepieds et poignées. Sauter provoque entorses et fractures." },
    { id: "R482-013", chapitre: "r482-categories-stabilite", situation: "Vous devez quitter votre chargeuse quelques minutes.",
      q: "Avant de descendre, je dois :", options: ["Poser le godet au sol", "Serrer le frein de stationnement", "Arrêter le moteur et retirer la clé", "Laisser le godet levé pour gagner du temps"], bonnes: [0, 1, 2],
      explication: "Avant de quitter l'engin : équipement au sol, frein serré, commandes verrouillées, moteur arrêté, clé retirée. Un godet levé peut redescendre et écraser quelqu'un." },
    { id: "R482-014", chapitre: "r482-categories-stabilite", situation: "Vous travaillez avec une pelle sur chenilles. Un ouvrier se tient près de l'arrière de la machine.",
      q: "Avant de pivoter, je dois :", options: ["M'assurer que personne n'est dans le rayon d'action du contrepoids", "Pivoter lentement, il s'écartera"], bonnes: [0],
      explication: "En pivotant, le contrepoids de la pelle balaie un cercle souvent mal visible. Personne ne doit se trouver dans le rayon d'action de l'engin." },
    { id: "R482-015", chapitre: "r482-categories-stabilite", situation: "Un collègue travaille au fond d'une tranchée non blindée.",
      q: "Avec mon engin, je dois :", options: ["Rester à distance du bord de la tranchée", "Ne pas passer le godet au-dessus de lui", "M'approcher du bord pour mieux voir"], bonnes: [0, 1],
      explication: "Le poids de l'engin près du bord peut provoquer un éboulement sur la personne au fond. On ne passe jamais le godet au-dessus d'une personne." },
    { id: "R482-016", chapitre: "r482-categories-stabilite",
      q: "Je peux utiliser une pelle hydraulique pour lever un tuyau accroché au godet :", options: ["Oui, toujours", "Seulement si la pelle est équipée et prévue par le constructeur pour la manutention"], bonnes: [1],
      explication: "Une pelle ne sert au levage que si elle est équipée pour cela : point d'accrochage, dispositif contre la descente non contrôlée de la flèche, tableau des charges, avertisseur de surcharge." },
    { id: "R482-017", chapitre: "r482-reseaux-circulation-transport",
      q: "La DICT (déclaration d'intention de commencement de travaux) est faite par :", options: ["L'entreprise qui exécute les travaux", "Le maître d'ouvrage", "L'exploitant du réseau"], bonnes: [0],
      explication: "La DICT est faite par l'exécutant des travaux. La DT (déclaration de projet de travaux) est faite par le maître d'ouvrage." },
    { id: "R482-018", chapitre: "r482-reseaux-circulation-transport",
      q: "Pour travailler à proximité des réseaux enterrés, le conducteur d'engin doit être titulaire :", options: ["D'une AIPR", "D'une habilitation électrique de niveau HTA", "D'un permis poids lourd"], bonnes: [0],
      explication: "L'AIPR (autorisation d'intervention à proximité des réseaux), profil opérateur, est exigée des conducteurs d'engins travaillant à proximité des réseaux." },
    { id: "R482-019", chapitre: "r482-reseaux-circulation-transport",
      q: "Sur le terrain, un marquage de couleur rouge signale :", options: ["Un réseau électrique", "Une conduite de gaz", "Une canalisation d'eau potable"], bonnes: [0],
      explication: "Rouge : électricité. Jaune : gaz ; bleu : eau potable." },
    { id: "R482-020", chapitre: "r482-reseaux-circulation-transport",
      q: "Un marquage jaune au sol signale :", options: ["Un réseau de gaz", "Un réseau de télécommunications", "Un réseau d'assainissement"], bonnes: [0],
      explication: "Le jaune est réservé au gaz combustible et aux hydrocarbures. Le vert signale les télécommunications, le marron l'assainissement." },
    { id: "R482-021", chapitre: "r482-reseaux-circulation-transport",
      q: "La couleur conventionnelle de l'eau potable est :", options: ["Le bleu", "Le vert", "Le violet"], bonnes: [0],
      explication: "Bleu : eau potable. Vert : télécommunications. Violet : chauffage et climatisation." },
    { id: "R482-022", chapitre: "r482-reseaux-circulation-transport", situation: "En terrassant, vous mettez au jour un grillage plastique de couleur vive.",
      q: "Je dois :", options: ["Arrêter de creuser avec le godet", "Continuer en creusant plus doucement", "Retirer le grillage avec le godet"], bonnes: [0],
      explication: "Le grillage avertisseur indique qu'un réseau se trouve juste en dessous. On arrête le terrassement à l'engin et on poursuit, si c'est prévu, par des techniques douces." },
    { id: "R482-023", chapitre: "r482-reseaux-circulation-transport", situation: "Votre godet vient d'arracher une conduite. Une odeur de gaz se répand.",
      q: "Je dois :", options: ["Arrêter les travaux", "Faire éloigner les personnes et interdire l'accès", "Alerter les secours et l'exploitant", "Reboucher rapidement la fouille"], bonnes: [0, 1, 2],
      explication: "Règle des 4 A : arrêter, alerter, aménager une zone de sécurité, accueillir les secours. On ne tente jamais de reboucher la fouille ni de colmater la fuite." },
    { id: "R482-024", chapitre: "r482-reseaux-circulation-transport", situation: "En creusant, vous éraflez légèrement la gaine d'un câble, sans coupure apparente.",
      q: "Je dois :", options: ["Ne rien dire, le câble fonctionne", "Signaler le dommage à l'exploitant et à mon encadrement"], bonnes: [1],
      explication: "Même un dommage léger doit être signalé à l'exploitant : une gaine abîmée peut provoquer un défaut plus tard." },
    { id: "R482-025", chapitre: "r482-reseaux-circulation-transport", situation: "Un câble électrique enterré a été arraché par le godet et pend dans la fouille.",
      q: "Je considère ce câble comme :", options: ["Sous tension", "Hors tension puisqu'il est coupé"], bonnes: [0],
      explication: "Un câble endommagé doit toujours être considéré comme sous tension. On ne le touche pas et on éloigne les personnes en attendant l'exploitant." },
    { id: "R482-026", chapitre: "r482-reseaux-circulation-transport", situation: "Vous circulez avec votre chargeuse sur la piste du chantier.",
      q: "Je circule :", options: ["Godet en position basse", "Ceinture bouclée", "Avec un collègue debout sur le marchepied"], bonnes: [0, 1],
      explication: "On circule équipement bas et ceinture bouclée. Le transport de passagers hors d'un siège prévu est interdit." },
    { id: "R482-027", chapitre: "r482-reseaux-circulation-transport", situation: "Sur la piste du chantier.", panneau: "B14:20",
      q: "Ce panneau m'interdit de dépasser :", options: ["20 km/h", "20 m de distance avec l'engin qui précède"], bonnes: [0],
      explication: "Le panneau rond à bord rouge chiffré indique une vitesse maximale, ici 20 km/h. Le plan de circulation du chantier s'impose aux conducteurs d'engins." },
    { id: "R482-028", chapitre: "r482-reseaux-circulation-transport",
      q: "Je peux transporter un collègue dans le godet de ma chargeuse sur une courte distance :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Transporter ou lever une personne dans un godet est interdit : risque de chute et d'écrasement." },
    { id: "R482-029", chapitre: "r482-reseaux-circulation-transport", situation: "Vous devez charger votre pelle sur un porte-engins.",
      q: "Je dois :", options: ["Monter lentement dans l'axe des rampes", "Corriger ma direction en tournant sur les rampes", "Être guidé par une personne placée hors de la trajectoire"], bonnes: [0, 2],
      explication: "La montée se fait lentement, dans l'axe, guidé par une personne hors de la trajectoire. On ne change jamais de direction sur les rampes : l'engin pourrait basculer." },
    { id: "R482-030", chapitre: "r482-reseaux-circulation-transport", situation: "Votre engin est en place sur le plateau du porte-engins.",
      q: "Avant le départ :", options: ["L'équipement est posé sur le plateau", "L'engin est arrimé sur ses points d'arrimage", "La clé est retirée", "Le moteur reste au ralenti"], bonnes: [0, 1, 2],
      explication: "Équipement posé, frein serré, tourelle verrouillée si elle existe, moteur arrêté, clé retirée et arrimage sur les points prévus avant de partir." },
    { id: "R482-031", chapitre: "r482-reseaux-circulation-transport",
      q: "La DT (déclaration de projet de travaux) est faite par :", options: ["Le maître d'ouvrage (responsable du projet)", "Le conducteur d'engin"], bonnes: [0],
      explication: "La DT est faite par le responsable du projet. L'entreprise qui exécute les travaux fait ensuite la DICT." },
    { id: "R482-032", chapitre: "r482-reseaux-circulation-transport", situation: "Un tombereau recule vers une zone où travaillent des ouvriers. Le conducteur perd de vue son guide.",
      q: "Il doit :", options: ["S'arrêter immédiatement", "Continuer en utilisant l'avertisseur"], bonnes: [0],
      explication: "Sans contact visuel avec le guide, le conducteur s'arrête. L'avertisseur ne remplace pas le guidage." }
  );
})();

/* ───────────── Thème ELEC — Risques électriques ───────────── */
(function () {
  const P = window.PERMIS_COURS["caces"] = window.PERMIS_COURS["caces"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "elec-lignes-conduite",
      theme: "ELEC",
      titre: "Risques électriques : lignes aériennes, distances et conduite à tenir",
      duree: 20,
      objectifs: [
        "Connaître les effets du courant électrique sur le corps",
        "Situer les domaines de tension BT, HTA et HTB",
        "Respecter les distances minimales aux lignes aériennes",
        "Savoir quelles mesures prendre quand la distance ne peut pas être respectée",
        "Réagir correctement en cas de contact d'un engin avec une ligne"
      ],
      sections: [
        {
          titre: "Le danger électrique",
          contenu: `<p>Le corps humain conduit l'électricité. Quand un courant le traverse, on parle d'<strong>électrisation</strong> ; quand elle entraîne la mort, d'<strong>électrocution</strong>. Le courant peut provoquer :</p>
<ul>
<li>une <strong>tétanisation</strong> des muscles (la victime ne peut plus lâcher prise) ;</li>
<li>un <strong>arrêt respiratoire</strong> ou un <strong>arrêt cardiaque</strong> (fibrillation) ;</li>
<li>des <strong>brûlures</strong> internes et externes, parfois très graves ;</li>
<li>une <strong>chute</strong> de hauteur provoquée par la secousse.</li>
</ul>
<p>Un <strong>arc électrique</strong> peut aussi se former entre une ligne haute tension et un objet proche, <strong>sans contact direct</strong> : c'est l'<strong>amorçage</strong>. Plus la tension est élevée, plus la distance à laquelle cet arc peut se produire est grande.</p>
<table>
<thead><tr><th>Domaine (courant alternatif)</th><th>Tension</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>Très basse tension (TBT)</td><td>Jusqu'à 50 V</td><td>Circuits de commande, certains outillages</td></tr>
<tr><td>Basse tension (BT)</td><td>De 50 V à 1 000 V</td><td>Prises de courant, réseau de distribution des habitations</td></tr>
<tr><td>Haute tension A (HTA)</td><td>De 1 000 V à 50 000 V</td><td>Lignes de distribution moyenne tension</td></tr>
<tr><td>Haute tension B (HTB)</td><td>Au-delà de 50 000 V</td><td>Lignes de transport à très haute tension, sur grands pylônes</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> on ne peut pas connaître la tension d'une ligne en la regardant. Une ligne d'apparence modeste peut être une ligne haute tension.</div>`
        },
        {
          titre: "Les distances minimales aux lignes aériennes",
          contenu: `<p>Le Code du travail impose, lors de travaux au voisinage de lignes électriques aériennes, de maintenir une <strong>distance minimale</strong> entre la ligne et toute partie de l'engin, de sa charge ou des personnes :</p>
<table>
<thead><tr><th>Tension de la ligne</th><th>Distance minimale</th></tr></thead>
<tbody>
<tr><td>Inférieure à 50 000 V</td><td><strong>3 mètres</strong></td></tr>
<tr><td>Égale ou supérieure à 50 000 V</td><td><strong>5 mètres</strong></td></tr>
</tbody>
</table>
<p>Ces distances doivent être respectées <strong>en tenant compte de tous les mouvements possibles</strong> :</p>
<ul>
<li>de l'engin (levée du mât ou de la flèche, déport d'un bras, pivotement d'une tourelle, benne qui se lève) ;</li>
<li>de la <strong>charge</strong> (balancement d'une charge suspendue, longueur d'une charge) ;</li>
<li>des <strong>câbles de la ligne</strong>, qui se balancent avec le vent et descendent quand il fait chaud ;</li>
<li>des erreurs d'appréciation des distances, fréquentes depuis le poste de conduite.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 3 m en dessous de 50 000 V, 5 m à partir de 50 000 V. Si l'on ne connaît pas la tension, on applique <strong>5 m</strong>.</div>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une nacelle doit travailler près d'une ligne dont la tension est inconnue. L'opérateur retient une distance minimale de 5 m pour la plate-forme, le bras et les outils, et fait appel à l'encadrement avant de commencer.</div>`
        },
        {
          titre: "Quand la distance ne peut pas être respectée",
          contenu: `<p>Si le travail oblige à s'approcher davantage, il ne peut être entrepris qu'après des mesures décidées par l'employeur, <strong>en lien avec l'exploitant</strong> de la ligne :</p>
<ul>
<li>la <strong>mise hors tension</strong> de la ligne par l'exploitant, avec les procédures de consignation prévues ;</li>
<li>la mise en place d'<strong>obstacles</strong>, de <strong>portiques de gabarit</strong> ou d'un <strong>balisage</strong> qui empêchent l'engin d'entrer dans la zone dangereuse ;</li>
<li>la limitation des mouvements de l'engin (limiteurs de hauteur ou de rotation lorsqu'ils existent) ;</li>
<li>la présence d'un <strong>surveillant</strong> chargé uniquement d'observer la distance et d'arrêter la manœuvre.</li>
</ul>
<p>Le conducteur ne décide jamais seul de s'approcher d'une ligne. Les travaux à proximité des lignes aériennes font aussi l'objet de la procédure <strong>DT-DICT</strong>. Selon la nature des travaux, l'employeur détermine si une <strong>habilitation électrique</strong> adaptée est nécessaire (pour un non-électricien, un niveau dit « 0 », qui autorise des travaux d'ordre non électrique au voisinage d'installations).</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> une ligne que l'on croit coupée peut être <strong>remise sous tension automatiquement</strong> par le réseau. Seule une attestation de l'exploitant permet de considérer qu'elle est hors tension.</div>`
        },
        {
          titre: "Contact d'un engin avec une ligne : la conduite à tenir",
          contenu: `<p>Si l'engin (mât, flèche, bras, benne, plate-forme) touche une ligne ou provoque un arc, <strong>l'engin entier est sous tension</strong>, et le sol autour aussi, sur plusieurs mètres : la tension diminue en s'éloignant du point de contact, et un simple pas peut faire passer un courant d'une jambe à l'autre (<strong>tension de pas</strong>).</p>
<table>
<thead><tr><th>Situation</th><th>Conduite à tenir</th></tr></thead>
<tbody>
<tr><td>Le conducteur est dans l'engin</td><td><strong>Rester dans le poste de conduite</strong>, sans toucher aux parties métalliques extérieures ; si c'est possible, faire la manœuvre inverse pour <strong>dégager l'engin</strong> de la ligne</td></tr>
<tr><td>Personnes autour</td><td>Leur crier de <strong>s'éloigner</strong> et de ne <strong>pas toucher l'engin</strong> ni la charge</td></tr>
<tr><td>Alerte</td><td>Faire prévenir l'exploitant pour qu'il coupe la ligne, et les secours</td></tr>
<tr><td>Obligation de quitter l'engin (incendie)</td><td><strong>Sauter loin, pieds joints</strong>, sans jamais toucher en même temps l'engin et le sol, puis s'éloigner par petits <strong>sauts pieds joints</strong></td></tr>
<tr><td>Après</td><td>Ne pas revenir vers l'engin avant que l'exploitant ait confirmé la mise hors tension</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> descendre normalement de l'engin par le marchepied est la pire réponse : on touche l'engin et le sol en même temps, et le courant traverse le corps.</div>`
        },
        {
          titre: "Secourir une victime et autres risques électriques",
          contenu: `<p>Face à une personne électrisée :</p>
<ol>
<li><strong>Ne pas la toucher</strong> tant qu'elle est en contact avec la source ou que l'engin est sous tension : le sauveteur serait électrisé à son tour.</li>
<li>Faire <strong>couper le courant</strong> (exploitant pour une ligne, coupure générale pour une installation).</li>
<li><strong>Alerter</strong> les secours (15, 18 ou 112).</li>
<li>Une fois le danger supprimé, pratiquer les gestes de secours si l'on est formé.</li>
</ol>
<p>D'autres situations exposent le conducteur au risque électrique :</p>
<ul>
<li>rouler sur un <strong>câble électrique</strong> posé au sol sans protection, qui peut être sectionné ;</li>
<li>heurter une <strong>armoire électrique</strong> ou un coffret de chantier ;</li>
<li>ouvrir un coffret ou intervenir sur une installation électrique sans être habilité : c'est interdit ;</li>
<li>brancher ou débrancher un chargeur de batterie abîmé : on signale le câble ou la prise endommagés.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> on ne touche pas une victime électrisée avant la coupure du courant. Le conducteur d'engin n'intervient jamais sur une installation électrique.</div>`
        }
      ],
      points_cles: [
        "Électrisation = passage du courant dans le corps ; électrocution = électrisation mortelle",
        "Un arc peut se former sans contact à proximité d'une ligne haute tension",
        "BT jusqu'à 1 000 V, HTA de 1 000 à 50 000 V, HTB au-delà de 50 000 V",
        "Distance minimale : 3 m sous 50 000 V, 5 m à partir de 50 000 V ; tension inconnue = 5 m",
        "Tenir compte des mouvements de l'engin, du balancement de la charge et des câbles",
        "Distance impossible à respecter : mise hors tension par l'exploitant ou obstacles, jamais d'initiative seule",
        "Contact avec une ligne : rester dans l'engin, éloigner les personnes, dégager l'engin si possible",
        "Si l'on doit sortir : sauter pieds joints sans toucher engin et sol en même temps, puis s'éloigner à pieds joints",
        "Ne pas toucher une victime électrisée avant la coupure du courant"
      ]
    }
  );

  P.questions.push(
    { id: "ELEC-001", chapitre: "elec-lignes-conduite",
      q: "Près d'une ligne aérienne de tension inférieure à 50 000 V, la distance minimale à respecter est de :", options: ["1 mètre", "3 mètres", "5 mètres"], bonnes: [1],
      explication: "Le Code du travail impose 3 m pour les lignes de tension inférieure à 50 000 V, et 5 m pour celles de 50 000 V ou plus." },
    { id: "ELEC-002", chapitre: "elec-lignes-conduite",
      q: "Près d'une ligne aérienne de 63 000 V, la distance minimale à respecter est de :", options: ["3 mètres", "5 mètres", "10 mètres"], bonnes: [1],
      explication: "Pour une tension égale ou supérieure à 50 000 V, la distance minimale est de 5 m." },
    { id: "ELEC-003", chapitre: "elec-lignes-conduite", situation: "Vous devez lever une charge près d'une ligne aérienne dont personne ne connaît la tension.",
      q: "Je retiens une distance minimale de :", options: ["3 mètres", "5 mètres"], bonnes: [1],
      explication: "Quand la tension est inconnue, on applique la distance la plus grande, 5 m, et on se renseigne auprès de l'exploitant." },
    { id: "ELEC-004", chapitre: "elec-lignes-conduite",
      q: "La distance de sécurité à une ligne se mesure en tenant compte :", options: ["Des mouvements de l'engin et de la charge", "Du balancement des câbles avec le vent", "De la position de l'engin au repos seulement"], bonnes: [0, 1],
      explication: "La distance doit être respectée quels que soient les mouvements possibles de l'engin, de la charge et des câbles, qui bougent avec le vent et la chaleur." },
    { id: "ELEC-005", chapitre: "elec-lignes-conduite",
      q: "Un arc électrique peut se former entre une ligne haute tension et un engin :", options: ["Seulement en cas de contact direct", "Sans contact, si l'engin s'approche trop"], bonnes: [1],
      explication: "C'est l'amorçage : un arc peut jaillir à distance d'une ligne haute tension. D'où des distances de sécurité de plusieurs mètres." },
    { id: "ELEC-006", chapitre: "elec-lignes-conduite",
      q: "Le domaine de la basse tension (BT) en courant alternatif s'étend :", options: ["De 50 V à 1 000 V", "De 1 000 V à 50 000 V", "Au-delà de 50 000 V"], bonnes: [0],
      explication: "BT : de 50 à 1 000 V ; HTA : de 1 000 à 50 000 V ; HTB : au-delà de 50 000 V." },
    { id: "ELEC-007", chapitre: "elec-lignes-conduite",
      q: "Une électrocution est :", options: ["Une électrisation qui entraîne la mort", "Une simple décharge sans conséquence", "Une brûlure par le froid"], bonnes: [0],
      explication: "L'électrisation est le passage du courant dans le corps ; on parle d'électrocution lorsqu'elle est mortelle." },
    { id: "ELEC-008", chapitre: "elec-lignes-conduite",
      q: "Le passage du courant dans le corps peut provoquer :", options: ["Un arrêt cardiaque", "Des brûlures internes", "Une tétanisation des muscles", "Une amélioration des réflexes"], bonnes: [0, 1, 2],
      explication: "Le courant peut provoquer une tétanisation (impossible de lâcher), des brûlures internes et externes, un arrêt respiratoire ou cardiaque." },
    { id: "ELEC-009", chapitre: "elec-lignes-conduite", situation: "La flèche de votre engin vient de toucher une ligne électrique aérienne. Vous êtes dans la cabine.",
      q: "Je dois :", options: ["Rester dans la cabine", "Descendre rapidement par le marchepied", "Si possible, faire la manœuvre inverse pour dégager l'engin", "Crier aux personnes de s'éloigner"], bonnes: [0, 2, 3],
      explication: "On reste dans la cabine, on tente de dégager l'engin par la manœuvre inverse si c'est possible et on fait éloigner les personnes. Descendre par le marchepied ferait passer le courant par le corps." },
    { id: "ELEC-010", chapitre: "elec-lignes-conduite", situation: "Votre engin est en contact avec une ligne et un incendie se déclare : vous devez sortir.",
      q: "Je dois :", options: ["Sauter loin, pieds joints", "Ne jamais toucher en même temps l'engin et le sol", "M'éloigner en courant à grandes enjambées"], bonnes: [0, 1],
      explication: "On saute loin pieds joints, sans contact simultané avec l'engin et le sol, puis on s'éloigne par petits sauts pieds joints. Les grandes enjambées exposent à la tension de pas." },
    { id: "ELEC-011", chapitre: "elec-lignes-conduite",
      q: "Après avoir sauté d'un engin sous tension, je m'éloigne :", options: ["Par petits sauts pieds joints", "À grandes enjambées"], bonnes: [0],
      explication: "Le sol autour de l'engin est sous tension, de façon décroissante. Avec les pieds écartés, un courant peut passer d'une jambe à l'autre : c'est la tension de pas." },
    { id: "ELEC-012", chapitre: "elec-lignes-conduite", situation: "Un engin est en contact avec une ligne. Un collègue au sol veut ouvrir la porte de la cabine pour aider le conducteur.",
      q: "Je lui dis :", options: ["De ne pas toucher l'engin et de s'éloigner", "D'ouvrir vite la porte"], bonnes: [0],
      explication: "Toute personne qui touche l'engin sous tension depuis le sol est traversée par le courant. On reste à distance et on fait couper la ligne." },
    { id: "ELEC-013", chapitre: "elec-lignes-conduite", situation: "Un collègue est électrisé et reste collé à un câble.",
      q: "Je dois d'abord :", options: ["Le tirer par le bras", "Faire couper le courant", "Alerter les secours"], bonnes: [1, 2],
      explication: "On ne touche pas la victime tant que le courant n'est pas coupé, sinon on est électrisé à son tour. On fait couper le courant et on alerte les secours." },
    { id: "ELEC-014", chapitre: "elec-lignes-conduite", situation: "Vous devez travailler à 2 m d'une ligne de 20 000 V.",
      q: "Avant de commencer :", options: ["Des mesures doivent être prises avec l'exploitant (mise hors tension, obstacles…)", "Je peux commencer en étant très prudent", "Je ne décide pas seul de m'approcher"], bonnes: [0, 2],
      explication: "À 2 m, la distance minimale de 3 m n'est pas respectée. Le travail ne peut se faire qu'après des mesures décidées par l'employeur avec l'exploitant : mise hors tension, obstacles, surveillance." },
    { id: "ELEC-015", chapitre: "elec-lignes-conduite", situation: "Le chef de chantier vous assure que la ligne voisine est « sûrement coupée » car aucun bruit ne s'en dégage.",
      q: "Je considère la ligne comme :", options: ["Hors tension", "Sous tension, tant que l'exploitant n'a pas attesté la coupure"], bonnes: [1],
      explication: "Une ligne silencieuse peut être sous tension, et une ligne coupée peut être remise sous tension automatiquement. Seule l'attestation de l'exploitant fait foi." },
    { id: "ELEC-016", chapitre: "elec-lignes-conduite",
      q: "On peut estimer la tension d'une ligne aérienne en regardant la taille des pylônes :", options: ["Oui, c'est suffisant pour choisir la distance", "Non, il faut se renseigner ou appliquer la distance maximale"], bonnes: [1],
      explication: "L'aspect d'une ligne ne permet pas de connaître sa tension avec certitude. En cas de doute, on applique 5 m et on se renseigne auprès de l'exploitant." },
    { id: "ELEC-017", chapitre: "elec-lignes-conduite",
      q: "Pour empêcher un engin d'approcher d'une ligne, on peut installer :", options: ["Un portique de gabarit", "Un balisage", "Un surveillant chargé uniquement d'observer la distance"], bonnes: [0, 1, 2],
      explication: "Obstacles, portiques de gabarit, balisage et surveillant dédié sont des mesures possibles lorsque l'on travaille à proximité d'une ligne." },
    { id: "ELEC-018", chapitre: "elec-lignes-conduite", situation: "Une rallonge électrique de chantier traverse sans protection l'allée où vous circulez.",
      q: "Je dois :", options: ["Rouler dessus doucement", "Ne pas rouler dessus et faire protéger ou déplacer le câble"], bonnes: [1],
      explication: "Un engin peut sectionner un câble posé au sol, avec un risque d'électrisation. On fait protéger le passage ou déplacer le câble." },
    { id: "ELEC-019", chapitre: "elec-lignes-conduite", situation: "Le coffret électrique de chantier près de votre zone de travail est ouvert et un disjoncteur a sauté.",
      q: "Je peux le réarmer moi-même :", options: ["Oui", "Non, sauf si je suis habilité et autorisé"], bonnes: [1],
      explication: "Intervenir sur une installation électrique exige une habilitation adaptée. Le conducteur d'engin prévient la personne compétente." },
    { id: "ELEC-020", chapitre: "elec-lignes-conduite",
      q: "Le domaine de la haute tension B (HTB) correspond aux tensions :", options: ["Supérieures à 50 000 V", "Comprises entre 1 000 et 50 000 V"], bonnes: [0],
      explication: "La HTB concerne les tensions au-delà de 50 000 V (lignes de transport). La HTA va de 1 000 à 50 000 V." }
  );
})();
