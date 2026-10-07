/* ═══════════════════════════════════════════════════════════════════════════
   POLYMATES — Formation « hygiène alimentaire adaptée à l'activité des
   établissements de restauration commerciale » (HACCP, 14 heures)
   Préparation au QCM d'évaluation : cours et banque de questions.
   ═══════════════════════════════════════════════════════════════════════════ */
window.PERMIS_COURS = window.PERMIS_COURS || {};
(function () {
  const P = window.PERMIS_COURS["haccp"] = window.PERMIS_COURS["haccp"] || { chapitres: [], questions: [] };

  P.themes = {
    MICRO: "Les micro-organismes",
    DANGERS: "Les dangers et les TIAC",
    REGL: "La réglementation",
    BPH: "Les bonnes pratiques d'hygiène",
    TEMP: "Températures et conservation",
    HACCP: "La méthode HACCP",
    ALLERG: "Allergènes et information du consommateur",
    TRACA: "Traçabilité et gestion des non-conformités"
  };

  /* ───────────── Thème MICRO — Les micro-organismes ───────────── */
  P.chapitres.push(
    {
      id: "monde-microbien",
      theme: "MICRO",
      titre: "Le monde microbien et la multiplication des germes",
      duree: 12,
      objectifs: [
        "Distinguer bactéries, virus, parasites, levures et moisissures",
        "Différencier flore utile, flore d'altération et flore pathogène",
        "Connaître les facteurs de multiplication : température, temps, humidité, pH, oxygène, nutriments",
        "Situer la zone de danger de +3 °C à +63 °C et la zone de multiplication rapide",
        "Comprendre ce que sont une spore et une toxine"
      ],
      sections: [
        {
          titre: "Les grandes familles de micro-organismes",
          contenu: `<p>Les micro-organismes (on dit aussi <strong>microbes</strong> ou <strong>germes</strong>) sont des êtres vivants invisibles à l'œil nu. On les trouve partout : dans l'air, l'eau, le sol, sur les surfaces, sur les animaux et sur l'homme (peau, nez, gorge, intestin). Une cuisine n'en est jamais exempte : l'objectif de l'hygiène est de les empêcher de <strong>contaminer</strong> les aliments, de s'y <strong>multiplier</strong>, et de les <strong>détruire</strong> quand c'est possible.</p>
<table>
<thead><tr><th>Famille</th><th>Caractéristiques</th><th>Exemples en restauration</th></tr></thead>
<tbody>
<tr><td>Bactéries</td><td>Cellules vivantes qui se multiplient seules dans l'aliment quand les conditions sont favorables</td><td>Salmonelles, Listeria, staphylocoques, Clostridium</td></tr>
<tr><td>Virus</td><td>Ne se multiplient pas dans l'aliment : ils ont besoin des cellules d'un hôte ; l'aliment ne sert que de transporteur</td><td>Norovirus, virus de l'hépatite A</td></tr>
<tr><td>Parasites</td><td>Organismes (vers, protozoaires) vivant aux dépens d'un hôte</td><td>Anisakis (poissons), Toxoplasma, Tænia, trichine</td></tr>
<tr><td>Levures</td><td>Champignons microscopiques unicellulaires</td><td>Levure de boulanger (utile), levures qui font fermenter les jus</td></tr>
<tr><td>Moisissures</td><td>Champignons filamenteux visibles quand ils forment un duvet ; certaines produisent des mycotoxines</td><td>Pénicillium des fromages (utile), moisissures sur le pain, les fruits</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> seules les bactéries, les levures et les moisissures se multiplient dans l'aliment. Un virus ou un parasite ne se multiplie pas dans l'assiette : une très faible quantité suffit pourtant à rendre malade.</div>`
        },
        {
          titre: "Flore utile, flore d'altération, flore pathogène",
          contenu: `<p>Les micro-organismes ne sont pas tous dangereux. On les classe en trois flores selon leurs effets :</p>
<ul>
<li><strong>Flore utile</strong> : elle sert à fabriquer des aliments (yaourts, fromages, pain, bière, vin, choucroute, saucisson). Elle est volontairement ajoutée ou entretenue.</li>
<li><strong>Flore d'altération</strong> : elle dégrade l'aliment et le rend impropre à la consommation. Les signes sont <strong>visibles ou perceptibles</strong> : odeur, goût, couleur anormale, aspect poisseux, gonflement d'une conserve, moisissures.</li>
<li><strong>Flore pathogène</strong> : elle rend malade. Elle est la plus dangereuse car elle est <strong>le plus souvent invisible</strong> : un aliment peut avoir un aspect, une odeur et un goût normaux tout en contenant des germes pathogènes.</li>
</ul>
<p>Certains germes servent aussi d'<strong>indicateurs</strong> : la présence d'Escherichia coli témoigne d'une contamination d'origine fécale, donc d'une faute d'hygiène (lavage des mains, eau, matières premières).</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « un aliment qui sent bon et a bel aspect est sans danger » est faux. Les sens détectent l'altération, jamais la présence de germes pathogènes.</div>`
        },
        {
          titre: "Les conditions de multiplication",
          contenu: `<p>Une bactérie se multiplie par division : une cellule en donne deux, puis quatre, huit, seize… Dans de bonnes conditions, une génération peut se former en <strong>20 minutes environ</strong>. En quelques heures, une contamination faible devient une contamination massive. Six facteurs conditionnent cette multiplication :</p>
<table>
<thead><tr><th>Facteur</th><th>Effet</th><th>Moyen de maîtrise</th></tr></thead>
<tbody>
<tr><td>Température</td><td>Facteur principal ; multiplication entre +3 °C et +63 °C, rapide entre 20 et 40 °C</td><td>Froid, chaud, refroidissement rapide</td></tr>
<tr><td>Temps</td><td>Plus l'aliment reste en zone favorable, plus les germes sont nombreux</td><td>Limiter les attentes, respecter les durées de vie</td></tr>
<tr><td>Humidité (eau disponible, aw)</td><td>Les germes ont besoin d'eau libre</td><td>Séchage, salage, sucrage (confitures, salaisons)</td></tr>
<tr><td>pH (acidité)</td><td>La plupart des pathogènes préfèrent un milieu proche de la neutralité ; un milieu acide les freine</td><td>Acidification : vinaigre, citron, marinades</td></tr>
<tr><td>Oxygène</td><td>Aérobies : besoin d'air ; anaérobies : sans air (sous vide, conserve, cœur des grosses pièces)</td><td>Choisir le bon conditionnement, refroidir vite</td></tr>
<tr><td>Nutriments</td><td>Aliments riches en protéines et en eau (viandes, œufs, lait, crèmes, sauces) = aliments sensibles</td><td>Attention renforcée sur ces denrées</td></tr>
</tbody>
</table>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> une crème pâtissière (eau, lait, œufs, sucre, pH neutre) laissée deux heures sur le plan de travail réunit toutes les conditions de multiplication : température, temps, humidité, nutriments.</div>`
        },
        {
          titre: "La température : zone de danger et effets du froid et du chaud",
          contenu: `<p>La température est le moyen de maîtrise le plus utilisé en cuisine. Il faut connaître l'effet de chaque niveau de température.</p>
<table>
<thead><tr><th>Température</th><th>Effet sur les bactéries</th></tr></thead>
<tbody>
<tr><td>Au-delà de +100 °C (stérilisation, vers +120 °C)</td><td>Destruction des bactéries et de leurs spores (conserves appertisées)</td></tr>
<tr><td>De +63 °C à +100 °C (cuisson, pasteurisation)</td><td>Destruction progressive des formes végétatives ; les spores survivent</td></tr>
<tr><td>Au-dessus de +63 °C</td><td>Pas de multiplication : c'est la température de maintien au chaud</td></tr>
<tr><td>De +3 °C à +63 °C</td><td><strong>Zone de danger</strong> : multiplication possible</td></tr>
<tr><td>De +20 °C à +40 °C</td><td>Multiplication <strong>rapide</strong> (vers 37 °C, température du corps humain, c'est optimal)</td></tr>
<tr><td>De 0 °C à +3 °C (réfrigération)</td><td>Multiplication très ralentie, sauf germes psychrotrophes comme Listeria</td></tr>
<tr><td>-18 °C (surgélation, congélation)</td><td>Multiplication arrêtée, mais les germes ne sont <strong>pas tués</strong></td></tr>
</tbody>
</table>
<p>Le froid <strong>ralentit ou arrête</strong> la multiplication ; il ne détruit pas les bactéries. Au réchauffement (décongélation, rupture de la chaîne du froid), elles reprennent leur activité. Seule une température suffisamment élevée pendant un temps suffisant les détruit.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> zone de danger de +3 °C à +63 °C ; multiplication rapide entre 20 et 40 °C ; le froid conserve mais ne tue pas ; la chaleur détruit (pas toujours les spores ni les toxines).</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la congélation n'assainit pas un produit contaminé par des bactéries. Elle les « endort ». Elle détruit en revanche certains parasites comme Anisakis, ce qui explique son usage pour les poissons consommés crus.</div>`
        },
        {
          titre: "Spores et toxines",
          contenu: `<p>Certaines bactéries ont des moyens de résister aux traitements de la cuisine :</p>
<ul>
<li>La <strong>spore</strong> est une forme de résistance que prennent certaines bactéries (Clostridium, Bacillus) quand les conditions deviennent défavorables. Elle résiste à la cuisson, au froid, à la sécheresse et à de nombreux désinfectants. Lorsque les conditions redeviennent favorables (refroidissement lent d'un plat cuit, par exemple), la spore <strong>germe</strong> et redonne une bactérie qui se multiplie.</li>
<li>La <strong>toxine</strong> est une substance poison produite par certaines bactéries pendant leur multiplication dans l'aliment (Staphylococcus aureus, Clostridium botulinum, Bacillus cereus). Certaines toxines sont <strong>thermostables</strong> : elles résistent à la cuisson ou au réchauffage, même quand la bactérie a été tuée.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> recuire ou réchauffer un plat mal conservé ne le rend pas sûr. Les toxines thermostables déjà formées restent présentes et les spores survivent. La seule parade est d'empêcher la multiplication : froid, chaud au-dessus de +63 °C, refroidissement rapide.</div>
<p>On distingue ainsi trois mécanismes de maladie : l'<strong>infection</strong> (le germe ingéré se multiplie dans l'organisme), l'<strong>intoxination</strong> ou intoxication (c'est la toxine déjà présente dans l'aliment qui rend malade, comme avec le staphylocoque doré), et la <strong>toxi-infection</strong> (association des deux, avec production de toxine dans l'intestin, comme avec Clostridium perfringens).</p>`
        }
      ],
      points_cles: [
        "Bactéries, levures et moisissures se multiplient dans l'aliment ; virus et parasites non",
        "Flore utile, flore d'altération (visible) et flore pathogène (le plus souvent invisible)",
        "Facteurs de multiplication : température, temps, humidité, pH, oxygène, nutriments",
        "Une génération de bactéries peut se former en 20 minutes environ",
        "Zone de danger de +3 °C à +63 °C, multiplication rapide entre 20 et 40 °C",
        "Le froid ralentit ou stoppe la multiplication mais ne tue pas les bactéries",
        "Les spores résistent à la cuisson ; certaines toxines sont thermostables",
        "Aliments sensibles : riches en eau et en protéines, peu acides"
      ]
    },
    {
      id: "germes-pathogenes",
      theme: "MICRO",
      titre: "Les principaux germes pathogènes et les aliments à risque",
      duree: 14,
      objectifs: [
        "Associer chaque grand pathogène à son origine et aux aliments à risque",
        "Connaître les germes à spores et à toxines et les erreurs qui les favorisent",
        "Comprendre pourquoi Listeria est redoutée au froid",
        "Connaître les virus et parasites transmis par les aliments et leur maîtrise",
        "Identifier les populations les plus sensibles"
      ],
      sections: [
        {
          titre: "Ce qui rend un germe dangereux",
          contenu: `<p>Un germe pathogène provoque une maladie quand trois éléments sont réunis : un germe présent dans l'aliment, une <strong>dose suffisante</strong> (pour la plupart des bactéries, il faut qu'elles se soient multipliées ; pour les virus, quelques particules suffisent), et un consommateur plus ou moins <strong>sensible</strong>.</p>
<p>Les personnes les plus vulnérables sont regroupées sous le sigle <strong>YOPI</strong> : les jeunes enfants (Young), les personnes âgées (Old), les femmes enceintes (Pregnant) et les personnes immunodéprimées (Immunodepressed). Pour elles, une contamination faible peut entraîner une maladie grave.</p>
<p>Le temps entre le repas et l'apparition des symptômes est la <strong>durée d'incubation</strong>. Elle oriente l'enquête : quelques heures pour une toxine déjà présente dans l'aliment (staphylocoque doré), environ un jour pour les salmonelles, plusieurs jours voire plusieurs semaines pour Listeria ou l'hépatite A.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la gravité dépend du germe, de la dose ingérée et de la fragilité du consommateur. Les plats destinés aux enfants, aux femmes enceintes ou aux personnes âgées demandent une vigilance renforcée.</div>`
        },
        {
          titre: "Les bactéries pathogènes à connaître",
          contenu: `<table>
<thead><tr><th>Bactérie</th><th>Origine principale</th><th>Aliments à risque</th><th>Point clé</th></tr></thead>
<tbody>
<tr><td>Salmonelles</td><td>Intestin des animaux, volailles, œufs</td><td>Œufs crus et préparations à base d'œufs crus (mayonnaise, mousse au chocolat, tiramisu), volailles insuffisamment cuites</td><td>Première cause des TIAC confirmées en France ; détruites par la cuisson</td></tr>
<tr><td>Staphylococcus aureus (staphylocoque doré)</td><td>L'homme : nez, gorge, peau, plaies, panaris</td><td>Aliments très manipulés : pâtisseries à la crème, plats en sauce, salades composées</td><td>Toxine thermostable ; incubation courte (quelques heures), vomissements</td></tr>
<tr><td>Clostridium perfringens</td><td>Sol, intestin, viandes</td><td>Grosses pièces de viande et plats en sauce cuisinés à l'avance et refroidis lentement</td><td>Anaérobie, sporulé : le « germe de la restauration collective »</td></tr>
<tr><td>Clostridium botulinum</td><td>Sol, sédiments</td><td>Conserves et bocaux familiaux mal stérilisés, jambon artisanal, produits sous vide mal conservés</td><td>Anaérobie strict, spores ; toxine neurotoxique : botulisme, paralysies, parfois mortel</td></tr>
<tr><td>Listeria monocytogenes</td><td>Sol, végétaux, eau, environnement humide des ateliers</td><td>Fromages au lait cru, charcuterie (rillettes, pâtés, langue en gelée), poisson fumé, graines germées</td><td>Se multiplie au froid ; grave pour la femme enceinte et les immunodéprimés</td></tr>
<tr><td>Escherichia coli (souches STEC)</td><td>Intestin des bovins, contamination fécale</td><td>Viande hachée insuffisamment cuite, lait cru, végétaux crus souillés</td><td>Syndrome hémolytique et urémique (SHU) chez le jeune enfant</td></tr>
<tr><td>Campylobacter</td><td>Intestin des volailles</td><td>Volailles crues ou peu cuites, contamination croisée cru/cuit</td><td>Première cause de gastro-entérite bactérienne en Europe</td></tr>
<tr><td>Bacillus cereus</td><td>Sol, céréales, épices</td><td>Riz et pâtes cuits conservés à température ambiante</td><td>Sporulé, toxine résistante à la chaleur</td></tr>
</tbody>
</table>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un tiramisu préparé le matin avec des œufs crus et laissé hors du froid pendant le service est la situation type d'une salmonellose. Le recours aux ovoproduits pasteurisés supprime ce danger.</div>`
        },
        {
          titre: "Les germes à spores et à toxines : les erreurs qui les favorisent",
          contenu: `<p>Trois germes résument les dangers liés aux plats préparés à l'avance :</p>
<ul>
<li><strong>Clostridium perfringens</strong> : ses spores survivent à la cuisson. Si une grosse pièce de viande ou une sauce refroidit lentement, à température ambiante ou dans une chambre froide ordinaire, les spores germent dans la zone de 20 à 50 °C et la bactérie se multiplie au cœur, où l'air manque. D'où l'obligation de <strong>refroidissement rapide</strong> en cellule et de remise en température rapide.</li>
<li><strong>Clostridium botulinum</strong> : il se développe en l'absence d'air (conserves, sous vide). La prévention passe par une stérilisation maîtrisée, le respect des températures de conservation des produits sous vide et l'élimination des <strong>conserves bombées</strong>, rouillées ou fuyantes.</li>
<li><strong>Staphylococcus aureus</strong> : porté par l'homme (environ une personne sur trois au niveau du nez), il est apporté par les mains, la toux, une plaie ou un panaris. Il produit dans l'aliment une toxine que la cuisson ne détruit pas.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une intoxication au staphylocoque doré se prévient d'abord par l'<strong>hygiène du personnel</strong> (lavage des mains, protection des plaies, écartement des malades) et par le froid, pas par une recuisson.</div>
<div class="encart" data-type="danger"><strong>Attention :</strong> une boîte de conserve bombée doit être jetée sans être ouverte ni goûtée : c'est un signe possible de développement de Clostridium botulinum.</div>`
        },
        {
          titre: "Listeria : le germe qui aime le froid",
          contenu: `<p><strong>Listeria monocytogenes</strong> a des particularités qui en font un sujet fréquent du QCM :</p>
<ul>
<li>Elle est <strong>psychrotrophe</strong> : elle continue à se multiplier, lentement, à la température du réfrigérateur, y compris entre 0 et +4 °C. La réfrigération ne suffit donc pas à la maîtriser sur des durées longues : le respect de la DLC est essentiel.</li>
<li>Elle vit dans l'environnement humide : siphons, joints, chambres froides, trancheuses mal nettoyées. Elle peut s'y installer durablement, d'où l'importance du nettoyage et de la désinfection.</li>
<li>Elle est détruite par une cuisson suffisante.</li>
<li>La listériose a une incubation longue (de quelques jours à plusieurs semaines) et peut être grave : avortement, infection du nouveau-né, méningite chez les personnes fragiles.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> Listeria = froid + produits prêts à consommer sans cuisson (fromages au lait cru, charcuterie, poisson fumé) + femmes enceintes. Respect strict des DLC, nettoyage des trancheuses et des chambres froides.</div>`
        },
        {
          titre: "Virus et parasites",
          contenu: `<p>Les virus ne se multiplient pas dans l'aliment ; ils y sont apportés par une personne malade ou porteuse, ou par une eau contaminée. Une très petite dose suffit.</p>
<ul>
<li><strong>Norovirus</strong> : responsable des gastro-entérites hivernales, très contagieux. Transmis par les mains d'un manipulateur malade, les coquillages (huîtres) et les crudités ou fruits rouges contaminés. Il résiste bien dans l'environnement : lavage des mains et écartement du personnel malade sont les mesures essentielles.</li>
<li><strong>Virus de l'hépatite A</strong> : transmis par voie féco-orale, par les mains et par les coquillages ou végétaux crus. Incubation de plusieurs semaines.</li>
</ul>
<p>Les parasites se maîtrisent par la cuisson ou par la congélation :</p>
<table>
<thead><tr><th>Parasite</th><th>Aliments</th><th>Maîtrise</th></tr></thead>
<tbody>
<tr><td>Anisakis (ver)</td><td>Poissons de mer (hareng, maquereau, cabillaud, saumon sauvage…), surtout crus ou peu cuits : sushis, ceviche, tartares, poissons marinés</td><td>Cuisson à cœur, ou congélation à -20 °C pendant au moins 24 heures pour les poissons consommés crus</td></tr>
<tr><td>Toxoplasma</td><td>Viandes peu cuites (mouton, porc), crudités mal lavées</td><td>Cuisson, lavage des végétaux ; danger pour la femme enceinte</td></tr>
<tr><td>Tænia (ver solitaire)</td><td>Viande de bœuf ou de porc peu cuite</td><td>Cuisson, congélation, contrôles vétérinaires</td></tr>
<tr><td>Trichine</td><td>Viande de cheval, de porc ou de sanglier peu cuite</td><td>Cuisson à cœur</td></tr>
</tbody>
</table>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un restaurant qui sert un tartare de saumon ou des sushis doit utiliser du poisson ayant subi un traitement de congélation (au moins 24 heures à -20 °C), réalisé par le fournisseur ou dans l'établissement selon une procédure maîtrisée.</div>`
        }
      ],
      points_cles: [
        "Populations sensibles (YOPI) : jeunes enfants, personnes âgées, femmes enceintes, immunodéprimés",
        "Salmonelles : œufs crus, volailles ; première cause des TIAC confirmées",
        "Staphylococcus aureus : porté par l'homme, toxine thermostable, incubation courte",
        "Clostridium perfringens : plats en sauce et grosses pièces refroidis lentement",
        "Clostridium botulinum : anaérobie, conserves bombées, toxine paralysante",
        "Listeria : se multiplie au froid, produits prêts à consommer, femmes enceintes",
        "E. coli STEC : viande hachée peu cuite, SHU chez l'enfant",
        "Norovirus et hépatite A : mains, coquillages, crudités",
        "Anisakis : poissons de mer crus, détruit par la cuisson ou la congélation à -20 °C au moins 24 heures"
      ]
    }
  );

  P.questions.push(
    { id: "MICRO-001", chapitre: "monde-microbien",
      q: "Parmi ces micro-organismes, lesquels peuvent se multiplier dans un aliment ?", options: ["Les bactéries", "Les virus", "Les levures", "Les moisissures"], bonnes: [0, 2, 3],
      explication: "Bactéries, levures et moisissures se multiplient dans l'aliment si les conditions sont favorables. Les virus ont besoin des cellules d'un hôte : l'aliment ne fait que les transporter." },
    { id: "MICRO-002", chapitre: "monde-microbien", situation: "Un commis vous montre un fromage bien affiné, couvert d'un duvet blanc de Penicillium, utilisé pour sa fabrication.",
      q: "Ce Penicillium appartient à la flore :", options: ["Pathogène", "Utile", "D'altération"], bonnes: [1],
      explication: "Les moisissures volontairement utilisées pour fabriquer un fromage font partie de la flore utile, comme les ferments du yaourt ou la levure du pain." },
    { id: "MICRO-003", chapitre: "monde-microbien", situation: "Une barquette de viande cuite sent l'aigre et sa surface est poisseuse.",
      q: "Ces signes traduisent la présence d'une flore :", options: ["Utile", "Uniquement pathogène", "D'altération"], bonnes: [2],
      explication: "Odeur, aspect poisseux, couleur anormale : ce sont les signes de la flore d'altération. Le produit doit être jeté ; des pathogènes peuvent être présents en plus, mais ils ne se voient pas." },
    { id: "MICRO-004", chapitre: "monde-microbien", situation: "Un plat cuisiné a un aspect, une odeur et un goût parfaitement normaux.",
      q: "Peut-on en conclure qu'il ne contient pas de germes pathogènes ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "La flore pathogène est le plus souvent invisible et ne modifie ni l'odeur ni le goût. Seul le respect des règles d'hygiène et des températures garantit la sécurité." },
    { id: "MICRO-005", chapitre: "monde-microbien",
      q: "Dans des conditions favorables, une population bactérienne peut doubler environ toutes les :", options: ["24 heures", "20 minutes", "6 heures"], bonnes: [1],
      explication: "Dans de bonnes conditions, une bactérie se divise en deux en une vingtaine de minutes environ. En quelques heures, quelques germes deviennent des millions." },
    { id: "MICRO-006", chapitre: "monde-microbien",
      q: "La zone de température dans laquelle les bactéries peuvent se multiplier (zone de danger) s'étend de :", options: ["-18 °C à +3 °C", "+3 °C à +63 °C", "+10 °C à +40 °C", "0 °C à +100 °C"], bonnes: [1],
      explication: "La zone de danger retenue en restauration va de +3 °C à +63 °C. En dessous, la multiplication est très ralentie ; au-dessus de +63 °C, elle cesse." },
    { id: "MICRO-007", chapitre: "monde-microbien",
      q: "La multiplication des bactéries est la plus rapide entre :", options: ["+20 et +40 °C", "0 et +3 °C", "+63 et +80 °C"], bonnes: [0],
      explication: "Entre 20 et 40 °C, notamment vers 37 °C (température du corps humain), la multiplication est la plus rapide. C'est la température ambiante d'une cuisine en service." },
    { id: "MICRO-008", chapitre: "monde-microbien", situation: "Une barquette de blanc de poulet contaminée par des salmonelles est placée au congélateur à -18 °C.",
      q: "À cette température, les salmonelles :", options: ["Reprendront leur activité à la décongélation", "Ne se multiplient plus", "Sont détruites"], bonnes: [0, 1],
      explication: "Le froid arrête la multiplication mais ne tue pas les bactéries. À la décongélation, elles redeviennent actives : seule la cuisson les détruit." },
    { id: "MICRO-009", chapitre: "monde-microbien",
      q: "Parmi ces facteurs, lesquels favorisent la multiplication des bactéries ?", options: ["Un milieu très acide", "Un temps d'attente prolongé hors du froid", "Un aliment riche en eau et en protéines", "Une température de 30 °C"], bonnes: [1, 2, 3],
      explication: "Chaleur modérée, eau, protéines et temps favorisent la multiplication. Un milieu acide (vinaigre, citron) la freine au contraire." },
    { id: "MICRO-010", chapitre: "monde-microbien",
      q: "Ajouter du sel, du sucre ou sécher un aliment permet de freiner les germes car cela :", options: ["Apporte de l'oxygène", "Augmente le pH", "Réduit l'eau disponible"], bonnes: [2],
      explication: "Salage, sucrage et séchage diminuent l'eau disponible (aw) dont les micro-organismes ont besoin. C'est le principe des salaisons et des confitures." },
    { id: "MICRO-011", chapitre: "monde-microbien",
      q: "Une bactérie anaérobie se développe :", options: ["En l'absence d'air", "Uniquement au-dessus de +63 °C", "En présence d'air"], bonnes: [0],
      explication: "Les anaérobies se multiplient sans oxygène : conserves, produits sous vide, cœur des grosses pièces de viande. Clostridium perfringens et botulinum en sont des exemples." },
    { id: "MICRO-012", chapitre: "monde-microbien",
      q: "Une spore bactérienne :", options: ["Est un virus", "Peut germer quand les conditions redeviennent favorables", "Est détruite par une cuisson ordinaire", "Est une forme de résistance de certaines bactéries"], bonnes: [1, 3],
      explication: "La spore est une forme de résistance de bactéries comme Clostridium ou Bacillus. Elle survit à la cuisson ordinaire et germe lors d'un refroidissement lent ; seule la stérilisation la détruit." },
    { id: "MICRO-013", chapitre: "monde-microbien", situation: "Un plat a été mal conservé pendant plusieurs heures à température ambiante. Le cuisinier propose de le faire rebouillir avant de le servir.",
      q: "Cette recuisson rend-elle le plat sûr ?", options: ["Oui, la chaleur détruit tout", "Non, certaines toxines résistent à la chaleur"], bonnes: [1],
      explication: "Certaines toxines (staphylocoque doré, Bacillus cereus) sont thermostables et les spores survivent. Un plat mal conservé doit être jeté." },
    { id: "MICRO-014", chapitre: "monde-microbien",
      q: "La stérilisation (traitement au-delà de +100 °C, vers +120 °C) permet :", options: ["De détruire les bactéries et leurs spores", "Seulement de ralentir les bactéries", "De détruire uniquement les virus"], bonnes: [0],
      explication: "La stérilisation des conserves appertisées détruit les formes végétatives et les spores. La pasteurisation, en dessous de 100 °C, ne détruit pas les spores." },
    { id: "MICRO-015", chapitre: "monde-microbien",
      q: "Une maladie due à une toxine déjà formée dans l'aliment avant sa consommation est :", options: ["Une intoxination (intoxication)", "Une infection", "Une allergie"], bonnes: [0],
      explication: "Dans l'intoxination, c'est la toxine présente dans l'aliment qui rend malade, même si la bactérie a été détruite. C'est le cas du staphylocoque doré." },
    { id: "MICRO-016", chapitre: "monde-microbien",
      q: "Quels aliments sont considérés comme particulièrement sensibles à la multiplication microbienne ?", options: ["Riz cuit", "Sucre en poudre", "Crème pâtissière", "Sauce à base de viande"], bonnes: [0, 2, 3],
      explication: "Les aliments riches en eau et en nutriments, peu acides, sont sensibles : crèmes, sauces, riz cuit. Le sucre en poudre, très sec, ne permet pas la multiplication." },
    { id: "MICRO-017", chapitre: "monde-microbien",
      q: "La présence d'Escherichia coli dans un aliment ou sur une surface indique en général :", options: ["Une contamination d'origine fécale", "Une bonne désinfection", "Une flore utile"], bonnes: [0],
      explication: "E. coli vit dans l'intestin : c'est un indicateur de contamination fécale, souvent liée à un défaut de lavage des mains ou à des matières premières souillées." },
    { id: "MICRO-018", chapitre: "monde-microbien", situation: "Un plat est maintenu à +70 °C dans un bain-marie pendant le service.",
      q: "À cette température, les bactéries :", options: ["Se multiplient lentement", "Ne se multiplient pas", "Se multiplient rapidement"], bonnes: [1],
      explication: "Au-dessus de +63 °C, les bactéries ne se multiplient plus. C'est pourquoi le maintien au chaud se fait à +63 °C minimum." },
    { id: "MICRO-019", chapitre: "germes-pathogenes", situation: "Un tiramisu est préparé avec des œufs crus coquille.",
      q: "Le principal germe à redouter est :", options: ["Anisakis", "Clostridium botulinum", "Salmonella"], bonnes: [2],
      explication: "Les œufs crus et les préparations à base d'œufs crus sont l'origine classique des salmonelloses. L'emploi d'ovoproduits pasteurisés supprime ce danger." },
    { id: "MICRO-020", chapitre: "germes-pathogenes", situation: "Un pâtissier a un panaris (doigt infecté) qu'il ne protège pas.",
      q: "Quel germe risque-t-il de transmettre aux préparations ?", options: ["Campylobacter", "Staphylococcus aureus", "Listeria monocytogenes"], bonnes: [1],
      explication: "Le staphylocoque doré se trouve dans les plaies infectées, le nez et la gorge. Une plaie doit être protégée par un pansement étanche et un gant." },
    { id: "MICRO-021", chapitre: "germes-pathogenes",
      q: "La toxine du staphylocoque doré :", options: ["Provoque des symptômes en quelques heures", "Est détruite par la cuisson", "Résiste à la cuisson"], bonnes: [0, 2],
      explication: "La toxine staphylococcique est thermostable et l'incubation est courte, de l'ordre de quelques heures, avec vomissements. Une recuisson ne la détruit pas." },
    { id: "MICRO-022", chapitre: "germes-pathogenes", situation: "Un bœuf bourguignon de 20 litres, cuit la veille, a refroidi toute la nuit dans sa marmite en chambre froide.",
      q: "Le germe dont le développement est le plus favorisé est :", options: ["Clostridium perfringens", "Anisakis", "Norovirus"], bonnes: [0],
      explication: "Clostridium perfringens, anaérobie et sporulé, se multiplie au cœur des grosses masses refroidies lentement. Le refroidissement doit se faire en cellule, en petites quantités." },
    { id: "MICRO-023", chapitre: "germes-pathogenes", situation: "Lors du rangement de la réserve, un commis trouve une boîte de conserve bombée.",
      q: "Il doit :", options: ["L'utiliser rapidement en la faisant bien cuire", "La jeter sans l'ouvrir", "L'ouvrir pour vérifier l'odeur"], bonnes: [1],
      explication: "Une conserve bombée peut signaler un développement de Clostridium botulinum, dont la toxine est très dangereuse. On ne l'ouvre pas et on ne goûte pas : on l'élimine." },
    { id: "MICRO-024", chapitre: "germes-pathogenes",
      q: "Listeria monocytogenes a pour particularité :", options: ["De se multiplier au réfrigérateur", "D'être détruite par la cuisson", "De se multiplier uniquement au-dessus de +40 °C", "D'être dangereuse pour les femmes enceintes"], bonnes: [0, 1, 3],
      explication: "Listeria est psychrotrophe : elle se multiplie lentement même entre 0 et +4 °C. Elle est détruite par la cuisson et la listériose est grave pour les femmes enceintes et les personnes fragiles." },
    { id: "MICRO-025", chapitre: "germes-pathogenes",
      q: "Parmi ces aliments, lesquels sont typiquement associés au risque Listeria ?", options: ["Fromages au lait cru", "Pâtes sèches non cuites", "Rillettes", "Saumon fumé"], bonnes: [0, 2, 3],
      explication: "Listeria concerne les produits réfrigérés prêts à consommer sans cuisson : fromages au lait cru, poisson fumé, charcuterie. Les pâtes sèches ne permettent pas sa multiplication." },
    { id: "MICRO-026", chapitre: "germes-pathogenes", situation: "Un steak haché est servi bleu à un enfant de 4 ans.",
      q: "Le principal danger est une contamination par :", options: ["Escherichia coli STEC", "Clostridium botulinum", "Le virus de l'hépatite A"], bonnes: [0],
      explication: "Les E. coli STEC, présents dans l'intestin des bovins, contaminent la viande hachée. Chez le jeune enfant, ils peuvent provoquer un syndrome hémolytique et urémique : la viande hachée doit être bien cuite à cœur." },
    { id: "MICRO-027", chapitre: "germes-pathogenes", situation: "Un cuisinier découpe des cuisses de poulet crues puis, avec la même planche non lavée, émince une salade servie crue.",
      q: "Quel germe risque d'être transmis à la salade ?", options: ["Salmonella", "Campylobacter", "Anisakis"], bonnes: [0, 1],
      explication: "Les volailles crues sont souvent porteuses de Campylobacter et de salmonelles. Cette contamination croisée cru/cuit (ou cru/prêt à consommer) est une faute grave." },
    { id: "MICRO-028", chapitre: "germes-pathogenes", situation: "Du riz cuit pour le service du midi est resté sur le passe à température ambiante jusqu'au soir.",
      q: "Le germe à redouter est :", options: ["Bacillus cereus", "Anisakis", "Norovirus"], bonnes: [0],
      explication: "Bacillus cereus est un germe sporulé des céréales : ses spores survivent à la cuisson du riz et la bactérie produit une toxine résistante à la chaleur si le riz reste à température ambiante." },
    { id: "MICRO-029", chapitre: "germes-pathogenes",
      q: "Le norovirus est principalement transmis par :", options: ["La multiplication dans les plats tièdes", "Les mains d'un manipulateur malade", "Les coquillages consommés crus"], bonnes: [1, 2],
      explication: "Le norovirus est apporté par les mains d'une personne malade ou porteuse, par les coquillages et les crudités. Comme tout virus, il ne se multiplie pas dans l'aliment." },
    { id: "MICRO-030", chapitre: "germes-pathogenes", situation: "Votre restaurant propose des sushis au maquereau cru.",
      q: "Pour maîtriser le risque Anisakis, le poisson doit :", options: ["Être conservé à +3 °C", "Être congelé à -20 °C pendant au moins 24 heures", "Être simplement rincé à l'eau froide"], bonnes: [1],
      explication: "Le poisson de mer destiné à être consommé cru doit subir une congélation à -20 °C pendant au moins 24 heures, qui détruit Anisakis. La réfrigération et le rinçage sont sans effet." },
    { id: "MICRO-031", chapitre: "germes-pathogenes",
      q: "Le sigle YOPI désigne les personnes les plus sensibles aux toxi-infections. Il regroupe :", options: ["Les femmes enceintes", "Les jeunes enfants", "Les personnes immunodéprimées", "Les personnes âgées"], bonnes: [0, 1, 2, 3],
      explication: "YOPI : Young (jeunes enfants), Old (personnes âgées), Pregnant (femmes enceintes), Immunodepressed (immunodéprimés). Toutes ces personnes sont plus vulnérables." },
    { id: "MICRO-032", chapitre: "germes-pathogenes",
      q: "Clostridium botulinum est :", options: ["Une bactérie anaérobie", "Une bactérie capable de former des spores", "Un parasite du poisson"], bonnes: [0, 1],
      explication: "Clostridium botulinum est une bactérie anaérobie stricte et sporulée. Sa toxine provoque le botulisme, une maladie paralysante parfois mortelle." },
    { id: "MICRO-033", chapitre: "germes-pathogenes",
      q: "Le staphylocoque doré a pour réservoir principal :", options: ["L'homme (nez, gorge, peau, plaies)", "Les poissons de mer", "Le sol"], bonnes: [0],
      explication: "Une part importante de la population porte le staphylocoque doré dans le nez ou la gorge. Il est transmis aux aliments par les mains, la toux, les éternuements ou une plaie." },
    { id: "MICRO-034", chapitre: "germes-pathogenes", situation: "Quelques heures après un repas, plusieurs clients vomissent. Le plat en cause est une pâtisserie à la crème très manipulée.",
      q: "Le germe le plus probable est :", options: ["Staphylococcus aureus", "Le virus de l'hépatite A", "Listeria monocytogenes"], bonnes: [0],
      explication: "Incubation courte, vomissements, aliment très manipulé : c'est le tableau typique de l'intoxination staphylococcique. Listeria et l'hépatite A ont des incubations de plusieurs jours ou semaines." },
    { id: "MICRO-035", chapitre: "germes-pathogenes",
      q: "Pour se protéger de Listeria, il faut avant tout :", options: ["Nettoyer et désinfecter régulièrement trancheuses et chambres froides", "Conserver les produits à température ambiante", "Respecter strictement les DLC"], bonnes: [0, 2],
      explication: "Listeria se multiplie au froid et colonise les surfaces humides. Le respect des DLC et le nettoyage-désinfection des équipements sont essentiels." },
    { id: "MICRO-036", chapitre: "germes-pathogenes",
      q: "Les virus de l'hépatite A et les norovirus peuvent se multiplier dans un aliment laissé à température ambiante :", options: ["Oui", "Non"], bonnes: [1],
      explication: "Les virus ne se multiplient pas dans les aliments : ils y sont seulement transportés. Une faible quantité suffit pourtant à rendre malade, d'où l'importance de l'hygiène des mains." },
    { id: "MICRO-037", chapitre: "germes-pathogenes",
      q: "La toxoplasmose, dangereuse pour la femme enceinte, peut être transmise par :", options: ["Une eau minérale en bouteille scellée", "Une viande peu cuite", "Des crudités mal lavées"], bonnes: [1, 2],
      explication: "Toxoplasma est un parasite transmis par les viandes peu cuites et les végétaux souillés de terre. La cuisson et le lavage soigneux des végétaux le maîtrisent." },
    { id: "MICRO-038", chapitre: "germes-pathogenes",
      q: "En France, quel agent est le plus souvent confirmé dans les TIAC ?", options: ["Anisakis", "Clostridium botulinum", "Les salmonelles"], bonnes: [2],
      explication: "Les salmonelles restent le premier agent confirmé dans les TIAC en France, souvent en lien avec les œufs et les préparations à base d'œufs crus." }
  );
})();

/* ───────────── Thème DANGERS — Les dangers et les TIAC ───────────── */
(function () {
  const P = window.PERMIS_COURS["haccp"] = window.PERMIS_COURS["haccp"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "dangers-contaminations",
      theme: "DANGERS",
      titre: "Les dangers alimentaires, les 5 M et la contamination croisée",
      duree: 12,
      objectifs: [
        "Distinguer danger et risque",
        "Classer un danger : biologique, chimique, physique ou allergène",
        "Utiliser la méthode des 5 M pour rechercher les sources de contamination",
        "Comprendre les étapes contamination, multiplication, survie",
        "Repérer et prévenir les contaminations croisées"
      ],
      sections: [
        {
          titre: "Danger et risque : deux notions différentes",
          contenu: `<p>Le vocabulaire de l'hygiène distingue soigneusement deux mots que le langage courant confond :</p>
<ul>
<li>Le <strong>danger</strong> est un agent biologique, chimique ou physique présent dans un aliment, ou un état de cet aliment, pouvant avoir un effet néfaste sur la santé. Exemple : la présence de salmonelles dans un œuf.</li>
<li>Le <strong>risque</strong> est la probabilité que ce danger provoque effectivement un effet néfaste, combinée à la gravité de cet effet. Exemple : le risque de salmonellose est élevé si une mayonnaise aux œufs crus reste trois heures à température ambiante, faible si elle est préparée avec des ovoproduits pasteurisés et gardée au froid.</li>
</ul>
<p>L'hygiène vise à <strong>maîtriser les risques</strong> : on ne peut pas toujours supprimer un danger, mais on peut réduire la probabilité qu'il atteigne le consommateur à un niveau dangereux.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « danger » désigne la chose (le germe, le morceau de verre, le produit chimique) ; « risque » désigne la probabilité et la gravité. Une question qui demande « quel est le danger » attend un agent, pas une situation.</div>`
        },
        {
          titre: "Les familles de dangers",
          contenu: `<table>
<thead><tr><th>Danger</th><th>Exemples</th><th>Origine fréquente</th></tr></thead>
<tbody>
<tr><td>Biologique</td><td>Bactéries pathogènes, virus, parasites, moisissures productrices de toxines</td><td>Matières premières, personnel, environnement, multiplication par mauvaise maîtrise des températures</td></tr>
<tr><td>Chimique</td><td>Résidus de produits de nettoyage et de désinfection, pesticides, métaux lourds, huile de friture dégradée, histamine des poissons, additifs mal dosés</td><td>Mauvais rinçage, stockage des produits d'entretien près des denrées, contenants inadaptés</td></tr>
<tr><td>Physique</td><td>Verre, métal (agrafes, morceaux de lame, paille de fer), bois, plastique, cheveux, bijoux, os, arêtes, cailloux</td><td>Emballages, matériel usé, personnel, matières premières</td></tr>
<tr><td>Allergène</td><td>Les 14 allergènes réglementaires (gluten, œufs, lait, arachides, fruits à coque…)</td><td>Recette, contamination croisée, défaut d'information</td></tr>
</tbody>
</table>
<p>L'<strong>histamine</strong> est un exemple de danger chimique d'origine biologique : elle se forme dans certains poissons (thon, maquereau, sardine) quand la chaîne du froid est rompue, et elle résiste à la cuisson. Elle provoque rougeurs, maux de tête et troubles digestifs peu après le repas.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un éclat de verre provenant d'un bocal cassé dans un bac de préparation est un danger physique ; des traces de détergent sur une planche mal rincée, un danger chimique.</div>
<div class="encart" data-type="danger"><strong>Attention :</strong> les produits d'entretien ne se stockent jamais avec les denrées et ne se transvasent jamais dans des bouteilles alimentaires. Un produit mal étiqueté peut être confondu avec un liquide de cuisine.</div>`
        },
        {
          titre: "La méthode des 5 M",
          contenu: `<p>Pour rechercher toutes les sources possibles de contamination, on utilise la méthode des <strong>5 M</strong> (diagramme d'Ishikawa ou « arête de poisson »). C'est un outil d'analyse très présent dans le QCM.</p>
<table>
<thead><tr><th>M</th><th>Ce qu'il recouvre</th><th>Exemples de sources de contamination</th></tr></thead>
<tbody>
<tr><td>Matière</td><td>Matières premières, denrées</td><td>Viandes, volailles, œufs, légumes terreux, produits de la mer porteurs de germes</td></tr>
<tr><td>Main-d'œuvre</td><td>Le personnel</td><td>Mains sales, tenue sale, porteurs sains, malades, plaies, cheveux, toux</td></tr>
<tr><td>Matériel</td><td>Équipements et ustensiles</td><td>Planches, couteaux, trancheuses mal nettoyés, matériel usé ou rouillé</td></tr>
<tr><td>Milieu</td><td>Locaux, environnement</td><td>Air, eau, sols, murs, nuisibles, déchets, température ambiante</td></tr>
<tr><td>Méthode</td><td>Organisation du travail</td><td>Croisement du propre et du sale, mauvais refroidissement, mauvaise décongélation, absence de procédure</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> Matière, Main-d'œuvre, Matériel, Milieu, Méthode. Le personnel est la source principale de contamination dans de nombreuses TIAC : c'est le « M » de la main-d'œuvre.</div>`
        },
        {
          titre: "Contamination, multiplication, survie",
          contenu: `<p>Une toxi-infection résulte en général d'un enchaînement de fautes :</p>
<ol>
<li><strong>Contamination initiale</strong> : le germe est déjà présent dans la matière première (volaille, œufs, légumes).</li>
<li><strong>Contamination au cours du travail</strong> : il est apporté par les mains, le matériel, l'environnement, ou transféré d'un aliment à un autre.</li>
<li><strong>Multiplication</strong> : l'aliment séjourne trop longtemps dans la zone de danger (+3 °C / +63 °C).</li>
<li><strong>Survie</strong> : une cuisson insuffisante ne détruit pas le germe, ou une toxine thermostable reste présente.</li>
</ol>
<p>Les bonnes pratiques répondent à ces étapes par trois objectifs : <strong>éviter les contaminations</strong> (hygiène du personnel, marche en avant, nettoyage), <strong>empêcher la multiplication</strong> (maîtrise du froid et du chaud, du temps) et <strong>détruire les germes</strong> (cuisson suffisante, désinfection).</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un poulet contaminé (contamination initiale), découpé sur une planche ensuite utilisée pour la salade (contamination croisée), une salade laissée sur le passe pendant le service (multiplication) : trois fautes s'enchaînent, et la salade, servie crue, n'a aucune étape de destruction.</div>`
        },
        {
          titre: "La contamination croisée",
          contenu: `<p>La <strong>contamination croisée</strong> est le transfert de germes (ou d'allergènes) d'un aliment, d'une surface ou d'une personne vers un autre aliment. Le cas le plus grave est le transfert d'un produit <strong>cru</strong> vers un produit <strong>cuit</strong> ou prêt à consommer, qui ne subira plus de cuisson.</p>
<p>Elle se fait par :</p>
<ul>
<li>contact direct entre aliments (viande crue posée au-dessus d'un dessert en chambre froide, jus qui coule) ;</li>
<li>les mains (manipuler des œufs puis dresser une assiette sans se laver les mains) ;</li>
<li>le matériel (même planche, même couteau, même torchon) ;</li>
<li>l'environnement (cartons d'emballage introduits en cuisine, poubelle ouverte près d'un plan de travail).</li>
</ul>
<p>Pour l'éviter : séparer les produits crus et cuits dans le stockage (cuits et prêts à consommer en haut, crus en bas), filmer ou couvrir, utiliser du matériel dédié (code couleur des planches), se laver les mains entre deux tâches, nettoyer et désinfecter entre deux préparations, respecter la marche en avant, retirer les emballages extérieurs avant l'entrée en zone propre (déconditionnement).</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> porter des gants n'empêche pas la contamination croisée si l'on garde les mêmes gants pour toucher du cru puis du cuit. Les gants se changent comme on se lave les mains.</div>`
        }
      ],
      points_cles: [
        "Danger : agent biologique, chimique, physique (ou allergène) ; risque : probabilité et gravité",
        "Danger chimique : résidus de produits d'entretien, histamine, huile dégradée",
        "Danger physique : verre, métal, cheveux, bijoux, os",
        "Les 5 M : Matière, Main-d'œuvre, Matériel, Milieu, Méthode",
        "Enchaînement : contamination, multiplication, survie",
        "Trois objectifs : éviter la contamination, empêcher la multiplication, détruire les germes",
        "Contamination croisée : surtout du cru vers le cuit ou le prêt à consommer",
        "En stockage : cuits et prêts à consommer en haut, crus en bas, tout est couvert"
      ]
    },
    {
      id: "tiac",
      theme: "DANGERS",
      titre: "Les toxi-infections alimentaires collectives (TIAC)",
      duree: 12,
      objectifs: [
        "Connaître la définition réglementaire d'une TIAC",
        "Savoir qu'il s'agit d'une maladie à déclaration obligatoire et à qui la signaler",
        "Connaître la conduite à tenir dans l'établissement en cas de suspicion",
        "Comprendre le rôle et les règles des plats témoins",
        "Identifier les fautes les plus souvent en cause"
      ],
      sections: [
        {
          titre: "Définition d'une TIAC",
          contenu: `<p>Une <strong>toxi-infection alimentaire collective (TIAC)</strong> est définie par l'apparition d'<strong>au moins deux cas groupés</strong> d'une symptomatologie similaire, en général digestive, dont on peut rapporter la cause à une <strong>même origine alimentaire</strong>.</p>
<p>Trois éléments sont donc nécessaires : au moins deux malades, des symptômes semblables, un aliment ou un repas commun. Un client isolé malade après un repas ne constitue pas, à lui seul, une TIAC (même s'il faut prendre sa plainte au sérieux et la consigner).</p>
<p>Les symptômes les plus fréquents sont digestifs : nausées, vomissements, diarrhée, douleurs abdominales, parfois fièvre. Certaines intoxications donnent des signes différents : troubles neurologiques (botulisme), rougeurs et maux de tête (histamine).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> TIAC = au moins 2 cas + symptômes similaires (souvent digestifs) + même origine alimentaire.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le nombre minimal est deux, pas dix ni cinq. Et les malades n'ont pas besoin d'être de la même famille : il suffit qu'ils aient consommé le même aliment.</div>`
        },
        {
          titre: "Les TIAC en France : où et pourquoi",
          contenu: `<p>Chaque année, plus d'un millier de TIAC sont déclarées en France, touchant plusieurs milliers de personnes. La <strong>restauration commerciale</strong> figure parmi les premiers lieux de survenue, avec les repas familiaux et la restauration collective.</p>
<p>Les agents les plus souvent confirmés ou suspectés sont les <strong>salmonelles</strong>, le <strong>staphylocoque doré</strong>, <strong>Bacillus cereus</strong> et <strong>Clostridium perfringens</strong>, ainsi que les norovirus.</p>
<p>Les facteurs le plus souvent mis en évidence lors des enquêtes sont :</p>
<ul>
<li>des erreurs dans la maîtrise des températures : chaîne du froid non respectée, refroidissement trop lent, maintien au chaud insuffisant, délai trop long entre préparation et consommation ;</li>
<li>une contamination par le personnel (mains, porteurs de germes, malades) ;</li>
<li>des matières premières contaminées (œufs crus, coquillages) ;</li>
<li>des équipements inadaptés ou mal nettoyés, une contamination croisée.</li>
</ul>
<p>Lors de l'enquête, le <strong>délai entre le repas et les premiers symptômes</strong> oriente vers le germe : quelques heures évoquent une toxine déjà présente dans l'aliment (staphylocoque doré, Bacillus cereus), une douzaine d'heures à deux jours une salmonellose ou Clostridium perfringens, plusieurs jours ou semaines un norovirus, Listeria ou l'hépatite A. C'est pourquoi il faut noter précisément l'heure du repas et celle des premiers troubles.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la maîtrise des températures et l'hygiène du personnel sont les deux grands leviers de prévention des TIAC.</div>`
        },
        {
          titre: "Une maladie à déclaration obligatoire",
          contenu: `<p>La TIAC est une <strong>maladie à déclaration obligatoire</strong>. Elle doit être signalée sans délai aux autorités sanitaires :</p>
<ul>
<li>à l'<strong>Agence régionale de santé (ARS)</strong>, qui conduit l'enquête épidémiologique (auprès des malades) ;</li>
<li>ou à la <strong>Direction départementale de la protection des populations (DDPP</strong> ou DDETSPP selon les départements), qui conduit l'enquête dans l'établissement (aliments, pratiques, fournisseurs).</li>
</ul>
<p>Le médecin qui diagnostique les cas doit déclarer. Le responsable de l'établissement qui a connaissance de plusieurs malades après un repas servi chez lui doit, lui aussi, informer les autorités et coopérer à l'enquête. Il ne doit en aucun cas chercher à dissimuler l'incident.</p>
<p>Le but de la déclaration n'est pas d'abord de sanctionner : il s'agit d'identifier l'aliment en cause pour <strong>stopper l'épidémie</strong>, retirer d'éventuels lots contaminés et éviter que d'autres personnes soient touchées.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> on ne déclare ni à la mairie, ni à l'assurance, ni au fournisseur seulement. Les interlocuteurs officiels sont l'ARS et la DDPP.</div>`
        },
        {
          titre: "Conduite à tenir en cas de suspicion de TIAC",
          contenu: `<p>Si des clients signalent qu'ils sont malades après un repas, le restaurateur doit :</p>
<ol>
<li><strong>Prendre la plainte au sérieux</strong> et noter les informations : identité et coordonnées, date et heure du repas, plats consommés, nature et heure d'apparition des symptômes.</li>
<li><strong>Informer les autorités</strong> (ARS ou DDPP).</li>
<li><strong>Ne rien jeter</strong> : conserver au froid les restes des plats concernés, les <strong>plats témoins</strong>, les matières premières des mêmes lots, les emballages et les étiquettes.</li>
<li><strong>Bloquer</strong> les denrées suspectes : elles ne doivent plus être servies.</li>
<li>Rassembler les documents utiles : menus, fiches techniques, bons de livraison, factures, relevés de températures, plan de nettoyage, liste du personnel présent.</li>
<li>Coopérer avec les enquêteurs et appliquer les mesures demandées (nettoyage, retrait, analyses).</li>
</ol>
<div class="encart" data-type="danger"><strong>Attention :</strong> jeter les restes « pour éviter les ennuis » empêche l'enquête, peut laisser d'autres consommateurs exposés et aggrave la responsabilité de l'exploitant.</div>`
        },
        {
          titre: "Les plats témoins",
          contenu: `<p>Un <strong>plat témoin</strong> est un échantillon représentatif des plats servis, prélevé et conservé pour permettre une analyse en cas de TIAC.</p>
<table>
<thead><tr><th>Règle</th><th>Contenu</th></tr></thead>
<tbody>
<tr><td>Établissements concernés</td><td>Obligatoires en restauration collective (cantines, hôpitaux, maisons de retraite…). En restauration commerciale, ils sont vivement recommandés, notamment pour les banquets, repas de groupe et prestations traiteur</td></tr>
<tr><td>Quantité</td><td>Une quantité suffisante pour l'analyse (on retient couramment 80 à 100 g par plat)</td></tr>
<tr><td>Prélèvement</td><td>Au moment du service, dans des conditions d'hygiène strictes, dans un contenant propre et fermé</td></tr>
<tr><td>Identification</td><td>Nom du plat, date de fabrication ou de service, éventuellement le repas</td></tr>
<tr><td>Conservation</td><td>Au froid positif, entre 0 et +3 °C, pendant <strong>au moins 5 jours</strong> après la dernière présentation au consommateur</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le plat témoin se conserve réfrigéré, pas congelé : la congélation fausserait les analyses. Et il est prélevé sur le plat réellement servi, au moment du service.</div>`
        }
      ],
      points_cles: [
        "TIAC : au moins 2 cas groupés, symptômes similaires, même origine alimentaire",
        "Maladie à déclaration obligatoire auprès de l'ARS ou de la DDPP",
        "Causes principales : erreurs de température et contamination par le personnel",
        "En cas de suspicion : informer, ne rien jeter, bloquer les denrées, rassembler les documents",
        "Plats témoins : obligatoires en restauration collective, recommandés en restauration commerciale",
        "Plats témoins : 80 à 100 g environ, identifiés, conservés entre 0 et +3 °C au moins 5 jours",
        "Agents fréquents : salmonelles, staphylocoque doré, Bacillus cereus, Clostridium perfringens"
      ]
    }
  );

  P.questions.push(
    { id: "DANGERS-001", chapitre: "dangers-contaminations",
      q: "La présence de salmonelles dans un œuf est :", options: ["Un risque", "Un danger", "Une non-conformité administrative"], bonnes: [1],
      explication: "Le danger est l'agent capable de nuire (ici les salmonelles). Le risque est la probabilité et la gravité de l'effet, qui dépend de l'usage de l'œuf." },
    { id: "DANGERS-002", chapitre: "dangers-contaminations",
      q: "Le risque se définit comme :", options: ["La présence d'un germe dans un aliment", "La probabilité qu'un danger provoque un effet néfaste, combinée à sa gravité", "Une sanction prononcée par la DDPP"], bonnes: [1],
      explication: "Le risque combine la probabilité d'apparition de l'effet néfaste et sa gravité. Le danger, lui, est l'agent (biologique, chimique, physique)." },
    { id: "DANGERS-003", chapitre: "dangers-contaminations", situation: "En dressant une assiette, un cuisinier trouve un morceau de verre provenant d'un bocal cassé.",
      q: "Il s'agit d'un danger :", options: ["Physique", "Biologique", "Chimique"], bonnes: [0],
      explication: "Verre, métal, bois, plastique, cheveux, os sont des dangers physiques." },
    { id: "DANGERS-004", chapitre: "dangers-contaminations",
      q: "Lesquels de ces éléments sont des dangers chimiques ?", options: ["Une agrafe de carton", "Une huile de friture dégradée", "Des résidus de détergent sur une planche mal rincée", "L'histamine d'un thon mal conservé"], bonnes: [1, 2, 3],
      explication: "Résidus de produits d'entretien, huile dégradée et histamine sont des dangers chimiques. L'agrafe est un danger physique." },
    { id: "DANGERS-005", chapitre: "dangers-contaminations", situation: "Un thon livré a été laissé plusieurs heures hors du froid avant d'être cuisiné. Peu après le repas, des clients ont le visage rouge et des maux de tête.",
      q: "La substance probablement en cause :", options: ["Est l'histamine", "Est détruite par la cuisson", "Se forme quand la chaîne du froid est rompue"], bonnes: [0, 2],
      explication: "L'histamine se forme dans certains poissons (thon, maquereau, sardine) mal réfrigérés. Elle résiste à la cuisson, d'où l'importance de la chaîne du froid." },
    { id: "DANGERS-006", chapitre: "dangers-contaminations",
      q: "Que désignent les 5 M ?", options: ["Microbes, Moisissures, Mains, Métal, Mouches", "Menu, Marchandise, Marche en avant, Maintien, Mesure", "Matière, Main-d'œuvre, Matériel, Milieu, Méthode"], bonnes: [2],
      explication: "Les 5 M (diagramme d'Ishikawa) servent à rechercher toutes les sources de contamination : Matière, Main-d'œuvre, Matériel, Milieu, Méthode." },
    { id: "DANGERS-007", chapitre: "dangers-contaminations", situation: "Un serveur enrhumé éternue au-dessus des assiettes en attente sur le passe.",
      q: "Dans la méthode des 5 M, cette source de contamination relève de :", options: ["Le matériel", "La main-d'œuvre", "La matière"], bonnes: [1],
      explication: "Le personnel correspond au M de la main-d'œuvre. Le nez et la gorge peuvent abriter des germes comme le staphylocoque doré." },
    { id: "DANGERS-008", chapitre: "dangers-contaminations", situation: "Une planche à découper rayée et fendue est utilisée depuis des années.",
      q: "Dans la méthode des 5 M, ce problème relève de :", options: ["Le milieu", "Le matériel", "La méthode"], bonnes: [1],
      explication: "Un équipement usé, difficile à nettoyer, relève du Matériel. Les rayures abritent des germes que le nettoyage n'atteint plus." },
    { id: "DANGERS-009", chapitre: "dangers-contaminations", situation: "Les cartons de livraison sont posés directement sur le plan de travail où l'on dresse les entrées.",
      q: "Ce problème relève de :", options: ["Une contamination croisée", "La méthode (organisation du travail)", "La matière première elle-même"], bonnes: [0, 1],
      explication: "C'est une erreur d'organisation (Méthode) qui provoque une contamination croisée : les cartons, venus de l'extérieur, ne doivent pas entrer dans les zones propres." },
    { id: "DANGERS-010", chapitre: "dangers-contaminations",
      q: "Une contamination croisée est :", options: ["Le transfert de germes d'un aliment, d'une surface ou d'une personne vers un autre aliment", "La multiplication des germes dans un plat tiède", "La destruction des germes par la cuisson"], bonnes: [0],
      explication: "La contamination croisée est un transfert, notamment du cru vers le cuit ou le prêt à consommer. Elle se fait par contact, par les mains, le matériel ou l'environnement." },
    { id: "DANGERS-011", chapitre: "dangers-contaminations", situation: "En chambre froide, vous rangez des viandes crues, des desserts et des entrées prêtes à servir.",
      q: "Comment les disposer ?", options: ["Desserts et entrées en haut, viandes crues en bas", "Viandes crues en haut pour qu'elles refroidissent mieux", "Peu importe si tout est en chambre froide"], bonnes: [0],
      explication: "Les produits crus se rangent en dessous des produits cuits ou prêts à consommer pour éviter que des jus ne coulent dessus. Tous les produits sont couverts." },
    { id: "DANGERS-012", chapitre: "dangers-contaminations", situation: "Un commis porte des gants. Il découpe des volailles crues puis, avec les mêmes gants, dresse une salade de crudités.",
      q: "Y a-t-il un risque de contamination croisée ?", options: ["Oui", "Non, puisqu'il porte des gants"], bonnes: [0],
      explication: "Les gants transportent les germes comme des mains. Ils doivent être changés entre deux tâches, en particulier entre le cru et le prêt à consommer." },
    { id: "DANGERS-013", chapitre: "dangers-contaminations",
      q: "Pour limiter les contaminations croisées, on peut :", options: ["Utiliser des planches de couleurs différentes selon les produits", "Se laver les mains entre deux tâches", "Utiliser le même torchon toute la journée", "Nettoyer et désinfecter entre deux préparations"], bonnes: [0, 1, 3],
      explication: "Matériel dédié, lavage des mains et nettoyage-désinfection entre deux tâches limitent les transferts. Un torchon utilisé toute la journée est au contraire un vecteur de contamination." },
    { id: "DANGERS-014", chapitre: "dangers-contaminations",
      q: "Les trois grands objectifs des bonnes pratiques face aux micro-organismes sont :", options: ["Masquer les odeurs d'altération", "Éviter la contamination", "Détruire les germes", "Empêcher la multiplication"], bonnes: [1, 2, 3],
      explication: "On évite l'apport de germes, on empêche leur multiplication (températures, temps) et on les détruit quand c'est possible (cuisson, désinfection)." },
    { id: "DANGERS-015", chapitre: "dangers-contaminations",
      q: "Un produit d'entretien peut-il être transvasé dans une bouteille d'eau minérale vide pour faciliter son usage ?", options: ["Oui, si elle est bien rincée", "Non"], bonnes: [1],
      explication: "Un produit chimique dans un contenant alimentaire peut être confondu avec une boisson ou un ingrédient. Les produits restent dans leur emballage d'origine, étiquetés, stockés à l'écart des denrées." },
    { id: "DANGERS-016", chapitre: "tiac",
      q: "Une TIAC est définie par :", options: ["Une même origine alimentaire", "Au moins 10 malades hospitalisés", "Au moins 2 cas groupés", "Des symptômes similaires, en général digestifs"], bonnes: [0, 2, 3],
      explication: "Une TIAC correspond à l'apparition d'au moins deux cas groupés d'une symptomatologie similaire, en général digestive, rapportée à une même origine alimentaire. L'hospitalisation n'est pas un critère." },
    { id: "DANGERS-017", chapitre: "tiac", situation: "Trois clients qui ont mangé le même plat du jour présentent le lendemain des diarrhées et des vomissements.",
      q: "Cette situation correspond-elle à une suspicion de TIAC ?", options: ["Oui", "Non, il faut au moins 10 malades"], bonnes: [0],
      explication: "Deux cas suffisent dès lors que les symptômes sont similaires et que l'origine alimentaire est commune." },
    { id: "DANGERS-018", chapitre: "tiac",
      q: "Une TIAC doit être déclarée :", options: ["À la mairie uniquement", "À l'ARS", "Au fournisseur uniquement", "À la DDPP"], bonnes: [1, 3],
      explication: "La TIAC est une maladie à déclaration obligatoire auprès de l'Agence régionale de santé ou de la Direction départementale de la protection des populations." },
    { id: "DANGERS-019", chapitre: "tiac", situation: "Un groupe de clients appelle pour signaler des troubles digestifs après un repas d'anniversaire servi la veille.",
      q: "Que devez-vous faire ?", options: ["Noter les plats consommés et les symptômes", "Conserver les restes et les plats témoins au froid", "Jeter les restes pour éviter d'autres malades", "Informer les autorités sanitaires"], bonnes: [0, 1, 3],
      explication: "Il faut tout conserver pour l'enquête, consigner les informations et prévenir l'ARS ou la DDPP. Jeter les restes empêche d'identifier la cause." },
    { id: "DANGERS-020", chapitre: "tiac",
      q: "Les plats témoins doivent être conservés :", options: ["Au moins 5 jours après la dernière présentation au consommateur", "Entre 0 et +3 °C", "Congelés à -18 °C", "48 heures seulement"], bonnes: [0, 1],
      explication: "Les plats témoins se conservent réfrigérés (0 à +3 °C) au moins 5 jours après la dernière présentation au consommateur. La congélation fausserait les analyses." },
    { id: "DANGERS-021", chapitre: "tiac",
      q: "La quantité couramment retenue pour un plat témoin est d'environ :", options: ["80 à 100 g", "1 kg", "10 g"], bonnes: [0],
      explication: "Il faut une quantité suffisante pour permettre les analyses du laboratoire ; on retient couramment 80 à 100 g par plat." },
    { id: "DANGERS-022", chapitre: "tiac",
      q: "Un plat témoin est prélevé :", options: ["Le lendemain du service", "Sur le plat réellement servi, au moment du service", "Sur les restes ramenés des assiettes des clients"], bonnes: [1],
      explication: "Le plat témoin doit être représentatif de ce qui a été servi : il est prélevé au moment du service, proprement, dans un contenant fermé et identifié." },
    { id: "DANGERS-023", chapitre: "tiac",
      q: "Quelles sont les causes les plus fréquentes de TIAC ?", options: ["Les matières premières contaminées", "La contamination par le personnel", "L'usage d'assiettes de couleur", "Les erreurs de maîtrise des températures"], bonnes: [0, 1, 3],
      explication: "Chaîne du froid rompue, refroidissement lent, maintien au chaud insuffisant, mains sales, porteurs de germes et matières premières contaminées sont les causes principales." },
    { id: "DANGERS-024", chapitre: "tiac",
      q: "Le but premier de la déclaration d'une TIAC est :", options: ["De fermer automatiquement l'établissement", "D'identifier l'aliment en cause et d'arrêter l'épidémie", "D'obtenir une indemnisation pour le restaurant"], bonnes: [1],
      explication: "L'enquête vise à identifier la source pour éviter de nouveaux malades et retirer d'éventuels lots contaminés. La fermeture n'est pas automatique." },
    { id: "DANGERS-025", chapitre: "tiac",
      q: "En restauration commerciale, les plats témoins sont :", options: ["Interdits", "Recommandés, notamment pour les banquets et repas de groupe", "Obligatoires dans tous les cas, au même titre que la restauration collective"], bonnes: [1],
      explication: "Ils sont obligatoires en restauration collective et vivement recommandés en restauration commerciale, en particulier pour les repas de groupe et les prestations traiteur." },
    { id: "DANGERS-026", chapitre: "tiac", situation: "La DDPP enquête sur une TIAC dans votre restaurant.",
      q: "Quels documents pourront être utiles à l'enquête ?", options: ["Les avis des clients sur internet", "Les relevés de températures", "Les menus et fiches techniques", "Les bons de livraison et étiquettes des produits"], bonnes: [1, 2, 3],
      explication: "Relevés de températures, documents de traçabilité, menus et fiches techniques permettent de reconstituer la chaîne de fabrication et d'identifier les lots en cause." }
  );
})();

/* ───────────── Thème REGL — La réglementation ───────────── */
(function () {
  const P = window.PERMIS_COURS["haccp"] = window.PERMIS_COURS["haccp"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "paquet-hygiene-pms",
      theme: "REGL",
      titre: "Le paquet hygiène, le plan de maîtrise sanitaire et les obligations du restaurateur",
      duree: 13,
      objectifs: [
        "Connaître les principaux règlements du paquet hygiène et leur logique",
        "Comprendre l'obligation de résultat et la responsabilité de l'exploitant",
        "Citer les composantes du plan de maîtrise sanitaire (PMS)",
        "Connaître le rôle des guides de bonnes pratiques d'hygiène (GBPH)",
        "Connaître l'obligation de formation et la déclaration d'activité"
      ],
      sections: [
        {
          titre: "Le paquet hygiène",
          contenu: `<p>Depuis le <strong>1er janvier 2006</strong>, l'hygiène des aliments est régie dans toute l'Union européenne par un ensemble de règlements appelé <strong>paquet hygiène</strong>. Un règlement européen s'applique directement dans chaque pays, sans transposition.</p>
<table>
<thead><tr><th>Texte</th><th>Objet</th></tr></thead>
<tbody>
<tr><td>Règlement (CE) n° 178/2002</td><td>Principes généraux de la législation alimentaire : responsabilité de l'exploitant, sécurité des denrées, <strong>traçabilité</strong>, retrait et rappel</td></tr>
<tr><td>Règlement (CE) n° 852/2004</td><td>Hygiène des denrées alimentaires pour <strong>tous</strong> les exploitants, dont les restaurants : bonnes pratiques d'hygiène et procédures fondées sur les principes <strong>HACCP</strong></td></tr>
<tr><td>Règlement (CE) n° 853/2004</td><td>Règles spécifiques aux denrées d'origine animale (agrément des établissements, températures, marques d'identification)</td></tr>
<tr><td>Règlement (UE) 2017/625</td><td>Contrôles officiels (il a remplacé les anciens règlements 854/2004 et 882/2004)</td></tr>
</tbody>
</table>
<p>En France, ces règlements sont complétés par des textes nationaux, notamment l'<strong>arrêté du 21 décembre 2009</strong> relatif aux règles sanitaires applicables aux activités de commerce de détail (dont la restauration), qui fixe en particulier les températures de conservation.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> le règlement (CE) 852/2004 est le texte de base pour le restaurateur : il impose les bonnes pratiques d'hygiène et la mise en place de procédures fondées sur l'HACCP.</div>`
        },
        {
          titre: "Une obligation de résultat",
          contenu: `<p>Le paquet hygiène repose sur une logique nouvelle par rapport aux anciens textes français, très détaillés :</p>
<ul>
<li>L'exploitant (le restaurateur) est <strong>responsable</strong> de la sécurité sanitaire des aliments qu'il met sur le marché. C'est le premier responsable, avant les services de contrôle.</li>
<li>Il a une <strong>obligation de résultat</strong> : les aliments servis doivent être sûrs. En revanche, il dispose d'une certaine <strong>liberté sur les moyens</strong> pour y parvenir, à condition de pouvoir justifier ses choix.</li>
<li>Il doit mettre en place, appliquer et maintenir des procédures fondées sur les <strong>principes HACCP</strong>, adaptées à la taille et à l'activité de l'établissement.</li>
<li>Il doit pouvoir <strong>prouver</strong> ce qu'il fait : documents, enregistrements, procédures écrites.</li>
</ul>
<p>Pour certains points, la réglementation reste chiffrée et impérative : températures de conservation, refroidissement, plats témoins en restauration collective, exigences sur l'eau potable.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « obligation de moyens » est faux. Le restaurateur a une obligation de <strong>résultat</strong> (des aliments sûrs) et choisit ses moyens, en s'appuyant de préférence sur le guide de bonnes pratiques de son secteur.</div>`
        },
        {
          titre: "Le plan de maîtrise sanitaire (PMS)",
          contenu: `<p>Le <strong>plan de maîtrise sanitaire</strong> est l'ensemble des documents décrivant les mesures prises par l'établissement pour assurer l'hygiène et la sécurité sanitaire de ses productions. C'est le document que l'inspecteur demande en premier lors d'un contrôle.</p>
<table>
<thead><tr><th>Composante</th><th>Contenu</th></tr></thead>
<tbody>
<tr><td>Bonnes pratiques d'hygiène (prérequis)</td><td>Personnel (formation, tenue, état de santé), locaux et équipements, plan de nettoyage et de désinfection, lutte contre les nuisibles, approvisionnement en eau, maîtrise des températures, maintenance</td></tr>
<tr><td>Plan HACCP</td><td>Analyse des dangers, points critiques et mesures de maîtrise, fondés sur les 7 principes</td></tr>
<tr><td>Traçabilité</td><td>Procédure permettant de retrouver l'origine des produits et leur destination</td></tr>
<tr><td>Gestion des non-conformités</td><td>Actions correctives, procédure de retrait et de rappel, gestion des alertes</td></tr>
</tbody>
</table>
<p>Le PMS contient aussi les <strong>enregistrements</strong> qui prouvent son application : relevés de températures, fiches de contrôle à réception, plan de nettoyage renseigné, attestations de formation, contrat de dératisation, analyses éventuelles.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un petit restaurant peut construire son PMS en suivant le GBPH de la restauration : il reprend les fiches du guide, les adapte à ses locaux et à sa carte, et tient à jour quelques enregistrements simples (températures des enceintes, réceptions, refroidissements, nettoyage).</div>`
        },
        {
          titre: "Les guides de bonnes pratiques d'hygiène (GBPH)",
          contenu: `<p>Un <strong>guide de bonnes pratiques d'hygiène et d'application des principes HACCP</strong> est rédigé par les professionnels d'un secteur, puis <strong>validé par l'administration</strong> et publié. Il existe un GBPH pour la restauration commerciale.</p>
<ul>
<li>Il traduit la réglementation en pratiques concrètes adaptées au métier.</li>
<li>Son application n'est <strong>pas obligatoire</strong>, mais elle est <strong>vivement recommandée</strong> : un exploitant qui l'applique est présumé respecter les exigences réglementaires sur les points couverts.</li>
<li>L'exploitant qui ne l'utilise pas doit démontrer lui-même que ses procédures atteignent le même niveau de sécurité.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le GBPH n'est pas un règlement : il n'est pas d'application obligatoire. C'est un outil de référence reconnu par l'administration, sur lequel s'appuie l'inspecteur.</div>`
        },
        {
          titre: "Formation obligatoire et déclaration d'activité",
          contenu: `<p>Depuis le <strong>1er octobre 2012</strong>, les établissements de restauration commerciale (restaurants traditionnels, cafétérias et libres-services, restauration rapide) doivent compter dans leur effectif <strong>au moins une personne</strong> ayant suivi une formation spécifique en hygiène alimentaire d'une durée de <strong>14 heures</strong>, dispensée par un organisme enregistré auprès de la DRAAF.</p>
<p>Sont réputées satisfaire à cette obligation les personnes qui justifient d'une expérience professionnelle d'au moins <strong>3 ans</strong> en tant que gestionnaire ou exploitant d'une entreprise du secteur alimentaire, ou titulaires de certains diplômes ou titres listés par arrêté.</p>
<p>Cette formation ne dispense pas l'exploitant de former <strong>l'ensemble du personnel</strong> manipulant des denrées aux règles d'hygiène adaptées à son poste : c'est une exigence du règlement (CE) 852/2004.</p>
<p>Avant l'ouverture, tout établissement qui prépare, entrepose ou distribue des denrées d'origine animale doit faire une <strong>déclaration</strong> auprès de la <strong>DDPP</strong> (formulaire Cerfa n° 13984), et la mettre à jour en cas de changement d'exploitant, d'adresse ou d'activité. Un restaurant qui sert directement le consommateur n'a pas besoin d'agrément sanitaire ; l'agrément ne devient nécessaire que s'il livre des denrées d'origine animale à d'autres établissements au-delà de limites fixées par la réglementation.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> au moins une personne formée (14 heures) par établissement ; formation de tout le personnel à l'hygiène ; déclaration auprès de la DDPP avant ouverture.</div>`
        }
      ],
      points_cles: [
        "Paquet hygiène applicable depuis le 1er janvier 2006",
        "Règlement (CE) 178/2002 : principes généraux, responsabilité, traçabilité, retrait et rappel",
        "Règlement (CE) 852/2004 : hygiène pour tous les exploitants, procédures fondées sur l'HACCP",
        "L'exploitant a une obligation de résultat et le choix des moyens",
        "PMS : bonnes pratiques d'hygiène, plan HACCP, traçabilité, gestion des non-conformités, avec enregistrements",
        "GBPH : validé par l'administration, non obligatoire mais vivement recommandé",
        "Au moins une personne formée 14 heures en restauration commerciale (dispense : 3 ans d'expérience comme exploitant ou gestionnaire)",
        "Déclaration d'activité auprès de la DDPP (Cerfa 13984) avant ouverture"
      ]
    },
    {
      id: "controles-sanctions",
      theme: "REGL",
      titre: "Les contrôles officiels, les sanctions et Alim'Confiance",
      duree: 11,
      objectifs: [
        "Savoir quels services contrôlent les restaurants",
        "Connaître le déroulement d'une inspection",
        "Connaître les suites possibles : avertissement, mise en demeure, fermeture, poursuites",
        "Connaître les quatre niveaux d'hygiène publiés par Alim'Confiance",
        "Mesurer la responsabilité civile et pénale de l'exploitant"
      ],
      sections: [
        {
          titre: "Qui contrôle ?",
          contenu: `<p>Les restaurants sont contrôlés par plusieurs services de l'État, chacun dans son domaine :</p>
<table>
<thead><tr><th>Service</th><th>Domaine principal</th></tr></thead>
<tbody>
<tr><td>DDPP (ou DDETSPP), services vétérinaires, sous l'autorité de la DGAL (ministère de l'Agriculture)</td><td>Hygiène et sécurité sanitaire des aliments : c'est l'interlocuteur principal du restaurateur pour l'hygiène</td></tr>
<tr><td>DDPP, services de la concurrence, consommation et répression des fraudes (DGCCRF)</td><td>Loyauté de l'information : étiquetage, allergènes, origine des viandes, mention « fait maison », prix</td></tr>
<tr><td>ARS (Agence régionale de santé)</td><td>Santé publique : eau, enquêtes épidémiologiques en cas de TIAC</td></tr>
</tbody>
</table>
<p>Les contrôles sont le plus souvent <strong>inopinés</strong> (sans prévenir). Ils peuvent être programmés selon le niveau de risque de l'établissement ou faire suite à une plainte ou à une TIAC.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> pour l'hygiène, l'interlocuteur du restaurateur est la DDPP. Les inspecteurs peuvent entrer dans les locaux professionnels pendant les heures d'activité et ne préviennent généralement pas.</div>`
        },
        {
          titre: "Le déroulement d'une inspection",
          contenu: `<p>L'inspecteur évalue l'établissement à l'aide d'une grille nationale. Il examine notamment :</p>
<ul>
<li>l'état et l'entretien des locaux et des équipements, la propreté, la marche en avant ;</li>
<li>les températures des enceintes et des produits, les durées de vie et l'étiquetage des préparations ;</li>
<li>l'hygiène et la tenue du personnel, la formation ;</li>
<li>le plan de maîtrise sanitaire et ses enregistrements (températures, réceptions, nettoyage, nuisibles) ;</li>
<li>la traçabilité (factures, bons de livraison, étiquettes) ;</li>
<li>l'information sur les allergènes.</li>
</ul>
<p>Il peut effectuer des <strong>prélèvements</strong> pour analyse, consigner ou saisir des denrées, et rédige un <strong>rapport d'inspection</strong> qui conclut à un niveau d'hygiène et précise les non-conformités à corriger.</p>
<p>Pendant le contrôle, l'exploitant ou son représentant accompagne l'inspecteur, répond à ses questions et lui présente les documents demandés. S'opposer à un contrôle ou empêcher l'accès aux locaux constitue une infraction. Il est utile de regrouper le PMS et les enregistrements dans un classeur ou un dossier facilement accessible, connu de tout le personnel, afin qu'ils puissent être présentés même en l'absence du responsable. Après la visite, le rapport est adressé à l'exploitant, qui dispose d'un délai pour présenter ses observations et réaliser les corrections demandées ; un contrôle de suivi peut vérifier qu'elles ont été faites.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> l'inspecteur trouve en chambre froide une préparation sans étiquette et un relevé de températures non tenu depuis trois semaines. Ces deux écarts figureront dans le rapport et devront être corrigés dans le délai fixé.</div>`
        },
        {
          titre: "Les suites et les sanctions",
          contenu: `<p>Selon la gravité des écarts constatés, plusieurs suites sont possibles :</p>
<table>
<thead><tr><th>Mesure</th><th>Nature</th></tr></thead>
<tbody>
<tr><td>Avertissement</td><td>Rappel de la réglementation, sans délai contraignant particulier</td></tr>
<tr><td>Mise en demeure</td><td>Obligation de corriger les non-conformités dans un délai fixé, sous peine de sanctions</td></tr>
<tr><td>Consignation, saisie, destruction de denrées</td><td>Retrait immédiat des produits dangereux ou non conformes</td></tr>
<tr><td>Fermeture administrative totale ou partielle, suspension d'activité</td><td>Décidée par le préfet en cas de danger pour la santé, jusqu'à la remise en conformité</td></tr>
<tr><td>Procès-verbal</td><td>Transmis au procureur : poursuites pénales, amendes, voire emprisonnement pour les infractions graves (mise en danger, tromperie)</td></tr>
</tbody>
</table>
<p>Les sanctions administratives et pénales peuvent se cumuler. La fermeture n'est levée qu'après vérification que les travaux ou les mesures demandées ont été réalisés.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la fermeture administrative est décidée par le préfet sur proposition des services de contrôle ; ce n'est pas le maire ni l'inspecteur seul qui la prononce.</div>`
        },
        {
          titre: "Alim'Confiance : la transparence des contrôles",
          contenu: `<p>Depuis 2017, les résultats des contrôles sanitaires officiels sont <strong>rendus publics</strong> sur le site et l'application <strong>Alim'Confiance</strong>. Chaque établissement contrôlé y figure avec l'un des quatre niveaux d'hygiène suivants :</p>
<table>
<thead><tr><th>Niveau</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>Très satisfaisant</td><td>Aucune non-conformité ou des non-conformités mineures</td></tr>
<tr><td>Satisfaisant</td><td>Non-conformités ne justifiant pas de mise en demeure, faisant l'objet d'un rappel à la réglementation</td></tr>
<tr><td>À améliorer</td><td>L'établissement doit se corriger : mise en demeure possible et nouveau contrôle</td></tr>
<tr><td>À corriger de manière urgente</td><td>Non-conformités graves pouvant mettre en danger la santé : peut conduire à une fermeture administrative</td></tr>
</tbody>
</table>
<p>Les résultats restent en ligne pendant <strong>un an</strong>. Le restaurateur peut afficher son résultat dans l'établissement (sur la vitrine ou à l'entrée) ; cet affichage est volontaire.</p>
<p>Le niveau publié est celui du dernier contrôle : un établissement qui a corrigé ses défauts peut obtenir un meilleur niveau lors d'un contrôle suivant. Pour le consommateur, c'est un repère ; pour le restaurateur, une incitation forte à maintenir en permanence un bon niveau d'hygiène.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> quatre niveaux, du « très satisfaisant » au « à corriger de manière urgente », publiés pendant un an sur Alim'Confiance.</div>`
        },
        {
          titre: "La responsabilité de l'exploitant",
          contenu: `<p>En cas d'intoxication d'un client, l'exploitant peut voir sa responsabilité engagée sur plusieurs plans :</p>
<ul>
<li><strong>Responsabilité civile</strong> : réparation du préjudice subi par les victimes (dommages et intérêts), souvent couverte par une assurance professionnelle.</li>
<li><strong>Responsabilité pénale</strong> : sanctions pour les infractions à la réglementation, blessures ou homicide involontaires, mise en danger de la vie d'autrui, tromperie. Elle n'est pas assurable : l'amende ou la peine est personnelle.</li>
<li><strong>Conséquences commerciales</strong> : publicité négative, résultat Alim'Confiance défavorable, perte de clientèle.</li>
</ul>
<p>Pour se défendre, l'exploitant doit pouvoir montrer qu'il a mis en place les mesures nécessaires : c'est tout l'intérêt d'un PMS tenu à jour et de <strong>documents et enregistrements</strong> fiables. Un salarié peut aussi voir sa responsabilité engagée s'il ne respecte pas les consignes reçues.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> sans enregistrements, l'exploitant ne peut pas prouver qu'il respectait les températures ou le nettoyage. « Ce qui n'est pas écrit n'a pas été fait » aux yeux d'un inspecteur ou d'un juge.</div>`
        }
      ],
      points_cles: [
        "La DDPP (ou DDETSPP) contrôle l'hygiène ; la DGCCRF l'information du consommateur ; l'ARS enquête sur les TIAC",
        "Contrôles le plus souvent inopinés, avec grille nationale et rapport d'inspection",
        "Suites : avertissement, mise en demeure, saisie, fermeture administrative par le préfet, procès-verbal",
        "Alim'Confiance : très satisfaisant, satisfaisant, à améliorer, à corriger de manière urgente",
        "Résultats publiés pendant un an ; affichage volontaire dans l'établissement",
        "Responsabilités civile et pénale de l'exploitant ; la responsabilité pénale n'est pas assurable",
        "Les enregistrements sont la preuve de la maîtrise sanitaire"
      ]
    }
  );

  P.questions.push(
    { id: "REGL-001", chapitre: "paquet-hygiene-pms",
      q: "Le paquet hygiène s'applique dans l'Union européenne depuis :", options: ["Le 1er janvier 1997", "Le 1er janvier 2006", "Le 1er octobre 2012"], bonnes: [1],
      explication: "Les règlements du paquet hygiène s'appliquent depuis le 1er janvier 2006. Le 1er octobre 2012 est la date de l'obligation de formation en restauration commerciale." },
    { id: "REGL-002", chapitre: "paquet-hygiene-pms",
      q: "Quel règlement fixe les règles d'hygiène applicables à tous les exploitants, dont les restaurants ?", options: ["Le règlement (CE) 852/2004", "Le règlement (CE) 853/2004", "Le Code de la route"], bonnes: [0],
      explication: "Le règlement (CE) 852/2004 concerne l'hygiène des denrées pour tous les exploitants. Le 853/2004 fixe des règles spécifiques aux denrées d'origine animale." },
    { id: "REGL-003", chapitre: "paquet-hygiene-pms",
      q: "Le règlement (CE) 178/2002 pose notamment le principe :", options: ["Du retrait et du rappel des produits dangereux", "De la responsabilité de l'exploitant", "De la traçabilité"], bonnes: [0, 1, 2],
      explication: "Ce règlement fixe les principes généraux de la législation alimentaire : responsabilité première de l'exploitant, traçabilité, retrait et rappel des denrées dangereuses." },
    { id: "REGL-004", chapitre: "paquet-hygiene-pms",
      q: "Selon le paquet hygiène, le restaurateur a :", options: ["Une obligation de résultat", "Une liberté de choix des moyens, à condition de les justifier", "Une simple obligation de moyens"], bonnes: [0, 1],
      explication: "L'exploitant doit garantir des aliments sûrs (obligation de résultat) et choisit ses moyens, qu'il doit pouvoir justifier, de préférence en appliquant le GBPH." },
    { id: "REGL-005", chapitre: "paquet-hygiene-pms",
      q: "Le premier responsable de la sécurité sanitaire des repas servis dans un restaurant est :", options: ["L'exploitant du restaurant", "Le fournisseur", "La DDPP"], bonnes: [0],
      explication: "Le règlement 178/2002 fait de l'exploitant le premier responsable de la sécurité des denrées qu'il met sur le marché. Les services officiels contrôlent cette responsabilité." },
    { id: "REGL-006", chapitre: "paquet-hygiene-pms",
      q: "Que signifie le sigle PMS ?", options: ["Programme de maintenance sécurisée", "Procédure de mise en service", "Plan de maîtrise sanitaire"], bonnes: [2],
      explication: "Le plan de maîtrise sanitaire rassemble les mesures et documents permettant d'assurer l'hygiène et la sécurité des productions de l'établissement." },
    { id: "REGL-007", chapitre: "paquet-hygiene-pms",
      q: "Quelles sont les composantes du plan de maîtrise sanitaire ?", options: ["Le plan HACCP", "La traçabilité et la gestion des non-conformités", "Le plan de communication publicitaire", "Les bonnes pratiques d'hygiène"], bonnes: [0, 1, 3],
      explication: "Le PMS comprend les bonnes pratiques d'hygiène (prérequis), le plan HACCP, la traçabilité et la gestion des non-conformités, avec les enregistrements correspondants." },
    { id: "REGL-008", chapitre: "paquet-hygiene-pms",
      q: "L'application du guide de bonnes pratiques d'hygiène (GBPH) de la restauration est :", options: ["Interdite aux petits établissements", "Volontaire mais vivement recommandée", "Obligatoire"], bonnes: [1],
      explication: "Le GBPH, validé par l'administration, n'est pas obligatoire. Celui qui l'applique est présumé respecter la réglementation ; celui qui ne l'applique pas doit prouver l'efficacité de ses propres mesures." },
    { id: "REGL-009", chapitre: "paquet-hygiene-pms",
      q: "Un GBPH est :", options: ["Un règlement européen", "Validé par l'administration", "Rédigé par les professionnels du secteur"], bonnes: [1, 2],
      explication: "Le guide est élaboré par les organisations professionnelles puis validé par les pouvoirs publics. Ce n'est pas un texte réglementaire." },
    { id: "REGL-010", chapitre: "paquet-hygiene-pms", situation: "Vous ouvrez une pizzeria avec deux salariés. Aucun de vous n'a d'expérience comme exploitant d'un commerce alimentaire.",
      q: "Combien de personnes au minimum doivent avoir suivi la formation spécifique de 14 heures ?", options: ["Toutes", "Au moins une", "Aucune, seul le GBPH compte"], bonnes: [1],
      explication: "La réglementation impose au moins une personne formée dans l'effectif de l'établissement. Tout le personnel doit par ailleurs être formé à l'hygiène adaptée à son poste." },
    { id: "REGL-011", chapitre: "paquet-hygiene-pms",
      q: "La formation spécifique en hygiène alimentaire pour la restauration commerciale dure :", options: ["14 heures", "35 heures", "7 heures"], bonnes: [0],
      explication: "La formation obligatoire dure 14 heures et est dispensée par un organisme enregistré auprès de la DRAAF." },
    { id: "REGL-012", chapitre: "paquet-hygiene-pms",
      q: "Est dispensée de cette formation la personne qui justifie d'une expérience d'au moins :", options: ["6 mois comme serveur", "1 an comme plongeur", "3 ans comme gestionnaire ou exploitant d'une entreprise du secteur alimentaire"], bonnes: [2],
      explication: "Sont réputées formées les personnes justifiant d'au moins 3 ans d'expérience comme gestionnaire ou exploitant d'une entreprise alimentaire, ou titulaires de certains diplômes." },
    { id: "REGL-013", chapitre: "paquet-hygiene-pms",
      q: "Quels établissements sont concernés par l'obligation d'avoir une personne formée ?", options: ["Les cafétérias et libres-services", "Les restaurants traditionnels", "Les établissements de restauration rapide"], bonnes: [0, 1, 2],
      explication: "L'obligation vise la restauration commerciale : restauration traditionnelle, cafétérias et libres-services, restauration rapide." },
    { id: "REGL-014", chapitre: "paquet-hygiene-pms",
      q: "Avant l'ouverture d'un restaurant, l'exploitant doit déclarer son activité auprès de :", options: ["L'ARS uniquement", "La chambre d'agriculture", "La DDPP"], bonnes: [2],
      explication: "La déclaration des établissements manipulant des denrées d'origine animale se fait auprès de la DDPP (formulaire Cerfa 13984), à mettre à jour en cas de changement." },
    { id: "REGL-015", chapitre: "paquet-hygiene-pms",
      q: "Un restaurant qui sert ses plats directement à ses clients doit-il obtenir un agrément sanitaire ?", options: ["Oui, toujours", "Non, une déclaration suffit"], bonnes: [1],
      explication: "La remise directe au consommateur relève de la déclaration. L'agrément n'est exigé que pour la livraison de denrées d'origine animale à d'autres établissements au-delà de limites réglementaires." },
    { id: "REGL-016", chapitre: "paquet-hygiene-pms",
      q: "Le règlement (CE) 852/2004 impose au restaurateur de mettre en place :", options: ["Un certificat HACCP délivré par un organisme privé", "Des procédures fondées sur les principes HACCP", "Des bonnes pratiques d'hygiène"], bonnes: [1, 2],
      explication: "Le règlement impose les bonnes pratiques d'hygiène et des procédures fondées sur les principes HACCP. Il n'existe pas de certificat HACCP obligatoire." },
    { id: "REGL-017", chapitre: "controles-sanctions",
      q: "Quel service contrôle principalement l'hygiène des restaurants ?", options: ["La DDPP (services vétérinaires)", "L'URSSAF", "La police municipale"], bonnes: [0],
      explication: "Les inspecteurs de la DDPP (ou DDETSPP), sous l'autorité de la DGAL, contrôlent l'hygiène et la sécurité sanitaire des aliments." },
    { id: "REGL-018", chapitre: "controles-sanctions",
      q: "Un contrôle sanitaire officiel est en général :", options: ["Inopiné", "Réalisé uniquement après une plainte", "Annoncé un mois à l'avance"], bonnes: [0],
      explication: "Les contrôles sont le plus souvent inopinés. Ils peuvent être programmés selon le risque ou déclenchés par une plainte ou une TIAC." },
    { id: "REGL-019", chapitre: "controles-sanctions",
      q: "Lors d'une inspection, l'inspecteur peut :", options: ["Effectuer des prélèvements pour analyse", "Consulter le plan de maîtrise sanitaire et les enregistrements", "Consigner ou saisir des denrées", "Fermer lui-même définitivement le fonds de commerce"], bonnes: [0, 1, 2],
      explication: "L'inspecteur prélève, examine les documents et peut consigner ou saisir des denrées. La fermeture administrative est prononcée par le préfet." },
    { id: "REGL-020", chapitre: "controles-sanctions",
      q: "La fermeture administrative d'un restaurant pour raison sanitaire est décidée par :", options: ["Le maire", "Le préfet", "Un client mécontent"], bonnes: [1],
      explication: "La fermeture administrative, totale ou partielle, est prononcée par arrêté préfectoral sur proposition des services de contrôle, en cas de danger pour la santé." },
    { id: "REGL-021", chapitre: "controles-sanctions",
      q: "Une mise en demeure est :", options: ["Une simple recommandation sans suite", "Une amende immédiate", "Une obligation de corriger les non-conformités dans un délai fixé"], bonnes: [2],
      explication: "La mise en demeure fixe un délai pour se mettre en conformité. À défaut, des sanctions plus lourdes (fermeture, poursuites) peuvent suivre." },
    { id: "REGL-022", chapitre: "controles-sanctions",
      q: "Quels sont les niveaux d'hygiène publiés sur Alim'Confiance ?", options: ["À améliorer", "Très satisfaisant", "Satisfaisant", "À corriger de manière urgente"], bonnes: [0, 1, 2, 3],
      explication: "Alim'Confiance publie quatre niveaux : très satisfaisant, satisfaisant, à améliorer, à corriger de manière urgente." },
    { id: "REGL-023", chapitre: "controles-sanctions",
      q: "Les résultats des contrôles restent en ligne sur Alim'Confiance pendant :", options: ["Un an", "Dix ans", "Un mois"], bonnes: [0],
      explication: "Les résultats sont publiés pour une durée d'un an. L'affichage dans l'établissement est volontaire." },
    { id: "REGL-024", chapitre: "controles-sanctions", situation: "Votre restaurant a obtenu le niveau « à corriger de manière urgente ».",
      q: "Cela signifie :", options: ["Que des non-conformités graves ont été relevées", "Qu'une fermeture administrative peut être prononcée", "Que le résultat restera secret"], bonnes: [0, 1],
      explication: "Ce niveau correspond à des non-conformités pouvant mettre en danger la santé du consommateur ; il peut s'accompagner d'une fermeture. Le résultat est public." },
    { id: "REGL-025", chapitre: "controles-sanctions",
      q: "En cas d'intoxication d'un client, la responsabilité pénale de l'exploitant :", options: ["Est personnelle et non assurable", "Peut être engagée", "Peut être couverte par son assurance"], bonnes: [0, 1],
      explication: "La responsabilité pénale (amendes, peines) est personnelle et ne peut pas être assurée, contrairement à la responsabilité civile (indemnisation des victimes)." },
    { id: "REGL-026", chapitre: "controles-sanctions",
      q: "L'information des clients sur les allergènes et l'origine des viandes est contrôlée par :", options: ["Les pompiers", "L'inspection du travail", "Les agents de la DGCCRF (répression des fraudes) au sein de la DDPP"], bonnes: [2],
      explication: "La DGCCRF, présente dans les DDPP, contrôle la loyauté de l'information du consommateur : allergènes, origine des viandes, « fait maison », étiquetage." }
  );
})();

/* ───────────── Thème BPH — Les bonnes pratiques d'hygiène ───────────── */
(function () {
  const P = window.PERMIS_COURS["haccp"] = window.PERMIS_COURS["haccp"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "hygiene-personnel",
      theme: "BPH",
      titre: "L'hygiène du personnel",
      duree: 12,
      objectifs: [
        "Connaître la tenue de travail réglementaire et son entretien",
        "Maîtriser la technique et les moments du lavage des mains",
        "Savoir utiliser les gants à bon escient",
        "Savoir quoi faire en cas de blessure ou de maladie",
        "Adopter les bons comportements en zone de préparation"
      ],
      sections: [
        {
          titre: "La tenue de travail",
          contenu: `<p>Le personnel est l'une des principales sources de contamination des aliments : cheveux, peau, mains, nez, gorge, vêtements de ville. La tenue protège l'aliment contre le manipulateur (et aussi le manipulateur contre les brûlures et les chutes).</p>
<table>
<thead><tr><th>Élément</th><th>Règle</th></tr></thead>
<tbody>
<tr><td>Veste et pantalon (ou blouse)</td><td>De couleur claire pour voir les salissures, propres, réservés au travail, changés au moins chaque jour et dès qu'ils sont sales</td></tr>
<tr><td>Coiffe (calot, charlotte, toque)</td><td>Englobe la totalité des cheveux ; cache-barbe si nécessaire</td></tr>
<tr><td>Chaussures</td><td>Réservées au travail, antidérapantes, fermées, faciles à nettoyer</td></tr>
<tr><td>Tablier</td><td>Propre, éventuellement à usage unique pour les tâches salissantes ; changé entre zones sales et zones propres</td></tr>
<tr><td>Masque bucco-nasal</td><td>Utile pour les préparations sensibles (dressage, pâtisserie) et en cas de rhume</td></tr>
</tbody>
</table>
<p>La tenue se met et s'enlève dans un <strong>vestiaire</strong> qui sépare les vêtements de ville des vêtements de travail. On ne sort pas de l'établissement (pause cigarette, courses) en tenue de cuisine, ou on se change et on se lave les mains au retour.</p>
<p>Les <strong>bijoux</strong> (bagues, bracelets, montres, boucles d'oreilles, piercings visibles) sont à proscrire : ils retiennent les germes, empêchent un bon lavage des mains et peuvent tomber dans les préparations (danger physique). Les ongles sont <strong>courts, propres, sans vernis</strong> ni faux ongles.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> tenue claire, propre, complète, réservée au travail ; coiffe qui enveloppe tous les cheveux ; ni bijoux ni montre ; ongles courts sans vernis.</div>`
        },
        {
          titre: "Le lavage des mains : technique",
          contenu: `<p>Les mains sont le premier vecteur de contamination en cuisine. Un lavage efficace demande un équipement adapté et une technique précise.</p>
<p><strong>L'équipement du lave-mains</strong> : lave-mains à <strong>commande non manuelle</strong> (genou, pied ou détection), eau tiède, savon liquide (de préférence bactéricide) en distributeur, essuie-mains à <strong>usage unique</strong> (papier), poubelle à commande non manuelle. Le lave-mains est réservé à cet usage et placé près des postes de travail, à l'entrée de la cuisine et à la sortie des toilettes.</p>
<ol>
<li>Se mouiller les mains et les avant-bras.</li>
<li>Appliquer le savon.</li>
<li>Frotter au moins 30 secondes : paumes, dos des mains, entre les doigts, pouces, bout des doigts et ongles (brosse à ongles individuelle si besoin), poignets.</li>
<li>Rincer abondamment.</li>
<li>Sécher avec un essuie-mains à usage unique.</li>
<li>Jeter l'essuie-mains dans la poubelle sans la toucher avec les mains.</li>
</ol>
<p>Un gel hydroalcoolique peut compléter le lavage sur des mains propres, mais il <strong>ne le remplace pas</strong> en cuisine : il n'élimine pas les salissures et ne détruit pas certains virus comme les norovirus.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> le torchon ou l'essuie-mains en tissu partagé est interdit pour se sécher les mains : il recontamine aussitôt les mains lavées. On utilise du papier à usage unique.</div>`
        },
        {
          titre: "Le lavage des mains : les moments",
          contenu: `<p>Se laver les mains souvent ne suffit pas : il faut le faire <strong>au bon moment</strong>, c'est-à-dire à chaque fois qu'il y a un risque d'avoir les mains contaminées avant de toucher un aliment.</p>
<table>
<thead><tr><th>Quand se laver les mains ?</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr><td>À la prise de poste et au retour de pause</td><td>Les mains ont touché l'extérieur, les vêtements, les transports</td></tr>
<tr><td>En sortant des toilettes</td><td>Risque de contamination fécale (E. coli, norovirus, hépatite A)</td></tr>
<tr><td>Après s'être mouché, avoir toussé ou éternué dans ses mains</td><td>Staphylocoque doré, virus</td></tr>
<tr><td>Après avoir manipulé des produits crus (viandes, volailles, œufs coquille, légumes terreux)</td><td>Contamination initiale de ces produits</td></tr>
<tr><td>Après avoir touché des emballages, des déchets, une poubelle</td><td>Surfaces sales</td></tr>
<tr><td>Après avoir manipulé de l'argent, le téléphone, fumé, mangé</td><td>Objets et gestes non alimentaires</td></tr>
<tr><td>Entre deux tâches différentes, et à chaque passage d'une zone sale à une zone propre</td><td>Éviter la contamination croisée</td></tr>
<tr><td>Avant de manipuler des produits prêts à consommer et avant de dresser</td><td>Aucune étape ultérieure n'éliminera les germes</td></tr>
</tbody>
</table>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un cuisinier casse des œufs pour une omelette, puis doit dresser une salade de fruits. Il se lave les mains entre les deux : la coquille des œufs peut porter des salmonelles.</div>`
        },
        {
          titre: "Les gants, les blessures et les maladies",
          contenu: `<p><strong>Les gants à usage unique</strong> ne sont pas obligatoires en toutes circonstances. Ils sont utiles pour manipuler des produits prêts à consommer, pour protéger une plaie ou pour une tâche salissante. Mais ils donnent un faux sentiment de sécurité : un gant sale contamine autant qu'une main sale. On se lave les mains avant de les enfiler, on les change à chaque changement de tâche, dès qu'ils sont abîmés ou souillés, et on les jette après usage.</p>
<p><strong>Les blessures</strong> : une coupure, une brûlure ou une plaie aux mains peut s'infecter et contenir des staphylocoques dorés. Elle doit être désinfectée, couverte d'un <strong>pansement étanche</strong>, de préférence de couleur vive (bleu) pour être repéré s'il tombe, et protégée par un <strong>gant</strong> ou un doigtier. Une plaie infectée (panaris, furoncle) impose d'écarter la personne de la manipulation des aliments.</p>
<p><strong>Les maladies</strong> : le règlement (CE) 852/2004 impose à toute personne atteinte ou porteuse d'une maladie transmissible par les aliments (diarrhée, vomissements, fièvre, infection cutanée, plaie infectée, angine) de <strong>signaler</strong> immédiatement son état à son responsable. Celui-ci doit l'<strong>écarter</strong> de la manipulation des denrées, temporairement, tant qu'existe un risque de contamination, si nécessaire après avis médical.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> un salarié qui a eu des vomissements ou une diarrhée la veille ne doit pas reprendre la préparation des aliments sans en avoir parlé à son responsable. Les norovirus continuent d'être excrétés après la disparition des symptômes : le lavage des mains doit alors être particulièrement rigoureux.</div>`
        },
        {
          titre: "Les comportements en zone de préparation",
          contenu: `<p>Certains gestes sont interdits ou à éviter dans les locaux où l'on prépare les aliments :</p>
<ul>
<li><strong>Fumer</strong> est interdit (et le vapotage aussi) dans les locaux de travail ; on se lave les mains après avoir fumé.</li>
<li>Ne pas manger, ne pas mâcher de chewing-gum en manipulant les aliments.</li>
<li>Goûter les préparations avec une cuillère propre, utilisée une seule fois, jamais avec les doigts ni avec la cuillère de service.</li>
<li>Ne pas tousser ni éternuer au-dessus des aliments ; se détourner, utiliser un mouchoir à usage unique, se laver les mains.</li>
<li>Ne pas s'essuyer les mains sur sa tenue ni sur un torchon porté à la ceinture.</li>
<li>Laisser le téléphone personnel au vestiaire ou le nettoyer, et se laver les mains après l'avoir touché.</li>
<li>Pas de personnes étrangères au service en cuisine sans tenue adaptée (livreurs, visiteurs) ; pas d'animaux.</li>
</ul>
<p>Le personnel doit être <strong>formé</strong> aux règles d'hygiène correspondant à son poste, et l'exploitant doit pouvoir en apporter la preuve (attestations, fiches de formation interne).</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> lavage des mains au bon moment, tenue complète, blessures protégées, maladies signalées, ni tabac ni nourriture en zone de préparation.</div>`
        }
      ],
      points_cles: [
        "Tenue claire, propre, réservée au travail, changée au moins chaque jour ; coiffe couvrant tous les cheveux",
        "Ni bijoux ni montre ; ongles courts, sans vernis",
        "Lave-mains à commande non manuelle, savon liquide, essuie-mains à usage unique",
        "Frotter au moins 30 secondes ; le gel hydroalcoolique ne remplace pas le lavage",
        "Se laver les mains à la prise de poste, après les toilettes, après le cru, les déchets, entre deux tâches",
        "Les gants se changent entre deux tâches, comme on se lave les mains",
        "Plaie : pansement étanche et gant ; plaie infectée : écartement",
        "Diarrhée, vomissements, fièvre : signaler au responsable, qui écarte de la manipulation"
      ]
    },
    {
      id: "locaux-marche-en-avant",
      theme: "BPH",
      titre: "Les locaux, la marche en avant et l'eau",
      duree: 11,
      objectifs: [
        "Connaître les exigences de conception et d'entretien des locaux",
        "Définir la marche en avant dans l'espace et dans le temps",
        "Distinguer secteurs sales et secteurs propres",
        "Savoir pourquoi on déconditionne avant le stockage",
        "Connaître les exigences relatives à l'eau et à la glace"
      ],
      sections: [
        {
          titre: "La conception des locaux et des équipements",
          contenu: `<p>Le règlement (CE) 852/2004 impose des locaux propres, en bon état d'entretien, conçus pour permettre un nettoyage et une désinfection efficaces et pour éviter les contaminations.</p>
<ul>
<li><strong>Sols</strong> : imperméables, lavables, antidérapants, avec une pente vers des siphons d'évacuation.</li>
<li><strong>Murs</strong> : lisses, clairs, lavables, imputrescibles jusqu'à une hauteur suffisante ; angles arrondis (gorges) entre murs et sols pour faciliter le nettoyage.</li>
<li><strong>Plafonds</strong> : conçus pour éviter l'accumulation de saletés, la condensation et la chute de particules.</li>
<li><strong>Surfaces de travail et ustensiles</strong> : en matériaux lisses, lavables, résistants à la corrosion et non toxiques (acier inoxydable, polyéthylène). Le bois est à éviter pour les plans de travail.</li>
<li><strong>Fenêtres</strong> donnant sur l'extérieur : munies de moustiquaires si elles s'ouvrent.</li>
<li><strong>Ventilation</strong> suffisante (hotte d'extraction) et <strong>éclairage</strong> suffisant, avec lampes protégées contre la casse.</li>
<li><strong>Lave-mains</strong> en nombre suffisant, à commande non manuelle ; <strong>toilettes</strong> qui n'ouvrent pas directement sur les locaux de préparation.</li>
</ul>
<p>L'<strong>entretien</strong> fait partie des bonnes pratiques : le PMS prévoit la maintenance des locaux et des équipements (réparation des revêtements abîmés, remplacement des joints de portes de chambres froides, vérification des thermomètres et des sondes, entretien des hottes et des filtres). Les <strong>réserves sèches</strong> sont propres, sèches, ventilées, à l'abri de la lumière et des nuisibles ; les produits y sont rangés sur des étagères, jamais à même le sol, et les sacs entamés sont fermés ou transvasés dans des boîtes lavables étiquetées.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> tout ce qui est en contact avec l'aliment doit être lisse, lavable, non toxique et en bon état. Un équipement abîmé (planche fendue, joint décollé, peinture écaillée) ne se nettoie plus correctement.</div>`
        },
        {
          titre: "La marche en avant",
          contenu: `<p>Le principe de la <strong>marche en avant</strong> consiste à organiser le travail pour que les produits progressent toujours du <strong>secteur sale vers le secteur propre</strong>, sans retour en arrière ni croisement entre circuits propres et circuits sales.</p>
<p>Le circuit type en restauration :</p>
<ol>
<li>Réception des marchandises ;</li>
<li>Déconditionnement (décartonnage) ;</li>
<li>Stockage (réserves sèches, chambres froides, congélateurs) ;</li>
<li>Préparations préliminaires (légumerie, épluchage, lavage ; découpe des viandes) ;</li>
<li>Préparations froides et cuissons ;</li>
<li>Dressage et distribution ;</li>
<li>Service en salle.</li>
</ol>
<p>Les circuits « sales » (retour de la vaisselle sale vers la plonge, évacuation des déchets, entrée des denrées emballées) ne doivent pas croiser les circuits « propres » (plats prêts à servir, vaisselle propre).</p>
<p>La marche en avant peut s'appliquer :</p>
<ul>
<li><strong>Dans l'espace</strong> : des locaux ou des zones séparés pour chaque activité, organisés en enfilade.</li>
<li><strong>Dans le temps</strong> : quand la cuisine est petite, un même poste sert à plusieurs activités, mais successivement, en commençant par les opérations propres, avec un <strong>nettoyage et une désinfection</strong> entre chaque activité.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> dans une petite cuisine, on épluche les légumes terreux sur le plan de travail, on nettoie et désinfecte ce plan, puis on y dresse les entrées. C'est une marche en avant dans le temps.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la marche en avant dans le temps n'est pas « faire deux choses en même temps sur deux coins du plan de travail ». C'est une succession d'activités séparées par un nettoyage et une désinfection.</div>`
        },
        {
          titre: "Secteurs sales, secteurs propres et déconditionnement",
          contenu: `<table>
<thead><tr><th>Secteur sale (ou souillé)</th><th>Secteur propre</th></tr></thead>
<tbody>
<tr><td>Quai de réception, zone de déconditionnement</td><td>Zones de préparation froide (entrées, desserts)</td></tr>
<tr><td>Légumerie (épluchage des légumes terreux)</td><td>Zone de cuisson</td></tr>
<tr><td>Plonge (vaisselle sale), local à déchets</td><td>Zone de dressage, passe</td></tr>
<tr><td>Vestiaires, toilettes</td><td>Stockage des produits finis</td></tr>
</tbody>
</table>
<p>Le <strong>déconditionnement</strong> consiste à retirer les emballages extérieurs (cartons, cagettes en bois, sacs de transport) dès la réception, dans une zone dédiée, avant de ranger les produits. Les cartons ont été posés au sol, dans des camions, des entrepôts : ils apportent des germes, de la poussière et parfois des insectes. Ils <strong>n'entrent pas</strong> en chambre froide ni en zone de préparation.</p>
<p>Quand on déconditionne un produit, on conserve l'information utile : on recopie ou on découpe l'étiquette (dénomination, numéro de lot, DLC, estampille sanitaire) et on la garde pour la traçabilité.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> les cagettes en bois et les cartons ne doivent pas non plus servir de support de stockage ou de travail. On transfère les produits dans des bacs propres et lavables, filmés ou couverts.</div>`
        },
        {
          titre: "L'eau et la glace",
          contenu: `<p>L'eau utilisée pour préparer les aliments, nettoyer les surfaces en contact avec eux et se laver les mains doit être <strong>potable</strong>. L'eau du réseau public de distribution l'est. Un établissement alimenté par une ressource privée (puits, forage) doit obtenir une autorisation et faire réaliser des analyses régulières.</p>
<ul>
<li>La <strong>glace</strong> destinée à entrer en contact avec les aliments ou les boissons doit être fabriquée avec de l'eau potable, manipulée avec une pelle propre (jamais avec les mains ni un verre), et la machine à glaçons nettoyée régulièrement.</li>
<li>Les canalisations d'eau non potable (eau de lutte contre l'incendie, par exemple) sont séparées et repérées.</li>
<li>Les points d'eau peu utilisés ou les ballons d'eau chaude mal entretenus peuvent favoriser le développement de germes : on les entretient et on les fait couler régulièrement.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> eau potable pour tout ce qui touche l'aliment, y compris la glace et le lavage des mains et des surfaces.</div>`
        }
      ],
      points_cles: [
        "Locaux et surfaces : lisses, lavables, imperméables, non toxiques, en bon état",
        "Angles arrondis, siphons, moustiquaires, lave-mains non manuels, toilettes sans ouverture directe sur les cuisines",
        "Marche en avant : du sale vers le propre, sans retour en arrière ni croisement",
        "Marche en avant dans l'espace (zones séparées) ou dans le temps (activités successives séparées par nettoyage et désinfection)",
        "Déconditionnement à la réception : les cartons n'entrent ni en chambre froide ni en zone de préparation",
        "Conserver les étiquettes ou les informations de traçabilité lors du déconditionnement",
        "Eau potable obligatoire, glace comprise ; glaçons servis avec une pelle"
      ]
    },
    {
      id: "nettoyage-nuisibles-dechets",
      theme: "BPH",
      titre: "Nettoyage et désinfection, nuisibles et déchets",
      duree: 13,
      objectifs: [
        "Distinguer nettoyage et désinfection",
        "Connaître les étapes d'un protocole de nettoyage-désinfection",
        "Expliquer les quatre facteurs du TACT",
        "Construire et utiliser un plan de nettoyage",
        "Connaître les règles de lutte contre les nuisibles et de gestion des déchets"
      ],
      sections: [
        {
          titre: "Nettoyer et désinfecter : deux actions différentes",
          contenu: `<table>
<thead><tr><th></th><th>Nettoyage</th><th>Désinfection</th></tr></thead>
<tbody>
<tr><td>But</td><td>Éliminer les <strong>salissures visibles</strong> (graisses, restes alimentaires, poussières)</td><td>Éliminer ou réduire les <strong>micro-organismes</strong> à un niveau acceptable</td></tr>
<tr><td>Produit</td><td>Détergent</td><td>Désinfectant</td></tr>
<tr><td>Résultat</td><td>Surface propre à l'œil</td><td>Surface propre sur le plan microbiologique</td></tr>
</tbody>
</table>
<p>La désinfection n'est efficace que sur une surface <strong>préalablement nettoyée</strong> : les salissures protègent les germes et neutralisent une partie du désinfectant. On nettoie donc toujours <strong>avant</strong> de désinfecter. Il existe des produits <strong>détergents-désinfectants</strong> qui font les deux en une opération sur des surfaces peu sales.</p>
<p>Les désinfectants doivent être autorisés pour un usage sur les surfaces en contact avec les denrées et conformes aux normes d'efficacité (par exemple la norme <strong>NF EN 1276</strong> pour l'action bactéricide). On respecte la <strong>dilution</strong> et le <strong>temps de contact</strong> indiqués sur la fiche technique.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une surface qui « brille » n'est pas forcément désinfectée. Et désinfecter une surface grasse sans l'avoir nettoyée est inefficace.</div>`
        },
        {
          titre: "Le protocole de nettoyage-désinfection et le TACT",
          contenu: `<p>Un protocole complet comprend en général les étapes suivantes :</p>
<ol>
<li><strong>Préparation</strong> : protéger ou retirer les denrées, débrancher les appareils.</li>
<li><strong>Prélavage</strong> : raclage, enlèvement des gros déchets, rinçage à l'eau.</li>
<li><strong>Nettoyage</strong> : application du détergent avec action mécanique (brossage).</li>
<li><strong>Rinçage</strong> à l'eau potable.</li>
<li><strong>Désinfection</strong> : application du désinfectant, respect du temps de contact.</li>
<li><strong>Rinçage final</strong> si la fiche du produit l'exige (cas général sur les surfaces en contact avec les aliments).</li>
<li><strong>Séchage</strong> : à l'air libre ou avec un papier à usage unique, jamais avec un torchon.</li>
</ol>
<p>L'efficacité dépend de quatre facteurs complémentaires, résumés par le sigle <strong>TACT</strong> (cercle de Sinner) :</p>
<table>
<thead><tr><th>Lettre</th><th>Facteur</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>T</td><td>Température de l'eau</td><td>Eau chaude pour dissoudre les graisses</td></tr>
<tr><td>A</td><td>Action mécanique</td><td>Brossage, frottement, pression</td></tr>
<tr><td>C</td><td>Chimie (produit et concentration)</td><td>Bon produit, bonne dilution</td></tr>
<tr><td>T</td><td>Temps de contact</td><td>Laisser agir le temps indiqué</td></tr>
</tbody>
</table>
<p>Si l'on diminue un facteur, il faut en augmenter un autre pour garder la même efficacité.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> ne jamais mélanger les produits (eau de Javel et produit acide détartrant dégagent un gaz toxique). Surdoser un produit ne le rend pas plus efficace : cela laisse des résidus chimiques et abîme le matériel.</div>`
        },
        {
          titre: "Le plan de nettoyage et le matériel",
          contenu: `<p>Le <strong>plan de nettoyage et de désinfection</strong> fait partie du PMS. Il précise pour chaque local, surface ou équipement :</p>
<ul>
<li><strong>Quoi</strong> : la surface ou l'équipement concerné ;</li>
<li><strong>Qui</strong> : la personne responsable ;</li>
<li><strong>Quand</strong> : la fréquence (après chaque utilisation, chaque jour, chaque semaine…) ;</li>
<li><strong>Comment</strong> : le mode opératoire, le produit, sa dilution, le temps de contact, le matériel ;</li>
<li>la <strong>vérification</strong> : visa de la personne qui a réalisé l'opération, contrôle visuel, éventuellement prélèvements de surface.</li>
</ul>
<p>Le <strong>matériel de nettoyage</strong> doit lui-même être propre : lavettes à usage unique ou lavées et désinfectées chaque jour, pas d'éponges qui gardent l'humidité et les germes, code couleur pour ne pas utiliser le même matériel dans les toilettes et en cuisine, raclettes plutôt que serpillières. Il est rangé dans un local ou un placard réservé, comme les produits d'entretien, à l'écart des denrées.</p>
<p>La <strong>vaisselle</strong> est lavée de préférence en lave-vaisselle (lavage puis rinçage à haute température) et stockée à l'abri des contaminations.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> trancheuse : démontage, nettoyage et désinfection après chaque utilisation, par l'utilisateur, avec le détergent-désinfectant dilué selon la fiche, séchage à l'air, visa sur la fiche du jour.</div>`
        },
        {
          titre: "La lutte contre les nuisibles",
          contenu: `<p>Les <strong>nuisibles</strong> (rongeurs, insectes rampants comme les blattes, insectes volants comme les mouches, oiseaux) transportent des germes, souillent les aliments par leurs déjections et dégradent les emballages.</p>
<p><strong>La prévention</strong> passe par :</p>
<ul>
<li>des locaux étanches : portes fermées ou munies de bas de porte, moustiquaires, grilles sur les siphons et les bouches d'aération, trous rebouchés ;</li>
<li>un rangement correct : produits stockés sur des étagères, jamais au sol, contenants fermés ;</li>
<li>un nettoyage soigné qui ne laisse pas de nourriture accessible, des déchets évacués régulièrement.</li>
</ul>
<p><strong>La lutte</strong> est organisée et documentée dans le PMS : appâts dans des postes sécurisés, dont l'emplacement est noté sur un <strong>plan</strong> ; désinsectiseurs électriques (lampes UV) placés à l'écart des zones de préparation et des aliments ; intervention souvent confiée à une <strong>entreprise spécialisée</strong> sous contrat, avec rapports de passage conservés.</p>
<p>Les <strong>animaux domestiques</strong> sont interdits dans les locaux où sont préparés ou entreposés les aliments.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> prévenir l'entrée, ne rien laisser à manger, surveiller (traces, déjections, emballages rongés) ; plan des appâts et rapports d'intervention dans le PMS.</div>`
        },
        {
          titre: "La gestion des déchets",
          contenu: `<p>Les déchets attirent les nuisibles et sont fortement contaminés. Le règlement (CE) 852/2004 impose de les retirer aussi vite que possible des locaux où se trouvent les denrées.</p>
<ul>
<li><strong>Poubelles</strong> en cuisine : à couvercle et à <strong>commande non manuelle</strong> (pédale), munies d'un sac, en matériau lavable.</li>
<li>Vidage <strong>aussi souvent que nécessaire</strong> et au moins en fin de service ; les sacs fermés sont évacués vers un local ou une aire à déchets, sans croiser les circuits propres.</li>
<li><strong>Local à déchets</strong> fermé, facile à nettoyer, à l'abri des nuisibles, éventuellement réfrigéré ; conteneurs nettoyés et désinfectés régulièrement.</li>
<li><strong>Tri</strong> : les biodéchets (restes alimentaires, épluchures) doivent être triés à la source par les professionnels ; les huiles alimentaires usagées sont collectées par un prestataire et ne doivent jamais être versées dans les canalisations.</li>
</ul>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> une poubelle à ouverture manuelle oblige à se relaver les mains après chaque usage ; c'est pourquoi la commande non manuelle est exigée en zone de préparation.</div>`
        }
      ],
      points_cles: [
        "Nettoyage : éliminer les salissures (détergent) ; désinfection : réduire les germes (désinfectant)",
        "Toujours nettoyer avant de désinfecter",
        "Étapes : prélavage, nettoyage, rinçage, désinfection, rinçage, séchage sans torchon",
        "TACT : Température, Action mécanique, Chimie, Temps",
        "Respecter dilution et temps de contact ; ne jamais mélanger les produits",
        "Plan de nettoyage : quoi, qui, quand, comment, avec visa",
        "Nuisibles : prévention, plan des appâts, prestataire, animaux interdits en cuisine",
        "Poubelles à couvercle et commande non manuelle, vidées souvent ; huiles collectées"
      ]
    }
  );

  P.questions.push(
    { id: "BPH-001", chapitre: "hygiene-personnel",
      q: "La tenue de travail en cuisine doit être :", options: ["Changée au moins chaque jour", "Portée aussi pour venir au travail", "De couleur claire", "Réservée au travail"], bonnes: [0, 2, 3],
      explication: "La tenue est claire pour voir les salissures, réservée au travail et changée au moins quotidiennement. Elle ne doit pas servir de vêtement de ville." },
    { id: "BPH-002", chapitre: "hygiene-personnel", situation: "Une serveuse aide en cuisine. Ses cheveux longs dépassent de sa charlotte.",
      q: "Est-ce acceptable ?", options: ["Oui, si elle a les cheveux propres", "Non, la coiffe doit envelopper tous les cheveux"], bonnes: [1],
      explication: "La coiffe doit contenir la totalité des cheveux, qui portent des germes et peuvent tomber dans les préparations (danger physique et biologique)." },
    { id: "BPH-003", chapitre: "hygiene-personnel", situation: "Un cuisinier porte son alliance, une montre et un bracelet en travaillant.",
      q: "Que doit-il faire ?", options: ["Retirer tous ses bijoux et sa montre", "Retirer montre et bracelet uniquement", "Les garder sous des gants"], bonnes: [0],
      explication: "Les bijoux et la montre retiennent les germes, gênent le lavage des mains et peuvent tomber dans les aliments. Ils sont à proscrire en préparation." },
    { id: "BPH-004", chapitre: "hygiene-personnel",
      q: "Le lave-mains d'une cuisine doit être équipé :", options: ["D'une commande non manuelle", "De savon liquide en distributeur", "D'essuie-mains à usage unique", "D'un torchon changé chaque jour"], bonnes: [0, 1, 2],
      explication: "Commande non manuelle, savon liquide et essuie-mains à usage unique évitent la recontamination des mains. Le torchon partagé est proscrit." },
    { id: "BPH-005", chapitre: "hygiene-personnel",
      q: "Combien de temps faut-il au minimum frotter ses mains savonnées ?", options: ["Environ 5 secondes", "Au moins 5 minutes", "Au moins 30 secondes"], bonnes: [2],
      explication: "Un frottement d'au moins 30 secondes, sur toutes les parties de la main (paumes, dos, entre les doigts, ongles, poignets), est nécessaire." },
    { id: "BPH-006", chapitre: "hygiene-personnel",
      q: "Quand faut-il se laver les mains ?", options: ["Après avoir vidé une poubelle", "Avant de dresser une assiette", "En sortant des toilettes", "Après avoir manipulé des œufs coquille"], bonnes: [0, 1, 2, 3],
      explication: "Toutes ces situations imposent un lavage : risque fécal, coquilles porteuses de salmonelles, déchets contaminés, et produit prêt à consommer qui ne subira plus de traitement." },
    { id: "BPH-007", chapitre: "hygiene-personnel", situation: "Après avoir répondu au téléphone du restaurant, un cuisinier reprend la découpe d'un poisson cru destiné à un tartare.",
      q: "Il doit d'abord :", options: ["Rien, le poisson sera assaisonné", "Simplement s'essuyer les mains sur son tablier", "Se laver les mains"], bonnes: [2],
      explication: "Le téléphone est une surface contaminée. Le tartare ne sera pas cuit : un lavage des mains est indispensable avant de reprendre la préparation." },
    { id: "BPH-008", chapitre: "hygiene-personnel",
      q: "En cuisine, le gel hydroalcoolique peut-il remplacer le lavage des mains à l'eau et au savon ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "Le gel n'élimine pas les salissures et n'est pas efficace contre tous les germes, notamment les norovirus. Il peut compléter un lavage, pas le remplacer." },
    { id: "BPH-009", chapitre: "hygiene-personnel", situation: "Un commis se coupe légèrement au doigt en épluchant des légumes.",
      q: "Que doit-il faire avant de reprendre le travail ?", options: ["Désinfecter la plaie", "Mettre un pansement étanche", "Porter un gant ou un doigtier", "Continuer sans rien faire si cela ne saigne plus"], bonnes: [0, 1, 2],
      explication: "Une plaie peut abriter des staphylocoques dorés. Elle est désinfectée, couverte d'un pansement étanche, de préférence coloré, et protégée par un gant ou un doigtier." },
    { id: "BPH-010", chapitre: "hygiene-personnel",
      q: "Pourquoi utilise-t-on de préférence des pansements de couleur vive (bleue) en cuisine ?", options: ["Parce qu'ils sont plus désinfectants", "Pour les repérer facilement s'ils tombent dans un aliment", "Pour respecter la couleur de la tenue"], bonnes: [1],
      explication: "Un pansement bleu, couleur absente des aliments, se repère vite s'il tombe dans une préparation (danger physique)." },
    { id: "BPH-011", chapitre: "hygiene-personnel", situation: "Le matin, une pâtissière prévient qu'elle a eu des vomissements et de la diarrhée pendant la nuit.",
      q: "Que doit faire le responsable ?", options: ["L'écarter de la manipulation des aliments", "Lui demander de redoubler de vigilance sur le lavage des mains à son retour", "La laisser travailler avec des gants"], bonnes: [0, 1],
      explication: "Une personne présentant des troubles digestifs doit être écartée de la manipulation des denrées. À son retour, un lavage des mains rigoureux s'impose, car certains virus sont encore excrétés après les symptômes." },
    { id: "BPH-012", chapitre: "hygiene-personnel",
      q: "Un salarié atteint d'une maladie transmissible par les aliments doit :", options: ["Le signaler à son responsable", "Le garder pour lui s'il se sent capable de travailler", "Porter seulement un masque"], bonnes: [0],
      explication: "Le règlement (CE) 852/2004 impose de signaler immédiatement à l'exploitant toute maladie ou tout symptôme pouvant contaminer les aliments." },
    { id: "BPH-013", chapitre: "hygiene-personnel",
      q: "Le port de gants à usage unique :", options: ["Est utile pour protéger une plaie", "Impose de changer de gants entre deux tâches", "Dispense de se laver les mains"], bonnes: [0, 1],
      explication: "Les gants se mettent sur des mains propres, se changent à chaque changement de tâche et protègent une plaie. Ils ne dispensent jamais du lavage des mains." },
    { id: "BPH-014", chapitre: "hygiene-personnel", situation: "Un cuisinier goûte sa sauce en trempant son doigt dedans.",
      q: "Comment devrait-il goûter ?", options: ["Avec une cuillère propre utilisée une seule fois", "Avec la louche de service", "Avec son doigt, après s'être lavé les mains"], bonnes: [0],
      explication: "On goûte avec une cuillère propre, utilisée une seule fois puis mise à laver. Les doigts et la louche de service contaminent la préparation." },
    { id: "BPH-015", chapitre: "hygiene-personnel",
      q: "Dans les locaux de préparation des aliments, il est interdit :", options: ["De vapoter", "De fumer", "Porter une coiffe"], bonnes: [0, 1],
      explication: "Il est interdit de fumer et de vapoter dans les locaux de travail. La coiffe, au contraire, est obligatoire." },
    { id: "BPH-016", chapitre: "hygiene-personnel",
      q: "Pour se sécher les mains en cuisine, on utilise :", options: ["Un essuie-mains en papier à usage unique", "Le torchon de cuisine", "Son tablier"], bonnes: [0],
      explication: "Seul l'essuie-mains à usage unique évite la recontamination. Torchon et tablier portent des germes." },
    { id: "BPH-017", chapitre: "locaux-marche-en-avant",
      q: "Le principe de la marche en avant consiste à :", options: ["Éviter tout croisement entre circuits propres et circuits sales", "Faire progresser les produits du secteur sale vers le secteur propre", "Servir les plats le plus vite possible"], bonnes: [0, 1],
      explication: "La marche en avant organise les circuits du sale vers le propre, sans retour en arrière ni croisement, pour éviter les contaminations croisées." },
    { id: "BPH-018", chapitre: "locaux-marche-en-avant", situation: "Votre cuisine est petite : un seul plan de travail sert à éplucher les légumes et à dresser les entrées.",
      q: "Pour respecter la marche en avant dans le temps, vous devez :", options: ["Faire les deux activités en même temps aux deux bouts du plan", "Faire les deux activités successivement, avec nettoyage et désinfection entre les deux", "Renoncer à éplucher des légumes"], bonnes: [1],
      explication: "La marche en avant dans le temps consiste à séparer dans le temps les activités sales et propres, avec un nettoyage et une désinfection entre chacune." },
    { id: "BPH-019", chapitre: "locaux-marche-en-avant",
      q: "Parmi ces zones, lesquelles font partie du secteur sale ?", options: ["Le local à déchets", "La zone de dressage", "La plonge", "La légumerie"], bonnes: [0, 2, 3],
      explication: "Plonge, légumerie (légumes terreux) et local à déchets sont des secteurs souillés. La zone de dressage est un secteur propre." },
    { id: "BPH-020", chapitre: "locaux-marche-en-avant", situation: "Le livreur dépose des cartons de légumes et de yaourts. Un commis veut les ranger directement en chambre froide dans leurs cartons.",
      q: "Que doit-il faire ?", options: ["Ranger les cartons au sol de la chambre froide", "Retirer les cartons avant le rangement (déconditionnement)", "Conserver les informations d'étiquetage utiles à la traçabilité"], bonnes: [1, 2],
      explication: "Les emballages extérieurs, souillés, n'entrent pas en chambre froide. On déconditionne en zone dédiée, en gardant les informations de traçabilité (lot, DLC)." },
    { id: "BPH-021", chapitre: "locaux-marche-en-avant",
      q: "Les surfaces en contact avec les aliments doivent être :", options: ["En bois brut de préférence", "Non toxiques et résistantes à la corrosion", "Lisses et lavables"], bonnes: [1, 2],
      explication: "Les surfaces doivent être lisses, lavables, résistantes et non toxiques (inox, polyéthylène). Le bois, poreux, est à éviter pour les plans de travail." },
    { id: "BPH-022", chapitre: "locaux-marche-en-avant",
      q: "Pourquoi les angles entre murs et sols sont-ils arrondis dans une cuisine ?", options: ["Pour réduire le bruit", "Pour des raisons esthétiques uniquement", "Pour faciliter le nettoyage"], bonnes: [2],
      explication: "Les gorges arrondies évitent l'accumulation de saletés dans les angles et rendent le nettoyage plus facile et plus efficace." },
    { id: "BPH-023", chapitre: "locaux-marche-en-avant", situation: "La vaisselle sale revenant de la salle traverse la zone de dressage pour rejoindre la plonge.",
      q: "Ce circuit respecte-t-il la marche en avant ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "Le circuit sale (vaisselle sale) croise le circuit propre (plats dressés). C'est une rupture de la marche en avant à corriger." },
    { id: "BPH-024", chapitre: "locaux-marche-en-avant",
      q: "Les toilettes du personnel peuvent-elles ouvrir directement sur la cuisine ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "Les toilettes ne doivent pas donner directement sur les locaux de manipulation des denrées : un sas est nécessaire, avec un lave-mains." },
    { id: "BPH-025", chapitre: "locaux-marche-en-avant",
      q: "L'eau utilisée pour fabriquer les glaçons servis dans les boissons doit être :", options: ["Simplement filtrée", "Potable", "Peu importe, car elle est congelée"], bonnes: [1],
      explication: "La glace qui entre en contact avec les aliments ou les boissons doit être fabriquée avec de l'eau potable. La congélation ne détruit pas les germes." },
    { id: "BPH-026", chapitre: "locaux-marche-en-avant", situation: "Au bar, un serveur prend les glaçons dans la machine avec le verre du client.",
      q: "Cette pratique est-elle correcte ?", options: ["Oui", "Non, il faut utiliser une pelle propre"], bonnes: [1],
      explication: "Le verre peut se briser dans la glace (danger physique) et contaminer le bac. On utilise une pelle propre, rangée hors du bac." },
    { id: "BPH-027", chapitre: "locaux-marche-en-avant",
      q: "Les fenêtres d'une cuisine qui s'ouvrent sur l'extérieur doivent être équipées :", options: ["De rideaux en tissu", "De moustiquaires", "De rien de particulier"], bonnes: [1],
      explication: "Les moustiquaires empêchent l'entrée des insectes volants. Elles doivent être démontables pour être nettoyées." },
    { id: "BPH-028", chapitre: "locaux-marche-en-avant",
      q: "Un restaurant alimenté par le réseau public d'eau potable peut utiliser cette eau pour :", options: ["Nettoyer les surfaces", "Se laver les mains", "Préparer les aliments"], bonnes: [0, 1, 2],
      explication: "L'eau du réseau public est potable : elle convient à tous les usages en contact avec les aliments, les surfaces et les mains." },
    { id: "BPH-029", chapitre: "nettoyage-nuisibles-dechets",
      q: "Le nettoyage a pour but :", options: ["De détruire tous les micro-organismes", "De stériliser les surfaces", "D'éliminer les salissures visibles"], bonnes: [2],
      explication: "Le nettoyage, avec un détergent, élimine les salissures. La désinfection, avec un désinfectant, réduit les micro-organismes." },
    { id: "BPH-030", chapitre: "nettoyage-nuisibles-dechets",
      q: "Dans quel ordre réalise-t-on les opérations ?", options: ["Désinfection, puis nettoyage", "Nettoyage, puis désinfection", "L'ordre n'a pas d'importance"], bonnes: [1],
      explication: "La désinfection n'est efficace que sur une surface propre : les salissures protègent les germes et neutralisent le désinfectant." },
    { id: "BPH-031", chapitre: "nettoyage-nuisibles-dechets",
      q: "Que signifie le sigle TACT ?", options: ["Température, Action mécanique, Chimie, Temps", "Tri, Analyse, Contrôle, Traçabilité", "Température, Aération, Couleur, Texture"], bonnes: [0],
      explication: "Le TACT (cercle de Sinner) résume les quatre facteurs de l'efficacité du nettoyage : température, action mécanique, chimie (produit et concentration), temps de contact." },
    { id: "BPH-032", chapitre: "nettoyage-nuisibles-dechets", situation: "Un plongeur double la dose de désinfectant « pour que ce soit plus efficace » et rince aussitôt.",
      q: "Quelles erreurs commet-il ?", options: ["Il risque de laisser des résidus chimiques", "Il ne respecte pas le temps de contact", "Aucune erreur", "Il ne respecte pas la dilution"], bonnes: [0, 1, 3],
      explication: "Il faut respecter la dilution et le temps de contact de la fiche technique. Surdoser n'améliore pas l'efficacité et laisse des résidus (danger chimique)." },
    { id: "BPH-033", chapitre: "nettoyage-nuisibles-dechets",
      q: "Peut-on mélanger de l'eau de Javel avec un détartrant acide pour gagner du temps ?", options: ["Oui", "Non, le mélange dégage un gaz toxique"], bonnes: [1],
      explication: "Les produits ne se mélangent jamais. Javel et acide dégagent du chlore gazeux, dangereux pour le personnel." },
    { id: "BPH-034", chapitre: "nettoyage-nuisibles-dechets",
      q: "Après la désinfection et le rinçage, comment sécher un plan de travail ?", options: ["À l'air libre ou avec un papier à usage unique", "Avec un torchon propre du matin", "Avec une éponge"], bonnes: [0],
      explication: "Le séchage se fait à l'air ou avec du papier jetable. Torchons et éponges recontaminent la surface désinfectée." },
    { id: "BPH-035", chapitre: "nettoyage-nuisibles-dechets",
      q: "Un plan de nettoyage indique :", options: ["Qui le fait et à quelle fréquence", "Le produit, sa dilution et le mode opératoire", "Le prix de vente des plats", "Ce qu'il faut nettoyer"], bonnes: [0, 1, 3],
      explication: "Le plan de nettoyage répond à quoi, qui, quand, comment (produit, dose, temps, matériel). Il est visé après chaque opération." },
    { id: "BPH-036", chapitre: "nettoyage-nuisibles-dechets",
      q: "Pourquoi l'éponge est-elle déconseillée en cuisine ?", options: ["Elle raye l'inox", "Elle consomme trop de produit", "Elle reste humide et retient les germes"], bonnes: [2],
      explication: "L'éponge garde humidité et débris alimentaires : les germes s'y multiplient. On préfère des lavettes à usage unique ou lavées et désinfectées chaque jour." },
    { id: "BPH-037", chapitre: "nettoyage-nuisibles-dechets",
      q: "Un désinfectant utilisé sur les plans de travail doit :", options: ["Répondre à une norme d'efficacité (par exemple NF EN 1276 pour l'action bactéricide)", "Être transvasé dans une bouteille alimentaire pour être plus pratique", "Être autorisé pour les surfaces en contact avec les aliments"], bonnes: [0, 2],
      explication: "Le produit doit être adapté au contact alimentaire et d'efficacité prouvée. Il reste dans son emballage d'origine, étiqueté." },
    { id: "BPH-038", chapitre: "nettoyage-nuisibles-dechets", situation: "En ouvrant la réserve sèche le matin, vous découvrez des déjections de rongeurs et un sac de farine rongé.",
      q: "Que faites-vous ?", options: ["Faire intervenir le prestataire de dératisation et rechercher le point d'entrée", "Tamiser la farine et l'utiliser", "Jeter les produits souillés", "Nettoyer et désinfecter la zone"], bonnes: [0, 2, 3],
      explication: "Les produits souillés par des rongeurs sont jetés, la zone est nettoyée et désinfectée, et la lutte est renforcée (prestataire, obturation des accès). L'action est notée dans le PMS." },
    { id: "BPH-039", chapitre: "nettoyage-nuisibles-dechets",
      q: "Où placer un désinsectiseur électrique (lampe UV) ?", options: ["Juste au-dessus du plan de dressage", "Au-dessus de la friteuse", "À l'écart des zones de préparation et des aliments"], bonnes: [2],
      explication: "Les insectes électrocutés peuvent tomber : l'appareil est placé loin des aliments et des plans de travail, souvent près des entrées." },
    { id: "BPH-040", chapitre: "nettoyage-nuisibles-dechets",
      q: "Le chat du restaurateur peut-il circuler dans la cuisine en dehors des heures de service ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "Les animaux domestiques sont interdits dans les locaux où les aliments sont préparés ou entreposés, à tout moment." },
    { id: "BPH-041", chapitre: "nettoyage-nuisibles-dechets",
      q: "En zone de préparation, les poubelles doivent être :", options: ["À commande non manuelle", "Vidées aussi souvent que nécessaire", "Vidées une fois par semaine", "Munies d'un couvercle"], bonnes: [0, 1, 3],
      explication: "Couvercle, ouverture au pied et vidage fréquent (au moins en fin de service) limitent les contaminations et les nuisibles." },
    { id: "BPH-042", chapitre: "nettoyage-nuisibles-dechets",
      q: "Les huiles de friture usagées doivent être :", options: ["Jetées dans la poubelle des biodéchets en vrac", "Collectées par un prestataire", "Versées dans l'évier avec de l'eau chaude"], bonnes: [1],
      explication: "Les huiles alimentaires usagées sont stockées dans des fûts et collectées par une entreprise spécialisée. Elles ne doivent jamais être déversées dans les canalisations." }
  );
})();

/* ───────────── Thème TEMP — Températures et conservation ───────────── */
(function () {
  const P = window.PERMIS_COURS["haccp"] = window.PERMIS_COURS["haccp"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "reception-stockage",
      theme: "TEMP",
      titre: "Réception des marchandises et températures de stockage",
      duree: 13,
      objectifs: [
        "Savoir contrôler une livraison et refuser un produit non conforme",
        "Connaître les températures réglementaires de conservation des principales denrées",
        "Respecter la chaîne du froid et l'ordre de rangement",
        "Organiser et surveiller les chambres froides et les congélateurs",
        "Distinguer congélation et surgélation"
      ],
      sections: [
        {
          titre: "Le contrôle à réception",
          contenu: `<p>La réception est la première barrière contre les dangers : un produit accepté devient la responsabilité du restaurateur. Chaque livraison est contrôlée <strong>en présence du livreur</strong>, immédiatement, sur une zone propre (jamais au sol).</p>
<table>
<thead><tr><th>Point contrôlé</th><th>Ce que l'on vérifie</th></tr></thead>
<tbody>
<tr><td>Température</td><td>Mesurée au thermomètre (sonde entre deux emballages, ou à cœur d'un produit sacrifié) et comparée à la température réglementaire ou à celle de l'étiquette</td></tr>
<tr><td>Véhicule et livreur</td><td>Camion propre et réfrigéré pour les produits frais ou surgelés, tenue correcte</td></tr>
<tr><td>Emballages</td><td>Intacts, propres, non déchirés, non humides ; conserves non bombées ni rouillées ; surgelés sans givre ni signe de décongélation</td></tr>
<tr><td>Étiquetage</td><td>Dénomination, numéro de lot, DLC ou DDM suffisante pour l'utilisation prévue, <strong>marque d'identification</strong> (estampille ovale) pour les denrées d'origine animale</td></tr>
<tr><td>Aspect et odeur</td><td>Couleur, consistance et odeur normales</td></tr>
<tr><td>Conformité à la commande</td><td>Produit, quantité, calibre</td></tr>
</tbody>
</table>
<p>Les résultats sont notés sur une <strong>fiche de réception</strong> ou sur le bon de livraison. En cas de non-conformité, le produit est <strong>refusé</strong> et repart avec le livreur ; le motif est noté sur le bon de livraison et le fournisseur est informé.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> à la livraison, le thermomètre indique +8 °C entre deux barquettes de cuisses de poulet. La température maximale de conservation des volailles est de +4 °C : le lot est refusé, le motif noté sur le bon de livraison.</div>`
        },
        {
          titre: "Les températures réglementaires de conservation",
          contenu: `<p>L'<strong>arrêté du 21 décembre 2009</strong> fixe les températures maximales de conservation des denrées d'origine animale dans les commerces de détail, dont les restaurants. Pour les autres produits, on respecte la température indiquée par le fabricant sur l'étiquetage.</p>
<table>
<thead><tr><th>Denrée</th><th>Température maximale</th></tr></thead>
<tbody>
<tr><td>Viandes hachées</td><td>+2 °C</td></tr>
<tr><td>Produits de la pêche frais, crustacés et mollusques cuits réfrigérés</td><td>Température de la glace fondante (0 à +2 °C)</td></tr>
<tr><td>Abats</td><td>+3 °C</td></tr>
<tr><td>Préparations culinaires élaborées à l'avance (plats cuisinés, entrées, desserts maison)</td><td>+3 °C</td></tr>
<tr><td>Viandes de volailles et de lapin</td><td>+4 °C</td></tr>
<tr><td>Préparations de viandes (saucisses crues, brochettes, viandes marinées)</td><td>+4 °C</td></tr>
<tr><td>Viandes de boucherie (bœuf, veau, porc, agneau) en carcasses et pièces de découpe</td><td>+7 °C (de nombreux établissements les gardent entre 0 et +4 °C)</td></tr>
<tr><td>Produits laitiers, fromages, autres produits réfrigérés</td><td>Température fixée par le fabricant, indiquée sur l'étiquette</td></tr>
<tr><td>Coquillages vivants (huîtres, moules)</td><td>Température qui préserve leur vitalité, ni trop froide ni trop chaude</td></tr>
<tr><td>Produits surgelés, glaces et crèmes glacées</td><td>-18 °C</td></tr>
</tbody>
</table>
<p>Pour les surgelés, de brèves remontées de température sont tolérées pendant le transport et la livraison, sans que le produit dépasse <strong>-15 °C</strong>.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> viande hachée +2 °C ; préparations élaborées à l'avance +3 °C ; volailles +4 °C ; poissons frais dans la glace fondante ; surgelés -18 °C.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> la viande hachée a la température la plus basse (+2 °C), pas la volaille. Et une préparation maison doit être conservée à +3 °C maximum, plus froid que les volailles crues.</div>`
        },
        {
          titre: "La chaîne du froid et le rangement",
          contenu: `<p>La <strong>chaîne du froid</strong> est le maintien continu des produits réfrigérés ou surgelés à leur température de conservation, du producteur jusqu'à l'utilisation. Toute rupture permet aux germes de se multiplier ; pour les surgelés, une décongélation partielle suivie d'une recongélation dégrade le produit et favorise les germes.</p>
<ul>
<li>Les produits sont rangés <strong>immédiatement</strong> après le contrôle : d'abord les <strong>surgelés</strong>, puis les produits <strong>réfrigérés</strong>, enfin l'épicerie.</li>
<li>On applique la règle du <strong>premier périmé, premier sorti</strong> : les produits dont la date est la plus proche sont placés devant et utilisés en premier.</li>
<li>Les produits déconditionnés sont mis dans des bacs propres, couverts ou filmés, identifiés (nature, lot, date limite).</li>
<li>On sépare les familles de produits : produits crus en bas, produits cuits et prêts à consommer en haut ; légumes terreux isolés ; si possible, enceintes différentes pour les viandes, les poissons, les produits laitiers, les préparations.</li>
</ul>
<div class="encart" data-type="danger"><strong>Attention :</strong> laisser une livraison de produits frais attendre sur le quai pendant le coup de feu du service est une rupture de la chaîne du froid, même si le produit « paraît encore froid ».</div>`
        },
        {
          titre: "Les chambres froides et les congélateurs",
          contenu: `<p>Une enceinte froide ne refroidit pas un produit chaud : elle est conçue pour <strong>maintenir</strong> au froid des produits déjà froids. Quelques règles d'usage :</p>
<ul>
<li>Chaque enceinte possède un <strong>thermomètre</strong> lisible de l'extérieur ou un enregistreur. La température est relevée et notée régulièrement (au moins une fois par jour, en pratique souvent matin et soir), avec le nom de la personne.</li>
<li>Les portes restent fermées ; on évite les ouvertures prolongées.</li>
<li>On ne surcharge pas : l'air froid doit circuler entre les produits.</li>
<li>On n'y place <strong>jamais un plat chaud</strong> : il refroidirait lentement et réchaufferait les autres produits. Le refroidissement se fait en cellule de refroidissement rapide.</li>
<li>Les enceintes sont nettoyées et désinfectées selon le plan de nettoyage ; les congélateurs sont dégivrés.</li>
</ul>
<p>En cas de dépassement de température (panne, porte restée ouverte), on applique une <strong>action corrective</strong> : évaluer la durée et l'ampleur de l'écart, transférer les produits dans une autre enceinte, détruire les denrées dont la sécurité n'est plus garantie, faire réparer, noter l'incident.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> le relevé du matin indique +9 °C dans la chambre froide des préparations ; la porte est restée entrouverte toute la nuit. Les préparations élaborées à l'avance, restées plusieurs heures au-dessus de +3 °C, sont jetées ; l'incident et la décision sont notés.</div>`
        },
        {
          titre: "Congélation et surgélation",
          contenu: `<table>
<thead><tr><th></th><th>Congélation</th><th>Surgélation</th></tr></thead>
<tbody>
<tr><td>Vitesse</td><td>Plus lente</td><td>Très rapide, jusqu'à atteindre -18 °C à cœur</td></tr>
<tr><td>Cristaux de glace</td><td>Gros cristaux qui abîment les cellules (perte d'eau à la décongélation)</td><td>Petits cristaux : meilleure qualité</td></tr>
<tr><td>Conservation</td><td>-18 °C pour la plupart des produits</td><td>-18 °C ou moins, sans rupture</td></tr>
</tbody>
</table>
<p>Le froid négatif <strong>arrête</strong> la multiplication des micro-organismes sans les détruire. Un produit congelé conserve donc sa contamination de départ.</p>
<p>Un restaurant peut congeler lui-même des denrées si cette pratique est prévue dans son PMS : produits frais et sains, congelés rapidement (idéalement en cellule de congélation), conditionnés, <strong>étiquetés</strong> (nature, date de congélation, date limite d'utilisation fixée par l'établissement) et conservés à -18 °C. On ne congèle pas un produit proche de sa date limite pour « le sauver ».</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un produit décongelé ne doit jamais être recongelé en l'état. Et un congélateur domestique ou une chambre froide négative ne remplace pas une cellule de congélation pour congeler rapidement.</div>`
        }
      ],
      points_cles: [
        "Contrôler chaque livraison en présence du livreur : température, emballage, étiquetage, dates, aspect",
        "Refuser le produit non conforme et noter le motif sur le bon de livraison",
        "Viande hachée +2 °C ; abats et préparations élaborées à l'avance +3 °C ; volailles et préparations de viandes +4 °C",
        "Produits de la pêche frais : glace fondante (0 à +2 °C)",
        "Surgelés et glaces : -18 °C, jamais au-dessus de -15 °C à la livraison",
        "Ranger d'abord les surgelés puis les réfrigérés ; premier périmé, premier sorti",
        "Relever et noter les températures des enceintes ; jamais de plat chaud en chambre froide",
        "Le froid négatif arrête la multiplication sans détruire les germes ; ne jamais recongeler un produit décongelé"
      ]
    },
    {
      id: "cuisson-refroidissement",
      theme: "TEMP",
      titre: "Cuisson, maintien au chaud, refroidissement, remise en température et décongélation",
      duree: 14,
      objectifs: [
        "Connaître les effets et les limites de la cuisson",
        "Appliquer la règle du maintien au chaud à +63 °C minimum",
        "Appliquer la règle du refroidissement rapide de +63 °C à moins de +10 °C en 2 heures au plus",
        "Remettre un plat en température correctement",
        "Décongeler sans risque"
      ],
      sections: [
        {
          titre: "La cuisson",
          contenu: `<p>La cuisson est souvent la seule étape qui <strong>détruit</strong> les bactéries pathogènes et les parasites. Son efficacité dépend du couple <strong>température à cœur / durée</strong> : c'est la température au centre du produit qui compte, mesurée avec un thermomètre à sonde propre et désinfecté.</p>
<ul>
<li>Les <strong>volailles</strong> et le porc sont cuits à cœur (pas de partie rosée près de l'os pour la volaille).</li>
<li>Les <strong>viandes hachées</strong> servies aux jeunes enfants et aux personnes fragiles doivent être <strong>bien cuites à cœur</strong> (risque E. coli STEC) ; les autorités sanitaires recommandent environ +70 °C à cœur.</li>
<li>Les <strong>œufs</strong> destinés aux personnes fragiles sont cuits jusqu'à ce que blanc et jaune soient pris.</li>
</ul>
<p>La cuisson a des limites : elle ne détruit ni les <strong>spores</strong> (Clostridium, Bacillus) ni les <strong>toxines thermostables</strong> (staphylocoque doré). Après cuisson, le produit doit donc être consommé rapidement, maintenu au chaud ou refroidi rapidement.</p>
<p><strong>Les huiles de friture</strong> se dégradent à chaque utilisation et forment des composés toxiques (danger chimique). La réglementation impose de ne pas dépasser <strong>25 % de composés polaires</strong>, contrôlés par un testeur ou des bandelettes. On filtre l'huile, on évite de la surchauffer (il est recommandé de ne pas dépasser 180 °C) et on la change régulièrement.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> la cuisson se contrôle à cœur, à la sonde. Elle détruit les formes végétatives des bactéries et les parasites, pas les spores ni certaines toxines.</div>`
        },
        {
          titre: "Le maintien au chaud",
          contenu: `<p>Un plat cuit destiné à être servi chaud doit être maintenu à une température <strong>d'au moins +63 °C</strong> jusqu'au moment du service. Au-dessus de cette température, les bactéries ne se multiplient pas.</p>
<ul>
<li>On utilise un matériel adapté : bain-marie, armoire ou chariot chauffant, vitrine chaude, réglé et contrôlé.</li>
<li>Le matériel de maintien <strong>maintient</strong> la température ; il ne sert pas à réchauffer un plat froid, car la montée en température serait trop lente.</li>
<li>La température est vérifiée à la sonde et peut être enregistrée.</li>
<li>Le temps de maintien est limité : un maintien prolongé dégrade la qualité.</li>
<li>Les plats restants en fin de service, qui ont été présentés aux clients ou sont restés dans la zone de danger, sont <strong>jetés</strong>.</li>
</ul>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> en milieu de service, la sonde indique +52 °C dans le bac de gratin du bain-marie, dont la résistance est en panne. L'action corrective dépend de la durée passée sous +63 °C : si elle est courte et connue, on peut réchauffer rapidement à plus de +63 °C et servir immédiatement ; sinon, on jette. Dans tous les cas, on note l'incident.</div>`
        },
        {
          titre: "Le refroidissement rapide",
          contenu: `<p>Une préparation cuite qui n'est pas consommée immédiatement et qui doit être conservée au froid (plat cuisiné à l'avance, sauce, fond, crème) doit être refroidie <strong>rapidement</strong> : sa température à cœur doit passer de <strong>+63 °C à moins de +10 °C en 2 heures au plus</strong>. Elle est ensuite stockée entre 0 et +3 °C.</p>
<p>Pourquoi cette règle ? Lors d'un refroidissement lent, le produit traverse longtemps la zone de 20 à 50 °C où les spores de Clostridium perfringens ou de Bacillus cereus, qui ont survécu à la cuisson, germent et se multiplient très vite.</p>
<ul>
<li>Le refroidissement se fait dans une <strong>cellule de refroidissement rapide</strong>, jamais à température ambiante ni dans une chambre froide ordinaire.</li>
<li>On répartit le produit en <strong>petites quantités et en faible épaisseur</strong> (bacs gastronormes peu profonds), on découpe les grosses pièces, on ne couvre pas hermétiquement pendant le refroidissement si cela le ralentit.</li>
<li>On contrôle à la sonde et on <strong>enregistre</strong> l'heure et la température de début et de fin de refroidissement.</li>
<li>Le produit refroidi est filmé, étiqueté (nom, date de fabrication, date limite) et stocké à +3 °C maximum.</li>
</ul>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> de +63 °C à moins de +10 °C à cœur en 2 heures au plus, en cellule, puis stockage entre 0 et +3 °C.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> « laisser tiédir sur le plan de travail avant de mettre au froid » est une erreur classique : c'est exactement ce qui favorise Clostridium perfringens.</div>`
        },
        {
          titre: "La remise en température",
          contenu: `<p>Un plat refroidi destiné à être servi chaud doit être <strong>remis en température rapidement</strong>, pour traverser au plus vite la zone de danger. On retient qu'il doit atteindre <strong>au moins +63 °C à cœur en moins d'une heure</strong>, puis être servi ou maintenu à +63 °C minimum.</p>
<ul>
<li>On utilise un matériel puissant : four mixte, sauteuse, micro-ondes, et non le bain-marie ou l'armoire de maintien.</li>
<li>On ne réchauffe que la quantité nécessaire au service.</li>
<li>Un plat ne se remet en température qu'<strong>une seule fois</strong> : les restes d'un plat réchauffé ne sont ni refroidis ni réchauffés à nouveau, ils sont jetés.</li>
</ul>
<p>Les <strong>préparations froides</strong> (entrées, desserts, sauces froides à base d'œufs) restent au froid jusqu'au dernier moment. Les préparations à base d'œufs crus sont à éviter : on leur préfère des ovoproduits pasteurisés ; si on en réalise, elles sont gardées au froid et consommées très rapidement.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> réchauffer deux fois un même plat multiplie les passages dans la zone de danger. Une portion non servie après remise en température est jetée.</div>`
        },
        {
          titre: "La décongélation",
          contenu: `<p>Pendant la décongélation, la surface du produit se réchauffe avant le cœur : si elle se fait à température ambiante, les germes de surface se multiplient alors que le centre est encore gelé.</p>
<table>
<thead><tr><th>Méthodes correctes</th><th>Méthodes interdites</th></tr></thead>
<tbody>
<tr><td>En enceinte réfrigérée (entre 0 et +4 °C), dans un bac permettant l'écoulement de l'exsudat</td><td>À température ambiante (sur le plan de travail, en cuisine)</td></tr>
<tr><td>Au four à micro-ondes, en mode décongélation, suivie d'une utilisation immédiate</td><td>Dans de l'eau stagnante, chaude ou tiède</td></tr>
<tr><td>Par cuisson directe, sans décongélation préalable (légumes, petites pièces, produits prévus pour)</td><td>Près d'une source de chaleur</td></tr>
</tbody>
</table>
<p>Le produit décongelé est <strong>étiqueté</strong> (date de décongélation, date limite d'utilisation), conservé au froid entre 0 et +3 °C et utilisé rapidement. Il ne doit <strong>jamais être recongelé</strong> en l'état. L'exsudat (le jus de décongélation), très chargé en germes, est éliminé et ne doit pas couler sur d'autres aliments.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> décongeler au froid, au micro-ondes ou par cuisson directe ; jamais à température ambiante ; étiqueter ; ne jamais recongeler.</div>`
        }
      ],
      points_cles: [
        "La cuisson se contrôle à cœur avec une sonde propre ; elle ne détruit ni spores ni toxines thermostables",
        "Viande hachée pour enfants et personnes fragiles : bien cuite à cœur",
        "Huile de friture : 25 % de composés polaires au maximum",
        "Maintien au chaud : +63 °C minimum ; le matériel de maintien ne sert pas à réchauffer",
        "Refroidissement rapide : de +63 °C à moins de +10 °C à cœur en 2 heures au plus, en cellule",
        "Après refroidissement : stockage entre 0 et +3 °C, étiquetage",
        "Remise en température : au moins +63 °C à cœur en moins d'une heure, une seule fois",
        "Décongélation au froid, au micro-ondes ou par cuisson directe ; jamais à température ambiante ; jamais de recongélation"
      ]
    },
    {
      id: "dates-etiquetage",
      theme: "TEMP",
      titre: "Durées de vie, DLC et DDM, étiquetage interne",
      duree: 11,
      objectifs: [
        "Distinguer DLC et DDM et savoir ce qui est permis après chacune",
        "Gérer la durée de vie d'un produit après ouverture ou décongélation",
        "Fixer et respecter la durée de vie des préparations maison",
        "Étiqueter correctement les préparations et produits entamés",
        "Connaître les règles particulières aux œufs et aux plats témoins"
      ],
      sections: [
        {
          titre: "DLC et DDM",
          contenu: `<p>Le règlement (UE) n° 1169/2011 dit « INCO » définit deux types de dates :</p>
<table>
<thead><tr><th></th><th>DLC : date limite de consommation</th><th>DDM : date de durabilité minimale</th></tr></thead>
<tbody>
<tr><td>Mention</td><td>« À consommer jusqu'au… »</td><td>« À consommer de préférence avant le… » ou « …avant fin… »</td></tr>
<tr><td>Produits</td><td>Denrées très périssables sur le plan microbiologique : viandes, poissons, produits laitiers frais, plats préparés réfrigérés</td><td>Produits stables : conserves, pâtes, riz, biscuits, café, surgelés</td></tr>
<tr><td>Après la date</td><td>Le produit <strong>ne doit plus être utilisé ni servi</strong> : il peut présenter un danger pour la santé</td><td>Le produit peut perdre des qualités (goût, texture) mais n'est pas dangereux s'il a été bien conservé et que l'emballage est intact</td></tr>
</tbody>
</table>
<p>La DDM remplace l'ancienne « DLUO ». La DLC n'est valable que si la <strong>température de conservation</strong> indiquée sur l'étiquette a été respectée : un produit qui a subi une rupture de la chaîne du froid peut être dangereux avant sa DLC.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un yaourt ou une viande dont la DLC est dépassée d'un jour ne se sert pas, même s'il semble parfait. En revanche, un paquet de pâtes dont la DDM est passée peut encore être utilisé s'il est intact.</div>`
        },
        {
          titre: "Après ouverture ou décongélation : la durée de vie secondaire",
          contenu: `<p>Dès qu'un conditionnement est ouvert, la DLC imprimée ne s'applique plus telle quelle : le produit est exposé à l'air et aux manipulations. Il faut alors appliquer une <strong>durée de vie secondaire</strong> :</p>
<ul>
<li>celle indiquée par le fabricant (« à consommer dans les 3 jours après ouverture », par exemple) ;</li>
<li>à défaut, celle fixée par l'établissement dans son PMS, en s'appuyant sur le GBPH.</li>
</ul>
<p>Dans tous les cas, la nouvelle date ne peut <strong>jamais dépasser la DLC d'origine</strong>.</p>
<p>Les règles sont les mêmes pour un produit <strong>décongelé</strong> : la date de décongélation est notée et une durée d'utilisation courte, fixée par le fabricant ou l'établissement, s'applique ; le produit est conservé au froid positif.</p>
<p>Les <strong>conserves</strong> entamées ne restent pas dans leur boîte métallique : le contenu est transvasé dans un récipient propre, couvert et étiqueté, et conservé au froid.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un sachet de jambon tranché a une DLC au 15 ; il est ouvert le 12 et l'étiquette indique « 3 jours après ouverture ». Il doit être utilisé au plus tard le 15, pas le 15 + 3.</div>`
        },
        {
          titre: "La durée de vie des préparations maison",
          contenu: `<p>Pour les préparations réalisées dans l'établissement (plats cuisinés à l'avance, sauces, entrées, desserts), c'est le restaurateur qui fixe la <strong>durée de vie</strong>, sous sa responsabilité. Il s'appuie sur :</p>
<ul>
<li>les durées de référence proposées par le GBPH de la restauration ;</li>
<li>ou des <strong>études de vieillissement</strong> (analyses microbiologiques réalisées par un laboratoire) pour justifier une durée plus longue.</li>
</ul>
<p>Ces durées sont courtes et ne valent que si les règles de fabrication et de conservation sont respectées : refroidissement rapide, stockage à +3 °C maximum, contenant fermé. Les préparations sensibles (à base d'œufs crus, de crème, de produits de la mer crus) ont une durée de vie très courte et sont consommées le jour même ou dans les 24 heures.</p>
<p>Les <strong>plats présentés aux clients et non consommés</strong> (restes d'assiettes, buffet resté exposé, plats remis en température) ne sont pas réutilisés : ils sont jetés.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> durée de vie fixée par l'exploitant et justifiée (GBPH ou études), toujours avec stockage entre 0 et +3 °C. Un plat présenté au client ne revient pas en cuisine pour être resservi.</div>`
        },
        {
          titre: "L'étiquetage interne",
          contenu: `<p>Toute denrée sortie de son emballage d'origine, ouverte, décongelée ou fabriquée sur place doit être <strong>identifiée</strong> par une étiquette. L'inspecteur considère une préparation sans étiquette comme une non-conformité, car personne ne peut dire si elle est encore consommable.</p>
<table>
<thead><tr><th>Information</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr><td>Nom du produit ou de la préparation</td><td>Identifier ce que contient le bac</td></tr>
<tr><td>Date de fabrication, d'ouverture ou de décongélation</td><td>Savoir depuis quand la durée de vie court</td></tr>
<tr><td>Date limite d'utilisation (DLC secondaire)</td><td>Savoir jusqu'à quand le produit peut être servi</td></tr>
<tr><td>Si utile : numéro de lot ou référence de la matière première</td><td>Assurer la traçabilité en cas de problème</td></tr>
</tbody>
</table>
<p>Les étiquettes d'origine des matières premières utilisées (ou une copie des informations) sont conservées pour la traçabilité. Les produits congelés dans l'établissement portent la date de congélation et la date limite de conservation fixée.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> écrire seulement « sauce tomate » sur le couvercle ne suffit pas. Il faut au minimum la date de fabrication et la date limite d'utilisation.</div>`
        },
        {
          titre: "Les œufs et les plats témoins",
          contenu: `<p><strong>Les œufs coquille</strong> ont une DDM fixée au plus à <strong>28 jours</strong> après la ponte ; la mention « extra-frais » est autorisée jusqu'au <strong>9e jour</strong> après la ponte. En cuisine :</p>
<ul>
<li>ne pas laver les œufs (le lavage abîme la cuticule et favorise la pénétration des germes) ;</li>
<li>conserver à une température constante, de préférence au froid, à l'écart des produits prêts à consommer ;</li>
<li>éliminer les œufs fêlés ou sales ;</li>
<li>casser les œufs dans un récipient à part, jamais sur le rebord du récipient de préparation, et se laver les mains après manipulation des coquilles ;</li>
<li>préférer les ovoproduits pasteurisés pour les préparations sans cuisson (mayonnaise, mousse, tiramisu).</li>
</ul>
<p><strong>Les plats témoins</strong>, obligatoires en restauration collective et recommandés en restauration commerciale (banquets, groupes, traiteur), sont des échantillons des plats servis, identifiés, conservés entre 0 et +3 °C <strong>au moins 5 jours</strong> après la dernière présentation au consommateur.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> œufs : DDM 28 jours après la ponte, extra-frais jusqu'au 9e jour, jamais lavés. Plats témoins : au froid positif au moins 5 jours.</div>`
        }
      ],
      points_cles: [
        "DLC « à consommer jusqu'au » : après la date, le produit n'est plus servi",
        "DDM « à consommer de préférence avant » : perte de qualité possible, pas de danger si bien conservé",
        "La DLC n'est valable que si la température de conservation a été respectée",
        "Après ouverture ou décongélation : durée de vie secondaire, sans jamais dépasser la DLC d'origine",
        "La durée de vie des préparations maison est fixée et justifiée par l'exploitant (GBPH ou études de vieillissement)",
        "Étiquette interne : nom, date de fabrication, d'ouverture ou de décongélation, date limite",
        "Un plat présenté au client et non consommé est jeté",
        "Œufs : DDM 28 jours après la ponte, extra-frais jusqu'au 9e jour, jamais lavés",
        "Plats témoins conservés entre 0 et +3 °C au moins 5 jours"
      ]
    }
  );

  P.questions.push(
    { id: "TEMP-001", chapitre: "reception-stockage", situation: "À la livraison, le thermomètre indique +8 °C au cœur d'un carton de cuisses de volaille.",
      q: "Que faites-vous ?", options: ["Je refuse le lot", "J'accepte et je cuis la volaille immédiatement", "J'accepte et je range vite en chambre froide"], bonnes: [0],
      explication: "Les viandes de volailles doivent être conservées à +4 °C au maximum. À +8 °C, la chaîne du froid est rompue : le produit est refusé et le motif noté sur le bon de livraison." },
    { id: "TEMP-002", chapitre: "reception-stockage",
      q: "La température maximale de conservation des viandes hachées est de :", options: ["+2 °C", "+7 °C", "+4 °C"], bonnes: [0],
      explication: "La viande hachée, très sensible car la contamination de surface est répartie dans toute la masse, se conserve à +2 °C au maximum." },
    { id: "TEMP-003", chapitre: "reception-stockage",
      q: "Les préparations culinaires élaborées à l'avance (plats cuisinés, entrées maison) se conservent à :", options: ["+8 °C maximum", "+10 °C maximum", "+3 °C maximum"], bonnes: [2],
      explication: "L'arrêté du 21 décembre 2009 fixe +3 °C pour les préparations culinaires élaborées à l'avance. On les stocke donc entre 0 et +3 °C." },
    { id: "TEMP-004", chapitre: "reception-stockage",
      q: "La température maximale de conservation des viandes de volailles est de :", options: ["+8 °C", "+2 °C", "+4 °C"], bonnes: [2],
      explication: "Les viandes de volailles et de lapin se conservent à +4 °C au maximum." },
    { id: "TEMP-005", chapitre: "reception-stockage",
      q: "Les poissons frais se conservent :", options: ["À la température de la glace fondante (0 à +2 °C)", "À température ambiante s'ils sont cuisinés le jour même", "À +7 °C"], bonnes: [0],
      explication: "Les produits de la pêche frais se conservent à la température de la glace fondante, proche de 0 °C." },
    { id: "TEMP-006", chapitre: "reception-stockage",
      q: "Les produits surgelés et les crèmes glacées se conservent à :", options: ["0 °C", "-18 °C ou moins", "-12 °C"], bonnes: [1],
      explication: "Les surgelés, glaces et crèmes glacées se conservent à -18 °C ou plus froid." },
    { id: "TEMP-007", chapitre: "reception-stockage", situation: "À la livraison, un carton de légumes surgelés est à -12 °C et les sachets contiennent des blocs de légumes collés entre eux.",
      q: "Que faites-vous ?", options: ["Je refuse la livraison", "J'accepte et je recongèle aussitôt", "J'accepte car les légumes seront cuits"], bonnes: [0],
      explication: "Un surgelé ne doit pas dépasser -15 °C à la livraison ; les blocs collés révèlent une décongélation partielle. Le produit est refusé." },
    { id: "TEMP-008", chapitre: "reception-stockage",
      q: "À la réception, quels éléments faut-il contrôler ?", options: ["La marque de la camionnette", "Les dates limites", "La température des produits", "L'intégrité des emballages"], bonnes: [1, 2, 3],
      explication: "Température, état des emballages, dates, étiquetage et aspect se contrôlent à chaque livraison. La marque du véhicule est sans intérêt ; sa propreté et sa réfrigération, en revanche, comptent." },
    { id: "TEMP-009", chapitre: "reception-stockage",
      q: "Un produit refusé à la livraison :", options: ["Est accepté si le livreur insiste", "Repart avec le livreur et le motif est noté sur le bon de livraison", "Est stocké à part en attendant le fournisseur"], bonnes: [1],
      explication: "Le refus se fait en présence du livreur, avec le motif inscrit sur le bon de livraison. Le produit non conforme ne doit pas entrer dans les stocks." },
    { id: "TEMP-010", chapitre: "reception-stockage",
      q: "Dans quel ordre ranger une livraison qui comprend des surgelés, des produits frais et de l'épicerie ?", options: ["Produits frais, épicerie, surgelés", "Épicerie, produits frais, surgelés", "Surgelés, produits frais, épicerie"], bonnes: [2],
      explication: "On range d'abord les produits les plus sensibles à la remontée de température : surgelés, puis réfrigérés, enfin l'épicerie." },
    { id: "TEMP-011", chapitre: "reception-stockage",
      q: "La règle « premier périmé, premier sorti » consiste à :", options: ["Jeter en premier les produits les plus anciens", "Utiliser d'abord les derniers produits livrés", "Utiliser en premier les produits dont la date limite est la plus proche"], bonnes: [2],
      explication: "Les produits dont la date est la plus proche sont placés devant et utilisés en premier, pour éviter les dépassements de date." },
    { id: "TEMP-012", chapitre: "reception-stockage", situation: "À 15 h, il reste 6 litres de blanquette bouillante. Un cuisinier propose de mettre la marmite directement dans la chambre froide.",
      q: "Est-ce une bonne pratique ?", options: ["Oui, le froid arrêtera les germes", "Non, il faut utiliser une cellule de refroidissement rapide"], bonnes: [1],
      explication: "Une chambre froide maintient le froid mais ne refroidit pas vite : le plat resterait longtemps dans la zone de danger et réchaufferait les autres produits. On refroidit en cellule." },
    { id: "TEMP-013", chapitre: "reception-stockage",
      q: "La température des chambres froides doit être :", options: ["Relevée régulièrement", "Contrôlée seulement en cas de panne", "Notée sur un document ou enregistrée"], bonnes: [0, 2],
      explication: "Les relevés réguliers, notés ou enregistrés automatiquement, permettent de détecter une dérive et prouvent la maîtrise lors d'un contrôle." },
    { id: "TEMP-014", chapitre: "reception-stockage", situation: "Le matin, la chambre froide des préparations affiche +9 °C : la porte est restée entrouverte toute la nuit.",
      q: "Que faites-vous des préparations élaborées à l'avance qu'elle contient ?", options: ["Je les sers rapidement au déjeuner", "Je les congèle pour les sauver", "Je les jette"], bonnes: [2],
      explication: "Restées plusieurs heures bien au-dessus de +3 °C, leur sécurité n'est plus garantie : elles sont détruites, l'incident et l'action corrective sont notés." },
    { id: "TEMP-015", chapitre: "reception-stockage",
      q: "La congélation à -18 °C :", options: ["Permet de rattraper un produit proche de sa DLC", "Détruit les bactéries", "Arrête la multiplication des bactéries"], bonnes: [2],
      explication: "Le froid négatif stoppe la multiplication sans détruire les bactéries. On ne congèle que des produits frais et sains, pas un produit en fin de vie." },
    { id: "TEMP-016", chapitre: "reception-stockage",
      q: "Quelle est la différence entre surgélation et congélation ?", options: ["La surgélation est plus rapide", "La surgélation forme de plus petits cristaux de glace", "La congélation détruit les germes, pas la surgélation"], bonnes: [0, 1],
      explication: "La surgélation abaisse très rapidement la température jusqu'à -18 °C à cœur, avec de petits cristaux qui préservent la qualité. Aucune des deux ne détruit les germes." },
    { id: "TEMP-017", chapitre: "reception-stockage",
      q: "Pour une viande d'origine animale, la marque d'identification (estampille ovale) sur l'emballage indique :", options: ["L'établissement agréé qui a préparé ou conditionné la viande", "La date de consommation", "Le prix au kilo"], bonnes: [0],
      explication: "La marque d'identification ovale identifie l'établissement agréé d'origine : elle est utile à la traçabilité et doit être vérifiée à réception." },
    { id: "TEMP-018", chapitre: "reception-stockage",
      q: "Dans une chambre froide, on peut :", options: ["Surcharger les étagères pour gagner de la place", "Poser les bacs directement au sol", "Laisser circuler l'air entre les produits"], bonnes: [2],
      explication: "L'air froid doit circuler pour maintenir la température partout. Les produits sont rangés sur des étagères, jamais au sol." },
    { id: "TEMP-019", chapitre: "cuisson-refroidissement",
      q: "La température de maintien au chaud des plats cuisinés est de :", options: ["+40 °C minimum", "+50 °C minimum", "+63 °C minimum"], bonnes: [2],
      explication: "Au-dessus de +63 °C, les bactéries ne se multiplient pas. Les plats chauds sont maintenus à +63 °C minimum jusqu'au service." },
    { id: "TEMP-020", chapitre: "cuisson-refroidissement",
      q: "Le refroidissement rapide d'une préparation cuite consiste à faire passer sa température à cœur :", options: ["De +63 °C à moins de +10 °C en 2 heures au plus", "De +63 °C à +20 °C en 6 heures", "De +100 °C à +3 °C en 24 heures"], bonnes: [0],
      explication: "La règle est de passer de +63 °C à moins de +10 °C à cœur en 2 heures au plus, puis de stocker entre 0 et +3 °C." },
    { id: "TEMP-021", chapitre: "cuisson-refroidissement", situation: "Une sauce bolognaise de 10 litres doit être refroidie pour le lendemain.",
      q: "Comment procéder ?", options: ["Contrôler et noter la température en fin de refroidissement", "La répartir en bacs peu profonds", "La laisser tiédir sur le plan de travail avant de la mettre au froid", "La placer en cellule de refroidissement rapide"], bonnes: [0, 1, 3],
      explication: "On refroidit en faible épaisseur, en cellule, en contrôlant et en enregistrant les températures. Laisser tiédir à l'air libre favorise Clostridium perfringens." },
    { id: "TEMP-022", chapitre: "cuisson-refroidissement",
      q: "Pourquoi le refroidissement des plats cuisinés doit-il être rapide ?", options: ["Pour économiser de l'énergie", "Pour garder la couleur des légumes uniquement", "Pour empêcher la germination des spores et la multiplication des bactéries"], bonnes: [2],
      explication: "Un refroidissement lent laisse le plat longtemps entre 20 et 50 °C, zone où les spores qui ont survécu à la cuisson germent et se multiplient." },
    { id: "TEMP-023", chapitre: "cuisson-refroidissement",
      q: "Après le refroidissement rapide, le plat est stocké :", options: ["Entre +8 et +10 °C", "À température ambiante", "Entre 0 et +3 °C"], bonnes: [2],
      explication: "Une préparation élaborée à l'avance se conserve à +3 °C maximum." },
    { id: "TEMP-024", chapitre: "cuisson-refroidissement",
      q: "Lors de la remise en température d'un plat refroidi, on doit atteindre au moins +63 °C à cœur :", options: ["En moins d'une heure", "Peu importe le temps", "En 3 heures environ"], bonnes: [0],
      explication: "La remise en température doit être rapide pour traverser au plus vite la zone de danger : au moins +63 °C à cœur en moins d'une heure." },
    { id: "TEMP-025", chapitre: "cuisson-refroidissement", situation: "Un cuisinier place des barquettes de lasagnes sortant de la chambre froide dans le bain-marie pour les réchauffer pendant le service.",
      q: "Cette pratique est-elle correcte ?", options: ["Oui", "Non, le bain-marie sert à maintenir et non à réchauffer"], bonnes: [1],
      explication: "Le bain-marie monte trop lentement en température. La remise en température se fait au four, à la sauteuse ou au micro-ondes, puis le plat est maintenu au bain-marie." },
    { id: "TEMP-026", chapitre: "cuisson-refroidissement", situation: "En fin de service, il reste des portions de blanquette qui ont été remises en température pour le midi.",
      q: "Que doit-on en faire ?", options: ["Les refroidir et les resservir le lendemain", "Les jeter", "Les congeler"], bonnes: [1],
      explication: "Un plat ne se remet en température qu'une seule fois. Les restes d'un plat réchauffé sont jetés." },
    { id: "TEMP-027", chapitre: "cuisson-refroidissement",
      q: "Quelles méthodes de décongélation sont correctes ?", options: ["Par cuisson directe", "Au micro-ondes suivi d'une utilisation immédiate", "En chambre froide positive", "Sur le plan de travail pendant la nuit"], bonnes: [0, 1, 2],
      explication: "On décongèle au froid, au micro-ondes ou par cuisson directe. À température ambiante, la surface se réchauffe et les germes s'y multiplient." },
    { id: "TEMP-028", chapitre: "cuisson-refroidissement",
      q: "Un filet de poisson décongelé non utilisé peut-il être recongelé ?", options: ["Oui", "Non"], bonnes: [1],
      explication: "Un produit décongelé ne doit jamais être recongelé en l'état : les germes ont repris leur activité pendant la décongélation." },
    { id: "TEMP-029", chapitre: "cuisson-refroidissement",
      q: "Le jus qui s'écoule d'un produit pendant sa décongélation (exsudat) :", options: ["Peut servir à préparer la sauce", "Est stérile", "Est très chargé en germes et doit être éliminé"], bonnes: [2],
      explication: "L'exsudat est riche en germes : on décongèle dans un bac à grille et on l'élimine, sans qu'il coule sur d'autres aliments." },
    { id: "TEMP-030", chapitre: "cuisson-refroidissement",
      q: "Comment vérifier qu'un rôti de porc est suffisamment cuit ?", options: ["Avec un thermomètre à sonde piqué à cœur", "En regardant la couleur de la surface", "En touchant la surface avec le doigt"], bonnes: [0],
      explication: "C'est la température à cœur qui compte : elle se mesure avec une sonde propre et désinfectée. La surface peut être cuite alors que le cœur ne l'est pas." },
    { id: "TEMP-031", chapitre: "cuisson-refroidissement", situation: "Un enfant de 5 ans commande un steak haché.",
      q: "Comment doit-il être cuit ?", options: ["Bien cuit à cœur", "Saignant", "Bleu"], bonnes: [0],
      explication: "Pour les jeunes enfants, la viande hachée doit être bien cuite à cœur pour détruire les E. coli STEC responsables du syndrome hémolytique et urémique." },
    { id: "TEMP-032", chapitre: "cuisson-refroidissement",
      q: "La cuisson détruit :", options: ["Toutes les toxines bactériennes", "Les formes végétatives des bactéries pathogènes", "Les parasites comme Anisakis", "Toutes les spores"], bonnes: [1, 2],
      explication: "Une cuisson suffisante à cœur détruit les bactéries végétatives et les parasites, mais pas les spores ni les toxines thermostables." },
    { id: "TEMP-033", chapitre: "cuisson-refroidissement",
      q: "La teneur maximale réglementaire d'une huile de friture en composés polaires est de :", options: ["50 %", "5 %", "25 %"], bonnes: [2],
      explication: "Au-delà de 25 % de composés polaires, l'huile est trop dégradée et doit être changée. On la contrôle avec un testeur ou des bandelettes." },
    { id: "TEMP-034", chapitre: "cuisson-refroidissement", situation: "Pendant le service, la sonde indique +55 °C dans un bac de purée au bain-marie.",
      q: "Cette température est-elle conforme ?", options: ["Oui", "Non, elle doit être d'au moins +63 °C"], bonnes: [1],
      explication: "En dessous de +63 °C, le plat est dans la zone de danger. Une action corrective est nécessaire (réchauffer rapidement si la durée est courte et connue, sinon jeter) et l'incident est noté." },
    { id: "TEMP-035", chapitre: "cuisson-refroidissement",
      q: "Un plat chaud peut-il être refroidi à température ambiante avant d'être placé en chambre froide ?", options: ["Oui, pour ne pas abîmer la chambre froide", "Non"], bonnes: [1],
      explication: "Le refroidissement à l'air libre est trop lent et favorise Clostridium perfringens. Il se fait en cellule de refroidissement rapide." },
    { id: "TEMP-036", chapitre: "cuisson-refroidissement",
      q: "Pour les préparations froides sans cuisson (mayonnaise, mousse au chocolat), il est recommandé d'utiliser :", options: ["Des œufs fêlés", "Des ovoproduits pasteurisés", "Des œufs extra-frais lavés"], bonnes: [1],
      explication: "Les ovoproduits pasteurisés suppriment le risque salmonelles des œufs crus. Les œufs ne se lavent pas, et les œufs fêlés sont éliminés." },
    { id: "TEMP-037", chapitre: "dates-etiquetage",
      q: "La mention « à consommer jusqu'au » correspond à :", options: ["Une DDM", "Une DLC", "Une date de fabrication"], bonnes: [1],
      explication: "« À consommer jusqu'au » est la date limite de consommation des produits très périssables. La DDM est indiquée par « à consommer de préférence avant »." },
    { id: "TEMP-038", chapitre: "dates-etiquetage", situation: "Un pot de crème fraîche a une DLC dépassée d'un jour. Il a été bien conservé et sent bon.",
      q: "Peut-on l'utiliser ?", options: ["Oui, s'il sent bon", "Non"], bonnes: [1],
      explication: "Après la DLC, un produit ne doit plus être utilisé ni servi : il peut contenir des germes pathogènes sans signe visible." },
    { id: "TEMP-039", chapitre: "dates-etiquetage", situation: "Un paquet de riz non ouvert a une DDM dépassée de quelques semaines.",
      q: "Peut-on l'utiliser ?", options: ["Oui, si l'emballage est intact et le produit bien conservé", "Non, jamais"], bonnes: [0],
      explication: "Après la DDM, le produit peut perdre des qualités mais ne présente pas de danger s'il a été bien conservé et que l'emballage est intact." },
    { id: "TEMP-040", chapitre: "dates-etiquetage", situation: "Une barquette de jambon a une DLC au 20. Elle est ouverte le 18 ; le fabricant indique « à consommer dans les 3 jours après ouverture ».",
      q: "Jusqu'à quelle date peut-on l'utiliser ?", options: ["Le 23", "Le 21", "Le 20"], bonnes: [2],
      explication: "La durée de vie après ouverture ne peut jamais dépasser la DLC d'origine : 18 + 3 donnerait le 21, mais la DLC du 20 s'impose." },
    { id: "TEMP-041", chapitre: "dates-etiquetage",
      q: "Une préparation maison stockée en chambre froide doit porter une étiquette indiquant au moins :", options: ["Le nom du client qui la mangera", "La date limite d'utilisation", "Le nom de la préparation", "La date de fabrication"], bonnes: [1, 2, 3],
      explication: "Nom, date de fabrication et date limite permettent de savoir ce que contient le bac et s'il est encore consommable." },
    { id: "TEMP-042", chapitre: "dates-etiquetage",
      q: "Qui fixe la durée de vie des préparations réalisées dans le restaurant ?", options: ["Le fournisseur des matières premières", "La DDPP pour chaque plat", "Le restaurateur, sous sa responsabilité, en s'appuyant sur le GBPH ou des études"], bonnes: [2],
      explication: "L'exploitant fixe et justifie la durée de vie de ses préparations : durées de référence du GBPH ou études de vieillissement en laboratoire." },
    { id: "TEMP-043", chapitre: "dates-etiquetage",
      q: "La DLC d'un produit n'est valable que si :", options: ["Le produit a été ouvert", "Le produit a été congelé", "La température de conservation indiquée a été respectée"], bonnes: [2],
      explication: "Une rupture de la chaîne du froid peut rendre un produit dangereux avant sa DLC : la date suppose le respect de la température prévue." },
    { id: "TEMP-044", chapitre: "dates-etiquetage",
      q: "Une boîte de conserve de tomates entamée doit être :", options: ["Laissée ouverte dans sa boîte en réserve sèche", "Transvasée dans un récipient propre, couvert et étiqueté, conservé au froid", "Recouverte d'un film et rangée à température ambiante"], bonnes: [1],
      explication: "Une fois ouverte, la conserve n'est plus stérile : le contenu est transvasé, étiqueté avec une date limite et conservé au froid." },
    { id: "TEMP-045", chapitre: "dates-etiquetage",
      q: "La DDM d'un œuf coquille est fixée au plus à :", options: ["9 jours après la ponte", "3 mois après la ponte", "28 jours après la ponte"], bonnes: [2],
      explication: "Les œufs ont une DDM de 28 jours au plus après la ponte. La mention « extra-frais » n'est autorisée que jusqu'au 9e jour." },
    { id: "TEMP-046", chapitre: "dates-etiquetage",
      q: "En cuisine, avant d'utiliser des œufs coquille sales, il faut :", options: ["Les éliminer", "Les laver à l'eau", "Les brosser à sec et les utiliser pour une préparation crue"], bonnes: [0],
      explication: "On ne lave pas les œufs : cela abîme la cuticule protectrice et favorise la pénétration des germes. Les œufs sales ou fêlés sont éliminés." },
    { id: "TEMP-047", chapitre: "dates-etiquetage", situation: "Après un buffet, il reste des plateaux de charcuterie restés exposés aux clients pendant deux heures.",
      q: "Que faites-vous ?", options: ["Je les remets en chambre froide pour le lendemain", "Je les jette", "Je les utilise dans une quiche"], bonnes: [1],
      explication: "Les denrées présentées aux clients et non consommées ne sont pas réutilisées : elles ont pu être contaminées et sont restées hors du froid." },
    { id: "TEMP-048", chapitre: "dates-etiquetage",
      q: "Un produit décongelé doit être étiqueté avec :", options: ["Sa date limite d'utilisation", "Sa date de décongélation", "Sa date de recongélation prévue"], bonnes: [0, 1],
      explication: "On note la date de décongélation et la date limite d'utilisation, courte. Un produit décongelé n'est jamais recongelé." },
    { id: "TEMP-049", chapitre: "dates-etiquetage",
      q: "Les plats témoins sont conservés :", options: ["Au moins 5 jours après la dernière présentation au consommateur", "Entre 0 et +3 °C", "Congelés à -18 °C"], bonnes: [0, 1],
      explication: "Les plats témoins se conservent au froid positif, entre 0 et +3 °C, au moins 5 jours après la dernière présentation au consommateur." },
    { id: "TEMP-050", chapitre: "dates-etiquetage",
      q: "La DDM a remplacé l'ancienne mention :", options: ["DLUO (date limite d'utilisation optimale)", "Date de fabrication", "DLC"], bonnes: [0],
      explication: "Depuis le règlement INCO, la DLUO s'appelle DDM, date de durabilité minimale, avec la mention « à consommer de préférence avant »." }
  );
})();

/* ───────────── Thème HACCP — La méthode HACCP ───────────── */
(function () {
  const P = window.PERMIS_COURS["haccp"] = window.PERMIS_COURS["haccp"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "haccp-principes",
      theme: "HACCP",
      titre: "La méthode HACCP : vocabulaire, 7 principes et 12 étapes",
      duree: 13,
      objectifs: [
        "Connaître la signification et l'origine du sigle HACCP",
        "Maîtriser le vocabulaire : danger, CCP, limite critique, surveillance, action corrective, vérification",
        "Citer les 7 principes dans l'ordre",
        "Connaître les 12 étapes de mise en place",
        "Situer l'HACCP par rapport aux bonnes pratiques d'hygiène"
      ],
      sections: [
        {
          titre: "Qu'est-ce que l'HACCP ?",
          contenu: `<p><strong>HACCP</strong> signifie <em>Hazard Analysis Critical Control Point</em>, soit en français <strong>analyse des dangers et points critiques pour leur maîtrise</strong>. C'est une <strong>méthode</strong> (et non une norme ni un label) qui permet d'identifier, d'évaluer et de maîtriser les dangers significatifs pour la sécurité des aliments.</p>
<p>Elle a été développée dans les années 1960 aux États-Unis pour garantir la sécurité des repas des astronautes de la NASA, puis reprise par le <strong>Codex Alimentarius</strong> (organisme commun à la FAO et à l'OMS), qui en a fixé les principes. Le règlement (CE) 852/2004 impose à tous les exploitants, dont les restaurateurs, de mettre en place des procédures fondées sur ces principes.</p>
<p>L'HACCP est une démarche <strong>préventive</strong> : plutôt que de contrôler le produit fini (ce qui est impossible pour chaque assiette), on maîtrise le procédé à chaque étape où un danger peut apparaître, se développer ou être éliminé.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> l'HACCP n'est pas un certificat que l'on obtient une fois pour toutes. C'est une méthode que l'exploitant applique, documente et met à jour en permanence, notamment quand il change de carte, de procédé ou d'équipement.</div>`
        },
        {
          titre: "Le vocabulaire de l'HACCP",
          contenu: `<table>
<thead><tr><th>Terme</th><th>Définition</th></tr></thead>
<tbody>
<tr><td>Danger</td><td>Agent biologique, chimique ou physique (y compris allergène) présent dans un aliment et pouvant nuire à la santé</td></tr>
<tr><td>Analyse des dangers</td><td>Recherche des dangers à chaque étape et évaluation de leur gravité et de leur probabilité</td></tr>
<tr><td>Mesure de maîtrise</td><td>Action ou activité qui permet de prévenir ou d'éliminer un danger ou de le ramener à un niveau acceptable (cuisson, refroidissement rapide, lavage des mains…)</td></tr>
<tr><td>CCP (point critique pour la maîtrise)</td><td>Étape à laquelle une mesure de maîtrise peut être appliquée et est <strong>essentielle</strong> pour prévenir ou éliminer un danger ou le ramener à un niveau acceptable</td></tr>
<tr><td>Limite critique</td><td>Valeur mesurable qui sépare l'acceptable de l'inacceptable à un CCP (température, durée…)</td></tr>
<tr><td>Surveillance</td><td>Observations ou mesures programmées pour vérifier qu'un CCP reste maîtrisé (relever la température à cœur)</td></tr>
<tr><td>Action corrective</td><td>Ce que l'on fait quand la surveillance montre que la limite critique n'est pas respectée</td></tr>
<tr><td>Vérification</td><td>Contrôles qui confirment que le système HACCP fonctionne et est efficace (analyses, audit, revue des enregistrements)</td></tr>
<tr><td>Diagramme de fabrication</td><td>Représentation de toutes les étapes de la préparation, de la réception au service</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> surveiller, c'est mesurer en continu pendant la production ; vérifier, c'est contrôler après coup que tout le système fonctionne.</div>`
        },
        {
          titre: "Les 7 principes",
          contenu: `<p>Les 7 principes du Codex Alimentarius constituent le cœur de la méthode. Ils doivent être connus <strong>dans l'ordre</strong>.</p>
<table>
<thead><tr><th>N°</th><th>Principe</th><th>Exemple en restauration</th></tr></thead>
<tbody>
<tr><td>1</td><td>Procéder à l'<strong>analyse des dangers</strong> et identifier les mesures de maîtrise</td><td>Pour un poulet rôti : salmonelles et Campylobacter sur la viande crue</td></tr>
<tr><td>2</td><td>Déterminer les <strong>points critiques pour la maîtrise (CCP)</strong></td><td>La cuisson est un CCP</td></tr>
<tr><td>3</td><td>Fixer les <strong>limites critiques</strong></td><td>Température à cœur atteinte, fixée dans la procédure</td></tr>
<tr><td>4</td><td>Mettre en place un système de <strong>surveillance</strong> des CCP</td><td>Mesure à la sonde à chaque fournée</td></tr>
<tr><td>5</td><td>Déterminer les <strong>actions correctives</strong></td><td>Poursuivre la cuisson si la température n'est pas atteinte</td></tr>
<tr><td>6</td><td>Établir des procédures de <strong>vérification</strong></td><td>Revue hebdomadaire des enregistrements, étalonnage de la sonde, analyses</td></tr>
<tr><td>7</td><td>Établir un système <strong>documentaire</strong> (procédures et enregistrements)</td><td>Fiche de cuisson remplie et conservée</td></tr>
</tbody>
</table>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> Analyser, CCP, Limites, Surveiller, Corriger, Vérifier, Documenter.</div>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> les limites critiques (principe 3) sont fixées avant de mettre en place la surveillance (principe 4) : on ne peut surveiller qu'une valeur déjà définie.</div>`
        },
        {
          titre: "Les 12 étapes de mise en place",
          contenu: `<p>Le Codex propose une séquence logique de <strong>12 étapes</strong> : 5 étapes préliminaires, puis l'application des 7 principes.</p>
<ol>
<li>Constituer l'<strong>équipe HACCP</strong> (personnes compétentes et pluridisciplinaires ; dans un petit restaurant, le chef et l'exploitant).</li>
<li><strong>Décrire le produit</strong> (composition, conditionnement, conservation, durée de vie).</li>
<li>Déterminer l'<strong>utilisation prévue</strong> du produit et les consommateurs (consommé chaud ou froid, public sensible ou non).</li>
<li>Établir le <strong>diagramme de fabrication</strong>.</li>
<li><strong>Vérifier sur place</strong> le diagramme de fabrication.</li>
<li>Analyser les dangers (principe 1).</li>
<li>Déterminer les CCP (principe 2).</li>
<li>Fixer les limites critiques (principe 3).</li>
<li>Établir la surveillance (principe 4).</li>
<li>Prévoir les actions correctives (principe 5).</li>
<li>Établir les procédures de vérification (principe 6).</li>
<li>Établir la documentation et les enregistrements (principe 7).</li>
</ol>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> pour un tiramisu, l'étape 3 relève qu'il est consommé sans cuisson, parfois par des enfants ou des femmes enceintes. Cette information pèse dans l'analyse des dangers : le choix d'ovoproduits pasteurisés devient une mesure de maîtrise essentielle.</div>`
        },
        {
          titre: "HACCP et bonnes pratiques d'hygiène",
          contenu: `<p>L'HACCP ne remplace pas les bonnes pratiques d'hygiène : il s'appuie sur elles. On distingue :</p>
<ul>
<li>les <strong>programmes prérequis</strong> (PRP) ou bonnes pratiques d'hygiène : mesures générales, valables pour toute la cuisine (hygiène du personnel, nettoyage, nuisibles, eau, maintenance, températures des enceintes) ;</li>
<li>les <strong>PRP opérationnels</strong> (PRPo) : mesures de maîtrise importantes, liées à un danger identifié, mais qui ne remplissent pas toutes les conditions d'un CCP (par exemple le lavage et la désinfection des crudités) ;</li>
<li>les <strong>CCP</strong> : étapes essentielles, avec limite critique mesurable, surveillance et action corrective immédiate.</li>
</ul>
<p>Sans bonnes pratiques d'hygiène solides, un plan HACCP ne peut pas fonctionner : une cuisson parfaite ne protège pas d'une contamination du plat par les mains au moment du dressage. C'est pourquoi le PMS associe les deux. Le GBPH de la restauration propose une analyse des dangers déjà réalisée pour les préparations courantes, que le restaurateur adapte à sa carte.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> bonnes pratiques d'hygiène (prérequis) + plan HACCP = maîtrise des dangers. L'HACCP se concentre sur quelques étapes essentielles, les CCP.</div>`
        }
      ],
      points_cles: [
        "HACCP : analyse des dangers et points critiques pour leur maîtrise",
        "Méthode préventive issue de la NASA et reprise par le Codex Alimentarius",
        "Obligation : procédures fondées sur les principes HACCP (règlement 852/2004)",
        "CCP : étape où une mesure de maîtrise est essentielle pour éliminer ou réduire un danger",
        "Limite critique : valeur mesurable séparant l'acceptable de l'inacceptable",
        "7 principes : analyse des dangers, CCP, limites critiques, surveillance, actions correctives, vérification, documentation",
        "12 étapes : 5 étapes préliminaires (équipe, produit, utilisation, diagramme, vérification sur place) + 7 principes",
        "Surveiller = mesurer pendant la production ; vérifier = confirmer que le système fonctionne",
        "L'HACCP s'appuie sur les bonnes pratiques d'hygiène (prérequis)"
      ]
    },
    {
      id: "haccp-application",
      theme: "HACCP",
      titre: "Appliquer l'HACCP en restaurant : CCP, arbre de décision, surveillance et corrections",
      duree: 12,
      objectifs: [
        "Utiliser l'arbre de décision pour identifier un CCP",
        "Repérer les CCP habituels en restauration",
        "Associer à un CCP une limite critique, une surveillance et une action corrective",
        "Distinguer action corrective et vérification",
        "Tenir les enregistrements qui prouvent la maîtrise"
      ],
      sections: [
        {
          titre: "L'arbre de décision",
          contenu: `<p>Pour savoir si une étape est un CCP, on utilise l'<strong>arbre de décision</strong> du Codex, une suite de questions posées pour chaque danger à chaque étape :</p>
<ol>
<li><strong>Q1</strong> : existe-t-il une ou plusieurs mesures de maîtrise pour ce danger à cette étape ? Si non, et si la maîtrise est nécessaire pour la sécurité, il faut modifier l'étape ou le procédé.</li>
<li><strong>Q2</strong> : l'étape est-elle spécialement conçue pour éliminer le danger ou le ramener à un niveau acceptable ? Si oui, c'est un <strong>CCP</strong>.</li>
<li><strong>Q3</strong> : une contamination peut-elle survenir, ou le danger augmenter, jusqu'à un niveau inacceptable à cette étape ? Si non, ce n'est pas un CCP.</li>
<li><strong>Q4</strong> : une étape ultérieure éliminera-t-elle le danger ou le ramènera-t-elle à un niveau acceptable ? Si oui, ce n'est pas un CCP (c'est l'étape suivante qui le sera) ; si non, c'est un <strong>CCP</strong>.</li>
</ol>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> danger salmonelles sur une volaille crue à l'étape de stockage. Q1 : oui, la réfrigération. Q2 : le stockage n'élimine pas les salmonelles. Q3 : oui, elles peuvent se multiplier si la température dérive. Q4 : oui, la cuisson les éliminera. Le stockage n'est donc pas un CCP pour ce danger (il reste maîtrisé par les bonnes pratiques) ; la cuisson est le CCP.</div>`
        },
        {
          titre: "Les CCP habituels en restauration",
          contenu: `<p>Dans une cuisine de restaurant, les étapes le plus souvent retenues comme CCP sont celles où une erreur de température ou de temps peut directement rendre un plat dangereux, sans étape ultérieure de rattrapage :</p>
<table>
<thead><tr><th>Étape</th><th>Danger maîtrisé</th><th>Limite critique (exemple)</th></tr></thead>
<tbody>
<tr><td>Cuisson</td><td>Survie des bactéries pathogènes et des parasites</td><td>Température à cœur fixée par la procédure (par exemple viande hachée bien cuite à cœur)</td></tr>
<tr><td>Refroidissement rapide</td><td>Germination des spores, multiplication</td><td>De +63 °C à moins de +10 °C à cœur en 2 heures au plus</td></tr>
<tr><td>Remise en température</td><td>Multiplication</td><td>Au moins +63 °C à cœur en moins d'une heure</td></tr>
<tr><td>Maintien au chaud</td><td>Multiplication</td><td>+63 °C minimum</td></tr>
<tr><td>Congélation des poissons à consommer crus</td><td>Parasites (Anisakis)</td><td>-20 °C pendant au moins 24 heures</td></tr>
</tbody>
</table>
<p>D'autres étapes importantes (réception, stockage au froid, lavage des végétaux, prévention des allergènes) sont souvent maîtrisées par les bonnes pratiques ou des PRPo, avec leurs propres contrôles.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> un CCP n'est pas « toute étape où il y a un danger ». C'est l'étape <strong>essentielle</strong> où la maîtrise doit absolument être assurée, faute d'étape ultérieure qui rattraperait l'erreur.</div>`
        },
        {
          titre: "Surveillance et actions correctives",
          contenu: `<p>Pour chaque CCP, on précise :</p>
<ul>
<li><strong>la surveillance</strong> : quoi mesurer, comment (sonde, thermomètre, minuteur), à quelle fréquence, par qui, et où on l'enregistre ;</li>
<li><strong>l'action corrective</strong> : ce qu'on fait immédiatement si la limite n'est pas respectée, et qui décide.</li>
</ul>
<p>Une action corrective a deux volets :</p>
<ol>
<li>Agir sur le <strong>produit</strong> : poursuivre la cuisson, réchauffer, isoler, détruire le produit non conforme.</li>
<li>Agir sur la <strong>cause</strong> : réparer l'appareil, revoir la procédure, former l'opérateur, pour éviter que l'écart ne se reproduise.</li>
</ol>
<p>L'écart et l'action corrective sont <strong>enregistrés</strong>.</p>
<table>
<thead><tr><th>Situation</th><th>Action corrective adaptée</th></tr></thead>
<tbody>
<tr><td>Steak haché à 55 °C à cœur en fin de cuisson</td><td>Poursuivre la cuisson jusqu'à la température prévue</td></tr>
<tr><td>Sauce à +25 °C après 2 heures de refroidissement</td><td>Limite dépassée : produit détruit ; recherche de la cause (cellule surchargée, bacs trop épais)</td></tr>
<tr><td>Bain-marie à +55 °C, durée inconnue</td><td>Produit détruit ; réparation du matériel</td></tr>
</tbody>
</table>
<div class="encart" data-type="danger"><strong>Attention :</strong> noter une température non conforme sans rien faire n'est pas une surveillance, c'est une preuve de non-maîtrise. Chaque écart appelle une décision sur le produit.</div>`
        },
        {
          titre: "La vérification",
          contenu: `<p>La <strong>vérification</strong> (principe 6) consiste à s'assurer, à intervalles réguliers, que le système HACCP est efficace et réellement appliqué. Elle se distingue de la surveillance :</p>
<ul>
<li>la surveillance est faite <strong>pendant la production</strong>, à chaque fois, par l'opérateur ;</li>
<li>la vérification est faite <strong>après coup</strong>, périodiquement, souvent par une autre personne (le chef, l'exploitant, un auditeur).</li>
</ul>
<p>Exemples de vérification : relecture des fiches d'enregistrement par le chef, <strong>étalonnage</strong> ou contrôle des thermomètres et des sondes (comparaison avec un thermomètre de référence ou dans la glace fondante à 0 °C), analyses microbiologiques de plats ou de surfaces par un laboratoire, audit interne, examen des réclamations clients.</p>
<p>Le plan HACCP est <strong>révisé</strong> à chaque changement (nouveau plat, nouveau matériel, nouveau fournisseur, nouvelle réglementation) ou après un incident.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> chaque lundi, le chef contrôle les fiches de cuisson et de refroidissement de la semaine écoulée ; chaque mois, il vérifie la sonde dans un bain de glace fondante ; deux fois par an, un laboratoire analyse des plats et des surfaces.</div>`
        },
        {
          titre: "La documentation",
          contenu: `<p>Le principe 7 impose de garder une trace écrite de la démarche. On distingue :</p>
<ul>
<li>les <strong>documents</strong> : l'analyse des dangers, la liste des CCP avec leurs limites, les procédures et instructions de travail (fiches techniques, procédure de refroidissement, plan de nettoyage) ;</li>
<li>les <strong>enregistrements</strong> : les preuves que les procédures sont appliquées (relevés de températures de cuisson, de refroidissement, de maintien ; fiches de non-conformité ; actions correctives ; résultats de vérification).</li>
</ul>
<p>La documentation est proportionnée à la taille de l'établissement : la réglementation prévoit une application <strong>flexible</strong> pour les petites entreprises, qui peuvent s'appuyer sur le GBPH et limiter les enregistrements à l'essentiel. Mais un minimum d'enregistrements reste indispensable pour démontrer la maîtrise lors d'un contrôle.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> documents = ce qu'il faut faire ; enregistrements = la preuve que c'est fait. Sans enregistrement, l'exploitant ne peut pas prouver sa maîtrise.</div>`
        }
      ],
      points_cles: [
        "L'arbre de décision pose 4 questions pour chaque danger à chaque étape",
        "Une étape conçue pour éliminer le danger (cuisson) est un CCP",
        "Si une étape ultérieure élimine le danger, l'étape étudiée n'est pas un CCP",
        "CCP habituels : cuisson, refroidissement rapide, remise en température, maintien au chaud",
        "Pour chaque CCP : limite critique, surveillance, action corrective, enregistrement",
        "Action corrective : traiter le produit et supprimer la cause",
        "Vérification : relecture des enregistrements, étalonnage des sondes, analyses, audits",
        "Documents (procédures) et enregistrements (preuves), avec flexibilité pour les petites entreprises"
      ]
    }
  );

  P.questions.push(
    { id: "HACCP-001", chapitre: "haccp-principes",
      q: "Que signifie HACCP en français ?", options: ["Hygiène alimentaire et contrôle des cuisines professionnelles", "Haute autorité de contrôle des produits", "Analyse des dangers et points critiques pour leur maîtrise"], bonnes: [2],
      explication: "HACCP signifie Hazard Analysis Critical Control Point : analyse des dangers et points critiques pour leur maîtrise." },
    { id: "HACCP-002", chapitre: "haccp-principes",
      q: "L'HACCP est :", options: ["Un certificat délivré une fois pour toutes", "Une méthode", "Un label de qualité"], bonnes: [1],
      explication: "L'HACCP est une méthode d'analyse et de maîtrise des dangers, appliquée et mise à jour en permanence. Ce n'est ni un label ni un certificat." },
    { id: "HACCP-003", chapitre: "haccp-principes",
      q: "La méthode HACCP a été développée à l'origine pour :", options: ["Les cantines scolaires françaises", "L'armée napoléonienne", "Les repas des astronautes de la NASA"], bonnes: [2],
      explication: "Elle est née dans les années 1960 aux États-Unis pour sécuriser l'alimentation des astronautes, puis a été reprise par le Codex Alimentarius." },
    { id: "HACCP-004", chapitre: "haccp-principes",
      q: "Combien la méthode HACCP compte-t-elle de principes ?", options: ["7", "12", "5"], bonnes: [0],
      explication: "La méthode repose sur 7 principes. Les 12 étapes correspondent à 5 étapes préliminaires suivies de l'application des 7 principes." },
    { id: "HACCP-005", chapitre: "haccp-principes",
      q: "Quel est le premier principe de l'HACCP ?", options: ["Fixer les limites critiques", "Procéder à l'analyse des dangers", "Établir la documentation"], bonnes: [1],
      explication: "Le principe 1 est l'analyse des dangers. Viennent ensuite les CCP, les limites critiques, la surveillance, les actions correctives, la vérification et la documentation." },
    { id: "HACCP-006", chapitre: "haccp-principes",
      q: "Quel principe vient juste après la détermination des CCP ?", options: ["Déterminer les actions correctives", "Mettre en place la surveillance", "Fixer les limites critiques"], bonnes: [2],
      explication: "Ordre : 1 analyse des dangers, 2 CCP, 3 limites critiques, 4 surveillance, 5 actions correctives, 6 vérification, 7 documentation." },
    { id: "HACCP-007", chapitre: "haccp-principes",
      q: "Le dernier (7e) principe de l'HACCP consiste à :", options: ["Former le personnel", "Analyser les dangers", "Établir un système documentaire et d'enregistrement"], bonnes: [2],
      explication: "Le principe 7 est la documentation : procédures et enregistrements qui prouvent l'application du plan." },
    { id: "HACCP-008", chapitre: "haccp-principes",
      q: "Que signifie CCP ?", options: ["Certificat de conformité professionnelle", "Point critique pour la maîtrise", "Contrôle complet du produit"], bonnes: [1],
      explication: "CCP (Critical Control Point) : étape à laquelle une mesure de maîtrise est essentielle pour prévenir ou éliminer un danger ou le ramener à un niveau acceptable." },
    { id: "HACCP-009", chapitre: "haccp-principes",
      q: "Une limite critique est :", options: ["Une valeur mesurable qui sépare l'acceptable de l'inacceptable", "La date limite de consommation", "Le nombre maximal de couverts par service"], bonnes: [0],
      explication: "La limite critique est un critère mesurable (température, durée) qui permet de dire si un CCP est maîtrisé." },
    { id: "HACCP-010", chapitre: "haccp-principes",
      q: "Quelle est la première des 12 étapes de mise en place de l'HACCP ?", options: ["Établir le diagramme de fabrication", "Constituer l'équipe HACCP", "Analyser les dangers"], bonnes: [1],
      explication: "On commence par constituer l'équipe HACCP, puis on décrit le produit, son utilisation prévue, on établit et vérifie sur place le diagramme de fabrication." },
    { id: "HACCP-011", chapitre: "haccp-principes",
      q: "Parmi ces étapes, lesquelles font partie des 5 étapes préliminaires ?", options: ["Vérifier sur place le diagramme de fabrication", "Déterminer l'utilisation prévue", "Fixer les limites critiques", "Décrire le produit"], bonnes: [0, 1, 3],
      explication: "Les étapes préliminaires sont : équipe, description du produit, utilisation prévue, diagramme de fabrication, vérification sur place. Les limites critiques relèvent du principe 3." },
    { id: "HACCP-012", chapitre: "haccp-principes",
      q: "La différence entre surveillance et vérification est que :", options: ["La vérification se fait à chaque produit, la surveillance une fois par an", "Il n'y a aucune différence", "La surveillance se fait pendant la production, la vérification après coup"], bonnes: [2],
      explication: "La surveillance mesure en continu qu'un CCP est maîtrisé ; la vérification confirme périodiquement que tout le système fonctionne." },
    { id: "HACCP-013", chapitre: "haccp-principes",
      q: "Dans le vocabulaire HACCP, un danger peut être :", options: ["Chimique", "Physique", "Allergène", "Biologique"], bonnes: [0, 1, 2, 3],
      explication: "Un danger est un agent biologique, chimique ou physique pouvant nuire à la santé ; les allergènes sont aujourd'hui expressément pris en compte." },
    { id: "HACCP-014", chapitre: "haccp-principes",
      q: "Quel organisme international a défini les principes de l'HACCP ?", options: ["Le Guide Michelin", "L'Organisation mondiale du commerce", "Le Codex Alimentarius"], bonnes: [2],
      explication: "Le Codex Alimentarius, commun à la FAO et à l'OMS, a fixé les 7 principes et les 12 étapes de la méthode." },
    { id: "HACCP-015", chapitre: "haccp-principes",
      q: "L'HACCP remplace-t-il les bonnes pratiques d'hygiène ?", options: ["Oui", "Non, il s'appuie sur elles"], bonnes: [1],
      explication: "Les bonnes pratiques d'hygiène sont des prérequis : sans elles, le plan HACCP ne peut pas fonctionner. Le PMS associe les deux." },
    { id: "HACCP-016", chapitre: "haccp-principes",
      q: "L'HACCP est une démarche :", options: ["Préventive", "Uniquement fondée sur le contrôle du produit fini", "Facultative pour les restaurants"], bonnes: [0],
      explication: "L'HACCP maîtrise le procédé à chaque étape plutôt que de contrôler chaque produit fini. Le règlement 852/2004 rend obligatoires des procédures fondées sur ses principes." },
    { id: "HACCP-017", chapitre: "haccp-principes", situation: "Le restaurant ajoute à sa carte des tartares de saumon et achète une nouvelle cellule de refroidissement.",
      q: "Le plan HACCP doit-il être révisé ?", options: ["Oui", "Non, il a déjà été écrit"], bonnes: [0],
      explication: "Le plan HACCP est revu à chaque changement de produit, de procédé ou d'équipement, ainsi qu'après un incident." },
    { id: "HACCP-018", chapitre: "haccp-principes",
      q: "Un « PRP » (programme prérequis) correspond :", options: ["À une sanction administrative", "Aux bonnes pratiques d'hygiène générales", "À un point critique avec limite critique"], bonnes: [1],
      explication: "Les PRP sont les bonnes pratiques d'hygiène de base (personnel, nettoyage, nuisibles, eau, maintenance) sur lesquelles repose le plan HACCP." },
    { id: "HACCP-019", chapitre: "haccp-application",
      q: "L'arbre de décision sert à :", options: ["Déterminer si une étape est un CCP", "Choisir les fournisseurs", "Calculer le prix de revient d'un plat"], bonnes: [0],
      explication: "L'arbre de décision est une suite de questions appliquée à chaque danger à chaque étape pour identifier les CCP." },
    { id: "HACCP-020", chapitre: "haccp-application", situation: "Vous étudiez l'étape de cuisson d'un poulet rôti, pour le danger salmonelles.",
      q: "Cette étape est-elle spécialement conçue pour éliminer le danger ?", options: ["Oui, c'est donc un CCP", "Non, ce n'est pas un CCP"], bonnes: [0],
      explication: "La cuisson est conçue pour détruire les bactéries pathogènes : à la question 2 de l'arbre de décision, la réponse est oui, c'est un CCP." },
    { id: "HACCP-021", chapitre: "haccp-application", situation: "Vous étudiez l'étape de stockage en chambre froide d'un rôti de porc cru qui sera cuit à cœur ensuite.",
      q: "Pour le danger bactérien, le stockage est-il un CCP ?", options: ["Non, car la cuisson ultérieure éliminera le danger", "Oui, car toutes les étapes froides sont des CCP"], bonnes: [0],
      explication: "Quand une étape ultérieure (la cuisson) élimine le danger, l'étape étudiée n'est pas un CCP. Le stockage reste maîtrisé par les bonnes pratiques et le relevé de températures." },
    { id: "HACCP-022", chapitre: "haccp-application",
      q: "Quelles étapes sont habituellement retenues comme CCP en restauration ?", options: ["Le refroidissement rapide", "La cuisson", "Le dressage de la table en salle", "La remise en température"], bonnes: [0, 1, 3],
      explication: "Cuisson, refroidissement rapide, remise en température et maintien au chaud sont des CCP classiques : une erreur de température y rend directement le plat dangereux." },
    { id: "HACCP-023", chapitre: "haccp-application",
      q: "Pour le CCP « refroidissement rapide », la limite critique est :", options: ["Atteindre 0 °C en 30 minutes", "Atteindre +3 °C en 24 heures", "De +63 °C à moins de +10 °C à cœur en 2 heures au plus"], bonnes: [2],
      explication: "La limite critique du refroidissement est le passage de +63 °C à moins de +10 °C à cœur en 2 heures au plus." },
    { id: "HACCP-024", chapitre: "haccp-application",
      q: "Pour le CCP « maintien au chaud », la limite critique est :", options: ["+63 °C minimum", "+40 °C minimum", "+100 °C minimum"], bonnes: [0],
      explication: "Les plats chauds sont maintenus à +63 °C au moins jusqu'au service." },
    { id: "HACCP-025", chapitre: "haccp-application", situation: "En fin de cuisson, la sonde indique 55 °C à cœur dans un steak haché destiné à un enfant, alors que la procédure prévoit une cuisson à cœur complète.",
      q: "Quelle est l'action corrective ?", options: ["Poursuivre la cuisson jusqu'à la température prévue", "Servir quand même et noter l'écart", "Ajouter de la sauce chaude"], bonnes: [0],
      explication: "L'action corrective agit sur le produit : on poursuit la cuisson jusqu'au respect de la limite critique, puis on enregistre l'écart." },
    { id: "HACCP-026", chapitre: "haccp-application", situation: "Après 2 heures en cellule, une sauce est encore à +25 °C à cœur.",
      q: "Que faites-vous ?", options: ["Je laisse la sauce une heure de plus en cellule et je l'utilise", "Je recherche la cause (cellule surchargée, bacs trop profonds)", "Je détruis la sauce"], bonnes: [1, 2],
      explication: "La limite critique est dépassée : la sécurité du produit n'est plus garantie, il est détruit. On agit aussi sur la cause pour éviter que l'écart se reproduise, et on enregistre." },
    { id: "HACCP-027", chapitre: "haccp-application",
      q: "Une action corrective complète comprend :", options: ["Un enregistrement", "La suppression de la fiche de relevé", "Une décision sur le produit non conforme", "Une action sur la cause de l'écart"], bonnes: [0, 2, 3],
      explication: "On traite le produit, on supprime la cause et on enregistre l'écart et l'action. Faire disparaître le relevé serait une faute grave." },
    { id: "HACCP-028", chapitre: "haccp-application",
      q: "Lequel de ces exemples est une activité de vérification ?", options: ["Le commis ferme la porte de la chambre froide", "Le chef relit chaque semaine les fiches de refroidissement", "Le cuisinier mesure la température à cœur de chaque fournée"], bonnes: [1],
      explication: "Relire après coup les enregistrements est une vérification. Mesurer la température à chaque fournée est une surveillance." },
    { id: "HACCP-029", chapitre: "haccp-application",
      q: "Comment vérifier simplement qu'un thermomètre à sonde est juste ?", options: ["En le posant sur le plan de travail", "En le comparant à la météo du jour", "En le plongeant dans de la glace fondante : il doit indiquer 0 °C"], bonnes: [2],
      explication: "Un mélange d'eau et de glace fondante est à 0 °C : c'est un moyen simple de contrôler une sonde, en plus d'une comparaison avec un thermomètre de référence." },
    { id: "HACCP-030", chapitre: "haccp-application",
      q: "Dans le plan HACCP, les enregistrements servent à :", options: ["Remplacer les mesures de maîtrise", "Prouver que les procédures sont appliquées", "Permettre la vérification"], bonnes: [1, 2],
      explication: "Les enregistrements sont des preuves et la base de la vérification. Ils ne remplacent pas les mesures de maîtrise elles-mêmes." },
    { id: "HACCP-031", chapitre: "haccp-application",
      q: "Un petit restaurant peut-il appliquer l'HACCP de façon simplifiée ?", options: ["Oui, la réglementation prévoit une flexibilité, notamment en s'appuyant sur le GBPH", "Non, il doit avoir le même dossier qu'une usine", "Oui, il en est totalement dispensé"], bonnes: [0],
      explication: "La réglementation prévoit une application flexible, proportionnée à la taille de l'entreprise, notamment par l'usage du GBPH. Elle n'en dispense pas." },
    { id: "HACCP-032", chapitre: "haccp-application",
      q: "Pour un poisson servi cru en tartare, l'étape qui maîtrise le danger Anisakis est :", options: ["La congélation à -20 °C pendant au moins 24 heures", "L'assaisonnement au citron", "Le lavage à l'eau"], bonnes: [0],
      explication: "L'acidité du citron et le lavage ne détruisent pas les larves d'Anisakis. Pour un poisson consommé cru, la congélation à -20 °C au moins 24 heures est l'étape de maîtrise." },
    { id: "HACCP-033", chapitre: "haccp-application",
      q: "Pour chaque CCP, le plan HACCP précise :", options: ["La méthode et la fréquence de surveillance", "La limite critique", "L'action corrective", "La personne responsable"], bonnes: [0, 1, 2, 3],
      explication: "Chaque CCP est associé à une limite critique, une surveillance (quoi, comment, quand, qui), une action corrective et un enregistrement." },
    { id: "HACCP-034", chapitre: "haccp-application", situation: "Le relevé de maintien au chaud indique +50 °C dans le bain-marie depuis une durée inconnue.",
      q: "Que faites-vous du plat ?", options: ["Je le réchauffe et je le sers", "Je le détruis", "Je baisse le prix du plat"], bonnes: [1],
      explication: "La durée passée dans la zone de danger étant inconnue, la sécurité n'est pas garantie : le plat est détruit, le matériel réparé et l'incident enregistré." }
  );
})();

/* ───────────── Thème ALLERG — Allergènes et information du consommateur ───────────── */
(function () {
  const P = window.PERMIS_COURS["haccp"] = window.PERMIS_COURS["haccp"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "allergenes",
      theme: "ALLERG",
      titre: "Les 14 allergènes et l'information du consommateur",
      duree: 12,
      objectifs: [
        "Distinguer allergie et intolérance alimentaire",
        "Citer les 14 allergènes à déclaration obligatoire",
        "Connaître l'obligation d'information écrite pour les plats non préemballés",
        "Prévenir les contaminations croisées par les allergènes",
        "Savoir réagir face à un client allergique ou à une réaction allergique"
      ],
      sections: [
        {
          titre: "Allergie et intolérance",
          contenu: `<p>Une <strong>allergie alimentaire</strong> est une réaction anormale du <strong>système immunitaire</strong> contre une substance d'un aliment (un allergène), le plus souvent une protéine. Elle peut survenir avec une <strong>quantité infime</strong> de l'aliment, quelques minutes à quelques heures après son ingestion :</p>
<ul>
<li>signes cutanés : démangeaisons, urticaire, gonflement des lèvres, du visage ou de la gorge (œdème) ;</li>
<li>signes digestifs : nausées, vomissements, douleurs abdominales ;</li>
<li>signes respiratoires : toux, gêne respiratoire ;</li>
<li>dans les cas graves, <strong>choc anaphylactique</strong> : chute de tension, malaise, perte de connaissance, avec risque de décès.</li>
</ul>
<p>Une <strong>intolérance</strong> (par exemple au lactose) ne met pas en jeu le système immunitaire ; ses effets dépendent de la quantité consommée et sont en général moins graves. La <strong>maladie cœliaque</strong> est une intolérance au gluten d'origine auto-immune qui impose un régime strict sans gluten.</p>
<div class="encart" data-type="danger"><strong>Attention :</strong> pour une personne allergique, des « traces » suffisent. Retirer les cacahuètes d'une assiette déjà garnie ne rend pas le plat sûr.</div>`
        },
        {
          titre: "Les 14 allergènes réglementaires",
          contenu: `<p>Le règlement (UE) n° 1169/2011 dit <strong>INCO</strong> (information des consommateurs sur les denrées alimentaires) fixe, dans son annexe II, la liste des <strong>14 substances ou produits</strong> provoquant des allergies ou intolérances qui doivent obligatoirement être signalés.</p>
<table>
<thead><tr><th>N°</th><th>Allergène</th><th>Où le trouve-t-on en cuisine ?</th></tr></thead>
<tbody>
<tr><td>1</td><td>Céréales contenant du gluten (blé, seigle, orge, avoine, épeautre, kamut)</td><td>Farine, pain, chapelure, pâtes, roux, bière</td></tr>
<tr><td>2</td><td>Crustacés</td><td>Crevettes, crabes, langoustines, bisques, fumets</td></tr>
<tr><td>3</td><td>Œufs</td><td>Mayonnaise, pâtisseries, pâtes fraîches, dorure</td></tr>
<tr><td>4</td><td>Poissons</td><td>Fumets, sauce Worcestershire, nuoc-mâm, anchois</td></tr>
<tr><td>5</td><td>Arachides</td><td>Cacahuètes, huile d'arachide non raffinée, cuisine asiatique</td></tr>
<tr><td>6</td><td>Soja</td><td>Sauce soja, tofu, lécithine de soja</td></tr>
<tr><td>7</td><td>Lait (y compris le lactose)</td><td>Beurre, crème, fromages, sauces</td></tr>
<tr><td>8</td><td>Fruits à coque (amandes, noisettes, noix, noix de cajou, de pécan, du Brésil, de macadamia, pistaches)</td><td>Pâtisseries, pralin, pesto, huiles de noix</td></tr>
<tr><td>9</td><td>Céleri</td><td>Bouillons, fonds, mirepoix, sel de céleri</td></tr>
<tr><td>10</td><td>Moutarde</td><td>Vinaigrettes, sauces, marinades</td></tr>
<tr><td>11</td><td>Graines de sésame</td><td>Pains, huile de sésame, tahin, houmous</td></tr>
<tr><td>12</td><td>Anhydride sulfureux et sulfites (au-delà de 10 mg/kg ou 10 mg/l)</td><td>Vins, fruits secs, crustacés conservés</td></tr>
<tr><td>13</td><td>Lupin</td><td>Certaines farines et pâtisseries</td></tr>
<tr><td>14</td><td>Mollusques</td><td>Moules, huîtres, calmars, escargots</td></tr>
</tbody>
</table>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> l'arachide (cacahuète) n'est pas un fruit à coque : c'est un allergène distinct. De même, crustacés et mollusques sont deux allergènes différents. Les tomates, les fraises ou le kiwi, bien qu'allergisants pour certains, ne font pas partie des 14.</div>`
        },
        {
          titre: "L'obligation d'information pour les plats non préemballés",
          contenu: `<p>Depuis le <strong>13 décembre 2014</strong> (application du règlement INCO), la présence des 14 allergènes doit être portée à la connaissance du consommateur, <strong>y compris pour les denrées non préemballées</strong>, c'est-à-dire les plats servis au restaurant ou vendus à emporter.</p>
<p>En France, un décret de 2015 précise que cette information doit être donnée <strong>par écrit</strong>, de façon lisible et accessible au client avant sa commande :</p>
<ul>
<li>sur la carte ou le menu ;</li>
<li>sur un affichage ;</li>
<li>ou dans un document (classeur, fiche par plat) tenu à disposition du client, à condition que celui-ci soit informé de la façon d'y accéder.</li>
</ul>
<p>Une information <strong>uniquement orale</strong> ne suffit pas. Le serveur peut renseigner oralement le client, mais le support écrit doit exister.</p>
<p>L'information doit être <strong>exacte et à jour</strong> : chaque changement de recette, de fournisseur ou de produit (une sauce industrielle remplacée par une autre) peut modifier la liste des allergènes. Les fiches techniques des plats mentionnent les allergènes de chaque ingrédient, en s'appuyant sur les étiquettes des produits achetés.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> 14 allergènes, information écrite obligatoire pour tous les plats servis, mise à jour à chaque changement de recette ou de produit.</div>`
        },
        {
          titre: "Prévenir les contaminations croisées",
          contenu: `<p>Un plat peut contenir un allergène qui ne figure pas dans sa recette, par <strong>contamination croisée</strong> : ustensile, planche, huile de friture, plan de travail, mains, gants. Pour la limiter :</p>
<ul>
<li>stocker les ingrédients allergènes dans des contenants fermés et identifiés ;</li>
<li>préparer en premier le plat destiné au client allergique, sur un plan nettoyé, avec du matériel propre ou dédié ;</li>
<li>se laver les mains et changer de gants avant de préparer ce plat ;</li>
<li>ne pas utiliser une huile de friture où ont cuit des produits panés ou des poissons pour un client allergique au gluten ou au poisson ;</li>
<li>identifier l'assiette jusqu'au service et la servir séparément, pour éviter les erreurs ;</li>
<li>former l'ensemble du personnel, en cuisine comme en salle.</li>
</ul>
<p>L'étiquetage de précaution « peut contenir des traces de… » présent sur certains produits achetés doit être pris en compte dans l'information donnée au client.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> un client allergique aux fruits à coque commande un dessert. Le pâtissier vérifie la fiche technique et les étiquettes (pralin, pâte de noisette, biscuits « peut contenir »), prépare l'assiette sur un plan nettoyé avec des ustensiles propres, et le serveur l'apporte à part en la signalant.</div>`
        },
        {
          titre: "Face à un client allergique",
          contenu: `<p>Quand un client signale une allergie :</p>
<ol>
<li>Prendre la demande au sérieux et la transmettre clairement à la cuisine (par écrit sur le bon de commande).</li>
<li>Consulter la fiche technique et les étiquettes, sans jamais improviser une réponse (« je pense qu'il n'y en a pas »). En cas de doute, le dire au client et lui proposer un autre plat.</li>
<li>Appliquer les mesures de prévention des contaminations croisées.</li>
</ol>
<p>Si un client présente des signes de réaction allergique (gonflement du visage, gêne respiratoire, malaise) :</p>
<ul>
<li>appeler immédiatement les secours : le <strong>15</strong> (SAMU) ou le <strong>112</strong> ;</li>
<li>aider le client à utiliser son stylo d'adrénaline s'il en possède un, selon les indications des secours ;</li>
<li>conserver le plat et noter les ingrédients, pour l'enquête et le suivi.</li>
</ul>
<p>Les produits « <strong>sans gluten</strong> » obéissent à une définition réglementaire (au plus 20 mg de gluten par kg) : un restaurant ne doit employer cette mention que s'il peut la garantir.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> dire « il n'y a pas d'œuf » sans avoir vérifié la fiche technique et les étiquettes est une faute. Mieux vaut avouer qu'on ne sait pas que donner une information fausse.</div>`
        }
      ],
      points_cles: [
        "Allergie : réaction du système immunitaire, possible avec des traces, risque de choc anaphylactique",
        "Règlement INCO (UE) 1169/2011 : 14 allergènes à déclaration obligatoire",
        "Gluten, crustacés, œufs, poissons, arachides, soja, lait, fruits à coque, céleri, moutarde, sésame, sulfites, lupin, mollusques",
        "Arachide et fruits à coque sont deux allergènes distincts ; crustacés et mollusques aussi",
        "Information obligatoire pour les plats non préemballés, par écrit et accessible avant la commande",
        "Une information seulement orale ne suffit pas",
        "Mettre à jour l'information à chaque changement de recette ou de produit",
        "Prévenir les contaminations croisées : matériel propre, lavage des mains, huile dédiée, assiette identifiée",
        "Réaction allergique : appeler le 15 ou le 112"
      ]
    }
  );

  P.questions.push(
    { id: "ALLERG-001", chapitre: "allergenes",
      q: "Combien d'allergènes doivent obligatoirement être signalés au consommateur selon le règlement INCO ?", options: ["10", "14", "20"], bonnes: [1],
      explication: "L'annexe II du règlement (UE) 1169/2011 dit INCO liste 14 allergènes à déclaration obligatoire." },
    { id: "ALLERG-002", chapitre: "allergenes",
      q: "Parmi ces aliments, lesquels font partie des 14 allergènes réglementaires ?", options: ["Le sésame", "La tomate", "La moutarde", "Le céleri"], bonnes: [0, 2, 3],
      explication: "Céleri, moutarde et graines de sésame figurent dans la liste. La tomate n'en fait pas partie." },
    { id: "ALLERG-003", chapitre: "allergenes",
      q: "L'arachide (cacahuète) fait-elle partie des fruits à coque ?", options: ["Oui", "Non, c'est un allergène distinct"], bonnes: [1],
      explication: "L'arachide est une légumineuse et figure comme allergène à part entière, distinct des fruits à coque (amandes, noisettes, noix…)." },
    { id: "ALLERG-004", chapitre: "allergenes", situation: "Une crêperie sert des galettes et des crêpes sur place, sans emballage.",
      q: "Doit-elle informer ses clients des allergènes présents ?", options: ["Oui, par écrit", "Non, seulement les produits préemballés sont concernés", "Oui, mais oralement suffit"], bonnes: [0],
      explication: "L'information sur les allergènes est obligatoire aussi pour les denrées non préemballées et doit être donnée par écrit, de façon accessible au client." },
    { id: "ALLERG-005", chapitre: "allergenes",
      q: "L'information écrite sur les allergènes peut figurer :", options: ["Sur la carte ou le menu", "Dans un classeur tenu à disposition, si le client est informé de son existence", "Sur un affichage"], bonnes: [0, 1, 2],
      explication: "Le support est libre (carte, affiche, document consultable), à condition que l'information soit écrite et facilement accessible avant la commande." },
    { id: "ALLERG-006", chapitre: "allergenes",
      q: "Parmi ces produits, lesquels appartiennent à l'allergène « fruits à coque » ?", options: ["Les pistaches", "Les noisettes", "Les châtaignes", "Les noix de cajou"], bonnes: [0, 1, 3],
      explication: "Les fruits à coque réglementaires sont les amandes, noisettes, noix, noix de cajou, de pécan, du Brésil, de macadamia et les pistaches. La châtaigne n'en fait pas partie." },
    { id: "ALLERG-007", chapitre: "allergenes",
      q: "Les sulfites doivent être signalés lorsqu'ils dépassent :", options: ["1 g par kg", "10 mg par kg ou par litre", "Ils ne sont jamais à signaler"], bonnes: [1],
      explication: "L'anhydride sulfureux et les sulfites sont à déclarer au-delà de 10 mg/kg ou 10 mg/l (exprimés en SO2). On en trouve notamment dans le vin et les fruits secs." },
    { id: "ALLERG-008", chapitre: "allergenes",
      q: "Une allergie alimentaire :", options: ["Est une réaction du système immunitaire", "Peut provoquer un choc anaphylactique", "Peut être déclenchée par des traces de l'aliment", "Disparaît si l'aliment est bien cuit"], bonnes: [0, 1, 2],
      explication: "L'allergie est une réaction immunitaire qui peut survenir avec des traces et être grave. La cuisson ne supprime pas en général le pouvoir allergisant." },
    { id: "ALLERG-009", chapitre: "allergenes", situation: "Un client allergique aux crustacés demande si la sauce du poisson en contient. Le serveur ne sait pas.",
      q: "Que doit-il faire ?", options: ["Vérifier la fiche technique et les étiquettes avec la cuisine", "Répondre « je ne pense pas » pour ne pas faire attendre", "Conseiller au client de goûter une petite quantité"], bonnes: [0],
      explication: "On ne répond jamais au hasard : on vérifie la fiche technique et les étiquettes des ingrédients (un fumet peut contenir des crustacés). En cas de doute, on le dit et on propose un autre plat." },
    { id: "ALLERG-010", chapitre: "allergenes", situation: "Un client allergique au gluten commande des frites. La friteuse sert aussi à cuire des beignets panés.",
      q: "Y a-t-il un risque ?", options: ["Oui, par contamination croisée dans l'huile", "Non, les frites ne contiennent pas de gluten"], bonnes: [0],
      explication: "L'huile partagée avec des produits panés contient du gluten : c'est une contamination croisée. Il faut une friteuse dédiée ou informer le client." },
    { id: "ALLERG-011", chapitre: "allergenes", situation: "Après le dessert, un client a les lèvres qui gonflent et respire difficilement.",
      q: "Que faites-vous en priorité ?", options: ["Je lui donne un verre d'eau et j'attends", "Je lui propose de rentrer chez lui", "J'appelle le 15 ou le 112"], bonnes: [2],
      explication: "Gonflement et gêne respiratoire peuvent annoncer un choc anaphylactique : on appelle immédiatement les secours (15 ou 112)." },
    { id: "ALLERG-012", chapitre: "allergenes", situation: "Le restaurant remplace la mayonnaise maison par une sauce industrielle d'un nouveau fournisseur.",
      q: "Que faut-il faire concernant les allergènes ?", options: ["Rien, une mayonnaise reste une mayonnaise", "Mettre à jour les fiches techniques et l'information des clients", "Vérifier l'étiquette du nouveau produit"], bonnes: [1, 2],
      explication: "Un nouveau produit peut contenir d'autres allergènes (moutarde, sulfites, soja…). L'information doit être mise à jour à chaque changement." },
    { id: "ALLERG-013", chapitre: "allergenes",
      q: "Crustacés et mollusques constituent :", options: ["Un seul allergène « produits de la mer »", "Des allergènes facultatifs", "Deux allergènes distincts"], bonnes: [2],
      explication: "Les crustacés (crevettes, crabes) et les mollusques (moules, huîtres, calmars) sont deux allergènes distincts de la liste réglementaire." },
    { id: "ALLERG-014", chapitre: "allergenes",
      q: "Pour préparer le plat d'un client allergique, il faut :", options: ["Utiliser un plan de travail nettoyé et du matériel propre", "Retirer l'allergène de l'assiette déjà garnie", "Se laver les mains et changer de gants", "Identifier l'assiette jusqu'au service"], bonnes: [0, 2, 3],
      explication: "Le plat est préparé à part avec du matériel propre, des mains lavées, et identifié jusqu'au client. Retirer l'allergène d'une assiette déjà garnie laisse des traces dangereuses." },
    { id: "ALLERG-015", chapitre: "allergenes",
      q: "Le lait figure dans la liste des 14 allergènes :", options: ["Oui, y compris le lactose", "Non"], bonnes: [0],
      explication: "Le lait et les produits à base de lait, y compris le lactose, font partie des 14 allergènes réglementaires." },
    { id: "ALLERG-016", chapitre: "allergenes",
      q: "Quel règlement européen fixe la liste des allergènes à déclaration obligatoire ?", options: ["Le règlement (UE) 2017/625", "Le règlement (CE) 853/2004", "Le règlement (UE) 1169/2011 dit INCO"], bonnes: [2],
      explication: "Le règlement INCO, relatif à l'information des consommateurs sur les denrées alimentaires, contient la liste des 14 allergènes dans son annexe II." }
  );
})();

/* ───────────── Thème TRACA — Traçabilité et gestion des non-conformités ───────────── */
(function () {
  const P = window.PERMIS_COURS["haccp"] = window.PERMIS_COURS["haccp"] || { chapitres: [], questions: [] };

  P.chapitres.push(
    {
      id: "tracabilite-non-conformites",
      theme: "TRACA",
      titre: "Traçabilité, non-conformités, retrait et rappel",
      duree: 12,
      objectifs: [
        "Définir la traçabilité et son obligation réglementaire",
        "Savoir quels documents conserver et comment",
        "Assurer la traçabilité interne entre matières premières et préparations",
        "Traiter une non-conformité et l'enregistrer",
        "Distinguer retrait et rappel et appliquer la procédure de gestion des alertes"
      ],
      sections: [
        {
          titre: "La traçabilité : définition et obligation",
          contenu: `<p>La <strong>traçabilité</strong> est la capacité à retracer, à travers toutes les étapes de production, de transformation et de distribution, le cheminement d'une denrée alimentaire et de ses ingrédients.</p>
<p>Elle est imposée à tous les exploitants par l'<strong>article 18 du règlement (CE) 178/2002</strong>, selon le principe « <strong>un pas en amont, un pas en aval</strong> » : chaque exploitant doit pouvoir identifier :</p>
<ul>
<li>ses <strong>fournisseurs</strong> (de qui il a reçu chaque produit) : c'est la traçabilité amont ;</li>
<li>ses <strong>clients professionnels</strong> (à qui il a livré) : c'est la traçabilité aval. Un restaurant qui sert le consommateur final n'a pas à identifier ses clients particuliers, mais il doit le faire s'il livre d'autres professionnels.</li>
</ul>
<p>La traçabilité sert à <strong>retrouver rapidement</strong> les produits concernés par un problème sanitaire (TIAC, alerte d'un fournisseur, rappel national), à les retirer de façon ciblée et à identifier l'origine d'une contamination.</p>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> traçabilité = un pas en amont (fournisseurs), un pas en aval (clients professionnels). Pour un restaurant, l'essentiel est la traçabilité amont.</div>`
        },
        {
          titre: "Les documents à conserver",
          contenu: `<p>La traçabilité repose sur des documents simples, à classer et à conserver :</p>
<table>
<thead><tr><th>Document</th><th>Utilité</th></tr></thead>
<tbody>
<tr><td>Factures et bons de livraison</td><td>Identifier le fournisseur, la date de livraison, les produits et quantités</td></tr>
<tr><td>Étiquettes des produits (ou leur copie, leur photo)</td><td>Dénomination, numéro de lot, DLC ou DDM, marque d'identification de l'établissement d'origine</td></tr>
<tr><td>Fiches de réception</td><td>Températures et contrôles à la livraison, refus éventuels</td></tr>
<tr><td>Étiquettes sanitaires des coquillages vivants</td><td>À conserver au moins <strong>60 jours</strong> après la vente ou l'utilisation du contenu du colis</td></tr>
<tr><td>Liste des fournisseurs</td><td>Coordonnées, produits fournis</td></tr>
</tbody>
</table>
<p>La durée de conservation des documents de traçabilité est fixée dans le PMS ; elle doit couvrir au moins la durée de vie des produits, avec une marge permettant de traiter une alerte ou une TIAC déclarée tardivement. Les documents comptables (factures) sont de toute façon conservés plus longtemps pour d'autres obligations.</p>
<div class="encart" data-type="exemple"><strong>Exemple :</strong> au déconditionnement d'un carton de filets de poulet, le commis découpe l'étiquette (lot, DLC, estampille) et la colle dans le cahier de traçabilité à la date du jour ; certains établissements la photographient avec une application dédiée.</div>`
        },
        {
          titre: "La traçabilité interne",
          contenu: `<p>Dans la cuisine, il faut pouvoir relier une <strong>préparation</strong> aux <strong>lots de matières premières</strong> utilisés, surtout pour les préparations à l'avance et les produits sensibles. Les outils sont :</p>
<ul>
<li>l'<strong>étiquetage interne</strong> des préparations (nom, date de fabrication, date limite, et si besoin référence des lots) ;</li>
<li>un <strong>cahier ou une fiche de production</strong> qui note, pour chaque fabrication, la date et les lots utilisés ;</li>
<li>la <strong>conservation des étiquettes</strong> d'origine, classées par date, qui permet de retrouver les lots en usage un jour donné ;</li>
<li>les plats témoins, qui permettent d'analyser ce qui a réellement été servi.</li>
</ul>
<p>Un produit transvasé (farine, sucre, épices) ou reconditionné doit conserver son identité : on note sur le contenant la dénomination, le numéro de lot et la date limite d'origine, ou on garde l'étiquette.</p>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> jeter les étiquettes au moment du déconditionnement « parce que le produit est rangé » fait perdre la traçabilité. L'information doit suivre le produit.</div>`
        },
        {
          titre: "Les non-conformités et les actions correctives",
          contenu: `<p>Une <strong>non-conformité</strong> est un écart par rapport à une exigence réglementaire ou à une procédure du PMS : produit livré trop chaud, température d'enceinte dépassée, refroidissement trop lent, produit périmé trouvé en stock, plainte d'un client, résultat d'analyse défavorable.</p>
<p>Chaque non-conformité est traitée selon une démarche simple :</p>
<ol>
<li><strong>Identifier et isoler</strong> le produit concerné (le mettre à part, clairement signalé « à ne pas utiliser »).</li>
<li><strong>Décider de son sort</strong> : destruction, retour au fournisseur, utilisation possible après évaluation si la sécurité n'est pas en cause.</li>
<li><strong>Corriger la cause</strong> : réparation, changement de fournisseur, formation, modification de procédure.</li>
<li><strong>Enregistrer</strong> sur une fiche de non-conformité : date, nature de l'écart, décision, action corrective, nom de la personne.</li>
<li>Si un produit dangereux a pu être servi ou livré, <strong>informer</strong> les autorités et, le cas échéant, le fournisseur.</li>
</ol>
<div class="encart" data-type="retenir"><strong>À retenir :</strong> isoler, décider, corriger la cause, enregistrer. Une non-conformité bien traitée et enregistrée montre à l'inspecteur que le système fonctionne.</div>`
        },
        {
          titre: "Retrait, rappel et gestion des alertes",
          contenu: `<p>L'<strong>article 19 du règlement (CE) 178/2002</strong> impose à l'exploitant qui considère ou a des raisons de penser qu'une denrée qu'il a importée, produite, transformée ou distribuée est dangereuse d'engager immédiatement les procédures de retrait et d'en <strong>informer les autorités</strong> compétentes (la DDPP).</p>
<table>
<thead><tr><th></th><th>Retrait</th><th>Rappel</th></tr></thead>
<tbody>
<tr><td>Définition</td><td>Empêcher la distribution et la mise en vente d'un produit dangereux <strong>avant</strong> qu'il n'atteigne le consommateur</td><td>Récupérer un produit dangereux qui a <strong>déjà été vendu</strong> aux consommateurs, en les informant</td></tr>
<tr><td>Public visé</td><td>Les professionnels de la chaîne</td><td>Les consommateurs</td></tr>
<tr><td>Exemple</td><td>Le fournisseur demande au restaurant de ne plus utiliser un lot de fromage</td><td>Annonce publique de rappel d'un lot de steaks hachés vendus en magasin</td></tr>
</tbody>
</table>
<p>Les rappels de produits sont publiés sur le site officiel <strong>RappelConso</strong>.</p>
<p><strong>Procédure de gestion d'une alerte</strong> dans le restaurant, quand un fournisseur ou les autorités signalent un lot dangereux :</p>
<ol>
<li>Vérifier, grâce à la traçabilité, si le lot concerné a été reçu.</li>
<li>Bloquer immédiatement le produit et toutes les préparations qui le contiennent : on cesse de les servir, on les isole et on les identifie.</li>
<li>Suivre les consignes du fournisseur ou des autorités (retour, destruction).</li>
<li>Évaluer si des plats contenant le produit ont déjà été servis et, si nécessaire, en informer les autorités.</li>
<li>Enregistrer toutes les actions (dates, quantités, décisions).</li>
</ol>
<div class="encart" data-type="piege"><strong>Piège de l'examen :</strong> retrait = avant le consommateur ; rappel = auprès du consommateur. Et l'exploitant ne peut pas garder l'information pour lui : il doit prévenir les autorités dès qu'il a des raisons de penser qu'un produit est dangereux.</div>`
        }
      ],
      points_cles: [
        "Traçabilité imposée par l'article 18 du règlement (CE) 178/2002 : un pas en amont, un pas en aval",
        "Pour un restaurant, l'essentiel est la traçabilité amont (fournisseurs)",
        "Conserver factures, bons de livraison, étiquettes (lot, DLC, marque d'identification), fiches de réception",
        "Étiquettes sanitaires des coquillages vivants : au moins 60 jours",
        "Traçabilité interne : étiquetage des préparations, fiches de production, étiquettes classées",
        "Non-conformité : isoler, décider, corriger la cause, enregistrer",
        "Retrait : avant le consommateur ; rappel : auprès du consommateur (RappelConso)",
        "Article 19 : retirer et informer la DDPP dès qu'un produit est jugé dangereux"
      ]
    }
  );

  P.questions.push(
    { id: "TRACA-001", chapitre: "tracabilite-non-conformites",
      q: "La traçabilité permet :", options: ["De retirer rapidement un lot dangereux", "De retrouver l'origine d'un produit", "De fixer le prix des plats"], bonnes: [0, 1],
      explication: "La traçabilité permet de retracer le cheminement des denrées pour cibler un retrait et identifier l'origine d'un problème." },
    { id: "TRACA-002", chapitre: "tracabilite-non-conformites",
      q: "Quel article du règlement (CE) 178/2002 impose la traçabilité ?", options: ["L'article 852", "L'article 18", "L'article 1er"], bonnes: [1],
      explication: "L'article 18 du règlement 178/2002 impose la traçabilité ; l'article 19 traite du retrait, du rappel et de l'information des autorités." },
    { id: "TRACA-003", chapitre: "tracabilite-non-conformites",
      q: "Le principe de traçabilité « un pas en amont, un pas en aval » signifie qu'un exploitant doit pouvoir identifier :", options: ["Ses fournisseurs", "Chaque consommateur particulier", "Ses clients professionnels"], bonnes: [0, 2],
      explication: "Chaque exploitant connaît son fournisseur et son client professionnel. Un restaurant n'a pas à identifier les particuliers qu'il sert." },
    { id: "TRACA-004", chapitre: "tracabilite-non-conformites",
      q: "Parmi ces documents, lesquels servent à la traçabilité ?", options: ["Les bons de livraison", "Les étiquettes des produits", "Les avis clients sur internet", "Les factures d'achat"], bonnes: [0, 1, 3],
      explication: "Bons de livraison, factures et étiquettes (lot, DLC, marque d'identification) permettent de retrouver l'origine des produits." },
    { id: "TRACA-005", chapitre: "tracabilite-non-conformites", situation: "Vous ouvrez une bourriche d'huîtres pour le service.",
      q: "Que faites-vous de l'étiquette sanitaire de la bourriche ?", options: ["Je la jette avec la bourriche", "Je la conserve au moins 60 jours", "Je la garde jusqu'au lendemain"], bonnes: [1],
      explication: "L'étiquette sanitaire des coquillages vivants doit être conservée au moins 60 jours après la vente ou l'utilisation du contenu du colis." },
    { id: "TRACA-006", chapitre: "tracabilite-non-conformites", situation: "Un commis déconditionne un carton de steaks hachés surgelés et jette le carton avec son étiquette.",
      q: "Quel est le problème ?", options: ["Les informations de traçabilité (lot, DLC, estampille) sont perdues", "Aucun, le produit est rangé"], bonnes: [0],
      explication: "Lors du déconditionnement, l'étiquette ou ses informations doivent être conservées pour assurer la traçabilité." },
    { id: "TRACA-007", chapitre: "tracabilite-non-conformites",
      q: "Le retrait d'un produit consiste à :", options: ["Le vendre à prix réduit", "Informer les consommateurs qui l'ont déjà acheté", "Empêcher sa distribution avant qu'il n'atteigne le consommateur"], bonnes: [2],
      explication: "Le retrait intervient avant que le produit n'atteigne le consommateur. Le rappel vise les produits déjà vendus et informe les consommateurs." },
    { id: "TRACA-008", chapitre: "tracabilite-non-conformites",
      q: "Le rappel d'un produit consiste à :", options: ["Récupérer un produit déjà vendu aux consommateurs, en les informant", "Le retirer seulement des stocks du fournisseur", "Commander de nouveau le produit"], bonnes: [0],
      explication: "Le rappel s'adresse aux consommateurs qui détiennent le produit. Les rappels sont publiés sur le site officiel RappelConso." },
    { id: "TRACA-009", chapitre: "tracabilite-non-conformites", situation: "Votre fournisseur vous informe qu'un lot de fromage au lait cru est contaminé par Listeria.",
      q: "Que faites-vous ?", options: ["Je vérifie si j'ai reçu ce lot grâce à mes documents de traçabilité", "J'utilise le fromage dans un plat cuit pour ne pas le perdre", "J'enregistre les actions menées", "Je bloque le produit et les préparations qui le contiennent"], bonnes: [0, 2, 3],
      explication: "On identifie le lot, on bloque produit et préparations, on suit les consignes (retour ou destruction) et on enregistre. On ne réutilise pas un lot rappelé, même cuit." },
    { id: "TRACA-010", chapitre: "tracabilite-non-conformites",
      q: "Un exploitant qui a des raisons de penser qu'une denrée qu'il a distribuée est dangereuse doit :", options: ["Attendre qu'un client se plaigne", "Prévenir uniquement son assureur", "Engager son retrait et en informer les autorités"], bonnes: [2],
      explication: "L'article 19 du règlement 178/2002 impose de retirer le produit et d'informer immédiatement les autorités compétentes (DDPP)." },
    { id: "TRACA-011", chapitre: "tracabilite-non-conformites",
      q: "Sur quel site officiel sont publiés les rappels de produits alimentaires en France ?", options: ["RappelConso", "Alim'Confiance", "Légifrance"], bonnes: [0],
      explication: "RappelConso publie les rappels de produits. Alim'Confiance publie les résultats des contrôles sanitaires des établissements." },
    { id: "TRACA-012", chapitre: "tracabilite-non-conformites", situation: "Lors du rangement, vous trouvez en chambre froide un pot de crème dont la DLC est dépassée.",
      q: "Que faites-vous ?", options: ["Je l'isole et je le jette", "Je l'utilise dans une sauce cuite", "Je note la non-conformité et j'en cherche la cause"], bonnes: [0, 2],
      explication: "Un produit à DLC dépassée est retiré et détruit. L'écart est enregistré et la cause recherchée (rotation des stocks, « premier périmé, premier sorti »)." },
    { id: "TRACA-013", chapitre: "tracabilite-non-conformites",
      q: "Une fiche de non-conformité contient :", options: ["L'action corrective et la personne qui l'a menée", "La nature de l'écart et la date", "La décision prise sur le produit"], bonnes: [0, 1, 2],
      explication: "La fiche décrit l'écart, la décision sur le produit, l'action corrective, la date et le responsable. Elle prouve la maîtrise lors d'un contrôle." },
    { id: "TRACA-014", chapitre: "tracabilite-non-conformites",
      q: "Un produit non conforme en attente de décision doit être :", options: ["Laissé à sa place habituelle", "Isolé et clairement identifié « à ne pas utiliser »", "Utilisé en priorité"], bonnes: [1],
      explication: "Le produit est mis à part et signalé pour éviter qu'il soit utilisé par erreur en attendant la décision (retour, destruction)." },
    { id: "TRACA-015", chapitre: "tracabilite-non-conformites", situation: "Vous transvasez un sac de farine dans un bac de stockage.",
      q: "Que devez-vous noter sur le bac ?", options: ["Rien, la farine se reconnaît", "La dénomination, le numéro de lot et la date limite d'origine", "Uniquement la date du jour"], bonnes: [1],
      explication: "Un produit transvasé doit garder son identité : dénomination, lot et date limite, ou conservation de l'étiquette d'origine." },
    { id: "TRACA-016", chapitre: "tracabilite-non-conformites",
      q: "Pour un restaurant qui ne sert que des particuliers, la traçabilité porte surtout sur :", options: ["L'aval (l'identité des clients)", "Aucun des deux", "L'amont (les fournisseurs et les lots reçus)"], bonnes: [2],
      explication: "Le restaurant doit identifier ses fournisseurs et les lots reçus. Il n'a pas à identifier ses clients particuliers, sauf s'il livre d'autres professionnels." }
  );
})();
